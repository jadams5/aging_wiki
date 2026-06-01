---
type: intervention
aliases: [IF, 5:2 diet, alternate-day fasting, ADF, periodic fasting, 16:8 fasting, 18:6 fasting]
mode: dietary
mechanisms: [autophagy-induction, ampk-activation, mtor-inhibition, ketogenesis, insulin-sensitization]
targets: []
target-hallmarks: ["[[deregulated-nutrient-sensing]]", "[[disabled-macroautophagy]]", "[[loss-of-proteostasis]]"]
target-pathways: ["[[mtor]]", "[[ampk]]", "[[insulin-igf1]]", "[[sirtuin]]"]
human-evidence-level: limited
clinical-stage: implemented
safety-profile: well-established
translation-gap: phase-3-rct-needed
next-experiment: "Long-duration RCT (≥1 year) vs caloric-matched continuous-feeding control with DunedinPACE as primary biological-age endpoint; would disentangle IF-specific timing effects from caloric reduction."
clinical-trials-active: 69
literature-checked-through: 2026-05-06
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Trepanowski 2017 (JAMA IM), Sutton 2018 (Cell Metab), Liu 2022 (NEJM) verified against PubMed abstracts and/or local PDF; Liu 2022 full PDF read end-to-end. de Cabo & Mattson 2019 (NEJM) and Goodrick 1990 (Mech Ageing Dev) closed-access — verified against Crossref/PubMed metadata only; full-text claims carry #gap/no-fulltext-access. Mattson 2017annu footnote DOI corrected (was wrong paper; replaced with Anton et al. 2018 Obesity). Mitchell 2019 (Cell Metab) added as new citation for fasting-specific lifespan evidence. BHB/HDAC/FOXO3a mechanistic chain not confirmed against primary source — tagged #gap/needs-replication."
---

# Intermittent fasting (IF)

A dietary pattern characterized by **cycling between defined fasting and eating periods**, where fasting episodes are long enough to meaningfully deplete hepatic glycogen, lower circulating insulin, and trigger metabolic and cellular stress-response programs (autophagy induction, AMPK activation, ketogenesis). Unlike sustained [[caloric-restriction|caloric restriction (CR)]], which reduces total caloric intake every day, IF achieves geroprotective signaling through **temporal nutrient deprivation** — often with time-averaged caloric intake closer to ad libitum than to CR.

IF is a **consumer-popular dietary pattern** with hundreds of human metabolic RCTs and a strong mechanistic rationale in aging biology. No human RCT has established a longevity or biological-age primary endpoint; the human evidence base is limited to metabolic and cardiovascular surrogate outcomes.

---

## Protocols and definitions

A proliferation of branded IF protocols share the same core biology but differ in fasting duration and caloric permissiveness. Critically, **IF is distinct from time-restricted eating (TRE)**:

| Protocol | Eating window | Fasting window | Notes |
|---|---|---|---|
| **16:8** | 8 hr/day | 16 hr/day (including sleep) | Most widely practiced; typically skip breakfast |
| **18:6** | 6 hr/day | 18 hr/day | Approaching early-TRE territory; ~16 hr needed for robust autophagy signal |
| **20:4** ("Warrior Diet") | 4 hr/day | 20 hr/day | Restricted eating overlaps with caloric restriction in practice |
| **5:2** | 5 normal days + 2 low-calorie days | ~500–600 kcal on fasting days (~25% of TDEE) | Popularized by Mosley; achieves moderate weekly caloric deficit |
| **Alternate-day fasting (ADF)** | Every other day normal; fasting days ~500 kcal | Every other day | Most-studied in controlled trials (Trepanowski 2017) |
| **[[prolonged-fasting\|Extended / prolonged fasting]]** | 24–72 hr fasts periodically | Multi-day | Approaches fasting-mimicking diet territory; clinical supervision needed. Beyond ~3 days it becomes a distinct modality — see [[prolonged-fasting]] (the systemic proteome response emerges only *past* the IF window) |

**IF vs. TRE** — the conceptual distinction:
- **IF** involves periodic prolonged fasting episodes (≥12–24 hr for 5:2/ADF; ≥16 hr for 16:8) that create net caloric deficits and/or trigger metabolic state switches (glycogen depletion → fatty-acid oxidation → ketogenesis).
- **[[time-restricted-eating]] (TRE)** typically confines eating to 8–10 hr per day with isocaloric daily intake — the primary mechanism is **circadian alignment** of metabolic activity, not fasting depth. See the TRE sibling page for mechanistic separation.
- The 16:8 protocol occupies an intermediate space and is sometimes classified under either framework depending on the author.

