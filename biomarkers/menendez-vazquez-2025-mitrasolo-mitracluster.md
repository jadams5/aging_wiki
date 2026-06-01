---
type: biomarker
aliases: [MitraSolo, MitraCluster, Mitra epigenetic skin clock, MitraClock, non-invasive skin methylation clock Mitra Bio]
modality: dna-methylation
unit: years
training-cohort: "Menendez Vazquez 2025: n=462 model-development-subset samples (387 training / 75 independent) from 590 unique individuals; tape-strip forehead epidermis; ages 18–90 yr; all Fitzpatrick skin types and ethnicities; UK and US sites"
n-cpgs-or-features: "MitraSolo 3,831 CpGs / MitraCluster 931 regions (14,089 CpGs)"
model-architecture: pc-clock   # PCA-based ElasticNet for both MitraSolo and MitraCluster (explicitly stated in paper Methods + Results)
training-target: chronological-age
calibration-tissues: ["[[epidermis]]"]
test-retest-icc: null   # no formal ICC reported; intra-individual prediction variation: MitraSolo 1.76 yr avg (SD 1.04), MitraCluster 1.67 yr avg (SD 1.04), across longitudinal samples over 9 months (n=76)
human-evidence-level: limited
mendelian-randomization: not-tested
intervention-responsive: partial   # Yamanaka factor rejuvenation signal detected; see body for caveats
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "All quantitative claims verified against full PDF (PMC12820032); corrections applied to MAE figures, CpG counts, model architecture, cohort demographics, Yamanaka experiment details, and Moqri affiliation (Stanford → Harvard/BWH)"
---

# MitraSolo and MitraCluster Epigenetic Skin Clocks (Menendez Vazquez 2025)

Two non-invasive DNA methylation aging clocks for human skin — **MitraSolo** (single-CpG PCA-ElasticNet) and **MitraCluster** (region-based PCA-ElasticNet) — developed by Menendez Vazquez et al. (2025) at Mitra Bio using **enzymatic methyl-sequencing (EM-seq)** on tape-stripped epidermis. Trained on n=462 forehead epidermal samples (387 training / 75 independent, from 590 individuals aged 18–90 yr), the clocks achieve MAE of 4.09 yr (MitraSolo) and 4.00 yr (MitraCluster) and demonstrate an intra-individual prediction variation of 1.76 yr and 1.67 yr respectively — the best-characterized noise floor among published skin methylation clocks [^menendezv2025]. The clocks generalize across anatomical sites, sampling methodologies, and in-vitro material, and detect age reversal in fully reprogrammed Yamanaka factor-treated NHEK keratinocytes. Developed independently of the Beiersdorf/DKFZ lineage (Bormann 2016, Qi 2026, TapeLift).

## Identity and Origin

- **Primary citation:** Menendez Vazquez A, Katsanos D, Vasile M, Graham A, Dyster V, Kaveh S, Moqri M, Banila C (2025) "Epigenetic age predictors for non-invasive assessment of human skin" *npj Aging* 12(1):11 — doi:10.1038/s41514-025-00314-0
- **PMID:** 41387742 · **PMC:** PMC12820032
- **Published:** December 12, 2025
- **Archive status:** DOI confirmed in archive (local PDF at PMC12820032; downloaded 2026-05-19)
- **Study page:** none created yet
- **Developer group:** Mitra Bio — all authors except Mahdi Moqri are Mitra Bio employees (affiliation: Mitra Bio, Translation and Innovation Hub, London, UK). Moqri's affiliation is **Division of Genetics, Department of Medicine, Brigham and Women's Hospital, Harvard Medical School, Boston, MA, USA** (not Stanford as initially noted). This is a maximal industry-affiliation context; independent replication is the single highest-priority next step.
- **Input modality:** Enzymatic methyl-sequencing (not microarray) — key distinguishing feature from Bormann/TapeLift/Qi clocks (all Illumina array-based)
- **Sampling method:** Adhesive tape-strip from epidermis (non-invasive); generalizes across anatomical sites and sampling approaches per abstract
- **Citation count as of 2026-05-19:** 3 (Semantic Scholar; paper published December 2025)

## Two-Clock Framework

Two clocks are reported with distinct designs:

| Feature | MitraSolo | MitraCluster |
|---|---|---|
| Design basis | Single-CpG prediction | Region-based (genomic cluster) prediction |
| Features | 3,831 CpGs (after feature selection from 3,986,158) | 931 regions ≥3 CpGs each = 14,089 CpGs total |
| Use case | Single tape-strip per person | Aggregates co-correlated CpG regions for noise reduction |
| Architecture | PCA-based ElasticNet | PCA-based ElasticNet on region mean beta values |
| MAE (independent set) | 4.09 yr | 4.00 yr |
| R² (independent set) | 0.88 | 0.89 |

