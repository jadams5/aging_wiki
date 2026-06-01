---
type: study
doi: 10.64898/2026.04.21.26351390
pmid: null
pmc: null
title: "The Immunoglobulin G Glycome: A Modifiable Biomarker and Functional Effector of Aging, Disease, and Mortality"
authors: [Mijakovac A, Butz E, Vučković F, Frkatović Hodžić A, Rapčan B, Kifer D, Deriš H, Radovani Trbojević B, Lukšić F, Cindrić A, Gudelj I, Šimunić Briški N, Josipović G, Stara Yuksel Z, Čatić J, Šaler F, Szavits-Nossan J, Hedin CR, Šimunović J, Borošak I, Krištić J, Monteiro-Martins S, Pribić T, Hanić M, Pučić-Baković M, Trbojević-Akmačić I, Štambuk T, Štambuk J, Martinić Kavur M, Fančović M, Cvetko A, Pezer M, Polašek O, Gornik O, Kiprov D, Verdin E, Younggren B, Newson L, Menni C, Spector TD, Steves CJ, Halfvarson J, Pocheć E, Szewczyk M, Turkalj M, Wilson JF, Alarcon-Riquelme ME, Aden K, Rosenstiel P, Franke A, Frey N, Schreiber S, Blaak E, Köttgen A, Zoldoš V, Primorac D, Marjanović D, Schultheiss UT, Wang W, Lauc G]
year: 2026
journal: medRxiv (preprint)
study-design: meta-analysis
publication-type: preprint
volume: null
issue: null
pages: "2026.04.21.26351390"
organism: homo-sapiens
n-subjects: 20045
intervention: ["[[interventions/lifestyle/caloric-restriction]]", "[[interventions/blood-product/plasma-exchange]]", "[[hormone-replacement-therapy]]"]
hallmarks-tested: ["[[hallmarks/chronic-inflammation]]"]
human-evidence: true
peer-reviewed: false
preregistered: false
key-findings: [igg-glycome-mortality-prediction, glycanage-intervention-reversal, inflammaging-functional-link, disease-glycan-age-acceleration]
local-pdf: null
verified: false
verified-date: null
verified-by: null
---

> ⚠️ PREPRINT — medRxiv (Cold Spring Harbor Laboratory Press) posted 2026-04-23; not peer-reviewed. Quantitative claims verified against the fetched PDF (2026-05-20) but all findings must be treated as provisional until peer review. #gap/needs-peer-review

# Mijakovac 2026 — IgG Glycome as a Modifiable Mortality Biomarker

## TL;DR

The largest IgG glycome cross-study analysis to date (n=20,045 individuals from 37 studies, 2008–2025, Genos Glycoscience Research Laboratory) reports three major findings: (1) accelerated IgG-glycome biological aging (glycan age) is observed across nearly all diseases studied (19 diseases, 33 case-control studies), with autoimmune diseases showing the largest acceleration; (2) each additional year of glycan age is independently associated with a 5–10% increase in all-cause mortality hazard after adjustment for standard clinical risk factors (GCKD discovery cohort n=4,827, median follow-up 8.5 years; replicated in Vis cohort n=796, 10-year follow-up); (3) three interventions known to reduce mortality risk — hormone replacement therapy (HRT), therapeutic plasma exchange (TPE), and caloric restriction (CR) — are all associated with reversal of glycan aging. **This is a preprint; treat all conclusions as provisional.** #gap/needs-peer-review

## Background and Motivation

IgG Fc N-glycan composition shifts systematically with age: agalactosylated forms (G0) rise and digalactosylated (G2) and sialylated forms decline, reflecting and amplifying the [[hallmarks/chronic-inflammation|inflammaging]] trajectory [^kristic2014]. The [[biomarkers/glycanage-2017|GlycanAge biomarker]] (Kristic 2014) is well-established as a chronological-age predictor (R²~58% in training cohort; cross-population validation R²~41–50%). Prior studies had demonstrated intervention-responsiveness (estradiol RCT [^juric2020], bariatric surgery [^greto2021], exercise [^simunic2024]) but lacked a mortality-outcome endpoint. The key limitation of GlycanAge acknowledged in prior literature — "no large-scale mortality-outcome validation" — is directly addressed by this preprint [^glycanage_review].

