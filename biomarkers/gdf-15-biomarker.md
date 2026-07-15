---
type: biomarker
aliases: [GDF15 serum, GDF-15 plasma, MIC-1 serum, growth differentiation factor 15 biomarker, GDF15 aging biomarker]
modality: proteomic
unit: pg/mL
training-cohort: |
  Multiple independent cohorts established mortality/frailty association:
  - Wiklund 2010 (Uppsala/Swedish population): n=876 males + 324 twins; up to 14-year follow-up; all-cause mortality
  - Kempf 2007 (Clinical Chemistry): n=429 apparently healthy elderly; GDF-15 distribution in aging reference population
  - Dallmeier 2016 (KAROLA cohort): n=1,073 stable coronary heart disease; CVE + death endpoints; median follow-up not stated
  - Kim 2022 (Korean Frailty and Aging Cohort Study): n=929 community-dwelling older adults; sarcopenia association
  - Fujita 2023 (Japanese community-dwelling cohort): n=1,801 older adults; all-cause mortality
  - Webber 2024 (Health ABC + CHS): n=2,677 (Health ABC n=1,174; CHS n=1,503); mean age 75.4 yrs; disability, CVD, dementia, mortality
  - Sánchez-Sánchez 2026 (MAPT study): n=1,096 community-dwelling; frailty incidence 4-yr follow-up
n-cpgs-or-features: 1
training-target: mortality
calibration-tissues: ["[[blood]]"]
test-retest-icc: null
human-evidence-level: strong
mendelian-randomization: partial
intervention-responsive: partial
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Webber 2024 (preprint PDF), Chen 2026/Protein&Cell (peer-reviewed PDF), Hansen 2026/GeroScience (peer-reviewed PDF), MAPT 2026/JCSM (peer-reviewed PDF) verified against full PDFs. Wiklund 2010 verified via PubMed abstract (PMID 20854422; closed-access, no full PDF). Kim 2022, Fujita 2023 verified via PubMed abstracts (closed-access). Kempf 2007 PDF download failed (bronze OA 403); abstract-level values not independently re-checked beyond existing footnote note. Dallmeier 2016 not in archive (DOI not found); claims not verified beyond existing footnote annotation. Canonical-database identity fields not applicable (type:biomarker). Senolytics-reduce-GDF-15 claim remains #gap/unsourced — no published human RCT identified."
---

# GDF-15 as an Aging Biomarker (Serum/Plasma)

Serum GDF-15 (growth differentiation factor 15) is a single-analyte proteomic biomarker that rises monotonically with age and is among the most robustly validated predictors of all-cause mortality, frailty, physical decline, and dementia in elderly cohorts — consistently outperforming standard clinical risk factors in large prospective studies. This page covers the **clinical serum interpretation in aging cohorts**: reference ranges, mortality and frailty prediction, intervention-responsiveness, and current limitations. For receptor biology, upstream regulation, and molecular mechanism, see [[gdf15]].

GDF-15 is also one of seven plasma-protein DNAm surrogates embedded in the [[grimage-2019]] clock — its methylation-predicted level is one of the strongest individual contributors to that clock's mortality-predictive power.

## Identity

- **Protein page:** [[gdf15]] — gene biology, GFRAL receptor, UPRmt mechanism, metformin connection, therapeutic landscape
- **Canonical assay modality:** Serum or EDTA-plasma immunoassay (ELISA or electrochemiluminescence; Roche Elecsys GDF-15 assay widely used in cohort studies)
- **Unit:** pg/mL (= ng/L; the two units are numerically equivalent)
- **Pre-analytical considerations:** Stable in serum/plasma; freeze-thaw cycles affect some assays; fasting status modestly influences levels; hemolysis should be avoided. No strong circadian variation reported.
- **Cross-reference:** GDF-15 is embedded as a DNAm surrogate (proxy) in [[grimage-2019]] (verified); GDF-15 is one of the 1,301-protein aging atlas analytes in [[biomarkers/lehallier-proteomic-clock-2019]]

## Aging Trajectory

GDF-15 rises with age more consistently than almost any other circulating protein. In apparently healthy elderly individuals (n=429), Kempf et al. found a median serum GDF-15 of **762 pg/mL** (IQR 600–959 pg/mL) [^kempf2007]. This population skewed older (mean age not stated but recruited from cardiology referral and general population); values in younger healthy adults are substantially lower.

