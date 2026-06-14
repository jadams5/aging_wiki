---
type: biomarker
aliases: [resting heart rate, RHR, resting pulse, resting HR, heart rate at rest]
modality: vital-sign
unit: bpm (beats per minute)
training-cohort: |
  Multiple large prospective cohorts and meta-analyses:
  - Zhang 2016 CMAJ meta-analysis: 46 studies, n=1,246,203 participants, 78,349 deaths
  - Aune 2017 NMCD meta-analysis: 87 prospective studies
  - Nauman 2010 HUNT: n=24,999 men + 25,089 women; 18.2-yr follow-up
n-cpgs-or-features: null
model-architecture: null
training-target: mortality
calibration-tissues: ["[[heart]]"]
test-retest-icc: null
human-evidence-level: strong
mendelian-randomization: partial
intervention-responsive: yes
literature-checked-through: 2026-06-11
verified: true
verified-date: 2026-06-11
verified-by: claude
verified-scope: "All DOIs corrected against PubMed (7 wrong DOIs fixed); primary quantitative claims verified against PubMed abstracts for Zhang 2016, Aune 2017, Nauman 2010, van de Vegte 2023, Klevjer 2023, Nordeidet 2024, Reimers 2018, Jabbarzadeh 2024; Lekakis 2005 page range corrected; chen2024 footnote author corrected; tadic2018 article number corrected; full PDFs of Zhang/Aune/Nauman/Klevjer/Nordeidet/Reimers/Tadic/Lekakis not locally available (closed/hybrid OA); van de Vegte 2023 PDF confirmed wrong paper in archive (DECIMER.ai), verified via abstract only"
---

# Resting Heart Rate (Vital-Sign Biomarker)

Resting heart rate (RHR) is a single-parameter physiological vital sign that integrates autonomic nervous system tone, cardiorespiratory fitness, and hemodynamic status into one non-invasive measurement. It is **not a multi-feature composite clock** — the clock-oriented frontmatter fields (`n-cpgs-or-features`, `model-architecture`, `training-cohort`) do not apply to a simple vital sign and are set to null. RHR predicts all-cause and cardiovascular mortality in dose-response fashion across multiple large prospective cohorts: each 10 beats/minute (bpm) increase in RHR is associated with roughly 9–17% higher all-cause mortality risk [^zhang2016] [^aune2017]. Beyond its prognostic value, RHR is the simulator's cyclic-count driver for arterial elastin pulsatile fatigue — a higher resting rate means more cardiac cycles per unit time, contributing mechanistically to the cumulative pulsatile wall-stress burden on the aorta and large arteries. The sibling fitness biomarker is [[biomarkers/vo2max-biomarker]], which reflects the same integrated autonomic/cardiorespiratory axis from the exercise-capacity direction.

**Note on `modality: vital-sign`**: RHR is classified under the `vital-sign` modality (added in schema R55) — single-parameter resting physiological measures that index aging/mortality risk but are neither multi-feature molecular clocks nor performance tests. The clock-feature fields (`n-cpgs-or-features`, `model-architecture`, `training-cohort`, `test-retest-icc`) are structurally not applicable here and are left null. The same modality applies to resting blood pressure, [[biomarkers/heart-rate-variability-biomarker|heart-rate variability]], respiratory rate, and body temperature.

## Identity and Measurement

- **Definition:** Heart rate measured at full rest — typically 5–15 minutes of supine or seated quiet rest, no recent physical activity or caffeine within 30 minutes
- **Standard method:** ECG R-R interval counting (gold standard) or palpation/pulse oximetry (acceptable for clinical use); wearable photoplethysmography (PPG) devices (smartwatches, chest straps) are widely used but carry meaningful inaccuracy during sleep and at rest, especially in those with irregular rhythms
- **Normal range (adults, general population):** 60–100 bpm (WHO/AHA definition); athletic populations commonly 40–60 bpm; values <40 bpm in non-athletes warrant evaluation
- **Pre-analytical conditions:** Supine or seated; ≥5 minutes of rest; no caffeine, exercise, or smoking within 1–2 hours; avoid immediately post-meal; morning measurement preferred for longitudinal tracking
- **Wearable RHR:** Consumer devices estimate RHR from resting overnight minimum or average; accuracy varies (~±5 bpm vs ECG); directionally useful for longitudinal trend monitoring but not clinically equivalent to manual ECG measurement

