---
type: protein
aliases: [TREM2, triggering receptor expressed on myeloid cells 2, TREM-2]
uniprot: Q9NZC2
ncbi-gene: 54209
hgnc: 17761
mouse-ortholog: Trem2
ensembl: ENSG00000095970
druggability-tier: 2
caused-by: []
causes: []
key-domains: [Ig-V-type extracellular, transmembrane, short cytoplasmic tail]
pathways: ["[[dap12-signaling]]", "[[pi3k-akt-pathway]]", "[[chronic-inflammation]]"]
hallmarks: ["[[chronic-inflammation]]", "[[neurodegeneration]]"]
known-interactors: ["[[dap12]]", "[[syk]]", "[[apoe]]", "[[clathrin]]"]
genage-id: null
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Guerreiro 2013 (local PDF) and Hammond 2019 (local PDF) verified against primary sources; Jonsson 2013 (download failed, green OA URL non-functional), Paloneva 2002 (pending), Wang 2015 (pending), Keren-Shaul 2017 (failed) not independently verified — claims from these sources retained with existing gap markers; UniProt Q9NZC2 identity fields (230 aa, domains, HGNC 17761) not independently re-queried against live database"
---


# TREM2 (Triggering Receptor Expressed on Myeloid cells 2)

A type I transmembrane immunoreceptor expressed predominantly on [[microglia]] in the CNS, and required for the transition of homeostatic microglia into the disease-associated microglial (DAM) state. Carries the strongest single-gene risk for late-onset [[alzheimers-disease]] outside of *APOE4*, via the R47H coding variant (~3–5× increased risk). Loss-of-function mutations cause Nasu-Hakola disease.

## Identity

- **UniProt:** Q9NZC2 (TREM2_HUMAN)
- **NCBI Gene:** 54209
- **HGNC symbol:** TREM2
- **Mouse ortholog:** Trem2 (one-to-one; high sequence conservation; same DAM biology in mouse models)
- **Length:** 230 amino acids (canonical isoform, including 19-aa signal peptide)
- **Superfamily:** Immunoglobulin superfamily, NKC-related receptor group

## Structure and domain organization

TREM2 is a single-pass type I transmembrane protein:

1. **Signal peptide** (aa 1–19) — cleaved co-translationally
2. **Extracellular Ig V-type domain** (aa 20–174) — single immunoglobulin-like domain; mediates ligand binding; site of disease-relevant variants (R47H, R62H)
3. **Transmembrane domain** (aa 175–195) — contains a positively charged residue (Lys) that interacts with DAP12's negatively charged transmembrane residue (Asp) for adapter docking
4. **Short cytoplasmic tail** (aa 196–230) — minimal; no intrinsic signaling motif; all downstream signaling depends on DAP12 heterodimerization

TREM2 is proteolytically shed at the juxtamembrane region by ADAM10/ADAM17, generating soluble TREM2 (sTREM2); sTREM2 levels in CSF are used as a pharmacodynamic biomarker in clinical trials. #gap/needs-replication — the clinical utility of CSF sTREM2 as a biomarker of microglial engagement is under active evaluation.

## Tissue distribution

- **Microglia** — primary expression site in the CNS; homeostatic microglia express low TREM2; DAM stage 2 microglia express high TREM2
- **Osteoclasts** — expressed; Nasu-Hakola bone cysts reflect TREM2/DAP12 loss in osteoclast function [^paloneva2002]
- **Kupffer cells** (hepatic macrophages) — detected at lower levels
- **Peripheral monocyte-derived macrophages** — low; TREM2 is substantially more CNS-enriched than peripheral myeloid populations

## Ligand recognition and signaling

TREM2 functions as a **broad pattern-recognition receptor** for multiple ligand classes:

- **Anionic lipids** — phosphatidylserine (exposed on apoptotic cell outer leaflet), sulfatides; lipid sensing is required for microglial response in amyloid mouse models [^wang2015]
- **Oligomeric Aβ** — direct binding; promotes microglial clustering around amyloid plaques
- **Lipoproteins** — APOE (all isoforms; APOE2 > APOE3 > APOE4 binding affinity debated) and CLU/clusterin; mediates lipid uptake from the extracellular environment
- **DAMPs** — nucleic acids and other released cellular contents

**Signaling axis** (TREM2 → DAP12 → downstream):

TREM2 has no intrinsic kinase activity. It signals obligatorily via the co-receptor [[dap12]] (TYROBP), a transmembrane adapter bearing an ITAM (immunoreceptor tyrosine-based activation motif). Ligand binding → TREM2 clustering → Src-family kinase phosphorylates DAP12 ITAM tyrosines → [[syk]] kinase recruitment → downstream effectors:

- **PI3K → AKT** — microglial survival, proliferation
- **ERK** — pro-phagocytic gene induction
- **β-catenin** — Wnt-like survival signaling
- **mTOR (via PI3K)** — metabolic reprogramming of DAM lipid metabolism; links to [[mtor]]
- **PLCγ2 → Ca²+ → NFAT** — cytokine gene expression; partial overlap with [[chronic-inflammation]]

