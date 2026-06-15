# Timeline / history-import — design / research note (DESIGN-ONLY)

**Status:** DRAFT plan for review (no engine math changed, no JSON edited, no UI built). Same discipline as
`model/vitamin-d3-k2-intervention-design.md` / `model/senolytic-intervention-design.md`: settle the
**semantics + the data model + the invariant guards** before touching code.
**Author:** claude · 2026-06-14. **Reviewed by Codex (gpt-5.5, xhigh) 2026-06-14 — corrections folded in as
Revision 1 (§10); affected inline claims are marked `[R1]` and the superseding text is in §10.**

**Goal (user request):** the `viz/` simulator currently applies interventions and biomarkers at a *single
specific age*. Build a **timeline** that lets them be applied/changed **over time**, and — end game — let the
user **import their real health history** (longitudinal lab draws + intervention start/stop dates + tracking
streams) so it maps onto implemented interventions/biomarkers and the simulation is adjusted to be *in line*
with the observed trajectory. Imported items appear on an **editable timeline**.

**Scope decision (user, 2026-06-14):** *timeline mechanic first, importer second.* Stage 1 = engine
time-profiles + editable timeline UI with manual add/edit. Stage 2 = the history importer. This note plans
both but the buildable target is Stage 1.

---

## 0. TL;DR / recommendation

1. **The engine is already half-temporal.** `interventions` carry a `startAge`; `operators` carry dosing
   `ages:[…]` and `startAge/endAge` windows; exogenous inputs *already* accept a `{byAge:[[age,value],…]}`
   profile — **but only on the integrated rate-term channel** (`inMap`). Three things remain pinned to one
   age and are the actual work: **(a)** mediator-layer inputs are read as **scalars** (LDL/SBP/BMI/HbA1c
   emergence + the direct cause edges ignore `byAge`); **(b)** `treatments` apply **lifetime-constant** with
   no window; **(c)** lab anchoring collapses to **one offset computed at `currentAge`** and held forward.

2. **One unifying abstraction: every input channel becomes a time-profile**, resolved per-age through a
   small set of typed resolvers. Scalars auto-lift to flat profiles, so **the load-bearing invariant holds
   byte-identically** (empty timeline / all inputs at populationMean ⇒ baseline LE unchanged, `test.mjs`
   green).

3. **Two resolution modes, picked per channel** (this is the key refinement from the user):
   - **Behavioral / exposure inputs** (alcohol, smoking, activity, diet axes, sleep) → **zero-order hold
     (step)**: a value set at a date stays flat until the next entry; cessation is a **hard step to 0**, not
     a glide. The *input* drops instantly. Acute mediator effects (alcohol→SBP) correctly vanish on
     cessation. **`[R1]` "downstream burden lingers after cessation" is NOT automatic in the live model** —
     the integrated `∫rate·dt` machinery exists but *no production node carries an active exogenous rate-term
     today* (only synthetic tests do). Realizing lingering burden for an exposure requires **wiring that
     exposure→state rate-term first** (e.g. `alcohol→liver`), a separate populate effort (see §10).
   - **Measured biomarkers** (LDL/apoB, HbA1c, systolic BP, BMI) → **linear interpolation of the personal
     residual** between draws, held flat outside the measured span (constant extrapolation both ends).

4. **The timeline is the source of truth; the existing sliders become "set the value at the cursor."** The
   current scalar UI is the degenerate single-entry case of the timeline.

5. **Importer (Stage 2) is privacy-gated.** The public app ingests a **generic history-bundle JSON**; the
   user's actual bundle is produced by a **private** transform from the personal-tracking repo and loaded at
   runtime (file picker / localStorage), **never committed**. No person handle, no `protocols/` reference,
   no absolute path enters any public file. Epigenetic clocks (DunedinPACE, DNAmTL) ride as a **validation
   overlay**, never as drivers (model discipline: clocks are readouts/validators, MR-null).

---

## 1. Where the single-age assumptions live today

| Channel | Engine field | Today | Temporal? |
|---|---|---|---|
| Node-freeze intervention | `interventions:{id:{startAge,efficacy}}` | freeze from `startAge`, **no end**, constant efficacy | start only |
| Senolytic / senomorphic etc. | `operators:[…]` | `ages:[…]` pulses; `startAge/endAge` windows | **yes** |
| Exogenous input — rate-term channel | `inputs:{id:{byAge:[…]}}` → `inMap[id][k]` | per-age profile, **PCHIP-interpolated** | yes (but wrong interp — see §3A) |
| Exogenous input — **mediator + cause edges** | `inputs:{id:value}` | **scalar only** (lifetime constant) | **no** |
| Treatment (statin/antihyp/metformin) | `treatments:{id:dose}` | applied to **all ages** | **no** |
| Personal offset (lab anchor) | `offsets:{med:number}` | one offset = `measured − prediction@currentAge`, held forward | **no — the single-age core** |
| Operator dosing in the app | `activeOperators()` | hardcoded `ages:[state.currentAge]` | no |

`currentAge` (default 40) is doing triple duty: lab-anchor age, one-off treatment/operator age, and the
read-cursor. The timeline splits these apart: `currentAge` becomes purely a **"today" cursor**; every input
gets its own age extent.

