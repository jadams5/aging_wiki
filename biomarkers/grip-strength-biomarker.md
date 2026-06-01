---
type: biomarker
aliases: [HGS, handgrip strength, grip dynamometry, JAMAR, Smedley dynamometer, hand grip force]
modality: physical-performance
unit: kg
training-cohort: |
  Multiple large prospective cohorts established mortality and sarcopenia associations:
  - Leong 2015 PURE (Lancet): n=139,691, 17 countries, median 4.0-yr follow-up; landmark all-cause mortality cohort
  - Celis-Morales 2018 BMJ UK Biobank: n=502,293; ages 40–69 yr; mean follow-up 7.1 yr; all-cause and cardiovascular mortality
  - Ling 2010 Leiden 85-plus: n=555 oldest-old, 9.5-yr follow-up; mortality in ages 85–94
  - Granic 2016 Newcastle 85+: n=845 (319 men, 526 women); longitudinal decline rate quantification over 5 years
  - Massy-Westropp 2011: n=2,678 (Australian population); age- and sex-stratified normative reference ranges
  - Bohannon 2019 NHANES + NIH Toolbox: n=13,918 (NHANES) + 3,594 (NIH Toolbox); US normative reference comparison
n-cpgs-or-features: 1
training-target: mortality
calibration-tissues: ["[[skeletal-muscle]]"]
test-retest-icc: null
human-evidence-level: strong
mendelian-randomization: partial
intervention-responsive: yes
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Cruz-Jentoft 2019, Granic 2016, Ling 2010, Celis-Morales 2018, Bohannon 2019 verified against local PDFs. Park 2022 is closed-access (not_oa) — OR 1.128 and CAD-vs-MI endpoint designation unverifiable. Leong 2015 local PDF is a repository HTML page without full results tables; key PURE HRs cross-confirmed via citations in Celis-Morales 2018 and Ling 2010 PDFs."
---


# Handgrip Strength as an Aging Biomarker

Handgrip strength (HGS) is the single most validated physical-performance biomarker of biological aging in humans. It integrates skeletal muscle mass, neural drive, and peripheral circulation into one inexpensive, reproducible measure that consistently predicts all-cause mortality, cardiovascular mortality, disability, frailty, and sarcopenia across populations spanning five continents. The landmark PURE study (n=139,691; 17 countries) found HGS to be a **stronger predictor of all-cause mortality than systolic blood pressure** [^leong2015]. HGS requires no laboratory, no biospecimen, and a ~$60–300 dynamometer — placing it in a unique tier among aging biomarkers for accessibility and clinical deployability.

This page covers HGS as a quantitative aging biomarker: measurement protocol, aging trajectory, major mortality/sarcopenia cohorts, EWGSOP2 diagnostic cutoffs, Mendelian randomization status, intervention responsiveness, and hallmark linkages. For the underlying muscle biology, see [[phenotypes/sarcopenia]].

## Identity

- **Gold-standard instrument:** JAMAR hydraulic dynamometer (Sammons Preston, Rolyan) — the most widely validated device; recommended in EWGSOP2 and most clinical guidelines [^cruzjentoft2019]
- **Alternative:** Smedley spring-based dynamometer — less expensive; slightly lower values than JAMAR; results are not interchangeable without platform-specific norms
- **Unit:** kilograms-force (kg); some devices report Newtons — convert N ÷ 9.81 for kg
- **Pre-analytical considerations:** Dominant vs. non-dominant hand; position (seated, elbow at 90°, wrist neutral); 3 trials with 1–2-minute rest between; record maximum value; avoid testing immediately post-exercise

### Standard protocol (EWGSOP2 / Southampton)

1. Patient seated, elbow flexed at 90°, forearm in neutral rotation
2. Use dominant hand unless contraindicated (arthritis, recent injury)
3. Three maximal squeezes, with verbal encouragement; 1-minute rest between trials
4. Record maximum of three values
5. Compare against age- and sex-specific normative reference data

The Southampton protocol (Roberts 2011) is the most widely cited standardization reference. Deviation from protocol (e.g., standing position, arm at side) can raise values ~10–15% — making protocol fidelity essential for longitudinal tracking.

## Aging Trajectory

