# senescent-cell-clearance-capacity `c(t)` — design note (DESIGN-ONLY)

**Status:** PROPOSED. **No coefficients assigned.** Companion to the loop + senolytic-intervention design notes.
Per user (2026-06-12). **Do NOT perform the sen→inflammation migration or wire compounds until reviewed.**
**Author:** claude · 2026-06-12. Biology from the loop sub-agent's verified brief (`senescence-immune-surveillance.md`).

## Implementation status (2026-06-12) — steps 1–2 landed, DISABLED

Per the reviewer's "steps 1–2 are ready," implemented + tested with SYNTHETIC coefficients (biological `c0`/`β` ship
**= 0 ⇒ disabled**; baseline AND perturbations unchanged ⇒ 176/176, baseline LE byte-identical). In `simulate()`:
- **Clearance contribution `(−c0·x − Δc·S)`** folded into the senescence-node `accumDev` each step (`x` = carried
  deviation; `Δc = −β·(immunosenescence deviation)`). Acts on the **deviation `x`**, so baseline is exact.
- **`clearance-restoration` operator** `{kind,target,boost,startAge,endAge}` — raises `c0` over a window (the immune
  lever; orthogonal to the drug-mediated senolytic-pulse).
- **Node field** `cellular-senescence.clearance:{c0:0, driver:"immunosenescence", beta:0}` (disabled).

Tests (synthetic): disabled ⇒ a senolytic-pulse drop **persists**; synthetic `c0` ⇒ the drop **heals**; baseline
invariant under synthetic `c0`; elevated immunosenescence (synthetic `β`) **raises** senescence (clearance failure);
the restoration operator **clears** the excess.

**Deliberately deferred (frozen, per user):** the **`[f(S)−f(T)]` production-response** (the senescence deviation's own
self-amplification) is NOT yet added — it arrives with **loop activation (step 3)**. Until then the clearance is *pure
decay* (`dx/dt = −c0·x − Δc·S`), stable for any `c0 > 0`; the binding **`c0 > 0.04`** stability condition (§5) applies
only once the production-response is on. Also frozen: the `sen→infl` G→rate migration and compound wiring.

> **⚠ LIMITATION — deviation-form clearance ≠ absolute rejuvenation (explicit, per user).** Because clearance acts on the
> **deviation `x = S − T`** (`−c0·x`), it can only restore `S` **toward the population baseline `T`** — it **cannot push
> `S` BELOW baseline**. So `clearance-restoration` ("immune restoration") brings an elevated individual back down to the
> population-average senescent burden, but is **NOT absolute rejuvenation** (it cannot clear the baseline senescent
> load that the whole population carries). Lowering the *absolute* burden below baseline would require an **identified
> production/clearance decomposition** of the lumped self-dynamic (so clearance could be raised above its baseline
> contribution `c0`) — which is **wiki-silent**. `#gap/needs-production-clearance-decomposition`. (The same boundary
> applies to a senolytic pulse's *steady state*: it drops `S` transiently, but absent the decomposition the trajectory
> heals back toward — not below — baseline.)

---

## 0. Governing equation + the re-accumulation correction (user)

```
dS/dt = production(S)  +  paracrine_induction(D_infl)  −  clearanceCapacity c(t) · S
```
- **production(S)** = the migrated senescence self-dynamic (gross new-senescence formation; self-amp coeff
  `e^r−1 = 0.0408`).
- **paracrine_induction** = the inflammation→senescence loop arm (a node-deviation rate term reading `D_infl`;
  activated by the *loop* migration, not here).
- **−c(t)·S** = clearance: a **burden-dependent negative rate** (immune removal of a *fraction* of the stock).

**Correction (user, applied):** re-accumulation does NOT need clearance — **production already re-grows the burden
after a pulse** (the baseline trajectory keeps rising). A senolytic operator may now carry a separate empirical
response-persistence half-life that heals only that treatment deviation; this does not replace endogenous clearance.
What clearance controls is the **NET rate and loop stability** — specifically (i) whether a
perturbation (a senolytic pulse, or a loop excursion) **decays back toward the baseline trajectory** (the drop
"heals") versus persists, and (ii) whether the positive-feedback loop converges or runs away. So this note corrects the
earlier senolytic-note framing ("re-accumulation needs clearance" → "drop-healing + stability need clearance").

