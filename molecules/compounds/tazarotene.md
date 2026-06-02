---
type: compound
aliases: [Tazorac, Avage, Fabior, Arazlo, tazarotenic acid (active metabolite), ethyl 6-[2-(4,4-dimethylthiochroman-6-yl)ethynyl]nicotinate]
pubchem-cid: 5381
inchikey: OGQICQVSFDPSEI-UHFFFAOYSA-N
chembl-id: CHEMBL1657
chembl-id-active-metabolite: CHEMBL1201375
drugbank-id: DB00799
cas-number: 118292-40-3
molecular-formula: C21H21NO2S
molecular-weight-da: 351.47
mechanisms: [RAR-agonist, AP-1-transrepression, MMP-1-suppression, collagen-synthesis-stimulation]
targets: ["[[rar-beta]]", "[[rar-gamma]]"]
hallmarks: ["[[loss-of-proteostasis]]", "[[genomic-instability]]", "[[chronic-inflammation]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Long-term (5-year) head-to-head RCT vs tretinoin 0.025% in photoaged skin with collagen I/III biopsy endpoint + digital wrinkle photometry as co-primary; would resolve whether greater RAR-β/γ potency translates to superior histological anti-aging outcomes vs the tretinoin gold standard."
clinical-trials-active: 0
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Canonical identity fields verified against PubChem CID 5381 and ChEMBL API (corrected chembl-id CHEMBL1213→CHEMBL1657, chembl-id-active-metabolite CHEMBL83991→CHEMBL1201375, cas-number null→118292-40-3). Fisher 1996 PDF read in full; n values and mechanism claims cross-checked. Lin 2025 PDF read in full; coarse-wrinkle ranking corrected (tazarotene 3rd, not 1st). Draelos 2023 footnote corrected (wrong DOI 10.1111/jdv.18701 and wrong first author). Kang 2001/2002/2005 and Chandraratna 1997 are not_oa; claims verified from published abstracts and FDA prescribing information only."
---

# Tazarotene

A synthetic third-generation acetylenic retinoid. FDA-approved for acne vulgaris (1997), plaque psoriasis (1997), and photoaging (Avage, 2000 — on-label aging-indication approval for mottled hyperpigmentation, fine wrinkling, and benign facial lentigines). Among the most potent topical retinoids by receptor-binding criteria; more irritating than [[adapalene]] but with a comparable or superior photoaging efficacy profile vs [[tretinoin]] 0.05% on wrinkle endpoints. Prodrug ester hydrolyzed by skin esterases to active **tazarotenic acid**. Pregnancy category X (topical) — explicit teratogen warning stricter than adapalene.

---

## Identity

- **PubChem CID:** 5381
- **InChIKey:** OGQICQVSFDPSEI-UHFFFAOYSA-N
- **ChEMBL:** CHEMBL1657 (parent); active metabolite tazarotenic acid: CHEMBL1201375
- **DrugBank:** DB00799
- **Molecular formula:** C21H21NO2S
- **CAS:** 118292-40-3
- **Molecular weight:** 351.47 g/mol (parent ester); 323.41 g/mol (tazarotenic acid, C19H17NO2S, after hydrolysis — ChEMBL1201375)
- **Canonical SMILES:** `CCOC(=O)C1=CN=C(C=C1)C#CC2=CC3=C(C=C2)SCCC3(C)C`
- **Class:** synthetic retinoid (third generation; acetylenic subclass)
- **Structural features:** acetylenic carbon-carbon triple bond linker; pyridyl nicotinate ester; dimethyl-thiochroman ring system (dimethylthiochroman-6-yl group)

---

## Prodrug pharmacology

Tazarotene is an **ester prodrug**. Skin esterases rapidly hydrolyze the ethyl ester linkage to produce **tazarotenic acid**, the receptor-active species. This conversion occurs predominantly in the skin after topical application. The prodrug design confers two advantages over directly applying the acid form: better formulation stability and a slower release profile.

**Receptor selectivity (tazarotenic acid):**

| Receptor | Activity |
|---|---|
| RAR-α | No meaningful binding |
| RAR-β | Selective agonist |
| RAR-γ | Selective agonist |
| RXR-α/β/γ | No binding |

This RAR-β/γ selective profile mirrors [[adapalene]] but differs from tretinoin, which activates all three RAR isoforms (α, β, γ). The functional consequence for skin: tazarotenic acid drives the same downstream [[skin-aging|anti-photoaging]] programs as tretinoin (AP-1 transrepression, MMP suppression, collagen-I stimulation) via RAR-β/γ [^chandraratna1997] without triggering the RAR-α-mediated sebaceous gland suppression that contributes to tretinoin's teratogenic profile in systemic use. Topical tazarotene retains pregnancy-category-X classification, however, due to measurable systemic absorption (~6% of dose) and retinoid teratogenicity risks at even low systemic exposure.

**Half-life in skin:** tazarotenic acid ~17 h (estimated dermal residence); parent compound is cleared much faster due to rapid ester hydrolysis. Compare to tretinoin (~150 h estimated dermal t½) — tazarotene's shorter skin half-life reduces systemic accumulation from topical use. #gap/needs-replication for direct pharmacokinetic head-to-head data in human skin.

**Systemic absorption:** approximately 2–6% of the topically applied dose reaches systemic circulation (FDA prescribing information); tazarotenic acid undergoes rapid hepatic conjugation and renal excretion. Not intended for systemic use.

---

## Mechanism of action in skin aging

The photoaging mechanism follows the well-characterised retinoid pathway described for tretinoin by Fisher et al. 1996 [^fisher1996] and is assumed to apply to tazarotenic acid by receptor homology:

1. **AP-1 transrepression:** Tazarotenic acid–RAR-β/γ complexes bind Jun/Fos and prevent AP-1 from occupying MMP gene promoters, suppressing UV-induced transcription of MMP-1, MMP-3, and MMP-9 [^fisher1996]. This directly reduces collagen fragmentation — the dominant proximal driver of wrinkle formation and dermal atrophy.
2. **Collagen-I synthesis stimulation:** RAR-β/γ activation drives transcription programs in [[dermal-fibroblasts]] that upregulate type I procollagen synthesis, partially compensating for photoaging-induced collagen loss.
3. **Epidermal turnover:** increases keratinocyte proliferation and regularises corneocyte shedding, improving surface texture, reducing hyperpigmented corneocytes in lentigines, and plumping papillary dermis.
4. **Comedolytic (acne indication):** reduces abnormal follicular epithelial cohesion, prevents comedo formation.

Tazarotenic acid is estimated to be more potent per mole than adapalene (lower effective concentration required for equivalent RAR activation), though head-to-head cumulative irritation patch studies show tazarotene 0.045% lotion is numerically less or similarly irritating compared to adapalene 0.3% gel when the lower concentration formulation is used [^stein2023].

#gap/needs-replication — Direct mechanistic studies in human skin demonstrating tazarotenic acid–driven AP-1 transrepression + collagen synthesis at therapeutic concentrations (vs inferring from tretinoin analog studies) are limited in the public literature.

---

## FDA-approved indications and formulations

| Indication | Brand | Formulation | Approved | Concentration |
|---|---|---|---|---|
| Acne vulgaris | Tazorac | Cream / Gel | 1997 | 0.05%, 0.1% |
| Plaque psoriasis | Tazorac | Cream / Gel | 1997 | 0.05%, 0.1% |
| Photoaging | Avage | Cream | 2000 | 0.1% |
| Acne vulgaris | Fabior | Foam | 2012 | 0.1% |
| Acne vulgaris | Arazlo | Lotion | 2019 | 0.045% |
| Psoriasis + moisturizer | Duobrii | Lotion (halobetasol 0.01% / tazarotene 0.045%) | 2019 | 0.045% |

**Avage (photoaging):** FDA approved in 2000 specifically for "mottled hyperpigmentation, fine wrinkling, and benign facial lentigines" in adults 17 and older as a component of a comprehensive skin care and sun avoidance program. This makes tazarotene one of only two topical agents with on-label FDA approval for a skin aging indication (the other being tretinoin cream as Renova/Retin-A Micro; retinol is not FDA-approved for photoaging). The Avage label explicitly states the drug does not repair intrinsic aging, only UV-induced changes.

---

## Photoaging clinical evidence

### Kang et al. 2001 — dose-ranging Phase 3, Arch Dermatol

Multi-center, double-blind, vehicle-controlled RCT of tazarotene cream (0.01%, 0.025%, 0.05%, 0.1%) vs vehicle in subjects with moderate-to-severe photoaging [^kang2001]. Assessed fine and coarse wrinkles, mottled hyperpigmentation, pore size, skin laxity, and overall appearance. All concentrations ≥0.025% showed statistically significant improvement over vehicle on composite photoaging scores; 0.1% showed greatest improvement but also most retinoid dermatitis. Established the dose-response curve for photoaging indications.

### Phillips et al. 2002 — 12-month multicenter RCT, Arch Dermatol

52-week multicenter randomized double-blind vehicle-controlled trial in n=562 subjects with moderately photoaged skin; tazarotene 0.1% cream vs vehicle [^phillips2002]. At week 24, significantly greater proportion of tazarotene-treated subjects achieved treatment success (defined as >50% improvement in global photoaging severity). Clinical improvements continued to accumulate through week 52 without plateauing — consistent with sustained collagen synthesis/remodeling effects. Multiple specific endpoints improved: fine and coarse wrinkles, pigmentation irregularity, pore size, skin roughness.

### Kang et al. 2005 — multicenter RCT, JAAD

Extended multicenter randomized double-blind trial across multiple sites; n>100; tazarotene 0.1% cream vs vehicle [^kang2005]. Confirmed efficacy of 24-week and 52-week treatment courses in photodamaged skin, corroborating Phillips 2002 results. Supported FDA approval maintenance data for Avage.

### Lin et al. 2025 — network meta-analysis, Scientific Reports

A 2025 network meta-analysis of 23 RCTs (n=3,905 participants) comparing topical photoaging interventions assessed efficacy and safety across five endpoints [^lin2025]. Key tazarotene findings:

- **Coarse wrinkles:** tazarotene OR 1.84 (95% CI 1.22–2.76, p=0.0013) vs placebo — statistically significant and the only agent reaching significance in this analysis. However, by rankogram, **retinol ranks highest for coarse wrinkle** (consistently first in cumulative probability), followed by tretinoin (OR 1.94); tazarotene ranked third, with "moderately effective" characterisation by authors.
- **Fine wrinkles:** tazarotene OR 3.95 (95% CI 1.41–11.10, p=0.0090) — significant; isotretinoin (OR 116.23) and retinol (OR 14.10) ranked higher.
- **Hyperpigmentation:** tazarotene OR 2.18 (95% CI 0.61–7.85) in random-effects model — not statistically significant; tretinoin and topical bakuchiol ranked highest.
- **Roughness:** tazarotene OR 1.00 (95% CI 0.42–2.37) — not significant; consistently lowest efficacy on this endpoint.
- **Safety:** tazarotene OR 0.26 (95% CI 0.11–0.61, p=0.0013) — **the only agent showing statistically significantly worse safety vs placebo**; highest adverse-event frequency among all agents assessed. Tretinoin had the most favorable safety profile.

**Practical implication:** tazarotene's coarse-wrinkle efficacy (OR 1.84, significant) comes with uniquely poor tolerability; isotretinoin and tretinoin showed more balanced efficacy-safety profiles. Caution: *Scientific Reports* NMA; heterogeneity 2–7% across endpoints (low); concentration details not standardised across included trials; predominantly Caucasian trial populations.

---

## Comparative retinoid potency

| Retinoid | RAR selectivity | Potency vs tretinoin | Pregnancy risk | Typical photoaging dose |
|---|---|---|---|---|
| [[tretinoin]] (ATRA) | RAR-α/β/γ (all) | Reference (1×) | Category C | 0.025–0.1% cream |
| Tazarotene | RAR-β/γ | > tretinoin (estimated ~2–5×) | Category X | 0.045–0.1% |
| [[adapalene]] | RAR-β/γ | < tretinoin (milder) | Category C | 0.1–0.3% |
| [[retinol]] | Converted to ATRA (rate-limiting) | << tretinoin (~20× weaker) | Avoid in pregnancy (OTC) | 0.5–2.5% |
| [[retinaldehyde]] | Converted to ATRA (1 step vs retinol's 2) | Intermediate (~10× weaker) | Avoid in pregnancy | 0.05–0.1% |
| [[bakuchiol]] | Functional analog (non-RAR direct) | Unclear; parity with low-dose ATRA in some RCTs | Insufficient data | 0.5–1% |

Tazarotene's greater potency corresponds to greater irritation potential in controlled trials [^stein2023]. The Arazlo formulation (0.045% lotion) was developed specifically to reduce irritation by lowering concentration and improving vehicle hydration.

---

## Tolerability and safety

**Retinoid dermatitis** (erythema, desquamation, peeling, burning, dryness) is the primary adverse effect and occurs predictably during the first 4–8 weeks of use. In the Phillips 2002 trial, retinoid-dermatitis-related discontinuations were more frequent than with vehicle but were described as manageable with alternate-day dosing and emollient use.

**Pregnancy category X** — this is stricter than adapalene (Category C). The X designation reflects that even low systemic exposure (~2–6% topical absorption) carries teratogenic risk in the first trimester. Tazarotene is contraindicated in pregnancy and women of childbearing potential who are not using reliable contraception. This restricts its use compared to adapalene, which lacks the X classification for topical application.

**Sun sensitivity:** increases UV sensitivity of treated skin (characteristic of retinoids generally). Daily broad-spectrum sunscreen is required during treatment. Avage prescribing information specifies daily SPF ≥15 sunscreen and protective clothing.

**Photo-stability:** tazarotene is photodegradable; application in the evening (rather than morning) is recommended to avoid UV-driven inactivation of the active compound.

**Drug interactions:** CYP3A4 substrates — limited systemic absorption reduces drug-interaction risk compared to oral retinoids, but co-administration of other photosensitising agents may increase skin irritation.

---

## Hallmark context

Tazarotene addresses photoaging-driven mechanisms that overlap with several hallmarks of aging, predominantly via direct extracellular matrix intervention in the skin:

| Hallmark | Mechanism | Evidence basis |
|---|---|---|
| [[loss-of-proteostasis]] | AP-1 transrepression suppresses MMP-1/3/9-driven collagen fragmentation; collagen-I synthesis stimulation partially restores dermal matrix | [^fisher1996]; [^kang2001]; [^phillips2002] |
| [[genomic-instability]] | Retinoid-driven epidermal turnover normalisation; RAR nuclear signaling may reduce UV mutagenesis (keratinocyte-level); mechanism incompletely defined in skin | [^chandraratna1997] |
| [[chronic-inflammation]] | AP-1 transrepression reduces UV-induced pro-inflammatory cytokine transcription; reduces local inflammaging in photoaged dermis | [^fisher1996] |

**Hallmark extrapolation table:**

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Yes (RAR-β/γ signaling; Fisher 1996 human skin data) |
| Phenotype conserved in humans? | Yes (photoaging reversal studied directly in humans) |
| Replicated in humans? | Yes (multiple multicenter RCTs for FDA approval) |

---

## Druggability and class context

- **Druggability tier:** 1 (FDA-approved topical agent for an on-label photoaging/aging-skin indication via Avage 2000)
- **SENS strategy:** not directly applicable at the SENS-category level (tazarotene addresses extracellular matrix degradation in skin, most closely corresponding to [[sens-damage-categories|ExtraCellular Matrix cross-link / AmyloSENS]] context, but is primarily a functional ECM restorer rather than a SENS-damage remediator)
- **Class page:** [[retinoids]] (R41; covers tretinoin, retinol, retinaldehyde, adapalene, bakuchiol, tazarotene as a class)
- **Mechanism class in intervention-classes.md:** `topical retinoid / RAR agonist` (added R41); mechanisms values on this page (`RAR-agonist`, `AP-1-transrepression`, `MMP-1-suppression`, `collagen-synthesis-stimulation`) are canonical for this class

---

## Limitations and concerns

- **Pregnancy category X** restricts use in women of reproductive age without contraception — clinical management constraint (unlike adapalene, which is Category C and thus permitted in many practices during pregnancy discussion).
- **Irritation-potency tradeoff**: greater potency than adapalene correlates with greater retinoid dermatitis, especially at 0.1% concentrations; required tolerability management (alternate-day dosing, emollient co-use) reduces adherence. The 0.045% Arazlo formulation mitigates but does not eliminate this.
- **No systemic anti-aging effects**: unlike caloric restriction or senolytic compounds, tazarotene is a topical tissue-specific intervention addressing [[skin-aging]] phenotypes only. It does not reduce systemic senescent-cell burden, does not modulate systemic inflammaging, and has no documented longevity-extension effects in any organism.
- **No long-term (>52-week) photoaging RCT data**: the longest well-controlled trials are 12 months. Whether long-term use maintains or plateaus efficacy is not established by controlled trial data. #gap/long-term-unknown
- **No active photoaging clinical trials as of 2026-05-19** (ClinicalTrials.gov v2 query returned 0 active recruiting trials for tazarotene in photoaging/aging-skin indications). Research momentum has largely shifted to mechanism studies and new formulations.
- **Most-cited foundational RCTs (Kang 2001, Phillips 2002, Kang 2005) are closed-access**: PDFs not locally available. Quantitative claims from these studies in this page derive from published abstracts, review summaries, and the FDA prescribing information. #gap/no-fulltext-access for primary photoaging trial verification.

---

## Cross-references

- [[tretinoin]] — sister retinoid; gold-standard topical anti-aging comparison
- [[adapalene]] — sister synthetic retinoid; gentler RAR-β/γ selective; pregnancy category C vs tazarotene's X
- [[retinol]] — OTC retinoid precursor; weaker efficacy, better tolerability
- [[retinaldehyde]] — intermediate between retinol and tretinoin
- [[bakuchiol]] — functional retinoid analog (non-RAR); used in pregnancy/sensitive-skin populations
- [[retinoids]] — class MOC page (R41)
- [[skin-aging]] — primary phenotype target
- [[mmp-1]] — key downstream target of AP-1 transrepression
- [[keratinocytes]] — epidermal cell type on which tazarotene acts to increase turnover
- [[dermal-fibroblasts]] — target of collagen-synthesis stimulation
- [[studies/fisher-1996-photoaging-ap1-mmp]] — foundational AP-1/MMP mechanism paper

---

## Footnotes

[^chandraratna1997]: doi:10.1016/s0190-9622(97)80395-7 · Chandraratna RAS · *J Am Acad Dermatol* 1997;37(2):S12–S17 · review · title: "Tazarotene: The first receptor-selective topical retinoid for the treatment of psoriasis"; characterises tazarotene as the first RAR-selective topical retinoid; establishes RAR-β/γ selectivity of tazarotenic acid; describes prodrug hydrolysis mechanism and receptor-binding profile · **not_oa; not locally downloaded; abstract-verified via Crossref**

[^fisher1996]: [[studies/fisher-1996-photoaging-ap1-mmp]] · doi:10.1038/379335a0 · Fisher GJ et al. · *Nature* 1996;379:335–339 · in-vivo · n=7–10 (retinoid pretreatment experiments, Fig 4; UVB induction experiments in Figs 1–2 used n=6–17/timepoint) · p<0.01 · model: adult human skin irradiated in vivo with UVB; ATRA (0.1%) pretreatment reduces AP-1 DNA binding ~70% (Fig 4a, n=9, p<0.01); reduces 92K gelatinase mRNA, protein, and activity (Fig 4b, n=9–10, p<0.01); reduces interstitial collagenase mRNA, protein, and activity (Fig 4c, n=8–10, p<0.01). Cited here as mechanism basis for the RAR → AP-1 → MMP pathway applicable to all clinical retinoids including tazarotene.

[^kang2001]: doi:10.1001/archderm.137.12.1597 · Kang S et al. · *Arch Dermatol* 2001;137:1597–1604 · rct · multicenter, double-blind, vehicle-controlled · n>100 · model: humans with moderate-to-severe photoaging · dose-ranging (0.01–0.1% cream); concentrations ≥0.025% show statistically significant improvement over vehicle on composite photoaging scores; 0.1% most effective but most irritating · **not_oa; not locally downloaded**

[^phillips2002]: doi:10.1001/archderm.138.11.1486 · Phillips TJ et al. · *Arch Dermatol* 2002;138:1486–1493 · rct · multicenter randomized double-blind vehicle-controlled · n=562 · model: photodamaged adults · 52-week treatment; tazarotene 0.1% cream significantly exceeds vehicle for global photoaging success rate at 24 weeks; continued improvement through week 52 without plateau; supports Avage FDA indication · **not_oa; not locally downloaded**

[^kang2005]: doi:10.1016/j.jaad.2004.06.021 · Kang S et al. · *J Am Acad Dermatol* 2005;52:268–274 · rct · multicenter randomized double-blind · n>100 · model: photodamaged adults · replicates Phillips 2002 efficacy at 24 and 52 weeks; photodamage composite scores improved · **not_oa; not locally downloaded**

[^stein2023]: doi:10.1080/09546634.2023.2166346 (PMID 36622889) · Draelos ZD · *J Dermatol Treat* 2023;34(1):2166346 · rct · two double-blind 12-day modified cumulative irritation patch studies (n=20 each); tazarotene 0.045% lotion vs adapalene 0.3% gel (Study 1) and vs trifarotene 0.005% cream (Study 2); tazarotene 0.045% lotion was numerically less irritating than adapalene 0.3% gel (Study 1: both mildly irritating, tazarotene lower overall) and significantly less irritating than trifarotene 0.005% cream (Study 2, p<0.05 from day 2) · **abstract-verified via PubMed PMID 36622889**

[^lin2025]: doi:10.1038/s41598-025-12597-0 · Lin L et al. · *Sci Rep* 2025;15:26889 · meta-analysis · NMA of 23 RCTs (n=3,905 total; coarse-wrinkle analysis: 10 RCTs, 2,042 participants); Bayesian random-effects model; tazarotene OR 1.84 (1.22–2.76, p=0.0013) for coarse wrinkle — significant but 3rd in rankogram behind retinol and tretinoin; OR 3.95 (1.41–11.10, p=0.0090) for fine wrinkle; OR 2.18 (0.61–7.85, NS) for hyperpigmentation; OR 1.00 (0.42–2.37, NS) for roughness; safety OR 0.26 (0.11–0.61, p=0.0013) — only agent significantly worse than placebo for adverse events · gold OA; PDF verified
