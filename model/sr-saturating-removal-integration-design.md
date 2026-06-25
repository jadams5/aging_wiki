# Saturating-removal integration into the senescence/clearance/senolytic model — design note (DESIGN-ONLY)

**Status:** PROPOSED. **No coefficients assigned. Nothing to activate yet.** Amends the two live design notes
`model/clearance-state-design.md` and `model/senolytic-intervention-design.md` in light of newly-documented wiki
evidence. **Author:** claude · 2026-06-24. Gated on user/Codex review per the model's design-first discipline.

## 0. Trigger — new wiki evidence that lands on a gap we already flagged

Two pages were just seeded + verified:
- `[[studies/karin-2019-senescent-cell-turnover-gompertz]]` (verified against PMC6889273) — the **origin of the
  Saturating Removal (SR) model**, mouse-calibrated.
- `[[studies/raz-2026-sr-model-aging-regimes]]` + `[[hypotheses/saturating-removal-model]]` — the cross-species
  extension.

Karin 2019's empirical model is `dX/dt = ηt − R(X) + noise` with a **saturating (Michaelis–Menten) removal**
`R(X)`, death as a first-passage past threshold `X_c`. The load-bearing finding: senescent-cell **per-cell clearance
rate slows ~5×** with age (half-life ~5 d → ~25 d, mouse), and **the model reproduces this with density-dependent
self-inhibition (their mechanism iv) WITHOUT requiring extrinsic immune aging (mechanism iii, tested and not needed).**

