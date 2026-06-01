---
type: phenotype
aliases: [CHIP, clonal hematopoiesis of indeterminate potential, age-related clonal hematopoiesis, ARCH]
icd-10: D75.81
# ICD-10 note: D75.81 ("other specified diseases of blood") is the best available code as of 2026; no single ICD-10 code captures CHIP exactly. Some centers use D47.9 (neoplasm of uncertain behavior of lymphoid tissue). Annotate with the code used in any study when citing prevalence data.
affected-tissues: ["[[bone-marrow]]", "[[blood]]", "[[vasculature]]"]
underlying-hallmarks: ["[[genomic-instability]]", "[[stem-cell-exhaustion]]", "[[chronic-inflammation]]"]
typical-onset: "rare <40; detectable ~2% at 40–50; ~5% at 60–70; ~10% at >65–70; ~20% at >70 (VAF ≥0.02 threshold)"
prevalence-65plus: "~10–20% (VAF ≥0.02 by WES; higher with deeper sequencing or lower VAF cutoffs)"
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Jaiswal 2014, Genovese 2014, Steensma 2015, and Jaiswal 2017 verified against primary source PDFs. Fuster 2017 (Science; download failed — status: failed after retry) unverifiable; cardiovascular mechanism claims tagged #gap/no-fulltext-access. Svensson 2022 JAMA Cardiology (download failed — status: failed) unverifiable; CANTOS-CHIP subgroup claims tagged #gap/no-fulltext-access. Bouzid 2023 (Nature Medicine) located and confirmed: CHIP is protective against AD (OR=0.64), not a risk factor — wiki framing corrected."
---

# Clonal Hematopoiesis

Clonal hematopoiesis (CH) is the age-associated expansion of blood cells derived from a single hematopoietic stem or progenitor cell (HSPC) carrying a somatic mutation, occurring without overt hematological malignancy. When the variant allele frequency (VAF) in peripheral blood reaches ≥0.02 and the driver mutation is in a recurrently mutated gene, this is termed **clonal hematopoiesis of indeterminate potential (CHIP)** [^steensma2015]. CHIP sits at the intersection of three aging hallmarks — [[genomic-instability]], [[stem-cell-exhaustion]], and [[chronic-inflammation]] — and is now recognized as a significant, independently acting cardiovascular and mortality risk factor in older adults.

For the cellular biology of HSCs and the epidemiological cohort numbers that established CHIP's prevalence, see [[hematopoietic-stem-cells]], which is the canonical home for those cohort data. This page covers the CHIP definition, driver gene landscape, cardiovascular mechanism, and therapeutic implications.

## Definition and diagnostic threshold

**CHIP** is defined operationally by three criteria [^steensma2015]:

1. A somatic mutation in a gene recurrently mutated in hematological neoplasms detected in peripheral blood DNA
2. VAF ≥ 0.02 (i.e., ≥2% of blood DNA carries the mutation), implying a clone comprising at least 4% of blood cells (heterozygous mutation)
3. **No** hematologic malignancy, and no cytopenia of sufficient severity to meet criteria for myelodysplastic syndrome (MDS), aplastic anemia, or other defined hematological disorders

The VAF ≥ 0.02 cutoff is a pragmatic detection threshold from standard whole-exome sequencing (WES) depth, not a biologically meaningful boundary. Error-corrected or ultra-deep sequencing reveals clones at VAF < 0.01 in the majority of adults over 40; these are sometimes termed "clonal hematopoiesis" without the "indeterminate potential" qualifier (ARCH — age-related clonal hematopoiesis — covers the full VAF spectrum). #gap/dose-response-unclear — the clinical risk trajectory below VAF 0.02 is not well characterized; it is not known whether very small clones (<1% VAF) confer meaningful cardiovascular or malignancy risk.

The **clone size doubles** approximately every 7–10 years in slowly expanding CHIP, but expansion rate is highly variable by driver gene and by individual. *JAK2* V617F clones expand faster than *DNMT3A* or *TET2* clones on average [^jaiswal2017]. #gap/needs-replication — longitudinal VAF trajectory data are from relatively small serial-sampling cohorts.

## Epidemiology

CHIP prevalence is strongly age-dependent. Key cohort data (canonical home: [[hematopoietic-stem-cells]]; cross-reference only here):

