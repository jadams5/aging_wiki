---
type: biomarker
aliases: [insulin-like growth factor 1 serum, somatomedin C, IGF1 biomarker, serum IGF-1, IGF-I serum]
modality: proteomic
unit: ng/mL
training-cohort: "Multiple aging cohorts: Milman 2014 (n=184 Ashkenazi Jewish nonagenarians, Aging Cell); Vitale 2012 (n=192 centenarians' offspring — Italian multicenter cohort, Aging); van Bunderen 2010 LASA (n=1,273 elderly, JCEM); Friedrich 2011 DETECT (n=6,066 primary care, GH IGF Res); Svensson 2012 MrOS Sweden (n=2,901 elderly men, JCEM); Fontana 2016 CALERIE (n=218 nonobese adults, Aging Cell)"
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
verified-scope: "Primary sources verified against PDF: Milman 2014 (Aging Cell), Fontana 2016 CALERIE (Aging Cell), Watts 2022/2023 (IJE), Vitale 2012 (Aging Albany), Chanson 2016 (JCEM). Unverifiable (closed-access or failed download): Renehan 2004 (Lancet, not_oa), Friedrich 2011 (GH IGF Res, not_oa), van Bunderen 2010 (JCEM, failed), Svensson 2012 (JCEM, failed), Fontana 2008 (Aging Cell, failed), Chapman 1996 (JCEM, not checked), Adunsky 2011 (not checked), Brugts 2008 (not checked). Reference-range table from Chanson 2016 verified for assay-variability claims but specific ng/mL range values not transcribed from PDF — values in table are general clinical reference intervals per wiki body text, not from Chanson directly."
---


# Serum IGF-1 (Longevity / Aging Biomarker)

Serum insulin-like growth factor 1 (IGF-1) is a single-analyte hormonal biomarker with strong associations with mortality, cancer risk, frailty, and longevity across multiple large aging cohorts. Unlike DNA methylation clocks, it is routinely measurable on standard clinical chemistry panels and falls within typical laboratory reference ranges requested for GH-axis assessment. Its utility in aging contexts is substantially complicated by a **U-shaped longevity relationship** — both very low and very high levels are associated with adverse outcomes, but the adverse poles differ by age group and outcome type. Interpreting a single IGF-1 result requires age, sex, and clinical context. Cross-links for molecular biology: [[../molecules/proteins/igf-1]] (protein page); [[../pathways/insulin-igf1]] (IIS pathway signaling).

## Identity and Measurement

- **Protein:** IGF-1 (UniProt P05019); 70-amino-acid mature peptide, liver-derived (~75–80% of circulating pool)
- **Alternative name:** Somatomedin C (historical)
- **Units:** ng/mL (SI equivalent: nmol/L; conversion — 1 ng/mL ≈ 0.131 nmol/L, or multiply ng/mL by 0.131 to get nmol/L)
- **Sample type:** Serum preferred; EDTA plasma acceptable but values ~10–15% lower
- **Assay:** Multiple immunoassay platforms (chemiluminescent, ELISA, RIA); assay-to-assay agreement is moderate (concordance κ 0.38–0.70 across six major platforms in n=911 healthy adults) [^chanson2016], meaning absolute values are not interchangeable across labs. **Serial monitoring should use the same assay/lab.**
- **Pre-analytical sensitivity:** Morning fasting sample preferred (GH/IGF-1 show diurnal variation). IGF-1 is more stable than GH itself — half-life ~12–15 hours vs ~20 minutes for GH.
- **IGFBP-3:** ~80% of circulating IGF-1 is bound to the IGF binding protein 3 (IGFBP-3) / ALS ternary complex; some clinical labs report IGF-1/IGFBP-3 molar ratio as an index of free (bioavailable) IGF-1 activity (see § IGFBP-3 context below).

## The Longevity Paradox: Why IGF-1 Is Both Pro-Longevity and Pro-Mortality

The fundamental interpretive challenge for serum IGF-1 in aging is that two bodies of evidence point in opposite directions:

**Animal model evidence (reduce IGF-1 = longer life):** Reduced insulin/IGF-1 signaling (IIS) extends lifespan in *C. elegans* (daf-2 mutant, up to +100% lifespan), *Drosophila* (InR/chico mutants, +85%), and multiple mouse models (Ames dwarf, Snell dwarf, *Igf1r*+/− [+26% median lifespan in females], FIRKO). This is one of the most phylogenetically conserved longevity findings in biology. See [[../pathways/insulin-igf1]] and [[../hallmarks/deregulated-nutrient-sensing]] for mechanistic detail.

**Human cohort evidence — the U-shape:** Low serum IGF-1 in elderly humans is consistently associated with *increased* all-cause mortality, frailty, and sarcopenia. This is not a contradiction of the animal data — it reflects the biology of the aging somatotropic axis and the frailty confound. The resolution lies in the distinction between **lifelong** low IIS (the animal intervention model) vs **acquired** low IGF-1 in late life (a marker of liver dysfunction, GH deficiency, malnutrition, and frailty). The U-shaped curve emerges because:

- **Left tail (very low IGF-1 in elderly):** Low IGF-1 is a marker of ill-health, hepatic dysfunction, frailty, and malnutrition — not a longevity signal. It predicts increased mortality, cardiovascular disease, and sarcopenia.
- **Right tail (high IGF-1 at mid-life):** Elevated IGF-1 drives mitogenic and anabolic signaling that increases cancer risk (prostate, breast, colon).
- **Centenarian data:** Provides the key nuance — certain longevity-associated genetic variants *reduce* IGF-1 levels in a lifelong fashion (not acquired), and this *is* associated with survival (see § Centenarian cohort data below).

## Cohort Evidence: The U-Shape in Humans

### Low IGF-1 / High Mortality in Elderly Cohorts

**van Bunderen 2010 (LASA, n=1,273, elderly ≥65 yr, 11.6-yr follow-up):** Low IGF-I (vs. middle quintile) associated with all-cause mortality HR 1.28 (95% CI 1.01–1.63). Lowest quintile associated with CVD mortality HR 2.39 (95% CI 1.22–4.66). High-normal IGF-I also associated with CVD mortality HR 2.03 (95% CI 1.02–4.06), confirming the U-shape [^vanbunderen2010].

**Friedrich 2011 (DETECT, n=6,066 German primary care patients):** U-shaped relationship in men — both low-IGF-I HR 1.70 (95% CI 1.05–2.73, p=0.03) and high-IGF-I HR 1.76 (95% CI 1.09–2.85, p=0.02) groups showed increased all-cause mortality versus the middle tertile. No association in women (sex difference is a recurring finding across multiple studies) [^friedrich2011].

**Svensson 2012 (MrOS Sweden, n=2,901 elderly men, mean age 75, 6.0-yr follow-up):** U-shaped association with cancer mortality — low quintile HR 1.86 (95% CI 1.34–2.58), high quintile HR 1.90 (95% CI 1.37–2.65) for cancer deaths. Low IGF-I also associated with CVD mortality HR 1.48 (95% CI 1.08–2.04) [^svensson2012]. #gap/needs-replication — these are men only; the female sex does not consistently show the same U-shape pattern.

**Brugts 2008 (prospective, n=376 healthy elderly men, ages 73–94, 8.6-yr follow-up):** Lowest IGF-I bioactivity quartile associated with mortality HR 1.8 (95% CI 1.2–2.8) vs highest quartile; effect was stronger in those with cardiovascular disease (HR 2.4) [^brugts2008].

### High IGF-1 / Cancer Risk at Mid-Life

**Renehan 2004 (Lancet, systematic review, 21 studies, 3,609 cases, 7,137 controls):** High IGF-I associated with increased prostate cancer OR 1.49 (95% CI 1.14–1.95); premenopausal breast cancer OR 1.65 (95% CI 1.26–2.08) [^renehan2004]. This is the foundational meta-analysis establishing IGF-1's cancer associations. Note: observational; confounding by diet, body composition, and metabolic health cannot be excluded.

