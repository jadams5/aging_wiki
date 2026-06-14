---
type: biomarker
aliases: [HRV, RMSSD, SDNN, pNN50, heart rate variability]
modality: vital-sign
unit: ms (RMSSD/SDNN/pNN50); ms² or normalized units (frequency-domain HF/LF); see body for metric-specific units
training-cohort: |
  Multiple large prospective cohorts and meta-analyses:
  - Tsuji 1994 Framingham: n=736 elderly subjects (mean age 72±6); 4-yr follow-up; first major cohort showing reduced HRV → all-cause mortality
  - Dekker 2000 ARIC: parent cohort n=14,672; HRV measured in case-cohort subsample (n≈900 random sample + cases); 2-min rhythm-strip SDNN; coronary heart disease + all-cause mortality
  - Jarczok 2022 systematic review + meta-analysis: 32 studies (37 samples); n=38,008; 5-min RMSSD lowest-quartile HR 1.56 (95% CI 1.32–1.85)
  - Tegegne 2023 GWAS/prospective: GWAS n=46,075; prospective n=54,312; ~7-yr median follow-up; phenotypic HRV predicts mortality; genetically predicted HRV does not (MR null)
n-cpgs-or-features: null
model-architecture: null
training-target: mortality
calibration-tissues: ["[[heart]]", "[[nervous-system]]"]
test-retest-icc: null
human-evidence-level: strong
mendelian-randomization: partial
intervention-responsive: yes
literature-checked-through: 2026-06-13
verified: true
verified-date: 2026-06-13
verified-by: claude
verified-scope: "Tegegne 2023, Shaffer 2017, Dekker 2000, El-Malahi 2024, Geurts 2023 verified against full PDFs; Tsuji 1994 n corrected via PubMed abstract (full text not accessed — closed-access); Jarczok 2022, Laborde 2022, Nunan 2010, Olivieri 2024, Zhao 2024 verified against PubMed abstracts (full PDFs closed-access or failed download); Task Force 1996 verified as standards document via PubMed; canonical-database identity fields (PubChem, ChEMBL) not applicable to this vital-sign biomarker"
---

# Heart Rate Variability (Vital-Sign Biomarker)

Heart rate variability (HRV) is the beat-to-beat fluctuation in the time interval between successive heartbeats (R-R intervals). It is **not a molecular clock** — the clock-specific frontmatter fields (`n-cpgs-or-features`, `model-architecture`, `test-retest-icc`) are structurally not applicable and are left null, consistent with the `vital-sign` modality established in schema R55 and implemented in the sibling page [[biomarkers/resting-heart-rate-biomarker]]. HRV integrates cardiac autonomic regulation, predominantly reflecting parasympathetic (vagal) tone at rest: higher HRV indicates flexible, responsive autonomic control; lower HRV reflects autonomic rigidity, sympathetic dominance, or impaired vagal withdrawal. Reduced HRV is one of the most robustly replicated predictors of all-cause and cardiovascular mortality across general-population cohorts [^tsuji1994] [^dekker2000] [^jarczok2022]. It also serves as a tangible, continuously measurable index of **autonomic imbalance with aging**, linking inflammaging, the cholinergic anti-inflammatory pathway, and cardiovascular aging into a unified organismal-level biomarker [^olivieri2024].

**Note on `modality: vital-sign`:** HRV is classified under the vital-sign modality — single-parameter resting physiological measures that index aging/mortality risk. The `unit:` field does not map cleanly to the schema's (years | percentile | rate | composite-score) enum; the actual metric units are milliseconds (time-domain) and ms² or normalized units (frequency-domain) — documented in the body. This matches the RHR page's precedent of storing the real-world unit string directly.

## Identity and Measurement

HRV is not a single number but a family of metrics derived from R-R interval time series (typically from ECG or PPG). The 1996 Task Force of the European Society of Cardiology and the North American Society of Pacing and Electrophysiology established the canonical measurement standards; the Shaffer & Ginsberg 2017 overview provides a practical reference for all commonly used metrics [^taskforce1996] [^shaffer2017].

### Time-domain metrics

