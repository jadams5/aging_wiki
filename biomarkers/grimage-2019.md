---
type: biomarker
aliases: [GrimAge, GrimAge v1, Lu 2019, DNA methylation GrimAge, mortality clock]
modality: dna-methylation
unit: years
training-cohort: "Lu 2019: FHS training set (n=1,731 individuals from 622 pedigrees, 70% split); validated in FHS test set (n=625), WHI BA23 (n=2,107), WHI EMPC (n=1,972), JHS (n=1,747), InCHIANTI (n=924 from 484 individuals, 1–2 longitudinal measures) — total 6,935 individuals / 7,375 arrays across 5 cohorts"
n-cpgs-or-features: 1030
training-target: mortality
calibration-tissues: ["whole-blood"]
test-retest-icc: null
human-evidence-level: strong
mendelian-randomization: partial
intervention-responsive: partial
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Lu 2019 primary source PDF and Lu 2022 GrimAge2 PDF both verified end-to-end; Waziry 2023 CALERIE-2 claims cross-checked against caloric-restriction.md footnote (no local PDF re-read — study page not yet present); Schooling 2025 MR claim and canonical-DB identity fields not independently re-verified. R34 recency refresh 2026-05-08: METFORAGING (Marcelo-Calvo 2026), SLIM LIVER (Corley 2026), RAPA-EX-01 (Stanfield 2026), DO-HEALTH cancer follow-up (Rösler 2026), and TCGA-BRCA prognostic (Tan 2026) integrated from abstracts only — full PDFs not re-verified."
literature-checked-through: 2026-05-08
---


# GrimAge (2019)

The current gold standard for mortality prediction among DNA methylation clocks. GrimAge is a composite predictor built from DNAm-based surrogates for seven plasma proteins plus a smoking-pack-years DNAm estimator, all trained against time-to-death as the primary endpoint. It consistently achieves the most statistically significant (highest meta-analysis P-value) association with all-cause mortality among compared DNAm clocks across independent validation cohorts, outperforming Horvath, Hannum, and PhenoAge clocks [^lu2019]. Its name is intentional — it was designed to predict grimly relevant outcomes. An updated GrimAge2 was published in 2022 with improved calibration and two additional plasma protein surrogates [^lu2022].

## Identity and Origin

- **Primary citation (GrimAge v1):** Lu AT et al. (2019) *Aging* 11(2):303–327 — doi:10.18632/aging.101684
- **Archive status (v1):** local PDF available (PMC6366976, downloaded 2026-05-05)
- **Update (GrimAge2):** Lu AT et al. (2022) *Aging* 14(23):9484–9549 — doi:10.18632/aging.204434
- **Archive status (GrimAge2):** local PDF available
- **Citation count (v1):** ~2,358 (as of 2026-05-05; 100th citation percentile in archive)
- **Clock type:** Second-generation (mortality-trained, composite plasma-protein surrogates)
- **First author:** Ake T. Lu (Horvath laboratory, UCLA; affiliation at publication time)
- **Input modality:** Illumina Infinium HumanMethylation450K BeadChip (blood); analysis restricted to 450,161 CpGs present on both 450K and EPIC arrays. The DNAm surrogate architecture means the output integrates multiple biological signals through 1,030 unique CpGs
- **Training data:** FHS Offspring Cohort — 2,356 individuals from 888 pedigrees; 70% (N=1,731 from 622 pedigrees) used for training, 30% (N=625 from 266 pedigrees) held out as test set. Mean age of training set: 66 years
- **Validation cohorts (Lu 2019):** 5 independent cohorts totaling 6,935 individuals / 7,375 Illumina arrays — FHS test set (N=625), WHI BA23 (N=2,107), WHI EMPC (N=1,972), JHS (N=1,747), InCHIANTI (N=924 from 484 individuals with 1–2 longitudinal measures). Three racial/ethnic groups: ~50% European ancestry, ~40% African American, ~10% Hispanic

## Architecture: Plasma-Protein DNAm Surrogates