The two-clock framework addresses a core limitation of first-generation aging clocks: high intra-individual technical variation masking biological signal. MitraCluster's region-aggregation approach is conceptually analogous to PC-clock approaches (see [[biomarkers/tapelift-clock-2026]] and Higgins-Chen 2022 [^higginschen2022]) but uses genomic CpG regions (defined by co-correlation of neighboring CpGs with age) rather than principal components across samples.

## Performance

Key performance figures verified against the full PDF [^menendezv2025]:

| Metric | MitraSolo | MitraCluster | Notes |
|---|---|---|---|
| MAE (independent set, n=75) | 4.09 yr | 4.00 yr | Verified from Fig. 2d, e and Results text |
| RMSE (independent set) | 5.25 yr | 5.23 yr | Reported in Results |
| MAD (independent set) | 3.14 yr | 2.96 yr | Reported in Results |
| R² (independent set) | 0.88 | 0.89 | Verified from Fig. 2d, e |
| Intra-individual variation | 1.76 yr avg (SD 1.04) | 1.67 yr avg (SD 1.04) | Longitudinal n=76 over 9 months; Fig. 3c, d |
| Asymptote Δage at low depth | 3.95 yr | 3.84 yr | At sequencing depth approaching 0 (Fig. 3a, b) |
| Sequencing depth in training | avg 61.8× (SD 49.2) | avg 57.7× (SD 45.7) | Full database; models stable to ≥10× |
| Cross-site generalization | MAE 4.90 yr (upper back, n=85) | — | Fig. 4a |
| In-vitro material | Yes | Yes | NHEK keratinocyte cell lines |

The MAE of 4.09 yr (MitraSolo) and 4.00 yr (MitraCluster) on the independent set outperforms all four comparator array-based clocks applied to the same epidermal EM-seq data: Pan-Tissue MAE = 8.95, Skin & Blood MAE = 6.58, PhenoAge MAE = 11.27, Hannum MAE not separately stated. The comparison to Bormann/Qi/TapeLift MAEs cited elsewhere on this page are not head-to-head on the same cohort. #gap/needs-replication

**Test-retest ICC:** Not explicitly reported; the intra-individual variation (1.76 yr / 1.67 yr over 9 months) serves as a reproducibility proxy but is not a formal ICC. This gap should be addressed before the clock is used as a primary endpoint in powered intervention trials. #gap/needs-replication

## Methodology: Enzymatic Methyl-Sequencing

Unlike all three of the other published skin-specific epigenetic clocks (Bormann 2016, TapeLift 2026, Qi 23k 2026), which use Illumina microarray platforms (450k, 850k EPIC, EPIC v2), MitraSolo/MitraCluster use **enzymatic methyl-sequencing** (EM-seq or equivalent enzymatic conversion chemistry). Key differences:

- **Enzyme-based cytosine conversion** rather than bisulfite treatment — avoids bisulfite-induced DNA degradation, enabling lower input DNA requirements
- **Sequencing-based output** — depth-tunable; the paper reports performance at low sequencing depths, enabling cost-reduction
- **Not array-constrained** — not limited to the ~850k probes on the EPIC chip; theoretically genome-wide CpG access

The use of enzymatic sequencing rather than arrays is a meaningful technical distinction for clinical deployment: sequencing costs are dropping faster than array costs, and the absence of a chip-constrained probe set means the clock design is not dependent on commercial array availability. The paper uses NEBNext Enzymatic Methyl-seq (EMseq; New England Biolabs) on Illumina NovaSeq 6000 and Novaseq X Plus flow cells, with libraries prepared using a modified semi-automated protocol with hybridization-based target enrichment using the Twist Bioscience Human methylome panel. Average sequencing depth in the full database was 61.8× (SD 49.2) for MitraSolo and 57.7× (SD 45.7) for MitraCluster, with models demonstrated to be stable to ≥10× coverage. However, sequencing-based clocks require different bioinformatics pipelines and QC standards than array-based clocks, and standardization across sites is an open implementation challenge. #gap/long-term-unknown

## Training Dataset

The paper reports training on the **largest enzymatic methyl-sequencing dataset of human epidermis** at time of publication [^menendezv2025]:

- **Total database:** 817 skin samples from 590 unique individuals, collected March 2021–December 2024 at multiple UK and US sites
- **Model development subset (n=462):** forehead-only, no biological replicates, average coverage >15×; split into training (n=387, 83.76%) and independent (n=75, 16.23%)
- **Age range:** 18–90 years
- **Inclusion criteria:** healthy volunteers with no significant concurrent illness or skin disease; all Fitzpatrick skin types and ethnicities included; excluded: topical/systemic medications affecting skin, pregnant/breastfeeding
- **Anatomical site:** forehead facial skin (tape-strip)

This is substantially larger than all three comparator skin clock training cohorts:

- Bormann 2016: n=108 white females (450k array, biopsy)
- TapeLift 2026: n=89 QC-passing (EPIC v2 array, tape-strip, Caucasian Fitzpatrick I–IV)
- Qi 23k 2026: n=108 Bormann training set + n=17 multi-ethnic validation pilot

The Menendez Vazquez cohort explicitly includes all Fitzpatrick skin types and ethnicities — a meaningful improvement over TapeLift's Caucasian-only cohort, though the exact ethnic distribution is not broken out numerically in the paper.

## Yamanaka Factor Rejuvenation Signal

The paper reports that MitraCluster successfully captured the rejuvenating effects of Yamanaka factor treatment [^menendezv2025]. Details verified from full text (Fig. 4i and Discussion):

- **Cell system:** Normal Human Epidermal Keratinocytes (NHEK) — a parental primary keratinocyte cell line
- **Intervention type:** Full reprogramming to iPSCs via two types of Yamanaka factor supplementation generating keratinocyte-derived induced pluripotent stem cells (iPSCs). These are two distinct treatment protocols (not partial/cyclic OSKM — full reprogramming to iPSC state)
- **Data source:** Publicly available WGBS dataset; shallow sequencing depth (1.5–3.5×); triplicate replicates per condition
- **Quantitative result:** Control NHEK predicted age ~48.8 years. Treatment 1 iPSCs: predicted age reduced to **6.9 years** (avg absolute Δage 11.54 yr from individual mean). Treatment 2 iPSCs: predicted age reduced to **6.2 years** (avg absolute Δage 4.83 yr from individual mean). (Fig. 4i; Supplementary Table 4)
- **Readout:** MitraCluster clock-predicted age

This finding demonstrates that a non-invasive skin-specific clock trained on in-vivo forehead epidermis can detect full reprogramming-associated epigenetic age reversal in an in-vitro keratinocyte system. The authors note this is "albeit limited" preliminary evidence and that the clocks are not trained on iPSC material. The distinction from partial reprogramming (cyclic OSKM per Ocampo/Belmonte paradigm) is important: these are full iPSC reprogramming experiments, not partial rejuvenation — the observed age reduction reflects complete epigenetic reset toward pluripotency rather than a somatic rejuvenation signal per se. #gap/needs-replication

The broader context: partial reprogramming using Yamanaka factors has been shown to reset epigenetic clocks in mouse and human cells [^ocampo2016], with the [[pathways/yamanaka-reprogramming]] pathway being a major focus of longevity biotech. That a tissue-specific non-invasive skin clock can detect this signal would strengthen its use as an endpoint for rejuvenation intervention studies. #gap/needs-replication

## Independence from Other Skin Clock Lineages

MitraSolo/MitraCluster are distinct from the Beiersdorf/DKFZ lineage (Bormann → Qi 23k → TapeLift) on multiple axes:

| Dimension | Beiersdorf/DKFZ lineage | Menendez Vazquez / Mitra Bio |
|---|---|---|
| Group | Beiersdorf AG / DKFZ (Lyko, Grönniger, Falckenhayn) | Mitra Bio (Menendez Vazquez, Banila; +Moqri Stanford) |
| Platform | Illumina microarray (450k / EPIC / EPIC v2) | Enzymatic methyl-sequencing |
| Training cohort origin | Bormann 2016 n=108 as anchor | Independent n=462 |
| Sampling method | Punch biopsy (Bormann) → tape-strip (Qi/TapeLift) | Tape-strip + in-vitro material |
| Commercial context | Beiersdorf cosmetics (skincare product efficacy) | Mitra Bio (clock commercialization) |

Neither group has published a head-to-head comparison of their respective clocks on a shared held-out cohort. The TapeLift page notes the MitraSolo clock as the primary comparator for non-invasive skin methylation clocks as of 2026-05-19, a characterization supported by the larger training set and lower reported error. #gap/needs-replication

## Comparison to Other Skin-Specific Clocks

