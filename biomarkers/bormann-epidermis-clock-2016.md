---
type: biomarker
aliases: [Bormann 2016 epidermis clock, epidermis DNAm clock, skin-specific epigenetic clock, Bormann clock]
modality: dna-methylation
unit: years
training-cohort: "Bormann 2016: n=108 white female donors, two datasets — Dataset 1 (n=48, punch biopsy outer forearm, bimodal ages 18–27 yr and 61–78 yr) + Dataset 2 (n=60, suction blister roof outer forearm, continuous ages 20–79 yr)"
n-cpgs-or-features: null   # SVM trained on full 450k probe set; no compact CpG list published (see body); #gap/needs-canonical-id
training-target: chronological-age
calibration-tissues: ["[[epidermis]]"]
test-retest-icc: null   # not reported in Bormann 2016; no independent test-retest study identified as of 2026-05-19
human-evidence-level: strong
mendelian-randomization: not-tested
intervention-responsive: yes
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Primary quantitative claims (LOOCV ρ/MAE, Vandiver ρ/R²/MAE/p-value, training n, Horvath comparison) verified against R39 full-scope study page (PDF read 2026-05-19). Bienkowska 2026 DOI + PMID + n=851 + abstract details confirmed via PubMed efetch. Menendez Vazquez 2025 DOI + PMID + n=462 + ~4 yr MAE + <2 yr intra-individual variation confirmed via PubMed efetch. Falckenhayn 2024 DOI + DNMT1 mechanism + keratinocyte in-vitro model confirmed against local PDF. Corrections: (1) Falckenhayn 2024 body text — clock age reduction was in keratinocyte cultures, not 3D skin models; 3D skin model was for epidermal thinning endpoint only; (2) comparison table tapelift row — MitraSolo/MitraCluster (Menendez Vazquez 2025, Mitra Bio) are a distinct entry from [[tapelift-clock-2026]] (Rodríguez-Paredes); corrected to separate row; (3) sister-page stub notes removed (pages exist). test-retest-icc null confirmed (not reported in Bormann 2016). n-cpgs-or-features null confirmed appropriate (SVM on full 450k probe space; no compact list published). literature-checked-through 2026-05-19 confirmed set."
---

# Bormann Epidermis Clock (2016)

The first tissue-specific DNA methylation aging clock trained and validated exclusively on human epidermis. Developed by Bormann et al. (2016) using Illumina 450k methylation arrays and a support vector machine (SVM) regression model on 108 white female donors, it substantially outperforms the pan-tissue [[biomarkers/horvath-clock-2013]] on epidermal samples — reducing the mean absolute error from 12.1 yr (Horvath) to 6.72 yr in an independent validation cohort — and established the methodological blueprint for all subsequent skin-specific epigenetic clocks.

## Identity and Origin

- **Primary citation:** Bormann F, Rodríguez-Paredes M, Hagemann S et al. (2016) *Aging Cell* 15(3):563–571 — doi:10.1111/acel.12470
- **Study page:** [[studies/bormann-2016-epidermis-clock]] (R39 verified, full-scope; cross-link to that page for all primary quantitative claims)
- **Local PDF:** available (doi:10.1111/acel.12470); PMID 27004597; PMC PMC4854925
- **Citation count:** ~94 (OpenAlex 2026-05-19; 100th percentile FWCI 4.85)
- **Clock type:** First-generation tissue-specific (chronological-age trained)
- **Input modality:** Illumina HumanMethylation450 array (450k); SVM trained on full probe space
- **Output:** Predicted chronological age in years ("epidermal DNAm age")
- **Scope:** Epidermis-only; not valid on whole blood, saliva, or other tissues

## Training Details

| Parameter | Value |
|---|---|
| Total samples | n=108 white female donors (combined training set) |
| Dataset 1 | n=48; punch biopsy, outer forearm; bimodal 18–27 yr (young, n=24) + 61–78 yr (old, n=24) |
| Dataset 2 | n=60; suction blister roof, outer forearm; continuous ages 20–79 yr |
| Algorithm | SVM regression against chronological age |
| Input features | Full Illumina 450k probe set; no compact CpG coefficients published |
| Cross-validation | Leave-one-out (LOOCV) + 10-fold cross-validation |
| Cohort restriction | Female, Caucasian only (key generalizability caveat — see Limitations) |

