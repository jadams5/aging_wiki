---
type: biomarker
aliases: [LBP, lipopolysaccharide-binding protein, plasma LBP, serum LBP, metabolic endotoxemia marker]
modality: proteomic
unit: μg/mL
training-cohort: "No machine-learning training cohort — LBP is a directly measured plasma protein; foundational metabolic-endotoxemia framing: Cani 2007 Diabetes (mouse HFD model); human-aging context: Ghosh 2015 J Gerontol (older vs young adults); Thevaranjan 2017 Cell Host Microbe (aged mouse + gut barrier)"
n-cpgs-or-features: 1
training-target: morbidity
calibration-tissues: ["[[blood]]"]
test-retest-icc: null
human-evidence-level: limited
mendelian-randomization: not-tested
intervention-responsive: partial
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Thevaranjan 2017 (local PDF, read end-to-end), Cani 2007 (local PDF downloaded, read methods+results), Zhao 2023 (local PDF downloaded, read end-to-end), Milan 2017 (local PDF downloaded, read end-to-end) verified against primary source PDFs. Ghosh 2015 verified via PMC full-text (PMC4311182; local download failed). Roberts 2020 verified via PMC full-text (PMC7937758; local download failed). Moreno-Navarrete 2012 (not_oa) and Lopez-Moreno 2018 (not_oa) not verified against full text — claims for these two papers remain unverified; tag #gap/no-fulltext-access applies to those specific footnotes. Reference range 5–15 μg/mL healthy and >20 elevated threshold not verified against a named primary source — #gap/unsourced applies."
---


# LBP (Lipopolysaccharide-Binding Protein)

Lipopolysaccharide-binding protein (LBP) is a circulating acute-phase glycoprotein that ferries bacterial lipopolysaccharide (LPS) to the CD14/TLR4 receptor complex on macrophages and other innate-immune cells. In the context of aging, plasma LBP serves as a *proxy marker* for metabolic endotoxemia — a state of chronically elevated circulating LPS arising from age-associated weakening of the intestinal epithelial barrier. Elevated LBP in older adults has been associated with insulin resistance, metabolic syndrome, and prospective Parkinson's disease incidence; the relationship with cardiovascular risk is unexpectedly inverse in the one aging-cohort study published to date (Roberts 2020 — higher LBP associated with lower predicted 10-year CHD risk, see below). LBP's evidence base for aging-specific prognostication is smaller than established inflammatory markers such as [[il-6-biomarker]] or [[gdf-15-biomarker]].

## Identity and Biochemistry

| Property | Value |
|---|---|
| Gene | *LBP* (HGNC:6518) |
| UniProt | P18428 (human) |
| Protein class | Bactericidal/permeability-increasing (BPI)-family lipid-transfer protein |
| Primary production site | Hepatocytes (liver); acute-phase synthesis upregulated by IL-1β, IL-6, TNF-α |
| Molecular weight | ~60 kDa |
| Normal range (healthy adults) | ~5–15 μg/mL (assay-dependent) |
| Elevated threshold (commonly used) | >20 μg/mL |
| Unit | μg/mL (ELISA; some assays report ng/mL — verify units when comparing studies) |

LBP binds LPS monomers and LPS aggregates with high affinity and delivers them to soluble or membrane-bound CD14. The CD14–LPS complex then engages TLR4/MD-2, triggering NF-κB-mediated pro-inflammatory signaling. At physiological concentrations LBP enhances LPS-elicited signaling; at very high concentrations (>200 μg/mL, as seen in acute sepsis) LBP paradoxically blunts TLR4 activation by sequestering LPS into HDL/LDL lipoproteins [^schumann1999]. The aging-relevant range (~15–50 μg/mL) sits in the pro-inflammatory zone, below the high-dose suppressive threshold.

## Aging Context: The Leaky-Gut Hypothesis

The canonical model linking LBP to aging runs through the [[processes/gut-barrier]]:

