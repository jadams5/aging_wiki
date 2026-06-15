---
type: biomarker
aliases: [FGF2 DNAm sarcopenia biomarker, DNAm muscle-function panel, blood epigenetic sarcopenia marker, FGF2_30 methylation, muscle-function DMR panel]
modality: dna-methylation
unit: composite-score   # page covers a candidate multi-locus panel; the headline locus FGF2_30 outputs a continuous methylation level (0–1) used against a 0.15 threshold; no single validated composite score model exists yet
training-cohort: "Li 2024: 4-cohort Chinese study — discovery n=50 sarcopenic + 50 controls; validation set 1 n=470 sarcopenic + 295 controls; validation set 2 n=123 sarcopenic + 141 controls; pyrosequencing confirmation n=43 sarcopenic + 48 controls (91 total). All cohorts age ≥65; whole blood."
n-cpgs-or-features: 7   # seven DMRs detected in discovery; FGF2_30 is the sole locus with consistent validated linear associations and diagnostic performance reported; 5 secondary loci showed significant sarcopenic-vs-control difference in set 1 (CXCL12_22, CTSB_15, CTSB_17, FGF19_28 — all p<0.001; FGF2_30 also validated); SESN1_48 and FGF21_59 failed the primary sarcopenic-vs-control comparison in set 1 (both p>0.05); only FGF2_30 proceeded to validation set 2
model-architecture: null   # these are individual candidate differentially methylated regions (DMRs), not a trained composite machine-learning model; no elastic-net or LASSO clock has been built from these loci; null is accurate; see Training Architecture section
training-target: morbidity   # closest enum match: predicts sarcopenia case status and correlates with functional decline severity; "morbidity" is more accurate than "chronological-age" or "mortality"; see Schema Note
calibration-tissues: ["[[blood]]"]   # whole peripheral blood; NOT validated in skeletal muscle tissue itself
test-retest-icc: null
human-evidence-level: limited   # 4-cohort study, all in older Chinese adults; independent replication outside East Asia and outside older adults not performed; no MR evidence
mendelian-randomization: not-tested
intervention-responsive: partial   # exercise training shifts skeletal-muscle methylome toward younger profiles (Voisin 2024 meta-analysis); blood-specific FGF2_30 reversibility with exercise or nutritional intervention is untested; marked partial pending direct evidence
literature-checked-through: 2026-06-15
verified: true
verified-date: 2026-06-15
verified-by: claude
verified-scope: "All quantitative claims (cohort sizes, Spearman rho correlations, AUC, sensitivity/specificity, OR) verified against PMC11154778 full text. Corrections: (1) Pearson r → Spearman rho throughout; (2) FGF21_59 failed validation set 1 primary comparison (p=0.367), not validated in set 1 overall; (3) 5 secondary loci (not 4) validated in set 1 for sarcopenic-vs-control comparison; (4) per-locus table corrected for FGF21_59 validation status. Supersession check performed 2026-06-15: no independent non-East-Asian replication found."
---

# Blood DNA Methylation Markers of Skeletal Muscle Function

A set of blood differentially methylated regions (DMRs) in muscle-function-related secretory-factor genes whose methylation level correlates with grip strength, gait speed, and appendicular skeletal muscle index (ASMI) in older adults. The headline locus is **FGF2_30** (promoter region of the fibroblast growth factor 2 gene), identified across four cohorts as a candidate non-invasive blood biomarker for [[sarcopenia]] detection — with hypomethylation at this site predicting sarcopenia case status at ~84.6% sensitivity and 70.1% specificity [^li2024].

**Critical framing upfront.** These are *blood* CpGs correlated with *muscle* outcomes. Two interpretive cautions apply throughout this page:

1. **Tissue mismatch:** methylation is tissue-specific; what is measured is peripheral blood methylation, not skeletal-muscle tissue methylation. The mechanistic connection between blood FGF2_30 methylation levels and the muscle biology described in the body is inferred, not directly demonstrated.
2. **Association vs causation:** CpG sites were selected by association (epigenome-wide association study followed by targeted validation), not by a demonstrated causal pathway. Unless noted otherwise, correlations do not establish that these methylation marks drive muscle decline, nor that changing methylation will improve function.

