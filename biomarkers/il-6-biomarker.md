---
type: biomarker
aliases: [interleukin-6, IL6 serum, plasma IL-6, inflammaging cytokine]
modality: proteomic
unit: pg/mL
training-cohort: "Harris 1999 (EPESE, n=1,727 community-dwelling elderly): landmark mortality-prediction association. Cesari/Penninx 2003 (Health ABC, enrolled n=3,075; analyzed n=2,225 after baseline-CVD exclusions; InCHIANTI 2004, n=1,020): CV events and physical performance. Sayed 2021 (Stanford/Buck iAge cohort, n=1,001 ages 8–96): inflammatory aging clock training. Cohort mortality + morbidity outcomes across these independent datasets establish the multi-decade evidence base."
n-cpgs-or-features: 1
training-target: mortality
calibration-tissues: ["[[blood]]"]
test-retest-icc: null
human-evidence-level: strong
mendelian-randomization: yes
intervention-responsive: yes
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Sayed 2021, CANTOS Ridker 2017, Swerdlow 2012, and Cesari 2003 (Health ABC) verified against primary source PDFs. Harris 1999 (EPESE) is closed-access (not_oa) — core claims confirmed via Crossref metadata and downstream citation context; exact quartile cutpoint and RR figures on wiki cannot be independently confirmed against full text. Cesari 2004 (InCHIANTI) failed to download and is not OA — SPPB/grip-strength numerics unverified. Ferrucci 2002 download not attempted (pending); Mathur 2008 and Traise 2024 not checked."
---

# Serum IL-6 as an Inflammaging Biomarker

Serum or plasma interleukin-6 (IL-6) is the most consistently validated single cytokine predictor of all-cause mortality, cardiovascular events, frailty, and functional decline in older adults. Decades of large cohort data across independent populations establish it as the canonical inflammaging biomarker. Unlike methylation-based epigenetic clocks, it is a direct molecular readout of systemic chronic inflammation, measurable by standard clinical immunoassay. Its combination of mechanistic grounding, broad cohort replication, intervention-responsiveness, and Mendelian randomization evidence for causal relevance of the IL-6 axis makes it the single most actionable inflammatory aging biomarker in routine use.

For protein-level biology (structure, signaling cascade, receptor biology, NCBI Gene ID, disease associations beyond aging) see [[molecules/proteins/il-6]].

## Identity and Molecular Context

- **Protein:** Interleukin-6 · UniProt P05231 · Gene: IL6 · Organism: Homo sapiens
- **Receptor complex:** IL-6 signals via membrane-bound IL-6Rα (IL6R, UniProt P08887) + gp130 (IL6ST), or via trans-signaling through soluble IL-6Rα shed into circulation
- **Key downstream pathways:** [[jak-stat-pathway]] (primarily JAK1/STAT3), [[nf-kb]] (upstream driver of IL-6 transcription)
- **Measurement:** Most clinical assays are high-sensitivity ELISA or multiplex Luminex panels. Plasma and serum values are approximately equivalent; specify collection method when comparing across studies. Assay-to-assay variation is a meaningful confounder (see Limitations below).

## Aging Trajectory

Serum IL-6 rises progressively with age in community-dwelling populations, even in the absence of acute illness. Estimates from InCHIANTI and similar cohorts place the typical range at approximately 1–2 pg/mL in healthy adults aged 30–40, rising to approximately 3–5 pg/mL at age 70–80, representing a 2–4-fold increase over five decades [^cesari2004_perf]. The rise accelerates after age 70, tracking the increase in SASP-secreting senescent cell burden (see [[processes/sasp]]) and declining immune clearance capacity.

The Harris 1999 EPESE analysis found the highest IL-6 quartile threshold at 3.19 pg/mL in a population aged 71+ — participants above this threshold had a twofold higher all-cause mortality risk [^harris1999].

Important caveats: reference values from different assays are not interchangeable. Published "normal" ranges vary 3–5-fold across platforms. Longitudinal within-person trajectories are more interpretable than cross-sectional absolute values. Acute illness, BMI, and diurnal variation confound cross-sectional snapshots (see Confounders).

