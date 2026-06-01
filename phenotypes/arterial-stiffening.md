---
type: phenotype
aliases: [arterial stiffness, vascular stiffening, large-artery stiffening, aortic stiffening]
icd-10: I77.1
icd-11: BD52
affected-tissues: ["[[vascular-tissue]]", "[[aorta]]"]
underlying-hallmarks: ["[[altered-intercellular-communication]]", "[[cellular-senescence]]", "[[chronic-inflammation]]"]
typical-onset: "Begins ~30-40s subclinically; clinically significant in 50s-60s; major contributor to isolated systolic hypertension after 60"
prevalence-65plus: "Pulse-wave velocity >10 m/s prevalence ~30-50% in adults 65+ (varies by population and cutoff)"
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "All 7 primary-source claims verified against PDF or PMC full text (Reference Values 2010, Mitchell 2010 via PMC, Sun 2015 PDF, Jennings 2019 PDF, Clayton 2023 via PMC abstract); Laurent 2006 and Boutouyrie 2021 abstract-only (paywalled/download-failed). Multiple corrections applied — see verified-scope log. Canonical-DB identity fields (ICD codes) not independently re-checked against WHO ICD browser."
literature-checked-through: 2026-05-19
---

# Arterial Stiffening

The irreversible reduction in large-artery elasticity that accumulates progressively from mid-life onward. Primarily affects the large elastic conductance vessels — aorta, common carotid, brachiocephalic — where compliance normally buffers cardiac ejection into the circulation. As those arteries stiffen, pulse pressure widens, systolic blood pressure rises while diastolic pressure may fall, and the reflected pressure wave arrives back at the heart in systole rather than diastole (amplifying afterload and reducing coronary perfusion pressure). Arterial stiffening is a mechanistically distinct aging phenotype from atherosclerosis, though the two often coexist. It is an independent predictor of cardiovascular events, stroke, heart failure with preserved ejection fraction (HFpEF), cognitive decline, and all-cause mortality in population cohorts.

## Measurement — gold standard and alternatives

Carotid-femoral pulse wave velocity (**cfPWV**) is the validated non-invasive gold standard for aortic stiffness [^laurent2006]. The ESH/ESC 2013 guidelines designated cfPWV >10 m/s as an end-organ damage marker for high cardiovascular risk in hypertensive patients.

| Method | What it measures | Strengths / Limitations |
|---|---|---|
| cfPWV | Aortic (true elastic segment) stiffness | Gold standard; operator skill required; ~4-min measurement with validated tonometry systems |
| Augmentation index (AIx) | Reflected wave contribution to central pulse pressure | Radial tonometry; operator-independent via SphygmoCor; confounded by heart rate and body height; not equivalent to cfPWV [^laurent2006] |
| Brachial-ankle PWV (baPWV) | Mixed muscular+elastic segment | Automated, widely used in Asia; includes muscular arteries — overestimates elastic stiffness |
| Cardio-ankle vascular index (CAVI) | Pressure-independent stiffness index | Corrects for instantaneous BP; independent of measurement-time pressure unlike PWV |
| Carotid distensibility / β-stiffness index | Local carotid wall mechanics | Ultrasound-derived; useful for segment-specific biology |

Normal cfPWV values increase steeply with age: mean 6.2 m/s in adults <30 rising to mean 10.9 m/s (±2 SD: 5.5–16.3 m/s) in adults ≥70 in the normal-value population (n=1,455; no CV risk factors, optimal/normal BP) [^reference-values-2010]. Age-adjusted normative reference values were derived from 11,092 subjects (reference-value population; 8 European countries, 13 centres) within a total database of 16,867 subjects across 13 centres.

## Mechanisms — multi-hallmark origin

Arterial stiffening is a convergent phenotype driven by at least four overlapping mechanisms with different time courses and intervention windows.

### Elastin fragmentation and collagen remodeling

Elastin is the primary load-bearing polymer in young large arteries, providing ~70% of aortic wall compliance. Critically, vascular elastin has **essentially zero turnover in adult humans** — the elastic fiber network laid down in fetal/early postnatal life is the network present at death. Over decades, pulsatile mechanical fatigue fractures elastin fibers progressively [^sun2014]; each fracture increases the mechanical load on the surrounding collagen network, which is far stiffer. By late life a substantial fraction of aortic wall distensibility is irretrievably lost from physical elastin destruction alone.

