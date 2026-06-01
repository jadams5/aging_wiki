---
type: protein
aliases: [RALDH1, retinaldehyde dehydrogenase 1, ALDH-E1, ALDH1, ALDC, PUMB1]
uniprot: P00352
ncbi-gene: 216
hgnc: 402
ensembl: ENSG00000165092
genage-id: null
mouse-ortholog: Aldh1a1
pathways: ["[[retinoid-signaling]]", "[[insulin-igf1]]"]
hallmarks: ["[[loss-of-proteostasis]]", "[[stem-cell-exhaustion]]", "[[mitochondrial-dysfunction]]"]
sens-categories: []
druggability-tier: 2
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: ["[[oxidative-stress]]"]
causes: ["[[retinoid-signaling]]", "[[sasp]]"]
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "UniProt/HGNC/NCBI canonical-DB fields verified against live APIs. PDFs read for Chute 2006, Pequerul 2020, Poulin 2014, Martirosyan 2024, Petrosino 2014; Choudhary 2005 confirmed via PubMed efetch. Corrections: HGNC 405→402; Choudhary DOI corrected; lovaas2020 first author + volume corrected (Pequerul R, vol 681); NCT-501 attribution to Pequerul 2020 removed (#gap/unsourced); Martirosyan 2024 '28 genes in neuronal subpopulations' corrected to '28 shared markers across TH-enriched neuronal + glial depleted populations'; Chute 2006 DEAB described as broad ALDH inhibitor (not ALDH1A1-selective); Poulin 2014 MPTP quantitative data added (66.2% vs 39.1%). Fujiwara 2007 DOI not found in archive — body claim about pituitary RALDH2/3 not re-verified. Zhang 2010, Yasmeen 2011, Napoli 2017 PDFs still pending at time of verification."
---

# ALDH1A1 (RALDH1)

Aldehyde dehydrogenase 1A1 (ALDH1A1) is the **rate-limiting enzyme for retinoic acid synthesis** in adult liver, hematopoietic stem cells (HSCs), and dopaminergic neurons of the substantia nigra. It catalyzes the NAD⁺-dependent irreversible oxidation of retinaldehyde to all-trans retinoic acid (atRA), and also detoxifies reactive lipid aldehydes — particularly 4-hydroxynonenal (4-HNE) — generated during oxidative stress. ALDH1A1 is one of three RALDH paralogs (RALDH1/2/3 encoded by ALDH1A1/1A2/1A3); the paralogs share the same catalytic reaction but differ sharply in tissue distribution and developmental expression timing.

## Identity

| Property | Value |
|---|---|
| UniProt | P00352 (ALDH1A1_HUMAN) |
| NCBI Gene | 216 |
| HGNC symbol | ALDH1A1 (HGNC:402) |
| Ensembl | ENSG00000165092 |
| Mouse ortholog | Aldh1a1 (one-to-one; high conservation) |
| Sequence length | 501 amino acids (~55 kDa) |
| Subcellular location | Cytoplasm / cytosol; also detected in axonal projections |
| GenAge entry | not listed — not a canonical pro-longevity or lifespan gene in HAGR as of 2026-05-19 #gap/needs-canonical-id |

## Key functional domains and PTMs

ALDH1A1 belongs to the aldehyde dehydrogenase superfamily and adopts a homotetrameric structure. The active site catalytic Cys residue (Cys303 in human) attacks the aldehyde carbonyl of the substrate (retinaldehyde, 4-HNE, or other aliphatic aldehydes). Post-translational modifications identified in UniProt include:

- **N-terminal acetylation** at Ser-2 (co-translational)
- **Lysine acetylation** at multiple sites (K91, K128, K252, K353, K367, K410, K419, K435, K495) — putative regulatory sites; biological significance largely unexplored
- **Phosphorylation** at Thr-337 and Ser-413

Structural differences among ALDH1A subfamily members (ALDH1A1, 1A2, 1A3) are subtle at the active-site cleft but create distinct substrate selectivity and inhibitor-binding profiles — a basis for isoform-selective chemical probe design [^lovaas2020]. The substrate-binding pocket volumes differ: 534 / 387 / 387 Å³ for ALDH1A1 / ALDH1A2 / ALDH1A3 respectively, with ALDH1A1 having the largest pocket [^lovaas2020].

## Catalytic function: retinaldehyde → retinoic acid

ALDH1A1 is one of three mammalian RALDH enzymes that collectively mediate the **irreversible bottleneck step** in the vitamin A → retinoic acid pathway:

```
Dietary retinyl esters → retinol
        ↓  ADH/RDH (reversible; alcohol dehydrogenases)
  All-trans retinaldehyde
        ↓  ALDH1A1 / ALDH1A2 / ALDH1A3  ← [this enzyme; rate-limiting; essentially irreversible]
  All-trans retinoic acid (atRA / tretinoin)
        ↓  RARα/β/γ : RXR heterodimers → RARE-driven transcription
  Target genes: CYP26A1, HOXA1, CRABP2, RAR-β, p21,...
```

The irreversibility of RALDH-catalyzed oxidation means ALDH1A1 activity **sets the ceiling** on local atRA concentration in tissues that lack direct access to systemic retinol. This is pharmacologically relevant for topically applied retinaldehyde: conversion efficiency depends on ALDH1A expression in keratinocytes and dermal fibroblasts, which varies with age and UV exposure history — see [[retinaldehyde]] for the skin-context discussion.

## Tissue expression and paralog distribution

The three RALDH paralogs occupy non-overlapping tissue niches in adult physiology [^petrosino2014]:

| Isoform | Gene | Primary adult expression | Key developmental role |
|---|---|---|---|
| **RALDH1** (this page) | ALDH1A1 | Liver (dominant), HSCs, substantia nigra dopaminergic neurons, retinal pigment epithelium | Postnatal and regenerative atRA synthesis |
| RALDH2 | ALDH1A2 | Embryonic mesoderm, heart, lung, gonad, gut | Major embryonic atRA source; Aldh1a2-null mice die in utero |
| RALDH3 | ALDH1A3 | Nasal epithelium, olfactory mucosa, ventral retina, anterior pituitary | Head/face morphogenesis; olfactory development |

**Key distinction:** RALDH1 is the **dominant postnatal RALDH** for systemic retinoic acid homeostasis. RALDH2 is the dominant embryonic source; pituitary RALDH is RALDH2/3, not RALDH1 [^fujiwara2007].

#gap/needs-human-replication — Tissue-distribution data in the table is derived primarily from rodent studies; quantitative human tissue data for RALDH1 vs RALDH2/3 comparison is sparse in GTEx. `gtex-aging-correlation:` field is null pending `sops/finding-tissue-expression.md` lookup.

## Aging-relevant biology

### 1. HSC self-renewal and stem-cell fate

ALDH activity (assessed via the ALDEFLUOR assay, which detects ALDH1A1 in HSCs) is a widely used marker of the most primitive HSC fraction. Inhibition of ALDH with DEAB (N,N-diethylaminobenzaldehyde — a broad ALDH inhibitor, not selective for ALDH1A1) produced a **3.4-fold expansion** of SCID-repopulating cells (SRCs) from human cord blood CD34+CD38− cells in ex vivo culture, with retained multilineage engraftment in NOD/SCID mice; this phenotype was reversed by exogenous ATRA (1 µM) and by the RAR-specific agonist TTNPB, establishing that ALDH1A1-driven retinoic acid synthesis (confirmed by DEAB-induced reduction in cEBPε expression, an RAR target) restrains HSC self-renewal [^chute2006].

This establishes a dual-edged role in aging: ALDH1A1 activity is required for HSC survival and maintenance, but excessive retinoic acid signaling from ALDH1A1 may drive HSC commitment/differentiation at the expense of the quiescent self-renewing pool. Aged bone marrow shows alterations in the ALDEFLUOR-high fraction — whether this reflects primary ALDH1A1 decline or is secondary to niche remodeling is unresolved. #gap/contradictory-evidence

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | ALDEFLUOR-high fraction identifies primitive HSCs in both mouse and human bone marrow |
| Phenotype (HSC exhaustion with aging)? | yes | Stem cell exhaustion is a canonical hallmark; RALDH1 contribution specifically is unresolved |
| Replicated in humans? | partial | ALDEFLUOR used clinically for HSC isolation; DEAB mechanistic studies are human ex-vivo |

### 2. Lipid-aldehyde detoxification (4-HNE and oxidative damage)

4-Hydroxynonenal (4-HNE) is the major lipid-peroxidation aldehyde generated during mitochondrial ROS overproduction — a central feature of aging. ALDH1A1 is a principal cytosolic enzyme for 4-HNE detoxification [^choudhary2005]. In neuroblastoma cells, ALDH1A1 overexpression reduced protein-HNE adduct formation and caspase-3 activation under oxidative challenge [^zhang2010].

