---
type: biomarker
aliases: [VO2 max, maximum oxygen uptake, peak oxygen uptake, VO2peak, cardiorespiratory fitness, CRF]
modality: physical-performance
unit: mL O₂ / kg / min (relative); mL O₂ / min (absolute — preferred for very obese or very lean individuals where body-mass normalization distorts comparisons)
training-cohort: "Mandsager 2018: n=122,007 Cleveland Clinic patients; Kokkinos 2010: n=5,314 male veterans; Kodama 2009 meta-analysis: n=102,980 all-cause mortality; Lang 2024 overview: 20.9 million observations, 199 cohort studies"
n-cpgs-or-features: 1
training-target: mortality
calibration-tissues: ["[[skeletal-muscle]]", "[[heart]]", "[[lungs]]"]
test-retest-icc: null
human-evidence-level: strong
mendelian-randomization: partial
intervention-responsive: yes
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Mandsager 2018, Kokkinos 2010, Lang 2024, Kjaergaard 2025 verified against primary source PDFs. Kodama 2009 and Poon 2021 are closed-access (not_oa); claims from those sources flagged below. Dehn 1972 citation metadata confirmed via PubMed PMID 4643862 but abstract unavailable; Tanaka 2000 citation corrected (wrong paper; see corrections). ACSM normative tables not independently re-verified."
---


# VO₂max (Cardiorespiratory Fitness Biomarker)

VO₂max — maximal oxygen uptake — is the most-validated functional aging biomarker in the human literature. It represents the upper limit of the oxygen-transport-and-utilization system under maximal exercise stress and integrates cardiac output, pulmonary ventilation, blood oxygen-carrying capacity, capillary density, and peripheral mitochondrial O₂ extraction into a single number. It is the only aging biomarker with decades of large-cohort prospective mortality data, a quantified per-MET dose-response relationship, and a well-characterized training response. The mortality gradient across fitness tiers is steeper than most conventional cardiovascular risk factors [^lang2024] [^mandsager2018].

## Identity and Measurement

- **Gold standard:** Cardiopulmonary exercise testing (CPET) with metabolic cart — measures expired VO₂ and VCO₂ breath-by-breath during a ramp protocol until volitional exhaustion. Plateau criterion (VO₂ fails to rise >2.1 mL/kg/min despite continued load increase) confirms true maximum was reached.
- **Common protocols:** Bruce treadmill (clinical standard; grade-and-speed increments), modified Bruce (attenuated for older adults), ramp protocols (individualized watt-per-minute increase to achieve 8–12 min test duration), cycle ergometer (lower leg-fatigue confound; preferred in elderly or orthopedic-limited).
- **Estimated VO₂max (non-maximal tests):** Astrand-Rhyming cycle nomogram (~10–15% error); 6-minute walk test prediction equations; Cooper 12-minute run; submaximal treadmill equations (YMCA protocol). All carry substantial individual error (±3–5 mL/kg/min typical) but are used when CPET is contraindicated. #gap/dose-response-unclear — submaximal estimates may not capture the mortality-risk gradients demonstrated with direct CPET.
- **Units convention:** Relative VO₂max (mL/kg/min) is used for fitness-category assignment, mortality risk stratification, and age-sex norms. Absolute VO₂max (L/min or mL/min) is preferred when body-mass normalization confounds interpretation (e.g., very obese individuals appear fitter when absolute is used, very lean appear less fit).

## Aging Trajectory

Relative VO₂max declines approximately **1% per year** after age 25–30 in sedentary untrained adults [^dehn1972]. The decline accelerates after age 70, reaching ~2% per year in the very old. Trained individuals show a substantially attenuated slope — endurance-trained older adults retain substantially higher VO₂max relative to their sedentary peers [^tanaka2000]. #gap/needs-replication — the precise "20–30 years younger equivalent" framing is commonly cited but the Tanaka et al. primary citation below was mis-attributed; this claim needs a verified primary source.

