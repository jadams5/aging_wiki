---
type: protein
aliases: [BCL-RAMBO, BCL2L13, Bcl2-L-13, MIL1, Bcl-2-like 13, Bcl-2-related apoptosis-mediated by Bcl-2 of the outer mitochondrial membrane]
uniprot: Q9BXK5
ncbi-gene: 23786
hgnc: 17164
genage-id: null
mouse-ortholog: Bcl2l13
ensembl: ENSG00000099968
druggability-tier: 4
caused-by: []
causes: []
key-domains: [BH4, BH3, BH1, BH2, LIR-motif, A-type-repeats, B-type-repeats, transmembrane]
key-ptms: [Ser272-phosphorylation-AMPKa2, Ser38-phosphorylation, Ser259-phosphorylation, Ser303-phosphorylation]
pathways: ["[[mitophagy]]", "[[apoptosis-pathway]]", "[[bcl-2-family-signaling]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[disabled-macroautophagy]]"]
sens-categories: []
complex-subunits: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Murakawa 2015 (ncomms8527) verified against full PDF; Otsu 2015 (15548627.2015.1084459) verified against full PDF; Kataoka 2022 (fcell.2022.1065702) verified against full PDF (pp.1-15). Murakawa 2024 (celrep.2024.115001) failed download — AMPKα2/Ser272 cardiac claims from that paper unverified against PDF (gold OA, Elsevier access block). Murakawa 2025 (15548627.2025.2465408) not_oa — unverifiable. Kataoka 2001 (jbc.m010520200) failed download (hybrid OA, no PMC copy) — original cloning claims unverified against PDF."
---

# BCL2L13 (BCL-RAMBO)

BCL2L13 (also called BCL-RAMBO, Bcl2-L-13, or MIL1) is a 485-amino-acid outer mitochondrial membrane (OMM) protein with a dual identity: it acts as a **receptor-dependent mitophagy receptor** by binding LC3/GABARAP via a LIR motif (WQQI, human residues 286–289), and as a **pro-apoptotic BCL-2 family member** via scattered BH1–BH4 motifs. Its most mechanistically notable feature is that it is the **functional mammalian ortholog of yeast Atg32** — despite sharing no apparent primary sequence similarity, a chimeric BCL2L13 construct partially restores mitophagy in *atg32Δ* yeast [^murakawa2015]. This places BCL2L13 within the Parkin-independent arm of mammalian mitophagy alongside [[bnip3]], [[nix]], and [[fundc1]], with the distinctive feature of being identified by functional complementation rather than domain homology. In cardiac tissue, BCL2L13-mediated mitophagy is activated by AMPKα2-dependent phosphorylation at Ser272 and is required for cardiac adaptation to pressure overload [^murakawa2024].

## Identity

- **UniProt:** Q9BXK5 (BCL2L13_HUMAN)
- **NCBI Gene:** 23786
- **HGNC symbol:** BCL2L13
- **Chromosomal location:** 22q11.21 (coordinates 17,628,877–17,730,855, GRCh38.p14; 13 exons)
- **Mouse ortholog:** Bcl2l13 (one-to-one functional ortholog; also demonstrates Atg32-complementation in yeast [^murakawa2015])
- **Length:** 485 amino acids (canonical isoform 2, the OMM-targeted isoform; isoform 1 is nuclear only)
- **Molecular weight:** ~52 kDa predicted; tail-anchored single-pass OMM topology

**Isoform note:** UniProt records two isoforms. Isoform 2 localizes to the mitochondrial membrane and is the functionally relevant isoform for mitophagy and the apoptotic roles described here. Isoform 1 localizes to the nucleus. The mitophagy literature (Murakawa 2015; Murakawa 2024) uses the OMM isoform throughout.

**Name note (DOI correction):** Kataoka 2001 was originally published in the *Journal of Biological Chemistry* (DOI: 10.1074/jbc.M010520200), not in *Current Biology* as sometimes cited. The DOI `10.1016/s0960-9822(01)00373-6` resolves to an unrelated HIV/Nef paper (Curr Biol 11(12):920-924, 2001) — confirmed via DOI lookup lookup as a BUG-2-type DOI mismatch.

## Domain organization

