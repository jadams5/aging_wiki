---
type: biomarker
aliases: [Hannum clock, Hannum 2013, blood methylation age, 71-CpG clock]
modality: dna-methylation
unit: years
training-cohort: "Hannum 2013: 656 healthy adult blood samples (San Diego cohort)"
n-cpgs-or-features: 71
training-target: chronological-age
calibration-tissues: ["whole-blood"]
test-retest-icc: null
human-evidence-level: strong
mendelian-randomization: partial
intervention-responsive: partial
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Hannum 2013 primary source PDF verified end-to-end; Waziry 2023 CALERIE-2 claims (^waziry2023 footnote) not re-verified against that PDF in this pass — see biomarkers/dunedinpace-2022 and studies/waziry-2023-calerie-epigenetic-clock for that paper's verification status. R34 recency refresh 2026-05-08: METFORAGING (Marcelo-Calvo 2026), DO-HEALTH cancer follow-up (Rösler 2026), and TCGA-BRCA prognostic (Tan 2026) integrated from abstracts only — full PDFs not re-verified."
literature-checked-through: 2026-05-08
---

# Hannum Clock (2013)

A blood-specific 71-CpG DNA methylation clock, published contemporaneously with the Horvath pan-tissue clock and independently developed from whole-blood samples. The Hannum clock predicts chronological age in blood with high accuracy (training r=0.963, RMSE=3.88 yr) but lacks cross-tissue portability. It identified a subset of aging-associated CpGs enriched in genes involved in aging and cancer pathways, and demonstrated that the clock ticks at systematically different rates in specific subpopulations — approximately 4% faster in males (AMAR ratio; p=6×10⁻⁶) and influenced by heritable genetic variants [^hannum2013].

## Identity and Origin

- **Primary citation:** Hannum G et al. (2013) *Molecular Cell* 49(2):359–367 — doi:10.1016/j.molcel.2012.10.016
- **Archive status:** downloaded (bronze OA via Cell.com; 100th citation percentile; ~4,179 citations as of 2026-05-05)
- **Clock type:** First-generation (chronological-age trained, blood-specific)
- **Input modality:** Illumina HumanMethylation450 array (whole blood)
- **Output:** Predicted chronological age in years

## Training Details

| Parameter | Value |
|---|---|
| Training cohort | n=656 healthy adults, whole blood (Illumina 450K) |
| Validation cohort | n=174 independent samples (separate Hispanic cohort, N2); R=0.905, RMSE=4.89 yr |
| Algorithm | Elastic-net penalized regression (glmnet; 10-fold cross-validation + 500 bootstraps) |
| Final model | 71 CpGs (among 70,387 age-associated CpGs at FDR<0.05 by F test) |
| Age correlation (training) | Pearson r=0.963, RMSE=3.88 yr vs chronological age (N1=482) |
| Tissue specificity | Blood-specific; cross-tissue accuracy substantially reduced |

The Hannum clock was trained exclusively on whole blood from healthy adults. A key finding was that the 71 CpGs were not randomly distributed — they were significantly enriched near genes involved in development, cancer, and aging processes, suggesting the methylation changes are not purely stochastic drift.

## Performance Characteristics

### Accuracy and mortality prediction

Hannum age acceleration (blood methylation age − chronological age) predicts all-cause mortality in epidemiological cohorts; this has been replicated across multiple European and American cohorts in subsequent work. The original Hannum 2013 paper did not report mortality outcomes — it focused on chronological-age prediction, genetic associations with AMAR, and transcriptomic correlates [^hannum2013]. Comparison to GrimAge mortality effect sizes requires citation to post-2019 comparative literature, not this source. #gap/unsourced

### Systematic drift factors documented in the original paper

The Hannum 2013 paper characterized several factors that systematically shift clock estimates [^hannum2013]:

| Factor | Effect on Hannum age |
|---|---|
| Sex | Male methylome ages ~4% faster (AMAR ratio) than female; F test p=6×10⁻⁶; not a raw year difference |
| BMI | Higher BMI → older methylation age (association found; magnitude not specified in text) |
| Genetic variants | 2 meQTLs associated with AMAR (FDR<0.05 in validation); no centenarian-offspring cohort tested in this paper #gap/unsourced |
| Blood cell composition | Confounds estimates; requires correction |

