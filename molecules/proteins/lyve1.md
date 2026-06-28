---
type: protein
aliases: [LYVE-1, lymphatic vessel endothelial hyaluronic acid receptor 1, XLKD1, CRSBP-1]
uniprot: Q9Y5Y7
ncbi-gene: 10894
hgnc: 14687
ensembl: ENSG00000133800
mouse-ortholog: Lyve1
genage-id: null
druggability-tier: 3
pathways: []
hallmarks: ["[[chronic-inflammation]]", "[[stem-cell-exhaustion]]"]
sens-categories: []
caused-by: []
causes: []
mr-causal-evidence: not-tested
gtex-aging-correlation: null
literature-checked-through: 2026-06-28
verified: true
verified-date: 2026-06-28
verified-by: claude
verified-scope: "Canonical-DB identifiers (UniProt Q9Y5Y7, NCBI Gene 10894, HGNC 14687, ENSG00000133800, mouse Lyve1 114332) confirmed via live API calls. Domain annotations (Link domain 40-130, signal 1-19, TM 239-259, disulfide bonds, glycosylation sites) confirmed against UniProt Q9Y5Y7. Biswas 2023 compartment claim corrected (periosteal → bone marrow) and expansion stimulus corrected (cortical injury → genotoxic stress) against primary PDF (Cell 186:382-397). Druggability tier set to 3 from live Open Targets API query. Dick 2022 '17 tissues' confirmed via Europe PMC. Dick 2018 date confirmed via Crossref. Van Beek 2019 panel confirmed via PubMed abstract. Banerji 1999 Link domain residues confirmed via UniProt. Chakarov 2019 / Dick 2018 / Dick 2022 primary mechanisms not re-read (closed-access); claims verified at abstract/Crossref level only."
---

# LYVE1 (Lymphatic Vessel Endothelial Hyaluronan Receptor 1)

LYVE1 is a 322-amino acid type-I transmembrane receptor that binds hyaluronan (HA) on the surface of lymphatic endothelial cells (LECs) and mediates HA uptake for catabolism. It is the most widely used marker for lymphatic vessels in histological and immunofluorescence studies. **Critical caveat:** a subset of tissue-resident macrophages — specifically the homeostatic TIMD4+/LYVE1+/FOLR2+ (TLF+) subset — co-express LYVE1, so LYVE1 positivity alone does not prove lymphatic identity; macrophage-exclusion co-staining is required. This caveat is directly relevant to interpreting LYVE1+ structures in newly described locations such as [[bone]].

## Identity

- **UniProt:** Q9Y5Y7 (LYVE1_HUMAN); Swiss-Prot (curated)
- **NCBI Gene:** 10894
- **HGNC symbol:** LYVE1; HGNC:14687
- **Ensembl:** ENSG00000133800 (transcript ENST00000256178.8)
- **Mouse ortholog:** Lyve1 (NCBI Gene 114332; near-full conservation of extracellular Link domain)
- **Length:** 322 amino acids (canonical isoform)

## Protein structure and domains

LYVE1 is a single-pass type I membrane protein with three principal regions:

| Region | Residues | Notes |
|---|---|---|
| Signal peptide | 1–19 | Co-translational cleavage |
| Extracellular domain | 20–238 | Contains the Link domain for HA binding |
| Transmembrane helix | 239–259 | |
| Cytoplasmic tail | 260–322 | Short; no known catalytic activity |

The **Link domain** (residues 40–130) is the HA-binding module and is structurally homologous to the Link domain of [[cd44]]. LYVE1 is therefore classified as a member of the CD44/Link-domain superfamily [^banerji1999]. Key differences from CD44: LYVE1 is lymphatic-restricted in its constitutive expression, whereas CD44 is broadly expressed. Both receptors bind HA, but with differing binding kinetics — LYVE1 shows markedly lower affinity for soluble HA than CD44, and full-avidity HA binding requires receptor clustering on the cell surface [^lawrance2016].

