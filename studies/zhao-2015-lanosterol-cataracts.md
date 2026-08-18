---
type: study
doi: 10.1038/nature14650
pmid: 26200341
pmc: null
title: "Lanosterol reverses protein aggregation in cataracts"
authors: [Zhao L, Chen XJ, Zhu J, Xi YB, Yang X, et al.]
year: 2015
journal: Nature
study-design: in-vivo
publication-type: research-article
volume: 523
issue: 7562
pages: 607-611
organism: multi
n-subjects: null
intervention: ["[[lanosterol]]"]
hallmarks-tested: ["[[loss-of-proteostasis]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [lss-mutations-in-congenital-cataract, crystallin-disaggregation-in-vitro, rabbit-lens-paired-clarity-improvement, dog-cataract-paired-stage-reduction]
local-pdf: null
verified: true
verified-date: 2026-08-18
verified-by: claude
verified-scope: "Version-of-record main article text and Figures 1-5 checked against metadata, family genetics, assay counts, and the main-text rabbit/dog outcomes; the affiliation-only 2015 corrigendum was also checked. Online Methods, Extended Data Figures/Tables, and Source Data were unavailable; supplement-only animal route, formulation, control, masking, grading, dose/schedule, and sample-unit details are explicitly excluded. Supersession checked through 2026-08-18."
---

# Zhao et al. 2015 — Lanosterol and cataract protein aggregation

## TL;DR

This paper supplied the original experimental rationale for lanosterol as an anti-cataract lead. The authors identified homozygous G588S and W581R mutations in lanosterol synthase (*LSS*) in two consanguineous families with congenital cataracts, reported that wild-type *LSS* expression or exogenous [[lanosterol]] reduced aggregation in engineered crystallin systems, and reported paired improvements in isolated rabbit cataractous lenses and a canine in-vivo analysis.[^zhao2015] The human evidence was family genetics, not treatment; the main article did not show that topical lanosterol treats age-related cataract in people. #gap/needs-human-replication #gap/needs-replication

## Design

The study combined:

- **Human family genetics:** whole-exome sequencing in a consanguineous family with three affected children identified homozygous G588S. Screening *LSS* in 154 congenital-cataract families found homozygous W581R in one affected member of a second consanguineous family. Figure 1 shows parental segregation, and both variants were absent from 11,000 control chromosomes.
- **Enzyme and cell assays:** wild-type and mutant *LSS* were expressed in cultured cells; six cataract-causing mutant crystallins were tested across human lens progenitor cells, HLEB-3 cells, or HeLa cells. Most plotted comparisons used three independent samples. The serial live-cell experiment used 22 observations from three biological replicates.
- **Purified-protein assays:** aggregates prepared from five wild-type and nine mutant crystallins under guanidine/heat stress were exposed to lanosterol or cholesterol in dipalmitoyl-phosphatidylcholine liposomes and assessed by thioflavin-T fluorescence and electron microscopy.
- **Rabbit lenses:** naturally occurring cataractous lenses were isolated and incubated in 25 mM lanosterol solution for six days. Figure 5 reports `n=13` lenses; the number of source rabbits, vehicle composition, and control allocation are not stated in the main article.
- **Canine experiment:** in-vivo treatment was followed by paired cataract grading. Figure 5 reports `n=7`, but the main article does not define whether this count denotes dogs, eyes, or lenses and does not state the administration route, formulation, dose, schedule, control allocation, or masking. #gap/needs-supp-verification

Because these systems use different experimental units, `n-subjects: null` is intentional; summing them would be misleading.

## Key findings verified in the main article

- The G588S pedigree contained three affected homozygous children; the W581R pedigree contained one affected homozygote. Wild-type *LSS* increased cellular lanosterol, whereas neither mutant showed cyclase activity (`n=3` per group); cellular cholesterol was unchanged.[^zhao2015]
- Wild-type, but not mutant, *LSS* reduced the number and size of intracellular aggregates formed by cataract-causing mutant crystallins. Exogenous lanosterol produced concentration-dependent reductions at 10--40 micromolar in the reported cell assay, whereas cholesterol did not. The live-cell fluorescence-decay fit yielded 222 ± 8 minutes (`n=22` observations from three biological replicates).[^zhao2015]
- Lanosterol, but not cholesterol, reduced thioflavin-T signal and fibrillar structures in artificially generated crystallin aggregates. These guanidine/heat-induced preparations were model aggregates, not intact human cataracts.[^zhao2015]
- Isolated rabbit cataractous lenses showed a paired improvement in clarity/grade after six days in 25 mM lanosterol (`n=13` lenses, Wilcoxon *P*<0.003). The canine paired analysis also showed a lower cataract stage after treatment (`n=7` analysis units, Wilcoxon *P*<0.009). Neither experiment measured human visual function.[^zhao2015]

## Interpretation and limitations

The family data linked biallelic loss-of-function *LSS* variants to congenital cataract in four affected people across two pedigrees, while the experimental systems supplied a plausible connection among *LSS*, lanosterol, and crystallin aggregation. They did not establish ocular exposure or efficacy of an eye-drop formulation in the aged human lens.

The main article's animal evidence is limited to paired pre/post grading and photographs plus the stated *P* values. Without the unavailable Online Methods, Extended Data, and Source Data, this verification cannot establish the animal vehicle/control design, randomization or masking, grading reproducibility, dog sample unit, administration route, or exposure. The canine experiment therefore must not be described specifically as topical or as an eye-drop study on the basis of the main article alone. #gap/needs-supp-verification

Later human-lens and rat-lens experiments failed to reproduce macroscopic clearing under their conditions; see [[studies/shanmugam-2015-lanosterol-human-cataract-nuclei]] and [[studies/daszynski-2019-lanosterol-failure]]. Other later preclinical work reported model- and subtype-dependent positive signals, including transient cortical but little nuclear improvement in three monkeys per subtype; see [[studies/zhang-2022-lanosterol-cynomolgus-cataracts]]. No published human therapeutic trial or meta-analysis superseded the preclinical evidence through 2026-08-18. The mixed results make formulation, delivery, cataract subtype, disease stage, and model selection central unresolved variables. #gap/contradictory-evidence

Nature issued a 2015 corrigendum assigning Yong-Bin Yan to affiliation 4 rather than affiliation 5; it did not correct the study data or conclusions.[^corrigendum]

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Human *LSS* variants and human-derived crystallin cell systems were part of the study. |
| Phenotype conserved in humans? | partial | Protein aggregation is shared, but congenital and age-related cataracts are not interchangeable. |
| Replicated in humans? | no | No therapeutic human arm was performed. |

## Cited by wiki pages

[Auto-populated by Obsidian backlinks]

[^zhao2015]: Zhao L, Chen XJ, Zhu J, Xi YB, Yang X, et al. · doi:10.1038/nature14650 · PMID:26200341 · *Nature* 2015;523(7562):607--611 · human congenital-cataract pedigrees plus cell, purified-protein, isolated-rabbit-lens, and canine in-vivo experiments · main article verified; Online Methods, Extended Data Figures/Tables, and Source Data unavailable.
[^corrigendum]: doi:10.1038/nature15253 · *Nature* 2015;526:595 · affiliation-only corrigendum for Yong-Bin Yan; no data or conclusion change.
