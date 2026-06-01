---
type: study
doi: 10.1038/s41467-026-72861-3
pmid: null
pmc: PMC12338914
title: "Semaglutide Slows Epigenetic Aging in People with HIV-associated lipohypertrophy: Evidence from a Randomized Controlled Trial"
authors: [Corley MJ, Dwaraka V, Pang APS, Labbato D, Smith R, Ross Eckard A, McComsey GA]
year: 2026
journal: Nature Communications
study-design: rct
publication-type: research-article
volume: null
issue: null
pages: null
organism: homo-sapiens
n-subjects: 84
intervention: ["[[semaglutide]]"]
hallmarks-tested: ["[[chronic-inflammation]]", "[[deregulated-nutrient-sensing]]", "[[mitochondrial-dysfunction]]"]
human-evidence: true
peer-reviewed: true
preregistered: true
preregistration-doi: NCT04019197
key-findings: [epigenetic-age-deceleration, pcgrimage-reduction, phenoage-reduction, dunedinpace-slowdown, organ-system-clock-concordance, weight-bmi-adjusted-effect]
local-pdf: null
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-05-31 — drafted from the full text (medRxiv preprint / PMC12338914) of a paper now peer-reviewed and published in *Nature Communications* (doi:10.1038/s41467-026-72861-3, published 2026-05-19). Headline quantitative values (PCGrimAge −3.1 yr p=0.007, GrimAge V2 −2.3, PhenoAge −4.9 yr p=0.004, DunedinPACE −0.09 p=0.01) are confirmed unchanged from preprint to published version per user confirmation. Remaining open item: formal verifier cross-check of all quantitative values, individual-clock 95% CIs, and covariate model details against the final published Nature Communications tables (several CIs were not captured during drafting). Published PDF not yet in a local paper archive.

# Semaglutide Slows Epigenetic Aging in HIV-Associated Lipohypertrophy

**TL;DR:** Double-blind, placebo-controlled phase 2b RCT (n=84 with complete paired epigenetic data; 32 weeks; HIV-associated lipohypertrophy population) found that once-weekly subcutaneous semaglutide 1.0 mg produced statistically significant, concordant reductions across multiple second- and third-generation epigenetic aging clocks — including PCGrimAge (−3.08 yr, p=0.007), PhenoAge (−4.90 yr, p=0.004), and DunedinPACE (−0.09 units, approximately 9% slower pace of aging; p=0.01) — after adjustment for sex, BMI, hsCRP, and sCD163 at baseline. Seven of eleven organ-system clocks reached significance, most prominently inflammation, brain, and heart. The authors describe this as the first RCT evidence of semaglutide modulating biological aging by DNA-methylation-based epigenetic clocks.

**Critical context:** Epigenetic aging was a secondary/exploratory (post-hoc) endpoint of a parent trial designed to measure adipose tissue distribution by CT and DEXA. The population is not healthy: participants have HIV-associated lipohypertrophy (lipodystrophy plus antiretroviral-related metabolic disruption plus chronic immune activation). "Adjusted for BMI" is not equivalent to enrolling lean, metabolically healthy participants. This does not establish biological-age benefit in a non-diseased individual. Three of seven authors are affiliated with TruDiagnostic, the company whose clocks are this study's endpoints — a material conflict of interest. See § Interpretive caveats and § Conflict of interest below.

## Design

| Field | Value |
|---|---|
| Trial design | Double-blind, randomized, placebo-controlled, phase 2b |
| Duration | 32 weeks |
| Registration | NCT04019197 |
| Sites | Single-center |
| Randomized | 108 |
| Completed trial | 92 |
| Complete epigenetic data | 84 (n=45 semaglutide; n=39 placebo) |
| Semaglutide dose | 0.25 mg × 4 wk → 0.5 mg × 4 wk → 1.0 mg weekly × 24 wk (all SC, clinic-administered) |
| Comparator | Volume-matched saline placebo, identical schedule |

**Population:** People with HIV (virologically suppressed) with clinically diagnosed lipohypertrophy. Median BMI 32.9 kg/m², mean age 49 ± 12 years, 58% male, 58% Black, median CD4 762 cells/μL, median ART duration ~14 years. Median hsCRP 4.1 μg/mL; median sCD163 605 pg/mL — both elevated above typical population norms, reflecting chronic immune activation characteristic of treated HIV.