---

## Identity and Primary Source

- **Primary citation:** Li JW, Shen ZK, Lin YS, Wang ZY, Li ML, Sun HX, Wang Q, Zhao C, Xu JS, Lu X, Gao W. "DNA methylation of skeletal muscle function-related secretary factors identifies FGF2 as a potential biomarker for sarcopenia." *Journal of Cachexia, Sarcopenia and Muscle* 2024;15(3):1209–1217.
- **DOI:** 10.1002/jcsm.13472 — confirmed via Crossref and PubMed.
- **PMID:** 38641928 — confirmed.
- **PMC:** PMC11154778 — open access; full text available at pmc.ncbi.nlm.nih.gov.
- **Study design:** Four-cohort observational epigenome-wide study (EWAS) in peripheral whole blood; candidate-DMR validation across three cohorts; pyrosequencing confirmation in a fourth.
- **Population:** Chinese adults aged ≥65; all four cohorts are East Asian; no cross-ancestry validation published.

---

## Study Design and Cohort Sizes

The paper used a four-stage architecture [^li2024]:

| Stage | n (sarcopenic) | n (control) | Method |
|---|---|---|---|
| Discovery | 50 | 50 | Genome-wide EPIC/450K array methylation profiling |
| Validation set 1 | 470 | 295 | Array-based validation of 7 discovery DMRs |
| Validation set 2 | 123 | 141 | Array-based secondary validation |
| Pyrosequencing confirmation | 43 | 48 (91 total) | Targeted bisulfite pyrosequencing at FGF2_30 |

Sarcopenia was defined using [[sarcopenia|AWGS 2019 criteria]] (Asian Working Group for Sarcopenia) — important, as cutpoints differ from European EWGSOP2 cutpoints. All cohorts used the same diagnostic criteria.

---

## Per-Locus Summary

Seven DMRs were detected in the discovery phase. Not all replicated in both validation sets.

| Locus | Gene | Protein function in muscle | Direction with worse function | Validated | Notes |
|---|---|---|---|---|---|
| FGF2_30 | **FGF2** (basic fibroblast growth factor) | Satellite-cell activation, muscle repair, fiber hypertrophy | **Hypomethylated** | Yes (both sets + pyrosequencing) | Primary finding; linear associations with ASMI, grip, gait; diagnostic performance reported |
| CXCL12_22 | **CXCL12** (stromal cell-derived factor 1 / SDF-1) | Chemokine; promotes myoblast migration and muscle regeneration | **Hypomethylated** | Set 1 only | Significant sarcopenic-vs-control difference in set 1 (p<0.001); non-linear severity gradient; less useful as linear biomarker |
| FGF21_59 | **FGF21** (fibroblast growth factor 21) | Metabolic regulator; attenuates muscle atrophy under stress conditions | **Hypomethylated** | **Failed** (set 1 overall p=0.367; did not proceed to set 2) | Significant only in moderate-vs-severe sarcopenia severity subgroup within set 1 (U-shaped severity pattern); failed primary sarcopenic-vs-control comparison |
| CTSB_15 | **CTSB** (cathepsin B) | Lysosomal cysteine protease; exercise-induced secretion; promotes neurogenesis | **Hypomethylated** | Set 1 | Secondary validated locus |
| CTSB_17 | **CTSB** | Same gene, different region | **Hypermethylated** | Set 1 | Bidirectional methylation pattern at different CTSB regions |
| FGF19_28 | **FGF19** (fibroblast growth factor 19) | Enterokine; bile acid regulation; metabolic effects on muscle | **Hypermethylated** | Set 1 | Weaker association; secondary locus |
| SESN1_48 | **SESN1** (sestrin 1) | Antioxidant; stress sensor; AMPK activator; anti-atrophy | **Hypomethylated** | Failed set 1 | Did not replicate; excluded from primary conclusions |

### FGF2_30 effect sizes (confirmed from PMC full text)

**Array-based validation (combined sets):**

| Functional measure | Spearman rho | P-value |
|---|---|---|
| ASMI (appendicular skeletal muscle index) | 0.372 | <0.001 |
| Grip strength | 0.334 | <0.001 |
| Gait speed | 0.411 | <0.001 |

