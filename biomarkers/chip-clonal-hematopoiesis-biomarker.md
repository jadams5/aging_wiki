---
type: biomarker
aliases: [CHIP panel, clonal hematopoiesis NGS, CH biomarker, CHIP screening, somatic-mutation panel]
modality: composite-clinical
# SCHEMA GAP (R35 escalation, 2026-05-09): No `modality:` enum value covers NGS-based somatic-variant detection. Nearest fit is `composite-clinical` (used for multi-deficit clinical scores) which does not capture "sequencing of peripheral blood DNA." A new `modality: somatic-genetic` value should be added to CLAUDE.md. Using `composite-clinical` as placeholder pending schema update. Escalate to main agent.
unit: "VAF (variant allele frequency, %) or binary positive/negative at VAF ≥ threshold"
training-cohort: "Jaiswal 2014 NEJM (n=17,182 WES); Genovese 2014 NEJM (n=12,380 WES); Bick 2020 Nature (n=97,691 WGS, TOPMed); Niroula 2021 Nature Medicine (n=55,383 CHIP WES; UKB + MGB Biobank)"
n-cpgs-or-features: "25–100 driver genes (typical clinical panel); 6 canonical drivers: DNMT3A, TET2, ASXL1, JAK2, PPM1D, TP53"
training-target: mortality
calibration-tissues: ["[[blood]]"]
test-retest-icc: null
# NOTE: Test-retest ICC is not a standard metric for NGS-based somatic-variant detection. Analytical concordance (sensitivity/specificity at given VAF LOD) is the appropriate measure; varies by platform (see Vendor Landscape section).
human-evidence-level: strong
mendelian-randomization: not-applicable-somatic
# NOTE: Per CLAUDE.md R26 schema extension — CHIP drivers are somatic mutations, not germline variants; germline MR instruments do not capture the aging-relevant variation. Bick 2020 (doi:10.1038/s41586-020-2819-2) identifies germline loci influencing CHIP susceptibility, but the CH clone's cardiovascular effects are mediated by somatic mutations in the clone, not the germline predisposition SNPs.
intervention-responsive: partial
# TET2-CHIP: canakinumab (IL-1β blockade) benefit enriched in TET2-CHIP carriers — CANTOS post-hoc (Svensson 2022); SGLT2 inhibitors emerging. Allogeneic HSCT eradicates CHIP but is not aging-indicated. DNMT3A-CHIP: no targeted therapy validated.
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Jaiswal 2014, Genovese 2014, Bick 2020, Niroula 2021, Vlasschaert 2023, Dorsheimer 2019 PDFs read end-to-end and all load-bearing quantitative claims verified. Sano 2018 not_oa — mechanism claim unverified against full text (flagged). Steensma 2015 and Svensson 2022 previously verified per phenotypes/clonal-hematopoiesis — relied on that precedent. Schema gap (modality: composite-clinical placeholder) documented in frontmatter. Canonical-database identity fields (PubChem, etc.) not applicable to this biomarker type."
---

# CHIP NGS Panel (Clonal Hematopoiesis Biomarker)

The **CHIP NGS panel** is an aging biomarker modality based on sequencing peripheral blood DNA for somatic mutations in hematopoietic driver genes. A positive result — defined operationally as a variant allele frequency (VAF) ≥2% in a recurrently mutated gene — identifies clonal hematopoiesis of indeterminate potential (CHIP), which independently predicts all-cause mortality, cardiovascular disease, and hematologic malignancy risk [^jaiswal2014][^genovese2014]. CHIP prevalence rises steeply with age (~1% at age <50; ~10% at age >70), making the panel an intrinsically age-stratified biomarker.

**Canonical phenotype page:** [[phenotypes/clonal-hematopoiesis]] — covers the biological condition, driver gene landscape, cardiovascular mechanism, and therapeutic implications. This page covers the NGS panel as a measurement modality: vendor landscape, panel composition, VAF thresholds, and aging-cohort evidence.

## Identity and Measurement Principle