Two N-linked glycosylation sites (Asn-53, Asn-130) are present. The protein forms disulfide-linked homodimers; two intramolecular disulfide bonds (Cys61–Cys128 and Cys85–Cys106) stabilize the Link domain fold. LYVE1 concentrates at cell–cell junctions and undergoes ligand-dependent internalization and recycling between the trans-Golgi network, endosomes, and the plasma membrane [^uniprot-q9y5y7].

## Function

LYVE1 was identified in 1999 as a lymph-specific HA receptor — the first marker to distinguish lymphatic from blood endothelium immunohistochemically [^banerji1999]. Its principal physiological roles are:

1. **HA catabolism** — LYVE1-mediated internalization routes interstitial HA into the endolysosomal degradation pathway within LECs. Interstitial HA accumulates in aging tissues and in chronic inflammation; impaired lymphatic clearance is thought to exacerbate this accumulation. #gap/no-mechanism (whether LYVE1 activity per se declines with age, independent of lymphatic vessel remodeling, is not established)

2. **Cell adhesion and lymphocyte trafficking** — HA–LYVE1 interactions at the LEC surface facilitate transendothelial migration of immune cells into lymph. Loss of LYVE1 does not produce a major lymphatic developmental phenotype in mice, suggesting functional redundancy with other adhesion mechanisms [^jackson2001-review].

3. **Marker role** — As the best-characterized LEC-selective surface antigen, LYVE1 is co-opted as a standard research and pathological marker for lymphatic vessel mapping, quantification, and targeted reagent delivery.

## Macrophage co-expression: the critical caveat

LYVE1 is **not** exclusive to lymphatic endothelium. Since at least 2019, single-cell atlas studies have established that a conserved subset of tissue-resident macrophages co-express LYVE1 at the protein level:

- **Chakarov et al. 2019 (Science):** Defined two interstitial macrophage populations across multiple tissues — a Lyve1^hi^ MHCII^lo^ subset occupying perivascular/subtissular niches, and a Lyve1^lo^ MHCII^hi^ subset. The Lyve1^hi^ population showed distinct function (loss of Lyve1^hi^ macrophages exacerbated lung fibrosis) and a distinct gene-expression signature from LECs [^chakarov2019].
- **Dick et al. 2018 (Nature Immunology):** Cardiac TIMD4^+^LYVE1^+^ MHC-II^lo^ CCR2^−^ macrophages maintain themselves by local self-renewal with minimal monocyte replacement. They are functionally cardioprotective: experimental depletion worsened post-infarction remodeling [^dick2018].
- **Dick et al. 2022 (Science Immunology):** Extended this to 17 tissues, defining three canonical macrophage subsets in each organ. The TLF+ subset (TIMD4 and/or LYVE1 and/or FOLR2) is the most transcriptionally conserved between mouse and human across all tissues examined, and is the first to emerge developmentally from the yolk sac [^dick2022].

**Practical implication for experimental design:** Any study reporting LYVE1+ structures — particularly in locations where lymphatics have not been previously confirmed (e.g., [[bone]], brain parenchyma, myocardium) — must co-stain with:

- A positive lymphatic marker panel (LYVE1 + D2-40/podoplanin + [[prox1]] + CD31) AND
- Macrophage exclusion markers (e.g., CD68, F4/80, IBA1)

A panel of antibodies is necessary to detect lymphatic vessels with high specificity; individual markers can produce false positives from inflammatory or macrophage-rich contexts [^vanbeek2019].

## Aging and regeneration relevance

### Lymphatic aging

Lymphatic vessels undergo structural and functional deterioration with age. LECs accumulate DNA damage, exhibit altered HA transport kinetics, and show reduced responsiveness to VEGF-C. The net effect is impaired interstitial fluid clearance, reduced immune surveillance, and accumulation of matrix components (including HA) that foster a pro-inflammatory microenvironment — linking to the [[chronic-inflammation]] hallmark. LYVE1 expression on LECs serves as a quantitative readout of lymphatic coverage in aging tissue studies. #gap/needs-human-replication (most age-related lymphatic studies are in mouse; human histological data are sparse)