## Aging Trajectory

RHR does not show a simple monotone decline with age. The intrinsic sinoatrial node firing rate decreases with age (reduced beta-adrenergic responsiveness, pacemaker cell loss), which would tend to lower RHR intrinsically. However, progressive reduction in parasympathetic (vagal) tone with aging — reflected in declining [[biomarkers/heart-rate-variability-biomarker|heart rate variability (HRV)]] — partially offsets this, resulting in:

- Modest RHR **increase** in sedentary individuals across middle age as vagal tone declines [^tadic2018]
- Blunting of the athlete's bradycardia in older trained adults due to intrinsic SA-node aging
- Narrowing of the RHR gap between active and sedentary individuals in the very old (>80 years)

The autonomic determinants of RHR include:
- **Parasympathetic (vagal) tone** — dominant regulator of resting rate; higher vagal tone = lower RHR; declines with age and sedentary lifestyle
- **Sympathetic tone** — basal sympathetic drive sets the floor; rises with chronic stress, obesity, and heart failure
- **Intrinsic SA node rate** — approximately 90–100 bpm in the absence of autonomic input; declines slightly with age
- **Cardiac filling and stroke volume** — higher stroke volume (athlete heart) → lower heart rate to maintain cardiac output

## Dose-Response: RHR and Mortality

### Zhang 2016 — CMAJ meta-analysis (primary reference) [^zhang2016]

The most comprehensive single meta-analysis of RHR and mortality in the general population:

- **46 prospective studies, n=1,246,203 participants, 78,349 deaths**
- Per 10 bpm increase in RHR: all-cause mortality RR **1.09** (95% CI 1.07–1.12); cardiovascular mortality RR **1.08** (95% CI 1.06–1.10)
- RHR >80 bpm vs. lowest category: all-cause mortality RR **1.45** (95% CI 1.34–1.57); cardiovascular mortality RR **1.33** (95% CI 1.19–1.47)
- Association was **independent of conventional cardiovascular risk factors** (blood pressure, cholesterol, diabetes, smoking, physical activity)

| RHR category | All-cause mortality RR | CV mortality RR |
|---|---|---|
| Lowest category (reference) | 1.00 | 1.00 |
| Per 10 bpm increase | 1.09 (1.07–1.12) | 1.08 (1.06–1.10) |
| >80 bpm vs lowest | 1.45 (1.34–1.57) | 1.33 (1.19–1.47) |

### Aune 2017 — Nutrition, Metabolism & Cardiovascular Diseases dose-response meta-analysis [^aune2017]

- **87 prospective studies** (largest RHR meta-analysis by study count)
- Per 10 bpm increase: coronary heart disease RR **1.07** (95% CI 1.05–1.10); heart failure RR **1.18** (95% CI 1.10–1.27); cardiovascular disease RR **1.15** (95% CI 1.11–1.18); all-cause mortality RR **1.17** (95% CI 1.14–1.19)
- **J-shaped association for atrial fibrillation** — RR 0.97 (95% CI 0.92–1.02) per 10 bpm increase; lower RHR is not associated with lower AF risk observationally (and MR evidence suggests the opposite — see Mendelian Randomization section below)
- Positive dose-response confirmed across all cardiovascular mortality endpoints

### Nauman 2010 — HUNT cohort (sex-stratified analysis) [^nauman2010]

- **n = 24,999 men + 25,089 women**; HUNT (Norwegian population) cohort; **18.2-year follow-up**
- Per 10 bpm increase in RHR: women <70 years — 18% higher risk of ischaemic heart disease death; men — 10–11% higher risk
- High physical activity substantially attenuated the RHR–IHD mortality association in women (not significantly in men)
- Interaction between RHR and physical activity level: high physical activity partially compensates for elevated resting rate on mortality risk

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — direct human cohort data |
| Effect conserved across sexes? | yes — stronger in women in some cohorts |
| Replicated in humans? | yes — multiple independent cohorts, meta-analyses |

## Mendelian Randomization Status

`mendelian-randomization: partial` — multiple large GWAS instruments exist; two-sample MR has been conducted; results are **heterogeneous across endpoints** and reveal an important counter-intuitive finding.

### van de Vegte 2023 — Nature Communications (largest RHR GWAS + MR) [^vandevegte2023]

