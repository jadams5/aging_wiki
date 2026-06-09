---
type: intervention
aliases: [topical retinoids, retinoid class, vitamin A derivatives, retinoic acid class, RAR agonists topical]
mode: pharmacological
mechanisms: ["RAR-agonist", "AP-1-transrepression", "MMP-1-suppression", "collagen-synthesis-stimulation"]
targets: ["[[rar-alpha]]", "[[rar-beta]]", "[[rar-gamma]]", "[[ap-1-pathway]]", "[[mmp-1]]"]
target-hallmarks: ["[[loss-of-proteostasis]]", "[[genomic-instability]]", "[[chronic-inflammation]]"]
target-pathways: ["[[ap-1-pathway]]"]
human-evidence-level: strong
clinical-stage: fda-approved
safety-profile: well-established
translation-gap: human-evidence-strong
next-experiment: "Phase 3 RCT in adults 60+ with epigenetic-clock endpoint (DunedinPACE or GrimAge) alongside standard photoaging grading over 12 months to quantify whether collagen-synthesis/MMP-suppression translates to measurable biological-age deceleration in skin."
clinical-trials-active: null
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Fisher 1996 claims cross-checked against verified studies/fisher-1996-photoaging-ap1-mmp.md (R39 full-PDF verified); Sumita 2018 claims cross-checked against verified studies/sumita-2018-tretinoin-photoaging.md (R39 canonical-DB verified, PDF closed-access). Generation history dates, tolerability spectrum ordering, pregnancy categories, Siddiqui 2024 13/25 nuance, Lin 2025 NMA findings, Bagatin 2018 and Dhaliwal 2019 claims not cross-checked against primary PDFs (compound-page claims only; no local PDFs confirmed for those sources). Duplicate intervention-classes.md entry (lines 408 + 1334) flagged for propagation-pass reconciliation."
---

# Topical Retinoids

Topical retinoids are the **best-evidenced pharmacological intervention against photoaging**, with two on-label FDA-approved aging-indication compounds — tretinoin/Renova (1995) and tazarotene/Avage (2000) — and over 25 years of accumulated Phase 3 trial data. The shared class mechanism is RAR/RXR nuclear receptor agonism leading to AP-1 transcription factor transrepression, which suppresses MMP-1/3/9-mediated collagen degradation and simultaneously stimulates collagen-I synthesis in dermal fibroblasts and keratinocytes. This page covers the **class as a whole**. Per-compound mechanism, dose-response, and pharmacology data live on the six R41 sister compound pages listed below.

This page covers the **class as a whole**. Agent-specific data lives in `molecules/compounds/`:

- [[tretinoin]] — all-trans retinoic acid; FDA Rx; RAR-α/β/γ pan-agonist; canonical mechanism anchor
- [[retinol]] — OTC prodrug; ~5–20x less potent than tretinoin after two-step conversion
- [[retinaldehyde]] — OTC; one conversion step to RA; ~3–5x more potent than retinol
- [[adapalene]] — synthetic third-gen; RAR-β/γ-selective; FDA OTC (2016); well-tolerated
- [[tazarotene]] — synthetic third-gen acetylenic; RAR-β/γ-selective; FDA-approved photoaging (Avage 2000)
- [[bakuchiol]] — non-retinoid meroterpenoid; functional analog; mechanism incompletely characterised

## Family Overview

| Compound | Structure class | FDA aging-indication | Receptor selectivity | Relative potency | Tolerability | OTC / Rx | Key trial anchor |
|---|---|---|---|---|---|---|---|
| [[tretinoin]] | Natural RA | Renova (1995) photoaging Rx | RAR-α/β/γ pan-agonist | Highest (reference) | Moderate–low (irritation, peeling) | Rx | Fisher 1996 [^fisher1996]; Sumita 2018 [^sumita2018]; Lin 2025 NMA [^lin2025nma] |
| [[tazarotene]] | Synthetic 3rd-gen acetylenic | Avage (2000) photoaging Rx | RAR-β/γ-selective | High (≥ tretinoin 0.05%) | Low (most irritating) | Rx | Avage clinical programme |
| [[adapalene]] | Synthetic 3rd-gen naphthoic acid | None (acne only); off-label photoaging | RAR-β/γ-selective | Moderate (~tretinoin 0.05%) | High | OTC (0.1%); Rx (0.3%) | Bagatin 2018 [^bagatin2018] |
| [[retinaldehyde]] | Natural retinoid | None | RAR-α/β/γ (after conversion) | ~3–5x < tretinoin | Moderate–high | OTC | #gap/needs-replication vs tretinoin RCT |
| [[retinol]] | Natural retinoid | None | RAR-α/β/γ (after 2-step conversion) | ~5–20x < tretinoin | High | OTC | Dhaliwal 2019 (vs bakuchiol) [^dhaliwal2019] |
| [[bakuchiol]] | Non-retinoid meroterpenoid | None | Incompletely characterised; not a classical RAR agonist | Equivalent to retinol 0.5% in one RCT [^dhaliwal2019] | Highest (least irritating) | OTC cosmetic | Dhaliwal 2019 [^dhaliwal2019]; Puyana 2022 [^puyana2022] |

