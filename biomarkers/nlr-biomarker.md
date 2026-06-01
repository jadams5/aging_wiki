---
type: biomarker
aliases: [NLR, neutrophil-lymphocyte ratio, neutrophil:lymphocyte, dNLR, derived NLR]
modality: composite-clinical
unit: ratio
training-cohort: "Fest 2018 Rotterdam Study (n=8,715, mean 7.7-yr follow-up; Eur J Epidemiol); Fest 2018 reference values Rotterdam Study (n=8,711; Sci Reports); Adamstein 2021 CANTOS + 4 additional RCTs (n=60,087 total; Eur Heart J); Templeton 2014 cancer meta-analysis (100 studies, n=40,559; JNCI); Welsh 2018 UK Biobank (n=478,259 with WBC data; ATVB); Liu 2024 UK Biobank (n=448,574; BMC Public Health)"
training-target: mortality
n-cpgs-or-features: 2
calibration-tissues: ["[[blood]]"]
test-retest-icc: null
human-evidence-level: strong
mendelian-randomization: not-tested
intervention-responsive: yes
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Fest 2018 Eur J Epidemiol, Fest 2018 Sci Reports, Adamstein 2021, Welsh 2018, Liu 2024, and Siedlinski 2020 PDFs verified against primary source. Templeton 2014 (JNCI) is closed-access (not_oa) — cancer meta-analysis HR 1.81 not independently verified against full text."
---


# Neutrophil-to-Lymphocyte Ratio (NLR)

The **neutrophil-to-lymphocyte ratio (NLR)** is a free composite inflammatory index derived by dividing the absolute neutrophil count by the absolute lymphocyte count from a standard CBC with differential. It requires no additional test, no extra cost, and is already present on every CBC w/diff panel. NLR is one of the strongest and most practically accessible composite aging biomarkers in routine clinical data: it predicts all-cause mortality, cardiovascular events, and cancer outcomes independently of conventional risk factors, with consistent dose-response associations across multiple large prospective cohorts totaling hundreds of thousands of participants [^fest2018mortality][^adamstein2021][^templeton2014].

## Identity and Calculation

**Formula:** `NLR = (absolute neutrophil count) ÷ (absolute lymphocyte count)`

Both values appear on every CBC w/diff report in standard clinical units (10^3/µL or 10^9/L). No conversion, no reference lab, no additional sample. Calculate at time of result receipt.

**Derived NLR (dNLR):** An alternative formulation using `(WBC − lymphocytes) ÷ lymphocytes`, which proxies NLR when the differential is not available. dNLR correlates closely with NLR but is slightly different in absolute value; for tracking purposes, use standard NLR consistently.

**Archive status:** No single "NLR clock" paper; the evidence base is distributed across epidemiological cohort studies. Canonical sources confirmed in archive (see footnotes); no single local PDF assigned to this biomarker page.

## Reference Ranges

Population-derived reference values from the Rotterdam Study (n=8,711 community-dwelling adults aged 45+, with clinically elevated CRP >10 mg/L excluded from sensitivity analyses) [^fest2018ref]:

| Category | NLR value |
|---|---|
| Healthy adults, population mean (2.5th–97.5th percentile reference interval) | 1.76 (0.83–3.92) |
| Optimal / low-inflammation | < 2.0 |
| Elevated (warrants attention) | 2.0 – 4.0 |
| High (clinically elevated; investigate acute confounders) | > 4.0 |
| Markedly elevated (acute illness or severe chronic inflammation) | > 6.0 |

The Rotterdam Study mean NLR of 1.76 with 95% reference interval 0.83–3.92 (i.e., 2.5th–97.5th percentile limits, not IQR) represents community-dwelling adults across a wide age range [^fest2018ref]. For tracking purposes, a personal baseline and trend over time matter more than any single cross-sectional comparison. #gap/needs-replication — population reference values differ across labs, ethnic groups, and exact CBC methodologies; verify against manufacturer's CBC normal range.

## Aging Trajectory

NLR increases with chronological age, reflecting two simultaneous aging processes: neutrophilia (innate immune activation / [[chronic-inflammation]]) and lymphopenia (adaptive immune decline / [[disabled-adaptive-immunity]]). The Rotterdam Study reference-values paper documents age-stratified distributions showing a gradual upward drift across decades [^fest2018ref].

Age-stratified population means from Fest 2018 Rotterdam Study (Table 2; n=8,711; ages 45+) [^fest2018ref]:

| Age range | Mean NLR | 95% reference interval (2.5th–97.5th percentile) |
|---|---|---|
| 45–54 | 1.63 | 0.80–3.44 |
| 55–64 | 1.61 | 0.79–3.53 |
| 65–74 | 1.82 | 0.86–3.92 |
| 75–84 | 2.02 | 0.96–4.53 |
| ≥85 | 2.13 | 0.89–5.86 |

Note: the Rotterdam Study enrolled participants aged 45 and older; NLR data for ages below 45 are not derived from this source. #gap/needs-replication — NLR trajectory below age 45 requires separate population data. Individual variation is high in all age groups.

## Mortality and Morbidity Associations

### All-cause and cardiovascular mortality — Rotterdam Study

In 8,715 Rotterdam Study participants (mean age 65.9 years, 57.1% female) followed for a mean of 7.7 years (maximum 11.7 years), elevated NLR independently predicted both all-cause and cardiovascular mortality after multivariable adjustment [^fest2018mortality]:

- **All-cause mortality:** HR 1.64 (95% CI 1.44–1.86) per unit increase in log-transformed NLR (continuous model); Q4 vs Q1 quartile comparison HR 1.59 (95% CI 1.37–1.86)
- **Cardiovascular mortality:** HR 1.92 (95% CI 1.49–2.48) (continuous log-transformed model)
- **Cancer mortality:** No significant association HR 1.20 (95% CI 0.95–1.51)

This is a dose-response association with adjustment for age, sex, prevalent disease, smoking, and BMI. The community-dwelling adult population makes this the most relevant reference cohort for personal tracking.

### Incident atherosclerotic events — CANTOS + 4 RCTs (Adamstein 2021)

Adamstein et al. analyzed NLR as a predictor in five large RCTs (CANTOS, JUPITER, SPIRE-1, SPIRE-2, CIRT; 60,087 participants total) and found [^adamstein2021]:

- Baseline NLR independently predicts MACE across all five trials. In CANTOS (n=10,061), each increasing NLR quartile increased MACE+ risk by 20% per quartile (HRadj per-quartile effect 1.14, 95% CI 1.09–1.19). Adjusted HR for NLR Q4 vs Q1 for MACE in CANTOS was 1.51 (95% CI 1.30–1.75). Effects were consistent across JUPITER, SPIRE-1, SPIRE-2, and CIRT.
- Anti-inflammatory therapy with **canakinumab** significantly lowered NLR in a dose-dependent manner (median −11.3% to −23.6% at 3 months; p<0.0001 vs placebo), while lipid-lowering (rosuvastatin, bococizumab) and methotrexate had no significant NLR-lowering effect
- On-treatment NLR reduction with canakinumab is concordant with the drug's CV event reduction, consistent with NLR tracking biologically relevant inflammatory burden

This is the key study establishing that NLR is **intervention-responsive** to anti-inflammatory treatment, including anti-IL-1β.

### Cancer outcomes — Templeton 2014 meta-analysis

A systematic review of 100 studies (n=40,559 solid-tumor patients) found high NLR associated with overall survival HR 1.81 (95% CI 1.67–1.97; p<0.001) across multiple tumor types [^templeton2014]. #gap/no-fulltext-access — Templeton 2014 (JNCI) is closed-access; the HR 1.81 and study count figures have not been independently verified against the full text. Effect was consistent across cancer types, with high NLR at baseline predicting worse prognosis. Note: this is a cancer-patient cohort, not a community aging cohort; absolute NLR values and effect sizes differ from community-dwelling populations.

### Premature death and life expectancy — UK Biobank (Liu 2024)

In 448,574 UK Biobank participants (age 40–70 at recruitment, median follow-up 12.65 years), elevated NLR (highest vs lowest quartile) was associated with premature death (death before age 75) with HR 1.45 (95% CI 1.40–1.50) [^liu2024]. The composite INFLA-Score (incorporating NLR, CRP, WBC, and platelet count) was associated with shortened life expectancy at age 60 of 4.14 years (95% CI 3.75–4.56) in men and 2.96 years (95% CI 2.53–3.41) in women in the highest vs lowest quartile. Among participants with high Mediterranean diet adherence, the INFLA-Score was not significantly associated with premature death (HR 1.19, 95% CI 0.96–1.47), consistent with MED diet partially attenuating the mortality burden of elevated systemic inflammation.

### UK Biobank leukocyte counts — Welsh 2018