**This is exactly the decomposition our clearance node flagged as missing.** `clearance-state-design.md` lumps
production and clearance into one net self-dynamic and tags `#gap/needs-production-clearance-decomposition`
("Lowering the absolute burden below baseline would require an identified production/clearance decomposition of the
lumped self-dynamic — which is wiki-silent"). It also *defers* a density-dependent clearance feedback as the optional
secondary driver `#gap/clearance-evasion` ("c↓ as S↑ … a second destabilising feedback … recommend deferring").
**Karin 2019 supplies the decomposition and promotes that deferred feedback to the primary, literature-anchored
nonlinearity.** This note proposes how to fold it in without breaking the model's two invariants
(baseline-LE preservation + no-age-pegging).

---

## 1. What changes, in one line

Replace the current **linear** clearance `−c·S` (capacity `c` driven down by immunosenescence = mechanism iii) with a
**saturating removal** `R(S)` whose per-cell rate falls as burden rises (mechanism iv), keeping immunosenescence as a
**secondary** driver that lowers the removal ceiling rather than as the load-bearing cause of accumulation.

Generic form (parameterization-neutral to dodge the β-vs-βκ ambiguity between the Karin and Raz write-ups):
```
R(S) = Vmax · S / (Km + S)
```
- `Vmax` = maximum removal flux (immune/endogenous clearance capacity ceiling).
- `Km`  = half-saturation burden (the "κ" scale; where per-cell removal has dropped to half).
- **per-cell removal rate** `R(S)/S = Vmax/(Km+S)` — **monotonically decreasing in S** ⇒ the density-dependent
  self-inhibition. This is the structural object the current `−c·S` lacks.

Karin's `βκX/(κ+X)` and Raz's `βx/(κ+x)` are both special cases (they differ only in whether `β` absorbs `κ`); map
whichever to `{Vmax, Km}` at calibration.

---

## 2. Three concrete consequences (why this is worth the change)

1. **A second runaway mechanism + the "un-saturation" leverage — stated carefully (Codex review, 2026-06-24).**
   With linear `−c·S`, accumulation/runaway comes only from production self-amplification fighting a constant `c`. With
   saturating `R(S)`, runaway *also* arises when **production approaches the removal ceiling `Vmax`** (per-cell rate
   `Vmax/(Km+S)` falls and damping `R'(S)` weakens as `S` rises — the density-dependence). A senolytic that drops `S`
   transiently restores removal *headroom* (`Vmax − R(S)` grows) and raises the per-cell rate.
   **CORRECTION to the first draft:** in **deviation form `x = S − T`, `x = 0` is always the equilibrium absent ongoing
   intervention** — so a **one-off** pulse, in a locally-stable (monostable) system, **returns toward baseline**;
   saturating `R` changes the *rate* and the nonlinear stability *margin* of that return, it does **NOT** by itself
   create a persistent below-baseline attractor. A genuinely-lower persistent state requires **one** of:
   (a) **repeated dosing** → a lower *time-average* `S` (the intermittent-dosing payoff — already invariance-test #3,
   not a new fixed point); (b) **raised `Vmax`** (the clearance-restoration operator) → the moving setpoint itself
   shifts down; or (c) genuine **bistability from the sen↔infl positive-feedback loop**, where a hit-and-run pulse
   crosses a separatrix into a lower basin and *latches*. (c) is the real candidate mechanism for durable hit-and-run
   benefit, but it **must be established** (loop gain vs combined damping admits two stable equilibria), **not assumed**
   — and it is gated on loop activation, which is itself frozen. **So the honest claim is:** SR makes the system
   critically sensitive near the ceiling (clearing burden has outsized *transient* effect, and *can* enable bistable
   latching once the loop is on), and repeated dosing lowers the time-average — but a single pulse does not buy a
   permanent below-baseline trajectory. The linear model cannot express the ceiling-driven sensitivity at all; that
   gap is real, the "permanent rejuvenation from one pulse" framing was not.

2. **Anchors the synthetic coefficients.** `c0` (currently "wiki-thin, days–weeks") and the senolytic **rebound
   half-life** (currently "human kinetics unmeasured; 1/3/8-yr sensitivity scenarios") gain a structural anchor:
   **rebound ≈ senescent-cell turnover time, which itself lengthens with burden/age** (~5 d → ~25 d in mouse). Under
   saturating removal the post-pulse rebound becomes **emergent from `P − R(S)`** rather than a free-fit τ.

3. **Sharper, not redundant, operator semantics.** The four-operator split (pulse / senomorphic / production-suppress /
   clearance-restoration) becomes *more* meaningful: "clearance-restoration" now raises `Vmax` (the ceiling), which is
   qualitatively different from a pulse that resets `S` — and the difference is large precisely near saturation.

---

## 3. The two invariants — how each is preserved

### 3a. Baseline-LE invariance (M 77.458855 / F 82.117850) — by construction, via back-out

Do **not** re-fit the baseline to Karin's mouse `ηt`. Keep the existing baseline trajectory `T(t)` (already
upstream-sourced) byte-identical and introduce the nonlinearity **only on the deviation + intervention-response
layer**. Back out the *implied* baseline production from the existing baseline and the chosen removal curve:
```
P_baseline(t) := dT/dt + R(T)         # CONTINUOUS form — a definition/bookkeeping back-out, NOT a new age-driver
```
**Discrete engine (Codex review):** the model integrates at `Δt = 1 yr` with explicit Euler. The cancellation must use
the **actual annual baseline increment `T[k+1] − T[k]`**, NOT a continuous-derivative approximation — i.e. implement the
update so that at `x = 0` the live increment equals `T[k+1] − T[k]` exactly (byte-identical), with `R` evaluated
identically on the live and baseline states. The continuous identity above is the rationale; the engine must realize it
as an exact discrete deviation cancellation. Then the deviation `x = S − T` evolves as
```
Δx ≈ {[P(S) − P(T)] − [R(S) − R(T)]}·Δt  + (loop / intervention terms)
```
At population default (`x = 0`, immunosenescence at baseline) every bracket vanishes ⇒ the baseline increment is
untouched ⇒ **baseline LE invariant by construction.** Ship with the nonlinearity **disabled** (a flag that collapses `R(S)−R(T)` back to the
current `−c0·x` linearization, `c0 = 0`) so baseline AND perturbations are unchanged until calibrated — same discipline
as the `c0 = β_imm = 0` ship state today.

**Caveat to flag for review:** unlike the linear term, `R(S)` is **not behaviorally inert once `Vmax, Km > 0`** — it
changes every perturbation/intervention response (this is the point). So "disabled" = coefficients off; the deviation
test-suite must use synthetic `{Vmax, Km}` exactly as the current drop-healing tests use synthetic `c0`.

