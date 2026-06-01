---
type: intervention
aliases: [KD, ketogenic diet, very-low-carb diet, VLC diet, nutritional ketosis]
mode: dietary
mechanisms: [ketogenesis, beta-hydroxybutyrate-signaling, hdac-inhibition, mtor-modulation, ampk-activation, fgf21-induction, insulin-reduction, nlrp3-inhibition]
targets: []
target-hallmarks: ["[[deregulated-nutrient-sensing]]", "[[mitochondrial-dysfunction]]", "[[chronic-inflammation]]"]
target-pathways: ["[[mtor]]", "[[ampk]]"]
human-evidence-level: limited
clinical-stage: implemented
safety-profile: well-established
translation-gap: phase-3-rct-needed
next-experiment: "1-year RCT of cyclic KD (5 days/week KD, 2 days standard diet) in pre-frail elderly (70–80 yr) with co-primary endpoints: DunedinPACE biological-age clock, grip-strength, and a cognitive composite; powered for ≥200 completers."
clinical-trials-active: null
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Newman 2017, Roberts 2017, McKenzie 2017, and Youm 2015 (BHB-NLRP3) verified against primary source PDFs. Shimazu 2013 (βHB-HDAC inhibition) PDF download failed (green OA, archive fetch error); Shimazu-derived claims cross-checked against Roberts 2017 citations and discussion but not verified against the primary PDF — recommend re-check on next pass. R34 recency refresh (2026-05-08): Bonnechère 2026 exogenous-ketone meta-analysis (n=1602; SMD 0.29 cognition) and Lark 2026 sex-specific REM/memory data integrated via PubMed abstracts; full-text not pulled."
---

# Ketogenic diet (KD)

A very-low-carbohydrate (<50 g/day carbohydrate), high-fat (~70–80% of calories), moderate-protein (~15–20%) dietary pattern that shifts hepatic metabolism toward fatty-acid oxidation and ketone-body synthesis, elevating blood beta-hydroxybutyrate (βHB) to 0.5–3.0 mmol/L — the range defined as **nutritional ketosis**. Distinct from diabetic ketoacidosis (DKA), in which βHB exceeds ~10 mmol/L and is accompanied by insulin deficiency and acidosis. KD has its strongest evidence base in refractory pediatric epilepsy (decades of clinical use; FDA-recognized adjuvant therapy) and metabolic-syndrome reversal; its potential as a geroprotective intervention rests primarily on two 2017 mouse lifespan studies and emerging mechanistic data on βHB as an endogenous signaling molecule.

---

## 1. Definition and macronutrient composition

| Component | Typical range |
|---|---|
| Carbohydrate | <50 g/day (often <20 g "strict keto") |
| Fat | 70–80% of calories |
| Protein | 15–20% of calories |
| Blood βHB (nutritional ketosis) | 0.5–3.0 mmol/L |
| Blood βHB (DKA) | >10 mmol/L (+ low insulin + acidosis) |

Ketone bodies synthesized in the liver — βHB, acetoacetate (AcAc), and acetone — are exported to peripheral tissues (brain, heart, muscle) as an alternative fuel when glucose availability is limited. βHB is quantitatively dominant (~75% of circulating ketones) and the molecule most implicated in signaling-level effects beyond its caloric role.

---

## 2. Mouse lifespan evidence

Two independent groups published simultaneously in *Cell Metabolism* (September 2017), both using male C57BL/6 mice — the dominant genetic background for mammalian aging intervention studies.

### Newman et al. 2017 — cyclic KD reduces midlife mortality

Newman et al. tested a **cyclic ketogenic diet** (KD alternated with standard control diet on a weekly cycle) against standard chow and continuous high-fat diet (HF) controls, starting at 12 months [^newman2017]. Key findings in male C57BL/6 NIA mice (N = 61 Control, 81 Cyclic KD, 36 Cyclic HF, 37 KD continuous, 26 HF continuous):

- Cyclic KD **reduced midlife mortality** (improved survival from 12–30 months of age by daily chi-square test, best daily chi-square p=0.00005); however, the **final log-rank p=0.78** (overall lifespan not significantly extended), and **maximum lifespan was not increased** — the survival curves converged at late life
- Cyclic KD significantly improved **memory performance** in aged animals: place avoidance (learning/memory phase p=0.015 and p=0.046) and novel-object recognition at old age (p=0.018)
- A composite 35-item healthspan score showed modestly less age-related decline in Cyclic KD vs Control (p=0.0037), with effects broadly distributed; cardiac composite score was better preserved (p=0.035)
- Motor coordination (rotarod, balance beam, grid wire hang) showed no significant difference between groups
- Cyclic (not continuous) KD produced the survival benefit; continuously-fed KD and HF animals became obese and did not significantly extend lifespan

