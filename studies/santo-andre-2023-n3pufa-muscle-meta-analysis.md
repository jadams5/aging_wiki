---
type: study
doi: 10.1016/j.advnut.2022.11.005
pmid: 36811583
pmc: PMC10103001
title: "The Influence of n-3PUFA Supplementation on Muscle Strength, Mass, and Function: A Systematic Review and Meta-Analysis"
authors: [Santo André HC, Esteves GP, Barreto GHC, Longhini F, Dolan E, Benatti FB]
year: 2023
journal: Advances in Nutrition
study-design: meta-analysis
publication-type: meta-analysis
volume: 14
issue: 1
pages: "115-127"
organism: homo-sapiens
n-subjects: 1443   # abstract states 1443; Results section states 1433 (913 female + 520 male = 1433) — internal inconsistency in the source, flagged in Limitations
intervention: ["[[molecules/compounds/omega-3-fatty-acids]]"]
hallmarks-tested: []
human-evidence: true
peer-reviewed: true
preregistered: true
key-findings: [no-muscle-mass-effect, no-muscle-function-effect, very-small-strength-effect, high-risk-of-bias-across-studies, dose-subgroup-interaction-not-detected, resistance-training-subgroup-interaction-not-detected]
local-pdf: null
verified: true
verified-date: 2026-08-10
verified-by: claude
verified-scope: "Full text reviewed via the PMC open-access copy (PMC10103001). Confirmed: OSF-registered protocol (doi.org/10.17605/OSF.IO/2FWQT), so preregistered: true; internal sample-size inconsistency (abstract states 1443, Results section states 1433 = 913 female + 520 male) — 1443 kept as the frontmatter/headline value per the abstract, with the discrepancy flagged in Limitations. Dose and resistance-training subgroup analyses re-framed as non-significant interactions detected (not evidence of equivalence) rather than effects positively ruled out."
---

# Santo André et al. 2023 — n-3 PUFA supplementation and muscle strength, mass, and function meta-analysis

## TL;DR

A systematic review and three-level random-effects meta-analysis of 14 studies (n=1,443 per the abstract — see the internal-inconsistency note in Limitations; 913 female, 520 male) found that [[molecules/compounds/omega-3-fatty-acids|n-3 polyunsaturated fatty acid (n-3 PUFA)]] supplementation had **no significant effect on muscle mass or muscle function**, and only a **very small, borderline-significant effect on muscle strength** (SMD 0.12, 95% CI 0.006–0.24, P=0.04) — a confidence interval whose lower bound sits essentially at zero. Subgroup analyses by age (<60 vs ≥60 y), dose (<2 vs ≥2 g/day), and co-administration with resistance training did not detect significant moderation of these results — but these comparisons were underpowered (only a subset of the 14 studies fall in each stratum), so a non-significant moderator test should not be read as evidence that dose or resistance-training pairing have no effect. Included studies carried a high overall risk of bias, and NutriGrade certainty of evidence was rated moderate across all three outcomes. This is not evidence for a clinically meaningful muscle benefit of omega-3 supplementation, though it should not be read as the final word either — see § Agreement and disagreement with other syntheses for a positive-finding dissenting synthesis (Huang 2020).

## Design

| Field | Value |
|---|---|
| Databases searched | Medline, Embase, Cochrane CENTRAL, SportDiscus |
| Included studies | 14 peer-reviewed studies |
| Participants | 1,443 total (913 female, 520 male) |
| Outcomes pooled | 52 outcome measures across muscle strength, mass, and function |
| Statistical method | Three-level random-effects meta-analysis on pre-post standardized mean differences (SMD) |
| Risk-of-bias method | Cochrane RoB2 |
| Certainty-of-evidence method | NutriGrade |
| Subgroup moderators tested | Participant age (<60 vs ≥60 y), n-3 PUFA dose (<2 vs ≥2 g/day), concurrent resistance training (yes/no or other) |

## Key results

