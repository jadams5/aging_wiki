---
type: pathway
aliases: [BMP pathway, bone morphogenetic protein signaling, BMP-SMAD pathway, TGF-beta/BMP]
kegg: hsa04350
reactome: R-HSA-201451
wikipathways: WP1425
key-nodes:
  - "[[bmp2]]"
  - "[[bmp4]]"
  - "[[bmp6]]"
  - "[[bmp7]]"
  - "[[bmpr1a]]"
  - "[[bmpr1b]]"
  - "[[acvr1]]"
  - "[[bmpr2]]"
  - "[[smad1]]"
  - "[[smad5]]"
  - "[[smad8]]"
  - "[[smad4]]"
  - "[[smad6]]"
  - "[[smad7]]"
  - "[[noggin]]"
  - "[[chordin]]"
  - "[[gremlin1]]"
  - "[[id1]]"
upstream:
  - "[[tgf-beta]]"
downstream:
  - "[[osteogenesis]]"
  - "[[hematopoietic-stem-cells]]"
  - "[[iron-homeostasis]]"
hallmarks:
  - "[[stem-cell-exhaustion]]"
  - "[[genomic-instability]]"
sens-categories: []
druggability-tier: 1
caused-by: []
causes:
  - "[[stem-cell-exhaustion]]"
  - "[[anemia-of-aging]]"
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "R20 lightweight verifier sweep — all 9 cited DOIs cross-checked via DOI lookup (Wozney 1988, Zhang 2003, Calvi 2003, Shore 2006, Andriopoulos 2009, Liu 2017, Garrison 2010, Smilde 2022, Dao 2013) — all titles match cited author/year/topic. Zhang 2003, Calvi 2003, Shore 2006, Andriopoulos 2009 have local PDFs (spot-check confirms topic match); others archive-confirmed by metadata only. Broken wikilink [[wnt-signaling]] → [[wnt-beta-catenin]] corrected during sweep."
---

# BMP signaling pathway

**Bone Morphogenetic Protein (BMP) signaling** is a conserved branch of the [[tgf-beta|TGF-β superfamily]] that signals through SMAD1/5/8 transcription factors (distinct from the SMAD2/3 arm used by TGF-β proper) to regulate cell fate, skeletal homeostasis, hematopoietic stem cell quiescence, and systemic iron metabolism. In aging, the pathway is implicated in three converging failure modes: loss of [[hematopoietic-stem-cells|HSC]] niche integrity ([[stem-cell-exhaustion]]), reduced osteoblast responsiveness contributing to age-related bone loss, and altered BMP6-hepcidin signaling that underlies part of the [[anemia-of-aging]] phenotype.

> **Pathway note:** KEGG hsa04350 covers the full TGF-β/BMP pathway; Reactome R-HSA-201451 ("Signaling by BMP") is the BMP-specific sub-pathway and is the preferred canonical reference for this page. The [[tgf-beta]] page (planned R20) covers the parallel TGF-β/SMAD2/3 axis.

---

## Canonical signal flow

### Ligands

BMPs (~20 family members in vertebrates) are secreted as disulfide-linked homodimers or heterodimers. The aging-relevant subset:

| Ligand | Primary aging context | Notes |
|---|---|---|
| BMP2 | Osteogenesis; used as rhBMP-2 (INFUSE) | Potent osteoinductive; also regulates HSC niche indirectly |
| BMP4 | HSC niche quiescence; ectopic ossification in FOP | Key endosteal niche signal |
| BMP6 | Hepcidin regulation; iron homeostasis | Liver sinusoidal endothelial cells are primary source |
| BMP7 | Osteogenesis; renal / adipose | Used as OP-1 / rhBMP-7 in bone applications |

Extracellular antagonists competitively bind BMPs and block receptor engagement — a key regulatory layer:
- **Noggin** — high-affinity antagonist; binds BMP2/4/7; produced by osteoblasts; pushes HSCs toward proliferation when elevated
- **Chordin** — binds BMP2/4/7 via vWF domains; cleaved by BMP1/Tolloid proteases to release active BMP
- **Gremlin-1** — BMP2/4/7 antagonist; regulated by feedback; elevated in fibrosis and some aging contexts