Cross-links: [[caloric-restriction]] (sustained daily CR — distinct intervention category); [[ketogenic-diet]] (overlapping metabolic state via dietary fat composition rather than fasting).

---

## Mechanisms of geroprotection

IF engages several longevity pathways through temporal caloric and nutrient restriction.

### Autophagy induction

Autophagy is robustly induced after hepatic glycogen is substantially depleted — typically ~12–16 hr into a complete fast in humans [^martinez-lopez2017]. The threshold is not fixed: insulin sensitivity, glycogen stores at fasting onset, and activity level all affect timing. LC3-II lipidation (a canonical autophagy marker) increases detectably in blood leukocytes after ~16 hr fasting in healthy humans. See [[autophagy]] for mechanism.

**Aging relevance:** autophagy declines with age; its suppression is a proposed contributor to [[loss-of-proteostasis]] and [[disabled-macroautophagy]]. IF-induced autophagy pulses may partially offset this deficit — but the dose-response in aged humans is unknown. #gap/dose-response-unclear

### AMPK activation

Fasting lowers cellular glucose → reduced ATP/AMP ratio → AMPK activation. AMPK in turn phosphorylates ULK1 (initiating autophagy) and inhibits mTORC1 (via TSC1/2 and Raptor phosphorylation). See [[ampk]] for the full signaling network.

### mTOR suppression

Reduction in circulating amino acids (especially leucine, arginine) and insulin during fasting suppresses mTORC1 via RAG GTPase and PI3K-AKT arms. mTORC1 suppression mirrors pharmacological rapamycin action and is required for autophagy induction. See [[mtor]].

### Metabolic switch: ketogenesis

After ~18–24 hr of fasting, hepatic fatty-acid oxidation produces beta-hydroxybutyrate (BHB), which crosses the blood-brain barrier, serves as an alternative neuronal fuel, and acts as an HDAC inhibitor. BHB-mediated HDAC inhibition upregulates FOXO3a targets including oxidative-stress-defense genes. This "metabolic switch" is largely absent in 16:8 IF unless combined with low carbohydrate intake; it is consistently achieved by ADF and 5:2 [^anton2018metabolic].

### Insulin sensitization

Repeated fasting-refeeding cycles improve insulin sensitivity via multiple mechanisms: reduced visceral adiposity, hepatic fat mobilization, and upregulation of GLUT4. Improved insulin sensitivity reduces circulating IGF-1 and insulin — the same signaling reduction that is proposed to mediate CR longevity in model organisms. See [[insulin-igf1]].

### Sirtuin activation

NAD+ rises during fasting (NAMPT induction) activating SIRT1 and SIRT3. SIRT1 deacetylates and activates FOXO1, PGC-1α, and p53, among other substrates. See [[sirtuin]].

---

## Human evidence

### de Cabo & Mattson 2019 — NEJM review

The most-cited summary of IF biology [^decabo2019]. Reviews evidence across multiple fasting protocols and species, concluding that IF regimens "improve glucose regulation, increase stress resistance, and suppress inflammation." The review covers both rodent lifespan data and human metabolic RCT endpoints but explicitly notes that no human trial has measured lifespan or mortality as a primary outcome. (Full text not locally available; summary based on publicly available abstract and citation metadata.)

### Trepanowski et al. 2017 — ADF RCT

The largest controlled RCT of alternate-day fasting at the time [^trepanowski2017]. 100 metabolically healthy obese adults randomized to ADF (~500 kcal fast days), caloric-restriction control (~75% of TDEE daily), or no-intervention control. **Key finding: ADF did not outperform standard CR** on weight loss, weight maintenance, or cardiovascular markers at 12 months (weight loss: ~6% ADF vs ~5% CR, NS difference). Dropout rate was higher in ADF (38%) than CR (29%). This RCT directly challenges the premise that ADF has benefits beyond its caloric-restriction equivalent.

### Sutton et al. 2018 — early TRE in prediabetes (Cell Metab)