In the Chinese multicenter reference-interval study (n=7,764 healthy adults across six cities), GDF-15 levels increased significantly with age in both males and females, with males consistently higher than females at matched ages [^chen2025]. Age- and sex-specific reference intervals were established using non-parametric 2.5th–97.5th percentile methods, though exact decade-level values were not reported in the abstract.

In the Dallmeier 2016 KAROLA study of stable coronary heart disease patients (n=1,073; median age not specified in abstract), median baseline GDF-15 was **1,232 pg/mL** — substantially higher than the healthy-elderly range above, consistent with cardiovascular disease burden driving GDF-15 elevation [^dallmeier2016].

### Approximate age-stratified ranges (healthy individuals, general population)

The table below synthesizes data from Kempf 2007 and the broader literature. **These values are approximate summaries and should not be used for clinical reference without verification against assay-specific manufacturer reference intervals.** #gap/needs-replication — assay-specific reference intervals vary; the Roche Elecsys and Quantikine ELISA differ in calibration.

| Age group | Approximate median (pg/mL) | Notes |
|---|---|---|
| 20–40 yrs | ~400–600 | Healthy adults; data sparse |
| 40–60 yrs | ~600–900 | Rises with metabolic aging, subclinical disease |
| 60–75 yrs | ~900–1,300 | Community-dwelling; disease burden increasing |
| 75–85 yrs | ~1,300–2,000 | Frailty threshold (~2,000) emerging |
| 85+ yrs | often >2,000 | High disease burden; anorexia of aging range |

The ~1,500 pg/mL upper reference limit applied in clinical vascular studies (Park 2026: healthy controls 1,016±219 pg/mL; 17/20 atherosclerotic disease patients exceeded 1,500) is consistent with the Kempf elderly median plus 2SD [^kempf2007]. #gap/dose-response-unclear — no single authoritative reference range for aging-population clinical use has been adopted across assay platforms.

## Clinical Mortality Association

### Wiklund 2010 — Swedish population cohort

In a Swedish population-based study (Uppsala Longitudinal Study of Adult Men + twin sub-cohort; n=876 males + 324 twins; up to 14 years of follow-up), serum MIC-1/GDF-15 was an independent predictor of all-cause mortality with an adjusted odds ratio of death of **3.38** (95% CI 1.38–8.26) for high vs. low GDF-15, independent of BMI and comorbidities [^wiklund2010]. This paper established GDF-15 as a novel marker of all-cause mortality in aging men.

### Fujita 2023 — Japanese community-dwelling older adults

In a Japanese community-dwelling cohort (n=1,801 older adults), higher serum GDF-15 quartile predicted total mortality with an HR of **1.98** (95% CI 1.09–3.59) for the highest vs. lowest quartile, adjusted for demographics and clinically relevant variables [^fujita2023]. Critically, the association became non-significant when further adjusted for cystatin C (HR 1.65, 95% CI 0.89–3.05) or β2-microglobulin (HR 1.69, 95% CI 0.91–3.12), suggesting GDF-15's mortality prediction in this cohort is substantially confounded by kidney function biomarkers — a finding that meaningfully limits its interpretation as a pure aging signal.

### Webber 2024 — Health ABC + Cardiovascular Health Study (preprint; PMC11326340)

In the largest cohort analysis identified (n=2,677; Health ABC n=1,174 + CHS n=1,503; mean age 75.4±4.4 years), highest vs. lowest GDF-15 quartile was associated with [^webber2024]:

| Outcome | HR (highest vs. lowest quartile) |
|---|---|
| All-cause mortality | 1.81 (1.53–2.15) |
| Severe mobility disability | 2.13 (1.64–2.77) |
| Heart failure | 2.09 (1.66–2.64) |
| Atherosclerotic CVD | 1.56 (1.22–1.98) |
| Coronary heart disease | 1.47 (1.17–1.83) |
| Dementia (CHS only) | 3.50 (1.97–6.22) |

These HRs are from a preprint (medRxiv; no peer-reviewed journal publication identified as of 2026-05-09) and have been verified against the preprint PDF. #gap/needs-replication — peer-reviewed publication pending; findings should be confirmed once journal-reviewed version is available.

### Dallmeier 2016 — KAROLA stable coronary heart disease cohort