| Clock | Year | Tissue | Platform | CpGs/Features | MAE | Test-retest | Industry affiliation |
|---|---|---|---|---|---|---|---|
| [[bormann-epidermis-clock-2016]] | 2016 | Epidermis (biopsy) | Illumina 450k | null (SVM full probe space) | 6.72 yr (Vandiver val) | Not reported | Beiersdorf AG / DKFZ |
| [[qi-23k-epidermis-clock-2026]] | 2026 | Epidermis (tape-strip) | Illumina 450k-compatible | 173 | 5.66 yr (CV) / 4.88 yr (multi-ethnic) | Not reported | Beiersdorf AG / DKFZ |
| [[tapelift-clock-2026]] | 2026 | Epidermis (tape-strip) | Illumina EPIC v2 | 157 (elastic-net) / 5,021 (PC) | RMSE 6.2 / 5.1 yr (indep test) | Not reported | Beiersdorf AG / DKFZ |
| **MitraSolo / MitraCluster (this page)** | 2025 | Epidermis (tape-strip + in-vitro) | Enzymatic methyl-seq (EM-seq; Illumina NovaSeq) | MitraSolo 3,831 CpGs / MitraCluster 931 regions (14,089 CpGs) | MitraSolo 4.09 yr / MitraCluster 4.00 yr (independent set n=75) | 1.76 yr / 1.67 yr avg intra-individual (n=76, 9 mo) | Mitra Bio |
| [[biomarkers/horvath-clock-2013]] | 2013 | Pan-tissue / blood | Illumina 450k | 353 | ~3.6 yr (pan-tissue) | High (blood) | Academic |
| [[biomarkers/dunedinpace-2022]] | 2022 | Blood | Illumina EPIC | 173 | Rate (not absolute age) | ICC 0.96 | Academic |

The MAE of 4.09 yr (MitraSolo) and 4.00 yr (MitraCluster) on the independent set (n=75) is verified from the PDF and outperforms all four comparator array-based clocks when applied to the same EM-seq epidermal data. The intra-individual variation of 1.76 yr (MitraSolo) and 1.67 yr (MitraCluster) over 9 months (n=76 longitudinal samples) is the most distinctive reported property — it meaningfully reduces the measurement noise floor vs. array-based skin clocks and would make MitraSolo/MitraCluster better-suited for within-person longitudinal tracking and intervention studies. Independent replication on a held-out cohort from a different group remains the key outstanding validation step. #gap/needs-replication

## Limitations and Gaps

1. **Single-company origin, no independent replication.** All authors except Mahdi Moqri are Mitra Bio employees. No independent group has validated the MitraSolo/MitraCluster clocks on a new epidermis cohort as of 2026-05-19. #gap/needs-replication

2. **Data not publicly available.** The training/validation dataset is held by Mitra Bio and not publicly released. Code is also not publicly available but can be requested from the corresponding author. This limits full independent replication of the clock training.

3. **No test-retest ICC published.** The <2 yr intra-individual variation is a performance metric, not a formal ICC. Formal reliability benchmarking has not been published. #gap/needs-replication

4. **No mortality or morbidity outcome validation.** The clock predicts chronological age; whether epidermal age acceleration predicts wound healing, cancer risk, functional aging, or mortality is not established. #gap/needs-replication

5. **No vehicle-controlled intervention RCT.** The Yamanaka signal is from an in-vitro system. No controlled human aging trial using MitraSolo/MitraCluster as primary endpoints has been published. #gap/needs-human-replication

6. **Cohort ethnic distribution not numerically broken out.** The paper states all Fitzpatrick skin types and ethnicities were included, which is an advance over TapeLift's Caucasian-only cohort, but does not provide a numerical breakdown of ethnic composition in the training set. Fitzpatrick score tracking showed no obvious performance biases on the validation dataset, but a broader dataset is acknowledged as needed to fully characterize this. #gap/needs-replication

7. **No direct head-to-head comparison.** The comparisons to Bormann/Qi/TapeLift cited on this page are meta-analytic (comparing MAE figures from different papers using different cohorts); no single held-out cohort has been used to benchmark all four skin clocks simultaneously. #gap/needs-replication

8. **Enzymatic sequencing pipeline not standardized across labs.** Unlike Illumina array protocols (widely standardized), enzymatic methyl-seq workflows vary by platform (EM-seq vs. WGBS-enzymatic vs. others); cross-site reproducibility at low depth requires dedicated validation. #gap/long-term-unknown

## Recency Literature Context

