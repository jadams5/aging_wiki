---
type: protein
aliases: [COL3A1, collagen alpha-1(III) chain, type III collagen, reticular collagen]
uniprot: P02461
ncbi-gene: 1281
hgnc: 2201
ensembl: ENSG00000168542
mouse-ortholog: Col3a1
pathways: ["[[tgf-beta]]"]
hallmarks: ["[[loss-of-proteostasis]]"]
sens-categories: []
complex-subunits: []
druggability-tier: null
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "All primary-source claims verified against PDFs: Shin 2019 (doi:10.3390/ijms20092126), Fisher 2009 (doi:10.2353/ajpath.2009.080599), Liu 1997 (doi:10.1073/pnas.94.5.1852), Kim 2024 (doi:10.5483/BMBRep.2024-0107), Chen 2025 (doi:10.1093/rb/rbaf076), Kong 2016 DOI resolved (10.1111/jocd.12193). Canonical-database identity fields (UniProt P02461, NCBI Gene 1281, HGNC 2201, Ensembl ENSG00000168542) confirmed against UniProt REST API. Open Targets druggability tier not independently verified (API 500 error) — druggability-tier: null retained as reasonable given no aging-indication clinical drug exists."
---


# COL3A1 (collagen type III alpha 1 chain)

COL3A1 encodes the alpha-1 chain of type III collagen, a fibril-forming "reticular" collagen that is the second most abundant collagen in most soft connective tissues. It forms a homotrimer of three identical α1(III) chains, co-distributes with type I collagen throughout the dermis and vessel walls, and is critically enriched at sites of new tissue formation, wound healing, and embryonic development. Unlike the thicker type I fibrils (>100 nm diameter), type III fibrils are finer (~30–60 nm), contributing to the elastic compliance and pliability of soft tissues. Loss or fragmentation of type I collagen during skin aging alters the relative type I:III ratio, making type III proportionally more prominent even as total collagen declines.

## Identity

- **UniProt:** P02461 (CO3A1_HUMAN)
- **NCBI Gene:** 1281
- **HGNC symbol:** COL3A1
- **Ensembl:** ENSG00000168542
- **Chromosomal locus:** 2q32.2 (closely linked to COL5A2; the collagen gene cluster)
- **Mouse ortholog:** Col3a1 (one-to-one ortholog; Col3a1-null mice show ~95% neonatal lethality + adult vessel/intestinal rupture, closely recapitulating vascular EDS [^liu1997])
- **Precursor length:** 1,466 amino acids (signal peptide + N-propeptide + triple-helical domain + C-propeptide)
- **Mature triple-helical domain:** ~1,029 amino acids; characteristic Gly-X-Y repeat structure

## Structure and biosynthesis

Type III procollagen synthesis follows the canonical fibrillar-collagen biosynthetic pathway shared with [[col1a1]]:

1. **Transcription / translation** — preprocollagen (1,466 aa) synthesized on rough ER ribosomes; signal peptide (aa 1–23) cleaved co-translationally.
2. **Hydroxylation** — prolyl-4-hydroxylase (P4H) hydroxylates >100 proline residues in the X or Y positions of Gly-X-Y repeats to form 4-hydroxyproline; 3-hydroxyproline and lysyl-hydroxylase modifications also occur. These modifications are essential for triple-helix thermal stability at body temperature.
3. **Glycosylation** — O-linked Glc-Gal disaccharide units added to hydroxylysine residues by galactosyltransferase/glucosyltransferase.
4. **Homotrimer assembly** — unlike type I (heterotrimeric α1(I)₂α2(I)), type III collagen assembles as a homotrimer of three α1(III) chains, initiated at the C-propeptide and propagating N-terminally (zipper model).
5. **Disulfide bonding** — interchain disulfide bonds in the C-propeptide stabilize the trimer during assembly; additionally present in the N-terminal propeptide region (VWFC domain, aa 24–153).
6. **Secretion and propeptide cleavage** — procollagen III is secreted into the extracellular space; the N-propeptide (including the VWFC domain) and C-propeptide (COLFI domain) are cleaved by BMP-1 (procollagen C-proteinase) and ADAMTS-family proteases respectively, yielding the mature triple-helical molecule.
7. **Fibril assembly and cross-linking** — mature molecules self-assemble into fibrils; [[lox]] (lysyl oxidase) oxidizes specific lysine/hydroxylysine residues, forming pyridinoline and dehydro-dihydroxylysinonorleucine (DHLNL) cross-links that confer tensile strength. AGE-related non-enzymatic cross-linking by [[advanced-glycation-end-products]] adds additional stiffening (see § Aging context).

