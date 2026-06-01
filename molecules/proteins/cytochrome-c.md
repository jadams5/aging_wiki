---
type: protein
aliases: [CYCS, CYC, hCcS, somatic cytochrome c, cytochrome c somatic]
uniprot: P99999
ncbi-gene: 54205
hgnc: 19986
mouse-ortholog: Cycs
ensembl: ENSG00000172115
druggability-tier: 2
caused-by: []
causes: []
key-domains: [heme-c-binding, alpha-helical-bundle]
key-ptms: [N-terminal-acetylation-Gly2, Tyr49-phosphorylation, Tyr98-phosphorylation, Lys-acetylation, Lys-succinylation]
pathways: ["[[apoptosis-pathway]]", "[[oxphos]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[cellular-senescence]]"]
sens-categories: ["[[apoptosenes]]"]
known-interactors: ["[[apaf-1]]", "[[bak]]", "[[bax]]", "[[bcl-xl]]", "[[bcl-2]]"]
genage-id: null
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Liu 1996, Kluck 1997, Goldstein 2000, Bossy-Wetzel 1998, and Frezza 2006 verified against local PDFs. Yang 1997 (not_oa) and Kagan 2005 (not_oa) unverifiable — relevant claims tagged. UniProt P99999 residue numbering verified via REST API. Canonical-DB identity fields (PubChem, DrugBank, HGNC numeric) not independently re-queried."
---

# Cytochrome c (CYCS)

A small (~12 kDa), evolutionarily ancient heme protein that occupies the mitochondrial intermembrane space and performs two functionally distinct roles: **electron carrier** between Complex III and Complex IV of the electron transport chain during normal respiration, and **apoptosis initiator** when released to the cytosol following mitochondrial outer membrane permeabilization (MOMP). This dual-function architecture means that disrupting cytochrome c simultaneously impairs cellular bioenergetics and primes or abrogates the intrinsic apoptosis pathway — a mechanistic coupling with direct relevance to the apoptosis-resistance phenotype of senescent cells.

## Identity

- **UniProt:** P99999 (CYC_HUMAN)
- **Gene:** CYCS (synonym: CYC)
- **NCBI Gene:** 54205
- **HGNC:** 19986
- **Ensembl:** ENSG00000172115
- **Mouse ortholog:** Cycs (one-to-one; >99% sequence identity at the protein level)
- **Length:** 105 aa precursor → 104 aa mature (removal of initiator Met1; N-terminal acetylation of Gly2 in mature form); canonical single isoform
- **Molecular weight:** ~11.75 kDa (11,749 Da per UniProt)
- **Isoform note:** A testis-specific paralog encoded by *CYCT* (UniProt Q9NTK0) exists; the aging-relevant isoform throughout this page is the somatic CYCS product.

## Structure

Cytochrome c folds into a compact **5-helix bundle** with approximate dimensions 26 × 32 × 33 Å. The prosthetic heme c group is covalently attached to the polypeptide backbone via **thioether linkages** to Cys15 and Cys18 (UniProt P99999 precursor numbering; equivalent to Cys14/Cys17 in the mature 104 aa form after Met1 removal). Axial heme iron coordination is provided by **His19** (proximal) and **Met81** (distal) in precursor numbering (His18/Met80 in mature-form numbering). Reduction of the iron (Fe³⁺ → Fe²⁺) is required for electron donation to Complex IV. The protein carries a net basic charge (pI ~10), which facilitates electrostatic docking to acidic patches on both Complex III (cytochrome bc1) and Complex IV (cytochrome c oxidase) during electron shuttling. This same basic surface also mediates its interaction with the acidic WD40 repeats of [[apaf-1]] in the apoptosome.

## Discovery and evolution

The cytochromes were first characterized spectroscopically by David Keilin in 1925, who identified three distinct absorption bands (a, b, c) in respiring cells — the origin of the cytochrome naming convention. The somatic human sequence was determined from heart tissue by Matsubara and Smith in the early 1960s. Cytochrome c is one of the most evolutionarily conserved eukaryotic proteins: **human and mouse Cycs are >99% identical** at the amino acid level; human vs yeast iso-1-cytochrome c share approximately 70% identity; even the heme-attachment Cys residues and axial His/Met ligands are invariant across eukaryotes. This extreme conservation reflects the double structural constraint imposed by two independent protein-protein interfaces (ETC complexes vs apoptosome).

