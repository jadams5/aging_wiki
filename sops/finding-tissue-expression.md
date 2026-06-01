---
type: sop
aliases: [GTEx, tissue expression, Human Protein Atlas, aging atlas, gene expression by age]
---

# SOP: finding tissue-by-age expression data

Use this SOP when populating tissue expression information for a protein page, or when checking whether a mouse expression-with-age finding has a counterpart in human tissue data. The primary resources are GTEx (human, age-stratified), Human Protein Atlas (human, cell/tissue-type level), and the Aging Atlas (multi-species, aging-specific multi-omic).

---

## When to use these resources

- Filling the `gtex-aging-correlation:` frontmatter field on a `type: protein` page.
- Writing a "Tissue expression" or "Age-dependent expression" section.
- Cross-checking mouse single-cell results against human bulk/single-cell data.
- Answering "Does this gene go up or down with age in tissue X in humans?"
- Assessing whether a ubiquitously expressed gene has tissue-specific aging effects.

---

## Resource 1: GTEx Portal (Human bulk RNA-seq, age-stratified)

**What it is:** Genotype-Tissue Expression project — post-mortem donor RNA-seq from 54 tissues, n ~1000 donors, with age bins 20–29, 30–39, 40–49, 50–59, 60–69, 70–79. GTEx v10 is the current dataset.

**Primary API endpoint:** `https://gtexportal.org/api/v2/`

### Step 1 — Resolve gene symbol to versioned ENSG ID

GTEx requires the ENSG ID with version suffix (e.g., `ENSG00000133116.8` for KL/Klotho). Look this up first:

```bash
curl "https://gtexportal.org/api/v2/reference/gene?geneId=KL&gencodeVersion=v39&genomeBuild=GRCh38%2Fhg38&pageSize=1&format=json"
```

Record the `gencodeId` field (e.g., `ENSG00000133116.8`).

### Step 2 — Get median expression per tissue (GTEx v10)

```bash
curl "https://gtexportal.org/api/v2/expression/medianGeneExpression?datasetId=gtex_v10&gencodeId=ENSG00000133116.8&format=json"
```

Returns one record per GTEx tissue with `median` (TPM) and `tissueSiteDetailId`. Useful for establishing tissue specificity and highlighting high-expression tissues.

**Confirmed working:** KL (Klotho) returns 54 tissue records; kidney cortex tops the list at ~18.8 TPM, consistent with known biology.

### Step 3 — Age-stratified expression

**✅ Updated 2026-05-21** — the GTEx v2 API *does* expose age-bracket-stratified data via an undocumented (or poorly-documented) parameter on the `/expression/geneExpression` endpoint. Prior SOP statement ("The public API does not expose per-sample age-labelled data directly") was incorrect or out of date.

**Method (verified working 2026-05-21):**

```bash
# Per-sample expression returned as one bracketed array per age decile
curl "https://gtexportal.org/api/v2/expression/geneExpression\
?datasetId=gtex_v10\
&gencodeId=ENSG00000198911.12\
&tissueSiteDetailId=Liver\
&attributeSubset=ageBracket\
&format=json"
```

Returns one record per age bracket (`20-29`, `30-39`, `40-49`, `50-59`, `60-69`, `70-79`) with `data: [array of per-sample TPM values]` and `subsetGroup` field naming the bracket.

**Caveats specific to this method:**
- Returns **per-sample TPM values** (post-normalization) but does NOT return donor IDs, sex, or other covariates — only the bracketed array. Useful for computing Spearman ρ across bracket midpoints; not useful for multivariate adjustment.
- Sample sizes are unequal across brackets. As of 2026-05-21, the typical liver sample distribution is roughly: 20-29: n≈8, 30-39: n≈18, 40-49: n≈38, 50-59: n≈99, 60-69: n≈93, 70-79: n≈6. The 20-29 and 70-79 bins are small and underpowered.
- Bulk RNA-seq is subject to cell-composition confounding — see § "Interpreting age-expression correlations" below. When bulk shows weak/null and single-cell shows clear directional change, trust the snRNA-seq result.

**Computing Spearman ρ across bracket midpoints (Python):**

```python
import urllib.request, json
midpoints = {'20-29':24.5,'30-39':34.5,'40-49':44.5,'50-59':54.5,'60-69':64.5,'70-79':74.5}
url = 'https://gtexportal.org/api/v2/expression/geneExpression?datasetId=gtex_v10&gencodeId=ENSG00000198911.12&tissueSiteDetailId=Liver&attributeSubset=ageBracket&format=json'
with urllib.request.urlopen(url) as r:
    d = json.load(r)
samples = [(midpoints[rec['subsetGroup']], v) for rec in d['data'] for v in rec['data']]
# Spearman ρ across (age_midpoint, TPM) tuples; n=sum of bracket sizes
```

**Alternative routes (still valid backup paths):**

- **GTEX v10 age-stratified summary files** — available from the GTEx portal downloads page under "Gene expression" → "Age-stratified median TPM." Download and filter locally.
- **GTEx multi-tissue aging analyses** — peer-reviewed papers (e.g., GTEx Consortium 2020, Science; Oliva et al. 2020, Science) report genome-wide age-eQTL and age-correlated expression with Spearman ρ per tissue. These are the best citable source when `gtex-aging-correlation:` needs published-paper provenance rather than direct-query provenance.
- **recount3 / GTEx in R:** The `recount3` Bioconductor package provides programmatic access to per-sample expression matrices with donor-age covariates, which can be correlated with donor age (and adjusted for sex, RIN, ischemic time, etc.).

```r
library(recount3)
# GTEx v10 data for a specific tissue
proj <- create_rse_manual(
  project = "SKIN_SUN_EXPOSED_LOWER_LEG",
  project_home = "data_sources/gtex",
  organism = "human",
  annotation = "gencode_v29",
  type = "gene"
)
```

