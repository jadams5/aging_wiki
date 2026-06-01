---
type: protein
aliases: [gasdermin D, GSDMDC1, DFNA5L, FKSG10]
uniprot: P57764
ncbi-gene: 79792
hgnc: 25697
ensembl: ENSG00000104518
mouse-ortholog: Gsdmd
genage-id: null
key-domains: [N-terminal pore-forming domain, C-terminal autoinhibitory domain, linker helix-loop]
pathways: ["[[nlrp3-inflammasome]]", "[[pyroptosis]]"]
hallmarks: ["[[chronic-inflammation]]"]
sens-categories: []
known-interactors: ["[[caspase-1]]", "[[caspase-4]]", "[[caspase-5]]", "[[caspase-11]]", "[[asc]]", "[[nlrp3]]"]
druggability-tier: 2
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: ["[[nlrp3-inflammasome]]"]
causes: ["[[pyroptosis]]", "[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Hu 2020 (doi:10.1038/s41590-020-0669-6) and Mejias 2018 (doi:10.1186/s12950-018-0198-3) verified against primary source PDFs (downloaded via PMC). Shi 2015, Kayagaki 2015, Ding 2016, and Liu 2016 are not_oa or failed download; cleavage site (Asp275/Gly276) cross-verified against UniProt P57764 REST API annotation; pore stoichiometry cross-referenced from Hu 2020 intro (which cites Liu 2016 + Pan 2018). Canonical-database identity fields (UniProt, NCBI Gene, HGNC, Ensembl) not independently re-verified."
---

# GSDMD (Gasdermin D)

The executioner of [[pyroptosis]]: a 484-amino-acid (~53 kDa) cytosolic protein that is activated by inflammatory caspase cleavage to generate a pore-forming N-terminal fragment. Pore formation lyses the cell (pyroptosis) and releases [[il-1beta|IL-1β]] and [[il-18|IL-18]] into the extracellular space. As GSDMD-mediated pyroptosis is a driver of sterile inflammation, it is increasingly recognized as a mechanism underlying [[chronic-inflammation|inflammaging]] across multiple tissues.

## Identity

- **UniProt:** P57764 (GSDMD_HUMAN)
- **NCBI Gene:** 79792
- **HGNC:** 25697
- **Ensembl:** ENSG00000104518
- **Mouse ortholog:** Gsdmd (one-to-one ortholog)
- **Length:** 484 amino acids (canonical isoform)
- **Molecular mass:** ~53 kDa (full-length precursor); ~30 kDa (GSDMD-N after cleavage); ~22 kDa (GSDMD-C)
- **Family:** Gasdermin superfamily — six human paralogs: GSDMA, GSDMB, GSDMC, GSDMD, GSDME (DFNA5), PJVK (DFNB59)

## Domain architecture

GSDMD has a bipartite structure held in autoinhibited conformation in the full-length precursor [^ding2016]:

| Fragment | Residues | Role |
|---|---|---|
| N-terminal domain (GSDMD-N) | 1–275 | Pore-forming; contains transmembrane β-strands (91–97, 103–108, 180–186, 191–197) |
| Linker helix-loop | 277–296 | Contains caspase cleavage site; mediates intramolecular autoinhibition |
| C-terminal domain (GSDMD-C) | 276–484 | Autoinhibitory; blocks GSDMD-N membrane-binding surface in the resting state |

The C-terminal domain occludes the lipid-binding and oligomerization surfaces of GSDMD-N; caspase cleavage at Asp-275 separates them, releasing GSDMD-N to engage the membrane [^ding2016].

## Function: pore formation and pyroptosis

Upon caspase cleavage at Asp-275, liberated GSDMD-N:

1. Preferentially binds phosphoinositides (PI(4,5)P2, PI(3,4,5)P3) and cardiolipin on the inner leaflet of the plasma membrane (and mitochondrial inner membrane for cardiolipin).
2. Oligomerizes to form a ring — cryo-EM shows ~27 monomers assemble into a pore with an ~18 nm inner diameter [^liu2016]; earlier cryo-EM models proposed ~16-mer species but the 27-mer / 18 nm figure is now the consensus cited by subsequent structural work.
3. Pore-driven osmotic influx triggers cell swelling and membrane rupture (pyroptosis), releasing cytosolic contents including mature [[il-1beta|IL-1β]] and [[il-18|IL-18]] [^shi2015].

Pyroptosis is morphologically distinct from [[apoptosis]] (no blebbing, rapid lysis, pro-inflammatory) and from [[necroptosis]] (GSDMD-independent, MLKL-pore driven). GSDMD is the shared terminal effector for both canonical and non-canonical inflammasome pathways.

An inactivating cleavage also exists: caspase-3/7 can cleave at Asp-87 within GSDMD-N, generating a ~13 kDa fragment and abrogating pore activity — a potential anti-inflammatory counter-regulatory mechanism #gap/no-mechanism (physiological significance under-characterized).

## Canonical vs non-canonical activation

### Canonical (caspase-1)

PAMPs/DAMPs → pattern-recognition receptor (e.g., [[nlrp3]]) → [[nlrp3-inflammasome|NLRP3 inflammasome]] → ASC oligomerization → [[caspase-1]] autoactivation → cleavage of both GSDMD (at Asp-275) and pro-IL-1β/pro-IL-18 (maturation). Both events are caspase-1 substrates and occur simultaneously [^shi2015].

### Non-canonical (caspase-11 in mouse; caspase-4/5 in human)

Cytosolic LPS (from intracellular Gram-negative bacteria or outer membrane vesicles) directly binds and activates caspase-11 (mouse) or [[caspase-4]]/[[caspase-5]] (human) without requiring an inflammasome scaffold — these caspases then cleave GSDMD directly [^kayagaki2015]. Non-canonical activation can secondarily trigger NLRP3 activation via potassium efflux through the GSDMD pore, linking the two pathways.

### Additional activating caspases

UniProt also records caspase-8 as a cleavage enzyme at Asp-275 (relevant in LPS-primed macrophages and certain apoptotic contexts). Caspase-3/7 cleavage at Asp-87 is inactivating (above).

| Caspase | Cleavage site | Effect | Pathway context |
|---|---|---|---|
| Caspase-1 | Asp-275 | Activating | Canonical inflammasome |
| Caspase-4/5 (human) | Asp-275 | Activating | Non-canonical LPS sensing |
| Caspase-11 (mouse) | Asp-275 | Activating | Non-canonical LPS sensing |
| Caspase-8 | Asp-275 | Activating | TLR/apoptotic context |
| Caspase-3/7 | Asp-87 | Inactivating | Apoptosis (counter-regulatory) |

## Aging relevance and inflammaging

Pyroptosis contributes to [[chronic-inflammation|inflammaging]] — the sterile, low-grade chronic inflammation characteristic of older organisms — through several tissue-specific mechanisms:

- **Macrophage/monocyte pyroptosis** — elevated NLRP3 inflammasome priming with age drives increased caspase-1 activity and GSDMD cleavage; Mejias et al. 2018 detected elevated cleaved gasdermin-D fragments and increased ASC oligomerization (pyroptosome formation) in **brain tissue** (cortex and hippocampus) of aged BALB/c mice (18 months) vs. young (3 months); the same study found elevated ASC and IL-18 (not GSDMD) in human serum of males >45 y/o vs. 20–45 y/o (n=17–40 per group) [^mejias2018]. #gap/needs-human-replication (direct GSDMD pyroptosis quantification in human tissue not demonstrated)
- **Cardiomyocyte and vascular pyroptosis** — GSDMD-mediated pyroptosis implicated in atherosclerotic plaque instability and cardiac remodeling; GSDMD-deficient mice show reduced vascular inflammation in disease models #gap/needs-human-replication.
- **Neuroinflammation** — microglial pyroptosis via NLRP3/GSDMD axis proposed as a contributor to neurodegenerative age-related disease; mechanistic work predominantly in rodent models #gap/needs-human-replication.

The NLRP3/GSDMD/IL-1β axis is the mechanistic thread connecting [[nlrp3-inflammasome]] activity to the [[chronic-inflammation]] hallmark of aging.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Caspase-4/5 in humans are functional orthologs of mouse caspase-11; GSDMD cleavage site conserved |
| Phenotype conserved in humans? | partial | NLRP3/IL-1β/ASC activation documented in aged human blood (ASC, IL-18 elevated in males >45 y/o [^mejias2018]); GSDMD-specific pyroptosis in human tissue requires more direct measurement |
| Replicated in humans? | partial | Elevated ASC and IL-18 in aged human serum [^mejias2018]; GSDMD protein elevation documented in aged mouse brain (not human serum); no human GSDMD-knockout or therapeutic reduction data |

## Pharmacology

### Disulfiram (DSF) — covalent GSDMD inhibitor

Disulfiram (tetraethylthiuram disulfide; an FDA-approved alcohol-aversion drug) and its metabolite diethyldithiocarbamate (DTC) covalently modify **Cys-191 of human GSDMD-N** (the analogous residue in mouse Gsdmd is Cys-192), blocking membrane insertion without affecting caspase cleavage of GSDMD [^hu2020]. Key findings:

- DSF inhibited canonical (NLRP3/nigericin) pyroptosis in human THP-1 macrophages with cellular IC50 of **7.7 ± 0.3 µM**, and non-canonical (LPS electroporation) pyroptosis in mouse iBMDMs with IC50 of **10.3 ± 0.5 µM**; IL-1β/IL-18 secretion was blocked at equivalent concentrations [^hu2020].
- Systemic DSF (50 mg/kg IP, C57BL/6J mice) protected against LPS-induced lethal sepsis: at 15 mg/kg LPS, 8/8 DSF-treated mice survived vs. 3/8 controls (p=0.045 at 96 h) [^hu2020]. #gap/needs-human-replication
- Cys-191 (human) / Cys-192 (mouse) is conserved in GSDMD but absent in other gasdermin family members (GSDMA, GSDMB, GSDMC, GSDME/DFNA5) — the structural basis for DSF's selectivity for GSDMD pore formation over other gasdermins [^hu2020]. #gap/needs-replication (selectivity characterized in Hu 2020; independent structural replication desirable)

DSF is an existing generic drug with a known safety profile, making GSDMD a translatable aging-inflammation target if a pyroptosis-driven indication is established in humans. Clinical-stage GSDMD-specific inhibitors remain in early development as of 2026.

### Necrosulfonamide (NSA)

NSA was initially described as an MLKL inhibitor ([[necroptosis]] pathway) and was reported to inhibit GSDMD-mediated pyroptosis. However, Hu 2020 demonstrated that NSA's activity in the GSDMD liposome leakage assay is attributable primarily to **caspase inhibition** (NSA inhibits caspase-1 processing of GSDMD) rather than direct modification of GSDMD pore-forming residues — in contrast to DSF, which acts post-cleavage on GSDMD-NT [^hu2020]. The earlier claim that NSA reacts with Cys-192 of **human** GSDMD-N is inconsistent with Hu 2020: Cys-192 is the **mouse** residue; the human residue is Cys-191. NSA is not a selective GSDMD pore inhibitor and is not a clinical candidate. #gap/needs-replication

## Pathway membership

- [[nlrp3-inflammasome]] — receives caspase-1 output; GSDMD is the terminal effector
- [[pyroptosis]] — GSDMD pore is the defining molecular event
- [[chronic-inflammation]] — GSDMD-dependent IL-1β/IL-18 release is a primary sterile-inflammation driver

## Key interactors

- [[caspase-1]] — canonical activating cleavage at Asp-275
- [[caspase-4]] / [[caspase-5]] — non-canonical activating cleavage (human)
- [[asc]] — inflammasome adaptor; upstream of caspase-1
- [[nlrp3]] — canonical sensor, upstream
- [[il-1beta]] — co-released through GSDMD pore / upon pyroptotic rupture
- [[il-18]] — co-released; downstream effector of inflammasome activation

## Cross-references to R24d sibling pages

- [[caspase-1]] — activating protease (canonical pathway)
- [[asc]] — inflammasome adaptor
- [[nlrp3-inflammasome]] — upstream pathway (drafted)
- [[pyroptosis]] — the process GSDMD executes
- [[chronic-inflammation]] — hallmark driven by GSDMD-dependent cytokine release
- [[canakinumab]] — IL-1β-blocking antibody; acts downstream of GSDMD-mediated IL-1β release; verified

## Limitations and gaps

- #gap/needs-human-replication — Direct evidence that GSDMD-mediated pyroptosis contributes to human inflammaging requires longitudinal or interventional human data; current evidence is from mouse brain studies (Mejias 2018) and cross-sectional human serum studies of upstream markers (ASC, IL-18) rather than GSDMD itself in human tissue.
- #gap/needs-replication — Disulfiram's Cys-191-specific GSDMD inhibition mechanism was characterized in a single in-vivo study (Hu 2020); independent replication of the selectivity and in-vivo efficacy is needed.
- #gap/no-mechanism — Physiological significance of the inactivating caspase-3/7 cleavage at Asp-87 is not established; whether this represents meaningful counter-regulation during apoptosis or is incidental is unknown.
- #gap/long-term-unknown — Whether chronic low-level GSDMD activation (sub-pyroptotic, as reported for cytokine secretion without full lysis) is quantitatively important for inflammaging chronology is untested.
- #gap/needs-canonical-id — GenAge entry: not listed in GenAge HAGR as of 2026-05-06 (GSDMD not a direct longevity gene; upstream regulators NLRP3 and caspase-1 are the proximal target entries).

## Footnotes

[^shi2015]: doi:10.1038/nature15514 · Shi J et al. · *Nature* 2015 · in-vitro + in-vivo · n=multiple cell lines + mouse models · model: macrophage pyroptosis; identified GSDMD as the pyroptotic effector cleaved by caspase-1/11; cited >6100 times

[^kayagaki2015]: doi:10.1038/nature15541 · Kayagaki N et al. · *Nature* 2015 · in-vivo (mouse) · n=multiple genetic models · model: independent discovery that caspase-11 cleaves GSDMD for non-canonical inflammasome signalling; cited >3400 times

[^liu2016]: doi:10.1038/nature18629 · Liu X et al. · *Nature* 2016 · in-vitro (cryo-EM + liposome) · model: reconstituted GSDMD pore; paper is not_oa (no local PDF); per consensus of citing literature (Hu 2020 + Pan 2018 cryo-EM), ~27-mer assembly with ~18 nm inner diameter is the accepted pore architecture; cited >3000 times · #gap/no-fulltext-access (pore stoichiometry cross-referenced from Hu 2020)

[^ding2016]: doi:10.1038/nature18590 · Ding J et al. · *Nature* 2016 · in-vitro (crystal structure) · model: full-length GSDMD structure; defined autoinhibition mechanism and pore-forming surface; cited >2600 times

[^hu2020]: doi:10.1038/s41590-020-0669-6 · Hu JJ et al. · *Nature Immunology* 2020 · in-vitro + in-vivo (mouse) · model: BMDM pyroptosis assay + LPS-sepsis mouse model; disulfiram blocks Cys-191 of GSDMD-N; cited >1000 times

[^mejias2018]: doi:10.1186/s12950-018-0198-3 · Mejias NH et al. · *Journal of Inflammation* 2018 · in-vivo (mouse) + observational (human serum) · mouse arm: n=5/group (BALB/c, 3 vs. 18 months); human arm: n=17–40/group (males 20–45 y/o vs. >45 y/o) · GSDMD elevation documented in **mouse brain tissue** (cortex + hippocampus); ASC and IL-18 (not GSDMD) elevated in human serum of older males; increased pyroptosome formation (ASC oligomerization) in aged mouse brain
