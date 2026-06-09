---
type: intervention
aliases: [dietary sodium restriction, low-sodium diet, salt reduction, DASH-sodium, low-salt diet]
mode: dietary
mechanisms: [dietary-sodium-restriction, potassium-repletion, blood-pressure-modulation, anti-inflammatory]
targets: []
target-hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
target-pathways: ["[[nf-kb]]"]
human-evidence-level: strong
clinical-stage: implemented
safety-profile: well-established
translation-gap: human-evidence-strong
next-experiment: "Head-to-head RCT of DASH-sodium (<1500 mg/day) versus DASH-potassium-enriched (>4700 mg/day K via food, ambient Na) with pulse wave velocity as primary endpoint and epigenetic-clock deceleration as secondary, in adults 50–75 with stage-1 hypertension (n≥300, 2-year follow-up) — would disentangle the independent vs synergistic contributions of Na-reduction and K-repletion to arterial-stiffness reversal."
clinical-trials-active: 32
literature-checked-through: 2026-06-09
verified: true
verified-date: 2026-06-09
verified-by: claude
verified-scope: "Kong 2025, Neal 2021 SSaSS, Granal 2025, O'Donnell 2014 PURE, Argeros 2025 verified against primary PDFs. Cook 2009 TOHP unverified (closed-access, #gap/no-fulltext-access). Sacks 2001 DASH-Sodium, Aburto 2013, Intersalt 1988, Greenwood 2024, Wilck 2017 not re-read (widely corroborated, open literature). Corrections applied: SSaSS composition 75/25→70/30 NaCl/KCl; SSaSS BP updated to −3.34 mmHg measured; PURE country count 18→17; Argeros hypertensive subgroup disambiguated (all-HTN −2.96 mmHg vs HTN-on-medication −7.68 mmHg). Kempner specific numbers (95.6%, 17,000) absent from page — correctly excluded."
---

# Dietary sodium restriction

Reducing dietary sodium intake is one of the most clinically validated and cost-free cardiovascular-aging interventions available. It is mechanistically straightforward: sodium drives osmotic water retention in the extracellular compartment, so reducing sodium intake lowers intravascular volume, cardiac output, and preload — lowering blood pressure across a graded dose-response. An umbrella review of 21 meta-analyses and 91 outcomes (Kong et al. 2025) found no J-shaped curve for mortality — lower sodium intake was linearly associated with lower all-cause mortality (RR 0.88) and cardiovascular mortality (RR 0.83) — directly refuting the PURE J-curve hypothesis [^kong2025]. The companion cation story is essential: **potassium and magnesium repletion amplify and sustain the benefit** through independent vascular mechanisms, and the Na/K ratio predicts cardiovascular risk better than either mineral alone [^cook2009].

## Mechanism: sodium → blood pressure → arterial aging

Dietary sodium is the primary driver of extracellular fluid volume. Sodium-sensing cells in the kidney (macula densa), hypothalamus, and adrenal glands integrate Na⁺ concentration signals via the renin-angiotensin-aldosterone system (RAAS). At high sodium intake the RAAS is suppressed; at low intake, mild RAAS activation compensates by upregulating aldosterone-mediated tubular Na⁺ reabsorption. Critically, sustained moderate sodium restriction (to 3–5 g/day) produces only **mild RAAS activation** that does not reverse the blood pressure benefit — Kong 2025 found aldosterone increased only +73.20 pmol/L and plasma renin activity +2.09 ng/mL/h, with no change in catecholamines [^kong2025].

### Downstream cardiovascular-aging effects

Chronically elevated blood pressure accelerates several aging-relevant processes:

- **[[arterial-stiffening]]** — sustained pressure load triggers VSMC phenotypic switching, increased collagen crosslinking, and elastin fragmentation; pulse wave velocity rises; systolic BP increase is self-amplifying.
- **[[atherosclerosis]]** — pressure-driven endothelial shear stress favors LDL trancytosis and oxidation; hypertension independently predicts MACE beyond the lipid burden.
- **[[cardiovascular-aging]]** — left ventricular hypertrophy from chronic pressure overload reduces diastolic compliance; heart failure with preserved ejection fraction (HFpEF) prevalence rises sharply with BP trajectory. See [[cardiovascular-aging]] and [[heart-failure]].
- **[[chronic-inflammation]]** — high sodium activates NF-κB in endothelial cells and macrophages, induces TH17 polarization, and drives vascular oxidative stress [^wilck2017]; sodium restriction partially reverses these inflammatory signatures. See [[nf-kb]].