| Metric | Unit | What it indexes |
|---|---|---|
| **SDNN** | ms | Standard deviation of all normal R-R intervals; reflects total HRV from all sources (sympathetic + parasympathetic + circadian) |
| **RMSSD** | ms | Root mean square of successive differences; primarily reflects **vagal (parasympathetic) tone**; robust to breathing rate changes; the most widely used clinical index |
| **pNN50** | % | Percentage of successive R-R intervals differing by >50 ms; highly correlated with RMSSD; also reflects vagal tone |
| **NN50** | count | Absolute count of successive intervals >50 ms difference |

RMSSD is preferred for autonomic aging research because it is dominated by parasympathetic activity, can be computed from short recordings (5 minutes), and tracks well with HF power in the frequency domain. Wearable devices (Oura, Garmin, Apple Watch, Polar) predominantly report RMSSD.

### Frequency-domain metrics

| Metric | Frequency band | Unit | What it indexes |
|---|---|---|---|
| **HF power** | 0.15–0.40 Hz | ms² (or n.u.) | Respiratory sinus arrhythmia (RSA); closely tracks vagal tone; the autonomic component most clearly linked to CAP (see below) |
| **LF power** | 0.04–0.15 Hz | ms² (or n.u.) | Mixed sympathetic + vagal origin; influenced by baroreflex; interpretation contested |
| **LF/HF ratio** | — | dimensionless | Originally proposed as sympathovagal balance index; now controversial — not a pure sympathetic index |
| **Total power** | <0.4 Hz | ms² | Overall spectral variance; similar interpretation to SDNN |
| **VLF power** | 0.0033–0.04 Hz | ms² | Influenced by thermoregulation, renin-angiotensin, and slow metabolic oscillations; prognostically significant in long recordings |

**Key principle:** HF/RMSSD index **vagal modulation of HR** under controlled breathing conditions, but do not directly measure vagal tone — respiration rate changes alone can shift HF power without altering actual vagal output [^shaffer2017]. LF/HF ratio should not be interpreted as a simple sympathovagal balance score.

### Measurement standards

- **Short-term:** 5-minute supine ECG at rest; no recent physical activity, caffeine, food, or emotional stress; standardized breathing optional but recommended for HF power interpretation
- **Long-term (24h Holter):** Captures circadian HRV variation; SDNN from 24-h recordings has strong prognostic value; required for VLF analysis
- **Wearable/PPG:** Consumer devices estimate RMSSD overnight from PPG; directionally useful for trend monitoring; less accurate than ECG R-R intervals; systematic bias with irregular heart rhythms (atrial fibrillation)
- **Recording context matters:** HRV is highly state-dependent (posture, breathing rate, time of day, stress, illness, recovery status) — serial measurements must standardize conditions for longitudinal aging comparisons

## Age-Related Decline

HRV declines substantially and progressively with normal aging [^nunan2010norms]. The primary drivers:

1. **Reduced parasympathetic tone** — progressive loss of [[tissues/vagus-nerve|vagal]] modulation of the SA node is the dominant mechanism; reflected in declining RMSSD and HF power
2. **Intrinsic sinoatrial node remodeling** — fibrosis and pacemaker cell loss reduce the range over which the SA node can be autonomically modulated
3. **Arterial baroreflex impairment** — reduced baroreceptor sensitivity attenuates reflex-driven vagal modulation
4. **Increased sympathetic tone** — chronic sympathetic overdrive ([[molecules/metabolites/catecholamines|catecholamine]] excess; chronic stress, metabolic syndrome, obesity) suppresses vagal activity

**Approximate population-level age trend (RMSSD, short-term, healthy adults):**

| Age decade | Median RMSSD (approx.) |
|---|---|
| 20s | 40–55 ms |
| 40s | 30–40 ms |
| 60s | 20–30 ms |
| 80+ | 15–25 ms |

Values from Nunan 2010 systematic review of normal values; wide inter-individual variation; aerobic fitness is a major modifier [^nunan2010norms].

The **rate of decline** is not uniform: the steepest age-associated HRV reduction occurs in midlife (30–60 years), with some evidence that the rate of decline attenuates in the oldest-old. Sex differences exist — women tend to have higher HF power (vagal tone) than age-matched men across much of adult life, but this advantage narrows post-menopause.