GrimAge's design is structurally different from the Horvath and PhenoAge clocks. Instead of training CpGs directly against age or mortality, Lu 2019 first built **DNAm-based surrogates for seven plasma proteins** measured in the Framingham Heart Study (FHS), then combined those surrogates — along with a DNAm-based smoking-pack-years estimator — into the final GrimAge composite [^lu2019].

The seven plasma protein surrogates included in GrimAge v1 (confirmed from Lu 2019 Figure 1 and Stage 2 model description):

| Plasma protein / predictor | Aging relevance |
|---|---|
| ADM (adrenomedullin) | Hypertension, heart failure, vascular tone |
| B2M (beta-2 microglobulin) | Immune function, kidney function, cardiovascular disease |
| cystatin C | Kidney function, GFR marker |
| GDF-15 (growth differentiation factor 15) | Stress response, cancer cachexia, inflammation |
| leptin | Adiposity, metabolic state |
| PAI-1 (plasminogen activator inhibitor-1) | Thrombosis, cardiovascular disease; strongest individual mortality predictor in the model |
| TIMP-1 (tissue inhibitor of metalloproteinases 1) | Anti-apoptotic function, extracellular matrix remodeling |
| packYears (DNAm smoking predictor) | Tobacco exposure (8th component alongside the 7 plasma proteins) |

Note: tissue plasminogen activator (tPA) is NOT a component of GrimAge. The elastic net Cox regression in Stage 2 selected the 7 proteins above plus DNAm pack-years from the 12 candidate surrogate biomarkers (only 12 of 88 assayed plasma proteins met the r>0.35 correlation threshold in both training and test FHS data).

The composite architecture means GrimAge is not simply a methylation predictor — it captures multi-system biological information through the lens of protein levels and tobacco exposure. This explains why it outperforms purely methylation-based clocks for mortality prediction.

## GrimAge2 (Lu 2022)

GrimAge version 2 expands the predictor to include two additional DNAm surrogates — log-transformed high-sensitivity C-reactive protein (logCRP) and log-transformed hemoglobin A1C (logA1C) — bringing the total to 10 DNAm-based biomarkers (the original 7 plasma proteins + DNAm pack-years + DNAm logCRP + DNAm logA1C) alongside age and sex [^lu2022]. The same 1,030 CpGs underlying GrimAge v1 were used to construct GrimAge2. Training used N=1,833 FHS individuals (age mean 66.1±9.06 yr, range [59, 73] at 25th–75th percentiles; abstract states participants aged 40–92 in the full cohort). Validation across 13,399 blood samples from 10,065 individuals in 9 cohorts (FHS test, WHI BA23, WHI EMPC, JHS, InCHIANTI, BLSA, LBC21, LBC36, NAS). GrimAge2 achieves higher statistical significance for mortality prediction than v1 (meta P=3.6E-167 vs P=2.0E-144) with the same HR=1.10, and outperforms v1 on comorbidity index and several healthspan markers. GrimAge2 is beginning to replace v1 in new studies. The wiki uses "GrimAge" to refer to v1 unless explicitly specifying v2.

## Performance Characteristics

### Mortality hazard ratio (strongest among DNAm clocks)

GrimAge acceleration predicts all-cause mortality with **the most significant meta-analysis P-value among DNAm clocks tested**, across 5 independent validation cohorts (FHS test, WHI BA23, WHI EMPC, JHS, InCHIANTI) [^lu2019]. The fixed-effects meta-analysis gives **HR=1.10 per year of AgeAccelGrim** (95% CI 1.09–1.17; meta-analysis P=2.0E-75, Cochran Q heterogeneity P=0.16 — i.e., low heterogeneity across the 9 strata). This HR of 1.10 per year means a person aging 8.3 years faster than expected (95th percentile of AgeAccelGrim) faces approximately double the hazard of death of the average person in their stratum (HR=2.2=1.10^8.3).

For comparison: AgeAccelPheno (PhenoAge) had HR=1.05, meta P=3.5E-36; AgeAccelHannum HR=1.04, meta P=6.8E-16; AgeAccel (Horvath) HR=1.02, meta P=8.9E-5 in the same validation framework (Lu 2019, Figure 12 / Supplementary Figure 12).

