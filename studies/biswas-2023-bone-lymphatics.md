---
type: study
doi: 10.1016/j.cell.2022.12.031
pmid: 36669473
pmc: PMC11913777
title: "Lymphatic vessels in bone support regeneration after injury"
authors: [Biswas L, Chen J, De Angelis J, Singh A, Owen-Woods C, Ding Z, Pujol JM, Kumar N, Zeng F, Ramasamy SK, Kusumbe AP]
year: 2023
journal: Cell
volume: 186
issue: 2
pages: "382-397.e24"
study-design: in-vivo
publication-type: research-article
organism: mus-musculus
n-subjects: "5-7 per group (primary imaging/flow cytometry); n=6 (transplantation studies); human bone biopsies: n=12 (PROX1 ELISA, Fig. 2J); n=2 donors (3D LYVE1 imaging, Fig. 2K)"
intervention: []
hallmarks-tested: ["[[stem-cell-exhaustion]]", "[[cellular-senescence]]"]
human-evidence: partial
peer-reviewed: true
preregistered: false
key-findings: [bone-lymphatic-vessels-exist, injury-induced-lymphangiogenesis, il6-dependent-lec-expansion, cxcl12-lec-niche-signaling, myh11-perivascular-progenitor-support, aged-lec-senescence, young-lec-transplant-rescues-regeneration]
local-pdf: null
verified: true
verified-date: 2026-06-28
verified-by: claude
verified-scope: "All quantitative and mechanistic claims cross-checked against full PDF (main text + STAR Methods + figure legends); key correction: paper body text has a typo ('p27') — Figure 6L caption and actual figure panels confirm the senescence qPCR measured p21 (Cdkn1a), not p27 (Cdkn1b). Mouse ages and human biopsy n values added from STAR Methods and figure legends."
---

# Lymphatic vessels in bone support regeneration after injury

## TL;DR

Using 3D light-sheet imaging of immunolabeled whole bones, Biswas et al. overturn the long-standing dogma that bone is devoid of lymphatic vessels. They demonstrate that LYVE1+/PROX1+/VEGFR3+ lymphatic vessels penetrate the bone marrow of multiple murine bones and are confirmed by immunostaining in human bone biopsies. After genotoxic injury (irradiation, 5-fluorouracil), these vessels rapidly expand via an IL-6-dependent lymphangiogenesis program; the lymphatic endothelial cells (LECs) then upregulate CXCL12, which acts on perivascular MYH11+/CXCR4+ progenitor cells to support bone formation and [[hematopoietic-stem-cells|hematopoietic stem cell (HSC)]] regeneration. In aged mice, bone LECs accumulate senescence markers (p16, p21), fail to proliferate after injury, and do not expand MYH11+ progenitors — transplantation of young LECs into aged recipients restores this response and increases bone mass and HSC reconstituting activity.

## Design

### Establishing bone lymphatics: imaging and validation

- **Imaging platform:** ultrafast immunolabeling and optical clearing of intact calcified tissues (3.5-day protocol), followed by light-sheet microscopy; 3D reconstruction across multiple whole murine bones (sternum, vertebral column, costal bones, femur, calvarium, hip bones).
- **Markers for lymphatic vessels:** LYVE1, PROX1 (prospero-related homeobox 1), podoplanin, VEGFR3/FLT4. Evans blue vital dye confirmed functional lymphatic uptake.
- **Human validation:** immunostaining and ELISA on human bone biopsies from the Oxford Musculoskeletal Biobank (Human Femoral Condyle / Tibial Plateau; male and female donors, age range 56–87 years). PROX1 ELISA: n=12 (Figure 2J; bone vs. cartilage comparison). 3D LYVE1 light-sheet imaging of cleared human bone marrow biopsies: 2 donors shown (Figure 2K). Additional bone marrow biopsies from the Dazhou Central Hospital lung cancer patient cohort (n=2 replicates; age range 61–77 years) used for scRNA-seq.
- **Single-cell validation:** the authors generated their own scRNA-seq data from human bone marrow biopsies (lung cancer patients, Dazhou Central Hospital; two replicates; 2,305 cells after filtering, of which 6 were classified as LECs by PECAM1/LYVE1/FLT4/PROX1 expression) to confirm LEC transcriptomic signatures in human bone.

### Injury-response experiments

- **Genotoxic stress models:** whole-body irradiation; 5-fluorouracil (5-FU) chemotherapy.
- **Lymphangiogenesis inhibition:** VEGFR3 inhibitor SAR131675 administered during the post-injury window.
- **IL-6 requirement:** IL-6 knockout mice ± recombinant IL-6 rescue; IL-18, IL-27, and IL-7 blockade as controls.
- **n:** 5–7 mice per group for imaging and flow cytometry experiments; 6 mice for transplantation/reconstitution assays.