### 3b. No-age-pegging — the production side stays endogenous; only the removal *state-function* is added

**Karin's production is `ηt` — explicitly age-linear. We do NOT adopt that.** `R(S) = Vmax·S/(Km+S)` is a function of
**state `S` only — no `t`** — so it is fully age-free. production **deviations** keep coming from upstream node deviations (genomic instability, telomere attrition,
stem-cell-exhaustion, the inflammation→senescence loop arm) exactly as now.

**Net, stated precisely (Codex review — the first draft over-claimed):** the **removal nonlinearity `R(S)` is
state-only and genuinely age-free**. `P_baseline(t) := T[k+1]−T[k] + R(T)` is **not** a live age-driven rate law — it is
a **reference-trajectory bookkeeping back-out** that inherits whatever age content already lives in the existing
baseline `T(t)` (i.e. the pre-existing, separately-tracked `#gap/immunosenescence-age-table` — which this note neither
fixes nor worsens). So the correct claim is **"no *new* age-pegging is introduced, and the removal law reads state not
age,"** NOT "the entire layer is age-free." The residual age content is exactly the pre-existing baseline's, unchanged.
(Adopting Karin's `ηt` literally as a live production law *would* introduce new age-pegging and violate the prime
directive — explicitly out of scope.)

---

## 4. Mechanism iii (immunosenescence) vs iv (saturation) — keep both, re-rank them

Karin shows iv suffices alone; that does **not** mean iii is wrong — immunosenescence-driven clearance decline is
separately documented (`senescence-immune-surveillance.md`, NK NCR loss, efferocytosis decline). The faithful model:
- **iv = primary, intrinsic:** the `R(S)` saturation (per-cell rate falls as `S` rises). Carries the
  critical-slowing-down / runaway and the senolytic leverage.
- **iii = secondary, extrinsic:** immunosenescence lowers the **ceiling** `Vmax` (deviation-form
  `ΔVmax = −β_imm·(immunosenescence − baseline)`), an *additional* destabiliser, not the load-bearing one.

This **promotes the deferred `#gap/clearance-evasion`** (density-dependent feedback) from optional to primary and
**demotes** immunosenescence from "the verified clearance-failure→exponential driver" to a modifier. Re-word the
clearance-state note accordingly. The pre-existing `immunosenescence → cellular-senescence` stub still routes through
clearance (now via `Vmax`, not `c`).

---

## 5. Stability — the Jacobian changes (flag for the reviewer)

Linear clearance contributed a **constant** damping `c0`. Saturating removal contributes a **burden-dependent** damping
`R'(S) = Vmax·Km/(Km+S)²`, which **decreases as S rises** — damping weakens with burden (the destabilising
density-dependence; this *is* critical-slowing-down).