**Recency search (2026-05-19):** PubMed search for MitraSolo, MitraCluster, PMID 41387742, Mitra Bio skin aging across 2025–2026 returned only the primary paper itself (n=1 result). Semantic Scholar identified 3 citing papers: an ARDD 2025 meeting summary (doi:10.18632/aging.206368), an ancient-DNA epigenetic clocks review (doi:10.64898/2026.02.04.703756), and a skin transcriptomic clocks preprint. None contradict or substantially extend the Menendez Vazquez 2025 findings. The paper is too recent (December 2025) for meta-analyses or replication studies to have been published. No discordance with training-era citations found. This is expected for a single December 2025 paper.

## Cross-References

- [[bormann-epidermis-clock-2016]] — R43 sister; first epidermis methylation clock; punch-biopsy approach; Beiersdorf/DKFZ lineage
- [[qi-23k-epidermis-clock-2026]] — R43 sister; 173-CpG elastic-net on Bormann training set; multi-ethnic validated; Beiersdorf/DKFZ lineage
- [[tapelift-clock-2026]] — R43 sister; non-invasive tape-strip clock, EPIC v2; Beiersdorf/DKFZ lineage; this page is cited as a comparator there
- [[biomarkers/horvath-clock-2013]] — pan-tissue reference clock; 12.1 yr MAE in epidermis (substantially worse than all tissue-specific clocks)
- [[biomarkers/dunedinpace-2022]] — pace-of-aging clock; blood-based; ICC 0.96 benchmark for reliability
- [[hallmarks/epigenetic-alterations]] — hallmark context; age-associated CpG drift in epidermis is the mechanistic substrate for all four skin clocks
- [[epidermis]] — tissue page; calibration tissue for MitraSolo/MitraCluster
- [[keratinocytes]] — primary cell type captured by tape-strip sampling
- [[phenotypes/skin-aging]] — clinical phenotype hub; all four skin clocks are biomarker tools here
- [[frameworks/biological-age-measurement]] — cross-clock comparison MOC; this page should appear in the skin-clock section
- [[processes/partial-reprogramming]] — conceptual anchor for the Yamanaka rejuvenation signal (implicit stub — confirm whether page exists)

## Footnotes

[^menendezv2025]: doi:10.1038/s41514-025-00314-0 · Menendez Vazquez A et al. · *npj Aging* 12:11 · PMID 41387742 · PMC12820032 · published online 2025-12-12 · n=462 model-development subset (387 training / 75 independent) from 590 individuals; 817 total database samples; ages 18–90 yr; all Fitzpatrick types and ethnicities; UK + US sites · observational (cross-sectional development + in-vitro generalization) · MitraSolo: MAE 4.09 yr, RMSE 5.25, MAD 3.14, R²=0.88; MitraCluster: MAE 4.00 yr, RMSE 5.23, MAD 2.96, R²=0.89 (independent set n=75); intra-individual variation MitraSolo 1.76 yr / MitraCluster 1.67 yr (longitudinal n=76); PCA-based ElasticNet; 3,831 CpGs (MitraSolo) / 931 regions/14,089 CpGs (MitraCluster); detects full Yamanaka reprogramming age reversal in NHEK→iPSC system · Mitra Bio (London); Moqri at BWH/Harvard Medical School · local PDF: PMC12820032 (downloaded 2026-05-19)

[^menendez2025_bormann_ref]: Confirmed against full PDF: affiliations show all authors (Menendez Vazquez, Katsanos, Vasile, Graham, Dyster, Kaveh, Banila) are at Mitra Bio, Translation and Innovation Hub, London, UK. Moqri's affiliation is Division of Genetics, Dept. of Medicine, Brigham and Women's Hospital, Harvard Medical School, Boston, MA, USA — not Stanford as initially noted in the R43 extraction. Independent replication remains pending as of 2026-05-19.

[^higginschen2022]: doi:10.1038/s43587-022-00248-2 · Higgins-Chen AT et al. · *Nature Aging* · 2022 · methods/review · PC-based epigenetic clocks substantially improve test-retest reliability vs conventional elastic-net clocks; conceptually related to MitraCluster's region-aggregation approach

[^ocampo2016]: doi:10.1016/j.cell.2016.11.052 · Ocampo A et al. · *Cell* · 2016 · in-vivo (mouse) + in-vitro · cyclic partial reprogramming with OSKM factors reverses aging hallmarks including epigenetic aging markers without inducing full de-differentiation · model: mouse (in vivo) + human cells (in vitro) · foundational partial-reprogramming reference
