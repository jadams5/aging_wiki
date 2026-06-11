---
type: phenotype
aliases: [hypertension, high blood pressure, elevated blood pressure, HTN, arterial hypertension]
icd-10: I10
icd-11: BA00
affected-tissues: ["[[arteries]]", "[[heart]]", "[[kidneys]]", "[[brain]]"]
underlying-hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]", "[[altered-intercellular-communication]]", "[[mitochondrial-dysfunction]]"]
typical-onset: "Blood pressure rises continuously with age; hypertension (≥130/80 by ACC/AHA 2017) clinically apparent in majority of adults by age 65"
prevalence-65plus: "~70–75% of US adults ≥65 (NHANES-based estimates; varies by threshold and population)"
literature-checked-through: 2026-06-11
verified: true
verified-date: 2026-06-11
verified-by: claude
verified-scope: "SPRINT 2015 (PDF verified); Jennings 2019 (PDF verified); GBD 2023 (PDF verified); Lewington 2002 (closed-access — verified against published abstract/PMID 12493255 only; #gap/no-fulltext-access); SPRINT-MIND 2019 (abstract verified; JAMA full-text download failed; p-values in footnote are plausible from CIs but not confirmed against full text); Muntner 2020 (abstract verified; full-text download failed); ICD-11 BA00 not independently re-checked against live WHO database (WHO ICD-11 API unavailable during verification pass)"
---


# Hypertension

Sustained elevation of arterial blood pressure above clinically defined thresholds, and one of the largest modifiable contributors to cardiovascular and all-cause mortality worldwide. In the aging context, hypertension is both an end-organ manifestation of vascular aging and an accelerator of downstream pathologies including [[atherosclerosis]], [[phenotypes/arterial-stiffening|arterial stiffening]], [[heart-failure]], [[phenotypes/chronic-kidney-disease|chronic kidney disease]], and vascular [[neurodegeneration]].

Systolic blood pressure (SBP) rises continuously with age in most populations; diastolic pressure (DBP) plateaus or falls after age 55–60 in many individuals as aortic compliance decreases, producing **isolated systolic hypertension** — the dominant phenotype in older adults and the pattern most strongly linked to cardiovascular and cerebrovascular risk [^lewington2002].

## Definition and thresholds

The dominant guideline frameworks define hypertension differently:

| Guideline | Normal | Elevated | Stage 1 HTN | Stage 2 HTN |
|---|---|---|---|---|
| ACC/AHA 2017 [^whelton2018] | <120/<80 | 120–129/<80 | 130–139 / 80–89 | ≥140/≥90 |
| ESC/ESH 2018 | <120/<80 | 120–129/80–84 | Grade 1: 140–159/90–99 | Grade 2/3: ≥160/≥100 |
| JNC-7 (older) | <120/<80 | 120–139/80–89 (prehypertension) | ≥140/≥90 | — |

The 2017 ACC/AHA reclassification of the 130–139/80–89 mm Hg range as Stage 1 hypertension (replacing the "prehypertension" label) substantially increased the estimated prevalence of hypertension in US adults and was accompanied by stronger emphasis on lifestyle intervention in this range. No consensus exists across international guidelines — clinicians should note which threshold applies when interpreting prevalence figures.

**Isolated systolic hypertension (ISH):** SBP ≥140 mm Hg with DBP <90 mm Hg. Most common pattern in adults >60; driven primarily by aortic stiffening reducing diastolic filling of the windkessel. Associated with elevated pulse pressure (PP = SBP − DBP), itself an independent cardiovascular risk marker.

## The continuous SBP-risk relationship

The defining epidemiological finding for hypertension in aging is that cardiovascular risk increases **log-linearly with SBP throughout the entire usual blood pressure range, with no threshold down to at least 115/75 mm Hg** [^lewington2002]. The Prospective Studies Collaboration pooled individual-participant data from 1 million adults across 61 prospective cohort studies; each 20 mm Hg difference in usual SBP (or ~10 mm Hg diastolic) was associated with a greater than 2-fold difference in stroke mortality and approximately 2-fold differences in ischemic heart disease mortality at ages 40–69 years [^lewington2002].

