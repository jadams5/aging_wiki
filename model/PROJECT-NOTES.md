# Aging-Simulator — Project Notes / Resume Guide

> Working handoff doc. Read this first when resuming. The **deep design + all
> parameters + the node audit + citations** live in
> [`frameworks/causal-graph-parameters.md`](../frameworks/causal-graph-parameters.md)
> — this file is the *operational* overview: how the pieces fit, how to build/test,
> the mistakes already fixed (don't repeat them), current state, and the roadmap.
>
> **Status:** working interactive tool. Run `npm test --prefix model` and
> `npm run test:e2e --prefix model` for the current numerical and browser check counts.
> **Graph/viz overhauled 2026-06-10:** the graph panel is now
> a UNIFIED causal DAG across all layers (inputs→mediators↔state→hallmarks→causes→mortality,
> 42 nodes / 76 edges) with edge-category styling, greyed disabled/unlinked nodes (planned
> work), hover focus/ego mode, live edge weighting (red=raising risk / green=lowering), and
> wheel-zoom/drag-pan; the former Mediator-trajectory + Burden panels are merged into one
> normalized "Node trajectories" timeline (mediators + state nodes + burdens, group-toggle
> chips). **2019 year-harmonization (2026-06-11):** all cause bands re-pulled to CDC WONDER **2019**
> (pre-COVID); residual = 2019 all-cause − bands − extrinsic (dense, exact); cardiovascular redefined
> as all-of-chapter-I + K55 (fixes a pilot **I26-I28 double-count** — I26-28 was already inside the
> literal I20-51 range). Baseline LE re-anchored 2022→2019 (COVID removed): now ≈ **77.459 M / 82.118 F**
> (was 75.815/80.862 on COVID-depressed 2022 data). **β-cell→HbA1c vertical landed
> 2026-06-10** (Increments 1–3): HbA1c is now EMERGENT (flat 5.3 + `β-cell-decline`
> augment, de-age-pegged — keeps rising past 85) with a live glucotoxicity diabetes
> spiral; the per-age `stateAugments` march built here is the reusable substrate for
> de-age-pegging LDL/BMI next. **HbA1c severity endpoints wired** (same day, user-
> caught): `HbA1c→diabetes` (acute-crisis, steep/cap-30) + `HbA1c→ckd` (nephropathy)
> fix the formerly-flat hyperglycemia ladder — the 3 macrovascular HbA1c edges all
> saturate by HbA1c ~6.8, so severe glycemia needs the direct-diabetes + renal
> endpoints to carry dose-response (HbA1c 14 now −11 yr, was −5). Commits land on
> `main` (user controls pushes). The public wiki deploys via **Quartz + Pages**; the sim HTML ships
> as a **static asset under `viz/`** (not a rendered wiki page), and `model/` is excluded
> from the Quartz content (engine code + dev docs, not wiki pages).
>
> **What it is:** an interactive, evidence-tagged *sensitivity explorer* (NOT a
> predictor) that turns the hallmark causal graph into a dynamical model, computes
> competing-hazards mortality calibrated to CDC, and lets a person see how
> expectancy. Every number is provenance-tagged; do **not** propagate sim outputs
> onto atomic wiki pages.

> **⚠ Architecture in migration (2026-06-10).** Several conventions below describe the
> CURRENT two-layer model — **age-pegged baselines + deviation-propagation + the
> node/mediator split**. These are being superseded by the rate-integration migration
> toward a **single unified causal graph** (every node a `∫rate·dt` state variable; no age
> as an input). The target architecture, the no-age-pegging principle, and the residual
> discipline live in **[`model/age-hardcoding-audit.md`](age-hardcoding-audit.md)** —
> read it alongside this file. Passages that conflict are tagged **`[MIGRATING]`** below;
> the current-model description stays accurate until each node is actually migrated.

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
  test.mjs          ← numerical + structural regression suite. `node model/test.mjs` MUST stay green.
  cli.mjs           ← le / sweep / validate / fit(stub).
  package.json      ← pinned browser-test dependency + reproducible npm scripts.
  e2e-playwright.mjs← REAL-browser (Chromium) smoke + interaction test of the rendered app.
                     Run per its header. Catches render/wiring bugs the Node suite cannot.
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
every multiplier is 1, and the model reproduces the empirical CDC 2019 baseline exactly
(77.459 M / 82.118 F).** This invariant is the load-bearing guard — *every change must
preserve it*, and `test.mjs` pins it.

1. **Latent hallmark/cause nodes** (24 nodes; 38 live coupling edges today).
   Burden `B_i = clamp(T_i + Δ_i)`.
   `T_i` = baseline curve (parametric for hallmarks; **table** = normalized CDC
   curve for the 4 cause nodes). `Δ_i` = deviation from interventions, propagated
   by a **bounded fixed-point**: `Δ = (I − couple·G)⁻¹·p`, `p` = primary deviation
   from a node's own freeze. (Spectral radius of couple·G ≈ 0.10 → stable.)

2. **Competing-hazards mortality** (per-sex, CDC WONDER D76 2019 calibrated):
   `h(age) = E_sex(age)·lifestyle + Σ_c (cause hazards) + residual`, each cause =
   `Rmax_{c,sex}·B_node(c)` × Π(deviation multipliers), the whole intrinsic bracket
   × all-cause multipliers (fitness, BMI J-curve). The former global frailty multiplier is disabled;
   lean mass reaches falls/infection through explicit mediator edges.
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
  > **`[MIGRATING]`** The *invariant* (mult=1 at pop-avg) is **preserved** by the
  > migration's calibration-preserving split — but "baseline" is moving from an
  > **age-pegged curve** to an **emergent population trajectory** (`∫rate·dt` evaluated at
  > pop-avg inputs). "Average exposure already in the CDC baseline" is precisely the
  > age-pegging being removed: in the unified graph the average smoker's burden is
  > *derived* mechanistically, not baked into an age curve. Same discipline (no
  > double-count; calibrate to the empirical anchor), realized mechanistically. See the
  > audit doc.
- **Categorical inputs (smoking) are NORMALIZED** by the population mix so the
  mix averages to 1 (never-smoker comes out PROTECTED, <1).
- **β derivation:** `β = ln(HR)` per unit of the edge's natural variable. E.g.
  LDL→CVD β = ln(1/0.78)/38.7 mg/dL = 0.00643 (CTT); SBP→CVD β = ln(2)/20 mmHg,
  **age-modified** (halves per ~2 decades, Lewington).
- **Personal offset** (lab anchoring) = `measured − emergent_prediction_at_currentAge`
  (residual to current inputs), held forward. Output is **cohort LE from age 20** (the
  survival integral runs from `AGE0=20`), with personalized inputs — it is **NOT**
  conditioned on survival to current age. A current-age intervention's ΔLE is therefore
  survivorship-discounted by ≈`S(currentAge)` relative to a conditional-from-current-age
  framing (corrected 2026-06-13, Codex-flagged; the prior "*conditional* LE from current
  age" label was wrong — engine `LE = AGE0 + ∫survival·dt` from 20).

---

## 4. The node fan-out audit → 3 calibration tiers (the evidence backbone)

Full details in the param file § "Node-audit findings". (The audit covered the original
**18 nodes**; v0.4.1 split the residual into 4 named causes → **22 nodes** today.) Summary:

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

> **`[MIGRATING]`** "Route-once" is imprecise. The real principle (user 2026-06-10) is
> **mediation decomposition: making an effect explicit via a mechanism requires SUBTRACTING
> that slice from the aggregate edge, so the calibrated total is preserved.** If `X→Y` is
> entirely via mechanism `M` → re-route (drop direct `X→Y`, add `X→M→Y`). If partly via `M`
> → split: route the `M`-slice and **reduce** the direct `X→Y` by it (residual = the non-`M`
> pathways). E.g. wiring `HbA1c → arterial-stiffness → SBP → CVD` requires subtracting the
> structural-arterial slice from the direct `HbA1c→CVD` (ERFC) edge, keeping the
> endothelial/microvascular residual. The **Mechanistic-vs-bundled** BMI example *is already
> this template* (BMI→SBP path + BMI→CVD residual = Lu 1.27) — generalise it to every wired
> mechanism. This is **Phase B** in `model/age-hardcoding-audit.md` (the full re-partition,
> done all together, not edge-by-edge).

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

> **`[MIGRATING]`** "exogenous→latent is unwired" IS the node/mediator seam, and wiring it
> is the *central* move of the unified-graph migration (not the "optional" item §8 calls
> it). When wired, a smoker's genomic-instability rises and the burden timeline responds to
> lifestyle — and `smoking → genomic-instability → cancer` becomes the route-once path
> above. See the audit doc § "Target architecture".

---

## 7. Current state (what's built)

- **v0.4.1 residual decomposition** (2026-06-09): split the residual into four named
  CDC causes — **diabetes, COPD, CKD, liver** — now 22 nodes / 8 named causes. Data:
  CDC WONDER **D76, 2019** crude rates by sex × ten-year age (see §8a; the API is
  blocked for the 2022 D158 dataset, so 2019 is a documented proxy pending a 2022
  swap). Decomposition is **LE-invariant** (re-buckets mortality; baseline 75.81/80.89
  unchanged). Residual-proxy edges retargeted to the new nodes (smoking→copd,
  alcohol→liver, PM2.5→copd) + smoking→diabetes/ckd added (literature RRs). Liver is
  **non-monotonic** (peaks midlife → no Gompertz tail; its own declining >90 anchors).
  81/81 tests. **Known gaps → §8b.**
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
- 86/86 tests; leak-gate clean.

---

## 8. Roadmap / deferred (next session)

- **Pathway-verification sweep (2026-06-10)** — engine-swept every input/treatment/node-freeze
  pathway: all behave with sensible direction + magnitude (+ 21 Playwright UI checks). Two
  findings: (1) **`sleep` — DONE 2026-06-10**: wired `sleep→allcause` via a new reusable `uShape` form
  (nadir 7 h; both short and long sleep raise all-cause mortality, Cappuccio 2010) and exposed
  as a panel slider. Baseline preserved (popMean 7 = nadir). The `uShape` form is now available
  for the planned IGF-1 U-shape. (2) **`sodium→SBP` convex form is UNBOUNDED** out-of-range (−55 yr
  at 33× the slider max); slider-clamped `[40,300]` so not user-reachable, but add a cap (cf. the
  SBP benefit-floor) for robustness. Other gaps to evaluate: **IGF-1/nutrient-sensing U-shape**
  (currently monotonic — known-wrong; see below), **alcohol J-curve** (monotonic-above-threshold;
  deferred MR bundle), **`restingHR→mortality` direct** + **`physicalActivity→restingHR`** (B5).
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
  hsCRP as a live mediator); **decompose the residual into named CDC causes — full
  roadmap in §8a below** (the agreed direction: shrink the age-keyed residual by
  converting ignorance into grounded named-cause nodes, NOT by adding a generic
  "unknown" sink with unidentifiable upstream edges).
- **§ frailty — the sarcopenia/frailty restructure (2026-06-11).** The old non-specific
  vulnerability multiplier was driven by ONE node `id:"sarcopenia"` / `label:"Sarcopenia / frailty"`
  (an **age sigmoid**, `mid:72`) feeding a per-cause `betaByCause` (Peng 2022 frail-vs-robust HRs).
  It mis-attributed multi-system frailty mortality to muscle — a sarcopenia intervention implausibly
  cut liver/CKD/cancer death (the *entire* 4.137-yr sarcopenia ΔLE was this multiplier; sarcopenia
  has no other modeled mortality path). And because it was **deviation-form** (`exp(β·(B−T))`, =1 at
  baseline) it explained *no baseline mortality* — purely an intervention-response term, not a real
  reserve state — so renaming it `physiologic-reserve` would have been wrong.
  **DONE (steps 1–3):**
  - **Step 2 — disconnected.** The 10 `kind:"frailty"` edges removed from `MODEL.edges` ⇒ `betaByCause={}`
    ⇒ `frDefault=0` ⇒ multiplier ≡1. Baseline LE **bit-for-bit unchanged** (77.458855 / 82.117850);
    sarcopenia ΔLE 4.137→0; the upstream interventions that propagated through `stem-cell-exhaustion→
    sarcopenia` re-baselined DOWN (chronic-inflammation 4.52→3.97, cellular-senescence 0.78→0.71,
    genomic-instability eff1.0 1.98→1.89). Sarcopenia node relabeled "Sarcopenia (muscle)", `role:intermediate`.
  - **Step 1 — bucket renamed.** The mis-named `frailty` cause → **`falls`** (node `falls-mortality`,
    "Falls (external injury)"). Exact-invariant (same Rmax/curve). CAUSE_KEYS updated (engine + validator).
  - **Step 3 — Peng betas parked** in `mortality.frailty.betaByCause_DISABLED_gap` (non-functional; engine
    reads the now-removed edges) as `#gap/needs-independent-modeling` — NOT transplanted onto a latent.
  **ALSO DONE:** **sarcopenia→falls POPULATED** (graph-node-seeder, Yeung 2019 PMID 30993881 prospective
  OR 1.89 → β=ln(1.89)=0.6366, live `frailty` edge, falls-only; sarcopenia ΔLE 0→~0.035 yr). **Malnutrition
  split DONE** (graph-node-seeder Op A: CDC WONDER D76 2019 W00-W19 + E40-E46 per-sex×age; falls-only Rmax
  0.003112/0.002569; E40-E46 → dense residual; falls+malnutrition Rmax = old combined exactly; baseline LE
  drift ~1e-7 from ~9-sig-fig residual write, #gap to regen at full precision). Both **validated by
  graph-node-validator** (independent CDC re-pull: all 4 rates exact to 0.1/100k; 16/16 burden anchors;
  β/PMID confirmed). **EDGE-KIND UNIFIED (2026-06-12):** sarcopenia→falls converted `frailty`→`cause`
  (new engine form `nodeLogLinear` = exp(β·(node B−T)), handled in `edgeMultFor`) — it's a regular
  node-source driver→cause edge (cf. LDL→cardiovascular), NOT a special "frailty amplifier"; sarcopenia is
  now `role:driver` (structural twin of clonal-hematopoiesis). Exact-invariant (ΔLE 0.0346 unchanged). The
  **`frailty` KIND is retired/dormant** (0 live edges) — reserved for the future non-specific reserve node
  (one source × MANY causes). Viz: gave sarcopenia + clonal-hematopoiesis a full **"driver phenotype"**
  identity (they were `NODE_INFO kind:"cause"` → "Cause-of-death node", AND reused the deep-purple
  pathology color with no legend entry — so they read as cause nodes). Now: harmonized label "driver
  phenotype" across both systems (`KIND_LABEL["intermediate"]` + `KIND_INFO_LABEL["driver"]`), a distinct
  lighter-purple color (#af7ac5 vs pathology #7d3c98), and their own legend swatch + tooltip. Also
  relabeled the dormant `frailty` edge legend "frailty amplifies cause" → "reserve → all causes (reserved)".
  **DEFERRED (with #gaps on the `falls` node):** (b) **external-injury merge** — fold falls under a restructured `external-injury` terminal cause
  with a separately (non-lifestyle) scaled fall sub-component, replacing the current special
  `extrinsic = interp·lifestyle` expression; (c) **physiologic-reserve state** — a real reserve node
  (own observable trajectory + baseline calibration + evidence interventions move it) that integrates
  multiple drivers (sarcopenia as one `rate.term`, + cognition/inflammation/…) and drives a *named,
  shrinking* non-specific case-fatality residual — only built once it clears that bar, and needs the
  engine to **sum multiple named frailty sources** (today's `betaByCause` keys by target = single-source,
  enforced by `validate-graph.mjs`). Don't fully decompose into specific edges — the genuinely
  cause-agnostic "diminished reserve" slice would otherwise fall into the age-keyed residual.
  **STEP 5 (in progress):** explicit fall drivers. **Stubbed (both endpoints exist):** `sarcopenia→falls`
  (`kind:"stub"`, `intendedKind:"frailty"`, inert, grey-dashed) — the SINGLE, narrow, justified replacement
  for the removed generic multiplier (multiplies ONLY falls, not every cause); populate β from
  sarcopenia→fall/fracture-mortality literature (Yeung 2019; a graph-node-seeder Op). **Node-addition
  candidates (NOT stubbable — driver node absent from the sim; need Op-B/C node adds, then edges):**
  balance/vestibular, vision impairment, peripheral neuropathy, orthostatic hypotension, sedating
  medications, environmental hazard → falls; osteoporosis → fracture *case-fatality* (the
  fall-risk × injury-susceptibility × case-fatality decomposition). These stay as candidates for
  adjudication, consistent with the edge-auditor § 0b rule (don't stub an edge to an unrepresented node).
- **Personal-offset polish** — percentile-held (not just additive) + multi-draw
  trajectory fitting + mild regression-to-mean.
- **Wiki-maintenance leads** surfaced by the audit (seed a cancer-PAF layer; create
  `rdw-biomarker.md`; add TMRC 2017 / Salosensaari 2021 / Lancet Commission 2024
  citations; cite Blokzijl 2016 directly).
- **Publishing** — wire into Quartz (currently a local double-click artifact).

### 8a. Residual decomposition — CDC-backed causes

> **CURRENT STATUS:** all mortality bands, residual, and extrinsic mortality are
> harmonized to CDC WONDER D76 **2019** as the deliberate pre-COVID baseline.
> Diabetes, COPD, CKD, liver, and falls are named causes; cardiovascular includes
> the reviewed vascular remainder. Older `SWAP-TO-2022` notes below are historical.

The current residual = `2019 all-cause_sex(age) − Σ(named causes) − extrinsic`.
It is the only intentionally age-keyed mortality term
left after v0.4 — the honest "we haven't modeled this mechanism" bucket. The agreed
plan is to **shrink it by splitting out named, CDC-backed causes** one at a time,
each becoming a graph node that flows through the v0.4 odds link automatically. We
intend to implement **all** of the Tier-A/B causes below; this table is the
enumeration so each is turnkey.

**Already modeled (for reference — what the residual EXCLUDES):** cardiovascular
`I00-09,I11,I13,I20-51 + I60-69`; cancer `C00-C97`; neurodegeneration/dementia
`G30,F01,F03,G31`; infection `J09-18 + A40-41`; extrinsic `accidents−falls +
suicide + homicide`.

**Per-cause implementation recipe (same for every row):** (1) pull the cause's
CDC WONDER D76 2019 per-sex age curve (the `cdc:` code string is the WONDER query);
(2) `Rmax_{c,sex}` = the curve's 85+/age-90 anchor rate; (3) burden table =
reserve transform `B' = h/(1+h)` of `h = CDC_rate/Rmax` at each anchor, then the
shared >90 reserve anchors `[90,0.5] [100,0.7039] [110,0.8497] [120,0.9307]
[130,0.9696]`; (4) **recompute residual** = all-cause − ALL named causes − extrinsic
so the baseline total stays = empirical all-cause (no double-count, LE invariant);
(5) wire upstream edges using EXISTING mediators with literature-anchored effect
sizes (never free-fit — same discipline as the `fit` harness bullet).

| Cause | ICD-10 (confirm vs WONDER GR113) | New/extend node | Upstream edges (existing mediators) | Double-count / notes |
|---|---|---|---|---|
| **Diabetes mellitus** | `E10–E14` | new `diabetes` | HbA1c (dominant), BMI, activity/fitness | CDC codes direct-diabetes deaths only (diabetic CVD already codes to CVD), so endpoint-clean. The NEW HbA1c→diabetes edge is a *different endpoint* from the existing HbA1c→CVD/cancer/dementia mediator edges — not a double-count, but anchor it to direct-diabetes-mortality RR, not all-cause. |
| **Chronic lower respiratory (COPD)** | `J40–J47` | new `copd` | smoking (dominant; the smoking-status mediator note already anticipates "smoking→COPD"), PM2.5, chronic-inflammation | Clean. Current-smoker RR is large (~12–25×); use the categorical smoking mediator already built for smoking→cancer/CVD. |
| **Chronic kidney disease** | `N00–N07, N17–N19, N25–N27` | new `ckd` | SBP (dominant), HbA1c (diabetic nephropathy) | Endpoint-clean (nephritis/nephrosis coded separately from diabetes & CVD). Shares SBP/HbA1c drivers with CVD/diabetes — fine, different endpoint. |
| **Chronic liver disease & cirrhosis** | `K70, K73–K74` (optionally +`K75.81`,`K76.0` — see note) | new `liver` | **alcohol** (K70, dominant *labeled* share) **+ metabolic: BMI + HbA1c** (MASLD/MASH→cirrhosis, lands in K74) | **Two etiologies, not alcohol-only** — see liver note below. **Already partially modeled**: an `alcohol→liver(residual)` hinge edge exists; splitting `liver` out lets that edge target a proper node and removes it from residual cleanly — but it MUST gain metabolic (BMI/HbA1c) edges too, or it mis-attributes the growing under-coded MASLD share. |
| **Parkinson disease** | `G20–G21` | **extend** `neurodegeneration` | (shares proteostasis/neuro drivers) | Prefer extending the neuro node's `cdc:` code set + Rmax over a new node — same upstream biology. Reclaims a slice of residual into neuro. |
| **Hypertensive disease (remainder)** | `I10, I12, I15` (parts not in CVD's I11/I13) | **fold into** `cardiovascular` | SBP already drives CVD | Small; extend CVD code set rather than a new node. |
| **Aortic aneurysm / other arterial** | `I71` (+ parts of `I70`) | **fold into** `cardiovascular` | shared atherosclerosis driver | Small; extend CVD. |

**Liver note — etiology split & coding caveat.** The GR113 "Chronic liver disease
and cirrhosis" group (`K70, K73, K74`) is NOT alcohol-only: `K70` is alcohol-specific,
but `K73` (chronic hepatitis NEC) and especially `K74` (fibrosis & cirrhosis,
etiology-agnostic) capture non-alcoholic cirrhosis — end-stage **MASLD/MASH**
(formerly NAFLD/NASH) usually lands in `K74` as "cryptogenic"/unspecified cirrhosis
because the certificate records the end-stage, not the upstream steatohepatitis. So
the `liver` node needs BOTH an **alcohol** edge (K70, dominant labeled share — alcohol-
associated deaths rose sharply post-2020) and **metabolic edges (BMI + HbA1c)** for the
MASLD path; alcohol-only would mis-attribute the fast-growing under-coded metabolic
share. Caveats: (a) the MASLD-*specific* codes `K75.81` (MASH) and `K76.0` (fatty liver
NEC) are NOT in the GR113 group — they currently sit in our residual; decision point is
keep GR113-standard (model MASLD via K74, accept undercount) vs expand the node to
`+K75.81,K76.0` and pull them from residual. (b) Death-certificate liver coding is known
to UNDERCOUNT MASLD (cryptogenic cirrhosis, or attributed to diabetes/obesity
comorbidity), so the CDC curve under-represents true metabolic-liver mortality — note it
in the node's provenance. (c) Watch double-count with `diabetes`/BMI J-curve: the
BMI→liver and HbA1c→liver edges are a *distinct endpoint* from BMI/HbA1c→CVD/diabetes,
so not a double-count, but anchor them to liver-specific RRs.

**Stays in residual (the irreducible / non-mechanistic remainder — keep age-keyed):**
COVID-19 `U07.1` is absent from the chosen pre-COVID 2019 calibration; elderly falls
`W00–W19` are now a named cause driven by lean mass. Ill-defined `R00–R99`,
iatrogenic, nutritional, and the long tail of small causes. This is the honest
"unmodeled mechanism" bucket — it SHOULD remain age-keyed rather than be given
invented upstream edges (see §6 FIXED-MISTAKES discussion and the "unknown node"
decision).

> **`[MIGRATING]`** Refined by the **residual discipline** (audit doc): the goal is to
> drive the residual toward **zero** by modeling every known rate×time mechanism, and to
> reframe the irreducible remainder as an explicit, labeled unattributed **fraction**, not
> an **age curve**. "Keep age-keyed" was defensible only while there was no better
> representation; an unneeded age-keyed residual re-introduces the very age-pegging the
> migration removes. The instinct here — *don't invent upstream edges for things you can't
> mechanistically justify* — is still correct and is exactly the residual discipline's
> "named `#gap/no-mechanism` only" rule.

**Suggested implementation order** (largest + best-anchored first): diabetes →
COPD → CKD → liver → (extend neuro for Parkinson) → (fold hypertensive/aneurysm
into CVD). Each is one node + reserve table + recomputed residual + 1–3 anchored
edges; the v0.4 odds-link + reserve machinery needs no change. After each, re-run
`build-params → build-app → test` and re-baseline the freeze-ΔLE targets (the LE
*invariant* must hold: recomputing residual keeps baseline total = empirical
all-cause, so the current 77.459 M / 82.118 F anchor should not move).

### 8b. Follow-ups opened by the v0.4.1 decomposition

1. **Mortality-year decision (resolved).** The model deliberately retains CDC WONDER
   **D76 2019** as a consistent pre-COVID baseline. Every named cause, residual, and
   extrinsic channel was harmonized to that year on 2026-06-11; the former plan to
   mix or swap selected bands to 2022 is superseded.

2. **Smoking realism (IMPORTANT).** v0.4.1 dropped current-smoker ΔLE from ~-8 (v0.4)
   to **~-3.7** — and the -8 was an *artifact* (COPD's smoking RR 6× applied to the
   ENTIRE old-age residual). The honest cause-specific routing (smoking → CVD + cancer
   + COPD + diabetes + CKD) is **conservative vs literature** (Jha 2013: current
   smokers lose ~10 yr), for two reasons: (a) the `smokingCategorical` **normalization**
   caps the effect — raising a cause's current-RR also raises the mix-weighted divisor,
   so the effective multiplier barely moves; (b) the model doesn't route smoking to
   *every* smoking-attributable cause. **Fix (needs a small architecture call):** add a
   whole-bracket **`smoking→allcause`** edge (à la the existing `physicalActivity→allcause`),
   pinned to the Jha/CPS-II current-smoker all-cause HR (~2.5–3) — but then DROP or
   shrink the cause-specific smoking edges to avoid double-counting (all-cause already
   includes CVD/cancer/COPD). Decide: all-cause-only vs cause-specific + small all-cause
   remainder. The B3a/B2 smoking tests are currently re-baselined to the conservative
   -3.7 with a floor + direction; tighten them when this lands.

3. **Per-cause frailty betas.** The four new causes use the **residual's** frailty β
   (0.8755) to keep the split LE-invariant in all scenarios. Peng 2022 has
   cause-specific frail-vs-robust HRs (respiratory ~4.9 → COPD; etc.) — applying them
   would intentionally break LE-invariance (a modeling improvement) and needs a
   freeze-ΔLE re-baseline.

4. **Tier-B causes.** Parkinson (G20–G21) → extend the neuro node's code set + Rmax;
   hypertensive (I10/I12/I15) + aneurysm (I71) → fold into CVD. Both shrink the
   residual further; same recipe.

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
node model/test.mjs             # 129 regression tests (must be green)
node model/cli.mjs le --sex male    # → ~75.82
node model/build-app.mjs        # inline engine into the html
# open viz/aging-simulator.html by double-click (file://, no server needed)
```

**Headless render check** (catches "blank panel" crashes the tests don't): load
the app's `<script>` in node with a Proxy-based stub `document`/`window`
(`createElementNS`, `createTextNode`, `getComputedStyle`, `getElementById`) and
confirm init completes with no throw. (This is how the BMI/MED_SCALE crash was
found — see commit history.)

**Real-browser E2E** (`model/e2e-playwright.mjs`) — stronger than the Proxy stub: drives
the rendered app in Chromium (21 checks). Verified 2026-06-10 (23/23): no console/page
errors; baseline 75.8 M / 80.9 F; all 4 SVG panels render; sex toggle; BMI lab anchor moves
LE; **anchor→slider disable** (calorieBalance grays when BMI anchored); **resting-HR field
now moves LE via the B3/A4 stiffness path** (low/fit→+LE, high→−LE); calorieBalance infodot
tooltip; **senolytic intervention via the UI → +0.70 LE**. NOTE: the Labs/Lifestyle controls
sit behind the `#modTabSeg [data-tab="blayer"]` toggle (hidden by default) — activate it
before driving lab inputs. Run per the file's header (needs `playwright` resolvable +
`CHROME_PATH`).

**The guard for any change:** baseline must stay ≈ 77.46 M / 82.12 F (2019-harmonized; see 2026-06-11 note) and
`test.mjs` must pass. If LE shifts, re-baseline the targets *and* the self-checks
*and* this doc.
