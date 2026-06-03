---
type: biomarker
aliases: [whole-blood NAD+, blood NAD, circulating NAD+, NAD biomarker, plasma NAD]
modality: metabolomic
unit: nmol/mL
training-cohort: |
  No machine-learning training cohort — whole-blood NAD+ is a directly measured metabolite, proposed as an aging biomarker rather than trained as a predictor. The literature that proposed blood NAD+ as an aging marker:
  - Chaleckis 2016 (PNAS): n=30 (15 young + 15 elderly) Japanese; whole blood metabolomics including NAD+; reported age-related NAD+ decline
  - Yang 2022 (Front Endocrinol): n=80 Chinese; reported age-correlated whole-blood NAD+ decline
  - Wang 2023 (Aging Cell): fingerstick blood assay; n=2,140 across age/sex; reported age- and sex-dependent NAD+ "disparity"
  - Breton 2020 (Exp Gerontol): n=78 hospitalized heart failure patients; very-old subjects had lower blood NAD
  - Janssens 2022 (Nat Aging): n=88 human muscle (NOT blood) biopsies; positive association between healthy aging and *muscle* NAD+ abundance — frequently cited as supporting blood NAD+ biomarker rationale by extension
  - Euro 2025 (bioRxiv preprint): dynamics of blood NAD + glutathione in health/disease/aging
n-cpgs-or-features: 1
training-target: chronological-age
calibration-tissues: ["[[blood]]"]
test-retest-icc: null
human-evidence-level: limited-negative
mendelian-randomization: not-tested
intervention-responsive: partial
literature-checked-through: 2026-05-15
verified: true
verified-date: 2026-05-18
verified-by: claude
verified-scope: "Full-PDF cross-check of the primary negative source ([[studies/tretowicz-2026-blood-nad-stable-aging]]) against the user-supplied 24-page PDF on 2026-05-18. All Trętowicz-2026-derived claims on this page (7 cohorts, n=303, P-values, R² values, pre-analytical artifacts, NR positive-control responsiveness, power-analysis figures) match Results, Methods, and Extended Data Figs 1–7. Corrections applied 2026-05-18: (a) added that −80°C freezing also degrades NAD+ (previously only −20°C was mentioned); (b) added method-validation parameters (LOD 0.21 nmol/mL, LOQ 0.69 nmol/mL, intra/inter-assay CV 12.5%/16.1%); (c) added quantitative NR positive-control values (32→62 nmol/mL, P=1.59e-9). Prior-literature citations (Chaleckis 2016, Wang 2023, Yang 2022, Breton 2020) have NOT been independently PDF-verified — they are summarized from Trętowicz's reference list and abstract level only; flagged for separate verification pass."

# Whole-Blood NAD+ as an Aging Biomarker (refuted, 2026)

Whole-blood nicotinamide adenine dinucleotide (NAD+) concentration was proposed across multiple 2016–2025 studies as a candidate biomarker of human biological aging — the rationale being that NAD+ declines with age in rodent tissues, and that blood is the most clinically accessible matrix in which to measure it. **As of 2026 this hypothesis is directly refuted** at the whole-blood level by the most rigorous human assessment to date: [[studies/tretowicz-2026-blood-nad-stable-aging|Trętowicz et al. 2026, Nature Metabolism]] (n=303 across 7 independent cohorts) finds whole-blood NAD+ is **stable with age** (all six independent age comparisons null: P=0.24–0.62, R²=0.012–0.051) and **stable across lifestyle interventions** (exercise, protein supplementation) in older adults. The same UHPLC-HRMS assay readily detects pharmacological NAD+ elevation from NR supplementation, ruling out a sensitivity floor.

This page documents both the *original biomarker hypothesis* and *why it failed*, since the negative result is itself informative and the prior-literature misclassification is structurally instructive about pre-analytical artifacts in metabolomic aging biomarkers.

**Bottom line for clinical use:** A blood NAD+ measurement in 2026 carries essentially **no information about an individual's biological age**, and a single blood NAD+ value should not be used to advise NAD+ precursor supplementation or to track aging-intervention response in healthy adults.

## Why blood NAD+ was proposed as an aging biomarker

Five lines of evidence motivated the original hypothesis:

1. **Strong rodent data.** NAD+ declines substantially in mouse liver, white adipose tissue, and skeletal muscle with age (Yoshino 2011, Mills 2016, Camacho-Pereira 2016; reviewed in [[nad-precursors]]). The magnitude varies by tissue but reaches 50–90% in some compartments.
2. **Mechanistic plausibility.** Several aging-associated processes converge on NAD+ depletion: CD38 upregulation (NAD+-degrading NADase, rises with inflammaging), PARP1 hyperactivation (substrate-consuming DNA repair under accumulating genotoxic stress), and NAMPT decline (rate-limiting salvage enzyme expression decreases with age).
3. **Limited human tissue data was confirmatory.** Massudi 2012 (n=49) reported age-associated NAD+ decline in human skin biopsies (r=−0.71, p<0.001 in males); Janssens 2022 (n=88) reported a positive association between healthy aging and muscle NAD+ abundance.
4. **Several blood-NAD+/age studies reported positive correlations.** Chaleckis 2016, Yang 2022, Wang 2023, Breton 2020 each reported an age-related decline in some matrix of blood NAD+.
5. **Clinical accessibility.** Compared to muscle biopsies or skin punches, blood draws are routine. A blood-based aging-NAD+ biomarker would have been ideal for trial PD monitoring and population screening.

The class-level NAD+-precursor supplementation field ([[nad-precursors]]) developed largely on premise #1 (rodent decline) plus premise #5 (clinical accessibility), with the implicit assumption that blood NAD+ would track tissue NAD+ as the biomarker.

## Why the hypothesis failed: Trętowicz 2026

[[studies/tretowicz-2026-blood-nad-stable-aging|Trętowicz et al. 2026]] is the definitive negative result. Three features of the design make it more rigorous than the prior positive literature:

### 1. Seven independent cohorts (n=303 total)

Each cohort is independently powered for an age comparison; the meta-evidence is consistent across diverse populations (frail, athletic, post-cardiac-event, long-lived-family) and geographies (Netherlands, Spain, Finland):

| Cohort | n | Population | Age comparison | Result |
|---|---|---|---|---|
| Aging cohort | 40 | 20 young <30y + 20 older >60y, NL | Older vs Younger | **P = 0.24** (NS) |
| CardioHT | 26 | Mixed-age cardiology referrals, NL | Age vs NAD+ regression | **R² = 0.012** |
| ELITE | 47 | Young controls + older controls + athletes, NL | Older vs Athlete | **P = 0.50** (NS) |
| LLS (Leiden Longevity Study) | 70 | Older adults 63–87y, NL | Age within older range | **R² = 0.051** |
| TEAMS | 65 | Older adults >65y, exercise±protein RCT, NL | Pre vs post intervention | **P = 0.62** (NS) |
| MEJNES2019 | 31 | Frail older adults >65y, supplement±exercise RCT, ES | Pre vs post intervention | **P = 0.62** (NS) |
| Twin-pair NR cohort | 24 | Healthy 33–41y, NCT03951285, FI | NR supp vs baseline (positive control) | **Significant rise** (per abstract) |

The age-comparison cohorts span the most-tested human populations for blood-NAD+/age claims; all are null.

### 2. UHPLC-HRMS assay rigorously controlled for pre-analytical artifacts

The authors trace much of the conflicting prior blood-NAD+/aging literature to **pre-analytical handling effects**. From the paper's own source data:

- **Both freezer temperatures degrade NAD+, not just −20°C** (Extended Data Fig. 1b): fresh ~40 nmol/mL → −80°C ~31 nmol/mL (P=0.0015) → −20°C ~24 nmol/mL (P=0.023 vs fresh; −80°C-vs-−20°C P=0.38). Storage at −20°C for 4–5 days destroys ~52% of whole-blood NAD+; −80°C destroys ~22%. **No standard freezer protocol preserves NAD+ fidelity** — and most prior studies used standard −80°C archive storage.
- **Repeated freeze-thaw cycles further degrade NAD+:** loss is highly variable across donors (Fig. 1f shows two representative donors with cumulative losses of −4% vs −32% after 3 cycles; Extended Data Fig. 1c includes 4 additional donors with losses up to ~69%).
- **Methanol preservation before thawing recovers NAD+ to within ~1 SD (3.5 nmol/mL) of fresh values** across n=15 paired technical replicates — but most prior studies did not use this protocol.
- **Plasma NAD+ is 50–100× lower than whole-blood NAD+** and falls **at or below the LOQ (0.69 nmol/mL)** for most samples (n=10 donors: 0–0.58 nmol/mL). NAD+ is overwhelmingly intracellular. Any plasma-NAD+ aging claim is methodologically suspect.

