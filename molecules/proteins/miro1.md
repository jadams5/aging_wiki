---
type: protein
aliases: [RHOT1, mitochondrial Rho GTPase 1, MIRO-1, hMiro-1, ARHT1, Ras homolog gene family member T1]
uniprot: Q8IXI2
ncbi-gene: 55288
hgnc: 21168
ensembl: ENSG00000126858
mouse-ortholog: Rhot1
druggability-tier: 3
caused-by: []
causes: []
key-domains: [Miro1-GTPase-1, EF-hand-1, EF-hand-2, Miro2-GTPase-2, transmembrane]
key-ptms: [PINK1-phosphorylation, Parkin-ubiquitination, USP30-deubiquitination, Lys92-acetylation]
pathways: ["[[mitophagy]]", "[[pink1-parkin-pathway]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[disabled-macroautophagy]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Primary-source PDFs verified for all six cited studies (Wang 2011, Macaskill 2009, Saotome 2008, Fransson 2003, López-Doménech 2021, Grossmann 2020). Canonical-DB identity fields (UniProt Q8IXI2, NCBI Gene 55288, HGNC 21168) confirmed via banner note; not independently re-queried against live databases on this pass."
---


# MIRO1 (RHOT1)

Mitochondrial Rho GTPase 1 — an atypical GTPase anchored to the mitochondrial outer membrane (OMM) that physically couples mitochondria to microtubule-based motors ([[kinesin-1]], [[dynein]]) for anterograde and retrograde trafficking. MIRO1's two EF-hand calcium-sensing domains provide a direct link between local [Ca²⁺] and the arrest of mitochondrial movement. In the [[pink1-parkin-pathway]], MIRO1 is among the first OMM substrates phosphorylated by PINK1 and subsequently ubiquitinated by [[parkin]] following mitochondrial depolarization, committing the organelle to immobility and packaging for [[mitophagy]]. Loss-of-function or impaired MIRO1 regulation is a convergence point for neurodegeneration and age-associated mitochondrial trafficking defects.

## Identity

- **UniProt:** Q8IXI2 (MIRO1_HUMAN)
- **NCBI Gene:** 55288
- **HGNC:** 21168 (symbol: RHOT1)
- **Mouse ortholog:** Rhot1 (Miro1)
- **Length:** 618 amino acids (canonical isoform; single annotated isoform in Swiss-Prot)
- **Topology:** single-pass type IV transmembrane protein (C-terminal anchor in OMM, cytoplasmic N-terminus); all functional domains face the cytoplasm

## Domain architecture

| Domain | Residues (approx.) | Function |
|---|---|---|
| Miro1 GTPase domain (GTPase 1) | 2–168 | Atypical Rho-family GTPase; nucleotide binding and hydrolysis |
| EF-hand 1 | 184–219 | Ca²⁺ sensor; binds Ca²⁺ at micromolar concentrations |
| EF-hand 2 | 304–339 | Ca²⁺ sensor; cooperative with EF-hand 1 |
| Miro2 GTPase domain (GTPase 2) | 416–579 | Second atypical GTPase domain; proposed structural/scaffolding role |
| Transmembrane helix | 593–615 | C-terminal OMM anchor |

MIRO1 is classified as an "atypical" Rho GTPase because its GTPase domains diverge substantially from canonical Rho family members [^fransson2003]. The N-terminal GTPase domain has been reported to have GTPase activity; the C-terminal GTPase domain additionally displays NTPase activity (hydrolyzing ATP and UTP) — but this biochemical characterization derives from later structural studies, not Fransson 2003 #gap/unsourced — primary citation for NTPase activity of the C-terminal GTPase domain needed. The two central EF-hands are the key regulatory feature distinguishing MIRO proteins from all other GTPases.

## Function

### Mitochondrial trafficking

MIRO1 (and its paralog [[miro2]]/RHOT2) serves as the OMM receptor that links mitochondria to the microtubule motor machinery. MIRO1 interacts with the adaptor protein complex TRAK1/TRAK2 (also called Milton/OIP106), which in turn binds kinesin-1 (KIF5B) for anterograde (plus-end) transport and dynein–dynactin for retrograde (minus-end) transport [^fransson2006]. This three-part MIRO–TRAK–motor assembly is essential for the directional distribution of mitochondria throughout neurons and other polarized cells.

Germline-null *Miro1* mice die perinatally, indicating that MIRO1-dependent mitochondrial trafficking is essential for postnatal survival [^fransson2006]. #gap/needs-human-replication — the cellular lethality mechanism in *Miro1*-null mice has not been confirmed in human tissues; tissue-specific conditional knockouts (cardiac, neuronal) are the tractable model system for adult-tissue phenotypes.

### Calcium-dependent arrest of movement

The two EF-hand domains confer Ca²⁺ sensitivity [^macaskill2009]. At resting cytoplasmic Ca²⁺ (~100 nM), mitochondria are motile. At elevated local [Ca²⁺] (~1–5 μM, as occurs near active synapses or following plasma-membrane Ca²⁺ influx), Ca²⁺ occupancy of the EF-hands triggers dissociation of the MIRO–TRAK–kinesin complex from the motor, arresting mitochondrial movement in place [^saotome2008]. This mechanism is proposed to retain mitochondria at high-energy demand sites (active synaptic boutons, growth cones) and to redirect them away from Ca²⁺-loaded regions facing excitotoxic risk.

EF-hand mutants (e.g., Miro1-EF1/2 double mutant) that cannot bind Ca²⁺ abolish this arrest response, resulting in constitutively motile mitochondria that fail to accumulate at active synapses [^macaskill2009]. Conversely, supraphysiological Ca²⁺ promotes mitochondrial fragmentation and immobility [^saotome2008].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — MIRO1 EF-hand Ca²⁺ arrest mechanism demonstrated in rat hippocampal neurons and H9c2 cells; human MIRO1 protein is highly conserved but direct human neuronal demonstration lacking |
| Phenotype conserved in humans? | partial — synaptic mitochondrial localization studied in rodent neurons; human in vivo confirmation lacking |
| Replicated in humans? | no — human in vivo trafficking measurements not available |

### Mitochondrial-ER contact sites

MIRO1 also participates in mitochondria–ER contact sites (MAMs), co-localizing at ER-mitochondria interface zones with VAMP-associated protein B (VAPB). This function is distinct from motor coupling and is proposed to facilitate local Ca²⁺ transfer and lipid exchange [^fransson2006]. #gap/no-mechanism — the precise molecular bridge at ER-mito contacts involving MIRO1 remains poorly characterized; structural details are incomplete.

## Role in the PINK1–Parkin pathway (critical)

MIRO1 is a key substrate at the initiation of [[pink1-parkin-pathway]]-dependent [[mitophagy]] [^wang2011]. The sequence of events on a depolarized mitochondrion:

1. **PINK1 stabilization** — loss of ΔΨm prevents PINK1 import and proteolysis; PINK1 accumulates on the OMM and phosphorylates ubiquitin (Ser65) and Parkin (Ser65 in Ubl domain), activating [[parkin]] as an E3 ubiquitin ligase (detailed on [[pink1-parkin-pathway]]).
2. **PINK1 phosphorylates MIRO1** — PINK1 directly phosphorylates MIRO1 at Ser156 (and possibly additional sites) on the depolarized mitochondrion [^wang2011]. This is proposed to be an early "stop signal" that arrests the damaged organelle before ubiquitination of OMM proteins proceeds further.
3. **Parkin ubiquitinates MIRO1** — activated Parkin polyubiquitinates MIRO1 (and its paralog MIRO2), targeting both proteins for proteasomal degradation [^wang2011].
4. **Motor detachment** — loss of MIRO1/2 from the OMM releases the MIRO–TRAK–kinesin linkage, physically isolating the depolarized mitochondrion from the microtubule network.
5. **Mitophagy packaging** — the immobilized mitochondrion is recognized by autophagy receptors (OPTN, NDP52, p62/[[p62]]) and enclosed in autophagosomes (LC3-II/[[lc3]]-mediated).

MIRO1/2 accumulate on depolarized mitochondria in PINK1-null or Parkin-null cells, confirming that their removal is PINK1/Parkin-dependent [^wang2011]. Stabilized MIRO1 (phospho-dead mutant Ser156A) delays mitochondrial arrest and impairs downstream mitophagy, establishing MIRO1 removal as mechanistically required for efficient mitophagy rather than merely coincident with it.

**MIRO2 paralog:** RHOT2 ([[miro2]] — verified R30) is ~60% identical to MIRO1 and is similarly regulated by the PINK1/Parkin axis; however, the K27-ubiquitin-chain / Parkin-Ser65-dependence detail (Birsa 2014) was demonstrated for MIRO1 only — MIRO2-specific chain-type characterization remains a gap. The two paralogs have partially non-redundant tissue distribution: MIRO1 dominant in neurons (long-range microtubule transport); MIRO2 broader, with a more prominent Myo19/actin-based perinuclear distribution role in non-neuronal cells (López-Domènech 2018). MIRO2 single-KO mice are viable and fertile; the Miro1+Miro2 double-KO is embryonic lethal at E10.5 [^fransson2006].

## Aging context

### Impaired mitochondrial trafficking in aged neurons

Neurons are the most stringent users of MIRO1-dependent trafficking because mitochondria must be delivered over long axonal distances (up to 1 m in motor neurons) to supply ATP at distal synaptic terminals. In aged neurons:

- Mitochondrial motility declines with age in rodent and human neuronal models, associated with reduced axonal mitochondrial density at terminals.
- Impaired MIRO1 function or expression would reduce ATP delivery to distal synapses and Ca²⁺ buffering capacity at active zones. #gap/unsourced — direct quantitative measurements of MIRO1 protein levels across aged human neuronal tissue are lacking.

### Convergence with neurodegeneration

Loss of neuronal Miro1 (*Rhot1*) disrupts mitophagy flux and induces hyperactivation of the integrated stress response (ISR), with downstream translational reprogramming [^lopezmienech2021]. This phenocopies aspects of early Parkinson's disease pathology, consistent with the known roles of PINK1/Parkin ([[pink1-parkin-pathway]]) in AR-PD. MIRO1 has been proposed as a biomarker for Parkinson's disease: fibroblasts from Parkinson's patients (including idiopathic cases) show delayed MIRO1 degradation following mitochondrial depolarization, suggesting a functional impairment in the PINK1–Parkin–MIRO1 axis even in sporadic disease [^grossmann2020]. #gap/needs-replication — fibroblast-based MIRO1 degradation assays have not yet been replicated across independent cohorts.

MIRO1 is also misregulated in other neurodegenerative contexts: elevated or stabilized MIRO1 is observed in amyotrophic lateral sclerosis (ALS) patient neurons, where it may contribute to pathological mitochondrial clustering. #gap/unsourced — ALS MIRO1 elevation requires primary citation.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — PINK1/Parkin/MIRO1 axis demonstrated in human cell lines and patient fibroblasts |
| Phenotype conserved in humans? | partial — fibroblast MIRO1 delay in PD patients; in vivo neuronal phenotype not directly measured |
| Replicated in humans? | no (preclinical + patient-cell data only) |

## Pathway membership

- [[mitophagy]] — MIRO1 removal is a required early step for motor detachment and mitophagy initiation on depolarized mitochondria
- [[pink1-parkin-pathway]] — MIRO1 is a direct PINK1 phosphosubstrate and Parkin ubiquitination target
- [[mitochondrial-dysfunction]] — impaired MIRO1 trafficking reduces mitochondrial quality control and ATP distribution

## Key interactors

- [[parkin]] (PRKN) — E3 ubiquitin ligase; polyubiquitinates MIRO1 for proteasomal degradation
- [[pink1]] — Ser/Thr kinase; phosphorylates MIRO1 Ser156 on depolarized OMM
- [[trak1]] / [[trak2]] — adaptor proteins bridging MIRO1 to kinesin-1 and dynein; required for mitochondrial motility
- [[miro2]] (verified R30) — paralog (RHOT2, ~60% identity); partial functional redundancy; same PINK1/Parkin axis, but K27-chain Parkin-Ser65 dependence directly demonstrated only for MIRO1
- USP30 — deubiquitinase that counteracts Parkin-driven MIRO1 ubiquitination; USP30 inhibition promotes mitophagy

## Limitations and gaps

- #gap/needs-human-replication — All mechanistic trafficking and PINK1/Parkin/MIRO1 substrate data derive from mouse models, rodent neurons, and human fibroblast/iPSC lines. In vivo human neuronal mitochondrial trafficking measurements are technically inaccessible.
- #gap/needs-replication — MIRO1 degradation delay in PD fibroblasts (Grossmann 2020 review context); large-cohort fibroblast studies are needed.
- #gap/unsourced — Quantitative MIRO1 protein level changes in aged human brain or motor neurons; direct comparison to young tissue.
- #gap/unsourced — ALS-associated MIRO1 elevation claim requires primary citation.
- #gap/no-mechanism — Molecular details of MIRO1's role in ER–mitochondria contact sites; structural characterization of MIRO–TRAK–kinesin ternary complex is incomplete.
- #gap/needs-canonical-id — GenAge entry for RHOT1/MIRO1: not confirmed; RHOT1 does not appear in the GenAge human database (aging relevance is inferred from pathway membership, not direct longevity genetics). Tag if GenAge ID is later found.
- #gap/long-term-unknown — Consequences of partial MIRO1 reduction over the lifespan in conditional neuronal KO models have not been reported beyond early postnatal windows.

## Footnotes

[^fransson2003]: doi:10.1074/jbc.M208609200 · Fransson A et al. 2003 J Biol Chem · in-vitro (mammalian cell lines) · model: NIH3T3 fibroblasts + COS 7 cells; Myc-tagged MIRO1/MIRO2 overexpression (yeast mentioned only as evolutionary context, not used experimentally) · 399 citations; (OA hybrid) · identifies MIRO1/2 as atypical Rho GTPases (618 aa each) with roles in mitochondrial morphology; constitutively active MIRO1-Val13 induces mitochondrial network collapse and increased apoptosis

[^fransson2006]: doi:10.1016/j.bbrc.2006.03.163 · Fransson S et al. 2006 Biochem Biophys Res Commun · in-vivo (mouse) + in-vitro · model: Miro1-null perinatal lethal phenotype; MIRO–TRAK motor complex · 460 citations; archive not_oa (closed-access) #gap/no-fulltext-access · establishes essential role in mitochondrial trafficking + Miro1-null lethality

[^macaskill2009]: doi:10.1016/j.neuron.2009.01.030 · Macaskill AF et al. 2009 Neuron · in-vitro (primary neurons + COS7 pull-down) · model: rat hippocampal neurons (dendrites, DIV 12–14), Miro1 ΔEF mutant (E208K + E328K) · 660 citations; (OA hybrid) · demonstrates MIRO1 as Ca²⁺-sensor for glutamate-receptor-dependent synaptic mitochondrial localization via KIF5 (kinesin-1); Ca²⁺ at IC₅₀ ~1 μM dissociates Miro1–KIF5 complex; EF-hand mutant abolishes arrest and synaptic accumulation

[^saotome2008]: doi:10.1073/pnas.0808953105 · Saotome M et al. 2008 PNAS · in-vitro (cell lines + primary neurons) · model: H9c2 cardiomyocyte cell line + primary cortical neurons (neonatal rat) · 523 citations; (OA green) · bidirectional Ca²⁺-dependent control of mitochondrial dynamics; immobilization and fragmentation at high [Ca²⁺]; Miro GTPase and EF-hand domains both required for full Ca²⁺ sensitivity

[^wang2011]: doi:10.1016/j.cell.2011.10.018 · Wang X et al. 2011 Cell · in-vitro (Drosophila neurons + mammalian cell lines) · model: Drosophila motor neurons + rat/mouse hippocampal neurons (Parkin-/- mice) + HeLa + HEK293T cells; PINK1-null + Parkin-null comparison · 1,139 citations; (OA bronze) · definitive demonstration that PINK1 phosphorylates MIRO at Ser156 and Parkin ubiquitinates MIRO1/2 → proteasomal degradation → motor detachment → mitophagy initiation

[^lopezmienech2021]: doi:10.15252/embj.2018100715 · López-Doménech G et al. 2021 EMBO J · in-vitro + in-vivo · model: Miro1/2-DKO MEFs; CaMKIIα-Cre conditional Rhot1-KO neurons (hippocampus + cortex); primary mouse cortical neurons · 65 citations; (OA hybrid) · Miro1 ubiquitination and degradation are sequential requirements for Parkin recruitment and mitophagy progression; conditional neuronal loss leads to megamitochondria, Mfn1/2 upregulation, and pS51-eIF2α ISR activation at 12 months

[^grossmann2020]: doi:10.3389/fneur.2020.00587 · Grossmann D et al. 2020 Front Neurol · review · model: literature synthesis covering PD patient fibroblasts, iPSC-derived neurons, and in vivo models · 46 citations; (OA gold) · comprehensive review of RHOT1/MIRO1 in PD pathogenesis: impaired Miro1 degradation in patient-derived fibroblasts and iPSC neurons; RHOT1 heterozygous mutations (R272Q, T351A, R450C, T610A) identified in PD patients; MERCs role discussed
