# Aging-Simulator — Project Notes / Resume Guide

> Working handoff doc. Read this first when resuming. The **deep design + all
> parameters + the 18-node audit + citations** live in
> [`frameworks/causal-graph-parameters.md`](../frameworks/causal-graph-parameters.md)
> — this file is the *operational* overview: how the pieces fit, how to build/test,
> the mistakes already fixed (don't repeat them), current state, and the roadmap.
>
> **Status:** working interactive tool. Engine 73/73 tests green. Baseline LE
> reproduces empirical 2022 ≈ **75.82 M / 80.89 F**. All commits are **LOCAL and
> UNPUSHED** (user controls pushes). Not wired into Quartz.
>
> **What it is:** an interactive, evidence-tagged *sensitivity explorer* (NOT a
> predictor) that turns the hallmark causal graph into a dynamical model, computes
> competing-hazards mortality calibrated to CDC, and lets a person see how
> lifestyle/labs/interventions shift their cause-of-death profile and life
> expectancy. Every number is provenance-tagged; do **not** propagate sim outputs
> onto atomic wiki pages.

---

## 1. Files & the build flow (THE thing not to break)

```
frameworks/causal-graph-parameters.md   ← SINGLE SOURCE OF TRUTH. Prose design +
                                          audit findings + a fenced ```json block
                                          = the canonical MODEL.
model/
  engine.mjs        ← canonical math. Pure ESM, NO deps, NO DOM. The only model code.
  params.json       ← generated FROM the .md json block (do not hand-edit).
  build-params.mjs  ← extracts the .md ```json block → params.json.
  build-app.mjs     ← inlines engine.mjs + params.json INTO the html (between markers).
  test.mjs          ← 73 regression tests. `node model/test.mjs` MUST stay green.
  cli.mjs           ← le / sweep / validate / fit(stub).
  README.md         ← one-paragraph pointer.
viz/aging-simulator.html  ← the app. RENDER layer (UI/CSS/SVG) + an INJECTED engine.
```

**Marker discipline (critical):** the app's engine copy sits between
`// <<<ENGINE-INJECT-START>>>` and `// <<<ENGINE-INJECT-END>>>`. `build-app.mjs`
replaces only that block. **All UI/render/CSS code is OUTSIDE the markers** — edit
there for layout; a rebuild preserves it. Never hand-edit the inlined engine; edit
`model/engine.mjs` and rebuild.

**To change parameters:** edit the ```json block in the `.md` → `node
model/build-params.mjs` → `node model/test.mjs` → `node model/build-app.mjs`.
(For programmatic edits, load the json block, mutate, write back — see the python
one-liners used throughout the commit history.)

**To change math:** edit `model/engine.mjs` → `node model/test.mjs` → `node
model/build-app.mjs`. No deps; `node --check` to parse.

**Leak-gate before every commit** (per repo CLAUDE.local.md). Commit scoped to the
sim files; never `git add -A` (the repo has unrelated user changes).

---

## 2. Architecture — the layered model

Four layers, all unified by ONE discipline: **everything acts on deviations from
the population average, so at population-average inputs every deviation is 0,
every multiplier is 1, and the model reproduces the empirical CDC baseline exactly
(75.82 / 80.89).** This invariant is the load-bearing guard — *every change must
preserve it*, and `test.mjs` pins it.

1. **Latent hallmark nodes** (18 nodes / 38 edges; structure inherited from the
   *verified* `frameworks/causal-graph-data.md`). Burden `B_i = clamp(T_i + Δ_i)`.
   `T_i` = baseline curve (parametric for hallmarks; **table** = normalized CDC
   curve for the 4 cause nodes). `Δ_i` = deviation from interventions, propagated
   by a **bounded fixed-point**: `Δ = (I − couple·G)⁻¹·p`, `p` = primary deviation
   from a node's own freeze. (Spectral radius of couple·G ≈ 0.10 → stable.)

2. **Competing-hazards mortality** (per-sex, CDC-WONDER-2022 calibrated):
   `h(age) = E_sex(age)·lifestyle + Σ_c (cause hazards) + residual`, each cause =
   `Rmax_{c,sex}·B_node(c)` × Π(deviation multipliers), the whole intrinsic bracket
   × allcause multipliers (fitness, BMI J-curve) and × **cause-specific frailty**.
   At baseline all = CDC → empirical LE.

3. **Endogenous mediators** (B-layer): exogenous inputs → emergent mediator
   *values* → cause-hazard multipliers. Mediators: **LDL, systolicBP, BMI, HbA1c**
   (NHANES *untreated* baselines) + biomarker proxies. `mediator(age) =
   baseline_{med,sex}(age) + Σ exogenous-deviation·coeff + personal_offset`.

4. **Exogenous inputs** (behaviors/environment — "exogenous", NOT "exposure"):
   smoking status, caloric intake, **physical activity (kept SEPARATE from
   calories — fitness-vs-fatness)**, diet (sat-fat/fiber/sodium), alcohol, air
   pollution, sleep. Plus **treatments** (statin/antihypertensive/metformin) as
   downward mediator shifts.

**The extrinsic channel** (accidents/violence — Makeham term, the `lifestyle`
slider) is SEPARATE from the biological-risk layer. Don't conflate.

---

## 3. Composition math (memorize this — it's how everything stays consistent)

```
mediator_value = baseline + Σ exo-deviation·coeff + personal_offset      (=baseline at pop-avg)
cause_hazard_c = CDC_baseline_c(age,sex) · Π_edges exp(β·(value − baseline))   (=CDC at pop-avg)
intrinsic      = Σ_c [bracketMult · frailtyMult_c · cause_hazard_c] + residual·…
LE             = 20 + Σ S,  S = exp(−Σ h)
```

- **Deviation, not absolute.** `exp(β·(value−baseline)) = 1` when value==baseline.
  This is why the invariant holds and why we don't double-count the population's
  average smoker/LDL/etc. (already in the CDC baseline).
- **Categorical inputs (smoking) are NORMALIZED** by the population mix so the
  mix averages to 1 (never-smoker comes out PROTECTED, <1).
- **β derivation:** `β = ln(HR)` per unit of the edge's natural variable. E.g.
  LDL→CVD β = ln(1/0.78)/38.7 mg/dL = 0.00643 (CTT); SBP→CVD β = ln(2)/20 mmHg,
  **age-modified** (halves per ~2 decades, Lewington).
- **Personal offset** (lab anchoring) = `measured − emergent_prediction_at_currentAge`
  (residual to current inputs), held forward. Output then = *conditional* LE from
  current age.

---

## 4. The 18-node fan-out audit → 3 calibration tiers (the evidence backbone)

Full details in the param file § "Node-audit findings". Summary:

- **C1 — calibrated terminal edges** (real mortality): inflammation→CVD (hsCRP RR
  1.55/SD, *causal* via CANTOS); frailty→all-cause (cause-specific HRs); dementia
  (Lancet 2024 PAF 45%, ~55% remainder, APOE4); cancer (~45% modifiable PAF,
  ~30–55% intrinsic remainder); immunosurveillance→cancer (**virus-weighted**, not
  flat SIR 2.1).
- **C2 — measurable mediators** (anchor a latent state, double-count caveats):
  inflammation (hsCRP/IL-6); nutrient-sensing (**IGF-1 U-SHAPED**, nadir 120–160,
  NOT monotonic); mito (GDF15 = generic ISR → shared reporter only; mtDNA-CN
  MR-null); stem-cell (**RDW**, cheap, HR 1.23/SD); proteostasis (p-tau217/NfL =
  the disease, calibrate the EDGE not the node); frailty (grip/gait/FI).
- **C3 — pure latent levers** (no clinical assay; %-perturbation only; mortality
  flows downstream): genomic-instability, telomere (antagonistic causality →
  weak), senescence (routes via inflammation), autophagy, intercellular-comm,
  **epigenetic clocks = READOUT/validator NOT a driver (MR-null)**, dysbiosis
  (diet-confounded).

**Key cross-cutting conclusions:** the model is *mostly latent levers + a few
calibrated edges*; composite clocks/GDF15 are a validation layer, not drivers;
the exogenous layer is the real payoff AND the home for SHARED risk factors
(LDL/HTN/diabetes/smoking/obesity drive CVD+dementia+cancer → route-once/fan-out).

---

## 5. Eight named double-count disciplines (don't violate)

CHIP↔inflammation · senescence-SASP↔inflammation · stem-cell→(sarcopenia+
immunosenescence+inflammation) · nutrient-sensing↔metabolic-exposures ·
dysbiosis↔diet · mito-GDF15↔senescence/inflammation · proteostasis-markers↔
neurodegeneration-cause · dementia-exposures↔CVD-exposures.

**Route-once rule:** each input's hazard travels ONE path. E.g. smoking→cancer is
a direct PAF edge, NOT also routed through the genomic-instability latent lever
for hazard. **Mechanistic-vs-bundled:** BMI is modeled mechanistically (BMI→SBP +
BMI→HbA1c + a direct CV residual sized to the *un*mediated ~half per Lu 2014),
NOT as a bundled BMI→all-cause HR (which would double-count the mediated portion).

---

## 6. FIXED MISTAKES — the "do not repeat" list

1. **Coupling rate-injection → step response (the big early bug).** Coupling was
   injected into `dB/dage` and integrated unbounded over decades, so *any* non-zero
   intervention saturated downstream nodes → a cliff in LE. Fixed with the bounded
   fixed point `Δ=(I−couple·G)⁻¹p`. Lesson: propagation must be bounded/algebraic,
   not time-integrated.
2. **Flat `sexMult` fudge → deleted.** A single sex scalar was a fudge; replaced
   with real **per-sex CDC WONDER cause curves** (the female CVD-onset delay + 3×
   male external excess now emerge from data). User principle: **no fudge factors
   when the data exists.**
3. **Sodium→SBP sign inverted.** The "−5.8 mmHg per −100 mmol" *reduction* framing
   was stored as a negative slope, so more sodium *lowered* BP. Fixed to **+5.8**.
   Watch this framing trap on any "per −X reduction" coefficient.
4. **BMI missing from the app's `MED_SCALE`** → `renderMediators` threw mid-render
   on the BMI mediator → `renderAll` aborted → **blank cause-of-death + burden
   panels AND a frozen LE readout (which masked "smoking has no effect" — the
   engine/wiring were always correct).** Lesson: a new mediator MUST be added to
   the app render layer's `MED_SCALE` + `MED_COLOR`; a defensive fallback now
   prevents a single unscaled mediator from crashing the whole render.
5. **Frailty β mis-anchored.** Was a global 0.6 from a wrong "Kojima 1.83"; real
   frail-vs-robust ≈ 2.4 (Peng 2022) AND frailty is **cause-differential**
   (respiratory 4.9× ≫ CV 2.6× > cancer 2.0×). Now per-cause `β=ln(HR)`.
6. **Linear interpolation over-counted convex mortality** (chords above an
   accelerating curve) → switched table interp to **monotone cubic (PCHIP)** for
   smooth curves + slightly higher, more accurate LE.
7. **Test re-baselining:** the harness pins *exact* LE/ΔLE values. Any change that
   shifts the baseline (interp, frailty restructure, new edges) requires updating
   the affected test targets. Don't assume tests are wrong — confirm the new value
   is physiologically sane, then re-baseline (and update the self-checks in
   `build-app.mjs` + the app's init log + this doc's 75.82/80.89).
8. **Plateau at 90 + the renormalization trap.** Disease/residual hazards flat-lined
   past ~90 because the CDC bands stop at the open-ended **85+** bucket and the
   burden curves saturate at 1.0. First fix attempt *renormalized* the cause curves
   to age 100, which silently scaled `Rmax` ~2.38× and **amplified every latent
   intervention** (a gi-freeze jumped ΔLE 1.17→2.63) — a bad side effect from a
   cosmetic change. Reverted. Correct fix = a **Gompertz old-age tail FACTOR**
   (`mortality.oldAgeTail`: `exp(0.0866·(age−90))`, ~2.38×/decade, MRDT≈8 yr)
   multiplied onto the disease + residual hazard lines only. `Rmax` and the burden
   curves are untouched, so interventions stay stable (gi 1.15, smoking −8.29) while
   hazards keep rising past 90. Lesson: carry the old-age acceleration in a
   *separate multiplicative factor*, never by rescaling the calibrated `Rmax`.

   **SUPERSEDED by v0.4 (2026-06-09).** The Gompertz tail FACTOR fixed the plateau
   but was keyed to *chronological age* and intervention-invariant: above 90 the
   cause burden was clamped at 1, so an upstream intervention's coupling relief was
   erased by the clamp and the `exp(0.0866·(age−90))` factor ran regardless — no
   intervention could bend the >90 curve (user's objection: "any outcome tied to age
   regardless of input is incorrect"). v0.4 folds the escalation INTO burden via an
   **odds link** `hazard_c = Rmax·B/(1−B)` on cause-node **reserve-depletion** tables
   (`B' = h/(1+h)` where `h` was the old normalized rate; `B'=0.5` at 90, the >90
   anchors `E/(1+E)`, `E=exp(0.0866·(age−90))`, reproduce the former MRDT-8yr tail
   EXACTLY). Crucially this does NOT fall into the renormalization trap above: `Rmax`
   is preserved EXACTLY and baseline LE is reproduced to ±0.01 (M 75.82 / F 80.89),
   yet the tail is now burden-driven so interventions bend it (gi-freeze 1.17→1.61,
   chronic-inflammation 3.15→3.97; direct cause freezes barely move because their
   benefit is dominated by <90 ages). `oldAgeTail.rate` set to 0 (deprecated, kept
   for back-compat; nothing multiplies by it). Residual (the unmodeled remainder)
   keeps its escalation baked into its own age table — the one remaining age-keyed
   term, defensible because it has no burden node to attach to. Lesson refinement:
   old-age acceleration belongs in the *intervention-reachable* burden state via a
   convex (pole-at-1) link, not an age factor and not a rescaled `Rmax`.

**Other gotchas:** activity has overlapping channels (fitness→all-cause +
HbA1c→CVD + SBP→CVD) — acknowledged *minor* double-count, mitigated because
HbA1c→CVD is threshold-gated (>5.7) so it's ~inert for active people; the
fit-harness should reconcile total activity effect vs Kodama. The latent-node
layer only affects mortality under *node-freeze interventions* — the burden
timeline does NOT respond to lifestyle inputs (by design; exogenous→latent is
unwired). Mediator→cause edges use a RATIO-to-baseline form where the baseline
already exceeds a threshold (HbA1c >5.7 at 60+) so the multiplier is 1 at baseline.

---

## 7. Current state (what's built)

- **Stages 1–3 complete.** S1 mediator emergence; S2 clean mediator→cause edges;
  S3a smoking→CVD + activity→fitness (Kodama 0.87/MET, weight-independent); S3b
  mechanistic BMI (Lu 2014).
- **B2 cause-specific frailty** done.
- **User-testing fixes** done (sodium sign, activity→SBP, BMI→HbA1c, the blank-panel
  crash).
- **Cubic interpolation** smoothing done.
- **App consumes the engine** (dual-implementation killed via build-app inlining).
- **Age range extended 20→130** (`meta.ageRange`); survival reaches ~0 past 110
  instead of plateauing at 90; lifespan extends past 100 under interventions. Data
  arrays computed over the full 20–130 span.
- **v0.4 burden-driven old-age escalation** (2026-06-09): replaced the age-keyed
  Gompertz tail factor with an **odds link** `Rmax·B/(1−B)` on cause-node
  reserve-depletion burdens, so interventions now bend the >90 mortality curve
  (see FIXED-MISTAKES §8 supersession). Baseline LE unchanged (M 75.82 / F 80.89);
  +4 v0.4 lock tests in `test.mjs` (77/77 pass). App-layer (same session): burden
  timeline gained nearest-line hover-identify + click-to-select; cause-of-death
  Absolute-hazard axis scales to the visible window with plain (non-exponential)
  labels.
- **Dynamic x-axis** (app render layer): `computeXMax(sim)` = largest age where
  survival > 0.005, rounded up to 5, clamped [100,130]; `renderAll` sets `X_MAX`
  per render and every x-mapping (cause/burden/survival/mediator), gridline loop,
  hover handler, and path cap reads it. Baseline `X_MAX=105`; grows to 110 under a
  life-extending scenario. Engine untouched by this (pure UI), so tests unaffected.
- **Layout pass** done: causal-graph height halved (viewBox 560×340) + denser
  multi-column grid to fit everything on one screen.
- 73/73 tests; leak-gate clean; **all commits local/unpushed**.

---

## 8. Roadmap / deferred (next session)

- **Remaining B2 latent fixes** — CHIP→atherosclerosis routed via inflammation +
  virus-weighted immunosenescence→cancer. These are refinements to the **verified**
  `causal-graph-data` edge structure → apply THERE via the seeder/verifier flow,
  then they flow to the sim; do NOT diverge the sim's structure from the source.
- **IGF-1 U-shape** — needs an IGF-1 *mediator* node (nutrient-sensing's mortality
  is U-shaped, nadir ~120–160; a monotonic burden is wrong). Add IGF-1 as a C2
  mediator with a |deviation-from-nadir| edge.
- **`fit` harness** (cli stub) — calibrate the mediator/CDC baselines to data and
  validate against held-out facts. **CRITICAL discipline:** PIN dose-response edges
  to literature; do NOT free-fit the underdetermined latent params (the inverse
  problem — many internal parameterizations reproduce the same aggregate curves).
  Objective = curve-reproduction + literature-anchored constraints + held-out
  validation (e.g. does a fitted model reproduce a statin trial it wasn't fit on?).
- **Clock-validation layer** — use GrimAge/proteomic-age as model OUTPUT checks
  (does the simulated composite reproduce a measured clock?), never as drivers.
- **exogenous→latent wiring** (optional) — so a smoker's genomic-instability rises
  and the burden timeline responds to lifestyle (the cascade we discussed).
- **More completeness** — sleep/diet-axis edges to causes; more mediators (HDL/TG,
  hsCRP as a live mediator); decompose the large "other/residual" bucket (COPD,
  diabetes, kidney, liver) so named-cause crossovers sharpen.
- **Personal-offset polish** — percentile-held (not just additive) + multi-draw
  trajectory fitting + mild regression-to-mean.
- **Wiki-maintenance leads** surfaced by the audit (seed a cancer-PAF layer; create
  `rdw-biomarker.md`; add TMRC 2017 / Salosensaari 2021 / Lancet Commission 2024
  citations; cite Blokzijl 2016 directly).
- **Publishing** — wire into Quartz (currently a local double-click artifact).

---

## 9. Data provenance (for re-verification)

All cited inline in the param file. Backbone sources: **CDC WONDER D158** (per-sex
age×cause mortality, 2022) + **NVSR 74-04** (cause rates); **NHANES** (mediator
baselines — NHSR-35 BP, Fryar 2015–18 anthropometrics, Selvin 2005–10 glucose,
JAMA-Cardiol lipid trends; *use UNTREATED strata — measured LDL/BP at 60+ are
statin/antihypertensive-suppressed, so treatment is modeled as an intervention*).
Dose-responses: CTT (LDL→CVD), ERFC (CRP→CVD), Lewington (BP→CVD, age-modified),
ERFC/Gudala (diabetes), Global-BMI-2016 + Lu-2014 (BMI J-curve + mediation),
Kodama-2009 + Barry-2014 (fitness), Bann-2021 (BMI→SBP), Mensink/Brown/He/Umpierre/
Kodama/Roerecke/Rimm (exogenous→mediator), Peng-2022 (cause-specific frailty),
Livingston/Lancet-2024 (dementia PAF), Islami/GBD/de-Martel + Tomasetti-Vogelstein
(cancer PAF + intrinsic remainder).

---

## 10. How to run / verify

```
node model/build-params.mjs     # .md json block → params.json
node model/test.mjs             # 73 regression tests (must be green)
node model/cli.mjs le --sex male    # → ~75.82
node model/build-app.mjs        # inline engine into the html
# open viz/aging-simulator.html by double-click (file://, no server needed)
```

**Headless render check** (catches "blank panel" crashes the tests don't): load
the app's `<script>` in node with a Proxy-based stub `document`/`window`
(`createElementNS`, `createTextNode`, `getComputedStyle`, `getElementById`) and
confirm init completes with no throw. (This is how the BMI/MED_SCALE crash was
found — see commit history.)

**The guard for any change:** baseline must stay ≈ 75.82 M / 80.89 F and
`test.mjs` must pass. If LE shifts, re-baseline the targets *and* the self-checks
*and* this doc.
