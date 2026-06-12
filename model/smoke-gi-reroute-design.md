# smoking → genomic-instability reroute — design note (phases 1b / 3 / 4)

**Status:** REVISED (review answers + Yoshida 2020 result, 2026-06-12). The block below OVERRIDES the
prose further down where they conflict. Phase 1 ✅ landed; Phase 1b/3/4 reshaped — re-review needed.
**Author:** claude · 2026-06-12.

> **REVISIONS v2 — review corrections + what the Yoshida seed actually found:**
>
> **A. Plateau ≠ decay (key correction).** Accumulated GI burden **plateaus** after quitting; it does
> **NOT decay**. Yoshida's "quit benefit" is **near-normal-cell repopulation** — a *separate*
> turnover/repopulation mechanism we do NOT model. So strike the earlier claim that the former-smoker
> cancer RR "decays with years-since-quit": it **plateaus at the at-quit level** and does not decline
> toward never. (A real decay would need a GI-repopulation/turnover term — a future, separate node.)
>
> **B. Irreversible term form.** The smoking term is `coeff·max(0, smoking − popMean)` (`{minus:popMean,
> floor:0}`): exposure ≤ popMean adds ZERO rate (never negative), so quitting → rate 0 → plateau, not
> decay. **Limitation (documented):** with the popMean reference, never-/light-smokers below popMean
> get NO sub-baseline credit (the population baseline already embeds average smoking). Re-referencing to
> a never-smoker baseline (term `coeff·smoking`, no minus) would credit never-smokers but breaks baseline
> invariance unless the GI `base` rate is recalibrated down to the never-smoker trajectory — a Phase-3
> design choice, deferred; start with the popMean-referenced irreversible form.
>
> **C. Yoshida has NO continuous dose-response slope.** It reports **categorical burden levels** — never
> baseline / **ex-smoker +2,330** / **current +5,300** SNVs/cell — and explicitly finds *no* significant
> per-cig/day or per-duration correlation (n=3 current smokers, underpowered). So a continuous
> `coeff·smoking` β anchored to a pack-year slope is **NOT evidence-supported**; the data is **status-keyed**
> (never/ex/current). Reconciliation with our continuous-profile substrate: the accrual *rate* is set so a
> *lifetime current smoker* reaches a burden consistent with the +5,300 current level (vs never); the
> **ex-smoker level then EMERGES from the plateau**, not from a separate ex coefficient. `#gap/dose-response-unclear`.
>
> **D. Our ex-smoker GI will sit ABOVE Yoshida's measured ex level.** Because we model irreversible
> accrual + plateau but NOT repopulation, a long-then-quit smoker keeps the burden reached at quit,
> whereas Yoshida's measured ex-smoker average is lowered by near-normal-cell repopulation. Document this
> as a conservative (over-estimating ex-smoker risk) limitation.
>
> **E. Status derivation (Phase 1b) refinements.** Derive status ONLY for an explicitly-supplied smoking
> profile; a MISSING smoking input stays the neutral **population mixture** (do NOT classify the popMean
> 2-cig/day default as an individual "current" smoker). Rule: explicit all-zero history ⇒ `never`; intensity
> above a **small positive threshold** now ⇒ `current`; prior-above-threshold but ~zero now ⇒ `former`. Use a
> threshold, not exact `>0`.
>
> **F. Mediation fraction (Phase 4).** Do NOT encode 1/3 (or any value) without evidence. Derive a plausible
> RANGE for the GI-mediated share of smoking→cancer from Yoshida + mechanistic/mediation literature, run a
> **sensitivity analysis across that range**, and pick a conservative central value tagged
> `#gap/uncertain-mediation-fraction`. **If the evidence cannot constrain the range meaningfully, keep the
> `smoke→GI` edge UNPOPULATED** rather than invent precision — a legitimate outcome.
>
> **G. Scope:** cancer only (smoke→GI→cancer); leave smoking's CVD/COPD/diabetes/CKD PAFs untouched (they
> route through inflammation, a later migration).
>
> **H. GO/NO-GO (verifier result, 2026-06-12): HOLD the populate.** The verified Yoshida 2020 settles two
> things that make a defensible populate impossible *right now*:
> - **No continuous dose-response** (categorical never/ex/current only; the per-cig/day null is underpowered,
>   not a confirmed flat curve). A continuous β would invent the dose-response shape.
> - **The cancer quit benefit IS the repopulation/dilution dynamic, which we do not model.** Yoshida: ex-smoker
>   risk reduction comes from quiescent-cell repopulation diluting the damaged-cell fraction — damaged cells
>   retain their load permanently. Our plateau-only GI therefore gives former ≈ current (no recovery), which
>   **cannot reproduce the epidemiological anchor** former 1.3 < current 2.2. Populating smoke→GI→cancer to
>   match the never/ex/current anchors REQUIRES a GI tissue-level term with **irreversible per-cell accrual +
>   quiescent-cell repopulation** (a two-compartment recovery), not the single plateau accumulator we have.
>
> Doing it now would mean inventing both the dose-response shape AND the recovery dynamic — the "invented
> precision" Q2 says to avoid. **So: keep `smoke→GI` UNPOPULATED.** Unblock requires building the
> repopulation/recovery term (the real next modeling step), or a separate well-powered continuous dose-response
> study (does not exist). What we KEEP from this pass: GI migrated to ∫rate·dt; the age-indexed exposure-profile
> substrate; the verified irreversible-accrual term form; the verified Yoshida page + its precise mechanism.