- **Modality:** Targeted NGS or whole-exome/genome sequencing (WES/WGS) of peripheral blood mononuclear cells (PBMCs) or whole blood DNA
- **Primary output:** VAF (%) for each detected somatic variant; binary CHIP-positive/negative at VAF ≥ threshold
- **Foundational cohorts:** Jaiswal 2014 NEJM [^jaiswal2014] (n=17,182; WES ~70×); Genovese 2014 NEJM [^genovese2014] (n=12,380; WES); Bick 2020 Nature [^bick2020] (n=97,691; WGS, TOPMed)
- **Hallmarks engaged:** [[genomic-instability]] (driver mutations are genome integrity failures in HSCs), [[stem-cell-exhaustion]] (CHIP reflects and alters HSC pool composition), [[chronic-inflammation]] (TET2-LoF macrophages hyperactivate NLRP3/IL-1β axis)

Unlike epigenetic clocks — which quantify methylation changes at CpG sites — the CHIP panel detects discrete somatic mutations in the hematopoietic compartment. The detected VAF directly reflects the fractional abundance of a mutant clone in peripheral blood; a VAF of 2% in a heterozygous mutation implies the clone constitutes ~4% of blood cells.

## VAF Threshold Conventions

The VAF cutoff used to define CHIP is a detection threshold, not a biologically meaningful boundary, and has evolved with sequencing technology:

| Threshold | Context | Notes |
|---|---|---|
| **VAF ≥2% (0.02)** | Historical clinical and research standard | Established in Steensma 2015 consensus; pragmatic limit of standard WES (~70–100×) [^steensma2015]. Most published cohort prevalence data use this threshold. |
| **VAF ≥1% (0.01)** | Emerging midpoint | Some research panels using deeper sequencing; clinical relevance of 1–2% clones still being characterized |
| **VAF ≥0.1% (0.001)** | Error-corrected platforms | TwinStrand DuplexSeq LOD ~0.01% VAF; reveals clones in the majority of adults over 40. Risk implications below 1% VAF are uncertain [^bick2020]. |
| **VAF ≥0.02%** | Research-grade duplex sequencing | Theoretical detection limit for error-corrected methods; not yet clinically translated |

Bick 2020 (n=97,691 WGS) used strict WGS-based variant calling with VAF ≥2% for CHIP classification, identifying 4,229 CHIP-positive individuals (4.3% of cohort) [^bick2020]. Varying the detection threshold substantially changes the apparent prevalence — studies must be interpreted in the context of their sequencing depth and VAF cutoff. #gap/dose-response-unclear — the clinical risk gradient below VAF 1% is not established; it is unknown whether very small clones (<1% VAF) confer meaningful cardiovascular or malignancy risk.

## Vendor and Platform Landscape

Clinical and research CHIP testing platforms differ in sequencing depth, error-correction method, gene panel breadth, and limit of detection (LOD):

| Platform | Vendor | Technology | Panel scope | VAF LOD | Clinical grade | Cost tier |
|---|---|---|---|---|---|---|
| **TwinStrand DuplexSeq** | TwinStrand Biosciences | Duplex sequencing (both DNA strands read independently; errors suppressed ~1000× vs standard NGS) | Custom; 25–100+ genes | ~0.01% | Research / clinical research | $$$$  |
| **Color Health CH panel** | Color Health | Targeted deep NGS | ~30–50 myeloid driver genes | ~0.5–1% | Clinical, direct-to-consumer | $$ |
| **Invitae CH panel** | Invitae | Targeted NGS | ~25 myeloid driver genes | ~0.5–1% | Clinical, physician-ordered | $$ |
| **Quest Clonal CHIP** | Quest Diagnostics | Standard clinical NGS | Core driver gene set | ~2% | Clinical | $ |
| **Research WES/WGS** | Academic labs | WES ~70–100×; WGS ~30× | Exome-wide / genome-wide | ~2% | Research | Varies |

#gap/needs-replication — vendor-specific analytical concordance studies comparing sensitivity/specificity across platforms at matched VAF levels have not been published in a peer-reviewed head-to-head format as of 2026. #gap/unsourced — cost estimates and LOD values above are approximate; see vendor technical documentation for current specifications, which may have changed since knowledge cutoff.

## Panel Gene Composition

### Canonical driver genes (present on most clinical panels)

The following six genes account for the large majority of CHIP mutations detected in population cohorts and are present on essentially all clinical-grade panels:

| Gene | Function | Frequency in Jaiswal 2014 | Cardiovascular risk? |
|---|---|---|---|
| *DNMT3A* | De novo DNA methyltransferase; most common CHIP driver | 403/746 variant-positive individuals (54%) | Moderate (HR ~1.6 CHD in some cohorts; less than TET2) |
| *TET2* | 5-methylcytosine oxidase; loss activates inflammatory macrophage programs | 72/746 (10%) | High — key TET2-NLRP3-IL-1β mechanism [^sano2018] |
| *ASXL1* | Polycomb-repressive complex 2 modifier | 62/746 (8%) | Moderate |
| *JAK2* V617F | Constitutively activating JAK-STAT kinase mutation | 31/746 (4%) | High; strongest early-onset MI signal (OR=12.1) [^jaiswal2017] |
| *PPM1D* | DNA damage-response phosphatase; therapy-associated | Present, lower frequency | Distinct from DNMT3A/TET2 biology; genotoxin-associated |
| *TP53* | Tumor suppressor | 33/746 (4%) | Therapy-associated CHIP context; complex |

Note: gene frequencies above are from Jaiswal 2014 (doi:10.1056/NEJMoa1408617), verified against the phenotype page [[phenotypes/clonal-hematopoiesis]], which was verified against primary PDF. The 746 figure represents persons with somatic mutations (not all n=17,182).

### Expanded panels

Broader panels (50–100 genes) additionally include splicing-factor genes ([[sf3b1|SF3B1]], *SRSF2*, *U2AF1*), IDH enzymes (*IDH1*, *IDH2*), *NRAS*, and other recurrently mutated myeloid genes. Expanded panels improve sensitivity for MDS/AML-progression risk detection; the incremental cardiovascular-risk prediction value of low-frequency driver genes is not established [^niroula2021]. #gap/needs-replication

## Myeloid vs. Lymphoid CHIP: Niroula 2021 Distinction

Niroula et al. 2021 (Nature Medicine; n=55,383 CHIP WES analysis; UKB + MGB Biobank) distinguished **myeloid** somatic mutations (DNMT3A, TET2, ASXL1, JAK2 — M-CHIP) from **lymphoid** somatic mutations (L-CHIP, 235 lymphoid-cancer driver genes) [^niroula2021]. Each class associates preferentially with lineage-specific hematologic malignancy risk: M-CHIP with myeloid malignancies (HR=7.0; 95% CI 5.0–9.8; P<0.001) and L-CHIP with lymphoid malignancies (HR=4.2; 95% CI 2.7–6.7; P<0.001). Critically, **L-CHIP was not associated with cardiovascular risk** — only M-CHIP (specifically large clones) conferred increased all-cause mortality (HR=1.60; 95% CI 1.29–1.98; P<0.001) and incident CAD (HR=1.35; 95% CI 1.09–1.66; P=0.005). This distinction has implications for clinical panel design: myeloid-driver panels capture the cardiovascular-risk biology; lymphoid-driver expansion adds malignancy-risk information specific to the lymphoid lineage.

## Aging Trajectory and Prevalence

CHIP prevalence is strongly age-dependent, rising exponentially from midlife onward. Key cohort data (primary verification on [[phenotypes/clonal-hematopoiesis]]):

| Age range | CHIP prevalence (VAF ≥2%) | Source |
|---|---|---|
| <40 yr | ~0.5–1% | Jaiswal 2014 |
| 40–49 yr | ~1–2% | Jaiswal 2014 |
| 50–59 yr | ~2–3.5% | Jaiswal 2014 |
| 60–69 yr | ~5.6% | Jaiswal 2014 [^jaiswal2014] |
| 70–79 yr | ~9.5% | Jaiswal 2014 [^jaiswal2014] |
| 80–89 yr | ~11.7% | Jaiswal 2014 [^jaiswal2014] |
| ≥90 yr | ~18.4% | Jaiswal 2014 [^jaiswal2014] |
| >65 yr | ~10% (>10% in some cohorts) | Genovese 2014 [^genovese2014] |

> Note: All prevalence figures are at VAF ≥2% using standard WES depth (~70×). Studies using error-corrected sequencing or lower VAF thresholds report substantially higher frequencies at every age, potentially approaching the majority of adults over 60 for VAF ≥0.1% [^bick2020].

The clone size doubles approximately every 7–10 years in slowly expanding CHIP, with high inter-individual variability by driver gene. *JAK2* V617F expands faster than *DNMT3A* or *TET2* on average — see [[phenotypes/clonal-hematopoiesis]] for the detailed longitudinal clone-trajectory data.