HGS peaks at approximately **up to age ~40** in both sexes (young adulthood), with men averaging 45–55 kg and women 28–35 kg at peak [^cruzjentoft2019]. The EWGSOP2 consensus paper (Cruz-Jentoft 2019) cites loss of muscle strength at **1.5–5% per year** after age 50, accelerating after age 70 [^cruzjentoft2019]. The Granic 2016 Newcastle 85+ longitudinal study quantified decline in the very old as **−1.13 kg/year in men** (linear) and a curvilinear pattern with acceleration in women [^granic2016].

Key age-related drivers of HGS decline:
- Loss of muscle fiber cross-sectional area (especially type II fast-twitch)
- Reduced alpha-motor neuron firing rate and neuromuscular junction efficiency
- Mitochondrial dysfunction reducing ATP production in muscle fibers (see [[hallmarks/mitochondrial-dysfunction]])
- Satellite cell depletion reducing regenerative capacity (see [[hallmarks/stem-cell-exhaustion]])
- Chronic low-grade inflammation suppressing protein synthesis (see [[hallmarks/chronic-inflammation]])

### Approximate age-stratified means (healthy community-dwelling; dominant hand)

The table below synthesizes data from Massy-Westropp 2011 and Bohannon 2019 NHANES. Values are approximate summaries across populations; population-specific norms (European, US, Asian) differ meaningfully. #gap/needs-replication — no single global normative reference has been universally adopted.

| Age group | Men (kg) | Women (kg) | Notes |
|---|---|---|---|
| 20–29 yrs | ~45–52 | ~28–33 | Peak decade in most populations |
| 30–39 yrs | ~45–54 | ~28–34 | Peak sustained; slight increase possible |
| 40–49 yrs | ~43–50 | ~27–32 | Plateau or early decline begins |
| 50–59 yrs | ~39–46 | ~25–30 | Meaningful decline; begins to distinguish fit vs. sedentary |
| 60–69 yrs | ~34–41 | ~22–27 | Community-dwelling norms; EWGSOP2 cut-off zone |
| 70–79 yrs | ~28–35 | ~18–23 | High proportion approaching EWGSOP2 threshold |
| 80–89 yrs | ~22–28 | ~14–19 | Many below diagnostic threshold; sarcopenia prevalent |
| 90+ yrs | ~16–22 | ~10–16 | Centenarian survivors tend to preserve relative strength |

## Sarcopenia Diagnostic Role: EWGSOP2 Cutoffs

The European Working Group on Sarcopenia in Older People 2 (EWGSOP2) consensus (Cruz-Jentoft 2019) uses low grip strength as the **primary criterion** for probable sarcopenia — the first step in the Find-Assess-Confirm-Severity (F-A-C-S) algorithm [^cruzjentoft2019].

**EWGSOP2 cutoffs for low muscle strength (Table 3 of Cruz-Jentoft 2019, confirmed against local PDF):**

| Sex | HGS threshold | Severity level |
|---|---|---|
| Men | **< 27 kg** | Low strength (probable sarcopenia) |
| Women | **< 16 kg** | Low strength (probable sarcopenia) |

These cutoffs are set at approximately −2 standard deviations from young-adult reference values (T-score ≤ −2.5 in Figure 2 of the paper). They are consistent with a Dodds 2014 normative dataset of UK adults and have been adopted by major international sarcopenia guidelines.

**Diagnostic algorithm (EWGSOP2 F-A-C-S):**
1. **Find:** SARC-F questionnaire or clinical suspicion (falls, weakness, slow gait)
2. **Assess:** HGS or chair-stand test — if low → probable sarcopenia
3. **Confirm:** DXA or BIA to document low muscle quantity/quality
4. **Severity:** Add gait speed, SPPB, TUG, or 400-m walk — if all three criteria met → severe sarcopenia

HGS is also a component of the Fried Frailty Phenotype (criterion: grip strength in lowest 20th percentile by sex and BMI quartile), creating direct overlap between the sarcopenia and frailty diagnostic frameworks.

## Major Mortality Cohorts

### Leong 2015 — PURE Study (Lancet)

The landmark Prospective Urban Rural Epidemiology study enrolled **139,691 participants** aged 35–70 from 17 countries (low-, middle-, and high-income) across four continents; median follow-up 4.0 years [^leong2015].

