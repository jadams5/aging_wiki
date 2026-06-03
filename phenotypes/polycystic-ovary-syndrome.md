---
type: phenotype
aliases: [PCOS, polycystic ovarian syndrome, Stein-Leventhal syndrome]
icd-10: E28.2
icd-11: null
affected-tissues: ["[[ovary]]", "[[skeletal-muscle]]", "[[adipose-tissue]]", "[[liver]]", "[[cardiovascular-system]]"]
underlying-hallmarks: ["[[deregulated-nutrient-sensing]]", "[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
typical-onset: "Reproductive years; most commonly diagnosed 20–40; symptoms often emerge at menarche"
prevalence-65plus: "Not applicable in the usual sense — PCOS is defined by pre/perimenopausal ovarian function; post-menopausal metabolic sequelae persist but the reproductive phenotype resolves"
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "Rotterdam 2004 (confirmed via PubMed PMID 14688154), Teede 2023, Forslund 2022, Pölönen 2022, Pedroso 2015 verified against primary PDFs or authoritative abstracts; Ryu 2021 and Lavi 2026 verified via PubMed abstracts (closed-access PDFs); Bozdag 2016 abstract not available via Crossref (bronze OA PDF download failed) — prevalence range confirmed directionally from Teede 2023 introduction citing 10–13%; La Marca 2009 DOI is incorrect and has been flagged; Schmidt 2011 n corrected via abstract; canonical-DB fields (ICD-11) not independently verified"
literature-checked-through: 2026-06-03
---

# Polycystic Ovary Syndrome (PCOS)

The most common endocrine disorder of reproductive-age women, affecting approximately 6–21% of this population depending on diagnostic criteria applied [^bozdag2016]. Characterized classically by a triad of hyperandrogenism, oligo/anovulation, and polycystic ovarian morphology — though no single feature is required and considerable phenotypic heterogeneity exists. PCOS carries life-long metabolic consequences that extend far beyond the reproductive years, making it directly relevant to aging biology: affected women face markedly elevated risks for [[type-2-diabetes]], metabolic syndrome, nonalcoholic/metabolic steatotic liver disease (MASLD), and potentially cardiovascular disease. A striking reproductive paradox — a larger ovarian follicle pool reflected in elevated [[amh]] and a tendency toward later [[menopause]] — coexists with these metabolic vulnerabilities.

## Diagnostic criteria

### Rotterdam criteria (2003) — in widest current use

The Rotterdam ESHRE/ASRM consensus requires **≥ 2 of the following 3 features**, after excluding other causes of androgen excess or ovulatory dysfunction [^rotterdam2004]:

1. **Oligo- or anovulation** — irregular cycles (< 8/year or > 35 days apart) as a proxy for anovulation
2. **Clinical or biochemical hyperandrogenism** — hirsutism (modified Ferriman–Gallwey score [mFG] ≥ 4–6 per Teede 2023 guideline; the original FG ≥ 8 threshold is now considered overly conservative), acne, androgenic alopecia, or elevated total/free testosterone / DHEAS / androstenedione
3. **Polycystic ovarian morphology (PCOM)** — ≥ 12 antral follicles per ovary (original; updated to ≥ 20 by newer guidelines using high-resolution ultrasound) or ovarian volume > 10 mL

**Four Rotterdam phenotypes** emerge from this 2-of-3 structure: A (all three), B (HA + OA, no PCOM), C (HA + PCOM, no OA), D (OA + PCOM, no HA — the "normoandrogenic" phenotype). Phenotype D is the mildest metabolically; phenotype A the most severe.

**Practical implications:** Using Rotterdam criteria, prevalence is ~10–21% of reproductive-age women in community samples [^bozdag2016]; using the older NIH 1990 criteria (requires HA + OA, no PCOM) drops this to ~6–9%. Always cite the diagnostic framework when reporting prevalence or comparing studies.

### 2023 International Evidence-Based Guideline update

The most recent international guideline (Teede et al. 2023) [^teede2023] retains the Rotterdam framework but updates PCOM thresholds to ≥ 20 follicles per ovary using modern high-resolution ultrasound, and emphasizes: (i) biochemical testing for hyperandrogenism in all suspected cases; (ii) universal screening for metabolic comorbidities at diagnosis; (iii) assessment of psychological health (anxiety, depression, eating disorders, body image concerns — disproportionately elevated in PCOS).

## Pathophysiology

PCOS is a heterogeneous syndrome with no single unifying causal mechanism established. The leading model integrates three mutually reinforcing axes:

### 1. Hypothalamic-pituitary axis dysregulation — LH excess

A subset of PCOS (especially phenotypes A/B) shows accelerated GnRH pulse frequency, which preferentially drives [[lh]] over FSH secretion. Elevated LH:FSH ratio → excessive androgen production by [[theca-cells]] in the ovary (#gap/needs-stub: `theca-cells` page not yet seeded). The LH excess also impairs follicle maturation, contributing to anovulation and the antral follicle accumulation visible as PCOM.

### 2. Hyperandrogenism

Excess [[testosterone]] and androgen precursors (androstenedione, DHEAS) are central. Androgens arise from:
- Ovarian theca cells (LH-driven; amplified by hyperinsulinemia — see below)
- Adrenal glands (~25–30% of PCOS women have adrenal androgen excess)

Androgens act locally within the ovary to arrest follicle development (possibly via AR-mediated effects on granulosa cell differentiation in [[granulosa-cells]]), and systemically to produce virilizing features and exacerbate insulin resistance via adipose/muscle androgen signaling.

### 3. Insulin resistance and hyperinsulinemia — the metabolic hub

The majority of PCOS women (~70–80%) show insulin resistance in excess of that explained by obesity alone, including lean women with PCOS [^ryu2021]. The [[insulin-igf1]] pathway is central:

- Insulin at supraphysiological levels acts via both the insulin receptor (IR) and the IGF-1 receptor (IGF-1R) on theca cells, amplifying LH-driven androgen synthesis (steroidogenic enzyme upregulation)
- Insulin also suppresses hepatic sex hormone-binding globulin (SHBG) synthesis, increasing free testosterone
- The resulting hyperandrogenism further impairs insulin signaling in muscle/adipose via downregulation of GLUT4 translocation — creating a self-reinforcing cycle

This cycle is the primary driver of the markedly elevated type 2 diabetes risk in PCOS (see "Metabolic aging" below). Hyperinsulinemia also directly stimulates [[deregulated-nutrient-sensing]] by sustaining PI3K-Akt-mTOR signaling in tissues that should be in a nutrient-depleted state.

### 4. Ovarian follicle biology — the AMH paradox

PCOS women have characteristically **elevated serum [[amh]]** — often 2–3× age-matched controls [^la-marca2009] — reflecting a larger antral follicle pool rather than enhanced per-follicle AMH secretion per se. This excess pool is partly responsible for PCOM on ultrasound.

The mechanistic driver of follicle accumulation is incompletely understood. Proposed mechanisms include:
- Androgen-driven primordial → primary follicle recruitment excess
- AMH itself (produced by granulosa cells) may suppress FSH sensitivity and inhibit follicle maturation (autocrine/paracrine), contributing to arrest
- Insulin and IGF-1 signaling may enhance follicle survival

The elevated AMH and large follicle reserve translate to a functional reproductive consequence: PCOS women tend to experience [[menopause]] **later** than age-matched controls (see "Reproductive paradox" below). This is genuinely unusual — a disease-associated state that paradoxically extends one aspect of reproductive longevity, though not without metabolic cost.

## PCOS as an accelerated metabolic aging phenotype

### Type 2 diabetes and insulin resistance

PCOS confers a markedly elevated risk of type 2 diabetes independent of obesity. Key findings:

- In a Korean national health insurance cohort, even **non-obese PCOS women** had a significantly elevated T2D risk; the unadjusted HR for T2D in PCOS vs controls was approximately 2.6-fold higher overall, and remained elevated after adjustment for BMI, family history, physical exercise, and cholesterol [^ryu2021] · n=1,136 PCOS / 5,675 controls · longitudinal case-control · p<0.05 · model: Korean women aged 15–44
- Meta-analyses consistently find PCOS women have 2–4× higher odds of developing T2D compared to controls [^joham2022]
- Impaired glucose tolerance (IGT) prevalence in reproductive-age PCOS women: ~30–40% vs ~10–15% in controls in some series

The mechanism is insulin resistance compounded by relative pancreatic beta-cell secretory dysfunction — a combination that accelerates the [[deregulated-nutrient-sensing]] hallmark trajectory. Lean PCOS women are not protected: intrinsic insulin resistance (possibly androgen-mediated) is present even in the absence of obesity.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — insulin/IGF-1 signaling is the canonical human pathway |
| Phenotype conserved across populations? | yes — T2D excess risk observed in Asian, European, and American cohorts |
| Replicated in prospective cohorts? | yes — multiple cohort studies; UK Biobank-scale analyses support |

### Cardiovascular disease — an unsettled picture

PCOS women have adverse cardiovascular risk factor profiles (dyslipidemia, hypertension, higher BMI, insulin resistance, low-grade inflammation), suggesting elevated atherosclerosis risk. However, whether PCOS independently predicts hard cardiovascular events (MI, stroke, mortality) remains contested:

- A 21-year controlled Swedish follow-up found no excess cardiovascular mortality in PCOS women vs controls, despite worse risk factors (hypertension and higher triglycerides remained elevated), at follow-up age range 61–79 [^schmidt2011] · n=35 PCOS / 120 controls · prospective observational · model: human women
- A subsequent 32-year prospective follow-up (mean age 81 at final assessment) similarly found no excess all-cause mortality (HR 1.1, ns), CVD-related mortality (HR 1.7, ns), or CVD events (HR 1.2, ns) in PCOS; hypertension was more prevalent and T2D incidence trended higher but did not reach significance [^forslund2022] · n=36 PCOS / 119 controls (eligible cohort); 21 PCOS / 55 controls participated in 2019 clinical examination · prospective observational · model: human women
- The main caveat: these Swedish studies are relatively small, possibly underpowered for rare hard outcomes, and recruited hospital-identified PCOS (older, more severe phenotype enrichment). Whether the null finding holds at population scale or in younger-onset PCOS cohorts is uncertain.

**Bottom line:** The surrogate-marker burden is real; the translation to excess hard cardiovascular events in mortality-powered studies has been inconsistent. #gap/contradictory-evidence

### MASLD (metabolic steatotic liver disease / former NAFLD)

Insulin resistance and hyperinsulinemia drive hepatic de novo lipogenesis and impaired fatty acid oxidation, predisposing PCOS women to MASLD. Prevalence estimates for MASLD in PCOS are substantially higher than controls; this is an active area with more recent data. #gap/needs-updated-citation — the aging angle is that PCOS may accelerate a trajectory toward hepatic fibrosis and cirrhosis that otherwise develops later in metabolic life.

## The reproductive paradox — later menopause

PCOS women demonstrate a consistent pattern of later menopausal transition compared to controls:

- Forslund et al. 2022 (the Gothenburg PCOS cohort) reported menopausal age of 52.5 (SD 3.3) for PCOS vs 51.7 (SD 3.5) for controls — a difference of less than 1 year that did not reach statistical significance (P=0.65) [^forslund2022]. The authors note that this null finding likely reflects the fact that all PCOS women in this cohort had undergone wedge resection, which reduces ovarian reserve; the "later menopause" hypothesis is not confirmed in this specific cohort.
- A 2026 Finnish population-based cohort study (NFBC1966; n=380 PCOS / 1,469 controls) found that PCOS women had a **significantly lower likelihood of being late peri-/postmenopausal at age 46** compared to controls (3.1% vs 18.4%; adjusted OR 0.15, 95% CI 0.07–0.32), consistent with later menopausal transition; vasomotor symptoms (hot flashes, sleep disturbances) were also less frequent in PCOS women [^lavi2026] · n=380 PCOS / 1,469 controls · prospective population-based cohort · model: Finnish women born 1966

**Mechanistic interpretation:** the large antral follicle pool (reflected in elevated AMH) provides more follicular "reserve" to be depleted before menopause occurs. This is biologically plausible — AMH predicts ovarian reserve, and higher baseline reserve → later exhaustion. However, this must be tempered:

- The Lavi 2026 data (OR 0.15 for late peri-/postmenopausal status at age 46) is consistent with a large pool effect, but does not yet quantify the absolute difference in age at final menstrual period in a population-based cohort
- The follicular reserve advantage does not prevent the metabolic complications of PCOS; it may simply delay exhaustion of a pool that was dysfunctional throughout
- Study sizes and methodologies vary; the Gothenburg cohort (Forslund 2022) found no significant menopause timing difference, likely due to ovarian surgery confound

#gap/needs-replication — the later-menopause finding is directionally consistent but the quantitative estimates vary across cohorts and the absolute difference may be small.

**The paradox in brief:** PCOS simultaneously accelerates metabolic aging (diabetes, cardiometabolic risk, inflammation) while plausibly delaying one reproductive aging event (follicle pool exhaustion → later menopause). These are not contradictory — they reflect different biological processes.

## Chronic low-grade inflammation and oxidative stress

PCOS is associated with elevated markers of systemic inflammation, including elevated CRP, IL-6, TNF-α, and IL-18 [^rudnicka2021]. This chronic low-grade inflammatory state is thought to be bidirectionally related to insulin resistance:

- Insulin resistance → adipose inflammation → elevated cytokine production
- Inflammatory cytokines (TNF-α, IL-6) → serine phosphorylation of IRS-1 → impaired insulin signaling

This inflammatory phenotype maps onto the [[chronic-inflammation]] hallmark and the [[altered-intercellular-communication]] hallmark (adipokine/cytokine dysregulation altering systemic intercellular signaling).

**Oxidative stress:** Multiple studies report elevated markers of oxidative stress (malondialdehyde, protein carbonyls, reduced antioxidant enzyme activity) in PCOS women vs controls, but causal directionality vs. consequence of insulin resistance and obesity is not established. #gap/no-mechanism

## Telomere length and epigenetic clocks — mixed and limited data

The question of whether PCOS accelerates biological aging as measured by molecular clocks is contested:

- **Telomere data do not clearly support accelerated shortening in PCOS.** Pedroso et al. (2015) found **no significant difference** in leukocyte telomere length (LTL) between PCOS women and controls (T/S ratio 1.2 ± 0.7 vs 1.11 ± 0.54, P=0.75) [^pedroso2015] · n=150 PCOS / 124 controls · case-control · model: Brazilian women aged 13–45. Within the PCOS group, CRP and homocysteine correlated negatively with LTL (r=−0.27 and −0.25 respectively, both P<.01), but this inflammatory-LTL correlation did not produce shorter LTL overall in PCOS vs controls. A larger longitudinal Finnish study (Pölönen et al. 2022, NFBC1966) confirmed no significant difference in LTL between PCOS and controls at age 31 (P=0.56) or age 46 (P=0.41), and no significant difference in the longitudinal attrition rate (P=0.19) [^polonen2022] · n=190 PCOS / 1,054 controls at age 31; n=207 PCOS / 1,324 controls at age 46; n=152 PCOS / 913 controls with longitudinal LTL data · prospective cohort · model: Finnish women. Interestingly, LTL in reference women did attrite significantly from age 31 to 46 (P<0.001) while LTL in PCOS women did not (P=0.96) — a finding the authors describe as unexpected, possibly reflecting an androgen-mediated telomerase effect, but the between-group attrition difference was not statistically significant.
- **Epigenetic clock data are scarce** — no large published study on PCOS-specific acceleration of DNA methylation clocks (Horvath, GrimAge, DunedinPACE) was identified as of 2026-06-03. #gap/no-data

Both studies converge on a null or unexpected-direction finding; neither supports the hypothesis that PCOS accelerates leukocyte telomere shortening. The signal of maintained LTL in PCOS women relative to controls (seen in Pölönen 2022) requires replication before interpretation.

| Dimension | Status |
|---|---|
| Telomere shortening in PCOS? | not supported — both Pedroso 2015 (n=274) and Pölönen 2022 (n>1,500) find no difference in absolute LTL |
| Differential LTL attrition? | uncertain — Pölönen 2022 found LTL did not attrite in PCOS women but did in controls; between-group difference NS (P=0.19) |
| Epigenetic clock acceleration? | not yet tested at meaningful scale |
| Replicated? | convergent null results in two independent cohorts |

## Interventions

PCOS management is primarily aimed at the dominant phenotypic cluster (reproductive, metabolic, or dermatological), but several interventions are directly relevant to the aging angle:

### Lifestyle (first-line)

- **Weight loss (5–10% in overweight/obese PCOS):** restores ovulatory cycles in a meaningful fraction of women; improves insulin sensitivity, lowers androgens, and reduces cardiometabolic risk. Evidence level: strong (multiple RCTs; mechanistically coherent).
- **Exercise:** improves insulin resistance and may restore ovulation independent of weight loss. Aerobic and resistance training both effective.

### Pharmacological

| Agent | Primary target | Aging-relevant mechanism | Evidence |
|---|---|---|---|
| Metformin | Insulin/AMPK | Activates [[ampk]]; reduces hepatic glucose output; improves insulin sensitivity; also activates [[mtor]] inhibition indirectly | Well-established in PCOS; reduces T2D incidence |
| OCP (oral contraceptive pill) | Androgen/LH suppression | Reduces hyperandrogenism; suppresses LH; does NOT address underlying insulin resistance | Standard for symptom management; does not modify metabolic trajectory |
| Inositols (myo-inositol, D-chiro-inositol) | Insulin sensitization | Second-messenger role in insulin signaling; mechanistically plausible | Reasonable RCT evidence for hormonal + metabolic benefit; not yet standard-of-care in major guidelines |
| Spironolactone | Androgen receptor blockade | Anti-androgenic; reduces hirsutism/acne | No meaningful effect on metabolic trajectory |
| GLP-1 receptor agonists | Insulin secretion + satiety | Robust weight-loss effect; corrects insulin resistance; active area of research in PCOS | Increasing evidence; likely to become standard adjunct for overweight/obese PCOS |

**Metformin and longevity:** metformin's AMPK-activating properties (see [[deregulated-nutrient-sensing]]) place it in the broader geroprotective conversation (see TAME trial), and PCOS is one context where its use is mechanistically coherent for both the reproductive phenotype and metabolic aging risk — a rare double alignment.

## Hallmark mapping

| Hallmark | Connection in PCOS |
|---|---|
| [[deregulated-nutrient-sensing]] | Hyperinsulinemia → sustained PI3K-Akt-mTOR signaling; impaired AMPK activation; insulin resistance is the metabolic core of PCOS |
| [[chronic-inflammation]] | Elevated CRP, IL-6, TNF-α; adipose inflammation; bidirectional with insulin resistance |
| [[altered-intercellular-communication]] | Disrupted ovarian paracrine signaling (AMH, FSH/LH, androgen-granulosa-cell crosstalk); systemic adipokine dysregulation |
| [[cellular-senescence]] | Preliminary data suggest granulosa cells may undergo premature senescence in PCOS; poorly characterized #gap/needs-replication |
| [[stem-cell-exhaustion]] | Paradoxically, the ovarian follicle pool is **enlarged** early in PCOS — delayed, not accelerated, exhaustion is the more accurate characterization |

## Limitations and gaps

- **The menopause-timing paradox is supported but not robustly quantified.** Lavi 2026 (n=380 PCOS / 1,469 controls, NFBC1966) provides the strongest population-based evidence for later menopausal transition in PCOS (OR 0.15 for being late peri-/postmenopausal at age 46). Forslund 2022 does not confirm a later menopause in mean age (52.5 vs 51.7, P=0.65), likely due to the confound of wedge resection in all PCOS women. Larger registry-based studies measuring actual age at final menstrual period are needed. #gap/needs-replication
- **Hard cardiovascular outcomes data are insufficient.** Small controlled follow-up studies find no excess cardiovascular mortality; population-scale studies with harder endpoints are lacking. #gap/needs-replication
- **Epigenetic clock data are absent.** Whether PCOS accelerates GrimAge, DunedinPACE, or similar clocks has not been tested in adequately powered cohorts. #gap/no-data
- **Cause vs. consequence of obesity is incompletely disentangled.** Lean-PCOS data exist but are underpowered; the relative contributions of hyperandrogenism vs. obesity-related insulin resistance vs. intrinsic beta-cell dysfunction remain contested.
- **ICD-11 code** for PCOS is not confirmed in this draft; the page uses ICD-10 E28.2 only. #gap/needs-canonical-id for ICD-11
- **Theca-cells page** does not yet exist — `[[theca-cells]]` is an implicit stub in this page.
- **MASLD quantitative data** (prevalence, liver fibrosis incidence rates) need primary-source citation rather than narrative characterization. #gap/needs-replication
- **La Marca 2009 AMH citation** uses a wrong DOI (doi:10.1093/humrep/dep232 resolves to an unrelated stem-cell paper). The AMH 2–3× claim needs re-citation to the correct primary source. #gap/wrong-doi

## Footnotes

[^rotterdam2004]: doi:10.1093/humrep/deh098 · Rotterdam ESHRE/ASRM-sponsored PCOS consensus workshop group · *Human Reproduction* 2004;19(1):41-47 · n=not applicable (consensus statement) · design: expert consensus · criterion: ≥2 of 3 features (HA, OA, PCOM) after exclusion of other causes · >5,000 citations — the foundational diagnostic framework; locally: not_oa

[^bozdag2016]: doi:10.1093/humrep/dew218 · Bozdag G, Mumusoglu S, Zengin D, Karabulut E, Yildiz BO · *Human Reproduction* 2016;31(12):2841-2855 · n=18 studies (systematic review + meta-analysis) · design: meta-analysis · PCOS prevalence 6–21% depending on criteria; Rotterdam criteria yield highest estimates · locally: pending

[^teede2023]: doi:10.1016/j.fertnstert.2023.07.025 · Teede HJ, Tay CT, Laven J, Dokras A, Moran LJ, Piltonen TT, Costello MF, et al. · *Fertility and Sterility* 2023;120(4):767-793 · design: international evidence-based clinical guideline (254 recommendations; 77 EBR + 54 CR + 123 PP; GRADE framework) · confirms PCOM threshold ≥20 follicles per ovary on high-resolution US (recommendation 1.4.4, CR); mandates metabolic and psychological screening at diagnosis; mFG ≥4–6 for hirsutism (rec 1.3.5) · locally: downloaded

[^joham2022]: doi:10.1016/s2213-8587(22)00163-2 · Joham AE, Norman RJ, Stener-Victorin E, Legro RS, Franks S, Moran LJ, Boyle J, Teede HJ · *Lancet Diabetes & Endocrinology* 2022;10(9):668-680 · design: review · summary of PCOS epidemiology, pathophysiology, and long-term health outcomes including metabolic disease and T2D risk · locally: not_oa

[^ryu2021]: doi:10.1016/j.fertnstert.2020.12.018 · Ryu KJ, Kim MS, Kim HK, Kim YJ, Yi KW, Shin JH, Hur JY, Kim T, Park H · *Fertility and Sterility* 2021;115(6):1569-1575 · n=1,136 PCOS / 5,675 matched controls (Korean National Health Insurance Service-National Sample Cohort; PCOS women aged 15–44 matched 1:5 by age, income, region) · design: longitudinal case-control · unadjusted HR for T2D: ~2.6-fold higher in PCOS vs controls; remained significantly elevated after adjustment for BMI, family history, exercise, and cholesterol; association held in both obese and non-obese subgroups · model: Korean women · locally: not_oa

[^schmidt2011]: doi:10.1210/jc.2011-1677 · Schmidt J, Landin-Wilhelmsen K, Brännström M, Dahlgren E · *Journal of Clinical Endocrinology and Metabolism* 2011;96(12):3794-3803 · n=35 PCOS / 120 age-matched controls (61–79 yr at follow-up) · design: 21-year prospective controlled follow-up · no excess MI, stroke, diabetes, cancer, or mortality; PCOS women had higher hypertension prevalence (P=0.008) and triglycerides (P=0.012) but this did not translate to cardiovascular events · model: Swedish women · locally: pending (bronze OA)

[^forslund2022]: doi:10.1016/j.ejogrb.2022.02.020 · Forslund M, Schmidt J, Brännström M, Landin-Wilhelmsen K, Dahlgren E · *European Journal of Obstetrics & Gynecology and Reproductive Biology* 2022;271:195-203 · n=36 PCOS / 119 controls (eligible cohort; 21 PCOS / 55 controls in 2019 clinical examination) · design: 32-year prospective follow-up to mean age 81 · no excess all-cause mortality (HR 1.1, ns), CVD-related mortality (HR 1.7, ns), CVD events (HR 1.2, ns); hypertension trended higher (HR 1.76, P=0.08); menopausal age 52.5 (SD 3.3) PCOS vs 51.7 (SD 3.5) controls (P=0.65, ns) — note: all PCOS women had undergone wedge resection, limiting menopause-timing inference · model: Swedish women · locally: downloaded

[^lavi2026]: doi:10.1111/aogs.70198 · Lavi J, Savukoski S, Hurskainen E, Ollila MM, Morin-Papunen L, Niinimäki M, Piltonen TT · *Acta Obstetricia et Gynecologica Scandinavica* 2026;105(5):836-846 · n=380 PCOS / 1,469 controls (NFBC1966; PCOS defined by Rotterdam criteria including AMH-based PCOM) · design: prospective population-based birth cohort · PCOS women significantly less likely to be late peri-/postmenopausal at age 46 (3.1% vs 18.4%; adjusted OR 0.15, 95% CI 0.07–0.32); hot flashes and sleep disturbances less frequent (adjusted OR 0.68, 95% CI 0.51–0.92) · model: Finnish women born 1966 · locally: not_found (PMID 41949217; PMC open access)

[^rudnicka2021]: doi:10.3390/ijms22073789 · Rudnicka E, Suchta K, Grymowicz M, Calik-Ksepka A, Smolarczyk K, Duszewska AM, Smolarczyk R, Meczekalski B · *International Journal of Molecular Sciences* 2021;22(7):3789 · design: review · elevated CRP, IL-6, TNF-α, IL-18 in PCOS; inflammation is both cause and consequence of insulin resistance · locally: pending

[^la-marca2009]: doi:10.1093/humrep/dep232 · **WARNING: This DOI resolves to an unrelated paper** ("Immortalized human skin fibroblast feeder cells support growth and maintenance of both human embryonic and induced pluripotent stem cells," a stem-cell biology paper). The correct DOI for the La Marca AMH round table (2009) is not confirmed — #gap/wrong-doi. Do NOT use this citation until the correct DOI is verified. The claim that AMH is elevated 2–3× in PCOS is broadly supported by the PCOS literature but requires re-citation to the correct primary source.

[^pedroso2015]: doi:10.1016/j.fertnstert.2014.10.035 · Pedroso DC, Miranda-Furtado CL, Kogure GS, Meola J, Okuka M, Silva C, Calado RT, Ferriani RA, Keefe DL, dos Reis RM · *Fertility and Sterility* 2015;103(2):542-547 · n=150 PCOS / 124 controls · design: case-control · **no significant difference in LTL between PCOS and controls** (T/S ratio 1.2 vs 1.11, P=0.75); within PCOS group, CRP and homocysteine negatively correlated with LTL · model: Brazilian women aged 13–45 · locally: downloaded

[^polonen2022]: doi:10.1530/eje-22-0462 · Pölönen J, Pinola P, Ronkainen J, Blakemore AI, Buxton JL, Tapanainen JS, Franks S, Piltonen TT, Sebert S, Morin-Papunen L · *European Journal of Endocrinology* 2022;187(5):651-661 · n=190 PCOS / 1,054 controls at age 31; n=207 PCOS / 1,324 controls at age 46; n=152 PCOS / 913 controls with longitudinal LTL attrition data (NFBC1966) · design: cross-sectional and longitudinal observational · no significant difference in LTL between PCOS and controls at age 31 (P=0.56) or age 46 (P=0.41); longitudinal attrition rate difference NS (P=0.19); LTL in controls declined significantly (P<0.001) while PCOS did not (P=0.96) · model: Finnish women born 1966 · locally: downloaded