### LYVE1+ lymphatics in bone

A paradigm-shifting finding is that LYVE1+ lymphatic vessels exist **inside bone** — in both the cortical bone and bone marrow compartments — and that these intraosseous lymphatics expand markedly in response to genotoxic stress (whole-body irradiation, 5-fluorouracil chemotherapy), driven by IL-6-dependent lymphangiogenesis [^biswas2023]. This challenges the long-standing view that bone tissue lacks a lymphatic drainage network. Importantly, the Biswas 2023 study confirmed that the LYVE1-positive vascular structures in bone are negative for the macrophage marker F4/80, distinguishing them from LYVE1+ tissue-resident macrophages. Nevertheless, when interpreting LYVE1+ staining in other novel bone-adjacent contexts, co-staining with macrophage markers remains prudent. The [[studies/biswas-2023-bone-lymphatics]] sibling page describes the experimental evidence in detail.

### LYVE1+ macrophages in tissue repair and vascular homeostasis

The TIMD4+/LYVE1+ macrophage subset (TLF+) is thought to be a primary mediator of homeostatic tissue maintenance and post-injury repair across organs. In the heart, experimental loss of this subset worsened post-infarction cardiac remodeling [^dick2018]. In the lung, loss of Lyve1^hi^ macrophages exacerbated fibrosis [^chakarov2019]. These macrophages reside in perivascular niches and are positioned to regulate vascular tone, matrix remodeling, and immune cell trafficking — all processes that decline with age. Whether TIMD4+/LYVE1+ macrophage numbers or function decline with aging is an active area of investigation. #gap/needs-human-replication

| Dimension | Status |
|---|---|
| LYVE1 function conserved in humans? | yes — Link domain and HA-binding mechanism identical; LEC expression confirmed by HPA |
| Macrophage co-expression conserved in humans? | yes — Dick et al. 2022 confirmed TLF+ subset in human tissues |
| Age-related functional change replicated in humans? | no — lymphatic aging studies are primarily mouse; LYVE1+ macrophage aging data thin |

## Relationship to CD44

LYVE1 and [[cd44]] are the two well-characterized Link-domain hyaluronan receptors. They differ in:

- **Expression pattern:** CD44 is broadly expressed on many cell types; LYVE1 is constitutively lymphatic-restricted (and the TLF+ macrophage subset).
- **Binding affinity:** CD44 binds soluble HA with higher affinity; LYVE1 requires clustered presentation for full-avidity binding [^lawrance2016].
- **Functional context:** CD44 mediates HA signaling, cell migration, and co-receptor function; LYVE1's primary role is HA clearance and transport through the lymphatic endothelium.

Despite near-identical Link domain topology, the two receptors are not redundant: LYVE1-knockout mice lack major lymphatic or immunological phenotypes under homeostatic conditions, but CD44 knockout cannot substitute for LYVE1 in HA internalization at lymphatic junctions [^jackson2001-review].

## Druggability note

No clinical drug targets LYVE1 for an aging or disease indication. Anti-LYVE1 antibodies are used as research reagents. LYVE1 is a cell-surface glycoprotein with an accessible extracellular domain (UniProt loc high confidence; GO CC high confidence; confirmed transmembrane topology), making it theoretically tractable for antibody-based therapeutic targeting (e.g., lymphatic-targeted drug delivery in oncology), but this remains preclinical. Open Targets Platform (queried 2026-06-28 against ENSG00000133800) confirms no approved drug, advanced clinical, or phase 1 clinical compound for any modality; "Structure with Ligand" is true for small molecules. Aging-context druggability tier: **3** (predicted druggable — surface accessible, no validated aging probe or clinical compound).

## Cross-references

