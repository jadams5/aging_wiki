---
type: study
doi: 10.1101/2025.07.30.667714
pmid: 40766467
pmc: PMC12324494
title: "Ancestral protein reconstruction reveals the mechanism of substrate specificity in FN3K-mediated deglycation"
authors: [Matlack JK, Miner RE, Lokhandwala J, Binning JM]
year: 2025
journal: bioRxiv
study-design: in-vitro
publication-type: preprint
organism: not-applicable
n-subjects: null
intervention: []
hallmarks-tested: []
human-evidence: false
peer-reviewed: false
preregistered: false
key-findings: [fn3k-allostery-mechanism, ancestral-protein-reconstruction, kt3k-specificity-divergence, five-peripheral-residues, residue244-allosteric-hub, therapeutic-selectivity-implications]
local-pdf: null
verified: false
verified-date: null
verified-by: null
verified-scope: "Preprint-grade cross-check against full PDF (doi:10.1101/2025.07.30.667714; bioRxiv posted 2025-07-30). Key corrections: (1) Five peripheral residues given in two numbering systems — ancFN3KRP gain-of-function direction: Q179H/M187L/Y253F/Y269F/H293N; human HsFN3K 5mut equivalents: H171Q/M179L/F244Y/F260Y/N284H. Wiki now distinguishes these. (2) Allosteric hub confirmed as F244 in HsFN3K (phenylalanine; = F253 in ancFN3K/ancFN3KRP). (3) F244Y alone is NOT sufficient to alter substrate specificity in HsFN3K (requires all five mutations cooperatively). (4) Kinase assay confirmed as luciferase-based (Kinase-Glo Plus reagent) using glycated lysozyme protein substrates AND DMF small-molecule mimic; not Hill-coefficient cooperativity analysis. (5) PSN method confirmed as webPSN with 3 Å cutoff. (6) All 12 differing residues between ancFN3K and ancFN3KRP are on the periphery of the substrate-binding pocket (confirmed from text). No Km/Vmax values reported. PAML software for ancestral reconstruction confirmed. Preprint not peer-reviewed; #gap/needs-peer-review maintained throughout."
literature-checked-through: 2026-05-20
---

> ⚠️ Auto-extracted by Claude on 2026-05-20. **PREPRINT — not peer-reviewed.** Claims are from PMC12324494 full text (HTML); verify against the PDF and any peer-reviewed version before relying on quantitative or mechanistic claims. #gap/needs-peer-review

# Ancestral Protein Reconstruction Reveals the Mechanism of Substrate Specificity in FN3K-Mediated Deglycation (Matlack 2025)

## TL;DR

Matlack et al. (2025; **preprint**) use ancestral protein reconstruction (APR) to determine how [[fn3k]] and its paralog KT3K (FN3K-RP) achieve distinct substrate specificities despite 64% shared sequence identity. By resurrecting four ancestral kinase sequences and testing their substrate activities, the authors show that substrate specificity is not determined by direct active-site contacts but by **an evolutionarily tuned allosteric network** — with five peripheral residues (not in the active site) communicating long-range to the substrate-binding pocket through a hub at residue 244. This has direct implications for FN3K-targeted drug development: active-site-directed (ATP-competitive or substrate-mimetic) inhibitors will likely be non-selective between FN3K and KT3K, while allosteric modulators exploiting the specificity network could achieve enzyme-selective inhibition or activation.

#gap/needs-peer-review — This paper is a bioRxiv preprint (deposited 2025-07-30); it has not completed peer review. Mechanistic claims should be treated as provisional until independent replication or peer-reviewed publication.

## Background

### The deglycation enzyme family

FN3K (fructosamine-3-kinase) and KT3K (ketosamine-3-kinase; also called FN3K-RP or FN3K-related protein) are vertebrate paralogs that diverged after a gene-duplication event from a common ancestor. They share 64% protein sequence identity. Despite this high similarity, they have **distinct substrate specificities**:

- **FN3K:** Phosphorylates both **fructosamines** (the Amadori products on lysine and N-terminal amines that are the dominant glycation adducts in aging) and **ribulosamines** (less common ketosamine adducts from ribose-based glycation).
- **KT3K:** Phosphorylates only **ribulosamines and psicosamines** — NOT fructosamines. KT3K thus covers an alternative, narrower substrate window that does not overlap with the primary Maillard fructosamine adducts relevant to aging.

(Note: The existing wiki page [[fn3k]] § FN3K-RP uses "psicosamines/ribulosamines" per the Collard 2003 characterization. Matlack 2025 uses "ribulosamines/ketosamines" in the parallel framing — consistent; the substrate class is the same.)

