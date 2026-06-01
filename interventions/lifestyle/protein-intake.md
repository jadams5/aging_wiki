---
type: intervention
aliases: [dietary protein, protein dosing, protein adequacy, high-protein diet, protein-during-deficit]
mode: dietary
mechanisms: [mps-stimulation, anabolic-protein-support, leucine-sensing]
targets: []
target-hallmarks: ["[[stem-cell-exhaustion]]", "[[loss-of-proteostasis]]", "[[deregulated-nutrient-sensing]]"]
target-pathways: ["[[mtor]]", "[[ampk]]", "[[insulin-igf1]]"]
human-evidence-level: strong
clinical-stage: implemented
safety-profile: well-established
translation-gap: human-evidence-strong
next-experiment: "Head-to-head RCT of low protein (0.8 g/kg, CR-style, IGF-1-lowering) vs high protein (≥1.6 g/kg, lean-mass-preserving) over ≥5 years in adults aged 50–70, with all-cause mortality + biological-age clock + lean-mass + physical-function co-primary endpoints: this is the only study design that can resolve the longevity-pathway vs anabolic-protection tradeoff at the hard-endpoint level."
clinical-trials-active: null
literature-checked-through: 2026-05-20
verified: true
verified-date: 2026-05-20
verified-by: claude
verified-scope: "Tier 1 papers (Morton 2018, Longland 2016, Bauer 2013, Antonio 2016a/b, Levine 2014) verified via PubMed abstract + PMC HTML where available; Moore 2015 and Mamerow 2014 verified via PubMed abstract; Jäger 2017, Helms 2014, Nunes 2022 verified via PubMed abstract; Tagawa 2022 identified and integrated (previously flagged as gap/unsourced); Shams-White 2017 and Lim 2021 verified via PubMed abstract; Bauer 2013 and Deutz 2014 verified via abstract/consensus framing; full PDFs not locally downloaded — PMC HTML used for Morton 2018 and Levine 2014 quantitative claims"
---

# Dietary protein intake

Dietary protein intake is the foundational nutritional intervention for preserving skeletal muscle mass, strength, and physical function with aging. Multiple independent expert bodies ([[PROT-AGE Study Group]], [[ESPEN]]) and a high-powered systematic review + meta-analysis (Morton 2018, n=1,863 across 49 RCTs) converge on a recommendation of **1.0–2.4 g/kg/day** depending on age, health status, and training context — substantially above the long-standing RDA of 0.8 g/kg/day which was calibrated to prevent nitrogen-balance deficiency in sedentary adults, not to optimize musculoskeletal aging. The 1.6 g/kg/day figure is particularly well-supported as the plateau above which additional protein yields no further resistance-training-induced lean-mass gains in pooled RCT data, and the 2.4 g/kg/day figure emerges from the deficit-phase RCT evidence (Longland 2016). This page is the canonical source for protein dose claims referenced elsewhere in this wiki; pages that previously carried uncited "1.6–2.0 g/kg" recommendations should link here.

---

## Dose recommendations by population

| Population | Recommended range | Rationale | Key sources |
|---|---|---|---|
| Healthy adults (sedentary) | 0.8 g/kg/day | RDA: minimum to prevent nitrogen-balance deficiency; not optimized for aging | IOM DRI reference |
| Healthy older adults (≥65 yr) | 1.0–1.2 g/kg/day | Counteracts anabolic resistance; PROT-AGE consensus | [^bauer2013] [^deutz2014] |
| Older adults with acute/chronic illness or frailty | 1.2–1.5 g/kg/day | Higher catabolism; PROT-AGE + ESPEN consensus | [^bauer2013] [^deutz2014] |
| Resistance-training adults (any age) | 1.4–2.0 g/kg/day | ISSN position: optimizes lean-mass gain + maintenance | [^jager2017] |
| Plateau for RT-induced lean-mass gain (pooled RCTs) | ~1.62 g/kg/day | Above this, meta-regression shows no additional FFM gain from supplementation | [^morton2018] |
| Resistance-training adults during energy deficit | 2.3–3.1 g/kg FFM (or ≥2.4 g/kg BW) | Preserve lean mass under aggressive deficit + high training volume | [^helms2014] [^longland2016] [^jager2017] |
| Older adults (≥65 yr) per-meal threshold | ~0.40 g/kg/meal (≥25–40 g/meal) | Greater per-meal dose needed vs young adults (~0.24 g/kg/meal) to maximally stimulate MPS | [^moore2015] |

