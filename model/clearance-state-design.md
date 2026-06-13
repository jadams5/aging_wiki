# senescent-cell-clearance-capacity `c(t)` — design note (DESIGN-ONLY)

**Status:** PROPOSED. **No coefficients assigned.** Companion to the loop + senolytic-intervention design notes.
Per user (2026-06-12). **Do NOT perform the sen→inflammation migration or wire compounds until reviewed.**
**Author:** claude · 2026-06-12. Biology from the loop sub-agent's verified brief (`senescence-immune-surveillance.md`).

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
after a pulse** (the baseline trajectory keeps rising; in the current engine a pulse-drop is a persistent offset and
`B` re-rises with `T`). What clearance controls is the **NET rate and loop stability** — specifically (i) whether a
perturbation (a senolytic pulse, or a loop excursion) **decays back toward the baseline trajectory** (the drop
"heals") versus persists, and (ii) whether the positive-feedback loop converges or runs away. So this note corrects the
earlier senolytic-note framing ("re-accumulation needs clearance" → "drop-healing + stability need clearance").

**Map to the deviation architecture.** `S = T + D` (baseline + deviation). At population default `dT/dt` reproduces
the migrated exponential (it already lumps `production − c0·T`). Linearising the clearance term about baseline adds a
**`−c0·D` decay** to the senescence-deviation dynamics: a perturbation `D` relaxes toward 0 at rate ~`c0` (the pulse
heals), while production self-amp adds `+0.0408·D`. The **net senescence-deviation eigenvalue ≈ (0.0408 − c0)** — the
concrete object the stability criterion (§5) bites on.

---

## Q1 — clearance capacity: a NODE, not a hidden parameter

**Recommend a named state** `senescent-cell-clearance-capacity` (a `bLayer` state, normalized [0,1], baseline `c0`).
Rationale: both of its relationships are *graph* relationships the model already represents elsewhere — it is **driven
by `immunosenescence`** (an existing node) and **targeted by an immune-restoration intervention** (§4). A node makes
both explicit and visible (greyed until activated), and it lets the existing **`immunosenescence → cellular-senescence`
stub** be re-expressed mechanistically (Q2). A hidden parameter inside the senescence dynamics would bury both edges.
Trade-off (a parameter is simpler) is outweighed by the need for drivable + interventable + inspectable behaviour.

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
| dynamics | instantaneous stock drop, then heals at rate ~`c` | raises the net decay rate ⇒ existing + future burden clears faster + loop more stable |
| maps to | fisetin / D+Q (cell-type-limited, hit-and-run) | immune/NK-restorative / SASP-clearance-boosting agents; "restore surveillance" |

They are **orthogonal and interacting**: a senolytic pulse drops `S` now; restoring `c` makes that drop *heal more
slowly* (clears the re-forming cells) and bounds the loop. Modeling both lets the simulator distinguish "kill the
cells once" from "fix the remover." (The `clearance-restoration` operator is built only WITH the `c` state — deferred.)

---

## Q5 — stability: Jacobian + discrete-map criteria (the concrete conditions)

The coupled system is `(D_sen, D_infl, Δc)`. Linearised about baseline, the **continuous-time Jacobian** must have all
`Re(λ) < 0`; the **forward-Euler discrete update map** (at the model `dt`=1) must have all `|λ| < 1`. Spectral-radius
alone is insufficient (carried correction). Concrete anchors this design provides:

- **Senescence-deviation self-term:** `∂(dD_sen/dt)/∂D_sen ≈ (production_self_amp − c0) = (0.0408 − c0)`. For the
  senescence node alone to be self-stabilising (a pulse heals, doesn't grow), **`c0 > 0.0408`** — a concrete lower
  bound on the baseline clearance rate, derived from the C3b self-amp coefficient.
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
3. **Drop-healing (the corrected re-accumulation):** after a pulse, `D_sen` decays toward 0 at rate ~`c0` (returns to
   the baseline trajectory) — distinct from the current persistent-offset behaviour.
4. **Immune-restoration ≠ senolysis:** `clearance-restoration` raises `c` (faster healing, no instantaneous drop);
   `senolytic-pulse` drops `S` (no `c` change) — orthogonal signatures.
5. **Stability:** §5 Jacobian (`Re(λ)<0`) + discrete-map (`|λ|<1`) hold for the chosen `c0`, `β_imm`, loop gains;
   `c0 > 0.0408` for senescence self-stability.

---

## Deferred coefficients (NOT assigned) + sequence

- `c0` (baseline clearance/healing rate; wiki "days–weeks" only ⇒ illustrative/calibration, `> 0.0408`), `β_imm`
  (immunosenescence sensitivity), evasion sensitivity (if added), loop gains (loop note).
- **Build sequence (still design-first; review THIS note first):** (1) add `c(t)` as a `bLayer` state with `Δc=0`
  baseline (immunosenescence-driven, inert) + the deviation-form `−c·S` decay; prove baseline-invariant + the
  drop-healing test. (2) Add the `clearance-restoration` operator (inert). (3) THEN the atomic `sen→infl` G→rate
  migration + loop activation with the Jacobian/discrete stability checks. (4) THEN compound wiring. **Do not do (3)/(4)
  until this design is reviewed (per user).**
