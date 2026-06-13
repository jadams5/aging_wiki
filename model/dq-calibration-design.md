# D+Q (dasatinib + quercetin) senolytic calibration — EXPLORATORY SCENARIO LIVE

**Status:** calibration pass per user 2026-06-12 (5-step plan). Wiki-grounded via a research sub-agent (wiki-first).
Companion to `model/senolytic-intervention-design.md` (operator semantics) and `model/clearance-state-design.md`
(the `−c·S` healing dynamics this calibration depends on). **Author:** claude · 2026-06-12.

**Decision update (2026-06-13):** the human-anchored kill-fraction range is now live as an explicitly **exploratory
target-engagement scenario**. The engine carries a separate exact post-pulse response-decay parameter, so a one-off course
no longer leaves an effectively permanent benefit while endogenous immune clearance (`c0`, `β`) remains disabled. Because
no longitudinal human rebound constant exists, the UI exposes 1/3/8-year half-life sensitivity scenarios rather than asserting
a biological point estimate. This removes the trajectory HOLD without claiming clinical lifespan calibration.

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
| **Farr 2024** [^f] | postmenopausal bone, n=60 **RCT** *(open-label)* | 100 mg ×2 d | 1000 mg ×3 d | D 2 d / Q 3 d (staggered) | every 28 d × 5 cycles | 20 wk | **true · PDF-read 2026-06-12** |
| **Gonzales 2023 (SToMP-AD Ph1)** [^g] | mild AD, n=5 | 100 mg | 1000 mg | 2 d | every 14 d | 12 wk | abstract-only |

**Mouse hit-and-run (Zhu 2015 [^z], the only mouse schedule in the wiki):** aged C57BL/6 — single oral gavage
D 5 mg/kg + Q 50 mg/kg; Ercc1⁻^/Δ^ progeroid — same dose **weekly**.

**Farr 2024 schedule — RESOLVED (verifier read the PDF end-to-end, 2026-06-12).** Canonical: **D 100 mg × 2 consecutive
days + Q 1000 mg × 3 consecutive days (staggered within each cycle), every 28 days × 5 cycles = 20 weeks, open-label**
(Methods p.11). This corrected two prior cross-page errors — the "monthly × 6 cycles" (6 cycles contradicts the 20-week
duration) and the "double-blind" design label (the paper states over-encapsulation for blinding was cost-prohibitive).
Propagated to `senolytics.md` / `dasatinib.md` / `quercetin.md` (verifier) and `osteoporosis.md` (main agent).
`#gap/dq-cadence-farr-unverified` **cleared.** **But Farr is dual-null** (see Step 4): it anchors the schedule *shape*,
**not** an efficacy magnitude.

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

**Hickson 2019 [^h] — human biopsy, Day 0 → Day 14, n=9, open-label, single-arm, no control. Markers are % positive
*cells* (IHC counts per 100 adipocytes; SA-β-gal⁺ cells per 100 nuclei) — PDF-confirmed 2026-06-13, NOT mRNA:**

| Tissue | Marker | Reduction in % positive cells | p |
|---|---|---|---|
| **adipose** (abd. subcut.) | p21^CIP1^+ | **−17 %** | 0.009 |
| **adipose** | p16^INK4A^+ | **−35 %** | 0.001 |
| **adipose** | SA-β-gal⁺ | **−62 %** | 0.005 |
| **skin** (epidermis) | p16^INK4A^+ | **−20 %** | 0.026 |
| **skin** | p21^CIP1^+ | **−31 %** | 0.016 |

(Adipocyte-progenitor replicative potential **+8 %** in passage-3 cultures, n=11, p=0.027, MTS assay — *modest* functional
confirmation that the cleared cells were senescent; the **"+86 %" on the wiki was a digit-transposition**, corrected
2026-06-13.) **Two tissues, not one:** skin gives a second human quantitative anchor (p16 −20 %, p21 −31 %, Fig. 4) — the
wiki's earlier "directionally concordant but unquantified" was wrong. Mouse fat/flow kill-% is **not recoverable** from the
wiki (Xu 2018 absent; Zhu 2015 reports "reduced burden" without a per-tissue fraction). The only mouse quantitative figure is
in-vitro selective killing (quercetin ~50 % senescent-HUVEC viability @10 µM), which belongs to the quercetin-alone scope.

