---
type: biomarker
aliases: [Homeostasis Model Assessment of Insulin Resistance, HOMA, insulin resistance index, HOMA1, HOMA2]
modality: composite-clinical
unit: dimensionless index
training-cohort: "Matthews 1985 (foundational model, primary clamp validation n=23 [NGT=12, diabetes=11] per Wallace 2004 Table 1; full paper n unverified — PDF unavailable, Diabetologia 28:412-419); Wallace 2004 Diabetes Care (HOMA2 computer-model recalibration); aging cohorts using HOMA-IR as exposure include Health ABC, MESA, ARIC, Toledo Study of Healthy Aging, I-Lan Longitudinal Aging Study"
n-cpgs-or-features: 2
training-target: morbidity
calibration-tissues: ["[[blood]]"]
test-retest-icc: null
human-evidence-level: strong
mendelian-randomization: partial
intervention-responsive: yes
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Wallace 2004 and Fontana 2010 and Rodriguez-Manas 2022 verified against primary-source PDFs. Matthews 1985 PDF download failed (Springer blocked; OA URL returns 303); formula and Rs=0.88 confirmed via Wallace 2004 restatement and PubMed abstract; n for validation cohort revised from ~20 to n=23 (NGT=12, diabetes=11) per Table 1 of Wallace 2004. Weiss 2006 and Hwang 2015 are not_oa and unverifiable. Cutoff thresholds not stated in Matthews 1985 or Wallace 2004 — tagged accordingly. Metformin HOMA-IR reduction claim misattributed to Wallace 2004 — corrected to unsourced."
---


# HOMA-IR (Homeostasis Model Assessment of Insulin Resistance)

HOMA-IR is a simple fasting-state index of insulin resistance derived from two routine blood tests — fasting glucose and fasting insulin — and is widely used in epidemiological aging research, cohort studies, and clinical trials as a surrogate for hepatic insulin sensitivity. Unlike clamp-based measures, it requires no infusions and no specialized equipment, which explains its near-universal adoption across large population cohorts. As a metabolic-aging biomarker it sits at the intersection of the [[deregulated-nutrient-sensing]] hallmark and downstream risk for type 2 diabetes, cardiovascular disease, frailty, and all-cause mortality.

## Identity and Calculation

**HOMA-IR formula (two unit conventions):**

- If glucose in **mg/dL**: `HOMA-IR = (fasting glucose [mg/dL] × fasting insulin [µIU/mL]) / 405`
- If glucose in **mmol/L**: `HOMA-IR = (fasting glucose [mmol/L] × fasting insulin [µIU/mL]) / 22.5`

Both formulas derive from the same mathematical model; the denominators differ only to account for the glucose unit conversion factor (18 mg/dL per mmol/L).

**Canonical sources:**
- Matthews DR et al. (1985) *Diabetologia* 28:412–419 — doi:10.1007/BF00280883 — introduced HOMA model; 30,921 citations (100th citation percentile in archive) · PDF download failed (Springer blocked) #gap/no-fulltext-access
- Wallace TM, Levy JC, Matthews DR (2004) *Diabetes Care* 27:1487–1495 — doi:10.2337/diacare.27.6.1487 — HOMA2 recalibration and guidance on use in epidemiology; restates HOMA1 formula as (FPI [mU/L] × FPG [mmol/L]) / 22.5; notes HOMA appeared in 572 published works at time of writing

## HOMA1 vs HOMA2

| Feature | HOMA1 (1985) | HOMA2 (2004 / Wallace) |
|---|---|---|
| Method | Simple formula (above) | Non-linear computer model |
| Valid glucose range | ~3–25 mmol/L | 3–25 mmol/L (wider accuracy) |
| Valid insulin range | Up to ~57 µIU/mL | Wider; handles extremes better |
| Accounts for renal glucose loss | No | Yes |
| Accounts for gut glucose absorption | No | Yes |
| Recommends | Epidemiology at population level | Clinical use and individual tracking |
| Software availability | Formula-based, no software needed | HOMA2 calculator (Diabetes Trials Unit, Oxford) |

HOMA2 is more accurate at glucose or insulin extremes (e.g., severe insulin resistance or tight glycemic control) and is preferred in clinical research contexts [^wallace2004]. HOMA1 remains dominant in published cohort literature due to its simplicity and reproducibility across labs where a formula-level calculation is sufficient. For within-cohort comparisons — the typical epidemiological use — HOMA1 and HOMA2 track each other closely in non-extreme populations.

