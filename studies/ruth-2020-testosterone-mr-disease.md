---
type: study
doi: 10.1038/s41591-020-0751-5
pmid: 32042192
pmc: PMC7025895
title: "Using human genetics to understand the disease impacts of testosterone in men and women"
authors: [Ruth KS, Day FR, Tyrrell J, Thompson DJ, Wood AR, Mahajan A, Beaumont RN, Wittemans L, Martin S, Busch AS, Erzurumluoglu AM, Hollis B, O'Mara TA, McCarthy MI, Langenberg C, Easton DF, Wareham NJ, Burgess S, Murray A, Ong KK, Frayling TM, Perry JRB]
year: 2020
journal: Nature Medicine
volume: 26
issue: 2
pages: 252-258
study-design: observational
publication-type: research-article
organism: homo-sapiens
n-subjects: 425097
intervention: []
hallmarks-tested: ["[[altered-intercellular-communication]]", "[[deregulated-nutrient-sensing]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [testosterone-type2-diabetes-sex-divergent, testosterone-prostate-cancer-men, testosterone-breast-cancer-women, testosterone-endometrial-cancer-women, testosterone-pcos-women, mendelian-randomization-sex-stratified]
local-pdf: null
verified: true
verified-date: 2026-06-04
verified-by: claude
verified-scope: "All quantitative claims verified against full PMC OA PDF (PMC7025895). T2D, PCOS, and prostate cancer ORs confirmed in narrative text. Breast and endometrial cancer ORs are not stated numerically in the main text — they are shown directionally in Extended Data Fig. 6 only; gap tags updated to reflect this. Instrument SNP counts verified against Methods section."
literature-checked-through: 2026-06-04
---

# Using human genetics to understand the disease impacts of testosterone in men and women

**Ruth KS et al. · *Nature Medicine* 26(2):252–258 · 2020 · DOI: 10.1038/s41591-020-0751-5**

PMID: 32042192 · PMC: PMC7025895 · 724 citations (OpenAlex). 100th citation percentile. Green open access.

## TL;DR

Ruth et al. used Mendelian randomization (MR) in 425,097 UK Biobank participants to dissect the **causal effects of testosterone** on disease risk in men and women separately. The central finding is a **stark sex divergence** in the effect of genetically higher testosterone on type 2 diabetes: protective in men (OR 0.86) but harmful in women (OR 1.37). The study also identified sex-specific cancer risks — higher testosterone causally increases prostate cancer risk in men, and breast and endometrial cancer risk in women — and found that the genetic architecture of testosterone levels differs substantially between sexes, making sex-stratified MR essential when interpreting these data.

## Study Design

### Population and instrument construction

- **Cohort:** UK Biobank, n = 425,097 participants (sex-stratified analyses)
- **Instrument:** 2,571 genome-wide significant trait-signal pairs total across all sex hormone traits and instruments; instruments constructed separately for men and women because the genetic architecture of testosterone is substantially sex-dimorphic. Seven primary instruments (e.g., Total T-Men N=231 SNPs, Total T-Women N=254, Bioavailable T-Men N=125, Bioavailable T-Women N=180, SHBG-Men N=357, SHBG-Women N=359, Estradiol-Men N=22) plus four cluster-based instruments (Male SHBG cluster N=362, Male testosterone cluster N=122, Female SHBG cluster N=373, Female testosterone cluster N=241)
- **Exposure:** Genetically predicted total testosterone (or bioavailable testosterone in secondary analyses)
- **Outcomes:** Multiple disease endpoints including type 2 diabetes, PCOS, prostate cancer, breast cancer, endometrial cancer; additional metabolic, cardiovascular, and hormonal outcomes
- **MR method:** Two-sample MR (inverse-variance weighted primary; MR-Egger and weighted-median as sensitivity analyses for pleiotropy); F-statistics and heterogeneity tests reported
- **Comparison:** MR estimates compared to conventional observational (phenotypic) associations

### Key methodological choices

- Sex-stratified analysis throughout: testosterone's genetic determinants differ between sexes, and pooled-sex instruments would be misspecified
- Bioavailable testosterone (not bound to SHBG) analyzed in parallel; SHBG separately examined because SHBG itself carries independent disease-risk associations beyond testosterone sequestration
- Multiple sensitivity analyses to test horizontal pleiotropy (MR-Egger intercept, weighted median, leave-one-out)

## Key Findings

### Type 2 diabetes — sex-divergent and directionally opposite

The most notable finding is a **sex-reversed effect of genetically higher testosterone on T2D risk**:

- **Women:** Higher genetically-determined testosterone → **increased T2D risk** (OR = 1.37, 95% CI: 1.22–1.53) [^ruth2020]
- **Men:** Higher genetically-determined testosterone → **decreased T2D risk** (OR = 0.86, 95% CI: 0.76–0.98) [^ruth2020]

This pattern is consistent with the epidemiology: hyperandrogenism in women (as in PCOS) is associated with insulin resistance and metabolic syndrome, while low testosterone in men is associated with metabolic syndrome. The MR evidence supports these associations being at least partly causal, not merely confounded.

### Polycystic ovary syndrome (PCOS) — women

- Higher genetically-determined testosterone → **increased PCOS risk** in women (OR = 1.51, 95% CI: 1.33–1.72) [^ruth2020]
- This is bidirectionally consistent: PCOS causes elevated testosterone, but the MR evidence suggests elevated testosterone also contributes causally to PCOS phenotype — a potential positive feedback loop

### Cancer outcomes

- **Prostate cancer (men):** Higher bioavailable testosterone increases prostate cancer risk by 23% per 1-SD: OR 1.23 (95% CI: 1.13–1.33). Consistent findings across all testosterone genetic instruments (unfiltered, Steiger-filtered, and cluster-filtered). [^ruth2020]
- **Breast cancer (women):** Higher testosterone increases risk of ER-positive but not ER-negative breast cancer; consistent across all MR models and instruments. Specific OR/CI reported only in Extended Data Fig. 6 (forest plot), not stated numerically in narrative text. [^ruth2020] #gap/no-narrative-or-stated
- **Endometrial cancer (women):** Higher testosterone increases endometrial cancer risk; SHBG is separately protective. Specific OR/CI reported only in Extended Data Fig. 6 (forest plot), not stated numerically in narrative text. [^ruth2020] #gap/no-narrative-or-stated
- **Ovarian cancer (women):** Higher testosterone is protective (reduces risk); shown in Extended Data Fig. 6. Not highlighted in abstract. [^ruth2020]

The cancer associations are directionally consistent with the known epidemiology of sex-steroid-driven cancers. The prostate cancer finding contrasts somewhat with observational data suggesting the saturation model (see [[molecules/compounds/testosterone]] § Prostate cancer risk), but MR captures lifetime genetic exposure effects which may differ from short-term treatment effects.

### Sex-dimorphic genetic architecture

A secondary major finding: the genetic determinants of testosterone levels differ substantially between the sexes. Loci affecting testosterone in men frequently do not affect levels in women and vice versa. This has implications for any cross-sex extrapolation from testosterone genetics.

## Critical Appraisal

### Strengths

- **Large sample** (n=425,097) with sufficient statistical power for sex-stratified analyses
- **MR design** removes confounding by socioeconomic status, lifestyle, medication use — the dominant limitations of observational testosterone studies
- **Bidirectional MR** possible for PCOS (supports reverse-causation check)
- **Multiple sensitivity analyses** (MR-Egger, weighted-median) for horizontal pleiotropy
- **Sex-stratification** addresses the fundamental sex-dimorphism in testosterone biology
- **Open access** (PMC7025895); full text available for PDF verification

### Weaknesses and MR-specific caveats

- **Winner's curse:** Instrument SNPs selected from GWAS likely have overestimated per-allele effect sizes in the same population; MR estimates may be somewhat inflated
- **Lifelong-exposure interpretation:** MR instruments capture the *lifetime average* effect of genetically elevated testosterone, which may differ from effects of pharmacological testosterone supplementation (different trajectory, duration, and dose-response profile)
- **Horizontal pleiotropy:** Testosterone-associated SNPs may affect disease outcomes through pathways unrelated to testosterone (especially SHBG pleiotropic effects). MR-Egger + weighted-median sensitivity analyses run but cannot fully exclude pleiotropy
- **UK Biobank limitations:** Healthy volunteer bias; predominantly European ancestry; may not generalize to other ethnicities or to individuals with comorbidities excluded from UK Biobank
- **Observational collider bias in sub-analyses:** Some subgroup analyses within a recruited cohort can introduce new biases even when MR removes traditional confounding
- **Cancer outcomes in UK Biobank:** Cancer ascertainment via hospital records may have incomplete capture; cancer effect estimates should be interpreted as directional signals, not precise causal estimates

## Significance in the Wiki

Ruth 2020 is the most highly cited MR study of testosterone and disease outcomes (724 citations, 100th percentile) and the foundational reference for:
1. Sex-divergent causal effects of testosterone on metabolic disease (T2D direction reversal by sex)
2. Causal evidence for testosterone → prostate cancer risk in men
3. Causal evidence for testosterone → breast/endometrial cancer risk in women
4. The methodological standard for sex-stratified testosterone MR analyses

The T2D finding (protective in men, harmful in women) is a canonical example of why sex must be analyzed separately in endocrine epidemiology, and why observational associations in mixed-sex cohorts can be misleading.

## Relationship to Companion MR Study (Mohammadi-Shemirani 2020)

[[studies/mohammadi-shemirani-2020-testosterone-mr-elife]] analyzed 461 outcomes in 161,268 UK Biobank males and found **no benefit** for T2D, cardiovascular, or cognitive outcomes — in apparent tension with Ruth 2020's finding of reduced T2D risk in men (OR 0.86). Likely explanations for the discordance include: different instrument construction, different analytical pipeline, different set of SNPs included, and different power for the T2D outcome. This discordance should be flagged as active #gap/contradictory-evidence for the testosterone → T2D protective effect in men.

## Extrapolation Assessment

| Dimension | Status |
|---|---|
| Population: human? | Yes (UK Biobank) |
| Causal inference design: MR | Yes — controls for major confounders |
| Sex-stratified analysis: | Yes |
| Replicated in independent cohort? | Partially — Mohammadi-Shemirani 2020 (men only; discordant on T2D) |
| Mechanism for sex-divergent T2D: | Proposed (AR signaling vs aromatization; insulin sensitization in muscle) but not fully established |

## Cross-References

- [[molecules/compounds/testosterone]] — the compound page; MR evidence summary belongs here via propagation
- [[studies/mohammadi-shemirani-2020-testosterone-mr-elife]] — companion MR study (men only; 461 outcomes)
- [[phenotypes/andropause]] — age-related testosterone decline in men
- [[hallmarks/altered-intercellular-communication]] — systemic hormonal signaling hallmark
- [[hallmarks/deregulated-nutrient-sensing]] — metabolic / T2D connection
- [[tissues/prostate]] — prostate cancer risk context
- [[hypotheses/androgen-deprivation-longevity-hypothesis]] — related hypothesis MOC

## Footnotes

[^ruth2020]: [[studies/ruth-2020-testosterone-mr-disease]] · n=425,097 UK Biobank (sex-stratified) · mendelian-randomization · 2,571 instrument SNPs total (sex-stratified construction; e.g., 231 total-T SNPs in men, 254 in women; 122-SNP male testosterone cluster used for primary T2D analysis in men) · model: human (UK Biobank; predominantly European ancestry) · T2D OR women: 1.37 (95% CI: 1.22–1.53); T2D OR men (cluster-specific instrument): 0.86 (95% CI: 0.76–0.98); PCOS OR women: 1.51 (95% CI: 1.33–1.72); prostate cancer OR men (per 1-SD bioavailable T): 1.23 (95% CI: 1.13–1.33); breast cancer (ER+, not ER−) and endometrial cancer ORs shown in Extended Data Fig. 6 only — not stated numerically in narrative
