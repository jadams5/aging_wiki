---
type: biomarker
aliases: [DunedinPACE, DunedinPoAm, pace of aging, Belsky 2022, aging pace clock]
modality: dna-methylation
unit: rate
training-cohort: "Belsky 2022: Dunedin Study longitudinal cohort, N=1037 total cohort (born 1972–1973, Dunedin New Zealand); DunedinPACE analysis subsample n=817 (those with Pace of Aging measured at age 45)"
n-cpgs-or-features: 173
training-target: pace
calibration-tissues: ["whole-blood"]
test-retest-icc: 0.96
human-evidence-level: strong
mendelian-randomization: not-tested
intervention-responsive: yes
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Belsky 2022 (eLife) and Waziry 2023 (Nature Aging) primary PDFs read end-to-end; all quantitative claims cross-checked. Canonical-database identity fields (no PubChem/UniProt applicable for a biomarker page) not applicable. The Waziry 2023 pre-registration status was carefully verified: the CALERIE trial is pre-registered (NCT00427193) but the DNAm analysis is described in the paper's abstract as a 'post hoc analysis'; the DunedinPACE endpoint was primary within that sub-study but the sub-study itself was not independently pre-registered. R34 recency refresh 2026-05-08: METFORAGING (Marcelo-Calvo 2026), SLIM LIVER (Corley 2026), RAPA-EX-01 (Stanfield 2026), and Beydoun 2026 frailty-mortality mediation integrated from abstracts only — full PDFs not re-verified."
literature-checked-through: 2026-05-08
---


# DunedinPACE (2022)

The only DNA methylation clock trained to measure **rate of biological aging** rather than absolute biological age. DunedinPACE (Pace of Aging Computed from the Epigenome) outputs a dimensionless rate — "biological years per calendar year" — where 1.0 indicates aging at an average rate, >1.0 faster, and <1.0 slower than the training cohort mean. It is trained on 20-year longitudinal physiological data from a single birth cohort (the Dunedin Study) and is currently the **only DNAm clock that has shown a statistically significant response to a caloric-restriction intervention in a Phase 2 RCT** (CALERIE-2 post hoc DNAm analysis, Waziry 2023) [^waziry2023]. This makes it the preferred endpoint for aging-intervention trials as of 2026.

## Identity and Origin

- **Primary citation:** Belsky DW et al. (2022) *eLife* 11:e73420 — doi:10.7554/eLife.73420
- **Archive status:** local PDF available; gold OA (PMC open access)
- **Citation count:** ~798 (as of 2026-05-05; 100th citation percentile in archive)
- **Clock type:** Third-generation (pace-of-aging trained)
- **First author:** Daniel W. Belsky (Columbia University)
- **Training cohort:** Dunedin Study (born 1972–73, Dunedin New Zealand; N=1037 total cohort; n=817 analysis subsample with Pace of Aging measured at age 45 used to develop DunedinPACE)
- **Input modality:** Illumina EPIC array (blood)
- **Output units:** A rate (biological years per calendar year), not an age in years

## The Conceptual Innovation: Measuring Rate, Not State

The key distinction from all earlier clocks:

| Clock class | What it measures | Training approach |
|---|---|---|
| Horvath, Hannum | Absolute biological age (state) | Cross-sectional: predict chronological age |
| GrimAge, PhenoAge | Biological age calibrated to mortality | Cross-sectional: predict mortality risk |
| DunedinPACE | Rate of aging (how fast you are aging now) | Longitudinal: predict rate of change in 19 biomarkers over 20 years |

DunedinPACE was trained using a composite of **19 organ-system biomarkers** measured repeatedly over 20 years in the Dunedin cohort:

| System | Biomarkers included |
|---|---|
| Metabolic | BMI, waist-hip ratio, HbA1c, total cholesterol, HDL-C, triglycerides |
| Cardiovascular | Blood pressure (systolic + diastolic), cardiorespiratory fitness (VO2max) |
| Renal | Creatinine, cystatin C (GFR) |
| Liver | AST, ALT, γ-GT |
| Pulmonary | FEV1/FVC ratio |
| Immune | CRP, white blood cell count |
| Neurocognitive | Cognitive function (WAIS) |
| Dental | Periodontal disease score |

The training target was the rate-of-change across all 19 biomarkers simultaneously — not a single-timepoint snapshot. This makes DunedinPACE conceptually closer to measuring the **aging process in motion** rather than its cumulative residue.

## Training Details