---

## 2. Core abstraction — the typed time-profile

A **profile** is `scalar | {byAge:[[age,value],…], mode}` where `mode ∈ {step, linear}` (default per
channel). One resolver builds a per-age lane array once, at the top of `simulate()` / `mediators()`:

```
resolveProfile(p, AGES, popDefault):
  scalar v            → fill(v)                         // back-compat: byte-identical
  undefined           → fill(popDefault)                // invariant: default == population average
  {byAge, mode:step}  → ZOH: carry prior entry forward; before first entry → popDefault
  {byAge, mode:linear}→ piecewise-linear; flat-extrapolate both ends (NOT PCHIP)
```

Resolution-mode assignment:

| Channel | Mode | Before first entry | After last |
|---|---|---|---|
| Behavioral/exposure inputs | **step** | populationMean | hold last |
| Treatment dose | **step** (on/off or level) | off (0) | hold last |
| Node-freeze efficacy | **step** | 0 | hold last (or to `endAge`) |
| Personal offset (biomarker residual) | **linear** | hold first residual | hold last residual |

Rationale for biomarker = `linear` + flat-extrapolate: the residual is a *personal-tendency constant*
threaded through measured points; pre-first-draw barely affects LE (survival integral from 20, early-age
hazard tiny) but flat-extrapolation is the least-surprising default. Behavior = `step` is the user's explicit
ask: "stopped drinking at date X" must be a clean cut, "3 units/day" must persist until edited.

**Why this preserves the invariant:** a flat profile at `populationMean` is identical to today's scalar
default, term-by-term. The new resolvers reduce to `fill(scalar)` for every existing call site.

---

## 3. Engine changes (Stage 1)

All edits in `model/engine.mjs`; rebuild via `build-params`/`build-app`; re-baseline only if LE legitimately
moves (it must not for the invariant cases).

**A. Mediator + cause edges read inputs per-age, from ONE canonical lane map. `[R1]`** Today
`applyMediatorEdge`, `causeEdgeMult` read `inputs[id]` as a scalar, and `allcauseEdgeMult` (activityFitness,
sleep `uShape`) is **hoisted — computed once outside the age loop at `engine.mjs:444`**. Build a **single
`inputLane[id][k]` map once** and share it across `mediators()`, the direct cause edges, the all-cause edges,
AND the rate-term `inMap` (today `inMap` is built only in `simulate()` at `:219`; duplicating resolution in
two places risks divergent defaults/interp). The hoist in `allcauseEdgeMult` must **move into the per-age
loop whenever its lane is non-constant** (keep the hoist only when a lane is provably flat). **Back-compat
for existing `{byAge}`:** an untagged `{byAge}` keeps its **legacy PCHIP** interpretation (so the existing
former-smoker *test* is byte-identical); new history profiles must set `mode:"step"` / `"linear"` explicitly.
*Guard:* all-scalar inputs ⇒ identical lanes ⇒ identical output (pin with full-array deep-equality, not just
LE).

**B. Treatments gain a window/profile.** Accept `treatments:{id: dose | {byAge,mode:step}}`. In
`mediators()`, apply the treatment with the **per-age dose** (0 ⇒ untreated at that age). A statin started at
45 then shifts LDL only from 45 on; stopping ⇒ LDL rebounds next age (correct — statins are not
disease-modifying). *Guard:* a constant full-dose profile == today's `treatments:{id:true}`.

**C. Personal-offset trajectory (the biomarker-history core). `[R1]` — REDESIGNED; the original early-offset
scheme does not reproduce the measurement.** Today the offset is added at `engine.mjs:921` **before** the
treatment multiplies at `:922-925`, so an anchored LDL of 100 under a 40%-reduction statin resolves to
`0.4·predicted + 0.6·measured ≠ 100`; BMI→SBP coupling (`topoSortMediators`, `:884`), the HbA1c glucotoxic
state-augment (`:960`), and the stiffness→SBP augment applied **outside** `mediators()` (`:379`) further break
exactness. **The current engine already fails to reproduce multiple anchored labs under coupling** — the
"pins exactly" claim was wrong. Corrected design:
- **Apply the personal correction as a FINAL additive lane on the realized mediator trajectory** — after
  edges, treatments, and the in-`mediators()` augments — so `resid_m = measured − realized_full_prediction(age_m)`
  (the prediction must include interventions, operators, treatments, OTHER measured mediators, and state
  feedback — not only inputs/treatments), and `corrected = realized + resid_lane` reproduces `measured` at each
  draw **exactly**. The stiffness→SBP augment at `:379` must be moved/duplicated so SBP's correction sees it.
- **Downstream-feedback caveat:** cumulative states (crosslink `∫HbA1c`, β-cell, elastin) integrate the
  mediator *during* the per-age march; a post-march correction is not seen by those integrals. Two options:
  **(b1)** a documented v1 approximation (correct the observable for display + direct cause-edge hazard; accept
  small inconsistency in the cumulative-state feedback, flag it `#gap`), or **(b2)** a joint/sequential
  fixed-point solve over the residual knots so feedback is consistent. **Recommend b1 for M1, b2 deferred.**
