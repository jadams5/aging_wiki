---
type: biomarker
aliases: [SYMPHONYAge, SYMPHONY Age, Systems Age clock, organ-system aging clock, TruDiagnostic organ clock]
modality: dna-methylation
unit: years
training-cohort: "Sehgal 2025 (Systems Age): HRS (n=3,593 primary training, EPIC array) + FHS (n=3,935 for mortality calibration and scaling, 450K array); independent validation in WHI (n=5,129 across 3 cohorts per preprint Table 2: BAA23 n=2,107, AS311 n=855, EMPC n=2,167; preprint abstract says ~5,600 but Table 2 total is 5,129 — published paper may include additional cohorts). Published paper also cites BLSA, SATSA, ADNI validation but full-text unavailable. TruDiagnostic SYMPHONY Age retrained November 2025 on ~8,000 participants with 133 clinical biomarkers per product report — no separate peer-reviewed publication for the retrained version as of 2026-06-12."
n-cpgs-or-features: "125,175 CpGs input (Sehgal 2025; full EPIC/450K overlap); per-system elastic-net selects a sparse subset. The 133-biomarker figure in the TruDiagnostic product report is the number of clinical input biomarkers mapped across all 11 systems, not the CpG count — CpG count for the SYMPHONY retrain is not publicly disclosed."
model-architecture: elastic-net
training-target: organ-clinical-biomarker
calibration-tissues: ["[[blood]]"]
test-retest-icc: null
human-evidence-level: limited
mendelian-randomization: not-applicable
intervention-responsive: partial
literature-checked-through: 2026-06-12
verified: true
verified-date: 2026-06-12
verified-by: claude
verified-scope: "Primary source (Sehgal 2025, doi:10.1038/s43587-025-00958-3) is closed-access; verified against the open bioRxiv preprint (doi:10.1101/2023.07.13.548904, substantially equivalent methodology) for pipeline description, cohort sizes, and z-scores. Mavrommatis 2025 (doi:10.1038/s41467-025-66106-y) and Harvanek 2024 (doi:10.1101/2024.10.28.24316295) verified against full PDFs. Published paper validation cohorts (BLSA n=765, SATSA n=535, ADNI n=1,696) listed in frontmatter training-cohort field but not independently verifiable from preprint — sourced from the published paper's abstract via PubMed. TruDiagnostic product-report figures (133 biomarkers, ~8,000 participants, November 2025 retrain) are commercial claims, not independently verifiable; retained with appropriate caveat. canonical-database identity fields (PubChem, ChEMBL) not applicable to this biomarker type."
---

# SYMPHONY Age

A **DNA-methylation organ-system biological age clock** that returns a separate biological age estimate for each of 11 distinct physiological systems from a single blood draw, plus a composite "SYMPHONY Age" summary score. SYMPHONY Age is TruDiagnostic's commercial implementation of the **Systems Age** framework developed by Sehgal et al. at Yale University and published in *Nature Aging* in September 2025 [^sehgal2025]. It differs conceptually from whole-body second- and third-generation clocks (GrimAge, PhenoAge, DunedinPACE) by decomposing aging heterogeneity: a person may show accelerated aging in one organ system while others appear concordant with or younger than chronological age. The approach is the DNAm analogue of the proteomic organ-clock work by Oh et al. 2023 [^oh2023], but uses DNA methylation from blood rather than plasma protein levels — a distinct modality and distinct clock.

## Identity and Provenance

