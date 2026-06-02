---
type: organ-system
aliases: [hematopoietic system, blood system, haematopoietic system]
key-organs: []
key-tissues: ["[[bone-marrow]]"]
key-cell-types: ["[[hematopoietic-stem-cells]]", "[[mesenchymal-stem-cells]]"]
key-aging-phenotypes: ["[[anemia-of-aging]]", "[[clonal-hematopoiesis]]", "[[immunosenescence]]"]
related-hallmarks: ["[[stem-cell-exhaustion]]", "[[genomic-instability]]", "[[chronic-inflammation]]"]
parent-system: null
---

# Hematopoietic System

Navigational overlay for blood-cell production and the bone-marrow niche. Hematopoietic aging is one of the best-characterized stem-cell-aging systems: HSCs accumulate DNA damage and epigenetic drift, skew toward myeloid output, and give rise to clonal expansions (CHIP) that carry inflammatory and cardiovascular risk. It overlaps heavily with the [[immune-system]] (which it supplies) and connects to the [[musculoskeletal-system]] through the shared marrow niche.

## Tissues & organs

- [[bone-marrow]] — the hematopoietic niche; marrow adiposity rises with age

## Cell types

- [[hematopoietic-stem-cells]] — myeloid-biased, less self-renewing, clonally restricted with age
- [[mesenchymal-stem-cells]] — stromal niche support (BM-MSCs); fate-drift remodels the niche

## Aging phenotypes

- [[anemia-of-aging]] — unexplained anemia of the elderly
- [[clonal-hematopoiesis]] — CHIP; age-acquired driver-mutation clones
- [[immunosenescence]] — downstream of myeloid-biased, lymphoid-poor output (shared with [[immune-system]])

## Key molecular axes

- CHIP drivers: [[sf3b1]], DNMT3A, TET2, JAK2 (see [[clonal-hematopoiesis]])
- Inflammatory coupling: [[il-6]], [[chronic-inflammation]]

## Auto-aggregated tissue members

```dataview
LIST FROM "tissues"
WHERE parent-system = "hematopoietic-system"
SORT file.name
```

## Missing / planned pages

- `[[blood]]`, `[[spleen]]`, `[[erythrocytes]]`, `[[platelets]]`, `[[megakaryocytes]]`, `[[neutrophils]]` — not yet seeded #stub

## See also

- [[by-organ-system]] — index of all body-system MOCs
- [[immune-system]] — supplied by hematopoiesis; shares HSCs and CHIP
- [[stem-cell-exhaustion]] — the defining hallmark for HSC aging
