---
type: study
doi: 10.1038/s43587-024-00793-y
pmid: 39900648
pmc: PMC11922767
title: "Individual and additive effects of vitamin D, omega-3 and exercise on DNA methylation clocks of biological aging in older adults from the DO-HEALTH trial"
authors: [Bischoff-Ferrari HA, Gängler S, Wieczorek M, Belsky DW, Ryan J, et al.]
year: 2025
journal: Nature Aging
study-design: rct
publication-type: letter
volume: 5
issue: 3
pages: 376-385
organism: homo-sapiens
n-subjects: 777
intervention: ["[[omega-3-fatty-acids]]", "[[vitamin-d]]", "[[exercise]]"]
hallmarks-tested: ["[[epigenetic-alterations]]"]
human-evidence: true
peer-reviewed: true
preregistered: false # Parent trial NCT01745263 was registered; this DNAm analysis was post hoc.
key-findings: [omega-3-phenoage-main-effect, omega-3-grimage2-arm-effect, omega-3-dunedinpace-main-effect, phenoage-additive-combinations, grimage-null, first-generation-clocks-null]
local-pdf: null
verified: true
verified-date: 2026-08-04
verified-by: claude
verified-scope: "Complete publisher/PMC article, Methods, all figures and Extended Data Tables 1–5, and the Nature Portfolio Reporting Summary checked; participant-level data and analysis code were unavailable for independent reanalysis"
---

# Individual and additive effects of vitamin D, omega-3 and exercise on DNA methylation clocks of biological aging in older adults from the DO-HEALTH trial

## TL;DR

This post-hoc DNA-methylation (DNAm) analysis used paired baseline and 3-year blood samples from 777 Swiss participants in the 2 × 2 × 2 factorial DO-HEALTH randomized trial. The omega-3 assignment—1 g/day from marine algae, providing 330 mg eicosapentaenoic acid (EPA) plus 660 mg docosahexaenoic acid (DHA)—was associated with small favorable changes in PC-PhenoAge and DunedinPACE in factorial marginal-effect models. The literal omega-3-only arm also favored GrimAge2 when treatment interactions required arm-by-arm comparisons with placebo. Vitamin D and the strength-training program had no individual later-generation-clock estimates with confidence intervals excluding zero; model-implied sums of treatment effects were favorable for PC-PhenoAge combinations containing omega-3, but these were not observed combined-arm contrasts and do not establish synergy. These are surrogate-biomarker findings, not evidence in this analysis that the interventions extended lifespan or prevented clinical disease.[^bischoffferrari2025]

## Design

### Parent trial and Bio-Age sample

- **Parent trial:** DO-HEALTH, NCT01745263; 2,157 generally healthy, community-dwelling adults aged at least 70 years recruited at seven centers in Switzerland, France, Germany, Portugal and Austria.
- **Factorial design:** randomized, placebo-controlled 2 × 2 × 2 trial with eight arms over 3 years. Randomization used blocks of 16 and was stratified by center, prior falls, sex and age (70–84 versus at least 85 years).
- **Bio-Age analysis:** post-hoc analysis restricted to Switzerland. Of 1,006 Swiss participants, 790 consented; exclusions for low-quality DNA extraction (n=6), predicted/reported sex mismatch (n=3) and missing follow-up measurement (n=4) left **n=777** with DNAm at both baseline and 36 months.
- **Arm sizes:** placebo 95; vitamin D 101; omega-3 98; simple home exercise program (SHEP) 92; vitamin D + omega-3 95; vitamin D + SHEP 104; omega-3 + SHEP 95; all three 97.
- **Analysis-population profile:** mean age 75.47 years (s.d. 4.47), 59.7% women, mean BMI 25.72 kg/m²; 52.3% met the Nurses' Health Study healthy-aging definition and 88% reported physical activity at least weekly. This was healthier and more active than the overall trial cohort.

### Interventions

| Factor | Active intervention | Comparator |
|---|---|---|
| Vitamin D | 2,000 IU/day | Matching placebo capsule |
| Omega-3 | 1 g/day from marine algae: 330 mg EPA + 660 mg DHA | Matching placebo capsule |
| Exercise | SHEP strength training, 30 min three times/week | Attention-control joint-flexibility program, 30 min three times/week |

The two daily gel capsules were matched in size, appearance, taste and weight and coated to limit unblinding by aftertaste. The Reporting Summary states that participants, pill-dispensing and outcome-collection staff, and data analysts were masked to group assignment; a physiotherapist who was not involved in assessments instructed participants in the exercise programs. Biospecimen assays were blinded to trial interventions and outcomes. Medication adherence was high: 86% took at least 80% of pills. For exercise, 70% completed sessions at least twice weekly and 62% at least three times weekly.

### DNAm endpoints

Fasting morning whole blood was assayed on the Illumina MethylationEPIC v1.0 array. Baseline and 36-month samples from each participant were placed in the same array batch and BeadChip; no technical replicates were run.

Primary hypothesis testing emphasized four later-generation measures:

- PC-PhenoAge and PC-GrimAge, reconstructed from principal components for higher technical reliability;
- original GrimAge2;
- original DunedinPACE.

PC-Horvath and PC-Hannum first-generation clocks were comparative endpoints. Seven PC-DNAm surrogate proteins underlying GrimAge, DNAmFitAge and PC-DNAm telomere length were secondary or additional analyses.

For all clocks except DunedinPACE, biological age was regressed on chronological age. Change in age-acceleration residuals from baseline to year 3 was standardized. DunedinPACE was analyzed as a standardized change in pace of aging without chronological-age residualization.

### Statistical contrasts

The intention-to-treat analysis used analysis of covariance adjusted for chronological age (continuous plus a spline at 85 years), sex, prior falls, BMI, study site and the baseline value of the relevant DNAm measure.

- When no treatment interaction was detected, the paper estimated **factorial marginal main effects**: for example, all four omega-3-containing arms (n=385) versus all four arms without omega-3 (n=392), adjusted for the other treatment assignments.
- It also reported model-based two-factor combinations and an all-three-treatment estimate. For PC-PhenoAge, PC-GrimAge and DunedinPACE, these reflect sums under the no-interaction factorial model; they are not literal combined-arm comparisons or evidence of biological synergy.
- For **GrimAge2**, treatment interactions were present, so each of the seven active arms was compared directly with the placebo-only arm.

This distinction is essential: the reported PC-PhenoAge and DunedinPACE estimates labeled "omega-3" are marginal factorial effects, while the reported GrimAge2 estimate is the literal omega-3-only arm versus placebo.

## Key results

### Four later-generation clocks

Negative standardized differences favor slower age acceleration or pace of aging.

| Outcome and contrast | Standardized difference (95% CI) | Interpretation |
|---|---:|---|
| PC-PhenoAge: omega-3 marginal main effect | −0.16 (−0.30, −0.02) | Favorable |
| PC-GrimAge: omega-3 marginal main effect | −0.10 (−0.23, 0.04) | Null |
| GrimAge2: omega-3-only arm vs placebo | −0.32 (−0.59, −0.06) | Favorable |
| DunedinPACE: omega-3 marginal main effect | −0.17 (−0.31, −0.04) | Favorable; authors describe about a 1% slower pace |

Vitamin D and SHEP showed no individual-treatment estimates with confidence intervals excluding zero on these clocks. The corresponding vitamin D main-effect estimates were −0.08 (−0.22, 0.06) for PC-PhenoAge, −0.001 (−0.14, 0.14) for PC-GrimAge and 0.02 (−0.11, 0.16) for DunedinPACE; the vitamin-D-only arm estimate for GrimAge2 was −0.07 (−0.33, 0.20). SHEP estimates were also null. First-generation PC-Horvath and PC-Hannum results were null across interventions.[^bischoffferrari2025]

The paper's headline **2.9–3.8 months** is not a confidence interval. Extended Data Table 3 derives those examples by adding the overall PC-PhenoAge mean change to a standardized coefficient multiplied by the PC-PhenoAge change-score s.d.; this is not a direct between-group conversion, and no separate outcome-specific GrimAge2 conversion is shown. The standardized estimates above should therefore remain the primary effect measures, with 2.9–3.8 months treated only as the authors' descriptive conversion rather than the randomized treatment-effect magnitude.

### Additive and combined-arm results

PC-PhenoAge was the only primary clock for which model-implied combinations showed the paper's stated additive pattern. Except for GrimAge2, the rows below are sums of factorial marginal effects, not comparisons restricted to participants in the named treatment arms:

| PC-PhenoAge contrast | Standardized difference (95% CI) |
|---|---:|
| Vitamin D + omega-3 versus neither factor | −0.24 (−0.44, −0.04) |
| Omega-3 + SHEP versus neither factor | −0.24 (−0.44, −0.04) |
| All three treatments versus placebo (factorial-model sum) | −0.32 (−0.56, −0.08) |
| Vitamin D + SHEP versus neither factor | −0.16 (−0.36, 0.03); null |

There were no combined-treatment estimates with confidence intervals excluding zero for PC-GrimAge, GrimAge2 or DunedinPACE. In particular, the omega-3 + vitamin D, omega-3 + SHEP and all-three **literal GrimAge2 arms** all had confidence intervals crossing zero despite the favorable omega-3-only arm. For DunedinPACE, the omega-3 + vitamin D (−0.15, 95% CI −0.34 to 0.04), omega-3 + SHEP (−0.17, −0.36 to 0.02) and all-three (−0.15, −0.38 to 0.09) **factorial-model sums** were also individually inconclusive.

### Secondary molecular results

The literal omega-3-only arm favored three of seven PC-DNAm surrogate proteins underlying GrimAge—PAI-1, leptin and TIMP-1—with standardized differences ranging from −0.31 to −0.42; Fig. 3 labels these outcomes as arm-versus-placebo contrasts because interactions were present for them. Selected model-based or arm-specific combinations favored PAI-1, B2M, TIMP-1 and GDF-15 (range −0.26 to −0.53). DNAmFitAge was null. Model-implied vitamin D + omega-3, omega-3 + SHEP and all-three-treatment estimates increased PC-DNAm telomere-length estimates, but the authors cautioned that this estimator correlates only weakly with measured leukocyte telomere length.[^bischoffferrari2025]