**Renal exception (PROT-AGE / ESPEN):** Older adults with severe kidney disease (eGFR <30 mL/min/1.73 m²) not on dialysis should *not* follow the higher-protein recommendations; protein restriction to 0.6–0.8 g/kg/day is appropriate for this group to limit uremic solute burden [^bauer2013]. This is the population-specific carve-out from the otherwise consistent evidence for higher protein in aging.

---

## Mechanism — muscle protein synthesis and anabolic resistance

### mTORC1 / leucine-sensing pathway

After a protein-containing meal, circulating essential amino acids (EAAs) — led by leucine — activate skeletal muscle protein synthesis (MPS) via the mTORC1 pathway:

1. Leucine (and other branched-chain amino acids) is sensed by the SESN2/GATOR2/GATOR1 system on the lysosomal surface, which leads to Rag GTPase activation and mTORC1 recruitment to the lysosomal membrane.
2. Activated mTORC1 phosphorylates S6K1 (p70S6 kinase) and 4E-BP1, releasing 4E-BP1 inhibition of the cap-binding protein eIF4E and enabling ribosomal initiation of translational mRNAs encoding myosin, actin, and other contractile proteins.
3. The result is a transient ~1–3 hour burst of myofibrillar protein synthesis (MPS) above basal rates.

See [[../../pathways/mtor]] for the full mTORC1 pathway detail.

### Anabolic resistance in aging

With advancing age (typically evident by the 7th decade), skeletal muscle becomes less responsive to amino acid stimulation of MPS — a phenomenon termed **anabolic resistance** [^cuthbertson2005]. The primary defect appears to be upstream of mTOR: reduced activation of mTOR/S6K1 and increased NF-κB signaling in response to identical EAA doses [^cuthbertson2005]. The functional consequence is that older adults require a higher absolute and relative leucine dose per meal to achieve the same MPS response as younger adults.

**Quantification from meta-regression (Moore 2015):** To maximally stimulate MPS in a single meal, older men require approximately **0.40 ± 0.19 g/kg body weight** (~25–35 g protein for a 65–80 kg older adult, depending on protein quality/leucine content), compared to approximately **0.24 ± 0.06 g/kg body weight** in young men — a ~67% higher per-meal requirement [^moore2015]. Expressed relative to lean body mass (LBM), the same thresholds are approximately **0.60 ± 0.29 g/kg LBM** (older) vs **0.25 ± 0.13 g/kg LBM** (young); the LBM-normalized difference is statistically significant (p<0.01) while the body-weight-normalized difference approached but did not reach significance (p=0.055), reflecting high variance in older-adult response.

The anabolic resistance framing explains why older-adult consensus guidelines (PROT-AGE, ESPEN) recommend protein intakes substantially higher than the RDA, and why spreading protein intake evenly across meals (see Distribution section below) is emphasized for this age group.

Underlying mechanisms for anabolic resistance include:

- Reduced mTOR/S6K1 signalling per unit leucine exposure
- Elevated post-absorptive muscle protein breakdown rate
- Impaired splanchnic extraction (the liver extracts a greater fraction of dietary amino acids in older adults)
- Increased NF-κB/inflammatory signaling interfering with insulin and IGF-1 downstream signalling

Cross-link: [[../../processes/replicative-senescence]] (myonuclei depletion context); [[../../hallmarks/stem-cell-exhaustion]] (satellite cell contribution to anabolic response is impaired in aged muscle).

---

## Evidence — landmark RCTs and meta-analyses

### Morton 2018 — meta-analysis establishing the ~1.62 g/kg plateau

Morton et al. 2018 (*British Journal of Sports Medicine*) conducted a systematic review, meta-analysis, and meta-regression of 49 RCTs (n=1,863 total participants) examining protein supplementation on resistance-exercise-training (RET)-induced gains in fat-free mass (FFM) and 1-repetition-maximum (1RM) strength in healthy adults [^morton2018].

Key findings:
- Protein supplementation significantly increased FFM gains with RET vs RET + placebo: +0.30 kg FFM (95% CI 0.09 to 0.52 kg).
- **Protein dose plateau:** meta-regression identified that supplementation beyond a total daily protein intake of **~1.62 g/kg/day resulted in no further RET-induced gains in FFM**. This is the basis for the widely cited "1.6 g/kg ceiling" for lean-mass-gain purposes.
- Strength gains: +2.49 kg in 1RM with protein supplementation vs placebo.
- Age moderation: protein supplementation was less effective in older adults (−0.01 kg FFM per year of increasing age, p=0.002), consistent with anabolic resistance.
- More effective in already-resistance-trained individuals vs untrained (+0.75 kg FFM, p=0.03).

