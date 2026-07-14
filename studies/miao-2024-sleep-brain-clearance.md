---
type: study
doi: 10.1038/s41593-024-01638-y
pmid: 38741022
pmc: PMC11156584
title: "Brain clearance is reduced during sleep and anesthesia"
authors: [Miao A, Luo T, Hsieh B, Edge CJ, Gridley M, et al.]
year: 2024
journal: Nature Neuroscience
study-design: in-vivo
publication-type: brief-communication
volume: 27
issue: 6
pages: "1046-1050"
organism: mus-musculus
n-subjects: "unique total not reported; diffusion-state analysis n=60 observations (52 across sleep/wake bins, 8 dexmedetomidine); paired clearance assays n=8 dexmedetomidine, n=9 ketamine-xylazine, n=6 pentobarbital, n=8 sleep/wake"
intervention: [sleep, dexmedetomidine, ketamine-xylazine, pentobarbital]
hallmarks-tested: []
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [small-dye-clearance-lower-during-sleep, small-dye-clearance-lower-during-anesthesia, cortical-fitc-dextran-diffusion-unchanged-by-vigilance-state, csf-influx-not-measured, subsequent-methodological-dispute]
local-pdf: null
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-07-11 from the complete PubMed Central article (PMC11156584), corrected official source-data record, and publisher correction/dispute pages — not yet independently verified. Numerics should be checked by a separate verifier before this study is treated as load-bearing.

# Miao et al. 2024 — brain clearance during sleep and anesthesia

## TL;DR

In adult male mice, Miao et al. injected fluorescent solutes directly into the caudate-putamen and monitored their spread toward frontal cortex. Local movement of 4-kDa FITC–dextran did not vary detectably with vigilance state, dexmedetomidine, or time of day. In a separate assay using the smaller dye Alexa Fluor 488 (AF488), less dye disappeared during recovery sleep or three anesthetic regimens than during paired waking or saline conditions; histology supported greater residual dye during sleep and ketamine–xylazine anesthesia. The endpoint was disappearance of an intraparenchymally injected small dye under a fitted diffusion-plus-clearance model. It was **not** cerebrospinal-fluid (CSF) tracer influx, direct waste-product clearance, or a whole [[glymphatic-system]] assay. The paper therefore conflicts with influential CSF-influx studies but does not measure the same endpoint.[^miao2024]

## Design

| Field | Value |
|---|---|
| Animals | Adult male C57BL/6 mice, 3–7 months old; methods use both `C57/BL6` and `C57BL/6J` labels |
| Housing/recording | 12-h light/dark cycle; all measurements in the home cage |
| Surgery | Electroencephalography/electromyography electrodes, 200-µm optical fiber in frontal cortex, and guide cannula into caudate-putamen; at least 1 week recovery |
| Vigilance scoring | Automated electroencephalography/electromyography classification of wake, non-rapid-eye-movement sleep, and rapid-eye-movement sleep, followed by manual review |
| Sleep comparison | Same mice tested 1 week apart in randomized order: 5 h kept awake versus recording from the first episode of recovery sleep after 5 h sleep deprivation |
| Anesthesia comparison | Same mice received saline and one anesthetic 1 week apart in randomized order |
| Blinding/power | Data collection and analysis generally not blinded; no a priori sample-size calculation |

### Assay 1: movement/diffusion

The authors injected 4-kDa fluorescein-isothiocyanate dextran (FITC–dextran; 25 mg/ml) into caudate-putamen at 0.1 µl/min for 100 min. After fluorescence in frontal cortex reached a slowly declining quasi-steady phase around 6–7 h, a 488-nm laser photobleached a small tissue volume. Fluorescence recovery was fit to a three-dimensional diffusion model to estimate the effective tissue diffusion coefficient. Agarose “brain phantom” gels, direct diffusion measurements, and brain slices were used to characterize the model and light distribution.[^miao2024]

### Assay 2: modeled disappearance/clearance

For the clearance experiment, 0.5 µl AF488 (approximately 570 Da; 5 mg/ml) was injected over 10 min into caudate-putamen. Frontal-cortex photometry tracked the concentration curve for several hours. The authors estimated percentage clearance by comparing the measured curve with the concentration predicted by a Gaussian diffusion model in the absence of clearance. This definition treats loss from the modeled brain concentration field as clearance; it does not identify the anatomical exit route or distinguish blood–brain-barrier transport from perivascular, lymphatic, ventricular, or other efflux routes.[^miao2024]