Key findings (from PubMed abstract; full PDF pending verification):
- Each **5 kg decrease in HGS** associated with HR **1.16** (95% CI 1.13–1.20) for all-cause mortality
- Cardiovascular mortality HR: **1.17** (95% CI 1.11–1.24) per 5-kg decrement
- Grip strength was a **stronger predictor of all-cause and cardiovascular mortality than systolic blood pressure** — a finding that shifted clinical perception of physical performance as a vital sign
- The association held across high-, middle-, and low-income countries, establishing HGS as a globally applicable biomarker
- No significant association with diabetes, falls, or fractures in this cohort (negative finding)

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — direct human cohort |
| Phenotype conserved across populations? | yes — 17 countries, all income levels |
| Replicated in humans? | yes — multiple independent cohorts |

### Celis-Morales 2018 — UK Biobank (BMJ)

Among **502,293 UK Biobank participants** aged 40–69 years (mean follow-up 7.1 years, range 5.3–9.9 yr), lower HGS strongly predicted mortality and disease incidence across multiple endpoints [^celismorales2018]:

| Outcome | HR per 5-kg lower HGS (women) | HR per 5-kg lower HGS (men) |
|---|---|---|
| All-cause mortality | 1.20 (95% CI 1.17–1.23) | 1.16 (1.15–1.17) |
| Cardiovascular mortality | 1.19 (1.13–1.25) | 1.22 (1.18–1.26) |
| Cancer (all sites) | not reported separately | — |

Addition of HGS measurement enhanced cardiovascular risk prediction models beyond conventional clinical risk factors. The sample size (~3.6× PURE) and breadth of outcome ascertainment make this the largest single-cohort HGS mortality dataset.

### Ling 2010 — Leiden 85-plus Study

In **555 participants** at age 85 (65% women), followed up to age 94 (9.5 years; 80% deceased by end of follow-up) [^ling2010]:

- Lowest tertile HGS at age 85: HR **1.35** (95% CI 1.00–1.82) for all-cause mortality
- Greatest relative HGS loss over 4 years: HR **1.72** (95% CI 1.07–2.77) for mortality
- Effect strengthened with increasing age — at age 89, lowest two tertiles showed HRs of 2.04 and 1.73 respectively

This study is notable for focusing on the **oldest-old** (85+) where most standard aging biomarkers lose predictive power; HGS remained independently prognostic in this extreme-age population.

## Mendelian Randomization Status

**Status: partial** — GWAS instruments for HGS exist, and MR analyses have been conducted for specific cardiovascular and respiratory endpoints, but a dedicated MR study of HGS against all-cause mortality or longevity has not been published.

**Available evidence:**

Park 2022 (n=UK Biobank + FinnGen; two-sample MR): Genetically predicted poor handgrip strength associated with **OR 1.128** (95% CI 1.041–1.222) for myocardial infarction / cardiovascular endpoints — suggesting a causal (not merely associative) relationship between muscle strength and cardiovascular risk [^park2022mr]. #gap/no-fulltext-access — paper is closed-access (not_oa); OR and exact endpoint designation unverified against full text.

Farmer 2019 (UK Biobank, n=~500,000; MR component): Low genetically predicted HGS associated with increased mortality risk (HR range 1.08–1.19 in observational analysis; MR signal in same direction) [^farmer2019].

Su 2024 (bidirectional MR): Higher genetically predicted left-hand grip strength associated with reduced chronic bronchitis risk (OR 0.35, p=0.03) and asthma risk (OR 0.78, p=0.04) [^su2024].

**Limitations of current MR evidence:** HGS is a highly polygenic trait influenced by hundreds of loci with small effects. Individual GWAS instruments have low F-statistics, and weak-instrument bias is a concern. No published MR study has used HGS GWAS instruments against all-cause mortality or lifespan endpoints specifically. #gap/needs-replication — a large-scale two-sample MR of HGS instruments against longevity/mortality GWASs (e.g., CHARGE consortium) would resolve the causal question.

## Intervention Responsiveness

### Resistance training (strong positive signal)

