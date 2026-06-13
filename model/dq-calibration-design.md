# D+Q (dasatinib + quercetin) senolytic calibration — CALIBRATION/DESIGN (efficacy HELD)

**Status:** calibration pass per user 2026-06-12 (5-step plan). Wiki-grounded via a research sub-agent (wiki-first).
Companion to `model/senolytic-intervention-design.md` (operator semantics) and `model/clearance-state-design.md`
(the `−c·S` healing dynamics this calibration depends on). **Author:** claude · 2026-06-12.

**Decision (up front):** a defensible **kill-fraction range** exists (`ε_kill ≈ 0.17 / 0.35 / 0.62`, adipose-anchored), but the
**modeled effect** does not yet — because the trajectory the operator feeds is incomplete (clearance/healing `−c·S` is frozen,
and the rebound time-constant is wiki-absent). So **D+Q stays a stub** — *upgraded from placeholder to a calibrated, sourced
stub with efficacy HELD* — not wired live. This is exactly the user's step 5 "otherwise retain the stubs," with the range now
filled in. Live-wiring is gated behind two things named in §5.

**Scope guards.**
- **D+Q ONLY.** Quercetin-monotherapy is a *separate, weaker* entity (endothelial-only in-vitro, ~50% senescent-HUVEC kill
  @10 µM; **no human monotherapy senolytic evidence**). The Hickson adipose numbers below **must NOT leak onto a
  quercetin-alone node** — the wiki flags that crediting as an explicit error. Fisetin is calibrated separately (next).
- **One-way discipline.** This note *reads* wiki evidence; it does **not** write any simulator number back onto a wiki page.

---

## Step 1 — Evidence-supported pulse schedules

All human D+Q trials use short intermittent ("hit-and-run") courses. The realistic clinical modalities split into two:

| Trial | Population | D | Q | Days-on/cycle | Interval | Duration | verified |
|---|---|---|---|---|---|---|---|
| **Hickson 2019** [^h] | diabetic kidney disease, n=9 | 100 mg/d | 1000 mg/d | 3 d | — (single course) | one-off | true·PDF-read |
| **Justice 2019** [^j] | IPF, n=14 | 100 mg/d | 1250 mg/d | 3 d/wk | weekly | 3 wk (9 dosing days) | true·PDF-read |
| **Farr 2024** [^f] | postmenopausal bone, n=60 **RCT** | 100 mg | 1000 mg | 2 d *(disputed — see ⚠)* | every 4 wk *(disputed)* | ~20 wk | **abstract-only — PENDING verify** |
| **Gonzales 2023 (SToMP-AD Ph1)** [^g] | mild AD, n=5 | 100 mg | 1000 mg | 2 d | every 14 d | 12 wk | abstract-only |

**Mouse hit-and-run (Zhu 2015 [^z], the only mouse schedule in the wiki):** aged C57BL/6 — single oral gavage
D 5 mg/kg + Q 50 mg/kg; Ercc1⁻^/Δ^ progeroid — same dose **weekly**.

**⚠ Cross-page schedule contradiction (flagged, verifier dispatched 2026-06-12):** the compound/hallmark pages say Farr =
*"2 consecutive days every 4 weeks × 5 cycles"*; `senolytics.md` says *"3 consecutive days monthly × 6 cycles."* Both sit on
`verified:true` pages but Farr is carved out of each page's `verified-scope` as abstract-only. **The maintenance-cadence number
below is provisional until the Farr PDF is read.** `#gap/dq-cadence-farr-unverified`

**Translation to the model's annual grid — this is a structural finding, not just a number.** The model timestep is `Δt = 1 yr`.
Two clinical modalities map onto *two different operators*:

- **One-off campaign** (Hickson / Justice: 1–3 short courses, then stop; or repeated years apart) → the **discrete
  `senolytic-pulse` operator** — an `ε_kill` drop on `S` at the campaign age(s). This is the regime the discrete operator is for.
