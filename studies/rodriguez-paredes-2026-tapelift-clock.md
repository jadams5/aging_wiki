---
type: study
doi: 10.1038/s41698-026-01302-7
pmid: 41593290
pmc: PMC12948955
title: "Non-invasive epidermis sampling for DNA methylation-based prediction of skin cancer phenotypes"
authors: [Rodríguez-Paredes M, Feng Y, Gilliam O, Wegner K, Raddatz G, Grönniger E, Lyko F]
year: 2026
journal: npj Precision Oncology
study-design: observational
organism: homo-sapiens
n-subjects: 124   # 105 initial Caucasian donors (95 passed ΔCt <3 qPCR QC; 89 of those passed post-array p-value QC and were used for clock development); plus 19 independent validation donors
intervention: []
hallmarks-tested: ["[[epigenetic-alterations]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [tapelift-non-invasive-gel-tape-sampling, pc-clock-rmse-4.3yr-validation, elastic-net-clock-rmse-5.8yr-validation, 50-tumor-suppressor-genes-age-hypermethylated, mitotic-age-elevated-actinic-keratosis-scc, caucasian-training-cohort-only]
local-pdf: null
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "All quantitative claims (n, QC splits, clock CpG counts, RMSE values, cohort characteristics, sampling protocol, TSG count) verified against full PDF end-to-end. Full 50-gene TSG list is in Table S7 (supplementary); only the 5 named in main text extracted here. CC-BY license corrected. Competing interests/funding statement verified. Cross-ethnic framing confirmed: Caucasian-only training, no cross-ethnic test in this paper."
literature-checked-through: 2026-05-19
---

# Non-invasive epidermis sampling for DNA methylation-based prediction of skin cancer phenotypes (Rodríguez-Paredes et al. 2026)

**Rodríguez-Paredes M et al. · npj Precision Oncology · 2026 · DOI: 10.1038/s41698-026-01302-7**

Beiersdorf AG / DKFZ collaboration (same group as Qi 2026 et al.). Gold open-access (CC BY 4.0). PMC12948955. PDF downloaded to a local paper archive.

## TL;DR

This paper introduces **TapeLift**, a non-invasive epidermis-sampling protocol combining gel-based adhesive tape keratinocyte collection with Illumina methylation microarray and a curated low-input-DNA probe selection. From 105 Caucasian donors (ages 18–85, Fitzpatrick I–IV; 89 passed two-stage QC and contributed to clock development), the authors train two epigenetic aging clocks: a standard elastic-net model (157 CpGs; RMSE 5.8 yr in internal validation) and a principal-component (PC) version (5,021 CpGs; RMSE 4.3 yr in internal validation). Independently, the method is applied to investigate **skin cancer DNA methylation biomarkers**: mitotic age tracks with cancer progression, and 50 tumor-suppressor genes show age-associated hypermethylation patterns relevant to actinic keratosis and cutaneous squamous cell carcinoma (KC). The paper is primarily framed as an oncology tool but its aging-clock component is the context in which it is cited by [[studies/qi-2026-dhm-epigenetic-skin-aging]] as a comparator. **Training cohort is Caucasian-only (Fitzpatrick I–IV)** — cross-ethnic performance was not tested here; independent cross-Fitzpatrick validation was provided by Qi 2026.

## Provenance and verification status

- **Source for this page:** Full PDF read end-to-end (2026-05-19). Path: 
- **Confirmed from PDF:** title, journal, DOI, year, PMID, PMC ID, OA status (CC BY 4.0), full author list, Beiersdorf/DKFZ affiliation, TapeLift tape-strip methodology (4 strips, polyacrylate/polyurethane, forehead), ~49 ng DNA yield, two-stage QC (95/105 passed ΔCt <3; 89/95 passed post-array p-value QC), elastic-net clock (157 CpGs, RMSE 6.0y training / 5.8y internal validation / 6.2y independent validation), PC clock (5,021 CpGs, RMSE 4.7y training / 4.3y internal validation / 5.1y independent validation), 80/20 training/validation split (N=71 training, N=18 internal validation), 19-donor independent validation cohort, Caucasian-only training scope, 50 age-hypermethylated TSGs (full list in Table S7; 5 named in main text), mitotic-age cancer signal, funding (Projekt Deal OA funding), competing interests (K.W. and E.G. Beiersdorf employees; F.L. Beiersdorf consultation fees; M.R.-P. Beiersdorf SA speaker fees).
- **Not verified (supplementary only):** Full 50-gene TSG list (Table S7); complete per-sample metadata (Tables S1, S2, S6, S8); full CpG probe list for each clock (Tables S4, S5).

## Study design

### Sampling protocol — TapeLift

The TapeLift protocol uses **four adhesive strips** of polyacrylate-coated polyurethane film applied sequentially to the forehead (a 2.0 × 2.5 cm² delineated area), capturing upper stratum corneum and outer viable epidermis (keratinocytes) non-invasively. Each strip yields approximately **49 ng genomic DNA** on average. A two-stage QC pipeline is applied:

1. **Pre-array qPCR DNA integrity assay** (ΔCt <3 cutoff): of 105 initial donors, **95 passed** (90.5%) and proceeded to EPIC v2 array.
2. **Post-array p-value QC** (>75% of probes with detection p<0.05): of the 95 arrayed samples, **89 passed** (93.7%) and were retained for downstream analysis.

Only 20% of the extracted gDNA is used for the qPCR QC step; the remaining 80% is reserved for microarray analysis.

This contrasts with the earlier Bormann 2016 approach [^bormann2016] which used punch biopsy (3 mm) of the epidermis — an invasive approach requiring local anaesthesia. TapeLift achieves comparable DNA quantity and quality for array-based methylation profiling at much lower procedural burden.

### Cohort

- **n = 105 donors** initially enrolled (Caucasian, both genders, ages 18–85, Fitzpatrick I–IV); 95 passed pre-array qPCR QC; **89 passed post-array p-value QC** and were used for clock development. Of these 89: **71 (80%) assigned to training**, **18 (20%) assigned to internal validation** (random partition). Plus **19 additional donors** in a separate independent validation cohort (ten female, nine male, spanning diverse ages; Table S6).
- **Ethnicity:** Caucasian only; Fitzpatrick skin types I–IV. No Asian, African-ancestry, or Fitzpatrick V–VI donors in the training cohort. #gap/needs-human-replication — cross-ethnic clock performance in the original training cohort is unaddressed; external validation by Qi 2026 partially fills this gap (see below).
- **Age range:** 18–85 years; both sexes included (53 female, 36 male donors in the primary 89-sample dataset per Fig. 3A age-sex distribution).
- **Tissue:** epidermis from forehead; a 2.0 × 2.5 cm² square area was delineated and cleaned with 70% ethanol before tape application.

### Study type

Cross-sectional observational. No intervention. Two analytic arms: (1) aging-clock development and validation; (2) skin cancer DNA methylation biomarker discovery (actinic keratosis + cutaneous squamous cell carcinoma samples compared to age-matched normal epidermis).

## Key findings

### 1. TapeLift protocol enables reliable low-input methylation profiling

The TapeLift methodology achieves sufficient DNA yield and quality for Illumina MethylationEPIC v2 microarray from non-invasive epidermal strips. A systematic probe subsetting pipeline was applied to identify a **high-confidence TapeLift CpG probe set**: after excluding polymorphic probes (reduced from 833,305), non-autosomal and cross-reactive probes (to 809,355), probes with high intra-individual variability (β-variance >0.1 in ≥2 of 4 technical-replicate datasets; to 647,263), and retaining only probes with detection p<0.05 across all samples, the final set comprised **N=535,384 high-confidence CpG probes** (Fig. 1B). This curated probe set was used for all downstream clock training and cancer biomarker analyses. PCA confirmed that TapeLift methylomes cluster tightly with reference suction-blister epidermis datasets and are clearly separated from non-skin tissues (muscle, pancreas, colon, liver, blood), validating the tissue identity of the samples.

### 2. Two aging clocks: elastic net and PC-based

| Clock type | CpGs | Training RMSE | Internal validation RMSE (N=18) | Independent validation RMSE (N=19) |
|---|---|---|---|---|
| Elastic net (standard) | 157 | 6.0 yr | 5.8 yr | 6.2 yr |
| PC-based clock | 5,021 | 4.7 yr | 4.3 yr | 5.1 yr |

The **elastic-net clock** was trained using glmnet (R, α=0.1) with ten-fold cross-validation on 80% of samples (N=71). The **PC-based clock** used principal-component loadings to replace individual CpG β-values before elastic-net model fitting (α=0.5), following the Higgins-Chen 2022 protocol [^higginschen2022]. The PC approach identified 5,021 CpGs and reduced internal validation RMSE from 5.8y to 4.3y, consistent with the PC transformation reducing technical batch-effect noise. In the independent 19-donor cohort, both clocks showed comparable performance (elastic net RMSE 6.2y; PC clock RMSE 5.1y; Fig. S4). These RMSE values are broadly comparable to the Bormann 2016 epidermis clock (MAE ~4–5 yr for cross-validation) and to the new Qi 2026 23k clock (cross-validation MAE 5.66 yr, multi-ethnic MAE 4.88 yr).

### 3. Cross-ethnic scope: Caucasian-only training; Qi 2026 external validation

The TapeLift clock training cohort is entirely **Caucasian (Fitzpatrick I–IV)**. The original paper does not test clock performance in non-white donors. However, Qi 2026 [^qi2026] applied both the 23k skin clock and the TapeLift clock comparator to a Brazilian multi-ethnic cohort (n=17 pilot, Fitzpatrick I–VI) and reported no detectable ethnic bias for either clock on their cohort. This is the only available cross-ethnic performance data for TapeLift and comes from an external evaluation, not the original paper. The claim in Qi 2026 that TapeLift is "cross-ethnicity validated" should be read with this external-validation provenance in mind. #gap/needs-replication — a single external validation cohort of n=17 is insufficient to definitively establish absence of ethnic bias.

### 4. Age-associated hypermethylation in 50 tumor-suppressor genes

Starting from the TSGene 2.0 database (N=1,217 TSGs total), **859 TSGs** had their promoter regions (TSS1500 and TSS200) represented by ≥2 CpG sites within the high-confidence TapeLift probe set. Pearson correlation coefficients were computed across all samples to assess age-related promoter methylation gain. The **50 TSGs** with the most pronounced promoter hypermethylation between young (18–29 yr) and old (≥60 yr) donors (p<0.05) were identified and selected for further analysis (Table S7). Genes named explicitly in the main text include **ZIC1** (r=0.6, p=2.7e-14), **RBM38** (r=0.5, p=1.3e-4), **FOXA2** (r=0.5, p=5.9e-7), **UCHL1** (r=0.4, p=6.7e-4), and **ID4** — all documented in epithelial tumorigenesis contexts. In AK and cSCC samples, mean promoter methylation at these 50 TSGs was further elevated compared to normal aged epidermis (Fig. 4B, C), linking epidermal epigenetic aging to field cancerization and KC risk. Full 50-gene list is in **Table S7** (supplementary; not reproduced here).

This finding connects to the broader [[epigenetic-alterations]] hallmark: age-associated promoter hypermethylation silencing tumor suppressor and developmental regulator genes is a conserved mechanism documented in multiple tissues.

### 5. Mitotic age as a skin cancer progression marker

**Mitotic age** (an epigenetic measure of cumulative cell divisions, derived from the methylation array) shows progressive elevation from normal epidermis → actinic keratosis (premalignant) → cutaneous squamous cell carcinoma. This positions mitotic age as a potential field-cancerization biomarker for KC risk stratification. Whether mitotic age is causally upstream of cancer initiation or merely correlates with cancer-prone tissue biology is unresolved. #gap/no-mechanism

## Relationship to Bormann 2016

Bormann 2016 [^bormann2016] was the first DNA methylation clock trained on human epidermis, using punch biopsy of 108 white females (ages 18–78, 450k array). The Qi 2026 23k clock is built on the Bormann 2016 training dataset (using CpGs at the intersection of the Bormann 27k-equivalent array and modern 450k arrays). Rodríguez-Paredes 2026 is a distinct clock development effort using non-invasive tape-strip sampling as a methodological advance. Key differences:

| Feature | Bormann 2016 | Rodríguez-Paredes 2026 (TapeLift) |
|---|---|---|
| Sampling | Punch biopsy (invasive) | Adhesive tape strip (non-invasive) |
| Cohort | 108 white females | 105 enrolled → 89 passed QC; Caucasian (both sexes) |
| Age range | 18–78 yr | 18–85 yr |
| Clock MAE/RMSE | MAE ~4–5 yr (cross-val) | RMSE 4.3–5.8 yr (PC/EN) |
| Cancer analysis | No | Yes (AK + cSCC) |
| Cross-ethnic validation | No | No (but external Qi 2026 validation exists) |

## Extrapolation assessment

This is a human study; standard model-organism extrapolation is not applicable. Cross-population and cross-tissue applicability:

| Dimension | Status | Notes |
|---|---|---|
| Ethnic generalizability | Partial | Caucasian-only training; external cross-ethnic validation by Qi 2026 in n=17 |
| Sex representation | Partial | Both sexes included (53F/36M in 89-sample QC-passing set, Fig. 3A); per-sex clock accuracy not reported in main text — #gap/not-reported |
| Independent replication of clock | Partial | Qi 2026 applies TapeLift as comparator; independent clock validation confirmed by Qi group |
| Cancer biomarker independent replication | No | Single-group study; #gap/needs-replication |

## Significance in the wiki

1. **Establishes TapeLift as the canonical non-invasive epidermal methylation sampling standard** for future skin aging and skin cancer studies. The combination of adhesive tape + low-input array protocol removes the biopsy barrier from skin epigenomics research.

2. **Provides the comparator clock** cited by Qi 2026 [^qi2026] for benchmarking their new 23k clock. Both are tape-strip-based and both showed comparable accuracy with no detectable cross-ethnic bias in the Qi 2026 cohort.

3. **Links epidermal aging epigenetics to field cancerization** — the 50 tumor-suppressor hypermethylation finding and mitotic-age progression pattern connect [[epigenetic-alterations]] to KC oncogenesis, a pathway not well-covered by prior skin-aging pages in this wiki.

4. **All three 2026 Beiersdorf/DKFZ skin papers** (this paper + Qi 2026 + Bormann 2016 as foundation) form a coherent cluster on skin-specific epigenetic clocks that the [[skin-aging]] phenotype page and [[epigenetic-alterations]] hallmark page should cross-reference.

## Limitations

- **Caucasian-only training cohort** — Fitzpatrick I–IV only; no independent cross-ethnic validation in this paper itself.
- **Single center / single group** (Beiersdorf/DKFZ) — clock and cancer biomarker findings need independent replication from outside the Lyko/Grönniger group. #gap/needs-replication
- **Sample size:** 89 donors for clock training is modest by modern standards (compare: Horvath 2013 n=7,844; Hannum 2013 n=656 blood). RMSE ~4–6 yr is reasonable for a tissue-specific clock but wider than pan-tissue standards.
- **Cross-sectional design** — aging effects inferred from age-stratified cross-sectional samples; no longitudinal tracking of individual methylation change over time.
- **The aging clock and the cancer biomarker findings are developed in the same cohort** — the clock was trained on the 89-sample TapeLift set; the TSG cancer biomarker analysis used all 108 TapeLift-derived methylomes (including the 89 + supplementary suction-blister-derived samples as comparators). Whether the clock CpGs and the TSG hypermethylation signal are collinear (shared training data) is not explicitly addressed in the paper. #gap/needs-replication from an independent non-overlapping cohort.
- **Mitotic age cancer signal is descriptive** — no intervention demonstrates that reducing mitotic age decreases KC risk; the finding is correlative.

## Cross-references

- [[studies/qi-2026-dhm-epigenetic-skin-aging]] — cites this paper as a comparator clock; provides the cross-Fitzpatrick external validation of TapeLift performance
- [[hallmarks/epigenetic-alterations]] — the tumor-suppressor hypermethylation + mitotic-age findings are new evidence for this hallmark in skin tissue
- [[skin-aging]] (stub or pending) — TapeLift clock + Bormann clock are the two canonical skin-specific methylation clocks; should be cross-referenced on a skin aging phenotype/process page
- [[biomarkers/horvath-clock-2013]] — pan-tissue comparator clock; TapeLift is tissue-specific (epidermis-only) but with lower RMSE in skin
- [[phenotypes/cancer]] — skin cancer (actinic keratosis, cSCC) methylation signature connects to this page

## Funding and competing interests

- **Funding:** Open Access funding enabled and organized by Projekt Deal (German university consortium OA agreement with Springer Nature). No Beiersdorf research grant credited for the study itself.
- **Competing interests:** M.R.-P., K.W., E.G., and F.L. are listed as inventors on patent applications related to the TapeLift method. K.W. and E.G. are employees of Beiersdorf AG. F.L. received consultation fees from Beiersdorf AG. M.R.-P. received speaker fees from Beiersdorf SA. (Source: Crossref competing-interests assertion + PDF page 10.)
- **Note:** The Beiersdorf commercial interest is in the TapeLift method (patent applications filed), not in a specific consumer product outcome. This does not invalidate the clock training results but is relevant context for independent replication.

## Footnotes

[^bormann2016]: doi:10.1111/acel.12470 · Bormann F, Rodríguez-Paredes M et al. · Aging Cell · 2016 · observational · n=108 (white females, ages 18–78) · first DNA methylation clock for human epidermis (punch biopsy); training foundation for the Qi 2026 23k clock · local PDF available in a local paper archive

[^qi2026]: [[studies/qi-2026-dhm-epigenetic-skin-aging]] · doi:10.1007/s13555-026-01764-4 · n=77 (17 pilot + 60 product-use) · observational (pilot) + open-label single-cohort (product-use) · 2026 · develops 23k skin methylation clock; applies TapeLift clock as comparator; DHM serum reduces epidermal DNAm age 2.1 yr at 8 wk (no vehicle control) · model: human, multi-ethnic

[^higginschen2022]: doi:10.1038/s43587-022-00248-2 · Higgins-Chen A et al. · Nat Aging · 2022 · review/methods · PC-based epigenetic clocks substantially improve test-retest reliability vs conventional elastic-net clocks; relevant context for evaluating the TapeLift PC-clock vs. elastic-net comparison
