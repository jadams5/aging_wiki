---
type: protein
aliases: [ATG10, autophagy related 10, APG10, APG10L]
uniprot: Q9H0Y0
ncbi-gene: 83734
hgnc: 20315
mouse-ortholog: Atg10
ensembl: ENSG00000152348
druggability-tier: 4
caused-by: []
causes: []
key-domains: [autophagy-E2-like-domain]
key-ptms: [Cys166-thioester]
pathways: ["[[autophagy]]", "[[mitophagy]]"]
hallmarks: ["[[disabled-macroautophagy]]", "[[loss-of-proteostasis]]"]
known-interactors: ["[[atg7]]", "[[atg12]]", "[[atg5]]", "[[atg16l1]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Yamaguchi 2012 (10.1016/j.str.2012.04.018) primary source PDF verified end-to-end (NMR solution structure of KmAtg10 + crystal structure of KmAtg5). Cys numbering discrepancy fully resolved: Cys116 = K. marxianus KmAtg10; Cys133 = S. cerevisiae ScAtg10; Cys166 = human ATG10 (UniProt Q9H0Y0, confirmed via REST API 2026-05-04). PDB accession corrected 4GSJ→2LPU (KmAtg10 NMR) + 3VQI (KmAtg5 crystal). Mizushima 2002 and Nakatogawa 2013 are closed-access (not_oa) — mechanistic claims attributed to them are consistent with the verified Yamaguchi 2012 and with established autophagy biochemistry but cannot be independently confirmed against full text. UniProt Q9H0Y0 identity fields (220 aa, Cys166, 2 isoforms) confirmed via REST API."
---

# ATG10 — autophagy E2-like conjugating enzyme for ATG12–ATG5

ATG10 is the dedicated E2-like conjugating enzyme for the **ATG12–ATG5 conjugation system** — one of two ubiquitin-like conjugation cascades required for autophagosome biogenesis. In concert with [[atg7]] (E1) and without a known E3, ATG10 transfers [[atg12]] from a transient thioester intermediate to the acceptor lysine (Lys130) on [[atg5]], forming the irreversible ATG12–ATG5 isopeptide conjugate. That conjugate then recruits [[atg16l1]] to assemble the ~800 kDa E3-like complex that catalyzes the second conjugation cascade — [[lc3]] lipidation — at the growing phagophore membrane. ATG10 therefore operates at the root of both autophagy conjugation systems, one step below ATG7 in the hierarchy.

## Identity

| Field | Value |
|---|---|
| UniProt | Q9H0Y0 (ATG10_HUMAN) |
| NCBI Gene | 83734 |
| HGNC | 21073 |
| Gene symbol | ATG10 |
| Aliases | APG10L (pre-2003 yeast-derived nomenclature) |
| Mouse ortholog | Atg10 (one-to-one; functionally equivalent) |
| Protein length | 220 amino acids (UniProt Q9H0Y0, canonical isoform; 2 isoforms total via alternative splicing) |
| Molecular weight | ~25.3 kDa |
| Yeast functional ortholog | Atg10p / Apg10p (*S. cerevisiae*) |

**Naming note:** No `pathways/atg10.md` exists. This page (`molecules/proteins/atg10.md`) is the canonical `[[atg10]]` resolution. The autophagy pathway page is [[autophagy]].

## Domain structure and active site

ATG10 is a single-domain protein belonging to the ATG10 family (Pfam PF03987: Autophagy_act_C). The domain adopts an E2-like fold despite sharing minimal sequence identity with canonical ubiquitin E2 enzymes — convergent structural evolution toward the same catalytic architecture.

- **E2-like catalytic domain:** Encompasses the majority of the 220 aa sequence. Contains the active-site cysteine and the ATG5-recognition surface.
- **Active-site cysteine — Cys166 (human):** Forms the transient thioester bond with the C-terminal Gly140 of ATG12, the obligate intermediate before isopeptide bond formation with ATG5 Lys130. Confirmed by UniProt Q9H0Y0 active-site annotation (ECO:0000250; accessed 2026-05-04 via REST API).

**Active-site Cys numbering across species (verified against Yamaguchi 2012):** The Yamaguchi 2012 paper works entirely with yeast homologs and explicitly states the catalytic cysteines as: *K. marxianus* KmAtg10 **Cys116** (Fig. 3C; PDB 2LPU, NMR solution structure); *S. cerevisiae* ScAtg10 **Cys133** (Fig. 3C sequence alignment). The human residue **Cys166** (Q9H0Y0) is a separate number arising from the longer human sequence — Yamaguchi 2012 does not map it explicitly to human, but UniProt Q9H0Y0 is unambiguous. The "Cys133" figure cited in [[atg5]] was an incorrect attribution to human; the correct human residue is Cys166. This has been corrected in atg5.md (see propagation note in verification log).

## Reaction mechanism

ATG10 functions in the middle of a three-enzyme cascade for ATG12–ATG5 conjugation [^mizushima2002] [^nakatogawa2013]:

### Full cascade: ATG7 (E1) → ATG10 (E2) → ATG5

1. **Activation (E1 — ATG7, Cys572):** ATP-dependent adenylation of ATG12 C-terminal Gly140 → ATG12~ATG7 thioester at ATG7 Cys572. (See [[atg7]] for mechanistic detail.)

2. **Trans-thiolation to ATG10 (E2):** The ATG12~ATG7 thioester is transferred to **Cys166 of ATG10**, forming a transient ATG12~ATG10 thioester intermediate. This step is the exclusive reaction of ATG10 in autophagy — it performs no other known catalytic function.

3. **Isopeptide bond formation (ATG5-targeting):** ATG10 directly recognizes the C-terminal ubiquitin-like (UblB) domain of ATG5, bringing the ATG12 C-terminal Gly140 into proximity with the ε-amino group of **ATG5 Lys130**. Nucleophilic attack forms the covalent isopeptide bond, releasing ATG10. Importantly, this step occurs without a dedicated E3 ligase — ATG10 itself fulfills the substrate-recognition role normally performed by an E3 [^yamaguchi2012].

The resulting ATG12–ATG5 conjugate is **essentially irreversible** under physiological conditions. No isopeptidase that cleaves the ATG12–ATG5 bond has been identified in mammals — unlike ubiquitin, ATG12 is not recycled after conjugation.

### Contrast with the LC3 system (distinct E2 — ATG3)

ATG10 is specific to the ATG12 system and does **not** participate in the LC3 lipidation cascade. That parallel system uses:
- The same E1 (ATG7, Cys572) for LC3 activation
- A **distinct E2 — [[atg3]]** (Cys264 active site) for LC3 transfer
- The **ATG12–ATG5–ATG16L1 complex** as the E3-like enzyme that positions ATG3 and accelerates LC3-II (LC3-PE) formation on the phagophore

This division of labour means ATG10 lies entirely upstream of LC3 lipidation: its product (ATG12–ATG5) is required for ATG3's E2 activity to be efficient and spatially restricted to autophagosome membranes [^nakatogawa2013].

### ATG16L1 recruitment downstream

After isopeptide bond formation, the ATG12–ATG5 conjugate non-covalently binds [[atg16l1]] to form the ~800 kDa ATG12–ATG5–ATG16L1 E3-like complex. ATG10 plays no direct role in ATG16L1 recruitment — its function ends at the ATG12–ATG5 bond.

## Discovery and structure

- **Yeast discovery:** Yeast Apg10p was identified as an essential autophagy gene prior to the unified ATG nomenclature. Mouse Apg10 was characterized as an Apg12-conjugating enzyme using a novel conjugation-mediated yeast two-hybrid approach, demonstrating conserved E2 activity for the Apg12-Apg5 system [^mizushima2002].
- **Structure (yeast Atg10 and Atg5):** Yamaguchi et al. 2012 determined the NMR solution structure of *Kluyveromyces marxianus* Atg10 (KmAtg10; **PDB 2LPU**) and the X-ray crystal structure of KmAtg5 (**PDB 3VQI**, 2.5 Å resolution). Together these revealed the E2-like fold of KmAtg10, showed that KmAtg10 directly recognizes the C-terminal UblB domain (β7 strand) of KmAtg5 — an interaction that substitutes for canonical E3-mediated substrate presentation — and established that KmAtg10 Tyr56 and Asn114 orient KmAtg5 Lys145 for conjugation [^yamaguchi2012]. The active-site cysteine of KmAtg10 is **Cys116** (S. cerevisiae ScAtg10 equivalent: **Cys133**; human ATG10: **Cys166**). Note: PDB 4GSJ (sometimes erroneously cited in this context) is an unrelated ATG7 NTD mutant crystal structure.

## ATG10 in autophagy-pathway context

ATG10 is a core component of the **ATG12–ATG5–ATG16L1 conjugation arm**, which is required for all forms of macroautophagy but **not** for chaperone-mediated autophagy (CMA). This distinction matters for aging biology:

| Autophagy form | Requires ATG12–ATG5 (and thus ATG10)? |
|---|---|
| Macroautophagy (bulk) | Yes |
| [[mitophagy]] (PINK1/Parkin receptor-mediated) | Yes (LC3 lipidation step) |
| [[lipophagy]] | Yes |
| Xenophagy | Yes |
| [[chaperone-mediated-autophagy]] (CMA) | No — uses LAMP-2A directly; no phagophore membrane required |

The ATG12–ATG5 complex is thus required for autophagosome membrane elongation across essentially all macroautophagy subtypes. Loss of ATG10 function would phenocopy loss of ATG5 or ATG12 — failure to generate LC3-II, failure to elongate the isolation membrane, failure to form closed autophagosomes.

## Genetic loss-of-function phenotypes

**Yeast:** Deletion of *ATG10* in *S. cerevisiae* abolishes the Atg12–Atg5 conjugate, blocks autophagosome formation, and renders cells sensitive to nitrogen starvation — the canonical autophagy-deficient phenotype [^mizushima2002]. #gap/needs-replication (single original characterization; replicated indirectly by cross-species conservation studies).

**Mouse Atg10 knockout:** A specific constitutive *Atg10* KO mouse has not been extensively characterized in the published literature as of 2026-05-04 — most core autophagy gene knockouts (Atg5, Atg7) are used instead as cleaner single-gene tools [^nakatogawa2013]. #gap/needs-human-replication — specifically the Atg10 KO phenotype at whole-organism level. The expected phenotype (by analogy to Atg5 and Atg7 KOs) is perinatal lethality from neonatal starvation, with failure to clear damaged organelles and protein aggregates. For the Atg5-null neonatal starvation phenotype see [[atg5]]; for the Atg7-null neurodegeneration phenotype see [[atg7]].

**Human SNP association:** Computational analysis of pathogenic nsSNPs in ATG10 identifies variants that may impair E2 conjugating activity (Arpna et al. 2026, IJBM doi:10.1016/j.ijbiomac.2025.149933) — preliminary bioinformatic study, no functional validation yet. #gap/needs-replication

## Aging-relevance

ATG10 is a **core autophagy gene** — aging-relevant because the ATG12–ATG5 conjugation system it initiates is obligatory for all macroautophagy. The aging connection is mediated entirely through autophagy flux decline, which is mechanistically documented at multiple levels upstream of ATG10 itself:

- **mTOR hyperactivation with age** → phospho-inhibition of [[ulk1]] → reduced autophagy initiation. ATG10 expression level is not the primary rate-limiting step; the bottleneck is upstream.
- **AMPK decline with age** → reduced ULK1 Ser317/555 phospho-activation → reduced phagophore nucleation.
- **[[tfeb]] nuclear exclusion** (mTOR-dependent) → reduced transcription of ATG gene battery (ATG10 transcriptionally regulated as part of the coordinated CLEAR network, though ATG10 is not among the most prominently regulated TFEB targets). #gap/unsourced — ATG10's inclusion in the TFEB CLEAR gene battery requires primary citation.
- **Post-mitotic cell vulnerability:** In neurons and cardiomyocytes — the cells most acutely dependent on basal autophagy flux — loss of core ATG components including the ATG12 system causes progressive protein aggregate accumulation and organelle dysfunction. The neurodegeneration caused by Atg7-null (and by extension expected from Atg10-null) demonstrates that constitutive macroautophagy is not redundant in post-mitotic cells [^nakatogawa2013].

**No aging-specific ATG10 gain-of-function intervention** has been identified. Pharmacological agents that increase autophagy (rapamycin, spermidine, caloric restriction) act on the upstream mTOR/AMPK/ULK1 nodes — not on ATG10 directly. ATG10 is not a tractable drug target by current pharmacological approaches (no allosteric pocket analogous to mTOR's FKBP-rapamycin site has been identified).

| Dimension | Status |
|---|---|
| Pathway (ATG12–ATG5 conjugation) conserved in humans? | Yes — mechanism conserved from yeast to mammals |
| Phenotype (autophagy loss → pathology) conserved in humans? | Yes — human autophagy defects in neurodegeneration, muscle atrophy |
| Specific ATG10 KO phenotype replicated in humans? | Unknown — no ATG10-specific human null characterized |

## Pathway membership and interactors

- [[autophagy]] — core conjugation step required for all macroautophagy
- [[mitophagy]] — downstream via ATG12–ATG5–ATG16L1 LC3 lipidation requirement

**Direct biochemical interactors:**

| Interactor | Relationship | Evidence |
|---|---|---|
| [[atg7]] | E1 enzyme; donates ATG12~ATG7 thioester to ATG10 | Genetic/biochemical (yeast + mammalian cells) |
| [[atg12]] | Substrate; transferred from ATG7 to ATG10 active site (Cys166) | Thioester intermediate; genetic |
| [[atg5]] | Final acceptor; ATG10 directly recognizes ATG5 UblB for isopeptide bond | Crystal structure (Yamaguchi 2012) |
| [[atg16l1]] | Downstream (post-ATG10); recruits to ATG12–ATG5 conjugate | Biochemical; not a direct ATG10 interactor |

**Paralogs:** [[atg3]] is the orthologous E2 for the LC3 system — distinct substrate specificity and active-site position (human ATG3 Cys264 vs human ATG10 Cys166) but analogous reaction chemistry. ATG10 and ATG3 share the same E1 (ATG7) but serve completely separate E2 roles.

## Limitations and open questions

- Active-site Cys numbering resolved (2026-05-04): Cys166 = human ATG10 (UniProt Q9H0Y0, confirmed); Cys116 = KmAtg10 (*K. marxianus*, PDB 2LPU); Cys133 = ScAtg10 (*S. cerevisiae*). The Cys133 citation in [[atg5]] has been corrected to Cys166 (human).
- **#gap/needs-replication** — No extensively published constitutive *Atg10* KO mouse phenotype; specific physiological effects of ATG10 loss are inferred from Atg5/Atg7 KO literature.
- **#gap/no-mechanism** — ATG10's inclusion in the TFEB CLEAR transcriptional program is asserted (implied by ATG gene battery regulation) but not specifically cited; requires primary TFEB ChIP-seq or CLEAR consensus sequence analysis to confirm.
- **#gap/needs-human-replication** — ATG10 pathogenic variant associations in human disease are based on in silico predictions (Arpna et al. 2026); functional patient-derived data absent.
- **#gap/long-term-unknown** — No direct pharmacological strategy targets ATG10 itself; all aging-intervention evidence for the ATG12 conjugation system is indirect (via upstream mTOR/AMPK interventions).

## Footnotes

[^mizushima2002]: doi:10.1016/s0014-5793(02)03739-0 · FEBS Letters 2002 · in-vivo (mouse) + biochemical · Mizushima N, Yoshimori T, Ohsumi Y · identified mouse Apg10 as E2-like Apg12-conjugating enzyme using conjugation-mediated yeast two-hybrid; demonstrated functional conservation of ATG10 E2 activity across species · 47 citations (98th percentile); closed-access (not_oa)

[^yamaguchi2012]: doi:10.1016/j.str.2012.04.018 · Structure 2012 · in-vitro (NMR + crystallography) · Yamaguchi M, Noda NN, Yamamoto H, Shima T, Kumeta H, Kobashigawa Y, Akada R, Ohsumi Y, Inagaki F · NMR solution structure of *K. marxianus* KmAtg10 (PDB 2LPU; active-site Cys116); X-ray crystal structure of KmAtg5 (PDB 3VQI, 2.5 Å; acceptor Lys145); showed KmAtg10 directly recognizes KmAtg5 UblB (β7) without a dedicated E3 ligase; KmAtg10 Tyr56 and Asn114 orient KmAtg5 Lys145 for conjugation; *S. cerevisiae* ScAtg10 active-site = Cys133 (sequence alignment Fig. 3C) · 76 citations (99th percentile); OA bronze; locally: 

[^nakatogawa2013]: doi:10.1042/bse0550039 · Essays in Biochemistry 2013 · review · Nakatogawa H · comprehensive review of two ubiquitin-like conjugation systems in autophagy; describes ATG10 as E2 for ATG12 system; establishes ATG12–ATG5–ATG16L1 complex as E3-like enzyme for LC3 lipidation; describes how ATG10 and ATG3 use the same E1 (ATG7) but catalyze distinct conjugation reactions · 305 citations (100th percentile); closed-access (not_oa)