**Limitation:** The ~1.62 g/kg plateau is a meta-regression estimate across studies with different protein sources, training protocols, and populations. It applies to supplementation *on top of habitual intake* in the context of resistance training; it should not be interpreted as the dose-optimum for lean-mass preservation in older adults who are not resistance training.

### Nunes 2022 — updated meta-analysis with age stratification

Nunes et al. 2022 (*Journal of Cachexia, Sarcopenia and Muscle*, n=74 RCTs) refined the Morton 2018 findings with age-stratified analyses [^nunes2022]:

- **Younger adults (<65 yr):** significant LBM effect at ≥1.6 g/kg/day during resistance exercise — consistent with Morton 2018.
- **Older adults (≥65 yr):** significant LBM effect already apparent at **1.2–1.59 g/kg/day**, suggesting the plateau may be lower in this age group (or alternatively, that older adults start from a lower habitual intake baseline, making supplementation more impactful at lower absolute doses).
- Strength effects: modest SMD improvements in lower-body strength at ≥1.6 g/kg/day.
- Physical function tests: "only marginal" improvements from protein supplementation during resistance training.

This represents a modest refinement over Morton 2018, not a contradiction: the 1.6 g/kg ceiling for FFM gain in pooled adults is not overturned, but older adults appear to show lean-mass benefit at slightly lower doses.

### Longland 2016 — highest protein during energy deficit gains lean mass

Longland et al. 2016 (*American Journal of Clinical Nutrition*, n=40 young men) randomized participants to either 2.4 g/kg/day (high protein, PRO arm) or 1.2 g/kg/day (control, CON arm) over 4 weeks of a ~40% energy deficit (33 ± 1 kcal/kg lean body mass) combined with intense exercise (resistance training + HIIT, 6 days/week) [^longland2016]:

- Lean mass change: PRO arm **+1.2 ± 1.0 kg** vs CON arm **+0.1 ± 1.0 kg** (p<0.05)
- Fat mass change: PRO arm **−4.8 ± 1.6 kg** vs CON arm **−3.5 ± 1.4 kg** (p<0.05)
- The high-protein arm *gained* lean mass while losing fat, an outcome that contradicts the common assumption that caloric restriction inevitably causes both fat and muscle loss when training volume is high.

**Caveats:** n=40 in young men only; 4-week duration; exercise volume (6 days/week) was very high and unlikely representative of general population. The 2.4 g/kg dose is at the upper bound of the ISSN general recommendation and at the lower bound of the Helms 2014 deficit-specific recommendation (2.3–3.1 g/kg FFM). #gap/needs-replication in older adults during deficit.

### Bauer 2013 (PROT-AGE) — older adult consensus

Bauer et al. 2013 (*Journal of the American Medical Directors Association*, PROT-AGE Study Group position paper) reviewed the evidence and recommended [^bauer2013]:

- Healthy older adults: **≥1.0–1.2 g/kg/day** (above the 0.8 g/kg RDA)
- Older adults exercising regularly: **≥1.2 g/kg/day**
- Older adults with acute or chronic illness: **1.2–1.5 g/kg/day**
- Exception: severe kidney disease (eGFR <30) not on dialysis

This was the first major consensus document explicitly stating that the 0.8 g/kg RDA was inadequate for aging adults and providing a specific evidence-based higher range.

### Deutz 2014 (ESPEN) — independent European consensus

Deutz et al. 2014 (*Clinical Nutrition*, ESPEN Expert Group) independently reached near-identical conclusions [^deutz2014]:

- Healthy older adults: **1.0–1.2 g/kg/day**
- Malnourished or at-risk: **1.2–1.5 g/kg/day** (more for severe illness)
- Physical activity recommended alongside protein for optimal outcomes

The convergence of PROT-AGE and ESPEN on nearly identical ranges (published 1 year apart, developed independently) substantially strengthens the older-adult recommendation.

### Jäger 2017 (ISSN Position Stand) — field consensus for active adults

Jäger et al. 2017 (*Journal of the International Society of Sports Nutrition*, ISSN Position Stand) consolidated the sports-nutrition consensus [^jager2017]:

- Active adults (build/maintain muscle): **1.4–2.0 g/kg/day**
- During energy deficit (resistance-trained): **2.3–3.1 g/kg body weight per day** to maximize lean-mass retention (note: Jäger 2017 expresses this as g/kg body weight, not g/kg lean body mass; Helms 2014 uses g/kg lean body mass for the same range — Helms' FFM-normalized figure is numerically higher than Jäger's BW-normalized figure for the same individual)
- Note: protein above 3.0 g/kg/day may have additional body-composition benefits in resistance-trained individuals

