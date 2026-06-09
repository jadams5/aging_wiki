// engine.mjs — canonical v0.3 aging-simulator model engine.
//
// Pure ESM, NO DOM, NO globals, NO external deps. This is the single
// source-of-truth reimplementation of the math that currently lives
// embedded in viz/aging-simulator.html. The HTML app will be refactored
// to consume this module in a follow-up; until then the two carry
// identical math and model/test.mjs pins the v0.3 regression targets.
//
// The MODEL object (18 nodes / 38 edges, v0.3) is produced from
// frameworks/causal-graph-parameters.md by build-params.mjs → params.json.
// That .md file is the source of truth for the parameters.

/* ----------------------------- primitives ------------------------------ */

export function clamp01(v) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

// Piecewise-linear interpolation of [[age,val],...] ascending; clamped to endpoints.
export function interp(arr, age) {
  if (age <= arr[0][0]) return arr[0][1];
  if (age >= arr[arr.length - 1][0]) return arr[arr.length - 1][1];
  for (let i = 0; i < arr.length - 1; i++) {
    const a0 = arr[i][0], r0 = arr[i][1], a1 = arr[i + 1][0], r1 = arr[i + 1][1];
    if (age >= a0 && age <= a1) {
      const f = a1 === a0 ? 0 : (age - a0) / (a1 - a0);
      return r0 + f * (r1 - r0);
    }
  }
  return arr[arr.length - 1][1];
}

// Pick parametric params for a node given sex: female override if present.
function paramsFor(node, sex) {
  if (sex === "female" && node.curve.female) return node.curve.female;
  return node.curve.params;
}

// Intrinsic baseline trajectory T(node, sex, age), clamped to [0,1].
// AGE0 is needed for the parametric x = age - AGE0 offset; defaults to 20
// (MODEL.meta.ageRange[0]) so the helper is usable standalone in tests.
export function curveT(node, sex, age, AGE0 = 20) {
  const c = node.curve;
  if (c.form === "table") {
    if (sex === "female" && c.female && c.female.byAge) return clamp01(interp(c.female.byAge, age));
    return clamp01(interp(c.byAge, age));
  }
  const p = paramsFor(node, sex);
  const x = age - AGE0;
  let v;
  switch (c.form) {
    case "linear":      v = p.t0 + p.slope * x; break;
    case "exponential": v = p.A * (Math.exp(p.r * x) - 1); break;
    case "sigmoid":     v = p.L / (1 + Math.exp(-p.k * (age - p.mid))); break;
    case "ushaped":     v = p.t0 + p.amp * Math.pow((age - p.mid) / p.scale, 2); break;
    default:            v = 0;
  }
  return clamp01(v);
}

/* ------------------------------ simulate ------------------------------- */

// Cause order for the six-way decomposition.
const CAUSE_KEYS = ["extrinsic", "cardiovascular", "cancer", "neurodegeneration", "infection", "residual"];

/**
 * simulate(MODEL, opts) — integrate the v0.3 model forward over age.
 *
 * opts:
 *   sex          : "male" | "female"        (required)
 *   lifestyle    : number   (default 1.0)   scales the extrinsic channel only
 *   interventions: { nodeId: { startAge, efficacy } }  (default {})
 *
 * Returns:
 *   { ages, T:{nodeId:[...]}, B:{nodeId:[...]}, hazard:[...],
 *     decomposition:[{age, parts:{extrinsic,cardiovascular,cancer,
 *                     neurodegeneration,infection,residual}}],
 *     survival:[...], LE }
 */
