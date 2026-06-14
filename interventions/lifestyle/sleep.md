---
type: intervention
aliases: [sleep hygiene, sleep duration, sleep quality, healthy sleep, restorative sleep]
mode: lifestyle
mechanisms: [glymphatic-clearance, circadian-realignment, slow-wave-sleep-memory-consolidation, hpa-axis-regulation, immune-modulation]
targets: []
target-hallmarks: ["[[chronic-inflammation]]", "[[loss-of-proteostasis]]", "[[altered-intercellular-communication]]"]
target-pathways: []
human-evidence-level: strong
clinical-stage: implemented
safety-profile: well-established
translation-gap: "human-evidence-strong for associative biology; phase-3-rct-needed for sleep-as-longevity-intervention with hard endpoints"
next-experiment: "RCT of structured sleep-extension intervention (CBT-i + light hygiene + chronotype-aligned schedule) in middle-aged short-sleepers (<6 hr/night) with DunedinPACE as primary endpoint over 18 months; secondary endpoints inflammation (CRP/IL-6), amyloid-PET, and frailty index"
clinical-trials-active: null
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Iliff 2012, Mander 2017, Cappuccio 2010, Yin 2017 verified against primary-source PDFs; Carroll 2015 partially verified via publisher abstract (PDF download failed, bronze OA); Xie 2013 attribution confirmed correct per R26b context but PDF unavailable (download failed, no OA copy) — quantitative claims from Xie 2013 should be re-verified if PDF becomes accessible. R34 recency refresh (2026-05-08): Diao 2025 Dongfeng-Tongji cohort (DunedinPACE mediates 6.2% of sleep-mortality association), Wu 2025 UK Biobank MR (n=442,664; threshold nonlinear sleep→aging biomarker), and Zhang 2026 sleep-trait MVMR (napping → +1.08 GrimAge) integrated via PubMed abstracts."
---

# Sleep (duration, quality, timing)

Sleep is the most universal biological-reset process in mammals, yet it is routinely shortened and degraded in modern populations. In the context of aging biology, sleep is both a **diagnostic window** (poor sleep quality is an early and sensitive marker of neurodegeneration and systemic inflammaging) and an **interventionally tractable target** — structured behavioral interventions (CBT-i, light hygiene, chronotype alignment, CPAP for obstructive apnea) demonstrably improve sleep architecture, inflammatory markers, and emerging biological-age signals. Lifespan extension from improved sleep has not been demonstrated in a controlled trial, but the mechanistic case — glymphatic clearance of neurotoxic waste, suppression of HPA-axis-driven cortisol, overnight immune reset — is among the strongest in aging biology.

## Sleep architecture

Normal adult sleep cycles through approximately five 90-minute ultradian cycles per night:

| Stage | Also called | Proportion of sleep | Function |
|---|---|---|---|
| N1 | Light NREM | ~5% | Transition; brief arousal threshold |
| N2 | Core NREM | ~45–50% | Memory consolidation onset; sleep spindles; K-complexes |
| N3 | Slow-wave sleep (SWS), deep NREM | ~15–20% in young adults | Declarative memory; glymphatic clearance; GH secretion |
| REM | REM sleep | ~20–25% | Emotional memory; synaptic plasticity; procedural consolidation |

**Distribution shifts across the night:** SWS predominates in the first half of the night (deep restorative sleep is front-loaded); REM predominates in the second half. Truncating sleep from the end disproportionately removes REM; from the beginning (delayed bedtime) disproportionately removes SWS.

## Age-related decline in sleep

Sleep architecture deteriorates measurably from the third decade onward [^mander2017]:

- **Total sleep time (TST)** declines approximately 10 minutes per decade from age 30–60.
- **SWS (N3)** undergoes the most dramatic age-related loss: from ~15–20% of sleep in young adults, declining substantially by age 70 — a ~75–80% reduction in slow-wave activity (SWA) amplitude over frontal EEG derivations relative to young adults, with the largest age-related changes during the first NREM sleep cycle [^mander2017]. SWS time also declines, though the magnitude varies by sex (men show greater loss) and measurement method; some older adults retain more SWS time than others despite severely blunted SWA amplitude.
- **Sleep efficiency** (time asleep / time in bed) declines; fragmentation (micro-arousals) increases.
- **Circadian amplitude** flattens; the core body-temperature nadir advances (phase advance), shifting preferred bedtime and wake time earlier.
- **REM** declines modestly and later than SWS.

