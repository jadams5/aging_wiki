---
type: biomarker
aliases: [Lehallier 2019, plasma proteomic clock, proteomic aging clock, SomaScan aging, non-monotonic proteome aging]
modality: proteomic
unit: years
training-cohort: "Lehallier 2019: INTERVAL (n=3,301, age 18–76y) + LonGenity (n=962 used, age 61–95y) = 4,263 total; 4 independent cohorts (n=171) used for robustness only"
n-cpgs-or-features: 373
training-target: chronological-age
calibration-tissues: ["plasma"]
test-retest-icc: null
human-evidence-level: strong
mendelian-randomization: not-tested
intervention-responsive: partial
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "All quantitative claims verified against primary source PDF (PMC7062043); MAE ~2.9 yr not confirmed in text of PMC manuscript (value appears in main Fig. 1g which is absent from PMC author manuscript) — recommend re-checking against publisher version or supplementary table. R34 recency refresh 2026-05-08: Argentieri 2024 (Nat Med UKB ProtAge), Sayed 2025 (MyoGlu exercise reversal), Garst 2026 (ProtFI Cell Rep Methods), and Goeminne 2025 (organ-specific proteomic age) integrated from abstracts only — full PDFs not re-verified."
literature-checked-through: 2026-05-08
---


# Lehallier Proteomic Clock (2019)

A plasma proteomics-based biological aging clock built from SomaScan aptamer measurements of ~2,925 proteins in human plasma. The Lehallier 2019 Nature Medicine study trained a 373-protein LASSO model to predict chronological age (r=0.93–0.97 across cohorts; MAE ~2.9 years per Fig. 1g, not stated in manuscript text) and made two foundational discoveries: (1) plasma protein profiles change non-monotonically with age, with identifiable protein "waves" cresting at approximately 34, 60, and 78 years of age; and (2) a proteome-derived biological age captures aging-relevant variation distinct from DNA methylation clocks [^lehallier2019]. As a non-DNA biomarker, the proteomic clock is mechanistically complementary to DNAm clocks and potentially more accessible for clinical translation.

## Identity and Origin

- **Primary citation:** Lehallier B et al. (2019) *Nature Medicine* 25:1843–1850 — doi:10.1038/s41591-019-0673-2
- **Archive status:** downloaded; green OA via PMC (PMC7062043); local PDF verified 2026-05-05
- **Citation count:** ~888 (as of 2026-05-05; 100th citation percentile in archive)
- **Clock type:** First-generation proteomic (chronological-age trained)
- **First/senior authors:** Benoit Lehallier, Tony Wyss-Coray (Wyss-Coray lab, Stanford)
- **Measurement platform:** SomaScan v4 aptamer-based proteomics (Somalogic), ~2,925 SOMAmer reagents per sample
- **Cohorts:** LonGenity (Ashkenazi Jewish longevity cohort), INTERVAL (blood donor cohort, UK), and additional validation cohorts
- **Output:** Predicted chronological age in years (derived from 373-protein plasma signature)

## Key Finding: Non-Monotonic Protein Waves

The most conceptually important contribution of Lehallier 2019 is the identification of **three waves of protein abundance change** that do not follow a simple linear age trajectory. Rather than proteins monotonically increasing or decreasing throughout life, the study identified distinct temporal patterns [^lehallier2019]:

| Wave / crest age | Approximate age | Biological interpretation (per paper) |
|---|---|---|
| Wave 1 | ~34 years | Downregulation of extracellular matrix (ECM) and structural pathway proteins; enrichment in ECM-related GO/KEGG pathways |
| Wave 2 | ~60 years | Hormonal activity, binding functions, and blood pathways; CVD-associated proteins enriched; proteins most strongly linked to cognitive and physical function decline |
| Wave 3 | ~78 years | Blood pathways and bone morphogenetic protein (BMP) signaling; MMP12 and CHRDL1 prominent; proteins linked to Alzheimer's disease and Down syndrome proteomes |

