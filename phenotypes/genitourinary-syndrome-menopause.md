---
type: phenotype
aliases: [GSM, vulvovaginal atrophy, atrophic vaginitis, urogenital atrophy, VVA]
icd-10: N95.2
icd-11: null
affected-tissues: ["[[vagina]]", "[[vulva]]", "[[urethra]]", "[[bladder]]"]
underlying-hallmarks: ["[[altered-intercellular-communication]]"]
typical-onset: "Perimenopause onset possible; prevalence and severity rise progressively with years since menopause; symptoms worsen indefinitely without treatment"
prevalence-65plus: "~50–84% of postmenopausal women report symptoms (varies by survey definition and methodology); significantly undertreated"
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "Nappi 2016 REVIVE (Climacteric PMC OA PDF), Santen 2020 (Menopause PMC OA PDF), and Jaber 2025 (Cancers MDPI OA PDF) verified against full primary-source PDFs; Portman 2014 is closed-access (not in archive) — consensus terminology and simultaneous multi-journal publication claim cross-checked against PubMed PMID 25160739 abstract and Crossref metadata (title, volume, pages confirmed); other citations (Park 2023, Pavlovic 2019, Sanchez-Rovira 2020, Archer 2015, Archer 2017, Cui 2014, Ruanphoo 2020, Pessoa 2024, Zheng 2025, Tsuboi 2026, Murphy 2026, Nappi 2023) not independently re-verified against full PDF"
literature-checked-through: 2026-06-03
---

# Genitourinary Syndrome of Menopause (GSM)

**Genitourinary syndrome of menopause (GSM)** is the 2014 consensus term unifying the genital and urinary symptoms caused by estrogen (and androgen) deficiency at and after [[menopause]]. It replaced the older terms "vulvovaginal atrophy" (VVA) and "atrophic vaginitis," which captured only vaginal anatomy and missed the urinary component and the broader physiological drivers [^portman2014-gsm].

GSM affects an estimated 50–84% of postmenopausal women yet is chronically under-reported and under-treated due to patient reluctance to discuss and clinician failure to ask [^nappi2016-revive]. Unlike [[vasomotor-symptoms]] — which typically peak in perimenopause and improve spontaneously over years — GSM is **chronic and progressive**: it worsens indefinitely with time since menopause in the absence of treatment. This makes GSM one of the most persistent quality-of-life burdens in the female aging trajectory.

## Terminology and ICD coding

The term change from VVA/atrophic vaginitis to GSM was ratified in 2014 by a joint consensus conference of the North American Menopause Society (NAMS) and the International Society for the Study of Women's Sexual Health (ISSWSH) [^portman2014-gsm]. The consensus was simultaneously published in four journals (*Menopause*, *Maturitas*, *The Journal of Sexual Medicine*, *Climacteric*).

**ICD-10 coding note:** ICD-10 N95.2 (*postmenopausal atrophic vaginitis*) is the closest available code and is widely used for GSM billing, but it is narrower than GSM — it does not capture urinary symptoms, labial atrophy, or the full genital-urinary complex. The term "GSM" should be used in clinical and research contexts; N95.2 is a billing approximation. No distinct ICD-10 or ICD-11 code for GSM existed as of this seeding. #gap/needs-verification (ICD-11 code status)

## Epidemiology

- Prevalence estimates range from ~50% to >80% of postmenopausal women depending on survey methodology, symptom threshold, and time since menopause [^nappi2016-revive].
- The European REVIVE survey (n=3768) found that among postmenopausal women with VVA symptoms, vaginal dryness was most common (70%); symptoms interfered with sexual satisfaction (72%), sexual spontaneity (66%), and intimacy (62%) [^nappi2016-revive]. About 60% of participants rated their symptoms the same or worse than when they first appeared.
- Despite high prevalence, under-discussion persists: in the REVIVE survey, 61.6% had discussed VVA symptoms with a clinician, but only 10.3% of those said the clinician had initiated the conversation; 32.1% of the total survey cohort was treatment-naive at the time of the survey [^nappi2016-revive].
- The under-treatment gap is driven by both patient-side factors (embarrassment, normalization of symptoms as "just aging," not knowing treatment is available) and clinician-side factors (failure to screen, time pressure, uncertainty about treatment safety).

