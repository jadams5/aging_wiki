---
type: sop
aliases: [pathway databases, KEGG, Reactome]
---

# SOP: finding cellular pathway data online

When researching a signaling pathway (e.g., mTOR, NF-κB, AMPK), use these primary databases. Cross-reference at least two before writing pathway-level claims.

## Primary databases (use first)

### Reactome — `https://reactome.org/`

**Best for:** Curated, hierarchically organized human pathways with reaction-level detail. Each step has Pubmed-cited evidence.

**What to extract:**
- Reactome ID (e.g., `R-HSA-165159` for mTOR signaling)
- Pathway hierarchy (parent / child pathways)
- Participating reactions and their substrates/products
- Disease associations from "Disease" panel

**Citation:** `Reactome v{version}, accessed YYYY-MM-DD, R-HSA-XXXXX`

### KEGG — `https://www.kegg.jp/`

**Best for:** Visual pathway diagrams; canonical reference for cross-species comparison. Less granular than Reactome but covers more organisms.

**What to extract:**
- KEGG ID (e.g., `hsa04150` for mTOR signaling pathway in human)
- Pathway map (downloadable image — store in `sources/images/` if used)
- Cross-references to other databases (UniProt, NCBI Gene)

**Citation:** `KEGG entry hsa04150, accessed YYYY-MM-DD`

**Note:** KEGG academic-use licensing changed in 2023; verify terms before redistributing diagrams.

### WikiPathways — `https://www.wikipathways.org/`

**Best for:** Community-curated pathways, often more current than Reactome/KEGG for recently-discovered nodes. Open license.

**What to extract:**
- WikiPathways ID (e.g., `WP1471` for AMPK signaling)
- Last-edited date (community pages can drift in quality)
- Cross-references

## Secondary databases (use to cross-check)

| Database | URL | Use for |
|---|---|---|
| PathBank | https://pathbank.org/ | Metabolic pathways with metabolite-level detail |
| INOH | https://dbarchive.biosciencedbc.jp/en/inoh/ | Curated immune/signaling pathways |
| SIGNOR | https://signor.uniroma2.it/ | Causal interactions between signaling proteins |
| PANTHER | http://www.pantherdb.org/ | Pathway analysis with evolutionary annotation |
| MetaCyc / BioCyc | https://biocyc.org/ | Metabolism-focused, multi-organism |

## Workflow for a new pathway page

1. Search Reactome for the pathway name → grab Reactome ID + parent/child hierarchy.
2. Cross-reference KEGG → grab KEGG ID + diagram (if license permits).
3. List the *key nodes* (5–15 most-studied proteins) with wikilinks to their protein pages.
4. List upstream pathways (what activates this) and downstream (what this activates).
5. Map to one or more Hallmarks of Aging.
6. Find 2–5 high-citation review articles via `archive search` or PubMed → create study pages for the most-cited reviews and cite them in the pathway page intro.

## Frontmatter example

```yaml
---
type: pathway
aliases: [mTORC1, mTORC2, mechanistic target of rapamycin]
kegg: hsa04150
reactome: R-HSA-165159
wikipathways: WP1471
key-nodes: ["[[mtor]]", "[[raptor]]", "[[rictor]]", "[[s6k1]]", "[[4ebp1]]"]
upstream: ["[[insulin-igf1]]", "[[amino-acid-sensing]]"]
downstream: ["[[autophagy]]", "[[protein-synthesis]]", "[[lipogenesis]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
sens-categories: []
---
```

## What NOT to trust

- Wikipedia pathway sections (use as starting point only; never as primary source).
- News articles and press releases.
- Single-lab "novel pathway" claims without independent replication — flag with `#gap/needs-replication`.
- AI-generated pathway diagrams (always verify against a curated database).

## See also

- [[finding-protein-data]] — for the individual proteins in a pathway
- [[finding-compound-data]] — for drugs/inhibitors targeting pathway nodes