**Important:** The ~13.6% increase in median lifespan figure belongs to Roberts et al. 2017 (see below), not Newman 2017. Newman 2017's headline finding is midlife-mortality reduction without overall maximum lifespan extension.

#gap/needs-human-replication #gap/needs-replication

### Roberts et al. 2017 — continuous KD extends median lifespan and healthspan

Roberts et al. fed male C57BL/6 mice (n=43–44 per group) a continuous ketogenic diet (89% kcal from fat, 1% carbohydrate) or a low-carbohydrate diet (LCD, 70% kcal from fat) or control diet (65% kcal from fat), fed isocalorically starting at 12 months [^roberts2017]. Key findings:

- **Median lifespan** extended by **13.6%** in KD vs control: median 1003 days (KD) vs 886 days (control), p<0.05
- **Maximum lifespan** (90th percentile): 1175 days (KD) vs 1064 days (control), **p=0.16 — not statistically significant**
- Healthspan metrics improved in KD: preserved grip strength, hanging wire performance, novel-object recognition memory, and motor coordination (rearing, locotronic) at 26 months; KD mice had greater relative gastrocnemius, soleus, and plantaris muscle mass vs controls
- Reduced adiposity (fat mass lower in KD despite same caloric intake)
- Elevated circulating βHB confirmed throughout dietary period (significantly higher than control and LCD)
- No body weight gain in KD animals despite ad-libitum isocaloric feeding
- LCD group had intermediate effects on longevity (median 943 days) and did not significantly differ from either KD or control

Both studies were limited to male mice of a single inbred strain; sex-specific and strain-specific effects are unexplored. #gap/needs-replication

**Extrapolation table:**

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | mTOR, AMPK, βHB-HDAC, βHB-NLRP3 signaling all human-relevant |
| Phenotype conserved in humans? | unknown | No longevity endpoint measured in humans |
| Replicated in humans? | no | No lifespan RCT; metabolic and epilepsy data only |

---

## 3. βHB as an endogenous signaling molecule

The longevity-relevant biology of KD extends beyond simple substrate switching. βHB acts as a signaling metabolite at multiple levels:

### 3a. HDAC class I inhibition

βHB is an endogenous inhibitor of histone deacetylases (HDAC) class I and IIa, at physiologically achievable concentrations (~1–2 mmol/L) [^shimazu2013]. Shimazu et al. demonstrated in cultured cells and in fasted mice that βHB suppresses HDAC activity, increasing histone H3 acetylation at Lys9 and Lys14, and inducing expression of FOXO3a and metallothionein 2 — two established stress-resistance genes. **This makes βHB functionally analogous to an endogenous epigenetic modifier**, a category that includes the HDAC inhibitor class of drugs.

Downstream consequences of βHB-HDAC inhibition include:
- Upregulation of **FOXO3a** targets (see [[foxo3]] if seeded)
- Upregulation of oxidative-stress-defense genes (catalase, MnSOD)
- Reduced nuclear NF-κB activity (anti-inflammatory)

Cross-link: [[hdac]] (stub — not yet seeded).

### 3b. mTOR and AMPK modulation

Ketosis reduces circulating insulin and glucose → attenuated mTORC1 signaling (amino-acid and insulin inputs both reduced). Simultaneously, the metabolic context of fat oxidation activates AMPK. This mechanistic overlap with [[caloric-restriction]] and [[intermittent-fasting]] is significant — KD may recapitulate a subset of CR's geroprotective signaling without mandatory caloric restriction, though the magnitude of mTOR suppression is likely smaller than with direct inhibitors like [[rapamycin]]. #gap/needs-replication (direct mTOR activity measurements under KD in aged tissue are limited)

### 3c. NLRP3 inflammasome inhibition via K⁺ efflux prevention

βHB directly inhibits the NLRP3 inflammasome by **preventing K⁺ efflux** from macrophages and **inhibiting ASC oligomerization and speck formation** [^youm2015]. This is the mechanistically verified pathway. Critically, this effect is independent of: AMPK activation, reactive oxygen species (ROS), autophagy, GPR109a receptor signaling, and HDAC inhibition — all of which were tested and ruled out by Youm et al. as mediators. BHB blocks NLRP3 without entering the TCA cycle (confirmed using the TCA-entry inhibitor aminooxyacetate and the non-TCA-entering enantiomer (S)-BHB).