The paper does not report a per-year drift rate for older ages. The "~4%" figure in the literature refers to the sex difference in AMAR (apparent methylomic aging rate = predicted age / chronological age), not an age-dependent acceleration coefficient. A claim of "0.04 yr/yr drift at older ages" does not appear in the source and has been removed. #gap/unsourced — if a drift-rate estimate is needed, it requires citation to a separate longitudinal analysis.

### Comparison to Horvath pan-tissue clock

| Feature | Hannum 2013 | Horvath 2013 |
|---|---|---|
| Training tissues | Blood only | 51 tissue types |
| CpG count | 71 | 353 |
| Blood accuracy | Higher within-blood r | r=0.96 cross-tissue |
| Cross-tissue use | Not validated | Validated |
| Mortality signal | Moderate | Moderate |

For blood-based studies, Hannum often achieves higher within-blood correlation. For multi-tissue studies or non-blood samples, Horvath is preferred. In practice, both clocks are often reported together in epidemiological studies.

## Mendelian Randomization Evidence

A 2021 Mendelian randomization study (Schooling 2025 — see [[biomarkers/horvath-clock-2013]]) included Hannum-based intrinsic epigenetic age acceleration (IEAA) as one of four clocks tested and found **null effects on lifespan** across all four clocks. This finding challenges the interpretation that Hannum EAA is causally on the path from molecular damage to mortality. The IEAA instrument used in that MR is derived from cell-type-corrected Hannum age. #gap/contradictory-evidence

## Intervention-Responsive Evidence

### Null signal: CALERIE-2 caloric restriction

As part of the Waziry 2023 CALERIE-2 analysis [^waziry2023], Hannum age was among the clocks evaluated for CR-responsiveness. Like Horvath 2013 and GrimAge, it did not show a statistically significant slowing in response to 2-year ~12% CR. Only DunedinPACE responded. See [[biomarkers/dunedinpace-2022]] for the positive signal and [[biomarkers/horvath-clock-2013]] for context.

### Null signal: METFORAGING metformin pilot (2026)

In METFORAGING (Marcelo-Calvo 2026; n=40 randomized, n=35 per-protocol; 96-week 850 mg metformin BID vs placebo in non-diabetic older PLWH ≥50 yr), Hannum was among 11 epigenetic clocks tested as secondary outcomes [^metforaging2026]. **Hannum EAA showed no significant between-group difference at 96 weeks**, consistent with all other clocks tested (Horvath, PhenoAge primary, GrimAge V2, four PC variants, DunedinPACE, DNAmTL all NS). Trial was underpowered (closed at 40/60).

### Cancer-association: DO-HEALTH 3-year follow-up (Rösler 2026)

In the DO-HEALTH 3-year follow-up of generally healthy adults ≥70 (n=2,152 / n=777 aging subsample), participants who developed incident invasive cancer showed **3.52–6.77 months greater baseline Hannum EAA** at trial start [^rosler2026], alongside Horvath and PhenoAge. This places Hannum among the EAA measures that prospectively associate with cancer incidence in nominally healthy older adults.

### Prognostic non-utility in TCGA breast cancer (Tan 2026)

In TCGA-BRCA tumor methylomes (n=781), **first-generation Hannum did not separate survival outcomes**, while later-generation PhenoAge and GrimAge2 did [^tan2026]. Same pattern as Horvath 2013.

### Partial positive signal: genetic variants associated with slower methylomic aging

Hannum 2013 identified 2 genetic variants (meQTLs) that were significantly associated with AMAR (FDR<0.05 in a 322-sample validation cohort), suggesting heritable components to methylomic aging rate [^hannum2013]. The paper does NOT report a centenarian-offspring cohort comparison or quantify a "~2–3 yr younger methylation age" in longevity-associated genotypes — that claim has been removed as unsourced from this paper. The genetic-AMAR association provides mechanistic plausibility that methylomic aging rate is partially heritable, but magnitude estimates for longevity-associated haplotypes require citation to separate studies. #gap/unsourced

## Cross-Tissue Calibration Limitations

The Hannum clock was trained on whole blood and was not validated for cross-tissue use. Application to non-blood tissues requires caution:

- The 71 CpG sites include many that are cell-type-specific to blood immune populations
- Blood cell composition shifts with age (myeloid skewing, clonal hematopoiesis) confound estimates even within blood
- A cell-type-corrected version ("IEAA" — intrinsic EAA) has been widely used in epidemiological studies to remove the composition signal

