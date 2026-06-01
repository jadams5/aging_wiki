---
type: framework
aliases: [skin clocks, skin epigenetic age, skin DNAmAge predictors, skin methylation clock MOC]
sources: ["[[bormann-epidermis-clock-2016]]", "[[qi-23k-epidermis-clock-2026]]", "[[tapelift-clock-2026]]", "[[menendez-vazquez-2025-mitrasolo-mitracluster]]"]
covers: [biomarkers, dna-methylation, skin-aging]
---

# Skin methylation clocks

Class MOC consolidating the four DNA methylation aging predictors trained on epidermal tissue that are currently seeded as atomic pages in this wiki. All quantitative claims, primary-source footnotes, and methodology details live on those four child pages — follow the wikilinks. This page provides cross-clock comparison, lineage structure, methodological dimensions, and open-questions navigation.

---

## Quick-reference comparison table

| Clock | Paper / year | Architecture | Training n | Error metric | Tissue / sampling | Lineage | Atomic page |
|---|---|---|---|---|---|---|---|
| **Bormann 2016** | Bormann F et al., *Aging Cell* 2016 | SVM on full 450k probe space (no compact CpG list) | n=108 white females | LOOCV MAE <5.25 yr; Vandiver indep MAE 6.72 yr | Epidermis — punch biopsy + suction blister (invasive) | Beiersdorf-DKFZ (founding) | [[bormann-epidermis-clock-2016]] |
| **Qi 23k 2026** | Qi M et al., *Dermatology and Therapy* 2026 | Elastic-net; 173 CpGs from 23,845-probe panel (Infinium EPICv2) | Extends Bormann n=108; multi-ethnic pilot n=17 | CV error 5.66 yr (glmnet MSE); MAE 4.88 yr (multi-ethnic validation) | Epidermis — tape-strip (non-invasive) | Beiersdorf-DKFZ (successor) | [[qi-23k-epidermis-clock-2026]] |
| **TapeLift 2026** | Rodríguez-Paredes M et al., *npj Precision Oncology* 2026 | Dual: elastic-net 157 CpGs + PC clock 5,021 CpGs | n=71 train / 18 val / 19 indep test (Caucasian-only) | Elastic-net RMSE 6.2 yr; PC clock RMSE 5.1 yr (indep test) | Epidermis — adhesive tape-strip forehead (non-invasive) | DKFZ / Rodríguez-Paredes (distinct subgroup) | [[tapelift-clock-2026]] |
| **MitraSolo / MitraCluster 2025** | Menendez Vazquez A et al., *npj Aging* 2025 | Two-clock framework: MitraSolo (CpG-based) + MitraCluster (region-based); architecture unconfirmed #gap/no-fulltext-access | n=462 enzymatic methyl-seq samples | MAE ~4 yr (abstract-reported); intra-individual variation <2 yr | Epidermis — adhesive tape-strip (non-invasive); generalizes across anatomical sites | Mitra Bio (independent) | [[menendez-vazquez-2025-mitrasolo-mitracluster]] |

---

## Three independent research lineages

Understanding which groups produced which clocks is critical for interpreting "independent validation" claims.

### 1. Beiersdorf-DKFZ lineage

The dominant lineage, comprising four publications from the same industrial-academic collaboration:

- **Bormann 2016** — founded the tissue-specific epidermis-clock field; SVM on 450k arrays; training cohort n=108 white females; established that pan-tissue clocks (Horvath 2013) underperform ~1.8-fold on epidermis.
- **Falckenhayn 2024** (*Frontiers in Aging*) — identified DHM as a natural DNMT1 inhibitor and showed Bormann-clock age reduction in keratinocyte cultures; provided mechanistic rationale for DHM-as-epigenetic-rejuvenator. Cross-linked via [[molecules/compounds/dihydromyricetin]].
- **Qi 23k 2026** — elastic-net successor to Bormann; 173-CpG portable model; first cross-Fitzpatrick-validated skin clock; contains a single-arm open-label DHM serum trial (n=60) as the intervention arm.
- **Bienkowska 2026** (*Clinical Epigenetics*; n=851) — large cross-sectional landscape study using "a published skin-specific epigenetic clock" to characterize 37 accelerating/decelerating lifestyle and physiological factors.

**Critically:** Bienkowska 2026 is NOT independent validation of Qi 2026 — it is a same-group study from the same research program. The same applies to the Falckenhayn 2024 → Qi 2026 mechanistic chain. The only fully independent validation of any Bormann-lineage clock is the Vandiver 2015 dataset (n=18) applied in the original Bormann 2016 paper.

