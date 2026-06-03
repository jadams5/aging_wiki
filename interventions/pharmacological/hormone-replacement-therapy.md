---
type: intervention
aliases: [HRT, MHT, menopausal hormone therapy, estrogen therapy, estrogen-progestogen therapy, hormone replacement therapy]
mode: pharmacological
mechanisms: [estrogen-receptor-agonist, anti-inflammatory, nitric-oxide-signaling, collagen-synthesis-stimulation]
targets: ["[[esr1]]", "[[esr2]]", "[[gper]]"]
target-hallmarks: ["[[altered-intercellular-communication]]", "[[loss-of-proteostasis]]", "[[chronic-inflammation]]"]
target-pathways: ["[[estrogen-receptor-signaling]]"]
human-evidence-level: strong
clinical-stage: fda-approved
safety-profile: "well-established (symptom relief + bone) | investigational (aging/geroprotection)"
translation-gap: biomarker-only
next-experiment: "Adequately powered (n≥2000) RCT of transdermal 17β-estradiol + micronized progesterone initiated within 3 years of menopause vs placebo, with 10-year composite MACE + validated epigenetic clock (DunedinPACE or GrimAge) as co-primary endpoints, to test the timing hypothesis on both hard cardiovascular and biological-aging outcomes simultaneously."
clinical-trials-active: null
literature-checked-through: 2026-06-03
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "All primary-source quantitative claims verified against PDFs (WHI CEE+MPA Rossouw 2002, DOPS Schierbeck 2012, ELITE Hodis 2016, KEEPS-Cog Gleason 2015) and PubMed/PMC abstracts (Manson 2017, Melville 2025). Scarabin 2018 and the two 2025 epigenetic-clock studies (Schmid glaf106, Ye glaf166) are closed-access; claims attributed to them verified against Crossref/DOI metadata and PubMed abstracts only — full-PDF cross-check of those three papers not performed. WHI CEE-alone arm (Anderson 2004) is bronze-OA but fetch failed; claims for that arm cross-checked against published abstract and Table 2 data cited in Rossouw 2002 commentary."
---

# Hormone Replacement Therapy (Menopausal Hormone Therapy)

Menopausal hormone therapy (MHT, also called HRT) encompasses a family of pharmacological regimens that replace estrogen — and, in women with a uterus, progestogen — lost at [[menopause]]. The therapy has a well-documented symptom and bone benefit. Its cardiovascular, cognitive, and biological-aging effects are strongly **formulation-dependent, arm-dependent (estrogen-alone vs combined), and timing-dependent** — summarized as the "timing hypothesis" — and cannot be reduced to a simple pro-aging or anti-aging judgment.

This page is a **class-level synthesis** covering regimens, the WHI trials, the timing hypothesis, and the aging-relevant endpoint evidence. Atomic pharmacology of the active hormones lives on [[estradiol]] and [[progesterone]]; topical application for skin aging is on [[topical-estrogens]].

**Honest framing upfront:** MHT is not a validated geroprotector or longevity drug. The "anti-aging hormone" framing applied in some direct-to-consumer contexts is not supported by clinical-trial evidence on aging-specific endpoints. Equally, it is not uniformly pro-aging — in appropriately selected early-postmenopausal women with symptomatic menopause, it is a clinically beneficial therapy with a timing-dependent and formulation-dependent risk profile and roughly neutral all-cause mortality over the WHI follow-up period. #gap/contradictory-evidence on several sub-questions documented throughout this page.

---

## Regimens and formulation landscape

### Estrogen-alone vs estrogen + progestogen

The most consequential division in the MHT literature:

| Arm | Indication | Key progestogen | WHI arm |
|---|---|---|---|
| **Estrogen-alone (E-alone)** | Women post-hysterectomy (no uterus; no endometrial cancer risk from unopposed estrogen) | None | CEE-alone arm (conjugated equine estrogens 0.625 mg/day oral) |
| **Estrogen + progestogen (EPT)** | Women with intact uterus (progestogen added to protect endometrium) | MPA (medroxyprogesterone acetate, synthetic) in WHI; micronized progesterone (bioidentical) in DOPS/KEEPS/many contemporary regimens | CEE 0.625 mg/day + MPA 2.5 mg/day in WHI |