### Receptor complexes

BMPs signal through heteromeric type I / type II serine-threonine kinase receptor complexes assembled at the cell surface:

| Receptor class | Members | Role |
|---|---|---|
| Type I (ALK family) | ALK1 (ACVRL1), ALK2 (ACVR1), ALK3 (BMPR1A), ALK6 (BMPR1B) | Substrate-specificity-determining; phosphorylated by type II; phosphorylates R-SMADs |
| Type II | BMPR2, ACVR2A, ACVR2B | Constitutively active kinase; trans-phosphorylates and activates type I receptor |

### SMAD1/5/8 cascade (canonical)

1. BMP ligand binds preformed or ligand-induced heteromeric receptor complex (type II + type I).
2. Type II receptor trans-phosphorylates the GS domain of the type I receptor.
3. Activated type I receptor phosphorylates the C-terminal SSXS motif of R-SMADs (**SMAD1**, **SMAD5**, **SMAD8/9**).
4. Phospho-R-SMADs dissociate from the receptor and form trimeric complexes with the co-SMAD **SMAD4**.
5. The R-SMAD:SMAD4 complex translocates to the nucleus.
6. Nuclear complex activates BMP target genes — most prominently **ID1**, **ID2**, **ID3**, **ID4** (inhibitors of differentiation); **HAMP** (hepcidin); and osteoblast-lineage TFs (RUNX2, SP7/Osterix).

### Inhibitory SMADs (feedback)

**SMAD6** and **SMAD7** are direct transcriptional targets of BMP signaling that provide negative feedback:
- SMAD6 competes with SMAD4 for R-SMAD binding; recruits phosphatase PP2C to dephosphorylate R-SMADs.
- SMAD7 recruits the E3 ligases SMURF1/SMURF2 to target the type I receptor for proteasomal degradation.

### Non-SMAD branches

BMP receptors also activate MAPK (p38, ERK, JNK) and PI3K-AKT branches in a context-dependent manner, contributing to cytoskeletal remodeling and cell survival. These are less studied in aging contexts.

---

## BMP signaling in hematopoietic stem cell niche regulation

Hematopoietic stem cells reside in the endosteal bone marrow niche where osteoblasts produce BMP ligands (primarily BMP4) that maintain HSC quiescence. Conditional inactivation of **BMPRIA** (ALK3 / BMPR1A) in osteoblastic cells in mice led to a ~2× increase in the number of spindle-shaped N-cadherin+ osteoblasts and a proportional increase in long-term HSC (LT-HSC) numbers, establishing that BMP signaling through this receptor controls niche size [^zhang2003]. A companion study showed that stimulating osteoblasts with parathyroid hormone (PTH) increased HSC number and improved bone marrow transplant engraftment, with Jagged1 (a Notch ligand) as the osteoblast-to-HSC signal [^calvi2003].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (BMPRIA expressed in human osteoblasts; HSC niche architecture conserved) |
| Phenotype conserved in humans? | partial (HSC niche aging is documented in humans; BMP-specific contribution not directly tested) |
| Replicated in humans? | no (niche size studies are mouse only) |

**Aging context:** Aged mice show alterations in the endosteal niche including reduced osteoblast cellularity and altered cytokine milieu; BMP4 availability in the niche declines with age. Aged HSCs also show myeloid skewing and impaired self-renewal. Whether BMP-pathway insufficiency is causative or correlative in the aged niche remains unresolved. #gap/needs-human-replication #gap/no-mechanism

Noggin, by competing for BMP receptor binding, antagonizes HSC quiescence signals. Osteoblast-derived Noggin overexpression pushes HSCs toward proliferation — increasing short-term output at the cost of long-term pool depletion, a paradigm relevant to aging-associated stem cell exhaustion. #gap/needs-replication

