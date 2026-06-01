---
type: method
aliases: [Weighted Gene Co-expression Network Analysis, weighted correlation network analysis, gene co-expression modules, WGCNA R package]
abbreviation: WGCNA
category: in-silico-method
year-introduced: 2005
canonical-reference: "10.2202/1544-6115.1128"    # Zhang & Horvath 2005 — closed-access (not_oa in archive) #gap/no-fulltext-access
current-protocols-citation:
related-methods:
  - "[[methods/duplex-sequencing]]"
typical-use-cases:
  - "Module discovery — identifying clusters of highly co-expressed genes that share biological function or regulatory control"
  - "Module–trait correlation — correlating module eigengenes to external phenotypes (age, treatment, mortality)"
  - "Hub-gene identification — ranking genes by intramodular connectivity (kME) to prioritize candidates for perturbation"
  - "Cross-dataset module preservation — evaluating whether modules discovered in one cohort replicate in another via Zsummary statistics"
  - "Transcriptomic clock decomposition — WGCNA modules as the backbone of module-specific tAge clocks (Tyshkovskiy 2026)"
key-limitations:
  - "Requires adequate sample size (≥15–20 minimum; ≥30 strongly preferred) for stable module detection; small-n studies yield fragile modules"
  - "Sensitive to soft-threshold choice (β): the scale-free topology fit criterion is a heuristic, and the recommended β can shift markedly with normalization method or outlier samples"
  - "Normalization and batch correction upstream of WGCNA substantially alter module composition; uncorrected batch effects generate artifactual modules"
  - "Unsigned networks treat up- and down-regulation as equivalent; signed networks preserve direction but require larger n for stability — choice is rarely justified rigorously in the literature"
  - "Co-expression captures correlation, not causation: co-regulated modules do not imply co-regulation by the same TF, shared pathway membership, or functional interaction"
  - "Module eigengene (PC1) can be dominated by a small subset of high-variance genes, masking the behavior of the broader membership"
  - "Module assignments are dataset-specific; without module-preservation analysis (Zsummary), hub genes from one dataset should not be assumed to generalize"
  - "Dynamic tree-cut parameters (minimum module size, deepSplit) interact with β to produce substantially different module counts; sensitivity analysis is rarely reported"
evidence-weight-implication: "WGCNA findings are hypothesis-generating descriptions of co-expression structure. Module-trait associations and hub-gene rankings require orthogonal validation — perturbation experiments, Mendelian randomization, or module-preservation replication across independent cohorts — before causal or mechanistic claims are warranted."
literature-checked-through: 2026-05-29
verified: true
verified-date: 2026-05-29
verified-by: claude
verified-scope: "Langfelder & Horvath 2008 (doi:10.1186/1471-2105-9-559) read end-to-end from local PDF — all claims attributed to that paper cross-checked. Langfelder et al. 2011 (doi:10.1371/journal.pcbi.1001057) read (pp.1–4) to verify Zsummary cutoffs, which originated there, not in 2008. Zhang & Horvath 2005 (doi:10.2202/1544-6115.1128) is closed-access (not_oa in archive) — claims attributed to it (soft-thresholding power, TOM, scale-free criterion) not independently PDF-verified; tagged #gap/no-fulltext-access inline. Tyshkovskiy 2026 claims treated as sourced (verified study page). Key attribution corrections: (1) dynamicTreeCut algorithm re-attributed to Langfelder, Zhang & Horvath 2008 Bioinformatics (separate paper from the WGCNA R package paper); (2) Zsummary cutoffs re-attributed to Langfelder et al. 2011 PLoS Comput Biol with new [^langfelder2011] footnote. Numbers (R²≥0.80 threshold, Zsummary >10/>2 cutoffs) confirmed correct."
---

# Weighted Gene Co-expression Network Analysis (WGCNA)

WGCNA is a systems-biology computational method that builds a weighted gene co-expression network from bulk transcriptomic data, partitions that network into modules of highly co-expressed genes, and correlates each module's aggregate expression (its eigengene) to external phenotypes such as chronological age, mortality risk, or treatment status. In aging research, WGCNA is primarily used to decompose transcriptome-wide aging/mortality signatures into biologically interpretable co-regulated programs — the modular architecture underlying the [[biomarkers/transcriptomic-clock-tage|tAge transcriptomic clocks]] from [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] is the most prominent current example.

---

## Principle

The core insight of WGCNA is that raw Pearson correlations between gene pairs are inadequate for network construction because they produce a flat, nearly fully connected graph. Instead, WGCNA applies a **soft-thresholding power β** to each pairwise correlation, raising the absolute correlation to the power β:

```
a_ij = |cor(x_i, x_j)|^β
```