The SVM model was trained on the full 450k probe space rather than a pre-selected CpG list. This distinguishes the Bormann clock architecturally from coefficient-based models like Horvath 2013 (elastic-net, 353 CpGs with published weights). As a consequence, applying the Bormann clock requires the full SVM parameter set, not a simple linear formula. The n-cpgs-or-features field is listed as null in frontmatter; a compact CpG count was not published in the original paper. #gap/needs-canonical-id

See [[studies/bormann-2016-epidermis-clock]] § Methods for full preprocessing and cohort design details.

## Performance

### Training cross-validation (LOOCV, n=108)

| Metric | Value |
|---|---|
| Pearson ρ | 0.92 (p < 2.2×10⁻¹⁶) |
| MAE | <5.25 yr |

All training-set figures are from LOOCV within the Bormann 2016 cohort. See [[studies/bormann-2016-epidermis-clock]] for primary source confirmation [^bormann2016].

### Independent validation (Vandiver 2015 cohort, n=18)

The Bormann clock was validated against the Vandiver et al. 2015 dataset (n=18 sun-exposed forearm epidermis samples), which was entirely independent of training:

| Metric | Bormann SVM | Horvath 2013 pan-tissue |
|---|---|---|
| Pearson ρ | **0.96** (p=1.66×10⁻¹⁰) | 0.89 |
| R² | **0.93** | 0.794 |
| MAE | **6.72 yr** | **12.1 yr** |

**The Bormann clock reduces MAE by ~1.8-fold relative to Horvath 2013 in independent epidermal samples.** This benchmark established that pan-tissue clocks systematically underperform in epidermis and provided the empirical justification for tissue-specific skin clock development in subsequent years [^bormann2016].

The Vandiver cohort validates the clock on sun-exposed skin specifically; the training cohort used outer forearm samples with uncharacterised UV exposure. Whether performance differs in photoprotected vs photoexposed sites is unresolved. #gap/needs-replication

## Methodology

The Bormann 2016 clock was built in two stages: (1) differential methylation analysis using the bimodal young/old Dataset 1 to characterise age-related CpG patterns; (2) SVM regression on the full combined n=108 to construct the age predictor. Leave-one-out and 10-fold cross-validation both assessed internal accuracy; the external Vandiver dataset provided held-out validation.

Beyond clock construction, Bormann 2016 characterises three structural features of epigenetic aging in skin: reduced dynamic range of methylation (intramethylome variance P=0.0016), reduced spatial autocorrelation of neighbouring CpGs (P=5.4×10⁻⁷), and increased inter-individual methylome heterogeneity with age. These features together describe **loss of epigenetic regulatory fidelity** — a change in methylation architecture, not just site-specific gains and losses — and were linked to reduced transcriptional network connectivity in the same paired RNA-seq data. These mechanistic findings are discussed in detail on the study page; the biomarker page records only the clock-performance and intervention-response dimensions.

The probe space used (full 450k array) was later constrained by Qi et al. 2026 to the 23,845 probes shared between the Bormann 2016 training-era arrays and modern 450k/EPIC chips, from which a 173-CpG elastic-net model (the "23k clock") was trained — extending the Bormann cohort to produce a more portable, ethnically validated predictor [^qi2026]. The Bormann clock itself remains the founding reference; the Qi 2026 23k clock is a methodological successor seeded from the same n=108 training cohort.

## Intervention Responsiveness

### Qi 2026 — DHM topical serum, 8-week open-label (n=60)

In a single-arm open-label product-use study (n=60 Brazilian volunteers, ages 40–70, Fitzpatrick phototypes I–VI, 8 weeks twice-daily topical application), a serum containing dihydromyricetin (DHM), hyaluronic acid, glycine saponin, and enoxolone **reduced epidermal DNAm age by ~2.1 yr** (paired Wilcoxon p=0.029; 40% of participants showed ≥5 yr reduction) as measured by the Qi 2026 23k-clock derivative of the Bormann probe set [^qi2026]. Secondary clinical endpoints: wrinkle visibility −13.9%; dermal echogenicity +10.4% (both significant).

