---
type: protein
aliases: [CALCOCO2, calcium-binding and coiled-coil domain-containing 2, NDP52, nuclear domain 10 protein 52]
uniprot: Q13137
ncbi-gene: 10241
hgnc: 29912
ensembl: ENSG00000136436
mouse-ortholog: Calcoco2
druggability-tier: 3
caused-by: []
causes: []
key-domains: [SKICH, CLIR-linker, coiled-coil, UBZ-zinc-finger]
key-ptms: [Ser272-phosphorylation, TBK1-mediated-phosphorylation]
pathways: ["[[mitophagy]]", "[[autophagy]]", "[[pink1-parkin-pathway]]", "[[xenophagy]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[disabled-macroautophagy]]"]
sens-categories: []
known-interactors: ["[[lc3]]", "[[tbk1]]", "[[pink1]]", "[[parkin]]", "[[optn]]", "[[p62]]"]
genage-id: null
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Thurston 2009 (10.1038/ni.1800), von Muhlinen 2012 (10.1016/j.molcel.2012.08.024), and Tumbarello 2012 (10.1038/ncb2589) all verified against full PDFs (Tumbarello downloaded from PMC during session). Lazarou 2015 (10.1038/nature14893) unverifiable — not_oa, no local PDF; claims from that source retain #gap/no-fulltext-access. UniProt Q13137 identity fields (446 aa, domain names) not re-verified against live database."
---

