---
type: study
doi: 10.3389/fgene.2024.1231521
pmid: 38440190
pmc: PMC10910428
title: "Using genetics to investigate the association between lanosterol and cataract"
authors: [Hashimi M, Amin HA, Zagkos L, Day AC, Drenos F]
year: 2024
journal: Frontiers in Genetics
study-design: observational
publication-type: research-article
volume: 15
issue: null
pages: 1231521
organism: homo-sapiens
n-subjects: 399020  # primary UK Biobank GWAS; the risk-score and replication samples differed
intervention: []
hallmarks-tested: ["[[loss-of-proteostasis]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [no-robust-lss-region-association, no-phytosterol-lanosterol-overlap, null-lanosterol-genetic-risk-score]
local-pdf: null
literature-checked-through: 2026-08-18
verified: true
verified-date: 2026-08-18
verified-by: claude
verified-scope: "Full PMC article and main-text Tables 1-2 checked; current PubMed status and post-publication PubMed and Europe PMC literature checked through 2026-08-18. This was a regional GWAS lookup, cross-trait variant lookup, and unweighted genetic-score analysis, not formal Mendelian randomization. The article's internal denominator and LSS-significance inconsistencies are identified in the body; supplementary variant-level tables were not needed for the claims retained here."
---

# Hashimi et al. 2024 — Lanosterol-related genetic associations and cataract risk

## TL;DR

Using a UK Biobank cataract genome-wide association study (GWAS) and published variants associated with blood phytosterol-to-lanosterol ratios, this study found no replicated *LSS*-region signal, no significant cross-trait variant overlap, and a null unweighted nine-variant score.[^hashimi2024] This was not a formal Mendelian-randomization analysis: it did not estimate a causal effect per unit lanosterol or apply instrumental-variable and pleiotropy-sensitivity methods. The results provide no support for a simple lifelong systemic-lanosterol model but do not test lens-local concentration, topical delivery, or reversal of an existing cataract. #gap/contradictory-evidence

## Design

The authors used three related association analyses:

1. **Regional GWAS lookup:** 203 variants in an expanded *LSS* gene region were tested in a UK Biobank cataract GWAS; pruning identified 13 approximately independent variants for the regional multiple-testing threshold.
2. **Cross-trait lookup:** genome-wide-significant variants from eight blood phytosterol-to-lanosterol ratio traits were looked up in the cataract GWAS. The traits represented total and free brassicasterol, campesterol, sitosterol, and stigmasterol relative to lanosterol.
3. **Genetic score:** nine approximately independent variants across those eight ratio traits were coded with equal weight as alleles representing lower lanosterol within the ratios, then summed in an individual-level UK Biobank logistic regression.[^hashimi2024]

After quality control, the primary UK Biobank sample contained 399,020 participants: 45,449 cataract cases and 353,571 controls. Table 1 and the Results section support 353,571 controls; one Methods sentence says 353,371, an internal typographic inconsistency. Cases required hospital diagnostic or cataract-operation codes; self-report-only cases were removed. The definition combined senile, other, disease-associated, and congenital cataract codes and did not distinguish cortical, nuclear, or posterior-subcapsular disease.[^hashimi2024]

The relatedness-filtered genetic-score analysis was smaller: 327,575 participants, comprising 36,952 cases and 290,623 controls. This score regression, rather than an instrumental-variable estimator, is why the analysis should not be labeled formal Mendelian randomization.[^hashimi2024]

For replication, FinnGen R9 provided separate senile-cataract (59,522 cases, 312,864 controls) and other-cataract (17,699 cases, 312,864 controls) results. The lead UK Biobank variant was absent, so three perfect-linkage proxies were tested. The authors also repeated the regional lookup in Choquet et al.'s 585,243-person meta-analysis (67,844 cases, 517,399 controls); because that meta-analysis included UK Biobank together with GERA, it was not wholly independent of the discovery cohort.[^hashimi2024]

## Results

One *LSS*-region variant, rs191009864, met the authors' regional threshold of *P*<0.05/13 in the detailed Results (log-odds beta −0.104, SE 0.035, *P*=0.003), although it did not meet a conventional genome-wide threshold. The abstract instead says no regional variant crossed 0.05/13; the page follows the variant-level Results and Table 2 while retaining the failed-replication context. The lead variant was unavailable in FinnGen, and none of three reported perfect-linkage proxies replicated there; no significant regional variant appeared in the Choquet analysis.[^hashimi2024]

Across the eight phytosterol-to-lanosterol traits, 23 genome-wide-significant variant records collapsed to nine independent variants. None was associated with cataract at the authors' corrected threshold of *P*<0.05/9. The unweighted nine-variant score was also null: OR 1.002 per additional score allele, SE of ln(OR) 0.003, *P*=0.568.[^hashimi2024]

## Interpretation and limitations

The source GWAS measured blood phytosterol-to-lanosterol ratios, not absolute lanosterol and not lens lanosterol. The variants can also influence biology through pathways other than the intended ratio; the study did not perform colocalization or formal Mendelian-randomization sensitivity analyses to address that ambiguity. The lens is a locally regulated compartment behind a selectively permeable capsule, so blood sterol relationships need not reproduce lens exposure.[^hashimi2024]

The score represents lifelong, small differences in systemic ratio traits and a broad cataract-risk endpoint. It does not emulate a high-concentration pharmacological exposure, a lanosterol derivative, delivery into the lens, or treatment of established opacity. Conversely, the null score should not be described as evidence that lens-local lanosterol has no biological role. It is evidence that these available variants and analyses did not validate a broad systemic association.

## Cited by wiki pages

[Auto-populated by Obsidian backlinks]

[^hashimi2024]: Hashimi M, Amin HA, Zagkos L, Day AC, Drenos F · doi:10.3389/fgene.2024.1231521 · PMID:38440190 · PMCID:PMC10910428 · primary UK Biobank GWAS n=399,020; unweighted-score regression n=327,575 · regional and cross-trait genetic association plus risk-score analysis, not formal Mendelian randomization · *Frontiers in Genetics* 2024;15:1231521.
