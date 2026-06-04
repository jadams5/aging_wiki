---
type: study
doi: 10.1093/clinchem/hvaf025
pmid: 40238540
title: "Reevaluating the Threshold for Low Total Testosterone"
authors: [Arun AS, Durant TJS, El-Khoury JM, Krumholz HM]
year: 2025
journal: Clinical Chemistry
volume: 71
issue: 5
pages: 609-611
study-design: observational
publication-type: letter
organism: homo-sapiens
n-subjects: null
intervention: ["[[testosterone]]"]
hallmarks-tested: []
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [assay-migration-confound, low-testosterone-prevalence-artifact, threshold-264-ng-dl, nhanes-reanalysis]
local-pdf: null
verified: true
verified-date: 2026-06-04
verified-by: claude
verified-scope: "Full text (3-page Letter to the Editor) read end-to-end 2026-06-04. Every quantitative claim cross-checked against the PDF: per-cycle median TT (495/500/418/409/433 ng/dL), the −16.4% drop across the 2003–04→2011–12 transition, <300 ng/dL prevalence (11/12% → 22/21/18%), the recomputed 264 ng/dL prevalence (13/14/11%), the assay assignment (Roche Elecsys immunoassay for 2001–04 vs LC-MS/MS for 2011 onward), and the AUA 300 / Endocrine Society 264 / EAA 349 ng/dL guideline cutoffs. Analysis code is public on Zenodo (10.5281/zenodo.14908077)."
literature-checked-through: 2026-06-04
---

# Reevaluating the Threshold for Low Total Testosterone

**Arun AS, Durant TJS, El-Khoury JM, Krumholz HM · *Clinical Chemistry* 71(5):609–611 · 2025 · DOI: 10.1093/clinchem/hvaf025**

PMID: 40238540 · Letter to the Editor (reanalysis of public NHANES data). Yale group (Center for Outcomes Research and Evaluation + Department of Laboratory Medicine).

## TL;DR

The widely reported "epidemic" of low testosterone in American men is, on this reanalysis, largely a **measurement artifact**. Across the five National Health and Nutrition Examination Survey (NHANES) cycles used to establish the US trend, total testosterone (TT) was measured by **Roche Elecsys immunoassay** in the two earliest cycles (2001–02, 2003–04) and by **LC-MS/MS** — the modern, lower-reading gold standard — in the three later cycles (2011 onward). Median TT in self-reported-healthy men dropped ~16% precisely across that assay transition, and the prevalence of "low T" (<300 ng/dL) nearly doubled. Re-scoring the later cycles against the LC-MS/MS-appropriate Endocrine Society cutoff of **264 ng/dL** returns prevalence to its earlier-era level — i.e. the apparent decline is an artifact of measuring more accurately against an outdated immunoassay-derived threshold.

## Design

- **Data:** NHANES cycles that measured TT — 2001–02, 2003–04, 2011–12, 2013–14, 2015–16 — plus self-reported health status, age, and sex. "Healthy" = response of "very good" or "excellent" to the overall health-status question.
- **Population:** self-reported-healthy males >18 yr (NHANES complex-survey weighting applied).
- **Analysis:** survey-weighted quantiles of TT per cycle and the weighted fraction with TT <300 ng/dL (and recomputed at 264 ng/dL). R 4.1.2; code on Zenodo (10.5281/zenodo.14908077). IRB-exempt (public deidentified data).

## Key findings (all verified against the PDF)

| NHANES cycle | Assay | Median TT (ng/dL) | % with TT <300 ng/dL |
|---|---|---|---|
| 2001–02 | Roche Elecsys immunoassay | 495 (17.2 nmol/L) | 11% |
| 2003–04 | Roche Elecsys immunoassay | 500 (17.3 nmol/L) | 12% |
| 2011–12 | LC-MS/MS | 418 (14.5 nmol/L) | 22% |
| 2013–14 | LC-MS/MS | 409 (14.2 nmol/L) | 21% |
| 2015–16 | LC-MS/MS | 433 (15.0 nmol/L) | 18% |

- Median TT dropped **16.4%** between the 2003–04 and 2011–12 cycles — i.e. exactly across the immunoassay→LC-MS/MS migration — producing a **near-100% increase** in healthy men classified as "low T" over a decade.
- Applying the Endocrine Society's **264 ng/dL** cutoff to the LC-MS/MS cycles gives prevalences of **13% / 14% / 11%** (2011–12 / 2013–14 / 2015–16) — in line with the immunoassay-era 300 ng/dL figures (11–12%). The "epidemic" disappears once the threshold is matched to the method.
- Guideline discordance underscores the threshold problem: AUA 2018 = 300 ng/dL; Endocrine Society 2018 = 264 ng/dL (lowered explicitly because of the assay changes); European Association of Andrology = 349 ng/dL.
- **Clinical consequence:** using 300 ng/dL with modern LC-MS/MS overestimates low-T prevalence by ≥50% relative to 264 ng/dL, risking over-diagnosis of hypogonadism, unnecessary treatment and its side effects, excess cost, and delayed workup.

## Limitations / scope

- **It is a Letter to the Editor**, not a full original article — concise methods, no formal sensitivity analyses beyond the threshold recomputation.
- **NHANES-specific.** The argument cleanly addresses the US/NHANES prevalence narrative (and therefore directly bears on NHANES-based studies such as Lokeshwar et al. 2021, *Eur Urol Focus*, doi:10.1016/j.euf.2020.02.006, which itself flagged "differing assays" as a limitation). It does **not** speak to non-NHANES cohorts that used a single assay throughout (e.g. the Israeli Maccabi cohort, Danish/Finnish surveys, or the immunoassay-era Massachusetts Male Aging Study) — those secular-decline signals are not dissolved by this particular 2011 assay switch.
- Addresses the *prevalence of men classified low* and the *diagnostic threshold*, not whether any individual man's testosterone falls with age (it does — see [[testosterone]] § age-related decline).
- Self-reported (not measured) health status defines the "healthy" subgroup.

## Relevance to the wiki

This is the linchpin deflationary argument in the contested **secular testosterone-decline** debate (see [[testosterone]] § *The secular (population-level) decline*). It reframes a frequently-cited "men are becoming less manly" narrative as, in large part, a laboratory-harmonization problem — a clean worked example of why assay-method changes must be reconciled before a temporal biomarker trend is interpreted as biology.

## Footnotes

No external claims beyond the primary source; all data above are from the paper itself (DOI 10.1093/clinchem/hvaf025), read in full.