## Shared Mechanism

### (a) RAR/RXR nuclear receptor agonism

Retinoids (tretinoin, tazarotene, adapalene, and retinol/retinaldehyde after enzymatic conversion) bind ligand-binding domains of retinoic acid receptors (RAR-α, RAR-β, RAR-γ). Activated RAR forms heterodimers with retinoid X receptors (RXR) and binds retinoic acid response elements (RAREs) in promoters of target genes, recruiting coactivators (e.g., CBP/p300, SRC family) to initiate transcription. This RARE-mediated transactivation drives collagen-I synthesis and other photoaging-reversal programs in dermal fibroblasts and keratinocytes [^fisher1996].

### (b) AP-1 transrepression — the canonical anti-MMP mechanism

The most important anti-photoaging mechanism is **not** simple RARE-mediated transactivation but rather **AP-1 transrepression**: ligand-bound RAR physically interacts with Jun and Fos subunits of the AP-1 transcription factor complex, blocking AP-1 from binding its cognate promoter elements on MMP genes. This protein-protein interference mechanism was definitively characterised by Fisher et al. 1996 [^fisher1996]:

- Tretinoin reduces AP-1 DNA-binding activity in sun-exposed human skin by ~70% (text-stated on p.338 of the original paper) [^fisher1996]
- MMP-1 and MMP-9 protein levels are suppressed by 50–80% after tretinoin treatment vs. vehicle [^fisher1996]
- The mechanism is AP-1 protein-protein interaction with RAR — it is NOT mediated by TIMP-1 induction and NOT by CBP/p300 competition at shared promoter elements (per the R39-verified framing on the study page)

This AP-1 transrepression mechanism explains why synthetic retinoids with RAR-β/γ selectivity (adapalene, tazarotene) retain most anti-photoaging efficacy despite lacking pan-agonist activity: RAR subtype specificity for the MMP-suppression arm (RAR-γ in keratinocytes vs RAR-β in fibroblasts) is not characterised in Fisher 1996 and is drawn from later receptor-pharmacology literature #gap/needs-replication [^fisher1996].

### (c) Collagen synthesis stimulation

Separately from MMP suppression, RAR agonism stimulates collagen-I synthesis in dermal fibroblasts via RARE-driven gene programs. This is well-documented in the tretinoin photoaging literature but the precise receptor-subtype mediating this effect (RAR-β in fibroblasts is the dominant hypothesis) is not as sharply characterised as the AP-1/MMP arm #gap/needs-replication (for RAR subtype specificity of the collagen-synthesis arm).

For the full mechanism extraction, see [[studies/fisher-1996-photoaging-ap1-mmp]].

## Generation History

Retinoids are classified by generation based on structural class and selectivity profile:

- **1st generation (natural):** tretinoin / all-trans retinoic acid (FDA acne 1971; Renova photoaging 1995), isotretinoin (oral acne 1982; not topical photoaging). Pan-agonist profile (RAR-α/β/γ).
- **2nd generation (mono-aromatic):** etretinate (psoriasis 1986; withdrawn 1998 due to teratogenicity + long half-life), acitretin (psoriasis 1996). Primarily dermatology/psoriasis applications; not photoaging-indicated.
- **3rd generation (poly-aromatic / synthetic):** adapalene (acne 1996 Rx; OTC 2016), tazarotene (acne 1997; Avage photoaging 2000), bexarotene (oral cutaneous T-cell lymphoma 1999 — RXR-selective, not a typical RAR-agonist). RAR-β/γ-selective profile for adapalene and tazarotene.