## Normal Reference Ranges and Cutoffs

Reference ranges are population-dependent and assay-dependent (see Limitations). Common operational thresholds used in aging research:

| Category | HOMA-IR | Notes |
|---|---|---|
| Insulin-sensitive | < 1.5 | Longevity-optimized range; typical of lean, active individuals |
| Normal / low-risk | < 2.0 | Widely used cutoff; population-level "insulin-sensitive" |
| Borderline | 2.0–2.5 | Elevated risk zone in many cohort studies |
| Insulin-resistant | > 2.5–3.0 | Commonly used clinical threshold; varies by cohort ancestry |
| Severely resistant | > 5.0 | Typical of established T2D or severe metabolic syndrome |

These cutoffs are not standardized across guidelines and are **not stated in Matthews 1985 or Wallace 2004** — neither foundational paper defines categorical IR thresholds. The 1.5/2.0/2.5 boundaries are operational conventions that have emerged from epidemiological cohort literature. The absence of a universal reference range is a major limitation. HOMA-IR results are assay-dependent because insulin immunoassays are not internationally harmonized. #gap/cutoffs-not-from-primary-source

## Aging Trajectory

HOMA-IR rises with age in population studies, driven primarily by increasing fasting insulin (hepatic insulin resistance) rather than proportional fasting glucose elevation. #gap/unsourced (the aging-trajectory claim is epidemiologically well-established but a primary cohort citation is not supplied here — Wallace 2004 is a methods/modeling paper, not a longitudinal aging cohort) Key aging-trajectory patterns:

- Fasting insulin typically rises across the lifespan, peaking in middle age and remaining elevated into older age, while fasting glucose rises more gradually.
- The rise in HOMA-IR accelerates in the 40s–60s, coinciding with increases in visceral adiposity, loss of muscle mass, and declining physical activity.
- In the Toledo Study of Healthy Aging (n=991, community-dwelling non-diabetic adults, 5-year follow-up), HOMA-IR showed a paradoxical dual association with aging outcomes: higher HOMA-IR predicted lower 5-year mortality (HR ~0.64–0.69) but higher odds of incident frailty (OR ~1.81) [^rodriguez2022]. This "obesity-survival paradox" likely reflects reverse causation — very low HOMA-IR in the oldest-old reflects sarcopenic weight loss, not metabolic health.
- In the I-Lan Longitudinal Aging Study (n=1,839 community-dwelling Taiwanese adults), HOMA-IR independently predicted frailty (OR=1.30, p=0.032) in fully adjusted models [^hwang2015].

The dual-signal (lower mortality / higher frailty at elevated HOMA-IR) underscores that HOMA-IR should not be used as a sole endpoint in older adults without considering body composition, functional status, and frailty trajectory. #gap/contradictory-evidence

## Mechanistic Basis

HOMA-IR is primarily a **hepatic insulin sensitivity surrogate**. In the fasted state, insulin's main target organ is the liver (suppression of hepatic glucose output via gluconeogenesis and glycogenolysis). Peripheral (skeletal muscle) glucose uptake is negligible during fasting, so fasting HOMA-IR captures hepatic insulin resistance more than muscle insulin resistance.

| Tissue | Fasted HOMA-IR signal | Gold-standard measurement |
|---|---|---|
| Liver | High signal (dominates fasting glucose output) | Hyperinsulinemic-euglycemic clamp (hepatic glucose production) |
| Skeletal muscle | Low signal (fasting uptake minimal) | Euglycemic clamp with glucose tracer |
| Adipose | Indirect signal (FFA / glycerol flux) | Microdialysis / clamp with lipid tracer |

For skeletal-muscle insulin sensitivity — the tissue most relevant to T2D pathophysiology and exercise interventions — the euglycemic hyperinsulinemic clamp remains the gold standard. HOMA-IR misses this compartment. #gap/no-mechanism (the specific hepatic molecular mechanism driving HOMA-IR elevation with age — whether it is primarily ectopic lipid, inflammation, or mitochondrial dysfunction — is not fully resolved)

Biological basis for aging-driven HOMA-IR increase:

- Accumulation of intrahepatic and visceral lipid activates IKKβ/JNK inflammatory signaling, impairing IRS-1/PI3K-Akt insulin signal transduction [^fontana2010]
- Mitochondrial dysfunction (see [[mitochondrial-dysfunction]]) reduces hepatic fatty acid oxidation, promoting lipid accumulation
- Chronic low-grade inflammation ([[chronic-inflammation]]) — IL-6, TNF-α — drives hepatic insulin resistance via STAT3 and SOCS3 signaling
- Loss of muscle mass reduces whole-body glucose disposal, increasing post-prandial glucose and compensatory hyperinsulinemia (which then elevates fasting insulin at the next fasting window)

## Intervention Responsiveness

### Caloric restriction and weight loss

Long-term caloric restriction markedly improves HOMA-IR. In a cross-sectional comparison of 28 long-term CR practitioners vs. 28 endurance exercisers vs. 28 age-matched controls (mean CR duration ~7 years, range 3–20 years), CR individuals had substantially lower HOMA-IR (0.29±0.1) compared to endurance exercisers (0.44±0.3) and sedentary Western-diet controls (1.6±1.3; P=0.0001); however ~40% of the CR group showed exaggerated glucose response during OGTT (2-h glucose >140 mg/dL), attributed to very low insulin output rather than peripheral insulin resistance [^fontana2010]. Twelve-month CR and exercise RCT (n=46): both 25% CR and equivalent exercise-induced weight loss improved glucose tolerance and insulin action similarly [^weiss2006]. #gap/needs-replication (no head-to-head HOMA-IR endpoint in large CALERIE-phase CR RCT — CALERIE primary endpoints focused on epigenetic clocks)

| Intervention | HOMA-IR effect | Quality |
|---|---|---|
| Long-term CR (cross-sectional) | CR: 0.29±0.1 vs WD controls: 1.6±1.3 (P=0.0001); ~82% lower; note: cross-sectional comparison, not a reduction endpoint | Cross-sectional, n=84 [^fontana2010] |
| CR or exercise, 12-month RCT | Comparable improvement in insulin action (neither superior) | RCT, n=46 [^weiss2006] |
| Low-carbohydrate diet | ~30–50% HOMA-IR reduction in meta-analyses | Meta-analysis, variable quality |
| Combined resistance + aerobic exercise | ~25–35% HOMA-IR reduction in meta-analyses | Meta-analysis |

### Pharmacological