- **Academic primary source:** Sehgal R, Markov Y, Qin C et al. (2025) "Systems Age: a single blood methylation test to quantify aging heterogeneity across 11 physiological systems." *Nature Aging* 5(9):1880–1896 — doi:10.1038/s43587-025-00958-3
- **Preprint (2023):** bioRxiv doi:10.1101/2023.07.13.548904 (PMC10370047) — precedes the peer-reviewed paper
- **Commercial product:** SYMPHONY Age (TruDiagnostic); acronym = **S**ystem **M**eth**y**lation **P**roxy of **H**eterogeneous **O**rgan **Y**ears; marketed as "Developed with Yale"
- **IP:** Subject to an invention declaration at Yale University and a provisional patent application (Sehgal 2025 competing interests)
- **Key authors (academic):** Raghav Sehgal (Yale, Computational Biology and Bioinformatics), Albert T. Higgins-Chen (Yale, Departments of Psychiatry and Pathology), Margarita Meer (Altos Labs, co-inventor); Morgan Levine (Altos Labs, corresponding author). Per preprint competing interests: A.H.C. received consulting fees from TruDiagnostic; R.S. received fees from LongevyTech.fund and Cambrian BioPharma (not TruDiagnostic in the Sehgal preprint). Both A.H.C. and R.S. are listed as TruDiagnostic scientific advisors per the Harvanek 2024 conflicts statement, and are named co-inventors on the licensed Systems Age patent
- **November 2025 retrain:** TruDiagnostic states SYMPHONY Age was retrained in November 2025 on ~8,000 participants with 133 clinical biomarkers. No peer-reviewed publication accompanies this version; product-report figures should be interpreted accordingly and comparability with the 2025 academic paper is uncertain.

## The 11 Organ Systems

The clock partitions biological aging into 11 system-specific scores, each trained against clinical biomarkers relevant to that system [^sehgal2025]:

| System | Representative clinical biomarkers / functional measures |
|---|---|
| Blood | CBC indices (RBC, WBC, hemoglobin, MCV, RDW, platelets, lymphocyte %) |
| Brain | Cognitive function assessments (WAIS-type), neurological clinical measures |
| Heart | Cardiovascular measures (blood pressure, ECG-derived, cardiac biomarkers) |
| Hormone | Endocrine biomarkers (thyroid, insulin, sex hormones) |
| Immune | Immune-cell-count-based markers, lymphocyte subsets |
| Inflammation | CRP, IL-6, ESR, and related inflammatory biomarkers |
| Kidney | Creatinine, cystatin C, BUN, electrolytes, GFR-based measures |
| Liver | ALT, AST, albumin, ALP, bilirubin, GGT |
| Lung | FEV1/FVC ratio and spirometry-derived pulmonary function |
| Metabolic | BMI, waist-hip ratio, HbA1c, cholesterol, triglycerides, glucose |
| Musculoskeletal | Grip strength, gait speed, physical performance measures |

**Note on biomarker lists:** The academic paper describes the mapping conceptually; full per-system biomarker lists with counts are in the Methods section of Sehgal 2025. The TruDiagnostic product report states 133 total biomarkers across all 11 systems but does not break this down per system publicly. Exact system-specific biomarker assignments may differ between the published model and the November 2025 retrain. #gap/needs-replication

## Training Architecture

The published Systems Age framework uses a six-step supervised + unsupervised pipeline [^sehgal2025]:

1. **Biomarker grouping** — clinical measures from population cohorts (HRS primary training, n=3,593) are grouped into the 11 systems by biological relevance and clinical convention.
2. **PCA within systems** — principal component analysis condenses each system's biomarkers into composite system-level principal components, capturing correlated within-system variation.
3. **DNAm surrogate training** — elastic net regression (α=0.5, λ via tenfold cross-validation) maps DNA methylation patterns to the system PCs, drawing on 125,175 CpGs present in all training and validation datasets. One sparse CpG model per system is the result.
4. **System-specific mortality calibration** — Cox elastic net models (trained in FHS Offspring) combine DNAm system PCs with mortality risk to score each system on a "biological years" scale relative to chronological age.
5. **Composite Systems Age** — a final Cox elastic net integrates all 11 system-score PCs (plus an age-prediction score) into the composite summary index.
6. **Scaling to age range** — all 11 system scores and the Systems Age composite are standardized to mean 0 / SD 1, then re-scaled to match the mean and SD of chronological age in the FHS Offspring + Third Generation combined dataset (n=3,935).

This architecture shares structural logic with GrimAge (DNAm surrogates of biological signals) but extends it from a handful of plasma proteins to a multi-system panel of clinical biomarkers. The training target is not mortality directly, but the clinical-biomarker composites that are then calibrated to mortality — hence `training-target: organ-clinical-biomarker`.