## Major Cohort Evidence

### Harris 1999 — EPESE (landmark mortality association)

In 1,727 community-dwelling adults aged 71+ (East Boston, Iowa, New Haven, North Carolina, Massachusetts) followed for up to 4 years, elevated IL-6 was one of the strongest predictors of all-cause mortality in the cohort [^harris1999]:

- Highest vs lowest IL-6 quartile (cutpoint ≥3.19 pg/mL): **RR ~2.0** for all-cause death
- IL-6 elevated + CRP elevated together: **RR ~2.6** for all-cause death
- Associations persisted after adjustment for age, smoking, prior cardiovascular disease
- Effect applied to both cardiovascular and non-cardiovascular causes of death

This was the first large-cohort demonstration that IL-6 independently predicts non-specific mortality across disease categories — establishing it as an integrative biological aging signal, not merely a cardiovascular risk marker.

### Health ABC Study — Cardiovascular Events (Cesari/Penninx 2003)

In the Health, Aging and Body Composition Study (3,075 enrolled; 2,225 analyzed after excluding 816 participants with baseline CVD and 34 with missing data), Black and White adults aged 70–79, IL-6 was strongly and independently associated with cardiovascular outcomes across tertiles [^cesari_habc_circ]:

- Incident cardiovascular events across multiple endpoints; IL-6 was the strongest of several inflammatory markers tested
- Effect persisted after adjustment for established CV risk factors and other inflammatory markers (CRP, TNF-α)
- IL-6 outperformed CRP as an independent predictor in this dataset

### InCHIANTI — Physical Performance (Cesari 2004)

In 1,020 community-dwelling Italians aged 65+ from the Invecchiare in Chianti (InCHIANTI) cohort, elevated IL-6 was significantly associated with reduced physical performance [^cesari2004_perf]:

- Short Physical Performance Battery scores: 2.25 (lowest IL-6 quartile) vs 2.08 (highest), p<0.001
- Hand-grip strength: 27.4 kg (lowest quartile) vs 25.1 kg (highest), p=0.001
- Associations with functional decline held after adjustment for CRP, fibrinogen, and white blood cell count

The InCHIANTI dataset has been used in numerous follow-up analyses confirming IL-6's role in [[phenotypes/sarcopenia]], incident disability, and cognitive decline.

### Women's Health and Aging Study — Muscle Strength Mediation (Ferrucci 2002)

In 620 older women, high IL-6 (>3.10 pg/mL) was associated with accelerated decline in knee extensor strength, and decline in muscle strength substantially mediated the relationship between high IL-6 and incident mobility disability [^ferrucci2002]. This provided mechanistic evidence linking circulating IL-6 to the musculoskeletal consequences of inflammaging.

| Cohort | N | Age | Key IL-6 Finding | DOI |
|---|---|---|---|---|
| EPESE (Harris 1999) | 1,727 | 71+ | RR~2.0 all-cause mortality; highest quartile ≥3.19 pg/mL | 10.1016/s0002-9343(99)00066-2 |
| Health ABC (Cesari 2003) | 2,225 analyzed (3,075 enrolled) | 70–79 | Strongest CV-event predictor among inflammatory markers | 10.1161/01.CIR.0000097109.90783.FC |
| InCHIANTI (Cesari 2004) | 1,020 | 65+ | Physical performance declined across IL-6 quartiles | 10.1093/gerona/59.3.m242 |
| Women's Health & Aging (Ferrucci 2002) | 620 | women, elderly | Muscle strength decline mediates IL-6 → disability | 10.1046/j.1532-5415.2002.50605.x |

## The Inflammatory Aging Clock (iAge) Context

Sayed et al. 2021 (*Nature Aging*, n=1,001, ages 8–96) trained a deep-learning model on exactly 50 circulating immune markers (cytokines, chemokines, and growth factors) to derive an inflammatory aging clock (iAge) predicting multimorbidity, frailty, immunosenescence, and cardiovascular aging [^sayed2021]. The strongest contributor to iAge was CXCL9 (a chemokine), not IL-6.

