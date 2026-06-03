---
type: phenotype
aliases: [late-onset hypogonadism, age-related testosterone decline, male hypogonadism of aging, ADAM, LOH, androgen deficiency in the aging male]
icd-10: "E29.1 (testicular hypofunction — closest ICD-10 code; no aging-specific code exists; see note in body)"
icd-11: null
affected-tissues: ["[[testis]]", "[[skeletal-muscle]]", "[[bone]]", "[[brain]]", "[[adipose-tissue]]"]
underlying-hallmarks: ["[[altered-intercellular-communication]]", "[[stem-cell-exhaustion]]"]
typical-onset: "Testosterone begins declining ~age 30–40 (~1–2%/yr total T; bioavailable T falls faster due to rising SHBG); clinically symptomatic LOH predominantly 60+"
prevalence-65plus: "2.1% by strict EMAS criteria in men 40–79 (Wu 2010, n=2,966 with complete data); biochemically low total T in ~20% of men >60, ~30% >70, ~50% >80 (Harman 2001)"
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "Wu 2010 (NEJM) verified against full PDF — all diagnostic criteria, thresholds, and prevalence figures cross-checked; Harman 2001 (BLSA) verified against PubMed structured abstract (n, decline rate, hypogonadal prevalence by decade confirmed); Lincoff 2023 (TRAVERSE) closed-access — framing cross-checked against Crossref metadata, Zitzmann 2025 position statement, and Yeap 2024 narrative review; ICD-10 E29.1 assignment not independently re-verified against official ICD-10-CM tabular list (seeder's #gap/needs-verification retained); canonical-DB identity fields not applicable (phenotype page)"
literature-checked-through: 2026-06-03
---

# Andropause (Late-Onset Hypogonadism)

**"Andropause" is a popular but clinically imprecise term.** The rigorous clinical entity is **late-onset hypogonadism (LOH)** — a syndrome defined by both biochemical androgen deficiency *and* specific symptoms attributable to that deficiency. It is deliberately contrasted with [[menopause]]: unlike menopause, which is abrupt (~51 years median), universal (100% of aging women), and complete (permanent ovarian cessation), LOH is **gradual, partial, variable, and NOT universal**. Most aging men have lower testosterone than at 25; a much smaller minority have *symptomatic* LOH meeting formal diagnostic criteria. Preserved (if reduced) fertility into old age is the norm — there is no male analogue of the final menstrual period.

**ICD-10 note:** ICD-10-CM code E29.1 (testicular hypofunction) is the closest available code, covering hypogonadotropic and hypergonadotropic hypogonadism and the general concept of androgen deficiency. No aging-specific code exists for LOH as a distinct aging phenotype. This page uses E29.1 as a pragmatic approximation; clinical documentation may require context-specific qualifier codes. #gap/needs-verification (ICD-10 assignment not confirmed against official ICD-10-CM tabular list; verify before clinical use.)

## The contrast with menopause

| Feature | Menopause | LOH / "Andropause" |
|---|---|---|
| Universality | 100% of aging women | 2.1% by strict EMAS criteria (40–79 yr); ~20–50% have biochemically low T |
| Onset | Abrupt (median ~51 yr) | Gradual (~1–2%/yr total T from ~30–40) |
| Completeness | Complete gonadal cessation | Partial — residual testosterone production persists |
| Fertility | Ends abruptly with FMP | Preserved, declining, but men can father children into old age |
| Defining event | 12 months amenorrhea | None — no single transition event |
| Diagnostic criteria | Clear biological anchor (FMP) | Requires both biochemical + symptom thresholds |
| Prevalence of symptoms | Near-universal in transition | Symptomatic LOH is a minority phenotype |

The asymmetry is clinically important: "low T" on a lab report does not equal LOH; the over-diagnosis/over-treatment controversy in male hormone medicine stems partly from conflating biochemical decline (near-universal) with the symptomatic syndrome (uncommon).