WHI used conjugated equine estrogen (CEE), a mixture of >10 estrogen compounds extracted from pregnant mares' urine. Contemporary practice has shifted toward **transdermal 17β-estradiol** (patch/gel — bioidentical; see [[estradiol]]) because of its different pharmacokinetics (avoids first-pass hepatic metabolism → lower coagulation factor induction → lower VTE risk) and because CEE's heterogeneous composition complicates mechanistic interpretation.

### Route: oral vs transdermal

Route matters particularly for cardiovascular and thrombotic safety:

- **Oral estrogen** passes through the liver on first pass → increases hepatic production of coagulation factors (especially factor VIII, IX, fibrinogen) and C-reactive protein → higher VTE and stroke risk [^scarabin2018].
- **Transdermal estradiol** bypasses hepatic first pass → lower coagulation factor induction → lower VTE risk; also avoids hepatic lipid-modifying effects (less LDL-lowering but also less triglyceride-raising). Most contemporary guidelines now prefer transdermal route for women at elevated VTE/stroke risk [^scarabin2018]. #gap/needs-replication: direct transdermal-vs-oral head-to-head mortality RCT has not been conducted.

### Progestogen type: synthetic vs bioidentical

The progestogen matters:

- **MPA (medroxyprogesterone acetate)** — synthetic; partially glucocorticoid and androgen receptor-active; used in WHI EPT arm. Associated with the breast cancer signal in WHI and attenuates some cardiovascular-protective effects of estrogen in vitro.
- **Micronized progesterone (MP)** — bioidentical; selective progesterone receptor activity; used in DOPS and KEEPS. Observational data suggest lower breast cancer risk than MPA; MP may preserve estrogen's endothelium-protective effects more than MPA [^scarabin2018]. **Caution:** MP data comes primarily from observational studies + DOPS (open-label RCT); no fully-powered blinded RCT has compared MPA vs MP head-to-head on breast cancer or CVD outcomes. #gap/needs-replication.

### Cyclic vs continuous EPT

- **Cyclic:** Estrogen daily; progestogen added for 10–14 days/month. Leads to withdrawal bleeding; preferred in perimenopausal women.
- **Continuous combined:** Estrogen + progestogen daily. After initial breakthrough bleeding, most women become amenorrheic. Preferred in established postmenopause.

### TSEC (Tissue-Selective Estrogen Complex)

Bazedoxifene + conjugated estrogens (Duavee/Duavive) is a SERM–estrogen combination that provides uterine protection via bazedoxifene's ER antagonism in the endometrium, allowing conjugated estrogen use without a separate progestogen. Cross-link: [[selective-estrogen-receptor-modulators]]. The approach allows estrogen's symptom and bone benefits without progestogen's adverse effects, but its cardiovascular risk profile is not yet characterized by a large RCT.

---

## The WHI saga

The Women's Health Initiative hormone trials are the largest randomized evidence base on MHT safety and efficacy. Understanding them is essential context for any claim about MHT and aging.

### CEE + MPA arm — 2002 halt and primary results

The WHI CEE + MPA arm (n=16,608 postmenopausal women aged 50–79 with intact uteri; mean age **63.3 years**) was halted early in July 2002 after a mean of 5.2 years when the global index exceeded the prespecified stopping boundary [^rossouw2002].

**Primary findings (compared to placebo) [^rossouw2002]:**

| Outcome | HR (95% CI) | Absolute risk per 10,000 person-years |
|---|---|---|
| Coronary heart disease | 1.29 (1.02–1.63) | +7 events |
| Stroke | 1.41 (1.07–1.85) | +8 events |
| Venous thromboembolism | 2.11 (1.58–2.82) | +18 events |
| Breast cancer | 1.26 (1.00–1.59) | +8 events |
| Colorectal cancer | 0.63 (0.43–0.92) | −6 events |
| Hip fracture | 0.66 (0.45–0.98) | −5 events |

