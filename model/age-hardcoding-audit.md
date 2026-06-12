# Age-hardcoding audit — aging-simulator model

**Date:** 2026-06-10 · **Scope:** `model/engine.mjs`, `model/params.json`, `frameworks/causal-graph-parameters.md`

## The principle this audits against

> **Age must never be hard-coded to a result.** Node burdens should accumulate as
> **rates integrated over time**, where the rate is driven by that node's causal
> **inputs**. Chronological age is used **only to verify** that the integrated rates
> reproduce the known empirical baseline (the calibration check) — it is an *output*
> of the dynamics, never an *input* to them.
>
> **Allowed escape hatch:** an **explicit, labeled "unknown age-residual"** term may
> absorb the fraction of a node's trajectory we cannot yet mechanistically attribute
> (because we don't know all inputs at every node). This is a declared known-unknown,
> not a hidden age-peg. ECM crosslinking is the canonical example of why age-pegging is
> wrong: crosslink burden = ∫ k([glucose], …) dt — it compounds with glycemia **and**
> time naturally, so a diabetic reaches high burden younger. The age-correlation is
> emergent, not prescribed.
>
> **Corollary — "with age" *attenuations* are age-pegs too, and demand the same question.**
> When an effect's *magnitude* (not just a baseline) changes "with age", ask **what
> time-dependent biological variable is hidden behind "age"** — the accumulating damage or
> declining reserve — and gate the coefficient on **that**, never on chronological age (a hard
> age-modulated coefficient is a Tier-C violation; see C1). Before adding ANY age-dependence,
> distinguish **BLOCKING** (the effect's own mechanism/substrate is degraded ⇒ a *state-gated
> coefficient* `coeff·f(reserve)`) from **COUNTERING** (a separate opposing process ⇒ a
> *distinct additive driver*, coefficient unchanged) — they imply different model structures
> and different intervention predictions, and the age-correlation alone cannot tell them apart.
> Worked example: training→restingHR bradycardia is blunted in older adults, but that is
> intrinsic SA-node-substrate loss (blocking → a reserve state), so the edge keeps a **flat**
> coeff, NOT an age-attenuation.

By this standard the current model is **age-pegged at the backbone**: the causal graph
(coupling, interventions, mediator edges) only ever computes **deviations** from
hard-coded age curves. At baseline inputs, `B = T(age)` for every node and
`mediator = baseline(age)` for every mediator — i.e. the entire default trajectory is a
function of chronological age, not of integrated causal rates.

---

## Inventory — every age-hardcoded location

Classified by severity against the principle above.

### Tier A — value pegged directly to age (no rate model at all)

Pure `[[age, value]]` interpolation tables. These are the most direct violations: a
result is read straight off an age chart.

| # | Location (`params.json`) | What it pegs | Engine site |
|---|---|---|---|
| A1–A8 | `nodes[12..19].curve.byAge` (+ `.female.byAge`) — **atherosclerosis, cancer, neurodegeneration, immunosenescence, diabetes, copd, ckd, liver** | Intrinsic burden T of all **8 disease/phenotype nodes** (these ARE the cause hazards: `hazard = Rmax·B/(1−B)`) | `curveT()` `form:"table"` → `engine.mjs:64-65`; precomputed `Tarr` `engine.mjs:130` |
| A9–A12 | `bLayer.mediators[0..3].baseline.{male,female}` — **LDL, systolicBP, BMI, HbA1c** | Mediator baseline curves (causal edges add deviations *on top*, but the backbone is age) | `mediators()` `engine.mjs:641-642` |
| A13 | `mortality.residual.byAgePerYear.{male,female}` | Residual (explicitly-unmodeled causes) hazard — **and** its old-age escalation is "baked into its own age table" | `engine.mjs:168,244` |
| A14 | `mortality.extrinsic.byAge.{male,female}` | Extrinsic hazard (accidents/suicide/homicide) | `engine.mjs:169,240` |

**Count:** 28 individual tables (8 nodes×2 sex + 4 mediators×2 + residual×2 + extrinsic×2).

> **Note on residual (A13):** this is the *closest thing the model has* to the allowed
> "unknown age-residual" escape hatch — it's explicitly the unmodeled remainder. But it
> is currently a hard age table, not a declared-unknown rate term, and it carries its own
> age-keyed old-age escalation. It should be reframed as the explicit residual the
> principle permits, ideally as a fraction rather than an age curve.

### Tier B — rate-based in form, but age-autonomous (rate hard-coded, not input-driven)

The 14 hallmark/phenotype nodes without a `table` use a parametric `curve.form`
(`linear`, `exponential`, `sigmoid`, `ushaped`) evaluated at `x = age − AGE0`. These are
**halfway** to the target: they ARE accumulation curves (e.g. `linear` ⇒ constant
`dT/dt = slope`), but the rate is a **hard-coded constant pegged to age**, not modulated
by the node's upstream causal inputs. At baseline, these hallmarks accumulate by
**chronological age alone**, independent of the causal graph.

| # | Nodes (`params.json` `nodes[i].curve.form`) | Form |
|---|---|---|
| B1 | genomic-instability, telomere-attrition, epigenetic-alterations, dysbiosis | `linear` |
| B2 | mitochondrial-dysfunction, cellular-senescence, loss-of-proteostasis, clonal-hematopoiesis | `exponential` |
| B3 | deregulated-nutrient-sensing, disabled-macroautophagy, chronic-inflammation, altered-intercellular-communication, stem-cell-exhaustion, sarcopenia | `sigmoid` |

**Count:** 14 nodes (each with per-sex params). Engine: `curveT()` parametric branch
`engine.mjs:68-77`.

> Per the principle, each of these rates should be **driven by upstream inputs** (e.g.
> genomic-instability accumulation should depend on DNA-damage exposure vs. repair
> capacity; senescence on its inducers), with age only verifying the integral. Today the
> rate is autonomous in age.

### Tier C — age-modulated coefficients

| # | Location | What it does | Engine site |
|---|---|---|---|
| C1 | `bLayer.causeEdges[systolicBP→cardiovascular].betaAgeMod` (`refAge:50, halfPer:20`) | Lewington SBP→CVD log-slope **halves per ~20 yr** — i.e. the *effect size* of an SBP deviation is hard-coded to attenuate with chronological age | `engine.mjs:435-437` |

This is the mildest: it's an age-modulation of a *rate*, grounded in the epidemiology
(relative risk genuinely attenuates with age). But it's still a hard age dependence on a
coefficient rather than an emergent property.

---

## Structural consequence

`B[i][k] = clamp01( T(node, age) + D[i] )` and
`mediator = baseline(age) + Σ edges + offset`.

The causal graph (`couple·G·D`, interventions, mediator edges) only ever supplies the
**deviation `D`** / the edge terms — it perturbs an age-pegged backbone. So:

- **Interventions** bend the curve *relative to* the age baseline; they cannot change the
  fact that the baseline itself is age-driven.
- The **old-age mortality escalation** (v0.4 "burden-driven, not age-keyed") is only
  age-decoupled in its *functional form* (the odds link `Rmax·B/(1−B)`); the `B` it
  consumes still comes from the Tier-A/B age curves, so the escalation is age-pegged one
  level down.

---

## Remediation path (not done here — documentation only)

To honor the principle, each Tier-A/B node would migrate to:

```
dBurden/dt(node) = rate( upstream causal inputs at t )   // integrated over time
B(node, t)       = B0 + ∫ rate dt  + unknownAgeResidual(node)   // explicit residual
verify:  B(node, age)  ≈  empirical age curve   (calibration target, not an input)
```

- **SBP** (the trigger for this audit): migrate the `systolicBP.baseline` age table → an
  emergent value driven by an **arterial-stiffening / ECM-crosslink** subgraph
  (crosslink burden = ∫ f([glucose]) dt) + sodium/adiposity inputs, with age only
  verifying the population SBP curve. The ECM-crosslink/glucosepane node is a **known
  missing node** in the causal graph.
- **Disease nodes (A1–A8):** emerge from their hallmark inputs rather than CDC age tables.
- **Residual (A13):** reframe as the explicit, labeled unknown-age-residual the principle
  permits — ideally an unattributed *fraction*, not an age curve.

Until then, these 28 tables + 14 parametric nodes + 1 age-modulated coefficient are the
**complete set of age-hardcoded inputs** in the model, recorded here so the migration can
be tracked.

---

## Migration status

| Date | Increment | Status |
|---|---|---|
| 2026-06-10 | **Rate-integration substrate** — `stocks` integrate `S(age_{k+1}) = S(age_k) + rate_k·DT` over the age grid in `mediators()` (`engine.mjs`); driver value includes inputs/offsets so accumulation is input-driven, not age-driven | ✅ done (engine/tests) |
| 2026-06-10 | **`ecm-crosslink` stock** (first migrated node) — crosslink = ∫ ratePerUnit·HbA1c dt; calibrated to ~1.0 (norm) at age 80 at pop glycemia; diabetic accumulates ~1.5× faster; 5 regression tests; baseline LE provably invariant (not yet wired downstream) | ✅ done (engine/tests) |
| 2026-06-10 | **A1 — uniform state-node schema (1st increment)** — generalised `stocks` → `stateNodes` `{class, units, rate:{terms:[linear\|product], drivers=mediator-or-statenode}}`, topo-ordered (cycle-safe); migrated `ecm-crosslink` onto it (trajectory identical); `product` op validated for A2; ported to HTML. Still to add under A1: algebraic (non-integrated) `physiology` nodes + terminal-hazard (`pathology`) mappings | 🟦 in progress (engine/tests/HTML) |
| 2026-06-10 | **A2 — `elastin-fatigue`** state node = `∫(restingHR × max(0,SBP−75))·dt` (cumulative pulsatile fatigue; `product` term + driver-offset for PP≈SBP−75). Added `restingHR` mediator (flat 65/68 baseline, lab-anchorable, registered in MED_SCALE/COLOR); calibrated to ~1.0 @80; emergent (low HR → slower, high SBP → faster fatigue); 6 tests; unwired ⇒ baseline invariant; ported to HTML (headless-clean). Deferred: restingHR→mortality edge + physicalActivity→restingHR fitness edge | ✅ done (engine/tests/HTML) |
| 2026-06-10 | **A3 — `arterial-stiffness`** algebraic `physiology` node = `0.65·elastin-fatigue + 0.36·ecm-crosslink` (the first non-integrated `value` node; weights elastin-dominant; normalized ~1.0 @80). Emergent (diabetic→stiffer via crosslink; hypertensive→stiffer via elastin); 6 tests incl. an exact-formula check; unwired ⇒ baseline invariant; HTML headless-clean. **senescence term deferred (option A)** — see Deferred list | ✅ done (engine/tests/HTML) |
| 2026-06-10 | **A4 → folded into Phase B.** Wiring `stiffness → SBP → CVD` re-routes effects already in the calibrated direct edges (`HbA1c→CVD`, `SBP→CVD`) ⇒ double-count. It is a **mediation re-partition**, not a standalone step — moved to B3 (the direct-CVD slice) + A4 (the SBP slice). βstiff 37.6 M / 52.1 F recorded. | 🔁 split B3/A4 |
| 2026-06-10 | **B0 — node-burden access** — `simulate()` passes node burdens into `mediators()`; `cellular-senescence → arterial-stiffness` wired (weights 0.50/0.30/0.80). First node→state-node edge: a senescence freeze drops stiffness 0.996→0.820. 99/99; baseline invariant. | ✅ done |
| 2026-06-10 | **B3 — `arterial-stiffness → cardiovascular` (consolidated, decomposed)** — stiffness bends CV mortality (Mitchell 2010 cfPWV, β 0.6 illustrative, deviation-form ⇒ baseline exact). **Maps to reality: senolytic +0.49 yr** (plaque AND stiffness, was +0.28); glycemic control + resting-HR/fitness also bend CV via stiffness. Decomposed `HbA1c→CVD` (slope 1.052→0.866; glycemic-stiffness slice routed to stiffness). Senescence's stiffness path is DISTINCT from its inflammation→plaque coupling (no decomposition). **SBP decoupled from elastin** (its slice double-counted the Lewington hub shared by BMI/Lu+sodium) → elastin HR-driven; SBP↔stiffness + pressure-amplitude moved to A4. 101/101; HTML headless-clean. | ✅ done (engine/tests/HTML) |
| 2026-06-10 | **A4 — `stiffness → SBP` (BP-mediated CVD slice)** — `simulate()` augments live SBP by `βstiff·(non-glycemic stiffness deviation)` (βstiff 37.6 M / 52.1 F; crosslink EXCLUDED so glycemia isn't re-double-counted; deviation-form ⇒ baseline + Lewington/Lu/sodium exact). Complements B3's BP-independent edge ⇒ B3+A4 = total stiffness CVD, split into the two Mitchell-separable slices. **Senolytic now +0.65 yr** (plaque + BP-indep + BP-mediated). diabetic SBP unchanged (no glycemic-SBP double-count); high-HR raises SBP via stiffness. No feedback/march needed (B3 left elastin HR-driven). 105/105; HTML headless-clean. **Deferred:** full de-age-pegging (form-B: replace the SBP baseline with a flat residual — needs re-referencing the SBP→CVD deviation) + the reverse SBP→elastin pressure-amplitude coupling. | ✅ done (BP-mediated slice) |
| 2026-06-10 | **β-cell vertical Increment 1 — per-age march** — restructured the `mediators()` state-node phase from a per-node loop into an n-body forward-Euler march (advance ALL state nodes one age-step at a time). Adds the `b.stateAugments` hook (`{fromState, mediator, coeff}`, sex-aware) to inject an accumulated state back INTO a mediator mid-march — the substrate for state→mediator feedback. With no augments it is **bit-identical** to the old loop (110/110, LE unchanged). | ✅ done (engine/tests/HTML) |
| 2026-06-10 | **β-cell vertical Increment 2 — emergent HbA1c (de-age-pegged) ⭐** — replaced the `HbA1c` mediator age-table (5.3→5.9, clamped flat past 85) with a **flat 5.3 baseline + stateAugment** (`HbA1c += coeff·β-cell-decline`, coeff 0.6 M / 0.5 F). New `beta-cell-decline` integrated state node (intrinsic attrition constant 1/60·yr → ∫≈1.0 @80). **HbA1c now keeps RISING past 85** (5.9→6.4 M / 5.8→6.2 F @130) and an intervention can bend the age-RISE itself — the behavioral payoff. Deviation-form edges ⇒ baseline LE EXACT (75.815/80.862); crosslink@80 unchanged 0.984. First Tier-A mediator off its `byAge` table. 118/118. | ✅ done (engine/tests/HTML) |
| 2026-06-10 | **β-cell vertical Increment 3 — glucotoxicity diabetes spiral** — activated the `β-cell-decline` glucotox feedback term (coeff 0.012, `HbA1c−6.5` driver capped at 3): β-cell-decline ↑ → HbA1c ↑ → glucotox ↑ → β-cell-decline ↑, resolved per-age across the march. A diabetic (anchored ~8 @50) progresses 8.3→9.1→10.0 (50→80→110), feeding crosslink→stiffness→CVD + direct HbA1c edges (LE −0.031 atop the elevation hit). Driver cap bounds it (linear past 9.5; clinical ceiling). Population HbA1c < 6.5 ⇒ glucotox EXACTLY 0 in pop ⇒ **baseline LE preserved exactly**. Added `cap` (ceiling) to rate-term drivers. Lipotox (BMI→β-cell) term left coeff 0 (deferred). 124/124 + 23/23 Playwright browser. **Anchor caveat:** anchored HbA1c is a lifelong offset ⇒ glucotox accrues retroactively (anchored 8 reads ~8.3); documented, not iterated-away. | ✅ done (engine/tests/HTML/browser) |

### Deferred — MUST REVISIT (tracked so they aren't lost)

| From | Item | Why deferred / trigger to do it |
|---|---|---|
| A3 (user 2026-06-10, "go back and do it") | ~~**`cellular-senescence → arterial-stiffness`** term~~ | ✅ **DONE in B0 (2026-06-10)** — weights rebalanced (0.50/0.30/0.80, ~20% senescence per Clayton 2023); senescence freeze drops stiffness 0.996→0.820. |
| A2 | **`restingHR → mortality`** edge | resting HR is an independent CV/all-cause risk factor; currently restingHR only drives elastin-fatigue. Add a normalized cause-edge (=1 at 65 bpm). |
| A2 | ~~**`physicalActivity → restingHR`** fitness edge~~ | ✅ **DONE 2026-06-12** — stubbed by `edge-auditor`, populated live by `graph-node-seeder` (mediator, `exerciseScaled`, coeff −5.4; Chen 2024 / Reimers 2018 via verified [[biomarkers/resting-heart-rate-biomarker]]); baseline LE invariant; 148/148. |
| edge-audit 2026-06-12 (restingHR inbound) | **STUBBED grey (β-pending)** — `BMI → restingHR`, `sleep → restingHR`, `alcohol → restingHR`, and the `sinoatrial-node-reserve` node + its `→ restingHR` edge | Now VISIBLE on the graph as grey-dashed stubs (not held in text — the visible-gap intent). **POPULATE-blocked:** each needs a verified primary-source dose-response in the wiki before `graph-node-seeder` can derive a coefficient. **TRIGGER:** dispatch `wiki-seeder` to add the verified source (BMI→RHR cross-sectional/MR; sleep-deprivation→RHR Δbpm/hr; chronic alcohol→RHR) → then `graph-node-seeder` populates the matching stub. The `sinoatrial-node-reserve` stub additionally needs its rate law + the coefficient-gating mechanism designed (it gates the `physicalActivity→restingHR` coeff — blocking). |
| B3 → A4 (2026-06-10) | **Reinstate SBP→elastin (pressure-amplitude) + the SBP↔stiffness feedback** — A4 wired the FORWARD `stiffness→SBP` (BP-mediated CVD) cleanly, but the REVERSE `SBP→elastin` (high BP → faster fatigue) is still deferred: it would re-create the B3-direct double-count for SBP-driven stiffness (the SBP-driven stiffness would fire the Mitchell BP-independent edge). Needs decomposing the stiffness→CVD edge into its SBP-driven vs non-SBP-driven parts, OR moving the whole SBP↔stiffness loop into a unified per-timestep solve. | future (n-body unification) |
| A4 (2026-06-10) | **Full de-age-pegging of SBP (form-B)** — A4 made SBP intervention-responsive to stiffness (form-A: old age-baseline + a deviation term). form-B replaces the `systolicBP` age table with a **flat residual** + an **absolute** `βstiff·stiffness` term applied to BOTH `medValues` and `medBaseline`. **This does NOT break `SBP→CVD`** (corrected: medBaseline tracks the new form, so the deviation is still 0 at pop; OUTPUTS are identical to form-A — it's a *representational* change that honors no-age-pegging). **BUT it only relocates the age-peg downward**: `SBP ← stiffness ← crosslink ← HbA1c`, and HbA1c is still an age table — so form-B just moves the age-pegging to HbA1c. True de-age-pegging is a CHAIN (migrate down to explicit residuals). | Phase C (C1) |
| B3 (2026-06-10) | **Illustrative decomposition magnitudes are `#gap`** | the stiffness→CVD β (0.6 vs Mitchell 0.71) and the `HbA1c→CVD` structural-slice fraction (~14%) are illustrative — the true structural fraction of glycemic CVD is uncharacterized. Refine when better mediation data exists. |
| — | **SBP residual-split** — replace `systolicBP.baseline(age)` rise with `βstiff·(stiffness − stiffness_pop) + sbpAgeResidual(age)`, where the residual = the old age curve minus the mechanistic part at pop inputs (calibration-preserving; the residual IS the allowed explicit unknown-age-residual) | ⏳ next (= A4) |
| — | **Port to `viz/aging-simulator.html`** — the engine (Node, tested) now carries `stocks`; the HTML inline copy does not yet. Port together with the SBP wiring so the UI reflects the mechanism | ⏳ pending |
| — | Migrate disease nodes (A1–A8) + remaining mediator baselines off `byAge` tables; reframe residual (A13) as an explicit unattributed fraction | ⏳ backlog |
| edge-audit 2026-06-12 (genomic-instability inbound) | **STUBBED grey (β-pending)** — `mitochondrial-dysfunction → genomic-instability` (coupling, moderate) | Now VISIBLE on the graph as a grey-dashed stub. Mechanism: mtROS → 8-oxo-dG / strand breaks → nuclear-DNA lesion load. Grounded in verified atomic page hallmarks/genomic-instability.md. **POPULATE-blocked:** no verified primary-source quantitative dose-response (Δ-lesion-burden per unit mito-dysfunction) in the wiki; also must mediation-decompose against existing mito-dysfunction → cellular-senescence (disputed) path. **TRIGGER:** dispatch `wiki-seeder` to add a verified primary-source for the mtROS → nuclear-DNA-damage quantitative relationship → then `graph-node-seeder` populates the stub with a coupling gain and applies mediation-decomposition. #gap/needs-verified-source #gap/needs-effect-size |
| edge-audit 2026-06-12 (genomic-instability outbound) | **STUBBED grey (β-pending)** — `genomic-instability → stem-cell-exhaustion` (coupling, moderate) | Now VISIBLE on the graph as a grey-dashed stub. Two mechanisms: CHIP somatic driver mutations (Jaiswal 2014; Genovese 2014) shift HSC differentiation output; and persistent DDR / p21-arrest depletes stem-cell proliferative capacity (distinct from the telomere-attrition path). **POPULATE-blocked:** no verified dose-response for the direct genomic-instability burden → stem-cell-exhaustion coupling gain in the wiki (the CHIP epidemiology gives hazard ratios for CHD/cancer outcomes, not stem-cell function per unit GI burden). Must also apply mediation-decomposition against the existing genomic-instability → cellular-senescence → stem-cell-exhaustion chain and the genomic-instability → clonal-hematopoiesis path. **TRIGGER:** dispatch `wiki-seeder` to add a verified primary-source linking somatic mutation burden / CHIP clone-VAF to measurable stem-cell-function decline → then `graph-node-seeder` populates with mediation-decomposed coupling gain. #gap/needs-verified-source #gap/needs-effect-size |
| edge-audit 2026-06-12 (genomic-instability inbound) | **STUBBED grey (β-pending)** — `epigenetic-alterations → genomic-instability` (coupling, weak) | Now VISIBLE on the graph as a grey-dashed stub. Mechanisms: SIRT1/SIRT6 decline with NAD+ loss impairs DDR complex assembly and HR fidelity; age-related CpG methylation drift silences DDR/repair gene promoters; heterochromatin erosion (H3K9me3 loss) → R-loops → DSBs. Evidence is weak — no verified primary-source dose-response linking epigenetic drift magnitude to repair-fidelity decline in aged human tissue. **POPULATE-blocked:** requires a verified primary source for the epigenetic-regulation → DDR-fidelity → lesion-rate quantitative link. The existing epigenetic-alterations → cellular-senescence coupling (moderate) already routes part of this signal. **TRIGGER:** dispatch `wiki-seeder` to verify a primary source for epigenetic regulation of DDR capacity in aged human tissue → then `graph-node-seeder` populates with mediation-decomposition review. #gap/needs-verified-source #gap/needs-effect-size |
| edge-audit 2026-06-12 (genomic-instability exogenous inbound) | **STUBBED grey (β-pending)** — `smoking → genomic-instability` (driver, strong) | Now VISIBLE on the graph as a grey-dashed stub. Mechanism: tobacco PAHs (benzo[a]pyrene) form bulky DNA adducts → SBS4 somatic mutation signature scales linearly with pack-years (Alexandrov et al. 2016, Science, doi:10.1126/science.aag0299). Natural variable: β in ln(rate of somatic mutation accrual) per pack-year. **TWO populate-blockers:** (1) **State-node migration dependency:** `genomic-instability` must be migrated from its Tier-B linear age-curve to a `∫rate·dt` state node (Phase C3 of the migration roadmap) before this driver term can be populated — adding it to an age-curve node would double-drive the node. (2) **Verified source for normal-tissue dose-response:** Alexandrov 2016 covers cancer-tissue mutation burden; a normal-tissue equivalents study (e.g. Blokzijl 2016 per smoking status) should be confirmed in the wiki before populating the β. **Mediation note:** when populating, decompose the existing `smokingStatus→cancer` bundled cause edge — the genomic-instability-mediated slice must be subtracted from that edge (route-once discipline). **TRIGGER:** (a) dispatch `wiki-seeder` to add a verified normal-tissue dose-response study → then (b) migrate genomic-instability to state-node (Phase C3) → then `graph-node-seeder` populates the stub with decomposed β and adjusts the smoking→cancer edge. #gap/needs-state-node-migration #gap/needs-verified-source |
| edge-audit 2026-06-12 (genomic-instability exogenous inbound) | **STUBBED grey (β-pending)** — `alcohol → genomic-instability` (driver, strong) | Now VISIBLE on the graph as a grey-dashed stub. Mechanism: acetaldehyde (ADH metabolite of ethanol) forms N2-dG DNA adducts and interstrand crosslinks; Garaycoechea & Patel et al. 2018 (Nature, doi:10.1038/nature25154) ALDH2-/-/FANCD2-/- double-KO mouse model establishes acetaldehyde as the primary genotoxin driving HSC instability. Natural variable: β in ln(rate of acetaldehyde-DNA adduct accrual) per g/day ethanol (ALDH2 genotype is a key effect modifier). **TWO populate-blockers:** (1) **State-node migration dependency:** `genomic-instability` must be migrated to a `∫rate·dt` state node before this driver term can be populated. (2) **Verified human dose-response:** Garaycoechea/Patel 2018 anchor is mouse mechanistic — a human epidemiological dose-response (e.g. SBS16 burden per unit alcohol in normal tissue) needs to be verified in the wiki. **Mediation note:** the existing `alcohol→liver` cause edge is a distinct endpoint; the genomic-instability path carries alcohol's carcinogenic channel (not double-counted). **TRIGGER:** (a) dispatch `wiki-seeder` to verify a human dose-response for acetaldehyde → DNA adduct burden per g/day ethanol → then (b) migrate genomic-instability to state-node (Phase C3) → then `graph-node-seeder` populates. #gap/needs-state-node-migration #gap/needs-verified-source |
| edge-audit 2026-06-12 (genomic-instability exogenous inbound) | **STUBBED grey (β-pending)** — `airPollution → genomic-instability` (driver, moderate) | Now VISIBLE on the graph as a grey-dashed stub. Mechanism: PM2.5 carries PAH adducts + transition-metal-catalyzed ROS → bulky DNA adducts + 8-oxo-dG; IARC Group 1 human carcinogen (Monograph vol. 109, 2015). Natural variable: β in ln(rate of DNA-damage accrual) per µg/m³ PM2.5 annual mean. **TWO populate-blockers:** (1) **State-node migration dependency:** `genomic-instability` must be migrated to a `∫rate·dt` state node before this driver term can be populated. (2) **Verified quantitative dose-response:** the IARC Group 1 classification confirms carcinogenicity but a verified wiki primary source for the lesion-accrual rate per µg/m³ in human tissue is needed. **Mediation note:** existing `airPollution→copd` and `airPollution→cardiovascular` cause edges are distinct endpoints (bronchospasm/inflammation vs mutagenesis); no double-count. When populating, confirm no cancer-cause double-counting via the PM2.5→GI→cancer chain. **TRIGGER:** (a) dispatch `wiki-seeder` to verify a primary source for PM2.5 → DNA-damage dose-response in human tissue → then (b) migrate genomic-instability to state-node (Phase C3) → then `graph-node-seeder` populates. #gap/needs-state-node-migration #gap/needs-verified-source |
| edge-audit 2026-06-12 (cellular-senescence — paracrine feedback inbound) | **STUBBED grey (β-pending)** — `chronic-inflammation → cellular-senescence` (coupling, moderate) | Now VISIBLE on the graph as grey-dashed. Mechanism: SASP cytokines + inflammaging propagate bystander/paracrine senescence to neighboring cells (NF-κB/ROS/p38-MAPK→p16INK4a). Listed in causal-graph-data.md bidirectional-edges table. Verified in hallmarks/cellular-senescence.md (§ Senescence-mediated paracrine spreading). Key anchor: Acosta 2013 Nature Cell Biology (CXCR2-mediated paracrine senescence). **POPULATE-blocked:** no verified primary-source dose-response (Δ-senescent-cell burden per unit inflammaging cytokine level) in the wiki; the bidirectional loop gain must be calibrated so the spectral radius of couple·G ≪ 1 (stability constraint). **TRIGGER:** dispatch `wiki-seeder` to verify Acosta 2013 and add a wiki dose-response page; then `graph-node-seeder` populates with coupling gain that satisfies the stability constraint. Mediation-decompose against existing cellular-senescence→chronic-inflammation (strong, live) to avoid amplifying the loop beyond the empirical senescent-cell burden trajectories. #gap/needs-effect-size |
| edge-audit 2026-06-12 (cellular-senescence exogenous inbound) | **STUBBED grey (β-pending)** — `smokingStatus → cellular-senescence` (driver, strong) | Now VISIBLE on the graph as grey-dashed. Mechanism: PAH/ROS oxidative damage + acrolein → SIPS (stress-induced premature senescence) via DDR (p53/p21) and p38-MAPK→p16INK4a. Rashid 2015 Aging Cell; Tsuji 2004 FEBS Letters; Nyunoya 2006 AJRCCM (elevated p16+ cells in smoker lung). Natural variable: β in ln(rate of p16+/SASP+ cell accumulation per pack-year equivalent). **TWO populate-blockers:** (1) **State-node migration dependency:** cellular-senescence must be migrated from Tier-B exponential age-curve to `∫rate·dt` state node (Phase C3) before this driver can be populated — adding to an age-curve node would double-drive it. (2) **Verified wiki dose-response** for p16+ cell burden vs pack-year in human tissue (Nyunoya 2006 not yet a wiki page). **Mediation note:** when populating, decompose smokingStatus→cancer bundled edge (remove the senescence-mediated cancer slice per route-once discipline). **TRIGGER:** (a) dispatch `wiki-seeder` to add a verified dose-response page for smoking→SIPS induction → then (b) migrate cellular-senescence to state-node (Phase C3) → then `graph-node-seeder` populates. #gap/needs-state-node-migration #gap/needs-verified-source |
| edge-audit 2026-06-12 (cellular-senescence exogenous inbound) | **STUBBED grey (β-pending)** — `alcohol → cellular-senescence` (driver, moderate) | Now VISIBLE on the graph as grey-dashed. Mechanism: acetaldehyde → DNA adducts/ROS → DDR + p38-MAPK→p16INK4a SIPS; particularly in hepatocytes (MASH context). Grounded in hallmarks/cellular-senescence.md § SIPS. Natural variable: β in ln(rate of SIPS induction per g/day ethanol). **TWO populate-blockers:** (1) State-node migration of cellular-senescence to `∫rate·dt` (Phase C3). (2) Verified primary-source human dose-response for ethanol → senescent-cell burden elevation. **Mediation note:** alcohol→liver (live) is distinct endpoint; senescence path captures hepatic/systemic SASP burden elevation. When populating, apply mediation-decomposition: alcohol→senescence→SASP→inflammation→liver fraction must be subtracted from alcohol→liver direct edge. **TRIGGER:** (a) `wiki-seeder` for verified dose-response → (b) migrate cellular-senescence state-node (Phase C3) → (c) `graph-node-seeder` populates. #gap/needs-state-node-migration #gap/needs-verified-source |
| edge-audit 2026-06-12 (cellular-senescence exogenous inbound) | **STUBBED grey (β-pending)** — `airPollution → cellular-senescence` (driver, moderate) | Now VISIBLE on the graph as grey-dashed. Mechanism: PM2.5 → ROS/oxidative-DNA-damage → SIPS via DDR + p38-MAPK. Deng 2019 Aging (doi:10.18632/aging.102070): PM2.5 elevates SA-β-gal+/p16/p21 in alveolar epithelial cells and cardiomyocytes. Natural variable: β in ln(rate of SIPS per µg/m³ PM2.5 annual mean). **TWO populate-blockers:** (1) State-node migration of cellular-senescence to `∫rate·dt` (Phase C3). (2) Deng 2019 not yet a verified wiki page. **Mediation note:** airPollution→copd and airPollution→cardiovascular are distinct endpoints; populate pass must confirm no double-count against those live edges. **TRIGGER:** (a) `wiki-seeder` to verify Deng 2019 → (b) migrate cellular-senescence state-node (Phase C3) → (c) `graph-node-seeder` populates. #gap/needs-state-node-migration #gap/needs-verified-source |
| edge-audit 2026-06-12 (cellular-senescence exogenous inbound) | **STUBBED grey (β-pending)** — `calorieBalance → cellular-senescence` (driver, moderate) | Now VISIBLE on the graph as grey-dashed. Mechanism: lipotoxic metabolic stress (excess FFA/ceramide → ER stress → p38-MAPK→p16INK4a) + hyperglycemia-driven ROS SIPS in adipocytes, hepatocytes, β-cells. Hallmarks/cellular-senescence.md § SIPS lists 'hyperglycemia, lipotoxicity' as SIPS triggers. Aguayo-Mazzucato 2019 (β-cell senescence, needs PDF verification). Natural variable: β in ln(rate of lipotoxic SIPS per unit positive calorieBalance in kcal/day or per BMI unit). **TWO populate-blockers:** (1) State-node migration of cellular-senescence to `∫rate·dt` (Phase C3). (2) Verified primary-source dose-response for adiposity → senescent-cell burden (not yet a wiki page; Palmer 2019 Diabetes is a candidate anchor). **Mediation note:** populate pass must decompose against the existing calorieBalance→BMI→HbA1c→deregulated-nutrient-sensing→cellular-senescence chain so only the ADDITIONAL lipotoxic/metabolic-stress SIPS fraction (not routed via HbA1c or nutrient-sensing) is attributed to this direct driver edge. **TRIGGER:** (a) `wiki-seeder` to verify Palmer 2019 / Aguayo 2019 and add dose-response wiki pages → (b) migrate cellular-senescence state-node (Phase C3) → (c) `graph-node-seeder` populates with mediation-decomposed coefficient. #gap/needs-state-node-migration #gap/needs-verified-source |
| edge-audit 2026-06-12 (cellular-senescence — clearance-failure inbound) | **STUBBED grey (β-pending)** — `immunosenescence → cellular-senescence` (coupling, moderate) | Now VISIBLE on the graph as grey-dashed. Mechanism: declining NK-cell + macrophage clearance of senescent cells (senescence-immune-surveillance) → higher steady-state burden at the same production rate. Explicitly documented in hallmarks/cellular-senescence.md § 'Two arms of intervention'. Natural variable: β in normalized coupling gain (dimensionless hallmark-layer coupling). **POPULATE-blocked:** no verified primary-source quantitative dose-response for immunosenescence severity → senescent-cell accumulation rate in the wiki. The three-node feedback loop (senescence→stem-cell-exhaustion→immunosenescence→senescence) must not violate the spectral-radius stability constraint (couple·G spectral radius ≪ 1). **Mediation note:** part of the immunosenescence signal is mediated by the stem-cell-exhaustion→immunosenescence path; decompose against that to avoid double-routing. **TRIGGER:** dispatch `wiki-seeder` to add a wiki page for senescence-immune-surveillance process with quantitative clearance data → then `graph-node-seeder` populates with gain satisfying the stability constraint. #gap/needs-effect-size |
| edge-audit 2026-06-12 (cellular-senescence outbound — neurodegeneration) | **STUBBED grey (β-pending)** — `cellular-senescence → neurodegeneration` (coupling, moderate) | Now VISIBLE on the graph as grey-dashed. Mechanism: senescent microglia (DAM) + astrocyte SASP → neurotoxic environment → neurodegeneration; distinct from the systemic SASP→chronic-inflammation→neurodegeneration path. Verified in hallmarks/cellular-senescence.md disease phenotype cluster; microglia (verified-partial). Anchors: Niraula 2019, Spangenberg 2019. Natural variable: β in normalized coupling gain (hallmark-to-pathology coupling). **POPULATE-blocked:** no verified primary-source quantitative dose-response for local CNS senescent-cell burden → neurodegeneration rate in the wiki. Niraula 2019 / Spangenberg 2019 not yet wiki pages. **Mediation note:** populate pass must decompose against the existing cellular-senescence→chronic-inflammation path — only the local CNS (microglial/astrocytic) fraction belongs here; systemic SASP→neuroinflammation is already carried by the inflammation path. **TRIGGER:** dispatch `wiki-seeder` to verify Niraula 2019 and add a wiki page → then `graph-node-seeder` populates. #gap/needs-effect-size #gap/needs-verified-source |
| edge-audit 2026-06-12 (cellular-senescence outbound — β-cell / diabetes) | **STUBBED grey (β-pending)** — `cellular-senescence → diabetes` (coupling, moderate) | Now VISIBLE on the graph as grey-dashed. Mechanism: β-cell senescence → impaired insulin secretion → hyperglycemia → T2D (acute crisis mortality E10-E14). Documented in hallmarks/cellular-senescence.md disease phenotype cluster (Aguayo-Mazzucato 2019, #gap/no-fulltext-access). Natural variable: β in normalized coupling gain (hallmark-to-pathology coupling). **POPULATE-blocked:** Aguayo-Mazzucato 2019 not yet PDF-verified in the wiki (#gap/no-fulltext-access noted); a verified quantitative dose-response for β-cell senescent burden → insulin-secretion deficit is needed. **Mediation note:** populate pass must decompose: only the β-cell-senescence-direct fraction (not routed via HbA1c→diabetes or via cellular-senescence→chronic-inflammation→islet-inflammation paths) belongs here. The existing HbA1c→diabetes edge captures the glycemia-driven component already. **TRIGGER:** dispatch `wiki-seeder` to verify Aguayo-Mazzucato 2019 (obtain PDF) → then `graph-node-seeder` populates. #gap/needs-effect-size #gap/needs-verified-source (needs PDF verification) |
| edge-audit 2026-06-12 (cellular-senescence outbound — kidney) | **STUBBED grey (β-pending)** — `cellular-senescence → ckd` (coupling, moderate) | Now VISIBLE on the graph as grey-dashed. Mechanism: senescent tubular epithelial cells → SASP (TGF-β, IL-6, CCL2) → myofibroblast activation → tubulointerstitial fibrosis → CKD (N00-N07/N17-N19/N25-N27). Baker 2016 (Nature): INK-ATTAC clearance improved kidney function; Mylonas 2022 (JASN): p21-dependent renal senescence; Braun 2020 (Kidney Int): senolytic clearance reduces renal fibrosis. Distinct from SBP→ckd and HbA1c→ckd (hypertensive and diabetic nephropathy). Natural variable: β in normalized coupling gain (hallmark-to-pathology coupling). **POPULATE-blocked:** no verified quantitative dose-response for senescent tubular-cell burden → GFR decline rate in the wiki (Baker 2016 kidney function data is qualitative in the wiki; Mylonas 2022 / Braun 2020 not yet wiki pages). **Mediation note:** fraction via cellular-senescence→chronic-inflammation (SASP-driven renal inflammation) must be decomposed. **TRIGGER:** dispatch `wiki-seeder` to verify Mylonas 2022 (JASN) and add a wiki page → then `graph-node-seeder` populates. #gap/needs-effect-size #gap/needs-verified-source |

**Design pattern for each migration (calibration-preserving):** split the age-pegged
baseline into `mechanistic(integrated rates, at pop inputs) + explicitResidual(age)` such
that the two sum to the original curve at population-average inputs. The baseline (and the
86/86 regression suite) is preserved exactly; only off-baseline inputs move the node.

**Residual discipline (the residual is a last resort, not a default).** An unneeded
residual is itself an age curve, so it silently re-introduces the very age-pegging this
migration removes. For each node, **enumerate the known mechanistic contributors first and
model every one that decomposes into a rate×time integral** — the residual carries ONLY
the fraction tied to a specific, named `#gap/no-mechanism`. If the evidence says a
trajectory is fully attributable to known causes, the residual is **zero** and the
mechanism rates must be calibrated to carry the whole curve (no fudge term). Always
**report the residual fraction** so the unexplained remainder is visible, not hidden.

> *Worked example — arterial stiffening* (`phenotypes/arterial-stiffening.md`): the
> dominant structural driver is **elastin fragmentation**, which *looks* like pure aging
> but is **cumulative pulsatile fatigue = ∫(heart-rate × pulse-pressure) dt** — a rate×time
> stock, NOT chronological age. Together with glucosepane crosslinking (`∫ glycemia dt`)
> and VSMC senescence (existing graph node), these cover most of the age-rise. The residual
> is bounded to the two genuine gaps the wiki flags (`#gap/no-mechanism`: medial
> calcification trigger in normoglycemic non-CKD; uncharacterized structural-deficit
> magnitude) — small, not the catch-all.

---

## Target architecture — the unified causal graph (the migration's north star)

The model today has **two layers**: the 22-node **causal graph** (hallmark tiers → disease
nodes, carrying a dimensionless `[0,1]` "burden") and the **B-layer** (exogenous inputs →
mediators `LDL/SBP/BMI/HbA1c` → cause edges, in physical units). **This split is a
representational seam, not a principled ontology.** It is an artifact of:

1. **Measurability** — entities with a standard clinical assay became units-bearing
   *mediators*; abstract hallmarks/diseases with no single assay became `[0,1]` *burden
   nodes*. (Give senescence a marker like p16⁺ fraction and it could be a "mediator";
   represent SBP as a `[0,1]` burden and it could be a "node." The line is measurability,
   not causal role.)
2. **Two construction phases** — the hallmark coupling-graph first, the clinical-risk layer
   bolted on later.
3. **Two calibration sources** — CDC cause-mortality (nodes) vs NHANES labs (mediators).

Functionally, **cellular senescence and SBP are peers** — both upstream state variables
that influence downstream pathology and mortality. Two tells that the split is incoherent:

- The node layer **already straddles upstream and terminal** entities (hallmarks are
  upstream risk drivers; disease nodes are terminal), so the split is *not* "upstream vs
  terminal."
- The seam **blocks real mechanistic edges**: the wiki documents VSMC **senescence →
  arterial stiffening**, but senescence is a node and stiffness/SBP are B-layer, and there
  is **no node→mediator edge type**. The migration's own next step (`senescence → stiffness`)
  cannot be expressed without crossing the seam.

### North star

**ONE unified causal graph of state variables.** Every node is a `∫ rate·dt` trajectory
driven by its upstream inputs (the no-age-pegging principle), connected by mechanistic
edges, and *verified* — not pegged — against whatever empirical anchor exists. The current
layer distinctions collapse into **per-node attributes**, not separate structures:

- **units** — physical where a clinical assay exists (`SBP mmHg`), abstract `[0,1]`
  reserve-depletion where none does (`senescence`). A display/calibration detail.
- **role / class** — `damage` (mechanism) · `physiology` (measurable intermediate) ·
  `pathology` (terminal, cause-of-death). A tag, not a layer.
- **measurable?** — can a lab value anchor it. A calibration detail.

Cross-layer edges become ordinary edges:
`cellular-senescence → arterial-stiffness → SBP → atherosclerosis → death` is one path.

**There is no "cross-layer edge type" — that would formalize the seam we are removing.**
The prerequisite for `senescence → stiffness` is a **uniform node representation**, so the
two endpoints are the same kind of object and the edge between them is ordinary. A single
node schema can hold both of today's machineries:

- a **value** in per-node units — physical (`mmHg`) *or* normalized `[0,1]` (a units tag,
  not a separate layer);
- a **rate law** (`∫ rate·dt`, driven by upstream inputs);
- **edges** carrying a transfer function (so a `[0,1]` burden delta can contribute to a
  physical value, or vice-versa — the conversion lives on the edge, not in a special
  edge *type*);
- an **optional terminal hazard mapping** (the reserve→hazard odds-link), used only by
  `pathology` nodes.

Under that schema senescence (abstract units, no terminal edge) and SBP (`mmHg`, edge to
atherosclerosis) are the same type. The rate-integration substrate is the unifier: once
every node is a `∫ rate·dt` state variable, there is no mechanical reason for two layers and
no "cross-layer" anything.

### Nomenclature: "pathology" for terminal nodes (not "phenotype")

The terminal nodes (atherosclerosis, cancer, neurodegeneration, infection, diabetes, COPD,
CKD, liver) are the proximate **causes of death**. `phenotype` is a poor label: it means any
observable trait, and the **wiki already uses `type: phenotype`** for *non-terminal* traits
(sarcopenia, frailty, and notably **arterial-stiffening**, an *intermediate* node here) —
a name clash. **Rename the model's terminal layer `phenotype → pathology`**, reserving
"phenotype" for its broad sense. (This touches only the simulator's `layer:` attribute, NOT
the wiki's `type: phenotype` schema in CLAUDE.md.)

The rename also exposes a **miscategorization**: **immunosenescence** sits in the terminal
set but is a *mechanism*, not a pathology — the pathology it drives is **infection** (the
node maps to the `infection` cause). Under "pathology" nomenclature it should move upstream
into the `damage`/hallmark class, with `infection` as the terminal node it drives. Flagged
for the unification work.

### Implementation roadmap

Ordered by dependency. Each step preserves the baseline invariant (86/86 + LE 75.82/80.89)
unless explicitly flagged as a re-baseline. "Port" = `build-app` (engine.mjs + params.json →
HTML; the established flow).

**Phase A — Schema + the SBP vertical (the proof-of-concept)**
- **A1. Uniform node schema.** One node type: `{ id, class (damage|physiology|pathology),
  units (physical | normalized-[0,1]), rateLaw (∫rate·dt), edges[] (each with a transfer
  function), terminalHazard? (odds-link, pathology only), anchor (empirical curve to
  *verify* against) }`. One computation path replaces the node-coupling-fixed-point ⊕
  mediator-additive split. Biggest single piece; gate everything on the invariant.
- **A2. `elastin-fatigue` stock** — `∫ (heart-rate × pulse-pressure) dt`. Needs a
  heart-rate input/proxy (also an independent mortality factor — add it). Pulse pressure
  derives from SBP ⇒ a real feedback (stiffer → higher PP → faster fatigue); handle within
  the per-age solve, integrate across age.
- **A3. `arterial-stiffness` node** — driven by `ecm-crosslink` + `elastin-fatigue` +
  `cellular-senescence` (the first former-node→former-mediator edge, now ordinary).
- **A4 → MOVED to Phase B.** Wiring `arterial-stiffness → SBP → CVD` is **not** a standalone
  step: stiffness re-routes effects (glycemia via crosslink; SBP) **already carried by the
  calibrated direct edges** (`HbA1c→CVD` ERFC, `SBP→CVD` Lewington), so bolting it on naively
  **double-counts** (≈10% drift on `BMI→CVD` vs Lu; diabetic CVD re-counts the structural
  slice ERFC already includes). It is a **mediation re-partition** → folded into Phase B.
  **A1–A3 — the emergent `glycemia/HR → crosslink/elastin → arterial-stiffness` substrate —
  are the clean, done Phase-A deliverable** (all unwired ⇒ baseline preserved).

**Phase B — Mediation re-partition + dismantling the seam**

*Discipline (supersedes the crude "route-once"):* **making a previously-aggregate effect
explicit via a mechanism requires SUBTRACTING that slice from the aggregate edge, so the
calibrated total is preserved.** If `X→Y` is ENTIRELY via mechanism `M` → re-route (drop the
direct `X→Y`, add `X→M→Y`). If PARTLY via `M` → split: route the `M`-slice through `X→M→Y`
and **reduce the direct `X→Y` by that slice** (residual = the non-`M` pathways). explicit-slice
+ reduced-aggregate = the original calibrated total — no double-count, now decomposed AND
intervention-responsive through `M`. This **generalises the model's existing Lu-2014
`Mechanistic-vs-bundled` BMI decomposition** (BMI→SBP path + BMI→CVD residual = 1.27). Every
wiring below is a *decomposition, not an addition* — each a deliberate, literature-anchored
re-baseline.

- **B0. Node-burden access — ✅ DONE (2026-06-10).** `simulate()` now passes node burdens
  (`Barr` live / `Tarr` baseline) into `mediators()`, which exposes them in `out` so a
  state-node term can read a node id as a driver. The `cellular-senescence → arterial-stiffness`
  term is wired (weights rebalanced 0.50 elastin / 0.30 crosslink / 0.80 senescence, ~20%
  senescence share per Clayton 2023; ~1.0 @80). **First node→state-node edge: a senescence
  freeze drops stiffness 0.996→0.820.** 99/99; baseline invariant (stiffness still unwired to
  mortality). The reverse direction (exogenous→latent, inputs raising a node burden) is B4.
- **B1. Rename `layer: phenotype → pathology`** (data + engine + tests + HTML).
- **B2. Reclass `immunosenescence`** as `damage`; add `infection` as the terminal `pathology`
  it drives; wire `immunosenescence → infection`.
- **B3 — ✅ DONE (2026-06-10)** — `arterial-stiffness → cardiovascular` wired (direct cfPWV
  edge, Mitchell 2010, β 0.6 illustrative, deviation-form ⇒ baseline exact). Senolytic +0.49
  yr; glycemic/HR/fitness all bend CV via stiffness; **non-double-counted** (senescence's
  stiffness path is distinct from its inflammation→plaque coupling; `HbA1c→CVD` decomposed
  for the glycemic-stiffness slice). The **`stiffness→SBP` slice was deferred to A4** — wiring
  it now would double-count the Lewington `SBP→CVD` hub (shared by BMI/Lu + sodium), so B3
  **decoupled SBP from `elastin-fatigue`** (HR-driven for now) and A4 reconciles it. 101/101.
  - Re-add the deferred **`cellular-senescence → arterial-stiffness`** term (needs B0).
- **B4. Wire `exogenous → latent`** generally (dismantle the seam): `smoking →
  genomic-instability` (`∫ dose·dt`) `→ cancer`, **decomposing** the direct `smoking→cancer`
  PAF by the genomic-instability slice; same pattern for the other exogenous→latent edges.
- **B5. Deferred-edge cleanup**: `restingHR → mortality` (decomposed); `physicalActivity →
  restingHR` fitness edge.

**Phase C — Migrate the remaining age-pegged backbone (Tier A/B of the inventory)**
- **C1. Mediator baselines** (LDL, SBP, BMI, HbA1c, restingHR) off `byAge` tables → emergent.
  **This is a CHAIN, done via the residual-split**: each mediator's age-baseline → (mechanistic
  part from rate-integrated upstream drivers) + (explicit unattributed residual). De-age-pegging
  one mediator just **relocates the age-peg to its drivers** until you hit the residuals, so it's
  incremental:
  - **SBP** — furthest along: stiffness (A4) is the mechanism; form-B makes the baseline a flat
    residual + the stiffness term (representational; relocates the peg to HbA1c via crosslink).
  - **HbA1c** — adiposity (BMI→HbA1c edge exists) + β-cell-decline rate + insulin resistance;
    much of the age-rise likely stays an explicit residual (β-cell decline not yet a node).
  - **BMI** — already ~driven by `calorieBalance`; its baseline rise is the population's slow
    weight-gain trajectory (could be a small residual).
  - **LDL** — diet (satfat/fiber edges) + hepatic LDL-receptor-downregulation rate (a new node)
    + residual.
  - **restingHR** — flat baseline already (not age-rising); trivial.
- **C2. The 8 pathology nodes** off the CDC `byAge` burden tables → emerge from their
  upstream hallmark/mediator inputs. **Hardest** — they carry the mortality calibration;
  the emergent burden must still reproduce CDC cause-mortality at pop inputs.
- **C3. The 14 parametric hallmark curves** (`linear/exp/sigmoid` in age) → driven by their
  own upstream damage rates instead of autonomous functions of age.

**Phase D — Residual + validation**
- **D1.** Reframe the residual (A13) as an explicit unattributed *fraction*, report it.
- **D2.** `fit` harness — calibrate rate constants to data under literature-anchored
  constraints + held-out validation (the inverse-problem discipline; never free-fit latents).
- **D3.** Clock-validation layer (GrimAge/proteomic-age as OUTPUT checks, never drivers).

**Phase E — UI unification**
- **E1.** Surface stocks/mechanistic nodes as readouts in the panel.
- **E2.** Merge the (former) B-layer into the node graph once enough nodes are mechanized,
  so `crosslink → stiffness → SBP → atherosclerosis → death` renders as one connected path.

**Principle throughout:** no "cross-layer edge type" — unify the node *representation* so all
edges are ordinary; minimize the residual (model known rate×time mechanisms first); age is a
*verification* target, never an input.
- Rename `layer: phenotype → pathology` across model data + engine + tests + HTML; reclass
  `immunosenescence` as `damage`, add `infection` as the terminal `pathology` node it drives.
- Decide UI surfacing of the (former) B-layer on the node graph as it unifies (see the
  porting discussion — likely readouts first, full graph-merge once enough nodes mechanize).

---

## Phase C — detailed scope (mediator de-age-pegging) + sequencing

> Scoped 2026-06-10 before execution. "Merge mediators into regular nodes" bundles **two
> distinct things** — keep them separate:
>
> - **(A) De-age-pegging** (form-B residual-split): replace a mediator's `byAge` baseline with
>   `(mechanism from rate-integrated drivers) + (explicit residual)`. **This is BEHAVIORAL, not
>   representational** (corrected — user pushback): the age tables END at the measured range (85)
>   and CLAMP FLAT beyond, but the model runs to 130, so the >85 trajectory is flat-wrong; and an
>   age-pegged baseline only admits a *deviation*, so it cannot model an intervention/connection
>   that bends the age-RISE itself. The mechanism delivers correct >85 extrapolation + those new
>   interventions. (At the pop baseline, the cause-edge deviation is still 0, so the CDC-calibrated
>   baseline LE is preserved — but the >85 dynamics and intervention reach genuinely change.)
> - **(B) Structural unification**: move the mediator out of the separate B-layer into the
>   uniform `stateNode` schema (a `physiology` node), dissolving the node/mediator seam. Bigger
>   refactor; the unified-graph north star, but defer until enough is mechanized.
>
> **The value is delivered by ADDING THE MECHANISM** (which de-age-pegs AND unlocks the >85
> behavior + the new interventions), not by a form-B relabel of a still-unmechanized curve. Where
> a mechanism exists (SBP/stiffness), do form-B. Where it doesn't (HbA1c/LDL/BMI), the value is in
> BUILDING the driver node — that is where the extrapolation + interventions come from.

### Per-mediator scope

| Mediator | Age-rise (M) | Mechanism available NOW | Driver to build | Path |
|---|---|---|---|---|
| **restingHR** | none (flat 65) | — | — | **no-op** (already not age-pegged) |
| **SBP** | 119→154 | **`arterial-stiffness` (A4 built)** — ISH after 60 *is* stiffness | — (form-B now) | **form-B** (fixes >85 clamp) |
| **BMI** | 27.6→30.3 | none — `calorieBalance` is deviation-from-MAINTENANCE (popMean 0 = weight-stable ON the curve), so it maintains the baseline, doesn't drive its rise | metabolic-rate decline | build driver node |
| ~~**HbA1c**~~ | ~~5.3→5.9~~ | **DONE** — `β-cell-decline` node built (Increments 1–3) | ✅ `beta-cell-decline` + glucotox spiral | **✅ built** — flat 5.3 + augment; rises past 85; diabetes spiral live |
| **LDL** | rises ~+30 mg/dL | none (diet edges don't drive the *age*-rise) | **hepatic LDL-receptor decline** | build driver node |

### Key finding from scoping — de-age-pegging IS behavioral (corrected, user pushback)
Age-pegging breaks the model in two concrete, behavioral ways:
1. **Wrong past the measured ages.** The mediator `byAge` tables end at 85 and **clamp flat**
   beyond (SBP pins at 154 across 85→130), while the mechanistic ∫rate chains keep rising
   (stiffness 1.11→2.27 over 85→130). The model **runs to 130** (survival past 100), so a large
   slice of the old-age trajectory is flat-wrong; a mechanism extrapolates, a table cannot.
2. **Blocks interventions/connections on the age-rise itself.** An age-pegged baseline only admits
   a *deviation* — you cannot model anything that bends the underlying age-RISE (preserve β-cells →
   bend HbA1c; break crosslinks → bend SBP's rise), because that rise is a hardcoded constant, not
   a mechanism. Those interventions are *unrepresentable* until the driver is a node.

So C1 is genuinely worth doing — but the value is delivered by **building the mechanism** (which
de-age-pegs AND unlocks the >85 behavior + the new interventions), not by a form-B relabel of a
still-unmechanized curve. SBP/stiffness exists → form-B works. HbA1c/LDL/BMI don't → the value is
in **building the driver node**, which is where the >85 extrapolation + new interventions come from.

### Recommended sequence
1. **restingHR** — confirm no-op (flat baseline). *(trivial)*
2. **SBP form-B** — fixes the >85 SBP clamp (SBP keeps rising via the existing stiffness mechanism);
   contained, baseline-preserving. *(small win)*
3. **Build the missing driver nodes** (the real payoff):
   - ✅ **β-cell decline → HbA1c** — **DONE 2026-06-10** (Increments 1–3): flat 5.3 + augment;
     HbA1c rises past 85; full glucotoxicity diabetes spiral; feeds crosslink→stiffness. The per-age
     march built here (Increment 1, `stateAugments`) is reusable substrate for the remaining nodes.
   - ⏳ **LDL-receptor decline → LDL** — next; hepatic LDLR downregulation drives the LDL age-rise.
   - ⏳ **metabolic decline → BMI** — basal-metabolic-rate decline (not `calorieBalance`, which is
     deviation-from-maintenance) drives the BMI age-rise.
4. **C2** — the 8 disease/pathology nodes off CDC tables (hardest; interventions would bend disease
   incidence mechanistically — biggest payoff).

**Lipotox arm (deferred follow-on to the β-cell node):** the `BMI→β-cell-decline` lipotoxicity term
is present at coeff 0. Activating it requires re-calibrating the intrinsic rate down (population
BMI>25 would otherwise lift the population HbA1c curve) — do this when the **metabolic-decline→BMI**
node lands, so BMI's own age-rise is mechanized first.

Each migration is calibration-preserving (residual-split) + gets a regression test pinning the
mechanized/residual split + the baseline invariant.
