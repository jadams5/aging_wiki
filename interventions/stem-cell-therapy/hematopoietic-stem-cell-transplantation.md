---
type: intervention
aliases: [HSCT, BMT, bone marrow transplantation, hematopoietic cell transplantation, HCT, stem cell transplant]
mode: stem-cell-therapy
mechanisms: [cell-replacement, immune-reset, paracrine-signaling]
targets: []
target-hallmarks: ["[[stem-cell-exhaustion]]"]
target-pathways: []
human-evidence-level: strong
clinical-stage: fda-approved
safety-profile: "well-established (hematologic disease) | investigational (aging-rejuvenation)"
translation-gap: "human-evidence-strong (hematologic disease) | preclinical-only (aging-rejuvenation)"
next-experiment: "Heterochronic HSCT pilot (young donor → elderly recipient with confirmed CHIP) in a non-malignant aging-related indication (e.g., aplastic anemia or MDS-LR); n=20–40; primary endpoints: CHIP clone suppression, immune repertoire diversity, and 5-year clonal surveillance by WGS."
clinical-trials-active: null
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "All seven primary-source PDFs verified end-to-end. Corrections: Kollman 2016 n corrected; Jazbec 2022 mouse strain (BALB/c, not C57BL/6) and donor-age framing corrected; Gibson 2022 GVHD HR nuance and DNMT3A-CH survival direction corrected. Safety-profile updated to indication-split convention per R26a. Beerman author list corrected. R34 recency check (2026-05-08): PubMed/Europe PMC searches for HSCT-aging/epigenetic-age 2024–2026 returned no peer-reviewed primary studies that change page claims (no published heterochronic-HSCT human trial; no donor → recipient methylation-age longitudinal analyses identified beyond pre-existing literature). No edits required from this pass."
---

# Hematopoietic stem cell transplantation (HSCT)

The infusion of donor or autologous hematopoietic stem and progenitor cells following myeloablative or reduced-intensity conditioning to reconstitute the blood and immune system. HSCT is FDA-approved and the standard of care for a range of hematologic malignancies and certain non-malignant disorders (aplastic anemia, sickle cell disease, thalassemia, primary immunodeficiencies). In the aging context, HSCT is relevant on two distinct axes: (1) the well-documented **donor-age effect**, where older donors produce inferior transplant outcomes in the clinical setting, and (2) **heterochronic HSCT** — transplanting young-donor marrow into aged recipients to ask whether hematopoietic rejuvenation is achievable — which is currently limited to mouse models. HSC biology (cell-autonomous aging, clonal dynamics, niche interactions) is covered on [[hematopoietic-stem-cells]]; this page focuses on HSCT as a therapeutic modality.

---

## Autologous vs allogeneic

**Autologous HSCT:** The patient's own HSCs are collected (usually from mobilized peripheral blood), stored, and reinfused after high-dose conditioning chemotherapy. This eliminates graft-versus-host disease (GVHD) risk but also eliminates graft-versus-tumor (GVT) effect. Standard in myeloma and relapsed lymphoma. An aging-context note: autologous products are harvested from the patient's own aging/potentially CHIP-bearing marrow, providing no immunological reset.

**Allogeneic HSCT:** HSCs from a related (sibling) or unrelated matched donor are infused. Full immunological reconstitution occurs from donor cells. For aging research, allogeneic HSCT is more relevant because it provides a genuine cellular replacement and immune reset from a genetically distinct donor — and because donor age significantly affects outcomes (see below).

---

## Donor-age effects in clinical HSCT

Donor age is one of the strongest modifiable donor variables affecting recipient survival in unrelated-donor HSCT for hematologic malignancy.

### Kollman 2001 — the foundational donor-age dataset

In a landmark analysis of 6,978 unrelated donor transplants across 295 centers, Kollman et al. demonstrated that **donor age was the only donor trait independently associated with both overall and disease-free survival** [^kollman2001]. Five-year overall survival rates were 33%, 29%, and 25% for recipients of donors aged 18–30 years, 31–45 years, and >45 years respectively (P=0.0002). Younger donors also correlated with reduced incidence of chronic GVHD.