Collagen composition also shifts: type III collagen (compliant) proportion declines relative to type I (stiff); collagen fibril organization becomes disorganized; and collagen turnover itself increases, producing net deposition. The result is a collagen-dominated wall with high modulus.

### AGE crosslinks of collagen and elastin

Glucose-derived advanced glycation end-products form covalent crosslinks between adjacent collagen and elastin chains, further raising wall stiffness beyond the mechanical properties of the fibrillar proteins alone. **Glucosepane** is the dominant irreversible crosslink in human vascular collagen — see [[glucosepane]] and [[advanced-glycation-end-products]] for biochemistry. Formation is slow (timescale: years to decades) and is accelerated by hyperglycaemia and oxidative stress. Enzymatic removal of glucosepane crosslinks does not occur in vivo.

In diabetic patients (40-year disease duration), skin glucosepane burden correlates significantly with PWV (r = 0.44) and carotid intima-media thickness (r = 0.41) even after adjustment for HbA1c [^sveen2015], consistent with AGE crosslinking as a mechanism independent of blood-pressure-mediated remodeling.

AGE-breaker pharmacology (alagebrium / ALT-711) showed Phase 2 signals for reduced cfPWV and improved left ventricular diastolic filling in older hypertensive patients; the program failed at Phase 3 (Heart failure endpoint, null result) and was abandoned — full narrative in [[glucosepane]].

### Vascular smooth muscle cell senescence and SASP

Senescent VSMCs accumulate in aged aortic media. A 2023 mouse intervention study by Clayton et al. used two models: (1) p16-3MR transgenic mice (n≈10-16/group; 27-29 months old) receiving ganciclovir (GCV) to genetically clear senescent cells — GCV reduced aortic PWV from 477±10 to 382±7 cm/s (p<0.05), restoring values to young-mouse levels (6-8 months); (2) old C57BL/6N mice (n=14-16/group) treated with navitoclax/ABT-263 (50 mg/kg/day oral gavage; 1-week-on, 2-weeks-off, 1-week-on schedule) — ABT-263 reduced aortic PWV from 446±9 to 356±11 cm/s (~20% reduction; p<0.05) [^clayton2023]. Endothelium-dependent dilation was improved in both models (ABT-263 group: 96±1% vs vehicle 82±3%; p<0.05). Plasma proteomics of the p16-3MR GCV arm implicated glycolysis-related circulating SASP factors in the stiffening mechanism. #gap/needs-human-replication — no human senolytic RCT has yet used cfPWV as a primary endpoint.

The mechanism is dual: (1) SASP cytokines drive local inflammation, MMP-mediated ECM remodeling, and further collagen deposition; (2) senescent VSMCs lose contractile phenotype and can undergo osteogenic transdifferentiation contributing to medial calcification. See [[cellular-senescence]] and [[sasp]].

### Medial calcification (Mönckeberg-type)

Hydroxyapatite crystals deposit in the medial elastic layer of large arteries with age — distinct from intimal atherosclerotic calcification. Medial calcification dramatically increases vessel rigidity (hydroxyapatite is ~2 orders of magnitude stiffer than compliant arterial wall). It is accelerated in chronic kidney disease, diabetes, and warfarin use (warfarin inhibits matrix Gla protein, a calcification inhibitor). For the mechanism in depth — VSMC osteogenic transdifferentiation, the phosphate-Klotho-MGP-PPi axis, and intervention landscape (MK-7 / SNF472 / senolytics) — see [[vascular-calcification]]. #gap/no-mechanism — the initiating trigger for age-associated medial calcification in normoglycemic non-CKD individuals is not fully defined.

### Endothelial dysfunction and NO signaling

Endothelial nitric oxide (eNO) contributes to dynamic vascular tone via VSMC relaxation. Reduced NO bioavailability with age (from increased ROS scavenging and reduced eNOS activity) increases VSMC resting tone and reduces the dynamic functional component of arterial compliance. This is distinct from the structural mechanisms above and is, in principle, more reversible. Pharmacological NO augmentation (e.g., dietary nitrate from vegetables, L-arginine supplementation) has modest cfPWV-lowering effects in older adults.

## Clinical relevance and downstream consequences