### Helms 2014 — evidence-based recommendations during cutting

Helms et al. 2014 (*Journal of the International Society of Sports Nutrition*, review for natural bodybuilders preparing for competition under energy deficit) recommended [^helms2014]:

- During caloric restriction for competition: **2.3–3.1 g/kg lean body mass per day** protein
- Per-meal distribution: 0.4–0.5 g/kg body weight/meal around training sessions
- Weekly weight-loss target: ~0.5–1% body weight/week to maximize lean-mass retention

This is primarily a narrative review (not a meta-analysis) but draws on the available RCT literature. It established the ~2.3–3.1 g/kg FFM range that Jäger 2017 subsequently incorporated into the ISSN position stand.

---

## Distribution and the leucine threshold

Total daily protein intake is only part of the story; **within-day distribution** and per-meal leucine content independently modulate 24-hour MPS.

### Evenly distributed intake is superior to skewed intake

Mamerow et al. 2014 (*Journal of Nutrition*, n=8) compared even protein distribution (~30 g × 3 meals) vs skewed distribution (~11 g breakfast + ~16 g lunch + ~63 g dinner) at equal total daily protein intake [^mamerow2014]:

- 24-hour mixed-muscle protein fractional synthesis rate (FSR): **EVEN 0.075 ± 0.006 %/h vs SKEWED 0.056 ± 0.006 %/h** — a **25% higher 24-h MPS** in the evenly distributed condition.

The mechanistic explanation is that MPS follows the leucine-sensing curve: a single large dose at dinner activates mTORC1 strongly for ~2–3 hours, but the low-protein breakfast and lunch fail to cross the anabolic threshold and leave the remaining ~18 hours of the day below MPS stimulation. Even distribution keeps all three post-prandial windows above threshold.

**Practical implication:** 3–4 meals per day each containing 25–40 g of protein (equivalent to 0.24–0.40 g/kg for a 65–80 kg person) is preferable to concentrated-protein evening diets, particularly in older adults.

### Leucine content per meal

The leucine content of a protein source determines whether a given gram-dose crosses the anabolic threshold. The threshold for maximal MPS stimulation in younger adults is approximately **2–3 g leucine per meal**; in older adults (because of anabolic resistance) it is higher, estimated at **≥2.5–3.0 g leucine/meal** from mechanistic studies [^moore2015] [^cuthbertson2005].

Leucine content by source (approximate, per 25 g total protein):
- Whey protein concentrate: ~2.7 g leucine (high leucine; most commonly studied in MPS trials)
- Chicken breast: ~2.1 g leucine
- Beef: ~2.0 g leucine
- Eggs: ~1.8 g leucine
- Soy protein isolate: ~1.6 g leucine (lower bioavailability leucine)
- Plant proteins generally: 1.3–1.6 g leucine per 25 g protein (lower → requires higher gram dose to reach leucine threshold)

For plant-based diets, reaching the leucine threshold per meal requires either higher total protein per meal or leucine-fortification strategies. This is not an argument against plant protein overall — the Lim 2021 meta-analysis found animal and plant proteins produced comparable lean-mass outcomes when total protein was matched [^lim2021].

---

## Tradeoffs and competing-direction evidence

The protein intake decision for an aging individual involves a genuine tradeoff that this page does not resolve — it documents both directions honestly.

### Higher protein → elevated IGF-1 and mTORC1 signalling (longevity-pathway concern)

Protein intake is the primary dietary driver of circulating IGF-1. Fontana et al. (2008, documented at [[../../biomarkers/igf-1-biomarker]]) showed that reducing protein from ~1.67 g/kg to ~0.95 g/kg dropped IGF-1 by ~22% over 3 weeks in calorie-restricted subjects, and only protein reduction (not caloric restriction per se) drove the IGF-1 decline. Elevated IGF-1 and chronic mTORC1 activation are the very targets that rapamycin and other longevity-pathway interventions attempt to suppress — see [[../../pathways/mtor]].

This creates a direct tension:
- **Lean-mass-preservation goal:** favours ≥1.6 g/kg/day (Morton 2018 plateau; Longland 2016 deficit data)
- **Longevity-pathway-modulation goal:** favours lower protein (~0.8–1.0 g/kg/day) to reduce IGF-1 and allow mTOR suppression

The wiki does not take a position on which goal should dominate — the right choice depends on the individual's age, sarcopenia risk, caloric deficit context, and whether they are simultaneously using mTOR-inhibiting interventions such as [[../../molecules/compounds/rapamycin]] or practicing [[caloric-restriction]].

