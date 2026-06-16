# Residual → freezable cause-node conversion (design / scope)

**Status:** BUILT (2026-06-15) — Codex-reviewed (Rev 1 folded), graph-node-seeder-built, parent-verified. All invariance gates pass (baseline LE M 77.458855 / F 82.117850 unchanged; max|Δhazard| ~1e-16; B_res@90=0.5, @130=0.970; residual-share preserved; freeze-all-incl-residual @40 → M 433.7 / F 813.7 yr via the §3G tail; 280/280 tests). Ships `calibrated`.
**Goal:** convert the last age-keyed mortality channel — `mortality.residual` — into a reserve-depletion **cause node** so it is *freezable/slowable* like the other 9 causes. This is the lever that lets hypothetical interventions push **max lifespan past 130** (the horizon was extended 130→200 on 2026-06-15; the residual flat-hold at 0.53/yr is currently the binding, un-slowable cap).

This **finishes the v0.4 reserve-depletion migration**: v0.4 (2026-06-09) converted the 9 disease causes to reserve-depletion burdens feeding the odds link `Rmax·B/(1−B)`, but *deliberately left the residual channel as its own age table* (`causal-graph-parameters.md` § Integrator note). This converts that last channel.

It is an **Op B** (new terminal pathology cause-node) per `sops/adding-causal-graph-nodes.md` §4 — except it is a **refactor of an already-calibrated channel**, not new science, so it is invariant-by-construction (to FP tolerance) and ships **`calibrated`** (not `anchored` — the inherited residual carries documented precision/provenance gaps; see Rev 1).

> **Rev 1 (Codex gpt-5.5/high, 2026-06-15) is folded at the bottom and supersedes §1–7 where they conflict.** Read it.

---

## 1. Current residual mechanism (what must be reproduced exactly)

`engine.mjs`:
- `residTable = MODEL.mortality.residual.byAgePerYear[sex]` — a **per-year** table (111 entries, ages 20–130; male 0.00011 @20 → 0.01647 @90 → 0.53351 @130). `interp()` is step-hold; with a per-year table it returns the exact per-year value, and **holds the 130 value flat past 130**.
- `interp()`/`curveT()` are **PCHIP** (monotone cubic), exact through every annual anchor and endpoint-clamped (flat) past 130 — so a per-year table is reproduced exactly at the integer grid the engine evaluates.
- Line 541: `resid = interp(residTable, age) * edgeMultFor("residual", k, age)`
- Line 563: `parts.residual = bracketMult * frailtyMultFor("residual") * resid`

So the residual hazard at age k is:
```
H_resid(k) = bracketMult(k) · frailtyMultFor("residual")(k) · edgeMultFor("residual",k) · residTable(age)
```
Facts that simplify the conversion (verified 2026-06-15):
- `frailty.betaByCause = {}` → `frailtyMultFor("residual")` uses the **default** frailty beta (`fr.beta`). Same default the new cause will use (cn="residual").
- **No** edges target `"residual"` today → `edgeMultFor("residual") = 1`.
- `"residual"` is already the last entry in `CAUSE_KEYS` (`engine.mjs:152`) and the CoD chart already renders a "residual" band.

---

## 2. Proposed conversion

### 2a. New node (`params.json` / `causal-graph-parameters.md`)
```jsonc
{ "id": "residual-aging", "label": "Residual aging (unmodeled)",
  "layer": "phenotype", "tractability": "low", "provenance": "anchored",
  "role": "mortality-cause", "mortalityCause": "residual",
  "citation": "CDC WONDER 2019 D76 residual (all-cause − modeled causes − extrinsic)",
  "wiki": "model/cod-residual-partition-2019",
  "definition": "<see §2e — explicit prose of what this residual aggregates>",
  "curve": { "form": "table", "byAge": [<PER-YEAR B_res male>], "female": { "byAge": [<PER-YEAR B_res female>] } } }
```
### 2b. Register as a cause
```jsonc
"mortality": { "causes": { ...,
  "residual": { "node": "residual-aging",
    "RmaxPerYear": { "male": 0.016474509, "female": 0.014194384 },   // = residTable(90), FULL precision (Codex: don't truncate)
    "cdc": "residual remainder; 2019-harmonized; see model/cod-residual-partition-2019.md" } } }
```
Remove the old `mortality.residual` block and the special-case engine path (lines 541 + the `parts.residual = …` at 563); `"residual"` now flows through the `causeNames` loop (`engine.mjs:555–562`) exactly like cancer.