Resistance training is the most robustly validated intervention for increasing HGS in older adults. Multiple RCTs across diverse older-adult populations demonstrate:
- 8–16 weeks of progressive resistance training increases HGS by **2–5 kg** on average in adults aged 60+ #gap/needs-replication — specific RCT citation needed for these numeric estimates; cite from literature on verification
- Effects are largest in individuals with lowest baseline strength (sarcopenia population)
- Mixed (combined aerobic + resistance) training also increases HGS but effects are smaller than pure resistance training

The EWGSOP2 identifies resistance training as the **primary intervention** for both preventing and treating sarcopenia [^cruzjentoft2019].

### Protein intake and dietary adequacy

- Adequate dietary protein (≥1.0–1.2 g/kg body weight/day) supports HGS maintenance; protein supplementation alone in older adults with adequate baseline intake shows modest incremental benefit #gap/needs-replication. See [[../interventions/lifestyle/protein-intake]] for the full dose-recommendation evidence base.
- Leucine-rich proteins (whey, egg) may have superior anabolic signaling via mTORC1 compared to plant proteins; see [[pathways/mtor]] and [[hallmarks/deregulated-nutrient-sensing]]

### Creatine supplementation

- Creatine monohydrate supplementation (~3–5 g/day) combined with resistance training shows consistent incremental HGS improvement in older adults over training alone in several RCTs. See [[molecules/compounds/creatine]] for compound-level evidence. #gap/needs-replication — effect sizes vary widely; a systematic review/meta-analysis citation should be added on verification pass.

### Physical inactivity and disuse atrophy

- Bed rest, hospitalization, or disuse rapidly reduces HGS — 10 days of bed rest can reduce HGS by 2–4 kg in healthy older adults, with disproportionately slow recovery in the aged #gap/needs-replication
- Post-hospitalization HGS loss is an independent predictor of prolonged functional decline

### Confounders and modifiers

| Factor | Direction of effect on HGS | Notes |
|---|---|---|
| Chronic disease burden | Decrease | Cancer, CHF, COPD, CKD all lower HGS |
| Acute illness / hospitalization | Decrease | Rapid disuse + inflammation |
| Corticosteroid exposure | Decrease | Myopathy; steroid-induced muscle wasting |
| Obesity | Variable | Fat mass dilutes relative strength; BMI adjustment sometimes used |
| Depression | Decrease | Motor slowing; motivational factors affect volitional effort |
| Arthritis / hand deformity | Decrease | Cannot interpret as pure muscle biomarker when hand mechanics are compromised |
| Dominant hand vs. non-dominant | Increase (dominant) | ~10% stronger on average; protocol consistency essential |

## Hallmark Linkages

HGS is an integrative downstream readout of multiple upstream hallmarks operating on skeletal muscle:

- **[[hallmarks/stem-cell-exhaustion]]** — Satellite cell (muscle stem cell) depletion with age impairs fiber repair and regeneration, reducing myofiber cross-sectional area and therefore maximal force output
- **[[hallmarks/mitochondrial-dysfunction]]** — Mitochondrial decline reduces ATP production per muscle fiber, lowering force output per contractile unit and contributing to fatigue-based functional limitations
- **[[hallmarks/disabled-macroautophagy]]** — Autophagy-dependent proteostasis maintains sarcomeric protein quality; impaired autophagy leads to accumulation of damaged myosin and actin, reducing contractile efficiency. See [[processes/autophagy]] for mechanism.
- **[[hallmarks/chronic-inflammation]]** — Elevated IL-6, TNF-α, and IL-1β suppress muscle protein synthesis (mTORC1 inhibition via NF-κB), promote protein catabolism (ubiquitin-proteasome activation), and suppress satellite cell function — collectively driving sarcopenia
- **[[hallmarks/deregulated-nutrient-sensing]]** — mTORC1 activity declines in aged muscle, impairing anabolic response to amino acids; AMPK hyperactivation in aged muscle can suppress mTORC1-dependent protein synthesis

Because HGS reflects the aggregate functional output of skeletal muscle, it is simultaneously influenced by all of these hallmarks — giving it high predictive validity but low mechanistic specificity for any individual hallmark.

## HGS in the Sarcopenia Phenotype Context