This positions ALDH1A1 as a **first-line oxidative-stress buffer**: its loss or enzymatic inhibition accelerates lipid-adduct accumulation in lens, brain, and liver. Age-associated decline in ALDH activity has been documented in several tissues, though whether ALDH1A1 specifically is the rate-limiting isoform for 4-HNE clearance in aging contexts is not well resolved. #gap/no-mechanism

### 3. Dopaminergic neuron identity and Parkinson's disease vulnerability

ALDH1A1 is a molecular marker for a specific subpopulation of substantia nigra dopaminergic (SN-DA) neurons — the **ALDH1A1+ (DA1A) subset** — identified by single-cell qPCR profiling of 159 mouse midbrain DA neurons [^poulin2014]. This subset shows preferential vulnerability in MPTP-induced parkinsonism in mice: ALDH1A1+ (DA1A) neurons showed a **66.2% diminution** after MPTP vs saline (p=0.001), compared to only 39.1% loss in the remaining (DA1B) DA neurons (p=0.001). In human Parkinson's disease (PD); snRNA-seq of ~84,000 nuclei from the SN in PD cases vs controls (15 PD / 14 controls) identified ALDH1A1 among 28 cell markers shared across multiple TH-enriched depleted cell types — dopaminergic Neurons0, Astrocytes2, Microglia1, and Oligos2 — confirming ALDH1A1 as a pan-TH-enriched population marker depleted in PD across both neuronal and glial subpopulations [^martirosyan2024].

ALDH1A1 is proposed to serve a **dual protective function** in these neurons: (1) synthesizing atRA to support dopamine neuron survival signaling, and (2) detoxifying DOPAL (3,4-dihydroxyphenylacetaldehyde), the toxic aldehyde intermediate produced when monoamine oxidase (MAO) degrades dopamine. Loss of ALDH1A1 activity in aged SN neurons may therefore combine impaired neuroprotective retinoic acid signaling with DOPAL accumulation — a "double-hit" mechanism. #gap/no-mechanism — the relative contributions of the retinoid vs DOPAL-detox functions in PD are debated.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | ALDH1A1+ SN-DA subset is present in human brain |
| Phenotype (DA neuron loss) in humans? | yes | Core PD pathology |
| ALDH1A1 causal vs marker? | contested | #gap/contradictory-evidence |

### 4. Adipose tissue and metabolic regulation

In adipose tissue, ALDH1A1 synthesizes atRA from locally stored retinaldehyde, which in turn activates RAR-dependent suppression of PPARγ — the master adipogenic transcription factor. Adipose-specific atRA signaling via RALDH1 thus **opposes adipogenesis** and modulates visceral fat expansion [^yasmeen2011]. Paradoxically, Raldh1 knockout mice show enhanced adiposity during adolescence via a retinal-independent, cell-autonomous mechanism in preadipocytes [^napoli2017], suggesting the enzyme's adipose functions extend beyond simple atRA production.

ALDH1A1 expression is sex-specific in fat depots — higher in females — which may contribute to sex differences in obesity susceptibility and metabolic aging trajectories [^petrosino2014].

### 5. Retinoid-axis decline in aged skin

As discussed in [[retinaldehyde]], RALDH-mediated conversion is the rate-limiting step controlling local atRA levels in skin. If ALDH1A1 expression or activity declines in aged keratinocytes and dermal fibroblasts — a plausible outcome given the general age-associated decline in ALDH activity — the effective potency of topically applied retinaldehyde would narrow relative to younger skin. This has not been quantitatively characterized in human skin biopsies stratified by age. #gap/needs-human-replication

The Falckenhayn 2024 epigenetic context referenced in the seeding brief is noted here; DNA methylation changes at the ALDH1A1 locus with age may reduce transcription in some tissues — however, the specific Falckenhayn data were not retrieved and this connection should not be treated as verified. #gap/unsourced

## Paralog comparison and isoform selectivity

| Feature | ALDH1A1 (RALDH1) | ALDH1A2 (RALDH2) | ALDH1A3 (RALDH3) |
|---|---|---|---|
| Adult dominant tissue | Liver, HSCs, SN neurons | Lung, heart, kidney | Nasal epithelium, olfactory |
| Embryonic lethality of KO | No (Aldh1a1-KO viable) | Yes | No (but craniofacial defects) |
| 4-HNE detox activity | Yes (major) | Limited data | Limited data |
| DOPAL detox (dopamine catabolism) | Yes | No (not expressed in SN) | No |
| Cancer stem-cell marker use | ALDEFLUOR assay primary target | Secondary contributor | Secondary contributor |
| Selective inhibitor | DEAB (broad ALDH inhibitor), NCT-501 (ALDH1A1-selective, reported in other literature) #gap/unsourced | — | — |

