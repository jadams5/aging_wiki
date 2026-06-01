---
type: study
doi: 10.1038/415045a
title: "p53 mutant mice that display early ageing-associated phenotypes"
authors: [Tyner SD, Venkatachalam S, Choi J, Jones S, Ghebranious N, Igelmann H, Lu X, Soron G, Cooper B, Brayton C, Park SH, Thompson T, Karsenty G, Bradley A, Donehower LA]
year: 2002
journal: Nature
study-design: in-vivo
organism: mus-musculus
n-subjects: 91   # 35 p53+/m + 56 p53+/+ for headline comparison; additional p53+/-, p53-/-, p53-/m groups
intervention: ["[[p53]]"]
hallmarks-tested: ["[[cellular-senescence]]", "[[stem-cell-exhaustion]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [p53-antagonistic-pleiotropy, accelerated-aging-phenotypes, reduced-cancer, stem-cell-exhaustion-hypothesized]
local-pdf: null
verified: true
verified-date: 2026-05-04
verified-by: claude
---

# p53 mutant mice that display early ageing-associated phenotypes

## TL;DR

Two independent transgenic mouse lines with **augmented p53 activity** — the serendipitously-derived **p53+/m** allele (a C-terminal-fragment-producing chimeric truncation) and the previously-described **pL53** transgenic (a temperature-sensitive Ala135Val mutant) — both showed enhanced cancer resistance but accelerated aging phenotypes. Foundational evidence for the **antagonistic pleiotropy** of [[p53]] in aging: tumor-suppressive activity carries a tissue-aging cost. The paper hypothesizes that the underlying mechanism is **accelerated [[stem-cell-exhaustion|stem-cell exhaustion]]** driven by enhanced p53-dependent senescence/arrest in progenitor compartments.

## Design

- **Subjects:** mixed inbred **C57BL/6 × 129/Sv** background (chimeras backcrossed two generations into B6 — *not* pure B6, important for strain-effect interpretation).
- **Genotype groups and n's:**
  - p53+/m: n=35
  - p53+/+ (WT): n=56
  - p53+/-: n=217
  - p53-/-: n=72
  - p53-/m: n=34
  - pL53 transgenic (separate line): n=66
- **m-allele structure:** deletion of p53 exons 1–6 plus ≥20 kb of upstream sequence; produces a chimeric mRNA with a 55-bp leader of unknown origin spliced into exon 7. Encodes a ~24K C-terminal p53 fragment that augments wild-type p53 activity (in vitro: enhances p53 protein stability and ~2.3× p21 promoter transactivation when co-expressed with WT p53).
- **pL53 line:** ~20 copies of a transgene carrying the Ala135Val temperature-sensitive p53 mutation (Lavigueur et al. 1989). Independent line, similar augmented-p53-activity model.
- **Endpoints:** lifespan, tumor incidence and type (Table 1), age-associated phenotypes assessed at 24 months for p53+/m, 16–20 months for pL53 (Table 2), wound healing, hair regrowth, 5-FU haematopoietic recovery.

## Key results

### Tumor resistance and lifespan (p53+/m)

- **<6%** tumor incidence in p53+/m mice (0 of 35 had life-threatening tumors; 2 of 35 had small localized lung lesions on histopath) vs **>45%** in p53+/+ littermates.
- **Median lifespan 96 weeks** (p53+/m) vs **118 weeks** (p53+/+) — paper reports as **23% reduction** in median lifespan.
- **Maximum lifespan 136 weeks** (p53+/m) vs **164 weeks** (p53+/+).
- Survival-curve comparison: **P < 0.0001**.

### Wild-type p53 dependence

- p53-/m mice (m allele on a p53-null background) showed only slight tumor delay vs p53-/- and similar maximal lifespan (9–10 months). The m allele's tumor-suppressive activity **requires functional WT p53**.

### Aging-related phenotypes (p53+/m at 24 months)

- Body weight reduced at 18–24 months (vs WT reduction not until 30 months).
- Spleen, liver, kidney mass **25–40% reduced** at 24 months.
- Quadriceps muscle mass: WT mass was ~2.5× p53+/m mass at 22–24 months.
- Pronounced lordokyphosis and osteoporosis (whole-body X-ray; reduced cortical and trabecular bone in tibia).
- Pronounced lymphoid atrophy (reduced spleen white pulp).
- Greatly reduced subcutaneous adipose, dermal thickness, hair regrowth.
- Retarded wound healing.
- Reduced anaesthetic stress tolerance — old p53+/m mice died at standard Avertin doses.
- Reduced 5-FU haematopoietic recovery (significantly slower WBC repopulation, P=0.02).

### Phenotypes NOT observed

- No differences in lung, heart, brain, intestinal histology, hair greying, alopecia, joint disease, cataracts, blood chemistry, or male fecundity.

### Internal replication via pL53 line

- pL53 mice showed similar but milder phenotypes — sparse fur, lordokyphosis, reduced hair regrowth, reduced subcutaneous adipose (P=0.001), delayed wound healing (P=0.05). Two genetically distinct augmented-p53-activity models converge on the same accelerated-aging phenotype.

### Mechanism (p53 response)

- Kidney cells from p53+/m showed sustained p53 protein levels at 24 h post-irradiation (vs decay in p53+/-).
- p53+/m MEFs showed elevated basal and post-irradiation p21 expression.
- p53+/m MEFs were 2–4× more resistant to ras+myc transformation than WT.

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | TP53 highly conserved; ~85% mouse/human identity; same target genes |
| Phenotype conserved in humans? | partial | Li-Fraumeni patients (loss-of-function p53) get cancer early, supporting one half of the trade-off; no human equivalent of *hyperactive* p53 to test the converse. The paper notes that age-related reductions in body, liver, spleen, and kidney mass in humans (after age 60) parallel the p53+/m phenotype, but causation cannot be inferred. |
| Replicated in humans? | no | Genetic constraint — cannot deliberately engineer hyperactive p53 in humans |

#gap/needs-human-replication — Direct evidence that elevated p53 activity accelerates *human* aging is observational and weak.

## Limitations

- Mixed C57BL/6 × 129/Sv background — strain-specific aging effects not fully controlled.
- The m-allele deletion extends ≥20 kb upstream of p53 and could affect haploinsufficiency of an upstream gene (Efnb3 region). Authors acknowledge but argue against this based on the pL53 internal replication.
- The m-allele protein product was demonstrated by in vitro translation but **could not be directly detected in p53+/m mouse tissues** — the mechanism is inferred from indirect activity assays, not direct protein measurement in vivo.
- Whether accelerated aging is *caused* by enhanced senescence/apoptosis or is a downstream consequence of stem-cell-pool depletion (themselves caused by the same activity) is not separable in this model.

## Independent replication (later work)

- Maier et al. 2004 (Genes Dev; doi:10.1101/gad.1162404) — p44 short-isoform-overexpressing mice show similar accelerated aging. **Different molecular intervention from Tyner 2002**, same conceptual finding. Not yet a `studies/` page in this wiki; cite by DOI for now.

## See also

- [[p53]] — the protein page
- [[cellular-senescence]] — p53's role in senescence induction
- [[stem-cell-exhaustion]] — mechanism the paper hypothesizes
