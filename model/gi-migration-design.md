# Genomic-instability `∫rate·dt` migration — design note

**Status:** APPROVED w/ corrections (external review 2026-06-12) — implementing. Phase C3 of the age-hardcoding roadmap.
**Author:** claude · 2026-06-12

> **Corrections incorporated from review (2026-06-12) — these OVERRIDE the original prose below where they conflict:**
> 1. **accumDev goes INSIDE the coupling solve.** Fold it into the primary deviation: `P = prim + accumDev`, then `D = P + couple·(G·D)`, `B = clamp01(T + D)`. (My original post-solve placement was a bug — GI exposure would not have propagated through GI's outgoing couplings.)
> 2. **Actually integrate the baseline.** Replace GI's `curve` with `initial:0.05, rate:{base:0.01, terms:[]}` and compute `T[k]=T[k-1]+base·DT`. Keeping `curveT()` was a fake migration (age stays a direct input). Expect numerical equivalence **within ~1e-9 tolerance, NOT byte identity** (float op-order: repeated `+0.01` ≠ `0.01·x`); re-baseline test targets only if they move beyond tolerance.
> 3. **History-dependence claim corrected.** Inputs are constant over a run → "quit at 50" is NOT representable. What the integral captures is **cumulative-over-constant-lifetime exposure** (older = more accumulated, vs. an instantaneous deviation). Driver population must calibrate a **lifetime-equivalent input** (or wait for an age-indexed exposure schema). The §4 "quitting" example is struck.
> 4. **History test = the deviation, not the level.** Baseline GI already rises, so monotonicity proves nothing. Assert `B_exposed(age) − B_population(age)` **increases with exposure duration**, AND that a **downstream GI target moves** (which also proves correction #1 — in-solve propagation).
> 5. **Clamp claim narrowed.** The solver propagates **unclamped** `D` through `G`; only `B=clamp01(T+D)` is clamped. Assert only: `B_GI ∈ [0,1]` and all downstream outputs **finite** — NOT "no overflow into couplings."
> 6. **Canonical input ID.** Use the **wired** `smokingStatus` in docs, not the unwired `smoking` placeholder — BUT note `smokingStatus` is categorical and cannot feed a numeric rate term, so the GI driver population faces a real numeric-input decision (numeric `smoking`/cig-day vs. a categorical→rate mapping vs. a status→cig-day bridge). Flagged as a populate-time task; the GI stub's `smoking` source is left as-is for now with a reconciliation note.

The first migration of a **hallmark-coupling-matrix node** off a closed-form age-curve onto an
emergent `∫rate·dt` baseline. The existing `∫rate·dt` state nodes (`elastin-fatigue`,
`ecm-crosslink`, `beta-cell-decline`) all live in the **bLayer** (clinical/physiology), *outside*
the hallmark coupling matrix — so this migration breaks new ground and the pattern it establishes
will be reused for the senescence / inflammation / mito / telomere migrations.

---

## 0. Goal & scope

**Goal:** convert `genomic-instability` from a closed-form linear age-curve into an emergent
baseline produced by forward-integrating a rate, and add the **rate-term channel** that lets
exogenous mutagen drivers feed GI's accumulation in *history-dependent* (integrated) form. This
removes the `#gap/needs-state-node-migration` populate-blocker from the 3 GI driver stubs
(`smoking`/`alcohol`/`airPollution → genomic-instability`), converting them from
*architecture-blocked* to *populate-ready*.

**Scope — substrate change ONLY.** No driver is populated in this step; the 3 driver stubs stay
stubs. **This migration is numerically a no-op** — exact baseline + intervention LE invariance
(M 77.4589 / F 82.1178 to ±1e-9), 148/148 unchanged — because the integrated baseline reproduces
the linear curve and the new rate channel is empty. The *interesting* behaviour (history-dependent
exogenous accumulation) only appears when a driver is later populated, as a separate reviewed step.

---

## 1. Targeted GI-inbound completeness check (done — your concern about "edges we'll want during the migration")

Drivers of genomic instability, mapped onto the sim:

| Driver (biology) | In sim? | Migration treatment |
|---|---|---|
| **Repair-fidelity decline with age** (BER/HR/NHEJ decline; the dominant intrinsic driver) | implicit in the age-curve | **This IS `r_base`** — the autonomous accrual the integral reproduces |
| Endogenous ROS (8-oxo-dG) — *contributing* factor, not primary | folded in `r_base` | part of the unattributed baseline rate |
| Smoking (PAH adducts) | stub `driver` ✓ | becomes a populate-ready rate term |
| Alcohol (acetaldehyde) | stub `driver` ✓ | becomes a populate-ready rate term |
| Air pollution (PM2.5) | stub `driver` ✓ | becomes a populate-ready rate term |
| `telomere-attrition → GI` | live `coupling` ✓ | stays an instantaneous coupling (see §3) |
| `mitochondrial-dysfunction → GI` (ROS) | stub `coupling` ✓ | stays a coupling |
| `epigenetic-alterations → GI` (repair-gene silencing) | stub `coupling` ✓ | stays a coupling |
| cGAS nuclear HR-brake | — | intrinsic *mechanism*, not a separate input; no edge |
| **UV radiation** (XP syndrome; skin) | **NOT a sim input** | would be a NEW exogenous input; folds into `r_base` residual until then |
| **Ionizing radiation** (background + medical) | **NOT a sim input** | same — new-input candidate, low all-cause weight |

**Verdict:** GI's inbound is **complete for the migration**. The only unrepresented drivers (UV,
ionizing radiation) are *new exogenous inputs*, not missing edges — and they fold into the
unattributed baseline residual until/unless added. **This both validates your instinct (more
drivers may surface) and confirms the migration is robust to it:** finding UV later is purely
additive — it becomes another deviation-form rate term (=0 at baseline), exactly like the mutagen
stubs, with **no re-migration**. Only the autonomous `r_base` is locked by this step, and `r_base`
is independent of how many drivers exist.

---

## 2. Why this is non-trivial (the architectural finding)

GI is a **hallmark node** in the coupling matrix. The engine computes, per age `k` (engine.mjs
§ simulate, the fixed-point loop):

```
D = prim + couple·(G·D)          // coupling deviation, fixed-point solved
B[i][k] = clamp01( T[i][k] + D[i] )
```
where `T[i][k] = curveT(node, sex, age)` (closed-form) and `prim[i]` accumulates **intervention**
effects across age (`prim[i] -= efficacy·ΔT`). Two consequences:

1. **There is currently NO channel for a bLayer exogenous input (smoking) to feed a hallmark
   node's burden at all** — exogenous inputs feed *mediators* and *causes* (the bLayer phase, which
   runs *after* `Barr` is computed), never a node deviation. The migration must **add** that channel.