## HRV as a Predictor of Mortality and Disease

### Tsuji 1994 — Framingham Heart Study (foundational cohort) [^tsuji1994]

The first major population study linking reduced HRV to all-cause mortality:

- **n=736** elderly community-dwelling subjects (mean age 72±6 years); Framingham Heart Study; **4-year follow-up**
- Lower HRV (including low-frequency power, which was the strongest predictor in multivariate analysis) was associated with significantly increased all-cause mortality risk
- Association was **independent of traditional cardiovascular risk factors**
- Established the paradigm that autonomic markers predict survival beyond standard clinical variables

### Dekker 2000 — ARIC Study [^dekker2000]

Validated the prognostic value of ultra-short HRV recordings in a large, younger general-population sample:

- Parent cohort **n=14,672** (ARIC study; community-dwelling adults aged 45–65); HRV assessed by case-cohort design in a **random subsample of ~900** subjects plus all incident CHD cases (395) and deaths (443) through 1993
- Low SDNN from a **2-minute rhythm strip** predicted coronary heart disease incidence and all-cause mortality (e.g., lowest vs. intermediate SDNN tertile all-cause relative risk 1.50–1.51, CVD mortality relative risk 1.98–2.10), independent of traditional cardiovascular risk factors
- Demonstrated that even very short HRV recordings carry prognostic information — relevant for screening applications

### Jarczok 2022 — Systematic review and meta-analysis (primary synthesis reference) [^jarczok2022]

The most comprehensive quantitative synthesis of HRV-mortality evidence:

- **32 studies (37 samples); n=38,008 total participants**; includes both healthy populations and patient samples
- Lower HRV parameter values were **significant predictors of higher mortality across all ages, sexes, continents, and populations**
- 5-minute RMSSD, lowest quartile vs. others: combined **HR 1.56 (95% CI 1.32–1.85)**
- Associations were comparable across most examined HRV parameters (SDNN, RMSSD, HF power, total power)

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — direct human cohort data |
| Effect conserved across sexes? | yes — broadly; some sex differences in magnitude |
| Replicated in humans? | yes — multiple independent cohorts and two meta-analyses |

## HRV, Inflammaging, and the Cholinergic Anti-Inflammatory Pathway

The mechanistic bridge between HRV and age-related disease risk converges on the **vagal cholinergic anti-inflammatory pathway (CAP)**, and HRV is its most accessible functional readout [^olivieri2024]:

- The vagus nerve tonically suppresses peripheral inflammation by releasing acetylcholine onto alpha-7 nicotinic acetylcholine receptors (α7nAChR, encoded by *CHRNA7*) on macrophages and other immune cells, inhibiting NF-κB-driven pro-inflammatory cytokine production (IL-1β, IL-6, TNF-α)
- With aging, reduced vagal tone (measurable as declining HRV) **withdraws this tonic anti-inflammatory brake**, contributing to the chronic low-grade inflammation that characterizes inflammaging
- Elevated sympathetic activity with aging creates a **reciprocal pro-inflammatory milieu**: sympathetic neurotransmitters (norepinephrine) promote macrophage activation; reduced vagal counter-regulation allows the inflammatory signal to amplify
- This ANS imbalance — sympathetic excess + vagal insufficiency — is now recognized as an upstream driver of multiple aging hallmarks, not merely a correlate [^olivieri2024]

**Forward links to sibling pages being seeded concurrently:**
- [[pathways/cholinergic-anti-inflammatory-pathway]] — the α7nAChR-mediated vagal suppression of NF-κB — pathway page #gap/stub (not yet seeded)
- [[molecules/proteins/chrna7]] — α7 nicotinic acetylcholine receptor protein page #gap/stub (not yet seeded)

See also [[hallmarks/chronic-inflammation]] for the inflammaging mechanistic context.

## Mendelian Randomization Status

`mendelian-randomization: partial` — rationale: multiple HRV GWAS instruments exist and MR studies have been conducted, but the genetic causal inference for all-cause mortality is **negative** (phenotypic but not genotypic HRV predicts mortality), while MR evidence for specific cardiovascular endpoints (cardiac arrest, atrial fibrillation) shows selective positive signals. The picture is heterogeneous across endpoints, mirroring the RHR MR finding.