### Prespecified subgroup exploration

The authors examined effect modification by sex, age, BMI, baseline 25-hydroxyvitamin D and baseline blood EPA+DHA. PC-PhenoAge effects of omega-3 appeared larger when baseline vitamin D was at least 20 ng/mL, while additive combination estimates appeared larger among women and participants with baseline EPA+DHA at or below 100 ng/mL. These stratified comparisons were exploratory and were not multiplicity-corrected.

## Clinical-outcome boundary

This paper analyzed DNAm biomarkers, not incident disease, disability, mortality or lifespan. It cited separate DO-HEALTH publications reporting infections, falls, prefrailty and invasive cancer, but it did **not** test whether the clock changes mediated those clinical results, predict later outcomes or constitute validated surrogate endpoints. The observed months-scale clock differences therefore cannot be translated into months of added life or a quantified reduction in clinical risk.

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | The interventions and DNAm measures were tested directly in humans. |
| Phenotype conserved in humans? | partial | DNAm clocks are human biomarkers, but whether their intervention-induced movement represents slowed organismal aging remains unresolved. |
| Replicated in humans? | no | This is one post-hoc analysis in a single-country subset; the other four national cohorts were not assayed here. |

## Limitations

- **Post-hoc biomarker analysis:** the parent DO-HEALTH trial was prospectively registered as NCT01745263 and had published protocol/statistical-plan material, but this DNAm analysis was post hoc and no separate prospective registration or analysis plan for these clock outcomes was identified in the article or Reporting Summary. No formal sample-size calculation was conducted specifically for it. `preregistered: false` therefore applies to this analysis, not the parent trial.
- **Multiplicity:** the authors specified no single primary clock and applied no formal multiple-testing correction across the four emphasized clocks, four comparative/additional clock measures, seven DNAm protein surrogates, multiple treatment combinations and subgroup analyses. Their inferential rule emphasized repeated directional patterns with 95% CIs excluding zero. Nominal interval exclusion should not be treated as family-wise-confirmatory evidence.
- **Subset selection and generalizability:** the 777 participants were a healthy, active Swiss subset of the 2,157-person European trial and had lower baseline EPA+DHA than the full cohort. Results may not generalize to frailer older adults, other countries or omega-3-replete populations.
- **Two time points:** only baseline and year 3 were assayed despite intermediate stored samples, increasing change-score measurement error and preventing trajectory analysis.
- **No technical replicates:** EPIC-array assays were batched within participant but not technically replicated.
- **Small surrogate effects:** favorable standardized effects were 0.16–0.32 and differed across clocks; PC-GrimAge and the first-generation clocks were null.
- **No clinical validation:** the study did not establish that moving any clock improves healthspan, morbidity or survival. #gap/needs-replication #gap/long-term-unknown
- **Clock-developer interests:** Daniel Belsky, a DunedinPACE developer, and Steve Horvath, an epigenetic-clock developer, were coauthors. Horvath disclosed founding a nonprofit that licenses epigenetic-clock patents including GrimAge and employment by Altos Labs. Independent replication is especially important.
- **Funding context:** the parent trial had public, university and industry support, including DNP, Roche, NESTEC, Pfizer and Streuli; the paper states that funders had no role in design, conduct, analysis, interpretation or publication decisions.

## Cited by / downstream propagation candidates

- [[biomarkers/phenoage-2018]] — distinguish the omega-3 marginal main effect from a literal omega-3-only arm and correct the headline month conversion.
- [[biomarkers/grimage-2019]] — PC-GrimAge was null, while the omega-3-only arm favored GrimAge2.
- [[biomarkers/dunedinpace-2022]] — small favorable omega-3 marginal main effect; combined contrasts were inconclusive.
- [[molecules/compounds/omega-3-fatty-acids]] — formulation-specific human biomarker evidence; correct the 2.9/3.8-month attribution and distinguish marginal from literal-arm estimates.
- [[molecules/compounds/vitamin-d]] and [[interventions/lifestyle/exercise]] — null individual clock effects and PC-PhenoAge additive context.
- [[hallmarks/epigenetic-alterations]] and [[frameworks/biological-age-measurement]] — cross-clock discordance and surrogate-endpoint limitations.

## Footnotes

[^bischoffferrari2025]: [[studies/bischoff-ferrari-2025-do-health-biological-aging]] · n=777 paired baseline/36-month DNAm samples (Swiss subset of 2,157-person parent trial) · rct, post-hoc biomarker analysis · model: generally healthy, active European adults aged at least 70 years · DOI:10.1038/s43587-024-00793-y · NCT01745263 · quantitative inference reported primarily as standardized differences with 95% CIs; no formal multiplicity correction