- **The residual is NOT a "pure personal component."** It also carries measurement noise, transient illness,
  adherence, unmodeled treatments, and model misspecification. **Exact interpolation through every draw
  overfits.** Define: a measurement-error band, optional **smoothing** (default exact-pin for sparse curated
  labs per the user's ask; smoothing for dense noisy streams like CGM), outlier handling, and **regression-to-
  mean** shrinkage of the residual toward 0 outside the measured span.
- Engine `offsets` accepts `{med: number | {byAge:[[age,resid],…], mode:linear}}`. *Guard:* a single-point
  flat profile == today's constant offset (which is itself only exact when no treatment/coupling touches that
  mediator).

**D. Node-freeze interventions gain `endAge`.** `interventions:{id:{startAge, endAge?, efficacy}}` (later:
`efficacyByAge`). The freeze accrual `prim[i] -= efficacy·ΔT` (`engine.mjs:309-313`, which updates the
**next** grid point) runs only within the **half-open** window `[startAge, endAge)`; after `endAge` the
accumulated `prim` is **held**. **`[R1]` "damage avoided stays avoided" is imprecise:** mechanically, holding
`prim` leaves a constant additive gap, but **self-amplifying nodes** (`rate.self`, logistic) resume along the
*untreated* baseline shape rather than from the treated state, and clamps/coupling can distort the gap.
Label this an explicit **scenario assumption** and test boundaries on nonlinear/saturating nodes. *Guard:*
omitting `endAge` == today's open-ended freeze.

**E. Operators on real schedules. `[R1]` — minor engine change after all.** The machinery accepts arbitrary
`ages:[…]`/windows, but pulse dosing uses **exact integer `Set` membership** (`engine.mjs:243`, `op.ages.has(age)`
at `:325`) on the **DT=1 annual grid** — so an imported age `60.4` never fires and two campaigns in one calendar
year collapse to the same integer. Needs an explicit **date→grid binning policy** (round/snap, or interval
weighting, or a finer DT — the last forces a baseline re-pin). Decide before Stage 2 (§8.6).

**F. Conditional-from-today life expectancy. `[R1]` (new).** The engine reports **cohort LE from age 20**
(`LE = AGE0 + leSum`, `engine.mjs:509`). For a *living* user importing real history, accrued past hazard must
not shrink projected remaining life. Add a **conditional readout**: `LE_cond = currentAge + Σ_{a≥currentAge}
S(a)/S(currentAge)·DT` (future survival renormalized by `S(currentAge)`). Keep cohort LE for
cross-scenario comparability; surface both. This is the headline number once a real person is loaded.