Key contributors to age-related VO₂max decline:
- Reduced maximal heart rate (~1 beat/min/year; largely intrinsic SA-node remodeling)
- Declining stroke volume (cardiac remodeling, reduced preload reserve, diastolic stiffening)
- Loss of skeletal-muscle mitochondrial density and capillary-to-fiber ratio
- Reduced arteriovenous O₂ difference at the muscle (peripheral extraction falls)
- Declining hemoglobin mass in some individuals

| Age decade | Approximate VO₂max (mL/kg/min) — untrained men / women |
|---|---|
| 20–29 | ~43 / ~36 |
| 40–49 | ~36 / ~30 |
| 60–69 | ~27 / ~22 |
| 70–79 | ~22 / ~18 |

These are approximate midpoint estimates from ACSM normative tables; wide individual variation applies. #gap/needs-replication — these norms derive from older cohort studies; modern sedentary populations may show different trajectories.

## Mortality Evidence

### Mandsager 2018 — Cleveland Clinic (primary reference for this page)

The largest single-cohort prospective study of CPET-measured VO₂max and mortality [^mandsager2018]:

- **n = 122,007** patients (mean age 53.4 years; 59.2% male) undergoing exercise treadmill testing at Cleveland Clinic, 1991–2014
- **Follow-up:** 1.1 million person-years; 13,637 deaths
- **Fitness tiers defined by age-sex percentile:** Low (<25th), Below-Average (25–49th), Above-Average (50–74th), High (75–97.6th), Elite (≥97.7th)
- **Key result:** Elite performers had adjusted HR 0.20 (95% CI 0.16–0.24) compared to **Low performers** — a ~5-fold mortality difference
- **Select pairwise comparisons from Figure 2C (adjusted HRs; Low is primary reference for main analysis):**

| Comparison | Adjusted HR | 95% CI | P |
|---|---|---|---|
| Low vs Elite (Low at risk) | 5.04 | 4.10–6.20 | <.001 |
| Low vs High | 3.90 | 3.67–4.14 | <.001 |
| Low vs Above Average | 2.75 | 2.61–2.89 | <.001 |
| Low vs Below Average | 1.95 | 1.86–2.04 | <.001 |
| Below Average vs Elite | 2.59 | 2.10–3.19 | <.001 |
| Above Average vs Elite | 1.84 | 1.49–2.26 | <.001 |
| High vs Elite | 1.29 | 1.05–1.60 |.02 |