### Tegegne 2023 — Communications Biology (GWAS + prospective mortality study) [^tegegne2023]

The most direct test of genetically vs. phenotypically predicted HRV mortality:

- **GWAS: n=46,075 European ancestry individuals** (UK Biobank); identified **23 genome-wide significant variants in 16 loci** (17 independent; 8 novel) for HRV traits
- **Prospective mortality analysis: n=54,312** (separate UK Biobank subsample with phenotypic HRV + mortality follow-up; median 6.99–8.14 years across HRV traits); 1,548 (2.9%) died during follow-up
- Lower **phenotypic HRV** was associated with significantly elevated all-cause mortality: per-unit ln(RMSSD) decrease HR 1.19 (95% CI 1.10–1.28; p=1.48×10⁻⁵); per-unit ln(SDNN) decrease HR 1.32 (95% CI 1.23–1.43; p=9.30×10⁻¹²)
- **Genetically predicted HRV was NOT associated with all-cause mortality or cardiovascular mortality** (null MR finding — genetic risk scores for HRV not associated with mortality in independent sub-sample n=412,891)
- Interpretation: measured HRV captures clinically relevant physiological variance beyond genetic architecture — likely fitness, disease burden, and real-time autonomic state. This is the same MR-null-for-mortality pattern seen for RHR in van de Vegte 2023

### Zhao 2024 — EJCI (MR: HRV and cardiovascular diseases) [^zhao2024]

- Two-sample MR using GWAS instruments for SDNN, RMSSD, and pvRSA/HF against cardiovascular outcomes
- **Genetically predicted pvRSA/HF** (HF power) was causally associated with **increased cardiac arrest risk** (OR 2.02, 95% CI 1.25–3.28, p=0.004); no heterogeneity or pleiotropy detected
- No significant causal associations found for hypertension, heart failure, myocardial infarction, or arrhythmia in general

### Geurts 2023 — Clinical Research in Cardiology (HRV, AF, MR) [^geurts2023]

- Longitudinal population study + two-sample MR in the Rotterdam Study (n=12,334; median follow-up 9.4 years; 1,302 incident AF cases)
- Observational: higher SDNN (HR 1.24, 95% CI 1.04–1.47, p=0.021) and higher RMSSD (HR 1.33, 95% CI 1.13–1.54, p=0.001) were significantly associated with **increased** new-onset AF risk; associations driven mostly by women
- MR results: genetic causal inference **supported** the HRV → AF association — genetically determined SDNN (IVW OR 1.60, 95% CI 1.27–2.02, p=8.36×10⁻⁵) and RMSSD (IVW OR 1.56, 95% CI 1.31–1.86, p=6.32×10⁻⁷) were significantly associated with increased AF odds, with no heterogeneity or pleiotropy detected
- Note: **higher** HRV is associated with AF risk here (not lower, as in most mortality/CVD contexts) — the proposed mechanism involves sinoatrial node dysfunction promoting atrial ectopy and re-entry, not autonomic failure per se

**Summary of MR picture:**

| Endpoint | Observational HRV effect | MR result | Concordant? |
|---|---|---|---|
| All-cause mortality | Lower HRV → more deaths (HR ~1.56 per quartile) | No MR causal signal [^tegegne2023] | No |
| Cardiac arrest | Lower HRV/HF → elevated risk | MR: pvRSA/HF causally associated [^zhao2024] | Partial |
| Atrial fibrillation | **Higher** HRV → more AF (observational; n=12,334 Rotterdam Study) | MR: **supported** — genetically higher SDNN/RMSSD → more AF [^geurts2023] | Yes |

The MR null for all-cause mortality does **not** negate HRV as a clinically useful biomarker — it indicates that the mortality association is substantially confounded by fitness, lifestyle, and disease burden, all of which *are* captured in measured HRV. HRV functions as an **integrative fitness-autonomic index** rather than a direct causal pathway from autonomic function to death. #gap/contradictory-evidence

## Intervention Responsiveness

### Aerobic exercise training (primary modality)

