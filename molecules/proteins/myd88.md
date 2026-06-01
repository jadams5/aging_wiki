---
type: protein
aliases: [myeloid differentiation primary response 88, MYD88, MyD88]
uniprot: Q99836
ncbi-gene: 4615
hgnc: 7562
ensembl: ENSG00000172936
is-noncoding-rna: false
pathways: ["[[il-1-signaling]]", "[[nf-kb]]"]
hallmarks: ["[[chronic-inflammation]]"]
sens-categories: []
complex-subunits: []
druggability-tier: 3
gtex-aging-correlation: null   # #gap/needs-data — GTEx API not queried in this seeding pass; ubiquitous expression expected across tissues
mr-causal-evidence: not-tested   # No MR study identified linking MYD88 germline variants to aging outcomes; GWAS hits exist for inflammatory disease phenotypes but no MR instrument has been leveraged for aging-specific endpoints
caused-by: ["[[il-1-signaling]]", "[[nlrp3-inflammasome]]"]
causes: ["[[nf-kb]]", "[[ras-mapk]]", "[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Lin 2010 (Nature, Myddosome structure), Wesche 1997 (Immunity, TIR-domain adaptor), von Bernuth 2008 (Science, IMD68), and Ngo 2011 (Nature, L265P in DLBCL) verified end-to-end against local PDFs. UniProt Q99836 verified via REST API (accession, gene name, organism, sequence length, DD 54-109, intermediate domain 110-155, TIR 159-293 all confirmed). Ridker 2017 (CANTOS) cite-by-context confirmed consistent with canonical home on canakinumab.md. Motshwene 2009, Treon 2012, Loiarro 2007, and Kovtonyuk 2022 deferred — PDFs not locally available (archive status: pending/not_oa)."
---

# MyD88 (MYD88)

MyD88 (myeloid differentiation primary response 88) is a 296-amino-acid cytosolic adaptor protein that functions as the **universal signal transducer for the IL-1 receptor family and most Toll-like receptors (TLRs)**. It bridges receptor activation to downstream kinase cascades by forming the Myddosome — a helical death-domain oligomer that recruits and activates IRAK4. In the aging context, MyD88 is the molecular bottleneck through which chronic sterile-inflammatory signals from senescent cells, damaged mitochondria, and gut microbial products converge on [[nf-kb|NF-κB]] to drive [[chronic-inflammation|inflammaging]]. Its somatic gain-of-function mutation (L265P) is a driver of B-cell lymphoma, linking innate immune overactivation to malignancy.

This page covers MyD88 as an adaptor protein. Upstream biology (IL-1 receptor architecture, receptor–TIR interaction) lives on [[il-1-signaling]] and [[il-1r1]]. Downstream effector biology lives on [[irak4]], [[traf6]], [[tak1]], and [[nf-kb]].

---

## Identity

| Field | Value |
|---|---|
| UniProt | Q99836 (MYD88_HUMAN) — Swiss-Prot (manually curated) |
| NCBI Gene | 4615 |
| HGNC symbol | MYD88 |
| Ensembl | ENSG00000172936 |
| Mouse ortholog | Myd88 (one-to-one; functionally conserved; Myd88-/- mouse is viable but infection-prone) |
| Protein length | 296 amino acids (canonical isoform 1); 6 isoforms from alternative splicing |
| Chromosomal location | 3p22.2 (human) |
| GenAge entry | Not listed — innate immune adaptor; not a canonical longevity gene in HAGR database |

---

## Domain architecture

MyD88 has a three-domain modular structure, confirmed by UniProt Q99836 feature annotations [^wesche1997]:

| Domain | Residues (approx.) | Function |
|---|---|---|
| **Death domain (DD)** | 54–109 | Homotypic DD–DD interactions; nucleates Myddosome assembly; recruits IRAK4 DD |
| **Intermediate domain (ID)** | 110–155 | Required for IRAK1 and IRAK2 phosphorylation/activation; scaffolding function |
| **TIR domain** | 159–293 | TIR–TIR interaction with IL-1R1/IL-1RAcP cytoplasmic tails and TLR cytoplasmic tails; activates downstream signaling |

The **BB loop** within the TIR domain (residues ~195–200) is the contact surface most critical for receptor TIR interaction and the primary target of pharmacological inhibition strategies. The short unstructured N-terminal region (residues 1–53) precedes the DD and is poorly characterised.

MyD88 exists in equilibrium between monomer and homodimer via DD–DD self-association; this homodimerization is required before IRAK4 recruitment and is the target of the ST2825 research inhibitor [^loiarro2007].

---

## Myddosome assembly

The **Myddosome** is the oligomeric signaling complex nucleated by MyD88 upon receptor activation. Its structure was established at atomic resolution by Lin et al. (2010, Nature) by X-ray crystallography and electron microscopy [^lin2010]:

- **Stoichiometry:** 6 MyD88 DDs + 4 IRAK4 DDs + 4 IRAK2 DDs arranged in a **left-handed helical tower**
- **Architecture:** MyD88 DDs form the basal platform (bottom two layers); IRAK4 DDs occupy the middle layer; IRAK2 DDs (or IRAK1 DDs) form the apical layer at the top
- **Consequence:** The helical geometry concentrates IRAK4 kinase domains, triggering trans-autophosphorylation and activation

This structural basis for Myddosome formation was independently supported by Motshwene et al. (2009, JBC), who characterised the oligomeric MyD88–IRAK4 complex biochemically and showed it forms in the absence of a receptor template [^motshwene2009].

The Myddosome geometry is significant pharmacologically: inhibiting MyD88 DD homodimerization (which must precede Myddosome nucleation) blocks the entire cascade at a single point upstream of both the IRAK4/1/2 kinase axis and the TRAF6 E3-ligase axis. This is the rationale for the dimerization-inhibitor strategy.

---

## Signal transduction

MyD88 transduces signals from two classes of receptor:

### IL-1 receptor family (via [[il-1-signaling]])

Upon IL-1β or IL-1α binding to IL-1R1, the cytoplasmic TIR domains of IL-1R1 and IL-1RAcP come into proximity. The C-terminal TIR domain of MyD88 engages this two-TIR composite surface via TIR–TIR interaction [^wesche1997]. The recruited MyD88 DD then nucleates Myddosome assembly → IRAK4 activation → IRAK1/IRAK2 phosphorylation → [[traf6|TRAF6]] recruitment → K63-ubiquitin chain synthesis → [[tak1|TAK1]] activation → IKK complex → NF-κB nuclear translocation and MAPK activation.

For the full receptor-to-NF-κB cascade diagram see [[il-1-signaling]] § Signal transduction.

### Toll-like receptors (TLR1/2/4/5/6/7/8/9; not TLR3)

All TLRs except TLR3 signal through MyD88. TLR3 uses TRIF (TICAM-1) exclusively. TLR4 is unique in using both MyD88 and TRIF (bimodal): it recruits MyD88 at the plasma membrane for early NF-κB activation and TRIF at endosomes for late IFN-β induction via [[tbk1|TBK1]] → IRF3.

TLR7 and TLR9 (endosomal ssRNA/CpG sensors) recruit MyD88 and activate IRF7 directly via the intermediate domain, producing type I interferons — a MyD88-dependent but NF-κB-independent arm important for antiviral responses.

In the aging context, TLR4 activation by circulating lipopolysaccharide (LPS) from gut microbiome translocation, and TLR9 activation by mitochondrial DNA released from damaged or senescent cells, are two proposed routes by which MyD88 propagates sterile inflammation. #gap/needs-replication — the relative quantitative contributions of TLR4-LPS vs TLR9-mtDNA as MyD88 drivers of inflammaging are not established in aged human tissue.

---

## Aging connection

### MyD88 and the SASP cytokine network

[[il-1b|IL-1β]] and [[il-1a|IL-1α]] — the two apex cytokines of the [[sasp|SASP]] — both signal exclusively through the MyD88-dependent arm of IL-1R1. Senescent cells constitutively generate IL-1α (surface-bound and intracrine) and process IL-1β via constitutive [[nlrp3-inflammasome|NLRP3 inflammasome]] activity. Every paracrine SASP signal from a senescent cell that engages an IL-1R1-expressing neighbour passes through MyD88.

This positions MyD88 as the single most proximal intracellular convergence point of SASP-driven inflammaging. Blocking MyD88 downstream of IL-1R1 would, in principle, suppress SASP propagation without requiring cytokine-specific biologics — but non-selectively blocking all TLR signalling through MyD88 carries immunosuppression risk (see § Pharmacology).

### Hematopoietic aging and myeloid bias

Chronic low-level IL-1 signalling — routed through MyD88 — drives myeloid-biased differentiation of [[hematopoietic-stem-cells|hematopoietic stem cells (HSCs)]] in aged bone marrow. Evidence from Kovtonyuk et al. (2022, Blood) using aged mice showed that microbiota-derived signals elevate steady-state IL-1α/β in aged marrow and that IL-1R1-deficient HSCs maintained balanced lymphoid/myeloid output [^kovtonyuk2022]. As IL-1R1 → myeloid bias is MyD88-dependent, MyD88 is likely the proximal intracellular effector of this phenotype, though a direct MyD88 knockout experiment in aged HSCs was not reported in that study.

#gap/needs-human-replication — The microbiome–IL-1–MyD88–HSC axis is established in mouse models; direct human evidence for MyD88-mediated HSC myeloid biasing in aged bone marrow is lacking.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — MyD88 TIR and DD domains are highly conserved across vertebrates; human and mouse MyD88 share ~92% amino acid identity |
| Inflammaging phenotype conserved in humans? | yes — IL-1β blockade (CANTOS, n=10,061) demonstrates that IL-1/MyD88 pathway output causally mediates CV events in humans [^ridker2017] |
| Replicated in humans? | partial — CANTOS validates the downstream NF-κB output; MyD88-specific aging studies are murine |

### TLR/MyD88 sensing of aging-associated DAMPs

The aged tissue microenvironment accumulates several MyD88-activating danger-associated molecular patterns (DAMPs):

- **Mitochondrial DNA (mtDNA)** released from damaged mitochondria activates TLR9 → MyD88 → NF-κB. Circulating cell-free mtDNA increases with age and is correlated with frailty in human cohort studies. #gap/needs-replication
- **Oxidised lipids and HSPs** activate TLR4 → MyD88. HSP-mediated TLR4 engagement has been proposed as a sterile inflammation trigger in aged tissue. #gap/no-mechanism
- **S100 alarmins** released by senescent and necrotic cells activate TLR4 and the RAGE/TLR crosstalk via MyD88.

---

## Disease genetics

### MYD88 loss-of-function — primary immunodeficiency

Biallelic loss-of-function mutations in MYD88 cause **Immunodeficiency 68 (IMD68)**, an autosomal recessive primary immunodeficiency characterised by severe susceptibility to invasive pyogenic bacterial infections (principally *Streptococcus pneumoniae*, *Staphylococcus aureus*, *Pseudomonas aeruginosa*) with normal adaptive immunity [^vonbernuth2008]. Affected individuals lack the TLR/IL-1R → MyD88 → NF-κB axis; they cannot mount normal innate inflammatory responses to extracellular bacteria. Most affected children respond to prophylactic antibiotics and show reduced infection frequency with age — suggesting partial compensation by MyD88-independent pathways or adaptive immune maturation.

This human phenotype establishes MyD88 as non-redundant for early-life anti-bacterial defense. The compensated phenotype in older IMD68 survivors also provides indirect evidence that MyD88-independent TLR signalling (TRIF/TLR3) is insufficient to replace MyD88 function early in life.

### MYD88 L265P gain-of-function — B-cell lymphoma

The somatic missense mutation **L265P** (Leu265Pro in the TIR domain BB loop) is a recurrent oncogenic driver found in:

- **Waldenström macroglobulinemia (WM):** present in ~90% of cases [^treon2012]
- **Activated B-cell-like DLBCL (ABC-DLBCL):** present in ~29% of cases [^ngo2011]
- Primary central nervous system lymphoma (PCNSL) and primary vitreoretinal lymphoma: high frequency (~70–80%)

The L265P substitution locks MyD88 in a constitutively active conformation, spontaneously nucleating Myddosomes without receptor engagement → constitutive NF-κB activation → lymphoma survival signalling. In WM, L265P-expressing B cells respond to BTK inhibitors (ibrutinib, zanubrutinib) — not by directly targeting MyD88, but because BCR/BTK signalling cooperates with MyD88 L265P NF-κB to sustain survival; blocking BTK removes this cooperative input.

The L265P mutation is a somatic event; it is not a germline aging-associated variant. It is included here as a proof-of-concept that MyD88 gain-of-function drives human disease, and because the increasing prevalence of ABC-DLBCL and WM with age makes MyD88-driven lymphomagenesis an age-associated phenotype even when its trigger is somatic.

---

## Pharmacology

No approved drug targets MyD88 directly. The pharmacological landscape is research-stage:

| Agent | Class | Target | Status | Notes |
|---|---|---|---|---|
| **ST2825** | Peptidomimetic | MyD88 TIR homodimerization | Research only | Inhibits MyD88-MyD88 TIR-TIR interaction; reduces NF-κB in LPS-stimulated cells in vitro; not yet entered clinical trials |
| **Pepinh-MyD** | Cell-penetrating peptide | MyD88 TIR BB loop | Research only | Derived from the TIR-domain BB loop; competes with receptor TIR binding; poor PK for in-vivo use |
| **Loiarro peptidomimetic** | Peptidomimetic | MyD88 DD homodimerization | Research only | First published inhibitor (Loiarro 2007) blocking DD–DD interaction upstream of Myddosome assembly [^loiarro2007]; basis for subsequent optimisation efforts |
| TJ-M2010-5 | Small molecule | MyD88/TLR4 BB loop | Research only | Synthetic compound with some in vivo LPS-protection in rodents; no human data |

**Druggability-tier rationale (tier 3):** Per CLAUDE.md R26 schema (aging-context tier), MyD88 has research-grade chemical probes (ST2825, Loiarro peptidomimetic) but no clinical drug for any indication, and no aging-validated compound. The protein–protein interaction interface (DD–DD and TIR–TIR) was historically considered challenging, but structural definition of the Myddosome (Lin 2010) and site-directed mutagenesis of the BB loop have improved probe design. Tier 3 (high-quality probe, no clinical drug) is appropriate. If a selective MyD88 inhibitor enters Phase 1 for any indication, re-evaluate to tier 2.

**Why not tier 4?** The structural and pharmacological literature contains validated in-vitro inhibitors with defined binding sites; the protein is not undruggable — it is "probe-only" at this time.

---

## Open questions and gaps

- **MyD88-selective aging intervention:** Whether blocking MyD88 vs downstream NF-κB has different SASP-modulating outcomes remains unresolved. A MyD88 inhibitor would suppress both IL-1/TLR-driven NF-κB and the interferon arm (IRF7/IRF1); an IKK inhibitor further downstream would be more selective but less upstream. The optimal intervention point for inflammaging — MyD88, IRAK4, TRAF6, TAK1, or IKKβ — is not established in aging models. #gap/no-mechanism
- **MyD88-independent TLR3/TRIF arm in aging:** TLR3-TRIF signalling is entirely MyD88-independent. Its relative contribution to type I IFN–driven inflammaging (vs the MyD88-dependent TLR7/9/IRF7 axis) is poorly quantified in aged tissue. #gap/needs-replication
- **Aging-specific MyD88 isoforms:** UniProt lists 6 isoforms from alternative splicing; whether any isoform's expression shifts with age in a tissue-specific manner has not been systematically studied. #gap/needs-data
- **Myddosome stoichiometry in aged cells:** The 6:4:4 stoichiometry was determined in reconstituted or overexpressed systems. Whether endogenous Myddosome stoichiometry or assembly kinetics change in aged senescent cells is unexplored. #gap/needs-replication
- **GTEx aging correlation:** Not retrieved in this seeding pass. MyD88 expression is expected to be ubiquitous; age-associated changes in specific tissues (e.g., bone marrow, brain microglia) are of interest. #gap/needs-data

---

## Cross-references

- [[il-1-signaling]] — verified pathway page (R27); upstream receptor biology; full signalling cascade diagram
- [[il-1r1]] — primary IL-1 signalling receptor whose TIR domain recruits MyD88
- [[irak4]] — first kinase activated by Myddosome assembly; phosphorylates IRAK1/2 (R28 sibling, seeding in progress)
- [[traf6]] — E3 ubiquitin ligase recruited downstream of IRAK1/2 (R28 sibling)
- [[tak1]] — MAP3K7 activated by TRAF6 K63-ubiquitin scaffold (R28 sibling)
- [[nf-kb]] — primary transcriptional output; NF-κB p65/p50 drives pro-inflammatory gene program
- [[ras-mapk]] — parallel MAPK arm (p38, JNK) downstream of TAK1
- [[nlrp3-inflammasome]] — upstream activator of pro-IL-1β; provides substrate for MyD88's IL-1R engagement
- [[il-1b]] — major SASP cytokine; signals through IL-1R1 → MyD88
- [[il-1a]] — SASP apex regulator; also signals through IL-1R1 → MyD88
- [[sasp]] — functional output of chronic MyD88-mediated NF-κB activation in senescent cells
- [[chronic-inflammation]] — hallmark MOC; MyD88 is the proximal intracellular convergence point
- [[cellular-senescence]] — MyD88-mediated IL-1 signalling maintains and propagates the senescent state
- [[hematopoietic-stem-cells]] — HSC myeloid bias in aging partially mediated by chronic IL-1/MyD88 signalling
- [[tbk1]] — MyD88-independent TLR4 endosomal arm; relevant for distinguishing TRIF vs MyD88 contributions

---

## Footnotes

[^wesche1997]: doi:10.1016/s1074-7613(00)80402-1 · Wesche H et al. · Immunity 1997 · in-vitro (co-immunoprecipitation, kinase assay) · identified MyD88 as the TIR-domain adaptor recruited to IL-1R1 upon ligand binding; showed MyD88 recruits IRAK to the receptor complex; ~1104 citations; local PDF: 

[^lin2010]: doi:10.1038/nature09121 · Lin S-C, Lo Y-C, Wu H · Nature 2010 · in-vitro (X-ray crystallography + EM; recombinant human proteins) · determined the helical 6:4:4 stoichiometry of the Myddosome (6 MyD88 DD + 4 IRAK4 DD + 4 IRAK2 DD in a left-handed helix); ~963 citations; local PDF: 

[^motshwene2009]: doi:10.1074/jbc.m109.022392 · Motshwene PG et al. · J Biol Chem 2009 · in-vitro (biochemical reconstitution, gel filtration, EM) · characterised the oligomeric MyD88–IRAK4 death-domain complex independently of receptor; ~349 citations; not yet locally downloaded (archive status: pending)

[^vonbernuth2008]: doi:10.1126/science.1158298 · von Bernuth H et al. · Science 2008 · human genetics (case series + functional validation; n=9 patients with biallelic MYD88 mutations) · established MYD88 deficiency as a recessive primary immunodeficiency with selective susceptibility to pyogenic bacteria; MyD88 non-redundant for early anti-bacterial defense; ~682 citations; local PDF: 

[^treon2012]: doi:10.1056/nejmoa1200710 · Treon SP et al. · NEJM 2012 · observational (WGS + Sanger sequencing; n=30 WM patients) · identified MYD88 L265P in ~90% of Waldenström macroglobulinemia; established L265P as a somatic driver; ~1138 citations; not yet locally downloaded (archive status: pending)

[^ngo2011]: doi:10.1038/nature09671 · Ngo VN et al. · Nature 2010 (published Dec 2010; often cited 2011) · in-vitro + human genomics (RNA interference screen + sequencing in DLBCL cell lines + primary tumours) · identified oncogenically active MYD88 mutations in ABC-DLBCL including L265P; constitutive NF-κB activation; ~1298 citations; local PDF: 

[^loiarro2007]: doi:10.1189/jlb.1206746 · Loiarro M et al. · J Leukoc Biol 2007 · in-vitro (cell-free dimerization assay; NF-κB reporter; LPS-stimulated THP-1 cells) · first published inhibitor of MyD88 DD homodimerization (peptidomimetic compound); blocks IRAK1 and IRAK4 recruitment; ~measured inhibition of NF-κB activation; not yet locally downloaded (archive status: not_oa)

[^ridker2017]: doi:10.1056/NEJMoa1707914 · Ridker PM et al. · NEJM 2017 · rct · n=10,061 · canakinumab vs placebo in post-MI patients; IL-1β blockade reduces MACE (150 mg arm HR 0.85); canonical home [[canakinumab]]; cited here as downstream validation of IL-1/MyD88 axis in human cardiovascular aging; local PDF: 

[^kovtonyuk2022]: doi:10.1182/blood.2021011570 · Kovtonyuk LV et al. · Blood 2022 · in-vivo (mouse; IL-1R1-deficient HSCs + antibiotic-treated aged mice) · microbiota-derived IL-1 signals drive myeloid bias in aged HSCs via IL-1R1; HSC-autonomous effect reversed by IL-1R1 deficiency; MyD88 implicated as the obligate downstream adaptor; #gap/needs-human-replication; not yet locally downloaded