Concurrently, TREM2-DAP12 signaling **suppresses** TLR-dependent pro-inflammatory cytokine production, positioning TREM2 as a context-dependent modulator of neuroinflammation rather than a simple activator.

## Role in disease-associated microglia (DAM)

The DAM transition is a stereotyped microglial state change first described by single-cell RNA sequencing in mouse AD models. It proceeds in two stages:

| Stage | TREM2-dependence | Key markers |
|---|---|---|
| Stage 1 (homeostatic → early DAM) | TREM2-independent | ↓Cx3cr1, ↓P2ry12, ↓Tmem119 |
| Stage 2 (early DAM → full DAM) | **TREM2-required** | ↑Trem2, ↑Lpl, ↑Cst7, ↑Apoe, ↑Spp1, ↑Axl |

Stage 2 DAM upregulate phagocytic and lipid-processing genes; genetically Trem2-deficient mice fail to generate stage 2 DAM and show impaired amyloid plaque compaction and microglial clustering [^keren-shaul2017].

In aging, Hammond et al. profiled 76,149 microglia from C57BL/6J mice (E14.5 through P540/18 months) by scRNA-seq and found that two inflammatory microglial states — a Ccl4-enriched cluster (OA2) and an interferon-responsive cluster (OA3) — expand in aged brains independent of amyloid pathology [^hammond2019]. Trem2 was identified as a broadly expressed canonical microglial marker (not enriched in the aged-specific clusters). The paper explicitly compares these aged clusters to Keren-Shaul DAM and finds partial transcriptional overlap (shared: Spp1, Lpl, Apoe) but distinct identities; the aged clusters should not be equated to DAM. #gap/needs-replication — functional significance of aged Ccl4+ and IFN-responsive clusters not yet established.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | DAM-like populations identified in human AD brain by scRNA-seq; TREM2 expression enriched in same clusters |
| Phenotype conserved in humans? | yes | Human AD genetics (R47H, R62H variants) establish TREM2 functional relevance in humans |
| Replicated in humans? | in-progress | Human DAM characterization ongoing; functional equivalence to mouse DAM not fully established |

## Alzheimer's disease genetics

TREM2 coding variants are the largest-effect rare-variant genetic risk factors for late-onset AD outside of *APOE4*:

**R47H (rs75932628):**
- Heterozygous missense (Arg47His in Ig-V domain); population frequency ~0.2–0.3% in European populations
- Discovery: Guerreiro et al. 2013 — combined OR=5.05 (95% CI 2.77–9.16; p=9.0×10⁻⁹) in the full genotyped series of 1,994 cases and 4,062 controls [^guerreiro2013]
- Independent replication: Jonsson et al. 2013 — OR=2.92 (95% CI 2.09–4.09; p=3.42×10⁻¹⁰) in Icelandic + US cohorts [^jonsson2013]
- Mechanism: R47H reduces binding affinity for anionic lipids and Aβ; impairs TREM2 surface trafficking in some cell models; reduces SYK signaling in response to ligand #gap/contradictory-evidence — exact mechanism of R47H loss-of-function is debated across cell systems

**R62H (rs143332484):**
- More common (~1.2% European); smaller effect (~1.3× AD risk)
- Resides in same Ig-V ligand-binding interface as R47H; partial function loss #gap/unsourced — primary citation for R62H OR needed here

**Homozygous LOF — Nasu-Hakola disease (NHD):**
- Biallelic TREM2 mutations (or DAP12/TYROBP mutations) cause NHD (also called polycystic lipomembranous osteodysplasia with sclerosing leukoencephalopathy — PLOSL) [^paloneva2002]
- Clinical triad: bone cysts (pathological fractures, osteolytic lesions), early-onset frontotemporal-like dementia (onset ~30s–40s), psychiatric symptoms
- Confirms that complete TREM2/DAP12 loss is catastrophic for both osteoclast and microglial function

**TREM2 functional consequence in AD:**
TREM2 hypofunction (as with R47H) reduces microglial capacity to: (1) compact fibrillar Aβ plaques, (2) form protective microglial barriers around plaques, and (3) metabolically support DAM lipid catabolism. The net result is greater diffuse amyloid spread and increased neuritic dystrophy around plaques.

## Therapeutic strategies

TREM2 is a validated target for microglia-directed AD therapy:

| Agent | Class | Mechanism | Stage |
|---|---|---|---|
| AL002c (Alector) | Agonist antibody | Binds TREM2 ectodomain; increases SYK phosphorylation, survival signaling | Phase 2 (INVOKE-2 trial) |
| ATV:TREM2 (Denali) | Agonist antibody (CNS-penetrant) | Engineered transferrin receptor transcytosis; TREM2 agonism | Phase 1/2 |

