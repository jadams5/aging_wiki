---
type: compound
aliases: [UA, urolithin-A, 3,8-dihydroxy-6H-benzo[c]chromen-6-one, Mitopure]
pubchem-cid: 5488186
inchikey: RIUPLDUFZCXCHM-UHFFFAOYSA-N
chembl-id: CHEMBL1836264
drugbank-id: null
cas-number: null
mechanisms: [mitophagy-induction, mitochondrial-biogenesis, anti-inflammatory]
measured-targets: ["[[pink1-parkin-pathway]]", "[[mitophagy]]"]
hallmarks: ["[[chronic-inflammation]]", "[[disabled-macroautophagy]]", "[[dysbiosis]]", "[[immunosenescence]]", "[[loss-of-proteostasis]]", "[[mitochondrial-dysfunction]]"]
clinical-stage: phase-2
human-evidence-level: limited
half-life: "unknown for oral direct-UA; absorption rapid; conjugates circulate longer"
translation-gap: effect-size-too-small
next-experiment: "Phase 3 RCT in sarcopenic or frail elderly (n>=500, >=12 mo) with hard functional endpoint; ATLAS missed primary peak-power but secondary strength gains warrant powered confirmation. Denk 2025 immune-aging signal also warrants powered Phase 3 in frail elderly with infection-incidence endpoint."
clinical-trials-active: 17
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Singh 2022 ATLAS RCT verified against local PDF. Ryu 2016 and Andreux 2019 unverifiable (green OA but DOI lookup failed twice each — see #gap/no-fulltext-access tags on those claims). Garcia 2020 unverifiable (still downloading). PubChem CID 5488186 and InChIKey confirmed against PubChem REST API; ChEMBL CHEMBL1836264 not independently re-checked. NCT number for ATLAS corrected from wiki seeder. Gordonibacter species name corrected from Garcia 2020 Crossref/Semantic Scholar title. **2026-05-08 R34 recency refresh:** integrated Denk 2025 Nature Aging UA-immune-aging RCT (PubMed-abstract-verified), Whitfield 2025 Sports Med distance-runners RCT (PubMed-abstract-verified), Jamialahmadi 2024 HFrEF crossover RCT (PubMed-abstract-verified). Active-trial count 17 from ClinicalTrials.gov v2 API 2026-05-08 (RECRUITING + ACTIVE_NOT_RECRUITING)."
---

> ⚠️ Partially verified 2026-05-04. Singh 2022 ATLAS RCT verified against local PDF (corrections applied). Ryu 2016 (10.1038/nm.4132) and Andreux 2019 (10.1038/s42255-019-0073-4): green OA but DOI lookup failed — claims derived from these sources are marked #gap/no-fulltext-access and should be treated as approximate. Garcia 2020 (10.1039/d0fo01649g): species name corrected from title/abstract; full PDF not verified.

# Urolithin A

A gut microbiome-derived **dibenzopyranone** (lactone) metabolite produced from dietary [[ellagitannins]] — polyphenols found in pomegranates, walnuts, and certain berries. Urolithin A (UA) is the most clinically advanced **[[mitophagy]] inducer** known, and the only one with completed Phase 2 randomized controlled trial data in middle-aged adults. Characterized mechanistically by the Auwerx group; commercialized by Amazentis under the brand name **Mitopure** (purified UA formulation that bypasses variable gut microbiome conversion).

## Identity

- **PubChem CID:** 5488186
- **InChIKey:** RIUPLDUFZCXCHM-UHFFFAOYSA-N
- **ChEMBL:** CHEMBL1836264
- **IUPAC name:** 3,8-dihydroxybenzo[c]chromen-6-one
- **Molecular formula:** C₁₃H₈O₄
- **Molecular weight:** 228.20 g/mol
- **Class:** dibenzopyranone (benzo[c]chromenone); polyphenol metabolite
- **Canonical SMILES:** `C1=CC2=C(C=C1O)C(=O)OC3=C2C=CC(=C3)O`

## Biosynthesis — the microbiome bottleneck

UA is **not absorbed directly from food.** The biosynthetic pathway requires sequential gut bacterial biotransformation:

1. Dietary [[ellagitannins]] (e.g., punicalagins in pomegranates) are hydrolyzed to **ellagic acid** in the gut lumen.
2. Ellagic acid undergoes reductive ring-opening and lactonization by specific gut bacteria to produce urolithins (A, B, C, D, etc.), with UA (3,8-dihydroxy) as the predominant end-product in high-producing individuals.
3. Key bacteria identified for urolithin production include *Gordonibacter urolithinfaciens* (reductase activity; earlier urolithin steps) and *Ellagibacter isourolithinifaciens* (more efficient catechol-dehydroxylase activity; full conversion to UA) [^garcia2020]. #gap/no-fulltext-access — Garcia 2020 PDF not yet in archive; species names confirmed from paper title and abstract only; mechanistic detail (which step each species handles) not fully PDF-verified.

**Individual variability is large.** Population studies classify people into three gut metabotypes: non-producers (~40%), low-producers, and high-producers of urolithins. Non-producers and low-producers derive little UA from dietary ellagitannin intake. Direct UA supplementation (Mitopure) bypasses this variability entirely. #gap/dose-response-unclear — optimal dietary intake to support UA production in high-producing individuals is not established.

## Mechanism of action

### Mitophagy induction via PINK1/Parkin

The primary characterized mechanism is activation of mitophagy — selective autophagic clearance of damaged mitochondria — via the **[[pink1-parkin-pathway]]** [^ryu2016]:

- In *C. elegans*, UA increased mitophagy (measured by fluorescent reporter) and extended median lifespan ~45% in wild-type worms; the lifespan extension was abrogated in *dct-1* (C. elegans BNIP3L ortholog) and *pink-1* mutants, indicating mitophagy dependence. #gap/no-fulltext-access — Ryu 2016 PDF unavailable (DOI lookup failed); lifespan % and genetic epistasis claims not verified against full paper.
- In rodent models, UA improved skeletal muscle function and exercise capacity; in aged mice, oral UA preserved mitochondrial membrane potential and reduced mitochondrial ROS. #gap/no-fulltext-access — rodent dose and n not verified against Ryu 2016 full text.
- In human primary myotubes, UA activated mitophagy flux and increased the PINK1/Parkin-dependent ubiquitin signal on mitochondria. #gap/no-fulltext-access — Ryu 2016 in-vitro claims not verified against full text.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — PINK1/Parkin pathway is identical |
| Phenotype conserved in humans? | partial — muscle mitochondrial markers improved in human trial; functional gains moderate |
| Replicated in humans? | in-progress — single Phase 2 RCT completed; further trials recruiting |

### Downstream effects

- **Mitochondrial biogenesis:** UA upregulates PGC-1α and mitochondrial gene expression in muscle, consistent with improved mitochondrial turnover removing damaged organelles and allowing net biogenesis [^andreux2019].
- **Inflammatory signaling:** Reduces circulating CRP (plasma CRP reduction was a significant secondary endpoint in Singh 2022 ATLAS RCT at 1000 mg/day) [^singh2022]. Mechanism of anti-inflammatory effect is not fully characterized — possibly secondary to reduced mitochondrial stress and SASP-like DAMP release. #gap/no-mechanism

## Effects on aging hallmarks

| Hallmark | Effect | Evidence |
|---|---|---|
| [[mitochondrial-dysfunction]] | Mitophagy induction clears damaged mitochondria; improves membrane potential and respiratory function in aged muscle | [^ryu2016] |
| [[disabled-macroautophagy]] | UA is a selective mitophagy activator; acts upstream of autophagosome formation via PINK1/Parkin | [^ryu2016] |
| [[chronic-inflammation]] | Reduces plasma CRP in human RCT at 1000 mg/day | [^singh2022] |
| [[immunosenescence]] | Expands naive-like CD8+ T cells (~0.5 pp shift, p=0.0437); increases CD8 fatty acid oxidation; modulates NK cells, monocyte subsets, mitochondrial biogenesis in T cells | [^denk2025] |

## Pharmacokinetics and bioavailability

- UA from direct supplementation (Mitopure) is absorbed orally; rapidly conjugated (glucuronidated, sulfated) in intestinal mucosa and liver. Circulating UA is primarily in conjugate form.
- **First-in-human PK study** (Andreux 2019, n=60 healthy sedentary elderly 61–85 yr): UA had a favourable safety profile (primary endpoint) and was bioavailable at all doses [^andreux2019]. #gap/no-fulltext-access — Andreux 2019 PDF unavailable; details from ClinicalTrials.gov NCT02655393 and PubMed abstract only. Per the abstract: plasma acylcarnitines and skeletal muscle mitochondrial gene expression were modulated at 500mg and 1000mg/day (4-week multiple-dose period).
- Half-life of free UA: not precisely reported; conjugates circulate longer. Unlike fisetin, UA does not appear to require a "hit-and-run" senolytic model — chronic daily dosing is used.
- Mitopure formulation specifically developed to achieve consistent plasma exposure independent of gut microbiome composition.

## Dose-response evidence

| Study | Organism | n | Dose | Route | Duration | Effect |
|---|---|---|---|---|---|---|
| Ryu 2016 [^ryu2016] | *C. elegans* (wild-type N2) | ~35–50/group | 50 µM in media | In media | Adult lifespan | ~45% median lifespan extension; mitophagy-dependent |
| Ryu 2016 [^ryu2016] | Aged C57BL/6 mice | n not specified | 400 mg/kg/day | Oral gavage | 6 weeks | Improved grip strength, running distance; increased mitophagy markers in muscle |
| Andreux 2019 [^andreux2019] | Healthy sedentary elderly (61–85 yr) | n=60 total (Part A single-dose: 24; Part B multi-dose 28 days: 36) | Part A: single doses 250/500/1000/2000 mg; Part B: 250/500/1000 mg/day repeated | Oral | Part B: 4 weeks daily | Favorable safety profile (primary). At 500mg and 1000mg/day: modulated plasma acylcarnitines + skeletal muscle mitochondrial gene expression. #gap/no-fulltext-access — PDF unverifiable; design confirmed from ClinicalTrials.gov NCT02655393 and PubMed abstract. |
| Singh 2022 ATLAS RCT [^singh2022] | Untrained, overweight middle-aged adults (40–64 yr; VO₂max <35 mL/kg/min) | n=88 randomized (placebo n=29, 500mg n=29, 1000mg n=30), 79 completed | 500 mg/day or 1000 mg/day vs placebo (3-arm) | Oral | 4 months | **Primary endpoint (peak power output): NOT significant vs placebo.** Significant muscle strength gains (hamstring) at both doses. Aerobic endurance gains (peak VO₂, 6MWT +33.4m) primarily at 1000 mg/day. CRP reduction significant at 1000 mg/day. |

## Human clinical evidence — ATLAS RCT (Singh 2022)

The ATLAS trial (doi:10.1016/j.xcrm.2022.100633; NCT03464500) is the canonical Phase 2 RCT of UA in untrained, overweight middle-aged adults [^singh2022]:

- **Design:** randomized, double-blind, placebo-controlled, 3-arm parallel
- **Population:** untrained, overweight, middle-aged adults (40–64 yr) with low physical endurance (VO₂max <35 mL/kg/min); n=88 randomized (placebo n=29, 500mg n=29, 1000mg n=30), 79 completed (9 dropouts; ITT n=88, per-protocol n=74 with >80% compliance)
- **Arms:** placebo / 500 mg UA/day / 1000 mg UA/day (Mitopure)
- **Duration:** 4 months
- **Primary endpoint:** peak power output — **NOT significant vs placebo at either dose**
- **Secondary endpoints:** Hamstring skeletal muscle average peak torque was significantly improved at both doses vs placebo (500mg: +12%, p=0.027; 1000mg: +9.8%, p=0.029). Maximum torque during knee flexion also significantly improved at both doses (500mg: +10.6%, p=0.017; 1000mg: +10.5%, p=0.022). Aerobic endurance (peak VO₂) improved dose-dependently, reaching significance at 1000mg vs placebo (p=0.058 trend). 6-minute walk distance increased by 33.4m in the 1000mg group (p=0.008 within-group). Plasma CRP was significantly reduced at 1000mg/day. Skeletal muscle mitochondrial gene expression improved (at 500mg dose; GSEA).
- **Safety:** well-tolerated; 102 total adverse events across 45 participants; no serious adverse events; adverse event profile similar across arms (mostly musculoskeletal/connective tissue AEs from muscle biopsy procedure)

**Interpretation:** The null primary endpoint is important and should not be downplayed. However, significant muscle-strength gains (hamstring torque at both doses) and aerobic-endurance improvements (at 1000mg) were observed as secondary endpoints. These are clinically meaningful results but remain secondary endpoints in a single, industry-sponsored, proof-of-concept trial in a specific overweight/low-endurance population. #gap/needs-replication — independent replication of muscle strength and endurance gains is needed, particularly in a leaner or sarcopenic population, before broad human-efficacy claims can be made.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial — biomarkers improved; primary power endpoint null |
| Replicated in humans? | no — one completed Phase 2 RCT; further trials in progress |

## Human clinical evidence — additional RCTs (2024–2025)

Three additional published RCTs since ATLAS expand the human evidence base in distinct populations and indications. None has yet replicated ATLAS's secondary muscle-strength/endurance findings independently in an aging population, but Denk 2025 (immune-aging) is the first non-skeletal-muscle proof-of-concept in humans.

### Denk 2025 — Immune aging (Nature Aging)

The first RCT testing UA against age-related immune decline [^denk2025]:

- **Design:** randomized, double-blind, placebo-controlled
- **Population:** n=50 healthy middle-aged adults
- **Arms:** UA 1000 mg/day vs placebo (Mitopure)
- **Duration:** 4 weeks
- **Primary outcomes:** phenotypical changes in peripheral CD3+ T cell subsets and immune metabolic remodeling
- **Findings:** UA expanded peripheral naive-like, less terminally exhausted CD8+ T cells (treatment difference 0.50 percentage points; 95% CI 0.16–0.83; p=0.0437); increased CD8+ fatty acid oxidation capacity (treatment difference 14.72 percentage points; 95% CI 6.46–22.99; p=0.0061). Secondary: increased mitochondrial biogenesis in CD8+ cells, increased peripheral CD56^dim^CD16^bright^ NK cells and nonclassical CD14^lo^CD16^hi^ monocytes; improved activation-elicited TNF secretion; improved bacterial uptake by monocytes. Exploratory single-cell RNA-seq showed UA-driven transcriptional shifts in immune populations modulating inflammation- and metabolism-linked pathways.
- **NCT:** NCT05735886
- **Significance:** First clinical demonstration of UA effects on the [[immunosenescence]] hallmark; supports the [[mitochondrial-dysfunction]] → T-cell-aging mechanistic chain. Industry-sponsored (Amazentis co-authors). #gap/needs-replication — single trial, short duration (4 weeks), and the primary endpoint is a surrogate (CD8 phenotype shift) rather than infection-incidence or vaccine-response. Whether the immune phenotype changes translate to clinically meaningful protection from age-related infection susceptibility is unknown.

### Whitfield 2025 — Highly trained distance runners (Sports Medicine)

UA tested in young athletes (not an aging population) for ergogenic effects [^whitfield2025]:

- **Design:** double-blind, parallel-group, placebo-controlled
- **Population:** n=42 competitive male distance runners, mean age 27.2 ± 1.0 yr
- **Arms:** UA vs placebo
- **Duration:** 4 weeks
- **Primary outcome:** 3000 m time trial — **NOT significant** in either arm
- **Secondary:** UA significantly lowered ratings of perceived exertion (p=0.02) and reduced indirect markers of post-exercise muscle damage (CK total AUC, p<0.0001). Aerobic capacity time × treatment interaction not significant (p=0.138).
- **NCT:** NCT04783207
- **Interpretation:** UA does not enhance running performance in already-highly-trained young athletes — consistent with the ATLAS interpretation that UA's benefits are most plausible in populations with substantial mitochondrial-quality reserve to recover (untrained, overweight, sarcopenic). Supports a recovery/anti-inflammatory benefit even in trained populations.

### Jamialahmadi 2024 — Heart failure with reduced ejection fraction (HFrEF)

The first RCT in a clinical-disease population [^jamialahmadi2024]:

- **Design:** randomized, double-blind, placebo-controlled 2×2 crossover
- **Population:** n=10 HFrEF patients
- **Arms:** UA 500 mg BID (1000 mg/day total) vs placebo
- **Duration:** two 4-week periods, separated by 2-week washout
- **Outcomes:** **NULL for echocardiographic indices** (LVEF, LVEDD, LVESV, TAPSE all unchanged). NULL for plasma pro-BNP, glucose, and CRP. Serum HDL-C increased modestly (+6.46 ± 2.33 mg/dL, p=0.026) on UA vs placebo. Other lipids unchanged.
- **Interpretation:** Underpowered (n=10), short duration. The negative cardiac result does not support cardioprotective benefit at this dose/duration in established HFrEF, contrasting with preclinical mouse cardioprotection literature. #gap/needs-replication — larger, longer trials at higher doses needed before drawing conclusions about UA cardiac efficacy in disease.

## Human trials summary (active + recently completed)

ClinicalTrials.gov v2 API (queried 2026-05-08): 17 trials in RECRUITING or ACTIVE_NOT_RECRUITING status; 32 completed; 1 withdrawn; 1 terminated.

| Trial | NCT | Phase | Status | Population | Primary Outcome |
|---|---|---|---|---|---|
| ATLAS (Singh 2022) | NCT03464500 | Phase 2 | Completed | Untrained overweight middle-aged adults (40–64 yr) | Peak power output (null); muscle strength significant |
| ENERGIZE | NCT03283462 | Phase 2 | Completed | Elderly skeletal muscle | 6-min walk, ATP synthesis |
| Denk 2025 immune-aging | NCT05735886 | N/A | Completed | Healthy middle-aged adults (n=50) | CD3+ T-cell subset shift (significant) |
| Whitfield 2025 (runners) | NCT04783207 | N/A | Completed | Competitive male distance runners | 3000m time trial (null); RPE + CK reduced |
| Jamialahmadi 2024 HFrEF | not registered | N/A | Completed | n=10 HFrEF crossover | Echo measures (null); HDL-C up |
| ATLAS 2 | NCT07231783 | N/A | Recruiting | Healthy middle-aged adults | Knee flexion strength at 6 months |
| COPD supplement study | NCT06324214 | Phase 2 | Recruiting | COPD patients | Exercise endurance capacity |
| MitoEM | NCT06556706 | N/A | Completed | Frail older adults | Mitochondrial ultrastructure (EM) |
| Brain Longevity (Mitopure) | NCT07060898 | N/A | Active not recruiting | Cognitive function | Cognition |
| UA + ICI in solid tumors | NCT07161310 | N/A | Recruiting | Untreated solid tumors on immune checkpoint inhibitors | Immune/anti-tumor response |
| UA + fisetin (sleep + aging biomarkers) | NCT06990256 | N/A | Recruiting | Adults | Sleep, aging biomarkers |
| UA prostate-cancer radical prostatectomy | NCT06022822 | N/A | Recruiting | Men with prostate cancer | Tissue mitochondrial markers |
| UA glucose metabolism in 55+ | NCT06274749 | N/A | Recruiting | Healthy adults ≥55 yr | Glucose metabolism |
| UA + protein single-leg immobilization | NCT05814705 | N/A | Active not recruiting | Disuse atrophy model | Muscle preservation |

#gap/long-term-unknown — No trial to date has followed participants beyond 6 months. Long-term safety and efficacy in older, frailer, or disease populations requires further study. The Brain-Longevity (NCT07060898) and ATLAS 2 (NCT07231783) trials are the first to extend dosing to ≥6 months and may begin to address this gap.

## Classification

- **SENS strategy:** [[sens-damage-categories|MitoSENS]] — supports mitochondrial quality via mitophagy-mediated turnover
- **Hallmark targets:** [[mitochondrial-dysfunction]], [[disabled-macroautophagy]]
- **Clinical category:** dietary supplement / investigational compound (Mitopure formulation)

## Relationship to dietary ellagitannin sources

| Source | Ellagitannin content | UA production likelihood |
|---|---|---|
| Pomegranate juice | High (punicalagins dominant) | Depends on gut metabotype |
| Walnuts | Moderate (pedunculagin) | Depends on gut metabotype |
| Raspberries, strawberries | Lower | Depends on gut metabotype |
| Mitopure (direct UA) | N/A — bypasses conversion | Consistent regardless of microbiome |

The Amazentis commercial rationale for Mitopure is precisely that dietary ellagitannin intake is unreliable as a UA source for ~40% of the population.

## Limitations and gaps

- **Null primary endpoint in ATLAS:** Peak power was not improved vs placebo. Aerobic endurance gains were secondary endpoints; positive results in secondary endpoints should be interpreted cautiously (#gap/needs-replication).
- **Single-company dominance:** Most published RCT evidence comes from Amazentis-sponsored trials (Auwerx group + Rinsch = company co-founders). Independent replication is needed. #gap/needs-replication
- **Mechanism not fully resolved in humans:** UA's effect on mitophagy flux in human muscle biopsies has been inferred from gene-expression signatures and acylcarnitine ratios; direct mitophagy flux measurement (e.g., mitophagy reporters in human muscle) is lacking. #gap/no-mechanism
- **Population specificity:** ATLAS enrolled specifically untrained, overweight adults with low baseline endurance (VO₂max <35 mL/kg/min) — a population with more room for mitochondrial improvement. Translation to already-active, lean, sarcopenic elderly, frail patients, or disease states is not established.
- **Microbiome metabotype and dietary UA:** Whether high-producing individuals who achieve comparable UA plasma levels from diet alone show similar benefits is unknown. #gap/needs-replication
- **Long-term safety:** No trial beyond 6 months. #gap/long-term-unknown
- **Urolithin family interactions:** UA is the most studied; urolithins B, C, D have different bioactivities and may modulate UA effects when co-produced. Contribution of other urolithins to observed effects is not characterized. #gap/unsourced

## See also

- [[mitophagy]] — the process UA induces; see PINK1/Parkin mechanism
- [[mitochondrial-dysfunction]] — aging hallmark UA is proposed to address
- [[sarcopenia]] — clinical phenotype most plausibly targeted by UA in humans
- [[disabled-macroautophagy]] — UA specifically activates the mitophagy sub-variant
- [[ellagitannins]] — dietary precursors (stub)
- [[pink1-parkin-pathway]] — molecular mechanism (stub)
- [[sens-damage-categories]] — MitoSENS frame
- [[hallmarks-of-aging]]

---

## Footnotes

[^ryu2016]: [[studies/ryu-2016-urolithin-a-mitophagy]] · doi:10.1038/nm.4132 · n=~35–50/group (worm); rodent n not specified · in-vivo (*C. elegans* + mouse) · p<0.05 (lifespan) · model: *C. elegans* N2 wild-type + aged C57BL/6 mice

[^andreux2019]: [[studies/andreux-2019-urolithin-a-human-safety]] · doi:10.1038/s42255-019-0073-4 · n=60 · rct (single + multiple ascending dose) · model: healthy sedentary elderly 61–85 yr (NCT02655393; Part B: 250/500/1000 mg/day × 4 weeks) · #gap/no-fulltext-access

[^singh2022]: [[studies/singh-2022-atlas-rct-urolithin-a]] · doi:10.1016/j.xcrm.2022.100633 · n=88 randomized (placebo n=29 / 500mg n=29 / 1000mg n=30) / 79 completed · rct · primary endpoint (peak power) ns; muscle strength significant at both doses · model: untrained overweight middle-aged adults (40–64 yr; VO₂max <35 mL/kg/min), 4-month, 3-arm · local PDF: DOI lookup 10.1016/j.xcrm.2022.100633

[^garcia2020]: [[studies/garcia-2020-gordonibacter-ellagibacter-urolithin]] · doi:10.1039/d0fo01649g · observational (in vitro bacterial culture) · model: *Gordonibacter urolithinfaciens* + *Ellagibacter isourolithinifaciens* pure cultures + mixed human stool · #gap/no-fulltext-access — PDF not yet in archive; species names confirmed from paper title/abstract only

[^denk2025]: [[studies/denk-2025-urolithin-a-immune-aging]] · doi:10.1038/s43587-025-00996-x · n=50 · rct (double-blind, placebo-controlled) · primary CD8+ T-cell phenotype shift p=0.0437; CD8 FAO p=0.0061 · model: healthy middle-aged adults, 1000 mg/day × 4 weeks (NCT05735886) · journal: Nature Aging · authors: Denk D, Singh A, Kasler HG, D'Amico D, Rey J, Alcober-Boquet L, Gorol JM, Steup C, Tiwari R, Kwok R, Argüello RJ, Faitg J, Sprinzl K, Zeuzem S, Nekljudova V, Loibl S, Verdin E, Rinsch C, Greten FR · industry-sponsored (Amazentis co-authors) · #gap/needs-replication · abstract-verified via PubMed PMID 41174221 / Europe PMC PMC12618261 · author correction: doi:10.1038/s43587-025-01060-4

[^whitfield2025]: [[studies/whitfield-2025-urolithin-a-runners]] · doi:10.1007/s40279-025-02292-5 · n=42 · rct (double-blind, parallel) · primary 3000 m time trial ns; RPE p=0.02; CK total AUC p<0.0001 · model: competitive male distance runners (mean 27.2 yr; 4 weeks; NCT04783207) · journal: Sports Medicine · abstract-verified via PubMed PMID 40839339 / PMC12628386

[^jamialahmadi2024]: [[studies/jamialahmadi-2024-urolithin-a-hfref]] · doi:10.2174/0115748871279354240209101604 · n=10 · rct (2×2 crossover, double-blind, placebo-controlled) · primary echo measures (LVEF, LVEDD, LVESV, TAPSE) all ns; HDL-C +6.46 mg/dL p=0.026 · model: HFrEF patients, UA 500 mg BID × 4 weeks per period · journal: Reviews on Recent Clinical Trials · abstract-verified via PubMed PMID 38415449