export function simulate(MODEL, { sex, lifestyle = 1.0, interventions = {}, inputs = {}, treatments = {}, offsets = {} } = {}) {
  if (sex !== "male" && sex !== "female") {
    throw new Error(`simulate: sex must be "male" or "female", got ${JSON.stringify(sex)}`);
  }

  const AGE0 = MODEL.meta.ageRange[0]; // 20
  const AGE1 = MODEL.meta.ageRange[1]; // 100
  const DT = MODEL.meta.dt;            // 1
  const couple = MODEL.meta.couple;    // 1.0

  const AGES = [];
  for (let a = AGE0; a <= AGE1; a += DT) AGES.push(a);
  const N_AGE = AGES.length;

  const NODES = MODEL.nodes;
  const NN = NODES.length;
  const NODE_IDX = {};
  NODES.forEach((n, i) => { NODE_IDX[n.id] = i; });

  // Coupling gain matrix G[to][from] = strengthToGain[edge.strength].
  const G = Array.from({ length: NN }, () => new Array(NN).fill(0));
  for (const e of MODEL.edges) {
    const to = NODE_IDX[e.to], from = NODE_IDX[e.from];
    if (to === undefined || from === undefined) continue;
    G[to][from] = MODEL.strengthToGain[e.strength];
  }
  const COUPLE_ITERS = (MODEL.coupling && MODEL.coupling.iterations) || 60;

  // Precompute baseline T over all ages: Tarr[i][k].
  const Tarr = NODES.map((node) => AGES.map((a) => curveT(node, sex, a, AGE0)));

  // B[i][k] via bounded fixed-point coupling per age.
  const Barr = NODES.map(() => new Array(N_AGE));
  const prim = new Array(NN).fill(0);

  for (let k = 0; k < N_AGE; k++) {
    const age = AGES[k];
    // Solve D = prim + couple*(G·D) by fixed-point iteration.
    let D = prim.slice();
    for (let it = 0; it < COUPLE_ITERS; it++) {
      const ND = new Array(NN);
      for (let i = 0; i < NN; i++) {
        let s = 0;
        const Gi = G[i];
        for (let j = 0; j < NN; j++) { if (Gi[j] !== 0) s += Gi[j] * D[j]; }
        ND[i] = prim[i] + couple * s;
      }
      D = ND;
    }
    for (let i = 0; i < NN; i++) Barr[i][k] = clamp01(Tarr[i][k] + D[i]);

    // Accumulate primary deviation for the NEXT step from active interventions.
    if (k < N_AGE - 1) {
      for (let i = 0; i < NN; i++) {
        const iv = interventions[NODES[i].id];
        if (iv && age >= iv.startAge) {
          prim[i] -= iv.efficacy * (Tarr[i][k + 1] - Tarr[i][k]);
        }
      }
    }
  }

  // Mortality — sex-specific competing hazards + six-way decomposition.
  const fr = MODEL.mortality.frailty;
  const frIdx = NODE_IDX[fr.node];
  const causes = MODEL.mortality.causes; // {causeName:{node, RmaxPerYear:{male,female}}}
  const causeNames = Object.keys(causes);
  const residTable = MODEL.mortality.residual.byAgePerYear[sex];
  const extrTable = MODEL.mortality.extrinsic.byAge[sex];

  // B-layer (Stage 1+2): emergent mediator trajectories. Stage 2 wires the CLEAN
  // (non-double-counting) mediator→cause and direct exogenous→cause multipliers
  // into the mortality math below. At population-average inputs every mediator
  // deviation is 0 and every direct-input deviation is 0 ⇒ every multiplier == 1
  // ⇒ the v0.3 mortality math is reproduced exactly.
  const hasB = !!MODEL.bLayer;
  const medValues = hasB ? mediators(MODEL, { sex, inputs, treatments, offsets }) : {};
  // Baseline mediator trajectories (default inputs/treatments/offsets) — the
  // reference against which Stage-2 continuous mediator→cause edges take their
  // deviation. At default inputs medValues === medBaseline ⇒ deviation 0.
  const medBaseline = hasB ? mediators(MODEL, { sex }) : {};
  // popMean lookup for direct exogenous→cause edges.
  const popMean = {};
  if (hasB) for (const inp of MODEL.bLayer.exogenousInputs) popMean[inp.id] = inp.populationMean;
  // Stage-2 cause-edge multipliers, grouped by target (cause name | "residual").
  const causeEdges = (hasB && MODEL.bLayer.causeEdges) || [];
  const causeEdgesByTarget = {};
  for (const e of causeEdges) (causeEdgesByTarget[e.to] ||= []).push(e);

  // Π of Stage-2 edge multipliers for a given target at age-index k.
  function edgeMultFor(target, k, age) {
    const list = causeEdgesByTarget[target];
    if (!list) return 1;
    let m = 1;
    for (const e of list) m *= causeEdgeMult(e, k, age, sex, medValues, medBaseline, inputs, popMean);
    return m;
  }

  const hazard = new Array(N_AGE);
  const decomposition = new Array(N_AGE);

  for (let k = 0; k < N_AGE; k++) {
    const age = AGES[k];
    const extrinsic = interp(extrTable, age) * lifestyle;
    const frailtyMult = Math.exp(fr.beta * (Barr[frIdx][k] - Tarr[frIdx][k]));
    const resid = interp(residTable, age) * edgeMultFor("residual", k, age);

    const parts = { extrinsic };
    let causeSum = 0;
    for (const cn of causeNames) {
      const c = causes[cn];
      const ch = c.RmaxPerYear[sex] * Barr[NODE_IDX[c.node]][k] * edgeMultFor(cn, k, age);
      causeSum += ch;
      parts[cn] = frailtyMult * ch;
    }
    parts.residual = frailtyMult * resid;

    const intrinsic = frailtyMult * (causeSum + resid);
    hazard[k] = extrinsic + intrinsic;
    decomposition[k] = { age, parts };
  }

  // Survival + life expectancy.
  const survival = new Array(N_AGE);
  let cum = 0, leSum = 0;
  for (let k = 0; k < N_AGE; k++) {
    cum += hazard[k] * DT;
    survival[k] = Math.exp(-cum);
    leSum += survival[k] * DT;
  }
  const LE = AGE0 + leSum;

  // Repack T / B as { nodeId: [...] } maps for the public API.
  const T = {}, B = {};
  NODES.forEach((n, i) => { T[n.id] = Tarr[i]; B[n.id] = Barr[i]; });

  return { ages: AGES, T, B, hazard, decomposition, survival, LE, medValues };
}