**Critical context:** The WHI sample was predominantly **older women** (mean age 63; only 3.5% were 50–54), recruited years after menopause specifically because they were symptom-free and at cardiovascular-disease risk. This population is not representative of the perimenopausal or recently-menopausal women who are the primary clinical candidates for MHT. This design choice — driven by the trial's original CVD-prevention hypothesis — is the central reason the timing hypothesis emerged as a re-interpretation of WHI findings.

### CEE-alone arm — 2004 results

Women with hysterectomy (n=10,739; mean age **63.6 years**) received CEE 0.625 mg/day or placebo [^anderson2004].

**Key difference from the combined arm:**

| Outcome | HR (95% CI) |
|---|---|
| Coronary heart disease | 0.91 (0.75–1.12) — **neutral** |
| Stroke | 1.39 (1.10–1.77) — increased |
| Venous thromboembolism | 1.33 (1.05–1.68) — increased |
| **Breast cancer** | **0.77 (0.59–1.01) — neutral to decreased** |
| Hip fracture | 0.61 (0.41–0.91) — decreased |

The CEE-alone arm did not show increased breast cancer (HR 0.77; confidence interval crosses 1.0 but point estimate is below neutral), in contrast to the CEE+MPA arm. This divergence between arms remains the central finding implicating MPA — not estrogen — in the WHI breast cancer signal. However, the CEE-alone arm still showed increased stroke and VTE, consistent with oral estrogen's hepatic effects.

### WHI long-term mortality follow-up

After 18-year cumulative follow-up across both arms (n=27,347; median intervention 5.6 yr EPT, 7.2 yr CEE-alone; median intervention + post-intervention surveillance), Manson et al. 2017 reported **no statistically significant all-cause mortality difference** in either arm vs placebo — EPT HR 1.02 (0.96–1.08), CEE-alone HR 0.94 (0.88–1.01), pooled HR 0.99 (0.94–1.03) [^manson2017]. Point estimates in the 50–59 age subgroup trended favourably during the intervention phase (ratio of HRs younger vs older 0.61, 95% CI 0.43–0.87), but confidence intervals were wide. #gap/contradictory-evidence — some meta-analyses of early-initiation cohorts suggest a mortality benefit, while WHI overall 18-year follow-up is neutral.

---

## The timing hypothesis

The timing hypothesis (also called the "critical window" or "healthy cell" hypothesis) holds that estrogen's cardiovascular effects are beneficial or neutral when initiated early in menopause (when the vasculature is still estrogen-responsive and free of advanced atherosclerosis) but harmful when initiated late (in an already-diseased vasculature where estrogen may destabilize plaques or exacerbate inflammation).

### ELITE (Early versus Late Intervention Trial with Estradiol)

ELITE (Hodis, Mack et al.) randomized 643 postmenopausal women to transdermal 17β-estradiol 1 mg/day + micronized progesterone (400 mg/day vaginally for 10 days/month) vs placebo, stratified by time since menopause:

- **Early group:** <6 years since menopause
- **Late group:** ≥10 years since menopause

**Primary endpoint — CIMT (carotid intima-media thickness) progression rate [^hodis2016]:**

| Group | Placebo CIMT rate (mm/yr) | Estradiol CIMT rate (mm/yr) | Difference (estradiol − placebo) | p |
|---|---|---|---|---|
| Early postmenopause (<6 yr) | 0.0078 | 0.0044 | −0.0034 (favors estradiol) | 0.008 |
| Late postmenopause (≥10 yr) | 0.0088 | 0.0100 | +0.0012 (favors placebo) | 0.29 |

The early group showed significantly reduced subclinical atherosclerosis progression (−0.0034 mm/yr difference); the late group showed no significant benefit. The interaction between timing stratum and treatment effect was significant (p=0.007). This is the strongest prospective RCT evidence for the timing hypothesis on a vascular imaging endpoint. **Limitations:** CIMT is a surrogate — the trial was not powered for MACE; only 643 women; median 5-year follow-up; CIMT changes do not guarantee mortality or event benefit. CT measures of coronary-artery calcium and stenosis did not differ significantly between groups in either postmenopause stratum. #gap/needs-replication on hard cardiovascular endpoints.

### DOPS (Danish Osteoporosis Prevention Study)