**Engine API after Stage 1** (every field back-compat with a scalar/today's shape):
```
simulate(MODEL,{ sex, lifestyle,
  interventions:{id:{startAge,endAge?,efficacy}},
  inputs:{id: scalar | {byAge,mode}},
  treatments:{id: dose | {byAge,mode}},
  offsets:{med: number | {byAge,mode:linear}},
  operators:[…] })
```

---

## 4. App / UI changes (Stage 1) — the editable timeline

**Naming:** the app already has `renderTimeline()` = the read-only **node-trajectory output chart**. The new
surface is the **input/history editor** — call it `renderHistoryTimeline()` / "History & plan" panel to avoid
collision.

**State model.** Replace the scattered `state.inputs / treatments / labs / interventions / operatorPresets /
currentAge` with a single ordered **events** list (the scalars become a degenerate view):
```
state.timeline = {
  birthDate: null,            // ISO; enables calendar↔age. null ⇒ age-only axis
  events: [
    {channel:"input:alcohol",  kind:"step",     age:25, value:3},
    {channel:"input:alcohol",  kind:"step",     age:38, value:0},      // hard cut
    {channel:"treatment:statin", kind:"window", startAge:45, endAge:null, dose:1},
    {channel:"intervention:cellular-senescence", kind:"window", startAge:60, endAge:null, efficacy:0.3},
    {channel:"operator:senolytic-dq", kind:"pulse", ages:[60,61,62]},
    {channel:"biomarker:LDL", kind:"point", age:33, value:150},        // measured lab
    {channel:"biomarker:LDL", kind:"point", age:43, value:120},
  ]
}
```
`currentOpts()` **compiles** events → the engine opts of §3: group `input:*`/`treatment:*` by id → `{byAge}`
step profiles; `biomarker:*` points → residual profiles via the §3C anchoring; `intervention:*` → start/end;
`operator:*` → ages. The all-default baseline (`baselineOpts()`) = empty events ⇒ invariant.

**Timeline panel (SVG, reuse existing zoom/pan + hover infra from `wireGraphZoomPan`).**
- **X-axis:** age (20 → dynamic max), with a secondary **calendar-date** axis when `birthDate` set. A
  **"today" cursor** at `currentAge`.
- **Lanes (stacked rows):** Behaviors/exposures (step lines w/ value labels) · Treatments (on/off bars) ·
  Interventions + operators (bars + pulse ticks) · Biomarkers (dots connected by the interpolated residual
  preview line). A clock-overlay lane is added in Stage 2.
- **Editing:** click-empty to add an entry; drag handles to move start/end or a point's age; inline numeric
  field for value/dose/efficacy; delete affordance. Each edit → recompile → `renderAll()` (the app already
  re-runs the whole sim per interaction).
- **Sliders stay** as a quick "lifetime value" control. **`[R1]` Correction:** a slider must emit an event at
  **`AGE0` (20)**, NOT at `currentAge` — today a scalar applies at *every* age, so an event at `currentAge`
  with population-mean before it is **not** equivalent (it would blank ages < currentAge to popMean). The
  "degenerate single-entry case" is an event at AGE0, or retain a separate scalar "lifetime baseline" layer
  that timeline events override. Power users use the timeline; casual users never see the difference.

**Forward-compat note `[R1]`:** the app has **no persisted/local sessions today**, so a `migrateState()` is
*forward*-compatibility (for once events ship), not existing-session rescue — don't overclaim it.

---

## 5. Invariant + testing discipline

- **Hard invariant:** empty timeline (or every input at populationMean, no treatments/offsets/freezes) ⇒
  baseline LE **77.459 M / 82.118 F**, byte-identical. `test.mjs` must stay green with **zero re-baselining**
  for all back-compat cases.
- **New tests** (add to `test.mjs`): (1) scalar-vs-flat-profile **full-array deep-equality** per channel (not
  just LE — `[R1]`); (2) ZOH step resolves exactly with **half-open `[start,end)` timing** made explicit
  (alcohol 3→0 at age X); (3) linear residual passes through each anchor exactly + flat/shrunk-extrapolates;
  (4) treatment window on/off; (5) freeze `endAge` holds the accrued benefit incl. a **nonlinear/saturating
  node** boundary; (6) a multi-point biomarker history reproduces each measured value at its age **including
  under an active statin + BMI→SBP + HbA1c feedback + stiffness→SBP** (the §3C acceptance test that the old
  scheme failed — `[R1]`); (7) conditional-from-today LE; (8) categorical `smokingStatus` step profile
  (current→former at quit age); (9) fractional/duplicate-date binning (§8.6).
- **E2E (`e2e-playwright.mjs`):** add a timeline render check + one drag-edit → ΔLE check.
- **No free-fit.** The timeline changes *how inputs vary in time*, not the dose-response coefficients — those
  stay literature-pinned. The importer must not become a back-door for fitting.

---

## 6. Importer (Stage 2) — history bundle → timeline

**Generic bundle schema (public; no personal data baked in). `[R1]` add `version`, `units`, `assay/context`,
`source`, duplicate-policy:**
```json
{ "bundleVersion":1, "birthDate":"YYYY-MM-DD", "sex":"male|female",
  "measurements":[ {"med":"LDL","date":"YYYY-MM-DD","value":150,"unit":"mg/dL","assay":"…","source":"…"}, … ],
  "interventions":[ {"id":"statin","start":"YYYY-MM-DD","end":null,"dose":1}, … ],
  "exposures":[ {"id":"alcohol","changes":[{"date":"…","value":3},{"date":"…","value":0}]}, … ],
  "operators":[ {"id":"senolytic-dq","dates":["…"]} ] }
```

**Pipeline.** (a) The public app gets a **file-picker / paste** loader that **strictly validates** the bundle
(version, units, enum) and compiles dates→ages via `birthDate`. (b) An **analyte → mediator mapping table**
(public, generic): `ldl-c-* → LDL`, `hba1c-pct → HbA1c`, `bp-systolic-mmhg → systolicBP`, `bmi* → BMI`.
**`[R1]` apoB must NOT be mapped numerically onto LDL-C** — different biomarker, different scale; either map
LDL-C only, or add a dedicated apoB mediator, or do an explicit documented apoB→LDL-C conversion. Unmapped
analytes (CAC, DEXA sub-measures, panels) ride as **annotations**, not drivers. (c) The **private** half: a
transform in the personal-tracking repo reads the private lab-panel frontmatter + plan start dates + tracking
CSVs and **emits the generic bundle JSON** locally. The public repo never sees it. *Leak-gate:* run before
any commit; no handle / `protocols/` link / absolute path / archive ref in `model/` or `viz/`.

**`[R1]` Privacy posture (exact DOB + longitudinal labs is highly identifying):** **memory-only by default** —
load into RAM, **discard `birthDate` immediately after age conversion**, no logging, no network calls.
Persistence (`localStorage`/export) is **explicit opt-in only**, never the default.

**Tracking CSVs** (BP, CGM, weight, Oura) → optional **dense overlay series** (down-sampled) and/or a source
for derived measurement points (e.g. CGM-mean → an HbA1c-equivalent anchor; weight+height → BMI points).
Default: render as faint overlays; only promote to anchors on explicit opt-in (avoid over-anchoring noisy
streams).

**Clock-validation overlay (stretch, flagged-dependency).** DunedinPACE / DNAmTL / proteomic-age are plotted
as **measured points vs a simulated biological-age proxy**. The model has **no clock output yet** (PROJECT-
NOTES §8 "Clock-validation layer" is a roadmap item) — emitting a comparable proxy is a sub-project. Ship the
overlay as *measured-only* first; wire the simulated comparator when the proxy exists. **Never a driver.**

---

## 7. Staging / milestones

- **M1 — engine time-profiles.** §3A–E + §5 tests. No UI. `test.mjs` green, invariant pinned. *Self-contained,
  reviewable, no visible change.*
- **M2 — timeline state + compile.** `state.timeline`, `currentOpts()` compile, `migrateState()`. Sliders
  rewired to write events. Headless-render check.
- **M3 — timeline panel UI.** `renderHistoryTimeline()` + drag/add/edit + calendar axis + "today" cursor.
  Playwright drag-edit check.
- **M4 — importer.** Bundle loader + analyte mapping + private transform (separate, in the personal repo).
- **M5 — clock overlay** (measured-only; simulated comparator deferred to the clock-output sub-project).

M1–M3 deliver the user's "apply interventions/biomarkers over time on an editable timeline." M4–M5 deliver
"upload my history and the sim aligns."

---

## 8. Open decisions (for user)

1. **Axis primary:** store events in **calendar dates** (import fidelity) and map to age internally, display
   toggle age↔date. *Recommended.* (Age-only if `birthDate` absent.)
2. **`[R1]` Pre-first-biomarker residual — RECOMMENDATION FLIPPED:** default to **zero / shrunk residual**
   before the first draw, NOT flat-hold-backward. Codex is right that it is *not* negligible: HbA1c / resting
   HR feed **cumulative states** (∫HbA1c crosslink, β-cell, elastin), so a draw at 60 held backward rewrites
   ~40 yr of accumulated damage. Hold-backward only if the user explicitly asserts a lifelong trait.
3. **Freeze release semantics:** hold accrued benefit after `endAge` (recommended) — but as a labeled
   *scenario assumption*, not physical truth (see §3D `[R1]`); decay/catch-up are alternatives.
4. **Tracking-stream anchoring:** overlay-only by default vs auto-derive anchors (CGM→HbA1c, weight→BMI).
   Recommend overlay-only + opt-in to avoid over-anchoring noisy data.
5. **`[R1]` Smoking = categorical, step-only.** `smokingStatus` is an enum (never/former/current) with
   `undefined`→population-mix (mult 1, the invariant anchor). The resolver needs a **categorical step mode**
   (enum-validated), distinct from numeric `linear|step`. NOTE the lingering-GI-burden it implies is **not
   wired in the live model today** (§0.3 `[R1]`). Confirm category-step vs the deferred continuous cig/day.
6. **`[R1]` Date→annual-grid binning (Stage-2 blocker):** round/snap to integer age, interval-weight, or move
   to sub-annual DT (forces baseline re-pin). Needed because pulse dosing is exact-integer `Set` membership.

## 9. Risks

- **Performance:** every edit re-runs the full 20→130 sim across all lanes; today that's fine (one solve),
  but per-age input lanes add array work. Profile-resolve once per run, not per edge.
- **Invariant drift:** the §3A interp change (PCHIP→ZOH) touches an existing `byAge` path. Pin it with an
  explicit before/after test on the former-smoker scenario.
- **Privacy:** the importer is the highest-leak-risk surface. Keep the public app data-agnostic; the private
  transform stays out of the public repo; leak-gate every commit.
- **Scope creep on clocks:** resist wiring clocks as drivers (MR-null). Overlay only.

---

## 10. Revision 1 — Codex review (gpt-5.5, xhigh, 2026-06-14), folded

Codex verdict: *"temporal-profile direction is sound and the empty-timeline invariant is preservable, but §3C
anchoring is mathematically incorrect, §3A misses active consumers, and calendar-date semantics are undefined
on the annual grid."* Repo state at review: **187/187 tests green**, no files modified. All 13 MUST-FIX items
were accepted (none required pushback — each cites a real `engine.mjs` line). Where folded:

| # | MUST-FIX | Folded into |
|---|---|---|
| 1 | Independent `resid = measured − zero-offset prediction` does NOT reproduce the measurement (offset added pre-treatment `:921` vs tx `:922`; BMI→SBP `:884`; HbA1c augment `:960`; stiffness→SBP outside `mediators()` `:379`). Probes: LDL-100+statin→87.6; BMI+5&SBP+10→SBP+13.6; HbA1c-8→8.32. | §3C redesigned (final-correction lane / override phase; b1 approx vs b2 joint-solve) |
| 2 | Residual ≠ "pure personal component" (noise/illness/adherence/misspec); exact-pin overfits. | §3C (error band, smoothing, outliers, RTM) |
| 3 | `activityFitness`/sleep `uShape` hoisted outside the age loop `:441-445`; threading `k` only in `causeEdgeMult` is insufficient. | §3A (temporalize all-cause lane reads) |
| 4 | Build ONE canonical input-lane map; don't duplicate resolution in `simulate()`+`mediators()`. | §3A |
| 5 | `smokingStatus` is categorical (strings, `undefined`=mix); needs explicit enum step mode. | §8.5 |
| 6 | Invariant-preservation ≠ API-compat: existing non-flat `{byAge}` PCHIP≠ZOH. Tag/version. | §3A (untagged ⇒ legacy PCHIP; new ⇒ explicit mode) |
| 7 | Scalar-event contradiction: an event at `currentAge`+popMean-before ≠ today's lifetime scalar. | §4 (slider ⇒ event at **AGE0**) |
| 8 | Specify half-open `[start,end)`; freeze updates next grid point `:309`; pulse applies after burden at X `:321`. | §3D, §5 tests |
| 9 | Date→annual-grid undefined: pulse uses exact integer `Set` `:243`; age 60.4 never fires; same-year collapse. | §3E, §8.6 |
| 10 | Pre-first residual NOT negligible (feeds cumulative states); default zero/shrunk. | §8.2 (flipped) |
| 11 | Add conditional-from-today LE (cohort LE from 20 at `:509` wrong for a living user). | §3F (new) |
| 12 | Freeze "hold benefit" = constant `prim` gap mechanically, but self-amplifying/clamped nodes distort it. | §3D (scenario-assumption label) |
| 13 | Importer: apoB ≠ LDL-C (no numeric map); add version/units/assay/source/validation; memory-only + discard DOB, no localStorage default. | §6 (mapping + privacy posture) |

**Codex corrections to MY claims about current behavior** (all accepted):
- Treatments are **lifetime-constant**, not applied at `currentAge`; only operator presets use `currentAge`
  (`viz/aging-simulator.html:5767`). (§1 wording corrected.)
- **No production node has an active exogenous rate-term** — the former-smoker "burden lingers" path exists
  only in synthetic tests, not the live model. (§0.3 `[R1]` — the biggest expectation correction.)
- Current **multi-lab anchors are already non-exact** under coupling/feedback. (Reinforces §3C.)
- "No engine change for real operator schedules" is **false** once dates / same-year campaigns appear. (§3E.)
- No persisted/local sessions exist today ⇒ `migrateState()` is forward-compat, not session-rescue. (§4.)

**Net effect on the plan:** the *architecture* (typed time-profiles, ZOH-vs-linear, timeline-as-source-of-
truth, privacy-gated importer) survives intact. The two substantive reworks are **(i)** biomarker anchoring
becomes a final-correction lane with an explicit feedback-consistency decision (b1 now / b2 later), and
**(ii)** the "effects linger after cessation" story is honest only after specific exposure→state rate-terms
are wired — a flagged dependency, not a free lunch. M1 scope is unchanged; its acceptance test (§5.6) is the
one the original scheme would have failed.

---

## 11. M1 — BUILT (2026-06-14) + Codex review (gpt-5.5, xhigh) folded as Revision 2

**Status: M1 (engine time-profiles) is implemented** in `model/engine.mjs` + `model/test.mjs` (225/225 green,
baseline LE byte-identical, app rebuilt). What landed: `resolveProfile`/`buildInputLanes` + step/linear
resolvers; one canonical `inputLanes` map shared across `mediators()` + cause/all-cause edges + rate-terms;
all-cause edges de-hoisted into the per-age loop; treatment dose lanes + windowed/profile treatments;
half-open `[startAge,endAge)` freeze; conditional-from-today `LE_cond`; pulse-age grid snapping.

**§3C anchoring — clarified semantics (supersedes the "final-correction lane" framing for M1).** The offset
is applied **after treatments but WITHIN the per-mediator loop**, so it **propagates** through mediator→mediator
coupling AND the state-march feedback — *deliberately*: existing tests (and the intended mechanism) require a
measured HbA1c to drive the glucotoxic/crosslink spiral ("diabetic ⇒ stiffer"). The **treatment-scaling bug is
fixed** (offset no longer multiplied by the treatment). Reproduction scope under this (interpretation-B) design:
- **EXACT** for a single anchored **non-feedback** mediator computed against the full pipeline — LDL (incl.
  under an active statin: 93.14 ✓) and a single SBP anchor (incl. the stiffness→SBP augment ✓).
- **APPROXIMATE** for a **feedback** mediator (HbA1c — the loop amplifies the one-shot residual) or for
  **simultaneous coupled** anchors (a BMI offset propagates to SBP). **Exact anchoring there is an M2 task:**
  the app's `computeOffsets()` must compute residuals against the **full `simulate()` pipeline** (not standalone
  `mediators()`, which omits node burdens / operators / the stiffness augment), in **topological order**, with
  a **2–3 step fixed-point iteration** (b2-lite). This is the single most important M2 correctness item.