---

## BMP signaling in bone biology and aging

BMPs (especially BMP2 and BMP7) drive commitment of mesenchymal progenitors to the osteoblast lineage by activating **RUNX2** and **SP7** (Osterix) transcription. This osteoinductive activity is exploited clinically: recombinant human BMP-2 (**rhBMP-2**, trade name INFUSE) is FDA-approved for anterior lumbar interbody fusion (ALIF) and open tibial shaft fractures. A 2010 Cochrane systematic review of rhBMP-2 in adult fractures found modest improvements in healing rates at tibial fractures and reduced need for re-operation, though at higher cost than standard care [^garrison2010].

**Age-related loss of BMP responsiveness:** Age-related upregulation of **PLEKHO1** (pleckstrin homology-like domain family O member 1) in osteoblasts suppresses Smad1/5 activity by enhancing their ubiquitination and proteasomal degradation. In aging rodents and in bone specimens from elderly fracture patients, PLEKHO1 expression was inversely correlated with BMP signaling activity and bone formation rate. Genetic knockout of PLEKHO1 in osteoblasts restored BMP-SMAD signaling and partially reversed osteoporotic phenotype in aged animals [^liu2017]. This identifies a cell-autonomous mechanism for the reduced BMP responsiveness observed in aging osteoblasts, distinct from ligand-level changes.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes (PLEKHO1 elevation observed in human aged bone specimens) |
| Replicated in humans? | no (intervention studies are rodent only) |

#gap/needs-human-replication — PLEKHO1 inhibition as a bone-anabolic strategy has not been tested in human trials.

---

## BMP6-hepcidin axis and iron homeostasis in aging

**BMP6** produced by liver sinusoidal endothelial cells acts on hepatocytes via ALK2/ALK3 receptors → SMAD1/5/8 → transcription of **HAMP** (hepcidin antimicrobial peptide). Hepcidin is the master regulator of systemic iron: it induces ferroportin degradation on enterocytes and macrophages, restricting iron absorption and recycling. BMP6 is the dominant physiological inducer of hepcidin; knockout of BMP6 in mice leads to severe iron overload, confirming it is a non-redundant regulator [^andriopoulos2009].

**Aging link:** Chronic low-grade inflammation in aged individuals (inflammaging) elevates IL-6 → STAT3-driven hepcidin transcription. Simultaneously, baseline BMP6-SMAD signaling in the liver may be dysregulated in a direction that further elevates hepcidin beyond what iron stores warrant. The result is functional iron deficiency (sufficient body iron, but reduced bioavailability) — a contributor to [[anemia-of-aging]]. Review evidence links elevated hepcidin to "unexplained anemia" in the elderly, partly through this inflammatory-BMP convergence [^dao2013].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (BMP6-hepcidin axis is well-established in humans) |
| Phenotype conserved in humans? | yes (elevated hepcidin in elderly anemia documented in humans) |
| Replicated in humans? | yes (observational; mechanistic intervention in humans is in-progress) |

#gap/dose-response-unclear — Whether pharmacological attenuation of the BMP6/hepcidin axis would safely ameliorate anemia of aging without causing iron overload is unresolved.

See also: [[anemia-of-aging]], [[iron-homeostasis]], [[inflammaging]].

---

## Disease: Fibrodysplasia ossificans progressiva (FOP)

**FOP** is a rare autosomal dominant disorder caused almost exclusively by a gain-of-function point mutation **R206H** in **ACVR1** (ALK2, the BMP type I receptor). The R206H substitution renders ALK2 constitutively active in response to Activin A (which normally inhibits via this receptor), driving ectopic endochondral ossification of soft tissues after minor trauma or inflammation. The mutation was identified by Shore et al. using linkage analysis in FOP kindreds; the paper confirmed the same heterozygous c.617G>A (R206H) change in 32/32 sporadic FOP cases [^shore2006].