## Endpoints

**Primary endpoints (parent trial):** Changes in visceral and subcutaneous adipose tissue (CT at L4–L5) and total/regional body fat (DEXA). Epigenetic aging analysis was NOT the primary endpoint.

**Epigenetic aging endpoints (current analysis):** Secondary/exploratory, via post-hoc analysis of biobanked blood samples collected at baseline and week 32. Because the epigenetic outcomes are exploratory, the authors explicitly state they did NOT adjust p-values for multiple comparisons across clocks.

## Statistical model

Primary analysis: ANCOVA with treatment group as predictor. Full covariate set: **baseline value of the epigenetic measure (regression-to-mean correction), treatment group, age, sex, baseline BMI, baseline hsCRP, and baseline sCD163**.

Sensitivity analyses substituted visceral fat mass for BMI, and IL-6 or sCD14 for hsCRP; results were concordant. Interaction terms between treatment and baseline epigenetic age acceleration and baseline BMI were explored.

## Epigenetic clock results

### Second-generation mortality-predictive clocks

| Clock | Effect (units/yr) | 95% CI | p-value |
|---|---|---|---|
| PCGrimAge | −3.08 years | −5.29 to −0.86 | 0.007 |
| GrimAge V1 | −1.39 years | −2.72 to −0.05 | 0.042 |
| GrimAge V2 | −2.26 years | −3.94 to −0.59 | 0.008 |
| PhenoAge | −4.90 years | (not reported separately) | 0.004 |
| PCPhenoAge | −3.68 years | (not reported separately) | 0.02 |

### Third-generation pace-of-aging clock

| Clock | Effect | 95% CI | p-value |
|---|---|---|---|
| DunedinPACE | −0.09 units/yr | −0.17 to −0.02 | 0.01 |

Interpreted as approximately a 9% slowing of the annual pace of biological aging [^corley2025].

### Multi-omic and composite clocks

| Clock | Effect | p-value |
|---|---|---|
| OMICmAge | −2.20 years/yr | 0.009 |
| RetroAge | −2.18 years/yr (95% CI −4.14 to −0.21) | 0.030 |
| SystemsAge | −4.17 years/yr | 0.009 |

### Organ-system clocks (11 systems; all adjusted for age, sex, BMI, hsCRP, sCD163)

**Significant (p < 0.05):**

| System | Effect (years) | p-value |
|---|---|---|
| Inflammation | −5.01 | 0.0056 |
| Brain | −4.99 | 0.0049 |
| Metabolic | −4.72 | 0.0090 |
| Blood | −4.37 | 0.011 |
| Heart | −4.34 | 0.0088 |
| Kidney | −4.20 | 0.014 |
| Liver | −4.19 | 0.042 |

**Non-significant trends (p > 0.05):**

| System | Effect (years) | 95% CI | p-value |
|---|---|---|---|
| Musculoskeletal | −2.32 | −5.45 to 0.81 | 0.15 |
| Lung | −2.21 | −5.19 to 0.76 | 0.14 |
| Immune | −1.60 | −4.83 to 1.64 | 0.33 |
| Hormone | −1.33 | −4.01 to 1.35 | 0.33 |

### Clocks showing no significant change or null/heterogeneous responses

| Clock | Effect | p-value | Notes |
|---|---|---|---|
| Intrinsic Capacity (IC) | +0.003 IC score | 0.31 | resilience-oriented |
| AdaptAge | +3.49 yr (95% CI −2.20 to 9.18) | 0.23 | non-significant trend toward older |
| CausAge | +0.46 yr (95% CI −2.40 to 3.32) | 0.75 | causal-damage clock, null |
| DamAge | −2.22 yr (95% CI −7.09 to 2.65) | 0.37 | non-significant |

The heterogeneous response across clock classes is informative: clocks weighted toward mortality risk and inflammation (PCGrimAge, PhenoAge, DunedinPACE) show robust response; causality-driven damage clocks (CausAge, DamAge) do not. This pattern is mechanistically consistent with semaglutide's known primary action on inflammation and adipose-metabolic dysregulation rather than fundamental DNA-repair-level damage accumulation [^corley2025].