Key implications:
- There is no "safe" blood pressure level in this framework — risk reduction from lowering SBP is continuous.
- The absolute risk at any SBP level is strongly age-dependent: the same proportional hazard translates to far more excess events per year in a 70-year-old than a 40-year-old.
- Proportional risk associations diminish somewhat at ages 80–89 (roughly halved), though absolute annual excess risk remains substantial in older individuals [^lewington2002].

## Prevalence and aging trajectory

In US adults, hypertension prevalence increases steeply with age. NHANES-based estimates (2017–2018, ACC/AHA 2017 thresholds):
- Adults 18–39: ~22–25%
- Adults 40–59: ~55%
- Adults 60–79: ~74%
- Adults ≥80: ~80%+

Overall controlled BP (SBP <140/DBP <90, JNC-7 threshold) among US adults with hypertension peaked at 53.8% in 2013–2014 and declined to 43.7% by 2017–2018, reflecting a widening treatment gap in the latter NHANES cycles [^muntner2020]. Blood pressure control disparities are prominent by race/ethnicity (lower control in non-Hispanic Black adults) and by sex.

High SBP is the world's leading attributable risk factor for disability-adjusted life years. The Global Burden of Disease 2023 analysis identified high SBP as responsible for 8.4% of total DALYs globally [^gbd2023].

## Pathophysiology in the aging context

Hypertension in older adults is predominantly a **structural vascular disease** rather than a purely hemodynamic one. Multiple age-related processes converge:

### Arterial stiffening

The primary driver of isolated systolic hypertension in aging. Central elastic arteries (aorta, common carotids) undergo progressive stiffening through: accumulation of AGEs (advanced glycation end-products) cross-linking collagen and elastin; elastic fiber fragmentation; smooth muscle hypertrophy; and calcification. This reduces the **Windkessel buffering** function, increasing pulse wave velocity (PWV) and returning reflected pulse waves to the heart earlier in systole — amplifying SBP and reducing DBP [^boutouyrie2021].

Critically, the relationship is **bidirectional**: elevated SBP accelerates arterial stiffening, which further raises SBP — creating a reinforcing cycle with [[phenotypes/arterial-stiffening]].

### Endothelial dysfunction

Age-associated endothelial dysfunction reduces nitric oxide (NO) bioavailability through: increased oxidative stress (superoxide quenching NO); reduced eNOS expression and activity; reduced sensitivity to shear-stress-mediated NO release. Reduced NO impairs vasodilation, increases peripheral vascular resistance, and promotes vascular smooth muscle hypertrophy. Cellular senescence in endothelial cells and VSMCs contributes through SASP (senescence-associated secretory phenotype) mediators driving local inflammation [^raucci2021] — connecting [[cellular-senescence]] to vascular stiffening.

### Renin-angiotensin-sympathetic axis

Aging is associated with enhanced sympathetic nervous system activity and parasympathetic decline, increasing peripheral resistance. The renin-angiotensin system (RAS) shifts toward a pro-hypertensive angiotensin-II dominant state relative to the cardioprotective angiotensin-(1–7) counter-regulatory axis [^miller2022]. Angiotensin II drives vasoconstriction, aldosterone-mediated sodium retention, and vascular inflammation/fibrosis. Central nervous system changes (hypothalamic overactivation, microglial neuroinflammation in circumventricular organs) also contribute to sympathetic overdrive [^wang2022].

### Mitochondrial dysfunction and oxidative stress

Vascular mitochondria become dysfunctional with age — reduced oxidative phosphorylation efficiency, increased reactive oxygen species (ROS) leak, and impaired quality control. Excess mitochondrial ROS drives both endothelial dysfunction (eNOS uncoupling) and vascular smooth muscle stiffening [^forte2020]. Connects [[mitochondrial-dysfunction]] to hypertension pathogenesis.

### Chronic inflammation

