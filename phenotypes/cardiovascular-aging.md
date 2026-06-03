---
type: phenotype
aliases: [cardiac aging, vascular aging, age-related cardiovascular decline, cardiovascular aging]
icd-10: null
icd-11: null
affected-tissues:
  - "[[cardiomyocytes]]"
  - "[[myocardium]]"
  - "[[arterial-wall]]"
  - "[[endothelium]]"
  - "[[cardiac-fibroblasts]]"
underlying-hallmarks:
  - "[[cellular-senescence]]"
  - "[[chronic-inflammation]]"
  - "[[mitochondrial-dysfunction]]"
  - "[[altered-intercellular-communication]]"
  - "[[stem-cell-exhaustion]]"
typical-onset: "Subclinical changes begin in the 4th decade; clinically apparent events predominate 65+"
prevalence-65plus: "Universal — all adults 65+ have detectable cardiovascular aging features by structural imaging or biomarker criteria"
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Anderson 2019, Bergmann 2015, Lewis-McDougall 2019, North 2012, Donato 2018 verified against local PDFs. Lakatta 2003, Mitchell 2010, Childs 2016 closed-access (not_oa) — PWV ~50% figure and Childs plaque-reduction figure not independently verified against primary source; flagged #gap/no-fulltext-access in footnotes. Sex-differences section verified 2026-06-03: El Khoudary 2020 (CIR.0000000000000912) and Sato 2022 (s11883-022-00980-5) closed-access (abstract+PubMed only); Lam 2019 (ehz835) bronze-OA but download failed (abstract+OUP landing page); TRAVERSE (NEJMoa2215025) closed-access (abstract only; cross-checked against verified testosterone.md). Three corrections applied — see verified-date 2026-06-03 log."
---


# Cardiovascular aging

The progressive, multi-compartment decline in cardiac and vascular function that accompanies biological aging. Not a single disease but a **coupled system phenotype**: structural and functional changes in the vasculature and the heart interact bidirectionally, each accelerating the other. Subclinical changes accumulate for decades before clinical disease emerges, making cardiovascular aging the dominant driver of morbidity and mortality in adults 65+ globally [^lakatta2003].

This page is an **overview / category page** covering shared mechanisms. Specific disease entities live on their own pages: [[atherosclerosis]], [[heart-failure]]. Cellular specifics are on [[cardiomyocytes]].

---

## The two coupled subsystems

### 1. Vascular aging

#### Arterial stiffening

The most mechanistically central and best-quantified vascular aging phenotype. Elastic arteries (aorta, carotid) progressively stiffen with age due to:

- **Elastin degradation** — elastin has a biological half-life of decades; the existing elastin scaffold fragments and is not effectively replaced in adult life.
- **Collagen accumulation and crosslinking** — age-related non-enzymatic glycation produces advanced glycation end-products (AGEs) that crosslink collagen fibrils, further increasing wall stiffness.
- **Medial calcification** — calcium deposition in the media and internal elastic lamina, distinct from intimal (atherosclerotic) calcification.
- **VSMC phenotypic switch** — vascular smooth muscle cells shift from contractile toward synthetic/fibroblastic phenotype with age [^donato2018].

The functional consequence is a rise in **pulse wave velocity (PWV)**, the gold-standard non-invasive measure. Carotid-femoral PWV rises approximately 50% between the 3rd and 7th decades [^mitchell2010] — an increase with independent cardiovascular risk predictive value (HRs of 1.5–2.5 per 1 SD increase for major cardiovascular events in prospective cohort analyses) [^mitchell2010]. #gap/needs-replication for the absolute ~50% figure; range in published studies varies by cohort.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — collagen/elastin biology and AGE crosslinking are universal |
| Phenotype conserved in humans? | yes — PWV rise with age confirmed in large human cohorts |
| Replicated in humans? | yes |

**Isolated systolic hypertension** in the elderly (~70% of hypertension in adults >70) is primarily a consequence of arterial stiffening rather than increased peripheral resistance: the aorta loses its Windkessel buffering capacity, transferring systolic pressure into large-artery walls rather than absorbing it [^lakatta2003].

