---
type: compound
aliases: [sirolimus, rapamune, AY-9944, AY9944, RAPA]
pubchem-cid: 5284616
inchikey: QFJCIRLUMZQUOT-HPLJOQBZSA-N
chembl-id: CHEMBL413
drugbank-id: DB00877
cas-number: 53123-88-9
mechanisms: [mTORC1-inhibitor, mTORC2-inhibitor-chronic, autophagy-inducer, immunosuppressant]
measured-targets: ["[[fkbp12]]", "[[mtor]]"]
targets: ["[[mtor]]", "[[fkbp12]]"]
hallmarks: ["[[cellular-senescence]]", "[[chronic-inflammation]]", "[[deregulated-nutrient-sensing]]", "[[disabled-macroautophagy]]", "[[loss-of-proteostasis]]", "[[stem-cell-exhaustion]]"]
clinical-stage: fda-approved
human-evidence-level: limited
half-life: "62 h (healthy adults, oral)"
translation-gap: phase-3-rct-needed
next-experiment: "PEARL-style mortality RCT in healthy adults 50+ powered for >=5% all-cause mortality reduction at 5 yr; n>=10K, weekly intermittent dosing 5–10 mg. Open question after RAPA-EX-01 (Stanfield 2026, null/negative on chair-stand): whether 6 mg/week is too high for cycling-hypothesis pharmacology in ageing adults — lower doses (1–3 mg/week) or biweekly schedules may be needed for an on-off mTORC1 pulse compatible with exercise adaptation."
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Harrison 2009 (nature08221), Miller 2014 (acel.12194), PEARL 2025 (aging.206235), Arriola Apelo 2016 (acel.12405) verified against local PDFs. Stanfield 2026 RAPA-EX-01 (jcsm.70274) verified via PMC OA full text (PMC13082878) — primary endpoint, sensitivity analyses, all secondary outcomes (incl. four epigenetic clocks: PCGrimAge / SystemsAge / OMICmAge / DunedinPACE), AE summary, and SAE pneumonia case extracted from PMC HTML rendering; local PDF not yet downloaded. Johnson 2013 review (nature11861) and Mannick 2014 (scitranslmed.3009892) are not_oa — mechanism/immune claims from those sources remain unverified against full text. Lamming 2012 (science.1215135) download failed — mTORC2 mechanism claims attributed to that source carry #gap/no-fulltext-access. Canonical-database identity fields (PubChem CID, InChIKey, CAS) not independently re-verified against databases."
---

# Rapamycin (Sirolimus)

A macrolide natural product isolated from the soil bacterium *Streptomyces hygroscopicus*, first discovered in a sample from Easter Island (Rapa Nui, hence "rapamycin"). Approved by the FDA in 1999 as **sirolimus** (INN) for prevention of organ-transplant rejection. The most extensively validated longevity intervention in mammals — extending lifespan in genetically heterogeneous mice across multiple independent sites [^harrison2009]. Works by forming a gain-of-function inhibitory complex with [[fkbp12]], which then binds and allosterically inhibits [[mtor]] complex 1 (mTORC1). Aging-focused dosing regimens are substantially lower than transplant doses; intermittent schedules are increasingly favored to limit mTORC2 suppression and its metabolic side effects.

## Identity

- **PubChem CID:** 5284616
- **ChEMBL ID:** CHEMBL413
- **DrugBank ID:** DB00877
- **InChIKey:** QFJCIRLUMZQUOT-HPLJOQBZSA-N
- **CAS:** 53123-88-9
- **Molecular formula:** C51H79NO13
- **Molecular weight:** 914.2 g/mol
- **Class:** macrolide lactone; mTOR inhibitor
- **Origin:** natural product (*Streptomyces hygroscopicus*, Easter Island soil, 1972)
- **FDA approval:** 1999 (renal transplant rejection prophylaxis; subsequent approvals: tuberous sclerosis complex [TSC], lymphangioleiomyomatosis [LAM], coronary stent coating)

## Mechanism of action

Rapamycin does **not** bind mTOR directly. Instead [^johnson2013review]:

1. Rapamycin enters the cell and binds [[fkbp12]] (FK506-binding protein 12 kDa) with high affinity.
2. The rapamycin-FKBP12 complex then docks onto the FKBP12-rapamycin binding (FRB) domain of mTOR, at a site adjacent to — but not within — the catalytic cleft.
3. This allosteric interaction destabilizes the [[mtor|mTORC1]] complex (mTOR + Raptor + mLST8 + PRAS40 + Deptor), reducing its kinase activity toward downstream substrates S6K1 and 4E-BP1.
4. The net effect is inhibition of cap-dependent translation, ribosome biogenesis, and lipid synthesis, and de-repression of [[autophagy]].

