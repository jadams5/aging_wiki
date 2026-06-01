---
type: biomarker
aliases: [GlycanAge, IgG glycan age, glycoclock, Kristic 2014 glycan clock, IgG galactosylation aging, glycan age index]
modality: proteomic
unit: years
training-cohort: "Kristic 2014: 5,117 individuals across 4 European populations (Orkney/ORCADES n=2,035; TwinsUK n=1,261; Vis n=915; Korcula n=906); model trained on Orkney, validated on the other three. Note: the 2014 paper was published in J Gerontol Series A (online December 2013); the '2017' designation in this filename reflects the GlycanAge Ltd. commercial assay launch year."
n-cpgs-or-features: 24
training-target: chronological-age
calibration-tissues: ["[[blood]]"]
test-retest-icc: null
human-evidence-level: limited
mendelian-randomization: not-tested
intervention-responsive: yes
literature-checked-through: 2026-05-20
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "All six primary sources verified against downloaded PDFs (Kristic 2014, Jurić 2020, Greto 2021, Simunić-Briški 2024, Rapcan 2024, Murray 2023, Memarian 2023). Canonical-database identity fields not applicable (no PubChem/UniProt for biomarker pages). Schema note: modality field uses 'proteomic' as placeholder — CLAUDE.md does not enumerate 'glycomic'; recommend adding 'glycomic' to the modality enum. Mijakovac 2022 (heritability) and secondary review papers (Kristic/Lauc review 2022, Lauc 2024 expert opinion, Zhang 2026 review) not independently verified against PDFs — claims from these are review-level and lower load-bearing weight. UPDATE 2026-05-20: section '2026 update — Mijakovac/Lauc preprint' added from medRxiv preprint PDF (fetched 2026-05-20); claims in that section are abstract+PDF-level but unverified pending peer review — #gap/needs-peer-review applies throughout."
---

# GlycanAge (Kristic 2014 glycan clock)

GlycanAge is an IgG N-glycan profiling-based biological aging clock. It measures the pattern of sugar molecules (N-glycans) attached to the Fc region of serum IgG antibodies, which shifts systematically with age in a way that reflects inflammatory tone: agalactosylated (G0) glycoforms rise with age and drive pro-inflammatory signaling, while digalactosylated (G2) and sialylated glycoforms decline. The foundational Kristic 2014 study showed that three IgG glycan peaks (GP6, GP14, GP15) together explained up to 58% of variance in chronological age (R²=57.8% [95% range 54.1–61.3%] in the Orkney training cohort; 41–50% when validated across the three other cohorts) — substantially more than telomere length — across 5,117 individuals from four European populations [^kristic2014]. The clock is commercially available through GlycanAge Ltd. (UK, ~$300 direct-to-consumer) and is notable as the most rapidly intervention-responsive aging clock yet characterized: glycan age shifts within weeks-to-months of lifestyle change, in contrast to the years-timescale response expected from DNA methylation clocks [^juric2020].

The platform is technically glycomic (sugar-level measurement) rather than proteomic in the standard mass-spectrometry-of-peptides sense, though the biomarker type is listed as `proteomic` per CLAUDE.md convention. See Limitations section for the schema note.

## Identity and Origin

- **Primary citation:** Kristic J et al. (2014) *J Gerontol Biol Sci Med Sci* 69(7):779–789 — doi:10.1093/gerona/glt190
- **Archive status:** downloaded (verified against PDF 2026-05-09)
- **Citation count:** 374 (Crossref, 2026-05-07; high-impact for the field)
- **Clock type:** First-generation glycomic (chronological-age trained)
- **First/senior authors:** Jasminka Kristic, Gordan Lauc (Genos Glycoscience Research Laboratory, Zagreb; University of Zagreb)
- **Measurement platform (primary):** UPLC (ultra-performance liquid chromatography) — separates IgG N-glycans by charge/mass into 24 chromatographic peaks (GP1–GP24); subsequent commercial version uses capillary gel electrophoresis (CGE-LIF) for higher throughput
- **Training cohorts:** Four European populations — Orkney Islands/ORCADES (n=2,035, Scotland; training set); Vis (n=915, Croatian island); Korcula (n=906, Croatian island); TwinsUK (n=1,261, UK; female twins). Total n=5,117. Model trained on two thirds (n≈1,357) of Orkney, validated on one third of Orkney and on the other three cohorts.
- **Commercial entity:** GlycanAge Ltd. (UK); biomarker sold as direct-to-consumer test; proprietary normalization pipeline applied to raw glycan peaks

## Glycan Architecture and the Aging Signal