**Local condition, written generally (Codex review — don't mix the `0.04`/`0.0408` constants).** Let `P_S(T)` be the
production self-amplification slope at baseline. Continuous self-stability of a senescence perturbation:
```
P_S(T) − R'(T)  <  0                       # R'(T) = Vmax·Km/(Km+T)^2
```
Discrete explicit-Euler map at `Δt = 1` needs **BOTH** bounds (Codex — fast clearance can be continuously stable yet
Euler-unstable):
```
−2 < (P_S(T) − R'(T))·Δt < 0               # |1 + (P_S−R')·Δt| < 1
```
Use the engine's *actual* discrete self-increment for `P_S`, not a hand-substituted `0.04` vs `0.0408`. The margin is
**tied to where baseline `T` sits relative to `Km`** (the regime): `T ≪ Km` ⇒ near-linear, strong damping, comfortably
stable; `T → Km` and beyond ⇒ damping collapses and the loop can run away — the verified late-life acceleration. Note
the upper bound: if human turnover is fast relative to `Δt` (large `R'`), Euler can overshoot/oscillate — see §8.

**The immunosenescence→`Vmax` deviation term, expanded (Codex finding 6).** With `q(S) = S/(Km+S)` and
`Vmax = V0 − β_imm·(immunosenescence − baseline)` (clamp `Vmax ≥ 0`), the removal contribution to `dx/dt` is the SR
analogue of the old `−Δc·S`:
```
−[R(S) − R(T)]  =  −V0·[q(S) − q(T)]  −  ΔVmax·q(S)        ΔVmax = −β_imm·(immunosenescence − baseline)
```
The first term is the intrinsic saturation (mechanism iv); the second is the immunosenescence modifier (mechanism iii).

**Jacobian — state definition matters (Codex finding 5).** The clearance-capacity node is **algebraic, not an
integrated state** (`clearance-state-design.md` Q1), so `ΔVmax` is an algebraic *input*, **not an eigenmode**. The
actual dynamical states are `(x_sen, x_infl, I)` where `I` is the upstream **immunosenescence** state (only if/once it
is itself a `∫rate·dt` state; today it is a Tier-A age-table, so until its own de-age-pegging migration the "3rd row"
is not a live eigenmode and the system is effectively 2×2 `(x_sen, x_infl)` with `Vmax` an exogenous input). The
senescence row partials, explicitly:
```
∂ẋ_sen/∂x_sen = P_S(T) − V0·Km/(Km+T)^2
∂ẋ_sen/∂I     = +β_imm · q(T)            # I↑ ⇒ Vmax↓ ⇒ removal↓ ⇒ senescence↑   (sign check at calibration)
∂ẋ_sen/∂x_infl = g_infl→sen             # loop arm (frozen until loop activation)
```
plus the inflammation row and its `g_sen→infl`. The full matrix must stay Hurwitz (continuous) and inside the unit
circle (discrete); a sub-step integrator for this node/loop is the documented fallback if `Δt = 1` is too coarse.

`Km` relative to the baseline burden range is therefore **the key new calibration handle**, and it is calibratable
against the **regime classification**: humans are *quasi-steady-state* (removal keeps pace until old age ⇒ baseline
should sit in the headroom region for most of life, tipping toward `Km` only late), per `[[hypotheses/saturating-removal-model]]`.

---

## 6. Senolytic operator + rebound — what to revise

> **SUPERSEDED IN PART by §11 (2026-06-24):** the "rebound becomes intrinsic via `R(S)`" lean below was **reversed**
> after the two-timescale calibration analysis — the pulse rebound **stays a separate, faster empirical `τ_rebound`
> (≈0.5 yr)**, NOT unified with the slow SR removal. The single-state-accounting and mode-exclusion points below still
> apply to the *endogenous* clearance; read §11 for the resolved design.

- **Pulse semantics unchanged** structurally (`S ← S·(1 − ε_kill)` at dosing ages), but its **rebound can become
  intrinsic**: once `{Vmax, Km}` are calibrated, post-pulse re-accumulation is governed by `dS/dt = P − R(S)`.
  **State-accounting requirement (Codex finding 7) — not a free declaration.** The engine today carries the pulse
  effect in a *separate* `op.dev` channel, distinct from the persistent `accumDev`, with a guard at
  `engine.mjs:407–427`. For `R(S)` to heal the pulse, **the pulse drop must be folded into the single live state `S`
  that `R(S) − R(T)` sees** — otherwise `R` acts on `accumDev` while the pulse lives in `op.dev` and is never cleared by
  it. So unifying the rebound is a state-representation change, not just a parameter swap.
- **Exactly one healing mode may be active per deviation (mutual exclusion).** Three modes must be made explicit and
  mutually exclusive: (i) **empirical rebound τ** (current fallback; the human turnover time is unmeasured — Karin's
  ~25 d is mouse), (ii) **legacy linear `−c0·x`**, (iii) **unified SR `R(S)`**. Until `{Vmax, Km}` are calibrated,
  **keep mode (i) as the shipped fallback.** Whichever is active, the others must be off for that deviation, or the
  double-heal overshoot returns.
- **Revisit / retire the double-heal guard.** Today the guard excludes a rebounding pulse from the `−c0·x` term. Under
  mode (iii) the pulse drop is a true reset of `S` that the *one* law `R(S)` then acts on — there is no second healer,
  so the guard is replaced by the single-state accounting above. Regression-test against the existing overshoot
  scenario (`c0 = 0.15` + 4-yr rebound crossing above baseline by age 70) under each mode.
- **Clearance-restoration operator** now raises `Vmax` (ceiling) rather than `c0` (slope) — semantics to update.

---

## 7. Mesh with the animal-trial evidence (calibration sanity targets, not anchors)

The wiki's senolytic trial record maps cleanly onto the operator modes — and gives the SR integration sanity checks:

- **Xu 2018** (old-mouse, **intermittent** D+Q) → the **pulse** operator; its hit-and-run efficacy + "start old" timing
  are the direct prediction of saturation (leverage is largest near the ceiling, late in life). Good consilience.
- **Baker 2016** (genetic INK-ATTAC, twice-weekly **from 12 mo**, **+27%/+24%** median LE) and **Yousefzadeh 2018**
  (fisetin **chronic diet from 85 wk**, median *and max* LE) → **sustained clearance** = the
  **clearance-restoration / raised-`Vmax`** mode, NOT the pulse mode. (Note Baker starts *mid-life* + frequent —
  a caution against over-reading "only start old.")
- **Translation caution (Raz 2026):** mice are **ballistic** (production ≫ removal); removal `Vmax` is **near-invariant
  across mammals**; **production sets species lifespan.** So the large mouse LE effects (24–36%) likely **overstate**
  human lifespan benefit — consistent with the only human RCT, **Farr 2024 (D+Q, n=60), missing its primary endpoint
  with null circulating SASP.** ⇒ **The simulator should let senolytics cut standing burden + downstream
  inflammation/phenotype deviation (sickspan/morbidity) and shave mortality on the margin — NOT reset the aging clock.**
  This is a tighter, more defensible calibration target than "senolytics extend LE X%."
- **Hopeful counter-reading to preserve:** humans are *quasi-steady-state*, so removal matters *more* in human mortality
  dynamics; a senolytic that un-saturates removal at old age could be well-leveraged for **old-age morbidity** if it
  pushes `S` below `Km`. The model should be *able* to express this upside without baking it in as certain.

---

## 8. Build sequence (design-first; activate nothing until invariance + stability pass) + deferred coefficients

**Three explicit, mutually-exclusive modes (Codex finding 9 — "collapses to `−c0·x`" was ambiguous):**
**(0) DISABLED** — coefficients off, behavior byte-identical to today; **(1) LEGACY-LINEAR-SYNTHETIC** — the current
`−c0·x` with synthetic `c0`; **(2) SR-SYNTHETIC** — `R(S)` with synthetic `{Vmax, Km}`. Default ship = (0). The
test-suite runs (1) and (2) with synthetic coefficients only.

1. Add `R(S) = Vmax·S/(Km+S)` as the senescence node's removal law in **discrete deviation form** (§3a — exact
   `T[k+1]−T[k]` cancellation), selectable via the mode switch above (default DISABLED). Prove baseline-LE
   byte-identical + a SR-synthetic drop-healing test.
