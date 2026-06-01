---
type: biomarker
aliases: [TapeLift clock, Rodríguez-Paredes skin clock, TapeLift epigenetic clock, tape-strip skin methylation clock]
modality: dna-methylation
unit: years
training-cohort: "Caucasian-only training (Fitzpatrick I–IV; see R40 verifier note below); n=105 initially enrolled; 95 passed pre-array ΔCt <3 qPCR QC; 89 passed post-array p-value QC and used for clock development; 71 train / 18 internal validation split; plus 19 independent test donors; forehead sampling site"
n-cpgs-or-features: "Two clocks in paper — elastic-net clock: 157 CpGs; PC clock: 5,021 CpGs"
training-target: chronological-age
calibration-tissues: ["[[epidermis]]"]
test-retest-icc: null
human-evidence-level: limited
mendelian-randomization: not-tested
intervention-responsive: partial
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "All quantitative claims cross-checked against verified study page [[studies/rodriguez-paredes-2026-tapelift-clock]] (R39/R40 full-scope PDF read 2026-05-19). Cross-ethnic framing (R40 correction) confirmed accurate: Caucasian-only training cohort, Qi 2026 n=17 external pilot as sole cross-ethnic source. Two-clock CpG counts (157/5,021) and RMSE values (elastic-net 6.0/5.8/6.2; PC 4.7/4.3/5.1), cohort pipeline (105→95→89→71/18+19), probe set (535,384), TSG numbers (1,217→859→50), gene names and r/p values (ZIC1, RBM38, FOXA2, UCHL1, ID4), CC BY 4.0 license, and Projekt Deal OA funding all verified correct. Menendez Vazquez 2025 DOI (10.1038/s41514-025-00314-0) confirmed valid via Crossref. Schema note: n-cpgs-or-features stores a string (two-clock paper); schema expects integer — flagged for schema cleanup."
---

# TapeLift Epigenetic Clock (Rodríguez-Paredes 2026)

The TapeLift clock is a **non-invasive skin DNA methylation aging clock** trained on epidermal cells collected by adhesive gel tape from the forehead, published in *npj Precision Oncology* (2026). It removes the principal barrier to epidermal methylation profiling — the requirement for punch biopsy under local anaesthesia — by demonstrating that ~49 ng of genomic DNA from four sequential adhesive strips yields sufficient input for Illumina MethylationEPIC v2 array. Two clock variants are reported: a standard elastic-net model (157 CpGs) and a principal-component (PC) version (5,021 CpGs) with better independent validation accuracy.

**Critical note (R40 verifier finding):** The training cohort is **Caucasian-only (Fitzpatrick I–IV)**. The "no non-white bias" property frequently attributed to TapeLift in narrative summaries originates from **Qi 2026's independent external application of the TapeLift clock to an n=17 multi-ethnic Brazilian pilot cohort**, not from any test in the original Rodríguez-Paredes 2026 paper. The biomarker page [[bormann-epidermis-clock-2016]] and [[qi-23k-epidermis-clock-2026]] should be consulted as R43 sisters for the cross-ethnic validation provenance.

## Identity and Origin

- **Primary citation:** Rodríguez-Paredes M et al. (2026) *npj Precision Oncology* — doi:10.1038/s41698-026-01302-7
- **PMID:** 41593290 · **PMC:** PMC12948955 (gold OA; CC BY 4.0)
- **Archive status:** local PDF available at 
- **Study page:** [[studies/rodriguez-paredes-2026-tapelift-clock]] (R39 verified, full-scope PDF read 2026-05-19)
- **Clock family:** Tissue-specific (epidermis); second-generation (chronological-age trained)
- **Input modality:** Illumina MethylationEPIC v2 array; tape-strip epidermal keratinocytes
- **Affiliation:** DKFZ (German Cancer Research Center) + Beiersdorf AG collaboration (Lyko/Grönniger group)
- **Framing context:** Paper is primarily a skin cancer biomarker study; the aging clock is one component within a broader skin cancer epigenomics framework. This distinguishes it from pure aging-clock papers like [[biomarkers/horvath-clock-2013]] or [[biomarkers/dunedinpace-2022]].

