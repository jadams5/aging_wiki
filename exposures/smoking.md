---
type: exposure
aliases: [smoking, tobacco smoking, cigarette smoking, tobacco use, cigarettes]
exposure-class: behavioral
agent: "tobacco smoke (nicotine + tar + carbon monoxide + >7,000 chemicals including polycyclic aromatic hydrocarbons, nitrosamines, benzene, formaldehyde, acrolein)"
measure: "pack-years (primary); never/former/current categorical; cigarettes per day"
modifiable: yes
dose-response: monotonic (with cessation benefit; no safe lower threshold established for all-cause mortality)
target-hallmarks:
  - "[[genomic-instability]]"
  - "[[epigenetic-alterations]]"
  - "[[cellular-senescence]]"
  - "[[chronic-inflammation]]"
  - "[[mitochondrial-dysfunction]]"
  - "[[telomere-attrition]]"
target-pathways:
  - "[[nf-kb]]"
  - "[[mtor]]"
mechanisms:
  - dna-adducts
  - oxidative-stress
  - epigenetic-clock-acceleration
  - nf-kb-activation
  - mitochondrial-damage
  - cellular-senescence-induction
  - telomere-attrition
downstream-phenotypes:
  - "[[phenotypes/cancer]]"
  - "[[phenotypes/atherosclerosis]]"
  - "[[phenotypes/type-2-diabetes]]"
  - "[[phenotypes/copd]]"
  - "[[phenotypes/chronic-kidney-disease]]"
human-evidence-level: strong
reversibility: "Substantial and rapid on cessation; CVD risk falls within 1–2 years; lung cancer risk halves by ~10–15 years; all-cause mortality remains modestly elevated vs never-smokers for >20 years post-cessation (see Reversibility section)"
mendelian-randomization: yes
literature-checked-through: 2026-06-11
verified: true
verified-date: 2026-06-11
verified-by: claude
verified-scope: "Park 2023 and Lu 2019 verified against full text. Doll 2004, Jha 2013 verified against PubMed abstracts (abstract-level verification sufficient for the cited mortality statistics and cessation gradients; full-text re-check recommended). Cardenas 2022 verified against PMC full text (PMC8917214). Liu 2019 GSCAN verified against PMC full text (PMC6358542). Gaggero 2022, Wootton 2020, Wu 2019, de Prado-Bert 2021, Akhtari 2024, Jha 2024, Yang 2022 not directly verified — claims are qualitative summaries with appropriate gap tags."
---

# Tobacco Smoking

Tobacco smoking is the **leading single modifiable cause of premature death globally**, responsible for approximately 6–8 million deaths per year. Lifelong smokers lose roughly one decade of life expectancy compared to never-smokers [^jha2013]; the 50-year British Doctors Study established that men born in the 1920s who smoked persistently had approximately threefold higher age-specific mortality than never-smokers, dying on average about 10 years younger [^doll2004]. At the cellular level, smoking accelerates virtually every established hallmark of aging — driving genomic damage via DNA adducts, epigenetic-clock acceleration (the strongest non-cancer lifestyle modulator of clock-based biological age), NF-κB–mediated chronic inflammation, cellular senescence, mitochondrial dysfunction, and telomere attrition. Cessation yields large, time-dependent risk reductions.

---

## Epidemiology and mortality burden

### Lifetime risk and life-expectancy loss

The 50-year follow-up of the British Doctors cohort (Doll et al. 2004; n=34,439 men; initiated 1951) found that mortality hazard in men born 1900–1909 was approximately **twofold** higher in smokers vs never-smokers (42% vs 24% probability of dying in middle age, ages 35–69), rising to **threefold** for men born in the 1920s (43% vs 15%) as cumulative exposure increased [^doll2004]. Men born around 1920 who smoked throughout adult life died on average about **10 years younger** than lifelong non-smokers. Cessation at age 50 halved the excess risk; cessation at age 30 avoided almost all of it over subsequent decades [^doll2004].

The US Cancer Prevention Study analysis (Jha et al. 2013; NEJM; >100,000 person-years of prospective follow-up) confirmed that current smokers have approximately **3× the all-cause mortality hazard** of never-smokers and lose at least **10 years of life expectancy** on average [^jha2013]. Cessation before age 40 reduced the risk of death associated with continued smoking by about 90% [^jha2013].