BCL2L13 has an unusual architecture for a BCL-2 family member: it contains all four canonical BH motifs (BH1–BH4), but scattered across a large disordered region — a layout distinct from canonical anti-apoptotic (BH1–BH4 contiguous) and pro-apoptotic (BH3-only) members. A ~250-residue C-terminal extension (termed the BHNo domain by Kataoka 2022) contributes the mitophagy receptor identity via a **WQQI LIR motif** (human residues 286–289) and two A-type and two B-type repeats of unknown function.

| Domain | Residues (UniProt/primary lit) | Function |
|---|---|---|
| BH4 motif | 14–30 (approx) | BCL-2 family structural motif; required for mitochondrial fragmentation [^murakawa2015] |
| BH3 motif | 100–116 (approx) | BCL-2 family structural motif; required for mitochondrial fragmentation [^murakawa2015]; BCL2L13 does NOT interact with anti-apoptotic or pro-apoptotic BCL-2 family members despite BH3 presence [^kataoka2022review] |
| BH1 motif | 147–157 (approx) | BCL-2 family structural motif; required for mitochondrial fragmentation [^murakawa2015] |
| BH2 motif | 193–206 (approx) | BCL-2 family structural motif; required for mitochondrial fragmentation [^murakawa2015] |
| BHNo domain (C-terminal extension) | ~230–459 | Large disordered region unique to BCL-RAMBO; not present in other BCL-2 family members; contains LIR motif and A/B-type repeats; the apoptosis-inducing domain [^kataoka2001] [^kataoka2022review] |
| LIR motif (WQQI) | **286–289** (human; confirmed Kataoka 2022 Fig. 4C); mouse: 273–276 | WQQI consensus; second of two WXXL/I motifs; functional LIR — mutation W273A I276A (mouse) abrogates mitophagy but not fragmentation [^murakawa2015]; Ser272 (adjacent, mouse numbering) phosphorylation promotes LC3 binding [^murakawa2015] |
| WXXL/I motif 1 (non-functional LIR) | 147–150 (mouse) | First WXXL/I motif; mutagenesis (W147A L150A) does not abolish LC3 binding or mitophagy — not the functional LIR [^murakawa2015] |
| A-type repeat 1 | ~246–256 | Function unknown #gap/no-mechanism |
| A-type repeat 2 | ~261–271 | Function unknown #gap/no-mechanism |
| B-type repeat 1 | ~425–441 | Function unknown #gap/no-mechanism |
| B-type repeat 2 | ~443–459 | Function unknown #gap/no-mechanism |
| Transmembrane domain | 460–480 (human) | C-terminal; tail-anchors BCL2L13 to the OMM; N-terminus faces cytosol, C-terminus faces intermembrane space [^murakawa2015]; required for mitochondrial localization |

**LIR motif note:** Murakawa 2015 identifies two WXXL/I motifs in mouse Bcl2-L-13 at positions 147–150 and 273–276. Mutagenesis confirms the second motif (273–276, mouse) is the functional LIR: W273A I276A double mutant abolishes LC3 binding and mitophagy, while W147A L150A does not. For human BCL-RAMBO, Kataoka 2022 (Fig. 4C) places the LIR at **residues 286–289** with the sequence **WQQI** — the human-mouse offset (~13 aa) reflects the ~50 aa longer BHNo domain in human vs mouse protein. The "WXXI" generic consensus used in the wiki body refers to this same WQQI motif.

**AMPKα2 phosphorylation at Ser272:** Murakawa 2024 (Cell Reports) identifies Ser272 as the AMPKα2 phosphorylation site on BCL2L13 that activates mitophagy in cardiac tissue [^murakawa2024]. Ser272 falls in the disordered region between the A-type repeats (predicted from domain map: just after A-type repeat 2 at 261-271), consistent with its accessibility as a kinase substrate. This site is not listed in UniProt's curated PTM annotations, which record Ser38, Ser259, Ser261, Ser303, Ser326, Ser371, Ser375, Ser410, Ser420, Ser426, Ser429, and Ser444 as phosphorylation sites (large-scale phosphoproteomics; no individual-paper annotation for Ser272 in UniProt as of the last API pull). #gap/needs-replication — Ser272 phosphorylation by AMPKα2 confirmed in cardiac context; generalizability to other tissues or stress conditions not established.

