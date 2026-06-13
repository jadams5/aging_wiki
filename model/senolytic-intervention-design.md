# senolytic interventions + clearance-capacity variable — design note (DESIGN-ONLY)

**Status:** PROPOSED architecture for review. **No coefficients/efficacies assigned.** Companion to
`model/senescence-inflammation-loop-design.md`. Per reviewer (2026-06-12): design the **intervention semantics** and
the **clearance-capacity variable** *together* — the minimal model that distinguishes **prevention**, **senomorphic
suppression**, **endogenous immune clearance**, and **pulsed senolysis**.
**Author:** claude · 2026-06-12. Compound assignments (§5) grounded in a wiki-verification sub-agent (in flight).

---

## Implementation status (2026-06-13) — generic machinery + exploratory D+Q scenario live

Per the user's Option-1-refined directive, the **generic operator machinery + node-to-node rate-channel are
implemented and tested; all remain inert by default (`operators:[]` ⇒ baseline LE byte-identical). D+Q is available as an
explicitly exploratory one-off scenario using a human-biopsy kill envelope plus a sensitivity-only rebound half-life.
Implemented in `simulate()`:
- **senolytic-pulse** `{kind,target,killFraction,ages:[...],reboundHalfLifeYears?}` — drops the target burden at dosing ages (the
  operator freeze/slow cannot express); **repeated schedules** supported. The absolute burden DOES re-accumulate
  (production / the baseline trajectory keeps rising). A positive rebound half-life heals the pulse deviation by the exact
  exponential map `x_next=x·exp(−ln(2)·dt/halfLife)`. This empirical response-persistence parameter is deliberately separate
  from endogenous clearance capacity (`c0`, `β`), which remains disabled pending calibration.
  **Timing (k→k+1):** a dose listed at age `k` is applied *after* that year's coupling solve, so its effect first appears
  at `k+1` — a one-grid-step lag inherent to the annual `Δt`; the §2 "instantaneous at dosing age" / the UI "at current
  age" are exact only up to this 1-yr discretization (now stated in the UI note).
  **Double-heal guard (2026-06-13, Codex-flagged):** a rebounding pulse (`decay<1`) is **excluded from the clearance
  `−c0·x` term**, so when `c0` is later activated it does **not** also heal that deviation. Without the guard, `c0` writes
  positive compensation into the *persistent* `accumDev` while the rebound decays `op.dev` away → net **positive**
  deviation, i.e. the treated burden overshoots **above** baseline (verified: `c0=0.15` + 4-yr rebound crossed above
  baseline by age 70). Persistent (no-rebound) pulses remain `c0`'s responsibility (invariance test #3). Inert today
  (`c0=0`); the guard bites once `c0>0`.
- **senomorphic** `{kind,from,to,atten,startAge,endAge}` — temporarily scales a coupling gain (no clearing).
- **production-suppress** `{kind,target,atten,startAge,endAge}` — slows accrual over a window.
- **node-deviation rate-channel** — a node `rate.term` driver `{node:id}` reads the live deviation `D` (the
  machinery for the future sen↔infl loop); inert (no model edge uses it yet).

**Deliberately NOT done (per the guardrails):** the clearance-capacity state `c(t)` (§1 — needs its own state
equation/driver design first); the forward `sen→infl` G→rate migration (the live G-edge is **preserved**, to be
migrated atomically once a rate coefficient is independently calibrated); and any compound wiring — fisetin /
quercetin / D+Q remain **stubs** (§5) until per-compound efficacy + schedule are agent-verified. No loop gains,
no clearance kinetics, no compound efficacies are set.

---

## 0. Why the existing intervention operator is insufficient

