---
type: intervention
aliases: [physical activity, PA, aerobic exercise, resistance training, strength training, endurance training]
mode: lifestyle
mechanisms:
  - ampk-activation
  - mitochondrial-biogenesis
  - autophagy-induction
  - anti-inflammatory
  - satellite-cell-activation
  - bdnf-myokine-signaling
target-hallmarks:
  - "[[deregulated-nutrient-sensing]]"
  - "[[disabled-macroautophagy]]"
  - "[[mitochondrial-dysfunction]]"
  - "[[stem-cell-exhaustion]]"
  - "[[chronic-inflammation]]"
  - "[[loss-of-proteostasis]]"
target-pathways:
  - "[[ampk]]"
  - "[[mtor]]"
  - "[[pgc-1alpha]]"
  - "[[sirtuin]]"
human-evidence-level: strong
clinical-stage: implemented
safety-profile: well-established
translation-gap: human-evidence-strong
next-experiment: "Large pragmatic 5-yr mortality RCT of structured exercise vs usual care in aging-vulnerable elderly populations (frailty, prediabetes, mild cognitive impairment); n>=10,000."
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "DOI sanity verified against DOI lookup for all 7 cited DOIs (Pahor 2014 jama.2014.5616, Arem 2015 jamainternmed.2015.0533, Fiatarone 1990 jama.1990.03440220053029, Erickson 2011 pnas.1015950108, Robinson 2017 cmet.2017.02.009, He 2012 nature10758, Pedersen 2008 physrev.90110.2007); the user-flagged DOI correction (Fiatarone 1990 → JAMA 1990.03440220053029) is correctly carried through and matches the JAMA paper title 'High-Intensity Strength Training in Nonagenarians'. Cross-page consistency: sarcopenia.md uses the same corrected JAMA DOI in footnote (verified). Wikilinks spot-checked. Quantitative effect sizes (hippocampal volume %, mortality HRs, weight loss percentages) NOT cross-checked against primary PDFs — synthesis-style content lint only. R34 recency refresh (2026-05-08): Stanfield 2026 RAPA-EX-01 (rapamycin + exercise null/negative; n=40), Li 2026 MR (PA causal on telomere length and GrimAge), and Shan 2026 Singapore DaHA cohort integrated via PubMed abstracts. Addendum 2026-06-03 section verification (2026-06-03): Willis 2012 STRRIDE-AT/RT PDF read end-to-end; exact kg deltas inserted into footnote [^willis2012]; directional claims confirmed correct (AT>RT for fat loss; RT fat mass reduction NS p=0.429; aerobic lean mass change NS p=0.613; AT vs AT/RT not significantly different for fat/body mass). Melanson 2009 PDF read end-to-end; directional claim confirmed (exercise in energy balance does not produce negative fat balance; fat balance MORE positive on exercise day, p<0.01); footnote corrected to include full study population (LS/LT/OS) and methodology (whole-room calorimetry, n=27). Schoenfeld 2016 verified via PubMed abstract (full text closed-access): original 'no independent frequency effect' framing corrected, then refined for precision by the main agent against the abstract — the significant frequency effect (ES 0.49 vs 0.30, p=0.002) is a *volume-confounded binary* comparison; the volume-equated per-muscle-group analysis was underpowered ('could not be carried out'), so the authors' twice>once volume-equated conclusion is a qualitative inference, NOT a powered p=0.002 result. Body text + footnote state this explicitly and scope the finding to resistance hypertrophy (not transferable to aerobic frequency). Wilson 2012 verified via PubMed abstract: directional claim (interference scales with endurance frequency + duration; running > cycling) confirmed correct. Swift 2018 verified via PubMed abstract: directional claim (compensatory intake attenuates exercise fat loss) confirmed correct; Swift 2018 is a narrative review (not quantitative meta-analysis). concurrent2025 (doi:10.3389/fspor.2025.1692399) confirmed exists via Europe PMC (semi-systematic review on concurrent training sequence/modality/recovery; directional support confirmed). ACSM 2026 (doi:10.1249/mss.0000000000003897) confirmed exists via Crossref (ACSM Position Stand on resistance training prescription, March 2026). Full PDF not read for: Wilson 2012 (closed-access), Schoenfeld 2016 (closed-access), Swift 2018 (closed-access), concurrent2025 (pending download), ACSM 2026 (not in archive)."
---

# Exercise

Regular physical activity — encompassing both **aerobic exercise** (running, cycling, swimming) and **resistance/strength training** (weightlifting, bodyweight training) — is the intervention with the **strongest human evidence for healthspan extension** in aging biology. Unlike most pharmacological candidates, exercise has large-scale RCT data in older adults demonstrating reduced disability and preserved function, alongside mechanistic data linking it to at least five major hallmark pathways. The human mortality reduction signal is among the largest documented for any modifiable lifestyle factor.

This page covers exercise as a unified intervention category. Sub-modalities (aerobic vs resistance training) are differentiated where evidence differs; specific exercise mimetics (AICAR, GW501516, MOTS-c) belong on their respective compound pages when seeded.