### 2. DKFZ / Rodríguez-Paredes lineage (TapeLift)

The [[tapelift-clock-2026]] paper (Rodríguez-Paredes et al. 2026, *npj Precision Oncology*) originates from DKFZ but the Rodríguez-Paredes subgroup operates independently of the Beiersdorf commercial arm. The paper's primary framing is skin cancer epigenomics; the aging clock is a component within that broader program. The TapeLift clock's two-variant architecture (compact elastic-net + PC clock) and its tumor-suppressor-gene mitotic-age angle distinguish it methodologically from the pure chronological-age-trained Bormann/Qi clocks.

**Cross-ethnic status:** The training cohort is Caucasian-only (Fitzpatrick I–IV). The "no non-white bias" attribution frequently applied to TapeLift in narrative summaries originates from Qi 2026's independent application of the TapeLift clock to an n=17 multi-ethnic pilot — NOT from the Rodríguez-Paredes 2026 paper itself. See [[tapelift-clock-2026]] § Limitations for the full correction.

### 3. Mitra Bio lineage (MitraSolo / MitraCluster)

[[menendez-vazquez-2025-mitrasolo-mitracluster]] is fully independent of both lineages above. Mitra Bio is a commercial entity; all authors except Mahdi Moqri (Stanford) are company employees. The distinguishing technical feature is enzymatic methyl-sequencing rather than Illumina microarray — a different sample-prep and bioinformatics pipeline that may tolerate lower DNA input. The n=462 training set is the largest reported for an epidermal methylation clock as of 2026-05-19. The <2 yr intra-individual variation is the best-characterized noise floor among published skin clocks; however, the full paper is not yet locally available and CpG counts, architecture, and cohort demographics remain unverified (#gap/no-fulltext-access — see [[menendez-vazquez-2025-mitrasolo-mitracluster]]).

---

## Methodological dimensions

### Tissue sampling invasiveness

The field has moved from invasive to non-invasive:

- **Invasive** — Bormann 2016 used punch biopsy and suction blister roof (both require clinical procedure, local anaesthesia, or specialist equipment). Limits scalability to large cohorts and intervention trials.
- **Non-invasive** — Qi 2026 (tape-strip), TapeLift 2026 (adhesive gel strip), and MitraSolo/MitraCluster 2025 (tape-strip) all demonstrate that routine adhesive tape collection provides sufficient DNA for clock profiling. This enables at-home or outpatient-scale collection.

### Quantification platform

| Platform | Clocks using it | Distinguishing feature |
|---|---|---|
| Illumina Infinium 450k array | Bormann 2016, Qi 23k 2026 (via 23,845-probe intersection) | Comprehensive; standardized globally; used in Bormann training cohort |
| Illumina MethylationEPIC v2 | TapeLift 2026 (535,384 probes queried) | Expanded probe space; newer array generation |
| Enzymatic methyl-sequencing | MitraSolo / MitraCluster 2025 | Sequencing-based; lower DNA input tolerance; different bioinformatics |

**Interoperability note:** The 23,845-probe panel used by Qi 2026 is the intersection of the Bormann 27k array and modern 450k/EPIC chips, making Qi 2026 partially backward-compatible with the Bormann probe space. TapeLift and MitraSolo use non-overlapping platforms; no head-to-head comparison on the same sample set has been published.

### Predictor architecture

| Architecture | Clock(s) | Key property |
|---|---|---|
| SVM (full probe space) | Bormann 2016 | No compact CpG list; requires full model parameters to apply; not portable as a coefficient table |
| Elastic-net (compact CpG list) | Qi 23k 173-CpG; TapeLift 157-CpG | Portable; publishable as coefficient table; widely used in clock development since Horvath 2013 |
| PC clock | TapeLift 5,021-CpG (Higgins-Chen 2022 PC architecture) | Better test-retest reliability by regressing out technical noise; trades portability for robustness |
| Two-clock framework | MitraSolo (CpG-level) + MitraCluster (region-level) | Dual design addresses both single-sample precision (Solo) and bulk/region robustness (Cluster); architecture details pending full-text verification |

### Intervention responsiveness

Only one of the four skin clocks has a published study reporting a significant clock-age reduction in an interventional context with human participants:

- **Qi 23k 2026** — DHM topical serum, single-arm open-label, n=60, 8 weeks: epidermal DNAm age −2.08 yr (paired Wilcoxon p=0.029). No vehicle control; not a randomized trial. Partial-correlation analysis for sunscreen use is present in the paper. See [[studies/qi-2026-dhm-epigenetic-skin-aging]] and [[molecules/compounds/dihydromyricetin]] for mechanistic detail.
- **MitraSolo / MitraCluster** — claims a Yamanaka factor rejuvenation signal in vitro; abstract-only as of 2026-05-19; design details unverified. #gap/no-fulltext-access
- **Bormann 2016** and **TapeLift 2026** — no published intervention-responsiveness studies as of 2026-05-19. #gap/needs-replication

---

## Comparison with pan-tissue and blood clocks

The skin-specific clocks sit within the broader epigenetic clock landscape covered in [[frameworks/biological-age-measurement]]. Key contextual points:

- Pan-tissue clocks (Horvath 2013) underperform ~1.8-fold on epidermis relative to the tissue-specific Bormann clock. This established that tissue-specific training is necessary for accurate skin-clock performance — a principle now generalized to other tissues.
- None of the skin methylation clocks has been tested in a pre-registered RCT with a hard endpoint; DunedinPACE (blood) remains the only clock that responded to a well-powered RCT (CALERIE-2). No skin-clock equivalent of the CALERIE-2 design has been run.
- The Higgins-Chen 2022 PC-clock reliability critique (test-retest ICC degradation from technical noise) applies to all array-based clocks. Of the four skin clocks, only TapeLift has a PC-clock variant; the others have no published test-retest ICC data.

---

## Open questions and gaps

1. **No head-to-head benchmark study.** All four clocks have been run on distinct training and validation cohorts; no study has run all four on the same sample set. Without a common benchmark, cross-clock MAE comparisons in the table above are not directly comparable (different cohorts, different age distributions, different sample-collection methods).

2. **Intervention-responsiveness evidence is thin and lineage-concentrated.** Only the Beiersdorf-DKFZ group has published an intervention study (DHM serum; Qi 2026). An independent group has not replicated the ~2 yr DHM signal. No study has tested topical retinoids, SPF, or lifestyle interventions (exercise, diet) against any skin methylation clock. #gap/needs-human-replication

3. **UV / sun-exposure confounding.** Photoaging is the dominant external driver of skin epigenetic change, yet most skin clocks were trained on forearm (mixed UV exposure) or forehead (high UV) without systematic UV-history covariate control. Qi 2026 included a sunscreen partial-correlation analysis; other clocks have not addressed this confound. #gap/needs-replication

4. **Tissue-region specificity.** Face, forearm, scalp, and volar arm differ in UV exposure history and intrinsic aging rates. Whether a clock trained on one region transfers to another has not been systematically characterized. The Menendez Vazquez 2025 abstract claims generalization across anatomical sites — details pending full-text access.

5. **Sex and ethnicity validation.** All Bormann-lineage training data originates in white (Caucasian) female cohorts; cross-ethnic validation exists only for Qi 2026 (n=17 pilot) and the TapeLift application by Qi 2026 (same n=17). MitraSolo/MitraCluster cohort demographics are unverified from abstract alone.

6. **Lack of mortality or morbidity outcome validation.** None of the four clocks has been validated against photoaging severity scores, keratinocyte cancer risk, wound healing outcomes, or all-cause mortality in a prospective cohort. All four are chronological-age-trained (first generation); no skin-clock mortality-trained equivalent of PhenoAge or GrimAge exists. #gap/needs-replication

---

## Cross-references

- [[frameworks/biological-age-measurement]] — parent clock-landscape MOC; skin clocks are catalogued in the "Tissue-specific clocks" section
- [[hallmarks/epigenetic-alterations]] #stub — epigenetic aging hallmark anchor; skin clocks are direct biomarkers of this hallmark
- [[tissues/epidermis]] — tissue context for all four clocks
- [[tissues/skin]] — broader tissue page
- [[molecules/compounds/dihydromyricetin]] — the only intervention with a published positive skin-clock signal (Falckenhayn 2024 in vitro + Qi 2026 topical RCT-context)
- [[biomarkers/skin-autofluorescence-age-reader]] — structural skin aging biomarker (collagen-AGE fluorescence); distinct from methylation clocks but covers overlapping skin-aging biology

---

*Last updated 2026-05-19 — R45 post-batch atomic-page integration (Menendez Vazquez 2025 + Bienkowska 2026 propagation). Four atomic skin-clock pages now seeded. No 2024–2026 skin-clock papers identified beyond the four covered here plus Bienkowska 2026 (same-group population study).*