Both approaches aim to boost TREM2 signaling in hypofunctional (R47H heterozygous) or aging microglia. The INVOKE-2 readout will be the first large RCT test of microglial agonism in AD. #gap/long-term-unknown — no long-term safety data for chronic TREM2 agonism; theoretical risk of overactivated neuroinflammation.

## Aging-specific context

- Inflammatory microglial subpopulations (Ccl4+ OA2, IFN-responsive OA3) expand in aged C57BL/6J brains before overt disease; Trem2 itself was uniformly expressed across homeostatic and aged microglial clusters in this dataset, not selectively elevated in the aged-specific states [^hammond2019]
- TREM2 expression is downregulated by several pro-inflammatory stimuli; chronic neuroinflammation ([[chronic-inflammation]]) may paradoxically suppress the TREM2-DAM response needed for clearance
- TREM2 connects microglial lipid metabolism to the [[hallmarks-of-aging]] framework: impaired lipid clearance by aging microglia is increasingly recognized as a driver of neurodegeneration independent of amyloid burden

## Key interactors and pathway cross-references

- [[dap12]] (TYROBP) — obligate signaling adapter; ITAM-containing; co-expressed with TREM2; DAP12 mutations cause same NHD phenotype as TREM2 mutations [^paloneva2002]
- [[syk]] — proximal kinase; SYK inhibition blocks TREM2-dependent DAM transition
- [[apoe]] — primary microglial TREM2 ligand in lipid clearance context; APOE4 (AD risk allele) has altered TREM2-binding properties
- [[pi3k-akt-pathway]] — downstream survival and metabolic axis
- [[microglia]] — cell-type page; DAM populations and Hammond 2019 aging clusters detailed there
- [[alzheimers-disease]] — disease page; R47H OR data and Guerreiro/Jonsson genetics context detailed there
- [[neurodegeneration]] — broader neurodegeneration context
- [[chronic-inflammation]] — TREM2 modulates microglial neuroinflammation

## Limitations and gaps

- #gap/needs-human-replication — DAM biology and two-stage model established in mouse; human DAM equivalence established by single-cell sequencing cross-species but functional equivalence (phagocytic capacity, lipid metabolism) not yet matched
- #gap/contradictory-evidence — R47H mechanism: cell-surface expression reduction vs. ligand-binding affinity impairment vs. signaling deficit — not resolved across models
- #gap/dose-response-unclear — sTREM2 as CSF biomarker: optimal sampling window relative to AD stage not established; relationship to brain TREM2 activity indirect
- #gap/long-term-unknown — INVOKE-2 and Denali Phase 1/2 ongoing; efficacy and safety of sustained TREM2 agonism unknown
- #gap/unsourced — R62H precise OR estimate and primary citation needed; also, TREM2 ADAM10/ADAM17 sheddase mechanism citation needed

## Footnotes

[^guerreiro2013]: [[studies/guerreiro-2013-trem2-ad]] · n=8,147 total (1,092 cases + 1,107 controls discovery; plus 1,887 cases + 4,061 controls additional direct genotyping; GWAS meta-analysis also performed on imputed data from 3 cohorts) · observational (case-control exome/Sanger sequencing + direct genotyping) · OR=5.05 (95% CI 2.77–9.16), p=9.0×10⁻⁹ for R47H in full combined series · model: human late-onset AD · doi:10.1056/NEJMoa1211851 · archive: local PDF available

[^jonsson2013]: [[studies/jonsson-2013-trem2-ad]] · n=~5,000 Icelandic + ~6,000 US replication · observational (case-control) · OR=2.92 (95% CI 2.09–4.09), p=3.42×10⁻¹⁰ · model: human late-onset AD · doi:10.1056/NEJMoa1211103 · archive: download failed (OA green; recommend re-attempt)

[^paloneva2002]: [[studies/paloneva-2002-nasu-hakola]] · n=18 (Finnish families) · observational (genetic, disease mapping) · model: human Nasu-Hakola disease patients · doi:10.1086/342259 · archive: pending download

[^wang2015]: [[studies/wang-2015-trem2-lipid-sensing]] · n=not applicable (mouse in vivo + in vitro) · in-vivo + in-vitro · model: 5XFAD mouse amyloid model; TREM2-deficient vs WT comparison · doi:10.1016/j.cell.2015.01.049 · archive: pending download

[^keren-shaul2017]: [[studies/keren-shaul-2017-dam]] · n=not applicable (mouse scRNA-seq) · in-vivo (scRNA-seq) · model: 5XFAD + CK-p25 amyloid mice vs WT · doi:10.1016/j.cell.2017.05.018 · archive: download failed; OA bronze URL available

[^hammond2019]: [[studies/hammond-2019-microglia-aging]] · n=41 mice total (29 male, 12 female); 76,149 microglia sequenced · in-vivo (scRNA-seq + smFISH validation) · model: C57BL/6J mice ages E14.5 through P540 (18 months); plus LPC-induced demyelination injury model · doi:10.1016/j.immuni.2018.11.004 · archive: local PDF available