In n=1,073 patients with stable coronary heart disease, both elevated baseline GDF-15 and 12-month change in GDF-15 predicted CVE and total mortality. Adjusted HR for elevated baseline GDF-15: **1.68** (95% CI 1.08–2.62) for cardiovascular events and **1.73** (1.02–2.94) for death. Median 12-month change was −16.7% — GDF-15 fell modestly over a year in this disease population [^dallmeier2016]. The decline may reflect regression to the mean or treatment effects rather than a generic aging trend.

### Summary extrapolation table

| Dimension | Status |
|---|---|
| GDF-15 mortality correlation in humans? | yes — multiple large cohorts; all-cause mortality, CVD, frailty |
| Pathway conserved across populations? | yes — consistent across Swedish, Japanese, Korean, US cohorts |
| GDF-15 causally drives mortality in MR? | partial — some MR evidence; see Mendelian Randomization section |

## Frailty and Sarcopenia Association

In a cross-sectional Korean community-dwelling cohort (Korean Frailty and Aging Cohort Study; n=929, aged 70–84 yrs), sarcopenic individuals had median GDF-15 of **1,221 pg/mL vs. 1,019 pg/mL** (non-sarcopenic; p<0.001); highest tertile (≥1,245 pg/mL) associated with OR 1.96 (95% CI 1.16–3.33) for sarcopenia vs. lowest (<885 pg/mL). However, the prospective component (n=788, 2-year follow-up) found no significant association with incident sarcopenia, raising questions about directionality [^kim2022].

The MAPT study (n=1,096 community-dwelling adults, mean age 75.3±4.4 years; 63.9% female) found high GDF-15 (≥1,500 pg/mL) cross-sectionally associated with frailty (Fried phenotype ≥3 criteria; high vs. low: OR=3.56, 95% CI 1.58–8.03 in Model 3, adjusted for age, sex, BMI, MAPT group, education, and IL-6) [^sanchezsanchez2026]. Longitudinally, high GDF-15 predicted incident frailty over 4 years in the minimally adjusted model (HR=1.69, 95% CI 1.03–2.78, Model 1: age and sex only), but this association became non-significant in the fully adjusted model (HR=1.40, 95% CI 0.85–2.33, Model 4: additional comorbidities). This attenuation limits the strength of the prospective claim.

In mobility-limited older adults (n=429 BIOFRAIL study; mean age 79.6±6.2 years; 64% female; frailty by Clinical Frailty Scale ≥5), median GDF-15 was **2,252 pg/mL** in frail vs. **1,438 pg/mL** in non-frail (p<0.001); optimal frailty cut-off 2,047 pg/mL (AUC 0.681, 95% CI: 0.623–0.739) [^hansen2026]. For sarcopenia (EWGSOP2), median GDF-15 was 1,916 pg/mL vs. 1,569 pg/mL in non-sarcopenic (p=0.035), but discriminatory accuracy was poor (AUC 0.577).

## Mechanism Context

GDF-15 does not drive mortality or frailty directly — it is a **systemic reporter of integrated stress** that rises in proportion to the burden of multiple hallmarks simultaneously. The upstream mechanisms are detailed in [[gdf15]]; the clinical interpretation consequence is:

- GDF-15 elevation = weighted sum of [[mitochondrial-dysfunction]] (via UPRmt → ATF4 → GDF-15), [[cellular-senescence]] (SASP cytokine milieu activating NF-κB → GDF-15), and [[chronic-inflammation]] (NF-κB and HIF-1α transcription of GDF-15)
- Because GDF-15 integrates multiple upstream stressors, it has high prognostic value but low specificity for any individual hallmark
- Its appetite-suppressive effect (via brainstem GFRAL) means that **very high GDF-15 in frail elderly may actively worsen anorexia of aging** — making GDF-15 not purely a bystander biomarker but a potential active contributor to the sarcopenia-anorexia-cachexia spiral

#gap/no-mechanism — whether reducing GDF-15 (via anti-GFRAL/anti-GDF-15 antibodies) in elderly individuals with elevated GDF-15 would improve functional outcomes is unknown. Trials exist for cancer cachexia (ponsegromab; see [[gdf15]] for details) but not aging per se.

## Mendelian Randomization Status

**Status: partial** — MR evidence exists but is primarily for cardiovascular endpoints rather than aging per se.

