---
type: phenotype
aliases:
 - NAFLD
 - NASH
 - MASH
 - MetALD
 - nonalcoholic fatty liver disease
 - nonalcoholic steatohepatitis
 - metabolic-associated steatohepatitis
 - fatty liver disease
 - hepatic steatosis
 - steatotic liver disease
icd-10: K76.0
icd-11: null
affected-tissues: ["[[liver]]"]
underlying-hallmarks:
 - "[[cellular-senescence]]"
 - "[[deregulated-nutrient-sensing]]"
 - "[[mitochondrial-dysfunction]]"
 - "[[chronic-inflammation]]"
typical-onset: "Biological onset varies; clinically detected from 40s onward; peak prevalence 50–70"
prevalence-65plus: "~30–40% (estimated; age is an independent risk factor; no 65+-specific meta-analysis resolved as of 2026-06-05 — see Limitations)"
literature-checked-through: 2026-06-05
verified: true
verified-date: 2026-06-05
verified-by: claude
verified-scope: "Duan 2023 (full PDF): KD 2.418 µM (~2.4 µM), ALOX15→13-HODE, catalase tetramerization inhibition, cleaved-SREBP1 stabilization, senescent hepatocytes and macrophages as sources, C57BL/6 male mice — all confirmed; corrected '37 hepatology societies' to '236 panellists from 56 countries' per Rinella 2023 abstract (closed-access; cardiometabolic criteria thresholds confirmed via Lee 2024 PMC secondary source). Riazi 2022 (closed-access): all prevalence stats confirmed from abstract (PMID 35798021). Lee 2024 (PMC full text PMC11232657): MASLD 31.3% (95% CI 29.2–33.4%), n=7367, mean age 51 years, NHANES 2017–March 2020 — confirmed. Le 2025 (PMC full text PMC11742522): MASLD 86.3M→121.9M, MASH 14.9M→23.2M, HCC ~doubling, liver-related mortality 30,500→95,300 deaths (~tripling) — confirmed. Resmetirom FDA approval March 2024 confirmed from published literature. ICD-11 code not resolvable (WHO API auth-gated); prevalence-65plus remains extrapolated with #gap/unsourced."
---

# MASLD (Metabolic Dysfunction-Associated Steatotic Liver Disease)

The dominant chronic liver disease in the developed world, defined by intrahepatic lipid accumulation (hepatic steatosis ≥5% of hepatocytes) in the presence of metabolic dysfunction, with no alternative or dominant cause (viral hepatitis, alcohol at hazardous levels, specific drugs). In 2023 a multinational Delphi consensus renamed NAFLD (nonalcoholic fatty liver disease) to MASLD, renamed NASH to MASH (metabolic dysfunction-associated steatohepatitis), and introduced MetALD for patients in the alcohol-overlap zone — all under an umbrella term "steatotic liver disease" (SLD) [^rinella2023]. From an aging-biology perspective, MASLD is noteworthy because most of its hepatic-level drivers — hepatocyte cellular senescence, mitochondrial dysfunction, deregulated nutrient sensing (insulin resistance + mTORC1 hyperactivation), and Kupffer-cell inflammaging — are canonical aging hallmarks, making it one of the strongest phenotypic read-outs of accelerated liver aging.

---

## 2023 Nomenclature change: NAFLD → MASLD

The multi-society Delphi process (236 panellists from 56 countries, led by three pan-national liver associations) formalized a new nomenclature in June 2023 [^rinella2023]:

| Old term | New term | Rationale |
|---|---|---|
| Nonalcoholic fatty liver disease (NAFLD) | Metabolic dysfunction-associated steatotic liver disease (**MASLD**) | Positive definition requiring ≥1 cardiometabolic risk criterion; removes stigmatizing "nonalcoholic" framing |
| Nonalcoholic steatohepatitis (NASH) | Metabolic dysfunction-associated steatohepatitis (**MASH**) | Parallel rename for the inflammatory subtype |
| — | **MetALD** | New category for patients meeting MASLD criteria who also consume alcohol at moderate-to-high levels (women 20–50 g/day; men 30–60 g/day) |
| NAFLD/NASH with any alcohol use | Excluded from MASLD; coded to alcohol-related or other aetiology | MASLD requires alcohol intake <20 g/day (women) / <30 g/day (men) |
| Overarching term | **Steatotic liver disease (SLD)** | Encompasses all aetiologies including MASLD, MetALD, alcohol-related LD, and specific causes |

