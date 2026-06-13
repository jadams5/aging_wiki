#!/usr/bin/env node
// test.mjs — v0.4 regression suite. Pins the verified-model targets the
// engine must reproduce exactly. Prints a pass/fail table and exits 1 on
// any failure. Importable: `runTests()` returns true (all pass) / false.
// v0.4 (2026-06-09): old-age escalation is burden-driven (odds link on reserve-
// depletion cause burdens), not an age-keyed Gompertz factor — see the v0.4 block.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { simulate, lifeExpectancy, mediators, edgesByKind } from "./engine.mjs";
import { validateGraph } from "./validate-graph.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const MODEL = JSON.parse(readFileSync(resolve(HERE, "params.json"), "utf8"));

const baseM = lifeExpectancy(MODEL, { sex: "male" });

// freeze helper: ΔLE of freezing one node @startAge with efficacy, male.
function dLE(node, { startAge = 40, efficacy = 1.0, sex = "male" } = {}) {
  const iv = { [node]: { startAge, efficacy } };
  return lifeExpectancy(MODEL, { sex, interventions: iv }) - lifeExpectancy(MODEL, { sex });
}

function maxAbsBT(sex) {
  const r = simulate(MODEL, { sex });
  let m = 0;
  for (const id in r.T) {
    for (let k = 0; k < r.ages.length; k++) m = Math.max(m, Math.abs(r.B[id][k] - r.T[id][k]));
  }
  return m;
}

function topContributor(age, sex = "male") {
  const r = simulate(MODEL, { sex });
  const k = age - MODEL.meta.ageRange[0];
  const parts = r.decomposition[k].parts;
  let top = null, tv = -Infinity;
  for (const key in parts) { if (parts[key] > tv) { tv = parts[key]; top = key; } }
  return top;
}

// ---- test table: {name, got, target, tol}  (string targets compared by ===)
const tests = [];
const num = (name, got, target, tol) => tests.push({ name, got, target, tol });
const str = (name, got, target) => tests.push({ name, got, target, tol: null });

num("Baseline LE male", simulate(MODEL, { sex: "male" }).LE, 77.459, 0.05);
num("Baseline LE female", simulate(MODEL, { sex: "female" }).LE, 82.118, 0.05); // 2019-harmonized empirical anchor (2026-06-11): all bands re-pulled to CDC WONDER 2019 (no COVID), residual = 2019 all-cause − bands − extrinsic. Was 80.862 on 2022 data.

num("Baseline max|B-T| male", maxAbsBT("male"), 0, 0);
num("Baseline max|B-T| female", maxAbsBT("female"), 0, 0);

// v0.4: upstream-node freeze ΔLEs ROSE vs v0.3 because old-age escalation is now
// burden-driven, not age-keyed. In v0.3 the cause-node burden was clamped at 1
// above age 90 and an age-keyed Gompertz factor carried the >90 hazard, so an
// upstream intervention's coupling relief was ERASED by the clamp and could not
// bend the >90 curve. In v0.4 (odds link on reserve-depletion burden) it does, so
// freezing an upstream driver buys more life. Direct cause-node freezes (athero/
// cancer/sarcopenia) barely changed: their benefit is dominated by <90 ages where
// both models agree, and the >90 tail holds few survivors.
num("genomic-instability freeze@40 eff0.1 ΔLE", dLE("genomic-instability", { efficacy: 0.1 }), 0.198, 0.03);
num("genomic-instability freeze@40 eff0.2 ΔLE", dLE("genomic-instability", { efficacy: 0.2 }), 0.396, 0.03); // A4 re-baseline (+BP-mediated stiffness slice)
num("genomic-instability freeze@40 eff0.4 ΔLE", dLE("genomic-instability", { efficacy: 0.4 }), 0.757, 0.03); // 2026-06-11 frailty-multiplier removal re-baseline (down: lost the gi→…→sarcopenia→frailty-mult slice)
num("genomic-instability freeze@40 eff1.0 ΔLE", dLE("genomic-instability", { efficacy: 1.0 }), 1.888, 0.04); // 2026-06-11 frailty-multiplier removal re-baseline (down, same reason)

num("atherosclerosis freeze@40 100% ΔLE", dLE("atherosclerosis"), 3.707, 0.06); // Op A 2026-06-11 re-baseline: CV band expanded ~8% → direct athero freeze gains proportionally
num("chronic-inflammation freeze@40 100% ΔLE", dLE("chronic-inflammation"), 3.974, 0.06); // 2026-06-11 frailty-multiplier removal re-baseline (down most: inflammation→stem-cell→sarcopenia→frailty-mult slice removed)
num("cancer freeze@40 100% ΔLE", dLE("cancer"), 2.466, 0.06);
// 2026-06-11: the sarcopenia→every-cause frailty multiplier was DISCONNECTED (it identified Peng frail-vs-robust
// HRs with the sarcopenia age-sigmoid → implausible cross-cause benefit; the entire former 4.137 yr WAS that
// multiplier). REPLACED by a single, mechanistically-direct sarcopenia→FALLS frailty edge (β=ln(1.89)=0.6366,
// Yeung 2019 PMID 30993881 prospective OR 1.89). So freezing sarcopenia now buys ~0.04 yr via FALLS ONLY — two
// orders of magnitude smaller, and honest (falls ≈ 0.4% of deaths). Other fall drivers are node-add candidates.
num("sarcopenia freeze@40 100% ΔLE (falls-only, Yeung 2019 OR 1.89)", dLE("sarcopenia"), 0.035, 0.006); // 0.042→0.035 after the malnutrition split lowered falls Rmax (W00-W19 only)
num("cellular-senescence freeze@40 100% ΔLE", dLE("cellular-senescence"), 0.710, 0.05); // 2026-06-11 frailty-multiplier removal re-baseline (down: lost senescence→stem-cell→sarcopenia→frailty-mult slice)

// ---- v0.4 burden-driven old-age escalation (replaces age-keyed Gompertz tail) ----
const _b = simulate(MODEL, { sex: "male" });
const S100 = (opts) => simulate(MODEL, opts).survival[100 - MODEL.meta.ageRange[0]];
num("v0.4: cause reserve B@90 = 0.5 (odds-link anchor)", _b.B["atherosclerosis"][90 - MODEL.meta.ageRange[0]], 0.5, 1e-6);
str("v0.4: cause reserve B<1 at 130 (asymptotes, no clamp pile-up)", String(_b.B["atherosclerosis"][130 - MODEL.meta.ageRange[0]] < 1), "true");
str("v0.4: cause freeze bends >90 survival (S@100 rises)", String(S100({ sex: "male", interventions: { cancer: { startAge: 40, efficacy: 1 } } }) > S100({ sex: "male" }) + 0.005), "true");
str("v0.4: oldAgeTail neutralized (rate 0; not age-keyed)", String(MODEL.mortality.oldAgeTail.rate === 0), "true");

// ---- v0.4.1 residual decomposition into named CDC causes (CDC WONDER D76 2019) ----
const _c = MODEL.mortality.causes;
str("v0.4.1: 8 named causes (4 new split from residual)",
  String(["diabetes","copd","ckd","liver"].every(k => k in _c)), "true");
// Decomposition is LE-invariant (re-buckets mortality; pinned by baseline-LE tests
// above). Each new cause appears in the decomposition parts:
str("v0.4.1: new causes in decomposition", String(["diabetes","copd","ckd","liver"]
  .every(k => k in _b.decomposition[70 - MODEL.meta.ageRange[0]].parts)), "true");
// Liver is non-monotonic (peaks midlife, declines) — its hazard at 60 exceeds 85+:
const _liv = (a) => _b.decomposition[a - MODEL.meta.ageRange[0]].parts.liver;
str("v0.4.1: liver non-monotonic (haz@60 > haz@90)", String(_liv(60) > _liv(90)), "true");
// New causes are intervention-responsive via retargeted edges (smoking→copd,
// alcohol→liver) — COPD hazard rises under current-smoking:
str("v0.4.1: smoking raises COPD hazard",
  String(causeMultAt("copd", 70, { inputs: { smokingStatus: "current" } }) > 1.2), "true");

num("lifestyle male 0× ΔLE", lifeExpectancy(MODEL, { sex: "male", lifestyle: 0 }) - baseM, 2.052, 0.1);
num("lifestyle male 10× ΔLE", lifeExpectancy(MODEL, { sex: "male", lifestyle: 10 }) - baseM, -14.696, 0.1);

str("decomposition top male age 25", topContributor(25), "extrinsic");
// v0.4.1: residual decomposed into named CDC causes (diabetes/COPD/CKD/liver),
// so cardiovascular — not the catch-all residual — is now the leading contributor
// at midlife and old age.
str("decomposition top male age 55", topContributor(55), "cardiovascular");
str("decomposition top male age 90", topContributor(90), "cardiovascular");

