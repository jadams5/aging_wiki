---
type: biomarker
aliases: [Horvath 2013, DNAm age, pan-tissue clock, epigenetic clock, 353-CpG clock]
modality: dna-methylation
unit: years
training-cohort: "Horvath 2013: 7,844 non-cancer samples / 82 Illumina datasets / 51 tissue and cell types"
n-cpgs-or-features: 353
training-target: chronological-age
calibration-tissues: ["blood", "saliva", "brain", "breast", "liver", "kidney", "lung", "skin", "adipose"]
test-retest-icc: null
human-evidence-level: strong
mendelian-randomization: partial
intervention-responsive: partial
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Horvath 2013 primary source PDF verified end-to-end; Fitzgerald 2021 and Waziry 2023 PDFs verified for all claims cited on this page. Higgins-Chen 2022 (download status: pending) not verified against full PDF — cited for qualitative reliability claim only. R34 recency refresh 2026-05-08: METFORAGING (Marcelo-Calvo 2026), DO-HEALTH cancer follow-up (Rösler 2026), and TCGA-BRCA prognostic (Tan 2026) integrated from abstracts only — full PDFs not re-verified."
literature-checked-through: 2026-05-08
---

# Horvath Clock (2013)

The first and most widely cited epigenetic aging clock. Trained on 353 CpG methylation sites selected by elastic-net regression across 51 human tissue and cell types, the Horvath clock predicts chronological age with ~3.6-year median absolute error in held-out test data [^horvath2013]. Its pan-tissue applicability — the same 353 CpGs work across blood, brain, saliva, kidney, and dozens of other tissues — makes it the foundational reference for the entire biological-age-measurement field.

## Identity and Origin

- **Primary citation:** Horvath S (2013) *Genome Biology* 14:R115 — doi:10.1186/gb-2013-14-10-r115
- **Local PDF:** available (doi:10.1186/gb-2013-14-10-r115)
- **Citation count:** ~6,800 (as of 2026-05-05; 100th citation percentile in archive)
- **Clock type:** First-generation (chronological-age trained)
- **Input modality:** Illumina HumanMethylation27 / HumanMethylation450 array data
- **Output:** Predicted chronological age in years ("DNAm age" or "Horvath age")

The clock was trained by combining 82 publicly available datasets from GEO (Gene Expression Omnibus) in a two-step penalized regression framework: (1) elastic net on the full 450K / 27K CpG space to select features; (2) cross-validated accuracy optimization. The final 353-CpG model was chosen for generalizability across tissue types — a deliberately conservative choice that sacrifices some within-tissue accuracy for cross-tissue portability.

## Training Details

| Parameter | Value |
|---|---|
| Total samples | n=7,844 non-cancer + 5,826 cancer samples (cancer set: 32 tissue datasets, 20 cancer types; used for cancer-specific age-acceleration validation only — not training) |
| Datasets combined | 82 Illumina array datasets from GEO |
| Tissues / cell types | 51 distinct tissue and cell types |
| Algorithm | Elastic-net penalized regression (glmnet R package) |
| Age transformation | log(age + 1) for samples < 20 yr; linear above 20 yr (addresses non-linearity in development) |
| Held-out test performance | Median absolute error (MAE) = 3.6 years; Pearson r = 0.96 |

The multi-tissue training strategy was deliberate: Horvath hypothesized that a clock tracking a shared epigenetic aging program across tissues would be more biologically meaningful than tissue-specific models.

## Performance Characteristics

### Accuracy vs chronological age

In held-out test data across tissues: Pearson r = 0.96, MAE = 3.6 years [^horvath2013]. This is the often-cited "r²=0.96" figure. Performance is stronger in tissues with high cell-type homogeneity and weaker in tissues with high compositional heterogeneity (e.g., whole blood, which is a mixture of immune cell types at varying proportions).

### Epigenetic age acceleration (EAA) as a mortality predictor