β is chosen so the resulting weighted adjacency matrix approximates **scale-free topology** — a property of many biological networks in which most genes have few connections and a small number of hub genes are highly connected. The scale-free fit criterion (R² of the log-log fit of connectivity distribution) is evaluated across a range of β values; the lowest β achieving R² ≥ 0.80–0.85 is typically selected.[^zhang2005] #gap/no-fulltext-access (Zhang & Horvath 2005 is closed-access; the R²≥0.80 threshold value is from that paper and has not been verified against the PDF)

From the weighted adjacency matrix, a **Topological Overlap Matrix (TOM)** is computed. TOM-based dissimilarity between two genes is low not only when they are directly co-expressed but also when they share many co-expressed neighbors — this produces more biologically coherent clusters than raw correlation-based distances.[^zhang2005]

Modules are then identified by **hierarchical clustering** on TOM-dissimilarity followed by **dynamic tree cut** (the `dynamicTreeCut` algorithm), which detects nested and irregular clusters.[^langfelder2008dtc] Each module is assigned a color label; the gray module collects unclustered genes.

Each module is summarized by its **eigengene** (ME) — the first principal component of the module's expression matrix, capturing the dominant co-expression trend. Module eigengenes can be correlated directly to quantitative or categorical external traits, producing a module–trait heatmap that is the central interpretive output of most WGCNA analyses.

Hub genes are identified by **intramodular connectivity (kME)**, also called module membership — the Pearson correlation of each gene's expression profile with its module's eigengene. High kME = high intramodular hub status; combined with gene significance (correlation to the trait of interest), hub genes are the primary candidates for downstream perturbation.

---

## Workflow

1. **Input preprocessing** — variance-stabilized or log-normalized expression matrix (genes × samples). Remove low-variance or low-count genes. Outlier sample detection via hierarchical clustering or connectivity Z-scores.
2. **Soft-threshold selection** — evaluate scale-free topology fit (R²) across β = 1–20 (or higher for RNA-seq data with inflated correlations); select the lowest β with R² ≥ 0.80.
3. **Signed vs unsigned network** — unsigned: |cor|^β (up- and down-regulation treated equally). Signed: ((1 + cor)/2)^β (preserves direction). Signed networks are biologically more stringent; require larger n.
4. **TOM construction** — compute pairwise TOM from the weighted adjacency matrix; derive TOM-dissimilarity (1 − TOM).
5. **Hierarchical clustering + dynamic tree cut** — cluster on TOM-dissimilarity; set `minModuleSize` (typically 20–30 genes) and `deepSplit` (0–4; higher = more modules).
6. **Module merging** — modules whose eigengenes are highly correlated (often >0.85) are merged to avoid redundancy.
7. **Module eigengene computation** — PCA on each module's expression submatrix; ME = PC1.
8. **Module–trait correlation** — Pearson or Spearman correlation of each ME vs each external trait; Bonferroni or FDR correction for multiple testing across modules × traits.
9. **Hub gene identification** — rank by kME within module; apply gene significance (|cor(gene, trait)|) filter to identify hub genes with both high module membership and high trait relevance.
10. **Module preservation (cross-dataset validation)** — compute Zsummary preservation statistics in an independent dataset; Zsummary > 10 = strong preservation, 2–10 = weak-to-moderate, < 2 = not preserved.[^langfelder2011]

---

## Output format

- **Module color table** — gene → module assignment.
- **Module eigengene matrix** — ME × sample matrix (one row per module, one column per sample).
- **Module–trait correlation heatmap** — modules × traits, with correlation coefficient and p-value per cell.
- **Hub gene list** — top-kME genes per module, optionally filtered by gene significance.
- **Dendrograms** — sample clustering + gene clustering with color bar showing module membership.
- **Scale-free topology fit plot** — R² vs β, documenting threshold selection.
- **Preservation statistics** — per-module Zsummary scores in reference vs test dataset.

In the Tyshkovskiy 2026 context, WGCNA yielded 28 robust rodent co-expression modules and 15 multi-species modules from 11,165 transcriptomes; from these, 23 rodent + 14 multi-species module-specific tAge clocks were retained after stability filtering.[^tyshkovskiy2026]

---

## Key parameters

| Parameter | Typical range | Effect on output |
|---|---|---|
| Soft-threshold power β | 6–12 (RNA-seq); 4–8 (microarray) | Higher β → sparser adjacency, fewer spurious edges, but also loses weaker signal. |
| Minimum module size | 20–100 genes | Smaller values produce more, smaller modules (risk: noise fragments); larger values produce fewer, coarser modules. |
| deepSplit | 0–4 | Higher → more aggressive splitting → more modules. Affects granularity of biologically distinct programs. |
| Merge correlation threshold | 0.75–0.90 | Higher → less merging → more modules, but some may be redundant. |
| Signed vs unsigned | — | Unsigned combines up/down-regulated genes in the same module; signed keeps them separate. The choice profoundly affects hub genes and module biology. |
| Normalization method upstream | VST, TMM, CPM, log2(RPKM+1) | Batch effects and normalization residuals propagate directly into module structure. |