While technically a TRE trial (6-hr eating window, early in the day, dinner before 3pm), Sutton 2018 is relevant here because it showed that **meal-timing restriction improves insulin sensitivity, blood pressure, and oxidative stress even without weight loss** [^sutton2018]. n=8 completers (12 enrolled; 4 withdrew) — all men with prediabetes (elevated HbA1c 5.5–6.4% AND impaired glucose tolerance on 2-hr OGTT); crossover design, 5 weeks per arm with ~7-week washout. Body weight was maintained (−1.4 kg eTRF vs −1.0 kg control arm; P=0.12). The result suggests that some IF/TRE benefits are calorie-independent — though the very small n and short duration limit conclusions.

### Liu et al. 2022 — NEJM (TRE vs CR in obesity)

139 adults with obesity randomized to TRE (eating window 8:00am–4:00pm, calorie-restricted) vs daily caloric restriction (same caloric targets, unrestricted timing) for 12 months; 118 (84.9%) completed the 12-month follow-up [^liu2022]. Caloric targets were sex-stratified: 1500–1800 kcal/day for men, 1200–1500 kcal/day for women, applied equally to both arms. **TRE did not outperform CR**: weight loss −8.0 kg (95% CI, −9.6 to −6.4) in the TRE group vs −6.3 kg (95% CI, −7.8 to −4.7) in the CR group (net difference −1.8 kg; P=0.11), with no significant differences in metabolic markers. Critically, this RCT matched caloric intake between arms, isolating the timing effect — and found no significant timing benefit beyond caloric reduction alone. This is the strongest human evidence that TRE timing per se adds no statistically significant metabolic benefit once caloric intake is equalized.

### Meta-analytic evidence

Multiple meta-analyses of IF (primarily ADF and 5:2) document:
- Body weight: −0.5 to −5 kg vs control (highly heterogeneous; largely explained by caloric deficit achieved)
- LDL cholesterol: modest reduction (~5–10%)
- Fasting glucose: modest reduction in overweight/obese populations
- Blood pressure: inconsistent across trials

No meta-analysis has examined biological-age clocks or aging biomarkers as primary outcomes. #gap/needs-human-replication

---

## Aging-biology rationale

### IF vs. caloric restriction — partial mimicry

IF does not reliably achieve the same depth of caloric restriction as sustained CR — most human IF trials show 10–25% net caloric reduction, comparable to or below CALERIE-achieved CR (~12–15%). The key question is whether the **pulsatile, deep metabolic switching** during prolonged fasting periods (autophagy, ketogenesis, AMPK peaks) provides aging benefit beyond what is explained by the modest net caloric reduction. Current evidence does not resolve this [^trepanowski2017] [^liu2022].

From the [[caloric-restriction]] page: IF is listed in the definitional table as achieving "smaller time-averaged caloric reduction than continuous CR" — IF should be considered a **CR variant with additional temporal-stress components**, not a mechanistically distinct intervention.

### Rodent IF lifespan evidence

Goodrick et al. 1990 demonstrated that **intermittent feeding extends lifespan in inbred mice** in a strain- and age-of-onset-dependent manner [^goodrick1990]. Mice on alternate-day feeding showed significant lifespan extension (magnitude varied by strain and sex). Benefit was larger when IF was started in young adult mice; aged-onset IF showed attenuated effects — mirroring CR onset-timing effects. PDF not locally available (closed-access).

Mitchell et al. 2019 (*Cell Metab*) addressed the critical confound of whether meal timing or caloric restriction drives survival benefit [^mitchell2019]. C57BL/6 male mice were assigned to ad libitum (AL), 30% caloric restriction (CR), or single-meal feeding (MF — same calories as AL but in one daily meal, imposing extended fasting). Both MF and CR significantly improved morbidity and mortality vs AL; diet composition alone (without fasting) had no significant lifespan impact within feeding regimens. The authors conclude that periods of **extended daily fasting confer survival benefits independent of caloric restriction** — a key mechanistic distinction from the Goodrick and earlier CR literature.

#gap/needs-human-replication — rodent IF lifespan data have not been recapitulated in human longevity endpoints.

### Cross-organism extrapolation

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | AMPK, mTOR, autophagy, IIS all conserved and respond to fasting in humans |
| Phenotype conserved in humans? | partial | Metabolic markers respond; lifespan extension not measurable in humans |
| Replicated in humans? | no (longevity endpoint) / yes (metabolic) | Multiple human RCTs confirm metabolic effects; no human longevity endpoint |

---

## Practical considerations

### Adherence

