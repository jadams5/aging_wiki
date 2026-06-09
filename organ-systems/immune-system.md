---
type: organ-system
aliases: [immune system, lymphatic-system, lymphatic system, immune-lymphatic system]
key-organs: []
key-tissues: ["[[bone-marrow]]", "[[thymus]]"]
key-cell-types: ["[[hematopoietic-stem-cells]]", "[[microglia]]", "[[langerhans-cells]]"]
key-aging-phenotypes: ["[[immunosenescence]]", "[[clonal-hematopoiesis]]"]
related-hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]", "[[stem-cell-exhaustion]]"]
parent-system: null
---

# Immune System

Navigational overlay for innate and adaptive immunity, the lymphoid organs, and tissue-resident immune cells. Immune aging is bidirectional: declining protective immunity (**immunosenescence**) coexists with rising sterile inflammation (**inflammaging**), and the two are mechanistically linked through senescent-cell SASP, thymic involution, and myeloid-biased hematopoiesis. This overlay also subsumes the lymphatic system until it warrants its own MOC.

## Tissues & organs

- [[bone-marrow]] — source of all immune cells (shared with [[hematopoietic-system]])
- [[thymus]] — site of T-cell maturation; thymic involution drives immunosenescence. CT-derived [[thymic-health-score|thymic health]] is prognostic for mortality and cancer-immunotherapy response (Bernatz 2026)

## Cell types

- [[hematopoietic-stem-cells]] — myeloid-biased output and clonal drift with age
- [[microglia]] — CNS-resident macrophages (shared with [[nervous-system]])
- [[langerhans-cells]] — skin-resident dendritic cells (shared with [[integumentary-system]])

## Aging phenotypes

- [[immunosenescence]] — decline of adaptive immunity; impaired vaccine response, infection susceptibility
- [[clonal-hematopoiesis]] — age-acquired clonal expansions (CHIP); inflammatory and cardiovascular risk (overlap with [[hematopoietic-system]])

## Key molecular axes

- Inflammaging mediators: [[il-6]], [[chronic-inflammation]], the [[nlrp3-inflammasome]] / [[caspase-1]] axis
- CHIP drivers: [[sf3b1]], DNMT3A, TET2 (see [[clonal-hematopoiesis]])
- Senescence-immune surveillance: [[senescence-immune-surveillance]], [[senescence-escape]]

## Auto-aggregated tissue members

```dataview
LIST FROM "tissues"
WHERE parent-system = "immune-system" OR parent-system = "lymphatic-system"
SORT file.name
```

## Missing / planned pages

- [[thymus]] — now written out (thymic involution + CT thymic-health biomarker). [[spleen]] — still a **stub** (needs full content)
- `[[lymph-nodes]]`, `[[lymphatic-vessels]]`, `[[tonsils]]` — lymphoid organs not yet seeded #stub
- `[[t-cells]]`, `[[b-cells]]`, `[[macrophages]]`, `[[neutrophils]]`, `[[nk-cells]]`, `[[dendritic-cells]]` — immune cell types not yet seeded #stub

## See also

- [[by-organ-system]] — index of all body-system MOCs
- [[hematopoietic-system]] — shares bone marrow, HSCs, and the CHIP phenotype
- [[disabled-adaptive-immunity]] · [[chronic-inflammation]] — the two immune-relevant hallmarks