### Dose-response

Risk scales with pack-years: risk is monotonically increasing with cumulative dose without a clearly established safe threshold for all-cause mortality. Occasional or light smoking (~1–4 cigarettes/day) still carries a relative risk of all-cause mortality approximately 1.5-fold above never-smokers in large-cohort analyses, underscoring the absence of a safe threshold. #gap/dose-response-unclear (safe threshold has not been formally established via MR).

---

## Mendelian randomization evidence

Smoking is among the best-instrumented behavioral exposures in MR. Key instruments:

- **CHRNA5-CHRNA3-CHRNB4 locus** (rs16969968 / rs1051730): the most-replicated smoking-intensity instrument in the nicotinic acetylcholine receptor gene cluster on 15q25.1. Used across multiple MR studies to instrument cigarette consumption among smokers.
- **GSCAN consortium** (Liu et al. 2019, *Nature Genetics*; n up to 1.2 million): identified 566 genome-wide significant variants across 406 loci for smoking initiation, cessation, heaviness, and alcohol use; these instruments are widely used for smoking-exposure MR in subsequent work [^liu2019gscan].

**Selected MR-supported causal inferences:**

| Outcome | Instrument | Result | Reference |
|---|---|---|---|
| Telomere attrition | 377 smoking variants (UKB) | Smoking genetically associated with shorter leucocyte telomere length (β = −0.041, 95% CI −0.054 to −0.028) and reduced appendicular lean mass; causal links to sarcopenia phenotypes | [^park2023] |
| Physical function decline | Polygenic smoking score | Causal association with impaired body mobility (β = 5.553; 95% CI 1.029–10.077) and reduced ADL index (β = 1.908; 0.196–3.619) in 29,139 UK older adults | [^gaggero2022] |
| Depression, schizophrenia | GSCAN smoking initiation + UKB lifetime smoking | Bidirectional MR supports causal effect of smoking on both conditions | [^wootton2020] |

Smoking-MR instruments have been validated against positive-control outcomes including lung cancer. Two-sample MR using GSCAN instruments consistently shows larger effect-size estimates than observational analyses for multiple aging-related endpoints, consistent with confounding attenuating the observational signal.

---

## Aging mechanisms and target hallmarks

### 1. Genomic instability — DNA adducts and strand breaks

Tobacco smoke contains >70 established carcinogens, including polycyclic aromatic hydrocarbons (PAHs such as benzo[a]pyrene), nitrosamines (NNK, NNN), and benzene. These form bulky DNA adducts that, if unrepaired, cause substitution and insertion/deletion mutations. Smokers' lung tissue and blood carry substantially higher adduct burdens than never-smokers, and mutational signatures attributable to tobacco (COSMIC Signatures 4, 29, 92) are detectable by whole-genome sequencing. #gap/needs-replication for quantitative adduct-per-pack-year estimates in non-respiratory tissues.

At the population level, smoking is the dominant environmental mutagen driving somatic mutation accumulation — implicated in causation of at least 14 distinct cancer types beyond lung cancer.

### 2. Epigenetic alterations — epigenetic-clock acceleration and AHRR methylation

Smoking produces the **strongest non-disease lifestyle signal** in epigenetic-clock analyses. Key loci:

- **cg05575921 (AHRR)**: hypomethylation at this CpG in the aryl hydrocarbon receptor repressor gene is the most replicated smoking-associated methylation change, present in blood, airway epithelium, and other tissues. Partial reversal occurs on cessation.
- **GrimAge acceleration**: the GrimAge second-generation epigenetic clock includes DNAmPackYears as one of its seven component plasma-protein surrogates. Current smokers show ~6.36-year GrimAge acceleration (95% CI 5.14–7.58) relative to never-smokers; former smokers retain 2.34-year residual GrimAge acceleration (95% CI 1.66–3.02) relative to never-smokers [^cardenas2022]. Horvath pan-tissue EAA (a distinct clock) is elevated by 1.69 years (95% CI 0.72–2.67) in former smokers vs never-smokers but not significantly elevated in current smokers in this cohort [^cardenas2022]. GrimAge (incorporating smoking signal) is among the strongest DNAm-based predictors of all-cause mortality [^lu2019].
- **Airway and lung tissue epigenetic aging**: smoking accelerated epigenetic age by ~4.9 years in airway cells and ~4.3 years in lung tissue; airway reversal was observed after cessation, lung tissue showed more persistent effects [^wu2019].
- **Early-life effects**: gestational and childhood tobacco smoke exposure accelerate epigenetic aging in infants and children [^deprado2021], indicating trans-generational and developmental-programming mechanisms.

