---
type: protein
aliases: [p97, p97-vcpase, Cdc48, TER94, IBMPFD, valosin-containing protein, transitional endoplasmic reticulum ATPase]
uniprot: P55072
ncbi-gene: 7415
hgnc: 12666
ensembl: null   # not pulled; #gap/needs-canonical-id (Ensembl ID not retrieved; populate via sops/finding-protein-data.md)
genage-id: null   # VCP not found in GenAge human aging genes as of 2026-05-12; #gap/needs-canonical-id
mouse-ortholog: Vcp
key-domains: [N-domain, D1-ATPase, D2-ATPase, C-terminal-HbYX]
key-ptms:
  - N-terminal Ala-2 acetylation
  - Lys-315 trimethylation (VCPKMT)
  - Lys-109 UFMylation
  - Lys-8/18 SUMO2-conjugation
  - Multiple Ser/Thr phosphorylation sites
pathways: ["[[dna-damage-response]]", "[[autophagy]]", "[[mitophagy]]", "[[erad-pathway]]", "[[ubiquitin-proteasome-system]]"]
hallmarks: ["[[loss-of-proteostasis]]", "[[mitochondrial-dysfunction]]", "[[genomic-instability]]"]
sens-categories: []
known-interactors: ["[[npl4]]", "[[ufd1]]", "[[nsfl1c]]", "[[atxn3]]", "[[parkin]]", "[[pink1]]", "[[trim41]]", "[[cgas]]"]
druggability-tier: 2   # aging-context: CB-5083 is a first-in-class orally bioavailable p97 ATPase inhibitor that reached Phase 1 oncology trials; NMS-873 is an allosteric probe; no FDA approval and no aging-validated indication. Tier 2 = high-quality clinical probe exists.
gtex-aging-correlation: "#gap/unsourced — GTEx VCP expression-vs-age query not completed; populate per sops/finding-tissue-expression.md"
mr-causal-evidence: not-tested   # no MR instruments for VCP aging outcomes identified; VCP variants causing MSP are rare disease mutations, not common GWAS hits
caused-by:
  - polyubiquitin-chain-formation-on-substrates
  - cofactor-adaptor-complex-assembly
  - ATP-availability
causes:
  - substrate-extraction-and-unfolding
  - ERAD-retrotranslocation
  - mitochondrial-OMM-protein-clearance
  - chromatin-protein-eviction
  - proteasome-targeted-delivery
verified: false
verified-date: null
verified-by: null
verified-scope: null
literature-checked-through: 2026-05-12
---