- **Jaiswal et al. 2014** (n=17,182 WES): CHIP detected in ~10% of individuals **>70 years** (age-stratified breakdown in the HSC page) [^jaiswal2014].
- **Genovese et al. 2014** (n=12,380 WES): CHIP detected in **>10% of individuals >65 years** and ~1% under age 50 [^genovese2014].

Both studies used VAF ≥ 0.02 with standard WES depth (~70×). Studies using deeper sequencing or lower VAF cutoffs report substantially higher frequencies at all ages. Prevalence estimates are therefore sequencing-depth- and threshold-dependent — always cite the analytical method alongside the prevalence figure.

Sex: CHIP is slightly more prevalent in men than women across most cohort studies, though this varies by driver gene [^jaiswal2014]. #gap/needs-replication — sex stratification in most cohorts is underpowered for gene-specific comparisons.

## Driver gene landscape

The majority of CHIP mutations cluster in a small set of genes, most encoding epigenetic regulators:

| Gene | Variant count in Jaiswal 2014 (Fig. 2A; n=746 persons with mutations) | Genovese 2014 rank | Function | Malignancy association |
|---|---|---|---|---|
| *DNMT3A* | 403 (most common by far) | 1st (190 mutations) | De novo DNA methyltransferase | AML, MDS |
| *TET2* | 72 | 3rd (31 mutations) | 5-methylcytosine oxidation (demethylation) | MDS, CMML, AML |
| *ASXL1* | 62 | 2nd (35 mutations) | Polycomb-associated chromatin modifier | MDS, CMML, AML |
| *TP53* | 33 | present | Tumor suppressor | AML, MDS |
| [[jak2|JAK2]] V617F | 31 | present (24 mutations) | JAK-STAT kinase (activating mutation) | MPNs (PV, ET, MF) |
| [[sf3b1|SF3B1]] | 27 | 5th (13 mutations) | Splicing factor | MDS with ring sideroblasts |
| *SRSF2* | 22 | present (7 mutations) | Splicing factor | CMML |

Note: Jaiswal 2014 reports variant counts per gene (Fig. 2A), not percentage frequencies; DNMT3A, TET2, and ASXL1 were identified as the three most commonly mutated genes in both Jaiswal 2014 and Genovese 2014 [^jaiswal2014][^genovese2014]. Genovese 2014 ranks ASXL1 second (35 mutations) and TET2 third (31 mutations) — note this order differs slightly from Jaiswal 2014's (TET2 72, ASXL1 62), likely due to different cohort compositions and technical factors (the Genovese paper notes TET2 and ASXL1 were probably undercounted due to sequencing coverage). The proportion of persons with exactly one mutation was 693/746 (93%) in Jaiswal 2014. #gap/needs-replication — no single study has comprehensively sequenced all recurrently mutated genes in a population-representative cohort of >50,000 individuals to give definitive relative frequencies.

**Why do these genes predominate?** All confer a competitive growth advantage within the HSC niche without triggering differentiation arrest or apoptosis:

- *DNMT3A* R882H (the most common single variant) reduces methyltransferase activity, leading to hypomethylation of stem-cell-associated loci and impaired differentiation [^jaiswal2014]. The mechanism by which this translates to clonal expansion is incompletely understood. #gap/no-mechanism
- *TET2* loss-of-function allows persistence of 5-methylcytosine at loci normally demethylated during HSC activation, altering the balance between quiescence and self-renewal. It also potently activates inflammatory gene programs in monocyte/macrophage progeny (see cardiovascular mechanism below).
- *ASXL1* mutations truncate the protein's C-terminus, disrupting Polycomb repressive complex 2 (PRC2) activity and derepressing oncogenes.
- *JAK2* V617F is a constitutively activating mutation driving myeloproliferative neoplasm (MPN) biology; at sub-MPN clone sizes it may expand more slowly but still generates a detectable clone.

## Cardiovascular mechanism: the TET2-NLRP3-IL-1β axis

The most mechanistically characterized consequence of CHIP is its contribution to cardiovascular disease — specifically atherosclerosis — via inflammatory amplification in TET2-mutant macrophages.

**Mouse causal evidence:** Fuster et al. 2017 demonstrated that transplanting *Tet2*-null bone marrow (replicating a TET2-LoF CHIP clone) into atherosclerosis-susceptible LDLR-null mice accelerated plaque formation compared to wild-type bone marrow transplant [^fuster2017]. #gap/no-fulltext-access — Fuster 2017 PDF unavailable in archive (download failed); quantitative plaque area values cannot be independently verified. The mechanism is reported as involving *Tet2*-null macrophages:

1. Displaying elevated production of [[il-1b]] and [[il-6]] upon NLRP3 inflammasome activation
2. Having increased NLRP3 expression (epigenetically regulated by TET2-mediated demethylation at the *Nlrp3* promoter)
3. Producing a more inflammatory local microenvironment in the arterial wall

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — TET2 loss elevates IL-1β in human monocytes ex vivo, but the in-vivo plaque phenotype has not been directly replicated |
| Phenotype conserved in humans? | yes — Jaiswal 2017 human cohort shows CVD risk |
| Replicated in humans? | in-progress — CANTOS-CHIP subgroup (see below) provides indirect support |

**Human observational evidence:** Jaiswal et al. 2017 performed cardiovascular risk analysis across four case-control studies enrolling 4,726 participants with coronary heart disease and 3,529 controls (plus three unselected prospective cohorts for gene-level analysis). The fixed-effects meta-analysis of the two primary prospective cohorts (BioImage and MDC) found that CHIP carriers had HR=1.9 (95% CI 1.4–2.7; P<0.001) for incident coronary heart disease, independent of traditional cardiovascular risk factors [^jaiswal2017]. *DNMT3A*, *TET2*, *ASXL1*, and *JAK2* mutations were each individually associated with coronary heart disease; *JAK2* V617F had the strongest per-gene signal (HR=12.1 in ATVB/PROMIS early-onset MI analysis). This study also directly confirmed that *TET2* and *JAK2* mutations showed significant enrichment among participants with early-onset myocardial infarction. #gap/needs-replication — effect sizes from this study have not been independently replicated in an equivalently powered prospective cohort with pre-specified CHIP cardiovascular endpoints. A 2025 case-control analysis (Wang et al., *Eur Heart J*) subsequently disaggregated the JAK2 V617F signal by MI mechanism — strongly associated with plaque *erosion* (neutrophil-mediated) but not plaque *rupture*; see [[jak2]] § "JAK2 V617F" for the effect sizes and mechanism.

**NLRP3 link:** The [[nlrp3-inflammasome]] is the upstream sensor activating caspase-1 → IL-1β maturation in TET2-deficient macrophages. This creates the mechanistic bridge between CHIP and the therapeutic rationale for IL-1β blockade (see below). The *Nlrp3* promoter contains TET2-sensitive CpG methylation sites; TET2 loss increases methylation, paradoxically elevating *Nlrp3* expression — though the detailed epigenetic mechanism requires further investigation. #gap/no-mechanism — precise CpG sites and the quantitative relationship between TET2 activity and Nlrp3 expression have not been systematically mapped in primary human macrophages.

## Mortality and malignancy outcomes

Summary of outcome associations from the 2014 landmark cohorts (full numbers on [[hematopoietic-stem-cells]]):

- **All-cause mortality HR 1.4** (Jaiswal 2014; n=17,182; HR=1.4, 95% CI 1.1–1.8; P=0.02) [^jaiswal2014]
- **Coronary heart disease HR 2.0** (Jaiswal 2014; HR=2.0, 95% CI 1.2–3.5; P=0.02) [^jaiswal2014]
- **Ischemic stroke HR 2.6** (Jaiswal 2014; HR=2.6, 95% CI 1.3–4.8; P=0.003) [^jaiswal2014]
- **Hematologic malignancy HR 11.1** (Jaiswal 2014; HR=11.1, 95% CI 3.9–32.6; Genovese 2014: HR=12.9, 95% CI 5.8–28.7) [^jaiswal2014][^genovese2014]

> **Quantitative note:** The HRs above are verified directly against primary source PDFs (Jaiswal 2014 and Genovese 2014) on this page. Note corrections from earlier extraction: CHD CI corrected from 1.2–3.4 → 1.2–3.5; ischemic stroke CI corrected from 1.4–4.8 → 1.3–4.8; p-values added. Full cohort data also on [[hematopoietic-stem-cells]] (canonical home).