**Diagnostic cardiometabolic criteria (≥1 required for MASLD):** BMI ≥25 kg/m² (or ≥23 in Asian populations); fasting glucose ≥100 mg/dL or type 2 diabetes; blood pressure ≥130/85 mmHg or anti-hypertensive treatment; plasma triglycerides ≥150 mg/dL or lipid-lowering treatment; plasma HDL-C <40 mg/dL (men) / <50 mg/dL (women) or lipid-lowering treatment [^rinella2023].

**ICD coding:** The legacy ICD-10-CM code K76.0 ("Fatty (change of) liver, not elsewhere classified") remains in active clinical use for billing. No MASLD-specific ICD-10-CM code had been added to the standard tables as of 2026-06-05 lookup. ICD-11 code: the WHO ICD-11 browser did not yield a confirmed MASLD-specific code during preparation of this page — tag `#gap/needs-canonical-id` for the ICD-11 field until verified against the WHO coding authority or Rinella 2023 supplementary materials. #gap/needs-canonical-id

---

## Disease spectrum

MASLD spans a histologic continuum:

```
Isolated hepatic steatosis (MASL)
 → MASH (steatosis + inflammation + hepatocyte ballooning ± fibrosis)
 → Fibrosis (stage F0–F4; bridging fibrosis at F3, cirrhosis at F4)
 → Decompensated cirrhosis (ascites, variceal bleeding, hepatic encephalopathy)
 → Hepatocellular carcinoma (HCC)
```

Disease progression is **bidirectional and non-obligate**: only a minority of individuals with simple steatosis progress to MASH, and fibrosis can regress with intervention [^hagstrom2024]. Key natural-history parameters from a 2024 Lancet GH review:

- Cirrhosis develops in approximately 3–5% of MASLD patients and typically requires >20 years [^hagstrom2024].
- Fibrosis stage is the strongest predictor of mortality in MASLD; all stages carry elevated all-cause mortality vs the general population [^lekakis2024].
- Mortality pattern: liver-related complications, cardiovascular disease (the leading overall cause of death in MASLD), extrahepatic cancers, and HCC.
- HCC can arise in MASLD even without cirrhosis (distinguishing MASLD from viral hepatitis-associated HCC) [^hagstrom2024].

Histological activity grading uses the **NAFLD Activity Score (NAS)** (steatosis 0–3 + lobular inflammation 0–3 + ballooning 0–2): NAS ≥5 correlates with MASH. In clinical trials, **MASH resolution** (NAS reduction ≥2, ballooning 0, no worsening of fibrosis) and **1-stage fibrosis improvement** are co-primary endpoints per FDA/EMA guidance.

---

## Epidemiology

Global NAFLD/MASLD prevalence was estimated at **32.4% (95% CI 29.9–34.9%)** in a 2022 Lancet GH systematic review and meta-analysis (n=1,030,160 from 17 countries), with prevalence rising from 25.5% before 2005 to 37.8% in the 2016-or-later cohort [^riazi2022]. The US-specific MASLD prevalence under the new consensus nomenclature was **31.3%** in a nationally representative adult sample [^lee2024]. MASLD is projected to affect ~122 million US adults by 2050, with MASH cases rising to 23.2 million and HCC cases doubling, driven primarily by the aging of the obesity cohort [^le2025].

**Aging and prevalence.** Age is an independent risk factor for both MASLD and for fibrosis progression within MASLD [^danpanichkul2025]. Multiple epidemiological analyses identify age as among the strongest non-modifiable predictors of advanced disease. The mechanistic basis is addressed in the next section. A 65+-specific prevalence figure backed by a dedicated meta-analysis was not identified during citation discovery for this page; the frontmatter estimate of ~30–40% is extrapolated from age-trend data. See Limitations.

**Sex distribution.** Men have significantly higher global NAFLD prevalence (39.7% vs 25.6% in women) [^riazi2022], though this gap narrows post-menopause as estrogen-mediated hepatoprotection is lost. #gap/needs-replication — post-menopausal convergence is widely cited but meta-analytic confirmation in MASLD (vs NAFLD) cohorts is limited.