### Mechanistic dissection: CXCL12-MYH11 axis

- **LEC-specific CXCL12 deletion:** conditional knockout to isolate the LEC secretory contribution.
- **MYH11+ cell depletion:** ablation model to test necessity for osteogenesis and hematopoietic niche maintenance.
- **Readouts:** bone marrow cellularity, LSK (Lin−Sca-1+c-Kit+) cell numbers, HSC frequency, secondary transplantation reconstituting activity; bone mass by micro-CT (μ-CT); osteoblast markers (collagen I, osterix, osteocalcin).

### Aging experiments

- **Subjects:** young adult mice (8–12 weeks; C57BL/6) versus aged mice (>55 weeks generally per STAR Methods; 61–92 weeks specifically for the LEC transplantation experiment).
- **Perturbation:** irradiation applied to both age groups; comparison of lymphatic expansion response.
- **Rescue:** transplantation of young LECs into aged recipients (n=5); comparison arm of aged LECs into aged recipients. HSC reconstituting activity assayed at n=6.
- **Senescence marker profiling:** qPCR on purified LECs for p16 (Cdkn2a), p21 (Cdkn1a), Ki67 (proliferation), and VEGFR3 (lymphatic identity) (Figure 6L, n=6; two-tailed unpaired t-tests). Note: the paper body text contains a typo ("p27") corrected here per Figure 6L caption.

## Key results

### Lymphatic vessels are present inside bone

LYVE1+/PROX1+/podoplanin+/VEGFR3+ lymphatic vessels are confirmed within the bone marrow of all murine bones examined, with a vessel diameter of approximately 19 μm. Evans blue uptake confirmed functional lymphatic transport. Human bone biopsies showed LYVE1-positive lymphatic vessels by immunostaining (3D light-sheet imaging of 2 donors, Figure 2K) and PROX1 quantification by ELISA (n=12 samples from Oxford Musculoskeletal Biobank, Figure 2J), extending the finding beyond rodents. An additional human bone marrow scRNA-seq dataset (cancer patients, 2 replicates, 2,305 cells total) identified 6 LECs expressing PECAM1, LYVE1, FLT4, and PROX1 (Figure 2L). This overturns the prior anatomical consensus that lymphatics are confined to periosteal surfaces. [[lyve1]] and [[prox1]] are the canonical lymphatic endothelial cell identity markers used to define these vessels.

### Injury triggers IL-6-dependent lymphangiogenesis

Following whole-body irradiation, bone lymphatic vessel density peaked at **day 15 post-irradiation** and returned to baseline by day 55. 5-FU chemotherapy induced a comparable expansion. Pharmacological inhibition of VEGFR3 with SAR131675 blocked the post-injury lymphangiogenesis, confirming VEGFR3/FLT4 as the operative receptor. IL-6 knockout mice failed to expand lymphatics after irradiation; recombinant IL-6 administration rescued the expansion in IL-6 KO mice. Blockade of IL-18, IL-27, and IL-7 did not interfere, identifying IL-6 as the non-redundant upstream cytokine signal for bone LEC proliferation after genotoxic stress.

### LECs secrete CXCL12 to support perivascular progenitors

Purified bone LECs showed significant upregulation of [[cxcl12]] mRNA following irradiation. LEC-specific deletion of CXCL12 resulted in reduced bone marrow cellularity, decreased LSK cell numbers, and decreased HSC frequency (n=6). CXCL12-EGFP reporter mice confirmed positive signal in bone lymphatic vessels in irradiated bones. This defines a **lymphangiocrine** signaling axis distinct from the established perivascular (endothelial sinusoid-derived) CXCL12 niche.

### MYH11+ perivascular progenitors are the downstream cellular target

CXCL12 from LECs acts on MYH11+ pericyte-like perivascular progenitors that express CXCR4 (the cognate CXCL12 receptor). During irradiation, MYH11+ cells expand specifically in bone (not other organs) and are located near endosteal regions. MYH11+ cells differentiate into osteoblasts, chondrocytes, and adipocytes. Depletion of MYH11+ cells resulted in: reduced osteoprogenitor and osteoblast marker expression, decreased bone formation rates, significantly decreased bone mass on μ-CT, and reduced bone marrow cellularity with decreased HSC frequency. Exogenous CXCL12 administration expanded the MYH11+ population without genotoxic stress, and LEC-specific CXCL12 deletion decreased MYH11+/CXCR4+ cell numbers, confirming the LEC → CXCL12 → MYH11+ progenitor axis.

## Aging-specific findings