Cross-reference: [[phenotypes/sarcopenia]] — canonical molecular and physiological page.

Key relationships:
- HGS is the **primary functional criterion** for sarcopenia (EWGSOP2); low muscle mass alone (without low strength) is now termed "pre-sarcopenia" and treated as insufficient for diagnosis
- HGS correlates with **whole-body muscle strength** (leg press, knee extension) reasonably well (r ≈ 0.5–0.7 in community-dwelling older adults) — it is not just an upper-limb measure but a systemic muscle quality proxy
- **Sarcopenic obesity** (low HGS with high fat mass) carries higher mortality risk than either condition alone [^farmer2019]
- Low HGS is one of the five Fried Frailty Phenotype criteria; overlap with frailty diagnosis is substantial (see [[biomarkers/frailty-index]])

## Normative Reference Ranges

The NHANES (US) and Massy-Westropp (Australian) datasets are among the most cited population-level norms. Bohannon 2019 compared NHANES 2011–2014 (n=13,918, ages 6–80) against NIH Toolbox (n=3,594, ages 6–80) and confirmed meaningful differences by dominant/non-dominant side, sex, and age group [^bohannon2019]. Importantly, the paper explicitly concludes it **cannot recommend NHANES values for broad application as reference norms** because the NHANES protocol (Takei dynamometer, standing, 3 trials) differs substantially from current standards (ASHT/Roberts 2011: JAMAR, seated, elbow 90°) — users should apply caution when comparing NHANES-derived tables to clinically measured values. EWGSOP2 anchors its cut-offs to UK normative data (Dodds 2014; PLoS One).

**Population-level caveats:**
- Asian populations (AWGS consensus) use lower cutoffs: men <28 kg, women <18 kg (2019 AWGS update)
- US NHANES norms tend slightly higher than European norms in the 50–70 age range
- Body-size adjustment (HGS/BMI or HGS/height²) improves predictive validity for outcomes in some cohorts but is not universally required — raw values are used in EWGSOP2 cutoffs

## Use as a Quarterly Tracking Metric

HGS is well-suited to personal longitudinal tracking:
- **Equipment:** JAMAR hydraulic dynamometer (~$250–350 clinical; ~$60–80 consumer alternatives available, though precision varies) or Smedley (~$30–50)
- **Frequency:** Quarterly tracking for aging monitoring; before/after intervention assessments for responsiveness to exercise or nutrition programs
- **Within-person variability:** ~5% coefficient of variation; dominant hand preferred for consistency; best to test at same time of day and under similar conditions (fed, rested)
- **Clinically meaningful change:** ~2–3 kg change is detectable beyond measurement noise in most protocols; a decline of >5 kg over 12 months warrants clinical attention

**EWGSOP2 threshold proximity monitoring:** Individuals approaching the diagnostic thresholds (men: 27–32 kg; women: 16–20 kg) benefit from closer monitoring and proactive intervention (resistance training, protein adequacy review).

## Limitations and Gaps

1. **Mechanistic opacity** — HGS reflects the net output of multiple parallel hallmarks; a declining value does not distinguish which upstream driver is responsible. It is a functional read-out, not a mechanistic probe. #gap/no-mechanism

2. **Hand pathology confounding** — Arthritis, tendon injury, carpal tunnel syndrome, and peripheral neuropathy reduce HGS independently of muscle biology. Cannot be used as an aging biomarker when hand mechanics are compromised; an alternative (chair-stand test, knee extension dynamometry) should be substituted.

3. **Effort dependence** — HGS requires maximal voluntary effort; pain, cognition, and motivation affect results. Volitional effort variability is larger in demented or hospitalized populations.

4. **Cutoff population specificity** — EWGSOP2 cutoffs (men <27 kg, women <16 kg) are derived from European populations. Asian populations use different cutoffs (AWGS 2019: men <28 kg, women <18 kg — notably, AWGS uses a *higher* cutoff for men than EWGSOP2 despite generally lower Asian HGS norms). Applying one population's cutoffs to another creates misclassification. #gap/needs-replication

5. **Mendelian randomization gap** — No published MR study has used HGS GWAS instruments against all-cause mortality or longevity phenotypes specifically. The causal path from muscle weakness to mortality (vs. weakness as a marker of disease burden) is not definitively established by genetic causal inference. #gap/needs-replication