| Parameter | Value |
|---|---|
| Cohort | Dunedin Study: N=1037 total (born 1972–73); n=817 analysis subsample (those with Pace of Aging measured at age 45), followed at ages 26, 32, 38, 45 |
| Longitudinal biomarker measurements | 19 biomarkers across 20 years (age 26 to age 45) |
| Rate-of-change composite | Pace-of-aging score = rate of simultaneous deterioration across all 19 systems |
| Algorithm | Elastic-net on 173 CpGs to predict pace-of-aging score |
| Test-retest ICC | 0.96 (95% CI 0.93–0.98; Lehne replicate dataset; substantially higher than conventional clocks) |

The Dunedin cohort is unusual: it is a birth cohort where everyone was born in the same year in the same city, providing unusually clean longitudinal data with minimal cohort effects. The tradeoff is that the training cohort was relatively young (up to age 45), so DunedinPACE is not formally validated in very old adults. #gap/needs-replication — validation in elderly populations is needed.

## Performance Characteristics

### Test-retest ICC

DunedinPACE achieves an ICC of 0.96 (95% CI 0.93–0.98) for test-retest reliability in 36 replicate adult blood-sample Illumina 450k datasets (Lehne et al., GSE55763) [^belsky2022]. A second analysis in 28 replicate Illumina EPIC-array datasets yielded ICC = 0.97 (95% CI 0.94–0.98). This substantially exceeds the ICCs of conventional clocks (Horvath, PhenoAge, GrimAge) before PC-based correction, addressing a key concern raised by Higgins-Chen 2022 (doi:10.1038/s43587-022-00248-2). See [[frameworks/biological-age-measurement]] for the noise critique and how PC clocks compare.

### Prediction of functional decline

Higher DunedinPACE at age 45 predicts [^belsky2022]:
- Faster gait speed decline
- Greater grip strength loss
- Lower cognitive test scores
- Worse self-reported health
- Higher subjective age (appearing older to external raters in photographs)
- Elevated clinician-rated biological age assessment

The associations hold after adjustment for childhood socioeconomic status and IQ — suggesting DunedinPACE captures biologically relevant variation independent of early-life confounders.

### Mortality prediction

DunedinPACE predicts mortality in prospective cohort studies with HRs broadly similar to second-generation clocks. Since the training cohort was young (max age 45), mortality data are limited; the mortality signal comes from validation in older cohorts. #gap/needs-replication — mortality HR from DunedinPACE in elderly cohorts needs larger-scale confirmation.

## Intervention-Responsive Evidence

### Positive signal: CALERIE-2 caloric restriction (primary positive result — most important finding)

In the Waziry 2023 analysis of CALERIE-2 (n=197 analysis sample; 128 CR, 69 AL; randomized N=220; 2-year caloric restriction vs ad libitum control), **DunedinPACE was significantly slowed** by CR [^waziry2023]:

- 12-month effect: d = −0.29 (95% CI −0.45 to −0.13)
- 24-month effect: d = −0.25 (95% CI −0.41 to −0.09), p < 0.003
- Calendar-year equivalence: approximately 2–3% slowing per year (i.e., CR subjects were aging ~2–3% more slowly than controls per calendar year)
- Analysis status: Waziry 2023 describes this as a "post hoc analysis" of the CALERIE trial (NCT00427193); DunedinPACE was specified as a primary endpoint of this DNAm analysis alongside PhenoAge and GrimAge, but the DNAm sub-study was not independently pre-registered

The three other clocks in the same study (Horvath 2013, PhenoAge, GrimAge) showed **no significant change** [^waziry2023].

This is the single most important result in the intervention-clock literature as of 2026:
1. It is a primary endpoint from a post hoc DNAm analysis of CALERIE, a Phase 2 RCT (NCT00427193; the trial itself was pre-registered, though the DNAm sub-study was not independently pre-registered)
2. It shows a significant effect in a well-powered study (n=197 analysis sample)
3. The effect is selective — only DunedinPACE responded, not the other clocks
4. The biological interpretation is consistent — CR, which acutely reduces caloric flux and downstream metabolic stress, would plausibly slow the rate-of-aging as measured by DunedinPACE's multi-system deterioration composite

| Dimension | Status |
|---|---|
| Did DunedinPACE slow with 2-year CR in humans? | Yes (12-mo d=−0.29; 24-mo d=−0.25, p<0.003; Waziry 2023) |
| Did other clocks slow with CR? | No (Horvath, PhenoAge, GrimAge all NS) |
| Analysis pre-registered? | Partially — CALERIE trial pre-registered (NCT00427193); DNAm sub-study described as "post hoc analysis"; DunedinPACE was a primary endpoint of that sub-study |
| Independently replicated? | Not yet as of 2026-05-05 |
| Does slowed DunedinPACE predict lifespan extension? | Unknown |

#gap/needs-replication — single trial. The CALERIE-2 finding has not yet been independently replicated in a second CR cohort.

### Null/negative signal: interpretation of DunedinPACE-only response

