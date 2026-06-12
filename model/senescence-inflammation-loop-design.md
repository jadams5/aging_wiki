# senescence ↔ chronic-inflammation loop — design note (DESIGN-ONLY, no coefficients)

**Status:** PROPOSED architecture for review. **No β assigned** (per user: settle the architecture before any
coefficient). Both nodes are now emergent `∫rate·dt` (senescence = exponential self-amplifier C3b;
inflammation = logistic saturating self-dynamic C3c), so the loop is *ready* to be made dynamical.
**Neither direction is activated in this pass.**
**Author:** claude · 2026-06-12. Biology verified against the wiki by a research sub-agent (findings § 0).

---

## 0. Biology grounding (verified against the wiki; pages cited by the sub-agent)

| Question | Verified finding | For the design |
|---|---|---|
| **sen → infl** (SASP) | NF-κB/IL-6/IL-8/IL-1β; ATM-dependent, p53-independent (Rodier 2009). Aging-relevant driver is the **accumulating senescent-cell BURDEN**, framed by the wiki as a stock: **`burden = production × residence time = ∫(production − clearance)dt`**. Per-cell SASP onset is fast (4–7 d ramp) but quasi-steady once on. Grade **strong**; intervention-tractability **high**. | **Rate-like**: the node-to-node effect runs through an *accumulating stock*, not an instantaneous level. |
| **infl → sen** (paracrine) | CXCR2-chemokines (IL-8), IL-6, TGF-β, HMGB1 → "**expanding wave**" / "**feed-forward**" progressive conversion of neighbours "accelerating tissue aging." Human causal spreading **in-progress** (partial). The reverse edge is **not** separately strength-graded; `chronic-inflammation` is **absent from senescence's `caused-by:`** — paracrine-from-inflammation is an **amplifier**, not a first-class driver. | **Rate-like** (progressive, cumulative). And **weaker/asymmetric** vs the forward arm. |
| **the loop** | Explicitly **self-amplifying, bidirectional** (`causal-graph-data.md` "mutual reinforcement loops"). Verified trajectory = **exponential** (the fingerprint of rate-coupled positive feedback). | A genuine dynamical positive-feedback loop. |
| **what BOUNDS it** | **Immune clearance** (NK/macrophage surveillance) is THE bound — an **external** term. The central aging event is that **clearance FAILS with age** (immunosenescence) → un-bounds the loop → **exponential, NOT saturating**. **No verified intrinsic ceiling.** | **Do not impose an artificial saturating ceiling.** The proper bound is an **age-declining clearance term** — which we do not yet model. |
| **baseline attribution** | Inflammaging is **multi-source** (senescence is 1 of **7** inbound drivers; no quantitative split — explicitly `#gap`). Senescence is driven by **primary/autonomous** triggers; paracrine-from-inflammation amplifies on top. **Fractions wiki-silent.** | The **deviation-form** approach (below) sidesteps needing the absolute fractions. |

**Sub-agent's synthesis:** the verified biology favours **rate coupling** (cumulative, history-dependent) over
instantaneous level coupling, in *structure* — but provides **no rate constants, no attribution fractions, and no
intrinsic ceiling**, so coefficients and the (clearance-based, age-declining) stabiliser must come from outside the wiki.

---

## 1. The decision: cross-node effects modify RATES, not instantaneous burden

**Adopt rate coupling.** A senescence deviation increases the *rate* at which inflammation accumulates (and vice
versa), integrated over time — so the effect is cumulative and history-dependent, and the self-dynamics *see* the
coupled deviation. The current `G`-matrix edge (`senescence → inflammation`, instantaneous algebraic overlay) is the
exact failure mode the user flagged: the integrators never see it. Biology (burden-as-stock; expanding wave; exponential
signature) supports the rate reading on **both** arms.

Mechanically this reuses the **`accumDev` channel** already built for exogenous drivers, extended to read **another
node's deviation** as a driver:
```
d(accumDev_infl)/dt = g_sen→infl · D_sen          # SASP: senescence deviation drives inflammation accrual
d(accumDev_sen )/dt = g_infl→sen · D_infl          # paracrine: inflammation deviation drives senescence accrual
```
where `D_x` is node x's total deviation. `accumDev` folds into the primary deviation `P` (inside the coupling solve),
so the integrated loop effect still propagates onward through `G` to downstream nodes.

**Consequence — migrate, don't duplicate:** the existing **live `senescence → inflammation` G-matrix coupling MUST be
REMOVED** when its rate edge is added (else the forward arm is double-counted: once instantaneous, once integrated).
The reverse arm is currently a stub (not in `G`), so nothing to remove there.