## Function 1 — Electron transport chain

In the mitochondrial intermembrane space, cytochrome c cycles between its reduced (Fe²⁺, ferrocytochrome c) and oxidised (Fe³⁺, ferricytochrome c) forms as it shuttles single electrons from **Complex III (cytochrome bc1)** to **Complex IV (cytochrome c oxidase, CcO)**. One molecule of cytochrome c picks up one electron from the Rieske iron-sulfur protein / cytochrome c1 subunits of bc1, diffuses laterally across the IMS, and donates the electron to the binuclear CuA center of CcO. Four such transfers are required per O₂ molecule reduced to water. The overall driving force is the redox potential difference: ΔE' ≈ +220 mV for the bc1→CcO segment, which contributes to the proton motive force used by ATP synthase.

Cytochrome c is **not tightly membrane-bound**; it is loosely associated with the inner mitochondrial membrane (IMM) via cardiolipin electrostatic interactions. This loose tethering is mechanistically important: it allows cytochrome c to be released when cardiolipin is oxidised or when the OMM is permeabilised, and it means that mitochondrial cristae geometry (controlled by [[opa1]] oligomers at cristae junctions) limits how much cytochrome c can escape in a given permeabilisation event.

## Function 2 — Apoptosis initiation

Upon receipt of intrinsic apoptotic signals (DNA damage, oncogene activation, oxidative stress, growth-factor withdrawal), [[bax]] and/or [[bak]] undergo conformational activation, oligomerise, and form lipid-lined pores in the outer mitochondrial membrane (MOMP) [^goldstein2000]. Anti-apoptotic proteins ([[bcl-xl]], [[bcl-2]], MCL-1) restrain this process by sequestering activated BAX/BAK or their upstream BH3-only activators.

Once MOMP occurs, cytochrome c is released from the IMS into the cytosol. This release is **rapid, essentially complete, and kinetically invariant** across cell types and apoptotic stimuli — the entire releasable cytochrome c pool exits within approximately 5 minutes at the single-cell level, once release initiates [^goldstein2000]. Release precedes mitochondrial membrane-potential collapse and does not require it [^bossywetzel1998].

