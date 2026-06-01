---
type: compound
aliases: [beta-NMN, beta-nicotinamide mononucleotide, NMN, nicotinamide mononucleotide]
pubchem-cid: 14180
inchikey: DAYLJWODMCOQEW-TURQNECASA-N
chembl-id: CHEMBL610238
drugbank-id: null
cas-number: null
mechanisms: [nad-precursor, sirtuin-activator, ampk-modulator, mitochondrial-support]
measured-targets: ["[[sirtuin]]", "[[nmnat1]]", "[[nmnat2]]", "[[nmnat3]]", "[[slc12a8]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[mitochondrial-dysfunction]]", "[[epigenetic-alterations]]"]
clinical-stage: phase-4
human-evidence-level: limited
half-life: "~2.5–3 h (NMN itself); NAD+ elevation persists longer in tissues"
translation-gap: effect-size-too-small
next-experiment: "Phase 3 hard-endpoint trial in sarcopenia or frailty (>=400 older adults, >=12 mo); current RCTs show NAD+ rise but null on muscle strength, body comp, hepatic insulin sensitivity."
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "All six primary-source PDFs verified against quantitative claims (R23d). Canonical-database identity fields (PubChem CID 14180, InChIKey, ChEMBL) not independently re-verified against databases — recommend cross-check on next lint pass. R34 recency refresh (2026-05-08): Igarashi 2024 GeroScience walking-speed RCT, Tang 2026 Nutrients BP meta-analysis, Caldo-Silva 2025 J Cachexia muscle meta-analysis, Song 2025 Crit Rev Food Sci glucose/lipid meta-analysis, Schloesser 2026 Nat Metab three-precursor comparison integrated from PubMed abstracts + Crossref metadata pending future verifier pass."
literature-checked-through: 2026-05-15
---


# NMN (beta-Nicotinamide Mononucleotide)

A mononucleotide NAD+ precursor that enters the [[nad-biosynthesis|NAD+ salvage pathway]] one enzymatic step upstream of NAD+ itself. The premise for its use in aging: NAD+ levels decline progressively with age across tissues — driven by upregulation of the NADase [[cd38]], increased [[parp]] activation from accumulating DNA damage, and reduced activity of the rate-limiting salvage enzyme [[nampt]] — such that supplementing NMN can restore NAD+, reactivate [[sirtuin|sirtuin]] deacylases, and improve metabolic and cellular homeostasis. Imai and Sinclair groups have led most of the mouse work; the Yoshino/Imai group published the first positive human RCT (muscle insulin sensitivity, Science 2021).

## Identity

- **PubChem CID:** 14180
- **InChIKey:** DAYLJWODMCOQEW-TURQNECASA-N
- **ChEMBL:** CHEMBL610238
- **Molecular formula:** C₁₁H₁₅N₂O₈P
- **Molecular weight:** 334.22 g/mol
- **Class:** pyridine nucleotide (mononucleotide form of nicotinamide); immediate biosynthetic precursor to NAD+
- **Related compound:** [[nr|Nicotinamide Riboside (NR)]] — one phosphate group fewer; NMN = NR + phosphate group

## Mechanism of action

### NAD+ biosynthesis route

NMN sits inside the NAD+ salvage cycle, one step from the end product:

```
Nicotinamide (NAM)
    |  NAMPT (rate-limiting)
    v
NMN  <-- also: NR + NMRK1/2 (NR kinase route)
    |  NMNAT1/2/3 (NMNAT enzymes)
    v
NAD+
```

The NMNAT-catalyzed reaction is: NMN + ATP → NAD+ + PPi. Three NMNAT isoforms have distinct subcellular localizations: NMNAT1 (nuclear), NMNAT2 (cytosol/Golgi), NMNAT3 (mitochondrial). All three can use NMN as substrate, so intracellular NMN can contribute to NAD+ in multiple compartments [^yoshino2011].

### Cellular uptake — the SLC12A8 controversy

Whether intact NMN enters cells is a subject of active dispute:

- **Grozio et al. (2019)** identified *Slc12a8* (SLC12A8) as a specific NMN transporter. *Slc12a8* is most highly expressed in the jejunum and ileum of the small intestine, and also in the pancreas, liver, and white adipose tissue at lower levels. Transport is sodium ion-dependent but chloride-independent; NR is not efficiently transported (IC₅₀ for NR ~77 µM vs ~23 µM for NMN). Whole-body *Slc12a8*KO mice (CRISPR) showed significant NAD+ deficits in jejunum and ileum during the dark period. *Slc12a8* expression is upregulated in the aged ileum (compensatory mechanism). Authors and inventors hold patents on this transporter [^grozio2019]. #gap/needs-replication
- **Competing view:** Several groups find that NMN must first be dephosphorylated to [[nr|NR]] by CD73 (5'-ectonucleotidase) at the plasma membrane before cellular uptake, then rephosphorylated to NMN intracellularly. Under this model, NMN and NR are functionally equivalent orally. #gap/contradictory-evidence

Resolution matters clinically (it affects whether NMN has tissue-distribution advantages over NR), but the downstream NAD+ elevation from oral NMN is not in dispute.

### Why NAD+ declines with age

Three mechanisms are additive and together produce a tissue-dependent decline in NAD+ (~30–90% across mammalian tissues; magnitude varies substantially by tissue per Yoshino 2018 review) in old vs young animals [^yoshino2011]:

1. **CD38 upregulation** — CD38 is an NADase expressed on immune cells; it is chronically upregulated during aging-associated inflammation ([[inflammaging]]).
2. **PARP hyperactivation** — accumulating DNA damage (see [[genomic-instability]]) chronically activates PARP1/2, which consumes NAD+ for poly-ADP-ribosylation.
3. **NAMPT decline** — the rate-limiting enzyme in the salvage pathway shows reduced expression/activity with age in several tissues including muscle.

**The age-related decline is tissue-specific in humans — and is *not* observed in whole blood.** [[studies/tretowicz-2026-blood-nad-stable-aging|Trętowicz et al. 2026]] (n=303 across 7 cohorts) found whole-blood NAD+ is stable with age (P=0.24–0.62, R²=0.012–0.051) using a UHPLC-HRMS assay rigorously controlled for pre-analytical artifacts. The negative blood result does NOT contradict tissue-level decline (Janssens 2022 muscle, Massudi 2012 skin remain valid), but invalidates [[nad-blood-biomarker|blood NAD+ as an aging biomarker]] and undermines the simplest version of the NMN-restoration rationale ("supplement to correct age-related blood NAD+ deficit"). NMN supplementation can still raise blood NAD+ above baseline (confirmed across all NMN trials), but the baseline is not "low for age." #gap/contradictory-evidence [^tretowicz2026]

### Downstream effectors of NAD+ restoration

Restored NAD+ activates:
- **[[sirtuin|Sirtuins]]** (SIRT1–7): NAD+-dependent deacylases regulating gene expression, mitochondrial biogenesis (SIRT1/3), DNA repair (SIRT6), and metabolic adaptation.
- **[[parp|PARP1/2]]**: paradoxically, adequate NAD+ substrate allows efficient DNA repair rather than the "substrate depletion" feedback loop.
- **[[cd38]]**: NADase activity is substrate-driven; sufficient NAD+ maintains signaling pools.

## Effects on aging hallmarks

| Hallmark | Proposed effect | Strength of evidence |
|---|---|---|
| [[deregulated-nutrient-sensing]] | NMN restores SIRT1-mediated nutrient sensing and insulin signaling in muscle | Mouse: strong; human: limited (one RCT) |
| [[mitochondrial-dysfunction]] | NMN increases SIRT3 activity → deacetylates ETC subunits; improves mitochondrial respiration in aged muscle and liver | Mouse: moderate; human: in-progress |
| [[epigenetic-alterations]] | SIRT1/6 deacetylate histones and regulate DNA methylation patterning; NMN-driven NAD+ supports these activities | Mouse: modest data; human: unknown |
| [[chronic-inflammation]] | Reduced SASP-like signaling downstream of SIRT1 activation; indirect via improved cellular homeostasis | Mouse: limited; human: unknown |

## Preclinical evidence (mouse)

### Yoshino 2011 — foundational metabolic study

Yoshino et al. used two mouse models of type 2 diabetes. In the HFD model, wild-type B6 mice (3–6 months) fed a 42%-fat diet were given NMN (500 mg/kg/day i.p.) for 7–10 consecutive days; NAD+ levels were significantly restored in liver and WAT, glucose tolerance was completely normalized in diabetic females, and hepatic insulin sensitivity was improved (elevated liver p-AKT). In the age-induced model, naturally occurring diabetic male mice (15–26 months, screened for fasting glucose >120 mg/dL) received a single dose of NMN (500 mg/kg i.p.), which normalized impaired glucose tolerance (n=11). Lipid profiles were also corrected by NMN. Mechanistically, the authors showed SIRT1 is at least one mediator: SIRT1-specific inhibitor EX527 abrogated NMN's restoration of Gsta2 expression in TNF-alpha-treated hepatocytes [^yoshino2011]. This was the first study showing that NAD+ restoration via NMN has tissue-metabolic consequences in vivo in mammals.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — NAD+ salvage is conserved; SIRT1 mechanism conserved |
| Phenotype conserved in humans? | partial — insulin resistance translates; magnitude unclear |
| Replicated in humans? | yes (Yoshino 2021 Science, limited scope) |

### Mills 2016 — long-term NMN administration in aging mice

NMN administered in drinking water at two doses (100 or 300 mg/kg/day) to male C57BL/6N mice beginning at 5 months for 12 months (aged to 17 months) produced broad improvements in age-related physiological decline [^mills2016]. The two doses produced partially different effect profiles:

- Suppressed age-associated body weight gain (both doses; 300 mg/kg/day more pronounced, ~9% reduction)
- Improved energy metabolism: oxygen consumption significantly increased at both doses during the dark period; respiratory exchange ratio decreased (shift toward fat oxidation) in both groups
- Enhanced locomotor activity (100 mg/kg/day showed higher dark-period ambulations; 300 mg/kg/day showed slightly lower ambulations but other benefits)
- Improved eye function (electroretinography: both doses reduced fundus light-colored spots from the *rd8* Crb1 mutation; 300 mg/kg/day improved scotopic a-wave)
- Improved bone density (dose-dependent increase in bone mineral density at 12 months)
- Improved insulin sensitivity at 12 months in body-weight-matched comparisons; plasma lipid changes were not significant at all time points
- Preserved myeloid-lymphoid immune composition
- No adverse effects; no difference in mortality rate by log-rank test

NAD+ levels tended to increase in liver at both doses (p=0.06 at 6 months; not significant in skeletal muscle or WAT). Mitochondrial oxidative capacity was significantly enhanced in 300 mg/kg/day skeletal muscle (high-resolution respirometry). Lifespan was not a primary endpoint and no survival difference was detected. #gap/needs-replication — One group, one genetic background, male-only.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial — most endpoints untested in humans |
| Replicated in humans? | no (Yoshino 2021 tested only insulin sensitivity) |

### de Picciotto 2016 — vascular aging

NMN (300 mg/kg/day in drinking water) for 8 weeks in old male C57Bl/6 mice (26–28 months, from Charles River / NIA colony; n=13–22 per group) restored maximum endothelium-dependent dilation (EDD) and NO-mediated EDD to levels not significantly different from young controls, reduced aortic pulse wave velocity (aPWV) and elastic modulus, reduced superoxide production and nitrotyrosine abundance, restored aortic collagen I to young-control levels, and increased SIRT1 activity (reduced acetylated p65 NF-kB ratio) [^depicciotto2016]. Aortic NAD+ was not detectably increased in vivo during chronic NMN drinking (authors attribute this to rapid metabolic turnover), but in vitro acute NMN incubation (100 µM, 48h) produced a threefold increase in aortic NAD+. NMN had no significant effect on EDD or arterial stiffness in young mice. Effect was attributed to NMN-driven NAD+ restoration and consequent SIRT1 activation reducing oxidative stress. #gap/needs-human-replication

## Human evidence

### Irie 2020 — first-in-human safety and PK

Single oral doses of NMN (100, 250, 500 mg) were administered sequentially (each separated by ≥1 week) to 10 healthy Japanese men (age 47.9±6.0 years) in a **single-arm, non-randomized** sequential dose-escalation study. NMN was safe and well-tolerated at all doses; no significant changes in hemodynamics, ophthalmic parameters, or sleep quality scores. Lab values showed small but statistically significant changes (bilirubin increased 51.3%; creatinine, chloride, and glucose decreased slightly), all within normal ranges and likely attributable to 5h fasting. **Plasma NMN itself was NOT successfully measured** — the authors state that freezing plasma samples before extraction caused NMN degradation, consistent with NMN's rapid clearance from blood; plasma NMN levels were therefore not reported. Downstream metabolites 2-Py (N-methyl-2-pyridone-5-carboxamide) and 4-Py (N-methyl-4-pyridone-5-carboxamide) increased significantly and dose-dependently in plasma, confirming NMN was absorbed and metabolized to NAD+ and catabolized [^irie2020]. This was primarily a safety study; it was not powered for efficacy endpoints.

### Yoshino 2021 (Science) — muscle insulin sensitivity RCT

The landmark human RCT [^yoshino2021]:

- **Design:** randomized, double-blind, placebo-controlled, 10-week parallel-group trial (not crossover); NCT03151239
- **Population:** postmenopausal women with prediabetes who were overweight or obese (BMI 25.3–39.1 kg/m²); n=25 completed (12 placebo, 13 NMN)
- **Dose:** 250 mg/day oral NMN (supplied by Oriental Yeast Co., Ltd., Tokyo, Japan)
- **Primary outcome:** skeletal muscle insulin sensitivity assessed as insulin-stimulated glucose disposal rate per kg fat-free mass during hyperinsulinemic-euglycemic clamp
- **Results:**
  - Muscle insulin sensitivity was **25±7% greater** after NMN than before (p<0.01); no significant change in the placebo group
  - **Muscle NAD+ itself did not significantly change** in either group; however, NMN increased skeletal muscle NAD+ turnover metabolites (N-methyl-nicotinamide, 2-PY, 4-PY) — indirect evidence of increased NAD+ flux rather than elevated steady-state NAD+
  - PBMC NAD+ (basal) increased significantly after NMN
  - Muscle AKT phosphorylation (Ser473 and Thr308) and mTOR phosphorylation (Ser2448) increased significantly during insulin infusion after NMN, not after placebo
  - Global transcriptome of quadriceps (RNA-seq) identified 308 differentially expressed genes during insulin infusion after NMN (vs 5 in placebo); most enriched pathway was **PDGF receptor binding**; specific genes significantly upregulated were ***PDGFRβ*, *CD90* (THY1), *CD109*, *COL1A1*, *COL5A1*, *COL6A1*** — markers of myogenic pericytes and muscle remodeling (not SIRT1, PIK3CA, or INSR as previously summarized)
  - **Mitochondrial oxidative capacity did not change** after 10 weeks of NMN or placebo (high-resolution respirometry of quadriceps biopsies)
  - No significant change in body composition, lipids, hepatic insulin sensitivity, adipose tissue insulin sensitivity, or systemic inflammation markers
- **Notable limitations:** n=25 women only (postmenopausal, prediabetic, overweight/obese); no men; parallel-group design; cannot generalize to broader populations. Authors note no men enrolled because NMN caused greater metabolic benefits in female than male mice in the preclinical work.

**This paper is the strongest human evidence for NMN's aging-relevant efficacy to date, but the effect is muscle-specific and restricted to insulin sensitivity; no systemic metabolic, body composition, or mitochondrial benefits were observed.**

### 2024–2026 NMN trials and meta-analyses (recency refresh, R34)

A wave of moderate-quality NMN RCTs and meta-analyses 2024–2026. Findings below are from PubMed abstracts + Crossref metadata; full PDFs not locally verified for any of these (flagged for future verifier pass). #gap/needs-replication

- **Igarashi 2024 (GeroScience) — older-adult walking and sleep [^igarashi2024]**: n=60 older adults, NMN 250 mg/day × 12 weeks. **Primary endpoint** (stepping test) was **null** at both 4 and 12 weeks. Secondary: 4-m walking time significantly shorter in NMN group at 12 weeks; blood NAD+ and metabolites significantly higher; PSQI sleep quality "Daytime dysfunction" and "Global PSQI" scores improved. UMIN000047871. **First positive function/sleep signal in healthy older adults at the Yoshino-2021 dose.**
- **Tang 2026 (Nutrients) — blood pressure meta-analysis [^tang2026]**: 10 RCTs, 11 arms, n=349. NMN reduced **resting DBP −2.15 mmHg** vs placebo (95% CI −3.68 to −0.61, statistically significant). Resting SBP reduction was not significant overall, but significant **−3.94 mmHg in age ≥60 subgroup** (95% CI −7.06 to −0.82). **Modest BP signal — clinically small but consistent.**
- **Caldo-Silva 2025 (J Cachexia Sarcopenia Muscle) muscle-function meta-analysis [^caldosilva2025]**: NMN no significant effect on skeletal muscle index (MD −0.42), handgrip strength, gait speed, or 5CST in older adults across pooled RCTs. **Class-level null on muscle-functional endpoints — challenges sarcopenia-prevention positioning.**
- **Song 2025 (Crit Rev Food Sci Nutr) glucose/lipid meta-analysis [^song2025]**: 12 RCTs, n=513. NMN raised blood NAD+ but **most clinically relevant outcomes** (fasting glucose, triglycerides, total cholesterol, LDL-C, HDL-C) **were not significantly different** between NMN and control. Risk of bias high in 5/12 studies, some concerns in 7/12. Authors conclude likely "exaggeration of benefits" in the field. **Strong null signal on metabolic biomarkers.**
- **Schloesser 2026 (Nat Metab) — three-precursor head-to-head [^schloesser2026]**: n=65 healthy adults, 14-day open-label randomized. NMN and NR comparably raise circulatory NAD+; NAM does not. Ex-vivo human-microbiota fermentation: **NR and NMN are converted to nicotinic acid (NA) by gut microbes**, and NA (not NMN/NR/NAM directly) is the potent NAD+ booster in whole blood. Authors propose a **gut-dependent mechanistic model**. **Reframes whether the Slc12a8 transporter route (Grozio 2019) is rate-limiting for systemic NAD+ elevation in humans.** #gap/contradictory-evidence

### Pencina 2023 — NAD augmentation in older overweight adults

MIB-626 (a microcrystalline formulation of β-NMN, 1000 mg twice daily = 2000 mg/day total) was given to overweight or obese adults (mean age 61.9±8.6 years, BMI 29.2±3.6 kg/m²) for **28 days** in a randomized, double-blind, placebo-controlled, parallel-group study; **n=21 MIB-626, n=9 placebo** (total n=30 randomized) [^pencina2023]:

- Blood NAD+ and metabolites (2-PY, 1-methylnicotinamide, nicotinamide) rose substantially in the MIB-626 group, not in placebo
- Body weight decreased: between-group difference **−1.9 kg** (95% CI −3.3, −0.5; p=0.008)
- Diastolic blood pressure decreased: between-group difference **−7.01 mmHg** (95% CI −13.44, −0.59; p=0.034); systolic BP difference was not significant (p=0.051)
- Total cholesterol decreased: difference **−26.89 mg/dL** (95% CI −44.34, −9.44; p=0.004); LDL difference **−18.73 mg/dL** (95% CI −31.85, −5.60; p=0.007); non-HDL difference **−24.56 mg/dL** (p=0.002)
- **No significant effect** on muscle strength, aerobic capacity (VO₂peak), insulin sensitivity (HOMA-IR), hepatic fat, intra-abdominal fat, or intramuscular NAD+ by 7T MRS
- Safe and well-tolerated; no serious adverse events; no flushing or liver enzyme elevation

**Diverges from Yoshino 2021 on insulin sensitivity** — populations, doses, formulation (microcrystalline MIB-626 vs standard NMN), durations (28 days vs 10 weeks), and endpoints (HOMA-IR vs hyperinsulinemic clamp) differ substantially. The failure to detect muscle NAD+ increase by 7T MRS is consistent with Yoshino 2021's finding that muscle steady-state NAD+ did not change. #gap/contradictory-evidence

| Trial | NCT | Phase | Status | Population | Dose | Primary endpoint |
|---|---|---|---|---|---|---|
| Yoshino 2021 (Imai/WashU) | NCT03151239 | — | Completed | Prediabetic postmenopausal women, n=25 (12 placebo, 13 NMN) | 250 mg/day, 10 wk | Muscle insulin sensitivity (hyperinsulinemic clamp) |
| Pencina 2023 (Bhasin/MGH) | — | — | Completed | Overweight/obese adults n=30 (21 active, 9 placebo), mean age 62y | MIB-626 1000 mg bid × 28 days | Safety; NAD augmentation; body composition |
| NCT04903210 | NCT04903210 | Phase 4 | Unknown | Hypertensive patients | not specified | Not specified |
| NCT07144527 | NCT07144527 | Recruiting | Active | Healthy older adults | not specified | Exercise tolerance |

#gap/long-term-unknown — No human trial has exceeded 12 weeks; long-term safety and efficacy data in humans are absent.

## Comparison with [[nr|Nicotinamide Riboside (NR)]]

NMN and NR are both NAD+ precursors that enter the salvage pathway immediately upstream of NAD+; they share a biosynthetic relationship (NMN = NR + phosphate). Key practical differences:

| Feature | NMN | NR |
|---|---|---|
| Entry point | NMN → NAD+ (1 step via NMNAT) | NR → NMN → NAD+ (2 steps) |
| Uptake route | SLC12A8 (if Grozio 2019 correct) or dephosphorylation to NR first | ENTs / equilibrative nucleoside transporters |
| MW | 334 g/mol | 255 g/mol |
| Oral bioavailability | Not precisely quantified in humans | Moderate; ~25% as NR, rest as metabolites |
| Human evidence | Yoshino 2021 (insulin sensitivity); Pencina 2023 | Multiple RCTs (Trammell 2016 et al.) |
| Cost | Higher (more complex synthesis) | Lower |

Neither compound has been shown superior in a head-to-head RCT with aging endpoints. #gap/contradictory-evidence

## Pharmacokinetics

- Oral NMN in humans is rapidly absorbed; **plasma NMN itself was not successfully quantified in Irie 2020** (freezing of plasma samples caused NMN degradation before extraction — a known pre-analytical issue). Downstream metabolites 2-PY and 4-PY peaked dose-dependently at ~300 min post-dose. Rodent studies (Mills 2016) show plasma NMN increases steeply within 2–5 min of oral gavage and is cleared within 15 min, with tissue NAD+ rising over 60 min. Whether this rapid rodent kinetic translates to humans is unconfirmed [^irie2020]. The archival record marks publication year as 2019 (submission) vs 2020 (journal print) — treat as Irie et al. 2020.
- Tissue half-life of the downstream NAD+ elevation is longer and tissue-dependent; liver and muscle show sustained NAD+ elevation for ≥12 h in rodent studies.
- Rapid plasma clearance does not necessarily mean low efficacy — NAD+ is sequestered intracellularly once synthesized.
- No reported CYP interactions; metabolized to nicotinamide and downstream catabolites (MeNAM, 2-PY, 4-PY).

#gap/dose-response-unclear — The relationship between oral dose, plasma exposure, tissue NAD+ elevation, and functional outcomes in humans is not established. The 250 mg/day dose in Yoshino 2021 showed muscle-specific insulin sensitivity improvement; the 2000 mg/day dose in Pencina 2023 raised blood NAD+ but did not improve insulin sensitivity (different formulation, population, and duration). Neither study detected a significant increase in steady-state muscle NAD+ by direct measurement. Dose-response curves in humans are absent.

## Safety

- Human trials to date (up to 2000 mg/day, up to 10 weeks) report no significant adverse effects compared to placebo [^irie2020][^yoshino2021][^pencina2023]. The longest trial is Yoshino 2021 (10 weeks at 250 mg/day); Pencina 2023 used 2000 mg/day for 28 days.
- **Theoretical concern:** NAD+ catabolite nicotinamide (NAM) accumulates at high NMN doses; high NAM inhibits sirtuins (negative feedback). This has been documented in rodents at supraphysiologic doses. At supplement-range doses, NAM accumulation appears modest.
- **Flushing:** Unlike nicotinic acid (niacin), NMN does not cause prostaglandin-mediated flushing. Nicotinamide and NMN do not activate the GPR109A receptor responsible for niacin flush.
- Long-term safety data are absent. #gap/long-term-unknown

## Limitations and gaps

- **Limited human evidence:** Only two completed RCTs; both small (n<30 randomized per trial), short (≤10 weeks), and narrow in population (postmenopausal prediabetic women; overweight/obese middle-aged and older adults). Effect sizes are moderate and not consistent across endpoints or doses.
- **No lifespan data in humans** — only physiological surrogates. The preclinical lifespan studies (Mills 2016) used one genetic background and did not report a survival curve as a primary outcome. #gap/needs-human-replication
- **Uptake mechanism unresolved** — the SLC12A8 transporter story (Grozio 2019) remains contested; several labs have not reproduced it. This matters for tissue targeting and comparison with NR. #gap/contradictory-evidence
- **NMN vs NR head-to-head:** No randomized human trial compares the two directly on aging outcomes.
- **Sex- and age-specific effects:** Yoshino 2021 enrolled women only; generalizability to men and non-prediabetic populations unknown.
- **Optimal dosing unknown:** Studies use 250 mg to 2000 mg/day. Saturation of NMNAT, tissue-specific uptake limits, and NAM feedback inhibition are not characterized in humans. #gap/dose-response-unclear
- **Industry funding:** Several trials and the Grozio 2019 paper involve investigators with commercial interests in NMN products. Conflict-of-interest should be noted during verification.

## Cross-references

- Upstream biology: [[sirtuin]], [[nampt]], [[nad-biosynthesis]] (stub), [[cd38]] (stub)
- Intervention class: [[nad-precursors]] (R23d class page) — NMN/NR/niacin/NAM class context
- Related compound: [[nr]] (parallel batch seed)
- Competing pathways: [[mtor]], [[ampk]], [[insulin-igf1]]
- Hallmarks targeted: [[deregulated-nutrient-sensing]], [[mitochondrial-dysfunction]], [[epigenetic-alterations]]
- Context pages: [[caloric-restriction]], [[deregulated-nutrient-sensing]]
- Framework overlay: [[hallmarks-of-aging]], [[sens-damage-categories]]

## Footnotes

[^yoshino2011]: [[studies/yoshino-2011-nmn-diabetes-mice]] · n=4–15/group (varies by experiment) · in-vivo (mouse) · p<0.01–0.001 · model: C57BL/6 mice, HFD-induced T2D (3–6 months) + naturally occurring aged diabetic males (15–26 months) · doi:10.1016/j.cmet.2011.08.014

[^mills2016]: [[studies/mills-2016-nmn-aging-mice]] · n=9–15/group · in-vivo (mouse) · p<0.05 · model: C57BL/6N male mice, 12-month NMN supplementation (100 or 300 mg/kg/day in water) from 5 months of age · doi:10.1016/j.cmet.2016.09.013

[^grozio2019]: [[studies/grozio-2019-slc12a8-nmn-transporter]] · in-vivo + in-vitro · model: mouse small intestine; HEK293 cells · doi:10.1038/s42255-018-0009-4 · contested — see SLC12A8 controversy section

[^depicciotto2016]: [[studies/depicciotto-2016-nmn-vascular-aging]] · n=13–22/group · in-vivo (mouse) · p<0.05 · model: old male C57Bl/6 mice (26–28 months), 300 mg/kg/day NMN in drinking water × 8 weeks · doi:10.1111/acel.12461

[^irie2020]: [[studies/irie-2020-nmn-first-human-pk]] · n=10 · single-arm non-randomized sequential dose-escalation · model: healthy Japanese men (age 40–60), single oral doses 100/250/500 mg · doi:10.1507/endocrj.ej19-0313

[^yoshino2021]: [[studies/yoshino-2021-nmn-insulin-sensitivity]] · n=25 (12 placebo, 13 NMN) · rct (randomized double-blind placebo-controlled parallel-group) · p<0.01 (insulin sensitivity) · model: postmenopausal prediabetic overweight/obese women, 250 mg/day × 10 weeks · NCT03151239 · doi:10.1126/science.abe9985

[^pencina2023]: [[studies/pencina-2023-nmn-nad-augmentation]] · n=30 (21 MIB-626, 9 placebo) · rct (randomized double-blind placebo-controlled parallel-group, 2:1 allocation) · model: overweight/obese adults mean age 62, MIB-626 1000 mg bid × 28 days · doi:10.1210/clinem/dgad027

[^igarashi2024]: [[studies/igarashi-2024-nmn-older-adults-walking-sleep]] · n=60 · rct (randomized double-blind placebo-controlled parallel-group) · primary endpoint (stepping test) null; 4-m walking time shorter in NMN group at 12 weeks · model: older adults · NMN 250 mg/day × 12 weeks · UMIN000047871 · *GeroScience* 2024 · doi:10.1007/s11357-024-01204-1 · archive: pending download · integrated from abstract pending PDF verification

[^tang2026]: [[studies/tang-2026-nmn-blood-pressure-meta-analysis]] · meta-analysis · 10 RCTs / 11 arms / n=349 · NMN reduced DBP −2.15 mmHg (95% CI −3.68 to −0.61); SBP −3.94 mmHg in age ≥60 subgroup · *Nutrients* 2026 · doi:10.3390/nu18060890 · archive: not in archive · integrated from abstract pending PDF verification

[^caldosilva2025]: [[studies/caldosilva-2025-nmn-nr-muscle-meta-analysis]] · meta-analysis · NMN: no significant effect on SMI, HGS, gait speed, 5CST in older adults · *Journal of Cachexia, Sarcopenia and Muscle* 2025 · doi:10.1002/jcsm.13799 · archive: pending · integrated from abstract pending PDF verification

[^song2025]: [[studies/song-2025-nmn-glucose-lipid-meta-analysis]] · meta-analysis · 12 RCTs, n=513 · NMN raised blood NAD+ but no significant change in fasting glucose, TG, TC, LDL-C, HDL-C vs control · *Critical Reviews in Food Science and Nutrition* 2025 · doi:10.1080/10408398.2024.2387324 · archive: pending · integrated from abstract pending PDF verification — high risk of bias in 5/12 included studies

[^schloesser2026]: [[studies/schloesser-2026-nad-precursors-comparison]] · doi:10.1038/s42255-025-01421-8 · n=65 · rct (open-label, placebo-controlled, three-arm comparison NR vs NMN vs NAM) · NR and NMN comparably raise circulatory NAD+; NAM does not · ex-vivo: gut microbes convert NR/NMN to nicotinic acid; NA is the potent NAD+ booster · 14 days · *Nature Metabolism* 2026 · archive: pending download · integrated from abstract pending PDF verification — substantively reframes mechanism debate

[^tretowicz2026]: [[studies/tretowicz-2026-blood-nad-stable-aging]] · doi:10.1038/s42255-026-01537-5 · observational + intervention pooled · n=303 across 7 cohorts · whole-blood NAD+ stable with age (all 6 age comparisons null: P 0.24–0.62, R² 0.012–0.051) and stable across exercise/protein interventions in older adults; positive control: 5-month NR supplementation in twin-pair cohort raises whole-blood NAD+ as expected · UHPLC-HRMS validated for pre-analytical artifacts · *Nature Metabolism* 2026-05-14 · Trętowicz MM et al. (Houtkooper laboratory) · archive: not yet in archive · `verified: false` (Results/Discussion paywalled; Abstract + Reporting Summary + 8 source-data XLSX directly verified)