---

## 2. Baseline decomposition (how the lumped self-dynamics stay valid)

Each self-dynamic currently **lumps** all endogenous feedback into its residual: the inflammation logistic residual
already embeds the *population-default* senescence contribution (alongside the other 6 inbound sources); the senescence
exponential residual embeds the *population-default* paracrine-from-inflammation contribution (alongside the primary
triggers). The decomposition that keeps the baseline exactly valid:

- **Deviation-form cross-edges.** Each rate edge is `g · (driver − driver_baseline)`. At the population-default
  trajectory every deviation `D = 0`, so **both cross-rate terms are 0**, `accumDev ≡ 0`, and each node evolves by its
  *uncoupled exact self-dynamic* → **baseline reproduced exactly** (LE M 77.458855 / F 82.117850 preserved by
  construction). The loop only bites under a perturbation (intervention/exposure).
- **This sidesteps the wiki-silent fractions.** We never need the absolute "what % of inflammaging is senescence-driven"
  split — only the *deviation response* gain. The residual (everything at population-default) stays lumped; the explicit
  edges carry only the *response to deviations*. (The price: we cannot, from this alone, attribute the baseline rise —
  that would need the fractions, which are a separate `#gap`.)

---

## 3. Update ordering

- **Baseline (population-default):** the two nodes are **uncoupled** (cross-deviations 0) ⇒ each uses its **exact**
  one-step map (logistic / exponential) ⇒ baseline is exact, no integration error. This is the clean property that
  preserves invariance even though the *coupled* system has no closed-form map.
- **Perturbed dynamics:** the coupled deviations integrate by **forward Euler, simultaneous** — at age `k`, after the
  per-age coupling solve yields `D_sen[k]`/`D_infl[k]`, advance `accumDev_sen += g_infl→sen·D_infl[k]·dt` and
  `accumDev_infl += g_sen→infl·D_sen[k]·dt` for step `k+1`. Using the just-computed `D[k]` for the *next* step's `P`
  avoids any within-step circularity (no nested fixed point across the loop). A cycle has no topological order, so
  simultaneous forward Euler (both from the same step) is the natural, order-independent choice.
- **Hybrid coexistence:** only this one loop moves to rate-integration; the rest of the `G`-matrix (other couplings)
  stays instantaneous. A node's deviation `P` therefore carries an instantaneous part (other `G` couplings) **and** an
  integrated part (`accumDev` loop). The design keeps these additive and explicit.

---

## 4. Stability / saturation — the key biology-driven finding

**The biology says there is NO intrinsic saturating ceiling; the loop is bounded by EXTERNAL immune clearance, whose
age-decline is what un-bounds it (→ exponential).** Three implications:

1. **Do not add an artificial saturating ceiling to the loop** — it would contradict the verified biology (the wiki's
   trajectory is exponential, not a homeostatic plateau). The inflammation node's logistic `cap` bounds *its own
   baseline self-dynamic*, but must NOT be repurposed as the loop's stabiliser.
2. **The correct stabiliser is a senescent-cell CLEARANCE term — and the reviewer (2026-06-12) confirms ONE new
   modeled variable is justified: `senescent-cell-clearance-capacity` (≈ senescence-immune-surveillance).**
   - **Form (reviewer correction #1):** clearance is a **burden-dependent NEGATIVE RATE `−c(t)·S`** (it removes a
     *fraction* of the existing senescent-cell stock per unit time), not merely a stabilising gain. So the senescence
     burden obeys `dS/dt = production(t) − c(t)·S`.
   - **`c(t)` is a STATE, not age (no-age-pegging):** clearance capacity is **driven DOWN by immunosenescence** (NK
     subset-shift + NCR loss, `immunosenescence.md`/`senescence-immune-surveillance.md`) and can be **restored by immune
     interventions**. **Do NOT make `c` directly age-dependent — age only VERIFIES its trajectory** (it must emerge from
     the immunosenescence state, exactly like the other migrated nodes). `#gap/needs-clearance-term`.
   - This is a first-class finding: *the loop cannot be faithfully activated without `c(t)`*, because clearance IS the
     bound and its immunosenescence-driven decline IS the aging dynamic (→ the verified exponential). Design `c(t)` and
     the loop **together** (see the companion intervention/clearance design note).