The absolute lifetime risk of progression to overt hematologic malignancy is ~0.5–1% per year, meaning the majority of CHIP carriers will never develop blood cancer. However, the cardiovascular and mortality excess is present across the entire CHIP population, not concentrated in those who later progress to malignancy — suggesting distinct pathophysiological mechanisms for the two outcome streams. #gap/long-term-unknown — natural history studies have median follow-up < 10 years.

## Therapeutic implications

### IL-1β blockade — CANTOS trial CHIP subgroup

The CANTOS trial (Canakinumab Anti-Inflammatory Thrombosis Outcomes Study) tested the anti-IL-1β monoclonal antibody [[canakinumab]] in post-MI patients with elevated hsCRP. The overall trial showed cardiovascular event reduction. A pre-specified exploratory subgroup analysis stratified CANTOS participants by TET2-mutated CHIP status:

Svensson et al. 2022 (JAMA Cardiology; exploratory analysis) found that cardiovascular benefit from canakinumab was concentrated in **TET2-mutated CHIP carriers** — non-CHIP and CHIP-carriers with other mutations showed attenuated or absent benefit [^svensson2022]. This is the first human trial evidence that TET2-CHIP-specific IL-1β hyperactivity is pharmacologically targetable.

#gap/needs-replication — this is a post-hoc exploratory analysis of a subgroup defined by retrospective genotyping; it is hypothesis-generating, not confirmatory. A prospective trial in TET2-CHIP carriers has not been completed as of 2026-05-05.

### TET2 restoration (preclinical)

Re-expression of TET2 in *Tet2*-null HSCs reduces atherosclerotic plaque in mouse models [^fuster2017]. No human therapeutic program for direct TET2 restoration is in clinical stage as of this writing. #gap/needs-human-replication #gap/no-fulltext-access — Fuster 2017 PDF unavailable; mechanistic quantitative details unverified.

### Monitoring and surveillance

No consensus screening protocol exists for CHIP in otherwise healthy individuals. Clinical indications for CHIP sequencing include:
- Unexplained cytopenias
- Pre-allogeneic transplant workup (donor CHIP affects graft function)
- Incidental detection from tumor tissue NGS (clonal somatic variants in blood contamination)

## Microglial CHIP and neurodegeneration

TET2 is expressed in brain microglia, which are bone-marrow-derived and therefore participate in systemic hematopoiesis. Whether CHIP clones seed the microglial compartment and how this affects neurodegeneration is actively studied.

**Bouzid et al. 2023 (Nature Medicine)** performed a meta-analysis across multiple cohorts (n=5,730 total: 1,362 AD cases; 4,368 controls) and found that CHIP was associated with **protection** from Alzheimer's disease (OR=0.64; P=3.8×10⁻⁵), not increased risk [^bouzid2023]. Mendelian randomization analysis supported a causal association. CHIP mutations were detected in a microglia-enriched brain fraction in 7/8 carriers examined. The mechanism by which CHIP confers protection is unknown — one hypothesis is that TET2-mutant or DNMT3A-mutant microglial clones alter the local immune microenvironment in a way that reduces amyloid pathology or tau accumulation, but this remains entirely speculative. #gap/no-mechanism #gap/needs-replication

> **Important framing note:** The Bouzid 2023 finding directly contradicts a naive expectation that CHIP-mediated inflammation would worsen neurodegeneration. The protective signal in AD does not exclude CHIP contributing to other CNS pathologies via distinct mechanisms, but any such claim requires independent evidence. See [[neurodegeneration]] for synthesis of the Bouzid 2023 data in context.

[^bouzid2023]: [[studies/bouzid-2023-chip-alzheimers]] · doi:10.1038/s41591-023-02397-2 · Bouzid H et al. · observational (meta-analysis) · Nature Medicine 2023;29(7):1662-1670 · n=5,730 (1,362 AD; 4,368 controls) · OR=0.64 (protective vs AD), P=3.8×10⁻⁵; CHIP mutations in microglia-enriched brain fraction in 7/8 carriers · model: human · #gap/needs-replication — mechanism unknown; not replicated in independent cohort

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — TET2 expressed in human microglia; CHIP mutations detected in microglial fraction |
| Phenotype conserved in humans? | yes (protective direction) — Bouzid 2023 shows CHIP associated with reduced AD risk |
| Replicated in humans? | no — single meta-analysis; mechanism unexplained |

## Hallmark connections