## Evidence ladder

### Population anchor: Intersalt (1988)

The Intersalt cooperative study measured 24-hour urinary sodium and blood pressure in 10,079 participants across 52 centres (32 countries) [^intersalt1988]. Within-centre regression showed 100 mmol/day higher sodium excretion was associated with +3 to +6 mmHg systolic BP (age-adjusted). The Yanomamo Indians (Brazil; median Na intake ~0.2 mmol/day) showed near-zero age-related BP rise, while North China centres (median ~242 mmol/day) showed steep age-dependent BP escalation. This remains the foundational evidence that population-level sodium intake determines whether blood pressure rises with age. #gap/needs-replication — ecological correlation; individual-level and country-level confounders acknowledged.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — RAAS/volume regulation is the same axis |
| Phenotype conserved in humans? | yes — BP is the direct endpoint |
| Replicated in humans? | yes — DASH-Sodium RCT and multiple subsequent RCTs confirm the mechanistic direction |

### RCT anchor: DASH-Sodium trial (2001)

Sacks et al. randomized 412 adults to a factorial design of two dietary patterns (DASH vs. control) × three sodium levels (low ~65 mmol/day, intermediate ~107 mmol/day, high ~142 mmol/day) for 30 days each [^sacks2001]. Combined DASH + low sodium reduced systolic BP by **11.5 mmHg in hypertensives** and 7.1 mmHg in normotensives vs. control diet + high sodium. Sodium reduction alone (high → low in the control diet) produced −5.0 to −6.7 mmHg systolic. This is the strongest short-term controlled trial demonstrating dose-response between sodium intake and BP across hypertension status.

### Long-term mortality: TOHP follow-up (2009)

The Trials of Hypertension Prevention (TOHP) enrolled participants in sodium-reduction intervention trials in the 1980s–1990s (TOHP I, 1987–1990; TOHP II, 1990–1995). Cook et al. 2009 followed 2,275 TOHP participants for 10–15 years post-trial and reported on cardiovascular events [^cook2009]. The sodium-to-potassium excretion ratio was the strongest predictor — participants in the highest quartile of Na/K ratio had significantly elevated cardiovascular risk vs. lowest quartile (p=0.01); sodium alone showed a nonsignificant upward trend (p=0.38), potassium alone a nonsignificant downward trend (p=0.08). This result reframed the question: **it is the balance of sodium to potassium, not sodium alone, that best predicts CVD risk**.

### The J-curve controversy and its resolution