### Kollman 2016 — updated analysis

An expanded analysis of 6,349 donor-recipient pairs in the training cohort (1988–2006), validated in a cohort of 4,690 pairs (2007–2011) [^kollman2016], confirmed the donor-age effect in the modern allele-level HLA-typing era: for every 10-year increment in donor age, there is a 5.5% increase in the hazard ratio for overall mortality (HR 1.005 per year; 95% CI, 1.002–1.009; P=.003). The optimal donor age band in this analysis was 18–32 years, with 5-year risk-adjusted OS of 36% vs 33% vs 29% for donor ages ≤32, 33–50, and >50 years respectively. This effect appears to operate through multiple mechanisms, including reduced T-cell repertoire diversity in older donors, increased GVHD severity, and potentially poorer hematopoietic reconstitution speed from aged HSCs with reduced regenerative capacity (see [[hematopoietic-stem-cells]] § Aging phenotype).

| Donor age band | 5-year OS (Kollman 2001) | Notes |
|---|---|---|
| 18–30 years | ~33% | Best outcomes |
| 31–45 years | ~29% | Intermediate |
| >45 years | ~25% | Worst outcomes |

### Extrapolation table

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — aged HSCs show conserved cell-intrinsic decline across mouse and human |
| Phenotype conserved in humans? | yes — clinical HSCT data are human |
| Replicated in humans? | yes — multiple large registry analyses |

---

## HSC aging and cell-intrinsic decline

Understanding why donor age matters requires understanding HSC aging. Two landmark papers established the cell-intrinsic basis for aged-HSC functional decline:

**Rossi et al. 2005** showed that aged murine long-term HSCs exhibit intrinsic alterations independent of niche: upregulation of myeloid fate determinants, downregulation of lymphoid specification genes, elevated expression of leukemia-associated genes, and expanded self-renewal at the cost of lymphoid output [^rossi2005]. This provides the mechanistic basis for the myeloid skewing and immunosenescence observed with advancing donor age.

**Rossi et al. 2007** demonstrated that accumulated DNA damage (not merely niche signals) causally limits aged HSC function under stress, with DNA-repair-deficient mice recapitulating the aged-HSC phenotype at young ages [^rossi2007].

**Beerman et al. 2010** further showed that clonal expansion of myeloid-biased HSC subtypes — not uniform decline of all HSCs — is the primary driver of aging-associated hematopoietic skewing [^beerman2010]. This has direct implications for HSCT: aged donors harbor an HSC pool that is functionally and clonally restructured relative to young donors.

**Florian et al. 2012 (Geiger group)** identified elevated Cdc42 activity as causally linked to HSC aging and demonstrated that pharmacological Cdc42 inhibition restores aged HSC polarity, H4K16ac epigenetic patterns, and functional capacity to young-like levels [^florian2012]. This is the most direct evidence that aged-HSC dysfunction is at least partially reversible — relevant to both the ex vivo preparation of older-donor HSCs and to the concept of rejuvenating a recipient's endogenous stem cell pool post-transplant. #gap/needs-human-replication

---

## Heterochronic HSCT — aging-rejuvenation evidence

Heterochronic HSCT (young-donor marrow → aged host) is the conceptually simplest test of whether hematopoietic rejuvenation is achievable via cell replacement.

### Mouse evidence

