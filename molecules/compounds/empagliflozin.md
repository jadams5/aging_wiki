---
type: compound
aliases: [Jardiance, BI 10773, empagliflozin]
pubchem-cid: 11949646
inchikey: OBWASQILIWPZMG-QZMOQZSNSA-N
chembl-id: CHEMBL2110563
drugbank-id: DB09038
cas-number: 864070-44-0
biologic: false
mechanisms: [sglt2-inhibitor, caloric-loss, glucosuria, ketogenesis, ampk-activation, uric-acid-reduction, cardiac-unloading, natriuresis]
targets: ["[[ampk]]", "[[mtor]]", "[[sirtuin]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[chronic-inflammation]]", "[[mitochondrial-dysfunction]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Aging-specific RCT in non-diabetic older adults (65+) with composite biological-age + functional outcome (grip strength, gait speed, VO2max) over 5 yr; n>=5,000."
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "DOI sanity verified against DOI lookup for the 2 cited DOIs that include explicit DOIs in footnotes (Anker 2021 NEJMoa2107038, Ahmed 2023 toxres/tfad007). Zinman 2015 (NEJMoa1504720), Packer 2020, Herrington 2023 are referenced via studies/ wikilinks but the page itself does not include explicit footnote DOIs for them — DOIs would need to be verified on the studies/ pages. R34 backfill batch 4 (2026-05-08): added Khalid 2026 SGLT2i-in-elderly-HF meta-analysis (doi:10.1016/j.archger.2026.106138, PMID 41544527) — abstract verified. Wikilinks spot-checked. Quantitative claims (HRs, eGFR slopes, BHB elevation) NOT cross-checked against primary PDFs — synthesis-style content lint only."
literature-checked-through: 2026-05-08
---

# Empagliflozin

A sodium-glucose cotransporter 2 (SGLT2) inhibitor marketed as **Jardiance** (Boehringer Ingelheim / Eli Lilly). FDA-approved for type 2 diabetes (2014), heart failure with reduced ejection fraction / HFrEF (2021), heart failure with preserved ejection fraction / HFpEF (2021), and chronic kidney disease / CKD (2023). The first glucose-lowering drug to demonstrate cardiovascular mortality benefit in a prospective outcome trial. Mechanistically overlaps with [[caloric-restriction]] mimicry (caloric loss, ketogenesis, AMPK activation) — making it a compound of interest for aging biology despite the absence of aging-specific trial endpoints to date.

## Identity

- **PubChem CID:** 11949646
- **ChEMBL:** CHEMBL2110563
- **DrugBank:** DB09038
- **InChIKey:** OBWASQILIWPZMG-QZMOQZSNSA-N
- **Molecular formula:** C23H27ClO7
- **Molecular weight:** 450.9 g/mol
- **Class:** SGLT2 inhibitor (gliflozin); small-molecule glucoside derivative
- **Approved dose:** 10 mg or 25 mg oral once daily (10 mg for HF/CKD; 25 mg add-on for T2D glycemic control)

## Mechanism of action

### Primary: renal glucose excretion

Empagliflozin selectively and reversibly inhibits **SGLT2**, the sodium-glucose cotransporter responsible for ~90% of renal glucose reabsorption in the proximal tubule S1/S2 segment. Inhibition causes obligate glucosuria (~70–80 g glucose/day at 25 mg dose in T2D patients), producing:

1. **Caloric loss** (~280–320 kcal/day) — functionally analogous to mild caloric restriction; sustained negative energy balance without dietary change.
2. **Osmotic diuresis and natriuresis** — reduces plasma volume and cardiac preload/afterload; lowers blood pressure by ~3–4 mmHg systolic without reflex tachycardia.
3. **Reduction of plasma glucose** — modest HbA1c reduction (~0.5–0.8%); not the primary driver of CV benefit (insulin-matched comparators had no CV benefit).

### Secondary: ketogenesis and metabolic reprogramming

Glucosuria drives a compensatory shift to fat oxidation and **ketogenesis** — circulating beta-hydroxybutyrate (BHB) rises 2–3x during SGLT2 inhibition even in non-diabetic patients. BHB is a signaling molecule with multiple downstream effects:

- **HDAC inhibitor** — BHB inhibits class I and IIa HDACs, upregulating antioxidant genes (FOXO3A, MT2) and modulating histone acetylation patterns overlapping with those seen in [[caloric-restriction]] and fasting [^unsourced-bhb-hdac]. #gap/unsourced — mechanism inferred from BHB HDAC literature; needs primary citation on empagliflozin specifically.
- **NLRP3 inflammasome inhibition** — BHB suppresses [[nlrp3-inflammasome]] activation independently of HDAC effects, reducing IL-1beta and IL-18 secretion. #gap/needs-replication in the empagliflozin context.
- **Cardiac fuel switch** — the heart preferentially oxidizes BHB over fatty acids and glucose during SGLT2 inhibition, improving myocardial oxygen efficiency (~28% more ATP per O2 consumed) [^unsourced-cardiac-fuel]. #gap/unsourced — mechanistic inference; needs direct myocardial substrate flux measurement in humans.

### Tertiary: AMPK activation and autophagy

Glucose deprivation and caloric loss activate [[ampk]] via rising AMP:ATP ratio. AMPK phosphorylation suppresses [[mtor]] (TORC1), inducing [[autophagy]] and [[mitochondrial-biogenesis]]. Empagliflozin activates the AMPK/SIRT-1/PGC-1alpha axis in cardiac tissue in preclinical models [^ahmed2023]. This mechanistic overlap with [[metformin]] and [[caloric-restriction]] raises the hypothesis that SGLT2 inhibitors are partial [[caloric-restriction]] mimetics.

| Dimension | Status |
|---|---|
| AMPK pathway conserved in humans? | yes |
| Cardiac AMPK activation demonstrated in humans? | partial — inferred from metabolic outcomes; direct AMPK phosphorylation not measured in human myocardium |
| Replicated in humans (AMPK mechanism)? | in-progress |

### Uric acid reduction

Empagliflozin reduces serum urate by ~10–15% via competitive inhibition of URAT1 (uric acid transporter) in the proximal tubule — a mechanism independent of glucose excretion. Lower urate reduces oxidative stress and endothelial dysfunction, plausibly contributing to CV benefit. #gap/no-mechanism — relative contribution of urate reduction to overall CV protection is not established.

## Clinical trial evidence

### EMPA-REG OUTCOME (Zinman 2015) — T2D + established CVD

n=7,020 adults with T2D and established cardiovascular disease randomized to empagliflozin 10/25 mg vs placebo on top of standard care; median follow-up 3.1 years [^zinman2015].

- **Primary endpoint (3P-MACE):** HR 0.86 (95% CI 0.74–0.99, p=0.04 superiority) — 14% relative risk reduction.
- **CV mortality:** HR 0.62 (95% CI 0.49–0.77, p<0.001) — 38% RRR. **First positive CV mortality result for any glucose-lowering drug.**
- **HF hospitalization:** HR 0.65 (95% CI 0.50–0.85, p<0.001) — 35% RRR.
- **All-cause mortality:** HR 0.68 (95% CI 0.57–0.82, p<0.001).
- Glycemic effect (HbA1c −0.5%) was too small to explain the CV benefit; diuresis/volume unloading hypothesis and metabolic reprogramming proposed as primary drivers.

[^zinman2015]: [[studies/zinman-2015-empa-reg-outcome]] · n=7,020 · rct · HR 0.86 (MACE), HR 0.62 (CV death) · model: T2D + established CVD, 3.1 yr follow-up

### EMPEROR-Preserved (Anker 2021) — HFpEF

n=5,988 adults with HFpEF (LVEF >40%, NYHA class II–IV) randomized to empagliflozin 10 mg vs placebo; median follow-up 26.2 months [^anker2021].

- **Primary endpoint (CV death + HF hospitalization):** HR 0.79 (95% CI 0.69–0.90, p<0.001) — 21% RRR.
- **HF hospitalization:** HR 0.73 (95% CI 0.61–0.88).
- First positive trial for any agent in HFpEF — a condition affecting the majority of older patients with heart failure, with no previously approved therapy.
- eGFR decline slowed by ~1.4 mL/min/1.73m2/year vs placebo.

[^anker2021]: [[studies/anker-2021-emperor-preserved]] · n=5,988 · rct · HR 0.79 (primary endpoint) · model: HFpEF LVEF >40%; PDF at 

### EMPEROR-Reduced (Packer 2020) — HFrEF

n=3,730 adults with HFrEF (LVEF ≤40%, NYHA class II–IV) randomized to empagliflozin 10 mg vs placebo; median follow-up 16 months [^packer2020].

- **Primary endpoint (CV death + HF hospitalization):** HR 0.75 (95% CI 0.65–0.86, p<0.001) — 25% RRR.
- **Total HF hospitalizations:** RR 0.70 (0.58–0.85) — also significant for recurrent events.
- eGFR decline slowed significantly.
- Established empagliflozin as a pillar of HFrEF guideline-directed therapy.

[^packer2020]: [[studies/packer-2020-emperor-reduced]] · n=3,730 · rct · HR 0.75 (primary endpoint) · model: HFrEF LVEF ≤40%

### EMPA-KIDNEY (Herrington 2023) — CKD

n=6,609 adults with CKD (eGFR 20–45 or eGFR 45–90 with urinary ACR ≥200) randomized to empagliflozin 10 mg vs placebo; median follow-up 2.0 years; trial stopped early for efficacy [^herrington2023].

- **Primary endpoint (kidney disease progression or CV death):** HR 0.72 (95% CI 0.64–0.82, p<0.001) — 28% RRR.
- Benefit extended to patients with eGFR as low as 20 mL/min/1.73m2 and to non-diabetic CKD.
- Expanded label to CKD regardless of T2D status.

[^herrington2023]: [[studies/herrington-2023-empa-kidney]] · n=6,609 · rct · HR 0.72 (primary endpoint) · model: CKD eGFR 20–90; trial stopped early for efficacy

## Aging biology relevance

Empagliflozin's mechanistic profile intersects with multiple aging hallmarks and longevity pathways:

| Mechanism | Hallmark overlap | Evidence grade |
|---|---|---|
| Caloric loss (~280 kcal/day) → CR-like signaling | [[deregulated-nutrient-sensing]] | Strong (human, indirect) |
| BHB ketogenesis → HDAC inhibition, FOXO3A activation | [[epigenetic-alterations]], [[deregulated-nutrient-sensing]] | Preclinical; #gap/needs-human-replication |
| AMPK activation → mTOR suppression → autophagy | [[disabled-macroautophagy]], [[deregulated-nutrient-sensing]] | Preclinical [^ahmed2023]; #gap/needs-human-replication |
| NLRP3 inflammasome suppression via BHB | [[chronic-inflammation]] | Preclinical; #gap/needs-human-replication |
| Mitochondrial biogenesis (AMPK/SIRT-1/PGC-1alpha) | [[mitochondrial-dysfunction]] | Preclinical [^ahmed2023] |
| Uric acid reduction | [[chronic-inflammation]] | Human (mechanistic) |
| Cardiac unloading + volume reduction | [[cardiovascular-aging]] | Human (mechanistic, from trial hemodynamics) |

[^ahmed2023]: doi:10.1093/toxres/tfad007 · Ahmed et al. 2023 · in-vitro/in-vivo · model: doxorubicin cardiotoxicity (rat); documents AMPK/SIRT-1/PGC-1alpha activation by empagliflozin

**Translation gap assessment:** Unlike most aging-biology compounds, empagliflozin has *abundant human evidence* — but all four positive trials enrolled disease populations (T2D, HF, CKD). No RCT has tested empagliflozin in non-diabetic older adults with aging endpoints (grip strength, gait speed, biological age, functional independence, or all-cause mortality in the general population). The CR-mimetic and AMPK-activating mechanisms plausibly operate in non-diabetic older adults, but this is unverified. #gap/needs-human-replication for aging-specific endpoints.

### SGLT2i in older adults with heart failure — meta-analysis (Khalid 2026)

**R34 update (2026-05-08).** Khalid et al. (*Arch Gerontol Geriatr* 2026) pooled 10 studies (4 RCTs + 6 cohorts; n=20,844) comparing SGLT2i vs control in adults ≥65 with HF [^khalid2026]:

- **All-cause mortality:** HR 0.81 (95% CI 0.72–0.90, p<0.001)
- **CV death:** HR 0.83 (95% CI 0.74–0.94, p=0.004)
- **First HF hospitalization:** HR 0.73 (95% CI 0.66–0.80, p<0.001)
- **Composite CV death + HF hospitalization:** HR 0.78 (95% CI 0.70–0.87, p<0.001)
- **Rehospitalization:** HR 0.60 (95% CI 0.53–0.69, p<0.001)
- **Renal function decline slowed** by 1.86 mL/min/1.73m²/yr (95% CI 1.15–2.58, p<0.001)
- Genital infection RR 3.07 (95% CI 2.03–4.64); UTI RR 1.19 (95% CI 1.03–1.38)
- **Serious AE rate lower** with SGLT2i (RR 0.92, 95% CI 0.89–0.95)

Class-level (not empagliflozin-specific) but pools the four major empagliflozin RCTs along with dapagliflozin trials. **First well-powered meta-analysis directly stratifying for age ≥65** — partly addresses the "elderly-specific data" gap noted in the safety profile section. Mortality benefit and HF outcome benefits preserved in the elderly subset. Genital/UT infection signals consistent with single-trial data. The age-disparity-in-prescribing analysis from Yang 2026 (*Diabetes Obes Metab*, doi:10.1111/dom.70421) flags an under-prescription gap: only 13.7% of SGLT2i-eligible adults ≥80 receive the class despite the favorable evidence base.

## Pharmacokinetics

- **Bioavailability:** ~84% oral (high vs typical small molecules; no first-pass effect)
- **Half-life:** ~12.4 h (supports once-daily dosing)
- **Protein binding:** ~86.2%
- **Metabolism:** primarily hepatic UGT1A3/1A8/1A9/2B7-mediated glucuronidation (not CYP-dependent); no major CYP3A4 interactions
- **Renal excretion:** ~54% (urine); ~41% fecal
- **Dose adjustment:** not required for mild-moderate renal impairment; reduced glucose-lowering efficacy at eGFR <45 but CV/renal protection persists per EMPA-KIDNEY

## Safety profile

Well-characterized across >25,000 trial participants across four major RCTs.

**Common adverse effects:**
- Genital mycotic infections (female ~6x, male ~4x increased risk) — mechanistic consequence of glucosuria; manageable, rarely serious
- Urinary tract infections — modest increase
- Polyuria/pollakiuria — osmotic diuresis effect
- Volume depletion / orthostatic hypotension — most relevant in elderly on diuretics; requires monitoring

**Serious but rare:**
- **Diabetic ketoacidosis (DKA):** Risk in T2D, especially type 1 DM (not approved for T1D); risk negligible in non-diabetics. Euglycemic DKA possible even with normal blood glucose. Relative risk ~3x in T2D trials but absolute rate low (<0.1%).
- **Fournier's gangrene:** Rare necrotizing genital infection; FDA black-box warning. Absolute incidence ~1 per 100,000 patient-years.
- **Limb amputation:** Class warning from canagliflozin data; not confirmed in empagliflozin trials.

**Elderly-specific:** The main trials included adults with median age ~60–67 years. Orthostatic hypotension risk is higher in the very elderly (>80). Volume depletion monitoring is warranted.

## Comparators within drug class

| Drug | Approved indications | Notes |
|---|---|---|
| [[metformin]] | T2D | Different mechanism (AMPK via mitochondrial complex I); older evidence base; no HF/CKD approval |
| Dapagliflozin | T2D, HFrEF, HFpEF, CKD | Class peer; similar outcomes across DAPA-HF, DELIVER trials |
| Canagliflozin | T2D, HFrEF, CKD | CREDENCE (renal), CANVAS (limb amputation signal) |

Empagliflozin and dapagliflozin have near-parallel evidence profiles; class-effect vs drug-specific effects remain debated. Most cardiologists now treat as a class.

## Limitations and gaps

1. **No aging-endpoint RCT.** All positive trials enrolled cardiovascular or renal disease populations. Whether empagliflozin extends healthspan or delays functional decline in healthy older adults is unknown. #gap/needs-human-replication
2. **CR-mimetic claim is mechanistic inference.** The caloric loss is real, but SGLT2 inhibitors don't reproduce the full CR transcriptional signature. The comparison to [[caloric-restriction]] requires direct head-to-head metabolomic/transcriptomic validation.
3. **AMPK activation in humans not directly measured.** Preclinical AMPK data [^ahmed2023] derive from disease models (doxorubicin cardiotoxicity, diabetes); whether equivalent activation occurs in healthy aging myocardium is unknown. #gap/needs-human-replication
4. **Biological-age biomarkers not measured** in any large empagliflozin trial (no DNAm clock, no proteomic clock). A mechanistic aging-biology substudy in EMPEROR-Preserved or EMPA-KIDNEY would be tractable and high-yield. #gap/needs-replication
5. **BHB HDAC/epigenetic effects uncited for empagliflozin specifically.** The signaling pathway (BHB → HDAC inhibition → FOXO3A) is established in fasting/ketosis literature; applying it to empagliflozin-induced BHB elevation is plausible but needs direct measurement. #gap/unsourced
6. **Long-term safety in non-diabetic elderly.** All safety data come from T2D/HF/CKD populations. Genital mycotic infection risk and DKA risk in non-diabetic older adults are inferred, not directly measured. #gap/long-term-unknown

## Cross-references

- Pathways modulated: [[ampk]], [[mtor]], [[sirtuin]], [[nlrp3-inflammasome]], [[pi3k-akt-pathway]]
- Processes induced: [[autophagy]], [[mitochondrial-biogenesis]]
- Hallmarks targeted: [[deregulated-nutrient-sensing]], [[chronic-inflammation]], [[mitochondrial-dysfunction]]
- Disease phenotypes: [[type-2-diabetes]], [[heart-failure]], [[atherosclerosis]], [[cardiovascular-aging]]
- Comparators: [[metformin]], [[caloric-restriction]] (mechanism overlap)
- Related compound class: see `interventions/pharmacological/sglt2-inhibitors.md` (stub) #stub

## Footnotes

[^zinman2015]: [[studies/zinman-2015-empa-reg-outcome]] · n=7,020 · rct · HR 0.86 (3P-MACE, p=0.04), HR 0.62 (CV death, p<0.001) · model: T2D + established CVD; first positive CV outcome trial for a glucose-lowering drug

[^anker2021]: [[studies/anker-2021-emperor-preserved]] · n=5,988 · rct · HR 0.79 (CV death + HF hospitalization, p<0.001) · model: HFpEF LVEF >40%; first positive trial for any HFpEF therapy; local PDF at 

[^packer2020]: [[studies/packer-2020-emperor-reduced]] · n=3,730 · rct · HR 0.75 (CV death + HF hospitalization, p<0.001) · model: HFrEF LVEF ≤40%

[^herrington2023]: [[studies/herrington-2023-empa-kidney]] · n=6,609 · rct · HR 0.72 (kidney progression or CV death, p<0.001) · model: CKD eGFR 20–90; stopped early for efficacy

[^ahmed2023]: doi:10.1093/toxres/tfad007 · Ahmed et al. · Toxicology Research 2023 · in-vitro + in-vivo · model: doxorubicin-induced cardiotoxicity (rat); empagliflozin activated AMPK/SIRT-1/PGC-1alpha, restored mitochondrial biogenesis; n=small; #gap/needs-human-replication

[^khalid2026]: doi:10.1016/j.archger.2026.106138 · pmid:41544527 · meta-analysis · 10 studies (4 RCTs + 6 cohorts; n=20,844) · Khalid A, Balach R, Rasool A, et al. · *Arch Gerontol Geriatr* 2026;143:106138 · SGLT2i vs control in HF patients ≥65 yr · all-cause mortality HR 0.81 (95% CI 0.72–0.90); CV death HR 0.83; HF hospitalization HR 0.73; rehospitalization HR 0.60; renal slope improved 1.86 mL/min/1.73m²/yr · class-level analysis (includes empagliflozin + dapagliflozin trials)
