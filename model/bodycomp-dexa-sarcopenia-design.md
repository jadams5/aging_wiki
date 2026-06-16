# Design note — body-composition (DEXA) inputs, the muscle/lean-mass reserve, and the GLP-1 weight-independent cardiovascular term

**Status:** IMPLEMENTED v1+v1.1 (2026-06-16) — Rev 2, Codex-reviewed. Author: Claude. Reviewer: Codex gpt-5.5 (high effort, read-only).

> **BUILT 2026-06-16 (314/314 tests pass; baseline LE invariant to 1e-9; validate-graph + leak-gate clean).** Shipped: `leanMassIndex` mediator (flat baseline M 8.5 / F 6.4, DEXA-anchorable) + bounded signed `muscle-balance` state node (catabolic = chronic-inflammation + stem-cell-exhaustion; anabolic/preserving = physicalActivity; clamp [−2.5,+1.5]) + `muscle-balance→leanMassIndex` augment (sex-coeff M 0.62 / F 0.42 → emergent ALMI ~−10% by age 85, mean above EWGSOP2 cutoffs) + `leanMassIndex→falls` (mediatorLogLinear β −0.4244, migrated off the retired age-sigmoid `sarcopenia→falls`) + GLP-1 multi-effect (BMI −3.0, leanMassIndex −0.30) + GLP-1 weight-independent CV residual (`causeEffects` cardiovascular pctReduction 0.05, cap 0.10). Engine additions: multi-target `treatment.effects[]`, `floor`/`cap` on state-node accumulation, `{input:id}` driver bridge (input→state), `treatment→cause` path; all behavior-preserving (the pre-existing 305 tests passed unchanged before any param edit). GLP-1 net ΔLE (baseline male): BMI-only +1.089 → +1.068 with the muscle penalty → +1.225 with the CV residual — the sarcopenia paradox is now visible. All effect sizes ship `provenance:"placeholder"` / `#gap`; `graph-node-validator` to promote.
>
> **UPDATE 2026-06-16b — mechanistic mortality decomposition (replaces the deferred lazy `→allcause`).** Rather than a generic `leanMassIndex→allcause` multiplier (rejected as the same unprincipled move that sank the old `betaByCause`), sarcopenia's mortality is decomposed into the SPECIFIC causes where low muscle has a direct, evidenced mechanism: **`leanMassIndex→falls`** (fall/fracture, Yeung 2019) + **`leanMassIndex→infection`** (respiratory-muscle weakness → pneumonia; sarcopenic dysphagia → aspiration; amino-acid reserve → sepsis survival; β −0.36 placeholder). **Deliberately EXCLUDED** (documented non-modeling): `→cardiovascular` (the fitness axis, already in `activityFitness→allcause` — would double-count) and `→cancer` (reverse causation / cachexia). The cause-agnostic physiologic-reserve slice stays in the residual until a real multi-driver reserve node exists (the dormant `frailty` edge-kind). Muscle penalty grew −0.02 → **−0.07 yr**; GLP-1 net ΔLE +1.225 → **+1.177**. **`#gap/activity-fitness-muscle-overlap` — RESOLVED for falls (2026-06-16c).** physicalActivity drives both the VO₂max-fitness all-cause channel and the muscle channel (→falls/infection). The genuinely *spurious* overlap was **falls** (cardiorespiratory fitness has no fall-prevention mechanism), now fixed: `activityFitness` carries `excludeCauses:["falls"]` and a new engine per-cause opt-out divides the fitness mult back out of falls (×1 at baseline ⇒ invariant), so activity's fall benefit flows *only* through muscle. **Infection retained as dual-mechanism** (fitness=pulmonary/immune vs muscle=respiratory-mechanics/aspiration — distinct, additive; only shared activity-variance remains, a minor residual). Consequence: activity's fall benefit now under-carries (muscle channel ~7.5% vs RCT ~20–30%) — a `#gap/needs-effect-size` on the muscle channel's `c_pa`, separate from this structural fix.
>
> **UPDATE 2026-06-16d — GLP-1 CV residual REMOVED (gap #2 resolution).** The validator + a second Codex (gpt-5.5) pass found the `causeEffects` cardiovascular `pctReduction 0.05` **double-counts** the observational BMI→CVD cascade, which already delivers ~16–20% CV reduction for the −3 BMI lever (engine-measured) ≈ the SELECT total MACE RRR (HR 0.80) on its own. SELECT adiposity-mediation (PMID 41138739) says only ~33% of the MACE benefit is weight-mediated, so the *observational* cascade over-credits drug-induced weight loss. Codex endorsed the principled fix — a **`trialMediationReplacement`** that swaps the treatment's observational weight-mediated CV slice for the trial-decomposed value (net correction `totalHR^dose / m_obs`, dose-scaled ⇒ ×1 at baseline ⇒ invariant) — as higher-value + general, BUT scoped narrowly (treatment-specific params, general engine capability; rejected a global discount and rejected recalibrating the whole BMI→CVD edge). **Implementation revealed it's a real architecture lift, not a quick edit:** the treatment's ΔBMI reaches cardiovascular through **≥4 entangled paths** (direct BMI→CVD residual, BMI→SBP→CVD, the BMI→allcause J-curve *bracket*, BMI→HbA1c→CVD), so computing `m_obs` (the treatment-ΔBMI-attributable CV mult) non-fragilely needs counterfactual-evaluation infrastructure — a 2-path closed form gives ~10% vs the measured ~20% (wrong). **Done now (no-regret, correct under both a and b):** REMOVED the double-counting `pctReduction 0.05` (Codex's #1 priority). GLP-1 net ΔLE +1.177 → **+1.020** (BMI +1.089 − muscle penalty ~0.07; CV now rides the BMI cascade alone). **Interim shape caveat:** GLP-1's CV benefit is now implicitly ~fully weight-mediated (a future equal-weight-loss intervention would look CV-equivalent — the contamination Codex warned of, latent until a 2nd weight-loss CV agent is added). The general engine capabilities (multi-target `effects`, `treatment→cause` `causeEffects`) stay built + tested (dormant). **DEFERRED: the `trialMediationReplacement` form + counterfactual `m_obs` infra** — build when a 2nd weight-loss CV intervention makes the shape matter.
>
> DEFERRED: route-through-`chronic-inflammation` CV path, DEXA fat/VAT refactor, BMD→fracture, the proper physiologic-reserve node.

> **Review outcomes folded into this rev (Codex gpt-5.5, 2026-06-16).** Verdict: directionally sound; **narrow v1**. Three substantive changes adopted:
> 1. **v1 ships `leanMassIndex→falls` ONLY.** The `leanMassIndex→allcause` reserve slice is **deferred** — it repeats the old `betaByCause` over-attribution risk in miniature and needs a comorbidity-/disability-adjusted, route-decomposed anchor first. (Also: all-cause runs through a *different* engine path — `allcauseEdgeMult`, not `causeEdgeMult` — so deferring it simplifies E5.)
> 2. **The weight-independent CV term becomes a direct `treatment→cardiovascular` residual (D2-D), not route-through-`chronic-inflammation` (D2-B).** SELECT is a MACE + CRP-biomarker trial; routing through the inflammation node would fan the benefit into cancer/neurodegeneration/infection via existing `coupling` edges — mortality endpoints SELECT never measured. Keep the inflammation route as a **stub** pending a mediation decomposition + multi-system calibration.
> 3. **`muscle-loss` must be floored at ≥ 0** (state nodes don't clamp today); formulate physical activity as *attenuating the positive atrophy rate*, not creating negative loss — else a lifelong-high-activity profile pushes ALMI above the young-healthy baseline.
>
> Corrections folded: (a) the **deviation-from-baseline** invariant is pinned to 1e-9, but absolute baseline LE is pinned ±0.05 — I overstated "±1e-9 vs CDC"; (b) invariance ratios against the **emergent post-augment** `medBaseline`, NOT the flat YAML curve; (c) DEXA anchors the **observable mediator residual**, not the latent `muscle-loss` rate; (d) `stateAugment` ordering caveat: ordinary mediator→mediator edges are computed *before* augments and would not see an augmented value — harmless here because `leanMassIndex`'s only consumers are cause edges + the (separate) state rates, which *do* see the augmented value. Section 9 carries Codex's per-question recommendations.
**Scope:** the two omissions flagged when GLP-1 was un-bundled into a weight lever (see `frameworks/causal-graph-parameters.md` `glp1` treatment provenance, 2026-06-16), plus the DEXA-input opportunity that ties them together:

1. **Sarcopenia paradox** — GLP-1 / any caloric deficit loses lean mass alongside fat; the current model has no muscle node, so weight loss reads as unambiguously good and net benefit in frail/elderly is overstated.
2. **Weight-independent cardiovascular / anti-inflammatory benefit** — SELECT showed MACE −20% and CRP −37%, only *partly* mediated by weight (Lincoff 2023); the current `glp1` lever captures only the BMI path.
3. **DEXA inputs** — body-composition anchoring (appendicular lean mass, fat mass, visceral fat, BMD). The user's observation that this "seems like a good opportunity to allow DEXA inputs" is the key: **DEXA-anchored lean mass is precisely the observable the disabled frailty machinery was waiting for.**

The unifying thesis: **(1) and (3) are the same build.** The model already disabled its sarcopenia→mortality path in the 2026-06-11 frailty restructure, with an explicit replacement bar — *"a real physiologic-reserve state (own observable trajectory + baseline calibration + evidence interventions move it)"* (`model/PROJECT-NOTES.md` § frailty; `mortality.frailty.betaByCause_DISABLED_gap` note). DEXA lean mass supplies the observable trajectory + the anchoring; resistance training / GLP-1 supply the "interventions move it." This build clears that bar.

---

## 0. Architectural constraints (the rules this design must not break)

From `model/PROJECT-NOTES.md`, the engine, and `test.mjs`:

- **No age-pegging.** Mortality drivers integrate a rate over time (`∫rate·dt`); age only *verifies* the emergent shape, it is never hard-coded into a result. Observable *mediators* (BMI, BP, HbA1c) legitimately keep measured population age-baselines, but latent burdens (chronic-inflammation, sarcopenia) are being migrated off age-sigmoids to emergent integrals. The current `sarcopenia` node is **still an age-sigmoid (`mid:72`)** with a stated migration target of `∫rate·dt` — this design executes that migration.
- **Baseline-LE invariance (hard).** At population-average inputs + no treatment + no offset, every mediator == its (emergent post-augment) baseline and every cause multiplier == 1. The **deviation-from-baseline** ΔLE is pinned to **1e-9** by `test.mjs` (`B2: pop-avg LE invariant`); the absolute baseline LE (M ~77.46 / F ~82.12) is pinned looser (±0.05). Every new edge must be deviation/ratio-normalized so it contributes **0 / ×1 at baseline** — and the reference is the **emergent `medBaseline`** (the trajectory `mediators()` returns at default inputs, *with* augments applied), NOT the flat YAML `baseline:` curve.
- **Two layers, one direction of flow.** Node layer (24 hallmark/phenotype nodes) computes `nodeBurdensLive` **first**; the B-layer (`mediators()`) is computed **second** and is *handed* the node burdens (injected into `out[]`), so **B-layer state nodes can read node burdens, but node-layer nodes cannot read B-layer mediators.** This dictates which layer the muscle machinery lives in (answer: B-layer).
- **Anchoring is mediators-only.** `solveOffsets` restricts `offsettable` to `bLayer.mediators`. State nodes and hallmark burdens are **not** anchorable. ⇒ anything DEXA must anchor has to be a **mediator**.
- **The `stateAugment` precedent.** A latent integrated state node may inject into an observable mediator: `out[mediator][k] += coeff·out[fromState][k]`, applied in the per-age march. This is exactly how `beta-cell-decline` (state) drives the age-rise of `HbA1c` (mediator) while HbA1c's *baseline stays flat* — the canonical "flat baseline + emergent decline" pattern this design copies for muscle.
- **Route-once / no double-count.** `chronic-inflammation`'s saturating self-dynamic already lumps unattributed endogenous inflammaging; any new driver edge into it must decompose OUT of the self-dynamic, not stack on top.
- **Treatments perturb mediators only.** `txByMed` keys on `tx.to` ∈ mediator ids; `applyTreatment` does `absShift`/`pctReduction`. There is **no treatment→node and no treatment→cause path today.** The CV term (§3) needs one of these to be built.

---

## 1. The pieces and how they compose

```
                 [exogenous inputs]            [hallmark node layer — computed first]
  physicalActivity ───────────┐        chronic-inflammation ─┐  stem-cell-exhaustion ─┐
  calorieBalance ──┐          │                              │                        │
                   ▼          ▼                              ▼ (node burdens injected) ▼
            ┌───────────────────────────── B-LAYER ───────────────────────────────────────┐
            │  glp1 tx ──(absShift)──► BMI ──► {SBP→CVD, HbA1c, CVD-resid, allcause-Jcurve} │
            │  glp1 tx ──(absShift)──► leanMassIndex ◄── stateAugment ── muscle-loss(∫rate) │
            │                              │                                   ▲            │
            │   DEXA anchor ──────────────►│  (offsettable mediator)           │ rate terms │
            │                              ├──► falls   (migrated from sarcopenia→falls)     │
            │                              └──► allcause (modest muscle-reserve slice)       │
            │  glp1 tx ──(NEW treatment→node OR treatment→cause)──► CV/inflammation residual │
            └─────────────────────────────────────────────────────────────────────────────┘
```

Three coordinated pieces, each independently shippable but designed together:

- **§2 — Body-composition observables + muscle reserve** (the centerpiece; DEXA + sarcopenia paradox + sarcopenia de-pegging in one).
- **§3 — Weight-independent CV/inflammation term.**
- **§4 — DEXA input/UI surface** (rides on §2's mediators).

---

## 2. Body composition + the muscle/lean-mass reserve

### 2.1 New mediator: `leanMassIndex` (appendicular lean mass index, ALMI, kg/m²)

- **Observable, DEXA-anchorable.** ALMI is the standard DEXA-derived sarcopenia quantity (EWGSOP2 mass cutpoints; FNIH ALM). Making it a *mediator* (not a state node) gives DEXA anchoring for free via `solveOffsets`.
- **Baseline held FLAT at the young-healthy value** (rough placeholders, to be calibrated by `graph-node-seeder`: ~8.5 kg/m² male, ~6.5 female), exactly like HbA1c's flat 5.3% baseline. **No age-sigmoid.**
- **The age-DECLINE EMERGES** from a `stateAugment`: `leanMassIndex += (−coeff)·muscle-loss`. Calibrated so the emergent trajectory reproduces the population ~1–2%/yr loss after 50 (Cruz-Jentoft 2019, EWGSOP2 p.23) — verified against the curve, never pegged to it.

### 2.2 New B-layer state node: `muscle-balance` (signed, bounded `∫rate·dt`, initial 0)

> **Rev 2 (2026-06-16, user): bidirectional + bounded.** The earlier draft made `muscle-loss` a one-sided (≥0) atrophy state attenuated by activity — which caps ALMI at the young-healthy baseline and can't represent a trained individual *above* the population mean. Restructured to a **signed `muscle-balance`** state (+ = training surplus, − = atrophy deficit) so exercise genuinely *builds* muscle, not just slows loss. This also folds in Codex's clamp requirement: the state is bounded `[−atrophyFloor, +hypertrophyCeiling]` via a new optional `floor`/`cap` on state-node accumulation (E2+).

`rate = anabolic − catabolic`, where:
- `catabolic = (intrinsicAtrophyBase + c_infl·chronic-inflammation + c_scx·stem-cell-exhaustion) · (1 − a_pa·activityFactor)` — always ≥ 0; reads the **node burdens** `chronic-inflammation` + `stem-cell-exhaustion` (already `coupling → sarcopenia`, so the biology is in the graph — we re-home it onto the integrated muscle state). Activity *attenuates* it (you lose muscle slower when trained).
- `anabolic = c_an·activityFactor` — resistance/MVPA training builds muscle; bounded because `muscle-balance` is capped at `+hypertrophyCeiling` (can't hypertrophy without limit).
- `activityFactor ∈ [0,1]` rises with `(physicalActivity − popMean)`.
- **State clamped to `[−atrophyFloor, +hypertrophyCeiling]`** — Codex's no-runaway requirement, now load-bearing in both directions.

`leanMassIndex += k·muscle-balance` (stateAugment, **positive** coeff now: + balance raises ALMI, − lowers it). At default inputs the net is catabolic (population sedentary mean) ⇒ emergent age-decline reproduces ~1–2%/yr after 50.

- **Does NOT read `leanMassIndex`, BMI, or any ALMI-affected mediator** — keeping `muscle-balance` upstream-only avoids a feedback loop through the offsettable `leanMassIndex` that could destabilize the `solveOffsets` fixed point (see §7).
- This makes **physical activity a first-class lean-mass driver** (the edge the user asked for) with the correct *integrated* dynamics: training raises the stock over time and detraining lets catabolism resume — not an instantaneous algebraic snap. Quantually anchored to Locatelli 2024 (supervised resistance training recovers ~3 kg lean).
- `intrinsicAtrophyBase` is a small constant (like `beta-cell-decline`'s intrinsic attrition) — defensible as genuine intrinsic-aging muscle loss; calibrated so baseline ALMI decline matches population data.
- **Precedent:** structurally a twin of `beta-cell-decline` (intrinsic base + upstream feedback, augmenting an observable mediator).

### 2.3 GLP-1 / caloric-deficit lean-mass penalty

GLP-1's incremental lean loss is **the intervention deviation on top of the emergent baseline.** Locatelli 2024: ~10% of GLP-1 weight loss is lean mass (~6 kg of a ~15–24% loss). For the modeled ~−3.0 BMI (~8.7 kg) semaglutide lever, ~10% lean ⇒ ~0.87 kg lean ⇒ ΔALMI ≈ −0.30 kg/m² (ref height 1.7 m).

**Decision point (D1) — how GLP-1 reaches `leanMassIndex`:**
- **(A) Multi-target treatment (recommended).** Extend a treatment to carry an array of effects: `glp1 = [{to:BMI,absShift,−3.0}, {to:leanMassIndex,absShift,−0.30}]`. Small, contained, *general* engine change (future agents with multiple mediator effects benefit). One treatment id, one timeline toggle.
- **(B) Second treatment entry** `glp1-lean → leanMassIndex` applied in tandem. No engine change but hacky (two toggles for one drug; can desync).
- **(C) Tie lean loss to the active caloric deficit** (a `muscle-loss` rate term reading negative BMI deviation or calorieBalance<0). Most *general* (captures CR/fasting lean loss too) but risks penalizing constitutionally-lean people and conflates level vs. rate of loss. Defer as a refinement.

Recommended: **(A)** for GLP-1's fixed fraction now; note **(C)** as the principled generalization later. Resistance-training preservation is already handled structurally via §2.2 (physicalActivity in the `muscle-loss` rate), matching the "pair GLP-1 with resistance training" guidance.

### 2.4 Mortality wiring (the reserve path)

- **`leanMassIndex → falls` (v1 — the ONLY new mortality edge).** *Migrate* the existing `sarcopenia → falls` edge (`nodeLogLinear`, β=0.6366 from Yeung 2019 OR 1.89) onto the new observable. Low ALMI ↑ fall/fracture mortality. Re-normalize so it's ×1 at baseline ALMI. Needs a mediator-source analogue of `nodeLogLinear` (a `medLogLinear`/threshold form, on the `causeEdgeMult` path) — see §5. This edge is *proven, tiny (ΔLE ~0.035), and safe* — it just re-homes existing in-model mortality from a latent age-sigmoid onto an observable.
- **`leanMassIndex → allcause` — DEFERRED (Codex).** Sarcopenia's ~2–3× all-cause association bundles disability/comorbidity/reverse-causation/inactivity/malnutrition — exactly the trap the disabled `betaByCause` fell into, in miniature. **Do not ship until a comorbidity-adjusted, route-decomposed anchor is in hand.** Engine-wise it is also *not* the same change as the falls edge: `target:"allcause"` flows through `allcauseEdgeMult()`, not `causeEdgeMult()`, so it needs a separate mediator-source all-cause path. Deferring it keeps v1's engine surface to the single `causeEdgeMult` form.
- **Do NOT** resurrect the cause-agnostic `betaByCause` multiplier on every cause. The cause-agnostic "diminished reserve" slice stays in the residual until a true multi-driver reserve node exists (PROJECT-NOTES deferred item (c)). This build delivers the *muscle-specific, observable, falls-channel* part only.

### 2.5 What happens to the hallmark `sarcopenia` node?

It is currently an age-sigmoid `role:driver` feeding only `sarcopenia→falls`. Options:
- **(i) Retire it as a mortality driver**, migrate its falls edge to `leanMassIndex`, and let the hallmark node become a thin algebraic readout of low ALMI for graph-display continuity (or deprecate). **Recommended** — it de-pegs sarcopenia and removes a redundant latent.
- **(ii) Keep it, derive its burden from leanMass.** Cleaner graph display but needs the node→mediator-read bridge that the layering forbids (node computed before mediator). ⇒ only feasible if sarcopenia burden is recomputed in the B-layer. More work, little gain.

Recommended **(i)**. Net effect: the 2026-06-11 migration target ("`sarcopenia` age-sigmoid → `∫rate·dt`") is achieved, just relocated to the B-layer where the observable + anchoring live.

---

## 3. Weight-independent cardiovascular / anti-inflammatory term

SELECT (Lincoff 2023, n=17,604, non-diabetic obese + CVD): MACE HR ~0.80, CRP −37%, and mediation analyses show the MACE benefit is **not fully explained by weight loss**. The current `glp1` lever gives only the BMI→{SBP,CVD,...} path, so it under-credits this.

**Decision point (D2) — where the residual benefit attaches:**

- **(B) Route through `chronic-inflammation` (recommended, mechanistic).** GLP-1 reduces the `chronic-inflammation` node burden; the existing `coupling` edges `chronic-inflammation → atherosclerosis(→cardiovascular)`, `→ cancer`, `→ neurodegeneration`, etc. then propagate a multi-system anti-inflammaging benefit — consistent with the wiki's framing that the anti-inflammatory effect is the aging-relevant one ([[interventions/pharmacological/glp1-agonists]] § anti-inflammatory). **Requires a `treatment→node` bridge** (new). **Route-once caution:** chronic-inflammation's self-dynamic lumps endogenous inflammaging; a GLP-1 *intervention* edge that only deviates from baseline when active (×1 at baseline) is invariance-safe, but the magnitude must be calibrated against the node-burden scale, not CRP linearly (CRP −37% ≠ 37% burden reduction — the node is a 0→1 reserve-depletion latent).
- **(D) Direct `glp1 → cardiovascular` cause multiplier (simpler, more directly trial-calibratable).** A capped hazard reduction representing "MACE −20% total, minus the portion already delivered by the BMI path, = this residual." Easy to calibrate straight to SELECT; but it's a black-box CV term that misses the cancer/neuro anti-inflammaging spillover, and still needs a new `treatment→cause` path.

**Recommendation (revised after Codex): (D) — direct `treatment→cardiovascular` residual.** Codex's argument is decisive: SELECT delivers a *cardiovascular* outcome (MACE) plus a CRP *biomarker* — it does **not** deliver cancer / neurodegeneration / infection *mortality* endpoints. Routing through `chronic-inflammation` necessarily fans the benefit into all of that node's `coupling` targets (cancer, neuro, etc.), crediting GLP-1 with mortality reductions the trial never measured — mechanistic extrapolation stacked on a self-dynamic that already lumps endogenous inflammaging. The wiki's own framing agrees the human anti-inflammatory mechanism is `#gap/no-mechanism` and the cancer/senescence links are speculative/preclinical. So:
- **v1.1 ships (D):** a capped `glp1 → cardiovascular` hazard reduction, calibrated to **SELECT MACE −20% *minus* the cardiovascular ΔLE the BMI path already delivers** (so the two don't double-count the weight-mediated portion). Needs a `treatment→cause` path (E7).
- **(B) route-through-inflammation stays a documented stub** — revisit only with a published weight-independent mediation decomposition AND multi-system (not CV-only) outcome evidence to justify the cancer/neuro spillover. The stubbed `… → chronic-inflammation` driver channel is the eventual home, but not on this evidence.

This piece is **independent of §2** and can ship separately; sequencing in §6.

---

## 4. DEXA input surface

DEXA's headline outputs and their model homes:

| DEXA output | Model target | Status in this design |
|---|---|---|
| Appendicular lean mass index (ALMI, kg/m²) | `leanMassIndex` mediator (§2.1) | **v1 — centerpiece** |
| Total/regional fat mass, body-fat % | refine adiposity (see below) | **v1.1 — optional** |
| Visceral adipose tissue (VAT) | visceral-specific CV risk | **v1.1 — optional** |
| Bone mineral density / T-score | osteoporosis → fracture *case-fatality* | **deferred** (already a named PROJECT-NOTES § frailty candidate) |

- **v1:** add `leanMassIndex` to `LAB_FIELDS` (unit kg/m², step 0.1, plausible range ~4–12). It is offsettable by construction (it's a mediator), so DEXA anchoring works through the existing `solveOffsets` path with no solver change.
- **v1.1 fat/VAT (optional):** BMI conflates fat and lean — a muscular and an obese person share a BMI but not the risk. DEXA fat-mass / VAT could anchor adiposity directly and let the CV/metabolic edges read fat rather than BMI. This is a larger refactor (BMI→outcomes would partially become fatMass→outcomes); propose as a **follow-on**, not v1, to avoid disturbing the calibrated BMI cascade. For v1, accept that DEXA fat-mass is *displayed/anchored as a cross-check* but BMI remains the adiposity driver.
- **BMD/fracture deferred:** the osteoporosis → fracture-case-fatality decomposition (fall-risk × injury-susceptibility × case-fatality) is already itemized in PROJECT-NOTES as a falls-node candidate; out of scope here, but `leanMassIndex → falls` is the natural sibling it will later join.

**DEXA as a bundle import:** body-composition draws should also be expressible in the history-bundle importer (a `dexa`/measurement event mapping ALMI→`biomarker:leanMassIndex`), mirroring how labs map to mediators. **(Codex clarification)** This anchors the **observable mediator** at each draw via the `solveOffsets` personal-offset residual — it does **not** infer or calibrate the latent `muscle-loss` rate. A longitudinal DEXA series therefore pins the ALMI *trajectory* (multi-knot offset), which is the right and sufficient behavior; back-fitting an individual's `muscle-loss` rate from serial DEXA would be a separate state-fitting capability (not in scope). Minor compileTimeline/bundle-schema addition.

---

## 5. Engine changes required (enumerated for review)

| # | Change | Size | Risk |
|---|---|---|---|
| E1 | New mediator `leanMassIndex` (flat baseline, sd) in `bLayer.mediators` | small | low |
| E2 | New state node `muscle-loss` (`rate.terms` reading 2 node burdens + physicalActivity + intrinsic base) | small | low — well-precedented (`beta-cell-decline`) |
| E3 | New `stateAugment` `muscle-loss → leanMassIndex` (negative coeff) | tiny | low |
| E4 | **Multi-target treatment** support (D1-A): `treatment.effects:[{to,form,amount}]` OR keep single-`to` + 2nd entry (D1-B) | small | low–med (touches `txByMed`/`applyTreatment`/timeline compile + `validate-graph`) |
| E5 | New mediator-source cause-edge form `medLogLinear` (or threshold) for `leanMassIndex→falls`, `→allcause`; migrate `sarcopenia→falls` β onto it | small | med — touches `causeEdgeMult`/`edgeMultFor` + cause-edge invariance |
| E6 | Retire/relocate hallmark `sarcopenia` node mortality role (§2.5-i) | small | med — re-baseline the tiny sarcopenia ΔLE (0.035) onto leanMass; keep total invariant |
| E7 | **`treatment→node` bridge** (D2-B) OR `treatment→cause` (D2-D) for the CV term | med | med — genuinely new path; needs invariance proof (×1 at baseline) |
| E8 | `LAB_FIELDS` += leanMassIndex (+ optional fat/VAT); bundle-import mapping | small | low — UI is data-driven from `B.treatments`/`LAB_FIELDS` |

All edges/augments are **deviation/ratio-normalized to ×1 (or +0) at baseline**, so baseline LE is invariant by construction — the same discipline that lets BMI/HbA1c/LDL edges coexist. New `test.mjs` assertions (§7) pin this.

---

## 6. Calibration plan + provenance

Per `sops/adding-causal-graph-nodes.md`, drafted by `graph-node-seeder` (ships `provenance:"placeholder"`), promoted to `"calibrated"` by `graph-node-validator`:

- **ALMI baseline + decline:** young-healthy ALMI (NHANES/population DEXA); ~1–2%/yr loss after 50 (Cruz-Jentoft 2019 EWGSOP2). Calibrate `muscle-loss` rate + augment coeff so emergent ALMI matches.
- **`muscle-loss` driver coeffs:** chronic-inflammation / stem-cell-exhaustion contributions partitioned against the intrinsic base (avoid over-attribution; these are direction-anchored, magnitude-calibrated).
- **physicalActivity preservation:** Locatelli 2024 (resistance training recovers ~3 kg lean) sets the `c_pa` scale.
- **GLP-1 lean penalty:** Locatelli 2024 ~10% lean fraction ⇒ ΔALMI ≈ −0.30 for the −3.0 BMI lever.
- **`leanMassIndex→falls`:** Yeung 2019 OR 1.89 (already in-model), re-expressed on ALMI deviation.
- **`leanMassIndex→allcause`:** the conservative *independent* muscle slice — the calibration-critical number; cross-check against sarcopenia-mortality studies that adjust for comorbidity/disability, NOT the crude 2–3× HR.
- **CV/inflammation term:** SELECT (Lincoff 2023) MACE −20%, CRP −37%; calibrate combined CV ΔLE with a defensible weight-mediated vs. -independent split.
- **No new CDC pull needed** unless §2.5 changes a cause band's mass (it shouldn't — falls Rmax unchanged; we move the *driver*, not the band).

---

## 7. Baseline-LE-invariance + new tests

Mirroring the existing BMI/treatment tests:
- `leanMassIndex` at baseline inputs == baseline (no offset, no tx) ⇒ ΔLE 0 (1e-9).
- `muscle-loss` accumulates from 0; at baseline inputs the emergent ALMI matches the target population decline within tol; contributes 0 net mortality at baseline.
- GLP-1 tx: lowers `leanMassIndex` by ~0.30 AND lowers BMI by 3.0; **net ΔLE is BMI-benefit minus muscle-penalty** (assert net still positive for a baseline-obese person, but *smaller* than the BMI-only +1.09 yr measured 2026-06-16 — the paradox is visible).
- High physicalActivity reduces `muscle-loss` ⇒ preserves `leanMassIndex` ⇒ recovers part of the GLP-1 muscle penalty (assert the GLP-1 net ΔLE is larger with resistance training than without).
- CV term: GLP-1 lowers cardiovascular hazard beyond the BMI path (assert combined CV ΔLE > BMI-path-only).
- Re-baseline the existing `sarcopenia ΔLE 0.0346` test onto `leanMassIndex→falls` (total preserved).

---

## 8. Staging

- **v1 (this build):** §2 (leanMassIndex mediator + muscle-loss state + stateAugment + GLP-1 lean penalty + falls migration + conservative allcause slice + sarcopenia node retirement) **and** §4 v1 (DEXA ALMI anchoring). This is the coherent unit — it de-pegs sarcopenia, lights up the disabled frailty path correctly, and makes the GLP-1 paradox visible.
- **v1.1:** §3 CV/inflammation term (independent; can land just before or after v1).
- **Follow-on:** DEXA fat-mass/VAT adiposity refactor; caloric-deficit→lean generalization (D1-C); BMD→fracture; the broader multi-driver reserve node (PROJECT-NOTES deferred (c)).

---

## 9. Open questions — resolved by Codex (gpt-5.5, 2026-06-16)

1. **D1 (GLP-1 → leanMass):** multi-target treatment (E4-A) vs. second entry (E4-B)?
   → **Codex: E4-A.** Add backward-compatible `effects:[{to,form,amount}]` multi-target support. Do **not** create a `glp1-lean` second entry. Keep generalized caloric-deficit lean loss (D1-C) deferred.
2. **D2 (CV term):** route-through-`chronic-inflammation` (E7 node bridge) vs. direct `treatment→cause` CV multiplier?
   → **Codex: direct `treatment→cardiovascular` (D2-D),** calibrated to SELECT *minus* the existing BMI-mediated CV path. Keep GLP-1→inflammation as a stub until mediation decomposition + multi-system calibration. (§3 revised accordingly.)
3. **`leanMassIndex→allcause` magnitude** — ship it in v1?
   → **Codex: NO. Ship `leanMassIndex→falls` only; defer all-cause.** (§2.4 revised.)
4. **Sarcopenia node:** retire as mortality driver vs. keep + derive?
   → **Codex: retire as mortality driver** (§2.5-i); re-home `chronic-inflammation`/`stem-cell-exhaustion` into `muscle-loss`; keep `sarcopenia` for display/deprecated only (deriving its burden needs a layer-order change not worth it).
5. **Layer choice:** mediator+stateAugment vs. state-node + extend `solveOffsets`?
   → **Codex: mediator + stateAugment is correct.** Do not extend `solveOffsets` to arbitrary state nodes yet.
6. **Invariance + fixed-point** for the new falls edge / multi-effect treatment?
   → **Codex: holds for the proposed v1** *provided* every new edge ratios against the **emergent** `medBaseline` (not the flat YAML curve) and `muscle-loss` does **not** read `leanMassIndex`/BMI/any ALMI-affected mediator (it doesn't — §2.2). No fixed-point break. Add tests: ALMI baseline-equality, ALMI anchor convergence, GLP-1 BMI+ALMI joint effect, and removal of the old `sarcopenia→falls` ΔLE. (§7 covers these.)

---

## 10. Wiki grounding

- [[sarcopenia]] — ALMI cutpoints (EWGSOP2/FNIH), ~1–2%/yr mass loss after 50, 2–3× mortality, inflammaging + satellite-cell-exhaustion + mitochondrial mechanisms.
- [[interventions/pharmacological/glp1-agonists]] — § sarcopenia paradox (Locatelli 2024 ~10% lean / ~6 kg, resistance-training recovers ~3 kg); § anti-inflammatory mechanism + SELECT CRP −37% / MACE −20% (Lincoff 2023).
- [[stem-cell-exhaustion]], [[chronic-inflammation]] — upstream `muscle-loss` drivers (already `coupling → sarcopenia`).
- [[frailty]] — distinguished from sarcopenia; the cause-agnostic reserve stays deferred.
- `model/PROJECT-NOTES.md` § frailty — the disabled machinery + the replacement bar this build clears; `mortality.frailty.betaByCause_DISABLED_gap`.