The clock-selective result raises an interpretive challenge: if CR genuinely slows biological aging, why didn't GrimAge and PhenoAge also respond? Three main hypotheses:

1. **DunedinPACE is more sensitive** — It measures metabolic-system dynamics that CR affects most acutely; GrimAge/PhenoAge track protein-level disease risk markers that require longer time or deeper CR to shift.
2. **DunedinPACE is measuring caloric flux, not aging** — CR-induced caloric reduction directly alters the metabolic inputs to DunedinPACE's multi-system biomarkers (BMI, HbA1c, triglycerides); the clock may be partly a proxy for metabolic state rather than true aging rate. If so, reversing the CR would reverse the clock change — not equivalent to slowing aging.
3. **The clocks are incommensurable** — They measure different biological dimensions; the CR finding means "CR slows DunedinPACE-aging" not "CR slows all biological aging." See [[frameworks/biological-age-measurement]].

This ambiguity has not been resolved as of 2026. #gap/contradictory-evidence

### Null signal: RAPA-EX-01 rapamycin + exercise (2026)

In the Stanfield 2026 RAPA-EX-01 randomized trial of rapamycin + exercise vs exercise-alone in older adults, **DunedinPACE was a secondary outcome and did not show a significant treatment effect** [^stanfield2026]. PCGrimAge was also tested as a secondary outcome, also null. This is the first powered intervention RCT to test a rapamycin-class geroprotector against DunedinPACE; the null tempers expectations that pharmacological mTOR inhibition will produce detectable DunedinPACE slowing at trial-feasible doses and durations. See [[studies/stanfield-2026-rapa-ex-01]].

### Null signal: METFORAGING metformin pilot (2026)

The METFORAGING pilot RCT (Marcelo-Calvo 2026; n=40 randomized; n=35 per-protocol; 96-week 850 mg metformin BID vs placebo in non-diabetic older PLWH ≥50 yr) tested 11 epigenetic clocks including DunedinPACE [^metforaging2026]. **No significant between-group difference** was observed for DunedinPACE or any other tested clock at 96 weeks. The trial closed at 40 participants (target 60) for slow recruitment, so the null is non-informative for population-level metformin geroprotection.

### Subgroup positive signal: SLIM LIVER semaglutide pilot (2026)

In a 24-week single-arm post hoc analysis of 41 PLWH with MASLD on semaglutide 1.0 mg/week (Corley 2026), the population-level **median DunedinPACE change was +0.018** (IQR −0.023 to +0.053) — i.e., no slowing on average [^slimliver2026]. However, **41% of participants showed decreased DunedinPACE**, and this responder subgroup had significantly greater liver fat reduction (P=0.024) and a non-significant trend toward improved gait speed (P=0.081). This is suggestive of inter-individual heterogeneity in DunedinPACE responsiveness to GLP-1 receptor agonists; whether the responder phenotype reflects a genuine biological signal vs measurement noise requires powered follow-up.

### Mediation of frailty-mortality association (2026)

A multi-cohort mediation analysis (Beydoun 2026; NHANES + HRS + HANDLS, US adults) found that **DunedinPoAm (DunedinPACE precursor) mediated 17% of the frailty-mortality association in NHANES (P=0.006) and 9% in HRS (P=0.040)** alongside GrimAge (33%/16%) [^beydoun2026]. Other clocks (Horvath, Hannum, PhenoAge) showed limited mediation. This places DunedinPACE second only to GrimAge as a mediator of the frailty-mortality pathway in observational US data — consistent with the clock's design as a longitudinal aging-rate measure.

## MR and Causal Status

MR analysis using DunedinPACE-specific genetic instruments has not been published as of 2026-05-05. The question of whether genetically elevated DunedinPACE causally shortens lifespan remains open. Given the null MR results for other clocks (Schooling 2025), the prior here is cautious. #gap/needs-replication

## Limitations and Open Critiques

1. **Young training cohort** — The Dunedin Study covers ages 26–45 only. Extrapolation to individuals aged 60+ (who are the target for most anti-aging interventions) is uncertain. The clock may behave differently or lose calibration in elderly populations.

2. **Single birth cohort** — Training in one cohort from one city (Dunedin, New Zealand) risks cohort-specific calibration. Ethnicity and socioeconomic context could affect the biomarker-composite pace-of-aging score.

3. **Interpretation of CR response** — As discussed above, the CR signal could partly reflect direct metabolic confounding rather than slowed aging. Without a re-feeding reversal study, the durability of the DunedinPACE slowing is unknown.

4. **Rate vs state** — DunedinPACE tells you how fast you're aging now, not how old you biologically are. It cannot answer "am I biologically 55 or 65?" It answers "am I aging at 1.1x or 0.9x speed?" These are different and complementary questions.