## TRACKED BLOCKER — two-compartment smoking-recovery model (required empirical anchors)

The smoke→GI→cancer reroute is HELD (above). Unblocking it requires building a **two-compartment GI tissue
model** — irreversible per-cell mutation accrual + a **quiescent-cell repopulation/dilution** term so the
tissue-level GI burden *recovers* after cessation (the cancer quit benefit). That model needs these empirical
anchors before it can be built defensibly (do NOT invent them):

1. **Continuous dose-response** — a well-powered normal-tissue smoking→somatic-mutation study (n ≥ 30–50 smokers
   with quantified pack-years) to set the **accrual rate per unit exposure**. Yoshida 2020 gives only categorical
   never/ex/current levels (n=3 current, underpowered). *Status: does not exist as of 2026.* `#gap/dose-response-categorical-only`
2. **Repopulation/dilution kinetics** — the **rate** at which near-normal cells repopulate after cessation
   (near-normal-cell fraction vs years-since-quit), to set the recovery time-constant. Yoshida shows the 4× ex-smoker
   enrichment but not its time-course. *Candidate: per-subject ex-smoker data by years-since-quit (Yoshida Suppl. Table 1, not yet extracted).* `#gap/needs-repopulation-dynamic`
3. **Tissue-burden → cancer-hazard mapping** — how the damaged-cell fraction × per-cell burden translates to cancer
   hazard, to calibrate the `GI→cancer` mechanistic path. *Candidates: mutation-burden→cancer cohorts; cancer cell-of-origin clonal-burden studies.*
4. **GI-mediated fraction of smoking→cancer** — the share of smoking's carcinogenicity that is mutation-burden-mediated
   (vs promotion / epigenetic / immune-evasion), for the route-once decomposition. Derive a *range* from mediation/
   mechanistic literature + **sensitivity analysis**; keep unpopulated if unconstrainable. `#gap/uncertain-mediation-fraction`

Tracked in `model/age-hardcoding-audit.md` § Deferred. A SEPARATE design+validation project (per the user, 2026-06-12),
not an extension of the GI/senescence migrations.

---

## Phase 1 (done) — what it gives us

`inputs[id]` may now be a scalar OR `{byAge:[[age,value],...]}`. A former smoker's GI burden accrues
while smoking and **plateaus after quitting** (tested). This is the substrate the reroute needs.

---

## Phase 1b — make smoking intensity/history canonical; `smokingStatus` derived

**Canonical input:** numeric **`smoking`** (cig/day, age-profile-capable). Pack-years emerge from its
integral. **`smokingStatus`** (never/former/current) becomes a **derived view of the profile**, not an
independent slider — this is what makes the two channels coherent (the bug behind the original
double-count).

**Derivation rule (proposed):** at evaluation age `a`, from the smoking profile `s(·)`:
- `never`   ⇔ `s(t)=0` for all `t ≤ a`
- `current` ⇔ `s(a) > 0`
- `former`  ⇔ `s(a)=0` but `s(t)>0` for some `t < a`

So **status is age-varying and emergent**: a "quit at 50" profile reads `current` before 50 and
`former` after — strictly more correct than today's single categorical value, and the PAF multiplier
then changes at the quit age automatically.

**Presets (UI/scenario layer):** never / light-current / heavy-current / former-quit-at-X just set the
`smoking` profile; the engine derives status from it. (popMean `smoking`=2 cig/day is the population
baseline — a low nonzero mix; keep it, so baseline is unchanged.)