6. **Intervention trial endpoint underuse** — Most pharmacological aging trials (rapamycin, senolytics, metformin) do not use HGS as a primary endpoint, limiting the dataset for drug-responsive signal. Growing use in sarcopenia trials (e.g., myostatin inhibitors, testosterone) but not yet in general geroprotector trials. #gap/needs-replication

7. **Normative reference standardization** — No globally accepted normative reference dataset. Massy-Westropp (Australian), NHANES (US), Dodds (UK), and various European cohort norms produce modestly different centile distributions. #gap/needs-replication

## Cross-references

- [[phenotypes/sarcopenia]] — canonical sarcopenia page; underlying biology, epidemiology, treatment
- [[biomarkers/frailty-index]] — Rockwood deficit-accumulation index; HGS is one component (Fried overlap)
- [[hallmarks/stem-cell-exhaustion]] — satellite cell depletion; primary upstream driver
- [[hallmarks/mitochondrial-dysfunction]] — mitochondrial decline in muscle fiber; ATP output reduction
- [[hallmarks/disabled-macroautophagy]] — autophagy-dependent myofibrillar proteostasis
- [[hallmarks/chronic-inflammation]] — IL-6/TNF-α suppress muscle protein synthesis and satellite cell function
- [[hallmarks/deregulated-nutrient-sensing]] — mTORC1 anabolic blunting in aged muscle
- [[processes/autophagy]] — mechanism by which autophagy maintains sarcomeric protein quality
- [[pathways/mtor]] — mTORC1 as the master regulator of muscle protein synthesis
- [[molecules/compounds/creatine]] — creatine supplementation as HGS-responsive intervention
- [[interventions/lifestyle/exercise]] — resistance training; primary evidence-based HGS intervention

## Footnotes

[^leong2015]: doi:10.1016/S0140-6736(14)62000-6 · Leong DP, Teo KK, Rangarajan S et al. (PURE investigators) · Lancet 386(9990):266–273, 2015 · observational (prospective, multinational) · n=139,691; 17 countries; median 4.0-yr follow-up · all-cause mortality HR 1.16 (95% CI 1.13–1.20) per 5-kg lower HGS; CV mortality HR 1.17 (1.11–1.24); HGS stronger predictor than systolic BP · model: community-dwelling adults 35–70 yrs, 4 continents · archive: repository HTML page obtained (not full results tables); key HRs cross-confirmed via Celis-Morales 2018 citations of PURE findings (PMID 25982160) · 100th citation percentile (1,769 citations)

[^celismorales2018]: doi:10.1136/bmj.k1651 · Celis-Morales CA, Welsh P, Lyall DM et al. · BMJ 361:k1651, 2018 · observational (prospective cohort) · n=502,293 UK Biobank participants; ages 40–69 yr; mean follow-up 7.1 yr (range 5.3–9.9 yr) · all-cause mortality HR per 5-kg lower HGS: 1.20 (95% CI 1.17–1.23) women; 1.16 (1.15–1.17) men; CV mortality HR: 1.19 (1.13–1.25) women; 1.22 (1.18–1.26) men (fully adjusted model, excluding events in first 2 yr) · HRs grip vs. systolic BP: grip showed stronger association with all-cause and CV mortality than systolic BP per SD · muscle weakness cutoff: <26 kg men, <16 kg women (FNIH definition) · model: UK Biobank community adults · archive: local PDF available (open access PMID 29739772)

[^cruzjentoft2019]: doi:10.1093/ageing/afy169 · Cruz-Jentoft AJ, Bahat G, Bauer J et al. (EWGSOP2) · Age and Ageing 48(1):16–31, 2019 · systematic-review + consensus guideline · EWGSOP2 consensus: HGS cutoffs for low muscle strength — men <27 kg, women <16 kg (Table 3, p.24, confirmed against local PDF); F-A-C-S diagnostic algorithm; Jamar dynamometer recommended; HGS peaks ~age 40; strength loss 1.5–5%/yr after 50 · model: expert consensus based on European population normative data · archive: local PDF available at  · 100th citation percentile (12,879 citations)