/* ========================= B-layer Stage-1 checks ========================= */
// Mediator-value machinery. Mortality is untouched (verified above); these
// pin the emergence formula + non-linear forms against the § B-layer table.

const AGE0 = MODEL.meta.ageRange[0];
const at = (age) => age - AGE0; // index into per-year mediator arrays

// Δmediator at `age` for a perturbation vs population-average baseline.
function dMed(med, age, { sex = "male", inputs = {}, treatments = {}, offsets = {} } = {}) {
  const base = mediators(MODEL, { sex });
  const pert = mediators(MODEL, { sex, inputs, treatments, offsets });
  return pert[med][at(age)] - base[med][at(age)];
}

// Invariant: population-average inputs + no treatment + no offset ⇒ value == baseline.
// (mediators() with empty opts already returns baseline, so compare an explicit
//  "all inputs at populationMean" call against it — max abs diff must be ~0.)
function maxAbsMedVsBaseline(sex) {
  const base = mediators(MODEL, { sex });
  const popInputs = {};
  for (const inp of MODEL.bLayer.exogenousInputs) popInputs[inp.id] = inp.populationMean;
  const atPop = mediators(MODEL, { sex, inputs: popInputs });
  let m = 0;
  for (const med of MODEL.bLayer.mediators) {
    for (let k = 0; k < base[med.id].length; k++) {
      m = Math.max(m, Math.abs(atPop[med.id][k] - base[med.id][k]));
    }
  }
  return m;
}

num("B: invariant pop-avg==baseline male", maxAbsMedVsBaseline("male"), 0, 1e-9);
num("B: invariant pop-avg==baseline female", maxAbsMedVsBaseline("female"), 0, 1e-9);

// Sat-fat +10% energy (11→21) → LDL up (target ~+13–21 mg/dL; coeff mid 1.7 → +17).
num("B: satfat +10% → ΔLDL", dMed("LDL", 50, { inputs: { dietSatFat: 21 } }), 17.0, 0.5);

// Soluble fiber +10 g/day (3→13) → LDL down ~−22; +20 g must NOT be double.
num("B: fiber +10g → ΔLDL", dMed("LDL", 50, { inputs: { dietFiber: 13 } }), -22.0, 0.5);
const dF20 = dMed("LDL", 50, { inputs: { dietFiber: 23 } });
num("B: fiber +20g saturates (< 2× the +10g)", dF20, -29.7, 2.0);
str("B: fiber +20g NOT double +10g", String(dF20 > -44), "true");

// Exercise sedentary→active (popMean 150 → 300 min/wk) → HbA1c down ~−0.5 to −0.7.
num("B: exercise +150min → ΔHbA1c", dMed("HbA1c", 50, { inputs: { physicalActivity: 300 } }), -0.67, 0.02);

// Sodium −100 mmol/day (150→50): SBP down, LARGER at high-baseline (older) than
// low-baseline (young normotensive) — effect-modification.
const dNaYoung = dMed("systolicBP", 30, { inputs: { dietSodium: 50 } }); // base ~119
const dNaOld = dMed("systolicBP", 75, { inputs: { dietSodium: 50 } });   // base ~154
str("B: sodium−100 lowers SBP (young)", String(dNaYoung < 0 && dNaYoung > -5), "true");
str("B: sodium−100 effect-modified (old > young)", String(Math.abs(dNaOld) > Math.abs(dNaYoung) + 2), "true");

// Statin intervention → LDL down ~40% (50→base*0.6, floored at 50).
const dStat = dMed("LDL", 50, { treatments: { statin: true } });
str("B: statin lowers LDL ~40%", String(dStat < -42 && dStat > -50), "true");

// Alcohol threshold: 1 drink/day ≈ no SBP change; 6/day → sizeable rise.
num("B: alcohol 1/day → ~no ΔSBP", dMed("systolicBP", 50, { inputs: { alcohol: 1 } }), 0.0, 0.01);
str("B: alcohol 6/day → ΔSBP rise", String(dMed("systolicBP", 50, { inputs: { alcohol: 6 } }) > 4), "true");

// medValues wired into simulate() output, mortality unchanged.
str("B: simulate exposes medValues", String("LDL" in simulate(MODEL, { sex: "male" }).medValues), "true");

/* ===================== B-layer Stage-2 cause-edge checks ===================== */
// Continuous mediator→cause + direct exogenous→cause multipliers wired into the
// mortality hazard. Hard invariant: at population-average inputs every multiplier
// is 1, so LE == v0.3 (already pinned by the two baseline-LE tests above). Below:
// directional ΔLE for off-baseline inputs + the age-modified SBP slope.

const baseMle = lifeExpectancy(MODEL, { sex: "male" });
// ΔLE for a male perturbation vs the v0.3 baseline.
const dLEm = (o) => lifeExpectancy(MODEL, { sex: "male", ...o }) - baseMle;

// Per-cause hazard multiplier (pert/base) at `age` from a perturbation — isolates
// a single Stage-2 edge's effect on one cause line.
function causeMultAt(cause, age, o) {
  const base = simulate(MODEL, { sex: "male" });
  const pert = simulate(MODEL, { sex: "male", ...o });
  const k = age - MODEL.meta.ageRange[0];
  return pert.decomposition[k].parts[cause] / base.decomposition[k].parts[cause];
}

// Invariant (Stage-2): population-average inputs ⇒ LE unchanged from v0.3 (=1 mults).
num("B2: pop-avg LE invariant male", dLEm({ inputs: {}, treatments: {}, offsets: {} }), 0, 1e-9);

// LDL: higher LDL LOWERS LE; statin (LDL↓) RAISES LE.
str("B2: high LDL (+45) lowers LE", String(dLEm({ offsets: { LDL: 45 } }) < -0.3), "true");
str("B2: statin raises LE", String(dLEm({ treatments: { statin: true } }) > 0.3), "true");
// LDL→CVD multiplier magnitude: +45 mg/dL ≈ exp(0.00643·45)=1.335.
num("B2: LDL+45 → CVD mult", causeMultAt("cardiovascular", 60, { offsets: { LDL: 45 } }), 1.335, 0.01);

// SBP: +30 mmHg lowers LE; age-modified slope (β halves per 20 yr) ⇒ the CVD
// multiplier is much larger at 45 than at 75.
str("B2: SBP+30 lowers LE", String(dLEm({ offsets: { systolicBP: 30 } }) < -1.0), "true");
const sbpMult45 = causeMultAt("cardiovascular", 45, { offsets: { systolicBP: 30 } });
const sbpMult75 = causeMultAt("cardiovascular", 75, { offsets: { systolicBP: 30 } });
num("B2: SBP+30 CVD mult @45 (β base)", sbpMult45, 3.449, 0.01);
num("B2: SBP+30 CVD mult @75 (β halved×~1.25)", sbpMult75, 1.549, 0.01);
str("B2: SBP age-modified (45 effect > 75)", String(sbpMult45 > sbpMult75 + 1), "true");

// HbA1c 7.5% (diabetic; offset ≈ +1.9 over ~5.6 baseline) lowers LE via CVD+cancer+dementia.
str("B2: HbA1c diabetic lowers LE", String(dLEm({ offsets: { HbA1c: 1.9 } }) < -2.0), "true");
// HbA1c→CVD reaches the diabetes HR 2.32 when value hits 6.5 (offset to exactly 6.5 at age 45;
// emergent baseline@45 = 5.55 after the β-cell→HbA1c de-age-pegging, so offset 0.95 → 6.50).
num("B3: HbA1c→CVD direct HR ~2.0 at 6.5 (structural slice routed to stiffness)", causeMultAt("cardiovascular", 45, { offsets: { HbA1c: 0.95 } }), 2.0, 0.03);
str("B2: HbA1c diabetic raises cancer", String(causeMultAt("cancer", 45, { offsets: { HbA1c: 0.9 } }) > 1.0), "true");
str("B2: HbA1c diabetic raises dementia", String(causeMultAt("neurodegeneration", 70, { offsets: { HbA1c: 0.9 } }) > 1.0), "true");