---

## Aging-hallmark mechanisms driving MASLD

MASLD in older adults is not simply obesity-in-liver amplified by more years of metabolic stress. Age-specific biological mechanisms add distinctive contributors:

### Cellular senescence

Senescent hepatocytes accumulate with age and after metabolic injury (lipotoxicity, oxidative stress from impaired beta-oxidation). Their SASP factors — IL-6, IL-8, PAI-1, TGF-β — activate [[kupffer-cells]] and [[hepatic-stellate-cells]], driving inflammation and fibrosis respectively. Key mechanistic discoveries anchored at [[liver]]:

- **13-HODE axis (Duan 2023):** Senescent hepatocytes and macrophages secrete 13-HODE (a linoleic acid metabolite produced by ALOX15). 13-HODE directly inhibits catalase activity by blocking its tetramerization (KD ~2.4 µM), elevating reactive oxygen species. ROS in turn stabilize cleaved SREBP1, driving de novo lipogenesis and steatosis. Catalase overexpression in aged mice protected against age-related fatty liver [^duan2023]. This positions the senescence → 13-HODE → catalase → SREBP1 axis as a mechanistic bridge between aging biology and MASLD.
- **CDKN1A (p21) and lipid homeostasis:** p21 expression correlates with MASH severity and fibrosis in patients; genetic deletion of Cdkn1a protected against diet-induced steatotic liver disease in mice via the AMPK–SIRT3 axis promoting fatty acid oxidation [^lamas2025]. Senescence markers were reduced in the knockout. #gap/needs-human-replication
- **Paracrine senescence spread:** Macrophage-derived TGF-β1 drives senescence from initially damaged hepatocytes to uninjured adjacent cells; TGF-βR1 blockade restores regenerative responses in mice [^bird2018]. In the MASLD context, this means a relatively small burden of primary senescent hepatocytes can propagate through the tissue.

### Mitochondrial dysfunction and impaired beta-oxidation

Hepatocyte mitochondrial content and oxidative phosphorylation capacity decline with age. Age-related mitochondrial dysfunction creates a metabolic bottleneck: fatty acids that cannot be efficiently oxidized via beta-oxidation are diverted into triglyceride synthesis and lipid droplet accumulation. Mitophagy (autophagy of dysfunctional mitochondria) also declines, allowing accumulation of ROS-producing damaged mitochondria. The net result is increased intrahepatic fat deposition even at the same dietary fat load compared to a younger liver. NAD⁺ availability is mechanistically rate-limiting for mitochondrial function and hepatic regeneration [^mukherjee2025]; NAD⁺ precursor supplementation may partially restore beta-oxidation capacity (preclinical evidence only). #gap/needs-human-replication

### Deregulated nutrient sensing and insulin resistance

Age-associated mTORC1 hyperactivation in liver promotes nuclear SREBP-1c and SREBP-2 accumulation (via the lipin-1 cytoplasmic-retention mechanism), driving lipogenesis and cholesterol synthesis. Parallel AMPK decline removes a key counter-regulatory brake on FASN, HMGCR, and SREBP-1c. The result is a "pre-lipogenic" liver state at basal feeding that is further amplified by dietary fat and carbohydrate [^liver-page].

Hepatic insulin resistance exhibits the well-characterized **selective insulin resistance paradox**: gluconeogenesis remains inappropriately active (FOXO1 persists in nucleus) while lipogenesis remains insulin-stimulable via SREBP-1c (ChREBP cooperates). This creates fasting hyperglycemia co-existing with hepatic fat accumulation — both cardinal features of MASLD in the context of metabolic syndrome.

SnRNA-seq of primate liver (cynomolgus monkey across age groups) demonstrated per-hepatocyte SREBP-2 pathway hyperactivation in aged liver across all zones, most pronounced in zone 3 (pericentral) [^yang2024]. Forced SREBP-2 activation in human primary hepatocytes recapitulated the aged-hepatocyte transcriptional phenotype including impaired detoxification and senescence markers.

### Kupffer-cell inflammaging