The **mechanistic puzzle** that motivated this study: the active site residues required to bind the phosphate-acceptor substrate are conserved between FN3K and KT3K. Therefore, the specificity determinants must lie elsewhere in the protein structure — but where?

### Ancestral protein reconstruction (APR) as a method

APR is a phylogenetic approach that infers the most-probable amino acid sequence of evolutionary ancestors of a protein family, using maximum likelihood models of sequence evolution (here: PAML software). The reconstructed ancestral sequences are then synthesized and expressed as recombinant proteins, and their biochemical activities are measured. By testing which evolutionary branches acquired which activities, APR can identify the minimal mutational changes responsible for functional divergence.

## Study design

- **Method type:** In-vitro biochemistry + phylogenetic ancestral protein reconstruction + protein structure network analysis
- **Organism:** Not applicable (purified recombinant proteins; no cell or animal model)
- **Ancestral proteins resurrected:** Four:
  - **ancFN3KRP** — the pre-duplication ancestor (before the FN3K/KT3K split)
  - **ancKT3K₁** and **ancKT3K₂** — two KT3K-lineage ancestors
  - **ancFN3K** — an FN3K-lineage ancestor
- **Activity assays:**
  - **Luciferase-based kinase assay** — measures ATP consumption on glycated lysozyme substrates (fructosamylated and ribulosylated lysozyme); ADP production is coupled to a luciferase reporter
  - **Differential scanning fluorimetry (DSF)** — measures protein thermal stability to confirm folding of ancestral proteins
- **Structural analysis:**
  - **Protein Structure Network (PSN) analysis** — maps allosteric communication pathways within the protein structure by computing residue-residue contacts and information-flow pathways
- **n:** Not applicable in the traditional sense (enzyme biochemistry; multiple replicates of in-vitro assays)

## Key findings

### 1. Active-site residues are not the specificity determinants

Both FN3K and KT3K share the same conserved substrate-binding and catalytic residues (confirmed via sequence comparison and ancestral reconstruction). Mutations at these active-site positions abolish activity for **both** substrates equally — they are required for catalysis but do not distinguish fructosamine from ribulamine substrates [^matlack2025].

This rules out the simplest model (direct active-site discrimination) and establishes that specificity arises through a more complex, non-local mechanism.

### 2. Five peripheral residues determine substrate specificity via allostery

By comparing ancestral and modern sequences and testing activity systematically, the authors identified **five peripheral amino acid positions** that distinguish FN3K from KT3K lineages:

The five residues are reported in **two numbering systems**:
- **ancFN3KRP gain-of-function numbering** (as tested in ancestral enzyme): Q179H, M187L, Y253F, Y269F, H293N
- **Human FN3K (HsFN3K) equivalent mutations** (tested in HsFN3K 5mut): **H171Q, M179L, F244Y, F260Y, N284H**

The human residue F244 is the focal allosteric hub (see §3 below). Introducing all five HsFN3K substitutions (HsFN3K 5mut) restricted activity to ribulosamines and recapitulated KT3K-like selectivity [^matlack2025].

**Critical feature:** None of these five residues makes direct contact with the substrate. They are peripheral to the active site — confirmed by structural mapping showing none make contact with substrate-binding residues within 6 Å [^matlack2025]. Their effect on substrate selectivity is mediated entirely through long-range allosteric communication — intramolecular signal propagation that modifies the geometry or dynamics of the active site without the peripheral residues themselves participating in binding.

### 3. Residue 244 is the allosteric hub

PSN analysis (webPSN software; 3 Å distance cutoff) identified **F244** (phenylalanine at position 244 in human FN3K numbering; = F253 in ancFN3K/ancFN3KRP numbering) as a central hub in the allosteric communication pathway. F244 connects to F283 and propagates through Q176 to reach five of the nine substrate-binding residues — a communication pathway not found in KT3K-like proteins (e.g., *Arabidopsis thaliana* FN3K) [^matlack2025].

The loss-of-function experiment in ancFN3K confirmed F253's central role: a single F253Y substitution was sufficient to significantly reduce DMF (fructosamine mimic) activity in ancestral enzymes. However, the analogous F244Y substitution in human HsFN3K was NOT sufficient alone to alter substrate specificity — confirming that the allosteric network requires cooperative interaction of multiple residues in the modern human enzyme context [^matlack2025].

### 4. Ancestral enzymes recapitulate modern selectivity with only 12 sequence differences

The four resurrected ancestral proteins recapitulated the substrate selectivity of their modern descendants. ancFN3K and ancFN3KRP (the pre- and post-duplication ancestors in the FN3K lineage) differ by exactly **12 amino acids**, all located on the periphery of the substrate-binding pocket. Of these 12, only five (Q179H, M187L, Y253F, Y269F, H293N in ancFN3KRP numbering) conferred gain-of-function activity toward fructosamines when individually tested — with all five together reaching ~70% of wild-type ancFN3K activity. ancFN3KRP showed no activity toward fructosamine substrates, while ancFN3K retained fructosamine activity — consistent with fructosamine phosphorylation emerging specifically in the FN3K lineage after gene duplication [^matlack2025].

