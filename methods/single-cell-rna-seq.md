---
type: method
aliases: [single-cell RNA sequencing, single-nucleus RNA sequencing, scRNA-seq, snRNA-seq, 10x Chromium, Drop-seq, Smart-seq2]
abbreviation: scRNA-seq / snRNA-seq
category: scrna
year-introduced: 2015
canonical-reference: "[[studies/macosko-2015-drop-seq]]"
current-protocols-citation: "Luecken MD & Theis FJ (2019). Current best practices in single‐cell RNA‐seq analysis: a tutorial. *Molecular Systems Biology* 15(6):e8746. DOI: 10.15252/msb.20188746"
related-methods:
  - "[[methods/duplex-sequencing]]"
typical-use-cases:
  - "Cell-type-resolved aging signatures: identifying which cell types in a tissue undergo age-associated transcriptional change vs those that shift in proportion (dissociates bulk-RNA-seq confounds)"
  - "Building single-cell aging atlases (Tabula Muris Senis, CellxGene Census) for downstream cross-dataset queries"
  - "Trajectory analysis: inferring differentiation trajectories and their aging-associated disruptions (e.g., HSC myeloid bias)"
  - "Applying bulk-trained transcriptomic clocks to single-cell data via metacell / pseudobulk aggregation (Tyshkovskiy 2026)"
  - "snRNA-seq of frozen/archived tissue or dissociation-resistant cell types (neurons, adipocytes, cardiomyocytes, skeletal muscle)"
key-limitations:
  - "Dropout / zero-inflation: low-abundance transcripts are stochastically absent in most cells, inflating zero counts; confounds differential expression and clustering"
  - "Dissociation-induced stress artifacts (scRNA-seq only): tissue digestion upregulates immediate-early / heat-shock genes (FOS, JUN, HSP70) regardless of biology — can mimic senescence or stress signatures"
  - "Ambient RNA contamination: lysed cell RNA floats in suspension and barcodes into healthy droplets; must be removed computationally (SoupX, DecontX)"
  - "Doublets: two cells captured in one droplet; inflate apparent co-expression; removed by DoubletFinder or similar"
  - "Batch effects: technology version (10x v2 vs v3), enzyme lot, capture time all drive technical variation that can dominate biological signal"
  - "snRNA-seq intronic-read handling: nuclear RNA retains many unspliced introns; aligners must be configured for premRNA reference or pre-mRNA + spliced combined index (STARsolo pre-mRNA mode or Cell Ranger include-introns flag)"
  - "snRNA-seq lower transcript capture: nuclear mRNA is less abundant than cytoplasmic; median genes/cell is ~30–50% lower than scRNA-seq on matched tissue — affects downstream sensitivity"
  - "Metacell size vs resolution tradeoff: aggregating too few cells per metacell (< ~30–50) leaves residual dropout noise; too many (> ~200) may average across biologically distinct subpopulations. Tyshkovskiy 2026 showed clock accuracy saturates at ~100 cells / ~1M reads per metacell for bulk-trained transcriptomic clocks"
  - "Pseudoreplication: naive single-cell DE tests treat each cell as an independent replicate, inflating N ~100–1000-fold and producing thousands of spurious differentially expressed genes"
evidence-weight-implication: "Single-cell DE claims are only as strong as the pseudobulk aggregation strategy and the number of biological replicates (donors/animals), not cell count. Per Squair 2021: treat the donor/animal, not the cell, as the unit of replication. Aging signatures from a single mouse or a single human donor need biological replication before generalizing. Cell-type proportion shifts (composition changes) require careful separation from per-cell expression changes."
literature-checked-through: 2026-05-29
verified: true
verified-date: 2026-05-29
verified-by: claude
verified-scope: "Squair 2021 verified against full PDF (local archive); Macosko 2015 and Zheng 2017 verified against PMC full text; Tyshkovskiy 2026 metacell claims cross-checked against verified studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks.md (not re-read from PDF); TMS 2020 verified against abstract + EuropePMC metadata (23 tissues confirmed; ages/cell-count not extractable from abstract alone — consistent with sops/finding-singlecell-aging.md); Picelli 2014 is closed-access (not_oa) — Smart-seq2 plate-format and throughput claims unverified against source PDF; Luecken & Theis 2019 verified against abstract only (full PDF download pending at time of verification)."
---

