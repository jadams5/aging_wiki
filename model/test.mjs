#!/usr/bin/env node
// test.mjs — v0.3 regression suite. Pins the verified-model targets the
// engine must reproduce exactly. Prints a pass/fail table and exits 1 on
// any failure. Importable: `runTests()` returns true (all pass) / false.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { simulate, lifeExpectancy, mediators } from "./engine.mjs";

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

num("Baseline LE male", simulate(MODEL, { sex: "male" }).LE, 75.95, 0.05);
num("Baseline LE female", simulate(MODEL, { sex: "female" }).LE, 81.07, 0.05);

num("Baseline max|B-T| male", maxAbsBT("male"), 0, 0);
num("Baseline max|B-T| female", maxAbsBT("female"), 0, 0);

num("genomic-instability freeze@40 eff0.1 ΔLE", dLE("genomic-instability", { efficacy: 0.1 }), 0.11, 0.03);
num("genomic-instability freeze@40 eff0.2 ΔLE", dLE("genomic-instability", { efficacy: 0.2 }), 0.21, 0.03);
num("genomic-instability freeze@40 eff0.4 ΔLE", dLE("genomic-instability", { efficacy: 0.4 }), 0.43, 0.03);
num("genomic-instability freeze@40 eff1.0 ΔLE", dLE("genomic-instability", { efficacy: 1.0 }), 1.17, 0.03);

num("atherosclerosis freeze@40 100% ΔLE", dLE("atherosclerosis"), 3.01, 0.05);
num("chronic-inflammation freeze@40 100% ΔLE", dLE("chronic-inflammation"), 3.15, 0.05); // B2: cause-specific frailty
num("cancer freeze@40 100% ΔLE", dLE("cancer"), 2.10, 0.05);
num("sarcopenia freeze@40 100% ΔLE", dLE("sarcopenia"), 3.68, 0.05); // B2: cause-specific frailty (larger effective β than flat 0.6)
num("cellular-senescence freeze@40 100% ΔLE", dLE("cellular-senescence"), 0.18, 0.05);

num("lifestyle male 0× ΔLE", lifeExpectancy(MODEL, { sex: "male", lifestyle: 0 }) - baseM, 2.44, 0.1);
num("lifestyle male 10× ΔLE", lifeExpectancy(MODEL, { sex: "male", lifestyle: 10 }) - baseM, -17.09, 0.1);

str("decomposition top male age 25", topContributor(25), "extrinsic");
str("decomposition top male age 55", topContributor(55), "residual");
str("decomposition top male age 90", topContributor(90), "residual");

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
// HbA1c→CVD reaches the diabetes HR 2.32 when value hits 6.5 (offset to exactly 6.5 at age 45, baseline ~5.6).
num("B2: HbA1c→CVD HR2.32 at 6.5", causeMultAt("cardiovascular", 45, { offsets: { HbA1c: 0.9 } }), 2.32, 0.03);
str("B2: HbA1c diabetic raises cancer", String(causeMultAt("cancer", 45, { offsets: { HbA1c: 0.9 } }) > 1.0), "true");
str("B2: HbA1c diabetic raises dementia", String(causeMultAt("neurodegeneration", 70, { offsets: { HbA1c: 0.9 } }) > 1.0), "true");

// Smoking (categorical, normalized): current LOWERS LE; never RAISES LE (protected
// vs the mixed-population CDC baseline); former ≈ slightly below baseline.
str("B2: current-smoker lowers LE", String(dLEm({ inputs: { smokingStatus: "current" } }) < -4.0), "true");
str("B2: never-smoker raises LE (protected)", String(dLEm({ inputs: { smokingStatus: "never" } }) > 1.0), "true");
str("B2: former-smoker ≈ slight loss", String(dLEm({ inputs: { smokingStatus: "former" } }) < 0 && dLEm({ inputs: { smokingStatus: "former" } }) > -1), "true");
// Normalized cancer multiplier: current = 2.2/1.243 ≈ 1.770; never = 1.0/1.243 ≈ 0.804.
num("B2: smoking→cancer current mult", causeMultAt("cancer", 60, { inputs: { smokingStatus: "current" } }), 1.770, 0.01);
num("B2: smoking→cancer never mult", causeMultAt("cancer", 60, { inputs: { smokingStatus: "never" } }), 0.804, 0.01);

// Alcohol: heavy (6/day) lowers LE via cancer + liver(residual).
str("B2: heavy alcohol lowers LE", String(dLEm({ inputs: { alcohol: 6 } }) < -1.5), "true");
str("B2: alcohol→liver(residual) hinge >baseline", String(causeMultAt("residual", 60, { inputs: { alcohol: 6 } }) > 1.0), "true");

// PM2.5: high pollution lowers LE via CVD + respiratory(residual).
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
// current-smoker now LOSES MORE than Stage-2 (cancer+COPD + CVD now): ~-8.4.
str("B3a: current-smoker more negative (< -8)", String(dLEm({ inputs: { smokingStatus: "current" } }) < -8.0), "true");
// never-smoker still gains, now with a small extra CVD bump (~+3.5 vs Stage-2 ~+2.8).
str("B3a: never-smoker raises LE (> +3)", String(dLEm({ inputs: { smokingStatus: "never" } }) > 3.0), "true");
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