In 478,259 UK Biobank participants with WBC data (mean follow-up 7.0 years), neutrophil count was the leukocyte subpopulation most consistently associated with CVD mortality [^welsh2018]. In the highest neutrophil decile vs the 5th (reference) decile: men HR 1.59 (95% CI 1.22–2.08), women HR 2.15 (95% CI 1.38–3.35) for CVD mortality. For nonfatal CVD, men HR 1.28 (95% CI 1.16–1.42) and women HR 1.21 (95% CI 1.06–1.38) in the highest neutrophil decile. Lymphocyte count showed a broadly flat or weakly inverse pattern with CVD mortality in figures; the association was not monotonically inverse. This independently supports the neutrophilia arm of the NLR composite.

## Mechanism Context

NLR is not a mechanistic biomarker — it is a composite readout of two interacting hallmark processes:

**Neutrophilia (numerator increases with age):**
- Chronic low-grade inflammation / [[chronic-inflammation]] drives sustained neutrophil activation and elevated baseline counts
- SASP-mediated IL-6, IL-8, and other cytokines recruit and prime neutrophils
- Neutrophil extracellular traps (NETs) contribute to vascular damage and thrombosis

**Lymphopenia (denominator decreases with age):**
- Thymic involution reduces naive T-cell output from young adulthood onward
- [[disabled-adaptive-immunity]] results in fewer circulating lymphocytes, especially naive T and B cells
- CMV seropositivity and clonal expansions consume lymphocyte repertoire space

**Why the ratio is more informative than either count alone:**
1. Captures bidirectional immune dysregulation simultaneously
2. Corrects partially for hemodilution or volume shifts that would alter absolute counts similarly in both directions
3. The two arms of immune aging are biologically linked — inflammatory signaling from senescent cells and activated innate immunity drives both neutrophilia and lymphopenia — so the ratio amplifies the signal
4. Controlled for some demographic variation: absolute counts vary by sex and ethnicity; the ratio partially normalizes these differences

Cross-reference: NLR is functionally related to the lymphocyte% component of [[biomarkers/phenoage-2018]] (clinical PhenoAge includes lymphocyte% as one of its 9 inputs), suggesting NLR and PhenoAge tap overlapping biology through different computational lenses.

## Intervention-Responsive Evidence

NLR is modifiable by interventions targeting [[chronic-inflammation]]:

| Intervention | NLR effect | Source |
|---|---|---|
| Canakinumab (anti-IL-1β) | Significant reduction (p<0.0001) | Adamstein 2021 CANTOS [^adamstein2021] |
| Colchicine (anti-inflammatory) | Probable reduction (via neutrophil inhibition); specific NLR data from COLCOT/LoDoCo2 not yet pulled | #gap/unsourced |
| Lipid-lowering agents (rosuvastatin, bococizumab) | No significant NLR effect in JUPITER, SPIRE-1, SPIRE-2 [^adamstein2021] | |
| Exercise (chronic, aerobic) | Associated with lower NLR in cross-sectional data; intervention RCT data needed | #gap/needs-replication |
| Mediterranean diet adherence | Attenuates NLR-mortality association in UK Biobank [^liu2024] | |
| Corticosteroids (acute) | Dramatically elevates NLR (neutrophilia + lymphopenia); major confounder, not therapeutic in aging context | — |

This intervention-responsiveness validates NLR as a tracking metric: if anti-inflammatory lifestyle and dietary interventions reduce NLR over time, the direction is interpretable.

## Confounders and Caveats

**Acute-state elevations — do not interpret without context:**
- Active infection (bacterial >> viral) → transient neutrophilia → NLR spike
- Corticosteroid use (any dose, any route) → neutrophilia + lymphopenia → artificially elevated NLR
- Vigorous exercise within 24h of draw → transient neutrophilia → mildly elevated NLR
- Smoking → chronically elevated NLR; major confounder in cross-sectional analysis
- Recent surgery or trauma → acute phase response elevates NLR for days to weeks

**Interpretation rules for longitudinal tracking:**
- Note any acute illness, corticosteroid exposure, or vaccination within 2 weeks of draw
- Flag panels drawn during or within 1 week of active infection as "acute-state" and exclude from trend analysis
- Use fasting draws whenever possible (consistent pre-analytic conditions)
- Track trend over 6–12 months rather than reacting to single-point values

**Day-to-day variability:** NLR has meaningful within-person variation even in healthy individuals across draws taken days apart. Repeated longitudinal sampling averages over this noise. #gap/long-term-unknown — within-person ICC for NLR in non-acutely-ill adults has not been formally characterized in the literature reviewed here.