1. **Gut barrier weakens with age** — Epithelial tight junctions (occludin, claudin, ZO-1) and mucus-layer integrity decline across species with age. Aged mice show significantly higher intestinal permeability as measured by FITC-dextran translocation [^thevaranjan2017].
2. **LPS translocates into portal and systemic circulation** — Even sub-septic translocation of fragments from gram-negative bacteria (predominantly Proteobacteria and Bacteroidetes members) elevates systemic LPS above baseline; in the Cani 2007 foundational mouse model, 72% HFD raised plasma LPS 2.7-fold, crossing the threshold Cani et al. termed "metabolic endotoxemia" [^cani2007].
3. **LBP rises as a biosensor of LPS exposure** — The liver upregulates LBP production in response to portal LPS and cytokine signals. Sustained elevation of circulating LPS → sustained LBP elevation → chronic low-grade TLR4 signaling in macrophages, adipose, and muscle.
4. **Downstream hallmarks** — Chronic TLR4/NF-κB activation feeds [[hallmarks/chronic-inflammation]] (inflammaging), contributes to metabolic insulin resistance, and may amplify [[hallmarks/cellular-senescence]] via senescence-associated secretory phenotype (SASP) amplification. Upstream driver is [[hallmarks/dysbiosis]] — compositional and functional shifts in the gut microbiome with age.

The Thevaranjan 2017 Cell Host Microbe study demonstrated this axis directly in aged mice: conventionally raised aged animals showed elevated intestinal permeability, elevated circulating LPS, and systemic macrophage dysfunction; germ-free aged mice were protected from permeability loss and systemic inflammation [^thevaranjan2017]. **This evidence is murine; direct causal inference in humans requires intervention studies.** #gap/needs-human-replication

## Human Aging Evidence

### Ghosh 2015 — Older Adults Show Elevated LBP + Muscle TLR4

In a cross-sectional comparison of older (n=12; mean age 73.8 ± 2.1 years) versus young (n=13; mean age 25.5 ± 1.0 years) healthy adults with a 16-week aerobic exercise intervention arm, Ghosh et al. found that older participants had significantly elevated plasma LPS (1.8-fold, p<0.05) and LBP (1.9-fold, p<0.05) concentrations versus younger controls, accompanied by increased skeletal muscle TLR4 protein (2.1-fold) and gene expression (3.8-fold), and elevated muscle NF-κB p65 (1.6-fold, p<0.05) and NF-κB p50 (1.5-fold, p<0.05) [^ghosh2015]. Elevated LBP and muscle TLR4 associated with decreased insulin sensitivity. A 16-week aerobic exercise intervention improved insulin sensitivity (~21%, p<0.05) but did not change plasma LPS, LBP, or muscle TLR4 expression, suggesting that exercise alone is insufficient to reverse established metabolic endotoxemia in older adults. #gap/needs-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (TLR4/NF-κB axis identical) |
| LBP elevation in older humans observed? | yes (Ghosh 2015; multiple smaller studies) |
| Replicated across multiple cohorts? | partial — consistent direction, variable effect sizes |

### Moreno-Navarrete 2012 — LBP as Obesity-Related IR Marker

In a cross-sectional study of 222 subjects spanning lean, overweight, obese, and type-2-diabetic groups, Moreno-Navarrete et al. found circulating LBP significantly elevated in T2D and morbidly obese participants [^morenonavarrete2012]. In a longitudinal weight-loss subsample (n=34), LBP fell from 22.2 ± 5.8 μg/mL to 16.2 ± 9.3 μg/mL post-surgery (p<0.0001). LBP correlated with insulin resistance (HOMA-IR) and inflammatory markers (IL-6, CRP) across the cohort. This study establishes LBP as a metabolic biomarker but is cross-sectional for the main cohort; the weight-loss arm provides the strongest causal inference for reversibility. #gap/needs-replication

### Roberts & Buford 2020 — LBP and CVD Risk in Older Adults