### 2c. Exact-invariance calibration (the core algebra)
Anchor at **B = 0.5 @ 90** (same odds-link anchor as the 9 causes ⇒ passes the existing "B<1 at 130" test and is consistent):
```
Rmax_res = residTable(90)                     # M 0.016474509 / F 0.014194384 (FULL precision)
h(age)   = residTable(age) / Rmax_res
B_res(age) = h(age) / (1 + h(age))            # reserve-depletion fraction, ∈ [0,1)
```
Then the odds link reproduces the table **exactly**:
```
Rmax_res · B_res/(1−B_res) = Rmax_res · h = residTable(90) · residTable(age)/residTable(90) = residTable(age)   ✓
```
**B_res must be a PER-YEAR table (111 entries), not decade-spaced.** Because `B/(1−B)` is nonlinear, a decade table + interpolation would NOT reproduce the per-year `residTable` between anchors and would break exact invariance. A per-year table is exact at the integer grid the engine evaluates, under either step-hold or linear interpolation.

Past 130: `B_res` held flat at `B_res(130)=0.970` → `Rmax_res·0.970/0.030 = 0.532 ≈ residTable(130)` → same flat-hold as today — **but now freezable**.

### 2d. What is preserved (⇒ baseline LE invariant by construction)
| Factor | Old (residual path) | New (cause loop) | Same? |
|---|---|---|---|
| age base | `residTable(age)` | `Rmax_res·B_res/(1−B_res)` | exact (2c) |
| bracket mult (activity/BMI) | `bracketMult` | `bracketMult` | ✓ |
| frailty mult | `frailtyMultFor("residual")` | `frailtyMultFor("residual")` | ✓ |
| edge mult | `edgeMultFor("residual")` | `edgeMultFor("residual")` | ✓ |
| decomposition key | `parts.residual` | `parts.residual` (cause loop) | ✓ |

### 2e. Defining what the residual represents (node `definition` field)

Because the residual is a **heterogeneous aggregate**, not a single mechanism, the node must carry an explicit `definition` (surfaced in the viz "how it computes" / node-info panel) so a reader — and anyone freezing it — knows exactly what they're moving. Proposed content:

- **What it is:** the per-sex × age hazard of all deaths **not individually modeled as their own cause node** — the CDC "all other causes" remainder at the 2019-harmonized baseline. Derived as `all-cause − Σ(modeled causes) − extrinsic` (CDC WONDER 2019 D76).
- **What's in it (the irreducible grey band, per `cod-residual-partition-2019.md` §D):** ill-defined / unattributable deaths (R95–R99), medical & surgical complications (Y40–Y84), residual symptoms, and the long tail of minor individual causes below the modeling threshold.
- **What's NOT in it:** the 9 modeled disease causes (cardiovascular, cancer, neurodegeneration, infection, diabetes, COPD, CKD, liver, falls) and extrinsic/accidents — each is its own channel. (It cannot exclude itself; the residual *is* the complement of those.)
- **It shrinks over time:** the CoD-residual-partition campaign keeps attributing buckets (hypertensive disease, the frailty bucket, obesity, …) to driver nodes, so the residual node's mass *decreases* as the model matures; its `definition` + `Rmax_res`/`B_res` are recomputed on each partition step.
- **Freeze caveat:** because it bundles many unrelated processes, "freeze residual" = a coarse "halt all *unmodeled* aging" scenario lever — the **least mechanistically interpretable** freeze in the model. Document this in the `definition` and the panel so it isn't read as a targeted intervention.

This makes the node self-documenting and keeps the "what is the grey band, really?" answer co-located with the parameters, rather than only in the partition design note.

---

## 3. The new capability

`B_res` escalates with age, so the freeze operator (`prim -= efficacy·ΔT`, holds B at the start-age value) now applies. Freeze residual @40 ⇒ `B_res` held at ~0.024 ⇒ residual hazard ~0.0004/yr flat ⇒ combined with frozen disease nodes, survival runs well past 130 and the (now-200) horizon captures it. Residual appears in the viz "Node freeze / slow" dropdown automatically (filter is `provenance !== "stub"`).

Semantics: freezing residual = "halt all *unmodeled* aging" — an explicit, labeled scenario lever, not a claim of mechanism.

---

## 4. No-age-pegging stance

This is **age-pegging-neutral**: residual was already an age table; it stays a table-form burden, just restructured as a freezable node (exactly the form the other 9 causes are in *today*). It is **not** an Op C, so the "age-correlation must emerge from ∫rate·dt" rule does not bind here. True de-pegging (rate-form) is a separate, model-wide migration that will hit all 10 causes — and residual is the **hardest** to de-peg exactly, because an empirical CDC curve cannot be reproduced exactly by a simple `base + self` rate (a fit would introduce error and **break exact invariance**). So residual may remain the canonical table-form cause, or migrate last. Flagged, not solved here.