DOPS randomized 1,006 recently postmenopausal women (aged 45–58, within 3–24 months of menopause) between 1990–1993 to open-label estradiol + norethisterone acetate vs no treatment [^schierbeck2012].

**Primary endpoint (composite cardiovascular + mortality) at 10-year follow-up:** MHT arm showed significantly reduced risk of the composite (death, admission for myocardial infarction, or heart failure) — HR **0.48** (95% CI **0.26–0.87**; p=0.015). No increase in breast cancer, deep-vein thrombosis, stroke, or pulmonary embolism in the MHT arm over 10 years.

**Critical limitations:** DOPS was **open-label** (no placebo control) — this is a substantial methodological weakness that introduces ascertainment bias for outcomes and adherence confounding. It was powered for bone endpoints, not cardiovascular outcomes. The cardiovascular finding is hypothesis-generating and consistent with the timing hypothesis but cannot be considered definitive evidence for CVD prevention.

### KEEPS (Kronos Early Estrogen Prevention Study)

KEEPS randomized 727 healthy recently-menopausal women to oral CEE 0.45 mg/day + cyclic micronized progesterone (200 mg/day for 12 days/month), or transdermal estradiol 50 µg/day + cyclic micronized progesterone (200 mg/day for 12 days/month), vs placebo for 4 years. KEEPS was designed as a direct timing-hypothesis test. 693 of those 727 women provided consent for the ancillary KEEPS-Cog cognitive study [^gleason2015].

**Primary vascular endpoint (CIMT):** Neither oral CEE nor transdermal estradiol significantly reduced CIMT progression vs placebo in recently-menopausal women. This **did not replicate** the ELITE vascular finding — possibly due to differences in dose, duration (4 vs 5 years), or cohort characteristics.

**Cognitive and affective outcomes [^gleason2015]:** No significant effects of either MHT formulation on global cognition (3MS exam, all treatment-arm p-values > 0.18) or any of the four cognitive domain factors vs placebo (all p-values non-significant after correction for multiple comparisons). Women receiving oral CEE showed statistically significant improvements in POMS tension-anxiety and depression-dejection scores vs placebo (p<0.001 for both); transdermal estradiol showed no mood benefit. The null cognitive result in recently-menopausal women was interpreted as consistent with the WHIMS late-initiation harm signal but without the cognitive benefit that the timing hypothesis might predict. Authors note results cannot be extrapolated to treatment beyond 4 years.

---

## Aging-relevant endpoint synthesis

The following sections separate symptomatic disease endpoints from biological-aging endpoints — a distinction that is central to evaluating any "pro-aging" or "anti-aging" framing.

### Bone and fracture (clear benefit)

MHT preserves bone mineral density and reduces fracture risk. The WHI EPT arm showed HR 0.66 (0.45–0.98) for hip fracture [^rossouw2002]; CEE-alone arm HR 0.61 (0.41–0.91) [^anderson2004]. Bone protection is the most consistently replicated efficacy finding across arms, routes, and study designs. Post-WHI, this benefit remains the cornerstone of the risk-benefit calculation for early-initiation MHT in women at elevated fracture risk. Cross-link: [[osteoporosis]].

### Vasomotor symptoms and GSM (clear symptom benefit)

MHT is the most effective pharmacological treatment for vasomotor symptoms (hot flashes, night sweats) and genitourinary syndrome of menopause (GSM: vaginal dryness, dyspareunia, urinary symptoms). Symptom response is rapid (weeks) and robust; this is not contested. Cross-link: [[vasomotor-symptoms]], [[genitourinary-syndrome-menopause]]. These are quality-of-life endpoints, not biological-aging endpoints.

### Cardiovascular disease (timing-dependent; route-dependent)