**Watts 2022/2023 (Int J Epidemiology 2023 Vol 52, 20 prospective studies + MR, prostate cancer):** Two-sample MR using UK Biobank IGF-1 instruments (n=158,444 men) confirmed genetically-predicted IGF-I positively associated with prostate cancer risk: OR per 1 SD = 1.07 (95% CI 1.00–1.15, P=0.05) for overall; 1.10 (95% CI 1.01–1.20, P=0.04) for aggressive; 1.13 (95% CI 0.98–1.30, P=0.08) for early-onset (note: early-onset result did not reach conventional significance). Colocalization PP4=99% (SuSiE method), supporting a causal signal [^watts2022]. This is strong evidence that the IGF-1 / overall and aggressive prostate cancer association is not purely confounded.

### Centenarian and Longevity-Family Data

**Milman 2014 (Aging Cell, n=184 nonagenarians, Ashkenazi Jewish cohort):** In women with exceptional longevity, serum IGF-1 below the median (≤96 ng/mL) predicted significantly longer survival (P<0.01). No male effect (P=0.83). Among individuals with prior cancer diagnoses, lower IGF-1 predicted better survival in both sexes (P<0.01) [^milman2014]. This is the most-cited human evidence that low IGF-1 predicts life expectancy in exceptionally long-lived individuals.