## Clock Performance

Two clock variants were reported [^rodriguezparedes2026]:

| Clock | CpGs | Training RMSE | Internal validation RMSE (n=18) | Independent validation RMSE (n=19) |
|---|---|---|---|---|
| Elastic-net (α=0.1) | 157 | 6.0 yr | 5.8 yr | 6.2 yr |
| PC-based (Higgins-Chen protocol) | 5,021 | 4.7 yr | 4.3 yr | **5.1 yr** |

The PC clock outperforms the elastic-net clock at every evaluation stage. The improvement follows the Higgins-Chen 2022 observation [^higginschen2022] that substituting principal-component loadings for raw CpG β-values reduces technical batch-effect noise, improving both reliability and validation accuracy. The independent validation RMSE of 5.1 yr (PC clock) is comparable to the Bormann 2016 epidermis clock (MAE ~4–5 yr cross-validated) and slightly worse than the Menendez Vazquez 2025 non-invasive skin clocks (MitraSolo MAE 4.09 yr / RMSE 5.25; MitraCluster MAE 4.00 yr / RMSE 5.23; both on independent set n=75, R² 0.88–0.89) [^menendezv2025].

**Test-retest ICC:** Not reported in the original paper. #gap/long-term-unknown — ICC, longitudinal stability, and diurnal variation are not characterized in Rodríguez-Paredes 2026.

## Methodology: TapeLift Sampling Protocol

**Procedure:** Four sequential adhesive strips of polyacrylate-coated polyurethane film are applied to a 2.0 × 2.5 cm² delineated area on the forehead (pre-cleaned with 70% ethanol), capturing upper stratum corneum and outer viable epidermis (keratinocytes). Mean DNA yield: ~49 ng per session. Only 20% of extracted gDNA goes to qPCR QC; 80% is reserved for microarray [^rodriguezparedes2026].

**Two-stage QC pipeline:**
1. Pre-array DNA integrity: qPCR ΔCt <3 cutoff → 95/105 donors passed (90.5%)
2. Post-array probe detection: >75% probes with p<0.05 → 89/95 passed (93.7%)

**High-confidence probe set:** A four-stage filtering pipeline (remove polymorphic, non-autosomal, cross-reactive, and high-intra-individual-variance probes) yielded **535,384 high-confidence CpG probes** from the ~833,305 EPIC v2 probes, used for all downstream clock training and cancer analyses.

This contrasts with the Bormann 2016 approach [^bormann2016], which required invasive punch biopsy (3 mm) under local anaesthesia. TapeLift is procedurally equivalent to a standard cosmetics consumer-research protocol, enabling broader deployment in epidemiological and product-efficacy studies.

## Tumor-Suppressor Gene Angle

A distinctive feature of the TapeLift study is its explicit integration of epigenetic aging with skin cancer biology. Starting from the TSGene 2.0 database (1,217 TSGs), the authors identified **859 TSGs** with adequate promoter CpG coverage in the high-confidence probe set. The **50 TSGs** showing the most pronounced age-associated promoter hypermethylation (p<0.05, Pearson r with age) were then evaluated in actinic keratosis (AK) and cutaneous squamous cell carcinoma (cSCC) samples [^rodriguezparedes2026].

Named examples with effect sizes:
- **ZIC1** (r=0.6, p=2.7×10⁻¹⁴)
- **RBM38** (r=0.5, p=1.3×10⁻⁴)
- **FOXA2** (r=0.5, p=5.9×10⁻⁷)
- **UCHL1** (r=0.4, p=6.7×10⁻⁴)
- **ID4**

Mean promoter methylation across these 50 TSGs was further elevated in AK and cSCC compared to age-matched normal epidermis, suggesting that age-associated epigenetic silencing of tumor suppressors represents a **field cancerization mechanism** for keratinocyte cancer (KC) risk. An associated **mitotic age** signal (epigenetic measure of cumulative cell divisions) also showed progressive elevation from normal epidermis → AK → cSCC, positioning mitotic age as a potential KC risk-stratification biomarker.