- **Metformin** — primary mechanism is hepatic AMPK activation reducing gluconeogenesis; reduces HOMA-IR in insulin-resistant populations (UKPDS metformin data showed improved insulin sensitivity, but the ~20–30% reduction figure is a commonly cited estimate not directly sourced here #gap/unsourced). Core agent for T2D; also being studied in aging (TAME trial — see [[molecules/compounds/metformin]]).
- **GLP-1 receptor agonists (semaglutide, liraglutide)** — reduce HOMA-IR via weight loss + direct beta-cell effects + hepatic glucose suppression; HOMA-IR reduction follows weight loss magnitude. See [[molecules/compounds/semaglutide]].
- **SGLT2 inhibitors** — reduce fasting glucose (numerator) and secondarily lower compensatory insulin (denominator), thereby improving HOMA-IR. Mechanism is primarily glycosuric.
- **Rapamycin** — mixed and potentially adverse signal on HOMA-IR. mTORC1 inhibition by rapamycin paradoxically impairs insulin signaling through IRS-1 serine phosphorylation (mTORC2-sparing effect at intermittent dosing is incomplete in many individuals). Short-course and low-dose rapamycin regimens may transiently raise HOMA-IR; this is a clinically documented adverse metabolic effect in transplant recipients and has been observed in some aging-focused trial participants. See [[molecules/compounds/rapamycin]]. #gap/contradictory-evidence (whether the rapamycin HOMA-IR rise is clinically meaningful at longevity-relevant intermittent dosing regimens is not established)
- **MK-677 (ibutamoren)** — GH secretagogue; raises IGF-1 but also raises HOMA-IR. This is an adverse signal documented in the MK-677 trial in older adults (Nass 2008); the HOMA-IR rise is a direct consequence of GH-mediated insulin resistance. See [[molecules/compounds/mk-677]].

## Hallmark Linkage

Primary hallmark: [[deregulated-nutrient-sensing]]

- HOMA-IR directly indexes dysregulation of the insulin-IRS-1-PI3K-Akt-mTORC1 signaling axis that is central to deregulated nutrient sensing in aging.
- Elevated HOMA-IR reflects downstream failure of the insulin signaling pathway, phenocopying the state that mTOR hyperactivation and impaired insulin receptor signaling produce at the molecular level.

Secondary contributions:
- [[chronic-inflammation]] — SASP cytokines (IL-6, TNF-α) drive hepatic insulin resistance; elevated HOMA-IR feeds back into inflammatory signaling via metabolic endotoxemia and lipid-mediated TLR4 activation
- [[mitochondrial-dysfunction]] — mitochondrial insufficiency in the liver is a mechanistic driver of hepatic lipid accumulation and insulin resistance
- [[disabled-macroautophagy]] — impaired autophagy in hepatocytes contributes to ER stress and lipotoxicity, both of which impair insulin signaling

## Extrapolation Table

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Yes — insulin/IRS-1/PI3K/Akt pathway is evolutionarily conserved |
| HOMA-IR as aging phenotype in humans? | Yes — strong epidemiological evidence across multiple cohorts |
| Mechanistic target in human aging interventions? | Yes — CR, exercise, metformin, GLP-1 agonists all validated |
| Replicated across ethnic cohorts? | Partially — reference ranges differ; insulin assay heterogeneity is a confounder |

## Limitations and Gaps

1. **Insulin assay non-standardization** — The single largest limitation. Insulin immunoassays differ across manufacturers by up to 30–50% for the same sample. HOMA-IR values are not directly comparable across studies or labs using different assay platforms. Any absolute HOMA-IR cutoff is assay-specific. #gap/contradictory-evidence

2. **Fasting requirement** — A non-fasted sample renders HOMA-IR invalid. Even 4-6 hours of non-fasting can substantially alter insulin (numerator-driving variable).

3. **Gold-standard gap** — The euglycemic hyperinsulinemic clamp captures skeletal-muscle insulin sensitivity; HOMA-IR does not. For interventions primarily targeting muscle (resistance exercise, GLP-1 agonists), HOMA-IR will underestimate the intervention effect.

4. **Mortality paradox in oldest-old** — The inverse association between HOMA-IR and mortality in very old adults (Toledo cohort) means HOMA-IR cannot be interpreted as a simple "higher is worse" marker across all ages. Reverse causation (sarcopenic and cachectic older adults have low HOMA-IR due to very low insulin output) must be ruled out. #gap/contradictory-evidence

5. **No longitudinal normative aging data** — There is no widely-cited longitudinal reference chart of HOMA-IR trajectory by age-decade, sex, and BMI in healthy aging humans. Cross-sectional estimates exist; longitudinal individual tracking has not been standardized.

6. **HbA1c temporal mismatch** — HOMA-IR reflects fasting/overnight metabolic state; HbA1c reflects 90-day average glucose. They measure partially overlapping but non-identical constructs. Neither is a complete substitute for the other in an aging biomarker panel.

## Cross-References

- [[hallmarks/deregulated-nutrient-sensing]] — primary hallmark; HOMA-IR is a direct index of the core pathway
- [[hallmarks/chronic-inflammation]] — bidirectional relationship; inflammaging drives insulin resistance
- [[hallmarks/mitochondrial-dysfunction]] — upstream driver of hepatic lipid accumulation and IR
- [[molecules/compounds/metformin]] — primary pharmacological HOMA-IR reducer; TAME trial
- [[molecules/compounds/semaglutide]] — GLP-1 agonist with strong HOMA-IR-lowering evidence
- [[molecules/compounds/rapamycin]] — mTOR inhibitor; adverse HOMA-IR signal (transient elevation)
- [[molecules/compounds/mk-677]] — GH secretagogue; raises HOMA-IR — adverse signal in older adults
- [[interventions/lifestyle/caloric-restriction]] — lifestyle intervention with strong HOMA-IR-lowering evidence
- [[interventions/lifestyle/exercise]] — comparable HOMA-IR benefit to CR in head-to-head trials
- [[phenotypes/sarcopenia]] — loss of muscle mass reduces glucose disposal capacity, raising HOMA-IR
- [[biomarkers/igf-1-biomarker]] — related hormonal axis; GH/IGF-1 and insulin signaling intersect

## Footnotes

[^matthews1985]: doi:10.1007/BF00280883 · Matthews DR, Hosker JP, Rudenski AS, Naylor BA, Treacher DF, Turner RC · *Diabetologia* 1985 · pp.412–419 · n=23 in primary clamp-vs-HOMA validation (NGT n=12, diabetes n=11 per Wallace 2004 Table 1; full paper n unverified — PDF download failed, Springer blocked) · observational (model development) · introduced HOMA formula (HOMA-IR = FPI [mU/L] × FPG [mmol/L] / 22.5); correlated with euglycemic clamp Rs=0.88 (p<0.0001); CV ~31% for IR estimate (confirmed via PubMed abstract) · 30,921 citations (100th citation percentile) · download status: failed (Springer OA URL returns 303; PDF unverifiable) #gap/no-fulltext-access

[^wallace2004]: doi:10.2337/diacare.27.6.1487 · Wallace TM, Levy JC, Matthews DR · *Diabetes Care* 2004 27:1487–1495 · review + model validation · HOMA2 computer-model recalibration; provides guidance on epidemiological use; states HOMA appeared in 572 published works (not "500+" — confirmed from paper text); documents HOMA1 formula as (FPI × FPG)/22.5; cautions on beta-cell isolation interpretation; single-sample CV 10.3% for HOMA-%S and 7.7% for HOMA-%B (more precise than original Matthews 31%) · download status: downloaded and verified

[^fontana2010]: doi:10.1007/s11357-009-9118-z · Fontana L, Klein S, Holloszy JO · *AGE* 2010 32:97–108 · n=84 (28 CR, 28 endurance exercisers [EX], 28 Western-diet controls [WD]) · observational cross-sectional · mean CR duration ~7 years (range 3–20 years); HOMA-IR: CR 0.29±0.1 vs EX 0.44±0.3 vs WD 1.6±1.3 (P=0.0001); ~40% of CR group (11/28) showed impaired glucose tolerance by OGTT 2-h glucose >140 mg/dL (CR-IGT subgroup), attributed to low IGF-1/testosterone/T3 (starvation adaptations) rather than hepatic insulin resistance; both HOMA-IR and Matsuda ISI significantly higher in CR and EX vs WD (P=0.001); published online November 2009 (hence DOI year suffix -2009-; print volume 2010) · download status: downloaded and verified

[^weiss2006]: doi:10.1093/ajcn/84.5.1033 · Weiss EP et al. · *Am J Clin Nutr* 2006 · n=46 (18 exercise, 18 CR, 10 control) · rct · 12-month comparable improvement in glucose tolerance and insulin action by CR vs exercise-induced weight loss; neither modality superior · 353 citations · download status: not_oa

[^rodriguez2022]: doi:10.1007/s11357-021-00384-4 · Rodríguez-Mañas L, Angulo J, Carnicero JA, El Assar M, García-García FJ, Sinclair AJ · *GeroScience* 2022 44:1095–1108 · n=991 community-dwelling non-diabetic older adults (mean age 74.3±5.6 yrs, 57.9% female) · longitudinal cohort (median 5-year follow-up, 88 deaths) · Toledo Study of Healthy Aging (TSHA) · log HOMA-IR inversely associated with mortality: HR 0.64 (95% CI 0.46–0.90) unadjusted; 0.67 (0.47–0.95) model 1; 0.69 (0.49–0.98) model 2; 0.65 (0.46–0.91) model 3 (all p<0.05) · incident frailty (Frailty Phenotype) OR=1.81 (95% CI 1.14–2.87) fully adjusted · FTS score worsening OR=1.28 (1.01–1.63) · Kaplan-Meier: highest HOMA-IR tertile had lowest mortality (log-rank p=0.0082) · PMC9135930 · download status: downloaded and verified

[^hwang2015]: doi:10.1089/rej.2015.1699 · Hwang AC et al. · *Rejuvenation Research* 2015 · n=1,839 community-dwelling adults (Taiwan) · longitudinal cohort (I-Lan Longitudinal Aging Study) · HOMA-IR predicted frailty independently (OR=1.30, p=0.032) in fully adjusted models · 52 citations · download status: not_oa

[^perez2017]: doi:10.1093/ageing/afx023 · Pérez-Tasigchana RF et al. · *Age and Ageing* 2017 · n=1,499 (84 incident frailty cases, 3.5-year follow-up) · prospective cohort · metabolic syndrome OR=1.85 (95% CI 1.12–3.05) for frailty development; HOMA-IR independently associated · 126 citations · download status: pending (OA via bronze)
