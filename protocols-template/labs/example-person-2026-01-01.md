---
type: lab-panel
subject: "[[people/example-person]]"
draw-date: 2026-01-01
ordering-context: baseline
provider: "self-pay (example lab)"
fasting: yes
analytes:
  apoB-mg-dl: 88
  hba1c-pct: 5.3
  fasting-glucose-mg-dl: 92
  fasting-insulin-uiu-ml: 5.5
  hsCRP-mg-L: 0.8
  ldl-c-mg-dl: 105
  hdl-c-mg-dl: 58
  triglycerides-mg-dl: 74
  vitamin-d-25oh-ng-ml: 34
verified: false
verified-date: null
last-updated: 2026-01-01
---

> ℹ️ **Template page — fake data.** Illustrates the `type: lab-panel` schema. Analyte keys use the `snake-case-with-units` convention so Dataview time-series queries work across draws. See [`../README.md`](../README.md).

# Lab panel — example-person — 2026-01-01 (baseline)

First fasting baseline panel for [[people/example-person]], establishing reference points for the [[plans/example-person-baseline]] monitoring set.

## Interpretation

All values within standard reference ranges. ApoB 88 mg/dL is "normal" but above the optimal (<80) target the protocol aims for; HOMA-IR computes to ~1.25 (glucose 92 × insulin 5.5 / 405), indicating good insulin sensitivity. hsCRP 0.8 mg/L is low (favorable inflammatory baseline). Vitamin D 34 ng/mL is adequate; the 2000 IU/day supplement continues.

These feed the [[biomarkers/phenoage-2018]] composite where albumin/CRP/glucose overlap.

## Notes

Keep analyte keys identical across future panels so the time-series Dataview query in [`../reviews/2026-Q1.md`](../reviews/2026-Q1.md) can chart trends.