Physical activity consistently increases resting HRV in controlled trials. The El-Malahi 2024 meta-analysis (systematic review of RCTs and non-RCTs in adults with established cardiovascular disease — CHF, CAD, PAD, or ACS/MI) found that the **overall pooled short-term effect on RMSSD was not statistically significant** (SMD 0.32, p=0.15; I²=0.69 for RMSSD), but the overall SDNN effect was significant (SMD 0.30, p=0.01; I²=0.00) [^elmalahi2024]. In the **congestive heart failure subgroup**, both RMSSD (p=0.01) and SDNN (p=0.02) showed significant improvement with aerobic exercise. For 24-hour assessment, the LF/HF ratio improved (p=0.05) but RMSSD and SDNN (24-h) were not significant. Note: this meta-analysis covers CVD patients only; evidence for HRV augmentation by exercise in healthy older adults is well-supported by cross-sectional literature but extends beyond this particular meta-analysis. Mechanism: aerobic training enhances cardiac vagal tone through multiple pathways — increased stroke volume reduces resting demand, and central autonomic nuclei (nucleus tractus solitarius, dorsal vagal nucleus) increase parasympathetic outflow chronically.

- Effect appears dose-dependent; continuous aerobic exercise is more consistently effective than high-intensity interval training for resting HRV in older adults
- Cross-sectional data: lifelong endurance athletes have substantially higher RMSSD than sedentary age-matched controls throughout life

### Slow-paced breathing (~6 breaths/min / resonant frequency)

Voluntary slow breathing at approximately 6 breaths/minute (0.1 Hz) maximally entrains the baroreflex, producing large oscillations in heart rate that manifest as strikingly elevated RMSSD and HF power **during the practice session**. The Laborde 2022 systematic review and meta-analysis (223 studies: 172 assessing HRV during VSB sessions; 16 immediately post-session; 49 multi-session) found consistent increases in vagally-mediated HRV during slow breathing, immediately after sessions, and with sustained multi-session practice [^laborde2022]. This is resonant frequency breathing / heart rate coherence training. The acute session effect is large; the chronic resting-state effect of regular practice on baseline HRV is smaller but present.

### Beta-blockers

Beta-1 adrenergic receptor antagonists raise resting HRV by reducing sympathetic chronotropic input and allowing greater vagal expression. The HRV increase from beta-blockade is pharmacologically distinct from exercise-induced HRV elevation: it reflects sympathetic suppression rather than vagal augmentation. Clinically, beta-blockade–induced HRV normalization post-myocardial infarction predicts reduced sudden death risk.

### Other interventions

| Intervention | Effect on HRV | Strength of evidence |
|---|---|---|
| Yoga / tai chi | Increases RMSSD; comparable to aerobic exercise in some trials | Moderate |
| Biofeedback / resonant breathing | Acutely elevates HF power; chronic effect on baseline HRV is smaller | Moderate |
| Sleep optimization | Poor/fragmented sleep acutely suppresses HRV; recovery improves it | Moderate (observational) |
| Omega-3 supplementation | Small increases in HRV in some meta-analyses | Weak |
| Alcohol | Acutely suppresses HRV; chronic moderate alcohol: unclear long-term HRV effect | Moderate |

## Hallmark Linkage

| Hallmark | Connection |
|---|---|
| [[hallmarks/chronic-inflammation]] | Reduced vagal tone (low HRV) withdraws the cholinergic anti-inflammatory brake (CAP), allowing NF-κB-driven inflammaging; reciprocally, chronic inflammation suppresses vagal activity — bidirectional amplification loop [^olivieri2024] |
| [[hallmarks/mitochondrial-dysfunction]] | Cardiac autonomic control requires mitochondrially replete neurons in dorsal vagal nucleus and nucleus ambiguus; mitochondrial dysfunction in autonomic neurons may reduce vagal output, depressing HRV |
| [[hallmarks/cellular-senescence]] | Senescent cells secrete SASP components (IL-6, IL-1β, TNF-α) that suppress parasympathetic tone; preliminary evidence links senescent-cell burden to autonomic aging, but direct human data is limited #gap/needs-human-replication |
| [[hallmarks/deregulated-nutrient-sensing]] | Metabolic syndrome and insulin resistance are associated with reduced HRV; AMPK/mTOR dysregulation in autonomic neurons hypothesized but not mechanistically established in humans #gap/no-mechanism |