2. Re-derive §5 stability (continuous + discrete, BOTH Euler bounds, correct state set — 2×2 today, 3×3 only once
   immunosenescence is a live state); confirm the regime-tied margin.
3. Re-rank drivers (§4): `R(S)` primary, immunosenescence → `ΔVmax` secondary (per the explicit expansion in §5);
   re-route the immunosenescence stub onto `Vmax` (route-once, no parallel stub).
4. **Resolve the `Δt = 1 yr` representability blocker BEFORE activating fast kinetics (Codex finding 8).** Explicit
   Euler cannot represent removal whose timescale is sub-annual; with large `R'` it oscillates/overshoots/clamps. The
   severity depends on the **(unmeasured) human** turnover time — Karin's ~5–25 d is *mouse*; human senescent-cell
   turnover may be far slower (months–years), in which case `Δt = 1` may suffice. If human turnover is sub-annual,
   require a **sub-step integrator or an exact/implicit one-step map** for this node before calibration. Do not assume.
5. Unify the senolytic rebound with `R(S)` (§6) via single-state accounting; retire the double-heal guard; regression-test
   each mode.
6. Only then calibrate — anchoring **structure** to Karin and **human magnitudes** to Raz's human fit.

**Invariance / safety guard tests to add (Codex finding 9):** byte-identical M/F LE in DISABLED; `max|B − T| = 0`
with no intervention under SR-SYNTHETIC; static check for **no direct age read** in SR code; **no parallel**
immunosenescence→senescence stub left running alongside the `Vmax` route; nonnegativity clamps `S, Km, Vmax ≥ 0`; and
no hidden `accumDev` drift when `Vmax` is clamped.