Epigenetic age acceleration (EAA = Horvath age − chronological age) predicts all-cause mortality, disease risk, and functional decline in large epidemiological cohorts. The effect size is moderate compared to second-generation mortality-trained clocks (GrimAge, PhenoAge); see [[frameworks/biological-age-measurement]] for cross-clock comparison. See also [[hallmarks/epigenetic-alterations]] (verified) and [[hypotheses/information-theory-of-aging]] (verified) for the mortality-prediction evidence base.

### Cell-type composition confound

Whole-blood Horvath age is partly driven by shifts in immune cell proportions with age. Cell-type deconvolution corrections (e.g., Houseman method) reduce but do not eliminate this confound. #gap/contradictory-evidence — whether EAA after cell-type correction retains its mortality-predictive value is debated in the literature.

## Intervention-Responsive Evidence

### Null signal: CALERIE-2 caloric restriction (primary null result)

In the CALERIE-2 randomized controlled trial (DNAm analysis sample n=197; 128 CR, 69 AL; from 220 randomized; 25% CR target over 2 years; mean achieved ~12.5% CR reduction, roughly half the prescribed target), **Horvath 2013 age and PC-versions of PhenoAge and GrimAge showed NO significant slowing** [^waziry2023]. Only DunedinPACE showed a significant effect. Note: Waziry 2023 analyzed PC-versions of PhenoAge and GrimAge as primary outcomes; first-generation Horvath 2013 clock results are reported in the supplementary — also null. This is a substantive null — CALERIE-2 is the best-powered human aging-intervention RCT as of 2026, and the result means that Horvath age did not detectably respond to the most validated lifestyle geroprotector in humans. #gap/contradictory-evidence

| Dimension | Status |
|---|---|
| Did Horvath clock slow with 2-year CR in humans? | No (Waziry 2023, p=NS) |
| Did DunedinPACE slow with 2-year CR in humans? | Yes (Waziry 2023, d=−0.25, 95% CI −0.41 to −0.09, p<0.003 at 24 months) |
| Are the clocks measuring the same thing? | Uncertain — see [[frameworks/biological-age-measurement]] |

### Positive signal: Fitzgerald 2021 diet-and-lifestyle pilot (contested)

An 8-week multi-modal intervention (methylation-supporting diet + exercise + sleep + relaxation + probiotic supplement protocol) in 44 randomized healthy adult males aged 50–72 (38 analyzed: 18 treatment, 20 control; 4 treatment dropouts, 2 control withdrawals) reduced Horvath DNAm age by a mean of 3.23 years relative to controls (p=0.018; unpaired two-tailed t-test) [^fitzgerald2021]. Within-group, treatment participants scored 1.96 years younger than their own baseline (p=0.066; trend, not significant). This is a **positive signal**, but the study is small (n=38 analyzed), short (8 weeks), pilot-grade, conducted in saliva samples, funded by Metagenics Inc. (supplier of the study supplements), and has not been independently replicated as of 2026-05-05. #gap/needs-replication

The biological interpretation is contested: whether 8 weeks of dietary change can produce durable epigenetic rejuvenation, or whether the methylation changes reflect transient metabolic adaptations that confound the clock output, is unresolved.

### Null signal: METFORAGING metformin pilot (2026)

In the METFORAGING pilot RCT (Marcelo-Calvo 2026; n=40 randomized; 96-week 850 mg metformin BID vs placebo in non-diabetic older PLWH ≥50 yr), Horvath 2013 was among 11 epigenetic clocks tested as secondary outcomes [^metforaging2026]. **Horvath 2013 EAA showed no significant between-group difference at 96 weeks**, consistent with the null PhenoAge primary endpoint (−1.02 yr, 95% CI −5.30, 3.26; P=0.627) and with the broader pattern that first-generation clocks do not respond to short-to-medium-duration pharmacological interventions. Trial was underpowered (closed at 40/60).

### Cancer-association: DO-HEALTH 3-year follow-up (Rösler 2026)