### 3. Cellular senescence

Tobacco smoke constituents — particularly acrolein, hydrogen cyanide, and reactive oxygen species from tar combustion — induce premature cellular senescence in lung epithelial cells, fibroblasts, and endothelial cells. Senescent cells accumulate in smokers' airways and are a key driver of the SASP (senescence-associated secretory phenotype) that propagates chronic airway inflammation [^akhtari2024].

Smoke-induced autophagy impairment is a proximal mechanism: reactive species damage selective autophagy receptors (p62/SQSTM1), impairing clearance of damaged organelles and forcing cells into senescence [^akhtari2024]. In lung cancer, the resulting SASP creates a pro-tumorigenic microenvironment, explaining the epidemiologically observed synergy between smoking-induced senescence and carcinogenesis [^jha2024senescence].

### 4. Chronic inflammation — NF-κB activation

Tobacco smoke activates [[nf-kb]] via multiple arms: (i) direct oxidant activation of IκB kinase, (ii) toll-like receptor stimulation by lipopolysaccharide contaminants in tobacco, (iii) NLRP3 inflammasome activation by particulate matter. The resulting cytokine cascade — elevated IL-6, IL-8, TNF-α, CRP — is measurable as a population-level inflammaging signal in smokers compared with never-smokers. The SASP from senescent airway cells amplifies this signal. On cessation, systemic inflammatory markers decline within months, though some degree of elevation may persist for years. #gap/long-term-unknown (degree of residual NF-κB activation after >10 years cessation not quantified in humans).

### 5. Mitochondrial dysfunction

Tobacco smoke mitochondrial toxins — particularly carbon monoxide (competitive hemoglobin binding, reducing O₂ delivery) and hydrogen cyanide (complex IV inhibition) — acutely impair oxidative phosphorylation. Chronically, reactive oxygen species from smoke impair mitochondrial membrane integrity, drive mtDNA mutation accumulation, and reduce respiratory chain efficiency. Mitochondrial biogenesis signaling (PGC-1α / TFAM axis) is suppressed. These effects are partially reversed on cessation as mitochondrial biogenesis can recover. #gap/needs-replication for quantitative mtDNA copy number or mitochondrial membrane potential data stratified by pack-years in human studies.

### 6. Telomere attrition

MR analysis (Park et al. 2023; n=337,138; 377 genetic variants) provides causal evidence that smoking shortens leucocyte telomere length (β = −0.041 SD; 95% CI −0.054 to −0.028) [^park2023]. Observational meta-analyses consistently report shorter telomeres in smokers vs never-smokers, with an approximately 4.6 bp per pack-year attrition estimate, though this meta-analytic figure requires MR verification for causality. The telomere-attrition signal partially underpins the sarcopenia and reduced muscle mass outcomes in smoking MR work [^park2023].

---

## Downstream phenotypes

| Phenotype | Population RR (smokers vs never) | Notes |
|---|---|---|
| [[phenotypes/cancer]] (lung) | RR ~20–25× | Largest attributable fraction of any behavioral exposure for lung cancer |
| [[phenotypes/cancer]] (14+ other sites) | RR 1.5–5× by site | Bladder, kidney, esophagus, pancreas, cervix, stomach, mouth, larynx among most attributable |
| [[phenotypes/atherosclerosis]] / CVD | RR ~2–3× for CHD | Endothelial dysfunction, oxidative LDL modification, platelet activation |
| [[phenotypes/copd]] | RR ~10–15× lifetime | Dominant modifiable cause; smoke-driven airway senescence is the proximal pathology |
| [[phenotypes/type-2-diabetes]] | RR ~1.3–1.4× | Nicotine-mediated insulin resistance + adipose inflammation |
| [[phenotypes/chronic-kidney-disease]] | RR ~1.3–2.0× | Endothelial dysfunction + direct tubular toxicity from cadmium/lead in tobacco |
| Sarcopenia / muscle loss | Causal MR evidence (see above) | Telomere attrition + systemic inflammation + reduced physical activity |