Critically, the paper explicitly states that "canonical markers of acute infection such as IL-6 and tumor necrosis factor-α were **not** major contributors to iAge" — indicating that IL-6 does not capture the age-specific chronic inflammatory signature that the iAge clock detects. The iAge top-15 variable Jacobians included CXCL9, EOTAXIN, Mip-1α, LEPTIN, IL-1β, IL-5, IFN-α, and IL-4 as positive contributors; IL-6 and TNF-α were absent from this list. IL-6 better reflects acute or generic inflammatory states rather than the specific age-related chronic inflammation signature captured by iAge.

IL-6 serves as a practical single-cytokine proxy for systemic inflammation generally but is not an optimal biomarker of the age-specific inflammatory program. The iAge framework supports the view that no single cytokine captures all of inflammaging — a multi-analyte panel including CXCL9 will outperform serum IL-6 alone for aging-specific prediction.

## Mechanism: Why IL-6 Rises with Age

Three convergent biological processes drive the age-associated IL-6 rise:

1. **SASP output from senescent cells** — the most mechanistically established driver. Senescent cells constitutively secrete IL-6 (and IL-8, IL-1α, MMP3, etc.) via NF-κB-dependent transcription as a core component of the SASP. As senescent cell burden increases with age, SASP-derived IL-6 accumulates systemically. See [[processes/sasp]] for full mechanism.

2. **NF-κB basal activation** — age-related increases in oxidative stress, mitochondrial dysfunction, and gut dysbiosis activate NF-κB in tissue-resident macrophages and stromal cells, driving constitutive low-level IL-6 secretion. See [[nf-kb]] pathway page.

3. **JAK-STAT3 autocrine amplification** — IL-6 trans-signaling through soluble IL-6Rα can activate JAK1/STAT3 in cells that lack membrane-bound IL-6R, creating a paracrine amplification loop that sustains elevated IL-6 in aging tissues.

The net result is chronic low-grade systemic elevation — "inflammaging" — distinct from acute infection-driven IL-6 spikes (which can reach >100 pg/mL) in both magnitude and kinetics.

Hallmark connections:
- **[[hallmarks/chronic-inflammation]]** — primary hallmark; IL-6 is the canonical readout
- **[[hallmarks/cellular-senescence]]** — via SASP (IL-6 is a core SASP component)
- **[[hallmarks/altered-intercellular-communication]]** — IL-6 trans-signaling disrupts tissue homeostasis across organ systems

## Mendelian Randomization — IL-6 vs IL-6R Distinction

The MR literature distinguishes two instruments:

**IL-6R Asp358Ala (rs2228145):** The most widely used genetic instrument. This coding variant in the IL-6 receptor gene reduces IL-6 receptor signaling (mimicking IL-6R blockade), lowering CRP and fibrinogen while **raising** circulating IL-6 (less IL-6 is consumed by receptor). It serves as a natural genetic mimic of tocilizumab.

The IL6R MR Consortium (Swerdlow et al. 2012, *Lancet*, 40 studies, up to 133,449 individuals; primary CHD analysis: 25,458 cases / 100,740 controls across 34 studies) showed [^swerdlow2012]:
- IL6R rs7529229 (in strong LD with non-synonymous Asp358Ala variant rs8192284/rs2228145) associated with **reduced coronary heart disease risk**: OR 0.95 (95% CI 0.93–0.97), p=1.53×10⁻⁵ per minor allele
- The minor allele increases circulating IL-6 by ~9.5% while reducing CRP and fibrinogen — because reduced receptor signaling means less IL-6 is consumed (i.e., the instrument mimics IL-6R blockade, not IL-6 reduction)
- The effect size and direction were concordant with tocilizumab's observed clinical effects on 9 of 10 biomarkers tested (binomial test p=0.01)
- This provides genetic-causal evidence that the **IL-6 signaling axis** is causal for CHD, not merely correlated

Critically: the Asp358Ala instrument reduces IL-6 **receptor signaling** while circulating IL-6 levels rise. This means the instrument is testing the causal role of IL-6R signaling (downstream), not IL-6 protein levels (upstream). The distinction matters for interpreting the MR result: #gap/needs-replication — what is specific to IL-6 signaling vs. alternative downstream effects of IL-6R variant remains partially unresolved.