IF's main practical advantage over continuous CR is **psychosocial sustainability** for some individuals — restriction is compartmentalized in time rather than requiring every-meal discipline. However, Trepanowski 2017 found higher dropout in ADF than daily CR. Individual variability is large.

### Side effects (early adaptation phase)

- **Headaches and fatigue** — common in weeks 1–3; largely resolve with glycogen-mobilization adaptation
- **Hunger and irritability ("hanger")** — most pronounced in ADF; generally improves over weeks
- **Sleep disruption** — possible with late-day fasting windows; early TRE protocols (eating window 8am–3pm) avoid this
- **Muscle mass** — some concern about lean mass loss, especially with high-protein requirements; resistance training attenuates; evidence mixed

### Populations requiring caution or contraindication

| Population | Recommendation |
|---|---|
| **Type 1 diabetes** | Contraindicated without close medical supervision — hypoglycemia risk during fasting |
| **Type 2 diabetes on insulin/sulfonylureas** | Medication adjustment required; risk of hypoglycemia |
| **Pregnancy and lactation** | Not recommended — caloric restriction during pregnancy has adverse fetal outcomes |
| **History of eating disorders** | Contraindicated — fasting-refeeding cycles can trigger or exacerbate restriction/bingeing patterns |
| **Underweight / malnourished** | Not indicated; risks exacerbating nutritional deficit |
| **Elderly (>70)** | Use caution — risk of exacerbating [[sarcopenia]]; insufficient data in frail older adults |

---

## Limitations and open questions

1. **Caloric confounding**: most IF trials do not match caloric intake between IF and control arms. Trepanowski 2017 and Liu 2022 are exceptions — and both show IF does not outperform CR when calories are equalized. Until more calorie-matched trials exist, IF's "unique" metabolic benefits remain uncertain. #gap/contradictory-evidence

2. **No aging-specific primary endpoint in humans**: no completed RCT has used biological-age clocks (DunedinPACE, GrimAge) or mortality as a primary IF endpoint. This is the core translation gap. #gap/needs-human-replication

3. **Optimal protocol undefined**: whether 16:8, 5:2, or ADF produces superior aging-relevant effects is unknown. Head-to-head trials with biological-age outcomes do not yet exist. #gap/dose-response-unclear

4. **Sex and genotype effects**: rodent IF studies show marked strain and sex differences (Goodrick 1990). Human subgroup analyses are inadequately powered. #gap/needs-replication

5. **Long-term safety beyond 1 year**: most human IF RCTs are ≤12 months. Long-term effects on bone density, muscle mass, and microbiome in healthy aging adults are unknown. #gap/long-term-unknown

6. **Interaction with aging per se**: human IF trials have largely enrolled younger-to-middle-aged adults with obesity. IF's risk-benefit profile in lean, non-obese older adults — the primary target for longevity benefit — is understudied.

---

## Cross-references

- [[caloric-restriction]] — most closely related; IF achieves partial CR signaling; CALERIE is the benchmark human trial
- [[prolonged-fasting]] — multi-day complete fasting (≥48–72 hr); systemic proteome signature emerges only after ~3 days, *past* the IF window (Pietzner 2024)
- [[autophagy]] — primary mediator of IF aging benefit; fasting threshold for induction
- [[mtor]] — suppressed during fasting; mTORC1 axis central to IF mechanism
- [[ampk]] — activated by fasting; coordinates metabolic and autophagy responses
- [[insulin-igf1]] — reduced by fasting; links to IIS longevity pathway
- [[sirtuin]] — NAD+-dependent; activated by fasting-induced NAD+ rise
- [[deregulated-nutrient-sensing]] — primary hallmark target
- [[disabled-macroautophagy]] — secondary hallmark target; autophagy restoration
- [[loss-of-proteostasis]] — downstream benefit via autophagy induction
- [[sarcopenia]] — potential adverse interaction in elderly if protein intake not maintained
- [[time-restricted-eating]] — sibling intervention; circadian-aligned eating window; distinct mechanistic emphasis
- [[ketogenic-diet]] — overlapping metabolic state (ketogenesis) via different dietary composition route
- [[methionine-restriction]] — sibling intervention; recapitulates CR signaling via amino-acid restriction
- [[biomarkers/dunedinpace-2022]] — proposed primary endpoint for future IF RCTs
- [[rapamycin]] — pharmacological mTOR-inhibition comparator

