---
type: study
doi: 10.1186/s40246-025-00852-4
pmid: 41350739
pmc: PMC12681095
title: "Biological aging and lifespan in men and women using a Mendelian randomization study"
authors: [Schooling CM, Li S, Jiesisibieke ZL]
year: 2025
journal: Human Genomics
volume: 19
pages: "143"
study-design: mendelian-randomization
organism: homo-sapiens
n-subjects: 472174   # largest single cohort (UK Biobank; leukocyte telomere length GWAS); epigenetic clock GWAS: n=34,449–34,467 across 28 cohorts; parental lifespan outcomes: fathers n=415,311, mothers n=412,937; survival to recruitment: men n=167,020, women n=194,174
intervention: []
hallmarks-tested: ["[[epigenetic-alterations]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [mr-null-epigenetic-clock-lifespan, mr-null-telomere-length-lifespan, sex-stratified-null, four-clocks-tested, biomarker-not-causal-driver-interpretation]
local-pdf: null
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "All quantitative claims verified against primary source PDF (8 pp., Fig. 1, Fig. 2, Table 1, Results + Discussion). Four corrections made (see log). Supplementary Table 1 (per-clock r² and I²_GX) not accessible in main PDF — two claims touching those values qualified accordingly."
---

# Biological aging and lifespan in men and women using a Mendelian randomization study

**Schooling CM, Li S, Jiesisibieke ZL · *Human Genomics* 19:143 · 2025 · DOI: 10.1186/s40246-025-00852-4**

## TL;DR

The first MR study to test whether four commonly used epigenetic clocks (HannumAge, intrinsic epigenetic age acceleration [IEAA], PhenoAge, GrimAge) causally shorten lifespan, sex-specifically, in humans. Using genetic instruments from a 28-cohort GWAS (n≈34,000–35,000) and UK Biobank lifespan outcomes (parental attained age up to n≈415,000; survival to recruitment up to n≈194,000), all four clocks showed **null MR associations** with both lifespan proxies in both sexes. Leukocyte telomere length was similarly null for lifespan. The authors conclude that these biological aging markers are more likely to be **biomarkers of aging than causal drivers of mortality**, and should not be primary targets for lifespan interventions.

## Design

### Study type

Two-sample Mendelian randomization (epigenetic clocks → lifespan); one-sample MR (telomere length → lifespan, because both GWAS are UK Biobank-derived). Statistical analyses conducted in R 4.1.2 using MR-Base ("TwoSampleMR" v0.5.6) and the "Mendelianrandomization" package v0.6.0.

### Exposures

| Exposure | Data source | Sample size | Variants used |
|---|---|---|---|
| Leukocyte telomere length | UK Biobank, Codd et al. | 472,174 | 133 for lifespan; 149 for age at recruitment |
| HannumAge | McCartney DL — 28 cohorts | 34,449 | 7–9 SNPs (varying by outcome) |
| IEAA (intrinsic epigenetic age acceleration) | McCartney DL — 28 cohorts | 34,461 | 23–24 SNPs |
| PhenoAge | McCartney DL — 28 cohorts | 34,463 | 11 SNPs |
| GrimAge | McCartney DL — 28 cohorts | 34,467 | 4 SNPs |

All instruments: genome-wide significant (p < 5×10⁻⁸), independent (r² < 0.001 within 10,000 kb). Minimum F-statistic >29 for all exposures (adequate instrument strength). Epigenetic clock GWAS restricted to European-ancestry cohorts.

### Outcomes

Two lifespan proxies, both from UK Biobank (Pilling et al.):

1. **Parental attained age** — age at death or current age; fathers n=415,311, mothers n=412,937. Assessed as a continuous trait (years), converted from Cox proportional hazard log-protection ratios. Captures parents living or dead who survived to 57 years (mothers) or 46 years (fathers), excluding adoptees. Limitation: excludes people who died early before having children.

2. **Survival to recruitment** (age at recruitment to UK Biobank) — UK Biobank white British participants; men n=167,020, women n=194,174. Captures early deaths that parental attained age cannot, because early death precludes participation.

### Statistical analysis

- **Primary method:** Inverse variance weighting (IVW) — main analysis; assumes balanced pleiotropy.
- **Sensitivity methods:** Weighted median (WM; valid if >50% of instrument weight comes from valid variants) and MR-Egger (valid as long as InSIDE assumption holds; I²_GX confirmed adequate for MR-Egger sensitivity — 96.5% for telomere length; per-clock values in Supplementary Table 1).
- Sex-stratified analysis throughout (men and women analyzed separately for all exposures and outcomes).
- White blood cell count additionally tested as a potential confounder of telomere length (result: null for lifespan; not considered a relevant pleiotropic pathway).

## Results

### Epigenetic clocks — null across all four clocks and both sexes

Results from the IVW primary analysis (Fig. 2 of the paper; all p-values non-significant unless noted):

**Lifespan (parental attained age):**

| Clock | Sex | IVW estimate (yr/SD) | 95% CI | p |
|---|---|---|---|---|
| HannumAge | Women | 0.19 | −0.14 to 0.51 | 0.25 |
| HannumAge | Men | −0.10 | −0.39 to 0.19 | 0.51 |
| IEAA | Women | −0.02 | −0.15 to 0.12 | 0.83 |
| IEAA | Men | −0.04 | −0.15 to 0.06 | 0.43 |
| PhenoAge | Women | −0.00 | −0.12 to 0.11 | 0.94 |
| PhenoAge | Men | −0.11 | −0.25 to 0.03 | 0.13 |
| GrimAge | Women | −0.27 | −1.20 to 0.67 | 0.58 |
| GrimAge | Men | −0.17 | −0.48 to 0.14 | 0.29 |

**Survival to recruitment:**

All clocks null in both sexes by IVW; WM and MR-Egger sensitivity analyses concordant. Two MR-Egger intercepts were statistically significant (HannumAge women p=0.01; HannumAge men survival p=0.03), but the corresponding MR-Egger estimates themselves were non-null and directionally discordant with IVW/WM — the authors interpret this as low-power sensitivity artifacts rather than evidence of pleiotropy, given the overall pattern of null IVW and WM estimates.

**Summary: no evidence across 4 clocks × 2 sexes × 2 outcomes (16 combinations) that genetically predicted epigenetic clock acceleration causally shortens lifespan or impairs survival to middle age.**

### Telomere length — null for lifespan, marginal survival signal in women

| Sex | Outcome | IVW estimate (yr/SD log TL) | 95% CI | p |
|---|---|---|---|---|
| Men | Lifespan | 0.17 | −0.54 to 0.88 | 0.64 |
| Women | Lifespan | 0.04 | −0.88 to 0.96 | 0.94 |
| Men | Survival to recruitment | −0.17 | −0.39 to 0.05 | 0.13 |
| Women | Survival to recruitment | −0.24 | −0.44 to −0.03 | 0.03 |

The women's survival finding (shorter telomere → younger age at recruitment, i.e., poorer survival) is interpreted by the authors as likely reflecting selection bias: longer telomeres are associated with increased cancer risk, and early deaths in younger women tend to be due to cancer. The I²_GX of 96.5% confirmed adequate instrument quality; MR-Egger gave similar estimates with no indication of directional pleiotropy across all four telomere MR-Egger intercepts (MRE I p: men lifespan 0.16, women lifespan 0.19, men survival 0.23, women survival 0.55).

## Interpretation and significance for the wiki

### The core implication: epigenetic clocks are biomarkers, not causal lifespan drivers

This is the most direct available test of the question: does genetically elevated epigenetic clock acceleration causally shorten life? The MR null result across all four clocks in both sexes is strong evidence against the causal interpretation of clock-acceleration — more precisely, it is evidence against any **genetically mediated** causal path from the biological processes indexed by these clocks to lifespan.

This does not prove that epigenetic aging is irrelevant to biology; it establishes that the genetic variants that elevate these clocks (as measured in blood) do not operate primarily by shortening life. The clocks may still be useful biomarkers and risk predictors in observational contexts.

### Tension with the information theory of aging

[[hypotheses/information-theory-of-aging]] predicts that epigenetic information loss causally drives aging and mortality. If that hypothesis were correct, genetically elevated epigenetic clock acceleration should causally shorten lifespan — a prediction this MR study directly tests and finds null. The Schooling 2025 null is the strongest available population-genetic evidence against the strong causal version of the information theory. See [[hypotheses/information-theory-of-aging]] § Evidence against for the full discussion.

Important caveats before over-interpreting:

1. **Clock-biology gap:** The four clocks tested were all trained primarily on blood DNA methylation data. If the aging-relevant epigenetic information loss occurs preferentially in non-proliferating tissues (neurons, cardiomyocytes), blood-based clock instruments may not capture it.
2. **Instrument availability:** The epigenetic clock GWAS (McCartney et al.; n≈34,000) is substantially smaller than the telomere GWAS (n=472,174). Genetic instruments explain ~3% of variance in leukocyte telomere length; the epigenetic clock instruments explain a larger fraction of variance in clock values (exact per-clock r² in Supplementary Table 1). The detectable effect at 80% power is ~0.8 years of lifespan per SD clock acceleration (telomere) or ~0.4 years of survival per SD (telomere); epigenetic clock power calculations use the larger clock r².
3. **Parental lifespan as proxy:** Parental attained age is a noisy proxy for lifespan, particularly because it excludes parents who died before having children (selection pressure that tends to exclude the very young at death and may compress the variance in lifespan outcomes).
4. **Blood-cell count confounding:** The authors tested white blood cell count (n=563,946) as a potential confounder of telomere-length associations; it was null for lifespan and survival, so not considered a pleiotropic concern.
5. **Two-sample MR bias:** For epigenetic clocks, exposure and outcome GWAS are from different (non-overlapping) populations (28 cohorts vs UK Biobank), consistent with two-sample design and reducing winner's curse / sample overlap bias.

### Relationship to CALERIE / Waziry 2023

[[studies/waziry-2023-calerie-epigenetic-clock]] showed that caloric restriction slowed DunedinPACE (a third-generation pace-of-aging clock) but did NOT slow PhenoAge or GrimAge. The Schooling 2025 MR null for PhenoAge and GrimAge is consistent with the CALERIE finding: if these clocks do not respond to a genuine geroprotective intervention (CR), they may not lie on the causal path from aging to death — consistent with being biomarkers rather than causal drivers. Notably, DunedinPACE was NOT included in the Schooling 2025 MR (it was not available in the McCartney 2021 GWAS used as the exposure source); a future MR study using DunedinPACE instruments would be informative. #gap/needs-replication

### Relevance to partial reprogramming / clock restoration strategies

[[partial-reprogramming]] strategies aim to reverse epigenetic clock acceleration as a therapeutic end. If clock-acceleration is not causally on the lifespan path (as the Schooling 2025 MR suggests), then restoring clock values may be necessary-but-not-sufficient or even irrelevant for lifespan extension — depending on whether the causal aging biology is upstream, downstream, or orthogonal to the measured clock CpG sites. This is a substantive challenge to any strategy that uses epigenetic clock reversal as the primary therapeutic target or efficacy readout.

## Limitations

- **Zero citations as of 2026-05-07.** This is a recent 2025 paper without independent scientific scrutiny beyond peer review. Treat as preliminary. #gap/needs-replication
- **No DunedinPACE instrument** — the clock with the strongest positive signal in CALERIE (Waziry 2023) was not testable in this MR framework; the null result does not extend to DunedinPACE.
- **European ancestry only** — the GWAS data used (UK Biobank and McCartney 28 cohorts) are predominantly or exclusively European. Epigenetic clock behavior and genetic architecture may differ across ancestries.
- **Blood tissue only** — all epigenetic GWAS are blood-based; tissue-specific epigenetic aging in brain, muscle, and other key tissues is not captured by these instruments.
- **One-sample MR for telomere length** — because both the telomere length GWAS and the UK Biobank lifespan outcome are from the same cohort, the telomere analysis is one-sample MR, which can be biased toward the confounded observational estimate. The authors acknowledge this limitation.
- **Parental lifespan exclusions** — early parental deaths (before age 46 for fathers, 57 for mothers) excluded; this may attenuate associations mediated through early-life mortality pathways.
- **Power for GrimAge** — only 4 instruments available for GrimAge across both lifespan and survival analyses (fewer SNPs pass thresholds), reducing power for that clock specifically relative to PhenoAge (11 SNPs) and IEAA (23–24 SNPs).
- **Cannot rule out tissue-specific or non-linear causal effects** — MR identifies average linear causal effects in the genetic-IV framework. Threshold or non-linear effects of epigenetic aging, or effects specific to non-blood tissues, would not be detected.

## Limitations and gaps

#gap/needs-replication — 2025 paper; zero citations; independent MR in non-European ancestry populations needed  
#gap/needs-replication — DunedinPACE not tested; a key gap given its positive signal in CALERIE  
#gap/contradictory-evidence — telomere women survival finding (p=0.03) is directionally opposite to causal benefit of telomere maintenance; interpreted as selection bias but not definitively resolved

## Cross-references

This study is load-bearing evidence for the following wiki pages:

- [[hypotheses/information-theory-of-aging]] — `key-evidence-against:` entry; MR null challenges causal epigenetic information loss hypothesis
- [[partial-reprogramming]] — cited as preliminary contradictory evidence for clock-reversal as a therapeutic target
- [[biomarkers/horvath-clock-2013]] — clock whose biological correlates are tested (via IEAA instrument derived from Horvath architecture)
- [[biomarkers/hannum-clock-2013]] — HannumAge directly tested; null result is important context for this clock's causal status
- [[biomarkers/phenoage-2018]] — PhenoAge directly tested; null for both lifespan and survival in both sexes
- [[biomarkers/grimage-2019]] — GrimAge directly tested; null despite being the strongest observational mortality predictor
- [[biomarkers/telomere-length-leukocyte]] — leukocyte telomere length MR results reported; null for lifespan
- [[epigenetic-alterations]] — hallmark page; this study addresses whether the epigenetic changes captured by these clocks are causal for the hallmark's downstream mortality effects

---

[^schooling2025]: [[studies/schooling-2025-mr-epigenetic-clock-lifespan]] · n up to 472,174 (telomere GWAS); epigenetic clock exposure n≈34,000–35,000 (28 cohorts); lifespan outcome n≈415,311 fathers/412,937 mothers; survival n=167,020 men/194,174 women · mendelian-randomization (two-sample IVW primary; WM + MR-Egger sensitivity; sex-stratified) · all epigenetic clock × lifespan combinations null; telomere length null for lifespan · model: human (UK Biobank + McCartney 2021 GWAS; European ancestry) · doi:10.1186/s40246-025-00852-4 · local PDF available
