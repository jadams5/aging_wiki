---
type: sop
aliases: [adding sim nodes, cause-node recipe, node-adder]
---

# SOP: adding nodes to the aging-simulator causal graph

How to add or extend a node in the simulator model (`frameworks/causal-graph-parameters.md` →
`model/` → `viz/aging-simulator.html`) **without breaking the calibration invariant or
re-introducing age-pegging.** This is the model analogue of `sops/adding-a-claim.md`: it carries
the conventions so the `graph-node-seeder` / `graph-node-validator` subagents (and the main agent)
produce consistent, defensible model changes.

> Read first: `model/PROJECT-NOTES.md` (build flow, fixed-mistakes list, §8a cause recipe) and
> `model/age-hardcoding-audit.md` (the no-age-pegging principle, the uniform node schema, the
> residual discipline). This SOP operationalizes both. When they conflict with this file, they win
> — flag the drift so this SOP is updated.

---

## 0. The three operations

A "node addition" is always one of three shapes. Pick the smallest one that fits:

| Op | When | Touches |
|---|---|---|
| **A. Extend an existing band** | the pathology shares a driver-node already in the graph (e.g. hypertensive disease, aortic aneurysm, mesenteric infarction → **cardiovascular**; Parkinson's, ALS → **neurodegeneration**; viral hepatitis → **liver**) | the cause's `cdc:` code set + its `RmaxPerYear` + the burden table + **recompute residual** |
| **B. New terminal pathology cause-node** | a real CDC cause mass with no existing band and a plausible upstream driver (e.g. a frailty/falls cause, other-respiratory) | a `mortality.causes.{name}` entry + a `nodes[]` burden node + **recompute residual** + upstream edges |
| **C. New upstream driver state-node** | a mechanism that should drive a cause as `∫rate·dt` rather than be read off an age curve (e.g. `ecm-crosslink`, `beta-cell-decline`) | a `bLayer.stateNodes[]` entry + edges; calibrated to *verify* against an anchor |

Most of the cause-of-death residual partition (`model/cod-residual-partition-2019.md`) is **Op A**
folds; the frailty bucket is **Op B**; mechanizing a driver is **Op C**.

---

## 1. The two non-negotiable invariants

Every change is gated on these. `model/test.mjs` pins both.

1. **Baseline-LE invariance.** At population-average inputs the model must reproduce empirical CDC
   life expectancy **M 77.459 / F 82.118 (2019-harmonized; was 75.815/80.862 on 2022 data before the COVID-removal)**. Op A/B *re-bucket* mortality (recomputing the residual
   keeps the all-cause total identical → LE unchanged). Op C ships **unwired** first (driver built +
   calibrated but not yet feeding a cause), so LE is provably unchanged, then wiring is a separate,
   deliberately re-baselined step. **Invariance is now numerically EXACT at every integration age**
   (not just at anchors): the residual is stored **dense** — one entry per integer age 20→130 — so
   `interp` is identity at the integration grid and the band's exact per-integer-age hazard increase
   is subtracted from the residual at that same grid (§3). After any Op-A/B fold, baseline LE must
   read **77.459 / 82.118 to ~1e-6**. If it moves at all, your residual recompute is wrong — debug it,
   **do not re-baseline**. (History: before the dense residual the residual lived on a decade grid
   while burden tables carried 75/85 anchors + the convex odds-link, leaking a sub-0.03 yr/fold
   between-anchor PCHIP drift that accumulated and was wrongly re-baselined; the dense residual,
   2026-06-11, eliminated it and restored the empirical anchor exactly.)

2. **No age-pegging.** Age is a *verification* target, never an input to a rate. A new driver
   (Op C) accumulates as `∫ rate(upstream inputs) dt`; its age-correlation must **emerge** from the
   integral (copy `ecm-crosslink` = ∫coeff·HbA1c, `beta-cell-decline` = ∫intrinsic+glucotox). The
   only permitted age-keyed term is the **explicit, labeled residual** (`mortality.residual`), and
   the residual discipline below bounds even that.

---

## 2. Research path (before touching JSON)

Same evidence discipline as the wiki itself — wiki-first, then literature, then canonical data.

1. **Wiki first.** Search the wiki for the pathology's mechanism and driver biology (atomic pages:
   the phenotype/process/pathway/hallmark it maps to). The model must not diverge from the
   *verified* `frameworks/causal-graph-data.md` edge structure — if the upstream biology lives there,
   the edge belongs there first (then it flows to the sim). Cite wiki pages by wikilink.