This non-linear structure implies that protein-level aging is not a uniform progressive process — distinct biological transitions occur at mid-life, late middle age, and old age. Interventions effective at one transition may be ineffective at others. The finding also explains why cross-sectional studies of "aging biomarkers" conflate potentially distinct aging phases.

**Important caveat:** The three-wave result is based on cross-sectional (not longitudinal) plasma protein measurements. Whether the same individual passes through each wave sequentially, or whether the waves reflect cohort-specific effects or population heterogeneity, requires longitudinal data to confirm. #gap/needs-replication

## Training Details

| Parameter | Value |
|---|---|
| Primary cohorts | INTERVAL: n=3,301 (2 subcohorts, age 18–76y); LonGenity: n=962 used (1,030 enrolled minus 68 excluded for missing data, age 61–95y) |
| Total training + test samples | n=4,263 (INTERVAL + LonGenity only); 171 additional samples from 4 independent cohorts used for robustness assessment only |
| Training / test split | Two-thirds (n=2,817) training; one-third (n=1,446) validation |
| Protein platform | SomaScan: 5,284 aptamers (LonGenity), 4,034 aptamers (INTERVAL); 2,925 aptamers with identical SeqId in both cohorts used for analysis |
| Feature selection | LASSO regression (glmnet, alpha=1, 10-fold cross-validation) on 2,925 proteins → 373-protein predictor |
| Age range covered | 18–95 years (INTERVAL 18–76; LonGenity 61–95; independent cohorts 21–107) |
| Held-out test performance | r=0.93–0.97 vs chronological age across cohorts (discovery n=2,817: r=0.97; 4 independent cohorts n=171: r=0.93); MAE ~2.9 years #gap/needs-replication — value not stated in PMC manuscript text; appears in main Fig. 1g |

## Performance Characteristics

### Accuracy

The 373-protein predictor achieves r=0.93–0.97 vs chronological age across cohorts (r=0.97 in discovery dataset n=2,817; r=0.93 in 4 independent cohorts n=171). A 9-protein reduced model also predicted age with good accuracy (Extended Data Fig. 3c). MAE ~2.9 years is reported in main Fig. 1g but not stated in the manuscript text; the Horvath MAE comparison (cited elsewhere as ~3.6 yr) is not made in this paper and is sourced from elsewhere [^lehallier2019]. #gap/unsourced — Horvath MAE comparison requires separate citation.

### Mortality and morbidity prediction

Proteomic age acceleration is associated with higher all-cause mortality and worse healthspan outcomes in validation cohorts. The effect sizes for mortality prediction are not as well-characterized as for the DNAm mortality clocks (GrimAge, PhenoAge), but a directional signal exists. #gap/needs-replication — specific HR from proteomics predictor vs mortality needs larger-cohort confirmation.

### Sex differences

The study identified 895 out of 1,379 age-associated proteins (65%; q<0.05) that also differed significantly between sexes — "2/3 of proteins changing with age also change with sex" (Discussion). This emphasizes that sex-stratified proteomics are necessary for accurate aging characterization. Pooled-sex proteomics aging models conflate sex-specific trajectories. The paper developed a sex-independent clock to address this. Key sex-differentiated proteins include CGA FSHB (follicle-stimulating hormone subunits) and CGA CGB (human chorionic gonadotropin subunit) [^lehallier2019].

### Young adults: early drivers of aging biology

Among the most-cited translational findings: several proteins that change early in the proteomic aging trajectory (around the 34-year wave) are related to growth factors, extracellular matrix, and musculoskeletal biology. This suggests that aspects of molecular aging begin earlier than clinical aging phenotypes manifest — consistent with the emerging view that "late-life aging" has molecular precursors in mid-life.

## Comparing Proteomic vs DNAm Clocks