In a cross-sectional study of 74 community-dwelling older adults (mean age 69.6 ± 6.5 years), Roberts & Buford found a significant **negative** correlation between plasma LBP and predicted 10-year coronary heart disease risk (Framingham Hard CHD score; r = −0.462, p<0.0001) [^roberts2020]. Higher-CVD-risk participants had lower LBP concentrations than lower-risk counterparts. LBP also negatively correlated with age (r = −0.335, p=0.004) and systolic blood pressure (r = −0.297, p=0.01) within this cohort. The direction is counterintuitive relative to the pro-inflammatory role of LBP in mechanistic studies; the authors suggest this may reflect enhanced bacterial toxin clearance in this population, or that Framingham risk scores aggregate risk factors (age, BP, cholesterol) in ways that do not straightforwardly track inflammatory burden. **This finding should not be read as evidence that high LBP is protective — the study was cross-sectional, the n was small, and Framingham CHD risk is not a direct measure of inflammation.** #gap/needs-replication

### Zhao 2023 — LBP and Prospective Parkinson's Disease Risk

In a European prospective cohort (EPIC; 352 incident PD cases matched 1:1 to controls; median 7.8 years follow-up), elevated baseline plasma LBP was associated with increased risk of subsequent Parkinson's disease development (OR 1.46, 95% CI 0.98–2.19 overall; OR 2.68, 95% CI 1.40–5.13 in women; OR 1.54, 95% CI 1.09–2.18 in overweight/obese) [^zhao2023]. Median LBP was 26.9 μg/mL in cases vs 24.7 μg/mL in controls. This is a prospective biomarker-disease association, not a causal mechanism study — LBP may be a proxy for gut dysbiosis and neuroinflammatory burden rather than a direct cause. #gap/no-mechanism

### Lopez-Moreno 2018 — Dietary Fat Quality Modulates Endotoxemia in Older Adults

In older adults randomized to Mediterranean diet vs saturated-fat vs low-fat PUFA diets, fasting LPS and endotoxemia markers were lowest in the Mediterranean diet arm [^lopezmoreno2018]. This study directly extends the dietary-fat:LBP axis into the aging-specific population. The endotoxemia-lowering effect of the Mediterranean diet likely operates via shifts in gram-negative gut bacteria abundance and altered LPS absorption.

### Milan 2017 — Postprandial Endotoxemia Does Not Differ by Age

Healthy older adults showed comparable postprandial endotoxemia responses to younger adults after high-fat meals, with altered oxidative-stress gene responses (decreased SOD-2 in older adults) [^milan2017]. This suggests that the elevated fasting LBP in aging is not primarily driven by exaggerated postprandial LPS absorption but rather reflects chronic basal translocation from age-related barrier dysfunction.

## Reference Ranges

| Status | LBP (μg/mL) | Notes |
|---|---|---|
| Healthy adults, fasting | 5–15 | Assay-dependent; ELISA kits vary |
| Overweight / metabolic syndrome | 15–25 | Moreno-Navarrete 2012; Gonzalez-Quintela 2013 |
| Older adults (70+) | ~20–30 | Ghosh 2015 (1.9-fold over young; absolute not stated); Roberts 2020 did not report absolute LBP reference values #gap/unsourced |
| Incident PD cases (prospective) | median 26.9 | Zhao 2023; matched-cohort |
| Obesity / T2D pre-weight-loss | ~22 | Moreno-Navarrete 2012 |
| Post-bariatric-surgery weight loss | ~16 | Moreno-Navarrete 2012 |
| Sepsis (acute) | >100–200 | Outside aging-relevant range |

**Assay standardization caveat:** There is no WHO international reference standard for LBP. Absolute values differ substantially across commercial ELISA kits (Hycult, Cell Sciences, R&D Systems). Cross-study comparisons require caution; intra-cohort trends are more reliable than absolute threshold comparisons. #gap/dose-response-unclear

## Intervention Responsiveness

LBP is partially responsive to interventions that modify gut-barrier integrity or gram-negative bacterial load. Evidence is largely short-duration or small cohort.