In the cytosol, cytochrome c binds **APAF-1** and, together with **dATP** (or ATP, per subsequent work), enables APAF-1 oligomerisation into the **apoptosome** — a heptameric wheel-like structure (~1.4 MDa) — which recruits and activates **procaspase-9** via CARD domain interactions [^liu1996]. Liu et al. (1996) identified cytochrome c as the essential APAF-2 component required for dATP-dependent CPP32/caspase-3 activation in HeLa cell-free extracts; the structural mechanism (cytochrome c binding to APAF-1's WD40 domain and relieving auto-inhibition) was established by later structural studies. Active caspase-9 then cleaves and activates the effector caspases **caspase-3** and **caspase-7**, committing the cell to apoptotic execution. This constitutes the canonical intrinsic (mitochondrial) apoptosis pathway.

**BCL-2 and BCL-xL** prevent apoptosis primarily by blocking MOMP upstream, thereby preventing cytochrome c release rather than interfering with the apoptosome once cytochrome c has escaped [^yang1997] [^kluck1997]. #gap/unsourced — Whether cytoplasmic BCL-2 can directly inhibit the apoptosome at physiological concentrations is debated; the primary locus of BCL-2 family control is upstream (OMM).

## Cardiolipin oxidation and the release mechanism

A distinct, quantitatively important mechanism facilitating cytochrome c release involves its **peroxidase activity toward cardiolipin (CL)**. In healthy mitochondria, ~15–20% of total cytochrome c is tightly bound to CL on the IMM inner leaflet via a hydrophobic interaction that partially unfolds the protein. Early in apoptosis, reactive oxygen species generated by the electron transport chain oxidise CL to oxidised CL (CLox). Cytochrome c acts as a peroxidase to catalyse this oxidation, consuming H₂O₂ [^kagan2005]. The resulting CLox has reduced affinity for cytochrome c, releasing it into the aqueous IMS pool and making it available for OMM permeation via BAX/BAK pores. This peroxidase amplification loop means cytochrome c participates actively in its own release — a feed-forward mechanism coupling ETC dysfunction (elevated ROS → H₂O₂) to apoptosis commitment. #gap/needs-replication — The quantitative contribution of the cardiolipin oxidation loop vs simple MOMP pore diffusion is not fully resolved in intact cells.

## OPA1 and cristae remodeling gate cytochrome c release

The mitochondrial GTPase [[opa1]] forms oligomeric assemblies that narrow mitochondrial **cristae junctions** — the tubular membrane connections between the cristae lumen and the IMS proper. Frezza 2006 states ~15–20% of cytochrome c is IMS-free in healthy mitochondria; the remaining ~80–85% is sequestered inside cristae and inaccessible without cristae remodeling. Frezza et al. (2006) showed that OPA1 oligomers keep cristae junctions tight, and that BID triggers their disassembly, widening junctions and mobilising the cristae-sequestered cytochrome c pool [^frezza2006]. OPA1 knockdown or expression of fusion-defective OPA1 mutants augmented cytochrome c release and apoptosis, while OPA1 overexpression retarded release. Critically, OPA1 does **not** interfere with BAX/BAK activation — OMM permeabilisation by BAX/BAK is still required for cytochrome c to exit the mitochondrion; OPA1 controls whether the full cristae-stored pool is mobilised once the OMM is permeabilised. In cells lacking OPA1 disassembly, MOMP leads to only partial cytochrome c release. OPA1's antiapoptotic function is independent of its role in mitochondrial fusion (demonstrated in Mfn1-null MEFs).

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | CYCS sequence >99% identical mouse/human; apoptosome assembly mechanism conserved |
| Phenotype conserved in humans? | yes | Human intrinsic apoptosis requires cytochrome c release; biochemically demonstrated |
| Replicated in humans? | yes | Cell-free reconstitution (Liu 1996) used HeLa extracts; Yang/Kluck 1997 also used human cell lines |

## Pathogenic variant — Thrombocytopenia 4 (THC4)

A heterozygous **G42S** missense variant in CYCS causes autosomal-dominant **Thrombocytopenia 4** (MIM:612004) — mild thrombocytopenia due to accelerated megakaryocyte apoptosis. The G42S substitution enhances APAF-1 binding and pro-apoptotic activity without detectably altering ETC electron transfer. This natural separation-of-function allele confirms that the apoptotic and ETC functions of cytochrome c can be at least partially uncoupled. #gap/needs-replication — G42S was characterised in a single family; functional mechanistic data come from in-vitro reconstitution.

## Role in aging

### ETC dysfunction in aging tissues

Mitochondrial dysfunction is a [[mitochondrial-dysfunction|hallmark of aging]]. Cytochrome c participates in ETC dysfunction in at least two ways:

1. **Stoichiometric reduction:** mtDNA mutations and deletions accumulate with age in post-mitotic tissues (cardiomyocytes, neurons, skeletal muscle), reducing expression of Complex III and Complex IV subunits. Because cytochrome c activity depends on a functional redox interface with both complexes, its electron-shuttling turnover decreases as partner complex abundance falls. #gap/needs-human-replication — Direct measurement of cytochrome c protein abundance in aged human tissue is sparse.

2. **Phosphorylation-mediated down-regulation:** Tyr49 and Tyr98 phosphorylation (detected in bovine heart) is reported to reduce electron-transfer turnover to Complex IV. Whether the balance of these phosphorylation states changes with age in human tissue is unknown. #gap/unsourced

### Apoptosis resistance of senescent cells

Senescent cells, which accumulate with age and drive the aging phenotype in part via the [[sasp|SASP]], are characterised by resistance to apoptosis that normally clears damaged cells. One proposed mechanism is that [[bcl-xl]], [[bcl-2]], and MCL-1 are upregulated in senescent cells, maintaining survival against proapoptotic signals. Crucially, if BAX/BAK pore formation is blocked upstream, cytochrome c is never released and the apoptosome never assembles — CYCS expression levels are irrelevant. The relevance of cytochrome c to senescent-cell apoptosis resistance is therefore **indirect**: the bottleneck is OMM permeabilisation, not apoptosome assembly competence. Whether apoptosome assembly capacity itself (APAF-1 levels, dATP availability, caspase-9 activation) is impaired in senescent cells is a secondary, largely open question. #gap/no-mechanism

### Dual-function coupling: a note on interpretation

The coupling of cytochrome c's two functions creates an important interpretive constraint for aging biology: a cell cannot lose cytochrome c ETC function without also losing some apoptotic signalling capacity. Conversely, cytochrome c release during apoptosis necessarily impairs ETC function in the dying cell. This means that partial MOMP events (sub-lethal cytochrome c release) could simultaneously impair respiration and generate an incomplete, subthreshold apoptotic signal — a potential mechanism for mitochondrial stress-mediated chronic low-grade damage without committed apoptosis. #gap/no-mechanism

## Pathway membership

- [[apoptosis-pathway]] — central cofactor; cytosolic release triggers apoptosome assembly
- [[oxphos]] — electron carrier; Complex III → Complex IV electron shuttle (implicit stub)
- [[mitophagy]] — dysfunctional mitochondria with impaired cytochrome c ETC function are mitophagy substrates

## Key interactors

- [[apaf-1]] — direct cytosolic binding partner; WD40 repeats; drives apoptosome assembly (implicit stub, Tier B/C)
- [[bak]] / [[bax]] — OMM pore-forming proteins whose activation gates cytochrome c release
- [[bcl-xl]] / [[bcl-2]] — upstream restrainers of BAX/BAK; indirect regulators of cytochrome c release
- [[opa1]] — controls cristae junction width; determines completeness of cytochrome c release (implicit stub)
- [[bid]] — cleaved tBID triggers OPA1 oligomer disassembly and full cytochrome c mobilisation

## Limitations and knowledge gaps

- **Aging-specific cytochrome c abundance data in human tissue** — direct quantitative proteomics in aged vs young tissues is sparse. #gap/unsourced
- **Phosphorylation-state changes with age** — Tyr49/Tyr98 phosphorylation regulation in aged tissue unknown. #gap/unsourced
- **Senescent-cell apoptosome competence** — whether APAF-1 abundance or dATP availability is limiting for apoptosome assembly in senescent cells has not been systematically measured. #gap/no-mechanism
- **Cardiolipin oxidation loop in vivo** — quantitative contribution to cytochrome c release in intact aged cells is unclear. #gap/needs-replication
- **GenAge entry** — CYCS is not present in the GenAge-human database as of 2026-05-04; this likely reflects the absence of a direct lifespan or aging study rather than evidence of non-involvement. #gap/needs-canonical-id

## Footnotes

[^liu1996]: [[studies/liu-1996-cytochrome-c-apoptosis]] · n=not-specified · in-vitro · model: HeLa cell-free extracts · doi:10.1016/s0092-8674(00)80085-9 · 5,151 citations · local PDF available
[^yang1997]: doi:10.1126/science.275.5303.1129 · in-vitro · model: 293T cells / Xenopus egg extracts · Yang et al. 1997 Science 275:1129–1132 · 4,916 citations · not_oa; #gap/no-fulltext-access
[^kluck1997]: doi:10.1126/science.275.5303.1132 · in-vitro · model: CEM cells / Xenopus egg extracts with isolated mitochondria · Kluck et al. 1997 Science 275:1132–1136 · 4,717 citations · local PDF available
[^goldstein2000]: doi:10.1038/35004029 · in-vitro (single-cell imaging) · model: HeLa cells · Goldstein et al. 2000 Nat Cell Biol 2:156–162 · 1,056 citations · local PDF available
[^bossywetzel1998]: doi:10.1093/emboj/17.1.37 · in-vitro · model: CEM / HeLa cells · Bossy-Wetzel et al. 1998 EMBO J 17:37–49 · 1,227 citations · local PDF available (via a local paper archive)
[^kagan2005]: doi:10.1038/nchembio727 · in-vitro / in-vivo · model: liposomes / mouse heart mitochondria · Kagan et al. 2005 Nat Chem Biol 1:223–232 · 1,225 citations · not_oa; #gap/no-fulltext-access
[^frezza2006]: doi:10.1016/j.cell.2006.06.025 · in-vitro / in-vivo · model: MEFs / mouse liver · Frezza et al. 2006 Cell 126:177–189 · 1,616 citations · local PDF available (via a local paper archive)