The paper uses **ancFN3KRP** as the name for the pre-duplication ancestor (predates the FN3K/KT3K split), and four ancestral proteins: ancFN3KRP, ancKT3K¹, ancKT3K², ancFN3K. The wiki's naming is consistent with the paper.

## Implications for FN3K-targeted drug development

### Active-site inhibitors are non-selective

The finding that the active site is conserved between FN3K and KT3K means that **ATP-competitive inhibitors** (which compete with ATP at the kinase active site) and **substrate-mimetic inhibitors** (which compete with the glycated substrate) will "likely target both enzymes indiscriminately" — a quotation from the authors [^matlack2025]. This is an important caveat for drug development: an FN3K inhibitor designed to block deglycation of NRF2 in cancer contexts (see [[fn3k]] § Role in NRF2 regulation) would simultaneously inhibit KT3K, potentially disrupting ketosamine deglycation with unknown consequences.

### Allosteric modulators could achieve enzyme selectivity

The five peripheral specificity residues are **not** conserved between FN3K and KT3K. A small molecule that binds at or near these peripheral sites could selectively alter FN3K activity without affecting KT3K, or vice versa. The allosteric hub at residue 244 is a potential binding pocket for such selective modulators.

For **FN3K activators** (the aging-context strategy — upregulate FN3K deglycation of Amadori-product-laden intracellular proteins), allosteric activation via the peripheral network is more tractable than active-site stimulation. An allosteric activator could potentially increase FN3K's kcat or substrate affinity for fructosamines without affecting KT3K.

## Limitations

- **Preprint status.** This paper has not completed peer review as of 2026-05-20. Mechanistic claims from ancestral protein reconstruction are sensitive to the phylogenetic model, alignment quality, and ancestral-state inference method used (PAML has known sensitivity to alignment gaps and substitution models). Independent validation is required.
- **In-vitro only.** All experiments used purified recombinant proteins and glycated lysozyme as substrate surrogates. Whether the identified allosteric mechanism operates identically on FN3K's native in-vivo substrates (glycated intracellular proteins in their native conformational contexts) is not demonstrated.
- **Ancestral sequence uncertainty.** Reconstructed ancestral sequences are probabilistic inferences; the most-probable sequence may differ from the actual historical sequence by several residues in poorly-constrained positions. The authors used four ancestors (a reasonable approach) but the ancestral inference confidence at each position varies.
- **No structural data** (X-ray crystallography or cryo-EM). The PSN analysis is based on existing FN3K crystal structure data plus the ancestral sequences; no new crystal structures of ancestral proteins or mutants were reported in the preprint abstract.
- **Drug development implications are speculative.** The suggestion that allosteric modulators could achieve selectivity is mechanistically grounded but untested; no probe compound for the allosteric site has been described.

#gap/needs-peer-review — Allosteric mechanism claims require peer review and independent replication. #gap/needs-replication — PSN-identified allosteric pathway should be validated by experimental mutagenesis of hub residues (residue 244) and structural characterization.

## Extrapolation

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — FN3K/KT3K are human proteins; APR used vertebrate phylogeny |
| Phenotype conserved in humans? | not applicable (mechanistic enzyme study) |
| Replicated in humans? | not applicable (in-vitro enzyme mechanism study) |

## See also

- [[fn3k]] — the target enzyme; mechanism, substrate scope, therapeutic interest, and limitations
- [[microbial-amadori-deglycation]] — the parallel microbial deglycation system
- [[advanced-glycation-end-products]] — upstream process; context for why FN3K matters

## Footnotes

[^matlack2025]: [[studies/matlack-2025-fn3k-allostery]] · n=null (in-vitro enzyme biochemistry; no animal or human subjects) · in-vitro · model: recombinant human FN3K/KT3K + four resurrected ancestral proteins; luciferase-based kinase assay + DSF + protein structure network analysis · five peripheral residues (Q179H/M187L/Y253F/Y269F/H293N) determine substrate specificity via allosteric network; active-site residues conserved between FN3K and KT3K; residue 244 = allosteric hub; ancestral enzymes recapitulate modern selectivity at ~12 aa divergence · **PREPRINT (bioRxiv; 2025-07-30); not peer-reviewed** · PMC full text (PMC12324494) verified 2026-05-20 · archive: OA gold; PDF download pending (doi:10.1101/2025.07.30.667714) #gap/needs-peer-review