**mTORC2 sensitivity:** mTORC2 (mTOR + Rictor + mSin1 + mLST8) is **acutely resistant** to rapamycin because the Rictor subunit occludes the FKBP12-rapamycin binding site [^johnson2013review]. However, chronic or high-dose rapamycin can suppress mTORC2 activity — evidenced by reduced AKT S473 phosphorylation — in many cell types [^lamming2012]. This is supported by Arriola Apelo 2016, which showed that daily rapamycin in male C57BL/6J mice robustly suppressed AKT S473 (to ~40% of vehicle), while weekly dosing did not cause a statistically significant suppression at days 3 or 7 post-injection [^arriola2016]. This mechanism explains why daily rapamycin causes insulin resistance (mTORC2 → Akt S473 → insulin signaling) while intermittent dosing largely spares mTORC2 function and glucose homeostasis [^arriola2016].

**Rapalogs** — everolimus (RAD001), temsirolimus (CCI-779), ridaforolimus — share the same FKBP12/FRB mechanism but differ in solubility, half-life, and prodrug status. See [[everolimus]] (implicit stub) for aging-relevant data.

## Effects on aging hallmarks

| Hallmark | Effect | Evidence |
|---|---|---|
| [[deregulated-nutrient-sensing]] | Primary target — direct mTORC1 inhibition suppresses anabolic sensing of amino acids and growth factors | [^harrison2009], [^johnson2013review] |
| [[disabled-macroautophagy]] | mTORC1 inhibition de-represses ULK1, initiating autophagosome formation | [^johnson2013review] |
| [[cellular-senescence]] | Reduces SASP in senescent cells by inhibiting mTOR-dependent translation of SASP factors; some evidence for reduced senescent cell accumulation | #gap/needs-replication |
| [[chronic-inflammation]] | Reduced mTOR→NF-κB signaling lowers cytokine output; in Mannick 2014, everolimus reduced PD-1+ exhausted T cells and improved vaccine response in elderly | [^mannick2014] |
| [[stem-cell-exhaustion]] | Low-dose rapamycin rejuvenates aged hematopoietic stem cells and intestinal stem cells in mice | #gap/needs-human-replication |

## Mammalian lifespan data

**The Harrison 2009 ITP study** is the foundational mammal lifespan experiment [^harrison2009]:

- **Design:** genetically heterogeneous UM-HET3 mice (CB6F1 females × C3D2F1 males: BALB/cByJ × C57BL/6J F1 × C3H/HeJ × DBA/2J F1); feeding started at 600 days of age (~20 months, late middle age); total cohort n=1,960 (674 controls; 317–328 per treatment arm)
- **Dose:** microencapsulated rapamycin in chow at 14 mg/kg food (= 2.24 mg/kg body weight/day)
- **Sites:** three independent NIA ITP sites (The Jackson Laboratory, University of Michigan, University of Texas Health Science Center)
- **Result (mean lifespan, pooled):** females +13%, males +9%. **Result (90th-percentile / maximal lifespan):** females +14%, males +9%; effect replicated at all three sites independently (P<0.0001 pooled log-rank)
- **Note:** disease spectrum in treated vs control mice did not significantly differ (necropsy of 71 mice); lifespan benefit was not attributed solely to reduced cancer

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | in-progress |
| Replicated in humans? | in-progress (PEARL trial) |

**Miller 2014 ITP dose-escalation** extended this [^miller2014]:

- Three doses tested in chow: 4.7, 14, and 42 ppm, started at 9 months of age in UM-HET3 mice (n=156 males and n=136 females per rapamycin group; n=300 male controls, n=280 female controls, pooled across 3 sites)
- Highest dose (42 ppm): median lifespan extended **23% (males) and 26% (females)** — the largest rapamycin effect sizes yet observed in this model; significant at all three doses for females (P<0.0001), significant at 14 and 42 ppm for males
- Effect is dose- and sex-dependent; females consistently show larger extension and higher blood rapamycin levels at the same chow dose
- Rapamycin-treated mice showed elevated fasting glucose and altered insulin levels; these metabolic changes are distinct from those seen in dietary-restricted (DR) mice, and gene expression of xenobiotic-metabolizing enzymes also differs between rapamycin and DR, suggesting independent mechanisms

