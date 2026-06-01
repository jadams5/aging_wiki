---
type: protocol
subject: "[[people/example-person]]"
status: active
started: 2026-01-01
ended: null
target-hallmarks: ["[[deregulated-nutrient-sensing]]", "[[cellular-senescence]]"]
intervention-arms: ["[[interventions/lifestyle/exercise]]", "[[interventions/lifestyle/caloric-restriction]]", "[[interventions/lifestyle/protein-intake]]"]
evidence-grade: tier-1
monitoring-required: [apoB-mg-dl, hba1c-pct, fasting-glucose-mg-dl, weight-kg]
stop-criteria:
  - "Unintended weight loss >5% in a quarter without intent"
  - "Any new cardiac symptom during exercise progression"
review-cadence: quarterly
last-updated: 2026-01-01
---

> ℹ️ **Template page — fake data.** Illustrates the `type: protocol` schema. Citation discipline still applies to *evidence* claims in the body (not to personal numbers). See [`../README.md`](../README.md).

# Baseline lifestyle protocol — example-person

A foundations-first regimen targeting [[deregulated-nutrient-sensing]] through the interventions with the strongest human evidence, before any pharmacological tier is considered.

## Arms

### A. Resistance + zone-2 training
Progressive resistance training 2–3×/week plus ~150 min/week of zone-2 aerobic work. Exercise is the best-evidenced geroprotective intervention in humans, improving insulin sensitivity, mitochondrial density, and preserving lean mass.[^exercise] Anchored to [[interventions/lifestyle/exercise]].

### B. Dietary pattern + protein floor
Mediterranean-style pattern with a protein floor of ~1.6 g/kg/day to protect lean mass during any caloric deficit.[^protein] Mild caloric restriction is implemented through dietary quality rather than aggressive restriction, given the thin human evidence for aggressive [[interventions/lifestyle/caloric-restriction]] and its lean-mass risk.

### C. Supplement stack
Vitamin D and omega-3 only, pending baseline labs. No NAD+ precursors or senolytics at this tier — [[interventions/pharmacological/senolytics]] remain investigational in humans and are explicitly deferred.

## Monitoring

ApoB, HbA1c, fasting glucose quarterly (see [[labs/example-person-2026-01-01]] for baseline); body weight daily via [`../tracking/example-person/weight.csv`](../tracking/example-person/weight.csv).

## Decision deferrals

- **Pharmacological tier** ([[molecules/compounds/rapamycin]], [[molecules/compounds/metformin]]): not started; revisit at year-1 review if metabolic markers drift.

[^exercise]: [[interventions/lifestyle/exercise]] · see page for graded human evidence.
[^protein]: [[interventions/lifestyle/protein-intake]] · see page for the lean-mass-during-deficit rationale.