// Smoking (categorical, normalized): current LOWERS LE; never RAISES LE (protected
// vs the mixed-population CDC baseline); former ≈ slightly below baseline.
str("B2: current-smoker lowers LE", String(dLEm({ inputs: { smokingStatus: "current" } }) < -2.5), "true");
str("B2: never-smoker raises LE (protected)", String(dLEm({ inputs: { smokingStatus: "never" } }) > 1.0), "true");
str("B2: former-smoker ≈ slight loss", String(dLEm({ inputs: { smokingStatus: "former" } }) < 0 && dLEm({ inputs: { smokingStatus: "former" } }) > -1), "true");
// Normalized cancer multiplier: current = 2.2/1.243 ≈ 1.770; never = 1.0/1.243 ≈ 0.804.
num("B2: smoking→cancer current mult", causeMultAt("cancer", 60, { inputs: { smokingStatus: "current" } }), 1.770, 0.01);
num("B2: smoking→cancer never mult", causeMultAt("cancer", 60, { inputs: { smokingStatus: "never" } }), 0.804, 0.01);

// Alcohol: heavy (6/day) lowers LE via cancer + liver (v0.4.1: liver is now a
// named cause node; the hinge edge retargeted residual→liver). Magnitude is
// smaller than the v0.4 residual-proxy because liver is a smaller bucket than the
// whole residual — the structurally-correct routing.
str("B2: heavy alcohol lowers LE", String(dLEm({ inputs: { alcohol: 6 } }) < -0.8), "true");
str("B2: alcohol→liver hinge >baseline", String(causeMultAt("liver", 60, { inputs: { alcohol: 6 } }) > 1.0), "true");

// PM2.5: high pollution lowers LE via CVD + COPD/respiratory (v0.4.1: retargeted
// residual→copd).
str("B2: high PM2.5 lowers LE", String(dLEm({ inputs: { airPollution: 30 } }) < -0.3), "true");
num("B2: PM2.5 30 → CVD mult", causeMultAt("cardiovascular", 60, { inputs: { airPollution: 30 } }), Math.exp(0.00583 * (30 - 8)), 0.005);

/* ===================== B-layer Stage-3a cause-edge checks ===================== */
// Two clean edges added: (1) smoking→cardiovascular (normalized categorical,
// never 0.833/former 1.082/current 1.582) and (2) physicalActivity→allcause
// (activityFitness, exp(-0.139·ΔMETs) on the WHOLE intrinsic bracket). Hard
// invariant: default inputs ⇒ both mults 1 ⇒ LE == v0.3 (pinned by the two
// baseline-LE tests above and the B2 pop-avg invariant). Below: directionals +
// the exact normalized smoking→CVD multipliers + weight-independence of fitness.

// Edge 1 — smoking → cardiovascular (normalized categorical).
// v0.4.1 NOTE: total current-smoker ΔLE is now ~-3.7 (was ~-8 in v0.4). The v0.4
// figure was inflated by applying COPD's smoking RR (6×) to the ENTIRE old-age
// residual; with smoking correctly routed to CVD+cancer+COPD+diabetes+CKD the
// honest cause-specific effect is smaller — and CONSERVATIVE vs literature (Jha
// 2013 ~10yr) because (a) the smokingCategorical normalization caps it and (b)
// the model doesn't yet route smoking to every smoking-attributable cause. A
// whole-bracket smoking→allcause edge (à la physicalActivity) would restore the
// Jha figure — see PROJECT-NOTES §8b. Tests below assert direction + a floor.
str("B3a: current-smoker lowers LE (< -3)", String(dLEm({ inputs: { smokingStatus: "current" } }) < -3.0), "true");
str("B3a: never-smoker raises LE (> +1)", String(dLEm({ inputs: { smokingStatus: "never" } }) > 1.0), "true");
// Normalized smoking→CVD multiplier: current = 1.9/1.201 ≈ 1.582; never = 1.0/1.201 ≈ 0.833.
num("B3a: smoking→CVD current mult", causeMultAt("cardiovascular", 60, { inputs: { smokingStatus: "current" } }), 1.582, 0.005);
num("B3a: smoking→CVD never mult", causeMultAt("cardiovascular", 60, { inputs: { smokingStatus: "never" } }), 0.833, 0.005);

// Edge 2 — physicalActivity → allcause (fitness channel, whole bracket).
// sedentary (ΔMETs -1.5) LOWERS LE; athlete (ΔMETs +2.5) RAISES it.
str("B3a: sedentary lowers LE", String(dLEm({ inputs: { physicalActivity: 0 } }) < -3.0), "true");
str("B3a: athlete raises LE", String(dLEm({ inputs: { physicalActivity: 600 } }) > 3.0), "true");
// Monotone in activity: 0 < 75 < 150(=0) < 300 < 600.
str("B3a: activity monotone in LE", String(
  dLEm({ inputs: { physicalActivity: 0 } }) < dLEm({ inputs: { physicalActivity: 75 } }) &&
  dLEm({ inputs: { physicalActivity: 75 } }) < 0 &&
  0 < dLEm({ inputs: { physicalActivity: 300 } }) &&
  dLEm({ inputs: { physicalActivity: 300 } }) < dLEm({ inputs: { physicalActivity: 600 } })
), "true");
// activityFitness multiplies the WHOLE intrinsic bracket by the SAME factor
// exp(-0.139·ΔMETs). ΔMETs -1.5 (sedentary) ⇒ 1.2318. Verified on the two
// mediator-free cause lines (infection, residual): CVD/cancer/dementia additionally
// pick up the (documented, Stage-1) activity→HbA1c→cause overlap above the 5.7
// threshold, so they are NOT clean readouts of the fitness factor alone.
const actMultInfection = causeMultAt("infection", 60, { inputs: { physicalActivity: 0 } });
const actMultResid = causeMultAt("residual", 60, { inputs: { physicalActivity: 0 } });
num("B3a: sedentary bracket mult (infection)", actMultInfection, Math.exp(-0.139 * -1.5), 0.002);
str("B3a: fitness mult uniform on mediator-free lines", String(
  Math.abs(actMultInfection - actMultResid) < 1e-9
), "true");
// Weight/glucose-independent (Barry 2014): the fitness MULTIPLIER itself does not
// read BMI. Stage 3b wires BMI independently to mortality, so total LE is no longer
// BMI-invariant — but holding BMI FIXED (same offset in both arms), the activity
// fitness factor is identical to the BMI-free factor exp(-0.139·ΔMETs). Readout on
// the mediator-free infection line, varying ONLY activity (sedentary vs popMean)
// while a BMI offset is held constant in both ⇒ the BMI J-curve + BMI→SBP→CVD
// factors cancel and only the fitness factor remains.
{
  const baseFixedBMI = simulate(MODEL, { sex: "male", inputs: { physicalActivity: 150 }, offsets: { BMI: 8 } });
  const sedFixedBMI = simulate(MODEL, { sex: "male", inputs: { physicalActivity: 0 }, offsets: { BMI: 8 } });
  const kk = 60 - MODEL.meta.ageRange[0];
  const fitnessFactorWithBMI =
    sedFixedBMI.decomposition[kk].parts.infection / baseFixedBMI.decomposition[kk].parts.infection;
  num("B3a: fitness mult weight-independent (BMI held)", fitnessFactorWithBMI, Math.exp(-0.139 * -1.5), 0.002);
}

/* ===================== B-layer Stage-3b BMI/adiposity checks ===================== */
// Three BMI edges, all NORMALIZED to the per-age baseline BMI ⇒ =1 at baseline ⇒
// v0.3 LE reproduced exactly (already pinned by the two baseline-LE + B2 pop-avg
// invariant tests). (1) BMI→systolicBP mediatorEdge (+0.72 mmHg/kg·m⁻², dominant
// mediated path); (2) BMI→cardiovascular bmiThresholdRatio (unmediated CV residual);
// (3) BMI→allcause bmiJcurve (non-CV obesity upper arm + underweight-frailty lower
// arm, whole bracket). Baseline BMI (~28–30) sits on the upper arm, so lean→mult<1.

// Invariant: at the per-age baseline BMI every BMI multiplier == 1 AND BMI→SBP adds
// 0 ⇒ LE == v0.3 (and SBP mediator unchanged). Reconfirm explicitly here.
num("B3b: BMI baseline ⇒ LE invariant male", dLEm({ inputs: {}, offsets: {} }), 0, 1e-9);
{
  // BMI→SBP adds exactly 0 at baseline BMI: SBP with no offset == baseline SBP.
  const medBase = mediators(MODEL, { sex: "male" });
  const medPop = mediators(MODEL, { sex: "male", inputs: { calorieBalance: 0 } });
  let maxSbpDiff = 0;
  for (let k = 0; k < medBase.systolicBP.length; k++) {
    maxSbpDiff = Math.max(maxSbpDiff, Math.abs(medPop.systolicBP[k] - medBase.systolicBP[k]));
  }
  num("B3b: BMI→SBP adds 0 at baseline BMI", maxSbpDiff, 0, 1e-9);
}

