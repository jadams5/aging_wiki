---
type: biomarker
aliases: [PhenoAge, Levine 2018, phenotypic age, biological age Levine]
modality: dna-methylation
unit: years
training-cohort: "Levine 2018: NHANES III (n=9,926 for Stage 1 clinical component; Stage 2 DNAm training n=456 from InCHIANTI only; WHI, FHS, NAS, JHS used for validation)"
n-cpgs-or-features: 513
training-target: mortality
calibration-tissues: ["whole-blood"]
test-retest-icc: null
human-evidence-level: strong
mendelian-randomization: partial
intervention-responsive: partial
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Levine 2018 primary source PDF verified end-to-end; Waziry 2023 CALERIE-2 PDF verified; Bischoff-Ferrari 2025 DO-HEALTH Bio-Age PDF verified. Canonical-DB identity fields not applicable (no PubChem/UniProt for this page type). R34 recency refresh 2026-05-08: METFORAGING (Marcelo-Calvo 2026; primary endpoint), DO-HEALTH cancer follow-up (Rösler 2026), and TCGA-BRCA prognostic (Tan 2026) integrated from abstracts only — full PDFs not re-verified."
literature-checked-through: 2026-05-08
---

# PhenoAge (2018)

A second-generation biological aging clock trained to predict **mortality** rather than chronological age. PhenoAge is a composite of two components: (1) a "PhenoAge" clinical score derived from nine routine blood biomarkers using NHANES III data, and (2) a 513-CpG DNA methylation predictor calibrated against that clinical score. The clock predicts all-cause mortality, morbidity, and physical function with stronger effect sizes than the first-generation Horvath and Hannum clocks, because it was designed to capture biological fitness relevant to death rather than calendar time [^levine2018].

## Identity and Origin

- **Primary citation:** Levine ME et al. (2018) *Aging* 10(4):573–591 — doi:10.18632/aging.101414
- **Archive status:** local PDF available —  (green OA, PMC5940111)
- **Citation count:** ~3,207 (as of 2026-05-05; 100th citation percentile in archive)
- **Clock type:** Second-generation (mortality-trained)
- **First author:** Morgan E. Levine (UCLA, Department of Human Genetics, at time of publication), co-senior author Steve Horvath (UCLA)
- **Input modality:** Nine clinical biomarkers (clinical PhenoAge) + Illumina DNAm array (27k, 450k, EPIC; DNAm PhenoAge)

## Two-Stage Architecture

PhenoAge is a two-stage construct, which is important for interpreting what it measures:

**Stage 1: Clinical PhenoAge** — A composite of 9 routine clinical biomarkers, trained in NHANES III (n=9,926 adults) using a Cox penalized regression model (regressing aging-related mortality hazard on 42 candidate clinical markers + chronological age via 10-fold cross-validation), then combined in a Gompertz mortality model to produce a phenotypic age score in years. The nine selected biomarkers (Table 1, Levine 2018):

| Biomarker | Units | Direction with biological age |
|---|---|---|
| Albumin | g/L | Decreases |
| Creatinine | umol/L | Increases |
| Glucose (serum) | mmol/L | Increases |
| CRP (log) | mg/dL | Increases |
| Lymphocyte % | % | Decreases |
| Mean (red) cell volume (MCV) | fL | Increases |
| Red cell distribution width (RDW) | % | Increases |
| Alkaline phosphatase | U/L | Increases |
| White blood cell count | 1000 cells/uL | Increases |

**Stage 2: DNAm PhenoAge** — A 513-CpG DNA methylation predictor trained to recapitulate clinical PhenoAge using blood DNAm data from **InCHIANTI only** (n=456 participants at two time-points), using elastic net regression. The DNAm proxy enables biological age estimation from blood-only without full clinical chemistry panels. WHI (two samples), FHS, NAS, and JHS were used as **independent validation** cohorts, not as training data.

## Training Details