**Vitale 2012 (Aging, n=192 centenarians' offspring vs 80 controls, Italian cohort):** Offspring of centenarians showed significantly lower circulating IGF-I bioactivity (p<0.01), lower total IGF-I (p<0.01), and lower IGF-I/IGFBP-3 molar ratio (p<0.001) compared to matched controls whose parents died before average life expectancy. No difference in serum insulin, glucose, or insulin sensitivity (HOMA2-S%) between groups [^vitale2012]. Suggests lifelong-low IIS, not acquired deficiency, distinguishes longevity-enriched families. Note: this is an Italian cohort (Milan/Bologna/Florence); the Ashkenazi longevity cohort data are from Milman 2014.

**Ali 2025 (Scientific Reports, n=2,108 Ashkenazi):** Two functional IGF-1 coding variants (p.Ile91Leu and p.Ala118Thr) enriched in centenarians; both attenuate IGF-1R activity by reducing binding affinity or reducing circulating IGF-1 levels. Supports the view that genetically-driven reduction of IGF-1 signaling contributes to exceptional human longevity [^ali2025]. #gap/needs-replication — preprint version had larger n; peer-reviewed version n=2,108; independent replication in a non-Ashkenazi population needed.

**Key interpretive note:** The centenarian data show that *constitutively* low IGF-1 (driven by genetics or lifelong dietary patterns) can be pro-longevity, while *acquired* low IGF-1 in late life (from liver disease, frailty, malnutrition) is an adverse marker. Serum IGF-1 alone cannot distinguish these; clinical context is essential. #gap/contradictory-evidence

## Reference Ranges by Age and Sex

IGF-1 peaks during puberty and then declines monotonically throughout adult life. Sex differences are present but not as large as the age effect; women have slightly lower values than men in middle age, and the sex gap narrows with older age.

The following ranges are approximate and **assay-dependent**; values below are from general clinical reference intervals for immunochemiluminescent assays (ICMA). Different laboratories use different methods — always interpret against the reporting lab's own reference intervals [^chanson2016].

| Age decade | Males (ng/mL, approximate 2.5–97.5th percentile) | Females (ng/mL, approximate 2.5–97.5th percentile) |
|---|---|---|
| 18–29 | 115–490 | 115–510 |
| 30–39 | 100–370 | 90–360 |
| 40–49 | 85–315 | 75–290 |
| 50–59 | 70–255 | 60–245 |
| 60–69 | 60–200 | 55–185 |
| 70–79 | 50–175 | 45–165 |
| 80+ | 40–155 | 35–145 |

**Interpretation caveats:**
- Values above the age-adjusted upper limit suggest acromegaly or exogenous GH/GHS exposure (e.g., MK-677 use)
- Values below the lower limit in the absence of malnutrition/liver disease suggest GH deficiency
- For aging biomarker purposes, the relevant zone is *within* reference range but positional (upper vs lower tertile) in relation to mortality risk

**Conversion note:** To convert ng/mL to nmol/L, multiply by 0.131. To convert nmol/L to ng/mL, multiply by 7.65.

## IGFBP-3 Context

~80% of circulating IGF-1 is bound in a ternary complex with **IGFBP-3** and the acid-labile subunit (ALS). IGFBP-3 is the dominant serum IGF-1 binder; it extends IGF-1's half-life from minutes to hours and modulates bioavailability.

The **IGF-1/IGFBP-3 molar ratio** is sometimes used as an index of free, bioavailable IGF-1 activity. Some cancer epidemiology studies find the molar ratio better predicts cancer risk than either analyte alone (Renehan 2004). Some clinical contexts (GH deficiency diagnosis, acromegaly monitoring) use IGFBP-3 as a confirmatory analyte alongside IGF-1.

For aging-biomarker purposes, the literature is more mature for total serum IGF-1 than for the molar ratio. IGFBP-3 interpretation is further complicated by its IGF-1-independent effects (pro-apoptotic, anti-proliferative in some contexts). #gap/needs-replication — prospective cohort validation of the IGF-1/IGFBP-3 molar ratio as an aging biomarker is less robust than for total IGF-1 alone.

## Intervention Responsiveness

### Caloric restriction (CR) — modest effect, protein-dependent

**2-year CR (Fontana 2016 CALERIE, n=218 randomized, nonobese adults):** 2-year ~25% caloric restriction increased IGFBP-1 by 21% (p<0.008) and reduced the IGF-1:IGFBP-1 ratio by 42%, but **did not significantly change absolute serum IGF-1 levels** [^fontana2016]. This is a critical finding: short-to-medium-term caloric restriction in humans does not lower circulating IGF-1 the way it does in rodents. The IGF-1 system appears to be largely protein-regulated in humans, not calories-regulated.

**Protein restriction — primary driver of IGF-1 in humans (Fontana 2008, Aging Cell):** Reducing protein intake from ~1.67 to 0.95 g/kg/day in healthy adults reduced serum IGF-1 from 194 to 152 ng/mL (~22% decrease) over 3 weeks [^fontana2008]. Caloric restriction alone (without protein reduction) did not lower IGF-1. This has important implications: CR diets that maintain high protein intake (including many clinical CR trials) will not lower IGF-1. Note: Fontana 2016 cites this paper as "reducing protein intake from 1.6 to 0.95 g/kg/day" — minor discrepancy in starting value; PDF of Fontana 2008 unavailable for direct verification. #gap/needs-replication — sample sizes in Fontana 2008 were small; the protein restriction effect on IGF-1 needs confirmation in larger cohorts.

**The Fontana 2008 finding creates a genuine tradeoff with the lean-mass-preservation rationale for higher protein intake (1.6–2.0 g/kg/day during energy deficit; Morton 2018 meta + Longland 2016 deficit RCT).** See [[../interventions/lifestyle/protein-intake]] § *Tradeoffs and competing-direction evidence* for the full framing — lean-mass preservation during deficit + sarcopenia-prevention favors higher protein, while pure-longevity-pathway-modulation (IGF-1 + mTORC1 suppression) favors lower protein. The choice is goal-dependent; the wiki does not take a position that one direction is uniformly correct.

### Rapamycin — indirect IGF-1 feedback elevation

Rapamycin (mTORC1 inhibitor) creates a feedback loop that can paradoxically *increase* serum IGF-1 and insulin levels in some contexts. mTORC1 inhibition reduces S6K1 → reduces IRS-1 serine phosphorylation feedback inhibition → increases PI3K/AKT signaling upstream of mTORC1. Additionally, mTORC1 inhibition reduces GH receptor shedding, increasing GH sensitivity. The net clinical effect on serum IGF-1 in aging-relevant rapamycin doses is context-dependent and not definitively established in long-term human data. See [[../molecules/compounds/rapamycin]] for trial data. #gap/long-term-unknown

### MK-677 (ibutamoren) — raises IGF-1 to young-adult levels

MK-677 (ghrelin receptor agonist, GH secretagogue) at 25 mg/day **raised serum IGF-1 from a mean of ~141 to ~265 µg/L** (~88% increase, restoring to young-adult reference range) in healthy elderly subjects (ages 64–81) over 4 weeks [^chapman1996]. A subsequent Phase IIb trial in elderly hip-fracture patients (n=~123, 25 mg/day) confirmed a 51.4 ng/mL increase in IGF-1 vs placebo, but the trial was terminated early due to congestive heart failure safety signals [^adunsky2011]. See [[../molecules/compounds/mk-677]] for full pharmacology. Elevated IGF-1 from MK-677 represents an anabolic context distinct from the constitutive low-IGF-1 longevity-associated state.

### Exercise — variable, muscle-specific effects

Resistance exercise acutely raises serum IGF-1 (particularly locally in muscle, where the mechanically-stimulated IGF-1 splice variant mechano-growth factor [MGF] is produced). The systemic serum effect of chronic exercise on baseline IGF-1 is modest and inconsistent in elderly populations. #gap/unsourced — systematic review of exercise-IGF-1 effects in elderly populations needed for precise effect sizes.

## Mendelian Randomization Evidence

**Prostate cancer (Watts 2022/2023, IJE):** Genetically-predicted IGF-1 causally increases prostate cancer risk — OR 1.07 per SD (95% CI 1.00–1.15; overall), 1.10 (95% CI 1.01–1.20; aggressive disease); early-onset OR 1.13 (95% CI 0.98–1.30; P=0.08, non-significant); colocalization PP4=99% (SuSiE) [^watts2022]. Strongest causal evidence is for overall and aggressive disease; the early-onset association did not reach significance in MR. This is the most rigorous causal evidence linking IGF-1 to cancer and is a key argument for keeping mid-life serum IGF-1 in the population-optimal range (not elevated).

**Premenopausal breast cancer:** Multiple MR studies have confirmed a causal relationship between genetically-elevated IGF-1 and premenopausal breast cancer risk, consistent with Renehan 2004 observational data. #gap/unsourced — specific MR DOI needed; the breast cancer IGF-1 MR literature is extensive but the strongest study needs individual citation.

**Longevity:** The MR literature for IGF-1 and longevity/mortality is less definitive than for cancer. Genetic variants reducing IGF-1 signaling (e.g., via IGF-1R or GHR loss-of-function) are rare and not easily captured by common-variant GWAS instruments. The Milman/Vitale centenarian data are family-based, not GWAS-based; they do not constitute formal MR evidence.

## Confounders and Analytical Limitations

1. **Liver disease:** Serum IGF-1 is predominantly hepatic in origin. Any condition reducing hepatic synthetic function (cirrhosis, hepatitis, non-alcoholic fatty liver disease with advanced fibrosis) will lower serum IGF-1 independently of GH axis function or aging per se. Low IGF-1 in the context of liver disease is not interpretable as a longevity signal. #gap/needs-replication — quantitative effect of NAFLD stage on IGF-1 needs better characterization.

2. **GH deficiency:** Adults with GH deficiency from pituitary disease have very low IGF-1 (<63 ng/mL, or <2 SD below mean for age) with increased cardiovascular mortality risk — the adverse "low IGF-1" signal is partly driven by this pathological state, not physiological aging trajectories.

3. **Obesity:** Excess adiposity suppresses hepatic GH receptor expression (GH resistance), reducing IGF-1 despite normal or elevated GH pulse amplitude. Obese individuals have lower IGF-1 for their GH output.

4. **Assay variability:** As noted in § Identity and Measurement, cross-assay concordance is moderate. Absolute values from different labs are not directly comparable.

5. **Sex-specific effects:** The U-shaped mortality association is more consistently observed in men than women (Friedrich 2011, van Bunderen 2010). Women show a different pattern, possibly because estrogen modulates GH sensitivity and IGFBP profiles differently. Centenarian survival advantage for low IGF-1 was female-specific in Milman 2014.

6. **Acute illness, malnutrition, inflammation:** IGF-1 is a negative acute-phase reactant. Any inflammatory illness, hospitalization, or protein-energy malnutrition will acutely lower serum IGF-1. A low IGF-1 measured during or shortly after an acute illness does not reflect a stable baseline.

## Use as Pre-Rapamycin Baseline (R35 Context)

Serum IGF-1 is recommended as a **pre-intervention baseline** before initiating rapamycin or other mTOR pathway modulators, for two reasons:

1. **Rapamycin-IIS interaction:** mTORC1 inhibition interacts with the IGF-1/IRS-1 axis (via S6K1 serine phosphorylation feedback); baseline IGF-1 establishes the starting point of the GH/IGF-1 axis before modulation.
2. **Anabolic monitoring:** Low-dose rapamycin's effects on muscle anabolism and insulin sensitivity are partly mediated through the somatotropic axis. Tracking IGF-1 longitudinally helps distinguish rapamycin-attributable changes from baseline variability.

Suggested monitoring: baseline + 3-month + 12-month draws using the same laboratory. Flag if IGF-1 rises above age-adjusted upper tertile (potential mTORC1 inhibitor-driven GH feedback overshoot) or falls below lower quintile (potential frailty or hepatic signal requiring investigation). See also [[../molecules/compounds/rapamycin]] and [[../interventions/pharmacological/mtor-inhibitors]] for trial context.

## Hallmark Linkage

Primary hallmark: [[../hallmarks/deregulated-nutrient-sensing]] — serum IGF-1 is the circulating effector of the growth hormone / somatotropic axis and the primary systemic indicator of IIS tone. Elevated mid-life IGF-1 reflects heightened nutrient-sensing anabolic drive; constitutively lowered IGF-1 characterizes longevity-extended model organisms and some centenarian families. Secondary relevance to [[../hallmarks/cellular-senescence]] (IGF-1 modulates SASP and senescence induction) and [[../hallmarks/loss-of-proteostasis]] (IGF-1/mTOR drives protein synthesis rate, relevant to proteostatic burden).

## Limitations and Open Questions

1. **U-shape inflection point undefined:** The IGF-1 range associated with minimum mortality risk in elderly populations has not been prospectively established in an intervention trial. Observational data suggest the middle tertile (~100–170 ng/mL for age 65–75, varying by assay), but this is not a therapeutic target [^vanbunderen2010] [^svensson2012]. #gap/dose-response-unclear

2. **No RCT evidence for IGF-1 as intervention target:** There are no completed RCTs demonstrating that pharmacologically adjusting IGF-1 to a target range improves mortality or healthspan in otherwise-healthy older adults. The MK-677 hip-fracture trial [^adunsky2011] suggests that restoring IGF-1 to young-adult levels has safety risks.

3. **Longitudinal vs cross-sectional ambiguity:** All cohort associations above are from cross-sectional or single-baseline IGF-1 measurement. Whether within-individual rate of IGF-1 decline with age matters more than absolute level is not established.

4. **Causal direction in elderly cohorts unclear:** In elderly low-IGF-1 / high-mortality associations, it is plausible that underlying frailty lowers IGF-1 (reverse causation) rather than low IGF-1 causing mortality. MR evidence for the longevity end of the U-shape is absent.

5. **Assay standardization not achieved:** Until all major labs use the same standardized IGF-1 reference preparation, published reference intervals (and population-level observational findings) are not directly interchangeable. #gap/dose-response-unclear

## Cross-references

- [[../molecules/proteins/igf-1]] — protein biology, structural domains, animal lifespan data, receptor interactions
- [[../molecules/proteins/igf1r]] — IGF-1 receptor; longevity-associated loss-of-function variants
- [[../pathways/insulin-igf1]] — IIS pathway signaling; cross-species conservation
- [[../hallmarks/deregulated-nutrient-sensing]] — primary hallmark context
- [[../molecules/compounds/rapamycin]] — mTOR inhibitor; interaction with IGF-1 axis
- [[../molecules/compounds/mk-677]] — GH secretagogue; raises IGF-1 to young-adult levels; safety signals
- [[../biomarkers/frailty-index]] — related clinical composite; shares low-IGF-1 / frailty overlap in elderly
- [[../frameworks/biological-age-measurement]] — cross-biomarker comparison MOC

## Footnotes

[^milman2014]: doi:10.1111/acel.12213 · Milman S et al. · Aging Cell 2014 Vol 13 pp769–771 · n=184 Ashkenazi Jewish nonagenarians (median age ~96.7–96.8 yr; low IGF-1 group n=93, high IGF-1 group n=91; dichotomized at median 96 ng/mL) · observational, Kaplan–Meier survival analysis · IGF-1 ≤96 ng/mL predicted longer survival in women (P<0.01); no male effect (P=0.83); cancer subgroup (positive malignancy history): lower IGF-1 predicted better survival in both sexes (P<0.01; median survival 49.6 vs 20.7 months); no-malignancy subgroup: trend only (P=0.42) · multivariable linear regression confirmed IGF-1 as independent predictor in females (P=0.01) and cancer subgroup (P<0.01) · model: humans, exceptional-longevity Ashkenazi cohort (Albert Einstein College of Medicine) · archive: downloaded (gold OA)

[^vanbunderen2010]: doi:10.1210/jc.2010-0940 · van Bunderen CC et al. · JCEM 2010 · n=1,273 elderly ≥65 yr (LASA cohort); 11.6-year follow-up · observational cohort · low IGF-I HR 1.28 (95% CI 1.01–1.63) all-cause mortality vs middle quintile; low-normal IGF-I CVD mortality HR 2.39 (1.22–4.66); high-normal HR 2.03 (1.02–4.06) · model: humans, community-dwelling elderly · archive: failed download (JCEM paywall) #gap/no-fulltext-access — HR values not verified against PDF

[^friedrich2011]: doi:10.1016/j.ghir.2011.02.003 · Friedrich N et al. · Growth Hormone & IGF Res 2011 · n=6,066 (2,463 men, 3,603 women; DETECT primary care study) · observational cohort · men: low IGF-I HR 1.70 (1.05–2.73, p=0.03); high IGF-I HR 1.76 (1.09–2.85, p=0.02) vs middle tertile; U-shaped in males only, no association in females · model: humans, primary care · archive: closed access (not_oa) #gap/no-fulltext-access — HR values not verified against PDF

[^svensson2012]: doi:10.1210/jc.2012-2329 · Svensson J et al. · JCEM 2012 · n=2,901 elderly men, mean age 75.4 yr (Swedish MrOS); mean 6.0-yr follow-up; 586 deaths · observational cohort · cancer mortality: low quintile HR 1.86 (1.34–2.58), high quintile HR 1.90 (1.37–2.65); CVD mortality: low quintile HR 1.48 (1.08–2.04) only · model: humans, elderly men · archive: failed download (JCEM paywall) #gap/no-fulltext-access — HR values not verified against PDF

[^brugts2008]: doi:10.1210/jc.2007-1633 · Brugts MP et al. · JCEM 2008 · n=376 healthy elderly men ages 73–94; 8.6-yr follow-up; 170 deaths (45%) · observational cohort · lowest IGF-I bioactivity quartile: HR 1.8 (1.2–2.8) vs highest; cardiovascular subgroup HR 2.4 · model: humans, elderly men · archive: not checked

[^renehan2004]: doi:10.1016/S0140-6736(04)16044-3 · Renehan AG et al. · Lancet 2004 · systematic review + meta-regression; 21 studies, 26 datasets; 3,609 cases, 7,137 controls · meta-analysis · high IGF-I: prostate cancer OR 1.49 (1.14–1.95); premenopausal breast cancer OR 1.65 (1.26–2.08); colorectal cancer association also noted · model: humans · archive: closed access (not_oa) #gap/no-fulltext-access — quantitative claims not verified against PDF; values corroborated by secondary citation in Fontana 2016 · citation count: 1,685 (100th percentile)

[^watts2022]: doi:10.1093/ije/dyac124 · Watts EL et al. · Int J Epidemiology 2023 Vol 52(1) pp71–86 (accepted May 2022; PMID 35726641) · up to 20 prospective studies (17,009 overall cases, 2,332 aggressive cases) + two-sample MR (UK Biobank instruments n=158,444 men; PRACTICAL consortium up to 85,554 cases) · mendelian-randomization + meta-analysis · genetically predicted IGF-I MR (IVW): overall OR per SD 1.07 (95% CI 1.00–1.15, P=0.05); aggressive OR 1.10 (95% CI 1.01–1.20, P=0.04); early-onset OR 1.13 (95% CI 0.98–1.30, P=0.08, non-significant); colocalization PP4=99% (SuSiE); observational OR per 1 SD = 1.09 (95% CI 1.07–1.11) for overall · model: humans (White European ancestry) · archive: downloaded (gold OA via PMC)

[^vitale2012]: doi:10.18632/aging.100484 · Vitale G et al. · Aging (Albany NY) 2012 · n=192 centenarians' offspring vs 80 controls (both parents died before average life expectancy; matched for age, sex, BMI) · observational cross-sectional · centenarians' offspring: significantly lower IGF-I bioactivity (p<0.01), total IGF-I (p<0.01), and IGF-I/IGFBP-3 molar ratio (p<0.001) vs matched controls; serum insulin, glucose, HOMA2-B%, HOMA2-S% no difference · model: humans, Italian multicenter longevity cohort (Milan, Bologna, Florence) — NOT Ashkenazi (Ashkenazi cohort = Milman 2014) · archive: downloaded (gold OA via PMC)

[^ali2025]: doi:10.1038/s41598-025-94094-y · Ali A et al. · Scientific Reports 2025 · n=2,108 Ashkenazi Jewish (centenarians + controls) · observational genetic · IGF-1:p.Ile91Leu (reduces IGF-1R binding affinity) and p.Ala118Thr (reduces circulating IGF-1 levels) enriched in centenarians; both variants attenuate IGF-1R signaling · model: humans · archive: not yet checked

[^fontana2016]: doi:10.1111/acel.12400 · Fontana L et al. · Aging Cell 2016 Vol 15 pp22–27 (accepted 2015) · n=218 randomized nonobese adults (143 CR, 75 AL control); ages 20–50 (men) / 20–47 (women); BMI 22–27.9 kg/m²; 2-year CALERIE Phase 2 sub-study · rct (NCT00427193) · IGFBP-1: +21% at 2 yr in CR group (between-group P=0.005); IGF-1:IGFBP-1 ratio: −42% (between-group P=0.008); absolute IGF-1: no significant change (between-group P=0.919 at 24 mo); cortisol: slight elevation at 1 yr only (between-group P=0.003 at 12 mo; not significant at 24 mo); protein intake increased in CR group (possible explanation for no IGF-1 drop) · model: humans · archive: downloaded (gold OA via PMC)

[^fontana2008]: doi:10.1111/j.1474-9726.2008.00417.x · Fontana L et al. · Aging Cell 2008 · cross-group comparison of CR-only vs protein-restricted adults; protein reduction from 1.67→0.95 g/kg/day reduced IGF-1 from 194→152 ng/mL (~22%) over 3 weeks; CR alone did not reduce IGF-1 · observational comparison · model: humans · archive: failed download #gap/no-fulltext-access — specific values (1.67→0.95 g/kg/day, 194→152 ng/mL) not verified against PDF; also cited in Fontana 2016 text ("reducing protein intake from 1.6 to 0.95 g/kg/day") — minor discrepancy in starting protein value (1.67 vs 1.6 g/kg/day) vs Fontana 2016 summary, likely rounding · citation count: 391 (100th percentile)

[^chapman1996]: doi:10.1210/jcem.81.12.8954023 · Chapman IM et al. · JCEM 1996 · n=~32 healthy elderly adults ages 64–81; 4-week MK-677 25 mg/day · rct (crossover) · IGF-1 raised from mean 141→265 µg/L (88% increase to young-adult range); pulsatile GH secretion restored · model: humans, elderly · archive: closed access (not_oa) · citation count: 260

[^adunsky2011]: doi:10.1016/j.archger.2010.10.004 · Adunsky A et al. · Arch Gerontol Geriatr 2011 · n=~123 (trial terminated early); elderly hip-fracture patients; MK-677 25 mg/day Phase IIb RCT · rct · IGF-1 increased +51.4 ng/mL vs placebo; functional improvements limited; trial terminated early due to congestive heart failure safety signal · model: humans, frail elderly · archive: not checked

[^chanson2016]: doi:10.1210/jc.2016-1257 · Chanson P et al. · JCEM 2016 Vol 101(9) pp3450–3458 (VARIETE study) · n=911 healthy French adults ages 18–90 (~100 subjects per decade); 6 immunoassay platforms compared (iSYS, LIAISON XL, IMMULITE, IGFI RIACT, Mediagnost ELISA, Mediagnost RIA) · observational cross-platform comparison · pairwise concordance κ 0.38–0.70; lower limits similar across assays; upper limits varied markedly (up to 2.5-fold difference between platforms) · model: humans · archive: downloaded (HAL open science preprint)