### Step 4 — Recording `gtex-aging-correlation:`

This R22 frontmatter field on `type: protein` pages encodes directional age-correlation across GTEx tissues:

```yaml
gtex-aging-correlation: "pan-tissue: ρ=−0.15 (negative, kidney cortex strongest); data from Oliva-2020"
```

**Encoding convention (R22 decision):** Record as a free-text string (not a structured object) because correlation direction and magnitude vary widely by tissue and the wiki should summarize the pattern rather than store a full 54-tissue table. Use one of these canonical forms:

- `"pan-tissue: ρ=X (direction)"` — if correlation is consistent pan-tissue
- `"tissue-specific: ρ=X in <tissue> only; flat elsewhere"` — if heterogeneous
- `"not-significant pan-tissue"` — if no tissue reaches p<0.05 age-correlation after multiple testing
- `null` + `#gap/gtex-not-queried` — if not yet populated

Cite the supporting paper or dataset version in the body (not in frontmatter).

---

## Resource 2: Human Protein Atlas

**What it is:** HPA provides protein-level (immunohistochemistry, immunofluorescence) and RNA-level (bulk RNA-seq, single-cell RNA-seq) expression across tissues and cell types. Covers ~20,000 human proteins.

**Primary API endpoint:** `https://www.proteinatlas.org/api/`

```bash
# Tissue expression summary for a gene (returns JSON array)
curl "https://www.proteinatlas.org/api/search_download.php?search=KL&format=json&columns=g,gs,t,scl&compress=no"
```

**Key columns to request (`columns=` parameter):**
- `g` — gene symbol
- `gs` — gene synonyms
- `t` — tissue expression level (HPA RNA)
- `scl` — subcellular location
- `up` — UniProt accession
- `rnatsm` — RNA tissue specificity

**HPA tissue specificity categories:**
- `tissue enriched` — ≥5× higher in one tissue
- `group enriched` — elevated in a small tissue group
- `tissue enhanced` — moderately elevated
- `low tissue specificity` — ubiquitous
- `not detected`

**What to extract for wiki pages:**
- Tissue specificity category (place in "Tissue expression" section)
- Top 2–3 tissues with highest expression
- Whether HPA IHC shows age-related change in antibody staining (check the "Pathology Atlas" section for age correlation where available)

**HPA Proteomic Atlas:** `https://www.proteinatlas.org/humanproteome/proteome+age` — lists proteins with significant age-associated abundance changes in plasma. Check this for secreted or circulating proteins.

---

## Resource 3: Aging Atlas (CNCB)

**What it is:** The Aging Atlas database (`https://ngdc.cncb.ac.cn/aging/`) from the China National Center for Bioinformation. Hosts curated multi-omic aging datasets: transcriptomics, epigenomics, and single-cell data across multiple species and tissues with age metadata.

**Note on API access:** The Aging Atlas does not currently expose a programmatic REST API at the `/api/` path tested as of 2026-05-05. Data is available via the web portal and downloadable bulk files. Use the portal interactively or download tissue-specific aging transcriptomics matrices.

**What to extract:**
- Age-correlated DEGs (differentially expressed genes) in specific tissues
- Epigenomic aging marks per tissue
- Cross-species conservation of age-related expression changes

**Citing Aging Atlas data:** Record as: `Aging Atlas v2.0 (ngdc.cncb.ac.cn/aging), accessed YYYY-MM-DD` plus the associated paper DOI: 10.1093/nar/gkaa894 (Zhang et al. 2020, *Nucleic Acids Research*).

---

## Interpreting age-expression correlations

**Bulk vs single-cell confounds:** Bulk tissue RNA-seq correlations with age can reflect cell-composition shifts (e.g., increased myeloid infiltration in aged tissue) rather than per-cell expression changes. Always note which data type underlies the claim, and tag `#gap/cell-composition-confound` if only bulk data is available.

**Age bins in GTEx:** GTEx v10 donors span ages 20–79 in 10-year bins. The oldest bin (70–79) is underrepresented. Extrapolation beyond 80 years is speculative.

**GTEx donor selection bias:** GTEx donors are largely healthy decedents (trauma, sudden illness) — "healthy survivor" bias. Very old, frail individuals are underrepresented. Claims about "expression in the very old" should note this.

**Effect size vs significance:** GTEx aging analyses often have modest effect sizes (|ρ| 0.1–0.3) even at significant p-values due to large n. Note the effect size alongside p-values.

---

## Evidence table for tissue-expression claims

For cross-species expression claims, add the standard extrapolation table:

| Dimension | Status |
|---|---|
| Expression pattern conserved in humans? | yes / partial / no / unknown |
| Age-correlation direction conserved? | yes / partial / no / unknown |
| Single-cell resolution available? | yes / no |

---

## Workflow for populating `gtex-aging-correlation:`

1. Look up versioned ENSG ID via GTEx reference endpoint.
2. Run median tissue expression query to establish tissue specificity.
3. Search PubMed for `"<gene>" AND ("GTEx" OR "age-correlated expression")` to find published age-eQTL or age-correlation analyses that provide citable ρ values.
4. If no paper: note as `null` + `#gap/gtex-not-queried`.
5. Fill frontmatter field using the free-text convention above.
6. Write a "Tissue expression" section in the page body with 1–3 sentences + the citations.

---

## See also

- [[finding-protein-data]] — UniProt, canonical identity
- [[finding-singlecell-aging]] — single-cell age resolution
- [[finding-aging-specific]] — Aging Atlas bulk-data context
- [[finding-population-evidence]] — GTEx age-eQTL as instrument for MR
