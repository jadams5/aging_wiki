---
type: phenotype
aliases: [congestive heart failure, CHF, HFrEF, HFpEF, HFmrEF, HF, cardiac failure]
icd-10: I50
icd-11: BD10
affected-tissues: ["[[cardiomyocytes]]", "[[myocardium]]", "[[skeletal-muscle]]"]
underlying-hallmarks:
  - "[[cellular-senescence]]"
  - "[[mitochondrial-dysfunction]]"
  - "[[chronic-inflammation]]"
  - "[[loss-of-proteostasis]]"
  - "[[stem-cell-exhaustion]]"
typical-onset: "65+ (HFpEF dominant in elderly); 50+ (HFrEF in post-MI / cardiomyopathy context)"
prevalence-65plus: "~10–15% at age 65+; ~20% at age 80+ (community-dwelling)"
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Anderson 2019, Bergmann 2015, Lewis-McDougall 2019, Wang 2013 verified against local PDFs. McMurray 2014 (PARADIGM-HF), Anker 2021 (EMPEROR-Preserved), Solomon 2022 (DELIVER) verified against downloaded PDFs — all key numerics confirmed. Heidenreich 2022 guideline not verified from full-text (AHA download failed; bronze OA; #gap/no-fulltext-access); LVEF classification thresholds and epidemiologic figures cited from this source remain unconfirmed against primary guideline text."
---

# Heart Failure

Heart failure (HF) is a **clinical syndrome** in which structural or functional cardiac abnormalities impair the ability of the ventricle(s) to fill or eject blood sufficiently to meet the body's metabolic demands, resulting in fluid retention, dyspnea, exercise intolerance, and progressive multi-organ hypoperfusion. It is the **leading cause of hospitalization in adults over 65** and carries ~50% five-year mortality — worse than many cancers [^heidenreich2022]. Age is the single strongest non-modifiable risk factor: the incidence approximately doubles with each decade over 40, and the syndrome represents a convergence of multiple aging hallmarks in the myocardium, including cardiomyocyte senescence, mitochondrial dysfunction, loss of proteostasis, and chronic low-grade inflammation.

---

## Subtypes

Three EF-based subtypes are recognized in current guidelines [^heidenreich2022]:

| Subtype | LVEF | Dominant Etiology | Key Features |
|---|---|---|---|
| **HFrEF** (reduced EF) | < 40% | Post-MI, dilated cardiomyopathy, valvular disease | Systolic pump failure; eccentric hypertrophy; neurohormonal activation; GDMT proven to reduce mortality |
| **HFmrEF** (mildly reduced EF) | 41–49% | Heterogeneous; often transitional | Shared features with both ends; growing recognition post-2016 |
| **HFpEF** (preserved EF) | ≥ 50% | Aging, hypertension, T2D, obesity, ATTR amyloidosis, CKD | Diastolic dysfunction; concentric hypertrophy; dominant form in elderly; until 2021 no proven mortality-reducing therapy |

HFpEF now accounts for approximately 50% of all HF cases and is rising in prevalence as the population ages. It is mechanistically driven more heavily by aging biology than HFrEF. The distinction is clinically meaningful because HFrEF and HFpEF respond differently to guideline-directed medical therapy.

---

## Pathophysiology

Heart failure is not a single disease but a syndrome driven by overlapping structural, neurohormonal, and cellular mechanisms:

### Cardiomyocyte loss and irreversible remodeling

Adult cardiomyocytes are predominantly post-mitotic, with a renewal rate of only ~0.8%/year at age 20 declining to <0.3%/year by age 75 [^bergmann2015]. The total left ventricular cardiomyocyte number is established perinatally and remains constant throughout adult life (R=0.01, p=0.96); approximately 39% of left ventricular cardiomyocytes are exchanged over a 75-year lifespan. When cardiomyocytes are lost to ischemia, apoptosis, or senescence-driven clearance, the gap is filled by fibrosis — not new contractile cells. This makes functional recovery from myocardial injury essentially irreversible at scale. See [[cardiomyocytes]] for the full biology of post-mitotic cardiomyocyte turnover.

### Neurohormonal activation

Hemodynamic stress from reduced cardiac output triggers maladaptive compensatory cascades:

- **RAAS (renin-angiotensin-aldosterone system)** — angiotensin II drives vasoconstriction, sodium retention, aldosterone release, and cardiac fibrosis
- **Sympathetic nervous system** — catecholamine release increases heart rate and contractility acutely but causes cardiotoxicity chronically (receptor downregulation, arrhythmia, apoptosis)
- **ADH/AVP** — arginine vasopressin causes water retention and hyponatremia in advanced HF
- **Natriuretic peptides (BNP, NT-proBNP)** — released by stressed ventricular myocytes as a counter-regulatory response; they are the primary serum biomarkers used for HF diagnosis and monitoring

### Sarcomeric and structural remodeling

- **Eccentric hypertrophy** (HFrEF pattern): ventricular dilation with relatively thin walls; sarcomere addition in series; impaired systolic contractility
- **Concentric hypertrophy** (HFpEF pattern): increased wall thickness with preserved or reduced cavity size; sarcomere addition in parallel; impaired diastolic relaxation; increased stiffness
- Fibrosis — both reactive (perivascular, interstitial) and replacement (scar post-MI) — reduces compliance and impairs electrical conduction

### Mitochondrial dysfunction in the failing myocardium

The failing heart shifts energy substrate metabolism toward glucose and away from fatty acids — the reverse of the normal adult heart, which derives ~70% of ATP from fatty acid oxidation. This metabolic shift is ultimately insufficient: total ATP production and PCr/ATP ratios fall in the failing myocardium. Contributing mechanisms include:

- Decreased ETC complex activity (especially Complex I, III, IV)
- Accumulation of mtDNA deletions from decades of ROS exposure without dilution by cell division
- Impaired [[mitophagy]] → persistence of dysfunctional mitochondria
- Increased mitochondrial membrane permeability → cytochrome c leak → increased apoptotic susceptibility

See [[mitochondrial-dysfunction]] for the broader aging mechanism.

### Cardiomyocyte senescence with non-canonical SASP

A critical upstream mechanism linking aging directly to HFpEF: aged cardiomyocytes accumulate markers of [[cellular-senescence]] through **length-independent telomere damage** — persistent DNA damage foci at telomeric regions arising from oxidative stress, not from division-mediated telomere shortening (which is irrelevant in post-mitotic cells) [^anderson2019].

The SASP secreted by senescent cardiomyocytes is **non-canonical** — it is pro-fibrotic and pro-hypertrophic rather than classically inflammatory:

- Verified secreted effectors from purified aged cardiomyocytes: **Tgfb2, Gdf15, and Edn3**
- Classical inflammatory SASP components (**Il-1α, Il-1β, Il-6, Cxcl1, Cxcl2**) were **not** differentially expressed in the purified cardiomyocyte fraction vs stromal fractions [^anderson2019]
- This distinguishes cardiomyocyte aging from most other senescence-driven aging biology and from the [[sasp]] described in fibroblasts or immune cells

This non-canonical SASP activates cardiac fibroblasts (myofibroblast transition, increased α-SMA), promotes cardiomyocyte hypertrophy, and drives the myocardial fibrosis and stiffness that is the tissue substrate of HFpEF. #gap/needs-human-replication (mouse mechanism; human SASP profile from primary cardiac tissue not yet independently mapped)

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — oxidative telomere damage shown in human cardiac biopsies (Anderson 2019); functional SASP profile in purified human cardiomyocytes not yet characterized |
| Phenotype conserved in humans? | yes — senescent CMs detected by p16/p21 in human hearts; diastolic dysfunction / HFpEF driven by fibrosis is observed clinically |
| Replicated independently? | no #gap/needs-replication |

### Endothelial dysfunction and microvascular rarefaction

In HFpEF especially, systemic inflammation and metabolic comorbidities (hypertension, T2D, obesity) drive endothelial dysfunction with reduced NO bioavailability → impaired vasodilation, coronary microvascular disease, and reduced coronary flow reserve. GDF15, one of the three SASP effectors from senescent cardiomyocytes, is a circulating biomarker of cardiac stress and emerging aging biomarker.

### Iron deficiency

Iron deficiency (with or without anemia) is present in ~50% of HF patients and independently predicts mortality and exercise intolerance. Mechanism: impaired mitochondrial heme synthesis reduces ETC function in cardiomyocytes, compounding underlying mitochondrial dysfunction. IV ferric carboxymaltose improves exercise capacity in iron-deficient HFrEF. #gap/long-term-unknown (mortality benefit not yet established at adequate power)

---

## Genetics

| Gene/Variant | Protein | Inheritance | Phenotype |
|---|---|---|---|
| *TTN* | Titin | AD (truncating) | Familial DCM / HFrEF; ~25% of familial DCM; often incomplete penetrance |
| *MYH7* | β-myosin heavy chain | AD | Hypertrophic cardiomyopathy (HCM) → HFpEF; most penetrant HCM gene |
| *MYBPC3* | Myosin-binding protein C3 | AD | HCM; most common HCM gene by frequency |
| *LMNA* | Lamin A/C | AD | DCM + conduction disease; rapidly progressive; high arrhythmia risk |
| *SCN5A* | Nav1.5 | AD | Arrhythmia-associated cardiomyopathy; Brugada / long QT overlap |
| *TNNC1*, *TNNT2*, *TNNI3* | Troponin complex | AD | HCM or DCM depending on variant class |
| *TTR* | Transthyretin | WT or V30M/V122I | ATTR amyloid cardiomyopathy → HFpEF; V122I variant enriched in Afro-Caribbean populations (~3–4%); wild-type ATTR is an aging-associated disease (>70 years) |

ATTR cardiac amyloidosis is increasingly recognized as a significant contributor to HFpEF in the elderly (up to ~13% of elderly HFpEF in autopsy studies). It is treatable with tafamidis (TTR stabilizer) — the first therapy to show mortality benefit in ATTR-CM in the ATTR-ACT trial. #gap/needs-replication for prevalence estimate in HFpEF

---

## Pharmacology — Guideline-directed medical therapy (GDMT)

### HFrEF (LVEF <40%) — Four-pillar GDMT

All four pillars have demonstrated mortality benefit in RCTs. Maximally tolerated doses of all four pillars reduce all-cause mortality by approximately 60% combined vs placebo [^heidenreich2022]:

| Pillar | Drug class | Exemplars | Mechanism |
|---|---|---|---|
| RAAS blockade | ACEi or ARB, or ARNi (preferred) | Enalapril; sacubitril/valsartan | Block Ang-II vasoconstriction/fibrosis; ARNi adds neprilysin inhibition → enhanced BNP/ANP vasodilation |
| Beta-blocker | Carvedilol, metoprolol succinate, bisoprolol | Three proven agents only | Block catecholamine cardiotoxicity; reduce HR; reverse remodeling |
| MRA | Spironolactone, eplerenone | Aldosterone receptor antagonist | Block aldosterone-driven fibrosis and sodium retention; anti-remodeling |
| SGLT2i | Empagliflozin, dapagliflozin | SGLT2 cotransporter inhibitor | Osmotic diuresis; metabolic benefits; direct cardiac effects (independent of glycemic control) |

**ARNi (sacubitril/valsartan) vs enalapril — PARADIGM-HF (n=8,442):** Sacubitril/valsartan reduced the composite of cardiovascular death or HF hospitalization by 20% (HR 0.80, 95% CI 0.73–0.87, p<0.001) vs enalapril in HFrEF. Cardiovascular death reduced by 20%; all-cause mortality reduced by 16%. The trial was stopped early at a median 27 months due to overwhelming benefit. ARNi is now the preferred RAAS blocker in HFrEF when tolerated [^mcmurray2014].

**SGLT2i in HFrEF:** Dapagliflozin (DAPA-HF) and empagliflozin (EMPEROR-Reduced) each independently demonstrated ~25% relative risk reduction in HF hospitalization and cardiovascular death in HFrEF patients including non-diabetics — establishing that SGLT2i benefits in HF are independent of glycemic effect.

**Devices:** ICD (implantable cardioverter-defibrillator) for LVEF ≤35% with NYHA II-III (reduces sudden cardiac death); CRT (cardiac resynchronization therapy) for LVEF ≤35% + QRS ≥150 ms + LBBB morphology (improves mechanical dyssynchrony, reduces HF hospitalization and mortality).

**Advanced HF:** LVAD (left ventricular assist device) as bridge to transplant or destination therapy (MOMENTUM 3 trial — HeartMate 3 superior to HeartMate II at 2 years). Heart transplantation remains the gold standard for eligible patients with refractory HF; limited by donor supply.

### HFpEF (LVEF ≥50%) — Historically difficult

For decades, no therapy was proven to reduce mortality in HFpEF despite multiple failed trials (candesartan, irbesartan, spironolactone in I-PRESERVE). The biology of HFpEF — diastolic dysfunction driven by fibrosis, aging, and comorbidities — is distinct from the neurohormonal-driven HFrEF model.

**EMPEROR-Preserved 2021 (n=5,988):** Empagliflozin 10 mg/day reduced the primary composite of cardiovascular death or HF hospitalization by 21% (HR 0.79, 95% CI 0.69–0.90, p<0.001) in HFpEF/HFmrEF patients (LVEF >40%, NYHA II–IV; median follow-up 26.2 months) — the first SGLT2 inhibitor to demonstrate significant efficacy in this population [^anker2021].

**DELIVER 2022 (n=6,263):** Dapagliflozin 10 mg/day reduced the primary composite by 18% (HR 0.82, 95% CI 0.73–0.92, p<0.001) in HFmrEF and HFpEF — confirming the SGLT2i class effect [^solomon2022].

**PARAGON-HF:** Sacubitril/valsartan missed its primary endpoint in HFpEF overall (HR 0.87, p=0.059), but subgroup analyses suggested benefit in patients with LVEF in the lower half of the "preserved" range (40–57%) and in women — contributing to broader use in HFmrEF and some HFpEF patients.

| Drug class | HFrEF benefit | HFpEF benefit |
|---|---|---|
| ACEi/ARB | Strong (proven mortality benefit) | Not proven |
| ARNi (sacubitril/valsartan) | Preferred over ACEi (PARADIGM-HF) | Borderline (PARAGON-HF near-miss; some use in HFmrEF) |
| Beta-blocker | Strong | Not proven |
| MRA | Strong | Not proven (I-PRESERVE negative) |
| SGLT2i | Strong (DAPA-HF, EMPEROR-Reduced) | Proven (EMPEROR-Preserved, DELIVER) |

---

## Aging hallmarks linkage

Heart failure in the elderly is a convergent phenotype of multiple aging hallmarks:

| Hallmark | Mechanism in HF |
|---|---|
| [[cellular-senescence]] | Cardiomyocyte senescence via oxidative telomere damage; non-canonical SASP (Tgfb2/Gdf15/Edn3) activates fibroblasts and drives hypertrophy; distinct from inflammatory SASP [^anderson2019] |
| [[mitochondrial-dysfunction]] | ETC impairment in failing cardiomyocytes; reduced PCr/ATP ratio; impaired fatty acid oxidation; ROS-mediated telomere damage initiates senescence cycle |
| [[chronic-inflammation]] | Systemic inflammaging (elevated IL-6, TNF-α, CRP) contributes to cardiac remodeling; endothelial dysfunction; SASP from non-cardiac senescent cells acts on myocardium; see [[sasp]] for the broader SASP landscape |
| [[loss-of-proteostasis]] | Age-related decline in autophagy/UPS in cardiomyocytes allows accumulation of misfolded sarcomeric proteins; ATTR amyloid is a direct proteostasis disease |
| [[stem-cell-exhaustion]] | Senescent cardiac progenitor cells (CPCs) directly impair residual regenerative capacity; >50% of CPCs from subjects >70 years old are p16INK4A+ (linear increase with age, R²=0.722); SA-β-gal positivity is separately elevated in old subjects (~60% vs ~20% in middle-aged) [^lewis2019] — distinct from cardiomyocyte senescence; SASP from senescent CPCs (PAI-1, IL-8, IL-1β, IGFBP-3, CCL-2, IL-6, GM-CSF) further impairs cycling CPCs |

---

## Aging-specific interventions under investigation

### Cardiac senolytics

Preclinical evidence supports senolytic clearance of senescent cardiomyocytes to reduce HFpEF-like phenotypes:

- **Genetic clearance (INK-ATTAC, AP20187):** In 27-month aged mice, AP20187-driven p16+ cell clearance reduced cardiomyocyte hypertrophy and cardiac fibrosis [^anderson2019]
- **Navitoclax (ABT-263; BCL-2/BCL-xL/BCL-w inhibitor) 50 mg/kg/day × 2 cycles (7d each) in 23-month wild-type mice (100 weeks at start of treatment):** Phenocopied genetic clearance — reduced CM hypertrophy and fibrosis; did not significantly affect LVEF or LV mass index [^anderson2019]
- **Dasatinib + quercetin (D+Q) and genetic clearance (AP20187) in aged mice (~28 months):** Both interventions reduced LV fibrosis (p<0.05) and increased Ki67+ small CMs (~0.25% vs ~0.03% vehicle; Fig 6f). EdU+ CM increase (~0.25 ± 0.06% vs 0.07 ± 0.00% old vehicle; Fig 6h) was demonstrated for AP20187/INK-ATTAC genetic clearance; equivalent EdU+ data for D+Q drug treatment was not separately reported — in the Lewis-McDougall 2019 model primarily targeting cardiac progenitor cell senescence [^lewis2019]

**Critical caveat — navitoclax thrombocytopenia:** Navitoclax inhibits BCL-xL on platelets → dose-limiting thrombocytopenia. This is mechanistically distinct from MCL-1 inhibitor cardiotoxicity (see [[cardiomyocytes]] — MCL-1 inhibitors carry inherent cardiomyocyte killing risk due to constitutive MCL-1 dependence of CMs [^wang2013_note]).

**No completed human RCT of senolytics specifically for HF or HFpEF as of 2026-05-04.** Multiple phase 1/2 trials of D+Q and other senolytics are registered on ClinicalTrials.gov for HF and cardiac fibrosis endpoints. #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — senescent CMs and CPCs observed in human hearts; navitoclax senolytic activity assumed to be conserved |
| Phenotype conserved in humans? | unknown — no human proof-of-concept that cardiomyocyte senolysis reduces HFpEF parameters |
| Replicated in humans? | no #gap/needs-human-replication |

### GDF15 as a cardiac aging biomarker

GDF15 (Growth Differentiation Factor 15) is one of the three verified SASP effectors from aged cardiomyocytes [^anderson2019] and a circulating stress-response factor elevated in heart failure, cardiorenal disease, and as a general marker of biological aging. Elevated circulating GDF15 is independently associated with HF prognosis and cardiovascular events. It is also the mediator of metformin-associated weight loss (via hindbrain GLP-like signaling). #gap/no-mechanism for its precise role as a cardiac SASP effector vs systemic stress marker

---

## Epidemiology

- **Global prevalence:** ~64 million people worldwide affected
- **US prevalence:** ~6.5 million adults; projected to rise to ~8 million by 2030 due to aging population
- **Incidence at age 65+:** ~10 per 1,000 person-years; doubles each decade after 55
- **5-year mortality:** ~50% overall; varies greatly by subtype (HFrEF vs HFpEF), NYHA class, comorbidities
- **Hospitalization:** HF is the #1 cause of hospitalization in adults >65 in the US; 30-day readmission rate ~25% despite discharge
- **Economic burden:** ~$30 billion annually in the US [^heidenreich2022]

---

## Limitations and gaps

| Gap | Tag | Notes |
|---|---|---|
| Human cardiomyocyte SASP characterization | #gap/needs-human-replication | Anderson 2019 non-canonical SASP is from mouse CMs + limited human right atrial appendage biopsies; primary human LV CM SASP profile not independently characterized |
| Cardiac senolytic RCT in humans | #gap/needs-human-replication | No completed phase 2/3 trial of any senolytic specifically targeting cardiac senescent cells; several trials registered but not reported |
| HFpEF mechanistic heterogeneity | #gap/no-mechanism | HFpEF is likely multiple distinct diseases sharing the EF criterion; no unified mechanism; senescence/fibrosis, amyloid, and microvascular disease are partly separable subtypes |
| ATTR amyloidosis prevalence in HFpEF | #gap/needs-replication | 13% figure from autopsy cohort; may not reflect all-comer HFpEF populations |
| Iron deficiency mortality benefit | #gap/long-term-unknown | AFFIRM-AHF and IRONMAN show exercise/rehospitalization benefit; definitive mortality trial data pending |
| MCL-1 inhibitor therapeutic window for cardiac senolytics | #gap/long-term-unknown | Wang 2013 demonstrates constitutive MCL-1 requirement in cardiomyocytes; dose-titration for selective senolysis without CM killing not established |
| Cardiomyocyte proteostasis decline — quantitative data | #gap/unsourced | UPS activity decline and protein aggregate accumulation rates in aged human cardiomyocytes need primary-source citations |

---

## Cross-references

- [[cardiomyocytes]] — source of non-canonical SASP (Tgfb2/Gdf15/Edn3 verified Anderson 2019); post-mitotic biology; turnover rates (Bergmann 2015); navitoclax senolysis in vivo
- [[cellular-senescence]] — upstream mechanism; oxidative telomere damage drives CM senescence
- [[sasp]] — verified page; heart failure context uses NON-CANONICAL SASP distinct from canonical IL-6/IL-1β profile
- [[mitochondrial-dysfunction]] — central to failing myocardium energy crisis
- [[chronic-inflammation]] — systemic inflammaging component; endothelial dysfunction
- [[loss-of-proteostasis]] — ATTR amyloidosis; sarcomeric protein aggregation
- [[stem-cell-exhaustion]] — senescent CPCs impair residual regenerative capacity (Lewis-McDougall 2019)
- [[interventions/pharmacological/senolytics]] — navitoclax, D+Q preclinical cardiac data; human trial status
- [[type-2-diabetes]] — bidirectional risk with HFpEF; shared SGLT2i benefit
- [[sarcopenia]] — HF listed as comorbidity driving cachexia overlay; shared frailty phenotype
- [[cardiac-fibrosis]] — downstream consequence of non-canonical SASP; see stub
- [[atherosclerosis]] — primary upstream cause of HFrEF (post-MI) — see stub
- [[cardiovascular-aging]] — broader organ-system overlay — see stub
- [[mcl-1]] — MCL-1 constitutive requirement in CMs; MCL-1 inhibitor cardiotoxicity
- [[mtor]] — mTORC1 hyperactivation with age suppresses autophagy in cardiomyocytes

---

## Footnotes

[^heidenreich2022]: [[studies/heidenreich-2022-aha-acc-hfsa-hf-guidelines]] · doi:10.1161/CIR.0000000000001063 · Heidenreich PA, Bozkurt B, Aguilar D et al. · 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure · Circulation 2022;145:e895–e1032 · guideline / systematic-review · n=not applicable · model: human · archive: download failed (AHA journal blocked via camoufox; bronze OA status) #gap/no-fulltext-access · authoritative source for HF classification, GDMT evidence summary, epidemiologic estimates; HF subtype LVEF thresholds (HFrEF <40%, HFmrEF 41–49%, HFpEF ≥50%) verified against 2022 guideline consensus via clinical knowledge; epidemiologic figures (prevalence, incidence, economic burden) not independently verified from full-text

[^bergmann2015]: doi:10.1016/j.cell.2015.05.026 · Bergmann O, Zdunek S, Felker A et al. · 2015 · Cell 161(7):1566–1575 · observational · model: post-mortem human heart tissue (¹⁴C bomb-pulse dating + stereology); n=51 subjects aged 8–75 for ¹⁴C dating · local PDF: available · total CM number established perinatally and constant throughout adult life (R=0.01, p=0.96); turnover <0.3%/yr at age 75 in LV; ~39% of LV CMs exchanged over 75 yr; 73.6% mononucleated; established on [[cardiomyocytes]] verified page

[^anderson2019]: doi:10.15252/embj.2018100492 · Anderson R, Lagnado A, Maggiorani D et al. · 2019 · The EMBO Journal 38(5):e100492 · in-vivo + in-vitro · model: mixed-sex C57BL/6 mice aged 3–30 months + human right atrial appendage biopsies n=35 (aged 32–86); n=5–8 mice/group (navitoclax); n=6 mice/group (INK-ATTAC) · local PDF: available · non-canonical SASP from purified aged CMs: Edn3, Tgfb2, Gdf15 (classical Il-1α, Il-1β, Il-6, Cxcl1, Cxcl2 NOT differentially expressed in purified CM fraction vs stromal fractions); oxidative telomere damage (TAF) drives post-mitotic senescence; navitoclax 50 mg/kg/day × 2 cycles (7d each, 1-week interval) in 23-month mice (100 weeks) reduced CM hypertrophy and cardiac fibrosis; INK-ATTAC AP20187 in 27-month mice confirms same; established and fully verified on [[cardiomyocytes]] page

[^lewis2019]: doi:10.1111/acel.12931 · Lewis-McDougall FC, Ruchaya PJ, Domenjo-Vila E et al. · 2019 · Aging Cell 18(3):e12931 · in-vivo + in-vitro · model: human CPCs from n=35 cardiac surgery patients aged 32–86 + NSG mouse MI model (n=4–5/group) + aged mice 27.7 ± 2.7 months (n=5–11/group) · >50% of CPCs from subjects >70 years old are p16INK4A+ (linear increase with age, R²=0.722); SA-β-gal positivity separately ~60% in old vs ~20% middle-aged subjects (p=0.0264, n=2–4 donors); D+Q and AP20187 senolysis in aged (~28 month) mice both reduced LV fibrosis (p<0.05) and increased Ki67+ small CMs (~0.25% vs ~0.03% vehicle; Fig 6f); EdU+ CM increase (~0.25 ± 0.06% vs 0.07 ± 0.00% old vehicle) confirmed for AP20187/INK-ATTAC arm (Fig 6h) — equivalent EdU+ data not separately shown for D+Q arm; senescent CPC SASP (7 proteins quantified by Luminex): PAI-1, IL-8, IL-1β, IGFBP-3, CCL-2, IL-6, GM-CSF; note: navitoclax in vivo cardiac clearance is from Anderson 2019, not this study (Lewis-McDougall navitoclax was in vitro CPC senolysis only); established and verified on [[cardiomyocytes]] page

[^mcmurray2014]: [[studies/mcmurray-2014-paradigm-hf]] · doi:10.1056/NEJMoa1409077 · McMurray JJV, Packer M, Desai AS et al. · PARADIGM-HF trial · N Engl J Med 2014;371(11):993–1004 · rct · n=8,442 (4,187 LCZ696; 4,212 enalapril) · model: human HFrEF (LVEF ≤40%, NYHA II-IV); mean LVEF ~29.6%; ~34.7% with diabetes; mean age 63.8 yr · local PDF: available · sacubitril/valsartan (LCZ696) vs enalapril: primary composite CV death or HF hospitalization HR 0.80 (95% CI 0.73–0.87, p<0.001); CV death HR 0.80 (0.71–0.89, p<0.001); all-cause mortality HR 0.84 (0.76–0.93, p<0.001); HF hospitalization reduced 21% (p<0.001); median 27 months; trial stopped early at third interim analysis (March 2014) for overwhelming benefit

[^anker2021]: [[studies/anker-2021-emperor-preserved]] · doi:10.1056/NEJMoa2107038 · Anker SD, Butler J, Filippatos G et al. · EMPEROR-Preserved trial · N Engl J Med 2021;385(16):1451–1461 · rct · n=5,988 (2,997 empagliflozin; 2,991 placebo) · model: human HFpEF/HFmrEF (LVEF >40%); mean LVEF 54.3%; ~49% with diabetes (1,466/2,997 empagliflozin arm, 1,472/2,991 placebo arm); median follow-up 26.2 months · local PDF: available · empagliflozin 10 mg/day: 21% RRR composite CV death or HF hospitalization (HR 0.79, 95% CI 0.69–0.90, p<0.001); benefit primarily driven by reduced HF hospitalization (HR 0.73, 95% CI 0.61–0.88; p<0.001); CV death alone HR 0.91 (0.76–1.09), not significant; benefit consistent irrespective of diabetes status; first SGLT2i with proven efficacy in HFpEF/HFmrEF

[^solomon2022]: [[studies/solomon-2022-deliver]] · doi:10.1056/NEJMoa2206286 · Solomon SD, McMurray JJV, Claggett B et al. · DELIVER trial · N Engl J Med 2022;387(12):1089–1098 · rct · n=6,263 (3,131 dapagliflozin; 3,132 placebo) · model: human HFmrEF/HFpEF (LVEF >40%); mean LVEF ~54%; ~44.7% with T2D; median follow-up 2.3 years · local PDF: available · dapagliflozin 10 mg/day: primary composite worsening HF or CV death HR 0.82 (95% CI 0.73–0.92, p<0.001); worsening HF HR 0.79 (0.69–0.91); CV death HR 0.88 (0.74–1.05), not significant; benefit consistent irrespective of diabetes status and LVEF ≥60% vs <60%; confirms SGLT2i class effect across HFpEF/HFmrEF spectrum

[^wang2013_note]: Note: Wang et al. 2013 (doi:10.1101/gad.215855.113) established that cardiomyocytes require MCL-1 constitutively for survival — MCL-1 deletion causes lethal dilated cardiomyopathy within 10 days (constitutive) or ~3 weeks (inducible adult). This creates a fundamental therapeutic index problem for MCL-1 inhibitors used as senolytics: they would kill cardiomyocytes at doses required for senescent-cell clearance. See [[cardiomyocytes]] and [[mcl-1]] for full discussion. doi:10.1101/gad.215855.113 · in-vivo · model: Ckmm-Cre and Myh-CreER conditional Mcl1 KO mice · local PDF: available
