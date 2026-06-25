---
type: study
doi: 10.1016/j.jacc.2012.09.017
pmid: 23083789
pmc: null
title: "Effect of Long-Term Exposure to Lower Low-Density Lipoprotein Cholesterol Beginning Early in Life on the Risk of Coronary Heart Disease: A Mendelian Randomization Analysis"
authors: [Ference BA, Yoo W, Alesh I, Mahajan N, Mirowska KK, Mewada A, Kahn J, Afonso L, Williams KA Sr, Flack JM]
year: 2012
journal: Journal of the American College of Cardiology
study-design: meta-analysis
publication-type: meta-analysis
volume: 60
issue: 25
pages: 2631-2639
organism: homo-sapiens
n-subjects: 312321
intervention: ["[[ldlr]]", "[[pcsk9]]"]
hallmarks-tested: []
human-evidence: true
peer-reviewed: true
preregistered: false
preregistration-doi: null
key-findings: [lifetime-ldl-mendelian-randomization, threefold-greater-benefit-vs-statin, ldl-causal-cumulative-exposure]
local-pdf: null
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-06-25 — **not verifiable against full text**: closed-access (JACC, DOI 10.1016/j.jacc.2012.09.017), full text not retrievable. The headline quantitative results below (54.5% per-mmol/L CHD reduction, 95% CI, n, p-value, 3-fold comparison) are transcribed from the **published abstract** and are abstract-confirmed; numbers internal to the body (per-gene effect estimates, individual cohort weights) are not. #gap/no-fulltext-access

# Ference et al. 2012 — Lifetime LDL exposure and CHD risk (Mendelian randomization)

The foundational Mendelian-randomization meta-analysis establishing that the cardiovascular benefit of lower LDL-C is a function of **cumulative lifetime exposure**, not just current level — and quantifying it: each unit of *lifelong* genetically-lower LDL-C confers roughly **three times** the coronary-heart-disease (CHD) risk reduction of the same LDL-C drop achieved by a statin started in middle age.

This is the primary source for the "~3× greater lifetime LDL benefit" claim that recurs across this wiki ([[apob]], [[ldlr]], [[crispr-base-editing-pcsk9]], [[statins]]) and the quantitative cornerstone of the cumulative-exposure / "LDL-years" model of atherosclerosis.

## Design

A two-stage Mendelian-randomization synthesis [^ference2012]:

1. A series of meta-analyses estimating the CHD effect of lower LDL-C mediated by **9 polymorphisms in 6 genes** (natural genetic instruments for lifelong-lower LDL-C).
2. A combined meta-analysis of non-overlapping data (**312,321 participants**) yielding a single pooled estimate, compared against the per-unit benefit observed in statin treatment trials initiated later in life.

Using germline variants as instruments approximates lifelong random allocation to lower LDL-C — combining the unconfoundedness of randomization with a decades-long exposure window no RCT can deliver.

## Key results

| Quantity | Value |
|---|---|
| Pooled CHD risk reduction per 1 mmol/L (38.7 mg/dL) lower LDL-C | **54.5%** (95% CI 48.8%–59.5%) |
| Heterogeneity across the 9 instruments | I² = 0.0% (no detectable heterogeneity) |
| Magnitude vs. statin started later in life | **~3-fold greater** per unit LDL-C |
| Significance of the difference | p = 8.43 × 10⁻¹⁹ |
| Combined sample | 312,321 participants |

The ~22% per-mmol/L proportional CHD reduction seen in statin RCTs (treatment beginning in mid-/late life) contrasts with the ~54.5% per-mmol/L reduction from lifelong genetically-lower LDL-C — the basis of the 3-fold framing.

## Why it matters here

- **Causality + dose-timing, not just dose.** Atherosclerosis integrates ApoB-particle exposure over decades; the same absolute LDL-C reduction buys far more risk reduction the earlier and more durably it is applied. This is the geroprotective rationale for one-and-done lifelong LDL lowering — the explicit design argument for somatic [[crispr-base-editing-pcsk9|PCSK9 base editing]] (recapitulating a lifelong loss-of-function phenotype from a single adult dose).
- **Supersedes a closed-access secondary cite.** Several pages previously sourced the "~3×" figure to Ference's 2024 *Nature Reviews Cardiology* review (closed-access, unverifiable). This 2012 paper is the primary, with the headline number abstract-confirmed (CI + p-value). The 2024 review remains a useful framing/context citation but is no longer the load-bearing source for the quantitative claim.

## Caveats

- Closed-access; only the abstract is confirmable. The per-gene instrument estimates and cohort-level weights inside the paper are not independently checked — #gap/no-fulltext-access.
- MR estimates the effect of *lifelong* exposure; they should not be read as the expected benefit of an LDL reduction initiated in adulthood — that is precisely the point of the 3-fold gap. Extrapolating the 54.5% figure to a drug started at 50 would overstate achievable benefit.
- Consistent with, and complementary to, [^cohen2006] (PCSK9 loss-of-function carriers) and the later [[statins|HMGCR/NPC1L1 MR work]] (Ference 2015) — convergent natural-experiment evidence for LDL causality.

## Citations

[^ference2012]: [[studies/ference-2012-ldl-mr-lifetime]] · doi:10.1016/j.jacc.2012.09.017 · Ference BA, Yoo W, Alesh I, et al. · *JACC* 2012;60(25):2631–2639 · PMID 23083789 · n=312,321 · Mendelian randomization meta-analysis (9 polymorphisms / 6 genes) · model: human genetics · 54.5% (95% CI 48.8–59.5%) CHD reduction per 1 mmol/L lower lifelong LDL-C, ~3× the statin per-unit effect, p=8.43×10⁻¹⁹, I²=0.0% · closed-access, abstract-confirmed.

[^cohen2006]: doi:10.1056/NEJMoa054013 · Cohen JC, Boerwinkle E, Mosley TH, Hobbs HH · *N Engl J Med* 2006;354(12):1264–1272 · observational (MR-equivalent); ARIC cohort · PCSK9 nonsense-allele carriers: ~28% lower LDL-C, 47–88% lower CHD risk · the lifelong-PCSK9-LOF natural experiment.
