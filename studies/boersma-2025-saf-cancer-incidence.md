---
type: study
doi: 10.1186/s12885-025-14801-w
pmid: 40859200
pmc: PMC12379543
title: "Increased skin autofluorescence predicts future cancer development"
authors: [Boersma HE, Sidorenkov G, Smit AJ, Paterson AD, van der Vegt B, Wolffenbuttel BHR, van der Klauw MM, de Bock GH]
year: 2025
journal: BMC Cancer
volume: 25
issue: 1
pages: "1375"
publication-type: research-article
study-design: observational
organism: homo-sapiens
n-subjects: 77961
intervention: []
hallmarks-tested: ["[[processes/advanced-glycation-end-products]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [SAF-elevation-predicts-cancer-incidence, site-specific-cancer-associations, LifeLines-cohort, AGE-attenuation-after-adjustment]
local-pdf: null
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "All quantitative claims (HRs, CIs, n, covariates, site-specific significance levels) verified against full PDF. Corrections: (1) added intermediate Model 2 HR; (2) noted Model 3 n=72,038 not 77,961; (3) covariate list completed with alcohol intake and pack-years of smoking; (4) liver cancer corrected to p<0.01 not p<0.001; (5) added T2DM subgroup HRs; (6) gap tags updated to reflect full-text now available."
---

# Boersma 2025 — SAF Predicts Cancer Incidence (LifeLines, enrolled n=77,961; Model 3 n=72,038)

## TL;DR

In a 11.5-year prospective follow-up of 77,961 participants from the LifeLines Northern Netherlands cohort, elevated baseline skin autofluorescence (SAF) — measured non-invasively via the AGE Reader device — significantly predicted incident cancer across all participants, with an unadjusted HR of 2.36 (95% CI 2.26–2.45). After adjustment for age and sex (Model 2) the HR was 1.15 (95% CI 1.09–1.21). After full multivariable adjustment for age, sex, BMI, waist circumference, pack-years of smoking, alcohol intake, diabetes, and metabolic syndrome (Model 3, n=72,038) the association attenuated substantially but remained statistically significant (HR 1.11, 95% CI 1.05–1.17, p<0.001). Site-specific associations were strongest for lung, oesophageal, and urinary-tract cancers (all p<0.001); liver (p<0.01) and ovarian/vagina-vulva cancers (p<0.05) also reached significance. This is the cancer-incidence companion study to [[studies/boersma-2024-saf-cvd-mortality]] (same cohort, cause-specific mortality endpoint, n=77,143).

## Cohort and Methods

**Cohort:** LifeLines Cohort Study — a large population-based prospective cohort from the Northern Netherlands, enrolling general-population participants (not pre-selected for disease) between 2006 and 2013.

**Population:** 77,961 participants cancer-free at baseline, comprising two subgroups:
- 75,678 without type 2 diabetes (T2DM)
- 2,283 with T2DM

**Follow-up:** Median 11.5 years (IQR 10.5–12.6 years); followed through March 2023.

**SAF measurement:** AGE Reader device (DiagnOptics Technologies, Groningen, Netherlands); volar forearm; outputs in arbitrary units (AU). Baseline single-timepoint measurement. See [[biomarkers/skin-autofluorescence-age-reader]] for full device and measurement methodology.

**Outcome:** Incident cancer (any site); additionally analysed by site-specific cancer subtypes. Cancer cases were sourced from the Dutch Nationwide Pathology Databank (Palga), not the Netherlands Cancer Registry. The linkage date for Palga and LifeLines was March 2023.

## Key Results

### Overall cancer incidence

Cumulative cancer incidence over follow-up:
- Males without T2DM: 10.7%
- Females without T2DM: 12.5%
- Males with T2DM: 23.6%
- Females with T2DM: 20.2%

The higher incidence in T2DM participants is consistent with the well-established diabetes–cancer association and with the higher SAF burden in this group.

### Effect sizes — SAF and cancer incidence

All participants combined (Table 2 in paper):

| Model | Covariates | n | HR (per 1 AU SAF) | 95% CI | p |
|---|---|---|---|---|---|
| Model 1 (unadjusted) | none | 77,961 | 2.36 | 2.26–2.45 | <0.001 |
| Model 2 (age + sex) | age, sex | 77,961 | 1.15 | 1.09–1.21 | <0.001 |
| Model 3 (fully adjusted) | age, sex, BMI, waist circumference, pack-years of smoking, alcohol intake, T2DM, metabolic syndrome | 72,038* | 1.11 | 1.05–1.17 | <0.001 |

*n drops from 77,961 to 72,038 in Model 3 due to missing covariate measurements.

Sex-stratified unadjusted HRs (Model 1):
- Males: HR 3.13 (95% CI 2.95–3.33)
- Females: HR 1.96 (95% CI 1.86–2.07)

The substantial attenuation from unadjusted HR 2.36 to adjusted HR 1.11 reflects the high collinearity between SAF and conventional cancer risk factors — particularly **pack-years of smoking** and **diabetes**, which independently drive both AGE accumulation and cancer risk. Whether the residual HR 1.11 after full adjustment represents a causal SAF effect vs. residual confounding by imperfectly-measured covariates is the core interpretive question. #gap/no-mechanism — mechanistic pathway from tissue-AGE accumulation to cancer initiation is not established.

#### T2DM subgroup (n=2,283)

| Model | HR | 95% CI | p |
|---|---|---|---|
| Model 1 (unadjusted) | 1.76 | 1.50–2.06 | <0.001 |
| Model 2 (age + sex) | 1.07 | 0.89–1.29 | NS |
| Model 3 (fully adjusted) | 1.07 | 0.86–1.32 | NS |

The SAF–cancer association is not significant in people with T2DM after adjustment for age and sex, likely because the elevated competing risk of mortality in T2DM attenuates the cancer incidence signal (competing risk regression confirmed T2DM participants had 11% higher cancer incidence, HR 1.11, 95% CI 1.01–1.21, p=0.03, after correcting for premature mortality risk).

### Site-specific cancer associations

The paper reports associations by tumour group using age-adjusted SAF Z-scores (Fig. 1). Significance thresholds per Fig. 1 legend: # = p<0.001, $ = p<0.01, % = p<0.05 versus participants remaining free of cancer during follow-up.

**p<0.001 (#):**
- **Lung cancer** (280 incident cases) — consistent with smoking as a major shared driver of both SAF and lung cancer
- **Oesophageal cancer** (89 cases)
- **Urinary tract cancer** (209 cases)

**p<0.01 ($):**
- **Liver cancer** (86 cases)

**p<0.05 (%):**
- **Vagina & vulva cancer** (70 cases)
- **Ovarian cancer** (76 cases)

All remaining cancer types shown in Fig. 1 (colorectal, breast, prostate, melanoma, lymphoreticular, kidney, blood & bone marrow, CNS, pancreas, head & neck, biliary tract, soft tissues, endometrium, stomach, cervix, bone, testis, thyroid, skin [non-melanoma]) did not reach statistical significance for elevated mean SAF Z-score at baseline.

Note: the paper uses the Dutch Palga pathology registry classification by organ of origin. "Female genital cancers" as a combined category is not the paper's framing; the specific significant sites are ovary and vagina/vulva separately.

## Attenuation Pattern and Confounding

The unadjusted → adjusted attenuation (HR 2.36 → 1.11) is large and mirrors the pattern observed in the companion Boersma 2024 mortality study [^boersma2024], where:
- CVD mortality attenuated from unadjusted HR 12.6 → fully-adjusted HR 1.4 (CI crossing 1.0; non-significant)
- Cancer mortality attenuated from unadjusted HR 8.6 → fully-adjusted HR 1.7 (95% CI 1.3–2.4; retained significance)

The **cancer-incidence HR 1.11** reported here (fully adjusted) is lower than the cancer-mortality HR 1.7 from Boersma 2024. This is expected: cancer mortality is a higher-severity endpoint where cumulative AGE burden may more strongly stratify outcomes vs. the broader (any-cancer-incidence) endpoint which includes many low-fatality cancers.

Key confounders driving attenuation:
1. **Smoking** — the dominant shared risk factor; SAF is elevated by decades of smoking-related oxidative damage independently of cancer risk
2. **Diabetes** — both elevates SAF (hyperglycaemia → accelerated glycation) and independently increases cancer incidence (particularly endometrial, liver, colorectal)
3. **Metabolic syndrome / obesity** — correlated with SAF and multiple cancer types
4. **Age** — the strongest individual confounder (SAF increases monotonically with age; most cancers are age-driven)

Whether the residual HR 1.11 after adjustment for these factors constitutes independent biological signal or residual confounding remains the key interpretive question. The paper does adjust for pack-years of smoking (log-transformed) rather than a binary smoker indicator, which is a methodological strength. Residual confounding from imperfect measurement of other AGE-driving exposures (dietary AGE intake, cumulative UV exposure, alcohol) and unmeasured genetic factors cannot be excluded.

## Relation to Companion Studies (Same Cohort)

| Study | n | Endpoint | Follow-up | Fully-adjusted HR |
|---|---|---|---|---|
| van Waateringe 2019 [Diabetologia] | 72,880 | Incident T2DM, CVD, all-cause mortality | 4 years | Significant across all endpoints |
| Boersma 2024 [Sci Rep] (SAF-CVD-mortality) | 77,143 | Cause-specific mortality | 115 months (9.6 yr) | Cancer mortality HR 1.7 (1.3–2.4); CVD HR 1.4 (0.8–2.5) |
| **This paper — Boersma 2025 [BMC Cancer]** | **77,961** | **Cancer incidence** | **11.5 yr** | **Cancer incidence HR 1.11 (1.05–1.17)** |

The slightly larger n in Boersma 2025 (77,961 vs 77,143) vs the companion mortality paper suggests a slightly different eligibility criterion (cancer-free at baseline vs diabetes/CVD-free at baseline in Boersma 2024).

## Extrapolation and Causal Inference

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — AGE accumulation is a universal human aging mechanism; cancer-relevance is less established |
| Phenotype conserved in humans? | yes — study conducted entirely in humans |
| Replicated in humans? | partial — consistent with Boersma 2024 cancer-mortality signal; no independent replication of cancer-incidence endpoint specifically #gap/needs-replication |

**Causal interpretation caveat:** SAF as a risk predictor does not imply AGE accumulation *causes* cancer. SAF may simply be a superior integrator of cumulative smoking and metabolic damage that happens to correlate with carcinogenic exposure. Establishing causality would require: (a) Mendelian randomization using genetic instruments for AGE accumulation rates, or (b) demonstration that the association persists after rigorous smoking pack-year adjustment, or (c) mechanism studies showing AGE/RAGE signaling promotes tumour initiation or progression. None of these are provided in this paper. #gap/no-mechanism

## Limitations and Gaps

1. **Attenuation by smoking** — the lung/urinary-tract signal likely partly reflects SAF as a smoking exposure proxy. The paper adjusts for pack-years of smoking (log-transformed), which is stronger than a binary indicator but still imperfect. Authors acknowledge residual confounding as a limitation. #gap/needs-replication
2. **Single baseline SAF measurement** — time-varying confounding and SAF trajectory effects cannot be assessed. Authors acknowledge this explicitly.
3. **European-ancestry cohort only** — LifeLines eligibility required Western European ancestry. Cancer incidence patterns and SAF reference ranges may differ in other populations. #gap/needs-human-replication in non-European cohorts.
4. **Site-specific effect sizes** — Fig. 1 reports mean baseline SAF Z-scores by cancer type (with significance symbols) rather than site-specific HRs. Adjusted HRs per cancer site are not reported in the main text; supplemental tables were not available for this verification. Site-specific HRs remain unextracted.
5. **No mechanistic pathway proposed** — the paper is epidemiological. How tissue AGE accumulation (or AGE-correlated exposures) would drive cancer initiation is unaddressed. #gap/no-mechanism
6. **Residual confounding** — the adjusted HR 1.11 (close to null) after inclusion of major confounders suggests SAF's independent contribution to cancer risk is modest; its primary value may remain in risk stratification rather than causal inference.
7. **Competing risks** — death is a competing event for cancer incidence, particularly in T2DM participants. The authors performed competing risk regression (Stata STCREP/STCRPREP packages) to address this; results are consistent with Cox analysis.

## Cross-references

- [[biomarkers/skin-autofluorescence-age-reader]] — primary anchor page for SAF/AGE Reader biomarker; Boersma 2025 should be added as a footnote in the Cancer Incidence subsection
- [[processes/advanced-glycation-end-products]] — upstream AGE biology and the GlycoSENS damage category
- [[processes/glucosepane]] — dominant irreversible ECM crosslink; partially captured by SAF
- [[hallmarks/altered-intercellular-communication]] — downstream hallmark of AGE accumulation (RAGE signaling)
- [[hallmarks/genomic-instability]] — relevant if AGEs drive mutagenesis #gap/no-mechanism
- [[dermis]] — collagen-I AGE substrate; measurement tissue
- [[studies/boersma-2024-saf-cvd-mortality]] — companion study: same cohort, cause-specific mortality endpoint; cancer mortality HR 1.7 (95% CI 1.3–2.4) [^boersma2024]

## Footnotes

[^boersma2024]: doi:10.1038/s41598-024-71037-7 · Boersma HE et al. · Scientific Reports 2024 · n=77,143 LifeLines participants without diabetes or CVD; 115-month median follow-up; 1,447 deaths · prospective cohort · cancer mortality fully-adjusted HR 1.7 (95% CI 1.3–2.4); CVD mortality fully-adjusted HR 1.4 (95% CI 0.8–2.5) · companion study to this paper