## Extrapolation to the wiki's core question

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Yes — GLP-1R signaling and DNA methylation aging-clock biology both human |
| Phenotype conserved in humans? | Yes — study is entirely human |
| Replicated? | Not yet — single RCT, single center; no independent replication |

## Interpretive caveats

### This is the strongest current human RCT signal for GLP-1-associated epigenetic aging deceleration — with important scope limits

This study provides the most rigorous currently available human evidence that semaglutide moves epigenetic aging clocks in a favorable direction (deceleration), with concordance across 10 of 14 clocks tested and statistical separation from placebo after controlling for BMI and inflammatory markers (hsCRP, sCD163). That covariate adjustment is important for the wiki's core question (does GLP-1 have weight-independent aging benefit?): it raises the possibility that some of the biological-age benefit is not simply mediated by weight loss or systemic inflammation alone.

**However, the following limitations directly constrain how that signal can be interpreted:**

1. **Diseased and metabolically abnormal population.** HIV-associated lipohypertrophy involves lipodystrophy (pathological adipose redistribution, not excess adiposity alone), antiretroviral drug metabolic toxicity, and persistent low-grade immune activation from viral reservoir + antiretroviral effects — even when HIV is virologically suppressed. Participants had a median hsCRP of 4.1 μg/mL (elevated; clinical concern threshold typically ~3 μg/mL) and median sCD163 of 605 pg/mL (monocyte/macrophage activation marker markedly elevated vs healthy adults). This is a population starting from a higher burden of [[chronic-inflammation]] and metabolic dysfunction than a lean, healthy older adult. Adjusting for BMI and hsCRP statistically does not recreate the biology of a metabolically healthy person. The biological-age signal may reflect partial remediation of disease-driven acceleration that would not be present in an already-optimized individual. #gap/needs-healthy-population-replication

2. **Secondary/exploratory endpoint, no multiple-comparisons correction.** Epigenetic aging was not the primary endpoint of this trial. The large number of clocks tested (≥14) without p-value adjustment inflates the false-discovery probability. Clock-level signals should be treated as hypothesis-generating, not confirmatory.

3. **Short duration (32 weeks).** Durability beyond 8 months is unknown. Whether epigenetic clock improvements persist, accumulate, or rebound after drug discontinuation is untested. #gap/long-term-unknown

4. **Peer-reviewed in *Nature Communications*.** The paper was published 2026-05-19 in *Nature Communications* (doi:10.1038/s41467-026-72861-3). Headline quantitative values are confirmed unchanged from the medRxiv preprint. The published PDF is not yet in a local paper archive; a formal verifier cross-check of all tables and CIs against the final Nature Communications version is still pending (see banner).

5. **Single-center, relatively small n.** n=84 with complete epigenetic data; n=45 vs n=39 per arm. Single center limits generalizability.

6. **Competing interests — material COI.** Three of seven authors have direct ties to TruDiagnostic, the commercial epigenetic testing company whose clocks constitute the study's endpoints: Dwaraka V and Smith R are employees of TruDiagnostic; Corley MJ (first author) is a scientific advisor to TruDiagnostic. All epigenetic clock analyses used TruDiagnostic's pipeline. A company that develops and sells epigenetic aging clocks co-authored a study demonstrating that a major drug improves those same clocks. This is a material conflict for any reader weighting this paper as independent evidence of a drug's effect on biological aging. The effect sizes and p-values may be accurate, but clock selection, analytic pipeline choices, and interpretive framing were all influenced by authors with a direct commercial interest in favorable results. Principal investigator McComsey GA serves as a research consultant for Merck, GlaxoSmithKline/ViiV, and Gilead. See § Conflict of interest below.

### What this study does not answer

- Does semaglutide slow biological aging in lean, healthy individuals without metabolic disease or chronic infection?
- Which mechanism is responsible — weight loss, inflammation reduction, direct GLP-1R-mediated epigenetic reprogramming, or all three?
- Do the epigenetic clock improvements translate to clinical outcomes (mortality reduction, reduced morbidity, functional preservation)?
- Is the effect dose-dependent? This trial used 1.0 mg weekly, not the 2.4 mg weight-management dose.
- Does the biological-age effect persist after treatment ends?

