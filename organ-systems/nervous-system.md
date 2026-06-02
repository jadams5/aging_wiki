---
type: organ-system
aliases: [nervous system, neural system]
key-organs: ["[[brain]]"]
key-tissues: ["[[brain]]"]
key-cell-types: ["[[neurons]]", "[[astrocytes]]", "[[microglia]]", "[[oligodendrocytes]]", "[[neural-stem-cells]]"]
key-aging-phenotypes: ["[[neurodegeneration]]", "[[alzheimers-disease]]", "[[parkinsons-disease]]"]
related-hallmarks: ["[[cellular-senescence]]", "[[loss-of-proteostasis]]", "[[chronic-inflammation]]", "[[mitochondrial-dysfunction]]"]
parent-system: null
---

# Nervous System

Navigational overlay for the brain, spinal cord, peripheral nerves, and their resident cells. The nervous system is largely post-mitotic, making proteostasis collapse, mitochondrial decline, and neuroinflammation (microglial activation) the dominant aging mechanisms. The major age-related neurodegenerative diseases converge on protein-aggregation pathology layered on top of these substrates.

The system is conventionally divided into the **central nervous system** (brain + spinal cord) and the **peripheral nervous system** (cranial/spinal/autonomic nerves); both are covered here until sub-system MOCs are warranted.

## Tissues & organs

- [[brain]] — the central organ; regional atrophy, white-matter changes, and aggregate pathology with age

## Cell types

- [[neurons]] — post-mitotic; vulnerable to proteostasis and mitochondrial failure
- [[astrocytes]] — homeostatic support; reactive astrogliosis with age
- [[microglia]] — CNS-resident immune cells; "microglial priming"/neuroinflammation (overlap with [[immune-system]])
- [[oligodendrocytes]] — myelinating cells; white-matter/myelin decline
- [[neural-stem-cells]] — adult neurogenesis (hippocampus); declines with age

## Aging phenotypes

- [[neurodegeneration]] — the umbrella phenotype
- [[alzheimers-disease]] — amyloid-β / tau pathology
- [[parkinsons-disease]] — α-synuclein / dopaminergic loss

## Key molecular axes

- Proteostasis & aggregation: [[loss-of-proteostasis]], [[autophagy]], tau, [[dkk1]] (Wnt/synapse)
- Neuroinflammation: [[microglia]], [[chronic-inflammation]]

## Auto-aggregated tissue members

```dataview
LIST FROM "tissues"
WHERE parent-system = "nervous-system"
SORT file.name
```

## Missing / planned pages

- `[[spinal-cord]]`, `[[peripheral-nerve]]`, `[[blood-brain-barrier]]`, `[[hippocampus]]`, `[[central-nervous-system]]`, `[[peripheral-nervous-system]]` — not yet seeded #stub

## See also

- [[by-organ-system]] — index of all body-system MOCs
- [[loss-of-proteostasis]] — the dominant proteostasis hallmark for post-mitotic neurons
- [[immune-system]] — microglia are the brain's resident macrophages