## Pathophysiology

### Estrogen-dependent tissues of the urogenital sinus

The vulva, vagina, urethra, and bladder trigone are all derived from the embryological **urogenital sinus** and share high density of estrogen receptors (ERα encoded by [[esr1]]; ERβ encoded by [[esr2]]). These tissues depend on systemic and local estrogen signaling for structural maintenance.

[[Estradiol]] withdrawal at menopause triggers a cascade of tissue-level changes:

| Tissue | Estrogen-withdrawal effect |
|---|---|
| Vaginal epithelium | Thinning; loss of rugal folds; loss of superficial and intermediate cell layers; increased fragility and susceptibility to microtrauma |
| Vaginal lamina propria | Reduced collagen content; loss of elastin; declining stromal vascularity |
| Vaginal pH | Rises from ~3.5–4.5 (acidic, lactobacillus-maintained) to ~5.0–7.5 (near-neutral) |
| Vaginal secretions | Decreased transudation and lubrication; Bartholin gland secretions reduced |
| Vulva / labia | Loss of labial fat pads; labial atrophy; reduced clitoral sensitivity |
| Urethra | Thinning of urethral mucosa; shortening; reduced sphincter competence |
| Bladder trigone | Trigonal thinning; increased urgency; dysuria |

### Vaginal microbiome shift

Under estrogen's influence, superficial and intermediate vaginal epithelial cells are rich in glycogen. Glycogen is fermented by *Lactobacillus* spp. (primarily *L. crispatus*, *L. iners*, *L. jensenii*) to lactic acid, maintaining vaginal pH < 4.5 — an environment hostile to most pathogens [^park2023-microbiome]. Estrogen withdrawal reduces glycogen availability:

- *Lactobacillus* abundance falls
- Anaerobic species (Gardnerella, Prevotella, Mobiluncus) and enteric bacteria expand
- Vaginal pH rises toward neutral
- Risk of bacterial vaginosis and recurrent UTIs increases substantially

This is relevant to the [[lactobacillus]] page (if seeded) and the [[dysbiosis]] hallmark framework. The microbiome shift may also contribute to a local pro-inflammatory environment, linking to [[altered-intercellular-communication]]. #gap/needs-replication (interventional RCT data on restoring microbiome via probiotic supplementation is limited; a 2026 systematic review found modest but inconsistent effects [^tsuboi2026-probiotics])

### Urinary symptoms

The urethra and bladder trigone are embryologically contiguous with vaginal tissue and express the same estrogen receptor profile. Estrogen deficiency leads to:

- Urethral mucosal thinning → reduced urethral closure pressure → stress urinary incontinence contribution
- Trigonal sensitization → urgency, frequency, dysuria
- Loss of protective acidic vaginal secretions bathing the urethral meatus → colonization by enteric organisms → recurrent UTIs (rUTIs)

GSM is one of the most common modifiable contributors to recurrent UTIs in postmenopausal women [^murphy2026-rct].

### Contrast with vasomotor symptoms

| Feature | Vasomotor symptoms (VMS) | GSM |
|---|---|---|
| Mechanism | KNDy neuron hyperactivity (hypothalamic) | Estrogen-receptor-dependent epithelial/mucosal changes |
| Onset | Perimenopause / early postmenopause | Perimenopause; rises with years since menopause |
| Natural course | **Typically remits** over 1–7 years without treatment in most (not all) women | **Chronic and progressive** — worsens indefinitely without treatment |
| Spontaneous improvement | Yes, partial or complete in majority | No; no documented spontaneous improvement |
| Treatment required | Often not, or episodic | Long-term or indefinite management |

See [[vasomotor-symptoms]] for the full VMS mechanistic picture.

## Clinical presentation

Symptom domains:

**Genital:**
- Vaginal dryness (most common complaint; reported by ~55–70% of symptomatic women)
- Dyspareunia (painful intercourse) — the most treatment-seeking symptom
- Vulvar burning, itching, or irritation
- Vaginal discharge (usually scant; pH-related changes in character)
- Postcoital bleeding from fragile mucosa
- Labial and clitoral atrophy