**The PURE J-curve (O'Donnell/Mente 2014):** The PURE study analyzed urinary sodium from 101,945 participants across 17 countries and reported a J-shaped association between estimated sodium excretion and composite cardiovascular mortality: sodium <3 g/day was associated with *higher* risk (OR 1.27) than the 3–6 g/day reference range, while sodium ≥7 g/day showed elevated risk (OR 1.15) [^pure2014]. This finding was widely cited as evidence against aggressive sodium restriction and generated substantial controversy. The PURE authors interpreted it as evidence for a "sweet spot" of 3–6 g/day sodium.

**Methodological critiques of PURE:** Independent analyses found that PURE's low-sodium estimates (~1.6 g/day median in the low group) largely came from spot-urine measurements (not 24-hour collections), which systematically underestimate sodium in low-intake populations due to circadian variation; acute sodium restriction may transiently activate RAAS and neurohormonal systems, confounding the association in sick individuals. Furthermore, the low-sodium group had higher prevalence of diabetes and pre-existing CVD, introducing selection bias ("sick quitter" effect). #gap/contradictory-evidence

**Kong 2025 umbrella review — no J-curve for mortality:** The 2025 umbrella review of 21 meta-analyses and 91 cardiovascular outcomes found **no J-shaped curve** in the dose-response analysis [^kong2025]. Lower sodium intake was linearly associated with lower all-cause mortality (RR 0.88, −12%) and cardiovascular mortality (RR 0.83, −17%), while higher sodium intake increased cardiovascular disease risk (RR 1.13 per high vs. low), hypertension (OR 1.33), stroke mortality (OR 1.40), and ischemic stroke (OR 1.60). Per +1 g/day sodium: stroke risk +6%, cardiovascular risk ~+4%, systolic BP +0.60 mmHg. The RAAS counter-regulatory concern showed only mild activation — not sufficient to reverse BP benefit at moderate restriction. **The current evidence favors a linear dose-response favoring lower intake.**

The authors recommend <5 g salt/day (equivalent to <2 g sodium/day), consistent with WHO guidance (<5 g salt = <2 g sodium).

**Residual heterogeneity (important nuance):** Regional heterogeneity is real. The BP-lowering effect of sodium restriction was significant in the Western Pacific, European, and Southeast Asian regions but was **NOT statistically significant in the Americas** (systolic −2.80 mmHg, p>0.05) [^kong2025]. Stroke risk from high sodium was strong in Asia (RR 1.13 per +1 g/day) but non-significant in Europe (1.01) and Americas (1.08). This regional pattern likely reflects differences in baseline sodium intake, background diet composition (particularly potassium co-intake), and genetic salt-sensitivity prevalence. The J-curve debate may partly reflect this heterogeneity — regions with high potassium co-intake may show apparent J-curves because low-sodium individuals in those populations also have high potassium, confounding the sodium-alone signal.

### Salt substitute RCT: SSaSS (Neal et al. 2021)

The Salt Substitute and Stroke Study (SSaSS) randomized 20,995 participants in 600 rural Chinese villages to a salt substitute (~70% NaCl / ~30% KCl by mass, per Chinese national standard GB 2019-2005) versus regular salt (100% NaCl) for a mean 4.74 years [^neal2021]. All participants had prior stroke or hypertension. Salt-substitute arm showed:
- Stroke rate: 29.14 vs 33.65 per 1,000 person-years — **rate ratio 0.86 (p=0.006, −14% relative risk)**
- Major cardiovascular events: 49.09 vs 56.29 — **rate ratio 0.87 (p<0.001, −13%)**
- All-cause mortality: 39.28 vs 44.61 — **rate ratio 0.88 (p<0.001, −12%)**
- Serious hyperkalemia: not significantly different (3.35 vs 3.30 per 1,000 person-years, p=0.76)

The SSaSS result is the strongest pragmatic RCT evidence for a dietary sodium intervention: it simultaneously reduced sodium AND increased potassium, achieved a meaningful BP reduction (measured −3.34 mmHg systolic, 95% CI −4.51 to −2.18 mmHg), and demonstrated hard endpoint (stroke + death) benefit in a high-risk population over ~5 years. The hyperkalemia non-finding is important but comes with a significant caveat (see Safety below).

## Companion cations: potassium and magnesium

### Potassium: the primary sodium antagonist

Potassium counters sodium through three mechanisms: (1) **renal natriuresis** — potassium-activated Na⁺/K⁺-ATPase in the distal nephron and K⁺-mediated ROMK channel activation increases renal Na⁺ excretion; (2) **VSMC hyperpolarization** — elevated extracellular K⁺ hyperpolarizes vascular smooth muscle via K⁺ channels, reducing intracellular Ca²⁺ and causing vasodilation; (3) **reduced vascular oxidative stress** — potassium attenuates endothelial superoxide generation at physiological concentrations.

**Dose-response meta-analysis (Granal et al. 2025):** A meta-analysis of 10 RCTs (4 non-hypertensive, 6 hypertensive populations) using 24-hour urinary potassium excretion as the validated intake metric found a linear dose-response [^granal2025]:
- Non-hypertensive: per +50 mmol/day K → systolic −0.5 mmHg, diastolic −0.12 mmHg (modest)
- **Hypertensive: per +50 mmol/day K → systolic −5.3 mmHg, diastolic −3.62 mmHg** (substantial)

This hypertension-selective amplification explains why SSaSS (almost all hypertensive/stroke-history participants) showed large BP benefit from the KCl-partial substitute even as normotensive populations show smaller responses.

**Aburto et al. 2013 (BMJ) systematic review:** A broader meta-analysis found increased potassium intake associated with 24% reduced risk of stroke (RR 0.76, 95% CI 0.66–0.89) and non-significant trends for coronary artery disease and total CVD [^aburto2013]. Also found modest BP reductions consistent with Granal 2025.

Guideline targets: WHO recommends >3.5 g/day (>90 mmol/day) potassium for adults; the SSaSS substitute provided approximately 65 mmol/day supplemental potassium at full replacement.

### Magnesium: the overlooked co-factor

Magnesium is often omitted from the sodium-potassium discussion but has a **mechanistically irreplaceable role** in the full electrolyte system:

**Mg²⁺ as Na⁺/K⁺-ATPase cofactor:** Magnesium is an obligatory cofactor for Na⁺/K⁺-ATPase (the sodium-potassium pump). Intracellular Mg²⁺ depletion reduces Na⁺/K⁺-ATPase activity, impairing renal tubular and cellular potassium retention. Magnesium also gates the ROMK (Kir1.1) potassium channel in the distal nephron: intracellular Mg²⁺ blocks outward K⁺ flux via the channel; Mg depletion releases this block, causing excessive renal potassium wasting. The clinical consequence is **refractory hypokalemia that will not correct until magnesium is repleted** — the classic double-depletion syndrome of hypomagnesemia driving hypokalemia.

**Independent BP-lowering effect:** A 2025 meta-analysis of 38 RCTs in *Hypertension* (Argeros et al., n=2,709 participants, median dose 365 mg elemental Mg, median duration 12 weeks) found [^argeros2025]:
- Overall: systolic −2.81 mmHg (95% CI −4.32 to −1.29), diastolic −2.05 mmHg (−3.23 to −0.88)
- **All hypertensive participants (N=17 trials):** systolic −2.96 mmHg (95% CI −5.53 to −0.38), diastolic −2.10 mmHg (−3.44 to −0.77)
- **Hypertensive on BP-lowering medication (N=6 trials):** systolic −7.68 mmHg (95% CI −12.67 to −2.69), diastolic −2.96 mmHg (−5.87 to −0.05) — larger effect may partly reflect diuretic-induced magnesium depletion
- **Hypomagnesemia at baseline (N=8 trials):** systolic −5.97 mmHg (95% CI −8.52 to −3.41), diastolic −4.75 mmHg (−6.59 to −2.92)
- Normotensive: no significant effect
- No significant dose-response within the 82–637 mg dose range studied (high heterogeneity)

The greater BP effect in those with hypomagnesemia suggests the benefit is partly repletion-driven (restoring depleted function) rather than pharmacological. The DASH dietary pattern delivers substantial magnesium (~350–450 mg/day) via legumes, nuts, leafy greens, and whole grains — the "DASH effect" is likely a composite of Na restriction + K repletion + Mg repletion, making attribution of BP benefit to any single component difficult. #gap/no-mechanism — independent Mg effect on BP in adequately nourished, normomagnesemic adults without hypertension is likely small or absent.

**The DASH co-delivery problem:** The DASH dietary pattern simultaneously delivers: lower sodium, higher potassium, higher magnesium, and higher fiber. The 7.1–11.5 mmHg systolic reductions seen in DASH-Sodium cannot be cleanly attributed to the sodium component alone. This is both a strength (integrated dietary strategy works) and a limitation (mechanistic attribution is imprecise) of the available evidence. #gap/contradictory-evidence — the independent contribution of Mg to DASH's BP effect has not been tested in a factorial design with Mg repletion vs. placebo arms.

## Salt sensitivity and population heterogeneity

Not all individuals respond equally to sodium restriction. **Salt sensitivity** — defined as a ≥10 mmHg systolic BP change in response to a high-vs.-low sodium diet challenge — affects approximately 25–50% of hypertensives and 10–15% of normotensives. Relevant subgroups:

- **African-American / Black individuals:** Kong 2025 found systolic BP reduction of **−7.83 mmHg** in Black hypertensive individuals versus −2.11 mmHg in White normotensives [^kong2025] — a 3-fold difference likely reflecting higher prevalence of low-renin salt-sensitive hypertension and reduced aldosterone responsiveness to sodium challenges.
- **Age:** Salt sensitivity increases with age as glomerular filtration rate declines and renal sodium-handling efficiency falls; the elderly typically show stronger BP responses to sodium restriction.
- **Genetic factors (Dahl model):** Dahl salt-sensitive (SS) rats develop severe hypertension on high-sodium diets via a combination of impaired renal natriuresis, exaggerated tubuloglomerular feedback, and RAAS dysregulation — demonstrating that genetic predisposition can dramatically amplify sodium's pressor effects. The human genetic landscape is polygenic and less cleanly characterized, but GWAS loci including variants in SLC12A3 (encoding NCC, the thiazide-sensitive NaCl cotransporter) and ACE influence salt sensitivity phenotypes. #gap/needs-human-replication — the specific genetic loci predicting individual salt sensitivity in humans remain incompletely mapped.
- **Regional/dietary context:** Populations with very high baseline sodium intake (East Asia — Japan, China, South Korea average 4–6 g sodium/day vs. Western ~3.5 g/day) and with predominant sources in soy sauce, miso, and pickled foods show stronger cardiovascular risk from high sodium, likely due to higher absolute intake and lower potassium counter-intake from traditional preserved-vegetable diets.

## Practical implementation

### Where sodium comes from

**The saltshaker is not the problem.** In Western diets, approximately 70–80% of dietary sodium comes from processed and packaged foods: bread and cereal products, canned soups, processed meats, cured meats, cheeses, sauces, and condiments. Only ~10–15% is added at the table or in home cooking, and ~10–15% is intrinsic to whole foods. The single most effective sodium reduction strategy is therefore shifting toward whole, minimally processed foods rather than eliminating added salt.

### Practical strategies in decreasing cost order

| Strategy | Estimated sodium reduction | Notes |
|---|---|---|
| Minimise processed/packaged food | 1,000–2,000 mg/day | The primary lever; no cost |
| Salt substitute (KCl partial replacement) | 300–600 mg/day sodium + potassium increase | ~$5–10 for 3-month supply; see hyperkalemia caveat |
| Home cooking vs. restaurant | 500–1,500 mg/day | US restaurant meals average ~2,000 mg/meal |
| Potassium-rich whole foods (legumes, bananas, avocado, greens) | Indirect (K displaces Na pressor effect) | Also provides Mg (leafy greens, legumes, nuts) |
| Read labels; target <600 mg/serving per item | Variable | Particularly for bread, canned goods, sauces |

### Salt substitute caveat — hyperkalemia risk

The ~30% KCl component in SSaSS-type substitutes significantly increases potassium intake. In **healthy individuals with normal renal function**, this is safe and beneficial. However, in individuals with:
- **CKD stage 3b+ (eGFR <45 mL/min/1.73 m²)** — impaired renal K⁺ excretion; hyperkalemia risk is substantial and can be life-threatening
- **Renin-angiotensin-aldosterone system inhibitors** (ACE inhibitors, ARBs, aldosterone antagonists) — these drugs reduce K⁺ excretion; combining with KCl supplement raises hyperkalemia risk
- **Potassium-sparing diuretics** (spironolactone, amiloride, triamterene) — same risk

SSaSS excluded CKD patients and found no significant difference in hyperkalemia events in the overall trial — but this population was rural Chinese without CKD. Clinical translation to CKD populations requires physician oversight. **In CKD, traditional dietary sodium restriction without KCl substitution remains appropriate.**

## Comparison to pharmacological antihypertensives

Dietary sodium restriction achieves ~3–5 mmHg systolic reduction at typical intervention targets (−1 g sodium/day), comparable to a half-dose thiazide diuretic. The DASH dietary pattern with full sodium restriction achieves 7–12 mmHg, comparable to a single antihypertensive drug. This is clinically meaningful: for a patient at 145/90 mmHg, a −5 mmHg reduction moves them to 140/90 (guideline threshold); a −10 mmHg reduction achieves genuine BP normalization. The advantages of dietary sodium restriction over pharmacotherapy are: no medication cost, no side effects (at moderate restriction), synergistic with other dietary components (DASH), and targeting the root cause rather than downstream signaling.

## Aging hallmarks targeted

| Hallmark | Mechanism | Evidence tier |
|---|---|---|
| [[chronic-inflammation]] | High sodium activates NF-κB, TH17, and vascular oxidative stress; restriction reverses these | RCT biomarker data; mechanistic |
| [[altered-intercellular-communication]] | Sustained hypertension degrades endothelial paracrine signaling and VSMC-endothelial cross-talk; BP reduction partially restores | Indirect; no direct hallmark RCT |

**Downstream phenotypes targeted (not hallmarks per se):**
- [[arterial-stiffening]] — BP reduction slows the progressive PWV increase
- [[atherosclerosis]] — BP is a causal risk factor for plaque progression; intervention studies confirm reduced MACE at sustained lower BP
- [[cardiovascular-aging]] — LVH, HFpEF, and diastolic dysfunction are all partially pressure-driven and reversible with sustained BP normalization

## R25 recency search summary (mandatory for dietary intervention)

Search window: 2021–2026-06-09. Sources: PubMed eutils + Crossref. Queries: "sodium restriction cardiovascular mortality meta-analysis" and "potassium blood pressure meta-analysis" and "magnesium supplementation blood pressure meta-analysis."

**High-priority hits integrated:**

- **Kong et al. 2025** — umbrella review, 21 meta-analyses/91 outcomes. Integrated throughout as the primary synthesis anchor. Directly refutes PURE J-curve for mortality. [^kong2025]
- **Granal et al. 2025** — dose-response meta-analysis, 10 RCTs, potassium and BP. New result; integrated into potassium section. [^granal2025]
- **Argeros et al. 2025** (*Hypertension*, n=2,709) — largest recent Mg-BP meta-analysis with subgroup data. Integrated into magnesium section. [^argeros2025]
- **Yang et al. 2025** (*Critical Reviews in Food Science*) — independent umbrella review, 56 systematic reviews; largely consistent with Kong 2025 (Na reduction −2.00 to −8.69 mmHg systolic, salt substitutes → modest mortality benefit). Consistent finding, not contradicting. Not separately cited but confirms Kong directionality.
- **Greenwood et al. 2024** (*Annals of Internal Medicine*) — meta-analysis of salt substitutes, including SSaSS; found RR 0.88 for all-cause mortality. Consistent with Neal 2021 and Kong 2025. [^greenwood2024]

**Contradictions vs. training-era knowledge:** Kong 2025 directly contradicts the PURE J-curve (O'Donnell/Mente 2014) for mortality. This page presents both positions explicitly in the J-curve controversy section, framing Kong 2025 as the current best synthesis while preserving the PURE J-curve as a documented contested position. The resolution per Kong is: the J-curve likely reflects measurement bias (spot urine in low-intake populations), sick-quitter confounding, and population heterogeneity rather than a true U-shaped biological optimum.

**Source NOT resolvable:** The Kempner/Duke rice diet historical paper (cited in reference video) could not be located via PubMed search with available search terms; Kempner's original 1940s papers are pre-MEDLINE. Excluded from citation; historical context is noted only in prose without specific claim citation.

## Limitations and gaps

- `#gap/dose-response-unclear` — The optimal sodium target remains debated. WHO recommends <2 g sodium/day (<5 g salt), AHA recommends <1.5 g/day for hypertensives (general <2.3 g). Most RCTs tested reductions from ~3.5 g to ~1.5 g/day; effects below 1.5 g/day in healthy populations are less well characterized and the PURE data suggests possible increased RAAS activation at very low intakes.
- `#gap/long-term-unknown` — Most RCTs are ≤1 year; SSaSS is 5 years. Very-long-term (decades) effects on epigenetic aging clocks, telomere length, or systemic biological age have not been measured as primary endpoints.
- `#gap/contradictory-evidence` — The PURE J-curve for mortality (O'Donnell/Mente 2014) has not been replicated in prospective RCTs with hard endpoints, but the observational association exists and has been cited by some clinical guidelines. Kong 2025 provides the best current synthesis refuting it.
- `#gap/no-mechanism` — The independent BP-lowering contribution of magnesium in normomagnesemic, well-nourished adults is unclear; Argeros 2025 shows strong effects in hypomagnesemia/medicated-hypertension but not in normotensives.
- `#gap/needs-human-replication` — Regional heterogeneity in sodium's pressor effect (Americas non-significant in Kong 2025) suggests the benefit may be population-specific; direct replication of SSaSS-type pragmatic RCTs in European or North American populations is lacking.
- The SSaSS result applies to a high-risk Chinese rural population (72.6% prior stroke, 88.4% hypertension). Generalizability to lower-risk or primary-prevention populations requires care.

## Cross-references

- [[arterial-stiffening]] — primary downstream aging phenotype driven by hypertension
- [[atherosclerosis]] — BP is a major causal driver; sodium restriction's clinical endpoint
- [[cardiovascular-aging]] — umbrella phenotype framing the cardiovascular-aging relevance
- [[heart-failure]] — HFpEF is partly pressure-driven; sodium restriction is standard of care in HF
- [[chronic-inflammation]] — sodium activates NF-κB and TH17; restriction is anti-inflammatory
- [[nf-kb]] — the primary signaling pathway linking high sodium to vascular inflammation
- [[mediterranean-diet]] — Mediterranean pattern delivers low-sodium if prepared traditionally; overlaps via K+Mg co-delivery; note the sodium caveat in Mediterranean cuisine (anchovies, olives, capers)
- [[dash-diet]] — the DASH pattern formalizes the combined Na-restriction + K+Mg-repletion strategy; no dedicated page yet
- [[phosphate-additive-reduction]] — complementary dietary-electrolyte intervention targeting the FGF23/Klotho/vascular-calcification axis; processed foods are the common source of both excess sodium and inorganic phosphate additives
- [[hyperphosphatemia]] — processed-food sodium and phosphate additive co-exposure make these interventions structurally linked
- [[clonal-hematopoiesis]] — hypertension is a CHIP risk factor; BP control may partially intersect with CH progression

## Footnotes

[^kong2025]: [[studies/kong-2025-sodium-umbrella-review]] · doi:10.1080/07853890.2025.2582065 · PMID 41243115 · Kong F et al. · *Annals of Medicine* 2025;57(1) · umbrella review · 21 meta-analyses / 91 outcomes (RCT + observational) · All-cause mortality: low sodium RR 0.88 (−12%); CV mortality RR 0.83 (−17%); stroke mortality RR 0.74 (−26%); systolic BP −3.39 mmHg, diastolic −1.54 mmHg. High sodium: CVD RR 1.13, hypertension OR 1.33, stroke mortality OR 1.40, ischemic stroke OR 1.60. Per +1 g/day Na: +6% stroke, +~4% CVD, +0.60 mmHg systolic. RAAS at low sodium: aldosterone +73.20 pmol/L, PRA +2.09 ng/mL/h, no change in catecholamines. No J-curve. Regional heterogeneity: Americas BP reduction non-significant (−2.80 mmHg). Black hypertensive −7.83 mmHg vs White normotensive −2.11 mmHg. model: human (meta-analysis of meta-analyses) · OA status unconfirmed

[^sacks2001]: [[studies/sacks-2001-dash-sodium]] · doi:10.1056/NEJM200101043440101 · PMID 11136953 · Sacks FM et al. · *NEJM* 2001;344(1):3–10 · rct · n=412 (factorial: 2 diets × 3 Na levels) · 30-day controlled-feeding; crossover design · DASH + low Na vs control + high Na: systolic −11.5 mmHg hypertensive, −7.1 mmHg normotensive. Control diet: high→low Na alone: −5.0 to −6.7 mmHg systolic · model: human (RCT)

[^neal2021]: [[studies/neal-2021-ssass-salt-substitute]] · doi:10.1056/NEJMoa2105675 · PMID 34459569 · Neal B et al. · *NEJM* 2021;385(12):1067–1077 · rct · n=20,995 (600 rural Chinese villages) · mean 4.74-year follow-up · ~70% NaCl / ~30% KCl salt substitute (per GB 2019-2005) vs 100% NaCl · systolic BP −3.34 mmHg (95% CI −4.51 to −2.18) · stroke RR 0.86 (95% CI 0.77–0.96; p=0.006); major CVE RR 0.87 (0.80–0.94; p<0.001); all-cause mortality RR 0.88 (0.82–0.95; p<0.001); hyperkalemia rate ratio 1.04 (0.80–1.37; p=0.76, NS) · 72.6% prior stroke, 88.4% hypertensive · CKD excluded by self-report ("known serious kidney disease") · model: high-risk Chinese adults

[^cook2009]: [[studies/cook-2009-tohp-sodium-potassium]] · doi:10.1001/archinternmed.2008.523 · Cook NR et al. · *Archives of Internal Medicine* 2009;169(1):32–40 · observational (prospective follow-up of TOHP RCT participants) · n=2,275 · 10–15-year follow-up · 193 cardiovascular events · Na/K ratio (highest vs lowest quartile) associated with significantly elevated CVD risk (p=0.01); Na alone p=0.38 (NS); K alone p=0.08 (NS) · Na/K ratio is stronger CVD predictor than either cation alone · model: human (long-term follow-up)

[^granal2025]: [[studies/granal-2025-potassium-bp-meta]] · doi:10.1093/ckj/sfaf173 · Granal M et al. · *Clinical Kidney Journal* 2025;18(7):sfaf173 · meta-analysis · 10 RCTs (2000–2024; 4 non-hypertensive, 6 hypertensive) · 24-hr urinary K excretion as intake metric · per +50 mmol/day K: non-hypertensive systolic −0.5, diastolic −0.12 mmHg; hypertensive systolic −5.3, diastolic −3.62 mmHg. Linear best fit. Supports >3.5 g/day (>90 mmol/day) K guideline · model: human (meta-analysis of RCTs)

[^aburto2013]: doi:10.1136/bmj.f1378 · Aburto NJ, Hanson S, Gutierrez H, Hooper L, Elliott P, Cappuccio FP · *BMJ* 2013;346:f1378 · systematic review + meta-analysis · increased K intake associated with 24% reduced stroke risk (RR 0.76, 95% CI 0.66–0.89); non-significant trends for CAD and total CVD; modest BP reductions consistent with Granal 2025 · model: human (meta-analysis)

[^intersalt1988]: doi:10.1136/bmj.297.6644.319 · Intersalt Cooperative Research Group · *BMJ* 1988;297(6644):319–328 · observational (cross-sectional; 52 centres, 32 countries) · n=10,079 · 24-hr urine Na excretion correlated with systolic BP and age-related BP rise; within-centre slope ~+3 to +6 mmHg systolic per 100 mmol/day Na; Yanomamo (0.2 mmol/day Na) show near-zero BP-age slope; N. China (242 mmol/day) show steep rise · model: human (multi-country ecological)

[^pure2014]: [[studies/odonnell-2014-pure-sodium]] · doi:10.1056/NEJMoa1311889 · PMID 25119607 · O'Donnell M, Mente A et al. (PURE Investigators) · *NEJM* 2014;371(7):612–623 · observational (prospective, cross-sectional within PURE) · n=101,945 (17 countries) · J-shaped association: Na <3 g/day → OR 1.27 (95% CI 1.12–1.44; increased risk); Na ≥7 g/day → OR 1.15 (95% CI 1.02–1.30); optimal range 3–6 g/day. Potassium inversely associated with outcomes. Criticized for spot-urine bias and sick-quitter confounding · model: human (observational; contested methodology)

[^argeros2025]: doi:10.1161/HYPERTENSIONAHA.125.25129 · Argeros Z et al. · *Hypertension* 2025;82:1844–1856 · PMID 41000008 · meta-analysis · 38 RCTs, n=2,709 · elemental Mg 82.3–637 mg (median 365 mg), median 12 weeks · overall: systolic −2.81 mmHg (95% CI −4.32 to −1.29), diastolic −2.05 mmHg (−3.23 to −0.88). All hypertensive (N=17 trials): systolic −2.96 mmHg (95% CI −5.53 to −0.38). Hypertensive on BP-lowering medication (N=6): systolic −7.68 mmHg (95% CI −12.67 to −2.69). Hypomagnesemia baseline (N=8): systolic −5.97 mmHg (95% CI −8.52 to −3.41), diastolic −4.75 mmHg (−6.59 to −2.92). Normotensive: NS. No dose-response within study range. High heterogeneity (I²=78% SBP, 88% DBP) · model: human (meta-analysis of RCTs)

[^greenwood2024]: doi:10.7326/M23-2626 · Greenwood H et al. · *Annals of Internal Medicine* 2024;177(3) · PMID 38588546 · systematic review + meta-analysis · salt substitutes → all-cause mortality rate ratio 0.88 (low-certainty evidence); CV mortality rate ratio 0.83; primarily driven by SSaSS and Chinese/Taiwanese studies; generalizability limited · model: human (meta-analysis)

[^wilck2017]: doi:10.1038/nature24628 · Wilck N et al. · *Nature* 2017;551(7682):585–589 · in-vivo + human observational · high-salt diet activates TH17 cells and depletes Lactobacillus in gut microbiome; raises BP via TH17 inflammatory pathway; antibiotics or Lactobacillus gavage reverses the BP effect in mice; human participants on 6 g NaCl/day supplement showed correlated TH17 increase · model: mouse + human (early mechanistic)