| Parameter | Value |
|---|---|
| Stage 1 training cohort | NHANES III: n=9,926 adults with clinical labs + mortality follow-up |
| Stage 2 training cohort | InCHIANTI: n=456 participants at two time-points (ages 21–100yr) |
| Stage 2 validation cohorts | WHI (n=2,016 + n=2,191), FHS (n=2,553), NAS (n=657), JHS (n=1,747) |
| Algorithm | Cox penalized regression → Gompertz mortality model (Stage 1); elastic-net regression (Stage 2) |
| Output unit | Predicted biological age in years |

## Performance Characteristics

### Mortality hazard ratio

**Clinical PhenoAge** predicts all-cause mortality with **HR=1.09 per year** of phenotypic age (p=3.8E-49, n=6,209 NHANES IV national representative sample; Table 2, Levine 2018) [^levine2018]. **DNAm PhenoAge** predicts all-cause mortality with **Meta(FE) HR=1.045 [95% CI 1.039–1.051], Meta p=7.9E-47** across five independent large-scale validation cohorts (WHI×2, FHS, NAS, JHS; Figure 2, Levine 2018), after adjustment for chronological age [^levine2018]. This is equivalent to each extra year of DNAm biological age above chronological age being associated with a 4.5% higher mortality hazard. DNAm PhenoAge outperforms Horvath (Meta HR=1.017) and Hannum (Meta HR=1.041) clocks in head-to-head mortality prediction. #gap/needs-replication — the HR was derived in a single publication's five-cohort meta-analysis; independent replication in additional cohorts would strengthen the estimate.

### Morbidity and functional associations

PhenoAge acceleration is associated with [^levine2018]:
- Higher risk of diabetes, cancer, heart disease, frailty, and functional impairment
- Elevated inflammation markers (CRP, IL-6) independent of the input CRP
- Physical performance decline in longitudinal follow-up

### Comparison to Horvath clock

| Feature | PhenoAge 2018 | Horvath 2013 |
|---|---|---|
| Training target | Mortality (Cox penalized regression → Gompertz clinical score → elastic net DNAm) | Chronological age |
| Mortality prediction | Stronger: Meta HR=1.045 | Moderate: Meta HR=1.017 (Levine 2018 head-to-head) |
| Tissue | Blood (trained in InCHIANTI; validated in blood cohorts) | Pan-tissue (51 types) |
| CpG count | 513 | 353 |
| Intervention-responsive (CR) | No (Waziry 2023) | No (Waziry 2023) |
| Intervention-responsive (omega-3) | Yes (Bischoff-Ferrari 2025, DO-HEALTH) | Not assessed in DO-HEALTH |

## Intervention-Responsive Evidence

### Null signal: CALERIE-2 caloric restriction

In Waziry 2023 (randomized N=220; DNAm analysis sample n=197 [128 CR, 69 AL]; 2-year ~12% achieved CR) **PhenoAge showed no significant slowing**: 12-month d=−0.03 (95% CI −0.19, 0.12), 24-month d=0.05 (95% CI −0.11, 0.20), P>0.50 for both [^waziry2023]. GrimAge was similarly null. PhenoAge and GrimAge were the pre-registered primary clock endpoints for the CALERIE-2 epigenetic analysis. The null result on PhenoAge — despite a significant effect on DunedinPACE (24-month d=−0.25 [−0.41, −0.09], P<0.003) — is one of the most important findings in the intervention-clock literature. See [[biomarkers/dunedinpace-2022]] for the positive DunedinPACE signal and [[frameworks/biological-age-measurement]] for interpretation of the discordance.

Interpretation is contested: the CALERIE-2 null on PhenoAge could mean (a) CR does not slow the biological aging processes captured by PhenoAge's 9 clinical biomarkers, (b) 12% CR for 2 years is insufficient to move mortality-associated biomarkers, or (c) PhenoAge is less sensitive to the acute metabolic effects of CR than DunedinPACE. The DO-HEALTH finding (omega-3 significantly moved PhenoAge) adds a fourth possibility: (d) PhenoAge is responsive to specific nutritional interventions (omega-3) but not caloric restriction per se, suggesting the 9-biomarker composition of clinical PhenoAge is sensitive to inflammatory/nutritional status rather than caloric or metabolic load. None of these interpretations has been ruled out. #gap/contradictory-evidence