/** lifeExpectancy(MODEL, opts) — convenience returning just LE. */
export function lifeExpectancy(MODEL, opts) {
  return simulate(MODEL, opts).LE;
}

/* ============================ B-layer (Stage 1) ============================ */
//
// Endogenous-mediator tier. Exogenous behavioral/environmental inputs drive
// emergent mediator VALUES (LDL, systolic BP, BMI, HbA1c). This layer is NOT
// wired to mortality in Stage 1 — `simulate()`'s hazard/decomposition/LE math
// is untouched; mediator trajectories are returned alongside as `medValues`.
//
// Emergence formula (per § B-layer parameters):
//   mediator(age) = baseline_{med,sex}(age)
//                 + Σ_x coeff_{x→med} · form(input_x − populationMean_x [, context])
//                 + personal_offset (default 0)
//                 [then any active treatment perturbations on that mediator]
// At population-average inputs (every input == its populationMean) + zero
// offset + no treatment, mediator == baseline. THAT IS THE INVARIANT.

// Saturating soluble-fiber transform (Brown 1999: ~linear to ~10 g of *effect*,
// dampened beyond). The knee is placed at the population mean + 10 g so the
// canonical "+10 g/day → −22 mg/dL" deviation lands fully in the linear regime,
// and "+20 g" is dampened above the knee (so it is NOT double the +10 effect).
function fiberSat(g, knee) {
  if (g <= knee) return g;
  return knee + 0.35 * (g - knee);
}

// Convex sodium→SBP with effect-modification: steeper at higher baseline SBP
// (older / hypertensive). He 2013: ~−5.4 mmHg/100 mmol in HTN vs −1.0 in
// normotensives. `coeff` (−5.8 per 100 mmol) is scaled by a baseline-SBP factor
// in roughly [0.35 (normotensive ~110) .. 1.15 (hypertensive ~155+)].
function sodiumMod(baselineSBP) {
  // Linear map: 110 mmHg → 0.35, 155 mmHg → 1.15; clamped.
  const f = 0.35 + (baselineSBP - 110) * (1.15 - 0.35) / (155 - 110);
  return f < 0.2 ? 0.2 : f > 1.3 ? 1.3 : f;
}

// Threshold alcohol→SBP (Roerecke 2017): negligible up to ~2 drinks/day, then
// steep rise. Returns mmHg shift for an absolute drinks/day intake. Anchored so
// ~6 drinks/day ≈ +5.5 mmHg above the ~2-drink threshold (the cited heavy-vs-cut
// magnitude). `coeff` (5.5) is the asymptotic per-step slope above threshold.
function alcoholThreshold(drinks, coeff) {
  const thr = 2;
  if (drinks <= thr) return 0;
  // Steep, slightly accelerating above threshold; +6 drinks → ~+5.5 mmHg.
  return coeff * (drinks - thr) / 4;
}

// Exercise→HbA1c (Umpierre 2011): −0.67% for a full sedentary→active shift.
// Scaled by activity deviation across the ~150 min/wk sedentary→active span.
function exerciseScale(deviationMin) {
  // Full −0.67% credited at +150 min/wk above the sedentary reference; capped.
  const f = deviationMin / 150;
  return f > 1.5 ? 1.5 : f < -1 ? -1 : f;
}