**Urinary:**
- Urinary urgency and frequency
- Dysuria (burning with urination)
- Recurrent UTIs
- Stress urinary incontinence component (overlaps with pelvic floor dysfunction)

**Sexual:**
- Reduced libido (multifactorial; GSM contributes through dyspareunia-avoidance)
- Reduced arousal and lubrication
- Anorgasmia (secondary to structural changes)

Symptoms vary in severity; not all women with tissue changes have symptoms — atrophy and symptom burden do not correlate perfectly.

## Diagnosis

GSM is a **clinical diagnosis** supported by history and examination; no specific test is required.

- **History:** characteristic symptom cluster in a postmenopausal (or hypo-estrogenic) woman; onset/worsening post-menopause; absence of other explanatory pathology
- **Examination:** thin, pale, smooth, friable vaginal walls; reduced rugal folds; scant or absent secretions; pH testing (>5 is consistent with GSM); cytology or vaginal maturation index (VMI) can document shift from superficial to parabasal cells
- **Differential:** lichen sclerosus, lichen planus, allergic or contact dermatitis, pelvic inflammatory disease, vaginal malignancy — these require specific evaluation if examination is atypical

## Treatments

Treatment efficacy is well-established for hormonal approaches; non-hormonal options are effective for milder symptoms; energy-based devices remain contested.

### Low-dose vaginal/topical estrogen (first-line hormonal)

Low-dose local estrogen — available as vaginal cream, vaginal ring (Estring), vaginal tablet/suppository (Vagifem/Yuvafem), or vaginal insert (Imvexxy) — is the most effective treatment for moderate-to-severe GSM.

Mechanism: direct ERα stimulation in vaginal epithelium restores tissue architecture, increases glycogen, lowers pH, and promotes *Lactobacillus* re-establishment.

**Systemic absorption:** at low doses used for GSM, serum estradiol levels rise minimally and remain within the normal untreated postmenopausal range (undetectable to ~10.7 pg/mL by LC/GC-MS/MS) [^santen2020-systemic]. This distinguishes vaginal from systemic MHT and is the basis for the favorable safety profile. Higher doses (25 µg), atrophied mucosa, and applicator-placed (vs. manually deposited) products yield higher absorption; ultra-low-dose formulations (4–10 µg) show the smallest systemic signal.

**Breast cancer safety:** the safety of low-dose vaginal estrogen in women on aromatase inhibitors (AIs) or with hormone-receptor-positive breast cancer is a recognized clinical question. A 2019 meta-analysis found no statistically significant increase in breast cancer recurrence risk with low-dose vaginal estrogen in women on AIs, though confidence intervals are wide given small sample sizes and short follow-up [^pavlovic2019-bc-safety]. Specialist guidance (NAMS, ACOG) generally permits low-dose vaginal estrogen in breast cancer survivors with severe GSM after shared decision-making. A Phase II RCT of 0.005% estriol vaginal gel in HR-positive postmenopausal women on AIs found no significant change in serum estriol and no safety signal [^sanchez-rovira2020-estriol]. See [[topical-estrogens]] for the detailed compound page (stub — needs seeding). #gap/long-term-unknown (long-term recurrence data in AI users still limited)

A 2026 RCT found that vaginal estradiol also positively modulates the vaginal microbiome and mucosal immune mediators in women with HIV, illustrating the breadth of biological effects [^murphy2026-rct].

### Vaginal DHEA / prasterone (intrarosa)

Intravaginal dehydroepiandrosterone (prasterone; Intrarosa) 6.5 mg insert applied nightly is FDA-approved (2016) for dyspareunia due to GSM. Mechanism: DHEA is locally converted intracellularly in vaginal tissue to both androgens and estrogens via steroidogenic enzymes, acting on both AR and ER without measurable rise in systemic sex steroid levels in most studies [^archer2015-prasterone].

RCT data (Archer 2015) demonstrated significant improvements in dyspareunia severity, VMI, vaginal pH, and vaginal secretions vs. placebo [^archer2015-prasterone]. A comparative study suggested efficacy comparable to low-dose conjugated estrogens and estradiol for symptom endpoints [^archer2017-comparison].

Particularly relevant for women who wish to avoid exogenous estrogen (e.g., breast cancer survivors with hormone-receptor-positive disease) — though DHEA is still converted locally to estradiol, so the absolute "estrogen-free" claim requires nuance.