3. **Stability — must be checked properly (reviewer correction #2): `spectral radius < 1` ALONE is INSUFFICIENT for a
   continuous-time rate system.** Stability must be verified on BOTH:
   - the **Jacobian of the complete production−clearance dynamics** (continuous-time linearisation about the operating
     point — all eigenvalues `Re(λ) < 0`), AND
   - the **discrete update map** (the forward-Euler/one-step discretisation — all eigenvalues inside the unit circle,
     which couples the gain to the timestep `dt`).
   A discrete `|λ|<1` on the update map does not by itself guarantee the underlying continuous loop is dissipative, and a
   stable continuous Jacobian can still be destabilised by too large a `dt`. `clamp01` bounds the *burden* `B` but NOT
   `accumDev`, so both checks are needed to prevent `accumDev` runaway. Until `c(t)` is modeled, keep the loop gains in
   the regime where BOTH conditions hold; any soft saturation on `accumDev` is a clearly-flagged numerical stopgap for
   the missing biological (clearance) bound, not a substitute for it.

---

## 5. Asymmetry (forward strong, reverse amplifier)

The forward arm (`sen → infl`, SASP) is `strong`/first-class and currently live; the reverse arm (`infl → sen`,
paracrine) is an **amplifier** with only partial human evidence and no standalone grade. The architecture treats them
asymmetrically: **the forward arm is the well-grounded one to migrate to rate-coupling first; the reverse arm should be
activated more cautiously** (smaller, more-uncertain gain; possibly gated behind the clearance term, since paracrine
spreading is precisely what clearance is supposed to contain). "Activate either direction" (per user) is deliberately
deferred — this pass only settles *how* they would work.

---

## 6. Invariance & test plan (to be asserted when activated — design targets now)

1. **Baseline invariance (exact):** at population-default, cross-deviations 0 ⇒ uncoupled exact self-dynamics ⇒ LE
   M 77.458855 / F 82.117850 unchanged (±float). Both nodes' baseline burdens byte-match the C3b/C3c curves.
2. **Rate-coupling signature (history-dependence):** a senescence perturbation's effect on inflammation **grows over
   time** (integrated), and an *early* senescence intervention yields a **larger cumulative** inflammation reduction
   than a *late* one of equal size — the property an instantaneous `G`-edge cannot produce. (This is the test that
   proves rate- vs level-coupling.)
3. **No double-count:** moving `sen → infl` from `G` to rate leaves the *instantaneous-limit* behaviour unchanged only
   if the `G` edge is removed; assert the forward effect is carried once.
4. **Stability (both checks — reviewer correction #2):** under a bounded perturbation the loop **converges** (no
   `accumDev` divergence) — verified on the **continuous-time Jacobian** of the full production−clearance dynamics
   (`Re(λ)<0`) AND the **discrete update map** (`|λ|<1` at the model `dt`). Spectral-radius<1 alone is insufficient.
5. **Clearance:** `c(t)` emerges from immunosenescence (NOT age): with age fixed but immunosenescence frozen, `c` does
   not decline; a senescence-burden perturbation is cleared at `−c·S` and recovers toward baseline.
6. **Asymmetry:** forward gain > reverse gain (sign + ordering), per the biology.
7. **Intervention re-baseline:** senolytic / anti-inflammatory ΔLE will **legitimately change** (the loop becomes
   cumulative; senolysis now *clears* burden rather than only freezing accrual) — re-baseline those test targets when
   activated, documenting the shift as the intended effect.

---

## 7. Open items requiring coefficients (DEFERRED — not assigned here)

- `g_sen→infl`, `g_infl→sen` (the loop gains) — **wiki-silent on rate constants**; need external calibration
  (senolysis→circulating-SASP human data e.g. Hickson 2019; CANTOS anti-IL-1β; paracrine-spreading kinetics).
- The **clearance term / node** (`c(t)`, immunosenescence-driven, NOT age) — required for a faithful bound (§4.2);
  design it jointly with the **intervention operators** (per reviewer 2026-06-12) — see the companion design note
  `model/senolytic-intervention-design.md`. This is the reviewer's "minimal model that distinguishes prevention,
  senomorphic suppression, endogenous immune clearance, and pulsed senolysis."
- The **mediation accounting** the user flagged: when the forward rate edge is activated, the senescence-mediated slice
  of any downstream effect (e.g. inflammation→atherosclerosis already CANTOS-calibrated) must be route-once-decomposed.

**Recommended sequence when we proceed (still design-first):** (1) add the clearance term design (the real bound);
(2) migrate the forward `sen→infl` G-edge → rate edge with a sub-critical gain + the invariance/stability tests;
(3) only then consider the reverse `infl→sen` arm. No coefficients until §6.1–6.4 pass structurally.
