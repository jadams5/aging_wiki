---
type: sop
aliases: [single-cell aging, scRNA-seq, Tabula Muris Senis, CellxGene, TMS, aging atlas single-cell]
---

# SOP: finding single-cell aging data

Use this SOP to find and interpret single-cell transcriptomic (scRNA-seq) data on cell-type-specific changes during aging. The key resources are Tabula Muris Senis (mouse, gold-standard multi-tissue aging atlas), CellxGene Census (multi-study human/mouse aggregator), and the Aging Atlas CNCB single-cell tier. Results from this SOP populate `single-cell-aging-signature:` on cell-type pages and inform "Cell-type aging" subsections on protein/process pages.

---

## When to use single-cell data

- Writing or extending a `type: cell-type` page — the cell-type's aging signature belongs in frontmatter (`single-cell-aging-signature:`) and in the body.
- Checking whether a bulk tissue expression-with-age claim is cell-composition confound vs genuine per-cell change (see also `sops/finding-tissue-expression.md`).
- Describing which cell types in a tissue show the strongest aging-associated transcriptional changes.
- Validating that a protein implicated in aging (from mouse knockout or bulk transcriptomics) shows age-correlated expression specifically in relevant cell types.

---

## Resource 1: Tabula Muris Senis (TMS)

**What it is:** The mouse single-cell aging atlas. scRNA-seq and snRNA-seq of ~350K cells from 23 tissues collected from C57BL/6J mice at 1, 3, 18, 21, 24, and 30 months. Covers 120+ cell types. The authoritative reference for "what happens in cell type X with age in mouse."

**Primary paper:** Tabula Muris Consortium (2020), *Nature* — DOI: 10.1038/s41586-020-2496-1.

**Data access:**

| Access route | URL / detail |
|---|---|
| Interactive browser | `https://tabula-muris-senis.ds.czbiohub.org/` |
| Figshare DOI cluster | `10.6084/m9.figshare.8273102` (plus companion figshare IDs per tissue) |
| AWS Open Data | `s3://czb-tabula-muris-senis/` (free, requester-pays for egress) |
| CellxGene Explorer | Hosted collections via CellxGene Census (see Resource 2) |

**Figshare datasets — key IDs:**
- `10.6084/m9.figshare.8273102` — full atlas (10× and Smart-Seq2, combined)
- Individual tissue h5ad files downloadable from figshare; file size 50–500 MB each

**Programmatic access (recommended for scripting):**

```python
import cellxgene_census
import tiledb

# Open the Census (includes TMS data under mus_musculus)
census = cellxgene_census.open_soma(census_version="stable")

# Query TMS heart cells from aged vs young mice
obs_df = census["census_data"]["mus_musculus"].obs.read(
    value_filter="tissue == 'heart' and dataset_title =~ '.*Tabula Muris Senis.*'",
    column_names=["cell_type", "development_stage", "sex", "dataset_title"]
).concat.to_pandas

census.close
```

**Key metadata fields in TMS obs:**
- `tissue` — tissue of origin (anatomical term)
- `age` — donor age in months (1, 3, 18, 21, 24, 30)
- `cell_ontology_class` — CL: ontology cell type
- `free_annotation` — fine-grained curator annotation
- `method` — `10x` or `smartseq2`

**What to extract for a cell-type page:**

1. Differentially expressed genes between young (3 months) and old (24 months) in the target cell type — top 10 up/down.
2. Whether the cell type shows transcriptional "aging score" changes (Tabula Muris Senis companion paper reports per-tissue and per-cell-type aging scores using gene-module scoring).
3. Cell-composition changes: does the proportion of this cell type change with age in its tissue?

**Caveat:** TMS is mouse only. All TMS findings should carry the standard extrapolation table (see `CLAUDE.md`) before inferring human equivalents.

---

## Resource 2: CellxGene Census (Chan-Zuckerberg Initiative)

**What it is:** A unified, harmonized aggregation of curated scRNA-seq datasets from CZ CELLxGENE Discover. As of 2025, contains >80 million human cells and >20 million mouse cells from hundreds of datasets, all in standardized AnnData/SOMA format. Supports cross-dataset queries.

**Primary API:** `https://api.cellxgene.cziscience.com/curation/v1/` (dataset metadata)
**Python SDK (recommended):** `cellxgene_census` package (PyPI)

### Dataset discovery

```bash
# List all datasets, paginated (returns metadata including title, organism, tissues, schema)
curl "https://api.cellxgene.cziscience.com/curation/v1/datasets?limit=100"
```

**Confirmed response fields (validated 2026-05-05):**
- `dataset_id`, `dataset_version_id`
- `title` — human-readable dataset name
- `cell_count`, `primary_cell_count`, `mean_genes_per_cell`
- `assay` — e.g., `[{"label": "10x 3' v3"}]`
- `tissue` — array of ontology terms
- `organism` — Homo sapiens / Mus musculus
- `development_stage` — age/developmental stage of donors
- `disease` — disease context (normal vs disease)
- `cell_type` — array of cell types
- `explorer_url` — direct link to CellxGene explorer for this dataset

### Programmatic cell-type query