## Diagnostic criteria — EMAS (Wu et al. 2010)

The most rigorous population-based operational definition derives from the **European Male Ageing Study (EMAS)**, which enrolled 3,369 community-dwelling men aged 40–79 across eight European centers; after exclusions for known pituitary or testicular disease or use of relevant medications, 3,219 were in the analysis sample, of whom 2,966 had complete testosterone and questionnaire data [^wu2010].

**LOH requires ALL of the following:**

1. **At least 3 sexual symptoms** from: decreased frequency of morning erection, decreased frequency of sexual thoughts, erectile dysfunction
2. **Total testosterone < 11 nmol/L** (< 3.2 ng/mL), measured in a morning blood sample by mass spectrometry (GC-MS)
3. **Free testosterone < 220 pmol/L** (< 64 pg/mL), calculated from total T, SHBG, and albumin using Vermeulen's formula

By these criteria, **LOH prevalence was 2.1% (63 of 2,966 subjects) across men aged 40–79** in the EMAS cohort, rising with age from 0.1% in men 40–49 to 5.1% in men 70–79 [^wu2010]. This stands in stark contrast to the marketing-driven "low T" framing that implies a much larger treatable population — most men with biochemically low testosterone do not have the sexual symptom cluster required for diagnosis, and most men with sexual symptoms do not have testosterone levels at or below the thresholds.

**Why symptoms AND biochemistry?** The EMAS data showed that the three sexual symptoms had specific testosterone thresholds below which symptom probability rose markedly (total T thresholds: 8.0 nmol/L for decreased sexual thoughts, 8.5 nmol/L for erectile dysfunction, 11 nmol/L for decreased morning erection frequency; free T thresholds: 160–280 pmol/L for the three sexual symptoms). Physical symptoms (inability to perform vigorous activity, difficulty walking >1 km, inability to bend) and psychological symptoms (loss of energy, sadness, fatigue) also showed significant associations with testosterone levels individually, but did NOT cluster syndromatically with low testosterone — they were not in close proximity to the low-T cluster in the multiple correspondence analyses. This absence of syndromic clustering, not absence of any association, explains why physical and psychological symptoms were excluded from the diagnostic criteria and supports the primacy of sexual function in LOH diagnosis [^wu2010].

**Practical caveats:**
- Morning samples are required; testosterone has diurnal variation (~30–35% higher in early morning than afternoon).
- Mass spectrometry (LC-MS/MS) is more accurate than immunoassay for testosterone measurement, particularly at low levels.
- Total T is accessible; free T is typically calculated (via Vermeulen equation) rather than directly measured in clinical labs.
- A single low testosterone measurement should not prompt treatment — repeat testing is recommended before diagnosis.

## Pathophysiology

### Leydig cell decline (primary component)

The primary source of testosterone in men is the [[leydig-cells|Leydig cells]] of the testis, which constitute the testicular interstitial compartment. With aging:

- Leydig cell **number declines** — post-mortem studies show a ~40% reduction in Leydig cell number between ages 20 and 80 #gap/needs-replication
- Leydig cell **steroidogenic capacity per cell declines** — reduced expression of steroidogenic enzymes (StAR, CYP11A1, CYP17A1) and electron transfer chain components impairs cholesterol-to-testosterone conversion
- **Mitochondrial dysfunction** in aging Leydig cells impairs the crucial mitochondrial cholesterol transport step (StAR protein)
- Oxidative stress accumulation in the testicular microenvironment compounds the intrinsic cellular decline

This primary gonadal failure component causes LH to rise compensatorily — and indeed, serum LH rises with age in men, reflecting pituitary attempts to drive an increasingly unresponsive testis [^wu2010].

### Hypothalamic-pituitary (secondary) component

A secondary hypothalamic-pituitary component operates alongside primary testicular failure:

- **GnRH pulse amplitude and frequency decline** with age, reducing the LH drive to the testis
- **Somatostatin tone increases**, blunting GH release (which normally supports Leydig cell function via IGF-1)
- This blunts the expected compensatory LH rise, making the overall HPT axis response partially inadequate relative to the gonadal deficit

In practice, most aging men exhibit a **mixed** picture — elevated LH (primary component dominant) but LH that has not risen as high as would be expected given the degree of testosterone deficiency (secondary component attenuating the response) [^huhtaniemi2011].

### SHBG rise amplifies free T decline

Sex hormone-binding globulin (SHBG) rises with age — driven by declining insulin signaling, increased hepatic synthesis, and reduced androgen-mediated suppression of SHBG production. Because only free (unbound) testosterone is biologically active at the tissue level:

- **Total testosterone declines ~0.4–0.8%/year** from midlife [^harman2001]
- **Bioavailable (free) testosterone declines faster** — the Fabbri et al. Baltimore Longitudinal Study of Aging (BLSA) analysis (n=788, ages 30–96) found bioavailable T declines linearly across the lifespan, while total T remains more stable until after age 70, then falls [^fabbri2016]
- Free T levels in 80-year-olds are approximately **50% of those in young adults**, whereas total T declines more modestly (~80%) [^iwamoto2009]

This divergence between total and free T means that measuring total T alone can underestimate the functional androgen deficit in older men with elevated SHBG.

### Comorbidity-driven "functional hypogonadism" — REVERSIBLE

A critical clinical distinction: **obesity, type 2 diabetes, chronic illness (COPD, CKD, CHF, OSA), and opioid use** suppress testosterone through mechanisms distinct from intrinsic gonadal aging — typically by reducing LH pulse amplitude or increasing SHBG [^huhtaniemi2011] [^de-silva2024]:

- Visceral adipose tissue aromatizes testosterone to estradiol, which suppresses GnRH/LH via negative feedback
- Inflammatory cytokines (IL-1β, TNF-α, IL-6) from adipose tissue directly suppress Leydig cell steroidogenesis
- This **functional hypogonadism** may be **fully reversible** with weight loss and comorbidity treatment — and often should be addressed before initiating testosterone replacement therapy

Huhtaniemi and Forti (2011) estimated that comorbidities, particularly obesity, are more commonly responsible for low testosterone in aging men than intrinsic gonadal aging itself [^huhtaniemi2011].

## Consequences of LOH

### Sarcopenia and body composition

Testosterone is an anabolic hormone for skeletal muscle — it activates androgen receptor signaling that increases muscle protein synthesis and satellite cell activation. LOH contributes to:
- Accelerated loss of lean mass — see [[sarcopenia]]
- Reduced muscle strength and physical performance
- Shift toward central adiposity as androgenic suppression of visceral fat depots declines

### Bone loss and fracture risk

Testosterone contributes to bone maintenance via two mechanisms: direct androgen receptor signaling in osteoblasts and osteoclasts, AND via peripheral aromatization to estradiol, which provides the dominant estrogenic signal for bone protection in men. The aromatization step is catalyzed by [[cyp19a1|CYP19A1 (aromatase)]]:

- Men with aromatase deficiency or estrogen receptor mutations develop severe osteoporosis despite normal testosterone — demonstrating that **estradiol, not testosterone, is the primary sex hormone for bone maintenance in men** [^de-silva2024]
- LOH-associated bone loss thus has both a direct androgenic and an indirect estrogenic mechanism
- Cross-link: [[osteoporosis]]

### Metabolic effects

- Reduced insulin sensitivity and increased visceral adiposity — a reciprocal relationship (low T → more visceral fat → lower T forms a vicious cycle)
- Increased cardiovascular risk markers (adverse lipid profiles, endothelial dysfunction, inflammatory cytokines)
- Anemia — testosterone stimulates erythropoietin production; LOH contributes to the anemia of aging (normocytic normochromic picture) — see [[anemia-of-aging]]