**Pyrosequencing confirmation (n=91; higher precision):**

| Functional measure | Spearman rho | P-value |
|---|---|---|
| ASMI | 0.430 | <0.001 |
| Grip strength | 0.397 | <0.001 |
| Gait speed | 0.427 | <0.001 |

Effect sizes are modest (rho ≈ 0.33–0.43), consistent with partial capture of a multi-determinant phenotype. The Spearman correlations are unadjusted; multivariate logistic regression adjusting for age, sex, and BMI was conducted separately to derive the odds ratio [^li2024].

**Diagnostic performance of FGF2_30 for sarcopenia (methylation threshold 0.15):**

- Sensitivity: 84.6% (training), 81.8% (external validation)
- Specificity: 70.1% (training), 67.6% (external validation)
- AUC: 0.807 (95% CI: 0.756–0.858, p<0.001)
- Adjusted odds ratio for sarcopenia: 9.223 (95% CI: 6.614–12.861, p<0.001)

These figures place FGF2_30 methylation in the range of a useful screening biomarker — sensitivity and specificity are directionally similar to established physical performance tests — but below the bar for a standalone diagnostic given the 70% specificity [^li2024]. #gap/needs-replication — independent validation outside East Asian cohorts not yet performed.

---

## FGF2 Biology and Satellite Cell Depletion

Fibroblast growth factor 2 (FGF2), also known as basic FGF (bFGF), is a pleiotropic growth factor acting on [[satellite-cells]] — the resident muscle stem cells responsible for repair and regenerative capacity. The FGF2–FGF receptor (FGFR) axis regulates satellite cell quiescence exit and proliferative activation.

In aging, chronically elevated local FGF2 levels have been shown to deplete the satellite cell pool by driving asymmetric divisions toward differentiation rather than self-renewal [^li2024]. This is mechanistically linked to the [[stem-cell-exhaustion]] hallmark: a satellite cell pool diminished by chronic FGF2 exposure has reduced regenerative reserve.

**Contradictory evidence exists and the paper acknowledges it:** FGF2 knockout studies in aged mice *exacerbated* age-related muscle changes — suggesting that some baseline FGF2 signaling is required and that the relationship between FGF2 expression and muscle outcomes is non-linear. Li et al. attribute this to "declined FGF2 sensitivity of aged satellite cells during their proliferation and self-renewal" — meaning that aging cells may lose responsiveness to the FGF2 signal, so the satellite-cell-depletion mechanism may be operative primarily at early-to-middle stages of the aging trajectory, not uniformly across the lifespan. #gap/contradictory-evidence — the FGF2 knockout aging phenotype complicates the directional interpretation of hypomethylation → elevated expression → depletion causal chain.

**From methylation mark to functional effect — the hypothesized chain:**

1. FGF2_30 hypomethylation in blood (detected by this assay) — whether this reflects a systemic or muscle-local epigenetic shift is unknown
2. *(Hypothesized)* Elevated FGF2 secretion into systemic milieu (blood CpG as proxy for circulating FGF2 levels — not proven)
3. *(Hypothesized)* Satellite cell pool depletion via chronic FGFR activation driving symmetric differentiating divisions
4. Reduced regenerative capacity → muscle mass loss → sarcopenia

Steps 2–3 in this chain lack direct mechanistic evidence from the Li 2024 paper. The paper establishes the methylation-function correlation; causation is inferred from the existing FGF2 muscle biology literature.

---

## Relationship to Aging Clocks and Established MSK Biomarkers

### SYMPHONY Age Musculoskeletal Sub-clock

The [[biomarkers/symphony-age|SYMPHONY Age]] multi-system DNAm clock (Sehgal 2025 / Systems Age) includes a **Musculoskeletal sub-clock** trained against grip strength and physical performance measures, achieving the strongest domain-specific association of all 11 organ clocks (meta z-score 8.53 for physical function decline) [^sehgal2025]. The relationship between SYMPHONY Age's MSK-system CpG set and the FGF2_30 locus is **not characterized** in either publication — they were developed independently and with different architectural approaches (supervised elastic net vs candidate-DMR EWAS). Whether FGF2_30 is among the CpGs selected by the SYMPHONY MSK elastic net is unknown and likely determinable only via a direct cross-reference of the Systems Age CpG selection files. #gap/needs-replication — intersection analysis not performed; SYMPHONY Age CpG list not publicly available as of 2026-06-15.