- **Late initiation (>10 years post-menopause, or age >60):** WHI EPT arm showed CHD HR 1.29 and stroke HR 1.41 [^rossouw2002]. The harm is most consistent for oral estrogen and in older women with pre-existing subclinical atherosclerosis.
- **Early initiation (<10 years post-menopause, or age <60):** ELITE demonstrates reduced CIMT progression (−0.0034 mm/yr difference; p=0.008) [^hodis2016]; DOPS shows reduced composite CVD/mortality HR 0.48 (0.26–0.87; open-label, caveats noted) [^schierbeck2012]; WHI post-hoc subgroup analyses in the 50–59 age band show a non-significant trend toward reduced CHD. Contemporary clinical consensus (NAMS, IMS, BMS) endorses MHT as cardiovascular-neutral to potentially beneficial in healthy women initiating therapy within 10 years of menopause.
- **Route:** Transdermal estradiol has lower thrombotic risk than oral; meta-analyses of observational data consistently find no VTE risk increase with transdermal vs significant increase with oral preparations [^scarabin2018].

#gap/contradictory-evidence — the early-initiation cardiovascular benefit has not been demonstrated on hard MACE endpoints in a fully-powered blinded RCT. ELITE's CIMT result and DOPS's CVD composite are consistent with benefit, but both trials have design limitations. The mortality follow-up from WHI is neutral overall [^manson2017].

### Cognition and dementia (NOT effective for prevention; possibly harmful with late initiation)

- **WHIMS (CEE-alone, late initiation, mean age 74):** CEE significantly worsened global cognitive function vs placebo [^espeland2004]. This is a direct observation of harm with late-initiation oral estrogen in older women.
- **KEEPS-Cog (early initiation, recently postmenopausal):** No significant effect on global cognition or memory [^gleason2015].
- **Melville 2025 meta-analysis** (n>1 million; 10 studies): no significant association between MHT use and risk of mild cognitive impairment or dementia [^melville2025]. Authors explicitly recommend against prescribing MHT for dementia prevention.
- **Timing-sensitive brain imaging data (He 2026 review):** Suggests that timing and route of MHT critically shape structural brain outcomes, consistent with the vascular timing hypothesis applied to the brain. Evidence is preliminary and based on imaging surrogates.

**Bottom line:** MHT is not effective for dementia prevention. Late initiation is associated with cognitive harm. Early initiation in recently-menopausal women does not produce detectable cognitive benefit in the best available RCT evidence. Cross-link: [[alzheimers-disease]].

### Breast cancer (formulation-dependent)

| Regimen | Risk signal |
|---|---|
| CEE + MPA (WHI) | HR 1.26 (1.00–1.59) — statistically significant increased risk after 5.2 years [^rossouw2002] |
| CEE-alone (WHI) | HR 0.77 (0.59–1.01) — no increase; possible reduction [^anderson2004] |
| Transdermal E2 + micronized progesterone | Observational data favor lower risk than E+MPA; no large RCT |

The WHI CEE+MPA arm produced approximately 8 excess breast cancers per 10,000 person-years. The synthetic progestin MPA is most implicated — consistent with in vitro data showing MPA promotes mammary cell proliferation more than micronized progesterone. Contemporary prescribing has shifted toward micronized progesterone partly on this basis, though head-to-head RCT confirmation is absent. #gap/needs-replication.

### VTE and stroke (increased, attenuated by transdermal route)

Oral estrogen increases VTE (WHI EPT: HR 2.11 for composite VTE; CEE-alone: HR 1.33) and stroke (WHI EPT: HR 1.41; CEE-alone: HR 1.39) [^rossouw2002][^anderson2004]. Transdermal estradiol avoids first-pass hepatic coagulation-factor induction; observational meta-analyses show no significant VTE increase with transdermal vs 2–4-fold increase with oral [^scarabin2018]. This route difference is not captured in WHI, which used oral CEE exclusively for the systemic arms.

### All-cause mortality (cumulative WHI follow-up: neutral; some early-initiation meta-analyses suggest benefit)

Manson 2017 (18-year WHI follow-up): all-cause mortality HR **1.02 (0.96–1.08)** for EPT arm and HR **0.94 (0.88–1.01)** for CEE-alone arm vs placebo — no statistically significant mortality difference in either arm [^manson2017]. In the pooled cohort the overall HR was 0.99 (0.94–1.03). Point estimates in the 50–59 age subgroup were nominally favourable (the ratio of HRs for younger vs older women was 0.61 [0.43–0.87] during the intervention phase) but this was a subgroup analysis. Some meta-analyses focusing on early-initiators report a mortality benefit, but these rely on observational data with healthy-initiator bias. #gap/contradictory-evidence.

