---
type: study
doi: 10.1038/s43587-022-00357-y
pmid: 37118425
pmc: PMC10148951
title: "Effect of long-term caloric restriction on DNA methylation measures of biological aging in healthy adults from the CALERIE™ trial"
authors: [Waziry R, Ryan CP, Corcoran DL, Huffman KM, Kobor MS, Kothari M, Graf GH, Kraus VB, Kraus WE, Lin DTS, Pieper CF, Ramaker ME, Bhapkar M, Das SK, Ferrucci L, Hastings WJ, Kebbe M, Parker DC, Racette SB, Shalev I, Schilling B, Belsky DW]
year: 2023
journal: Nature Aging
volume: 3
pages: 248-257
study-design: rct
organism: homo-sapiens
n-subjects: 220   # randomized; 197 with usable DNAm data; 185 at 24-month endpoint
intervention: ["[[caloric-restriction]]"]
hallmarks-tested: ["[[epigenetic-alterations]]"]
human-evidence: true
peer-reviewed: true
preregistered: false   # parent CALERIE-2 trial: NCT00427193; epigenetic clock analysis was post hoc and not pre-specified
key-findings: [dunedinpace-slowed-2-3pct, phenoage-null, grimage-null, dose-response-at-greater-20pct-cr, first-human-rct-cr-epigenetic-clocks]
local-pdf: null
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: null
---

# Effect of long-term caloric restriction on DNA methylation measures of biological aging in healthy adults from the CALERIE™ trial

**Waziry R et al. (Belsky DW, senior author) · *Nature Aging* 3, 248–257 · 2023 · DOI: 10.1038/s43587-022-00357-y**

## TL;DR

The first well-powered human RCT of caloric restriction to analyze [[epigenetic-alterations|epigenetic aging clocks]]. In 220 non-obese adults randomized to 25% CR vs. ad libitum diet for 24 months, CR **slowed the pace of aging** as measured by [[dunedinpace-2022|DunedinPACE]] (d = −0.25 to −0.29, p < 0.003) but produced **no significant change** in biological-age estimates from [[phenoage-2018|PhenoAge]] or [[grimage-2019|GrimAge]]. Actual CR achieved was ~12%, not 25%. The null results on PhenoAge/GrimAge are as informative as the positive DunedinPACE finding: they demonstrate that these clock classes measure distinct dimensions of aging biology.

## Design

### Parent trial — CALERIE-2

The [[caloric-restriction|CALERIE-2 trial]] (NCT00427193) was a multi-center, parallel-group, randomized controlled trial conducted at three US sites (Duke University, Tufts University, Pennington Biomedical Research Center). 220 healthy, non-obese adults (BMI 22–28 kg/m²; age 21–50) were randomized 2:1 to 25% caloric restriction (n = 145) or ad libitum control diet (n = 75) for 24 months. Blinding: impossible for a dietary intervention (participants knew their assignment); outcome assessors for primary metabolic endpoints were blinded.

Primary endpoints of CALERIE-2 were metabolic (resting metabolic rate, core body temperature). Epigenetic aging clocks were a **post-hoc analysis** of stored blood samples; not pre-registered and not a pre-specified endpoint.

### Epigenetic sub-study

- **Biological material:** Peripheral blood samples at baseline, 12 months, and 24 months.
- **DNAm arrays:** Illumina Infinium Methylation EPIC BeadChip arrays.
- **Clocks analyzed:** PhenoAge (Levine et al. 2018), GrimAge (Lu et al. 2019), DunedinPACE (Belsky et al. 2022) — notably, DunedinPACE was developed by the same senior author group.
- **n in DNAm analysis:** 197 (128 CR, 69 control) with usable baseline data; 185 at 24 months (117 CR, 68 control).
- **Statistics:** Repeated-measures ANCOVA via mixed models with heteroskedasticity-robust standard errors. Significance threshold: p < 0.005, chosen as a conservative threshold following guidance from Benjamin et al. 2018 (not pre-registered; the clock analysis was post-hoc).

## Results

### DunedinPACE — significant slowing of pace of aging

| Timepoint | Cohen's d | 95% CI | p |
|---|---|---|---|
| 12 months | −0.29 | (−0.45, −0.13) | < 0.003 |
| 24 months | −0.25 | (−0.41, −0.09) | < 0.003 |

Authors interpret the d ≈ −0.27 average as a **~2–3% slowing** of the biological pace of aging. Effect is maintained through 24 months. The sign is negative because DunedinPACE is a rate (higher = faster aging); CR reduced the rate.

### PhenoAge — null result