GrimAge v1 vs v2 mortality prediction: GrimAge2 (trained on individuals aged 40–92, N=1,833 FHS training) validated across 13,399 blood samples from 10,065 individuals in 9 cohorts. Meta-analysis mortality HR for GrimAge2 = 1.10 (P=3.6E-167) vs GrimAge v1 HR=1.10 (P=2.0E-144) — the same HR but GrimAge2 achieves higher statistical significance, reflecting its stronger calibration [^lu2022].

### Comparison to other clocks

| Clock | Training target | Mortality HR strength | CR response (CALERIE-2) |
|---|---|---|---|
| Horvath 2013 | Chronological age | Low | NS |
| Hannum 2013 | Chronological age | Low | NS |
| PhenoAge 2018 | Mortality (KDM) | Moderate | NS |
| GrimAge 2019 | Time-to-death | Strongest | NS |
| DunedinPACE 2022 | Longitudinal pace | Moderate | Significant |

### Acceleration and morbidity associations

GrimAge acceleration predicts: cancer incidence, diabetes onset, cardiovascular events, Alzheimer's disease progression, frailty, and physical function decline — all with larger effect sizes than first-generation clocks [^lu2019].

## Intervention-Responsive Evidence

### Null signal: CALERIE-2 caloric restriction

In Waziry 2023 (n=197, CALERIE-2 RCT, 2-year ~12% CR), **GrimAge showed no significant slowing** [^waziry2023]. This is a critical result: GrimAge has the strongest mortality-predictive validity of all DNAm clocks, yet it did not respond to a 2-year CR intervention in healthy adults. Interpretation options:

1. CR may not engage the specific biological pathways captured by GrimAge's protein surrogates (PAI-1, GDF-15, etc.) at the 12% CR level achieved
2. 2 years of moderate CR is insufficient duration to move the GrimAge composite
3. DunedinPACE and GrimAge capture different dimensions of aging — DunedinPACE measures longitudinal change rate and may be more acutely responsive to caloric flux than GrimAge's mortality biomarker surrogate architecture

#gap/contradictory-evidence — the most mortality-predictive clock does not respond to the most validated human geroprotector; resolution required.

### Partial positive signal: exercise and other lifestyle interventions

Observational studies and some small interventional trials report GrimAge acceleration associations with exercise levels, sleep quality, and chronic stress — but RCT evidence for exercise-driven GrimAge reduction is not robustly established as of 2026-05-05. #gap/unsourced — specific citations needed for exercise-GrimAge intervention claims.

### Null signal: RAPA-EX-01 rapamycin + exercise (2026)

In the Stanfield 2026 RAPA-EX-01 randomized trial of rapamycin + exercise vs exercise-alone in older adults, **PCGrimAge was a secondary outcome and did not show a significant treatment effect** [^stanfield2026]. The study tested whether rapamycin would augment exercise-induced changes in epigenetic aging clocks; the null on PCGrimAge (alongside null on DunedinPACE) is consistent with the broader pattern that GrimAge does not move readily under controlled lifestyle/pharmacological interventions in healthy older adults at trial-feasible durations. See [[studies/stanfield-2026-rapa-ex-01]].

### Null signal: METFORAGING metformin pilot (2026)

The METFORAGING pilot RCT (Marcelo-Calvo 2026; n=40 randomized; 35 per-protocol; 96-week 850 mg metformin BID vs placebo in non-diabetic older PLWH ≥50 yr) measured GrimAge V2 (and PC-GrimAge) at baseline and week 96 [^metforaging2026]. The primary endpoint was PhenoAge EAA change; GrimAge was a secondary outcome. **All clocks tested (Horvath, Hannum, PhenoAge, GrimAge V2, the four PC variants, DunedinPACE, DNAmTL) showed no significant between-group difference**, with the PhenoAge primary finding −1.02 yr (95% CI −5.30, 3.26; P=0.627). The trial was underpowered (60-target; closed at 40 due to slow recruitment), so this is a non-informative null on metformin geroprotection per se but adds to the set of small intervention RCTs in which GrimAge does not move. #gap/needs-replication