Elevated circulating pro-inflammatory cytokines (IL-6, IL-1β, TNF-α) and SASP from senescent vascular cells promote endothelial dysfunction, promote monocyte infiltration, and activate RAAS. Inflammaging (see [[chronic-inflammation]]) is thus both upstream and downstream of elevated blood pressure, through immune infiltration in perivascular adventitia, macrophage-mediated ROS production, and autoimmune mechanisms involving effector T-cell accumulation in kidneys and vasculature [^raucci2021].

### Sodium handling and renal aging

Age-related decline in renal mass and glomerular filtration rate reduces the kidney's capacity to excrete sodium loads, shifting the pressure-natriuresis relationship. Salt sensitivity increases with age — a sodium load that would not elevate BP in a young kidney may sustain hypertension in an aging one. This underlies the larger treatment response to sodium restriction and thiazide/thiazide-like diuretics in older adults.

## Downstream pathologies

Hypertension is the principal modifiable driver of all major end-organ damage categories in older adults:

### Cardiovascular
- **[[atherosclerosis]]** — elevated shear stress and endothelial injury accelerate atheromatous plaque formation; hypertension is the leading attributable risk factor for MI and stroke
- **[[phenotypes/arterial-stiffening]]** — bidirectional: stiffening causes ISH; ISH worsens stiffening
- **[[heart-failure]]** — LV hypertrophy (pressure overload) → diastolic dysfunction → HFpEF (heart failure with preserved ejection fraction); long-term HTN also causes HFrEF via LV remodeling
- **Atrial fibrillation** — LV hypertrophy and fibrosis are major AF substrates

### Renal
- **[[phenotypes/chronic-kidney-disease]]** (stub) — hypertension is both a cause and consequence of CKD; sustained elevated intraglomerular pressure drives glomerulosclerosis; loss of GFR worsens sodium retention and BP, closing a bidirectional loop

### Cerebrovascular and cognitive
- **Stroke** — hypertension is the single largest modifiable stroke risk factor (both hemorrhagic and ischemic) [^gbd2024stroke]
- **Vascular [[neurodegeneration]]** — chronic hypoperfusion and microvascular disease drive white matter lesions and vascular dementia; SPRINT-MIND found intensive SBP control (<120 mm Hg) reduced mild cognitive impairment vs standard control (<140 mm Hg), though probable dementia reduction did not reach statistical significance at the trial's follow-up [^sprint_mind2019]
- **Accelerated cognitive decline** — long-term BP variability (independently of mean BP) is associated with accelerated global cognitive decline in older adults [^li2021]

## Clinical evidence for treatment

### SPRINT (2015) — landmark intensive BP-lowering trial

Randomized 9,361 adults with SBP ≥130 mm Hg and elevated CV risk (excluding diabetes) to intensive treatment (SBP target <120 mm Hg) vs standard (SBP target <140 mm Hg). The trial stopped early for benefit [^sprint2015]:
- Primary composite MACE endpoint: HR 0.75 (intensive vs standard), 1.65% vs 2.19%/year
- All-cause mortality: HR 0.73
- Higher rates of acute kidney injury, hypotension, syncope, and electrolyte abnormalities in intensive arm (no significant increase in injurious falls)

SPRINT provides the most rigorous human evidence that treating below the traditional 140 mm Hg threshold reduces cardiovascular events in a non-diabetic high-risk older population.

### STEP trial (2021, Asian elderly 60–80)

An RCT of 8,511 Chinese adults age 60–80 confirmed intensive BP targets (SBP 110–<130 mm Hg) reduced MACE vs standard (SBP 130–<150 mm Hg) in elderly Asian patients, extending the SPRINT evidence base to an older cohort in an Asian population with high stroke burden [^step2022review].

### Effect size summary

| Intervention | SBP reduction | Evidence source |
|---|---|---|
| Lifestyle (Na restriction + DASH + exercise) | 5–15 mm Hg | Multiple RCTs |
| Each antihypertensive drug class (mono) | 8–12 mm Hg | Large meta-analyses |
| Mediterranean diet (older adults 65–79) | −5.5 mm Hg SBP (males −9.2, females −3.1 ns) [^jennings2019] | RCT n=1,128 (BP analysis) |
| Sodium restriction (intervention page) | See [[interventions/dietary/sodium-restriction]] | — |