**Map to the deviation architecture — clearance must act on the DEVIATION, not absolute `S` (reviewer correction).**
Let `x = S − T` (deviation). The baseline-preserving clearance dynamics are:
```
dx/dt = [ f(S) − f(T) ]  −  c0·x  −  Δc·S
```
- `[f(S) − f(T)]` = the production self-dynamic difference (live minus baseline).
- **`−c0·x`** = clearance decay **on the deviation `x`** (NOT `−c0·S`). An absolute `−c0·S` term would alter the
  baseline unless balanced by an explicit production term — and we do not know that production/clearance decomposition
  (wiki-silent). The deviation form **avoids needing it**: at baseline `x=0 ⇒ −c0·x = 0`, so `dT/dt` is untouched.
- **`−Δc·S`** = the clearance-CAPACITY deviation (`Δc = c − c0`) times the full burden `S` — how a change in clearance
  capacity (e.g. immunosenescence lowering `c`) adds/removes a fraction of the *whole* stock.

At baseline `x=0`, `Δc=0` ⇒ both clearance terms vanish ⇒ baseline exactly preserved. The stability object is the
sign of `dx/dt`'s `x`-coefficient — see §5 (and note the discrete-vs-continuous distinction there).

---

## Q1 — clearance capacity: a NODE, not a hidden parameter

**Recommend a named ALGEBRAIC physiology/capacity node** `senescent-cell-clearance-capacity` — a `value`-type node
(`value = c0 − β·(immunosenescence − baseline)`, normalized), **NOT an `∫rate·dt` integrated state** (reviewer
correction). Clearance capacity is a *function of* its drivers (immunosenescence + interventions); it has no
accumulation law of its own, so it is algebraic — like `arterial-stiffness` (`value = 0.65·elastin + 0.36·crosslink`),
not like `ecm-crosslink` (`∫rate·dt`). It would only become an integrated state if clearance capacity itself accrued
damage over time independent of its drivers (not warranted by the biology). Rationale for a node (vs a hidden
parameter): both its relationships are *graph* relationships — **driven by `immunosenescence`** and **targeted by an
immune-restoration intervention** (§4) — and it lets the existing **`immunosenescence → cellular-senescence` stub** be
re-expressed mechanistically (Q2). A node makes both explicit, inspectable, and greyed-until-activated.

---

## Q2 — age-free upstream drivers (especially immunosenescence)

- **Primary driver: `immunosenescence` (negative).** Clearance falls as immunosenescence rises: NK subset-shift
  (CD56bright→CD56dimCD57+), NCR (NKp30/46) loss, macrophage efferocytosis decline (`immunosenescence.md`,
  `senescence-immune-surveillance.md`). Deviation-form: `Δc = −β_imm·(immunosenescence − immunosenescence_baseline)`.
  **Clearance reads the immunosenescence STATE, never age** — satisfying "age only verifies."
- **⚠ Age-pegging chain caveat (honest):** `immunosenescence` is itself **currently a Tier-A age-table** (age-pegged).
  So clearance is age-free *at its own edge*, but the residual age-pegging lives **upstream** in immunosenescence's
  un-migrated table. True age-emergence of `c` is therefore **gated on a future immunosenescence de-age-pegging
  migration** (its own driver = stem-cell-exhaustion is already a live inbound). Flag `#gap/immunosenescence-age-table`;
  do not paper over it by reading age into `c`.
- **This operationalizes the existing `immunosenescence → cellular-senescence` stub:** that coupling becomes the
  mechanistic path `immunosenescence → (lowers c) → (raises S via −c·S)`. The clearance state REPLACES the direct stub
  (route-once) rather than adding a parallel one.
- **Optional secondary driver — immune evasion (burden-dependent, negative):** senescent cells evade clearance
  (HLA-E/NKG2A checkpoint, NKG2D-ligand shedding; `senescence-immune-surveillance.md`). This makes `c` depend on `S`
  itself (`c ↓ as S ↑`) — a *second* destabilising feedback. **Recommend deferring** it (flag `#gap/clearance-evasion`):
  start with immunosenescence-only; add evasion once the base loop is stable, as it sharpens the runaway.

---

## Q3 — population-baseline decomposition (no trajectory change)

**Deviation-form, exactly as the migrations.** At population default `immunosenescence = baseline ⇒ Δc = 0 ⇒ c = c0`,
and `dS/dt` reproduces the migrated exponential **unchanged** (the baseline self-dynamic already embeds `c0` inside its
net growth — we never need the absolute production/clearance split, which is wiki-silent). Only `Δc` bites:
`dD_sen/dt += −Δc·S` (and the `−c0·D` decay term, which is 0 at baseline). **Baseline LE invariant by construction**
(M 77.458855 / F 82.117850). The decomposition introduces TWO deferred coefficients — `c0` (the baseline
decay/healing rate; wiki-thin, "days–weeks") and `β_imm` (immunosenescence sensitivity) — assigned later, NOT here.