Separately, a heterogeneous literature across many diseases had reported IgG glycome changes but lacked a unified analytical framework for cross-study comparison. Analytical differences between laboratories had blocked generalization. This study addresses both gaps by applying standardized UHPLC/LC-MS/CGE-LIF IgG N-glycan profiling across all 37 studies at a single laboratory (Genos).

## Study Design

**Cross-sectional and prospective multi-cohort analysis.** IgG glycome profiling performed on 20,045 samples from 37 independent studies at the Genos Glycoscience Research Laboratory between 2008 and 2025 [^mijakovac2026]. In the main paper text (Results), the authors note they "analyzed data from 37 different studies"; the abstract states "42 different studies." The discrepancy likely reflects study sub-divisions (e.g., SLE1–SLE4, UC1–UC4 are counted as separate studies in the 37 vs. separate cohort entries in the 42). The n=20,045 figure is from the Methods section (direct count from Table 1 cohort totals); the abstract reports 20,405, suggesting rounding/quality-control exclusion differences.

**Three analysis streams:**

1. **Disease-glycome association** — 33 case-control studies covering 19 diseases in three groups: (a) autoimmune/alloimmune (SLE, UC, CD, RA, HT, MS, PsA, SjD, SSc, GVHD); (b) cardiometabolic (CVD, CAD, HF, AF, T2D, DM); (c) other (COPD, allergic sensitization in children, colorectal cancer). Plus 4 population-based aging cohorts (Vis/Aging1, Korčula/Aging2, ORCADES/Aging3, TwinsUK/Aging4).

2. **Mortality analysis** — Cox proportional-hazards regression in the GCKD cohort (German Chronic Kidney Disease study; n=4,827 with valid glycosylation + complete covariates; 60% male; 840 deaths over median 8.5 years, data freeze 2024-11-21). Four adjustment models (M1: age+sex; M2: +BMI, smoking, systolic BP, LDL cholesterol, CVD, diabetes; M3: +CRP; M4: +eGRF and uACR). Replicated in Vis cohort (n=796; 94 deaths over 10 years; M2 model only — kidney markers not available, CRP excluded in replication).

3. **Intervention sub-studies** — three single-arm longitudinal studies: HRT (Newson Clinic, n=19 perimenopausal/menopausal women, mean age 52.6, 15 months follow-up); TPE (n=9 participants, 4F/5M, mean age 60.8, 6 months, monthly sessions); CR (DIOGENES study, n=680 across 8 European centers, 8-week 800 kcal/day low-calorie diet).

**Glycan age calculation** — for each dataset separately: general regression model with G0, G2, and S (total sialylated) as predictors and chronological age as the response variable; model prediction = glycan age. Glycan variables rank-transformed to standard Normal distribution (mean=0, SD=1) prior to analysis.

## Key Findings

### Finding 1 — IgG glycan age is accelerated across diseases

Glycan age was calculated for all 33 disease studies. Glycan age was accelerated (higher in cases vs controls, adjusted for age and sex) in nearly all examined disease studies relative to controls [^mijakovac2026]. Quantitatively:

- Autoimmune diseases: mean glycan age ~2.1 years higher than matched healthy controls across the combined autoimmune group. Effect reached statistical significance in 18 of 20 autoimmune studies. Highest acceleration in SLE (especially CD/UC studies showed pronounced effects), RA, CRC.
- Heart failure (HF) showed significant glycan age acceleration; CAD and AF did not.
- T2D and DM: significant glycan age acceleration observed.
- Colorectal cancer (CRC): significant glycan age acceleration.
- GVHD: trend toward acceleration (non-significant; small n).
- Allergic sensitization studies (children): no association — attributed to pediatric population (IgG glycome dynamics differ in children < 12).