**Codex MUST-FIX dispositions:**
| # | Finding | Disposition |
|---|---|---|
| 1 | §3C "exact reproduction" false for feedback/coupled anchors | Scope corrected (above); exact-anchoring solver deferred to M2. Treatment-scaling bug (the real M1 win) fixed. |
| 2 | Test 6 didn't cover the coupling | Added an HbA1c-feedback test asserting it is APPROXIMATE (documents the b1 gap); simultaneous-coupled deferred to M2. |
| 3 | `LE_cond` off-by-one (guaranteed extra year) | **FIXED** — `Sc = kc===0 ? 1 : survival[kc-1]`; pinned `LE_cond(AGE0)==cohort LE`. |
| 4 | `resolveProfile` validation unsafe | **FIXED** — empty⇒popDefault, copy+sort knots, dedup ages, throw on unknown mode + categorical-non-step; tests added. |
| 5 | Pre-first residual flat-holds backward (R1 said zero/shrink) | The engine `linear` primitive flat-extrapolates (general-purpose). The **R1 pre-first-zero policy is realized M2-app-side** via knot construction (prepend a zero/shrunk anchor). Documented; not an engine default. |
| 6 | Same-grid-year pulses collapse | **Policy decided for M1:** collapse to one dose (annual-grid limitation; sub-annual DT deferred). Pinned by an explicit test. |
| 7 | App not M2-ready (`run()` omits `currentAge`; `computeOffsets` standalone) | M2 work — folded into the M2 task list (forward `currentAge`; rebuild `computeOffsets` on the full pipeline + ordered+iterated solve). |

