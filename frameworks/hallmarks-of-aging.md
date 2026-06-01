---
type: framework
aliases: [Hallmarks of Aging, López-Otín hallmarks]
sources: ["[[studies/lopez-otin-2013-hallmarks-of-aging]]", "[[studies/lopez-otin-2023-hallmarks-expanding-universe]]"]
covers: [hallmarks]
---

# Hallmarks of Aging

A navigational MOC over the 12 hallmarks defined by López-Otín, Blasco, Partridge, Serrano, and Kroemer (2013, expanded 2023). The original 2013 paper defined 9 hallmarks; the 2023 update added 3 more.

> A hallmark of aging should ideally fulfill three criteria: (1) manifest during normal aging; (2) experimental aggravation accelerates aging; (3) experimental amelioration retards aging and increases healthspan.

— López-Otín et al. 2013

This page is a *navigational overlay* — facts live on the per-hallmark pages in `hallmarks/`.

---

## A note on what's verified

Both source papers are **verified against the full PDFs** as of 2026-05-04:
- [[studies/lopez-otin-2013-hallmarks-of-aging]] — full text at [doi.org/10.1016/j.cell.2013.05.039](https://doi.org/10.1016/j.cell.2013.05.039)
- [[studies/lopez-otin-2023-hallmarks-expanding-universe]] — full text at [doi.org/10.1016/j.cell.2022.11.001](https://doi.org/10.1016/j.cell.2022.11.001)

All 12 hallmarks, the Primary/Antagonistic/Integrative categorization, and the causal-cascade hypothesis (Primary triggers → Antagonistic responses → Integrative outcomes) are confirmed against the source figures. The 2023 paper additionally introduces a "strata of organismal organization" overlay (Figure 7) mapping each hallmark to a level from molecules → meta-organism — this is a complementary axis not yet integrated into this MOC.

## Primary hallmarks (causes of damage)

These are the upstream causes of cellular damage; their effects accumulate progressively.

| Hallmark | Page | Introduced |
|---|---|---|
| Genomic instability | [[genomic-instability]] | 2013 |
| Telomere attrition | [[telomere-attrition]] | 2013 |
| Epigenetic alterations | [[epigenetic-alterations]] | 2013 |
| Loss of proteostasis | [[loss-of-proteostasis]] | 2013 |
| Disabled macroautophagy | [[disabled-macroautophagy]] | 2023 |

## Antagonistic hallmarks (responses to damage)

Initially compensatory but become deleterious when chronic.

| Hallmark | Page | Introduced |
|---|---|---|
| Deregulated nutrient-sensing | [[deregulated-nutrient-sensing]] | 2013 |
| Mitochondrial dysfunction | [[mitochondrial-dysfunction]] | 2013 |
| Cellular senescence | [[cellular-senescence]] | 2013 |

## Integrative hallmarks (the visible result)

The systemic-level manifestations.

| Hallmark | Page | Introduced |
|---|---|---|
| Stem cell exhaustion | [[stem-cell-exhaustion]] | 2013 |
| Altered intercellular communication | [[altered-intercellular-communication]] | 2013 |
| Chronic inflammation | [[chronic-inflammation]] | 2023 |
| Dysbiosis | [[dysbiosis]] | 2023 |

---

## Crosswalk to SENS damage categories

| Hallmark | SENS category |
|---|---|
| Cellular senescence | [[sens-damage-categories#3-death-resistant-cells-apoptosenes]] |
| Mitochondrial dysfunction | [[sens-damage-categories#4-mitochondrial-mutations-mitosens]] |
| Stem cell exhaustion | [[sens-damage-categories#1-cell-loss-and-atrophy-replenisens]] |
| Loss of proteostasis (intracellular) | [[sens-damage-categories#5-intracellular-waste-products-lysosens]] |
| Loss of proteostasis (extracellular aggregates) | [[sens-damage-categories#6-extracellular-waste-products-amylosens]] |
| Genomic instability (cancer angle) | [[sens-damage-categories#2-division-obsessed-cells-oncosens]] |
| Altered intercellular communication (ECM stiffening) | [[sens-damage-categories#7-extracellular-matrix-stiffening-glycosens]] |

The frames are not 1:1. SENS organizes by *what kind of repair is needed*; Hallmarks organizes by *what kind of damage occurs*. Several hallmarks (telomere attrition, epigenetic alterations, disabled macroautophagy, deregulated nutrient-sensing, chronic inflammation, dysbiosis) have no direct SENS counterpart.

---

## Quantifying the hallmarks: transcriptomic module clocks

The hallmarks are descriptive categories; a complementary, *quantitative* decomposition of aging into co-regulated molecular subsystems comes from the transcriptomic module-clock framework ([[transcriptomic-clock-tage]], from [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]]). Network analysis (WGCNA) of >11,000 mammalian transcriptomes resolved aging/mortality into ~28 co-expression modules — inflammation, interferon signalling, mitochondrial/OXPHOS, chromatin modification, ECM/EMT, and others — each with its own clock that can be accelerated or rejuvenated independently. This is not a competing framework but a measurement layer *over* the hallmarks: immune/inflammation modules map onto [[chronic-inflammation]] and [[disabled-adaptive-immunity]]; mitochondrial/OXPHOS modules onto [[mitochondrial-dysfunction]]; chromatin modules onto [[epigenetic-alterations]]. Its practical contribution is letting interventions be ranked by *which subsystem* they target (chronic disease → inflammatory modules; caloric restriction & Klotho deficiency → metabolic modules), directly serving the "what interventions target [hallmark]?" query at module resolution.

## Open questions about the framework

#gap/contradictory-evidence — Whether the hallmarks are causally independent or reducible to a smaller set of upstream drivers (e.g., DNA damage, mitochondrial dysfunction) is debated.

#gap/no-mechanism — Causal interconnections between hallmarks are mostly hypothesized; few have been experimentally dissected.