| Feature | Lehallier Proteomic | DNAm Clocks (Horvath, GrimAge) |
|---|---|---|
| Modality | Plasma proteins (SomaScan) | Blood DNA methylation (Illumina array) |
| Sample type | Plasma/serum | Whole blood or PBMC |
| Tissue-specific | Plasma-only | Blood-centric (Horvath is cross-tissue) |
| Feature count | 373 proteins | 71–513 CpGs |
| Mechanistic interpretability | Higher (proteins are functionally annotated) | Lower (CpGs may not mark causal genes) |
| Correlation with DNAm age | Moderate (r~0.5–0.7) | N/A |
| Intervention responsiveness | Partially studied | See individual clock pages |

The proteomic and DNAm clocks are not interchangeable — they capture overlapping but distinct biological signals. The low-moderate correlation between proteomic and DNAm age implies they measure different dimensions of biological aging. #gap/needs-replication

## Intervention-Responsive Evidence

### Partial positive signal: parabiosis and young blood factors (preclinical)

Wyss-Coray lab research (same group as Lehallier 2019) has demonstrated that young plasma infusion in aged mice reverses age-related protein profiles in blood and brain. These are preclinical findings and not direct tests of the Lehallier proteomic predictor specifically. See [[hallmarks/stem-cell-exhaustion]] and circulating factor literature for context. #gap/needs-human-replication — young blood / plasma proteins interventions are preclinical only.

### Partial positive signal: exercise (contested, requires verification)

Exercise training has been shown to alter some of the proteins included in proteomic aging scores (GDF-15, growth factors, inflammatory mediators). Whether exercise meaningfully shifts the 373-protein Lehallier predictor has not been tested in a dedicated RCT as of 2026-05-05. #gap/unsourced

### Null signal: most pharmacological interventions untested

No pharmacological intervention has been tested against the Lehallier proteomics predictor in a powered RCT. This is an important gap — proteomic clock endpoints are not yet established in any Phase 2 trial. Compare to DunedinPACE (CALERIE-2) and Horvath (multiple RCTs). #gap/long-term-unknown

### Field successor: Argentieri 2024 ProtAge (UK Biobank)

A larger, methodologically updated proteomic aging clock — **Argentieri 2024 ProtAge** — was developed in 45,441 UK Biobank participants using the Olink Explore 3072 platform (2,897 plasma proteins) [^argentieri2024]. The 204-protein ProtAge predictor achieves r=0.94 vs chronological age in UKB and was validated in Chinese (n=3,977; r=0.92) and Finnish (n=1,990; r=0.94) cohorts. **ProtAge predicts the incidence of 18 major chronic diseases plus all-cause mortality**, and is associated with telomere length, frailty index, and cognitive performance. ProtAge has now largely supplanted the Lehallier 2019 SomaScan-based clock as the canonical proteomic aging predictor in the field, owing to its larger training cohort, multi-ethnic validation, and Olink-platform availability (lower cost, faster turnaround than SomaScan v4). The Lehallier 2019 paper retains historical importance for the non-monotonic-wave finding and as the conceptual prototype.

### Positive signal: exercise (MyoGlu 12-week supervised exercise; Sayed 2025)

A 12-week supervised exercise intervention in 26 men (MyoGlu trial; NCT01803568) reduced the ProtAge gap (ProtAgeGap) by an equivalent of approximately **10 months** [^sayed2025]. Most of the 204 proteins remained stable; specific proteins including **CLEC14A** changed with exercise and tracked improved insulin sensitivity. Transcriptomic data from muscle and fat tissue corroborated PI3K-Akt and MAPK signaling involvement. This is the first interventional demonstration that a proteomic aging clock can be modestly reversed by exercise in humans, and it shifts the field's view of proteomic aging from largely-static to lifestyle-modifiable. Note: applies to Argentieri ProtAge specifically, not the Lehallier 2019 373-protein SomaScan predictor.

### Frailty-trained successor: ProtFI (Garst 2026)