The landmark Mitchell 2010 Framingham Heart Study cohort analysis (n=2,232; mean follow-up 7.8 years; 151 events [6.8%]) showed that each 1 SD higher aortic PWV was associated with a 48% higher risk of a first cardiovascular event (HR 1.48; 95% CI 1.16–1.91; p=0.002) after adjustment for age, sex, systolic blood pressure, antihypertensive therapy, total and HDL cholesterol, smoking, and diabetes [^mitchell2010]. The analysis used an inverse-transform of cfPWV; no per-1-m/s HR was reported. This established cfPWV as an independent cardiovascular risk factor beyond the Framingham risk score. Boutouyrie & Vlachopoulos 2021 reviewed the evidence base and concluded arterial stiffness is "clearly an independent predictor of cardiovascular risk" with sufficient evidence to recommend cfPWV measurement in hypertension management guidelines [^boutouyrie2021].

**Downstream organ consequences of widened pulse pressure:**

- **Microvascular injury in brain and kidney** — stiffened large arteries transmit pulsatile energy to the microvasculature (normally protected by elastic dampening), causing microvascular rarefaction, lacunar infarcts, white matter hyperintensities, and accelerated GFR decline.
- **Left ventricular hypertrophy and HFpEF** — increased systolic afterload drives concentric LVH; increased reflected wave timing reduces coronary diastolic filling; impaired relaxation → diastolic dysfunction → HFpEF.
- **Cognitive decline** — pulsatile flow damage to cerebral microvasculature correlates with white matter lesion burden; elevated cfPWV associated with accelerated cognitive aging independently of blood pressure.
- **Isolated systolic hypertension (ISH)** — the dominant form of hypertension after age 60 is driven by large-artery stiffening rather than peripheral resistance increase; this changes pharmacological management (diuretics/CCBs more effective than pure vasodilators for ISH).

## Interventions

### Aerobic exercise

The most consistently effective modifiable intervention. Regular aerobic exercise (≥3 sessions/week, ≥30 min, moderate-to-vigorous intensity) reduces cfPWV by ~0.5–1.5 m/s in middle-aged and older adults in RCTs. Mechanism involves increased shear-stress-mediated NO production, regression of collagen deposition, and possibly partial reversal of the functional component of stiffness. Effects are lost without continued training (cfPWV returns toward baseline within weeks of detraining). #gap/dose-response-unclear — optimal exercise modality (endurance vs resistance vs combined) for cfPWV not settled.

### Antihypertensive pharmacotherapy

All major antihypertensive classes reduce cfPWV when blood pressure is lowered; cfPWV is partly pressure-dependent. ACE inhibitors and ARBs may have modest additional BP-independent effects (reduced angiotensin II-driven collagen synthesis). Head-to-head pharmacological comparisons for BP-independent cfPWV effects are inconsistent across trials.

### Mediterranean diet

A 1-year multi-centre RCT (NU-AGE trial; n=1,294 randomized, aged 65–79; 5 European centres) showed that a Mediterranean-style diet significantly improved augmentation index (AIx@75) by −12.4 units (95% CI: −24.4 to −0.5; p=0.04) in the arterial-stiffness sub-cohort (n=225 at UK site only) but found **no significant change in cfPWV** [^jennings2019]. Systolic blood pressure was reduced by 5.5 mmHg overall. The AIx improvement reflects reduction in reflected-wave contribution to central pulse pressure — a measure of functional arterial stiffness — but does not translate to a structural cfPWV change in this cohort. Proposed mechanisms: increased dietary nitrate from vegetables, polyphenol-mediated endothelial NO upregulation. #gap/needs-replication — cfPWV-specific Mediterranean diet RCT evidence remains limited.

### AGE-breaker pharmacology

See [[glucosepane]] and [[advanced-glycation-end-products]] for the full alagebrium/ALT-711 clinical narrative. Phase 2 cfPWV signals were not replicated at Phase 3 (heart failure endpoint). Glucosepane-specific crosslink breakers have not yet entered human trials.

### Senolytics (preclinical stage)

Clayton et al. 2023 navitoclax (ABT-263) and GCV genetic-clearance mouse data (described above) are the strongest mechanistic evidence that senescent cell clearance can partially reverse established large-artery stiffness, reducing aortic PWV by ~20% [^clayton2023]. Translational pipeline: dasatinib + quercetin (D+Q) human pilot trials are ongoing but have not reported cfPWV as a primary endpoint as of 2026-05-19. #gap/needs-human-replication.

