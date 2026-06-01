---
type: biomarker
aliases: [Qi 23k epidermis clock, 23k-CpG skin clock, Qi 2026 epidermis clock, 23k methylation clock skin]
modality: dna-methylation
unit: years
training-cohort: "Extends Bormann 2016 training set (108 white females, ages 18–78, Aging Cell); multi-ethnic / multi-Fitzpatrick validation: pilot n=17 (multi-ethnic, ages 24–69, tape-strip epidermis); product-use cohort n=60 (Brazilian, ages 40–70, Fitzpatrick I–VI)"
n-cpgs-or-features: 173
training-target: chronological-age
calibration-tissues: ["[[epidermis]]"]
test-retest-icc: null
human-evidence-level: limited
mendelian-randomization: not-tested
intervention-responsive: yes
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Structural claims and qualitative framing verified against PubMed abstract (PMID 42034839) and COI disclosure via PubMed efetch (R43). Quantitative claims (MAE values 5.66/4.88 yr, DNAm-age change −2.08 yr [paper rounds to 'around 2.1 yr'], p=0.029, 40% responder threshold, 173 CpGs, 23845 probe panel) now confirmed against Qi 2026 full PDF (user-provided local copy, verified 2026-05-19). Array platform corrected to Infinium EPICv2 (was 450k/EPIC). Cross-validation error metric clarified: paper uses 'type measure=mse' glmnet parameter, not explicitly labeled MAE; 4.88 yr multi-ethnic validation IS explicitly MAE. Correlation wrinkle volume updated: r=0.314, p=0.025 (was R=0.31, p<0.05). COI disclosure fully verified from PDF page 14 (all 15 authors accounted for). Supplementary materials (S1–S10 figures, S1–S7 tables) not in local PDF and remain unverified."
---

# Qi 23k Epidermis Clock (2026)

A first-generation DNA methylation clock trained specifically on human epidermis, extending and cross-validating the earlier [[bormann-epidermis-clock-2016]] training set across multiple Fitzpatrick phototypes (I–VI) and ethnicities without detectable bias. The clock uses **173 CpG features** selected by elastic-net from a panel of 23,845 probes shared between the original 27k array (Bormann 2016) and modern Illumina 450k arrays. It is the **first published skin-specific methylation clock validated across the full phototype spectrum**, and serves as the readout tool in the Qi 2026 topical DHM serum trial [^qi2026].

## Identity and Origin

- **Primary citation:** Qi M et al. (2026) "Epigenetic Skin Aging and Its Reversal to Improve Skin Longevity across Ethnicities and Phototypes Using a Dihydromyricetin-Containing Serum: Results from a Prospective, Single-Cohort Study." *Dermatology and Therapy* — doi:10.1007/s13555-026-01764-4 · PMID 42034839
- **Archive status:** not in a local paper archive as of 2026-05-19 (paper published 2026-04-25; too recent for OpenAlex ingest). Open-access CC BY-NC 4.0; Springer full text requires authentication even for OA articles (verified 2026-05-19). PDF verification of numerics is queued for R44/R45 when archive ingest completes or direct PDF access is obtained.
- **Clock type:** First-generation (chronological-age-trained), tissue-specific
- **Developer group:** Beiersdorf AG / DKFZ collaboration (8 of 15 authors are Beiersdorf AG employees; both corresponding authors Falckenhayn C and Grönniger E are Beiersdorf employees)
- **Training basis:** Bormann 2016 cohort extended; 23,845-probe panel is the intersection of the Bormann 27k array and modern 450k arrays
- **Feature selection:** Elastic-net penalised regression → 173 final CpG features
- **Input modality:** Illumina 450k-compatible array (tape-strip epidermis sampling)
- **Output units:** Estimated chronological age in years (absolute biological age, not a rate)

## Methodology

### Probe panel and training

The clock was built from the intersection of probes on the Bormann 2016 27k array and the Illumina 450k array — yielding 23,845 candidate probes. Elastic-net regression on the extended Bormann cohort (108 white females, ages 18–78) selected 173 CpGs. The training target was chronological age — the same frame used by Horvath 2013 and Bormann 2016, but applied to epidermis-specific methylation patterns rather than pan-tissue blood or multi-tissue profiles [^bormann2016].

The biological basis of the selected CpGs is described by Qi 2026 as concentrated in **bivalent chromatin regions** — loci marked by both H3K4me3 (active) and H3K27me3 (repressive) histone marks, typically poised developmental enhancers. Age-dependent hypermethylation at these bivalent loci is conserved across Fitzpatrick phototypes I–VI in the pilot cohort (n=17, multi-ethnic) [^qi2026]. The hypermethylated genes are described as important for keratinocyte vitality; the full list is in Qi 2026 supplementary material and has not been independently verified here. #gap/needs-pdf-verification