#### Endothelial dysfunction

The endothelium progressively loses the capacity to synthesize and release nitric oxide (NO) in response to shear stress (assessed by flow-mediated dilation, FMD). Key mechanisms [^donato2018]:

- Reduced expression and activity of endothelial nitric oxide synthase (eNOS).
- Increased oxidative stress (superoxide scavenges NO to form peroxynitrite, reducing bioavailability).
- Accumulation of senescent endothelial cells — senescent endothelium expresses a distinct SASP that promotes local inflammation and impairs vasodilation. #gap/needs-replication — human CEC (circulating endothelial cell) senescence quantification methodologies are not yet standardized.

#### Venous aging — chronic venous disease

The venous side of vascular aging is dominated not by stiffening but by **valve incompetence + vein-wall ECM remodeling**, producing varicose veins and chronic venous insufficiency. The mechanistic core — MMP/TIMP imbalance degrading elastin and collagen, leukocyte–endothelial inflammation, and stretch/hypoxia signaling under sustained **ambulatory venous hypertension** — parallels the arterial ECM story but plays out in a low-pressure, gravity-loaded, valve-dependent system. Superficial-vein reflux rises steeply with age (the deep system does not), making this a strongly age-dependent and largely human-specific phenotype. See the dedicated page [[chronic-venous-disease]] and the [[veins]] tissue page for full detail and citations [^bergan_cva][^maurins_cva].

---

### 2. Cardiac aging

#### Cardiomyocyte loss and fibrosis

Human cardiomyocytes have extremely limited regenerative capacity. Carbon-14 retrospective birth-dating established that cardiomyocyte turnover is approximately 0.8% per year at age 20, declining to <0.3%/yr at age 75, with roughly 39% of the left ventricular CM population exchanged over a lifetime [^bergmann2015]. Total CM number remains **constant** from birth through adult life (R=0.01, p=0.96 vs age); the CM number trajectory does not decline in healthy aging per Bergmann 2015 [^bergmann2015].

> **Note:** The verified cardiomyocytes.md page found that human adult CMs are ~73.6% mononucleated / ~25.5% binucleated / ~1.0% trinucleated — not the long-cited 25–33% mononucleated figure from rodent-extrapolated assumptions. Ploidy and cell count interpretations may differ across earlier studies.

Despite stable CM numbers, the aged myocardium accumulates **reactive fibrosis** — replacement of lost CMs and interstitial collagen deposition driven by TGF-β / RAAS / mechanical signals. Fibrosis increases chamber stiffness and impairs electrical conduction.

#### Cardiomyocyte senescence (non-canonical SASP)

Cardiomyocytes acquire senescence markers with aging via **length-independent telomere damage** — replication-independent DNA damage at telomeric regions — rather than through replicative exhaustion (post-mitotic cells do not replicate) [^anderson2019]. Key verified features from Anderson 2019 (local PDF):

- Senescent CMs show DNA damage foci (53BP1/γH2AX) at telomeric loci without critical telomere shortening.
- The CM SASP is **non-canonical** — dominated by Tgfb2, Gdf15, and Edn3. Pro-inflammatory SASP genes (Il-1α, Il-1β, Il-6, Cxcl1, Cxcl2) were **not differentially expressed** between young and old purified CMs, explicitly distinguishing CM senescence from the classical inflammatory SASP described in fibroblasts and other cell types.
- Navitoclax (ABT263; BCL-xL/BCL-2/BCL-w inhibitor) at 50 mg/kg/day (2-week intermittent schedule) cleared senescent CMs in aged wild-type C57BL/6 mice and reduced CM hypertrophy (cross-sectional area) and fibrosis (Sirius Red %). Ejection fraction was **not significantly improved** by navitoclax treatment (Figure 8E shows NS); the authors note that cardiac function may be maintained by compensatory CM regeneration following senescent-cell clearance [^anderson2019].

#### Concentric LV hypertrophy

