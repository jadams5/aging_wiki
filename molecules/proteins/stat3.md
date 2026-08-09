---
type: protein
aliases: [STAT3, signal transducer and activator of transcription 3, APRF, acute-phase response factor]
uniprot: P40763
ncbi-gene: 6774
hgnc: 11364
ensembl: ENSG00000168610
pathways: ["[[jak-stat-pathway]]", "[[il-11-signaling]]"]
hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]", "[[cellular-senescence]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
mouse-ortholog: Stat3
druggability-tier: 2
gtex-aging-correlation: "Not established as a causal aging signal; total STAT3 expression does not measure ligand-specific activation or Tyr705 phosphorylation. #gap/needs-gtex-aging-correlation"
mr-causal-evidence: not-tested
caused-by: ["[[jak1]]", "[[jak2]]", "[[tyk2]]", "[[gp130]]"]
causes: []
literature-checked-through: 2026-08-09
verified: true
verified-date: 2026-08-09
verified-by: claude
verified-scope: "Canonical UniProt, NCBI Gene, HGNC, Ensembl and MGI identity records; IL-11 canonical JAK-STAT versus non-canonical ERK boundaries; Tan 2024, Widjaja 2024 and Wu 2026 source claims; aging-context Open Targets druggability; and PubMed/Europe PMC recency and publication-integrity searches were checked through 2026-08-09. GTEx age correlation and aging-directed Mendelian-randomization evidence remain explicitly unestablished."
---

# STAT3

STAT3 is a cytokine- and growth-factor-responsive transcription factor. Receptor-associated kinases phosphorylate STAT3 at Tyr705, promoting dimerization, nuclear entry and context-specific transcription. The canonical human identifiers are UniProt P40763, NCBI Gene 6774, HGNC 11364 and Ensembl ENSG00000168610; the mouse ortholog is *Stat3* (MGI:103038) [^identity].

## IL-11 context

The [[il-11]]–[[il-11-receptor-alpha-1|IL11RA]]–[[gp130]] complex activates canonical STAT3/STAT1 signaling through gp130-associated JAK1, JAK2 and TYK2 [^pathwaydb]. The fibrosis and aging papers also emphasize a non-canonical ERK-centered branch. IL-11 activated both STAT3 and ERK in primary human lung fibroblasts, and both branches changed with IL-11 perturbation in aging mouse tissues, but the studies did not establish that STAT3 alone mediated healthspan, lifespan or ovarian-stiffness phenotypes [^tan2024][^widjaja2024][^wu2026].

This distinction matters because gp130-family cytokines converge on STAT3. Phospho-STAT3 is evidence of pathway activation, not a ligand-specific biomarker of IL-11, and broad STAT3 inhibition would affect immune, repair and metabolic signaling well beyond the IL-11 axis.

## Aging interpretation and druggability

Open Targets records high-quality small-molecule ligands and a phase 2 antisense clinical candidate (danvatirsen) for STAT3, but the clinical program is not an aging intervention. Aging-context druggability is therefore tier 2: chemical and oligonucleotide probes exist, but no clinical drug has demonstrated an aging indication through selective STAT3 modulation [^druggability]. Ligand- or receptor-selective approaches such as [[anti-il-11-antibodies]] provide a narrower way to test one upstream cytokine axis.

## Gaps

- Cell-type-specific STAT3 necessity has not been separated from ERK and other branches in the IL-11 aging studies.
- Total expression, Tyr705 phosphorylation, Ser727 phosphorylation and mitochondrial/non-transcriptional STAT3 functions should not be treated as interchangeable readouts.
- Chronic systemic inhibition in older adults would require immune, infection, wound-healing and metabolic safety testing. #gap/no-mechanism #gap/long-term-unknown #gap/needs-human-replication
- Human GTEx age correlations and aging-directed Mendelian-randomization evidence remain unestablished. #gap/needs-gtex-aging-correlation

## Footnotes

[^widjaja2024]: [[studies/widjaja-2024-il11-healthspan-lifespan]] · doi:10.1038/s41586-024-07701-9 · Widjaja AA et al. · *Nature* 2024;632:157–165
[^wu2026]: [[studies/wu-2026-il11-ovarian-stiffness]] · doi:10.1038/s43587-026-01159-2 · Wu M et al. · *Nature Aging* 2026;6:1395–1416
[^tan2024]: doi:10.3389/fimmu.2024.1293883 · Tan Y et al. · *Frontiers in Immunology* 2024;15:1293883 · primary human lung fibroblast and epithelial-cell signaling experiments · IL-11 activated both STAT3 and ERK
[^identity]: UniProt P40763; NCBI Gene 6774; HGNC:11364; Ensembl ENSG00000168610; MGI:103038 · canonical database records accessed 2026-08-09
[^pathwaydb]: Reactome R-HSA-449976 and R-HSA-6783589; WikiPathways WP2332 · human curated pathway records accessed 2026-08-09
[^druggability]: Open Targets Platform STAT3 record ENSG00000168610 · accessed 2026-08-09 · high-quality-ligand signal and danvatirsen phase 2 clinical-candidate row