## Clinical Outcome Associations

### All-cause mortality and cardiovascular disease

From the two landmark 2014 cohorts (quantitative data verified at [[phenotypes/clonal-hematopoiesis]]):

- **All-cause mortality HR 1.4** (95% CI 1.1–1.8; P=0.02) — Jaiswal 2014 [^jaiswal2014]
- **Coronary heart disease HR 2.0** (95% CI 1.2–3.5; P=0.02) — Jaiswal 2014 [^jaiswal2014]
- **Ischemic stroke HR 2.6** (95% CI 1.3–4.8; P=0.003) — Jaiswal 2014 [^jaiswal2014]
- **Hematologic malignancy HR 11.1** (95% CI 3.9–32.6) — Jaiswal 2014; **HR 12.9** (95% CI 5.8–28.7; P<0.001) — Genovese 2014 [^jaiswal2014][^genovese2014]

### Heart failure prognosis: Dorsheimer 2019

In a cohort of 200 patients with chronic ischemic heart failure (JAMA Cardiology 2019), CHIP mutations were detected in 38 patients (18.5%); most common drivers were DNMT3A (14 patients), TET2 (9 patients), KDM6A (4 patients), and BCOR (3 patients). At median follow-up of 4.4 years, patients carrying *TET2* or *DNMT3A* mutations had a **2.1-fold increased risk of death** (HR=2.1; 95% CI 1.0–4.2; P=0.04 multivariable) and **2.1-fold increased risk of the combined endpoint of death or HF hospitalization** (HR=2.1; 95% CI 1.1–4.0; P=0.02) compared to non-CHIP carriers, with a significant dose-response relationship between VAF and outcome severity [^dorsheimer2019]. This establishes CHIP (specifically TET2/DNMT3A mutations) as a prognostic biomarker in HF populations beyond its general-population cardiovascular risk.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — TET2-NLRP3-IL-1β axis functional in human monocytes ex vivo |
| Phenotype conserved in humans? | yes — mortality and CV associations confirmed in multiple independent human cohorts |
| Replicated in humans? | yes — Jaiswal 2014, Genovese 2014, Jaiswal 2017, Dorsheimer 2019 all independently confirm CV signal |

### Germline susceptibility loci: Bick 2020

Bick et al. 2020 (TOPMed; n=97,691 WGS) identified three germline genetic loci associated with CHIP susceptibility, including a locus at TET2 specific to individuals of African ancestry involving a causal variant that disrupts a TET2 distal enhancer, increasing HSC self-renewal [^bick2020]. This establishes a germline-to-CHIP pathway beyond stochastic somatic mutation accumulation. Clinical implication: individuals with germline CHIP-predisposition loci may benefit from earlier surveillance.

## Inflammatory Mechanism and Downstream Biology

The cardiovascular risk of CHIP is not mediated by the mutation per se but by the inflammatory phenotype of cells derived from the mutant clone — specifically macrophages.

**TET2-LoF mechanism:** TET2 normally demethylates the *NLRP3* promoter in macrophages; loss of TET2 elevates *NLRP3* expression → increased NLRP3 inflammasome activation → excess IL-1β and IL-18 secretion → atherosclerotic plaque acceleration and systemic inflammaging amplification. Sano et al. 2018 used CRISPR-mediated Tet2 and Dnmt3a inactivation in bone marrow transplant plus angiotensin-II challenge, demonstrating that either mutation accelerated cardiac hypertrophy, diminished cardiac function, and promoted cardiac and renal fibrosis in mice [^sano2018]. #gap/no-fulltext-access — Sano 2018 is closed-access; the mechanism claim above is attributed to the abstract; the IL-1β/NLRP3 specifics cannot be confirmed against the full methods without the PDF.

This mechanism makes CHIP a molecular interface between [[genomic-instability]] (the somatic mutation origin) and [[chronic-inflammation]] (the downstream effector biology).

## Intervention-Responsive Evidence

### IL-1β blockade (TET2-CHIP–specific)