The current model has ONE intervention operator — a continuous **freeze/slow** from `startAge`:
`prim[i] -= efficacy·(Tarr[i][k+1]−Tarr[i][k])` (it suppresses *future accrual* of a node's burden). The reviewer's
key point: **this cannot model a senolytic.** A senolytic *removes existing senescent cells* — it drops the
**accumulated stock `S`**, instantly — whereas freeze/slow only prevents new accumulation and never touches the cells
already there. So senolytic pulses, senomorphics, production-suppression, and clearance-restoration are **distinct
operators** the engine does not yet have.

---

## 1. The clearance-capacity variable `c(t)` (the one justified new node)

**Senescence burden as production − clearance.** Make explicit the wiki's `burden = ∫(production − clearance)dt`:
```
dS/dt = production(t) − c(t)·S
```
- `S` = the senescence-node accumulated burden (already an `∫rate·dt` state post-C3b).
- `production(t)` = the existing self-amplifying rate + driver/loop deviation terms (gross new-senescence formation).
- **`c(t)·S` = clearance: a burden-dependent NEGATIVE rate** (reviewer correction #1) — immune surveillance removes a
  *fraction* `c` of the existing stock per unit time (NK/macrophage senolysis; `senescence-immune-surveillance.md`).

**`c(t)` is a STATE, not age (no-age-pegging — reviewer):** clearance capacity is **driven DOWN by the
`immunosenescence` node** (NK subset-shift + NCR loss) and **up by immune interventions**. **Age must NOT enter `c`
directly — it only VERIFIES `c`'s trajectory.** So `c` is itself emergent: `c = c0 − f(immunosenescence deviation)`,
deviation-form so that at population-default `c = c0` (baseline) and `S`'s net rate reproduces the migrated exponential
exactly (the lumped baseline already embeds `c0`; only *deviations* in `c` bite — same decomposition discipline as the
loop note). When immunosenescence rises faster than baseline, `c` falls → `S` accrues faster (the verified
clearance-failure → exponential dynamic).

**Representation choice (open):** `c` as a new `bLayer` mediator/state (a normalized clearance-capacity in [0,1],
baseline `c0`), vs. folding it as a negative term inside the senescence node's `rate`. Recommend a **named state**
(`senescent-cell-clearance-capacity`) so interventions and immunosenescence can both address it explicitly and it's
visible in the graph. `#gap/needs-clearance-coefficients`.

---

## 2. The four intervention operators (semantics — no efficacies)

| Operator | Acts on | Math (design) | Distinct from |
|---|---|---|---|
| **Senolytic pulse** | the accumulated stock `S` | at each dosing age `t_d`: **`S ← S·(1 − ε_kill)`** (fractional clearance of existing burden — applied after the `t_d` solve, so the drop first shows at `t_d+1` on the annual grid; optionally cell-type-limited ⇒ `ε_kill` applies to a *fraction* of `S`) | freeze/slow (which never removes existing `S`) |
| **Senomorphic** | the SASP signalling gain | during `[t_on, t_off]`: **`g_sen→infl ← g_sen→infl·(1 − ε_morph)`** (attenuate senescence→inflammation rate WITHOUT clearing `S`) | senolytic (S unchanged) |
| **Production suppression** | the new-senescence rate | during treatment: **`production ← production·(1 − ε_prod)`** (lower the *rate* of new senescence) | clearance (removes existing) and senomorphic (S still forms, just signals less) |
| **Clearance restoration** | `c(t)` | during/after treatment: **`c ← c + ε_clear`** (raise immune clearance capacity — immune/vaccine/CAR-T-style) | senolytic pulse (drug kills directly; this boosts the endogenous remover) |

**Repeated / intermittent schedules (required):** fisetin and D+Q are **pulsed** ("hit-and-run": clear, stop, cells
re-accumulate, repeat). The operator schema must accept a **list of dosing ages** (or a period + duration), not a single
`startAge`. A senolytic pulse at each `t_d` drops `S`; between pulses `S` re-accrues via `dS/dt = production − c·S`, so
the *steady-state* `S` under a repeated schedule emerges from the pulse interval vs the re-accumulation rate — exactly
the dynamic that makes intermittent dosing meaningful (and that freeze/slow cannot express).

**Engine touch-points (design-only):** the intervention object grows from `{efficacy, startAge}` to a tagged union —
`{kind:"pulse", target:"S", killFraction, ages:[…]}`, `{kind:"senomorphic", gain:"g_sen→infl", atten, window}`,
`{kind:"production", atten, window}`, `{kind:"clearance", boost, window}`. The pulse acts at the integration step for
its dosing ages; the others modify the relevant rate/gain over their window. **No efficacies set here.**

---

## 3. Why these four are the minimal complete set (per reviewer)

They span the orthogonal levers on the senescence stock and its signalling:
- **prevention** = production suppression (fewer cells form) + the existing freeze/slow;
- **senomorphic suppression** = attenuate the SASP gain (cells stay, signal less);
- **endogenous immune clearance** = `c(t)` (and its immunosenescence-driven decline);
- **pulsed senolysis** = the instantaneous stock-reduction operator.
A model with all four can distinguish a drug that *prevents* from one that *clears* from one that *quiets* — which the
single freeze/slow operator conflates.

---

## 4. Stability with clearance + interventions (carries the loop-note corrections)

- `dS/dt = production − c·S` is now a genuine production−clearance system. **Stability check (reviewer correction #2):**
  evaluate the **Jacobian of the full coupled (senescence, inflammation, clearance) dynamics** (continuous-time,
  `Re(λ)<0`) AND the **discrete update map** (`|λ|<1` at the model `dt`). `spectral radius < 1` alone is insufficient.
- A senolytic **pulse** is a discontinuous reset of `S` — between pulses the continuous dynamics govern; the discrete
  map must remain stable across the reset. Clearance `−c·S` is the natural dissipative term that makes the open-loop `S`
  dynamics contractive when `c>0`; the loop (positive feedback) fights it. The balance `production-gain vs c` sets
  whether burden converges, plateaus, or (as `c→0` with immunosenescence) runs away — the verified aging trajectory.

---

## 5. Compound assignments — wiki-grounded (verified 2026-06-12; no efficacies)

The reviewer's cautious priors are **confirmed** by the wiki, with three refinements (production-suppression is
wiki-silent for ALL three; senomorphic is secondary/indirect for these agents; efficacy is mechanism-direction-only).

> **D+Q is live as an exploratory one-off scenario — see `model/dq-calibration-design.md`.** Kill-fraction envelope
> `ε_kill ≈ 0.17 / 0.35 / 0.62` (adipose, Hickson 2019); one-off campaign → discrete pulse, maintenance schedule → a
> clearance-rate boost (sub-annual at `Δt=1yr`). The pulse now carries an exact response-decay half-life; 1/3/8-year values
> are sensitivity scenarios because human rebound kinetics remain unmeasured. Endogenous clearance remains disabled.
> Fisetin and quercetin-monotherapy remain placeholder stubs pending their own calibration passes.

| agent | senolytic pulse `S←S·(1−ε)` | senomorphic (g attenuation) | production suppression | cell-type-selective | intermittent | human evidence |
|---|---|---|---|---|---|---|
| **fisetin** | **YES — primary** (in-vivo clears p16+ T/NK/endothelial/MSC; *spares* macrophages/DCs — "not a pan-senolytic," Yousefzadeh 2018) | **secondary, cell-type-dependent** (senomorphic in MEFs; lowers tissue IL-6/IL-8/MCP-1) | **NO — wiki-silent; do NOT assign** | **partial** (in-vivo broad-ish; Zhu 2017 in-vitro = HUVEC-only) | **YES** (hit-and-run; t½ 0.09/3.1 h; 2 d/mo) | **limited** — ex-vivo human only (n=3); no hard-endpoint RCT |
| **quercetin ALONE** | **weak / partial — assign cautiously** (HUVEC ~50% @10 µM in vitro; incomplete coverage; **no human monotherapy evidence**) | plausible-but-secondary (NF-κB SASP, in-vitro only) | **NO — wiki-silent** | narrow (endothelial only) | t½ supports pulse, but **never trialed alone** | **NONE for monotherapy** |
| **D+Q** | **YES — primary, BROADER** (complementary SCAP coverage; human adipose p16 −35% / SA-βgal −62%, Hickson 2019) | secondary/**consequence** (circulating SASP falls *because* the source is cleared, not independent suppression) | **NO — wiki-silent** | broader than either agent (endothelial + preadipocyte/mesenchymal) | **YES** (3-day courses / monthly cycles) | **limited** — open-label pilots show burden↓; the one RCT (**Farr 2024 n=60**) **MISSED primary endpoint** |

**Refinements the wiki forces on the operator design:**
1. **Production-suppression is wiki-silent for all three senolytics** — none reduce the *new-senescence rate*; their
   evidence is entirely about acting on *already-senescent* cells. **Do NOT map fisetin/quercetin/D+Q to the
   production-suppression operator.** (The operator still exists in the model for agents that warrant it.)
2. **A clean senomorphic operator should be sourced from the wiki's DEDICATED senomorphics — rapamycin, JAK inhibitors
   (ruxolitinib/tofacitinib), NF-κB/IKK inhibitors, BET inhibitors, anti-IL-1β (canakinumab/CANTOS), metformin** — where
   the action is *continuous SASP attenuation that reverses on withdrawal*. For fisetin/D+Q the senomorphic effect is
   secondary/consequential, not the primary lever.
3. **Quercetin monotherapy ≠ D+Q.** Model them as **distinct intervention entities**; the human senescent-cell-clearance
   evidence is ALL D+Q — crediting it to quercetin alone is an explicit error the wiki flags.
4. **Efficacies are mechanism-DIRECTION-only, NOT calibration anchors.** The only RCT (Farr) was primary-negative;
   tissue-specific clearances (adipose −35% to −62%) are NOT organism-level; no re-accumulation time-constant is given
   (only "days–weeks"). So when §7 calibration happens, these magnitudes set *sign/plausible-range*, not point values.
5. **No senolytic is pan-clearing (SCAP cell-type-specificity).** With a single lumped `S` pool, `ε_kill` must be
   **< 1** (incomplete coverage). If `S` is ever disaggregated by cell type, fisetin / quercetin / D+Q clear *different
   sub-pools* (endothelial vs preadipocyte/mesenchymal vs macrophage-spared).

**Wiki-maintenance gap surfaced:** the D+Q human-trial evidence (Zhu 2015 / Justice 2019 / Hickson 2019 / Farr 2024)
has **no dedicated `studies/` pages** — it lives inline in `quercetin.md`/`dasatinib.md`/`senolytics.md`
(verified-scope confirms the PDFs were read). `studies/yousefzadeh-2018-fisetin-senolytic` is the only standalone
senolytic study page. Worth a future seeding pass before these trials anchor any calibration.

---

## 6. Invariance & test plan (design targets)

1. **Baseline invariance:** with no intervention and immunosenescence at population-default, `c=c0` ⇒ `dS/dt` reproduces
   the migrated senescence exponential ⇒ LE M 77.458855 / F 82.117850 unchanged.
2. **Senolytic ≠ freeze:** a senolytic pulse **drops `S`** (at the grid point after the dosing age — the 1-yr annual-grid
   lag; downstream inflammation then falls via the rate-loop), whereas freeze/slow leaves existing `S` untouched — assert the
   two operators produce *different* `S(t)`.
3. **Re-accumulation:** after a pulse, `S` re-accrues via `production − c·S`; a *repeated* schedule yields a lower
   time-averaged `S` than a single pulse — the intermittent-dosing payoff.
4. **Clearance is immunosenescence-driven, not age:** age fixed + immunosenescence frozen ⇒ `c` constant ⇒ `S` clears
   normally; immunosenescence elevated ⇒ `c` falls ⇒ `S` accrues faster.
5. **Operator orthogonality:** senomorphic changes inflammation without changing `S`; production-suppression lowers new-`S`
   without clearing existing `S`; clearance-restoration raises `c` without a direct kill — each leaves the others' signature absent.
6. **Stability:** §4 Jacobian + discrete-map checks pass for the chosen gains.

---

## 7. Open items requiring coefficients (DEFERRED — not assigned)

- `c0`, `f(immunosenescence)` (clearance baseline + its immunosenescence sensitivity).
- `ε_kill`, `ε_morph`, `ε_prod`, `ε_clear` per compound (from the verified wiki evidence + senolysis trial data).
  **D+Q `ε_kill` scenario live** (`0.17/0.35/0.62`; `dq-calibration-design.md`); fisetin / quercetin-mono
  `ε_kill` and all `ε_morph`/`ε_prod`/`ε_clear` still deferred.
- The loop gains `g_sen→infl`, `g_infl→sen` (from the loop note).
- Cell-type-selectivity fractions (fisetin clears a *subset* of senescent-cell types — needs the wiki's specificity data).

**Recommended build sequence (still design-first; activate nothing until §6.1, §6.6 pass structurally):**
(1) add `c(t)` as a clearance state (immunosenescence-driven, deviation-form, baseline-invariant);
(2) add the four intervention operators (semantics only, ε=0 ⇒ inert ⇒ baseline-invariant);
(3) activate the forward `sen→infl` rate edge (loop note) with sub-critical gain + the stability/invariance tests;
(4) only then calibrate compound efficacies against the wiki evidence.