### Ospemifene (osphena)

Ospemifene is an oral selective estrogen receptor modulator (SERM) — the only non-vaginal prescription option for GSM. FDA-approved for dyspareunia (2013) and vaginal dryness (2014) due to GSM. Acts as ERα agonist in vaginal tissue; endometrial-neutral or weakly antagonist; bone-protective.

A 2014 meta-analysis of RCTs confirmed efficacy for dyspareunia and vaginal maturation index improvement vs. placebo [^cui2014-ospemifene]. Not recommended with hormonal MHT; contraindicated in women at high risk for venous thromboembolism. Breast cancer safety data are more limited than for local vaginal estrogen.

### Non-hormonal moisturizers and lubricants

- **Vaginal moisturizers** (Replens, hyaluronic acid formulations): applied regularly (not just at intercourse); provide longer-lasting lubrication by adhering to vaginal mucosa; effective for dryness and mild discomfort; no hormonal mechanism
- **Lubricants** (water-based, silicone-based): used specifically during sexual activity; symptomatic relief only; no tissue-level effect
- These are appropriate first-line options for women who cannot or will not use hormonal therapy, and as adjuncts to hormonal treatment for breakthrough symptoms

A 2023 review noted that hyaluronic acid vaginal preparations showed symptom improvement in some trials but are not yet at the same evidence level as vaginal estrogen [^nappi2023-local-estrogen].

### Energy-based devices (CO2 laser, radiofrequency) — contested

Fractional CO2 laser and radiofrequency (RF) devices have been marketed for GSM, with the proposed mechanism being controlled thermal microablation stimulating collagen remodeling and mucosal regeneration in vaginal tissue.

**Evidence status:** Several early uncontrolled case series showed symptom improvement. However, sham-controlled RCT evidence has produced mixed results:

- A 2020 RCT (Ruanphoo et al.) found microablative fractional CO2 laser improved dyspareunia and vaginal dryness scores vs. sham at 3 months, but the trial was small [^ruanphoo2020-co2-sham].
- A 2024 systematic review and meta-analysis of laser RCTs concluded that laser therapy improved VAS dyspareunia and dryness scores but with high heterogeneity and mostly small trials [^pessoa2024-laser-meta].
- A 2025 RCT found non-ablative erbium laser reduced recurrent UTI incidence in postmenopausal women vs. control [^zheng2025-erbium-ruti].
- A 2025 RCT (Jaber et al.; n=34 randomized, 19 laser / 15 sham) in breast cancer survivors found CO2 laser did not significantly improve the co-primary endpoints (intercourse dryness and dyspareunia) vs. sham. Laser did significantly reduce daily dryness (p=0.017) and improve vaginal hydration (p=0.004) and VHI (p<0.001) as secondary outcomes, but also worsened itch (p=0.033), dysuria (p=0.003), burning (p=0.009), and discharge (p=0.002) compared to sham. The study was underpowered (halted early due to COVID-19) [^jaber2025-co2-bc].

**FDA 2018 warning:** The US FDA issued a safety communication cautioning that energy-based devices for vaginal "rejuvenation" and GSM had not been proven safe and effective through adequate clinical testing, and that serious adverse events (vaginal burns, scarring, pain, dyspareunia, infections) had been reported. This warning prompted demand for more rigorous sham-controlled trials.

**Current position:** Energy-based devices remain an option for women who cannot use hormonal treatments (e.g., certain breast cancer survivors) and who fail non-hormonal options, but they are not first- or second-line. The evidence is not yet sufficient to recommend them as equivalent to low-dose vaginal estrogen. #gap/contradictory-evidence

## Hallmark mapping

GSM is most directly an expression of **[[altered-intercellular-communication]]**: the estrogen signaling axis that coordinates urogenital tissue maintenance is disrupted by menopause-driven estradiol withdrawal. Locally, this alters epithelial-stromal paracrine signaling, immune cell function (vaginal IgA, mucosal immune mediators), and the epithelium-microbiome interface.