Age-associated NF-κB hyperactivation in [[kupffer-cells]] elevates hepatic TNF-α, IL-6, and IL-1β. These cytokines directly promote hepatic lipogenesis (via JNK/IRS-1 serine phosphorylation worsening insulin resistance), activate stellate cells (via TGF-β), and sustain a low-grade hepatic inflammatory microenvironment that mirrors MASH histologically. LSEC pseudocapillarization (age-related reduction in hepatic sinusoidal endothelial cell fenestrae) further impairs bidirectional metabolite exchange, limiting hepatocyte access to insulin and lipoproteins and contributing to the mismatch between systemic metabolic signals and intrahepatic responses [^huntcogger2019].

---

## Clinical correlates of MASLD as an aging phenotype

Beyond liver-intrinsic morbidity, MASLD in older adults clusters with and amplifies other aging phenotypes:

- **Sarcopenia:** MASLD and sarcopenia co-occur at high rates in older adults; shared mechanisms (insulin resistance, chronic inflammation, mTOR dysregulation). MASLD-associated muscle wasting compounds physical function decline. #gap/unsourced — causal directionality in human aging cohorts not fully resolved
- **Cardiovascular disease:** Cardiovascular mortality is the leading cause of death in MASLD patients at all fibrosis stages. MASLD-related dyslipidemia (VLDL overproduction, elevated LDL, reduced HDL) and pro-atherogenic SASP spillover are the mechanisms.
- **Alzheimer's disease / cognitive decline:** A real-world retrospective cohort of 65+ patients found MASLD associated with a ~2.8-fold increased risk of Alzheimer's disease (adjusted RR 2.80, 95% CI 1.79–4.38) [^zhang2024-ad]. Mechanisms may include hepatic inflammatory spillover, dyslipidemia, and shared metabolic risk factors. #gap/needs-replication — single retrospective cohort; confounding cannot be excluded.
- **HCC as sentinel event:** MASLD is now the fastest-growing etiology of HCC in liver transplant candidates (NASH/MASH HCC proportion increased 7.7-fold from 2002–2016) [^younossi2018hcc], and the only liver cancer etiology showing rising age-standardized incidence and mortality rates globally [^tan2025].

---

## Diagnostic framework

Diagnosis does not require biopsy in most clinical settings:

| Step | Tools | Notes |
|---|---|---|
| **Steatosis detection** | Ultrasound (sensitivity ~85% for moderate/severe steatosis); MRI-PDFF (quantitative; gold standard in trials); controlled attenuation parameter (CAP; FibroScan®) | K76.0 coded on imaging evidence |
| **Cardiometabolic criteria** | ≥1 of: BMI, glucose/HbA1c, BP, TG, HDL-C | Required to classify as MASLD under 2023 criteria |
| **Fibrosis assessment** | VCTE (liver stiffness measurement); FIB-4 index; APRI; ELF panel; liver biopsy (reference standard) | Biopsy for staging when advanced fibrosis cannot be excluded non-invasively |
| **MASH vs isolated steatosis** | Liver biopsy (NAS scoring) | Required for trial enrollment; not for routine care |
| **Alcohol exclusion** | Validated alcohol history; AUDIT questionnaire | <20 g/day women, <30 g/day men for MASLD; 20–50 / 30–60 g/day → MetALD |

---

## Interventions (overview)

No FDA-approved drug was available for MASH at the time of initial page creation (note: resmetirom received FDA approval in 2024 — see below). Intervention landscape is rapidly changing.

| Intervention | Mechanism | Evidence level |
|---|---|---|
| Weight loss (≥7–10% body weight) via caloric restriction or lifestyle | Reduces hepatic fat; can resolve MASH + improve fibrosis | Strong (multiple RCTs) |
| [[caloric-restriction]] and dietary modification | Reduces mTORC1; promotes autophagy; reduces hepatic lipogenesis | Strong preclinical; moderate human (MASLD-focused RCTs show histological improvement) |
| Resmetirom (thyroid hormone receptor-β agonist) | Stimulates hepatic beta-oxidation; reduces intrahepatic TG | Phase 3 RCT positive; FDA approved March 2024 for MASH with fibrosis |
| GLP-1 receptor agonists (semaglutide, liraglutide) | Reduce body weight; reduce hepatic lipogenesis; GLP-1R expressed on hepatocytes | Phase 2/3 data show MASH resolution; GLP-1R agonists being studied in MASLD-specific trials |
| Pioglitazone (PPARγ agonist) | Insulin sensitizer; reduces hepatic fat and MASH-associated inflammation | Moderate evidence; weight gain side effect limits use |
| Vitamin E (antioxidant) | Reduces oxidative stress in hepatocytes | Moderate evidence for non-diabetic MASH; not recommended in diabetics or with cardiovascular risk |
| Senolytics ([[fisetin]], [[dasatinib]] + [[quercetin]]) | Clear senescent hepatocytes; reduce SASP-driven steatosis and fibrosis | Preclinical (aged-mouse liver); no liver-specific human senolytic trial as of 2026-06-05 #gap/needs-human-replication |