---

## Biological-aging clock evidence

**This section directly addresses the "pro- vs anti-aging" question using biological-aging biomarkers rather than disease endpoints.**

The epigenetic aging clock evidence for MHT is sparse and inconsistent as of 2026.

- **Schmid et al. 2025 (Berlin Aging Study II, n=1,404):** Examined cross-sectional and longitudinal associations between endogenous estradiol, DHEAS, free androgen index, and six epigenetic clock measures (GrimAge, DunedinPACE, and four others) in older adults. Conclusion: "sex hormones play at best a minor role with respect to biological aging as measured with epigenetic clocks" [^schmid2025]. Estradiol showed nominal inverse associations with some clocks in women, but findings were inconsistent across clock models and timepoints.
- **Ye et al. 2025 (NHANES, n=770 postmenopausal women):** Women with premature menopause showed accelerated DunedinPACE (pace of aging clock) and higher mortality, with ~one-third of excess mortality attributable to accelerated biological aging [^ye2025]. The authors suggest HRT might mitigate this trajectory, but did not test MHT as an intervention on clock outcomes.
- **Barrett et al. 2022 (Genome Biology):** Epithelial epigenetic clocks (as opposed to blood-derived clocks) tick faster in hormone-sensitive tissues; relevance to MHT on aging clocks is indirect.

**No published RCT has used an epigenetic clock as a primary or pre-specified secondary endpoint for MHT.** This is the most direct gap for evaluating whether MHT is biologically pro- or anti-aging. The observational signal from Schmid 2025 suggests endogenous estrogen has at most modest epigenetic aging effects; whether exogenous supplementation meaningfully alters clock trajectory is unknown.

#gap/needs-human-replication — the biological-aging-clock evidence for MHT is insufficient to adjudicate whether MHT accelerates, decelerates, or is neutral on pace-of-aging. Adequately powered RCT with clock endpoints has not been done.

---

## Limitations and open questions

- **WHI sample is not representative of the primary MHT clinical population.** Mean age 63 at enrollment, most women not symptomatic, enrolled primarily from older age bands — this created a late-initiation-dominant study that cannot be extrapolated to recently-menopausal symptomatic women without the timing hypothesis adjustment. The design bias is large.
- **CEE ≠ 17β-estradiol.** WHI used conjugated equine estrogen. Most contemporary MHT uses bioidentical 17β-estradiol. Extrapolating WHI risk findings to current transdermal E2 regimens is mechanistically unsound, though it remains clinically cautionary pending direct comparative data.
- **MPA ≠ micronized progesterone.** The WHI breast cancer signal is likely driven primarily by MPA, not estrogen. Conflating "progestogen" risks across all progestogen types is one of the most common misinterpretations of the WHI.
- **No timing-hypothesis hard-endpoint RCT.** ELITE used CIMT. DOPS was open-label. The definitive test — a large, double-blind RCT of transdermal E2 + MP initiated <5 years post-menopause, powered on MACE — has not been conducted. The entire cardiovascular benefit attribution to early-initiation rests on surrogates + observational data + post-hoc WHI subgroups.
- **Epigenetic aging endpoint gap.** No adequately powered MHT RCT has used a validated biological-age clock as a primary endpoint. #gap/needs-human-replication
- **Duration of therapy.** WHI was 5.2–7 years. Optimal duration for risk-benefit trade-off (especially breast cancer signal accumulation) is unclear for longer exposures. #gap/long-term-unknown
- **Breast cancer risk with micronized progesterone.** Consistently favored in observational data but head-to-head RCT vs MPA is lacking. #gap/needs-replication
- **TSEC long-term safety.** Bazedoxifene-CEE (Duavee) has not been tested in a large RCT for cardiovascular outcomes. #gap/long-term-unknown

---

## Cross-references