For a given starting SBP, each 10 mm Hg sustained reduction is estimated to reduce major cardiovascular events by ~20% and stroke by ~27% (based on observational scaling from Lewington 2002, supported by clinical trial data).

## Drivers and modifiable risk factors

Major modifiable contributors:

- **Dietary sodium** — dose-response between sodium intake and BP; salt sensitivity increases with age. See [[interventions/dietary/sodium-restriction]].
- **Obesity** — adipose expansion raises renal sympathetic tone and RAAS activity; adipokine dysregulation impairs endothelial function. See [[phenotypes/obesity]] (stub). #gap/stub
- **Alcohol** — dose-dependent pressor effect of chronic alcohol consumption; mechanisms include sympathetic activation, cortisol elevation, endothelial dysfunction. See [[exposures/alcohol]] (stub). #gap/stub
- **Physical inactivity** — habitual aerobic exercise reduces resting SBP by ~3–7 mm Hg; mechanisms include improved endothelial function, reduced sympathetic tone, and improved arterial compliance
- **Sleep disorders** — obstructive sleep apnea is a secondary cause of hypertension through intermittent hypoxia and sympathetic activation (see also [[interventions/lifestyle/sleep]])
- **Smoking** — acute vasopressor effect; long-term vascular injury
- **Age** — non-modifiable biological driver through the arterial stiffening-senescence-inflammation cascade described above

## Hallmark mapping

Hypertension sits at the intersection of multiple [[hallmarks-of-aging]] as both a downstream consequence and a reinforcing driver:

| Hallmark | Relationship to hypertension |
|---|---|
| [[chronic-inflammation]] | Inflammaging cytokines drive endothelial dysfunction and RAAS; hypertension reciprocally elevates vascular inflammation |
| [[cellular-senescence]] | VSMC and endothelial senescence via SASP → vascular stiffening and dysfunction |
| [[altered-intercellular-communication]] | Dysregulated paracrine NO/angiotensin signaling; impaired endothelium-smooth muscle crosstalk |
| [[mitochondrial-dysfunction]] | Mitochondrial ROS in vessels → eNOS uncoupling and stiffening |

## Limitations and gaps

- **Threshold debates** — the ACC/AHA 2017 threshold (130/80) vs the older 140/90 threshold remains contested; prevalence figures vary substantially depending on which cutpoint is applied. #gap/contradictory-evidence
- **Treatment benefit in the oldest old (≥80)** — evidence for benefit of aggressive treatment in frail adults >80 is limited; the HYVET trial suggested benefit at SBP ≥160 in >80s but the optimal lower target in this group is uncertain. #gap/needs-replication
- **Optimal target in diabetes** — diabetics were excluded from SPRINT, and the earlier ACCORD-BP trial found no significant CV-event reduction from intensive (<120) vs standard (<140) SBP control in type-2 diabetes. However, the larger **BPROAD trial (2025, n=12,821 Chinese adults with T2D)** reported that an intensive SBP target (<120) **did** reduce major cardiovascular events vs standard (<140): HR 0.79 (95% CI 0.69–0.90; P<0.001) [^bproad2025]. The current weight of evidence thus favors a benefit of intensive control in diabetes, reconciling the earlier ACCORD null (smaller, 2×2 factorial with glycemia arm) toward the SPRINT-direction result. #gap/contradictory-evidence
- **Vascular dementia endpoint** — SPRINT-MIND failed to reach statistical significance for dementia reduction (HR 0.83, not significant), though MCI was significantly reduced; longer follow-up studies needed. #gap/needs-replication
- **Mechanistic link obesity→hypertension** — cross-linked to [[phenotypes/obesity]], but no integrated quantitative mediation analysis (how much of the obesity→CVD effect runs through blood pressure) has been assembled yet. #gap/no-mechanism

## Footnotes