**Open choice A:** derive status *in the engine* (the `smokingCategorical` cause form reads a per-age
derived status) — fully coherent, age-varying — **vs.** keep status an explicit input that presets set
consistently (simpler, but allows incoherent manual settings). **Recommend the engine-derived version**
(it's the point of "derived from the profile"), implemented as: the cause edge, instead of reading a
scalar `smokingStatus`, maps `smoking(a)` + history → {never/former/current} per age. Needs a small
engine change to the `smokingCategorical` evaluation + a popMean-status convention so the baseline
multiplier still averages to 1.

---

## Phase 3 — populate `smoke → GI` (gated on Yoshida 2020)

Append to `genomic-instability.rate.terms`:
```json
{ "coeff": <β>, "drivers": [ { "id": "smoking", "minus": <popMean=2> } ] }
```
**β derivation (method, once the source lands):** Yoshida 2020 gives somatic-mutation burden in normal
bronchial cells (never-smoker baseline + per-pack-year slope). The GI node burden is normalized [0,1],
so β must map "Δmutations/cell per (cig/day − popMean) per year" → "Δ GI-burden-fraction per year."
The normalization anchor: what GI-burden fraction does a heavy lifetime smoker's excess mutation load
correspond to? **Proposed anchor:** calibrate β so a *lifetime heavy current smoker's* GI elevation,
routed `GI→cancer` (coupling gain 0.2), reproduces the **GI-mediated share** of the current-smoker
cancer RR (see Phase 4) — i.e. β is pinned by the Phase-4 decomposition target, not asserted from the
mutation count directly (the mutation dose-response sets the *shape/relative* dose-response; the *level*
is pinned by the cancer-RR anchor). Provenance: `placeholder` → `calibrated` after validator cross-check.

**Loop note:** GI↔mito is a stub/stub 2-cycle but mito is unmigrated (mito→GI inert), so populating
smoke→GI does not activate the loop. Safe.

---

## Phase 4 — recalibrate the residual direct `smokingStatus → cancer` (the calibration-sensitive part)

**Today:** `smokingStatus→cancer` carries smoking's WHOLE cancer effect (RR never 1.0 / former 1.3 /
current 2.2; normalized so the population mix = ×1).

**After populate:** smoking reaches cancer via TWO channels — (1) the residual direct PAF multiplier,
(2) `smoke→GI→cancer` (the GI-mediated, history-dependent share). Route-once requires:

```
total_RR(status) = residual_direct_RR(status) × GI_mediated_RR(status)
```
where `total_RR` is pinned to the empirical anchors (never 1.0 / former 1.3 / current 2.2). So:
```
residual_direct_RR(status) = total_RR(status) / GI_mediated_RR(status)
```

**Per your caution — do NOT zero the direct edge.** `GI_mediated_RR < total_RR` (smoking causes cancer
via many mechanisms beyond GI — promotion, epigenetics, immune evasion), so `residual_direct_RR > 1`
remains. We only move the *GI-attributable fraction* of smoking's cancer effect onto the mechanistic
path; the rest stays direct. The GI fraction is itself an evidence question (what share of smoking's
carcinogenicity is mutation-burden-mediated vs promotion?) — start conservative (a *minority* share),
document as `#gap`, and let evidence raise it later. **Never assume GI carries 100%.**

**The former-smoker payoff:** because GI now plateaus after quitting, a former smoker's `GI_mediated_RR`
sits *between* never and current and **decays the right way with years-since-quit** — capturing quit
benefit mechanistically rather than as a flat categorical 1.3. The residual direct RR for `former` is
recalibrated against the same identity.

**Invariance target:** at the population smoking mix (the baseline), the *total* cancer multiplier must
still average to ×1 (preserve baseline LE M 77.4589 / F 82.1178). Since we split one calibrated total
into two factors whose product is unchanged at the mix, baseline is preserved by construction — but
this must be asserted numerically (the GI channel is integrated, so its population-mix average needs
checking, not assumed).

---

## Test / validation plan (phases 1b–4)

1. **status-derivation:** a quit-at-50 profile ⇒ derived status `current` at 40, `former` at 60.
2. **baseline invariance:** population-mix smoking ⇒ total cancer multiplier ≈ ×1 ⇒ LE unchanged (±1e-6).
3. **anchor reproduction:** lifetime never / current / former profiles reproduce total_RR 1.0 / 2.2 / 1.3
   (within tolerance) via the *product* of the two channels.
4. **no double-count:** total smoking→cancer hazard for a current smoker = the pre-reroute value
   (the reroute redistributes mechanism, doesn't add hazard).
5. **quit-benefit monotonicity:** GI-mediated cancer RR decreases with years-since-quit (former < current).
6. **residual-edge sanity:** residual_direct_RR(current) > 1 (direct edge NOT zeroed).

Validator: `graph-node-validator` promotes the smoke→GI term `placeholder→calibrated` after
cross-checking β against Yoshida 2020 + confirming the Phase-4 anchor reproduction.

---

## Open choices for your call

1. **Status derivation** — engine-derived per-age from the profile (recommended) vs. preset-set explicit input.
2. **GI-attributable fraction of smoking→cancer** — the share to move onto the mechanistic path. Recommend
   starting **conservative (a minority, e.g. ~⅓), documented `#gap`**, not evidence-final. Your call on the
   starting value / how to anchor it.
3. **Scope of this first cut** — cancer only (smoke→GI→cancer), leaving smoking's CVD/COPD/etc. PAFs untouched
   for now? Recommend **yes, cancer-only first** (GI→cancer is the cleanest mechanistic link; CVD/COPD route
   through inflammation, a later node's migration).