Anesthetic doses were 200 µg/kg intraperitoneal dexmedetomidine, 100 mg/kg ketamine plus 20 mg/kg xylazine intraperitoneally, or 50 mg/kg pentobarbital intraperitoneally. Animals were maintained at 36.5 °C during anesthesia.[^miao2024]

### Assay 3: histology

Separate animals were killed 3 or 5 h after AF488 injection. Brains were frozen, cut into 60-µm coronal sections, imaged by wide-field fluorescence microscopy, and the mean fluorescence along the anterior–posterior axis was fit with Gaussian curves. The article and corrected source-data workbook provide group means but do not state the histology n per condition in the text or figure legend.[^miao2024]

## Key results

### Local diffusion was not detectably state-dependent

- Across natural vigilance-state bins, the mean 4-kDa FITC–dextran diffusion coefficient was 32.1 ± 1.9 µm²/s (n=52 observations). Including dexmedetomidine observations (n=8), the five-group comparison was null: one-way analysis of variance F(4,55)=0.90, p=0.47. The authors estimated that the assay would have detected an approximately 35% difference in the diffusion coefficient.
- Diffusion was also unchanged across six zeitgeber-time bins: F(5,64)=0.88, p=0.50 (n=70 observations total).
- The authors estimated sensitivity to net bulk flow greater than 0.5 µm/s, but explicitly could not exclude opposing local flows that averaged to zero.

Thus, the null result constrains changes detectable by this cortical photobleaching/model system; it does not prove that every form of interstitial or perivascular fluid motion is absent during sleep.[^miao2024]

### Modeled AF488 clearance was lower during sleep and anesthesia

At the photometry peak (approximately 2–3 h), saline controls showed 70–80% modeled clearance. Paired source-data means were 74.9% versus 36.0% with dexmedetomidine (n=8, p=0.0029), 76.4% versus 39.8% with ketamine–xylazine (n=9, p=0.0015), 81.5% versus 57.3% with pentobarbital (n=6, p=0.037), and 69.7% during wake versus 52.8% during recovery sleep (n=8, p=0.016). These means are arithmetic summaries of the corrected source-data values; the p-values are the paper's two-tailed paired t tests.[^miao2024]

The full concentration curves also differed by state (two-way analysis of variance with Holm–Bonferroni correction, p<10⁻⁶ for each anesthetic-versus-saline comparison and sleep-versus-wake comparison). The fitted diffusion coefficients derived from the curve timing did not significantly differ by sleep or anesthesia. Peak clearance had a reported weak negative association with electroencephalographic delta power, but the main text did not supply the coefficient or p-value.[^miao2024]

### Histology supported greater dye retention

AF488 concentration across sections was higher than wake during ketamine–xylazine anesthesia (p<10⁻⁶ at both 3 and 5 h) and sleep (p=0.0016 at 3 h; p<10⁻⁴ at 5 h), using two-way analysis of variance with Holm–Bonferroni correction. The authors interpreted the greater residual concentration as reduced clearance, while the spatial spread remained approximately Gaussian.[^miao2024]

## What this result does and does not test

The study's central methodological argument is that tracer concentration in tissue reflects both arrival and departure. Earlier sleep studies often introduced tracer into CSF and measured its entry into parenchyma; Miao et al. instead injected tracer into parenchyma and modeled disappearance. Increased CSF-to-parenchyma tracer accumulation and reduced intraparenchymal small-dye disappearance can therefore coexist, because they are different directional processes and depend on tracer size, injection site, pressure perturbation, anatomical sampling, and time point.[^miao2024]

The paper supports a state difference in its modeled **small-dye disappearance** endpoint. It does not directly show that sleep reduces clearance of amyloid-β, tau, or endogenous metabolites, and it does not establish which efflux route produced the signal. #gap/needs-replication #gap/contradictory-evidence

## Author correction