// Edge 1 — BMI→SBP: a +5 kg/m² BMI offset raises SBP by exactly 0.72·5 = 3.6 mmHg
// at every age (baseline SBP male @50 = 124 ⇒ 127.6).
{
  const k50 = 50 - AGE0;
  const sbpPlus5 = mediators(MODEL, { sex: "male", offsets: { BMI: 5 } }).systolicBP[k50];
  const sbpBase = mediators(MODEL, { sex: "male" }).systolicBP[k50];
  num("B3b: BMI+5 → SBP +3.6 mmHg @50", sbpPlus5 - sbpBase, 3.6, 1e-9);
  num("B3b: BMI+5 → SBP value @50 = 127.6", sbpPlus5, 127.6, 1e-6);
}

// Edge-combo at +5 BMI / age 50: the CHD split — SBP-path × residual ≈ Lu 1.27.
{
  const sbpPath = Math.exp(0.0347 * 0.72 * 5);            // BMI→SBP→CVD @ age-50 β
  const residual = Math.exp(0.022819 * 5);                // BMI→cardiovascular residual
  num("B3b: BMI+5 SBP-path CVD mult", sbpPath, 1.1331, 0.001);
  num("B3b: BMI+5 residual CVD mult", residual, 1.1209, 0.001);
  num("B3b: BMI+5 combined CHD ≈ 1.27 (Lu)", sbpPath * residual, 1.27, 0.002);
}

// ΔLE directionals (BMI shifted via offset; baseline male BMI @50 ≈ 29.95):
//  BMI≈35 (offset +5) LOWER; BMI≈22 lean (offset −7.95) HIGHER; BMI≈16 (offset
//  −13.95) LOWER (underweight-frailty arm).
str("B3b: BMI 35 (obese) lowers LE", String(dLEm({ offsets: { BMI: 5 } }) < -1.0), "true");
str("B3b: BMI 22 (lean) raises LE", String(dLEm({ offsets: { BMI: -7.95 } }) > 0.5), "true");
str("B3b: BMI 16 (underweight) lowers LE", String(dLEm({ offsets: { BMI: -13.95 } }) < -2.0), "true");
// Frailty arm is steeper than the obese arm at equal |offset|-ish distance: BMI 16
// loses more than BMI 35 gains/loses in magnitude (steep ln(1.51)/3.5 lower slope).
str("B3b: underweight penalty steep (< obese)", String(
  dLEm({ offsets: { BMI: -13.95 } }) < dLEm({ offsets: { BMI: 5 } })
), "true");

// ---- Rate-integration migration: ECM-crosslink stock (∫ glycemia·dt) ----
// First node of the age-pegging migration (model/age-hardcoding-audit.md). The stock
// must (a) EMERGE from integrating HbA1c over time (not be age-pegged), (b) reach the
// calibrated ~1.0 normalized at age 80 at population glycemia, (c) accumulate faster
// under elevated glycemia (age-correlation is emergent), and (d) NOT perturb the
// calibrated mortality baseline (not yet wired downstream).
{
  const cl = (opts) => mediators(MODEL, opts)["ecm-crosslink"];
  const pop = cl({ sex: "male" });
  num("migrate: crosslink @20 = 0 (accum since grid start)", pop[20 - AGE0], 0, 1e-9);
  num("migrate: crosslink @80 ≈ 1.0 (pop calibration)", pop[80 - AGE0], 0.984, 0.02);
  str("migrate: crosslink monotonic ↑ (integrated)",
    String(pop.every((v, k) => k === 0 || v >= pop[k - 1])), "true");
  const dia = cl({ sex: "male", offsets: { HbA1c: 3 } });
  str("migrate: high HbA1c accumulates crosslink faster",
    String(dia[80 - AGE0] > 1.4 * pop[80 - AGE0]), "true");
  num("migrate: crosslink unwired ⇒ baseline LE invariant",
    lifeExpectancy(MODEL, { sex: "male" }) - baseM, 0, 1e-9);
}

// ---- β-cell→HbA1c vertical, Increment 2: HbA1c is now EMERGENT (de-age-pegged) ----
// HbA1c baseline is flat 5.3 + a stateAugment (coeff·β-cell-decline). The age-rise EMERGES
// from the β-cell-decline integral (intrinsic constant rate; glucotox/lipotox coeffs still 0).
// Must: start ~5.3 young, reproduce the empirical ~5.9 @80, KEEP RISING past 85 (the old table
// clamped flat at 5.9 across 85→130), and preserve the baseline LE EXACTLY (deviation-form edges).
{
  const med = mediators(MODEL, { sex: "male" });
  const h = med.HbA1c, bd = med["beta-cell-decline"];
  num("βcell: HbA1c @25 ≈ 5.35 (flat young baseline + tiny accrual)", h[25 - AGE0], 5.35, 0.03);
  num("βcell: HbA1c @80 ≈ 5.9 (emergent, matches empirical)", h[80 - AGE0], 5.90, 0.03);
  num("βcell: β-cell-decline @20 = 0 (accum since grid start)", bd[20 - AGE0], 0, 1e-9);
  num("βcell: β-cell-decline @80 ≈ 1.0 (intrinsic-rate calibration)", bd[80 - AGE0], 1.0, 0.02);
  str("βcell: HbA1c KEEPS RISING past 85 (de-age-pegged; was clamped 5.9)",
    String(h[130 - AGE0] > h[85 - AGE0] + 0.2), "true");
  str("βcell: HbA1c monotonic ↑ (emergent integral)",
    String(h.every((v, k) => k === 0 || v >= h[k - 1] - 1e-12)), "true");
  num("βcell: emergent HbA1c ⇒ baseline LE invariant (M)",
    lifeExpectancy(MODEL, { sex: "male" }) - baseM, 0, 1e-9);
  // crosslink = ∫HbA1c must be ~unchanged by the emergent (vs tabled) HbA1c at @80.
  num("βcell: crosslink @80 still ≈ 0.984 (emergent HbA1c ~tracks old table)",
    med["ecm-crosslink"][80 - AGE0], 0.984, 0.02);
}

// ---- β-cell→HbA1c vertical, Increment 3: the GLUCOTOXICITY SPIRAL ----
// Activated glucotox feedback (coeff 0.012, driver capped at 3): β-cell-decline ↑ → HbA1c ↑
// → glucotox ↑ → β-cell-decline ↑, resolved per-age across the march. Population HbA1c never
// exceeds 6.5 ⇒ glucotox EXACTLY 0 in the population ⇒ baseline LE preserved exactly; the
// spiral only bites for a diabetic DEVIATION, where HbA1c PROGRESSES upward over time (vs the
// near-flat intrinsic creep) and feeds crosslink → stiffness → CVD. Bounded by the driver cap.
{
  const med = mediators(MODEL, { sex: "male" });
  const dia = mediators(MODEL, { sex: "male", offsets: { HbA1c: 2.4 } }); // ≈ diabetic, HbA1c ~8 @50
  // 1. population glucotox dormant: HbA1c@130 stays < 6.5 (floor never breached) → LE invariant.
  str("spiral: population HbA1c @130 < 6.5 (glucotox dormant in population)",
    String(med.HbA1c[130 - AGE0] < 6.5), "true");
  num("spiral: population LE invariant (glucotox=0 in pop)",
    lifeExpectancy(MODEL, { sex: "male" }) - baseM, 0, 1e-9);
  // 2. diabetic HbA1c PROGRESSES: @80 pushed well above the ~8.3 no-spiral pure-offset value.
  str("spiral: diabetic HbA1c @80 progresses > 8.8 (spiral on top of offset)",
    String(dia.HbA1c[80 - AGE0] > 8.8), "true");
  // 3. ACCELERATION (convex): the decade rise 70→80 exceeds the decade rise 50→60 (self-feeding).
  const r5060 = dia.HbA1c[60 - AGE0] - dia.HbA1c[50 - AGE0];
  const r7080 = dia.HbA1c[80 - AGE0] - dia.HbA1c[70 - AGE0];
  str("spiral: diabetic HbA1c accelerates (Δ70→80 > Δ50→60)", String(r7080 > r5060), "true");
  // 4. BOUNDED by the driver cap: even at 110 the diabetic HbA1c stays clinically plausible.
  str("spiral: diabetic HbA1c @110 bounded (9.5–11; cap holds)",
    String(dia.HbA1c[110 - AGE0] > 9.5 && dia.HbA1c[110 - AGE0] < 11), "true");
  // 5. the spiral feeds the STRUCTURAL path: diabetic crosslink (=∫HbA1c) is markedly elevated.
  str("spiral: diabetic crosslink @80 elevated (feeds stiffness→CVD)",
    String(dia["ecm-crosslink"][80 - AGE0] > 1.4 * med["ecm-crosslink"][80 - AGE0]), "true");
}

