---
type: study
doi: 10.1126/science.1241224
pmid: 24136970
pmc: PMC3880190
title: "Sleep Drives Metabolite Clearance from the Adult Brain"
authors: [Xie L, Kang H, Xu Q, Chen MJ, Liao Y, Thiyagarajan M, O'Donnell J, Christensen DJ, Nicholson C, Iliff JJ, Takano T, Deane R, Nedergaard M]
year: 2013
journal: Science
study-design: in-vivo
publication-type: research-article
volume: 342
issue: 6156
pages: 373-377
organism: mus-musculus
n-subjects: "Multiple partly overlapping cohorts; aggregate unique n not reported (largest experiment n=77: 25 awake, 29 naturally sleeping, 23 ketamine/xylazine-anesthetized)"
intervention: ["[[interventions/lifestyle/sleep|sleep]]"]
hallmarks-tested: ["[[loss-of-proteostasis]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [sleep-associated-csf-tracer-influx, arousal-state-dependent-extracellular-space-volume, faster-amyloid-beta-clearance-during-sleep, adrenergic-regulation-of-extracellular-space, unchanged-extracellular-tortuosity]
local-pdf: null
verified: true
verified-date: 2026-07-11
verified-by: claude
verified-scope: "Official NIH author manuscript, figures 1–4, and all load-bearing quantitative claims checked end-to-end; DOI/PMID/PMCID metadata and publication status rechecked. The seeder's supplement-derived procedural details were retained, including the explicit 0.5% methods-versus-5% Figure S2 discrepancy; remaining non-load-bearing supplementary details were not independently re-extracted. Study-wide unique n and several experiment-level n values/error-bar definitions are not reported and remain marked unavailable."
---

# Xie et al. 2013 — sleep, extracellular space, and brain-solute clearance

## TL;DR

This foundational mouse study linked arousal state to brain-fluid transport using three converging assays. In young adult male C57BL/6 mice, cortical influx of an intracisternal 3-kDa dextran tracer was approximately 95% lower during experimentally maintained wakefulness than during natural sleep; cortical extracellular-space volume fraction was approximately 14% while awake versus approximately 23% during natural sleep or ketamine/xylazine anesthesia; and intracortically injected radiolabeled amyloid-β1–40 and inert inulin cleared approximately twofold and more than twofold faster, respectively, during natural sleep than during wakefulness. Broad α1-, α2-, and β-adrenergic receptor blockade in awake mice reproduced a sleep-like expansion of extracellular space and increased tracer influx, implicating noradrenergic arousal signaling without identifying a specific receptor, cell type, or downstream volume-regulatory mechanism.[^xie2013]

The paper's often-quoted "60% increase" is **relative, not an increase of 60 percentage points**. The reported extracellular-space fraction rose from 14.1% awake to 23.4% during natural sleep (an absolute increase of 9.3 percentage points and a relative increase of approximately 66%) and, in paired awake-to-anesthesia recordings, from 13.6% to 22.7% (9.1 percentage points absolute; approximately 67% relative). The work was entirely in instrumented mice and did not test humans, aging, neurodegenerative disease, cognition, sleep deprivation, endogenous amyloid production, or long-term protein deposition.

## Design

### Animals and preparation

- All experiments used **male C57BL/6 mice, 10–12 weeks old**, obtained from Charles River.
- For two-photon experiments, mice received a head plate under 2% isoflurane, then underwent three to four 30–60-minute stage-habituation sessions over two days. On day 3, investigators prepared a right-hemisphere cranial window, a contralateral electrocorticography (ECoG) burr hole, a cisterna-magna cannula, and neck electromyography (EMG) leads under 2% isoflurane. Imaging began after 4–6 hours of recovery.
- Natural-sleep experiments were collected at 12–2 p.m. Mice were imaged while asleep and then awakened by gentle tail movement. Awake experiments were collected at 8–10 p.m.; tails were gently handled to prevent spontaneous sleep.
- Ketamine/xylazine anesthesia was 100/10 mg/kg intraperitoneally. ECoG plus EMG distinguished low-amplitude desynchronized wake activity from high-amplitude, low-frequency-dominated sleep/anesthesia activity during imaging; extracellular-space measurements used ECoG from the TMA reference electrode without EMG.
- Radiotracer-clearance experiments did not use ECoG/EMG because of contamination concerns. An observer scored behavior every five minutes; awake mice were kept alert by gentle cage manipulation, while the natural-sleep group was kept in a quiet room.[^xie2013]

### Cohorts and sample sizes

The manuscript does not report an aggregate number of unique mice, and some animals contributed paired measurements. `n-subjects` therefore cannot be reduced to a valid study-wide total.

| Experiment | Groups and reported n | Comparison structure |
|---|---|---|
| Two-photon CSF-tracer influx, natural sleep → awake | n=6 | Same mice; sleep at midday, then gentle-tail arousal |
| Two-photon CSF-tracer influx, awake → ketamine/xylazine | n=6, new cohort | Same mice; awake in evening, then anesthesia |
| Two-photon influx, awake → adrenergic antagonists | n=6 | Same mice; awake in evening, before/after drug cocktail |
| TMA extracellular space, natural sleep vs. awake | n=6 sleeping; n=4 awake | Separate groups recorded at different times of day |
| TMA extracellular space, awake → ketamine/xylazine | n=10 | Paired within mouse |
| Radiolabeled Aβ1–40 plus inulin clearance | n=77 total: 25 awake, 29 sleeping, 23 anesthetized; 3–6 per terminal time point | Independent terminal groups harvested 10–240 minutes after injection |
| Intracisternal ^3H-mannitol influx control | n=4–6 per reported group | Awake vs. ketamine/xylazine; terminal collection at 15, 30, or 45 minutes |
| Surface adrenergic blockade plus TMA | n=4–8 | Before/after blockade and state comparators; exact n per bar not tabulated |
| ECoG effect of adrenergic blockade | n=7 | Awake, blockade, and state comparison |
| Cortical norepinephrine microdialysis | Not reported | Unrestrained → restrained → unrestrained → ketamine/xylazine |

### Assays

#### Two-photon CSF-tracer influx

FITC- or Texas-red-labeled 3-kDa dextran was infused through the cisterna-magna cannula over five minutes (total volume 5 µL at 1 µL/min). Imaging repeatedly sampled cortex from the surface to 200 µm depth for 30 minutes; the primary analysis used sections 100 µm below the surface and quantified tracer-positive area and intensity around penetrating arterioles and in adjacent parenchyma. The second dye was infused 15 minutes after transition to the comparison state. A separate intracisternal ^3H-mannitol experiment provided a terminal whole-brain tracer-influx control.

The supplement is internally inconsistent about dextran concentration: the methods state **0.5%**, whereas Figure S2A states **5%**. The molecular weight, volume, and infusion rate agree. This page therefore does not select one concentration as correct. #gap/source-discrepancy

#### Tetramethylammonium iontophoresis

Real-time iontophoretic tetramethylammonium (TMA) measurements estimated extracellular-space volume fraction (α) and tortuosity (λ) in cortex. An iontophoresis electrode delivered TMA while a TMA-selective electrode approximately 150 µm away measured its dilution and diffusion. Both were normally inserted 150 µm below the cortical surface; calibration was repeated in agarose before and after tissue recordings.

#### Radiolabeled solute clearance

A 0.5-µL artificial-CSF bolus containing 10 nM monomeric ^125I-Aβ1–40 and 0.05 µCi ^14C-inulin was simultaneously injected over five minutes into right frontal cortical interstitial fluid. Separate animals were killed at prespecified time points from 10 to 240 minutes. Remaining brain radioactivity was fitted to exponential disappearance curves to estimate rate constants and half-times. Inulin served as a metabolically inert polar tracer intended to report interstitial-fluid bulk clearance independently of receptor-mediated amyloid transport across the blood–brain barrier.[^xie2013]

#### Adrenergic manipulation

The intervention was not selective norepinephrine depletion. It combined:

- prazosin (α1-adrenergic antagonist),
- atipamezole (α2-adrenergic antagonist), and
- propranolol (β-adrenergic antagonist).

For two-photon influx imaging, all three were given intracisternally at 2 mM each: a 5-µL bolus at 1 µL/min followed by continuous infusion at 0.167 µL/min. For TMA recordings, all three were applied directly to exposed cortex at 25 µM each. A separate microdialysis experiment measured cortical norepinephrine during free movement, head restraint, and ketamine/xylazine anesthesia.

## Key results

### Wakefulness strongly suppressed CSF-tracer influx

During the 30-minute within-mouse imaging session, periarterial and parenchymal dextran influx was approximately **95% lower after mice were awakened** than during their preceding natural sleep (n=6; time course p<0.05 by two-way ANOVA with Bonferroni correction; 30-minute comparison p<0.01). ECoG/EMG independently confirmed loss of slow-wave-dominated activity after arousal.[^xie2013]

In a separate evening cohort, tracer influx was low while mice were awake and increased after ketamine/xylazine anesthesia in every analyzed mouse (n=6; p<0.05, two-way ANOVA with Bonferroni correction; 30-minute comparison p<0.01). The anesthesia-associated influx rate was described as comparable to natural sleep, but the paper did not report a formal direct natural-sleep-versus-anesthesia test for this imaging endpoint.

The ^3H-mannitol control was directionally concordant: whole-brain mannitol accumulation increased over time during ketamine/xylazine anesthesia but not significantly during wakefulness (n=4–6 per reported group; p<0.05 for the state/time analysis). A 5-µL intracisternal vehicle/tracer injection did not measurably change ECoG power, whereas a 50-µL injection transiently dampened ECoG amplitude, supporting the selected 5-µL volume as a control against injection-induced state change.

### Extracellular-space volume expanded during sleep or anesthesia

| Comparison | Awake | Sleep/anesthesia | Absolute difference | Relative difference from awake | Statistics |
|---|---:|---:|---:|---:|---|
| Independent natural-sleep vs. awake cohorts | 14.1 ± 1.8% (n=4) | 23.4 ± 1.9% (n=6) | +9.3 percentage points | +66.0% | p<0.01, t test |
| Paired awake → ketamine/xylazine | 13.6 ± 1.6% | 22.7 ± 1.3% (n=10) | +9.1 percentage points | +66.9% | p<0.01, paired t test |

These data are the basis for the paper's abstract statement that sleep or anesthesia was associated with a "60% increase" in interstitial space. The percentage describes the increase **relative to the smaller awake fraction**, not a 60-percentage-point change and not a claim that 60% of brain volume became extracellular. The paper does not define whether the displayed ± values are standard deviations or standard errors.

Extracellular **tortuosity did not change significantly** across awake, sleeping, and anesthetized states (λ approximately 1.3–1.8; n=4–10; p>0.1). Measurements at 150 versus 300 µm depth also did not differ significantly (n=6 for the deeper control; p>0.4), arguing against a depth-specific cranial-window artifact within the sampled superficial cortex. These are important nulls: the TMA result was a change in estimated extracellular volume fraction, not a detectable change in path tortuosity.[^xie2013]

### Sleep and anesthesia accelerated injected-solute clearance

In the 77-mouse terminal radiotracer experiment:

- the fitted clearance rate for injected ^125I-Aβ1–40 was approximately **twofold faster during natural sleep than wakefulness** (29 sleeping vs. 25 awake mice across time points; p<0.05, ANOVA with Bonferroni correction);
- Aβ clearance **did not differ significantly between natural sleep and ketamine/xylazine anesthesia**;
- inert ^14C-inulin cleared **more than twofold faster** during both sleep and anesthesia than during wakefulness (same animals and group sizes; p<0.05 versus awake); and
- the paper reported 3–6 mice per terminal time point, so the headline group totals were distributed across multiple time points rather than representing n=23–29 at one measurement time.[^xie2013]

The assay tested disappearance of acutely injected, radiolabeled monomeric Aβ1–40 and inulin. It did **not** measure endogenous Aβ production, plaque formation, chronic waste accumulation, neuronal injury, cognition, or healthspan.

### Broad adrenergic blockade produced a sleep-like state and transport phenotype

In awake mice, intracisternal prazosin/atipamezole/propranolol increased periarterial and parenchymal dextran influx toward the levels observed during sleep or anesthesia (n=6; time course p<0.05; 30-minute comparison p<0.01). Surface application of the lower-concentration cocktail increased extracellular-space fraction from **14.3 ± 5.2% to 22.6 ± 1.2%** (n=4–8; p<0.01). The post-blockade fraction was higher than awake vehicle control (p<0.01) and not significantly different from natural sleep (p=0.77) or anesthesia (p=0.95).[^xie2013]

The same antagonist cocktail increased slow-wave ECoG power and changed the awake cortical signal into a less regular, sleep-like pattern (n=7; p<0.01). Cortical microdialysis found no rise in norepinephrine during head restraint in trained mice, while ketamine/xylazine lowered norepinephrine (p<0.01; n and absolute concentrations not reported in the text or figure legend). Thus, the data support involvement of **broad adrenergic arousal signaling**, but cannot distinguish direct regulation of cell volume from an indirect effect mediated through the induced sleep-like network state.

## Mechanistic interpretation

The study supplied converging evidence for the following experimentally supported sequence in young mice:

`awake / adrenergic arousal` → `smaller cortical extracellular-space fraction` → `less intracisternal tracer entry and slower clearance of injected interstitial solutes`

Natural sleep, ketamine/xylazine anesthesia, and broad adrenergic blockade all moved the measured variables in the opposite direction. The paired state transitions strengthen causal inference beyond a simple time-of-day association, particularly for awake-to-anesthesia TMA measurements and within-mouse tracer imaging.

Several steps remained inferred. TMA measured extracellular volume and tortuosity, not CSF–interstitial bulk velocity. Two-photon tracer distribution and radiotracer disappearance did not by themselves uniquely distinguish convection/advection from diffusion, vascular transport, tissue binding, or altered production for endogenous metabolites. The authors described the transport as convective [[glymphatic-system|glymphatic]] exchange, but this paper did not manipulate [[aquaporin-4|AQP4]] and did not independently identify the exit route. It cited earlier AQP4-deletion work for that framework.

The responsible cell type was also unresolved. The paper proposed that adrenergic signaling changes cell volume and therefore extracellular-space dimensions, but explicitly stated that further work was needed to determine which cells expand or shrink during sleep, anesthesia, or receptor blockade. #gap/no-mechanism

## Extrapolation to humans and aging

| Dimension | Status | Notes |
|---|---|---|
| Brain-fluid and perivascular transport present in humans? | partial | Human CSF/interstitial transport exists, but this mouse paper did not measure it in humans or establish that the same routes and kinetics dominate. |
| Sleep-associated extracellular-space expansion conserved? | unknown | The approximately 14% to 23% cortical change was measured invasively in young male mice; no human extracellular-volume measurement was included. |
| Sleep-associated Aβ clearance replicated in humans by this study? | no | No human participants, endogenous Aβ kinetics, PET, CSF sampling, or clinical endpoint were studied. |
| Aging tested? | no | All mice were 10–12 weeks old. The study did not compare young and aged animals. |
| Neurodegeneration or cognitive benefit tested? | no | No disease model, plaque burden, behavior, cognition, neurodegeneration, or longitudinal outcome was measured. |

The results are mechanistically relevant to [[loss-of-proteostasis]], [[amyloid-beta]], [[brain]], and [[interventions/lifestyle/sleep|sleep]], but they do not establish that improving sleep prevents human dementia or that pharmacologically increasing tracer influx is beneficial. Those claims require independent human and longitudinal evidence. #gap/needs-human-replication

## Limitations and evidence-quality flags

- **Young male inbred mice only:** no females, aged animals, other strains, or humans. #gap/needs-human-replication
- **Multiple small experimental cohorts:** imaging and TMA comparisons commonly used n=4–10; no prospective power calculation, randomization method, blinded analysis, or preregistration was reported. #gap/needs-replication
- **Aggregate n unavailable:** the study-wide number of unique animals cannot be reconstructed because cohorts may overlap and only experiment-level n values are given.
- **Natural-sleep versus awake timing:** independent TMA sleep and wake groups were sampled at different circadian times (midday versus late evening). Paired awake-to-anesthesia and within-mouse imaging transitions reduce but do not eliminate circadian and order concerns.
- **Anesthesia is not physiological sleep:** ketamine/xylazine changes vascular tone, neural activity, norepinephrine, and systemic physiology; similarity to natural-sleep endpoints does not make the states biologically equivalent.
- **Invasive preparation:** cranial window, head restraint, cisterna-magna cannulation, intracortical injection, and only 4–6 hours of recovery before imaging could affect CSF dynamics or inflammation. Training reduced the measured restraint-stress norepinephrine response but did not make the preparation noninvasive.
- **Behavioral sleep scoring in clearance assay:** radiotracer groups lacked EEG/EMG confirmation; sleep was judged visually every five minutes, and the supplement shows the natural-sleep group was not continuously asleep.
- **Acute exogenous substrates:** the Aβ assay used injected ^125I-Aβ1–40, not endogenous production or chronic amyloid accumulation. Inulin helps separate receptor-mediated Aβ transport from general solute clearance but does not specify an anatomical exit pathway.
- **Mechanism not isolated:** the three-drug adrenergic cocktail was broad, and it induced sleep-like ECoG activity. Receptor subtype, cell type, and direct versus network-mediated effects were unresolved.
- **Transport-mode inference:** the experiments demonstrated state-dependent tracer movement and disappearance but did not uniquely prove parenchymal bulk convection over diffusion or other clearance mechanisms.
- **Reporting limitations:** confidence intervals and exact effect sizes for most endpoints were absent; error-bar type for the reported extracellular-space values was not defined; exact n for norepinephrine microdialysis was not reported.
- **Supplement discrepancy:** dextran concentration is 0.5% in the supplementary methods but 5% in the Figure S2 caption. #gap/source-discrepancy
- **Single research group:** this foundational result requires interpretation alongside independent replications and later methodological challenges. #gap/needs-replication

## Funding and conflicts

The paper reports NIH/NINDS funding (NS078167 and NS078304 to Maiken Nedergaard; NS028642 to Charles Nicholson). The manuscript does not provide a dedicated competing-interests declaration in the PMC rendering. No commercial sponsor is identified.

## Downstream propagation candidates

- [[glymphatic-system]]: foundational arousal-state evidence; preserve the distinction between measured tracer movement and the stronger claim of convective, AQP4-dependent brain-wide clearance.
- [[interventions/lifestyle/sleep|Sleep]]: add the approximately 95% tracer-influx difference and approximately twofold injected-solute-clearance result as young-mouse mechanistic evidence, not as a demonstrated human cognitive or dementia benefit.
- [[brain]]: add the state-dependent cortical extracellular-space measurements, explicitly stating that the "60%" is a relative increase from approximately 14% to approximately 23%.
- [[loss-of-proteostasis]] and [[amyloid-beta]]: cite the injected Aβ1–40 clearance result while noting absence of endogenous production, plaque, disease, and human endpoints.
- [[norepinephrine]] / adrenergic signaling: propagate the broad-antagonist result with the induced sleep-like ECoG state and receptor/cell-type ambiguity adjacent.
- Any future TMA-method page: include the unchanged tortuosity null, depth control, calibration design, and undefined error-bar type.

## Citation

[^xie2013]: [[studies/xie-2013-sleep-glymphatic-clearance]] · multiple in-vivo cohorts; largest n=77 (25 awake, 29 naturally sleeping, 23 ketamine/xylazine-anesthetized; 3–6 mice per terminal time point) · male C57BL/6 mice, 10–12 weeks · natural sleep, maintained wakefulness, ketamine/xylazine anesthesia, and broad adrenergic antagonism · p<0.05 for primary state-dependent tracer-clearance/influx comparisons; p<0.01 for extracellular-space and 30-minute paired influx comparisons · doi:10.1126/science.1241224 · PMID 24136970 · PMCID PMC3880190.
