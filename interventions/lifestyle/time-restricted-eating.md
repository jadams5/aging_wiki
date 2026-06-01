---
type: intervention
aliases: [TRE, time-restricted feeding, TRF, early time-restricted eating, eTRF, circadian fasting]
mode: dietary
mechanisms: [circadian-realignment, metabolic-flexibility, autophagy-induction, ampk-activation]
targets: []
target-hallmarks: ["[[deregulated-nutrient-sensing]]", "[[altered-intercellular-communication]]"]
target-pathways: ["[[mtor]]", "[[ampk]]", "[[sirtuin]]", "[[insulin-igf1]]"]
human-evidence-level: limited
clinical-stage: implemented
safety-profile: well-established
translation-gap: phase-3-rct-needed
next-experiment: "Dual-arm isocaloric RCT comparing eTRF (7am–3pm) vs late-TRE (12pm–8pm) with primary biomarker endpoints (HOMA-IR, SBP, DunedinPACE); n ≥ 300, ≥ 12-week duration, pre-registered caloric matching."
clinical-trials-active: 6
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Hatori 2012, Cienfuegos 2020, Liu 2022 (NEJM), Patikorn 2021, and Sun 2023 verified against local PDFs. Sutton 2018 verified against PMC full text (PDF download failed). Manoogian 2017 PDF unavailable (download failed, Elsevier paywall redirect); claims attributed to that review could not be verified against full text — see #gap/no-fulltext-access note in body. R34 recency refresh (2026-05-08): Sheng 2026 npj Sci Food (NHANES TRE × organ-aging cross-sectional), Natarajan 2026 J Gerontol A (TRF in 18-mo aged mice), Steinhauser 2026 Biogerontology perspective, and Geda 2026 TREAD AD trial protocol integrated via PubMed abstracts."
---

# Time-restricted eating (TRE)

**TRE confines all food intake to a narrow daily window (typically 6–12 hours) without an explicit caloric reduction target.** The conceptual distinction from [[caloric-restriction]] and [[intermittent-fasting]] is that TRE is designed to be isocaloric — the therapeutic mechanism is circadian realignment of metabolism, not caloric deficit. In practice, shortened windows often produce mild spontaneous weight loss (~1–3 kg) by reducing ad libitum intake, but the metabolic benefits in some studies appear independent of weight change [^sutton2018].

TRE is currently one of the most consumer-popular dietary interventions; multiple RCTs across cardiometabolic endpoints exist, but long-term hard-endpoint (mortality, cardiovascular events, all-cause disease) data are absent.

## Definitional clarifications

| Protocol | Eating window | Caloric intent | Primary mechanism |
|---|---|---|---|
| **TRE / TRF** | 6–12 h | Isocaloric (intended) | Circadian realignment |
| **[[intermittent-fasting]] (ADF / 5:2)** | 24–48 h fast cycles | Net caloric reduction | Autophagy / ketosis |
| **[[caloric-restriction]]** | Unrestricted timing | 20–40% sustained deficit | mTOR↓, AMPK↑, IGF-1↓ |
| **eTRF (early TRE)** | 6–8 h, morning-anchored (e.g., 7am–3pm) | Isocaloric | Circadian + insulin-sensitivity peak |

The term "intermittent fasting" is often used loosely to include TRE, even though TRE fasting episodes (12–18 h) are considerably shorter than classic ADF/5:2 fasting (24–48 h). This conflation harms comparison across meta-analyses — many "IF" meta-analyses pool TRE and ADF protocols.

## Circadian biology rationale

The foundational animal work establishing TRF (time-restricted feeding) as a circadian-metabolic intervention is the **Hatori 2012** Cell Metabolism study from the Panda lab [^hatori2012]. Male C57BL/6J mice fed a high-fat diet restricted to an 8-hour nocturnal active-phase window (ZT13–ZT21) were completely protected from obesity, hyperinsulinemia, hepatic steatosis, and inflammation compared to ad libitum-fed controls receiving **identical total calories** (caloric equivalence confirmed across 18 weeks; n=20–32 per group). The protective effect was attenuated when the eating window was extended toward ~12 hours, suggesting a dose-response for window length.