### Levine 2014 — observational association of high protein with mortality (age-stratified, contested)

Levine et al. 2014 (*Cell Metabolism*, n=6,381 NHANES III adults aged 50+, 18-year mortality follow-up) found that high protein intake (>20% calories from protein) in the 50–65 age group was associated with a **74% increase in all-cause mortality** (HR 1.74; 95% CI 1.02–2.97; the paper's own abstract rounds this to "75%") and a **~4.3-fold increase in cancer death risk** (HR 4.33; 95% CI 1.96–9.56; the paper's own abstract rounds this to "4-fold") vs low protein (<10% calories) [^levine2014]:

- **Crucially, this relationship inverted in adults ≥65**: high protein was protective against cancer and all-cause mortality in the oldest age group.
- Plant protein source attenuated or abolished the associations with animal protein.
- The analysis relied on a **single 24-hour dietary recall** — a high-noise, high-recall-bias measure.

**Epistemic caveats for Levine 2014:**
1. Single-timepoint dietary assessment with known recall bias (people under-report protein)
2. Observational design — confounding by illness (sick individuals may eat less protein, creating reverse-causation bias)
3. The inversion at ≥65 directly contradicts the "high protein is universally harmful" interpretation
4. NHANES is a cross-sectional survey, not a prospective dietary-intervention cohort

The Levine 2014 finding is frequently cited but should be weighted as **low-to-moderate epistemic quality** for any causal claim about protein intake and mortality. It adds to the prior that IGF-1/mTOR mechanistic concerns are not purely theoretical, but does not override the RCT lean-mass evidence.

#gap/contradictory-evidence — the observational association (Levine 2014) and the RCT lean-mass evidence (Morton 2018, Longland 2016) point in opposite directions for protein intake in middle-aged adults; no RCT with mortality as a primary endpoint has been conducted.

### Methionine restriction as an alternative framing

[[../../interventions/lifestyle/methionine-restriction]] offers a conceptually cleaner way to reduce mTOR activation and IGF-1 without globally reducing protein: methionine is the primary dietary amino acid driving IIS/mTOR activation and cancer-protective effects of protein restriction in animal models. A methionine-restricted diet that preserves total EAA and leucine intake could theoretically preserve MPS while attenuating the longevity-pathway downside of high protein. This is untested in humans at scale. #gap/needs-human-replication

---

## Safety

### Renal function in healthy individuals

The concern that high protein intake damages kidneys in healthy individuals is not supported by current evidence. Antonio et al. 2016 (JISSN crossover, n=12 resistance-trained men comparing 3.3 vs 2.6 g/kg/day over 8 weeks) found no adverse effects on blood lipids, liver function, or kidney function markers [^antonio2016a]. A companion one-year crossover study (n=14; 3.32 vs 2.51 g/kg/day) similarly found no harmful effects on renal or hepatic markers over 12 months [^antonio2016b].

The canonical consensus is that high protein intake poses no renal risk in **healthy individuals without pre-existing kidney disease**. The RDA was not calibrated to protect kidneys; rather, the eGFR-based carve-out for advanced CKD (eGFR <30) is well-established and reflects a different physiological state where uremic solute accumulation is the primary concern.

### Bone health — the old "acid-load" concern is not supported

An earlier theoretical concern held that high protein intake causes urinary calcium excretion (via its acid load) and therefore leaches calcium from bone. This concern is not supported by current meta-analytic evidence. Shams-White et al. 2017 (*American Journal of Clinical Nutrition*, systematic review + meta-analysis, National Osteoporosis Foundation) found **no adverse effects of higher protein intakes on bone health** and identified a modest positive effect on lumbar spine BMD (+0.52%, 95% CI 0.06–0.97%) [^shamswhite2017]. Higher protein may actually be mildly bone-protective, possibly via calcium co-absorption with protein and IGF-1-mediated osteoblast support.

---

## Recency literature (R25 search, 2020–2026)

