---
type: intervention
aliases: [sauna, sauna bathing, heat therapy, hyperthermia, thermal stress, Finnish sauna, infrared sauna]
mode: lifestyle
mechanisms: [heat-shock-protein-induction, hsf1-activation, hormesis, cardiovascular-conditioning, mitohormesis]
targets: []
target-hallmarks: ["[[loss-of-proteostasis]]", "[[chronic-inflammation]]", "[[mitochondrial-dysfunction]]"]
target-pathways: ["[[heat-shock-response]]"]
human-evidence-level: strong
clinical-stage: implemented
safety-profile: well-established
translation-gap: human-evidence-strong
next-experiment: "RCT of 30-min sauna 4×/week vs sham low-temp control in middle-aged adults (n≥400), 6 months, co-primary endpoints: arterial stiffness (PWV), DunedinPACE, plasma HSP70, and endothelial function (FMD) — to mechanistically link frequency-dose with molecular aging targets."
clinical-trials-active: null
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Laukkanen 2016 (Age and Ageing, dementia, PDF verified), Laukkanen 2018 BMC Medicine (PDF verified), Laukkanen 2018 Mayo Clinic Proceedings review (PDF verified), Kyriakou 2022 C. elegans HSF1 review (PDF verified). Laukkanen 2015 JAMA (not_oa) verified against PubMed abstract + Mayo 2018 review table. Laukkanen 2017 inflammation (not_oa) and Laukkanen 2017 joint-associations (download failed) not verified against full text — claims marked accordingly. Hannuksela 2001 Am J Med (not_oa) not verified against full text; thermophysiology claims cross-checked against Mayo 2018 review which cites same underlying data. Patrick 2021 (not downloaded) not verified. R34 recency refresh (2026-05-08): Bekfani 2026 SAUNA-HFpEF pilot (n=18, +2.4 mL/min/kg peak VO2) and Hamaya 2025 RCT meta-analysis (20 RCTs, mostly null; SBP −4.11 mmHg in systemic-heating subgroup) integrated via PubMed abstracts."
---


# Heat exposure (sauna bathing)

Repeated thermal stress via sauna bathing is among the most epidemiologically supported lifestyle longevity interventions with a hard mortality endpoint in humans. The KIHD prospective cohort (n=2,315 middle-aged Finnish men; 20-year follow-up) shows a strong dose-response relationship between sauna frequency and all-cause mortality, sudden cardiac death, and cardiovascular mortality [^laukkanen2015]. Mechanisms include induction of [[heat-shock-response|heat-shock proteins]] via [[hsf1|HSF1]] activation, cardiovascular conditioning through repeated hemodynamic stress, and mitohormesis from transient ROS pulses. Evidence is predominantly observational for longevity outcomes; mechanistic data comes from cell-culture and rodent heat-stress studies.

## Modality definitions

Finnish-style sauna, infrared sauna, steam room, and hot-tub immersion involve overlapping but distinct thermophysiology:

| Modality | Air temp | Humidity | Primary heat transfer | KIHD-eligible |
|---|---|---|---|---|
| Finnish dry sauna | 80–100°C | 10–20% | Convection + radiation | Yes (KIHD used this modality) |
| Infrared sauna (near- or far-IR) | 45–65°C | Ambient | Radiant IR absorption | Not in KIHD; separate evidence base |
| Steam room (Turkish bath) | 40–55°C | ~100% | Convection + condensation | Not in KIHD |
| Hot-tub / warm immersion | 40–42°C water | n/a | Conduction | Limited; smaller hemodynamic response |

The KIHD foundational data applies strictly to **Finnish dry sauna** at 80–100°C, typically 15–30 min/session. Infrared sauna achieves lower core temperature and different HSP-induction kinetics — it may share some benefits but lacks the same epidemiological evidence base. #gap/needs-replication for infrared-specific outcomes.

A typical Finnish sauna session raises core body temperature by ~1–2°C, heart rate to 100–150 bpm (comparable to moderate-intensity aerobic exercise), and skin surface temperature to ~40°C, with plasma volume redistribution away from viscera.

## KIHD cohort — primary epidemiological evidence

