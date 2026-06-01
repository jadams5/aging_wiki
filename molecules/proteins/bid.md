---
type: protein
aliases: [BH3-interacting domain death agonist, FL-BID, tBID, truncated BID, BH3-only BID]
uniprot: P55957
ncbi-gene: 637
hgnc: 1050
mouse-ortholog: Bid
ensembl: ENSG00000015475
druggability-tier: 2
caused-by: []
causes: []
key-domains: [BH3, alpha-helix-6-7-pore-hairpin, caspase-8-cleavage-site]
key-ptms: [Gly60-N-myristoylation-post-cleavage, Tyr54-phosphorylation, Ser78-phosphorylation, Met1-acetylation]
pathways: ["[[apoptosis-pathway]]", "[[bcl-2-family-signaling]]"]
hallmarks: ["[[cellular-senescence]]", "[[stem-cell-exhaustion]]"]
sens-categories: []
known-interactors: ["[[bak]]", "[[bax]]", "[[bcl-xl]]", "[[bcl-2]]", "[[mcl-1]]", "[[bcl-w]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Li 1998, Luo 1998, Zha 2000, Chipuk 2010, Wang 1996, Kuwana 2002 primary-source PDFs verified; Yin 1999 (10.1038/23730) not_oa — KO phenotype claims unverified against full text; BH3 affinity Kd values and cathepsin/calpain cleavage claims remain #gap/unsourced; canonical-database identity fields (UniProt, NCBI Gene, HGNC) not independently re-checked"
---

# BID (BH3-Interacting Domain Death Agonist)

The canonical bridge between the **extrinsic** (death receptor / caspase-8) and **intrinsic** (mitochondrial) apoptosis pathways. BID is the only BH3-only protein that is constitutively activated by proteolytic cleavage: caspase-8 cleaves full-length BID (FL-BID, p22) at Asp59 (conserved in both murine and human BID), generating the **truncated form tBID (p15 + p7)** that translocates to the mitochondrial outer membrane (OMM) and acts as a **direct activator** of [[bak]] and [[bax]] to trigger MOMP and irreversible cell death.

## Identity

- **UniProt:** P55957 (BID_HUMAN)
- **NCBI Gene:** 637
- **HGNC symbol:** BID
- **Ensembl:** ENSG00000015475
- **Mouse ortholog:** Bid (P70444; one-to-one; function highly conserved)
- **Length:** 195 amino acids; ~22 kDa (full-length p22 / FL-BID)
- **Post-cleavage fragments:** p15 (residues ~60–195, the tBID fragment that associates with mitochondria) + p7 N-terminal fragment

## Discovery

BID was identified in 1996 by Wang et al. as a novel BH3-domain-only protein that interacts with BCL-2 and BCL-xL in a yeast two-hybrid screen [^wang1996]. Unlike the multi-domain Bcl-2 family members (BCL-2, BCL-xL, BAX, BAK), BID contained only the BH3 homology domain among the conserved Bcl-2 regions, placing it in the BH3-only subfamily alongside BAD and BIK. Enforced expression was pro-apoptotic, and the BH3 domain was necessary for this activity. The molecular weight and cytosolic localization of the full-length protein were noted, but the cleavage activation mechanism was not yet characterized.

The landmark caspase-8 cleavage mechanism was simultaneously described in 1998 by two independent groups. Li et al. demonstrated that active caspase-8 cleaves murine BID at **Asp59** (after the LQTD sequence), generating a C-terminal tBID fragment (~15 kDa by SDS-PAGE) and a smaller N-terminal fragment that rapidly dissociates; tBID associates with mitochondria and triggers cytochrome c release in a cell-free system [^li1998]. The same study identified Asp75 as the granzyme B cleavage site — a distinct site from the caspase-8 site. In a parallel paper, Luo et al. demonstrated that Bid mediates cytochrome c release from mitochondria in response to activation of cell-surface death receptors (Fas/CD95), placing BID downstream of caspase-8 but upstream of cytochrome c in the Fas → MOMP signaling axis, and confirmed the cleavage occurs at Asp59 after the LQTD motif conserved between human and mouse BID [^luo1998]. Together these two 1998 Cell papers established BID as the molecular linker between extrinsic and intrinsic apoptosis.

## Domain and structure

Full-length BID (195 aa, ~22 kDa) is an all-helical protein with **8 alpha-helices** (established by NMR structural analysis; Wang 1996 did not characterize the helical structure). Key structural features:

| Feature | Residues (approx.) | Notes |
|---|---|---|
| Alpha-helix 1 (α1) | 1–15 | N-terminal region; removed after cleavage as p7 fragment |
| Caspase-8 cleavage site | Asp59 (mouse; LQTD↓G motif, conserved in human) | Site of caspase-8 cleavage in both species (Li 1998, Luo 1998); Asp75 (mouse) is the separate granzyme B cleavage site |
| Gly60 (murine numbering) — N-myristoylation acceptor | 60 | After caspase-8 cleavage exposes Gly60 as new N-terminus of p15 tBID; post-cleavage N-myristoylation required for efficient OMM targeting (Zha 2000; murine BID system) |
| BH3 motif (α3 helix) | ~86–100 | Core death domain; required for BAK/BAX activation and anti-apoptotic protein binding |
| Helices α6+α7 (pore-forming hairpin) | ~140–172 | Form a hydrophobic hairpin; analogous structurally to pore-forming domains of bacterial toxins; required for membrane insertion and MOMP induction |
| Alpha-helix 8 (α8) | ~175–195 | C-terminal helix |

The structure of BID is notable in that it resembles the pore-forming domains of bacterial toxins (colicin A, diphtheria toxin), suggesting that membrane insertion via α6-α7 is a conserved mechanism for mitochondrial disruption. #gap/needs-replication — the functional requirement for α6-α7 in tBID-induced MOMP is supported by mutational data but the atomic structure of tBID inserted in the OMM has not been resolved.

## Activation: the FL-BID → tBID switch

### Primary activator: caspase-8

The canonical activation mechanism:

1. Death ligand (FasL, TNF, TRAIL) binds death receptor (Fas/CD95, TNFR1, DR4/5)
2. DISC (death-inducing signaling complex) assembles — FADD + procaspase-8
3. Caspase-8 autoactivates and is released
4. Caspase-8 cleaves FL-BID at **Asp59** (murine; after LQTD motif conserved in both species per Luo 1998) → generates p7 (N-terminal ~7 kDa fragment) + p15 (C-terminal tBID)
5. Gly60 becomes the new N-terminus of tBID; **N-myristoylation** at Gly60 (see below) enhances membrane targeting
6. tBID translocates from cytosol to OMM; inserts via the α6-α7 hairpin
7. tBID directly activates [[bak]] (constitutively at OMM) and [[bax]] (translocates from cytosol) → conformational change → oligomerization → MOMP → cytochrome c release → apoptosome → caspase-3/7 → cell death

Note on cleavage-site numbering: both the 1998 Li et al. and Luo et al. papers worked with **mouse BID** and both place the caspase-8 cleavage site at **Asp59** of the murine sequence (after the LQTD motif). Luo 1998 explicitly states this site is "conserved between human and mouse Bid." Li 1998 identifies Asp75 as the **granzyme B** cleavage site in mouse — a distinct site. The wiki previously had the species labels for these two residues inverted, which has been corrected here. The human equivalent of the caspase-8 site is around the same LQTD sequence, but the exact human residue number in the canonical 195-aa sequence should be confirmed against UniProt P55957 annotations. #gap/needs-replication

### N-myristoylation of tBID at Gly60 — a post-cleavage lipid switch

Zha et al. 2000 demonstrated that after caspase-8 cleavage of **murine BID**, the newly exposed Gly60 (first residue of the p15 C-terminal fragment) is **N-myristoylated** by NMT (N-myristoyltransferase) — a post-proteolytic myristoylation that occurs only after cleavage exposes the glycine [^zha2000]. Key findings from this Science paper:

- Substitution of Gly60 with Ala (G60A) abolished myristoylation completely while leaving caspase-8 cleavage efficiency unchanged
- Myristoylation markedly enhanced tBID targeting to mitochondria: whereas <30% of the G60A p7-p15 complex associated with sedimented mitochondria, essentially 100% of the myristoylated p7-myr-p15 complex did
- Myristoylation was confirmed as an amide linkage (resistant to 0.2 M KOH and 1 M hydroxylamine), characteristic of N-myristoylation at glycine
- In vivo, G60A BID-GFP failed to redistribute to mitochondria after Fas activation and failed to accelerate apoptosis relative to wild-type BID-GFP in MCF7/Fas cells
- The mechanism represents a molecular switch: Gly60 is buried and inaccessible in FL-BID, then exposed and modified only after caspase-8 cleavage

Note: All Zha 2000 experiments used murine BID expressed from pET15b. The human equivalent of murine Gly60 occupies the same position in the conserved GSQASR myristoylation consensus sequence; the "Gly60" designation refers to murine numbering throughout this paper.

### Cleavage by other proteases

BID is a substrate for multiple additional proteases beyond caspase-8, each generating fragments that may have distinct activities:

| Protease | Context | Notes |
|---|---|---|
| Caspase-8 | Extrinsic pathway DISC | Primary physiological activator; cleaves after Asp59 (murine LQTD↓G motif, conserved in human) per Li 1998, Luo 1998 |
| Granzyme B | Cytotoxic T-lymphocyte / NK-cell killing | CTL-mediated apoptosis; cleaves after Asp75 (murine IEPDS motif) per Li 1998; generates tBID-like fragment |
| Caspase-2 | DNA damage / genotoxic stress | Upstream of mitochondria; may link nuclear DDR to MOMP |
| Caspase-3 | Amplification loop | Active caspase-3 can cleave BID → positive-feedback amplification of MOMP |
| Caspase-10 | Death receptor pathway (parallel to caspase-8) | Less potent than caspase-8 for BID cleavage |
| Calpains | Calcium-mediated stress | Generates truncated forms; may contribute to necroptosis crosstalk |
| Cathepsins B/D | Lysosomal membrane permeabilization | Alternative non-caspase BID cleavage; cathepsin B produces a tBID-like fragment |

The multiplicity of BID-activating proteases suggests that BID functions as a broad integrator of diverse death signals, converging on the mitochondrial pathway. #gap/unsourced — cathepsin B and calpain cleavage claims are referenced from review literature; primary sources for each should be added for full citation discipline.

## BID as a direct activator of BAK and BAX

Within the Bcl-2 family "embedded together" model (Chipuk et al. 2010), BH3-only proteins are subdivided by mechanism:

- **Direct activators** — bind and conformationally activate BAK/BAX directly: **BIM and BID** are the two canonical direct activators
- **Sensitizers / derepressors** — bind and neutralize anti-apoptotic Bcl-2 family members, freeing BAK/BAX from inhibition: BAD, NOXA, BIK, HRK
- **PUMA** — classified primarily as sensitizer/derepressor in Chipuk 2010 analysis (binds the anti-apoptotic repertoire broadly) though this classification remains debated; see [[puma]] and [[bak]] pages

tBID specifically engages the hydrophobic groove of both [[bak]] and [[bax]] via its BH3 helix (α3), triggering the N-terminal conformational change that initiates oligomerization. BID's BH3 domain has nanomolar-range affinity for BCL-xL; its affinity for BCL-2 and MCL-1 is lower [^chipuk2010]. Excess anti-apoptotic Bcl-2 family members can sequester tBID before it reaches BAK/BAX, which is how BCL-xL and MCL-1 overexpression in tumor and senescent cells protects from tBID-triggered MOMP.

The dual-target activation (both BAK and BAX) distinguishes tBID from sensitizers: a cell with only one effector (BAK or BAX) is still fully susceptible to tBID, whereas sensitizers that only neutralize MCL-1 (e.g., NOXA) fail to activate BAK if BCL-xL is simultaneously abundant.

## Anti-apoptotic binding affinities of BID BH3 domain

The BID BH3 peptide binds the hydrophobic grooves of anti-apoptotic Bcl-2 family members with differential affinity. Approximate affinities (from fluorescence polarization / ITC experiments; exact values are assay-dependent and vary across literature sources):

| Anti-apoptotic protein | BID BH3 affinity | Notes |
|---|---|---|
| [[bcl-xl]] | ~10–50 nM | High; BID BH3 is a preferred BCL-xL ligand |
| [[bcl-2]] | ~200–1000 nM | Moderate; lower than BCL-xL |
| [[mcl-1]] | ~100–500 nM | Moderate; less well-characterized than BIM-MCL-1 |
| BCL-w | ~100–500 nM | Moderate #gap/unsourced |
| A1 / BCL2A1 | ~low affinity | Low; not a primary BID target #gap/unsourced |

#gap/unsourced — the specific Kd values above are approximate estimates from the literature. A definitive affinity table sourced from a single assay system (e.g., Certo et al. 2006 or equivalent) should be cited here once the primary source is identified; these numbers should not be relied on for quantitative claims without verification.

## Genetic evidence: Bid-/- knockout mice

Yin et al. 1999 generated Bid-deficient mice via homologous recombination [^yin1999]. Key findings:

- **Bid-/- mice are viable and fertile** — no overt developmental phenotype; BID is not required for normal development or homeostasis under unstressed conditions
- **Resistance to Fas-induced hepatocellular apoptosis** — injection of anti-Fas antibody (Jo2) killed 100% of WT mice within 3 hours via fulminant liver failure; Bid-/- mice were strongly resistant, with significantly reduced hepatocellular apoptosis and cytochrome c release
- **Normal thymocyte apoptosis** — dexamethasone- and gamma-irradiation-induced thymocyte death was not affected by Bid deficiency, confirming that Bid is specifically required in pathways downstream of death receptors, not intrinsic stress-induced apoptosis
- **Conclusion:** BID is the essential amplification signal that connects Fas-pathway caspase-8 activation to the mitochondrial pathway specifically in type II cells (where direct caspase-8 activation of downstream caspases is insufficient)

The distinction between **type I** (direct caspase-8 → caspase-3, Bid-independent) and **type II** (requires Bid-mediated mitochondrial amplification) cell death was formalized with this knockout. Hepatocytes are a classic type II cell; thymocytes are type I for many stimuli.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Human BID P55957 is the functionally characterized protein; caspase-8 cleavage mechanism conserved |
| Phenotype conserved in humans? | partial | Human type II cell death amplification via BID demonstrated in primary cells; BID-null human data absent |
| Replicated in humans? | no | No human loss-of-function BID data from intervention studies |

## Kuwana 2002: BID, BAX, and lipids form supramolecular OMM pores

Kuwana et al. 2002 demonstrated that Bid (N/C-Bid, a protease-cleaved form), Bax, and mitochondrial lipids (particularly cardiolipin) cooperate to form supramolecular openings in the OMM large enough to release even very large macromolecules (2 megadalton fluorescein-dextran polymers) — resolving a long-standing debate about whether MOMP involves regulated pore formation or non-specific membrane lysis [^kuwana2002]. Key findings from this Cell paper:

- N/C-Bid alone at concentrations up to 720 nM was insufficient to release fluorescein-dextran from outer membrane vesicles (OMVs); monomeric BAX was required for permeabilization
- N/C-Bid + monomeric Bax together efficiently permeabilized OMVs and liposomes made from mitochondrial lipids; this required cardiolipin (liposomes lacking cardiolipin did not respond)
- The openings were supramolecular — both 10 kDa and 2000 kDa fluorescein-dextrans were released with equal efficiency, implying very large openings with no size selectivity
- Importantly, electron microscopy of treated OMVs showed **no visible membrane disruptions** — the openings left no morphological trace detectable by negative-stain or thin-section EM (Figure 4 of Kuwana 2002)
- BCL-xL inhibited permeabilization at the same concentrations effective with whole mitochondria; mutant BCL-xL (G138A) was inactive, confirming specificity

Note: The wiki previously stated that "anti-cardiolipin antibodies blocked tBID's membrane association" — this is not a finding of Kuwana 2002. The cardiolipin requirement was established by comparing liposomes with and without cardiolipin. Additionally, the wiki previously described the openings as "toroidal pores" — Kuwana 2002 does not use this term and the EM data showed no visible pores; the authors termed them "supramolecular openings."

This paper established that Bid-induced MOMP is mediated by cooperation between tBID and Bax acting on cardiolipin-containing mitochondrial outer membranes, without requiring matrix, inner membrane, or membrane permeability transition.

## Aging relevance

### Extrinsic-to-intrinsic pathway bridge in aging tissues

Aging tissues are characterized by elevated levels of death-receptor ligands (FasL, TNF-α, TRAIL) from senescent cells via [[sasp|SASP]], chronic low-grade inflammation, and immune surveillance of aberrant cells. In this environment, BID constitutes the central relay between:

1. **Paracrine SASP-mediated death signals** — SASP-derived TNF-α and FasL activate death receptors on neighboring cells → caspase-8 → BID cleavage → tBID → MOMP
2. **Tissue homeostasis** — BID-mediated amplification determines whether sub-threshold extrinsic signals translate to actual cell death, setting the threshold for SASP-driven paracrine killing of non-senescent cells

In aging tissues where senescent cells accumulate and SASP is chronic, dysregulation of BID activity (either enhanced cleavage or resistance in specific cell types) could contribute to inappropriate cell loss or persistence of damaged cells. Direct aging-specific evidence for BID regulation in aged human tissues is sparse. #gap/needs-human-replication

### Relevance to senescent cell apoptosis resistance

Senescent cells are resistant to MOMP despite elevated pro-apoptotic signaling — the "survival priming" model involves anti-apoptotic Bcl-2 family upregulation (MCL-1, BCL-xL, BCL-2) that sequesters tBID and activated BAX/BAK. Senolytic drugs (navitoclax, venetoclax, MCL-1 inhibitors) work in part by liberating endogenously-sequestered tBID from these anti-apoptotic guards, allowing BID-dependent activation of BAK/BAX to proceed. BID is thus an upstream component of the senolytic mechanism — tBID is likely constitutively generated at low levels from ongoing extrinsic signaling in senescent cells and held in check by elevated BCL-xL/MCL-1.

### Hepatocyte death and liver aging

The liver is a canonical type II cell death tissue where BID is the obligate amplification relay (per Yin 1999). Liver aging involves elevated TNF-α / Fas signaling (from gut-derived LPS, adipose inflammation, and local senescent hepatic stellate cells). BID-dependent hepatocellular apoptosis may be rate-limiting for age-associated non-alcoholic fatty liver disease (NAFLD) progression and for the loss of functional hepatocyte mass with age. #gap/no-mechanism #gap/needs-human-replication

### GenAge status

BID is not listed in the GenAge human database (Build 21, ~307 genes). BID's aging relevance is mechanistic — as the extrinsic-intrinsic pathway bridge — rather than from direct lifespan-modification evidence.

## Pathway membership

- [[apoptosis-pathway]] — extrinsic-to-intrinsic bridge; caspase-8 → BID → tBID → BAK/BAX → MOMP
- [[bcl-2-family-signaling]] — BH3-only activator; binding target of BCL-xL, BCL-2, MCL-1
- [[dna-damage-response]] — caspase-2 can cleave BID downstream of genotoxic stress (a DDR-mitochondria link distinct from the extrinsic pathway)

## Key interactors

- [[bak]] — primary OMM target of tBID; tBID binds BAK's hydrophobic groove, triggering the N-terminal conformational change and oligomerization
- [[bax]] — cytosolic target; tBID both promotes BAX translocation to OMM and activates BAX directly at the OMM
- [[bcl-xl]] — anti-apoptotic sequestrator of tBID; BCL-xL-tBID binding competition central to senolytic threshold
- [[bcl-2]] — secondary sequestrator; venetoclax liberates tBID from BCL-2 complexes
- [[mcl-1]] — moderate-affinity sequestrator; MCL-1 inhibitors (S63845) contribute to tBID liberation
- caspase-8 — primary activating protease; converts FL-BID to tBID (see [[apoptosis-pathway]])
- [[p53]] — transcriptionally induces PUMA and NOXA (which sensitize the pathway) but does not directly induce BID; p53 is not a direct BID transcriptional regulator

## Limitations and gaps

- `#gap/needs-human-replication` — Aging-specific changes in BID expression, cleavage rate, or tBID-mediated MOMP in aged human tissues are not characterized. The Bid-/- KO data is murine (type II hepatocyte death).
- `#gap/unsourced` — BH3 affinity table values (especially for MCL-1, BCL-w, A1) need primary quantitative source citation. The Chipuk 2010 review provides the qualitative hierarchy but not precise Kd values.
- `#gap/unsourced` — Cathepsin B and calpain cleavage of BID (generating tBID-like fragments) are referenced from review literature; primary biochemical studies needed.
- `#gap/needs-replication` — The 1998 Cell papers both use murine BID and define the caspase-8 cleavage site as Asp59 (murine LQTD motif, conserved in human). The previously stated claim that the murine site was Asp75 (with Asp59 being human) was incorrect — Asp75 is the granzyme B site in mouse per Li 1998. The precise residue number for caspase-8 cleavage in the canonical human 195-aa sequence should be confirmed against UniProt P55957.
- `#gap/no-mechanism` — Whether tBID promotes BAX translocation via direct interaction, lipid remodeling of the OMM (via cardiolipin), or both remains incompletely resolved; the Kuwana 2002 paper established cooperative action but not the precise choreography.
- BID is **not listed in GenAge human database** (Build 21). No direct longevity evidence in model organisms.
- The distinction between type I (BID-independent) and type II (BID-dependent) cell death is cell-type-specific; the classification of human cell types beyond hepatocytes is incompletely mapped. #gap/unsourced

## Footnotes

[^wang1996]: doi:10.1101/gad.10.22.2859 · Wang K, Yin XM, Chao DT, Milliman CL, Korsmeyer SJ · 1996 · Genes & Dev 10(22):2859–2869 · in-vitro · n=not reported · model: yeast two-hybrid (murine T-cell hybridoma cDNA library) + FL5.12 hematopoietic cells + Jurkat T cells + Rat-1 fibroblasts; original cloning of murine Bid as a BH3-domain-only protein (195 aa, predicted MW 21.95 kDa); demonstrated BCL-2/BCL-xL/BAX interaction; BH3 domain required for death agonist activity; BID lacks BH1, BH2, BH4, and C-terminal membrane anchor; cleavage mechanism not yet described; 956 citations; diamond OA; **locally available in archive**

[^li1998]: doi:10.1016/s0092-8674(00)81590-1 · Li H, Zhu H, Xu CJ, Yuan J · 1998 · Cell 94(4):491–501 · in-vitro · n=not reported · model: mouse spleen cDNA small pool library + cell-free system (MCF7/Fas, Jurkat) + murine BID; demonstrated caspase-8 cleaves murine BID at Asp59 (after LQTD motif) generating ~15 kDa C-terminal tBID that targets mitochondria; identified Asp75 as the separate granzyme B cleavage site; tBID induces mitochondrial redistribution and cytochrome c release independent of caspase activity; BCL-xL blocks these events; 4,413 citations; **locally available in archive** (bronze OA PDF)

[^luo1998]: doi:10.1016/s0092-8674(00)81589-5 · Luo X, Budihardjo I, Zou H, Slaughter C, Wang X · 1998 · Cell 94(4):481–490 · in-vitro · n=not reported · model: HeLa cell S-100 cytosol + mouse liver mitochondria + recombinant caspase-8; purified Bid as the cytochrome c releasing factor (CCRF); confirmed caspase-8 cleavage at Asp59 (after LQTD site, conserved between human and mouse Bid); C-terminal ~15 kDa fragment translocates to mitochondria; BCL-2 overexpression antagonizes Bid; BH3 mutant (G94E) abolishes cytochrome c releasing activity; 3,618 citations; **locally available in archive** (bronze OA PDF)

[^zha2000]: doi:10.1126/science.290.5497.1761 · Zha J, Weiler S, Oh KJ, Wei MC, Korsmeyer SJ · 2000 · Science 290(5497):1761–1765 · in-vitro + in-vivo · n=not reported · model: murine BID cell-free system (isolated mouse liver mitochondria + recombinant NMT) + Jurkat cells (metabolic labeling) + MCF7/Fas cells (in vivo imaging); established post-cleavage N-myristoylation of tBID at Gly60 (murine numbering) as required for efficient OMM targeting; G60A mutation abolishes myristoylation; ~100% vs <30% mitochondrial association for myr-p15 vs G60A-p15; myristoylation linkage confirmed as amide bond (KOH/hydroxylamine resistant); 552 citations; **locally available in archive**

[^yin1999]: doi:10.1038/23730 · Yin XM, Wang K, Gross A, Zhao Y, Zinkel S, Klocke B, Bhatt V, Korsmeyer SJ · 1999 · Nature 400(6747):886–891 · in-vivo · n=not reported · model: Bid-/- mice (homologous recombination); demonstrated Bid-/- mice viable and resistant to Fas-induced hepatocellular apoptosis; established type I/type II cell distinction; 990 citations; **not_oa — no local PDF; KO phenotype claims on this wiki page are unverified against the full text** #gap/no-fulltext-access

[^kuwana2002]: doi:10.1016/s0092-8674(02)01036-x · Kuwana T, Mackey MR, Perkins G, Ellisman MH, Latterich M, Schneiter R, Green DR, Newmeyer DD · 2002 · Cell 111(3):331–342 · in-vitro · n=not reported · model: isolated outer membrane vesicles (OMVs) + liposomes from Xenopus/mitochondrial lipids; demonstrated N/C-Bid + monomeric Bax + cardiolipin cooperate to form supramolecular OMM openings permeable to dextrans up to 2 MDa; EM showed no visible pore morphology; 1,454 citations; **locally available in archive**

[^chipuk2010]: doi:10.1016/j.molcel.2010.01.025 · Chipuk JE, Moldoveanu T, Llambi F, Parsons MJ, Green DR · 2010 · Mol Cell 37(3):299–310 · review · comprehensive unified model of BCL-2 family activation; classifies BID as direct activator (with BIM); 1,398 citations; **locally available in archive**