The most directly relevant mouse study by Jazbec et al. 2022 [^jazbec2022] examined non-myeloablative heterochronic bone marrow transplantation in aged female **BALB/c** mice. Recipients (n=60) started receiving transplants at 14 months and were transplanted again at 16 and 18(19) months (eight injections total, 125.1 ± 15.6 million nucleated BM cells per animal). Young inbred BALB/c male donors (7–13 weeks) were used to enable chimerism tracking via Y-chromosome PCR. At 21 months, BM donor chimerism averaged 18.7 ± 9.6%. Results:
- Improved innate immune markers: increased neutrophil counts in spleen (p=0.015) and BM (p=0.014)
- Improved adaptive immune markers: increased central memory T-helper cells (p=0.040), effector/memory Tc cells (p=0.033), B1a and B1b cells in peritoneal cavity (p=0.006 and p<0.001)
- Borderline-significant enhancement of lymphocyte proliferative capacity (PHA+PMA stimulation, p=0.056)

**Critical null finding:** Despite these immune improvements, the treatment did not significantly extend lifespan (median 706 days BMT vs 761 days SHAM; log-rank test NS; Cox HR 1.224, p=0.480) and did not reduce frailty index scores (FI p=0.356). The authors concluded that partial chimerism (~18.7%) in a non-conditioned setting may be insufficient to translate immune gains into longevity or frailty outcomes, and that the aged host HSC niche may actively impede engraftment. #gap/needs-replication #gap/long-term-unknown

### Extrapolation table for heterochronic mouse data

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — hematopoietic reconstitution biology is broadly conserved; immunosenescence drivers are partially conserved |
| Phenotype conserved in humans? | unknown — no human heterochronic HSCT for aging has been attempted |
| Replicated in humans? | no — preclinical only |

### Mechanistic basis and limitations

The Geiger-lab Cdc42 work [^florian2012] suggests that cell-intrinsic HSC aging is reversible, which supports the possibility that young donor HSCs engrafted in an aged host might maintain youth-like functional output. However, several barriers exist:

1. **Niche competition.** Aged host niches favor aged-phenotype HSCs. Young donor HSCs may be outcompeted by residual host HSCs unless myeloablation is near-complete.
2. **Inflammatory milieu.** Aged hosts exhibit chronic low-grade inflammation ([[inflammaging]]) that may impair young donor HSC function and accelerate their aging post-engraftment.
3. **GVHD risk.** The regimens required for high chimerism carry substantial GVHD morbidity in elderly recipients — a compounding safety problem for an indication that is not life-threatening cancer.
4. **Engraftment-vs-aging timescale.** Even with full chimerism, the aging clock in non-hematopoietic tissues is unchanged; hematopoietic rejuvenation may produce immune benefits without reversing aging in brain, skeletal muscle, or vasculature.

---

## Donor-derived CHIP: clonal hematopoiesis transmission via HSCT

[[clonal-hematopoiesis]] (CHIP) accumulates in all aging individuals. When an older donor harbors CHIP clones and donates HSCs, those clones can be transmitted to the recipient and clonally expand in the engrafted host.

**Gibson et al. 2022 (JCO)** provided the largest analysis to date of donor-derived clonal hematopoiesis and recipient outcomes after HSCT [^gibson2022]. Key findings:
- Donor CH was detectable in 22.5% of donors ≥40 years (n=388/1,727); prevalence increased with age (12.6% at 40–49, 26.6% at 50–59, 41.2% at ≥60)
- The most common driver mutations: *DNMT3A* (14.6%), *TET2* (5.2%), *ASXL1* — consistent with the CHIP spectrum in aging donors
- Critically, the clinical effects of donor CH were **gene-specific and prophylaxis-dependent**: *DNMT3A*-CH (VAF ≥0.01) was associated with **improved** recipient OS (HR 0.78; 95% CI 0.62–0.98; P=.037) and PFS (HR 0.72; P=.003), and **reduced** relapse risk (sHR 0.74; P=.022) — apparently via augmented graft-versus-leukemia activity
- However, *DNMT3A*-CH was also associated with increased chronic GVHD risk in patients receiving **calcineurin-based prophylaxis** (sHR 1.37; 95% CI 1.02–1.84; P=.04); this risk was not observed in patients receiving post-transplant cyclophosphamide (PTCy)
- *TET2*-CH and other non-*DNMT3A* CH were not significantly associated with any outcome
- Donor clones evolved to donor cell leukemia (DCL) in 8 cases (10-year cumulative incidence 0.7%), predominantly from mutations in MDS-associated splicing factors or *TP53*, not from common *DNMT3A* or *TET2* CH