### Sexual function and quality of life

The EMAS diagnostic criteria center sexual symptoms for good reason: these have the clearest dose-response relationship with testosterone. Below ~11 nmol/L total T and ~220 pmol/L free T:
- Morning erection frequency declines markedly
- Libido (sexual desire) declines
- Erectile dysfunction worsens (though ED has multiple non-hormonal causes; testosterone is necessary but not sufficient for normal erectile function)
- Mood effects (depression, fatigue, cognitive complaints) are weaker and less specific to testosterone [^wu2010] [^snyder2018]

### Cognitive effects

The picture is mixed and contested. Prospective data from the BLSA showed that higher free testosterone index was associated with better visual and verbal memory in older men [^moffat2002], but the TTrials cognitive substudy found no significant improvement in memory after 12 months of testosterone treatment in men with age-associated memory impairment (n=493; randomized, double-blind, placebo-controlled) [^resnick2017]. The TTrials overall showed no consistent cognitive benefit. #gap/contradictory-evidence

## Epidemiology

| Metric | Value | Source |
|---|---|---|
| LOH by strict EMAS criteria (40–79 yr) | 2.1% (63/2,966 with complete data) | Wu et al. 2010 (enrolled n=3,369; analysis n=3,219; complete-data n=2,966) |
| Biochemically low total T (>60 yr) | ~20% | Harman et al. 2001 (n=890 BLSA) |
| Biochemically low total T (>70 yr) | ~30% | Harman et al. 2001 |
| Biochemically low total T (>80 yr) | ~50% | Harman et al. 2001 |
| Longitudinal total T decline rate | ~0.124 nmol/L/yr | Harman et al. 2001 |

**The gap between biochemical prevalence (~20–50% depending on age threshold) and symptomatic LOH prevalence (2.1% by strict EMAS criteria) is the central epidemiological fact of this field.** It explains why "low T" screening in asymptomatic men is not recommended by major guidelines (Endocrine Society, EAU, ISSM).

## Treatment: testosterone replacement therapy (TRT)

### Indications and patient selection

TRT is indicated for men with confirmed LOH — meeting both biochemical and symptom criteria — after excluding reversible causes. Contraindications include breast cancer, prostate cancer (active; not necessarily a lifetime contraindication — evolving), severe erythrocytosis (Hct >54%), uncontrolled heart failure, and desire for fertility (TRT suppresses sperm production via HPG feedback).

### Benefits (TTrials evidence, n=788 men ≥65)

The **Testosterone Trials (TTrials)** — seven coordinated, randomized, double-blind, placebo-controlled trials conducted at 12 US academic sites [^snyder2018]:

- **Sexual function:** increased sexual activity, sexual desire, and erectile function
- **Mood:** modest improvement in mood and depressive symptoms
- **Bone:** increased volumetric BMD and estimated bone strength at spine and hip
- **Anemia:** increased hemoglobin in men with both explained and unexplained anemia
- **Physical function:** mixed — no improvement in 6-minute walk distance in slow walkers; marginal overall improvement
- **Cognition:** no benefit in men with age-associated memory impairment (dedicated cognitive substudy, n=493) [^resnick2017]

The De Silva et al. 2024 Lancet Diabetes & Endocrinology review (PMID 39159641) characterizes TRT benefits as "modest, yet statistically significant" for sexual function, with insufficient evidence for fracture prevention or diabetes prevention in functional hypogonadism [^de-silva2024].

### Cardiovascular safety — TRAVERSE trial

The cardiovascular safety of TRT was the dominant clinical concern following the Testosterone in Older Men with Mobility Limitations (TOM) trial (2010), which was terminated early due to excess cardiovascular adverse events in a frail high-risk population. The **TRAVERSE trial** (NCT03518034) — the definitive non-inferiority cardiovascular safety RCT — enrolled 5,246 hypogonadal men aged 45–80 with pre-existing cardiovascular disease or elevated CVD risk, randomized to testosterone gel vs. placebo, with a primary composite MACE endpoint [^lincoff2023]:

- **Primary MACE outcome: non-inferior** — testosterone did not significantly increase major adverse cardiovascular events vs. placebo
- Testosterone increased erythrocytosis (elevated hematocrit) and was associated with a higher rate of pulmonary embolism and atrial fibrillation vs. placebo — key safety signals to monitor
- Prostate cancer incidence: slightly higher in testosterone arm (requires long-term follow-up to interpret)
- A 2025 European Expert Panel position statement synthesizing TRAVERSE data confirmed the non-inferiority finding and endorsed TRT as cardiovascular-safe in appropriately selected hypogonadal men [^zitzmann2025]

**The TOM/TRAVERSE discordance** reflects patient selection: the TOM trial enrolled frail, mobility-limited men at high baseline CVD risk; TRAVERSE enrolled a broader but still elevated-risk population. The cardiovascular profile of TRT in healthy younger hypogonadal men remains less characterized by large RCT data.

### Over-diagnosis and over-treatment controversy

The gap between guideline-defined LOH (2.1% by strict EMAS criteria) and the marketed "low T" phenomenon reflects commercial incentives and loose application of testosterone testing. Key issues:
- Many men treated for "low T" have only biochemically low testosterone without the required sexual symptom cluster
- Functional hypogonadism (obesity/diabetes-driven) is often not adequately addressed before initiating TRT
- TRT causes infertility via HPG axis suppression — a critical consideration for men still desiring fertility
- Long-term (>5 year) safety data from large RCTs are limited; the TRAVERSE trial median follow-up was ~33 months

## Hallmark mapping

| Hallmark | Mechanism |
|---|---|
| [[altered-intercellular-communication]] | Testosterone is a systemic endocrine signal; its decline disrupts androgen-dependent intercellular communication across muscle, bone, brain, hematopoietic, and metabolic systems |
| [[stem-cell-exhaustion]] | Leydig cell number and steroidogenic capacity decline with age — a form of testicular progenitor/functional cell exhaustion; satellite cell activation for muscle repair is partly androgen-dependent |

## Extrapolation from model organisms

| Dimension | Status |
|---|---|
| Leydig cell decline with age conserved in mammals? | Yes — documented in rodents (rat, mouse) and primates; the cellular mechanism is conserved |
| SHBG rise with age conserved? | Partial — rodents lack SHBG in the same form; the free T amplification effect is specific to primates and humans |
| LOH functional consequences (muscle, bone) in animal models? | Yes for muscle/bone (androgenic signaling well-modeled) — hypogonadal mouse/rat models replicate sarcopenia and osteopenia features |
| Replicated in humans? | Yes for epidemiology + primary biochemistry; EMAS and BLSA are large-scale human longitudinal data |

**Key caveat:** Mouse testosterone dynamics are more rapid and do not replicate the decades-long gradual human decline. Rodent LOH models typically use surgical castration (orchidectomy) — an abrupt intervention — rather than the gradual aging trajectory seen in humans.

## Limitations and gaps

- **ICD-10 specificity:** E29.1 is a non-aging-specific code; no dedicated ICD entry for LOH as a geriatric aging phenotype exists. #gap/needs-verification
- **Leydig cell number decline:** the quantitative estimates (~40% decline by age 80) are based primarily on post-mortem histology studies with methodological limitations (agonal changes, post-mortem interval). #gap/needs-replication
- **Cognitive benefit:** the mechanistic evidence (Moffat 2002 free T–memory association) conflicts with the null trial result (Resnick 2017 TTrials cognitive substudy). Whether timing of testosterone decline, duration of deficiency, or baseline cognitive status modifies TRT's cognitive effects is unanswered. #gap/contradictory-evidence
- **Long-term TRT safety:** TRAVERSE median follow-up was ~33 months; prostate cancer, erythrocytosis, and thromboembolic signals require longer observation. #gap/long-term-unknown
- **Functional hypogonadism reversibility:** the degree to which weight loss / metabolic improvement restores testosterone to the LOH threshold in obese men is not well quantified by large RCTs. #gap/needs-replication
- **Ethnic and geographic variation:** testosterone reference ranges and SHBG levels vary across populations; EMAS criteria derived from European men.
- **Fertility effects of TRT:** suppression of spermatogenesis by exogenous testosterone — and recovery time after cessation — require dedicated counseling; inadequately addressed in most TRT trial designs.