### MskAge (anticipated)

A dedicated musculoskeletal epigenetic clock ([[biomarkers/mskage-2025]]) is being seeded concurrently. MskAge, if following the precedent of tissue-specific DNAm clocks (BrainAge, SkinAge), would train directly against skeletal-muscle tissue methylation and functional outcomes rather than blood CpGs — a distinct methodological approach from the Li 2024 candidate-DMR blood panel. Cross-comparison of FGF2_30 and MskAge CpG sets would clarify whether blood-detected FGF2_30 captures muscle-specific methylation changes or reflects a systemic epigenetic shift correlated with muscle outcomes. #gap/needs-replication — MskAge page is a concurrent stub; cross-comparison awaits both pages' verification.

### Grip Strength as Biological Age Biomarker

Peterson et al. 2023 [^peterson2023] demonstrated an inverse association between grip strength and DNA methylation age acceleration across multiple established clocks (GrimAge, PhenoAge, Horvath, Hannum) in the Health and Retirement Study — providing complementary evidence that grip strength and the broader DNAm aging landscape are correlated. The FGF2_30 paper represents one candidate *locus-level* mechanism within this broader relationship. See also [[biomarkers/grip-strength-biomarker]] for the grip strength biomarker page.

---

## Reversibility — Interventions and What Is Known

**Direct reversibility evidence for FGF2_30 blood methylation: none.** No published study has tested whether exercise, nutritional intervention, or weight loss shifts FGF2_30 methylation in blood. This is the largest practical evidence gap on this page.

### Relevant indirect evidence

**1. Exercise shifts the skeletal-muscle methylome toward a younger profile (but this is muscle tissue, not blood).**

Voisin et al. 2024 performed a meta-analysis of 1,251 muscle tissue methylation samples across 16 cohorts (including exercise training interventions) and found that aerobic fitness (higher VO2max) is associated with attenuated age-related methylation changes in skeletal muscle, with patterns shifted toward a younger transcriptomic and epigenomic state [^voisin2024]. Critically, this evidence is for **muscle-tissue methylation** — the reverse question (whether muscle methylome shifts are reflected in blood CpGs) requires cross-tissue concordance data that is not reported for FGF2_30.

**2. Physical activity reduces pan-epigenetic age acceleration in blood (relevant but non-specific).**

Ammous et al. 2025 found that higher physical activity was associated with decreased epigenetic aging as measured by established blood DNAm clocks [^ammous2025]. This supports the general principle that active lifestyle slows blood epigenetic aging, but the study used established composite clocks, not locus-specific DMRs.

**3. Late-life exercise partially reverses skeletal muscle epigenetic aging in mice.**

Murach et al. 2022 demonstrated in mice that late-life voluntary wheel running partially mitigated skeletal muscle epigenetic age acceleration and modulated methylation at loci near muscle-function genes [^murach2022]. Cross-species relevance and blood vs muscle tissue distinction apply.

### Evidence grade for interventional reversibility

| Intervention | Direct FGF2_30 blood evidence | Indirect muscle-methylome evidence | Confidence |
|---|---|---|---|
| Resistance/aerobic exercise | None #gap/needs-human-replication | Yes (Voisin 2024 muscle tissue; Murach 2022 mouse) | Low — indirect chain |
| Protein/amino acid supplementation | None | Not tested at methylome level | None |
| Weight/fat-loss | None | Not tested | None |
| Caloric restriction | None | Not tested in humans | None |

**Bottom line on reversibility:** The evidence base for exercising one's way to improved FGF2_30 blood methylation does not exist yet. The biologically plausible path is: exercise → improved satellite-cell function and muscle tissue FGF2 regulation → possible blood methylome shift — but each arrow in this chain lacks direct human data for this specific locus. #gap/needs-human-replication

---

## Training Target and Schema Note