ALK2 is thus a validated therapeutic target:
- **Saracatinib** (AZD0530), originally an Src/ABL kinase inhibitor, also potently inhibits ALK2. The STOPFOP trial (NCT03782428) is a multi-center double-blinded RCT evaluating saracatinib 125 mg/day for 6 months + 12-month open-label extension in FOP patients; primary outcome is heterotopic ossification volume by CT [^smilde2022]. #gap/long-term-unknown — trial results were pending as of 2025; efficacy for preventing disease progression has not been reported.
- **M4K2009** (a potent ALK2-selective probe) and **LDN-212854** are preclinical ALK2 inhibitors with improved selectivity being developed for FOP and diffuse intrinsic pontine glioma (DIPG, which frequently carries ACVR1 mutations).

---

## Therapeutic landscape

| Agent | Target | Stage | Aging-relevance |
|---|---|---|---|
| rhBMP-2 (INFUSE) | BMP2 agonism | FDA-approved (spinal fusion, tibial nonunion) | Potential utility in age-related bone loss; off-label heterotopic ossification risk |
| rhBMP-7 (OP-1) | BMP7 agonism | Approved (EU, device); withdrawn US | Osteogenic; used for non-union fractures |
| Saracatinib | ALK2 inhibition | Phase 2 RCT (STOPFOP) | FOP; potential utility in FOP-like ectopic ossification |
| Anti-noggin antibodies | Noggin blockade → BMP agonism | Preclinical | HSC niche restoration; bone anabolic |
| PLEKHO1 inhibitors (peptide) | Osteoblast BMP pathway restoration | Preclinical (rodent) | Aging-associated osteoporosis |

#gap/needs-human-replication — No aging-targeted BMP-pathway intervention has been tested in an appropriately powered human aging trial. rhBMP-2 use in elderly fracture patients is common but not systematically studied as a "BMP responsiveness" intervention.

---

## Cross-pathway connections

- **[[tgf-beta]]** — Shares the SMAD4 co-SMAD with BMP signaling; TGF-β signals via SMAD2/3 and has predominantly opposing effects on osteogenesis (inhibitory) and distinct effects on HSCs (suppressive vs. quiescence-maintaining depending on context). TGF-β and BMP pathways converge on shared I-SMADs (SMAD6/7) and share SKI/SnoN transcriptional co-repressors in the nucleus.
- **[[smad2-smad3]]** — The TGF-β-specific R-SMADs; compete for SMAD4 binding; their relative activity ratios determine cell fate in stem cell and mesenchymal contexts.
- **[[wnt-beta-catenin]]** — Reciprocally regulated with BMP in osteoblast vs. adipocyte lineage commitment; BMP2 and Wnt3a synergize on osteoblast differentiation but also antagonize via feedback. #gap/unsourced
- **[[ampk]]** — Limited direct cross-talk described; energetic stress and AMPK activation are reported to modulate BMP receptor trafficking. #gap/needs-replication
- **[[hematopoietic-stem-cells]]** — Primary cellular context for niche BMP signaling.
- **[[stem-cell-exhaustion]]** — Downstream hallmark affected by BMP niche failure.
- **[[anemia-of-aging]]** — Downstream phenotype linked through BMP6-hepcidin axis.
- **[[inflammaging]]** — IL-6-driven STAT3 pathway converges with BMP/SMAD1 on hepatocyte HAMP transcription; separating the two contributions to hepcidin elevation in aging is unresolved.

---

## Limitations and gaps

- **HSC niche BMP aging studies are predominantly murine.** The human endosteal niche is accessible only via biopsy; longitudinal BMP ligand measurements in aged human bone marrow are sparse. #gap/needs-human-replication
- **BMP6-hepcidin-aging causality not established.** Observational evidence links elevated hepcidin to anemia of aging, but whether BMP6 vs. IL-6 is the dominant driver in any given individual is unknown. #gap/no-mechanism
- **Osteoblast BMP responsiveness: PLEKHO1 mechanism needs replication.** Single-group study; independent replication in human cohorts needed. #gap/needs-replication
- **ALK2 inhibitor trials ongoing.** STOPFOP efficacy results not available as of 2025; efficacy for heterotopic ossification prevention is unconfirmed in humans. #gap/long-term-unknown
- **Non-SMAD BMP branches in aging are poorly characterized.** p38/MAPK and PI3K-AKT branches of BMP signaling have not been systematically evaluated in aged tissues. #gap/unsourced
- **WikiPathways ID (WP1425) needs verification** — the provided ID is a best-match candidate; confirm against WikiPathways database. #gap/needs-canonical-id