Mechanistic basis: metabolic organs (liver, muscle, adipose) are gated by circadian transcription factors (CLOCK/BMAL1, CRY/PER) that anticipate feeding windows and prime catabolic/anabolic programs accordingly. Disrupted or absent feeding rhythms — as in modern irregular eating patterns — decouple circadian metabolic priming from actual nutrient delivery, generating substrate mismatches that promote metabolic disease [^manoogian2017]. #gap/no-fulltext-access — the Manoogian 2017 review PDF is behind an Elsevier paywall and could not be verified against full text; these review-sourced claims should be treated as unverified.

With age, **circadian amplitude dampens** across tissues, reducing the metabolic anticipatory signal. TRE may partially compensate by providing a stronger entrainment zeitgeber (a time cue) to peripheral clocks [^manoogian2017]. This positions TRE as a potential circadian-aging intervention beyond simple cardiometabolic risk reduction.

#gap/needs-human-replication — the circadian-amplitude-rescue hypothesis for TRE in older adults has not been tested in controlled human trials.

## Human evidence

### Sutton 2018 (eTRF, pre-diabetic men)

The strongest early RCT evidence for metabolic-independent TRE effects [^sutton2018]. Men with prediabetes (n=12 randomized; n=8 completers; crossover, 5-week periods) consumed a 6-hour early eating window (meals at ~7am, 10am, 1pm; dinner before 3pm) vs. a 12-hour control window in an **isocaloric, eucaloric, weight-stable protocol** — ruling out weight loss as a confound. eTRF significantly reduced:
- Insulin resistance (3-hour incremental AUC ratio, Δ=−36 ± 10 U/mg; p=0.005)
- Systolic blood pressure (Δ=−11 ± 4 mmHg; p=0.03) and diastolic blood pressure (Δ=−10 ± 4 mmHg; p=0.03)
- 8-isoprostane, an oxidative stress marker (Δ=−11 ± 5 pg/ml, ~14% reduction; p=0.05)

Note: cortisol was NOT significantly reduced (Δ=−0.1 ± 1.3 μg/dl; p=0.95). The wiki originally mis-stated "evening cortisol" as an outcome — this was incorrect. The study did not report HOMA-IR; the insulin-sensitivity endpoint was the incremental AUC ratio.

The study is limited by very small n (n=8 completers) and all-male, pre-diabetic population. #gap/needs-replication — these effect magnitudes require confirmation in larger, mixed-sex, non-diabetic samples.

### Cienfuegos 2020 (4h vs 6h TRE, adults with obesity)

RCT comparing 4-hour TRE (3pm–7pm) vs 6-hour TRE (1pm–7pm) vs control over 8 weeks in 58 adults with obesity [^cienfuegos2020]. Both TRE arms achieved significant weight loss (~3 kg), fat mass reduction, and reductions in fasting insulin vs control, with no statistically significant difference between the 4h and 6h windows. The late-afternoon eating window (ending 7pm) represents **late TRE**, not eTRF — window timing effects on circadian biology are not addressed.

### Liu 2022 (NEJM; TRE vs CR in weight loss)

The largest and most rigorous TRE RCT to date [^liu2022]. In 139 adults with obesity (Chinese population; n=69 TRE, n=70 CR; mean age 31.6±9.1 yr), a 16:8 TRE protocol (8am–4pm window) was compared to daily caloric restriction alone over **12 months**. Crucially, **both arms followed the same prescribed caloric restriction** (1500–1800 kcal/day for men; 1200–1500 kcal/day for women; ~25% deficit below baseline ~2050–2075 kcal/day) — the TRE arm added only a timing constraint, it was not an ad libitum comparison. Primary finding: **no significant difference in weight loss between TRE and CR** (TRE: −8.0 kg, 95% CI −9.6 to −6.4; CR: −6.3 kg, 95% CI −7.8 to −4.7; net difference −1.8 kg, 95% CI −4.0 to 0.4; P=0.11). Secondary cardiometabolic outcomes (waist circumference, BMI, fat mass, lean mass, blood pressure, fasting glucose, HOMA-IR, lipids) also did not differ between groups. Caloric intake and macronutrient percentages were similar in the two groups throughout the trial.

Interpretation: TRE adds no weight-loss benefit beyond equivalent caloric restriction alone when both groups eat the same prescribed number of calories; the trial does not address whether TRE provides circadian-realignment benefits independent of caloric reduction (both arms were calorie-restricted). The Liu 2022 result is often misread as "TRE doesn't work" — it more precisely shows "TRE ≈ CR for weight loss when both groups follow identical caloric prescriptions." #gap/contradictory-evidence — the mechanism-specific circadian claim (independent of weight loss AND independent of caloric reduction) remains untested in large isocaloric-without-restriction RCTs.

