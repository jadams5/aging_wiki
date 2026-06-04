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
literature-checked-through: 2026-06-04
verified: true
verified-date: 2026-06-04
verified-by: claude
verified-scope: "TRAVERSE (Lincoff 2023) verified against PubMed abstract (full PDF not OA); T-Trials (Snyder 2016) verified against full PDF; Hudson 2023 verified against full PDF; Harman 2001 verified against PubMed abstract only (full PDF not retrieved — % conversion figures flagged); Smith 1994 and Morishima 1995 not re-read (consistent with esr1.md prior verification); Baillargeon 2014 and TRAVERSE secondary analyses (Bhasin, Pencina, Gagliano) abstract-only; canonical-DB IDs (PubChem 6013, ChEMBL CHEMBL386630) confirmed via REST API; DrugBank DB00624 and CAS 58-22-0 accepted per well-established identity. 2026-06-04 additions: '## Mendelian randomization' section — Ruth 2020 (PMC7025895) and Mohammadi-Shemirani 2020 (PMC7591257) both verified against full OA text (all cited ORs/CIs cross-checked). '## Testosterone, mTOR, and the rate of aging' synthesis section — built from on-page + cross-linked verified content ([[leydig-cells]] reversible-wear, [[mtor]], [[androgen-deprivation-longevity-hypothesis]]); comorbidity-driven-low-T claim cited to Huhtaniemi 2011 (verification home [[andropause]]). Study pages [[studies/ruth-2020-testosterone-mr-disease]] and [[studies/mohammadi-shemirani-2020-testosterone-mr-elife]] verifier-checked 2026-06-04 (both flipped verified:true). Verifier-driven propagation applied here: Ruth breast/endometrial cancer ORs corrected to figure-only/not-in-narrative (+ ovarian-cancer-protective added); Mohammadi-Shemirani HDL (−0.074 SD) + spinal stenosis (OR 2.03) added; female-T2D-direction caveat added (PMID 35218343 / 36653534, recency-surfaced, unverified). 2026-06-04 (2nd addition): '## The secular (population-level) decline' section added — the linchpin source Arun 2025 (Clin Chem, doi:10.1093/clinchem/hvaf025) is FULL-TEXT verified against the PDF (all NHANES medians, −16.4% drop, <300/264 ng/dL prevalence figures, assay assignment cross-checked) and given study page [[studies/arun-2025-testosterone-threshold]] (verified:true). Supporting secular-decline cohorts (Travison 2007, Andersson 2007, Perheentupa 2013, Lokeshwar 2021, Chodick 2020) and the two obesity/weight-loss reviews are ABSTRACT-LEVEL verified only (structured abstracts read; full PDFs not retrieved). All citation identities (DOIs/PMIDs/authors) resolved via PubMed/Crossref, not training memory."
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

## The secular (population-level) decline — real trend, or a measurement artifact?

Distinct from the *individual* age-related decline above is a more contested claim: that testosterone is falling **across successive birth cohorts and calendar time** — that an age-matched man today has lower testosterone than his counterpart decades ago, independent of getting older. This population-level ("secular") decline is reported in the data, but its interpretation is now genuinely in dispute. The two questions — *does my testosterone fall as I age?* (yes) versus *is the population's age-matched testosterone falling across history?* (contested) — must not be conflated.

**The reported signal, across countries.** The anchor finding is Travison et al. 2007: in the Massachusetts Male Aging Study (1,532 men, three waves spanning 1987–2004), age-matched total and bioavailable testosterone fell substantially over calendar time — a decline *larger* than the cross-sectional age effect and *not* attributable to changes in obesity, smoking, or health [^travison2007]. Age-independent secular declines were subsequently reported in Denmark [^andersson2007], Finland [^perheentupa2013], among US adolescents and young adults [^lokeshwar2021], and in Israel [^chodick2020] — a broad, multi-country pattern.

**But the cohorts disagree on the cause — especially obesity.** The single robust, mechanistically-grounded driver of low testosterone is **obesity**, which suppresses testosterone (via adipose aromatization, insulin resistance, and HPG-axis suppression) in a bidirectional loop — low T promotes adiposity, adiposity lowers T — against a backdrop of rising global obesity; weight loss is the consensus first-line intervention to raise testosterone in obese men [^obesity2014] [^cureus2024wl]. Yet the cohorts split on whether obesity *explains* the secular trend:

- In the **Danish** surveys, adjusting for the concurrent BMI rise rendered the testosterone decline non-significant — i.e. largely obesity-driven (only the rise in SHBG survived adjustment; free T showed no age-independent effect) [^andersson2007].
- In **Finland**, the decline persisted after BMI adjustment, with *lower* gonadotrophins alongside lower free T — pointing to a gonadal-level change to which the hypothalamic-pituitary axis fails to respond [^perheentupa2013].
- In **young US men** and in Travison's **MMAS**, the decline held among normal-BMI men / after adjustment [^lokeshwar2021] [^travison2007].
- The **Israeli** cohort (102,334 men, 2006–2019) found an age-independent decline the authors judged unlikely to be explained by rising obesity [^chodick2020].

Proposed non-obesity drivers — endocrine-disrupting chemicals (phthalates, pesticides), microplastics, metals — remain mechanistic speculation at the population scale; microplastics lower testosterone in mice, but none has been shown to account for the human population data #gap/no-mechanism.

**The measurement-artifact challenge (the strongest deflationary argument).** A 2025 reanalysis (Arun et al., *Clinical Chemistry*) shows the US/NHANES evidence is confounded by a **change in assay technology**, not a change in men [^arun2025]. Across the five NHANES cycles used to establish the US trend, the two earliest (2001–02, 2003–04) measured total testosterone by **Roche Elecsys immunoassay**, while the three later cycles (2011 onward) used **LC-MS/MS** — the modern gold standard, which reads lower at the low end of the range. Median total testosterone in self-reported-healthy men fell from ~500 ng/dL to ~410–433 ng/dL precisely across that 2004→2011 transition (−16.4%), and the prevalence of "low T" (<300 ng/dL) jumped from 11–12% to 18–22% — a near-doubling that *coincides with the assay migration*. Crucially, applying the LC-MS/MS-appropriate Endocrine Society threshold of **264 ng/dL** to the later cycles returns "low T" prevalence to 11–14% — in line with the immunoassay-era figures at the 300 ng/dL cutoff. On this analysis, the apparent epidemic of low testosterone is largely an artifact of measuring with a more accurate (lower-reading) method against an outdated, immunoassay-derived cutoff [^arun2025]. See [[studies/arun-2025-testosterone-threshold]].

**What this does and doesn't settle.** Arun directly undercuts the NHANES-based US prevalence narrative — including Lokeshwar 2021, which uses NHANES data spanning the same 1999–2016 window and which itself flagged "the use of differing assays" as a limitation [^lokeshwar2021]. It does **not**, by itself, dissolve the non-NHANES cohorts: MMAS used immunoassay throughout its window (so its decline is within-method, not an immunoassay→LC-MS/MS switch) [^travison2007], and the Danish, Finnish, and Israeli datasets are separate instruments not subject to that particular 2011 transition. The Israeli cohort additionally rests on *clinically-ordered* tests (all incident testosterone draws within a care provider), so its sample is not population-representative and is plausibly enriched for men already suspected of low T — a selection caveat distinct from the assay issue [^chodick2020].

**Bottom line.** The *individual* age-related decline documented above is not in dispute. The *secular, cross-generational* decline is genuinely contested: reported across multiple countries, in some cohorts wholly attributable to obesity, and — for the influential US/NHANES evidence — plausibly inflated or even manufactured by an uncorrected assay change. It should be cited with these caveats, not as a settled biological fact. #gap/contradictory-evidence

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

## Mendelian randomization — causal evidence beyond trials

Trials such as TRAVERSE test the effect of *adding* testosterone to hypogonadal men over a few years. A complementary causal question — what *lifelong*, genetically-determined testosterone exposure does to disease risk — is addressed by Mendelian randomization (MR), which uses germline variants as instruments largely free of the reverse-causation and indication bias that plague observational hormone studies. Two large UK Biobank MR studies dominate.

