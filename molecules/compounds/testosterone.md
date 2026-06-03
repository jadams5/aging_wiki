---
type: compound
aliases: [T, 17β-hydroxyandrost-4-en-3-one, 17beta-hydroxyandrost-4-en-3-one]
pubchem-cid: 6013
inchikey: MUMGGOZAMZWBJJ-DYKIIFRCSA-N
chembl-id: CHEMBL386630
drugbank-id: DB00624
cas-number: 58-22-0
molecular-formula: C19H28O2
molecular-weight-da: 288.43
administration-route: multi-route
biologic: false
mechanisms: [androgen-receptor-agonist, ar-agonism]
targets: ["[[androgen-receptor]]", "[[cyp19a1]]", "[[esr1]]", "[[srd5a1]]"]
hallmarks: ["[[altered-intercellular-communication]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Powered 3-5 yr RCT of TRT in men aged 65+ with low-normal T (200-350 ng/dL) using all-cause mortality and composite frailty/functional-independence endpoint as primary outcomes; current TRAVERSE follow-up data and T-Trials extension could partially fill this gap."
clinical-trials-active: 37
literature-checked-through: 2026-06-03
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "TRAVERSE (Lincoff 2023) verified against PubMed abstract (full PDF not OA); T-Trials (Snyder 2016) verified against full PDF; Hudson 2023 verified against full PDF; Harman 2001 verified against PubMed abstract only (full PDF not retrieved — % conversion figures flagged); Smith 1994 and Morishima 1995 not re-read (consistent with esr1.md prior verification); Baillargeon 2014 and TRAVERSE secondary analyses (Bhasin, Pencina, Gagliano) abstract-only; canonical-DB IDs (PubChem 6013, ChEMBL CHEMBL386630) confirmed via REST API; DrugBank DB00624 and CAS 58-22-0 accepted per well-established identity"
---

# Testosterone

The principal endogenous androgen in men; a steroid hormone synthesized mainly by [[leydig-cells]] in the [[testis]] under the pulsatile control of luteinizing hormone ([[lh]]) from the anterior pituitary. In women, testosterone is produced in smaller amounts by the ovaries and adrenal cortex and serves as the obligate precursor to 17β-estradiol.

From an aging perspective, testosterone occupies a unique and contested space: a hormone that declines gradually (not universally, not abruptly) with male aging, with a clinical intervention—testosterone replacement therapy (TRT)—that is both FDA-approved and embroiled in a genuine scientific controversy around over-treatment, cardiovascular risk, and optimal patient selection.

## Identity

- **PubChem CID:** 6013
- **InChIKey:** MUMGGOZAMZWBJJ-DYKIIFRCSA-N
- **ChEMBL:** CHEMBL386630
- **DrugBank:** DB00624
- **CAS:** 58-22-0
- **Molecular formula:** C19H28O2
- **Molecular weight:** 288.43 g/mol
- **Class:** androstane steroid; endogenous androgen; precursor to 17β-estradiol (via [[cyp19a1]]) and DHT (via SRD5A1/SRD5A2)

## Biosynthesis and circulation

Testosterone is synthesized in [[leydig-cells]] via the steroidogenic cascade from cholesterol: cholesterol → pregnenolone → progesterone → androstenedione → testosterone. The rate-limiting step is LH-stimulated cholesterol import into the mitochondria via StAR protein. ACTH from the adrenal cortex drives a parallel, smaller-volume testosterone stream from the zona reticularis.

In circulation, roughly:
- 54–68% is bound to **sex hormone-binding globulin (SHBG)** — biologically inactive; SHBG rises with age, reducing free T
- 30–44% is loosely bound to **albumin** — weakly held; may dissociate in capillary beds; considered "bioavailable"
- 1–4% is **free testosterone (fT)** — unbound; physiologically active at the androgen receptor

**Clinical implication:** Total testosterone measurements alone can be misleading. An older man with elevated SHBG may have a low-normal total T but substantially reduced free T. Calculated free testosterone (Vermeulen formula) or equilibrium dialysis assays better reflect androgenic milieu. Debate persists over which fraction is the most clinically actionable target for treatment decisions.

## Key metabolic fates

Two transformations dominate testosterone's downstream biology:

1. **Aromatization to 17β-estradiol (E2)** — by [[cyp19a1]] (aromatase) in adipose, bone, brain, testes. The resulting [[estradiol]] acts via ER-α ([[esr1]]) and ER-β (*ESR2*). This is the dominant route through which testosterone governs male bone mineral density and epiphyseal closure. Natural human experiments (aromatase-deficiency mutations in *CYP19A1* and ER-α-inactivating mutations in *ESR1*) show men with these defects develop severe osteoporosis and tall stature despite normal or elevated circulating testosterone, confirming estrogen — not direct AR signaling — is the primary driver of male trabecular bone homeostasis [^smithcyp19a1] [^morishimaesr1].

2. **5α-reduction to dihydrotestosterone (DHT)** — by SRD5A1 (skin, liver) and SRD5A2 (prostate, genital skin, hair follicles). DHT has 2–5× higher AR affinity than testosterone but **does not undergo aromatization** — it has no direct estrogenic activity. DHT drives prostate growth, androgenic alopecia, and male secondary sex characteristics. 5α-reductase inhibitors (finasteride, dutasteride) block this conversion; they reduce prostate volume but also reduce all DHT-dependent androgenic tone in target tissues.

## Mechanism of action

Testosterone acts primarily via the androgen receptor (AR / *NR3C4*), a ligand-activated transcription factor. Upon binding testosterone or DHT:

1. AR dissociates from HSP90 chaperone complexes in the cytoplasm
2. Receptor undergoes conformational change and homodimerization
3. AR-ligand complex translocates to the nucleus
4. Binds androgen response elements (AREs) in gene promoters
5. Recruits coactivator complexes (SRC-1, SRC-3, CBP/p300) → drives target gene transcription

**Muscle:** AR activation upregulates mTORC1-mediated protein synthesis and supports [[satellite cells|satellite cell]] proliferation and differentiation — the anabolic mechanism relevant to [[sarcopenia]] prevention.

**Bone:** A bifurcated mechanism — direct AR signaling supports periosteal bone expansion; aromatase-derived estradiol acting via [[esr1]] governs trabecular remodeling and is the dominant effector of male skeletal homeostasis.

**Erythropoiesis:** AR activation stimulates erythropoietin (EPO) production in renal peritubular cells and directly promotes erythroid progenitor differentiation in bone marrow → rise in hemoglobin and hematocrit. Clinically relevant as a therapeutic target (anemia of chronic disease, HIV-associated anemia) and as a monitoring risk (polycythemia during TRT).

**Brain/mood/cognition:** AR and ER expression in the hippocampus, amygdala, and prefrontal cortex. Low testosterone in men associates with depressed mood, anhedonia, fatigue, and cognitive complaints. However, whether low T causes these symptoms or is a downstream marker of systemic illness is a longstanding methodological dispute.

## Age-related decline — the partial and variable picture

**The gradient:** Testosterone declines in men at approximately **−0.124 nmol/L per year** (total T) after age 30–40, an age-invariant longitudinal effect independent of illness or other health factors [^harman2001]. This corresponds to roughly 0.4–1% per year relative to typical middle-aged levels, though the absolute annual loss is constant. The decline is gradual, not abrupt, and highly variable between individuals. Some men maintain mid-normal levels into their 80s; others fall into the hypogonadal range by their 50s. By Harman 2001 criteria, ~20% of men over 60, ~30% over 70, and ~50% over 80 have hypogonadal total T levels.

**Contrast with menopause:** This decline is categorically different from the abrupt, near-universal ovarian failure of [[menopause]]. There is no male equivalent of the acute estrogen-withdrawal phenotype. The decline is:
- **Partial** — most older men retain appreciable circulating testosterone
- **Variable** — not reliably predicted by age alone
- **Multifactorial** — adiposity, systemic illness, sleep apnea, medications (opioids, glucocorticoids), and stress all suppress the HPG axis independently of aging

The clinical syndrome [[andropause]] (also called late-onset hypogonadism or age-related hypogonadism) describes the subset of men in whom this decline reaches the symptomatic hypogonadal threshold. The subset is real; the size and boundaries are contested.

**Reference ranges and the "Low T" controversy:** The normal range for total testosterone is typically cited as ~300–1000 ng/dL in adult men (varies by laboratory). The FDA-approved TRT indication targets **serum total T consistently below ~300 ng/dL** with symptoms. A major concern — highlighted in multiple clinical guidelines — is that TRT prescriptions expanded dramatically in the 2000s–2010s, with a substantial fraction prescribed to men with borderline or normal T levels, motivated more by pharmaceutical marketing than by robust evidence of benefit at those levels. This over-treatment pattern is a legitimate controversy distinct from the question of whether TRT benefits hypogonadal men [^baillargeon2014].

## Aging physiology: organ-system effects

| System | Effect of low T | Evidence quality |
|---|---|---|
| Skeletal muscle | Accelerates muscle protein catabolism; contributes to [[sarcopenia]] and [[frailty]] | RCT-level (T-Trials, TRAVERSE sub-studies) |
| Bone | Contributes to [[osteoporosis]] via reduced aromatization to E2 (primary) and reduced periosteal expansion (secondary) | RCT + natural experiments |
| Erythropoiesis | Low T contributes to normocytic anemia; TRT reliably raises hemoglobin | RCT (JAMA Network Open 2023) |
| Libido / sexual function | Low T causally associated with reduced libido; erectile function relationship is weaker and dose-threshold-dependent | Meta-analysis (Hudson 2023, Lancet Healthy Longevity) |
| Mood / cognition | Association strong; causality debated; TRT in truly hypogonadal men improves depressive symptoms | TRAVERSE sub-study (2024) |
| Metabolic / fat distribution | Low T associated with visceral adiposity, insulin resistance; TRT modestly reduces fat mass | RCT but modest effect sizes |
| Cardiovascular | **Actively contested** — see below | Mixed; now largely reassured by TRAVERSE |

## Human trial evidence

### T-Trials (Snyder 2016) — multi-center, placebo-controlled, older men

The Testosterone Trials were a set of seven coordinated placebo-controlled double-blind RCTs in 790 men aged ≥65 with total T <275 ng/dL and at least one qualifying symptom — the most rigorously selected TRT trial population to date [^snyder2016]. Conducted at 12 sites over 1 year. Participants received testosterone gel (AndroGel 1%) targeting T in the mid-normal range for men aged 19–40. This 2016 paper reports the three main trials (Sexual Function, Physical Function, Vitality); four additional sub-trials (Bone, Anemia, Cardiovascular/T-CRAB, Cognitive) were reported separately.

**Key findings (three main trials):**
- **Sexual function:** Significantly improved vs placebo (treatment effect on PDQ-Q4 sexual activity score: 0.58, 95% CI 0.38–0.78; P<0.001). Sexual desire and erectile function also improved significantly.
- **Physical function:** 6-minute walk distance ≥50 m increase did not differ significantly between groups in the Physical Function Trial (P=0.20), but did differ significantly when all T-Trials participants were included (odds ratio 1.77, P=0.003). Effect sizes were small (0.06–0.15).
- **Vitality:** No significant benefit on the FACIT–Fatigue primary outcome (P=0.30). However, testosterone was associated with small but significant improvements in mood (SF-36 vitality, PANAS positive affect) and depressive symptoms (PHQ-9, P=0.004).
- **Bone density:** Significant increase in volumetric and areal BMD at spine (T-Bone sub-trial, reported separately)
- **Anemia:** Significant correction of unexplained anemia (T-Anemia sub-trial, reported separately)
- **Cognition:** No significant benefit (T-Cognitive sub-trial, reported separately)
- **Cardiovascular:** Non-significant increase in coronary artery plaque volume (T-CRAB sub-trial) — a signal that fueled cardiovascular safety concerns and motivated TRAVERSE
- Funded by NIH and others; AbbVie donated the gel but did not participate in design, analysis, or reporting.

The T-Trials established that TRT can produce meaningful symptomatic benefit (especially sexual function) in carefully selected, genuinely hypogonadal older men. They did not answer the cardiovascular question.

### TRAVERSE (Lincoff 2023, NEJM) — definitive cardiovascular safety RCT

**TRAVERSE** (Testosterone Replacement Therapy for Assessment of Long-term Vascular Events and Efficacy Response in Hypogonadal Men) is the largest and most methodologically rigorous TRT cardiovascular safety trial conducted to date [^lincoff2023].

- **Design:** Multi-center, randomized, double-blind, placebo-controlled, non-inferiority trial
- **Population:** Men 45–80 years old with pre-existing cardiovascular disease or at high CV risk; total T <300 ng/dL (two fasting measurements) with at least one symptom
- **Intervention:** Testosterone gel (AndroGel 1.62%) vs placebo, dose adjusted to maintain T 350–750 ng/dL
- **Duration:** Mean treatment 21.7±14.1 months; mean follow-up 33.0±12.1 months
- **Primary endpoint:** Major adverse cardiovascular events (MACE: CV death, nonfatal MI, or nonfatal stroke) — non-inferiority margin: upper 95% CI <1.5
- **n:** 5,246 men

**Primary finding:** TRT was **non-inferior to placebo for MACE** (182 [7.0%] vs 190 [7.3%]; HR 0.96, 95% CI 0.78–1.17; P<0.001 for non-inferiority). This largely settled the acute cardiovascular safety controversy that had dominated since the 2010 Basaria trial raised a signal.

**Important TRAVERSE secondary signals:**
- **Atrial fibrillation:** Higher incidence in the testosterone group (stated as significant in the abstract; HR ~1.35 per pre-publication analyses) — a new class-level concern
- **Acute kidney injury:** Higher incidence in the testosterone group (reported in the abstract alongside AF and PE)
- **Pulmonary embolism:** Higher incidence in the testosterone group
- **Thromboembolic events:** Elevated overall; a 2025 analysis linked testosterone-induced increases in neutrophil and monocyte counts to thromboembolic risk [^gagliano2025]
- **Prostate events:** No significant difference in prostate cancer incidence; TRT associated with more prostate-related clinical events (biopsy, urological procedures) — see prostate safety below [^bhasin2023prostate]
- **Corrected anemia:** Significant improvement in hemoglobin and anemia resolution [^pencina2023]

**The cardiovascular discordance framing:** The cardiovascular literature on TRT had been deeply conflicted for over a decade. A 2010 trial (Basaria) suggested harm; a 2013 Veterans Affairs observational study (Vigen) suggested increased mortality with TRT; a 2014 Finkle analysis suggested increased MI risk in the first 90 days. These were countered by other observational studies and meta-analyses showing benefit or neutrality. The methodological problems were severe: most observational studies suffered from indication bias (sick men who recover are prescribed TRT; sick men who don't recover weren't). TRAVERSE was specifically designed and powered to resolve this, and largely did so — but introduced the atrial fibrillation signal and did not address mortality or long-term (>3 year) outcomes.

**The Hudson 2023 meta-analysis** (IPD: 17 studies, n=3,431; aggregate: 35 studies, n=5,601; Lancet Healthy Longevity) confirmed clinically meaningful improvement in erectile function (IIEF-15 erectile function subscale mean difference 2.14, 95% CI 1.40–2.89) and broader sexual function across age groups and obesity levels, supporting TRT for men with total T <12 nmol/L (350 ng/dL) and sexual-function concerns [^hudson2023]. AMS quality-of-life score was significantly better during TRT; BDI psychological symptoms did not improve significantly.

### Prostate cancer risk — the saturation model

Historically, testosterone was thought to "fuel" prostate cancer based on early observations by Huggins (1941) that castration regressed metastatic prostate cancer. For decades, hypogonadism was considered protective and TRT was contraindicated in men with a history of prostate cancer.

The **saturation model** (Morgentaler) proposes that androgen receptors in prostate tissue become saturated at relatively low testosterone concentrations (~150–200 ng/dL), such that raising T from hypogonadal to normal does not significantly increase androgen-driven prostate proliferation. Evidence supporting the saturation model:
- Epidemiological studies do not show higher prostate cancer rates in men with higher baseline T
- Clinical TRT studies in carefully monitored men have not demonstrated higher prostate cancer incidence (confirmed in TRAVERSE [^bhasin2023prostate])
- Even men with treated, localized prostate cancer have received TRT in specialized settings with acceptable outcomes in case series

**Current clinical position:** TRT is not recommended in men with active or recently treated prostate cancer. In men without prostate cancer history, prostate cancer risk is not considered a major TRT contraindication per current guidelines, though PSA monitoring is required. The TRAVERSE prostate safety analysis confirmed no significant increase in prostate cancer incidence but did find increased prostate-related events (biopsies, urological procedures) [^bhasin2023prostate].

### Key monitorable risks

| Risk | Mechanistic basis | Monitoring |
|---|---|---|
| **Polycythemia** (hematocrit >54%) | EPO stimulation + direct erythroid progenitor effect; dose-dependent | Hematocrit/hemoglobin at baseline, 3 months, then semi-annually |
| **Atrial fibrillation** | Mechanism unclear; higher incidence in TRAVERSE testosterone group (HR ~1.35 per pre-publication reporting; not quantified in the primary NEJM abstract) | Symptom monitoring; ECG if symptomatic |
| **Acute kidney injury** | Mechanism unclear; elevated in TRAVERSE testosterone group | Renal function monitoring if clinically indicated |
| **Pulmonary embolism / thromboembolic events** | Polycythemia-driven viscosity increase; possible direct thrombotic mechanism (neutrophil/monocyte elevation, per Gagliano 2025) | Hematocrit; thromboembolic history is a relative contraindication |
| **Testicular atrophy / infertility** | HPG axis suppression; LH/FSH suppression → reduced intratesticular T and spermatogenesis | Fertility counseling; HCG co-administration in men desiring fertility |
| **Prostate enlargement / BPH symptoms** | DHT-mediated; not cancer risk but functional | PSA, IPSS, urological assessment |
| **Mood / behavioral changes** | Anecdotal; typically improvement in true hypogonadism; rarely aggression at supraphysiologic doses | Clinical assessment |

## Administration routes and formulations

| Route | Examples | Half-life / PK | Notes |
|---|---|---|---|
| **Transdermal gel** | AndroGel 1%, 1.62%; Testim; Fortesta; Natesto (nasal) | Sustained release; t½ ~10–100 min for free T; daily application maintains levels | Risk of skin-to-skin transfer to partners/children; most common route in USA |
| **Intramuscular ester injection** | Testosterone cypionate; enanthate | t½ ~8 days (cypionate), ~4–7 days (enanthate); biweekly or weekly injection | Large peaks/troughs; more common in bodybuilding contexts; cypionate is gold standard in USA clinics |
| **Oral undecanoate** | Jatenzo (USA), Andriol (Europe) | Absorbed via lymphatics; less hepatic first-pass; must be taken with food; t½ ~7 h | First oral formulation approved in USA (2019); variable absorption; GI side effects |
| **Long-acting injectable undecanoate** | Nebido (Europe), Aveed (USA) | Very long-acting; injections every 10–14 weeks | Stable levels; risk of pulmonary oil embolism (rare) at injection |
| **Subcutaneous pellet** | Testopel | Implanted subcutaneously; releases over 3–6 months | Invasive; cannot be removed if adverse effects; popular in some US clinics |
| **Buccal / transdermal patch** | Striant; Androderm | Various durations | Less used in practice |

## Effects on aging hallmarks

| Hallmark | Relevance | Direction |
|---|---|---|
| [[altered-intercellular-communication]] | Age-related T decline is itself a shift in systemic endocrine signaling; TRT restores paracrine signaling in muscle, bone marrow, brain | Restoration |
| [[stem-cell-exhaustion]] | Supports satellite cell (muscle) and erythroid progenitor proliferation; low T contributes to satellite cell quiescence and anemic progenitor suppression | Restoration |
| [[deregulated-nutrient-sensing]] | Muscle AR × mTORC1 anabolic axis; modest IGF-1 upregulation; at physiologic doses, effects are tissue-appropriate rather than pro-aging longevity-signaling-opposed | Mixed (anabolic axis engagement; not longevity-signaling-aligned) |

## Bone — the aromatase-estrogen nuance (critical)

Male bone health is predominantly governed by **estradiol derived from testosterone aromatization**, not by direct androgen receptor signaling on osteoblasts. Evidence from natural experiments:

- Men with inactivating mutations in *CYP19A1* (aromatase deficiency): markedly elevated testosterone, essentially zero estradiol → severe osteoporosis, unfused epiphyses, tall stature; corrected by estrogen replacement, NOT by raising testosterone further [^smithcyp19a1]
- Men with inactivating mutations in *ESR1* (ER-α): elevated testosterone, cannot respond to estradiol → same phenotype [^morishimaesr1]
- Epidemiologic data: free estradiol predicts fracture risk in older men better than free testosterone

**Clinical implication:** TRT raises bone mineral density primarily via the aromatization arm. Men with low aromatase activity (low E2 despite adequate T) may gain less skeletal benefit from TRT. Monitoring both E2 and T is advisable in clinical practice. Aromatase inhibitor co-administration (sometimes used to prevent estrogen side effects in TRT) may inadvertently impair the bone benefits of TRT.

## Limitations and concerns

- **Long-term mortality:** No RCT has demonstrated that TRT reduces mortality in older men. TRAVERSE showed non-inferiority for MACE; it was not powered or designed to detect mortality benefit. Observational data are confounded by the indication-bias problem.
- **Over-prescription controversy:** The ~5-fold increase in TRT prescriptions in the USA between 2000 and 2013 substantially outpaced growth in clinically hypogonadal diagnoses. A meaningful fraction of men prescribed TRT had T levels in the normal range or were treated solely for age-related declines without meeting clinical hypogonadal criteria. This represents a genuine public-health concern independent of the evidence in truly hypogonadal men [^baillargeon2014].
- **Atrial fibrillation, acute kidney injury, and pulmonary embolism signals:** TRAVERSE found higher incidence of all three in the testosterone group. These were not components of the pre-specified primary MACE endpoint. AF and PE require replication; the AKI signal is an underappreciated TRAVERSE finding. These are legitimate concerns for older men with relevant predispositions.
- **Infertility:** Exogenous testosterone suppresses the HPG axis (FSH and LH suppression), reducing spermatogenesis. This is often overlooked in younger men who receive TRT.
- **No benefit at normal T levels:** The evidence for benefit is anchored in men with genuinely low T (<300 ng/dL) and symptoms. Evidence for benefit in men with normal T is absent or negative.
- **Prostate effects:** Not cancer risk at this time, but PSA/prostate events require monitoring.
- **Polycythemia:** The most consistently documented monitorable risk; requires routine hematocrit monitoring and dose adjustment.
- **Doping detection:** Testosterone is a WADA-prohibited substance in sport. The carbon isotope ratio (CIR) test can distinguish exogenous synthetic testosterone from endogenous testosterone in urine.

#gap/long-term-unknown — No trial data beyond ~3 years exists for mortality, cancer, or frailty outcomes under TRT.

#gap/needs-replication — TRAVERSE atrial fibrillation, acute kidney injury, and pulmonary embolism signals require independent replication in a confirmatory RCT.

#gap/dose-response-unclear — Optimal target testosterone level during TRT is debated; most guidelines suggest mid-normal range (400–700 ng/dL total T), but the dose-response for non-sexual-function outcomes (bone, anemia, mood) is not precisely characterized.

## Extrapolation table

| Dimension | Status |
|---|---|
| Primary mechanism (AR agonism) conserved across mammalian species? | Yes |
| Anabolic muscle phenotype conserved in humans? | Yes (confirmed by RCTs) |
| Bone mechanism via aromatization conserved in humans? | Yes (natural-experiment confirmation) |
| Cardiovascular safety established in humans? | Largely yes (MACE non-inferiority in TRAVERSE); AF signal unresolved |

## Footnotes

[^harman2001]: doi:10.1210/jcem.86.2.7219 · Harman SM, Metter EJ, Tobin JD, Pearson J, Blackman MR · *J Clin Endocrinol Metab* 2001;86(2):724-731 · Longitudinal observational (Baltimore Longitudinal Study of Aging) · n=890 men · absolute T decline: −0.124 nmol/L/yr (total T) and −0.0049 nmol T/nmol SHBG/yr (free T index), age-invariant longitudinal effects; SHBG rises with age; hypogonadal T levels reached by ~20% of men over 60, ~30% over 70, ~50% over 80; percent-per-year figures cited elsewhere (~0.4%/yr total) are approximate conversions from absolute values and not explicitly stated in the paper · #gap/needs-full-text — full PDF not retrieved; abstract-level verification only

[^smithcyp19a1]: doi:10.1056/NEJM199408253310801 · Smith EP, Boyd J, Frank GR, Takahashi H, Cohen RM, Specker B, Williams TC, Lubahn DB, Korach KS · *N Engl J Med* 1994;331(16):1056-1061 · case study (male aromatase-deficiency) · n=1 · severe osteoporosis at age 28 despite normal-high testosterone; tall stature, unfused epiphyses; estriol treatment restored bone density · model: human *CYP19A1* inactivating homozygous mutation · #gap/needs-replication (n=1; multiple additional cases subsequently documented in the literature)

[^morishimaesr1]: doi:10.1056/NEJM199507133330204 · Morishima A, Grumbach MM, Simpson ER, Fisher C, Qin K · *N Engl J Med* 1995;333(2):130-131 · case study (male ER-α deficiency) · n=1 · tall stature, severe osteoporosis, unfused epiphyses; testosterone elevated; demonstrates ER-α (*ESR1*) is required for estrogen-mediated bone closure in men · model: human *ESR1* homozygous inactivating mutation · #gap/needs-replication (n=1; additional ESR1-deficiency cases in literature)

[^snyder2016]: doi:10.1056/NEJMoa1506119 · Snyder PJ, Bhasin S, Cunningham GR, Matsumoto AM, et al. (T-Trials Investigators) · *N Engl J Med* 2016;374(7):611-624 · randomized placebo-controlled (7 coordinated trials, this paper reports 3 main trials) · n=790 men ≥65 yr, total T <275 ng/dL · model: community-dwelling older hypogonadal men; AndroGel 1% vs placebo for 1 yr · primary outcomes: sexual function (PDQ-Q4 treatment effect 0.58; P<0.001), physical function (6-min walk ≥50m: P=0.20 in PFT alone, P=0.003 combined), vitality (FACIT P=0.30, non-significant); funded by NIH + NIA; AbbVie donated gel only

[^lincoff2023]: doi:10.1056/NEJMoa2215025 · Lincoff AM, Bhasin S, Flevaris P, Mitchell LM, Basaria S, Boden WE, et al. · *N Engl J Med* 2023;389(2):107-117 · randomized double-blind placebo-controlled non-inferiority trial · n=5,246 men 45-80 yr, T <300 ng/dL (two fasting measurements), preexisting CV disease or high CV risk · testosterone gel (AndroGel 1.62%, dose adjusted to T 350–750 ng/dL) vs placebo · mean treatment 21.7±14.1 mo; mean follow-up 33.0±12.1 mo · primary endpoint MACE (CV death, nonfatal MI, nonfatal stroke): non-inferiority confirmed (182 [7.0%] vs 190 [7.3%]; HR 0.96, 95% CI 0.78–1.17; P<0.001) · secondary signals: higher incidence of AF, acute kidney injury, and pulmonary embolism in testosterone group · AbbVie-funded

[^bhasin2023prostate]: doi:10.1001/jamanetworkopen.2023.42093 · Bhasin S, Lincoff AM, Nissen SE, et al. · *JAMA Netw Open* 2023;6(11):e2342093 · pre-specified secondary analysis of TRAVERSE (n=5,246) · no significant increase in prostate cancer incidence; significant increase in prostate-related clinical events (biopsies, urological interventions) with TRT · **abstract-only verification 2026-06-03**

[^pencina2023]: doi:10.1001/jamanetworkopen.2023.40030 · Pencina KM, Lincoff AM, Travison TG, et al. · *JAMA Netw Open* 2023;6(11):e2340030 · pre-specified secondary analysis of TRAVERSE (n=5,246) · TRT significantly corrected anemia in hypogonadal men with unexplained anemia; hemoglobin rose ~0.5–1.0 g/dL vs placebo · **abstract-only verification 2026-06-03**

[^hudson2023]: doi:10.1016/S2666-7568(23)00169-1 · Hudson J, Cruickshank M, Quinton R, Aucott L, Wu F, Grossmann M, Bhasin S, Snyder PJ, et al. · *Lancet Healthy Longev* 2023;4(10):e561-e572 · systematic review + IPD meta-analysis (n=3,431 from 17 studies) + aggregate meta-analysis (n=5,601 from 35 studies) · TRT produces clinically meaningful improvement in erectile function (IIEF-15 erectile function subscore mean difference 2.14, 95% CI 1.40–2.89) and total IIEF-15 score (mean difference 5.52, 95% CI 3.95–7.10); AMS quality-of-life score also significantly better during TRT; BDI did not improve significantly; benefits consistent across age groups and obesity levels; conclusions limited to men with baseline total T <12 nmol/L (350 ng/dL)

[^baillargeon2014]: doi:10.1001/jamainternmed.2013.14000 · Baillargeon J, Urban RJ, Ottenbacher KJ, Pierson KS, Goodwin JS · *JAMA Intern Med* 2014;174(8):1327-1334 · observational (claims data) · n=>100,000 men receiving TRT · documents that a substantial proportion of men prescribed TRT lacked documented hypogonadal diagnosis; highlights over-prescription pattern; **abstract-only verification 2026-06-03**

[^gagliano2025]: doi:10.1016/j.ahj.2025.01.020 · Gagliano-Jucá T, Travison TG, Pencina KM, et al. · *Am Heart J* 2025 (TRAVERSE secondary analysis) · association between testosterone-induced increases in neutrophil and monocyte counts and thromboembolic events in TRAVERSE population · suggests a leukocyte-mediated thrombotic mechanism · **abstract-only verification 2026-06-03**