The **Kuopio Ischemic Heart Disease (KIHD)** study enrolled 2,315 middle-aged Finnish men (42–60 years) from eastern Finland; baseline examinations conducted March 1984 – December 1989. Participants were a population-based sample; prevalent cardiovascular disease was present in a subset (e.g., ~24% had coronary heart disease at baseline per the dementia sub-study). Sauna bathing frequency (sessions/week) and duration (minutes/session) were self-reported at baseline; 12 men reporting no sauna use were excluded in some analyses, leaving 2,315 with sauna data.

**Laukkanen et al. 2015 (JAMA Internal Medicine)** — all-cause and cardiovascular mortality over 20 years [^laukkanen2015]:

| Sauna frequency | All-cause mortality HR | Sudden cardiac death HR | Fatal CVD HR |
|---|---|---|---|
| 1×/week (reference) | 1.00 | 1.00 | 1.00 |
| 2–3×/week | 0.76 (95% CI 0.62–0.93) | 0.78 (95% CI 0.57–1.07) | 0.73 (95% CI 0.55–0.97) |
| 4–7×/week | 0.60 (95% CI 0.44–0.81) | 0.37 (95% CI 0.18–0.75) | 0.52 (95% CI 0.34–0.79) |

The 4–7×/week vs <1×/week comparison corresponds to approximately a 40% reduction in all-cause mortality and a ~63% reduction in sudden cardiac death. These associations were adjusted for age, BMI, systolic blood pressure, LDL, smoking, alcohol use, previous MI, T2D, and cardiorespiratory fitness, though residual confounding cannot be excluded.

**Duration within session also matters:** sessions >19 min showed stronger inverse associations than sessions <11 min in the same cohort, suggesting a dose-response within the thermal stimulus itself [^laukkanen2015].

**Laukkanen et al. 2018 (BMC Medicine)** — extended the KIHD analysis to a separate cohort including both men and women (n=1,688; 867 women + 821 men; mean age 63; median follow-up 15.0 years, IQR 14.1–15.9; 181 CVD deaths). Compared with 1 session/week, 4–7 sessions/week was associated with HR 0.30 (95% CI 0.14–0.64, age+sex adjusted) or 0.23 (95% CI 0.08–0.65, fully adjusted including incident CHD) for CVD mortality. The association was statistically significant overall and in men; in women the 4–7 sessions/week group had too few CVD events (0/73) for hazard ratio estimation. Sauna frequency improved CVD risk-prediction model discrimination (C-index +0.0091, p=0.010; NRI 4.14%, p=0.004) [^laukkanen2018bmcmed]. Note: this cohort was drawn from a later wave of the KIHD study (baseline 1998–2001) rather than the original 1984–1989 wave used in the 2015 JAMA paper.

**Laukkanen et al. 2017 (Age and Ageing; published online 2016)** — KIHD data on cognitive outcomes in the same 2,315 men, median follow-up 20.7 years (IQR 18.1–22.6): 4–7 sauna sessions/week vs 1×/week was associated with a 66% lower risk of dementia (HR 0.34, 95% CI 0.16–0.71, p=0.004) and a 65% lower risk of Alzheimer's disease (HR 0.35, 95% CI 0.14–0.90, p=0.029) after multivariable adjustment [^laukkanen2016dementia]. #gap/needs-replication — these cognitive findings have not been independently replicated in a separate cohort.

**Confounding concerns.** KIHD is observational. All-cause mortality associations are robust across sensitivity analyses, but healthy-user bias (sauna users may differ from non-users in fitness, socioeconomic status, health consciousness) cannot be fully adjusted. High sauna frequency in Finland is culturally embedded and tracks with other health behaviors. The magnitude of the associations is large enough to survive substantial unmeasured confounding, but mechanistic RCTs are required to establish causation.

## Mechanisms

### HSF1 activation and heat-shock protein induction

Thermal stress (cytoplasmic protein unfolding threshold ~40–43°C) activates [[hsf1|HSF1]] (heat shock factor 1). HSF1 is predominantly nuclear under basal conditions; upon heat stress, chaperones ([[hsp70]], [[hsp90]]) that normally suppress HSF1 are titrated onto denatured client proteins, releasing HSF1 to trimerize and increase its nuclear concentration — driving transcription of heat-shock proteins [^hannuksela2001][^anckar2011review]. (Activation is not a cytoplasm→nucleus translocation; HSF1 is already nuclear — stress increases its nuclear occupancy and transcriptional activity.) See [[hsf1]] for the full activation cycle.