## Cross-references

- [[menopause]] — the female counterpart; key contrast
- [[testosterone]] (stub — needs seeding; compound page for the molecule)
- [[leydig-cells]] (stub — needs seeding; cell-type page)
- [[testis]] (stub — needs seeding; tissue page)
- [[lh]] (stub — needs seeding; LH protein page)
- [[cyp19a1]] — aromatase; converts testosterone to estradiol in peripheral tissues; critical for bone protection in men
- [[sarcopenia]] — LOH contributes to age-associated muscle loss
- [[osteoporosis]] — LOH contributes via androgen receptor signaling + reduced estradiol via aromatization
- [[anemia-of-aging]] — testosterone stimulates erythropoiesis
- [[frailty]] — LOH is a contributor to the frailty phenotype
- [[altered-intercellular-communication]] — hallmark driving systemic downstream effects
- [[interventions/pharmacological/testosterone-replacement-therapy]] (stub — needs seeding)

## Footnotes

[^wu2010]: doi:10.1056/NEJMoa0911101 · Wu FCW, Tajar A, Beynon JM et al. (EMAS Group) · *N Engl J Med* 2010;363(2):123–135 · PMID 20554979 · observational cross-sectional · enrolled n=3,369 community-dwelling European men aged 40–79; analysis n=3,219 (150 excluded for pituitary/testicular disease or relevant medications); prevalence denominator n=2,966 (complete testosterone + questionnaire data) · 8 European centers · morning fasting blood samples; testosterone by GC-MS; free T calculated from total T + SHBG + albumin (Vermeulen formula) · LOH prevalence 2.1% (63/2,966) by combined symptom + biochemical criteria: ≥3 sexual symptoms (decreased morning erection frequency, decreased sexual thoughts frequency, erectile dysfunction) + total T <11 nmol/L + free T <220 pmol/L; prevalence rose with age from 0.1% (40–49 yr) to 5.1% (70–79 yr); physical and psychological symptoms showed individual T associations but not syndromic clustering with low T · model: human

[^harman2001]: doi:10.1210/jcem.86.2.7219 · Harman SM, Metter EJ, Tobin JD, Pearson J, Blackman MR · *J Clin Endocrinol Metab* 2001;86(2):724–731 · PMID 11158037 · longitudinal observational · n=890 men · Baltimore Longitudinal Study of Aging (BLSA) · age-invariant independent decline of ~0.124 nmol/L per year total T; hypogonadal T levels in ~20% of men >60, ~30% >70, ~50% >80 · model: human

[^fabbri2016]: doi:10.1093/gerona/glw021 · Fabbri E, An Y, Gonzalez-Freire M et al. · *J Gerontol A Biol Sci Med Sci* 2016;71(9):1202–1209 · PMID 26921861 · longitudinal observational · n=788 White participants aged 30–96 · BLSA · bioavailable T declines linearly across lifespan in men; total T stable until age 70 then falls; SHBG accelerates in older adults explaining divergence · model: human

[^huhtaniemi2011]: doi:10.1038/nrurol.2011.47 · Huhtaniemi I, Forti G · *Nat Rev Urol* 2011;8(6):335–344 · PMID 21502974 · review · comorbidities (obesity, T2DM, COPD, CVD) more common cause of low T than intrinsic gonadal aging; only 2% meet strict criteria; functional hypogonadism may be reversible with weight loss; TRT requires careful patient selection