Secondary hallmarks contribute mechanistically:
- **[[stem-cell-exhaustion]]** — through [[menopause]] (ovarian follicle pool depletion drives the estrogen withdrawal that causes GSM); and possibly via reduced epithelial progenitor cell function in estrogen-deprived tissue
- **[[dysbiosis]]** — the *Lactobacillus* → polymicrobial microbiome shift in the vagina is a hallmark-adjacent process; recurrent UTI and BV susceptibility follow from this

## Extrapolation from model organisms

| Dimension | Status |
|---|---|
| Estrogen-receptor density in urogenital sinus conserved? | Yes — ovariectomized rodent (OVX mouse, rat) is the primary GSM preclinical model |
| Vaginal atrophy after OVX in rodents? | Yes — thinning of vaginal epithelium, reduced glycogen, microbiome shift documented |
| Replicated in humans? | Yes — GSM is defined clinically in humans; no extrapolation needed |

The OVX rodent model has high face validity for vaginal tissue changes but poor validity for the full urinary symptom complex and for the human social/behavioral dimensions of dyspareunia.

## Limitations and gaps

- **Prevalence precision:** the ~50–84% prevalence range reflects heterogeneous survey methods, definitions, and populations. Many studies use self-report; objective tissue assessment gives different rates. A true population-representative longitudinal cohort with standardized objective criteria does not exist. #gap/needs-replication
- **ICD-10 mismatch:** N95.2 ("postmenopausal atrophic vaginitis") predates the GSM concept and doesn't capture urinary symptoms; no single ICD code fully represents GSM. Coding heterogeneity complicates claims-based epidemiology. #gap/needs-verification
- **Energy-based devices:** the evidence base for CO2 laser and RF is insufficient to establish equivalence to vaginal estrogen. A 2025 sham-controlled RCT in breast cancer survivors (Jaber et al.) showed null primary endpoints with mixed secondary outcomes (some improved, some worsened vs. sham), and was underpowered. #gap/contradictory-evidence
- **Breast cancer survivors:** this population urgently needs effective GSM treatment (severe GSM burden + AI use) but has the most restricted treatment options; long-term recurrence data for local estrogen in AI users is still maturing. #gap/long-term-unknown
- **Non-hormonal treatment durability:** lubricants and moisturizers address symptoms but do not reverse tissue changes; long-term comparative effectiveness vs. vaginal estrogen is understudied. #gap/needs-replication
- **Probiotic supplementation:** a 2026 systematic review found insufficient evidence to recommend *Lactobacillus*-based probiotics for GSM; no RCT has yet shown durable microbiome normalization from probiotics alone [^tsuboi2026-probiotics]. #gap/needs-replication
- **Androgen contribution:** DHEA's local androgenic effects (not just estrogenic) may explain some efficacy, and androgen deficiency is an understudied parallel pathway in GSM. No pure androgen therapy (non-DHEA) is FDA-approved for GSM.

## Cross-references

- [[menopause]] — upstream causal context; estradiol withdrawal is the proximate driver
- [[estradiol]] — the hormone whose deficiency causes GSM
- [[esr1]] / [[esr2]] — estrogen receptors mediating tissue effects
- [[vasomotor-symptoms]] — the key contrast: VMS remits; GSM does not
- [[topical-estrogens]] — dedicated compound page for vaginal estrogen formulations (stub — needs seeding)
- [[altered-intercellular-communication]] — the hallmark GSM primarily exemplifies
- [[dysbiosis]] — *Lactobacillus* → polymicrobial shift is a microbiome-level manifestation
- [[lactobacillus]] — if a dedicated page exists or is seeded
- [[skin-aging]] — parallel estrogen-dependent tissue aging with similar ERα/ERβ mechanism
- [[osteoporosis]] — co-occurring estrogen-deficiency consequence in postmenopausal women
- [[sarcopenia]] — co-occurring; both worsened by estrogen deficiency in women post-menopause
- [[interventions/procedural/co2-laser]] — if/when laser intervention page is seeded (stub)

## Footnotes