- **[[hsp70]]** (HSPA1A/B; inducible isoform) — major molecular chaperone; refolds denatured proteins and targets terminally misfolded proteins for proteasomal degradation or autophagy. HSP70 induction is central to the proteostasis mechanism.
- **HSP90** (HSPC) — client protein stabilizer; regulates many kinase and transcription-factor clients.
- **HSP40 / DNAJB** co-chaperones — stimulate HSP70 ATPase activity; required for substrate delivery.

Upregulation of these chaperones constitutes a form of **proteostatic hormesis**: a brief thermal challenge induces a durable increase in protein quality-control capacity that outlasts the immediate stress. In *C. elegans* and rodent models, repeated heat stress extends lifespan in an HSF-1-dependent manner, and HSF-1 decline is a hallmark of aging in multiple model systems [^kyriakou2022]. The conservation of HSF1 function in humans and the expression of [[hsp70]] in human peripheral blood mononuclear cells post-sauna support mechanistic relevance, but direct human HSF1-longevity evidence remains limited. #gap/needs-human-replication

### Cardiovascular conditioning

Each sauna session produces an acute cardiovascular response that partially mimics moderate aerobic exercise [^hannuksela2001]:

- Heart rate rises to 100–150 bpm (equivalent to ~30–50% VO2max work)
- Stroke volume increases; cardiac output roughly doubles
- Peripheral vasodilation causes a drop in systemic vascular resistance
- Shear stress on vascular endothelium triggers eNOS phosphorylation → NO production → endothelial-dependent vasodilation

Repeated sessions appear to produce **structural vascular adaptations** similar to (but likely smaller than) aerobic exercise training. Small RCTs show improvements in arterial compliance and endothelial function with regular sauna bathing, though effect sizes are modest compared to an equivalent exercise prescription [^laukkanen2018mayoclinic].

### Mitohormesis

Thermal stress induces a transient mitochondrial ROS pulse. This activates NRF2/KEAP1 antioxidant-response elements and upregulates mitochondrial biogenesis signaling (PGC-1α), consistent with the broader [[hormesis]] principle that sub-lethal stress activates protective adaptations. This mechanism overlaps with exercise-induced mitohormesis. Evidence in this context is mechanistic/preclinical; direct human sauna data for mitochondrial outcomes are limited. #gap/no-mechanism (causal chain from sauna → ROS → NRF2 → biogenesis → outcome not established in humans)

### Systemic inflammation

Regular sauna bathing is associated with lower circulating CRP, IL-6, and leukocyte counts in the KIHD cohort [^laukkanen2017inflammation]. The directionality (anti-inflammatory effect vs reverse causation from healthy individuals choosing sauna) is unclear. Acute sauna sessions transiently elevate inflammatory markers before returning to or below baseline — the same hormetic pattern as exercise.

## Comparison with exercise

| Feature | Aerobic exercise | Finnish sauna |
|---|---|---|
| Acute HR response | 100–180 bpm (intensity-dependent) | 100–150 bpm (passive) |
| Mechanical muscle loading | Yes | No |
| Endothelial shear stress | Yes | Yes (via vasodilation) |
| HSF1 / HSP70 induction | Yes | Yes |
| mTOR/AMPK signaling | Yes (AMPK dominant) | Weaker / indirect |
| Caloric expenditure | 300–800 kcal/hr | ~50–100 kcal/session |
| Mortality endpoint (human) | Strong (observational + mechanistic) | Strong (observational) |
| Mechanistic RCT evidence | Extensive | Limited |

Sauna is sometimes described as "passive exercise." The overlap in cardiovascular and proteostatic pathways is real, but sauna does not replace the musculoskeletal, metabolic, and CNS adaptations from mechanical exercise loading. See [[exercise]] for that evidence base. The two may have additive benefits — a joint-association analysis in the KIHD cohort found that high cardiorespiratory fitness + high sauna frequency produced lower mortality than either alone [^laukkanen2017joint].

