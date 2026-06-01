---
type: protein
aliases: [ATG3, autophagy related 3, APG3, APG3L, Apg3]
uniprot: Q9NT62
ncbi-gene: 64422
hgnc: 20962
mouse-ortholog: Atg3
ensembl: ENSG00000144848
druggability-tier: 4
caused-by: []
causes: []
key-domains: [autophagy-E2-like-domain, N-terminal-membrane-sensing-region, LIR-motif, FR-region]
key-ptms: [Cys264-thioester, Met1-acetylation, Lys243-isopeptide-ATG12, caspase-8-cleavage-Asp169]
pathways: ["[[autophagy]]", "[[mitophagy]]"]
hallmarks: ["[[disabled-macroautophagy]]", "[[loss-of-proteostasis]]"]
known-interactors: ["[[atg7]]", "[[lc3]]", "[[atg12]]", "[[atg5]]", "[[atg16l1]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Ichimura 2000 (local PDF), Tanida 2002 (downloaded PDF), and Sou 2008 (downloaded PDF) verified against primary sources. Yamada 2007 (10.1074/jbc.M611473200) is hybrid OA but failed download (0 candidate URLs after filtering); structural claims from Yamada 2007 remain unverified against full PDF — recommend re-attempt when OA resolver is available. Sakoh-Nakatogawa 2015 is closed-access (#gap/no-fulltext-access). UniProt Q9NT62 identity fields (314 aa, Cys264, PTMs) not independently re-verified against live database."
---


# ATG3 — autophagy E2-like conjugating enzyme for LC3 lipidation

ATG3 is the dedicated E2-like ubiquitin-conjugating enzyme responsible for transferring ATG8-family proteins — including [[lc3|LC3A/B/C]], GABARAP, and GABARAPL1/2 — onto phosphatidylethanolamine (PE) in the phagophore membrane. This lipidation event (LC3-I → LC3-II) is the biochemical signature of autophagosome commitment and the most commonly used readout of autophagic flux in cell biology. ATG3 is **strictly specific** to the LC3/ATG8 lipidation system; the parallel ATG12–ATG5 conjugation cascade uses [[atg10]] as its E2 instead [^tanida2002]. Both systems depend on [[atg7]] as the shared E1 upstream, but their E2 enzymes are non-interchangeable. Germline deletion of Atg3 in mice is neonatal lethal, mirroring the phenotype of Atg5 and Atg7 knockouts [^sou2008].

## Identity

| Field | Value |
|---|---|
| UniProt | Q9NT62 (ATG3_HUMAN) |
| NCBI Gene | 64422 |
| HGNC | 20962 |
| Gene symbol | ATG3 |
| Aliases | APG3, APG3L, Apg3 (yeast-derived pre-2003 nomenclature) |
| Mouse ortholog | Atg3 (one-to-one; functionally equivalent) |
| Protein length | 314 amino acids (UniProt Q9NT62, canonical isoform) |
| Molecular weight | ~36 kDa |
| Yeast functional ortholog | Atg3p / Aut1p (*S. cerevisiae*) |

**Naming note:** No `pathways/atg3.md` exists. This page (`molecules/proteins/atg3.md`) is the canonical `[[atg3]]` resolution. The autophagy pathway page is [[autophagy]].

## Domain structure and active site

ATG3 adopts a fold structurally homologous to canonical E2 ubiquitin-conjugating enzymes, despite sharing low primary sequence identity with the UBC superfamily [^yamada2007]. Its key functional regions include:

- **N-terminal membrane-curvature-sensing region (~residues 1–25):** An amphipathic helix that senses and associates with highly curved PE-rich membranes, concentrating ATG3 at phagophore edges where lipidation occurs [^sakoh2015]. This positions ATG3 directly at its site of action without requiring a membrane-tethering receptor for every round of lipidation.
- **Flexible region (FR, ~residues 65–130):** An intrinsically disordered insertion specific to ATG3, not found in canonical UBC-fold E2s. The FR contains the **LC3-interacting region (LIR, ~residues 104–110)** that docks ATG3 to the ATG8/LC3 substrates it transfers, and a separate region (~140–170) that contacts the ATG12–ATG5 E3-like complex to catalyze the final lipidation step [^yamada2007]. Caspase-8 cleaves within the FR at **Asp169** (LETD motif), inactivating ATG3 and thereby suppressing pro-survival autophagy during apoptotic signaling [^uniprot-q9nt62].
- **Catalytic core / E2-like domain (~residues 170–314):** Contains the conserved E2 fold and the catalytic **Cys264**, which forms the obligatory thioester intermediate with the C-terminal Gly of LC3/ATG8 family proteins [^tanida2002]. Cys264→Ala substitution abolishes all ATG8-family lipidation.
- **Lys243:** Site of an unusual intramolecular (or inter-complex) ATG12~ATG3 isopeptide bond, identified in mammalian cells. This ATG12–ATG3 conjugate is present at substoichiometric levels and appears to regulate mitochondrial homeostasis rather than bulk autophagy flux; cells lacking ATG12–ATG3 conjugation show mitochondrial abnormalities [^uniprot-q9nt62]. This is distinct from the dominant ATG12–ATG5 conjugate.

## Reaction mechanism

ATG3 operates as the E2 in the ATG8/LC3 conjugation cascade, functioning downstream of [[atg7]] (E1) and upstream of the [[atg12]]–[[atg5]]–[[atg16l1]] E3-like complex:

1. **Substrate activation (E1 step, by ATG7):** ATG7 adenylates the C-terminal Gly120 of LC3 (or equivalent Gly of any ATG8-family member after [[atg4]]-mediated C-terminal processing), forming an LC3~AMP intermediate. ATG7 then transfers LC3 to its own active-site Cys572 as a thioester.

2. **Trans-thiolation to ATG3 (E1→E2 transfer):** The LC3~ATG7 thioester is resolved by nucleophilic attack from **ATG3 Cys264**, generating an LC3~ATG3 thioester intermediate and releasing ATG7. Structural work shows the C-terminal domain of ATG3 docks with the N-terminal domain of ATG7 in a trans arrangement across the ATG7 homodimer [^yamada2007].

3. **E3-assisted lipidation (final step):** The ATG12–ATG5–ATG16L1 E3-like complex (~800 kDa) catalyzes attack of the PE amino group on the LC3~ATG3 thioester. This forms the amide (isopeptide-like) bond between LC3 Gly120 and PE headgroup nitrogen, yielding the membrane-anchored **LC3-II** species. The ATG12–ATG5 conjugate is essential for this step — cells or organisms lacking ATG5 or ATG12 cannot perform LC3 lipidation despite intact ATG3 and ATG7 [^ichimura2000].

The result is insertion of LC3-II into both faces of the phagophore membrane, with the cytoplasmic-facing LC3-II serving as the cargo-receptor docking platform (via LIR-domain interactions with p62/SQSTM1, NDP52, NBR1, and other adaptors) and the inner-leaflet LC3-II contributing to membrane sealing and fusion competence.

## Discovery

Yeast Atg3p (then called Aut1p or Apg3p) was identified as an autophagy-essential gene in *S. cerevisiae* screens. The conjugation cascade involving Atg3p as an E2 for Atg8p–PE was characterized biochemically in yeast in 2000 by Ichimura et al., who demonstrated that Atg8p is covalently linked to PE via a ubiquitin-like conjugation mechanism [^ichimura2000]. The human ATG3 ortholog was cloned and characterized as an authentic E2 enzyme for all three ATG8-family substrates then known — GATE-16, GABARAP, and MAP-LC3 — by Tanida et al. in 2002, in the same paper demonstrating ATG3's additional facilitation of ATG12–ATG5 conjugation [^tanida2002].

The crystal structure of human ATG3 at 2.3 Å resolution was solved by Yamada et al. in 2007 (PDB: 2DYT), revealing the E2-like fold with the FR insertion and providing the structural basis for ATG3's unique functional properties [^yamada2007].

## Knockout phenotypes

### Whole-body Atg3 knockout (constitutive)

Sou et al. 2008 generated Atg3-deficient mice by conventional gene targeting (disruption of exon 10, which encodes the active-site Cys) and reported that **Atg3^-/- pups were born alive at Mendelian frequency but died within 1 day after birth (n = 11)** [^sou2008]. Neonatal body weight was 0.99 ± 0.12 g (n = 8), slightly but significantly lower than wild-type and heterozygous littermates (1.19 ± 0.05 g; p < 0.002). Plasma amino acid concentrations in Atg3^-/- neonates were comparable to wild-type at birth but significantly lower at 10 h after Caesarean delivery, consistent with failure to mobilize amino acids via autophagy during the nutrient-scarce perinatal period.

Electron-microscopic and immunofluorescence analyses revealed four distinct defects in Atg3^-/- cells: (1) failure of LC3 localization to isolation membranes (due to loss of LC3 lipidation); (2) delayed dissociation of the Atg12–Atg5–Atg16L complex from isolation membranes; (3) dysregulated and prolonged elongation of isolation membranes in response to nutrient deprivation; and (4) impaired closure of isolation membrane sacs, resulting in accumulation of aberrant membranous structures including multilamellar structures. The frequency of aberrant unclosed structures in Atg3^-/- MEFs (22.0 ± 10.2% of AVi) was significantly higher (p < 0.01) than in wild-type MEFs (5.5 ± 5.9% of AVi). Atg12–Atg5 conjugation was also markedly reduced in Atg3^-/- MEFs, demonstrating cross-talk between the two conjugation systems.

Neonatal lethality mirrors the phenotype of Atg5^-/- and Atg7^-/- mice. The paper explicitly compared Atg3^-/- to these other autophagy-deficient models and concluded that all phenotypes are consistent with impaired Atg8/LC3 system function rather than a primary defect in Atg12–Atg5 conjugation, since the reduced Atg12–Atg5 level in Atg3^-/- cells was rescued by exogenous Atg3 (but not the Cys264S active-site mutant).

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — ATG3 is highly conserved; human Q9NT62 is the functional ortholog of yeast Atg3p |
| Phenotype conserved in humans? | partial — no human ATG3-null known; functional hypomorphs not characterized to date |
| Replicated in humans? | no — constitutive KO data are mouse-only; human genetic validation lacking |

#gap/needs-human-replication — Complete ATG3 deficiency has not been reported in humans; whether hypomorphic ATG3 variants contribute to neurodegeneration or metabolic disease is unstudied.

## Selectivity: LC3 system vs ATG12 system

A critical point for interpreting experimental literature: **ATG3 and ATG10 are not interchangeable.** ATG3 is specific to ATG8-family (LC3/GABARAP) lipidation; ATG10 is specific to ATG12~ATG5 isopeptide conjugation. This specificity is enforced by the distinct E2-substrate interaction surfaces in each E2 enzyme. Perturbations that selectively reduce ATG3 activity (e.g., caspase-8 cleavage, Cys264 oxidation) would be predicted to block LC3 lipidation while leaving ATG12–ATG5 conjugate formation intact — potentially dissociating these two branches of the autophagy machinery. By contrast, [[atg7]] loss blocks both cascades simultaneously.

| E2 enzyme | E1 (upstream) | Substrate transferred | Acceptor | Final product |
|---|---|---|---|---|
| [[atg10]] | [[atg7]] | ATG12 | Lys130 of [[atg5]] | ATG12–ATG5 isopeptide conjugate |
| **ATG3** | [[atg7]] | LC3/ATG8 family | PE (phagophore membrane) | LC3-II (membrane-anchored) |

## Aging context

### ATG3 as a core autophagy component that declines with age

ATG3 is not typically cited as the primary rate-limiting step in age-associated autophagy decline — that role is more often ascribed to upstream regulators such as [[beclin-1]], [[atg7]], and [[tfeb]]. However, as the sole mammalian E2 for LC3 lipidation, ATG3 activity is indispensable for autophagy flux, and any age-associated decline in its expression or activity would block the pathway at the lipidation step regardless of upstream signals. The age-trajectory of ATG3 protein levels in humans is not well-characterized. #gap/needs-replication

### Non-conjugation role: membrane curvature sensing

The N-terminal amphipathic helix of ATG3 preferentially binds highly curved membranes enriched in PE [^sakoh2015]. This membrane-sensing function is proposed to help restrict LC3 lipidation to the appropriate phagophore membrane edges rather than occurring promiscuously on all cellular membranes. The biological relevance of this targeting mechanism in aged cells — where membrane lipid composition and organelle morphology change — is not yet explored. #gap/no-mechanism #gap/needs-replication

### ATG12–ATG3 conjugate and mitochondrial quality control

In addition to its role as an E2 in LC3 lipidation, ATG3 is itself a substrate for ATG12 conjugation at Lys243 [^uniprot-q9nt62]. This ATG12~ATG3 conjugate localizes to mitochondria-associated membranes and is required for normal mitochondrial homeostasis: cells that cannot form ATG12~ATG3 show increased mitochondrial fragmentation and reduced mitochondrial content without a defect in bulk autophagy flux. This positions ATG3 as a participant in [[mitophagy]]-adjacent quality control mechanisms, distinct from its canonical autophagy E2 role. Whether age-related changes in ATG12~ATG3 conjugate levels contribute to the mitochondrial dysfunction of aging is unknown. #gap/no-mechanism #gap/needs-human-replication

## Pathway membership and cross-references

- [[autophagy]] — ATG3 executes the LC3 lipidation step, the defining biochemical event of autophagosome formation.
- [[mitophagy]] — LC3-II generated by ATG3 is the membrane platform to which mitophagy receptor proteins (BNIP3L/NIX, [[bnip3]], [[fundc1]]) and ubiquitin-coated mitochondria (via PINK1–Parkin–p62) dock.
- [[disabled-macroautophagy]] — ATG3 loss blocks autophagosome biogenesis at the LC3 lipidation step.
- [[loss-of-proteostasis]] — Failure of LC3-II-dependent cargo sequestration leads to aggregate accumulation.
- [[atg7]] — E1 enzyme; ATG7 Cys572 forms the thioester with LC3 before transfer to ATG3 Cys264.
- [[atg10]] — Parallel E2 for the ATG12 system; operates independently of ATG3 using the same E1.
- [[lc3]] — Primary substrate; see that page for the LC3-I/LC3-II flux dynamics and disease context.
- [[atg5]] — Component of the E3-like complex that catalyzes ATG3's final lipidation step.
- [[atg16l1]] — Scaffolding subunit of the E3-like complex; specifies membrane site of LC3 lipidation.
- [[atg12]] — Forms the covalent ATG12–ATG5 conjugate (E3-like complex) and separately conjugates to ATG3 Lys243.
- [[beclin-1]] — Acts upstream at phagophore nucleation; ATG3 operates downstream in elongation.

## Limitations and knowledge gaps

- `#gap/needs-human-replication` — All genetic loss-of-function data are from mouse knockouts (neonatal lethal) or yeast. No human ATG3 loss-of-function phenotype has been characterized. Whether hypomorphic ATG3 variants contribute to disease is unknown.
- `#gap/needs-replication` — Age-associated changes in ATG3 protein levels or activity in human tissues are not well-documented. Most evidence of autophagy decline with age focuses on upstream regulators (ATG7, beclin-1, TFEB); ATG3-specific changes require dedicated study.
- `#gap/no-mechanism` — The physiological relevance of the N-terminal membrane-curvature-sensing helix in intact cells in aging tissues is unexplored.
- `#gap/no-mechanism` — The ATG12~ATG3 conjugate's role in mitochondrial quality control and its potential changes in aging are not mechanistically characterized.
- `#gap/needs-replication` — Caspase-8-mediated ATG3 cleavage at Asp169 as a regulatory switch between autophagy and apoptosis is established biochemically but its in vivo significance in aging or disease is not quantitatively characterized.
- ATG3's structural characterization (PDB: 2DYT, Yamada 2007) is from human protein; mechanistic data for the FR-region interactions with the ATG12–ATG5–ATG16L1 E3 complex remain structurally incomplete — a full ternary complex structure has not been published as of 2026. #gap/no-fulltext-access — Yamada 2007 (doi:10.1074/jbc.M611473200) could not be downloaded; structural claims (FR residue numbers, E1-E2 trans-docking geometry) on this page are sourced from this paper and remain unverified against the primary PDF.

## Footnotes

[^tanida2002]: [[studies/tanida-2002-atg3-e2-lc3-lipidation]] · n=N/A · in-vitro (biochemical reconstitution + co-immunoprecipitation in COS7/HEK293 cells) · established human ATG3 (hApg3p) as authentic E2 for GATE-16, GABARAP, and MAP-LC3; Cys264→Ser mutation abolishes E2 activity; ATG3 forms E1·E2 complex with ATG7 (hApg7p); also demonstrated ATG3 facilitation of ATG12–ATG5 conjugation · model: recombinant human ATG3 + ATG7 + ATG8-family substrates; COS7 and HEK293 cells · doi:10.1074/jbc.M200385200 · cited_by: 275 · locally: downloaded (PDF verified 2026-05-04)

[^yamada2007]: [[studies/yamada-2007-atg3-crystal-structure]] · n=N/A · in-vitro (X-ray crystallography + biochemical mutagenesis) · 2.3 Å crystal structure of human ATG3 (PDB: 2DYT); identified FR-region insertion; mapped Cys264 active site; E1-E2 trans-docking model · model: recombinant human ATG3 · doi:10.1074/jbc.M611473200 · cited_by: 156 · locally: download failed (hybrid OA; 0 candidate URLs after filtering; #gap/no-fulltext-access — structural claims from this source unverified against full PDF)

[^ichimura2000]: [[studies/ichimura-2000-atg8-pe-ubiquitin-like]] · n=N/A · in-vitro + in-vivo (yeast biochemistry and genetics) · demonstrated Atg8 is covalently linked to PE via a ubiquitin-like conjugation cascade; Atg7p is E1 (activates Atg12 and Atg8); Atg3p (Apg3p/Aut1p) is E2 for Atg8; active-site Cys is Cys234 in yeast Atg3p (equivalent to human Cys264); Atg8–PE amide bond to PE headgroup nitrogen confirmed by mass spec · model: *S. cerevisiae* · doi:10.1038/35044114 · cited_by: 2016 · locally:  (PDF verified 2026-05-04)

[^sou2008]: [[studies/sou-2008-atg3-ko-neonatal-lethal]] · n=11 (deaths within 1 d); n=8 (body weight); neonates from multiple litters at Mendelian frequency (+/+:+/-:-/- = 25:38:23) · in-vivo (mouse, Atg3^-/- germline KO via exon 10 disruption) · Atg3^-/- mice born alive but died within 1 day (n=11); body weight 0.99 ± 0.12 g vs 1.19 ± 0.05 g (WT/het; p<0.002); four-component EM defect: LC3 mislocalisation, delayed Atg12–Atg5 dissociation, aberrant elongation, impaired closure; Atg12–Atg5 conjugation markedly reduced; aberrant structures 22.0 ± 10.2% of AVi vs 5.5 ± 5.9% (WT; p<0.01) · model: Atg3-deficient Mus musculus · doi:10.1091/mbc.e08-03-0309 · cited_by: 463 · locally: downloaded (PDF verified 2026-05-04)

[^sakoh2015]: [[studies/sakoh-nakatogawa-2015-atg3-membrane-localization]] · n=N/A · in-vitro + in-vivo (yeast biochemistry; membrane binding assays) · mapped N-terminal amphipathic helix of Atg3 to membrane curvature sensing; LIR-motif enhancement of phagophore membrane expansion · model: *S. cerevisiae* Atg3 (findings likely conserved in human ATG3 given helix conservation) · doi:10.1016/j.febslet.2015.02.003 · cited_by: 51 · locally: not_oa (status: not_oa per a local paper archive; closed-access) · #gap/no-fulltext-access

[^uniprot-q9nt62]: UniProt Q9NT62 (ATG3_HUMAN), accessed 2026-05-04 — Swiss-Prot curated entry; Cys264 active site, Met1-acetylation, caspase-8 cleavage at Asp169, ATG12~ATG3 Lys243 isopeptide, LIR motif (~104–110), N-terminal membrane-sensing helix