**Defensible `ε_kill` envelope (fraction of the lumped senescent burden removed per pulse), across two human tissues:**

| | value | marker | role |
|---|---|---|---|
| **floor** | **0.17** | adipose p21⁺ cells | most conservative |
| **central** | **0.35** | adipose p16⁺ cells | canonical senescence-load marker |
| **ceiling** | **0.62** | adipose SA-β-gal⁺ cells | optimistic |

The IHC markers **cluster 0.17–0.35 across BOTH tissues** (adipose p21 0.17, skin p16 0.20, skin p21 0.31, adipose p16 0.35);
the 0.62 SA-β-gal⁺ is adipose-only and the optimistic ceiling. The spread is **marker × tissue**, *not* a confidence interval —
all n=9, single-arm, uncontrolled. **These set sign and plausible range, never point anchors**
(`#gap/needs-controlled-kill-fraction` — no controlled human kill fraction exists; the one RCT, Farr, was primary-negative).

**Cells-vs-mRNA — RESOLVED (verifier read the Hickson PDF, 2026-06-13).** The reductions are **% positive cells** (IHC counts
per 100 adipocytes; SA-β-gal⁺ cells per 100 nuclei) — **not mRNA**. `cellular-senescence.md` (which said "mRNA") was wrong and
is corrected; the compound pages were right. So **`ε_kill` is a legitimate per-tissue senescent-cell kill fraction** — with two
residual caveats the verifier flagged: (a) p16^INK4A^/p21^CIP1^ IHC are not perfectly senescence-specific (transient p21 in
proliferating cells; p16 not universal across senescent types); (b) the per-adipocyte denominator means a stromal:adipocyte
ratio shift could confound. The −62 % SA-β-gal⁺ (a functional readout) is the strongest support for reading the IHC drops as a
genuine kill. `#gap/hickson-cells-vs-mrna-labeling` **cleared**; residual `#gap/ihc-not-perfectly-senescence-specific`.