## Small RCT evidence

The KIHD data is supplemented by smaller intervention trials:

- Multiple small intervention trials summarized in Laukkanen et al. 2018 (Mayo Clinic Proceedings review) demonstrate improvements in pulse wave velocity (PWV), arterial compliance, and endothelial function with regular sauna bathing [^laukkanen2018mayoclinic]. The specific protocol details (session duration, frequency, temperature) vary across trials; sample sizes are typically small (16–100 participants) and durations are 3–12 weeks. The Mayo review notes the evidence base is mostly uncontrolled or non-randomised studies and further well-designed RCTs are needed. #gap/needs-replication — no specific 10-week cardiac rehabilitation RCT details were extractable from the review text. #unsourced — a previously stated "10-week, 3×/week, 30 min, 80°C" protocol claim was not traceable to the cited review.
- Infrared sauna (15-min sessions, 5×/week, 60°C) in chronic heart failure patients (NYHA II–III) reduced hospitalizations and improved 5-year cardiac event-free survival in a small Japanese RCT (Tei et al.) — this is the most robust RCT endpoint, but in a clinical population rather than healthy aging adults. #gap/needs-replication in healthy populations.

No adequately powered RCT in healthy middle-aged adults has used mortality or biological-age clocks (e.g., DunedinPACE) as pre-specified primary endpoints. #gap/needs-replication

### SAUNA-HFpEF (Bekfani 2026) — first prospective sauna trial in heart failure with preserved ejection fraction

The SAUNA-HFpEF pilot (Bekfani et al. 2026, *Eur J Heart Fail*) enrolled n=18 stable HFpEF outpatients in a 10-week supervised sauna protocol: 60°C, twice weekly, sessions progressively increased from 8 to 15 minutes [^bekfani2026sauna-hfpef]. Adherence 97%; no adverse events. Pre→post outcomes: peak VO2 18.2±5.1 → 20.6±5.7 mL/min/kg (p<0.001), 6-minute walk distance 494±95 → 527±111 m (p=0.006), with significant improvements in anaerobic threshold, quadriceps strength, diastolic function (E/e′), HADS-depression score, SF-36 social functioning, and body fat mass. **Benefits diminished at 3-month follow-up after withdrawal** (peak VO2 and anaerobic threshold declined, p<0.01). Skeletal muscle biopsies showed anabolic/metabolic upregulation and catabolism downregulation. **Caveats**: pilot, single-arm (no control), 60°C is below KIHD's Finnish-sauna 80–100°C range. A multicentre RCT is being planned. This is the first prospective interventional trial of sauna with mechanistic muscle-biopsy endpoints in a clinical cardiac population. #gap/needs-replication

### Hamaya 2025 — RCT meta-analysis of passive heating finds limited cardiometabolic benefit

Hamaya et al. 2025 (*Am J Prev Cardiol*) systematically meta-analyzed 20 RCTs of passive heating interventions (sauna, hot water bathing, hot yoga, local heating; durations 2–15 weeks) for cardiometabolic and vascular endpoints [^hamaya2025rct-meta]. **Most pooled effects were null**: no significant changes in flow-mediated dilation, pulse-wave velocity, resting heart rate, HRV, fasting glucose, HbA1c, total/HDL/LDL cholesterol, triglycerides, or CRP. **Systolic blood pressure**: pooled −2.46 mmHg (95% CI −5.02 to 0.10, ns; I²=60.3%), but in the systemic-heating subgroup (whole-body) significantly **−4.11 mmHg (95% CI −7.36 to −0.86)**, and in coronary-risk/CVD-positive populations −2.52 mmHg (95% CI −4.26 to −0.79).

**Interpretation:** The 20-RCT meta-analytic signal is substantially weaker than KIHD-implied effects, raising the question of whether KIHD effects are mostly explained by long-term cardiovascular conditioning that small short RCTs cannot capture, healthy-user confounding, or true biological mechanisms not detected at the small sample sizes and short durations of available RCTs. The systemic-heating SBP effect is real but modest. This meta-analysis tempers the strength of the "human-evidence-strong" framing for sauna's *causal* (not associational) cardiovascular benefit at the RCT level. The KIHD mortality association remains robust, but the mechanistic intervention-RCT base is thinner than its observational counterpart. #gap/contradictory-evidence #gap/needs-replication