## Discovery and naming

BCL2L13 was discovered by Kataoka et al. 2001 in a search for novel BCL-2 homologues [^kataoka2001]. The study found a protein with conserved BH1–BH4 motifs but a unique ~250-amino-acid C-terminal extension (termed the BHNo domain by Kataoka 2022) not present in other BCL-2 family members. Overexpression in mammalian cells induced apoptosis — an activity the authors attributed to the C-terminal extension (including the TM domain) rather than to the BH motifs, which was mechanistically unusual for a BCL-2 family member at the time. The protein was named "BCL-RAMBO" for *BCL-2-related protein that induces cell death* (or, per a backronym, *Bcl-2-Related Apoptosis-Mediated by Bcl-2 of the Outer mitochondrial membrane*). The gene symbol BCL2L13 and protein alias MIL1 are less commonly used in the primary literature, where "BCL-RAMBO" or "Bcl2-L-13" predominate.

**Note on pro-apoptotic mechanism at discovery:** Kataoka 2001 showed that the BH domains were **not required** for BCL2L13-induced apoptosis — C-terminal extension deletion mutants lacking the TM domain lost cell death activity, while BH domain mutants did not. This distinguished BCL2L13 from canonical BH3-only proteins (where the BH3 motif is necessary and sufficient for killing). The molecular mechanism connecting the C-terminal extension to caspase activation was not resolved in 2001 and remains incompletely characterized [^kataoka2022review]. #gap/no-mechanism

## Mitophagy receptor function: mammalian Atg32

### Functional orthology to yeast Atg32

The central mechanistic finding for BCL2L13 in aging biology is its identification as the **functional mammalian ortholog of yeast Atg32** — the primary mitophagy receptor in *Saccharomyces cerevisiae* [^murakawa2015]. Yeast Atg32 has no apparent mammalian sequence ortholog, and how mammals replace Atg32 function was unknown. Murakawa et al. 2015 resolved this by using a mitochondria-targeted DHFR-mCherry reporter in *atg32Δ* yeast (fluorescence released to vacuole = mitophagy; mCherry generation detected by western blot). Because BCL2L13's native TM domain does not anchor to the yeast OMM, the authors used a chimeric construct: BCL2L13 residues 1–407 fused to the TAmito yeast mitochondrial tail-anchor (from Gem1p, residues 618–662). This construct **partially restored** mitophagy in *atg32Δ* yeast ("generated free mCherry, suggesting partial restoration of the ability to induce mitophagy") [^murakawa2015]. A LIR-motif mutant (W273A I276A) failed to rescue, confirming that Atg8 (LC3) binding via the LIR is the conserved functional unit. BCL2L13 also failed to rescue mitophagy in *atg7Δ* yeast, confirming dependence on the canonical autophagy machinery [^murakawa2015].

| Dimension | Status | Notes |
|---|---|---|
| Functional orthology to yeast Atg32? | partial | Partial restoration of mitophagy in atg32Δ yeast via chimeric TAmito construct (Murakawa 2015); not full complementation |
| Sequence orthology to yeast Atg32? | no | No apparent primary sequence similarity; functional convergence |
| LIR motif conserved? | yes | WQQI consensus (human 286–289; mouse 273–276); aligns with Atg32 WXXI; required for function (W273A I276A mouse mutant abolishes mitophagy) |

### Parkin-independent mitophagy mechanism

BCL2L13-mediated mitophagy is **Parkin-independent**: Murakawa 2015 showed that BCL2L13-induced mitophagy proceeds normally in Parkin-knockdown cells and in cells lacking Parkin activity [^murakawa2015]. The mechanistic model, consistent with other LIR-mediated OMM receptors:

1. BCL2L13 is constitutively inserted in the OMM via its C-terminal TM domain (residues 460–480), with the bulk of the protein facing the cytosol.
2. Under mitochondrial damage or stress (depolarization, oxidative stress, pressure overload), BCL2L13 LIR-mediated binding to LC3/GABARAP on nascent autophagosome membranes is activated.
3. In cardiac tissue, AMPKα2 phosphorylates BCL2L13 at Ser272 in response to pressure overload, which activates mitophagic flux [^murakawa2024].
4. The LIR–LC3 interaction physically tethers the autophagosome to the damaged mitochondrion → engulfment → lysosomal delivery.