## Validation Performance

System scores showed domain specificity in independent validation cohorts (WHI, BLSA, SATSA, ADNI) [^sehgal2025]:

- Heart score: strongest association with coronary heart disease (meta z-score = 8.29)
- Musculoskeletal score: strongest association with physical function decline (z = 8.53)
- Brain score: strongest association with cognitive function (z = 3.51)
- Systems Age (composite): "had the strongest associations of all clocks for four conditions, was the second best for eight conditions, and was the third best for two conditions" across a wide panel of aging phenotypes

Across all conditions tested, second- and third-generation clocks outperformed first-generation clocks [^mavrommatis2025]; systems-based approaches such as Systems Age are motivated by this finding even though Systems Age was not included in the Mavrommatis 2025 comparison panel. System-specific accuracy for domain-relevant outcomes is the primary performance claim of the Sehgal 2025 paper — not that Systems Age outperforms existing clocks on global mortality (where GrimAge and DunedinPACE remain benchmarks).

### Clustering identifies aging subtypes

An unsupervised analysis of system-score patterns identified distinct **biological aging subtypes** — subgroups characterized by different combinations of accelerated and decelerated systems — each associated with unique patterns of health decline and disease risk. This result suggests that aging heterogeneity is not just quantitative ("aging faster or slower overall") but qualitative: different people follow different multi-system trajectories. #gap/needs-replication — the subtype analysis was performed in the same cohorts used for clock development; independent replication in a new prospective cohort is needed.

### External application: schizophrenia

Harvanek et al. (2024 preprint) applied Systems Age clocks in a meta-analysis of schizophrenia patients (1,891 patients vs 1,881 controls across 7 cross-sectional datasets) and found that 10 of the 11 system sub-clocks showed accelerated aging, with the **Heart and Lung** systems showing the largest effects, followed by Metabolic and Brain [^harvanek2024preprint]. The paper notes that clozapine use was independently associated with increased Heart and Inflammation aging. This is an early external-application result; the paper was a preprint as of 2026-06-12. #gap/needs-replication

## What Organ-Score Asymmetry Means Clinically

The primary interpretive claim of Systems Age is that **aging occurs at different rates across physiological systems within individuals**, and that this heterogeneity contains clinically actionable information beyond what a single composite score captures. Approximately 20% of the general population show markedly accelerated aging in a single organ system relative to others (analogous to the proteomic-organ-clock finding in Oh 2023 [^oh2023]).

**Key caveat on actionability (2026):** As of 2026-06-12, no validated organ-system-clock-targeted interventions exist. An elevated Kidney score on SYMPHONY Age does not imply that interventions shown to reduce renal biomarkers (creatinine, cystatin C) will also reduce the DNAm-derived Kidney score, nor that acting on the Kidney score will alter hard renal outcomes. The organ scores are **informational and prognostic** — not yet prescriptive. Translating an organ-asymmetric aging profile into a modified intervention strategy remains an open empirical question. #gap/no-mechanism

## Relationship to Proteomic Organ Clocks (Oh 2023)

Oh et al. 2023 (*Nature*, Wyss-Coray lab) measured aging signatures across 11 major organs using **plasma proteomics** (SomaScan) in ~5,600 individuals and similarly found that organs age at different rates within individuals [^oh2023]. The conceptual parallel is strong — both frameworks identify organ-specific biological age from a blood sample and reveal multi-system aging heterogeneity — but these are **distinct clocks using distinct modalities**:

| Feature | Systems Age / SYMPHONY Age | Oh 2023 organ clocks |
|---|---|---|
| Modality | DNA methylation (blood) | Plasma proteomics (SomaScan) |
| Input | 125,175 CpGs (EPIC/450K array) | ~5,000 proteins (aptamer-based) |
| Systems | 11 (matching list) | 11 major organs |
| Training | Clinical biomarker PCs → elastic net DNAm surrogates | Organ-enriched protein signatures → PCA |
| Commercial availability | SYMPHONY Age (TruDiagnostic) | Not directly commercialized as of 2026 |