- **Maintenance schedule** (Farr / Gonzales: monthly courses) → **cannot be resolved as discrete pulses at a 1-yr grid**
  (12 sub-annual pulses collapse below the timestep). At the annual grid the correct representation is an **effective
  clearance-rate elevation over the treatment window** — i.e. the **`clearance-restoration` operator**, not a pulse train.
  So the maintenance arm is *naturally* a `+Δc` over the window, and is gated on the same frozen clearance state.

→ The discrete-pulse calibration here is for the **one-off campaign**; the maintenance arm is deferred to the clearance state.

---

## Step 2 — Per-pulse kill fraction, bounded from biopsy biomarkers

**Hickson 2019 [^h] — human abdominal subcutaneous adipose, Day 0 → Day 14, n=9, open-label, single-arm, no control:**

| Marker | Reduction in senescent-cell fraction | p |
|---|---|---|
| p21^CIP1^+ cells | **−17 %** | 0.009 |
| p16^INK4A^+ cells | **−35 %** | 0.001 |
| SA-β-gal⁺ cells | **−62 %** | 0.005 |

(Adipocyte-progenitor replicative potential **+86 %**, p=0.027 — functional confirmation that the cleared cells were
senescent.) Skin biopsy was directionally concordant but **no separate % was reported** → qualitative confirm only, not a
second tissue anchor. Mouse fat/flow kill-% is **not recoverable** from the wiki (Xu 2018 is absent; Zhu 2015 reports
"reduced burden" without a per-tissue fraction). The only mouse quantitative figure is in-vitro selective killing
(quercetin ~50 % senescent-HUVEC viability @10 µM), which belongs to the quercetin-alone scope, not D+Q.

**Defensible `ε_kill` envelope (fraction of the lumped senescent burden removed per pulse), anchored to human adipose:**

| | value | marker | role |
|---|---|---|---|
| **floor** | **0.17** | p21⁺ cells | most conservative |
| **central** | **0.35** | p16⁺ cells | canonical senescence-load marker |
| **ceiling** | **0.62** | SA-β-gal⁺ cells | optimistic |

The 0.17–0.62 spread is **marker choice within one tissue**, *not* a confidence interval — all from the same n=9, single-arm,
uncontrolled, single-tissue, single-timepoint dataset. **These set sign and plausible range, never point anchors**
(`#gap/needs-controlled-kill-fraction` — no controlled human kill fraction exists; the one RCT, Farr, was primary-negative).

---

## Step 3 — Tissue handling: single lumped ε with explicit wide uncertainty (v0)

The biology is **explicitly cell-type-specific** (SCAP framework, Zhu 2015): **dasatinib** clears ephrin/SRC-dependent
preadipocyte / hematopoietic-mesenchymal senescent cells; **quercetin** clears BCL-xL/EFNB1-dependent endothelial cells.
Neither is pan-senolytic; the *combination exists to cover complementary pools*. But the **only quantitative human anchor is
adipose** — and adipose is plausibly D+Q's **most**-responsive tissue (preadipocyte SCAP is dasatinib's strongest target).

→ **v0 = a single lumped `ε_kill` on the lumped `S` node, carried with wide explicit uncertainty**, documenting that the true
structure is multi-pool. Two consequences for the number:
1. The organism-lumped `ε` is plausibly **≤** the adipose `ε` (adipose over-represents the responsive pool) → treat **0.35 as a
   central-to-high estimate**, not a floor; the organism-level floor could sit below 0.17.
2. `ε_kill` **must be < 1** regardless (no senolytic is pan-clearing — incomplete SCAP coverage).

Disaggregate into sub-pools (endothelial vs preadipocyte/mesenchymal, macrophage-spared) **only if `S` is later split by cell
type** — not warranted at v0. `#gap/no-second-tissue-human-anchor`

---

## Step 4 — Pulse-timing + downstream-SASP validation

**Evidence-side temporal consistency (the validation that *can* be done now).** Hickson sampled **Day 0 and Day 14 only**;
at Day 14 *both* the tissue senescent-burden kill *and* the circulating SASP drop (**IL-1α, IL-6, MMP-9, MMP-12, all p<0.05**)
are already realized. So the kill and its downstream inflammatory consequence **both resolve within ≈2 weeks of a single pulse**.