- **Meta-analysis of 100 studies, up to n=835,465 individuals**; identified **493 independent genetic variants across 352 loci** associated with RHR
- Two-sample MR of genetically elevated RHR found:
  - **Increased** dilated cardiomyopathy risk (consistent with high-RHR harm)
  - **Decreased** atrial fibrillation risk (inverse association — lower genetically predicted RHR → more AF, not less)
  - **Decreased** ischemic stroke and cardio-embolic stroke risk (also inverse — higher RHR appears protective for stroke in MR)
  - **No evidence** for a linear or non-linear genetic association between RHR and **all-cause mortality** — the large observational mortality associations are not supported by genetic causal inference
- The discrepancy with earlier one-sample MR studies is attributed to **weak-instrument bias** at lower p-value thresholds in single-sample analyses

### Klevjer 2023 — Europace (RHR→AF MR) [^klevjer2023]

- Linear and non-linear MR using HUNT (n=69,155; 7,062 AF cases) and UK Biobank (n=431,852; 20,452 AF cases)
- **Inverse causal association** between genetically predicted RHR and AF: OR 0.95 (95% CI 0.93–0.98) per unit RHR increase in HUNT; OR 0.96 (95% CI 0.95–0.97) in UK Biobank
- Non-linear MR supports inverse linear association for RHR below 90 bpm
- **Clinical implications**: rate-lowering drugs (beta-blockers, ivabradine) reduce RHR acutely, but the chronic AF risk calculus based on genetically predicted RHR may differ from pharmacological RHR reduction

### Nordeidet 2024 — European Journal of Preventive Cardiology (sex-specific GWAS) [^nordeidet2024]

- Genome-wide meta-analysis in n=550,467
- 403 independent SNPs for RHR in total; sex-specific genetic architecture identified
- High genetically predicted RHR: increased hypertension and dilated cardiomyopathy risk; **decreased** atrial fibrillation risk — consistent with van de Vegte 2023

**Summary of MR picture:**

| Endpoint | Observational RHR effect | MR result | Concordant? |
|---|---|---|---|
| All-cause mortality | Higher RHR → more deaths | No MR causal signal | No |
| Cardiovascular mortality | Higher RHR → more deaths | Not directly tested | — |
| Dilated cardiomyopathy | Higher RHR → more risk | MR confirms | Yes |
| Atrial fibrillation | Lower RHR → more AF (J-shape) | MR: lower RHR → more AF (inverse) | Yes |
| Ischaemic stroke | Higher RHR → more strokes? | MR: higher RHR → fewer strokes | No |

The MR null for all-cause mortality (despite very strong observational HR per 10 bpm) suggests the observational relationship is substantially confounded — likely by cardiorespiratory fitness, autonomic dysfunction, and underlying disease. This does NOT mean that interventions that lower RHR (exercise, beta-blockers) are ineffective; they improve multiple cardiovascular parameters simultaneously beyond the isolated effect of RHR on mortality. #gap/contradictory-evidence

## RHR as the Cyclic-Count Driver for Arterial Pulsatile Fatigue

In the simulator's causal model, RHR drives the cumulative pulsatile mechanical load on the aortic and large-artery walls. The mechanism:

- Each heartbeat delivers a pressure pulse that cyclically stretches and relaxes the aortic wall
- The aorta sustains approximately **2.5–3.5 billion cardiac cycles over a human lifespan** (at 60–70 bpm × 70 years)
- Elastin fibers — the primary load-bearing structures during physiological arterial expansion — have **finite fatigue life** under repeated mechanical cycling, leading to micro-fracture accumulation and eventual structural failure #gap/unsourced — the Tadic 2018 review (cited by the seeder) is a CV risk prediction review and does not establish elastin fatigue biology; a dedicated biomechanics citation is needed here
- Higher resting heart rate = more cycles per unit time → accelerated elastin fatigue burden
- As elastin fails, stiffer collagen fibers bear more of the circumferential load → pulse wave velocity rises → arterial stiffening

This cyclic-load hypothesis is supported by:
- Johansen 2012 (PLoS One, PMID 22629363): heart rate was among the strongest independent predictors of aortic pulse wave velocity progression over 16 years in men
- The cross-sectional association between 24-h ambulatory mean heart rate and augmentation index / PWV in essential hypertension [^lekakis2005] (note: this study measured 24-h mean heart rate, not clinic resting heart rate)
- The theoretical argument that bradycardic athletes show lower age-related PWV increases (though this specific causal attribution needs stronger prospective MR support) #gap/no-mechanism — the elastin-fatigue mechanism is mechanistically plausible but has not been directly demonstrated in human longitudinal studies with interventional evidence; the MR evidence for heart rate → arterial stiffness is not established