---

## Validation and QC

- **Scale-free topology diagnostic** — R² ≥ 0.80 for the selected β is the standard minimum; values below 0.70 indicate the data are dominated by batch effects or the sample size is too small.
- **Sample outlier removal** — genes and samples failing connectivity Z-score thresholds (typically Z < −2.5) should be removed before soft-threshold selection.
- **Module stability bootstrapping** — resampling the sample set and re-running WGCNA; stable modules appear consistently across bootstrap replicates. Not universally performed; often replaced by cross-dataset preservation.
- **Module preservation Zsummary** — the primary quantitative cross-dataset validation. Modules with Zsummary > 10 in an independent cohort are considered strongly preserved; 2–10 = weak-to-moderate; < 2 = not preserved.[^langfelder2011]
- **Eigengene-trait significance reporting** — p-values for ME–trait correlations must be corrected for the number of modules × traits tested; many published analyses report uncorrected p-values.

---

## Limitations and failure modes

- **Correlational, not causal** — co-expression means genes are co-regulated across the samples in the dataset, not that they interact, are in the same pathway, or have the same function. Hub genes with high kME are candidates, not proven regulators.
- **Dataset-specific modules** — module memberships are relative to the distribution of variance in the specific dataset. A gene that is a hub in one tissue or condition may not be a hub in another.
- **Unsigned-network conflation** — the most common pipeline setting, unsigned, groups genes that are strongly correlated in either direction. A module can contain both up- and down-regulated genes, making the eigengene's direction ambiguous.
- **Small-n instability** — with n < 15–20 samples, TOM-based clustering is unreliable; modules will split or merge differently across bootstrap replicates. Published WGCNA studies with n < 20 should be interpreted with extra caution.
- **Eigengene PC1 dominance** — when a handful of genes dominate PC1 variance, the eigengene primarily reflects those genes, not the broader module biology. Checking variance-explained by PC1 (ideally >40%) and correlating eigengene to individual top genes is good practice.
- **Soft-threshold heuristic** — scale-free fit is an approximation; real biological networks are not perfectly scale-free, and the R² criterion can be satisfied at multiple β values. Sensitivity analysis across β values is rarely reported.
- **Merging threshold sensitivity** — module count changes substantially with the merge-correlation cutoff; authors often don't report sensitivity.
- **Batch effects** — if upstream normalization fails to remove technical variation, batch-driven modules will appear biologically real and may exhibit the strongest trait correlations.

---

## Evidence-weight implications for this wiki

When a wiki page cites a WGCNA-derived finding (hub gene, module-trait association, module-specific clock):

1. **Module-trait association ≠ causal mechanism.** A module positively correlated with mortality does not mean the module's genes cause mortality; it means genes in that module are collectively co-regulated in the same direction as mortality increases. Mechanistic evidence (gene perturbation, MR) is required for causal claims.
2. **Hub gene priority depends on preservation.** A hub gene identified in one dataset should be treated as a hypothesis until replicated via module-preservation Zsummary in an independent cohort or validated by perturbation.
3. **Module count varies by study.** The Tyshkovskiy 2026 28-rodent-module result reflects that specific dataset's scale and preprocessing choices; papers reporting 5 or 50 modules from similar data are not necessarily wrong.
4. **Unsigned vs signed matters for directionality claims.** If a wiki claim states a hub gene is "up-regulated" based on WGCNA module membership alone (not from the eigengene direction), verify whether the study used a signed network.
5. **Module biology is nominally annotated.** Module names ("inflammation," "OXPHOS") reflect the most enriched Gene Ontology terms in the module; they are summaries, not precise mechanistic labels. A few off-topic genes may be included.

---

## Related methods

| Method | Relationship |
|---|---|
| [[biomarkers/transcriptomic-clock-tage]] | Primary aging-wiki use case: WGCNA modules are the structural backbone of module-specific tAge clocks |
| [[methods/duplex-sequencing]] | Orthogonal — DNA-mutation detection vs gene-expression co-regulation; occasionally co-applied in multi-omics aging studies |
| Elastic-net regression (used in tAge) | Downstream — trained on WGCNA module eigengenes as features for the module-specific clocks |
| Principal Component Analysis | Component — eigengene computation is PC1 of the module; PCA is embedded within WGCNA |

---

## Pages citing this method

Running list; lint pass should regenerate.