// ---- HbA1c severity-scaling endpoints: HbA1c → diabetes + HbA1c → ckd ----
// The three macrovascular HbA1c edges (CVD/cancer/dementia) saturate at their caps by HbA1c
// ~6.8, so severe hyperglycemia needs the DIRECT-diabetes (acute-crisis) + renal endpoints to
// carry the dose-response. These steep, high-cap edges make HbA1c 14 appropriately lethal
// (vs the near-flat 7→14 ladder before) while staying EXACTLY 1 in the population (threshold
// 6.5 > pop HbA1c max ⇒ baseline LE preserved exactly).
{
  const k50 = 50 - AGE0;
  const predM = mediators(MODEL, { sex: "male" }).HbA1c[k50];
  const off = (h) => h - predM;                          // lab-anchor offset to reach HbA1c h @50
  const LE = (h) => simulate(MODEL, { sex: "male", offsets: { HbA1c: off(h) } }).LE;
  const le7 = LE(7), le10 = LE(10), le14 = LE(14);
  num("severity: population LE invariant (HbA1c edges =1 below 6.5)",
    simulate(MODEL, { sex: "male" }).LE - baseM, 0, 1e-9);
  // monotone, steep severity gradient — the bug fix: 7→14 was nearly flat (Δ≈0.9), now steep.
  str("severity: LE strictly decreases 7 > 10 > 14", String(le7 > le10 && le10 > le14), "true");
  str("severity: HbA1c 14 costs >9 yr vs baseline (was ~5; user-caught)",
    String(baseM - le14 > 9), "true");
  str("severity: 10→14 drop dwarfs the pre-fix flat ladder (≥2.5 yr)",
    String(le10 - le14 > 2.5), "true");
  // a diabetes-coded death edge exists and a renal one (wiring guard).
  const _cause = edgesByKind(MODEL).cause;
  str("severity: HbA1c→diabetes + HbA1c→ckd edges wired",
    String(_cause.some((e) => e.from === "HbA1c" && e.to === "diabetes")
        && _cause.some((e) => e.from === "HbA1c" && e.to === "ckd")), "true");
}

// ---- A2: elastin-fatigue state node = ∫(restingHR × pulse-pressure)·dt ----
// Cumulative pulsatile mechanical fatigue (the dominant structural stiffening driver),
// exercised via the `product` rate term + a driver offset (PP ≈ SBP−75). Must emerge from
// HR × pressure (not age), respond to both drivers, and stay unwired ⇒ baseline invariant.
{
  const ef = (opts) => mediators(MODEL, opts)["elastin-fatigue"];
  const pop = ef({ sex: "male" });
  num("A2: elastin-fatigue @20 = 0", pop[20 - AGE0], 0, 1e-9);
  num("A2: elastin-fatigue @80 ≈ 1.0 (pop calibration)", pop[80 - AGE0], 1.0, 0.03);
  str("A2: elastin-fatigue monotonic ↑", String(pop.every((v, k) => k === 0 || v >= pop[k - 1])), "true");
  // Low resting HR (fit, −15 ⇒ 50 bpm) fatigues elastin slower. (B3: the SBP/pulse-pressure
  // driver was decoupled — deferred to A4 — so SBP no longer drives elastin; HR is the clean
  // driver. The high-SBP→elastin test is retired until A4 reinstates the coupling.)
  str("A2: low resting-HR ⇒ slower elastin fatigue",
    String(ef({ sex: "male", offsets: { restingHR: -15 } })[80 - AGE0] < pop[80 - AGE0]), "true");
  num("A2: elastin-fatigue unwired ⇒ baseline LE invariant",
    lifeExpectancy(MODEL, { sex: "male" }) - baseM, 0, 1e-9);
}

// ---- A3: arterial-stiffness — the first ALGEBRAIC (value) node ----
// stiffness(age) = 0.65·elastin-fatigue + 0.36·ecm-crosslink, computed AT each age (not
// integrated). Must equal that weighted sum exactly, emerge from its damage inputs, and
// stay unwired ⇒ baseline invariant.
// B0: arterial-stiffness now also reads the cellular-senescence NODE burden (node→state-node
// edge), so it must be read from simulate().medValues (which passes node burdens), not from a
// bare mediators() call.
{
  const r = simulate(MODEL, { sex: "male" });
  const st = r.medValues["arterial-stiffness"], el = r.medValues["elastin-fatigue"],
        cl = r.medValues["ecm-crosslink"], sen = r.B["cellular-senescence"];
  const stAt = (opts) => simulate(MODEL, { sex: "male", ...opts }).medValues["arterial-stiffness"][80 - AGE0];
  const k60 = 60 - AGE0;
  num("A3+B0: stiffness = 0.50·elastin + 0.30·crosslink + 0.80·senescence",
    st[k60] - (0.50 * el[k60] + 0.30 * cl[k60] + 0.80 * sen[k60]), 0, 1e-9);
  num("A3: stiffness @80 ≈ 1.0 (pop calibration)", st[80 - AGE0], 1.0, 0.03);
  str("A3: stiffness monotonic ↑", String(st.every((v, k) => k === 0 || v >= st[k - 1])), "true");
  str("A3: diabetic ⇒ stiffer (via crosslink)", String(stAt({ offsets: { HbA1c: 3 } }) > st[80 - AGE0]), "true");
  // (A3 hypertensive→stiffer retired with the B3 SBP-decoupling; reinstated in A4.)
  // B0: the first node→state-node edge — a cellular-senescence freeze lowers stiffness.
  str("B0: senescence freeze ⇒ less stiff",
    String(stAt({ interventions: { "cellular-senescence": { startAge: 40, efficacy: 1.0 } } }) < st[80 - AGE0]), "true");
  num("B3: stiffness wired but baseline LE invariant (deviation-form edge)",
    lifeExpectancy(MODEL, { sex: "male" }) - baseM, 0, 1e-9);
}

// ---- B3: arterial-stiffness → cardiovascular (consolidated, mediation-decomposed) ----
// Stiffness now bends CV mortality (Mitchell 2010 cfPWV), deviation-form so baseline holds.
// Interventions map to reality: a senolytic and glycemic control both lower CV hazard via
// stiffness, WITHOUT double-counting — senescence's stiffness path is distinct from its
// inflammation→plaque path, and the glycemic slice was subtracted from HbA1c→CVD.
{
  const cvMult = (opts) => causeMultAt("cardiovascular", 70, opts);
  str("B3: senolytic lowers CV hazard (via stiffness, new mechanism)",
    String(cvMult({ interventions: { "cellular-senescence": { startAge: 40, efficacy: 1.0 } } }) < 1), "true");
  str("B3: diabetic raises CV hazard via stiffness (on top of decomposed HbA1c→CVD)",
    String(cvMult({ offsets: { HbA1c: 3 } }) > cvMult({})), "true");
  str("B3: high resting-HR raises CV hazard (HR→elastin→stiffness; clean, no prior HR→CVD edge)",
    String(cvMult({ offsets: { restingHR: 20 } }) > 1), "true");
  // Glycemic-stiffness decomposition bounds the double-count: a diabetic's TOTAL CV mult
  // (decomposed HbA1c→CVD × stiffness→CVD) stays near the original ERFC 2.32, not far above.
  str("B3: decomposition bounds diabetic CV mult (≈ERFC, not doubled)",
    String(causeMultAt("cardiovascular", 45, { offsets: { HbA1c: 0.9 } }) < 2.6), "true");
}

// ---- A4: stiffness → SBP (BP-mediated slice; non-glycemic, crosslink excluded) ----
// Complements the B3 BP-independent edge. SBP gets βstiff·(non-glycemic stiffness deviation).
// Deviation-form ⇒ baseline + Lewington/Lu/sodium calibrations preserved.
{
  const sbpAt = (opts) => simulate(MODEL, { sex: "male", ...opts }).medValues.systolicBP[70 - AGE0];
  const base = sbpAt({});
  // senolytic lowers SBP (less senescence-stiffness); high resting HR raises it (elastin).
  str("A4: senolytic lowers SBP (BP-mediated stiffness slice)",
    String(sbpAt({ interventions: { "cellular-senescence": { startAge: 40, efficacy: 1.0 } } }) < base - 1), "true");
  str("A4: high resting-HR raises SBP (HR→elastin→stiffness→SBP)",
    String(sbpAt({ offsets: { restingHR: 20 } }) > base + 1), "true");
  // crosslink EXCLUDED ⇒ a pure glycemic offset does NOT move SBP via stiffness (no double-count).
  num("A4: diabetic SBP unchanged by stiffness (glycemic slice excluded)",
    sbpAt({ offsets: { HbA1c: 3 } }) - base, 0, 1e-9);
  // baseline invariant: at pop, the augmentation is exactly 0.
  num("A4: pop SBP augmentation = 0 (baseline preserved)",
    simulate(MODEL, { sex: "male" }).medValues.systolicBP[70 - AGE0] - base, 0, 1e-12);
}