// Dynamic caloric-balance→weight (Hall 2013): the static 7700 kcal/kg rule
// overstates long-run weight change by ~40–50%; only ~weightAsymptoteFraction
// of it is realized. Returns Δkg for a sustained daily energy-balance offset.
function weightDynamicKg(calBalancePerDay, asymptoteFraction) {
  const STATIC_KCAL_PER_KG = 7700;
  // Static ~1 yr accumulation, damped to the realized long-run asymptote.
  const staticKg = (calBalancePerDay * 365) / STATIC_KCAL_PER_KG;
  return staticKg * asymptoteFraction;
}

// Apply a single mediator edge: returns the additive contribution to the
// mediator value (in the mediator's natural units) for one age's baseline.
function applyMediatorEdge(edge, inputs, popMean, baselineVal, K) {
  const x = inputs[edge.from];
  const dx = (x === undefined ? popMean : x) - popMean; // deviation from pop mean
  switch (edge.form) {
    case "linear":
      return edge.coeff * dx;
    case "fiberSaturating": {
      const intake = x === undefined ? popMean : x;
      const knee = popMean + 10; // linear to popMean+10 g, dampened beyond
      return edge.coeff * (fiberSat(intake, knee) - fiberSat(popMean, knee));
    }
    case "exerciseHbA1c":
      return edge.coeff * exerciseScale(dx);
    case "sodiumConvex":
      // coeff is per 100 mmol; convex + baseline-SBP effect-modified.
      return edge.coeff * (dx / 100) * sodiumMod(baselineVal);
    case "alcoholThreshold": {
      const intake = x === undefined ? popMean : x;
      return alcoholThreshold(intake, edge.coeff) - alcoholThreshold(popMean, edge.coeff);
    }
    case "weightDynamic": {
      // calorieBalance offset → Δkg → ΔBMI via reference height.
      const dkg = weightDynamicKg(dx, K.weightAsymptoteFraction);
      return dkg / (K.heightRefM * K.heightRefM);
    }
    default:
      return edge.coeff * dx;
  }
}

/* ===================== B-layer (Stage 2): cause edges ===================== */
//
// Stage-2 wires mediator VALUES (from Stage 1) and a few direct exogenous inputs
// into the per-cause / residual hazard via multiplicative deviation factors.
//
//   cause_hazard_c(age) = [v0.3 cause hazard] · Π_edges mult_edge(age)
//
// Every multiplier is 1 at population-average inputs (continuous: value==baseline
// ⇒ Δ=0; direct: input==popMean ⇒ Δ=0; categorical smoking: normalized so the
// population mix averages to 1 and the default/undefined status maps to 1), so
// the v0.3 mortality reproduces exactly.
//
// CATEGORICAL SMOKING NORMALIZATION: the CDC cause baselines already embed the
// US smoker mix (≈61% never / 25% former / 14% current). Raw relative RRs are
// therefore divided by the population-mix mean RR so the mix averages to 1 and
// never-smokers come out PROTECTED (<1). The `smokingStatus` input defaults
// (undefined / its sentinel populationMean) to the population mix ⇒ mult 1.

// Population smoking-status mix (US adults) used to normalize categorical RRs.
const SMOKE_MIX = { never: 0.61, former: 0.25, current: 0.14 };

// Resolve a continuous direct-exogenous input deviation from population mean.
// Undefined input ⇒ deviation 0 (the invariant: default == population average).
function inputDev(inputs, popMean, id) {
  const x = inputs[id];
  return (x === undefined ? popMean[id] : x) - popMean[id];
}