### Null/positive signal mixed: SLIM LIVER semaglutide pilot (2026)

The SLIM LIVER post-hoc analysis of 41 PLWH with MASLD on semaglutide 1.0 mg/week for 24 weeks reported a **median PCGrimAge change of +0.54 years** (IQR −0.33 to +1.26) — not a slowing, and the small sample + short duration limit interpretation [^slimliver2026]. Whether the slight increase reflects measurement noise, weight-loss-induced cellular stress, or a genuine signal is unresolved.

### Smoking cessation (positive expected signal)

GrimAge includes a DNAm smoking-pack-years predictor as a component. Smoking cessation predictably reduces the smoking component of GrimAge. However, the non-smoking components of GrimAge do not necessarily respond to cessation. The mixed-component architecture complicates interpretation of any GrimAge change as "aging slowed." #gap/no-mechanism

## Mendelian Randomization Status

Schooling 2025 (referenced in [[biomarkers/horvath-clock-2013]] and [[hypotheses/information-theory-of-aging]]) used genetically-predicted GrimAge acceleration as an MR instrument and found **null effects on lifespan** in UK Biobank. This is striking — GrimAge is explicitly mortality-trained, yet genetic elevation of GrimAge does not appear to cause shorter lifespan in MR. Interpretation: (a) insufficient genetic instrument power, (b) GrimAge captures lifetime mortality-correlated exposures that are non-causal in the Mendelian sense, or (c) the mortality correlation is not on the causal path from CpG methylation levels to death. #gap/contradictory-evidence

## Cross-Tissue Calibration

GrimAge was trained and validated exclusively in blood. The protein-surrogate architecture is blood-biology-specific (plasma proteins, smoking-induced blood methylation changes). Application to other tissues would require complete retraining. This is a more fundamental cross-tissue limitation than for the Horvath pan-tissue clock.

## Limitations and Open Critiques

1. **Potential circularity** — GrimAge is trained on mortality-associated biological signals (PAI-1, GDF-15, B2M, cystatin C — all established mortality predictors in their own right). It may largely re-encode known clinical mortality predictors in methylation space. Direct comparison to established clinical scores (Charlson Comorbidity Index, frailty index) is needed. #gap/contradictory-evidence

2. **Smoking component** — The packYears DNAm predictor is a major contributor to GrimAge's mortality prediction in populations with high tobacco exposure. Notably, Lu 2019 reports that AgeAccelGrim remains a highly significant predictor of lifespan in never-smokers (N=3,988, meta-analysis P=1.1E-16) and former/current smokers (P=3.5E-33) — the mortality signal is not solely driven by the smoking component. However, the smoking-pack-years DNAm surrogate individually outperforms self-reported pack-years for mortality prediction, suggesting it captures lasting biological damage from smoking beyond what self-report measures. Interpretation of GrimAge changes in intervention studies requires accounting for whether any change is in the smoking component vs the plasma-protein components.

3. **Blood specificity** — Not validated in other tissues; cannot be applied to brain, muscle, or adipose biopsies.

4. **CALERIE-2 null** — The single best-powered human aging intervention RCT did not move GrimAge. This limits its current utility as a primary endpoint for intervention trials. See [[biomarkers/dunedinpace-2022]] for the clock that did respond.

5. **Batch effects and technical noise** — Subject to the same technical noise issues as all DNAm clocks; PC-GrimAge versions (from Higgins-Chen 2022) improve reliability.

6. **GrimAge2 supercedes v1** — New studies should prefer GrimAge2 (doi:10.18632/aging.204434). Many published studies still use v1; comparability across versions requires care.

## Cross-references