**Important caveat:** this study had no vehicle control and no randomization. The ~2.1 yr shift should be read as a cosmetic-grade positive signal, not aging-RCT-grade evidence. Whether the clock shift reflects genuine epigenetic rejuvenation vs metabolic confounding from topical anti-inflammatory action is not established. See [[studies/qi-2026-dhm-epigenetic-skin-aging]] (verified: false — PDF pending) for full design details and limitations.

### Falckenhayn 2024 — DHM in-vitro DNMT1 inhibition (keratinocytes)

In primary human keratinocyte cultures (n=13 independent donors), Falckenhayn et al. 2024 identified DHM as a natural DNMT1 inhibitor and showed that DHM treatment induces global hypomethylation and **reduces Bormann-clock epidermal DNAm age by ~2 years** in cultured keratinocytes (p<0.05, Wilcoxon rank-sum test) [^falckenhayn2024]. Separately, DHM treatment in a 3D skin model reduced age-dependent epidermal thinning, and in-vivo topical DHM application (19 female volunteers, 8 weeks) reactivated age-silenced genes in epidermis. This establishes the mechanistic rationale for the Qi 2026 in-vivo finding: DHM reduces clock age by partially inhibiting DNMT1-mediated maintenance methylation, which is the enzyme responsible for propagating age-accumulated hypermethylation through cell division. #gap/needs-replication — in-vitro finding; scale, dose, and specificity in intact human skin require confirmation.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — human keratinocyte study |
| Phenotype conserved in humans? | yes — in-vivo product-use study (Qi 2026) |
| Replicated in humans by independent group? | no — single industry-affiliated group (Beiersdorf AG) as of 2026-05-19 |

### Bienkowska 2026 — Cross-sectional landscape study (n=851)

A large cross-sectional epigenetic skin aging study (Bienkowska et al. 2026; *Clinical Epigenetics*; PMID 41957838; n=851 participants from a population-based cohort, 326 factors phenotyped) using a published skin-specific epigenetic clock characterised 20 factors associated with decelerated DNAm skin age and 17 with accelerated DNAm skin age [^bienkowska2026]. Among deceleration-associated factors: patterns mapping to transcription elongation chromatin regions (supporting transcriptional integrity). Among acceleration-associated factors: reduced methylome variance (epigenetic drift). DHM and aspirin were specifically noted as compounds showing methylation patterns consistent with decelerated epigenetic aging. Several associations were validated in an independent cohort and were consistent across both skin-specific and general epigenetic clocks. The exact skin clock model used is not named in the abstract; the paper used "a published skin-specific epigenetic clock" per Methods description. #gap/needs-replication — cross-sectional; causality not established.

## Comparison to Other Clocks

| Clock | Type | Training | Calibration tissue | MAE in epidermis |
|---|---|---|---|---|
| **Bormann 2016** | 1st-gen tissue-specific | n=108 white female | Epidermis only | 6.72 yr (Vandiver validation) |
| [[biomarkers/horvath-clock-2013]] | 1st-gen pan-tissue | n=7,844 / 51 tissues | Multi-tissue | 12.1 yr (Vandiver validation) |
| [[qi-23k-epidermis-clock-2026]] | 2nd-gen tissue-specific | Bormann 2016 n=108 + multi-ethnic n=17 | Epidermis (tape-strip) | 5.66 yr (CV) / 4.88 yr (multi-ethnic validation) |
| [[tapelift-clock-2026]] | 3rd-gen tissue-specific (non-invasive) | Tape-strip forehead, n=89 (Rodríguez-Paredes 2026) | Epidermis (tape-strip) | Not directly compared to Bormann in original paper |
| [[menendez-vazquez-2025-mitrasolo-mitracluster|MitraSolo / MitraCluster (Menendez Vazquez 2025)]] | 3rd-gen tissue-specific (non-invasive, sequencing-based) | Enzymatic methyl-seq, tape-strip epidermis, n=462 | Epidermis (tape-strip) | ~4 yr MAE; intra-individual variation <2 yr |
| [[biomarkers/hannum-clock-2013]] | 1st-gen tissue-specific | Whole blood | Blood only | Not validated in epidermis |
| [[biomarkers/phenoage-2018]] | 2nd-gen mortality-trained | Blood clinical markers | Blood | Not validated in epidermis |
| [[biomarkers/grimage-2019]] | 2nd-gen mortality-trained | Blood proteomics | Blood | Not validated in epidermis |