## Tissue distribution and co-localization with type I collagen

Type III collagen co-distributes with type I in the following tissues:

| Tissue | Notes |
|---|---|
| Dermis | ~8–12% of total dermal collagen [^shin2019]; fine reticular fibers throughout papillary and reticular dermis |
| Large arterial walls (aorta, pulmonary) | Adventitial and medial matrix; critical for vessel compliance |
| Uterus, cervix | High proportion at baseline; rises during pregnancy |
| Intestinal wall | Subepithelial matrix |
| Lung interstitium | Alveolar and bronchial framework |
| Liver (sinusoidal space of Disse) | Enriched in normal liver; replaced by type I in fibrosis |
| Early granulation tissue / wound bed | Transiently dominant during early healing phase |

Type III fibrils are smaller in diameter than type I fibrils (~30–60 nm vs >100 nm for type I). This structural difference underlies the contribution of type III to tissue pliability and compliance rather than tensile load-bearing, which is the primary role of type I.

## Aging context

### Collagen I:III ratio shift in dermis

In young adult dermis, type I collagen accounts for 80–90% of total collagen and type III for 8–12%, giving an approximate molar ratio of ~7–9:1 I:III [^shin2019]. With advancing age, type I collagen content falls substantially due to reduced fibroblast synthesis and increased MMP-mediated fragmentation [^fisher2009], while type III collagen production is relatively better maintained, so type III becomes proportionally more prominent as total collagen declines. #gap/needs-replication — a precise quantitative ratio shift value (e.g., "5:1 young → 3:1 aged") is not stated in Shin 2019 or Fisher 2009 as reviewed; the claim that type III becomes relatively more abundant with age is supported, but a specific numerical I:III ratio in young versus aged dermis requires a primary biopsy-quantification source not yet linked here.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | COL3A1 sequence and function are highly conserved across mammals |
| Phenotype (I:III ratio shift) conserved in humans? | yes | Measured in human skin biopsies across age groups |
| Replicated in humans? | yes | Fisher 2009 + Shin 2019 reviews; direct human biopsy data |

### Collagen fragmentation loop — COL3A1 in the Fisher 2009 model

Fisher et al. (2009) characterized a positive-feedback loop in aged human skin fibroblasts (young: 21–30 yr; aged: >80 yr; n=4–7 per assay): collagen fragmentation of type I collagen fibrils disrupts integrin-mediated mechanosignaling, resulting in:
- Reduced fibroblast spreading and mechanical tension → reduced TGF-β responsiveness → impaired procollagen synthesis
- Elevated reactive oxygen species (ROS) production in fragmented-collagen-exposed fibroblasts
- Upregulation of MMP-1 (interstitial collagenase; mRNA increased ~8-fold in aged vs young dermis in vivo) → further collagen degradation [^fisher2009]

This "collagen fragmentation cycle" is described specifically for type I collagen fibrils — Fisher 2009 focuses on type I as the primary substrate. COL3A1-derived fibrils share the same dermal niche and are also subject to MMP-1 cleavage, but the paper does not separately quantify type III fragmentation or attribute distinct mechanosensing effects to type III. #gap/needs-replication — selective contribution of type III collagen fragmentation to the MMP-1/ROS feedback loop not separately quantified in primary aging literature.

### Wound healing: COL3A1 enrichment in early granulation tissue

During wound healing, type III collagen is the dominant fibrillar collagen in early granulation tissue (days 3–7 post-injury), providing a provisional scaffold before type I collagen progressively replaces it during scar remodeling (weeks 2–6). In aged skin, this I:III transition during wound healing is dysregulated: the early type-III-rich granulation phase is prolonged and the switch to type-I-dominant scar matrix is delayed or incomplete, contributing to impaired scar quality and slower closure [^fisher2009].