**M2 task list:** (a) ✅ **DONE** — `solveOffsets()` engine helper: b2-lite fixed-point that anchors against the
FULL `simulate()` pipeline (post stiffness→SBP augment, node burdens, operators). Exact reproduction now for
HbA1c-feedback + simultaneous coupled anchors + multi-draw + under node-freeze (tests `M2:` in `test.mjs`).
App `computeOffsets()` rewired onto it. (b) ✅ **DONE** — `run()`/`currentOpts()` forward `currentAge`;
`LE_cond` surfaced in the readout ("≈ N yrs expected age at death, given you've reached X"). (c) ✅ **DONE** —
`solveOffsets` prepends a zero knot one grid-step before the first draw (R1 pre-first-zero; `preFirst:"hold"`
opts out). (d) ✅ **DONE** — `state.timeline = {birthDate, events:[]}` + the pure `compileTimeline(events)` engine helper
(parses `input:`/`treatment:`/`intervention:`/`operator:`/`biomarker:` channels → engine-opts deltas). The app
**merges** these OVER the scalar state per channel (events win); empty events ⇒ byte-identical (the invariant).
`currentOpts()` now compiles+merges the timeline, `solveAnchors()` takes scalar labs + timeline biomarker
points, `timelineEvents()` converts a calendar `date`→age via `birthDate`. **Augment-first** (the scalar UI
still works; M3 populates events). Verified end-to-end: a seeded `input:smokingStatus=current` event drops LE
77.5→73.3 in the rendered app. (e) date↔age conversion in place; **same-year binning** stays an M4 import-time
decision (§8.6).

