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
2. **The correct stabiliser is a senescent-cell CLEARANCE term** — an age-declining negative rate on senescence accrual
   (NK/macrophage surveillance, declining with immunosenescence; `senescence-immune-surveillance.md`). **We do not model
   this yet.** A faithful loop therefore depends on adding a clearance term (or node). This is a first-class design
   finding: *the loop cannot be fully/correctly activated without the clearance term*, because clearance IS the bound
   and its decline IS the aging dynamic. **`#gap/needs-clearance-term`.**
3. **Interim numerical stability (until clearance exists):** the linearised loop must be **sub-critical** — the discrete
   loop-gain product `g_sen→infl · g_infl→sen` (× the through-`G` factors) must keep the system's **spectral radius < 1**
   so a bounded perturbation yields a bounded (converging) response, not divergence. `clamp01` bounds the *burden* `B`
   but NOT `accumDev`, so a super-critical gain would make `accumDev` run away even with clamped `B`. The activation pass
   must verify the spectral-radius condition and may need a soft saturation on `accumDev` as a stopgap, clearly flagged
   as a numerical bound standing in for the missing biological (clearance) bound.

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
4. **Stability:** under a bounded perturbation the loop **converges** (no `accumDev` divergence); spectral radius < 1.
5. **Asymmetry:** forward gain > reverse gain (sign + ordering), per the biology.
6. **Intervention re-baseline:** senolytic / anti-inflammatory ΔLE will **legitimately change** (the loop becomes
   cumulative) — re-baseline those test targets when activated, documenting the shift as the intended effect.

---

## 7. Open items requiring coefficients (DEFERRED — not assigned here)

- `g_sen→infl`, `g_infl→sen` (the loop gains) — **wiki-silent on rate constants**; need external calibration
  (senolysis→circulating-SASP human data e.g. Hickson 2019; CANTOS anti-IL-1β; paracrine-spreading kinetics).
- The **clearance term / node** (age-declining immune surveillance) — required for a faithful bound (§4.2); design it
  jointly with the loop, not after.
- The **mediation accounting** the user flagged: when the forward rate edge is activated, the senescence-mediated slice
  of any downstream effect (e.g. inflammation→atherosclerosis already CANTOS-calibrated) must be route-once-decomposed.

**Recommended sequence when we proceed (still design-first):** (1) add the clearance term design (the real bound);
(2) migrate the forward `sen→infl` G-edge → rate edge with a sub-critical gain + the invariance/stability tests;
(3) only then consider the reverse `infl→sen` arm. No coefficients until §6.1–6.4 pass structurally.