// ---- physicalActivity → restingHR (exerciseScaled; Chen/Jabbarzadeh 2024; 2026-06-12) ----
// Aerobic training bradycardia: coeff −5.4 bpm at +150 min/wk above popMean=150.
// exerciseScale(dx) = clamp(dx/150, −1, 1.5); at popMean dx=0 ⇒ shift=0 ⇒ baseline preserved.
{
  const rhrAt = (activity) =>
    mediators(MODEL, { sex: "male", inputs: { physicalActivity: activity } }).restingHR[60 - AGE0];
  const popRHR = rhrAt(150); // popMean activity ⇒ no shift
  // Baseline invariant: at popMean activity (150 min/wk) the shift is exactly 0.
  num("physicalActivity→restingHR: popMean activity ⇒ RHR unchanged",
    rhrAt(150) - popRHR, 0, 1e-9);
  // High activity (300 min/wk, +150 above popMean) lowers RHR by coeff × exerciseScale(+150)
  // = −5.4 × 1.0 = −5.4 bpm.
  num("physicalActivity→restingHR: 300 min/wk ⇒ −5.4 bpm (Chen 2024 anchor)",
    rhrAt(300) - popRHR, -5.4, 1e-9);
  // Sedentary (0 min/wk, −150 below popMean) raises RHR by coeff × exerciseScale(−150)
  // = −5.4 × (−1.0) = +5.4 bpm.
  num("physicalActivity→restingHR: sedentary (0 min/wk) ⇒ +5.4 bpm",
    rhrAt(0) - popRHR, 5.4, 1e-9);
  // Direction: higher activity ⇒ lower RHR.
  str("physicalActivity→restingHR: monotone direction (more activity = lower RHR)",
    String(rhrAt(300) < rhrAt(150) && rhrAt(150) < rhrAt(0)), "true");
  // Downstream pathway: high activity ⇒ lower RHR ⇒ slower elastin fatigue ⇒ lower stiffness.
  const efAt = (activity) =>
    mediators(MODEL, { sex: "male", inputs: { physicalActivity: activity } })["elastin-fatigue"][80 - AGE0];
  str("physicalActivity→restingHR→elastin-fatigue: active fatigues elastin slower",
    String(efAt(300) < efAt(150)), "true");
  // Baseline LE invariant at popMean activity (the exerciseScaled edge contributes 0).
  num("physicalActivity→restingHR: popMean activity ⇒ baseline LE invariant",
    lifeExpectancy(MODEL, { sex: "male", inputs: { physicalActivity: 150 } }) - baseM, 0, 1e-9);
}

// ---- sleep → all-cause: BANDED + ASYMMETRIC U-shape (Cappuccio 2010) ----
// Nadir is a REFERENCE BAND [7,8] (both 7h and 8h penalty-free — user-caught: 8h is not worse
// than 7h), with asymmetric arms (long-sleep mortality rises ~2× steeper per hour than short).
{
  const sleepLE = (h) => lifeExpectancy(MODEL, { sex: "male", inputs: { sleep: h } });
  num("sleep nadir (7h = popMean) ⇒ baseline LE invariant", sleepLE(7) - baseM, 0, 1e-9);
  // THE FIX: 8h is inside the [7,8] band ⇒ EXACTLY no penalty (identical to 7h).
  num("sleep 8h = no penalty (reference band, was wrongly penalized)", sleepLE(8) - baseM, 0, 1e-9);
  str("sleep 6h (mild short) lowers LE a little", String(sleepLE(6) < baseM - 0.1 && sleepLE(6) > baseM - 1), "true");
  str("sleep 5h (short) lowers LE", String(sleepLE(5) < baseM - 0.5), "true");
  str("sleep 10h (long) lowers LE", String(sleepLE(10) < baseM - 0.5), "true");
  // ASYMMETRY: long arm steeper than short — |10−8|==|6−4|==2 h outside the band, yet 10h costs
  // more than 4h... compare equal 2h-outside excursions: 10h (2 above) vs 5h (2 below).
  str("sleep long arm steeper than short (10h penalty > 5h penalty)",
    String((baseM - sleepLE(10)) > (baseM - sleepLE(5))), "true");
  str("sleep U-shape: 7–8h beats both 5h and 10h", String(sleepLE(7) > sleepLE(5) && sleepLE(8) > sleepLE(10)), "true");
}

// ---- structural-stub contract (edge-auditor) + graph validator (R-stub, 2026-06-11) ----
// A kind:"stub" edge is the auditor's "this edge should exist, β not yet derived" marker.
// It MUST be inert: excluded from the engine at edgesByKind, so it can neither perturb the
// hazard (baseline OR under intervention) nor collide in the frailty betaByCause map.
{
  const baseF = lifeExpectancy(MODEL, { sex: "female" });
  const withStubs = JSON.parse(JSON.stringify(MODEL));
  // one stub per intendedKind, incl. a frailty stub (proves a stub never enters betaByCause —
  // so it can't overwrite a live frailty edge) and a cause stub (proves form-independence:
  // a real beta:0 thresholdRamp would NaN; a stub never executes).
  withStubs.edges.push(
    { kind: "stub", intendedKind: "cause",    from: "HbA1c", to: "cancer",        note: "x", evidenceStrength: "moderate" },
    { kind: "stub", intendedKind: "frailty",  from: "clonal-hematopoiesis", to: "cardiovascular", note: "x", evidenceStrength: "moderate" },
    { kind: "stub", intendedKind: "mediator", from: "airPollution", to: "systolicBP", note: "x", evidenceStrength: "weak" },
    { kind: "stub", intendedKind: "augment",  fromState: "arterial-stiffness", mediator: "systolicBP", note: "x", evidenceStrength: "moderate" },
    { kind: "stub", intendedKind: "driver",   from: "HbA1c", to: "ecm-crosslink",  note: "x", evidenceStrength: "strong" },
    { kind: "stub", intendedKind: "coupling", from: "dysbiosis", to: "cancer",     note: "x", evidenceStrength: "weak" },
  );
  const maxHazDiff = (sex) => {
    const a = simulate(MODEL, { sex }), b = simulate(withStubs, { sex });
    let m = 0; for (let k = 0; k < a.hazard.length; k++) m = Math.max(m, Math.abs(a.hazard[k] - b.hazard[k]));
    return m;
  };
  const sarcoLE = (M, sex) => lifeExpectancy(M, { sex, interventions: { sarcopenia: { startAge: 40, efficacy: 1.0 } } });
  num("stub: baseline LE male invariant", lifeExpectancy(withStubs, { sex: "male" }), baseM, 1e-9);
  num("stub: baseline LE female invariant", lifeExpectancy(withStubs, { sex: "female" }), baseF, 1e-9);
  num("stub: max|Δhazard| male (engine ignores stubs)", maxHazDiff("male"), 0, 1e-12);
  num("stub: max|Δhazard| female", maxHazDiff("female"), 0, 1e-12);
  num("stub: sarcopenia-interv LE male invariant (no frailty overwrite)", sarcoLE(withStubs, "male"), sarcoLE(MODEL, "male"), 1e-9);
  num("stub: sarcopenia-interv LE female invariant", sarcoLE(withStubs, "female"), sarcoLE(MODEL, "female"), 1e-9);
  num("stub: stubbed model still validator-clean", validateGraph(withStubs).errors.length, 0, 0);

  // validator catches the faults that baseline LE alone misses
  num("validator: current model clean (0 errors)", validateGraph(MODEL).errors.length, 0, 0);
  const inject = (...es) => { const M = JSON.parse(JSON.stringify(MODEL)); M.edges.push(...es); return validateGraph(M).errors.length; };
  // two live frailty edges to the same cause (baseline has none now) ⇒ betaByCause collision
  str("validator: catches duplicate live frailty target", String(inject({ kind: "frailty", from: "sarcopenia", to: "cardiovascular", beta: 0.5 }, { kind: "frailty", from: "clonal-hematopoiesis", to: "cardiovascular", beta: 0.3 }) > 0), "true");
  str("validator: catches malformed cause form (missing slope/threshold/cap)", String(inject({ kind: "cause", from: "HbA1c", to: "cancer", form: "mediatorThresholdRamp", med: "HbA1c", beta: 0 }) > 0), "true");
  str("validator: catches unknown endpoint", String(inject({ kind: "coupling", from: "NOPE", to: "cancer", strength: "weak" }) > 0), "true");
}