### Statins

Statins have pleiotropic effects on endothelial function and inflammation; observational and some RCT data suggest modest cfPWV-lowering beyond LDL effects, but results are inconsistent.

The venous counterpart to this phenotype — valve incompetence + vein-wall ECM remodeling under venous hypertension — is [[chronic-venous-disease]] (varicose veins / CVI), a sibling under [[cardiovascular-aging]] sharing the elastin-loss/MMP theme but in a low-pressure, gravity-loaded system.

## Hallmark mapping

Arterial stiffening is mechanistically downstream of multiple [[hallmarks-of-aging]]:

- [[altered-intercellular-communication]] — ECM AGE crosslink accumulation; RAGE-mediated signaling; collagen/elastin matrix remodeling (GlycoSENS SENS damage class maps here)
- [[cellular-senescence]] — VSMC senescence + SASP driving local inflammation and calcification
- [[chronic-inflammation]] — inflammaging-mediated MMP upregulation and collagen deposition
- [[mitochondrial-dysfunction]] — reduced NO synthase activity via mitochondrial ROS; indirectly via metabolic syndrome

## Extrapolation from model organisms

| Dimension | Status |
|---|---|
| Pathway conserved in rodents? | Yes — mice show age-related cfPWV increase and similar elastin/collagen shifts, but on a compressed timescale; medial calcification less prominent |
| Senolytic reversal of stiffness? | Yes in aged mice (Clayton 2023): ~20% PWV reduction with navitoclax, PWV restored to young levels with GCV — not yet tested in humans #gap/needs-human-replication |
| AGE crosslink mechanism? | Yes — glucosepane accumulates in mice, but dominant crosslinks may differ; human glucosepane burden is higher relative to other species |

## Limitations and gaps

- **Structural component is largely irreversible** — elastin fatigue fractures and glucosepane crosslinks cannot currently be repaired; interventions that lower cfPWV in short-term trials likely address functional (BP, tone, inflammation) rather than structural components. The magnitude of the irreversible structural deficit remains uncharacterized. #gap/no-mechanism
- **ICD codes are approximate** — neither ICD-10 nor ICD-11 has a dedicated arterial stiffening code; I77.1 (stricture/sclerosis of artery) and BD52 (atherosclerosis) are the closest available mappings. This limits insurance-coded epidemiology. #gap/needs-canonical-id
- **Hallmark mapping incomplete** — `[[loss-of-elasticity]]` as a named hallmark does not exist in this wiki; ECM structural aging is currently mapped to `[[altered-intercellular-communication]]`, which is an imprecise fit. See [[processes/advanced-glycation-end-products]] note. #gap/unsourced for formal hallmark assignment.
- **Senolytic human cfPWV trials lacking** — the Clayton 2023 mouse reversal data are compelling but have not been replicated in a human RCT with cfPWV as primary endpoint.
- **Medial calcification mechanism** unclear in non-diabetic non-CKD aging. #gap/no-mechanism

## Footnotes

[^laurent2006]: doi:10.1093/eurheartj/ehl254 · PMID:17000623 · Laurent S, Cockcroft J, Van Bortel L, Boutouyrie P, Giannattasio C, Hayoz D, Pannier B, Vlachopoulos C, Wilkinson I, Struijker-Boudier H (European Network for Non-invasive Investigation of Large Arteries) · *Eur Heart J* 2006;27(21):2588-2605 · expert consensus · n=not applicable (methodology + clinical applications review) · establishes cfPWV as gold standard; reviews AIx, baPWV, CAVI methodology; 10 m/s threshold · cited 5,895× · NOTE: PDF download failed (archive fetch error); abstract-verified only; full text paywalled

[^reference-values-2010]: doi:10.1093/eurheartj/ehq165 · PMCID:PMC2948201 · Reference Values for Arterial Stiffness Collaboration (Boutouyrie P, Vermeersch SJ as corresponding authors) · *Eur Heart J* 2010;31(19):2338-2350 · observational (pooled cross-sectional) · total database n=16,867 across 13 centres in 8 European countries; reference-value population n=11,092 (excl. CVD, diabetes, treated hypertension/dyslipidaemia); normal-value population n=1,455 (no CV risk factors, optimal/normal BP) · normal-value age-stratified cfPWV: <30y 6.2, 30-39y 6.5, 40-49y 7.2, 50-59y 8.3, 60-69y 10.3, ≥70y 10.9 m/s (mean ± 2SD) · first study to standardize PWV reference values across methodologies · cited 1,736×