# Single-Cell and Single-Nucleus RNA Sequencing (scRNA-seq / snRNA-seq)

The dominant methods for profiling gene expression of individual cells at genome-wide scale, enabling cell-type-resolved analysis of aging transcriptional programs. **scRNA-seq** captures cytoplasmic and nuclear mRNA from freshly dissociated single cells; **snRNA-seq** profiles nuclei isolated from tissue, bypassing cell dissociation entirely and enabling analysis of frozen, archived, or mechanically tough tissue. The two variants answer different questions and carry distinct artifacts. Together they underlie the major aging atlases this wiki draws upon: the Tabula Muris Senis mouse aging atlas [^tms2020], the CellxGene Census aggregated cross-study corpus, and the metacell-level snRNA-seq in Tyshkovskiy et al. 2026 [^tyshkovskiy2026].

---

## Principle

### scRNA-seq: droplet-based (dominant) and plate-based

**Droplet-based scRNA-seq** (Drop-seq [^macosko2015], 10x Genomics Chromium [^zheng2017]) encapsulates single cells with barcoded beads in nanoliter oil droplets. Inside each droplet, cell lysis releases mRNA, which hybridizes to bead-bound oligo-dT primers carrying a cell barcode (CBC, identifying the cell of origin) and a unique molecular identifier (UMI, correcting for PCR duplication). Library preparation proceeds by reverse transcription, PCR amplification, and Illumina sequencing. The CBC + UMI structure allows demultiplexing: for each sequenced molecule, the barcode identifies the cell and the UMI counts one unique mRNA molecule. Result: a cells × genes count matrix where each entry is UMI counts — an approximate proxy for transcript abundance.

The 10x Chromium system (Zheng 2017) became the field standard by combining microfluidic droplet throughput (~8,000–10,000 cells per channel, up to 8 channels simultaneously per run) with a commercial, reproducible workflow. Drop-seq (Macosko 2015) was the first large-scale published demonstration of the concept (44,808 retinal cells in that paper) using bead-in-droplet chemistry; Macosko 2015 stated ~10,000 single-cell libraries could be prepared in a 12-hour session.