## HRV as a Personal Longitudinal Biomarker

HRV is the most informative continuous biomarker available from consumer wearables for tracking autonomic aging:

- **Tracking frequency:** Overnight RMSSD from Oura, Garmin, Polar H10, Whoop, Apple Watch; daily estimates are practical for longitudinal trend-monitoring
- **Personal baselines are essential:** absolute RMSSD values vary 3–5-fold between individuals; the meaningful metric is deviation from one's own baseline, not cross-individual comparison to population norms
- **Target range for aging context:** Maintaining or increasing one's 30-day rolling average RMSSD is a meaningful fitness signal; any sustained >10–15% drop below personal baseline warrants investigation (overtraining, illness, poor sleep, stress)
- **Morning readiness:** Low-HRV mornings (relative to baseline) predict impaired exercise-performance capacity the same day — useful for training load decisions
- **Goodhart limitation:** RMSSD is **moderately gameable** via slow breathing (the metric rises steeply during paced-breathing practice), which can inflate wearable-reported overnight RMSSD if slow-breathing exercises occur close to sleep. Standardize measurement conditions.
- **Clinically meaningful change:** A sustained elevation of RMSSD (>10% above 30-day rolling mean) following 4–12 weeks of aerobic training is a measurable adaptation signal

## Limitations and Gaps

1. **MR null for all-cause mortality** — the robust observational HR of ~1.5–2× comparing lowest HRV quartile to others is not supported by genetic causal inference [^tegegne2023]. Confounding by fitness, disease burden, and metabolic health is substantial. HRV should be interpreted as an integrative fitness-autonomic marker and risk stratifier, not a causally independent driver of mortality. #gap/contradictory-evidence

2. **Measurement standardization** — HRV is highly sensitive to pre-measurement conditions (posture, breathing rate, time of day, caffeine, acute exercise, illness, temperature). Cross-study and cross-device comparisons require caution. Consumer wearable RMSSD is directionally valid for trend monitoring but not clinically equivalent to supine 5-min ECG. #gap/dose-response-unclear

3. **Test-retest reliability** — short-term HRV (5-min) has moderate-to-good intra-individual reproducibility (ICC ~0.70–0.85 in controlled conditions), but day-to-day biological variability is large; single measurements should not be over-interpreted. Population-level ICC data for wearable overnight HRV is incompletely characterized. #gap/needs-replication

4. **LF/HF ratio controversy** — the LF/HF ratio is frequently reported as a sympathovagal balance index but is confounded by breathing rate, posture, and mental state; Task Force guidance notes this limitation; it should not be used as a reliable sympathetic activity index [^taskforce1996]

5. **Sex and age interactions** — women generally have higher HF power than age-matched men through much of adult life; intervention effects on HRV may differ by sex. This is insufficiently characterized in RCTs of aging-specific populations. #gap/needs-replication

6. **Cholinergic anti-inflammatory pathway causality** — while the mechanistic logic (vagal tone → α7nAChR → NF-κB suppression) is well-established in rodent models, direct human interventional evidence that raising HRV via exercise or slow breathing reduces inflammatory markers through the CAP specifically (rather than through other exercise-induced pathways) is limited. #gap/needs-human-replication

7. **Very low HRV in the oldest-old** — at RMSSD values approaching 10–15 ms (common in octogenarians), the signal-to-noise ratio of consumer devices may be insufficient for reliable trend monitoring; clinical-grade short-lead ECG is preferred for this age group. #gap/dose-response-unclear

## Cross-References

- [[biomarkers/resting-heart-rate-biomarker]] — sibling vital-sign biomarker; RHR and HRV are inversely correlated within individuals and share autonomic determinants; RHR reflects chronotropic drive, HRV reflects autonomic flexibility
- [[biomarkers/vo2max-biomarker]] — fitness biomarker correlated with HRV; VO₂max and HRV both reflect cardiorespiratory fitness and independently predict mortality
- [[organ-systems/nervous-system]] — autonomic nervous system page; central origin of vagal outflow
- [[organ-systems/cardiovascular-system]] — the cardiac-autonomic effector system
- [[hallmarks/chronic-inflammation]] — inflammaging link via the cholinergic anti-inflammatory pathway
- [[interventions/lifestyle/exercise]] — primary intervention for HRV augmentation; aerobic training is the best-validated modality
- [[interventions/lifestyle/sleep]] — sleep quality is a major acute modulator of HRV; chronic sleep restriction suppresses baseline RMSSD