#gap/dose-response-unclear for most pharmacological interventions in older adults specifically — most MASH trial populations are middle-aged; geriatric-specific dose-response and safety data are sparse.

---

## Hallmark mapping

| Hallmark | Mechanism in MASLD |
|---|---|
| [[cellular-senescence]] | Hepatocyte + Kupffer cell senescence; 13-HODE–catalase–SREBP1 axis; paracrine senescence spread via TGF-β; CDKN1A/p21 in MASH severity |
| [[deregulated-nutrient-sensing]] | mTORC1 hyperactivation → SREBP-1c/SREBP-2 nuclear entry → lipogenesis/cholesterogenesis; AMPK decline; selective hepatic insulin resistance paradox |
| [[mitochondrial-dysfunction]] | Impaired beta-oxidation → fat accumulation; ROS-driven lipid peroxidation and hepatocyte injury; impaired mitophagy accumulates damaged mitochondria |
| [[chronic-inflammation]] | Kupffer cell NF-κB hyperactivation; SASP spillover from senescent hepatocytes; LSEC pseudocapillarization impairs sinusoidal exchange; TGF-β drives fibrosis |

---

## Limitations and gaps

- `#gap/needs-canonical-id` — ICD-11 code for MASLD not resolved during page creation; K76.0 is the active ICD-10-CM code; ICD-11 mapping requires verification against WHO coding authority
- `#gap/unsourced` — 65+-specific prevalence figure (~30–40%) is extrapolated; a meta-analysis stratified to adults ≥65 years was not identified; to be replaced with a cited figure when the literature matures or a targeted search succeeds
- `#gap/needs-human-replication` — 13-HODE/catalase/SREBP1 senescence-steatosis axis (Duan 2023) and CDKN1A/p21 lipid-homeostasis mechanism (Lamas-Paz 2025) are both mouse-only; human validation pending
- `#gap/needs-replication` — MASLD–Alzheimer's disease association (Zhang 2024; single retrospective cohort)
- `#gap/unsourced` — causal directionality of MASLD–sarcopenia co-occurrence in human aging cohorts not established in a cited primary source on this page
- `#gap/long-term-unknown` — efficacy of senolytic interventions (fisetin, dasatinib + quercetin) in MASLD has no human clinical trial data
- Resmetirom FDA approval (March 2024) was verified via published sources; the intervention table should be expanded from a dedicated compound page once seeded

---

## Cross-references

- [[liver]] — canonical parent tissue page; mechanistic detail on all aging hallmarks in liver
- [[hepatocytes]] — primary affected cell type; polyploidy, senescence accumulation, beta-oxidation
- [[kupffer-cells]] — hepatic macrophage inflammaging; NF-κB hyperactivation; TGF-β in fibrosis
- [[hepatic-stellate-cells]] — fibrosis executor cells; senescent stellate-cell dual role
- [[liver-fibrosis]] — downstream phenotype; shares stellate-cell and TGF-β mechanisms
- [[hepatocellular-carcinoma]] — downstream cancer phenotype; MASLD is the fastest-rising etiology
- [[cellular-senescence]] — hallmark MOC; 13-HODE axis; paracrine spread
- [[deregulated-nutrient-sensing]] — hallmark MOC; mTOR/AMPK/SREBP axis
- [[mitochondrial-dysfunction]] — hallmark MOC; beta-oxidation decline in MASLD
- [[chronic-inflammation]] — hallmark MOC; Kupffer cell inflammaging
- [[sarcopenia]] — co-aging phenotype; shared metabolic mechanisms
- [[caloric-restriction]] — strongest dietary intervention with hepatic aging evidence
- [[fisetin]] — senolytic with preclinical liver-aging data
- [[insulin-igf1]] — pathway underpinning hepatic insulin resistance
- [[mtor]] — mTORC1 hyperactivation drives lipogenesis; intervention target
- [[ampk]] — declines with age; anti-lipogenic; metformin target

