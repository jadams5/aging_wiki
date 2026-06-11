---
type: phenotype
aliases: [CKD, chronic kidney disease, chronic renal failure, chronic renal insufficiency]
icd-10: N18
icd-11: GB61
affected-tissues: ["[[kidney]]"]
underlying-hallmarks: ["[[cellular-senescence]]", "[[chronic-inflammation]]", "[[mitochondrial-dysfunction]]", "[[altered-intercellular-communication]]", "[[epigenetic-alterations]]", "[[disabled-macroautophagy]]"]
typical-onset: "Biological kidney function decline begins ~30–40 (eGFR ~1 mL/min/1.73 m²/yr loss in healthy adults); clinically apparent CKD most common 60+"
prevalence-65plus: "~38–47% any CKD (stages 1–5) in adults ≥65; ~25–33% stage 3+ (eGFR <60)"
literature-checked-through: 2026-06-11
verified: true
verified-date: 2026-06-11
verified-by: claude
verified-scope: "GBD 2023 Lancet, Grams 2023 JAMA, Wheeler 2021 LDE, Neuen 2026 JAMA, and Heerspink 2020 NEJM verified against PubMed abstracts and PMC full text; Romagnani 2025, Yamamoto 2024, Rex 2023, Zhang 2024, Furman 2019, Tang 2020, Sarnak 2019 are closed-access reviews not re-read (claims are mechanistic/review-level and corroborated by cross-source consistency); KDIGO 2024 staging table verified against published KDIGO guidelines structure; ICD-10 N18 confirmed; ICD-11 GB61 not independently re-verified against WHO browser"
---

# Chronic Kidney Disease (CKD)

A syndrome of **progressive, irreversible loss of kidney function** defined by a glomerular filtration rate (GFR) below 60 mL/min/1.73 m² and/or markers of kidney damage (albuminuria ≥30 mg/g, abnormal urinalysis, histological damage) persisting for ≥3 months [^kdigo2024]. CKD is both a consequence of the aging kidney and a driver of accelerated systemic aging — it amplifies cardiovascular risk, induces multi-organ inflammatory burden, and is a leading competing cause of death in older adults. In 2023 an estimated **788 million** adults globally had CKD, ranking it the ninth cause of death worldwide [^gbd2023].

## Definition and staging (KDIGO 2024)

CKD is staged by two axes in combination: GFR category (G1–G5) and albuminuria category (A1–A3) [^kdigo2024]:

| GFR Stage | eGFR (mL/min/1.73 m²) | Descriptor |
|---|---|---|
| G1 | ≥90 | Normal or high (with kidney damage marker) |
| G2 | 60–89 | Mildly decreased |
| G3a | 45–59 | Mildly to moderately decreased |
| G3b | 30–44 | Moderately to severely decreased |
| G4 | 15–29 | Severely decreased |
| G5 | <15 | Kidney failure |

| Albuminuria Stage | UACR (mg/g) | UPCR (mg/g) |
|---|---|---|
| A1 | <30 | <150 |
| A2 | 30–300 | 150–500 |
| A3 | >300 | >500 |

Risk is expressed as the CGA (Cause–GFR–Albuminuria) combination. Stage G3b–G5 or A3 albuminuria with any GFR indicates high-to-very-high risk of kidney failure, cardiovascular events, and mortality.

**Aging-relevant note:** Normal biological aging causes eGFR to decline at ~0.75–1 mL/min/1.73 m²/year from age ~40 onward in the absence of disease, so many older adults reach stage G3a by their 70s without a discrete renal insult. This physiological decline overlaps with but is distinct from CKD; some guidelines advise caution about diagnosing CKD on eGFR alone in adults >65 without albuminuria [^kdigo2024] [^romagnani2025]. #gap/contradictory-evidence — optimal staging for oldest-old remains debated.

## Epidemiology and aging context