The shift from 1st to 3rd generation was driven by two goals: (1) receptor-subtype selectivity to reduce side effects while preserving efficacy, and (2) metabolic stability (resistance to isomerisation and oxidation relative to natural all-trans RA).

## Receptor-Selectivity and Tolerability

| Receptor selectivity | Compounds | Implication |
|---|---|---|
| RAR-α/β/γ pan-agonist | Tretinoin, retinol/retinaldehyde (after conversion) | Maximal signalling breadth; highest irritation potential |
| RAR-β/γ-selective | Adapalene, tazarotene | Spares RAR-α-mediated pro-inflammatory pathways; better tolerability |
| RXR-selective | Bexarotene (oral CTCL only) | Not relevant to topical photoaging class |
| Incompletely characterised | Bakuchiol | Partial RAR agonism reported in some studies, disputed in others; may also activate β-catenin and TGF-β pathways #gap/no-mechanism |

RAR-α activation in skin mediates some of the irritation (retinoid dermatitis: erythema, peeling, dryness) associated with first-generation retinoids. The β/γ-selective profile of adapalene and tazarotene is associated with better tolerability in acne trials and is presumed (not conclusively proven for photoaging) to carry the same tolerability advantage.

## Tolerability Spectrum

From most-tolerated to least-tolerated (approximate; individual variation is substantial):

**bakuchiol → retinol → retinaldehyde → adapalene → tretinoin → tazarotene**

This ranking is roughly inverse to potency, with bakuchiol as an outlier (less potent AND less irritating than any retinoid). The Chien 2022 JAMA Dermatology trial [^chien2022] found tretinoin precursors caused erythema 6-fold less frequently than tretinoin itself (11% vs 64%), providing a direct within-person quantification of the tolerability cost of conversion-step efficiency.

Practical consequence: patients unable to tolerate tretinoin are typically stepped down to adapalene or retinaldehyde; patients with sensitive skin or seeking cosmetic (non-Rx) options use retinol or bakuchiol. The Siddiqui 2024 systematic review recommends retinaldehyde as the preferred second-line option for poor tretinoin tolerators [^siddiqui2024].

## Combination and Sequencing Strategies

### Mandatory co-intervention: sunscreen