| Timepoint | Cohen's d | 95% CI | p |
|---|---|---|---|
| 12 months | −0.03 | (−0.19, 0.12) | > 0.50 |
| 24 months | +0.05 | (−0.11, 0.20) | > 0.50 |

No significant change. Effect sizes are near zero with overlapping CIs.

### GrimAge — null result

| Timepoint | Cohen's d | 95% CI | p |
|---|---|---|---|
| 12 months | −0.04 | (−0.16, 0.07) | > 0.40 |
| 24 months | +0.05 | (−0.07, 0.17) | > 0.40 |

No significant change. Same pattern as PhenoAge.

### Adherence and dose-response

Mean CR actually achieved: **11.9% ± 0.7% (s.e.m.)** — less than half the 25% target. A dose-response sub-analysis comparing participants who achieved >10% vs <10% CR found larger DunedinPACE effects in the higher-adherence group (d = −0.33 vs d = −0.19 at 12 months). An instrumental-variables analysis modeling treatment-on-treated at 20% CR dose projected: DunedinPACE d = −0.43 (95% CI −0.67, −0.19) at 12 months and d = −0.40 (95% CI −0.67, −0.12) at 24 months — suggesting effect would be larger if adherence were higher. PhenoAge and GrimAge remained null in all subgroup and IV analyses.

Sex subgroup: no statistically significant sex × treatment interaction.

## Significance in the wiki

This paper is load-bearing evidence in three separate arguments:

1. **CR slows biological aging in humans** (the geroscience hypothesis). The DunedinPACE result is the first positive RCT signal for this claim in a well-controlled human trial. See [[hypotheses/information-theory-of-aging]] and [[caloric-restriction]].

2. **Epigenetic clocks are not interchangeable.** PhenoAge and GrimAge measure accumulated cumulative damage / age-associated methylation drift, while DunedinPACE measures the *current rate* of aging. CR appears to slow the rate without yet shifting accumulated-damage levels — a mechanistically coherent distinction. This undermines any claim that "biological age clocks" are a unitary construct. See [[dunedinpace-2022]], [[phenoage-2018]], [[grimage-2019]].

3. **Null results on biological-age clocks are informative.** Prior work showed CR extends lifespan in multiple organisms; a naive expectation was that any epigenetic aging clock would respond. The selective response of only DunedinPACE challenges the hypothesis that all clock types are equivalent proxies for "rate of aging." See [[hypotheses/information-theory-of-aging]] § Challenges.

## Limitations

- **Adherence shortfall:** 12% CR achieved vs. 25% target is a major effect-size suppressor. The DunedinPACE effect may be substantially larger under full adherence (the IV analysis suggests so, but that is a modeled estimate).
- **Post-hoc clock analysis:** Epigenetic clocks were not a pre-specified CALERIE-2 endpoint. Risk of outcome-reporting bias exists, though the authors pre-specified their analysis approach for this sub-study.
- **DunedinPACE developer bias:** The positive clock — DunedinPACE — was developed by the senior author (Belsky DW). This is a conflict of interest that warrants independent replication. #gap/needs-replication
- **Duration vs. lifespan:** 24 months is a short window. Whether ~12% CR for 2 years has lasting biological impact beyond the intervention period is unknown. #gap/long-term-unknown
- **Healthy, non-obese population only:** Participants had BMI 22–28; results may not generalize to obese individuals or those with metabolic disease.
- **Blood only:** DNAm measured in peripheral blood; tissue-specific effects in non-proliferating cells (neurons, cardiomyocytes) are unstudied.
- **Clock validity debate:** What DunedinPACE actually measures — and whether a ~2–3% slowing translates to meaningful health outcomes — remains contested. See [[dunedinpace-2022]] § Limitations.

## Cross-links — pages that should cite this study

The following wiki pages have standing claims that this study is load-bearing evidence for and should reference it via footnote:

- [[hypotheses/information-theory-of-aging]] — positive DunedinPACE evidence supports, null PhenoAge/GrimAge challenges the universal-clock premise
- [[caloric-restriction]] — first human RCT showing epigenetic effect of CR
- [[dunedinpace-2022]] — primary validation in an interventional setting; confirms DunedinPACE is intervention-responsive
- [[phenoage-2018]] — negative result; important context that PhenoAge is not intervention-responsive to 24-month CR
- [[grimage-2019]] — negative result; same as PhenoAge
- [[epigenetic-alterations]] (hallmark page) — CR as an intervention targeting this hallmark; human RCT evidence
- [[interventions/lifestyle/caloric-restriction]] (if separate from compound page) — human evidence section
- [[biomarkers/dunedinpace]] (if stub exists) — key validation study
