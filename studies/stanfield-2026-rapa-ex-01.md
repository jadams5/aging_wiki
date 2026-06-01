---
type: study
doi: 10.1002/jcsm.70274
pmid: 41985884
pmc: PMC13082878
title: "Exercise and Weekly Sirolimus (Rapamycin) in Older Adults: RAPA-EX-01 Randomised, Double-Blind, Placebo-Controlled Trial"
authors: [Stanfield B, Leroux B, Kaeberlein M, Jones J, Lucas R]
year: 2026
journal: Journal of Cachexia, Sarcopenia and Muscle
study-design: rct
organism: homo-sapiens
n-subjects: 40
intervention: ["[[rapamycin]]"]
hallmarks-tested: ["[[deregulated-nutrient-sensing]]"]
human-evidence: true
peer-reviewed: true
preregistered: true
key-findings: [primary-endpoint-null, sensitivity-analyses-favor-placebo, no-epigenetic-age-effect, increased-AE-burden]
local-pdf: null
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Primary endpoint, complete-case + per-protocol sensitivity analyses, all secondary outcomes (grip strength, 6MWD, SF-36 physical/mental, hsCRP, four epigenetic clocks: PCGrimAge / SystemsAge / OMICmAge / DunedinPACE), AE summary, and SAE pneumonia case extracted from the PMC OA full text (PMC13082878) via web-fetch HTML rendering. No local PDF read; supplementary materials and data tables not checked. ANZCTR trial registration ACTRN12624000790549 referenced but not separately verified."
---

# Stanfield et al. 2026 — RAPA-EX-01 trial

The first randomized double-blind placebo-controlled trial designed to test whether **once-weekly sirolimus combined with home-based exercise enhances functional gains in older adults** — the "rapamycin cycling hypothesis" derived from preclinical work suggesting alternating mTORC1 inhibition (rest days) and activation (training days) could amplify training-induced adaptation while preserving autophagy. The trial was null on the primary endpoint and **the sensitivity analyses favored placebo**, with statistically significant attenuation of chair-stand gains in the per-protocol cohort. Adverse-event burden was higher in the sirolimus arm, including one possibly drug-related serious infection (pneumonia) after a single dose.

Together with the [[studies/pearl-2025-rapamycin-healthspan|PEARL trial]] (null on visceral adiposity, 2025), RAPA-EX-01 marks the second major aging-rejuvenation RCT of rapamycin to fail or trend negative on its prespecified primary endpoint.

## Design

- **Registration:** ACTRN12624000790549 (ANZCTR)
- **Population:** sedentary adults aged 65–85; mean age 72.2 yr; 47.5% female
- **Allocation:** 1:1 randomization, double-blind
- **n=40** (20 sirolimus, 20 placebo)
- **Intervention:** sirolimus 6 mg orally **once weekly** for 13 weeks (vs. matched placebo)
- **Co-intervention:** standardized home-based exercise programme — chair-stands (resistance) + exercycle (endurance), 3×/week, both arms
- **Primary outcome:** change in 30-second chair-stand repetitions at week 13 (intention-to-treat; ANCOVA adjusted for baseline performance, age stratum, and sex)
- **Sensitivity analyses (prespecified):** complete-case (CC) and per-protocol (PP, defined as ≥75% dose adherence + exercise adherence)
- **Secondary outcomes:** grip strength, 6-minute walk distance (6MWD), SF-36 physical and mental component scores, C-reactive protein (CRP), four epigenetic age estimators

## Primary outcome — 30-second chair-stand

Both arms improved chair-stand performance over 13 weeks (placebo: 14.30 ± 3.42 → 20.89 ± 5.92 reps; sirolimus: 13.75 ± 2.12 → 17.56 ± 4.18 reps).

