---
type: study
doi: 10.1038/s43587-026-01138-7
pmid:
pmc:
title: "A damage accumulation model identifies distinct aging regimes across species"
authors: [Raz N, Yang Y, Pridham G, Shenhar B, Frenkel S, Levy T, Tlusty T, Mayo A, Alon U]
year: 2026
journal: Nature Aging
study-design: observational
publication-type: research-article
volume: 6
issue:
pages: 1330-1340
organism: multi-species
n-subjects: null
intervention: []
hallmarks-tested: ["[[cellular-senescence]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [damage-production-rate-best-lifespan-predictor, ballistic-vs-quasi-steady-state-regimes, conserved-removal-noise-threshold-across-mammals]
local-pdf: null
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Extracted by Claude on 2026-06-24 from the full open-access PDF (DOI 10.1038/s43587-026-01138-7), with a second-pass numeric re-check against the source text + figures (one correction made: removal/noise ratio is βX_c/ε, not βκ/ε). This is a **single-agent** extraction — an independent `wiki-verifier` adversarial pass has NOT run, because the paper is not yet in the local archive or on PMC. Treat quantitative claims as high-fidelity-but-not-independently-verified. #gap/needs-verification

# Raz et al. 2026 — A damage accumulation model identifies distinct aging regimes across species

**One-line:** Fitting the **[[hypotheses/saturating-removal-model]]** (a stochastic damage production + saturating-removal model) to high-quality survival data from nine well-studied species shows that the **damage-production rate is the single best predictor of lifespan** (spanning seven orders of magnitude), while removal, noise, and the death threshold are nearly invariant across mammals — and that species fall into two regimes, **ballistic aging** (Weibull-like; yeast, worms, flies, mice) versus **quasi-steady-state aging** (Gompertz-like; humans, dogs, cats, guinea pigs).

This is an **Analysis** article from Uri Alon's lab (Weizmann Institute, Sagol Institute for Longevity Research; with Westlake University and UNIST). It is the comparative-across-species application of the **Saturating Removal (SR) model** first developed in [[hypotheses/saturating-removal-model|Karin & Alon 2019]] for senescent-cell dynamics. Received 21 June 2025, accepted 30 April 2026, published 9 June 2026. Open access (CC BY-NC-ND).

---

## What they did

The SR model posits a single scalar **damage** variable *x* that drives aging, governed by a stochastic differential equation with three terms — linearly rising production, saturating removal, and Gaussian noise [^raz2026][^karin2019]:

$$\frac{dx}{dt} = \eta t - \beta\frac{x}{\kappa + x} + \sqrt{2\varepsilon}\,\xi$$

Death is a **first-passage event**: it occurs when *x* first crosses a death threshold *X_c*. An optional extrinsic-mortality (Makeham) term *m_ex* adds a constant age-independent death probability. The six parameters:

| Parameter | Meaning | Units |
|---|---|---|
| **η** (eta) | rate of *change* (slope) of the damage-production rate — production grows as ηt | damage·time⁻² |
| **β** (beta) | maximum removal rate at saturation | damage·time⁻¹ |
| **κ** (kappa) | removal half-saturation point (Michaelis–Menten constant) | damage |
| **ε** (epsilon) | noise amplitude (effective diffusion coefficient) | damage²·time⁻¹ |
| **X_c** | death threshold (robustness to damage) | damage |
| **m_ex** | extrinsic mortality | time⁻¹ |

Production rises **linearly** with age (required to produce Gompertz-law mortality); removal **saturates** at high damage (a Michaelis–Menten form, a common feature of biological removal processes). The authors distinguish **removal** (processes that specifically clear damage *x* — e.g., immune clearance of senescent/damaged cells in mammals) from **repair** (intracellular processes that lower the production rate η — e.g., DNA repair preventing a cell from becoming damaged).

They assembled high-quality mortality datasets for nine species spanning ~four orders of magnitude in median lifespan and fit the SR parameters per species via a **Bayesian / MCMC** approach (simulating ~20,000 individual organisms per parameter set and matching the simulated death-time distribution to the data) [^raz2026]:

| Species | Dataset (source) | n | Notes |
|---|---|---|---|
| *Saccharomyces cerevisiae* (BY4742) | McCormick 2015 | 24,512 | replicative aging (mother-cell divisions) |
| *Caenorhabditis elegans* (QZ0 Bristol) | Stroustrup 2016 | 2,908 | "lifespan machine" |
| *Drosophila melanogaster* (4 genotypes) | McCracken 2020 | ~1,000–1,117 each | strains 217 / 441 / 707 / 853 |
| *E. coli* (MG1655 PrrnB2) | Yang 2019 | 4,744 | survival under starvation |
| *Mus musculus* (UM-HET3) | ITP, Miller 2024 | F 3,701 / M 2,746 | genetically heterogeneous controls |
| *Cavia porcellus* (guinea pig) | O'Neill 2024 | 674 | UK veterinary data |
| *Felis catus* (cat) | Teng 2024 | F 2,702 / M 2,746 | neutered animals only |
| *Canis familiaris* (dog) | Teng 2022 | 1,049–2,427 / breed | Jack Russell, Labrador, Staffy, German Shepherd |
| *Homo sapiens* | Human Mortality Database | ~80,000 / cohort | Denmark 1890/1900 + Sweden 1910 cohorts |

---

## Key findings

### 1. Damage-production rate (η) is the best single predictor of lifespan

Across species, **η varies by ~seven orders of magnitude** and is inversely related to lifespan — the longer the lifespan, the lower the η [^raz2026]. The other parameters (β, ε, X_c) vary much less and generally decrease only mildly with lifespan.

**Shapley additive explanations (SHAP)** analysis on the 19 independently calibrated parameter sets ranked global importance for predicting log median lifespan [^raz2026]:

| Parameter | Mean \|SHAP\| (log-scaled input) |
|---|---|
| log(η) production | **2.85** |
| log(X_c) threshold | 1.53 |
| log(β) removal | 1.38 |
| log(ε) noise | 0.33 |

η's importance (2.85) effectively matches the *summed* importance of the next two parameters; noise ε is least important. Robust to ANOVA and single-parameter substitution. **Conclusion: evolution appears to tune lifespan primarily by changing the damage-production rate** — i.e., enhanced molecular accuracy / reduced error rates — rather than by changing removal or the death threshold.

### 2. Two aging regimes: ballistic vs quasi-steady-state

Because η varies widely while β and ε are conserved, the ratio of production to removal (ηt vs β) defines two behaviors [^raz2026]:

- **Ballistic aging** — production *outpaces* removal over most of life. Mean damage rises quadratically like a free-falling object, ⟨x⟩ ~ ½ηt², giving an **inverse-quadratic** production–lifespan relation **η ~ 2X_c/L² (i.e., η ~ 1/L²)**. Hazard curves are **Weibull-like (power-law)**. Found in **yeast, *C. elegans*, most *Drosophila* strains, and mice**.
- **Quasi-steady-state aging** — production is *balanced* by removal (dx/dt ≈ 0), so damage tracks a slowly rising moving set-point until very old age, giving **η ~ 1/L** (inverse-linear). Hazard curves are **Gompertz-like (exponential rise that slows at very old age)**. Found in **humans, dogs, guinea pigs, and cats**.

Each organism lies on a continuum between the regimes, defined by the fraction of lifespan in which production exceeds removal. Most studied species sit squarely in one regime; **female mice** spend their first ~2 years in quasi-steady-state and the remainder in ballistic aging (≈ half the population dying in each regime).

### 3. Removal, noise, and threshold are nearly invariant across mammals

Two conserved parameter combinations emerge across mammals [^raz2026]:

- **Noise→threshold timescale** *T_c* = X_c²/ε ≈ **600 days** (within a factor of ~3) — the time it would take noise alone to drive damage to the death threshold. Close to the ~2-year timescale of mice; in longer-lived mammals this noise timescale is shorter than the lifespan.
- **Removal-to-noise timescale ratio** βX_c/ε ≈ **10** (to a factor of ~2) — i.e., removal working at full speed clears a threshold's worth of damage ~10× faster than noise alone would reach the threshold.

The death threshold *X_c* is at least **~10× larger than the removal saturation point κ** in every organism — removal saturates in youth/reproductive age, well before death. The near-constancy of the noise/removal ratio raises the possibility that biological noise in mammals arises from systemic fluctuations in removal — one hypothesis being **circadian fluctuations in immune clearance** of damaged/senescent cells.

### 4. Which species best resemble human aging

Plotting species in the space of dimensionless parameters (relative noise vs production; determinism), the species closest to humans are **dogs (except the largest breed, German Shepherd), cats, guinea pigs, starving *E. coli*, and *Drosophila* strain 853** — all with Gompertz-like hazard that slows only at very old age [^raz2026]. **Mice, *C. elegans*, and *Drosophila* strains 707/441/217 are closer to the ballistic regime and have mortality patterns less like humans. Female mice are closer to human-like aging than male mice.** This directly informs model-organism choice for human-aging questions — see [[model-organisms/_extrapolation-guide]].

### 5. Yeast replicative aging has negligible removal

Yeast replicative aging is an extreme case of ballistic aging: the best-fit removal β is very small and can be neglected. Damage accumulates in the mother cell with essentially no opposing removal process; an analytical β=0 approximation gives an **asymptotic hazard that rises quadratically with time, h(t) ∝ t²** (prefactor ∝ a power of η/ε), in agreement with the observed yeast hazard [^raz2026]. Candidate non-removed damage: disrupted mitochondria, DNA, epigenetic (histone) states, and alkaline vacuoles retained in the mother cell.

---

## Biological interpretation

- **What is damage *x*?** In mammals the leading candidate is **[[cellular-senescence|senescent cells]]** — a broad class of damaged cells that enter growth arrest and drive inflammation and stem-cell exhaustion, with a damage half-life of ~days plausible and supported experimentally in mice (the SR model's original calibration in [[hypotheses/saturating-removal-model|Karin & Alon 2019]]) [^karin2019]. In yeast the non-removed damage is intracellular (mitochondria, epigenetic states, vacuolar pH).
- **Production vs removal vs repair.** Reduced *production* (better repair fidelity) corresponds to the documented inverse relationship between somatic mutation / epigenetic-drift / translation-error rates and mammalian lifespan; *removal* rates seem roughly constant across mammals.
- **Origin of biological noise.** The conserved noise/removal timescale ratio suggests noise is linked to the removal machinery — plausibly **circadian rhythm in immune function**.

---

## Implications for interventions

The analysis frames a clear lever hierarchy [^raz2026]:

- **Production (η) is the knob evolution uses** to set lifespan, so it is the natural target for large lifespan extension.
- But **reducing production alone stretches both lifespan *and* sickspan** by the same factor (per Yang 2023's compression-of-morbidity analysis). To **extend life *and* compress sickspan**, interventions must *also* raise the threshold *X_c*, reduce noise ε, and/or boost removal β.
- Practically: future longevity interventions aimed at large extension should focus on the **production parameter** (molecular-accuracy / damage-prevention) rather than exclusively on removal (e.g., senolytics) or threshold.

---

## Limitations & caveats

- The SR parameters are **mathematical constructs inferred from survival curves**, not directly measured biological quantities. The model shows how theoretical variables *track* lifespan; it is **not independent validation of unique biological causation** — these are "mathematically grounded hypotheses that await experimental verification" (the authors' own framing).
- Both lifespan and the parameters are estimated from the **same** survival data, so the inferred η/β/etc. are not independent measurements.
- An **identifiability** issue: best-fit parameter sets form elongated valleys in parameter space; *X_c* in particular is weakly constrained, so some confidence intervals are large. Normalizing by *X_c* resolves much of this.
- The model misses the **decrease in mortality at very old ages in *C. elegans*** (possibly phenotypic heterogeneity between plates/individuals).
- Human data are **historical Danish/Swedish birth cohorts** (1890–1910); extrinsic mortality was handled with a Makeham term + age cutoffs.

---

## Why this matters for the wiki

This paper is the quantitative spine for the **[[hypotheses/saturating-removal-model]]** frame and bears on several recurring questions:

- *"Does this model-organism result extrapolate to humans?"* — gives a principled, mortality-dynamics answer (regime classification). See [[model-organisms/_extrapolation-guide]].
- *"What interventions target the rate of aging?"* — production-rate primacy reframes the senolytic (removal) vs damage-prevention (production) debate.
- It connects mechanistically to [[cellular-senescence]] (the proposed substrate of damage *x*) and to demographic frames like [[hypotheses/negligible-senescence]] (Gompertz/Weibull hazard shapes).

---

## Footnotes

[^raz2026]: [[studies/raz-2026-sr-model-aging-regimes]] (this page) · Raz N et al. · *Nat Aging* 6:1330–1340 (2026) · doi:10.1038/s43587-026-01138-7 · multi-species Bayesian/MCMC fit of the SR model to survival data (yeast, *C. elegans*, *Drosophila*, *E. coli*, mouse, guinea pig, cat, dog, human); n ranged 674 to ~80,000 per species · design: in-silico modeling of observational mortality data · open access.

[^karin2019]: [[studies/karin-2019-senescent-cell-turnover-gompertz]] · Karin O, Agrawal A, Porat Z, Krizhanovsky V, Alon U. "Senescent cell turnover slows with age providing an explanation for the Gompertz law." *Nat Commun* 10:5495 (2019) · doi:10.1038/s41467-019-13192-4 · origin of the Saturating Removal model; calibrated against senescent-cell turnover dynamics in mice · model: mouse senescent-cell imaging.