### Meta-analytic evidence (Patikorn 2021; Sun 2023)

The Patikorn 2021 umbrella review of 11 meta-analyses covering 130 RCTs of intermittent fasting protocols (including TRE) found 28 statistically significant associations out of 104 total associations tested (27%), largely for BMI, weight, fat mass, and glycemic markers [^patikorn2021]. Most associations were supported by **very low to low quality evidence** by GRADE; only one met high-quality criteria (BMI reduction with modified alternate-day fasting); six met moderate-quality criteria. The TRE-specific signal is diluted by pooling with ADF and 5:2 protocols.

Sun 2023 meta-analyzed 8 RCTs (n=579) combining TRE with explicit caloric restriction and found significant improvements in body weight, fat mass, and waist circumference vs. CR alone — with no additional benefit on blood pressure or glycemia [^sun2023]. Early-window TRE outperformed late-window for weight outcomes. #gap/needs-replication — TRE-as-additive-to-CR remains plausible but evidence base is small.

### Sheng 2026 — TRE × organ-specific biological-age indices (NHANES, n=4,890)

Sheng et al. 2026 (*npj Science of Food*) cross-sectionally analyzed NHANES 2003–2018 data (n=4,890) for the relationship between TRE patterns (eating frequency + meal timing) and organ-specific biological-age indices (heart, kidney, liver, overall), frailty index, Life's Essential 8, and cardiometabolic index, stratified by metabolic-health and obesity status [^sheng2026organ]. Key findings: excessively long or short fasting durations were associated with worse liver metabolic-health indices and worse cardiovascular risk markers; **moderate fasting durations and eating frequencies were associated with lower biological-age indices and better health metrics across subgroups**; the cardiovascular-health benefit was more pronounced in individuals who ate breakfast on time (consistent with the eTRF > late-TRE pattern). This is the largest-to-date observational signal linking TRE patterns to organ-aging biomarkers, though cross-sectional design precludes causal inference. #gap/needs-replication — RCT-grade replication with prospective biological-age clocks remains absent.

### TREAD — Phase 1 TRE for Alzheimer's MCI (planned)

Geda 2026 (*J Alzheimers Dis*) describe TREAD, an MCI/AD-targeted TRE trial design rationale [^geda2026tread]. AD brains exhibit decreased glucose uptake while ketone utilization is preserved; ≥8–12 h fasting induces a metabolic switch to ketogenesis. Preclinical TRE in mouse models enhances cognitive function via hippocampal neurogenesis, autophagy, and reduced neuroinflammation. The TREAD trial protocol provides a theoretical model linking TRE → AD-resistance via direct (brain-energy) and indirect (cardiometabolic) pathways. **No primary results yet** — protocol/rationale paper. #gap/needs-replication

### Mechanistic update: TRF rescues aged adipose function (Natarajan 2026)

Natarajan et al. 2026 (*J Gerontol A*) tested TRF (6h dark-cycle window) in 18-month-old C57BL/6 mice — the first TRF-in-aged-mice study with adipose-specific endpoints [^natarajan2026aged-trf]. TRF in aged mice improved metabolic flexibility, induced beige-adipocyte programming, and reduced fibro-inflammation in adipose tissue. The intervention has been previously well-characterized in young animals; this work extends it to aged biology and is consistent with the circadian-amplitude-rescue hypothesis. #gap/needs-human-replication — TRF effects on aged adipose tissue inflammation in older adults remain untested in RCTs.

## Mechanism: how TRE differs from IF

| Feature | TRE | Intermittent fasting (ADF/5:2) |
|---|---|---|
| Fasting duration | 12–18 h/day | 24–48 h/cycle |
| Caloric intent | Isocaloric | Net deficit |
| Ketosis? | Transient / absent | Significant on fast days |
| Autophagy depth | Mild induction | Substantial induction |
| Circadian entrainment | Primary mechanism | Secondary |
| Primary [[mtor]] pathway | Partial ↓ (nutrient-sensing) | Deeper ↓ |
| [[ampk]] activation | Moderate | Stronger |
| Practical adherence | Higher | Lower |

