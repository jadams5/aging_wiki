---
type: phenotype
aliases: [hot flashes, hot flushes, night sweats, VMS, climacteric vasomotor symptoms]
icd-10: N95.1
icd-11: null
affected-tissues: ["[[hypothalamus]]", "[[skin]]", "[[cardiovascular-system]]"]
underlying-hallmarks: ["[[altered-intercellular-communication]]"]
typical-onset: "Menopausal transition (perimenopause); median onset ~1–2 years before final menstrual period; can begin in late reproductive life"
prevalence-65plus: "Frequency declines substantially by 65+; however ~30–40% of postmenopausal women report persistent symptoms beyond age 60"
literature-checked-through: 2026-06-03
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "Thurston 2021 (CVD HRs, n, events, follow-up): verified against local PDF. Avis 2015 (SWAN duration figures): verified against PubMed abstract (all key figures confirmed). Torres 2026 (DOI, prevalence ~70%): confirmed via PubMed efetch. Lederman 2023 SKYLIGHT 1 (n, issue/pages, effect sizes): verified against PubMed abstract (PMID 36924778). Pinkerton 2024 OASIS 1+2 (n, issue/pages, effect sizes, safety): verified against PMC full text (PMC11342219). Rance 2013 KNDy neuroanatomy: NOT verified from primary text — local full text unavailable; green-OA but unresolvable; #gap/no-fulltext-access retained."
---


# Vasomotor symptoms

Vasomotor symptoms (VMS) — clinically presented as **hot flashes** (sudden sensation of intense heat) and **night sweats** (nocturnal equivalents causing sleep disruption) — are the cardinal symptom of the [[menopause|menopausal transition]], affecting approximately 70% of women experiencing menopause [^torres2026-nk3r]. They are the most common reason women seek menopause-related medical care and are now recognized as a candidate marker of vascular and cerebrovascular health, not merely a nuisance symptom.

The ICD-10 code N95.1 covers menopausal and female climacteric states including flushing; the same code is used on the [[menopause]] page, which is the canonical parent. Note that ICD-11 subdivides this domain differently; a precise ICD-11 equivalent for VMS specifically has not been confirmed here. #gap/unsourced

## Phenomenology

A **hot flash** is a sudden sensation of intense warmth or heat, typically arising in the chest, neck, or face and spreading upward. It is accompanied by:

- Cutaneous vasodilation and visible flushing (reddening of the face and upper body)
- Sweating, sometimes profuse
- Palpitations
- Anxiety or sense of unease
- A chill or shivering phase as the episode resolves

Episodes typically last 1–5 minutes. Frequency ranges from a few per week to more than 20 per day in severely affected women.

**Night sweats** are the nocturnal phenotype — a VMS episode occurring during sleep. They fragment sleep architecture, reducing slow-wave and REM sleep, and contribute to next-day fatigue, mood disturbance, and cognitive complaints. The sleep disruption from night sweats is mechanistically distinct from insomnia disorder but may become entangled with conditioned sleep-onset anxiety over time.

**Severity classification** (used in clinical trials): mild = noticeable but not disruptive; moderate = disruptive to activities; severe = forces the woman to stop activity or severely disrupts sleep.

## Epidemiology and duration

### Prevalence and onset

VMS affects an estimated 70% of women experiencing menopause [^torres2026-nk3r]. The fraction experiencing **moderate-to-severe** symptoms (the threshold for most treatment trials) is roughly 25–30% of peri/postmenopausal women. VMS typically begins in the late perimenopausal period and peaks in early postmenopause.

Prevalence varies substantially by race and ethnicity in the SWAN cohort: Black women reported the highest frequency and severity; Japanese and Chinese women reported the lowest [^avis2015-duration].

### Duration: longer than historically assumed

