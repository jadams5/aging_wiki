---
type: protein
aliases: [BAX, Bcl-2-like protein 4, BCL2L4, apoptosis regulator BAX]
uniprot: Q07812
ncbi-gene: 581
hgnc: 959
mouse-ortholog: Bax
ensembl: ENSG00000087088
druggability-tier: 2
caused-by: []
causes: []
key-domains: [BH3, BH1, BH2, transmembrane-helix]
key-ptms: [Met1-N-acetylation, Lys128-ubiquitination, Lys190-ubiquitination]
pathways: ["[[apoptosis-pathway]]", "[[p53-pathway]]", "[[bcl-2-family-signaling]]"]
hallmarks: ["[[cellular-senescence]]", "[[stem-cell-exhaustion]]", "[[genomic-instability]]"]
known-interactors: ["[[bcl-2]]", "[[bcl-xl]]", "[[mcl-1]]", "[[bak]]", "[[bim]]", "[[bid]]", "[[puma]]", "[[p53]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Chipuk 2004 mechanism claim verified via Crossref abstract (closed-access PDF); Knudson 1995 BAX-null phenotype verified via Crossref title + Chipuk 2010 review summary (closed-access PDF not readable); Chipuk 2010 review verified against full PDF; Zhu 2017 verified against full PDF — in-vivo claim corrected to in-vitro-only; Shen 2024 verified against full PDF — n=3 per group confirmed, BTSA1 dose added; UniProt Q07812 domain/PTM fields confirmed via REST API; GenAge: BAX confirmed absent from GenAge human database (Build 21)"
---


# BAX (BCL2-Associated X protein)

The executioner of the intrinsic apoptosis pathway. BAX — together with its obligate paralogue [[bak]] — forms the pores that permeabilize the mitochondrial outer membrane, releasing cytochrome c and committing a cell to death. It is the convergence point through which p53-mediated genotoxic stress, BH3-only sensors (BIM, BID, PUMA), and anti-apoptotic Bcl-2 family members (BCL-2, BCL-xL, MCL-1) all negotiate life-or-death decisions. In the context of aging, BAX is the effector that senescent cells suppress to achieve their characteristic apoptosis resistance — and that next-generation senolytics aim to reactivate.

## Identity

- **UniProt:** Q07812 (BAX_HUMAN)
- **NCBI Gene:** 581
- **HGNC symbol:** BAX (synonym: BCL2L4)
- **Mouse ortholog:** Bax (one-to-one; function conserved)
- **Length:** 192 amino acids (canonical alpha isoform); at least 6 isoforms from alternative splicing

## Discovery

BAX was discovered in 1993 by Oltvai, Milliman, and Korsmeyer as a 21 kDa Bcl-2-binding protein with extensive amino acid homology to Bcl-2 [^oltvai1993]. The key finding was that the ratio of Bcl-2 to BAX determines cell survival or death following an apoptotic stimulus — a rheostat model that remains the conceptual foundation for the Bcl-2-family field.

## Domain structure

| Domain | Residues (approx.) | Function |
|---|---|---|
| BH3 motif | 59–73 | Essential for pro-apoptotic activity; mediates interaction with anti-apoptotic Bcl-2 proteins |
| BH1 motif | 98–118 | Contributes to hydrophobic groove structure |
| BH2 motif | 150–165 | Contributes to hydrophobic groove structure |
| Transmembrane helix (alpha-9) | 172–192 | Membrane anchor; drives mitochondrial OMM insertion upon activation |

The BH1-BH2 region together with BH3 creates the hydrophobic groove that is the binding site for activating BH3-only proteins (BIM, BID, PUMA) and the target of small-molecule BH3 mimetics.

## Key PTMs

- **N-acetylation at Met-1** — constitutive; proteome-wide modification
- **Ubiquitination at Lys-128 and Lys-190** — regulated by the E3 ligase RNF144B (promotes degradation) and the deubiquitinase USP12 (stabilizes BAX); net effect modulates apoptotic threshold
- **JNK-mediated phosphorylation** — stress-induced; releases BAX from 14-3-3 chaperone proteins in the cytoplasm, freeing it for mitochondrial translocation

## Mechanism of action

### Resting state

In healthy cells, BAX exists predominantly as a soluble cytosolic monomer. BCL-xL constantly retrotranslocates BAX from the mitochondrial outer membrane (OMM) back to the cytosol, maintaining a steady-state flux that keeps BAX inactive.

### Activation: two models (both partially correct)

**1. Direct activation model** — BH3-only "activators" (BIM, tBID, PUMA) bind the hydrophobic groove of BAX, triggering conformational changes that expose the N-terminus and the transmembrane domain. Chipuk et al. 2004 showed that p53 itself can act as a direct cytosolic BAX activator at mitochondria [^chipuk2004]. This model is supported by biochemical reconstitution experiments.

**2. Indirect (de-repression) model** — BH3-only "sensitizers" (BAD, BIK, NOXA) bind and neutralize anti-apoptotic proteins (BCL-2, BCL-xL, MCL-1), releasing latent BAX and BAK that are held in check by anti-apoptotic complexes. In this model, BAX is constitutively poised and freed by removing its restraint.

Current consensus: both mechanisms operate simultaneously; their relative contributions are cell-type- and stress-context-dependent [^chipuk2010].

### Mitochondrial execution sequence

Once activated, BAX undergoes:

1. N-terminal helix (alpha-1) exposure — conformational rearrangement
2. OMM translocation — transmembrane alpha-9 helix inserts into the outer leaflet
3. Oligomerization — BAX and BAK form heterodimers/higher-order oligomers; pore assembly
4. MOMP — cytochrome c, Smac/DIABLO, and HtrA2/Omi released into cytosol
5. Apoptosome — cytochrome c + Apaf-1 + dATP → procaspase-9 recruitment
6. Caspase cascade — caspase-9 activates caspase-3/7 → substrate cleavage → cell death

MOMP is the **point-of-no-return**: once the OMM is permeabilized, cell death is essentially irreversible even if caspases are inhibited.

## Regulation by anti-apoptotic Bcl-2 family members

The three major anti-apoptotic guards that sequester BAX and prevent MOMP are:

| Protein | Primary binding partner(s) | Targeted by (senolytic) |
|---|---|---|
| [[bcl-2]] | BAX, BIM, BID | venetoclax (ABT-199), navitoclax |
| [[bcl-xl]] | BAX, BAK, BIM | navitoclax (ABT-263); BCL-xL PROTACs |
| [[mcl-1]] | BAK, BIM, NOXA | MCL-1 inhibitors (S63845, AMG-176) |

Over-expression of any of these "guards" is sufficient to block BAX-mediated apoptosis. Senescent cells selectively upregulate this anti-apoptotic shield — see [[#Aging relevance]] below.

## p53 — BAX axis

BAX is a direct transcriptional target of [[p53]]: the BAX promoter contains a canonical p53 response element, and p53 transcriptionally upregulates BAX following DNA damage. p53 also activates [[puma]] and NOXA, creating a triple-pronged apoptotic signal. Beyond transcription, p53 protein can act directly at mitochondria to trigger BAX conformational activation [^chipuk2004] — a non-transcriptional cytosolic function that is independent of gene induction.

This means p53-driven apoptosis depends on BAX at two levels: (1) increased BAX protein expression via gene induction, and (2) direct BAX activation by cytosolic p53 protein.

## Genetic evidence: BAX knockout mouse

Knudson et al. 1995 generated Bax-null mice [^knudson1995]:

- **Lymphoid hyperplasia** — failure to prune excess lymphocytes; spleen and thymus enlarged
- **Male germ-cell death** — accumulation of atrophic seminiferous tubules; male infertility
- **Neuronal survival** — excess neurons retained in certain brain regions (facial motor nucleus)
- **Lifespan** — not strikingly extended under standard conditions; BAK and other effectors provide redundancy

The Bax-null phenotype is notably **tissue-specific**, reflecting that BAK (encoded by a separate gene) compensates in some lineages but not others. Double Bax/Bak knockouts are perinatally lethal, confirming that the two effectors together are required for developmental apoptosis.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | BH3-domain mechanism, OMM topology, and BCL-2 family interactions are conserved |
| Phenotype conserved in humans? | yes | BCL-2 family dysregulation drives human lymphomas; BAX mutations found in hematological malignancies |
| Replicated in humans? | partial | Pharmacological BAX-pathway manipulation (BH3 mimetics) is clinically validated in oncology; aging-specific data limited |

## Aging relevance

### Senescent cell apoptosis resistance

Senescent cells are characteristically resistant to apoptosis despite chronic stress signaling. The leading mechanistic explanation is **survival priming**: senescent cells upregulate BCL-2, BCL-xL, and/or MCL-1, which buffer BAX/BAK at the "primed" state just below the MOMP threshold. BAX is present and partially activated — it is held back, not absent.

Evidence for this model:

- BCL-xL inhibitors A1331852 and A1155463 selectively kill senescent HUVECs and IMR90 cells but not preadipocytes *in vitro* [^zhu2017], implying that senescent cell survival in those cell types depends on BCL-xL sequestering BAX. (Note: navitoclax/ABT-263 was previously shown to be senolytic in vivo by others; Zhu 2017 itself is an in vitro study only.)
- BTSA1, a direct small-molecule BAX activator (binds BAX's trigger site), induced apoptosis in senescent myofibroblasts (0.3 µM, in vitro; n=3 per group) and reduced pulmonary fibrosis in BLM-challenged mice (10 mg/kg IP every 2 days; n=3 per group, both young and aged C57BL/6 male mice) [^shen2024]. #gap/needs-human-replication

### Implication for senolytic drug design

Two complementary strategies target the BAX node:

1. **Anti-apoptotic protein inhibitors (BH3 mimetics)** — release BAX from BCL-2/BCL-xL/MCL-1; rely on senescent cells being more "primed" than normal cells. Navitoclax is the prototype; BCL-2-selective venetoclax has lower platelet toxicity.
2. **Direct BAX activators** — BTSA1 class; engage BAX's trigger site directly, bypassing the need to displace anti-apoptotic proteins. More mechanistically direct; less clinically validated.

Both strategies converge on BAX/BAK oligomerization as the irreversible commitment step.

### Stem cell and tissue homeostasis

Insufficient apoptosis (as in Bax-null animals) leads to aberrant accumulation of damaged cells, contributing to tissue dysfunction independent of cancer. Conversely, excessive BAX-mediated apoptosis under chronic stress may deplete [[stem-cell-exhaustion|stem cell pools]], a separate driver of aging. The balance between BAX-mediated clearance of damaged cells and preservation of stem cell reserves represents a tissue-context-dependent trade-off. #gap/no-mechanism — the signaling logic that governs which cells activate BAX vs enter senescence is incompletely understood.

## Pharmacology

### BH3 mimetics (anti-apoptotic protein inhibitors)

| Drug | Target | Clinical stage | Notes |
|---|---|---|---|
| Navitoclax (ABT-263) | BCL-2 + BCL-xL | Phase 2 (oncology + senolytics) | Dose-limiting thrombocytopenia (BCL-xL in platelets) |
| Venetoclax (ABT-199) | BCL-2 selective | FDA-approved (CLL, AML) | Spared BCL-xL → better platelet safety; less senolytic potency |
| BCL-xL PROTACs (e.g., DT2216) | BCL-xL selective degradation | Preclinical/Phase 1 | Platelet-sparing via platelet-specific E3 ligase absence |

### Direct BAX activators

| Compound | Mechanism | Stage |
|---|---|---|
| BTSA1 | Binds BAX trigger site (N-terminal groove); direct conformational activation | Preclinical (mouse fibrosis); 10 mg/kg IP in BLM mouse model (Shen 2024) |

#gap/dose-response-unclear — For BTSA1, therapeutic window (senolytic vs normal-tissue toxicity) in aging models has not been systematically established.

## Interaction network (key nodes)

- [[p53]] — transcriptional inducer (BAX gene); direct mitochondrial activator
- [[bim]] — BH3-only activator; binds BAX hydrophobic groove
- [[bid]] — BH3-only activator; cleaved by caspase-8 (tBID) to activate BAX at OMM
- [[puma]] — BH3-only activator; p53 transcriptional target; cooperates with BIM
- [[bak]] — obligate paralogue; compensates when BAX is absent; required for full MOMP
- [[bcl-2]] — anti-apoptotic; sequesters BAX via heterodimerization
- [[bcl-xl]] — anti-apoptotic; retrotranslocates BAX from OMM to cytosol
- [[mcl-1]] — anti-apoptotic; primarily sequesters BAK; also limits BAX
- [[cytochrome-c]] — released downstream of MOMP; initiates apoptosome
- [[apaf-1]] — forms apoptosome with cytochrome c; activates caspase-9

## Pathway membership

- [[apoptosis-pathway]] — intrinsic mitochondrial apoptosis; BAX is the pore-forming effector
- [[p53-pathway]] — downstream transcriptional and cytosolic target of p53
- [[bcl-2-family-signaling]] — central node of the Bcl-2 rheostat

## Limitations and gaps

- `#gap/needs-human-replication` — Senolytic efficacy of BAX-targeted strategies (BH3 mimetics, BTSA1) demonstrated primarily in mouse models; human aging trial data nascent.
- `#gap/no-mechanism` — Molecular logic determining whether stressed cells activate BAX → apoptosis vs. senescence → SASP remains incompletely resolved; likely involves BAX expression level, anti-apoptotic protein abundance, and BH3-only activator availability in a cell-context-specific way.
- `#gap/needs-replication` — BTSA1 senolytic activity in pulmonary fibrosis (Shen et al. 2024) is a single-study finding in one fibrosis model; generalizability to other senescent-cell compartments unclear.
- BAX is **not listed** in GenAge human database (Build 21, 307 genes; confirmed 2026-05-04). BAX's aging relevance is through its role as the apoptotic effector in senolytic pathways, not as a lifespan-modifying gene per se.

## Footnotes

[^oltvai1993]: doi:10.1016/0092-8674(93)90509-o · Oltvai ZN, Milliman CL, Korsmeyer SJ · n=N/A · in-vitro + in-vivo · review-level impact (5,984 citations) · model: cell lines + transgenic mouse; established the Bcl-2:Bax ratio model

[^knudson1995]: doi:10.1126/science.270.5233.96 · Knudson CM, Tung KSK, Tourtellotte WG, Brown GAJ, Korsmeyer SJ · in-vivo (Bax-null knockout mouse) · model: Mus musculus C57BL/6 background; demonstrated lymphoid hyperplasia, male germ-cell death, and neuronal excess

[^chipuk2004]: doi:10.1126/science.1092734 · Chipuk JE, Kuwana T, Bouchier-Hayes L, Droin NM, Newmeyer DD, Schuler M, Green DR · in-vitro + in-vivo · model: isolated mitochondria + cell lines + mouse xenograft; demonstrated cytosolic p53 directly activates BAX at OMM independent of transcription

[^chipuk2010]: doi:10.1016/j.molcel.2010.01.025 · Chipuk JE, Moldoveanu T, Llambi F, Parsons MJ, Green DR · review (Mol Cell 37:299–310) · comprehensive unified model of Bcl-2 family activation; widely cited

[^zhu2017]: doi:10.18632/aging.101202 · Zhu Y, Doornebal EJ, Pirtskhalava T, Giorgadze N, Wentworth M et al. · in-vitro · model: radiation-induced senescent human HUVECs, IMR90 fibroblasts, and primary preadipocytes; demonstrated A1331852 and A1155463 (selective BCL-xL inhibitors) are senolytic in HUVECs and IMR90 but not preadipocytes; fisetin senolytic in HUVECs only; paper is in vitro only — no in vivo arm reported

[^shen2024]: doi:10.1111/acel.14229 · Shen M, Fu J, Zhang Y, Chang Y, Li X, Cheng H, Qiu Y, Shao M, Han Y, Zhou Y, Luo Z · in-vitro + in-vivo · model: C57BL/6 male mice (8-week young and 20-month aged); BLM-induced pulmonary fibrosis (1.25 mg/kg); BTSA1 10 mg/kg IP every 2 days; n=3 per group; confirmed BTSA1 activates BAX in senescent myofibroblasts, converts minority MOMP to complete MOMP, reduces fibrosis burden in both reversible and irreversible models #gap/needs-replication