Citing Oh 2023 as a basis for interpreting SYMPHONY Age scores would be a modality conflation error. The proteomic literature is useful **conceptual context** for why organ-specific aging scores carry biological meaning; it is not a validation of the DNAm-based implementation.

## Sourcing Caveat and Validation Status

A central uncertainty on this page is the relationship between the academic **Systems Age** paper and the commercial **SYMPHONY Age** product:

1. The Sehgal 2025 Nature Aging paper is peer-reviewed and provides the methodological foundation. DOI confirmed via Crossref and PubMed (PMID 40954326). It is not open-access as of 2026-06-12. #gap/no-fulltext-access
2. The TruDiagnostic product report (a consumer-facing artifact, not peer-reviewed) is the source for: the 133-biomarker count, the ~8,000-participant training figure, and the November 2025 retrain.
3. The November 2025 retrain may incorporate additional proprietary data, altered biomarker assignments, or revised model architecture relative to the published paper. Without a separate methods paper, the retrained SYMPHONY Age is not independently verifiable.
4. Quantitative specifics in the product report (11 organ systems, 133 biomarkers, ~8,000 participants) should be treated as **commercial claims** pending peer-review, not as validated performance benchmarks.

**Residual verification gap:** the published Sehgal 2025 PDF (doi:10.1038/s43587-025-00958-3) remains closed-access. Full per-system biomarker tables (Supplementary Table 1 of the published paper), exact BLSA/SATSA/ADNI cohort sizes, and any pipeline changes between preprint and published version cannot be confirmed until the full text is accessible. #gap/no-fulltext-access

## Limitations and Gaps

1. **Commercial-academic gap** — the November 2025 retrained SYMPHONY Age is not described in any peer-reviewed publication. Product-report claims cannot be verified by external researchers. #gap/unsourced for the retrain-specific figures.
2. **No intervention-response data** — No published RCT has used any Systems Age sub-clock as a primary endpoint. Responsiveness to known geroprotectors (caloric restriction, rapamycin, metformin, senolytics) is unknown. `intervention-responsive: partial` reflects the theoretical expectation that lifestyle changes moving clinical biomarkers would propagate to DNAm surrogates, not demonstrated trial data. #gap/needs-replication
3. **Blood specificity** — Like all DNAm clocks trained in blood, Systems Age is not validated in other tissues. The organ-system scores are **inferred from blood methylation** — they are surrogate estimates of organ status, not direct tissue measurements.
4. **No Mendelian randomization** — Systems Age is a composite multi-system score; GWAS instruments for the composite index are not available. `mendelian-randomization: not-applicable` reflects this structural feature (not a germline-instrumentable single-locus exposure).
5. **Aging-subtype replication** — The clustering into distinct aging subtypes was performed within the development cohorts; independent prospective replication is needed before subtypes can be used clinically. #gap/needs-replication
6. **November 2025 retrain comparability** — Scores produced by the retrained SYMPHONY commercial version may not be directly comparable to scores published in the Sehgal 2025 paper or to prior SYMPHONY results, which is relevant for longitudinal tracking.
7. **Human-evidence level: limited** — Despite the well-powered validation in the Sehgal 2025 paper, the commercial product has limited independent clinical validation, no RCT endpoints, and no MR evidence. The `limited` grading reflects the gap between academic development and clinical proof of utility.

## Cross-references

- [[biomarkers/omicmage]] — TruDiagnostic's composite DNAm clock (OMICmAge); different architecture (EBPs), global not organ-specific
- [[biomarkers/dunedinpace-2022]] — pace clock; currently the only DNAm clock to show RCT responsiveness to caloric restriction
- [[biomarkers/grimage-2019]] — gold standard for mortality prediction; single composite score
- [[biomarkers/phenoage-2018]] — second-generation mortality-trained clock; partly feeds the biomarker logic underlying organ-clock approaches
- [[biomarkers/telomere-length-leukocyte]] — blood-based aging biomarker; different modality
- [[hallmarks/epigenetic-alterations]] — hallmark context for DNAm clocks
- [[processes/dna-methylation]] — the molecular substrate measured
- [[tissues/liver]], [[tissues/kidney]], [[tissues/heart]], [[tissues/brain]], [[tissues/lung]] — relevant organ-tissue pages
- [[frameworks/biological-age-measurement]] — cross-clock comparison MOC