This is **consistent with — and independent support for — the fast, sub-annual SASP relaxation** that justifies keeping
`sen→infl` as the algebraic `0.2` G-edge (see `senescence-inflammation-loop-design.md` §8): the SASP response tracks the
burden change on a ≪1-yr timescale, so at the annual grid the inflammatory consequence of a senolytic kill is **quasi-instantaneous**
— the model would correctly show inflammation drop *in the same step* as the `S` drop, via the G-edge, with no rate lag needed.
**No contradiction; D+Q does not require finer-than-annual dynamics.**

*Contrast (do not mis-wire):* Justice 2019 IPF circulating-SASP changes were **inconclusive** (correlational only); Gonzales
2023 AD reported **CSF** IL-6/GFAP **↑** (a CNS-compartment anomaly, abstract-only) — neither belongs in the systemic-SASP
calibration.

**Runtime pulse-timing validation (the validation that is BLOCKED).** Whether a chosen dosing schedule produces the intended
*intermittent steady-state* `S` (the lower time-averaged burden that is the whole point of repeat dosing) **cannot be validated
until the clearance/healing `−c·S` dynamics are active** — with clearance frozen, a pulse leaves a permanent offset and there is
no rebound to validate against (see §5). So step 4 is **half-complete by construction**: evidence-side timing ✔ checks out;
runtime-timing validation ✗ is gated on the frozen clearance state. This is itself a reason to hold.

---

## Step 5 — Wire-vs-stub decision: **HOLD (calibrated stub)**

A defensible range exists for the kill **magnitude**. A defensible range does **not** yet exist for the modeled **effect**,
because the dynamics the operator feeds are incomplete:

1. **Clearance/healing (`−c·S`) is frozen** (`c0 = β = 0`, per the active design freeze). With it disabled, a `senolytic-pulse`
   leaves a **permanent downward offset** on `S` (the engine note states this explicitly: the drop "persists as an offset
   because the clearance-deviation dynamics are not yet implemented"). Consequence: **a single 3-day D+Q course → a permanent
   inflammation drop → a permanent life-expectancy gain.** That is biologically wrong — after cessation, senescent cells
   re-accumulate and a one-off benefit should **decay**. Wiring ε now injects a defensible kill into an indefensible trajectory.
2. **The rebound time-constant is wiki-absent.** The quantity that governs how fast `S` returns toward the untreated trajectory
   (and hence the maintenance-schedule steady state) is only "days–weeks" qualitatively in the wiki — no kinetic-sampling
   study. Without it the repeated-schedule payoff can be **signed but not calibrated**. `#gap/needs-rebound-time-constant`

**∴ Decision: HOLD D+Q as a calibrated stub** (the ε envelope, schedule, tissue-lumping, and SASP-timing validation recorded
and sourced; efficacy held at 0 / not added to `params.json operators`). **Live-wiring is gated behind BOTH:**
- **(a) the clearance state activated** (the `−c·S` healing dynamic — currently frozen by design), so the one-off benefit decays
  and the maintenance arm has a rate to elevate; and
- **(b) a rebound-τ source** — seed a kinetic-sampling senolytic study into the wiki, or adopt an explicit modeling assumption
  flagged `#gap`. Until then the maintenance steady-state is unconstrained.

Plus the **Farr PDF read** (verifier dispatched) before the maintenance-cadence number anchors anything.

**Alternative the user may choose (named, not recommended):** wire only the **one-off campaign** with `ε=0.35` and an explicit
*"permanent-offset, non-decaying benefit"* limitation banner, accepting the implausible non-decay as a documented v0 artifact.
Recommend **against**: it makes the simulator overstate the durability of a single drug course — the single most
misleading-to-a-reader artifact a senolytic could introduce — and it depends on the very clearance dynamic that is frozen.

---

## The HELD parameter block (drop-in-ready once §5 (a)+(b) clear)

```jsonc
// D+Q senolytic — HELD. Do NOT add to params.json `operators` until:
//   (a) clearance state active (−c·S healing), and (b) a rebound-τ source exists.
// One-off campaign → discrete pulse (below). Maintenance schedule → clearance-restoration +Δc over window (NOT a pulse train at Δt=1yr).
{
  "kind": "senolytic-pulse",
  "label": "D+Q",
  "target": "cellular-senescence",          // lumped S pool (v0 — single ε, not cell-type-disaggregated)
  "killFraction": 0.35,                      // central: p16+ adipose −35% (Hickson 2019, n=9, single-arm, no control)
  "killFraction_envelope": [0.17, 0.62],     // floor p21+ −17% .. ceiling SA-βgal+ −62%; marker-spread, NOT a CI
  "killFraction_note": "adipose-anchored; organism-lumped ε plausibly <= adipose; must be < 1 (no pan-senolytic)",
  "ages": [],                                // one-off campaign age(s); e.g. [55] or a short [55, 56, 57] re-dose series
  "_held": true,
  "_gate": "clearance active (−c·S) AND rebound-τ sourced; see dq-calibration-design.md §5",
  "_sources": "Hickson 2019 adipose Day-14 biopsy (verified, PDF-read). Farr 2024 cadence PENDING verify.",
  "_gaps": "#gap/needs-rebound-time-constant #gap/needs-controlled-kill-fraction #gap/dq-cadence-farr-unverified #gap/no-second-tissue-human-anchor"
}
```

---

## Provenance & verification ledger

| Claim | Source | Page(s) | verified |
|---|---|---|---|
| `ε_kill` envelope (p16/p21/SA-βgal −35/−17/−62 %) | Hickson 2019 | dasatinib.md, quercetin.md, senolytics.md | **true · PDF-read** ✅ |
| SASP drop + Day-14 timing | Hickson 2019 | same | **true · PDF-read** ✅ |
| Cell-type SCAP specificity | Zhu 2015 | dasatinib.md | **true · PDF-read** ✅ |
| Maintenance cadence | **Farr 2024** | dasatinib/quercetin/senolytics.md | **PAGE true, Farr claim abstract-only + schedule-contradictory** ⚠ verifier dispatched |
| Quercetin-monotherapy is weaker/separate | quercetin.md body | quercetin.md | **true · PDF-read** ✅ |

Core decision rests entirely on **verified, PDF-read** Hickson + Zhu numbers. The only unverified dependency (Farr cadence)
affects only the **maintenance arm**, which is held regardless.

**Gaps:** `#gap/needs-rebound-time-constant` (the wire-gating gap) · `#gap/needs-controlled-kill-fraction` ·
`#gap/dq-cadence-farr-unverified` · `#gap/no-second-tissue-human-anchor`.

[^h]: Hickson 2019 · DKD · n=9 · open-label single-arm, no control · D 100 mg/d + Q 1000 mg/d × 3 d · adipose biopsy D0 vs D14 · doi:10.1016/j.ebiom.2019.08.069 · model: human · verified pages, PDF read
[^j]: Justice 2019 · IPF · n=14 · open-label pilot, no control · D 100 mg/d + Q 1250 mg/d, 3 d/wk × 3 wk · doi:10.1016/j.ebiom.2018.12.052 · model: human · verified, PDF read
[^z]: Zhu 2015 · in-vitro + in-vivo · HUVEC/preadipocyte/MEF + aged C57BL/6 (n=6–9) & Ercc1⁻^/Δ^ · D 5 mg/kg + Q 50 mg/kg gavage · doi:10.1111/acel.12344 · verified, PDF read
[^f]: Farr 2024 · postmenopausal bone · n=60 · randomized double-blind placebo-controlled · intermittent D+Q ~20 wk · primary endpoint NS · doi:10.1038/s41591-024-03096-2 · model: human · **abstract-only on the wiki; schedule internally inconsistent — verification dispatched 2026-06-12**
[^g]: Gonzales 2023 SToMP-AD Ph1 · mild AD · n=5 · open-label · D 100 mg + Q 1000 mg, 2 d every 14 d × 6 cycles · CSF IL-6/GFAP ↑ · doi:10.1038/s41591-023-02543-w · abstract-only