TRE's autophagy and AMPK effects are real but likely smaller in magnitude than those triggered by full-day fasting. TRE's **unique** mechanistic contribution is circadian entrainment of metabolic organ clocks — a signal IF does not consistently provide, particularly when the IF eating window is unconstrained in timing.

## Eating-window timing: eTRF vs late-TRE

A consistent pattern across human and rodent data is that **early eating windows (morning/midday-anchored) outperform late eating windows (afternoon/evening-anchored)** for metabolic outcomes, independent of window duration [^sutton2018].

Mechanistic basis: insulin sensitivity in skeletal muscle and adipose peaks in the morning (~9am–11am) due to circadian gating of GLUT4 and insulin receptor expression. Eating early aligns nutrient delivery with peak tissue responsiveness; eating late creates post-prandial glucose/insulin loads against a background of declining tissue sensitivity — even at identical total calories and identical window duration.

**Practical consequence:** a noon–8pm eating window (common in consumer TRE) is chronobiologically sub-optimal compared to a 7am–3pm (eTRF) window. Most popular TRE literature does not adequately distinguish these, which may explain heterogeneity in trial outcomes. #gap/contradictory-evidence — direct head-to-head eTRF vs late-TRE trials in older adults are needed; the existing evidence is largely indirect.

## Aging-specific considerations

- **Circadian dampening with age** — aging reduces amplitude of BMAL1/CLOCK cycling; TRE's entraining effect may be proportionally larger in older adults, but this is untested. #gap/needs-human-replication
- **Muscle preservation** — unlike heavy CR, isocaloric TRE does not produce protein deficits; no consistent evidence of lean-mass loss in short-term TRE RCTs. Important for [[sarcopenia]] risk in elderly.
- **Frailty and appetite** — older adults may spontaneously eat less within a shortened window and risk nutritional deficiency. Supervision recommended in adults >70.
- **Drug timing** — time-sensitive medications (statins, blood pressure agents) require dose-timing review if eating windows shift dramatically.
- **Sleep-adjacent feeding** — early TRE (finish by 3pm) requires very early breakfast (~7am), which is difficult for older adults with morning stiffness or social eating patterns. Adherence is the primary practical limitation.

## Practical considerations and safety

TRE has a well-established short-term safety profile across healthy adults and those with metabolic syndrome. No serious adverse events have been reported in published RCTs. The main concerns are:
- Nutritional adequacy in windows < 6 hours (micronutrient gaps possible)
- Disruption of existing eating disorder patterns
- Interaction with medications requiring food co-administration

TRE is **not recommended** without medical supervision for: type 1 diabetes, pregnancy or lactation, history of eating disorders, or adults with significant underweight or frailty.

## Cross-organism extrapolation

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Circadian metabolic clocks conserved; CLOCK/BMAL1 function in humans is established |
| Phenotype conserved in humans? | partial | Hatori 2012 mouse findings partially replicated; magnitude smaller and weight-loss-confounded |
| Replicated in humans? | in-progress | Multiple RCTs exist; no hard-endpoint (mortality/CVD) trial completed |

#gap/needs-human-replication — TRE's lifespan/healthspan effects in humans are inferred from circadian biology theory + metabolic biomarker data; no human RCT has used longevity or hard cardiovascular endpoints.

## Key open questions

1. **Window timing vs duration** — eTRF (early window) vs late-TRE head-to-head in pre-registered isocaloric RCT; DunedinPACE + HOMA-IR as primary endpoints.
2. **Long-term adherence** — most TRE trials are ≤12 weeks; real-world adherence beyond 1 year is unknown. #gap/long-term-unknown
3. **Age-specific effects** — does TRE's circadian-entrainment benefit scale with age (where circadian dampening is greater)? No RCT in adults >65 with aging-specific endpoints.
4. **Isocaloric control** — very few human TRE trials succeed at isocaloric matching; the question of TRE benefit independent of caloric reduction is mostly unanswered in humans.
5. **Interaction with exercise** — combining resistance training with TRE for [[sarcopenia]] prevention; pilot data emerging, no large RCT.
6. **Biological age clock response** — [[biomarkers/dunedinpace-2022|DunedinPACE]] has been measured in [[caloric-restriction]] (Waziry 2023 slowing d=−0.25); TRE has not been tested against epigenetic clock endpoints. #gap/needs-replication

## Cross-references