---

## Footnotes

[^decabo2019]: doi:10.1056/NEJMra1905136 · review · model: multi-species (rodents, primates, humans) · de Cabo R, Mattson MP · NEJM 2019 · n/a (narrative review) · not locally available (closed-access) #gap/no-fulltext-access

[^anton2018metabolic]: doi:10.1002/oby.22065 · review · model: multi-species · Anton SD, Moehl K, Donahoo WT, Marosi K, Lee SA, Mainous AG, Leeuwenburgh C, Mattson MP · Obesity 2018 · describes metabolic switch from glucose to fatty-acid-derived ketones, occurring typically >12 hr after food cessation when liver glycogen is depleted; covers organ-specific effects of fasting · not locally available (closed-access) · NOTE: the original footnote in this page cited doi:10.1146/annurev-nutr-071816-064634 (Patterson & Sears 2017 Annu Rev Nutr) under the wrong author "Mattson MP et al." — that DOI resolves to a different paper. Corrected to Anton et al. 2018 which is the Mattson-co-authored metabolic-switch review. #gap/needs-replication — BHB-HDAC inhibition and FOXO3a upregulation claim not directly confirmed against primary source; sourced from review literature.

[^trepanowski2017]: doi:10.1001/jamainternmed.2017.0936 · rct · n=100 (ADF, CR, no-intervention control) · model: metabolically healthy obese adults · Trepanowski JF et al. · JAMA Intern Med 2017 · ADF vs CR weight loss NS at 12 months; ADF dropout 38% vs CR 29% · download pending (bronze OA)

[^sutton2018]: doi:10.1016/j.cmet.2018.04.010 · rct (crossover) · n=8 completers (12 enrolled; 4 withdrew) · model: men with prediabetes (elevated HbA1c AND impaired OGTT), age 35–70 · Sutton EF et al. · Cell Metab 2018 · early 6-hr eating window (dinner before 3pm) vs 12-hr control; 5 weeks/arm, ~7-week washout; eTRF improved insulin sensitivity (postprandial insulin −26 mU/l, p=0.01), lowered systolic BP 11 mmHg and diastolic 10 mmHg (both p=0.03), reduced 8-isoprostane ~14% (p=0.05); body weight stable between arms (p=0.12); authors conclude IF has benefits independent of weight loss in humans · not locally available (download failed; PMC OA URL returned no PDF)

[^liu2022]: doi:10.1056/NEJMoa2114833 · rct · n=139 randomized (118 completed 12 months) · model: adults with obesity (BMI 28–45; mean age 31.9 yr) · Liu D et al. · NEJM 2022 · TRE arm (8:00am–4:00pm window) vs daily CR arm, both receiving same calorie targets (1500–1800 kcal/day men, 1200–1500 kcal/day women); weight loss −8.0 kg TRE vs −6.3 kg CR (P=0.11); metabolic markers not significantly different between arms · PDF locally available via a local paper archive

[^goodrick1990]: doi:10.1016/0047-6374(90)90107-q · in-vivo · model: inbred mice (multiple strains) · Goodrick CL, Ingram DK, Reynolds MA, Freeman JR, Cider N · Mech Ageing Dev 1990 · alternate-day feeding extends lifespan in a strain- and age-of-onset-dependent manner · not locally available (closed-access)

[^mitchell2019]: doi:10.1016/j.cmet.2018.08.011 · in-vivo · n=40–62/group · model: C57BL/6 male mice · Mitchell SJ, Bernier M, Mattison JA, Aon MA, Kaiser TA, Anson RM, Ikeno Y, Anderson RM, Ingram DK, de Cabo R · Cell Metab 2019 · ad libitum vs 30% CR vs single-meal feeding (meal-fed mice ate same calories as AL but in one meal, imposing extended fasting); both CR and MF improved morbidity and mortality vs AL; diet composition alone (without fasting period) had no significant lifespan impact; fasting-specific survival benefits operate independent of caloric restriction · not locally available (closed-access)

[^martinez-lopez2017]: #gap/unsourced — autophagy induction threshold (~12–16 hr fasting in humans) is commonly cited in review literature but primary human kinetic data are sparse; Alirezaei M et al. 2010 Autophagy doi:10.4161/auto.6.6.12376 reports 24-hr food deprivation strongly induces neuronal autophagy in mice; human LC3-II kinetic data needs primary citation.