The dominant glycan change driving glycan-age acceleration across both aging and disease is the G2 decline (digalactosylated IgG), which showed "a strong and consistent decrease across all four aging cohorts" and was substantially reduced in most disease studies. G1 (monogalactosylated) was more variable — the authors note this as a distinctive finding separating aging from disease states.

### Finding 2 — Glycan age independently predicts all-cause mortality

In the GCKD discovery cohort (n=4,827; 840 deaths over 8.5 years) [^mijakovac2026]:

- M1 (age+sex adjusted): each additional year of glycan age → **HR 1.10 (95% CI 1.08–1.12)** for all-cause mortality
- M4 (fully adjusted: age, sex, BMI, smoking, systolic BP, LDL, CRP, prevalent diabetes, eGFR, uACR): each additional year of glycan age → **HR 1.05 (95% CI 1.03–1.06)**

The M4 association remained statistically significant after adjustment for CRP, suggesting IgG glycans capture a component of inflammatory aging burden not reflected in acute-phase CRP. The authors interpret this as consistent with IgG glycans measuring "chronic long-term inflammatory burden" rather than transient acute-phase responses.

**Replication (Vis cohort, n=796, 94 deaths, 10 years):** In the M2-equivalent model (age, sex, BMI, smoking, SBP, LDL, CVD, diabetes — no CRP or kidney markers), HR 1.03 (95% CI 1.00–1.06). The M3-equivalent model with CRP did not replicate — authors note that the Vis cohort was likely underpowered for the fully adjusted model (only 94 deaths). #gap/needs-replication

**Case-control death comparison (GCKD, ages 45–64):** participants who died during follow-up (N=255) had mean glycan age 62 ± 6 years vs survivors (N=1,743) in the same age group: 59 ± 6 years; P=4.7×10⁻¹⁷ (two-sided t-test). Replicated in Vis. GCKD ages 65–75: deceased (N=577) mean 64 ± 4 vs survivors (N=1,674) mean 62 ± 5 years; P=1.9×10⁻¹³ (not replicated in Vis for this subgroup).

**Important caveat:** The GCKD cohort consists of patients with chronic kidney disease (CKD), not the general population. The Vis cohort is population-based. The mortality effect size in GCKD may be inflated by disease-specific confounding. #gap/needs-replication in healthy general-population prospective cohorts.

### Finding 3 — Three interventions reverse glycan aging

#### HRT — Newson Clinic cohort (n=19)

Nineteen healthy perimenopausal/menopausal women initiating body-identical HRT at the Newson Clinic (Stratford-upon-Avon, UK) were monitored for up to 15 months (mean follow-up 10.1 months; mean age 52.6 years, SD 4.15) [^mijakovac2026]. HRT regimen: estrogen in combination with progesterone, testosterone, or both. IgG glycome profiled from dried blood spots (UHPLC).

Key result: **mean reduction in glycan age of 0.12 glycan years per month of HRT** (P=5.76×10⁻⁸). This is consistent in direction with the Jurić 2020 RCT (GnRH-agonist suppression model; estradiol prevented +9.1-year glycan-age increase) [^juric2020] and extends that finding to a real-world longitudinal cohort using natural menopause initiation of HRT. However, this sub-study is uncontrolled (single-arm) with n=19. #gap/needs-replication #gap/needs-peer-review

**Comparison to Jurić 2020:** Jurić 2020 used pharmacological gonadal suppression (not natural menopause) and was an RCT (n=36) — higher internal validity. The Newson cohort is naturalistic/observational but closer to the real clinical scenario of perimenopausal HRT. The two studies are not contradictory but the effect sizes are not directly comparable (Jurić measured prevention of suppression-induced acceleration; Newson measures active reversal during natural menopause transition).

