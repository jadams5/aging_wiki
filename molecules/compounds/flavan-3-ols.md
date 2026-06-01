---
type: compound
aliases: [flavanols, flavan-3-ols, monomeric flavanols, catechins, condensed tannins]
pubchem-cid: 72276
pubchem-cid-alt: 9064
chembl-id: CHEMBL583912
drugbank-id: null
biologic: false
mechanisms: [nitric-oxide-signaling, enos-activation, antioxidant, nrf2-activator, anti-inflammatory, gut-microbiome-modulation, mtor-inhibitor]
targets: ["[[enos]]", "[[nrf2]]", "[[mtor]]"]
hallmarks: ["[[chronic-inflammation]]", "[[deregulated-nutrient-sensing]]", "[[mitochondrial-dysfunction]]"]
clinical-stage: supplement
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Longer-duration (5+ yr) hard-endpoint all-cause mortality RCT in a non-multivitamin-confounded arm; food-matrix-aware dosing trials accounting for PPO co-ingestion and biomarker-verified intake."
clinical-trials-active: 8
literature-checked-through: 2026-05-20
verified: false
verified-date: null
verified-by: null
---

> ⚠️ Auto-extracted by Claude on 2026-05-20. Verify quantitative claims and source attributions against primary sources [canonical DB IDs: PubChem CID 72276 ((-)-epicatechin, lead member), CHEMBL583912, EFSA Opinion EFSA-Q-2011-00851].

# Flavan-3-ols (flavanols)

Flavan-3-ols are the most consumed dietary polyphenol subclass globally and the subject of the largest randomised polyphenol intervention trial to date (COSMOS, n=21,442 [^sesso2022]). They range from simple monomers — (-)-epicatechin, (+)-catechin, gallocatechins — to the gallate esters (EGCG, ECG) and the oligomeric/polymeric proanthocyanidins (condensed tannins). The class carries an EFSA health claim for endothelial function at 200 mg/day from cocoa (2012). The best-supported aging-relevant mechanisms are eNOS-mediated NO production, gut-microbiome biotransformation to vasoacative valerolactones, and NRF2 antioxidant pathway activation.

The gallate ester member EGCG has its own page: [[egcg]]. This page covers the class.

---

## Chemical identity

| Field | Value |
|---|---|
| **Class** | Flavonoid subclass (flavan-3-ols / 2-phenylchroman-3-ol scaffold) |
| **Scaffold** | C6-C3-C6; pyran ring saturated at C2-C3 bond; hydroxyl at C3 — distinguishes from flavones (no 3-OH), flavanones (no 3-OH, C2-C3 saturated) |
| **Lead monomer, PubChem CID** | 72276 — (-)-epicatechin (2R,3R configuration; IUPAC: (2R,3R)-2-(3,4-dihydroxyphenyl)-3,4-dihydro-2H-chromene-3,5,7-triol) |
| **Alternate monomer, PubChem CID** | 9064 — (+)-catechin (2S,3R; the primary enantiomer in most foods) |
| **EGCG, PubChem CID** | 65064 — see [[egcg]] |
| **CHEMBL ID (epicatechin)** | CHEMBL583912 |
| **Molecular formula (monomers)** | C15H14O6 |
| **Molecular weight (monomers)** | 290.27 Da |

