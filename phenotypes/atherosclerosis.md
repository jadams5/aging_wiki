---
type: phenotype
aliases: [atherosclerotic vascular disease, atheroma, atherosclerotic cardiovascular disease, ASCVD]
icd-10: I70
icd-11: BD40
affected-tissues:
  - "[[arterial-wall]]"
underlying-hallmarks:
  - "[[chronic-inflammation]]"
  - "[[cellular-senescence]]"
  - "[[altered-intercellular-communication]]"
  - "[[mitochondrial-dysfunction]]"
typical-onset: "Fatty streaks detectable in adolescence; angiographic disease prevalent by 40s–50s; clinical events (MI, stroke) peak 60+"
prevalence-65plus: "~70% age 65+ have angiographic coronary atherosclerosis; clinically significant stenosis lower (~30–40%) — source not confirmed against verified PDFs; #gap/unsourced"
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Libby 2002 (10.1038/nature01323) verified end-to-end against local PDF — pathophysiology cascade, foam cell mechanisms, MMP types, VSMC/fibrous cap biology all confirmed; TCFA <65 µm threshold not found in source, flagged #gap/unsourced. Ridker 2017 CANTOS (10.1056/NEJMoa1707914) verified end-to-end against local PDF — HR 0.85 (95% CI 0.74–0.98, p=0.021) at 150 mg confirmed; fatal infection/sepsis 0.31 vs 0.18/100py p=0.02 confirmed; no LDL-C change confirmed. Ross 1999 (not_oa), Hansson 2005 (not_oa), Childs 2016 (not_oa) — cannot verify, tagged #gap/no-fulltext-access. Sabatine 2017 FOURIER — download pending at verification time, numerics unverified, tagged #gap/needs-replication. Prevalence-65plus frontmatter value not traceable to any available source, tagged #gap/unsourced."
---