DO-HEALTH 3-year follow-up of generally healthy adults ≥70 (n=2,152 trial / n=777 aging subsample) reported that participants who developed incident invasive cancer showed **3.52–6.77 months greater baseline Horvath EAA** at trial start [^rosler2026]. Horvath, Hannum, and PhenoAge clocks all showed this association; GrimAge and DunedinPACE were tested but not specifically named in the abstract as differentiators. This places Horvath among the EAA measures that prospectively associate with future cancer incidence in healthy older adults.

### Prognostic non-utility in TCGA breast cancer (Tan 2026)

In a TCGA-BRCA tumor-methylome analysis (n=781), **Horvath 2013 did not separate survival outcomes** in Kaplan-Meier or multivariable Cox analyses, while later-generation PhenoAge and GrimAge2 did [^tan2026]. This adds to the pattern that first-generation clocks (Horvath, Hannum) carry less prognostic information than second-generation mortality-trained clocks in cancer cohorts.

## Cross-Tissue Calibration

The clock was explicitly designed and validated across 51 tissue and cell types. Key calibration findings [^horvath2013]:

- Performance is high in tissues with known stable cell-type composition (brain cortex, liver)
- Performance is lower in whole blood (composition-driven variation) and in rapidly dividing tissues (gut epithelium)
- The clock performs well in cord blood and fetal tissue, supporting the idea it tracks a developmental + aging continuum
- Tissues enriched in senescent cells may show altered Horvath age independent of chronological aging #gap/unsourced

## Limitations and Open Critiques

1. **Chronological-age training** — The clock predicts chronological age, not mortality or morbidity. It was not trained to optimize any health outcome. Clock acceleration (EAA) is a derived measure, not the primary training target. This means it may not capture aging dimensions most relevant to intervention. Compare to mortality-trained GrimAge and [[biomarkers/phenoage-2018]].

2. **Technical noise and test-retest reliability** — Higgins-Chen 2022 (Nat Aging; doi:10.1038/s43587-022-00248-2) demonstrated that conventional DNAm clock scores have substantial technical noise from batch effects, sample handling, and array normalization — reducing test-retest ICC below what would be needed for sensitive longitudinal tracking. Principal-component (PC) versions of the Horvath clock improve reliability [^higginsChen2022]. #gap/contradictory-evidence

3. **Cell-type composition confound in blood** — A major fraction of apparent Horvath EAA in whole blood may reflect immune aging (shifts toward myeloid-biased, clonally expanded populations) rather than intrinsic epigenetic drift. Cell-type-corrected ("intrinsic") EAA is more conservative but harder to measure accurately.