This TSG-aging angle connects [[epigenetic-alterations]] to [[phenotypes/cancer]] in a tissue-specific context not well-covered by pan-tissue clocks. #gap/no-mechanism — whether epigenetic TSG silencing is causally upstream of cancer initiation or correlates with cancer-prone tissue biology is not established.

## Cross-Ethnic Validation Framing (R40-Verified Critical Correction)

**What the original paper shows:** Caucasian-only training (Fitzpatrick I–IV). No non-white donors in training or independent validation cohorts. Cross-ethnic performance not tested.

**Where the "no non-white bias" claim comes from:** Qi 2026 [^qi2026] applied the TapeLift clock as a comparator clock to their independent n=17 multi-ethnic Brazilian pilot cohort (Fitzpatrick I–VI) and reported no detectable ethnic bias for either the 23k clock or TapeLift. This external evaluation by a different research group (same Beiersdorf/DKFZ affiliation, but independent cohort) is the sole source of the cross-ethnic claim.

**Implications:** Narrative reviews and wiki pages that attribute cross-ethnic robustness to TapeLift as an intrinsic property of the Rodríguez-Paredes 2026 paper are conflating the primary paper with the Qi 2026 external validation. The n=17 cross-ethnic pilot is underpowered to definitively establish absence of ethnic bias; a properly powered, ethnically diverse replication cohort is needed. #gap/needs-replication

## Funding and Competing Interests

Per R40 verifier finding:

- **Funding:** Open Access publication fee funded via **Projekt Deal** (German university consortium OA agreement with Springer Nature). No Beiersdorf research grant is credited for the study.
- **Competing interests:** K.W. and E.G. are Beiersdorf AG employees; F.L. received consultation fees from Beiersdorf AG; M.R.-P. received speaker fees from Beiersdorf SA. All four named authors (including M.R.-P., K.W., E.G., F.L.) are listed as inventors on patent applications related to the TapeLift method.
- **License:** CC BY 4.0 (not CC BY-NC 4.0; confirmed via PDF and PMC record).

The Beiersdorf commercial interest is in the TapeLift sampling method (patent applications filed), not in a specific consumer product outcome. This does not invalidate the clock training results but provides context for independent replication priority.

## Comparison to Related Clocks

| Clock | Year | Tissue | Sampling | CpGs | Validation RMSE/MAE | Ethnicity | Key context |
|---|---|---|---|---|---|---|---|
| Bormann 2016 [^bormann2016] | 2016 | Epidermis | Punch biopsy (invasive) | ~500 | MAE ~4–5 yr (cross-val) | White females only | Foundation for Qi 2026 23k clock |
| TapeLift elastic-net (this page) | 2026 | Epidermis | Tape strip (non-invasive) | 157 | RMSE 6.2 yr (indep test) | Caucasian only | Skin cancer context |
| TapeLift PC clock (this page) | 2026 | Epidermis | Tape strip (non-invasive) | 5,021 | RMSE 5.1 yr (indep test) | Caucasian only | Better accuracy |
| Qi 23k clock [[qi-23k-epidermis-clock-2026]] | 2026 | Epidermis | Tape strip (non-invasive) | ~23k | Cross-val MAE 5.66 yr; multi-ethnic 4.88 yr | Multi-ethnic incl. Fitzpatrick V–VI | DHM cosmetic study context |
| Menendez Vazquez MitraSolo/MitraCluster [^menendezv2025] | 2025 | Epidermis | Tape strip (non-invasive) | MitraSolo 3,831 CpGs / MitraCluster 931 regions (14,089 CpGs) | MitraSolo MAE 4.09 / RMSE 5.25; MitraCluster MAE 4.00 / RMSE 5.23 (n=75 independent) | Multi-ethnic, all Fitzpatrick types; UK + US sites | Largest training set (n=387 train / 75 test from 590 individuals); PCA-based ElasticNet on enzymatic methyl-seq |
| Horvath 2013 [[horvath-clock-2013]] | 2013 | Pan-tissue (blood / 51 tissues) | Blood draw / biopsy | 353 | MAE ~3.6 yr | Diverse | Standard reference clock |
| PhenoAge [[phenoage-2018]] | 2018 | Blood | Blood draw | 513 | n/a (mortality-trained) | Diverse | Mortality-trained |

