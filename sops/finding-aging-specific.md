---
type: sop
aliases: [aging databases, GenAge, AgingAtlas]
---

# SOP: finding aging-specific data

Beyond the general molecular-biology databases, several resources are aging-specific. Use them when researching genes, pathways, or interventions that have been studied in the context of aging.

## Curated gene/intervention databases

### GenAge — `https://genomics.senescence.info/genes/`

**Best for:** Genes with experimentally demonstrated effects on aging or longevity. Two subsets:
- **GenAge-human** (~300 genes) — genes with evidence linking them to human aging.
- **GenAge-models** (~2000 genes) — genes that affect lifespan in model organisms (mouse, worm, fly, yeast).

**What to extract:** GenAge entry ID, the supporting reference list, the organism in which the effect was shown.

**Caveat:** Inclusion criteria are loose — a single paper showing a lifespan effect in worms qualifies. Always check the strength of the underlying evidence.

### LongevityMap — `https://genomics.senescence.info/longevity/`

**Best for:** GWAS hits and candidate-gene studies for human longevity. ~3000 entries.

**What to extract:** SNPs and effect sizes for human longevity associations. Useful for distinguishing "longevity gene in mice" from "longevity-associated locus in humans."

### DrugAge — `https://genomics.senescence.info/drugs/`

**Best for:** Compounds shown to extend lifespan in any model organism. ~700 entries.

**What to extract:** Compound, organism tested, magnitude of lifespan extension, reference paper.

### CellAge — `https://genomics.senescence.info/cells/`

**Best for:** Genes whose manipulation alters cellular senescence (induces, prevents, or reverses).

### AnAge — `https://genomics.senescence.info/species/`

**Best for:** Maximum lifespan, body weight, and life-history traits across ~4000 species. Useful when designing extrapolation arguments (e.g., "species X lives Y× longer than expected for body size — what's special about it?").

## Atlas-style resources

### Aging Atlas — `https://ngdc.cncb.ac.cn/aging/`

**Best for:** Multi-omics aging data (transcriptomics, epigenomics, single-cell across tissues and ages). Curated by Beijing Institute of Genomics.

**What to extract:** Tissue- and cell-type-specific expression changes with age, with references.

### Tabula Muris Senis — `https://tabula-muris-senis.ds.czbiohub.org/`

**Best for:** Single-cell transcriptomic atlas of mouse aging across many tissues and ages. Authoritative resource for "what changes in cell type X with age in mouse."

### GTEx — `https://gtexportal.org/`

**Best for:** Human tissue gene expression with age and sex annotations. Use to check whether mouse expression-with-age findings translate to humans.

## Translation / drug-target resources

### Open Targets — `https://platform.opentargets.org/`

**Best for:** Disease-target evidence aggregation. For aging, search by aging-related diseases (Alzheimer's, sarcopenia, frailty, cardiovascular disease, type 2 diabetes) and look at the genetic and chemical evidence supporting each target.

**What to extract:** Target-disease association scores; the underlying evidence types (genetics, drugs, RNA expression, animal models, text mining).

### Open Targets Genetics — `https://genetics.opentargets.org/`

**Best for:** Mapping GWAS hits to likely causal genes via L2G (locus-to-gene) scoring.

## Trial / intervention tracking

### ClinicalTrials.gov — `https://clinicaltrials.gov/`

**Best for:** Active and completed human trials. Search by intervention name, condition (use both "aging" and aging-related conditions like "frailty"), or sponsor.

**What to extract:** NCT number, phase, status, primary outcomes, sponsor, completion date.

For senolytic and geroprotector trials, this is the canonical source.

### EU Clinical Trials Register — `https://www.clinicaltrialsregister.eu/`

**Best for:** EU trials not registered on ClinicalTrials.gov.

## Workflow tips

- **Start narrow, expand outward.** For a specific gene → GenAge → then UniProt + STRING + pathways.
- **For interventions → DrugAge first** to see if it's been tested in any organism, then ChEMBL + DrugBank for mechanism.
- **For "is X a hallmark or driver of aging" questions → Aging Atlas + Open Targets** for translational evidence.
- **For "is this mouse finding likely to replicate in humans" → GTEx + LongevityMap** for human-side support.

## What NOT to trust

- "Top supplements for longevity" listicles (use DrugAge instead).
- "Anti-aging gene" press releases (check GenAge for the actual evidence).
- Old (pre-2015) age-effect bulk-tissue transcriptomics — single-cell data has revealed major cell-composition confounds.

## See also

- [[finding-pathway-data]]
- [[finding-protein-data]]
- [[finding-compound-data]]
- [[_extrapolation-guide]] — for evaluating model→human translation