These changes are not simply benign "normal aging" — they track strongly with cognitive performance, Alzheimer's risk, and systemic inflammation, and some are partially reversible with exercise or sleep hygiene intervention.

## Glymphatic clearance — sleep's proteostasis function

The glymphatic system (named by analogy with the lymphatic system) is an astrocyte-dependent paravascular network that clears metabolic waste from the brain interstitium during sleep [^iliff2012].

**Mechanism:** Cerebrospinal fluid (CSF) enters the brain parenchyma via the periarterial space and exchanges with interstitial fluid (ISF) across AQP4 (aquaporin-4) water channels located on astrocyte endfeet. This bulk flow convects solutes — including amyloid-beta (Aβ), tau, lactate, and other metabolic waste — to the perivenous space for drainage into deep cervical lymphatics and the dural sinuses.

**Sleep dependence:** Xie et al. 2013 measured real-time glymphatic tracer transport in mice and found a ~60% increase in interstitial space volume during sleep vs wakefulness, with dramatically accelerated Aβ clearance [^xie2013]. The expanded interstitial space in sleep reduces tortuosity and resistance to convective flow.

**AQP4 and aging:** AQP4 polarization to astrocyte endfeet declines with age and is disrupted in Alzheimer's disease models. #gap/needs-human-replication — most glymphatic aging data are in rodents; direct in-vivo human glymphatic flow measurement is technically challenging (requires intrathecal tracers or MRI-based flow proxies).

**Implication for [[loss-of-proteostasis]]:** Chronic sleep restriction impairs glymphatic clearance, allowing Aβ and tau to accumulate in the interstitium — creating a potential sleep-deprivation → neurodegeneration feedforward loop. See [[alzheimers-disease]] for the Aβ sleep connection.

## Sleep and inflammation — the HPA/NF-kB axis

Poor sleep activates pro-inflammatory signaling at multiple levels [^carroll2015]:

- **HPA-axis:** Fragmented or shortened sleep elevates cortisol (and disrupts its normal nocturnal suppression), driving glucocorticoid receptor signaling that paradoxically upregulates NF-kB-driven inflammation over time via receptor desensitization. Sleep is the primary behavioral modulator of the [[pathways/hpa-axis]] diurnal rhythm.
- **Sympathetic nervous system:** Sleep loss increases sympathetic tone (elevated norepinephrine), activating beta-adrenergic signaling on immune cells; this reduces glucocorticoid sensitivity in monocytes and promotes pro-inflammatory transcription.
- **TLR4 pathway:** Carroll et al. 2015 examined partial sleep deprivation (restricted to 03:00–07:00 sleep window) in older adults (n=49, ages 60–84) vs younger adults (n=21, ages 25–39) and found a significant age × sleep-loss interaction (p<0.05). Younger adults showed increased TLR-4-stimulated monocyte IL-6 and TNF-α production after partial sleep deprivation; older adults paradoxically showed **reduced** baseline TLR-4-stimulated cellular inflammation that was **not further activated** by sleep loss — suggesting that older adults may already be in a state of chronic immune dysregulation that is not acutely amplified by sleep deprivation [^carroll2015]. #gap/needs-replication — the blunted acute inflammatory response in older adults does not imply protection; chronic low-grade inflammation in aged monocytes is well-documented separately.
- **IL-6, TNF-alpha, CRP** are all elevated in epidemiological studies of chronically short sleepers.

This inflammatory pathway connects sleep quality to [[chronic-inflammation]] and likely mediates some of the cardiovascular and metabolic risk associated with short sleep.

## Sleep duration and mortality — epidemiological signal

The relationship between sleep duration and all-cause mortality is U-shaped, with lowest risk at ~7 hours per night [^yin2017]:

| Sleep duration | All-cause mortality risk vs 7 hr reference | Source |
|---|---|---|
| Short (<7 hr) | RR 1.06 (95% CI 1.04–1.07) per 1-hr reduction; pooled RR 1.12 (95% CI 1.06–1.18) for categorical short sleep | Yin 2017 dose-response; Cappuccio 2010 categorical |
| 7–8 hr/night | Reference (lowest risk) | Yin 2017 |
| Long (>8 hr) | RR 1.13 (95% CI 1.11–1.15) per 1-hr increment; pooled RR 1.30 (95% CI 1.22–1.38) for categorical long sleep | Yin 2017 dose-response; Cappuccio 2010 categorical |