**Ruth et al. 2020** (*Nature Medicine*, n=425,097; 125–254 SNP instruments per sex/fraction) found strongly **sex-divergent metabolic effects**. Per 1-SD higher bioavailable testosterone, type 2 diabetes risk *fell* in men (OR 0.86, 95% CI 0.76–0.98) but *rose* in women (OR 1.37, 1.22–1.53), alongside increased polycystic-ovary-syndrome risk in women (OR 1.51, 1.33–1.72). Higher testosterone causally **increased prostate cancer risk in men (OR 1.23, 1.13–1.33)** and increased breast and endometrial cancer risk in women (directional signal only — these cancer associations appear in Extended Data forest plots, not stated numerically in the paper's narrative), while being protective against ovarian cancer in women. The authors' summary: genetically higher testosterone is metabolically harmful in women but beneficial in men [^ruth2020].

**Mohammadi-Shemirani et al. 2020** (*eLife*, n=161,268 men; 93 SHBG-filtered instruments; 461 outcomes screened) refined the male picture by stripping out SHBG-mediated pleiotropy. With SHBG-acting variants removed, higher free testosterone causally **increased prostate cancer (OR 1.51, 1.21–1.88)**, androgenic alopecia (OR 1.49, 1.19–1.86), hypertension (OR 1.17, 1.08–1.26), spinal stenosis (OR 2.03, 1.51–2.75) and hematocrit (+1.37%), and *lowered* HDL cholesterol (−0.074 SD), with a borderline myocardial-infarction signal (OR 1.23, 1.00–1.53, p=0.05). It improved heel bone density (+0.40 SD) and body composition (fat-free mass +1.91%, body fat −1.88%) but found **no benefit for type 2 diabetes (OR 1.02, 0.81–1.28), cardiovascular, or cognitive outcomes** [^mohammadi2020].

**Reconciling the type-2-diabetes discordance.** Ruth's male protective T2D effect (OR 0.86) and Mohammadi-Shemirani's null (OR 1.02) most likely diverge because the latter filtered out SHBG-acting variants. SHBG is itself strongly protective against T2D, so testosterone instruments that act partly through SHBG can import an apparent metabolic benefit that is really an SHBG effect; removing them collapses it. The reading most consistent with both papers is that **testosterone's "metabolic benefit" in men is largely SHBG-mediated rather than a direct androgen effect.** The *female* T2D finding is also unsettled: later phenome-wide MR work has reported a contrary (protective) direction for testosterone on T2D in women (PMID 35218343) and minimal overall causal impact of testosterone variation on disease (PMID 36653534), so the causal metabolic picture should be treated as provisional for both sexes. #gap/contradictory-evidence (the analyses have not been formally reconciled; the two follow-on MR studies are recency-surfaced and not yet independently verified or seeded)

**What MR establishes for aging — and what it doesn't.** MR robustly establishes a *causal* (not merely observational) increase in prostate cancer with higher male testosterone. This is a useful counterpoint to the saturation model's reassurance: the saturation model concerns supra-saturation TRT *dosing* in hypogonadal men, whereas MR captures lifelong genetically-higher *exposure* across the full physiologic range — the two are not in conflict, but MR shows that lifetime androgen exposure is not prostate-neutral. MR also shows **no causal cardiovascular benefit** and adds adverse blood-pressure and hematocrit signals. Crucially, neither study tested longevity, frailty, or all-cause mortality — so the central aging question remains causally **untested by MR**.

## Testosterone, mTOR, and the rate of aging — a resolved tension

A recurring puzzle deserves an explicit answer: testosterone activates the anabolic mTORC1 axis (above), and mTOR / insulin-IGF-1 signalling is the most robustly validated *pro-aging* pathway in biology (rapamycin and IGF1R reduction extend lifespan — see [[mtor]]). If testosterone drives a pro-aging pathway, why is *aging itself* a low-testosterone, low-anabolic-signalling state? The tension is more apparent than real, and dissolves once three things are kept separate:

1. **Pathway engagement ≠ aging acceleration, and the mTOR effect is tissue-local.** Testosterone's mTORC1 activation is largely compartmentalised to skeletal muscle, where it *opposes* [[sarcopenia]] — it is not the chronic, organism-wide mTOR hyperactivation that rapamycin suppresses systemically. Engaging an anabolic axis in muscle is not equivalent to the global nutrient-sensing dysregulation that shortens lifespan.

2. **The age-related fall in testosterone is downstream damage, not a protective adaptation.** Aging is a low-T state for two reasons, neither of which implies low T is doing the body good. The [[leydig-cells|Leydig cell]] steroidogenic apparatus undergoes **reversible, activity-dependent oxidative wear** (the steroidogenic P450s generate reactive oxygen species during synthesis; resting the cell prevents and even reverses the decline — see [[leydig-cells]] § *Steroidogenesis as a self-damaging process*). And in most aging men the dominant cause is *secondary/functional* suppression from obesity and metabolic comorbidity rather than intrinsic gonadal failure — a state often reversible with weight loss [^huhtaniemi2011]. Low T is largely a marker of accumulated damage and ill-health, not its antidote.

3. **Whether lifetime androgen exposure is net pro- or anti-longevity is a separate, partly-answered question.** Comparative and genetic evidence suggests high lifetime androgen exposure carries a somatic cost: sterilization/castration extends (maximal) lifespan and decelerates the epigenetic clock across vertebrates ([[androgen-deprivation-longevity-hypothesis]]), and MR shows genetically-higher testosterone causally raises prostate cancer, blood pressure and hematocrit with no cardiovascular benefit (above). But the human longevity endpoint itself is untested, and the specific directional claim that *higher early-life testosterone causes earlier Leydig failure* has never been tested in humans — it is plausible (the wear is activity-driven) but unproven.

**Net:** the cellular machinery genuinely links testosterone to canonical pro-aging pathways, and lowering lifetime androgen exposure is somatically protective in model organisms — but at physiologic levels in humans the dominant aging-relevant signals are tissue-appropriate anabolism (muscle) and damage-plus-comorbidity-driven decline (gonad), not a clean "testosterone accelerates aging" story. See [[hypotheses/antagonistic-pleiotropy]] for the evolutionary framing.

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

[^ruth2020]: [[studies/ruth-2020-testosterone-mr-disease]] · doi:10.1038/s41591-020-0751-5 · Ruth KS, Day FR, Tyrrell J, et al. · *Nat Med* 2020;26(2):252–258 · PMID:32042192 · PMC:PMC7025895 · mendelian-randomization · n=425,097 UK Biobank (sex-stratified); 231/254 SNP instruments for total T (men/women), 125/180 for bioavailable T · per 1-SD higher bioavailable T: T2D OR 0.86 (95% CI 0.76–0.98) men, 1.37 (1.22–1.53) women; PCOS OR 1.51 (1.33–1.72) women; prostate cancer OR 1.23 (1.13–1.33) men; breast + endometrial cancer increased in women (directional — Extended Data forest plots only, not stated numerically in narrative), ovarian cancer protective in women; no CV/mortality/longevity outcomes tested · conclusion: genetically higher T metabolically harmful in women, beneficial in men · full text verified 2026-06-04 (PMC7025895)

[^mohammadi2020]: [[studies/mohammadi-shemirani-2020-testosterone-mr-elife]] · doi:10.7554/eLife.58914 · Mohammadi-Shemirani P, Chong M, Pigeyre M, Morton RW, Gerstein HC, Paré G · *eLife* 2020;9:e58914 · PMID:33063668 · PMC:PMC7591257 · mendelian-randomization · n=161,268 UK Biobank males; 93 SHBG-filtered instruments; 461 outcomes screened · per 0.1 nmol/L higher free T: prostate cancer OR 1.51 (1.21–1.88, p=2.1e-4); androgenic alopecia OR 1.49 (1.19–1.86); hypertension OR 1.17 (1.08–1.26); spinal stenosis OR 2.03 (1.51–2.75); hematocrit +1.37%; HDL −0.074 SD; heel BMD +0.40 SD (0.25–0.54); fat-free mass +1.91%; body fat −1.88%; MI borderline OR 1.23 (1.00–1.53, p=0.05); T2D null OR 1.02 (0.81–1.28, p=0.87); CV + cognitive null; multiple-testing by Bonferroni (not FDR) · conclusion: no benefit for T2D/CV/cognitive; body-composition gains weighed against prostate cancer, alopecia, hypertension · full text verified 2026-06-04 (PMC7591257)

[^huhtaniemi2011]: doi:10.1038/nrurol.2011.47 · Huhtaniemi I, Forti G · *Nat Rev Urol* 2011;8(6):335–344 · PMID:21502974 · review · comorbidities (obesity, T2DM, COPD, CVD) are a more common cause of low testosterone in aging men than intrinsic gonadal aging; functional hypogonadism may be reversible with weight loss and comorbidity treatment · claim home is the verified [[andropause]] page (Wu 2010 EMAS + Huhtaniemi 2011)

[^travison2007]: doi:10.1210/jc.2006-1375 · Travison TG, Araujo AB, O'Donnell AB, Kupelian V, McKinlay JB · *J Clin Endocrinol Metab* 2007;92(1):196-202 · PMID:17062768 · observational prospective cohort (Massachusetts Male Aging Study; 3 waves: 1987-1999 / 1995-1997 / 2002-2004) · n=1,532 men (2,769 observations), age 45-79 · substantial age-independent population-level decline in total + bioavailable T, exceeding the cross-sectional age effect and not attributable to obesity, smoking, or health/lifestyle changes; immunoassay throughout · abstract-level verification 2026-06-04 (structured abstract read; full PDF not retrieved)

[^andersson2007]: doi:10.1210/jc.2006-2633 · Andersson AM, Jensen TK, Juul A, Petersen JH, Jørgensen T, Skakkebæk NE · *J Clin Endocrinol Metab* 2007;92(12):4696-4705 · PMID:17895324 · observational (4 Danish population surveys 1982-2001) · n=5,350 male serum samples · secular decline in total T + rise in SHBG in age-matched, more-recently-born men; **the testosterone decline lost significance after adjustment for the concurrent BMI rise** (SHBG trend survived); no age-independent effect on free T · abstract-level verification 2026-06-04

[^perheentupa2013]: doi:10.1530/EJE-12-0288 · Perheentupa A, Mäkinen J, Laatikainen T, Vierula M, Skakkebæk NE, Andersson AM, Toppari J · *Eur J Endocrinol* 2013;168(2):227-233 · PMID:23161753 · observational (3 Finnish population surveys 1972 / 1977 / 2002) · n=3,271 men aged 25-74 · significant secular decline in total + free T, SHBG and gonadotrophins in age-matched, more-recently-born men (e.g. men aged 60-69: 21.9 → 13.8 nmol/L across birth cohorts 1913-1922 → 1942-1951); **decline persisted after BMI adjustment**; lower gonadotrophins imply HPG axis not compensating · abstract-level verification 2026-06-04

[^lokeshwar2021]: doi:10.1016/j.euf.2020.02.006 · Lokeshwar SD, Patel P, Fantus RJ, Halpern J, Chang C, Kargi AY, Ramasamy R · *Eur Urol Focus* 2021;7(4):886-889 · PMID:32081788 · observational (NHANES 1999-2016) · n=4,045 adolescent/young-adult men (15-39) · mean total T declined over time (2011-2016 < 1999-2000, p<0.001), including among normal-BMI men; **the authors explicitly list use of differing TT assays across cycles as a limitation** — the confound subsequently quantified by [^arun2025] · abstract-level verification 2026-06-04

[^chodick2020]: doi:10.1186/s12958-020-00575-2 · Chodick G, Epstein S, Shalev V · *Reprod Biol Endocrinol* 2020;18(1):19 · PMID:32151259 · PMC:PMC7063751 · observational (Maccabi Healthcare Services, Israel) · n=102,334 men, all incident total-T tests 1/2006-3/2019 · significant (p<0.001) age-independent decline in total T across most age groups, judged unlikely to be explained by rising obesity; measurements were clinically-ordered (not a random population sample → selection caveat; sample plausibly enriched for men suspected of low T) · abstract-level verification 2026-06-04

[^arun2025]: [[studies/arun-2025-testosterone-threshold]] · doi:10.1093/clinchem/hvaf025 · Arun AS, Durant TJS, El-Khoury JM, Krumholz HM · *Clin Chem* 2025;71(5):609-611 · PMID:40238540 · Letter to the Editor / reanalysis of public NHANES data (cycles 2001-02, 2003-04, 2011-12, 2013-14, 2015-16; self-reported-healthy males >18) · median total T 495 / 500 / 418 / 409 / 433 ng/dL across cycles (−16.4% between 2003-04 and 2011-12); "low T" (<300 ng/dL) prevalence 11% / 12% (Roche Elecsys immunoassay) → 22% / 21% / 18% (LC-MS/MS), coinciding with the assay migration; applying the Endocrine Society 264 ng/dL LC-MS/MS-appropriate cutoff returns later-cycle prevalence to 13% / 14% / 11% · concludes the apparent rise in low-TT prevalence is largely an assay-change/threshold artifact; analysis code on Zenodo (10.5281/zenodo.14908077) · **full-text verified 2026-06-04 (PDF read end-to-end)**

[^obesity2014]: doi:10.4103/1008-682X.122365 · Ng Tang Fui M, Dupuis P, Grossmann M · *Asian J Androl* 2014;16(2):223-231 · PMID:24407187 · review · obesity lowers testosterone via adipose-tissue aromatization, insulin resistance, and HPG-axis suppression, in a bidirectional loop; weight loss raises endogenous testosterone · abstract-level verification 2026-06-04

[^cureus2024wl]: doi:10.7759/cureus.76139 · Okobi OE, Khoury P, De la Vega RJ, et al. · *Cureus* 2024;16(12):e76139 · review · weight loss (lifestyle, pharmacological, or surgical) raises endogenous testosterone in men with obesity; positioned as first-line for obesity-associated low T · abstract-level verification 2026-06-04