### Positive signal: DO-HEALTH Bio-Age trial (omega-3, vitamin D, exercise)

The DO-HEALTH Bio-Age trial (Bischoff-Ferrari et al. 2025, *Nature Aging*; n=777 Swiss subset of the 2,157-participant DO-HEALTH RCT; adults aged 70+; 3-year follow-up) found [^bischoffferrari2025]:

- **Omega-3 alone** (1 g/day) significantly slowed DNAm PhenoAge: d=−0.16 (95% CI −0.02 to −0.30), corresponding to ~2.9–3.8 months of age retardation over 3 years.
- **All three treatments combined** (omega-3 + vitamin D + SHEP exercise) showed **additive PhenoAge benefits** with d ranging from −0.24 to −0.32.
- Vitamin D alone and SHEP exercise alone were not significantly associated with PhenoAge changes individually.
- **No significant effect on GrimAge** from any intervention arm.
- DunedinPACE: omega-3 alone d=−0.17 (−0.04 to −0.31).

This is a positive signal specifically for PhenoAge (not GrimAge), driven by omega-3, with additive effects from the combined intervention. It contrasts with the CALERIE-2 null result (CR had no effect on PhenoAge), suggesting PhenoAge may respond to nutritional but not caloric-restriction interventions in this timeframe. #gap/needs-replication — DO-HEALTH was a post-hoc analysis in the Swiss subsample; generalizability to other populations and longer follow-up is unknown.

### Null signal: METFORAGING metformin pilot (2026)

The METFORAGING pilot RCT (Marcelo-Calvo 2026; EClinicalMedicine; n=40 randomized, n=35 per-protocol; 96-week 850 mg metformin BID vs placebo in non-diabetic older PLWH ≥50 yr) used **PhenoAge EAA change as the primary endpoint** [^metforaging2026]. The adjusted between-group difference at week 96 was **−1.02 years (95% CI −5.30, 3.26; P=0.627)** — null. The trial measured 11 epigenetic clocks (Horvath, Hannum, PhenoAge, GrimAge V2 + 4 PC variants, DunedinPACE, DNAmTL); all secondary clocks were also NS. Enrollment closed at 40 (target 60) due to slow recruitment, leaving the trial underpowered for the prespecified effect size. This is the first RCT to use PhenoAge EAA as a primary endpoint for metformin and the first to test metformin against epigenetic-clock outcomes in a controlled design; the result is non-informative for population-level metformin geroprotection but adds PhenoAge to the list of clocks not moved by 2-year metformin in this PLWH cohort. #gap/needs-replication

### Cancer-association: DO-HEALTH 3-year follow-up (Rösler 2026)

In a 3-year DO-HEALTH follow-up of generally healthy adults aged 70+ (n=2,152 trial; biological-aging subsample n=777), participants who developed incident invasive cancer showed **3.52–6.77 months greater baseline biological-age acceleration** measured by Horvath, Hannum, and PhenoAge clocks at the trial start [^rosler2026]. PhenoAge EAA was a measurable predictor of incident cancer in this nominally healthy older cohort, supporting its utility as a forward-looking morbidity biomarker.

### Prognostic value in TCGA breast cancer (Tan 2026)

In TCGA-BRCA tumor methylomes (n=781), **PhenoAge and GrimAge2 stratified survival outcomes** while first-generation Horvath and Hannum did not [^tan2026]. In multivariable Cox models adjusted for menopausal status, age, receptor subtype, stage, and ancestry, **only GrimAge1 retained independent prognostic value** beyond established clinicopathologic factors. PhenoAge separated outcomes in unadjusted analysis but not after adjustment. This is consistent with PhenoAge contributing to but not exceeding clinicopathologic prediction.

### Fitzgerald 2021 TREAT trial