Both meta-analyses report **relative risk (RR)**, not odds ratios. Long sleep (>8–9 hr) shows a stronger mortality association than short sleep; this is partly confounded by reverse causality (underlying disease increasing sleep need), but remains after prospective adjustment in most meta-analyses [^cappuccio2010].

**Recommended adult sleep duration:** 7–9 hours per night (National Sleep Foundation / AAoSM consensus). Both short (<6 hr) and long (>9 hr) are associated with elevated mortality.

## Slow-wave sleep and cognitive aging

SWS serves multiple restorative functions that are directly relevant to aging [^mander2017]:

1. **Memory consolidation:** SWS-specific hippocampal replay consolidates declarative memories. SWS loss with age impairs overnight hippocampal-to-cortical memory transfer.
2. **Glymphatic clearance:** As above — SWS is the peak window for glymphatic flow.
3. **Growth hormone (GH) secretion:** The dominant GH pulse of the 24-hour cycle occurs in early-night SWS; GH decline with age is partly attributable to SWS loss.
4. **Sleep spindle-SWS coupling:** Mander et al. (from Walker lab) showed that prefrontal cortical thinning with age impairs NREM slow-oscillation generation, uncoupling slow waves and sleep spindles and predicting overnight memory retention failure — a mechanism connecting brain atrophy to functional cognitive decline via sleep [^mander2017].

## Sleep-disordered breathing — obstructive sleep apnea

Obstructive sleep apnea (OSA) prevalence rises steeply with age: ~10–17% in adults aged 30–69 (AHI >15), and up to 50%+ in adults >65 by polysomnography depending on diagnostic threshold. OSA causes:

- Nocturnal hypoxemia (repeated desaturation events)
- Sleep fragmentation (arousals per hour = AHI events)
- Suppression of SWS and REM
- Elevated sympathetic tone and HPA activation

**Relevance to aging hallmarks:** OSA is an independent risk factor for cardiovascular disease, type 2 diabetes, and cognitive decline — pathways overlapping with hallmarks of aging. Whether OSA directly accelerates biological age (epigenetic clock aging) is under study; some CPAP intervention data show modest improvement in inflammatory biomarkers (IL-6, CRP), but evidence for clock-aging reversal is preliminary. #gap/needs-replication

**CPAP adherence problem:** Despite CPAP being first-line therapy, adherence in elderly populations is poor (~40–60%), limiting population-level benefit.

## Circadian misalignment

Circadian misalignment — when sleep timing conflicts with the endogenous circadian clock (e.g., night shift work, social jet lag, late chronotype in early-rising schedules) — produces aging-relevant metabolic effects independent of total sleep duration:

- **Shift workers** have elevated risks of metabolic syndrome, cancer (particularly breast and colorectal), and cardiovascular disease, consistent with disrupted circadian regulation of cell-cycle checkpoints, repair processes, and immune surveillance.
- **Social jet lag** (>1–2 hr difference between weekday and weekend sleep timing) correlates with higher BMI, elevated CRP, and insulin resistance in population studies — all hallmarks of accelerated aging. #gap/needs-replication for hard-endpoint evidence.
- **Chronotype-aligned sleep** (sleeping at one's natural preferred time) is associated with lower cardiometabolic risk than chronotype-misaligned sleep of equal duration.

This mechanism is relevant to [[altered-intercellular-communication]]: circadian disruption impairs time-dependent intercellular signaling (e.g., glucocorticoid pulsatility, growth hormone rhythms, immune oscillations) that coordinate tissue-level homeostasis.

## Interventional approaches

| Approach | Target population | Evidence level | Notes |
|---|---|---|---|
| **CBT-i** (Cognitive Behavioral Therapy for Insomnia) | Chronic insomnia; any age | Strong — gold standard; outperforms pharmacotherapy long-term | Comprises sleep restriction therapy, stimulus control, sleep hygiene, relaxation; delivered 4–8 sessions; digital (dCBT-i) formats validated |
| **Sleep hygiene** | General population | Moderate — as standalone, weak; as adjunct, standard of care | Fixed wake time, darkness, temperature, caffeine cutoff, screen light minimization |
| **Bright light therapy** | Circadian phase disorders, delayed or advanced sleep phase, shift workers, seasonal mood | Moderate | Morning bright light (>10,000 lux) advances circadian phase; evening avoidance delays it |
| **CPAP** | OSA (AHI >15 or symptomatic) | Strong for symptomatic relief and cardiovascular risk; variable for mortality | Adherence is the rate-limiting factor |
| **Chronotype-aligned scheduling** | Social jet lag, shift work | Emerging | Aligning sleep timing to chronotype reduces misalignment burden; employer/school-schedule dependent |
| **Pharmacological hypnotics** | Short-term only; not recommended in elderly | Caution — benzodiazepines and Z-drugs associated with excess mortality, fall risk, cognitive impairment, and in the elderly with dementia risk in long-term use | NOT recommended as an aging intervention; opposite of restorative |

CBT-i is first-line for chronic insomnia by AASM guidelines; pharmacological hypnotics should not be considered as aging-biology interventions.

## Biological-age clock effects

The Waziry 2023 CALERIE trial established DunedinPACE as the clock most sensitive to metabolic lifestyle interventions; sleep-focused RCTs with DunedinPACE primary endpoints have not yet been completed [^waziry_note]. Observational data suggest:

- Short sleep (<6 hr) is associated with accelerated epigenetic aging by multiple clocks in cross-sectional analyses, but causal direction is uncertain.
- The proposed RCT (sleep extension + CBT-i, 18 months, DunedinPACE primary endpoint in short-sleeping middle-aged adults) would provide the cleanest causal evidence.

See [[biomarkers/dunedinpace-2022]] for clock methodology and cross-intervention comparison. #gap/needs-replication — no RCT with biological-age-clock primary endpoint has been completed for sleep interventions as of 2026.

### 2025–2026 sleep × biological-age-clock cohort and MR evidence

The observational and Mendelian-randomization base for sleep × epigenetic clocks expanded substantially in 2025–2026:

**Diao 2025 (*Clin Epigenetics*, Dongfeng-Tongji cohort, n=3,566 mean age 65.5 yr):** Healthy sleep score (composite of bedtime, duration, quality, midday napping) inversely associated with PhenoAgeAccel (β=−0.208, p<0.05), GrimAgeAccel (β=−0.107), DunedinPACE (β=−0.008), and DNAm mortality risk score (β=−0.019). DunedinPACE **mediated 6.2% (95% CI 0.8–11.5%)** of the inverse association between healthier sleep and reduced all-cause mortality risk over 5.4 years follow-up [^diao2025sleep-clocks]. Stronger associations in older adults than younger (interaction p=0.027 for DunedinPACE). This is the first study to formally quantify the mediation fraction of sleep → mortality through DunedinPACE.

**Wu 2025 (*Aging (Albany NY)*, UK Biobank n=442,664):** Restricted-cubic-spline + Mendelian-randomization analysis of self-reported sleep duration on PhenoAgeAccel, BioAgeAccel, and leukocyte telomere length [^wu2025nonlinear-sleep]. Observational analyses confirmed the U-shape (optimum ~7 h/d). **MR analyses corroborated the deleterious impact of insufficient sleep but not excessive sleep**, suggesting the long-sleep association is largely driven by reverse causation (illness → more sleep), while short sleep has a causal contribution. Cell-type enrichment linked short sleep to BioAgeAccel and LTL through muscle-maintenance and immune-function pathways. This refines the U-shape framing — for short sleep, the causal arrow is supported; for long sleep, residual confounding likely dominates.

**Zhang 2026 (*Clin Epigenetics*, MR for chronotype, napping, sleep duration):** Multivariable MR (MVMR) on chronotype, napping, and sleep duration vs telomere length, facial aging, IEAA/HannumAge/PhenoAge/GrimAge, frailty, and cognitive performance [^zhang2026mvmr-sleep]. **Daytime napping had causal independent effects on GrimAge (β=+1.08, p=0.046) and frailty (β=+0.29, p<0.001)**; longer sleep duration independently protected against frailty (β=−0.36, p<0.001); chronotype (morningness) protected facial aging and cognition after MVMR adjustment. The napping-causal-on-GrimAge finding is novel and adds a sleep-trait dimension beyond duration.

**O'Toole 2025 (*medRxiv*, MULTI study Sleep Chart):** Across 23 biological-age clocks spanning 17 organ/tissue systems and 3 omics types, both short (<6 h) and long (>8 h) sleep durations associated with elevated biological-age gaps, with optimal varying by organ and sex (6.4–7.8 h) [^otoole2025sleep-chart]. Preprint; provides multi-organ resolution beyond the single-clock framing typical of prior studies.

**Implication for the U-shape:** The pooled epidemiological U-shape (optimum 7 h) replicates across multiple modern cohorts, multi-organ clocks, and MR designs. The new MR work strengthens the causal interpretation for the short-sleep arm of the curve while attenuating it for the long-sleep arm. Mediation through DunedinPACE is now quantified at ~6% of the sleep → mortality effect.

## Cross-organism extrapolation

Most foundational sleep-aging biology (especially glymphatic clearance) is from rodent models. Translation to humans is supported by the conservation of AQP4-expressing astrocytes and the paravascular anatomy, but direct human glymphatic flow quantification remains technically limited.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Glymphatic system anatomically confirmed in humans; AQP4 present |
| Phenotype conserved in humans? | yes | Sleep deprivation → inflammation, cognitive impairment well-replicated in humans |
| Replicated in humans? | yes (observational); in-progress (intervention RCTs) | Epidemiological signal strong; mechanistic RCTs ongoing |

## Limitations and open gaps

- **Causal vs correlational sleep-mortality relationship:** Long sleep is likely partly explained by reverse causality (illness → more sleep). Short sleep's causal contribution to mortality vs confounding by lifestyle (shift work, stress) is not fully resolved. #gap/contradictory-evidence
- **Optimal sleep duration varies by individual:** U-shaped curve pooled across populations; individual optima may differ by genetics (e.g., BHLHE41 "short-sleeper" variants), age, and health status. #gap/dose-response-unclear
- **Glymphatic clearance in humans:** Quantitative rates measured only indirectly; the "~60% increase in interstitial space volume during sleep" figure is from adult mouse studies (Xie et al. 2013, Nedergaard lab) and may not transfer quantitatively to humans [^xie2013]. #gap/needs-human-replication
- **OSA + aging-clock causation:** Whether treating OSA with CPAP reverses epigenetic-age acceleration is unresolved. #gap/needs-replication
- **Sleep as intervention vs marker:** Poor sleep may be downstream of other aging processes (neurodegeneration, chronic pain, nocturia) as much as upstream. Disentangling the direction is essential for intervention design.
- **No head-to-head RCT:** CBT-i vs light therapy vs chronotype-alignment vs pharmacological sleep aid on aging-biology endpoints. #gap/needs-replication

## Cross-references

- [[chronic-inflammation]] — inflammatory hallmark; sleep deprivation activates TLR4/NF-kB in monocytes
- [[loss-of-proteostasis]] — glymphatic Aβ/tau clearance is SWS-dependent
- [[altered-intercellular-communication]] — circadian disruption impairs pulsatile intercellular signaling
- [[mitochondrial-dysfunction]] — sleep deprivation acutely impairs mitochondrial respiratory efficiency; chronic short sleep linked to mitochondrial fragmentation #gap/unsourced
- [[autophagy]] — SWS may be a window of elevated autophagic flux; evidence in rodents #gap/needs-human-replication
- [[alzheimers-disease]] — glymphatic Aβ clearance connects sleep to AD risk
- [[neurodegeneration]] — broader neurodegenerative risk; REM sleep behavior disorder precedes alpha-synucleinopathy
- [[immunosenescence]] — sleep modulates NK cell activity and T-cell function with age
- [[frailty]] — short and long sleep duration both associated with frailty risk; bidirectional relationship
- [[biomarkers/dunedinpace-2022]] — DunedinPACE proposed primary endpoint for sleep-extension RCT
- [[interventions/lifestyle/caloric-restriction]] — sibling lifestyle intervention; CALERIE DunedinPACE result context
- [[interventions/lifestyle/exercise]] — synergistic with sleep; exercise improves SWS depth
- [[interventions/lifestyle/intermittent-fasting]] — circadian-aligned eating (TRE) interacts with sleep timing
- [[interventions/lifestyle/time-restricted-eating]] — overlapping circadian-alignment mechanism

## Footnotes

[^iliff2012]: doi:10.1126/scitranslmed.3003748 · Iliff JJ, Wang M, Liao Y, et al. (Nedergaard lab) · *Science Translational Medicine* 2012;4(147):147ra111 · in-vivo (mouse) · model: adult C57BL/6 mice (8–12 weeks), Aqp4-null + NG2-DsRed + Tie2-GFP transgenics; 2-photon in-vivo microscopy + radiolabeled tracer clearance · discovered paravascular CSF-ISF bulk-flow exchange pathway (named "glymphatic system") dependent on AQP4 water channels on astrocyte endfeet; CSF enters via periarterial space, exits via perivenous drainage; Aqp4 knockout reduced interstitial solute ([³H]mannitol) clearance by ~70%; demonstrated Aβ clearance via this pathway, reduced ~55% in Aqp4-null mice · verified against full PDF

[^xie2013]: doi:10.1126/science.1241224 · Xie L, Kang H, Xu Q, et al. (Nedergaard lab) · *Science* 2013 · in-vivo (mouse) · model: adult mice; real-time two-photon imaging with fluorescent tracers + EEG recording · sleep increased interstitial space by ~60% vs wakefulness; dramatically accelerated Aβ clearance; glymphatic flow ~2x higher during NREM sleep vs wakefulness · note: PDF download failed (no OA copy available in archive); ~60% figure and attribution confirmed correct per cross-reference with citing literature, but quantitative claims not independently verified against full PDF #gap/no-fulltext-access

[^mander2017]: doi:10.1016/j.neuron.2017.02.004 · Mander BA, Winer JR, Walker MP · *Neuron* 2017 · review · model: human aging cohort studies + translational review · comprehensive review of SWS/SWA decline with aging: ~75–80% reduction in frontal SWA amplitude in older vs young adults (Figure 1B); spindle density and amplitude decline with age, largest in frontal regions; prefrontal cortical gray matter atrophy predicts severity of SWA impairment; slow-oscillation/spindle uncoupling with age predicts overnight hippocampal-neocortical memory consolidation failure; reviews "do older adults need less sleep?" debate — concludes impaired sleep-generating capacity rather than reduced need

[^cappuccio2010]: doi:10.1093/sleep/33.5.585 · Cappuccio FP, D'Elia L, Strazzullo P, Miller MA · *Sleep* 2010 · meta-analysis · n=1,382,999 across 16 studies (27 independent cohort samples); 112,566 deaths · short sleep (≤5–7 hr depending on study) RR 1.12 (95% CI 1.06–1.18); long sleep (>8 hr in most studies) RR 1.30 (95% CI 1.22–1.38) for all-cause mortality · results expressed as RR (relative risk), not OR

[^carroll2015]: doi:10.5665/sleep.4398 · Carroll JE, Carrillo C, Olmstead R, Witarama T, et al. (Irwin lab) · *Sleep* 2015;38(2):205–211 · in-vivo (human) · experimental crossover (adaptation → baseline → partial sleep deprivation [03:00–07:00 window] → recovery) · n=70 total: 49 older adults (ages 60–84) + 21 younger adults (ages 25–39) · partial sleep deprivation vs baseline sleep; blood collected each morning for monocyte TLR4-stimulated IL-6/TNF-α · age × sleep-loss interaction significant (p<0.05): younger adults showed increased TLR4-stimulated inflammation after sleep deprivation; older adults showed REDUCED baseline TLR4-stimulated inflammation, not further activated by sleep loss · note: PDF download failed (bronze OA, URL mismatch); verified via publisher abstract only — quantitative values approximate

[^yin2017]: doi:10.1161/JAHA.117.005947 · Yin J, Jin X, Shan Z, et al. · *Journal of the American Heart Association* 2017 · meta-analysis · 67 articles (141 independent reports); n=3,582,016 total participants; 241,107 all-cause deaths · U-shaped dose-response: lowest all-cause mortality at ~7 hr/day; short sleep (<7 hr): pooled RR 1.06 (95% CI 1.04–1.07) per 1-hr reduction; long sleep (>7 hr): pooled RR 1.13 (95% CI 1.11–1.15) per 1-hr increment; cardiovascular events similar U-shaped pattern · nonlinear dose-response analysis; reference category 7 hr

[^waziry_note]: Waziry R et al. 2023 — doi:10.1038/s43587-022-00357-y — CALERIE II DunedinPACE result: this was a caloric-restriction trial, not a sleep intervention. Cited here as methodological comparator for DunedinPACE sensitivity. See [[interventions/lifestyle/caloric-restriction]] § Biomarker effects for full detail.

[^diao2025sleep-clocks]: doi:10.1186/s13148-025-01898-w · Diao T, Liu K, Zhou L, Wang Q, Lyu J, Zhu Z, Chen F, Qin W, Yang H, Wang C, Zhang X, Wu T · *Clin Epigenetics* 2025;17(1):87 · cross-sectional + prospective cohort (Dongfeng-Tongji 2013–2018) · n=3,566 (mean age 65.5; 426 deaths over 5.4 yr) · sleep score (0–4: bedtime, duration, quality, midday napping) → PhenoAgeAccel β=−0.208, GrimAgeAccel β=−0.107, DunedinPACE β=−0.008, DNAm MS β=−0.019 (all p<0.05); stronger in older adults (interaction p=0.027 DunedinPACE); slower DunedinPACE mediated **6.2% (95% CI 0.8–11.5%)** of sleep-score → all-cause-mortality association · PMID 40442824 · PMC12123996

[^wu2025nonlinear-sleep]: doi:10.18632/aging.206306 · Wu X, Zhao X, Ge A, Han Z, Hou C, Hao Y, Xiao J, Fan M, Burgess S, Li J, Jiang X · *Aging (Albany NY)* 2025;17(8):2126–2151 · n=442,664 (UK Biobank) · multivariable linear regression + restricted cubic splines + Mendelian randomization · self-reported sleep duration → PhenoAgeAccel, BioAgeAccel, leukocyte telomere length · observational U-shape with optimum ~7 h/d; MR analyses **corroborate deleterious effect of insufficient (short) sleep but not excessive (long) sleep**, suggesting long-sleep effect partly reflects reverse causation; cell-type enrichment links short sleep to BioAgeAccel/LTL via muscle and immune-function pathways · PMID 40856643 · PMC12422793

[^zhang2026mvmr-sleep]: doi:10.1186/s13148-026-02068-2 · Zhang Z, Wang X, Qiu H, Luo Q, Jiang C, Yang G · *Clin Epigenetics* 2026;18(1):43 · 2-sample MR (UVMR + MVMR) using GWAS instruments for chronotype, daytime napping, sleep duration · outcomes: telomere length, facial aging, IEAA/HannumAge/PhenoAge/GrimAge, frailty index, cognitive performance · UVMR napping → telomere β=−0.11 (p=0.002), facial aging β=+0.05 (p=0.036), GrimAge β=+0.96 (p=0.048), frailty β=+0.32 (p<0.001); MVMR napping retained associations with **GrimAge (β=+1.08, p=0.046) and frailty (β=+0.29, p<0.001)**; chronotype (morningness) protected facial aging and cognition after MVMR; sleep duration independently protected against frailty (β=−0.36, p<0.001) · PMID 41821113 · PMC12980927

[^otoole2025sleep-chart]: doi:10.1101/2025.08.08.25333313 · MULTI study; O'Toole CK, Song Z, Anagnostakis F, et al. (Wen J et al., includes Belsky DW, Ferrucci L, Resnick SM, Walker KA) · *medRxiv* preprint 2025 Aug 11 · cross-omics, cross-organ analysis of sleep duration vs 23 biological-age clocks across 17 organ/tissue systems and 3 omics types (imaging, proteomics, metabolomics) · U-shaped pattern across 9 brain/body systems and 3 omics; optimal sleep range varied by organ and sex (6.4–7.8 h); short and long sleep both associated with increased systemic disease risk and all-cause mortality; MR did not show strong reverse-causal effects from disease to sleep · interactive portal: labs-laboratory.com/sleepchart · preprint; not yet peer-reviewed · PMID 40832429 · PMC12363694