5. **No lifespan connection** — The rate-slowing with CR has not been connected to any lifespan or healthspan endpoint in humans. It is an intermediate biomarker signal, not a clinical outcome.

6. **Single-clock dependency** — The CALERIE-2 finding depends on one clock responding; it does not establish that CR "slows aging" in the broader sense. The field needs cross-clock concordance and mechanistic explanation.

## Cross-references

- [[biomarkers/horvath-clock-2013]] — first-generation clock; null in CALERIE-2
- [[biomarkers/hannum-clock-2013]] — first-generation clock; null in CALERIE-2
- [[biomarkers/phenoage-2018]] — mortality-trained clock; null in CALERIE-2
- [[biomarkers/grimage-2019]] — mortality-trained clock; null in CALERIE-2
- [[interventions/lifestyle/caloric-restriction]] (verified) — CR intervention page; references Waziry 2023
- [[hallmarks/epigenetic-alterations]] (verified) — hallmark context; clock-divergence discussed
- [[hypotheses/information-theory-of-aging]] (verified) — CALERIE-2 DunedinPACE result discussed as key evidence
- [[frameworks/biological-age-measurement]] — cross-clock comparison MOC
- [[studies/waziry-2023-calerie-epigenetic-clock]] — primary CALERIE-2 clock study page (verified R27)

## Footnotes

[^belsky2022]: doi:10.7554/eLife.73420 · Dunedin Study: N=1037 total cohort (born 1972–73, New Zealand); n=817 analysis subsample with Pace of Aging measured at age 45 · longitudinal observational (20-year multi-biomarker follow-up across 4 timepoints: ages 26, 32, 38, 45; DNAm at age 45) · 173 CpGs selected by elastic-net · test-retest ICC 0.96 (95% CI 0.93–0.98; Lehne replicate dataset) · pace output: biological years per calendar year · eLife 2022 · archive: local PDF available (gold OA)

[^waziry2023]: [[studies/waziry-2023-calerie-epigenetic-clock]] · n=197 analysis sample (128 CR, 69 AL; from 220 randomized) · post hoc DNAm analysis of CALERIE Phase 2 RCT (NCT00427193; pre-registered trial; 2-year 25% CR target; ~12% achieved) · doi:10.1038/s43587-022-00357-y · local PDF available · DunedinPACE: 12-mo d=−0.29 (95% CI −0.45, −0.13); 24-mo d=−0.25 (95% CI −0.41, −0.09) p<0.003; Horvath 2013: NS; PhenoAge: NS; GrimAge: NS · Nature Aging 2023

[^stanfield2026]: [[studies/stanfield-2026-rapa-ex-01]] · rct (RAPA-EX-01: rapamycin + exercise vs exercise-alone in older adults) · J Cachexia Sarcopenia Muscle 2026 · doi:10.1002/jcsm.70274 · DunedinPACE and PCGrimAge both used as secondary outcomes; no significant treatment effect on either; first powered RCT testing rapamycin-class geroprotector against DunedinPACE

[^metforaging2026]: doi:10.1016/j.eclinm.2026.103874 · METFORAGING · Marcelo-Calvo C et al. · EClinicalMedicine 2026 (May) · n=40 randomized, n=35 per-protocol; 96-week 850 mg metformin BID vs placebo · rct (single-centre, double-blind) · model: non-diabetic PLWH ≥50 yr · DunedinPACE: NS between-group; PhenoAge primary: −1.02 yr (95% CI −5.30, 3.26; P=0.627); all 11 clocks NS · trial closed at 40/60 due to slow recruitment

[^slimliver2026]: doi:10.1038/s41514-026-00383-9 · Corley MJ et al. · NPJ Aging 2026 · n=41 PLWH with MASLD; 24-week semaglutide 1.0 mg/week single-arm post hoc analysis (ACTG A5371; NCT04216589) · pilot non-randomized · DunedinPACE median +0.018 (IQR −0.023 to +0.053); 41% with decreased DunedinPACE had greater liver-fat reduction (P=0.024) and trend to improved gait speed (P=0.081); PCGrimAge median +0.54 yr · model: humans

[^beydoun2026]: doi:10.1186/s12916-026-04866-0 · Beydoun MA et al. · BMC Med 2026 · multi-cohort mediation analysis (NHANES 1999–2002, HRS 2016, HANDLS 2004–2009; mortality follow-up 2019–2022) · DunedinPoAm mediated 17% of frailty-mortality association in NHANES (P=0.006), 9% in HRS (P=0.040); GrimAge mediated 33% (NHANES) / 16% (HRS); other clocks (Horvath, Hannum, PhenoAge) showed limited mediation · model: US adults · counterfactual four-way decomposition