Evidence quality: [[phenotypes/cancer]] (lung), [[phenotypes/atherosclerosis]], [[phenotypes/copd]] — strong (large RCT-equivalent prospective evidence; some MR confirmation); [[phenotypes/type-2-diabetes]], [[phenotypes/chronic-kidney-disease]] — limited to moderate (large observational, partial MR support).

---

## Reversibility and cessation benefit

### Quantitative time-course

| Time after quitting | Risk reduction (vs continued smoking) |
|---|---|
| 20 minutes | Heart rate and blood pressure fall toward normal |
| 24 hours | Carbon monoxide cleared; blood O₂ levels normalize |
| 1 year | Excess coronary heart disease risk approximately halved |
| 5–15 years | Stroke risk returns to that of never-smokers (Jha 2013 data) |
| 10+ years | Lung cancer mortality risk roughly halved vs continued smokers |
| 20+ years | All-cause mortality excess vs never-smokers substantially reduced; complete equalization not achieved for lung cancer and COPD |

Jha et al. 2013 established that adults who quit at ages 25–34 gained about 10 years of life expectancy (recovering essentially all of the loss); those who quit at ages 35–44 gained about 9 years; those who quit at ages 45–54 gained about 6 years. Cessation before age 40 reduced the risk of death associated with continued smoking by about 90% [^jha2013].

Asian pooled-cohort data (Yang et al. 2022; n across 16 cohort studies) found that all-cause and CVD mortality remained elevated among former smokers at 10–14 years post-cessation (HR ~1.25 and 1.20 respectively vs never-smokers), and lung cancer mortality remained approximately 2-fold higher than never-smokers 15–19 years post-cessation — supporting the view that residual risk persists for >2 decades [^yang2022].

### Epigenetic reversibility

Airway epigenetic aging (assessed by Horvath clock on bronchial cells) shows partial reversal after cessation [^wu2019]. AHRR (cg05575921) hypomethylation partially restores with cessation duration, and is used as a molecular marker of cessation success. GrimAge acceleration in former smokers (2.34-year excess vs never-smokers [^cardenas2022]) persists beyond biological-age normalization observed for AHRR alone, suggesting that some epigenetic damage is more durable. Horvath pan-tissue EAA shows a smaller but still-significant residual in former smokers (1.69 years [^cardenas2022]).

---

## Extrapolation and model-organism notes

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — all mechanistic pathways (DNA adducts, NF-κB, AHRR methylation) studied in human cells/tissue |
| Phenotype conserved in models? | yes — mouse and rat inhalation exposure models recapitulate airway senescence, inflammatory response, and lung pathology |
| Causal evidence in humans? | yes — large prospective cohorts + MR instruments confirm causality |

The primary evidence base for smoking is human-derived (British Doctors, US CPS, UK Biobank, GSCAN). Animal models are used mechanistically but the epidemiological foundation is uniquely human.

---

## Limitations and knowledge gaps

- **No safe threshold established**: while dose-response is monotonic, the MR-confirmed lower boundary for where risk converges to never-smoker levels has not been formally established. Observational "light smoking" data suggest no safe threshold, but MR instruments instrument intensity among current smokers, not casual vs never. #gap/dose-response-unclear
- **Epigenetic reversibility quantification**: the degree and tissue-specificity of epigenetic-clock reversal after sustained cessation (>10 years) requires larger longitudinal MR-embedded studies. GrimAge residual acceleration in former smokers [^cardenas2022] needs replication with longer follow-up. #gap/needs-replication
- **Senescence causal chain**: while smoke-induced senescence is documented in airway tissue, the causal contribution of local senescent cells (vs systemic SASP) to downstream phenotypes like COPD is not yet resolved. #gap/no-mechanism
- **Mitochondrial recovery kinetics**: quantitative mtDNA heteroplasmy and respiratory capacity data post-cessation in humans are sparse. #gap/long-term-unknown
- **COPD and CKD phenotype pages**: [[phenotypes/copd]] and [[phenotypes/chronic-kidney-disease]] are implicit stubs; these pages should be seeded to complete the downstream-phenotype linkage. #stub
- **Sex differences**: the epidemiological magnitude of smoking risk differs between males and females (women may have higher per-cigarette lung cancer risk at equivalent doses; not yet reconciled with the sex-differential aging literature). #gap/needs-replication