In aged mice, bone LECs show a senescent transcriptional profile by qPCR of purified LECs: upregulation of **p16** (Cdkn2a) and **p21** (Cdkn1a), and downregulation of Ki67 (proliferation marker) and VEGFR3 (lymphatic identity marker). Note: the body text of the paper contains a typo ("p27") that is corrected here by reference to Figure 6L legend and figure panels, which unambiguously label the measured marker as p21. n=6 for the qPCR (Figure 6L; two-tailed unpaired t-tests). Functionally, aged mice **fail to expand lymphatic vessels** after genotoxic stress, and their MYH11+ perivascular progenitor population does not expand — linking aged LEC senescence to an impaired post-injury regenerative cascade affecting both the hematopoietic niche and bone formation.

**Young LEC transplantation into aged mice** (n=5) substantially expanded the MYH11+ population and increased expression of bone formation markers (collagen I, osterix, osteocalcin); bone mass was significantly increased on μ-CT. Enhanced hematopoietic regeneration was confirmed by reconstituting activity assays (n=6). Aged LEC transplantation into aged recipients produced no comparable improvements, confirming the age-intrinsic deficit in LECs rather than a niche-only effect. This positions bone LEC [[cellular-senescence]] as a mechanistic upstream driver of [[stem-cell-exhaustion]] in the hematopoietic and bone-forming compartment after injury.

## Proposed mechanism

```
Genotoxic injury (fracture, irradiation, chemotherapy)
  ↓ IL-6 (systemic / local)
  ↓
[[endothelial-cells|Bone lymphatic endothelial cells]] (LYVE1+/PROX1+/VEGFR3+)
  → proliferate → lymphangiogenesis (VEGFR3-dependent; peak day 15)
  → upregulate [[cxcl12]] (CXCL12 secretion)
  ↓
MYH11+/CXCR4+ perivascular progenitors
  → expand → differentiate to osteoblasts, chondrocytes, adipocytes
  → support bone formation + [[bone-marrow]] niche cellularity
  → enable [[hematopoietic-stem-cells|HSC]] regeneration

In aging: LEC senescence (p16↑, p21↑, Ki67↓, VEGFR3↓) → failure at step 2
  → no MYH11+ expansion → impaired bone + hematopoietic regeneration after injury
```

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Lymphatic vessels in human bone? | yes | 3D LYVE1 imaging (n=2 donors); PROX1 ELISA (n=12 samples, Oxford Musculoskeletal Biobank); scRNA-seq from 2 cancer patient biopsies identified 6 LECs |
| Pathway conserved in humans? | partial | VEGFR3/CXCL12/CXCR4 axis is conserved; human-specific injury-response lymphangiogenesis not directly demonstrated |
| Hematopoietic niche dependence on bone lymphatics? | not tested in humans | Mouse conditional-deletion evidence only |
| Aged LEC senescence in humans? | not tested | Inferred from conservation of senescence biology; no human-aging biopsy data in this paper |

#gap/needs-human-replication (injury-response lymphangiogenesis and LEC-CXCL12-MYH11 axis are mouse-only functional data)

## Limitations

- Primary mechanistic experiments are in mice; the human bone biopsy data establishes presence of lymphatics but not function or injury-response capacity in humans.
- Young adult mice were 8–12 weeks; aged mice were >55 weeks (STAR Methods). The LEC transplantation experiment used aged mice at 61–92 weeks.
- Human biopsy component rests on a small sample (n=12 ELISA, n=2 for 3D imaging; donors from Oxford Musculoskeletal Biobank age range 56–87 years; scRNA-seq from 2 replicates of lung cancer patient biopsies with only 6 LECs identified). The disease context (lung cancer) introduces a potential confounder for the scRNA-seq data. #gap/needs-replication
- LEC transplantation is a proof-of-concept experiment (n=5); replication in larger cohorts and with defined LEC purity/senescence-scoring would strengthen the therapeutic interpretation.
- The study does not directly test whether clearance of senescent LECs (senolysis) restores the regenerative response in aged mice — only LEC transplantation was tested.
- The MYH11+ progenitor population is defined by a mature pericyte marker; its relationship to established bone marrow stromal populations (LEPR+, Nestin+, CD146+ MSCs) is not resolved.
- IL-6 is a pleiotropic cytokine; its role here as a pro-regenerative lymphangiogenic signal in bone may conflict with its canonical pro-senescent SASP role, a duality not discussed in this paper.

## Cross-links

Atomic entity pages relevant to this study:
- [[bone]] · [[bone-marrow]] · [[hematopoietic-stem-cells]] · [[endothelial-cells]]
- [[cxcl12]] · [[lyve1]] · [[prox1]] (protein pages for lymphatic markers)
- [[cellular-senescence]] · [[stem-cell-exhaustion]] (hallmarks)

## Cited by

[Auto-populated by Obsidian backlinks panel]