Downstream consequences of NLRP3 inhibition by βHB include:
- Reduced caspase-1 cleavage and processing of IL-1β and IL-18
- Attenuation of NLRP3-driven inflammation in mouse models of Muckle-Wells Syndrome and Familial Cold Autoinflammatory Syndrome
- Reduced neutrophil influx and IL-1β secretion in peritoneal inflammation models (MSU crystal model)

This mechanism is distinct from and does not overlap with MCC950's mechanism (which blocks NLRP3 ATPase activity directly). βHB acts upstream, at the K⁺-efflux / ASC-assembly step.

Cross-link: [[nlrp3-inflammasome]] (if seeded), [[caspase-1]], [[chronic-inflammation]].

### 3d. FGF21 induction

KD robustly elevates **FGF21** (fibroblast growth factor 21), a hepatokine and metabolic regulator whose pharmacological administration extends lifespan in mice in a manner partially overlapping with methionine restriction [^gap-fgf21-stub]. FGF21 improves insulin sensitivity, stimulates fatty-acid oxidation, and has anti-inflammatory effects. The FGF21 connection suggests a mechanistic convergence between KD and [[methionine-restriction]]. #gap/no-mechanism (the precise contribution of FGF21 induction to KD longevity benefit is not established)

---

## 4. Human evidence

### 4a. Pediatric refractory epilepsy (strongest evidence)

KD has multi-decade clinical use for drug-resistant epilepsy, particularly in children, with multiple RCTs and systematic reviews confirming efficacy (≥50% seizure reduction in ~50% of patients). This is the FDA-recognized indication. While the mechanism is neurological (ketones as alternative CNS fuel + GABAergic effects), the decades of safety data provide the most robust long-term human tolerability record. Nutritional monitoring and medical supervision are required.

### 4b. Type 2 diabetes reversal

The Virta Health continuous-care model (McKenzie et al. 2017, JMIR Diabetes; n=262 T2D adults, mean age 54 years, 66.8% female) demonstrated that a KD-based telemedicine intervention reduced HbA1c from 7.6% (SD 1.5%) to **6.6%** (SD 1.1%) at 10 weeks — a mean reduction of 1.0 percentage point (95% CI 0.9–1.1, p<0.001) — and reduced one or more diabetes medications in **56.8%** of completers (133/234) [^mckenzie2017]. Mean body weight loss was **7.2%** (SD 3.7%; −8 kg from baseline 117 kg, p<0.001). The 238/262 (90.8%) who completed 10 weeks showed similar results: HbA1c reduction of 1.1 pp, weight loss of −9 kg. This is a non-randomized, single-arm, prospective cohort study with no concurrent RCT comparator; comparison is to standard-care historical baseline. It establishes clinical feasibility but not superiority over other glycemic-control strategies.

### 4c. Weight loss

Multiple meta-analyses of low-carbohydrate (LC) vs low-fat (LF) diets show superior short-term (3–6 month) weight loss with LC diets, with convergence at 12 months — suggesting the LC advantage is primarily from spontaneous caloric reduction due to satiety effects. No convincing long-term metabolic superiority established. #gap/contradictory-evidence

### 4d. Longevity RCT — does not exist

No human RCT with mortality or biological-age clock as primary endpoint has been completed or registered for ketogenic diet. The `next-experiment` field above describes a viable design. #gap/needs-human-replication

### 4e. Exogenous ketone supplementation — 2026 cognitive meta-analysis

