---
type: study
doi: 10.3389/fragi.2023.1258184
pmid: 38500495
pmc: PMC10944877
title: "Identification of dihydromyricetin as a natural DNA methylation inhibitor with rejuvenating activity in human skin"
authors: [Falckenhayn C, Bienkowska A, Söhle J, Wegner K, Raddatz G, Kristof B, Kuck D, Siegner R, Kaufmann R, Korn J, Baumann S, Lange D, Schepky A, Völzke H, Kaderali L, Winnefeld M, Lyko F, Grönniger E]
year: 2024
journal: Frontiers in Aging
volume: 4
article: 1258184
study-design: in-vitro + in-vivo
organism: homo-sapiens (cultured keratinocytes + topical in-vivo volunteers)
n-subjects: 13 (keratinocyte donor lines) + 30 (in-vivo vehicle-controlled) + 19 (in-vivo gene expression)
intervention: ["[[dihydromyricetin]]"]
hallmarks-tested: ["[[epigenetic-alterations]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [dhm-identified-as-dnmt1-inhibitor-spa-screen, 1800-natural-products-640-fda-drugs-screened, global-hypomethylation-n13-keratinocytes-p1.4e-33, dnam-age-reduction-delta-1.86yr-skin-blood-clock-delta-2.03yr-epidermis-clock, vehicle-controlled-in-vivo-12444-probes-shifted-toward-young-epidermis-pattern, epidermal-thickness-increase-3d-skin-model]
local-pdf: null
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Full PDF read end-to-end (all 13 pages including methods). All quantitative claims verified against primary source. Corrections applied: (1) in-vivo arm design confirmed split-site; (2) gene expression arm age range added (50–65 yr); (3) 3D model DHM concentration (20 µM) and treatment duration (6 wk) added; (4) wrinkle-score predictor result (Δ−2.13 units, p<0.05) added; (5) myricetin IC₅₀ comparator (43.37 µM) noted. IC₅₀ for DHM not in main text (Supplementary only) — gap tag retained."
literature-checked-through: 2026-05-19
---

# Identification of Dihydromyricetin as a Natural DNMT Inhibitor with Rejuvenating Activity in Human Skin (Falckenhayn et al. 2024)

**Falckenhayn C, Bienkowska A, Söhle J, et al. · *Frontiers in Aging* 4:1258184 · Published 4 March 2024 · DOI: 10.3389/fragi.2023.1258184**

18 authors. PMID: 38500495. PMC: PMC10944877. Gold open access (CC BY). Citation count: 21 (OpenAlex, 2026-05-19; FWCI 29.2; 100th citation percentile). Affiliated institutions: Beiersdorf AG (Hamburg), German Cancer Research Center / DKFZ (Heidelberg), University Medicine Greifswald.

## TL;DR

A three-arm study combining biochemical screening, in-vitro keratinocyte epigenomics, and a vehicle-controlled topical in-vivo trial. A library of **1,800 natural products + 640 FDA-approved drugs** was screened against DNMT1 via SPA (scintillation proximity assay); **dihydromyricetin (DHM)** emerged as a DNMT1 inhibitor. In **n=13 independent primary human keratinocyte donor lines** treated at 20 µM for 3 days, DHM produced statistically significant global hypomethylation (101,067 differentially methylated probes; p=1.4×10⁻³³) and reduced DNAm-calculated cellular age by **Δ −1.86 yr** (Skin & Blood clock) and **Δ −2.03 yr** (epidermis clock), both p<0.05 Wilcoxon rank-sum. In a **vehicle-controlled in-vivo arm** (n=30 female volunteers, topical 0.15% w/w DHM, 2 weeks followed by sub-erythemal UV challenge), DHM shifted methylation at **12,444 age-dependent probes toward a young-epidermis pattern**, with >95% of shifted probes moving in the juvenile direction. A 3D reconstructed skin model showed increased epidermal thickness with DHM treatment. This paper is the **mechanistic anchor** for the [[dihydromyricetin]] compound page and the proximate source for the DNMT-inhibitor claim cited across multiple downstream wiki pages.

## Background and Hypothesis

Age-associated DNA hypermethylation — particularly at bivalent chromatin regions bearing both H3K4me3 and H3K27me3 marks — accumulates in aging human tissues including the epidermis [^bormann2016]. The founding epidermis-specific methylation clock (Bormann et al. 2016) established that keratinocyte methylomes drift systematically with age and can be estimated with MAE <5.25 yr. However, whether this epigenetic drift is pharmacologically reversible was untested.

The rationale for targeting DNMT1 specifically is that it is the **maintenance methyltransferase** responsible for copying CpG methylation from parental to daughter strands during replication [^dnmt1wiki]. In aging tissue, progressive acquisition of methylation at previously unmethylated sites (particularly bivalent-region CpGs) may reflect aberrant DNMT1 recruitment or activity; partial inhibition of DNMT1 was hypothesized to counteract this drift without the global and cytotoxic demethylation caused by nucleoside analogs (azacitidine, decitabine).

Falckenhayn et al. therefore designed a screen to identify naturally occurring small-molecule DNMT1 inhibitors that would be compatible with topical cosmetic application — a design constraint ruling out cytotoxic mechanism-based inhibitors.

## Methods

### Arm A — Biochemical screen (SPA assay)

- **Assay:** 384-well scintillation proximity assay (SPA) using full-length recombinant human DNMT1 protein. The SPA format allows continuous monitoring of methyl-group transfer from radiolabeled S-adenosylmethionine (SAM) to hemimethylated oligonucleotide substrate without separation steps.
- **Library:** 1,800 natural substances + 640 FDA-approved drugs = **2,440 compounds total**, screened in two independent replicate experiments (Pearson r = 0.78 inter-replicate reproducibility).
- **Hit selection:** compounds showing consistent inhibition across both replicates were advanced to dose-response confirmation and keratinocyte validation. DHM was identified as the lead natural-product hit.

The binding mode (competitive vs. allosteric vs. substrate-competitive) was **not characterized** in this paper. The paper establishes DNMT1 as the target but does not present crystal structure or kinetic mechanism data. #gap/no-mechanism — full mechanistic characterisation of DHM-DNMT1 binding requires structural biology work (ITC, X-ray co-crystallography, or cryo-EM) not performed here.

### Arm B — Primary human keratinocyte epigenomics (n=13)

- **Cell source:** Primary human epidermal keratinocytes from **n=13 independent donor lines** (diverse donors; ages not fully characterized in available summary).
- **Treatment:** 20 µM DHM vs. 0.1% DMSO vehicle control; 3 days.
- **Platform:** Illumina EPIC 850k methylation array (>850,000 CpG sites).
- **Endpoints:** (1) global differential methylation (number of differentially methylated probes at threshold); (2) DNAm-calculated cellular age via two clocks — the Horvath-derived **Skin & Blood clock** (Horvath 2018) and a newly trained **human epidermis clock** (built on the Bormann 2016 cohort; predecessor of the Qi 2026 23k/173-CpG clock).

### Arm C — Vehicle-controlled in-vivo topical (n=30)

- **Subjects:** n=30 female volunteers (ages not reported in main text for this arm).
- **Treatment:** topical 0.15% w/w DHM formulation (oil-in-water emulsion) vs. vehicle control applied to the **lower back** for **2 weeks**, followed by sub-erythemal UV challenge (repetitive low-dose UV per Holzscheck et al. 2020b protocol).
- **Design:** **split-site** — DHM and vehicle applied to defined separate skin areas on the same volunteer. Suction blister samples collected 24 h after last UV exposure; DNA isolated and analyzed on Infinium EPIC 850k arrays.
- **Platform:** Illumina Infinium EPIC 850k methylation array on suction-blister epidermis (not tape-strip).
- **Endpoint:** number of age-dependent probes shifted toward a young-epidermis reference methylation pattern. Age-dependent probes derived from intersection of 16,389 DHM-differentially-methylated CpGs (in-vivo arm) with 270,642 age-dependent probes (SHIP-TREND-1 cohort, 102 younger 28–40 yr vs. 102 older 65–88 yr).

### Arm D — In-vivo gene expression follow-on (n=19, 8 weeks)

- **Subjects:** n=19 **female** volunteers, ages **50–65 years**.
- **Treatment:** 8 weeks topical 0.15% w/w DHM (oil-in-water emulsion) vs. vehicle applied to the **inner forearm**.
- **Sampling:** suction blisters for RNA; NanoString nCounter system with 34 qRT-PCR marker genes (selected from 2,820 genes differentially expressed between ≥70 yr and ≤40 yr volunteers in SHIP-TREND-1). Gene expression normalized to 5 housekeeping genes (GAPDH, GUSB, OAZ1, PUM1, UBC).
- **Endpoint:** mRNA expression of 34 age-related epigenetically silenced marker genes. **All 34 genes showed increased mRNA expression** in DHM-treated vs. vehicle-treated epidermis (p<0.05, Wilcoxon rank-sum). Genes spanned ECM organization, immune system, signal transduction, autophagy, transport of small molecules, differentiation and stratification, cell junction organization, and metabolism and lipids categories.

### 3D skin model (organotypic skin aging model)

- **Model:** Reconstructed human epidermis using non-woven fibrous scaffold M3-II Bemcot (Asahi Kasei, Tokyo). Primary keratinocytes from a single 42-year-old donor grown with primary fibroblasts from either young (18–33 yr) or old (58–67 yr) donors. After 6 weeks of culture establishment, DHM added for an additional **6 weeks**.
- **Treatment:** **20 µM DHM** (dissolved in 0.1% DMSO) vs. vehicle (0.1% DMSO) in medium.
- **Endpoint:** epidermal thickness measured by Fiji software on AEMA fast-stained histological sections. Old skin models showed significantly (p<0.01, Wilcoxon rank-sum) thinner epidermis than young models. DHM treatment of old skin models increased epidermal thickness significantly (p<0.05, Wilcoxon rank-sum) toward the young model thickness.

## Key Findings

### 1. DHM inhibits DNMT1 in a biochemical SPA assay

From the screen of 2,440 compounds, DHM was identified as a reproducible (r=0.78 across two independent screen replicates) inhibitor of full-length recombinant human DNMT1. IC₅₀ for DHM is reported in Supplementary Figure S1A (not reproduced in the main text); myricetin (the parent flavonol) has a mean IC₅₀ of 43.37 µM, and DHM is described as active "in the similar concentration range like myricetin." Quantitative IC₅₀ / Kᵢ data for DHM itself are in supplementary materials only and were not extracted here. The mechanism of inhibition (competitive with SAM, competitive with DNA substrate, or allosteric) was not characterised in this paper.

**Notably, this paper establishes DNMT1 as the specific target.** DNMT3A and DNMT3B inhibition by DHM was not assayed; the selectivity profile vis-à-vis the de novo methyltransferases is unknown.

### 2. Global hypomethylation in primary human keratinocytes (n=13)

In n=13 independent primary human keratinocyte donor lines treated with 20 µM DHM for 3 days:

| Endpoint | Result |
|---|---|
| Differentially methylated probes (850k array) | **101,067** |
| Statistical test | t-test |
| p-value | **1.4×10⁻³³** |
| Direction | Global hypomethylation |

The scale of the effect (>100,000 probes out of ~850,000 assayed, representing ~12% of the array) indicates a broad, genome-wide shift rather than a locus-specific effect. This is consistent with DNMT1 inhibition producing passive demethylation across replication-dependent CpG sites. However, because DHM is a polypharmacological flavonoid (also an antioxidant and NF-κB modulator), the attribution of this global hypomethylation specifically to DNMT1 inhibition — rather than secondary effects on chromatin or cell biology — is supported by the biochemical assay but not definitively proven in the cellular context. #gap/needs-replication

### 3. DNAm-age reduction in keratinocytes — two clocks

| Predictor | Δ value | Statistical test | p-value |
|---|---|---|---|
| Skin & Blood clock (Horvath 2018) | **−1.86 yr** | Wilcoxon rank-sum | **p<0.05** |
| Human epidermis clock (Bormann 2016 lineage) | **−2.03 yr** | Wilcoxon rank-sum | **p<0.05** |
| Wrinkle predictor (Bienkowska et al., unpublished at time of publication) | **−2.13 units** | Wilcoxon rank-sum | **p<0.05** |

The consistency across three independent epigenomic predictors (two age clocks + one wrinkle-grade predictor, all trained on different probe sets and/or different phenotypic targets) strengthens the biological interpretation. The epidermis clock result is particularly relevant given that DHM was tested in keratinocytes, the primary cell type for which the epidermis clock was developed. The ~2-year magnitude of DNAm-age reduction is meaningful relative to the clock's MAE (<5.25 yr in Bormann 2016), representing a detectable effect within the precision range of the instrument. The wrinkle-score predictor result indicates the methylome shift is directionally consistent with a functionally "younger" epidermal phenotype, not merely a clock-artifact.

**Important design note:** these are in-vitro results from cultured keratinocytes, not human skin in vivo. Cell culture conditions (absence of dermis, UV, mechanical stress, immune cells) may not recapitulate the full in-vivo aging context. The clock results indicate that the methylome shifts in a direction associated with chronological-age reduction; they do not establish that this shift corresponds to functionally "younger" keratinocytes in a clinical sense. #gap/needs-human-replication

### 4. Vehicle-controlled in-vivo: 12,444 probes shift toward young-epidermis pattern

In the vehicle-controlled in-vivo arm (n=30 female volunteers, split-site design, 0.15% DHM topical o/w emulsion, lower back, 2 weeks + sub-erythemal UV, suction-blister sampling):

| Endpoint | Result |
|---|---|
| Total DHM-differentially-methylated CpGs (in-vivo vs vehicle) | **16,389** |
| Age-dependent probes (102 young vs. 102 old in SHIP-TREND-1) | **270,642** |
| Intersection (DHM-dependent AND age-dependent) | **12,444** |
| Direction of shift | **>95% toward young-epidermis pattern** |
| Comparator | Vehicle-treated skin area (split-site, same volunteer) |

This is the critical in-vivo human arm. The split-site vehicle-controlled design allows within-person comparison, removing systemic and temporal confounds. The 12,444-probe intersection (DHM-moved probes that overlap with age-dependent probes) shifting >95% toward the young-epidermis reference indicates that topical DHM — at a cosmetically relevant 0.15% w/w concentration, over 2 weeks — produces a measurable and directionally specific methylome shift in intact human skin, not merely in isolated cultured cells.

The short duration (2 weeks) and the UV-challenge protocol mean these results represent early/acute epigenetic response under a defined UV stimulus, not a steady-state aging-reversal signal. Whether the shift is sustained, whether it represents a durable reprogramming event, and whether it corresponds to the age-dependent probe set most relevant to aging (vs. UV-response probes) requires longer-term study. #gap/long-term-unknown

### 5. Increased epidermal thickness in 3D skin model

In the organotypic 3D skin aging model (old donor fibroblasts + single 42-yr donor keratinocytes; M3-II Bemcot scaffold; 20 µM DHM added for 6 weeks after 6 weeks of culture establishment), DHM significantly increased epidermal thickness (p<0.05, Wilcoxon rank-sum) compared to vehicle control. Old skin models were significantly thinner than young models at baseline (p<0.01, Wilcoxon rank-sum). The absolute thickness values (µm) are shown in Figure 5C box plots but not stated numerically in the main text. Additionally, DHM-conditioned medium from keratinocytes significantly increased fibroblast proliferation (p<0.05, Wilcoxon signed rank test, n=6), suggesting a paracrine pro-rejuvenating effect on the dermal compartment.

**Note:** epidermal thickness increase is a distinct endpoint from the DNAm-clock-age reduction — the former is a structural/histological readout in a 3D tissue model (20 µM DHM, 6-week treatment); the latter is an epigenomic readout in cultured monolayer keratinocytes (20 µM DHM, 3-day treatment). These are complementary rather than redundant.

## Mechanism Summary

The paper proposes the following chain:

1. **DHM inhibits DNMT1** (established: biochemical SPA assay, 2,440-compound screen)
2. **DNMT1 inhibition in dividing keratinocytes → partial failure to copy age-acquired hypermethylation at bivalent-region CpGs** (inferred from the global hypomethylation finding and the age-clock reduction; not directly demonstrated with locus-specific resolution)
3. **Topical DHM reaches keratinocytes in intact skin at sufficient concentrations** (supported by the vehicle-controlled in-vivo arm showing probe-level shifts; BUT intracellular concentration in basal keratinocytes after topical application is NOT directly measured — this middle link relies on inferring sufficient bioavailability from the observable methylome shift) #gap/no-mechanism
4. **Partial reversal of age-acquired hypermethylation → DNAm-clock-age reduction** (established in cultured keratinocytes; the in-vivo arm shows directional probe shifts but does not directly report clock-age changes in the n=30 cohort)

The binding mode of DHM to DNMT1 is unknown. The paper does not present structural data, competitive kinetics, or site-directed mutagenesis studies to localise the binding site. Distinguishing DNMT1-specific inhibition from secondary effects (ROS scavenging altering 5-hmC levels, NF-κB-mediated changes in DNMT expression, or altered cell-cycle progression affecting passive demethylation) is not possible from the published data.

## Industry Context and Conflict of Interest

All 18 authors are affiliated with either **Beiersdorf AG** (Hamburg, Germany), **DKFZ / German Cancer Research Center** (Heidelberg), or **University Medicine Greifswald**. The Beiersdorf affiliation is dominant (majority of authors). Funding by Beiersdorf is disclosed. Conflicts of interest: Beiersdorf authors have commercial interest in DHM as a cosmetic active.

The academic collaborators (Lyko / DKFZ; Völzke + Kaderali / Greifswald) add independent epigenomics and biostatistics expertise. The involvement of the Lyko group (Frank Lyko is a leading academic authority on DNA methylation) provides methodological credibility to the SPA assay and the methylation analysis. Nevertheless, the industry co-authorship structure means independent replication is the next required step. #gap/needs-replication

## Downstream Impact on the Wiki

This paper is the **mechanistic anchor** for DHM's DNMT-inhibitor classification in the wiki:

- **[[dihydromyricetin]]** compound page — DNMT1-inhibition mechanism section cites this paper as sole primary source for the biochemical and keratinocyte claims. Every quantitative value on that page (n=13, 101,067 probes, p=1.4×10⁻³³, Δ−1.86 yr, Δ−2.03 yr, n=30, 12,444 probes, >95% direction) ultimately traces back to this study.
- **[[studies/qi-2026-dhm-epigenetic-skin-aging]]** — Qi 2026 cites Falckenhayn 2024 as the mechanistic basis for the DHM-DNMT inhibitor hypothesis underlying the cosmetic serum trial.
- **[[dnmt1]]** protein page — the DNMT1-as-aging-druggability-target context includes DHM as a candidate non-nucleoside modulator.
- **[[epigenetic-alterations]]** hallmark — the in-vivo arm provides human keratinocyte evidence for partial pharmacological reversal of age-associated methylation drift.

## Strengths

- **Screen scale:** 2,440 compounds in two independent replicate screens is a credible hit-identification effort, not a targeted assay of a pre-selected candidate.
- **n=13 independent donor lines** for keratinocyte results is robust for in-vitro work; minimizes donor idiosyncrasy effects.
- **Vehicle-controlled in-vivo arm** is a critical design feature that distinguishes this paper from purely in-vitro characterizations; most flavonoid biology papers do not include a human skin vehicle-controlled arm.
- **Two clock validation** (Skin & Blood clock + epidermis clock) for the keratinocyte age-reduction result increases confidence vs. a single-clock readout.
- **Gold OA publication** (CC BY) with PMC availability.
- **Collaboration with independent academic epigenomics group** (Lyko / DKFZ) for methodological credibility.

## Limitations and Gaps

- **DNMT1 binding mode uncharacterised** — the paper does not establish the molecular mechanism of DNMT1 inhibition (competitive, allosteric, etc.). #gap/no-mechanism
- **Selectivity unknown** — DNMT3A and DNMT3B were not assayed; DHM may also inhibit the de novo methyltransferases. #gap/no-mechanism
- **IC₅₀ / Kᵢ in supplementary only** — quantitative potency data for DHM are in Supplementary Figure S1A; myricetin IC₅₀ = 43.37 µM (mean) is the nearest proxy stated in the main text; DHM is reported "in the similar concentration range." Full potency characterisation (dose-response curve, Kᵢ) not reproduced in the main text.
- **In-vitro → in-vivo concentration gap** — the 20 µM DHM dose used in keratinocyte culture and 3D model far exceeds what can be presumed to reach basal keratinocytes from a topical 0.15% formulation. Intracellular concentration after topical application is not measured. The paper argues that dermal absorption is expected based on molecular weight (320.25 g/mol) and logP (1.23) meeting the Bos/Meinardi 500 Da and Hadgraft criteria, but does not directly measure bioavailability. #gap/no-mechanism
- **In-vivo arm clock-age data not reported** — the n=30 vehicle-controlled arm reports probe-level shifts but not a summary DNAm-age change. Clock-age reduction is reported only for the n=13 keratinocyte arm. Confirmed by full PDF read.
- **Beiersdorf-funded; no independent replication** — all relevant in-vitro and in-vivo results originate from a single Beiersdorf-led study. Independent replication by a non-industry group is the most important next step. #gap/needs-replication
- **Short in-vivo duration (2 weeks)** — insufficient to assess durability or long-term safety of epigenome-wide hypomethylation. #gap/long-term-unknown
- **Female-only in-vivo cohort** — both in-vivo arms (n=30 methylation; n=19 gene expression) enrolled only female volunteers. Generalizability to males not established.
- **3D skin model uses single keratinocyte donor** — model built from a single 42-year-old keratinocyte donor; donor-to-donor variability in DHM response not assessed in the 3D context.

## Extrapolation Assessment

This is a human study throughout (primary human keratinocytes; human volunteers), so the standard model-organism extrapolation table is not applicable. A translatability framing:

| Dimension | Status | Notes |
|---|---|---|
| In-vitro → intact-skin in-vivo | partial | Vehicle-controlled in-vivo arm validates directional probe shifts; clock-age change in keratinocytes may not translate to intact skin where basal-cell concentrations are uncertain |
| In-vivo short-term → long-term | not-established | 2-week in-vivo arm only; #gap/long-term-unknown |
| Industry-funded → independent replication | not-established | Single-sponsor origin; no independent replication published as of 2026-05-19 #gap/needs-replication |
| Topical cosmetic → systemic or clinical endpoint | not-established | No clinical aging outcome (wound healing, malignancy) assessed |

## Cross-References

- [[dihydromyricetin]] — compound page; this study is the canonical primary-source anchor for DHM's DNMT-inhibitor classification
- [[dnmt1]] — molecular target; identified via SPA screen in this paper
- [[studies/qi-2026-dhm-epigenetic-skin-aging]] — downstream clinical application of DHM in topical serum (Qi 2026); cites this paper for the mechanistic basis
- [[studies/bormann-2016-epidermis-clock]] — founding epidermis clock study; Bormann's training cohort and probe set underpin the epidermis clock used here for the Δ−2.03 yr result
- [[epigenetic-alterations]] — hallmark page; this paper contributes in-vitro + vehicle-controlled in-vivo human evidence for pharmacological reversal of age-associated methylation drift
- [[dna-methylation]] — process page; DNMT1-mediated maintenance methylation mechanism
- [[skin-aging]] — phenotype hub; topical epigenome-reversal evidence from this paper
- [[epidermis]] — target tissue for both in-vitro keratinocyte work and in-vivo topical arm
- [[keratinocytes]] — primary cell type used in Arm B

## Footnotes

[^bormann2016]: [[studies/bormann-2016-epidermis-clock]] · doi:10.1111/acel.12470 · PMID 27004597 · PMC PMC4854925 · n=108 (female Caucasian, ages 18–78) · observational (cross-sectional) · Pearson ρ=0.96; MAE <5.25 yr (LOOCV); MAE 6.72 yr (Vandiver independent validation vs. Horvath 12.1 yr) · model: human epidermis (punch biopsy + suction blister) · Bormann et al. · *Aging Cell* 2016;15(3):563–571 · founding epidermis-specific methylation clock; training cohort reused by Qi 2026 for the 23k/173-CpG clock · verified: true

[^dnmt1wiki]: [[dnmt1]] · protein page — DNMT1 is the maintenance DNA methyltransferase; copies CpG methylation from parental to daughter strand at replication forks; UniProt P26358; see § Function for full mechanism; see § Druggability for context on non-nucleoside vs nucleoside DNMT inhibitors