[^ling2010]: doi:10.1503/cmaj.091278 · Ling CHY, Taekema D, de Craen AJM, Gussekloo J, Westendorp RGJ, Maier AB · CMAJ 182(5):429–435, 2010 · observational (prospective cohort — Leiden 85-plus study) · n=555; age 85 at baseline; 65% women; follow-up range 8.5–10.5 yr; 444/555 (80%) deceased by end · lowest tertile HGS at age 85: HR 1.35 (95% CI 1.00–1.82, p=0.047) all-cause mortality; at age 89: HR 2.04 (1.24–3.35, p=0.005) and HR 1.73 (1.11–2.70, p=0.016) for lowest two tertiles; greatest relative 4-yr HGS loss: HR 1.72 (1.07–2.77, p=0.026) · dynamometer: JAMAR (dominant hand, standing, arm parallel to body) · model: community-dwelling oldest-old (all 85-yr-old inhabitants of Leiden, Netherlands) · archive: local PDF available (PMID 20142372)

[^granic2016]: doi:10.1371/journal.pone.0163183 · Granic A, Davies K, Jagger C, Kirkwood TBL, Syddall HE, Sayer AA · PLoS ONE 11(9):e0163183, 2016 · observational (prospective longitudinal — Newcastle 85+ study) · n=845 (319 men, 526 women); 4 waves over 5 yr · linear annual HGS decline in men: −1.13 (SE 0.8) kg/yr (time-only model); women: curvilinear, accelerating by −0.06 (SE 0.02) kg per follow-up year above initial loss; 5-yr mean absolute change: men −5.27 (SD 4.90) kg, women −3.14 (SD 3.41) kg; high physical activity associated with 0.95 kg/yr slower decline in men · dynamometer: Takei A5401 digital (standing position) · model: community-dwelling adults aged ~85, northeast England · archive: local PDF available (gold OA PMID 27637107)

[^bohannon2019]: doi:10.5014/ajot.2019.029538 · Bohannon RW, Wang YC, Yen SC, Grogan KA · Am J Occup Ther 73(2):7302205080p1–7302205080p7, 2019 · observational (cross-sectional normative; secondary data analysis) · n=13,918 (NHANES 2011–2014, ages 6–80) + 3,594 (NIH Toolbox, ages 6–80) · confirms normative differences by dominant/non-dominant side, sex, and age group; caution: paper concludes NHANES values "cannot recommend for broad application as reference norms" due to protocol differences from ASHT/Roberts 2011 standards · model: US community-dwelling noninstitutionalized population · archive: PMC6436115 (PMID 30915969)

[^farmer2019]: doi:10.1161/JAHA.118.011638 · Farmer RE, Mathur R, Schmidt AF et al. · J Am Heart Assoc 8(13):e011638, 2019 · observational cohort + Mendelian randomization · n=UK Biobank (~500,000) · MR: low genetically predicted HGS associated with mortality HR range 1.08–1.19; sarcopenic obesity carries higher mortality than either condition alone · model: UK adults · archive: download pending (gold OA); DOI confirmed (PMID 31221000)

[^park2022mr]: doi:10.1016/j.amjcard.2021.08.061 · Park S, Lee S, Kim Y et al. · Am J Cardiol 162:56–64, 2022 · Mendelian randomization (two-sample) · genetically predicted poor HGS: OR 1.128 (95% CI 1.041–1.222) for myocardial infarction/cardiovascular fatality endpoints (paper title: "Relation of Poor Handgrip Strength or Slow Walking Pace to Risk of Myocardial Infarction and Fatality") · model: UK Biobank + FinnGen summary statistics · archive: not_oa (PMID 34903347) — OR and exact endpoint not verified against full text #gap/no-fulltext-access

[^su2024]: doi:10.1007/s40520-024-02855-y · Su Y, Zhang Y, Zhang D, Xu J · Aging Clin Exp Res 36(1):196, 2024 · Mendelian randomization (bidirectional, univariate + multivariate) · higher left-hand HGS: reduced chronic bronchitis risk OR 0.35 (p=0.03), reduced asthma risk OR 0.78 (p=0.04) · model: MR using UK Biobank HGS GWAS instruments · archive: not checked (PMID 39395132)