## Mechanism of geroprotection

Exercise engages multiple hallmark-relevant pathways in parallel. The key mechanisms by modality:

| Mechanism | Predominant Modality | Pathway Cross-link | Hallmark |
|---|---|---|---|
| AMPK activation (energy-sensing) | Both | [[ampk]] | [[deregulated-nutrient-sensing]] |
| mTORC1 modulation (anabolic/catabolic balance) | Both (biphasic) | [[mtor]] | [[deregulated-nutrient-sensing]] |
| Mitochondrial biogenesis via PGC-1alpha | Aerobic > Resistance | [[pgc-1alpha]] | [[mitochondrial-dysfunction]] |
| Autophagy induction | Aerobic > Resistance | [[autophagy]] | [[disabled-macroautophagy]], [[loss-of-proteostasis]] |
| Anti-inflammatory (IL-6 paradox) | Both | — | [[chronic-inflammation]] |
| Satellite cell activation | Resistance > Aerobic | — | [[stem-cell-exhaustion]] |
| BDNF / myokine signaling | Aerobic > Resistance | — | neurodegeneration |

### AMPK and mTOR — the energetic switch

Acute exercise depletes intramuscular ATP, raising the AMP:ATP ratio and activating [[ampk]]. AMPK in turn phosphorylates and inhibits mTORC1 (via TSC2 and Raptor phosphorylation) and phosphorylates ULK1 to initiate autophagosome formation [^egan2011]. This creates a transient anti-anabolic, pro-catabolic, pro-autophagic state during exercise. In the post-exercise recovery window, insulin-stimulated and leucine-stimulated mTORC1 reactivation drives the anabolic response (protein synthesis, hypertrophy) — particularly relevant for resistance training. The net result is **improved proteostasis**: damaged proteins cleared during exercise, new protein synthesized in recovery.

### PGC-1alpha and mitochondrial biogenesis

AMPK and p38-MAPK (both activated by exercise) phosphorylate and activate [[pgc-1alpha]], the master regulator of mitochondrial biogenesis. PGC-1alpha drives transcription of nuclear-encoded mitochondrial genes via ERRalpha and NRF1/2, increasing mitochondrial density and oxidative capacity in skeletal muscle. This is one of the most consistent molecular adaptations to chronic aerobic training. Robinson et al. 2017 used tandem mass tag proteomics to show that 12 weeks of HIIT **reversed the majority of age-related mitochondrial protein differences** in older adults (65–80 yr) relative to younger controls [^robinson2017]. This is the strongest direct evidence that exercise can restore mitochondrial proteome composition in human aged muscle.

### Autophagy induction

Exercise acutely induces autophagy in skeletal muscle, liver, and brain, primarily via AMPK-mediated ULK1 phosphorylation and mTORC1 suppression. Autophagy is required for the adaptive response to endurance training in animal models (He et al. 2012 showed BCL2 phosphomutant mice unable to induce exercise-autophagy lost the metabolic benefits of training) [^he2012] #gap/needs-human-replication.

### The IL-6 paradox — anti-inflammatory myokine signaling

During exercise, contracting muscle secretes interleukin-6 (IL-6) in large quantities (up to 100-fold above resting levels). This appears paradoxical given IL-6's role as a pro-inflammatory cytokine in the [[chronic-inflammation]] (inflammaging) context. The resolution: exercise-derived IL-6 acts as a **myokine** — a muscle-derived hormone-like peptide — that suppresses TNF-alpha production, induces IL-10 and IL-1ra (anti-inflammatory cytokines), and improves insulin sensitivity. Chronic exercise training reduces resting levels of TNF-alpha, CRP, and other inflammaging markers. The acute IL-6 spike is mechanistically distinct from the chronic low-grade IL-6 elevation of inflammaging [^pedersen2008] #gap/needs-replication (mechanistic distinction supported but single key review; primary RCT data on CRP/TNF-alpha reductions are not cited individually here).

### Satellite cell activation and muscle stem cell renewal

Resistance exercise activates [[satellite-cells]] (muscle stem cells), which proliferate and fuse into existing myofibers to repair exercise-induced micro-damage and add sarcomeric units. This is the cellular basis of resistance training hypertrophy. In aging, satellite cell activation capacity declines (a [[stem-cell-exhaustion]] manifestation), reducing repair capacity and contributing to [[sarcopenia]]. Resistance training partially reverses this — see [[sarcopenia]] for the Fiatarone-line evidence.

## Human evidence

### Mobility and disability — LIFE Trial (Pahor 2014)

The **Lifestyle Interventions and Independence for Elders (LIFE)** trial is the largest RCT of structured exercise in older adults, and the only trial powered to detect a disability endpoint [^pahor2014]. Key parameters:

- **n = 1,635** sedentary adults aged 70–89 yr with Short Physical Performance Battery (SPPB) score 9 or below
- Randomized to structured physical activity (PA) program vs health education control for a median 2.6 years
- PA arm: 150 min/week moderate-intensity walking + balance/flexibility/strength components
- **Primary endpoint: major mobility disability (MMD)** — inability to walk 400 m

**Results:** PA arm had HR 0.82 (95% CI 0.69–0.98, p=0.03) for MMD — an ~18% relative risk reduction. The absolute reduction was ~2.7% over the trial period. Serious adverse events were not significantly elevated in the PA arm.

**Limitations:** The effect size is modest in absolute terms; the study enrolled already-sedentary, functionally impaired older adults (SPPB ≤ 9), so generalizability to healthier populations is uncertain in both directions (healthier populations may benefit more or less).

### All-cause mortality — Arem 2015 meta-analysis

Arem et al. 2015 pooled six prospective US cohort studies (total n > 650,000) to characterize the dose-response relationship between leisure-time physical activity (LTPA) and all-cause mortality [^arem2015].

Key findings:
- Relative to the **inactive reference** (< 7.5 MET-hr/wk), those meeting guidelines (7.5–15 MET-hr/wk, i.e., ~150 min/week moderate activity) had **~31% lower all-cause mortality** (HR ~0.69)
- Higher activity (3–5x guidelines, 22.5–37.5 MET-hr/wk) gave ~39% lower mortality — the dose-response curve is steep initially and flattens beyond ~3–5x guideline levels
- Very high activity (>10x guidelines) showed no increased mortality risk — the "J-curve" concern for extreme exercise was not supported in this analysis

**Design notes:** Observational cohort; pooled; residual confounding by health status at baseline (healthy individuals exercise more). The ~31% mortality reduction figure is widely cited but must be interpreted as an association, not an RCT-confirmed effect on lifespan.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (AMPK, mTOR, PGC-1alpha, autophagy all human data) |
| Phenotype conserved in humans? | yes (disability, mortality, muscle mass — all human RCT/cohort) |
| Replicated in humans? | yes (multiple cohort studies; LIFE trial; Robinson 2017) |

### Sarcopenia rescue — Fiatarone 1990 and resistance training evidence

Fiatarone et al. 1990 demonstrated that **high-intensity progressive resistance training** (80% of one-repetition maximum) improved muscle strength (mean +174%) and functional mobility in frail **nonagenarians** (mean age 90 yr) in a 2-month controlled trial [^fiatarone1990]. This early trial established that the aged neuromuscular system retains meaningful trainability even at extreme old age.

Subsequent larger evidence syntheses show that resistance training + adequate protein intake is the most effective intervention for reversing age-related muscle loss. See [[sarcopenia]] for full evidence review (referenced as "verified-partial" from prior extraction).

**Important correction:** The user-supplied DOI for Fiatarone 1990 was `10.1056/NEJM199006143222402`, which resolves to a different paper. The correct DOI is `10.1001/jama.1990.03440220053029` (JAMA, not NEJM). Footnote uses the corrected DOI. The paper is closed-access (not_oa); local PDF not available.

### Cognitive benefit — Erickson 2011

Erickson et al. 2011 randomized 120 sedentary older adults (aerobic 67.6 yr, stretching 65.5 yr) to aerobic walking (3×/wk, 40 min, 60–75% HRR after wk 7) vs stretching control for 1 year [^erickson2011]. The aerobic exercise group showed **~2% increase in hippocampal volume** (anterior hippocampus; right: +2.12%, left: +1.97% vs stretching-control decline of ~1.40%) by MRI. **Spatial memory improved in BOTH groups equally** — the Time×Group interaction was *not* significant (p=0.40); within the aerobic group, hippocampal volume gain correlated with memory improvement (r=0.23–0.29). **Serum BDNF Time×Group interaction was also non-significant (p=0.23)** — the BDNF↔volume correlation (r=0.36–0.37, p<0.01) existed only as a within-aerobic-group association, not as a confirmed group-level mediator. The page-level claim of BDNF-mediated group-level neuroplasticity is therefore not directly supported by the trial. #gap/needs-replication — hippocampal volume finding has been replicated in direction but not always magnitude; the functional translation to clinical dementia prevention endpoints is unresolved.

### Mitochondrial rejuvenation in aged human muscle — Robinson 2017

Robinson et al. 2017 compared the proteomic and transcriptomic adaptations to 12 weeks of HIIT, resistance training, or combined training in young (18–30 yr) and older (65–80 yr) adults [^robinson2017]. Using tandem mass tag proteomics of skeletal muscle biopsies:
- HIIT reversed the majority of age-related differences in the **mitochondrial proteome**, including proteins of oxidative phosphorylation and ribosomal biogenesis
- Older adults showed **greater transcriptomic response** to HIIT than young adults, suggesting the aged muscle is more transcriptionally plastic than previously assumed
- Resistance training drove similar hypertrophy across age groups but did not reverse mitochondrial deficits as completely as HIIT