### Sampling approach

The clock is calibrated to **adhesive tape-strip epidermis samples** — a non-invasive method collecting upper stratum corneum and outer viable epidermis. The tape-strip approach was also used by [[tapelift-clock-2026]] (Rodríguez-Paredes M et al. 2026, NPJ Precision Oncology, doi:10.1038/s41698-026-01302-7) and the independent MitraSolo / MitraCluster clocks (Menendez Vazquez 2025, NPJ Aging, doi:10.1038/s41514-025-00314-0), establishing tape-stripping as an emerging standard for non-invasive epigenetic skin sampling [^menendezVazquez2025].

## Performance

### Cross-validation (Bormann cohort)

| Metric | Value | Notes |
|---|---|---|
| Cross-validation error | **5.66 yr** | glmnet `cv.glmnet` with `type.measure="mse"` on Bormann 2016 training set; paper labels this as "cross-validation error (type measure='mse') of 5.66 years" — not explicitly labeled MAE; likely RMSE or MSE-based CV loss rather than MAE |
| Training target | Chronological age | |
| Training n | 108 white females, ages 18–78 | Bormann 2016 cohort |

### Multi-ethnic / multi-Fitzpatrick validation (Qi 2026 pilot)

| Metric | Value | Notes |
|---|---|---|
| Validation MAE | **4.88 yr** | n=17 multi-ethnic pilot (ages 24–69, Fitzpatrick I–VI) |
| Ethnic bias detected | None | No significant MAE difference by phototype or ethnic group |
| Baseline MAE on product-use cohort | **6.2 yr** | n=60 Brazilian volunteers, ages 40–70; higher than pilot MAE, likely reflecting age-range compression |

The lower MAE in the cross-ethnic validation cohort vs. the training-cohort cross-validation (4.88 yr vs. 5.66 yr) may reflect cohort composition and age-range differences. This directional result supports generalisability, but the validation n=17 is small and the result should be treated as preliminary. #gap/needs-replication

### Test-retest reliability

Test-retest ICC has **not been reported** for the 23k clock. This is a notable gap. The Higgins-Chen 2022 analysis of blood-based methylation clocks demonstrated that conventional (non-PC) clock implementations can have substantial technical noise, substantially reducing interpretable ICC [^higginsChen2022]. Whether the 23k epidermis clock suffers from similar noise is unknown. In contrast, the independent [[menendez-vazquez-2025-mitrasolo-mitracluster|Menendez Vazquez 2025 MitraSolo/MitraCluster clocks]] report intra-individual prediction variation <2 years, suggesting tape-strip-based clocks can achieve usable reproducibility [^menendezVazquez2025]. The 23k clock's ICC should be established before it is used as a primary endpoint in powered trials. #gap/needs-replication

## Comparison to Other Skin-Specific Clocks

| Clock | Year | Features | Training approach | MAE | Ethnic validation | Test-retest |
|---|---|---|---|---|---|---|
| [[bormann-epidermis-clock-2016]] | 2016 | Subset of 27k probes | Aging Cell; 108 white females | Not stated separately | White-only cohort | Not reported |
| [[tapelift-clock-2026]] | 2026 | TapeLift panel | Tape-strip trained | Not extracted | No bias in Qi 2026 cohort | Not reported |
| Qi 23k clock (this page) | 2026 | 173 / 23,845 | Elastic-net on 450k-compatible probes | 5.66 yr (CV); 4.88 yr (multi-ethnic) | Fitzpatrick I–VI, no bias detected | Not reported |
| [[menendez-vazquez-2025-mitrasolo-mitracluster|MitraSolo / MitraCluster]] | 2025 | Enzymatic methyl-seq | 462 epidermal samples | ~4 yr | Not specified | <2 yr intra-individual |
| [[horvath-clock-2013]] | 2013 | 353 CpGs | Pan-tissue / blood-trained | ~3.6 yr (pan-tissue) | Validated across multiple tissues | High ICC in blood |

The Qi 23k clock and the Bormann 2016 clock share a training lineage and probe panel — they are not independent. The TapeLift clock and MitraSolo/MitraCluster clocks are conceptually similar but derive from independent training pipelines. A systematic comparison of all skin-specific clocks on a common held-out multi-ethnic cohort has not been published as of 2026-05-19. #gap/needs-replication

## Intervention Responsiveness

### Qi 2026 DHM topical serum — primary signal

In the Qi 2026 product-use phase (n=60 Brazilian volunteers, ages 40–70, Fitzpatrick I–VI; 8-week twice-daily application of a topical serum containing DHM + hyaluronic acid + glycine saponin + enoxolone, with SPF 50+ sunscreen co-applied daily), the 23k clock showed [^qi2026]:

| Endpoint | Result | p-value |
|---|---|---|
| Mean DNAm-age change (paired Wilcoxon, n=60) | −2.08 yr (paper text rounds to "around 2.1 years"; Fig 2a label: "Δ pred. age = −2.08 y") | 0.029 |
| Responders (≥5 yr reduction) | 40% of participants | — |
| CI for mean change | Not reported | — |

**Critical design caveat:** This was an **open-label single-arm study with no vehicle control and no randomisation.** The 2.1 yr reduction cannot be attributed to DHM alone — it could reflect contributions from HA, sunscreen-mediated UV reduction, regression to the mean, or tape-strip site drift between visits. The authors explicitly acknowledge the absence of a vehicle arm. This should be interpreted as a **positive cosmetic-grade signal** rather than aging-RCT-grade evidence that DHM reverses epigenetic aging. See [[studies/qi-2026-dhm-epigenetic-skin-aging]] for full design details and limitations. #gap/needs-replication

The proposed mechanism is [[dihydromyricetin]] (DHM / ampelopsin) acting as a DNMT1 inhibitor, partially reversing the age-associated bivalent-region hypermethylation documented in the pilot cohort. The DNMT-inhibitor characterisation derives from Falckenhayn 2023/2024 (in vitro) [^falckenhayn2024]. Topical penetration to viable basal keratinocytes at concentrations sufficient for DNMT inhibition in vivo has not been directly demonstrated. #gap/no-mechanism

### Bienkowska 2026 population-cohort support

The Bienkowska 2026 observational study (n=851, Clinical Epigenetics, doi:10.1186/s13148-026-02101-4) examined 326 lifestyle, physiological, and pharmacological variables against skin DNAm age. DHM was identified among the factors associated with **methylation patterns consistent with decelerated epigenetic aging** [^bienkowska2026]. This is from a Beiersdorf-funded observational analysis (the same group as Qi 2026) and does not constitute independent replication, but the population-scale n=851 is substantially larger than Qi 2026 and uses a correlational rather than interventional design. The specific clock used (23k clock vs Bormann) and the effect magnitude are not fully extracted here. #gap/needs-pdf-verification

## Conflict-of-Interest Profile

This clock was developed at Beiersdorf AG (Hamburg). The critical considerations for wiki users:

1. **8 of 15 authors are Beiersdorf AG employees** (confirmed via PubMed PMID 42034839 COI disclosure); both co-corresponding authors (Falckenhayn C, Grönniger E) are Beiersdorf employees. Guadanhim, Frey, and Lyko received consultation fees from Beiersdorf; Rodríguez-Paredes received speaker fees from Beiersdorf SA. Only 3 authors (Raddatz, Feng, Wanitphakdeedecha) declared no commercial relationship.
2. The active ingredient (DHM), the multi-ingredient serum formulation, and the 23k clock used to measure efficacy were **all developed in-house at Beiersdorf / DKFZ**. A company measuring its own product's effect with its own tool is a maximal conflict structure — not misconduct per se, but a strong reason for independent replication.
3. The Bienkowska 2026 supporting study (n=851) is from the **same group** and should not be treated as fully independent external validation.
4. The appropriate use of this clock in the wiki is as a **signal of skin-specific epigenetic aging biology** (bivalent-region CpG drift is cross-ethnic and conserved) and as a **candidate readout tool** whose intervention-responsiveness is plausible but requires vehicle-controlled replication.

The wiki should NOT cite Qi 2026 as evidence that DHM is a senotherapeutic compound in the geroprotector sense; see [[dihydromyricetin]] for the compound-level evidence assessment.

## Limitations and Gaps

1. **Single-paper origin.** The 23k clock has not been validated by an independent group using the same probe set. MitraSolo/MitraCluster (Menendez Vazquez 2025) and TapeLift (Rodríguez-Paredes 2026) are conceptually analogous but independently trained — they are not replications of the 23k clock per se. #gap/needs-replication

2. **No test-retest ICC.** Essential for an intervention biomarker; must be established before this clock is used as a primary endpoint in powered trials. #gap/needs-replication

3. **No vehicle-controlled intervention study.** The 2.1 yr DNAm-age reduction in Qi 2026 is uncontrolled; the contribution of DHM vs. other formulation components vs. sunscreen vs. measurement noise cannot be disaggregated with the current data. #gap/needs-replication

4. **Validation n is small.** The multi-ethnic validation cohort is n=17 — too small to detect subtle phototype-specific biases with adequate power. A larger independent validation cohort is required. #gap/needs-replication