**Principal monomers** in the flavan-3-ol family:
- **Catechin** — (+)-catechin, (−)-catechin
- **Epicatechin** — (−)-epicatechin (dominant in cocoa, apples, red wine); the most-studied aging-relevant monomer
- **Gallocatechin** — (−)-gallocatechin (additional 5'-OH on B ring)
- **Epigallocatechin** — (−)-EGC
- **Gallate esters** — ECG, EGCG (gallic acid esterified at C3; major in green/white tea; see [[egcg]])

**Oligomeric and polymeric forms (proanthocyanidins / condensed tannins):**
- Dimers through hexamers (B-type and A-type linkages) are called proanthocyanidins or oligomeric proanthocyanidins (OPC). Polymers (>6 units) are condensed tannins, prominent in apples, red wine, and nuts.
- Degree of polymerisation determines bioavailability: monomers and small dimers are absorbed intact; larger oligomers undergo acid/enzyme hydrolysis in the upper GI and extensive microbial ring-fission in the colon.

---

## Dietary sources and typical intakes

| Food matrix | Dominant flavan-3-ol | Typical content | Notes |
|---|---|---|---|
| Cocoa powder (unsweetened) | (-)-epicatechin, (+)-catechin | ~35–40 mg/g | Highly variable; fermentation + roasting reduce content; Dutch-process loses ~90% |
| Dark chocolate (70% cocoa) | (-)-epicatechin | ~4–8 mg/g | More variable; depends on variety and processing |
| Green tea (brewed) | EGCG (~50–80% of catechins) | ~30–40 mg catechins/250 mL | Brewing temperature and time matter; see [[egcg]] |
| Black tea (brewed) | Theaflavins (oxidised catechin dimers) | ~20–50 mg/250 mL | Catechins largely oxidised during fermentation; theaflavins have distinct bioavailability |
| Apples (skin-on) | (+)-catechin, (-)-epicatechin, oligomeric proanthocyanidins | ~15–30 mg flavan-3-ols per medium apple | Highest in peel; contains significant proanthocyanidin polymers |
| Red wine (150 mL) | (-)-epicatechin, (+)-catechin, proanthocyanidins | ~30–50 mg | Grape variety matters; alcohol confounds interpretation |
| Nuts (pecans, peanuts) | (+)-catechin | ~5–20 mg/30 g | Notable but lower than cocoa or tea |
| Berries | Minor catechin contribution | Low | Anthocyanins dominate in most berries; blueberries have modest flavan-3-ol content |

Population-level intake estimates range from ~100–400 mg/day in Western diets with regular tea, cocoa, or fruit consumption. Biomarker-estimated intake (via urinary valerolactone metabolites) is more accurate than food-frequency questionnaires because food databases systematically under-estimate flavan-3-ol content [^ottaviani2020epic].

---

## Bioavailability and metabolism

### ADME overview

Overall flavan-3-ol bioavailability from mixed dietary sources averages ~31 ± 23% (n=49 intervention studies) [^dipede2023], but is highly source-dependent: (-)-epicatechin from pure epicatechin supplement reaches ~82% bioavailability; from nuts ~63%; from tea and cocoa ~25%. The large variance reflects food-matrix interactions (see PPO effect below).

**Absorption pathway:**
1. Monomers (epicatechin, catechin) are absorbed in the small intestine and phase-II conjugated (glucuronidated, sulphated, methylated by COMT).
2. Oligomers and polymers are not absorbed intact; they pass to the colon where gut microbial ring-fission generates **phenyl-γ-valerolactones** (PGVL, 5-(3',4'-dihydroxyphenyl)-γ-valerolactone being the principal species) and related phenolic acids. These are the dominant circulating forms after >2 h post-ingestion.
3. Phenyl-γ-valerolactones show dual plasma peaks in a comprehensive data analysis: Cmax ~260 nmol/L at 1.8 h and ~88 nmol/L at 5.3 h, contributing to total flavan-3-ol bioavailability for over 20% [^dipede2023]. These metabolites are used as plasma biomarkers of flavan-3-ol intake.

### Polyphenol oxidase (PPO) effect — major food-matrix confound

Polyphenol oxidase (PPO), an enzyme endogenous to many fruits and vegetables (especially banana), oxidises flavan-3-ols to inactive quinones both during food preparation and in the gastrointestinal tract. A controlled cross-over study by Ottaviani et al. (2023) [^ottaviani2023ppo] established two distinct effects:

- **Pre-blended (Phase 1, n=8):** a high-PPO banana smoothie reduced (-)-epicatechin Cmax by **84%** (96 ± 47 vs 680 ± 78 nmol/L, p=4×10⁻⁵) and AUC₀₋₆ₕ by **81%** vs encapsulated control. Co-blending with a low-PPO mixed-berry smoothie instead produced no significant reduction (Cmax 659 ± 104 nmol/L, p=0.82).
- **Co-ingested without pre-mixing (Phase 2, n=11):** drinking a (-)-epicatechin freeze-dried beverage alongside a banana drink — with no prior physical contact — still reduced AUC by **37 ± 6%** (p=0.004). In-vitro gastric simulation showed banana PPO retains 68 ± 5% activity at pH 3, 37°C, 2 h, implicating ongoing post-ingestion oxidation.

This finding has major implications:

- Trials that co-administered cocoa or green tea with banana-containing foods (or other high-PPO matrices) may have substantially underestimated delivered dose.
- Historical trials reporting null results should be re-examined for PPO confound before concluding lack of efficacy.
- Food preparation matters: **cooking denatures PPO** (heat-labile), so cooked/processed foods preserve flavan-3-ols better than raw high-PPO co-foods.
- See linked study page: [[studies/ottaviani-2023-ppo-flavanol-bioavailability]]

#gap/dose-response-unclear — PPO content of food matrices is not standardised across trials, making cross-study dose-response analysis unreliable for flavan-3-ol class-level conclusions.

---

## Mechanisms of action

### 1. eNOS activation and nitric oxide bioavailability

The most mechanistically characterised effect is eNOS activation in vascular endothelium. (-)-Epicatechin activates eNOS via sequential phosphorylation at **Ser633 and Ser1177** and dephosphorylation at inhibitory **Thr495**, mediated through PI3K and calcium/calmodulin (CaM)-dependent kinase pathways [^ramirez2010]. This is not an antioxidant mechanism — it is a receptor-mediated signalling event. A putative cell-surface acceptor-effector has been inferred from pharmacological dissection, though the identity of the proximal receptor remains incompletely characterised #gap/no-mechanism.

Downstream: increased endothelial NO → vasodilation → improved flow-mediated dilation (FMD); NO also suppresses NF-κB signalling in endothelial cells [^ramirez2010]. With aging, eNOS becomes uncoupled (ROS-mediated), BH4 is depleted, and NO bioavailability declines — placing this mechanism directly relevant to vascular aging.

### 2. Gut-microbiome biotransformation

Colonic microbial ring-fission generates phenyl-γ-valerolactones (PGVLs), which have independent vasoactive and anti-inflammatory properties and are now recognised as the dominant systemic species after tea/cocoa/apple ingestion [^dipede2023]. PGVL metabolism is covered under [[gut-microbiome-aging-shifts]]. The recently characterised paraoxonase (PON1) metabolic pathway for 5-(3',4'-DHPGVL) may influence lipid peroxidation independently of intact catechins [^ottaviani2023pgvl].

### 3. NRF2 antioxidant pathway

Epicatechin and related monomers activate NRF2 (nuclear factor erythroid 2-related factor 2), the master transcription factor for antioxidant response element (ARE)-driven gene expression. NRF2 targets include heme oxygenase-1 (HO-1), catalase, superoxide dismutase, and glutathione biosynthesis enzymes. This mechanism is shared with [[egcg]] and many other polyphenols.

### 4. mTOR modulation (minor, in vitro)

Multiple flavan-3-ols including (-)-epicatechin and EGCG inhibit mTOR signalling in vitro; effects appear modest compared to the vascular-NO mechanism and are not the primary clinical evidence anchor for this class.

### 5. Anti-inflammatory / NF-κB suppression

Multiple monomers inhibit NF-κB at supra-physiological concentrations in vitro. Clinically, cocoa extract supplementation reduced hsCRP by ~8.4% per year vs placebo over 2 years in the COSMOS-Inflammaging substudy (n=598 older adults) [^li2025cosmos], supporting a moderate in vivo anti-inflammatory effect.

---

## Clinical evidence

### COSMOS trial (primary outcomes — cardiovascular)

The COcoa Supplement and Multivitamin Outcomes Study (COSMOS) is the largest completed randomised trial of flavanol supplementation. Key details: n=21,442, median age 73, 500 mg/day cocoa flavanols vs placebo, median follow-up 3.6 years [^sesso2022].

| Endpoint | HR (95% CI) | p | Notes |
|---|---|---|---|
| Primary: total CVD events | 0.90 (0.78–1.02) | 0.11 | Non-significant |
| CVD death | 0.73 (0.54–0.98) | ~0.03 | Significant secondary endpoint |
| Myocardial infarction | 0.87 (0.66–1.16) | NS | |
| Stroke | 0.91 (0.70–1.17) | NS | |
| All-cause mortality | 0.89 (0.77–1.03) | NS | |

**Interpretation:** COSMOS missed its primary composite CVD endpoint (HR 0.90, CI crossed 1.0). The significant reduction in CVD death (27%) is the strongest signal but is a secondary endpoint and warrants replication. The study was 2×2 factorial (cocoa flavanols + multivitamin), and the multivitamin arm showed independent CV benefit — disentangling interactions requires the full factorial data. #gap/contradictory-evidence — the CVD-death signal contrasts with the null on the primary composite; the discordance has not been fully resolved.

### COSMOS-Mind (cognitive function)

COSMOS cognitive substudy (n=2,262, mean age 73, 3-year follow-up): cocoa extract showed **no significant cognitive benefit** (mean z-score change 0.03, 95% CI -0.02 to 0.08, p=0.28). The multivitamin arm showed significant cognitive benefit [^manson2023cosmomind]. This null result for cognition is informative.

### COSMOS-Inflammaging (inflammatory biomarkers, 2025)

2-year substudy (n=598, cocoa 500 mg/day, placebo): cocoa supplementation reduced hsCRP by 8.4%/year vs placebo (p<0.05); IFN-γ increased 6.8%/year in cocoa group. No significant effect on IL-6, TNF-α, or IL-10 [^li2025cosmos]. The hsCRP reduction is consistent with the CVD-death signal and supports anti-inflammatory mechanism.

### COSMOS-Hypertension (2025)

In the subset without baseline hypertension (n=8,905, median 3.4 yr): cocoa supplementation did not reduce overall incident hypertension. However, a significant protective effect emerged in the subgroup with baseline SBP <120 mm Hg (24% reduction; p<0.05) [^manson2025htn]. Subgroup analysis: interpret cautiously.

### COSMOS epigenetic aging clocks (2026)

COSMOS epigenetic substudy (n=958, 2-year follow-up, PCGrimAge + PCPhenoAge + 3 additional clocks): **cocoa extract did not affect any of the 5 epigenetic clocks tested**. The multivitamin arm showed modest reductions in PCGrimAge (−0.113 yr/yr, p=0.017) and PCPhenoAge (−0.214 yr/yr, p=0.032) [^belsky2026cosmos]. This is a notable null result for the epigenetic-clock endpoint.

### Meta-analyses — blood pressure and endothelial function (2025)

A 2025 systematic review and meta-analysis of 145 RCTs (n=5,205) on flavan-3-ol interventions found [^kroll2025]:
- Office BP reduction: −2.8/−2.0 mmHg (systolic/diastolic) with chronic consumption
- 24-hour ambulatory BP: −3.7/−2.6 mmHg
- In hypertensive subjects: −5.9/−2.7 mmHg (enhanced effect)
- FMD improvement: +2.0% acute; +1.7% chronic

**Note on discordance:** The meta-analysis of smaller FMD/BP-focused RCTs shows consistent positive effects on surrogate endpoints (FMD, BP). COSMOS with its hard-endpoint design showed a much attenuated effect. Possible reasons: (1) COSMOS used participants with relatively lower baseline cardiovascular risk; (2) shorter bioavailability in real-world cocoa products vs. purpose-formulated flavanol capsules; (3) flavanol dose (500 mg/day) may be sufficient for BP/FMD but insufficient for mortality benefits at 3.6-year follow-up; (4) COSMOS was not designed to test a specific flavan-3-ol dose-response relationship. The discordance between surrogate-endpoint RCTs and COSMOS's hard-endpoint design is an acknowledged limitation of the field [^kroll2025].

### Population-level biomarker evidence (EPIC Norfolk)

Cross-sectional analysis of 25,618 EPIC Norfolk participants using urinary valerolactone biomarkers (not self-report): higher biomarker-estimated flavan-3-ol intake was associated with lower SBP (~1.9 mmHg lower in men, ~2.5 mmHg in women, highest vs lowest decile), with effect size "comparable to adherence to a Mediterranean Diet or moderate salt reduction" [^ottaviani2020epic]. Hypertensive individuals showed stronger inverse associations. This observational biomarker-validated evidence supports the BP mechanism seen in RCTs.

### EFSA health claim (2012)

EFSA approved a health claim for **cocoa flavanols (200 mg/day from cocoa) → normal endothelial function** (EFSA Opinion EFSA-Q-2011-00851, 2012). This is the only EFSA-approved claim for a polyphenol class and is anchored on FMD endpoint data. Regulatory reference dose: 200 mg flavanols/day from cocoa. Note: this is substantially lower than the COSMOS dose (500 mg/day).

---

## Aging relevance

Endothelial dysfunction is a hallmark of [[chronic-inflammation|vascular aging]] and an upstream driver of hypertension, atherosclerosis, and end-organ damage. The flavan-3-ol → eNOS → NO mechanism directly counteracts the age-related decline in endothelial NO production. Additionally, flavan-3-ols are a Mediterranean-diet polyphenol class; their dietary intake correlates with adherence to Mediterranean dietary patterns documented in longevity research.

The flavan-3-ol class does not directly target senescence (unlike [[fisetin]]) or the mTOR/nutrient-sensing axis as a primary mechanism (unlike [[egcg]] or rapamycin), but the endothelial mechanism addresses [[chronic-inflammation]] from the vascular-biology angle — a distinct and underserved aging-intervention entry point in the current drug pipeline.

| Hallmark | Mechanism | Evidence | 
|---|---|---|
| [[chronic-inflammation]] | hsCRP reduction, NF-κB suppression, NO-mediated endothelial protection | COSMOS-Inflammaging [^li2025cosmos], FMD meta-analysis [^kroll2025] |
| [[deregulated-nutrient-sensing]] | mTOR modulation (minor, in vitro) | Preclinical; not primary mechanism |
| [[mitochondrial-dysfunction]] | NRF2 activation → antioxidant response | Mechanistic; limited clinical endpoint data |

---

## Class hierarchy

```
Flavonoids
└── Flavan-3-ols (this page)
    ├── Monomers
    │   ├── (+)-Catechin — PubChem 9064
    │   ├── (-)-Epicatechin — PubChem 72276 (lead aging-relevant monomer)
    │   ├── Gallocatechins (EGC, GC)
    │   └── Gallate esters
    │       └── EGCG — PubChem 65064 → [[egcg]]
    ├── Dimers: proanthocyanidin B1, B2
    └── Oligomers / Polymers (condensed tannins)
```

Theaflavins (in black tea) are oxidised catechin dimers formed during tea fermentation — chemically distinct but pharmacologically related; not classified as flavan-3-ols sensu stricto.

---

## Active trials (ClinicalTrials.gov, 2026-05-20)

The `clinical-trials-active: 8` count aggregates trials querying "flavanol," "cocoa flavanol," and "epicatechin aging" from ClinicalTrials.gov v2 API (RECRUITING + ACTIVE_NOT_RECRUITING):

| NCT | Trial | Status | Primary endpoint |
|---|---|---|---|
| NCT07161726 | COMET — cocoa + exercise in older adults | Recruiting | Physical performance + muscle strength |
| NCT04794530 | COCOA-PAD II — cocoa flavanols in PAD (55+) | Recruiting | Walking distance |
| NCT06808230 | CORAL — cocoa extract for episodic migraine | Recruiting | Migraine frequency |
| NCT05545865 | Chardonnay marc + vascular response | Recruiting | Vascular function |
| NCT06476795 | Chardonnay marc + gut/cardiometabolic health | Recruiting | Gut microbiome + cardiometabolic markers |
| NCT06513052 | High-flavanol cocoa, digestive/cerebrovascular health | Active, not recruiting | Gut + brain biomarkers |
| NCT06399809 | FIRST (fisetin) — overlapping search result | Recruiting | Mobility (PAD) |
| NCT07161726 | COMET (epicatechin/aging) | Recruiting | Muscle + physical function |

Note: NCT06399809 (FIRST trial) returned in the "flavanol" search because fisetin is classified as a flavonol; it is not a cocoa flavanol trial. Effective class-specific count (cocoa flavanols / epicatechin) is ~6 active trials.

---

## Limitations and knowledge gaps

1. **Surrogate vs hard endpoint discordance** — FMD/BP meta-analyses show consistent effects; COSMOS missed primary composite CVD endpoint. Whether the 27% CVD-death reduction in COSMOS is a true pharmacological signal or a chance secondary result requires a replication trial. #gap/needs-replication

2. **PPO-mediated bioavailability confound** — Historically, trials did not control for PPO co-ingestion [^ottaviani2023ppo]. The 84% Cmax reduction from banana co-ingestion means that dose-response conclusions from uncontrolled food-matrix trials are unreliable. Many null trials in the literature may have delivered minimal flavanol exposure. #gap/dose-response-unclear

3. **Heterogeneous nomenclature** — "Flavanols," "catechins," "proanthocyanidins," and "cocoa polyphenols" are used interchangeably in the literature. Biomarker-validated intake (PGVL-based) is more reliable than food-frequency questionnaires; only ~20% of human intervention studies use plasma biomarker confirmation [^dipede2023].

4. **Epigenetic clock null** — The COSMOS epigenetic substudy showed no effect of cocoa extract on 5 epigenetic aging clocks over 2 years [^belsky2026cosmos]. This is a direct challenge to the narrative that flavanol supplementation slows biological aging via epigenetic mechanisms, at least at 500 mg/day for 2 years. The null may reflect insufficient duration, dose, or clock insensitivity rather than lack of effect; but the null must not be ignored.

5. **No mortality RCT** — COSMOS was powered for hard CVD events, not all-cause mortality. A definitive mortality trial at verified flavanol doses does not exist. #gap/long-term-unknown

6. **Gut-microbiome mediation** — The degree to which PGVL metabolites vs intact catechins drive clinical effects is unresolved. Individuals with poor gut microbial capacity to produce PGVLs may see reduced benefits. #gap/no-mechanism

7. **Class vs monomer attribution** — Most mechanistic data are for (-)-epicatechin specifically. Whether equivalent effects hold for all monomers, gallate esters, and oligomers remains under-studied.

---

## Footnotes

[^sesso2022]: doi:10.1093/ajcn/nqac055 · Sesso HD, Manson JE, et al. · *Am J Clin Nutr* 2022 Jun;115(6):1490-1500 · rct · n=21,442 · model: older US adults (median age 73), 2×2 factorial design, 500 mg/day cocoa flavanols vs placebo, median 3.6 yr follow-up · local PDF: 

[^kroll2025]: doi:10.1093/eurjpc/zwaf173 · *Eur J Prev Cardiol* 2025 · systematic-review · meta-analysis of 145 RCTs, n=5,205 participants · flavan-3-ol interventions across epicatechin, green tea, cocoa, grape, apple sources · abstract-only verification 2026-05-20

[^manson2023cosmomind]: doi:10.1002/alz.12767 · Manson JE, et al. · *Alzheimer's & Dementia* 2023 · rct · n=2,262, mean age 73, 3 yr follow-up · 500 mg/day cocoa extract vs placebo · cognitive z-score primary endpoint; cocoa null (p=0.28)

[^li2025cosmos]: doi:10.1093/ageing/afaf269 · Li S, Hamaya R, Zhu H, Clar A, Rist PM, Huang Y, Manson JE, Sesso HD, Dong Y · *Age and Ageing* 2025 · rct · n=598, mean age 70, 2 yr follow-up · 500 mg/day cocoa flavanols vs placebo · inflammaging biomarkers (hsCRP, IFN-γ, IL-6, TNF-α, IL-10) · abstract-only verification 2026-05-20

[^manson2025htn]: doi:10.1161/HYPERTENSIONAHA.125.25209 · *Hypertension* 2025 · rct · n=8,905 without baseline hypertension from COSMOS, median 3.4 yr · incident hypertension primary endpoint · overall null; SBP <120 subgroup: 24% risk reduction · abstract-only verification 2026-05-20

[^belsky2026cosmos]: doi:10.1038/s41591-026-04239-3 · *Nature Medicine* 2026 · rct · n=958, 2-year follow-up · PCGrimAge, PCPhenoAge + 3 clocks · cocoa null on all 5 clocks; multivitamin showed modest PCGrimAge/PCPhenoAge benefit · abstract-only verification 2026-05-20 — note archive query returned NOT_FOUND; DOI confirmed via PubMed PMID 41803341

[^ramirez2010]: doi:10.1161/HYPERTENSIONAHA.109.147892 · Ramirez-Sanchez I, Maya L, Ceballos G, Villarreal F · *Hypertension* 2010 · in-vitro · model: cultured endothelial cells · eNOS Ser633/Ser1177 phosphorylation and Thr495 dephosphorylation mechanism confirmed · abstract-only verification 2026-05-20

[^ottaviani2023ppo]: doi:10.1039/d3fo01599h · PMID 37615673 · Ottaviani JI, Ensunsa JL, Fong RY, Kimball J, Medici V, Kuhnle GGC, Crozier A, Schroeter H, Kwik-Uribe C · *Food Funct* 2023;14(18):8217-8228 · controlled cross-over, single-blinded · n=8 (Phase 1) + n=11 (Phase 2), healthy adults 25–60 yr · NCT03526094 · doses 75/88/68 mg (-)-epicatechin in capsule/banana/berry arms (Phase 1), 88 mg in Phase 2 · p=4×10⁻⁵ Phase 1 banana vs capsule; p=0.004 Phase 2 AUC reduction · pre-blended banana smoothie reduces (-)-epicatechin Cmax by 84% (96 ± 47 vs 680 ± 78 nmol/L) and AUC by 81%; co-ingested (no pre-mix) reduces AUC by 37 ± 6% · local PDF verified 2026-05-20: 

[^dipede2023]: doi:10.1016/j.mam.2022.101146 · Di Pede G, Mena P, Bresciani L, et al. · *Mol Aspects Med* 2023;89:101146 · systematic-review · 49 human intervention studies · mean bioavailability 31 ± 23%; epicatechin 82%, nuts 63%, tea/cocoa ~25%; PGVL dual peaks characterised · abstract-only verification 2026-05-20

[^ottaviani2020epic]: doi:10.1038/s41598-020-74863-7 · Ottaviani JI, et al. · *Sci Rep* 2020 · observational (cross-sectional) · n=25,618 EPIC Norfolk participants · biomarker-estimated flavan-3-ol intake inversely associated with SBP (~1.9–2.5 mmHg reduction, highest vs lowest decile) · abstract-only verification 2026-05-20

[^ottaviani2023pgvl]: doi:10.1002/mnfr.202300281 · Ottaviani JI, et al. · *Mol Nutr Food Res* 2023;67(18):e2300281 · in-vitro · characterisation of 5-(3',4'-DHPGVL) as substrate for human paraoxonase-1 (PON1) — novel metabolic pathway for flavan-3-ol microbial metabolites; lipid peroxidation implications · abstract-only verification 2026-05-20