**Refractory fraction — `ε_kill` ceiling < 1 (literature update 2026-06-13, preprint-grade; document-only per user).** Freizus
et al. 2025 (Krizhanovsky-lab preprint, [[studies/freizus-2025-atp6v1b2-persistent-senescence]]) identify a **cell-surface
ATP6V1B2 (csV1B2)** senescent subset that is **apoptosis-resistant and resists ABT-737** (the BH3-mimetic / BCL-xL class — i.e.
quercetin's mechanistic arm). This is a *mechanistic* reason the per-pulse `ε_kill` has an **effective ceiling below 1 and leaves
a persistent, non-clearable residual**: repeated dosing cannot drive `S` to zero because a refractory senotype evades
BH3-mimetic senolysis. Direction-only (preprint; no quantitative resistant-fraction) → **documented, not wired.** If ever
modeled: a fixed non-clearable floor `S_refractory` with `ε_kill` applied only to `(S − S_refractory)`.
`#gap/needs-refractory-fraction #gap/preprint-not-peer-reviewed`

---

## Step 3 — Tissue handling: single lumped ε with explicit wide uncertainty (v0)

The biology is **explicitly cell-type-specific** (SCAP framework, Zhu 2015): **dasatinib** clears ephrin/SRC-dependent
preadipocyte / hematopoietic-mesenchymal senescent cells; **quercetin** clears BCL-xL/EFNB1-dependent endothelial cells.
Neither is pan-senolytic; the *combination exists to cover complementary pools*. There are now **two human quantitative
anchors** — adipose (p16 −35 %, plausibly the most-responsive: preadipocyte SCAP is dasatinib's strongest target) and skin
epidermis (p16 −20 %, p21 −31 %) — and they are **tissue-variable** (skin p16 < adipose p16; skin p21 > adipose p21),
confirming clearance is not uniform.

**Published support for the lumped-node caveat (literature update 2026-06-13; document-only per user).** The senotype framework
(Suryadevara et al. 2026 SenNet Perspective, [[studies/suryadevara-2026-senotypes]]) and Cherqui et al. 2025 (Krizhanovsky
preprint, [[studies/cherqui-2025-senescence-burden-organs]] — senescence accumulation **coordinated within organs but
uncorrelated across organs → tissue-specific aging progression**) corroborate that a single lumped `S` collapses genuinely
tissue- and senotype-distinct dynamics. This **strengthens** the caveat below (organism-lumped `ε` ≤ adipose `ε`; the adipose
anchor over-represents the responsive senotype) but does **not** change the v0 decision — disaggregating `S` into
senotype/tissue sub-pools remains deferred (large change, not warranted at v0).

→ **v0 = a single lumped `ε_kill` on the lumped `S` node, carried with wide explicit uncertainty**, documenting that the true
structure is multi-pool. Two consequences for the number:
1. The organism-lumped `ε` is now **bracketed by two measured tissues** (adipose most-responsive ≈0.35; skin 0.20–0.31) → a
   central **~0.25–0.35** is defensible; treat 0.35 as central-to-high (adipose-weighted) and ~0.20 as a conservative floor.
2. `ε_kill` **must be < 1** regardless (no senolytic is pan-clearing — incomplete SCAP coverage).

Disaggregate into sub-pools (endothelial vs preadipocyte/mesenchymal, macrophage-spared) **only if `S` is later split by cell
type** — not warranted at v0. (`#gap/no-second-tissue-human-anchor` **cleared** 2026-06-13 — skin is the second anchor.)

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
calibration. **And the one controlled trial is SASP-null:** Farr 2024 (n=60 RCT) measured **36 circulating SASP factors at
2 weeks → no significant D+Q-vs-control change**, with **no adipose biopsy** and T-cell p16 **at baseline only** (so it
confirms neither clearance nor a systemic SASP drop). The entire kill→SASP-drop coupling therefore rests on the
**uncontrolled** Hickson data; the controlled evidence is null. This **tempers the magnitude** (direction/plausible-range
only) while leaving the **timescale** intact (whatever SASP change Hickson saw resolved ≤2 wk).

**Runtime pulse-timing validation.** The pulse deviation now has an optional exact response-persistence map,
`x_next=x·exp(−ln(2)·dt/reboundHalfLifeYears)`. Tests assert the specified half-life exactly, finite healing after one course,
and bounded repeated-pulse behavior. This does not claim that endogenous clearance is calibrated: `c0`/`β` remain disabled.
Maintenance dosing is still deferred because its annual-grid effective rate and empirical rebound constant remain unknown.

---

## Step 5 — Wire-vs-stub decision: **LIVE as an exploratory one-off scenario**

The original HOLD was correct for the old engine: an un-decayed pulse created an effectively permanent benefit. The new exact
response-persistence parameter removes that structural error without assigning an unsourced endogenous clearance coefficient.
The canonical preset therefore exposes two independent scenario axes:

- **Kill fraction:** `0.17 / 0.35 / 0.62`, anchored to the verified human biopsy marker/tissue envelope.
- **Rebound half-life:** `1 / 3 / 8 years`, explicitly illustrative sensitivity values, not empirical estimates.

At the central setting (35% kill, 3-year half-life), one course at age 55 produces `ΔLE ≈ +0.019 yr` in the current male
population model. Across the full scenario grid the result is approximately `+0.004` to `+0.071 yr`. These are model outputs,
not predicted clinical effects. They arise through existing downstream chronic-senescence paths; no direct cancer-incidence
benefit or cancer penalty is added.

The prior engine comparison remains useful as the reason the persistence parameter exists:

| scenario | ΔLE (yr) | does senescence S heal back? |
|---|---|---|
| one-off pulse @55, **old persistent-offset engine** | **+0.110** | effectively no — still 7% below baseline at age 90 |
| one-off pulse @55, **clearance synthetically ON** (`c0=0.12`) | **+0.027** | **yes** — back to 97.5 % of baseline by age 70, 99.9 % by 90 |

---

## Provenance & verification ledger

| Claim | Source | Page(s) | verified |
|---|---|---|---|
| `ε_kill` envelope (adipose p16/p21/SA-βgal −35/−17/−62%; skin p16 −20%/p21 −31%; % positive *cells*, IHC) | Hickson 2019 | cellular-senescence.md (mRNA→cells fix), dasatinib.md (+86%→+8% fix), quercetin.md, senolytics.md | **true · PDF-read 2026-06-13** ✅ |
| SASP drop + Day-14 timing | Hickson 2019 | same | **true · PDF-read** ✅ |
| Cell-type SCAP specificity | Zhu 2015 | dasatinib.md | **true · PDF-read** ✅ |
| Maintenance cadence (shape only) | **Farr 2024** | dasatinib/quercetin/senolytics/osteoporosis.md | **true · PDF-read 2026-06-12** — schedule canonicalized; open-label; primary p=0.611 & 36-factor SASP panel both null; no biopsy |
| Quercetin-monotherapy is weaker/separate | quercetin.md body | quercetin.md | **true · PDF-read** ✅ |

Core decision rests entirely on **verified, PDF-read** Hickson + Zhu numbers. The former lone unverified dependency (Farr
cadence) was **resolved 2026-06-12** (PDF read end-to-end); it affects only the held maintenance arm and is now **dual-null**.

**Gaps:** `#gap/needs-rebound-time-constant` (the wire-gating gap) · `#gap/needs-controlled-kill-fraction` ·
`#gap/ihc-not-perfectly-senescence-specific`. (Cleared 2026-06-13: `#gap/dq-cadence-farr-unverified` (Farr PDF read),
`#gap/hickson-cells-vs-mrna-labeling` (cells, not mRNA), `#gap/no-second-tissue-human-anchor` (skin is the 2nd anchor).)

[^h]: Hickson 2019 · DKD · n=9 · open-label single-arm, no control · D 100 mg/d + Q 1000 mg/d × 3 d · adipose + skin biopsy D0 vs D14, markers = % positive cells (IHC) · adipose p16 −35%/p21 −17%/SA-βgal −62%; skin p16 −20%/p21 −31%; adipocyte-progenitor proliferation +8% (n=11, p=0.027; NOT +86% — wiki digit-transposition corrected 2026-06-13) · doi:10.1016/j.ebiom.2019.08.069 · model: human · PDF read end-to-end 2026-06-13
[^j]: Justice 2019 · IPF · n=14 · open-label pilot, no control · D 100 mg/d + Q 1250 mg/d, 3 d/wk × 3 wk · doi:10.1016/j.ebiom.2018.12.052 · model: human · verified, PDF read
[^z]: Zhu 2015 · in-vitro + in-vivo · HUVEC/preadipocyte/MEF + aged C57BL/6 (n=6–9) & Ercc1⁻^/Δ^ · D 5 mg/kg + Q 50 mg/kg gavage · doi:10.1111/acel.12344 · verified, PDF read
[^f]: Farr 2024 · postmenopausal bone (age 62–88) · n=60 · randomized **open-label** placebo-controlled · D 100 mg ×2 d + Q 1000 mg ×3 d (staggered) every 28 d × 5 cycles = 20 wk · primary CTx Δ p=0.611 (NS); 36-factor circulating-SASP panel @2 wk no D+Q-vs-control change; no biopsy, T-cell p16 baseline-only · doi:10.1038/s41591-024-03096-2 · PMID 38956196 · model: human · **PDF read end-to-end 2026-06-12**
[^g]: Gonzales 2023 SToMP-AD Ph1 · mild AD · n=5 · open-label · D 100 mg + Q 1000 mg, 2 d every 14 d × 6 cycles · CSF IL-6/GFAP ↑ · doi:10.1038/s41591-023-02543-w · abstract-only