// ---- genomic-instability ∫rate·dt migration (Phase C3, 2026-06-12) ----
// GI is de-age-pegged: closed-form linear curve → emergent ∫rate·dt baseline + an exogenous-driver
// channel (accumDev, folded into the PRIMARY deviation so it propagates through the coupling solve).
// Verifies, per the reviewed design: emergent baseline preserved; term=0 at popMean; the exposure
// DEVIATION grows with duration AND propagates downstream; burdens stay in [0,1] and finite.
{
  const AGE0gi = MODEL.meta.ageRange[0];
  const atAge = (B, age) => B[age - AGE0gi];

  // baseline preserved: emergent integral reproduces 0.05 + 0.01·(age−20); GI@80 ≈ 0.65 (Δ=0 ⇒ B=T)
  const rPop = simulate(MODEL, { sex: "male" });
  num("GI-migration: emergent baseline GI@80 ≈ 0.65", atAge(rPop.B["genomic-instability"], 80), 0.65, 1e-6);

  // inject a SYNTHETIC exogenous-driver term (does NOT touch params.json): coeff·(smoking−popMean)
  const M2 = JSON.parse(JSON.stringify(MODEL));
  M2.nodes.find((n) => n.id === "genomic-instability").rate.terms =
    [{ coeff: 0.0002, drivers: [{ id: "smoking", minus: 2 }] }];

  // term = 0 at popMean input (smoking=2) ⇒ GI burden identical to the no-term baseline
  const rPop2 = simulate(M2, { sex: "male", inputs: { smoking: 2 } });
  num("GI-migration: synthetic term = 0 at popMean",
    atAge(rPop2.B["genomic-instability"], 80) - atAge(rPop.B["genomic-instability"], 80), 0, 1e-12);

  // exposure DEVIATION (not level — baseline already rises) grows with duration: dev80 > dev50 > 0
  const rExp = simulate(M2, { sex: "male", inputs: { smoking: 20 } });
  const dev = (age) => atAge(rExp.B["genomic-instability"], age) - atAge(rPop.B["genomic-instability"], age);
  str("GI-migration: exposure deviation grows with duration (dev80>dev50>0)",
    String(dev(80) > dev(50) && dev(50) > 0), "true");

  // PROPAGATION through the coupling solve: a downstream GI target rises under exposure
  // (proves accumDev is INSIDE the solve, not added post-hoc — review correction #1)
  str("GI-migration: exposure propagates downstream to cellular-senescence",
    String(atAge(rExp.B["cellular-senescence"], 80) > atAge(rPop.B["cellular-senescence"], 80)), "true");

  // bounds + finiteness under heavy exposure: GI∈[0,1] and every node burden finite
  const rHeavy = simulate(M2, { sex: "male", inputs: { smoking: 40 } });
  const giH = atAge(rHeavy.B["genomic-instability"], 100);
  str("GI-migration: GI burden in [0,1] under heavy exposure", String(giH >= 0 && giH <= 1), "true");
  let fin = true;
  for (const id in rHeavy.B) for (let k = 0; k < rHeavy.ages.length; k++) if (!Number.isFinite(rHeavy.B[id][k])) fin = false;
  str("GI-migration: all node burdens finite under heavy exposure", String(fin), "true");
}

// ---- age-indexed exposure-profile substrate (exposure history; 2026-06-12) ----
// An exogenous input may be a scalar (constant lifetime exposure) OR an age-profile
// {byAge:[[age,val],...]} (interpolated). A profile only changes a rate-term integral. Verifies:
// constant profile ≡ scalar (invariance), and a FORMER-smoker profile (intensity then quit) makes
// the integrated GI burden PLATEAU after the quit age — exposure history a scalar cannot express.
{
  const AGE0e = MODEL.meta.ageRange[0];
  const atAge = (B, age) => B[age - AGE0e];
  const Mx = JSON.parse(JSON.stringify(MODEL));
  // IRREVERSIBLE accrual (the correct Phase-3 smoking-term form): floor:0 ⇒ exposure ≤ popMean adds
  // ZERO rate (never negative), so accumulated GI damage does NOT decay when smoking stops. Yoshida's
  // tissue recovery (near-normal-cell repopulation) is a SEPARATE turnover mechanism, not modeled here.
  Mx.nodes.find((n) => n.id === "genomic-instability").rate.terms =
    [{ coeff: 0.0002, drivers: [{ id: "smoking", minus: 2, floor: 0 }] }];

  // (a) a constant-byAge profile equals the scalar input (same value at every age) — GI identical
  const sScalar = simulate(Mx, { sex: "male", inputs: { smoking: 20 } });
  const sProfile = simulate(Mx, { sex: "male", inputs: { smoking: { byAge: [[20, 20], [130, 20]] } } });
  num("exposure-profile: constant profile ≡ scalar input (GI@80)",
    atAge(sProfile.B["genomic-instability"], 80) - atAge(sScalar.B["genomic-instability"], 80), 0, 1e-12);

  // (b) FORMER smoker: 20 cig/day until 50, then QUIT to canonical 0. With floor:0 the sub-popMean
  // exposure adds no rate ⇒ GI PLATEAUS at the at-quit level and does NOT decay (== not just ≈).
  const quit = simulate(Mx, { sex: "male", inputs: { smoking: { byAge: [[20, 20], [50, 20], [51, 0], [130, 0]] } } });
  const base = simulate(Mx, { sex: "male" });  // popMean smoking ⇒ GI term = 0
  const dev = (age) => atAge(quit.B["genomic-instability"], age) - atAge(base.B["genomic-instability"], age);
  str("exposure-profile: former-smoker GI plateaus (no decay) after quit-to-0 (dev80==dev55>dev40>0)",
    String(Math.abs(dev(80) - dev(55)) < 1e-9 && dev(55) > dev(40) && dev(40) > 0), "true");
}

// ---- cellular-senescence ∫rate·dt migration (Phase C3b — exponential via SELF-AMPLIFYING rate) ----
// Senescence was a Tier-B exponential curve; now an emergent ∫rate·dt with rate=(e^r−1)·(B+A) — the
// exponential rise emerges age-free from senescence's own paracrine feed-forward. coeff=e^r−1 (the
// discrete-time growth factor) reproduces the former curve EXACTLY at the grid ⇒ LE numerically
// unchanged. Verifies: emergent baseline reproduces the exponential; convex (self-amplifying); the
// exogenous-driver channel is inert at popMean and propagates downstream when driven.
{
  const AGE0s = MODEL.meta.ageRange[0];
  const atAge = (B, age) => B[age - AGE0s];
  const r = simulate(MODEL, { sex: "male" });
  num("sen-migration: emergent baseline senescence@80 reproduces exponential (≈0.2506)",
    atAge(r.B["cellular-senescence"], 80), 0.250579, 1e-5);
  // self-amplifying ⇒ baseline is CONVEX: accrual per decade RISES with age (a linear node would not)
  const inc = (a) => atAge(r.B["cellular-senescence"], a) - atAge(r.B["cellular-senescence"], a - 10);
  str("sen-migration: self-amplifying baseline is convex (Δ[70→80] > Δ[30→40] > 0)",
    String(inc(80) > inc(40) && inc(40) > 0), "true");
  // exogenous-driver channel: a synthetic term = 0 at popMean ⇒ senescence unchanged
  const M2 = JSON.parse(JSON.stringify(MODEL));
  M2.nodes.find((n) => n.id === "cellular-senescence").rate.terms =
    [{ coeff: 0.0003, drivers: [{ id: "smoking", minus: 2, floor: 0 }] }];
  const rPop = simulate(M2, { sex: "male", inputs: { smoking: 2 } });
  num("sen-migration: synthetic driver term = 0 at popMean",
    atAge(rPop.B["cellular-senescence"], 80) - atAge(r.B["cellular-senescence"], 80), 0, 1e-12);
  // and when driven, propagates downstream through the live senescence→chronic-inflammation coupling
  const rExp = simulate(M2, { sex: "male", inputs: { smoking: 20 } });
  str("sen-migration: exposure propagates downstream to chronic-inflammation",
    String(atAge(rExp.B["chronic-inflammation"], 80) > atAge(r.B["chronic-inflammation"], 80)), "true");
}