4. **Null intervention-response** — The CALERIE-2 null (Waziry 2023) means the clock does not serve as a sensitive readout of the most-validated human longevity intervention. Whether this means CR does not slow "epigenetic aging" (as Horvath's clock captures it) or that Horvath's clock is simply insensitive to the relevant CR biology is unresolved.

5. **Single-tissue vs cross-tissue meaning** — Using blood-derived Horvath age as a proxy for brain or organ-specific aging rests on the assumption of correlated drift. This is approximately true on average but has substantial individual-level variability. #gap/no-mechanism

6. **450K → EPIC array migration** — The original 353 CpGs were selected on 27K and 450K arrays; coverage on the newer Illumina EPIC (850K) array varies. Normalization and coverage differences require careful handling for EPIC-based studies.

## Cross-references

- [[biomarkers/hannum-clock-2013]] — blood-specific first-generation clock; trained on whole blood
- [[biomarkers/phenoage-2018]] — second-generation mortality-trained clock
- [[biomarkers/grimage-2019]] — second-generation mortality-trained clock (strongest mortality predictor)
- [[biomarkers/dunedinpace-2022]] — third-generation pace-of-aging clock; responds to CR
- [[biomarkers/lehallier-proteomic-clock-2019]] — proteomic aging clock
- [[hallmarks/epigenetic-alterations]] (verified) — hallmark page; cross-references this clock
- [[hypotheses/information-theory-of-aging]] (verified) — cites Horvath 2013 as foundational clock evidence
- [[interventions/lifestyle/caloric-restriction]] (verified) — CALERIE-2 null result on Horvath age
- [[frameworks/biological-age-measurement]] — comparison MOC for all clock types
- [[studies/horvath-2013-epigenetic-clock]] — study page stub

## Footnotes

[^horvath2013]: [[studies/horvath-2013-epigenetic-clock]] · n=7,844 non-cancer samples (82 GEO datasets, 51 tissues/cell types) · observational (multi-tissue cross-sectional) · Pearson r=0.96, MAE=3.6 yr in held-out test set · model: human tissues pan-age · doi:10.1186/gb-2013-14-10-r115 · local PDF available

[^waziry2023]: [[studies/waziry-2023-calerie-epigenetic-clock]] · n=197 DNAm analysis sample (128 CR, 69 AL; from 220 randomized) · rct · model: healthy non-obese human adults aged 21–50 (men) / 21–47 (premenopausal women), 3 US sites (CALERIE Phase 2, 2-year 25% CR target; mean achieved ~12.5% CR — roughly half the prescribed dose) · doi:10.1038/s43587-022-00357-y · local PDF available · primary outcomes (PC PhenoAge, PC GrimAge): NS (12-mo d=−0.03, 24-mo d=0.05, P>0.40 for PhenoAge; GrimAge similar); first-generation Horvath 2013 clock: NS (supplementary data); DunedinPACE: d=−0.25 (95% CI −0.41, −0.09) at 24 months, P<0.003

[^fitzgerald2021]: [[studies/fitzgerald-2021-diet-lifestyle-epigenetic-clock]] · n=44 randomized (22 intervention, 22 control); 38 analyzed (18 treatment, 20 control) · rct (small pilot) · p=0.018 unpaired two-tailed t-test, between-group (Horvath DNAm age reduction 3.23 yr vs controls); within-group treatment effect 1.96 yr, p=0.066 (NS) · model: healthy adult males aged 50–72, saliva DNA methylation (Illumina EPIC array) · doi:10.18632/aging.202913 · local PDF available · contested: small n, short duration (8 weeks), unblinded, industry-funded (Metagenics Inc.), not independently replicated · note: no CI for between-group effect reported in paper

[^higginsChen2022]: doi:10.1038/s43587-022-00248-2 · n=large (multiple array datasets) · observational/computational · model: human blood DNA methylation array data · Nat Aging 2022 · principal-component (PC) clock versions improve test-retest ICC substantially vs conventional clocks · download status: pending

[^metforaging2026]: doi:10.1016/j.eclinm.2026.103874 · METFORAGING · Marcelo-Calvo C et al. · EClinicalMedicine 2026 (May) · n=40 randomized (n=35 per-protocol); rct, 96-week 850 mg metformin BID vs placebo · model: non-diabetic PLWH ≥50 yr · Horvath 2013 EAA: NS between-group; PhenoAge primary: −1.02 yr (95% CI −5.30, 3.26; P=0.627); all 11 clocks NS · trial closed at 40/60

[^rosler2026]: doi:10.1038/s41514-026-00360-2 · Rösler W et al. · NPJ Aging 2026 · DO-HEALTH 3-year follow-up; n=2,152 trial / n=777 biological-aging subsample · participants with incident invasive cancer showed 3.52–6.77 months greater baseline Horvath/Hannum/PhenoAge EAA · model: generally healthy adults ≥70 yr · NCT01745263

[^tan2026]: doi:10.1186/s13148-026-02102-3 · Tan X et al. · Clin Epigenetics 2026 · TCGA-BRCA n=781 tumor methylomes · observational · Horvath 2013 did not separate survival; PhenoAge and GrimAge2 stratified outcomes; only GrimAge1 retained independent prognostic value in multivariable Cox · model: human breast tumor tissue