| Intervention | Direction | Strength | Key Reference |
|---|---|---|---|
| Mediterranean diet | Decreases | Moderate (RCT) | Lopez-Moreno 2018 [^lopezmoreno2018] |
| Bariatric surgery + weight loss | Decreases (~26%) | Moderate (prospective) | Moreno-Navarrete 2012 [^morenonavarrete2012] |
| Aerobic exercise (16-week) | No significant change | Null (intervention) | Ghosh 2015 [^ghosh2015] |
| Probiotics (*Lactobacillus*, *Bifidobacterium*) | Decreases (some studies) | Limited | See [[microbiome/lactobacillus]], [[microbiome/bifidobacterium]] |
| *Akkermansia muciniphila* supplementation | Decreases (early data) | Preclinical + early human | See [[microbiome/akkermansia-muciniphila]] |
| FMT | Inconsistent | Very limited human aging data | See [[interventions/dietary/fmt]] |
| Prebiotics / fiber | Decreases | Limited | See [[interventions/dietary/prebiotics]] |

The pattern suggests that interventions primarily acting on gut barrier integrity and microbiome composition (diet, Akkermansia) are more effective than exercise alone, which does not appear to normalize LBP despite improving metabolic outcomes.

## Mechanism Summary

LBP does not itself drive inflammation — it is a *carrier and amplifier* of LPS signaling. The inflammatory output depends on:
- **LPS concentration** — portal and systemic LPS levels (gut barrier primary determinant)
- **CD14 expression** — soluble CD14 (sCD14) competes with membrane CD14 for LPS binding and modulates signal amplitude
- **TLR4/MD-2 expression on target cells** — upregulated in muscle and macrophages with age (Ghosh 2015)
- **HDL concentration** — HDL sequesters LPS; low HDL (common in metabolic syndrome and with aging) reduces LPS neutralization capacity, amplifying the effective signal at constant LBP

This multi-layer buffering means LBP is a *leading indicator* of LPS burden, not a direct effector. Mechanistic claims attributing inflammatory outcomes to LBP per se require the full axis to be engaged.

## Confounders and Limitations

**Major confounders:**
- **Acute infection** — LBP is a canonical acute-phase protein. CRP-equivalent rises (2–10×) occur in any infection or acute inflammatory event. Baseline samples require infection-free state; CRP co-measurement is essential for interpretation.
- **Obesity** — BMI is a strong independent predictor of fasting LBP, potentially via adipose-tissue-driven LPS absorption from dietary sources and adipose inflammation. Age and obesity effects must be separated.
- **Liver function** — LBP is hepatocyte-derived; liver disease (cirrhosis, steatohepatitis) can paradoxically lower LBP despite high LPS burden or elevate it through non-specific acute-phase activation.
- **Statin use** — Statins modestly lower LBP in some studies, possibly via anti-inflammatory or HDL-stabilizing mechanisms; not controlled for in most aging cohorts.
- **Sex** — Zhao 2023 and Gonzalez-Quintela 2013 both find sex-stratified effects; women show stronger LBP–disease associations, possibly via estrogen-mediated TLR4 sensitivity differences.

**Biomarker limitations:**
1. **Not aging-specific** — LBP rises in many acute and chronic disease states (sepsis, IBD, alcoholic liver disease, T2D, metabolic syndrome). It does not uniquely fingerprint aging biology.
2. **No aging-specific longitudinal normative data** — The reference range for community-dwelling 70+ adults over time is not well-characterized.
3. **No MR causal evidence** — Mendelian randomization studies using LBP genetic instruments have not been published as of 2026-05-09. Whether elevated LBP is causal for aging outcomes or merely correlated via shared gut-permeability biology is unresolved. #gap/needs-replication `mendelian-randomization: not-tested`
4. **Assay heterogeneity** — No standardized reference preparation; absolute values are not directly comparable across platforms.
5. **Smaller longevity-cohort base** — Unlike [[il-6-biomarker]] (hundreds of cohort studies) or [[gdf-15-biomarker]] (multiple large-scale mortality studies), LBP has a sparser aging-specific literature. The 2025 systematic review (Mazaheri-Tehrani) addresses metabolic syndrome, not aging/longevity specifically [^mazaheri2025].

## Hallmark Linkages