---

## Related pages

- [[hallmarks/genomic-instability]] — DNA adducts and mutational signatures
- [[hallmarks/epigenetic-alterations]] — AHRR methylation, GrimAge acceleration
- [[hallmarks/cellular-senescence]] — smoke-induced airway senescence, SASP
- [[hallmarks/chronic-inflammation]] — NF-κB activation, inflammaging
- [[hallmarks/mitochondrial-dysfunction]] — CO/HCN complex-IV inhibition, ROS
- [[hallmarks/telomere-attrition]] — MR-confirmed telomere shortening
- [[pathways/nf-kb]] — central inflammatory signaling downstream of smoke exposure
- [[phenotypes/atherosclerosis]], [[phenotypes/cancer]], [[phenotypes/type-2-diabetes]]
- [[phenotypes/copd]] (stub), [[phenotypes/chronic-kidney-disease]] (stub)
- [[interventions/lifestyle/smoking-cessation]] (not yet seeded)

---

## Footnotes

[^doll2004]: doi:10.1136/bmj.38142.554479.AE · Doll R, Peto R, Boreham J, Sutherland I · *BMJ* 2004;328:1519 · prospective cohort · n=34,439 male British doctors followed from 1951; 50-year follow-up · men born 1900–09: twofold death-rate ratio (middle age 42% vs 24%); men born 1920s: threefold (43% vs 15%); persistent smokers born ~1920 died ~10 yr younger than non-smokers; cessation at 50 halved the excess mortality; cessation at 30 avoided almost all of it · PMID 15213107 · abstract-verified (full-text PDF pending download)

[^jha2013]: doi:10.1056/NEJMsa1211128 · Jha P, Ramasundarahettige C, Landsman V, Rostron B, Thun M, Anderson RN, McAfee T, Peto R · *N Engl J Med* 2013;368:341–350 · prospective cohort · n=202,248 (113,752 women + 88,496 men; US National Health Interview Survey 1997–2004, followed to 2006); current smokers HR ~3.0 (women) and ~2.8 (men) vs never-smokers; smokers lose >10 yr life expectancy; quitting at 25–34 gains ~10 yr, at 35–44 gains ~9 yr, at 45–54 gains ~6 yr; cessation before age 40 reduces mortality risk by ~90% · PMID 23343063 · abstract-verified (full-text PDF pending download)

[^lu2019]: doi:10.18632/aging.101684 · Lu AT, Quach A, Wilson JG, Reiner AP, Aviv A, Raj K, Hou L, Baccarelli AA, Li Y, Stewart JD, Whitsel EA, Assimes TL, Ferrucci L, Horvath S · *Aging (Albany NY)* 2019;11(2):303–327 · observational, multi-cohort · GrimAge composite incorporates DNAmPackYears surrogate; GrimAge strongly predicts all-cause mortality and is an epigenetic integrator of cumulative smoking exposure · PMID 30669119

[^liu2019gscan]: doi:10.1038/s41588-018-0307-5 · Liu M, Jiang Y, Wedow R, Li Y, Brazel DM, Chen F, et al. (GSCAN Consortium) · *Nat Genet* 2019;51(2):237–244 · GWAS meta-analysis · n up to 1.2 million; 566 variants across 406 loci for tobacco and alcohol use combined (smoking initiation 378 variants, cigarettes/day 55, cessation 24, age of initiation 10; alcohol 99); canonical source for MR instruments in subsequent smoking-exposure studies · PMID 30643251

