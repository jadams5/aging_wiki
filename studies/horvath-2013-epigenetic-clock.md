---
type: study
doi: 10.1186/gb-2013-14-10-r115
pmid: 24138928
pmc: PMC4015143
title: "DNA methylation age of human tissues and cell types"
authors: [Horvath S]
year: 2013
journal: Genome Biology
volume: 14
pages: R115
study-design: meta-analysis
organism: homo-sapiens
n-subjects: 7844   # non-cancer training + test samples; 82 GEO datasets, 51 tissues/cell types; additional 5,826 cancer samples from 32 cancer tissue datasets used for validation only
intervention: []
hallmarks-tested: ["[[epigenetic-alterations]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [353-cpg-multi-tissue-clock, MAE-3.6-years, pearson-r-0.96, DNAm-age-acceleration-cancer-36.2yr, reprogramming-resets-clock-to-zero, heritability-100pct-newborns-39pct-adults, progeria-werner-syndrome-age-acceleration]
local-pdf: null
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Primary source PDF read end-to-end (all 19 pages). All quantitative claims cross-checked against methods, results, and figures. Corrections applied: cancer n (5,826 not 6,000), cancer acceleration (36.2 yr not 36 yr), heritability numbers added (100% newborns / 39% adults), cerebellum deceleration claim removed (paper shows no significant difference between brain regions from same subjects), HIV/Down syndrome acceleration claims removed (not in this primary paper — appear to be from secondary literature), cancer dataset count corrected (32 cancer tissue datasets not 20 cancer types in body text). iPSC reset, 353 CpGs, MAE 3.6 yr, Pearson r=0.96, n=7,844, 82 datasets, 51 tissues all confirmed correct."
---

# DNA methylation age of human tissues and cell types

**Horvath S · *Genome Biology* 14:R115 · 2013 · DOI: 10.1186/gb-2013-14-10-r115**

Single-author paper. PMC4015143. Citation count: ~6,811 (100th percentile). Gold open access (BMC/BioMed Central).

## TL;DR

Horvath 2013 developed and validated a **353-CpG epigenetic clock** — an elastic-net regression model trained on DNA methylation (DNAm) data from 7,844 samples spanning 51 human tissue and cell types across 82 public datasets. The clock estimates chronological age with Pearson r = 0.96 and median absolute error (MAE) = 3.6 years in held-out test data. Its central novelty was **pan-tissue generalizability**: the same 353 CpGs predict age with similar accuracy across blood, brain, saliva, kidney, liver, and many other tissues — prior clocks (e.g., Hannum 2013) were blood-specific. Downstream applications have shaped the entire biological-age-measurement field, and the clock serves as a key readout in studies of epigenetic rejuvenation, cancer biology, and aging-intervention trials.

## Study Design

### Data assembly

- **Source:** 82 publicly available Illumina array datasets from Gene Expression Omnibus (GEO), spanning HumanMethylation27 (27K) and HumanMethylation450 (450K) arrays.
- **Sample count:** n = 7,844 non-cancer samples (training + test) across 51 tissue and cell types; an additional 5,826 cancer samples from 32 cancer tissue datasets (plus 7 cancer cell line datasets) used for age-acceleration validation only — they were not part of the clock training. The abstract uses "~6,000" colloquially; the precise body-text count is 5,826.
- **Age range:** Birth (cord blood, neonates) through ~101 years (Figure 6A heatmap maximum), covering fetal tissue, children, adults, and elderly. Training data mean age was ~43 years (per p.2 selection criteria).
- **Study type:** Multi-cohort cross-sectional meta-analysis for clock training; cross-sectional and observational for biological validation.

### Clock construction method

Horvath employed a **two-stage penalized regression** approach:

1. Elastic-net regression (glmnet R package; α = 0.5) across the full 27K/450K CpG space to select predictive features.
2. A **log-linear age transformation** was applied: `log(age + 1)` for samples younger than 20 years; linear above 20 years. This addresses the non-linearity of methylation dynamics during development vs. adult aging and is why the clock's output must be back-transformed for human-interpretable years.

The final 353-CpG predictor was selected by cross-validated accuracy. The deliberate choice to train across 51 tissue types — sacrificing within-tissue accuracy for cross-tissue portability — is the key methodological decision that distinguishes this clock from blood-specific predecessors.

### Validation

Held-out test set performance: Pearson r = 0.96, MAE = 3.6 years. Validation was performed in datasets withheld from training. Cancer sample validation was orthogonal — cancer samples were never used for training.

## Results

### Primary clock performance

| Metric | Value |
|---|---|
| CpG sites in final model | 353 (193 positively + 160 negatively correlated with age) |
| Training samples | n = 7,844 (non-cancer; 82 datasets; 51 tissues/cell types) |
| Training Pearson r | 0.97; error = 2.9 years (training data; likely overly optimistic) |
| Held-out test Pearson r | 0.96 |
| Held-out test MAE | 3.6 years |
| Tissues/cell types validated | 51 |
| Cancer validation samples | 5,826 (from 32 cancer tissue datasets; 20 cancer types) |
| Mean cancer age acceleration | 36.2 years |
| Heritability (newborns) | ~100% (broad-sense, Falconer's formula; twin data set 50) |
| Heritability (older adults) | ~39% (broad-sense; twin data set 41) |

The Pearson r = 0.96 is from the held-out test set (Figure 2A) — this is the appropriate performance metric. Training r = 0.97 is optimistic (Figure 1A). Performance varies by tissue: stronger in tissues with stable cell-type composition (brain cortex cor=0.98 error=1.5, liver cor=0.89 error=6.7), weaker in breast tissue (cor=0.87, error=13) and uterine endometrium (cor=0.75, error=6.2).

### Cancer age acceleration

In 5,826 cancer samples from 32 cancer tissue datasets covering 20 cancer types, Horvath age exceeded chronological age by an **average of 36.2 years** (Additional file 13B) — a dramatic epigenetic acceleration not explained by tissue type or composition alone. The overall correlation between DNAm age and chronological age across all cancer samples is weak (cor = 0.15, p = 1.9E-29; Additional file 13A), reflecting the dominance of disease-driven epigenetic drift over normal aging trajectories. Age acceleration was lower in tumors with high somatic mutation burden, and tumors carrying TP53 mutations showed significantly lower age acceleration in 4 out of 13 cancer datasets tested — consistent with TP53 signaling activating an epigenetic maintenance system. Somatic mutations in steroid receptors (ER, PR) greatly accelerate DNAm age in breast cancer. #gap/no-mechanism — the mechanistic basis for cancer-associated clock acceleration is debated.

### Embryonic and induced pluripotent stem cells

Embryonic stem cells (ESCs) and **induced pluripotent stem cells (iPSCs) showed Horvath DNAm age near zero**, regardless of the chronological age of the donor from whom iPSCs were derived. This was the first evidence that epigenetic age — as the clock measures it — is **reset to near-zero during cellular reprogramming**. This result underpins the hypothesis that the aging epigenome is plastic and potentially reversible, and has become foundational to the partial-reprogramming field.

### Cell passage number correlation

Horvath age increased with passage number in cultured cell lines, suggesting the clock tracks a replication-associated epigenetic drift program — consistent with the hypothesis that it measures cumulative mitotic/replication events rather than strictly chronological time.

### Cerebellum and brain region analysis

The paper examined DNAm age across multiple brain regions (temporal cortex, pons, frontal cortex, cerebellum) from the same subjects. **No significant difference in DNAm age was detected across different brain regions from the same subjects** (Additional file 5K,L). Horvath explicitly states: "I could only find no significant difference in DNAm age (x-axis) between cerebellum and occipital cortex from the same subjects" (Additional file description p.15). The cerebellum does show a higher error in cross-sectional test-set calibration (cor = 0.92, error = 5.9 years per Figure 2F) compared to other brain regions, but this reflects calibration noise, not a systematic directional bias in DNAm age relative to chronological age from within-subject comparisons.

Note: claims in secondary literature that "the cerebellum ages more slowly" than other brain regions are not supported by this primary paper's within-subject comparisons. #gap/needs-replication — cerebellum-specific deceleration claims should be traced to later studies if they exist.

### Premature aging disease controls (progeria, Werner syndrome)

The paper includes blood samples from patients with Hutchinson-Gilford progeria and Werner progeroid syndrome as disease controls in Figure 2T. Horvath explicitly states: "I did not find any evidence that a premature aging disease (progeria) is associated with accelerated DNAm age" (p.12). These samples are shown in Figure 2T as the colored outlier group but do not show systematic epigenetic age acceleration consistent with their premature-aging phenotype.

**Correction note:** Claims that this paper demonstrated HIV-infection DNAm age acceleration or Down syndrome acceleration are NOT supported by the primary source PDF. These findings come from subsequent studies (HIV: Gross et al. 2016 and others; Down syndrome: Horvath et al. 2015). They should not be attributed to Horvath 2013. #gap/unsourced — downstream wiki pages citing Horvath 2013 for HIV/Down syndrome acceleration claims need to be re-sourced to the correct primary papers.

### Heritability

Using Falconer's formula applied to two twin data sets (monozygotic and dizygotic twin pairs), the broad-sense heritability of age acceleration (DNAm age minus chronological age) was estimated at **100% in newborns** (data set 50; all females, median age 41 years) and **39% in older subjects** (data set 41). The high heritability in newborns reflects strong genetic determination of baseline methylation state at birth; the lower heritability in older subjects indicates that non-genetic factors (environment, stochastic drift) become increasingly dominant with age. These numbers are from a single analysis using two twin cohorts; the 100% figure for newborns should be interpreted cautiously given the small dataset. #gap/needs-replication — twin-based heritability estimates for epigenetic age acceleration have been refined in subsequent larger cohort studies.

## Significance in the Wiki

This paper is the foundational citation for [[biomarkers/horvath-clock-2013]] and is load-bearing evidence in several key arguments:

1. **Epigenetic aging is measurable across tissues.** Pan-tissue clock validity established the DNAm aging field. All subsequent aging clocks (Hannum 2013, PhenoAge 2018, GrimAge 2019, DunedinPACE 2022) are descendants or alternatives to this framework. See [[frameworks/biological-age-measurement]].

2. **Epigenetic age is reversible.** The iPSC near-zero result is the key biological observation supporting partial-reprogramming approaches as aging interventions (e.g., AAV-OSK, cyclic reprogramming). See [[hypotheses/information-theory-of-aging]] § Reversibility evidence.

3. **Cancer is an accelerated-aging epigenome.** The 36.2-year mean cancer acceleration finding links [[epigenetic-alterations]] to oncogenesis and distinguishes epigenetic age from chronological age in disease states. This was demonstrated across 5,826 samples from 32 cancer tissue datasets spanning 20 cancer types.

4. **Intervention readout.** The Horvath clock has been used as a readout in the CALERIE-2 RCT (where it showed a null result to 2-year caloric restriction; see [[studies/waziry-2023-calerie-epigenetic-clock]]) and in partial-reprogramming studies. The null CALERIE-2 result is scientifically informative: it shows that DunedinPACE and Horvath clock measure distinct dimensions of aging biology.

## Extrapolation Assessment

| Dimension | Status |
|---|---|
| Pathway conserved across human tissues? | Yes — 353 CpGs validated across 51 tissue/cell types |
| Findings replicated by independent groups? | Yes — clock widely used and cross-validated; see [[biomarkers/horvath-clock-2013]] § Limitations |
| Findings replicated in intervention contexts? | Partial — cancer/iPSC replication yes; intervention responsiveness contested (CALERIE-2 null) |

## Limitations

1. **Cross-sectional training.** The clock was trained on cross-sectional age-labeled samples, not longitudinal trajectories. It predicts chronological age — not mortality or morbidity — so EAA (epigenetic age acceleration) is a derived measure not directly optimized to predict health outcomes. Compare to mortality-trained [[biomarkers/grimage-2019]] and [[biomarkers/phenoage-2018]].

2. **Array-technology constraint.** The 353 CpGs were selected on 27K and 450K Illumina arrays. Coverage on the newer EPIC (850K) array varies; cross-platform normalization is required and introduces noise.

3. **Cell-type composition confound.** Whole-blood Horvath age is partly driven by immune cell proportions, which shift with age. Cell-type-corrected ("intrinsic EAA") is more conservative. #gap/contradictory-evidence

4. **Technical noise.** Higgins-Chen et al. 2022 (doi:10.1038/s43587-022-00248-2) demonstrated substantial test-retest noise in conventional DNAm clocks from batch effects and array normalization; principal-component (PC) versions improve reliability. The original Horvath clock predates this critique.

5. **Cancer sample exclusion from training.** Cancer validation used 5,826 samples from 32 tissue datasets held out from training — appropriate — but this is a diverse mix of cancer types and the paper provides per-cancer-type breakdowns (Additional files 12–16) showing highly variable age-acceleration patterns; single "mean 36.2 years" figure masks substantial heterogeneity.

6. **Null intervention response.** The clock did not respond to 2-year CR in CALERIE-2 [^waziry2023]. Whether this reflects insensitivity of the Horvath clock to CR biology or a genuine absence of CR-driven epigenetic change is unresolved. #gap/contradictory-evidence

## Cross-References

- [[biomarkers/horvath-clock-2013]] (verified) — the canonical biomarker page; **NOTE: biomarker page training-details table states "276 cancer" samples — this is incorrect per primary source, which gives n=5,826 cancer samples. Needs correction in biomarker page (main agent propagation task).**
- [[hallmarks/epigenetic-alterations]] — hallmark page; this study is foundational evidence
- [[hypotheses/information-theory-of-aging]] (verified) — cites Horvath 2013 as central clock evidence; iPSC-reset result is foundational to reversibility argument
- [[biomarkers/hannum-clock-2013]] — contemporary blood-specific clock; contrast with pan-tissue design
- [[biomarkers/phenoage-2018]] — second-generation mortality-trained clock; null in CALERIE-2
- [[biomarkers/grimage-2019]] — second-generation mortality-trained clock; null in CALERIE-2
- [[biomarkers/dunedinpace-2022]] — third-generation pace-of-aging clock; positive in CALERIE-2
- [[biomarkers/lehallier-proteomic-clock-2019]] — proteomic clock; alternative modality
- [[studies/waziry-2023-calerie-epigenetic-clock]] (verified) — directly tests Horvath clock as intervention readout; null result
- [[interventions/lifestyle/caloric-restriction]] (verified) — CALERIE-2 used this clock; null result
- [[frameworks/biological-age-measurement]] — comparison MOC for all clock types

## Footnotes

[^waziry2023]: [[studies/waziry-2023-calerie-epigenetic-clock]] · n=197 DNAm analysis sample (128 CR, 69 AL; from 220 randomized) · rct · Horvath clock: null (supplementary; NS across all timepoints); DunedinPACE: d=−0.25 (95% CI −0.41, −0.09), p<0.003 at 24 months · model: healthy non-obese human adults, 2-year ~12% CR achieved · doi:10.1038/s43587-022-00357-y · local PDF available