> ⚠️ Partially verified 2026-05-04. Libby 2002 and Ridker 2017 CANTOS verified against local PDFs. Ross 1999, Hansson 2005, Childs 2016 are not_oa (#gap/no-fulltext-access). Sabatine 2017 FOURIER download pending — FOURIER-derived claims unverified. See verified-scope in frontmatter.

# Atherosclerosis

Atherosclerosis is a chronic inflammatory disease of large and medium arteries characterized by the progressive accumulation of cholesterol-laden plaques (atheromas) within the arterial intima. The disease is the leading cause of cardiovascular mortality globally. Clinically it manifests as coronary artery disease (MI, angina), stroke, and peripheral arterial disease when plaques narrow the vessel lumen or rupture, triggering acute thrombosis. The pace of disease is determined by both lifetime [[apob|ApoB]]-particle burden (LDL, IDL, VLDL remnants, Lp(a)) and the inflammatory milieu of the arterial wall — a milieu increasingly understood as driven by aging hallmarks, particularly [[chronic-inflammation]] and [[cellular-senescence]] [^ross1999][^libby2002].

**Mechanistic chain anchored in this wiki:** dietary fat composition ([[palmitic-acid]] ↑ vs. PUFA ↑; see [[mediterranean-diet]] for RCT-validated pattern) → hepatic [[srebp-2|SREBP-2]] sensing → [[ldlr|LDL receptor]] surface density → plasma [[apob|ApoB]]-particle clearance → arterial-wall lipid loading → atherogenesis. [[pcsk9|PCSK9]] degrades LDLR post-translationally and is itself a SREBP-2 target. [[hmgcr|HMG-CoA reductase]] is the rate-limiting cholesterol-biosynthesis enzyme and target of [[interventions/pharmacological/statins|statins]]; the integrated pathway view is in [[lipoprotein-metabolism]]. Parallel atherogenic particles: [[lpa|Lp(a)]] is the genetically-determined high-per-particle-atherogenicity rogue (~6.6× LDL); [[apoe|ApoE]] mediates chylomicron-remnant clearance and the ε4 allele is the dominant CV+AD genetic risk modifier; [[lpl|LPL]] is the capillary-endothelial TG-hydrolyzing enzyme upstream of remnant formation. The clinical-Mendelian endpoint of this chain is [[familial-hypercholesterolemia]].

**Subclinical onset — disease decades before symptoms.** Multi-territory imaging of asymptomatic middle-aged adults in the [[studies/ibanez-2021-pesa-subclinical-atherosclerosis|PESA cohort]] (n=4,184) shows atherosclerosis is already widespread long before clinical events: subclinical plaque or coronary calcification was present in **49.7% of participants who were free of all conventional cardiovascular risk factors** (mean age 45), and **LDL-C — even at levels currently considered "normal" — was independently associated with plaque presence and extent** (OR 1.14–1.18 per 10 mg/dL) [^pesa2021]. This is the imaging counterpart to the genetic [[studies/ference-2012-ldl-mr-lifetime|lifetime-LDL evidence]] and the empirical case for *primordial* prevention — lowering ApoB-particle exposure early, not only after risk factors or events appear.

## Pathophysiology cascade

### 1. Endothelial dysfunction — initiation

The disease begins with injury to the arterial endothelium driven by oxidized LDL (oxLDL), turbulent or oscillatory hemodynamic flow (particularly at bifurcations), hypertension, and advanced glycation end-products [^ross1999]. Dysfunctional endothelium:

- Reduces nitric oxide (NO) production → impaired vasodilation
- Upregulates adhesion molecules ICAM-1, VCAM-1, and E-selectin
- Secretes MCP-1 (CCL2) → recruits circulating monocytes to the intimal space

These changes convert a non-adhesive endothelial surface into a monocyte trap, particularly at sites of disturbed flow (coronary bifurcations, aortic arch, carotid sinus).

### 2. Foam cell formation — fatty streak

Recruited monocytes differentiate into intimal macrophages that take up oxLDL via scavenger receptors SR-A (MSR1) and CD36. Cholesterol-loaded macrophages become **foam cells** — the pathological unit of the early fatty streak. Foam cells accumulate in the intima and secrete pro-inflammatory cytokines (IL-1β, IL-6, TNF-α), perpetuating monocyte recruitment in a feed-forward loop [^libby2002].

### 3. Plaque growth — fibrous cap formation

As the lesion matures over years to decades:

- **Smooth muscle cells (VSMCs)** migrate from the media into the intima, proliferating and depositing collagen to form a fibrous cap over the growing lipid core
- **Necrotic core** forms from apoptotic foam cells whose contents (lipids, cholesterol crystals, cell debris) are incompletely cleared
- **Calcification** begins within the necrotic core in advanced lesions — this is the *intimal* calcification subtype, distinct from the *medial* (Mönckeberg) calcification that drives age-related arterial stiffening; both arise from VSMC osteogenic transdifferentiation but in different vessel-wall compartments. See [[vascular-calcification]] for the shared mechanism and the intimal-vs-medial discrimination
- **Senescent VSMCs and endothelial cells** accumulate in the plaque, secreting pro-inflammatory SASP cytokines and matrix-degrading enzymes — see [[sasp]] — that paradoxically weaken the very fibrous cap they helped form [^childs2016]

Genetic clearance of p16^Ink4a^-positive senescent cells in atherosclerosis-prone LDLR^-/-^ mice reduced plaque burden by approximately 60% and improved multiple indices of plaque stability, establishing senescent cells as causal drivers of disease progression, not merely bystanders [^childs2016]. **This result is from mouse models only; human translation is not yet demonstrated.** #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — p16+/senescent VSMCs present in human plaques |
| Phenotype conserved in humans? | partial — LDLR-/- mice require special diet; human disease is multigenic and multidecade |
| Replicated in humans? | no — senolytic clearance of plaque senescent cells not yet tested in human trials |

### 4. Plaque destabilization — vulnerable lesion

Not all plaques cause events. The **thin-cap fibroatheroma** (TCFA) — a plaque with a large necrotic core and a thin fibrous cap — is the high-risk phenotype most prone to rupture. The commonly cited cap-thickness threshold of <65 µm derives from pathological classification work not captured in the sources on this page; #gap/unsourced for that specific threshold. SASP-driven destabilization involves:

- Matrix metalloproteinase (MMP) secretion (MMP-1, -8, -13) by foam-cell macrophages and senescent VSMCs → collagen degradation → cap thinning
- Apoptosis of fibrous-cap VSMCs → reduced cap cellularity and collagen production
- Cholesterol crystal formation → NLRP3 inflammasome activation → IL-1β burst → [[nf-kb]]-driven local amplification loop [^hansson2005]

### 5. Acute thrombotic event — clinical presentation

Plaque rupture (or less commonly, plaque erosion without frank rupture) exposes subendothelial collagen and tissue factor to the bloodstream, triggering platelet aggregation and fibrin clot formation. Depending on vessel anatomy, this causes:

- **Myocardial infarction** (coronary occlusion)
- **Ischemic stroke** (carotid/vertebral/cerebral occlusion or embolism)
- **Peripheral arterial occlusion** (acute limb ischemia)
- **Mesenteric ischemia / renal infarction** (less common)

## Aging hallmark connections

Atherosclerosis is paradigmatic among aging-driven diseases because multiple hallmarks converge mechanistically:

### Chronic inflammation

The IL-1β → IL-6 → CRP axis is central to atherogenesis. [[nf-kb]] drives pro-inflammatory gene expression in endothelium and macrophages. The CANTOS trial (canakinumab, anti-IL-1β monoclonal antibody) in 10,061 patients with prior MI and elevated hsCRP demonstrated a 15% reduction in major adverse cardiovascular events (MACE) at the 150 mg dose (HR 0.85, 95% CI 0.74–0.98, p=0.021) without lowering LDL-C, providing the first proof-of-concept that targeting inflammation — independent of lipid lowering — reduces cardiovascular events [^ridker2017]. Fatal infection/sepsis increased (pooled canakinumab: 0.31 vs placebo 0.18 events/100 person-years, p=0.02), highlighting the trade-off inherent in systemic immunosuppression.

### Cellular senescence and SASP

Senescent cells accumulate in advanced atherosclerotic plaques — particularly p16^Ink4a^-positive intimal foam cells, VSMCs, and endothelial cells. These cells adopt a SASP phenotype (IL-6, IL-8, MMP secretion) that drives plaque instability. Childs et al. 2016 (Science) established causality in LDLR^-/-^ mice using the INK-ATTAC genetic system to clear p16^+^ senescent cells; plaque area was reduced ~60% with improvements in plaque composition [^childs2016]. This mechanistic insight motivates senolytic therapy as a potential disease-modifying strategy beyond LDL lowering — though human data are absent. #gap/needs-human-replication

### Altered intercellular communication

Circulating SASP factors (IL-6, MCP-1, VEGF) propagate arterial inflammation systemically, creating paracrine senescence spread through the vasculature. Extracellular vesicle signaling between plaques and distal sites has been proposed but mechanisms are not well-characterized. #gap/no-mechanism

### Mitochondrial dysfunction in vascular cells

Aged endothelial cells and VSMCs show mitochondrial dysfunction characterized by increased ROS production, reduced ATP output, and impaired mitophagy — see [[mitophagy]]. Mitochondrial ROS contributes to oxLDL formation, eNOS uncoupling (reduced NO), and NF-κB activation. The causal contribution of vascular mitochondrial dysfunction to human atherogenesis beyond correlation is not definitively established. #gap/no-mechanism

## Risk factors

### Non-modifiable

| Factor | Direction |
|---|---|
| Age | Strongest continuous predictor; every decade of age approximately doubles event risk |
| Male sex | Earlier onset; women "catch up" post-menopause |
| Family history / genetics | [[ldlr|LDLR]]/[[apob|APOB]]/[[pcsk9|PCSK9]] mutations ([[familial-hypercholesterolemia]]); 9p21.3 GWAS locus (largest common-variant effect) |
| [[apoe|APOE]] genotype | ε4 allele raises LDL, increases CV risk (~30–40% per allele) and is the strongest single common-variant risk factor for late-onset Alzheimer's; ε2 is CV-protective |

### Modifiable

| Factor | Mechanism |
|---|---|
| LDL-C / [[apob\|ApoB]] (strongest modifiable) | Direct plaque lipid loading; each 1 mmol/L LDL-C reduction → ~22% CVD event reduction (mendelian randomization + statin trials). ApoB is the more direct causal signal in multivariable MR (see [[apob]]) |
| Dietary fat composition | Saturated fat (especially [[palmitic-acid]]) suppresses hepatic [[ldlr]] via [[srebp-2]] → ↑ plasma ApoB. PUFA + MUFA-replacement reverses this. RCT-validated pattern: see [[mediterranean-diet]] |
| Hypertension | Endothelial shear stress injury; LDL oxidation |
| Smoking | Endothelial dysfunction; platelet activation; oxLDL |
| Type 2 diabetes / insulin resistance | Advanced glycation; dyslipidemia; inflammatory activation — see [[type-2-diabetes]] |
| Obesity | Adipokine dysregulation; dyslipidemia; hypertension; pro-inflammatory state |
| Physical inactivity | Endothelial dysfunction; metabolic risk accumulation |

## Pharmacological interventions

### Established lipid-lowering

**[[interventions/pharmacological/statins|Statins]] ([[hmgcr|HMG-CoA reductase]] inhibitors)** are the cornerstone of therapy. They reduce LDL-C by 30–50% depending on agent and dose, primarily by depleting hepatic free cholesterol → activating [[srebp-2]] → inducing [[ldlr]] transcription → upregulating LDL clearance (the dominant mechanism, beyond direct cholesterol-synthesis blockade). The Cholesterol Treatment Trialists' (CTT) meta-analysis quantified the dose-response: ~22% relative reduction in major vascular events per 1 mmol/L LDL-C lowered (RR 0.78, 95% CI 0.76–0.80). Statins also carry pleiotropic anti-inflammatory effects (CRP reduction, endothelial NO upregulation) independent of LDL lowering, partly via depleted geranylgeranyl-PP → reduced Rho/Rac prenylation. Adverse effects: statin-associated muscle symptoms (SAMS ~5–10% in RCTs; SAMSON N-of-1 trial showed substantial nocebo component) and modest T2D risk (CTT 2024: low/mod-intensity RR 1.10, high-intensity RR 1.36). See [[interventions/pharmacological/statins]] for the class page (CTT, intensity tiers, individual statin PK, adverse profile) and [[hmgcr]] for the molecular target.

**[[ezetimibe|Ezetimibe]]** inhibits NPC1L1 intestinal cholesterol absorption, reducing LDL-C by ~18% additive to statins. IMPROVE-IT 2015 NEJM (Cannon et al.; n=18,144 post-ACS, median 7-year follow-up): primary endpoint 32.7% (combo) vs 34.7% (statin alone), HR 0.936 (95% CI 0.89–0.99, p=0.016). First proof that non-statin LDL-lowering also reduces CV events — established LDL is causal regardless of mechanism.

**[[bempedoic-acid|Bempedoic acid]]** inhibits ATP-citrate lyase (ACLY), upstream of HMGCR in the [[mevalonate-pathway]]. Liver-specific bioactivation by ACSVL1 (absent in skeletal muscle) → no SAMS — the key statin-intolerant alternative. CLEAR Outcomes 2023 NEJM (Nissen et al.; n=13,970 statin-intolerant, median 40.6 mo): HR 0.87 (95% CI 0.79–0.96, p=0.004) for 4-component MACE.

**PCSK9 inhibitors** (evolocumab, alirocumab) are monoclonal antibodies that prevent PCSK9-mediated LDLR degradation, dramatically increasing hepatic LDL receptor recycling. Evolocumab (FOURIER trial, n=27,564) reduced LDL-C by ~59% (to median 30 mg/dL) and reduced MI/stroke/CV death by 15% (HR 0.85, 95% CI 0.79–0.92, p<0.001) over ~2.2 yr median follow-up [^sabatine2017]. Demonstrates that very low LDL-C is safe and incrementally beneficial beyond statin lowering. **Note: FOURIER quantitatives (LDL-C −59%, MACE HR 0.85 [95% CI 0.79–0.92, p<0.001]) re-verified end-to-end against the Sabatine 2017 NEJM source by the [[pcsk9]] verifier 2026-05-06 R26b — numbers confirmed.** Earlier "PDF pending" caveat resolved.

### Anti-inflammatory targeting

**Canakinumab (CANTOS)** — see Aging Hallmark Connections above. IL-1β blockade provides cardiovascular benefit independent of LDL, proof-of-concept for the inflammatory hypothesis. Not used widely for cardiovascular prevention given cost and infection risk; currently FDA-approved only for rare inflammatory conditions.

**Colchicine** (COLCOT trial, 4,745 patients post-MI): 31% RRR in composite MACE at 0.5 mg/day (HR 0.69, 95% CI 0.57–0.83, p<0.001). Low-cost oral anti-inflammatory now recommended post-MI in several guidelines. The colchicine page does not yet exist in this wiki. #gap/unsourced for COLCOT effect size on this page.

### Emerging senolytic strategy

Given the Childs 2016 mechanistic data, senolytics (see [[interventions/pharmacological/senolytics]]) represent a speculative but mechanistically motivated strategy. No completed human trial of senolytics has used atherosclerosis as a primary endpoint as of 2026. The drug combination dasatinib + quercetin (D+Q) is the most clinically studied senolytic, but cardiovascular-endpoint data are absent. Genetic evidence in mice is strong; human translation gap is significant. #gap/needs-human-replication

### Gut-microbiome-axis modulation — berberine

**[[berberine]]** is an isoquinoline alkaloid with ~0.68% oral bioavailability that acts as a gut-luminal agent. Three converging mechanisms relevant to atherogenesis: (i) post-transcriptional LDLR mRNA stabilization (Kong 2004, doi:10.1038/nm1135), distinct from statins' transcriptional SREBP-2 route — additive lipid-lowering of ~15–25% LDL-C reduction; (ii) gut-microbial choline-TMA-TMAO axis suppression via bacterial nitroreductase converting berberine to dihydroberberine, which inhibits microbial CutC + gut-bacterial FMO (Ma 2022, doi:10.1038/s41392-022-01027-6) — plasma TMAO ↓ 58–64% in HFD-fed hamsters with corresponding aortic IMT_max ↓ 22–29%; (iii) JAK2/STAT3 inhibition in VSMCs blocking phenotypic switching (Zheng 2025, doi:10.1016/j.ejphar.2025.178234). **Direct human IMT/plaque evidence is limited**: Ma 2022's human sub-study (n=21 open-label, non-randomized) showed carotid plaque-score reduction of 3.2% (p<0.05) but IMT itself was non-significant (p=0.067); the Yang 2023 meta-analysis pooled 13 IMT RCTs but many of those component trials are in Chinese-language journals difficult to verify independently. **The most defensible clinical claim is the ApoB/LDL-C-mediated pathway** (well-documented from CTT logic) rather than a primary plaque-reversal claim. BRAVO 2026 (Lei et al., JAMA Netw Open; n=337) confirmed LDL-C ↓7.72 mg/dL (p=0.008) and ApoB ↓3.42 mg/dL (p=0.02) in non-diabetic MASLD patients despite a negative primary adiposity endpoint. See [[berberine]] for full mechanism / primary effects / downstream effects breakdown. #gap/needs-replication for non-Chinese-population atherosclerosis-outcome trials.

## Imaging and biomarkers

- **Coronary artery calcium (CAC) score** — CT-based; zero score is highly predictive of near-zero event risk in intermediate-risk patients; strong predictor of future MI risk
- **hsCRP** — inflammatory marker; CANTOS showed hsCRP ≥2 mg/L identifies responders to anti-inflammatory therapy
- **LDL-C, non-HDL-C, and [[apob|ApoB]]** — primary lipid biomarkers; causality confirmed by Mendelian randomization. ApoB > non-HDL-C > LDL-C as causal-signal hierarchy in head-to-head multivariable MR (Richardson 2020)
- **[[lpa|Lipoprotein(a) [Lp(a)]]]** — genetically elevated Lp(a) increases risk (~6.6× per-particle atherogenicity vs LDL per Björnson 2024); PCSK9i partially lower it (~25%); dedicated Lp(a)-lowering agents (pelacarsen Phase 3 Lp(a)HORIZON, olpasiran Phase 3 OCEAN(a)-Outcomes, oral muvalaplin Phase 2) ongoing. #gap/long-term-unknown for human outcome benefit of Lp(a)-lowering

## Aging-relevance summary

Atherosclerosis is the **proto-aging-driven disease**: it manifests the full convergence of aging hallmarks in a single phenotype. The lipid-lowering era (1987–present) has dramatically reduced CVD mortality, but residual inflammatory risk remains the next frontier. The senescent-cell axis (SASP-driven plaque instability, foam-cell senescence) represents a genuinely novel disease-modifying mechanism that could complement lipid lowering. Human trials testing senolytic or senomorphic approaches in ASCVD are a research priority.

Cardiovascular disease (atherosclerosis-driven) remains the **leading cause of death globally** and the leading cause of death in adults over 65 in most high-income countries.

## Limitations and gaps

- **Mouse-to-human translation gap:** [[ldlr|LDLR]]^-/-^ and [[apoe|ApoE]]^-/-^ mouse models develop atherosclerosis in weeks on high-fat diet; human disease unfolds over decades. Mechanistic findings in mice require caution. #gap/needs-human-replication
- **Senolytic human cardiovascular trials:** The Childs 2016 ~60% plaque reduction is from LDLR^-/-^ mice; no equivalent human senolytic CV trial has reported outcomes. The magnitude of benefit in humans is unknown. #gap/needs-human-replication
- **Plaque stabilization vs regression:** Most drug trials are endpoint-based (events); intermediate endpoints like plaque composition, IVUS plaque volume, and cap thickness are surrogates with uncertain clinical correlation. #gap/needs-replication
- **PCSK9i long-term safety:** FOURIER follow-up was ~2.2 yr; longer-term safety at very low LDL-C (<30 mg/dL) remains incompletely characterized. #gap/long-term-unknown
- **Colchicine mechanism in CVD:** Anti-inflammatory but precise mechanism in atherogenesis unclear — neutrophil/NLRP3 involvement proposed but not definitively established. #gap/no-mechanism

## Footnotes

[^ross1999]: doi:10.1056/NEJM199901143400207 · Ross R · *N Engl J Med* 1999;340:115–126 · review · model: human — classic statement of the response-to-injury hypothesis of atherosclerosis; establishes endothelial dysfunction + LDL as initiating events; defines the central role of macrophages and foam cells; 21,571 citations (citation_percentile 100); archive: not_oa (#gap/no-fulltext-access)

[^libby2002]: doi:10.1038/nature01323 · Libby P · *Nature* 2002;420:868–874 · review · model: human — comprehensive review of inflammatory mechanisms in atherosclerosis; covers monocyte recruitment, foam cell formation, VSMC migration, plaque destabilization, and acute thrombosis; 8,034 citations; archive: **locally available** at 

[^hansson2005]: doi:10.1056/NEJMra043430 · Hansson GK · *N Engl J Med* 2005;352:1685–1695 · review · model: human — covers adaptive immunity (T cells, B cells) in atherosclerosis; NLRP3/cholesterol crystal/IL-1β axis; 8,625 citations; archive: not_oa (#gap/no-fulltext-access)

[^childs2016]: doi:10.1126/science.aaf6659 · Childs BG, Baker DJ, Wijshake T, et al. · *Science* 2016;354:472–477 · in-vivo · model: LDLR^-/-^ mus-musculus · INK-ATTAC genetic senescent-cell clearance system; p16^Ink4a^-positive cells cleared by AP20187-induced caspase 8 dimerization; atherosclerotic plaque area reduced ~60% with improvements in plaque composition and stability markers; n not confirmed (verifier should check); senescent foam cells identified as causal drivers at all stages; 1,091 citations; archive: not_oa (#gap/no-fulltext-access) — **CRITICAL: all effect sizes are from mice; human translation not demonstrated**

[^ridker2017]: doi:10.1056/NEJMoa1707914 · Ridker PM, Everett BM, Thuren T, et al. (CANTOS trial) · *N Engl J Med* 2017;377:1119–1131 · rct · n=10,061 · canakinumab 50/150/300 mg SC q3mo vs placebo · prior MI + hsCRP ≥2 mg/L · median follow-up 3.7 yr · MACE HR 0.85 (95% CI 0.74–0.98, p=0.021) at 150 mg (met pre-specified threshold); fatal infection/sepsis pooled canakinumab 0.31 vs placebo 0.18 events/100 person-yr (p=0.02); no LDL-C change; cross-referenced on [[nf-kb]] (verified-partial) and [[interventions/pharmacological/senomorphics]] (verified-partial); archive: **locally available** at 

[^sabatine2017]: doi:10.1056/NEJMoa1615664 · Sabatine MS, Giugliano RP, Keech AC, et al. (FOURIER trial) · *N Engl J Med* 2017;376:1713–1722 · rct · n=27,564 · evolocumab 140 mg SC q2w or 420 mg SC qmo vs placebo · statin-treated ASCVD patients · median follow-up 2.2 yr · LDL-C reduced 59% (to median 30 mg/dL); key endpoint MI/stroke/CV death HR 0.85 (95% CI 0.79–0.92, p<0.001); **verified against PDF on [[pcsk9]] 2026-05-06 R26b** — quantitatives confirmed; AI-extraction caveat lifted.

[^pesa2021]: [[studies/ibanez-2021-pesa-subclinical-atherosclerosis]] · PESA cohort. Cohort/design: Ibanez B et al. · *JACC* 2021;78(2):156–179 · PMID 34238438 · n=4,184 asymptomatic middle-aged; serial multi-territory imaging (NCT01410318). Primary cross-sectional finding: Fernández-Friera L et al. · *JACC* 2017;70(24):2979–2991 · PMID 29241485 · observational · n=1,779 risk-factor-free · subclinical atherosclerosis in 49.7%; LDL-C independently associated with plaque (OR 1.14–1.18 per 10 mg/dL) · model: human · both closed-access, abstract-confirmed · #gap/no-fulltext-access.