**Cross-vertebrate meta-analysis (Ivimey-Cook 2025).** A 2025 meta-analysis of 911 effect sizes from 167 papers across 8 vertebrate species found that **rapamycin produces statistically significant vertebrate lifespan extension at a magnitude comparable to dietary restriction**, while metformin does not [^ivimeycook2025]. The cross-species replicability — rapamycin matches DR effect size in pooled vertebrate data — is the strongest non-mouse-ITP signal currently available. High heterogeneity and significant publication bias caveats are noted by the authors.

#gap/needs-human-replication — All mammalian lifespan data are from mouse models. No human lifespan endpoint trial exists or is in progress. Human trials target healthspan surrogates.

## Human evidence

### Mannick 2014 — immune function in elderly [^mannick2014]

- **Design:** randomized, placebo-controlled; n=218 elderly volunteers (≥65 years)
- **Intervention:** everolimus (RAD001) 0.5 mg/day, 5 mg/week, or 20 mg/week for 6 weeks prior to influenza vaccination
- **Key finding:** all three dosing schedules improved influenza vaccine response by ~20% (higher titers) and reduced PD-1+ CD4/CD8 T cell frequency (a marker of immune senescence) — suggesting mTOR inhibition can partially reverse immunosenescence
- **Adverse effects:** dose-dependent; the two lower doses were generally tolerable; mouth sores at higher doses
- **Caveat:** everolimus is not identical to rapamycin; results likely generalize but should be confirmed with sirolimus

#gap/needs-replication — Single trial; not yet independently replicated with rapamycin itself.

### PEARL trial (NCT04488601) — aging-focused RCT [^pearl2025]

- **Design:** 48-week decentralized, double-blinded RCT; n=114 completers (40 received 5 mg/week compounded rapamycin, 35 received 10 mg/week, 39 placebo); 11 additional participants discontinued prior to completion and were excluded from analysis; 35.1% of participants were women overall
- **Intervention:** compounded rapamycin 5 mg/week or 10 mg/week. **Important caveat:** compounded rapamycin used in this trial had approximately 1/3 the bioavailability of commercial formulations; effective doses were ~66% lower than labeled doses (equivalent to ~1.67 mg and ~3.33 mg of commercial sirolimus, respectively)
- **Primary endpoint (visceral adiposity, VAT):** did not change significantly in either dose group (η²=0.001, p=0.942)
- **Key secondary findings:** lean tissue mass (LTM) improved significantly for women in the 10 mg group at both 24 and 48 weeks (48w: η²=0.202, p=0.013); self-reported pain improved significantly for women in the 10 mg group (48w: p<0.001); emotional well-being improved for all genders in the 5 mg group (η²=0.108, p=0.023); general health improved for all genders in the 5 mg group (η²=0.166, p=0.004)
- **Safety:** adverse events and serious adverse events were similar across all groups; GI symptoms more frequent in rapamycin users; one case of anemia in 5 mg group (resolved with transfusion)
- **Limitations:** small n, compounded-rapamycin bioavailability confound, short duration (48 weeks), no lifespan endpoint, no validated biological-age composite; participants were health-conscious at baseline (lower BMI, healthier lifestyle), which may have limited detectable VAT changes; largely exploratory

### RAPA-EX-01 (ACTRN12624000790549) — exercise-combination RCT [^stanfield2026]

The first trial designed to test the **rapamycin "cycling hypothesis"** — that alternating mTORC1 inhibition (rest days) and activation (training days) could amplify exercise-induced adaptation while preserving autophagy.

