---
type: study
doi: 10.1038/s41467-019-13192-4
pmid: 31792199
pmc: PMC6889273
title: "Senescent cell turnover slows with age providing an explanation for the Gompertz law"
authors: [Karin O, Agrawal A, Porat Z, Krizhanovsky V, Alon U]
year: 2019
journal: Nature Communications
study-design: in-vivo
publication-type: research-article
volume: 10
issue: null
pages: "5495"
organism: mus-musculus
n-subjects: 82
intervention: []
hallmarks-tested: ["[[cellular-senescence]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [senescent-cell-half-life-slows-with-age, saturating-removal-model-origin, gompertz-law-recapitulation, critical-slowing-down-near-threshold, senolytic-timing-implications]
local-pdf: null
verified: true
verified-date: 2026-06-24
verified-by: claude
verified-scope: "All quantitative claims verified against PMC6889273 full text; production-term error corrected (2019 model uses ηt, not constant α); removal mechanism corrected (density-dependent self-inhibition, not extrinsic NK-cell aging); exact half-life values and mouse ages inserted; n per group populated; bleomycin induction confirmed; model equation corrected."
---

# Karin et al. 2019 — Senescent cell turnover slows with age providing an explanation for the Gompertz law

**One-line:** This paper is the **origin of the Saturating Removal (SR) model** of damage accumulation: by measuring senescent-cell (SnC) turnover in mice across age, the authors show that removal rate slows dramatically with age (half-life: days in young animals → weeks in old animals), while production continues, causing SnCs to accumulate and — when their fluctuations cross a death threshold — producing a mortality hazard that quantitatively matches the Gompertz law in mice and humans.

This paper establishes the mechanistic and empirical foundation for the **[[hypotheses/saturating-removal-model]]** conceptual frame, and is the biological calibration anchor for the comparative cross-species extension in **[[studies/raz-2026-sr-model-aging-regimes]]** (Raz et al. 2026). The team is from the Weizmann Institute of Science: Uri Alon's lab (systems biology) in collaboration with Valery Krizhanovsky's lab (cellular senescence). Published December 2019, open access (CC-BY 4.0).

---

## Context

The Gompertz law — that mortality hazard rises exponentially with age — is one of the most robustly replicated empirical regularities in biology, holding across organisms from invertebrates to humans. Its mechanistic explanation had remained elusive: it was not known which biological process, operating at the molecular or cellular level, generates the characteristic exponential acceleration of death risk. This paper proposes and tests a specific candidate: the slowing of immune removal of senescent cells.

---

## What they did

### Experimental component — measuring SnC turnover dynamics in mice

The authors used a **p16^INK4a^-luciferase reporter** transgenic mouse model on a **C57BL/6 background**: p16^INK4a^ drives luciferase expression as a proxy for the p16^INK4a^-positive senescent state. Total body luminescence (TBL) was monitored non-invasively by bioluminescence imaging in a **longitudinal cohort of 33 mice**, measured every 8 weeks from 8 to 80 weeks of age [^karin2019self].

To measure **turnover** (not just steady-state abundance), the authors used a **bleomycin senescence-induction paradigm**: intratracheal bleomycin (1.5 U/kg) was administered to induce lung epithelial senescence in a pulse, and the subsequent clearance rate was tracked by bioluminescence in young versus old mice. Senescent identity was confirmed by SA-β-galactosidase (SA-β-Gal) staining, pan-Cytokeratin positivity (lung epithelial marker), and HMGB1 nuclear exclusion. Two age groups were studied:

- **Young mice**: 3 months old; bleomycin-treated n = 17; PBS control n = 13
- **Old mice**: 22 months old; bleomycin-treated n = 13; PBS control n = 6

This gave direct estimates of the **removal rate** (or equivalently, the SnC half-life) at each age. The induction is lung-localized; whole-body bioluminescence served as the readout. The study is **in vivo** (intact mice), not a cell-culture approximation.

### Mathematical modeling component

From the empirical turnover measurements, the authors constructed the **Saturating Removal (SR) model**: a stochastic dynamical model of senescent-cell abundance governed by three terms [^karin2019self]:

$$\frac{dX}{dt} = \underbrace{\eta t}_{\text{production (rises with age)}} - \underbrace{\beta \frac{\kappa X}{\kappa + X}}_{\text{saturating removal}} + \underbrace{\varepsilon \frac{dW}{dt}}_{\text{noise}}$$

where *X* is senescent-cell count (the damage variable), η is the rate of increase in SnC production with age (units: day⁻¹ year⁻¹), t is age, β is the maximum removal rate, κ is the half-saturation constant, and ε is noise amplitude. Death is modeled as a **first-passage event**: organismal death occurs when *X* first crosses a threshold *X_C*.

**Maximum-likelihood parameters** (fit to mouse data): η = 0.15 day⁻¹ year⁻¹; β = 0.27 day⁻¹; κ = 1.1; ε = 0.14 day⁻¹; death threshold *X_C* = 17.

**Important:** In the 2019 formulation, SnC production **rises linearly with age (ηt)**, not constant. This is the same production term used in the 2026 Raz et al. extension [^raz2026] — the ηt formulation originates in this 2019 paper.

The paper compared four candidate mechanisms (i–iv) and found that only two are needed to reproduce the data: **(i)** production rises linearly with age, and **(iv)** SnCs slow their **own** removal rate (density-dependent self-inhibition). The simpler hypothesis **(iii)** — that the immune system ages extrinsically, independently of SnC burden — was **not** required by the data and not part of the final SR model. Mechanism (iv) is a density-dependent feedback: as SnC abundance X rises, the effective removal rate per cell falls (Michaelis–Menten saturation), meaning SnCs collectively overwhelm or inhibit the clearance machinery. The biological underpinning may include SASP signaling, disruption of tissue architecture, or the absolute SnC count exceeding immune surveillance capacity — but the key point is that the slowdown is driven by *SnC abundance itself*, not by independent immune aging. This saturation is the mechanism of "critical slowing down" near the death threshold.

---

## Key findings

### 1. SnC removal slows dramatically with age

The central empirical result: in young mice (3 months), experimentally induced senescent cells are cleared with a **half-life of ~5 ± 1 days** (removal rate τ⁻¹ = 0.21 ± 0.07 day⁻¹); in old mice (22 months), the same cells persist with a **half-life of ~25 ± 6 days** (removal rate τ⁻¹ = 0.055 ± 0.035 day⁻¹) — a roughly **5-fold increase in residence time** [^karin2019self]. Baseline steady-state SnC levels were approximately **5-fold higher** in old mice. Production, meanwhile, rises linearly with age (ηt), so net SnC abundance accelerates upward.

The mechanism in the SR model is **density-dependent self-inhibition (mechanism iv)**: as SnC abundance rises with age, senescent cells collectively slow their own clearance — whether through SASP-mediated immune suppression, tissue disruption, or saturation of immune surveillance capacity. This is distinct from the hypothesis that the immune system independently ages (mechanism iii was tested and was not required to fit the data). This is the biological underpinning of [[hallmarks/cellular-senescence|senescent-cell accumulation in aging]].

| Age | Mouse age | SnC half-life | Removal rate (τ⁻¹) | Functional regime |
|---|---|---|---|---|
| Young mice | 3 months | ~5 ± 1 days | 0.21 ± 0.07 day⁻¹ | Efficient clearance; near steady-state |
| Old mice | 22 months | ~25 ± 6 days | 0.055 ± 0.035 day⁻¹ | Saturated removal; net accumulation |

### 2. The SR model quantitatively recapitulates the Gompertz law

With the empirically measured production and (age-dependent) removal parameters plugged into the SR model, the stochastic first-passage dynamics generate a mortality hazard that rises **exponentially with age** — matching the Gompertz law [^karin2019self]. The model achieves this without fitting the Gompertz parameters directly; the Gompertz curve emerges from the SnC removal dynamics.

The mechanism: as animals age, the removal rate slows (saturation sets in earlier), so SnC abundance rises and its stochastic fluctuations increasingly approach the death threshold *X_c*. The **exponential acceleration of death risk** is a consequence of the **nonlinear** (saturating) removal coupled to a **rising** damage burden — it is not a property of a simple linear accumulation model, which would yield power-law rather than exponential hazard.

This connection matters because it provides a **cellular mechanistic explanation** for a demographic law that was previously purely descriptive: the Gompertz law holds across many species not as a coincidence but (on this model) because saturating immune removal of damaged cells is a conserved biological feature.

The authors additionally demonstrate that the model reproduces shifts in survival curves observed after dietary manipulations in *Drosophila* and *C. elegans* — suggesting the SR framework's predictions generalize beyond mice, though without the cross-species quantitative calibration of the 2026 paper.

### 3. Critical slowing down near the threshold

A mathematical consequence of the saturating-removal nonlinearity is **"critical slowing down"** as *x* approaches *X_c*: fluctuations become larger and slower to resolve as the system nears the death threshold. This phenomenon, borrowed from physics (analogous to critical phenomena at phase transitions), means that in old organisms the senescent-cell system is less resilient — small perturbations are corrected more slowly, and there is a higher probability of a fluctuation carrying *x* above *X_c* before recovery. This is the proximate cause of the exponentially rising hazard.

### 4. Implications for senolytic dosing and timing

The model makes a translational prediction about dosing frequency: because the SnC turnover time in old mice is approximately one month (half-life ~25 days), **treatment can be as infrequent as the SnC turnover time and still be effective** — the paper states: "Treatment should start at old age, and can be as infrequent as the SnC turnover time (~month in old mice) and still be effective." This supports **pulsed or episodic** senolytic regimens rather than chronic daily dosing. The model also implies that treatment should be initiated at old age (when SnC burden is already elevated), since earlier treatment operates in the efficient-clearance regime where immune removal is less impaired. #gap/needs-human-replication — the dosing-timing predictions are model-derived from mouse parameters (τ ~25 days old mouse); optimal dosing frequency in humans remains empirically untested.

---

## What damage variable *x* represents

Uniquely among SR model applications, in this paper **the damage variable *x* is explicitly identified with senescent cells** (p16^INK4a^-positive cells as measured by the luciferase reporter). This is the concrete biological grounding of the abstract SR model. The 2026 Raz et al. extension [^raz2026] shows that the same mathematical structure fits survival curves across nine species when *x* is treated as an abstract scalar — but the biological candidate for *x* in mammals remains senescent cells, anchored to this 2019 calibration.

---

## Evidence quality and extrapolation

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Partial — immune surveillance of SnCs exists in humans; age-related impairment is documented but human removal-rate quantification matching this method is lacking #gap/needs-human-replication |
| Phenotype conserved in humans? | Partial — human SnC accumulation with age is established; the specific first-passage / Gompertz-generation mechanism is an inference from the mouse model |
| Replicated in humans? | No — all experimental data are from mouse p16-reporter models #gap/needs-human-replication |

Human Gompertz mortality data are used for model *validation* (the SR model's predictions are compared to human demographic data), but the experimental senescent-cell measurements are entirely murine.

---

## Limitations and gaps

1. **Mouse-only experimental data.** SnC turnover was measured in a p16-luciferase mouse model (C57BL/6, 3-month and 22-month cohorts); direct human equivalents (tracking SnC half-life in vivo across age) do not exist. Whether removal-rate slowing in humans follows the same quantitative trajectory is inferred from model extrapolation (with ~60-fold reduction in η fitted to human demographic data), not measured. #gap/needs-human-replication
2. **p16 as a SnC marker.** p16^INK4a^ reporter captures one major senescence marker but may miss non-p16-expressing senescent populations (e.g., some replicative or stress-induced senescent cells). Bioluminescence signal is a bulk whole-body measure, not single-cell or tissue-decomposed.
3. **Lung-specific induction.** The half-life measurements used intratracheal bleomycin targeting lung epithelium. Whether the ~5-day (young) and ~25-day (old) half-lives represent system-wide SnC turnover or are lung-specific is not directly addressed. #gap/needs-replication
4. **Parameter identifiability.** Uncertainty in the half-life estimates is reported (young: ±1 day; old: ±6 days), and confidence intervals on model parameters are provided (τ⁻¹ = 0.21 ± 0.07 day⁻¹ young; 0.055 ± 0.035 day⁻¹ old). The separation of η (production slope) from β and κ (removal parameters) rests on the bleomycin pulse-chase design.
5. **Single lab, single reporter strain.** The p16-luciferase data have not been independently replicated with a distinct readout (e.g., SA-β-galactosidase burden trajectory, SASP factor time-courses). #gap/needs-replication
6. **Drosophila / C. elegans extrapolation.** The model-fit to dietary-manipulation survival-curve shifts in invertebrates is shown but is not a primary experimental result of this paper — treated as supportive rather than conclusive.

---

## Relation to other wiki pages

- **[[hypotheses/saturating-removal-model]]** — the conceptual-frame page for which this paper is the primary empirical anchor. The SR model was introduced here; the 2026 Raz paper is the comparative extension.
- **[[studies/raz-2026-sr-model-aging-regimes]]** — uses the SR model (citing this paper as origin) to fit nine species and show that damage-production rate is the master lifespan knob; mice are in the "ballistic aging" regime.
- **[[hallmarks/cellular-senescence]]** — senescent-cell accumulation in aging (biology of entry + SASP; p16^INK4a^ the reporter used here); this paper provides the mechanistic explanation (saturating removal) and the theoretical link to Gompertz mortality.
- **[[interventions/pharmacological/senolytics]]** — class page; the dosing-timing implication from this paper (pulsed rather than chronic) should be cross-referenced.
- **[[p16]]** — the senescence marker (CDKN2A) driving the luciferase reporter; key node in the measurement strategy.

---

## Footnotes

[^karin2019self]: [[studies/karin-2019-senescent-cell-turnover-gompertz]] (this page) · Karin O, Agrawal A, Porat Z, Krizhanovsky V, Alon U · *Nat Commun* 10:5495 (2019) · doi:10.1038/s41467-019-13192-4 · PMID 31792199 · PMC6889273 · in-vivo mouse p16-luciferase reporter + mathematical modeling · design: in-vivo · model: mus-musculus · open access CC-BY 4.0.

[^raz2026]: [[studies/raz-2026-sr-model-aging-regimes]] · Raz N et al. · *Nat Aging* 6:1330–1340 (2026) · doi:10.1038/s43587-026-01138-7 · comparative SR model fit across nine species; damage-production rate is the best lifespan predictor; mice are in the ballistic regime · design: in-silico modeling of observational mortality data · multi-species.