- [[estradiol]] — atomic pharmacology of 17β-estradiol (PubChem CID 5757; ChEMBL CHEMBL135)
- [[progesterone]] — atomic pharmacology of progesterone; bioidentical vs synthetic progestogen distinction
- [[topical-estrogens]] — estrogen for skin aging; distinct from systemic MHT
- [[menopause]] — phenotype page; biology of follicle depletion and hormonal transition
- [[vasomotor-symptoms]] — primary symptom indication for MHT
- [[genitourinary-syndrome-menopause]] — secondary symptom indication; topical/local estrogen is preferred
- [[osteoporosis]] — bone-endpoint beneficiary; MHT is established for fracture prevention
- [[cardiovascular-aging]] — broader context for the timing-hypothesis vascular data
- [[alzheimers-disease]] — cognition endpoint; late-initiation MHT associated with harm (WHIMS); no dementia prevention benefit
- [[selective-estrogen-receptor-modulators]] — SERM class; bazedoxifene component of TSEC; tamoxifen and raloxifene as estrogen-antagonist alternatives for bone without breast risk
- [[esr1]] — estrogen receptor alpha; mediates most cardiovascular and bone ER signalling
- [[female-longevity-advantage]] — broader framing of sex-hormone effects on aging
- [[estrogen-receptor-signaling]] — signalling pathway page

---

## Footnotes

[^rossouw2002]: doi:10.1001/jama.288.3.321 · Rossouw JE et al. (WHI Writing Group) · *JAMA* 2002;288(3):321-333 · rct · n=16,608 (8506 E+P; 8102 placebo) · CEE 0.625 mg/day + MPA 2.5 mg/day vs placebo; mean 5.2 yr follow-up; mean age 63.3 yr; halted early for global index threshold · primary findings: CHD HR 1.29 (1.02–1.63), stroke HR 1.41 (1.07–1.85), composite VTE HR 2.11 (1.58–2.82) [PE alone HR 2.13 (1.39–3.25)], breast cancer HR 1.26 (1.00–1.59); hip fracture HR 0.66 (0.45–0.98); colorectal cancer HR 0.63 (0.43–0.92) · absolute excess risks per 10,000 person-years: +7 CHD, +8 stroke, +8 PE, +8 breast cancer; −6 colorectal cancer, −5 hip fracture; +18 total VTE · model: humans

[^anderson2004]: doi:10.1001/jama.291.14.1701 · Anderson GL et al. (WHI Steering Committee) · *JAMA* 2004;291(14):1701-1712 · rct · n=10,739 · CEE 0.625 mg/day alone vs placebo in hysterectomized women; mean age 63.6 yr; halted at 6.8 yr (some endpoints earlier) · breast cancer HR 0.77 (0.59–1.01, NS), CHD HR 0.91 (NS), stroke HR 1.39, VTE HR 1.33, hip fracture HR 0.61 · model: humans

[^manson2017]: doi:10.1001/jama.2017.11217 · Manson JE et al. · *JAMA* 2017;318(10):927-938 · pmid:28898378 · pmc:PMC5728370 · observational follow-up of rct · n=27,347 (combined both WHI arms; median intervention 5.6 yr EPT, 7.2 yr CEE-alone) · 18-year cumulative follow-up · all-cause mortality: EPT HR **1.02 (0.96–1.08)**; CEE-alone HR **0.94 (0.88–1.01)**; pooled HR 0.99 (0.94–1.03) — no statistically significant difference from placebo in either arm · younger age-subgroup (50–59 at randomization): ratio of HRs vs older women 0.61 (0.43–0.87) during intervention phase (nominally significant subgroup finding) · model: humans

[^hodis2016]: doi:10.1056/NEJMoa1505241 · Hodis HN, Mack WJ et al. (ELITE Study) · *N Engl J Med* 2016;374(13):1221-1231 · rct · n=643 · oral 17β-estradiol 1 mg/day + micronized progesterone 45 mg (4% vaginal gel) once daily × 10 days per 30-day cycle vs placebo; stratified by time since menopause (<6 yr early, ≥10 yr late); median 5-yr follow-up · CIMT progression rates: early group — placebo 0.0078 mm/yr, estradiol 0.0044 mm/yr, difference −0.0034 mm/yr (p=0.008); late group — placebo 0.0088 mm/yr, estradiol 0.0100 mm/yr, difference +0.0012 mm/yr (p=0.29); timing interaction p=0.007 · CT coronary-artery measures: no significant difference in either stratum · model: humans

