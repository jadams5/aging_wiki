---
type: compound
aliases: [2-aminoethanesulfonic acid, 2-aminoethane-1-sulfonic acid, tau]
pubchem-cid: 1123
inchikey: XOAAWQZATWQOTB-UHFFFAOYSA-N
chembl-id: CHEMBL239243
drugbank-id: DB01956
cas-number: 107-35-7
mechanisms: [osmotic-regulator, bile-acid-conjugation, calcium-signaling-modulator, mitochondrial-tRNA-modifier, GABA-A-modulator, antioxidant-via-chloramine-quenching]
targets: ["[[mtor]]", "[[autophagy]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[chronic-inflammation]]"]
clinical-stage: supplement
human-evidence-level: limited
half-life: "0.5–1.5 h plasma (rapid renal excretion); tissue accumulation with chronic dosing"
translation-gap: mechanism-disputed
next-experiment: "Independent replication of the Singh 2023 mouse lifespan experiment plus publication of the completed TauAge human RCT (NCT06613542), with baseline taurine stratification and prespecified methylation/proteomic outcomes."
verified: true
verified-date: 2026-07-11
verified-by: claude+codex
verified-scope: "Singh 2023 main article/figures, Marcangeli 2025, Kim 2026, Tzang 2024, Ito 2024, and the Sharma 2025 oral-leukaemia experiment checked against full text. Fernandez 2025 remains abstract + public-analysis-repository only because the Science article is closed-access. Nie 2025 and several 2026 syntheses remain abstract/landing-page verified as individually noted in footnotes. Identity fields retain the prior canonical-database verification scope."
literature-checked-through: 2026-07-11
---

> CONTESTED CLAIM. **No human anti-aging supplementation result has been published.** Singh 2023's broad intervention and methylation findings were in mice, with a very small healthspan experiment in female rhesus macaques; its human arms were observational. Fernandez 2025 and Marcangeli 2025 challenge circulating taurine as a universal human aging biomarker, while Kim 2026 suggests a non-monotonic frailty-dependent relationship. Short human RCTs support modest cardiometabolic surrogate improvements, not longevity. Sharma 2025 provides a genuine high-dose oral progression signal in mice with established myeloid leukaemia, but not evidence of cancer initiation or ordinary-dose harm in healthy humans. Do NOT treat taurine as an established anti-aging intervention.

# Taurine

A conditionally essential sulfonic acid and the most abundant free intracellular beta-amino acid in mammals. Taurine is naturally present in meat, fish, shellfish, and dairy, and is widely consumed as a supplement and energy-drink ingredient. It is also a prominent disputed aging-intervention candidate following Singh et al. 2023 (*Science*) — a claim significantly challenged by Fernandez et al. 2025 (*Science*).

**The status of taurine as an aging intervention is contested and unresolved.** Read the contradiction section before drawing conclusions.

## Identity

- **PubChem CID:** 1123
- **InChIKey:** XOAAWQZATWQOTB-UHFFFAOYSA-N
- **CAS:** 107-35-7
- **IUPAC name:** 2-aminoethanesulfonic acid
- **Class:** sulfonic acid; beta-amino acid (NOT a standard alpha-amino acid — contains sulfonic acid, not carboxylic acid)
- **Molecular weight:** 125.15 g/mol
- **Solubility:** highly water-soluble; zwitterionic at physiological pH (pKa ~ 1.5 sulfonate; ~8.8 amine)
- **Tissue distribution:** Heart, retina, skeletal muscle, brain, and leukocytes contain the highest intracellular concentrations in mammals

## Biosynthesis and dietary sources

Taurine is biosynthesized endogenously from cysteine via two enzymatic steps: cysteine sulfinic acid decarboxylase (CSAD) converts cysteine to cysteine sulfinic acid, which is oxidatively decarboxylated to hypotaurine and then spontaneously or enzymatically oxidized to taurine. Human biosynthetic capacity is limited, making taurine **conditionally essential** — cats are absolutely dependent on dietary intake and go blind without it; humans are partially dependent.

Dietary sources are essentially confined to animal products: red meat, poultry, fish (especially shellfish), and dairy. Plant-based diets provide negligible taurine. Whole-body taurine homeostasis is regulated by the TauT (SLC6A6) transporter, which handles both intestinal absorption and renal tubular reabsorption; renal excretion is the primary regulatory valve for the whole-body pool.

## Established physiological functions (not contested)

These functions are well-supported and independent of the aging-hypothesis controversy.

| Function | Mechanism | Compartment |
|---|---|---|
| Bile acid conjugation | Taurocholate, taurochenodeoxycholate synthesis | Hepatocyte |
| Osmoregulation | Volume-regulatory organic osmolyte | Renal medulla, brain, heart |
| Mitochondrial tRNA modification | 5-taurinomethyluridine modification of mt-tRNA Leu(UUR) and Lys; needed for decoding UUA/UUG codons of mitochondrial-encoded OXPHOS subunits | Mitochondrial matrix |
| Calcium handling | Modulates sarcoplasmic reticulum Ca²⁺ release and Na⁺/Ca²⁺ exchanger activity | Cardiomyocytes, skeletal muscle |
| GABA-A/glycine receptor modulation | Partial agonist at GABA-A; modulates glycine receptor | CNS |
| Antioxidant (indirect) | Reacts with HOCl from myeloperoxidase to form taurine-chloramine (less toxic); may spare other antioxidants | Neutrophils, phagocytes |
| Membrane stabilization | Influences phospholipid head-group interactions | Cardiac and skeletal muscle membranes |

The mitochondrial tRNA modification is particularly well-characterized and is the basis for taurine's connection to [[mitochondrial-dysfunction]]: inherited defects in this modification cause MELAS (mitochondrial encephalomyopathy, lactic acidosis, and stroke-like episodes), establishing a causal link between taurine-dependent modification and mitochondrial translation.

## The contested aging-biomarker claim

#gap/contradictory-evidence

Two papers in *Science* directly contradict each other on whether circulating taurine declines with aging — the foundational biomarker premise of the taurine-aging-intervention hypothesis.

### Singh 2023 — taurine deficiency as a driver of aging [^singh2023]

Singh et al. (2023) published a high-impact multi-species study proposing that age-associated taurine deficiency is a causal driver of aging across species.

**Circulating taurine decline (cross-sectional observational findings, PDF-verified):**
- Serum taurine in C57BL/6J WT mice declined from 132.3 ± 14.2 ng/ml at 4 weeks to 40.2 ± 7.1 ng/ml at 56 weeks (~70% decline; slope = −25.7, p < 2×10⁻¹⁶; Fig. 1A)
- In 15-year-old rhesus macaques, serum taurine was 85% lower than in 5-year-old monkeys (Fig. 1B; young: 5.0 ± 1.8 yrs; old: 15.0 ± 1.5 yrs)
- In humans (cross-sectional), serum taurine concentrations were reported as more than 80% lower in older observations than in young observations (p < 2.2×10⁻¹⁶; Fig. 1C). The plotted range ended around age 60 rather than sampling old age comprehensively.
- The human age plot combined younger Kocaeli University/earlier-metabolomics samples with middle-aged observations from the Kuopio Ischaemic Heart Disease Risk Factor Study. Age was therefore entangled with source population, geography, diet, health status, preanalytics, and potentially analytical batch/platform. EPIC-Norfolk is the separate association analysis in Fig. 4A, not the source of a supplementation result [^kim2026].
- **EPIC-Norfolk human association heatmap (Fig. 4A; n = 11,966; >50 clinical risk factors).** Higher serum taurine was associated with **lower (favorable)** levels of: abdominal obesity, BMI, waist-to-hip ratio, prevalent type-2 diabetes, random glucose, CRP, and fibrinogen. **However**, higher serum taurine was also associated with **higher (unfavorable)** levels of: AST (liver damage marker), alkaline phosphatase, GGT, APOB, total cholesterol, dyslipidemia, hypercholesterolemia, LDL, and triglycerides — i.e., a worse lipid + hepatic profile. The paper acknowledges this directly ("For liver- and lipid-related traits such as aspartate aminotransferase (AST) and blood cholesterol, we found positive associations with taurine but negative associations with those of its precursor hypotaurine") but the authors' overall framing — "these results are consistent with taurine deficiency contributing to human aging" — selectively weights the favorable correlations. **Hypotaurine** (the upstream precursor) showed the **opposite** pattern from taurine on most lipid/hepatic markers (negative/favorable), complicating any simple "more taurine = better" reading. #gap/contradictory-evidence
- This selective framing of correlation directions is a real critique of the paper's own evidence interpretation, independent of Fernandez 2025's challenge to the underlying age-decline premise.