## Footnotes

[^sehgal2025]: doi:10.1038/s43587-025-00958-3 · Sehgal R, Markov Y, Qin C, Meer M et al. (Morgan Levine corresponding author) · *Nature Aging* 2025 · 5(9):1880–1896 · PMID: 40954326 · PMC: PMC13222069 · n=3,593 primary training (HRS EPIC array; age 51–100) + FHS n=3,935 scaling/scoring (Offspring + Third Generation, 450K array); validation WHI n=5,129 preprint Table 2 (BAA23: 2,107; AS311: 855; EMPC: 2,167) — published paper may report additional validation cohorts (BLSA, SATSA, ADNI) not in the preprint; full-text not available (closed-access) · observational, longitudinal validation · 6-step pipeline: biomarker grouping → PCA within systems → elastic-net DNAm surrogates (125,175 CpGs, α=0.5, λ tenfold CV) → FHS mortality calibration → composite Cox Systems Age → age-range scaling; Heart meta z=8.29 CHD, Musculoskeletal z=8.53 physical function, Brain z=3.51 cognition · model: human adults, whole blood, Illumina EPIC/450K array · competing interests (preprint): Yale invention disclosure + provisional patent (M.E.L., R.S., A.H.C., M.M. as inventors); A.H.C. consulting fees from TruDiagnostic; R.S. consulting fees from LongevyTech.fund and Cambrian BioPharma; M.E.L. employee of Altos Labs · #gap/no-fulltext-access (published version)

[^oh2023]: doi:10.1038/s41586-023-06802-1 · Oh HS et al. (Tony Wyss-Coray corresponding author) · *Nature* 2023 · n>5,600 individuals · observational (SomaScan plasma proteomics) · 11 organ-specific aging signatures from plasma proteins; ~20% show single-organ accelerated aging; plasma organ scores predict organ-specific disease and mortality · model: human adults; plasma proteomics (distinct modality from DNAm) · conceptual background only — not a DNAm clock

[^harvanek2024preprint]: doi:10.1101/2024.10.28.24316295 · Harvanek ZM, Sehgal R, Borrus D, Kasamoto J et al. (Higgins-Chen corresponding author) · medRxiv preprint 2024 · n=1,891 schizophrenia patients + 1,881 controls (7 cross-sectional datasets) · observational meta-analysis (fixed-effect models) · Systems Age sub-clocks in schizophrenia: 10 of 11 system clocks showed accelerated aging; largest effects in **Heart and Lung** (not Metabolic/Musculoskeletal as previously stated), followed by Metabolic and Brain; clozapine associated with Heart and Inflammation aging · model: human adults with schizophrenia-spectrum disorders vs controls, whole blood · preprint — not peer-reviewed as of 2026-06-12 · competing interests: A.H.C. and R. Sehgal listed as scientific advisors to TruDiagnostic Inc. · #gap/needs-replication

[^mavrommatis2025]: doi:10.1038/s41467-025-66106-y · Mavrommatis E, Belsky DW et al. · *Nature Communications* 2025 · n=18,859 (Generation Scotland) · observational, cross-clock comparison · 14 epigenetic clocks (Hannum, Horvath, Lin, Zhang10, PhenoAge, Horvath Skin+Blood, GrimAge v1, DNAmTL, Dunedin PoAm38, Dunedin PACE, GrimAge v2, YingCausAge, YingDamAge, YingAdaptAge) evaluated against 174 incident disease outcomes over 10-year follow-up; second- and third-generation clocks significantly outperform first-generation; strongest performance for respiratory and liver-based conditions; GrimAge v2 had the most Bonferroni-significant associations (37 of 174 diseases) · model: human adults, whole blood (EPIC850K array), Scotland · **Note: Systems Age is NOT one of the 14 clocks in this paper** — it is cited here as contextual evidence that second/third-generation clocks outperform first-generation, which motivates the systems-based approach of Systems Age