[^lewington2002]: doi:10.1016/S0140-6736(02)11911-8 · Lewington S, Clarke R, Qizilbash N, Peto R, Collins R; Prospective Studies Collaboration · *Lancet* 2002;360(9349):1903–1913 · PMID 12493255 · meta-analysis · n=1,000,000 in 61 prospective studies; 12.7 million person-years; ~56,000 vascular deaths · each 20 mm Hg lower usual SBP associated with >2-fold lower stroke mortality at ages 40–69; linear down to ≥115/75 with no threshold · model: human (observational) · #gap/no-fulltext-access (closed-access)

[^whelton2018]: doi:10.1161/HYP.0000000000000066 · Whelton PK et al. · *Hypertension* 2018;71(6):e13–e115 · PMID 29133354 · consensus guideline · 2017 ACC/AHA hypertension guideline; redefined Stage 1 HTN as ≥130/80 mm Hg; n/a (clinical practice guideline) · #gap/no-fulltext-access (closed-access)

[^muntner2020]: doi:10.1001/jama.2020.14545 · Muntner P, Hardy ST, Fine LJ et al. · *JAMA* 2020;324(12):1190–1200 · PMID 32902588 · observational (NHANES serial cross-sections) · n=51,761 total participants (18,262 with hypertension by JNC-7 definition: SBP ≥140 or DBP ≥90 or antihypertensive medication use) across 10 survey cycles 1999–2018 · BP control (defined as SBP <140 and DBP <90) peaked 53.8% (2013–14) then declined to 43.7% (2017–18) among all US adults with hypertension (not restricted to treated subgroup) · model: US adult population

[^gbd2023]: doi:10.1016/S0140-6736(25)01637-X · GBD 2023 Disease and Injury and Risk Factor Collaborators · *Lancet* 2025 · PMID 41092926 · systematic analysis 204 countries; high SBP 8.4% of total global DALYs; leading single modifiable risk factor for cardiovascular mortality worldwide

[^sprint2015]: doi:10.1056/NEJMoa1511939 · SPRINT Research Group (Wright JT Jr, Williamson JD, Whelton PK et al.) · *N Engl J Med* 2015;373(22):2103–2116 · PMID 26551272 · RCT · n=9,361; randomized; intensive (<120 mm Hg) vs standard (<140 mm Hg) SBP target; median follow-up 3.26 yr (stopped early); HR for primary MACE 0.75 (95% CI 0.64–0.89); all-cause mortality HR 0.73; model: human adults ≥50 yr with SBP ≥130 + elevated CV risk (no diabetes)

[^bproad2025]: doi:10.1056/NEJMoa2412006 · Bi Y, Li M, Liu Y et al.; BPROAD Research Group · *N Engl J Med* 2025;392(12):1155–1167 · PMID 39555827 · RCT · n=12,821 Chinese adults with type-2 diabetes; intensive (SBP <120) vs standard (<140); median follow-up ~4.2 yr; primary composite CV outcome HR 0.79 (95% CI 0.69–0.90; P<0.001); reconciles the earlier ACCORD-BP null toward the SPRINT-direction benefit in diabetes · model: human RCT (T2D) · #gap/no-fulltext-access (verified against PubMed abstract/metadata; full text not re-read)

[^sprint_mind2019]: doi:10.1001/jama.2018.21442 · Williamson JD, Pajewski NM, Auchus AP et al.; SPRINT MIND Investigators · *JAMA* 2019;321(6):553–561 · PMID 30688979 · RCT sub-study · n=9,361 (same as SPRINT); median follow-up 5.11 yr; intensive vs standard BP; probable dementia HR 0.83 (95% CI 0.67–1.04, ns); MCI HR 0.81 (95% CI 0.69–0.95, significant); combined MCI/dementia HR 0.85 (95% CI 0.74–0.97, significant); exact p-values not reported in abstract — full text not verified; trial stopped early may have underpowered dementia endpoint · model: human (SPRINT substudy)