[^portman2014-gsm]: doi:10.1097/GME.0000000000000329 · Portman DJ, Gass ML, Vulvovaginal Atrophy Terminology Consensus Conference Panel · *Menopause* 2014;21(10):1063–1068 · NAMS/ISSWSH joint consensus; introduces term "genitourinary syndrome of menopause" to replace VVA/atrophic vaginitis; rationale: VVA focused narrowly on vaginal anatomy, missed urinary symptoms and broader pathophysiology; simultaneously published in *Maturitas* (doi:10.1016/j.maturitas.2014.07.013), *J Sex Med* (doi:10.1111/jsm.12686), and *Climacteric* (doi:10.3109/13697137.2014.946279) · model: expert consensus on human clinical evidence

[^nappi2016-revive]: doi:10.3109/13697137.2015.1107039 · Nappi RE et al. (European REVIVE survey) · *Climacteric* 2016;19(2):188–197 · cross-sectional internet survey; n=3768 postmenopausal women with VVA symptoms across 4 European countries (Italy, Germany, Spain, UK); most common symptom: vaginal dryness (70%); symptom interference with sexual satisfaction 72%, spontaneity 66%, intimacy 62%; ~60% rated symptoms same or worse than at onset; 61.6% had discussed VVA with HCP, but only 10.3% said HCP initiated; 32.1% treatment-naive at survey time; 45.2% currently using a VVA treatment · model: human survey (observational)

[^park2023-microbiome]: doi:10.3390/diagnostics13061193 · Park MG et al. · *Diagnostics* 2023;13(6):1193 · review of genitourinary microbiome changes in menopause; estrogen withdrawal → reduced glycogen → *Lactobacillus* decline → pH rise → polymicrobial shift; restoration of Lactobacillus-dominant microbiome by estrogen therapy documented; model: human review

[^santen2020-systemic]: doi:10.1097/GME.0000000000001463 · Santen RJ, Mirkin S, Bernick B, Constantine GD · *Menopause* 2020;27(3):361–370 · systematic review of PK studies using LC/GC-MS/MS assays; proposed normal untreated postmenopausal estradiol range: undetectable to 10.7 pg/mL (mean ~3.9 pg/mL); low-dose vaginal estrogen (≤25 µg estradiol or 0.3 mg CEE) produces estradiol within or near this postmenopausal range; absorption is dose-dependent and influenced by formulation, applicator placement, and vaginal wall thickness; ultra-low-dose (4–10 µg) inserts show the smallest systemic signal; mean basal postmenopausal level previously overestimated by less-sensitive RIA assays (older ≤20–30 pg/mL reference revised downward by MS) · model: human systematic review + PK data

[^pavlovic2019-bc-safety]: doi:10.1016/j.clbc.2019.07.007 · Pavlović RT et al. · *Clin Breast Cancer* 2019;19(6):e731–e740 · meta-analysis; breast cancer survivors on AIs + low-dose vaginal estrogen; no statistically significant increase in recurrence risk (wide CIs; small aggregate n); supports shared-decision-making approach · model: meta-analysis (human)

[^sanchez-rovira2020-estriol]: doi:10.1634/theoncologist.2020-0417 · Sánchez-Rovira P et al. · *Oncologist* 2020;25(12):e1913–e1920 · Phase II RCT; n=88 HR-positive postmenopausal women on AIs; 0.005% estriol vaginal gel vs. placebo; serum estriol did not rise significantly above postmenopausal range; symptom improvement; no recurrence safety signal at 12 weeks · model: human RCT

[^archer2015-prasterone]: doi:10.1097/GME.0000000000000428 · Archer DF et al. · *Menopause* 2015;22(9):950–963 · RCT; prasterone (DHEA) 6.5 mg intravaginal nightly vs. placebo; significant improvements in dyspareunia severity, VMI, vaginal pH, secretions; serum sex steroid levels remained within postmenopausal range; Phase III data supporting FDA approval (2016) · model: human RCT, n=216

[^archer2017-comparison]: doi:10.1016/j.jsbmb.2017.03.014 · Archer DF et al. · *J Steroid Biochem Mol Biol* 2017;174:1–8 · comparison of intravaginal prasterone 6.5 mg, conjugated estrogens 0.3 mg, and estradiol 10 µg; all three improved VMI and vaginal pH; prasterone efficacy comparable on most endpoints · model: human observational comparative