2. **Literature** for the **driver + rate law + sex difference + effect size** (β = ln(HR) per unit
   of the edge's natural variable). Recency search (PubMed + Europe PMC) per `sops/finding-population-evidence.md`.
   **Never free-fit** a latent — pin every dose-response to a literature anchor (the inverse-problem
   discipline; many internal parameterizations reproduce the same aggregate curve).
3. **The empirical mortality anchor** = CDC WONDER, **D76, 2019, by sex** (pre-COVID baseline;
   harmonizes with the diabetes/COPD/CKD/liver bands; see `sops/finding-population-evidence.md` and
   the working recipe). Op A/B need the cause's **per-sex × ten-year-age rate curve**, not just the
   total — `cod-2019-by-sex.tsv` has totals; the age curve needs a `group by ten-year age` pull,
   filtered to the cause's codes. **WONDER D76 gotchas proven in the pilot (apply them — don't
   rediscover):** keep the full measure set `M_1,M_2,M_3` but set **`O_aar=aar_none` when grouping by
   age** (`aar_std` is rejected: "Age Adjusted Rates cannot be produced when data is grouped by Age");
   `F_D76.V2` needs **individual ICD codes, not range strings** ("I00-I09" is rejected); **union all
   codes into ONE request per sex** so sparse young-age cells aren't suppressed (<10 deaths); the
   API **rate-limits hard** (space requests ≥15-20 s); the **113-cause-list grouping errors
   server-side** (use ICD grouping). Some I-codes are genuinely **invalid in D76** (I75, I76, I96,
   I97, I98 — not suppressed, unmapped) and are correctly excluded. Working harness: `/tmp/wonder_pull.py`.

---

## 3. Op A — extend an existing band (the common case)

1. Add the new ICD codes to the cause's `mortality.causes.{name}.cdc:` string (document what and why).
2. Re-pull the **combined** per-sex × ten-year-age rate for the *expanded* code set from WONDER.
3. Recompute `RmaxPerYear.{male,female}` = the curve's age-90 anchor rate (the §8a recipe).
4. Recompute the burden node's `curve.byAge` (+ `.female.byAge`): reserve transform `B' = h/(1+h)`
   of `h = CDC_rate/Rmax` at each age anchor, then graft the shared >90 reserve anchors
   `[90,0.5] [100,0.7039] [110,0.8497] [120,0.9307] [130,0.9696]`.
5. **Recompute the DENSE residual** so total hazard is unchanged at every integration age (below).
6. Wire/retarget any upstream edges (§5).

> **Band recompute — HAZARD space, net-new only** (sidesteps the year-mismatch: the band's existing
> base may be 2022 while net-new codes are 2019). Pull only the **net-new** codes' per-sex age rate
> `nn_h = rate/100000` (codes not already in the band — e.g. fold hypertensive as **I10/I12/I15
> only**, since I11/I13 are already in cardiovascular). Per age anchor: `old_band_h =
> old_Rmax·B_old/(1−B_old)` → `new_band_h = old_band_h + nn_h` → `new_Rmax = new_band_h(90)` →
> `new_B = new_band_h/(new_Rmax + new_band_h)` (inverse odds-link). Update the band's `RmaxPerYear`,
> burden `curve.byAge/.female`, and `cdc:` string.
>
> **Residual recompute — DENSE, via the engine (exact; no decade-subtraction, no >90 special case).**
> `mortality.residual.byAgePerYear` is a per-integer-age table (20→130). Recompute it so total hazard
> is unchanged at every integer age:
> `residual_new(age) = old_total_hazard(age) − new_nonresidual_hazard(age)`,
> the robust way being to **run the engine**: `simulate()` the PRE-fold params and the POST-fold
> params at baseline (sex only), then for each age `k`:
> `residual_new(k) = preSim.hazard[k] − (postSim.hazard[k] − postSim.decomposition[k].parts.residual)`.
> This subtracts the band's *actual* convex per-age hazard increase (whatever its tail shape), so it
> is exact for non-monotonic bands (liver) too and needs no shared-anchor formula. Store the dense
> arrays in the json block (see `/tmp/fix_residual.mjs` for the reference script). Verify: re-simulate
> ⇒ baseline LE == pre-fold LE to ~1e-9. **Batching:** fold several bands, then recompute the dense
> residual ONCE against the pre-batch baseline.

> **The vascular-misfiling trap:** mesenteric/intestinal infarction (K55) sits in the *digestive*
> ICD chapter but is **vascular** — it folds into cardiovascular, not a digestive bucket. Partition
> by **driver mechanism, not ICD chapter** (the GI lesson: pancreatitis ≠ gallbladder ≠ ulcer ≠
> infarction, four different upstream nodes inside one chapter).

---

## 4. Op B — new terminal pathology cause-node

Steps 2-5 of Op A, plus:
- Add `mortality.causes.{name} = {node:"<nodeId>", RmaxPerYear:{male,female}, cdc:"<codes + provenance>"}`.
- Add the burden `nodes[]` entry: `{id, label, layer:"phenotype"  /* migrating → "pathology" */,
  tractability, provenance, role:"mortality-cause", mortalityCause:"<name>", curve:{form:"table",
  byAge:[...], female:{byAge:[...]}}}`.
- Add the cause key to `CAUSE_KEYS` in `engine.mjs` (residual stays last).
- Add a per-cause frailty β to `mortality.frailty.betaByCause` (default: reuse the residual's β to
  stay LE-invariant; a cause-specific Peng-2022 HR is a deliberate, re-baselined improvement).
- Wire ≥1 upstream edge (§5) — a cause node with no driver is just a relabeled residual slice.

---

## 5. Op C — new driver state-node, and edge discipline

**State-node schema** (`bLayer.stateNodes[]`, copy `ecm-crosslink` / `beta-cell-decline`):
```
{ id, class: "damage"|"physiology"|"pathology", units: "normalized"|"physical",
  label, initial, rate: { terms: [ { op:"linear"|"product", drivers:[mediatorOrStateId...],
  coeff, cap? } ] }, provenance }