| Hallmark | CHIP mechanism |
|---|---|
| [[genomic-instability]] | Somatic mutations in driver genes accumulate with age; CHIP clones carry these mutations; accelerated clonal expansion amplifies mutational burden |
| [[stem-cell-exhaustion]] | CHIP is both a consequence of HSC aging (mutation accumulation) and a modifier of it (clonal dominance alters HSC pool composition) |
| [[chronic-inflammation]] | TET2-LoF macrophages hyperactivate NLRP3 → IL-1β/IL-6 → systemic inflammaging amplification; [[nf-kb]] pathway upregulated |
| [[epigenetic-alterations]] | DNMT3A and TET2 mutations directly alter the methylome; ASXL1 mutations alter histone modification landscape |

## Cross-references

Key related pages in the wiki:

- [[hematopoietic-stem-cells]] — cellular biology and cohort epidemiology (canonical home for Jaiswal/Genovese cohort numbers)
- [[stem-cell-exhaustion]] — hallmark page; CHIP is a manifestation of HSC pool aging
- [[genomic-instability]] — hallmark page; somatic mutation accumulation is the upstream driver
- [[chronic-inflammation]] — CHIP-derived IL-1β/IL-6 contributes to systemic inflammaging
- [[atherosclerosis]] — TET2-CHIP accelerates plaque formation (see cardiovascular mechanism section)
- [[anemia-of-aging]] — CHIP-related dysregulation of erythroid output may contribute
- [[microglia]] — bone-marrow-derived brain macrophages can carry CHIP mutations; Bouzid 2023 confirms CHIP mutations detectable in microglia-enriched brain fraction
- [[alzheimers-disease]] — Bouzid 2023 shows CHIP is protective against AD (OR=0.64); see [[neurodegeneration]] for synthesis
- [[nlrp3-inflammasome]] — mechanistic effector of TET2-LoF macrophage hyperactivation
- [[canakinumab]] — IL-1β blocking antibody; CANTOS-CHIP subgroup analysis
- [[tet2]] — protein page (verified)
- [[dnmt3a]] — protein page (drafted R24b; most-common CHIP driver, R882H dominant-negative mechanism)
- [[asxl1]] — protein page (drafted R24b; 3rd-most-common driver; PR-DUB partner with BAP1)
- [[tet1]], [[tet3]] — TET family completion (drafted R24b)
- [[il-1b]] — cytokine page (implicit stub — no page yet)
- [[il-6]] — cytokine page (implicit stub — no page yet)
- [[nf-kb]] — transcription factor pathway (implicit stub or existing page — check)

## Limitations and open questions

- **VAF threshold arbitrariness** — the ≥0.02 cutoff is a detection artifact, not a biological transition point. Risk likely scales continuously with clone size; the "CHIP vs not-CHIP" binary is operationally useful but biologically crude. #gap/dose-response-unclear
- **Driver-gene heterogeneity** — cardiovascular risk appears to concentrate in *TET2* mutations; *DNMT3A* CHIP may have a distinct (or weaker) cardiovascular risk profile. Mechanistically separating driver-specific effects is essential for therapeutic targeting. #gap/needs-replication
- **Cause vs consequence** — it is possible that underlying atherosclerosis or inflammation creates a selective environment favoring certain CHIP clones rather than CHIP causing inflammation. Mendelian randomization and longitudinal clone-tracking studies are needed. #gap/no-mechanism
- **Microglial and CNS CHIP** — Bouzid 2023 (Nature Medicine) found CHIP is associated with *protection* from Alzheimer's disease (OR=0.64; P=3.8×10⁻⁵), a surprising and mechanism-free finding that contradicts a naive pro-inflammatory expectation. Whether CHIP affects other neurodegenerative diseases differently is unknown. #gap/no-mechanism #gap/needs-replication
- **Therapeutic window** — broad IL-1β blockade increases infection risk (as seen in CANTOS). TET2-CHIP-targeted therapy needs precision delivery or patient selection to achieve favorable benefit-risk. #gap/long-term-unknown
- **Progression predictors** — the molecular or clinical features that predict which CHIP carriers will develop MDS/AML vs remain benign are not established at a clinically actionable level. #gap/needs-replication

## Footnotes

