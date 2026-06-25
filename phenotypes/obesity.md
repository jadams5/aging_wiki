---
type: phenotype
aliases: [obesity, adiposity, excess adiposity, overweight, adipose excess]
icd-10: E66
icd-11: 5B81
affected-tissues: ["[[adipose-tissue]]", "[[liver]]", "[[skeletal-muscle]]", "[[pancreas]]"]
underlying-hallmarks: ["[[chronic-inflammation]]", "[[deregulated-nutrient-sensing]]", "[[cellular-senescence]]", "[[altered-intercellular-communication]]", "[[mitochondrial-dysfunction]]"]
typical-onset: "Excess adiposity can begin at any life stage; clinical obesity often recognized in young-to-middle adulthood; the shift from weight gain to weight-induced morbidity accumulates across decades"
prevalence-65plus: "~41.5% adults ≥60 (US NHANES 2017–March 2020, Table 5; crude estimate); the NHANES report does not break out 60–79 vs ≥80 separately — a lower prevalence in the oldest-old is expected due to survivor effect and frailty-associated weight loss but is not quantified in this source #gap/needs-replication"
literature-checked-through: 2026-06-11
verified: true
verified-date: 2026-06-11
verified-by: claude
verified-scope: "Global BMI Mortality Collaboration (Lancet 2016) and NHANES 2017–March 2020 (CDC NHSR 158) verified against full PDFs. Lee 2022 Cell Metabolism closed-access — abstract cross-checked via PubMed, volume/issue/pages corrected. Perna 2026 CLNESP DOI corrected (wrong DOI in original; PMID verified). Quantitative claims in review-article footnotes (Zamboni 2021, Park 2024, Zhang 2024, Rubio 2022, Liang 2024, Vasamsetti 2023, Tenda 2024, Zhu 2024) not independently PDF-verified against their full texts — those are review articles supporting mechanistic framing; recommend cross-check on next lint pass."
---


# Obesity / Excess Adiposity

Excess adiposity — the abnormal or excessive accumulation of body fat — is a multisystem phenotype that accelerates aging across at least five [[hallmarks-of-aging|hallmarks]] and raises lifetime risk for [[type-2-diabetes]], [[atherosclerosis]], hypertension, [[cancer]], and [[masld]]. While **BMI** (body mass index = kg/m²) is the standard clinical metric, the biological driver is **visceral adipose tissue (VAT)** accumulation rather than total fat mass. Two individuals with the same BMI can have very different cardiometabolic risk profiles depending on fat distribution.

Adipose tissue is not an inert energy depot — it is an active **endocrine and immune organ** secreting leptin, adiponectin, resistin, interleukin-6, TNF-α, and dozens of additional adipokines that regulate energy homeostasis, insulin sensitivity, inflammation, and vascular tone [^park2024-adipokines]. In excess (particularly visceral) adiposity, this secretome becomes pro-inflammatory and pro-senescent, forming a feedback loop that amplifies systemic aging [^zamboni2021-inflammaging].

## Classification by BMI

| Category | BMI (kg/m²) | ICD-10 subtype |
|---|---|---|
| Underweight | < 18.5 | — |
| Normal | 18.5–24.9 | — |
| Overweight | 25.0–29.9 | E66.09 |
| Obesity class I | 30.0–34.9 | E66.09 |
| Obesity class II | 35.0–39.9 | E66.09 |
| Obesity class III (severe) | ≥ 40.0 | E66.01 |

WHO thresholds were derived from Western cohorts. Adjusted cut-points exist for Asian populations (overweight ≥ 23 kg/m², obesity ≥ 27.5 kg/m²) given higher cardiometabolic risk at lower BMI due to greater visceral-to-subcutaneous fat ratios.

### Why BMI is insufficient

BMI captures neither fat distribution nor fat quality:

- **Visceral adiposity** (omental + retroperitoneal + pericardial) is metabolically active, pro-inflammatory, and drains directly into the portal circulation — driving hepatic insulin resistance, dyslipidemia, and systemic inflammation [^vasamsetti2023-visceralfat].
- **Subcutaneous fat** (especially gluteo-femoral depots) is comparatively protective — associated with improved insulin sensitivity and lower cardiovascular risk.
- **Sarcopenic obesity** (high fat + low muscle mass) confers higher risk than fat mass alone and is increasingly prevalent in older adults — see [[sarcopenia]].
- **Normal-weight metabolic obesity (TOFI, "thin outside fat inside"):** ~25% of normal-BMI adults have metabolically obese phenotypes driven by visceral accumulation [^perna2026-dxa].

Better metrics for risk stratification: waist circumference, waist-to-hip ratio, waist-to-height ratio, DXA-derived VAT, or visceral adiposity index (VAI). Waist > 88 cm (women) / 102 cm (men) by NCEP-ATP III is the widely-used field criterion.

## Prevalence

**United States (NHANES 2017–March 2020):** ~41.9% of adults ≥20 have obesity (BMI ≥ 30; age-adjusted); severe obesity (BMI ≥ 40) affects ~9.2% [^stierman2021-nhanes]. By age group (crude): 20–39 yr: 39.8%, 40–59 yr: 44.3%, 60 and over: 41.5% (Table 5). The NHANES report groups all adults ≥60 together; a lower prevalence in the oldest-old is expected (survivor effect, frailty-associated weight loss) but is not separately quantified in this source. #gap/needs-replication The age-specific pattern — rising obesity burden into middle adulthood, then modestly declining in older cohorts — confounds aging studies that use age-matched BMI groups without tracking the obese-survivor bias.

**Global:** WHO estimates ~650 million adults with obesity worldwide (2016); prevalence has roughly tripled since 1975 [^who-obesity]. The condition is no longer predominantly a high-income-country phenomenon — low- and middle-income countries now carry a large and growing burden.

## BMI–mortality relationship: the U/J-shaped curve and the obesity paradox

The largest individual-participant-data meta-analysis to date — 239 prospective studies, >10 million participants (Global BMI Mortality Collaboration, *Lancet* 2016) — found a **J-shaped relationship** between BMI and all-cause mortality in never-smokers with no chronic disease: lowest mortality in the BMI 20–<25 kg/m² range (age-dependent nadir: BMI ≈22 kg/m² at age 35–49, ≈23 at age 50–69, ≈24 at age 70–89), rising steeply above BMI 25 [^global-bmi-2016]. Each 5 kg/m² increment above 25 was associated with ~31% higher all-cause mortality (HR 1.31, 95% CI 1.29–1.33 in the primary prespecified analysis of ~4 million never-smokers without chronic disease).

However, disease-specific and clinical subpopulation analyses complicate this picture:

- **Obesity paradox in existing disease:** In patients with established heart failure, coronary artery disease undergoing percutaneous coronary intervention, or COPD, overweight and class-I obesity are sometimes associated with *lower* short-to-medium-term mortality than normal BMI [^tenda2024-copd-bmi]. Proposed mechanisms include: metabolic reserve during catabolism, confounding by lean mass (muscle has cardioprotective effects), reverse causation (established disease causes weight loss before events), and survivor bias.
- **Critical framing:** Most obesity-paradox analyses are confounded by smoking (smokers are leaner and die younger), pre-existing disease (which causes both weight loss and death), and the conflation of subcutaneous with visceral fat. When these confounders are addressed — e.g., restricting to healthy never-smokers — the paradox largely disappears [^global-bmi-2016].
- **Older adults:** The BMI–mortality curve flattens with age. At ≥70, excess mortality from obesity is attenuated, and underweight (< 22) becomes a stronger mortality predictor. This does NOT mean obesity is harmless in older adults — visceral fat and sarcopenic obesity remain pathological — but it means BMI alone is an especially poor predictor in this age group. #gap/contradictory-evidence

The **discordance between training-era citations and current evidence** is real here: older studies using BMI alone without adjusting for fat distribution, smoking, or frailty systematically underestimated the aging-specific harms of visceral adiposity. Recent DXA-based longitudinal data show VAT measures predict cardiometabolic events more precisely than BMI in middle-to-older-aged adults [^zhu2024-dxa-vat].

## Adipose tissue as an endocrine and inflammatory organ