The [[menendez-vazquez-2025-mitrasolo-mitracluster|Menendez Vazquez 2025 clocks]] [^menendezv2025] are a notable recent competitor: they use enzymatic methyl-sequencing (NEBNext EM-seq on Illumina NovaSeq) rather than microarray, are trained on a 590-individual database (n=387 training / n=75 independent test from an n=462 development subset; 817-sample total), use a PCA-based ElasticNet architecture, achieve MAE ~4.0–4.1 yr (R² 0.88–0.89) on the independent set, and generalize across anatomical sites, sampling methodologies, and Fitzpatrick skin types. Intra-individual variation over 9 months: 1.76 yr (MitraSolo) / 1.67 yr (MitraCluster). These clocks were not available when Rodríguez-Paredes 2026 was developed but are now the primary comparators for non-invasive skin methylation clocks. #gap/needs-replication — direct head-to-head comparison of TapeLift vs MitraSolo/MitraCluster on the same cohort is not yet published.

## Intervention-Responsive Status

`intervention-responsive: partial` — The TapeLift clock is used as a comparator in Qi 2026's pilot study of dihydromyricetin (DHM) topical serum, where the TapeLift-defined epigenetic skin age showed reduction of ~2.1 yr at 8 weeks in the DHM cohort [^qi2026]. However, this is from an uncontrolled open-label n=60 cosmetic study without vehicle comparison, and the result is attributed specifically to Qi 2026's study design rather than an intrinsic property of the TapeLift clock. **No dedicated intervention RCT using TapeLift as a primary endpoint has been published as of 2026-05-19.** #gap/needs-replication

## Limitations and Gaps

1. **Caucasian-only training cohort** — Fitzpatrick I–IV only; no cross-ethnic validation in the original paper. The n=17 Qi 2026 external pilot is underpowered to establish ethnic generalizability.

2. **Forehead-only sampling site** — No other anatomical sites validated in the original paper; Menendez Vazquez 2025 showed generalization across sites, but that is a different clock with different training. Whether TapeLift accuracy holds at sun-protected vs sun-exposed sites is unknown. #gap/long-term-unknown

3. **Single-paper origin** — No independent replication of the Rodríguez-Paredes clock from outside the Lyko/Grönniger/Beiersdorf group. #gap/needs-replication

4. **No published test-retest ICC** — Reliability across repeated sampling sessions is not characterized. By comparison, DunedinPACE ICC = 0.96 and conventional pan-tissue clocks have been benchmarked extensively. #gap/long-term-unknown

5. **Cross-sectional design** — Aging effects inferred from age-stratified cross-sectional samples; no longitudinal tracking of individual methylation change in the same donors.

6. **Cancer-aging collinearity** — The clock and the TSG hypermethylation findings were developed in the same 89-sample cohort; whether these signals are mechanistically linked or merely co-trained on the same data is not resolved. #gap/no-mechanism

7. **Framing as a cancer biomarker** — The paper's primary framing is skin cancer risk / field cancerization, not aging per se. Whether TapeLift clock acceleration predicts functional aging outcomes (frailty, functional decline, mortality) is unknown. #gap/needs-replication

## Cross-References