**M2 COMPLETE.** Next: **M3** — the editable timeline panel (`renderHistoryTimeline()`, drag/add/edit,
calendar axis, "today" cursor) that lets a user populate `state.timeline.events`; then **M4** importer, **M5**
clock overlay.

---

## 12. M3 — editable timeline panel (plan, 2026-06-14/15)

**Goal:** a visible **"History & plan"** panel that lets a user populate/edit `state.timeline.events` (the M2
augment layer) directly, so a real history applied over time drives the sim. No new nodes/edges needed — the
timeline edits EXISTING channels (mediators = biomarkers, exogenous inputs, treatments, intervenable graph
nodes, operator presets).

**Placement.** A 3rd tab in `#modTabSeg` → `data-tab="timeline"` → panel `#modtab-timeline` holding an SVG
`#historySvg` + a thin inline-editor strip. (Sits alongside "Causal graph" + "Lifestyle · Labs".) Rendered by a
new `renderHistoryTimeline(sim)` called from `renderAll()` (built with the existing `el()` SVG helper; reuses
`X_MAX`/`computeXMax`).

**Panel layout (SVG).** Width ~1080 (match other panels), height grows with lane count.
- **X-axis:** age `AGE0→X_MAX`, decade gridlines. Optional **calendar-year** secondary axis when
  `state.timeline.birthDate` is set (`year = birthYear + age`). A **"today" cursor** = vertical line at
  `effAge()` labelled "now (age N)".
- **Lanes** (stacked ~34px rows), grouped + only for channels that have events (+ a picker to add channels):
  - *Exposures* (`input:*`) — **ZOH step-line**, a dot per event, segment value labels; cessation = hard step.
  - *Treatments* (`treatment:*`) — on/off (dose) bars between step events.
  - *Interventions/operators* — intervention windows = bars `[startAge,endAge)`; operator campaigns = pulse ticks.
  - *Biomarkers* (`biomarker:<med>`) — measured dots on the row's OWN mini-y-scale (mediator units), with the
    faint model-reproduced trajectory behind (from `sim.medValues`) so anchor vs model is visible.

**Interaction.**
- **Select:** click an event → highlight + an inline editor (age + value/dose/efficacy fields + delete).
- **Add:** a per-group "+ Add" / click-empty-lane → new event at that age (default value) → selected for edit.
- **Channel picker:** add a new lane from `LAB_FIELDS` (biomarkers) / `PANEL_INPUT_IDS` (exposures) /
  treatments / intervenable nodes / `OPERATOR_PRESETS`.