**Coefficients — NOW ASSIGNED as best-guess (Path B): see §11** for `Vmax`, `Km`, `β_imm`, per-compound `ε_kill`, and
`τ_rebound`, each with provenance + range. (The model-architecture **Option A** — nonlinearity on the deviation/response
layer, baseline untouched — is retained; **Option B** baseline re-fit stays out of scope.)

---

## 9. Wiki/model cross-refs

- Amends: `model/clearance-state-design.md` (§0 governing eq, Q2 evasion, Q5 stability), `model/senolytic-intervention-design.md` (§1 clearance var, §2 pulse rebound).
- Evidence: `[[studies/karin-2019-senescent-cell-turnover-gompertz]]`, `[[studies/raz-2026-sr-model-aging-regimes]]`, `[[hypotheses/saturating-removal-model]]`, `[[hallmarks/cellular-senescence]]` (§ "two arms").
- Calibration data: `[[interventions/pharmacological/senolytics]]`, `[[studies/yousefzadeh-2018-fisetin-senolytic]]`, Baker 2016 / Xu 2018 / Farr 2024 (inline on the senolytics/dasatinib/quercetin pages).

---

## 10. Review log

- **2026-06-24 — Codex (GPT-5.5, high effort, read-only) review.** Findings folded in:
  1. **Below-baseline rejuvenation claim was wrong** (the material correction). In deviation form `x = 0` stays the
     equilibrium; a one-off pulse returns to baseline. A persistent lower state needs repeated dosing (lower
     time-average), a raised `Vmax`, or **loop-driven bistability** (must be proven, gated on loop activation) — §2.1
     rewritten.
  2. **No-age-pegging language softened** — removal `R(S)` is state-only/age-free; `P_baseline` back-out is a
     reference-trajectory bookkeeping artifact carrying the *existing* baseline's age content, not a new driver (§3b).
  3. **Discrete cancellation** must use the actual annual increment `T[k+1]−T[k]`, not a continuous derivative (§3a).
  4. **Stability** rewritten generally (`P_S(T) − R'(T) < 0`; both Euler bounds; stop mixing `0.04`/`0.0408`) (§5).
  5. **Jacobian state set corrected** — clearance node is algebraic (not an eigenmode); system is 2×2 `(x_sen, x_infl)`
     today, 3×3 only once immunosenescence is a live state (§5).
  6. **Explicit `ΔVmax` deviation expansion** added: `−V0[q(S)−q(T)] − ΔVmax·q(S)` (§5).
  7. **Rebound unification needs single-state accounting** (fold `op.dev` into the state `R` sees) + three
     mutually-exclusive healing modes (§6).
  8. **`Δt = 1 yr` representability blocker** elevated to a pre-activation gate, with the human-turnover-timescale
     nuance (mouse days ≠ human, which may be sub-annual or not) (§8.4).
  9. **Explicit DISABLED / LEGACY-LINEAR / SR-SYNTHETIC modes** + invariance/safety guard test list (§8).
- **Codex's overall call:** would not approve the first draft as written (chiefly finding 1); endorses SR as the right
  structural direction once the above are fixed. This revision addresses all nine. **Still gated on user review before
  any implementation** (loop activation + compound wiring remain frozen per the parent notes).
- **2026-06-24 — Codex (GPT-5.5, high effort) calibration collaboration, 2 rounds → §11.** Round 1: vetted the value
  set — pushed `Vmax` 0.05→0.075 (tip age 85→93, less aggressive), confirmed the two-timescale reading (Karin cell-level
  β not portable; burden relaxation is years-decades ⇒ **`Δt=1` is valid, no sub-annual blocker** after all), lowered
  fisetin/quercetin kills, set `β_imm=0.010`. Round 2: I pushed back on its "unify pulse rebound into SR" — it agreed
  the pulse rebound must **stay separate and faster** (gross-production refill ≠ net relaxation), and anchored
  `τ_rebound≈0.5 yr` via quarter-power allometry. Both folded into §11.