Chen 2026 (UK Biobank, n=53,026; median 14.5-year follow-up) conducted two-sample MR and identified GDF-15 as a "broad-spectrum mediator" with mediation effects across 9 cardiovascular outcomes (median proportion mediated 25.7%), with the strongest observational association for heart failure (P=1.21×10⁻¹⁶⁶) [^chen2026]. MR identified GDF-15 among 225 proteins with causal cardiovascular disease associations. Note: this paper is published in Protein & Cell (peer-reviewed; advance access August 2025), not a preprint.

MR evidence for GDF-15 → all-cause mortality specifically (independent of CVD mediating path) is not established. The instruments used in cardiovascular MR are primarily pQTLs from UK Biobank; aging-specific MR for GDF-15 as a driver of biological aging pace has not been published as of 2026-05-09. #gap/needs-replication — a dedicated MR study of GDF-15 pQTLs against longevity/mortality in an ancestry-diverse cohort is needed.

## Intervention-Responsiveness

### Metformin — paradoxical elevation

Metformin at therapeutic doses elevates serum GDF-15, as established mechanistically in Coll et al. 2020 (intestinal GDF-15 induction; see [[gdf15]] for full discussion). This creates a clinical interpretation challenge: **a patient on metformin who shows elevated GDF-15 does not have an elevated stress signal per se — the elevation is pharmacologically induced**. Kolnes 2026 confirmed that exercise-related GDF-15 research must be interpreted separately from metformin's drug effect [^kolnes2026note].

The metformin-induced GDF-15 elevation may actually be mechanistically beneficial (anorexigenic effect → weight reduction) rather than harmful. This dissociation undermines GDF-15 as an uncontrolled biomarker in populations on metformin.

**Clinical implication:** Always note metformin use when interpreting serum GDF-15 in aging populations. #gap/dose-response-unclear — the magnitude of GDF-15 elevation varies by dose and duration of metformin treatment; population-level reference adjustments have not been established.

### Acute exercise — transient increase

Kleinert et al. 2018 (n=7 healthy males; 1-hour cycling at 67% VO₂max) showed acute exercise raised plasma GDF-15 by **34%** during exercise (p<0.001) and **64% above resting levels** at 120 minutes post-exercise (p<0.001); skeletal muscle was not the source (a-v difference absent) [^kleinert2018]. The source is likely liver, heart, or kidney responding to metabolic/hemodynamic exercise stress.

Interpretation: acute GDF-15 elevation post-exercise is a transient stress signal and should not be used for aging-risk assessment within hours of exercise. Whether chronic exercise training (as opposed to a single bout) lowers resting GDF-15 — as one would predict if exercise reduces the mitochondrial stress and inflammation driving GDF-15 — is not robustly established. #gap/contradictory-evidence — some training studies report modest reduction in resting GDF-15 in older adults; no well-powered RCT establishes a directional consensus.

### Caloric restriction — context-dependent increase

Dostálová et al. 2009 (n=17 obese non-diabetic women; 2-week very low calorie diet) found that VLCD **increased** serum MIC-1/GDF-15 in obese subjects [^dostalova2009]. This parallels the metformin finding: caloric restriction as an acute or severe dietary intervention appears to induce GDF-15 via ISR/ATF4 mechanisms. Whether modest chronic caloric restriction (the geroprotective intervention) in normal-weight individuals has the same effect is unclear. #gap/contradictory-evidence — the CR + GDF-15 relationship has not been characterized in the CALERIE-2 cohort (which would be the most relevant human dataset).

### Senolytics — preliminary decrease

Some senolytic interventions have been associated with reduced GDF-15, consistent with the mechanistic expectation that clearing senescent cells (which contribute to SASP-driven GDF-15 elevation) would reduce circulating levels. Evidence is from small studies and not yet from well-powered RCTs. #gap/needs-replication #gap/unsourced — a verified primary citation for senolytic-driven GDF-15 reduction should be added on verification pass.

## GDF-15 as a GrimAge Component

GDF-15 is one of seven plasma-protein DNAm surrogates embedded in [[grimage-2019]]. The DNAm-based proxy of GDF-15 expression is among the strongest individual contributors to GrimAge's mortality-predictive composite. This means:

1. Biological mechanisms elevating actual serum GDF-15 also tend to elevate GrimAge acceleration
2. GrimAge can detect GDF-15-driven mortality risk even without a direct GDF-15 assay
3. The two measurements are complementary: serum GDF-15 is direct, actionable (can identify metformin confounding, etc.); GrimAge DNAm-GDF-15 proxy integrates methylation changes upstream of the protein level

