---
type: protein
aliases: [PRKN, PARK2, parkin RBR E3 ubiquitin protein ligase, Parkin]
uniprot: O60260
ncbi-gene: 5071
hgnc: 8607
ensembl: ENSG00000185345
mouse-ortholog: Prkn
druggability-tier: 3
caused-by: []
causes: []
key-domains: [Ubl, RING0, RING1, IBR, REP, RING2]
key-ptms: [Ser65-phosphorylation-UbL, Cys431-thioester-intermediate]
pathways: ["[[mitophagy]]", "[[autophagy]]", "[[pink1-parkin-pathway]]", "[[ubiquitin-proteasome-system]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[disabled-macroautophagy]]"]
sens-categories: []
known-interactors: ["[[pink1]]", "[[mfn1]]", "[[mfn2]]", "[[miro1]]", "[[miro2]]", "[[vdac1]]", "[[optn]]", "[[ndp52]]", "[[p62]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Narendra 2008, Geisler 2010, Tanaka 2010, Sarraf 2013, Rana 2013, Wauer 2015 claims verified against primary-source PDFs. Kitada 1998, Trempe 2013, Koyano 2014 are not_oa — claims attributed to these sources left with gap tags. Canonical-DB identity fields (UniProt O60260, NCBI Gene 5071, HGNC 8607) not live-verified against databases — recommend re-check on next lint pass."
---

# Parkin (PRKN / PARK2)

An E3 ubiquitin ligase of the **RBR (RING-between-RING) family** that serves as the principal effector of damage-selective [[mitophagy]]. In healthy cells Parkin resides in the cytosol in an auto-inhibited conformation; upon mitochondrial membrane-potential collapse, [[pink1]] stabilized on the outer mitochondrial membrane (OMM) phosphorylates both ubiquitin (Ser65-Ub) and Parkin's own ubiquitin-like domain (Ser65-UbL), sequentially releasing auto-inhibition and unleashing E3 activity. Active Parkin then ubiquitinates dozens of OMM-resident proteins (≥36 confirmed MOM proteins; hundreds of ubiquitylation sites identified proteomically [^sarraf2013]), building a polyubiquitin coat that cargo receptors (NDP52, OPTN) use to recruit the autophagosome. Loss-of-function mutations in the *PRKN* gene cause **autosomal recessive juvenile Parkinsonism (PARK2)** — the most common monogenic form of Parkinson's disease — establishing that Parkin-mediated mitophagy is non-redundant for dopaminergic neuron survival [^kitada1998].

## Identity

- **UniProt:** O60260 (PRKN_HUMAN)
- **NCBI Gene:** 5071
- **HGNC symbol:** PRKN (formerly PARK2)
- **Mouse ortholog:** Prkn (one-to-one ortholog)
- **Length:** 465 amino acids (canonical isoform) #gap/needs-canonical-id — UniProt API unavailable at seeding; confirm 465 aa on next lint pass
- **Molecular weight:** ~52 kDa
- **Gene locus:** chr6q25.2-q27 (one of the largest human genes at ~1.4 Mb)

## Domain organization

Parkin's domain architecture is the mechanistic basis for its auto-inhibition and stepwise activation [^trempe2013]:

| Domain | Residues (approx.) | Function |
|---|---|---|
| **Ubl** (ubiquitin-like) | 1–76 | Resembles ubiquitin; Ser65 phosphorylated by PINK1; key auto-inhibitory contact with RING1; releases from RING1 upon phosphorylation [^wauer2015] |
| **Disordered linker** | 77–140 | Flexible, least-conserved region connecting Ubl to RING0; intrinsically disordered in crystal structures [^wauer2015] |
| **RING0** (also called UPD) | ~141–225 | Unique-Parkin domain; structural; binds Zn²⁺ ions; makes auto-inhibitory contacts with RING2 and buries Cys431 [^wauer2015] |
| **RING1** | ~226–326 | Binds E2-ubiquitin conjugates (UbcH7/UBE2L3); contains the pUb-binding site (His302/Arg305) on its surface opposite to the Ubl-binding helix [^wauer2015] |
| **IBR** (in-between-RING) | ~327–378 | Structurally bridges RING1 and RING2; common to all RBR ligases; intrinsically flexible [^wauer2015] |
| **REP** (repressor element of Parkin) | ~378–410 | Occludes the E2-binding surface of RING1 in the auto-inhibited state; displaced upon Ubl phosphorylation [^wauer2015] |
| **RING2** | ~410–465 | Catalytic RING; houses active-site **Cys431** (the thioester-accepting cysteine); occluded by RING0 in the inactive state [^wauer2015] |

The crystal structure of full-length Parkin in the auto-inhibited state was solved by Trempe et al. 2013 and independently by Riley et al. 2013, revealing how four inter-domain contacts cooperate to sequester Cys431 [^trempe2013].

## Auto-inhibition and activation mechanism

In basal conditions, three principal autoinhibitory contacts maintain Parkin in an inactive conformation [^trempe2013]:

1. **Ubl–RING1 contact** — the UbL domain occludes the RING1 E2-binding surface.
2. **REP–RING1 contact** — the REP helix (~383-410) covers the E2 docking site on RING1.
3. **RING0–RING2 contact** — RING0 sequesters Cys431 of RING2, preventing thioester bond formation.

### PINK1-mediated sequential activation

On healthy mitochondria, PINK1 is constitutively imported, cleaved by the inner-membrane protease PARL, and retrogradely degraded — keeping cytosolic PINK1 near zero. When membrane potential (ΔΨm) collapses, import stalls and PINK1 accumulates on the OMM surface [^narendra2008]. Stabilized PINK1 then initiates a two-hit activation of Parkin:

**Hit 1 — Phospho-ubiquitin (phospho-Ub).** PINK1 phosphorylates Ser65 on pre-existing ubiquitin chains on the OMM. Phospho-Ub (pS65-Ub) binds a site on **RING1** of cytosolic Parkin, formed by His302 and Arg305, on the face of RING1 opposite to the Ubl-binding helix [^wauer2015]. This binding competes with Ubl for RING1 occupancy through negative allostery — displacing the Ubl domain and initiating auto-inhibition relief [^wauer2015]. #gap/no-fulltext-access — Koyano 2014 (not_oa) characterised the phospho-Ub feed-forward loop; the specific RING1 binding site was resolved by Wauer 2015.

**Hit 2 — Direct Parkin phosphorylation.** PINK1 directly phosphorylates Parkin at Ser65 within the UbL domain. Phospho-UbL can no longer maintain the inhibitory contact with RING1, fully releasing the REP element and opening the RING2 active site [^wauer2015].

Both hits are required for maximal activation: phospho-Ub binding provides initial recruitment and partial activation, while direct Ubl phosphorylation provides the conformational change needed for Cys431 engagement [^wauer2015]. A feed-forward amplification loop results: active Parkin ubiquitinates OMM substrates → PINK1 phosphorylates the new ubiquitin chains → more Parkin is recruited from the cytosol [^koyano2014].

### E3 catalytic mechanism

Parkin operates as an RBR E3 ligase via a RING-HECT hybrid mechanism:

1. **E1 (UBA1) loads ubiquitin onto E2** (UBE2L3 / UBE2D family).
2. **RING1 recruits the E2~Ub thioester** via the E2 docking site.
3. **Ubiquitin is transferred as a thioester to Parkin Cys431** (RING2), forming an enzyme-bound intermediate.
4. **Ubiquitin is then delivered to a Lys residue on the substrate** via aminolysis.

Unlike HECT ligases, Parkin's thioester intermediate is transient and the substrate identity is specified by RING1 docking contacts, not a HECT-type C-lobe [^trempe2013]. Parkin generates both **K48** (proteasomal degradation) and **K63** (autophagy receptor recruitment) polyubiquitin chains, with chain type partly dependent on the E2 used.

## OMM substrates and downstream events

Sarraf et al. 2013 used quantitative diGLY-capture proteomics (QdiGLY / SILAC) to map the Parkin-dependent ubiquitylome in HCT116 and HeLa cells after CCCP-induced depolarization, identifying hundreds of ubiquitylation sites in dozens of proteins, with ≥36 confirmed MOM-resident proteins among 60 high-confidence Class 1/2 targets [^sarraf2013]. Functionally important substrate classes:

| Substrate | Consequence of ubiquitination |
|---|---|
| **MFN1, MFN2** (mitofusins) | K48-linked polyUb → p97/VCP-mediated extraction → proteasomal degradation; prevents re-fusion of damaged mitochondrion with healthy network [^tanaka2010] |
| **MIRO1, MIRO2** (Rho GTPases) | Ubiquitination → degradation → mitochondria detach from microtubule tracks (motor proteins KIF5/TRAK released); prevents trafficking away from autophagosomal machinery #gap/needs-replication — mechanistic detail mainly from cell lines |
| **VDAC1** | K27-linked polyubiquitination (predominantly) → p62/SQSTM1 recruitment; VDAC1 is required for Parkin translocation and final mitochondrial clearance [^geisler2010] |
| **TOMM20, TOMM70** | Ubiquitination of TOM complex components; further impairs import and aids in flagging the organelle |
| **HK1, HK2** (hexokinases) | Ubiquitination identified proteomically; 14 Class 1/2 diGLY sites detected across both globular domains of HK1; functional consequence of HK1/2 OMM displacement not fully characterised [^sarraf2013] |

Geisler et al. 2010 demonstrated that Parkin-mediated VDAC1 ubiquitination (K27-linked chains, primarily) is required for robust p62 recruitment and efficient mitophagy flux in HeLa and SH-SY5Y neuronal cells; siRNA knockdown of VDAC1 significantly reduced both Parkin translocation and final mitochondrial clearance [^geisler2010].

After ubiquitination, the autophagy receptors **NDP52** and **OPTN (optineurin)** — which contain both UBA (ubiquitin-association) domains and LIR (LC3-interacting region) motifs — bridge the poly-Ub coat to LC3-II on growing autophagosome membranes, driving engulfment of the targeted mitochondrion (see [[mitophagy]] for receptor-level detail).

## Role in Parkinson's disease

### Discovery and genetic evidence

Kitada et al. 1998 identified *PRKN* mutations in Japanese families with autosomal recessive juvenile parkinsonism (AR-JP), characterized by onset before age 40, selective dopaminergic neuron loss in the substantia nigra, and Lewy body-negative pathology (typically) [^kitada1998]. The paper identified large deletions across the *PRKN* gene in affected individuals in a Nature paper that has accumulated >5,100 citations. PARK2 is now the most common cause of monogenic PD worldwide, with compound heterozygous loss-of-function variants responsible for a substantial proportion of early-onset PD cases.

The genetic implication is unambiguous: Parkin-mediated mitophagy is non-redundant for dopaminergic neuron survival in humans. No compensatory pathway fully substitutes when Parkin function is lost.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — PRKN encodes a human protein; AR-JP is the human loss-of-function phenotype |
| Phenotype conserved in humans? | yes — dopaminergic neuron degeneration is the cardinal PD phenotype in PRKN-null humans |
| Replicated in humans? | yes (genetic epidemiology; multiple independent families/ethnic groups) |

### Parkin in sporadic PD and aging

The connection extends beyond Mendelian PD: Parkin protein levels and activity decline with aging in the brain and other post-mitotic tissues, paralleling the broader age-related decline in mitophagy flux [^onishi2021-review]. S-nitrosylation and oxidative modification of Parkin Cys residues in aged neurons may contribute to loss of activity even without genetic mutation — a potential mechanistic link between age-related nitrosative stress, mitophagy impairment, and sporadic PD risk. #gap/no-mechanism — the in-vivo quantitative contribution of oxidative Parkin inactivation to sporadic PD is not established.

## Aging context — Parkin overexpression extends lifespan

Rana et al. 2013 showed that ubiquitous or pan-neuronal overexpression of Parkin in *Drosophila melanogaster* extends both mean and maximum lifespan (ubiquitous daGS>UAS-parkin: ~28% increase in both mean and maximum lifespan in female flies; log-rank, n > 200 female flies per group), reduces the accumulation of insoluble ubiquitin-conjugated protein aggregates with age, and alters mitochondrial dynamics toward fission (reduced dMfn levels, increased mitochondrial fragmentation) [^rana2013]. Parkin OE also increased citrate synthase activity and respiratory complex I/II activity, suggesting functional mitochondrial improvement. These findings suggest that augmenting Parkin activity above basal levels is sufficient to delay aging-associated proteotoxicity and mitochondrial dysfunction in flies.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — PRKN is a human gene; mammalian Parkin function is conserved |
| Phenotype conserved in humans? | unknown — lifespan extension not tested in mice or humans |
| Replicated in humans? | no #gap/needs-human-replication |

Notably, Parkin overexpression studies in mice are less conclusive: transgenic Parkin mice show improved mitochondrial function in some metabolic contexts but no consistent longevity phenotype has been reported in aged mice. #gap/needs-replication

## Pathway membership

- [[pink1-parkin-pathway]] — the dedicated damage-sensing mitophagy arm; Parkin is the effector E3 ligase
- [[mitophagy]] — process page; Parkin-mediated ubiquitination drives cargo-receptor docking and autophagosome recruitment
- [[autophagy]] — parent process; Parkin-tagged mitochondria are degraded via the core autophagy machinery
- [[ubiquitin-proteasome-system]] — Parkin-generated K48 chains on MFN1/2 are resolved by the proteasome, not autophagy

## Key interactors

- [[pink1]] — upstream serine/threonine kinase; stabilizes on OMM under depolarization; phosphorylates both ubiquitin Ser65 and Parkin Ser65 to sequentially activate Parkin
- [[mfn1]], [[mfn2]] — OMM fusion GTPases; primary Parkin substrates for K48 polyUb and proteasomal degradation
- [[miro1]], [[miro2]] — mitochondrial Rho GTPases; Parkin ubiquitination releases microtubule anchoring
- [[vdac1]] — voltage-dependent anion channel; ubiquitinated by Parkin; recruits p62/SQSTM1
- [[optn]] — autophagy receptor; binds Parkin-generated polyUb chains via UBA domain; LIR motif engages LC3
- [[ndp52]] — autophagy receptor; redundant with OPTN in PINK1/Parkin-mediated mitophagy
- [[p62]] — autophagy receptor/scaffold; binds Parkin-generated polyUb (K63) via UBA; supplementary role

## Disease and pharmacology

- **Parkinson's disease (AR-JP / PARK2)** — loss-of-function PRKN mutations; most common monogenic PD form; see [[parkinsons-disease]] (implicit stub)
- **No approved PRKN-targeted therapy** exists. Efforts to pharmacologically reactivate Parkin focus on: (1) releasing auto-inhibition allosterically; (2) reducing oxidative/nitrosative modification of Cys residues. Several small-molecule Parkin activators are in preclinical development. #gap/long-term-unknown
- **Parkin and cancer:** PRKN behaves as a tumor suppressor in some contexts (its locus 6q25 is among the most frequently deleted in human cancers); the connection is hypothesized to involve mitochondrial quality control and metabolic reprogramming — mechanistically unresolved. #gap/no-mechanism

## Limitations and gaps

- Age-related decline of Parkin protein and activity in human post-mitotic tissues is documented in small studies only. #gap/needs-replication
- Whether augmenting Parkin (via gene delivery or small-molecule activation) extends healthspan or lifespan in mice has not been definitively established. #gap/needs-human-replication
- The contribution of Parkin to basal (non-depolarization-triggered) mitophagy in vivo is contested; most mechanistic work uses CCCP depolarization, a pharmacological insult not equivalent to physiological mitophagy. #gap/no-mechanism
- MIRO1/2 ubiquitination by Parkin and the consequent mitochondrial trafficking arrest is mechanistically well-described in cell lines but has limited direct in-vivo confirmation in aged tissue. #gap/needs-replication
- Sporadic-PD S-nitrosylation inactivation of Parkin in aged human brain needs quantitative in-vivo validation. #gap/no-mechanism

## Related pages

- [[pink1]] — upstream kinase partner (implicit stub — seed next in round 6b)
- [[pink1-parkin-pathway]] — dedicated pathway page (implicit stub)
- [[mitophagy]] — verified-partial; parent process
- [[autophagy]] — verified-partial; parent process
- [[ubiquitin-proteasome-system]] — downstream proteasomal arm for MFN1/2 K48 substrates (implicit stub)
- [[parkinsons-disease]] — disease context (implicit stub)
- [[miro1]] — Parkin substrate; mitochondrial trafficking anchor (implicit stub)
- [[mfn1]], [[mfn2]] — Parkin substrates; OMM fusion proteins (implicit stubs)
- [[vdac1]] — Parkin substrate; OMM channel (implicit stub)
- [[optn]] — cargo receptor downstream of Parkin (implicit stub)
- [[ndp52]] — cargo receptor downstream of Parkin (implicit stub)
- [[mitochondrial-dysfunction]] — hallmark driven by failed mitophagy

## Footnotes

[^kitada1998]: doi:10.1038/33416 · in-vivo (human genetics) · n=N/A (pedigree genetic study, multiple Japanese families) · Kitada et al. 1998 Nature · original identification of PRKN mutations in autosomal recessive juvenile parkinsonism; large deletions identified in affected individuals; >5,100 citations · archive: not_oa

[^narendra2008]: doi:10.1083/jcb.200809125 · in-vitro · model: HeLa cells, HEK293 cells, mouse MEFs, rat cortical neurons · Narendra et al. 2008 J Cell Biol · foundational study showing Parkin is selectively recruited to depolarized mitochondria and promotes their autophagic degradation; establishes Parkin-dependent, ATG5-dependent mitophagy; does not characterize the PINK1 kinase mechanism or phospho-ubiquitin (those were discovered 2014) · local PDF available

[^trempe2013]: doi:10.1126/science.1237908 · in-vitro (X-ray crystallography) · Trempe et al. 2013 Science · first crystal structure of full-length human Parkin in auto-inhibited conformation; resolves the four inter-domain contacts that sequester Cys431; 519 citations · archive: not_oa

[^koyano2014]: doi:10.1038/nature13392 · in-vitro · model: HeLa cells + biochemical reconstitution · Koyano et al. 2014 Nature · demonstrates that ubiquitin phosphorylated at Ser65 by PINK1 (phospho-Ub) directly activates Parkin; establishes the phospho-Ub feed-forward amplification loop; 1,435 citations · archive: not_oa

[^wauer2015]: doi:10.15252/embj.201592237 · in-vitro (crystallography + SAXS + ITC + NMR + biochemical) · Sauvé, Lilov, Seirafi et al. (Trempe & Gehring labs) 2015 EMBO J · presents Delta86-130 Parkin crystal structure at 2.54 Å; shows pUb binds RING1 at His302/Arg305 (opposite face from Ubl-binding helix); demonstrates Ubl phosphorylation (pUbl) releases Ubl from RING1 and increases UbcH7 binding affinity; both pUb and pUbl are required for maximal Parkin E3 activity; local PDF available

[^geisler2010]: doi:10.1038/ncb2012 · in-vitro · model: HeLa cells + SH-SY5Y neuronal cells · Geisler, Holmström, Skujat, Fiesel, Rothfuss, Kahle & Springer 2010 Nat Cell Biol · shows PINK1 kinase activity and MTS are prerequisites for Parkin translocation; Parkin mediates K27- and K63-linked polyubiquitin chain formation on mitochondria; identifies VDAC1 as a Parkin ubiquitination substrate via K27-linked chains predominantly; VDAC1 knockdown abrogates both Parkin translocation and mitochondrial clearance; p62/SQSTM1 recruitment to clustered mitochondria requires VDAC1 ubiquitination; local PDF available

[^tanaka2010]: doi:10.1083/jcb.201007013 · in-vitro · model: SH-SY5Y neuroblastoma cells (endogenous Parkin) + HeLa cells (YFP-Parkin) + MEFs · Tanaka, Cleland, Xu, Narendra, Suen, Karbowski & Youle 2010 J Cell Biol · demonstrates Parkin-dependent ubiquitination of MFN1 and MFN2 upon CCCP treatment; Mfn degradation requires p97/AAA+ ATPase; both p97 and proteasome activity required for Parkin-mediated mitophagy; Parkin-mediated mitofusin loss prevents re-fusion; inhibition of Drp1-mediated fission or p97 blocks Parkin-induced mitophagy; local PDF available

[^sarraf2013]: doi:10.1038/nature12043 · in-vitro (QdiGLY proteomics / SILAC) · model: HCT116^PARKIN and HeLa^PARKIN cells · Sarraf, Raman, Guarani-Pereira et al. (Harper lab) 2013 Nature · landscape-scale diGLY-capture proteomics of the Parkin-dependent ubiquitylome after CCCP-induced depolarization; identifies hundreds of ubiquitylation sites in dozens of proteins; 36 confirmed MOM proteins among 60 Class 1/2 high-confidence targets including MFN1/2, RHOT1/2 (MIRO1/2), VDAC1/2/3, HK1/HK2, TOMM20, TOMM70; complementary AP-MS identifies interaction partners; local PDF available (author manuscript)

[^rana2013]: doi:10.1073/pnas.1216197110 · in-vivo · model: Drosophila melanogaster (daGS>UAS-parkin ubiquitous OE; Elav>UAS-parkin neuronal OE; mifepristone-inducible) · Rana, Rera & Walker 2013 PNAS · ubiquitous Parkin OE extends both mean AND maximum lifespan (~28% increase in female flies; log-rank, n > 200 per group); reduces insoluble ubiquitin-conjugated protein aggregates in aged flies; reduces dMfn levels and promotes mitochondrial fragmentation; increases citrate synthase activity and respiratory complex I/II activity; no major physiological tradeoffs (feeding, physical activity, fecundity); local PDF available

[^onishi2021-review]: doi:10.15252/embj.2020104705 · review · model: multi-system · Onishi, Yamano, Sato, Matsuda & Okamoto 2021 EMBO J · comprehensive review covering PINK1/Parkin mechanism, receptor-mediated arms, aging decline of mitophagy, neurodegeneration context · local PDF available (see [[mitophagy]] footnotes)