This has a nuanced implication for aging-targeted HSCT: the most common form of CH in older donors (*DNMT3A*) does not adversely affect recipient outcomes and may even benefit them via GVL effects. The primary concern for DCL is rare splicing-factor and *TP53* mutations, not the ubiquitous age-related *DNMT3A* mutations. The calculations around CHIP screening in donor selection are therefore more complex than a simple "older donor CHIP = bad" framing. #gap/needs-replication (prospective trials with systematic CHIP screening lacking)

### Current CHIP donor screening guidance

As of 2026, CHIP donor screening is not universally mandated. The Gibson 2022 data complicate any blanket exclusion policy: common *DNMT3A*-CH in donors is associated with improved recipient survival via GVL augmentation, and the GVHD risk can be mitigated by PTCy prophylaxis selection. The primary concern is rare (<1% of donors) splicing-factor or *TP53* mutations that carry high DCL risk. For aging-rejuvenation applications — where GVL effect is irrelevant and safety risk tolerance is lower — the calculus shifts: *DNMT3A*-CH provides no survival benefit if there is no malignancy to suppress, and any GVHD risk is unacceptable in a non-malignant indication. CHIP screening for high-risk (non-*DNMT3A*/non-*TET2*) mutations would therefore be prudent in aging-rejuvenation trial design.

---

## Translation status

### Hematologic indications (FDA-approved)

Allogeneic HSCT is FDA-approved for acute and chronic leukemias, myelodysplastic syndromes, myelofibrosis, aplastic anemia, and several non-malignant hematologic diseases. For these indications, HSCT has strong human evidence and decades of outcomes data. The procedure carries substantial procedural mortality (transplant-related mortality 5–15% depending on conditioning intensity, disease, and center) and long-term morbidity from GVHD and secondary cancers.

### Aging-rejuvenation use (preclinical only)

**No human trials of HSCT for aging-rejuvenation exist as of 2026-05-06.** The heterochronic-HSCT concept is supported only by mouse evidence, and the only direct heterochronic mouse trial [^jazbec2022] produced immune benefits but no lifespan extension.

For HSCT to enter aging-rejuvenation clinical development, several barriers would need resolution:
- **Reducing conditioning toxicity** for elderly recipients (reduced-intensity conditioning already exists but achieves lower chimerism)
- **CHIP-negative young donor availability** (CHIP prevalence rises sharply with age; donors <30 have low CHIP prevalence)
- **Proof of heterochronic benefit in higher-chimerism models** (the 2022 Jazbec BALB/c mouse study achieved only 18.7% chimerism in non-conditioned recipients; full myeloablative models with aging as the primary endpoint have not been published)
- **Non-malignant regulatory path** (FDA/EMA would require a defined clinical indication with adequate risk-benefit — "aging" is not currently recognized as a regulatory indication)

The most defensible near-term path mirrors the logic in [[aav-tert]]: start with a **non-malignant indication where aging-related hematopoietic failure is the primary pathology** — aplastic anemia, hypocellular MDS, or severe CHIP with clonal dominance in elderly patients. This would allow young-donor heterochronic HSCT within a regulated indication, with aging-related endpoints as secondary outcomes. #gap/needs-human-replication

---

## Gaps and limitations

- **No heterochronic HSCT lifespan data in mice beyond partial chimerism.** The 2022 Biomolecules study showed immune improvements without lifespan extension at 18.7 ± 9.6% chimerism in BALB/c mice. Whether full myeloablative conditioning and higher chimerism would extend lifespan is unknown. #gap/needs-replication

- **Aging inflammatory niche is unaddressed.** Heterochronic HSCT replaces the cellular hematopoietic compartment but does not modify the aged systemic milieu (elevated IL-6, TNF-α, GDF11/GDF15 dysregulation). Young donor HSCs engrafted in a pro-inflammatory aged host may age more rapidly than expected. #gap/no-mechanism

