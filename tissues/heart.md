---
type: tissue
aliases: [cardiac organ, heart organ]
parent-system: cardiovascular-system
key-cell-types: ["[[cardiomyocytes]]", "[[cardiac-fibroblasts]]", "[[endothelial-cells]]", "[[vascular-smooth-muscle-cells]]"]
key-aging-phenotypes: ["[[heart-failure]]", "[[cardiac-fibrosis]]", "[[atrial-fibrillation]]", "[[cardiovascular-aging]]"]
related-hallmarks: ["[[cellular-senescence]]", "[[mitochondrial-dysfunction]]", "[[chronic-inflammation]]", "[[stem-cell-exhaustion]]", "[[loss-of-proteostasis]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Full PDF pass completed 2026-05-06. Strait & Lakatta 2012 (PMC3223374): read via PMC eutils full-text XML. Three claims corrected against source: (1) LV wall thickness '~25-30%' figure is NOT in the paper — the paper states LV mass does not increase (decreases in men; unchanged in women) and wall change is asymmetric/septal only; replaced with accurate description + #gap/unsourced for any % figure; (2) SAN cell count '~10,000-20,000' is NOT in the paper — the paper states '<10% of young adult pacemaker cells remain by age 75'; absolute count attributed to Shiraishi 1992 (not verified), flagged #gap/unsourced; (3) Aortic sclerosis prevalence '~25%/~50%' is NOT in Strait & Lakatta 2012 — paper discusses aortic calcification mechanistically without prevalence stats; citation removed, flagged #gap/unsourced with likely primary sources (Otto 1999 NEJM / Stewart 1997 JACC). Max HR 1 bpm/yr claim nuanced: paper discusses max HR decline without providing this specific rate. Bergmann 2009 (DOI lookup failed; PMC2991140 partial fetch): abstract confirmed via PubMed — ~1%/yr at age 25, ~0.45%/yr at age 75 confirmed; n not stated in abstract, wiki's 'n=~20 (approximate)' caveat preserved. Go 2001 (not OA; abstract confirmed via PubMed PMID 11343485): AF prevalence <55yr ~0.1% and ≥80yr ~9.0% confirmed in abstract; 2.3% at 60-69 is NOT in abstract (may be in full-text table); age bracket corrected from 'Age 20-39' to 'Age <55 years'; 60-69 figure flagged as unverifiable (#gap/no-fulltext-access). Lakatta & Levy 2003 (not OA): not verified this pass."
---

> Verified 2026-05-06 (full PDF pass). Strait & Lakatta 2012 read via PMC full-text; three quantitative claims corrected (LV wall thickness %, SAN cell absolute count, aortic sclerosis prevalence — all removed/re-qualified as not present in source). Go 2001 abstract confirmed via PubMed; AF age-bracket corrected. Bergmann 2009 abstract confirmed. Lakatta & Levy 2003 remains unverified (closed-access). See `verified-scope` for full details.

# Heart

The heart is the four-chambered muscular pump that drives systemic and pulmonary circulation. It is composed of three tissue layers ([[myocardium]], endocardium, epicardium), four valves (mitral, tricuspid, aortic, pulmonary), the cardiac conduction system, and the coronary vasculature — all enclosed in the fibrous pericardial sac. Aging degrades virtually every functional compartment of the heart: the myocardium hypertrophies and stiffens, the conduction system loses pacemaker cells, valvular leaflets calcify, and coronary arteries accumulate atherosclerotic plaque [^straitlakatta2012][^lakattalevy2003].

The heart is one of the most aging-sensitive organs in the body. Cardiovascular disease is the leading cause of death in adults over 65 in high-income countries, and the underlying cellular mechanisms (cardiomyocyte senescence, fibrosis, impaired proteostasis, mitochondrial dysfunction) are directly trackable to the Hallmarks of Aging. Quantitative mechanistic detail is concentrated on the atomic tissue page [[myocardium]] (verified); this page is a synthesis MOC at the organ level.

---

## Anatomy at a glance

The heart weighs approximately 250–350 g in adult humans and contracts ~100,000 times per day. Its four chambers — right atrium (RA), right ventricle (RV), left atrium (LA), left ventricle (LV) — are separated by the interatrial and interventricular septa and gated by four valves:

| Valve | Location | Function |
|---|---|---|
| Tricuspid | RA → RV | Prevents right-sided regurgitation |
| Pulmonary | RV → pulmonary artery | Prevents pulmonic regurgitation |
| Mitral | LA → LV | Prevents left-sided regurgitation |
| Aortic | LV → aorta | Most susceptible to age-related calcification |

**Conduction system:** The sinoatrial node (SAN, right atrial wall near the superior vena cava) generates the primary electrical impulse. Signal propagates through the atria to the atrioventricular node (AVN), then via the Bundle of His, left/right bundle branches, and Purkinje fiber network to the ventricular myocardium.

**Coronary circulation:** The left anterior descending (LAD), left circumflex (LCx), and right coronary artery (RCA) supply the myocardium. Obstruction of these vessels by [[atherosclerosis]] causes myocardial infarction (MI), the dominant acute cardiac catastrophe in aging humans.

**Pericardium:** A fibrous sac surrounding the heart; becomes less compliant with age and can accumulate effusion in inflammatory states. Not a primary site of aging change but relevant context.

---

## Tissue layers

| Layer | Description | Aging-relevant changes |
|---|---|---|
| **Epicardium** | Outer serous membrane; contains autonomic nerve terminals and coronary vessels | Epicardial fat (pericardial adipose tissue) accumulates with age; a source of paracrine inflammatory signals |
| **Myocardium** | Middle muscular layer; bulk of cardiac mass; cardiomyocytes + fibroblasts + ECM | Concentric hypertrophy, interstitial fibrosis, mitochondrial dysfunction, cardiomyocyte senescence — see [[myocardium]] (verified) |
| **Endocardium** | Inner endothelial lining of chambers and valves | Endothelial senescence; valvular leaflet calcification (especially aortic) |

For mechanistic, cellular, and molecular detail on the myocardium, see [[myocardium]] (verified). This organ-level page synthesizes and links; it does not duplicate claims already sourced there.

---

## Aging phenotypes at the organ level

### Left ventricular concentric hypertrophy and diastolic dysfunction

The dominant structural change of cardiac aging is **left ventricular concentric hypertrophy** — increased LV wall thickness relative to chamber volume — driven by cardiomyocyte hypertrophy (not hyperplasia) and interstitial fibrosis. Wall stiffening impairs diastolic filling, producing **diastolic dysfunction** and eventually **heart failure with preserved ejection fraction (HFpEF)**, the predominant cardiac syndrome in adults over 65. With healthy aging, LV wall thickness increases asymmetrically (interventricular septum more than the free wall), but total LV mass does not increase — in men it actually decreases; in women it is unchanged [^straitlakatta2012]. #gap/unsourced — a specific percentage increase in septal or total wall thickness between ages 25 and 80 is not stated in [^straitlakatta2012]; if a precise figure (e.g., ~25–30%) is needed, a primary echocardiographic or BLSA imaging study (e.g., Gerstenblith 1977, Levy 1988, or Kitzman 2001 BLSA data) should be cited.

Key consequences:
- Impaired LV relaxation (prolonged isovolumic relaxation time on echocardiography)
- Elevated filling pressures (elevated E/e' ratio)
- Exercise intolerance despite preserved resting EF (~55–65%)
- Predisposition to atrial fibrillation (elevated LA pressure → LA dilation)

See [[myocardium]] (verified) for cellular mechanism (cardiomyocyte SASP → fibroblast activation → collagen deposition) and [[cardiac-fibrosis]] for structural detail.

### Sinoatrial node aging (pacemaker cell loss)

The SAN contains a specialized population of pacemaker cardiomyocytes (If-channel expressing) that decline in number with age due to apoptosis, fibrosis, and replacement by adipose and fibrous tissue [^straitlakatta2012]. A pronounced decline in pacemaker cell number occurs after age 60; by age 75 fewer than 10% of the pacemaker cells present in young adults remain [^straitlakatta2012]. #gap/unsourced — the absolute SAN pacemaker cell count in healthy young adults (~10,000–20,000 cells is a commonly cited estimate in secondary literature; not stated in [^straitlakatta2012]; primary source is Shiraishi et al. 1992 histomorphometric study, not archive-confirmed). Consequences of SAN aging include:

- **Resting heart rate reduction**: maximum achievable heart rate declines with age; SAN cell loss limits chronotropic reserve. The widely-cited formula max HR ≈ 220 − age implies ~1 beat/min per year, but [^straitlakatta2012] does not state this exact rate — it notes maximal heart rate is lower in older individuals and is not offset by physical conditioning.
- **Sick sinus syndrome (SSS)**: symptomatic SAN dysfunction — bradycardia, chronotropic incompetence, sinus pauses. Prevalence rises sharply >65 years; SSS is the most common indication for pacemaker implantation in older adults.
- **Increased AF susceptibility**: SAN fibrosis creates a substrate for re-entrant arrhythmia. SAN remodeling reduces the anatomic barrier between the sinus node and the right atrium, facilitating aberrant impulse formation.

#gap/needs-replication — quantitative SAN cell-number decline with age in human hearts has not been systematically replicated since the original histomorphometric studies (Shiraishi et al. 1992; not archive-confirmed; see #gap/unsourced below). [^straitlakatta2012] reviews the literature but the underlying primary data needs direct verification.

### Atrial fibrillation

AF is the most common sustained cardiac arrhythmia, and age is its dominant risk factor. Prevalence in US adults [^go2001]:
- Age <55 years: ~0.1% (abstract-confirmed)
- Age 80+: ~9.0% (abstract-confirmed)
- Overall diagnosed prevalence: ~2.3 million US adults (2001 estimate; substantially higher by 2020s)

Note: The intermediate age-band figure (~2.3% at age 60–69) is commonly cited alongside this paper but is not stated in the Go 2001 abstract; it may appear in full-text Table 1, which is behind a paywall (#gap/no-fulltext-access for this specific figure).

AF arises from structural (LA dilation, fibrosis), electrophysiological (altered ion channel expression, SAN remodeling), and autonomic (diminished parasympathetic tone) changes that collectively create a substrate for re-entry and ectopic impulse generation. Age-related [[chronic-inflammation]] and [[cellular-senescence]] in atrial myocytes and fibroblasts contribute directly to the fibrotic substrate.

#gap/needs-human-replication — whether senolytic clearance of senescent atrial cells reduces incident AF has not been tested in humans as of 2026-05-06. [[atrial-fibrillation]] (implicit stub).

### Aortic valve calcification (sclerosis → stenosis)

The aortic valve undergoes progressive calcification with age, driven by:
- Lipid accumulation and oxidative stress in leaflet tissue (mechanism overlaps with [[atherosclerosis]])
- Osteoblast-like differentiation of valve interstitial cells (regulated by RUNX2 and BMP signaling)
- Chronic low-grade inflammation

> **Cross-link — cardiac vs venous valves:** cardiac valves share a developmental program (NFATc1/calcineurin, Notch, BMP, EndMT) with the [[veins|venous valves]], but diverge in failure mode — cardiac valves calcify (osteogenic VIC transdifferentiation) or degenerate myxomatously, whereas venous valves fail by reflux (leaflet stretch + wall dilation). Notably the venous/lymphatic valve transcription factor **PROX1 also protects against myxomatous mitral degeneration**. See [[veins]] § Comparison to cardiac valves.

**Aortic sclerosis** (calcification without hemodynamic obstruction) is present in ~25% of adults aged 65–74 and ~50% of adults aged ≥75. #gap/unsourced — these prevalence figures are widely cited in clinical cardiology (original source: Otto CM et al. 1999 NEJM or Stewart BF et al. 1997 JACC — not verified in archive) but are NOT stated in [^straitlakatta2012], which discusses aortic valve calcification mechanistically without providing prevalence statistics. Citation removed from prevalence claim; a primary epidemiologic study must be cited here. Sclerosis progresses to **aortic stenosis** (hemodynamically significant obstruction) at ~2%/year #gap/unsourced; severe AS (valve area <1 cm²) has a 50% 2-year mortality without intervention #gap/unsourced. Transcatheter aortic valve replacement (TAVR) is the dominant intervention in high-surgical-risk patients >75.

### Coronary artery disease (link to atherosclerosis)

Age is the dominant non-modifiable risk factor for coronary artery disease. Coronary atherosclerosis — intimal plaque accumulation driven by endothelial dysfunction, LDL oxidation, macrophage foam cell formation, and chronic inflammation — is mechanistically upstream of myocardial infarction. Detailed mechanism on [[atherosclerosis]] (drafted). The cardiac consequence is:

- Acute MI (plaque rupture + thrombosis) → irreversible myocardial scar → LV remodeling
- Chronic ischemia → hibernating myocardium → heart failure with reduced EF (HFrEF)

---

## Regenerative capacity

The heart has negligible cardiomyocyte regenerative capacity in adult humans. Bergmann et al. 2009 (radiocarbon ¹⁴C dating of cardiac DNA) estimated cardiomyocyte renewal at ~1%/year at age 25, declining to ~0.45%/year at age 75 [^bergmann2009]. The 2015 follow-up (Bergmann et al. 2015, n=51 hearts) confirmed that **total cardiomyocyte number does not change from birth to old age** (R=0.01, p=0.96) and revised the age-75 renewal rate downward to <0.3%/year — these data are sourced and verified on [[myocardium]] (verified).

Practical implication: myocardial infarction (death of >1 billion cardiomyocytes in a typical MI) leaves a permanent fibrotic scar. No therapeutic approach has yet demonstrated meaningful cardiomyocyte regeneration in large mammals; promising rodent strategies (Hippo/YAP, ERBB2 transient overexpression, miRNA-199a/590) have not translated to humans.

#gap/needs-human-replication — CM regeneration strategies remain preclinical; no phase 3 human trial has demonstrated functional cardiac regeneration as of 2026-05-06. Note: the Bergmann 2015 downward revision of the age-75 renewal rate (to <0.3%/year, n=51 hearts; sourced on [[myocardium]] verified) supersedes the 2009 estimate of ~0.45%/year cited in [^bergmann2009] — any downstream page relying on the 2009 figure for this age-75 rate should prefer the 2015 value.

---

## Cardiac aging biomarkers

These circulating markers reflect organ-level cardiac stress and are elevated in aging and disease:

| Biomarker | Source | What it reflects | Notes |
|---|---|---|---|
| **NT-proBNP** (N-terminal pro-B-type natriuretic peptide) | Released by stressed cardiomyocytes | LV wall stress, volume overload, HF severity | Clinical standard for HF diagnosis; rises with age even in the absence of overt HF; >125 pg/mL diagnostic threshold for HF in most guidelines |
| **hs-cTnT** (high-sensitivity cardiac troponin T) | Released from damaged cardiomyocytes | Subclinical myocardial injury | Chronically elevated hs-cTnT predicts adverse cardiovascular outcomes independently of clinical HF diagnosis; detectable in most older adults at trace levels |
| **GDF-15** (growth differentiation factor 15) | Myocardium + other tissues under stress | Mitochondrial stress, inflammation, cardiac aging | Part of cardiomyocyte SASP in aged mice (Tgfb2/Gdf15/Edn3 — Anderson 2019; see [[myocardium]] for source); elevated GDF-15 predicts all-cause and cardiovascular mortality in older adults #gap/unsourced |

#gap/unsourced — NT-proBNP age-trajectory, hs-cTnT chronic-elevation claims, and GDF-15 human mortality-prediction claim are widely cited in clinical cardiology but specific primary citations are not attached here; see [[cardiovascular-aging]] (drafted) for sourced clinical discussion. Note: the GDF-15 SASP role (Anderson 2019, mouse data) is verified on [[myocardium]]; the claim that elevated circulating GDF-15 predicts mortality in older humans is a separate clinical claim requiring its own human-cohort citation.

---

## Hallmark connections

| Hallmark | Organ-level mechanism |
|---|---|
| [[cellular-senescence]] | Cardiomyocyte senescence (oxidative telomere damage, non-canonical SASP); CPC senescence (>50% p16+ in >70yr); SAN cell loss with fibrotic replacement — see [[myocardium]] for sources |
| [[mitochondrial-dysfunction]] | Cardiomyocyte high OXPHOS dependence (~90% of ATP from mitochondria); mtDNA deletion accumulation; impaired mitophagy; direct consequence: diastolic dysfunction and HFpEF |
| [[chronic-inflammation]] | SASP-driven fibroblast activation; atrial fibrosis (AF substrate); epicardial adipose paracrine signaling; macrophage inflammaging in coronary vessels |
| [[stem-cell-exhaustion]] | CPC functional exhaustion; near-zero net CM regeneration; SAN pacemaker cell loss |
| [[loss-of-proteostasis]] | Protein aggregate accumulation in post-mitotic CMs (amyloid, cross-linked collagen); UPS and autophagy decline; chaperone capacity reduction |

---

## Aging-protective interventions (organ level)

| Intervention | Mechanism | Evidence level |
|---|---|---|
| Aerobic exercise | Preserves mitochondrial density; reduces resting HR; improves LV compliance; reduces HFpEF risk; maintains VO₂max | Strong (observational + RCT; VO₂max preservation most protective) |
| SGLT2 inhibitors | Reduce myocardial fibrosis + inflammation; ketone utilization by cardiomyocytes; HFpEF mortality benefit | Strong human RCT (empagliflozin EMPEROR-Preserved; dapagliflozin DELIVER) |
| GDMT (ACEi/ARB/ARNi, β-blockers, MRA) | Reduce afterload + neurohormonal activation; prevent post-MI remodeling | Strong human RCT (primarily HFrEF; ARNi sacubitril/valsartan PARADIGM-HF) |
| Senolytics (navitoclax, D+Q) | Clear senescent CMs and CPCs; reduce fibrosis and hypertrophy in mice | Preclinical only; no completed human cardiac-specific senolytic trial #gap/needs-human-replication |
| mTOR inhibition (rapamycin/everolimus) | Restore autophagy/mitophagy; extend mouse lifespan with cardiac benefit | Preclinical well-supported; PEARL 2025 human trial showed no improvement in aortic stiffness (primary endpoint non-significant); see [[rapamycin]] |

---

## Limitations and gaps

- `#gap/needs-human-replication` — senolytics for cardiac aging (all data in mice; no completed human trial targeting cardiac senescent cells); CM regeneration strategies; AF senolytic prevention
- `#gap/needs-replication` — SAN pacemaker cell-number quantification across human ages (original Shiraishi 1992 histomorphometry; no large independent replication confirmed in archive)
- `#gap/unsourced` — NT-proBNP and hs-cTnT age-trajectory claims; GDF-15 human mortality-prediction claim (mouse SASP role verified on [[myocardium]]; circulating GDF-15 mortality prediction in older humans needs human-cohort citation); SAN cell-count decline needs primary citation; epicardial adipose paracrine aging signals
- `#gap/no-mechanism` — why aortic valve calcification is more prominent than mitral in aging (mechanical strain hypothesis vs biochemical predisposition — not definitively resolved)
- `#stub` — [[atrial-fibrillation]], [[cardiovascular-system]], [[vascular-smooth-muscle-cells]] are implicit stubs; cardiac-fibroblasts and endothelial-cells pages need seeding for full cross-link integrity

---

## Cross-references

- [[myocardium]] (verified) — primary atomic page for cardiac muscle tissue; all quantitative CM turnover, SASP, and CPC data sourced and verified there
- [[cardiomyocytes]] (verified-partial) — primary atomic page for CM cell biology
- [[cardiac-fibrosis]] (verified-partial) — structural consequence; fibroblast activation and interstitial fibrosis mechanisms
- [[heart-failure]] (drafted) — clinical outcome page; HFpEF and HFrEF; diagnostic criteria and outcomes
- [[cardiovascular-aging]] (drafted) — system-level MOC; vascular + cardiac combined overview
- [[atherosclerosis]] (drafted) — coronary artery disease mechanism; upstream of MI
- [[atrial-fibrillation]] (implicit stub) — AF at the atomic level; to be seeded
- [[cardiovascular-system]] (implicit stub) — parent system MOC
- [[vascular-smooth-muscle-cells]] (implicit stub) — coronary and aortic medial layer cells
- [[cardiac-fibroblasts]] (planned) — fibrosis effector cells
- [[cellular-senescence]] — hallmark MOC; CM + CPC + endothelial senescence
- [[mitochondrial-dysfunction]] — hallmark MOC; cardiomyocytes as paradigm case
- [[chronic-inflammation]] — hallmark MOC; SASP + inflammaging in cardiac context
- [[stem-cell-exhaustion]] — hallmark MOC; CPC functional exhaustion
- [[loss-of-proteostasis]] — hallmark MOC; CM protein aggregate accumulation
- [[mtor]] — mTOR hyperactivation suppresses CM autophagy
- [[ampk]] — AMPK decline worsens cardiac aging; heart-specific data on [[myocardium]]
- [[rapamycin]] — PEARL 2025 human trial context

---

## Footnotes

[^straitlakatta2012]: doi:10.1016/j.hfc.2011.08.011 · Strait JB, Lakatta EG · "Aging-Associated Cardiovascular Changes and Their Relationship to Heart Failure" · Heart Fail Clin 8(1):143–164 · 2012 · review · 711 citations (OA; read via PMC full-text XML, PMC3223374, 2026-05-06). Key verified findings: SAN pacemaker cells decline "pronounced" after age 60, with <10% remaining by age 75 (relative to young-adult count); LV mass does not increase with aging in healthy normotensive adults (men decrease, women unchanged); wall thickening is asymmetric and septal. Aortic sclerosis prevalence and LV wall thickness % figures (~25-30%) are NOT in this paper.

[^lakattalevy2003]: doi:10.1161/01.cir.0000048892.83521.58 · Lakatta EG, Levy D · "Arterial and Cardiac Aging: Major Shareholders in Cardiovascular Disease Enterprises" · Circulation 107(2):139–146 · 2003 · review · 2161 citations (archive confirmed; not OA — PDF not locally downloaded)

[^bergmann2009]: doi:10.1126/science.1164680 · Bergmann O, Bhardwaj RD, Bernard S et al. · "Evidence for Cardiomyocyte Renewal in Humans" · Science 324(5923):98–102 · 2009 · observational · model: post-mortem human hearts; ¹⁴C radiocarbon dating of cardiac DNA · n not stated in abstract (DOI lookup failed; PMC2991140 exists but full-text body n not extractable from partial fetch) #gap/no-fulltext-access for exact n · Abstract confirmed (PubMed PMID 19342590, 2026-05-06): ~1%/yr CM renewal at age 25 declining to ~0.45%/yr at 75; fewer than 50% of CMs exchanged across a normal lifespan (2009 estimate; superseded by Bergmann 2015 which revised age-75 rate to <0.3%/yr using n=51 hearts — see [[myocardium]] verified); 3101 citations

[^go2001]: doi:10.1001/jama.285.18.2370 · Go AS, Hylek EM, Phillips KA et al. · "Prevalence of Diagnosed Atrial Fibrillation in Adults" · JAMA 285(18):2370–2375 · 2001 · observational · model: Kaiser Permanente health plan members (ATRIA Study); total health-plan population 1.89 million; 17,974 AF cases identified (n=17,974 cases, NOT 17,974 total subjects) · Abstract confirmed (PubMed PMID 11343485, 2026-05-06): AF prevalence 0.1% for adults <55 years; 9.0% for adults ≥80 years; total prevalence 0.95% (95% CI 0.94–0.96%); estimated 2.3 million Americans with diagnosed AF. Note: the 2.3% figure at age 60–69 is NOT stated in the abstract and may appear in full-text Table 1 (not verified — paper is closed-access) #gap/no-fulltext-access