- [[cd44]] — structural homolog; shared Link domain superfamily
- [[prox1]] — master transcription factor of LEC identity; co-staining partner for LYVE1 verification
- [[endothelial-cells]] — parent cell-type page; LECs are a specialized sub-type
- [[bone]] — site of newly discovered intraosseous LYVE1+ lymphatics
- [[bone-marrow]] — lymphatic-adjacent compartment; LYVE1+ macrophages present
- [[studies/biswas-2023-bone-lymphatics]] — primary source for intraosseous LYVE1+ vessel findings
- [[chronic-inflammation]] — lymphatic aging contributes to impaired inflammatory resolution
- [[stem-cell-exhaustion]] — bone marrow lymphatics implicated in niche maintenance

## Footnotes

[^banerji1999]: doi:10.1083/jcb.144.4.789 · Banerji S et al. · J Cell Biol 1999 · in-vitro + in-vivo · model: human LEC / mouse tissue · original identification of LYVE-1 as a CD44 homologue and lymph-specific HA receptor; 1,306 citations

[^jackson2001-review]: doi:10.1016/s1471-4906(01)01936-6 · Jackson DG et al. · Trends Immunol 2001 · review · LYVE1 biology, lymphatic system function, and tumor lymphangiogenesis overview

[^lawrance2016]: doi:10.1074/jbc.m115.708305 · Lawrance W et al. · J Biol Chem 2016 · in-vitro · model: recombinant LYVE1 + HA oligosaccharides · HA binding critically dependent on receptor clustering and HA organization; 116 citations

[^uniprot-q9y5y7]: UniProt Q9Y5Y7 (LYVE1_HUMAN), Swiss-Prot entry, accessed 2026-06-28 · subcellular localization, domain boundaries, glycosylation sites, and disulfide bonds

[^chakarov2019]: doi:10.1126/science.aau0964 · Chakarov S et al. · Science 2019 · in-vivo · model: mouse + human tissues · two interstitial macrophage populations defined by Lyve1^hi/lo^ MHCII^lo/hi^ expression; loss of Lyve1^hi^ macrophages exacerbated lung fibrosis; 1,030 citations (not_oa)

[^dick2018]: doi:10.1038/s41590-018-0272-2 · Dick SA et al. · Nat Immunol 2019 (published Dec 2018) · in-vivo · model: mouse cardiac macrophage fate-mapping + parabiosis · TIMD4^+^LYVE1^+^ MHC-II^lo^ CCR2^−^ macrophages self-renew; depletion worsened post-MI remodeling; 818 citations (closed-access)

[^dick2022]: doi:10.1126/sciimmunol.abf7777 · Dick SA et al. · Sci Immunol 2022 · in-vivo + scRNA-seq · model: mouse + human, 17 tissues · TLF+ subset (TIMD4/LYVE1/FOLR2) most evolutionarily conserved; emerges first from yolk sac (closed-access)

[^biswas2023]: doi:10.1016/j.cell.2022.12.031 · Biswas L et al. · Cell 2023 · vol 186 pp 382-397 · in-vivo + light-sheet imaging · model: mouse (tibia, femur, sternum, vertebral column, hip bones) + human bone biopsies · LYVE1+/PROX1+/podoplanin+/VEGFR3+ lymphatic vessels confirmed in cortical bone and bone marrow; genotoxic stress (irradiation, 5-FU) expands lymphatics via IL-6/VEGFR3-dependent lymphangiogenesis (peak density day 15 post-irradiation); LYVE1+ vascular structures are F4/80-negative, confirming lymphatic rather than macrophage identity; LEC-derived CXCL12 supports MYH11+/CXCR4+ perivascular progenitor expansion and hematopoietic regeneration; aged mouse LECs are senescent and fail to expand after injury

[^vanbeek2019]: doi:10.3390/cancers11020228 · van Beek JGM et al. · Cancers 2019 · in-vivo (histology) · model: uveal melanoma human tissue · panel of LYVE-1+D2-40+Prox-1+CD31 positive + CD34 negative required for high-specificity lymphatic identification