| Outcome | Result | Interpretation |
|---|---|---|
| Muscle mass | SMD 0.07 (95% CI -0.02 to 0.17), P=0.11 | No significant effect. |
| Muscle function | SMD 0.03 (95% CI -0.09 to 0.15), P=0.58 | No significant effect. |
| Muscle strength | SMD 0.12 (95% CI 0.006 to 0.24), P=0.04 | Statistically significant but "very small" per the authors; the CI lower bound (0.006) is essentially indistinguishable from zero, and this result should not be read as a clinically meaningful strength benefit. |
| Risk of bias | High, overall, across included studies | Headline caveat — weights down confidence in all three pooled estimates, including the nominally significant strength result. |
| Certainty of evidence (NutriGrade) | Moderate for all three outcomes | Middle-tier certainty despite the high risk-of-bias flag; the two ratings are not fully reconciled in the abstract-level summary available here. |
| Subgroup: age (<60 vs ≥60 y) | No significant moderation | Effects did not differ by age group. |
| Subgroup: dose (<2 vs ≥2 g/day) | No significant moderation detected | A non-significant moderator test is not evidence of equivalence — this subgroup comparison is underpowered (only a fraction of the 14 studies fall in each dose stratum), so a true dose-response effect cannot be ruled out on this basis alone. |
| Subgroup: resistance training (present vs absent/other) | No significant moderation detected | Same caveat as above: the resistance-training subgroup is underpowered, so this does not establish that pairing supplementation with resistance training has no effect. |

## Aging relevance

This is a general adult population meta-analysis (14 studies spanning a range of ages, not restricted to older adults), directly relevant to the muscle-mass and muscle-strength arm of [[phenotypes/sarcopenia]] and to evaluating [[molecules/compounds/omega-3-fatty-acids]] as a candidate anti-sarcopenic intervention. The age subgroup analysis (<60 vs ≥60 y) specifically tested whether older adults respond differently — they did not, within the power of this analysis.

| Dimension | Status | Notes |
|---|---|---|
| Human evidence? | yes | All 14 included studies were human trials. |
| Aging population directly tested? | partial | Age subgroup analysis included ≥60 y studies but the pooled cohort spans a broad age range. |
| Durable aging phenotype tested? | partial | Muscle mass/strength/function are core sarcopenia-relevant outcomes, but study durations and designs vary. |
| Replicated in aging-specific trials? | divergent/heterogeneous | See "Agreement and disagreement with other syntheses" below — other meta-analyses of overlapping literature report larger, outcome-specific strength/function effects, and one earlier synthesis (Huang 2020) reports a positive muscle-mass effect. |

## Agreement and disagreement with other syntheses

This meta-analysis's core signal — **no muscle-mass effect; only a very small, borderline strength effect; no significant dose or resistance-training interaction detected** — sits alongside three other syntheses of overlapping-but-not-identical trial literature, including one earlier synthesis that found a positive muscle-mass effect:

- **Huang et al. 2020** (*Nutrients* 12(12):3739, doi:10.3390/nu12123739, PMID 33291698, PMC7761957) — an earlier meta-analysis of 10 RCTs found omega-3 supplementation **increased** muscle mass by +0.33 kg (95% CI 0.05–0.62), with a larger effect (+0.67 kg, 95% CI 0.16–1.18) in the >2 g/day subgroup[^huang2020]. This is a positive muscle-mass finding that predates and diverges from Santo André's null result — the wiki should not imply unanimity on the muscle-mass question. The two syntheses draw on overlapping-but-not-identical trial sets, use different dose-category cutoffs, and Huang's is a standard pairwise (not three-level, RoB2-graded) meta-analysis, any of which could plausibly explain the divergence.
- Cornish et al. 2022 (16 studies, n=2,438) found no lean-tissue-mass effect (SMD 0.09, 95% CI -0.10 to 0.28) — consistent with Santo André's null mass finding — but reported benefits for lower-body strength (SMD 0.54, 95% CI 0.33-0.75) and functional tests (timed-up-and-go, 30-second sit-to-stand), with no effect on walking performance or upper-body strength[^cornish2022].
- Tseng et al. 2023 network meta-analysis (16 RCTs) found high-dose (>2.5 g/day) n-3 PUFA gave the largest improvement in upper-extremity strength (SMD 1.68, 95% CI 0.03-3.33 — note the extremely wide CI, indicating high imprecision) and lower-extremity physical function (SMD 0.73, 95% CI 0.16-1.30), while finding no effect on skeletal muscle mass under any regimen[^tseng2023].