CANTOS trial post-hoc (Svensson et al. 2022, JAMA Cardiology): cardiovascular benefit from canakinumab (anti-IL-1β monoclonal antibody) was concentrated in TET2-CHIP carriers — non-CHIP and non-TET2-CHIP participants showed attenuated benefit [^svensson2022]. This is the first human evidence that TET2-CHIP-specific IL-1β hyperactivation is pharmacologically targetable. #gap/needs-replication — post-hoc exploratory analysis; a prospective TET2-CHIP-enriched trial has not completed.

### IL-6 receptor variants (population genetics)

Vlasschaert et al. 2023 (Circulation; UK Biobank n=451,180) found that a coding variant in the IL-6 receptor gene (*IL6R* p.Asp358Ala, rs2228145-C — a genetic proxy for IL-6 receptor blockade) attenuated CHIP-mediated coronary artery disease risk [^vlasschaert2023]. Importantly, this protective effect was specific to **non-DNMT3A CHIP** and **large-VAF CHIP (≥10%)**, but was not observed for DNMT3A-CHIP alone — a finding concordant with the CANTOS observation that TET2-CHIP (not DNMT3A-CHIP) patients had greater canakinumab benefit. This supports IL-6 pathway inhibition (tocilizumab) as a mechanistically rational intervention specifically for non-DNMT3A CHIP-mediated CV risk. #gap/needs-replication — genetic proxy instrument; no RCT evidence for IL-6 blockade in CHIP-positive patients.

### SGLT2 inhibitors (emerging)

SGLT2 inhibitors have been proposed to attenuate CHIP-mediated HF risk based on their anti-inflammatory and cardioprotective effects, with mechanistic plausibility via NLRP3 inflammasome suppression. Clinical trial data specifically in CHIP-positive HF patients are not yet available. #gap/unsourced — this is mechanistic rationale, not clinical evidence.

### Allogeneic HSCT

Allogeneic bone marrow transplantation eradicates CHIP clones but carries ~5–10% transplant-related mortality in older adults and is not aging-indicated. Relevant only in the context of hematologic malignancy or pre-transplant workup where CHIP affects graft-versus-host biology.

## Clinical Use and Screening Landscape

No consensus population-screening protocol exists for CHIP in otherwise healthy individuals as of 2026. Current clinical indications for CHIP sequencing:

1. **Unexplained cytopenias** — rule out CCUS (clonal cytopenia of undetermined significance) or early MDS
2. **Pre-allogeneic transplant donor workup** — donor CHIP affects graft function and graft-versus-host disease risk
3. **Cardiovascular risk stratification** — no guideline-recommended indication yet; being evaluated in high-risk CV prevention programs
4. **Incidental detection** — from tumor tissue sequencing where clonal blood-cell contamination yields CHIP-related variants

The key clinical decision problem after a positive result is unresolved: no proven CHIP-specific management algorithm exists beyond standard cardiovascular risk factor control. #gap/long-term-unknown

## Limitations and Open Gaps

1. **VAF threshold arbitrariness** — The ≥2% cutoff is a detection artifact of standard WES depth, not a biological transition point. Risk likely scales continuously with clone size, but the risk gradient below 1% VAF is not characterized. #gap/dose-response-unclear

2. **Driver-gene heterogeneity** — Cardiovascular risk concentrates in *TET2* and *JAK2* mutations; *DNMT3A* CHIP may have a distinct or weaker CV risk profile. Panels that report "CHIP-positive" without driver-gene stratification may conflate mechanistically distinct entities. #gap/needs-replication

3. **Clonal evolution unpredictability** — VAF at a single time point does not predict expansion rate; longitudinal clone tracking is not standard clinical practice. The subpopulation of CHIP carriers who will progress to MDS/AML cannot be identified from baseline sequencing alone. #gap/long-term-unknown

4. **Small-clone clinical relevance** — The clinical significance of clones detectable only with error-corrected sequencing (VAF 0.01–0.5%) is not established. Marketing of high-sensitivity platforms should not outpace evidence for the clinical actionability of small clones. #gap/needs-replication

5. **Analytical concordance across platforms** — No peer-reviewed head-to-head comparison of clinical CHIP panels (Color, Invitae, Quest, TwinStrand) has been published. Concordance at VAF near platform LODs is unknown. #gap/needs-replication

6. **What to do with a positive result** — Beyond managing traditional CV risk factors, no CHIP-specific treatment algorithm has been validated. Informing patients of their CHIP status may cause anxiety without providing actionable clinical guidance. #gap/long-term-unknown

