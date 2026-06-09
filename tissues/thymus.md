---
type: tissue
aliases: [thymic tissue, thymus gland]
parent-system: immune-system
key-cell-types: []
key-aging-phenotypes: ["[[immunosenescence]]"]
related-hallmarks: ["[[stem-cell-exhaustion]]", "[[chronic-inflammation]]", "[[cellular-senescence]]"]
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

# Thymus

The thymus is the primary lymphoid organ where T-cells mature. It sits in the anterior mediastinum and is the **sole site of new naive-T-cell production** from bone-marrow-derived precursors, via positive and negative selection on thymic epithelial cells (TECs).

## Thymic involution — early, dramatic organ aging

**Thymic involution** — the progressive replacement of functional thymic epithelial parenchyma with adipose tissue, beginning at puberty — is one of the earliest and most dramatic organ-aging processes and the central mechanistic driver of [[immunosenescence]]. As naive-T-cell output falls, the adaptive repertoire narrows, impairing responses to new antigens and vaccines. The molecular driver is sex-steroid suppression of TEC proliferation (androgen-receptor signaling represses **FOXN1**, the master TEC transcription factor); thymic contribution to the naive-T-cell pool falls from ~16% in young adults to <1% in old age (see [[disabled-adaptive-immunity]] § Thymic involution for the mechanistic detail, conserved-in-humans table, and regeneration interventions). Thymic regeneration is an active rejuvenation target.

## Thymic health is prognostic for mortality and cancer outcomes

The adult thymus was long dismissed as a metabolically inert post-childhood remnant. Two 2026 *Nature* companion papers (Bernatz, Aerts, Birkbak et al.) overturned this by training a **deep-learning model to score "thymic health" from routine chest CT** (size, shape, and the parenchyma-vs-fat composition) and validating it at population scale [^bernatzAdults2026][^bernatzImmuno2026]:

- In ~27,600 asymptomatic adults (National Lung Screening Trial + Framingham Heart Study), **higher thymic health was associated with ~50% lower all-cause mortality, ~63% lower cardiovascular mortality, and ~36% lower lung-cancer incidence** (adjusted for age, sex, smoking, comorbidities). The cardiovascular-mortality association replicated in the independent Framingham cohort. #gap/no-fulltext-access
- In a pan-cancer immune-checkpoint-inhibitor cohort (n≈3,476), higher thymic health predicted **better immunotherapy outcomes in NSCLC, independent of PD-L1 and tumor mutational burden** — and correlated with TCR repertoire diversity and T-cell-receptor excision circles (TRECs) in TRACERx, confirming the CT score indexes genuine thymic *function*. #gap/no-fulltext-access

This repositions the thymus as a **measurable axis of immune aging** with hard-endpoint relevance, and introduces a candidate opportunistic-imaging biomarker — see [[thymic-health-score]]. Associations are observational (not causal): a healthier thymus may partly *mark* better systemic health rather than drive it. #gap/no-mechanism

## See also

- [[thymic-health-score]] — the CT-derived imaging biomarker introduced by the 2026 papers
- [[immune-system]] · [[immunosenescence]] · [[disabled-adaptive-immunity]]
- [[studies/bernatz-2026-thymic-health-adults]] · [[studies/bernatz-2026-thymic-health-immunotherapy]]

[^bernatzAdults2026]: [[studies/bernatz-2026-thymic-health-adults]] · n≈27,612 (NLST + Framingham) · observational imaging cohort · model: deep-learning thymic-health scoring on chest CT; humans · ~50% lower all-cause / ~63% lower CV mortality, ~36% lower lung-cancer incidence (high vs low) · *closed-access; unverified against full text* #gap/no-fulltext-access
[^bernatzImmuno2026]: [[studies/bernatz-2026-thymic-health-immunotherapy]] · n≈3,476 pan-cancer ICB cohort + TRACERx validation · observational · model: deep-learning on CT; humans · thymic health predicts NSCLC immunotherapy outcomes independent of PD-L1/TMB; correlates with TCR diversity + TRECs · *closed-access; unverified against full text* #gap/no-fulltext-access