## Safety profile and contraindications

Well-established for healthy adults. Key caveats:

- **Dehydration** — a 30-min session at 80°C causes ~0.5–1 L sweat loss; rehydration with water (not alcohol) required
- **Alcohol + sauna** — strong contraindication; alcohol potentiates vasodilation and dehydration; associated with elevated risk of fatal cardiac arrhythmia in the KIHD data itself
- **Cardiovascular instability** — unstable angina, recent MI (<3 months), uncontrolled hypertension: relative or absolute contraindications; cardiac patients should consult physician before use
- **Pregnancy** — first-trimester sauna exposure associated with increased neural-tube defect risk in older case-control data; avoidance recommended
- **Medications** — antihypertensives + sauna may cause orthostatic hypotension upon exiting; diuretics increase dehydration risk

For healthy adults free of the above, the epidemiological mortality signal does not appear to be explained by harm from occasional high-risk users.

## Extrapolation from model organisms

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | HSF1 → HSP70/90 pathway is highly conserved from yeast to human; thermal induction mechanism is identical |
| Phenotype conserved in humans? | partial | Heat-stress lifespan extension shown in *C. elegans*, *Drosophila*, rodents; human data is epidemiological (confounded) rather than controlled |
| Replicated in humans? | in-progress | KIHD + BMC Medicine 2018 cohort replications; no controlled lifespan RCT feasible |

Animal models: repeated heat-shock extends lifespan in *C. elegans* in an HSF-1-dependent manner; Drosophila thermal hormesis literature is consistent. Rodent data for whole-body hyperthermia are sparser than cell-culture data.

## Limitations and gaps

- #gap/needs-replication — KIHD mortality associations require replication in non-Finnish, non-male, and genetically diverse cohorts.
- #gap/needs-replication — Dementia/cognitive findings from KIHD not yet independently replicated.
- #gap/needs-human-replication — Mechanistic data for HSP70 induction, HSF1 activation, and mitohormesis is largely preclinical; human molecular aging endpoints not yet tested in adequately powered trials.
- #gap/dose-response-unclear — Optimal session frequency above 4×/week: insufficient data in KIHD (few individuals bathed daily). Optimal session duration (15 min vs 30 min) not systematically tested.
- #gap/long-term-unknown — Infrared sauna: different heat-transfer physics from Finnish dry sauna; benefits may overlap but epidemiological evidence is limited to Finnish-style data.
- #gap/no-mechanism — Causal pathway from sauna → reduced all-cause mortality not established; biological mechanism could be cardiovascular, proteostatic, anti-inflammatory, psychosocial (stress-reduction, social behavior in Finnish culture), or a combination.

## Cross-references

- [[exercise]] — overlapping cardiovascular and HSP-induction mechanisms; comparison table above; joint-association KIHD data
- [[hsp70]] — primary downstream chaperone induced by HSF1 activation
- [[hsf1]] — master transcription factor for heat-shock response (verified page, R26b 2026-05-06; activation mechanism: increase in nuclear concentration on stress, not cytoplasm→nucleus translocation)
- [[heat-shock-response]] — pathway-level page (stub — page not yet seeded)
- [[loss-of-proteostasis]] — hallmark targeted via HSP induction
- [[chronic-inflammation]] — hallmark; sauna associated with lower CRP/IL-6 in KIHD
- [[mitochondrial-dysfunction]] — hallmark; mitohormesis mechanism
- [[hormesis]] — broader conceptual frame; sauna as thermal hormesis
- [[cardiovascular-aging]] — sauna mortality benefit primarily expressed through CV endpoint reduction
- [[interventions/lifestyle/intermittent-fasting]] — sibling R23c lifestyle intervention
- [[interventions/lifestyle/time-restricted-eating]] — sibling R23c
- [[interventions/lifestyle/methionine-restriction]] — sibling R23c
- [[interventions/lifestyle/ketogenic-diet]] — sibling R23c
- [[interventions/lifestyle/sleep]] — sibling R23c
- [[cold-exposure]] — complementary hormesis pathway (NRF2/UCP1/brown adipose vs HSF1/HSP); R24+ candidate

