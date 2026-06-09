---
type: study
doi: 10.1038/s41586-026-10242-y
pmid:
pmc:
title: "Thymic health consequences in adults"
authors: [Bernatz S, Prudente V, Pai S, Attermann AK, Cao Y, Chen J, Lyass A, Foldyna B, Nürnberg L, Bressem K, Abbosh C, Swanton C, Jamal-Hanjani M, Lu MT, Murabito JM, Lunetta KL, Birkbak NJ, Aerts HJWL]
year: 2026
journal: Nature
study-design: observational
publication-type: research-article
volume:
issue:
pages:
organism: homo-sapiens
n-subjects: 27612
intervention: []
hallmarks-tested: ["[[disabled-adaptive-immunity]]", "[[chronic-inflammation]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [deep-learning-ct-thymic-health-score, all-cause-mortality-association, cardiovascular-mortality-association, lung-cancer-incidence-association, il6-inflammation-correlate]
local-pdf: null
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-06-09 — **not** verified against the full PDF (DOI 10.1038/s41586-026-10242-y; closed-access, no local full text). Effect sizes below are drawn from the abstract and reputable secondary coverage (ASCO Post, press releases) and may be approximate; verify against the primary source before relying on quantitative claims. #gap/no-fulltext-access

# Thymic health consequences in adults

## TL;DR

Companion population paper to [[studies/bernatz-2026-thymic-health-immunotherapy|Bernatz 2026 (immunotherapy)]]. The group trained a **deep-learning framework to score "thymic health" from routine chest CT** — quantifying thymic size, shape, and composition (i.e., the degree of functional parenchyma vs. fatty involution) — and showed that higher thymic health predicts substantially lower all-cause and cardiovascular mortality and lower lung-cancer incidence in two large prospective cohorts of asymptomatic adults. The result repositions the adult thymus from "metabolically inert post-childhood remnant" to a **measurable, prognostically meaningful axis of immune aging** ([[immunosenescence]], [[disabled-adaptive-immunity]]).

## Design

- **Method:** deep-learning model applied to routine chest CT, automatically segmenting and scoring the thymus on size/shape/composition into a continuous **thymic health score**. (Exact architecture, training labels, and segmentation pipeline not verifiable without full text. #gap/no-fulltext-access)
- **Discovery/primary cohort:** **National Lung Screening Trial (NLST)**, n ≈ **25,031** screening-CT participants; ~12-year follow-up.
- **Independent validation cohort:** **Framingham Heart Study (FHS)**, n ≈ **2,581** (chest CT subset); longitudinal follow-up. Framingham provides external, non-lung-cancer-enriched replication of the cardiovascular-mortality association.
- **Total:** ~27,612 individuals.
- **Adjustment:** associations reported after adjustment for age, sex, smoking, and comorbidities.

This is **observational imaging epidemiology** — no intervention; thymic health is an exposure, not a manipulated variable. Causality is not established (a healthier thymus may mark, rather than cause, systemically lower risk).

## Key findings (approximate — pending full-text verification)

High vs. low thymic health (per secondary coverage):

| Outcome | Effect | Absolute (where reported) |
|---|---|---|
| All-cause mortality | ~**50% lower** risk | 12-yr mortality ~**13.4%** (high) vs ~**25.5%** (low), NLST |
| Cardiovascular mortality | ~**63% lower** risk (headline); replicated independently in Framingham | — |
| Lung-cancer incidence | ~**36% lower** | 6-yr incidence ~**3.4%** (high) vs ~**5.3%** (low) |

- The **cardiovascular-mortality** association is the one that **replicated in the independent Framingham cohort** (independent of age, sex, smoking) — the strongest cross-cohort signal, and notable because Framingham is not a lung-cancer-screening population.
- Higher thymic health correlated **inversely with systemic inflammation**, including **[[il-6]]** and other pro-inflammatory markers, and with metabolic dysregulation (elevated BMI/obesity) — consistent with a thymic-involution → reduced naive-T-cell output → [[chronic-inflammation|inflammaging]] axis. #gap/no-fulltext-access (specific inflammatory analytes and effect sizes unverified)

## Why it matters for this wiki

1. **First large-scale demonstration that an adult organ-aging readout of the thymus is prognostic for hard endpoints.** Prior thymic-involution evidence in this wiki ([[immunosenescence]], [[disabled-adaptive-immunity]]) rested on mechanism and small interventional pilots (e.g. the Fahy 2019 TRIIM trial, n=9 completers). This adds population-scale outcome data.
2. **Establishes a candidate imaging biomarker of immune age** — see [[thymic-health-score]] — derivable for free from CT scans already acquired for other indications (opportunistic imaging), comparable in spirit to opportunistic coronary-calcium or vertebral-density scoring.
3. **Supports thymic regeneration as a longevity target** by showing the variable it would move (thymic composition) tracks mortality at population scale — though it does not show that *intervening* on thymic health changes outcomes. #gap/no-mechanism (association, not causation)

## Extrapolation / evidence quality

| Dimension | Status |
|---|---|
| Human evidence? | yes — two large human cohorts (n ≈ 27,600), no animal model needed |
| Independent replication? | partial — CV-mortality replicated in Framingham; full panel single-group, single-method, brand-new (2026), not yet externally replicated by other teams #gap/needs-replication |
| Causal (vs. associative)? | no — observational; thymic health may be a marker of systemic health rather than a driver #gap/no-mechanism |

## See also

- [[studies/bernatz-2026-thymic-health-immunotherapy]] — companion paper (same group): thymic health predicts immune-checkpoint-inhibitor outcomes
- [[thymic-health-score]] — the imaging biomarker introduced by these two papers
- [[thymus]] · [[immunosenescence]] · [[disabled-adaptive-immunity]] · [[chronic-inflammation]]