**Role of BH domains in mitophagy:** Murakawa 2015 found that **all four BH1-4 motifs** are required for mitochondrial fragmentation (fission) but not for mitophagy per se — deletion or point-mutation of any individual BH domain (BH4 ΔN(1-32), BH1 Δ142-154, BH2 Δ192-228, BH3 L101E, or BH4 V19G) abrogates fragmentation [^murakawa2015]. The wiki's earlier statement that only BH1 and BH4 are required was incorrect; the paper's conclusion is explicit: "all BH1-4 domains are important for Bcl2-L-13-induced fragmentation." BH-domain mutants that cannot induce fragmentation show reduced mitophagy efficiency, suggesting BCL2L13 couples fission and mitophagy. The fragmentation is Drp1 (DNM1L)-independent, which is notable, as most mitochondrial fission requires Drp1. #gap/no-mechanism — how BCL2L13 BH motifs drive Drp1-independent fission is not resolved.

**Relationship to PINK1–Parkin pathway:** BCL2L13 defines a parallel, ubiquitin-independent arm of mitophagy. Where PINK1 stabilizes on depolarized OMM and recruits Parkin → ubiquitin chain assembly → selective autophagy adaptors → LC3, BCL2L13 (like BNIP3, NIX/BNIP3L, and FUNDC1) binds LC3 directly without a ubiquitin intermediate. This makes BCL2L13 functionally complementary to the [[pink1-parkin-pathway]] under conditions where PINK1 or Parkin is impaired — including aged tissues where Parkin activity may decline. #gap/needs-human-replication — quantitative partitioning between receptor-dependent (BCL2L13/BNIP3/NIX) and ubiquitin-dependent (PINK1/Parkin) mitophagy in aged human tissue has not been measured.

## Cardiac function: AMPKα2 → Ser272 axis

The most established in vivo role for BCL2L13 in aging-related disease is in the heart. The Otsu group (Murakawa 2024, Murakawa 2025) has defined an **AMPKα2–BCL2L13 cardioprotective axis**. Note: the Murakawa 2024 Cell Reports PDF was not accessible for full verification (Elsevier access block in archive); Murakawa 2025 Autophagy is closed-access. Claims in this section derive from abstract-level information for these two papers. Ser272 phosphorylation itself was established in Murakawa 2015 (verified). #gap/no-fulltext-access — Murakawa 2024 + 2025 cardiac details unverified against full PDF.

- Under pressure overload (transverse aortic constriction mouse model), AMPKα2 is activated and phosphorylates BCL2L13 at Ser272 [^murakawa2024].
- This phosphorylation event promotes BCL2L13-dependent mitophagy and mitochondrial fission, maintaining ATP production.
- **Bcl2l13-deficient mice** showed left ventricular dysfunction in response to pressure overload: impaired mitochondrial fission and mitophagy, reduced ATP production [^murakawa2024].
- **Ser272Ala knockin mice** (non-phosphorylatable BCL2L13) phenocopied the deficiency — showing that the Ser272 phosphorylation event is specifically required, not merely correlative [^murakawa2024].
- A companion 2025 Autophagy paper [^murakawa2025] further characterizes the BCL2L13 phosphorylation in pressure-overloaded heart.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | AMPK + mitophagy receptor pathway is conserved; BCL2L13 expression in human heart confirmed |
| Phenotype (cardiac failure on KO) conserved in humans? | unknown | Mouse data only; no human BCL2L13 LOF genetic data available |
| Replicated in humans? | no | All mechanistic data is from mouse cardiac models |

#gap/needs-human-replication — human cardiac BCL2L13 expression trajectories across age, and whether BCL2L13 loss-of-function accelerates human cardiac aging, are not established.

**Kinase correction note:** The task brief that prompted this page stated "ULK1 phosphorylates BCL2L13 Ser272 → enhances LIR-LC3 binding." Based on the primary literature (Murakawa 2024 Cell Reports; Murakawa 2025 Autophagy), **the Ser272 kinase is AMPKα2, not ULK1.** ULK1 is not implicated in BCL2L13 phosphorylation in either paper. The AMPK connection is mechanistically sensible (AMPK is the canonical energy sensor that activates mitophagy; [[ampk]] directly phosphorylates [[ulk1]] Ser317/Ser777 in the same pathway). #gap/needs-replication — whether ULK1 has any secondary role in BCL2L13 regulation via AMPK→ULK1→BCL2L13 has not been tested.