2. `prim[]` is already a per-node **accumulator** (an integral) — but only interventions write to
   it. The new driver channel is the exact analogue for exogenous drivers, so the architecture
   already supports the pattern.

---

## 3. The design — emergent baseline + an integrated driver-deviation channel

**(a) Emergent baseline.** Keep `T_GI` as the population-default trajectory, now *understood and
computed* as `∫r_base·dt`. Because the linear curve **is** the integral of a constant rate,
forward-Euler with `r_base = slope = 0.01`, `T_GI[0] = t0 = 0.05`, `DT = 1` reproduces
`0.05 + 0.01·(age−20)` **exactly**. (Implementation: either special-case nodes carrying a new
`rate` field in the `Tarr` precompute, or — simpler — leave `curveT` as-is since the linear curve
already equals the integral, and only add the channel in (b). Recommend the latter: zero risk to
the baseline.)

**(b) Integrated driver-deviation channel (the actual new machinery).** Give a hallmark node an
optional `rate: { terms: [...] }` field (mirroring the state-node schema). When present, accumulate:

```
accumDev[i][0] = 0
accumDev[i][k] = accumDev[i][k-1] + ( Σ_j term_j(inputs, k-1) )·DT      // deviation-form terms, =0 at popMean
B[i][k] = clamp01( T[i][k] + D[i] + accumDev[i][k] )                    // fold into the burden
```

- Each `term` is `{ coeff: β, drivers:[{id, minus:popMean, floor?, cap?}], op? }`, **identical to
  state-node rate terms**, and **deviation-form** (`input − popMean`), so at population-mean inputs
  every term = 0 ⇒ `accumDev = 0` ⇒ `B` unchanged ⇒ **exact invariance**.
- GI ships with `rate: { terms: [] }` (empty) in this step ⇒ `accumDev ≡ 0`. The channel exists and
  is proven inert; drivers are populated later.
- `accumDev` is computed *inside* the per-age loop where the input values are already known (they
  are constant over the run today — see §4 note), so no phase-ordering problem.