This is the landmark dataset demonstrating that exercise — particularly HIIT — can molecularly rejuvenate aged human skeletal muscle mitochondria. Note: Konopka 2010 (cited in the input brief) was not confirmed in the archive with a clear matching DOI; Robinson/Konopka 2017 is used as the mitochondrial biogenesis citation instead.

## Exercise modalities and aging

| Modality | Primary aging-relevant benefit | Key evidence |
|---|---|---|
| Moderate aerobic (150 min/wk) | Mortality reduction, cardiovascular health | Arem 2015 [^arem2015] |
| Structured mobility training | Disability prevention in frail elderly | LIFE trial [^pahor2014] |
| High-intensity interval (HIIT) | Mitochondrial biogenesis, proteome rejuvenation | Robinson 2017 [^robinson2017] |
| Progressive resistance training | Sarcopenia reversal, satellite cell activation | Fiatarone 1990 [^fiatarone1990] |
| Combined (aerobic + resistance) | Broadest hallmark coverage | Recommended for older adults |

Guidelines recommendation for older adults (WHO / ACSM): 150–300 min/week moderate aerobic, or 75–150 min vigorous, plus muscle-strengthening activities ≥ 2 days/week. These levels correspond to the mortality-reduction range in Arem 2015.

## Training frequency and body recomposition

A recurring practical question — *how fast can someone reach a healthy body composition, and does training more often (e.g., daily running) get them there sooner?* — is tangentially aging-relevant: low visceral adiposity and preserved lean mass are themselves protective against [[chronic-inflammation]] (inflammaging), insulin resistance, and [[sarcopenia]]. The evidence reframes "recomposition" as **two largely decoupled levers** responding to different stimuli, with training *frequency* a weaker lever than volume, energy balance, and protein.