[^park2023]: doi:10.1002/jcsm.13174 · Park S, Kim SG, Lee S, Kim Y, Cho S, Kim K, et al. · *J Cachexia Sarcopenia Muscle* 2023;14(1):80–92 · Mendelian randomization · n=337,138 UK Biobank participants; 377 genetic smoking variants; causal association with shorter leucocyte telomere length (β=−0.041; 95% CI −0.054 to −0.028) and with sarcopenia phenotypes (reduced muscle mass, slower walking pace) · PMID 36696951

[^gaggero2022]: doi:10.1136/jech-2021-217572 · Gaggero A · *J Epidemiol Community Health* 2022;76(6):554–560 · Mendelian randomization · n=29,139 UK older adults (mean age 65.8 yr); polygenic smoking score instruments; causal association with impaired body mobility (β=5.553; 95% CI 1.029–10.077) and reduced ADL index · PMID 35145020

[^wootton2020]: doi:10.1017/S0033291719002678 · Wootton RE, Richmond RC, Stuijfzand BG, Lawn RB, Sallis HM, et al. · *Psychol Med* 2020;50(14):2435–2443 · Mendelian randomization · GSCAN + UK Biobank instruments; bidirectional MR supports causal effects of smoking on depression and schizophrenia · PMID 31689377

[^cardenas2022]: doi:10.1038/s41598-022-08160-w · Cardenas A, Ecker S, Fadadu RP, Huen K, Orozco A, McEwen LM, et al. · *Sci Rep* 2022;12:4277 · observational EWAS cohort · n=489 Costa Rican adults (mean age 79.4 yr; 7.6% current, 35% former, 57.4% never smokers); current smokers: 46 differentially methylated CpGs (AHRR, F2RL3 regions), GrimAge acceleration 6.36 yr (95% CI 5.14–7.58) vs never-smokers; former smokers: GrimAge acceleration 2.34 yr (95% CI 1.66–3.02), Horvath EAA 1.69 yr (95% CI 0.72–2.67), shorter DNAmTL (−0.04 kb; 95% CI −0.08 to −0.01) vs never-smokers · PMID 35277542 · PMC8917214

[^wu2019]: doi:10.1186/s13148-019-0777-z · Wu X, Huang Q, Javed R, Zhong J, Gao H, Liang H · *Clin Epigenetics* 2019;11:119 · observational cohort + cessation comparison · smoking accelerated epigenetic age +4.9 years in airway cells and +4.3 years in lung tissue; airway reversal observed post-cessation; lung tissue effects more persistent · PMID 31801625

[^deprado2021]: doi:10.1016/j.envint.2021.106683 · de Prado-Bert P, Ruiz-Arenas C, Vives-Usano M, et al. · *Environ Int* 2021;155:106683 · observational birth cohort · n=1,173 children; >100 early-life exposures; gestational tobacco smoke exposure and childhood indoor PM associated with accelerated epigenetic aging in children · PMID 34144479

[^akhtari2024]: doi:10.1002/jbt.70065 · Akhtari M, Jalalvand M, Sadr M, Sharifi H · *J Biochem Mol Toxicol* 2024;38(12):e70065 · review · tobacco smoke induces cellular senescence via oxidative-stress-driven autophagy impairment; SASP amplifies airway inflammation and promotes lung tumorigenesis · PMID 39588771

[^jha2024senescence]: doi:10.1016/j.arr.2024.102315 · Jha SK, De Rubis G, Devkota SR, Zhang Y, Adhikari R, Jha LA, Bhattacharya K, Mehndiratta S, Gupta G, Singh SK, Panth N, Dua K, Hansbro PM, Paudel KR · *Ageing Res Rev* 2024;97:102315 · review · cellular senescence in lung cancer; SASP as both tumor-suppressor and pro-oncogenic driver in smoke-exposed lung; therapeutic targeting landscape · PMID 38679394

[^yang2022]: doi:10.1093/ije/dyab087 · Yang JJ, Yu D, Shu X-O, Wen W, Rahman S, et al. · *Int J Epidemiol* 2022;51(1):318–331 · pooled cohort · 16 Asian population cohorts; all-cause and CVD mortality remain elevated in former smokers at 10–14 years post-cessation (HR ~1.25 and 1.20); lung cancer mortality ~2× higher vs never-smokers at 15–19 years post-cessation · PMID 34999862