[^mitchell2010]: doi:10.1161/circulationaha.109.886655 · PMCID:PMC2836717 · Mitchell GF et al. (Framingham Heart Study) · *Circulation* 2010;121(4):505-511 · prospective cohort · n=2,232 · Framingham Offspring and Third Generation cohorts · median follow-up 7.8 years · 151 events (6.8%) · cfPWV HR 1.48 per 1 SD higher aortic PWV (95% CI: 1.16–1.91; p=0.002) after multivariable adjustment (age, sex, SBP, antihypertensive therapy, total/HDL cholesterol, smoking, diabetes) · analysis used inverse transform of cfPWV; no per-1-m/s estimate reported · establishes cfPWV as BP-independent CVD predictor · cited 2,145×

[^sun2014]: doi:10.1161/HYPERTENSIONAHA.114.03617 · Sun Z · *Hypertension* 2015;65(2):252-256 · review (5 pages; "Recent Advances in Hypertension" series) · discusses metabolic syndrome, inflammation, neurohormonal dysfunction, and elastin fragmentation + collagen remodeling + AGE + NO-pathway mechanisms of aging-related arterial stiffening; no new data — synthesizes papers from *Hypertension* ~2012-2014 · cited 555×

[^boutouyrie2021]: doi:10.1161/CIRCRESAHA.121.318061 · PMID:33793325 · Boutouyrie P, Chowienczyk P, Humphrey JD, Mitchell GF · *Circ Res* 2021;128(7):864-886 · review · synthesis of arterial stiffness mechanisms (material vs structural stiffness levels, pulsatile load effects on brain/kidney/heart), measurement, and cardiovascular risk evidence; concludes arterial stiffness predicts outcomes independently of conventional risk factors and recommends cfPWV measurement in hypertension management · cited 647× · NOTE: PDF download failed (not_oa / download error); abstract-verified only

[^sveen2015]: [[processes/glucosepane]] cites: doi:10.1111/dom.12456 · Sveen KA et al. · *Diabetes Obes Metab* 2015;17(3):244-249 · observational cohort · n=27 type 1 diabetic patients, 40-year disease duration · skin glucosepane r=0.44 with PWV (p<0.05) after HbA1c adjustment

[^clayton2023]: doi:10.1161/HYPERTENSIONAHA.123.21392 · PMID:37593877 · PMCID:PMC10530538 · Clayton ZS, Rossman MJ, Mahoney SA, et al. · *Hypertension* 2023;80(10):2072-2087 · in-vivo senolytic intervention · two arms: (1) p16-3MR transgenic mice + ganciclovir (GCV; genetic senescent-cell clearance), aged 27-29 mo, n≈10-16/group; (2) old C57BL/6N mice + navitoclax/ABT-263 50 mg/kg/day oral gavage (1-wk-on/2-wk-off/1-wk-on), n=14-16/group · ABT-263: aortic PWV 446±9 → 356±11 cm/s (~20% reduction; p<0.05); EDD improved (96±1% vs 82±3%; p<0.05); GCV arm: PWV 477±10 → 382±7 cm/s (to young-mouse levels); plasma proteomics of GCV arm implicated circulating SASP glycolysis factors in stiffening · young (6-8 mo) controls used for GCV arm comparison · model: mus-musculus #gap/needs-human-replication

[^jennings2019]: doi:10.1161/HYPERTENSIONAHA.118.12259 · PMCID:PMC6380440 · Jennings A et al. (NU-AGE trial) · *Hypertension* 2019;73(3):578-586 · rct · n=1,294 randomized (aged 65-79; 5 European centres); n=225 in arterial-stiffness sub-cohort (UK site only) · Mediterranean-style diet vs habitual diet control · 1 year · **no significant change in cfPWV** (P=0.60 in the sub-cohort); AIx@75 significantly improved (between-group difference −12.4; 95% CI −24.4 to −0.5; p=0.04) · SBP reduced −5.5 mmHg (95% CI −10.7 to −0.4; p=0.03) overall · model: homo-sapiens #gap/needs-replication