- [[caloric-restriction]] — overlapping but distinct; TRE is not CR; see definitional table
- [[intermittent-fasting]] — sibling intervention; see mechanism table for distinctions
- [[autophagy]] — mildly induced by TRE; more deeply induced by IF
- [[mtor]] — partially suppressed by nutrient-sensing during TRE fasted window
- [[ampk]] — moderately activated during fasted window
- [[sirtuin]] — NAD+ cycling influenced by feeding pattern
- [[insulin-igf1]] — primary cardiometabolic target; eTRF improves insulin sensitivity
- [[deregulated-nutrient-sensing]] — primary hallmark target
- [[altered-intercellular-communication]] — circadian-mediated inter-organ signaling
- [[sarcopenia]] — potential protective effect (isocaloric; preserves lean mass); elderly supervision caveat
- [[biomarkers/dunedinpace-2022]] — priority endpoint for future TRE aging trials

Sibling R23c interventions: [[interventions/lifestyle/methionine-restriction]], [[interventions/lifestyle/ketogenic-diet]], [[interventions/lifestyle/sleep]], [[interventions/lifestyle/heat-exposure]]

## Footnotes

[^hatori2012]: doi:10.1016/j.cmet.2012.04.019 · in-vivo · n=20–32 per group (4 groups: NC ad lib, NC TRF, HFD ad lib, HFD TRF) · model: 8-week-old male C57BL/6J mice (Jackson Laboratory), HFD (61% fat) or NC, 8h active-phase TRF (ZT13–ZT21) vs ad libitum, >18 weeks · Hatori M et al. · *Cell Metabolism* 2012 · TRF prevented obesity, hyperinsulinemia, hepatic steatosis, and inflammation without caloric restriction; caloric intake equivalent between TRF and ad lib groups throughout experiment; protection attenuated as window extended toward ~12h · citation_percentile: 100th; 1904 citations · local PDF: verified
[^sutton2018]: doi:10.1016/j.cmet.2018.04.010 · rct (crossover) · n=12 randomized, n=8 completers · model: human males with prediabetes; eTRF 6h window (meals at ~7am/10am/1pm, dinner before 3pm) vs 12h control window, 5 weeks each, isocaloric eucaloric weight-stable · Sutton EF et al. · *Cell Metabolism* 2018 · eTRF reduced insulin resistance (incremental AUC ratio Δ=−36 U/mg; p=0.005), SBP (Δ=−11 mmHg; p=0.03), DBP (Δ=−10 mmHg; p=0.03), 8-isoprostane (~14%; p=0.05); cortisol NOT significantly changed (p=0.95); effects independent of weight loss · citation_percentile: 100th; 1372 citations · local PDF: failed (PMC full text verified)
[^cienfuegos2020]: doi:10.1016/j.cmet.2020.06.018 · rct · n=58 randomized (4h TRF n=19, 6h TRF n=20, control n=19); n=49 completers · model: adults with obesity, late-afternoon windows (4h: 3pm–7pm; 6h: 1pm–7pm) vs control, 8 weeks · Cienfuegos S et al. · *Cell Metabolism* 2020 · Both TRE windows produced ~3.2% weight loss (Δ=−3.2±0.4%), reduced fasting insulin and HOMA-IR vs control; energy intake reduced ~550 kcal/day without calorie counting; 4h vs 6h not significantly different for weight or most cardiometabolic markers · citation_percentile: 100th; 536 citations · local PDF: verified
[^liu2022]: doi:10.1056/NEJMoa2114833 · rct · n=139 randomized (TRE n=69, CR n=70); n=118 completed 12 months · model: adults with obesity (mean age 31.6 yr, mean weight 88.2 kg), Chinese population; both arms prescribed same caloric restriction (~25% deficit; 1500–1800 kcal/day men, 1200–1500 kcal/day women); TRE arm additionally constrained to 8am–4pm window; 12 months · Liu D et al. · *NEJM* 2022 · No significant difference in weight loss (TRE −8.0 kg [95% CI −9.6 to −6.4] vs CR −6.3 kg [95% CI −7.8 to −4.7]; net difference −1.8 kg [95% CI −4.0 to 0.4]; P=0.11); no between-group difference in waist circumference, BMI, fat mass, lean mass, blood pressure, glucose, HOMA-IR, or lipids; caloric intake similar between groups by design · citation_percentile: 100th; 450 citations · local PDF: verified
[^patikorn2021]: doi:10.1001/jamanetworkopen.2021.39558 · meta-analysis (umbrella) · 11 meta-analyses, 130 RCTs of IF protocols (includes TRE + ADF + 5:2); median sample size per RCT n=38 · Patikorn C et al. · *JAMA Network Open* 2021 · 28/104 tested associations significant (27%); mostly BMI/weight/fat mass/glycemia/lipids; 75 associations (72%) very-low-quality GRADE; 22 (21%) low; 6 (6%) moderate; 1 (1%) high (BMI reduction with MADF); no TRE-specific high-quality associations · citation_percentile: 100th; 251 citations · local PDF: verified
[^manoogian2017]: doi:10.1016/j.arr.2016.12.006 · review · Manoogian ENC, Panda S · *Ageing Research Reviews* 2017 (published Dec 2016) · circadian rhythms dampen with age; feeding-fasting cycles strongly entrain peripheral clocks; animal TRF prevents metabolic disease without CR; human epidemiology: erratic eating ↑ disease risk; structured feeding-fasting may sustain circadian amplitude · 304 citations · local PDF: failed (Elsevier paywall) #gap/no-fulltext-access — claims attributed to this review could not be verified against full text; body-text claims that cite only this source should be treated as unverified
[^sun2023]: doi:10.1038/s41430-023-01311-w · meta-analysis · 8 RCTs, n=579 (overweight/obese adults) · Sun J-C et al. · *European Journal of Clinical Nutrition* 2023 · TRE+CR vs CR alone: significant reductions in body weight (WMD −1.40, 95% CI −1.81 to −1.00), fat mass (WMD −0.73, 95% CI −1.39 to −0.07), and waist circumference (WMD −1.87, 95% CI −3.47 to −0.26); no significant additional benefit on blood pressure, fasting glucose, insulin, HOMA-IR, or lipid profile; subgroup analysis: early TRE (eTRE) outperformed delayed TRE for weight (WMD −1.42, 95% CI −1.84 to −1.01) and fat mass (WMD −1.06, 95% CI −1.91 to −0.22) · local PDF: verified