### Adipokines: signal dysregulation in obesity

In lean physiology, adipose tissue secretes a balanced endocrine milieu [^park2024-adipokines]:

- **Leptin** — satiety hormone; signals energy sufficiency to the hypothalamus; anti-inflammatory at physiologic levels
- **Adiponectin** — insulin-sensitizing, anti-inflammatory, cardioprotective; activates [[ampk]] in muscle and liver; inversely proportional to fat mass
- **Resistin** — links adiposity to insulin resistance (primarily in rodents; less clear in humans)

In obesity, this balance shifts [^zamboni2021-inflammaging]:

- Leptin rises markedly → central leptin resistance (hypothalamus fails to respond), perpetuating hyperphagia; peripheral hyperleptinemia promotes inflammation
- Adiponectin falls → loss of AMPK activation, reduced insulin sensitivity, pro-inflammatory signaling
- Visceral fat secretes high levels of IL-6, TNF-α, MCP-1 (CCL2), PAI-1, and CRP — creating a sustained low-grade inflammatory state (the adipose component of [[chronic-inflammation]])

This adipokine dysregulation is a canonical mechanism by which obesity engages [[altered-intercellular-communication]]: the adipose secretome enters systemic circulation and alters signaling in remote organs (liver, skeletal muscle, vasculature, brain).

### Adipose tissue senescence

A growing body of evidence shows that **senescent cells accumulate in [[tissues/white-adipose-tissue|adipose tissue]]** with aging and obesity, and that adipose-tissue SASP (senescence-associated secretory phenotype) drives systemic inflammation and accelerates age-related disease [^rubio2022-nutrition-senescence] [^liang2024-obesity-senescence]:

- p16^INK4a+ and p21^CIP1+ senescent preadipocytes and adipocytes are enriched in obese visceral fat
- These cells secrete a pro-inflammatory SASP (IL-6, IL-8, GDF15, MMP-3) that paracrinally reinforces senescence in neighboring cells and paracrinely impairs adipogenesis — filling adipose niches with dysfunctional, non-lipid-storing cells
- SREBP1c-PARP1 axis: in adipocytes, SREBP1c plays a role in genome stability by potentiating PARP1 activity during DNA repair (independent of SREBP1c's canonical lipogenic function); loss of SREBP1c accelerates adipocyte senescence and promotes immune cell infiltration in obese adipose tissue [^lee2022-srebp1c] #gap/no-fulltext-access
- Clearance of senescent cells (senolytics) in obese mice reduces adipose inflammation, improves metabolic parameters, and extends healthspan — see [[cellular-senescence]] for the intervention landscape

A 2024 review categorizes adipose-specific senescence changes into hallmark-aligned alterations: DNA damage accumulation, mitochondrial dysfunction, epigenetic reprogramming, secretory pathway amplification, and impaired lipogenesis [^zhang2024-adipose-senescence].

### Adipose–mitochondrial dysfunction link

Dysfunctional mitochondria accumulate in obese adipose tissue: reduced oxidative phosphorylation capacity, increased mitochondrial ROS, and impaired mitophagy contribute to lipotoxicity — export of excess free fatty acids (FFAs) into ectopic sites (liver → MASLD, skeletal muscle → lipotoxic insulin resistance, myocardium → cardiac steatosis) [^rubio2022-nutrition-senescence]. This is the mechanistic bridge to [[mitochondrial-dysfunction]] at the systemic level.

## Downstream phenotypes and hallmark connections

Obesity accelerates aging primarily through the sustained inflammatory and hormonal milieu it creates:

| Downstream phenotype | Primary mechanism |
|---|---|
| [[type-2-diabetes]] | Visceral fat → portal FFA → hepatic insulin resistance → ectopic fat → muscle insulin resistance; adipokine dysregulation; beta-cell lipotoxicity |
| [[atherosclerosis]] | Dyslipidemia (elevated TG, low HDL, small dense LDL); endothelial dysfunction; systemic inflammation; hypertension |
| [[masld]] | Portal delivery of FFAs from visceral fat directly to hepatocytes → steatosis → NASH progression |
| [[cancer]] | Adipose-derived estrogens (breast, endometrial); insulin/IGF-1 elevation; chronic inflammation; altered microbiome |
| [[sarcopenia]] | Myosteatosis (intramuscular fat infiltration); anabolic resistance; adipose-derived pro-inflammatory cytokines impair satellite cell function; see [[sarcopenia]] |
| Hypertension | Renin-angiotensin-aldosterone activation (adipose tissue is a RAAS source); increased sympathetic tone; sodium retention; endothelial dysfunction |

Hallmark-level acceleration:

- **[[chronic-inflammation]]** — elevated CRP, IL-6, TNF-α; adipose-derived inflammasome (NLRP3) activation
- **[[deregulated-nutrient-sensing]]** — chronic hyperinsulinemia; mTORC1 constitutive activation; reduced AMPK activity in liver/muscle; impaired SIRT1-mediated metabolic sensing
- **[[cellular-senescence]]** — visceral adipose senescent cell accumulation; SASP-mediated systemic paracrine aging acceleration
- **[[altered-intercellular-communication]]** — leptin resistance, adiponectin depletion, extracellular vesicle-mediated SASP propagation, adipose exosome trafficking of pro-inflammatory microRNAs [^liang2024-obesity-senescence]
- **[[mitochondrial-dysfunction]]** — adipose and hepatic mitochondrial dysfunction driven by ectopic lipid deposition and chronic ROS exposure

## The adiposity–caloric balance connection

Excess adiposity in the simulator model is the dominant output of cumulative positive [[caloric-restriction|caloric balance]] — adiposity is not a fixed trait but a dynamic tissue reservoir that responds (over months to years) to sustained energy surplus or deficit. The modeling node "BMI" proxies adiposity here but is an imperfect surrogate (see BMI limitations above).

**[[interventions/lifestyle/caloric-restriction|Caloric restriction]]** is the most directly mapped intervention for reducing adiposity and its downstream effects: it reduces visceral fat (more than subcutaneous), reverses adipose senescent cell burden, normalizes adipokine profiles, and reduces the chronic inflammation signature within weeks-to-months of initiation [^zamboni2021-inflammaging]. The caloric-restriction geroprotection entry in the simulator is intentionally limited to adiposity-related mechanisms; the fasting-independent aspects of CR biology (mTOR inhibition, AMPK activation, sirtuins) are captured separately via their own pathway nodes.

## Interventions targeting excess adiposity

| Intervention | Evidence tier | Effect on visceral fat | Notes |
|---|---|---|---|
| Caloric restriction + diet | Strong (RCT) | Preferential VAT reduction | [[interventions/lifestyle/caloric-restriction]] |
| Resistance + aerobic exercise | Strong (RCT) | Reduces VAT even without weight loss | [[exercise]] |
| GLP-1/GIP receptor agonists (semaglutide, tirzepatide) | Strong (Phase 3 RCT) | 14–20% body weight reduction; VAT reduction confirmed | Wieling 2021 STEP-1 (doi:10.1056/NEJMoa2032183); Jastreboff 2022 SURMOUNT-1; rapidly changing landscape |
| Bariatric surgery | Strong (long-term cohort/RCT) | Largest sustained VAT reduction; remission of T2D, hypertension, sleep apnea | Invasive; reserved for class III or class II + comorbidity |
| [[interventions/lifestyle/intermittent-fasting|Intermittent fasting]] | Moderate (RCT); similar to CR on per-calorie basis | Comparable VAT reduction to continuous CR when calories matched | Time-restricted eating (TRE) adds circadian benefit |
| Senolytics (dasatinib + quercetin) | Preclinical → limited human | Reduces adipose senescent cell burden in mice | Small human feasibility pilots exist; not yet powered for metabolic endpoints — [[cellular-senescence]] |

**Note on GLP-1 agonists:** This is the most rapidly evolving segment of the obesity pharmacotherapy landscape. Phase 3 RCT evidence for semaglutide (STEP trials) and tirzepatide (SURMOUNT trials) has substantially shifted the field since 2021. The wiki will lag here; always check ClinicalTrials.gov for the current portfolio. #gap/literature-checked-through-may-lag

## Hallmark mapping summary

- [[chronic-inflammation]] — adipose SASP, NLRP3 inflammasome, IL-6/TNF-α hypersecretion
- [[deregulated-nutrient-sensing]] — hyperinsulinemia, mTORC1 overactivation, impaired AMPK/SIRT1
- [[cellular-senescence]] — visceral preadipocyte + adipocyte senescence; SASP propagation
- [[altered-intercellular-communication]] — dysregulated adipokine secretome; exosome-mediated SASP dissemination
- [[mitochondrial-dysfunction]] — adipose + ectopic-lipid mitochondrial dysfunction; increased ROS

## Limitations and gaps

- **BMI vs adiposity mismatch** — clinical and epidemiological data overwhelmingly use BMI, but mechanistic biology is driven by VAT/total body fat. Translating BMI-based prevalence/mortality statistics into mechanistic claims requires caution. #gap/needs-replication
- **Obesity paradox resolution** — the paradox largely resolves with appropriate confounders but the literature remains contentious, especially in cardiological subpopulations. Individual studies still report protective associations in disease-specific cohorts [^tenda2024-copd-bmi]. #gap/contradictory-evidence
- **Causal architecture of adipose senescence** — whether senescent cell accumulation in adipose tissue is a cause or consequence of the systemic aging acceleration is not fully established in humans; mouse genetic evidence (p16-INK-ATTAC) supports causality but human pharmacological clearance data is limited. #gap/needs-human-replication
- **Exosome/extracellular vesicle mechanisms** — the role of adipose-derived EVs as SASP vectors is well-documented in vitro and in mouse models but human in vivo dose-response is unknown. #gap/needs-human-replication
- **Hypertension page** — referenced above as a downstream consequence but `[[phenotypes/hypertension]]` does not yet exist as a page. #stub
- **Adipose tissue page** — `[[adipose-tissue]]` referenced as `affected-tissues` but the tissue page does not yet exist. #stub

## Footnotes

[^stierman2021-nhanes]: doi:10.15620/cdc:106273 · Stierman B, Afful J, Carroll MD, et al. · *NCHS NHANES 2017–March 2020 Pre-pandemic Data Files* · National Health Statistics Reports no. 158, 2021 · NHANES measured height and weight in nationally representative US sample; obesity (BMI ≥ 30) age-adjusted prevalence 41.9% (95% CI 39.4–44.3) among adults ≥20; severe obesity (BMI ≥ 40) 9.2% (8.0–10.6); by age group (crude): 20–39 yr 39.8%, 40–59 yr 44.3%, 60+ yr 41.5% — the report does not separately break out 60–79 vs ≥80 yr · design: cross-sectional surveillance · model: population-based

[^global-bmi-2016]: doi:10.1016/s0140-6736(16)30175-1 · Global BMI Mortality Collaboration (Di Angelantonio E, Bhupathiraju SN, et al.) · *The Lancet* 2016;388(10046):776–786 · individual-participant-data meta-analysis · n=10,625,411 total (primary prespecified analysis: 3,951,455 never-smokers without chronic disease at baseline, 385,879 deaths) · 239 prospective studies in 4 continents · J-shaped BMI–mortality curve; lowest mortality in BMI 20–<25 kg/m² range; age-dependent nadir: BMI ≈22 at age 35–49, ≈23 at age 50–69, ≈24 at age 70–89; HR per 5 kg/m² increment above 25: 1.31 (95% CI 1.29–1.33); excess mortality below nadir also documented but not summarised as a single per-5-unit HR in the paper · design: individual-participant-data meta-analysis · model: human

[^zamboni2021-inflammaging]: doi:10.1016/j.exger.2020.111162 · Zamboni M, Nori N, Brunelli A, Zoico E · *Experimental Gerontology* 2021;145:111162 · review · adipose tissue's contribution to inflammaging; mechanism of adipokine dysregulation, macrophage polarization in visceral fat, SASP from senescent preadipocytes; covers age × obesity interaction · design: review

[^park2024-adipokines]: doi:10.3390/biomedicines12040873 · Park S, Shimokawa I · *Biomedicines* 2024;12(4):873 · review · leptin, adiponectin, resistin, visfatin roles in metabolic dysfunction and aging; AMPK-mediated adiponectin signaling; age-related changes in adipokine profiles · design: review

[^vasamsetti2023-visceralfat]: doi:10.1113/JP282728 · Vasamsetti SB, Natarajan N, Sadaf S, Florentin J, Dutta P · *Journal of Physiology* 2023;601(3):691–712 · review · visceral adipose tissue-derived metabolic hormones; cardiovascular regulation; portal theory of VAT-driven hepatic insulin resistance; VAT vs SAT functional differences · design: review

[^zhang2024-adipose-senescence]: doi:10.1016/j.mad.2024.111988 · Zhang Y, Jiang Y, Yang X, Huang Y, Pan A, Liao Y · *Mechanisms of Ageing and Development* 2024;220:111988 · review · hallmark-aligned adipose tissue senescence biology; p16/p21 accumulation; mitochondrial dysfunction; epigenetic reprogramming; impaired adipogenesis; therapeutic targets · design: review

[^lee2022-srebp1c]: doi:10.1016/j.cmet.2022.03.010 · Lee G, Kim YY, Jang H, et al. · *Cell Metabolism* 2022;34(5):702–718.e5 · PMID: 35417665 · in-vitro + in-vivo · SREBP1c-PARP1 axis in adipocytes; SREBP1c potentiates PARP1 activity during DNA repair, maintaining genome stability; genetic depletion of SREBP1c accelerates adipocyte senescence and promotes immune cell recruitment in obese adipose tissue; PARP inhibition rescues senescent phenotype · design: mechanistic in-vivo + in-vitro · model: mus-musculus + human adipocyte lines · closed-access; abstract cross-checked via PubMed #gap/no-fulltext-access

[^rubio2022-nutrition-senescence]: doi:10.1016/j.jnutbio.2021.108861 · Rubio-Tomás T, Rueda-Robles A, Plaza-Díaz J, Álvarez-Mercado AI · *Journal of Nutritional Biochemistry* 2022;99:108861 · review · nutrition, cellular senescence, and obesity-related disorders; adipose-specific senescent cell accumulation; SASP; dietary modulators including CR · design: review

[^liang2024-obesity-senescence]: doi:10.3390/ijms25147943 · Liang Y, Kaushal D, Wilson RB · *International Journal of Molecular Sciences* 2024;25(14):7943 · review · senescence and extracellular vesicles in obesity pathogenesis; adipose-derived EV SASP vectors; intercellular communication mechanisms; therapeutic strategies · design: review

[^perna2026-dxa]: doi:10.1016/j.clnesp.2026.103385 · Perna S, Mazzola G, Patta E, Rondanelli M · *Clinical Nutrition ESPEN* 2026 · DXA-derived regional adiposity identifies hidden liver-metabolic risk beyond BMI in non-obese older adults; documents TOFI phenotype; validates VAT metrics over BMI in older adults · design: observational · PMID: 42263936 · note: original wiki footnote carried incorrect DOI `10.1016/j.clnesp.2026.06.009` which does not resolve — corrected to article-number DOI confirmed via PubMed PMID lookup

[^zhu2024-dxa-vat]: doi:10.1016/j.numecd.2024.06.019 · Zhu K, Walsh JP, Hunter M, et al. · *Nutrition, Metabolism and Cardiovascular Diseases* 2024 · longitudinal DXA-measured VAT and cardiometabolic risk in middle-to-older-aged adults; VAT predicts incident cardiometabolic events beyond BMI · design: prospective longitudinal cohort · PMID: 39098379

[^tenda2024-copd-bmi]: doi:10.1183/16000617.0261-2023 · Tenda ED, Henrina J, Setiadharma A, et al. · *European Respiratory Review* 2024 · dose-response meta-analysis of BMI and mortality in COPD; confirms U-shaped curve with lower mortality in overweight/class-I obese COPD patients; addresses the obesity paradox in this specific disease context · n=multiple cohorts · design: meta-analysis · PMID: 39603663