Fitzgerald 2021 (the diet-and-lifestyle pilot RCT described in [[biomarkers/horvath-clock-2013]]) showed a ~3.2-year Horvath age reduction over 8 weeks. PhenoAge was not the primary endpoint in that study. #gap/unsourced — whether PhenoAge was assessed in Fitzgerald 2021 has not been verified against the full PDF; flag for next verification pass.

## Mendelian Randomization Status

Schooling 2025 (see [[biomarkers/horvath-clock-2013]] footnotes) included PhenoAge GWAS instruments in a Mendelian randomization analysis and found **null effects on lifespan** for genetically-predicted PhenoAge acceleration (UK Biobank, n up to ~415,000 fathers / ~412,000 mothers). This complicates the mortality-training rationale — the clock was explicitly trained to predict mortality, yet genetically-elevated PhenoAge does not appear to causally shorten lifespan in MR. Possible explanations: (a) the GWAS instruments are too weak, (b) CpG-level genetic instruments do not capture the downstream biology that PhenoAge tracks at the clinical level, (c) the mortality association is reverse-causal (accumulated biological burden drives clock elevation, which predicts further mortality, but the clock itself is not causal). #gap/contradictory-evidence

## Strengths Over First-Generation Clocks

1. **Interpretable clinical biomarkers** — The 9-biomarker clinical stage allows biological interpretation of which organ systems drive PhenoAge acceleration; the DNAm clock provides a more accessible proxy.
2. **Stronger mortality HR** — Better calibrated to what clinicians ultimately care about (death and disease).
3. **Actionable components** — Some of the 9 input biomarkers (albumin, glucose, CRP, WBC) are clinically modifiable, giving PhenoAge a direct line to known health behaviors.
4. **Multi-cohort validation** — Trained and validated in multiple independent human cohorts.

## Limitations and Open Critiques

1. **Circular mortality training** — PhenoAge is trained to predict mortality using biomarkers already known to predict mortality. It may therefore be a sophisticated re-packaging of existing clinical risk scores rather than a novel biological insight. Comparison with simple clinical frailty models is needed. #gap/contradictory-evidence

2. **CALERIE-2 null, DO-HEALTH positive** — CR (CALERIE-2) showed no PhenoAge response; omega-3 supplementation (DO-HEALTH Bio-Age) did. The modality-specificity of PhenoAge's intervention-responsiveness is now an active empirical question. PhenoAge may not be a useful endpoint for caloric restriction trials but could be for anti-inflammatory/nutritional trials.

3. **Mendelian randomization null** — Challenges the causal interpretation (see above).

4. **Blood-only** — Unlike Horvath's pan-tissue clock, PhenoAge was calibrated in blood and validated predominantly in blood. Cross-tissue use is not established.

5. **Technical noise** — Subject to the same batch-effect and normalization reliability issues as all DNAm clocks (Higgins-Chen 2022; see [[biomarkers/horvath-clock-2013]] and [[frameworks/biological-age-measurement]]).

6. **The 9-biomarker clinical PhenoAge and the 513-CpG DNAm PhenoAge are not equivalent** — They are correlated but distinct constructs. Interventional findings from clinical PhenoAge cannot be assumed to extend to DNAm PhenoAge and vice versa.

## Cross-references

- [[biomarkers/horvath-clock-2013]] — first-generation clock; training comparison
- [[biomarkers/grimage-2019]] — sister second-generation mortality-trained clock; stronger mortality signal
- [[biomarkers/dunedinpace-2022]] — third-generation clock; responded to CR where PhenoAge did not
- [[biomarkers/frailty-index]] — related clinical composite; fewer molecular assumptions
- [[hallmarks/epigenetic-alterations]] (verified) — hallmark context
- [[interventions/lifestyle/caloric-restriction]] (verified) — CALERIE-2 null result on PhenoAge
- [[frameworks/biological-age-measurement]] — cross-clock comparison MOC
- [[studies/waziry-2023-calerie-epigenetic-clock]] — primary CALERIE-2 clock study page (verified R27)
- Bischoff-Ferrari 2025 doi:10.1038/s43587-024-00793-y — DO-HEALTH Bio-Age primary source (omega-3 PhenoAge positive signal); no dedicated study page yet

