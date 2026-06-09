---
type: biomarker
aliases: [thymic health, CT thymic health score, deep-learning thymic health, thymic involution imaging biomarker]
modality: imaging
unit: composite-score
training-cohort: "Bernatz 2026: deep-learning model on routine chest CT; validated in NLST (n≈25,031) + Framingham (n≈2,581) for mortality/incidence, and a pan-cancer immune-checkpoint-inhibitor cohort (n≈3,476) for immunotherapy outcomes, with TRACERx molecular validation (TCR diversity, TRECs)"
n-cpgs-or-features: null
model-architecture: composite-other
training-target: morbidity
calibration-tissues: ["[[thymus]]"]
test-retest-icc: null
human-evidence-level: limited
mendelian-randomization: not-applicable
intervention-responsive: partial
literature-checked-through: 2026-06-09
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-06-09 — **not** verified against the full PDFs (DOIs 10.1038/s41586-026-10242-y and 10.1038/s41586-026-10243-x; closed-access, no local full text). The model architecture, training labels, and exact effect sizes are summarized from abstracts + secondary coverage and may be approximate. #gap/no-fulltext-access

# Thymic health score (CT-derived)

The **thymic health score** is a **deep-learning imaging biomarker** that quantifies the functional state of the adult thymus — its size, shape, and tissue composition (functional epithelial parenchyma vs. fatty involution) — from **routine chest CT**. Introduced by Bernatz, Aerts, Birkbak and colleagues in a pair of 2026 *Nature* papers [^bernatzAdults2026][^bernatzImmuno2026], it operationalizes **[[immunosenescence|immune aging]]** as a single scalable readout derivable opportunistically from scans acquired for unrelated indications.

It is, in effect, an **organ-level aging clock for the thymus**, and the first immune-aging imaging biomarker in this wiki to carry population-scale outcome validation. It complements the wiki's existing immune-relevant biomarkers — [[nlr-biomarker|neutrophil-to-lymphocyte ratio]], [[il-6-biomarker|IL-6]] — which index the *inflammatory* arm of immune aging rather than the *thymic-output* arm.

## What it measures

Thymic involution — progressive replacement of thymic epithelial parenchyma with adipose tissue beginning at puberty — is one of the earliest and most dramatic organ-aging processes and the upstream driver of falling naive-T-cell output (see [[thymus]], [[immunosenescence]] § Thymic involution). On CT, this manifests as a shift from soft-tissue-density parenchyma toward fat density in the anterior mediastinum. The deep-learning model scores this composition (plus size/shape) into a continuous **thymic health** value; higher = more preserved functional thymus.

**Molecular ground truth (TRACERx validation):** the score correlates with **TCR repertoire diversity**, **T-cell-receptor excision circles (TRECs)** — a direct marker of recent thymic emigrants — and immune-signaling pathway activation [^bernatzImmuno2026], indicating it indexes genuine thymic *function*, not merely anatomy.

> Model architecture and training labels are not verifiable from available text; `model-architecture: composite-other` and `training-target: morbidity` are best-fit placeholders (the score is validated against mortality/morbidity and immunotherapy outcomes; whether the network was trained on age, expert ratings, or a composition metric is unconfirmed). #gap/no-fulltext-access

## Prognostic performance (approximate — pending full-text verification)

In ~27,600 asymptomatic adults across NLST + Framingham [^bernatzAdults2026], high vs. low thymic health was associated with:

| Outcome | Effect |
|---|---|
| All-cause mortality | ~50% lower (12-yr ~13.4% vs ~25.5%, NLST) |
| Cardiovascular mortality | ~63% lower; replicated independently in Framingham |
| Lung-cancer incidence | ~36% lower (6-yr ~3.4% vs ~5.3%) |

In a pan-cancer immune-checkpoint-inhibitor cohort (n ≈ 3,476) [^bernatzImmuno2026], higher thymic health predicted **reduced progression and mortality in NSCLC, independent of PD-L1 and TMB** — establishing it as a **host-side** complement to tumor-intrinsic immunotherapy biomarkers.

## Strengths and limitations

**Strengths:** free/opportunistic (uses CT already acquired); population-scale validation; an *independent* cohort (Framingham) replicated the cardiovascular signal; molecular validation against TRECs/TCR diversity; captures the thymic-output axis that inflammatory markers ([[nlr-biomarker|NLR]], CRP, [[il-6-biomarker|IL-6]]) miss.

**Limitations:**
- **Single group, single method, 2026** — not yet externally replicated by independent teams. `human-evidence-level: limited` reflects newness, not weak internal evidence. #gap/needs-replication
- **Observational** — predicts outcomes but is not shown to be *causal*; may partly mark general systemic health. #gap/no-mechanism
- **Mendelian randomization not applicable** — a structural/imaging readout, not a germline-instrumentable trait (cf. AGE-Reader skin autofluorescence precedent).
- **Intervention-responsiveness only partial/inferred** — thymic-regeneration interventions (the Fahy 2019 TRIIM GH+DHEA+metformin pilot; IL-7; sex-steroid blockade; FOXN1) move thymic mass on MRI, so this CT score *should* respond, but no trial has yet used this specific score as an endpoint. #gap/dose-response-unclear
- Requires a chest CT; not derivable from blood, unlike methylation/proteomic clocks.

## Relationship to other biomarkers

- Indexes a **different axis** than methylation clocks ([[horvath-clock-2013]], [[grimage-2019]]) or proteomic clocks — those are systemic/multi-tissue; this is **organ-specific (thymus)**.
- Mechanistically *upstream* of inflammatory indices: failing thymic output → naive-T-cell decline → compensatory inflammaging → elevated [[il-6]], [[nlr-biomarker|NLR]].

## See also

- [[studies/bernatz-2026-thymic-health-adults]] · [[studies/bernatz-2026-thymic-health-immunotherapy]] — the source papers
- [[thymus]] — the organ; thymic involution biology
- [[immunosenescence]] · [[disabled-adaptive-immunity]] — the phenotype and proposed hallmark this biomarker indexes

[^bernatzAdults2026]: [[studies/bernatz-2026-thymic-health-adults]] · n≈27,612 (NLST + Framingham) · observational imaging cohort · model: deep-learning on chest CT · ~50% lower all-cause mortality (high vs low thymic health) · *unverified against full text* #gap/no-fulltext-access
[^bernatzImmuno2026]: [[studies/bernatz-2026-thymic-health-immunotherapy]] · n≈3,476 pan-cancer ICB cohort + TRACERx validation · observational · model: deep-learning on CT; humans · thymic health predicts NSCLC immunotherapy outcomes independent of PD-L1/TMB · *unverified against full text* #gap/no-fulltext-access
