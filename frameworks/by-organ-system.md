---
type: framework
aliases: [organ systems, body systems, by organ system, organ-system index]
sources: []
covers: [organ-systems, tissues, cell-types, phenotypes]
---

# By Organ System

Top-level index of the body-system navigational overlays. Each body system has a `type: organ-system` MOC in `organ-systems/` that aggregates the tissue/organ, cell-type, phenotype, and pathway atomic pages belonging to that system. Tissue pages declare membership via their `parent-system:` frontmatter field (the slug matches the MOC filename), which powers the Dataview rollups below.

This is the anatomical complement to the two mechanism-organized framework MOCs, [[hallmarks-of-aging]] and [[sens-damage-categories]]: the same atomic pages are sliced by *where in the body* rather than by *molecular damage type*.

## Body-system MOCs

| System | MOC | Maturity |
|---|---|---|
| Cardiovascular | [[cardiovascular-system]] | rich |
| Musculoskeletal | [[musculoskeletal-system]] | rich |
| Integumentary (skin) | [[integumentary-system]] | rich |
| Nervous | [[nervous-system]] | rich |
| Hematopoietic | [[hematopoietic-system]] | moderate |
| Immune / lymphatic | [[immune-system]] | moderate |
| Endocrine | [[endocrine-system]] | developing |
| Digestive / GI | [[digestive-system]] | developing (microbiome-led) |
| Urinary / renal | [[urinary-system]] | planned (mineral-axis-anchored) |
| Respiratory | [[respiratory-system]] | planned |
| Reproductive | [[reproductive-system]] | planned |

## All tissue pages grouped by system

```dataview
TABLE parent-system AS "System", file.link AS "Tissue/Organ"
FROM "tissues"
WHERE parent-system
SORT parent-system, file.name
```

## Tissue pages missing a system assignment

```dataview
LIST FROM "tissues"
WHERE !parent-system
SORT file.name
```

## See also

- [[hallmarks-of-aging]] · [[sens-damage-categories]] — the mechanism-organized framework MOCs
- [[CLAUDE]] § type: organ-system — the schema for these overlays