- **[[hallmarks/dysbiosis]]** — primary upstream driver; age-associated microbial shifts increase gram-negative abundance and LPS availability
- **[[hallmarks/chronic-inflammation]]** — downstream consequence; LBP-mediated TLR4/NF-κB activation feeds inflammaging

## Cross-References

- [[processes/gut-barrier]] — epithelial barrier aging and tight-junction loss
- [[microbiome/gut-microbiome-aging-shifts]] — compositional changes driving LPS availability
- [[microbiome/akkermansia-muciniphila]] — Akkermansia supplementation associated with LBP reduction
- [[microbiome/lactobacillus]] — probiotic interventions reducing LBP
- [[microbiome/bifidobacterium]] — probiotic interventions reducing LBP
- [[interventions/dietary/fmt]] — FMT as gut-barrier intervention
- [[interventions/dietary/prebiotics]] — fiber-based LBP lowering
- [[il-6-biomarker]] — more established downstream inflammatory biomarker for aging
- [[gdf-15-biomarker]] — stronger mortality-predictive proteomic aging biomarker
- [[nlr-biomarker]] — composite innate-immune aging signal

## Limitations and Gaps

- `#gap/needs-human-replication` — Mouse causal axis (Thevaranjan 2017) not yet replicated by human interventional data demonstrating that gut-barrier restoration lowers LBP and reduces inflammatory burden
- `#gap/needs-replication` — Ghosh 2015 aging-specific LBP elevation finding; Roberts 2020 CVD-risk association — both small-cohort, require larger validation
- `#gap/needs-replication` — Zhao 2023 PD-risk finding is prospective but n=704 matched pairs; biological mechanism linking LBP → dopaminergic neurodegeneration not established
- `#gap/no-mechanism` — How LPS–LBP signaling in the periphery contributes to neurodegeneration (gut–brain axis) mechanistically unclear
- `#gap/dose-response-unclear` — No established aging-specific threshold for LBP that optimally stratifies morbidity risk; reference ranges are assay- and cohort-dependent
- `#gap/long-term-unknown` — No longitudinal trajectory data in healthy aging cohorts showing how LBP changes across the 60–90+ age range
- No MR instruments for LBP have been published; causal status vs aging outcomes is inferred, not tested

## Footnotes

[^cani2007]: doi:10.2337/db06-1491 · Cani PD et al. · *Diabetes* 2007 · n=8–9/group (HFD vs control; 4-week); n=18 CT, n=18 LPS (chronic infusion arm) · in-vivo · model: C57BL/6 and CD14 mutant mice · foundational metabolic-endotoxemia paper; 72% HFD for 4 weeks raised plasma LPS 2.7-fold vs control diet; continuous subcutaneous LPS infusion (0.05 mg/kg/day × 4 weeks) reproduced obesity, liver triglyceride accumulation, and insulin resistance; CD14 mutant mice resisted most metabolic effects of HFD and LPS infusion; 40% HFD raised LPS only 1.4-fold · archive: local PDF available

[^thevaranjan2017]: [[studies/thevaranjan-2017-aging-dysbiosis-permeability]] · doi:10.1016/j.chom.2017.03.002 · n=4–8/group (FITC-dextran permeability); n=5–16/group (colonization experiments) · in-vivo · model: C57BL/6 mice (aged 18–22 months vs young 10–14 weeks); germ-free and SPF arms · Thevaranjan N et al. · *Cell Host Microbe* 2017 · aged mice showed elevated intestinal permeability by FITC-dextran (p<0.007 by one-way ANOVA across ages 3–18 months), elevated circulating MDP and IL-6, systemic macrophage dysfunction; germ-free aged mice protected from permeability loss, elevated circulating bacterial products, and age-associated inflammation · local PDF available

[^ghosh2015]: doi:10.1093/gerona/glu067 · Ghosh S et al. · *J Gerontol A Biol Sci Med Sci* 2015 · n=12 older (73.8 ± 2.1 yr), n=13 young (25.5 ± 1.0 yr); 16-week aerobic exercise intervention in older group · observational + intervention · model: healthy human adults · older adults: plasma LPS 1.8-fold higher (p<0.05), LBP 1.9-fold higher (p<0.05); muscle TLR4 protein 2.1-fold, mRNA 3.8-fold; NF-κB p65 1.6-fold, p50 1.5-fold (all p<0.05); 16-week exercise improved insulin sensitivity ~21% (p<0.05) but did not normalize LBP, LPS, or TLR4 · archive: download failed (bronze OA; PMC URL returned HTTP 500)