[^cui2014-ospemifene]: doi:10.1111/jsm.12377 · Cui Y et al. · *J Sex Med* 2014;11(2):487–497 · systematic review and meta-analysis; ospemifene 60 mg/day oral; significant improvement in dyspareunia severity, superficial cell percentage, parabasal cell percentage, vaginal pH vs. placebo; endometrial safety: minimal; no increase in thromboembolic events vs. placebo in trial duration · model: meta-analysis (human RCTs)

[^ruanphoo2020-co2-sham]: doi:10.1097/GME.0000000000001542 · Ruanphoo P et al. · *Menopause* 2020;27(8):858–864 · RCT; microablative fractional CO2 laser vs. sham; n=50; significant improvement in dyspareunia and vaginal dryness VAS at 3 months post-treatment vs. sham; limitations: small n, short follow-up, no active-comparator arm · model: human RCT

[^pessoa2024-laser-meta]: doi:10.61622/rbgo/2024rbgo38 · Pessoa LLMN et al. · *Rev Bras Ginecol Obstet* 2024;46:e-rbgo38 · systematic review and meta-analysis of RCTs; laser therapy improved VAS dyspareunia and vaginal dryness scores vs. control; high heterogeneity across trials; most trials small; insufficient evidence to establish equivalence to low-dose vaginal estrogen · model: meta-analysis (human RCTs)

[^zheng2025-erbium-ruti]: doi:10.1007/s10103-025-04637-y · Zheng J et al. · *Lasers Med Sci* 2025 · RCT; non-ablative vaginal erbium laser vs. control for recurrent UTI prevention in postmenopausal women; reduced rUTI incidence at follow-up; mechanism proposed as mucosal thickening improving urethral barrier; limitations: single site, short follow-up · model: human RCT

[^jaber2025-co2-bc]: doi:10.3390/cancers17071241 · Jaber S, Levin G, Ram-Weiner M, Lev-Sagie A · *Cancers (Basel)* 2025;17(7):1241 · randomized sham-controlled trial; n=36 randomized (19 laser, 17 sham; 2 sham withdrew → 19 laser / 15 sham analyzed); BC survivors with GSM (intercourse dryness and/or dyspareunia ≥5 on VAS); three CO2 laser sessions (FemiLift; 45–80 mJ/pixel) every 20–30 days vs. sham; co-primary endpoints (intercourse dryness VAS, dyspareunia VAS) not significantly improved vs. sham (dyspareunia: laser effect 0.12±0.43, p=0.777; intercourse dryness: −0.03±0.40, p=0.944); laser did significantly reduce daily dryness (−1.30±0.55, p=0.017), improve vaginal hydration (Schirmer test; +3.24±1.13, p=0.004), and VHI (+2.26±0.50, p<0.001) vs. sham; laser also significantly worsened itch (+0.84±0.39, p=0.033), dysuria (+1.26±0.42, p=0.003), burning (+0.96±0.37, p=0.009), and discharge (+1.14±0.36, p=0.002) vs. sham; trial halted early due to COVID-19 (planned n=30/group); open-phase extension (6 laser treatments) showed modest further improvement but remained clinically insufficient · model: human RCT (underpowered)

[^tsuboi2026-probiotics]: doi:10.1016/j.maturitas.2026.108921 · Tsuboi I et al. · *Maturitas* 2026;108:108921 · systematic review; *Lactobacillus*-based probiotics for GSM in postmenopausal women; insufficient evidence to recommend; no RCT demonstrated durable microbiome normalization from probiotics alone; heterogeneous strain/dose regimens · model: systematic review (human)

[^murphy2026-rct]: doi:10.1093/cid/ciaf669 · Murphy K et al. · *Clin Infect Dis* 2026 · RCT; vaginal estradiol in women with HIV + GSM; improved vaginal microbiome composition, mucosal immune mediators, and GSM symptom scores vs. placebo; illustrates breadth of biological effects of local estrogen beyond epithelial morphology · model: human RCT

[^nappi2023-local-estrogen]: doi:10.1080/13697137.2023.2218998 · Nappi RE et al. · *Climacteric* 2023;26(5):360–368 · review of local estrogen therapy options for GSM; hyaluronic acid formulations showed symptom improvement in some trials but evidence level below vaginal estrogen; tailored approach depending on symptom severity, patient preference, cancer history · model: narrative review (human)