> ⚠️ Auto-extracted by Claude on 2026-05-12 — synthesized from canonical UniProt/NCBI metadata and widely-cited primary literature summaries; cGAS-eviction mechanism (Chen 2025) cited from abstract only due to closed-access PDF (#gap/no-fulltext-access). Quantitative claims (CB-5083 IC50s, MSP variant frequencies, structural dimensions) may be approximate; verify before relying.

# VCP (p97 / Valosin-Containing Protein)

VCP, also known as p97 (mammals) or Cdc48 (yeast) or TER94 (fly), is a highly abundant hexameric AAA+ ATPase that functions as the cell's universal protein-extraction and -unfolding machine. It uses ATP hydrolysis to segregate polyubiquitinated proteins from membranes, chromatin, ribosomes, and multi-protein complexes for downstream proteasomal or autophagic processing. VCP sits at the convergence of [[loss-of-proteostasis]], [[mitochondrial-dysfunction]], and [[genomic-instability]] — three of the twelve hallmarks of aging — and its loss-of-function variants cause multisystem proteinopathy (MSP/IBMPFD), a human disease that phenocopies segmental accelerated aging across muscle, bone, and CNS.

## Identity

- **UniProt:** P55072 (TERA_HUMAN)
- **Recommended protein name:** Transitional endoplasmic reticulum ATPase (TER ATPase)
- **Common names:** p97, valosin-containing protein (VCP)
- **Yeast ortholog:** Cdc48 (CDC48 in *S. cerevisiae*)
- **Fly ortholog:** TER94 (*D. melanogaster*)
- **NCBI Gene:** 7415
- **HGNC:** 12666
- **Chromosomal locus:** 9p13.3
- **Length:** 806 amino acids (canonical isoform)
- **Molecular weight:** ~97 kDa per monomer → hexamer is ~580 kDa

## Architecture

VCP/p97 is organized into four structural modules per monomer [^uniprot2026]:

| Domain | Residues (approx.) | Function |
|---|---|---|
| **N-domain** | 1–187 | Cofactor binding; substrate recruitment; adaptor docking via CDC48-like motifs |
| **D1 ATPase** | 208–460 | Primarily structural; mediates stable hexameric ring formation; weak ATPase activity |
| **D2 ATPase** | 481–763 | Predominant ATP hydrolysis engine; pore-loop residues thread substrate polypeptide |
| **C-terminal tail / HbYX motif** | 764–806 | Docks VCP hexamer to 20S proteasome; mediates RNF31 interactions |

Six VCP monomers assemble into a **barrel-shaped homohexameric ring** approximately 12.5 nm in diameter. In the ring, stacked D1 and D2 rings form a ~3 nm central pore through which substrate polypeptides are extracted. ATP binding and hydrolysis in D2 drives conformational changes that thread and unfold substrates.

**Key post-translational modifications** [^uniprot2026]:
- Ala-2 N-terminal acetylation
- Lys-315 trimethylation by VCPKMT — modulates substrate processing rate
- Lys-109 UFMylation (modification by Ubiquitin-fold modifier 1) — implicated in ribosome-associated quality control at the ER
- Lys-8 and Lys-18 SUMO2 conjugation — stress-responsive modification
- Multiple Ser/Thr phosphorylation sites (constitutive and inducible)

## Cofactor system and substrate specificity

VCP's substrate range is not determined by VCP itself but by a large family of adaptor and cofactor proteins that dock to the N-domain and route VCP activity to specific cellular contexts [^bruderer2004]:

| Cofactor complex | Key subunits | Cellular role |
|---|---|---|
| **UFD1–NPL4 (UN complex)** | UFD1L + NPLOC4 | ERAD retrotranslocation; DDR chromatin extraction; ribosomal QC |
| **p47 / NSFL1C** | NSFL1C | Golgi membrane fusion; post-mitotic Golgi reassembly |
| **FAF1** | FAF1 | ER-stress-linked ERAD; apoptosis regulation |
| **Ataxin-3 (ATXN3)** | ATXN3 | Deubiquitylase; trims polyUb chains after VCP extraction; links to spinocerebellar ataxia |
| **UBXN proteins (1–11)** | Multiple | Substrate adaptors diversifying VCP's cellular reach; UBXD7 links HIF-1α to VCP |
| **DVC1 / C1orf124** | C1orf124 | Routes VCP to stalled replication forks for TLS polymerase extraction |
| **SPRTN / DVC1** | SPRTN protease | DNA-protein crosslink repair (coordinated with VCP) |

Cofactor competition is a regulatory mechanism: p47 (Golgi fusion) and UFD1–NPL4 (degradation) use overlapping N-domain binding surfaces, so their relative concentrations influence which function predominates [^bruderer2004].

## Functions — multi-substrate overview

### ERAD (ER-associated degradation)

VCP with UFD1–NPL4 is the principal retrotranslocation engine for misfolded proteins in the ER lumen and membrane [^wojcik2004]. Ubiquitinated ER substrates cannot thread through the translocon in the retrotranslocation direction under their own energy; VCP provides the mechanical force. After extraction, substrates are delivered to the 26S proteasome. This is the cell's primary mechanism for handling misfolded secretory and membrane proteins — a major proteostasis safeguard. #gap/needs-human-replication (most ERAD flux data are from yeast Cdc48 or mammalian cell lines; tissue-specific ERAD capacity in aged humans is poorly characterized)

### Ribosome-associated quality control (RQC)

UFMylation of VCP at Lys-109 is specifically required for ribosome-associated quality control at the ER membrane. When ribosomes stall during co-translational translocation, the UFD1–NPL4 complex with UFMylated VCP extracts the stalled nascent chain for degradation. This function is distinct from bulk ERAD and is thought to be particularly important in secretory cells with high translational load (e.g., plasma cells, acinar cells).

### Mitophagy — OMM protein clearance

In the [[mitophagy|PINK1/Parkin mitophagy pathway]], damaged mitochondria are tagged with polyubiquitin on outer mitochondrial membrane (OMM) proteins, most prominently the mitofusins MFN1 and MFN2. Because transmembrane proteins cannot thread directly into the 26S proteasome barrel without prior extraction, VCP is required to pull ubiquitinated MFN1/MFN2 off the OMM before proteasomal delivery [^tanaka2010].

Tanaka et al. 2010 demonstrated this mechanistically: expression of dominant-negative VCP^QQ (Walker-B ATPase-dead mutant) blocked MFN extraction from the OMM and strongly inhibited Parkin-induced mitochondrial elimination in HeLa cells expressing YFP-Parkin (~80% of cells lost all mitochondria in controls vs <10% with VCP^QQ, n≥50) [^tanaka2010]. This places VCP as a required checkpoint in mitophagy flux, not merely a correlate. Recent work identifies the **STUB1–VCP complex** as a regulator that fine-tunes PINK1 levels to prevent PINK1 overaccumulation and dysregulated mitophagy — thus VCP plays a bidirectional role in mitophagy control [^lin2026].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | PINK1/Parkin/VCP axis is present in human cells |
| Phenotype conserved in humans? | partial | Parkin/PINK1 mutations cause Parkinson's disease in humans; VCP MSP mutations impair autophagy; direct VCP mitophagy flux data in aged human tissue limited |
| Replicated in humans? | no | Dominant-negative rescue experiments have not been performed in human in-vivo models |

#gap/needs-human-replication

### DDR and chromatin extraction

VCP with UFD1–NPL4 is recruited to DNA double-strand break (DSB) sites via multiple damage-specific adaptors, where it extracts ubiquitinated chromatin-bound proteins to enable DNA repair complex assembly. Documented substrates include:

- **L3MBTL1** — evicted from DSB chromatin by RNF8-ubiquitination + VCP to expose H4K20me2 and enable 53BP1 recruitment
- **KU70/KU80** — the NHEJ end-binding complex; VCP-mediated extraction post-repair completes the NHEJ cycle and restores chromatin
- **Y-family TLS polymerases** — VCP/DVC1/SPRTN extracts stalled TLS polymerases (Pol η, Rev1) from stalled replication forks via polyubiquitin signals [^kroning2022]
- **cGAS** — see dedicated section below

The common theme is that VCP acts as a "clean-up crew": after ubiquitin-marking of chromatin-tethered proteins (by damage-responsive E3 ligases such as RNF8, TRIM41, others), VCP provides the mechanical extraction force to clear repair obstructions and restore chromatin to a post-repair state [^kroning2022].

### Autophagy — autophagosome and lysosome maturation

Beyond specific substrate extraction, VCP plays a broader role in autophagy pathway progression. VCP with p47 mediates fusion of vesicle membranes (a function first described for Golgi reassembly), and a similar fusogenic activity is required for autophagosome–lysosome fusion. RNAi depletion of VCP in mammalian cells accumulates LC3-II-positive autophagosomes that fail to fuse with lysosomes — an autophagy blockade phenotype [^ju2010].

## In the cGAS chromatin eviction cycle

Chen et al. 2025 identified VCP/p97 as the segregase responsible for extracting **cGAS** from chromatin after DNA damage in human and mouse cells [^chen2025]. The mechanism:

1. DNA damage triggers cGAS recruitment to chromatin-proximal DSB sites (nuclear cGAS pool).
2. The E3 ubiquitin ligase **TRIM41** ubiquitinates chromatin-bound cGAS, creating a polyUb signal.
3. VCP/p97 (via UFD1–NPL4) recognizes the ubiquitinated cGAS and extracts it from chromatin.
4. Rapid eviction of cGAS clears it from DSB foci, allowing standard HR factor assembly but suppressing HR (because nuclear cGAS, when present at DSBs, normally obstructs RAD51/FANCI-RAD50 interaction, as established by Liu et al. 2018 [^liu2018]).

The aging-biology significance of this mechanism comes from the naked mole-rat (NMR) comparison. NMR cGAS carries four amino-acid substitutions that **weaken both TRIM41-mediated ubiquitination and VCP interaction**. Consequently, NMR cGAS undergoes prolonged chromatin retention after DNA damage — and rather than suppressing HR, this prolonged retention facilitates enhanced FANCI–RAD50 interaction and drives superior MRN complex recruitment to DSBs, potentiating HR repair [^chen2025].

**Implications for VCP as an aging target:**
- In the NMR model, *reduced* P97-cGAS interaction is beneficial (improved HR via prolonged cGAS chromatin retention).
- In human cells, *excessive* P97-mediated cGAS eviction may be one mechanism contributing to less-efficient HR relative to the NMR baseline.
- Whether partial, allosteric inhibition of VCP specifically at the chromatin-cGAS interface (as opposed to global VCP inhibition, which is cytotoxic) could enhance HR in human cells is a therapeutic hypothesis — currently untested. #gap/no-mechanism
- This is mechanistically distinct from the established role of VCP inhibition in cancer (where blocking ERAD proteostasis drives proteotoxic stress in cancer cells).

> Note: the canonical wikilink for this page is `[[vcp]]`; common aliases are listed in frontmatter (p97, Cdc48, TER94).

## In aging

### Proteostasis collapse

VCP is critical for every major protein quality-control arm — ERAD, RQC, autophagy, and proteasome substrate delivery. Studies in multiple model systems show that **VCP activity declines with age** in a manner that correlates with proteasome insufficiency and aggregate accumulation [^ju2010]. However, quantitative data on age-associated VCP activity changes in human tissues is sparse. #gap/needs-human-replication

Because VCP is simultaneously required for:
- Clearing misfolded ER proteins (ERAD)
- Clearing stalled ribosome products (RQC)
- Enabling mitophagy flux (OMM extraction)
- Enabling autophagosome-lysosome fusion

...its functional decline creates a multi-front proteostasis failure that amplifies the [[loss-of-proteostasis]] hallmark at a systems level. This places VCP in a distinct "network hub" position relative to more pathway-specific proteostasis factors.

### PINK1/Parkin mitophagy decline

Age-associated decline in mitophagy is an established contributor to the [[mitochondrial-dysfunction]] hallmark. Given VCP's required role in OMM protein clearance during mitophagy, any age-associated reduction in VCP activity or availability would compound PINK1/Parkin pathway insufficiency. The STUB1–VCP–PINK1 regulatory axis discovered in 2026 suggests VCP's mitophagy role is more nuanced than simple substrate extraction: it actively tunes PINK1 protein levels to calibrate mitophagy sensitivity [^lin2026]. Whether this calibration becomes dysregulated in aging — either over- or under-active — is an open question. #gap/needs-replication

### Multisystem proteinopathy (MSP / IBMPFD) — VCP loss-of-function as a segmental aging syndrome

Dominant missense mutations in VCP (most commonly R155H, A232E, R191Q) cause **multisystem proteinopathy type 1 (MSP-1)**, also known historically as IBMPFD [^kimonis2008]:

- **Inclusion body myopathy (IBM)** — vacuolar myopathy with TDP-43-positive rimmed vacuoles; progressive weakness, onset typically 40s–50s
- **Paget's disease of bone** — osteoclast hyperactivation leading to disorganized bone remodeling
- **Frontotemporal dementia (FTD)** — TDP-43 proteinopathy in frontal/temporal cortex
- **ALS** — a subset of VCP mutation carriers develop motor neuron disease

The co-occurrence of myopathy, bone disease, neurodegeneration, and cardiac disease in middle-aged adults with VCP mutations is a **segmental-aging-overlap syndrome**: it recapitulates key aspects of organ aging that emerge decades later in the general population. This pattern parallels the accelerated-aging syndromes of Werner (WRN), Cockayne (CSB), and Hutchinson-Gilford syndromes, and supports the model that proteostasis capacity is a major determinant of organismal aging rate.

Antisense oligonucleotide (ASO) knockdown of VCP in mouse models of MSP ameliorates muscle pathology and molecular defects, suggesting that therapeutic reduction of mutant VCP (rather than augmentation of WT VCP) is a viable therapeutic concept for MSP [^pal2025]. This is a gain-of-toxic-function scenario distinct from age-associated loss-of-function.

### Drug-target landscape

| Agent | Class | Mechanism | Status | Aging context |
|---|---|---|---|---|
| **CB-5083** | ATPase inhibitor (D2-selective) | ATP-competitive; blocks D2 ring hydrolysis | Phase 1 oncology (terminated; GI toxicity) | Proof-of-concept; not aging-validated |
| **NMS-873** | Allosteric inhibitor | Binds D2/inter-domain interface; non-ATP-competitive | Preclinical probe | Research tool |
| **UPCDC30245** | Allosteric inhibitor | Distinct from NMS-873 binding site | Preclinical probe | Research tool |
| **CB-5083 (repurposed)** | ATPase inhibitor | Same mechanism | Preclinical MSP model | Cheng/Kimonis 2021 — potential MSP application |

CB-5083 was discovered and characterized by Zhou et al. 2015 as the first orally bioavailable p97 ATPase inhibitor with high selectivity (IC50 ~11 nM against p97 ATPase; >100-fold selectivity over related AAA ATPases) [^zhou2015]. Phase 1 dose-escalation in refractory myeloma/solid tumors demonstrated target engagement and anti-tumor activity but was terminated at the recommended phase 2 dose due to dose-limiting GI toxicity and ocular toxicity.

**Aging-context tier-2 rationale.** CB-5083 is the most advanced clinical probe for p97 ATPase inhibition and provides high-quality target engagement validation. No FDA-approved VCP-targeting drug exists. The aging-relevant question — whether *partial* VCP modulation (allosteric, tissue-targeted, or isoform-selective) could enhance proteostasis or HR repair capacity without on-target toxicity — has not been addressed clinically. Tier 2 reflects strong clinical-probe evidence without an aging-validated drug.

## Pathway membership

- [[dna-damage-response]] — chromatin protein extraction; TLS polymerase eviction; cGAS-TRIM41-VCP axis
- [[autophagy]] — autophagosome–lysosome fusion; LC3-flux
- [[mitophagy]] — OMM protein (MFN1/2) extraction during PINK1/Parkin pathway; STUB1–VCP–PINK1 axis
- [[erad-pathway]] — primary retrotranslocation engine with UFD1–NPL4
- [[ubiquitin-proteasome-system]] — final substrate delivery to 26S; chromatin Ub-chain reader

## Key interactors

- [[npl4]] — UFD1–NPL4 heterodimer; primary substrate-recognizing cofactor (polyUb reader)
- [[ufd1]] — UFD1–NPL4 heterodimer partner
- [[nsfl1c]] — p47; membrane-fusion-specialized cofactor (Golgi, autophagosome)
- [[atxn3]] — deubiquitylase; trims polyUb chains after VCP extraction; implicated in spinocerebellar ataxia
- [[parkin]] — E3 ligase responsible for MFN1/2 ubiquitination upstream of VCP in mitophagy
- [[pink1]] — kinase that recruits/activates Parkin; indirect VCP upstream
- [[trim41]] — E3 ubiquitin ligase; ubiquitinates cGAS at chromatin damage sites, creating the VCP extraction signal
- [[cgas]] — substrate at chromatin; evicted by VCP after TRIM41-mediated ubiquitination; NMR four-AA variant weakens this interaction

## Recency literature summary (R25 — 2026-05-12)

Searches: "VCP p97 aging", "VCP p97 proteostasis aging", "VCP p97 mitophagy", "multisystem proteinopathy VCP", date window 2022–2026 (PubMed eutils). Key recent findings integrated:

- **Lin et al. 2026 (Cell Reports, doi:10.1016/j.celrep.2026.117183)** and companion short-form (Autophagy, doi:10.1080/15548627.2026.2658848): STUB1–VCP/p97 complex regulates PINK1 levels to safeguard mitophagy and memory. This is a novel regulatory layer — VCP is not merely an effector of mitophagy but actively tunes its upstream kinase signal. Integrated into mitophagy section.
- **Pal et al. 2025 (Clin Transl Med, doi:10.1002/ctm2.70530)**: ASO knockdown of VCP ameliorates MSP muscle pathology — potential gain-of-toxic-function therapeutic concept for dominant VCP mutations. Integrated into aging/MSP section.
- **Chan et al. 2025 (Am Heart J Plus, doi:10.1016/j.ahjo.2025.100644)**: cardiomyopathy as underappreciated MSP manifestation. Noted in MSP section.
- No recent meta-analyses or RCTs for VCP in aging per se — thin human trial literature as expected for a basic-science proteostasis target. Training-era citations not contradicted by any 2022–2026 findings.

## Knowledge gaps

1. **Age-associated VCP activity changes in human tissues**: VCP enzyme activity has not been quantitatively measured across the adult human lifespan in relevant tissues (muscle, brain, liver). Declines postulated based on aggregate accumulation data but not directly measured. #gap/needs-human-replication

2. **Is partial VCP inhibition pro-longevity or anti-longevity?**: In cancer, VCP inhibition is cytotoxic (desired). In aging biology, partial inhibition could be either harmful (worsening proteostasis) or beneficial (if the cGAS chromatin-retention model generalizes — prolonging chromatin-bound repair scaffolds). These effects may be dose-, tissue-, and substrate-specific. No aging mouse study with VCP inhibitors has been published. #gap/needs-replication

3. **CB-5083 in aging mouse models**: Whether sub-toxic doses of CB-5083 extend healthspan or lifespan in aged mice has not been tested. This is the most tractable near-term experiment. #gap/needs-replication

4. **VCP–cGAS chromatin eviction in human cells vs NMR**: Chen 2025 establishes the NMR four-AA divergence but the paper is closed-access; quantitative comparison of VCP–cGAS extraction kinetics between human and NMR cells has not been publicly confirmed. Whether allosteric VCP inhibition can phenocopy the NMR four-AA benefit (enhanced HR via prolonged cGAS chromatin retention) without disrupting ERAD/mitophagy is untested. #gap/no-mechanism

5. **Interaction between VCP and other quality-control ATPases**: VCP operates alongside [[hsp70]], [[hsp90]], the proteasome, and [[valosin-containing-protein-interacting-protein-1|VCIP135]] in a network. How age-related changes in these other nodes affect VCP substrate load — and whether VCP becomes rate-limiting in the aged proteostasis network — is unknown. #gap/no-mechanism

6. **Tissue-specific VCP cofactor stoichiometry with age**: the ratio of competing cofactors (UFD1–NPL4 vs p47 vs UBXN proteins) determines which VCP functions predominate. Whether this stoichiometry shifts with age in post-mitotic tissues (neurons, cardiomyocytes, myofibers) has not been characterized at the systems level. #gap/unsourced

## Footnotes

[^uniprot2026]: UniProt P55072 (TERA_HUMAN), accessed 2026-05-12 · Swiss-Prot curated entry · function, domain, and PTM data; confirmed HGNC:12666 / NCBI GeneID:7415

[^bruderer2004]: doi:10.1074/jbc.m408695200 · Bruderer RM et al. · *J Biol Chem* 2004 · in-vitro · n=N/A (biochemical binding assays) · model: purified p97/VCP and cofactor proteins · ~150 citations · establishes shared bipartite binding mechanism for alternative cofactors (UFD1-NPL4 vs p47) at the VCP N-domain; download status: pending local PDF

[^wojcik2004]: doi:10.1242/jcs.00841 · Wójcik C et al. · *J Cell Sci* 2004 · in-vitro · RNAi knockdown in mammalian cells · model: HeLa + 293T cells · ~212 citations · demonstrates multiple cellular roles of VCP linked to ubiquitin/proteasome degradation including ERAD; download status: pending local PDF

[^tanaka2010]: doi:10.1083/jcb.201007013 · Tanaka A et al. · *J Cell Biol* 2010 · in-vitro · model: SH-SY5Y + HeLa + MEF cells (endogenous + overexpressed YFP-Parkin) · ~1323 citations · dominant-negative VCP^QQ blocks MFN extraction and Parkin-induced mitochondrial elimination; p97 + proteasome both required; local PDF available in a local paper archive

[^lin2026]: doi:10.1016/j.celrep.2026.117183 · Lin JY, Huang ZB et al. · *Cell Reports* 2026 · in-vitro + in-vivo · model: cell lines + mouse · PMID:41903135 · STUB1-VCP/p97 complex regulates mitophagy via fine-tuning of PINK1 levels; not yet in local archive

[^ju2010]: doi:10.4161/auto.6.2.11063 · Ju JS et al. · *Autophagy* 2010 · review + in-vitro · model: mammalian cells · ~75 citations · p97/VCP at the intersection of autophagy and ubiquitin-proteasome system; download status: pending local PDF

[^kroning2022]: doi:10.1016/j.jbc.2022.101976 · Kröning A et al. · *J Biol Chem* 2022 · in-vitro + in-vivo (biochemical + cell) · model: biochemical assays + mammalian cells · ~23 citations · ubiquitin-directed p97/VCP unfolds stable proteins crosslinked to DNA for proteolysis by SPRTN; establishes the VCP–SPRTN DNA-protein-crosslink repair axis; download status: pending local PDF

[^kimonis2008]: doi:10.1016/j.neurol.2008.06.033 · Kimonis VE et al. · *Revue Neurologique* 2008 · review · n=N/A · model: human case series + literature review · clinical characterization of IBMPFD; not confirmed in archive — DOI pulled from training knowledge; verify before citing quantitative claims #gap/needs-replication

[^pal2025]: doi:10.1002/ctm2.70530 · Pal P, Carrer M et al. · *Clin Transl Med* 2025 · in-vitro + in-vivo · model: MSP patient-derived cells + mouse model · PMID:41355735 · ASO knockdown of VCP ameliorates muscle pathology and molecular defects in MSP; download status: pending local PDF

[^zhou2015]: doi:10.1021/acs.jmedchem.5b01346 · Zhou HJ et al. · *J Med Chem* 2015 · in-vitro · model: biochemical (purified p97 ATPase) + cell viability · first-in-class potent selective orally bioavailable CB-5083 p97 inhibitor; IC50 ~11 nM; download status: pending local PDF

[^chen2025]: [[studies/chen-2025-nmr-cgas-hr-repair]] · n=NR · in-vitro+in-vivo · model: multiple (NMR cells + mouse + cell lines) · Chen Y et al. · *Science* 2025 · doi:10.1126/science.adp5056 · PMID:41066557 · **#gap/no-fulltext-access** — closed-access; all claims sourced from abstract only

[^liu2018]: [[studies/liu-2018-nuclear-cgas-hr-suppression]] · n=NR · in-vitro+in-vivo · doi:10.1038/s41586-018-0629-6 · PMID:30356214 · Liu H et al. · *Nature* 2018 · model: human cell lines + mouse xenograft · ~611 citations · nuclear cGAS suppresses DNA repair and promotes tumorigenesis; establishes that VCP-mediated cGAS eviction clears the way for HR (prior art for Chen 2025 mechanism); closed-access; not in local archive · **#gap/no-fulltext-access**
