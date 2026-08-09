---
type: protein
aliases: [IL11RA, IL-11Rα, IL-11 receptor alpha, interleukin-11 receptor subunit alpha, Il11ra1]
uniprot: Q14626
ncbi-gene: 3590
hgnc: 5967
ensembl: ENSG00000137070
pathways: ["[[il-11-signaling]]", "[[jak-stat-pathway]]", "[[ras-mapk]]", "[[pi3k-akt-pathway]]", "[[nf-kb]]"]
hallmarks: ["[[altered-intercellular-communication]]", "[[chronic-inflammation]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
mouse-ortholog: Il11ra1
druggability-tier: 2
gtex-aging-correlation: "Not established. #gap/needs-gtex-aging-correlation"
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[il-11-signaling]]"]
literature-checked-through: 2026-08-09
verified: true
verified-date: 2026-08-09
verified-by: claude
verified-scope: "Canonical UniProt, NCBI Gene, HGNC, Ensembl and MGI identity records; classic receptor-complex topology; human biallelic-loss evidence in Nieminen 2011; Ng 2021, Widjaja 2024 and Wu 2026 phenotypes; aging-context druggability and current LASN01 registry status; and PubMed/Europe PMC recency and publication-integrity searches were checked through 2026-08-09. Soluble-receptor signaling, GTEx age correlation and aging-directed Mendelian randomization remain explicitly unresolved."
---

# IL-11 receptor alpha

IL11RA is the ligand-binding alpha subunit of the [[il-11]] receptor. Ligand-bound IL11RA recruits [[gp130|IL6ST/gp130]] to form a signaling complex that activates canonical JAK/STAT and non-canonical ERK-centered branches. The human gene is **IL11RA**; **Il11ra1** is the conventional mouse symbol used in the requested animal studies.

## Identity

- **Canonical human protein:** UniProt Q14626.
- **Gene identifiers:** NCBI Gene 3590; HGNC 5967; Ensembl ENSG00000137070. The mouse ortholog is *Il11ra1* (MGI:107426) [^identity].
- **Human loss of function:** homozygous damaging *IL11RA* variants were identified in five families with craniosynostosis, maxillary hypoplasia, delayed tooth eruption and supernumerary teeth; the tested p.Arg296Trp receptor failed to support IL-11-induced STAT3 phosphorylation in transfected cells [^nieminen2011]. In mice, craniosynostosis-like and trabecular-bone abnormalities were reported with receptor loss but not in the compared *Il11* ligand-null line [^ng2021].

## Aging relevance

Old *Il11ra1* knockout mice showed broad protection from age-associated metabolic, fibrotic and molecular changes, while aged *Il11ra1* knockout ovaries were less stiff and fibrotic, had more secondary and fewer atretic follicles, and showed only a borderline increase in total healthy follicles (P=0.0503) versus wild-type controls [^widjaja2024][^wu2026]. These germline models establish pathway involvement but are developmentally confounded.

In the ovarian study, primary human ovarian fibroblasts expressed IL11RA, and local AAV-mediated shRNA against mouse *Il11ra1* reduced ovarian fibrosis and improved selected follicle and litter outcomes. The article did not report the AAV serotype, construct/promoter, shRNA sequence, genome dose/titer, injection volume, vendor, control-vector identity or biodistribution. No IL11RA-directed intervention has been tested for ovarian aging in women [^wu2026].

## Pharmacology

LASN01 is a fully human anti-IL11RA antibody that completed a phase 1/2a study in healthy volunteers and people with pulmonary fibrosis or thyroid eye disease (n=75) and a phase 2 thyroid-eye-disease study (n=41). These non-aging programs establish human exposure and a preliminary safety dataset, not geroprotective efficacy, antifibrotic efficacy across organs or reproductive safety [^clinical]. Open Targets also maps approved oprelvekin to IL11RA as an agonistic cytokine ligand; that is not evidence for clinical receptor blockade in aging. Aging-context druggability is therefore tier 2 [^druggability]. See [[anti-il-11-antibodies]].

## Key uncertainties

- Whether IL11RA expression identifies the cell populations necessary for systemic aging effects remains unresolved.
- Physiological relevance of IL-11 soluble-receptor trans-signaling and trans-presentation remains unresolved; the verified aging studies primarily test classic IL11RA-dependent signaling.
- Constitutive receptor deletion cannot establish the safety of sustained adult antibody blockade. #gap/long-term-unknown #gap/needs-human-replication
- Human GTEx age correlations and aging-directed Mendelian-randomization evidence remain unestablished. #gap/needs-gtex-aging-correlation

## Footnotes

[^widjaja2024]: [[studies/widjaja-2024-il11-healthspan-lifespan]] · doi:10.1038/s41586-024-07701-9 · mouse genetic and anti-IL-11 experiments
[^wu2026]: [[studies/wu-2026-il11-ovarian-stiffness]] · doi:10.1038/s43587-026-01159-2 · human ovarian observations, cultured ovarian fibroblasts and rodent genetic/RNA interventions
[^ng2021]: [[studies/ng-2021-il11-il11ra1-loss-of-function]] · doi:10.1038/s41598-021-93623-9 · Ng B et al. · *Scientific Reports* 2021;11:14088 · ligand-versus-receptor loss-of-function, reproductive and craniofacial phenotypes
[^nieminen2011]: doi:10.1016/j.ajhg.2011.05.024 · Nieminen P et al. · *American Journal of Human Genetics* 2011;89:67–81 · five families plus receptor-transfection and mouse experiments · primary human genotype–phenotype evidence
[^identity]: UniProt Q14626; NCBI Gene 3590; HGNC:5967; Ensembl ENSG00000137070; MGI:107426 · canonical database records accessed 2026-08-09
[^clinical]: ClinicalTrials.gov NCT05331300 (phase 1/2a, n=75, completed 2024) and NCT06226545 (phase 2, n=41, completed 2025; results posted 2026) · registry records accessed 2026-08-09
[^druggability]: Open Targets Platform IL11RA record ENSG00000137070 · accessed 2026-08-09 · raw other-clinical precedence reflects oprelvekin; wiki tier is aging-context specific