**Mouse interventional data (in vivo):**
- Taurine supplementation at 1,000 mg/kg body weight/day (T1000) oral gavage in C57BL/6J WT female (n=60 taurine, n=62 vehicle) and male (n=60 taurine, n=64 vehicle) mice, started at 14 months of age
- Median lifespan increase of 10–12% in both sexes; life expectancy at 28 months increased by 18–25% (p < 0.00001 for both sexes by log-rank test; Fig. 1D, E)
- Health span improvements in female mice (24-month-old): body weight suppression (~10% in T1000), fat-pad weight reduced dose-dependently, bone mass increased (vertebra and femur BV/TV%), neuromuscular coordination improved (rotarod, wire hang), grip strength increased (T500 and T1000), anxiety reduced, memory improved, glucose homeostasis improved (GTT and ITT), GI transit improved, WBC/monocyte/granulocyte profiles improved (Fig. 2A–K)
- Male mice (14-month-old, 8–16 weeks treatment): improved muscle strength, neuromuscular coordination, bone density, glucose tolerance, memory, and reduced anxiety (fig. S3); body weight not affected at 16 weeks but fat-pad percentage reduced
- Energy expenditure measured: taurine-treated mice consumed more oxygen, generated more CO2, and had higher respiratory exchange ratios and energy expenditures vs controls (fig. S3)
- C. elegans: taurine significantly extended median and maximum lifespan dose-dependently (Fig. 1F); not active in yeast (unicellular)
- Non-human primates: 15 ± 1.5-year-old rhesus macaques fed 250 mg/kg BW/day (equivalent dose to T1000 in mice) for 6 months showed benefits in bone density (lumbar spine L1–L4 and legs), liver function markers (AST, ALT), and reduced fasting glucose (19%); WBC, monocyte, granulocyte counts decreased ~50%; molecular damage markers (8-OH-dG, lipid peroxide, protein carbonyl) decreased by ~36, 11, and 20%, respectively (Fig. 4)

**Proposed mechanism:** taurine deficiency → multiple aging hallmarks simultaneously — cellular senescence, mitochondrial dysfunction, protection against telomerase deficiency (tested in zebrafish tert−/−, not shown to reverse telomere shortening in supplemented WT mice), altered nutrient sensing/autophagy (pRS6P and LC3A/B), and inflammaging. DNA-damage markers were also reduced. The mt-tRNA modification role (5-taurinomethyluridine on tRNA-Leu) was reduced >60% in aged mouse liver and partly preserved by supplementation (Fig. 3W, X).

**Methylation result — mice, not humans.** Figure 3J measured 2,045 age-related CpG sites in skeletal muscle, cerebral cortex, and liver from 4-month-old mice, 16-month-old vehicle-treated mice, and 16-month-old taurine-treated mice. Treated aged muscle and cortex clustered closer to young mice; liver did not. Figure 3K measured H3K9me3 and H3K27me3 in mouse liver, brown fat, and muscle and found tissue- and mark-specific directions. This was neither a human experiment nor a validated epigenetic-clock reversal. Singh measured **no human DNA methylation or epigenetic age endpoint** [^singh2023]. #gap/needs-human-replication

**Caveats (independent of Fernandez 2025):**
- Single-laboratory finding (Yadav lab at Columbia); not yet independently replicated
- Mouse supplementation cohort sizes: n=60–64 per group (female and male, two independent cohorts); NHP n not stated in main text for lifespan groups (health-span monkeys n=5/group per Fig. 4E–O)
- Mechanistic linkage between taurine supplementation and individual aging hallmarks is supported by correlational and cell-culture evidence in this paper; the integrated claim is a hypothesis
- Human cross-sectional data cannot distinguish taurine decline as a cause vs. consequence vs. correlate of aging
- **No human supplementation or methylation experiment:** the human components were serum taurine versus age, mixed-direction EPIC-Norfolk associations, and acute exercise responses. Broad healthspan, hallmark, and CpG/histone-methylation intervention results came from mice or the small macaque arm.
- **Selective interpretation of human correlation matrix**: the EPIC-Norfolk heatmap (Fig. 4A) shows taurine positively correlated with multiple unfavorable lipid + hepatic markers (LDL, cholesterol, dyslipidemia, AST, GGT, APOB, triglycerides). The authors briefly note these positive associations but conclude the overall pattern is "consistent with taurine deficiency contributing to human aging" — a framing that down-weights the unfavorable correlations. The same heatmap could also be read as supporting a more cautious interpretation. #gap/contradictory-evidence
- Columbia University has filed provisional patent applications (plural) on which V.K.Y. (Vijay K. Yadav, corresponding author) is listed as an inventor; remaining authors declare no competing interests
- Funding: National Center of Excellence in the Basic Biology of Aging (VKY); NIH R01HD107574 (VKY); Wellcome 038051 (VKY); DFG 450409205-TRR333/1 (PB, HW); NIH P30AG013248 (MK); and multiple other sources — not solely NIH
- No completed human aging RCT has published results. TauAge (NCT06613542; 4 g/day for six months; n=90, ages 55–75) completed follow-up in November 2025 but had posted no results as of 2026-07-11.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — taurine biosynthesis conserved; CSAD efficiency lower in humans than rodents |
| Phenotype (taurine decline) conserved in humans? | **disputed** — see Fernandez 2025 |
| Replicated in humans? | no — no interventional human trial for aging endpoints |

### Fernandez 2025 — taurine is not a reliable aging biomarker [^fernandez2025]

Fernandez et al. (2025) from the NIA (de Cabo/Bernier group) published a direct challenge to the Singh 2023 biomarker premise using multi-cohort longitudinal analyses.