**Fat loss and lean gain are decoupled (STRRIDE-AT/RT).** The cleanest head-to-head trial randomized previously-sedentary overweight/obese adults to 8 months of aerobic-only (jogging ≈12 miles/week equivalent), resistance-only (3 days/week), or combined [^willis2012]. Aerobic-only and combined produced the largest reductions in fat mass and total body mass; resistance-only did **not** reduce fat mass (total mass rose, from added lean tissue). Conversely, aerobic-only added **no** lean mass, whereas resistance training did. Combined training captured both effects but, despite roughly double the weekly training time, was **not statistically superior to aerobic-alone** on fat-mass or body-mass loss (combined's fat-loss point estimate was numerically larger, −2.44 vs −1.66 kg, but the between-group difference was not significant) — the extra resistance time bought lean mass, not additional fat loss. Implication: **running/jogging is a fat-loss and cardiovascular lever, not a recomposition driver** — the muscle-accrual half comes from the resistance stimulus plus adequate [[protein-intake]] and appropriate energy balance.

**The aerobic fat-loss advantage here is mostly energy expenditure, not a fat-specific property of jogging.** The aerobic prescription (~12 miles/week) imposed a substantially larger weekly energy cost than the resistance prescription, and both arms ate *ad libitum* — so the fat-loss gap chiefly reflects the larger energy deficit aerobic produced, not a metabolic property unique to running. Net fat loss tracks **cumulative energy balance**; the substrate mix oxidized *during* moderate-intensity exercise (the popular "fat-burning zone") does not by itself dictate net fat loss, because whole-body fat oxidation adjusts to total daily energy balance — when energy balance is held constant, exercise does not produce a negative fat balance [^melanson2009]. Exercise-driven fat loss is also frequently blunted by compensatory increases in appetite/intake, which vary by modality and individual [^swift2018]. The one modality difference that *does* survive energy-balance matching is **compositional**: resistance training preserves or adds lean mass, so for a given amount of weight lost a larger fraction is fat — which is why resistance (with protein) is the recomposition lever even though it is the weaker raw-fat-loss tool. So the practical levers for fat loss are interchangeable to the extent they create the same deficit; the choice of modality matters less for *how much* fat is lost than for *what else* changes (lean mass, cardiovascular fitness, appetite).

**Frequency and volume interact for tissue change.** For resistance training, frequency per muscle group matters up to a point: across studies training a muscle group one-to-three days/week, a 10-study meta-analysis concludes that **twice/week promotes superior hypertrophy to once/week** on a volume-equated basis [^schoenfeld2016]. Two caveats keep this honest: the meta's *significant* frequency effect (ES 0.49 vs 0.30, p=0.002) came from a **volume-confounded** binary comparison — higher-frequency groups often did more total work — and the dedicated volume-equated analysis was underpowered, so the "twice-beats-once at matched volume" claim is a qualitative authors' inference, not a powered result. Volume remains the primary driver, with frequency working largely by enabling more total volume. Practical reading: below ~twice/week per muscle group there is a real frequency penalty; above that, total weekly load and consistency matter more than calendar density, so daily vs. alternating at matched total volume is a minor lever. This is a *resistance-training* finding and does **not** transfer directly to aerobic/jogging frequency, where no comparable volume-equated body-composition dose-response exists.

**Daily endurance can work against the muscle half — the interference effect.** Adding endurance training to resistance training attenuates strength/power and (to a lesser degree) hypertrophy gains, and the magnitude of interference scales with the **frequency and duration** of the endurance work; running produces more interference than cycling [^wilson2012]. A 2025 meta-analysis refines this around inter-modality sequencing and recovery [^concurrent2025]. So *daily* jogging stacked on a resistance program is the version most likely to blunt recomposition's muscle side — and recovery days are when the resistance adaptation (muscle protein synthesis elevated ~24–48 h post-session) actually occurs, consistent with current resistance-training frequency/recovery guidance [^acsm2026].

**The honest gap.** No randomized trial directly compares "endurance daily vs. every-other-day, volume-matched, with body recomposition as the outcome." The strongest available inference is the volume-equated frequency literature above: at matched total volume, energy deficit, and protein intake, daily vs. alternating training is unlikely to change recomposition *rate* meaningfully. The dominant levers, in order, are **energy balance → protein intake → resistance stimulus**, with aerobic frequency contributing mainly to the fat-loss/energy-expenditure side and to cardiovascular health. #gap/dose-response-unclear — the optimal frequency split for simultaneous fat-loss-plus-lean-retention has not been resolved by a dedicated trial.

## Biological age clocks and DunedinPACE

Exercise effects on epigenetic aging clocks are **mixed and do not yet have clean RCT data** comparable to CALERIE-2's DunedinPACE signal. Observational associations between higher physical activity and slower DunedinPACE exist, but confounding by health status makes interpretation difficult. No large-scale RCT comparable in design and biomarker scope to CALERIE-2 has been published for exercise as of 2026-05-08. #gap/needs-replication — targeted DunedinPACE exercise RCT data are needed.

**Mendelian-randomization (Li 2026):** Two-sample MR analysis using GWAS instruments for physical activity intensity found genetically-predicted **walking activity** associated with longer telomere length (β=0.118, 95% CI 0.022–0.215, p=0.01) and **strenuous exercise** with reduced GrimAge (β=−1.432, 95% CI −2.774 to −0.091, p=0.036) [^li2026mr-pa]. This is the first MR-based evidence supporting a causal direction from PA → slower biological aging clocks; both estimates are modest in magnitude and the strenuous-exercise instrument has wide confidence intervals.

**Singapore DaHA cohort (Shan 2026; n=631 cross-sectional, n=114 longitudinal):** Weekly physical activity associated with slower GrimAge AgeDev (β=−0.22, 95% CI −0.40 to −0.04, p=0.02) in cross-sectional analysis; longitudinal associations were not significant, possibly reflecting limited statistical power and the stability of behavior over the ~4-year follow-up [^shan2026daha]. Smoking remained the strongest accelerator (GrimAge AgeDev β=+1.45, p<0.0001).

These observational signals broadly support the directional hypothesis but do not substitute for an RCT; the field still lacks a CALERIE-2-style trial with DunedinPACE as a pre-specified primary endpoint in healthy adults.

## Exercise + senolytic / mTOR-modulator combinations — 2026 trial data

**RAPA-EX-01 (Stanfield 2026, *J Cachexia Sarcopenia Muscle*).** First RCT to test whether intermittent mTORC1 inhibition (once-weekly sirolimus 6 mg) enhances functional gains from a home exercise program in older adults [^stanfield2026rapa-ex]. Design: n=40 sedentary adults aged 65–85 yr (mean 72.2 yr; 47.5% female), 1:1 randomized to sirolimus 6 mg or matched placebo once weekly for 13 weeks; both arms performed standardized home-based resistance (chair-stands) and endurance (exercycle) 3×/week. Primary outcome: 30-second chair-stand repetitions at 13 weeks.

**Results:** Both groups improved, but sirolimus did **not enhance**, and in sensitivity analyses **modestly attenuated**, exercise gains. Primary ITT analysis: adjusted mean difference (sirolimus − placebo) = −2.13 reps (95% CI −4.61 to 0.34, p=0.089); per-protocol = −3.44 reps (95% CI −5.86 to −0.99, p=0.007). Secondary functional outcomes (6MWD, grip strength, SF-36) all favored placebo non-significantly. Adverse-event burden was higher with sirolimus (99 vs 63 events) including one possibly drug-related serious AE (pneumonia).

**Interpretation:** This is the first head-to-head clinical test of the "cycling hypothesis" — that intermittent mTORC1 inhibition could enhance exercise adaptation — and the result was negative-to-mildly-detrimental at this dose schedule (6 mg/week, 13 weeks) in older adults. This complicates the narrative that rapamycin and exercise should be combined for maximum geroprotection. The authors note longer-duration or lower-dose schedules may yield different results. #gap/needs-replication — different schedules and sex-specific subgroups not yet adequately powered.

## Translation gap and adherence

**The primary translation bottleneck for exercise is adherence, not mechanism or efficacy.** The LIFE trial recruited participants at high risk of disability and still achieved high adherence in a structured setting; community-level uptake of guideline-concordant physical activity remains low globally. Key barriers:
- Musculoskeletal injury risk (especially with high-intensity modalities in older adults)
- Accessibility (facilities, supervision, time)
- Motivation / behavior change maintenance beyond supervised trials
- Frailty / pre-existing disability limiting entry points

Pharmacological exercise mimetics (AICAR for AMPK activation; GW501516 for fatty acid oxidation; MOTS-c peptide as a mitochondria-derived exercise signal) are in early investigation — none have completed phase 2/3 trials with hard aging endpoints. See #gap/no-mechanism for MOTS-c (mechanism partly characterized but human trial data absent). The absence of a viable mimetic means exercise itself remains irreplaceable for now.

## Gaps and open questions

**#gap/dose-response-unclear** — Optimal mode, intensity, volume, and timing of exercise for maximum geroprotection is unresolved, particularly for resistance vs aerobic balance, and for different age strata (50s vs 80s).

**#gap/needs-replication** — Exercise-induced autophagy induction in humans is inferred from animal models and mechanistic markers; direct in vivo human autophagic flux measurement remains technically challenging and understudied.

**#gap/long-term-unknown** — Mortality benefit from exercise is measured in observational cohorts with exposure measured at one or few time points; whether sustained exercise over decades vs mid-life onset produces different trajectories is unknown.

**#gap/needs-replication** — DunedinPACE / biological clock response to exercise lacks a well-powered prospective RCT.

**Next experiment:** A pragmatic 5-year RCT of structured exercise (combined aerobic + resistance) vs usual care in aging-vulnerable older adults (frailty stage II, prediabetes, or mild cognitive impairment), n ≥ 10,000, with all-cause mortality as a pre-specified primary endpoint, would constitute the definitive human evidence base for exercise as a geroprotective intervention. Such a trial has not been conducted; the LIFE trial measured disability, not mortality, and was underpowered for mortality.

## Cross-references

- [[ampk]] — primary energetic sensor activated by exercise
- [[mtor]] — biphasic modulation (inhibited acutely, activated in recovery)
- [[pgc-1alpha]] — master mitochondrial biogenesis regulator
- [[autophagy]] — induced by acute exercise; required for adaptive benefit
- [[sirtuin]] — SIRT1/3 activated downstream of AMPK/NAD+
- [[sarcopenia]] — primary phenotypic target of resistance training
- [[satellite-cells]] — activated by resistance exercise
- [[chronic-inflammation]] — reduced by regular exercise via myokine signaling
- [[biomarkers/heart-rate-variability-biomarker]] — chronic aerobic training raises resting vagal tone and HRV (and lowers [[biomarkers/resting-heart-rate-biomarker|resting heart rate]]); HRV is a non-invasive readout of this autonomic adaptation
- [[mitochondrial-dysfunction]] — reversed in aged human muscle by HIIT (Robinson 2017)
- [[caloric-restriction]] — mechanistically overlapping lifestyle intervention; both activate AMPK + autophagy
- [[protein-intake]] — the muscle-accrual lever of body recomposition; pairs with the resistance stimulus
- [[interventions/pharmacological/exercise-mimetics]] — AICAR, GW501516, MOTS-c (planned stub)
- [[bdnf]] — myokine/neurotrophin mediating cognitive benefit (planned stub)

## Footnotes

[^pahor2014]: [[studies/pahor-2014-life-trial]] · doi:10.1001/jama.2014.5616 · n=1,635 sedentary adults aged 70–89 yr · rct · HR 0.82 (95% CI 0.69–0.98), p=0.03 for major mobility disability · model: community-dwelling older adults, SPPB ≤ 9, median follow-up 2.6 yr · local PDF: not downloaded (status: failed in archive)

[^arem2015]: [[studies/arem-2015-pa-mortality]] · doi:10.1001/jamainternmed.2015.0533 · n>650,000 (pooled 6 US cohorts) · observational (prospective cohort meta-analysis) · ~31% lower all-cause mortality at guideline-level LTPA (7.5–15 MET-hr/wk) vs inactive; dose-response flattens beyond ~3–5x guidelines · model: US general population, leisure-time physical activity self-report · local PDF: pending download (OA available via PMC)

[^fiatarone1990]: [[studies/fiatarone-1990-strength-training-nonagenarians]] · doi:10.1001/jama.1990.03440220053029 · n=10 frail nursing home residents, mean age 90 yr · in-vivo (human, controlled) · mean strength increase +174% at 8 weeks; improved functional mobility · model: frail nonagenarians · local PDF: closed-access (not_oa); no local copy · Note: user-supplied DOI `10.1056/NEJM199006143222402` was incorrect; corrected to JAMA DOI above #gap/no-fulltext-access

[^erickson2011]: [[studies/erickson-2011-exercise-hippocampus]] · doi:10.1073/pnas.1015950108 · n=120 sedentary older adults (aerobic 67.6 yr; stretching 65.5 yr) · rct · 1-year aerobic walking (3×/wk, 40 min, 60–75% HRR after wk 7) vs stretching control · hippocampal volume +2.12% right / +1.97% left in aerobic group vs −1.40%/−1.43% in control. **Spatial memory Time×Group interaction NOT significant (p=0.40); both groups improved equally. Serum BDNF Time×Group interaction NOT significant (p=0.23); BDNF↔volume correlation (r=0.36–0.37) is within-aerobic-group only.** · model: healthy older humans · local PDF: verified end-to-end via R35-Stage2 BDNF verifier wave

[^robinson2017]: [[studies/robinson-2017-exercise-proteome-aging]] · doi:10.1016/j.cmet.2017.02.009 · n=72 (young 18–30 yr and older 65–80 yr adults, 3-arm: HIIT vs resistance vs combined) · rct (12-week training) · HIIT reversed majority of age-related mitochondrial proteome differences; older adults showed greater transcriptomic response than young · model: healthy human volunteers, skeletal muscle biopsies with TMT proteomics · local PDF: pending download · Note: substitutes for unverifiable Konopka 2010 reference

[^he2012]: [[studies/he-2012-exercise-autophagy]] · doi:10.1038/nature10758 · in-vivo mouse · BCL2 phosphomutant mice with impaired exercise-induced autophagy lost aerobic exercise metabolic benefits; establishes autophagy as required for adaptive exercise response · model: BCL2 AAA knock-in mice · #gap/needs-human-replication

[^pedersen2008]: [[studies/pedersen-2008-il6-myokine]] · doi:10.1152/physrev.90110.2007 · review · n/a · model: human and animal exercise physiology; IL-6 as myokine vs inflammaging cytokine distinction · design: review · evidence weight: low on its own; primary RCT data on anti-inflammatory effects of chronic training not individually cited here

[^stanfield2026rapa-ex]: doi:10.1002/jcsm.70274 · Stanfield B, Leroux B, Kaeberlein M, Jones J, Lucas R · *J Cachexia Sarcopenia Muscle* 2026;17(2):e70274 · rct (randomized, double-blind, placebo-controlled) · n=40 sedentary adults aged 65–85 (mean 72.2; 47.5% female) · 1:1 sirolimus 6 mg vs placebo once weekly for 13 weeks; both arms: home resistance (chair-stands) + endurance (exercycle) 3×/week · primary: 30-s chair-stand reps at 13 weeks · ITT adjusted mean difference (sirolimus−placebo) **−2.13 reps (95% CI −4.61 to 0.34; p=0.089)**; complete-case −2.46 (p=0.045); per-protocol −3.44 (p=0.007); 6MWD −4.87 m (p=0.706); grip −1.13 kg (p=0.344); AE burden 99 vs 63 (sirolimus vs placebo); 1 possibly drug-related SAE (pneumonia, sirolimus arm) · ACTRN12624000790549 · PMID 41985884 · PMC13082878

[^li2026mr-pa]: doi:10.1097/MD.0000000000048055 · Li H, Guo W, Nie Q, Tang Q, Li H · *Medicine (Baltimore)* 2026;105(14):e48055 · 2-sample Mendelian randomization · GWAS-instrumented PA exposures (walking, moderate, strenuous) on aging proxies (telomere length, GrimAge, FrailtyIndex, etc.) in European-ancestry cohorts; IVW primary, MR-Egger, weighted-median, MR-PRESSO sensitivity · genetically-predicted **walking activity → telomere length β=0.118 (95% CI 0.022–0.215, p=0.01)**; **strenuous exercise → GrimAge β=−1.432 (95% CI −2.774 to −0.091, p=0.036)** · first MR-based causal-direction evidence for PA → biological-age decel · PMID 41931321 · PMC13052978

[^shan2026daha]: doi:10.1016/j.tjpad.2026.100522 · Shan J, Tay JH, Ye KX, Guo J, Cao L, Zeng Y, Lee TS, Heok KE, Kennedy BK, Maier AB, Feng L · *J Prev Alzheimers Dis* 2026;13(4):100522 · cross-sectional + longitudinal cohort · n=631 cross-sectional (median age 70.0, 72.6% female), n=114 longitudinal (mean follow-up 3.96 yr) · Singapore Diet and Healthy Aging (DaHA) cohort; outcomes: GrimAge AgeDev, DunedinPACE · cross-sectional: weekly PA → slower GrimAge AgeDev (β=−0.22, 95% CI −0.40 to −0.04, p=0.02); cognitively-stimulating activities → slower GrimAge AgeDev (β=−0.16, p=0.04); smoking history → faster aging (GrimAge AgeDev β=+1.45, p<0.0001; DunedinPACE β=+0.63, p=0.003); no significant longitudinal associations · PMID 41763011 · PMC12964021

[^willis2012]: doi:10.1152/japplphysiol.01370.2011 · Willis LH, Slentz CA, Bateman LA, et al. · *J Appl Physiol* 2012;113:1831–1837 · rct (8-month, 3-arm: aerobic / resistance / combined) · n=119 completers (RT n=44, AT n=38, AT/RT n=37) of 196 randomized, sedentary overweight/obese adults (BMI 25–35, age 18–70, mild-to-moderate dyslipidemia), ad libitum diet throughout · STRRIDE-AT/RT · **Exact kg deltas (mean ± SD, from Table 2):** RT: body weight +0.83 ± 2.32 kg (p=0.022), fat mass −0.26 ± 2.16 kg (p=0.429, NS), lean mass +1.09 ± 1.54 kg (p<0.0001) · AT: body weight −1.76 ± 3.00 kg (p=0.001), fat mass −1.66 ± 2.67 kg (p=0.001), lean mass +0.10 ± 1.22 kg (p=0.613, NS) · AT/RT: body weight −1.63 ± 3.17 kg (p=0.004), fat mass −2.44 ± 2.97 kg (p<0.0001), lean mass +0.81 ± 1.38 kg (p=0.001) · AT and AT/RT each reduced fat mass and body mass more than RT (p<0.05 for between-group comparisons); AT vs AT/RT not significantly different for fat mass or body mass despite AT/RT requiring ~2× weekly time commitment · Food intake (kcal/day) did not change significantly from baseline in any group (reported energy intake assessed by 3-day records; not controlled) · model: human · PMID 23019316

[^schoenfeld2016]: doi:10.1007/s40279-016-0543-8 · Schoenfeld BJ, Ogborn D, Krieger JW · *Sports Med* 2016;46(11):1689–1697 · systematic review + meta-analysis (10 studies) · the **binary (higher-vs-lower) frequency** predictor showed a significant effect on hypertrophy effect size (ES 0.49 ± 0.08 vs 0.30 ± 0.07, p=0.002), but this comparison is **volume-confounded** (higher-frequency groups often performed more total volume). The dedicated **volume-equated, per-muscle-group** analysis "could not be carried out... due to inadequate sample size"; the authors nonetheless conclude *qualitatively* that, across studies training a muscle group 1–3 d/wk on a volume-equated basis, **twice/week promotes superior hypertrophy to once/week**, and recommend ≥2×/wk per major muscle group (3× vs 2× undetermined) · implication: frequency per muscle group up to ~2×/wk likely adds benefit beyond volume alone, but the volume-equated claim is a qualitative inference, not a powered result — so the original "no independent effect / purely volume-mediated" framing was wrong, while a flat "significantly greater at matched volume (p=0.002)" framing would over-claim by attaching the volume-confounded p-value to the volume-equated conclusion · this is a resistance-hypertrophy finding, not transferable to aerobic frequency · model: human RT trials · PMID 27102172 · abstract-verified (full text closed-access)

[^wilson2012]: doi:10.1519/JSC.0b013e31823a3e2d · Wilson JM, Marin PJ, Rhea MR, et al. · *J Strength Cond Res* 2012 · meta-analysis (concurrent-training interference) · endurance added to resistance attenuates strength/power > hypertrophy; interference scales with endurance frequency & duration; running > cycling · model: human · PMID 22002517

[^concurrent2025]: doi:10.3389/fspor.2025.1692399 · *Front Sports Act Living* 2025 · semi-systematic review of concurrent strength+endurance training by sequence/modality/recovery · model: human · directional support for sequencing/recovery as modulators of interference magnitude

[^acsm2026]: doi:10.1249/mss.0000000000003897 · ACSM Position Stand — Resistance Training Prescription for Muscle Function, Hypertrophy, and Performance · *Med Sci Sports Exerc* 2026 · expert-consensus synthesis · frequency/recovery prescription guidance

[^melanson2009]: doi:10.1152/japplphysiol.00958.2009 · Melanson EL, Gozansky WS, Barry DW, MacLean PS, Grunwald GK, Hill JO · *J Appl Physiol* 2009;107:1847–1856 · controlled crossover whole-room calorimetry · n=27 (lean sedentary LS n=10, lean endurance-trained LT n=10, obese sedentary OS n=7), age 20–45 yr · exercise condition: 1 h stationary cycling at 55% VO2peak with full energy replacement to maintain energy balance; compared against sedentary control day · 24-h fat oxidation did not increase on the exercise day in any group (LS, LT, or OS); 24-h fat balance was significantly MORE positive on exercise day (p<0.01), not more negative · conclusion: when energy balance is maintained, exercise does not induce negative fat balance — net fat balance is determined by energy balance, not by the substrate mix oxidized during exercise · PMID 19833807

[^swift2018]: doi:10.1016/j.pcad.2018.07.014 · Swift DL, et al. · *Prog Cardiovasc Dis* 2018 · narrative review · exercise drives weight/fat loss primarily via added energy expenditure; effect is frequently attenuated by compensatory increases in energy intake (variable by modality/individual) · model: human · PMID 30003901