In the [[biomarkers/lehallier-proteomic-clock-2019]] proteomic aging atlas, GDF-15 was among the proteins with the strongest age-upregulation signal across the human lifespan, particularly in the 4th and 6th decade waves of aging-related protein change. #gap/unsourced — the specific wave assignment for GDF-15 in Lehallier 2019 should be confirmed against the primary source.

## Reference Range Summary

**For clinical aging interpretation** (not diagnostic cut-offs):

| Interpretation zone | Approximate serum GDF-15 | Clinical context |
|---|---|---|
| Normal (young-adult baseline) | <600 pg/mL | Healthy 20–40-yr-old |
| Age-typical (60–75 yrs) | 600–1,300 pg/mL | Community-dwelling; varies by sex and comorbidity |
| Elevated (borderline) | 1,300–2,000 pg/mL | Associated with frailty, metabolic disease |
| High (frailty/disease range) | 2,000–3,000 pg/mL | Frailty threshold ~2,000 in BIOFRAIL; HF risk zone |
| Very high | >3,000 pg/mL | Advanced disease, cancer, heart failure, severe mitochondrial disease |

**Confounders that raise GDF-15 regardless of biological aging:**
- Metformin use (pharmacological ISR induction)
- Acute/recent exercise (transient; resolves within hours)
- Cancer (tumor-derived GDF-15)
- Heart failure (hemodynamic stress)
- Chronic kidney disease (reduced clearance + renal production)
- COPD (hypoxia-driven)
- Severe obesity (metabolic stress)
- Pregnancy (placental production — extremely elevated)

Specificity for aging-related mitochondrial stress and senescence is **low** without exclusion of these confounders. GDF-15 is a sensitive but non-specific aging signal.

## Limitations and Gaps

1. **Specificity problem** — GDF-15 rises with cancer, heart failure, CKD, COPD, pregnancy, and acute illness. It cannot be interpreted as an aging biomarker without careful exclusion of these conditions. It is a non-specific stress integrator, not an aging-specific marker. #gap/contradictory-evidence

2. **Metformin confounding** — Therapeutic metformin elevates GDF-15 via intestinal ISR. Any aging study that does not stratify by metformin use will conflate drug-induced GDF-15 elevation with aging-related elevation. #gap/dose-response-unclear

3. **Assay heterogeneity** — Different immunoassay platforms (Roche Elecsys, Quantikine ELISA, proximity extension assay in Olink panels) do not produce identical absolute values. Reference ranges are assay-specific; the values above are approximations across platforms. #gap/needs-replication

4. **MR evidence gaps** — Causal MR evidence for GDF-15 → biological aging pace (as opposed to cardiovascular endpoints) is not established as of 2026-05-09. pQTLs for GDF-15 exist in UK Biobank proteomics, but a dedicated MR aging study has not been published. #gap/needs-replication

5. **Intervention directionality unclear** — Exercise and CR both appear to acutely increase GDF-15 (ISR activation), while senolytics may decrease it (SASP reduction). Net chronic effect of these interventions on resting GDF-15 — and whether a reduction is biomarker-good or biomarker-bad — has not been systematically characterized. #gap/contradictory-evidence

6. **Sex and menopausal status** — Males consistently have higher GDF-15 than age-matched females in most cohorts, though the gap narrows at older ages. Pregnancy dramatically elevates GDF-15 (placental production). Sex-specific reference ranges and aging trajectories require dedicated analysis. #gap/dose-response-unclear

7. **Causal vs. bystander ambiguity** — Whether elevated GDF-15 drives worse outcomes (via anorexia, muscle wasting through GFRAL-dependent mechanisms) or is purely a bystander of upstream stress is unresolved. See [[gdf15]] for the therapeutic landscape around this question.

## Cross-references

- [[gdf15]] — protein biology, receptor, UPRmt mechanism, metformin connection, therapeutic landscape (anti-GDF-15 antibodies)
- [[biomarkers/grimage-2019]] — GDF-15 DNAm surrogate is a component; mortality prediction architecture
- [[biomarkers/lehallier-proteomic-clock-2019]] — GDF-15 in the 1,301-protein aging proteome
- [[hallmarks/mitochondrial-dysfunction]] — upstream driver of GDF-15 via UPRmt → ATF4
- [[hallmarks/cellular-senescence]] — SASP-driven NF-κB induction of GDF-15
- [[hallmarks/chronic-inflammation]] — NF-κB and HIF-1α drive GDF-15; reciprocal signaling
- [[molecules/compounds/metformin]] — metformin elevates GDF-15 via intestinal ISR; Coll 2020
- [[interventions/pharmacological/senolytics]] — preliminary evidence senolytics reduce GDF-15 (unverified)