The availability of ALDH1A1-selective inhibitors (NCT-501 and related compounds) creates pharmacological leverage for HSC expansion protocols and potential cancer-stem-cell targeting; no aging indication is currently in clinical development. #gap/needs-human-replication #gap/unsourced — NCT-501 selectivity claim requires a separate citation; the Pequerul 2020 structural paper does not characterize NCT-501.

## Druggability

Open Targets platform query for ENSG00000165092 was unavailable via REST at time of seeding; tier-2 assignment reflects: (1) DEAB is a broad ALDH inhibitor in wide research use; the Pequerul 2020 structural paper [^lovaas2020] provides detailed kinetic characterization of ALDH1A subfamily but does not characterize ALDH1A1-selective probes such as NCT-501 — NCT-501 selectivity requires a separate citation; (2) no FDA-approved drug targets ALDH1A1 specifically for any indication; (3) no clinical trials active for ALDH1A1-targeted aging intervention (ClinicalTrials.gov query, 2026-05-19). Aging-context druggability is therefore **tier 2** pending confirmation. #gap/no-opentargets-entry — confirm via Open Targets on verification pass.

## Pathway membership

- [[retinoid-signaling]] — primary pathway; RALDH1 is the rate-limiting enzymatic node for atRA synthesis in postnatal tissues #stub
- [[insulin-igf1]] — atRA-driven RAR activation intersects the insulin/IGF-1 axis at the level of FOXO transcription factor regulation (contested; indirect)

## Known interactors

- [[rar-alpha]], [[rar-gamma]] — nuclear receptors downstream of atRA product
- CRALBP (cellular retinaldehyde-binding protein) — substrate channeling in retinal pigment epithelium
- NADP⁺/NAD⁺ — cofactor; NAD⁺ is the electron acceptor; relevant to NAD⁺ decline in aging

## Cross-references