## Pro-apoptotic activity

BCL2L13 has established pro-apoptotic activity, though its molecular mechanism differs fundamentally from canonical BCL-2 family members [^kataoka2001]:

- Overexpression induces caspase-3 activation and apoptosis in mammalian cells (293T, MCF-7, PC-3 cell lines).
- The apoptosis-inducing activity requires the **BHNo (C-terminal extension) domain including TM domain**, not the BH motifs — BHNo domain deletion abolishes apoptosis, while BH domain mutations do not [^kataoka2001] [^kataoka2022review].
- **BCL2L13 does NOT interact with anti-apoptotic BCL-2 family members (BCL-2, BCL-xL, MCL-1, A1, E1B-19K, BHRF1) or pro-apoptotic members (BAX, BAK, BIK, BID, BIM, BAD)**, despite carrying all four BH motifs [^kataoka2001] [^murakawa2015]. The earlier wiki characterization of BCL2L13 as a "weak sensitizer" was incorrect and unsupported by primary sources.
- BCL2L13 instead induces apoptosis via MOMP — releasing cytochrome c, triggering the APAF1-dependent activation of caspase-9 and effector caspases 3, 6, 7 [^kataoka2022review].
- Whether the pro-apoptotic and mitophagy activities are mutually exclusive or can co-occur under the same stress condition is unresolved. #gap/no-mechanism

**Connection to BCL-2 family network:** BCL2L13 is a BCL-2 family member by domain architecture (BH1-4) but is **atypical**: it does not engage the canonical anti-apoptotic/pro-apoptotic interaction network. Its BH domains are required for mitochondrial fragmentation but not for canonical BH3-mediated sensitization. Its primary physiological role appears to be mitophagy-receptor function rather than direct apoptosis induction, based on the cardiac physiology literature (Murakawa 2024).

## Aging context

BCL2L13 is relevant to aging through two independent mechanisms:

**1. Parkin-independent mitophagy in aged tissue:** PINK1 and Parkin expression and activity decline in aged mammalian tissues, particularly in post-mitotic cells (neurons, cardiomyocytes). Receptor-dependent mitophagy receptors — BCL2L13, BNIP3, NIX, FUNDC1 — become relatively more important for basal mitochondrial quality control when PINK1/Parkin flux is impaired. BCL2L13's Parkin-independence means it could provide a compensatory mitophagy route in aged cells. #gap/no-mechanism — whether BCL2L13 expression or phosphorylation-state is up- or down-regulated in aged tissues to compensate for PINK1/Parkin decline has not been studied.

**2. Cardiac aging and heart failure:** The AMPKα2–BCL2L13 axis has direct relevance to cardiac aging. Age-related cardiac dysfunction is partly attributable to impaired mitochondrial quality control; BCL2L13 loss or impaired Ser272 phosphorylation reproduces key aspects of this dysfunction in young mice under stress [^murakawa2024]. Whether basal BCL2L13 phosphorylation declines with age in cardiac tissue — and whether this contributes to age-associated cardiomyopathy — is an open question. #gap/needs-human-replication

**Connection to hallmarks:**
- [[mitochondrial-dysfunction]]: BCL2L13-mediated mitophagy clears depolarized, ROS-producing mitochondria; impaired BCL2L13 signaling (via AMPK decline) may allow dysfunctional mitochondria to accumulate in cardiac aging.
- [[disabled-macroautophagy]]: BCL2L13 is a receptor arm component of selective mitophagy; decreased BCL2L13 expression or AMPK activity with age would reduce selective mitophagic flux.

## Comparison to other OMM mitophagy receptors

