---
type: protein
aliases: [PYCARD, apoptosis-associated speck-like protein containing a CARD, TMS1, CARD5]
uniprot: Q9ULZ3
ncbi-gene: 29108
hgnc: 16608
ensembl: ENSG00000103490
mouse-ortholog: Pycard
key-domains: [PYD, CARD]
pathways: ["[[nlrp3-inflammasome]]"]
hallmarks: ["[[chronic-inflammation]]"]
known-interactors: ["[[caspase-1]]", "[[nlrp3]]", "[[aim2]]", "[[il-1b]]"]
druggability-tier: null
genage-id: null
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: ["[[nlrp3-inflammasome]]"]
causes: ["[[caspase-1]]", "[[il-1b]]", "[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Masumoto 1999, Srinivasula 2002, Franklin 2014, Ganapathy 2025, and Ridker 2017 (CANTOS) verified against local PDFs. Lu 2014 (Cell) download failed (green OA, no working URL in archive); key structural claims cross-checked against PubMed abstract + paper landing page — polymerization mechanism and CARD-outward projection confirmed; 'left-handed helical' descriptor corrected to source-accurate 'three-start helical' description. Canonical-DB identity fields (UniProt Q9ULZ3, NCBI Gene 29108, HGNC 16608, Ensembl ENSG00000103490) not independently re-verified against databases."
---

# ASC (PYCARD)

ASC (apoptosis-associated speck-like protein containing a CARD; gene name PYCARD) is a ~22 kDa bipartite adaptor protein that bridges upstream pattern recognition receptors (PRRs) — principally [[nlrp3]], [[aim2]], pyrin, and NLRC4 — to [[caspase-1]] within inflammasome platforms. It is the obligate scaffold for most ASC-dependent inflammasomes and is directly relevant to [[chronic-inflammation|inflammaging]] through its role concentrating and amplifying innate immune signaling in aged tissues.

## Identity

- **UniProt:** Q9ULZ3 (PYCD_HUMAN) — Swiss-Prot reviewed entry
- **NCBI Gene:** 29108
- **HGNC symbol:** PYCARD
- **Ensembl:** ENSG00000103490
- **Mouse ortholog:** Pycard (one-to-one)
- **Length:** 195 amino acids (canonical isoform); the original Masumoto 1999 paper reported ~22 kDa by SDS-PAGE for the HL-60-derived protein [^masumoto1999]
- **Aliases in literature:** ASC (most common), TMS1 (target of methylation-mediated silencing 1), CARD5

## Domain structure

ASC has a simple bipartite architecture — two death-fold domains joined by a short linker:

| Domain | Residues (approx.) | Homotypic partner |
|---|---|---|
| Pyrin domain (PYD) | 1–105 | NLRP1/2/3/6, AIM2, IFI16, NLRC4 (partial), pyrin (MEFV) |
| CARD domain | 105–195 | Pro-caspase-1, NLRC4 (direct) |

Both interactions are **homotypic** (PYD-PYD, CARD-CARD) and operate via charge-complementary surface patches. Structural work by cryo-EM resolved that ASC polymerizes via its PYD into a three-start helical assembly (C3 symmetry); CARD domains project outward from the filament to nucleate CARD filaments of pro-caspase-1, driving its self-activation [^lu2014].

## Function

### Inflammasome assembly and ASC speck formation

Upon danger signal detection, sensor PRRs (e.g., NLRP3 activated by potassium efflux, ATP, or MSU crystals) recruit ASC via PYD-PYD interaction. ASC then **polymerizes** into a single large (~1 µm diameter) perinuclear aggregate termed the **ASC speck** — one speck per activated cell, visible by immunofluorescence and serving as a proxy for inflammasome activation in imaging assays [^stutz2013].

The speck concentrates thousands of ASC molecules, creating a platform that recruits and clusters pro-caspase-1 via CARD-CARD interaction. Proximity-induced autoproteolytic activation of caspase-1 follows, generating the p20/p10 active heterodimer that cleaves [[il-1b|pro-IL-1beta]] and [[il-18|pro-IL-18]] to their mature secreted forms, and cleaves [[gsdmd|gasdermin D]] to trigger pyroptotic cell death.

### Extracellular ASC specks and prionoid propagation

A critical aging-relevant property: when a cell undergoes pyroptosis, assembled ASC specks are **released extracellularly** intact. These extracellular specks retain the ability to activate neighboring macrophages: phagocytosis of extracellular specks causes lysosomal damage, de novo nucleation of soluble ASC in recipient cells, and caspase-1 and IL-1β activation — amplifying the inflammatory signal beyond the initially activated cell [^franklin2014]. This downstream signaling in recipient cells is partially independent of NLRP3 (reduced but not abolished in Nlrp3−/− macrophages), implicating direct ASC seeding as the primary mechanism [^franklin2014]. This prionoid-like propagation has been proposed as a mechanism by which a localized sterile inflammatory event can escalate into tissue-wide or systemic inflammaging.

#gap/needs-human-replication — Extracellular speck propagation demonstrated in mouse models and cell culture; direct evidence in human aged tissues is limited.

## Role in aging

### Inflammaging and NLRP3 upregulation

Aged tissues accumulate more activated inflammasomes relative to young controls, reflected by elevated ASC speck frequency per cell and elevated circulating IL-1beta and IL-18. The upstream driver is primarily chronic NLRP3 upregulation — see [[nlrp3-inflammasome]] and [[chronic-inflammation]] for the evidence base. ASC is the obligate scaffold that translates NLRP3 upregulation into caspase-1 activation; Srinivasula 2002 established that full-length ASC (but not isolated PYD or CARD alone) is required for efficient caspase-1 activation, with the PYRIN domain serving as the oligomerization domain and the CARD as the effector domain [^srinivasula2002]. #gap/needs-replication — The specific requirement of ASC for NLRP3-mediated caspase-1 activation was subsequently demonstrated by genetic studies not cited on this page; Srinivasula 2002 used LPS/IFN stimulation models rather than NLRP3-specific activators.

### TMAO-ASC axis in metabolic aging

A 2025 study demonstrated that adipocyte FMO3 (not solely hepatic FMO3) is a significant source of circulating TMAO in aging, and that TMAO binds directly to ASC, promoting caspase-1 activation and IL-1β production in white adipose tissue. Adipocyte-specific FMO3 knockout in C57BL/6J mice reduced aging-associated WAT inflammation, senescence, and metabolic dysfunction [^ganapathy2025]. The mechanism links gut microbiome-derived metabolite precursors → adipocyte FMO3 → TMAO → direct ASC binding → inflammasome activation → WAT inflammaging. #gap/needs-replication — Single study; direct structural resolution of the TMAO-ASC binding interface not yet published; mouse strain C57BL/6J; human adipocyte data limited to correlative expression analyses.

### Evidence quality table

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | PYCARD highly conserved; speck formation confirmed in human macrophages |
| Phenotype conserved in humans? | partial | Elevated IL-1beta/IL-18 in aged human plasma; direct speck quantification in aged human tissue sparse |
| Replicated in humans? | no | Genetic/interventional evidence in humans absent; observational only |

## Genetic associations

- **Methylation silencing:** PYCARD/TMS1 is epigenetically silenced by promoter methylation in some cancers (breast, colon), eliminating apoptotic and inflammasome function in tumor cells — the flip side of the aging-relevant upregulation phenotype.
- No GWAS hits for longevity phenotypes are documented for PYCARD as of this writing. #gap/needs-canonical-id — No GenAge entry found for PYCARD.

## Therapeutic angles

### ASC-PYD inhibitory peptides

Peptides derived from the ASC PYD surface have been used preclinically to block PYD-PYD interactions and interrupt speck assembly. These remain research tools only; no clinical candidate identified.

### Upstream NLRP3 inhibitors

MCC950 (small-molecule NLRP3 inhibitor) acts upstream of ASC, blocking NLRP3 ATPase activity and preventing ASC recruitment. This is the most advanced pharmacological approach targeting this pathway — see [[nlrp3-inflammasome]] for clinical-stage status.

### Anti-IL-1 biologics

Anakinra (IL-1Ra) and canakinumab (anti-IL-1beta mAb) bypass ASC/caspase-1 entirely by blocking the downstream cytokine. The CANTOS trial demonstrated proof-of-concept that anti-IL-1beta reduces cardiovascular events in humans with elevated hsCRP, providing indirect human evidence that this axis is therapeutically tractable [^ridker2017]. #gap/unsourced — CANTOS ASC-specific mechanistic link not cited directly; cite via [[nlrp3-inflammasome]] page.

## Pathway membership

- [[nlrp3-inflammasome]] — central scaffold protein in NLRP3, AIM2, pyrin, and IFI16 inflammasome platforms

## Key interactors

- [[caspase-1]] — recruited via CARD-CARD; ASC speck is required for efficient caspase-1 activation in NLRP3/AIM2 contexts
- [[nlrp3]] — sensor PRR; recruits ASC PYD upon activation
- [[il-1b]] — downstream substrate of ASC-activated caspase-1
- [[gsdmd]] — downstream substrate; pore-forming executioner of pyroptosis (page pending — R24d)
- [[bax]] — UniProt annotation notes BAX interaction in apoptotic contexts (distinct from inflammasome context)

## Limitations and gaps

- #gap/needs-human-replication — Speck accumulation in aged human tissues quantified in only a handful of small studies; no large-scale tissue atlas data.
- #gap/no-mechanism — Mechanism by which chronic sterile stimuli selectively increase basal ASC speck frequency with aging is not fully characterized (epigenetic upregulation of NLRP3? Mitochondrial ROS? Both?).
- #gap/needs-canonical-id — No GenAge HAGR entry for PYCARD. No druggability tier from Open Targets yet assigned.
- #gap/dose-response-unclear — Effective dose range for ASC-PYD peptide inhibitors in vivo not established.

## See also

- [[nlrp3-inflammasome]] — the upstream sensor platform
- [[caspase-1]] — the direct enzymatic output of ASC speck recruitment (R24d sibling page, pending)
- [[gsdmd]] — pyroptosis executioner downstream of caspase-1 (R24d sibling page, pending)
- [[il-1b]] — canonical cytokine substrate of ASC/caspase-1
- [[chronic-inflammation]] — hallmark this protein drives
- [[inflammaging]] — aging-specific phenotype driven by chronic low-level inflammasome activation

## Footnotes

[^masumoto1999]: doi:10.1074/jbc.274.48.33835 · Masumoto J et al. · *J Biol Chem* 1999 · n=N/A · in-vitro · model: HL-60 human promyelocytic leukemia cells · original ASC cloning and characterization; 536 citations
[^srinivasula2002]: doi:10.1074/jbc.c200179200 · Srinivasula SM et al. · *J Biol Chem* 2002 · n=N/A · in-vitro · model: cell-free reconstitution + cell lines · establishes ASC as bipartite PYRIN-CARD adaptor for caspase-1; 561 citations
[^lu2014]: doi:10.1016/j.cell.2014.02.008 · Lu A et al. · *Cell* 2014 · n=N/A · structural (cryo-EM) · model: recombinant human ASC filaments · unified polymerization mechanism for ASC-dependent inflammasomes; 1284 citations
[^franklin2014]: doi:10.1038/ni.2913 · Franklin BS et al. · *Nat Immunol* 2014 · n=N/A · in-vitro + in-vivo (mouse) · model: murine BMDMs + peritonitis model · extracellular ASC specks propagate inflammation in neighboring cells; 737 citations
[^stutz2013]: doi:10.1007/978-1-62703-523-1_8 · Stutz A, Horvath GL, Monks BG, Latz E · *Methods Mol Biol* 2013 · review/methods · ASC speck formation as quantitative readout for inflammasome activation; 329 citations · #gap/no-fulltext-access — book chapter, not_oa; full PDF not in archive
[^ganapathy2025]: doi:10.1038/s41467-025-63905-1 · Ganapathy T et al. · *Nat Commun* 2025 · n=N/A · in-vivo (aged mice) + mechanistic · model: C57BL/6J aging (young 8-wk, middle-aged 48–50-wk, old 85–105-wk) + adipocyte-specific FMO3 knockout (Adipo-FMO3 KO) · adipocyte FMO3-derived TMAO directly binds ASC and promotes caspase-1 activation and IL-1β production in aging WAT; proteomics identified TMAO-interacting inflammasome proteins; locally available PDF
[^ridker2017]: doi:10.1056/NEJMoa1707914 · Ridker PM et al. (CANTOS trial) · *N Engl J Med* 2017 · n=10,061 · RCT · model: human post-MI patients with hsCRP ≥2 mg/L · canakinumab reduces cardiovascular events; indirect evidence for IL-1beta axis in human aging-related inflammation