## Footnotes

[^wiklund2010]: doi:10.1111/j.1474-9726.2010.00629.x · Wiklund FE et al. · Aging Cell 9(6):1057–1064, 2010 · observational (prospective cohort) · n=876 males + 324 twins; up to 14-year follow-up · adjusted OR death 3.38 (95% CI 1.38–8.26) for high GDF-15 · model: Swedish population-based (Uppsala Longitudinal Study of Adult Men + twins) · PMID 20854422 · archive: download failed (bronze OA returned 403); DOI confirmed via Crossref; n and OR confirmed from PubMed abstract · 100th citation percentile in archive (273 citations) #gap/no-fulltext-access

[^kempf2007]: doi:10.1373/clinchem.2006.076828 · Kempf T et al. · Clinical Chemistry 53(2):284–291, 2007 · observational (cross-sectional reference population) · n=429 apparently healthy elderly + n=153 CHF patients · median serum GDF-15 762 ng/L (IQR 600–959 ng/L) in healthy elderly · archive: pending download · DOI confirmed via PubMed PMID 17185363

[^dallmeier2016]: doi:10.1373/clinchem.2016.256206 · Dallmeier D et al. · Clinical Chemistry 62(8):1091–1101, 2016 · observational (prospective cohort — KAROLA study) · n=1,073 stable coronary heart disease patients · median baseline GDF-15 1,232 pg/mL; HR CVE 1.68 (1.08–2.62), HR death 1.73 (1.02–2.94) for elevated GDF-15; median 12-month GDF-15 change −16.7% · PMID 27197673 · archive: not checked

[^fujita2023]: doi:10.1093/gerona/glad105 · Fujita Y, Ito M et al. · J Gerontol A Biol Sci Med Sci 2023 · observational (prospective cohort) · n=1,801 community-dwelling Japanese older adults · HR total mortality 1.98 (95% CI 1.09–3.59) highest vs. lowest GDF-15 quartile (adjusted for demographics + clinical variables); became NS when further adjusted for cystatin C (HR 1.65, 0.89–3.05) or β2-microglobulin (HR 1.69, 0.91–3.12) — association largely explained by renal function · archive: not_oa · PMID 37190783

[^webber2024]: doi:10.1101/2024.08.07.24311629 · Webber K, Patel S, Kizer JR, Eastell R, Psaty BM, Newman AB, Cummings SR · medRxiv preprint 2024 (not peer-reviewed as of 2026-05-09; no published journal version identified) · observational · n=2,677 (Health ABC n=1,174 + CHS n=1,503; mean age 75.4±4.4 yrs) · mortality HR 1.81 (1.53–2.15); severe mobility disability HR 2.13 (1.64–2.77); HF HR 2.09 (1.66–2.64); ASCVD HR 1.56 (1.22–1.98); CHD HR 1.47 (1.17–1.83); dementia HR 3.50 (1.97–6.22) for highest vs. lowest GDF-15 quartile · PMID 39148825 · PMC PMC11326340 · archive: PDF downloaded and verified against primary source

[^kim2022]: doi:10.1093/gerona/glab201 · Kim M, Walston J, Won CW et al. · J Gerontol A Biol Sci Med Sci 77(3):528–535, 2022 · cross-sectional + 2-yr prospective (Korean Frailty and Aging Cohort Study) · n=929 cross-sectional; n=788 prospective; aged 70–84 yrs; eGFR <60 excluded · median GDF-15 1,221 pg/mL (sarcopenic) vs. 1,019 pg/mL (non-sarcopenic; p<0.001); highest tertile (≥1,245 pg/mL) OR sarcopenia 1.96 (1.16–3.33) vs lowest (<885 pg/mL); prospective 2-yr incident sarcopenia: NS · archive: not_oa · PMID 34255062