In contrast, fetal wound healing (pre-third trimester) is characterized by a persistently high COL3A1:COL1A1 ratio and results in scarless, regenerative repair. The mechanistic basis — including absence of SASP-driver inflammation, sustained TGF-β3 (anti-scarring) vs TGF-β1/2 (pro-scarring) signaling — is reviewed elsewhere; see [[sasp]] and [[tgf-beta]].

### Non-enzymatic glycation (AGEs) and collagen stiffening

Type III collagen, like type I, is subject to non-enzymatic glycation by reactive carbonyl species, forming [[advanced-glycation-end-products]] including glucosepane cross-links. This AGE-driven inter- and intramolecular cross-linking stiffens collagen fibrils, reduces fibroblast contractility, and impairs the normal MMP-mediated turnover of the aged matrix. The collagen half-life in dermis is decades long (estimated 15–80 years for type I and similar for type III), making cumulative AGE load a significant contributor to dermal stiffening with age. #gap/needs-replication — quantitative AGE load specifically on type III vs type I collagen fibrils not separately measured in primary aging literature; most data conflates both.

## COL3A1 disease associations (vascular EDS)

**Ehlers-Danlos syndrome, vascular type (vEDS; OMIM 130050)** — caused by heterozygous loss-of-function or dominant-negative missense mutations in COL3A1. The disorder presents with:
- Arterial rupture (spontaneous or minor-trauma-induced; median age of first major complication ~29 years)
- Bowel rupture (sigmoid colon most common)
- Uterine rupture (especially during pregnancy)
- Translucent, thin skin with visible venous network; minimal skin hyperextensibility compared to classical EDS
- Median survival ~48–51 years due to arterial/bowel complications

The lethal-in-aging relevance: vEDS provides the clearest proof-of-concept for type III collagen's non-redundant role in maintaining arterial wall integrity. In Col3a1-null (homozygous −/−) mice, ~95% die within the first 48 hours after birth (predominantly neonatal, not embryonic lethal — ~10% of homozygous mutants survived to adulthood but had a lifespan of ~6 months, approximately one-fifth of wild-type). The major cause of death in surviving adult null mice was rupture of large blood vessels (chest and abdominal aneurysm) and intestinal rupture, closely recapitulating the clinical features of vascular EDS [^liu1997]. Additionally, collagen type I fibrillogenesis is disrupted in null mice: fibrils in aortic adventitia and skin are absent or irregularly sized, confirming type III collagen's non-redundant role in regulating type I fibril diameter [^liu1997].

| Disease | OMIM | Inheritance | COL3A1 change |
|---|---|---|---|
| vEDS (classic) | 130050 | AD | Heterozygous missense/deletion in triple-helical domain |
| Polymicrogyria + vascular EDS (PMGEDSV) | 618343 | AR | Biallelic LOF |

## Pharmacology and druggability

There is no clinical drug that directly targets COL3A1 protein or selectively modulates type III collagen synthesis in isolation from type I. Interventions that influence COL3A1 do so by modulating shared upstream regulators:

- **Retinoids** (tretinoin / retinoic acid, retinol) — increase procollagen gene expression including COL3A1 in aged fibroblasts; Kong et al. (2016) showed both retinol and retinoic acid upregulate collagen expression in aged human skin biopsies, with retinoic acid showing greater effect on histological collagen density [^kong2016]. COL1A1 and COL3A1 both respond; the I:III ratio effect of retinoids is not well characterized in isolation.
- **TGF-β pathway modulators** ([[tgf-beta]]) — TGF-β1/2 are the primary transcriptional drivers of COL3A1 via SMAD2/3; reduced TGF-β responsiveness in aged fibroblasts (due to collagen fragmentation, [[sasp]] cytokine signaling) underlies part of the age-related collagen decline.
- **MMP inhibitors** — tetracyclines (doxycycline) have broad MMP-inhibiting activity and could in principle slow collagen fragmentation; no aging-indication trial data.
- **Recombinant type III collagen** (injectable fillers) — Chen et al. (2025) demonstrated a recombinant hCOL3A1 microgel formulation with skin-rejuvenating efficacy in vitro and animal models, pending human trials [^chen2025]. Kim et al. (2024) described a truncated hCOL3A1 recombinant protein that stimulates fibroblast proliferation and endogenous collagen biosynthesis in vitro [^kim2024].