- [[retinaldehyde]] — substrate; see rate-limiting conversion discussion
- [[retinol]] — upstream precursor (two enzymatic steps above atRA)
- [[tretinoin]] — product (atRA); direct RAR ligand
- [[stem-cell-exhaustion]] — hallmark linked via HSC self-renewal role
- [[loss-of-proteostasis]] — hallmark linked via 4-HNE detoxification and proteotoxic-stress buffering
- [[mitochondrial-dysfunction]] — hallmark linked via ROS → 4-HNE → ALDH1A1 substrate load
- [[sasp]] — DOPAL/aldehyde accumulation downstream of ALDH1A1 loss may potentiate inflammatory signaling in aging neurons
- [[nad-precursors]] — NAD⁺ availability influences ALDH1A1 enzymatic capacity; age-related NAD⁺ decline (#gap/no-mechanism for this specific link)

## Limitations and gaps

- **No aging-specific human genetic study.** No GWAS or Mendelian randomization study has tested ALDH1A1 as a causal driver of any aging phenotype. `mr-causal-evidence: not-tested`. #gap/needs-human-replication
- **ALDH1A1 expression in aged human tissues is poorly characterized.** The assertion that RALDH activity declines with age rests mainly on indirect or rodent data. Human biopsy data stratified by age for liver, skin, and bone marrow are lacking. #gap/unsourced
- **Falckenhayn 2024 epigenetic context was not retrieved.** The seeding brief cited epigenetic context from Falckenhayn 2024; this could not be confirmed via abstract retrieval at seeding time. Verifier should check this specific source. #gap/unsourced
- **DOPAL-detox vs retinoid function:** The relative contribution of ALDH1A1's two protective mechanisms in dopaminergic neurons (atRA synthesis vs DOPAL detoxification) has not been cleanly separated in vivo. #gap/no-mechanism
- **Druggability tier not Open Targets-confirmed.** Tier-2 is based on probe literature; verify via Open Targets ENSG00000165092 on verification pass. #gap/no-opentargets-entry
- **`retinoid-signaling` pathway page is a stub.** The canonical pathway for this protein's downstream biology has not been seeded. #stub

## Footnotes

[^chute2006]: doi:10.1073/pnas.0603806103 · Chute JP, Muramoto GG, Whitesides J, Colvin M, Safi R, Chao NJ, McDonnell DP · *PNAS* 2006;103(31):11707–11712 · ex-vivo (human CB CD34+CD38− HSCs) + in-vivo NOD/SCID · DEAB inhibition of ALDH (specifically ALDH1) → 3.4-fold expansion of SCID-repopulating cells (SRCs) in short-term culture; reversed by exogenous ATRA (1 µM) and by the RAR-specific agonist TTNPB; engraftment potential retained · green OA · **locally available** 

[^petrosino2014]: doi:10.3390/nu6030950 · Petrosino JM, DiSilvestro D, Ziouzenkova O · *Nutrients* 2014;6(3):950–973 · review · ALDH1A1 metabolism, retinoid biosynthesis, sex-specific adipose regulation (female-specific focus); ALDH1A1 expression higher in females in fat depots; proposes estrogen→retinoid "horizontal signal transfer" via ALDH1A1 · gold OA · **locally available** 

[^lovaas2020]: doi:10.1016/j.abb.2020.108256 · Pequerul R, Vera J, Giménez-Dejoz J et al. (Farrés lab) · *Arch Biochem Biophys* 2020;**681**:108256 · structural/kinetic characterization · ALDH1A1/1A2/1A3 side-by-side kinetic comparison with retinoid and non-retinoid substrates; Cys303 active-site nucleophile confirmed; 4-HNE detox: ALDH1A2 is best enzyme for 4-HNE in terms of kcat/Km, not ALDH1A1; isoform substrate-binding pocket volumes differ (534 / 387 / 387 Å³ for 1A1/1A2/1A3) · **Note: NCT-501 selectivity data not in this paper** — NCT-501 requires separate citation · green OA · **locally available** 

[^poulin2014]: doi:10.1016/j.celrep.2014.10.008 · Poulin JF, Zou J, Drouin-Ouellet J, Kim KY, Cicchetti F, Awatramani RB · *Cell Reports* 2014;9:930–943 · single-cell qPCR profiling (mouse midbrain DA neurons, n=159 cells, 96 genes/cell) · ALDH1A1+ (DA1A subtype) SNc neurons defined as molecularly distinct; 66.2% diminution of Aldh1a1+ cells in MPTP-treated vs saline mice (p=0.001); remaining DA neurons (DA1B, less Aldh1a1) only 39.1% loss · gold OA · **locally available** 

[^martirosyan2024]: doi:10.1186/s13024-023-00699-0 · Martirosyan A, Ansari R, Pestana F et al. · *Mol Neurodegeneration* 2024;19(1):7 · snRNA-seq observational (human, 15 sporadic PD / 14 controls; 83,484 high-quality nuclei after QC) · ALDH1A1 is one of 28 cell markers shared across multiple TH-enriched depleted cell types (Neurons0 + Astrocytes2 + Microglia1 + Oligos2) in PD; ALDH1A1 also listed as a Neurons0 (dopaminergic) subpopulation marker · gold OA · **locally available** 

[^choudhary2005]: doi:10.1167/iovs.04-0120 · Choudhary S, Xiao T, Vergara LA, Srivastava S, Nees D, Piatigorsky J, Ansari NH · *Invest Ophthalmol Vis Sci* 2005;46(1):259–267 · in-vitro/ex-vivo (rat lens + human lens epithelial cells) · ALDH isozymes critical for defense against oxidative stress in lens; role in 4-HNE detoxification; inhibition accelerates oxidative damage

[^zhang2010]: doi:10.1002/jnr.22307 · Zhang M et al. · *J Neurosci Res* 2010;88(3):686–694 · in-vitro (SH-SY5Y neuroblastoma) · ALDH1A1 overexpression reduces protein-HNE adducts and caspase-3 activation under oxidative challenge

[^yasmeen2011]: doi:10.1016/j.bbalip.2011.06.004 · Yasmeen R, Ziouzenkova O · *BBA Mol Cell Biol Lipids* 2012;1821(1):190–197 · review · 69 citations · ALDH1A1 synthesis of atRA in adipose tissue opposes PPARγ-driven adipogenesis · pending local download

[^napoli2017]: doi:10.1371/journal.pone.0187669 · Yang D, Napoli JL · *PLoS ONE* 2017;12(11):e0187669 · in-vivo (Raldh1 KO mouse) + LC/MS/MS · 18 citations · Raldh1 promotes adolescent adiposity via retinal-independent mechanism · gold OA · pending local download

[^fujiwara2007]: doi:10.1007/s00441-006-0376-3 · Fujiwara K et al. · *Cell Tissue Res* 2007;328(1):129–135 · developmental expression study (rat) · RALDH2 and RALDH3 but not RALDH1 expressed in embryonic anterior pituitary; supports RALDH1 as postnatal-dominant isoform