## Footnotes

[^laukkanen2015]: doi:10.1001/jamainternmed.2014.8187 · Laukkanen T, Khan H, Zaccardi F, Laukkanen JA · *JAMA Intern Med* 2015;175(4):542–548 · n=2,315 middle-aged Finnish men · observational (prospective cohort, median follow-up 20.7 years, IQR 18.1–22.6; 190 SCDs, 281 fatal CHDs, 407 fatal CVDs, 929 all-cause deaths) · model: KIHD cohort, Finnish men aged 42–60 at baseline (1984–1989) · 4–7 vs 1 session/week: SCD HR 0.37 (95% CI 0.18–0.75); all-cause mortality HR 0.60 (95% CI 0.44–0.81) per Mayo 2018 review Table (abstract gives trend p≤0.005) · adjusted for CVD risk factors including CRF · archive: not_oa; verified against PubMed abstract (PMID 25705824) + Laukkanen 2018 Mayo Clinic Proceedings Table #gap/no-fulltext-access

[^laukkanen2018bmcmed]: doi:10.1186/s12916-018-1198-0 · n=1,688 (867 women + 821 men; mean age 63) · observational (prospective cohort, median follow-up 15.0 years, IQR 14.1–15.9; 181 CVD deaths) · model: KIHD cohort second wave (baseline 1998–2001), men and women · 4–7 vs 1 session/week: CVD mortality HR 0.30 (95% CI 0.14–0.64) age+sex adjusted; HR 0.23 (95% CI 0.08–0.65) fully adjusted including incident CHD; in women only, 0/73 events in 4–7 group (NE); sauna frequency improved C-index by +0.0091 (p=0.010), NRI 4.14% (p=0.004) · archive: local PDF available (PMC gold OA)

[^laukkanen2016dementia]: doi:10.1093/ageing/afw212 · n=2,315 KIHD men (aged 42–60 at baseline 1984–1989) · observational (prospective cohort, median follow-up 20.7 years, IQR 18.1–22.6) · 4–7 sauna sessions/week vs 1/week: dementia HR 0.34 (95% CI 0.16–0.71, p=0.004); Alzheimer's disease HR 0.35 (95% CI 0.14–0.90, p=0.030); multivariable-adjusted for age, BMI, SBP, LDL, smoking, alcohol, previous MI, T2D, resting HR · published online 2016; Age and Ageing 2017;46(2):245–249 · archive: local PDF available (Bristol OA manuscript)

[^laukkanen2017inflammation]: doi:10.1007/s10654-017-0335-y · n=2,315 KIHD men · observational (cross-sectional sub-analysis) · sauna frequency inversely associated with CRP, IL-6, leukocyte counts; adjustments for lifestyle confounders · archive: not_oa; not verified against full text #gap/no-fulltext-access

[^laukkanen2017joint]: doi:10.1080/07853890.2017.1387927 · n=2,315 KIHD men · observational (prospective cohort) · joint associations of sauna frequency and cardiorespiratory fitness on CV + all-cause mortality: highest fitness + highest sauna frequency group showed lowest mortality; fitness and sauna had additive associations · archive: download failed (Cloudflare block on Bristol OA server); not verified against full text #gap/no-fulltext-access

[^laukkanen2018mayoclinic]: doi:10.1016/j.mayocp.2018.04.008 · Laukkanen JA, Laukkanen T, Kunutsor SK · *Mayo Clin Proc* 2018;93(8):1111–1121 · review · model: narrative + systematic review of sauna RCTs, observational cohorts, and mechanistic studies; literature search through February 24, 2018 · covers BP, arterial stiffness, PWV, CVD mortality, dementia, pulmonary, and other outcomes; key summary Table of prospective KIHD sub-studies; proposes pleiotropic mechanistic pathways (BP reduction, endothelial function, ROS reduction, anti-inflammation, ANS modulation, lipid modulation, cardiorespiratory improvement) · archive: local PDF available (camoufox download)