## Hallmarks engaged

- [[chronic-inflammation]] — primary. Both statistical adjustment covariates (hsCRP, sCD163) and the inflammation organ-system clock (−5.01 yr, p=0.006) implicate this as a central axis.
- [[deregulated-nutrient-sensing]] — secondary. HIV lipohypertrophy involves insulin resistance (median HOMA-IR 2.9 at baseline) and metabolic dysregulation; the metabolic organ-system clock showed −4.72 yr (p=0.009).
- [[mitochondrial-dysfunction]] — indirect. Adipose tissue metabolic reprogramming is a proposed mechanism in GLP-1 biology; the metabolic and liver organ-system clock responses are consistent with this.

## Limitations (authors' stated)

1. Post-hoc analysis design (epigenetic outcomes not pre-specified in the parent trial).
2. Limited sample size (n=84 for epigenetic analysis) and single-center.
3. Short follow-up duration (32 weeks); durability unknown.
4. Population-specific findings (HIV-associated lipohypertrophy) may not generalize.
5. Epigenetic clock changes not yet linked to clinical outcomes in this cohort.
6. No multiple-comparisons adjustment for the large clock battery.

## Conflict of interest

**This study has a material conflict of interest that directly affects how its findings should be weighted.**

Three of seven authors have financial ties to TruDiagnostic, the company that develops and commercially sells the epigenetic aging clocks used as this study's primary outcome measures:

| Author | Role | TruDiagnostic affiliation |
|---|---|---|
| Corley MJ (first author) | UCSD Dept. of Medicine | Scientific advisor to TruDiagnostic |
| Dwaraka V | — | Employee of TruDiagnostic |
| Smith R | — | Employee of TruDiagnostic |
| McComsey GA (PI) | UH Cleveland / CWRU | Research consultant: Merck, GSK/ViiV, Gilead (no TruDiagnostic tie) |

The conflict is structural, not merely nominal: TruDiagnostic performed the epigenetic clock analyses, selected which clocks to include, and three co-authors have direct commercial incentive for those clocks to produce favorable results in a high-profile drug trial. A positive result — "semaglutide improves our clocks" — is commercially valuable to TruDiagnostic in the direct-to-consumer epigenetic testing market.

**This does not mean the results are wrong.** The concordance across 10 of 14 clocks and the statistical separation from placebo on pre-specified clock families are harder to dismiss as artifact. But the independence assumption that justifies treating this as arm's-length evidence for semaglutide's biological-aging benefit is violated. A reader relying on this paper to make a clinical decision should weight it as: "a well-designed RCT with a specific COI in clock selection and analysis, consistent with a real drug effect, but requiring independent replication with a disinterested epigenetic platform."

Affiliations are confirmed from the published *Nature Communications* author/COI section (doi:10.1038/s41467-026-72861-3, published 2026-05-19). Full verifier cross-check against the printed COI page is pending (see page banner).

## Cross-references

- Primary compound: [[semaglutide]]
- Intervention class: [[interventions/pharmacological/glp1-agonists]]
- Hallmark: [[chronic-inflammation]]
- Epigenetic clocks used: [[biomarkers/grimage-2019]], [[biomarkers/phenoage-2018]], [[biomarkers/dunedinpace-2022]]
- Related study in different population: [[studies/waziry-2023-calerie-epigenetic-clock]] (dietary restriction + DunedinPACE in non-diseased adults)

## Footnotes

[^corley2025]: [[studies/corley-2025-semaglutide-epigenetic-aging]] · n=84 (45 semaglutide / 39 placebo) · rct (double-blind, phase 2b, 32 wk) · model: HIV-associated lipohypertrophy adults · doi:10.1038/s41467-026-72861-3 · published *Nature Communications* 2026-05-19 · pmc:PMC12338914 (preprint doi:10.1101/2025.07.09.25331038 originally deposited on medRxiv 2025) · **COI: 3/7 authors affiliated with TruDiagnostic (Corley MJ — scientific advisor; Dwaraka V, Smith R — employees); TruDiagnostic performed all clock analyses** · epigenetic clocks were secondary/exploratory endpoints; no multiple-comparisons correction applied across clock battery
