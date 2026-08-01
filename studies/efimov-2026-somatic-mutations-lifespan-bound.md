---
type: study
doi: 10.1038/s41514-026-00421-6
pmid: 42350444
pmc: null
title: "Somatic mutations impose an entropic upper bound on human lifespan"
authors: [Efimov E, Fedotov V, Malaev L, Khrameeva EE, Kriukov D]
year: 2026
journal: npj Aging
study-design: observational
publication-type: research-article
volume: null
issue: null
pages: "advance online publication (25 June 2026)"
organism: homo-sapiens
n-subjects: "in-silico: 16 life-table populations + 229 healthy-control single-cell mutation samples from 6 source studies; synthetic cohorts up to 10^6 trajectories/model"
intervention: []
hallmarks-tested: ["[[genomic-instability]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [somatic-mutation-only-lifespan-bound, post-mitotic-cell-bottleneck, proliferating-tissue-resilience, multi-organ-reliability-model, mutation-lethality-sensitivity-analysis]
local-pdf: null
verified: true
verified-date: 2026-07-21
verified-by: claude
verified-scope: "Full open-access Article-in-Press manuscript and supplement checked end-to-end; dataset/sample accounting, mutation-rate and lethality inputs, simulation sizes, organ thresholds, Fréchet-bound interpretation, model outputs, limitations, and publication status verified."
---

# Somatic mutations impose an entropic upper bound on human lifespan

**Efimov E, Fedotov V, Malaev L, Khrameeva EE, Kriukov D · *npj Aging* · 2026 · DOI: 10.1038/s41514-026-00421-6 · PMID: 42350444 · published 25 June 2026 · open access, unedited Article in Press**

## TL;DR

Efimov et al. construct a human-parameterized survival model asking a deliberately counterfactual question: **if every age-progressive process except somatic mutation accumulation were eliminated, when would mutation-driven loss of essential cells become fatal?** The model predicts a median survival of **156 years** under the authors' independence model and a dependence-bounded range of **146–194 years**; its corresponding model-defined “maximum” (the age at survival probability 10^-5, not a hard biological maximum) is **470 years**, bounded at **210–557 years**. Post-mitotic neurons and cardiomyocytes create nearly all of the modeled constraint, whereas hepatocyte and airway-basal-cell replication delays mutation-only tissue failure for thousands of years.[^efimov2026]

These figures are **conditional simulation outputs, not observed human lifespans and not forecasts of what rejuvenation medicine will achieve**. Their evidentiary value lies in converting the [[hypotheses/somatic-mutation-theory-of-aging|somatic mutation theory of aging]] into an explicit, auditable parameter framework. The authors explicitly acknowledge that the full counterfactual cannot be conventionally falsified because no organism ages through somatic mutations alone; individual inputs, implementations, and tissue-level predictions remain testable. The main weakness is equally central: the per-mutation probability of immediate cell death is inferred rather than measured, and the model excludes sublethal dysfunction, cancer, clonal expansion, most organs, and systemic coupling.

## Why this matters for the wiki

The wiki already records the cross-species observation that somatic mutation rate inversely tracks lifespan ([[processes/somatic-mutation-accumulation]]) and treats the causal interpretation as contested ([[hypotheses/somatic-mutation-theory-of-aging]]). This paper adds a distinct kind of evidence: **a mechanistic-demographic estimate of how much mortality one proposed aging driver could generate by itself**. It therefore supports neither “mutations explain all aging” nor “mutations are negligible.” Under its assumptions, mutation-driven cell loss removes roughly 90% of the median survival available in the fixed-background, non-aging baseline, yet still leaves median survival about twice the empirical Swiss median.

The study also sharpens a tissue-level prediction: preserving or replacing irreplaceable post-mitotic cells should matter far more for extreme longevity than further improving turnover in already regenerative tissues. That prediction should be treated as model-derived until mutation-specific cell-loss rates and organ thresholds can be measured directly.

## Study design

This is an **in-silico dynamical-systems and reliability-theory study**. It generated no new experimental data. The authors incrementally coupled age-independent demographic mortality to mutation-driven organ failure, then integrated four organ-specific survival components—derived from five modeled cell populations—as a series system in which failure of any critical organ ends organismal survival.[^efimov2026]

| Model | Cell biology represented | Main purpose |
|---|---|---|
| **I** | Constant all-cause background hazard; no age-progressive biology | Establish the non-aging comparator |
| **II** | Exponential loss of non-dividing cells from lethal single-nucleotide variants (SNVs) and insertions/deletions (indels) | Model frontal-cortex neurons and cardiomyocytes |
| **IIIA** | Somatic-cell loss plus replication with finite proliferative potential | Model hepatocytes without progenitor support |
| **IIIB** | Hepatocytes plus self-renewing/differentiating liver progenitor cells | Model a regenerative tissue with an upstream cell reservoir |
| **IIIC** | Stem-like bronchial basal cells that self-renew and differentiate but have finite proliferative potential | Model a regenerative population without an external stem-cell reservoir |

### Empirical inputs

- **Background mortality:** Human Life-Table Database records from 16 populations, restricted to 1998 onward. The primary baseline freezes the Swiss all-cause hazard at age 30, selected as the lowest age-30 extrinsic hazard among the authors' long-record populations. Under this constant hazard, median survival is 1,759 years and the 10^-5-survival time is 29,221 years.
- **Somatic mutation accumulation:** 229 healthy-control cell/sample observations from six source papers and seven dataset rows: 65 neurons (51 Luquette + 4 Ganz + 10 Motyer), 47 cardiomyocytes, 51 hepatocytes, 13 liver progenitor cells (LPCs), and 53 bronchial basal cells (BBCs). These are cellular samples, not 229 donors. Neuron and cardiomyocyte datasets used primary template-directed amplification; liver and lung datasets used multiple displacement amplification.
- **Mutation-rate estimation:** Burden was generally fitted against donor age with donor-specific random effects, separately for single-nucleotide variants (SNVs) and indels. Two important exceptions were ratio-inferred: cardiomyocyte indel accumulation was derived from the neuronal SNV:indel ratio because the heart dataset lacked indel calls, and both LPC rates were derived from hepatocyte:LPC burden ratios after the small direct LPC age fit failed to show an increase (SNV slope −16.176/year, 95% CI −83.627 to 51.275, *P*=0.64; 10 samples from 3 donors, all younger than 18 years).
- **Mutation lethality:** The authors intersected observed variants with cell-type-specific essential-gene sets, variant-deleteriousness scores, regulatory annotations, and haploinsufficiency probabilities. This yielded inferred per-mutation lethality probabilities and annual lethal-cell hazards rather than an observed mutation-specific death rate.
- **Organ capacity and failure thresholds:** Frontal-cortex neuron and whole-heart cardiomyocyte capacities were modeled as (3.5 ± 0.7) × 10^9 and (3.2 ± 0.75) × 10^9 cells. Failure thresholds were set at 60% and 55% of capacity, respectively. Liver failure was set at 20% of hepatocyte capacity and airway basal-cell failure at 23% of capacity; several thresholds were inferred from clinical resection or disease proxies rather than measured mutation-specific failure.

| Cell type | SNVs/cell/year | Indels/cell/year | Per-SNV lethality | Per-indel lethality | Annual lethal-cell hazard μ (95% CI) |
|---|---:|---:|---:|---:|---:|
| Neurons | 17.49 | 6.93 | 12.34 × 10^-5 | 3.87 × 10^-5 | 2.44 × 10^-3 (1.53–3.95 × 10^-3) |
| Cardiomyocytes | 36.37 | 14.40† | 5.67 × 10^-5 | 3.87 × 10^-5† | 2.61 × 10^-3 (1.41–4.62 × 10^-3) |
| Hepatocytes | 52.78 | 1.16 | 2.37 × 10^-5 | 8.74 × 10^-7 | 1.24 × 10^-3 (0.07–2.25 × 10^-3) |
| LPCs | 33.73‡ | 0.69‡ | 2.37 × 10^-5 | 3.17 × 10^-8 | 0.79 × 10^-3 (0.43–1.44 × 10^-3) |
| BBCs | 28.52 | 2.57 | 7.34 × 10^-5 | 5.94 × 10^-9 | 2.08 × 10^-3 (1.14–3.72 × 10^-3) |

† Heart indel rate and per-indel lethality were inferred from neuron ratios rather than measured from cardiomyocyte indels. ‡ LPC accumulation rates were inferred from young-donor hepatocyte:LPC burden ratios rather than a positive direct LPC age slope. The confidence intervals on μ propagate uncertainty in mutation-rate slopes, not uncertainty in the constructed lethality scores.

### Population simulation

Initial organ capacity and lethal-mutation rate varied across synthetic individuals using log-normal distributions. Model II evaluated its semi-analytical population-survival expression with 10,000 Monte Carlo samples of organ capacity and lethal-mutation rate. Model III variants numerically integrated ordinary differential equations for 10^6 independent synthetic trajectories per model, used Kaplan–Meier estimation, and right-censored at 100,000 model-years. The separate lethality sensitivity analysis used 300 parameter sets per organ and 5,000 replicates per set. “Median lifespan” is the 50% survival time; “maximum lifespan” is operationally defined as survival falling to 10^-5 (10^-3%, or 1 in 100,000)—approximately 10 remaining trajectories in a 10^6 cohort—not the age of the oldest biologically possible person.

## Key results

### 1. Post-mitotic cells dominate the modeled constraint

The inferred annual lethal-mutation hazards were 2.44 × 10^-3 for neurons and 2.61 × 10^-3 for cardiomyocytes. When each post-mitotic organ was combined separately with fixed age-30 background mortality, the neuron model yielded median/10^-5-survival times of **194/557 years**, while the cardiomyocyte model yielded **208/868 years**.[^efimov2026]

The apparent paradox—heart having a slightly higher inferred lethal-mutation rate but a later modeled failure tail—arises because organ capacity distributions and chosen failure thresholds also determine time to failure. These are not direct estimates of clinical neurodegeneration or heart-failure incidence.

### 2. Replication protects proliferating tissues in the model

| Tissue model | Mutation-only tissue behavior | Survival after adding background mortality |
|---|---|---|
| Hepatocytes, no progenitor support (IIIA) | Median organ-failure time 37,664 years | Median 1,755 years; 10^-5 time 29,147 years |
| Hepatocytes + liver progenitor cells (IIIB) | No simulated organ failure within 100,000 years | Determined almost entirely by background mortality |
| Bronchial basal cells (IIIC) | Median/10^-5 tissue-failure times 4,359/7,617 years | Median 1,755 years; 10^-5 time 7,132 years |

The Model IIIA values **1,755/29,147** are finite-cohort simulation outputs after adding background mortality; they are not alternate definitions of the Model I analytical baseline **1,759/29,221**, which the paper describes them as virtually matching.

Thus, within the model's youthful-regeneration assumptions, cell replacement largely neutralizes mutation-driven *cell loss*. This result does **not** show that proliferating human tissues could function normally for millennia: the model excludes clonal selection, cancer, sublethal mutant-cell dysfunction, age-progressive niche failure, inflammatory feedback, explicit inheritance or accumulation of nonlethal parental variants in daughter cells, and interactions with other hallmarks.

### 3. Four-organ integration yields a conditional 156-year median

Combining the neuron and cardiomyocyte Model II components, the hepatocyte-plus-LPC Model IIIB component, and the BBC Model IIIC component as mutually independent critical organs gives the central estimate:

| Output | Median survival | 10^-5-survival time (“maximum”) |
|---|---:|---:|
| Fixed age-30 background only | 1,759 years | 29,221 years |
| Four organs + background, independence | **156 years** | **470 years** |
| Fréchet dependence bounds | **146–194 years** | **210–557 years** |
| Empirical Swiss median used by authors | 79 years | — |
| Documented human maximum used by authors (global, not Swiss) | — | 122 years |

The 146–194-year range spans mathematical dependence extremes, not a conventional confidence interval. For four marginals, the lower Fréchet expression is a valid pointwise universal lower envelope but need not be attainable by any single joint dependence distribution; 146 years therefore should not be treated as a realizable “perfect negative dependence” scenario without an explicit construction. The upper bound is attainable by comonotonic dependence. The model supports a conditional statement—somatic mutation-driven cell death could be a major longevity constraint even after other aging processes were removed—not a literal species-wide ceiling.

### 4. Sensitivity analysis preserves the tissue ordering, not precise ages

Because mutation lethality is the least directly grounded parameter, the authors sampled SNV and indel lethality independently across organ-specific biologically plausible ranges (300 parameter sets per organ; 5,000 replicates per set). Predicted post-mitotic organ-only survival changed monotonically and spanned roughly one to two orders of magnitude in model time. The default parameter stars lie toward the high-lethality end of the log-sampled ranges, making the central lifespan estimates relatively short within the tested range. Liver plus progenitor cells did not reach either survival threshold under any sampled lethality combination within 100,000 model-years.

The robust result is therefore qualitative—**post-mitotic tissues fail much earlier than the modeled proliferating tissues**—while the exact year estimates remain parameter-sensitive.

## Interpretation and evidence weight

| Question | Assessment |
|---|---|
| Is the model human-parameterized? | **Yes** — human life tables, human cell mutation datasets, and human organ-capacity estimates |
| Are the projected lifespans observed in humans? | **No** — all 146–557-year values are counterfactual simulations |
| Does the study establish somatic mutations as causal in normal human aging? | **No** — it assumes mutation-caused cell death and propagates that assumption through a model |
| Can the whole counterfactual be conventionally falsified? | **No** — no organism can be observed aging through somatic mutations alone; individual parameters, code outputs, and tissue-level predictions can still be tested |
| Is there intervention evidence? | **No** — no mutation-lowering or cell-replacement intervention was tested |

This paper is best treated as **quantitative hypothesis generation**, below observational human outcome evidence and far below intervention evidence for causal ranking. It strengthens the somatic mutation theory by exposing which component measurements can be tested, but the full counterfactual is not conventionally falsifiable and the study does not resolve the theory's contested status. #gap/needs-replication

## Limitations and open questions

1. **Immediate, independent cell death is the only modeled mutation consequence.** The equations assume mutations act independently, cannot be repaired after a short interval, and have no delayed or cumulative multi-hit effect. Sublethal functional impairment, altered transcription, malignant transformation, and both malignant and non-malignant clonal expansion (including functionally deficient mitochondrial clones) are omitted. Those processes could shorten survival, but their omission also means the model cannot tell which mutation consequences dominate real aging.
2. **Per-mutation lethality is inferred, not measured.** Essential-gene overlap, deleteriousness prediction, regulatory annotation, and haploinsufficiency are combined into a probability score. Calibration errors propagate directly into organ-failure time. #gap/no-mechanism
3. **The empirical mutation rates are not clean “non-aging” rates.** They were measured across normally aging donors and therefore already include age-progressive oxidative stress and disease-associated processes that the counterfactual model otherwise assumes away. The authors note that a true aging-independent rate may be lower. The cardiomyocyte input also came from a 2025 Research Square preprint and lacked indel calls, requiring the ratio-based inference described above.
4. **Only four organ systems and five cell populations are represented.** The model includes neurons, cardiomyocytes, hepatocytes, liver progenitor cells, and bronchial basal cells, but omits blood, kidney, skeletal muscle, endocrine tissues, immune compartments, glia, and many other potentially critical systems. Clonal hematopoiesis is specifically outside the model's tractable regime.
5. **Failure thresholds are proxies.** The brain model equates loss below 60% of frontal-cortex neurons with loss of independent cognition rather than organismal death; heart, liver, and lung thresholds are inferred from acute disease, resection, or transplantation contexts that may not match gradual mutation-driven decline.
6. **Regenerative tissues receive unusually favorable assumptions.** Senescent cells are promptly cleared without bystander effects, immune surveillance remains youthful, and stem-cell niches do not age except through mutation-driven death. The count-based equations do not explicitly track inherited nonlethal variants or functional quality in daughter cells. This construction is appropriate to the paper's counterfactual but should not be read as a forecast.
7. **Background mortality is choice-dependent.** Freezing contemporary Swiss hazard at age 30 determines the 1,759-year baseline. Choosing childhood minimum hazard or later-adult hazard changes it dramatically; the background also contains some cancer and disease mortality whose separation from aging is imperfect.
8. **“Maximum” is a population-tail convention.** It is the model time at which survival reaches 10^-5. The 10^6-trajectory simulations make that threshold correspond to about 10 remaining trajectories, but the chosen survival threshold—not a biological last-survivor observation—defines the output. It is not an immutable physiological cap.
9. **Inter-organ dependence and systemic coupling are unknown.** Independence gives 156/470 years; Fréchet bounds are broad, especially in the tail, and the pointwise lower bound need not be attainable for four organs. Reliability-theory integration also omits systemic signaling and inter-organ crosstalk.
10. **The whole counterfactual cannot be conventionally falsified.** Humans cannot be placed in a state where every other aging mechanism is removed. The authors offer a one-sided sanity check—an estimate below observed lifespan would expose a model or parameter failure—but an estimate above observation does not validate the causal structure. Individual parameters and implementations can be tested; the headline counterfactual cannot be validated as a whole.
11. **The intervention boundary is restrictive.** The model assumes no organ or tissue transplantation and no intervention that lowers mutation accumulation; extensive post-mitotic-cell replacement lies outside the question being modeled.
12. **Publication state is provisional.** As of verification on 2026-07-21, the publisher still labels the accessible paper an unedited Article-in-Press manuscript that may change during typesetting or editorial correction. Re-check these claims when the final edited version appears.

## What would most improve this model

- Directly measure the probability that naturally acquired SNVs/indels cause death or measurable dysfunction in identified human neurons and cardiomyocytes.
- Replace fixed organ thresholds with longitudinal functional reserve curves tied to cell-type-specific mutation burden.
- Model inherited mutations in daughter cells, neutral and positively selected clonal expansion, and mutation-associated cancer risk in proliferating tissues.
- Add glia, hematopoiesis, kidney, skeletal muscle, and endocrine compartments, then infer inter-organ dependence from longitudinal multi-organ cohorts.
- Separate age-independent baseline mutagenesis from the portion accelerated by oxidative stress, inflammation, disease, and declining repair.
- Test whether an intervention that specifically lowers somatic mutation accumulation shifts the predicted cell-loss trajectory without changing other hallmarks.

## Reproducibility

The authors report public code, demographic inputs, and calculated model parameters in the paper's linked repository. No new experimental data were generated. Reproduction should verify the life-table smoothing choices, mixed-effects rate estimates, inferred lethality calibration, ordinary differential equation implementation, survival thresholds, and Fréchet-bound calculations before treating the headline ages as stable.

## Related pages

- [[processes/somatic-mutation-accumulation]] — canonical home for measured mutation rates, burdens, and tissue-specific detection methods
- [[hypotheses/somatic-mutation-theory-of-aging]] — contested causal hypothesis this paper formalizes quantitatively
- [[hallmarks/genomic-instability]] — hallmark overlay containing somatic mutation accumulation
- [[hypotheses/disposable-soma-theory]] — evolutionary rationale the authors invoke for lower somatic than germline maintenance investment
- [[hypotheses/saturating-removal-model]] and [[studies/raz-2026-sr-model-aging-regimes]] — complementary mechanistic-to-demographic modeling frameworks
- [[studies/cagan-2022-somatic-mutation-rates-mammals]] — cross-species mutation-rate/lifespan scaling used as empirical motivation; study page remains an implicit stub
- [[cell-types/neurons]] · [[cell-types/cardiomyocytes]] · [[cell-types/hepatocytes]] · bronchial basal cells (dedicated cell-type page not yet seeded)
- [[tissues/brain]] · [[tissues/heart]] · [[tissues/liver]] · [[tissues/lung]]
- [[model-organisms/homo-sapiens]]

## Knowledge gaps

- `#gap/needs-replication` — independently reproduce the model from released code and inputs, then test alternative failure thresholds and dependence structures.
- `#gap/no-mechanism` — directly measure how physiological burdens of somatic SNVs/indels cause death or graded dysfunction in human post-mitotic cells.
- `#gap/needs-replication` — validate the qualitative post-mitotic-versus-proliferative ordering with additional organs and independent mutation datasets.
- `#gap/contradictory-evidence` — reconcile the paper's mutation-driven cell-loss premise with mutator mice that predominantly develop cancer and with epigenetic-rejuvenation results that improve function without correcting sequence mutations.

## Footnotes

[^efimov2026]: [[studies/efimov-2026-somatic-mutations-lifespan-bound]] (this page) · Efimov E, Fedotov V, Malaev L, Khrameeva EE, Kriukov D · *npj Aging* (2026) · doi:10.1038/s41514-026-00421-6 · PMID 42350444 · n=16 life-table populations + 229 healthy-control cellular mutation samples from 6 source studies; synthetic cohorts up to 10^6 trajectories/model · in-silico dynamical-systems + reliability modeling · model: human-parameterized brain, heart, liver, and airway cell populations · open access, unedited Article in Press.