**Adjusted mean difference (sirolimus − placebo), ITT:** **−2.13 repetitions** (95% CI −4.61 to 0.34; p=0.089; Cohen's d = −0.53). Direction favors placebo; not statistically significant at the 0.05 threshold.

| Analysis | n (sirolimus / placebo) | Adjusted Δ | 95% CI | p | Cohen's d |
|---|---|---|---|---|---|
| ITT | 20 / 20 | −2.13 reps | −4.61 to 0.34 | 0.089 | −0.53 |
| Complete-case | 16 / 19 | **−2.46 reps** | **−4.87 to −0.06** | **0.045** | −0.64 |
| Per-protocol | 15 / 16 | **−3.44 reps** | **−5.86 to −0.99** | **0.007** | **−0.90** |

The CC and PP sensitivity analyses both reached statistical significance favoring placebo. The PP effect size (Cohen's d = −0.90) is large.

**Discontinuation:** five participants in the sirolimus arm and three in the placebo arm discontinued early; their available data were retained in the ITT analysis.

## Secondary outcomes

| Outcome | Adjusted Δ (sirolimus − placebo) | 95% CI | p | Direction |
|---|---|---|---|---|
| Grip strength (kg) | −1.19 | −3.52 to 1.18 | 0.344 | favors placebo, ns |
| 6MWD (m) | −4.87 | −28.97 to 19.71 | 0.706 | favors placebo, ns |
| SF-36 Physical Component | −2.76 | −8.81 to 3.32 | 0.376 | favors placebo, ns |
| SF-36 Mental Component | −1.22 | −4.16 to 1.91 | 0.455 | favors placebo, ns |
| C-reactive protein (mg/L) | +4.26 | −0.04 to 8.68 | 0.152 | sirolimus arm higher, ns |

**CRP caveat:** the +4.26 mg/L difference was driven by two outliers in the sirolimus arm with marked elevations (17 and 50 mg/L) at week 13. Excluding those two participants reduced the between-arm difference to <1 mg/L. The CRP signal should not be over-interpreted; immune-modulation interpretation requires biopsy-level mechanism work the trial did not perform.

## Epigenetic age clocks

Four estimators were assessed; all showed mixed, non-significant differences between arms.

| Clock | Adjusted Δ (sirolimus − placebo) | 95% CI | p | Cohen's d |
|---|---|---|---|---|
| PCGrimAge (years) | −2.28 | −4.93 to 0.44 | 0.098 | −0.112 |
| SystemsAge (years) | +1.04 | −0.69 to 2.55 | 0.24 | +0.137 |
| OMICmAge (years) | +0.28 | −0.74 to 1.40 | 0.592 | +0.002 |
| DunedinPACE | +0.0035 | −0.048 to 0.056 | 0.905 | +0.04 |

PCGrimAge (a principal-component refinement of [[biomarkers/grimage-2019|GrimAge]]) showed the only suggestive trend (p=0.098, favoring sirolimus arm), but this contradicts the functional-outcome direction and the other three clocks. The authors characterize the panel as showing "mixed, non-significant trends."

This is informative for the broader [[frameworks/biological-age-measurement|biological-age-measurement]] discussion: epigenetic clocks did not align with the functional outcomes that the trial was designed to detect, illustrating the open question of whether clocks measure something interventionally meaningful in short-duration trials.

## Adverse events

- **≥1 AE:** 17/20 (85%) in each arm
- **Total AEs:** 99 (sirolimus) vs. 63 (placebo); incidence rate ratio 1.57 (95% CI 0.86–2.87; p=0.14)
- **Mean per-participant:** 4.95 (sirolimus) vs. 3.15 (placebo)
- **Most common AEs (Grade 1, mild):** headache, fatigue, upper respiratory tract symptoms
- **Possibly/probably drug-related:** 35% (sirolimus) vs. 15% (placebo)
- **SAEs:** 1 in sirolimus arm (see below), 1 in placebo arm (not detailed in extraction)

### Serious adverse event — pneumonia (Participant MDMR-00015)

- **Onset:** 2 October 2024
- **Presentation:** community-acquired pneumonia with nasal congestion and severe constipation
- **Treatment:** overnight hospitalization; IV antibiotics + steroids; constipation managed conservatively
- **Outcome:** symptoms resolved; participant withdrew from trial
- **Exposure:** had received only a **single dose of sirolimus** before the event
- **Causality:** "Given sirolimus's immunosuppressive properties, a causal contribution to this serious AE cannot be excluded."

This is mechanistically notable. Single-dose exposure to weekly sirolimus 6 mg is short — but a 62-h half-life means biologically active drug is still present at the time of infection presentation. The event is consistent with the documented immune-suppression risk profile that motivated rapamycin's transplant indication.

## Cycling hypothesis — what the trial tested and why it didn't work

The "cycling hypothesis" proposed by preclinical models (Kaeberlein lab and others) holds that **alternating mTORC1 activation (training days) and inhibition (rest days)** could preserve or amplify training-induced muscle adaptations while still permitting autophagy-mediated cellular rejuvenation on rest days. Once-weekly 6 mg dosing was the schedule chosen to test this.

The result is the opposite — sirolimus *attenuated* training gains. The authors propose a pharmacokinetic explanation:

> "The drug's terminal half-life of approximately 62 h implies that biologically active concentrations persisted well into the subsequent training week."

In other words, "once-weekly" dosing at 6 mg does not produce the on-off pulse the cycling hypothesis requires — drug persists across the training window, suppressing mTORC1 during exercise itself, blunting the training stimulus. This is a useful null test: the cycling hypothesis is not falsified in principle, but **6 mg/week is too high a dose to produce the cycling pharmacology**. Lower doses or less-frequent dosing might still produce an on-off pulse compatible with the hypothesis.

## Limitations (authors' own)

1. **Exercise modality.** Home-based body-weight resistance (chair-stands) has a lower ceiling for maximal strength development than gym-based heavy resistance training; the strength-gain magnitude available for either arm to demonstrate was constrained.
2. **Trial duration.** 13 weeks is too short to assess longer-term effects of intermittent rapamycin combined with exercise, particularly at lower doses or less-frequent schedules.
3. **No mechanistic measurements.** Muscle biopsies were not performed; circulating drug levels were not monitored. The "blunting" attribution to persistent mTORC1 inhibition is inferential, not directly demonstrated.
4. **Activity tracking.** No accelerometry; daily diaries used to track non-exercise physical activity (NEPA). Authors report no systematic between-arm difference in extra-curricular activity, but this is self-report.

## Implications for the rapamycin aging-rejuvenation thesis

- This is the **second consecutive major aging-focused rapamycin RCT to report null/negative on its primary endpoint** (after [[studies/pearl-2025-rapamycin-healthspan|PEARL 2025]] on visceral adiposity).
- Both trials used compounded or commercial sirolimus at 5–10 mg/week — the n=1 biohacker dose range that has been the de facto aging-community standard.
- Neither result falsifies the broader rapamycin-extends-mammalian-lifespan thesis (mouse ITP data is robust at 14–42 ppm in chow continuous; see [[studies/harrison-2009-rapamycin-lifespan-itp|Harrison 2009]] and [[studies/miller-2014-rapamycin-dose-sex-itp|Miller 2014]]).
- They DO meaningfully constrain the **dose × schedule × age-at-initiation × outcome** space in which weekly sirolimus produces a clinically detectable aging benefit in older adults — at least for visceral fat mass (PEARL) and exercise-trained functional capacity (RAPA-EX-01).
- Authors' own bottom line: "regular physical activity remains the unequivocal first-line strategy for preserving and improving function in older adults."

## Cross-references

- [[rapamycin]] — compound page; this is the third human RCT cited there (after Mannick 2014 and PEARL 2025)
- [[mtor]] — mechanism target
- [[interventions/pharmacological/mtor-inhibitors]] — class page
- [[hypotheses/hyperfunction-theory]] — rapamycin is the canonical hyperfunction-theory test molecule
- [[studies/pearl-2025-rapamycin-healthspan]] — preceding null aging-RCT
- [[studies/mannick-2014-everolimus-immune-aging]] — earlier positive immune-aging trial (everolimus, not sirolimus)
- [[biomarkers/grimage-2019]] — PCGrimAge is a refinement of GrimAge
- [[biomarkers/dunedinpace-2022]] — DunedinPACE used as secondary outcome
