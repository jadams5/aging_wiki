---
type: index
---

# aging_wiki — master catalog

A research wiki on the cellular and molecular mechanisms of human aging.

See [[CLAUDE]] for schema and conventions. See [[log]] for chronological history of changes. See [[gaps/planned-coverage]] for proactive coverage intent (priority ranking is driven by inbound-count discovery in [[lint-pass]] § Step 3, not a static checklist). See [[acronyms]] for the abbreviations glossary.

## Frameworks (navigational overlays)

Co-equal MOCs over the atomic-entity layer:

- [[hallmarks-of-aging]] — López-Otín et al. (12 hallmarks, 2023 update)
- [[sens-damage-categories]] — SENS Research Foundation (7 damage categories)
- [[frameworks/hallmark-causality-graph]] — opinionated wiki-internal upstream/downstream ordering of the 12 hallmarks (mechanistic, distinct from López-Otín's primary/antagonistic/integrative taxonomy)
- [[frameworks/causal-graph-data]] — companion edge-list with evidence-strength ratings + per-edge wiki-page anchors

Anatomical overlay (by body system):

- [[by-organ-system]] — index of the 11 body-system MOCs; slices the atomic layer by anatomy rather than by molecular damage type

Cross-cutting intervention slicers:

- [[frameworks/interventions-by-hallmark]] — intervention evidence matrix by hallmark (Dataview-driven)
- [[frameworks/interventions-by-modality]] — slice by delivery (drug vs. cell vs. dietary vs. gene-therapy vs. blood-product)
- [[frameworks/intervention-classes]] — canonical mechanism-class taxonomy used by `mechanisms:` frontmatter
- [[frameworks/intervention-by-target-immunogenicity]] — cross-cutting filter: immunogenicity tier of target dictates viable intervention class (Side-A vs Side-B vs direct molecular)

Biomarker layer:

- [[frameworks/biological-age-measurement]] — MOC for biological-age estimators (epigenetic / proteomic / composite clocks)

Training-prescription references:

- [[frameworks/heart-rate-zones]] — aerobic intensity tier reference (Z1–Z5, Tanaka HRmax, polarized vs threshold, Norwegian 4×4)

## Hallmarks of Aging — atomic pages

```dataview
TABLE category AS "Category", introduced AS "Introduced"
FROM "hallmarks"
WHERE type = "hallmark"
SORT category, file.name
```

> **Note (2026-05-07):** [[hallmarks/disabled-adaptive-immunity]] is a **proposed candidate hallmark** (not formally adopted by López-Otín et al.). It uses `introduced: proposed` — a schema extension. The Dataview block above will include it; filter by `introduced != "proposed"` to see only the 12 formally adopted hallmarks.

## Pathways

```dataview
TABLE kegg, reactome
FROM "pathways"
WHERE type = "pathway"
SORT file.name
```

## Proteins

```dataview
TABLE uniprot, hgnc
FROM "molecules/proteins"
WHERE type = "protein"
SORT file.name
```

## Compounds

```dataview
TABLE clinical-stage AS "Stage", human-evidence-level AS "Human evidence"
FROM "molecules/compounds"
WHERE type = "compound"
SORT file.name
```

## Processes

```dataview
LIST FROM "processes" WHERE type = "process"
```

## Phenotypes

```dataview
LIST FROM "phenotypes" WHERE type = "phenotype"
```

## Organ systems, tissues & cell types

Body-system navigational overlays (`type: organ-system`, in `organ-systems/`) — see [[by-organ-system]] for the index and the cross-system rollup:

- [[cardiovascular-system]] · [[musculoskeletal-system]] · [[integumentary-system]] · [[nervous-system]] · [[hematopoietic-system]] · [[immune-system]] · [[endocrine-system]] · [[digestive-system]] · [[urinary-system]] · [[respiratory-system]] · [[reproductive-system]]

```dataview
LIST FROM "organ-systems"
```

Atomic tissue/organ pages:

```dataview
LIST FROM "tissues" WHERE type = "tissue"
```

Cell types:

```dataview
LIST FROM "cell-types" WHERE type = "cell-type"
```

## Interventions

```dataview
LIST FROM "interventions"
```

## Model organisms

```dataview
TABLE common-name AS "Common name", typical-lifespan AS "Lifespan"
FROM "model-organisms"
WHERE type = "model-organism"
```

## Studies extracted

```dataview
TABLE year, organism, n-subjects, study-design
FROM "studies"
WHERE type = "study"
SORT year DESC
LIMIT 25
```

## Methods reference

Laboratory and analytical techniques cited frequently in `studies/`. Anchors recurring methodological caveats. R46 pilot scope; see CLAUDE.md § `type: method` for schema.

```dataview
TABLE category, abbreviation, verified
FROM "methods"
WHERE type = "method"
SORT category ASC
```

## Open hypotheses

```dataview
TABLE status, proposed-year
FROM "hypotheses"
WHERE type = "hypothesis"
```

## Gap tracker

See [[gaps/README]] for aggregated knowledge gaps by category.

## Personal-application layer (protocols)

The research above is general knowledge; the *protocols layer* is where one person applies it to themselves (baseline, plans, labs, tracking). Real personal data lives in a **private** `protocols/` directory, git-ignored from this public repo and tracked separately. See [[protocols-template/README|protocols-template]] for a public, fake-data skeleton of that system and an onboarding guide for starting your own. The privacy architecture is documented in [[CLAUDE]] § "Privacy posture".

## SOPs

- [[retrieving-papers]] — using a local paper archive
- [[extracting-evidence]] — what to record from a primary source
- [[finding-pathway-data]] — KEGG, Reactome, WikiPathways
- [[finding-protein-data]] — UniProt, NCBI Gene, STRING
- [[finding-compound-data]] — PubChem, DrugBank, ChEMBL
- [[finding-aging-specific]] — GenAge, AgingAtlas, Open Targets
- [[adding-a-claim]] — citation conventions
- [[lint-pass]] — periodic health check