## Cross-References

- [[phenotypes/clonal-hematopoiesis]] — canonical phenotype page; biology, driver landscape, cardiovascular mechanism, therapeutic implications (primary home for all Jaiswal/Genovese/Fuster quantitative data)
- [[hallmarks/genomic-instability]] — driver mutations are genome-integrity failures in aging HSCs
- [[hallmarks/stem-cell-exhaustion]] — CHIP reflects HSC clonal architecture changes with aging
- [[hallmarks/chronic-inflammation]] — TET2-LoF macrophages amplify IL-1β/IL-18/NLRP3 axis
- [[hematopoietic-stem-cells]] — canonical home for HSC aging biology and CHIP epidemiology
- [[tet2]] — protein page for TET2 (verified)
- [[dnmt3a]] — protein page for DNMT3A
- [[nlrp3-inflammasome]] — mechanistic effector of TET2-LoF macrophage hyperactivation
- [[canakinumab]] — IL-1β blocking antibody; CANTOS-CHIP subgroup
- [[biomarkers/telomere-length-leukocyte]] — complementary blood-based aging biomarker (different mechanism: telomere attrition vs somatic mutation)
- [[frameworks/biological-age-measurement]] — cross-biomarker comparison MOC
- [[atherosclerosis]] — TET2-CHIP accelerates plaque formation
- [[studies/jaiswal-2014-chip-adverse-outcomes]] — primary study page
- [[studies/genovese-2014-chip-cancer-risk]] — primary study page

## Footnotes

[^jaiswal2014]: [[studies/jaiswal-2014-chip-adverse-outcomes]] · doi:10.1056/NEJMoa1408617 · Jaiswal S, Fontanillas P, Flannick J, Manning A et al. · n=17,182 · observational (WES of peripheral blood DNA from 22 cohorts) · NEJM 2014;371:2488-2498 · HR=1.4 (95% CI 1.1–1.8; P=0.02) all-cause mortality; HR=2.0 (95% CI 1.2–3.5; P=0.02) CHD; HR=2.6 (95% CI 1.3–4.8; P=0.003) ischemic stroke; HR=11.1 (95% CI 3.9–32.6) hematologic malignancy; CHIP prevalence: 5.6% at 60–69 yr, 9.5% at 70–79 yr, 11.7% at 80–89 yr, 18.4% at ≥90 yr · model: human · local PDF: verified in archive (path confirmed on [[phenotypes/clonal-hematopoiesis]])

[^genovese2014]: [[studies/genovese-2014-chip-cancer-risk]] · doi:10.1056/NEJMoa1409405 · Genovese G, Kähler AK, Handsaker RE, Lindberg J et al. · n=12,380 (Swedish national cohort) · observational (WES of peripheral blood DNA) · NEJM 2014;371:2477-2487 · CHIP in 10% at >65 yr and ~1% at <50 yr; HR=12.9 (95% CI 5.8–28.7; P<0.001) hematologic malignancy; HR=1.4 (95% CI 1.0–1.8; P=0.03) death · model: human · local PDF: verified in archive (path confirmed on [[phenotypes/clonal-hematopoiesis]])

[^bick2020]: doi:10.1038/s41586-020-2819-2 · Bick AG, Weinstock JS, Nandakumar SK et al. (TOPMed consortium) · n=97,691 WGS participants · observational (multi-ancestry WGS, TOPMed program) · Nature 2020;586:763-768 · 4,229 CHIP-positive individuals (4.3% of cohort); identified 3 germline loci influencing CHIP susceptibility; TET2 enhancer disruption in African-ancestry locus increases HSC self-renewal · model: human (diverse ancestries) · local PDF: verified in archive

[^niroula2021]: doi:10.1038/s41591-021-01521-4 · Niroula A, Sekar A, Murakami MA et al. · n=55,383 CHIP WES (46,706 UKB + 8,677 MGB Biobank); 420,969 for mCA analysis · observational (WES + SNP-array; UKB and MGB Biobank) · Nature Medicine 2021;27(11):1921-1927 · distinguished myeloid (DNMT3A/TET2/ASXL1/JAK2) vs lymphoid somatic mutations; M-CHIP associated with myeloid malignancy (HR=7.0; 95% CI 5.0–9.8; P<0.001) and L-CHIP with lymphoid malignancy (HR=4.2; 95% CI 2.7–6.7; P<0.001); myeloid CH = cardiovascular risk (large M-CHIP: HR=1.60 all-cause mortality; HR=1.35 CAD); L-CHIP not associated with mortality or CAD; integrating blood-count parameters enables malignancy-risk stratification · model: human · local PDF: verified in archive