- **Global prevalence (2023):** 788 million (95% UI 743–843 million) adults ≥20 had CKD; age-standardized prevalence 14.2% (13.4–15.2%) [^gbd2023].
- **US adults:** CKD affects ~14% of all US adults; prevalence rises steeply with age [^grams2023].
- **Adults ≥65:** Community cohort estimates consistently show CKD stages 1–5 in ~38–47% of this age group; stages 3–5 in ~25–33%, though estimates vary with the eGFR equation used (CKD-EPI creatinine vs cystatin C) [^romagnani2025].
- **Mortality burden:** CKD caused ~1.48 million deaths in 2023 (rank #9 globally); ~11.5% of cardiovascular deaths globally are attributable to impaired kidney function [^gbd2023].
- **Cardiovascular amplification:** CKD is an independent cardiovascular risk factor beyond traditional risk factors. In the CKD Prognosis Consortium individual-participant meta-analysis (27.5 million people across 114 cohorts), eGFR 45–59 vs 90–104 mL/min/1.73 m² was significantly associated with all 10 adverse outcomes examined — including all-cause mortality, kidney failure, coronary heart disease, stroke, heart failure, and atrial fibrillation; the paper's illustrative example is hospitalization HR 1.3 (95% CI 1.2–1.3) [^grams2023].
- **End-stage kidney disease (ESKD):** ~3.9 million people globally receive kidney replacement therapy (dialysis or transplant); incidence is rising in part due to aging populations [^romagnani2025].

## Pathophysiology: mechanisms linking aging to CKD

CKD and kidney aging share overlapping mechanisms — each accelerates the other in a self-reinforcing cycle. The kidney is particularly vulnerable to aging because its high metabolic rate and limited regenerative capacity concentrate age-associated damage [^yamamoto2024].

### Cellular senescence

Senescent tubular epithelial cells, podocytes, and interstitial cells accumulate in aging kidneys and in CKD biopsies. These cells express p16INK4a (CDKN2A), p21, and secrete the senescence-associated secretory phenotype (SASP) — a mixture of IL-6, IL-1β, TGF-β, MCP-1, and matrix metalloproteinases — that drives inflammation, fibroblast activation, and further injury in neighboring cells [^rex2023]. SASP-derived TGF-β is a primary driver of renal interstitial fibrosis, the histological hallmark of progressive CKD. See [[cellular-senescence]].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes — p16+/p21+ senescent cells accumulate in human CKD biopsies |
| Replicated in humans? | yes (biopsy-level; causality not yet established by MR) |

### Chronic inflammation (inflammaging)

CKD creates a state of persistent, low-grade sterile inflammation that is both cause and consequence of impaired kidney function [^furman2019]. Uremic toxins — including indoxyl sulfate, p-cresyl sulfate, and TMAO — accumulate as GFR declines and directly activate NF-κB and NLRP3 inflammasome signaling in tubular and immune cells. The result is elevated CRP, IL-6, and TNF-α that in turn accelerate atherosclerosis, sarcopenia, and immune senescence. See [[chronic-inflammation]].

### Mitochondrial dysfunction

Proximal tubular cells have the highest mitochondrial density of any body cell (obligate oxidative phosphorylation; minimal glycolytic reserve). With aging and CKD progression, mitochondrial biogenesis declines (PGC-1α downregulation), mtDNA damage accumulates, and ATP production falls — compromising the energy-intensive tubular reabsorption machinery and worsening tubular injury [^zhang2024] [^yamamoto2024]. ROS from dysfunctional mitochondria additionally drive lipid peroxidation, DNA damage, and apoptosis in nephrons. See [[mitochondrial-dysfunction]].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes — PGC-1α loss and mtDNA damage documented in human CKD biopsies |
| Replicated in humans? | yes (observational; causal intervention studies limited) |

### Altered intercellular communication

Klotho, a kidney-derived aging-suppressor hormone, falls sharply with CKD progression; Klotho deficiency amplifies FGF23 signaling, causing hyperphosphatemia, vascular calcification, and left ventricular hypertrophy [^yamamoto2024]. FGF23 itself rises early in CKD (stage G2–3) as a compensatory phosphaturic response but becomes pathological at very high levels, directly suppressing erythropoietin, increasing cardiac fibrosis risk, and impairing immune cell function. This Klotho–FGF23 axis exemplifies altered endocrine intercellular communication as a CKD–aging interface. See [[altered-intercellular-communication]] and [[phenotypes/hyperphosphatemia]].

### Autophagy impairment

Autophagy is constitutively active in healthy tubular cells, clearing damaged organelles and misfolded proteins. In CKD and aged kidneys, mTORC1 hyperactivation and Beclin-1 downregulation suppress autophagy, allowing lysfunctional mitochondria and protein aggregates to accumulate [^tang2020]. Proximal tubule-specific Atg5/Atg7 knockout in mice produces a spontaneous CKD-like phenotype with tubular degeneration — highlighting that autophagy is not merely a parallel response but a causal protective mechanism. See [[disabled-macroautophagy]].

### Epigenetic alterations

DNA methylation clocks advance faster in CKD patients than age-matched controls; biological age acceleration correlates with CKD stage [^yamamoto2024]. Histone modifications (H3K27me3, H3K4me3) at inflammatory and fibrotic gene loci shift with both aging and CKD progression, in part via uremic metabolites acting as epigenetic modifiers. See [[epigenetic-alterations]].

## Upstream drivers

### Hypertension

The leading modifiable cause of CKD globally. Sustained hypertension causes glomerular hypertension, afferent arteriole hyalinosis, and ischemic nephropathy. CKD in turn worsens hypertension via fluid retention and RAAS activation — a bidirectional accelerating loop. See [[phenotypes/hypertension]] (implicit stub — being seeded in same batch). #gap/stub

### Type 2 diabetes

The leading single cause of ESKD in high-income countries (~44% of new ESKD in US attributable to diabetic kidney disease). Hyperglycemia drives glomerular basement membrane thickening, mesangial expansion, podocyte loss, and TGF-β–mediated fibrosis (diabetic nephropathy). The intersection of insulin resistance, inflammation, and advanced glycation end-products (AGEs) creates an amplifying loop with the aging mechanisms above. See [[phenotypes/type-2-diabetes]].

### Acute kidney injury (AKI)

Repeated or severe AKI promotes fibrosis and permanent nephron loss, converting episodic insults into chronic structural damage. AKI-to-CKD transition is increasingly recognized as a major progression mechanism in older adults with impaired regenerative reserve [^romagnani2025].

## Nephron loss and renal fibrosis

CKD progression converges on a final common pathology: **nephron loss → compensatory hyperfiltration in remaining nephrons → glomerular hypertension → further nephron loss**. This loss is irreversible because adult kidneys have negligible nephron regeneration capacity (~800k–1.2M nephrons at birth; none replenished thereafter). Renal interstitial fibrosis, driven by TGF-β1 and activated myofibroblasts (partly from pericyte-to-myofibroblast transition), is the principal histological determinant of progression rate and GFR trajectory [^romagnani2025].

## Cardiovascular risk and systemic consequences

CKD is a Framingham-equivalent cardiovascular risk state [^sarnak2019]. Key mechanisms include:

- **Non-traditional risk factors:** uremic toxins, hyperphosphatemia, FGF23 excess, volume overload, RAAS activation, oxidative stress, accelerated endothelial senescence
- **Anemia:** reduced erythropoietin → anemia of CKD → increased cardiac output, left ventricular hypertrophy. See [[phenotypes/anemia-of-aging]]
- **Mineral-bone disorder (CKD-MBD):** secondary hyperparathyroidism, vascular calcification, pathological fractures. See [[phenotypes/hyperphosphatemia]]
- **Sarcopenia:** uremic milieu (myostatin upregulation, SASP, metabolic acidosis) accelerates muscle wasting. See [[phenotypes/sarcopenia]]
- **Cognitive decline:** accumulating evidence links eGFR decline to dementia incidence via vascular and inflammatory pathways [^gbd2023]

## Interventions

### Established disease-modifying treatments

**SGLT2 inhibitors** (dapagliflozin, empagliflozin, canagliflozin) are the paradigm-shifting class: the DAPA-CKD trial demonstrated dapagliflozin reduced the composite of sustained ≥50% eGFR decline, ESKD, or renal/CV death by 39% (HR 0.61; 95% CI 0.51–0.72) in n=4304 CKD patients [^heerspink2020]. The treatment effect was consistent whether or not participants had type 2 diabetes (HR 0.64 in T2D vs 0.50 in non-DM; p-interaction 0.24) [^wheeler2021]. A 2026 JAMA meta-analysis of SGLT2i trials (n=70,361 across 10 trials; overall CKD progression HR 0.62, 95% CI 0.57–0.68) confirmed kidney-protective effects across GFR and albuminuria strata [^neuen2026].

**RAAS blockade** (ACE inhibitors/ARBs) reduce intraglomerular pressure, attenuate proteinuria, and slow progression — first-line in CKD with albuminuria.

**Finerenone** (non-steroidal mineralocorticoid receptor antagonist) reduces kidney failure and cardiovascular events in diabetic CKD.

**Blood pressure control** — target <130/80 mmHg in most CKD patients (KDIGO 2024).

**Dietary protein restriction** (~0.6–0.8 g/kg/day; very low-protein diet 0.3–0.4 g/kg/day with ketoanalogues) slows progression but requires careful monitoring of nutritional status. #gap/dose-response-unclear

### Investigational aging-targeted approaches

| Approach | Rationale | Status |
|---|---|---|
| Senolytics (dasatinib + quercetin) | Clear SASP-driven fibrosis and inflammation | Early phase trials; preclinical kidney data promising [^rex2023] |
| GLP-1 receptor agonists (semaglutide) | Reduce glomerular hypertension, inflammation, and metabolic injury | FLOW trial (n=3,533 T2D+CKD): semaglutide reduced major kidney disease events by 24% vs placebo; approved for CKD indication [^perkovic2024] |
| Klotho supplementation / gene therapy | Restore endocrine signaling; attenuate FGF23 effects | Preclinical; no human trials yet #gap/needs-human-replication |
| mTOR inhibition (rapalogs) | Restore autophagy; reduce senescence | Transplant-relevant data; aging-context CKD trials lacking |
| Mitochondria-targeted antioxidants | Counter ROS from dysfunctional mitochondria | Preclinical-only #gap/needs-human-replication |

## Hallmark mapping

CKD is a convergent phenotype that both results from and amplifies multiple [[hallmarks-of-aging]]:

- [[cellular-senescence]] — tubular and glomerular senescence drives SASP-mediated fibrosis
- [[chronic-inflammation]] — uremic toxins fuel persistent sterile inflammation
- [[mitochondrial-dysfunction]] — energy failure in metabolically demanding tubular cells
- [[altered-intercellular-communication]] — Klotho/FGF23 axis dysregulation; uremic endocrine disruption
- [[epigenetic-alterations]] — accelerated epigenetic aging correlated with GFR stage
- [[disabled-macroautophagy]] — reduced tubular autophagy permits organelle/protein accumulation

CKD also causes downstream phenotypes: [[phenotypes/anemia-of-aging]], [[phenotypes/hyperphosphatemia]], [[phenotypes/sarcopenia]], [[cardiovascular-aging]].

## Limitations and gaps

- **eGFR cutoffs in oldest-old:** The meaning of eGFR 45–60 in an 80-year-old without albuminuria or other kidney damage markers is contested — many may reflect normal aging rather than disease. #gap/contradictory-evidence
- **CKD-MBD mechanistic complexity:** The FGF23–Klotho–PTH cascade has multi-organ effects that are not yet fully incorporated into intervention trials. #gap/no-mechanism (for some downstream targets)
- **Senolytic trials in CKD:** Preclinical data is promising but no adequately powered human RCT of senolytics specifically for CKD progression has completed. #gap/needs-human-replication
- **Klotho as therapeutic target:** The causal direction of Klotho decline (driver vs consequence of nephron loss) is not fully established in humans. #gap/no-mechanism
- **Ageing vs CKD disambiguation:** No biomarker cleanly separates normal aging-related eGFR decline from early CKD, limiting screening specificity in older adults. #gap/needs-replication

## See also

- [[kidney]] (tissue page)
- [[phenotypes/hypertension]] (stub — leading upstream cause)
- [[phenotypes/type-2-diabetes]] (leading upstream cause)
- [[phenotypes/anemia-of-aging]] (downstream complication)
- [[phenotypes/hyperphosphatemia]] (downstream CKD-MBD complication)
- [[phenotypes/sarcopenia]] (bidirectional comorbidity)
- [[cellular-senescence]], [[chronic-inflammation]], [[mitochondrial-dysfunction]]
- [[altered-intercellular-communication]], [[disabled-macroautophagy]], [[epigenetic-alterations]]

## Footnotes

[^kdigo2024]: doi:10.1016/j.kint.2023.10.016 · Levin A et al. · Kidney Int 2024 · PMID 38519239 · executive summary, KDIGO 2024 Clinical Practice Guideline for evaluation and management of chronic kidney disease · systematic review + expert consensus · updates KDIGO 2012 · staging criteria, management algorithms

[^gbd2023]: doi:10.1016/S0140-6736(25)01853-7 · GBD 2023 Chronic Kidney Disease Collaborators · Lancet 2025 · PMID 41213283 · systematic analysis · n=204 countries/territories, 1990–2023 · 788 million (95% UI 743–843M) adults with CKD globally in 2023; 1.48M deaths; 11.5% of cardiovascular deaths attributable to impaired kidney function; age-standardized prevalence 14.2%

[^romagnani2025]: doi:10.1038/s41572-024-00589-9 · Romagnani P et al. · Nat Rev Dis Primers 2025 · PMID 39885176 · review · comprehensive primer covering epidemiology, pathophysiology, staging, diagnosis, management; includes aging-specific discussion; Nature Reviews Disease Primers

[^yamamoto2024]: doi:10.1038/s41581-024-00868-4 · Yamamoto T, Isaka Y · Nat Rev Nephrol 2024;20(9):603-615 · PMID 39025993 · review · covers genomic instability, telomere attrition, inflammation, autophagy, mitochondrial function, sirtuin and Klotho signalling as regulators of kidney aging and CKD

[^grams2023]: doi:10.1001/jama.2023.17002 · Grams ME et al. (CKD Prognosis Consortium) · JAMA 2023 · PMID 37787795 · individual-participant meta-analysis · n=27,503,140 across 114 global cohorts · lower eGFR and higher UACR each significantly associated with all 10 adverse outcomes; illustrative exemplar from abstract: eGFR 45–59 vs 90–104 mL/min/1.73 m² associated with hospitalization HR 1.3 (95% CI 1.2–1.3); similarly elevated risk shown for all-cause mortality, CV mortality, kidney failure, AKI, CHD, stroke, heart failure, AF, PAD · findings independent of albuminuria category

[^rex2023]: doi:10.1042/CS20230140 · Rex N, Melk A, Schmitt R · Clin Sci (Lond) 2023 · PMID 38126209 · review · cellular senescence and kidney aging; SASP-driven fibrosis, senolytic strategies; comprehensive mechanistic review

[^zhang2024]: doi:10.3390/ijms25126585 · Zhang Y, Yu C, Li X · Int J Mol Sci 2024 · PMID 38928291 · review · kidney aging and CKD: shared mechanisms including cellular senescence, autophagy decline, mitochondrial dysfunction, epigenetic alterations; CKD as accelerated aging state

[^furman2019]: doi:10.1038/s41591-019-0675-0 · Furman D et al. · Nat Med 2019 · PMID 31806905 · review · chronic inflammation as driver across life-span diseases; uremic inflammaging context; n/a (review); model: human

[^tang2020]: doi:10.1038/s41581-020-0309-2 · Tang C et al. · Nat Rev Nephrol 2020 · PMID 32704047 · review · autophagy in kidney homeostasis and disease; mTOR, AMPK, sirtuin regulation; proximal tubule Atg5/7 KO phenotype; protective role in CKD; cell-type-specific considerations

[^sarnak2019]: doi:10.1016/j.jacc.2019.08.1017 · Sarnak MJ et al. · JACC 2019 · PMID 31582143 · review · CKD as Framingham-equivalent cardiovascular risk; uremia-related risk factors (inflammation, oxidative stress, calcium-phosphorus dysregulation); management considerations

[^heerspink2020]: doi:10.1056/NEJMoa2024816 · Heerspink HJL et al. (DAPA-CKD Trial) · N Engl J Med 2020 · PMID 32970396 · rct · n=4304 (CKD stages 2–4; eGFR 25–75 mL/min/1.73 m²; UACR 200–5000 mg/g) · dapagliflozin 10 mg/day vs placebo · primary composite (sustained ≥50% eGFR decline, ESKD, or renal/CV death) HR 0.61 (95% CI 0.51–0.72; P<0.001) · median follow-up 2.4 years · model: human CKD with or without T2D

[^wheeler2021]: doi:10.1016/S2213-8587(20)30369-7 · Wheeler DC et al. · Lancet Diabetes Endocrinol 2021 · PMID 33338413 · prespecified subgroup analysis of DAPA-CKD · n=4304 (same trial population) · primary composite HR 0.64 (95% CI 0.52–0.79) in T2D; HR 0.50 (95% CI 0.35–0.72) in non-DM; p-interaction=0.24 · consistent effects across diabetic nephropathy, glomerulonephritis, ischaemic/hypertensive CKD aetiologies

[^neuen2026]: doi:10.1001/jama.2025.20834 · Neuen BL et al. · JAMA 2026 · PMID 41203232 · meta-analysis · n=70,361 across 10 randomized trials (SMART-C consortium) · SGLT2i reduced CKD progression (HR 0.62, 95% CI 0.57–0.68) irrespective of baseline eGFR (including stage 4) and albuminuria; kidney failure HR 0.66 (95% CI 0.58–0.75)

[^perkovic2024]: doi:10.1056/NEJMoa2403347 · Perkovic V et al. (FLOW Trial) · N Engl J Med 2024 · PMID 38785209 · rct · n=3533 (T2D + CKD; eGFR 50–75 mL/min/1.73 m²) · semaglutide 1.0 mg/week vs placebo · primary composite (onset of kidney failure, ≥50% sustained eGFR decline, kidney-related or CV death) risk 24% lower in semaglutide group · median follow-up 3.4 years · trial stopped early at interim analysis · model: human T2D + CKD
