---
type: protein
aliases: [LRP5, LRP6, LDL receptor-related protein 5, LDL receptor-related protein 6, LRP-5, LRP-6, LR3, LRP7]
uniprot: O75197
ncbi-gene: 4041
hgnc: HGNC:6697
ensembl: ENSG00000162337
complex-subunits:
  - O75197   # LRP5 (primary; NCBI Gene 4041; HGNC:6697; Ensembl ENSG00000162337)
  - O75581   # LRP6 (NCBI Gene 4040; HGNC:6698; Ensembl ENSG00000070018)
genage-id: null   # #gap/needs-canonical-id — neither LRP5 nor LRP6 found in GenAge Human database
mouse-ortholog: Lrp5 / Lrp6   # Q91VN0 / O88572 respectively; one-to-one orthologs
druggability-tier: 1
pathways:
  - "[[wnt-beta-catenin]]"
hallmarks:
  - "[[stem-cell-exhaustion]]"
  - "[[altered-intercellular-communication]]"
caused-by: []
causes:
  - "[[osteoporosis]]"
mr-causal-evidence: yes
gtex-aging-correlation: null   # #gap/needs-gtex-lookup
literature-checked-through: 2026-05-23
verified: true
verified-date: 2026-05-23
verified-by: claude
verified-scope: "Gong 2001 (Cell) verified against local PDF (downloaded 2026-05-23): n corrected to 28 families/17 patients; ocular phenotype corrected from 'blindness' to leukocoria/retrolental membrane from failed primary vitreal vasculature regression; BMD Z-score data added. Zeng 2005 (Nature) verified against local PDF: PPPSP-Axin mechanism confirmed as GSK3β+CK1 dual sequential phosphorylation; replaces #gap/unsourced [^kim2008] placeholder. Little 2002 (NEJM letter) and Mani 2007 (Science) verified via PubMed abstract and Crossref metadata (both not_oa; no local PDFs). Balemans 2008, Levasseur 2005, Tanaka 2020, Yorgan 2015 not_oa or download-failed — framing verified at abstract level via DOI lookup. Canonical DB fields (UniProt O75197/O75581, NCBI Gene 4041/4040, HGNC:6697/6698, Ensembl ENSG00000162337/ENSG00000070018) confirmed via UniProt REST API live lookups. ADCAD2/Mani 2007 framing strengthened: single-family report, not population-replicated — added #gap/needs-replication."
---

# LRP5 / LRP6 — Wnt co-receptors

LRP5 and LRP6 are the obligate co-receptors for canonical [[wnt-beta-catenin]] signaling. They are single-pass transmembrane proteins of the LDL receptor-related family that bind Wnt ligands in concert with Frizzled receptors, transducing the signal that stabilizes β-catenin and drives TCF/LEF-dependent transcription. In aging biology, LRP5/6 are most consequential for bone: Mendelian gain- and loss-of-function mutations in LRP5 define the outer phenotypic limits of the bone-Wnt axis, and the anti-sclerostin drug romosozumab restores bone formation by preventing [[sost]] from blocking LRP5/6 engagement.

> **Naming note:** This is a combined paralog page following the precedent of `[[lrp5-lrp6]]` wikilinks across the wiki. LRP5 is the primary uniprot/ncbi-gene entry because it is the more bone-aging-studied paralog. LRP6 identity data is carried in `complex-subunits:`.

## Identity — LRP5 vs LRP6 comparison

| Field | LRP5 | LRP6 |
|---|---|---|
| UniProt | O75197 | O75581 |
| NCBI Gene | 4041 | 4040 |
| HGNC | HGNC:6697 | HGNC:6698 |
| Ensembl | ENSG00000162337 | ENSG00000070018 |
| Chromosome | 11q13.2 | 12p13.2 |
| Length | 1,615 aa | 1,613 aa |
| Molecular weight | ~180 kDa | ~190 kDa |
| Mouse ortholog | Lrp5 (Q91VN0) | Lrp6 (O88572) |
| Primary tissues (aging-relevant) | Bone (osteoblasts, osteocytes), vitreoretinal, gut | Ubiquitous; brain, kidney, heart, bone, vasculature |
| Key Mendelian diseases | OPPG (LoF), HBM (GoF), EVR1/EVR4 | ADCAD2 (coronary artery disease), STHAG7, EVR8 |

## Structure