- **CHIP transmission risk is gene-specific and prophylaxis-dependent.** The Gibson 2022 JCO data show that *DNMT3A*-CH improves survival via GVL but increases chronic GVHD risk under calcineurin-based prophylaxis (mitigated by PTCy). The subset of donors with rare splicing-factor or *TP53* mutations carries high DCL risk. Prospective trials with systematic CHIP screening are lacking; the absolute risk estimates and their prophylaxis interaction need replication in independent cohorts. #gap/needs-replication

- **Donor-age effect mechanisms are multi-factorial.** It is not clear what fraction of the ~5.5% per decade HR increment for mortality from older donors (Kollman 2016; HR 1.005/yr; confirmed in validation cohort) is attributable to HSC cell-intrinsic aging vs T-cell repertoire narrowing vs CHIP transmission vs reduced cell dose from older donors. This complicates interpretation of the donor-age literature for rejuvenation applications. #gap/no-mechanism

- **No aging-specific clinical trials.** Current trial registries contain no recruiting HSCT trials with anti-aging or rejuvenation primary endpoints (ClinicalTrials.gov v2 search, 2026-05-06). #gap/long-term-unknown

---

## Cross-references

- [[hematopoietic-stem-cells]] (cell biology of HSCs; aging phenotype; CHIP genetics — the canonical home for HSC cell-biology claims referenced here)
- [[clonal-hematopoiesis]] (CHIP as phenotype; mutation spectrum; cardiovascular and leukemia risk)
- [[stem-cell-exhaustion]] (parent hallmark page)
- [[aav-tert]] (HSCT context for telomere gene therapy; ex vivo HSC TERT delivery as near-term translational path)
- [[mesenchymal-stem-cell-therapy]] (sibling R23a page — paracrine-dominant mechanism vs HSCT's replacement-dominant mechanism)
- [[ipsc-derived-cell-therapy]] (sibling R23a page — rejuvenation via fully reprogrammed cell product)
- [[in-vivo-partial-reprogramming-therapy]] (sibling R23a page — in situ epigenetic reset without cell transplantation)
- [[inflammaging]] (implicit stub — the aged systemic milieu that may undermine heterochronic HSCT benefit)
- [[immunosenescence]] (downstream consequence of HSC aging that HSCT could theoretically reverse)
- [[hallmarks-of-aging]] — stem-cell-exhaustion and genomic-instability are the primary hallmarks targeted

---

## Footnotes

[^kollman2001]: doi:10.1182/blood.v98.7.2043 · Kollman C, Howe CW, Anasetti C, Antin JH, Davies SM, Filipovich AH, et al. · Blood 2001 · 98(7):2043–2051 · observational · n=6,978 unrelated donor transplants · model: human registry data (NMDP) · donor age independently associated with 5-year OS (33% vs 25% for ages 18–30 vs >45, P=0.0002); only donor trait independently associated with both OS and DFS · archive: local PDF available

[^kollman2016]: doi:10.1182/blood-2015-08-663823 · Kollman C, Spellman SR, Zhang MJ, et al. · Blood 2016 · 127(2):260–267 · observational · n=6,349 donor-recipient pairs (training cohort, 1988–2006) + n=4,690 (validation cohort, 2007–2011) · model: human registry data (CIBMTR/NMDP; allele-level 8/8 HLA-matched unrelated donors) · per 10-year donor age increment: HR for mortality +5.5% (HR 1.005/yr; 95% CI 1.002–1.009; P=.003); optimal donor age 18–32 years (5-year OS 36% vs 33% vs 29% for ≤32, 33–50, >50 yr) · archive: local PDF available (bronze OA; downloaded 2026-05-06)

[^rossi2005]: doi:10.1073/pnas.0503280102 · Rossi DJ, Bryder D, Zahn JM, Ahlenius H, Sonu R, Wagers AJ, Weissman IL · PNAS 2005 · 102(26):9194–9199 · in-vivo · model: C57BL/6 mouse HSCs; serial transplantation and gene expression profiling · cell-intrinsic myeloid bias, downregulated lymphoid genes, elevated leukemia-associated genes in aged HSCs · archive: local PDF available (green OA)

[^rossi2007]: doi:10.1038/nature05862 · Rossi DJ, Bryder D, Seita J, Nussenzweig A, Hoeijmakers J, Weissman IL · Nature 2007 · 447:725–729 · in-vivo · model: C57BL/6 mice and DNA-repair-deficient strains · accumulated DNA damage as causal mechanism of HSC functional decline with age; DNA-repair-deficient mice recapitulate aged-HSC phenotype at young age · archive: local PDF available (closed; downloaded)

[^beerman2010]: doi:10.1073/pnas.1000834107 · Beerman I, Bhattacharya D, Zandi S, Sigvardsson M, Weissman IL, Bryder D, Rossi DJ · PNAS 2010 · 107(12):5465–5470 · in-vivo · model: C57BL/6 mice; clonal tracking via transplantation · clonal expansion of myeloid-biased HSC subtypes (not uniform decline) drives hematopoietic aging; myeloid-biased HSCs have robust self-renewal · archive: local PDF available (green OA)

[^florian2012]: doi:10.1016/j.stem.2012.04.007 · Florian MC, Dörr K, Niebel A, Daria D, Schrezenmeier H, Rojewski M, Filippi MD, Hasenberg A, Gunzer M, Scharffetter-Kochanek K, Zheng Y, Geiger H · Cell Stem Cell 2012 · 10(5):520–530 · in-vivo · model: C57BL/6 mouse HSCs; pharmacological Cdc42 inhibitor (CASIN) treatment · elevated Cdc42 causally linked to HSC aging; CASIN treatment restores polar cell frequency, H4K16ac patterns, and functional reconstitution capacity to young-like levels · archive: local PDF available (bronze OA; downloaded 2026-05-06)

[^jazbec2022]: doi:10.3390/biom12040595 · Jazbec K, Jež M, Švajger U, et al. · Biomolecules 2022 · 12(4):595 · in-vivo · model: aged female BALB/c mice (n=60 BMT, n=41 SHAM; transplanted at 14, 16, 18/19 months); young inbred male BALB/c donors (7–13 weeks); non-myeloablative whole-BM transplantation (125.1 ± 15.6 × 10⁶ cells/animal; 8 injections) · 18.7 ± 9.6% donor chimerism in BM at 21 months; improved innate (neutrophils) and adaptive (central memory Th, effector/memory Tc, B1a, B1b) immune markers; borderline lymphocyte proliferation benefit (p=0.056); no significant lifespan extension (706 vs 761 days median; log-rank NS) or frailty reduction (FI p=0.356) · archive: local PDF available (gold OA; downloaded 2026-05-06)

[^gibson2022]: doi:10.1200/JCO.21.02286 · Gibson CJ, Kim HT, Zhao L, et al. · Journal of Clinical Oncology 2022 · J Clin Oncol 40:189–201 · observational · n=1,727 donors ≥40 years (Dana-Farber + Johns Hopkins, 2000–2016); targeted sequencing of 46 genes · model: human allogeneic HSCT recipients · CH present in 22.5% of donors; DNMT3A-CH (VAF ≥0.01) associated with improved OS (HR 0.78, P=.037), improved PFS (HR 0.72, P=.003), and reduced relapse (sHR 0.74, P=.022); DNMT3A-CH increased chronic GVHD risk with calcineurin-based prophylaxis (sHR 1.37, P=.04) but not with PTCy; DCL evolved from rare TP53/splicing-factor mutations, not DNMT3A/TET2; primary drivers DNMT3A (14.6%), TET2 (5.2%), ASXL1 · archive: local PDF available (hybrid OA)