**Specificity limitation:** NLR does not distinguish causes of neutrophilia (inflammatory vs metabolic vs clonal hematopoiesis vs medication-related) or causes of lymphopenia (aging-related vs HIV vs autoimmune). Very elevated NLR (>5) in absence of obvious confounders warrants clinical evaluation. See [[processes/clonal-hematopoiesis]] for CHIP-driven leukocyte-count dysregulation, which may confound NLR in aging.

## Mendelian Randomization Status

`not-tested` — No published MR study has used genetic instruments for NLR specifically to test causal effects on mortality or aging outcomes. The related Siedlinski 2020 study (Mendelian randomization of white blood cell subpopulations on blood pressure in 384,721 UK Biobank participants; Circulation) found a potentially causal, positive relationship between genetically elevated lymphocyte count and both systolic BP (causal estimate 0.69 mmHg per SD, 95% CI 0.19–1.20) and diastolic BP (0.56 mmHg per SD, 95% CI 0.23–0.90) [^siedlinski2020]. This provides partial mechanistic context for the lymphocyte–cardiovascular risk link, but NLR as a composite has not been the primary MR target. #gap/needs-replication — A two-sample MR using GWAS instruments for neutrophil and lymphocyte counts from the UK Biobank to estimate causal effects on all-cause mortality would be methodologically feasible and would substantially strengthen NLR's causal interpretation.

## Practical use as a tracking biomarker

NLR is calculable from any CBC with differential, requiring no incremental test, which makes it a practical inflammatory aging biomarker for longitudinal monitoring. It is informative to track alongside hsCRP (an orthogonal inflammatory axis) and lymphocyte % (for absolute adaptive-arm context). Where a panel also includes albumin, CRP, glucose, alkaline phosphatase, WBC, and lymphocyte %, NLR can be cross-referenced against the clinical [[biomarkers/phenoage-2018]] score, which taps overlapping biology.

## Limitations and Gaps

1. **No MR causal evidence** — The mortality associations are large and consistent across cohorts, but causality is not established by MR. NLR may be a marker of accumulated damage rather than a causal driver. #gap/needs-replication
2. **Reference range laboratory variation** — Normal ranges can shift slightly by CBC analyzer platform. Anchor personal tracking to a consistent lab.
3. **High acute-state sensitivity** — Makes NLR noisier than methylation clocks for cross-sectional snapshotting, but more responsive as an intervention endpoint.
4. **Colchicine and exercise RCT data not pulled** — The claim that colchicine and chronic exercise lower NLR is biologically plausible and cross-sectionally supported but specific RCT NLR endpoint data was not reviewed here. #gap/unsourced
5. **No aging-specific MR or causal model** — Whether interventionally lowering NLR from, say, 2.8 to 1.8 would produce mortality benefit commensurate with the observational HR is unknown. The intervention-responsive finding from CANTOS (canakinumab reduces NLR and also reduces MACE) is consistent with causality but confounded by drug effects beyond NLR.

## Cross-References

- [[hallmarks/chronic-inflammation]] — primary hallmark; neutrophilia component of NLR
- [[hallmarks/disabled-adaptive-immunity]] — lymphopenia component of NLR
- [[biomarkers/phenoage-2018]] — clinical PhenoAge includes lymphocyte% and WBC as two of its 9 inputs; NLR and PhenoAge are partially overlapping
- [[biomarkers/grimage-2019]] — GrimAge includes inflammatory protein composites; complementary to NLR
- [[biomarkers/frailty-index]] — NLR correlates with frailty index; both capture biological age burden
- [[processes/clonal-hematopoiesis]] — CHIP can alter leukocyte counts independently of inflammation; potential NLR confounder in aging
- [[molecules/compounds/canakinumab]] — anti-IL-1β; confirmed NLR-lowering in RCT
- [[molecules/compounds/colchicine]] — neutrophil-targeting anti-inflammatory; probable NLR-lowering (unverified here)
- [[interventions/pharmacological/senolytics]] — SASP reduction may lower NLR indirectly

## Footnotes

[^fest2018mortality]: doi:10.1007/s10654-018-0472-y · n=8,715 Rotterdam Study (community-dwelling adults aged 45+, mean age 65.9, mean follow-up 7.7 yr, max 11.7 yr) · observational (prospective cohort, Cox proportional hazard) · All-cause mortality HR=1.64 (95% CI 1.44–1.86) per log-NLR unit [continuous model]; Q4 vs Q1 HR=1.59 (95% CI 1.37–1.86); CV mortality HR=1.92 (95% CI 1.49–2.48); cancer mortality HR=1.20 (95% CI 0.95–1.51; NS) · adjusted for age, sex, SES, smoking, BMI, DM, CVD history, cancer history · model: human, general population · Eur J Epidemiol 2019;34:463–470 · archive: downloaded