---

## Footnotes

[^rinella2023]: doi:10.1016/j.jhep.2023.06.003 · Rinella ME, Lazarus JV, Ratziu V et al. · "A multisociety Delphi consensus statement on new fatty liver disease nomenclature" · J Hepatol 79(6):1542-1556 · 2023 · consensus statement · multi-society Delphi (236 panellists, 56 countries, led by 3 pan-national liver associations) · established MASLD/MASH/MetALD/SLD terminology; defined cardiometabolic criteria for MASLD diagnosis · #gap/no-fulltext-access — full-text criteria thresholds confirmed via Lee 2024 secondary source

[^riazi2022]: doi:10.1016/S2468-1253(22)00165-0 · Riazi K, Azhari H, Charette JH et al. · "The prevalence and incidence of NAFLD worldwide: a systematic review and meta-analysis" · Lancet Gastroenterol Hepatol 7(9):851-861 · 2022 · meta-analysis · n=1,030,160 · global NAFLD prevalence 32.4% (95% CI 29.9–34.9%); prevalence increased from 25.5% (≤2005) to 37.8% (2016+); men 39.7% vs women 25.6%

[^lee2024]: doi:10.1097/HEP.0000000000000604 · Lee BP, Dodge JL, Terrault NA · "National prevalence estimates for steatotic liver disease and subclassifications using consensus nomenclature" · Hepatology · 2024 · cross-sectional · national US adult sample · MASLD prevalence 31.3% under 2023 consensus nomenclature; mean age 51 years

[^le2025]: doi:10.1001/jamanetworkopen.2024.54707 · Le P, Tatar M, Dasarathy S et al. · "Estimated Burden of Metabolic Dysfunction-Associated Steatotic Liver Disease in US Adults, 2020 to 2050" · JAMA Netw Open · 2025 · modeling study · MASLD cases projected to rise from 86.3M (33.7%; 2020) to 121.9M (41.4%; 2050); MASH cases 14.9M → 23.2M; annual HCC cases ~doubling; liver-related mortality tripling

[^hagstrom2024]: doi:10.1016/S2468-1253(24)00193-6 · Hagström H, Shang Y, Hegmar H, Nasr P · "Natural history and progression of metabolic dysfunction-associated steatotic liver disease" · Lancet Gastroenterol Hepatol 9(10):944-956 · 2024 · review · cirrhosis develops in ~3–5% of patients, typically >20 years; fibrosis stage is strongest mortality predictor; HCC can develop without cirrhosis; disease is bidirectional

[^lekakis2024]: doi:10.1016/j.ejim.2023.11.005 · Lekakis V, Papatheodoridis GV · "Natural history of metabolic dysfunction-associated steatotic liver disease" · Eur J Intern Med 122 · 2024 · review · all MASLD histological stages associated with increased overall mortality; fibrosis stage is the strongest predictor; primary causes of death: cardiovascular, liver-related, extrahepatic malignancies, HCC

[^duan2023]: doi:10.1038/s41467-023-44026-z · Duan J, Dong W, Wang G et al. · "Senescence-associated 13-HODE production promotes age-related liver steatosis by directly inhibiting catalase activity" · Nat Commun 14(1):8151 · 2023 · in-vivo + in-vitro · model: aged mouse + primary hepatocytes · senescent hepatocytes/macrophages secrete 13-HODE via ALOX15; 13-HODE inhibits catalase tetramerization (KD ~2.4 µM) → ROS → cleaved SREBP1 stabilization → lipogenesis → steatosis; catalase overexpression protected against age-related fatty liver

[^lamas2025]: doi:10.1016/j.jhepr.2024.101230 · Lamas-Paz A et al. · "Loss of Cdkn1a protects against MASLD alone or with alcohol intake by preserving lipid homeostasis" · JHEP Reports · 2025 · in-vivo · model: mouse diet-induced SLD · Cdkn1a (p21) deletion protected against steatotic liver disease via AMPK-SIRT3-mediated fatty acid oxidation; CDKN1A expression correlated with MASH severity and fibrosis in patients; senescence markers reduced in KO · #gap/needs-human-replication for mechanistic claim