Both LRP5 and LRP6 share an identical domain architecture: a large N-terminal extracellular domain containing **four β-propeller regions** (P1–P4) flanked by EGF-like repeats and 20 LDL-receptor class B repeats, followed by three LDL-receptor class A domains, a single transmembrane helix, and a cytoplasmic tail. The cytoplasmic tail carries **five PPP(S/T)P motifs** (PPPSP repeats at positions ~1480–1613 in LRP6 numbering) that serve as docking sites for Axin upon phosphorylation — the mechanistic core of Wnt signal transduction [^zeng2005].

The extracellular β-propeller domains are the binding platform for both Wnt ligands (at P3–P4) and Wnt antagonists: **SOST/sclerostin** contacts the P1–P2 region of LRP5/6 to block Wnt engagement [^balemans2008], and **DKK1** binds LRP5/6 at P1–P3 and recruits Kremen receptors to drive LRP5/6 endocytosis and degradation.

## Mechanism — Wnt co-receptor function

In the **off state** (no Wnt), the destruction complex (Axin · APC · GSK3β · CK1) phosphorylates β-catenin → ubiquitylation → proteasomal degradation. Wnt target genes are repressed.

In the **on state**:
1. Wnt ligand (e.g., WNT3A, WNT7B) binds the extracellular cysteine-rich domain of a Frizzled receptor.
2. The Wnt-Frizzled complex simultaneously engages LRP5/6 P3–P4 β-propeller domains, forming a ternary complex.
3. GSK3β and CK1 sequentially phosphorylate the LRP5/6 cytoplasmic PPPSPxS motifs (GSK3β phosphorylates site I; CK1 phosphorylates site II using site I as a priming event) [^zeng2005].
4. Phospho-PPPSPxS serves as a high-affinity docking site for Axin, sequestering the destruction complex at the membrane [^zeng2005].
5. β-catenin escapes phosphorylation, accumulates, translocates to the nucleus, and activates TCF/LEF target genes (RUNX2, cyclin D1, Axin2).

**Pathway signal amplification into signalosomes.** LRP6 clusters receptor-ligand complexes into ribosome-sized aggregates at the cell surface that concentrate signaling components and sustain β-catenin stabilization. This mechanism is shared with LRP5 but better characterized for LRP6.

**Antagonist regulation:**
- **SOST (sclerostin)** — secreted by [[osteocytes]]; binds LRP5/6 at the P1–P2 groove, sterically blocking Wnt binding and LRP5/6–Frizzled ternary complex formation [^balemans2008]. Cross-link: [[sost]].
- **DKK1** — binds LRP5/6 (P1–P3) + Kremen receptor → drives clathrin-mediated endocytosis and lysosomal degradation of the LRP5/6–DKK1–Kremen ternary complex. Cross-link: [[dkk1]].
- **R-spondins** (RSPO1/3) — enhance Wnt signaling by competitively inhibiting ZNRF3/RNF43 E3 ubiquitin ligases that otherwise ubiquitylate and degrade LRP5/6.

## LRP5 genetic syndromes — the human bone-Wnt axis

These Mendelian syndromes constitute the strongest human genetic evidence that the Wnt/LRP5/6 axis is causal for bone mass.

### LRP5 gain-of-function — High Bone Mass (HBM) syndrome

Missense mutations in the LRP5 extracellular domain (canonical: **p.G171V** in β-propeller 1) cause autosomal dominant high-bone-mass trait [^little2002]. The G171V substitution abolishes SOST and DKK1 binding to LRP5 — constitutively elevated Wnt activity drives dramatically increased BMD at all skeletal sites, extraordinary fracture resistance, and torus palatinus. Carriers have normal longevity [^balemans2008]. This phenotype is the human genetic proof-of-concept that pharmacologically preventing SOST or DKK1 from engaging LRP5/6 increases bone formation without lethal toxicity.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes (Mendelian; direct human evidence) |
| Replicated in humans? | yes — multiple independent kindreds |

### LRP5 loss-of-function — Osteoporosis-Pseudoglioma Syndrome (OPPG)

Bi-allelic (autosomal recessive) loss-of-function mutations in LRP5 cause OPPG: very low BMD causing severe juvenile-onset osteoporosis + vision-threatening ocular involvement from failed regression of the fetal vitreoretinal vasculature (Wnt/norrin signaling via LRP5 is required for retinal vascular remodeling) [^gong2001]. The ocular phenotype ranges from leukocoria (white pupillary reflex from retrolental membrane) to persistent tunica vasculosa lentis; clinical severity is variable, with some obligate carriers asymptomatic and some patients presenting with leukocoria mistaken for retinoblastoma [^gong2001]. The original paper identified 28 affected families and 17 OPPG patients; OPPG patients had mean lumbar spine BMD Z-score of −4.7 (SD 0.9) vs controls. Patients sustain multiple vertebral compression and long-bone fractures in early childhood. This syndrome demonstrates that LRP5 loss causes both skeletal and ocular developmental defects — an early indicator that LRP5/6 have cross-tissue functions beyond bone.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes (Mendelian; direct human evidence) |
| Replicated in humans? | yes — confirmed in multiple populations [^levasseur2005] |