The SWAN (Study of Women's Health Across the Nation) longitudinal cohort fundamentally revised the prevailing view that VMS resolved within a few years of the final menstrual period (FMP) [^avis2015-duration]:

- **Median total VMS duration: 7.4 years** from the first frequent VMS report to the last
- **Median post-FMP persistence: 4.5 years** among women with an observable FMP
- Women whose VMS began **before or during early perimenopause** had substantially longer duration — median **>11.8 years** total, with post-FMP persistence of 9.4 years
- Women whose VMS began **after the FMP** had shorter duration — median 3.4 years
- **African American women** had the longest median total duration at **10.1 years**

These figures directly contradict the older clinical teaching that hot flashes are a "2–3 year nuisance." The implication is that the majority of affected women require medium- to long-term treatment consideration.

## Mechanism: the KNDy neuron hypothesis

This is the scientific core of the page. The dominant mechanistic hypothesis — now supported by direct neuroimaging, post-mortem neuroanatomy, and the clinical success of NK3R antagonists — centers on **KNDy neurons** in the hypothalamus.

### KNDy neurons and the thermoregulatory circuit

KNDy neurons are a specialized population of hypothalamic neurons co-expressing three neuropeptides:
- **Kisspeptin** (Kiss1 gene product)
- **Neurokinin B** (NKB; encoded by TAC3)
- **Dynorphin**

They reside in the **infundibular/arcuate nucleus** of the hypothalamus — the human anatomical equivalent of the rodent arcuate nucleus. In reproductive-aged women, estradiol provides tonic inhibitory input onto KNDy neurons, suppressing their activity and maintaining normal thermoregulatory set-point.

### Estrogen withdrawal: KNDy neuron hypertrophy and hyperactivity

Post-mortem studies in postmenopausal women demonstrate that estrogen withdrawal causes striking **hypertrophy** of infundibular KNDy neurons — increases in cell body size and dendritic arborization — consistent with disinhibition [^rance2013-kndy]. In reproductive-aged women and in estrogen-replete postmenopausal women on hormone therapy, these neurons are smaller and less active.

With estrogen withdrawal, KNDy neurons become hyperactive and release **excessive pulses of neurokinin B** [^torres2026-nk3r].

### NK3R signaling and the preoptic thermostat

NKB acts on the NK3 receptor (NK3R; encoded by TACR3). A population of NK3R-expressing neurons in the **median preoptic area** (MnPO) of the hypothalamus — the thermoregulatory "thermostat" — receives KNDy neuron input. In the normal state, the thermoregulatory system maintains a thermoneutral zone: small fluctuations in core body temperature are buffered without triggering active heat-loss responses.

During estrogen withdrawal, excess KNDy → NKB → NK3R signaling **narrows the thermoneutral zone** markedly. Small, physiologically normal rises in core body temperature now inappropriately trigger the heat-dissipation cascade: [^rance2013-kndy]

1. Cutaneous vasodilation (the flush) — shunts blood to skin for radiative heat loss
2. Eccrine sweating — evaporative cooling
3. Sympathetic nervous system activation — palpitations, anxiety

The subject experiences this as a sudden wave of heat, sweating, and rapid heartbeat — the hot flash. The episode ends as core temperature drops (sometimes overshoot → chill).

### Role of dynorphin and kisspeptin

Dynorphin (a kappa-opioid receptor agonist) within KNDy neurons provides autocrine feedback — normally limiting NKB pulse amplitude. Kisspeptin regulates GnRH pulse generation in parallel. The estrogen-withdrawal state disrupts this tri-peptide autoregulatory balance, amplifying NKB output [^rance2013-kndy].

### Direct clinical validation: NK3R antagonism

The mechanistic hypothesis is validated most compellingly by the efficacy of NK3R antagonists. If KNDy neuron hyperactivity via NK3R is the proximate cause, blocking NK3R should suppress VMS — and it does. See Treatments section below.

### Extrapolation table

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Yes — KNDy neurons and thermoregulatory hypothalamic circuits are conserved; human post-mortem neuroanatomy confirms KNDy hypertrophy [^rance2013-kndy] |
| Phenotype conserved in model organisms? | Partial — rodents show similar thermoregulatory shifts after OVX; true spontaneous menopause does not occur in mice; knock-in TAC3/TACR3 models confirm functional conservation |
| Replicated in humans? | Yes — NK3R antagonist efficacy in Phase 3 RCTs constitutes direct mechanism-verification in humans |

## Aging significance beyond quality of life

VMS is increasingly recognized not merely as a symptomatic nuisance but as a **candidate biomarker of vascular and cerebrovascular aging** in midlife women. This framing carries important caveats about causality.

### Cardiovascular associations

The SWAN cohort provides the strongest prospective evidence linking VMS to cardiovascular disease (CVD) risk [^thurston2021-cvd]:

- Women with **frequent baseline VMS** (≥6 days in 2 weeks) had a hazard ratio of **1.51 (95% CI 1.05–2.17, p=0.026)** for incident CVD events (myocardial infarction, stroke, heart failure, revascularization, CVD death) over up to 22 years (median 19 years; n=3,083; 231 total CVD events: 204 nonfatal + 27 fatal)
- Women with **persistent frequent VMS** (across >33% of follow-up visits) had HR **1.77 (95% CI 1.33–2.35, p<0.0001)** — a substantially larger effect
- Women with moderate VMS (1–5 days per 2 weeks) showed no significant CVD association (HR 1.02)

The SWAN and MsHeart/MsBrain studies also link VMS to adverse vascular and cerebrovascular health markers — subclinical arterial stiffness, endothelial dysfunction, and worse cerebrovascular imaging — independent of traditional CVD risk factors [^thurston2024-cvd-review].

**Important caveats on causality:** The VMS-CVD association is observational. Possible interpretations include:
1. VMS are a marker of underlying vascular vulnerability (shared upstream cause: estrogen withdrawal, inflammatory milieu, or individual susceptibility)
2. Frequent VMS directly stress the cardiovascular system (repetitive sympathetic surges, sleep fragmentation → HPA-axis activation)
3. Women with poor baseline vascular health experience more severe VMS (reverse causation or bidirectionality)

The gradient effect (frequent > moderate → CVD, with no signal for moderate) is more consistent with VMS as a direct marker of vascular risk than pure reverse causation, but does not establish mechanism. #gap/no-mechanism

### Sleep disruption

Night sweats are a mechanistically straightforward pathway from VMS to systemic harm: sleep fragmentation activates the HPA axis, promotes insulin resistance, impairs immune function, and accelerates several hallmarks of aging — see [[chronic-inflammation]] and [[mitochondrial-dysfunction]]. The sleep-VMS link is well-established; the downstream aging-acceleration magnitude has not been formally quantified.

### Cognitive and dementia associations

Observational data link frequent/persistent VMS to worse objective cognitive performance in some cross-sectional studies, consistent with the broader [[menopause]] → [[alzheimers-disease]] risk narrative and the perimenopausal window hypothesis. However:

- Causal evidence for VMS specifically (distinct from estrogen withdrawal per se) is thin
- Whether effective VMS treatment improves cognitive trajectories is not established
- Meta-analyses and large prospective studies have produced heterogeneous results #gap/needs-replication

This remains an active area; the [[alzheimers-disease]] page has the full picture.

## Treatments

Treatments are ranked roughly by efficacy and evidence quality for VMS specifically.

### Menopausal hormone therapy (MHT / HRT)

**Most effective intervention.** [[estradiol]] (systemic transdermal or oral) with or without progestogen (for women with a uterus) is the gold-standard treatment for moderate-to-severe VMS. Efficacy: typically 70–90% reduction in hot flash frequency. See [[hormone-replacement-therapy]] for the full treatment picture, including the timing hypothesis for cardiovascular risk and breast cancer considerations.

Contraindications include personal history of hormone-sensitive cancers and some cardiovascular conditions.

### NK3R antagonists — mechanistically directed, non-hormonal

The most significant pharmacological advance in VMS management in decades. These agents directly target the KNDy → NK3R pathway:

#### Fezolinetant (Veozah) — FDA-approved May 2023

Fezolinetant is a selective NK3R antagonist (oral, once-daily). The first non-hormonal mechanism-directed therapy for VMS to receive FDA approval.

**SKYLIGHT 1 Phase 3 trial** (Lancet, 2023; n=527 randomized): [^lederman2023-skylight1]
- At Week 12, fezolinetant 45 mg reduced hot flash frequency by **−2.55 hot flashes/day** vs placebo (p<0.001)
- At Week 4, difference was **−2.07 hot flashes/day** vs placebo (p<0.001)
- VMS severity also improved significantly at both timepoints
- Adverse events were numerically similar to or lower than placebo in the initial 12 weeks

Dosing: 45 mg once daily (FDA-approved dose; 30 mg also studied).

**Liver safety signal:** Fezolinetant labeling includes a warning for hepatotoxicity; transaminase elevations were observed in trials (generally reversible). Liver function monitoring recommended.

#### Elinzanetant — Phase 3; not yet FDA-approved as of June 2026

Elinzanetant is a **dual NK-1/NK-3 receptor antagonist** (oral). The additional NK-1 antagonism may contribute to sleep and mood benefits beyond pure VMS suppression.

**OASIS 1 and 2 Phase 3 trials** (JAMA, 2024; OASIS 1: n=396, OASIS 2: n=400): [^pinkerton2024-oasis]
- VMS frequency reduction at Week 12 vs placebo: OASIS 1 −3.2/day (95% CI −4.8 to −1.6, p<0.001); OASIS 2 −3.2/day (95% CI −4.6 to −1.9, p<0.001)
- VMS severity reduction significant in both trials at both Weeks 4 and 12
- Safety profile described as favorable; most common adverse events were headache and fatigue; no incidences of liver toxicity observed in the 12-week placebo-controlled period [^pinkerton2024-oasis]
- **Liver safety:** hepatotoxicity warnings are a class concern for NK3R antagonists (established for fezolinetant); elinzanetant's OASIS trials reported no liver toxicity, but post-marketing surveillance will be needed to confirm long-term hepatic safety #gap/long-term-unknown

**Comparative efficacy (2026 network meta-analysis):** Elinzanetant demonstrated superior efficacy vs paroxetine (MD −2.11 hot flashes/day), desvenlafaxine, and gabapentin for VMS frequency; elinzanetant also showed significantly greater reduction in nighttime awakenings vs paroxetine and desvenlafaxine, and improved sleep quality vs fezolinetant [^wojciechowski2026-nma]. #gap/needs-replication — indirect comparison; no head-to-head RCT published yet.

### SSRIs and SNRIs

Non-hormonal second-line options. Not FDA-approved for VMS *per se* except paroxetine (Brisdelle) 7.5 mg — the sole FDA-approved non-hormonal VMS treatment before fezolinetant.

- **[[paroxetine]]** (Brisdelle 7.5 mg): reduces hot flash frequency ~50–60% in RCTs. Note: conventional paroxetine doses (20–40 mg) inhibit CYP2D6 and may reduce tamoxifen efficacy — critical consideration in breast cancer survivors. The Brisdelle 7.5 mg dose has a less pronounced CYP2D6 effect.
- **Venlafaxine (SNRI):** similarly effective, 75 mg dose most studied; fewer drug interactions than paroxetine
- **Escitalopram:** modest evidence; better tolerated than paroxetine in some patients
- **Desvenlafaxine:** active SNRI metabolite; comparable efficacy to venlafaxine

These agents reduce VMS frequency by ~40–60% on average, well below the ~75–90% with systemic MHT [^wojciechowski2026-nma].

### Gabapentin and pregabalin

Gabapentin 300–900 mg/day reduces hot flash frequency and severity, likely via central thermosensory modulation. Effect size modest; side effects (sedation, dizziness) limit use at effective doses. Sometimes used for its dual benefit in women with concurrent sleep disruption.

### Oxybutynin

Anticholinergic primarily used for overactive bladder. A small number of RCTs suggest benefit for VMS (likely via peripheral and central mechanisms reducing sweating and vasodilation). Generally second- or third-line; cognitive anticholinergic burden is a concern in older women. #gap/needs-replication — limited trial data

### Lifestyle modifications

Evidence is modest and mechanistic basis less clear:
- Weight loss in overweight/obese women may reduce VMS frequency — adipose tissue generates heat, may amplify thermoregulatory instability
- Reducing triggers (alcohol, spicy food, caffeine, hot environments) — anecdotal; no robust RCT evidence
- Mind-body interventions (CBT, clinical hypnosis, mindfulness-based): evidence that CBT reduces VMS bother/impact ratings; effects on objective VMS frequency are smaller and less consistent #gap/needs-replication

## Hallmark mapping

VMS results from a disruption in intercellular endocrine signaling (estrogen → hypothalamic KNDy neuron inhibition) and propagates systemic effects via neuroendocrine and vascular pathways.

| Hallmark | Role in VMS |
|---|---|
| [[altered-intercellular-communication]] | Primary driver: loss of estradiol's inhibitory signal to hypothalamic KNDy neurons; downstream endocrine cascade disrupts thermoregulation and cardiovascular homeostasis |
| [[chronic-inflammation]] | Night-sweat-induced sleep disruption activates the HPA axis and inflammatory signaling; bidirectional: inflammatory aging may worsen VMS severity |
| [[cellular-senescence]] | Indirect: senescent ovarian cells may accelerate follicle depletion; the SASP may modulate hypothalamic sensitivity #gap/no-mechanism |

VMS does not map cleanly to the other hallmarks as a primary driver; it is a downstream phenotype of the [[altered-intercellular-communication]] hallmark instantiated in the estrogen-withdrawal context.

## Limitations and gaps

- **KNDy neuroanatomy not fully verified from primary text** — the menopause page contains a #gap/no-fulltext-access note on the Rance 2013 paper; specific anatomical region terminology (median preoptic area vs. medial preoptic area vs. nearby nuclei) should be verified against the primary text before this page is relied upon for precise neuroanatomical claims. #gap/no-fulltext-access
- **Causal status of VMS → CVD** — the SWAN cohort evidence is observational and prospective but cannot exclude residual confounding (shared upstream causes). No RCT powered on VMS suppression and downstream CVD events has been conducted. Whether treating VMS with NK3R antagonists reduces cardiovascular risk is entirely unknown. #gap/no-mechanism
- **Cognitive risk is underpowered** — existing studies of VMS and cognitive decline are heterogeneous in design, definition of VMS, and cognitive outcomes; no large prospective RCT with cognitive primary endpoints exists. #gap/needs-replication
- **NK3R antagonists and liver safety** — fezolinetant carries a hepatotoxicity warning; elinzanetant's OASIS trials reported no liver toxicity but the long-term hepatic safety profile requires post-marketing surveillance. Long-term real-world data are limited for both agents. #gap/long-term-unknown
- **No head-to-head RCT fezolinetant vs elinzanetant** — comparative efficacy relies on network meta-analyses (indirect evidence). #gap/contradictory-evidence
- **Men and VMS** — vasomotor symptoms occur in men undergoing androgen deprivation therapy (prostate cancer treatment); the KNDy mechanism is plausible but less studied. Not addressed here.
- **ICD-11 code** — a confirmed ICD-11 equivalent for vasomotor symptoms specifically (as distinct from the broader N95.1 domain in ICD-10) has not been verified. #gap/unsourced

## Cross-references

- [[menopause]] — parent phenotype and upstream driver
- [[estradiol]] — the hormone whose withdrawal triggers VMS
- [[hormone-replacement-therapy]] — first-line treatment
- [[paroxetine]] — non-hormonal option; CYP2D6 interaction note critical
- [[cardiovascular-aging]] — downstream CVD risk context
- [[altered-intercellular-communication]] — primary hallmark mapping
- [[chronic-inflammation]] — sleep-disruption pathway
- [[alzheimers-disease]] — cognitive risk context
- [[hallmarks-of-aging]]

## Footnotes

[^rance2013-kndy]: doi:10.1016/j.yfrne.2013.07.003 · Rance NE, Dacks PA, Mittelman-Smith MA, Romanovsky AA, Krajewski-Hall SJ · *Front Neuroendocrinol* 2013;34(3):211–227 · rat in-vivo + human post-mortem neuroanatomy · proposed KNDy neuron hypothesis for menopausal hot flushes; infundibular KNDy neuron hypertrophy in postmenopausal women; NK3R-mediated thermoregulatory flush; narrowed thermoneutral zone; ablation experiments in rats supporting causal role · Closed-access; not locally available; claims on this page derived from abstract + downstream synthesis in Torres 2026 [^torres2026-nk3r] and Meczekalski 2025 [^meczekalski2025-nk3r]. #gap/no-fulltext-access

[^avis2015-duration]: doi:10.1001/jamainternmed.2014.8063 · Avis NE, Crawford SL, Greendale G et al. (SWAN Study Group) · *JAMA Intern Med* 2015;175(4):531–539 · PMID 25686030 · PMC: PMC4433164 · prospective observational cohort; n=1,449 women with frequent VMS (drawn from 3,302 total SWAN participants; median 13 visits, Feb 1996–Apr 2013) · median total VMS duration 7.4 years; median post-FMP persistence 4.5 years (among 881 women with observable FMP); women premenopausal or early perimenopausal at first frequent VMS: median >11.8 years total, 9.4 years post-FMP; women postmenopausal at VMS onset: median 3.4 years; African American women longest median at 10.1 years; model: human (multi-ethnic US cohort) · archive: download failed; all figures confirmed against PubMed abstract (PMID 25686030)

[^thurston2021-cvd]: doi:10.1161/JAHA.120.017416 · Thurston RC, Aslanidou Vlachos HE, Derby CA et al. · *J Am Heart Assoc* 2021;10(3):e017416 · prospective cohort (SWAN); n=3,083 women; up to 22 years follow-up (median 19 years); up to 16 in-person visits; 231 CVD events total (204 nonfatal + 27 fatal: MI, stroke, HF, revascularization, CVD death) · frequent baseline VMS (≥6 days/2 wk): HR 1.51 (95% CI 1.05–2.17, p=0.026); persistent frequent VMS (>33% of visits): HR 1.77 (95% CI 1.33–2.35, p<0.0001); moderate VMS (1–5 days/2 wk): HR 1.02 (95% CI 0.75–1.39, p=0.89, ns) · model: human observational (prospective) · archive: downloaded; PDF verified

[^thurston2024-cvd-review]: doi:10.1080/13697137.2023.2254678 · Thurston RC · *Climacteric* 2024;27(1):1–7 · review of SWAN and MsHeart/MsBrain findings; VMS associated with adverse CVD risk factor profiles, poorer peripheral vascular and cerebrovascular health, and elevated incident CVD risk; calls for clinical recognition of VMS as potential female-specific CVD marker · model: human (review of cohort data)

[^torres2026-nk3r]: doi:10.1038/s41574-026-01247-8 · PMID 41981275 · Torres E, Wall EG, Navarro VM · *Nat Rev Endocrinol* 2026 (Apr 14, online ahead of print) · comprehensive synthesis of KNDy neuron → NK3R pathway; hyperactivated KNDy neurons in menopause (arcuate nucleus) release excess NKB inappropriately triggering heat-dissipation via NK3R-expressing neurons in median preoptic area; NK3R antagonists as mechanism-directed non-hormonal treatment; ~70% VMS prevalence figure · review (Harvard Medical School / Mass General Brigham); DOI confirmed via PubMed efetch

[^meczekalski2025-nk3r]: doi:10.3390/jcm14051438 · Meczekalski B et al. · *J Clin Med* 2025;14(5):1438 · review of NK3R antagonists for VMS; fezolinetant FDA-approved 2023; elinzanetant dual NK-1/NK-3 antagonist; OASIS trial summary; restores disrupted KNDy autoregulatory balance caused by estrogen deficiency · model: review of human trial data

[^lederman2023-skylight1]: doi:10.1016/S0140-6736(23)00085-5 · Lederman S, Ottery FD, Cano A et al. · *Lancet* 2023;401(10382):1091–1102 · SKYLIGHT 1; Phase 3 RCT; n=527 randomized (placebo n=175, fezolinetant 30 mg n=176, 45 mg n=176; safety set with ≥1 dose: 175/174/173); 12 weeks double-blind + 40-week extension; primary: VMS frequency + severity at weeks 4 and 12 · fezolinetant 45 mg vs placebo: frequency −2.07 (SE 0.42; wk 4, p<0.001), −2.55 (SE 0.43; wk 12, p<0.001); severity −0.19 (SE 0.06; wk 4, p=0.002), −0.20 (SE 0.08; wk 12, p=0.007); treatment-emergent adverse events: fezolinetant 45 mg 43%, placebo 45%; liver enzyme elevations: placebo n=1, 30 mg n=2, 45 mg n=0 (asymptomatic, transient) · archive: not_oa; claims verified against PubMed abstract (PMID 36924778)

[^pinkerton2024-oasis]: doi:10.1001/jama.2024.14618 · Pinkerton JV, Simon JA, Joffe H et al. · *JAMA* 2024;332(16):1343–1354 · OASIS 1 and OASIS 2; Phase 3 RCTs; elinzanetant 120 mg once daily vs placebo; OASIS 1: n=199 elinzanetant + n=197 placebo (total 396); OASIS 2: n=200 elinzanetant + n=200 placebo (total 400); 12 weeks · VMS frequency reduction vs placebo at wk 4: OASIS 1 −3.3 (95% CI −4.5 to −2.1, p<0.001), OASIS 2 −3.0 (95% CI −4.4 to −1.7, p<0.001); at wk 12: OASIS 1 −3.2 (95% CI −4.8 to −1.6, p<0.001), OASIS 2 −3.2 (95% CI −4.6 to −1.9, p<0.001); VMS severity reduction significant all timepoints both trials; safety: no incidences of liver toxicity observed; most common AEs headache and fatigue · PMC: PMC11342219; archive: failed download; claims verified against PMC full text

[^wojciechowski2026-nma]: doi:10.1111/1471-0528.70213 · Wojciechowski P et al. · *BJOG* 2026 · network meta-analysis; elinzanetant vs other non-hormonal treatments for VMS; elinzanetant superior vs paroxetine (MD −2.11 hot flashes/day), desvenlafaxine, gabapentin for VMS frequency; superior for nighttime awakenings vs paroxetine and desvenlafaxine; comparable or superior sleep quality vs fezolinetant · indirect evidence; no direct head-to-head RCT · model: network meta-analysis (7 RCTs, 4,087 patients)