The publisher issued an author correction on 14 June 2024 (doi:10.1038/s41593-024-01698-0). One source-data column for Figure 3b, “Mean Wake 3h,” was incorrect and was replaced online. The notice identifies no correction to the article text, reported statistical tests, or conclusions, and the corrected source-data workbook is the version summarized here. The notice itself does not say that it changed or reaffirmed the conclusions.[^correction2024]

## Subsequent dispute — not adjudicated here

In a 2025 *Matters Arising*, Plá, Kroesbergen, Deng and colleagues argued that the clearance definition/model, flow-velocity assumptions, data visualization, unequal time-bin sampling, and statistical analysis did not support Miao et al.'s conclusion.[^pla2025] Franks and Wisden replied that the objections were misunderstandings or incorrect and defended the original methods and interpretation.[^franks2025] These paired commentaries are a methodological dispute, not an independent replication. This page records both positions without treating either commentary as resolving the empirical conflict. #gap/contradictory-evidence

## Extrapolation to humans and aging

| Dimension | Status | Notes |
|---|---|---|
| Fluid/solute transport pathways conserved in humans? | partial | Humans have CSF–interstitial exchange and brain efflux routes, but their relative anatomy and scale differ from mice. |
| State-dependent small-dye disappearance conserved? | unknown | This intraparenchymal AF488 assay has not been replicated in humans. |
| Replicated in humans? | no | Human sleep imaging primarily measures CSF dynamics or indirect proxies, not the same endpoint. |

The mice were young adults (3–7 months), not aged animals. The paper is relevant to aging because sleep, protein aggregation, and brain-fluid transport intersect in neurodegenerative disease, but it provides no direct aging comparison and no evidence that manipulating this endpoint changes cognition, neurodegeneration, healthspan, or lifespan. #gap/needs-human-replication

## Limitations and evidence-quality flags

- **Small, male-only cohorts:** paired clearance assays included 6–9 mice; no females or aged mice were studied.
- **Unique total n not reported:** mice may have contributed to multiple assays or state observations, preventing a defensible study-wide subject count.
- **Recovery-sleep design:** sleep followed 5 h of sleep deprivation, so sleep state is entangled with prior deprivation, recovery physiology, handling, and time.
- **Model-dependent endpoint:** percentage clearance depends on Gaussian diffusion assumptions, estimated injection-to-fiber distance, and a fitted no-clearance counterfactual.
- **Small exogenous dyes:** 570-Da AF488 and 4-kDa FITC–dextran do not establish the behavior of larger or receptor-transported endogenous solutes.
- **Intraparenchymal injection:** cannulation and injection can perturb local pressure and tissue, and the assay does not reproduce physiological solute production.
- **Incomplete blinding and exclusions:** most collection/analysis was not blinded; poor model fits and incomplete paired recordings were excluded.
- **Histology n incompletely reported:** exact group sizes are absent from the article text/legend and source-data workbook.
- **Correction and active dispute:** one source-data column was corrected, and the interpretation remains contested in the peer-reviewed literature. #gap/contradictory-evidence
- **No causal health endpoint:** endogenous waste burden, neuronal injury, cognition, and disease progression were not measured.

The authors declared no competing interests. Source data and the sleep-scoring script were made available through Figshare (doi:10.6084/m9.figshare.25483339).[^miao2024]

## Cited by wiki pages

- [[glymphatic-system]]
- [[interventions/lifestyle/sleep]]

## Citations

[^miao2024]: [[studies/miao-2024-sleep-brain-clearance]] · paired clearance n=6–9; diffusion-state n=60 observations · in-vivo · model: adult male C57BL/6 mice · doi:10.1038/s41593-024-01638-y · PMID 38741022 · PMCID PMC11156584.

[^correction2024]: doi:10.1038/s41593-024-01698-0 · Miao A et al. · *Nature Neuroscience* 2024;27:1425 · author correction replacing one incorrect Figure 3b source-data column (“Mean Wake 3h”).

[^pla2025]: doi:10.1038/s41593-025-01897-3 · Plá V, Kroesbergen E, Deng S, et al. · *Nature Neuroscience* 2025;28:731–733 · Matters Arising critique; not an independent replication.

[^franks2025]: doi:10.1038/s41593-025-01898-2 · Franks NP, Wisden W · *Nature Neuroscience* 2025;28:734–736 · reply to the Matters Arising; not an independent replication.
