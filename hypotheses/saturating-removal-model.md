---
type: hypothesis
aliases: [SR model, saturating removal model, damage accumulation model, ballistic aging, quasi-steady-state aging, two aging regimes]
proposed-by: [Omer Karin, Uri Alon]
proposed-year: 2019
status: active-frame
treatment-mode: conceptual-frame
related-hallmarks:
  - "[[hallmarks/cellular-senescence]]"
  - "[[hallmarks/genomic-instability]]"
related-hypotheses:
  - "[[hypotheses/negligible-senescence]]"
  - "[[hypotheses/dna-damage-theory-of-aging]]"
  - "[[hypotheses/somatic-mutation-theory-of-aging]]"
key-evidence-for:
  - "[[studies/raz-2026-sr-model-aging-regimes]]"
key-evidence-against: []
literature-checked-through: 2026-06-24
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-06-24 — synthesis MOC drafted from the full PDF of Raz et al. 2026 (10.1038/s43587-026-01138-7) plus the originating Karin & Alon 2019 model; the 2019 paper's claims are attributed from training knowledge + the 2026 paper's framing, not independently re-verified against the 2019 PDF. Verify quantitative claims before relying on them.

# Saturating Removal (SR) model — damage accumulation and the two aging regimes

**Mode B conceptual frame** (per [[sops/writing-hypothesis-pages]]): a mechanistic *mathematical* model of how organismal damage accumulates and produces the empirical laws of mortality, rather than a sharply falsifiable biological hypothesis. It organizes the demographic facts of aging (Gompertz / Weibull hazard curves, lifespan scaling across species) under a single low-dimensional dynamical model.

The SR model proposes that aging can be summarized by a **single scalar damage variable *x*** whose dynamics are governed by **production**, **saturating removal**, and **noise**, with death as a first-passage event when *x* crosses a threshold. It was introduced by **Karin & Alon (2019)** to explain why senescent-cell turnover slowing with age yields the Gompertz law [^karin2019], and extended **comparatively across nine species** by **Raz et al. (2026)** [^raz2026].

---

## The core idea

A 1-D stochastic differential equation captures damage dynamics [^karin2019][^raz2026]:

$$\frac{dx}{dt} = \underbrace{\eta t}_{\text{production}} - \underbrace{\beta\frac{x}{\kappa + x}}_{\text{saturating removal}} + \underbrace{\sqrt{2\varepsilon}\,\xi}_{\text{noise}}$$

- **Production rises linearly with age** (ηt). This linear rise is *required* to reproduce the Gompertz law (exponentially rising hazard); biologically it reflects accumulation of damage-producing units (e.g., senescent cells produced at a constant per-unit rate that itself grows).
- **Removal saturates** at high damage (Michaelis–Menten form), a generic property of biological clearance — e.g., immune removal of senescent/damaged cells. If removal did *not* saturate, steady-state damage would be flat and aging would not accelerate.
- **Noise** ε is biological stochasticity; death is the **first passage** of *x* across threshold *X_c*.
- A **Makeham term** *m_ex* adds extrinsic (age-independent) mortality.

The model distinguishes **removal** (clearing existing damage — the immune system) from **repair** (lowering the *production* parameter η — e.g., DNA repair preventing damage from forming). See [[studies/raz-2026-sr-model-aging-regimes]] for the full parameter table.

---

## What the frame predicts / organizes

### 1. The two aging regimes

The ratio of production (ηt) to removal (β) splits species into two qualitative regimes [^raz2026]:

| | **Ballistic aging** | **Quasi-steady-state aging** |
|---|---|---|
| Dynamics | production outpaces removal; damage rises like a free-falling object ⟨x⟩~½ηt² | production balanced by removal; damage tracks a slowly rising set-point |
| Production–lifespan scaling | η ~ 1/L² | η ~ 1/L |
| Hazard shape | **Weibull-like** (power-law) | **Gompertz-like** (exponential, slowing at very old age) |
| Species | yeast, *C. elegans*, most flies, **mice** | **humans**, dogs, cats, guinea pigs |