[^dorsheimer2019]: doi:10.1001/jamacardio.2018.3965 · Dorsheimer L, Assmus B, Rasper T et al. · n=200 chronic ischemic heart failure patients (bone marrow-derived mononuclear cells sequenced) · observational (prospective cohort; median follow-up 4.4 yr) · JAMA Cardiology 2019;4(1):25-33 · CHIP in 38/200 (18.5%); top drivers: DNMT3A (14), TET2 (9), KDM6A (4), BCOR (3); primary outcome HR applies specifically to TET2 or DNMT3A carriers: HR=2.1 (95% CI 1.1–4.0; P=0.02) for death or HF hospitalization in multivariable Cox model; HR=2.1 (95% CI 1.0–4.2; P=0.04) for death alone; significant VAF dose-response · model: human · local PDF: verified in archive

[^sano2018]: doi:10.1161/CIRCRESAHA.118.313225 · Sano S, Oshima K, Wang Y, Katanasaka Y, Sano M, Walsh K · in-vivo (CRISPR-edited bone marrow transplant + angiotensin-II challenge) · Circulation Research 2018;123(3):335-341 · Tet2 or Dnmt3a inactivation in BM cells → greater cardiac hypertrophy, diminished cardiac function, cardiac and renal fibrosis after Ang-II challenge; TET2 inactivation more readily expands mutant blood cells; distinct inflammatory pathways for each gene · model: mus-musculus · archive status: not_oa (closed access)

[^jaiswal2017]: [[studies/jaiswal-2017-chip-cvd-risk]] · doi:10.1056/NEJMoa1701719 · Jaiswal S, Natarajan P, Silver AJ, Gibson CJ, Bick AG et al. · n=4,726 CHD cases + 3,529 controls (4 case-control studies) + 3 prospective cohorts · case-control + prospective cohort analysis · NEJM 2017;377:111-121 · CHIP associated with HR=1.9 (95% CI 1.4–2.7; P<0.001) incident CHD; JAK2 V617F OR=12.1 in early-onset MI analysis · model: human · local PDF: verified in archive

[^steensma2015]: [[studies/steensma-2015-chip-definition]] · doi:10.1182/blood-2015-03-631747 · Steensma DP, Bejar R, Jaiswal S et al. · working-group consensus · Blood 2015;126(1):9-16 · proposed CHIP terminology and VAF ≥2% operational definition; distinguished CHIP from CCUS and MDS; progression risk ~0.5–1%/yr · model: human · local PDF: verified in archive

[^svensson2022]: [[studies/svensson-2022-cantos-chip-tet2]] · doi:10.1001/jamacardio.2022.0386 · Svensson EC et al. · exploratory subgroup analysis of CANTOS RCT · JAMA Cardiology 2022 · canakinumab CV benefit concentrated in TET2-CHIP carriers; attenuated/absent in non-TET2-CHIP and non-CHIP · model: human · #gap/needs-replication — post-hoc exploratory; #gap/no-fulltext-access (PDF download failed in archive — confirmed on [[phenotypes/clonal-hematopoiesis]])

[^vlasschaert2023]: doi:10.1161/CIRCULATIONAHA.122.062126 · Vlasschaert C, Heimlich JB, Rauh MJ, Natarajan P, Bick AG · n=451,180 UK Biobank exome participants (14,305 excluded for prevalent CAD at enrollment; 30,967 incident CAD events in the analysis) · observational (genetic proxy for IL-6R blockade; IL6R p.Asp358Ala rs2228145-C) · Circulation 2023;147(4):358-360 · CHIP (especially non-DNMT3A CHIP and large-VAF CHIP ≥10%) associated with incident CAD; IL6R p.Asp358Ala protective against this risk — effect not observed for DNMT3A-CHIP alone; concordant with CANTOS TET2-CHIP finding; supports IL-6 pathway as lineage-specific mediator of CHIP cardiovascular effect · model: human · local PDF: verified in archive