```python
import cellxgene_census

census = cellxgene_census.open_soma(census_version="stable")

# Human aged tissue (kidney, muscle, brain) cells
obs_df = census["census_data"]["homo_sapiens"].obs.read(
    value_filter=(
        "tissue_general in ['kidney', 'skeletal muscle tissue', 'brain'] "
        "and disease == 'normal'"
    ),
    column_names=["cell_type", "development_stage", "donor_id", "tissue", "dataset_id"]
).concat.to_pandas

# Summarize by age bracket
obs_df["age_group"] = obs_df["development_stage"].str.extract(r"(\d+)")

census.close
```

**Key metadata fields in Census obs:**
- `tissue_general` — coarse tissue (e.g., `kidney`)
- `tissue` — fine tissue (e.g., `kidney cortex`)
- `cell_type` — CL ontology cell type string
- `development_stage` — HsapDv ontology term (e.g., "70-year-old human stage")
- `disease` — EFO ontology (filter to `normal` for aging comparisons)
- `sex`, `self_reported_ethnicity`
- `donor_id` — for grouping per-donor

**Age filtering in Census:** Human aging datasets use HsapDv ontology development stage terms. For filtering to aged adults, use:
```python
# ages 60–89 years
value_filter = "development_stage in ['HsapDv:0000246', 'HsapDv:0000247', 'HsapDv:0000248']"
```
Alternatively filter on a string pattern: `development_stage =~ ".*[6-9][0-9]-year.*"`.

---

## Resource 3: Aging Atlas CNCB — single-cell tier

**What it is:** The CNCB Aging Atlas (`https://ngdc.cncb.ac.cn/aging/`) curates published single-cell aging datasets with standardized metadata and interactive visualization. Includes human and mouse scRNA-seq studies focused on aging phenotypes.

**Note:** The Aging Atlas does not expose a live REST API (confirmed 2026-05-05). Data is accessed via the web portal and bulk downloads from the CNCB FTP.

**When to use:** For finding curated aging-focused scRNA datasets not in CellxGene Census. The Aging Atlas editorial curation is tighter (aging studies only); Census is broader but less aging-focused.

**Citing Aging Atlas:** Paper DOI 10.1093/nar/gkaa894 (Zhang et al. 2020, *NAR*). Include database version in citation.

---

## The `single-cell-aging-signature:` frontmatter field

This R22-introduced field on `type: cell-type` pages encodes the cell type's aging signature as a free-text summary:

```yaml
single-cell-aging-signature: "TMS 24m vs 3m: upregulated p21, p16, Ccl2; downregulated Myh7, Tnni3; cell proportion stable; data from Tabula Muris Senis 2020"
```

**Encoding convention:**
- Start with data source and age comparison (e.g., `TMS 24m vs 3m:`)
- List top 3–5 upregulated genes (gene symbols, mouse or human)
- List top 3–5 downregulated genes
- Note whether cell proportions change with age
- End with the data source citation
- Use `null` + `#gap/no-singlecell-data` if not yet populated

**Full table:** For cell-type pages with extensive data, also add a body table with DEGs, effect sizes, and the species/tissue context. The frontmatter field is a quick-access summary only.

---

## Interpreting single-cell aging data — caveats

**Batch effects across studies:** Cross-dataset comparisons in CellxGene Census require batch correction. Genes that appear up in one study's "aged" condition may reflect technical batch rather than biology. Prefer within-study comparisons (e.g., TMS which controls technology and genetic background).

**Cell annotation heterogeneity:** Cell type labels differ across studies. "Macrophage" in one study may be "monocyte-derived macrophage" in another. Use CL ontology terms where available for cross-study comparability.

**Pseudobulk for DEG:** Single-cell DEG analysis is best done pseudobulk (aggregate per-cell-type per-donor, then use bulk DEG methods). Naive single-cell tests inflate N and produce spurious significance. When citing scRNA-seq DEGs, note whether the paper used pseudobulk or naive approaches.

**Mouse vs human:** All TMS data is mouse. Map findings to human where possible via Census human data or HPA single-cell. Flag any claim extrapolated from mouse scRNA without human support as `#gap/needs-human-replication`.

**Tissue composition vs per-cell expression:** Bulk RNA-seq "age-correlated expression" is often explained by cell-type proportion shifts (e.g., more senescent cells in aged tissue). Single-cell data disambiguates this. When citing bulk tissue aging claims, always check if single-cell data is available to rule out cell-composition confound.

---

## Workflow for a cell-type page

1. Search CellxGene Census for datasets containing this cell type across ages in both human and mouse.
2. Query TMS for the mouse equivalent — extract top DEGs (young vs old) if the cell type is represented in TMS.
3. Cross-check top DEGs against the protein pages already in the wiki (do any implicated genes have pages here?).
4. Summarize cell-proportion changes (is this cell type more/less abundant in aged tissue?).
5. Fill `single-cell-aging-signature:` frontmatter.
6. Write a "Single-cell aging evidence" section in the body with citations.
7. If no TMS representation and no Census data: set field to `null` + `#gap/no-singlecell-data`.

---

## Linking single-cell data to protein pages

On `type: protein` pages, under a "Cell-type-specific expression" heading, reference relevant cell-type pages (via `[[wikilinks]]`) and note whether TMS or Census data shows age-correlated expression of this protein specifically in one cell type.

---

## See also

- [[finding-tissue-expression]] — bulk tissue GTEx data (complementary to scRNA)
- [[finding-aging-specific]] — Aging Atlas bulk-omics tier, Tabula Muris Senis overview
- [[finding-population-evidence]] — human genetic validation of single-cell findings
- `model-organisms/_extrapolation-guide.md` — mouse-to-human extrapolation criteria