A frailty-trained proteomic biomarker — **ProtFI** — was published in 2026 (Garst et al., Cell Rep Methods) using UK Biobank Olink proteomics + ¹H-NMR metabolomics in n=40,696 participants [^garst2026]. ProtFI is an Elastic-Net model that uses a minimal set of proteins to predict the Rockwood frailty index; it **outperforms established aging biomarkers** in predicting incident cardiovascular disease, handgrip strength, and self-rated health, in internal UKB validation and in two external Dutch cohorts (n=995, n=500). A companion ProtMort clock predicts mortality. This represents another generational shift in proteomic aging clocks: training on frailty (a multi-system functional readout) rather than chronological age yields a more clinically relevant signal. See [[biomarkers/frailty-index]].

### Organ-specific proteomic clocks (Goeminne 2025)

A 2025 *Cell Metabolism* analysis (Goeminne et al.) extended the proteomic-age framework to **organ-specific aging** by deriving plasma-protein-based age models for individual organ systems and showing that diseases manifest as accelerated aging of specific organismal systems [^goeminne2025]. This work emphasizes that "biological age" is not unitary — different organs age at different rates within an individual, and plasma proteomics can resolve this heterogeneity in a way that DNAm-based clocks (typically blood-only) cannot.

## SomaScan Platform Limitations

The Lehallier clock requires SomaScan v4 — a proprietary, high-cost aptamer-based proteomics platform. This creates barriers for:

1. **Clinical translation** — Current SomaScan v4 cost (~$500–1,500/sample) is prohibitive for routine clinical use
2. **Reproducibility** — Platform-specific aptamer reagents and binding characteristics can vary between lots and platform versions (SomaScan v4 vs v4.1 vs SomaScan 5k); cross-version compatibility of the trained model is not guaranteed
3. **Regulatory path** — No FDA-cleared version of this test exists; clinical implementation would require independent validation in a CLIA-certified context

Alternative platforms (Olink proximity extension assay, LC-MS/MS proteomics) do not directly replicate SomaScan measurements, limiting transferability. #gap/no-mechanism

## The Non-Monotonic Wave Finding: Open Questions

1. **Cross-sectional vs longitudinal** — The waves are identified from cross-sectional data. Longitudinal validation in individuals measured at multiple ages is needed to confirm that individuals transition through all three waves. #gap/needs-replication
2. **Cohort effects** — The specific protein levels may reflect birth-cohort exposures (e.g., early-life infection, nutrition, pollutants) rather than pure biological aging processes. #gap/contradictory-evidence
3. **Causal interpretation** — Which proteins in the wave signatures drive aging vs are driven by aging is unknown for most of the 373 features. Mendelian randomization or perturbational validation is needed.
4. **Intervention targets** — The wave structure implies there may be different optimal intervention strategies at different life stages — but no interventional data is available.

## Limitations and Open Critiques

1. **Cross-sectional training** — Like most first-generation clocks, the predictor was trained to predict chronological age cross-sectionally, not to measure longitudinal change. It cannot directly be used as a "pace of aging" measure (unlike DunedinPACE). See [[biomarkers/dunedinpace-2022]].
2. **SomaScan cost and accessibility** — High cost limits widespread research and clinical use.
3. **Mortality HR not well characterized** — Unlike GrimAge and PhenoAge, mortality HR is not the primary training objective; mortality prediction data are limited.
4. **No MR causal evidence** — Genetic instruments for proteomic aging predictor level have not been analyzed in Mendelian randomization studies. The causal-vs-biomarker question is entirely open.
5. **Cross-tissue limitation** — Plasma proteins reflect secreted/leaked products from all tissues; the proteomic clock has no single tissue of origin but also cannot identify which organ system is driving age acceleration in an individual.

## Therapeutic Implications

The identification of specific proteins in each wave — particularly ECM proteins and structural pathway proteins that shift at ~34 years, and BMP-related proteins prominent at ~78 years — suggests potential therapeutic windows. The paper highlights GDF15 as one of the most prominently age-associated proteins across waves. The paper itself does not claim therapeutic targets; discussion of GDF11 or VEGF-C as rejuvenating factors is from separate Wyss-Coray lab work (refs 6–10 in this paper) and is not a finding of Lehallier 2019 specifically. #gap/needs-human-replication #gap/unsourced — GDF11/VEGF-C therapeutic claims require separate citations

