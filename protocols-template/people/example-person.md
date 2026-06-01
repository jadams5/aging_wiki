---
type: person
handle: example-person
sex: male
dob: 1981-06-15
height-cm: 178
weight-kg-baseline: 82
ethnicity: Northern European
family-history:
  - {condition: type-2-diabetes, relation: father, age-at-onset: 58}
  - {condition: hypertension, relation: mother, age-at-onset: 62}
goals:
  - "Compress morbidity; maintain VO2max and lean mass into later decades"
  - "Keep ApoB and fasting glucose in optimal (not just normal) range"
current-conditions: []
current-medications: []
current-supplements:
  - vitamin-D3 2000 IU/day
  - omega-3 1 g/day
allergies: []
verified: false
verified-date: null
last-updated: 2026-01-01
---

> ℹ️ **Template page — fake data.** Every value here is invented to illustrate the `type: person` schema. Replace with real data and set `verified:` only after confirming against source documents. See [`../README.md`](../README.md).

# Example Person — baseline

A 44-year-old male, generally healthy, tracking aging biomarkers and applying lifestyle-first interventions from the research wiki. This page is the canonical home for baseline demographics, standing conditions, and goals; time-bounded intervention regimens live on separate [`plans/`](../plans/) pages and discrete lab draws live on [`labs/`](../labs/) pages.

## Current health

No active diagnoses. Family history of [[deregulated-nutrient-sensing]]-adjacent metabolic disease (paternal type-2 diabetes) motivates an emphasis on glucose and ApoB management. No medications; a minimal supplement stack (vitamin D, omega-3).

## Strategy

The plan is foundations-first: the strongest human evidence is for [[interventions/lifestyle/exercise]] and dietary pattern, so those are implemented before any pharmacological tier. [[molecules/compounds/rapamycin]] and [[molecules/compounds/metformin]] are noted as possible later-tier tools pending baseline labs, not current interventions. Biological-age tracking uses [[biomarkers/phenoage-2018]] from standard panels.

## Baseline anchors

| Domain | Baseline | Source |
|---|---|---|
| Body weight | 82 kg | home scale, fasted AM |
| Resting heart rate | 58 bpm | wearable, 30-day median |
| Fasting glucose | 92 mg/dL | [[labs/example-person-2026-01-01]] |
| ApoB | 88 mg/dL | [[labs/example-person-2026-01-01]] |

## Active protocols

- [[plans/example-person-baseline]] — foundational lifestyle protocol (status: active)