#### TPE — Circulate Health cohort (n=9)

Nine participants (4F/5M, mean age 60.8, SD 9.19) who underwent monthly TPE sessions over 6 months (Circulate Health, Seattle, WA; IRB: Diagnostics Institutional Review Board, Cummaquid, MA) had IgG glycome profiled from dried blood spots (CGE-LIF) at baseline, ~3 months, and ~5 months [^mijakovac2026].

Key result: **mean reduction in glycan age of 0.4 glycan years per month of TPE** (P=0.0245). This is the **first publication of IgG-glycome data from a TPE cohort** and is consistent with the [[interventions/blood-product/plasma-exchange]] [[studies/fuentealba-2025-plasma-exchange-multi-omics|Fuentealba 2025 Aging Cell]] multi-omics TPE rejuvenation study, which showed improvement across 15 epigenetic clocks in a randomized controlled TPE trial (n=42) [^fuentealba2025].

**Critical caveats:** n=9 (very small), uncontrolled, single-arm, no placebo/sham comparison. The effect size (0.4 glycan yr/month) is larger than the HRT effect (0.12 glycan yr/month) despite prior evidence suggesting TPE has more modest effects on epigenetic clocks than HRT in the Jurić 2020 framework. This may reflect population differences (older, CKD-adjacent?) or analytical variability. #gap/needs-replication #gap/needs-peer-review

#### CR — DIOGENES study (n=680)

The DIOGENES (Diet, Obesity and Genes) interventional weight-loss study enrolled 680 participants across 8 European centers. Protocol: 800 kcal/day low-calorie diet for 8 weeks, with assessment at baseline and end of diet. Glycan age was calculated from pre-existing stored samples [^mijakovac2026].

Key result: an **average weight loss of 11 kg** (across the 8-week intervention) was associated with **significant deceleration of glycan aging** (P=0.0017, random-effects meta-analysis across sites). Seven of 8 centers individually showed a decreasing trend. Separately, BMI was shown to increase glycan age by 0.35 years per BMI unit (95% CI 0.24–0.46; P<0.001) in cross-sectional analysis of two Croatian cohorts (Korčula N=915 and Vis N=886).

This extends the [[studies/greto-2021|Greto 2021]] bariatric surgery finding (significant glycan shifts post-surgery) to a non-surgical, diet-only context and provides a directional magnitude (11 kg weight loss → significant glycan-age reduction, though the number of glycan years reduced is not reported as a single numeric). #gap/needs-replication (exact delta glycan years per kg not reported in the main text for the DIOGENES cohort)

### Finding 4 — Menopause accelerates glycan aging by ~8 years

Premenopausal women (matched by chronological age from Vis + Korčula cohorts; N matched=84+106=190 pairs total) exhibited glycan age on average **8 years younger** than their postmenopausal counterparts (95% CI 5.7–10; P<0.001). This is an observational cross-sectional comparison, not a longitudinal transition study. #gap/needs-replication (cross-sectional only; confounding by cohort-level factors possible)

## Mechanistic Interpretation

The authors frame IgG glycans as a "functional link between chronic inflammation, aging, disease susceptibility and all-cause mortality" — a bidirectional effector/readout, not merely a correlative marker. The mechanistic hypothesis (full enzymology + FcγR effector-function biology on [[igg-fc-glycosylation]]):

1. Aging, disease, and adverse physiological states (obesity, menopause) down-regulate glycosyltransferases ([[b4galt1|B4GALT1]], [[st6gal1|ST6GAL1]]) in IgG-producing B cells, reducing galactose and sialic acid addition to the IgG Fc N-glycan.
2. The resulting hypogalactosylated IgG (G0-enriched) activates the lectin complement pathway (via MBL binding) and preferentially engages activating FcγRIIIA (CD16), increasing ADCC and pro-inflammatory cytokine release (TNF-α, IL-6).
3. Pro-inflammatory cytokines further suppress glycosyltransferases — a self-amplifying feedback loop.
4. Interventions that reduce systemic inflammatory tone (HRT restores estrogen → upregulates B4GALT1; TPE removes aged IgG and inhibitory plasma factors → allows de novo synthesis of better-glycosylated IgG; CR reduces metabolic inflammation → reduces inflammatory glycosyltransferase suppression) shift the glycan balance back toward younger profiles.