- [[studies/rodriguez-paredes-2026-tapelift-clock]] — primary study page (R39 verified; all quantitative claims sourced from here)
- [[bormann-epidermis-clock-2016]] — R43 sister; first epidermis methylation clock; Bormann 2016 punch-biopsy approach (implicit stub — no biomarker page yet)
- [[qi-23k-epidermis-clock-2026]] — R43 sister; parallel 2026 tape-strip skin clock; provides cross-ethnic external validation of TapeLift (implicit stub — no biomarker page yet)
- [[studies/qi-2026-dhm-epigenetic-skin-aging]] — Qi 2026 study page; source of the cross-ethnic TapeLift validation claim and DHM intervention data
- [[biomarkers/horvath-clock-2013]] — pan-tissue reference clock
- [[biomarkers/phenoage-2018]] — mortality-trained clock; blood-based comparator
- [[hallmarks/epigenetic-alterations]] — hallmark context; age-associated TSG promoter hypermethylation in skin supports this hallmark
- [[phenotypes/skin-aging]] — skin-specific aging phenotype page; TapeLift + Bormann clocks are canonical skin methylation biomarkers
- [[phenotypes/cancer]] — skin cancer angle (AK → cSCC progression tracked via mitotic age and TSG hypermethylation)
- [[epidermis]] — tissue cross-reference (implicit stub)
- [[keratinocytes]] — cell-type of origin for tape-strip samples (implicit stub)
- [[frameworks/biological-age-measurement]] — cross-clock comparison MOC; TapeLift occupies the tissue-specific epidermis-only quadrant

## Footnotes

[^rodriguezparedes2026]: [[studies/rodriguez-paredes-2026-tapelift-clock]] · doi:10.1038/s41698-026-01302-7 · PMID 41593290 · PMC12948955 · n=105 enrolled (89 QC-passing; 71 train / 18 internal val; 19 independent test) · observational cross-sectional · Caucasian Fitzpatrick I–IV · elastic-net clock: 157 CpGs, indep val RMSE 6.2 yr; PC clock: 5,021 CpGs, indep val RMSE 5.1 yr · forehead tape-strip sampling · npj Precision Oncology 2026 · gold OA CC BY 4.0 · local PDF available

[^bormann2016]: doi:10.1111/acel.12470 · Bormann F, Rodríguez-Paredes M et al. · Aging Cell · 2016 · observational · n=108 (white females, ages 18–78) · first DNA methylation clock for human epidermis; punch biopsy (invasive); foundational training dataset for Qi 2026 23k clock · local PDF available in a local paper archive

[^qi2026]: [[studies/qi-2026-dhm-epigenetic-skin-aging]] · doi:10.1007/s13555-026-01764-4 · n=77 (17 multi-ethnic pilot + 60 DHM open-label) · observational pilot + open-label single-cohort · 2026 · source of cross-ethnic TapeLift external validation (n=17, Fitzpatrick I–VI; no detectable ethnic bias reported); DHM serum reduces epidermal DNAm age ~2.1 yr at 8 wk (no vehicle control) · model: human, multi-ethnic Brazilian cohort

[^higginschen2022]: doi:10.1038/s43587-022-00248-2 · Higgins-Chen A et al. · Nature Aging · 2022 · methods/review · PC-based epigenetic clocks substantially improve test-retest reliability vs conventional elastic-net clocks; the TapeLift PC clock follows this protocol · archive: pending download (green OA via PMC9586209)

[^menendezv2025]: [[biomarkers/menendez-vazquez-2025-mitrasolo-mitracluster]] · doi:10.1038/s41514-025-00314-0 · PMC12820032 · Menendez Vazquez A et al. (BWH/Harvard Medical School) · *npj Aging* 2025 · observational · n=387 train / n=75 independent test from 590-individual / 817-sample database; ages 18–90 yr; all Fitzpatrick types and ethnicities; UK + US sites · PCA-based ElasticNet on NEBNext EM-seq (Illumina NovaSeq) · MitraSolo (3,831 CpGs) MAE 4.09 / RMSE 5.25 / R² 0.88; MitraCluster (931 regions / 14,089 CpGs) MAE 4.00 / RMSE 5.23 / R² 0.89; intra-individual variation 1.76 / 1.67 yr over 9 months (n=76) · archive: downloaded (PMC OA)