---

## Q4 — intervention semantics: immune restoration vs pharmacological senolysis (distinct)

| | **Pharmacological senolysis** | **Immune restoration** |
|---|---|---|
| operator | `senolytic-pulse` (already built) | `clearance-restoration` (the deferred 4th operator) |
| acts on | `S` directly — drug kills cells (`S ← S·(1−ε_kill)`) | `c` — boosts the endogenous remover (`c ← c + ε_clear`) |
| `c`-dependence | **independent of `c`** (drug-mediated death, not immune) | **IS the `c` lever** |
| dynamics | stock drop (applied at the grid point AFTER the dosing age — annual k→k+1 lag), then heals back toward baseline at rate ~`c` | raises the net decay rate ⇒ existing + future burden clears faster + loop more stable |
| maps to | fisetin / D+Q (cell-type-limited, hit-and-run) | immune/NK-restorative / SASP-clearance-boosting agents; "restore surveillance" |

They are **distinct levers, not additive on the same quantity.** A senolytic pulse is a *transient* negative deviation in
`S`; restoring `c` raises the net decay rate — which clears the standing senescence *excess* faster (a persistently lower
trajectory — restoration's real benefit) and bounds the loop. (Higher `c` makes a senolytic's negative drop return to
baseline *faster*, not slower — restoration does **not** "preserve" a one-off kill.) **A pulse that carries its own
rebound half-life is EXCLUDED from the `c`/`-c0·x` term** (engine guard, 2026-06-13) — it heals via its own exact map, so
`clearance-restoration` does NOT additionally act on it (avoiding the double-heal overshoot). So the "interacting" framing
holds for persistent pulses; rebounding pulses are isolated from `c0`. (Separately, the immunosenescence `−dc·Barr` term
still reads the pulse-reduced absolute burden — a small beta-channel divergence to resolve when `β` is calibrated.) Modeling
both still lets the simulator distinguish "kill the cells once" from "fix the remover." (The `clearance-restoration`
operator is built only WITH the `c` state — deferred.)

---

## Q5 — stability: Jacobian + discrete-map criteria (the concrete conditions)

The coupled system is `(x_sen, x_infl, Δc)`. Stability must be checked in BOTH units, which are NOT interchangeable
(reviewer correction — `0.0408` is the discrete annual increment, NOT a continuous Jacobian eigenvalue):