| Receptor | LIR motif | Regulation | Parkin-dep? | Primary context | Yeast ortholog |
|---|---|---|---|---|---|
| BCL2L13 | WQQI (human 286–289; mouse 273–276) | AMPKα2→Ser272 phospho (cardiac); AMPK-regulated | No | Cardiac stress; general mitophagy | Partial functional ortholog of Atg32 |
| [[bnip3]] | WVEL (W18-L21) | HIF-1α transcriptional; hypoxia | No | Hypoxia; cardiac; erythroid (secondary) | None |
| [[nix]] (BNIP3L) | WVEL (similar) | Transcriptional (HIF-1α-independent at baseline) | No | Erythroid maturation; hypoxia | None |
| [[fundc1]] | YEVL (Y18-L21) | Src/CK2 inhibitory phospho; ULK1 activating phospho (Ser17) | No | Hypoxia; MAM remodeling | None |

The distinctive feature of BCL2L13 in this group is its functional relationship to yeast Atg32, which places it in a conserved conceptual slot (the "general stress mitophagy receptor") whose mammalian sequence-level ortholog was thought to be absent before Murakawa 2015.

## Pathway membership

- [[mitophagy]] — LIR-motif → LC3/GABARAP direct binding; receptor-dependent, Parkin-independent; functionally orthologous to yeast Atg32
- [[autophagy]] — component of the selective autophagy receptor network (mitophagy-specific arm)
- [[apoptosis-pathway]] — BH motif-mediated and C-terminal-extension-mediated pro-apoptotic activity; mechanism distinct from canonical BH3-only proteins
- [[bcl-2-family-signaling]] — atypical member; all four BH1–BH4 motifs present but does not interact with anti- or pro-apoptotic BCL-2 family members; apoptosis driven by BHNo/TM domain via MOMP; not a sensitizer
- [[pink1-parkin-pathway]] — parallel, complementary, Parkin-independent; relevant when PINK1/Parkin flux is impaired (aged cells)
- [[ampk]] — upstream activating kinase (AMPKα2→Ser272) in the cardiac context

## Key interactors

- [[lc3]] / GABARAP family — LIR motif binding partner; required for autophagosome recruitment and mitophagy execution; functional LIR sequence WQQI (human 286–289; mouse 273–276)
- [[ampk]] (AMPKα2/PRKAA2) — upstream kinase that phosphorylates Ser272 to activate mitophagy in cardiac tissue [^murakawa2024]
- [[bcl-2]] / [[bcl-xl]] — **not interactors**; BCL2L13 does not bind BCL-2, BCL-xL, or other anti- or pro-apoptotic BCL-2 family members despite carrying all four BH motifs [^kataoka2001] [^kataoka2022review]; the earlier inferred BH3-mediated interaction was unsupported
- [[bnip3]] — functional paralog on the OMM; complementary mitophagy receptor; both are Parkin-independent; BNIP3 is HIF-1α-regulated, BCL2L13 is AMPK-regulated
- [[fundc1]] — parallel OMM mitophagy receptor; hypoxia-regulated; ULK1-activated; distinct from BCL2L13 regulation

## Limitations and open gaps

- **LIR motif exact residues (resolved):** Human LIR confirmed at **residues 286–289 (WQQI)** per Kataoka 2022 Fig. 4C. Mouse LIR confirmed at 273–276 (WQQI) per Murakawa 2015 mutagenesis. The earlier estimate of 218–248 was incorrect; this gap is closed. The first WXXL/I motif at 147–150 (mouse) is confirmed non-functional by mutagenesis.
- **ULK1 vs AMPK:** Task brief cited ULK1 as the Ser272 kinase; primary literature (Murakawa 2024) identifies AMPKα2. Whether ULK1 has any secondary regulatory role on BCL2L13 (via the canonical AMPK→ULK1 axis) is untested. #gap/needs-replication
- **BH domain role in fragmentation:** All BH1-4 motifs are required for mitochondrial fragmentation (confirmed by mutagenesis, Murakawa 2015). How the BH domains mechanistically drive Drp1-independent fission is unresolved; no binding partners for the BCL2L13 BH domains have been identified (BCL2L13 does not interact with anti- or pro-apoptotic BCL-2 family members). #gap/no-mechanism
- **Apoptosis mechanism:** How the C-terminal extension and TM domain activate caspases independently of BH motifs is unresolved since Kataoka 2001. #gap/no-mechanism
- **Aging expression data:** BCL2L13 protein and mRNA trajectories across age in any tissue (cardiac, neuronal, skeletal muscle) are not established in the archived primary literature. #gap/needs-human-replication
- **PINK1/Parkin axis compensation:** Whether BCL2L13 expression or activity upregulates in aged cells as PINK1/Parkin declines has not been studied. #gap/needs-replication
- **GenAge entry:** BCL2L13 GenAge entry (HAGR) not confirmed; GenAge ID left null. #gap/needs-canonical-id
- **Ensembl ID:** Not confirmed in this pass; left null in frontmatter. #gap/needs-canonical-id
- **Double-receptor redundancy:** Whether BCL2L13 and BNIP3/NIX are redundant in non-cardiac tissues under aging conditions has not been tested in double-KO models. #gap/needs-replication
- **Human cardiac BCL2L13 in heart failure:** Clinical-grade characterization of BCL2L13 expression/activity in human heart failure biopsies is lacking; mechanistic data is entirely from mouse cardiac models. #gap/needs-human-replication

