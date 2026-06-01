---
type: protein
aliases: [additional sex combs like 1, KIAA0978, ASXL1]
uniprot: Q8IXJ9
ncbi-gene: 171023
hgnc: 18318
ensembl: ENSG00000171456
genage-id: null
pathways: []
hallmarks: ["[[epigenetic-alterations]]", "[[stem-cell-exhaustion]]"]
sens-categories: []
complex-subunits: [Q9NRI5]
druggability-tier: null
gtex-aging-correlation: null
mr-causal-evidence: not-applicable-somatic
caused-by: []
causes: ["[[epigenetic-alterations]]", "[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Genovese 2014 and Jaiswal 2014 (NEJM) verified end-to-end against local PDFs; Abdel-Wahab 2013 (JEM) verified end-to-end against local PDF; Fujino 2020 (Exp Hematol) not_oa — abstract and Crossref metadata only; Hoischen 2011 (Nat Genet) not_oa — title/authorship confirmed via Crossref, cohort n unverifiable from full text; Gumuser 2023 (JACC) download failed — verified via PMC abstract (PMC10249057); canonical-database identity fields (UniProt Q8IXJ9, NCBI Gene 171023) not independently re-verified against databases"
---

# ASXL1 (additional sex combs like 1)

ASXL1 is a ~165 kDa nuclear chromatin regulator and non-catalytic scaffold of the polycomb repressive deubiquitinase (PR-DUB) complex. It is the **third most commonly mutated gene in clonal hematopoiesis of indeterminate potential (CHIP)** after [[dnmt3a]] and [[tet2]], and is frequently truncated in myeloid malignancies. Somatic ASXL1 mutations accumulate in aging hematopoietic stem cells and are associated with systemic inflammation, cardiovascular risk, and impaired hematopoiesis.

## Identity

- **UniProt:** Q8IXJ9 (ASXL1_HUMAN) — manually reviewed (Swiss-Prot)
- **NCBI Gene:** 171023
- **HGNC symbol:** ASXL1
- **Ensembl:** ENSG00000171456
- **Protein length:** 1,541 amino acids (canonical isoform)
- **Molecular weight:** ~165 kDa
- **Subcellular location:** Nucleus

## Key functional domains

- **HTH HARE-type domain** (residues 11–86) — chromatin reader module; binds modified histone tails
- **DEUBAD domain** (residues 255–364) — required for BAP1 activation within the PR-DUB complex; mutations in this region abolish deubiquitinase stimulation
- **PHD-type zinc finger** (residues 1503–1540, C-terminal) — likely histone-binding; most CHIP frameshift mutations produce truncations that eliminate this domain
- **LXXLL motif** — mediates interaction with nuclear receptors RARA and RXRA via NCOA1

## Function

ASXL1 serves as the non-catalytic scaffold of the **PR-DUB complex**, whose catalytic core is the [[bap1]] deubiquitinase (BAP1/BRCA1-associated protein 1) [^uniprot-q8ixj9]. The complex mediates deubiquitination of histone H2A at lysine 119 (H2AK119ub1), a mark placed by PRC1. By opposing H2AK119 ubiquitination, PR-DUB activity counterbalances Polycomb silencing at developmental and lineage-commitment gene loci.

Additional functions:
- Indirectly regulates H3K27me3 levels — loss of ASXL1 leads to global H3K27me3 reduction, dysregulating Hox gene expression and other developmental loci [^abdel-wahab2013]
- Coactivates retinoic acid receptors RARA/RXRA via NCOA1
- Interacts with FOXK1/K2, MBD5/MBD6, KDM1B, and HCFC1 within extended PR-DUB complex assemblies

## CHIP biology

ASXL1 is among the most common drivers of CHIP, identified in the landmark 2014 NEJM studies that established the CHIP concept in large human cohorts [^genovese2014][^jaiswal2014]. Rank ordering varies by cohort and detection method: in Jaiswal 2014 (n=17,182), ASXL1 is third after DNMT3A and TET2; in Genovese 2014 (n=12,380), ASXL1 (35 mutations) appeared second — ahead of TET2 (31), likely due to TET2 under-detection from exon-capture gaps noted by the authors. Across the literature, ASXL1 is consistently cited as the third most common CHIP driver. CHIP prevalence increases steeply with age; ASXL1-mutant clones are detected in ~0.3–1% of individuals over 60 (estimates vary by variant-allele-fraction threshold).

### Mutation pattern — paradoxical gain-of-function truncation

Nearly all ASXL1 CHIP mutations are **frameshift or nonsense variants in exon 12**, producing C-terminal truncations that delete the PHD zinc finger [^fujino2020]. Despite superficial resemblance to loss-of-function mutations, these truncations appear to **gain function** — the truncated protein retains the DEUBAD domain and scaffold capacity but loses normal regulation, causing paradoxical hyperactivation or misdirection of the PR-DUB complex. This distinguishes ASXL1 from classic tumor suppressors and complicates therapeutic targeting. #gap/no-mechanism — the precise molecular gain-of-function mechanism of C-terminal truncating ASXL1 mutations remains incompletely defined.

### Inflammatory phenotype

ASXL1-CHIP is associated with elevated circulating CRP and IL-6, indicating a distinct inflammatory signature [^fujino2020]. This contrasts with [[dnmt3a]]- and [[tet2]]-CHIP, where the IL-6/IL-1beta-driven NLRP3 inflammasome mechanism is better characterized. Whether the ASXL1-CHIP inflammatory signal operates through the same myeloid-lineage-expansion pathway or via distinct epigenetic dysregulation of inflammatory gene programs is not fully resolved. #gap/no-mechanism

### Clonal expansion kinetics

ASXL1-mutant clones tend to expand more aggressively than DNMT3A or TET2 clones, and are enriched at higher variant-allele fractions in population surveys. This correlates with the higher rate of ASXL1 mutations in overt myeloid malignancies relative to its CHIP prevalence [^fujino2020].

## Role in hematopoietic stem cells

Hematopoietic-specific conditional deletion of *Asxl1* in mice (Asxl1-fl/fl; Vav-Cre or Mx1-Cre) produces:

- Myelodysplastic syndrome (MDS) features: multilineage cytopenias, dysplastic morphology
- Expanded Lin-Sca1+cKit+ (LSK) stem/progenitor compartment with impaired functional self-renewal (competitive transplantation disadvantage; self-renewal defect worsened in serial transplantation)
- Dysregulated Hox gene expression (HoxA7, HoxA9 up-regulated); age-dependent increase in p16INK4a in LT-HSCs consistent with global H3K27me3 reduction
- Combined Asxl1/Tet2 double-KO (Mx1-Cre system) **rescues the self-renewal defect** caused by Asxl1 loss alone — Tet2 co-deletion restores serial-replating capacity and confers a competitive advantage in transplantation, while still producing an accelerated MDS-like myeloid disorder (not AML) [^abdel-wahab2013]

This mouse phenotype models the human ASXL1-mutant hematopoietic dysfunction, though full germline *Asxl1* deletion causes severe developmental defects inconsistent with normal viability (anophthalmia, cleft palate), indicating the gene's role extends beyond hematopoiesis.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | PR-DUB complex is conserved; BAP1 is H. sapiens ortholog |
| Phenotype conserved in humans? | yes | ASXL1-mutant MDS/AML and CHIP occur in humans |
| Replicated in humans? | yes | CHIP studies in humans; mouse KO models mechanistic detail |

## Disease associations

| Disease | Context |
|---|---|
| Myelodysplastic syndrome (MDS) | One of most frequently mutated genes; poor prognosis |
| Myeloproliferative neoplasms (MPN) | Present in ~5–10% of cases |
| Chronic myelomonocytic leukemia (CMML) | Mutated in ~40–50% of cases; among highest frequencies |
| Acute myeloid leukemia (AML) | Secondary AML from antecedent CHIP/MDS |
| Bohring-Opitz syndrome | Germline de novo nonsense mutations; severe developmental syndrome [^hoischen2011] |
| CHIP | Somatic; age-related clonal expansion with CVD/mortality risk |

## Aging relevance

ASXL1-CHIP contributes to the aging phenotype through at least two mechanisms:

1. **Systemic inflammation** — mutant myeloid progeny secrete elevated inflammatory cytokines, contributing to [[inflammaging]] and [[chronic-inflammation]]
2. **Impaired hematopoiesis** — clonal dominance of functionally inferior ASXL1-mutant HSCs progressively displaces wild-type HSCs, contributing to [[stem-cell-exhaustion]] and the myeloid-skewing characteristic of aging hematopoiesis

The same all-cause mortality and cardiovascular risk signal documented for DNMT3A- and TET2-CHIP [^jaiswal2014] applies broadly to ASXL1-CHIP [^gumuser2023], though ASXL1-specific hazard ratios and cardiovascular mechanisms are less well-characterized than for TET2. #gap/needs-replication

## Therapeutic landscape

No direct ASXL1-targeting therapy exists. The gain-of-function nature of truncating mutations makes standard LOF-correction strategies (e.g., reconstituting expression) inappropriate. Current and investigational approaches:

- **CHIP-stratified cardiovascular trials** — CANTOS (canakinumab anti-IL-1beta) showed benefit in TET2-CHIP specifically; ASXL1-CHIP subgroup analyses have not demonstrated a statistically independent signal, likely due to smaller subgroup sizes #gap/needs-replication
- **BAP1 inhibition** — theoretical target (ASXL1 truncations hyperactivate BAP1); no clinical compound advanced
- **HSC competition strategies** — gene-corrected HSC transplantation to outcompete mutant clones (preclinical concept only)

#gap/needs-canonical-id — `druggability-tier` not populated; no Open Targets Platform entry confirmed for ASXL1 as a direct drug target. Recommend lookup at `api.platform.opentargets.org` on next update cycle.

## Pathway and process membership

ASXL1 is not a signaling pathway component in the conventional sense; it functions as a chromatin-level epigenetic regulator influencing transcription at developmental and hematopoietic loci. Its loss/truncation dysregulates:

- H2AK119 deubiquitination (PR-DUB)
- H3K27me3 distribution (indirect; opposes PRC2 activity)
- Hox gene expression programs
- Inflammatory gene programs in myeloid cells

## Key interactors

- [[bap1]] — catalytic partner in PR-DUB; ASXL1 DEUBAD domain activates BAP1 deubiquitinase activity; no dedicated wiki page yet
- [[dnmt3a]] — sibling CHIP driver; operates via independent DNA methylation mechanism
- [[tet2]] — sibling CHIP driver; operates via 5mC hydroxymethylation; synergizes with ASXL1 loss in mouse models
- FOXK1/K2, MBD5, MBD6, KDM1B, HCFC1 — extended PR-DUB complex members (no wiki pages)

## Cross-references

- [[clonal-hematopoiesis]] — master page for CHIP biology
- [[hematopoietic-stem-cells]] — HSC biology and aging context
- [[dnmt3a]] — most common CHIP driver
- [[tet2]] — second most common CHIP driver
- [[epigenetic-alterations]] — hallmark context
- [[inflammaging]] — downstream phenotype of CHIP-driven inflammation

## Limitations and gaps

- `gtex-aging-correlation:` not populated — ASXL1 is expressed across tissues but GTEx aging correlation for this gene has not been systematically extracted for this wiki. #gap/unsourced
- `mr-causal-evidence: not-applicable-somatic` — CHIP is driven by somatic (acquired) mutations, not inherited germline variants; germline MR studies are structurally inapplicable for CHIP-driver genes.
- ASXL1-CHIP differential cardiovascular mechanism (vs TET2) is poorly characterized. #gap/no-mechanism
- The gain-of-function mechanism of C-terminal truncations remains unresolved at the structural level. #gap/no-mechanism
- No clinical trials specifically targeting ASXL1-CHIP identified (as distinct from general CHIP or TET2-CHIP trials). #gap/needs-replication

## Footnotes

[^uniprot-q8ixj9]: UniProt Q8IXJ9 (ASXL1_HUMAN), accessed 2026-05-06 · manually curated Swiss-Prot entry · functional annotation with cited evidence

[^genovese2014]: doi:10.1056/NEJMoa1409405 · Genovese et al. · *NEJM* 2014 · n=12,380 exome sequences · observational · model: human population cohort (Swedish national registers) · identified clonal hematopoiesis mutations including ASXL1 in 10% of individuals over 65; associated with HR 12.9 (95% CI 5.8–28.7) for subsequent hematologic cancer and HR 1.4 (95% CI 1.0–1.8) for death; ASXL1 had 35 mutations (second most common driver in this cohort after DNMT3A, ahead of TET2's 31); local PDF available

[^jaiswal2014]: doi:10.1056/NEJMoa1408617 · Jaiswal et al. · *NEJM* 2014 · n=17,182 whole-exome sequences · observational · model: 22 population-based cohorts across 3 consortia (median age 58 yr) · CHIP associated with HR 1.4 (95% CI 1.1–1.8) for all-cause mortality; HR 11.1 (95% CI 3.9–32.6) for hematologic cancer; HR 2.0 (95% CI 1.2–3.5) for incident coronary heart disease; HR 2.6 (95% CI 1.3–4.8) for ischemic stroke; ASXL1 had 62 variants — third most common driver in this cohort (DNMT3A=403, TET2=72, ASXL1=62); local PDF available

[^abdel-wahab2013]: doi:10.1084/jem.20131141 · Abdel-Wahab et al. · *J Exp Med* 2013 · in-vivo (mouse, conditional Asxl1 KO; Vav-Cre primary phenotype; Mx1-Cre for double-KO survival studies) · demonstrated MDS-like phenotype with expanded LSK compartment, impaired self-renewal, dysregulated Hox gene expression, and age-dependent cytopenias; concurrent Tet2 deletion (double-KO) rescues the self-renewal defect but produces an accelerated myelodysplastic disorder — Tet2 co-deletion does not accelerate to AML; local PDF available

[^hoischen2011]: doi:10.1038/ng.868 · Hoischen et al. · *Nat Genet* 2011 · n=8 trios + replication cohort · observational (de novo mutation mapping) · model: human genetic syndrome · identified de novo nonsense mutations in ASXL1 as the cause of Bohring-Opitz syndrome

[^fujino2020]: doi:10.1016/j.exphem.2020.01.002 · Fujino et al. · *Exp Hematol* 2020 · review · examines ASXL1 CHIP mutation spectrum, clonal expansion, and the gain-of-function paradox of C-terminal truncating mutations

[^gumuser2023]: doi:10.1016/j.jacc.2023.03.401 · Gumuser et al. (incl. Natarajan) · *JACC* 2023 · n=13,129 individuals with established atherosclerotic CVD (5.1% had CHIP) · observational (cohort) · CHIP associated with adjusted HR 1.23 for composite ASCVD events and all-cause mortality over median 10.8 yr follow-up; TET2 and spliceosome mutations showed strongest signals; large ASXL1 CHIP (VAF ≥10%) associated with adjusted HR ~1.44 for primary composite outcome; PDF download failed — verified via PMC abstract PMC10249057 #gap/no-fulltext-access