- The mortality risk of being in the Low fitness category "was comparable to or greater than" traditional cardiovascular risk factors: CAD (adjusted HR 1.29; 95% CI 1.24–1.35), smoking (HR 1.41; 95% CI 1.36–1.46), and diabetes (HR 1.40; 95% CI 1.34–1.46) (paper's reported values from Figure 2C).
- **Critically: there was no upper limit to the mortality benefit** — Elite fitness conferred substantially greater protection than High fitness, with no evidence of harm at the highest fitness levels.

### Kodama 2009 JAMA — Quantitative per-MET dose-response meta-analysis [^kodama2009]

#gap/no-fulltext-access — Kodama 2009 is closed-access; specific quantitative claims below could not be verified against the primary PDF and are from the seeder's training knowledge. The numerics (n, RR values) are consistent with what Lang 2024 cites from Kodama (see Fig 2 of Lang 2024: Kodama n=31,010 for high vs low comparison; n=85,315 for per-MET comparison — these differ from the n reported below, suggesting the per-PDF numbers need verification).

- **n = 102,980 participants (all-cause mortality); 84,323 (cardiovascular events)** across 33 studies #gap/no-fulltext-access
- Per 1-MET increase in fitness: all-cause mortality RR 0.87 (95% CI 0.84–0.90) — a 13% reduction per MET #gap/no-fulltext-access
- Low fitness vs high fitness: all-cause mortality RR 1.70 (95% CI 1.51–1.92); CV event RR 1.56 (95% CI 1.39–1.75) #gap/no-fulltext-access
- Per-MET dose-response relationship is the basis for clinical target-setting (achieving 8–10 METs substantially exceeds minimum health thresholds)

### Kokkinos 2010 — Older men 20-year follow-up [^kokkinos2010]

- **n = 5,314 male veterans aged 65–92** (mean 71.4±5.0 years); median follow-up 8.1 years; 2,137 deaths
- Each 1-MET increase: adjusted HR 0.88 (95% CI 0.86–0.90) — 12% mortality reduction per MET
- Achieving 5.1–6.0 METs: HR 0.62 (38% lower mortality) vs ≤4 METs reference
- Achieving >9 METs: HR 0.39 (61% lower mortality)
- **Key message for older adults:** the survival gradient extends into very old ages; even modest fitness improvement (from low to moderate) yields substantial mortality benefit

### Lang 2024 — Overview of meta-analyses (broadest evidence base) [^lang2024]

- **20.9 million observations; 199 cohort studies** (largest evidence synthesis to date)
- High vs low fitness: HR 0.47 for all-cause mortality (95% CI 0.39–0.56) — greater than 2-fold mortality difference
- Each 1-MET increase: 11–17% mortality reduction depending on endpoint
- For heart failure: high vs low fitness HR 0.31 (markedly protective)
- Evidence graded "consistent" across populations, sex, and global regions
- Local PDF available in a local paper archive

## Mendelian Randomization and Causal Status

`mendelian-randomization: partial` — instruments available; MR conducted; result is **null for longevity**.

Kjaergaard 2025 conducted a 2-sample MR using genetic instruments for VO₂max and tested association with longevity and type 2 diabetes in large GWAS cohorts [^kjaergaard2025]:

- **Key null result:** Genetically predicted VO₂max showed **no association with longevity** in MR analysis
- **Multivariable MR:** after including body fat percentage and type 2 diabetes, neither CRF nor body composition showed independent causal effects; body fat and T2D showed independent causal effects on longevity
- **Interpretation:** The large observational mortality associations (Mandsager, Kodama, etc.) may partly reflect confounding — fitter individuals tend to have lower body fat, lower T2D risk, better metabolic health; the CRF-mortality gradient may be substantially mediated by downstream cardiometabolic state rather than CRF per se

This MR null result is an important caveat:
- It does NOT mean exercise is ineffective — exercise interventions improve both CRF and cardiometabolic risk factors simultaneously
- It does NOT mean VO₂max is not a valid biomarker — it remains the strongest prognostic integrator available
- It does suggest caution in treating CRF itself as a causal driver of longevity independent of metabolic state

| Dimension | Status |
|---|---|
| VO₂max observationally predicts mortality? | Yes (very strong; decades of data; Lang 2024) |
| VO₂max causally predicts longevity (MR)? | Not established — Kjaergaard 2025 MR null |
| Could confounding explain observational gradient? | Partly yes (body fat, T2D, lifestyle factors) |
| Does training-induced VO₂max increase extend lifespan? | Not demonstrated in humans; RCTs power too short #gap/long-term-unknown |

## Intervention Responsiveness

VO₂max is **the most plastic of the aging biomarkers** — training responses in weeks to months are large relative to baseline measurement error, unlike DNAm clocks, proteomics scores, or telomere length.

### Aerobic training response

Typical responses in older adults (≥55 years) with supervised aerobic exercise 3–5×/week, 12–16 weeks:
- Moderate-intensity continuous training (MICT): +1.5–2.5 mL/kg/min (~5–10% increase) [^poon2021]
- High-intensity interval training (HIIT): +2.5–4.5 mL/kg/min (~10–20% increase) [^poon2021]
- **Norwegian 4×4 protocol** (4 min at 85–95% HRmax, 4 intervals, 3×/week): the best-studied HIIT format for VO₂max gains in older adults; associated with superior adaptations vs MICT in direct comparisons

Poon 2021 meta-analysis (n=429; 14 studies; middle-aged and older adults) found HIIT produced 1.10 mL/kg/min greater VO₂max improvement vs MICT (between-group, 95% CI positive). Both modalities are effective; the difference between HIIT and MICT may be less important than adherence and total volume. #gap/dose-response-unclear — optimal HIIT prescription (frequency, intensity target, interval duration, rest interval) for older adults not yet standardized. #gap/no-fulltext-access — Poon 2021 is closed-access; specific quantitative claims (1.10 mL/kg/min between-group difference, within-group gains) could not be verified against the primary PDF.

### Effect size in context

A 3–5 mL/kg/min gain through 12–16 weeks of training spans approximately one fitness category (e.g., from "Below-Average" to "Above-Average" by Mandsager criteria). The Kokkinos data suggest moving from low (≤4 METs) to moderate (5–6 METs) fitness confers ~38% lower mortality risk. Whether the exercise-induced VO₂max improvement translates to equivalent mortality benefit as being constitutively fit is not established in RCT data. #gap/needs-replication

### Cardiac adaptation mechanisms

- Increased stroke volume (Frank-Starling reserve, LV eccentric remodeling with training)
- Greater a-vO₂ difference at the muscle (increased capillary density, mitochondrial density, oxidative enzyme activity)
- Enhanced sympathetic drive and catecholamine sensitivity at submaximal loads
- Possible increase in hemoglobin mass with endurance training

## Hallmark Linkage

VO₂max integrates dysfunction across multiple aging hallmarks:

| Hallmark | Connection |
|---|---|
| [[mitochondrial-dysfunction]] | Reduced skeletal-muscle mitochondrial density → lower peripheral O₂ extraction → lower VO₂max; training reverses via PGC-1α-driven biogenesis |
| [[deregulated-nutrient-sensing]] | mTOR/AMPK imbalance → reduced mitochondrial biogenesis; aerobic exercise activates AMPK, partially restoring mitochondrial quality |
| [[stem-cell-exhaustion]] | Satellite-cell exhaustion and reduced cardiomyocyte renewal → impaired cardiac-muscle plasticity, limiting stroke-volume training adaptations |
| [[chronic-inflammation]] | Elevated IL-6, TNF-α, and CRP associated with accelerated VO₂max decline; exercise acutely raises IL-6 but chronically reduces resting inflammatory tone |

Cross-references:
- [[interventions/lifestyle/exercise]] — canonical exercise intervention page; training protocols and hallmark evidence
- [[biomarkers/dunedinpace-2022]] — VO₂max is one of the 19 DunedinPACE training biomarkers; DunedinPACE responds to CR; unclear if isolated VO₂max training moves DunedinPACE
- [[phenotypes/sarcopenia]] — VO₂max decline and sarcopenia co-occur and share mitochondrial mechanisms
- [[phenotypes/cardiovascular-aging]] — VO₂max is the integrative readout of cardiovascular aging
- [[hallmarks/mitochondrial-dysfunction]] — primary peripheral mechanism

## Reference Ranges (ACSM / Cooper Aerobics Norms)

ACSM fitness categories by VO₂max (mL/kg/min) — approximate age-sex midpoints; verify against current ACSM guidelines:

| Category | Men 50–59 | Women 50–59 | Men 60–69 | Women 60–69 |
|---|---|---|---|---|
| Very Poor | <20.4 | <15.7 | <17.5 | <13.0 |
| Poor | 20.4–22.4 | 15.7–18.7 | 17.5–20.4 | 13.0–15.7 |
| Fair | 22.5–26.4 | 18.8–22.6 | 20.5–24.4 | 15.8–19.9 |
| Good | 26.5–31.9 | 22.7–28.7 | 24.5–29.4 | 20.0–24.5 |
| Excellent | 32.0–40.4 | 28.8–35.7 | 29.5–36.4 | 24.6–31.5 |
| Superior | ≥40.5 | ≥35.8 | ≥36.5 | ≥31.6 |

#gap/needs-replication — these norms are from ACSM 2013 guidelines; ranges may differ from Mandsager's Cleveland Clinic percentile-based "Elite/High/Above-Average" categorization. Always cite the specific normative reference used.

## Clinical Use as a Biomarker

### Advantages over other aging biomarkers

- **Mechanistically transparent** — directly measures the integrative oxygen-delivery system; not a proxy
- **Highly validated** — the largest prospective human dataset of any aging-relevant biomarker (>20 million observations)
- **Intervention-responsive within weeks** — interpretable as both a status biomarker and an outcome measure in trials
- **No DNA/blood required** — accessible in any clinical exercise physiology setting
- **No batch effects, array drift, or cell-composition confounders** (unlike DNAm clocks)

### Disadvantages and limitations

- **Test effort-dependent** — requires maximal volitional effort; patient motivation, pain, orthopedic limitation, and beta-blocker use all affect the measured value
- **Single-system view** — reflects cardiorespiratory health but not epigenetic aging, proteostasis, genomic stability, or inflammatory tone
- **Direct CPET not universally available** — requires metabolic cart and skilled technician; estimation methods carry substantial individual error
- **No upper harm threshold established** — but conversely, very high VO₂max in older adults may partly reflect survivorship bias (those with underlying disease have dropped out)
- **MR null for longevity** — the causal interpretation of the observational gradient is uncertain; confounding by body composition and metabolic disease cannot be excluded [^kjaergaard2025]

## R35 Stage 2 Context

VO₂max is a key functional baseline biomarker for tracking intervention response. As a physical-performance biomarker with weekly test-retest fidelity, it is suitable for protocol monitoring on a 3–6 month cadence alongside blood-based molecular biomarkers. Direct CPET provides the most interpretable datapoint; submaximal estimation acceptable between formal assessments.

## Limitations and Gaps

- `#gap/long-term-unknown` — No RCT has demonstrated that training-induced VO₂max improvements reduce all-cause mortality over multi-year follow-up; all mortality data are observational
- `#gap/needs-replication` — ACSM normative ranges need re-verification against current post-2020 population data
- `#gap/no-mechanism` — Causal pathway from VO₂max to longevity (vs body composition / metabolic confounders) is not yet established; MR evidence null
- `#gap/dose-response-unclear` — Optimal HIIT prescription (frequency, intensity, duration) for maximizing VO₂max gains and mortality-relevant adaptations in older adults (≥65) not standardized

## Footnotes

[^mandsager2018]: doi:10.1001/jamanetworkopen.2018.3605 · Mandsager K, Harb S, Cremer P, Phelan D, Nissen SE, Jaber W · *JAMA Network Open* 2018;1(6):e183605 · n=122,007 patients (Cleveland Clinic Jan 1991–Dec 2014; median follow-up 8.4 yr; 1.1M person-years; 13,637 deaths) · retrospective cohort · primary result: Elite vs Low performers: adjusted HR 0.20 (95% CI 0.16–0.24); Low vs Elite: HR 5.04 (4.10–6.20) · model: humans (mean age 53.4 yr; 59.2% male) · archive: gold OA; PDF verified

[^kodama2009]: doi:10.1001/jama.2009.681 · Kodama S, Saito K, Tanaka S, Maki M, Yachi Y, Asumi M, Sugawara A, Totsuka K, Shimano H, Ohashi Y, Yamada N, Sone H · *JAMA* 2009;301(19):2024–2035 · n=102,980 (all-cause mortality); 84,323 (CV events) · meta-analysis (33 studies) · per 1-MET increase: all-cause mortality RR 0.87 (95% CI 0.84–0.90); low vs high fitness: RR 1.70 (95% CI 1.51–1.92) · model: humans · archive: not OA (closed-access; `not_oa` per a local paper archive) — claims unverified against full PDF #gap/no-fulltext-access · citation percentile: 100th

[^kokkinos2010]: doi:10.1161/CIRCULATIONAHA.110.938852 · Kokkinos P, Myers J, Faselis C, Panagiotakos DB, Doumas M, Pittaras A, Manolis A, Kokkinos JP, Karasik P, Greenberg M, Papademetriou V, Fletcher R · *Circulation* 2010;122(8):790–797 · n=5,314 male veterans (aged 65–92 yr; mean 71.4±5.0 yr; median follow-up 8.1 yr [range 0.1–25.3 yr]; 47,170 person-years; 2,137 deaths) · retrospective cohort (VETS study; 1986–2008) · per 1-MET increase: adjusted HR 0.88 (95% CI 0.86–0.90); 5.1–6 METs vs ≤4 METs: HR 0.62 (0.54–0.71); >9 METs vs ≤4 METs: HR 0.39 (0.32–0.49) · model: humans (US veterans, older men, Washington DC and Palo Alto VA medical centers) · archive: bronze OA; PDF verified

[^lang2024]: doi:10.1136/bjsports-2023-107849 · Lang JJ, Prince SA, Merucci K, Cadenas-Sanchez C, Chaput JP, Fraser BJ, Manyanga T, McGrath R, Ortega FB, Singh B, Tomkinson GR · *British Journal of Sports Medicine* 2024 (Epub ahead of print) · 20.9 million observations from 199 cohort studies (26 systematic reviews included) · overview of meta-analyses · high vs low CRF all-cause mortality: HR 0.47 (95% CI 0.39–0.56) [Han 2022, highest quality meta-analysis for this outcome, n=2,187,550]; per 1-MET all-cause mortality: HR 0.89 (95% CI 0.86–0.92) and HR 0.83 (95% CI 0.78–0.88) across two constituent meta-analyses (11–17% reduction); heart failure incidence high vs low CRF: HR 0.31 (95% CI 0.19–0.49) [Aune 2021] · model: humans (global; multiple populations) · archive: local PDF verified (hybrid OA) · citation percentile: 100th

[^kjaergaard2025]: doi:10.1210/clinem/dgae393 · Kjaergaard AD, Ellervik C, Jessen N, Lessard SJ · *Journal of Clinical Endocrinology & Metabolism* 2025;110(5):1451–1459 (published online June 2024; print 2025) · 2-sample Mendelian randomization · genetically predicted VO₂max: no association with longevity in MR analysis (Fig 4; Tables S3–S6); body fat % and T2D show independent causal effects on longevity in MVMR; lean mass association with longevity disappears after adjusting for body fat % · model: humans (European-ancestry GWAS cohorts; VO₂max estimated from submaximal cycle ramp test in ~70,783 UK Biobank participants) · archive: PMC OA (PMC12012764); PDF verified

[^poon2021]: doi:10.1080/02640414.2021.1912453 · Poon ETC, Wongpipit W, Ho RST, Wong SHS · *Journal of Sports Sciences* 2021;39(17):1996–2004 · n=429 (14 studies; middle-aged and older adults) · meta-analysis (systematic review and meta-analysis) · HIIT vs MICT: between-group VO₂max advantage 1.10 mL/kg/min (95% CI positive); HIIT within-group gain 2.26 mL/kg/min; MICT within-group gain 1.34 mL/kg/min · model: humans (middle-aged and older adults) · archive: closed-access (`not_oa` per a local paper archive) — claims unverified against full PDF #gap/no-fulltext-access

[^dehn1972]: Dehn MM, Bruce RA · *Journal of Applied Physiology* 1972;33(6):805–807 · PMID 4643862 · longitudinal observational · VO₂max decline ~1%/year after age 25 in sedentary adults · citation metadata confirmed via PubMed; abstract not indexed; full-text pre-DOI (no OA copy in archive) — exact quantitative claim unverified against primary PDF · #gap/needs-replication — foundational reference from 1972; modern large-cohort replication of the exact rate would strengthen this claim

[^tanaka2000]: **Citation mis-attributed.** Tanaka H, Monahan KD, Seals DR · *Journal of the American College of Cardiology* 2001;37(1):153–156 · doi:10.1016/s0735-1097(00)01054-8 · This paper examines **age-predicted maximal heart rate** (not VO₂max aging in masters athletes); it is not the appropriate source for the VO₂max–masters-athlete claim on this page. A related paper by Wilson TM & Tanaka H (*American Journal of Physiology-Heart and Circulatory Physiology* 2000;278(3):H829–H834; doi:10.1152/ajpheart.2000.278.3.h829) meta-analyses age-associated VO₂max decline by training status in men and may be the intended source — verify before substituting. #gap/unsourced — the VO₂max-masters-athlete claim needs a correctly attributed primary source.