**IL-6 levels instruments (cis-pQTLs):** MR studies instrumenting circulating IL-6 protein levels directly are less developed because IL-6 cis-pQTLs are weaker than the IL6R coding variant. This leaves a gap: we have strong MR evidence for the IL-6 signaling axis (via IL-6R instrument), but weaker direct causal evidence for IL-6 protein levels as causal per se. #gap/needs-replication — direct IL-6 level MR in aging outcomes needs larger pQTL instruments.

**Summary:** MR = `yes` for the IL-6 axis broadly (IL-6R instrument → CHD), but the instrument is IL-6R not IL-6 protein itself. The frontmatter `mendelian-randomization: yes` reflects the IL-6R Consortium result; interpret as "IL-6 signaling axis is causally implicated" rather than "IL-6 protein levels are directly causal."

## Reference Ranges by Age (Approximate)

The following is derived from published cohort data. **Values are highly assay-dependent** — these ranges should be used only for within-assay interpretation and not compared across platforms without harmonization.

| Age Range | Approximate Healthy Range (pg/mL) | Notes |
|---|---|---|
| 20–40 | 0.5–2.0 | Fasting, no acute illness |
| 40–60 | 1.0–3.0 | Increasing with adiposity and senescent cell burden |
| 60–70 | 1.5–4.0 | InCHIANTI lowest quartile ~1.0, highest ~3.1+ |
| 70–80 | 2.0–5.0 | Harris 1999 highest quartile cutpoint 3.19 pg/mL |
| 80+ | 3.0–8.0 | Centenarians paradoxically show wide variation |
| Acute inflammation | >10 (often >50–100) | Sepsis can reach >1,000 pg/mL |

These ranges reflect typical **serum** values in community-dwelling populations without acute illness. Plasma values may differ by 10–30% depending on anticoagulant. #gap/dose-response-unclear — no consensus clinical cutpoint for "pathological inflammaging" vs normal aging-related elevation exists.

## Confounders

Serum IL-6 interpretation in aging requires accounting for several confounders that cause transient or chronic elevation unrelated to the aging biology of interest:

| Confounder | Expected Direction | Recovery Time |
|---|---|---|
| Acute infection or illness | Sharply elevated | 1–4 weeks post-recovery |
| Exercise within 48h | Acutely elevated (myokine release); chronically lower with training | 24–72h post-exercise |
| Obesity / adiposity | Chronically elevated | Weeks–months with weight loss |
| Smoking | Chronically elevated | Months post-cessation |
| Diurnal variation | Peaks in early morning | Hours |
| Recent surgery / trauma | Sharply elevated | Days–weeks |
| Chronic periodontal disease | Chronically elevated | Months with treatment |

**Best practice for aging biomarker use:** collect fasting, morning (before noon), at least 2 weeks after any acute illness or major physical stressor. Body-weight-adjust or include BMI as covariate in any longitudinal analysis.

## Intervention Responsiveness

### Exercise (chronic training)

Exercise causes a biphasic IL-6 response: a **large acute spike** during and immediately after exercise (IL-6 released from contracting skeletal muscle as a myokine, serving anti-inflammatory signaling functions), followed by **chronic reduction** in resting IL-6 with regular training [^mathur2008]. The acute IL-6 spike is mechanistically distinct from the chronic low-grade IL-6 of inflammaging: it is rapidly cleared, receptor-mediated, and functionally anti-inflammatory via downstream IL-10 and IL-1Ra induction.

For aging biomarker interpretation: assess IL-6 at least 48h after any vigorous exercise session. Chronic aerobic training reduces resting IL-6 in both clinical populations and healthy aging adults. Meta-analytic evidence in CKD patients shows mean reduction of ~2.24 pg/mL with exercise training (95% CI −3.87, −0.61) [^traise2024], though this is a disease-specific cohort; effect sizes in healthy aging adults are more modest.

### Statins