**Assay specifications** (Trętowicz 2026 Methods § Validation of quantitative NAD+ measurement): UHPLC-HRMS (Waters Acquity + Bruker Impact II Q-TOF) with ¹³C₅-NAD+ internal standard spiked into 10 µL whole blood. LOD 0.21 nmol/mL · LOQ 0.69 nmol/mL · intra-assay CV 12.5% · inter-assay CV 16.1% · linearity R²=0.9996 across 10–100 µL input · spike-recovery 108–112% across 500/1000/2000 pmol additions.

Implication: prior reports of blood-NAD+ decline with age may primarily reflect **age-dependent pre-analytical handling differences in sample collection cohorts** (e.g., older participants more likely to be hospitalized → samples handled differently → apparent NAD+ deficit), rather than true biological age effects.

### 3. Positive control rules out sensitivity floor

The twin-pair NR cohort (n=24 monozygotic BMI-discordant twins, ages 33–41 y, NCT03951285, 5-month NR escalated from 250 mg/day → 1 g/day, Finland) was specifically included as a positive-control assay-sensitivity test. The same UHPLC-HRMS assay detected a ~2-fold NR-induced NAD+ elevation: median 32 → 62 nmol/mL pre→post, **P = 1.59 × 10⁻⁹** (linear regression adjusted for sex; Extended Data Fig. 3). The null age-NAD+ effect (P-values 0.24–0.62) is therefore not an artifact of insufficient assay sensitivity — the contrast in P-values spans ~10⁹, and the assay can clearly distinguish pharmacological from putative age-related effects when the latter exist.

## Power analysis: how large must a study be to detect a "true" blood NAD+ age effect?

From the paper's own power analysis (Extended Data Fig. 4, source data MOESM6):

- To detect Δ = 1 nmol/mL (~5% of typical baseline) with 80% power: **N ≈ 786 per group** once analytical variability is included.
- To detect Δ = 2 nmol/mL (~10% of baseline): N ≈ 197 per group.
- To detect Δ = 5 nmol/mL (~25% of baseline): N ≈ 14–31 per group depending on noise assumptions.

Most prior individual-cohort blood-NAD+/aging studies (n = 20–100 per group) had power to detect only very large (>3 nmol/mL) effects. The current paper's 7-cohort design (303 total) is the largest pooled assessment to date and is well-powered to detect biologically meaningful age effects if they exist.

## What the negative result does NOT rule out

The Trętowicz 2026 result is specific to **whole-blood NAD+ as an aggregate-pool aging biomarker in adults aged ~19–87**. It does not falsify the broader NAD+/aging story:

- **Tissue NAD+ decline remains supported** by Janssens 2022 (human muscle, n=88) and Massudi 2012 (human skin, n=49). These tissue findings are not directly contradicted; only the blood-tissue extrapolation is.
- **NAD+ flux / turnover** (vs static pool size) is not measured. If NAD+ consumption rises with age but salvage compensates, pool size could be stable while functional NAD+-dependent signaling (sirtuin activity, PARylation, CD38 activity) deteriorates. No human assay currently captures NAD+ flux at the whole-blood level. [^gap-flux]
- **Sub-population NAD+ deficits** may still exist. The current cohorts include frail community-dwelling older adults (MEJNES2019 baseline) but not, e.g., subjects with confirmed CHIP, severe sarcopenia, COPD, PAD, or progeroid syndromes (Werner). Disease-specific NAD+ deficits remain plausible — and consistent with the positive disease-specific RCT signals on NR (Heggelund 2024 COPD, McDermott 2024 PAD, Takeda 2025 Werner).
- **NR-induced blood NAD+ elevation is real** and reproducible — confirmed by the Trętowicz twin-pair positive-control arm. Blood NAD+ remains a **valid pharmacodynamic biomarker for NR engagement** (i.e., "did the participant take the supplement?"), even though it is not a valid aging biomarker.
- **Pediatric / inter-generational NAD+ dynamics** were not assessed. Cohorts spanned 19–87y; childhood and adolescent dynamics are open.

## Sources of confusion in the prior literature

Several recurring sources of confusion in pre-2026 blood-NAD+/aging studies:

1. **PBMC NAD+ ≠ whole-blood NAD+ ≠ plasma NAD+.** Different matrices, different distributions, different age relationships. Many citations conflate these. Trętowicz 2026 measures whole blood; the Yoshino 2021 NMN trial measured PBMC; Massudi 2012 measured skin biopsy. Direct comparisons across these are not warranted.
2. **Frozen samples lose NAD+ rapidly without methanol preservation.** Any study using `archive freezer → bench → analysis` workflow without methanol-pre-freeze loses ~30–80% of NAD+. Older cohorts may have been over-represented in archives with longer freezer time → spurious "age-related decline."
3. **NADH and other pyridine nucleotides interconvert during sample handling.** NAD+/NADH ratio measurements are particularly susceptible to handling-induced shifts.
4. **NADP+ shows a genuinely different age pattern from NAD+** (Trętowicz 2026 Extended Data Fig. 5: NADP+ Older-vs-Younger P=0.031 in the aging cohort, R²=0.237 in CardioHT — see study page). Studies measuring "total NAD(P) pool" may have detected the NADP+ signal and attributed it to NAD+.
5. **Mendelian randomization not yet applied to circulating NAD+.** Whether genetically-determined NAD+ levels predict aging outcomes via MR-instrumentable variants is untested. The negative Trętowicz result limits the prior probability of a meaningful MR signal at the blood level.

## Implications for the wiki and for aging-intervention practice

For the **[[nad-precursors]] intervention class**: the "restore-an-age-related-deficit" rationale is undermined at the blood level. The class can still proceed on tissue-level (muscle/skin) or pathological-state (COPD, PAD, Werner, MCI) rationales — and the positive disease-specific RCT signals from 2024–2026 (Heggelund, McDermott, Takeda) provide that grounding. But the simplest version of the supplementation story ("blood NAD+ declines with age → supplement to restore it") is no longer defensible.

For **clinical practice**: do not order whole-blood NAD+ as an aging biomarker. There is no validated reference range linking blood NAD+ to biological age, no actionable threshold, and no evidence that lifestyle interventions move it.

For **trial design**: blood NAD+ remains valid as a pharmacodynamic biomarker (confirming NR/NMN ingestion) but is invalid as a primary biological-age endpoint. Trials previously designed around blood NAD+ as a surrogate for "biological aging" need redesign with tissue-level or composite-clinical biomarkers ([[dunedinpace-2022]], [[grimage-2019]], [[phenoage-2018]]).

## Comparison with other "refuted" or "weak" aging biomarkers

The biomarker-refutation pattern is not unique to blood NAD+:

- **Serum klotho:** Initially proposed as an aging biomarker following the klotho-knockout mouse phenotype, but human serum klotho shows weak/inconsistent age correlations and limited intervention responsiveness.
- **Plasma 25-OH vitamin D:** Strong age-related decline exists but is largely attributable to sunlight exposure and lifestyle confounders rather than aging biology per se; supplementation does not extend lifespan in MR or RCT.
- **Salivary cortisol diurnal slope:** Promising in cross-sectional studies, weak in longitudinal designs.

The lesson from Trętowicz 2026 generalizes: **aging biomarkers fail validation more often when pre-analytical handling is not rigorously controlled and when the underlying biological assumption (tissue-of-decline → blood-of-decline) is unexamined.**

## Related Pages

- [[studies/tretowicz-2026-blood-nad-stable-aging]] — primary negative-result study
- [[nad-precursors]] — intervention class targeting NAD+; rationale framing updated 2026-05-15 to reflect this finding
- [[nmn]] · [[nr]] — specific compounds with PD biomarker discussions
- [[sirtuin]] — downstream effector of NAD+; activity is the functional readout the biomarker was a proxy for
- [[mitochondrial-dysfunction]] · [[deregulated-nutrient-sensing]] — hallmarks the blood NAD+ biomarker was meant to track
- [[dunedinpace-2022]] · [[grimage-2019]] · [[phenoage-2018]] — composite-clinical aging biomarkers that remain validated

## Footnotes

[^gap-flux]: #gap/no-mechanism — Whole-blood NAD+ flux/turnover is not currently a routine analyte. Isotope-tracer studies (e.g., D2-nicotinamide infusion) can measure NAD+ flux in animal models and have been piloted in humans for pharmacokinetic purposes, but a clinical-grade NAD+ flux biomarker for aging is not established. If functional NAD+-dependent signaling deteriorates with age while pool size is stable, flux is the missing measurement.
