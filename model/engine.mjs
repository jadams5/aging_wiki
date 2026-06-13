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
// Monotone cubic (Fritsch–Carlson PCHIP) interpolation of an [[age,value],…]
// table: passes through every anchor, smooth between them, and monotone (no
// overshoot — cause rates stay ≥0, mediators don't overshoot). This is what
// makes the table-driven curves (mediators, CDC cause rates, cause-node burdens)
// render smoothly instead of in blocky 10-year linear segments.
export function interp(arr, age) {
  const n = arr.length;
  if (age <= arr[0][0]) return arr[0][1];
  if (age >= arr[n - 1][0]) return arr[n - 1][1];
  let i = 0;
  while (i < n - 1 && age > arr[i + 1][0]) i++;
  if (n === 2) {
    const f = (age - arr[0][0]) / (arr[1][0] - arr[0][0]);
    return arr[0][1] + f * (arr[1][1] - arr[0][1]);
  }
  const h = new Array(n - 1), d = new Array(n - 1);
  for (let k = 0; k < n - 1; k++) { h[k] = arr[k + 1][0] - arr[k][0]; d[k] = (arr[k + 1][1] - arr[k][1]) / h[k]; }
  const m = new Array(n);
  m[0] = d[0]; m[n - 1] = d[n - 2];
  for (let k = 1; k < n - 1; k++) m[k] = (d[k - 1] * d[k] <= 0) ? 0 : (d[k - 1] + d[k]) / 2;
  for (let k = 0; k < n - 1; k++) {
    if (d[k] === 0) { m[k] = 0; m[k + 1] = 0; continue; }
    const a = m[k] / d[k], b = m[k + 1] / d[k], s = a * a + b * b;
    if (s > 9) { const t = 3 / Math.sqrt(s); m[k] = t * a * d[k]; m[k + 1] = t * b * d[k]; }
  }
  const t = (age - arr[i][0]) / h[i], t2 = t * t, t3 = t2 * t;
  return (2*t3 - 3*t2 + 1) * arr[i][1]
       + (t3 - 2*t2 + t) * h[i] * m[i]
       + (-2*t3 + 3*t2) * arr[i + 1][1]
       + (t3 - t2) * h[i] * m[i + 1];
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

// Cause order for the competing-hazards decomposition (v0.4.1: residual split into
// named CDC causes — diabetes/COPD/CKD/liver — so the stacked chart + readout show
// them; residual stays last as the unmodeled remainder).
// Op B 2026-06-11: added the falls bucket (W00-W19 falls + E40-E46 malnutrition, bundled)
// before "residual"; RENAMED "frailty" → "falls" 2026-06-11 (the cause was never frailty).
const CAUSE_KEYS = ["extrinsic", "cardiovascular", "cancer", "neurodegeneration", "infection", "diabetes", "copd", "ckd", "liver", "falls", "residual"];

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
// Single source of truth for the causal graph: MODEL.edges is one unified array, each
// edge tagged with `kind` (coupling | mediator | cause | augment | frailty). This helper
// partitions it back into the per-kind lists the engine math consumes. Driver edges live
// in stateNodes' rate.terms and terminal (cause→mortality) edges in node `role` tags — both
// are derived directly from those authoritative sources by the viz, not duplicated here.
// Legacy fallback: if MODEL.edges carries no `kind` tags (pre-unification data), read the
// old coupling array + bLayer.{causeEdges,mediatorEdges,stateAugments} + frailty.betaByCause.
export function edgesByKind(MODEL) {
  // STRUCTURAL STUBS are excluded from ALL execution here, at the single partition
  // point — so a stub is inert by construction, independent of any per-form zero value
  // (`beta:0` does NOT neutralize forms like mediatorThresholdRamp, which read slope/
  // threshold/cap, and a zero-beta frailty edge would otherwise OVERWRITE the live beta
  // for its target in the betaByCause map below). The viz still renders stubs (it reads
  // MODEL.edges directly). A stub is any edge tagged kind:"stub" or provenance:"stub".
  // See sops/adding-causal-graph-nodes.md § 0a.
  const E = (MODEL.edges || []).filter((e) => e.kind !== "stub" && e.provenance !== "stub");
  const kinded = E.some((e) => e.kind);
  const B = MODEL.bLayer || {};
  const fr = (MODEL.mortality && MODEL.mortality.frailty) || {};
  return {
    coupling: kinded ? E.filter((e) => e.kind === "coupling") : E,
    cause:    kinded ? E.filter((e) => e.kind === "cause")    : (B.causeEdges || []),
    mediator: kinded ? E.filter((e) => e.kind === "mediator") : (B.mediatorEdges || []),
    augment:  kinded ? E.filter((e) => e.kind === "augment")  : (B.stateAugments || []),
    betaByCause: kinded
      ? Object.fromEntries(E.filter((e) => e.kind === "frailty").map((e) => [e.to, e.beta]))
      : (fr.betaByCause || {}),
  };
}

export function simulate(MODEL, { sex, lifestyle = 1.0, interventions = {}, inputs = {}, treatments = {}, offsets = {}, operators = [] } = {}) {
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

  // STUB NODES (provenance:"stub") are excluded from the simulation here — the single point
  // where MODEL.nodes enters the engine — so a planned-but-unmodeled node (e.g. a future
  // sinoatrial-node-reserve state) is inert by construction, exactly like a kind:"stub" edge.
  // The viz still renders it (greyed) so the gap is VISIBLE on the graph. See § stub rung.
  const NODES = (MODEL.nodes || []).filter((n) => n.provenance !== "stub");
  const NN = NODES.length;
  const NODE_IDX = {};
  NODES.forEach((n, i) => { NODE_IDX[n.id] = i; });

  // Coupling gain matrix G[to][from] = strengthToGain[edge.strength].
  const EK = edgesByKind(MODEL);
  const G = Array.from({ length: NN }, () => new Array(NN).fill(0));
  for (const e of EK.coupling) {
    const to = NODE_IDX[e.to], from = NODE_IDX[e.from];
    if (to === undefined || from === undefined) continue;
    G[to][from] = MODEL.strengthToGain[e.strength];
  }
  const COUPLE_ITERS = (MODEL.coupling && MODEL.coupling.iterations) || 60;

  // Precompute baseline T over all ages: Tarr[i][k]. A node carrying an emergent `rate` (the
  // de-age-pegging migration substrate) integrates its baseline FORWARD — T[k]=T[k-1]+rate·DT,
  // T[0]=initial — instead of evaluating a closed-form age curve; age is no longer an input, the
  // trajectory EMERGES from the integral. The rate has a constant `base` (a former LINEAR curve →
  // base = slope, age-free) and an optional value-proportional `self:{coeff,offset}` term
  // (rate += coeff·(value+offset)) — a SELF-AMPLIFYING rate from which an EXPONENTIAL baseline
  // emerges age-free (e.g. senescence's paracrine feed-forward). For a former exponential curve
  // A·(e^(r·x)−1), `self.coeff = e^r−1` / `self.offset = A` reproduces it EXACTLY at the integer age
  // grid (the discrete-time growth factor), so baseline + interventions are numerically unchanged.
  const Tarr = NODES.map((node) => {
    if (node.rate) {
      const base = node.rate.base || 0;
      const self = node.rate.self;   // self-dynamic (value-proportional) rate term; optional
      const logistic = self && self.form === "logistic";  // SATURATING self-dynamic (sigmoid nodes)
      const E = logistic ? Math.exp(self.k * DT) : 1;      // one-step growth factor
      const arr = new Array(N_AGE);
      arr[0] = clamp01(node.initial ?? 0);
      for (let k = 1; k < N_AGE; k++) {
        if (logistic) {
          // EXACT age-free logistic one-step map: B_next = L·B·E / (L + B·(E−1)), E = exp(k·dt).
          // The closed-form solution of dB/dt = k·B·(1−B/L) — reproduces the former sigmoid curve
          // L/(1+e^(−k(age−mid))) EXACTLY at the integer grid (no Euler error), so baseline + intervention
          // LE are numerically unchanged. The saturating rise EMERGES age-free from the self-dynamic.
          const L = self.cap, b = arr[k - 1];
          arr[k] = clamp01((L * b * E) / (L + b * (E - 1)));
        } else {
          let rate = base;
          if (self) rate += self.coeff * (arr[k - 1] + (self.offset || 0));  // exponential/linear (Euler-exact)
          arr[k] = clamp01(arr[k - 1] + rate * DT);
        }
      }
      return arr;
    }
    return AGES.map((a) => curveT(node, sex, a, AGE0));
  });

  // B[i][k] via bounded fixed-point coupling per age.
  const Barr = NODES.map(() => new Array(N_AGE));
  const prim = new Array(NN).fill(0);

  // Node-level integrated exogenous-driver channel. A hallmark node may carry `rate:{base,terms}`;
  // its `terms` (same schema as state-node rate terms, deviation-form {id,minus:popMean}) ACCUMULATE
  // over age into `accumDev`, exactly as `prim` accumulates intervention effects. accumDev is folded
  // into the PRIMARY deviation P (below) so an exposure-driven node burden propagates through the
  // coupling matrix (smoke→GI→cancer). Terms resolve against EXOGENOUS INPUTS only (inter-hallmark
  // drivers stay couplings). At population-default inputs every term is 0 ⇒ accumDev≡0 ⇒ unchanged.
  //
  // AGE-INDEXED EXPOSURE PROFILES: `inMap[id][k]` is the input value at AGES[k]. An exogenous input
  // may be supplied as a SCALAR (constant lifetime exposure — back-compat) OR as an age-profile
  // `{byAge:[[age,value],...]}` (interpolated), so an integrated driver sees a genuine EXPOSURE
  // HISTORY — e.g. a former smoker (intensity until a quit age, then 0) accrues GI burden while
  // smoking and PLATEAUS after quitting (the realism a constant input cannot express). A profile
  // only changes a rate-term integral; scalar inputs are byte-identical to the previous behaviour.
  const inMap = {};
  for (const x of (MODEL.bLayer && MODEL.bLayer.exogenousInputs) || []) {
    const iv = inputs[x.id];
    const pm = (typeof x.populationMean === "number") ? x.populationMean : 0;
    inMap[x.id] = (typeof iv === "number") ? new Array(N_AGE).fill(iv)
      : (iv && Array.isArray(iv.byAge)) ? AGES.map((a) => interp(iv.byAge, a))
      : new Array(N_AGE).fill(pm);
  }
  const accumDev = new Array(NN).fill(0);
  const hasRateTerms = NODES.map((n) => !!(n.rate && n.rate.terms && n.rate.terms.length));

  // GENERIC INTERVENTION OPERATORS (design-only machinery; all coefficients caller-supplied — synthetic
  // in tests; NO baked-in compound efficacies). `operators` is a list of tagged objects; with `operators:[]`
  // (the default) every structure below is inert ⇒ baseline byte-identical. Three operators implemented;
  // `clearance-restoration` is deferred until the clearance-capacity state is designed.
  //   • senolytic-pulse  {kind, target, killFraction, ages:[...]}  → at each dosing age, drop the target
  //       node's burden by killFraction·B (a persistent NEGATIVE deviation in `pulseAcc`). Re-accumulation
  //       is NOT modeled here (it needs the clearance state) — the drop persists. The operator the existing
  //       freeze/slow cannot express (freeze prevents future accrual; it never removes existing burden).
  //   • senomorphic      {kind, from, to, atten, startAge, endAge} → temporarily scale the coupling gain
  //       G[to][from] by (1−atten) over the window (attenuate signalling without clearing the source).
  //   • production-suppress {kind, target, atten, startAge, endAge} → over the window reduce the target's
  //       accrual increment by atten (lower the RATE of new burden; distinct from clearing existing).
  const pulseAcc = new Array(NN).fill(0);
  const pulseOps = [], senomorphicOps = [], prodSuppressOps = [];
  for (const op of operators || []) {
    if (op.kind === "senolytic-pulse" && NODE_IDX[op.target] !== undefined)
      pulseOps.push({ idx: NODE_IDX[op.target], frac: op.killFraction || 0, ages: new Set(op.ages || []) });
    else if (op.kind === "senomorphic" && NODE_IDX[op.to] !== undefined && NODE_IDX[op.from] !== undefined)
      senomorphicOps.push({ to: NODE_IDX[op.to], from: NODE_IDX[op.from], atten: op.atten || 0, startAge: op.startAge, endAge: op.endAge });
    else if (op.kind === "production-suppress" && NODE_IDX[op.target] !== undefined)
      prodSuppressOps.push({ idx: NODE_IDX[op.target], atten: op.atten || 0, startAge: op.startAge, endAge: op.endAge });
  }

  for (let k = 0; k < N_AGE; k++) {
    const age = AGES[k];
    // Primary deviation P = interventions (prim) + integrated exogenous drivers (accumDev).
    // Solving D = P + couple*(G·D) puts accumDev INSIDE the coupling solve, so an exposure-driven
    // node burden propagates downstream through G (correction: must not be added post-solve).
    const P = new Array(NN);
    for (let i = 0; i < NN; i++) P[i] = prim[i] + accumDev[i] + pulseAcc[i];
    // senomorphic: temporarily scale active coupling gains for this age (restored after the solve below)
    const semMods = [];
    for (const op of senomorphicOps) {
      if (age >= op.startAge && age <= op.endAge && G[op.to][op.from] !== 0) {
        semMods.push([op.to, op.from, G[op.to][op.from]]);
        G[op.to][op.from] *= (1 - op.atten);
      }
    }
    let D = P.slice();
    for (let it = 0; it < COUPLE_ITERS; it++) {
      const ND = new Array(NN);
      for (let i = 0; i < NN; i++) {
        let s = 0;
        const Gi = G[i];
        for (let j = 0; j < NN; j++) { if (Gi[j] !== 0) s += Gi[j] * D[j]; }
        ND[i] = P[i] + couple * s;
      }
      D = ND;
    }
    for (let i = 0; i < NN; i++) Barr[i][k] = clamp01(Tarr[i][k] + D[i]);
    for (const [to, from, orig] of semMods) G[to][from] = orig;  // restore senomorphic-scaled gains

    // Accumulate for the NEXT step: interventions into prim, integrated drivers into accumDev
    // (= ∫ rate-terms·dt, deviation-form ⇒ 0 at population-default). The accumDev now also supports
    // NODE-DEVIATION drivers ({node:id} reading D[k]) — the rate-channel machinery for a future
    // sen↔infl loop; with no such term in the model it is inert (byte-identical to the exogenous path).
    if (k < N_AGE - 1) {
      for (let i = 0; i < NN; i++) {
        const iv = interventions[NODES[i].id];
        if (iv && age >= iv.startAge) {
          prim[i] -= iv.efficacy * (Tarr[i][k + 1] - Tarr[i][k]);
        }
        if (hasRateTerms[i]) accumDev[i] += nodeRateTermsSum(NODES[i].rate.terms, inMap, D, NODE_IDX, k) * DT;
      }
      // production-suppress: reduce the target's accrual increment over its window (lower new-burden rate)
      for (const op of prodSuppressOps) {
        if (age >= op.startAge && age <= op.endAge) prim[op.idx] -= op.atten * (Tarr[op.idx][k + 1] - Tarr[op.idx][k]);
      }
      // senolytic pulse: at a dosing age, drop the target burden by frac·B (persistent negative deviation)
      for (const op of pulseOps) {
        if (op.ages.has(age)) pulseAcc[op.idx] -= op.frac * Barr[op.idx][k];
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
  // B0 (node-burden access): expose node-layer burdens to the state-node phase so state
  // nodes can read a node as a driver (e.g. cellular-senescence → arterial-stiffness), now
  // an ordinary edge — dismantling the node↔state-node seam. `Live` carries interventions;
  // `Base` is the no-intervention reference (== Tarr) for the mediator-baseline pass.
  const nodeBurdensLive = {}, nodeBurdensBase = {};
  for (let i = 0; i < NN; i++) { nodeBurdensLive[NODES[i].id] = Barr[i]; nodeBurdensBase[NODES[i].id] = Tarr[i]; }
  const medValues = hasB ? mediators(MODEL, { sex, inputs, treatments, offsets, nodeBurdens: nodeBurdensLive }) : {};
  // Baseline mediator trajectories (default inputs/treatments/offsets) — the
  // reference against which Stage-2 continuous mediator→cause edges take their
  // deviation. At default inputs medValues === medBaseline ⇒ deviation 0.
  const medBaseline = hasB ? mediators(MODEL, { sex, nodeBurdens: nodeBurdensBase }) : {};

  // A4: stiffness → SBP (the BP-MEDIATED slice of stiffness→CVD). Augment the live SBP by
  // βstiff·(NON-GLYCEMIC stiffness deviation) — the crosslink slice is excluded because its
  // CVD is already in the decomposed HbA1c→CVD + the B3 direct edge (no glycemia re-double-
  // count). Deviation-form ⇒ =0 at the pop stiffness trajectory, so the SBP baseline and the
  // Lewington SBP→CVD calibration (shared by BMI/Lu + sodium) are preserved EXACTLY. Mutates
  // medValues.systolicBP in place; the SBP→CVD/CKD edges then read the augmented value vs the
  // un-augmented medBaseline. Complements the B3 BP-independent edge (B3 + A4 = total, split).
  const s2sbp = hasB && MODEL.bLayer.stiffnessToSBP;
  if (s2sbp && medValues["arterial-stiffness"] && medValues.systolicBP) {
    const beta = (s2sbp.betaPerUnit && s2sbp.betaPerUnit[sex]) || 0;
    const stL = medValues["arterial-stiffness"], stB = medBaseline["arterial-stiffness"];
    const exId = s2sbp.excludeDriver, exW = s2sbp.excludeWeight || 0;
    const exL = exId && medValues[exId], exB = exId && medBaseline[exId];
    const sbp = medValues.systolicBP;
    for (let k = 0; k < sbp.length; k++) {
      let dStiff = stL[k] - stB[k];
      if (exL) dStiff -= exW * (exL[k] - exB[k]);   // remove the glycemic (crosslink) slice
      sbp[k] += beta * dStiff;
    }
  }
  // popMean lookup for direct exogenous→cause edges.
  const popMean = {};
  if (hasB) for (const inp of MODEL.bLayer.exogenousInputs) popMean[inp.id] = inp.populationMean;
  // Stage-2 cause-edge multipliers, grouped by target (cause name | "residual").
  const causeEdges = (hasB && EK.cause) || [];
  const causeEdgesByTarget = {};
  for (const e of causeEdges) (causeEdgesByTarget[e.to] ||= []).push(e);

  // Π of Stage-2 edge multipliers for a given target at age-index k.
  // NOTE: the special target "allcause" (Stage-3a activityFitness edge) is NOT a
  // cause name — it is applied separately to the WHOLE intrinsic bracket below,
  // so it must be excluded from the per-cause/residual products here.
  function edgeMultFor(target, k, age) {
    const list = causeEdgesByTarget[target];
    if (!list) return 1;
    let m = 1;
    for (const e of list) {
      // node-source cause edge (e.g. sarcopenia→falls): a phenotype/hallmark NODE drives a
      // specific cause's hazard via exp(β·(B−T)) — the SAME multiplicative form as a mediator
      // cause edge (e.g. LDL→cardiovascular), only the source is a burden-layer node read as its
      // deviation from baseline trajectory, not a clinical mediator. This is the regular
      // driver→cause edge; it REPLACES the legacy per-cause `frailty` multiplier for one named
      // cause. (The `frailty` KIND remains for a future non-specific reserve node: one source ×
      // MANY causes — which is a genuinely different shape.)
      if (e.form === "nodeLogLinear") {
        m *= Math.exp(e.beta * (nodeBurdensLive[e.from][k] - nodeBurdensBase[e.from][k]));
      } else {
        m *= causeEdgeMult(e, k, age, sex, medValues, medBaseline, inputs, popMean);
      }
    }
    return m;
  }

  // Stage-3a: whole-intrinsic-bracket multiplier (target "allcause"). Currently
  // the activityFitness (cardiorespiratory-fitness) channel: mult = exp(β·ΔMETs),
  // ΔMETs mapped from the activity input relative to its population mean (0 at
  // popMean ⇒ mult 1 ⇒ baseline preserved). Time-invariant (no age dependence),
  // so it is computed once and applied to (causeSum + resid) at every age — i.e.
  // the same place the frailty multiplier acts, and weight/glucose-independent.
  // Age-INVARIANT all-cause edges (e.g. activityFitness) are computed once here;
  // age-DEPENDENT all-cause edges (e.g. bmiJcurve, whose factor varies with the
  // per-age BMI value/baseline) are computed inside the per-age loop below.
  const allcauseEdges = causeEdgesByTarget["allcause"] || [];
  const ageInvariantAllcause = allcauseEdges.filter((e) => e.form !== "bmiJcurve");
  const bmiJcurveEdges = allcauseEdges.filter((e) => e.form === "bmiJcurve");
  let allcauseMult = 1;
  for (const e of ageInvariantAllcause) allcauseMult *= allcauseEdgeMult(e, inputs, popMean);

  const hazard = new Array(N_AGE);
  const decomposition = new Array(N_AGE);

  // B2: cause-SPECIFIC frailty (Peng 2022 frail-vs-robust HRs differ by cause:
  // respiratory ~4.9× ≫ CV ~2.6× > cancer ~2.0×). `betaByCause` carries ln(HR)
  // for a full-span (robust→frail) sarcopenia deviation; falls back to a shared
  // `beta`/`default` for backward-compat. All =1 at baseline (frailtyDev 0).
  const frBeta = EK.betaByCause || {};
  const frDefault = (frBeta.default !== undefined) ? frBeta.default : (fr.beta || 0);
  // Old-age escalation is BURDEN-DRIVEN, not age-keyed (v0.4). Each cause hazard
  // uses the odds link Rmax·B/(1−B): the cause-node burden tables store a
  // RESERVE-DEPLETION fraction in [0,1) that asymptotes toward 1 (B=0.5 at age 90,
  // →0.97 by 130), and the odds link converts that back to a hazard. This is
  // algebraically identical to the former `Rmax·B·gompTail` at population-baseline
  // (B_reserve = h/(1+h) where h was the old normalized rate; the >90 anchors
  // E/(1+E), E=exp(0.0866·(age−90)), reproduce the prior MRDT-8yr Gompertz tail
  // EXACTLY) — but the escalation now lives in B, so interventions that slow burden
  // accumulation bend the >90 mortality curve instead of being overridden by a
  // chronological-age factor. Residual (the explicitly-UNMODELED remainder) keeps
  // its escalation baked into its own age table; extrinsic is still un-escalated.

  for (let k = 0; k < N_AGE; k++) {
    const age = AGES[k];
    const extrinsic = interp(extrTable, age) * lifestyle;
    const frailtyDev = Barr[frIdx][k] - Tarr[frIdx][k];
    const frailtyMultFor = (cn) =>
      Math.exp((frBeta[cn] !== undefined ? frBeta[cn] : frDefault) * frailtyDev);
    const resid = interp(residTable, age) * edgeMultFor("residual", k, age);

    // Stage-3b: BMI J-curve whole-bracket multiplier (target "allcause"), per-age.
    let bmiJMult = 1;
    for (const e of bmiJcurveEdges) bmiJMult *= bmiJcurveMult(e, k, medValues, medBaseline);

    // Stage-3a activityFitness + Stage-3b BMI J-curve scale the whole intrinsic
    // bracket. Frailty is now applied PER CAUSE (above), not in this shared mult.
    const bracketMult = allcauseMult * bmiJMult;

    const parts = { extrinsic };
    let intrinsic = 0;
    for (const cn of causeNames) {
      const c = causes[cn];
      const Bc = Barr[NODE_IDX[c.node]][k];
      const ch = c.RmaxPerYear[sex] * (Bc / Math.max(1 - Bc, 1e-3)) * edgeMultFor(cn, k, age);
      const p = bracketMult * frailtyMultFor(cn) * ch;
      parts[cn] = p;
      intrinsic += p;
    }
    parts.residual = bracketMult * frailtyMultFor("residual") * resid;
    intrinsic += parts.residual;

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
// `medCtx` (optional) carries already-computed UPSTREAM mediator deviations at
// this age for mediator→mediator edges (e.g. BMI→SBP): medCtx[srcMedId] = value −
// baseline of the source mediator. At baseline inputs every such deviation is 0.
function applyMediatorEdge(edge, inputs, popMean, baselineVal, K, medCtx) {
  // mediator→mediator edge: `from` is a mediator id, not an exogenous input.
  if (edge.form === "mediatorLinear") {
    // coeff · (sourceMediator value − its baseline) at this age. =0 at baseline
    // inputs ⇒ no shift ⇒ invariant preserved.
    const srcDev = (medCtx && medCtx[edge.from] !== undefined) ? medCtx[edge.from] : 0;
    return edge.coeff * srcDev;
  }
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
    case "exerciseScaled":          // generic activity-scaled mediator shift (e.g. activity→SBP)
      return edge.coeff * exerciseScale(dx);
    case "sodiumConvex": {
      // coeff is per 100 mmol; convex + baseline-SBP effect-modified. Cap the SBP shift at a
      // physiological ±20 mmHg so an out-of-range sodium can't blow up SBP/LE (the slider
      // clamps [40,300] ⇒ in-range shift is ~[−6,+9] mmHg, well inside the cap, so this is a
      // robustness floor only — never bites for real inputs).
      const shift = edge.coeff * (dx / 100) * sodiumMod(baselineVal);
      return shift < -20 ? -20 : shift > 20 ? 20 : shift;
    }
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
      // Optional benefit floor: the log-linear association only holds down to a
      // source-defined value (e.g. Lewington SBP ≥115 mmHg). Below it, clamp the
      // value so there is NO further benefit — the curve plateaus rather than
      // extrapolating an unbounded benefit toward physiologically impossible levels.
      let v = medValues[e.med][k];
      if (e.benefitFloor != null && v < e.benefitFloor) v = e.benefitFloor;
      const dev = v - medBaseline[e.med][k];
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
    case "bmiThresholdRatio": {
      // Direct BMI→cause residual, UPPER ARM ONLY (BMI > threshold, default 25):
      // exp(β·max(0, BMI − threshold)), normalized to the per-age baseline BMI so
      // mult==1 when BMI==baseline. The UNMEDIATED adiposity→CVD path that remains
      // after the BMI→SBP→CVD path (edge 1) is accounted for.
      const v = medValues[e.med][k];
      const b = medBaseline[e.med][k];
      const thr = e.threshold ?? 25;
      const num = Math.exp(e.beta * Math.max(0, v - thr));
      const den = Math.exp(e.beta * Math.max(0, b - thr));
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

/* ============ B-layer (Stage 3a): whole-intrinsic-bracket edges ============ */
//
// Edges whose target is the sentinel "allcause": a single multiplier applied to
// the ENTIRE intrinsic bracket (every cause line + residual), at the same site as
// the frailty multiplier — NOT to one cause line. Used for channels that act on
// total mortality independently of which cause ultimately fires.
//
// activityFitness (Kodama 2009 / Barry 2014): activity's mortality benefit flows
// through cardiorespiratory fitness (VO₂max), which is weight- AND glucose-
// independent. mult = exp(betaPerMet · ΔMETs), where ΔMETs is the MET-deviation of
// the activity input from population-average activity, looked up from an
// (illustrative) piecewise-linear metMap on the input value. At the input's
// populationMean the map yields ΔMETs 0 ⇒ mult 1 ⇒ baseline preserved.
//
// Double-count note: activity also drives HbA1c (Stage 1), but HbA1c→CVD only
// fires above the 5.7 prediabetes threshold, where active people rarely sit, so
// the overlap is negligible for non-diabetics; this fitness channel is the
// primary activity→mortality path. Activity is deliberately NOT additionally
// routed activity→cardiovascular as a separate edge.

// ΔMETs from a piecewise-linear metMap [[inputVal, METs], ...] ascending.
function metsFromActivity(metMap, value) {
  return interp(metMap, value);
}

// Compute one Stage-3a all-cause (whole-bracket) edge multiplier. Age-invariant.
function allcauseEdgeMult(e, inputs, popMean) {
  switch (e.form) {
    case "activityFitness": {
      const x = inputs[e.input];
      const xv = x === undefined ? popMean[e.input] : x; // default ⇒ popMean ⇒ ΔMETs 0
      const dMets = metsFromActivity(e.metMap, xv);
      return Math.exp(e.betaPerMet * dMets);
    }
    case "uShape": {
      // U-shaped all-cause risk: mult = exp(β · dist^power), =1 across a NADIR BAND and rising
      // outside it. `nadir` is a point (number) OR a band [low, high] (flat-optimal between —
      // e.g. sleep 7–8 h, both penalty-free). `beta` is a scalar (symmetric arms) OR
      // {low, high} (ASYMMETRIC: long-sleep mortality rises steeper than short — Cappuccio
      // 2010). dist = how far OUTSIDE the band (0 inside). The input's populationMean must lie
      // in the band so mult==1 at default ⇒ baseline preserved EXACTLY. Reusable for any
      // U-shaped exposure (sleep now; IGF-1/nutrient-sensing later).
      const x = inputs[e.input];
      const xv = x === undefined ? popMean[e.input] : x;
      const lo = Array.isArray(e.nadir) ? e.nadir[0] : e.nadir;
      const hi = Array.isArray(e.nadir) ? e.nadir[1] : e.nadir;
      const bLo = typeof e.beta === "object" ? e.beta.low : e.beta;
      const bHi = typeof e.beta === "object" ? e.beta.high : e.beta;
      let dist = 0, beta = 0;
      if (xv < lo) { dist = lo - xv; beta = bLo; }
      else if (xv > hi) { dist = xv - hi; beta = bHi; }
      return dist === 0 ? 1 : Math.exp(beta * Math.pow(dist, e.power || 1));
    }
    default:
      return 1;
  }
}

/* ============ B-layer (Stage 3b): BMI J-curve whole-bracket edge ============ */
//
// The J-curve non-CV adiposity arm + the underweight/frailty arm of BMI→all-cause
// mortality, applied to the WHOLE intrinsic bracket (target "allcause"), NORMALIZED
// to the per-age baseline BMI so mult==1 when BMI==baseline. Age-DEPENDENT (BMI and
// its baseline both vary with age) so it is computed per-age in simulate()'s loop.
//
//   Jbracket(BMI) = exp(βupper·max(0, BMI − upper))      for BMI > upper (25)
//                 = exp(βlower·max(0, lower − BMI))       for BMI < lower (20)
//                 = 1                                     for the nadir band [lower, upper]
//   mult = Jbracket(BMI_person) / Jbracket(BMI_baseline)
//
// Since the per-sex/age baseline BMI (~28–30) sits on the UPPER arm, a lean person
// (BMI 22, in the nadir band) gets mult<1 and an underweight person (BMI 17) gets the
// frailty penalty (mult>1). This is the NON-CV obesity slice + frailty slice; the CV
// slice of BMI→mortality is carried separately by edges 1 (BMI→SBP→CVD) and 2
// (BMI→cardiovascular residual), so this J-curve avoids double-counting CV.
function bmiJbracket(bmi, e) {
  const upper = e.upper ?? 25;
  const lower = e.lower ?? 20;
  if (bmi > upper) return Math.exp(e.betaUpper * (bmi - upper));
  if (bmi < lower) return Math.exp(e.betaLower * (lower - bmi));
  return 1;
}

// Per-age BMI J-curve whole-bracket multiplier (ratio to per-age baseline BMI).
function bmiJcurveMult(e, k, medValues, medBaseline) {
  const v = medValues[e.med][k];
  const b = medBaseline[e.med][k];
  return bmiJbracket(v, e) / bmiJbracket(b, e);
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
export function mediators(MODEL, { sex, inputs = {}, treatments = {}, offsets = {}, nodeBurdens = null } = {}) {
  if (sex !== "male" && sex !== "female") {
    throw new Error(`mediators: sex must be "male" or "female", got ${JSON.stringify(sex)}`);
  }
  const b = MODEL.bLayer;
  const EKm = edgesByKind(MODEL);
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
  for (const e of EKm.mediator) (edgesByMed[e.to] ||= []).push(e);
  // Treatments grouped by target mediator (only those requested in opts).
  const txByMed = {};
  for (const tx of b.treatments) {
    if (treatments[tx.id] !== undefined && treatments[tx.id] !== false) {
      (txByMed[tx.to] ||= []).push(tx);
    }
  }

  // Dependency ordering: a mediator that is the SOURCE of a mediator→mediator
  // edge (e.g. BMI→SBP) must be computed BEFORE its target so the target can read
  // the source's per-age deviation. `medIds` is the set of mediator ids; an edge
  // whose `from` is in that set is a mediator→mediator edge. Topologically sort so
  // sources precede targets (the chain here is shallow: BMI → systolicBP).
  const medIds = new Set(b.mediators.map((m) => m.id));
  const order = topoSortMediators(b.mediators, EKm.mediator, medIds);

  // Per-age baseline trajectories (needed as the reference for upstream-mediator
  // deviations passed to mediator→mediator edges).
  const baselineByMed = {};
  for (const med of b.mediators) {
    const curve = med.baseline[sex];
    baselineByMed[med.id] = AGES.map((age) => interp(curve, age));
  }

  const out = {};
  // Per-age deviation (value − baseline) of each ALREADY-computed mediator, used as
  // mediator→mediator edge context. At baseline inputs every deviation is 0.
  const devByMed = {};
  for (const med of order) {
    const curve = med.baseline[sex];
    const offset = offsets[med.id] ?? 0;
    const edges = edgesByMed[med.id] || [];
    const txs = txByMed[med.id] || [];
    out[med.id] = AGES.map((age, k) => {
      const baselineVal = baselineByMed[med.id][k];
      // Assemble upstream-mediator deviations for this age (only sources already
      // computed earlier in `order`).
      const medCtx = {};
      for (const e of edges) {
        if (e.form === "mediatorLinear" && devByMed[e.from]) medCtx[e.from] = devByMed[e.from][k];
      }
      let v = baselineVal;
      for (const e of edges) {
        v += applyMediatorEdge(e, inputs, popMean[e.from], baselineVal, K, medCtx);
      }
      v += offset;
      for (const tx of txs) {
        const dose = treatments[tx.id] === true ? 1.0 : treatments[tx.id];
        v = applyTreatment(tx, v, dose);
      }
      return v;
    });
    // Record this mediator's per-age deviation for downstream mediator→mediator edges.
    devByMed[med.id] = out[med.id].map((v, k) => v - baselineByMed[med.id][k]);
  }

  // ---- Uniform state nodes: ∫ rate·dt over the age grid (the migration substrate) ----
  // A state node ACCUMULATES: value(age_{k+1}) = value(age_k) + rate_k·DT, where rate_k =
  // Σ terms and each term is `linear` (coeff·driver) or `product` (coeff·∏drivers). A driver
  // is a MEDIATOR id or another STATE-NODE id, read at each age — so accumulation is INPUT-
  // driven, NOT age-driven, and the age-correlation EMERGES from the integral (e.g. ECM
  // crosslink = ∫ coeff·HbA1c dt). This is the seed of the unified node schema (class/units/
  // rate) and generalises the former ad-hoc `stocks`. State nodes are exposed in the same
  // `out` map (keyed by id) so mediators and other state nodes can read them. They integrate
  // AFTER all mediators, in topological order (drivers before dependents). `stocks` is
  // accepted as a back-compat alias for the old single-driver shape.
  // B0: expose node-layer burdens (if provided) in `out` so state-node rate/value terms can
  // reference a node id as a driver (cellular-senescence → arterial-stiffness etc.). Done
  // BEFORE the state-node phase. When absent (standalone mediators() calls that don't need
  // state nodes — e.g. lab-anchor prediction), such drivers resolve to 0.
  if (nodeBurdens) for (const id in nodeBurdens) out[id] = nodeBurdens[id];

  // PER-AGE MARCH (n-body forward-Euler). Rather than process each node fully across all ages
  // (which only works when no node feeds back into a mediator), we advance ALL state nodes one
  // age-step at a time. This lets a state node's ACCUMULATED value be injected back INTO a
  // mediator mid-march via `b.stateAugments` (e.g. β-cell-decline → HbA1c), so that downstream
  // integrals reading that mediator (crosslink = ∫HbA1c) see the AUGMENTED value at the same
  // age — the diabetes-spiral feedback. With no augments this is bit-identical to the former
  // per-node loop: within a step, integrated nodes publish their accumulator, algebraic nodes
  // (topo-ordered) compute Σ value-terms, then integrated nodes advance by rate(k)·DT.
  const stateNodes = (b.stateNodes || b.stocks || []).filter((s) => s.provenance !== "stub");  // stub state nodes are inert (rendered greyed by the viz)
  const ordered = topoSortStateNodes(stateNodes);
  const integ = {};                                   // running accumulators for integrated nodes
  for (const s of ordered) { out[s.id] = new Array(AGES.length); if (!s.value) integ[s.id] = s.initial ?? 0; }
  const augments = EKm.augment || [];                 // {fromState, mediator, coeff} — empty ⇒ no-op
  for (let k = 0; k < AGES.length; k++) {
    // 1. publish integrated accumulators at this age.
    for (const s of ordered) if (!s.value) out[s.id][k] = integ[s.id];
    // 2. inject state→mediator augments (reads the just-published accumulated state at age k).
    // coeff may be a number or a {male,female} map (sex-specific augment magnitude).
    for (const a of augments) {
      if (out[a.mediator] && out[a.fromState]) {
        const c = typeof a.coeff === "object" ? (a.coeff[sex] ?? 0) : a.coeff;
        out[a.mediator][k] += c * out[a.fromState][k];
      }
    }
    // 3. publish algebraic node values (topo-ordered; may read augmented mediators + integ state).
    for (const s of ordered) if (s.value) out[s.id][k] = termsSum(s.value.terms, out, k);
    // 4. advance integrated states by rate(k)·DT (rate reads augmented mediators at this age).
    for (const s of ordered) if (!s.value) integ[s.id] += stateNodeRate(s, out, k) * DT;
  }

  return out;
}

// A rate-term driver is either an id string, or an object {id, minus?, floor?} where the
// resolved value is `out[id][k] − minus`, optionally clamped at `floor` (used e.g. for
// pulse pressure = SBP − DBP_ref). Returns the driver's id (for topo/ordering).
function driverId(d) { return typeof d === "string" ? d : d.id; }
function driverValueAt(d, out, k) {
  const arr = out[driverId(d)];
  let v = arr ? arr[k] : 0;
  if (typeof d === "object" && d !== null) {
    if (d.minus !== undefined) v -= d.minus;
    if (d.floor !== undefined) v = Math.max(d.floor, v);
    if (d.cap !== undefined) v = Math.min(d.cap, v);   // ceiling — bounds runaway feedback (glucotox)
  }
  return v;
}

// State-node driver ids (mediator or state-node) referenced by a node's rate/value law.
// Accepts {rate:{terms:[...]}} (integrated) AND {value:{terms:[...]}} (algebraic) AND the
// back-compat single-driver {driver, ratePerUnit} stock shape. Used for topo-ordering.
function stateNodeDriverIds(node) {
  const refs = [];
  if (node.driver) refs.push(node.driver);
  for (const block of [node.rate, node.value]) {
    for (const t of (block && block.terms) || []) {
      for (const d of t.drivers || []) refs.push(driverId(d));
    }
  }
  return refs;
}

// Σ over terms at age-index k. `linear` term = coeff·drivers[0](k); `product` term =
// coeff·∏ drivers[i](k). A driver resolves via driverValueAt (id or {id,minus,floor}); a
// missing driver contributes 0. Shared by integrated `rate` laws and algebraic `value` laws.
function termsSum(terms, out, k) {
  let r = 0;
  for (const t of terms || []) {
    const drivers = t.drivers || [];
    if (t.op === "product") {
      let p = t.coeff || 0;
      for (const d of drivers) p *= driverValueAt(d, out, k);
      r += p;
    } else { // "linear" (default)
      r += (t.coeff || 0) * driverValueAt(drivers[0], out, k);
    }
  }
  return r;
}

// Node-level rate-terms sum for the hallmark-node `accumDev` channel. Identical to termsSum for
// EXOGENOUS drivers (a string id or {id,...} → driverValueAt against inMap), and adds NODE-DEVIATION
// drivers `{node:id,...}` that read the just-computed per-age deviation D[NODE_IDX[id]] — the rate-channel
// machinery for a future node↔node loop (e.g. inflammation's rate driven by the senescence deviation).
// With no `{node}` driver present this is byte-identical to termsSum(terms, inMap, k).
function nodeRateTermsSum(terms, inMap, D, NODE_IDX, k) {
  const val = (d) => {
    if (d && typeof d === "object" && d.node !== undefined) {
      const idx = NODE_IDX[d.node]; let v = idx === undefined ? 0 : (D[idx] || 0);
      if (d.minus !== undefined) v -= d.minus;
      if (d.floor !== undefined) v = Math.max(d.floor, v);
      if (d.cap !== undefined) v = Math.min(d.cap, v);
      return v;
    }
    return driverValueAt(d, inMap, k);
  };
  let r = 0;
  for (const t of terms || []) {
    const drivers = t.drivers || [];
    if (t.op === "product") { let p = t.coeff || 0; for (const d of drivers) p *= val(d); r += p; }
    else { r += (t.coeff || 0) * val(drivers[0]); }
  }
  return r;
}

// Rate of an integrated state node at age-index k. Back-compat: a bare {driver, ratePerUnit}
// is treated as one linear term.
function stateNodeRate(node, out, k) {
  if (node.rate === undefined && node.driver !== undefined) {
    const d = out[node.driver];
    return (node.ratePerUnit || 0) * (d ? d[k] : 0);
  }
  return termsSum(node.rate && node.rate.terms, out, k);
}

// Order state nodes drivers-before-dependents (a node whose rate references ANOTHER state
// node is computed after it). Mediators are already in `out`, so only state-node→state-node
// references constrain order. Kahn's algorithm; falls back to declared order on a cycle
// (cross-time feedback like stiffness→SBP→fatigue is handled per-age elsewhere, not here).
function topoSortStateNodes(stateNodes) {
  const ids = new Set(stateNodes.map((s) => s.id));
  const byId = {};
  for (const s of stateNodes) byId[s.id] = s;
  const indeg = {};
  const adj = {};
  for (const s of stateNodes) { indeg[s.id] = 0; adj[s.id] = []; }
  for (const s of stateNodes) {
    for (const ref of stateNodeDriverIds(s)) {
      if (ids.has(ref) && ref !== s.id) { adj[ref].push(s.id); indeg[s.id] += 1; }
    }
  }
  const queue = stateNodes.filter((s) => indeg[s.id] === 0).map((s) => s.id);
  const order = [];
  while (queue.length) {
    const id = queue.shift();
    order.push(byId[id]);
    for (const m of adj[id]) if (--indeg[m] === 0) queue.push(m);
  }
  return order.length === stateNodes.length ? order : stateNodes; // cycle ⇒ declared order
}

// Topologically sort mediators so that the SOURCE of any mediator→mediator edge
// precedes its TARGET. Kahn's algorithm over the small mediator→mediator subgraph;
// falls back to declared order for mediators with no such dependency.
function topoSortMediators(mediatorList, mediatorEdges, medIds) {
  const indeg = {};
  const adj = {};
  for (const m of mediatorList) { indeg[m.id] = 0; adj[m.id] = []; }
  for (const e of mediatorEdges) {
    if (e.form === "mediatorLinear" && medIds.has(e.from) && medIds.has(e.to)) {
      adj[e.from].push(e.to);
      indeg[e.to] += 1;
    }
  }
  const byId = {};
  for (const m of mediatorList) byId[m.id] = m;
  // Seed with declared-order mediators that have no incoming mediator→mediator edge.
  const queue = mediatorList.filter((m) => indeg[m.id] === 0).map((m) => m.id);
  const ordered = [];
  const seen = new Set();
  while (queue.length) {
    const id = queue.shift();
    if (seen.has(id)) continue;
    seen.add(id);
    ordered.push(byId[id]);
    for (const nxt of adj[id]) {
      indeg[nxt] -= 1;
      if (indeg[nxt] === 0) queue.push(nxt);
    }
  }
  // Any mediator not placed (cycle — shouldn't happen) is appended in declared order.
  for (const m of mediatorList) if (!seen.has(m.id)) ordered.push(m);
  return ordered;
}

export { CAUSE_KEYS };