Statins reduce CRP robustly; their effect on IL-6 is less consistently demonstrated but generally directionally downward. The CANTOS trial tested canakinumab (anti-IL-1β), which reduces IL-6 as a downstream consequence of blocking IL-1β (IL-1β is an upstream inducer of IL-6 transcription).

### Canakinumab (anti-IL-1β, CANTOS trial)

CANTOS enrolled 10,061 patients with prior MI and elevated hsCRP (>2 mg/L); canakinumab 150 mg subcutaneously every 3 months for median 3.7 years significantly reduced cardiovascular events (HR 0.85 for primary endpoint, p=0.021) without affecting lipid levels [^cantos2017]. Canakinumab reduces IL-6 indirectly by blocking IL-1β — since IL-1β is a major inducer of IL-6 transcription via NF-κB, IL-1β blockade suppresses IL-6 as a downstream consequence. See [[interventions/pharmacological/canakinumab]] for full compound page.

### Tocilizumab (anti-IL-6R)

Tocilizumab (humanized anti-IL-6R monoclonal antibody) directly blocks the IL-6 receptor, suppressing downstream STAT3 signaling. It is FDA-approved for rheumatoid arthritis and other inflammatory conditions. Its effect on aging per se has not been tested in clinical trials — it is an aging-context investigational intervention. No dedicated compound page yet; tocilizumab is an implicit stub [[molecules/compounds/tocilizumab]].

### Senolytics

Senolytic drugs that reduce senescent cell burden (dasatinib + quercetin, fisetin) would be expected to reduce SASP-derived IL-6 as a downstream consequence of senescent cell clearance. Evidence in humans remains limited — a small dasatinib + quercetin pilot in idiopathic pulmonary fibrosis showed trends toward SASP marker reduction, but powered IL-6 endpoint data in aging are lacking. #gap/needs-human-replication

See [[interventions/pharmacological/senolytics]] for the senolytic class page.

## Strengths as an Aging Biomarker

1. **Decades of independent cohort replication** — EPESE, Health ABC, InCHIANTI, Framingham, and many others provide convergent evidence across populations, ethnic groups, and continents.
2. **Causal axis support via Mendelian randomization** (IL-6R instrument → CHD) — not purely correlational.
3. **Clinically accessible** — standard immunoassay, most commercial labs, costs ~$30–50 per draw.
4. **Mechanistically anchored** — SASP and NF-κB biology provides a testable mechanistic explanation for the correlation.
5. **Multi-outcome predictive** — mortality, CV events, frailty, sarcopenia, cognitive decline; not disease-specific.

## Limitations and Open Gaps

1. **Assay non-comparability.** No harmonized reference standard exists across clinical IL-6 immunoassay platforms. Absolute values cannot be compared across studies without assay bridging. This is a significant practical limitation for longitudinal personal tracking. #gap/needs-replication

2. **Single-time-point noise.** IL-6 has substantial intra-individual day-to-day variability (CV ~30–50% within-person across days). Single measurements are less stable than DNAm-based clocks. Averaging 2–3 draws from non-acute periods is more reliable.

3. **No validated clinical decision rule for "inflammaging" vs normal aging elevation.** Harris 1999's quartile cutpoints are cohort-specific. No age-adjusted reference range equivalent to the ACC/AHA cardiovascular risk tables exists. #gap/dose-response-unclear

4. **IL-6 vs composite panels.** The iAge work (Sayed 2021) shows that CXCL9 and other cytokines capture aging signal beyond IL-6. A multi-cytokine panel outperforms IL-6 alone. Single-analyte IL-6 is a practical proxy but not the optimal biological representation.

5. **MR instrument limitation.** The dominant MR instrument (IL-6R Asp358Ala) tests IL-6R signaling, not IL-6 protein levels. Direct causal evidence for circulating IL-6 levels per se as causal in aging remains incomplete. #gap/needs-replication

6. **Intervention endpoints underexplored.** With the exception of CANTOS (canakinumab, CV outcomes) and exercise training, no large aging RCT has used serum IL-6 reduction as a primary pre-registered endpoint. This means we lack clear evidence on what IL-6 reduction achieves for aging-specific outcomes independent of disease reduction.

## Cross-references