**(c) Couplings stay instantaneous.** The inter-hallmark couplings into GI (`telomere→GI` live;
`mito→GI`, `epigenetic→GI` stubs) remain instantaneous deviations via the `G` matrix. Re-casting
inter-hallmark couplings as integrated rates is a **separate, larger task** (it touches the whole
coupling matrix) and is explicitly **out of scope** here.

---

## 4. Where drivers plug in (the NEXT step, not this one)

Populating `smoking → GI` later = append one term to GI's `rate.terms`:
```json
{ "coeff": <β>, "drivers": [ { "id": "smoking", "minus": <popMean> } ] }
```
with `β` in lesion-accrual per pack-year (deviation form). Because it's integrated, the effect is
**history-dependent**: an older smoker has accumulated more GI burden than a younger one at the same
intensity, and *quitting stops further accrual but does not undo accumulated damage* — the exact
realism the migration exists to capture. Each populate is **route-once**: the populated β replaces
the GI-mediated slice of the direct `smokingStatus→cancer` PAF (decompose, don't stack).

> **Note (time-varying exposure):** `inputs` are constant over a run today, so the integral of a
> constant rate grows linearly with age — already meaningfully different from an instantaneous
> deviation (older = more accumulated). True age-varying exposure profiles (quit at 50) need an
> age-indexed input schema — a *future* enhancement, not required here.

---

## 5. Invariance & test plan

- **Baseline:** `r_base` reproduces the linear curve ⇒ `Tarr` byte-identical ⇒ LE M 77.4589 /
  F 82.1178 to ±1e-9; **148/148 unchanged**. The empty `rate.terms` ⇒ `accumDev ≡ 0`.
- **New regression tests:**
  1. *channel-inert*: GI with `rate:{terms:[]}` ⇒ `Barr[GI]` and all-cause LE **identical** to pre-migration (both sexes), `max|Δ| = 0`.
  2. *deviation-zero-at-popMean*: inject a **synthetic** non-zero GI rate term; at popMean input the term = 0 ⇒ LE still invariant.
  3. *history-dependence*: with the synthetic term + a **deviated** input, `B_GI` rises **monotonically with age** and a fixed exposure yields a **larger** burden at 80 than at 50 (proves accumulation, distinguishes it from an instantaneous deviation).
  4. *clamp*: `accumDev` large ⇒ `B_GI` clamps at 1, no overflow into downstream couplings.
- **Validator (`validate-graph.mjs`):** recognise a node-level `rate` field (terms schema = state-node terms); and reclassify the GI driver-stub target check — a `driver` stub into a node that now carries a `rate` channel is **no longer** "not yet a state node" (drop that warning for GI).

---

## 6. Bookkeeping after the migration lands

- The 3 GI driver-stub notes + their `age-hardcoding-audit.md` Deferred rows: **drop
  `#gap/needs-state-node-migration`**; remaining blockers are `#gap/needs-verified-source` (the
  dose-response) + the route-once decomposition. They flip from architecture-blocked to
  populate-ready.
- **GI↔mito loop:** `mito` is still an age-curve node, so `mito→GI` stays an inert stub and the loop
  is dormant. When `mito` is later migrated, the pair becomes a coupled system — already flagged
  `#gap/loop-stability` on both stubs.
- Update `age-hardcoding-audit.md` § Migration status with the C3 row.

---

## 7. Open design choices — your call before I code

1. **General `rate` field on hallmark nodes vs. a GI-only special-case.** Recommend the **general
   node-level `rate` channel** — it's the reusable pattern for the senescence/inflammation/mito/
   telomere migrations that follow, and it's the same terms schema the state nodes already use.
2. **Integrate inter-hallmark couplings too?** Recommend **no / defer** — keep `telomere→GI` etc.
   instantaneous; re-integrating the coupling matrix is a separate phase.
3. **Migrate-only vs. migrate-and-populate-one-driver.** Recommend **migrate-only first** (pure
   no-op substrate change, exact invariance, lowest risk); populate `smoking→GI` as a separate
   reviewed step so the route-once PAF decomposition gets its own scrutiny.

If you're good with the three recommendations, the implementation is: (1) add the `accumDev`
channel to `simulate()`; (2) give GI `rate:{terms:[]}` + keep its curve; (3) teach
`validate-graph.mjs` the node `rate` field; (4) add the 4 regression tests; (5) update the stub
notes/tracker. All gated by the build+test harness, exact-invariance asserted.
