---
type: protein
aliases: [BAK, BAK1, BCL2L7, CDN1, Bcl-2 homologous antagonist/killer, Bcl-2-like protein 7]
uniprot: Q16611
ncbi-gene: 578
hgnc: 949
mouse-ortholog: Bak1
ensembl: ENSG00000030110
druggability-tier: 2
caused-by: []
causes: []
key-domains: [BH3, BH1, BH2, transmembrane-helix]
key-ptms: [Ala2-N-acetylation, Met1-removal]
pathways: ["[[apoptosis-pathway]]", "[[p53-pathway]]", "[[bcl-2-family-signaling]]"]
hallmarks: ["[[cellular-senescence]]", "[[stem-cell-exhaustion]]", "[[genomic-instability]]"]
known-interactors: ["[[bax]]", "[[bcl-xl]]", "[[mcl-1]]", "[[bcl-2]]", "[[bim]]", "[[bid]]", "[[puma]]", "[[p53]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "All 8 cited primary sources verified against PDFs. Corrections applied to: (1) Farrow 1995 amino-acid length discrepancy noted; (2) zinc-binding residue D160 corrected from His160; (3) Suzuki 2002 footnote replaced — DOI resolves to Degenhardt et al. 2002, entirely different paper, wrong authors and wrong claim; (4) PUMA activator claim qualified per Chipuk 2010; (5) Lindsten 2000 perinatal lethality framing tightened; (6) Zhu 2016 cell-type scope clarified. UniProt Q16611 identity fields not independently re-verified against UniProt directly."
---

# BAK (BCL2 Antagonist/Killer 1)

The constitutively mitochondria-resident pro-apoptotic effector of the intrinsic pathway. BAK — together with its obligate paralogue [[bax]] — forms the pores that permeabilize the mitochondrial outer membrane (MOMP), releasing cytochrome c and committing a cell irreversibly to death. Unlike BAX (which is cytosolic in healthy cells), BAK is anchored to the mitochondrial outer membrane at steady state, making it the immediate-response effector when anti-apoptotic restraint is lifted. In aging biology, BAK is a convergence target for senolytics: anti-apoptotic Bcl-2 family proteins (MCL-1 dominant; BCL-xL secondary) hold BAK in check in senescent cells, and BH3-mimetic drugs release this brake to trigger selective senescent-cell clearance.

## Identity

- **UniProt:** Q16611 (BAK_HUMAN)
- **NCBI Gene:** 578
- **HGNC symbol:** BAK1 (aliases: BAK, BCL2L7, CDN1)
- **Mouse ortholog:** Bak1 (one-to-one; function conserved)
- **Length:** 211 amino acids; ~23.4 kDa

## Discovery

BAK was identified in 1995 by two independent groups. Farrow et al. cloned Bak as a Bcl-2 homologue through a yeast two-hybrid screen using adenovirus E1B 19K as bait; overexpression accelerated apoptosis in nerve-growth-factor-deprived neurons; the Farrow clone encoded a 216-amino-acid ORF [^farrow1995]. Simultaneously, Chittenden et al. independently cloned BAK from a human B-cell library and characterized it as an inducer of apoptosis whose enforced expression was sufficient to kill FL5.12 cells and serum-deprived fibroblasts, and whose BH3 domain was required for both cell killing and binding to BCL-xL; the Chittenden clone encoded **211 amino acids** (Mr 23.4 kDa), which is the canonical length now in UniProt Q16611 [^chittenden1995nature] [^chittenden1995emboj]. A third concurrent paper (Kiefer et al. 1995, Nature 374:736–739) also described BAK independently and likewise reported 211 amino acids. The 216 aa Farrow clone likely reflects a longer N-terminal isoform or cloning artifact; the 211 aa sequence is the canonical reference. Yeast two-hybrid data from Farrow showed BAK does **not** homodimerize with itself in that assay, unlike Bax. The parallel discovery of two functionally redundant effectors (BAK and BAX) foreshadowed the central importance of their combined function in developmental biology.

## Domain structure

| Domain | Residues (approx.) | Function |
|---|---|---|
| BH3 motif | 74–88 | Essential for pro-apoptotic activity; mediates binding to anti-apoptotic Bcl-2 proteins |
| BH1 motif | 117–136 | Contributes to hydrophobic groove structure |
| BH2 motif | 169–184 | Contributes to hydrophobic groove structure |
| Transmembrane helix (alpha-9) | 188–205 | C-terminal membrane anchor; constitutively inserts into mitochondrial OMM |
| Zinc-binding site | Asp160 (D160), His164 (H164) | Mediates homodimerization; sub-millimolar Zn inhibits MOMP (Moldoveanu 2006) |

The BH3-BH1-BH2 region forms the hydrophobic groove that is the docking site for activating BH3-only proteins (BIM, BID, PUMA) and the competitive binding surface for anti-apoptotic proteins (BCL-xL, MCL-1, BCL-2). The hydrophobic groove is also the structural target of small-molecule BH3 mimetics.

## Key PTMs

- **Met1 removal + Ala2 N-acetylation** — constitutive; confirmed by UniProt annotation (Q16611). No known regulatory role reported.
- No phosphorylation or ubiquitination sites are as well-characterized on BAK as on [[bax]]. #gap/unsourced — BAK's PTM repertoire is less studied than BAX's; see GenAge / PhosphoSitePlus for updates.

## Mechanism of action

### Resting state (constitutively OMM-anchored)

In healthy cells, BAK is already inserted into the mitochondrial outer membrane (OMM) via its C-terminal transmembrane helix — in contrast to BAX, which resides in the cytosol. BAK is held as an inactive monomer through sequestration by anti-apoptotic Bcl-2 family members (predominantly MCL-1 and BCL-xL) that bind its BH3 domain via their hydrophobic grooves. This tonic sequestration is the primary brake on BAK activity.

### Activation: direct and indirect models

**1. Direct activation** — BH3-only "activator" proteins (BIM, tBID) bind the hydrophobic groove of BAK, triggering conformational changes: exposure of the N-terminus (alpha-1 helix), disruption of a key disulfide bond between helices, and release from anti-apoptotic partners. This model is supported by structural and biochemical reconstitution data. PUMA is classified in Chipuk 2010 primarily as a sensitizer/derepressor (binding the anti-apoptotic repertoire) rather than a direct activator of BAK/BAX, though some data suggest it may also act directly; its role remains contested [^chipuk2010].

**2. De-repression (indirect) model** — BH3-only "sensitizers" (NOXA, BAD, BIK) bind and neutralize anti-apoptotic proteins that were sequestering BAK, freeing it to oligomerize. NOXA is particularly relevant for BAK because it selectively targets MCL-1 (the dominant BAK guard) while having low affinity for BCL-xL/BCL-2.

Current consensus: both mechanisms likely operate simultaneously; relative contributions are cell-type-dependent [^chipuk2010]. A critical distinction from BAX: because BAK is already at the OMM, there is no translocation step — activation leads directly to conformational change and oligomerization.

### Mitochondrial execution sequence

1. Conformational change — N-terminal alpha-1 helix exposed; BH3 domain disengaged from anti-apoptotic partner
2. Oligomerization — BAK (and/or BAX) molecules form symmetric dimers → higher-order oligomeric pore assemblies; the Zn²⁺-bridged homodimer seen in the cBAK crystal structure (Moldoveanu 2006), coordinated via D160–H164 pairs from each monomer [^moldoveanu2006], represents an **inhibitory resting conformation** — the BH3 binding pocket is occluded in this state and is not the active pore state
3. MOMP — cytochrome c, Smac/DIABLO, and HtrA2/Omi released into cytosol
4. Apoptosome — cytochrome c + Apaf-1 + dATP → procaspase-9 recruitment
5. Caspase cascade — caspase-9 → caspase-3/7 → substrate cleavage → cell death

MOMP is the **point-of-no-return**: once achieved, cell death proceeds even if caspases are inhibited.

## BAK vs BAX: key differences

| Feature | BAK | BAX |
|---|---|---|
| Resting location | Mitochondrial OMM (constitutive) | Cytosol (translocates upon activation) |
| Primary anti-apoptotic guard | MCL-1 (dominant); BCL-xL secondary | BCL-xL (dominant); BCL-2, MCL-1 secondary |
| Activation mechanism | Conformational change in situ | Translocation + conformational change |
| Single-KO lethality | Not lethal (BAX compensates) | Not lethal (BAK compensates) |
| Double-KO lethality | Yes (Bak-/-Bax-/- perinatally lethal) | (same; see Lindsten 2000) |

The differential dependence on MCL-1 vs BCL-xL has direct pharmacological implications: NOXA-like sensitizers or MCL-1 inhibitors preferentially disrupt BAK, whereas BIM/BAD-like sensitizers or BCL-xL inhibitors preferentially disrupt BAX. A cell's survival may depend on inhibiting both nodes simultaneously.

## Regulation by anti-apoptotic Bcl-2 family members

| Protein | Affinity for BAK | Senolytic releasing it |
|---|---|---|
| [[mcl-1]] | High (dominant BAK guard) | MCL-1 inhibitors (S63845, AMG-176); also NOXA induction |
| [[bcl-xl]] | High (secondary guard) | Navitoclax; BCL-xL-selective A1331852; BCL-xL PROTACs (DT2216) |
| [[bcl-2]] | Low-moderate | Venetoclax; navitoclax |

The dominance of MCL-1 over BAK (vs BCL-xL over BAX) creates a therapeutic divergence: navitoclax (BCL-2/BCL-xL dual inhibitor) triggers apoptosis largely via the BAX node, while MCL-1 inhibitors access the BAK node more directly.

## Genetic evidence: BAK/BAX double knockout

Lindsten et al. 2000 generated Bak/Bax double-knockout (DKO) mice [^lindsten2000]:

- **Perinatal lethality** — the majority of DKO mice die perinatally (within ~48 hours of birth; fewer than 10% survive to adulthood); interdigital web tissue persists (no developmental apoptosis); imperforate vagina in all adult females; neurological abnormalities including deafness and circling behavior; accumulation of excess hematopoietic progenitors and mature lymphocytes
- **Single-KO phenotype** — Bak-/- alone (with WT Bax) is essentially normal, confirming functional redundancy between the two effectors. Bax-/- alone produces lymphoid hyperplasia and male infertility (Knudson 1995)
- **Conclusion:** BAK and BAX together constitute the minimal required set of OMM pore-forming effectors for developmental apoptosis; neither alone is sufficient for normal development

Degenhardt et al. 2002 demonstrated using baby mouse kidney cells from bax-/-, bak-/-, and bax-/-bak-/- mice that loss of either Bax or Bak alone did not abrogate TNF-α-mediated apoptosis, but loss of both conferred strong resistance — confirming functional redundancy in the extrinsic pathway as well as the intrinsic [^degenhardt2002]. (Note: a claim about BAK and BAX independently promoting cytochrome c release from isolated mitochondria derives from a different study — Suzuki et al. 2000 by Suzuki M, Youle RJ, Tjandra N — which is not locally archived; the original footnote had an incorrect DOI-author assignment.) #gap/needs-replication

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | BH3-domain mechanism, OMM topology, and BCL-2 family interactions conserved; BAK structure (Moldoveanu 2006) is human protein |
| Phenotype conserved in humans? | yes | BCL-2 family dysregulation drives human lymphomas; MCL-1 and BCL-xL overexpression found in many human cancers and senescent cells |
| Replicated in humans? | partial | Pharmacological BCL-2/BCL-xL inhibition (BH3 mimetics) validated in human oncology; aging-specific human replication sparse |

## Aging relevance

### Senescent cell apoptosis resistance and BAK suppression

Senescent cells are characteristically resistant to apoptosis despite chronic genotoxic and proteotoxic stress. The prevailing mechanistic model is "survival priming": senescent cells upregulate anti-apoptotic Bcl-2 family members — particularly MCL-1 and BCL-xL — which maintain BAK (and BAX) in a sub-threshold activated state, poised but blocked from oligomerizing.

Zhu et al. 2016 identified navitoclax (ABT-263) as a senolytic: it reduced viability of senescent human endothelial cells, lung fibroblasts, and murine embryonic fibroblasts, with sensitivity correlating with the specific pattern of anti-apoptotic protein expression in each cell type [^zhu2016]. Because navitoclax inhibits both BCL-2 and BCL-xL, it addresses both BAX and BAK guard nodes. The study did not independently dissect BAK's contribution from BAX's.

The multi-target requirement seen in some senescent cell types is demonstrated directly in Zhu 2016: in IMR90 human lung fibroblasts, siRNA knockdown of BCL-xL alone or BCL-xL + BCL-2 was not senolytic, but the triple BCL-2 + BCL-xL + BCL-w siRNA combination (reflecting navitoclax's target set) was senolytic (Fig. 4A). This implies that BAK is protected by overlapping redundant anti-apoptotic coverage in some lineages, requiring simultaneous disruption of multiple guards [^zhu2016]. Navitoclax was NOT senolytic in human primary preadipocytes, demonstrating that senolytic activity is cell-type-restricted. #gap/needs-replication

### MCL-1 as a BAK-specific senolytic target

Because MCL-1 is the dominant anti-apoptotic regulator of BAK specifically, MCL-1 inhibitors represent a BAK-selective senolytic strategy complementary to BCL-xL inhibitors (which are more BAX-relevant). First-generation MCL-1 inhibitors (S63845, AMG-176) have shown senolytic activity in preclinical models, though cardiac toxicity from MCL-1 inhibition in cardiomyocytes remains a concern. #gap/needs-human-replication #gap/dose-response-unclear

### Stem cell pool maintenance

Insufficient BAK/BAX-mediated apoptosis leads to accumulation of damaged or aberrant cells, contributing to tissue dysfunction and cancer risk. Conversely, chronic BAK activation under oxidative or genotoxic stress may deplete [[stem-cell-exhaustion|stem cell pools]], a separate driver of aging phenotypes. The BAK/BAX apoptosis threshold in stem cell compartments is likely regulated tissue-specifically, and dysregulation in either direction (too much or too little) is pathological. #gap/no-mechanism

### GenAge status

BAK1 is not listed in the GenAge human database (Build 21, ~307 genes as of 2026). BAK's aging relevance derives from its role as the primary effector in senolytic apoptosis pathways, not from direct lifespan-modification evidence in model organisms.

## Pharmacology: BAK-relevant agents

### BH3 mimetics (release BAK from anti-apoptotic guards)

| Drug | Primary BAK-relevant target | Clinical stage | Notes |
|---|---|---|---|
| Navitoclax (ABT-263) | BCL-xL (+ BCL-2) | Phase 2 (oncology + senolytics) | Dose-limiting thrombocytopenia (BCL-xL in platelets); senolytic in vivo mouse data |
| Venetoclax (ABT-199) | BCL-2 selective | FDA-approved (CLL, AML) | Spares BCL-xL → lower platelet toxicity; less BAK-relevant than navitoclax |
| S63845 | MCL-1 selective | Preclinical / Phase 1 (oncology) | Directly targets dominant BAK guard; cardiac toxicity concern |
| AMG-176 | MCL-1 selective | Phase 1 (oncology) | As above |
| DT2216 | BCL-xL PROTAC (platelet-sparing) | Preclinical / Phase 1 | Platelet-sparing via absence of CRBN E3 ligase in platelets |

No BAK-direct small-molecule activators (analogous to BTSA1 for BAX) are in clinical development as of 2026. #gap/unsourced — confirm at ClinicalTrials.gov.

## Interaction network (key nodes)

- [[p53]] — transcriptional inducer of PUMA and NOXA, which then activate/sensitize BAK; p53 also directly induces Bax (less direct role via BAK)
- [[puma]] — BH3-only protein; p53 transcriptional target; classified primarily as a sensitizer/derepressor in Chipuk 2010 (binds anti-apoptotic repertoire) rather than a direct activator of BAK, though this classification remains debated [^chipuk2010]
- [[bim]] — BH3-only activator; binds both BAK and BAX; released from BCL-xL by navitoclax
- [[bid]] — BH3-only activator; cleaved by caspase-8 (tBID) at OMM to activate BAK
- [[bax]] — obligate paralogue; partially compensates when BAK is absent; cooperates in pore formation
- [[mcl-1]] — primary anti-apoptotic guard of BAK; targeted by NOXA and MCL-1 inhibitors
- [[bcl-xl]] — secondary anti-apoptotic guard; targeted by navitoclax and BCL-xL PROTACs
- [[bcl-2]] — tertiary anti-apoptotic guard; targeted by venetoclax
- [[cytochrome-c]] — released downstream of MOMP; initiates apoptosome
- [[apaf-1]] — forms apoptosome with cytochrome c; activates caspase-9

## Pathway membership

- [[apoptosis-pathway]] — intrinsic mitochondrial apoptosis; BAK is the constitutively-OMM-resident pore-forming effector
- [[p53-pathway]] — downstream effector target via PUMA/NOXA/BIM induction
- [[bcl-2-family-signaling]] — central node of the Bcl-2 rheostat; MCL-1/BCL-xL regulate BAK directly

## Limitations and gaps

- `#gap/needs-human-replication` — Senolytic efficacy of BAK-targeted strategies (navitoclax, MCL-1 inhibitors) in human aging contexts is preclinical-only; no completed human aging trials as of 2026.
- `#gap/no-mechanism` — Whether a cell activates BAK (apoptosis) versus enters senescence under the same stress conditions is incompletely understood; likely involves BAK expression level, MCL-1 abundance, NOXA induction kinetics, and cell-type-specific thresholds.
- `#gap/needs-replication` — The specific MCL-1-dominance model for BAK in senescent cells is mechanistically inferred from pharmacological studies; direct molecular demonstration in aged human tissues is absent.
- `#gap/dose-response-unclear` — Therapeutic windows for MCL-1 inhibitors in senolytic applications (senescent cell killing vs normal-tissue toxicity, especially cardiac) have not been established.
- BAK's PTM regulatory landscape is less characterized than BAX's. PhosphoSitePlus as of 2026 lists fewer regulatory modifications on BAK than on BAX.
- BAK1 is **not listed in GenAge human database** (Build 21). Its aging relevance is mechanistic (effector role in senolytic pathways), not genetic-longevity-association based.

## Footnotes

[^farrow1995]: doi:10.1038/374731a0 · Farrow SN, White JH, Martinou I, Raven T, Pun KT, Grinham CJ, Martinou JC, Brown R · 1995 · Nature 374:731–733 · in-vitro + in-vivo · model: yeast two-hybrid + neurons (NGF withdrawal); first cloning of BAK; showed BAK overexpression accelerates apoptosis; locally available in archive

[^chittenden1995nature]: doi:10.1038/374733a0 · Chittenden T, Harrington EA, O'Connor R, Flemington C, Lutz RJ, Evan GI, Guild BC · 1995 · Nature 374:733–736 · in-vitro · model: cell lines; demonstrated enforced BAK expression induces rapid apoptosis antagonized by BCL-2/BCL-xL; locally available in archive

[^chittenden1995emboj]: doi:10.1002/j.1460-2075.1995.tb00246.x · Chittenden T, Flemington C, Houghton AB, Ebb RG, Gallo GJ, Elangovan B, Chinnadurai G, Lutz RJ · 1995 · EMBO J 14(22):5589–5596 · in-vitro · model: cell lines; characterized BH3 domain (residues 67–94) as the conserved death-mediating domain necessary and sufficient for cytotoxic activity and BCL-xL binding; identified same domain as critical in Bax and Bip1; locally available in archive

[^lindsten2000]: doi:10.1016/s1097-2765(00)00136-2 · Lindsten T, Ross AJ, King A, Zong WX, Rathmell JC, Shiels HA, et al. (Thompson lab) · 2000 · Mol Cell 6(6):1389–1399 · in-vivo · model: Bak/Bax double-knockout mouse (mixed 129S3×129X1×C57BL/6 background); 1,466 citations; demonstrated combined loss of BAK + BAX causes perinatal lethality (~48h), persistent interdigital webs, imperforate vagina, neurological defects, lymphoid accumulation; locally available in archive

[^chipuk2010]: doi:10.1016/j.molcel.2010.01.025 · Chipuk JE, Moldoveanu T, Llambi F, Parsons MJ, Green DR · 2010 · Mol Cell 37:299–310 · review · comprehensive unified model of BCL-2 family activation mechanisms (direct activator vs. de-repression); 1,398 citations; locally available in archive

[^moldoveanu2006]: doi:10.1016/j.molcel.2006.10.014 · Moldoveanu T, Liu Q, Tocilj A, Watson M, Shore G, Gehring K · 2006 · Mol Cell 24:677–688 · in-vitro (crystallography) · 1.47 Å crystal structure of calpain-proteolysed BAK (cBAK) homodimer; identified zinc-binding site coordinated by D160 (Asp) and H164 (His) as mediating inhibitory homodimerization; demonstrated sub-millimolar Zn inhibits MOMP in bak/bax DKO MEF mitochondria; inhibition alleviated by H164A mutation

[^degenhardt2002]: doi:10.1074/jbc.m109939200 · Degenhardt K, Sundararajan R, Lindsten T, Thompson C, White E · 2002 · J Biol Chem 277(16):14127–14134 · in-vitro + in-vivo · model: primary baby mouse kidney (BMK) cells from bax-/-, bak-/-, bax-/-bak-/- mice; demonstrated loss of both Bax and Bak required for resistance to TNF-α-mediated apoptosis; either alone was sufficient for cell death signaling; also showed Bax and Bak are dispensable for p53-dependent transformation suppression. NOTE: This DOI was previously mislabeled in this wiki as "Suzuki M, Youle RJ, Tjandra N" — that is a different paper (Suzuki et al. 2000, Cell 103:645–654) not available in archive.

[^zhu2016]: doi:10.1111/acel.12445 · Zhu Y, Tchkonia T, Fuhrmann-Stroissnigg H, Dai HM, Ling YY, Stout MB et al. · 2016 · Aging Cell 15(3):428–435 · in-vitro + in-vivo · model: senescent human HUVECs, lung fibroblasts, MEFs; first identification of navitoclax as a senolytic; sensitivity correlated with BCL-2 family protein expression pattern; locally available in archive