[^iwamoto2009]: doi:10.1111/j.1442-2042.2008.02203.x · Iwamoto T, Yanase T, Horie H, Namiki M, Okuyama A · *Int J Urol* 2009;16(2):168–174 · PMID 19054164 · cross-sectional observational · free T declines to ~50% of young adult levels in senescence; total T only to ~80%; free T preferred for Japanese guideline diagnosis · model: human

[^rastrelli2018]: doi:10.1111/cen.13756 · Rastrelli G, O'Neill TW, Ahern T et al. (EMAS Group) · *Clin Endocrinol (Oxf)* 2018;89(4):459–469 · PMID 29855071 · prospective observational · n=3,369 men (40–79 yr) · median 4.3-yr follow-up · low free T (not low total T with normal free T) associated with new/worsened sexual symptoms: low desire OR=2.67, ED OR=4.53 · model: human

[^snyder2018]: doi:10.1210/er.2017-00234 · Snyder PJ, Bhasin S, Cunningham GR et al. · *Endocr Rev* 2018;39(3):369–386 · PMID 29522088 · review of 7-trial TTrials program · n=788 men ≥65 with low T (<275 ng/dL) · 12 months testosterone gel vs. placebo · sexual function improved; bone BMD increased; anemia improved; mood slightly improved; physical function marginal; cognition no benefit; coronary noncalcified plaque volume increased · model: human RCT

[^resnick2017]: doi:10.1001/jama.2016.21044 · Resnick SM, Matsumoto AM, Stephens-Shields AJ et al. · *JAMA* 2017;317(7):717–727 · PMID 28241356 · rct · n=493 men ≥65 with low T + age-associated memory impairment · 12 months · no significant change in delayed paragraph recall or other cognitive domains vs. placebo · model: human

[^lincoff2023]: doi:10.1056/NEJMoa2215025 · Lincoff AM et al. (TRAVERSE investigators) · *N Engl J Med* 2023;389(2):107–117 · rct · n=5,246 hypogonadal men aged 45–80 with pre-existing CVD or elevated risk · testosterone gel vs. placebo · primary MACE composite: non-inferior; higher rates of erythrocytosis, pulmonary embolism, and atrial fibrillation in testosterone arm; prostate cancer numerically higher; median follow-up ~33 months · model: human

[^zitzmann2025]: doi:10.1111/andr.70062 · Zitzmann M, Rastrelli G, Murray RD et al. (European Expert Panel for Testosterone Research) · *Andrology* 2026;14(1):294–302 · PMID 40372318 · consensus position statement · synthesizes TRAVERSE + prior meta-analyses; TRT cardiovascular non-inferiority confirmed; recommends TRT in appropriately selected LOH; notes erythrocytosis and thromboembolic monitoring requirements · locally available (completed)

[^de-silva2024]: doi:10.1016/S2213-8587(24)00199-2 · De Silva NL, Papanikolaou N, Grossmann M et al. · *Lancet Diabetes Endocrinol* 2024;12(10):761–774 · PMID 39159641 · review · functional hypogonadism (obesity/T2DM/aging without HPT axis pathology); TRT benefits modest for sexual function; insufficient evidence for fracture prevention or diabetes prevention; estradiol (via aromatization) — not testosterone — primary sex steroid for bone in men; emphasizes reversible functional hypogonadism

[^moffat2002]: doi:10.1210/jc.2002-020419 · Moffat SD, Zonderman AB, Metter EJ, Blackman MR, Harman SM, Resnick SM · *J Clin Endocrinol Metab* 2002;87(11):5001–5007 · PMID 12414864 · longitudinal observational · n=407 men aged 50–91 · ~10-year follow-up · BLSA · higher free testosterone index associated with better visual and verbal memory and visuospatial function; hypogonadal men had steeper visual memory decline · model: human (observational; no causal inference)