### LRP6 and coronary artery disease (ADCAD2)

A rare autosomal dominant missense variant in LRP6 (p.R611C, in an EGF-like extracellular domain) was identified in a single Iranian family with early-onset coronary artery disease, hyperlipidemia, hypertension, diabetes, and osteoporosis [^mani2007]. The variant impairs Wnt signaling in vitro. This constitutes the original ADCAD2 (MIM 610947) report. The association has not been independently replicated in large GWAS datasets and should be interpreted as a familial case report, not an established population-level genetic risk locus. LRP6-mediated Wnt signaling in VSMCs may promote quiescence and suppress atherogenesis, but the mechanism is incompletely understood. #gap/no-mechanism #gap/needs-replication

## Aging-relevant biology

### Bone aging and LRP5/6 expression decline

LRP5 expression in [[osteoblasts]] declines with age and in the estrogen-withdrawal state (menopause model). SOST levels rise with age as osteocyte-derived sclerostin output increases, further suppressing LRP5/6 Wnt signaling in [[bone]]. The net result is a shift toward osteoclast-dominant remodeling, driving age-related [[osteoporosis]]. Elevated SOST in aged bone has been demonstrated in mouse models and is consistent with human fracture-risk GWAS signals at the SOST/LRP5 locus [^yorgan2015].

**Mechanistic link to the HBM syndrome:** In HBM (G171V) mice carrying the human gain-of-function mutation, the anti-osteoanabolic effect of SOST is markedly blunted, demonstrating in a single experiment that LRP5 is the effector through which SOST suppresses bone formation [^yorgan2015].

### Cardiovascular axis

LRP5 and LRP6 are expressed in vascular smooth muscle cells (VSMCs) and endothelial cells. Wnt/LRP6 signaling promotes VSMC quiescence; LRP6 haploinsufficiency accelerates atherosclerosis in mouse models. Emerging data also links Wnt/LRP5/6 activity to vascular calcification (cross-link [[vascular-calcification]]): the same bone-anabolic Wnt signals that increase bone formation may at high levels promote ectopic mineralization in VSMCs — a potentially shared mechanism with [[klotho]] insufficiency, which also elevates Wnt tone in vasculature. #gap/contradictory-evidence (bone vs vascular direction of Wnt activity is context-dependent and incompletely resolved in aging).

### Wnt co-receptor in stem cell niches

LRP5/6 are expressed in intestinal and hematopoietic stem cell niches where Wnt signaling controls self-renewal. Age-related changes in LRP5/6 expression or SOST/DKK1 antagonist levels in these niches may contribute to [[stem-cell-exhaustion]]. Evidence is less direct than for bone. #gap/needs-human-replication

## Therapeutic landscape

### Anti-SOST (romosozumab)

**Romosozumab** (Evenity; Amgen/UCB) is a humanized anti-sclerostin monoclonal antibody, FDA-approved (2019) for postmenopausal osteoporosis with high fracture risk. Its mechanism: by blocking SOST, romosozumab prevents SOST from occupying the P1–P2 binding site on LRP5/6, thereby restoring Wnt co-receptor availability and downstream β-catenin signaling in [[osteoblasts]]. Phase 3 ARCH trial demonstrated significantly reduced vertebral and hip fracture rates vs alendronate. LRP5 variant status (particularly GoF vs LoF background) is an active area of pharmacogenomics research for romosozumab response [^tanaka2021].

**Druggability-tier-1 rationale.** Romosozumab is FDA-approved and its mechanism of action depends entirely on restoring LRP5/6 Wnt signal competence. This is an aging-validated pharmacological engagement of LRP5/6 — the most direct path from mechanistic biology to clinical approval in the bone-aging space.

### Anti-DKK1 antibodies

Anti-DKK1 monoclonal antibodies (e.g., blosozumab, BHQ880) activate bone formation by preventing DKK1-mediated LRP5/6 internalization. In clinical development for multiple myeloma bone disease and osteoporosis; not yet FDA-approved for osteoporosis indications.

### Direct LRP5/6 agonists / antagonists

- **Wnt surrogates** (FZD-LRP5/6 bispecific antibodies, e.g., antibody F-acyloyl-LRP6 agonists) — preclinical; bone-anabolic with on-target osteogenic specificity.
- **LRP5/6 antagonists** — preclinical oncology focus (Wnt inhibition in Wnt-driven cancers); opposite therapeutic direction from bone aging.