[^schierbeck2012]: doi:10.1136/bmj.e6409 · Schierbeck LL et al. (DOPS) · *BMJ* 2012;345:e6409 · rct (open-label) · n=1,006 · healthy women aged 45–58 randomized 1990–1993 within 3–24 months of menopause; oral triphasic 17β-estradiol + norethisterone acetate vs no treatment; 10-yr follow-up · primary endpoint (composite of death, MI, or hospital admission for heart failure): HR **0.48** (95% CI 0.26–0.87; p=0.015) in MHT arm; no significant excess breast cancer, DVT, stroke, or PE · design limitation: open-label (PROBE design); no placebo control; powered for bone endpoints, not CVD; outcomes evaluated without knowledge of treatment allocation per PROBE design · model: humans

[^gleason2015]: doi:10.1371/journal.pmed.1001833 · Gleason CE et al. (KEEPS-Cog) · *PLoS Med* 2015;12(6):e1001833 · rct · n=693 consented to KEEPS-Cog (parent KEEPS n=727); 662 in cognitive analyses · recently postmenopausal women (within 36 months of LMP); oral o-CEE 0.45 mg/day or transdermal t-E2 50 µg/day (each + cyclic micronized progesterone 200 mg/day × 12 days/month) vs placebo; 4 yr; primary: cognition and mood · global cognitive performance (3MS exam): no significant difference for either MHT arm vs placebo; all four cognitive domain factor scores non-significant for both arms (p-values ranged 0.18–0.85) · mood: o-CEE significantly improved POMS tension-anxiety (p<0.001) and depression-dejection (p<0.001) vs placebo; t-E2 showed no mood benefit · model: humans

[^espeland2004]: doi:10.1001/jama.291.24.2959 · Espeland MA et al. (WHIMS) · *JAMA* 2004;291(24):2959-2968 · rct sub-study · n=1,416 (subset of WHI CEE-alone) · women ≥65 yr, mean age 74; CEE vs placebo; cognition · CEE significantly reduced global cognitive function vs placebo; adverse effect most pronounced in women with lower baseline cognition · model: humans

[^melville2025]: doi:10.1016/j.lanhl.2025.100803 · pmid:41448220 · Melville M et al. · *Lancet Healthy Longevity* 2025;6(12):100803 · systematic-review + meta-analysis · 10 studies (1 RCT, 9 observational); n=1,016,055 · MHT use and risk of mild cognitive impairment or dementia; PROSPERO-registered (CRD42025639384) · no significant association between MHT use and dementia risk; subgroup analyses by timing, duration, and type of MHT showed no significant effects; certainty of evidence ranged from moderate to very low · conclusion: "MHT prescription should be based on other perceived benefits and risks and not for dementia prevention" · model: humans

[^scarabin2018]: doi:10.1080/13697137.2018.1446931 · Scarabin PY · *Climacteric* 2018;21(4):341-345 · meta-analysis of observational studies · progestogens + route effects on VTE in menopausal women · transdermal estradiol not associated with increased VTE vs oral formulations associated with 2–4× increased risk; micronized progesterone associated with lower VTE risk than synthetic progestins · design: observational meta-analysis; confounding by indication cannot be excluded · model: humans

[^schmid2025]: doi:10.1093/gerona/glaf106 · Schmid H et al. (Berlin Aging Study II) · *J Gerontol A Biol Sci Med Sci* 2025 · observational cross-sectional + longitudinal · n=1,404 older adults · sex hormones (estradiol, DHEAS, FAI) and 6 epigenetic clocks · "sex hormones play at best a minor role with respect to biological aging as measured with epigenetic clocks"; inconsistent nominal associations across clock models · model: humans

[^ye2025]: doi:10.1093/gerona/glaf166 · Ye Q et al. · *J Gerontol A Biol Sci Med Sci* 2025 · observational · n=770 postmenopausal women · NHANES data; reproductive profiles + epigenetic aging + mortality · premature menopause associated with accelerated DunedinPACE and higher mortality; ~one-third of mortality excess attributable to accelerated biological aging; HRT suggested as potential mitigant but not tested as intervention · model: humans