---

## 5. Interaction with the CoD-residual-partition campaign

The partition (`model/cod-residual-partition-2019.md`) is *shrinking* residual by attributing buckets to driver nodes (Group A folds; the frailty bucket is its own Op B onto sarcopenia). Sequencing question (open): **partition first, then convert** (convert the smaller residual) vs **convert first, recalibrate on each partition step**. Recommend: convert on the *current* residual now (delivers the lever), and have the validator recompute `Rmax_res` + `B_res` whenever a later partition step changes the residual magnitude. The conversion does not block or conflict with the partition — it only changes residual's *form*, not its mass.

---

## 6. Build + test plan

1. `graph-node-seeder`: generate per-year `B_res` tables (M+F) from the current per-sex `residTable`, add the node + `mortality.causes.residual`, remove `mortality.residual` + the special engine path; rebuild (`build-params` → `build-app`).
2. Invariance gates (must hold):
   - **Hazard-array identity** — `hazard[]` byte-identical pre/post conversion at population baseline, both sexes (strongest check).
   - **Baseline LE** M **77.459** / F **82.118** unchanged (existing pins).
   - `parts.residual` share unchanged at ages 50/70/90/110/130.
   - `B_res < 1` at 130 (extend the existing cause-reserve test).
3. **New-capability test:** freeze all 10 causes (incl. residual) @40 ⇒ `S(150)` substantial, `S(200) > 0`, LE materially > 130 (the lever works).
4. `graph-node-validator`: cross-check `Rmax_res` + `B_res` against the 2019-harmonized residual in `cod-residual-partition-2019.md`, confirm the odds-link algebra + invariants, promote to `anchored`, re-baseline any test that legitimately moved (none should).

---

## 7. Risks / open questions