[^hannuksela2001]: doi:10.1016/s0002-9343(00)00671-9 · review · model: sauna physiology narrative review (Hannuksela ML & Ellahham S, Am J Med 2001;110(2):118–126) · core thermophysiology reference: HR 100–150 bpm, core temperature +1–2°C, plasma volume redistribution, eNOS/NO pathway, HSP induction mechanism · archive: not downloaded (closed-access, not_oa) #gap/no-fulltext-access — thermophysiology claims cross-checked against Laukkanen 2018 Mayo Clinic Proceedings review (PDF available) which cites the same underlying data

[^patrick2021]: doi:10.1016/j.exger.2021.111509 · review · model: healthspan-oriented narrative review of sauna evidence · covers HSP70 induction, cardiovascular conditioning, and longevity-pathway intersections; integrates KIHD + mechanistic data · archive: not downloaded (hybrid OA)

[^kyriakou2022]: doi:10.3390/ijms232314907 · Kyriakou E, Taouktsi E, Syntichaki P · review · *Int J Mol Sci* 2022;23(23):14907 · model: *C. elegans* thermal stress and HSF-1 network · HSF-1 as central regulator of heat-stress proteostasis; lifespan extension in invertebrate models via HSF-1; confirms HSF1 is already predominantly nuclear under basal conditions (not a cytoplasm→nucleus translocator) · archive: local PDF available (PMC gold OA)

[^anckar2011review]: doi:10.1146/annurev-biochem-060809-095203 · Anckar J & Sistonen L · *Annu Rev Biochem* 2011;80:1089–1115 · review · confirms HSF1 predominantly nuclear under basal conditions; stress activation is an increase in nuclear concentration + trimerization, not cytoplasm→nucleus translocation; see [[hsf1]] for full activation cycle · archive: local PDF available via hsf1 page verification

[^bekfani2026sauna-hfpef]: doi:10.1093/ejhf/xuag082 · Bekfani T, Abo Hwach A, Moebert R, Seibel S, Burger A, Kaehne T, Bekhite MM, Vargas KG, Janashia M, Groscheck T, Daboul A, Rauwolf T, Behrendt T, Lichtenauer M, Paar V, Lemmer P, Friede T, Schega L, Biering-Sorensen T, Schulze PC, Anker SD, von Haehling S, Schmeisser A, Braun-Dullaeus RC · *Eur J Heart Fail* 2026 (Online Mar 14) · interventional pilot (single-arm, prospective; no control) · n=18 (completed; HFpEF outpatients) · 10 weeks supervised sauna 60°C, twice weekly, 8→15 min sessions; 3-month follow-up after withdrawal · peak VO2 18.2±5.1 → 20.6±5.7 mL/min/kg (p<0.001); 6MWT 494±95 → 527±111m (p=0.006); improved anaerobic threshold, quadriceps strength, diastolic function (E/e′), HADS-depression, SF-36 social functioning, body composition; muscle biopsies show anabolic upregulation, catabolism downregulation; benefits declined at 3 months follow-up after withdrawal (peak VO2 and anaerobic threshold p<0.01) · adherence 97%; no AEs · 60°C is sub-Finnish-sauna temperature; pilot, no control · PMID 41831305

[^hamaya2025rct-meta]: doi:10.1016/j.ajpc.2025.101082 · Hamaya R, Joyama Y, Miyata T, Fuse SI, Yamane N, Maruyama N, Kanazawa H, Morishita K, Sesso HD · *Am J Prev Cardiol* 2025;23:101082 · meta-analysis · 20 RCTs of passive heating ≥1 week duration (saunas, hot water immersion, hot yoga, local heating); duration 2–15 weeks · most pooled effects null (FMD, PWV, HR, HRV, fasting glucose, HbA1c, lipids, CRP); SBP overall −2.46 mmHg (95% CI −5.02 to 0.10; ns; I²=60.3%); systemic-heating subgroup SBP **−4.11 mmHg (95% CI −7.36 to −0.86)**; CHD/CVD-risk subgroup SBP −2.52 mmHg (−4.26 to −0.79) · PROSPERO CRD42024621600 · PMID 41049507 · PMC12490526