- [[processes/sasp]] — mechanistic origin: SASP drives IL-6 elevation with senescent cell accumulation
- [[hallmarks/chronic-inflammation]] — primary hallmark context; IL-6 is the canonical readout
- [[hallmarks/cellular-senescence]] — upstream driver via SASP
- [[hallmarks/altered-intercellular-communication]] — IL-6 trans-signaling disrupts tissue cross-talk
- [[nf-kb]] — upstream transcription factor driving IL-6 production
- [[jak-stat-pathway]] — downstream signaling cascade of IL-6/IL-6R
- [[interventions/pharmacological/canakinumab]] — anti-IL-1β; reduces IL-6 indirectly (CANTOS)
- [[interventions/pharmacological/senolytics]] — senolytic class; expected IL-6 reduction via SASP clearance
- [[phenotypes/sarcopenia]] — IL-6 is a key mechanistic mediator (Ferrucci 2002 + InCHIANTI)
- [[molecules/proteins/il-6]] — protein page
- [[molecules/compounds/tocilizumab]] — anti-IL-6R monoclonal antibody

## Footnotes

[^harris1999]: doi:10.1016/s0002-9343(99)00066-2 · Harris TB, Ferrucci L, Tracy RP, Corti MC, Wacholder S et al. · Am J Medicine 1999 · n=1,727 community-dwelling adults age 71+ (EPESE, 4 US sites: East Boston, Iowa, New Haven, North Carolina/Massachusetts) · observational cohort · IL-6 highest vs lowest quartile (≥3.19 pg/mL cutpoint): RR ~2.0 all-cause mortality; IL-6 + CRP both elevated: RR ~2.6 · associations persisted after adjustment for age, smoking, prior CVD · effect applied to both cardiovascular and non-cardiovascular causes of death · model: human elderly · local PDF: not_oa (closed-access; full-text numerics unverified) #gap/no-fulltext-access

[^cesari_habc_circ]: doi:10.1161/01.CIR.0000097109.90783.FC · Cesari M, Penninx BWJH, Newman AB et al. (Health ABC Study) · Circulation 2003 · enrolled n=3,075; analyzed n=2,225 (excluded 816 with baseline CVD; 34 missing data) · age 70–79, mean age 74.0 yr, 44.6% male, 58.7% white · observational cohort, avg follow-up 3.6 yr · IL-6 per SD increase: CHD RR 1.27 (95% CI 1.10–1.48); stroke RR 1.45 (95% CI 1.12–1.86); CHF RR 1.72 (95% CI 1.40–2.12) · IL-6 most consistent predictor across all 3 CV outcomes, outperforming CRP and TNF-α · model: human elderly, Black and White adults · local PDF:  (local PDF)

[^cesari2004_perf]: doi:10.1093/gerona/59.3.m242 · Cesari M, Penninx BWJH, Pahor M, Lauretani F, Corsi AM, Williams GR, Guralnik JM, Ferrucci L (InCHIANTI Study) · J Gerontol Biol Sci 2004 · n=1,020 Italian adults age 65+ · observational cohort · SPPB score: 2.25 (lowest IL-6 quartile) vs 2.08 (highest), p<0.001; grip strength: 27.4 vs 25.1 kg, p=0.001 · model: human elderly (community-dwelling Italian) · local PDF: download-failed; not_oa confirmed via Europe PMC (PMID: 15031308, isOpenAccess: N); SPPB and grip-strength numerics unverified against full text #gap/no-fulltext-access