See [[phenotypes/arterial-stiffening]] for the downstream phenotype; [[atherosclerosis]] for overlap with atherogenesis; [[hallmarks/chronic-inflammation]] for inflammatory contribution to arterial wall remodeling.

## Intervention Responsiveness

### Aerobic exercise training (primary modality)

Aerobic (endurance) training consistently reduces RHR in adults across all ages. The Reimers 2018 systematic review and meta-analysis (191 studies) found all exercise types decreased RHR; **endurance training and yoga were the only modalities that significantly reduced RHR in both sexes** [^reimers2018]:

- Endurance training: typically −5 to −15 bpm depending on baseline RHR, training volume, and fitness level; reductions correlate positively with baseline RHR (greatest reductions in the most deconditioned)
- Reductions correlate negatively with participant age (attenuated training-induced bradycardia in older adults — consistent with intrinsic SA node aging)
- Aerobic exercise in hypertension (n=1,787 across 34 trials): each 30 minutes/week aerobic exercise reduces RHR by approximately **1.08 bpm** (95% CI −1.46 to −0.71) [^chen2024]
- Mechanism: enhanced vagal (parasympathetic) tone is the dominant mechanism; increased stroke volume from cardiac remodeling also reduces the rate needed to maintain resting cardiac output

### Beta-blockers (pharmacological)

Beta-1 adrenergic receptor antagonists are the most potent pharmacological RHR-lowering drugs, reducing resting rate by 10–20+ bpm depending on agent and dose. They act by blocking sympathetic chronotropic input to the SA node. This pharmacological reduction is not equivalent to exercise-induced bradycardia in terms of downstream effects:
- Beta-blocker bradycardia: reduced chronotropy without the fitness, vagal-tone, or stroke-volume adaptations
- Exercise bradycardia: accompanies stroke-volume increase, improved VO₂max, enhanced HRV, and vagal tone — multisystem adaptation

### Ivabradine

Selective I_f (funny current) channel inhibitor; reduces SA node firing rate without affecting contractility or blood pressure. Used in chronic heart failure to lower HR when beta-blockers are contraindicated or insufficient. Provides relatively isolated chronotropic reduction.

### Factors that elevate RHR (interventions targeting these may secondarily lower RHR)

| Driver | Direction | Notes |
|---|---|---|
| Deconditioning / sedentary lifestyle | Raises RHR | Primary modifiable driver |
| Obesity | Raises RHR | Adipose inflammation, reduced vagal tone |
| Chronic psychological stress | Raises RHR | HPA/sympathetic activation |
| Caffeine | Raises RHR acutely | Acute sympathomimetic; chronic adaptation partial |
| Hyperthyroidism | Raises RHR | Thyroid hormone sensitizes SA node to catecholamines |
| Anemia | Raises RHR | Compensatory increase to maintain O₂ delivery |
| Sleep deprivation | Raises RHR | Sympathetic activation, HRV suppression |

## Hallmark Linkage

| Hallmark | Connection |
|---|---|
| [[hallmarks/mitochondrial-dysfunction]] | Mitochondrial inefficiency → reduced cardiac efficiency, impaired autonomic control |
| [[hallmarks/chronic-inflammation]] | Elevated IL-6, TNF-α suppress parasympathetic tone and promote sympathetic dominance, raising RHR; arterial wall inflammation contributes to structural remodeling independent of pulsatile load |
| [[hallmarks/deregulated-nutrient-sensing]] | Metabolic syndrome and insulin resistance are associated with elevated RHR and reduced HRV — AMPK/mTOR dysregulation in cardiac autonomic control is hypothesized but not mechanistically established #gap/no-mechanism |

## RHR as a Personal Longitudinal Biomarker

RHR is one of the most accessible continuous biomarkers available via consumer wearables:

- **Tracking frequency:** Overnight resting HR from a chest strap or optical wearable (Garmin, Polar, Whoop, Oura) provides daily estimates; spot measurements via ECG app or manual pulse are equally valid
- **Target range for aging context:** <60 bpm is associated with lowest mortality quartile in most cohorts; 60–70 bpm is low-risk; >80 bpm is consistently in elevated-risk territory [^zhang2016]
- **Trend interpretation:** A rising multi-week RHR trend (e.g., +5–8 bpm above personal baseline) is a reliable indicator of overtraining, early illness, sleep debt, or deconditioning — actionable even without knowing the causal direction
- **Goodhart limitation:** Unlike handgrip strength, RHR is **not meaningfully gameable** — you cannot train specifically to lower resting heart rate without actually improving fitness or autonomic tone; the measurement reflects genuine physiology
- **Clinically meaningful change:** A sustained ≥5 bpm increase from personal baseline warrants investigation; a sustained 5–10+ bpm decrease over 12 weeks of aerobic training is a measurable fitness signal

## Limitations and Gaps

1. **MR null for all-cause mortality** — the large observational mortality associations are not reproduced in genetic causal inference; confounding by fitness, disease burden, and metabolic health is likely substantial. RHR should be interpreted as a risk marker and fitness integrator rather than a causally independent driver of mortality beyond these confounders. #gap/contradictory-evidence

2. **Atrial fibrillation paradox** — both observational J-shaped and MR inverse associations suggest lower RHR is associated with higher AF risk. Chronically low RHR from vagal dominance or SA-node disease may be arrhythmogenic. Very low RHR (<40 bpm, especially in non-athletes) warrants rhythm monitoring. #gap/no-mechanism — the biological pathway from low genetically predicted RHR to AF is not established; vagal-mediated AF (short refractory period) is one hypothesis

3. **Arterial stiffness mechanism** — the cyclic-pulsatile elastin fatigue model is mechanistically compelling but relies on cross-sectional and limited prospective evidence; MR support for heart rate as a causal driver of arterial stiffening has not been established separately from general cardiovascular risk. #gap/no-mechanism

4. **Device accuracy** — consumer PPG devices measure RHR with ~±5 bpm accuracy vs ECG; wrist-worn devices are less accurate than chest-strap devices for individual resting measurements. Cross-device comparisons in longitudinal tracking require caution. #gap/dose-response-unclear

5. **Physiological vs pathological bradycardia** — the lowest RHR categories carry lowest mortality in the observational data, but extreme bradycardia (<40 bpm) from SA node dysfunction rather than vagal training has a very different prognosis. Validated instruments cannot distinguish these without rhythm analysis.

6. **Sex differences** — Nauman 2010 found stronger RHR-IHD associations in women; Nordeidet 2024 found sex-specific GWAS architecture. Whether intervention responses differ by sex is not well characterized. #gap/needs-replication

## Cross-References

- [[biomarkers/heart-rate-variability-biomarker]] — sibling `vital-sign` biomarker; the beat-to-beat counterpart that indexes vagal/parasympathetic modulation directly, whereas RHR is the mean-rate readout; both decline in autonomic terms with age and are bidirectionally tied to inflammatory tone
- [[biomarkers/vo2max-biomarker]] — fitness sibling; VO₂max and RHR are both cardiovascular/autonomic fitness markers; inverse correlation within individuals; VO₂max has stronger and better-characterized mortality dose-response
- [[phenotypes/arterial-stiffening]] — downstream phenotype driven partly by cumulative pulsatile load
- [[atherosclerosis]] — co-occurring cardiovascular phenotype; RHR associated with CV mortality via overlapping mechanisms
- [[interventions/lifestyle/exercise]] — primary intervention for RHR reduction; aerobic training is the best-validated modality
- [[hallmarks/chronic-inflammation]] — inflammatory tone and RHR are bidirectionally linked
- [[hallmarks/mitochondrial-dysfunction]] — cardiac mitochondrial health and autonomic control

## Footnotes

[^zhang2016]: doi:10.1503/cmaj.150535 · Zhang D, Shen X, Qi X · *CMAJ* 2016;188(3):E53–E63 · meta-analysis · n=1,246,203 (46 prospective studies; 78,349 deaths) · per 10 bpm increase: all-cause mortality RR 1.09 (95% CI 1.07–1.12); CV mortality RR 1.08 (1.06–1.10); RHR >80 vs lowest: all-cause RR 1.45 (1.34–1.57) · model: humans (general population) · PMID: 26598376

