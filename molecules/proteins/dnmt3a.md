---
type: protein
aliases: [DNA methyltransferase 3A, DNA cytosine-5 methyltransferase 3 alpha, DNMT3A]
uniprot: Q9Y6K1
ncbi-gene: 1788
hgnc: 2978
ensembl: ENSG00000119772
mouse-ortholog: Dnmt3a
key-domains: [PWWP, ADD, SAM-dependent-methyltransferase]
key-ptms: []
pathways: []
hallmarks: ["[[epigenetic-alterations]]", "[[stem-cell-exhaustion]]"]
known-interactors: ["[[dnmt3l]]", "[[dnmt1]]", "[[tet2]]"]
genage-id: null
druggability-tier: null
gtex-aging-correlation: null
mr-causal-evidence: not-applicable-somatic
caused-by: []
causes: ["[[epigenetic-alterations]]", "[[clonal-hematopoiesis]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Genovese 2014, Challen 2012, Jaiswal 2014, Yan 2011, and Russler-Germain 2014 verified end-to-end against local PDFs. UniProt Q9Y6K1 canonical-identity fields (length, domains, isoforms) not independently re-verified against UniProt live database — recommend cross-check on next lint pass."
---

# DNMT3A

**De novo DNA methyltransferase** and the most-frequently mutated gene in [[clonal-hematopoiesis]] (CHIP), with the highest absolute mutation count among candidate CHIP driver genes in two landmark population-sequencing studies (Genovese 2014, n=12,380; Jaiswal 2014, n=17,182) [^genovese2014][^jaiswal2014]. Its loss-of-function in [[hematopoietic-stem-cells]] simultaneously drives aberrant stem-cell self-renewal, wholesale methylation drift, and — decades later — risk of transformation to [[acute-myeloid-leukemia]]. DNMT3A thus sits at the crossroads of two central aging hallmarks: [[epigenetic-alterations]] (methylation-pattern disruption) and [[stem-cell-exhaustion]] (HSC pool dysregulation).

## Identity

- **UniProt:** Q9Y6K1 (DNMT3A_HUMAN) — Swiss-Prot curated
- **NCBI Gene:** 1788
- **HGNC symbol:** DNMT3A
- **Ensembl:** ENSG00000119772
- **Mouse ortholog:** Dnmt3a (one-to-one; highly conserved catalytic core)
- **Length:** 912 amino acids (canonical isoform 1; ~130 kDa)

## Domain structure and isoforms

Three domains mediate distinct functions [^uniprot-q9y6k1]:

| Domain | Residues (isoform 1) | Function |
|---|---|---|
| PWWP | 292–350 | Binds H3K36me3; targets DNMT3A to actively transcribed chromatin |
| ADD (ATRX-DNMT3-DNMT3L) | 482–614 | Zinc-finger fold; reads unmodified H3K4; auto-inhibits catalytic domain in the absence of nucleosome |
| SAM-dependent MTase C5-type | 634–912 | Catalytic core; transfers methyl group from S-adenosylmethionine to cytosine C5 |

**Isoforms:** Three isoforms arise from alternative promoter usage and splicing. **Isoform 1** (DNMT3A1, 912 aa) is the somatic/ubiquitous form. **Isoform 2** (DNMT3A2, ~880 aa, shorter N-terminus) is enriched in embryonic stem cells and early development. A third shorter isoform lacks the PWWP domain. The somatic CHIP mutation spectrum almost exclusively involves isoform 1. #gap/needs-replication — isoform-specific functional differences in adult HSCs are not fully characterized.

## Function

DNMT3A catalyzes **de novo** DNA methylation — the establishment of cytosine-5 methylation marks at CpG dinucleotides on previously unmethylated DNA — in contrast to [[dnmt1]], which maintains patterns through DNA replication [^uniprot-q9y6k1]. Key biological roles:

- **Developmental patterning** — establishes tissue-specific methylation programs during embryogenesis; loss in mice causes perinatal lethality with global hypomethylation
- **Genomic imprinting** — required for paternal and maternal imprint establishment at specific loci
- **X chromosome inactivation** — contributes to methylation-mediated silencing of the inactive X
- **HSC differentiation gate** — in adult hematopoiesis, DNMT3A progressively methylates lineage-commitment loci as HSCs differentiate; loss locks HSCs in a self-renewal state (see CHIP biology below)

DNMT3A acts non-processively and can methylate non-CpG sites (CpHpG, CpHpH) in certain developmental contexts [^uniprot-q9y6k1]. It forms heterotetramers with the catalytically inactive paralog DNMT3L, which increases catalytic efficiency and guides specificity.

## CHIP biology (aging-relevance)

### Prevalence and variant spectrum

In a whole-exome sequencing study of 12,380 individuals drawn from peripheral blood, DNMT3A was the most commonly mutated gene among CHIP candidate driver genes (190 mutations detected, vs. 35 for ASXL1 and 31 for TET2). Overall clonal hematopoiesis with candidate drivers was rare at younger ages (0.7% under 50) but rose to 5.7% in those older than 65 [^genovese2014]. Hotspot variants concentrate at **R882**, with R882H (CGT→CAT) the single most common somatic substitution — 15 individuals in the Genovese cohort carried R882H. R882C is the second hotspot [^genovese2014]. #gap/needs-replication — DNMT3A-specific prevalence estimates (as distinct from composite CHIP) vary across cohorts; the Jaiswal 2014 cohort (n=17,182) identified DNMT3A as the most mutated gene with 403 variants, followed by TET2 (72) and ASXL1 (62) [^jaiswal2014].

Mutation counts across two landmark 2014 NEJM cohorts:

| CHIP driver gene | Genovese 2014 (n=12,380) | Jaiswal 2014 (n=17,182) |
|---|---|---|
| DNMT3A | 190 candidate driver mutations | 403 variants |
| TET2 | 31 | 72 |
| ASXL1 | 35 | 62 |

Note: these are raw mutation counts, not population-fraction estimates. DNMT3A is consistently the most-mutated gene in both cohorts. Population-fraction estimates for DNMT3A-CHIP specifically (as distinct from composite CHIP) vary by study design and detection threshold. See [[clonal-hematopoiesis]] for the full CHIP landscape; see [[tet2]] and [[asxl1]] for the other major drivers.

### R882H is dominant-negative

R882H disrupts DNMT3A's ability to form active homotetramers by blocking the RD (arginine-aspartate) interface in the catalytic domain, which mediates DNMT3A–DNMT3A self-interaction required for tetramer assembly. Because tetramers of full-length WT DNMT3A are required for maximal de novo methyltransferase activity, a single R882H allele poisons the WT protein in *trans* when the two proteins are co-expressed in the same cell — reducing methyltransferase activity by ~88% relative to WT DNMT3A alone in cotransfection assays, far beyond the ~50% expected from haploinsufficiency [^russler-germain2014]. Note: simple in vitro mixing of purified recombinant WT and R882H proteins does not produce dominant-negative inhibition (the proteins do not form mixed multimers when mixed in solution); the dominant-negative effect is specific to co-expression in the same cellular compartment [^russler-germain2014]. This dominant-negative mechanism explains why R882H is under positive somatic selection in HSCs: a single mutation confers near-complete loss of function at key differentiation loci.

| Dimension | Status | Notes |
|---|---|---|
| Dominant-negative mechanism conserved? | yes | Demonstrated in human cell lines and mouse knock-in models |
| HSC self-renewal phenotype conserved? | yes | Mouse Dnmt3a conditional knockout + human CHIP data converge |
| Replicated in humans? | in-progress | CHIP epidemiology is human data; mechanism studies partly use murine models |

### HSC self-renewal expansion (murine model)

Conditional knockout of *Dnmt3a* in murine HSCs using Mx1-Cre demonstrated that Dnmt3a-null HSCs expand in competitive transplant assays, outcompeting wild-type HSCs over serial transplantation rounds [^challen2012]. Dnmt3a-null HSCs showed impaired multi-lineage differentiation despite self-renewal expansion, with transcriptional upregulation of HSC stemness genes (Runx1, Gata3) and failure to methylate differentiation-associated loci [^challen2012]. This established the causal link between DNMT3A loss and HSC self-renewal bias that underlies CHIP expansion in aging humans. #gap/needs-human-replication — direct mechanistic evidence in primary human DNMT3A-mutant HSCs is more limited.

### Clinical consequences of DNMT3A-CHIP

CHIP carriers (DNMT3A, TET2, ASXL1, and other driver genes in a composite definition) show: increased all-cause mortality (HR 1.4; 95% CI 1.1–1.8; P=0.02), increased risk of incident coronary heart disease (HR 2.0; 95% CI 1.2–3.5; P=0.02), increased risk of ischemic stroke (HR 2.6; 95% CI 1.3–4.8; P=0.003), and 11.1-fold elevated risk of hematologic malignancy (HR 11.1; 95% CI 3.9–32.6; P<0.001), in a prospective cohort study (n=17,182) [^jaiswal2014]. The mortality and cardiovascular excess appear to be mediated partly through enhanced inflammatory cytokine output from mutant clones rather than transformation alone — the paper explicitly found that "death from hematologic neoplasms alone could not account for the observed increase in mortality" and that persons with mutations had a higher risk of death from cardiovascular causes but not from cancer [^jaiswal2014]. Note: these are composite CHIP estimates; DNMT3A-specific cardiovascular risk estimates are less precisely characterized than TET2-specific estimates. See [[clonal-hematopoiesis]] for the inflammatory mechanism in detail.

## Cancer biology

DNMT3A is mutated in 23/112 (20.5%) of AML-M5 (acute monocytic leukemia) cases and in 9/66 (13.6%) of AML-M4 cases [^yan2011]. The overall frequency across all adult AML subtypes (~20–26%) is reported in subsequent larger studies; Yan 2011 specifically established the mutation in the AML-M5 context with full exome validation. Mutations are enriched at R882 but occur across the gene. Notably, DNMT3A-mutant AML-M5 cases had significantly worse overall survival (median OS 7.0 ± 5.3 months vs. 19.5 ± 5.6 months for WT; P=0.004) and shorter time to treatment failure (P=0.005) [^yan2011]. Unlike some AML drivers (FLT3, NPM1), DNMT3A mutations arise in **pre-leukemic HSCs** that persist for years or decades before acquiring cooperating oncogenic mutations that drive overt transformation — a concept supported by both Yan 2011 and the CHIP epidemiology. This makes DNMT3A-mutant clones a long-lived reservoir risk. #gap/needs-replication — pan-AML frequency estimates require larger cohort studies beyond the AML-M5-focused Yan 2011 paper.

DNMT3A mutations also appear in:
- **Myelodysplastic syndromes (MDS)** — often as an early event
- **T-cell lymphomas** — particularly angioimmunoblastic T-cell lymphoma
- **Tatton-Brown-Rahman syndrome** — germline DNMT3A variants cause an overgrowth intellectual-disability syndrome (distinct from somatic CHIP biology)

## Relationship to the epigenetic clock

DNMT3A loss-of-function broadly reduces CpG methylation across the genome, with bias toward loci that normally acquire methylation during differentiation. This is mechanistically relevant to [[epigenetic-alterations]] as an aging hallmark. Whether DNMT3A-CHIP specifically accelerates epigenetic clock readouts (e.g., [[horvath-clock-2013]], [[grimage-2019]]) in blood has not been definitively established — the clocks are trained on bulk blood DNA that averages across clonal and non-clonal cells. In a CHIP carrier with a large clone, the clock readout may be distorted by the methylation pattern of the dominant clone rather than reflecting organismal age. #gap/needs-replication — systematic analysis of clock age vs CHIP clone fraction in DNMT3A-CHIP carriers is an open question.

## Therapeutic angles

No DNMT3A-targeted therapy is currently approved or in late-stage trials for CHIP. Conceptual approaches:

- **DNMT inhibitors** (azacitidine, decitabine) are used in AML/MDS but cause global demethylation — paradoxically the same direction as DNMT3A LOF, and unsuitable for prevention in healthy CHIP carriers.
- **IL-1β blockade (canakinumab)** reduced cardiovascular events in a CANTOS subgroup analysis enriched for CHIP carriers, but the benefit was most pronounced in **TET2-CHIP** carriers; DNMT3A-CHIP differential response is unclear and requires a pre-specified subgroup analysis #gap/needs-replication.
- **Targeted protein degradation or allele-specific silencing** of R882H — no validated approach yet. The dominant-negative tetramer interface is conceptually druggable. #gap/no-mechanism (intervention level).

## Cross-references

- [[clonal-hematopoiesis]] — epidemiology and clinical consequences of CHIP
- [[hematopoietic-stem-cells]] — cellular context; HSC aging, niche, and exhaustion
- [[tet2]] — co-occurring CHIP driver; TET2 encodes a methylcytosine dioxygenase (opposing arm of the methylation/demethylation axis)
- [[asxl1]] — third major CHIP driver; Polycomb-associated chromatin regulator
- [[epigenetic-alterations]] — Hallmark: global methylation drift in aging
- [[horvath-clock-2013]] — pan-tissue epigenetic clock; DNMT3A disrupts underlying CpG patterns
- [[grimage-2019]] — mortality-predictive plasma+methylation clock; CHIP may confound readout in blood
- [[acute-myeloid-leukemia]] — downstream transformation risk (implicit stub)
- [[dnmt1]] — maintenance methyltransferase; partnered with DNMT3A in methylation homeostasis (implicit stub)

## Limitations and gaps

- `#gap/needs-canonical-id` — druggability-tier not yet populated; no Open Targets Platform query performed (ENSG00000119772 is the handle for lookup).
- `#gap/needs-replication` — DNMT3A-specific (vs. composite CHIP) cardiovascular risk estimates vary by study size; most CHIP studies use composite CHIP definitions.
- `#gap/needs-human-replication` — mechanistic HSC self-renewal data are predominantly from murine conditional-knockout models; primary human DNMT3A-mutant HSC functional assays are fewer.
- `#gap/needs-replication` — epigenetic clock acceleration specifically attributable to DNMT3A-CHIP (vs. TET2-CHIP or composite) has not been cleanly quantified.
- `#gap/no-mechanism` — the precise inflammatory signaling mechanism by which DNMT3A-mutant myeloid cells drive cardiovascular risk (vs. TET2-mutant cells) is not established.
- `gtex-aging-correlation:` not populated — see `sops/finding-tissue-expression.md` for GTEx v2 protocol.
- `mr-causal-evidence:` not-applicable-somatic — Mendelian randomization requires germline genetic instruments (IVs); DNMT3A aging-relevance is driven by somatic loss-of-function mutations (CHIP), not germline variation. Standard MR is methodologically inapplicable. The epidemiological evidence (Genovese 2014, Jaiswal 2014) provides observational causal inference for CHIP-driven outcomes but is not MR-validated in the formal sense. Schema value updated per R26a `not-applicable-somatic` extension for CHIP-driver proteins.

## Footnotes

[^genovese2014]: doi:10.1056/NEJMoa1409405 · n=12,380 (WES, peripheral blood; Swedish population, unselected for cancer/hematologic phenotypes) · observational (population cohort) · p<0.001 (hematologic cancer HR 12.9; 95% CI 5.8–28.7) · model: human; Genovese et al., *NEJM* 2014 · PDF verified 2026-05-06
[^challen2012]: doi:10.1038/ng.1009 · in-vivo (mouse; Mx1-Cre conditional Dnmt3a KO; competitive serial transplant; n=15–37 mice/group) · Challen et al., *Nature Genetics* 2012 · PDF verified 2026-05-06
[^jaiswal2014]: doi:10.1056/NEJMoa1408617 · n=17,182 (22 population-based cohorts; prospective) · observational (prospective cohort) · p<0.001 (hematologic cancer HR 11.1; 95% CI 3.9–32.6); all-cause mortality HR 1.4 (95% CI 1.1–1.8; P=0.02) · model: human; Jaiswal et al., *NEJM* 2014 · PDF verified 2026-05-06
[^yan2011]: doi:10.1038/ng.788 · n=112 (AML-M5 exomes; initial + validation set) · observational (exome sequencing + Sanger validation) · p=0.004 (OS difference mutant vs WT) · model: human AML-M5; Yan et al., *Nature Genetics* 2011 · PDF verified 2026-05-06
[^russler-germain2014]: doi:10.1016/j.ccr.2014.02.010 · in-vitro + in-vivo (human NK-AML cell lines; HEK293T cotransfection; size-exclusion chromatography tetramer assay; n=80 NK-AML RNA-seq; n=85 NK-AML methylation array) · Russler-Germain et al., *Cancer Cell* 2014 · PDF verified 2026-05-06
[^uniprot-q9y6k1]: UniProt Q9Y6K1 (DNMT3A_HUMAN), Swiss-Prot curated, accessed 2026-05-06 — identity fields (length, domains, isoforms) not independently re-verified against live database in this verification pass