Left ventricular wall thickness increases with age as a compensatory response to the afterload imposed by arterial stiffening. This concentric hypertrophy is distinct from the eccentric hypertrophy of volume-overload states. Mechanistically: increased systolic wall stress → cardiomyocyte hypertrophy (protein synthesis programs, increased sarcomere content) rather than proliferation. Contributes to diastolic dysfunction.

#### Diastolic dysfunction and HFpEF predisposition

Myocardial relaxation slows with age due to:

- Impaired sarcoplasmic reticulum Ca²⁺ reuptake (reduced SERCA2a expression/activity with age).
- Increased myocardial collagen and cross-linking → passive stiffness.
- Cardiomyocyte hypertrophy → slower cross-bridge cycling kinetics.

The net result is an age-related shift in LV filling pattern from E-dominant (early, passive) to A-dominant (late, atrial contraction-dependent), measurable by echocardiographic Doppler. This predisposes older adults to **HFpEF** (heart failure with preserved ejection fraction), which accounts for ~50% of heart failure in adults >70 and disproportionately affects older women. See [[heart-failure]] for disease-level detail.

#### Conduction system changes

The sinus node loses pacemaker cells with age (~75% loss from infancy to old age in some histological series — #gap/unsourced, requires primary pathology data). AV node fibrosis slows AV conduction. Consequences: age-related sinus bradycardia, increased PR interval, susceptibility to atrial fibrillation (the prevalence of AF rises from ~1% at age 60 to >10% at age 80).

#### Cardiac progenitor cell (CPC) senescence

Beyond the cardiomyocyte, the cardiac progenitor cell compartment accumulates senescent cells with age. Lewis-McDougall 2019 (Aging Cell) used human endomyocardial biopsies (n=35, age 32–86) and found that over 50% of CPCs in individuals older than 70 were senescent by multiple criteria (p16/p21 positivity, SA-β-galactosidase, functional impairment) [^lewismcdougall2019]. Senescent CPCs exhibited impaired proliferation and differentiation and secreted factors damaging to healthy CPCs. In vivo clearance of senescent cells in aged NSG mice (MI model) with senolytics (dasatinib + quercetin and AP20187) restored cardiac regenerative capacity.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — human biopsies used directly |
| Phenotype conserved in humans? | yes — human CPC senescence fractions measured |
| Replicated in humans? | in-progress — no independent replication with same methodology |

---

## Unified hallmark linkage

Cardiovascular aging is a **convergent integrative phenotype** — multiple [[hallmarks-of-aging]] act in parallel:

| Hallmark | Cardiovascular manifestation |
|---|---|
| [[cellular-senescence]] | Senescent CMs (Anderson 2019), endothelial cells, VSMCs, CPCs (Lewis-McDougall 2019) |
| [[mitochondrial-dysfunction]] | Declining cardiac ETC capacity; ROS-driven endothelial oxidative stress; VSMC mtDNA mutations |
| [[chronic-inflammation]] | SASP-driven vascular inflammation; IL-1β-mediated atherogenesis (CANTOS evidence — see [[atherosclerosis]]) |
| [[altered-intercellular-communication]] | AGE-RAGE axis; fibroblast-CM paracrine remodeling; TGF-β medial fibrosis signaling |
| [[stem-cell-exhaustion]] | CPC senescence and impaired myocardial regenerative capacity (Lewis-McDougall 2019) |
| [[deregulated-nutrient-sensing]] | mTOR activation in hypertrophic CMs; AMPK decline reduces mitochondrial biogenesis |
| [[epigenetic-alterations]] | Epigenetic clock acceleration in cardiovascular tissue; DNMT3A CHIP clonal expansion → CHD risk |

---

## Major clinical phenotypes (cross-links)

| Phenotype | Dominant aging mechanism |
|---|---|
| Isolated systolic hypertension | Arterial stiffening → loss of Windkessel buffering |
| [[atherosclerosis]] | Cumulative endothelial injury + senescent foam cells (Childs 2016) |
| [[heart-failure]] (HFpEF-dominant in elderly) | Diastolic dysfunction + LV hypertrophy + fibrosis |
| Atrial fibrillation | Atrial fibrosis + conduction system remodeling |
| Calcific aortic stenosis | Valvular calcification — overlapping mechanisms with medial calcification |
| Cardiac amyloidosis (ATTR-wt) | Wild-type transthyretin aggregation — incidence rises steeply after age 70; underdiagnosed |
| Conduction system disease | Sinus node cell loss + AV node fibrosis |

---

## Key biomarkers of cardiovascular aging

| Biomarker | What it reflects | Clinical use |
|---|---|---|
| Carotid-femoral PWV | Aortic stiffness — integrates structural changes | Research gold-standard; limited clinical availability |
| NT-proBNP / BNP | Myocardial wall stress; CM stretch | HF diagnosis/monitoring; age-adjusted thresholds required |
| High-sensitivity cTnI/T (hs-cTn) | Ongoing myocardial injury — elevated at lower threshold in aging | Age-related baseline elevation is a confound |
| hs-CRP | Systemic inflammation (IL-6-driven acute-phase) | Cardiovascular risk (CANTOS validated) |
| GDF15 | Stress-response cytokine; SASP component; CM-enriched in Anderson 2019 non-canonical SASP | Emerging risk/aging biomarker; no standard cutoffs |
| Flow-mediated dilation (FMD) | Endothelial NO-dependent vasodilation | Research standard for endothelial function |

---

## Therapeutic landscape

### Disease-modifying (proven cardiovascular risk reduction)

Standard guideline-directed medical therapy (GDMT) for hypertension, atherosclerosis, and HFrEF is well-established. Key points where aging biology intersects clinical evidence:

- **SGLT2 inhibitors** (empagliflozin, dapagliflozin): Demonstrated HF hospitalization and cardiovascular mortality reduction across both HFrEF and HFpEF. Mechanism may include: ketone utilization efficiency, reduced pre/afterload, anti-fibrotic effects, mitochondrial effects. SGLT2i are **paradigm-shifting** in that they benefit the aged HFpEF phenotype where most prior heart failure drugs failed. See [[heart-failure]].
- **RAAS blockade** (ACE-I, ARB, MRA): Reduces fibrosis and LV remodeling; MRAs particularly effective in HFpEF for natriuresis.
- **Statins**: Beyond LDL-lowering — pleiotropic anti-inflammatory and endothelial-protective effects.

### Aging-targeted interventions (varying evidence levels)

| Intervention | Mechanism | Evidence level | Notes |
|---|---|---|---|
| **Aerobic exercise** | Reduces arterial stiffness; maintains cardiac output; mitochondrial biogenesis | Strong (human) | Most robust aging-targeted intervention for cardiovascular system #gap/dose-response-unclear for optimal type/dose |
| **Caloric restriction** | mTOR inhibition; AMPK activation; reduces oxidative stress | Limited (human) | CALERIE trial showed modest cardiovascular biomarker benefits; 2-year data |
| **Rapamycin / rapalogs** | mTOR inhibition; cardiac aging reversal in aged mice | Preclinical (mice) | Harrison 2009 lifespan extension; Miller 2014 dose-response; **cardiac function benefits specifically documented** #gap/needs-human-replication |
| **Senolytics** (navitoclax) | Clears senescent CMs; reduces hypertrophy and fibrosis | Preclinical (mice) | Anderson 2019 — reduced CM cross-sectional area and fibrosis in aged mice; EF not significantly changed [^anderson2019] #gap/needs-human-replication |
| **Senolytics** (D+Q, navitoclax) for atherosclerosis | Clears senescent foam cells | Preclinical (mice) | Childs 2016 — senescent foam cell clearance reduced atherosclerotic lesion burden [^childs2016] #gap/needs-human-replication |
| **Senolytics** (D+Q, AP20187) for CPC regeneration | Restores CPC proliferative capacity | Preclinical (mice) | Lewis-McDougall 2019 — in vivo cardiac regeneration improvement [^lewismcdougall2019] #gap/needs-human-replication |
| **GDF11** | Circulating rejuvenation factor (contested) | Contested | Loffredo 2013 (cell) — reversals in cardiac hypertrophy; Egerman 2014 disputed; outcome remains #gap/contradictory-evidence |

---

## Senescent foam cells and atherosclerosis

Childs et al. 2016 (Science) demonstrated that senescent intimal foam cells are present throughout atherosclerotic plaques in both mouse models and human coronary arteries, and are **deleterious at all stages of atherosclerosis** [^childs2016]. Genetic (p16^INK4a^-directed apoptosis) and pharmacological (navitoclax) clearance of senescent cells in atherosclerosis-prone mice (ApoE⁻/⁻) reduced lesion burden and improved plaque stability. This placed cardiovascular aging firmly within the senolytic therapeutic framework. For disease-level detail see [[atherosclerosis]].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — senescent foam cells identified in human coronary plaques |
| Phenotype conserved in humans? | yes — plaque senescence markers confirmed in human tissue |
| Replicated in humans? | no — intervention studies preclinical only #gap/needs-human-replication |

---

## Vascular aging and senescence: VSMC and endothelial cell biology

Aged vascular walls accumulate senescent cells in the endothelium, media (VSMCs), and adventitia. VSMC senescence is driven by replicative exhaustion, oxidative stress, and mitogenic signals (PDGF in response to medial injury). Senescent VSMCs:

- Lose contractile smooth muscle markers (SM-actin, SM-MHC).
- Adopt a SASP that promotes inflammation, matrix remodeling, and calcification.
- Exhibit resistance to apoptosis (BCL-2 family upregulation is a general feature of senescent cells and is the target rationale for navitoclax in vascular senescence — specific VSMC BCL-2/BCL-xL data not provided in Donato 2018 review; see Childs 2016 and Anderson 2019 for senolytic rationale). #gap/unsourced for VSMC-specific BCL-2/BCL-xL data in this citation [^donato2018].

Endothelial senescence promotes a pro-thrombotic, pro-inflammatory endothelial phenotype with impaired barrier function and reduced eNOS activity — the cellular correlate of flow-mediated dilation decline.

---

## Sex differences

### Risk trajectory and the menopausal transition

Premenopausal women have substantially lower CVD incidence than age-matched men — a gap of several years in clinical event timing (the AHA statement characterises this as women developing coronary heart disease "several years later than men"; the commonly cited "~10 year" figure is a population-level approximation that varies by endpoint and cohort). After [[menopause]] the gap narrows markedly, and by the 8th decade women's absolute CVD mortality converges with or exceeds men's, making CVD the leading cause of death in women overall [^elkhoudary2020]. This pattern anchors the **estrogen-cardioprotection concept**: endogenous estradiol (see [[estradiol]]) exerts vasculoprotective effects via nuclear receptor [[esr1]] (ERα) and membrane receptor [[gper]], broadly promoting endothelial NO production, limiting vascular inflammation, and attenuating smooth muscle proliferation.

**Timing hypothesis — nuance required.** The vasculoprotective effects of estrogen appear to be **timing-dependent**. Menopausal hormone therapy (MHT) initiated within approximately 10 years of menopause onset (the "window of opportunity") is associated with reduced CVD incidence in observational cohorts and some trial arms, possibly reflecting a substrate-dependent response: a healthy endothelium can respond to estrogen-mediated NO signalling, whereas an already-diseased artery cannot. MHT initiated late (>10 years post-menopause) did not reduce cardiovascular events in the Women's Health Initiative RCT and increased risk in some subgroups — an important caveat to any simple "estrogen is cardioprotective" framing [^elkhoudary2020]. #gap/contradictory-evidence The biological basis of the timing window is not fully elucidated; leading hypotheses involve cumulative atheromatous disease occluding the estrogenic signalling benefit.

### Sex differences in disease expression

Beyond incidence timing, women and men express cardiovascular aging differently across multiple phenotypic dimensions:

- **HFpEF predominance.** Women account for the majority of HFpEF cases; conversely, men predominate in HFrEF. The sex-HFpEF association is not fully explained by older age at diagnosis — biological factors including higher myocardial fibrosis rates, distinct calcium-handling kinetics, and hormonal withdrawal likely contribute [^lam2019]. The page [[heart-failure]] carries fuller mechanistic detail. #gap/needs-replication for causal mechanism vs associative observation.
- **Microvascular disease and INOCA/MINOCA.** Women are disproportionately represented among patients with ischemia with non-obstructive coronary arteries (INOCA) and myocardial infarction with non-obstructive coronary arteries (MINOCA) — presentations that are structurally absent from traditional obstructive-atherosclerosis frameworks and historically under-diagnosed when symptom recognition relied on male-typical anginal patterns [^elkhoudary2020]. Coronary microvascular dysfunction and vasospasm are the dominant mechanistic substrates.
- **Plaque morphology.** Autopsy and intracoronary imaging studies suggest that plaque erosion (thrombus overlying an intact fibrous cap without rupture) is more common in younger women who smoke, whereas fibrous-cap rupture predominates in older women and in men across age groups [^sato2022]. The clinical implication is that erosion-driven ACS may be less detectable by calcium scoring and may respond differently to interventional strategies, though this domain carries significant uncertainty owing to selection bias in autopsy series. #gap/needs-replication
- **Later onset.** First coronary events occur on average several years later in women than men (the AHA statement uses "several years"; the "~10 year" approximation is widely cited in the literature but represents a population-level average that varies by endpoint and is not explicitly quantified in [^elkhoudary2020]) — a clinically important consideration for risk-stratification thresholds. #gap/needs-replication for the specific year-gap figure.
- **Historical under-diagnosis and under-treatment.** Women have been enrolled at lower rates in cardiovascular trials (forming only ~20–25% of cohorts in landmark HF trials [^lam2019]) and have historically been under-referred for angiography and revascularization. Under-representation in trials means that evidence-based treatment guidelines rest predominantly on male-derived data.

### Men's cardiovascular aging profile

Men accumulate atherosclerotic burden earlier and more steeply, tracking with earlier LDL oxidation susceptibility, higher lifetime inflammatory exposure, and — though contested — possible pro-atherogenic effects of androgens. Testosterone's cardiovascular role remains unresolved: the TRAVERSE RCT (n=5,246 men ages 45–80 with hypogonadism and pre-existing or high CV risk) found testosterone gel non-inferior to placebo on major adverse cardiovascular events (MACE: 7.0% vs 7.3%, HR 0.96, 95% CI 0.78–1.17), but reported higher incidence of atrial fibrillation, pulmonary embolism, and acute kidney injury in the testosterone arm [^traverse2023]. This precludes a straightforward "testosterone is cardioprotective in men" conclusion; see [[testosterone]] for full evidence. #gap/contradictory-evidence

### Longevity connection

Sex differences in cardiovascular aging are a concrete contributor to the [[female-longevity-advantage]]: women's later and initially lower cardiovascular burden translates directly into lower all-cause mortality across the 6th–8th decades. Conversely, the post-menopausal convergence of CVD risk — occurring over compressed time compared with the decades of slower accumulation in men — may partly explain why women, despite living longer, spend a larger fraction of late life with multimorbidity.

---

## Limitations and gaps

- **Causality vs correlation**: It remains difficult to disentangle which cardiovascular aging features are causal drivers of clinical disease and which are epiphenomena of lifelong risk factor exposure. #gap/contradictory-evidence
- **Sex differences understudied**: HFpEF is 2× more common in women; vascular stiffening trajectories differ by sex. Most mechanistic aging studies have used male rodents. #gap/needs-human-replication
- **Senescent cell load quantification in humans**: No validated clinical assay for total myocardial or vascular senescent cell burden. p16/p21 tissue immunohistochemistry is research-only. #gap/no-mechanism for how to translate animal senolytic data to patient selection.
- **Non-canonical CM SASP clinical significance**: Anderson 2019 established that CM SASP lacks canonical inflammatory cytokines — but the paracrine significance of Tgfb2/Gdf15/Edn3 secretion in vivo is not fully characterized. #gap/needs-replication
- **ATTR-wt cardiac amyloidosis**: Mechanism of age-related transthyretin misfolding and aggregation involves proteostasis and chaperone decline, but the exact trigger is unclear. Prevalence likely underestimated prior to widespread tafamidis availability. #gap/no-mechanism
- **CPC identity**: Whether true cardiac progenitor cells capable of de novo CM generation exist in the adult human heart remains contested (Bergmann 2015 14C data establish very low turnover, not its mechanism). #gap/contradictory-evidence
- **GDF11 controversy**: Whether circulating GDF11 declines with age and rejuvenates aged myocardium remains unresolved after conflicting studies. #gap/contradictory-evidence

---

## See also

- [[cardiomyocytes]] — cell-type page (verified-partial); Bergmann 2015 turnover data; Anderson 2019 non-canonical CM SASP; Lewis-McDougall 2019 CPC senescence
- [[atherosclerosis]] — R8b parallel page; Childs 2016 senolytic atherosclerosis
- [[heart-failure]] — R8b parallel page; HFpEF mechanistic detail; SGLT2 inhibitor evidence
- [[cellular-senescence]] — hallmark page (stub)
- [[chronic-inflammation]] — hallmark page (stub)
- [[mitochondrial-dysfunction]] — hallmark page (stub)
- [[sasp]] — verified; canonical vs non-canonical SASP distinction
- [[interventions/pharmacological/senolytics]] — verified-partial; senolytic drug class overview

---

## Footnotes

[^lakatta2003]: doi:10.1161/01.CIR.0000048893.62841.F7 · Lakatta EG, Levy D · Circulation 2003;107:139-146 · review · model: human · classic comprehensive review of cardiovascular aging; arterial stiffening, LV hypertrophy, diastolic dysfunction, and their coupling; >1,200 citations; closed-access, PDF not locally available #gap/no-fulltext-access

[^mitchell2010]: doi:10.1161/CIRCULATIONAHA.109.886655 · Mitchell GF et al. · Circulation 2010;121:505-511 · prospective observational cohort · n=2,232 Framingham Heart Study offspring · carotid-femoral PWV as predictor of cardiovascular events; PWV rise ~50% from 3rd to 7th decade; >2,100 citations; closed-access, PDF not locally available #gap/no-fulltext-access

[^north2012]: doi:10.1161/CIRCRESAHA.111.246876 · North BJ, Sinclair DA · Circ Res 2012;110:1097-1108 · review · model: human + preclinical · introductory review of longevity pathways (sirtuins, mTOR, AMPK, IGF-1) in cardiovascular aging; frames how CR-mediated longevity gene activation may protect the aging cardiovascular system; local PDF available

[^anderson2019]: [[studies/anderson-2019-cm-senescence-sasp]] · doi:10.15252/embj.2018100492 · Anderson R et al. · EMBO J 2019;38:e100492 · in-vivo + in-vitro · model: mixed-sex aged C57BL/6 mice (22–24 mo) + isolated CMs · n=5–8 mice per group for navitoclax experiment · length-independent telomere damage (TAF) drives CM senescence; non-canonical SASP (Tgfb2/Gdf15/Edn3; classical inflammatory SASP genes not differentially expressed in purified CMs); navitoclax (ABT263) 50 mg/kg/day intermittently for 2 weeks reduces CM hypertrophy and fibrosis; EF not significantly changed; local PDF available

[^bergmann2015]: [[studies/bergmann-2015-cm-turnover]] · doi:10.1016/j.cell.2015.05.026 · Bergmann O et al. · Cell 2015;161:1566-1575 · retrospective birth-dating (¹⁴C) + stereology · n=29 stereology (age 1 mo–73 yr); n=51 ¹⁴C dating (age 8–75 yr) · turnover ~0.8%/yr at age 20, declining to <0.3%/yr at age 75; ~39% LV CMs exchanged over lifetime; total CM number constant (R=0.01, p=0.96); local PDF available

[^childs2016]: doi:10.1126/science.aaf6659 · Childs BG et al. · Science 2016;354:472-477 · in-vivo + human tissue · model: ApoE⁻/⁻ mouse + human coronary artery specimens · genetic and pharmacological senescent cell clearance reduces atherosclerotic burden; senescent foam cells identified in human plaques; >1,000 citations; closed-access, PDF not locally available #gap/no-fulltext-access

[^lewismcdougall2019]: [[studies/lewis-mcdougall-2019-cpc-senescence]] · doi:10.1111/acel.12931 · Lewis-McDougall FC et al. · Aging Cell 2019;18:e12931 · observational (human biopsies) + in-vivo (NSG mouse MI model) · n=35 human biopsies (age 32–86) · >50% CPCs senescent in individuals >70; senolytic clearance (D+Q + AP20187) restores cardiac regenerative capacity in vivo; gold OA, local PDF available

[^donato2018]: doi:10.1161/CIRCRESAHA.118.312563 · Donato AJ, Machin DR, Lesniewski LA · Circ Res 2018;123:825-848 · review · model: human + preclinical · comprehensive review of vascular aging mechanisms: large artery stiffening, endothelial dysfunction (EDD/NO axis), oxidative stress (NADPH oxidase, eNOS uncoupling), inflammation (NFkB), senescence in ECs and VSMCs, and longevity pathway countermeasures (CR, mTOR, AMPK, SIRT1, Klotho); local PDF available

[^bergan_cva]: doi:10.1056/NEJMra055289 · Bergan JJ et al. · *N Engl J Med* 2006;355(5):488-498 · review (landmark) · PMID 16885552 · chronic venous disease mechanism — valve incompetence → reflux → venous hypertension → inflammation. See [[chronic-venous-disease]] for full treatment
[^maurins_cva]: doi:10.1016/j.jvs.2008.04.029 · Maurins U et al. (Bonn Vein Study) · *J Vasc Surg* 2008;48(3):680-687 · observational, population-based · n=3072 · superficial-vein reflux rises markedly with age, deep does not; population CEAP distribution. See [[chronic-venous-disease]]

[^elkhoudary2020]: doi:10.1161/CIR.0000000000000912 · El Khoudary SR et al. (AHA Scientific Statement) · *Circulation* 2020;142(25):e506–e532 · systematic review / scientific statement · model: human epidemiology · menopause transition & CVD risk; estrogen-cardioprotection concept; timing-of-MHT evidence (WHI and later studies); INOCA/MINOCA epidemiology; midlife as critical prevention window; >600 citations. Closed-access; PMID 33251828.

[^lam2019]: doi:10.1093/eurheartj/ehz835 · Lam CSP et al. · *European Heart Journal* 2019;41(12):1252–1259 · review · model: human (trial + registry data) · women predominate in HFpEF; men in HFrEF; women under-enrolled in HF clinical trials (~20–25% of cohorts); biological and trial-evidence gaps in sex-disaggregated HF care. Closed-access; PMID 31800034.

[^sato2022]: doi:10.1007/s11883-022-00980-5 · Sato Y et al. · *Current Atherosclerosis Reports* 2022;24(3):119–130 · review · model: human (intracoronary imaging + autopsy series) · plaque erosion more common in younger women smokers; fibrous-cap rupture predominates in older women and in men; sex differences in risk factors and coronary calcification patterns; historically under-recognised in women. PMID 35175547.

[^traverse2023]: doi:10.1056/NEJMoa2215025 · Lincoff AM et al. (TRAVERSE investigators) · *N Engl J Med* 2023;389(2):107–117 · rct · n=5,246 men (age 45–80; hypogonadism + elevated CV risk) · testosterone gel vs placebo; MACE 7.0% vs 7.3% (HR 0.96; non-inferior); higher rates of AF, pulmonary embolism, and acute kidney injury in testosterone arm; median follow-up 33 months. PMID 37326322.