## Footnotes

[^taskforce1996]: doi:10.1161/01.cir.93.5.1043 · Task Force of the European Society of Cardiology and the North American Society of Pacing and Electrophysiology · *Circulation* 1996;93(5):1043–1065 · consensus standards document · n=not applicable (standards and recommendations) · design: expert committee review · canonical definitions of SDNN, RMSSD, pNN50, HF, LF, LF/HF; defines measurement conditions and clinical interpretation framework · PMID: 8598068

[^shaffer2017]: doi:10.3389/fpubh.2017.00258 · Shaffer F, Ginsberg JP · *Front Public Health* 2017;5:258 · review · n=not applicable · widely-cited (6,200+ citations) practical overview of all HRV metrics, normative values, and clinical context · model: humans · PMID: 29034226

[^tsuji1994]: doi:10.1161/01.cir.90.2.878 · Tsuji H, Venditti FJ Jr, Manders ES, Evans JC, Larson MG, Feldman CL, Levy D · *Circulation* 1994;90(2):878–883 · prospective cohort (Framingham Heart Study) · n=736 elderly community-dwelling subjects (mean age 72±6 years); 4-yr follow-up · reduced HRV (multiple measures; low-frequency power was strongest independent predictor in multivariate analysis) associated with significantly increased all-cause mortality; foundational cohort study for HRV-mortality link · model: humans (community-dwelling elderly) · PMID: 8044959

[^dekker2000]: doi:10.1161/01.cir.102.11.1239 · Dekker JM, Crow RS, Folsom AR, Hannan PJ, Liao D, Swenne CA, Schouten EG · *Circulation* 2000;102(11):1239–1244 · prospective cohort — case-cohort design (ARIC Study) · parent cohort n=14,672 adults aged 45–65; HRV measured in random subsample of ~900 + all incident CHD cases (n=395) and deaths (n=443) through 1993; 2-min rhythm-strip SDNN; lowest vs. intermediate SDNN tertile: all-cause RR 1.50–1.51, CVD mortality RR 1.98–2.10 · low SDNN predicted CHD and all-cause mortality independent of risk factors; risk could not be attributed to disease at baseline · model: humans (community-dwelling middle-aged adults) · PMID: 10982537

[^jarczok2022]: doi:10.1016/j.neubiorev.2022.104907 · Jarczok MN, Weimer K, Braun C, Williams DP, Thayer JF, Gündel HO, Balint EM · *Neurosci Biobehav Rev* 2022;143:104907 · systematic review + meta-analysis · 32 studies (37 samples); n=38,008 participants · 5-min RMSSD lowest quartile vs others: combined HR 1.56 (95% CI 1.32–1.85); lower HRV predicted higher mortality across all ages, sexes, continents, and populations · model: humans (mixed healthy + patient populations) · PMID: 36243195

[^olivieri2024]: doi:10.1016/j.arr.2024.102521 · Olivieri F, Biscetti L, Pimpini L, Pelliccioni G, Sabbatinelli J, Giunta S · *Ageing Res Rev* 2024;101:102521 · review · autonomic nervous system imbalance (sympathetic excess + vagal insufficiency) as a biomarker of aging and inflammaging; HRV as the practical readout of ANS imbalance; cholinergic anti-inflammatory pathway mechanism; advocates for HRV as an accessible aging biomarker · model: humans · PMID: 39341508