## Footnotes

[^levine2018]: doi:10.18632/aging.101414 · Stage 1: n=9,926 NHANES III (clinical PhenoAge, Cox penalized regression → Gompertz model); Stage 2: n=456 InCHIANTI (DNAm PhenoAge training, elastic net); validation: WHI×2, FHS, NAS, JHS · observational + longitudinal mortality follow-up · Clinical PhenoAge HR=1.09/yr all-cause mortality (NHANES IV, p=3.8E-49); DNAm PhenoAge Meta HR=1.045 [1.039–1.051] (5-cohort meta, p=7.9E-47) · model: human adults, whole blood · Aging 2018 · local PDF:  (local PDF)

[^waziry2023]: [[studies/waziry-2023-calerie-epigenetic-clock]] · randomized N=220 (145 CR, 75 AL); DNAm analysis sample n=197 (128 CR, 69 AL) · rct · model: healthy non-obese human adults (CALERIE Phase 2, 2-year ~12% achieved CR, mean 11.9%) · doi:10.1038/s43587-022-00357-y · local PDF available · PhenoAge: d=−0.03 at 12-mo, d=0.05 at 24-mo (both P>0.40); GrimAge: d=−0.04 at 12-mo, d=0.05 at 24-mo (both P>0.40); DunedinPACE: d=−0.29 at 12-mo, d=−0.25 [95% CI −0.41, −0.09] at 24-mo, P<0.003

[^bischoffferrari2025]: doi:10.1038/s43587-024-00793-y · n=777 (Swiss DO-HEALTH Bio-Age subsample of 2,157-participant DO-HEALTH RCT; adults ≥70 yr, 5 European countries) · rct (2×2×2 factorial: vitamin D 2,000 IU/d vs placebo; omega-3 1 g/d vs placebo; SHEP home exercise vs no exercise; 3-year follow-up) · Omega-3 alone: PhenoAge d=−0.16 (95% CI −0.02 to −0.30); all three treatments: additive PhenoAge d=−0.24 to −0.32; GrimAge: NS for all arms · Nature Aging 2025 · local PDF:  (local PDF)

[^metforaging2026]: doi:10.1016/j.eclinm.2026.103874 · METFORAGING · Marcelo-Calvo C et al. · EClinicalMedicine 2026 (May) · n=40 randomized (n=35 per-protocol; 17 metformin, 18 placebo); rct, double-blind, 96-week 850 mg metformin BID vs placebo · model: non-diabetic PLWH ≥50 yr, virologically suppressed · primary endpoint: PhenoAge EAA change at 96 wk = −1.02 yr (95% CI −5.30, 3.26; P=0.627); GrimAge V2 + 4 PC variants + Horvath + Hannum + DunedinPACE + DNAmTL all NS · trial closed at 40/60 due to slow recruitment · EudraCT 2021-003299-15

[^rosler2026]: doi:10.1038/s41514-026-00360-2 · Rösler W et al. · NPJ Aging 2026 · DO-HEALTH 3-year follow-up; n=2,152 trial / n=777 biological-aging subsample · rct/observational secondary analysis (incident invasive cancer ascertained) · participants with incident cancer showed 3.52–6.77 months greater baseline biological-age acceleration by Horvath, Hannum, and PhenoAge; STS and grip-strength decline also greater · model: generally healthy adults ≥70 yr · NCT01745263

[^tan2026]: doi:10.1186/s13148-026-02102-3 · Tan X et al. · Clin Epigenetics 2026 · TCGA-BRCA n=781 tumor methylomes · observational (Cox proportional hazards, multivariable) · 7 metrics tested: Horvath, Hannum, PhenoAge, GrimAge1, GrimAge2, epiTOC/pcgtAge, DNAmTL; first-generation clocks did not separate survival; PhenoAge and GrimAge2 stratified outcomes; only GrimAge1 retained independent prognostic value after multivariable adjustment · model: human breast tumor tissue