This positions the IgG glycome as potentially causal in the inflammaging cascade, not merely a downstream read-out — though **no Mendelian randomization study has yet tested this causal claim** [^glycanage_review]. #gap/needs-replication (MR causal evidence absent; see [[biomarkers/glycanage-2017]] limitations)

## Limitations

Acknowledged by the authors and reviewer-level additions:

1. **Preprint, not peer-reviewed.** All findings provisional. #gap/needs-peer-review
2. **Meta-aggregation of heterogeneous studies** — 37 studies from multiple countries, disease populations, and cohort designs. Even with standardized Genos laboratory processing, residual confounding by cohort composition (autoimmune diseases overrepresented, cancer and neurodegenerative diseases underrepresented) may inflate apparent disease-generalizability of the glycan-age acceleration finding.
3. **GCKD cohort is CKD patients, not healthy aging.** The mortality HR (1.10 unadjusted, 1.05 fully adjusted per glycan year) may not generalize to general-population mortality prediction. The Vis replication partially addresses this but with only 94 deaths and no CRP/kidney-function adjustment.
4. **Intervention sub-cohorts are very small.** HRT n=19, TPE n=9; both are single-arm longitudinal, no placebo control. DIOGENES CR is larger (n=680) but the reported endpoint (glycan-age deceleration) is novel re-analysis of a pre-existing dataset, not pre-registered.
5. **Replication failure in fully adjusted mortality model (Vis).** The M3-equivalent (with CRP) model did not replicate in Vis, which the authors attribute to underpowering (94 deaths). This is plausible but means the key confound-adjustment (CRP) was not successfully tested in replication.
6. **Direct causal inference requires arm-specific RCTs.** The HRT and TPE intervention findings are observational; confounding by indication (healthier patients selecting these interventions) and regression to the mean cannot be excluded.
7. **Some small studies** (HT n=29 cases; MS n=83 cases) were likely underpowered for detecting glycan-age changes, and non-significant results in these may not be true negatives.

## Significance and Place in the Field

This preprint addresses the single most prominent limitation of the GlycanAge biomarker as previously characterized: the absence of a large-scale mortality-outcome validation. If the findings survive peer review and replication:

- GlycanAge moves from a chronological-age-trained clock to a **mortality-outcome-validated aging biomarker**, comparable in framing to [[biomarkers/grimage-2019]] (HR ~1.10/yr for GrimAge vs HR 1.10/yr unadjusted for glycan age here — though populations differ markedly, with GCKD being CKD patients).
- The three-intervention reversal catalog strengthens the case for IgG glycome as a **personalized response biomarker** — a tool for monitoring interventions against inflammaging, not just a cross-sectional aging readout.
- The TPE finding (n=9, preliminary) is the first glycomic evidence supporting TPE's anti-aging effect at the IgG level, complementing the multi-omics Fuentealba 2025 paper that showed 15 epigenetic clocks improve after randomized TPE [^fuentealba2025].
- The CR finding provides a diet-only (non-surgical) data point consistent with the general hypothesis that reducing metabolic inflammatory tone improves IgG glycosylation.

Compare this paper's scope to the prior state: [[biomarkers/glycanage-2017]] documented intervention-responsiveness but the comparison table in that page explicitly noted "Mortality-predictive: Unknown — no large mortality-outcome study yet." This preprint directly addresses that gap. The update to that page is warranted.

## See Also