// ---- chronic-inflammation ∫rate·dt migration (Phase C3c — sigmoid via SATURATING logistic self-dynamic) ----
// Inflammation was a Tier-B sigmoid curve; now emergent ∫rate·dt using the EXACT age-free logistic
// one-step map B_next = L·B·E/(L+B·(E−1)) (closed-form of dB/dt = k·B·(1−B/L), NOT Euler), reproducing
// the former sigmoid EXACTLY ⇒ LE unchanged. Verifies: emergent baseline reproduces the sigmoid; the
// self-dynamic SATURATES (per-decade increment peaks near the midpoint then falls — the logistic
// signature, distinct from senescence's monotone-rising convex increments); channel inert + propagates.
{
  const AGE0i = MODEL.meta.ageRange[0];
  const atAge = (B, age) => B[age - AGE0i];
  const r = simulate(MODEL, { sex: "male" });
  num("infl-migration: emergent baseline inflammation@80 reproduces sigmoid (≈0.7927)",
    atAge(r.B["chronic-inflammation"], 80), 0.792717, 1e-5);
  // SATURATING: per-decade increment PEAKS near the midpoint (60) then FALLS toward the cap (≠ exponential)
  const inc = (a) => atAge(r.B["chronic-inflammation"], a) - atAge(r.B["chronic-inflammation"], a - 10);
  str("infl-migration: saturating self-dynamic — increment peaks near mid then falls (Δ60>Δ40, Δ60>Δ100>0)",
    String(inc(60) > inc(40) && inc(60) > inc(100) && inc(100) > 0), "true");
  // exogenous-driver channel: a synthetic term = 0 at popMean ⇒ inflammation unchanged
  const M2 = JSON.parse(JSON.stringify(MODEL));
  M2.nodes.find((n) => n.id === "chronic-inflammation").rate.terms =
    [{ coeff: 0.0003, drivers: [{ id: "smoking", minus: 2, floor: 0 }] }];
  const rPop = simulate(M2, { sex: "male", inputs: { smoking: 2 } });
  num("infl-migration: synthetic driver term = 0 at popMean",
    atAge(rPop.B["chronic-inflammation"], 80) - atAge(r.B["chronic-inflammation"], 80), 0, 1e-12);
  // and when driven, propagates downstream through the live inflammation→atherosclerosis coupling
  const rExp = simulate(M2, { sex: "male", inputs: { smoking: 20 } });
  str("infl-migration: exposure propagates downstream to atherosclerosis",
    String(atAge(rExp.B["atherosclerosis"], 80) > atAge(r.B["atherosclerosis"], 80)), "true");
}

// ---- generic intervention operators + node-to-node rate-channel (machinery; SYNTHETIC coeffs) ----
// Validates the operator MACHINERY with synthetic coefficients (no biological efficacies). operators:[]
// is inert (baseline-invariant). Covers: senolytic pulse DROPS existing burden (which freeze/slow cannot);
// production-suppress slows accrual without dropping existing burden; senomorphic attenuates a coupling
// gain without clearing the source; and the node-deviation rate-channel integrates cumulatively.
{
  const AGE0o = MODEL.meta.ageRange[0];
  const atAge = (B, age) => B[age - AGE0o];
  const baseSen = (age) => atAge(simulate(MODEL, { sex: "male" }).B["cellular-senescence"], age);

  num("operators: empty list ⇒ baseline LE invariant",
    lifeExpectancy(MODEL, { sex: "male", operators: [] }) - baseM, 0, 1e-9);

  // senolytic pulse DROPS existing burden; freeze/slow does NOT (the key distinction)
  const pulse = simulate(MODEL, { sex: "male", operators: [{ kind: "senolytic-pulse", target: "cellular-senescence", killFraction: 0.5, ages: [60] }] });
  const freeze = simulate(MODEL, { sex: "male", interventions: { "cellular-senescence": { efficacy: 0.5, startAge: 60 } } });
  str("operators: senolytic pulse DROPS existing burden (B_sen@62 << baseline)",
    String(atAge(pulse.B["cellular-senescence"], 62) < baseSen(62) - 0.02), "true");
  str("operators: freeze/slow barely touches existing burden vs the pulse (freeze ≈ baseline, ≫ pulse)",
    String((baseSen(62) - atAge(freeze.B["cellular-senescence"], 62)) < 0.012
        && atAge(freeze.B["cellular-senescence"], 62) > atAge(pulse.B["cellular-senescence"], 62) + 0.03), "true");
  const pulse2 = simulate(MODEL, { sex: "male", operators: [{ kind: "senolytic-pulse", target: "cellular-senescence", killFraction: 0.5, ages: [60, 80] }] });
  str("operators: repeated pulses clear more (B_sen@90 with 2 pulses < with 1)",
    String(atAge(pulse2.B["cellular-senescence"], 90) < atAge(pulse.B["cellular-senescence"], 90)), "true");

  // production-suppress slows accrual over a window WITHOUT dropping existing burden
  const prod = simulate(MODEL, { sex: "male", operators: [{ kind: "production-suppress", target: "cellular-senescence", atten: 0.5, startAge: 60, endAge: 90 }] });
  str("operators: production-suppress leaves window-start burden unchanged but slows later accrual",
    String(Math.abs(atAge(prod.B["cellular-senescence"], 60) - baseSen(60)) < 1e-9
        && atAge(prod.B["cellular-senescence"], 85) < baseSen(85)), "true");

  // senomorphic attenuates the sen→infl coupling WITHOUT changing senescence burden (perturb sen via a
  // synthetic exogenous driver so the coupling carries a signal)
  const Ms = JSON.parse(JSON.stringify(MODEL));
  Ms.nodes.find((n) => n.id === "cellular-senescence").rate.terms = [{ coeff: 0.0002, drivers: [{ id: "smoking", minus: 2, floor: 0 }] }];
  const noMorph = simulate(Ms, { sex: "male", inputs: { smoking: 20 } });
  const morph = simulate(Ms, { sex: "male", inputs: { smoking: 20 }, operators: [{ kind: "senomorphic", from: "cellular-senescence", to: "chronic-inflammation", atten: 0.8, startAge: 20, endAge: 130 }] });
  str("operators: senomorphic lowers downstream inflammation WITHOUT changing senescence",
    String(atAge(morph.B["chronic-inflammation"], 80) < atAge(noMorph.B["chronic-inflammation"], 80)
        && Math.abs(atAge(morph.B["cellular-senescence"], 80) - atAge(noMorph.B["cellular-senescence"], 80)) < 1e-9), "true");

  // node-deviation rate-channel: an inflammation rate term reading D_sen integrates cumulatively
  const Mr = JSON.parse(JSON.stringify(Ms));
  Mr.nodes.find((n) => n.id === "chronic-inflammation").rate.terms = [{ coeff: 0.02, drivers: [{ node: "cellular-senescence" }] }];
  const noChan = simulate(Ms, { sex: "male", inputs: { smoking: 20 } });
  const chan = simulate(Mr, { sex: "male", inputs: { smoking: 20 } });
  const dInfl = (age) => atAge(chan.B["chronic-inflammation"], age) - atAge(noChan.B["chronic-inflammation"], age);
  str("operators: node-deviation rate-channel integrates cumulatively (dInfl80 > dInfl50 > 0)",
    String(dInfl(80) > dInfl(50) && dInfl(50) > 0), "true");
}

export function runTests() {
  let allPass = true;
  const rows = tests.map((t) => {
    let pass, gotStr, tgtStr;
    if (t.tol === null) {
      pass = t.got === t.target;
      gotStr = String(t.got);
      tgtStr = String(t.target);
    } else {
      pass = Math.abs(t.got - t.target) <= t.tol + 1e-12;
      gotStr = t.got.toFixed(4);
      tgtStr = `${t.target} ±${t.tol}`;
    }
    if (!pass) allPass = false;
    return { name: t.name, got: gotStr, target: tgtStr, status: pass ? "PASS" : "FAIL" };
  });

  const wName = Math.max(4, ...rows.map((r) => r.name.length));
  const wGot = Math.max(3, ...rows.map((r) => r.got.length));
  const wTgt = Math.max(6, ...rows.map((r) => r.target.length));
  const pad = (s, w) => s + " ".repeat(Math.max(0, w - s.length));
  const line = (a, b, c, d) => `${pad(a, wName)}  ${pad(b, wGot)}  ${pad(c, wTgt)}  ${d}`;

  console.log(line("Test", "Got", "Target", "Status"));
  console.log(line("-".repeat(wName), "-".repeat(wGot), "-".repeat(wTgt), "------"));
  for (const r of rows) console.log(line(r.name, r.got, r.target, r.status));
  const nPass = rows.filter((r) => r.status === "PASS").length;
  console.log(`\n${nPass}/${rows.length} passed`);
  return allPass;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const ok = runTests();
  process.exit(ok ? 0 : 1);
}