[^bird2018]: doi:10.1126/scitranslmed.aan1230 · Bird TG, Müller M, Boulter L et al. · "TGFβ inhibition restores a regenerative response in acute liver injury by suppressing paracrine senescence" · Sci Transl Med 10(454):eaan1230 · 2018 · in-vivo · model: mouse acetaminophen + CCl₄ liver injury + human biopsy tissue · macrophage-derived TGFβ1 is required for paracrine senescence spread; TGFβR1 blockade restored regeneration and survival in mice; human hepatocyte senescence proportional to disease severity

[^danpanichkul2025]: doi:10.3350/cmh.2024.0631 · Danpanichkul P et al. · "Long-term outcomes and risk modifiers of MASLD between lean and non-lean populations" · Clin Mol Hepatol · 2025 · review · advanced age is an independent risk modifier for MASLD outcomes alongside hepatic fibrosis and type 2 diabetes

[^zhang2024-ad]: doi:10.3389/fendo.2024.1451908 · Zhang et al. · "Metabolic-associated steatotic liver disease and risk of Alzheimer's disease: a real-world retrospective cohort study" · Front Endocrinol · 2024 · observational cohort · n=4,582 MASLD patients vs 6,318 controls, aged 65+ · MASLD associated with adjusted RR 2.80 (95% CI 1.79–4.38) for Alzheimer's disease · #gap/needs-replication

[^younossi2018hcc]: doi:10.1016/j.cgh.2018.05.057 · Younossi ZM et al. · "Nonalcoholic Steatohepatitis Is the Fastest Growing Cause of Hepatocellular Carcinoma in Liver Transplant Candidates" · Clin Gastroenterol Hepatol · 2019 · observational · n=158,347 liver transplant candidates 2002–2016 · NASH/MASH proportion of HCC cases increased 7.7-fold (2.1% to 16.2%); NASH HCC prevalence increased 11.8-fold overall

[^tan2025]: doi:10.1016/j.jhep.2024.10.031 · Tan EY et al. · "Liver cancer in 2021: Global Burden of Disease study" · J Hepatol · 2025 · epidemiological study · MASLD is the only liver cancer etiology with rising age-standardized incidence and death rates globally

[^huntcogger2019]: doi:10.1016/j.csbj.2019.07.021 · Hunt NJ, Kang SWS, Lockwood GP, Le Couteur DG, Cogger VC · "Hallmarks of Aging in the Liver" · Comput Struct Biotechnol J 17:1151-1161 · 2019 · review · Kupffer cell age-related NF-κB hyperactivation; LSEC pseudocapillarization impairing sinusoidal exchange; CMA decline; hepatocyte regenerative kinetics decline

[^yang2024]: doi:10.1093/procel/pwad039 · Yang S, Liu C, Jiang M et al. · "A single-nucleus transcriptomic atlas of primate liver aging uncovers the pro-senescence role of SREBP2 in hepatocytes" · Protein Cell 15(2):98-120 · 2024 · in-vivo (snRNA-seq) + in-vitro · model: cynomolgus monkey (multiple age groups) + human primary hepatocytes · SREBP-2 pathway hyperactivated per hepatocyte in aged primate liver across all zones; zone-3 most pronounced; forced SREBP-2 activation in human hepatocytes recapitulates aged transcriptional phenotype including impaired detoxification and senescence markers

[^mukherjee2025]: doi:10.1038/s42255-025-01408-5 · Mukherjee S et al. · "Hepatocyte mitochondrial NAD+ content is limiting for liver regeneration" · Nat Metab 7:2424-2437 · 2025 · Letter · in-vivo · model: mouse SLC25A51 haploinsufficiency + hepatocyte-specific AAV overexpression · mitochondrial (not whole-tissue) NAD⁺ is rate-limiting for liver regeneration; SLC25A51 overexpression enhanced regeneration comparably to systemic NAD⁺ precursor administration

[^liver-page]: See [[liver]] §§ "Deregulated nutrient sensing (MTOR / AMPK / SREBP)" and "MASLD / steatotic liver disease" for primary citations on the mTORC1–SREBP axis and selective insulin resistance paradox.