The `training-target:` field for this biomarker is set to `morbidity` — the closest available enum value. The Li 2024 paper trained these DMRs to discriminate sarcopenia case status (a disease/morbidity outcome) and to correlate with functional severity measures. It did NOT train to chronological age (no aging-rate prediction), mortality, pace of aging, or a behavioral exposure — hence `morbidity` is correct. The paper does not produce a "biological age in years" output; the FGF2_30 locus produces a continuous methylation fraction (0–1) with a diagnostic threshold at 0.15.

The `model-architecture:` field is set to `null` because no composite machine-learning model (elastic net, LASSO, SVM, etc.) was trained. The paper identifies individual candidate loci by EWAS and validates them; the closest structural analogy is a candidate-biomarker panel, not a clock. This is a schema gap — `type: biomarker` typically describes trained clocks; Li 2024 describes a candidate DMR panel one step upstream of a clock. A future study training an elastic net model on these loci (analogous to Liu 2018 for the alcohol biomarker) would shift this to a traditional clock architecture. The lint pass should not flag `model-architecture: null` for this page because the null is structurally accurate.

---

## Recency Literature Search (R25)

Search performed 2026-06-15 via PubMed eutils.

**Query 1 (broad):** "DNA methylation sarcopenia muscle function biomarker," date range 2021-01-01 to 2026-06-15. Count: 8. PMIDs triaged below.

**Query 2 (high-priority filter):** "(meta-analysis[pt] OR randomized controlled trial[pt] OR systematic review[pt]) AND DNA methylation sarcopenia muscle function." Count: 0 — no meta-analyses or RCTs found. The FGF2_30 locus literature is exclusively observational EWAS and mechanistic at this stage.

**Query 3 (exercise × epigenetics):** "exercise DNA methylation muscle aging epigenetic," date range 2019-01-01 to 2026-06-15, sorted by relevance. Count: 43. Top hits retrieved and triaged for reversibility evidence.

**Key papers from recency search:**

- **Wu et al. 2026** (PMID 41787896) — *Epigenomics* review on epigenetics and sarcopenia; confirms FGF2 hypomethylation is cited as part of atrophy-related gene changes in sarcopenia; does not reference Li 2024 specifically [^wu2026]. Discretionary inclusion.
- **Rossini Venturini et al. 2026** (PMID 41578880) — accelerated epigenetic aging and DNAm telomere length in sarcopenic obesity; uses composite clocks, not locus-specific DMRs; adjacent evidence [^rossiniventurini2026]. Discretionary.
- **Peterson et al. 2023** (PMID 36353822) — grip strength inverse association with DNAm age acceleration (Health and Retirement Study); must-include for contextualizing the physical-function × blood-epigenetics connection [^peterson2023].
- **Voisin et al. 2024** (PMID 37128843) — exercise × muscle methylome meta-analysis (n=1,251 samples, 16 cohorts); must-include for reversibility section [^voisin2024].
- **Ammous et al. 2025** (PMID 40511567) — physical activity and decreased epigenetic aging; must-include for reversibility context [^ammous2025].
- **Murach et al. 2022** (PMID 34932867) — late-life exercise mitigates skeletal muscle epigenetic aging (mouse model); discretionary — indirect/murine but mechanism-supporting [^murach2022].

**No paper contradicts Li 2024's primary finding.** No independent replication of FGF2_30 in a non-East-Asian cohort has been published as of the search date. The most important absent study is an independent large-cohort validation outside Chinese populations.

---

## Limitations and Gaps

1. **Single population.** All four cohorts are older East Asian adults (Chinese), and sarcopenia was defined using AWGS 2019 criteria. Performance in European-ancestry or other populations is unknown. Given that AWGS and EWGSOP2 use different cutpoints and muscle mass distributions differ across ancestries, the 0.15 methylation threshold may not be portable. #gap/needs-human-replication

2. **Blood is not muscle.** Methylation is tissue-specific. The clinically measured signal is in peripheral blood; whether blood FGF2_30 methylation tracks muscle-tissue FGF2_30 methylation is not demonstrated. The mechanistic interpretations invoking satellite-cell biology apply to *muscle-tissue* FGF2 regulation; blood is a proxy of uncertain fidelity. #gap/no-mechanism — direct blood-to-muscle methylation concordance for FGF2_30 not established.