[^morenonavarrete2012]: doi:10.1038/ijo.2011.256 · Moreno-Navarrete JM et al. · *Int J Obes* 2012 · n=222 cross-sectional; n=34 bariatric-surgery weight-loss · observational + prospective · model: human adults spanning lean to morbidly obese/T2D · LBP elevated in T2D/morbid obesity; post-surgery LBP fell from 22.2 ± 5.8 to 16.2 ± 9.3 μg/mL (p<0.0001) · archive: not_oa #gap/no-fulltext-access — quantitative claims not verified against full PDF

[^lopezmoreno2018]: doi:10.1016/j.exger.2017.11.006 · Lopez-Moreno J et al. · *Exp Gerontol* 2018 · n=older adults (diet intervention) · rct · model: human older adults · Mediterranean diet lowered fasting endotoxemia vs saturated-fat and low-fat PUFA diets · archive: not_oa #gap/no-fulltext-access — n, effect sizes, and LBP-specific results not verified against full PDF

[^milan2017]: doi:10.3390/nu9040354 · Milan AM et al. · *Nutrients* 2017 · n=15/group (young: 7F/8M, age 20–25 yr; older: 9F/6M, age 60–75 yr) · randomised cross-over · model: healthy community-dwelling adults · no significant age difference in postprandial plasma endotoxin (p=0.84), chylomicron endotoxin, or plasma LBP concentrations after high-fat or low-fat breakfast; older adults showed significantly decreased SOD-2 mRNA expression post-meal (p<0.001) vs younger adults · archive: local PDF available

[^roberts2020]: doi:10.1007/s40520-020-01684-z · Roberts LM and Buford TW · *Aging Clin Exp Res* 2020 (online); vol 33:1651–1658 · n=74 community-dwelling older adults (mean age 69.6 ± 6.5 yr; 46 female, 28 male) · observational cross-sectional · model: older adults · key finding: LBP negatively correlated with Framingham 10-yr CHD risk (r = −0.462, p<0.0001) — higher CVD risk group had LOWER LBP; also negatively correlated with age (r = −0.335, p=0.004) and SBP (r = −0.297, p=0.01) — direction is counterintuitive; interpret with caution · archive: download failed (PMC URL returned no candidate URLs)

[^zhao2023]: doi:10.1186/s12974-023-02846-2 · Zhao Y et al. · *J Neuroinflammation* 2023 · n=704 (352 incident PD cases matched 1:1 to controls; EPIC cohort) · observational prospective · model: human adults; median 7.8 yr follow-up · median LBP cases 26.9 (IQR 18.1–41.0) vs controls 24.7 (IQR 16.6–38.4) μg/mL; LBP OR 1.46 (95% CI 0.98–2.19, p=0.061) overall; OR 2.68 (1.40–5.13, p=0.003) in women; OR 1.54 (1.09–2.18, p=0.016) in overweight/obese (BMI ≥25); ORs per one natural log unit increase in LBP · archive: local PDF available (gold OA / PMC)

[^mazaheri2025]: doi:10.1186/s13098-025-01847-w · Mazaheri-Tehrani S et al. · *Diabetol Metab Syndr* 2025 · systematic review + meta-analysis · LBP and metabolic syndrome · confirms positive LBP–metabolic-syndrome association; evaluates dietary and probiotic interventions for metabolic endotoxemia · archive: pending download

[^schumann1999]: doi:10.1515/cclm.1999.047 · Schumann RR and Zweigner J · *Clin Chem Lab Med* 1999 · review · LBP structure, function, and acute-phase kinetics; high-dose LBP suppresses TLR4 signaling via lipoprotein sequestration of LPS · archive: not checked