[^tegegne2023]: doi:10.1038/s42003-023-05376-y · Tegegne BS, Said MA, Ani A, van Roon AM, Shah S, de Geus EJC, van der Harst P, Riese H, Nolte IM, Snieder H · *Commun Biol* 2023;6:1013 · GWAS + prospective cohort (UK Biobank) · GWAS n=46,075 European ancestry; prospective mortality analysis n=54,312 (median follow-up 6.99–8.14 yr; 1,548 deaths, 2.9%); genetic risk score analysis n=412,891 · 23 genome-wide significant variants in 16 loci (17 independent; 8 novel) for HRV; phenotypic HRV associated with all-cause mortality (lnRMSSD HR 1.19, 95% CI 1.10–1.28; lnSDNN HR 1.32, 95% CI 1.23–1.43); genetically predicted HRV NOT associated with all-cause or CVD mortality; MR null for mortality; genetic predisposition alone does not explain phenotypic mortality link · model: humans · PMID: 37803156

[^zhao2024]: doi:10.1111/eci.14085 · Zhao Y, Yu H, Gong A, Zhang S, Xiao B · *Eur J Clin Invest* 2024;54(1):e14085 · Mendelian randomization (two-sample; IVW primary) · GWAS instruments for SDNN, RMSSD, pvRSA/HF against cardiovascular outcomes · genetically predicted pvRSA/HF associated with cardiac arrest: OR 2.02 (95% CI 1.25–3.28; p=0.004); no association with hypertension, heart failure, MI, or arrhythmia; no heterogeneity or pleiotropy detected · model: humans · PMID: 37641564

[^geurts2023]: doi:10.1007/s00392-022-02072-5 · Geurts S, Tilly MJ, Arshi B, Stricker BHC, Kors JA, Deckers JW, de Groot NMS, Ikram MA, Kavousi M · *Clin Res Cardiol* 2023;112(6):747–758 · longitudinal cohort + two-sample Mendelian randomization (Rotterdam Study); n=12,334; median follow-up 9.4 years; 1,302 incident AF cases · observational: **higher** SDNN (HR 1.24, 95% CI 1.04–1.47) and higher RMSSD (HR 1.33, 95% CI 1.13–1.54) associated with **increased** incident AF, especially in women; MR: **supported causal association** — genetically determined SDNN (IVW OR 1.60, 95% CI 1.27–2.02, p=8.36×10⁻⁵) and RMSSD (IVW OR 1.56, 95% CI 1.31–1.86, p=6.32×10⁻⁷) both associated with increased AF; no heterogeneity or pleiotropy; conclusion: modulating HRV may reduce AF risk, particularly in women · model: humans (population-based) · PMID: 35962833

[^nunan2010norms]: doi:10.1111/j.1540-8159.2010.02841.x · Nunan D, Sandercock GR, Brodie DA · *Pacing Clin Electrophysiol* 2010;33(11):1407–1417 · systematic review (quantitative) · n=21 studies; provides normative RMSSD/SDNN values for short-term (5 min) HRV in healthy adults across age groups; substantial inter-individual variability documented · model: humans (healthy adults) · PMID: 20663071

[^laborde2022]: doi:10.1016/j.neubiorev.2022.104711 · Laborde S, Allen MS, Borges U, Dosseville F, Hosang TJ, Iskra M, Mosley E, Salvotti C, Spolverato L, Zammit N, Javelle F · *Neurosci Biobehav Rev* 2022;138:104711 · systematic review + meta-analysis · 223 studies (172 during session; 16 immediate post-session; 49 multi-session) · consistent increases in vagally-mediated HRV with voluntary slow breathing during sessions, immediately after, and with sustained multi-session practice; supports slow breathing as accessible intervention to augment parasympathetic tone · model: humans · PMID: 35623448

[^elmalahi2024]: doi:10.1371/journal.pone.0299793 · El-Malahi O, Mohajeri D, Mincu R, Bäuerle A, Rothenaicher K, Knuschke R, Rammos C, Rassaf T, Lortz J · *PLoS One* 2024;19(4):e0299793 · systematic review + meta-analysis (RCTs and non-RCTs in CVD patients with CHF, CAD, PAD, or ACS/MI) · n=19 studies with accessible results from 22 reports; 16 studies in the meta-analysis · overall short-term pooled: SDNN significant (SMD 0.30, p=0.01); RMSSD overall not significant (SMD 0.32, p=0.15); CHF subgroup: RMSSD (p=0.01) and SDNN (p=0.02) significant; 24-h LF/HF ratio improved (p=0.05) · model: humans with established cardiovascular disease · PMID: 38578755