3. **Cross-sectional design.** No longitudinal follow-up from baseline methylation to incident sarcopenia. AUC and sensitivity/specificity characterize discriminatory ability at a single time-point, not predictive power for conversion. #gap/long-term-unknown

4. **No composite model trained.** The seven DMRs are individual candidate loci; no multi-locus composite model has been fit. An elastic-net model trained on these loci would be needed to assess whether combining them outperforms FGF2_30 alone. This is the obvious next development step. #gap/needs-replication

5. **No mechanistic validation.** Whether hypomethylation at FGF2_30 in blood causally reflects elevated systemic FGF2 protein levels — or is a downstream consequence of muscle loss rather than a precursor — is not tested. Mendelian randomization using genetic instruments for FGF2_30 methylation (methylation quantitative trait loci / mQTLs) has not been performed. #gap/no-mechanism; #gap/needs-replication (MR study)

6. **No interventional reversibility data.** As detailed in the Reversibility section, no study has tested whether the FGF2_30 methylation mark changes with exercise, protein supplementation, or other sarcopenia-relevant interventions. #gap/needs-human-replication

7. **SESN1 failed validation.** The biologically appealing sestrin 1 locus (AMPK activator, antioxidant, anti-atrophy) did not replicate in validation set 1. It should not be cited as a validated sarcopenia biomarker. #gap/needs-replication

8. **Contradictory FGF2 biology.** FGF2 knockout mice show worsened, not improved, aging muscle phenotypes — indicating the relationship between FGF2 signaling level and muscle health is non-monotonic and context-dependent. This complicates interpretation of hypomethylation as uniformly deleterious. #gap/contradictory-evidence

---

## Cross-References

- [[sarcopenia]] — downstream phenotype; diagnostic criteria (AWGS 2019 used here, EWGSOP2 most common in European research)
- [[tissues/skeletal-muscle]] — the tissue whose function these blood markers proxy
- [[cell-types/satellite-cells]] — the cell population most directly tied to FGF2 biology and [[stem-cell-exhaustion]]
- [[hallmarks/stem-cell-exhaustion]] — the hallmark FGF2-driven satellite cell depletion contributes to
- [[hallmarks/epigenetic-alterations]] — the hallmark class these DMRs fall under; blood methylation changes in aging are a canonical epigenetic alteration
- [[biomarkers/symphony-age]] — SYMPHONY Age Musculoskeletal sub-clock; distinct architecture but overlapping functional endpoints (grip strength, gait speed)
- [[biomarkers/mskage-2025]] — dedicated musculoskeletal DNAm clock; concurrent stub; relationship to FGF2_30 panel not yet characterized
- [[biomarkers/grip-strength-biomarker]] — grip strength as a standalone physical performance biomarker; complementary to these DNAm markers
- [[molecules/proteins/fgf2]] — implicit stub; FGF2 protein page for signaling mechanism detail
- [[molecules/proteins/cxcl12]] — implicit stub; CXCL12/SDF-1 chemokine biology in muscle regeneration

---

## Footnotes

[^li2024]: doi:10.1002/jcsm.13472 · PMID 38641928 · PMC11154778 · Li JW, Shen ZK, Lin YS, Wang ZY, Li ML, Sun HX, Wang Q, Zhao C, Xu JS, Lu X, Gao W · *J Cachexia Sarcopenia Muscle* 2024;15(3):1209–1217 · observational EWAS; 4-cohort design (discovery n=100, validation set 1 n=765, validation set 2 n=264, pyrosequencing confirmation n=91) · model: human adults ≥65 yr, East Asian ancestry (Jiangsu Province, China), whole peripheral blood · FGF2_30 hypomethylation Spearman rho=0.372 (ASMI), rho=0.334 (grip), rho=0.411 (gait), all p<0.001 (array); pyrosequencing confirms rho=0.430 (ASMI), rho=0.397 (grip), rho=0.427 (gait); correlations unadjusted; AUC 0.807 (95% CI 0.756–0.858); adjusted OR 9.223 (95% CI 6.614–12.861) from multivariate logistic regression (age/sex/BMI adjusted); sensitivity 84.6% / specificity 70.1% at threshold 0.15; 7 DMRs total; 5 validated in set 1 for sarcopenic-vs-control overall (CTSB_15, CTSB_17, CXCL12_22, FGF19_28, FGF2_30 all p<0.001); SESN1_48 (p=0.414) and FGF21_59 (p=0.367) failed primary sarcopenic-vs-control comparison in set 1; only FGF2_30 proceeded to validation set 2

