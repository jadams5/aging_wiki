---
type: study
doi: 10.18632/aging.100423
pmid: 22278880
title: "Mitochondrial oxidative stress caused by Sod2 deficiency promotes cellular senescence and aging phenotypes in the skin"
authors: [Velarde MC, Flynn JM, Day NU, Melov S, Campisi J]
year: 2012
journal: Aging (Albany NY)
volume: 4
issue: 1
pages: 3-12
study-design: in-vivo + in-vitro
organism: mus-musculus + human-cells
n-subjects: "Sod2-/- histology (H&E, IHC, SA-βgal): n=8 WT / n=9 KO (CD1, 17-20 days postnatal); Sod2-/- SOD2-confirmation Western (Fig 2A): n=8 WT / n=9 KO; Sod2-/- senescence Westerns (p16, γH2AX, PARP/CASP3 — Figs 3A, 4B, 4D): n=6 WT / n=6 KO; clonogenicity assay: n=3 WT / n=3 KO; aging cohort: n=6 at 4mo, n=10 at 8mo, n=13 at 24mo (C57BL/6J); human keratinocytes and fibroblasts: in-vitro only"
intervention: []
hallmarks-tested: ["[[cellular-senescence]]", "[[mitochondrial-dysfunction]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [sod2-deficiency-induces-skin-senescence, mtROS-promotes-p16-INK4a-accumulation, keratinocyte-greater-rotenone-sensitivity-than-fibroblast, complex-II-activity-declines-with-age, senescence-is-epidermal-not-dermal]
local-pdf: null
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "All priority R38 checks confirmed against full PDF. Corrections: (1) Li 1995 DOI fixed 10.1038/ng0995-97 → 10.1038/ng1295-376; (2) SA-β-gal KO penetrance added (9/9 KO vs 1/8 WT); (3) n=8/9 Western clarification — SOD2-confirmation Western used n=8/9, key senescence Westerns (p16, γH2AX, PARP/CASP3) used n=6/6; (4) rotenone SA-βgal quantified at ~80% (AG21837) vs ~55% (HCA2) at 100 nM from Supp Fig 1B; (5) mice harvested age 17-20 postnatal days noted in KO arm."
literature-checked-through: 2026-05-19
---


# Mitochondrial oxidative stress caused by Sod2 deficiency promotes cellular senescence and aging phenotypes in the skin

**Velarde MC, Flynn JM, Day NU, Melov S, Campisi J** — *Aging (Albany NY)* 2012;4(1):3–12

## TL;DR

Mitochondrial superoxide dismutase ([[sod2|SOD2 / MnSOD]]) deficiency in mouse skin recapitulates key hallmarks of aged skin — p16^INK4a accumulation, nuclear DNA damage, impaired mitochondrial complex II activity, epidermal thinning, and increased terminal differentiation — without triggering apoptosis. Natural aging in C57BL/6J mice shows a parallel decline in mitochondrial complex II activity. In culture, mitochondrial ETC complex I inhibition (rotenone) induces senescence in human keratinocytes at lower doses than in dermal fibroblasts, placing the **epidermis** rather than the dermis as the primary site of mtROS-induced senescent-cell accumulation. Together the data argue that mitochondrial oxidative stress is a driver — not merely a correlate — of cellular senescence and skin aging phenotypes in vivo. Wrinkled appearance is **not** described in this paper and should not be attributed to it.

---

## Background

[[cellular-senescence]] can be triggered by DNA damage, telomere shortening, oncogene activation, or oxidative stress. The [[mitochondrial-dysfunction]] hallmark posits that accumulation of mitochondrial reactive oxygen species (mtROS) drives progressive molecular damage during aging. However, direct in-vivo causal evidence linking mtROS to senescent-cell accumulation in a tissue context was limited at the time of publication.

[[sod2]] (MnSOD) is the primary scavenger of superoxide generated at the inner mitochondrial membrane by complexes I and III. Homozygous deletion is lethal within days of birth [^li1995], requiring neonatal rescue or tissue-specific inactivation for adult studies. This paper used a partial-rescue model (EUK-189, a synthetic SOD/catalase mimetic) to extend survival of Sod2-/- animals into early adulthood, enabling skin phenotyping.

The skin is a useful tissue for senescence biology: it is large, accessible, stratified (epidermis vs. dermis), and displays measurable aging phenotypes (thinning, altered differentiation) amenable to histological quantification. Predominant senescent cell types in this study are **epidermal**, not dermal fibroblasts — a point with implications for targeting strategies in skin aging.

---

## Methods summary

### In-vivo: Sod2-/- mouse model

- **Strain:** CD1 background; homozygous Sod2 null (Sod2-/-)
- **Rescue:** EUK-189 (synthetic SOD/catalase mimetic) at 1 mg/kg/day, administered from postnatal day 3 as maintenance throughout the experiment
- **Harvest age:** 17–20 postnatal days
- **Groups for histology (SA-βgal, H&E, IHC):** n=8 WT, n=9 KO (CD1)
- **Groups for SOD2-confirmation Western (Fig 2A):** n=8 WT, n=9 KO (CD1)
- **Groups for senescence Westerns (p16^INK4a, γH2AX, PARP/CASP3):** n=6 WT, n=6 KO (CD1)
- **Clonogenicity assay:** n=3 WT, n=3 KO
- **Endpoints:** SA-β-gal activity (stratum corneum); p16^INK4a and p21^CIP1 protein (Western blot); γH2AX foci (nuclear DNA damage); mitochondrial complex II (succinate dehydrogenase) activity; Ki-67 proliferation index; keratin 10 (terminal differentiation marker); epidermal thickness; stratum corneum thickness

### In-vivo: natural aging cohort (C57BL/6J)

- **Strain:** C57BL/6J; three age groups: **n=6 at 4 months**, **n=10 at 8 months**, **n=13 at 24 months**
- **Endpoints:** SA-β-gal; p16^INK4a; mitochondrial complex II activity
- These n's must NOT be conflated with the Sod2-/- experiment groups above

### In-vitro: rotenone-induced senescence

- **Cell lines:** AG21837 (human neonatal keratinocytes); HCA2 (human foreskin fibroblasts)
- **Perturbation:** rotenone (complex I inhibitor), 0–200 nM dose range; proliferation assessed at 4 days; SA-βgal assessed at 9 days; key comparison at 100 nM
- **Endpoint:** SA-β-gal+ fraction (quadruplicate measurements); population doublings over 4 days
- **Statistical test:** Student's t test; all measurements in quadruplicates

---

## In-vivo findings: Sod2-/- skin phenotype

### Senescence markers elevated in Sod2-/- epidermis

Sod2-/- mouse skin showed **two-fold higher p16^INK4a** protein relative to WT littermates — this is the explicit text quote from the paper ("p16INK4a protein levels were two-fold higher in Sod2-/- relative to WT skin") — Western blot, n=6/group [^velarde2012]. SA-β-gal activity was detectable in the **stratum corneum** of **all 9 Sod2-/- mice** examined (9/9 penetrance), whereas only minimal activity was observed in 1 of 8 WT mice (stratum corneum specificity confirmed; p<0.05 by Fisher Exact test). The senescent cells were localized to the epidermis, not the dermis — consistent with the greater rotenone sensitivity of keratinocytes demonstrated in vitro (see below).

p21^CIP1 protein was also elevated in Sod2-/- skin, though the paper's primary CDK-inhibitor marker for the senescence phenotype is p16^INK4a.

### Nuclear DNA damage without apoptosis

γH2AX foci (double-strand break marker) were increased in Sod2-/- epidermis, consistent with mtROS-driven nuclear DNA damage as an upstream trigger of the p16^INK4a induction. Crucially, the increase in p16^INK4a was not accompanied by elevated apoptosis — the cells are arrested/senescent rather than eliminated, directly paralleling the accumulation model of senescent cells in aged tissue [^velarde2012].

### Mitochondrial complex II activity impaired

Complex II (succinate dehydrogenase) activity was reduced in Sod2-/- skin relative to WT — establishing that mtROS impairs the ETC in this model, not merely correlates with it [^velarde2012].

### Epidermal structural changes

Histologically, Sod2-/- skin showed (n=8 WT / n=9 KO):
- Reduced epidermal cell number and **decreased epidermal thickness**
- **Increased stratum corneum thickness** (hyperkeratosis pattern)
- Reduced Ki-67+ proliferating cells (consistent with senescence-mediated proliferative arrest)
- Elevated keratin 10 (marker of terminal differentiation), suggesting premature commitment to differentiation at the expense of basal layer renewal

No "wrinkled appearance" is described in this paper. #gap/unsourced if claimed elsewhere without independent citation.

---

## Natural aging cohort findings (C57BL/6J)

In naturally aged C57BL/6J mice, both p16^INK4a accumulation and SA-β-gal positivity increased progressively with age (4 → 8 → 24 months; n=6, 10, 13 respectively) [^velarde2012]. In parallel, mitochondrial **complex II activity declined** with age in the same cohort, mirroring the complex-II impairment observed in Sod2-/- skin and implicating the same enzymatic node across models. This convergence between the genetic-deficiency model and natural aging is a key internal consistency argument of the paper.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (SOD2, complex II, p16^INK4a all conserved) |
| Phenotype conserved in humans? | partial — epidermal thinning and p16+ accumulation occur in aged human skin; direct mtROS-causal evidence lacking in vivo |
| Replicated in humans? | no #gap/needs-human-replication |

---

## In-vitro findings: keratinocyte vs. fibroblast rotenone sensitivity

Human neonatal keratinocytes (AG21837) treated with **100 nM rotenone for 9 days** showed approximately **~80% SA-β-gal+ cells**, versus approximately **~55% SA-β-gal+** for human dermal fibroblasts (HCA2) at the same dose — both significantly elevated over vehicle controls (Supplementary Fig 1B; quadruplicate measurements; p<0.05 by Student's t test) [^velarde2012]. Both cell types showed significant reductions in population doubling at ≥20 nM rotenone over 4 days (Supp Fig 1A). This differential SA-βgal induction places keratinocytes as the more vulnerable cell type to complex-I-driven mtROS, consistent with the predominantly epidermal localization of senescent cells in the Sod2-/- in-vivo model.

---

## Mechanistic model proposed

The paper's proposed causal chain:

1. Elevated superoxide at the inner mitochondrial membrane (whether from Sod2 loss or ETC dysfunction in natural aging)
2. Oxidative damage to nuclear DNA → γH2AX foci
3. p16^INK4a/CDK4/6-Rb axis activation → stable cell-cycle arrest
4. Senescent cells accumulate in epidermis → reduced proliferative renewal → epidermal thinning + increased terminal differentiation

This connects the [[mitochondrial-dysfunction]] hallmark directly to the [[cellular-senescence]] hallmark via the [[dna-damage-response]] pathway, with the p16^INK4a → Rb arm as the effector. See also [[p53-pathway]] and [[p21]] for the parallel p53/p21 arm of senescence enforcement.

The [[sasp]] is not analyzed in depth in this paper; the focus is on cell-intrinsic senescence markers.

---

## Limitations

1. **Rescue model caveats.** EUK-189 is not physiological; it may partially rescue non-SOD2-related phenotypes or incompletely rescue others, potentially confounding the Sod2-/- phenotype interpretation.
2. **CD1 background for KO, C57BL/6J for aging cohort.** The two in-vivo arms use different genetic backgrounds. Effect sizes and senescence dynamics may differ by strain.
3. **No in-vivo human data.** All causal evidence for mtROS → senescence is in mice or cell culture. Direct measurement of mtROS-induced p16+ accumulation in human dermis/epidermis in vivo is absent. #gap/needs-human-replication
4. **SA-β-gal in stratum corneum.** The stratum corneum is a terminally differentiated, anucleate layer; SA-β-gal positivity in this compartment requires careful interpretation relative to the granular/spinous layers where nucleated senescent cells would reside.
5. **Rotenone in-vitro vs. physiological mtROS.** Rotenone inhibits complex I at pharmacological concentrations; it is unclear whether the dose used (100 nM) approximates the superoxide flux generated by Sod2 deficiency or natural aging in the same cells.
6. **n-sizes.** Histology at n=8–9 and Western at n=6 per group are standard for this era and organism model; statistical power to detect modest effect sizes is limited.
7. **Skin aging scope.** Skin aging involves multiple processes beyond mtROS and senescence (UV damage, collagen cross-linking, ECM remodeling). The paper explicitly addresses only the mtROS–senescence axis.

---

## Significance

This paper was among the first to demonstrate in-vivo that mtROS drives cellular senescence accumulation in a specific tissue (skin epidermis), using a genetically tractable model with internal consistency to the natural-aging trajectory. It directly links two hallmarks — [[mitochondrial-dysfunction]] and [[cellular-senescence]] — with mechanistic evidence rather than correlation, and positions the **epidermal keratinocyte** as the primary cellular substrate for this process in skin.

The 276 citations (OpenAlex) and 100th citation-percentile (FWCI 12.8) reflect substantial downstream influence in the skin-aging, senescence, and mitochondrial-ROS literature.

For downstream signaling from senescent epidermal cells, see [[sasp]] and [[hallmarks/altered-intercellular-communication]]. For the broader mtROS-aging hypothesis context, see [[hallmarks/mitochondrial-dysfunction]] and [[hypotheses/free-radical-theory-of-aging]].

---

## Footnotes

[^velarde2012]: [[studies/velarde-2012-mitochondria-skin-senescence]] · Sod2-/- histology/SOD2-Western n=8 WT/9 KO; senescence Westerns (p16/γH2AX/PARP/CASP3) n=6 WT/6 KO; clonogenicity n=3/3; aging cohort n=6/10/13 at 4/8/24mo; in-vitro keratinocyte/fibroblast quadruplicates · in-vivo + in-vitro · model: CD1 Sod2-/- mouse (17–20 days postnatal) + C57BL/6J aging cohort + human AG21837 keratinocytes + HCA2 fibroblasts

[^li1995]: doi:10.1038/ng1295-376 · Li Y, Huang TT, Carlson EJ, Melov S, Ursell PC, Olson JL, Noble LJ, Yoshimura MP, Berger C, Chan PH, Wallace DC, Epstein CJ · *Nat Genet* 1995;11:376–381 · dilated cardiomyopathy and neonatal lethality in mutant mice lacking manganese superoxide dismutase; establishes necessity of SOD2 for early survival · in-vivo · model: Sod2-/- (strain not specified in Velarde 2012 citation)