[^sanchezsanchez2026]: doi:10.1002/jcsm.70182 · Sánchez-Sánchez JL, Rolland Y, Lucas A, Guyonnet S, Vellas B, de Souto Barreto P; for the MAPT/DSA Group · J Cachexia Sarcopenia Muscle 2026, 17:e70182 (peer-reviewed) · observational secondary analysis (MAPT RCT cohort — longitudinal) · n=1,096 (mean age 75.3±4.4 yrs, 63.9% female); 4-yr follow-up; frailty by Fried phenotype · frailty OR (high ≥1,500 vs low <1,500 pg/mL GDF-15) 3.56 (1.58–8.03) cross-sectional (Model 3, adjusted); incident frailty HR 1.69 (1.03–2.78) prospective minimally adjusted (Model 1: age+sex) — attenuated to HR 1.40 (0.85–2.33) fully adjusted (Model 4: comorbidities added; p=0.187, NS) · archive: PDF downloaded and verified against primary source · PMID 41560403

[^hansen2026]: doi:10.1007/s11357-025-01946-6 · Hansen P, Nygaard H, Praeger-Jahnsen L, Schultz M, Dela F, Aagaard P, Ryg J, Suetta C · GeroScience 2025, 48:1955–1966 (published online 25 November 2025; peer-reviewed) · observational cross-sectional (BIOFRAIL study, Copenhagen University Hospital) · n=429 mobility-limited older adults (mean age 79.6±6.2 yrs; 64% female; 24.9% frail by Clinical Frailty Scale ≥5; 15.6% sarcopenic by EWGSOP2) · frailty median GDF-15 2,252 pg/mL vs. non-frailty 1,438 pg/mL (p<0.001); AUC 0.681 (95% CI: 0.623–0.739) for frailty; frailty cut-off 2,047 pg/mL (Youden's index); sarcopenia median 1,916 pg/mL vs. 1,569 pg/mL (p=0.035); AUC 0.577 for sarcopenia (poor discriminatory ability) · archive: PDF downloaded and verified against primary source · PMID 41286529

[^chen2026]: doi:10.1093/procel/pwaf072 · Chen YL, Wang JJ, You J, Cheng JY et al. · Protein & Cell 2026, 17:231–247 (advance access published 6 August 2025; peer-reviewed) · MR + observational (UK Biobank n=53,026; median 14.5-yr follow-up, IQR 13.8–15.3) · Cox proportional hazard models: 3,089 significant protein-CVD associations; GDF-15 among proteins with broadest CVD association (10 outcomes, AUC 0.78 cumulative importance score) · two-sample MR (IVW): 225 proteins causally linked to CVDs; GDF-15 identified as broad-spectrum mediator across 9 CVD outcomes (median proportion mediated 25.7%); heart failure P=1.21×10⁻¹⁶⁶ observational · archive: PDF downloaded and verified against primary source · PMID 40927895

[^kleinert2018]: doi:10.1016/j.molmet.2017.12.016 · Kleinert M, Clemmensen C, Sjøberg KA et al. · Molecular Metabolism 9:96–101, 2018 · in-vivo (human exercise study) · n=7 healthy males; 1-hr cycling at 67% VO₂max · GDF-15 rose 34% during exercise (p<0.001); 64% above resting at 120-min post-exercise (p<0.001); skeletal muscle not the source (no a-v difference) · archive: pending · PMID 29398617

[^dostalova2009]: doi:10.1530/EJE-09-0417 · Dostálová I, Roubícek T, Bártlová M et al. · Eur J Endocrinol 161(3):397–404, 2009 · observational + intervention (2-wk VLCD) · n=17 obese non-diabetic women; n=14 obese T2DM; n=23 healthy lean controls · VLCD significantly increased serum MIC-1/GDF-15 in obese non-diabetic group; T2DM group: NS; specific numeric changes not stated in abstract · archive: not_oa · PMID 19515791

[^chen2025]: doi:10.2147/JIR.S523980 · Chen K, Fan X, Wu J et al. · J Inflammation Res 2025 · observational (multicenter reference interval study) · n=7,764 healthy Chinese adults (6 cities) · GDF-15 increases with age (P<0.001); males significantly higher than females; age- and sex-specific 2.5th–97.5th percentile reference intervals established · archive: not_oa · PMID 40703640

[^kolnes2026note]: Kolnes et al. Frontiers in Endocrinology 2026 (PMID 41928890) — a review on metformin and GDF-15 — notes that exercise itself increases circulating GDF-15, citing Kleinert 2018 and Sabaratnam 2024 (acute exercise in T2DM). Confirms the exercise-GDF-15 dissociation from metformin-GDF-15 elevation as a confound to interpret in any mixed intervention study.