**Mandatory R25 recency search performed 2026-05-20.** PubMed eutils queries: (`"protein intake" OR "dietary protein") AND (sarcopenia OR "lean mass") AND ("meta-analysis" OR "randomized controlled trial") AND aging`, date range 2020–2026.

### Nunes 2022 — key update (integrated above)

The highest-impact post-2020 paper is Nunes et al. 2022 (JCSM, n=74 RCTs; integrated in the Evidence section above). It does not overturn Morton 2018 but provides age-stratified nuance: older adults show LBM benefit at 1.2–1.59 g/kg/day, younger adults at ≥1.6 g/kg/day.

### Recent RCT landscape (2020–2026)

Recent small trials (PMID 41931963 — Biersteker 2026, frail older adults + resistance training + protein; PMID 41780731 — Ceglia 2026 AJCN, whey protein + alkali in healthy older adults) continue to accumulate but are small (n<100) and represent incremental rather than paradigm-changing findings. No 2020–2026 paper surfaced that contradicts the Morton 2018 plateau estimate or the Longland 2016 deficit findings at a meta-analytic level.

**Tagawa 2022 (confirmed):** Tagawa M, Kojima Y, Kondo H et al. (*Sports Medicine Open* 2022;8(1):107 · doi:10.1186/s40798-022-00508-w · PMID 36057893) conducted a dose-response meta-analysis of 82 RCTs on protein intake and muscle strength (strength only, not FFM). Key finding: muscle strength gain was dose-dependent up to **1.5 g/kg BW/day** with resistance training; no further strength gains above this threshold. **This does not contradict Morton 2018** (which measures FFM, not strength, and places the FFM plateau at 1.62 g/kg), but the Tagawa strength-plateau at 1.5 g/kg is a distinct finding that slightly narrows the range of doses where incremental gain is expected. Both plateaus are within the range of uncertainty in each other's meta-regression CIs. The `#gap/unsourced` tag for this reference is resolved.

**No landmark 2023–2026 contradictory evidence identified.** The overall conclusion — that 1.0–1.2 g/kg is appropriate for older adults, 1.6 g/kg is the plateau for RT-induced lean-mass gain, and ≥2.3 g/kg FFM is recommended during aggressive energy deficit with RT — is supported by the current literature base through the recency search window.

`literature-checked-through: 2026-05-20`

---

## Limitations and gaps

- `#gap/long-term-unknown` — the landmark RCTs establishing the 1.6–2.4 g/kg recommendations are 4–16 weeks in duration. The effects of chronically elevated protein intake (months to years) on lean-mass trajectory, kidney function, bone health, cancer risk, and longevity biomarkers are not directly tested at this dose range in aging populations.
- `#gap/needs-human-replication` — Longland 2016 (the primary deficit-phase RCT for 2.4 g/kg) enrolled only young men (n=40, 4 weeks). Replication in older adults (≥50) during energy deficit is sparse; the anabolic resistance literature suggests older adults may have an even greater need for high protein during deficit, but direct RCT evidence is thin.
- `#gap/needs-replication` — Moore 2015 per-meal dose meta-regression (0.40 g/kg/meal for older adults) is based on a limited number of isotope-tracer studies with small n; the exact threshold is a meta-regression estimate with wide individual variability (SD 0.19 g/kg reported).
- `#gap/contradictory-evidence` — Levine 2014 observational association of high animal protein with cancer and all-cause mortality in ages 50–65 is not resolved by any RCT; the mechanistic concern (IGF-1/mTOR elevation) is real, but whether it translates to mortality risk at 1.6 g/kg intakes (as opposed to the >20% caloric protein in Levine's "high" category) is unknown.
- `#gap/dose-response-unclear` — the optimal protein dose during energy restriction in adults ≥65 is particularly poorly characterized; Longland 2016's 2.4 g/kg finding is from young men and may not generalize.
- **Tagawa 2022 resolved** — identified as Tagawa M et al., *Sports Medicine Open* 2022;8(1):107 (doi:10.1186/s40798-022-00508-w). Shows strength gain plateau at 1.5 g/kg/day (vs Morton 2018 FFM plateau at 1.62 g/kg). Integrated in Recency section above. `#gap/unsourced` tag retired.

---

## Cross-references

- [[sarcopenia]] — primary phenotype this intervention prevents/attenuates
- [[frailty]] — downstream phenotype; protein adequacy is a key modifiable risk factor
- [[../../tissues/skeletal-muscle]] — the tissue whose proteostasis this intervention directly supports
- [[../../hallmarks/stem-cell-exhaustion]] — satellite cell activation is part of the protein-adequate MPS response
- [[../../hallmarks/loss-of-proteostasis]] — muscle protein turnover balance; protein intake counteracts net protein breakdown
- [[../../pathways/mtor]] — the primary anabolic signalling pathway activated by leucine/EAA
- [[../../biomarkers/igf-1-biomarker]] — IGF-1 elevation is the tradeoff signal for high protein intake (Fontana 2008 documented there)
- [[../../biomarkers/grip-strength-biomarker]] — grip strength is a validated functional readout of lean mass and sarcopenia risk
- [[../../interventions/lifestyle/caloric-restriction]] — the opposing dietary strategy on the mTOR/IGF-1 axis
- [[../../interventions/lifestyle/methionine-restriction]] — a more selective approach to reducing mTOR signalling without reducing total protein
- [[../../interventions/lifestyle/exercise]] — resistance training is the primary synergistic partner for protein intake in preserving lean mass
- [[../../interventions/lifestyle/intermittent-fasting]] — compatible with high protein per eating window; timing interaction not fully characterized

---

## Footnotes

[^morton2018]: doi:10.1136/bjsports-2017-097608 · Morton RW, Murphy KT, McKellar SR, Schoenfeld BJ, Henselmans M, Helms E, Aragon AA, Devries MC, Banfield L, Krieger JW, Phillips SM · *British Journal of Sports Medicine* 2018;52(6):376–384 · PMID 28698222 · systematic-review + meta-analysis · n=1,863 (49 RCTs) · resistance-trained healthy adults · protein supplementation plateau at ~1.62 g/kg/day for FFM gain; +0.30 kg FFM (95% CI 0.09–0.52) over placebo; age moderates effect (−0.01 kg/yr, p=0.002) · note: 2020 erratum (PMID 32943392) corrected a competing-interest declaration only (Schoenfeld advisory board for Dymatize Nutrition) — no numerical changes · local PDF: pending (PMC5867436)

[^longland2016]: doi:10.3945/ajcn.115.119339 · Longland TM, Oikawa SY, Mitchell CJ, Devries MC, Phillips SM · *American Journal of Clinical Nutrition* 2016;103(3):738–746 · PMID 26817506 · rct · n=40 young men (n=20/group) · 2.4 vs 1.2 g/kg/day protein × 4 weeks × ~40% energy deficit × 6×/week RT+HIIT · PRO: +1.2±1.0 kg lean mass, −4.8±1.6 kg fat; CON: +0.1±1.0 kg lean mass, −3.5±1.4 kg fat (p<0.05 both) · local PDF: not_oa

[^bauer2013]: doi:10.1016/j.jamda.2013.05.021 · Bauer J, Biolo G, Cederholm T et al. (PROT-AGE Study Group) · *Journal of the American Medical Directors Association* 2013;14(8):542–559 · PMID 23867520 · systematic-review + expert-consensus · older adults ≥65 · recommends ≥1.0–1.2 g/kg/day (healthy), 1.2–1.5 g/kg (illness/frailty), exception for eGFR<30 · model: human · local PDF: pending

[^deutz2014]: doi:10.1016/j.clnu.2014.04.007 · Deutz NE, Bauer JM, Barazzoni R et al. (ESPEN Expert Group) · *Clinical Nutrition* 2014;33(6):929–936 · PMID 24814383 · systematic-review + expert-consensus · older adults · recommends 1.0–1.2 g/kg/day (healthy), 1.2–1.5 g/kg (malnourished/at-risk) + regular exercise · model: human · local PDF: pending

[^jager2017]: doi:10.1186/s12970-017-0177-8 · Jäger R, Kerksick CM, Campbell BI et al. (ISSN) · *Journal of the International Society of Sports Nutrition* 2017;14:20 · PMID 28642676 · expert-consensus (position stand) · active adults + resistance-trained deficit-phase · 1.4–2.0 g/kg/day general; 2.3–3.1 g/kg/day during deficit in resistance-trained · model: human · local PDF: pending (OA gold)

[^helms2014]: doi:10.1186/1550-2783-11-20 · Helms ER, Aragon AA, Fitschen PJ · *Journal of the International Society of Sports Nutrition* 2014;11:20 · PMID 24864135 · review · natural bodybuilding contest preparation; deficit context · 2.3–3.1 g/kg FFM protein during caloric restriction; 0.4–0.5 g/kg/meal around training · model: human · local PDF: pending (OA gold)

[^moore2015]: doi:10.1093/gerona/glu103 · Moore DR, Churchward-Venne TA, Witard O, Breen L, Burd NA, Tipton KD, Phillips SM · *The Journals of Gerontology. Series A, Biological Sciences and Medical Sciences* 2015;70(1):57–62 · PMID 25056502 · PMC8978023 · meta-regression of isotope-tracer MPS studies · young (~22 yr) vs older (~71 yr) men · per-meal dose for maximal MPS (body weight): older 0.40±0.19 g/kg (p=0.055 vs young) vs young 0.24±0.06 g/kg; expressed per LBM: older 0.60±0.29 g/kg LBM vs young 0.25±0.13 g/kg LBM (p<0.01) · model: human isotope-tracer studies · local PDF: pending

[^cuthbertson2005]: doi:10.1096/fj.04-2640fje · Cuthbertson D, Smith K, Babraj J et al. (Rennie MJ) · *FASEB Journal* 2005;19(3):422–424 · PMID 15596483 · in-vivo mechanistic · n=44 young + older men · older men showed reduced mTOR/S6K1/eIF4BP-1 activation and elevated NF-κB in response to EAA infusion vs young men; anabolic resistance defined · model: human · local PDF: pending

[^mamerow2014]: doi:10.3945/jn.113.185280 · Mamerow MM, Mettler JA, English KL et al. · *Journal of Nutrition* 2014;144(6):876–880 · PMID 24477298 · rct (crossover) · n=8 (36.9±3.1 yr) · even protein distribution (31.5/29.9/32.7 g across breakfast/lunch/dinner) vs skewed (10.7/16.0/63.4 g) at equal total daily protein · 24-h MPS FSR: EVEN 0.075±0.006%/h vs SKEWED 0.056±0.006%/h (+25%, p=0.003); maintained after 7 days of habituation · model: human · local PDF: pending

[^nunes2022]: doi:10.1002/jcsm.12922 · Nunes EA, Colenso-Semple L, McKellar SR et al. (Phillips SM) · *Journal of Cachexia, Sarcopenia and Muscle* 2022;13(2):795–810 · PMID 35187864 · systematic-review + meta-analysis · n=74 RCTs · older adults (≥65): LBM effect at 1.2–1.59 g/kg/day; younger adults (<65): LBM effect at ≥1.6 g/kg/day; strength SMD modest; physical function marginal · model: human · local PDF: pending

[^levine2014]: doi:10.1016/j.cmet.2014.02.006 · Levine ME, Suarez JA, Brandhorst S et al. (Longo VD) · *Cell Metabolism* 2014;19(3):407–417 · PMID 24606898 · PMC3988204 · observational (NHANES III, single 24-hr dietary recall) · n=6,381 aged 50+ (ages 50–65: n=3,039; ages 66+: n=3,342) · high protein (>20% kcal) in ages 50–65: HR 1.74 (95% CI 1.02–2.97) for all-cause mortality; HR 4.33 (95% CI 1.96–9.56) for cancer mortality vs low protein (<10% kcal) (abstract simplifies these to "75% increase" and "4-fold increase") · ages 66+: HR 0.72 (95% CI 0.55–0.94) all-cause mortality; HR 0.40 (95% CI 0.23–0.71) cancer mortality (protective) · plant protein attenuates associations · model: human observational · caveats: single-timepoint dietary recall, reverse causation risk · local PDF: pending

[^antonio2016a]: doi:10.1186/s12970-016-0114-2 · Antonio J, Ellerbroek A, Silver T, Vargas L, Peacock C · *Journal of the International Society of Sports Nutrition* 2016;13:3 · PMID 26778925 · rct (crossover, 2×8 weeks) · n=12 (11 completed) resistance-trained men · 3.3 vs 2.6 g/kg/day for 16 weeks · no adverse effects on blood lipids, liver, or kidney markers · local PDF: pending (OA gold)

[^antonio2016b]: doi:10.1155/2016/9104792 · Antonio J, Ellerbroek A, Silver T et al. · *Journal of Nutrition and Metabolism* 2016;2016:9104792 · PMID 27807480 · rct (crossover, 2×6 months) · n=14 resistance-trained men · 3.32 vs 2.51 g/kg/day for 1 year · no harmful effects on blood lipids, liver, or kidney function at very high protein intake · local PDF: pending

[^shamswhite2017]: doi:10.3945/ajcn.116.145110 · Shams-White MM, Chung M, Du M et al. (National Osteoporosis Foundation) · *American Journal of Clinical Nutrition* 2017;105(6):1528–1543 · PMID 28404575 · systematic-review + meta-analysis · higher protein: no adverse bone effects; modest positive lumbar spine BMD (+0.52%, 95% CI 0.06–0.97%); no significant effects at hip/femoral neck · model: human · local PDF: not_oa

[^lim2021]: doi:10.3390/nu13020661 · Lim MT, Pan BJ, Toh DWK et al. · *Nutrients* 2021;13(2):661 · PMID 33670701 · systematic-review + meta-analysis · animal vs plant protein sources during resistance training · comparable lean mass outcomes when total protein dose matched between source types · model: human · local PDF: pending (OA gold)