Muscle-mass evidence is **not unanimous across syntheses**: Cornish and Tseng agree with Santo André's null, but Huang 2020 — an earlier, methodologically distinct synthesis — found a small positive effect, larger at higher doses. The strength/function picture is likewise not consistent: Santo André's pooled, dose-agnostic strength effect is tiny and borderline (SMD 0.12), while Cornish's body-region-stratified analysis and Tseng's dose-stratified network meta-analysis both surface larger effects in specific strength/function subdomains (lower-body strength, upper-extremity strength at high dose). Rather than treating Santo André and Tseng as directly contradictory, the more accurate framing is that these syntheses are **divergent and unresolved**: they differ in included population, dose-category cutoffs, outcome definitions, and analytic method (Santo André's pairwise three-level meta-analysis vs. Tseng's network meta-analysis) — any of which could plausibly explain the different headline strength/function estimates without either synthesis being simply wrong. Note also that Tseng's high-dose upper-extremity strength CI (0.03-3.33) is wide enough to caution against over-reading it as a robust dose-response signal. #gap/contradictory-evidence

## Limitations

- High overall risk of bias across the 14 included studies is a first-order caveat on every pooled estimate, not a minor footnote.
- The statistically significant strength effect (SMD 0.12) is described by the authors themselves as "very small," and its 95% CI lower bound (0.006) is essentially touching the null.
- Subgroup analyses did not detect a significant dose interaction (<2 vs ≥2 g/day) or resistance-training interaction — but a non-significant moderator test is not evidence of equivalence, and both subgroup comparisons are underpowered (only a fraction of the 14 studies fall into each stratum). This should not be read as ruling out a dose-response or exercise-pairing effect.
- **Internal sample-size inconsistency in the source paper:** the abstract states n=1,443 total, but the paper's own Results section states 1,433 (913 female + 520 male = 1,433, not 1,443). This page keeps 1,443 in the frontmatter/TL;DR as the abstract-reported headline figure, per the source, but the discrepancy itself should be treated as a minor red flag about the paper's internal consistency.
- Cross-synthesis disagreement with Huang 2020 (positive muscle-mass effect), Cornish 2022, and Tseng 2023 on muscle-mass and strength/function subdomains is genuine and, per § Agreement and disagreement with other syntheses above, most plausibly reflects differences in included population, dose-category cutoffs, outcome definitions, and analytic method (pairwise vs. network meta-analysis) rather than either synthesis being simply wrong. #gap/contradictory-evidence

## Cited by wiki pages

- [[molecules/compounds/omega-3-fatty-acids]]
- [[phenotypes/sarcopenia]]
- [[studies/therdyothin-2025-omega3-protein-synthesis-meta-analysis]]
- [[studies/smith-2015-omega3-muscle-mass-function-older-adults]]
- [[studies/rodacki-2012-fish-oil-strength-training-elderly-women]]

[^cornish2022]: doi:10.3390/nu14112221 · PMID 35684018 · Cornish SM et al. · *Nutrients* 2022;14(11):2221 · n=2438 · meta-analysis · model: older-adult humans, 16 studies
[^tseng2023]: doi:10.1016/j.arr.2023.102014 · PMID 37442370 · Tseng PT et al. · *Ageing Research Reviews* 2023;90:102014 · network meta-analysis · model: human sarcopenia RCTs, 16 studies
[^huang2020]: doi:10.3390/nu12123739 · PMID 33291698 · PMC7761957 · Huang YH et al. · *Nutrients* 2020;12(12):3739 · n=10 RCTs pooled · meta-analysis · muscle mass +0.33 kg (95% CI 0.05–0.62); >2 g/day subgroup +0.67 kg (95% CI 0.16–1.18) · model: pooled human RCTs · earlier, dissenting synthesis finding a positive muscle-mass effect, in contrast to Santo André 2023's null