## Limitations and Open Critiques

1. **Blood specificity** — Not applicable to non-blood tissues without re-validation. Many aging biomarker studies use saliva or buccal cells as a convenient surrogate for blood-derived clocks — the Hannum clock is particularly unreliable in these contexts.

2. **Training cohort size** — n=656 is small by modern standards. The elastic-net feature selection may have over-fit to population-specific patterns in the San Diego cohort. Subsequent replication in European and East Asian cohorts has generally been supportive but with lower effect sizes than training-set estimates.

3. **Technical noise** — Like all first-generation DNAm clocks, Hannum age has substantial technical noise from batch effects and array normalization. Higgins-Chen 2022 (doi:10.1038/s43587-022-00248-2) showed that PC-based clock versions substantially improve test-retest reliability. See [[frameworks/biological-age-measurement]] for the broader reliability critique.

4. **Chronological-age training** — Trained to predict calendar age, not biological function or mortality. The mortality signal from EAA is an emergent property, not a primary design objective. This limits its utility as an intervention endpoint compared to mortality-trained clocks.

5. **Clonal hematopoiesis confound** — Clonal hematopoiesis of indeterminate potential (CHIP) — age-associated expansion of hematopoietic stem cell clones with somatic mutations — alters blood methylation patterns in ways that can artifactually shift clock estimates. This has not been systematically characterized for the Hannum 71-CpG set. #gap/no-mechanism

## Cross-references

- [[biomarkers/horvath-clock-2013]] — companion first-generation clock; pan-tissue; 353 CpGs
- [[biomarkers/phenoage-2018]] — second-generation mortality-trained clock
- [[biomarkers/grimage-2019]] — second-generation mortality-trained clock
- [[biomarkers/dunedinpace-2022]] — third-generation pace clock; responded to CR in CALERIE-2
- [[hallmarks/epigenetic-alterations]] (verified) — hallmark cross-link
- [[hallmarks/genomic-instability]] — clonal hematopoiesis confound relevant here
- [[frameworks/biological-age-measurement]] — comparison MOC

## Footnotes

[^hannum2013]: doi:10.1016/j.molcel.2012.10.016 · n=656 (N1=482 Caucasian + N2=174 Hispanic; whole blood, Illumina 450K; aged 19–101) · observational · training r=0.963 RMSE=3.88 yr; validation r=0.905 RMSE=4.89 yr · sex effect: males ~4% faster AMAR (F test p=6×10⁻⁶) · model: human whole blood · Mol Cell 49(2):359–367, 2013 · 71-CpG elastic-net model · local PDF: a local paper archive (bronze OA; downloaded 2026-05-05)

[^waziry2023]: [[studies/waziry-2023-calerie-epigenetic-clock]] · n=197 (128 CR, 69 AL) · rct · model: healthy non-obese human adults (CALERIE Phase 2, 2-year ~12% achieved CR) · doi:10.1038/s43587-022-00357-y · local PDF available · Hannum/IEAA: NS; DunedinPACE: d=−0.25 p<0.003

[^metforaging2026]: doi:10.1016/j.eclinm.2026.103874 · METFORAGING · Marcelo-Calvo C et al. · EClinicalMedicine 2026 (May) · n=40 randomized (n=35 per-protocol); rct, 96-week 850 mg metformin BID vs placebo · model: non-diabetic PLWH ≥50 yr · Hannum EAA: NS between-group; PhenoAge primary: −1.02 yr (95% CI −5.30, 3.26; P=0.627); all 11 clocks NS · trial closed at 40/60

[^rosler2026]: doi:10.1038/s41514-026-00360-2 · Rösler W et al. · NPJ Aging 2026 · DO-HEALTH 3-year follow-up; n=2,152 trial / n=777 aging subsample · participants with incident invasive cancer showed 3.52–6.77 months greater baseline Horvath/Hannum/PhenoAge EAA · model: generally healthy adults ≥70 yr · NCT01745263

[^tan2026]: doi:10.1186/s13148-026-02102-3 · Tan X et al. · Clin Epigenetics 2026 · TCGA-BRCA n=781 tumor methylomes · Hannum did not separate survival; PhenoAge and GrimAge2 stratified outcomes · model: human breast tumor tissue