// Compute one Stage-2 cause-edge multiplier at age-index k / age `age`.
function causeEdgeMult(e, k, age, sex, medValues, medBaseline, inputs, popMean) {
  switch (e.form) {
    // -------- continuous mediator → cause: exp(β · (value − baseline)) --------
    case "mediatorLogLinear": {
      // β may be a scalar OR age-modified (Lewington SBP): β(age)=base·half^((age−refAge)/halfLife).
      let beta = e.beta;
      if (e.betaAgeMod) {
        const { refAge, halfPer } = e.betaAgeMod; // slope halves per `halfPer` years
        beta = e.beta * Math.pow(0.5, (age - refAge) / halfPer);
      }
      const dev = medValues[e.med][k] - medBaseline[e.med][k];
      return Math.exp(beta * dev);
    }
    case "mediatorThresholdRamp": {
      // exp(slope · max(0, value − threshold)), capped. At baseline value the
      // deviation contribution is exp(slope·max(0, baseline − threshold)); we
      // take the RATIO to the baseline so mult==1 when value==baseline.
      const v = medValues[e.med][k];
      const b = medBaseline[e.med][k];
      const num = Math.min(e.cap, Math.exp(e.slope * Math.max(0, v - e.threshold)));
      const den = Math.min(e.cap, Math.exp(e.slope * Math.max(0, b - e.threshold)));
      return num / den;
    }
    // ------------------ direct exogenous → cause (continuous) ------------------
    case "directLogLinear":
      return Math.exp(e.beta * inputDev(inputs, popMean, e.input));
    case "directHinge": {
      // exp(slope · max(0, input − knee)); =1 below the knee. Population mean is
      // below the knee ⇒ default mult 1.
      const x = inputs[e.input];
      const xv = x === undefined ? popMean[e.input] : x;
      return Math.exp(e.slope * Math.max(0, xv - e.knee));
    }
    // -------------------- categorical smoking (normalized) --------------------
    case "smokingCategorical": {
      // e.rr: { never, former, current }. Normalize by the population-mix mean
      // so the mix averages to 1. Default status (undefined) == population mix
      // ⇒ mult exactly 1.
      const meanRR = SMOKE_MIX.never * e.rr.never
        + SMOKE_MIX.former * e.rr.former
        + SMOKE_MIX.current * e.rr.current;
      const status = inputs[e.input]; // "never" | "former" | "current" | undefined
      if (status === undefined) return 1; // population mix → normalized mult 1
      const raw = e.rr[status];
      if (raw === undefined) return 1; // unknown status → neutral
      return raw / meanRR;
    }
    default:
      return 1;
  }
}

// Apply a treatment perturbation to a mediator value. `dose` in [0,1] scales it.
function applyTreatment(tx, value, dose) {
  switch (tx.form) {
    case "pctReduction": {
      const reduced = value * (1 - tx.amount * dose);
      const floor = tx.floor ?? -Infinity;
      return reduced < floor ? floor : reduced;
    }
    case "absShift":
      return value + tx.amount * dose;
    default:
      return value;
  }
}

/**
 * mediators(MODEL, opts) — emergent endogenous-mediator trajectories.
 *
 * opts:
 *   sex        : "male" | "female"             (required)
 *   inputs     : { inputId: value }            (default {} → all at populationMean)
 *   treatments : { txId: doseInZeroToOne | true } (default {}; true === full dose 1.0)
 *   offsets    : { medId: number }             (default {}; personal residual, natural units)
 *
 * Returns { medId: [valueByAge over MODEL.meta.ageRange] }.
 *
 * Invariant: inputs={} (or every input == populationMean), treatments={},
 * offsets={} ⇒ each mediator value == its baseline curve at that age.
 */
export function mediators(MODEL, { sex, inputs = {}, treatments = {}, offsets = {} } = {}) {
  if (sex !== "male" && sex !== "female") {
    throw new Error(`mediators: sex must be "male" or "female", got ${JSON.stringify(sex)}`);
  }
  const b = MODEL.bLayer;
  if (!b) throw new Error("mediators: MODEL.bLayer is missing (regenerate params.json)");

  const AGE0 = MODEL.meta.ageRange[0];
  const AGE1 = MODEL.meta.ageRange[1];
  const DT = MODEL.meta.dt;
  const AGES = [];
  for (let a = AGE0; a <= AGE1; a += DT) AGES.push(a);

  const K = b.constants || { heightRefM: 1.7, weightAsymptoteFraction: 0.55 };

  // populationMean lookup by input id.
  const popMean = {};
  for (const inp of b.exogenousInputs) popMean[inp.id] = inp.populationMean;

  // Edges grouped by target mediator.
  const edgesByMed = {};
  for (const e of b.mediatorEdges) (edgesByMed[e.to] ||= []).push(e);
  // Treatments grouped by target mediator (only those requested in opts).
  const txByMed = {};
  for (const tx of b.treatments) {
    if (treatments[tx.id] !== undefined && treatments[tx.id] !== false) {
      (txByMed[tx.to] ||= []).push(tx);
    }
  }

  const out = {};
  for (const med of b.mediators) {
    const curve = med.baseline[sex];
    const offset = offsets[med.id] ?? 0;
    const edges = edgesByMed[med.id] || [];
    const txs = txByMed[med.id] || [];
    out[med.id] = AGES.map((age) => {
      const baselineVal = interp(curve, age);
      let v = baselineVal;
      for (const e of edges) {
        v += applyMediatorEdge(e, inputs, popMean[e.from], baselineVal, K);
      }
      v += offset;
      for (const tx of txs) {
        const dose = treatments[tx.id] === true ? 1.0 : treatments[tx.id];
        v = applyTreatment(tx, v, dose);
      }
      return v;
    });
  }
  return out;
}

export { CAUSE_KEYS };