> Verified 2026-05-04 (claude) against Thurston 2009, von Muhlinen 2012, and Tumbarello 2012 PDFs. Lazarou 2015 unverifiable (not_oa — #gap/no-fulltext-access). Key corrections: galectin-8 attribution moved from Thurston 2009 to Thurston 2012 (Nature 482:414–418); CLIR sequence corrected from "LVSIVDV" to Leu-Val-Val (L134/V135/V136); coiled-coil boundary corrected from "~130–350" to 140–420; zinc-finger boundary corrected from "~411–446" to 421–446; PDB 3VVV/3VVW confirmed; Tom1/myosin VI mechanism corrected (causality inverted in prior draft). See `verified-scope` for full scope.

# NDP52 (CALCOCO2)

NDP52 is a **selective autophagy cargo receptor** that bridges polyubiquitinated cargo — including depolarized mitochondria and intracellular bacteria — to the autophagosome membrane via a C-terminal ubiquitin-binding (UBZ) domain and an LC3/GABARAP-interacting LIR motif. A landmark 2015 study established that NDP52, together with [[optn|optineurin (OPTN)]], is the **primary** mitophagy receptor downstream of the [[pink1-parkin-pathway|PINK1-Parkin pathway]], with [[p62]] and related receptors playing a secondary role [^lazarou2015]. NDP52 also acts as the principal xenophagy receptor that restricts intracellular *Salmonella* and *Listeria* proliferation [^thurston2009]. A secondary, noncanonical LIR motif on NDP52 binds LC3C with selectivity, linking it specifically to the antibacterial autophagy branch [^vonmuhlinen2012].

## Identity

- **UniProt:** Q13137 (CALCOCO2_HUMAN) — Swiss-Prot (manually curated)
- **NCBI Gene:** 10241
- **HGNC symbol:** CALCOCO2 (gene); protein commonly called NDP52
- **Mouse ortholog:** Calcoco2 (one-to-one; mouse NDP52 functionally conserved)
- **Length:** 446 amino acids (canonical human isoform) [^uniprot-q13137]
- **Molecular weight:** ~52 kDa (consistent with "NDP52" nomenclature — nuclear domain 10 protein of ~52 kDa, though NDP52 is predominantly cytoplasmic)

## Domain architecture

NDP52 is organized N-to-C as a linear adaptor whose domains independently engage scaffold proteins, ubiquitinated cargo, and autophagosome membranes. Unlike [[p62]], NDP52 does not strongly self-oligomerize via a PB1 domain; cargo condensation relies instead on the valency provided by UBZ dimerization and interactions with TBK1 scaffolds.

| Domain | Residues (approx.) | Function |
|---|---|---|
| SKICH (SKIP carboxyl homology) | 1–127 | N-terminal scaffold; binds NAP1, SINTBAD, and TBK1 adaptors; required for recruitment of [[tbk1]] to cargo; also mediates interaction with FIP200/RB1CC1 to initiate autophagosome nucleation [^thurston2009] |
| Linker / CLIR (noncanonical LIR) | 127–140 | Connects SKICH to coiled-coil; contains the CLIR motif (core tripeptide **Leu134-Val135-Val136**) that selectively binds LC3C; mutation of L134, V135, or V136 individually abolishes LC3C interaction and antibacterial autophagy; lacks the aromatic residue found in canonical LIR motifs [^vonmuhlinen2012] |
| Coiled-coil | 140–420 | Structural backbone; stabilizes the elongated rod-like architecture [^vonmuhlinen2012] |
| UBZ (ubiquitin-binding zinc finger; also called ZnF) | 421–446 | C-terminal; binds K63- and K48-linked polyubiquitin chains on cargo; required for bacterial targeting (deletion of zinc finger abolishes colocalization with ubiquitin-coated bacteria, Fig 4 Thurston 2009); TBK1-mediated phosphorylation of flanking residues enhances ubiquitin affinity [^thurston2009] [^vonmuhlinen2012] |

**Key PTMs:**
- **TBK1-mediated phosphorylation** — TBK1 (co-recruited via SKICH-domain adaptors) phosphorylates NDP52 at Ser272 (and flanking residues near the UBZ), amplifying ubiquitin-chain affinity and accelerating autophagosome recruitment in a positive-feedback loop; the same phosphorylation circuit operates on [[optn|OPTN]] [^lazarou2015] #gap/needs-replication
- **No known Ser403-equivalent site** unlike [[p62]]; NDP52's ubiquitin-affinity regulation is primarily TBK1-dependent rather than CK2-dependent

## Mitophagy mechanism

### NDP52 + OPTN are primary; p62 is secondary

The seminal 2015 study by Lazarou et al. used HeLa cells lacking individual or combinations of autophagy receptors and demonstrated that:

1. Elimination of **NDP52 + OPTN** together almost completely abrogated PINK1/Parkin-dependent mitophagy (measured by mitochondrial content clearance assay).
2. Additional elimination of [[p62]], NBR1, and TAX1BP1 had little additional effect beyond the NDP52+OPTN double-KO.
3. Single KO of OPTN alone caused near-total mitophagy loss; single KO of NDP52 showed partial loss; combined double-KO was epistatic [^lazarou2015].

This reordered the prior consensus that placed p62 at the center of receptor-mediated mitophagy.

### Upstream: PINK1 can recruit NDP52 independently of Parkin

Lazarou 2015 also showed that **PINK1 alone** is sufficient to recruit NDP52 (and OPTN) to depolarized mitochondria in cells where Parkin has been removed by CRISPR — a Parkin-independent pathway [^lazarou2015]. The mechanism appears to involve PINK1-dependent phosphorylation of ubiquitin chains already present on the outer mitochondrial membrane (OMM), which creates high-affinity docking sites for the UBZ domains of NDP52 and OPTN. This bypasses the requirement for Parkin E3 ligase activity in building the initial polyubiquitin signal, though Parkin amplifies the signal once recruited.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | NDP52/CALCOCO2 is the human gene; PINK1-Parkin-NDP52 axis studied in human HeLa and iPSC-derived neurons |
| Phenotype conserved in humans? | partial | In vitro data from human cell lines; no human genetic studies on NDP52 LoF and mitophagy capacity as of 2026 |
| Replicated in humans? | no | Lazarou 2015 is in HeLa cells; neuronal data limited #gap/needs-human-replication |

### Downstream: phagophore nucleation

NDP52's SKICH domain recruits TBK1 scaffold proteins (NAP1, SINTBAD) and directly engages the ULK1 autophagy initiation complex via FIP200/RB1CC1. This connects cargo recognition to phagophore nucleation at the cargo surface — a direct "eat-me" → "eat-here" coupling. The LIR motif then provides secondary docking to LC3/GABARAP proteins on the elongating phagophore membrane.

## Xenophagy mechanism

NDP52 was first characterized as a **xenophagy receptor** that restricts intracellular bacterial pathogens including *Salmonella enterica* Typhimurium, *Listeria monocytogenes*, and *Mycobacterium tuberculosis* [^thurston2009].

### Recognition of ubiquitin-coated bacteria

Thurston et al. 2009 demonstrated that NDP52 recognizes the polyubiquitin coat that accumulates around cytosol-exposed *Salmonella*. NDP52's zinc finger domain (aa 421–446) is required for colocalization with ubiquitin-coated bacteria; SKICH deletion abolished Nap1 recruitment but not ubiquitin sensing (Fig 4, Thurston 2009). NDP52 simultaneously binds LC3 directly (via its LIR/CLIR) and recruits ubiquitin-coated bacteria to LC3-positive autophagosomes [^thurston2009].

### Recognition of damaged vacuoles (galectin-8 route)

A separate upstream recognition route involves galectin-8 (LGALS8). When *Salmonella*-containing vacuoles (SCVs) are damaged, host β-galactosides exposed to the cytoplasm are sensed by galectin-8. NDP52 binds galectin-8 directly, linking damaged-SCV recognition to LC3 recruitment. **This galectin-8 route was reported by Thurston et al. 2012** (Nature 482, 414–418) — a follow-up paper — not by Thurston 2009 [^thurston2012gal8]. #gap/needs-replication — the direct NDP52–galectin-8 binding interface has not been crystallographically resolved as of 2026.

### LC3C selectivity in antibacterial autophagy

Von Muhlinen et al. 2012 showed that NDP52's noncanonical LIR motif (termed **CLIR**; core tripeptide Leu134-Val135-Val136, within the sequence ENEEDILVVTTQGE at the linker region ~127–140) preferentially binds **LC3C** over LC3A, LC3B, or GABARAP. The CLIR lacks the aromatic residue (Trp or Phe) present at position 1 of canonical LIR motifs; instead, specificity arises from hydrophobic contacts made by Leu134 and Val136 with a complementary flat hydrophobic surface on LC3C (Lys32, Phe33, Leu64, Phe69) that is absent in other ATG8 orthologs. Crystal structure of NDP52 aa 21–141 in complex with LC3C is deposited as PDB 3VVW [^vonmuhlinen2012]. Depletion of LC3C (but not LC3A/B or GABARAP) specifically impaired antibacterial autophagy without abolishing general starvation-induced autophagy, demonstrating a cargo-selective branch of autophagy requiring the NDP52–LC3C axis. #gap/needs-replication

## Structural notes

- NDP52 adopts an elongated, homodimeric architecture via its coiled-coil region; dimerization may increase avidity for polyubiquitin chains (two UBZ domains).
- The SKICH domain (residues 1–127) is the founding member of the SKICH domain family, which appears in several autophagy-related adaptors (NDP52, TAX1BP1, C53/LZAP); crystal structure of the NDP52 SKICH domain alone is PDB **3VVV** (determined by SAD at 1.35 Å resolution, space group P4₁2₁2) [^vonmuhlinen2012].
- The NDP52 SKICH domain + CLIR linker region (aa 21–141) in complex with LC3C is PDB **3VVW** (2.5 Å, space group C2); the CLIR was disordered in apo-NDP52 crystals but became ordered in the complex [^vonmuhlinen2012].

## Relationship to [[p62]] and other cargo receptors

The autophagy cargo-receptor family operating in mitophagy and xenophagy includes at least five members with overlapping but non-identical functions:

| Receptor | Gene | Key ubiquitin-binding | LC3 preference | Primary role |
|---|---|---|---|---|
| **NDP52** | CALCOCO2 | UBZ (K63/K48) | LC3C (noncanonical LIR), LC3A/B (weak) | Primary mitophagy; xenophagy |
| **OPTN** | OPTN | UBAN (K63 >> K48) | LC3B | Primary mitophagy; xenophagy |
| **p62** | SQSTM1 | UBA (K48/K63) | LC3A/B/C, GABARAP | Aggrephagy (primary); mitophagy (secondary) |
| **NBR1** | NBR1 | UBA (K48 preference) | LC3A/B/C | Aggrephagy; pexophagy |
| **TAX1BP1** | TAX1BP1 | UBZ-like | LC3B/C | Xenophagy; mitophagy |

Per Lazarou 2015, **NDP52 + OPTN dominate mitophagy; p62 + NBR1 + TAX1BP1 are minor** [^lazarou2015].

## Autophagy receptor architecture parallels

NDP52 exemplifies the general cargo receptor tripartite logic (cargo-binding → scaffolding → autophagosome-docking), but differs from [[p62]] in three key ways:

1. **No PB1-mediated oligomerization** — condensate formation at cargo relies on TBK1-scaffold clustering rather than self-polymerization.
2. **SKICH domain recruits ULK1 initiation machinery directly** — p62 does not; this makes NDP52 a more direct coupler of cargo recognition to phagophore nucleation.
3. **LC3C selectivity** — NDP52's noncanonical LIR confers specificity for the antibacterial autophagy branch; p62 is pan-LC3.

## Myosin VI interaction

Tumbarello et al. 2012 (Nat Cell Biol 14:1024–1035) demonstrated that NDP52, OPTN, and T6BP (TAX1BP1) serve as autophagosomal docking sites for the actin-based motor **myosin VI (MYO6)** via an RRL motif in myosin VI's tail [^tumbarello2012]. The mechanism is a two-step cascade: (1) Tom1 (an ESCRT-0 component) recruits myosin VI to endosomes via a WWY motif — distinct from the RRL motif that binds autophagy receptors; (2) myosin VI then docks from endosomal membranes to autophagosomes via NDP52/OPTN/T6BP, delivering Tom1-positive endosomal membranes that provide material for autophagosome maturation. Loss of myosin VI or Tom1 causes equivalent phenotypes — accumulation of LC3-II-positive autophagosomes unable to fuse with lysosomes — in HeLa cells, MEFs, and primary cortical neurons. This function is shared among NDP52, OPTN, and T6BP; it is not unique to NDP52. Experiments used HeLa cells, RPE cells, MEFs, and Snell's Waltzer myosin VI knockout mouse neurons [^tumbarello2012].

## Aging context

### Mitochondrial quality control decline with age

PINK1-Parkin-mediated mitophagy declines with age in post-mitotic tissues (neurons, cardiomyocytes, skeletal muscle), contributing to accumulation of dysfunctional mitochondria — a key driver of the [[mitochondrial-dysfunction]] hallmark. NDP52 sits at the apex of the mitophagy receptor hierarchy (primary receptor per Lazarou 2015), making it a candidate mediator of age-related mitophagy decline. #gap/no-mechanism — whether NDP52 protein level or activity changes specifically in aged human tissues has not been well characterized as of 2026. #gap/needs-human-replication

### Immune defense (xenophagy) and immunosenescence

NDP52-dependent xenophagy is a front-line defense against intracellular bacterial pathogens. Age-associated declines in xenophagy capacity may contribute to increased susceptibility to *Mycobacterium tuberculosis* reactivation and other intracellular bacterial infections in older adults — a clinically relevant phenotype of [[immunosenescence]]. Direct quantitative evidence for age-dependent NDP52 decline in immune cells is sparse as of 2026. #gap/unsourced #gap/needs-human-replication

### Parkinson's disease and neurodegeneration

Loss of function in the PINK1-Parkin-NDP52 mitophagy axis is directly implicated in Parkinson's disease pathogenesis. Mutations in PINK1 (PARK6) and PRKN/Parkin (PARK2) cause familial early-onset PD; downstream receptor failure (including NDP52) is the mechanistic consequence. Whether reduced NDP52 expression or function contributes to sporadic PD is under investigation. The link to [[mitochondrial-dysfunction]] and accumulation of damaged mitochondria bearing α-synuclein seeds is a central mechanistic hypothesis.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Human gene; studied directly in human cells |
| Phenotype conserved in humans? | partial | Mitophagy receptor hierarchy established in HeLa and iPSC models; clinical relevance inferred from PINK1/Parkin PD genetics |
| Replicated in humans? | no | No human interventional NDP52 data; PD epidemiology provides indirect support |

## Pathway membership and key interactors

- [[mitophagy]] — primary receptor downstream of PINK1/Parkin; acts with [[optn|OPTN]]
- [[autophagy]] — general selective autophagy role across cargo types
- [[pink1-parkin-pathway]] — downstream effector of Parkin-generated K63-pUb; also directly recruitable by PINK1 alone
- [[xenophagy]] — primary receptor for ubiquitin-coated intracellular bacteria; galectin-8 route for damaged vacuoles
- [[lc3]] — direct LIR-mediated interaction; LC3C preferred in antibacterial context; LC3A/B in mitophagy
- [[tbk1]] — co-recruited via SKICH-domain adaptors (NAP1/SINTBAD); phosphorylates and activates NDP52 in a positive-feedback loop
- [[pink1]] — directly recruits NDP52 to phospho-Ub on depolarized OMM; Parkin-independent route
- [[parkin]] — amplifies pUb signal on OMM, strengthening NDP52 docking
- [[optn]] — acts in parallel as co-primary mitophagy receptor; both must be lost for near-complete mitophagy block
- [[p62]] — parallel receptor, secondary in mitophagy; shares xenophagy and aggrephagy contexts
- [[ulk1]] — phagophore initiation; NDP52 SKICH domain recruits FIP200/RB1CC1 of the ULK1 complex

## Limitations and knowledge gaps

- **NDP52 decline in aged tissues — not quantified.** Whether NDP52 protein or mRNA changes specifically with age in human brain, heart, or muscle has not been established in adequately powered studies as of 2026. #gap/needs-human-replication #gap/unsourced
- **Parkin-independent mitophagy mechanism needs full elucidation.** PINK1 can recruit NDP52 to phospho-Ub directly, but the quantitative contribution of this route vs. Parkin-amplified pUb in aging tissues in vivo is unknown. #gap/no-mechanism
- **LC3C selectivity structure resolved.** PDB 3VVW (NDP52 aa 21–141 + LC3C, 2.5 Å) is confirmed in von Muhlinen 2012 [^vonmuhlinen2012]. The structural basis is extensively characterized: CLIR tripeptide Leu134-Val135-Val136 engages a flat hydrophobic surface on LC3C (Lys32, Phe33, Leu64, Phe69) absent in other ATG8 orthologs.
- **Galectin-8 / NDP52 direct binding interface.** The direct binding between NDP52 and galectin-8 is reported in Thurston 2012 (Nature 482) [^thurston2012gal8] but has not been crystallographically resolved as of 2026. The domain mediating galectin-8 binding on NDP52 has not been precisely mapped. #gap/needs-replication
- **NDP52 in sporadic PD.** Whether NDP52 expression or function declines in sporadic Parkinson's disease independent of PINK1/Parkin mutation status is unknown. #gap/no-mechanism
- **No human longevity or aging intervention data.** No GenAge entry exists for CALCOCO2 as of 2026; lifespan data from model organisms manipulating NDP52 specifically are sparse. #gap/needs-human-replication
- **BUG-2 DOI mismatch — resolved.** DOI 10.1016/j.molcel.2012.04.014 (cited in some databases as "von Muhlinen 2012 NDP52/LC3C") resolves in archive to a XIAP/LUBAC NOD2-signaling paper. Correct DOI is 10.1016/j.molcel.2012.08.024 — confirmed against the downloaded PDF (verified 2026-05-04).
- **Thurston 2012 (Nature 482) has no study page and no local PDF.** The galectin-8/NDP52 result depends on this paper; a study page and PDF download should be queued. #gap/needs-canonical-id

## Footnotes

[^uniprot-q13137]: UniProt Q13137 (CALCOCO2_HUMAN), Swiss-Prot entry — 446 aa, manually curated; accessed via training knowledge 2026-05-04; live database re-verification recommended on next lint pass. #gap/needs-canonical-id (live re-check)

[^thurston2009]: [[studies/thurston-2009-ndp52-xenophagy]] · doi:10.1038/ni.1800 · in-vitro (HeLa cells, 293ET cells; *Salmonella* infection) · 842 citations (100th percentile) · Thurston TLM, Ryzhakov G, Bloor S, von Muhlinen N, Randow F · Nat Immunol 10:1215–1221, 2009 · NDP52 identified as TBK1-adaptor and autophagy receptor for ubiquitin-coated intracellular bacteria; SKICH domain binds Nap1 (aa 1–75 sufficient); zinc finger (aa 420–446) required for ubiquitin sensing; NDP52 binds LC3 directly and recruits ubiquitin-coated *Salmonella* to autophagosomes · **scope:** ubiquitin route only — galectin-8 route is from Thurston 2012 (Nature 482) · local PDF: 

[^thurston2012gal8]: Thurston TLM, Wandel MP, von Muhlinen N, Foeglein A, Randow F · "Galectin 8 targets damaged vesicles for autophagy to defend cells against bacterial invasion" · Nature 482:414–418, 2012 · doi:10.1038/nature10744 · NDP52 binds galectin-8 on damaged Salmonella-containing vacuoles; links cytosolic glycan sensing to xenophagy · **No study page created yet; no local PDF in archive as of 2026-05-04** — add to download queue. #gap/needs-canonical-id

[^lazarou2015]: [[studies/lazarou-2015-pink1-receptors-mitophagy]] · doi:10.1038/nature14893 · in-vitro (HeLa PINK1/Parkin-expressing cells; CRISPR-KO receptor combinations) · 2,620 citations (100th percentile) · Lazarou M et al., Nature 2015 · NDP52 + OPTN are primary mitophagy receptors; p62/NBR1/TAX1BP1 are minor; PINK1 can recruit NDP52 independently of Parkin via phospho-Ub · not_oa — no local PDF; claims from abstract + training knowledge only. #gap/no-fulltext-access

[^vonmuhlinen2012]: [[studies/vonmuhlinen-2012-ndp52-lc3c]] · doi:10.1016/j.molcel.2012.08.024 · in-vitro (HeLa, *Salmonella* infection) + crystal structures · 316 citations (100th percentile) · von Mühlinen N, Akutsu M, Ravenhill BJ, Foeglein Á, Bloor S, Rutherford TJ, Freund SMV, Komander D, Randow F · Mol Cell 48:329–342, 2012 · CLIR (core tripeptide Leu134-Val135-Val136, full context ENEEDILVVTTQGE) in NDP52 linker (aa 127–140) selectively binds LC3C via hydrophobic contacts; LC3C depletion specifically blocks antibacterial autophagy; crystal structures PDB 3VVV (SKICH alone, 1.35 Å) and PDB 3VVW (NDP52 aa 21–141 + LC3C, 2.5 Å) · **NOTE: DOI 10.1016/j.molcel.2012.04.014 is a BUG-2 mismatch — resolves to XIAP/LUBAC paper; do NOT cite that DOI.**

[^tumbarello2012]: [[studies/tumbarello-2012-myosin-autophagy-receptors]] · doi:10.1038/ncb2589 · in-vitro + in-vivo (HeLa cells, RPE cells, MEFs, primary cortical neurons, Snell's Waltzer MYO6-KO mouse) · 282 citations (100th percentile) · Tumbarello DA, Waxse BJ, Arden SD, Bright NA, Kendrick-Jones J, Buss F · Nat Cell Biol 14:1024–1035, 2012 · NDP52 (with OPTN, T6BP/TAX1BP1) are autophagosomal docking sites for myosin VI's RRL motif; Tom1 separately recruits myosin VI to endosomes via WWY motif; myosin VI delivers Tom1-positive endosomal membranes to autophagosomes, promoting maturation and lysosomal fusion; loss of myosin VI or Tom1 causes equivalent autophagic block · local PDF: 
