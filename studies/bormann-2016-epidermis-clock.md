---
type: study
doi: 10.1111/acel.12470
pmid: 27004597
pmc: PMC4854925
title: "Reduced DNA methylation patterning and transcriptional connectivity define human skin aging"
authors: [Bormann F, Rodríguez-Paredes M, Hagemann S, Manchanda H, Kristof B, Gutekunst J, Raddatz G, Haas R, Terstegen L, Wenck H, Kaderali L, Winnefeld M, Lyko F]
year: 2016
journal: Aging Cell
volume: 15
issue: 3
pages: 563-571
study-design: observational
organism: homo-sapiens
n-subjects: 108
intervention: []
hallmarks-tested: ["[[epigenetic-alterations]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [tissue-specific-epidermis-methylation-clock, SVM-MAE-under-5.25yr, horvath-clock-MAE-12.1yr-on-epidermis, methylation-pattern-erosion-reduced-dynamic-range, increased-intermethylome-heterogeneity-with-age, reduced-transcriptional-network-connectivity-in-aged-epidermis, two-cohort-design-punch-biopsy-plus-suction-blister, validation-rho-0.96-vandiver-independent-cohort]
local-pdf: null
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "All quantitative claims verified against primary PDF (pp. 563–571). SVM probe-set hedge corrected; all n, ρ, R², MAE, and p-values confirmed exact. Crossref + PubMed efetch confirm 13 authors and page range 563–571. Vandiver validation metrics confirmed. literature-checked-through set 2026-05-19."
literature-checked-through: 2026-05-19
---

# Reduced DNA methylation patterning and transcriptional connectivity define human skin aging (Bormann et al. 2016)

**Bormann F, Rodríguez-Paredes M, Hagemann S, et al. · *Aging Cell* 15(3):563–571 · 2016 · DOI: 10.1111/acel.12470**

13 authors. PMID: 27004597. PMC: PMC4854925. Gold open access. Citation count: ~94 (OpenAlex, 2026-05-19; 100th percentile FWCI 4.85). Affiliated institutions include German Cancer Research Center (DKFZ), Beiersdorf AG, and University of Greifswald.

## TL;DR

Bormann et al. 2016 is the **founding study of epidermis-specific DNA methylation clocks**. Using 108 female Caucasian epidermis samples (combined punch-biopsy and suction-blister cohorts), the authors trained a **support vector machine (SVM) predictor on the Illumina 450k array** that estimates chronological age with MAE <5.25 yr — outperforming the pan-tissue Horvath 2013 clock (MAE 12.1 yr on the same independent test set, a 2.3-fold improvement). Beyond clock construction, the paper characterizes a mechanistic epigenetic-aging signature in the epidermis: age reduces the **dynamic range of methylation** (CpGs lose sharp fully-methylated vs. fully-unmethylated boundaries), increases **inter-individual methylation heterogeneity**, and reduces **transcriptional network connectivity** in old versus young epidermis. These three features together are interpreted as evidence for **loss of epigenetic regulatory fidelity** as a defining feature of aging skin. The training cohort of 108 white females and the 450k probe set were later re-used by Qi 2026 to build the 23k/173-CpG tissue-specific clock validated cross-ethnically.

## Background

### Why tissue-specific clocks matter

The Horvath 2013 pan-tissue clock (353 CpGs; MAE 3.6 yr held-out across 51 tissues) [^horvath2013] was a major advance, but its cross-tissue portability came at the cost of within-tissue accuracy. When applied to tissue-specific samples that were not well-represented in its training data, or to non-blood tissues with distinct cell-type compositions, the pan-tissue clock underperforms. Epidermis presents a particularly sharp case: it is a stratified squamous epithelium (predominantly keratinocytes) with a completely different epigenetic landscape from the hematopoietic and stromal cells that dominate Horvath's training set. Bormann et al. asked whether an epidermis-dedicated model could substantially outperform the pan-tissue predictor.

Epidermis also presents practical advantages for biological-age measurement: it is **non-invasively accessible** (tape-stripping, suction blister) and undergoes continuous self-renewal from epidermal stem cells — meaning its methylation state reflects ongoing epigenetic drift rather than accumulated post-mitotic damage. Any tissue-specific clock trained here is simultaneously a tool for measuring skin-specific aging and a potential readout for interventions targeting epidermal biology.

## Methods

### Cohort design (two independent datasets, combined n=108)

| Dataset | n | Age range | Sex | Ethnicity | Sampling method | Anatomical site |
|---|---|---|---|---|---|---|
| **Dataset 1 (discovery)** | 48 | 18–27 yr (young, n=24); 61–78 yr (old, n=24) | Female | Caucasian | Punch biopsy | Outer forearm |
| **Dataset 2 (extended)** | 60 | 20–79 yr (continuous) | Female | Caucasian | Suction blister roof | Outer forearm |
| **Combined training** | 108 | 18–78 yr | Female | Caucasian | Both | Outer forearm |

Note: both datasets are sex- and ethnicity-restricted to female Caucasian donors. This is a key generalizability limitation (see § Limitations).

For clock training, the young/old dichotomy in Dataset 1 was used for differential methylation analysis; the continuous age range in Dataset 2 and combined n=108 were used for regression modeling and leave-one-out / 10-fold cross-validation.

### Array platform and preprocessing

Illumina HumanMethylation450 BeadChip (450k array; >450,000 CpG sites measured). Epidermis DNA was extracted from the biopsy or blister specimens; standard Illumina preprocessing and quality filtering applied (minfi package; sex-chromosome probes removed; cross-reactive probes and those with allele frequency ≥0.01 within 5 bp of the SBE site removed). The final SVM was trained using the **complete set of 450k probes** as independent variables — the paper explicitly states this (Methods, p.565); no post-filter probe-count ambiguity applies.

### Prediction model

**Support vector machine (SVM) regression** trained against chronological age on the combined n=108 dataset. Model selection: leave-one-out cross-validation (LOOCV) and 10-fold cross-validation. The authors do not describe a final held-out test set for the SVM training cohort itself — the primary performance metrics come from applying the trained model to the **independent Vandiver et al. 2015 dataset** (n=18 sun-exposed forearm epidermis samples), which was completely separate from training.

This is an important distinction: the MAE <5.25 yr figure is from the leave-one-out cross-validation within the training set; the Vandiver validation (MAE 6.72 yr) is the true out-of-sample performance.

### Transcriptome and methylation-pattern analyses

In addition to clock modeling, the paper performed:
- **Intramethylome variance analysis**: compared the within-sample variance of methylation beta values between young and old groups (P = 0.0016 for reduced variance in old samples).
- **Spatial CpG correlation**: measured the spatial autocorrelation of methylation among neighboring CpG sites (P = 5.4×10⁻⁷ for reduced spatial correlation with age).
- **Intermethylome heterogeneity**: compared the pairwise similarity of methylomes between young individuals versus between old individuals.
- **Transcriptional network connectivity**: RNA-seq of paired epidermis samples; built co-expression networks; quantified the fraction of gene pairs with significant expression correlation in young versus old.

## Results

### 1. Clock performance — training and cross-validation

| Metric | Value | Method |
|---|---|---|
| Pearson ρ (training, LOOCV) | **0.92** (p < 2.2×10⁻¹⁶) | Leave-one-out cross-validation, n=108 |
| MAE (training, LOOCV) | **<5.25 yr** | Leave-one-out cross-validation |
| 10-fold cross-validation | Concordant with LOOCV | See paper supplementary |

### 2. Independent validation (Vandiver 2015 cohort, n=18 sun-exposed)

| Metric | Bormann SVM | Horvath pan-tissue clock |
|---|---|---|
| Pearson ρ | **0.96** (p = 1.66×10⁻¹⁰) | 0.89 |
| R² | **0.93** | 0.794 |
| MAE | **6.72 yr** | **12.1 yr** |

The Bormann epidermis clock reduces MAE from 12.1 yr to 6.72 yr on independent sun-exposed epidermis — a **1.8-fold improvement** over Horvath in this tissue. The Vandiver cohort (Vandiver et al. 2015, PMC4506614) consisted of 18 sun-exposed forearm epidermis samples with known donor ages; it was not used in training.

### 3. Methylation pattern erosion with age

Aging epidermis shows a consistent shift in the **architecture** of DNA methylation, beyond simple gain or loss at individual CpGs:

- **Reduced dynamic range**: young methylomes show sharply demarcated regions of near-complete methylation (β ≈ 1) versus near-zero methylation (β ≈ 0). Aged methylomes show intermediate β values more frequently — the bimodal distribution characteristic of young methylomes flattens toward a unimodal intermediate distribution. This erosion of binary methylation states is quantified as **reduced intramethylome variance** (P = 0.0016).
- **Reduced spatial autocorrelation**: neighboring CpGs in young methylomes are strongly correlated (either both high or both low β). In aged methylomes, this spatial correlation decays — neighboring CpGs become more independent in their methylation state (P = 5.4×10⁻⁷ for reduced spatial correlation with age). This reflects physical disruption of coordinated methylation domains rather than random stochastic drift, because the decay is spatially structured.
- **Increased intermethylome heterogeneity**: young individuals have highly similar methylomes to each other (tight clustering); old individuals show substantially more pairwise divergence. This increased heterogeneity is the epigenomic correlate of increased phenotypic variability in aged tissues.

These three features together define what the authors term **loss of epigenetic regulatory fidelity** — a qualitative change in how methylation is organized and maintained, not merely a sum of site-specific gains and losses. This concept predates but is consistent with the Shangtong 2015 / Hannum/Esteller conceptual framework of **epigenetic entropy** increase with age. #gap/needs-replication — the specific spatial-autocorrelation metric has not been widely replicated in other tissues.

### 4. Age-related methylation differences — quantitative characteristics

The age-associated differentially methylated positions (DMPs) show:
- Predominantly **small effect sizes** (localized, modest β changes) rather than large global shifts.
- Both hyper- and hypomethylation, with **discontinuous** distribution — changes are not evenly spread across the genome but occur at specific regulatory elements.
- The set of age-correlated CpGs partially overlaps with known polycomb-target regions and bivalent chromatin domains (consistent with later findings in Qi 2026 [^qi2026] confirming bivalent-region enrichment of age-correlated hypermethylation in epidermis across ethnicities).

### 5. Transcriptional connectivity

Gene expression analysis of paired epidermis samples (RNA-seq) shows:
- Young methylomes correspond to **tightly interconnected transcriptional networks**: a high fraction of gene pairs show statistically significant co-expression.
- Old methylomes show an **increased number of gene pairs with no expression correlation** — i.e., the transcriptional network becomes sparser and less coordinated.
- The erosion of methylation patterning and the reduction in transcriptional connectivity are correlated, supporting the interpretation that epigenetic disorganization drives transcriptional dysregulation rather than merely co-occurring with it. The causal direction (methylation → transcription vs. transcription → methylation) is not established in this paper. #gap/no-mechanism

## Why this paper matters

### 1. Foundational tissue-specific clock

Bormann 2016 established that epidermis has an epigenetic aging signature measurable with substantially better precision than pan-tissue clocks. It created the methodological template for tissue-specific methylation clocks: collect homogeneous tissue, assay with 450k or equivalent, train SVM/elastic-net on age, validate in independent cohort. This template was followed by subsequent skin clocks including the Qi 2026 23k/173-CpG clock [^qi2026] and the Rodríguez-Paredes 2026 TapeLift clock.

The Bormann 2016 training cohort (n=108, 18–78 yr) was reused by Qi 2026 as the **foundational training set for the 23k clock**, which used the intersection of the Bormann 27k/450k-shared 23,845 probes and selected 173 CpGs by penalised regression. The Bormann cohort thus anchors the entire skin epigenetic-clock literature.

### 2. Mechanistic insight — epigenetic entropy in epidermis

The spatial-autocorrelation and dynamic-range-erosion findings go beyond clock accuracy to characterize **how** the methylation landscape changes with age. This is the paper's primary conceptual contribution: aging is not just the sum of site-specific gains and losses, but involves a structural reorganization of the methylation architecture (loss of domain boundaries, increased cell-to-cell heterogeneity). This is mechanistically distinct from the Horvath 2013 clock's 353-CpG predictor, which is agnostic to the structural context of the CpGs selected.

The transcriptional-connectivity collapse finding links the methylation architecture change to functional consequences in gene regulation — providing a bridge between the epigenetic hallmark and the phenotypic outcomes of impaired tissue function in aged skin.

### 3. Benchmark for skin-intervention studies

The Vandiver comparison (Bormann MAE 6.72 yr vs Horvath MAE 12.1 yr) established that **pan-tissue clocks systematically underperform in epidermal samples**. This benchmark justified the development of the subsequent generation of skin-specific clocks and is the implicit reason Qi 2026 built a new clock rather than using Horvath.

Any intervention trial using epigenetic-age as a skin endpoint should use the Bormann 2016 / Qi 2026 / TapeLift generation of tissue-specific clocks rather than Horvath — the 12.1-yr MAE of Horvath in this tissue would swamp small intervention effects.

## Strengths

- **n=108** is the largest epidermis methylome dataset at time of publication (paper explicitly states this).
- **Two-cohort design** (punch biopsy + suction blister) provides sampling-method diversity; both biopsies and blister roofs yield viable epidermis.
- **Independent validation** in the Vandiver 2015 dataset (external, non-authors' cohort) is methodologically appropriate.
- **Multi-modal analysis** (methylation clock + pattern analysis + transcriptomics) in the same cohort strengthens the convergent interpretation.
- **Gold open access** with PMC availability.
- **Clock model reusability**: the training cohort and probe set have been reused and extended by Qi 2026, creating a direct lineage.

## Limitations

1. **Female-only Caucasian cohort.** All 108 donors are white females. The clock's performance on males, non-Caucasian donors, or diverse phototypes is unknown from this paper. Qi 2026 subsequently showed that a new clock trained on the same Bormann 2016 cohort and validated in 17 multi-ethnic donors achieves similar MAE (4.88 yr) without ethnic bias — suggesting the underlying biology is ethnicity-conserved — but this was not tested in Bormann 2016 itself. #gap/needs-replication
2. **Cross-sectional design.** Like all cross-sectional methylation clocks, the predictor captures population-level age trends, not individual longitudinal trajectories. Whether the clock tracks within-person aging rate is not established.
3. **Sun exposure not fully characterized.** The validation cohort (Vandiver 2015) specifically labeled samples as "sun-exposed"; the training cohort used outer forearm samples, which receive moderate but variable UV exposure depending on individual behaviour. UV-exposed vs photoprotected skin comparisons are not performed within this paper. #gap/needs-replication
4. **Model architecture limitations.** SVM regression (as opposed to elastic-net / penalized regression) was state-of-the-art in 2016 but is less interpretable than the CpG-coefficient model of Horvath 2013. The SVM model is not easily transferred as a simple linear formula; practical deployment requires the full SVM parameters. Later tissue-specific clocks (Qi 2026 173-CpG elastic-net) addressed this portability limitation.
5. **Causal direction of methylation ↔ transcription relationship.** The co-occurrence of methylation-pattern erosion and transcriptional-connectivity loss is documented, but the causal direction is not established. Intervention or perturbation studies (e.g., DNMT depletion in keratinocytes + transcriptome readout) would be needed to establish directionality. #gap/no-mechanism
6. **No mortality or morbidity outcomes.** Like Horvath 2013, this is a chronological-age predictor only. Whether epidermal DNAm age acceleration (EAA) predicts wound-healing impairment, keratinocyte malignancy risk, or other clinically relevant skin outcomes is untested in this paper. #gap/needs-replication

## Extrapolation Assessment

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | This is a human study throughout; epidermis methylomes are human tissue |
| Findings replicated by independent groups? | partial | Clock concept extended by Qi 2026 + TapeLift clock; spatial-autocorrelation metric not widely replicated |
| Findings generalized beyond white females? | partial | Qi 2026 cross-ethnic validation of 23k clock derived from Bormann cohort; Bormann model itself not cross-validated in males or non-Caucasian samples |

## Cross-References

- [[skin-aging]] — phenotype page; Bormann 2016 is foundational for the § Epigenetic alterations — skin-specific epigenetic clocks section
- [[tissues/epidermis]] — tissue page; this study is the anchor citation for the epigenetic aging signature of the epidermis
- [[tissues/skin]] — skin tissue hub; links to Bormann 2016 for the skin-as-epigenetic-readout section
- [[hallmarks/epigenetic-alterations]] — Bormann's methylation-pattern-erosion and transcriptional-connectivity findings are direct evidence for this hallmark
- [[biomarkers/horvath-clock-2013]] — the pan-tissue clock that Bormann improves upon in epidermis-specific performance
- [[studies/qi-2026-dhm-epigenetic-skin-aging]] — directly builds on Bormann 2016 training cohort; 23k clock is a redesigned version of the Bormann probe set
- [[bormann-epidermis-clock-2016]] — R43 forward-ref for the planned biomarker page; this study page is the primary-source anchor for that page when it is seeded

## Footnotes

[^horvath2013]: [[studies/horvath-2013-epigenetic-clock]] · n=7,844 samples / 51 tissues / 82 datasets · meta-analysis (cross-sectional) · Pearson r=0.96; MAE=3.6 yr held-out · model: multi-tissue pan-tissue 353-CpG clock · doi:10.1186/gb-2013-14-10-r115 · local PDF available; verified 2026-05-07

[^qi2026]: [[studies/qi-2026-dhm-epigenetic-skin-aging]] · n=77 (17 pilot cross-ethnic + 60 product-use) · in-vivo observational (Part 1) + uncontrolled open-label (Part 2) · 23k clock CV MAE 5.66 yr; multi-ethnic validation MAE 4.88 yr; DHM-serum −2.1 yr DNAm age shift (paired Wilcoxon p=0.029) · model: human epidermis tape-strip (multi-ethnic) · doi:10.1007/s13555-026-01764-4 · verified: false (auto-extracted from open-access HTML; full PDF pending)
