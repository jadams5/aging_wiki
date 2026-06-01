---
type: protein
aliases: [BNIP3L, NIP3-like protein X, NIX, BCL2/adenovirus E1B 19 kDa-interacting protein 3-like]
uniprot: O60238
ncbi-gene: 665
hgnc: 1085
ensembl: ENSG00000104765
mouse-ortholog: Bnip3l
druggability-tier: 4
caused-by: []
causes: []
pathways: ["[[mitophagy]]", "[[autophagy]]", "[[apoptosis-pathway]]", "[[bcl-2-family-signaling]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[disabled-macroautophagy]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Hanna 2012, Novak 2010, Schweers 2007, Sandoval 2008 verified against primary source PDFs. Chen 1999 unverifiable (closed-access, DOI lookup failed — not_oa). Sowter 2001 unverifiable (no DOI; no full-text in archive). UniProt O60238 identity fields not independently re-checked against live database."
---

# NIX (BNIP3L)

NIX (also called BNIP3L, "NIP3-like protein X") is a tail-anchored outer mitochondrial membrane (OMM) protein and the closest paralog of [[bnip3]] (~52% sequence identity in humans). NIX carries dual identities: a **mitophagy cargo receptor** (via an N-terminal LIR motif that preferentially engages the GABARAP subfamily over LC3 — the opposite selectivity from BNIP3) and a **BH3-like pro-apoptotic effector** that weakly antagonizes BCL-2/BCL-xL. NIX is the **dominant driver of programmed mitochondrial clearance during erythrocyte maturation**: Nix-/- mice retain mitochondria in ~40% of total circulating erythrocytes versus ~1% in wild type (MitoTracker Red flow cytometry; Schweers 2007) — and 28% of RBCs at 3 weeks versus near-zero in wild type by a separate measure (Mito+CD71+ staining; Sandoval 2008). Both NIX and BNIP3 are HIF-1α transcriptional targets induced by hypoxia, but NIX is physiologically non-redundant with BNIP3 in the erythroid lineage.

## Identity

- **UniProt:** O60238 (BNIP3L_HUMAN)
- **NCBI Gene:** 665
- **HGNC symbol:** BNIP3L (canonical); common alias NIX
- **Mouse ortholog:** Bnip3l (one-to-one; also called Nix in the mouse literature)
- **Length:** 219 amino acids (canonical human isoform; ~3 kDa longer than BNIP3's 194 aa)
- **Molecular weight:** ~25 kDa (predicted monomer); tail-anchored; homodimerizes via TM domain
- **GenAge entry:** not confirmed in this seeding pass #gap/needs-canonical-id

**Note on naming:** "NIX" (NIP3-like protein X) was the name used in the original 1999 cloning paper [^chen1999]. HGNC canonical symbol is BNIP3L. Both names are used interchangeably in the literature; this page uses NIX in body text as it is most common in the mitophagy field.

## Domain organization

NIX has a 219 aa architecture parallel to BNIP3 but with a somewhat extended N-terminal cytosolic region:

| Region | Residues (approx) | Function |
|---|---|---|
| N-terminal cytosolic region | 1–180 | Contains LIR motif; BH3-like motif |
| LIR motif (LIR-W35) | W35–L38 (WVEL) | Primary functional LIR; binds GABARAP/GABARAPL1 preferentially over LC3B; W35A mutation abrogates interaction and impairs erythroid mitophagy [^novak2010][^hanna2012] |
| LIR motif (LIR-W139/143) | ~W139/W143 (adjacent to BH3-like domain) | Secondary LIR; weaker Atg8-family binding (Kd ~670 μM LC3B vs 91 μM for LIR-W35); minor contribution [^novak2010] |
| BH3-like motif | ~100–120 (approx) | Weakly binds BCL-2/BCL-xL; pro-apoptotic function |
| Transmembrane domain (TM) | ~187–210 (approx) | C-terminal; anchors to OMM; mediates homodimerization |
| IMS tail | ~211–219 | Short C-terminal tail in intermembrane space |

The primary functional LIR is **LIR-W35** (residues W35–L38, WVEL), identified by both Novak 2010 and Hanna 2012. Novak 2010 identified this motif by multiple-species alignment (Fig. 2A: hNIX sequence shown as QSLPPPAGLNSS**WVEL**PMN, with W at position 35) and confirmed it by W35A point mutation, which abolishes GST-LC3A/GABARAP pulldown and impairs GABARAP-L1 recruitment to mitochondria by ~50% in vivo [^novak2010]. A second, weaker LIR exists at W139/143 (adjacent to the BH3-like domain); ITC Kd for LIR-W139/143: 670 μM (LC3B) and 130 μM (LC3A), versus 91 μM and 28 μM for LIR-W35 [^novak2010].

The key verified biochemical finding is that NIX LIR **preferentially engages GABARAP/GABARAPL1 over LC3B**, in contrast to BNIP3, whose LIR (W18–L21, WVEL) binds LC3 but not GABARAP [^hanna2012]. Novak 2010 shows NIX does bind LC3A/B weakly (ITC Kd for Nix-W35 peptide: LC3B 91 μM, LC3A 28 μM; cf. p62-LIR:LC3B Kd 1.5 μM), but preferentially recruits GABARAP-L1 to mitochondria in vivo [^novak2010]. Hanna 2012 confirms NIX co-immunoprecipitates GABARAP but not LC3 (Supplemental Fig. S2) [^hanna2012]. This differential specificity is documented in both papers.

## Discovery

NIX was identified by Chen et al. in 1999 as part of a subfamily of BH3-containing, pro-apoptotic proteins that interact with adenovirus E1B 19 kDa and BCL-2 family members. The paper cloned both NIX and NIP3 (BNIP3) and characterized their structural and functional similarity — both are tail-anchored OMM proteins with BH3-like motifs that promote cell death when overexpressed [^chen1999]. An early hypothesis that NIX harbored an FAD-binding domain (based on sequence similarity) was subsequently disproven; the FAD-binding interpretation was not borne out by structural and functional analysis.

## Transcriptional regulation: HIF-1α and hypoxia

Like BNIP3, NIX is a direct HIF-1α transcriptional target. Sowter et al. 2001 demonstrated that both BNIP3 and NIX are induced by hypoxia in a HIF-1-dependent manner across multiple human tumor types, endothelial cells, and macrophages, and that BNIP3 expression is elevated in perinecrotic tumor regions relative to normoxic tissue [^sowter2001]. NIX induction by hypoxia is coordinately regulated with BNIP3 and represents a parallel transcriptional response to oxygen deficit.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (hypoxia-induced expression) conserved in humans? | yes — demonstrated in human tumor tissue (Sowter 2001) |
| Replicated in humans? | partial — expression data consistent; functional flux under hypoxia not quantified in human tissue |

## Two-arm function

### Arm 1: Mitophagy receptor — GABARAP-preferential LIR

NIX functions as a **selective autophagy receptor** that bridges damaged or superfluous mitochondria to the autophagosome machinery via direct LIR–ATG8 interaction. Novak et al. (2010, EMBO Rep) established NIX as a bona fide selective autophagy receptor for mitochondria and characterized the LIR motif requirement for autophagosome recruitment [^novak2010].

Critically, Hanna et al. 2012 showed that NIX's LIR motif interacts with **GABARAP (and GABARAPL1/GABARAPL2) but not LC3**, while its paralog BNIP3's LIR (WVEL at W18–L21) binds LC3 but not GABARAP [^hanna2012]. This differential specificity — NIX/GABARAP vs. BNIP3/LC3 — is biologically meaningful: GABARAP and LC3 subfamilies are thought to participate in distinct phases of autophagosome biogenesis and membrane fusion, so BNIP3 and NIX may co-regulate mitophagy at different steps.

The mitophagy receptor mechanism:
1. NIX is constitutively anchored in the OMM via its C-terminal TM domain.
2. LIR-motif interaction with GABARAP/GABARAPL1/L2 on nascent autophagosomes tethers the autophagosome to the mitochondrial surface.
3. The autophagosome engulfs the mitochondrion and fuses with a lysosome for degradation.
4. This receptor-dependent pathway does not require PINK1/Parkin ubiquitin signaling — it is a parallel, ubiquitin-independent mitophagy arm.

### Arm 2: Pro-apoptotic BH3-like protein

NIX's BH3-like motif engages the hydrophobic groove of BCL-2 and BCL-xL, functioning as a sensitizer-class BH3-only-like protein (analogous to BNIP3). NIX binding to BCL-2/BCL-xL can compete with BAK/BAX sequestration, releasing BAK/BAX to promote mitochondrial outer membrane permeabilization (MOMP) and caspase activation. The BH3-like motif's binding affinity to anti-apoptotic BCL-2 family members is weaker than that of canonical BH3-only proteins (BIM, PUMA) [^chen1999]. Overexpression of NIX induces cell death in multiple cell line models, a phenotype that requires the BH3-like and TM domains.

The balance between NIX's mitophagy receptor function and its pro-apoptotic function likely depends on the same context-dependent factors as BNIP3: stress severity, protein expression level, mitochondrial membrane potential status, and BCL-2/BCL-xL availability. #gap/no-mechanism — the molecular determinants that switch NIX from mitophagy receptor mode to apoptosis mode are not defined.

## Programmed erythroid mitophagy — the defining physiological role

The clearest and most important physiological function of NIX is the **programmed elimination of all mitochondria during reticulocyte-to-erythrocyte maturation**. This developmental mitophagy is essential for the production of functional, enucleated red blood cells.

### Schweers 2007 (PNAS) — NIX is required for reticulocyte mitophagy

Schweers et al. generated Nix-/- (Bnip3l-/-) mice and quantified mitochondrial retention in circulating erythrocytes by MitoTracker Red staining [^schweers2007]:

- **~40% of total Nix-/- erythrocytes** retained mitochondria (MitoTracker Red+) versus **~1% in wild type** (Fig. 2G).
- In the reticulocyte-gated fraction (Thiazole Orange+), **19% of Nix-/- reticulocytes were MitoTracker Red+** versus **3% in wild type** (Fig. 2B).
- Nix-/- mice developed a **compensated hemolytic anemia**: elevated reticulocytes, splenomegaly, and reduced erythrocyte lifespan under hematopoietic stress.
- The mitochondrial clearance defect was independent of BAX, BAK, BCL-X_L, BIM, and PUMA — NIX operates via a mechanistically distinct, non-apoptotic pathway for developmental mitophagy.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (erythroid mitophagy) conserved in humans? | yes — human erythrocytes are anucleate and lack mitochondria |
| Replicated in humans? | no — genetic model data is mouse; human BNIP3L mutations linked to hemolytic anemia phenotypes |

#gap/needs-human-replication — Direct human genetic evidence for NIX-dependent erythroid mitophagy is limited to observational case reports; no controlled genetic model equivalent to Nix-/- mice exists in humans.

### Sandoval 2008 (Nature) — NIX LIR is the direct receptor for erythroid mitophagy

Sandoval et al. extended the Schweers 2007 finding by demonstrating that NIX functions as the direct autophagy receptor mediating this developmental mitophagy [^sandoval2008]:

- Nix-/- mice (backcrossed >5 generations to C57BL/6) showed **28% of total RBCs retaining mitochondria at 3 weeks** and **12% at 6 weeks** post-birth (by Mito+ CD71+ flow cytometry of total RBCs).
- Nix-/- reticulocytes fail to lose mitochondrial membrane potential (ΔΨm) during maturation; loss of ΔΨm is required to target mitochondria to autophagosomes.
- **BH3 mimetic ABT-737** (which forces ΔΨm loss by releasing BAK/BAX from BCL-xL) could rescue mitochondrial clearance in Nix-/- reticulocytes — indicating that ΔΨm collapse is the critical NIX-downstream step.
- **FCCP** (an uncoupler that collapses ΔΨm directly) similarly rescued clearance.
- These rescue experiments place NIX upstream of ΔΨm loss in the pathway, with ΔΨm collapse serving as the "eat-me" signal for autophagosome targeting.

**BNIP3 cannot substitute for NIX in erythrocytes:** The Nix-/- phenotype alone is sufficient to cause severe erythroid mitophagy failure. This tissue-specific non-redundancy makes NIX the dominant (and likely essential) mitophagy receptor in the erythroid lineage, despite the broader functional overlap between BNIP3 and NIX in other tissues.

## BNIP3 vs NIX — comparison of the two paralogs

| Feature | BNIP3 | NIX (BNIP3L) |
|---|---|---|
| UniProt | Q12983 | O60238 |
| Length | 194 aa | 219 aa |
| LIR position | W18–L21 (WVEL) — primary LIR | W35–L38 (WVEL) — LIR-W35 (primary); W139/143 — LIR-W139/143 (secondary, weaker) |
| LIR binding preference | LC3 (not GABARAP) [^hanna2012] | GABARAP/GABARAPL1 preferentially; binds LC3A/B weakly (Kd 28–91 μM) but not functionally dominant [^novak2010][^hanna2012] |
| HIF-1α induction | yes | yes |
| BH3-like motif | yes (weak, sensitizer) | yes (weak, sensitizer) |
| OMM topology | tail-anchored, C-term TM | tail-anchored, C-term TM |
| Homodimerizes via TM | yes | yes |
| Heterodimerizes with paralog | yes (BNIP3–NIX via TM) | yes (NIX–BNIP3 via TM) |
| Dominant in erythroid mitophagy | no | **yes — NIX-dependent; BNIP3 cannot rescue** |
| Role in cardiac mitophagy | yes (age-associated decline) | yes (partial redundancy) |
| PINK1/Parkin independence | yes | yes |

Both proteins share tail-anchored OMM insertion, HIF-1α-dependent transcription, BH3-like sensitizer activity, and LIR-mediated autophagosome docking. The key differentiation is the opposite LIR-target preference (LC3 vs. GABARAP) and the tissue-specific dominance of NIX in erythroid programmed mitophagy [^hanna2012].

## Aging context

### Cardiac and skeletal muscle

NIX, like BNIP3, is expressed in cardiac and skeletal muscle and participates in mitochondrial quality control in these tissues. Receptor-dependent mitophagy (BNIP3/NIX arm) and ubiquitin-dependent mitophagy (PINK1/Parkin arm) are thought to be complementary; declining BNIP3 and NIX expression in aged cardiac tissue is associated with impaired mitophagy and accumulation of dysfunctional mitochondria. #gap/unsourced — quantitative NIX protein-level data across age in cardiac tissue needs a primary source citation with specific measurements.

The relative contributions of BNIP3 versus NIX to cardiac mitophagy at different life stages, and whether NIX compensates for BNIP3 decline (or vice versa), are not quantitatively resolved. #gap/no-mechanism

### Hematopoiesis and anemia of aging

Programmed erythroid mitophagy is a constitutive process in hematopoiesis throughout life. Whether NIX expression or activity changes with age in hematopoietic stem cells or erythroblasts, and whether this contributes to the anemia of aging, has not been systematically investigated. #gap/needs-replication

### Connection to hallmarks

- **[[mitochondrial-dysfunction]]:** NIX-mediated mitophagy is a mechanism for clearing depolarized, ROS-producing mitochondria. Receptor-dependent mitophagy (NIX/BNIP3 arm) may become relatively more important when PINK1/Parkin pathway flux declines with age.
- **[[disabled-macroautophagy]]:** NIX is a selective receptor within the broader selective autophagy network; age-associated decline in NIX/BNIP3 receptor expression contributes to impaired mitophagic throughput.

## Pathway membership

- [[mitophagy]] — LIR motif (GABARAP-preferential) → autophagosome recruitment; receptor-dependent, ubiquitin-independent mechanism; dominant driver of erythroid developmental mitophagy
- [[autophagy]] — NIX is a selective receptor within the macroautophagy machinery
- [[apoptosis-pathway]] — BH3-like motif → sensitizer-class displacement of BAK/BAX from BCL-2/BCL-xL
- [[bcl-2-family-signaling]] — sensitizer-class BH3-only-like protein (low intrinsic affinity)
- [[pink1-parkin-pathway]] — parallel complementary arm; NIX/BNIP3 receptor-dependent mitophagy is PINK1/Parkin-independent

## Key interactors

- [[gabarap]] / GABARAPL1 / GABARAPL2 — direct LIR-motif binding partners; NIX binds these preferentially (not LC3) [^hanna2012]
- [[lc3]] — NIX binds LC3A/B weakly (ITC Kd: LC3B 91 μM, LC3A 28 μM for LIR-W35 peptide) but this interaction is not the dominant functional output in vivo; GABARAP/GABARAPL1 is the preferred binding partner [^novak2010]; co-immunoprecipitation does not detect NIX–LC3 interaction under normal conditions [^hanna2012]
- [[bnip3]] — paralog; ~52% sequence identity; can heterodimerize via TM domain; BNIP3 prefers LC3; NIX prefers GABARAP; partial functional redundancy in cardiac/skeletal muscle; NIX is dominant in erythroid lineage
- [[bcl-2]] — anti-apoptotic binding target of BH3-like motif
- [[bcl-xl]] — anti-apoptotic binding target; ABT-737 (BCL-xL inhibitor) rescues Nix-/- erythroid mitophagy defect (Sandoval 2008)
- [[bak]] / [[bax]] — released when NIX BH3-like occupies BCL-2/BCL-xL → MOMP
- [[fundc1]] — parallel OMM-resident mitophagy receptor; hypoxia-regulated, phosphorylation-gated; co-regulates mitochondrial fate under hypoxia independently of BNIP3/NIX

## Limitations and open gaps

- **LIR residue positions:** Verified — primary LIR is LIR-W35 (W35–L38, WVEL) per Novak 2010 Fig. 2A and Hanna 2012 (NixW35A mutant). A secondary weaker LIR exists at W139/143 [^novak2010]. ITC Kd values established for LIR-W35 vs LC3A (28 μM), LC3B (91 μM), and GABARAP-L1 (stronger, precise Kd not tabulated in main text).
- **Second LIR (LIR-W139/143):** Novak 2010 characterizes a second putative LIR adjacent to the BH3-like domain (W139/W143 DW motif); ITC Kd 670 μM (LC3B) and 130 μM (LC3A). Functional contribution in vivo is minor — W35A alone is sufficient to impair mitophagy substantially. This LIR is not in the BCL-2-homology core. The ΔW35–38/W139/143 double mutant abolished mitochondrial clearance rescue in Nix-/- reticulocytes [^novak2010]. #gap/needs-replication
- **BH3-like affinity values:** Binding affinities (Kd) for NIX BH3-like motif to BCL-2/BCL-xL/MCL-1 not quantified by FPA/ITC vs canonical BH3-only proteins. #gap/needs-replication
- **Arm-switch mechanism:** Molecular determinants that switch NIX from mitophagy receptor to apoptosis executor under any given stress context are not defined. #gap/no-mechanism
- **Double-KO (Bnip3 x Bnip3l):** Functional redundancy between BNIP3 and NIX in non-erythroid tissues under aging conditions is not characterized in double-KO models. #gap/needs-replication
- **Cardiac aging primary data:** Quantitative NIX protein-level trajectories across age in cardiac tissue need primary source citation with specific measurements; current framing is extrapolated from BNIP3 aging literature. #gap/unsourced #gap/needs-human-replication
- **Sowter 2001 DOI:** No confirmed DOI available for Sowter 2001 Cancer Research (PMID 11559532); cited by PMID only. #gap/needs-canonical-id
- **Chen 1999 PDF:** DOI lookup failed (hybrid OA; no accessible OA URL resolved — 0 candidate URLs after PMC lookup). NIX cloning claims from Chen 1999 are unverified against full PDF. #gap/no-fulltext-access
- **Novak 2010 PDF:** Verified — downloaded and read in full on 2026-05-04. LIR receptor mechanism claims confirmed.
- **GenAge entry:** NIX/BNIP3L GenAge entry ID not confirmed in this seeding pass. #gap/needs-canonical-id
- **FAD-binding hypothesis:** The early Chen 1999 claim about NIX FAD-binding domain was reportedly disproven; the primary source for this disproof needs identification. #gap/unsourced

## Footnotes

[^chen1999]: [[studies/chen-1999-nix-bnip3l-cloning]] · doi:10.1074/jbc.274.1.7 · n=N/A · in-vitro · model: multiple cell lines; characterizes NIX and NIP3/BNIP3 as a subfamily of BH3-containing pro-apoptotic mitochondrial proteins; both are tail-anchored OMM proteins; overexpression induces cell death; 305 citations (archive: hybrid OA, download failed — #gap/no-fulltext-access; cloning claims unverified against full PDF)

[^sowter2001]: [[studies/sowter-2001-nix-bnip3-hif1-hypoxia]] · PMID:11559532 · doi:unknown · Cancer Res 61:6669-6673 · n=N/A · in-vitro + tumor tissue · model: multiple human tumor types, endothelial cells, macrophages; NIX and BNIP3 are HIF-1-dependent hypoxia targets; BNIP3 elevated in perinecrotic tumor zones (DOI not confirmed — cite by PMID)

[^hanna2012]: [[studies/hanna-2012-bnip3-lc3-mitophagy]] · doi:10.1074/jbc.m111.322933 · n=N/A · in-vitro · model: HeLa cells + adult rat hearts; BNIP3 LIR (W18-V-E-L21, WVEL) binds LC3 but NOT GABARAP; NIX LIR binds GABARAP/GABARAPL1/L2 but NOT LC3; opposite specificity established in same paper; 716 citations (archive: hybrid OA, downloaded)

[^novak2010]: [[studies/novak-2010-nix-autophagy-receptor]] · doi:10.1038/embor.2009.256 · n=N/A · in-vitro + in-vivo rescue · model: HeLa cells, MEFs, Nix-/- reticulocytes (bone marrow transplant); establishes NIX as selective autophagy receptor for mitochondria via two LIR motifs (primary: LIR-W35, W35–L38 WVEL; secondary: LIR-W139/143); W35A mutation impairs GABARAP-L1 recruitment ~50% and reduces in vivo mitochondrial clearance; ITC Kd LIR-W35: LC3B 91 μM, LC3A 28 μM; GABARAP-L1 binding stronger; 1,239 citations (archive: bronze OA, downloaded)

[^schweers2007]: [[studies/schweers-2007-nix-erythrocyte-mitophagy]] · doi:10.1073/pnas.0708818104 · n=N/A · in-vivo · model: Nix-/- mice (targeted disruption); ~40% of total erythrocytes MitoTracker Red+ (vs ~1% WT, Fig. 2G); 19% of Thiazole Orange+ reticulocytes MitoTracker Red+ (vs 3% WT, Fig. 2B); defect is BAX/BAK/BCL-XL/BIM/PUMA-independent; NIX required for selective mitophagy during reticulocyte maturation; 886 citations (archive: green OA, downloaded)

[^sandoval2008]: [[studies/sandoval-2008-nix-erythroid-maturation]] · doi:10.1038/nature07006 · n=3 per experiment · in-vivo + in-vitro · model: Nix-/- mice (C57BL/6 >5 generations backcross) + in vitro reticulocyte maturation; 28% Mito+CD71+ of total RBCs at 3 weeks, 12% at 6 weeks (Nix-/-); ΔΨm loss required for autophagosome targeting; ABT-737 and FCCP rescue clearance in Nix-/- reticulocytes; NIX acts upstream of ΔΨm collapse; 1,133 citations (archive: green OA, downloaded at )