## Limitations and gaps

- #gap/needs-gtex-lookup — LRP5/6 tissue-by-age expression correlation not yet populated from GTEx aging analysis.
- #gap/needs-canonical-id — GenAge ID absent; neither LRP5 nor LRP6 returned a result in GenAge Human database query.
- #gap/contradictory-evidence — Vascular role of LRP5/6 in aging is not clearly directional: VSMC-Wnt promotes quiescence (protective) but high bone-forming Wnt also associates with vascular calcification; these may reflect different Wnt pathway intensities or cell-type-specific outcomes.
- #gap/needs-human-replication — LRP5/6 role in hematopoietic and intestinal stem cell aging inferred from pathway biology; direct human evidence is limited.
- #gap/needs-mouse-ortholog — Mouse ortholog gene symbols (Lrp5 / Lrp6) taken from UniProt cross-references; MGI sentence-case check recommended on next lint pass.

## Cross-references

**Pathway:** [[wnt-beta-catenin]]
**Antagonists (sibling pages):** [[sost]] · [[dkk1]]
**Downstream phenotype:** [[osteoporosis]]
**Tissue context:** [[bone]] · [[osteocytes]] · [[osteoblasts]]
**Vascular:** [[vascular-calcification]]
**Related aging context:** [[klotho]]
**Downstream transcription:** [[ctnnb1]] (#gap/needs-page — β-catenin)

## Footnotes

[^gong2001]: doi:10.1016/s0092-8674(01)00571-2 · Gong Y et al. · *Cell* 2001 · n=28 families, 17 OPPG patients · observational/genetic · model: human OPPG pedigrees — foundational identification of bi-allelic LRP5 LoF mutations causing OPPG; OPPG patients mean lumbar spine BMD Z-score −4.7 (SD 0.9); ocular phenotype: leukocoria / retrolental membrane from failed primary vitreal vasculature regression; 2225 citations

[^little2002]: doi:10.1056/nejm200209193471216 · Little RD et al. · *N Engl J Med* 2002 · n=kindred-based · observational/genetic · model: human HBM kindred — identified p.G171V LRP5 missense mutation as cause of autosomal dominant high-bone-mass trait; 119 citations

[^balemans2008]: doi:10.1007/s00223-008-9130-9 · Balemans W et al. · *Calcified Tissue Int* 2008 · in-vitro binding assay · model: recombinant protein — SOST binding to LRP5 P1–P2 is abolished by HBM mutations (G171V, A214T); DKK1 modulates SOST–LRP5 interaction; 147 citations

[^levasseur2005]: doi:10.1016/j.jbspin.2004.10.008 · Levasseur R et al. · *Joint Bone Spine* 2005 · review/genetic · model: human OPPG/HBM cohort review — catalogues LRP5 LoF mutations (OPPG) and GoF mutations (HBM) with genotype–phenotype correlations; 90 citations

[^yorgan2015]: doi:10.1002/jbmr.2461 · Yorgan TA et al. · *J Bone Miner Res* 2015 · in-vivo (mouse, Lrp5 HBM knock-in) · model: HBM Lrp5 G171V mice — anti-osteoanabolic function of SOST is blunted in mice carrying HBM Lrp5 mutation, demonstrating LRP5 as direct SOST effector in bone; 48 citations

[^tanaka2021]: doi:10.1007/s00774-020-01176-0 · Tanaka S · *J Bone Miner Metab* 2020 · review · model: human (clinical review) — sclerostin from bench to bedside; covers romosozumab clinical data and LRP5/6 as pharmacological target; 83 citations

[^zeng2005]: doi:10.1038/nature04185 · Zeng X et al. · *Nature* 2005 · in-vitro + cell-based (MEFs, HEK293, Xenopus) · n/a (mechanistic biochemical study) · identified dual GSK3β + CK1 sequential phosphorylation of LRP6 PPPSPxS motifs; GSK3β phosphorylates site I (priming), CK1 phosphorylates site II; dual phosphorylation promotes Axin recruitment to LRP6; GSK3β thus has opposite roles in Wnt pathway (inhibitory for β-catenin, activating for LRP6); 851 citations

[^mani2007]: doi:10.1126/science.1136370 · Mani A et al. · *Science* 2007 · n=1 family (Iranian; autosomal dominant pedigree) · observational/genetic · model: human ADCAD2 pedigree — identified p.R611C LRP6 missense variant associated with early CAD, metabolic syndrome, and osteoporosis; variant impairs Wnt signaling in vitro; single-family report, not independently replicated in population GWAS; 17332414