**Key finding (abstract + authors' public analysis repository; full article closed-access):** In three human populations, non-human primates, and mice using longitudinal and cross-sectional approaches, circulating taurine **increased or remained unchanged with age**. Associations with motor function and energy-homeostasis outcomes varied by cohort, sex, and endpoint.

**Design:** Baltimore Longitudinal Study of Aging (BLSA; n=742, ages 26–100, repeated samples); Balearic Islands Study of Aging (n=72, ages 20–85, cross-sectional); Predictive Medicine Research cohort (n=159, ages 20–68, cross-sectional); longitudinal rhesus macaques (n=32); and longitudinal SLAM mice (n=39). The public code includes sex-stratified models and BLSA sensitivity analyses adjusting for diet, excluding outliers, and restricting to active participants. Detailed prose and all supplemental tables remain unverified because the full article is inaccessible. #gap/no-fulltext-access

**Why the methodology matters:** Singh's human plot compared people from different source populations and age bands. Fernandez repeatedly measured the same BLSA participants, so each person contributed to the estimated aging trajectory. Longitudinal data do not eliminate period effects or changing diet/health, but they greatly reduce the ecological cohort/batch confounding in Singh's stitched cross-sectional plot. Fernandez also found stable/increasing directions in its independent cross-sectional cohorts, making a universal decline implausible.

**Tissue/outcome specificity in the same data:** Fernandez 2025 also reports that even where serum taurine has health correlates, those are heterogeneous — for example, higher serum taurine associated with better leg/knee strength in women, but no association with grip strength. Per-outcome specificity argues against a uniform "taurine is youth" reading.

**Critical implication:** If circulating taurine does not reliably decline with aging across populations, the translational rationale for supplementation as "deficit-replacement" is severely weakened. Individuals without a taurine deficit have no established reason to benefit from supplementation.

**What Fernandez 2025 does NOT address:** The paper did not administer taurine, test lifespan, or repeat Singh's methylation and hallmark experiments. It is a **premise challenge, not a failed intervention replication**. The mouse intervention and biomarker claims are logically separable; losing the biomarker premise weakens human deficit-replacement but does not rule out a context-specific pharmacological benefit.

### Marcangeli 2025 — independent human functional null [^marcangeli2025]

Marcangeli et al. measured fasting serum taurine in 137 active and inactive men aged 20–93 using isotope-dilution LC–MS/MS. Taurine was not associated with age, muscle mass, grip or knee strength, leg power, common physical-performance tests, body composition, HOMA-IR/QUICKI, fructosamine, CRP, or ex-vivo skeletal-muscle mitochondrial respiration, ROS emission, or calcium-retention capacity.

This independently reinforces the rejection of taurine as a simple human aging/functional-decline biomarker. It remains cross-sectional, male-only, and non-interventional, so it cannot answer whether low-baseline or diseased subgroups benefit from supplementation.

### Kim 2026 — frailty exposes a non-monotonic relationship [^kim2026]

Kim et al. analyzed 146 Baltimore-area adults. Young (20–50) and older (≥69) groups did not differ significantly in taurine (p=0.29), but older frailty strata differed strongly: robust adults had the highest taurine, prefrail adults the lowest, and frail adults intermediate concentrations. An inverse taurine–TNF-α association was significant specifically in prefrail participants.

This offers a plausible biological contributor to discordant age-only studies: health trajectory and compensatory sulfur-amino-acid metabolism may matter more than chronological age. However, it is a modest cross-sectional cohort without dietary/supplement histories; its proposed pathway-flux and compensation explanations are inferential, not isotope-flux measurements. It does not show that supplementing prefrail adults improves frailty.

### Synthesis: what the contradiction means

The contradiction is foundational, not peripheral. The Singh 2023 hypothesis rests on two separable pillars:

1. **Interventional pillar:** Taurine supplementation at high dose extends lifespan and healthspan in mice (and modestly in NHPs). This is direct interventional evidence.
2. **Biomarker/deficit pillar:** Circulating taurine declines with aging across species, suggesting a causal deficit that supplementation rescues.

Fernandez 2025 attacks pillar 2. It does not refute pillar 1 (the mouse lifespan extension). However, if pillar 2 fails — if human aging is not accompanied by declining taurine — then the "rescue a deficit" translational narrative for human use is unsupported. The mouse lifespan extension could then reflect a pharmacological effect at supraphysiological concentrations, not deficit replacement.

**What would resolve this:**
- Independent replication of Singh 2023's mouse lifespan experiment in a separate laboratory or NIA Interventions Testing Program-style multi-site cohort.
- Publication of TauAge (NCT06613542): n=90 healthy adults aged 55–75, 4 g/day versus placebo for six months, completed 2025-11-13 with proteomic and DNA-methylation biological-age outcomes; no results posted as of 2026-07-11.
- A larger human trial with prespecified frailty/function and clinical outcomes, baseline taurine stratification, and enough follow-up to distinguish transient biomarker changes from durable healthspan effects.
- Mechanistic studies distinguishing pharmacological effects from physiological deficit rescue.

As of 2026, taurine should not be characterized as an established anti-aging intervention. The picture is:

| Pillar | Evidence | Status |
|---|---|---|
| Mouse lifespan + healthspan extension at high dose | Singh 2023 (single lab) | Positive but unreplicated for lifespan; Ito 2023 review notes Dawson reported 1.5% taurine in F344 rats had **no effect on lifespan**, so the mouse-lifespan claim is also not consistent across rodent studies |
| Cross-sectional decline with age in humans | Singh 2023 | **Not reproduced** by Fernandez 2025 or Marcangeli 2025; Kim 2026 finds a non-monotonic frailty relationship rather than a simple age decline |
| Cardiometabolic benefits of supplementation in humans (RCTs) | Tzang 2024 meta-analysis | **Positive** — 25 RCTs, 1,024 participants, significant ↓SBP/DBP/FBG/TG/TC/LDL — see below |
| Taurine and incident dementia | Chouraki 2017 + Zhang 2025 | Suggestive Framingham signal (HR 0.74; not Bonferroni-significant) followed by a much larger Malmö null cohort (n=27,786) |
| Established myeloid-leukaemia progression at high exposure | Sharma 2025 (Nature) | **Real preclinical concern in existing disease**; not evidence of cancer initiation or ordinary-dose harm in healthy people |

The hypothesis still has no published human RCT result for DNA methylation, biological age, frailty, or other aging endpoints. #gap/needs-human-replication

## Tzang 2024 — meta-analysis of taurine supplementation RCTs for metabolic syndrome [^tzang2024]

A 2024 PRISMA-2020-compliant systematic review and meta-analysis (Tzang et al., *Nutrition and Diabetes*) of randomized controlled trials provides the **strongest interventional human data** for taurine supplementation against cardiometabolic endpoints. This evidence is independent of and prior to the Singh 2023 / Fernandez 2025 dispute, and it directly addresses the EPIC-Norfolk cross-sectional concern about lipid markers.

**Design (PDF-verified):**
- Pre-registered (INPLASY2023120081); searched through 2023-12-01
- 25 RCTs (1,024 participants) included from 2,517 records screened
- Daily taurine dose: 0.5–6 g/day; follow-up 5–365 days
- Populations heterogeneous: T2D, heart failure, CHD, hypertension, alcoholism, homocystinuria, obese women, healthy adults, peripartum cardiomyopathy
- Risk of bias: 18/25 studies had unclear allocation concealment; 7 low risk; none high risk
- Several included studies funded by Taisho Pharmaceutical (Japan; taurine manufacturer) — partial industry-funding signal #gap/contradictory-evidence

**Pooled effect sizes (weighted mean differences, vs control):**

| Outcome | WMD | 95% CI | p | I² | Notes |
|---|---|---|---|---|---|
| SBP | −3.999 mmHg | −7.293 to −0.706 | 0.017 | **84.9%** | High heterogeneity — interpret with caution |
| DBP | −1.509 mmHg | −2.479 to −0.539 | 0.002 | 14.1% | Dose-dependent (−0.0108 mmHg/g, p=0.030) |
| FBG | −5.882 mg/dL | −10.747 to −1.018 | 0.018 | 75.5% | Dose-dependent (−0.0445 mg/dL/g, p=0.027) |
| Triglycerides | −18.315 mg/dL | −25.628 to −11.002 | <0.001 | 35.5% | — |
| Total cholesterol | −8.305 mg/dL | −13.771 to −2.929 | sig | — | — |
| LDL-C | sig reduction | — | — | — | (specific WMD not extracted to this page) |
| HDL-C | +0.644 mg/dL | −0.244 to 1.532 | 0.155 | 7.7% | NOT significant |
| Body weight | −0.642 kg | −1.494 to 0.209 | 0.139 | — | NOT significant |
| BMI | −0.296 kg/m² | −0.889 to 0.296 | 0.327 | — | NOT significant |
| Adverse events | "no significant adverse events" | — | — | — | Caveat: most trials short |

**Critical for resolving the EPIC-Norfolk concern:** The Tzang 2024 RCT pooled data shows that taurine supplementation **decreases** TG, TC, and LDL-C — the *opposite direction* of what was observed in Singh 2023's EPIC-Norfolk cross-sectional heatmap. This suggests the EPIC-Norfolk positive correlations may reflect **reverse causation or confounding** (e.g., dyslipidaemic individuals consume more taurine-containing foods, or have altered taurine handling secondary to liver/lipid pathology) rather than taurine causing dyslipidaemia.

**Caveats to the meta-analysis:**
- Trial durations are mostly 1–12 weeks; **none demonstrate hard outcomes** (cardiovascular mortality, MACE, all-cause mortality)
- High heterogeneity (I² up to 85%) for SBP — pooled estimate may be unstable
- Heterogeneous populations and dose ranges complicate generalisation
- 18/25 trials had unclear allocation concealment
- Industry-funded subset
- No ageing-endpoint trials; benefits are on surrogate cardiometabolic markers, not lifespan/healthspan composites
- Effect sizes are clinically modest (~4 mmHg SBP, ~1.5 mmHg DBP, ~6 mg/dL FBG)

**Net interpretation:** Tzang 2024 is the most robust positive evidence for taurine supplementation in humans — but it speaks to short-term cardiometabolic surrogate markers in mostly diseased populations, not to longevity. The EPIC-Norfolk lipid concern is largely defused by these RCT data.

### Nie 2025 — independent 34-RCT cardiometabolic meta-analysis (replicates Tzang 2024) [^nie2025]

A second large meta-analysis published Nov 2025 (Nie et al., *Nutrition Reviews*; PROSPERO CRD42024577852) independently pooled 34 RCTs of taurine supplementation on cardiometabolic risk factors and reported directionally consistent effects with Tzang 2024:

| Outcome | Nie 2025 MD/SMD | Nie 2025 95% CI | Tzang 2024 (for comparison) |
|---|---|---|---|
| Fasting blood glucose | MD −5.90 mg/dL | −9.65 to −2.15 | MD −5.882 mg/dL (−10.747 to −1.018) |
| HbA1c | MD −0.21% | −0.37 to −0.05 | (not reported in Tzang) |
| Fasting insulin | SMD −0.55 | −0.78 to −0.32 | (not reported in Tzang) |
| HOMA-IR | MD −0.57 | −0.74 to −0.40 | (not reported in Tzang) |
| Triglycerides | MD −14.42 mg/dL | −23.60 to −5.25 | MD −18.315 mg/dL |
| Total cholesterol | MD −12.41 mg/dL | −19.10 to −5.71 | MD −8.305 mg/dL |
| LDL-C | MD −5.08 mg/dL | −8.35 to −1.81 | sig reduction (specific WMD not extracted) |
| SBP | MD −4.38 mmHg | −7.26 to −1.50 | MD −3.999 mmHg |
| DBP | MD −2.54 mmHg | −3.97 to −1.11 | MD −1.509 mmHg |
| AST | MD −9.65 U/L | −17.39 to −1.90 | (not reported) |
| ALT | MD −8.26 U/L | −14.81 to −1.70 | (not reported) |
| CRP | SMD −1.26 | −2.01 to −0.52 | (not reported) |
| TNF-α | MD −0.35 pg/mL | −0.56 to −0.14 | (not reported) |
| Malondialdehyde | SMD −1.16 | −1.81 to −0.52 | (not reported) |

**Key new findings beyond Tzang 2024:** Nie 2025 reports significant reductions in **AST and ALT** — directly relevant to the EPIC-Norfolk concern about positive taurine–hepatic-marker correlations. Liver-enzyme reductions (rather than the cross-sectional positive correlations Singh 2023 reported) reinforce the reverse-causation reading. The dose-response analysis suggests **1.5–3.0 g/day** as the optimal range, with ≥8 weeks for glucose/lipid effects and <8 weeks for blood pressure/inflammation. #gap/long-term-unknown — none of the included trials report hard-outcome (mortality / MACE) data; durations remain short.

### Wang/Oudit 2026 — indirect long-COVID rationale, not long-COVID treatment evidence [^wang2026]

This meta-analysis pooled 27 taurine trials (n=1,030) conducted in metabolic, cardiovascular, gastrointestinal, and neurocognitive conditions that share processes implicated in post-acute sequelae of COVID-19 (PASC). **None of the 27 supplementation trials enrolled patients diagnosed with PASC.** The authors explicitly broadened eligibility because no direct PASC taurine trial had reported results. The pooled surrogate improvements therefore cannot be presented as taurine efficacy in long COVID.

A separate pooled analysis of six observational convalescent-COVID studies (n=308) found lower plasma taurine in PASC than recovered controls (SMD −0.35, 95% CI −0.63 to −0.08). This supports a disease-context association, not proof that replacement improves symptoms. Direct PASC taurine RCTs are now registered/recruiting, but results are pending. The narrower implication survives: context-specific taurine perturbations may exist even though universal age-related deficiency does not.

### Moore 2026 — acute taurine + cognition systematic review (mostly null) [^moore2026]

Moore et al. 2026 (*Foods*; Swansea University) systematically reviewed 8 RCTs (n=244 healthy participants) of acute single-dose taurine (1–3 g, up to ~50 mg/kg) and cognitive performance. **Most cognitive outcomes showed no effect.** Trials combining taurine with caffeine showed reliable performance benefits, but the caffeine-alone arm could not be excluded. Mood/well-being effects were "minor, inconsistent, and typically observed only under specific conditions" (e.g., sleep deprivation). None of the studies measured habitual diet or baseline SCAA status. **Important conflict-of-interest disclosure:** two of the authors (Moore JA, Young HA) received research funding from Viridian Nutrition (a taurine supplement vendor) for unrelated work, though Viridian had no role in this review. The acute-cognition signal is much weaker than the cardiometabolic signal — supports the interpretation that taurine's near-term human benefits are biomarker-mediated (glucose, lipids, BP) rather than CNS-direct.

### Chen & Niu 2026 + Zhang 2026 — paired narrative reviews of taurine + exercise interaction in aging [^chen2026][^zhang2026]

Two independent 2026 *Frontiers* narrative reviews synthesize the taurine + exercise literature in aging, obesity, and diabetes. Neither generates new primary data or pooled effect sizes; both aggregate primary RCTs that the meta-analyses above already cover (the Brazilian De Carvalho/Batitucci obese-women cohorts, the Bagheri TRX-T2D trial, the multicomponent-exercise + taurine 1.5 g/day cognition trial in elderly women ~83 yr, the heart-failure exercise-tolerance trial). Their contribution is mechanistic framing not previously surfaced on this page.

**Adipose-tissue browning (Zhang 2026 emphasis).** In sedentary obese-women cohorts (n=22–35), 8–16 weeks of structured exercise + taurine 3 g/day upregulated browning genes (CIDEA, PGC-1α, PRDM16, UCP1, UCP2) and fatty-acid-oxidation genes (CPT1, PPARα/γ, LPL, HSL, ACOX1, CD36) in subcutaneous WAT, decreased adipocyte area (−5,599 µm² in one 16-week sarcopenic-obesity trial, p=0.014), increased resting metabolic rate (+151 to +335 kcal in exercise arms), and elevated plasma irisin specifically in the taurine-supplemented exercise arm post-bout. This is a **distinct mechanism** from the cardiometabolic surrogate-marker improvements documented by Tzang 2024 / Nie 2025 — operating at adipose-tissue remodelling rather than circulating analytes. #gap/needs-replication — most browning-gene readouts trace to a single Brazilian research lineage; independent replication with human biopsy data is limited.

**PI3K/Akt cardiac remodelling (both reviews).** In STZ-diabetic Wistar rats (multiple 8-week protocols, n=40–50 per study), combined taurine + endurance/resistance training reduced caspase-3/-9, lowered pro-apoptotic Bax, raised Bcl-2, and normalised Bax/Bcl2 to non-diabetic-control levels (p≤0.001); PI3K gene expression rose ~57% vs diabetic-control; collagen deposition fell; renin-angiotensin axis activity (aldosterone, renin, angiotensin) decreased. **All preclinical** — no human cardiac-remodelling endpoints. Mechanistically convergent with the cardiometabolic-RCT signal but the apoptosis-pathway evidence is rat-only.

**BDNF-TrkB neuroplasticity & cognition.** The cognitive arm of taurine's effect appears exercise-dependent: in the elderly-women cohort (n=48, mean 83 yr), MMSE preservation was significant only in the combined exercise + taurine arm (p<0.05), not in taurine-alone. Diabetic rat exercise+taurine groups show elevated BDNF (p=0.003) and reduced CRP (p=0.008). Consistent with Moore 2026's finding that acute single-dose taurine in healthy young adults has weak/null cognitive effects — a CNS benefit, if real, requires chronic dosing + exercise context.

**Limitations the reviews themselves emphasise:** synergy vs additivity is unresolved (some trials show clear additive effects, others find taurine-alone or exercise-alone non-distinguishable from combined); high methodological heterogeneity (taurine doses 0.05–3 g/day; exercise modalities range from deep-water running to TRX suspension training to multicomponent training; durations 2 weeks to 16 weeks); few studies measure mechanism in humans directly. Both reviews explicitly conclude that current evidence supports *context-dependent* rather than uniformly synergistic interactions and that "mechanistic evidence linking molecular adaptations to clinically meaningful outcomes in humans remains limited." The Chen & Niu 2026 review additionally pairs taurine with [[glutamine]] in a sarcopenia/exercise frame — relevant to the broader [[sarcopenia]] context but expanding scope beyond this taurine page.

**What these 2026 reviews do NOT change:** they do not address the Singh-vs-Fernandez biomarker-decline dispute, identify any Yadav-lab or independent Singh 2023 lifespan replication, or address the Sharma 2025 mTOR-activation/leukaemogenesis concern. The aging-intervention status remains unchanged from the May 2026 R34 backfill.

**Net effect on the page-wide picture (updated 2026-07-11):** the simple human “taurine declines with age” premise is now poorly supported, not merely balanced one-for-one: Fernandez 2025 and Marcangeli 2025 find no universal adult decline, while Kim 2026 shows frailty-dependent nonlinearity. Singh's mouse lifespan experiment remains unreplicated. Cardiometabolic surrogate effects at 1.5–3 g/day are the strongest positive human intervention evidence, but are modest and disease-enriched. Acute cognition is mostly null. No human methylation or aging-intervention result has been published; TauAge is completed but unreported. Taurine may remain useful for defined deficiencies or clinical indications, but it is **not** an established general anti-aging intervention.

## Prospective dementia cohorts — suggestive Framingham signal, large Malmö null

### Chouraki 2017 — Framingham [^chouraki2017]

A prospective metabolomic screen in the Framingham Offspring Cohort reported a suggestive protective association.

**Design (verified via abstract; PDF retrieval failed but abstract via PubMed efetch):**
- n = 2,067 dementia-free Framingham Offspring participants; mean age 55.9 ± 9.7 yr; 52.4% women
- Mean follow-up 15.6 ± 5.2 years
- 93 incident dementia cases over follow-up
- 217 plasma metabolites assessed; multivariate Cox models

**Findings:**
- **Taurine HR = 0.74 (95% CI 0.60–0.92)** for incident dementia — i.e., higher plasma taurine associated with lower future dementia risk
- Reported as a "**suggestive association**" — i.e., did not reach the strict Bonferroni-corrected significance threshold for screening 217 metabolites; treat as hypothesis-generating, not confirmatory
- Glutamic acid (HR=1.38) and anthranilic acid (HR=1.40) were positively associated with dementia; hypoxanthine (HR=0.74) showed similar suggestive protective association as taurine

**Interpretation:** This is a higher-quality observational signal than Singh 2023's cross-sectional EPIC-Norfolk correlations because (a) it is prospective (taurine measured before dementia onset), (b) the cohort is well-characterised, and (c) the follow-up is 15+ years. It does NOT establish causation, and the suggestive (not Bonferroni-significant) status means the result needs replication in independent cohorts.

### Zhang 2025 — Malmö Diet and Cancer [^zhang2025dementia]

The larger Malmö cohort followed 27,786 participants for a median 24.9 years; plasma taurine was available in 3,693 and 3,224 participants developed dementia. Neither estimated dietary taurine nor plasma taurine predicted all-cause dementia, Alzheimer's disease, or vascular dementia after adjustment. This well-powered null substantially weakens the earlier Framingham signal but does not test high-dose supplementation. #gap/contradictory-evidence

## Ito 2023 review — taurine, TauT, dilated cardiomyopathy and ageing [^ito2023]

Ito and Murakami's 2024 *J Pharmacol Sci* review (referred to here as Ito 2023 by manuscript receipt date) provides important nuance on the human relevance of taurine deficiency and on the inconsistent age-decline literature in rodents.

**Key takeaways (PDF-verified):**
- **Heart taurine ~20 mM intracellular**, ~100× plasma — the heart is the most taurine-concentrated organ; heart and skeletal muscle rely on transport (TauT/SLC6A6) rather than local synthesis.
- **Human TauT-mutation phenotypes** (Table 1 of Ito 2023): four published TauT mutations with disease association — Shakeel et al., Ansar et al., Preising et al., Garnier et al. (GWAS rs62232870; OR=1.36 for DCM in 2,719 + 4,440 individuals). One Ansar family had homozygous Gly399Val with 10% transporter activity, blood taurine 6–7 µmol/L (vs normal 30–120), DCM + retinal degeneration, both rescued by 24 months of oral taurine. Preising's Ala78Glu homozygous siblings (95% transporter loss) developed retinal degeneration but **no cardiomyopathy** at 4 and 11 years — i.e., severe TauT-LOF does not always cause DCM in humans.
- **Dietary deficiency is NOT a typical cause of DCM in humans**: vegetarians have markedly lower urinary taurine excretion than omnivores but comparable blood taurine, and severe diseases like cardiomyopathy have not been reported in vegetarians. The Ito review concludes: "dietary taurine deficiency does not induce a taurine-deficient state, and it is unlikely that a taurine-deficient diet is a factor in dilated cardiomyopathy, but taurine intake may have positive cardiovascular effects." This directly contradicts the simple "humans are taurine-deficient" framing.
- **TauTKO mice** (the strongest deficiency model) have median lifespan 583 days (160 days shorter than WT) and develop DCM, retinal degeneration, hearing loss, decreased bone density — but this is genetic deficiency, not age-related decline, and does not by itself argue that supplementation in normal animals extends lifespan.
- **Crucially for the age-decline claim**: Ito 2023 explicitly reviews the mixed rodent literature:
  - F344 rats (Eppler & Dawson; Schaffer): liver, kidney, brain, blood taurine decrease at 26–28 mo vs 9–10 mo; **heart and muscle unchanged**
  - **Massie et al — taurine concentration in brain, liver, kidney, and blood remained unchanged in aged C57BL/6 male mice vs young** — this is the strain Singh 2023 used and is a direct contradiction
  - SD rats: tissue levels not changed by ageing
  - **Dawson: 1.5% taurine in drinking water in aged F344 rats restored serum taurine and improved markers, but had NO EFFECT ON LIFESPAN** — a relevant null result that is not prominently discussed in the Singh 2023 narrative
  - Conclusion (Ito 2023, verbatim): "it is difficult to summarize the effect of age in whole body taurine content, which is likely to be influenced by animal species, strain, sex and age of animal models."

**Net effect of Ito 2023 on the page-wide picture:** even before Fernandez 2025, the rodent literature was already mixed on whether taurine declines with age, and Dawson's null lifespan result in F344 rats sits uneasily next to Singh 2023's positive lifespan result in C57BL/6J mice. Ito 2023 does not refute Singh 2023 but documents that neither the decline nor the lifespan-extension claim is consistent across rodent models.

## Cancer and mTOR concerns — Sharma 2025 (Nature) [^sharma2025]

Sharma et al. identified a taurine-dependent metabolic vulnerability in aggressive myeloid leukaemias and directly tested high oral taurine exposure in mice with established transplanted blast-crisis CML. This supports caution in existing myeloid malignancy, but the evidence boundary is narrower than “taurine causes cancer.”

**Key findings (PDF verified):**
- The taurine–TAUT (SLC6A6) axis is identified as a critical dependency of aggressive myeloid leukaemias via temporal scRNA-seq + in vivo CRISPR screens
- **CDO1** (cysteine dioxygenase type 1) drives taurine biosynthesis in bone-marrow osteolineage cells; CDO1 expression increases during myeloid disease progression
- Taurine levels in leukaemic bone-marrow interstitial fluid are ~1.7-fold higher than in healthy controls (Fig. 2j)
- **Osteolineage-specific CDO1 knockout** (CDO1^fl/fl Prrx1-cre) extends survival of leukaemia-challenged mice by ~13.5%
- **TAUT genetic loss-of-function** in patient-derived AML xenografts significantly impairs in vivo leukaemia progression
- Elevated TAUT expression in venetoclax-resistant AML; TAUT inhibition synergizes with venetoclax against primary human AML cells
- Loss of taurine uptake inhibited RAG-GTP-dependent mTOR activation and downstream glycolysis in leukaemia cells.
- **Oral exposure was tested:** leukaemia-bearing mice on taurine-free chow received taurine in drinking water. The 10 mg/mL group had faster blast-crisis CML progression and an approximately threefold higher likelihood of death than the no-taurine group; 0.01 mg/mL was also tested (n≈14–15/group).

**Why this matters for the longevity narrative:**

1. **mTOR direction is cell-context-specific.** Singh reported lower pRS6P in normal mouse liver, brown fat, and muscle after taurine, whereas Sharma found taurine-dependent RAG–mTOR signaling in leukaemia cells. The latter cannot be generalized into whole-body “pro-aging mTOR activation”; the opposite directions instead show that pathway effects depend on cell state and tissue context. #gap/contradictory-evidence
2. **Established-disease progression is the supported concern.** The oral experiment demonstrates that high exogenous taurine can accelerate an existing transplanted myeloid leukaemia in mice. It raises a rational avoidance flag for AML, blast-crisis CML, and probably MDS unless an oncology team approves use. Extrapolation to clonal haematopoiesis remains speculative.
3. **Concurrent 2025–2026 reports** describe taurine as promoting other cancers via SLC6A6 in non-leukaemic contexts (hepatocellular carcinoma via bile acid pathway; breast cancer via SLC6A6-mediated oxidative-stress relief). These are mechanistically convergent on TAUT/SLC6A6-dependent uptake. #gap/needs-human-replication

**What the cancer signal does NOT establish:**
- Cancer initiation in healthy mice or humans.
- Increased human cancer incidence or progression at ordinary supplement doses such as 1.5–3 g/day.
- A systemic mTOR direction in normal tissues.
- Refutation of Singh's non-tumour-bearing mouse lifespan result.

**Net effect on supplement risk-benefit:** moderate preclinical evidence of harm in established myeloid leukaemia; very-low evidence of initiation or harm in healthy supplement users. For a healthy person without a defined taurine-responsive indication, this is a secondary uncertainty—not the primary reason to stop supplementation.

## Mechanistic theories — unsubstantiated and untested

> **SPECULATION SECTION.** The hypotheses below are mechanistic theories *reasoned from* established taurine biochemistry plus aging-pathway maps in this wiki — not findings from the cited literature. None has been directly tested for its causal contribution to Singh 2023's mouse phenotypes. Several are mutually compatible; some are mutually exclusive. Offered as a frame for interpreting the empirical evidence above; treat as hypothesis-generating only. #theory/unsubstantiated

### Tier 1 — Mechanistically specific (taurine has a known molecular role here)

**Mitochondrial tRNA modification (the strongest mechanistic candidate).** Taurine forms 5-taurinomethyluridine on mt-tRNA-Leu(UUR) and mt-tRNA-Lys, required to decode UUA/UUG codons in mitochondrially-encoded OXPHOS subunits. Singh 2023 reports >60% loss of this modification in aged liver, partially restored by supplementation. *If* generalisable: better mt-translation → better OXPHOS complex assembly → less electron leak → less mtROS → less [[mitochondrial-dysfunction]]. MELAS — caused by an inherited defect in this same modification — anchors a causal chain in human pathology. **Untested**: whether the magnitude of restoration is sufficient to drive the lifespan/healthspan effects observed; whether the same modification deficit and rescue occur in heart and skeletal muscle (where Singh reports phenotype gains, but the modification itself was measured only in liver). #theory/unsubstantiated

**Taurine-chloramine antioxidant flux.** Taurine reacts with neutrophil-derived HOCl (myeloperoxidase product) to form taurine-chloramine, which is less reactive than HOCl. In aged tissues with chronic neutrophil/macrophage activation, this could quench inflammation-derived oxidants without taurine itself being a classical antioxidant. Singh's NHP data are directionally consistent: 8-OH-dG ↓36%, lipid peroxide ↓11%, protein carbonyl ↓20%. **Untested**: whether plasma taurine at supplement doses penetrates inflammatory loci sufficiently; whether the effect on oxidative-damage markers is causal vs. correlative with the broader healthspan improvements. #theory/unsubstantiated

**Cardiomyocyte / skeletal-muscle Ca²⁺ handling.** Taurine modulates sarcoplasmic-reticulum Ca²⁺ release and Na⁺/Ca²⁺ exchanger activity; aged striated muscle has well-documented Ca²⁺-handling deterioration. Could account for grip-strength, rotarod, and wire-hang improvements *without invoking any longevity pathway* — i.e., as a contractile-function rescue rather than slowed aging. **Untested**: whether observed strength gains depend on Ca²⁺-handling improvement specifically, or on parallel mt / protein-quality effects. #theory/unsubstantiated

**Bile-acid conjugation shifts.** Taurine → taurocholate, taurochenodeoxycholate; the taurine:glycine conjugation ratio modulates FXR / TGR5 signaling, which influences hepatic glucose and lipid metabolism. Could explain Singh's GTT/ITT improvements via enterohepatic signaling rather than any direct cellular-aging mechanism. **Untested**: whether bile-acid conjugation pattern shifts measurably at the supplementation doses used, and whether downstream FXR/TGR5 readouts change in supplemented animals. #theory/unsubstantiated

### Tier 2 — Plausible cascades through wiki-mapped pathways

If Tier 1 effects are real, several downstream cascades follow naturally. Both are consistent with Singh's reported phenotypes but **not separately demonstrated** as causal contributors.

**Cascade A — mitochondrial → cytosolic mtDNA leak → inflammaging:**

```
↑ mt-tRNA modification → ↑ OXPHOS efficiency → ↓ mtROS → ↓ mtDNA damage
                                ↓                              ↓
                       ↑ NAD⁺/NADH ratio          ↓ mtDNA cytosolic leakage
                                ↓                              ↓
                       ↑ [[sirtuin]] activity      ↓ [[cgas-sting]] activation
                                                              ↓
                                                 ↓ [[nf-kb]] inflammaging
                                                              ↓
                                                 ↓ SASP / [[chronic-inflammation]]
```

This single chain plausibly explains Singh's reported reductions in SASP cytokines, CpG methylation drift, WBC/monocyte normalisation in NHPs, and inflammasome-relevant readouts — all from one upstream lever. **Untested**: each link in the chain is independently established in the aging literature, but the *integrated cascade attributable to taurine specifically* has not been demonstrated. #theory/unsubstantiated

**Cascade B — energy-sensing → mTOR → autophagy:**

```
↑ OXPHOS → ↑ ATP turnover stability → modulates [[ampk]] tone
                                              ↓
                                       ↓ [[mtor]]C1 activity (Singh reports ↓ pRS6P)
                                              ↓
                                       ↑ [[autophagy]] (Singh reports ↑ LC3A/B)
                                              ↓
                                       ↑ [[mitophagy]] via [[pink1-parkin-pathway]]
```

Internally consistent with Singh's own readouts. **Note the direct conflict with Sharma 2025**, which shows taurine *activating* mTORC1 via Rag-GTP in the bone-marrow niche. If both findings are real, the directionality of mTOR modulation must be tissue-context-specific — a substantial complication that has not been addressed in the literature. #theory/unsubstantiated #gap/contradictory-evidence

### Tier 3 — Alternative explanations that don't require taurine to be the active ingredient

Worth listing because Singh is a single-laboratory finding and the rodent literature is not consistent.

- **Pharmacological supraphysiology.** At 1,000 mg/kg/day in mice (~6 g/day human equivalent by surface-area scaling), tissue concentrations may exceed physiological ranges. The improvements could reflect drug-like effects of high-dose GABA-A partial agonism, glycine-receptor modulation, or osmotic regulation, rather than any "deficit replacement". This frame is neutral about whether Singh's healthspan gains are real — it changes how to interpret them for human translation. #theory/unsubstantiated
- **Mild caloric-restriction confound.** Daily oral gavage of a sulfonate-amine compound adds nitrogen + sulfur load and may transiently shift food intake. Singh did report ~10% body-weight suppression in T1000 females — directionally consistent with mild CR. [[caloric-restriction]] is mechanistically much better characterised; its phenotypic overlap with Singh's data is non-trivial. **Untested**: pair-feeding controls were not reported in Singh 2023's main text; attribution between taurine-specific and CR-like effects is unresolved. #theory/unsubstantiated
- **Microbiome shifts.** Taurine plus bile-acid conjugation alters gut sulfate metabolism (taurine → H₂S via *Bilophila wadsworthia* and related taxa), with downstream signaling effects. Could be confound, mediator, or red herring. **Untested**: no microbiome data reported in Singh 2023. #theory/unsubstantiated
- **Anxiolytic / neuromuscular confound on behavioural readouts.** GABA-A partial agonism by taurine directly improves open-field, rotarod, and memory assays in rodents independently of any aging mechanism. Some of Singh's "healthspan" gains may be acute neuromodulation rather than slowed aging. **Untested**: whether comparable improvements would be seen with a non-aging-relevant GABA-A modulator (which would falsify the aging-mechanism reading of those endpoints). #theory/unsubstantiated

### How the theories interact with the empirical contradictions

- The mt-tRNA / OXPHOS story is the most mechanistically satisfying and the one Singh emphasises, but the deficit-rescue version requires that tissue taurine *declines* with age. Massie et al. report tissue taurine **unchanged** in aged C57BL/6 mice — Singh's strain. If tissue taurine doesn't decline, the deficit-rescue framing of the mt-tRNA mechanism has no upstream driver in this strain. (A pharmacological framing — supplementation pushes the modification *above* baseline rather than rescuing a deficit — survives this critique but is not what the paper's narrative argues.)
- The Tier 3 alternatives (pharmacological exposure, food-intake/body-weight mediation, microbiome, and acute neuromodulation) offer ways for some healthspan readouts to improve without establishing slower organismal aging.
- **Current data cannot rank these mechanisms.** Calling the result primarily GABAergic, caloric-restriction-like, antioxidant, or mt-tRNA-mediated would exceed the evidence. The defensible inference is only that Singh's high-dose intervention may be pharmacological rather than deficit replacement if the age-related-deficiency premise fails.

**None of the above has been directly tested for its causal contribution to taurine's reported phenotypes.** #theory/unsubstantiated

## Exercise and sports context (mechanistically distinct from aging claim)

Taurine is extensively used in the sports-performance and energy-drink context, and a separate body of literature documents its effects on exercise outcomes. This evidence is mechanistically distinct from the aging-intervention claim and should not be conflated with it: the exercise studies are largely in young healthy adults, at shorter timeframes, with different endpoints.

Chen 2021 systematic review of taurine and exercise [^chen2021]:
- 10 studies included (PRISMA-compliant; initial 1,046 articles screened, 36 assessed for eligibility, 10 included for systematic analysis)
- Dose range across studies: 0.05 g (~50 mg) to 6 g/day (or acute bolus) — not 1–6 g; the low end is the strength-exercise dose
- For aerobic exercise: ~1 g × 5 times/day before and after exercise reduced blood lactate in some studies; acute 6 g before high-intensity endurance exercise increased glycerol (fat oxidation marker) but did not reduce lactate; 2 g × 3/day during endurance training decreased DNA damage markers (CK also increased in one study)
- For strength exercise: 0.05 g/day for 14 days before eccentric exercise decreased muscular fatigue and increased enzymatic antioxidants (SOD, CAT, GPx); da Silva 2014 (n=21) is the key study
- Risk of bias: heterogeneous; at least 5 of 10 studies had high risk of blinding; 5 had high risk of randomization concerns; study conclusions are limited by design heterogeneity and small sample sizes
- This is a systematic review only — no meta-analysis with pooled effect sizes was performed

Da Silva 2014 — eccentric exercise + taurine supplementation [^dasilva2014]:
- n=21 young adults (mean age 21 ± 6 yr; placebo n=10; taurine n=11); not n=9 as sometimes cited
- Taurine group showed decreased muscle soreness, reduced lactate dehydrogenase, reduced creatine kinase activity, and reduced oxidative damage markers post-eccentric exercise
- Supplementation associated with increased strength recovery and thiol content
- Inflammatory markers showed no significant between-group differences
- Acute single-timepoint study in young adults; not aging-relevant directly

**The exercise data should not be used to support the aging-intervention claim.** The populations (young vs. old), timescales (acute/weeks vs. years), doses, and endpoints are all different.

## Pharmacology and dose considerations

| Parameter | Value | Notes |
|---|---|---|
| Oral bioavailability | ~100% | Rapid intestinal TauT-mediated absorption |
| Plasma half-life | 0.5–1.5 h | Rapid; primarily renal excretion |
| Tissue accumulation | Heart, retina, skeletal muscle, brain | With chronic dosing; slow turnover |
| EFSA ADI | Not established | Up to ~6 g/day appears well-tolerated in adults short-term |
| Mouse interventional dose | 1,000 mg/kg/day oral gavage | Singh 2023; C57BL/6J mice; rodent-to-human allometric equivalent is poorly defined |
| Energy drink content | ~0.4–1 g/can | Major modern Western source |
| Typical supplement dose | 0.5–3 g/day | Far below Singh 2023 mouse-equivalent dose |

Long-term safety in older adults at supplementation doses relevant to the mouse interventional data is not established. #gap/long-term-unknown

#gap/dose-response-unclear — The Singh 2023 mouse dose (~1,000 mg/kg/day) does not translate cleanly to typical supplement doses (0.5–3 g/day in a 70 kg human). Allometric surface-area scaling from mouse to human would require ~6,000+ mg/day equivalent — far above common supplementation practice.

## Aging-intervention status summary

| Dimension | Status |
|---|---|
| Biomarker premise (taurine declines with aging) | **Not universal / likely cohort-dependent** — Fernandez 2025 and Marcangeli 2025 find stable or increasing adult trajectories; Kim 2026 finds non-monotonic frailty associations |
| Mouse lifespan extension | 10–12% median increase (both sexes, C57BL/6J, 14 mo start, 1000 mg/kg/day oral); life expectancy at 28 mo increased 18–25%; p < 0.00001 log-rank (Singh 2023); not yet independently replicated |
| NHP health-span benefit | Reported (Singh 2023); not yet independently replicated |
| Human observational association | Mixed-direction EPIC-Norfolk associations; no age/function association in Marcangeli; frailty-dependent non-monotonic pattern in Kim |
| Human methylation result | **None published** — Singh's CpG/histone experiments were mouse-only |
| Human RCT for aging endpoints | TauAge completed (n=90, 4 g/day × 6 mo) but no results posted as of 2026-07-11 |
| Supplement safety (short-term) | Appears well-tolerated up to ~6 g/day |
| Cancer signal | High-dose oral taurine accelerated established transplanted myeloid leukaemia in mice; initiation/general-population human risk unknown |
| Long-term safety in older adults | Not established |

## Limitations and gaps

- #gap/contradictory-evidence — Singh 2023's stitched cross-sectional age decline versus stable/increasing trajectories in Fernandez 2025 and Marcangeli 2025; Kim 2026 indicates frailty-related nonlinearity
- #gap/needs-human-replication — No published interventional human result for DNA methylation, biological age, frailty, or longevity endpoints; TauAge results pending
- #gap/needs-replication — Mouse lifespan extension is single-lab (Yadav/Columbia); ITP validation not yet conducted
- #gap/long-term-unknown — Safety at high doses in older adults not established
- #gap/dose-response-unclear — Mouse-to-human dose translation unresolved
- #gap/no-fulltext-access — Fernandez 2025 (Science, closed-access; 10.1126/science.adl2116) remains abstract + author-analysis-repository verified; da Silva 2014 remains abstract-only.
- #gap/needs-human-replication — Sharma 2025 establishes progression of existing myeloid leukaemia at high mouse exposure, not cancer initiation or ordinary-dose human risk
- #gap/needs-replication — adipose-browning gene-programme readouts (CIDEA, PGC-1α, PRDM16, UCP1/UCP2 upregulation by taurine + exercise) and PI3K/Akt cardiac-remodelling pathway (Bax/Bcl2 normalisation, caspase reduction) as synthesised by Zhang 2026 are largely from a small set of research lineages (Brazilian obese-women cohorts; STZ-diabetic Wistar rats); independent replication with human biopsy/imaging endpoints is needed.

## Cross-references

- [[mitochondrial-dysfunction]] — proposed mechanism (mt-tRNA modification; also one of Singh 2023's claimed hallmark connections)
- [[hallmarks-of-aging]] — Singh 2023 claims taurine deficiency spans multiple hallmarks simultaneously
- [[cellular-senescence]] — Singh 2023 proposes taurine supplementation reduces cellular senescence markers; mechanism unverified
- [[autophagy]] — proposed connection (Singh 2023 mechanism); preliminary, not yet mechanistically established
- [[mtor]] — proposed as a downstream target of taurine signaling; preliminary
- [[caloric-restriction]] — distinct mechanism, both proposed lifespan extenders in mice; CR effect is mechanistically better characterized and independently replicated
- [[mitophagy]] — taurine's mt-tRNA modification role connects indirectly to mitochondrial quality control

## Footnotes

[^singh2023]: [[studies/singh-2023-taurine-deficiency-aging]] · multi-species cross-sectional + in-vivo supplementation · model: C57BL/6J mice (14 mo start; n=60–64/group) + rhesus macaques (15 ± 1.5 yr; n=5 health-span) + human cross-sectional (serum taurine decline Fig. 1C) + EPIC-Norfolk metabolomics (n=11,966) + C. elegans · log-rank p < 0.00001 (lifespan) · gold OA (10.1126/science.abn9257) · **PDF verified end-to-end 2026-05-05**

[^fernandez2025]: [[studies/fernandez-2025-taurine-aging-biomarker]] · observational · BLSA humans n=742 (longitudinal, ages 26–100) + Balearic n=72 + PREMED n=159 + rhesus n=32 + SLAM mice n=39 · circulating taurine stable/increasing with age; health associations heterogeneous · doi:10.1126/science.adl2116 · **abstract + authors' public Figshare analysis repository checked 2026-07-11; full article closed-access** · #gap/no-fulltext-access

[^marcangeli2025]: [[studies/marcangeli-2025-taurine-aging-humans]] · n=137 men ages 20–93 (49 inactive/88 active) · cross-sectional · fasting serum isotope-dilution LC–MS/MS · no association with age, muscle/physical function, insulin-sensitivity indices, CRP, or ex-vivo muscle mitochondrial function · doi:10.1111/acel.70191 · PMID 41061678 · PMCID PMC12507425 · **open full text verified 2026-07-11**

[^kim2026]: [[studies/kim-2026-taurine-frailty]] · n=146 adults (young n=45; older robust n=40, prefrail n=30, frail n=27) · cross-sectional · no young-vs-old difference (p=0.29); robust highest, prefrail lowest, frail intermediate; prefrail-specific inverse taurine–TNF-α association · doi:10.1038/s41514-026-00342-4 · PMID 41667480 · PMCID PMC13002985 · **open full text verified 2026-07-11**

[^chen2021]: [[studies/chen-2021-taurine-exercise-dose-response]] · systematic-review · model: human exercise studies · 10 studies included; doses 0.05–6 g/day · gold OA (10.3389/fphys.2021.700352) · **PDF verified end-to-end 2026-05-05; no pooled meta-analysis — systematic review only; high risk of bias in majority of included studies**

[^dasilva2014]: [[studies/dasilva-2014-taurine-eccentric-exercise]] · in-vivo (human) · n=21 (placebo n=10, taurine n=11); mean age 21±6 yr · closed-access (10.1139/apnm-2012-0229); #gap/no-fulltext-access · **note: n=21, not n=9 as sometimes cited; abstract-only verification**

[^sharma2025]: [[studies/sharma-2025-taurine-leukaemogenesis]] · in-vivo + scRNA-seq + CRISPR + patient-derived AML + multiomics · model: blast-crisis CML/AML · oral arm n≈14–15/group: taurine-free chow plus 0, 0.01, or 10 mg/mL drinking-water taurine; 10 mg/mL accelerated established bcCML and produced ~3-fold higher likelihood of death · mechanism: TAUT uptake → RAG-GTP → mTOR → glycolysis · does not test cancer initiation · doi:10.1038/s41586-025-09018-7 · **relevant full-text and extended-data claims verified 2026-07-11**

[^tzang2024]: [[studies/tzang-2024-taurine-metabolic-syndrome-meta-analysis]] · systematic review + meta-analysis of RCTs · 25 trials, 1,024 participants; doses 0.5–6 g/day; durations 5–365 days · pre-registered INPLASY2023120081; PRISMA 2020 · pooled WMD: SBP −3.999 mmHg (p=0.017, I²=85%), DBP −1.509 mmHg (p=0.002), FBG −5.882 mg/dL (p=0.018), TG −18.315 mg/dL (p<0.001), TC −8.305 mg/dL, LDL ↓ sig, HDL +0.644 mg/dL (ns), BW/BMI ns; meta-regression dose-dependence for DBP and FBG; no significant adverse events · Tzang CC, Chi LY, Lin LH, Lin TY, Chang KV, Wu WT, Özçakar L. *Nutrition and Diabetes* 2024;14:29 · gold OA (10.1038/s41387-024-00289-z) · 24 citations; FWCI 15.62 (top 1%) · **PDF verified pages 1–5 (intro + methods + results + Tables 1–2) 2026-05-04**; subset of trials industry-funded (Taisho Pharmaceutical) — partial #gap/contradictory-evidence

[^chouraki2017]: [[studies/chouraki-2017-framingham-amine-biomarkers-dementia]] · prospective longitudinal observational (metabolomics) · n=2,067 dementia-free Framingham Offspring participants (mean age 55.9 ± 9.7 yr; 52.4% women); 217 plasma metabolites; mean follow-up 15.6 ± 5.2 yr; 93 incident dementia cases; multivariate Cox models · taurine HR=0.74 (95% CI 0.60–0.92) for incident dementia (suggestive — did not reach Bonferroni significance for 217 metabolites); glutamate HR=1.38, anthranilic acid HR=1.40, hypoxanthine HR=0.74 also showed suggestive associations · Chouraki V, Preis SR, Yang Q, Beiser A, Li S, Larson MG, Weinstein G, Wang TJ, Gerszten RE, Vasan RS, Seshadri S. *Alzheimer's & Dementia* 2017;13(12):1327–1336 · green OA via PMC5722716; PMID 28602601 · 130 citations · **abstract verified via PubMed efetch 2026-05-04; full PDF retrieval failed (PMC backend rejected automated download); body-text quantitative claims beyond abstract unverified — #gap/no-fulltext-access for body-text figures**

[^zhang2025dementia]: [[studies/zhang-2025-taurine-dementia]] · prospective cohort · n=27,786; plasma subset n=3,693; median follow-up 24.9 yr; 3,224 dementia cases · no adjusted association of dietary or plasma taurine with all-cause dementia, Alzheimer's disease, or vascular dementia · doi:10.1111/jnc.70298 · PMID 41250277 · PMCID PMC12623682 · **open full text verified 2026-07-11**

[^ito2023]: [[studies/ito-2024-taurine-deficiency-cardiomyopathy-aging]] · review · *J Pharmacol Sci* 2024;154(3):175–181 (received 2023-10-25; published 2024) · Ito T, Murakami S. (Fukui Prefectural University) · covers: heart taurine ~20 mM (~100× plasma); TauT/SLC6A6 mutations and DCM (Shakeel et al rs67559364; Ansar et al Gly399Val with 10% activity; Preising et al Ala78Glu with retinal degeneration but no DCM at 4–11 yr; Garnier GWAS OR=1.36 in 2,719+4,440 individuals); TauTKO mouse phenotype (median lifespan 583 d, 160 d shorter than WT; DCM, retinal degeneration, hearing loss, decreased bone density); 3p syndrome; explicit acknowledgement that rodent age-decline literature is mixed (F344: liver/kidney/brain/blood ↓ but heart/muscle unchanged; Massie et al — C57BL/6 male tissue taurine **unchanged** with age; Dawson — 1.5% taurine in F344 rat drinking water restored serum taurine but **no effect on lifespan**); concludes "dietary taurine deficiency does not induce a taurine-deficient state" in humans, vegetarians do not develop DCM despite low intake · gold OA CC-BY (10.1016/j.jphs.2023.12.006) · 14 citations · **PDF verified pages 1–5 (full review) 2026-05-04**

[^nie2025]: Nie Z, Liu Y, Zhang M, Wu C, Cao Q, Xu J, Zheng Y, Min Z, Zhang W, Han S. *Nutrition Reviews* 2025 (online ahead of print, Nov 23) · n=34 RCTs; PRISMA-compliant; PROSPERO CRD42024577852; Hangzhou Normal University · pooled effect sizes: FBG MD −5.90 mg/dL (−9.65 to −2.15); HbA1c MD −0.21% (−0.37 to −0.05); fasting insulin SMD −0.55 (−0.78 to −0.32); HOMA-IR MD −0.57 (−0.74 to −0.40); TG MD −14.42 mg/dL (−23.60 to −5.25); TC MD −12.41 mg/dL (−19.10 to −5.71); LDL-C MD −5.08 mg/dL (−8.35 to −1.81); SBP MD −4.38 mmHg (−7.26 to −1.50); DBP MD −2.54 mmHg (−3.97 to −1.11); AST MD −9.65 U/L; ALT MD −8.26 U/L; CRP SMD −1.26; TNF-α MD −0.35 pg/mL; MDA SMD −1.16. Optimal dose 1.5–3.0 g/day; ≥8 wk for glucose/lipid, <8 wk for BP/inflammation · doi:10.1093/nutrit/nuaf220 · PMID 41275513 · abstract verified via PubMed efetch 2026-05-08

[^wang2026]: Wang K, Ma CH, Khoramjoo M, Kung JY, Oudit GY. *BMC Infectious Diseases* 2026;26:774 · 27 oral-taurine trials, n=1,030, conducted in non-PASC populations sharing selected pathological processes; authors explicitly state no direct PASC taurine trial had reported · separate 6-study observational PASC analysis n=308: plasma taurine SMD −0.35 (95% CI −0.63 to −0.08) vs recovered controls · doi:10.1186/s12879-026-13009-y · PMID 41803812 · PMCID PMC13085605 · **open full text checked 2026-07-11; prior wiki wording falsely described the 27 trials as long-COVID treatment trials and was corrected**

[^chen2026]: Chen Z, Niu Z. *Frontiers in Physiology* 2026;17:1809107 (Skeletal Physiology section) · narrative review (no pooled effect sizes; integrative tables of taurine + glutamine + exercise RCTs in aging) · doi:10.3389/fphys.2026.1809107 · gold OA CC-BY · synthesises ~7 taurine RCTs (doses 0.5–3 g/day; durations 2 wk to 14 wk; populations: elderly women ~83 yr, healthy elderly men 60–69 yr, heart-failure NYHA II–III, postmenopausal women, T2D women, sarcopenic-obesity women, Japanese 8-yr cohort n=1,454) and ~9 glutamine RCTs into mechanistic framework covering protein metabolism, mitochondrial function, redox balance, neuroinflammation, and body composition · concludes context-dependent (not uniformly synergistic) interactions; mechanistic human data linking molecular changes to functional aging outcomes "remain limited" · landing-page full text fetched 2026-05-09; not yet PDF-verified end-to-end · #gap/needs-replication — most browning-gene + PI3K/Akt readouts derive from a small set of research lineages

[^zhang2026]: Zhang L, Zhang Y, Wang Y. *Frontiers in Nutrition* 2026 · narrative review (PubMed/MEDLINE + Scopus + Web of Science through January 2026; manual reference screening) · doi:10.3389/fnut.2026.1783074 · gold OA CC-BY · structured synthesis of ~25 preclinical and clinical taurine + exercise studies across obesity, aging, and diabetes populations; comprehensive mechanistic framework covering adipose-tissue plasticity (CIDEA, PGC-1α, PRDM16, UCP1/UCP2 browning genes; CPT1, PPARα/γ, LPL, HSL, ACOX1, CD36 FAO genes), metabolic flexibility, neuroinflammaging (BDNF-TrkB, NF-κB suppression), PI3K/Akt-mediated cardiac remodelling (Bax/Bcl2 normalisation in STZ-diabetic Wistar rats), and renin-angiotensin axis suppression · key clinical n's incorporated: De Carvalho obese-women n=16 (3 g/day, 8 wk), Batitucci obese-women n=22 (3 g/day + deep water running, 8 wk), Bagheri TRX-T2D n=40 (3 g/day, 8 wk), elderly-women MMSE/cognition n=48 (1.5 g/day, 14 wk), sarcopenic-obesity n=35 (3 g/day, 16 wk) · explicitly acknowledges synergy-vs-additivity remains unresolved and methodological heterogeneity is high · landing-page full text fetched 2026-05-09; not yet PDF-verified end-to-end · #gap/needs-human-replication — adipose-browning gene-expression data largely preclinical / Brazilian-research-lineage; cardiac-remodelling apoptosis-pathway evidence rat-only

[^moore2026]: Moore JA, Cousins AL, Taylor RMJ, Griffiths AR, Young HA. *Foods* 2026;15(4):634 · n=244 (8 RCTs); systematic review (no meta-analysis); Swansea University; healthy participants only · acute single-dose taurine 1–3 g (up to ~50 mg/kg); most cognitive outcomes showed **no effect**; mood/well-being effects "minor, inconsistent"; caffeine+taurine showed performance benefits but caffeine-alone arm not isolated; no studies measured habitual SCAA intake or baseline status · **COI:** Moore JA + Young HA received unrelated research funding from Viridian Nutrition (taurine supplement vendor); Viridian had no role in this review · gold OA · doi:10.3390/foods15040634 · PMID 41750826 · abstract verified via PubMed efetch 2026-05-08