Organisms lie on a continuum; some (e.g., female mice, starving *E. coli*, *Drosophila* strain 853) straddle the transition.

### 2. Production rate η is the master lifespan knob

Across nine species η spans **~7 orders of magnitude** and is the **best single predictor of lifespan** (SHAP importance 2.85, vs 1.53 / 1.38 / 0.33 for threshold / removal / noise). Removal, noise, and threshold are **nearly invariant across mammals**. Evolution appears to set lifespan chiefly by tuning **damage production** (molecular accuracy), not removal or robustness [^raz2026].

### 3. Conserved mammalian parameter combinations

- Noise→threshold timescale *T_c* = X_c²/ε ≈ **600 days** (factor ~3) across mice, guinea pigs, cats, humans.
- Removal/noise timescale ratio βX_c/ε ≈ **10** (factor ~2).
- Death threshold X_c ≥ ~**10× κ** (removal saturates in youth) in every organism.

These near-universal ratios hint at conserved removal/noise machinery — one hypothesis being **circadian fluctuation in immune clearance** as the source of biological noise.

---

## Relationship to other frames

- **Mortality laws.** The SR model gives a *mechanistic* basis for the otherwise purely descriptive **[[hypotheses/negligible-senescence|Gompertz and Weibull]]** hazard functions — previous fits (Gompertz, Weibull, logistic) had no mechanistic grounding. Gompertz ⇔ quasi-steady-state; Weibull ⇔ ballistic.
- **Damage-accumulation theories.** It is the quantitative, demographic-scale companion to the molecular damage theories — [[hypotheses/somatic-mutation-theory-of-aging]], [[hypotheses/dna-damage-theory-of-aging]] — which supply candidate *production* mechanisms (the inverse relation between somatic-mutation / translation-error rates and mammalian lifespan).
- **Cellular senescence.** [[cellular-senescence|Senescent cells]] are the leading candidate for the damage variable *x* in mammals; the model was originally calibrated on senescent-cell turnover [^karin2019].
- **Model-organism extrapolation.** Regime classification gives a principled answer to which organisms model human aging — see [[model-organisms/_extrapolation-guide]].

---

## Intervention implications

- **Target production (η) for lifespan extension** — it is the parameter evolution actually varies. Removal-targeting (e.g., [[interventions/pharmacological/senolytics|senolytics]]) and threshold are lower-leverage for *maximal* extension.
- **But production-only interventions stretch sickspan as well as lifespan.** To extend life *and* compress morbidity, an intervention must *also* raise the threshold X_c, reduce noise ε, or increase removal β [^raz2026].

---

## Status & what would update this frame

**Active-frame.** As a Mode B frame the SR model is judged by descriptive adequacy and fruitfulness, not by a single falsifying experiment. It fits survival curves across four orders of magnitude of lifespan well; it currently *misses* the late-age mortality plateau in *C. elegans*. It would be **strengthened** by: independent biological measurement of *x* (e.g., direct senescent-cell burden trajectories matching the inferred η/β), and **challenged** by: organisms whose hazard shape cannot be captured, or evidence that lifespan differences track removal/threshold rather than production. Because the parameters are inferred from the same survival data they explain, they are **mathematically grounded hypotheses awaiting experimental verification**, not measured biological quantities.

---

## Footnotes

[^karin2019]: [[studies/karin-2019-senescent-cell-turnover-gompertz]] · Karin O, Agrawal A, Porat Z, Krizhanovsky V, Alon U. "Senescent cell turnover slows with age providing an explanation for the Gompertz law." *Nat Commun* 10:5495 (2019) · doi:10.1038/s41467-019-13192-4 · introduces the Saturating Removal model; calibrated on senescent-cell turnover in mice · model: mouse.

[^raz2026]: [[studies/raz-2026-sr-model-aging-regimes]] · Raz N et al. · *Nat Aging* 6:1330–1340 (2026) · doi:10.1038/s43587-026-01138-7 · comparative SR fit across nine species; η best lifespan predictor; ballistic vs quasi-steady-state regimes · design: in-silico modeling of observational mortality data.