[^fest2018ref]: doi:10.1038/s41598-018-28646-w · n=8,711 Rotterdam Study participants (aged 45+, community-dwelling) · observational (population reference-values study) · Mean NLR 1.76, 95% reference interval 0.83–3.92 (2.5th–97.5th percentile, not IQR); age-stratified means: 45–54: 1.63, 55–64: 1.61, 65–74: 1.82, 75–84: 2.02, ≥85: 2.13; NLR higher in males (mean 1.88) than females (mean 1.68) · model: human, community-dwelling adults · Sci Rep 2018;8:10566 · archive: downloaded

[^adamstein2021]: doi:10.1093/eurheartj/ehaa1034 · n=60,087 across CANTOS (10,061), JUPITER (17,802), SPIRE-1 (16,817), SPIRE-2 (10,621), CIRT (4,786) · rct (post-hoc analyses; NLR not pre-specified) · In CANTOS: NLR Q4 vs Q1 MACE HRadj=1.51 (95% CI 1.30–1.75); per-quartile MACE+ effect HRadj=1.14 (95% CI 1.09–1.19); effects consistent across all 5 trials; canakinumab lowered NLR −11.3% to −23.6% at 3 months (p<0.0001 all doses vs placebo); lipid-lowering (rosuvastatin, bococizumab) had no significant NLR effect; methotrexate increased NLR +15.3% (via lymphocyte reduction) · model: human, atherosclerotic-risk population · Eur Heart J 2021;42:896–903 · archive: downloaded (PMC7936519)

[^templeton2014]: doi:10.1093/jnci/dju124 · 100 studies n=40,559 solid-tumor patients · meta-analysis (systematic review) · High NLR OS HR=1.81 (95% CI 1.67–1.97; p<0.001) across multiple tumor types · model: human, oncology populations · JNCI 2014 · archive: not_oa (closed access) — #gap/no-fulltext-access; HR 1.81 and study count not independently verified against full text

[^welsh2018]: doi:10.1161/ATVBAHA.118.310945 · n=478,259 UK Biobank participants with WBC data (502,634 enrolled; median follow-up 7.0 yr) · observational (prospective cohort, Cox PH by leukocyte decile) · Neutrophil count most consistently associated with CVD mortality: men HR=1.59 (95% CI 1.22–2.08), women HR=2.15 (95% CI 1.38–3.35) in highest vs 5th decile; nonfatal CVD: men HR=1.28 (95% CI 1.16–1.42), women HR=1.21 (95% CI 1.06–1.38); lymphocyte pattern broadly flat/non-monotonic for CVD mortality · model: human, general population · Arterioscler Thromb Vasc Biol 2018;38:1415–1423 · archive: downloaded

[^liu2024]: doi:10.1186/s12889-024-18888-x · n=448,574 UK Biobank (age 40–70 at recruitment; median follow-up 12.65 yr; 23,784 premature deaths documented) · observational · NLR Q4 vs Q1 HR=1.45 (95% CI 1.40–1.50) for premature death; composite INFLA-Score Q4 vs Q1: life expectancy shortened by 4.14 yr (95% CI 3.75–4.56) in men and 2.96 yr (95% CI 2.53–3.41) in women at age 60; Mediterranean diet adherence (highest tertile) attenuated INFLA-Score–premature death association to non-significance (HR 1.19, 95% CI 0.96–1.47) · model: human, general population · BMC Public Health 2024;24:1449 · archive: downloaded

[^siedlinski2020]: doi:10.1161/CIRCULATIONAHA.119.045102 · n=384,721 UK Biobank (observational); MR instruments from UKB+ICBP GWAS ~757,601 individuals · mendelian-randomization (IVW, MR-Egger, weighted median, MR-PRESSO) · Genetically elevated lymphocyte count causally associated with higher SBP (+0.69 mmHg/SD, 95% CI 0.19–1.20) and DBP (+0.56 mmHg/SD, 95% CI 0.23–0.90); study is MR of cell counts on BP, not NLR per se; neutrophil count observationally strongest but no MR causal signal for neutrophils on BP · model: human · Circulation 2020;141:1307–1317 · archive: downloaded