[^sehgal2025]: doi:10.1038/s43587-025-00958-3 · PMID 40954326 · Sehgal R, Markov Y, Qin C et al. · *Nature Aging* 2025;5(9):1880–1896 · observational; EWAS + elastic net; training n=3,593 (HRS) + mortality calibration n=3,935 (FHS); validation WHI n=5,129 · model: adult humans, blood (EPIC/450K) · Musculoskeletal sub-clock meta z-score 8.53 for physical function; 11 organ-system clocks from single blood DNAm draw · closed-access #gap/no-fulltext-access

[^peterson2023]: doi:10.1002/jcsm.13110 · PMID 36353822 · Peterson MD, Collins S, Meier HCS, Brahmsteadt A, Faul JD · *J Cachexia Sarcopenia Muscle* 2023;14(1):108–115 · observational; cross-sectional + longitudinal regression; Health and Retirement Study (HRS), middle-age and older adults · model: human adults (US population), blood DNAm · grip strength inversely and independently associated with DNAm age acceleration across multiple established clocks (GrimAge, PhenoAge, Horvath, Hannum); stronger individuals show less biological aging per epigenetic clocks

[^voisin2024]: doi:10.1111/acel.13859 · PMID 37128843 · Voisin S, Seale K, Jacques M et al. · *Aging Cell* 2024;23(1):e13859 · meta-analysis of methylation and gene-expression cohorts; 1,251 skeletal muscle samples across 16 cohorts (methylation); 1,925 samples across 21 cohorts (expression); n=3,176 total individuals · model: human adults, skeletal muscle tissue · exercise/higher aerobic fitness (VO2max) associated with attenuated age-related methylation changes and shifted transcriptome toward younger profile; gene categories: muscle structure, metabolism, mitochondrial function; FGF2 or CXCL12 not specifically highlighted

[^ammous2025]: doi:10.1002/jcsm.13873 · PMID 40511567 · Ammous F et al. · *J Cachexia Sarcopenia Muscle* 2025 · observational; physical activity and blood DNAm clock scores · model: adult humans, blood · higher physical activity independently associated with decreased epigenetic aging (composite blood-based DNAm clocks); locus-specific analysis of FGF2_30 not performed

[^murach2022]: doi:10.1111/acel.13527 · PMID 34932867 · Murach KA et al. · *Aging Cell* 2022;21(1):e13527 · in-vivo; aged mice, voluntary wheel running (late-life exercise) · model: aged C57BL/6 mice, skeletal muscle tissue · late-life exercise partially mitigated skeletal muscle epigenetic age acceleration; methylation at loci near muscle-function genes modulated; human translation of specific loci not established #gap/needs-human-replication

[^wu2026]: doi:10.1080/17501911.2026.2637968 · PMID 41787896 · Wu M, Zhao Y, Gu S, Lu H, Cha Y, Yang Y, Yang Q, Yang L, Xiao Z · *Epigenomics* 2026;18(3):353–369 · review · model: human/animal sarcopenia literature · epigenetic mechanisms in sarcopenia: DNAm, chromatin remodeling, ncRNAs; FGF2 listed among hypomethylated atrophy-related genes; does not reference Li 2024 specifically; low-tier causal inference from a review, cited for framing only

[^rossiniventurini2026]: doi:10.1080/17501911.2026.2617179 · PMID 41578880 · Rossini Venturini A et al. · *Epigenomics* 2026 · observational · model: adult humans, blood · accelerated epigenetic aging and shorter DNAm-based telomere length in sarcopenic obesity; uses composite clocks (GrimAge, PhenoAge), not locus-specific DMRs; adjacent evidence for epigenetic acceleration in sarcopenic phenotype