- [[biomarkers/phenoage-2018]] — sister mortality-trained second-generation clock
- [[biomarkers/dunedinpace-2022]] — pace clock; the only clock to respond to CR in CALERIE-2
- [[biomarkers/horvath-clock-2013]] — first-generation reference clock
- [[hallmarks/epigenetic-alterations]] (verified) — hallmark page
- [[hypotheses/information-theory-of-aging]] (verified) — MR null result discussion
- [[interventions/lifestyle/caloric-restriction]] (verified) — CALERIE-2 null result
- [[frameworks/biological-age-measurement]] — cross-clock comparison MOC

## Footnotes

[^lu2019]: doi:10.18632/aging.101684 · training n=1,731 (FHS 70% split from 2,356 total); validation n=6,935 individuals / 7,375 arrays across 5 cohorts (FHS test n=625, WHI BA23 n=2,107, WHI EMPC n=1,972, JHS n=1,747, InCHIANTI n=924) · observational (longitudinal cohorts with mortality follow-up) · AgeAccelGrim HR=1.10/yr, 95% CI [1.09, 1.17], meta-analysis P=2.0E-75 (Q-het P=0.16) — highest meta-analysis P-value among DNAm clocks tested · model: human adults (3 racial/ethnic groups), whole blood, Illumina 450K/EPIC · 1,030 unique CpGs · Aging 2019 · local PDF available (PMC6366976)

[^lu2022]: doi:10.18632/aging.204434 · GrimAge version 2 · training n=1,833 (FHS, mean age 66.1±9.06 yr); adds DNAm logCRP and DNAm logA1C surrogates to the original 7 plasma proteins + pack-years · validation n=13,399 blood samples from 10,065 individuals across 9 cohorts (FHS test, WHI BA23, WHI EMPC, JHS, InCHIANTI, BLSA, LBC21, LBC36, NAS) · AgeAccelGrim2 HR=1.10/yr, meta-analysis P=3.6E-167 vs AgeAccelGrim P=2.0E-144 (same HR, higher significance) · Aging 2022 · local PDF available

[^waziry2023]: [[studies/waziry-2023-calerie-epigenetic-clock]] · n=197 (128 CR, 69 AL) · rct · model: healthy non-obese human adults (CALERIE Phase 2, 2-year ~12% achieved CR) · doi:10.1038/s43587-022-00357-y · local PDF available · GrimAge: NS; PhenoAge: NS; Horvath 2013: NS; DunedinPACE: d=−0.25 p<0.003

[^stanfield2026]: [[studies/stanfield-2026-rapa-ex-01]] · rct (RAPA-EX-01: rapamycin + exercise vs exercise-alone) · J Cachexia Sarcopenia Muscle 2026 · doi:10.1002/jcsm.70274 · PCGrimAge and DunedinPACE both used as secondary outcomes; no significant treatment effect on either; consistent with GrimAge non-responsiveness to pharmacological/lifestyle interventions at trial-feasible durations

[^metforaging2026]: doi:10.1016/j.eclinm.2026.103874 · METFORAGING · Marcelo-Calvo C et al. · EClinicalMedicine 2026 (May) · n=40 randomized (n=35 per-protocol; 17 metformin, 18 placebo); primary endpoint underpowered (target 60) · rct (single-centre, double-blind, 96-week 850 mg metformin BID vs placebo) · model: non-diabetic PLWH ≥50 yr, virologically suppressed · 11 epigenetic clocks tested (Horvath, Hannum, PhenoAge, GrimAge V2 + 4 PC variants, DunedinPACE, DNAmTL); GrimAge V2: NS between-group; PhenoAge primary: −1.02 yr (95% CI −5.30, 3.26; P=0.627); all secondary clocks NS · EudraCT 2021-003299-15

[^slimliver2026]: doi:10.1038/s41514-026-00383-9 · Corley MJ et al. · NPJ Aging 2026 · n=41 PLWH with MASLD; 24-week semaglutide 1.0 mg/week single-arm post hoc analysis (ACTG A5371; NCT04216589) · pilot non-randomized (post hoc within ongoing trial) · PCGrimAge median change +0.54 yr (IQR −0.33 to +1.26); DunedinPACE median +0.018 (IQR −0.023 to +0.053); 41% of participants showed decreased DunedinPACE and had greater liver-fat reduction (P=0.024)