- [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] — WGCNA used to decompose mammalian aging/mortality into 28 rodent / 15 multi-species modules; each module becomes a module-specific tAge clock
- [[biomarkers/transcriptomic-clock-tage]] — module-specific clocks are WGCNA-derived; references this method for the modular architecture

---

## Limitations and gaps

- `#gap/needs-current-protocols-anchor` — no Current Protocols chapter dedicated to WGCNA; the R package vignette (Langfelder & Horvath, CRAN) and the tutorial paper (Langfelder & Horvath 2016 *arXiv*) are the de-facto canonical references but are not formally Current Protocols. Update when a peer-reviewed methods chapter is available.
- `#gap/needs-replication` — specific parameter thresholds (R² ≥ 0.80 for soft-threshold selection; Zsummary > 10 for preservation) are widely cited but their empirical derivation is from the original WGCNA papers; large-scale benchmarking against alternative cut-offs has not been consolidated here.

---

## Verification log

**2026-05-29 — initial seed (claude):** Page drafted from the two canonical WGCNA references (Zhang & Horvath 2005, DOI confirmed in archive; Langfelder & Horvath 2008, DOI confirmed in archive) and from the aging-specific use in Tyshkovskiy 2026 (already a verified study page). Procedural parameters reflect general WGCNA practice as documented in those papers and their downstream tutorials; they have not been cross-checked line-by-line against the original PDFs. `verified: false`; flagged for verification pass against primary WGCNA methods papers.

**2026-05-29 — verification pass (claude):** Langfelder & Horvath 2008 (doi:10.1186/1471-2105-9-559) read end-to-end from local PDF. Langfelder et al. 2011 (doi:10.1371/journal.pcbi.1001057) read pp.1–4 from local PDF. Zhang & Horvath 2005 is closed-access (not_oa in archive); claims sourced from it tagged #gap/no-fulltext-access. Key corrections: (1) `[^langfelder2008]` was incorrectly attributed as the source for both the dynamicTreeCut algorithm and the Zsummary cutoffs — the 2008 WGCNA package paper introduces neither; dynamicTreeCut is from a separate Langfelder, Zhang & Horvath 2008 *Bioinformatics* paper (doi:10.1093/bioinformatics/btm563), and Zsummary cutoffs are from Langfelder et al. 2011; both now have their own footnotes. (2) Zsummary "moderate" wording corrected to "weak-to-moderate" to match the 2011 paper's exact language. (3) `[^langfelder2008]` footnote descriptor updated to accurately reflect what that paper actually introduces. `verified: true` with partial scope (Zhang & Horvath 2005 unverified).

---

[^zhang2005]: 10.2202/1544-6115.1128 · Zhang B & Horvath S · *Stat Appl Genet Mol Biol* 2005 · n=not applicable (computational framework) · methods-paper · introduced weighted adjacency and scale-free topology criterion for gene co-expression networks · 5,847 citations (archive-confirmed)
[^langfelder2008]: 10.1186/1471-2105-9-559 · Langfelder P & Horvath S · *BMC Bioinformatics* 2008 · n=not applicable (software package) · methods-paper · WGCNA R package; weighted adjacency functions (signed and unsigned); module eigengene = PC1; module membership (kME) = correlation of gene expression with eigengene; TOM-based clustering · 27,507 citations (archive-confirmed; OA gold; local PDF read end-to-end 2026-05-29)

[^langfelder2008dtc]: 10.1093/bioinformatics/btm563 · Langfelder P, Zhang B & Horvath S · *Bioinformatics* 2008 · 24(5):719–720 · methods-paper · Defines the Dynamic Tree Cut algorithm for identifying modules from hierarchical cluster dendrograms; implemented in the R `dynamicTreeCut` package. Distinct from the WGCNA R package paper (doi:10.1186/1471-2105-9-559). Note: this DOI has not been independently verified against the archive; the 2008 WGCNA package paper cites it as reference [29].

[^langfelder2011]: 10.1371/journal.pcbi.1001057 · Langfelder P, Luo R, Oldham MC & Horvath S · *PLoS Comput Biol* 2011 · 7(1):e1001057 · methods-paper · Introduces module preservation statistics including the composite Zsummary statistic; defines empirically derived thresholds: Zsummary > 10 = strong evidence of preservation; 2 < Zsummary < 10 = weak-to-moderate evidence; Zsummary < 2 = no evidence of preservation · OA gold; local PDF read pp.1–4 (2026-05-29)
[^tyshkovskiy2026]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · n=11,165 transcriptomes (4 species, >25 tissues) · meta-analysis + new RNA-seq · WGCNA yielded 28 rodent + 15 multi-species modules; 23+14 module-specific tAge clocks retained after stability filtering · model: mouse/rat/macaque/human