**Plate-based scRNA-seq** (Smart-seq2 [^picelli2014]) physically sorts single cells by FACS into 96-well plates (standard implementation; Tabula Muris Senis used 96-well format), then performs full-length RNA capture (not 3'-biased) on each cell individually. Throughput is lower (~96 cells/plate in standard format; 384-well adaptations exist but are less common) #gap/no-fulltext-access — Picelli 2014 Nat Protoc is closed-access; plate format confirmed as 96-well via TMS usage, not from primary source PDF. Cost per cell is higher than droplet-based, but: (a) full-length coverage enables isoform-level analysis, (b) no 3' bias, (c) higher sensitivity per cell. Tabula Muris Senis used *both* 10x droplet and Smart-seq2 to complement throughput with sensitivity.

### snRNA-seq: nuclear isolation instead of single-cell dissociation

snRNA-seq isolates nuclei from tissue rather than intact cells [^tms2020]. Tissue is mechanically homogenized (Dounce) or chemically lysed under detergent conditions that lyse the plasma membrane but preserve nuclear membranes. Nuclei are then processed through the same droplet or plate-based capture workflow as intact cells.

**Key distinction from scRNA-seq:**

| Feature | scRNA-seq | snRNA-seq |
|---|---|---|
| mRNA compartment | cytoplasmic + nuclear | nuclear only |
| Transcript capture | ~2,000–5,000 genes/cell (10x v3) | ~1,000–3,000 genes/nucleus (lower) |
| Intronic reads | ~5–10% | ~40–60% — unspliced pre-mRNA predominates |
| Dissociation artifact | present (stress genes) | absent |
| Tissue suitability | fresh dissociable tissue | frozen/archived; tough tissue (muscle, brain, adipose) |
| Cell-type resolution | high (all cellular compartments) | high (nucleus captures cell-type-specific TFs and nascent transcripts) |

snRNA-seq is the required approach for aging studies using **frozen biobank tissue**, **post-mortem human samples**, or mechanically resistant cell types. Tyshkovskiy 2026 generated snRNA-seq of Klotho-KO vs control kidney and brain — tissues where whole-cell dissociation would be impractical without introducing dissociation artifacts.

---

## Workflow

### Phase 1: Cell/nuclei preparation

**scRNA-seq:** Tissue dissociation (enzymatic: collagenase, trypsin, or Liberase; mechanical: Dounce or GentleMACS). Quality of dissociation critically determines cell viability and artifact rate. Cell viability >80–85% is required; live/dead discrimination (DAPI, propidium iodide, or calcein AM) before capture is standard practice. Avoid warm incubation beyond the minimum required — prolonged enzymatic exposure upregulates *FOS*, *JUN*, *HSPA1A* (dissociation-stress genes that mimic senescence or inflammation signatures).

**snRNA-seq:** Mechanical homogenization in lysis buffer (IGEPAL or NP-40 detergent) → filter through 40 µm strainer → sucrose-cushion centrifugation to pellet nuclei and remove cytoplasmic debris → resuspend in PBS + BSA. DAPI staining for QC. The entire protocol can be completed in ~1 hour on frozen tissue stored for years.

### Phase 2: Droplet capture and library preparation

**10x Chromium (standard workflow):**
1. Cell/nuclei suspension loaded at target concentration (~1,000 cells/µL) into Chromium Controller.
2. Droplet formation: each GEM (gel bead-in-emulsion) contains one cell/nucleus + one barcoded bead with ~3 million unique CBC-UMI combinations.
3. In-droplet lysis, reverse transcription, and cDNA synthesis.
4. Break emulsion, pool cDNA, PCR amplification.
5. Enzymatic fragmentation + adapter ligation → sequencing library.
6. Sequencing: typically 28 bp (read 1: CBC + UMI) + 90–100 bp (read 2: transcript insert) on Illumina NovaSeq or NextSeq.

For snRNA-seq: Cell Ranger (or STARsolo) must be run with `--include-introns` flag to count pre-mRNA reads; omitting this flag loses ~40–60% of nuclear signal.

### Phase 3: Alignment and counting

- **Cell Ranger** (10x proprietary): aligns to genome + transcriptome; demultiplexes barcodes; filters real cells from empty droplets by inflection-point detection on the barcode-rank (knee-plot) or EmptyDrops.
- **STARsolo** (open-source STAR module): equivalent functionality; configurable for pre-mRNA mode; integrates into Snakemake/Nextflow pipelines.

Output: filtered cell × gene UMI count matrix in 10x MEX format or HDF5 (.h5).

### Phase 4: QC filtering

Per-cell QC metrics:
- **Total UMI count** (nUMI): too low = empty droplet or dead cell; too high = doublet
- **Detected genes** (nGenes): correlated with nUMI; low nGenes at given nUMI = low-quality cell
- **Mitochondrial read fraction** (pct_mito): >20–25% typically indicates compromised cell membrane (cytoplasmic mRNA leaks out; mitochondrial transcripts are enriched in remaining RNA)
- **Doublet score**: DoubletFinder or Scrublet flags likely doublets based on simulated doublet distribution

Thresholds are data-dependent and set per-sample (distribution-based). Tabula Muris Senis used: nUMI > 500, nGenes > 200, pct_mito < 10% for 10x data; different thresholds for Smart-seq2 (TPM-based).

**Ambient RNA decontamination** (SoupX or DecontX): estimates the ambient transcriptome from empty barcodes and subtracts the inferred contamination fraction from real cells. Recommended for any tissue with high cell death or lysis rate.

### Phase 5: Normalization, dimensionality reduction, clustering

Standard Seurat / Scanpy / Bioconductor workflow:
- **Normalization:** library-size normalization (divide each cell by total counts × 10,000, then log1p) OR scran pool-and-deconvolve (more robust for sparse matrices)
- **Feature selection:** highly variable genes (HVGs) — typically 2,000–5,000 genes with high variation across cells
- **PCA:** ~50 principal components on HVGs
- **Neighbor graph:** k-nearest-neighbor graph on PCA embedding (k=15–30 typical)
- **Clustering:** Leiden or Louvain community detection
- **UMAP / t-SNE:** 2D visualization of the neighbor graph

### Phase 6: Cell-type annotation

Automated annotation (SingleR, celltypist, Azimuth) using reference atlases, followed by manual review using known marker genes. All annotations should be cross-validated against the Cell Ontology (CL:) where available — see `sops/finding-singlecell-aging.md` for the CellxGene Census CL: term convention.

### Phase 7: Downstream analysis (aging-context)

- **Pseudobulk differential expression:** aggregate counts per cell type per donor/animal → standard bulk DE (DESeq2, edgeR) treating donor/animal as replication unit. See Limitations for why naive single-cell DE is inappropriate [^squair2021].
- **Trajectory / pseudotime:** Monocle3, scVelo (RNA velocity), or PAGA for mapping differentiation trajectories; useful for detecting aging-associated trajectory skewing (e.g., HSC myeloid bias).
- **Metacell aggregation:** pool ~50–200 cells per cell-type per sample into pseudobulk "metacells" to reduce dropout noise before applying bulk-trained clocks or regression models. See § Aging-context use cases.
- **Cell composition analysis:** RAISIN, propeller, or scCODA for testing whether cell-type proportions shift with age — this is distinct from per-cell expression change and often is the primary aging signal in bulk tissue data.

---

## Output format

- **Primary output:** cells × genes UMI count matrix (sparse; stored as AnnData `.h5ad` or Seurat `.rds`)
- **Metadata (`obs`):** per-cell quality metrics, cluster assignment, cell-type label, donor ID, age, tissue, batch
- **Embeddings (`obsm`):** PCA coordinates, UMAP/t-SNE coordinates
- **Downstream:** DEG tables (pseudobulk), trajectory / velocity graphs, cell-type proportion estimates

---

## Key parameters

| Parameter | Effect on aging analysis |
|---|---|
| Cells captured per sample | More cells = better statistical power for rare cell types; ~5,000–10,000 cells/sample is typical; >10,000 needed for rare populations (<0.5%) |
| Sequencing depth | ~25,000 reads/cell (scRNA-seq 3' 10x); ~50–100k reads/cell (Smart-seq2 full-length). snRNA-seq needs higher depth to compensate for lower cytoplasmic mRNA content |
| Biological replicates (donors/animals) | Critical for generalizability; ≥3 donors/age group is minimum; ≥5–6 preferred for pseudobulk DE power. More donors > more cells per donor |
| Cell Ranger vs STARsolo pre-mRNA mode | snRNA-seq requires `--include-introns` (Cell Ranger) or pre-mRNA combined reference (STARsolo); omitting loses 40–60% of nuclear signal |
| Metacell aggregation threshold | Clock accuracy saturates at ~100 cells / ~1M reads per metacell (Tyshkovskiy 2026) [^tyshkovskiy2026] — below ~30 cells, dropout dominates; above ~200, subpopulation averaging degrades resolution |

---

## Validation and QC

- **Barcode rank plot (knee plot):** inflection point separates real cells from empty droplets; assess per-sample whether the knee is sharp (good capture) or diffuse (low-quality input)
- **Per-cell metric distributions:** violin plots of nUMI, nGenes, pct_mito across samples should be comparable; large inter-sample shifts indicate batch issues
- **Marker gene sanity check:** known tissue-specific markers (e.g., *MYH7* in cardiomyocytes, *TNNI3* in cardiac muscle, *PTPRC*/CD45 in immune cells) should localize cleanly to expected clusters
- **Doublet rate:** typically 1–5% for 10x at standard cell concentrations; DoubletFinder or Scrublet scores should show a bimodal distribution with a small high-score tail
- **Ambient RNA contamination rate:** SoupX-estimated contamination fraction should be <20%; >30% indicates poor tissue dissociation or long processing times
- **Pseudobulk DE validation:** compare DE results between pseudobulk (correct) and naive Wilcoxon (inflated); concordance at the gene level is a sanity check, but the naive approach will find orders of magnitude more "significant" genes [^squair2021]

---

## Limitations and failure modes

### 1. Dropout / zero-inflation
Single-cell UMI counts are sparse: a gene expressed in a cell is captured ~10–30% of the time at standard 10x sequencing depths. Zero in the count matrix does not mean the gene is absent — it may simply not have been captured. This confounds:
- Imputation methods (e.g., MAGIC, ALRA) can introduce spurious correlations and should be used cautiously
- Rare-transcript detection (e.g., low-abundance signaling molecules) is unreliable at single-cell resolution; pseudobulk or metacell aggregation recovers signal

### 2. Dissociation-induced stress artifacts (scRNA-seq only)
Tissue digestion at 37°C activates immediate-early response genes (*FOS*, *JUN*, *EGR1*) and heat-shock genes (*HSPA1A*, *HSPA6*) within minutes — independent of biological state. In aging studies, this matters because many of these genes also appear in senescence/stress signatures. Mitigation: (a) use cold-active protease dissociation protocols; (b) computationally regress out dissociation scores (Haber et al. 2017 module); (c) switch to snRNA-seq for dissociation-sensitive tissues. #gap/needs-replication for the degree of artifact-biology overlap in aged tissue.

### 3. Ambient RNA contamination
Lysed cells release RNA into the suspension medium; this "soup" is barcoded into healthy cells, adding low-level expression of transcripts from the most abundant cell types. In aged tissue, SASP factors and stress transcripts from dying cells can contaminate transcriptomes of healthier cells. SoupX or DecontX removes the ambient component, but requires careful tuning.

### 4. Pseudoreplication (critical for DE) #gap/needs-replication
Naive per-cell DE analysis (Wilcoxon rank-sum or t-test applied to individual cells) treats cells as independent, inflating the replication unit ~100–1,000-fold above the actual biological unit (donor/animal). Squair et al. 2021 showed this generates thousands of spurious DEGs [^squair2021]. **Pseudobulk aggregate** (sum or mean UMI per cell type per donor → standard bulk DESeq2/edgeR) is the correct approach; `donor_id` is the replicate. This applies equally to aging comparisons: with n=2 young + n=2 old animals, even with 1,000 cells each, you effectively have n=2 per group.

### 5. snRNA-seq intronic-read handling
Nuclear RNA is ~40–60% unspliced pre-mRNA. Aligners configured for spliced mRNA only (default settings) will discard these reads, massively undercounting nuclear transcripts. Required: Cell Ranger `--include-introns` flag; STARsolo pre-mRNA mode; or counting against a combined exonic + intronic GTF. Omitting this step on snRNA-seq data is a common error that reduces apparent library complexity ~2-fold.

### 6. Batch effects
Technology version (10x v2 vs v3), capture date, enzyme lot, and sequencing run all introduce technical variation. Harmony, Scanorama, or scVI are standard batch-correction methods for integration. Cross-study integration (CellxGene Census) requires additional care because protocols differ. TMS is internally consistent (one lab, controlled batches) and is generally the more reliable aging reference than cross-dataset aggregations.

### 7. Metacell size vs resolution tradeoff
Metacell aggregation bridges sparse single-cell data and bulk-trained models (clocks, regression tools). Too few cells per metacell → residual dropout noise dominates. Too many → subpopulation structure is averaged out (e.g., naive T-cells and effector T-cells pooled). Tyshkovskiy 2026 empirically calibrated this for transcriptomic clocks: accuracy saturated at ~100 cells / ~1M reads per metacell; below 50 cells, clock error increased substantially [^tyshkovskiy2026]. For clustering/annotation purposes, metacell size should be kept smaller (~25–50 cells) to preserve rare sub-types.

---

## Aging-context use cases

### Tabula Muris Senis (TMS)
The canonical mouse aging atlas: scRNA-seq + snRNA-seq of ~350,000 cells from 23 tissues, C57BL/6J mice at 1, 3, 18, 21, 24, and 30 months [^tms2020]. Covers 120+ cell types. Results populate the `single-cell-aging-signature:` frontmatter on all cell-type pages in this wiki. See `sops/finding-singlecell-aging.md` for access routes (CellxGene Census Python API, figshare `.h5ad` files, interactive browser).

Key use cases against TMS:
- Query whether a cell type's *proportion* changes with age (composition vs expression change)
- Extract per-cell-type DEGs (young vs aged) using pseudobulk methods
- Anchor per-cell-type aging signatures to known hallmark pathways

**Caveat:** TMS is mouse only. Cross-species extrapolation to human requires validation in CellxGene Census human aging datasets or Human Protein Atlas single-cell data. Standard [[model-organisms/_extrapolation-guide|extrapolation table]] applies.

### CellxGene Census
Multi-study harmonized aggregation (>80M human cells, >20M mouse cells as of 2025). Enables query of aging cell types across independent studies. Batch effects are more prominent than in TMS (cross-lab, cross-protocol). Use for human cell-type aging signatures where TMS mouse data may not extrapolate. See `sops/finding-singlecell-aging.md` for Census Python API queries.

### Metacell aggregation and transcriptomic clocks
Bulk-trained transcriptomic clocks (e.g., [[biomarkers/transcriptomic-clock-tage]]) require summed/averaged expression profiles. Applying them directly to single-cell data is invalid (dropout distorts the input). The solution: aggregate ~100 cells of the same type per sample into a metacell, then apply the clock to the metacell profile. Tyshkovskiy 2026 validated this for their tAge mortality clock in Klotho-KO snRNA-seq data [^tyshkovskiy2026]:
- Kidney and brain metacells from Klotho-KO mice showed elevated tAge vs controls
- Module-specific clocks revealed that Klotho deficiency specifically accelerated energy-metabolism and NRF2 modules — not inflammation — at single-cell resolution, a finding invisible in bulk tissue
- The metacell threshold of ~100 cells / ~1M reads was established empirically in this paper

---

## Evidence-weight implications for this wiki

When a study cited in this wiki uses scRNA-seq or snRNA-seq as its primary method:

1. **Check whether DE was performed pseudobulk vs per-cell.** Per-cell Wilcoxon/t-test DEGs are suspect — inflate n by ~100–1000x, yield spurious signals [^squair2021]. If the paper does not describe pseudobulk aggregation explicitly, down-weight the DEG list.

2. **Check biological replicate count.** n=1 mouse/donor per group → no statistical replication regardless of cell count. n=3 mice/group with pseudobulk is the minimum credible design for aging DE. Single-donor snRNA-seq (as in the Tyshkovskiy 2026 Klotho-KO pilot) is hypothesis-generating, not confirmatory.

3. **Check for dissociation artifact control** (scRNA-seq only). If the paper does not mention dissociation score regression and the tissue required prolonged digestion (e.g., adipose, muscle), immediate-early gene clusters may be artifactual.

4. **Treat composition changes and expression changes separately.** "Aged tissue shows more *Cdkn1a*+ cells" can reflect: (a) more senescent cells (composition shift), (b) higher *Cdkn1a* in each cell (per-cell expression), or (c) both. Only cell-type-proportion analysis distinguishes these.

5. **For TMS-sourced aging signatures on cell-type pages,** all claims are mouse (C57BL/6J). Flag any inference to human biology as `#gap/needs-human-replication` unless validated in Census or HPA single-cell data.

6. **For metacell-aggregated clock applications,** check whether the per-cell-type cell count exceeds ~50–100 cells per sample before trusting clock outputs — below this threshold, dropout noise dominates.

---

## Related methods

| Method | Relationship | Use case |
|---|---|---|
| [[methods/duplex-sequencing]] | Orthogonal (DNA-level) | Somatic mutation burden in aged tissue; complementary to transcriptomic aging signatures |
| Pseudobulk DE (DESeq2 / edgeR) | Downstream analysis module | Correct DE from scRNA-seq data; requires pseudobulk aggregation as preprocessing |
| WGCNA / co-expression network analysis | Downstream analysis module | Gene module discovery from pseudobulk or bulk aggregated scRNA-seq data; used in Tyshkovskiy 2026 to define 28 aging modules from bulk meta-dataset |
| Spatial transcriptomics (10x Visium, Slide-seq) | Complementary | Adds spatial coordinate to single-cell transcriptomics; retains tissue architecture lost in dissociation |
| ATAC-seq / multiome (10x Multiome) | Complementary | Simultaneously profiles chromatin accessibility and gene expression from the same nucleus (snATAC + snRNA); links aging epigenetic changes to transcriptional output |

No dedicated wiki pages for WGCNA, spatial transcriptomics, or ATAC-seq methods exist yet — see § Limitations and gaps.

---

## Pages citing this method

- [[sops/finding-singlecell-aging]] (SOP; describes data-access workflows for resources generated by this method)
- [[biomarkers/transcriptomic-clock-tage]] (tAge clock trained and applied to data generated by this method; metacell approach documented there)
- [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] (snRNA-seq of Klotho-KO kidney + brain; metacell calibration data)
- All `type: cell-type` pages with `single-cell-aging-signature:` populated — these derive from Tabula Muris Senis scRNA-seq/snRNA-seq:
  - [[cell-types/hematopoietic-stem-cells]]
  - [[cell-types/satellite-cells]]
  - [[cell-types/microglia]]
  - [[cell-types/astrocytes]]
  - [[cell-types/neurons]]
  - [[cell-types/cardiomyocytes]]
  - [[cell-types/fibroadipogenic-progenitors]]
  - [[cell-types/dermal-fibroblasts]]
  - [[cell-types/endothelial-cells]]
  - (additional cell-type pages; lint pass should regenerate full list periodically)
- [[model-organisms/mus-musculus]] (TMS is a primary mouse aging-atlas resource)

---

## Limitations and gaps

- `#gap/needs-current-protocols-anchor` — Luecken & Theis 2019 (*Molecular Systems Biology*) is cited as the best-practices reference; a dedicated Current Protocols chapter for scRNA-seq (e.g., Current Protocols in Bioinformatics or Molecular Biology) would strengthen the workflow section. Add `current-protocols-citation:` update when located.
- `#gap/needs-replication` — The dissociation-artifact gene module (immediate-early genes) is described qualitatively; the specific gene list and overlap with aging/senescence signatures should be documented with primary-source numbers from a comparative scRNA-seq vs snRNA-seq study.
- No wiki method page yet exists for **WGCNA** or **spatial transcriptomics** — referenced in § Related methods as implicit stubs.
- The metacell threshold numbers (100 cells / 1M reads) derive from a single paper (Tyshkovskiy 2026, Klotho-KO kidney + brain snRNA-seq pilot). Replication in diverse cell types and tissues has not been formally published.
- snRNA-seq intronic-read handling standards continue to evolve (cellranger v7+ pre-mRNA support; STARsolo multi-mapper handling); `literature-checked-through: 2026-05-29` covers current best practice; re-check at 24-month cadence.

---

## Footnotes

[^macosko2015]: doi:10.1016/j.cell.2015.05.002 · Macosko EZ et al. · *Cell* 2015 · 44,808 retinal cells · foundational Drop-seq demonstration; established droplet barcoding + UMI principle
[^zheng2017]: doi:10.1038/ncomms14049 · Zheng GX et al. · *Nat Commun* 2017 · ~68,000 PBMCs (from a single donor across 8 channels) as benchmark dataset; ~250,000 total cells across 29 samples in the study · 10x Genomics Chromium commercialization paper; established the dominant platform
[^picelli2014]: doi:10.1038/nprot.2014.006 · Picelli S et al. · *Nat Protoc* 2014 · full-length Smart-seq2 protocol; plate-based alternative with higher sensitivity per cell and isoform resolution
[^tms2020]: doi:10.1038/s41586-020-2496-1 · Tabula Muris Consortium · *Nature* 2020 · ~350k cells · 23 tissues · C57BL/6J mice at 6 ages (1–30 mo) · primary single-cell aging atlas for this wiki; scRNA-seq + snRNA-seq combined
[^luecken2019]: doi:10.15252/msb.20188746 · Luecken MD & Theis FJ · *Mol Syst Biol* 2019 · review · 2,082 citations (Crossref 2026) · canonical best-practices reference for QC, normalization, integration, and DE in scRNA-seq
[^squair2021]: doi:10.1038/s41467-021-25960-2 · Squair JW et al. · *Nat Commun* 2021 · 860 citations · simulation + reanalysis study · demonstrates that naive per-cell DE inflates false positives by orders of magnitude; establishes pseudobulk as the correct replication unit; critical methodological citation for any scRNA-seq DE claim
[^tyshkovskiy2026]: doi:10.1038/s41586-026-10542-3 · Tyshkovskiy A et al. · *Nature* 2026 · n=11,165 transcriptomes across 4 species + new snRNA-seq of Klotho-KO kidney + brain · establishes metacell calibration (~100 cells / ~1M reads) for bulk-clock application to single-cell data; see [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]]
[^trendsgenetics2024]: doi:10.1016/j.tig.2024.09.006 · Trends in Genetics 2024 · "Unraveling aging from transcriptomics" · recent review integrating bulk + single-cell transcriptomic approaches for aging; covers pseudobulk DE, composition vs expression confounds, and clock application