- **2026-06-24 — IMPLEMENTED (Path B) + Codex code-review.** Landed in `model/engine.mjs` (clearance fold: SR branch
  `dx/dt = coeff·(S−T) − [R(S;VmaxEff) − R(T;Vmax)]`, deviation-form, pulse-separation guard preserved), the
  `cellular-senescence.clearance` block in `frameworks/causal-graph-parameters.md` (source of truth → `build-params` →
  `params.json`), the D+Q preset rebound (1/3/8 → 0.25/0.5/1.5 yr), `model/test.mjs` (SR test block; D+Q ΔLE@55
  re-baselined 0.01865→0.0053; exact rebound pinned under `form:linear`); `viz/aging-simulator.html` rebuilt via
  `build-app`. **Baseline byte-identical** (M 77.45885545055621 / F 82.11784965025268, max|B−T|=0); **322/322 pass.**
  A self-caught bug (using `VmaxEff` for both `R(S)` and `R(T)` ⇒ immunosenescence/restoration cancel at S=T) was fixed
  (only `R(S)` uses the live ceiling). Codex (GPT-5.5 high) reviewed the diff, ran the suite itself (322/322), confirmed
  the math + re-baselines, flagged two items — both fixed: the legacy `c0` double-heal test now sets `form:linear`;
  `prodResp` uses the clamped `(S−T)` for out-of-domain consistency.

---

## 11. Calibration — best-guess, evidence-backed coefficient set (Path B; Codex-collaborated 2026-06-24)

Per user direction (2026-06-24): **Path B** — batch the full SR integration (incl. activating the deviation
production-response) as ONE reviewed change, with **best-guess evidence-backed values filled in** for the frozen steps,
**derived in collaboration with Codex (GPT-5.5, high effort, two rounds).** These are `provenance: anchored | placeholder`
starting values for review — NOT a fitted calibration. Nothing is wired until the batch is approved.

**Senescence engine facts used:** baseline `T(age) = 0.025·(exp(0.04·(age−20))−1)`; production self-response slope
`P_S = coeff = 0.04081/yr`; SR removal `R(S)=Vmax·S/(Km+S)`, local damping `R'(S)=Vmax·Km/(Km+S)²`; deviation stability
requires `P_S − R'(T) < 0` (continuous) and `−2 < (P_S−R'(T))·Δt < 0` (Euler, Δt=1). `S` is a **normalized hallmark
burden, NOT the SR death threshold** — so `Km` is *not* directly Karin's mouse `κ/X_c=0.065`.