```
- Integrated node → `rate.terms` (∫rate·dt). Algebraic intermediate (`physiology`, e.g.
  `arterial-stiffness`) → a `value` expression over other nodes, no integral.
- **Calibrate the intrinsic constant** so the *population* trajectory reaches its normalized anchor
  (e.g. ~1.0 at age 80) at population-average driver inputs — so age only *verifies*.
- Feed a mediator via `bLayer.stateAugments[] = {fromState, mediator, coeff}` (state→mediator), or
  a cause via `bLayer.causeEdges[]` (deviation-form `exp(β·(value−baseline))`, =1 at pop baseline).

**Mediation-decomposition discipline (supersedes "route-once").** Making an effect explicit via a
mechanism requires **subtracting that slice from the aggregate edge**, so the calibrated total is
preserved. If `X→Y` is *entirely* via `M`: drop the direct `X→Y`, add `X→M→Y`. If *partly*: route
the `M`-slice and **reduce** the direct `X→Y` by it (residual = non-`M` pathways). Template already
in the model: BMI→SBP path + reduced BMI→CVD residual = Lu-2014 1.27. Honor the eight named
double-count disciplines (PROJECT-NOTES §5).

**Residual discipline.** The residual is a last resort, not a default — an unneeded residual *is* an
age curve. Enumerate the known mechanistic contributors first, model every one that decomposes into
a rate×time integral, and let the residual carry only the fraction tied to a specific named
`#gap/no-mechanism`. Always report the residual fraction.

---

## 6. Maturity ladder (the `provenance:` field)

Mirrors the wiki's `verified:` flow. A node ships as a placeholder and is promoted on validation:

| Stage | `provenance:` marker | Meaning |
|---|---|---|
| draft | `placeholder` / `illustrative; SOLID-direction` | seeder's first pass; magnitudes provisional, direction defensible |
| validated | `calibrated` | numbers cross-checked vs CDC/literature; β's literature-anchored |
| gold | `anchored` | fully reconciled, regression-pinned, **no open `#gap`** |

The seeder writes `placeholder`; the validator promotes it and re-baselines tests. **`anchored` is
strict:** any open gap caps the node at `calibrated`. A cause built on **D76 2019 with a
`SWAP-TO-2022` marker** in its `cdc:` field has an open gap → it stays `calibrated`, consistent with
the other 2019 bands (pilot 2026-06-11: the seeder over-claimed `anchored`; the validator corrected
it to `calibrated`). Don't conflate "the arithmetic is verified" (`calibrated`) with "nothing is
left to reconcile" (`anchored`).

---

## 7. Build + validate (the flow that must not break)

Source of truth is the ```json block in `frameworks/causal-graph-parameters.md`. **Never hand-edit
`params.json` or the inlined engine in the HTML.**

```
# edit the json block in frameworks/causal-graph-parameters.md (and engine.mjs only for math)
node model/build-params.mjs     # .md json block → params.json
node model/test.mjs             # MUST stay green; re-baseline deliberately if LE legitimately moved
node model/cli.mjs le --sex male   # sanity: ~77.459
node model/build-app.mjs        # inline engine + params → viz/aging-simulator.html
```
Then the **headless render check** (Proxy-stub `document`/`window` — catches blank-panel crashes the
unit tests miss) and, for UI-visible changes, `model/e2e-playwright.mjs`. A new mediator must be
registered in the app's `MED_SCALE` + `MED_COLOR` or `renderMediators` throws.

**Re-baselining:** if a change legitimately shifts an LE/ΔLE target (cause-specific frailty, a new
wired edge), confirm the new value is physiologically sane, then update the affected `test.mjs`
targets **and** the self-checks in `build-app.mjs` **and** the 77.459/82.118 references in the docs.
Don't assume the test is wrong.

---

## 8. Logging + leak-gate

- Append one entry to the **public** daily log (`log/<YYYY-MM-DD>.md`): what node, which op, the
  data source, the LE-invariance result. Model work is research, not personal — public log.
- Run the leak-gate before any commit (per `CLAUDE.local.md`). Commit scoped to the sim files
  (`frameworks/causal-graph-parameters.md`, `model/`, `viz/aging-simulator.html`, this SOP, the
  partition docs); **never `git add -A`** — the repo carries unrelated user changes. The user
  controls pushes.

---

## 9. Worklist

The open partition is `model/cod-residual-partition-2019.md`. Suggested order (largest +
best-anchored, existing-node folds first): **circulatory remainder → cardiovascular** (Op A pilot)
→ Parkinson's/ALS → neurodegeneration → frailty/falls cause (Op B) → other-respiratory → the GI
splits → endocrine-non-diabetes. Each is one op + recomputed residual + ≤3 anchored edges; the v0.4
odds-link + reserve machinery needs no change.