- **Continuous approximation (Jacobian, `Re(λ)<0`):** the senescence self-GROWTH RATE is the curve exponent
  **`r = 0.04/year`** (from C3b's `curve{exponential, r:0.04}`). Local stability of the senescence node alone (a pulse
  heals, doesn't grow) requires roughly **`c0 > 0.04 / year`** — the continuous eigenvalue is `(r − c0) = (0.04 − c0)`.
- **Discrete update map (current engine, `Δt=1`, `|λ|<1`):** the one-step deviation multiplier is approximately
  **`exp(0.04) − c0·Δt ≈ 1.0408 − c0·Δt`**; require its magnitude `< 1`, i.e. `c0·Δt > 0.0408` ⇒ **`c0 > 0.0408 / year`**
  at `Δt=1`. Here `0.0408 = e^0.04 − 1` is the *discrete annual increment*, distinct from the continuous rate `0.04`.
- The two bounds are close (0.04 vs 0.0408) but conceptually different; the calibration must satisfy **both**, and if
  `Δt=1` makes the discrete bound bite too hard a sub-step integrator for the loop is an option (flag, don't assume).
- **Loop + clearance rows:** the off-diagonal loop gains and the `−Δc·S` / immunosenescence coupling enter the full
  3×3 Jacobian, which must stay Hurwitz (continuous) and inside the unit circle (discrete).
- **Loop coupling:** the off-diagonal `g_sen→infl`, `g_infl→sen` (loop note) enter the Jacobian; the full 3×3 must stay
  Hurwitz. Roughly, the loop gain product must not overcome the combined clearance + inflammation-saturation damping.
- **The clearance row:** `dΔc/dt` driven by immunosenescence (and optionally `−∂evasion/∂S·D_sen`) — the evasion term,
  if added, couples `Δc` back to `D_sen` and can flip stability; that's why it's deferred (Q2).
- **Discrete-map note:** with `dt=1`, `c0` near 1 risks the discrete eigenvalue leaving the unit circle even if the
  continuous Jacobian is fine; the calibration must check BOTH. (A sub-step integrator for the loop is an option if
  `dt=1` is too coarse — flag, don't assume.)

---

## Q6 — uniform clearance vs tissue/cell-type selectivity

**Recommend uniform `c` on a single lumped `S` FIRST.** But flag the real tension (senolytic sub-agent): **no senolytic
is pan-clearing** — SCAPs are cell-type-specific (fisetin spares macrophages; quercetin endothelial-only; D+Q broader).
A uniform `c` + a single `S` cannot express that a drug clears *some* sub-pools and not others. Two-stage path:
1. **Now (design target):** lumped `S`, uniform `c`; senolytic-pulse uses a `killFraction < 1` to crudely encode
   incomplete coverage. Adequate for organism-level LE.
2. **Future (`#gap/clearance-celltype`):** disaggregate `S` into cell-type sub-pools (endothelial / preadipocyte-
   mesenchymal / macrophage-spared), each with its own `c_i` and its own immunosenescence sensitivity; compounds then
   clear *different* sub-pools (matching the verified SCAP selectivity). Large change — defer until the lumped model is
   validated and a cell-type-resolved use-case justifies it.

---

## Invariance & test plan (design targets)

1. **Baseline invariance:** immunosenescence at population default ⇒ `Δc=0`, `c=c0` lumped ⇒ `dS/dt` = migrated
   exponential ⇒ LE unchanged.
2. **Clearance is immunosenescence-driven, not age:** age fixed, immunosenescence *deviated up* ⇒ `c` falls ⇒ a
   senolytic-pulse drop heals *slower* and steady-state `S` is *higher*; immunosenescence at baseline ⇒ unchanged.
3. **Endogenous drop-healing:** without an operator-specific response half-life, a pulse deviation decays toward 0 at
   rate ~`c0`. Operator response persistence and physiological immune clearance are separate parameters. **Mutual
   exclusion (enforced in the engine 2026-06-13):** a pulse that carries its own rebound (`decay<1`) is **excluded from
   the `−c0·x` term** — otherwise `c0` and the rebound both heal the same deviation, and because `c0`'s compensation
   accumulates in the *persistent* `accumDev` while the rebound decays away, the burden **overshoots above baseline**
   (verified: `c0=0.15` + 4-yr rebound crosses above baseline by age 70). So: rebounding pulses heal via their own map;
   `c0` heals only persistent (no-rebound) drops and non-pulse deviations. Regression-tested.
4. **Immune-restoration ≠ senolysis:** `clearance-restoration` raises `c` (faster healing, no instantaneous drop);
   `senolytic-pulse` drops `S` (no `c` change) — orthogonal signatures.
5. **Stability:** §5 Jacobian (`Re(λ)<0`) + discrete-map (`|λ|<1`) hold for the chosen `c0`, `β_imm`, loop gains;
   `c0 > 0.0408` for senescence self-stability.

---

## Deferred coefficients (NOT assigned) + sequence

- `c0` (baseline clearance/healing rate; wiki "days–weeks" only ⇒ illustrative/calibration, `> 0.0408`), `β_imm`
  (immunosenescence sensitivity), evasion sensitivity (if added), loop gains (loop note).
**⚠ NOT behaviorally inert once `c0` is connected (reviewer correction).** Unlike the migrations/operators (which are
fully inert at `ε=0`), connecting a biological `c0 > 0` keeps the **baseline identical** but **changes every senescence
perturbation and intervention response** (the deviation now decays at `~c0` instead of persisting). Therefore: ship
with **biological `c0` (and `β_imm`) DISABLED** (= 0 ⇒ both baseline AND perturbation behaviour unchanged), and use
**SYNTHETIC `c0` / `Δc` values only in the drop-healing tests** until calibrated. "Disabled" here means the clearance
*coefficients* are 0, not that the machinery is absent.

- **Build sequence (still design-first; review THIS note first):** (1) add the algebraic `c` capacity node
  (immunosenescence-driven, deviation-form) + the deviation-form clearance contribution `(−c0·x − Δc·S)` on the
  senescence deviation, **with `c0 = β_imm = 0` by default** (baseline + perturbations unchanged); prove baseline-
  invariant + a SYNTHETIC-coefficient drop-healing test. (2) Add the `clearance-restoration` operator (inert at `ε=0`).
  (3) THEN the atomic `sen→infl` G→rate migration + loop activation with the Jacobian/discrete stability checks.
  (4) THEN compound wiring. **Do not do (3)/(4) until reviewed (per user); loop activation + compounds stay frozen.**