- [[biomarkers/glycanage-2017]] — foundational Kristic 2014 GlycanAge clock; this study extends to mortality + intervention catalog
- [[interventions/blood-product/plasma-exchange]] — TPE mechanism and prior evidence; this study adds IgG glycome data
- [[interventions/lifestyle/caloric-restriction]] — the CR/DIOGENES finding extends glycan-responsiveness evidence
- [[hallmarks/chronic-inflammation]] — primary mechanistic link; IgG glycans as effector of inflammaging
- [[hallmarks/altered-intercellular-communication]] — IgG effector function changes affect immune-cell signaling during aging
- [[hormone-replacement-therapy]] — HRT mechanism and gynecologic aging; this study's Newson cohort finding
- [[biomarkers/grimage-2019]] — mortality-trained DNAm clock; comparison context for HR effect sizes
- [[studies/fuentealba-2025-plasma-exchange-multi-omics]] — stub; Fuentealba 2025 Aging Cell TPE multi-omics RCT (n=42)

## Footnotes

[^mijakovac2026]: doi:10.64898/2026.04.21.26351390 · Mijakovac A, Butz E, Vučković F, Lauc G et al. · medRxiv preprint posted 2026-04-23 · PREPRINT — not peer-reviewed · n=20,045 across 37 studies (2008–2025, Genos Glycoscience Research Laboratory) · cross-cohort meta-analysis (cross-sectional + longitudinal sub-studies) · mortality discovery: GCKD cohort n=4,827, 840 deaths, 8.5-yr median follow-up; replication: Vis n=796, 94 deaths, 10-yr follow-up · local PDF: fetched from medRxiv 2026-05-20

[^kristic2014]: doi:10.1093/gerona/glt190 · Kristic J et al. · J Gerontol Biol Sci Med Sci 2014 69(7):779–789 · n=5,117 across 4 European populations · observational (cross-sectional; repeated subsampling) · three IgG glycan peaks explain up to 58% variance in chronological age · model: human adults · archive: downloaded, verified 2026-05-09

[^juric2020]: doi:10.18632/aging.104060 · Jurić J, Kohrt WM, Kifer D, Lauc G et al. · Aging (Albany NY) 2020 · rct · n=36 healthy premenopausal women · GnRH agonist suppression; estradiol add-back prevented GlycanAge increase (+9.1 yr suppression-only; delta −0.23 yr with estradiol; p=3.73×10⁻⁸) · archive: downloaded, verified 2026-05-09

[^greto2021]: doi:10.1038/s41366-021-00816-3 · Greto VL, Lauc G et al. · Int J Obes 2021 45:1521–1531 · n=37 bariatric surgery (sleeve gastrectomy/RYGB) + TwinsUK replication (n=1,680) · interventional pre-post · significant post-surgery increases in G2 and S, decreases in G0 and CF · archive: downloaded, verified 2026-05-09

[^simunic2024]: doi:10.1007/s10719-023-10144-5 · Simunic-Briski N, Lauc G et al. · Glycoconj J 2024 41:67–76 · n=276 adults (4 physical activity groups) · observational cross-sectional · ACT vs INACT: β=−7.437 GlycanAge yr, p.adj=7.85×10⁻³ · archive: downloaded, verified 2026-05-09

[^fuentealba2025]: doi:10.1111/acel.70103 · Fuentealba M, Kiprov D, Verdin E et al. · Aging Cell 2025 · rct (single-blinded) · n=42 · multi-omics analysis (proteomics, metabolomics, epigenetic clocks) of TPE ± IVIG; 15 epigenetic clocks showed biological age rejuvenation vs placebo · archive: pending · #gap/needs-peer-review (RCT; larger than the n=9 glycome sub-cohort in this preprint)

[^glycanage_review]: [[biomarkers/glycanage-2017]] § Comparison to DNAm Clocks — notes "Mortality-predictive: Unknown — no large mortality-outcome study yet" as of 2026-05-09 verification