---

## Footnotes

[^wozney1988]: doi:10.1126/science.3201241 · Wozney JM et al. · *Science* 1988 · original molecular cloning of BMP-2 through BMP-8; n=N/A · review + molecular cloning · model: in-vitro (bovine bone-derived protein purification; Xenopus oocyte expression) · 3896 citations; citation percentile 100 · not_oa, no local PDF

[^zhang2003]: doi:10.1038/nature02041 · Zhang J et al. · *Nature* 2003 · BMPRIA conditional knockout in osteoblasts led to ~2-fold increase in N-cadherin+ osteoblasts and proportional increase in LT-HSC numbers · in-vivo · model: mouse (conditional BMPRIA KO) · 2886 citations · local PDF available

[^calvi2003]: doi:10.1038/nature02040 · Calvi LM et al. · *Nature* 2003 · PTH stimulation of osteoblasts increased HSC number and bone marrow transplant engraftment via Jagged1-Notch signaling · in-vivo · model: mouse (PPR-overexpressing transgenic) · 3382 citations · local PDF available

[^shore2006]: doi:10.1038/ng1783 · Shore EM et al. · *Nature Genetics* 2006 · identified ACVR1 R206H as the causative gain-of-function mutation in 32/32 sporadic FOP cases · genetic (linkage + sequencing) · model: human (FOP patients) · 1198 citations · local PDF available

[^andriopoulos2009]: doi:10.1038/ng.335 · Andriopoulos B Jr et al. · *Nature Genetics* 2009 · BMP6 knockout mice develop severe iron overload; BMP6 drives SMAD1/5/8 → HAMP (hepcidin) transcription in hepatocytes · in-vivo + in-vitro · model: mouse (BMP6 KO) + hepatocyte cell lines · 757 citations · local PDF available

[^liu2017]: doi:10.1111/acel.12566 · Liu J et al. · *Aging Cell* 2017 · age-related PLEKHO1 upregulation in osteoblasts suppresses Smad1/5 via ubiquitination; PLEKHO1 KO in osteoblasts restored BMP signaling and reversed osteoporotic phenotype · in-vivo + in-vitro · model: aged rats + human bone specimens · 41 citations · gold OA; no local PDF (pending)

[^garrison2010]: doi:10.1002/14651858.CD006950.pub2 · Garrison KR et al. · *Cochrane Database Syst Rev* 2010 · systematic review: rhBMP-2 modestly improved tibial fracture healing and reduced re-operation; costs higher than standard care · systematic-review · model: humans · 280 citations · no local PDF (pending)

[^smilde2022]: doi:10.1186/s12891-022-05471-x · Smilde BJ et al. · *BMC Musculoskeletal Disorders* 2022 · STOPFOP trial protocol: RCT of saracatinib 125 mg/day for heterotopic ossification prevention in FOP (ACVR1 R206H); 6-month blinded + 12-month OLE; primary outcome: HO volume by CT · rct (protocol) · model: humans (FOP patients) · 11 citations · gold OA; no local PDF (pending)

[^dao2013]: doi:10.3945/an.113.004424 · Dao MC et al. · *Advances in Nutrition* 2013 · review: hepcidin elevation links aging, inflammation, and iron restriction; chronic inflammation → IL-6 → STAT3-driven hepcidin ↑ → functional iron deficiency in elderly · review · model: human (observational) · 58 citations · bronze OA; no local PDF (pending)