All topical retinoids increase photosensitivity (tretinoin's photodegradation also necessitates evening application). Sunscreen with SPF ≥30 is a mandatory co-intervention in any retinoid photoaging protocol — not optional. See [[uv-protection]].

### Tolerability buffers

- **[[niacinamide]]** — barrier-repair niacinamide reduces retinoid irritation in combination use; mechanisms include ceramide synthesis upregulation and potential mild AP-1 suppression in its own right.
- Ceramide-containing moisturisers — supportive barrier repair without mechanistic crosstalk.
- Low-frequency initiation (every-other-night → nightly) is the standard tolerability-adaptation strategy for tretinoin.

### Complementary mechanisms

- **[[ascorbic-acid]] / vitamin C** — complementary collagen-synthesis stimulus via hydroxylation-cofactor and AP-1-independent TGF-β pathway; combination with tretinoin is theoretically additive.

### Escalation ladder

Adapalene (OTC 0.1% → 0.3%) → tretinoin (0.025% → 0.05% → 0.1%) → tazarotene (0.05% → 0.1%) represents the typical clinical escalation from lowest to highest potency/irritation. Switching from tretinoin back to retinol is a common "tolerability reset" strategy during initial adaptation or in older/sensitive-skin patients.

## Pregnancy and Teratogenicity

All retinoids carry teratogenicity risk due to disruption of RAR-mediated embryonic patterning programs (limb, craniofacial, neural tube). Topical risk is lower than oral but non-zero (particularly for tazarotene, which has higher systemic absorption than tretinoin):

- **Tazarotene (Avage/Tazorac):** FDA Pregnancy Category X (contraindicated) — systemic absorption measurable; craniofacial defects in animal models at high doses.
- **Tretinoin (Renova/Retin-A):** FDA Pregnancy Category C/D depending on indication — topical systemic absorption low but detectable; clinical guidance: avoid, especially first trimester.
- **Adapalene:** FDA Pregnancy Category C — lowest absorption of the Rx retinoids; Rx guidelines still recommend avoidance.
- **Retinol / retinaldehyde (OTC):** Category C equivalent — systemic conversion to RA is low but possible; many clinicians advise discontinuation during pregnancy and nursing despite OTC status.
- **Bakuchiol:** No formal FDA pregnancy category; marketed as the safer retinoid alternative during pregnancy, but formal teratogenicity data are limited. Psoralen contamination in bakuchiol extracts has been flagged as a photosensitization safety concern in a proportion of commercial preparations — see [[bakuchiol]] for detail #gap/long-term-unknown.

## Aging-Context Evidence: Recent Syntheses

### Lin 2025 — Bayesian NMA (n=3,905) [^lin2025nma]

The largest quantitative synthesis of topical photoaging interventions as of this writing: 23 RCTs, 3,905 participants, Bayesian network meta-analysis. Key findings:

- **Fine wrinkles:** isotretinoin and tretinoin ranked highest; tazarotene ranked highest for coarse wrinkles.
- **Hyperpigmentation:** tretinoin and retinol superior to comparators.
- **Safety:** tretinoin had the most favorable overall safety profile in this analysis; tazarotene and glycolic acid carried higher adverse-event risk.
- **Class confirmation:** the NMA confirms tretinoin as the **current gold standard** for topical photoaging across multiple outcome domains.

This network meta-analysis supersedes earlier head-to-head comparisons in statistical power and confirms the class hierarchy established by two decades of individual RCTs. #gap/needs-replication — the NMA includes 23 RCTs but most are 12–24 weeks; long-term (>52 weeks) comparative data remain sparse [^lin2025nma].

### Siddiqui 2024 — Systematic Review (25 studies) [^siddiqui2024]

Systematic review of 25 studies comparing tretinoin to alternative topical agents. Findings:

- 7 studies: comparator showed greater efficacy than tretinoin.
- 13 studies: comparator showed equivalent efficacy.
- 3 studies: comparator showed less efficacy.
- Most comparators were less irritating than tretinoin.
- **Recommendation:** retinaldehyde preferred as second-line for poor tretinoin tolerators; bakuchiol as OTC alternative.
- Tretinoin retains the broadest evidence base and remains the clinical benchmark [^siddiqui2024].

### Bagatin 2018 — Adapalene 0.3% vs Tretinoin 0.05% (n=58, 24 weeks) [^bagatin2018]

24-week investigator-blinded parallel-group RCT in Brazil comparing adapalene 0.3% gel once daily vs tretinoin 0.05% cream once daily for photoaging (1:1 allocation, n=29/arm). Key findings: both treatments did not differ significantly across global photoaging, periorbital wrinkles, ephelides/melanosis, forehead wrinkles, or actinic keratosis endpoints. Adapalene demonstrated **non-inferior efficacy** with a similar safety profile. This is the most directly comparative published RCT for these two agents in a photoaging indication [^bagatin2018].

### Dhaliwal 2019 — Bakuchiol 0.5% vs Retinol 0.5% (n=44, 12 weeks) [^dhaliwal2019]

Prospective, randomized, double-blind 12-week trial: bakuchiol 0.5% cream twice daily vs retinol 0.5% cream once daily for facial photoaging (n=22/arm). Both significantly decreased wrinkle surface area and hyperpigmentation with no statistically significant difference between compounds. Retinol users reported significantly more scaling and stinging. **Interpretation:** bakuchiol is non-inferior to retinol 0.5% for standard photoaging endpoints at 12 weeks, with better tolerability. Because retinol 0.5% is considerably weaker than tretinoin 0.05%, this finding does not imply bakuchiol is equivalently efficacious to tretinoin [^dhaliwal2019].

### Chien 2022 — Tretinoin Precursors vs Tretinoin (JAMA Derm) [^chien2022]

Randomized trial (n=20) comparing tretinoin precursors (retinaldehyde and retinol formulation) vs tretinoin for moderate-to-severe facial photodamage. No significant efficacy difference, but erythema occurred 6-fold less frequently with precursors (11% vs 64%). MMP-2 reduction correlated with fine wrinkle improvement, providing mechanistic support for the MMP-suppression axis in clinical photoaging regression #gap/needs-replication (small n) [^chien2022].

## Evidence Gaps and Limitations

- **No epigenetic-age clock endpoints.** No published RCT has used DunedinPACE, GrimAge, or any other biological-age clock as a photoaging treatment endpoint. This is the single highest-value "next experiment" for the class — the field's 25+ years of clinical data establish wrinkle/pigmentation reversal, but whether this reflects true age-related collagen/proteostasis restoration or merely cosmetic endpoint improvement remains unanswered. #gap/needs-human-replication
- **Head-to-head data in elderly populations sparse.** Most comparative RCTs recruited middle-aged adults (mean ~50); trials in adults ≥70 with frailty or comorbidity are lacking. #gap/dose-response-unclear
- **Bakuchiol long-term data limited.** Only the 12-week Dhaliwal 2019 trial exists for direct retinol comparison; no long-term efficacy data or mechanistic pathway characterization comparable to Fisher 1996 [^dhaliwal2019]. #gap/no-mechanism (for bakuchiol's precise receptor binding)
- **Psoralen contamination in bakuchiol.** Some commercial bakuchiol preparations contain psoralen-class phototoxic contaminants from Psoralea corylifolia seed extraction; this is a safety qualifier not always disclosed in clinical trials. See [[bakuchiol]] for detail.
- **Biomarker-guided dosing not established.** Optimal tretinoin dose for a given patient's baseline MMP-1 activity, collagen density, or receptor expression profile is not characterised. #gap/dose-response-unclear
- **Systemic aging benefit unproven.** Retinoids act on skin; no evidence that topical retinoid use affects systemic hallmarks of aging (e.g., circulating inflammatory markers, epigenetic clocks in blood). The intervention is a **skin-aging intervention**, not a systemic anti-aging intervention. The [[loss-of-proteostasis]] and [[genomic-instability]] hallmark links are limited to dermal/epidermal tissue.

## SENS / Hallmark Mapping

- **[[loss-of-proteostasis]]** (primary target) — MMP-driven extracellular matrix collagen fragmentation is the prototypical skin-aging proteo-structural lesion; retinoids suppress MMP-1/3/9 and stimulate collagen-I synthesis, partially restoring ECM integrity.
- **[[chronic-inflammation]]** (AP-1/NF-κB transrepression) — UV-induced AP-1/NF-κB activation drives a pro-inflammatory MMP-expression cascade; retinoid-mediated AP-1 transrepression suppresses this inflammatory signaling axis.
- **[[genomic-instability]]** (indirect) — RAR agonism modulates cell-cycle checkpoint and differentiation programs in keratinocytes; relevance to photocarcinogenesis prevention is documented for tretinoin and tazarotene in actinic keratosis, but this is weaker evidence than the ECM/proteostasis arm.

SENS category: loosely fits **extracellular crosslinks** (ECM damage) and **wasting / loss of cells** (fibrocyte depletion) but SENS framing is not the primary lens for this class.

## Class Registration Note (R41 Propagation Pass)

The mechanism class `topical retinoid / RAR agonist` has been registered in [[frameworks/intervention-classes]] with canonical mechanism values `RAR-agonist`, `AP-1-transrepression`, `MMP-1-suppression`, `collagen-synthesis-stimulation`, and `functional-retinoid-analog` (for bakuchiol). The R41 propagation pass should apply these values to all six sister compound pages.

## Cross-References

- [[tretinoin]] — canonical mechanism anchor; FDA Rx photoaging; R41 compound page
- [[retinol]] — OTC prodrug; R41 compound page
- [[retinaldehyde]] — OTC; R41 compound page
- [[adapalene]] — synthetic 3rd-gen; R41 compound page
- [[tazarotene]] — synthetic 3rd-gen; R41 compound page
- [[bakuchiol]] — non-retinoid functional analog; R41 compound page
- [[studies/fisher-1996-photoaging-ap1-mmp]] — canonical AP-1/MMP mechanism extraction
- [[studies/sumita-2018-tretinoin-photoaging]] — within-person split tretinoin RCT (n=24)
- [[skin-aging]] — hallmark/phenotype page
- [[mmp-1]] — key downstream effector
- [[dermal-fibroblasts]] — primary cell type for collagen synthesis arm
- [[keratinocytes]] — primary cell type for AP-1 transrepression arm
- [[uv-protection]] — mandatory co-intervention
- [[niacinamide]] — tolerability buffer combination
- [[ascorbic-acid]] — complementary collagen-synthesis compound
- [[frameworks/intervention-classes]] — class registry entry added R41
- [[ap-1-pathway]] — signalling pathway (forward-ref; page pending)

## Footnotes

[^fisher1996]: [[studies/fisher-1996-photoaging-ap1-mmp]] · doi:10.1038/379335a0 · n=6–17 (varies per experiment; e.g., n=9 for AP-1 binding; n=7–10 for MMP mRNA/protein/activity) · in-vivo + mechanistic · AP-1 DNA-binding ~70% reduction with tretinoin (text-stated p.338); MMP-1/9 suppression 50–80% (text-stated p.338); AP-1 transrepression mechanism (not TIMP-1 or CBP/p300 competition) · model: adult human buttock skin in vivo · *Nature* 379:335-339 · 1996 · Fisher GJ et al. · PMID: 8552187 · local PDF confirmed in a local paper archive (download_status: completed); numerics per R39 verified study page

[^sumita2018]: [[studies/sumita-2018-tretinoin-photoaging]] · doi:10.1111/jdv.15020 · n=24 women (48 forearms, bilateral within-person design; 1 dropout, per-protocol n=23) · rct · evaluator-blinded · ~20% photoaging reduction and ~60% AK reduction (both arms comparable); three endpoints diverged at P<0.05 (corneal thickness, dermis echogenicity, Ki67 — cream superior for ultrasonographic markers, peel superior for field cancerization) · model: human forearm skin (women >60 yr, Fitzpatrick II-III) · *J Eur Acad Dermatol Venereol* 32(10):1819-1826 · 2018 · Sumita JM et al. · PMID: 29704456 · closed access; body claims are abstract-only #gap/no-fulltext-access

[^lin2025nma]: doi:10.1038/s41598-025-12597-0 · meta-analysis · 23 RCTs, n=3,905 participants · Bayesian network meta-analysis of topical photoaging interventions · tretinoin/isotretinoin ranked highest for fine wrinkles; tazarotene for coarse wrinkles; tretinoin best overall safety profile · *Scientific Reports* 2025 · Lin L et al. (PMID 40707570) · archive: in index, OA gold, download pending

[^siddiqui2024]: doi:10.1007/s40257-024-00893-w · systematic-review · 25 studies · tretinoin vs alternative topical agents in photoaging · 13 equivalent, 7 comparator-superior, 3 tretinoin-superior for efficacy; most comparators less irritating; retinaldehyde recommended as 2nd-line · *American Journal of Clinical Dermatology* 2024 · Siddiqui Z et al. (PMID 39348007) · archive: in index, closed OA, not downloaded; citation percentile 99th

[^bagatin2018]: doi:10.1684/ejd.2018.3320 · rct · n=58 (29/arm) · 24-week investigator-blinded parallel-group · adapalene 0.3% gel vs tretinoin 0.05% cream once daily · no significant difference across global photoaging, periorbital wrinkles, melanosis, actinic keratosis; non-inferior efficacy for adapalene · *European Journal of Dermatology* 2018 · Bagatin E et al. (PMID 30105991) · archive: in index, bronze OA, download pending

[^dhaliwal2019]: doi:10.1111/bjd.16918 · rct · n=44 (22/arm) · 12-week double-blind · bakuchiol 0.5% bid vs retinol 0.5% qd · equivalent wrinkle + hyperpigmentation outcomes; retinol more scaling/stinging · *British Journal of Dermatology* 2019 · Dhaliwal S et al. (PMID 29947134) · archive: in index, bronze OA, download pending; citation percentile 100th (118 citations)

[^chien2022]: doi:10.1001/jamadermatol.2022.1891 · rct · n=20 · bilateral within-person randomized trial · tretinoin precursors vs tretinoin; equivalent efficacy; erythema 6× less frequent with precursors (11% vs 64%); MMP-2 reduction correlated with wrinkle improvement · *JAMA Dermatology* 2022 · Chien AL et al. (PMID 35675051) · archive: in index, green OA via PMC, download pending; citation percentile 100th

[^puyana2022]: doi:10.1111/jocd.15748 · systematic-review · bakuchiol dermatology applications; variable evidence quality across included studies; authors note psoralen contamination safety concern · *Journal of Cosmetic Dermatology* 2022 · Puyana C et al. (PMID 36176207) · archive: not confirmed in index