## External Resources

- **SomaScan platform:** Somalogic (somalogic.com)
- **Aging Atlas (Open Aging Atlas):** https://ngdc.cncb.ac.cn/aging/ — multi-omics aging data including some proteomic datasets
- **Human Protein Atlas:** expression and aging context for individual proteins

## Cross-references

- [[biomarkers/grimage-2019]] — DNAm clock with protein surrogates (different architecture but shared interest in plasma proteins as aging signals)
- [[biomarkers/dunedinpace-2022]] — DNAm pace clock; best current intervention-responsive clock
- [[biomarkers/horvath-clock-2013]] — first-generation DNAm clock for comparison
- [[hallmarks/epigenetic-alterations]] (verified) — epigenetic context
- [[hallmarks/chronic-inflammation]] — inflammatory proteins (CRP, IL-6 surrogates) overlap with proteomic aging signatures
- [[hallmarks/stem-cell-exhaustion]] — growth factor biology (GDF-11, follistatin) relevant here
- [[frameworks/biological-age-measurement]] — comparison MOC; cross-modality discussion

## Footnotes

[^lehallier2019]: doi:10.1038/s41591-019-0673-2 · n=4,263 (INTERVAL n=3,301 + LonGenity n=962; age 18–95 yr); 171 additional subjects in 4 independent cohorts · observational cross-sectional · LASSO on 2,925 SomaScan proteins → 373-protein predictor; r=0.93–0.97 vs chronological age across cohorts · model: human plasma · Nat Med 2019 25:1843–1850 · PDF: PMC7062043 (verified 2026-05-05) · key finding: non-monotonic protein waves cresting at ages 34, 60, 78 yr identified by DE-SWAN; 895/1,379 age-associated proteins also sex-associated

[^argentieri2024]: doi:10.1038/s41591-024-03164-7 · Argentieri MA et al. · Nat Med 2024 · ProtAge UK Biobank · n=45,441 UKB primary; validation in CKB n=3,977 (r=0.92), THL Finland n=1,990 (r=0.94) · observational cross-sectional + longitudinal mortality follow-up · 204-protein Olink Explore 3072 LASSO predictor; r=0.94 vs chronological age in UKB; predicts incidence of 18 major chronic diseases + all-cause mortality + multimorbidity; associated with telomere length, frailty index, reaction time · model: humans, plasma · pmid:39117878

[^sayed2025]: doi:10.1038/s41514-025-00318-w · Sayed N et al. · NPJ Aging 2025 · Reversal of proteomic aging with exercise · UKB observational n=45,438 + 12-week supervised exercise sub-study (MyoGlu; NCT01803568) n=26 men · ProtAgeGap reduced by ~10-month equivalent over 12 weeks; CLEC14A and other proteins changed with exercise and tracked insulin-sensitivity improvement; PI3K-Akt and MAPK signaling implicated by muscle/fat transcriptomics · pmid:41449222

[^garst2026]: doi:10.1016/j.crmeth.2026.101405 · Garst S et al. · Cell Rep Methods 2026 · ProtFI · UK Biobank Olink proteomics + ¹H-NMR metabolomics; n=40,696 · Elastic-Net model trained on Rockwood frailty index; companion ProtMort trained on all-cause mortality · ProtFI outperforms established aging biomarkers for incident CVD, handgrip strength, self-rated health · external validation: 2 Dutch cohorts (n=995, n=500) · pmid:41966686

[^goeminne2025]: doi:10.1016/j.cmet.2024.10.005 · Goeminne LJE et al. · Cell Metab 2025 (Jan 7) · Plasma protein-based organ-specific aging and mortality models · UK Biobank Olink proteomics · derives organ-system-specific aging clocks from plasma proteins; diseases mapped as accelerated aging of specific organismal systems · pmid: see PMC; verifies organ-specificity that single-tissue DNAm clocks lack