**Key comparison:** The Bormann clock's 1.8-fold MAE improvement over Horvath in epidermis established the principle that tissue-specific training is necessary for accurate skin-clock performance. The Qi 2026 23k-clock further reduces MAE and adds multi-ethnic validation — it is the recommended tool for new studies, while Bormann 2016 remains the founding reference and its training cohort anchors the literature.

The [[menendez-vazquez-2025-mitrasolo-mitracluster|MitraSolo/MitraCluster clocks]] (Menendez Vazquez 2025; *NPJ Aging*; PMID 41387742; n=462 enzymatic methyl-sequencing dataset; ~4 yr MAE, intra-individual variation <2 yr) represent a further generation of skin-specific tools with better test-retest characteristics and compatibility with lower-cost sequencing; they were not available at the time of Bormann 2016 [^menendez2025]. Note: all authors except Moqri are employees of Mitra Bio (the company commercialising these clocks); independent replication is pending.

A recently proposed PathwayAge clock (Jiang et al. 2026; *Age & Ageing*) aggregates epidermal methylation data at gene-ontology pathway level rather than CpG level, identifying four core functional modules (cellular processes, stress/immune, developmental, signal regulation); its relationship to Bormann-clock MAE has not been directly compared [^jiang2026]. #gap/needs-replication

## Limitations and Gaps

1. **Female Caucasian cohort only.** All n=108 training donors are white females. The clock was not validated across sexes or ethnic groups in the original paper. Qi 2026 subsequently showed cross-ethnic validity of a new clock derived from the same probe set (n=17 multi-ethnic donors, MAE 4.88 yr, no ethnic bias), suggesting the underlying biology is broadly conserved — but the Bormann SVM model itself remains unvalidated in males or non-Caucasian populations. #gap/needs-replication

2. **SVM architecture limits portability.** Unlike Horvath's published 353-CpG coefficient table, the Bormann SVM requires the full model parameters and 450k probe space. Practical deployment requires the full SVM object; no compact CpG list was published. Subsequent tissue-specific clocks (Qi 2026 173-CpG elastic-net; MitraSolo) addressed this portability limitation. #gap/needs-canonical-id

3. **No test-retest ICC reported.** Unlike DunedinPACE (ICC 0.96), no test-retest reliability study has been published for the Bormann clock as of 2026-05-19. This limits its utility as a sensitive longitudinal tracker without knowing measurement noise. #gap/needs-replication

4. **No mortality or morbidity outcome validation.** Like the first-generation Horvath clock, Bormann 2016 predicts chronological age only. Whether epidermal DNAm age acceleration (EAA) predicts wound healing impairment, keratinocyte cancer risk, or photoaging severity is not established from this paper. #gap/needs-replication

5. **Cross-sectional training.** The predictor captures population-level age trends, not individual longitudinal aging trajectories. Whether the clock tracks within-person rate-of-aging is not established.

6. **Single-paper validation origin.** The only published independent validation is the Vandiver 2015 dataset (n=18). Subsequent work by the Beiersdorf group (Falckenhayn 2024, Qi 2026) uses the same clock in the context of DHM intervention studies, but no fully independent group has reported a head-to-head validation of the Bormann 2016 SVM on a new epidermis cohort as of 2026-05-19. The Bienkowska 2026 large cross-sectional study (n=851) uses "a published skin-specific epigenetic clock" (per abstract/methods); the exact clock model is not named in the abstract. #gap/needs-replication

## Cross-References