- **Design:** double-blind RCT, n=40 sedentary adults aged 65–85 (mean 72.2 yr; 47.5% female); 1:1 randomization
- **Intervention:** sirolimus 6 mg orally **once weekly** for 13 weeks vs. matched placebo; both arms performed standardized home-based exercise (chair-stands + exercycle, 3×/week)
- **Primary endpoint (30-s chair-stand reps, ITT):** adjusted Δ −2.13 reps (95% CI −4.61 to 0.34, p=0.089) — favors placebo, not significant at 0.05
- **Sensitivity analyses (prespecified) reach significance favoring placebo:** complete-case (n=16/19) Δ −2.46 reps (p=0.045); per-protocol (n=15/16) Δ −3.44 reps (p=0.007, Cohen's d −0.90)
- **All secondary functional outcomes** (grip, 6MWD, SF-36 physical/mental) directionally favored placebo, none significant
- **CRP** +4.26 mg/L in sirolimus arm (p=0.152), driven by two outliers (17 + 50 mg/L); excluding outliers reduces between-arm difference to <1 mg/L
- **Four epigenetic clocks** (PCGrimAge, SystemsAge, OMICmAge, DunedinPACE) showed mixed, non-significant trends; PCGrimAge alone showed a directionally favorable trend (Δ −2.28 yr, p=0.098) but contradicted the functional-outcome signal
- **Safety:** AE incidence 85%/85% but burden was higher in sirolimus arm (99 vs. 63 total events; 35% vs. 15% adjudicated drug-related). One SAE in sirolimus arm: **community-acquired pneumonia after a single 6 mg dose** in a 65-yr-old participant; required overnight hospitalization with IV antibiotics; resolved with study withdrawal. Authors note immunosuppressive contribution cannot be excluded
- **Authors' interpretation of the null result:** the rapamycin half-life (~62 h) means a 6 mg weekly dose does not produce the on-off pulse the cycling hypothesis requires — drug persists across the training stimulus, suppressing mTORC1 *during* exercise and blunting adaptation. The result does not falsify the cycling hypothesis in principle but **rules out 6 mg/week as the right schedule** for combined rapamycin-exercise interventions in older adults

| Trial | NCT/registration | Phase | n | Dose | Primary outcome | Status |
|---|---|---|---|---|---|---|
| PEARL | NCT04488601 | Phase 2 | 114 completers | 5 or 10 mg/week (compounded; ~1/3 bioavailability) | Visceral adiposity — **null** (η²=0.001, p=0.942) | Published 2025 |
| RAPA-EX-01 | ACTRN12624000790549 | Phase 2 (exploratory) | 40 | 6 mg/week (commercial sirolimus) | 30-s chair-stand — **null ITT, sensitivity analyses favor placebo** (PP p=0.007) | Published 2026 |
| Mannick (everolimus) | N/A | Phase 2a | 218 | 0.5–20 mg (everolimus, various schedules) | Influenza vaccine response — **positive** (~20% titer increase) | Published 2014 |

**Pattern note (R34, 2026-05-08):** The two recent dedicated aging-rejuvenation rapamycin RCTs (PEARL on body composition, RAPA-EX-01 on functional capacity) both reported null/negative on their prespecified primary endpoints at 5–10 mg/week. The earlier positive trial (Mannick 2014) used everolimus, not sirolimus, with a different mechanism endpoint (immunosenescence reversal in vaccine response). The mouse ITP signal at 14–42 ppm continuous in chow is unaltered — but the **human aging-rejuvenation thesis** at the n=1 biohacker dose range now has two negative high-quality data points and one positive (everolimus, immune-aging only). #gap/contradictory-evidence — the discrepancy between mouse continuous-feeding lifespan extension and human weekly-pulse rejuvenation null results is unresolved.

#gap/long-term-unknown — No trial exceeds one year of follow-up in healthy aging adults. The safety profile at aging-relevant (low, intermittent) doses over 5–10 years is not established.

## Dosing — transplant vs aging

| Context | Dose | Schedule | Goal |
|---|---|---|---|
| Transplant (immunosuppression) | 2–5 mg/day | Daily, long-term | mTORC1 + mTORC2 inhibition; immunosuppression |
| Aging (mouse ITP high dose, Miller 2014) | 42 ppm in chow (approx. 6–7 mg/kg body weight/day) | Daily in chow | maximal lifespan extension |
| Aging (PEARL trial) | 5–10 mg | Once weekly | mTORC1 inhibition; mTORC2 sparing |
| Aging (common n=1 biohacker) | 2–6 mg | Once weekly | mTORC1 inhibition; mTORC2 sparing |

**Rationale for intermittent dosing:** In male C57BL/6J mice, weekly rapamycin (1×/7 days at 2 mg/kg s.c.) did not impair glucose tolerance, whereas daily dosing caused a 20–116% increase in blood glucose and a 71% increase in AUC over a glucose tolerance test. Weekly and every-5-day dosing also spared fasting glucose, insulin levels, and beta-cell function compared to daily dosing. mTORC1 (S6 S240/244 phosphorylation) was inhibited at day 1 post-injection in both weekly and daily groups; mTORC2 (AKT S473) was robustly suppressed only with daily dosing — weekly dosing showed a trend toward suppression on day 1 but this was not statistically significant at days 3 or 7. The "hit-and-run" rationale is that transient mTORC1 inhibition can extend lifespan without sustained mTORC2 suppression, thereby avoiding glucose intolerance and dyslipidemia [^arriola2016]. Note: this study used male C57BL/6J mice only; generalizability to heterogeneous genetic backgrounds and females has not been directly tested in this design.

#gap/dose-response-unclear — The optimal human dose and schedule for aging benefit (vs immunosuppression risk) has not been established in any adequately powered trial. Current clinical evidence is consistent with a favorable window at 5–10 mg/week but effect sizes on aging outcomes are small and endpoints heterogeneous.

## Pharmacokinetics

- **Oral bioavailability:** ~14% (highly variable; affected by food, CYP3A4 and P-gp status)
- **Half-life:** ~62 h (range 46–78 h) in healthy adults
- **Protein binding:** ~92% (primarily to erythrocytes and plasma proteins)
- **Metabolism:** extensive hepatic CYP3A4/5; also P-gp substrate
- **Drug interactions:** strong CYP3A4 inhibitors (ketoconazole, grapefruit) markedly elevate levels; inducers (rifampin) decrease levels
- **Renal excretion:** <3% of dose excreted unchanged; primarily fecal

## Rapalog family

| Compound | INN | Key difference from rapamycin | Primary approved use |
|---|---|---|---|
| Everolimus | Everolimus | Hydroxyethyl group; shorter half-life (~28 h); better oral PK | TSC, cancer, transplant |
| Temsirolimus | Temsirolimus | IV prodrug (converted to rapamycin in vivo) | Renal cell carcinoma |
| Ridaforolimus | Ridaforolimus | Phosphonate-substituted; IV/oral; investigational | Cancer (trials) |

See [[everolimus]] for aging-specific everolimus data.

## Adverse effects and safety

At **transplant doses** (daily, 2–5 mg/day), well-documented adverse effects include:
- Impaired glucose tolerance / insulin resistance (mTORC2 suppression → reduced Akt S473 phosphorylation) [^lamming2012]
- Dyslipidemia (elevated triglycerides, LDL)
- Impaired wound healing
- Mouth ulcers (mucositis)
- Immunosuppression → increased infection risk
- Interstitial pneumonitis (rare)
- Potential impairment of testicular function / male fertility (high dose)

At **aging-targeted intermittent doses** (5–10 mg/week), PEARL trial found the profile tolerable with fewer metabolic side effects. Mouth sores were the most common complaint at higher doses (Mannick 2014). #gap/long-term-unknown — extended safety data in healthy aging adults is lacking.

## Classification

- **SENS strategy:** [[sens-damage-categories|MitoSENS / AmyloSENS]] — indirect; primarily acts via geroprotection rather than damage repair
- **Hallmark targets:** [[deregulated-nutrient-sensing]], [[disabled-macroautophagy]]
- **Intervention category:** [[mtor-inhibitors]] (R23d class page) — anchors mTOR-inhibitor geroprotector class
- **FDA status:** approved drug (sirolimus / Rapamune); off-label use for aging

## Related pages

- [[mtor]] — pathway page with detailed mTORC1/mTORC2 biology and verified ITP lifespan numbers
- [[autophagy]] — primary downstream process activated by mTOR inhibition
- [[ampk]] — parallel energy-sensing pathway; partial functional overlap with mTOR inhibition
- [[caloric-restriction]] — shares mTOR suppression as one mechanism; mechanistically and metabolically distinct from rapamycin [^miller2014]
- [[fisetin]] — senolytic with distinct mechanism; parallel geroprotector literature
- [[fkbp12]] — direct rapamycin-binding partner (implicit stub)
- [[everolimus]] — rapalog; aging immune data from Mannick 2014 (implicit stub)
- [[deregulated-nutrient-sensing]] — primary hallmark targeted

## Limitations and gaps

- **Human evidence is surrogate-endpoint only — and the two recent dedicated aging-rejuvenation RCTs were null/negative on their primary endpoints.** PEARL 2025 (n=114; visceral adiposity) and RAPA-EX-01 2026 (n=40; functional capacity) both used the n=1-biohacker-typical 5–10 mg/week intermittent regimen and both failed their primary endpoints. The mouse ITP continuous-feeding evidence (Harrison 2009, Miller 2014) remains robust, but the dose × schedule × outcome combination that produces *human* aging-rejuvenation benefit at sub-immunosuppressive exposure has not been demonstrated. **#gap/contradictory-evidence** between mouse continuous-dose lifespan extension and human weekly-pulse rejuvenation null results.
- **Dose-response in humans is poorly characterized.** The optimal weekly dose, treatment schedule, and age-at-initiation for aging benefit remain unknown. #gap/dose-response-unclear
- **Sex dimorphism unexplained.** Females consistently show larger lifespan extension than males in mouse ITP studies. The mechanism (sex-dependent pharmacokinetics, hormonal interactions) is unknown. #gap/no-mechanism
- **mTORC2 suppression threshold uncertain.** The dose/duration boundary at which intermittent rapamycin begins to suppress mTORC2 in human tissues has not been measured. #gap/dose-response-unclear
- **Long-term immunosuppression risk at low intermittent doses** has not been quantified in healthy aging cohorts followed for years. #gap/long-term-unknown
- **Cancer risk:** mTOR inhibition is antiproliferative (reducing some cancers) but also immunosuppressive (raising others). The net cancer-risk balance at aging doses is unresolved. #gap/contradictory-evidence

## Footnotes

[^harrison2009]: [[studies/harrison-2009-rapamycin-lifespan-itp]] · n=1,960 total (674 controls; 317–328 rapamycin/group) · in-vivo · p<0.0001 · model: UM-HET3 genetically heterogeneous mice, rapamycin 14 mg/kg food started at 600 days · doi:10.1038/nature08221 · locally available

[^miller2014]: [[studies/miller-2014-rapamycin-dose-sex-itp]] · n=156 males / 136 females per rapamycin dose; 300 male / 280 female controls (pooled 3 sites) · in-vivo · p<0.0001 (42 ppm) · model: UM-HET3 mice, 3-dose rapamycin (4.7/14/42 ppm) started at 9 months · doi:10.1111/acel.12194 · locally available

[^mannick2014]: [[studies/mannick-2014-everolimus-immune-aging]] · n=218 · rct · p<0.05 · model: human elderly ≥65 yr · doi:10.1126/scitranslmed.3009892 · not_oa — no local PDF; #gap/no-fulltext-access for full verification

[^pearl2025]: [[studies/pearl-2025-rapamycin-healthspan]] · n=114 completers (40/5 mg, 35/10 mg, 39/placebo) · rct · p<0.05 primary (VAT ns); LTM significant in women at 10 mg · model: healthy normative-aging adults, 48 weeks · doi:10.18632/aging.206235 · locally available

[^stanfield2026]: [[studies/stanfield-2026-rapa-ex-01]] · n=40 (20/20) · rct (double-blind, placebo-controlled) · primary ITT chair-stand Δ −2.13 reps (95% CI −4.61 to 0.34, p=0.089); per-protocol Δ −3.44 reps (p=0.007, favors placebo) · model: sedentary adults 65–85 yr, sirolimus 6 mg/week × 13 weeks combined with home exercise · doi:10.1002/jcsm.70274 · PMC13082878 (OA) · ACTRN12624000790549

[^ivimeycook2025]: doi:10.1111/acel.70131 · Ivimey-Cook ER, Sultanova Z, Maklakov AA · *Aging Cell* 2025;24(9):e70131 · meta-analysis · 911 effect sizes from 167 papers across 8 vertebrate species · rapamycin produced statistically significant lifespan extension at a magnitude matching dietary restriction; metformin did NOT produce significant vertebrate lifespan extension across the pooled dataset · high heterogeneity and significant publication bias caveats noted · OA gold; PMC12419861 · verified-scope: PubMed efetch abstract only

[^arriola2016]: [[studies/arriola-apelo-2016-intermittent-rapamycin]] · n=9–11/group (GTT experiments); n=6/group (islet experiments) · in-vivo + ex-vivo · model: male C57BL/6J mice, multiple rapamycin dosing schedules · doi:10.1111/acel.12405 · locally available

[^lamming2012]: [[studies/lamming-2012-rapamycin-mtorc2-insulin]] · n=~10–20/group · in-vivo + in-vitro · model: mouse, MEFs · doi:10.1126/science.1215135 · download failed (not_oa Science paper) — #gap/no-fulltext-access for primary verification of mTORC2 claims attributed to this source

[^johnson2013review]: doi:10.1038/nature11861 · review · Johnson SC, Rabinovitch PS, Kaeberlein M · Nature 2013 · not_oa — no local PDF