- **R1 — interp mode for `curve.form:"table"`.** Confirm `curveT` table behavior; per-year `B_res` is exact under either step-hold or linear interp, but verify there's no decade-snapping that would corrupt a per-year table.
- **R2 — orphan node in the graph viz.** `residual-aging` has no upstream edges → renders as a disconnected node. Acceptable (it's the unmodeled remainder), but confirm layout/hover don't break; consider a cosmetic "unmodeled" grouping.
- **R3 — stale references to `mortality.residual`.** Grep engine/viz/cli/mediators/build-params for `mortality.residual` and `residTable`; ensure removal is complete and `MODEL.mortality.residual.byAgePerYear` isn't read elsewhere (e.g., validation, CoD legend).
- **R4 — sequencing vs partition** (§5): convert-now-recalibrate-later vs partition-first. Recommend convert-now.
- **R5 — provenance.** Ships `anchored` (exact refactor of a calibrated channel), not `placeholder` — confirm the validator accepts "refactor, invariance-proven" as an anchored path rather than requiring a fresh β derivation.
- **R6 — `definition` field surfacing (§2e).** The field is engine-inert metadata; confirm the viz node-info / "how it computes" panel renders it (or add the rendering) so the residual's meaning is actually visible, not just in JSON. Decide whether `definition` becomes a general optional node field (useful for other aggregate nodes) or is residual-specific.
- **Q1 — node id/label**: `residual-aging` vs `unmodeled-aging` vs `residual-mortality`. (`mortalityCause` MUST stay `"residual"` to match `CAUSE_KEYS` + frailty + the CoD band.)

---

## 8. Rev 1 — Codex review (gpt-5.5/high, 2026-06-15), folded

Codex confirmed the core: the calibration algebra is correct (`B=h/(1+h) ⇒ B/(1−B)=h ⇒ Rmax_res·B/(1−B)=residTable`), every multiplicative factor (bracket/frailty/edge/`parts.residual`/flat-hold-past-130) is preserved with no double-application, `betaByCause` is empty + no `residual` edges today, and the no-age-pegging stance is fair (this neither helps nor hurts pegging; a `base+self` rate can't reproduce the non-monotonic empirical curve, and anything that could would be a hidden clock). Issues to fix before/at build:

**Blockers / must-fix**
1. **Truncation returns at the horizon for the freeze scenario — RESOLVED via closed-form tail + display cap (user decision 2026-06-15).** Freezing the disease+residual causes drives survival far past any array bound: zero all disease+residual but keep accidents → terminal hazard = the accident floor 0.00178/yr → **S(200)=0.76, true ceiling ≈607 yr** (the 200-array alone reports 180 — badly truncated); zero accidents too → hazard 0 → **infinite**. No array length fixes this. **Decided design:**
   - **(a) Closed-form exponential tail** for the LE math: `LE = AGE0 + Σ S[k]·DT (to AGE1) + S(AGE1)/h(AGE1)`, valid because every channel is flat-held past ~130 ⇒ `h` is constant past the horizon. This yields a *true, untruncated* LE for any finite terminal hazard (computes the 607-yr ceiling exactly from the 200-array + one term). The array horizon (200) now only governs the **visible survival curve**, not the number.
   - **(b) Display cap**: when LE exceeds a threshold (≈**300**, tunable) show **"300+"** — a modeled 607 yr is false precision (it's just "accidents are the only thing left", not biology).
   - **(c) Infinity guard**: when `h(AGE1) ≤ ε` (all causes incl. extrinsic zeroed) show **"∞ — no modeled mortality"**, not a number.
   This supersedes the earlier "extend the horizon" framing: the horizon work removed the *silent* 130 truncation, and the tail removes truncation *entirely*; the display cap + ∞ guard handle the regimes where the model's quantitative resolution runs out. Tests: tail-corrected LE matches a brute-force long-horizon integral; cap/∞ states trigger at the right thresholds.
2. **Driverless cause-node FAILS validation** — the app self-check (`aging-simulator.html:8458`) and the SOP (`adding-causal-graph-nodes.md:252`) both require a mortality-cause node to have an inbound driver edge. `residual-aging` has none. Resolution: add a **documented residual exception** to both the app self-check and the SOP (the residual is definitionally an unmodeled remainder with no single driver), rather than inventing a fake edge.
3. **Hard-coded node count (23)** in two places — `build-params.mjs:39` and the app self-check (`aging-simulator.html:8455`). Conversion makes node 24. Update both.

**Correctness / semantics**
4. **Residual is non-monotonic** (M 0.002590@70→0.002286@75; F 0.001855@70→0.000998@76). A freeze in a falling region *raises* mortality vs baseline (the `prim -= efficacy·ΔT` foot-gun, ΔT<0) — the **same issue as `#gap/freeze-nonmonotonic-liver`**. Resolution: adopt the principled engine fix (clamp each per-step freeze contribution to ≥0) here too, and document; add a test at a falling-region freeze age.
5. **Partial "slow" (efficacy<1) depends on the `Rmax` anchor.** Full freeze preserves the start-age hazard regardless of `Rmax`, but partial slowing acts linearly on `B` then nonlinearly through `B/(1−B)`, so the **B=0.5@90 anchor is a consequential scenario assumption, not just normalization.** Document it; keep the @90 anchor for consistency with the 9 causes unless there's reason otherwise.
6. **`anchored` → `calibrated`.** The inherited residual has documented precision/provenance gaps, so per the SOP "no open gap ⇒ not anchored" rule, ship `calibrated`. (Fixed inline.)
7. **"byte-identical hazard" → numeric tolerance.** FP makes the arrays differ by ~1e-15; LE stays equal at summation precision. Assert `max|Δhazard| ≤ 1e-14` (both sexes), not bit-equality. (Fixed in §6 intent; update the test wording.)
8. **`definition` is not rendered** — the node card uses a `NODE_INFO` map and ignores `node.definition` (`aging-simulator.html:7013`). Add a `NODE_INFO["residual-aging"]` entry and/or render+escape `node.definition`. (Refines R6.)
9. **§2e wording** — residual excludes the 9 named causes + extrinsic, not itself. (Fixed inline.)
10. **`Rmax` precision** — use full `0.016474509` (M) / `0.014194384` (F), not the truncated `0.016470`. (Fixed inline.)

**Completeness — also update (R3 expanded)**
11. Edit the **canonical JSON in `frameworks/causal-graph-parameters.md`** (params.json is generated); the **SOP's residual-recompute procedure** (Op A currently writes `mortality.residual.byAgePerYear` — must now regenerate the node's `Rmax_res` + dense `B_res` table on every partition step); **`age-hardcoding-audit.md`**; and **`validate-graph.mjs`** to validate every `mortality.causes.*.node` / `role` / matching `mortalityCause`. CLI + mediators are generic (safe); the CoD legend already supports `residual`.

**Net:** plan is sound in its core (calibration + factor preservation + invariance), needs the 3 blockers resolved (horizon/RMST policy, driverless-cause exception, node-count updates) and the semantics items folded before the seeder builds. The horizon/RMST policy (#1) is the one genuine design decision — it's bigger than this node and worth settling explicitly.