IgG antibodies carry a conserved N-glycan attached to Asn297 of each heavy-chain Fc region. The composition of this glycan — specifically whether it carries galactose and sialic acid residues — directly modulates how IgG interacts with Fc-gamma receptors (FcγR) and complement. See **[[igg-fc-glycosylation]]** for the full enzymology ([[fut8|FUT8]] / [[mgat3|MGAT3]] / [[b4galt1|B4GALT1]] / [[st6gal1|ST6GAL1]] cascade), Asn297 glycan structural detail, FcγR effector-function tuning, sex-hormone and inflammation regulation, and disease-association catalog. This biomarker page focuses on measurement and intervention-responsiveness; the mechanism page hosts the underlying biology.

### Age-associated glycan shifts

| Glycan feature | Direction with age | Functional consequence |
|---|---|---|
| G0 (agalactosylated, no terminal galactose) | Rises | Pro-inflammatory; activates lectin pathway of complement; enhances FcγRIII binding → ADCC; triggers MBL binding |
| G1 (monogalactosylated) | Variable | Intermediate phenotype |
| G2 (digalactosylated, two terminal galactoses) | Falls | Anti-inflammatory; inhibits FcγRIII-driven ADCC; activates DC-SIGN → Treg promotion |
| Sialylation (SA, NANA) | Falls | Anti-inflammatory; mediates inhibitory ITAM signaling via DC-SIGN; drives resolution-phase cytokine shift |
| Core fucosylation | Generally stable | Modulates ADCC; not the primary aging signal |

The **G0/G2 ratio** is the dominant aging-associated signal in the IgG glycome. Its rise with age mirrors and likely contributes to the [[hallmarks/chronic-inflammation|inflammaging]] trajectory [^kristicreview2022].

### Mechanism: IgG glycosylation as an effector of inflammaging

The causal direction is plausibly bidirectional:

1. **Glycans drive inflammation** — Agalactosylated IgG (G0) binds mannose-binding lectin (MBL), activating complement, and preferentially engages activating FcγRIIIA (CD16), increasing ADCC and pro-inflammatory cytokine release (TNF-α, IL-6). This may establish a self-amplifying loop where systemic inflammation drives further glycan loss [^lauc2024expert].

2. **Inflammation drives glycan loss** — IL-6, TNF-α, and other pro-inflammatory cytokines down-regulate the glycosyltransferases responsible for galactose and sialic acid addition (B4GALT1, ST6GAL1). Gut microbiome dysbiosis associated with aging may compound this via reduced SCFA signaling to glycosyltransferase-expressing B cells [^zhang2026].

This bidirectional loop positions IgG glycosylation as both a read-out of and an amplifier of the inflammaging hallmark — distinct from purely epigenetic clocks, which record accumulated damage without directly modulating downstream biology.

## Training and Validation

### Kristic 2014 core findings

The foundational study measured IgG N-glycans by UPLC in 5,117 individuals from four European populations (largest by n: Orkney/ORCADES n=2,035; training cohort) [^kristic2014]. Key quantitative results:

- Three IgG glycan traits (GP6: non-galactosylated; GP14: digalactosylated without bisecting GlcNAc; GP15: digalactosylated with bisecting GlcNAc) together explained **up to 58% of variance in chronological age** (R²=57.8% [95% subsampling range 54.1–61.3%] in the Orkney training cohort; 41.5–50.6% in cross-population validation) — substantially more than telomere length (which explained 15–25% in the same period's literature); correlation between age and predicted age was 0.76 overall (0.73–0.78 across 1,000 resampling iterations)
- The GlycanAge index predicts age with a standard deviation of residuals of 9.7 years in the Orkney full dataset
- The glycan variance attributable to biological (as opposed to chronological) aging — inferred from residual variation after age adjustment — correlated with classical physiological aging markers including insulin, HbA1c, BMI, triglycerides, and waist circumference (Table 2 of the paper)
- IgG galactosylation was found to be a sex-dimorphic trait: women show higher baseline galactosylation than age-matched men and experience sharper decline in the age range 45–55 years when the majority of women enter menopause; predictive power was better for women (64% variance explained) than men (49%)

**Caveat:** The 58% variance explained is for an age-prediction regression trained on Orkney and validated by repeated random subsampling; cross-population validation yielded 41–50% R². The GlycanAge Ltd. commercial assay applies a proprietary normalization pipeline; results may not be directly comparable to published research models. #gap/needs-replication

### Analytical precision (Rapcan 2024)

Rapcan et al. 2024 (GeroScience) systematically assessed GlycanAge analytical performance using CGE-LIF-based measurement [^rapcan2024]. Three plasma pool samples were analyzed in tetraplicate across 26 days (312 replicates total) for analytical precision; short-term stability was assessed in a young AstraZeneca MFO cohort (median age 20) over 3 months; long-term stability was assessed by two adult males monitored for 5 and 10 years respectively. Key findings: intermediate precision consistently showed very low coefficients of variation across all three test samples ("remarkably high" precision); the short-term cohort showed no statistically significant trends; the long-term subjects showed enduring age-related trends (G0 and bisecting GlcNAc increasing; sialylation decreasing) consistent with prior literature. The paper supports use of glycan age as a reliable tracking biomarker with high analytical precision. Note: the menstrual cycle cohort (Chinese premenopausal women, n=70) did show statistically significant short-term trends in G2, G0, and fucosylation (F) attributed to menstrual cycle effects — a confound for female participants. ICC values for individual glycan peaks were not reported as a single summary statistic; precision was described via CV values. #gap/needs-replication (ICC values not explicitly reported as a single summary metric)

### Heritability (Mijakovac 2022)

A TwinsUK-based heritability study found the glycan biological age clock had **mean heritability of 39%**, meaning ~61% of glycan-age variance is attributable to non-genetic (environmental + lifestyle) factors [^mijakovac2022]. When chronological age was included as a covariate, heritability increased to ~71% — the age-adjusted residual is more heritable than the raw glycan age. The dominant heritability is environmental, which is consistent with the clock's high intervention-responsiveness: most of the variation is potentially modifiable.

## Intervention Responsiveness

GlycanAge is the most rapidly intervention-responsive aging clock characterized to date. Multiple experimental contexts show weeks-to-months effects:

### Hormone replacement: estradiol (Jurić 2020, RCT)

The most controlled intervention evidence comes from Jurić et al. 2020, a randomized controlled trial in **n=36 healthy premenopausal women** (placebo n=21; transdermal estradiol add-back n=15) [^juric2020]. Gonadal hormones were pharmacologically suppressed in all participants using a GnRH agonist (leuprolide) for 6 months to produce postmenopausal hormone levels — this is not a surgical menopause model. Participants were then randomized to placebo or transdermal estradiol patches. Hormone suppression increased glycan biological age by a **median 9.1 years** (IQR 6.83–11.52; p=3.73×10⁻⁸ for between-group difference); transdermal estradiol therapy **completely prevented this increase** (median change −0.23 years, IQR −2.20 to 2.98). After a 4-month recovery period, glycan age returned to near-baseline values in both groups. This demonstrates:

1. IgG glycosylation responds to hormonal change on a timescale of weeks-to-months
2. Estrogen (likely via upregulation of B4GALT1 galactosyltransferase in B cells) is a key positive regulator of IgG galactosylation
3. Perimenopausal GlycanAge acceleration may be partially hormone-mediated and reversible

**Evidence quality:** Small RCT (n=36 total; n=15 in treated arm) using a pharmacological gonadal suppression model; results may not directly generalize to natural menopause or surgical oophorectomy. Effect size is large and highly significant. #gap/needs-replication in larger cohorts and in natural menopause. Sex-specificity of the mechanism is a key open question.

### Bariatric surgery and weight loss (Greto 2021)

Greto et al. 2021 (*Int J Obesity*, n=37 bariatric surgery patients, 89% female) examined IgG N-glycosylation longitudinally before and up to ~12 months after surgery [^greto2021]. After bariatric surgery (predominantly sleeve gastrectomy, n=25; Roux-en-Y gastric bypass, n=12), patients showed significant post-surgery increases in digalactosylated (G2; adj. p=3.75×10⁻⁴) and monosialylated (S1; adj. p=3.94×10⁻²) glycans, and significant decreases in agalactosylated (G0; adj. p=7.38×10⁻⁴) and core fucosylated (CF; adj. p=3.94×10⁻²) IgG N-glycans. These changes are directionally consistent with a shift toward a younger IgG glycome. The paper concludes this "implies a reduction of biological age" but does **not** report a numeric delta GlycanAge in years — the effect sizes are standardized glycan composition changes from a linear mixed model. Additionally, a TwinsUK longitudinal cohort (n=1,680) confirmed that BMI decrease over a 20-year period associated with increased digalactosylation (adj. p=5.85×10⁻⁶) and decreased agalactosylation (adj. p=1.79×10⁻²). #gap/needs-replication (delta GlycanAge in years not reported; bariatric cohort n=37 with no control arm)

### Exercise (Simunić-Briški 2024)

Simunić-Briški et al. 2024 (*Glycoconjugate Journal*, n=276 total) compared glycan age across **four** physical activity groups: inactive (INACT, n=99), newly involved recreational exercisers (REC, n=77), regularly moderate active (ACT, n=62; exercising 2–3×/week for ≥3 years), and professional competing athletes (PRO, n=38) [^simunic2024]. Key findings:

- Regularly moderate active individuals (ACT) showed significantly lower GlycanAge than inactive controls (INACT): β = −7.437; p.adj = 7.85×10⁻³ (all participants, age- and sex-adjusted)
- In women, ACT vs INACT: β = −9.762, p.adj = 4.68×10⁻²; in men the same trend was nominally significant (β = −5.911, p = 3.86×10⁻²) but did not survive FDR correction
- Newly involved recreational exercisers (REC, after one exercise season) showed intermediate GlycanAge not significantly different from inactive controls
- Notably, **professional competing athletes (PRO) showed nominally elevated GlycanAge** relative to regularly active (ACT) individuals: β = +7.546, p = 3.20×10⁻² (FDR p.adj = 1.08×10⁻¹; nominally but not FDR-significantly elevated); in women this was FDR-significant: β = +20.206, p.adj = 2.71×10⁻²

This pattern suggests a J-shaped relationship between exercise intensity and glycan biological age: regular moderate exercise is anti-inflammatory, but extreme professional training loads may induce chronic systemic stress that partially reverses this benefit. #gap/dose-response-unclear

### Down syndrome: accelerated glycan aging (Murray 2023)

Murray et al. 2023 (*EBioMedicine*, n=246 DS across three European cohorts / n=256 age-, sex-, and demography-matched healthy controls) used the IgG glycan clock as a biological-age measure in Down syndrome (DS), finding GlycanAge **18.4–19.1 years** advanced relative to chronological age on average, independent of co-morbidities [^murray2023]. This shift remained constant throughout the lifespan and was detectable from early childhood. The study attributed the progeroid state mechanistically to DYRK1A kinase overdose driving increased unrepaired DNA damage and reduced LaminB1 levels in nucleated blood cells — demonstrated using isogenic hiPSC models and CRISPR-Cas9 editing, and pharmacologically correctable by DYRK1A inhibition. This study also validates the clock's utility in disease-biology contexts beyond normal aging ranges.

## 2026 update — Mijakovac/Lauc preprint: mortality validation + multi-intervention reversal

> ⚠️ Section added 2026-05-20 from medRxiv preprint PDF (doi:10.64898/2026.04.21.26351390, posted 2026-04-23). Preprint; not peer-reviewed. All claims in this section are provisional. #gap/needs-peer-review

The largest IgG glycome cross-study analysis to date — [[studies/mijakovac-2026-igg-glycome-mortality]] — encompasses 20,045 individuals from 37 studies processed at the Genos Glycoscience Research Laboratory between 2008 and 2025, compared to 5,117 in the foundational Kristic 2014 training cohort [^mijakovac2026_update].

### Mortality-outcome validation — first major data

GlycanAge had been trained on chronological age (not mortality), and the primary gap in this biomarker's evidence base was the absence of prospective mortality-outcome validation comparable to [[biomarkers/grimage-2019]]. The Mijakovac 2026 preprint addresses this directly. In the GCKD cohort (n=4,827 CKD patients; 840 deaths over 8.5 years), each additional year of glycan age was associated with **HR 1.10 (95% CI 1.08–1.12)** for all-cause mortality adjusted for age and sex, and **HR 1.05 (95% CI 1.03–1.06)** after full adjustment for BMI, smoking, blood pressure, LDL, CRP, diabetes, eGFR, and uACR. The association remained significant even after CRP adjustment, suggesting IgG glycans capture a chronic inflammatory burden component distinct from acute-phase CRP. A partial replication in the population-based Vis cohort (n=796; 94 deaths; 10 years) yielded HR 1.03 (95% CI 1.00–1.06) in the age/sex/standard-risk-factor model [^mijakovac2026_update].

**Caveats:** The discovery cohort is CKD patients, not the general population — the mortality HR may be inflated by disease-specific confounding. The Vis replication was underpowered for the fully adjusted model. Replication in a healthy general-population prospective cohort is needed. #gap/needs-replication #gap/needs-peer-review

### Comparison table update — mortality column

| Dimension | GlycanAge (updated) | GrimAge / DunedinPACE |
|---|---|---|
| Mortality-predictive | **Preliminary: HR 1.10/yr unadjusted (GCKD); HR 1.05/yr fully adjusted — PREPRINT** | GrimAge: established (HR ~1.10/yr, peer-reviewed) |

The mortality HR estimates are numerically similar to GrimAge's, but the populations differ and the GlycanAge finding has not yet been peer-reviewed. Direct head-to-head comparison in the same cohort has not been published. #gap/needs-peer-review #gap/needs-replication

### Three interventions reverse glycan aging

The preprint examined three mechanistically distinct interventions and found all three associated with glycan-age reduction:

1. **Hormone replacement therapy (HRT)** — Newson Clinic cohort (n=19 perimenopausal/menopausal women, 15 months, body-identical HRT): mean reduction **0.12 glycan years per month** (P=5.76×10⁻⁸). This corroborates the [[biomarkers/glycanage-2017#Hormone replacement: estradiol (Jurić 2020, RCT)|Jurić 2020 RCT]] (estradiol prevented GnRH-suppression-induced +9.1 yr acceleration) and extends it to a real-world naturalistic cohort. Mechanism: estrogen upregulates B4GALT1 galactosyltransferase in B cells, restoring IgG galactosylation [^juric2020].

2. **Therapeutic plasma exchange (TPE)** — Circulate Health cohort (n=9, 4F/5M, mean age 60.8, 6-month monthly TPE, Cummaquid IRB): mean reduction **0.4 glycan years per month** (P=0.0245). This is the first IgG-glycome data from a TPE cohort and is consistent with the [[interventions/blood-product/plasma-exchange]] literature and the Fuentealba 2025 Aging Cell multi-omics RCT [^fuentealba2025_glycanupdate]. Proposed mechanism: TPE removes aged, hypogalactosylated IgG pool and inhibitory plasma factors; de novo IgG synthesis produces IgG with glycan profiles reflecting the post-exchange inflammatory environment; repeated exchange therefore shifts the population-level glycan-age distribution toward younger profiles. **Caveat: n=9, uncontrolled.** #gap/needs-replication #gap/needs-peer-review

3. **Caloric restriction (CR)** — DIOGENES study (n=680 across 8 European centers; 800 kcal/day, 8 weeks; mean ~11 kg weight loss): **significant glycan-age deceleration** (P=0.0017, random-effects meta-analysis; 7/8 centers showed decreasing trend). Cross-sectional analysis also showed BMI increased glycan age by 0.35 years per BMI unit (95% CI 0.24–0.46; P<0.001). This extends the [[biomarkers/glycanage-2017#Bariatric surgery and weight loss (Greto 2021)|Greto 2021 bariatric surgery]] finding to a non-surgical, diet-only context. Mechanism: CR reduces metabolic inflammation → less IL-6/TNF-α-driven suppression of B4GALT1/ST6GAL1.

### Implication for biomarker framing

The preprint strengthens the framing of GlycanAge as a **functional biomarker** — not merely a correlative readout of aging — because the IgG glycan compartment demonstrably responds to interventions with established mortality benefit, and the mortality association itself appears independent of standard clinical risk factors. The comparison table above (see full table in §Comparison to DNAm Clocks) should be read with the mortality column now showing preliminary rather than unknown for GlycanAge, pending peer-review confirmation.

[^mijakovac2026_update]: doi:10.64898/2026.04.21.26351390 · Mijakovac A, Butz E, Lauc G et al. · medRxiv preprint 2026-04-23 · PREPRINT — not peer-reviewed · n=20,045 across 37 studies · cross-cohort meta-analysis + longitudinal intervention sub-studies · GCKD mortality: HR 1.10 (1.08–1.12) unadjusted; HR 1.05 (1.03–1.06) fully adjusted; HRT: −0.12 glycan yr/mo (P=5.76×10⁻⁸); TPE: −0.4 glycan yr/mo (P=0.0245); CR: significant deceleration at 11 kg weight loss (P=0.0017) · local PDF: fetched medRxiv 2026-05-20

[^fuentealba2025_glycanupdate]: doi:10.1111/acel.70103 · Fuentealba M, Kiprov D, Verdin E et al. · Aging Cell 2025 · rct (single-blinded) · n=42 · 15 epigenetic clocks improved with TPE vs placebo; multi-omics rejuvenation biomarkers · archive: pending

## Comparison to DNAm Clocks

| Dimension | GlycanAge | GrimAge / DunedinPACE | Horvath / Hannum / PhenoAge |
|---|---|---|---|
| Modality | IgG N-glycome (glycomic) | DNA methylation (blood) | DNA methylation (blood/multi-tissue) |
| Response timescale | Weeks to months | Years (DunedinPACE: months?) | Years |
| Mortality-predictive | **Preliminary** — HR 1.10/yr unadjusted; 1.05/yr fully adjusted (GCKD CKD cohort; PREPRINT — Mijakovac 2026 [^mijakovac2026_update]) | GrimAge: strong (HR 1.10/yr) | Weaker than GrimAge |
| Mechanistic role | Bidirectional (effector + readout) | Read-out of epigenetic state | Read-out of epigenetic state |
| Training cohort size | 5,117 (vs 8,000–15,000+ for DNAm clocks) | 2,356 (training) / 6,935+ (validation) | 8,000 / 51 tissues |
| MR causal evidence | Not tested | Partial (Schooling 2025 null) | Partial/not-tested |
| Cost (DTC) | ~$300 (GlycanAge Ltd.) | Research only | Research only |
| Vendor dependence | High (proprietary normalization) | Low (open CpG lists) | Low (open CpG lists) |

The primary practical advantage of GlycanAge over DNAm clocks is **intervention responsiveness at short timescales**. For tracking lifestyle intervention effects over weeks to months, GlycanAge is currently the most practical validated option. Its limitation is the absence of large-scale mortality-outcome validation comparable to [[biomarkers/grimage-2019]].

## Disease Associations

Beyond aging per se, IgG galactosylation (G0/G2 ratio shift) is associated with:

- Rheumatoid arthritis — hypogalactosylation predates symptom onset and correlates with disease activity (established finding, not cited separately here as it is peripheral to the aging focus)
- Type 2 diabetes complications — IgG galactosylation negatively associated with **both prevalent and incident** nephropathy and macrovascular disease in three independent T2D cohorts (DiaGene n=1,815; GenodiabMar n=640; Hoorn DCS n=1,266); sialylation additionally associated with incident nephropathy [^memarian2023]
- COVID-19 severity — Lauc group used IgG glycan biological age as a predictor of COVID-19 outcomes (Lauc 2020, doi:10.18632/aging.103052)
- Neuromyelitis optica (NMOSD) — reduced galactosylation correlates with disease severity and IL-6 levels [^gao2024]

These disease associations are consistent with the pro-inflammatory effector role of hypogalactosylated IgG and support the mechanistic claim (not just correlational) that the glycan shift actively promotes inflammatory pathology.

## Limitations and Gaps

1. **Smaller validation cohort than DNAm clocks** — 5,117 training individuals is substantive but roughly half the Horvath 2013 cohort and far below the GrimAge validation dataset. No independent replication study at comparable scale. #gap/needs-replication

2. **Mortality-outcome validation — preliminary data now exists (preprint)** — GlycanAge was trained on chronological age, not mortality. The Mijakovac 2026 preprint [^mijakovac2026_update] provides the first large-scale mortality-outcome data: HR 1.05–1.10/yr in CKD patients. This partially addresses the gap but requires peer review and replication in a healthy general-population cohort before the gap can be considered closed. #gap/needs-peer-review #gap/needs-replication (mortality endpoint; preprint only; CKD cohort; replication in healthy adults needed)

3. **Vendor dependence and proprietary normalization** — GlycanAge Ltd. applies a proprietary normalization to the raw 24-peak UPLC/CGE profiles. Results from the commercial assay are not directly comparable to published research using UPLC + open normalization pipelines. Academic reproducibility requires raw glycan data + the normalization codebase. #gap/unsourced (normalization details not in primary literature)

4. **MR-causal evidence absent** — Although IgG glycan traits have GWAS hits (B4GALT1 locus is among the best-powered signals; ST6GAL1 for sialylation), no Mendelian randomization study has tested whether genetically elevated glycan galactosylation causes slower aging or reduced mortality. This is a significant gap: observational intervention studies (Jurić 2020, Greto 2021) show glycan age changes, but whether those changes are on the causal aging pathway is unknown. #gap/needs-replication (`mendelian-randomization: not-tested`)

5. **Sex-dimorphism complicates interpretation** — The strong estrogen-dependence of IgG galactosylation means that age-matched males and females have systematically different baseline GlycanAges, and that menopause is a confound in any female-inclusive cohort. Published normative ranges are sex-stratified, but intervention studies must carefully account for hormonal status.

6. **Schema note — modality classification** — GlycanAge is a glycomic assay (measuring sugar structures on a protein), not a standard proteomic (peptide-level) assay. CLAUDE.md does not enumerate a `glycomic` modality; `proteomic` was used as the closest fit. This is a schema gap: if glycomic and proteomic clocks accumulate, a dedicated modality value should be added. #gap/needs-canonical-id (schema gap; `modality: glycomic` not in CLAUDE.md enum — escalated in seeder summary)

7. **Filename convention note** — The target filename `glycanage-2017.md` reflects the GlycanAge Ltd. commercial assay launch year, not the primary academic publication (2014). The aliases field includes `Kristic 2014 glycan clock` to resolve this discrepancy.

## Cross-references

- [[biomarkers/grimage-2019]] — mortality-trained DNAm clock; the GlycanAge intervention-responsiveness vs GrimAge mortality-predictiveness trade-off is the central cross-clock tension
- [[biomarkers/dunedinpace-2022]] — pace clock; fastest-responding DNAm clock; compare timescale with GlycanAge
- [[biomarkers/phenoage-2018]] — sister second-generation DNAm clock
- [[biomarkers/horvath-clock-2013]] — first-generation reference DNAm clock
- [[biomarkers/lehallier-proteomic-clock-2019]] — proteomic (SomaScan-based) aging clock; parallel concept, different measurement modality
- [[hallmarks/chronic-inflammation]] — primary mechanistic link; G0/G2 ratio shift is both a read-out and effector of inflammaging
- [[hallmarks/altered-intercellular-communication]] — IgG effector function changes affect immune-cell cross-talk during aging

## Footnotes

[^kristic2014]: doi:10.1093/gerona/glt190 · Kristic J et al. · J Gerontol Biol Sci Med Sci 2014 69(7):779–789 · n=5,117 across 4 European populations (Orkney n=2,035 [training]; Vis n=915; Korcula n=906; TwinsUK n=1,261) · observational (cross-sectional; repeated subsampling validation) · three IgG glycan peaks (GP6, GP14, GP15) explain up to 58% variance in chronological age (R²=57.8% [54.1–61.3%] in Orkney; 41–50% cross-population); prediction SD=9.7 yr; residual glycan variance correlates with BMI, HbA1c, triglycerides, insulin, waist circumference · model: human adults aged 16–100, serum IgG, UPLC glycan profiling · 374 citations (Crossref 2026-05-07) · archive status: downloaded; verified against PDF 2026-05-09

[^juric2020]: doi:10.18632/aging.104060 · Jurić J, Kohrt WM, Kifer D, Lauc G et al. · Aging (Albany NY) 2020 · rct · n=36 healthy premenopausal women (placebo n=21; transdermal estradiol add-back n=15) · GnRH agonist (leuprolide) used to pharmacologically suppress gonadal hormones for 6 months; NOT surgical menopause/oophorectomy · hormone suppression increased GlycanAge median +9.1 yr (IQR 6.83–11.52); estradiol completely prevented increase (delta −0.23 yr, IQR −2.20 to 2.98); p=3.73×10⁻⁸ · 4-month recovery restored both groups to near-baseline · model: healthy premenopausal women, Genos Glycoscience Research Laboratory and University of Colorado collaborators · archive status: downloaded; verified against PDF 2026-05-09

[^mijakovac2022]: doi:10.3389/fcell.2022.982609 · Mijakovac A, Frkatovic A, Lauc G et al. · Front Cell Dev Biol 2022 · n=TwinsUK (twin design) · observational (twin heritability) · mean glycan clock heritability 39%; increases to ~71% when age included as covariate; environmental factors dominant · model: human adults, blood serum, CGE glycan profiling · archive status: pending

[^kristicreview2022]: doi:10.1016/j.cca.2022.08.006 · Kristic J, Lauc G, Pezer M · Clin Chim Acta 2022 · review · IgG glycans as biomarkers and molecular effectors of aging; G0/G2 ratio and inflammatory tone; inflammaging framework · archive status: not_oa (paywalled)

[^lauc2024expert]: doi:10.1080/14728222.2023.2277218 · Lauc G · Expert Opin Ther Targets 2024 · review · IgG glycome modulation as anti-aging strategy; small-molecule IgG glycome drugs not yet available; chronic systemic inflammation driven by IgG glycan aging trajectory · archive status: pending

[^greto2021]: doi:10.1038/s41366-021-00816-3 · Greto VL, Lauc G et al. · Int J Obes 2021 45:1521–1531 · n=37 bariatric surgery patients (89% female; sleeve gastrectomy n=25, RYGB n=12); TwinsUK replication cohort n=1,680 for BMI-glycan analyses · interventional (longitudinal pre-post, no control arm) · significant post-surgery increases in digalactosylated (G2, adj. p=3.75×10⁻⁴) and monosialylated (S1, adj. p=3.94×10⁻²) glycans; agalactosylated (G0, adj. p=7.38×10⁻⁴) and core fucosylated (CF, adj. p=3.94×10⁻²) glycans declined; paper concludes this "implies a reduction of biological age" but does NOT report a numeric delta GlycanAge in years · model: adults undergoing bariatric surgery at Oxford University Hospitals · archive status: downloaded; verified against PDF 2026-05-09

[^simunic2024]: doi:10.1007/s10719-023-10144-5 · Simunic-Briski N, Lauc G et al. · Glycoconj J 2024 41:67–76 · n=276 healthy adults across 4 groups: inactive (n=99), recreational (n=77), regularly moderate active (n=62), professional competing athletes (n=38) · observational (cross-sectional; age- and sex-adjusted regression) · ACT vs INACT: β=−7.437, p.adj=7.85×10⁻³ (all); women ACT vs INACT: β=−9.762, p.adj=4.68×10⁻²; PRO vs ACT (nominally elevated GlycanAge): β=+7.546, p=3.20×10⁻² (not FDR-significant overall; women FDR-significant: β=+20.206, p.adj=2.71×10⁻²) · model: Croatian cohort, dry blood spots, IgG isolation + UPLC glycan profiling · archive status: downloaded; verified against PDF 2026-05-09

[^rapcan2024]: doi:10.1007/s11357-024-01239-4 · Rapcan B, Frkatovic-Hodzic A, Lauc G et al. · GeroScience 2024 46:5781–5796 · analytical study (intermediate precision: 3 plasma pools in tetraplicate over 26 days = 312 replicates; short-term: AstraZeneca MFO cohort median age 20, n=38, 3 months; and Chinese premenopausal women cohort n=70, 12 weeks; long-term: 2 adult males monitored 5 and 10 years) · intermediate precision "consistently exhibited very low CV values" (high precision); short-term AZ cohort no significant trends; long-term: enduring age trends (G0 and bisecting GlcNAc up; sialylation down); menstrual cycle cohort showed significant glycan variation attributed to hormonal cycling · model: CGE-LIF platform · archive status: downloaded; verified against PDF 2026-05-09 · ICC values not explicitly reported as a single metric; precision expressed as CV

[^murray2023]: doi:10.1016/j.ebiom.2023.104692 · Murray A, Lauc G, Kristic J et al. · EBioMedicine 2023 94:104692 · n=246 DS (three European cohorts: France n=98, Italy n=57, UK/LonDownS n=53; plus children cohorts) vs n=256 age-, sex-, demography-matched healthy controls · case-control · GlycanAge 18.4–19.1 yr advanced in DS adults vs chronological-age-matched controls, independent of co-morbidities; constant across lifespan; detectable from early childhood · mechanism: DYRK1A overdose → increased unrepaired DNA damage + reduced LaminB1 in nucleated blood cells; demonstrated in isogenic hiPSC models and reversed by CRISPR-Cas9 DYRK1A reduction or pharmacological DYRK1A inhibition · model: human adults and children with Down syndrome, 3 European populations + hiPSC/cerebral organoid models · archive status: downloaded; verified against PDF 2026-05-09

[^memarian2023]: doi:10.1002/dmrr.3685 · Memarian E, Heijmans R, van Hoek M et al. · Diabetes Metab Res Rev 2023 39(7):e3685 · n=3,721 total across 3 independent T2D cohorts: DiaGene n=1,815 (Netherlands), GenodiabMar n=640 (Spain), Hoorn DCS n=1,266 (Netherlands; mass spectrometry) · observational (cross-sectional + prospective Cox/logistic regression; meta-analyzed) · IgG galactosylation negatively associated with both prevalent AND incident nephropathy and macrovascular disease after adjustment for clinical risk factors; sialylation negatively associated with incident nephropathy; retinopathy associations found for galactosylation (age/sex adjusted only) · model: three independent European T2D cohorts, plasma IgG UPLC + mass spectrometry · archive status: downloaded; verified against PDF 2026-05-09

[^zhang2026]: doi:10.1177/15491684251396176 · Zhang XY, Li DG · Rejuvenation Res 2026 · review · IgG aging + gut microbiota crosstalk; glycosylation modulated by SCFA signals and sex hormones · archive status: pending

[^gao2024]: doi:10.3389/fimmu.2024.1357475 · Gao S et al. · Front Immunol 2024 · observational · IgG galactosylation 0.2482 in untreated NMOSD vs 0.3625 in controls; inversely correlated with EDSS and IL-6 · model: NMOSD patients vs healthy controls
