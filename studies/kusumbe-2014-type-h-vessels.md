---
type: study
doi: 10.1038/nature13145
pmid: 24646994
pmc: PMC4943525
title: "Coupling of angiogenesis and osteogenesis by a specific vessel subtype in bone"
authors: [Kusumbe AP, Ramasamy SK, Adams RH]
year: 2014
journal: Nature
volume: 507
issue: 7492
pages: "323-328"
study-design: in-vivo
publication-type: research-article
organism: mus-musculus
n-subjects: "n=5–8 per group (genetic/pharmacological experiments); n=7 (flow cytometry/osteoprogenitor colocalization); n=16 (irradiation); n=3 biological replicates (gene expression)"
intervention: []
hallmarks-tested: ["[[stem-cell-exhaustion]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [type-h-vessel-definition, osteoprogenitor-coupling, angiocrine-factor-secretion, hif1a-dependent-type-h-identity, age-related-type-h-decline, deferoxamine-restores-type-h-and-bone-in-aged-mice, type-h-to-type-l-lineage-differentiation]
local-pdf: null
verified: true
verified-date: 2026-06-28
verified-by: claude
---

# Coupling of angiogenesis and osteogenesis by a specific vessel subtype in bone

**Kusumbe, Ramasamy & Adams · Nature 2014 · DOI 10.1038/nature13145**

Companion paper: [[studies/ramasamy-2014-endothelial-notch-bone]] (published simultaneously; Notch regulation of the same bone vessel subtypes). Follow-up aging paper: [[studies/kusumbe-2016-vascular-niche-aging]].

## TL;DR

This is the foundational paper defining Type H and Type L bone endothelium. Kusumbe et al. demonstrate that a rare capillary subtype — expressing high levels of CD31 (PECAM1) and endomucin (Emcn) — occupies the metaphysis and endosteum of long bones, actively maintains perivascular osteoprogenitors via angiocrine signaling, and couples angiogenesis to bone formation. This subtype is virtually absent in aged mice (70 weeks) and its age-related loss tracks with osteoprogenitor depletion; pharmacological stabilisation of HIF-1α in bone endothelium using deferoxamine mesylate (DFM) rescues both Type H vessel abundance and [[osteoblasts|osteoprogenitor]] numbers, and significantly increases bone mass in aged animals by μ-CT. The paper establishes a vascular–osteogenic axis as a mechanistic driver of age-related bone loss, positioned upstream of intrinsic osteoblast deficits.

## Design

### Vessel classification and characterisation

- **Immunostaining + confocal microscopy** of whole bone sections and 3D preparations; CD31 (PECAM1) and endomucin (Emcn) expression used to classify endothelial cells (ECs) into two subtypes.
- **Flow cytometry** on enzymatically dissociated bone (femur + tibia); n=7 mice per age group.
- **Hypoxia and metabolic markers:** pimonidazole (hypoxia probe), Glut1 (glucose transporter), MCT4 (lactate transporter), phospho-ERK1/2 (metabolic activity) applied to sections.

### Osteoprogenitor colocalization

- Immunostaining for **Osterix (SP7)**, **Runx2**, **Collagen Iα**, **PDGFRβ** in relation to Type H or Type L vessel proximity (≤20 μm threshold); n=5 mice.

### Genetic loss- and gain-of-function

- **Hif1a^iΔEC** (endothelial HIF-1α knockout): Cdh5(PAC)-CreERT2 × Hif1a^fl/fl; tamoxifen P10–P14; analysis at P20; n=5 mice.
- **Vhl^iΔEC** (endothelial VHL knockout → constitutive HIF-1α stabilisation): same Cre driver × Vhl^fl/fl; n=4–5 mice for μ-CT; n=5 for osteoprogenitor quantification.

### Aging comparison

- **Age groups:** 4 weeks (juvenile), 11 weeks (adult), 70 weeks (aged); C57BL/6J background; n=7 per group from three independent experiments.

### Pharmacological restoration in aged mice

- **Deferoxamine mesylate (DFM):** PHD-inhibitor that stabilises HIF-1α by chelating iron and blocking prolyl-hydroxylase-dependent HIF-1α degradation.
- Dose: 15 mg/ml intraperitoneal injection every alternate day, **6 weeks**; mice aged 64–70 weeks.
- Readouts: immunostaining (Type H vessel density, Osterix+/Emcn+ colocalization), gene expression by qPCR (n=6–8: *Sp7*/Osterix, *Bglap*/osteocalcin, *Ibsp*/bone sialoprotein), and μ-CT bone microarchitecture (n=5).

### Lineage tracing

- **Cdh5(PAC)-CreERT2 × Rosa26-mT/mG** double transgenic; 50 μg tamoxifen at P29 (GFP labels all endothelial cells at induction); analysis at day 1 and day 40 post-tamoxifen.

### Irradiation study

- 900 rads whole-body irradiation; flow cytometry on dissociated bone at day 7; n=16 mice.

## Key results

### Type H and Type L: two functionally distinct bone endothelial subtypes

CD31 and endomucin co-staining resolves bone endothelium into two non-overlapping populations:

| Feature | Type H (CD31^hi/Emcn^hi) | Type L (CD31^lo/Emcn^lo) |
|---|---|---|
| Anatomical site | Metaphysis, endosteum | Diaphysis |
| Morphology | Columnar / arch-shaped | Highly branched sinusoidal |
| Frequency (flow cytometry) | ~1.77 ± 0.01% of total ECs (n=7) | Majority |
| Metabolic state | High phospho-ERK1/2; not hypoxic | Low oxygenation; Glut1+, MCT4+ |
| HIF-1α (EC immunostaining) | Present (juvenile/growing bone) | Minimal |
| Growth factor expression | High Pdgfa, Pdgfb, Tgf-β1, Tgf-β3, Fgf1 | Low |

> **HIF-1α spatial note (verified against PDF):** Whole-tissue HIF-1α immunostaining (non-EC-specific) shows the OPPOSITE distribution from the EC row above — abundant labelling of cell nuclei throughout the diaphysis and in secondary ossification centres, but absent in the metaphysis (Extended Data Fig. 3a), consistent with bulk diaphyseal cells being in a low-O₂ environment. The table row "HIF-1α (EC immunostaining)" captures the EC-specific signal: strong in Type H ECs (metaphysis) and minimal in Type L ECs (Extended Data Fig. 9a), even though the surrounding metaphyseal microenvironment is normoxic. The key mechanistic insight is that Type H ECs express HIF-1α constitutively via intrinsic transcriptional programming (higher *Hif1a* mRNA; Extended Data Fig. 9b), not because they are hypoxic.

Despite comprising only ~1.77% of bone endothelial cells, Type H vessels dominate the bone-forming perivascular niche.

### Type H vessels are the predominant osteoprogenitor niche

Quantification of osteogenic cell types by distance from Type H vs Type L vessel surfaces (n=5 mice):

- Osterix+ osteoprogenitors: **70 ± 1.9%** within ≤20 μm of Type H vessels
- Runx2+ early osteoprogenitors: **82.63 ± 1.8%** adjacent to Type H
- Collagen Iα+ osteoblasts: **74 ± 3.3%** adjacent to Type H
- PDGFRβ+ mesenchymal progenitors: preferentially associated with Type H

These spatial associations suggest that Type H vessels provide the niche signals that sustain osteoprogenitor identity and commitment.

### Type H ECs produce angiocrine osteogenic factors

Freshly sorted Type H vs Type L ECs (n=3 biological replicates): Type H showed significantly higher mRNA for *Pdgfa*, *Pdgfb*, *Tgf-β1*, *Tgf-β3*, and *Fgf1* (all p<0.05, two-tailed unpaired t-test). This angiocrine output positions Type H vessels as active inducers of perivascular osteoprogenitor fate, not merely passive anatomical correlates.

### HIF-1α is required for Type H vessel identity

**Hif1a^iΔEC** mice showed "striking vascular defects" in metaphysis and endosteum at P20, with Type H endothelium strongly reduced and associated osteoprogenitors depleted (n=5). Serum alkaline phosphatase (bone-formation biomarker) was significantly reduced.

Conversely, **Vhl^iΔEC** mice (constitutive HIF-1α in ECs) showed pronounced expansion of Type H endothelium, increased Runx2+ and Osterix+ osteoprogenitors, elevated trabecular bone mass on μ-CT (n=4–5), and no significant change in osteoclasts — establishing HIF-1α as a positive upstream regulator of Type H identity without confounding osteoclast effects.

Age-dependent decline of HIF-1α protein in bone ECs was also observed, despite only modest mRNA reduction, consistent with post-translational (PHD-driven) destabilisation as the aging mechanism.

### Type H vessels decline with age: a founding observation

| Age | Type H abundance | Notes |
|---|---|---|
| 4 weeks (juvenile) | Abundant | High EC proliferation |
| 11 weeks (adult) | Significantly reduced | Rapid post-growth decline |
| 70 weeks (aged) | Nearly absent | Minimal proliferative ECs |

Osteoprogenitors tracked Type H vessel abundance across ages (n=7 per group). This is the **first report of age-related Type H vessel loss** as a mechanism of diminished bone formation in aging.

### DFM restores Type H vessels, osteoprogenitors, and bone mass in aged mice

DFM (PHD inhibitor; 15 mg/ml i.p. every alternate day, 6 weeks; mice 64–70 wk):

- **Immunostaining:** substantial expansion of CD31^hi/Emcn^hi vessels and emergence of Osterix+ osteoprogenitors in the metaphysis.
- **Gene expression** (n=6–8): *Sp7* (Osterix), *Bglap* (osteocalcin), *Ibsp* (bone sialoprotein) all significantly upregulated (p<0.05).
- **μ-CT** (n=5): significant increases in relative bone volume, trabecular number, and trabecular thickness vs. vehicle-treated aged controls.

This establishes that the age-related Type H decline is **pharmacologically reversible** via HIF-1α pathway stabilisation, and that restoring the vascular niche is sufficient to rescue downstream bone formation in aged animals. #gap/needs-human-replication

### Type H ECs are progenitors for Type L endothelium

Lineage tracing (Cdh5-CreERT2 × Rosa26-mT/mG, tamoxifen at P29):
- Day 1: GFP restricted to metaphyseal/endosteal Type H vessels + arteries.
- Day 40: GFP+ ECs expanded throughout metaphysis and diaphysis, demonstrating that **Type H ECs give rise to Type L endothelium** over time. This establishes a vascular differentiation hierarchy with Type H as the upstream progenitor state.

### Irradiation transiently expands Type H at the expense of Type L

Whole-body irradiation (900 rads; n=16) produced significant Type H expansion and Type L reduction at day 7 by flow cytometry, and immunostaining confirmed CD31^hi/Emcn^hi vessels throughout the diaphysis post-irradiation. This reversible shift under stress further supports the plasticity between subtypes.

## Aging-specific findings

This paper is the origin study for the **Type H vascular aging axis** in bone:

1. Type H vessels are nearly absent in 70-week-old mice despite being abundant at 4 weeks.
2. The loss is mechanistically linked to age-dependent reduction of HIF-1α protein in bone ECs (post-translational destabilisation).
3. Osteoprogenitor pool size (Osterix+, Runx2+) tracks Type H abundance across the lifespan, positioning vascular aging as an upstream determinant of [[stem-cell-exhaustion]] in the osteoblast compartment.
4. The decline is reversible: DFM treatment of 64–70 week mice restores Type H vessels, osteoprogenitor markers, and bone microarchitecture by μ-CT.

The 2016 follow-up ([[studies/kusumbe-2016-vascular-niche-aging]]) extends this framework to haematopoietic stem cell niches.

## Proposed mechanism

```
Type H EC (CD31^hi/Emcn^hi) — metaphysis/endosteum
  HIF-1α (active in juvenile; destabilised by PHDs in aging)
      ↓
  Angiocrine secretion: PDGF-A/B, TGF-β1/3, FGF1
      ↓
  Perivascular osteoprogenitor maintenance
  (Osterix+: ~70%; Runx2+: ~83%; ColIα+: ~74% within 20 μm)
      ↓
  Bone formation / osteogenesis

In aging (70 wk):
  HIF-1α protein ↓ (PHD-mediated) → Type H abundance ↓ → angiocrine output ↓
      → osteoprogenitor pool ↓ → bone formation ↓ → osteoporosis

Pharmacological reversal:
  DFM (PHD inhibitor) → HIF-1α ↑ → Type H ↑ → osteoprogenitors ↑ → bone mass ↑
  Vhl^iΔEC (genetic) → constitutive HIF-1α → Type H ↑ → bone mass ↑

Type H → Type L differentiation:
  Type H ECs (progenitor) → mature into Type L sinusoidal ECs over weeks
```

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | partial | CD31/Emcn-based vessel subtyping has been observed in human bone biopsies in follow-up work; this paper is mouse-only |
| HIF/PHD pathway conserved? | yes | PHD–HIF-1α axis is highly conserved; PHD inhibitors (e.g., roxadustat) are approved for renal anaemia in some jurisdictions |
| Age-related Type H decline in humans? | not yet established | Inferred from conservation; no direct human aging biopsy series in this paper |
| DFM bone-anabolic effect in humans? | not tested | DFM is used clinically for iron chelation, not bone anabolism; no bone-specific aging trial data in this paper |
| Osteoprogenitor-vascular coupling in humans? | partial | Consistent with clinical observation that vascular insufficiency is associated with poor fracture healing |

#gap/needs-human-replication — all mechanistic and rescue experiments are mouse-only.

## Limitations

- All mechanistic work performed in C57BL/6J mice; sex of animals is not stated in the main text or Methods visible in this PMC manuscript.
- DFM pharmacological rescue experiment uses mice aged **64 to 70 weeks** (confirmed in main text, p. 6). The "57–70 week" range cited in [[cell-types/osteoblasts]] [^kusumbe2014] appears to be an error in that footnote — the paper states 64–70 weeks. (Parent agent to correct osteoblasts.md.)
- The metabolic environment / HIF-1α spatial distinction is now resolved: see the "HIF-1α spatial note" box in the Type H vs Type L table above. Whole-tissue HIF-1α is high in the diaphysis; EC-specific HIF-1α is high in Type H ECs in the normoxic metaphysis (Extended Data Figs. 3a, 9a–b).
- DFM group sizes are small (n=5 for μ-CT, n=6–8 for gene expression); the bone-anabolic effect is promising but the translational interpretation rests on modest n.
- Mechanism of HIF-1α protein decline with age in bone ECs (PHD upregulation vs. other prolyl-hydroxylase-independent routes) is not resolved in this paper.
- Type H vessel decline may be secondary to age-related reductions in overall skeletal growth signaling (e.g., IGF-1, PTH) rather than a primary vascular aging phenomenon; the paper does not test this.
- DMOG (dimethyloxalylglycine, another PHD inhibitor) does **not** appear in this 2014 paper — confirmed by full-PDF review. The only PHD inhibitor used experimentally here is DFM (deferoxamine mesylate). DMOG may appear in [[studies/kusumbe-2016-vascular-niche-aging]] or other follow-up work.

## Cross-links

**Tissue and cell-type pages:**
- [[bone]] · [[bone-marrow]] · [[alveolar-bone]]
- [[osteoblasts]] · [[osteoclasts]] · [[osteocytes]] · [[mesenchymal-stem-cells]] · [[endothelial-cells]]

**Hallmarks:**
- [[stem-cell-exhaustion]] (osteoprogenitor depletion by vascular niche loss)

**Related studies:**
- [[studies/ramasamy-2014-endothelial-notch-bone]] — companion paper (same issue, DOI 10.1038/nature13146); Notch signaling regulates Type H vessel formation
- [[studies/kusumbe-2016-vascular-niche-aging]] — direct follow-up; extends Type H decline to haematopoietic stem cell niche aging
- [[studies/biswas-2023-bone-lymphatics]] — extends bone vascular biology to lymphatics; cites this foundational vessel-subtype framework

**Implicit stubs created (non-existent pages linked):**
- [[hif-1alpha]] — no HIF-1α protein page exists; central regulator of Type H identity #gap/needs-page

## Cited by

[Auto-populated by Obsidian backlinks panel]