[^sheng2026organ]: doi:10.1038/s41538-026-00862-z · cross-sectional · n=4,890 (NHANES 2003–2018) · Sheng L, Li E, Ji H, Cheng S, Kwan A, Bischof E, Chen Y, Pu J · *npj Science of Food* 2026 · TRE patterns assessed by eating frequency and meal timing; outcomes: organ-specific biological-age indices (heart, kidney, liver, overall), frailty index, Life's Essential 8, cardiometabolic index; stratified by metabolic-health × obesity · finding: excessively long/short fasting durations associated with worse liver metabolic-health and worsened cardiovascular risk; moderate fasting durations/eating frequencies associated with lower biological-age indices and better health metrics; on-time breakfast strengthens the cardiovascular-health × healthy-metabolism association · cross-sectional limits causal inference · PMID 42091606

[^geda2026tread]: doi:10.1177/13872877261438520 · trial protocol/review · Geda YE, Krell-Roesch J, Bekele K, Gunning JA, Zaniletti I, Eagan D, Demeke M, Khan N, Chahal G, Smith T, DeCuna C, Aliskevich EL, Hettiwatte Y, Ransdell M, Racette SB · *J Alzheimer's Dis* 2026 (Online Apr 6) · proposes TREAD trial — TRE in MCI/AD; theoretical model linking TRE to AD-resistance via direct (brain-energy) and indirect (cardiometabolic) pathways; AD brains exhibit decreased glucose uptake while ketone utilization preserved; ≥8–12 h fasting induces metabolic switch to ketogenesis; preclinical TRE in mouse models enhances cognitive function via hippocampal neurogenesis, autophagy, reduced neuroinflammation · no primary results yet · PMID 41940859

[^natarajan2026aged-trf]: doi:10.1093/gerona/glag085 · Natarajan D, Milan M, Reyff Z, Negri S, Ekambaram S, Varshney RR, Rudolph MC, Tarantini S, Balasubramanian P · *J Gerontol A Biol Sci Med Sci* 2026;81(5):glag085 · in-vivo · 18-month-old C57BL/6 mice on 6h dark-cycle TRF vs ad libitum · TRF improved metabolic flexibility, induced beige-adipocyte programming, reduced fibro-inflammation in adipose tissue; first TRF study in aged mice with adipose-specific endpoints · PMID 41888918