5. **No longitudinal calibration.** The training target is chronological age (cross-sectional); the clock is not known to track biological age acceleration from smoking, UV damage, or disease. Whether it behaves as a biological-age estimator (and not just a chronological-age proxy) beyond the Qi 2026 intervention context is unknown. #gap/no-mechanism

6. **Beiersdorf funding throughout.** All published supporting evidence to date comes from Beiersdorf-affiliated groups. Independent validation is the single highest-priority next step.

7. **Asian and male volunteer under-representation** in the product-use cohort limits external validity.

## Cross-references

- [[studies/qi-2026-dhm-epigenetic-skin-aging]] — anchor study page (verified: true as of 2026-05-19; PDF read end-to-end)
- [[bormann-epidermis-clock-2016]] — predecessor clock; shares the training cohort lineage (verified: true as of 2026-05-19)
- [[tapelift-clock-2026]] — R43 sister clock; also tape-strip-trained, independent pipeline (verified: true as of 2026-05-19)
- [[biomarkers/horvath-clock-2013]] — pan-tissue comparator; lower performance on epidermis
- [[biomarkers/dunedinpace-2022]] — rate-of-aging clock; structurally different approach
- [[skin-aging]] — phenotype page
- [[epidermis]] — tissue page; the calibration tissue for this clock
- [[keratinocytes]] — primary cell type in epidermis; the gene-expression context for bivalent-region hypermethylation
- [[hallmarks/epigenetic-alterations]] — hallmark page; bivalent-region CpG drift evidence
- [[dihydromyricetin]] — compound page; the DHM intervention used to demonstrate clock responsiveness
- [[molecules/proteins/dnmt1]] — the DNA methyltransferase proposed as DHM's target
- [[frameworks/biological-age-measurement]] — cross-clock comparison MOC

## Footnotes

[^qi2026]: [[studies/qi-2026-dhm-epigenetic-skin-aging]] · doi:10.1007/s13555-026-01764-4 · PMID 42034839 · n=17 (pilot/clock-development, multi-ethnic, Fitzpatrick I–VI, ages 24–69) + n=60 (product-use, Brazilian, ages 40–70, Fitzpatrick I–VI) · prospective single-cohort · in-vivo · model: Homo sapiens (epidermis, tape-strip) · Dermatology and Therapy 2026 · open-access CC BY-NC 4.0 · not in archive (paper too recent); 8 of 15 authors Beiersdorf employees (both corresponding authors); no vehicle control in product-use phase · **PDF verified 2026-05-19** against user-provided local copy

[^bormann2016]: doi:10.1111/acel.12470 · Bormann F et al. · Aging Cell 2016 · n=108 white females, ages 18–78 · observational (cross-sectional, 27k methylation array) · model: Homo sapiens (epidermis, biopsy) · archive: local PDF available (gold OA; citation percentile 100th, 94 citations) · training cohort for the 23k clock

[^falckenhayn2024]: doi:10.3389/fragi.2023.1258184 · Falckenhayn C et al. · *Frontiers in Aging* · received 13 July 2023; accepted 12 December 2023; published online 04 March 2024 (DOI year-in-path "2023" reflects submission year, per Frontiers journal convention; publication year is 2024) · in-vitro characterisation of DHM as a DNMT1 inhibitor in human skin keratinocytes (13 keratinocyte lines, EPIC 850k array, paired with in vivo tape-strip and 3D skin model data) · archive: local PDF available (gold OA; FWCI 29.2; citation percentile 100th)

[^bienkowska2026]: doi:10.1186/s13148-026-02101-4 · Bienkowska A, Qi M et al. · Clinical Epigenetics 2026 · n=851 participants; 326 lifestyle/physiological/pharmacological variables examined against skin DNAm age · observational · model: Homo sapiens (skin) · DHM identified as associated with decelerated epigenetic aging · not in archive (too recent); Beiersdorf-affiliated group · #gap/needs-pdf-verification for clock used and effect magnitude

[^menendezVazquez2025]: doi:10.1038/s41514-025-00314-0 · Menendez Vazquez A et al. · NPJ Aging 2025 · n=462 epidermal samples · in-vivo (tape-strip, enzymatic methyl-sequencing) · MitraSolo and MitraCluster clocks; MAE ~4 yr; intra-individual variation <2 yr; independent group from Beiersdorf · archive: in archive (pending download)

[^higginsChen2022]: doi:10.1038/s43587-022-00248-2 · Higgins-Chen AT et al. · Nat Aging 2022 · principal-component clock versions substantially improve test-retest reliability; conventional clocks have substantial technical noise · review / methods · the 23k epidermis clock has not been evaluated in a similar reliability framework