[^boutouyrie2021]: doi:10.1161/CIRCRESAHA.121.318061 · Boutouyrie P, Chowienczyk P, Humphrey JD, Mitchell GF · *Circ Res* 2021;128(7):1034–1056 · PMID 33793325 · review · arterial stiffness → structural BP feedback loops; PWV and augmentation index as risk markers in hypertension; antihypertensive agents reduce stiffness beyond passive BP lowering; model: human + animal data

[^raucci2021]: doi:10.1007/s00018-021-03979-4 · Raucci A, Macrì F, Castiglione S, Badi I, Vinci MC, Zuccolo E · *Cell Mol Life Sci* 2022;79(1):23 · PMID 34698884 · review · miR-34a-mediated SIRT1 suppression induces senescence and SASP in vascular smooth muscle cells and endothelial cells; links [[cellular-senescence]] → hypertension-relevant endothelial dysfunction · model: in-vitro + murine + human tissue

[^miller2022]: doi:10.1016/j.peptides.2021.170733 · Miller AJ, Arnold AC · *Peptides* 2022;149:170733 · PMID 34973286 · review · aging-associated shift toward sympathetic enhancement and Ang-II dominant RAAS state; parasympathetic decline; Ang-(1–7) counter-regulatory axis; model: human + rodent data

[^wang2022]: doi:10.2147/JIR.S350109 · Wang M, Pan W, Xu Y et al. · *J Inflamm Res* 2022;15:2917–2930 · PMID 35642214 · review · microglial neuroinflammation in hypertension; prorenin receptor, TLR4, TREM2, P2X7 signaling; hypothalamic autonomic circuits in BP regulation · model: rodent + human tissue

[^forte2020]: doi:10.1016/j.mad.2020.111267 · Forte M, Stanzione R, Cotugno M et al. · *Mech Ageing Dev* 2020;189:111267 · PMID 32473170 · review · vascular mitochondrial dysfunction in hypertension-related aging: ROS generation, eNOS uncoupling, impaired oxidative phosphorylation; links [[mitochondrial-dysfunction]] → arterial stiffening and endothelial dysfunction · model: rodent + in-vitro + human data

[^jennings2019]: doi:10.1161/HYPERTENSIONAHA.118.12259 · Jennings A, Berendsen AM, de Groot LCPGM et al. · *Hypertension* 2019;73(5):1017–1026 · PMID 30636547 · RCT (NU-AGE trial) · n=1,294 randomised (1,142 completed; BP analysis n=1,128: 567 control + 561 intervention) adults age 65–79; 12-month Mediterranean-style diet intervention; SBP reduced −5.5 mm Hg (95% CI −10.7 to −0.4; P=0.03; males −9.2 mm Hg P=0.02; females −3.1 mm Hg P=0.37 ns); augmentation index −12.4 (95% CI −24.4 to −0.5; P=0.04) assessed in UK subset only (n=225); no significant change in pulse wave velocity; model: human older adults (5 European centres)

[^gbd2024stroke]: doi:10.1016/S1474-4422(24)00369-7 · GBD 2021 Stroke Risk Factor Collaborators (Feigin VL et al.) · *Lancet Neurol* 2024;23(10):973–1003 · PMID 39304265 · systematic analysis · n=204 countries 1990–2021; high SBP among leading attributable risk factors for stroke DALYs; 7.3 million stroke deaths in 2021; model: global population epidemiology

[^li2021]: doi:10.1161/STROKEAHA.120.033697 · Li C, Ma Y, Hua R et al. · *Stroke* 2021;52(8):2640–2649 · PMID 34167328 · observational prospective · n=12,298 dementia-free adults (mean age 64.6 yr); 10% increase in SBP variability → 0.026 SD/y accelerated global cognitive decline; nonlinear relationship with inflection; model: human cohort

[^step2022review]: doi:10.1038/s41440-022-00875-7 · Zhang WL, Cai J · *Hypertension Res* 2022;45(6):943–951 · PMID 35277670 · review · evidence synthesis on STEP trial (n=8,511 Chinese adults 60–80 yr); intensive SBP 110–<130 mm Hg vs standard 130–<150 mm Hg; reduced MACE in elderly Asian patients; higher stroke-benefit in Asian populations · model: human RCT (Asian elderly)