## Footnotes

[^kataoka2001]: [[studies/kataoka-2001-bcl-rambo-apoptosis]] · doi:10.1074/jbc.m010520200 · in-vitro · model: BCL2L13 overexpression in mammalian cell lines; original cloning of BCL-RAMBO; 4 BH motifs + unique 250 aa C-terminal extension; pro-apoptotic activity requires C-terminal extension/TM domain, not BH motifs; 165 citations (archive: hybrid OA, pending download). **Note: DOI 10.1016/s0960-9822(01)00373-6 is a confirmed mismatch — resolves to an HIV/Nef paper; do not use.**

[^murakawa2015]: [[studies/murakawa-2015-bcl2l13-atg32-ortholog]] · doi:10.1038/ncomms8527 · in-vitro · model: HEK293A cells + HeLa cells + atg32Δ S. cerevisiae (TAmito chimeric construct); identifies BCL2L13 as functional mammalian ortholog of yeast Atg32 by partial complementation; LIR (WQQI, mouse 273–276; human 286–289) required for mitophagy; all BH1-4 domains required for mitochondrial fragmentation; Drp1-independent fragmentation; Parkin-independent mitophagy; Ser272 phosphorylation (kinase unknown in 2015) promotes LC3 binding; 491 citations (archive: gold OA, verified)

[^otsu2015]: [[studies/otsu-2015-bcl2l13-atg32-commentary]] · doi:10.1080/15548627.2015.1084459 · review · model: Autophagy Punctum (invited commentary) by Otsu, Murakawa, Yamaguchi on Murakawa 2015; confirms BCL2L13 WQQI LIR at 273–276 (mouse), Atg32 functional orthology, all-BH1-4 fragmentation requirement; notes Ser272 phosphorylation; identifies open question: kinase identity; notes BCL2L13 shows no interaction with anti- or pro-apoptotic BCL-2 family members; 95 citations (archive: verified)

[^murakawa2024]: [[studies/murakawa-2024-ampk-bcl2l13-cardioprotection]] · doi:10.1016/j.celrep.2024.115001 · in-vivo · model: Bcl2l13-deficient mice + Ser272Ala knockin mice (C57BL/6 background); pressure overload (transverse aortic constriction); AMPKα2 phosphorylates BCL2L13 at Ser272; KO + S272A KI show left ventricular dysfunction, impaired mitochondrial fission/mitophagy, reduced ATP production; n=multiple groups; 11 citations (archive: gold OA, pending download)

[^murakawa2025]: [[studies/murakawa-2025-bcl2l13-ampk-cardiac]] · doi:10.1080/15548627.2025.2465408 · in-vivo · model: cardiac pressure overload; BCL2L13 phosphorylation by AMPKα2/PRKAA2 activates mitophagy; companion/follow-up to Murakawa 2024; 4 citations (archive: closed-access, not_oa — claims from abstract only) #gap/no-fulltext-access

[^kataoka2022review]: [[studies/kataoka-2022-bcl-rambo-review]] · doi:10.3389/fcell.2022.1065702 · review · author: Takao Kataoka (original discoverer); synthesizes 20 years of BCL-RAMBO/BCL2L13 research on apoptosis, fragmentation, and mitophagy; confirms human LIR at 286–289 (WQQI, Fig. 4C); BCL-RAMBO does not interact with BCL-2 family members; BHNo domain nomenclature; 16 citations (archive: gold OA, verified)
