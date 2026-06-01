---
type: study
doi: 10.1007/s13555-026-01764-4
pmid: 42034839
pmc:
title: "Epigenetic Skin Aging and Its Reversal to Improve Skin Longevity across Ethnicities and Phototypes Using a Dihydromyricetin-Containing Serum: Results from a Prospective, Single-Cohort Study"
authors: [Qi M, Pitta P, Wegner K, Kristof B, Feng Y, Raddatz G, Rodríguez-Paredes M, Gallinger J, Wanitphakdeedecha R, Winnefeld M, Guadanhim L, Frey C, Lyko F, Falckenhayn C, Grönniger E]
year: 2026
journal: Dermatology and Therapy
study-design: in-vivo
organism: homo-sapiens
n-subjects: 77
intervention: ["dihydromyricetin (DHM) topical serum"]
hallmarks-tested: ["[[epigenetic-alterations]]", "[[stem-cell-exhaustion]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [skin-specific-23k-methylation-clock, age-dependent-hypermethylation-bivalent-regions-cross-ethnicity, dhm-serum-2.08yr-epigenetic-age-reduction-8wk, wrinkle-13.9-percent-reduction, dermal-echogenicity-10.4-percent-increase, no-vehicle-control]
local-pdf: null
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Full PDF read end-to-end (pages 1–14) from user-provided local copy at  All quantitative claims verified against PDF: DNAm-age reduction −2.08 yr (Fig 2a label; paper text rounds to 'around 2.1 years'); MAE 5.66 yr cross-validation (note: paper uses 'type measure=mse' glmnet parameter — not explicitly labeled MAE; see body); MAE 4.88 yr multi-ethnic validation (explicitly MAE); 40% responder threshold ≥5 yr; p=0.029 paired Wilcoxon; wrinkle visibility −13.9% (Table 1); dermal echogenicity +10.4% (Table 1); wrinkle occupancy −12.3% (Table 1); SPa −4.3% SPq −5.4% (Table 1); R=0.314 p=0.025 correlation with wrinkle volume (Fig 5a — wiki previously stated R=0.31 p<0.05, corrected to exact values). Array platform corrected: Infinium EPICv2 (not 450k/EPIC as previously indicated). COI disclosure verified against PDF full text: 8 Beiersdorf employees confirmed; Guadanhim/Frey/Lyko consultation fees from Beiersdorf AG; Rodríguez-Paredes speaker fees from Beiersdorf SA; Raddatz/Feng/Wanitphakdeedecha no COI. Author list confirmed: all 15 authors correct including Wegner K (not J) and Feng Y (not L) and Frey C (not S). Serum full ingredient list confirmed from Discussion section. Falckenhayn 2024 is Ref [12] in the paper."
---

# Epigenetic Skin Aging and Its Reversal Using a DHM-Containing Serum (Qi et al. 2026)

## TL;DR

A two-part **industry-funded skin study** from Beiersdorf AG. Part 1 (n=17 multi-ethnic pilot, ages 24–69, tape-strip epidermis): age-dependent DNA hypermethylation in human epidermis is **enriched in bivalent chromatin regions** and conserved across phototypes; the authors derive a new **23k-probe / 173-CpG epidermis-specific methylation clock** (cross-validation error 5.66 yr [glmnet MSE-optimized]; multi-ethnic validation MAE 4.88 yr) that performs without detectable ethnic bias. Part 2 (n=60 Brazilian volunteers, ages 40–70, all Fitzpatrick I–VI, **single-arm open-label, no vehicle control**, 8 weeks twice-daily): a topical serum containing dihydromyricetin (DHM, an ampelopsin flavonoid characterised as a DNA methylation inhibitor in [^falckenhayn2024]), low- and high-MW hyaluronic acid, glycine saponin, and enoxolone, applied with SPF 50+ sunscreen, **reduced epidermal DNAm age by −2.08 yr (paper text: "around 2.1 years"; Fig 2a label; paired Wilcoxon p=0.029; 40% of participants showed ≥5 yr reduction)**, with secondary clinical endpoints (wrinkle visibility −13.9%, dermal echogenicity +10.4%) all significant. **Lacks a placebo/vehicle arm and randomization in the product-use phase** — interpret as a positive cosmetic-grade signal rather than aging-RCT-grade evidence. First demonstration that an over-the-counter topical can shift a skin-specific methylation-clock readout in 8 weeks.

## Provenance and verification status

- **Source for this page:** user-provided PDF at , read end-to-end 2026-05-19 (pages 1–14, all main text, figures, tables, and COI/acknowledgements). The article is licensed CC BY-NC 4.0.
- **PDF status:** Not in a local paper archive (paper published online 2026-04-25; too recent for OpenAlex ingest as of 2026-05-19). Local copy confirmed at path above.
- **What is verified (2026-05-19 PDF read):** all quantitative claims in the body below — n's (17 pilot, 60 product-use), all MAE values, DNAm-age reduction (−2.08 yr), p-values, effect sizes (Table 1, Fig 2, Fig 5), serum ingredient list, COI disclosure, author list, array platform (Infinium EPICv2), bivalent-region enrichment framing, Falckenhayn 2024 citation identity.
- **What is NOT independently verified:** supplementary figures (S1–S10) and supplementary tables (S1–S7) were not provided in the local PDF copy and have not been read. The siRNA knockdown gene list (Supp Fig S2), ethnic breakdown of the n=17 pilot (Supp Table S1), and volunteer characteristics of the n=60 cohort (Supp Table S2) are in supplementary materials and remain unverified. These are secondary-level details; no primary quantitative claim in the body depends on them.

## Design

### Part 1 — Pilot methylome study

- **n = 17** multi-ethnic donors with diverse Fitzpatrick phototypes; ages **24–69 yr**.
- Sampling: **adhesive tape-stripping** of the epidermis (non-invasive; collects upper stratum corneum + outer viable epidermis).
- Methylation array: **Infinium EPICv2 (Methylation EPIC version 2.0 BeadChip, Illumina)** for the pilot cohort samples. The 23k clock uses **23,845 probes shared between the original 27k array training data (Bormann 2016) and modern 450k arrays**, with 173 CpGs selected after penalised regression.
- No ethnicity sub-breakdown verbatim in the main text; breakdown is in Supplementary Table S1 (not verified — supplementary materials not available in local PDF copy).

### Part 2 — Product-use study

- **n = 60** Brazilian volunteers; ages **40–70 yr** (mean 55); both sexes (authors flag male under-representation); **all Fitzpatrick phototypes I–VI** represented (authors flag Asian under-representation).
- **Design: single-cohort, open-label, no vehicle control, no randomization, no blinding.** Authors explicitly note this limitation: "the present product-use study did not include a vehicle-controlled arm, which could be integrated into future designs."
- **Intervention:** topical facial serum applied **twice daily (AM + PM) × 8 weeks** to face and neck. SPF 50+ sunscreen co-applied each morning after the serum.
- **Serum composition:** dihydromyricetin (DHM, primary active) + low- and high-molecular-weight hyaluronic acid (52 kDa + 2,000 kDa) + bioactive glycine saponin + enoxolone.
- **Compliance check:** product weighing at baseline, week 4, week 8; all analysed volunteers used ≥10 g of serum by week 4.
- **Sampling:** adhesive tape-stripping of the **periorbital crow's-feet area** at baseline and week 8 (confirmed in PDF Methods and Fig 5 caption).
- **Imaging:** dermal echogenicity by high-frequency ultrasound (malar region); wrinkle quantification by standardised facial imaging (coefficient of visibility and occupancy rate) and 3D profilometry of the periorbital skin surface (SPa, SPq roughness parameters; n=51 for 3D profilometry subgroup, n=59–60 for facial imaging and echogenicity — see Table 1).

### Comparator and inference

The product-use study compares each volunteer's week-8 methylation age **against their own baseline** — paired Wilcoxon. There is no parallel arm receiving (a) no serum, (b) vehicle-only serum, (c) sunscreen-only. **Any portion of the apparent 2.1 yr reduction attributable to (i) sunscreen-only effects on epidermal turnover, (ii) regression to the mean, (iii) tape-strip sampling drift between visits, or (iv) seasonal UV exposure changes over the 8-week window cannot be excluded** by this design. Authors explicitly acknowledge this.

## Key findings

### 1. Age-dependent DNA hypermethylation is enriched in bivalent chromatin regions across ethnicities

Pilot cohort (n=17) shows that age-correlated hypermethylated CpGs are **enriched in bivalent regions** (chromatin marked by both H3K4me3 and H3K27me3 — typically poised developmental enhancers). The pattern is conserved across Fitzpatrick phototypes I–VI (confirmed in PDF text and Supplementary Fig. S1 reference). The hypermethylated genes are described as "essential for keratinocyte vitality and longevity"; the specific gene list is in Supplementary Fig. S2 (supplementary materials not in local PDF copy; gene list not verified here).

This finding is consistent with the broader literature on bivalent-region hypermethylation as a generalised aging signature. The paper cites several prior skin-aging methylation references (Refs [6],[9],[10],[11],[12],[13] in the paper); the precise reference list for the bivalent-region context is confirmed present in the PDF introduction.

### 2. New 23k-probe / 173-CpG epidermis-specific methylation clock

| Parameter | Value |
|---|---|
| Probes considered | 23,845 (intersection of 27k array used by Bormann 2016 and modern 450k arrays) |
| Final CpGs in clock | 173 |
| Training cohort (linked to Bormann 2016) | 108 white females, ages 18–78 |
| Cross-validation error | **5.66 yr** (paper text: "cross-validation error (type measure='mse') of 5.66 years" — refers to the glmnet `cv.glmnet` cross-validation loss minimized under MSE; not explicitly labeled as MAE in the paper for this figure) |
| Multi-ethnic-validation MAE (Qi 2026 pilot n=17) | **4.88 yr** (explicitly stated as "mean absolute error" in paper text) |
| Reported ethnic bias | None detected |
| Clock category | First-generation (chronological-age-trained), tissue-specific |

The independently published [^rodriguezParedes2026] **TapeLift clock** (also tape-strip-trained) is the comparator clock; it likewise showed no bias against non-white samples in the Qi 2026 validation (confirmed in PDF Fig. 1B). Specific MAE values for TapeLift on this cohort are not stated in the main text (shown graphically in Fig. 1B only).

Baseline DNAm-age MAE on the n=60 product-use cohort using the 23k clock: **6.2 yr** with no phototype bias. (Higher than the n=17 multi-ethnic validation MAE — likely reflecting age-range narrowing and cohort heterogeneity.)

### 3. DHM-serum reduced epidermal DNAm age by ~2.1 yr at 8 weeks

| Endpoint | Result | p-value |
|---|---|---|
| Mean DNAm-age change (paired Wilcoxon, n=60) | **−2.08 yr** (paper text rounds to "around 2.1 years"; Fig 2a label: "Δ pred. age = −2.08 y") | **0.029** |
| Responders (≥5 yr reduction) | **40%** of participants | — |
| Confidence interval | **Not reported** | — |

The effect size is comparable in magnitude to the **Fitzgerald 2021 8-week diet+lifestyle pilot** (3.23 yr Horvath DNAm-age reduction in saliva, n=38 randomised, between-group; see [[biomarkers/horvath-clock-2013]] and [^fitzgerald2021]). It is **larger** than the typical 2-year intervention shifts reported for first-generation pan-tissue clocks in lifestyle RCTs, but the design (open-label, no comparator) is much weaker than CALERIE-2 / Fitzgerald 2021, and the 23k clock is an **untested-in-intervention-context** clock — not Horvath, not GrimAge, not DunedinPACE — which limits cross-study comparison.

### 4. Secondary clinical endpoints (8 weeks)

| Endpoint | Mean change | Responders | p-value | n |
|---|---|---|---|---|
| Wrinkle visibility (standardised facial imaging, coefficient of visibility) | **−13.9%** | 86.4% improved | <0.001 (***) | 59 |
| Wrinkle occupancy (occupancy rate) | −12.3% | 81.4% improved | <0.001 (***) | 59 |
| Skin roughness SPa (3D profilometry) | −4.3% | — | <0.05 (*) | 51 |
| Skin roughness SPq (3D profilometry) | −5.4% | — | <0.05 (*) | 51 |
| Dermal echogenicity (ultrasound, malar region) | **+10.4%** at wk 8 (+7.7% at wk 4) | — | <0.001 (***) | 60 |
| Correlation: epigenetic age change × wrinkle volume change (Pearson) | r = **0.314** | — | **p = 0.025** | 60 |

The r=0.314 (p=0.025) correlation between DNAm-age change and wrinkle volume change is statistically significant but **modest** — consistent with epigenetic and morphological axes being partially independent dimensions of skin aging.

**Sunscreen confound analysis:** A partial correlation analysis correcting for the amount of SPF-containing product used showed a significant positive correlation between biological age reduction and the amount of epigenetic serum used (R=0.25, p=0.05, Pearson). Conversely, the correlation between biological age reduction and sunscreen amount used (after correction for DHM serum amount) was not significant (p=0.29) and slightly negative (R=−0.14). Authors interpret this as evidence that the effect is driven by the DHM-containing serum rather than sunscreen co-application. This analysis is post-hoc and cannot fully exclude confounding, but it partially addresses the sunscreen-attribution concern.

### 5. Mechanism — DHM as DNA methylation inhibitor

The mechanistic hypothesis is that DHM (dihydromyricetin / ampelopsin) inhibits DNA methyltransferase activity, partially reversing the age-associated bivalent-region hypermethylation seen in the pilot cohort. This DNMT-inhibitor characterisation derives from **Falckenhayn 2024** [^falckenhayn2024] (in vitro). The current paper does not directly demonstrate DNMT inhibition in vivo in human epidermis — the chain of evidence is: (in vitro) DHM inhibits DNMTs → (clinical) topical DHM reduces 23k-clock DNAm age. The middle link — that DHM applied topically reaches viable basal keratinocytes at concentrations sufficient to inhibit DNMTs in vivo — is **not directly demonstrated** in this paper. #gap/no-mechanism

## Why this paper matters for the wiki

1. **First demonstration that a topical OTC can shift an epidermal methylation clock at 8 weeks.** Even with the design caveats, this is the strongest cosmetic-grade epigenetic-readout signal published to date. The signal is independent of (and in addition to) the substantial body of evidence that retinoids / sunscreen produce histological/morphological skin-aging benefit. Whether DNAm-age shift is causally upstream of the wrinkle improvements, downstream of the same intervention biology, or independently driven is open.

2. **Resolves the existing `#gap/unsourced` claim on [[skin-aging]] regarding skin-specific methylation clocks.** The Qi 2026 paper does not directly compare matched UV-exposed vs UV-unexposed skin clock acceleration (the original gap framing) but does establish that (a) skin-specific clocks now exist (23k clock, TapeLift clock), (b) the bivalent-region hypermethylation is conserved cross-ethnicity, and (c) an intervention can move the clock. Update the gap framing accordingly.

3. **Adds the bivalent-region hypermethylation finding to the [[epigenetic-alterations]] hallmark evidence base.** Cross-ethnic conservation strengthens the claim that bivalent-region drift is a generalised aging signature, not a population artefact.

4. **Industry-funded cosmetic intervention with internally-developed biomarker.** All five named lead/corresponding authors are Beiersdorf employees; the active ingredient, the formulation, AND the new clock used to measure efficacy were developed in-house at Beiersdorf / DKFZ collaborators. This stacks the deck for a positive readout. The lack of a vehicle arm in product-use is the most important methodological caveat. **The wiki should cite this for the bivalent-region biology and cross-ethnic clock validation, and should NOT yet cite it as evidence that DHM is an aging-reversal compound** in the senotherapeutic / geroprotector sense.

## Strengths

- **Two-part design** separates clock-development (n=17 cross-ethnic pilot) from intervention testing (n=60 single-cohort).
- **Cross-Fitzpatrick representation** in product-use cohort (I–VI) is genuinely unusual for skin-aging trials; most prior work skews white European / Japanese.
- **Compliance verified by product weighing** (rather than self-report), which is methodologically stronger than typical OTC cosmetic studies.
- **Multiple endpoints converge** in same direction (DNAm age, wrinkle, roughness, echogenicity).
- **Open-access** publication with explicit acknowledgement of design limitations by authors.

## Limitations and verification gaps

- **No vehicle / placebo control** in the product-use study. Cannot dissociate the DHM contribution from (i) sunscreen-only effects, (ii) HA / glycine-saponin / enoxolone contributions, (iii) regression to the mean, (iv) seasonal UV variation.
- **Open-label, unblinded:** all secondary clinical endpoints (wrinkle, roughness) involve evaluator scoring susceptible to bias.
- **8-week duration:** no durability data; no washout; longer-term sustainment unknown.
- **Industry-funded** (Beiersdorf AG funded the publication fee; 8 of 15 authors are Beiersdorf employees; 3 more declare consultation fees from Beiersdorf). Conflicts disclosed transparently but pervasive.
- **The 23k clock is a brand-new tool used here for the first time as an intervention readout.** Test-retest reliability of the clock has not been independently established (cf. the [[biomarkers/horvath-clock-2013]] PC-version reliability literature [^higginsChen2022] — Higgins-Chen 2022 demonstrated substantial technical noise in conventional clocks; whether the 23k clock has been similarly stress-tested for ICC is unknown). #gap/needs-replication
- **Asian and male volunteers under-represented** — limits external validity.
- **No transcriptomic / proteomic confirmation** that the methylation changes correspond to gene-expression changes at the implicated bivalent-region loci. Authors flag this as a future-work item.
- **siRNA knockdown causality data is in supplementary only**; the main text does not provide quantitative effect sizes for keratinocyte-vitality genes. The causal chain "age-hypermethylated genes are essential for keratinocyte vitality" rests on supplementary material that has not been extracted here.
- **n=17 pilot vs n=60 product-use cohort are separate non-overlapping cohorts** — confirmed in the PDF Methods: "The pilot study comprised a total of 17 male and female participants" and "The product-use study comprised 60 volunteers from a diverse Brazilian population." These are geographically and logistically distinct populations (pilot multi-ethnic multi-site; product-use all Brazilian). No explicit statement of zero overlap, but the distinct geographies make overlap effectively impossible.

## Extrapolation to humans

This is a human study, so the standard extrapolation table is reframed:

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved? | yes | Both bivalent-region drift and skin-specific methylation clocks are human-tissue findings throughout |
| Phenotype conserved? | yes | All endpoints measured in human skin |
| Replicated independently? | partial | The 23k clock builds on Bormann 2016 [^bormann2016] (independent group); the DHM intervention finding is single-study from a single industry sponsor |
| Active comparator vs control? | **no** | Open-label single-cohort; vehicle-controlled replication is the next required experiment |

## Cross-references

- [[skin-aging]] — phenotype page; this paper updates the "Epigenetic alterations — skin-specific epigenetic clocks" subsection
- [[epigenetic-alterations]] (verified) — hallmark page; bivalent-region hypermethylation finding strengthens the existing evidence base
- [[biomarkers/horvath-clock-2013]] — pan-tissue clock; the 23k clock and Horvath are non-overlapping (different tissues, different probesets)
- [[interventions/lifestyle/caloric-restriction]] — for cross-comparison: CR (Waziry 2023) shifts DunedinPACE but not Horvath; an OTC topical here shifts a skin-specific clock with similar 2-yr magnitude in 8 weeks (caveats above)
- [[hallmarks-of-aging]] — framework page

## Footnotes

[^falckenhayn2024]: Falckenhayn C et al. · doi:10.3389/fragi.2023.1258184 · *Frontiers in Aging* · published 04 March 2024 (received July 2023; accepted December 2023; DOI path-year "2023" reflects Frontiers submission-year convention) · in-vitro identification of DHM as a DNMT1 inhibitor; 13 keratinocyte lines; EPIC 850k array; in vivo tape-strip and 3D skin aging model validation; local PDF available in archive (gold OA; FWCI 29.2; citation percentile 100th)

[^bormann2016]: Bormann F et al. · doi:10.1111/acel.12470 · *Aging Cell* 2016 · first DNA methylation clock for human epidermis · trained on 108 white females, ages 18–78 (27k methylation array, biopsy) · local PDF available in archive (gold OA; citation percentile 100th, 94 citations)

[^rodriguezParedes2026]: Rodríguez-Paredes M et al. · doi:10.1038/s41698-026-01302-7 · *NPJ Precision Oncology* 2026 · TapeLift clock (tape-strip-trained skin methylation clock); cited as Ref [14] throughout Qi 2026 as the comparator clock and as the source of the tape-strip methodology. See [[tapelift-clock-2026]].

[^fitzgerald2021]: [[studies/fitzgerald-2021-diet-lifestyle-epigenetic-clock]] · doi:10.18632/aging.202913 · n=38 analysed (small pilot RCT); 8-week diet/lifestyle intervention reduced Horvath salivary DNAm age by 3.23 yr between-group (p=0.018); see the Horvath-clock biomarker page footnote for full caveats

[^higginsChen2022]: doi:10.1038/s43587-022-00248-2 · Higgins-Chen et al. · Nat Aging 2022 · principal-component (PC) versions of methylation clocks substantially improve test-retest reliability vs. conventional clocks; the 23k clock used in Qi 2026 has not been similarly stress-tested for ICC
