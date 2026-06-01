---
type: framework
aliases: [HR zones, training zones, polarized training, aerobic intensity tiers, Z2, Z4, VO2max zones]
sources:
  - "[[studies/tanaka-2001-hrmax-formula]]"
  - "[[studies/helgerud-2007-norwegian-4x4]]"
  - "[[studies/seiler-2009-polarized-training]]"
  - "[[studies/mandsager-2018-cardiorespiratory-fitness-mortality]]"
covers: [aerobic-training-prescription]
---

# Heart rate zones — aerobic training intensity reference

Reference framework for prescribing aerobic exercise intensity by % HRmax. Used across training-prescription content in this wiki. Future intervention pages that need to anchor an aerobic prescription should link here rather than re-defining zones inline.

This is a **prescriptive reference page** rather than a synthesis MOC over atomic pages — it aggregates canonical training-physiology data from primary sources (Tanaka 2001, Helgerud 2007, Seiler 2009). It uses `type: framework` for navigational discipline but cites primary sources for the quantitative claims rather than carrying `verified:` discipline directly.

---

## HRmax estimation

| Formula | Equation | Notes |
|---|---|---|
| **Tanaka (2001)** | HRmax = 208 − 0.7 × age | More accurate across age ranges, especially >40; meta-analyzed against actual treadmill-tested HRmax in 18,712 subjects [^tanaka2001]. **Default formula.** |
| Fox/220-age | HRmax = 220 − age | Older heuristic; overestimates HRmax in young, underestimates in older adults. Avoid in favor of Tanaka unless legacy comparison needed. |

**Default to Tanaka.** Example: a 45-year-old → HRmax ≈ 208 − 31.5 = **176-177 bpm**.

**Caveat — predicted HRmax has ±10-12 bpm SD around true value** [^tanaka2001]. For training prescription accuracy, a CPET (cardiopulmonary exercise test) at a sports-medicine clinic gives actual HRmax + VO₂max + lactate thresholds for ~$200-400. Worth doing once if zone-based training will be a long-term anchor.

**Aging-context nuance:** Tanaka formula was derived primarily from sedentary and recreationally-active subjects. Trained masters athletes often show HRmax above predicted, sometimes by 5-10 bpm. If chronically training at "Z3" by formula but the perceived exertion feels like Z2, suspect actual HRmax is higher than predicted.

---

## Zone definitions (5-zone model — Coggan/Seiler standard endurance taxonomy)

| Zone | % HRmax | RPE (1-10) | Pace cue | Physiology |
|---|---|---|---|---|
| **Z1** | 50-60% | 2-3 | Easy walking, recovery | Active recovery; primarily fat oxidation; below aerobic base |
| **Z2** | 60-70% | 3-4 | "Conversational" — can hold a full sentence | **Aerobic base**: mitochondrial biogenesis, capillary density, fat-oxidation efficiency. The dominant training zone in polarized models. |
| **Z3** | 70-80% | 5-6 | "Comfortably hard" — can speak 3-5 words at a time | **Tempo / sub-threshold**: mixed substrate use; lactate accumulating but cleared. Sometimes called "no man's land" — too hard for high-volume base training, not hard enough to drive VO₂max gains efficiently. |
| **Z4** | 80-90% | 7-8 | Hard — only single words possible | **Lactate threshold / VO₂max**: maximal sustainable aerobic intensity for 20-60 min; primary VO₂max-driving zone for intervals. |
| **Z5** | 90-100% | 9-10 | All-out — speaking impossible | **Anaerobic / neuromuscular**: 30s-5min intervals; ATP-PCr + glycolytic. Less mitochondrial benefit per unit time than Z4 but additive for max aerobic ceiling. |

---

## Zone bpm lookup by age (Tanaka HRmax)

| Age | HRmax | Z1 (50-60%) | Z2 (60-70%) | Z3 (70-80%) | Z4 (80-90%) | Z5 (90-100%) |
|---|---|---|---|---|---|---|
| 30 | 187 | 94-112 | 112-131 | 131-150 | 150-168 | 168-187 |
| 35 | 184 | 92-110 | 110-129 | 129-147 | 147-165 | 165-184 |
| 40 | 180 | 90-108 | 108-126 | 126-144 | 144-162 | 162-180 |
| **45** | **176-177** | **88-106** | **106-124** | **124-141** | **141-159** | **159-177** |
| 50 | 173 | 87-104 | 104-121 | 121-138 | 138-156 | 156-173 |
| 55 | 169 | 85-101 | 101-118 | 118-135 | 135-152 | 152-169 |
| 60 | 166 | 83-100 | 100-116 | 116-133 | 133-149 | 149-166 |
| 65 | 162 | 81-97 | 97-113 | 113-130 | 130-146 | 146-162 |
| 70 | 159 | 80-95 | 95-111 | 111-127 | 127-143 | 143-159 |

---

## Polarized vs. threshold training models

Two main schools for prescribing aerobic volume distribution:

**Polarized (80/20)** — Seiler's model from elite endurance research [^seiler2009]:
- ~80% of training time in Z1-Z2
- ~20% in Z4-Z5
- ~0% in Z3 ("no-mans-land")
- Stöggl 2014 + Munoz 2014 — polarized outperforms threshold-emphasis training for endurance adaptations in moderately-trained subjects

**Threshold-emphasis (50/30/20)** — older European endurance tradition:
- ~50% Z1-Z2
- ~30% Z3 (tempo work)
- ~20% Z4-Z5
- Better for time-constrained athletes who can't accumulate high Z2 volume

**For aging/longevity contexts**, polarized is favored:
- Z2 volume drives mitochondrial biogenesis + capillary density (key sarcopenia + cardiovascular targets) without chronic cortisol elevation
- Z4 intervals drive VO₂max maintenance — VO₂max is one of the strongest all-cause-mortality predictors in middle-to-older adults (HR 0.20 Elite vs Low fitness, n=122k) [^mandsager2018]
- Chronic Z3 has the recovery cost of Z4 work without the VO₂max-driving stimulus — particularly unfavorable as recovery capacity declines with age

---

## VO₂max-driving interval protocols

**Norwegian 4×4** (Helgerud 2007) [^helgerud2007] — the canonical VO₂max-improvement protocol:

| Phase | Duration | Intensity |
|---|---|---|
| Warmup | 10 min | Z2 |
| Interval 1 | 4 min | Z4 high / Z5 low (~90-95% HRmax) |
| Recovery 1 | 3 min | Z1-Z2 active |
| Interval 2-4 | 4 min × 3 | Z4 high / Z5 low |
| Recovery 2-3 | 3 min × 2 | Z1-Z2 active |
| Cooldown | 5-10 min | Z1 |
| **Total** | **~50 min** | |

Helgerud 2007 showed VO₂max +5.5% and stroke volume +10% over 8 weeks in moderately-trained subjects. **Once/week is sufficient** for VO₂max gains in untrained → moderately trained populations; twice/week shows diminishing returns and increases injury risk.

**Other protocols:**
- **Tabata** (4 min total: 20s on / 10s off × 8) — different physiology, more anaerobic, used for anaerobic capacity rather than VO₂max. Not interchangeable with 4×4.
- **30-30 intervals** (30s Z5 / 30s Z1, 10-20 min total) — Billat protocol; useful for runners but less time-efficient than 4×4 for VO₂max adaptation.
- **Hill sprints** (10-30s all-out × 6-10 reps) — neuromuscular + anaerobic emphasis; useful adjunct but doesn't replace sustained Z4 intervals for VO₂max.

---

## Practical prescription cadence (aging/longevity context)

| Stage | Weekly structure |
|---|---|
| Untrained → re-adapting | 2-3× Z2 walks/jogs, 20-30 min each. No Z4+ intervals until aerobic base is built (4-8 weeks). |
| Aerobic base established | 3-4× Z2 sessions (one 45-60 min long, rest 20-30 min) + 1× Z4 interval session/week |
| Maintenance | Same 3-4 Z2 + 1 Z4; alternate 4×4 with hill sprints / other variation periodically |

Z3 work should be **minimized**, not eliminated entirely — occasional tempo runs in a race-prep context or as an alternative session are fine, but week-after-week Z3 grinding accumulates cortisol and fatigue without commensurate adaptation.

---

## Knowledge gaps

- **HRmax in older trained adults** — Tanaka formula derived primarily from sedentary/recreationally-active subjects; trained masters athletes often show higher actual HRmax. #gap/needs-aging-specific-data
- **Zone boundary precision** — 60% vs 65% vs 70% HRmax for Z2/Z3 transition varies across the literature; "Maffetone 180-minus-age" heuristic for the upper Z2 ceiling is popular but less rigorously validated. #gap/contradictory-evidence
- **Polarized vs threshold in aging populations specifically** — most longevity-context recommendations extrapolate from general endurance research; aging-population-specific RCTs comparing the two models are sparse. #gap/needs-replication

---

## Cross-references

- [[exercise]] — canonical exercise intervention page
- [[mitochondrial-dysfunction]] — primary hallmark target for Z2 volume
- [[stem-cell-exhaustion]] — satellite cell mechanism for resistance training (linked but distinct from aerobic)

---

## Footnotes

[^tanaka2001]: [[studies/tanaka-2001-hrmax-formula]] · n=18,712 (meta-analysis of 351 studies) · meta-analysis · model: human (mixed age, mostly healthy)

[^helgerud2007]: [[studies/helgerud-2007-norwegian-4x4]] · n=40 · randomized · model: moderately-trained adults; 8-week intervention; VO₂max +5.5%, stroke volume +10%

[^seiler2009]: [[studies/seiler-2009-polarized-training]] · review · model: elite endurance athletes; established 80/20 polarized model

[^mandsager2018]: [[studies/mandsager-2018-cardiorespiratory-fitness-mortality]] · n=122,007 · observational (treadmill-tested cohort) · HR 0.20 (95% CI 0.16-0.24) Elite vs Low fitness for all-cause mortality