- [[studies/bormann-2016-epidermis-clock]] — primary-source study page (R39 verified); all quantitative training/validation claims anchor here
- [[biomarkers/horvath-clock-2013]] — pan-tissue reference clock; Bormann outperforms it ~1.8-fold on epidermis
- [[biomarkers/hannum-clock-2013]] — blood-specific first-generation clock
- [[biomarkers/phenoage-2018]] — mortality-trained second-generation clock
- [[biomarkers/grimage-2019]] — mortality-trained second-generation clock
- [[biomarkers/dunedinpace-2022]] — pace-of-aging clock; the only clock with a positive CR-RCT signal
- [[qi-23k-epidermis-clock-2026]] — R43 sister page; 173-CpG elastic-net successor trained on the Bormann 2016 cohort; multi-ethnic validated
- [[tapelift-clock-2026]] — R43 sister page; non-invasive tape-strip variant by Rodríguez-Paredes group (forehead, 157-CpG elastic-net; distinct from MitraSolo/MitraCluster by Mitra Bio)
- [[studies/qi-2026-dhm-epigenetic-skin-aging]] — DHM serum intervention study using the 23k-clock derivative
- [[molecules/compounds/dihydromyricetin]] — DHM compound page; DNMT1 inhibitor mechanistic anchor
- [[hallmarks/epigenetic-alterations]] — hallmark page; Bormann 2016 is primary mechanistic evidence for epigenetic aging in skin
- [[skin-aging]] — phenotype hub; Bormann clock is the principal biomarker anchor
- [[epidermis]] — tissue page
- [[keratinocytes]] — primary cell type of the training tissue
- [[epigenetic-alterations]] — process page
- [[frameworks/biological-age-measurement]] — cross-clock comparison MOC

## Footnotes

[^bormann2016]: [[studies/bormann-2016-epidermis-clock]] · n=108 white female donors (combined training set); Vandiver 2015 independent validation n=18 · observational (cross-sectional, two-cohort design: punch biopsy + suction blister, outer forearm) · LOOCV ρ=0.92, MAE<5.25 yr (training); Vandiver validation: ρ=0.96 (p=1.66×10⁻¹⁰), R²=0.93, MAE=6.72 yr vs Horvath MAE=12.1 yr · model: human epidermis, Illumina 450k, SVM · doi:10.1111/acel.12470 · PMID 27004597 · local PDF available (verified R39 2026-05-19)

[^qi2026]: [[studies/qi-2026-dhm-epigenetic-skin-aging]] · n=77 total (17 pilot cross-ethnic + 60 product-use) · in-vivo observational (Part 1) + single-arm open-label, no vehicle control (Part 2) · 23k clock CV MAE 5.66 yr; multi-ethnic validation MAE 4.88 yr; DHM serum: epidermal DNAm age −2.1 yr (paired Wilcoxon p=0.029); 40% participants ≥5 yr reduction; wrinkle visibility −13.9%; dermal echogenicity +10.4% · model: human epidermis tape-strip, multi-ethnic · doi:10.1007/s13555-026-01764-4 · verified: false (auto-extracted from HTML; PDF pending)

[^falckenhayn2024]: doi:10.3389/fragi.2023.1258184 · Falckenhayn C et al. · Frontiers in Aging 2024 · n=not specified (in-vitro + 3D skin model) · in-vitro + ex-vivo · DHM identified as DNMT1 inhibitor by screening; moderate global hypomethylation in keratinocytes; Bormann-clock epidermal DNAm age reduced in 3D skin models; reactivation of age-silenced genes; reduced epidermal thinning · model: primary human keratinocytes + 3D skin models · local PDF available · archive: doi:10.3389/fragi.2023.1258184

[^bienkowska2026]: doi:10.1186/s13148-026-02101-4 · Bienkowska A et al. · Clinical Epigenetics 2026 · PMID 41957838 · n=851 participants (population-based cohort, 326 lifestyle/physiological/pharmacological factors phenotyped) · observational cross-sectional · 20 factors associated with decelerated DNAm skin age; 17 with accelerated; DHM + aspirin in deceleration-consistent patterns; methylome variance reduction associated with acceleration; factors mapping to transcription elongation chromatin associated with deceleration; several associations validated in independent cohort; consistent across skin-specific and general epigenetic clocks · model: human skin methylation · not in archive as of 2026-05-19

[^menendez2025]: doi:10.1038/s41514-025-00314-0 · Menendez Vazquez A et al. · NPJ Aging 2025 · PMID 41387742 · PMC PMC12820032 · n=462 (enzymatic methyl-sequencing from tape-strip epidermis) · observational · MitraSolo and MitraCluster clocks: ~4 yr MAE, intra-individual variation <2 yr; performance maintained at low sequencing depth; generalises across anatomical sites and sampling methods; detects Yamanaka factor rejuvenation signal · model: human epidermis tape-strip (Mitra Bio; all authors Mitra Bio employees except M. Moqri) · archive: pending download