`druggability-tier: null` — no COL3A1-specific clinical drug or validated aging-indication probe exists. Open Targets Platform API was unresponsive at verification; populate `druggability-tier` on next lint pass. Expected tier 3–4 given no clinical drug targets this protein for an aging indication. #gap/unsourced

## Pathway membership and key interactors

- [[tgf-beta]] — primary transcriptional driver of COL3A1 via SMAD2/3 signaling; reduced in aged fibroblasts
- [[lox]] (lysyl oxidase) — mediates enzymatic cross-linking of nascent collagen III fibrils; declines with age, shifting cross-link chemistry toward AGE-derived non-enzymatic variants
- [[col1a1]] — co-fibrillary partner; competes for fibrillogenic niche in dermis and vessel walls; relative I:III ratio a key readout of dermal aging state
- [[dermal-fibroblasts]] — principal cellular source of COL3A1 in dermis; their mechanosensing capacity is disrupted by collagen fragmentation

## Key open questions

- #gap/dose-response-unclear — Dose-response relationship between type I:III ratio shift and macroscopic skin phenotypes (wrinkle depth, elasticity) is not quantified in controlled aging cohorts.
- #gap/needs-human-replication — Whether COL3A1-specific interventions (recombinant collagen III injection, topical) improve skin functional outcomes in RCTs; all current data is in vitro or animal-model.
- #gap/no-mechanism — AGE-specific load on type III vs type I collagen fibrils in aged dermis not separately quantified.

## Footnotes

[^shin2019]: doi:10.3390/ijms20092126 · Shin JW et al. · *Int J Mol Sci* · 2019 · review · n=not applicable · model: human skin biopsy literature synthesis; reports type I collagen as 80–90% and type III collagen as 8–12% of total dermal collagen; describes MMP-driven collagen fragmentation aging mechanism. Local PDF: 

[^fisher2009]: doi:10.2353/ajpath.2009.080599 · Fisher GJ et al. · *Am J Pathol* · 2009 · in-vivo (human skin biopsies + fibroblast culture) · n=4–7 per assay (young: 21–30 yr; aged: >80 yr) · describes type I collagen-fragmentation → ROS → MMP-1 upregulation positive-feedback loop in aged skin; MMP-1 mRNA ~8-fold elevated in aged dermis in vivo. Local PDF: 

[^kong2016]: doi:10.1111/jocd.12193 · PMID 26578346 · Kong R et al. · *J Cosmet Dermatol* · 2016 · 15(1):49–57 · observational/clinical · retinol vs retinoic acid effects on collagen expression and skin histology in aged human skin; both retinol and retinoic acid upregulate collagen expression including type I, III, and VII.

[^liu1997]: doi:10.1073/pnas.94.5.1852 · Liu X, Wu H, Byrne M, Krane S, Jaenisch R · *Proc Natl Acad Sci USA* · 1997 · 94:1852–1856 · in-vivo · Col3a1 homozygous null mice: ~95% neonatal lethality within 48 h; ~10% survive to adulthood (~6-month lifespan vs ~30-month wild-type); adult deaths from aortic/intestinal rupture; type I collagen fibrillogenesis disrupted in dermis and aorta of null mice. Model: C57BL/6 × BALB/c. Local PDF: 

[^chen2025]: doi:10.1093/rb/rbaf076 · Chen Y et al. · *Regen Biomater* · 2025 · 12:rbaf076 · in-vitro + animal model (subcutaneous mouse + rat UV-photoaging model) · BDDE-crosslinked recombinant hCOL3A1 microgel injectable filler; demonstrated collagen I and III production and elastic fiber regeneration in rat photoaging model at 6 weeks; no human trial data. Local PDF: 

[^kim2024]: doi:10.5483/BMBRep.2024-0107 · Kim YU et al. · *BMB Rep* · 2024 · 57(9):424–429 · PMID 39219046 · in-vitro · recombinant hCOL3A1 THR-domain fragments (hCOL3A1-THR-M1 and M4) stimulate type I procollagen biosynthesis ~1.3–2-fold and cell proliferation in human dermal fibroblasts (HDF) and HaCaT keratinocytes; hCOL3A1-THR-M1 penetrates full-thickness skin model to dermal layer. Local PDF: 