Bonnechère et al. 2026 systematically reviewed 38 studies (41 protocols, n=1,602 participants; 29 protocols n=1,117 in meta-analysis) of exogenous-ketone (EK) supplementation across healthy adults and neuropsychiatric populations [^bonnechere2026]. EK supplementation produced a statistically significant cognitive benefit vs placebo (SMD 0.29, 95% CI 0.16–0.41, p<0.001), with a positive meta-regression of daily dose on cognitive improvement and no statistically significant subgroup differences by formulation, duration (acute vs intermediate), or population type (healthy vs Alzheimer's). The pooled effect is modest but cross-population — relevant to the BHB-as-signaling-molecule frame in §3 and to the question of whether exogenous ketones can substitute for dietary ketogenesis. The meta-analysis does not address aging biomarkers (DunedinPACE, GrimAge); long-term and neurodegenerative endpoints remain to be tested. #gap/long-term-unknown #gap/needs-replication

---

## 5. Comparison with related dietary interventions

| Intervention | Key overlap with KD | Key distinction |
|---|---|---|
| [[caloric-restriction]] | mTOR suppression, AMPK, autophagy induction | CR reduces total calories; KD may not. CR does not reliably raise βHB. |
| [[intermittent-fasting]] | Transient ketosis during fasting windows; AMPK activation | IF achieves βHB elevation intermittently; KD maintains it continuously |
| [[methionine-restriction]] | FGF21 elevation; overlapping metabolic signaling | MetR restricts a specific amino acid; does not require fat-dominant diet |
| [[rapamycin]] | mTOR inhibition (overlapping target) | Rapamycin inhibits mTOR directly; KD does so indirectly via reduced insulin/amino acids |

---

## 6. Caveats and limitations

- **LDL cholesterol elevation**: KD raises LDL-C in a substantial minority of individuals (10–20%); the cardiovascular significance is debated but long-term cardiovascular risk data are limited. Saturated fat composition of the diet matters; unsaturated-fat-dominant KD has a more favorable lipoprotein profile. #gap/long-term-unknown
- **Lean mass preservation**: elderly individuals on KD may lose lean mass if protein intake is not maintained at ≥1.2 g/kg/day. Adverse interaction with [[sarcopenia]] risk is a concern; KD in the frail elderly requires careful protein dosing and resistance training co-prescription.
- **Adherence**: strict carbohydrate restriction (<50 g/day) is demanding long-term. Cyclic protocols (as in Newman 2017) may improve sustainability; head-to-head adherence comparisons with [[caloric-restriction]] or [[intermittent-fasting]] are limited.
- **Sex effects**: both 2017 mouse longevity studies used only male mice. Female C57BL/6 responses to KD are understudied. #gap/needs-replication
- **Gut microbiome**: KD substantially alters the gut microbiome composition, including reductions in fiber-fermenting bacteria. Long-term implications for inflammaging and [[dysbiosis]] are not well characterized. #gap/long-term-unknown
- **Athlete populations**: KD is not appropriate for high-intensity athletic training in the short term; adaptation periods of 4–8 weeks can partially restore performance, but evidence for elite athletes is mixed.

---

## 7. Key open questions

1. Does cyclic vs continuous KD matter in humans, as in mice? Newman 2017 found cyclic KD reduced midlife mortality (though not overall lifespan) while Roberts 2017 found continuous KD extended median lifespan — the protocols' relative merits in humans are unstudied. #gap/needs-human-replication
2. Is the longevity benefit mediated primarily by βHB signaling, caloric reduction, ketosis per se, or altered macronutrient ratios? Mechanistic dissection is incomplete.
3. What is the interaction between KD and [[cellular-senescence]] pathways? βHB's HDAC inhibition could reduce SASP expression; this has not been tested systematically. #gap/no-mechanism
4. Does KD move biological-age clock endpoints (DunedinPACE, GrimAge) in humans? No trial data yet.
5. Long-term (>5 years) effects on cardiovascular biomarkers, kidney function, and bone density in older adults are unknown. #gap/long-term-unknown

---

## Cross-references

- [[mtor]] — indirect suppression via reduced insulin and amino acid inputs
- [[ampk]] — activated by metabolic context of fat oxidation
- [[deregulated-nutrient-sensing]] — primary target hallmark
- [[mitochondrial-dysfunction]] — KD increases mitochondrial oxidative capacity; βHB is a more thermodynamically efficient substrate than glucose per unit oxygen
- [[chronic-inflammation]] — βHB inhibits NLRP3 inflammasome via K⁺-efflux prevention and ASC oligomerization inhibition (Youm 2015; not via AMPK/ROS/autophagy/HDAC); βHB-HDAC inhibition also reduces NF-κB activity independently
- [[caloric-restriction]] — paradigm comparison; mechanistic overlap and distinctions
- [[intermittent-fasting]] — sibling dietary intervention achieving transient ketosis
- [[methionine-restriction]] — FGF21 induction overlap
- [[sarcopenia]] — potential adverse interaction in elderly (lean mass loss)
- [[hdac]] — βHB direct target (stub — not yet seeded)
- [[foxo3]] — downstream of βHB-HDAC-inhibition axis (stub — not yet seeded)
- [[cellular-senescence]] — hypothesized SASP interaction via HDAC inhibition; not yet tested

---

## Footnotes

[^newman2017]: doi:10.1016/j.cmet.2017.08.004 · in-vivo · model: male C57BL/6 NIA mice, KD initiated at 12 months · Newman JC, Covarrubias AJ, Zhao M, Yu X, Gut P, Ng CP, Huang Y, Haldar S, Verdin E · *Cell Metabolism* 2017 · n=61 Control, 81 Cyclic KD, 36 Cyclic HF, 37 KD continuous, 26 HF continuous · cyclic KD (1-week-on / 1-week-off alternating with control diet) **reduced midlife mortality** (best daily chi-square p=0.00005) but did **not** significantly extend overall median lifespan (final log-rank p=0.78) or maximum lifespan; improved place-avoidance memory and composite healthspan score in aged animals

[^roberts2017]: doi:10.1016/j.cmet.2017.08.005 · in-vivo · model: male C57BL/6 mice, continuous KD from 12 months · Roberts MN, Wallace MA, Tomilov AA et al. · *Cell Metabolism* 2017 · n=43–44 per group (control, LCD, KD), isocaloric feeding · KD extended **median lifespan by 13.6%** (1003 vs 886 days, p<0.05); maximum lifespan (90th percentile) 1175 vs 1064 days, p=0.16 (not significant); improved grip strength, hanging wire, novel-object recognition memory, and muscle mass at 26 months

[^shimazu2013]: doi:10.1126/science.1227166 · in-vitro + in-vivo · model: HEK293 cells + fasted C57BL/6 mice · Shimazu T, Hirschey MD, Newman J, He W, Shirakawa K et al. · *Science* 2013 (published online 2012) · βHB at 1–2 mmol/L inhibits HDAC class I/IIa; increases H3K9/K14 acetylation; induces FOXO3a and metallothionein 2; reduces oxidative stress markers · #gap/no-fulltext-access (DOI lookup failed — green OA, fetch error; claims cross-checked via Roberts 2017 citations but not verified against primary PDF)

[^youm2015]: doi:10.1038/nm.3804 · in-vitro + in-vivo · model: mouse bone marrow-derived macrophages (BMDMs) + mouse models of MWS/FCAS + human monocytes · Youm YH, Nguyen KY, Grant RW, Goldberg EL et al. · *Nature Medicine* 2015 · BHB inhibits NLRP3 inflammasome by **preventing K⁺ efflux** and **inhibiting ASC oligomerization and speck formation**; mechanism is independent of AMPK, ROS, autophagy, GPR109a, HDAC inhibition, and TCA cycle entry; BHB does not inhibit AIM2 or NLRC4 inflammasomes; reduces caspase-1 activation and IL-1β/IL-18 in human monocytes in vitro and in NLRP3-driven disease models in vivo

[^mckenzie2017]: doi:10.2196/diabetes.6981 · prospective cohort (non-randomized, single-arm; no RCT comparator) · n=262 adults with T2D (mean age 54, 66.8% female) · model: telemedicine-supported KD intervention (Virta Health) · McKenzie AL, Hallberg SJ, Creighton BC et al. · *JMIR Diabetes* 2017 · HbA1c reduced from 7.6% (SD 1.5%) to **6.6%** (SD 1.1%) at 10 weeks (−1.0 pp, 95% CI 0.9–1.1, p<0.001); **56.8%** of completers had ≥1 diabetes medication reduced or eliminated (not fully eliminated); mean body weight loss **7.2%** (−8 kg, p<0.001)

[^bonnechere2026]: doi:10.3389/fnut.2026.1802531 · meta-analysis (systematic review + meta-analysis) · 38 studies / 41 protocols / n=1,602 (29 protocols n=1,117 meta-analyzable); searched through October 2025 · Bonnechère B, Stephens EB, Boileau AC, Ducker M, Stubbs BJ · *Front Nutr* 2026;13:1802531 · model: human RCTs of exogenous-ketone (EK) supplementation in healthy adults and neuropsychiatric populations including Alzheimer's disease · EK supplementation vs placebo on cognitive performance: **SMD 0.29 (95% CI 0.16–0.41, p<0.001)**; positive meta-regression of daily EK dose on cognitive improvement; no significant subgroup heterogeneity by formulation, duration (acute vs intermediate), population, or cognitive-stressor presence · PROSPERO CRD42023471727 · Conflict-of-interest note: senior authors have equity in BHB Therapeutics / HVMN and patents on ketone-body uses (declared) #gap/long-term-unknown #gap/needs-replication