| Coefficient | Value (central) | Range / scenarios | Provenance |
|---|---|---|---|
| **`Vmax`** (max removal flux) | **0.075 /yr** | 0.065–0.085 | `anchored` — STRUCTURE: Karin saturating removal (mechanism iv). REGIME: Raz human quasi-steady-state. Set via `Vmax = P_S·(Km+T_crit)²/Km` so the deviation system stays removal-dominated (resilient) across the normal lifespan and tips into local instability (loss of resilience / critical slowing) only at **T_crit≈0.44 ⇒ age ≈ 93** — i.e. beyond median death, matching "quasi-steady until *very* old age." (Codex pushed this out from my first-pass age-85 tip, which was too aggressive.) |
| **`Km`** (half-saturation burden) | **0.30** | 0.25–0.40 | `anchored` — places half-saturation in the **late-life normalized-burden range** (T(85)=0.31). Higher than mouse `κ/X_c=0.065` *qualitatively* encodes the human (quasi-steady) vs mouse (ballistic) regime, but is NOT a literal threshold-ratio map. |
| **production-response gain** | **0.04081 /yr** | fixed | `anchored` — the existing baseline self-amp coeff, now applied to **deviations** (Path B activation). Not a new free parameter (internal consistency). |
| **`β_imm`** (immunosenescence→`Vmax`) | **0.010 /yr** | 0.005–0.015 | `placeholder` — secondary modifier (Karin: mechanism iii NOT required). Rate effect `∂ẋ/∂I = β_imm·T/(Km+T)` ≈ 0.0035/yr@70, 0.0051/yr@85 — appropriately small vs `P_S`. Cap full-range `Vmax` suppression ~10–25%. |
| **`ε_kill` D+Q** | 0.17 / **0.35** / 0.62 | low/central/high | `anchored` — Hickson 2019 human adipose biopsy (p16 −35% / SA-βgal −62%). Best-anchored of the three. |
| **`ε_kill` fisetin** | 0.05 / **0.15** / 0.30 | low confidence | `placeholder` — Yousefzadeh 2018 (broad but spares macrophage/DC); **ex-vivo human only**, oral PK→tissue uncertain. Codex lowered my first pass (0.10/0.22/0.40). |
| **`ε_kill` quercetin-mono** | 0.03 / **0.08** / 0.15 | very low confidence | `placeholder` — endothelial-only, **no human monotherapy evidence**. Optional/debug preset; do not co-rank with D+Q. |
| **`τ_rebound`** (senolytic pulse) | **0.5 yr** | 0.25 / 0.5 / 1.5 yr | `anchored` — **kept SEPARATE from SR removal** (see decision below). Quarter-power allometric scaling of Karin old-mouse ~25 d turnover: `25 d·(70/0.0275)^0.25 ≈ 0.49 yr`, consistent with the months-scale clinical hit-and-run cadence. **Retires the old 1/3/8-yr set**; 1–2 yr kept only as a slow-repopulation high-end. |
| forward `sen→infl` | 0.2 (G-edge) | unchanged | kept algebraic (SASP quasi-steady at annual Δt) — loop note §8. |
| reverse `infl→sen` | stubbed | unchanged | NOT activated (self-amp already embeds paracrine; double-count risk). |

**Key collaboration outcome — pulse rebound stays SEPARATE from SR removal (corrects §6's earlier "intrinsic rebound"
lean).** The two-timescale analysis: Karin's cell-level removal `β≈0.27/day≈100/yr` is **not portable** to this
burden-level annual model; the SR removal `Vmax≈0.075/yr` is a *slow burden-deviation* relaxation (small-signal
half-life **years-to-decades**, e.g. `t½=ln2/(R'(T)−P_S)` ≈ 11 yr @70). If the senolytic pulse healed *only* via that
slow SR relaxation, **one course would give an implausibly durable decades-long dip** (worse near late-life critical
slowing) — contradicting the clinical hit-and-run / re-dosing picture and Karin's ~month mouse rebound. The post-kill
**refill is driven by gross primary production** (telomere/DNA-damage/oncogenic triggers forming new senescent cells at
the age-set rate), which the simulator's *net* self-dynamic structurally understates. **Resolution:**
`S_total = T + accumDev + pulseDev`; **SR removal acts on `accumDev`/endogenous deviations; `pulseDev` heals via its own
exact `exp(−ln2·Δt/τ_rebound)` map** (engine line ~404) — the existing double-heal guard is preserved, not retired.
(Cost: SR does not express "un-saturation after senolysis" for the pulse component until `S` is split into
gross-production/removal or senotype sub-pools — an acceptable v0 compromise.)

**Stability summary (Vmax=0.075, Km=0.30):** continuous `λ = P_S − R'(T)` is negative (stable) through age ~93, then
crosses 0; Euler one-step multiplier `1+λ·Δt` stays in `[−1,1]` throughout (at `S=0`, `R'=Vmax/Km=0.25` ⇒ multiplier
0.79). No extra damping needed; the live `0.2` forward edge is not a landmine while the reverse arm stays stubbed.

**Still gated:** these are review-stage best-guesses for the batched change. Implementation (params.json + engine
branch + tests) happens only on approval. The `#gap/needs-clearance-coefficients` / `#gap/needs-production-clearance-
decomposition` tags downgrade from "wiki-silent" to "best-guess anchored, pending fit."