[^steensma2015]: [[studies/steensma-2015-chip-definition]] · doi:10.1182/blood-2015-03-631747 · Steensma DP, Bejar R, Jaiswal S, Lindsley RC, Sekeres MA, Hasserjian RP, Ebert BL et al. · Perspectives article (working-group proposal) · Blood 2015;126(1):9-16 · proposed the CHIP terminology and the working definition of VAF ≥2% in peripheral blood; distinguished CHIP from CCUS (clonal cytopenia of undetermined significance) and MDS; noted progression risk ~0.5–1% per year, similar to MGUS and MBL · model: human (nomenclature/definition paper) · local PDF verified: DOI lookup  (local PDF)

[^jaiswal2014]: [[studies/jaiswal-2014-chip-adverse-outcomes]] · doi:10.1056/NEJMoa1408617 · Jaiswal S, Fontanillas P, Flannick J, Manning A et al. · n=17,182 · observational (whole-exome sequencing of peripheral blood DNA from 22 cohorts) · NEJM 2014;371:2488-2498 · HR=1.4 (95% CI 1.1–1.8; P=0.02) all-cause mortality; HR=2.0 (95% CI 1.2–3.5; P=0.02) coronary heart disease; HR=2.6 (95% CI 1.3–4.8; P=0.003) ischemic stroke; HR=11.1 (95% CI 3.9–32.6) hematologic malignancy · CHIP detected in 5.6% at 60–69 y, 9.5% at 70–79 y, 11.7% at 80–89 y, 18.4% at ≥90 y; ~10% at >70 y overall · model: human · local PDF verified:  (local PDF)

[^genovese2014]: [[studies/genovese-2014-chip-cancer-risk]] · doi:10.1056/NEJMoa1409405 · Genovese G, Kähler AK, Handsaker RE, Lindberg J et al. · n=12,380 (Swedish national cohort) · observational (whole-exome sequencing of peripheral blood DNA) · NEJM 2014;371:2477-2487 · CHIP observed in 10% at >65 y and 1% at <50 y; HR=12.9 (95% CI 5.8–28.7; P<0.001) hematologic malignancy; HR=1.4 (95% CI 1.0–1.8; P=0.03) death; DNMT3A (190 mutations), ASXL1 (35), TET2 (31) most commonly mutated genes; 42% of persons who developed hematologic cancer >6 months after sampling had clonality at sampling · model: human (Swedish national patient registries for follow-up) · local PDF verified:  (local PDF)

[^fuster2017]: [[studies/fuster-2017-tet2-chip-atherosclerosis]] · doi:10.1126/science.aag1381 · Fuster JJ et al. · in-vivo (bone marrow transplant into LDLR-null atherosclerosis model) · Science 2017;355:842-847 · Tet2-null BM transplant accelerated atherosclerosis vs WT BM; mechanism via NLRP3/IL-1β hyperactivation in Tet2-null macrophages · model: mus-musculus (LDLR-/- background) · #gap/no-fulltext-access — PDF download failed after retry (status: failed in a local paper archive; green OA but no retrievable URL resolved)

[^jaiswal2017]: [[studies/jaiswal-2017-chip-cvd-risk]] · doi:10.1056/NEJMoa1701719 · Jaiswal S, Natarajan P, Silver AJ, Gibson CJ, Bick AG et al. · n=4,726 CHD cases + 3,529 controls across 4 case-control studies (plus 3 prospective cohorts for gene-level analysis) · case-control + prospective cohort analysis with WES · NEJM 2017;377:111-121 · CHIP associated with HR=1.9 (95% CI 1.4–2.7; P<0.001) for incident CHD in fixed-effects meta-analysis of two prospective cohorts; JAK2 V617F had the strongest per-gene signal (OR=12.1 in early-onset MI analysis); DNMT3A, TET2, ASXL1, and JAK2 each individually associated with CHD · model: human · local PDF verified: DOI lookup  (local PDF)

[^svensson2022]: [[studies/svensson-2022-cantos-chip-tet2]] · doi:10.1001/jamacardio.2022.0386 · Svensson EC et al. · exploratory subgroup analysis of CANTOS RCT · JAMA Cardiology 2022 · canakinumab cardiovascular benefit concentrated in TET2-mutated CHIP carriers; non-TET2 CHIP and non-CHIP participants showed attenuated/absent benefit · model: human (post-MI patients, CANTOS trial population) · #gap/needs-replication — post-hoc exploratory analysis · #gap/no-fulltext-access — PDF download failed (status: failed; bronze OA but no retrievable URL resolved; verify via publisher or PubMed Central on next pass)