[^aune2017]: doi:10.1016/j.numecd.2017.04.004 · Aune D, Sen A, ó'Hartaigh B, Janszky I, Romundstad PR, Tonstad S, Vatten LJ · *Nutr Metab Cardiovasc Dis* 2017;27(6):504–513 · systematic review + dose-response meta-analysis · 87 prospective studies · per 10 bpm: CHD RR 1.07 (1.05–1.10); heart failure RR 1.18 (1.10–1.27); CVD RR 1.15 (1.11–1.18); all-cause mortality RR 1.17 (1.14–1.19); J-shaped for AF · model: humans · PMID: 28552551

[^nauman2010]: doi:10.1136/jech.2009.093088 · Nauman J, Nilsen TIL, Wisloff U, Vatten LJ · *J Epidemiol Community Health* 2010;64(2):175–181 · prospective cohort (HUNT study) · n=24,999 men + 25,089 women; 18.2-yr follow-up · per 10 bpm: women <70 yr — 18% higher IHD death risk; men — 10–11% higher; high physical activity attenuated association in women · model: community-dwelling Norwegian adults · PMID: 20056969

[^vandevegte2023]: doi:10.1038/s41467-023-39521-2 · van de Vegte YJ, van der Harst P et al. · *Nature Communications* 2023;14(1):4892 · GWAS meta-analysis + Mendelian randomization · up to n=835,465 (100 studies); 493 variants, 352 loci · MR: higher genetically predicted RHR → increased dilated cardiomyopathy; **decreased** AF, ischaemic stroke, cardio-embolic stroke; **no association with all-cause mortality** · model: humans (predominantly European ancestry) · PMID: 37532724

[^klevjer2023]: doi:10.1093/europace/euad292 · Klevjer M, Brumpton BM, Morin SN, Wisloff U, Nauman J · *Europace* 2023;25(9):euad292 · Mendelian randomization (linear + non-linear; HUNT + UK Biobank) · HUNT n=69,155 (7,062 AF cases); UK Biobank n=431,852 (20,452 AF cases) · inverse causal association RHR→AF: OR 0.95 (95% CI 0.93–0.98) HUNT; 0.96 (0.95–0.97) UK Biobank · model: humans · PMID: 37738632

[^nordeidet2024]: doi:10.1093/eurjpc/zwae092 · Nordeidet AN, Brumpton BM, Wisloff U, Nauman J, Klevjer M · *Eur J Prev Cardiol* 2024;31(8):963–972 · GWAS meta-analysis; n=550,467 · 403 independent SNPs (total); sex-specific genetic architecture; high genetically predicted RHR: higher hypertension + dilated cardiomyopathy risk; decreased AF risk · model: humans · PMID: 38437179

[^reimers2018]: doi:10.3390/jcm7120503 · Reimers AK, Knapp G, Reimers CD · *J Clin Med* 2018;7(12):503 · systematic review + meta-analysis · 191 interventional studies (121 endurance, 43 strength, 15 combined endurance+strength, 21 yoga, 5 tai chi, 3 qigong, 5 school sport, 2 unspecified) · all exercise types decreased RHR; only endurance training and yoga significantly decreased RHR in both sexes; reductions correlated positively with baseline RHR, negatively with participant age · model: humans · PMID: 30513777

[^chen2024]: doi:10.1038/s41440-023-01467-9 · Jabbarzadeh Ganjeh B, Zeraattalab-Motlagh S, Jayedi A et al. · *Hypertension Research* 2024 · meta-analysis of randomized trials; n=1,787 across 34 trials · each 30 min/week aerobic exercise: RHR −1.08 bpm (95% CI −1.46 to −0.71; n=23 trials); dose-dependent nonlinear relationship observed for SBP/DBP; SBP greatest reduction at 150 min/week · model: humans with hypertension · PMID: 37872373

[^tadic2018]: doi:10.1111/eci.12892 · Tadic M, Cuspidi C, Grassi G · *Eur J Clin Invest* 2018;48(3):e12892 · review of prospective cohorts and meta-analyses · higher RHR independently predicts adverse cardiovascular events; association generally stronger in men; persists after adjustment for traditional CV risk factors · model: humans · PMID: 29355923

[^lekakis2005]: doi:10.1016/j.ijcard.2004.04.014 · Lekakis JP, Zakopoulos NA, Protogerou AD et al. · *Int J Cardiol* 2005;102(3):391–395 · cross-sectional; 24-h ambulatory mean heart rate was an independent predictor of augmentation index and estimated aortic PWV in 72 untreated mild-to-moderate essential hypertension patients · PMID: 16004882