[^ferrucci2002]: doi:10.1046/j.1532-5415.2002.50605.x · Ferrucci L, Penninx BWJH, Volpato S, Harris TB et al. (Women's Health and Aging Study) · J Am Geriatr Soc 2002 · n=620 older women · observational cohort · IL-6 >3.10 pg/mL associated with steeper muscle strength decline; muscle strength change mediated IL-6 → disability relationship · model: human elderly women · cited_by: 613 · local PDF: pending

[^swerdlow2012]: doi:10.1016/S0140-6736(12)60110-X · IL6R Mendelian Randomisation Analysis (IL6R MR) Consortium (Swerdlow DI et al.) · Lancet 2012 · 40 studies, up to 133,449 individuals total; primary CHD analysis: 34 studies, 25,458 cases / 100,740 controls · mendelian-randomization · lead SNP: IL6R rs7529229 (in strong LD r²=0.92 with non-synonymous Asp358Ala variant rs8192284/rs2228145) · rs7529229 per-allele OR for all CHD (fatal + non-fatal) = 0.95 (95% CI 0.93–0.97), p=1.53×10⁻⁵ · minor allele associated with increased circulating IL-6 (+9.45%, 95% CI 8.34–10.57) and decreased CRP (−8.35%) and fibrinogen (−0.85%) — consistent with reduced IL-6R signaling (IL-6 accumulates when less is consumed by receptor) · genetic effects directionally concordant with tocilizumab RCT effects on all 9 of 10 biomarkers tested · model: human (multi-ethnic, multi-country) · local PDF:  (local PDF))60110-x.pdf

[^sayed2021]: doi:10.1038/s43587-021-00082-y · Sayed N, Huang Y, Nguyen K, et al. (Stanford/Buck Institute) · Nature Aging 2021 · n=1,001 individuals ages 8–96 (339 male, 662 female; Stanford 1KIP cohort) · observational + experimental validation · iAge deep-learning clock (guided auto-encoder) trained on exactly 50 circulating immune markers (cytokines, chemokines, growth factors) · CXCL9 strongest contributor to iAge; top-15 Jacobians also include EOTAXIN, Mip-1α, LEPTIN, IL-1β, IL-5, IFN-α, IL-4 (positive) and TRAIL, IFN-γ, CXCL1, IL-2, TGF-α, PAI-1, LIF (negative) · paper explicitly states: IL-6 and TNF-α were NOT major contributors to iAge ("canonical markers of acute infection such as IL-6 and TNF-α were not major contributors to iAge") · experimental: CXCL9 silencing reverses endothelial senescence in hiPSC-ECs · centenarians showed low iAge index · iAge validated against Framingham Heart Study mortality (Cox model, n=2,290, P=0.02) · model: human + in-vitro validation · local PDF:  (local PDF)

[^cantos2017]: doi:10.1056/NEJMoa1707914 · Ridker PM et al. (CANTOS trial) · N Engl J Med 2017 · n=10,061 prior-MI patients with hsCRP ≥2 mg/L · rct, double-blind, placebo-controlled · 3 doses canakinumab (50, 150, 300 mg) SC q3mo vs placebo · median follow-up 3.7 yr · primary endpoint (nonfatal MI, nonfatal stroke, CV death): canakinumab 150 mg HR 0.85 (95% CI 0.74–0.98), P=0.021 (threshold P=0.02115) · 300 mg HR 0.86 (95% CI 0.75–0.99), P=0.031; 50 mg NS · key secondary endpoint (150 mg): HR 0.83 (95% CI 0.73–0.95), P=0.005 · no significant change in LDL, HDL, or total cholesterol · 4–5% increase in triglycerides · increased fatal infection risk vs placebo · IL-6 measurably reduced at 3 and 12 months as downstream consequence of IL-1β blockade (similar effects observed for hsCRP: −37% at 48 mo for 150 mg group) · model: human (prior MI, elevated hsCRP; not aging-specific) · local PDF:  (local PDF)

[^mathur2008]: doi:10.1155/2008/109502 · Mathur N, Pedersen BK · Mediators of Inflammation 2008 · review · exercise IL-6 as myokine: acute spike from contracting muscle (anti-inflammatory in function via IL-10/IL-1Ra induction); chronic training reduces resting IL-6 · cited_by: 497 · local PDF: pending

[^traise2024]: doi:10.1007/s40620-024-02081-9 · Traise A, Dieberg G, Pearson MJ, Smart NA · J Nephrology 2024 · systematic review + meta-analysis · exercise training in pre-dialysis CKD: IL-6 MD −2.24 pg/mL (95% CI −3.87, −0.61; p=0.007) · model: human (CKD, not aging-specific; generalizability to healthy elderly partial) · local PDF: not checked