- **Birth-date** field → enables the calendar axis + date display.
- Every edit mutates `state.timeline.events` → `renderAll()` (recompile + redraw; cheap, already per-interaction).
- **Drag** (move age / biomarker value) is polish — after click-edit works.

**Scalar-UI relationship.** Augment-first is already wired (events override scalars per channel). For M3 keep
them independent + clearly labelled ("timeline events override the sliders for that channel"); slider↔event
auto-sync is deferred.

**Staging:** M3.1 read-only render (axes, today cursor, lanes from existing events) → M3.2 add/edit/delete +
channel picker + birth-date → M3.3 drag polish + the biomarker model-vs-measured overlay. Verify each with the
headless-Chrome smoke + (where possible) a seeded-event render check; engine tests stay green; commit per step.

**Out of M3 scope:** the importer (M4), the clock overlay (M5).

### M3 plan — Codex review (gpt-5.5/high, 2026-06-15) folded

P0/P1 rules adopted before implementation:
- **Channel ownership.** Once a channel has timeline events, EXCLUDE the matching scalar from `currentOpts()`
  (biomarker events → drop that med from `scalarLabAnchors()`; operator events → drop that preset from
  `activeOperators()`; input/treatment/intervention already override via spread) and **disable the scalar
  control** ("Controlled by History & plan"). Prevents the scalar-lab + timeline-point double-anchor and a
  preset firing from both UIs.
- **Stable event IDs.** Every event gets a UI `id` (`te-<n>`); select/edit/delete BY ID, never array index.
- **Separate `historyXMax`** = `min(AGE1, max(X_MAX, effAge(), latestEventAge()))` — do NOT mutate the
  survival-derived global `X_MAX` (the output charts need it), but don't let a future planned event fall off.
- **Editor is HTML, commit-on-change/blur.** `renderAll()` rebuilds SVGs + reruns anchoring synchronously, so
  a live SVG-embedded editor would lose focus/caret per keystroke. Keep an HTML `#historyEditor` with a draft,
  commit on `change`/Enter/blur. Selection-only re-renders the panel (+ syncs the editor), NOT `renderAll()`.
- **Render safety.** Build the panel into a `DocumentFragment` → atomic `svg.replaceChildren(frag)`; wrap in
  try/catch; call `renderHistoryTimeline()` LAST in `renderAll()` so a defect can't blank the headline readouts
  or established panels. No window/document listeners inside the render; static toolbar/editor listeners wired
  once at boot (avoid the `#currentAge` duplicate-listener pattern).
- **Duplicate policy.** One intervention window per node; a same-channel/same-grid-age input/treatment/
  biomarker add UPDATES the existing event rather than duplicating.
- **Reset.** `Reset all` clears `state.timeline`, the selected event, and the editor draft. Hide `#graphFit`
  off the graph tab.
- **Interaction.** Direct DOM listeners on glyphs (dots/bars/ticks) + one transparent per-lane rect for
  click-to-add. Do NOT reuse `wireGraphZoomPan` (coupled to graph state). Click-select + HTML form first; the
  pointer-drag (`setPointerCapture`, preview-on-move, commit-on-`pointerup`) is M3.3.
- **Biomarker lanes.** Start from `MED_SCALE[med]`, expand to fit measured points + the visible
  `sim.medValues[med]` trajectory, +~5% pad. Draw: row bg + mini-scale → faint `sim.medValues` path (row-
  clipped; it already reflects solved offsets = reproduced history, not unanchored prediction) → dots+labels.
- **Defaults (M3.2 add).** input → preceding effective value; biomarker → `sim.medValues` at that age;
  treatment → dose 1; intervention → efficacy 0.3; operator → one pulse.

**M2 solver review (Codex gpt-5.5/xhigh, 2026-06-14) — folded.** Codex confirmed the invariant holds and
`LE_cond` is correct, but found the solver was **not guaranteed to converge and could silently return wrong
offsets** (a high-gain HbA1c anchor settled into a 2-cycle), plus anchor-validation gaps. Fixes landed:
- **Adaptive-damped fixed point** — α halves whenever a pass fails to reduce the miss, guaranteeing a
  contraction (breaks the 2-cycle) without slowing the well-behaved common case (α=1, early-break). A **final
  measure() reports the TRUE miss of the returned offsets**, so `{converged, maxMiss}` is honest. The app
  surfaces a **⚠ warning** when a lab anchor doesn't resolve (no more silent wrong fit).
- **Anchor canonicalization + validation** — snap age to ONE grid point for both knot and index (fixes the
  fractional-age 40.4 mismatch), clamp out-of-grid ages (no NaN), drop non-finite/non-offsettable mediators
  (reported via `dropped`), dedup conflicting same-slot anchors (last wins).
- **Pre-first boundary** fixed at `AGE0+DT` (an age-21 anchor now ramps from a `[AGE0,0]` knot).
- **App `currentAge` clamped/snapped** via `effAge()` (a typed 200 no longer claims "reached 200"); `LE_cond`
  `kc` made DT-general. Verified: **243/243 tests** (11 new robustness tests: real multi-draw HbA1c feedback,
  honest non-convergence, out-of-grid/fractional/duplicate/invalid anchors, pre-first boundaries) +
  headless-Chrome render smoke.
