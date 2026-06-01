---
type: biomarker
aliases: [neurofilament light chain serum, plasma NfL, sNfL, NEFL biomarker, serum NfL]
modality: proteomic
unit: pg/mL
training-cohort: "Multiple cohorts: Khalil 2020 Nat Commun (n=335 cross-sectional / n=95 longitudinal, Austrian ASPS-Fam, normal aging); Disanto 2017 Ann Neurol (Lugano n=142 MS+254 HC cross-sectional; SMSC n=246 MS longitudinal; serum-CSF correlation r=0.77); Benkert 2022 Lancet Neurol (n=10,133 MS + healthy controls; established age-/BMI-adjusted z-score reference paradigm; not_oa); Mattsson 2019 JAMA Neurol (n=1,583 ADNI, plasma NfL longitudinal Alzheimer's)"
n-cpgs-or-features: 1
training-target: morbidity
calibration-tissues: ["[[blood]]", "[[csf]]"]
test-retest-icc: null
human-evidence-level: strong
mendelian-randomization: not-tested
intervention-responsive: yes
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Khalil 2020, Disanto 2017, and Mattsson 2019 verified against primary source PDFs. Benkert 2022 not_oa — z-score framework claims unverified against primary (#gap/no-fulltext-access). Baskaran 2026 not in archive — aHR values unverified against primary (abstract-only cross-check via Crossref). FDA 510(k) K-number not confirmed — accessdata.fda.gov unreachable during verification pass; clearance year ~2022 is consistent with press-record evidence but K-number remains #gap. Canonical-DB identity fields (PubChem, etc.) not applicable for this biomarker-type page."
---

# Serum/Plasma Neurofilament Light Chain (NfL)

A single-protein blood-based biomarker of **neuroaxonal damage**, measurable at pg/mL (and formerly only fg/mL) concentrations via ultrasensitive digital immunoassay (Quanterix Simoa platform). In aging, serum NfL (sNfL) rises steadily from midlife and accelerates after approximately age 60, reflecting accumulating subclinical neuronal injury. It is the most widely deployed serum biomarker for neurodegeneration across multiple disease categories — ALS, MS, frontotemporal dementia, Alzheimer's disease, traumatic brain injury, and stroke — and is the first serum neurodegeneration biomarker to receive FDA clearance for an aging-relevant indication.

Distinct from the parent protein page [[molecules/proteins/nefl|NEFL]] (implicit stub — to be seeded separately). This page covers sNfL as a clinical biomarker, not the underlying protein biology.

## Identity

- **Protein source:** Neurofilament light chain (NEFL; UniProt P07196; also known as NFL, NF-L)
- **Structural role:** Component of neurofilament triplet in myelinated axons; NEFL pairs with NEFM (medium) and NEFH (heavy) to form the axonal cytoskeleton
- **Compartment measured:** Serum or plasma (not CSF); enabled by single molecule array (Simoa) technology
- **Primary platform:** Quanterix Simoa HD-X — digital ELISA achieving ~0.1 pg/mL lower limit of detection; replaced traditional ELISA (inadequate sensitivity for serum) and CSF measurement for most applications
- **Alternative platforms:** Roche Elecsys NfL assay; Ella microfluidic immunoassay — Simoa remains dominant in research; Roche Elecsys is most widely used in routine clinical chemistry
- **FDA clearance status:** The Quanterix Simoa NfL Advantage Kit was the first blood-based NfL test to receive FDA 510(k) clearance; press-record evidence (BusinessWire September 2022) indicates clearance was granted in 2022 for aiding in the management of neurological conditions including MS. The test is offered by Quanterix as a CLIA-validated Laboratory Developed Test (LDT) in their laboratory. #gap/needs-canonical-id — exact K-number not confirmed during this verification pass (accessdata.fda.gov unreachable; openFDA API did not return a hit for "Quanterix"). Recommend re-checking at accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm with applicant=Quanterix search.

## Platform Technology: Quanterix Simoa

The step-change that enabled sNfL as a biomarker was the Simoa (Single Molecule Array) platform [^kuhle2016]. Traditional ELISA lacks the sensitivity to detect NEFL protein in serum — concentrations in healthy adults are in the 3–30 pg/mL range, below ELISA sensitivity thresholds. The Simoa platform uses:

1. Paramagnetic beads coated with capture antibody to bind target protein molecules individually
2. Digital readout — each bead is optically interrogated in an array of femtoliter wells; single enzyme-labeled molecules generate a countable fluorescent signal
3. Result: effective lower limit of detection ~0.1 pg/mL; 25–100× more sensitive than conventional ELISA

The 2016 Kuhle et al. platform-comparison study (n=30; three-platform head-to-head: ELISA, electrochemiluminescence, Simoa) established that only Simoa achieved reliable serum NfL quantification, while ELISA measurements were largely below the assay detection floor [^kuhle2016]. This made serum NfL measurement feasible and eliminated the need for lumbar puncture for most neurological biomarker applications.

## Aging Trajectory

The defining aging characteristic of sNfL is a non-linear, age-accelerating rise [^khalil2020]:

| Age range | sNfL pattern |
|---|---|
| ~40–60 yr | Relatively stable, low; modest linear rise with age |
| 60–70 yr | Marked acceleration — annualized increase reaches ~4.3% per year; variance increases significantly (Brown-Forsythe p<0.0001 vs 50–60 decade) |
| >70 yr | Continued steep rise (~4.2% per year median); high inter-individual variability reflecting subclinical pathological heterogeneity |

In the Khalil 2020 population-based cohort (n=335; Graz Longitudinal Study; age range 38.5–85.6 yr, mean age 64.9 yr; cognitively intact community-dwelling adults; 5.9-year mean follow-up in n=95 final longitudinal dataset, after exclusion of 8 incident-disease cases from 103 who agreed to follow-up), sNfL concentrations increased significantly with age in both cross-sectional and longitudinal analyses, and correlated with structural brain changes — specifically total brain volume loss — assessed by MRI [^khalil2020]. The cross-sectional correlation between sNfL and normalized brain volume was rs=−0.321 (p<0.0001); annualized brain atrophy correlated with baseline sNfL at rs=−0.380 (p<0.001) and with annualized change in sNfL at rs=−0.290 (p<0.01). The rise after age 60 correlated with brain atrophy, suggesting sNfL tracks progressive subclinical neuroaxonal loss rather than purely measurement artifact. The authors interpret the rising variability above age 60 as indicating that subclinical comorbid pathologies (early neurodegeneration, vascular lesions, occult injury) increasingly diversify individuals' sNfL trajectories after this age.

**Z-score paradigm (Benkert 2022):** Because raw pg/mL values change dramatically with age and are confounded by body-mass index, the Benkert 2022 Lancet Neurology study (n=10,133 MS patients and healthy controls) established a normative z-score framework adjusting sNfL for both age and BMI [^benkert2022]. The z-score approach enables comparison across individuals regardless of age and body habitus:

- z-score >1.5 above age-/BMI-matched controls → significantly elevated risk of future disease activity in MS
- Exponential age-adjustment required: sNfL rises exponentially with age, steeper increase after ~50 years in healthy controls
- MS treatment-reduced sNfL to z-score levels at or below healthy controls in highly effective therapy arms

This reference z-score framework is now the clinical standard for NfL interpretation; applying a single age-invariant pg/mL threshold is inappropriate given the steep age-dependent baseline rise. #gap/needs-canonical-id — specific per-decade pg/mL reference intervals from Benkert 2022 healthy-control subgroup require primary-source table extraction (closed-access paper).

## Neurodegeneration Applications

sNfL is broadly elevated across neuroaxonal injury states, making it a general-purpose neurodegeneration biomarker rather than disease-specific. The key validated applications:

### Multiple Sclerosis
The most clinically developed application. Disanto 2017 used two independent cohorts: a cross-sectional Lugano cohort (n=142 MS patients with paired serum and CSF samples) and a longitudinal Swiss MS Cohort Study (SMSC; n=246 MS patients) plus 254 healthy controls [^disanto2017]. The study established that sNfL correlates with CSF NfL (Pearson r=0.77, 95% CI 0.69–0.83, p<0.001 in the Lugano cohort; β=0.589, p<0.001 log-log scale), tracks relapse activity (recent relapse within 60 days: β=1.563, p<0.001), and predicts disability worsening — an early demonstration that serum measurement closely reflects lumbar-puncture CSF NfL for MS disease activity monitoring [^disanto2017]. Patients above the 97.5th HC-based percentile had approximately 4-fold higher incidence of relapses in both 1 and 2 years after sampling (IRR=1.94, 95% CI 1.21–3.10, p=0.006). The Benkert 2022 z-score framework operationalized this for individual patient monitoring: patients on high-efficacy therapies (ocrelizumab, natalizumab) showed sNfL z-scores falling to healthy-control levels, while patients on platform therapies remained persistently elevated [^benkert2022]. sNfL is now guideline-incorporated for MS treatment monitoring in multiple European centers.

### Alzheimer's Disease
Mattsson et al. 2019 (JAMA Neurology; n=1,583; ADNI [Alzheimer's Disease Neuroimaging Initiative] multicenter cohort; 401 cognitively unimpaired [CU], 855 MCI, 327 AD dementia; longitudinal plasma NfL up to 11 years) demonstrated that plasma NfL increases longitudinally across all diagnostic groups, with faster rates in more impaired groups (CU: 2.4 ng/L/yr; MCI: 2.7 ng/L/yr; AD: 4.9 ng/L/yr; group differences p<0.001) [^mattsson2019]. Longitudinal NfL rate correlated with baseline CSF Aβ42, t-tau, hippocampal volume loss, entorhinal cortical thinning, and FDG-PET hypometabolism. Using the ATN framework, increased baseline NfL levels and rates were seen in neurodegeneration-positive (N+) cases. Pre-symptomatic elevation positions plasma NfL as a preclinical progression marker in at-risk individuals. NfL does not discriminate AD from other dementias (low disease specificity) — it marks neurodegeneration generically.

### ALS
In ALS, sNfL at diagnosis is an independent prognostic factor for survival [^thouvenot2020]. The study (n=101 ALS patients; prospective cohort) found sNfL was elevated compared to controls (p<0.001), correlated positively with disease progression rate (ALSFRS-R slope), and predicted time to death independently of clinical variables. sNfL reflects ongoing motor neuron loss — it correlates with ALS-FRS-R functional decline and may help stratify trial populations. ALS produces the highest absolute sNfL values of the common neurodegenerative diseases (often >100–300 pg/mL at diagnosis vs 3–30 pg/mL in healthy age-matched adults). #gap/needs-replication — prognostic value from single centre; requires multi-site validation.

### Other conditions
Elevated sNfL has been documented in frontotemporal dementia, traumatic brain injury, stroke, Parkinson's disease, and even acute systemic illness. The biomarker is sensitive but not specific — any condition causing neuroaxonal injury can elevate sNfL.

## General Aging Mortality Association

Elevated sNfL in population-based settings predicts all-cause mortality and cardiovascular outcomes beyond neurological disease [^baskaran2026]:

| Study | Cohort | n | Hazard ratio | Outcome |
|---|---|---|---|---|
| Baskaran 2026 (SWISS-AF) | Atrial fibrillation patients; 8.0-yr median f/u; 665 major vascular events | 2,311 | aHR 1.35 per doubling of sNfL (95% CI 1.22–1.50) | Major vascular events (composite) |
| Baskaran 2026 (SWISS-AF) | Same cohort | 2,311 | aHR for all-cause mortality and CV death not confirmed against primary (abstract-only; see note below) #gap/no-fulltext-access | All-cause mortality / cardiovascular death |
| Wang 2024 (NHANES) | US general population sample | Large NHANES | Significantly elevated | All-cause + cardiovascular mortality (combined high sNfL + T2DM) |

The Baskaran 2026 result (aHR 1.35 per doubling for major vascular events, 95% CI 1.22–1.50) was confirmed from the Crossref abstract; component outcomes (all-cause mortality, CV death separately) were reported in the primary paper but could not be verified against those specific aHR values as the paper is not yet in archive. The association in non-neurological disease populations suggests sNfL captures systemic neuronal vulnerability that is an upstream or parallel driver of multi-system morbidity — not merely a consequence of clinically overt neurological disease. Whether this association is causal or confounded by shared risk factors (hypertension, vascular disease, inflammation) is not established. #gap/no-mechanism #gap/needs-replication — large prospective studies in cognitively healthy community-dwelling older adults with mortality follow-up are limited as of 2026.

`mendelian-randomization: not-tested` — No published MR study has used genetic instruments for sNfL to test causal effects on longevity or mortality outcomes. The protein NEFL is highly expressed in neurons and has limited germline genetic instruments for MR analysis. #gap/unsourced — MR status based on author knowledge; systematic search needed.

## Intervention Responsiveness

sNfL is one of the most clearly intervention-responsive biomarkers in neurology. Disease-modifying therapy (DMT) in MS provides the cleanest human evidence:

- **Ocrelizumab (anti-CD20):** In the Benkert 2022 cohort, highly-effective MS therapies including ocrelizumab reduced sNfL z-scores to levels indistinguishable from healthy controls within 12 months of treatment initiation [^benkert2022]
- **Natalizumab (anti-VLA4):** Similar sNfL normalization shown in treated MS patients vs platform-therapy comparators [^benkert2022]
- **Siponimod, ofatumumab:** Additional high-efficacy DMTs associated with sNfL reduction in Phase 3 trials (trial-level citations not extracted here; #gap/unsourced)

The mechanism is straightforward: DMTs reduce neuroaxonal injury (relapse suppression, slowing neurodegeneration) → less NEFL protein released into CSF and blood → sNfL falls.

**Aging-context intervention responsiveness:** Whether lifestyle or geroprotective interventions (exercise, caloric restriction, rapamycin) move sNfL in healthy older adults has not been tested in powered RCTs as of 2026-05-09. sNfL's steep age-associated rise and high biological variability in older adults make it challenging as a primary endpoint in short-duration trials without large samples. #gap/long-term-unknown

## Confounders

Several non-pathological factors affect absolute sNfL pg/mL levels and must be accounted for in clinical interpretation:

| Confounder | Direction | Magnitude | Source |
|---|---|---|---|
| Age | Increases sNfL | Major (exponential) | [^khalil2020] [^benkert2022] |
| BMI | Decreases sNfL (dilution effect) | Moderate | [^benkert2022] |
| eGFR / kidney function | Reduces clearance → increases sNfL | Moderate | #gap/needs-replication |
| Acute CNS injury (stroke, TBI) | Massive spike | Very large | Not cited here |
| Height (body volume) | Decreases sNfL | Minor | #gap/unsourced |
| Blood-collection tube type | Serum vs EDTA plasma differ slightly | Minor | #gap/needs-canonical-id |

The Benkert 2022 z-score framework corrects for age and BMI; adjustments for kidney function are recommended in patients with impaired eGFR but no validated formula is in broad use.

## Hallmark Connections

| Hallmark | Connection |
|---|---|
| [[hallmarks/loss-of-proteostasis]] | sNfL reflects failure of axonal cytoskeletal protein homeostasis — NEFL accumulates in damage-releasing events when neurofilament assembly and turnover fails |
| [[hallmarks/chronic-inflammation]] | Neuroinflammation (microglia, astrocyte activation, lymphocyte infiltration) drives neuroaxonal damage → releases NfL; sNfL correlates with CNS inflammatory lesion burden in MS and serves as a downstream readout of neuroinflammation |
| [[hallmarks/genomic-instability]] | Indirectly: DNA damage accumulation in post-mitotic neurons impairs maintenance and may contribute to chronic neuroaxonal attrition reflected in rising sNfL with age — not a direct mechanistic link |

## Comparison with CSF NfL and Other Biomarkers

| Modality | Advantages | Disadvantages |
|---|---|---|
| Serum/plasma NfL (Simoa) | Non-invasive; blood draw; longitudinal monitoring feasible | Lower absolute concentration; influenced by BMI/eGFR; less sensitive for very early or focal injury |
| CSF NfL | Higher absolute concentration; closer to site of injury; historical reference standard | Lumbar puncture required; limits longitudinal use |
| sGFAP (serum GFAP) | Complementary — reflects astrocyte damage vs neuroaxonal damage; sGFAP adds predictive value over sNfL alone for progressive MS disability | Different pathological substrate; lower correlation with relapse activity |
| DNAm clocks ([[biomarkers/grimage-2019]], [[biomarkers/dunedinpace-2022]]) | Blood-draw; integrative multi-system signal; validated for mortality prediction | Not neuron-specific; harder to interpret mechanistically |

The CSF-to-serum correlation for NfL is high (Pearson r=0.77, 95% CI 0.69–0.83, p<0.001; [^disanto2017]), making serum measurement broadly acceptable as a surrogate for CSF in most clinical and research settings.

## Limitations and Open Questions

1. **Disease-nonspecificity:** sNfL cannot distinguish the etiology of neuroaxonal damage — it rises in MS, ALS, AD, TBI, stroke, and even febrile illness. Positive predictive value in population screening is limited.

2. **Age-inflection mechanistic gap:** The acceleration after age 60 likely reflects subclinical comorbid pathologies (occult neurodegeneration, chronic vascular lesions) rather than "normal aging" per se — but the precise contributors to the age-associated rise in community-dwelling cognitively intact adults have not been fully dissected [^khalil2020]. #gap/no-mechanism

3. **No MR causal evidence:** Whether elevated sNfL causes worse outcomes or is a biomarker of upstream processes driving mortality is unresolved. #gap/not-tested-MR

4. **Platform variability:** sNfL measurements differ between Simoa and Roche Elecsys platforms (not interchangeable without conversion factors). Reference intervals from one platform should not be applied directly to another.

5. **Aging-intervention responsiveness uncharacterized:** No geroprotective intervention RCT has reported sNfL as an outcome in healthy aging populations. #gap/long-term-unknown

6. **NEFL protein page absent:** The parent protein biology (NEFL expression, neurofilament assembly, genetic risk loci for NEFL in neurodegeneration) should be seeded separately at [[molecules/proteins/nefl]] — implicit stub created here. #stub

## Cross-references

- [[molecules/proteins/nefl]] — parent protein (NEFL) page — **implicit stub; to be seeded separately**
- [[hallmarks/loss-of-proteostasis]] — primary hallmark connection
- [[hallmarks/chronic-inflammation]] — neuroinflammation link
- [[hallmarks/genomic-instability]] — indirect aging-biology connection
- [[biomarkers/grimage-2019]] — mortality-predictive blood biomarker comparator (DNAm modality)
- [[biomarkers/dunedinpace-2022]] — intervention-responsive DNAm clock; comparison modality
- [[biomarkers/lehallier-proteomic-clock-2019]] — proteomic aging clock; comparison modality
- [[frameworks/biological-age-measurement]] — cross-modality biomarker comparison MOC
- [[phenotypes/neurodegeneration]] — downstream phenotype (implicit stub if page not yet seeded)

## Footnotes

[^khalil2020]: doi:10.1038/s41467-020-14612-6 · Khalil M, Pirpamer L, Hofer E, Voortman MM, Barro C, Leppert D, Benkert P, Ropele S, Enzinger C, Fazekas F, Schmidt R, Kuhle J · *Nat Commun* 2020;11:812 · n=335 cross-sectional (age range 38.5–85.6 yr, mean 64.9 yr); n=95 final longitudinal dataset (103 agreed to follow-up; 8 excluded for incident disease; mean f/u 5.9 yr SD=0.97); Austrian Stroke Prevention Study (ASPS-Fam); community-dwelling neurologically inconspicuous adults · observational cohort · sNfL rises and variance increases significantly in individuals >60 yr (Brown-Forsythe p<0.0001); cross-sectional brain volume correlation rs=−0.321 (p<0.0001); annualized brain atrophy correlation with baseline sNfL rs=−0.380 (p<0.001) and with annualized sNfL change rs=−0.290 (p<0.01) · model: human adults, normal aging · local PDF available (gold OA) · citation count: 534 (100th percentile)

[^disanto2017]: doi:10.1002/ana.24954 · Disanto G, Barro C, Benkert P, Naegelin Y, Schädelin S, Giardiello A, Zecca C, Blennow K, Zetterberg H, Leppert D, Kappos L, Gobbi C, Kuhle J · *Ann Neurol* 2017;81:857–870 · Lugano cohort: n=142 MS (paired serum+CSF, cross-sectional) + 254 healthy controls (HC); SMSC cohort: n=246 MS (longitudinal, 719 total serum samples) · observational (two independent cohorts) · serum-CSF NfL correlation Pearson r=0.77 (95% CI 0.69–0.83), p<0.001; sNfL tracks relapse (β=1.563, p<0.001), disease activity, and disability worsening; sNfL above 97.5th HC percentile associated with ~4-fold higher relapse incidence (IRR=1.94, 95% CI 1.21–3.10) · model: human MS patients + controls · local PDF available (PMC) · citation count: 1,085 (100th percentile)

[^benkert2022]: doi:10.1016/S1474-4422(22)00009-6 · Benkert P, Meier S, Schaedelin S, Manouchehrinia A, Yaldizli Ö, Maceski A, et al. (52 authors) · *Lancet Neurol* 2022;21(3):246–257 · n=10,133 MS patients and healthy controls; multi-center international retrospective cohort · observational · developed age-/BMI-adjusted z-score reference framework; z-score >1.5 predicts future disease activity; highly effective DMTs (ocrelizumab, natalizumab) reduce sNfL z-score to healthy-control levels within 12 mo; sNfL rises exponentially with age, steeper increase after ~50 yr · model: human MS + healthy controls · closed-access; not OA · citation count: 528 (100th percentile)

[^mattsson2019]: doi:10.1001/jamaneurol.2019.0765 · Mattsson N, Cullen NC, Andreasson U, Zetterberg H, Blennow K · *JAMA Neurol* 2019;76(7):791–799 · n=1,583; ADNI (Alzheimer's Disease Neuroimaging Initiative) multicenter cohort; 401 CU + 855 MCI + 327 AD; up to 4,326 plasma NfL measurements over up to 11 yr · observational longitudinal · plasma NfL increases in all diagnostic groups (CU: 2.4 ng/L/yr; MCI: 2.7 ng/L/yr; AD: 4.9 ng/L/yr; group differences p<0.001); rate of change correlated with CSF Aβ42, hippocampal atrophy, FDG-PET hypometabolism, and cognitive decline; elevated in preclinical/prodromal AD before clinical diagnosis · model: human adults across AD spectrum + cognitively normal controls · local PDF available (PMC) · citation count: 713 (100th percentile)

[^kuhle2016]: doi:10.1515/cclm-2015-1195 · Kuhle J, Barro C, Andreasson U, Derfuss T, Lindberg R, Sandelius Å, Liman V, Norgren N, Blennow K, Zetterberg H · *Clin Chem Lab Med* 2016;54(10):1655–1661 · n=30; three-platform head-to-head comparison · analytical validation · Simoa achieves ~25–100× lower detection limit than ELISA for serum NfL; ELISA measurements largely below detection floor in serum; established Simoa as reference method for blood NfL quantification · closed-access · citation count: 709 (100th percentile)

[^thouvenot2020]: doi:10.1111/ene.14063 · Thouvenot E, Demattei C, Lehmann S, Maceski-Maleska A, Hirtz C, Juntas-Morales R, Pageot N, Esselin F, Alphandéry S, Vincent T, Camu W · *Eur J Neurol* 2020;27(3):473–479 · n=101 ALS (prospective cohort; single-centre) + controls · observational · sNfL at diagnosis predicts survival (independent prognostic factor; p<0.001); positively correlated with disease progression rate (ALSFRS-R slope) · model: human ALS patients · closed-access · citation count: 89

[^baskaran2026]: doi:10.1001/jamacardio.2026.0922 · Baskaran G, Krisai P, Kühne M, Aeschbacher S, Kuhle J, et al. · *JAMA Cardiology* 2026 · n=2,311 atrial fibrillation patients; SWISS-AF prospective multicenter cohort; median 8.0-yr follow-up (April 2014–August 2017 enrollment; follow-up to April 2025) · observational longitudinal · every doubling of sNfL concentration associated with aHR 1.35 for major vascular events (95% CI 1.22–1.50); also associated with nonfatal stroke, CV death, and heart failure hospitalization but not MI; 665 first major vascular events recorded · **not yet in archive** (DOI not found; Crossref abstract-only verification); component aHRs for all-cause mortality and CV death separately not confirmed against primary PDF — treat as unverified
