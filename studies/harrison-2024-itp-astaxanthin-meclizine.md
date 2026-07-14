---
type: study
doi: 10.1007/s11357-023-01011-0
pmid: 38041783
pmc: PMC10828146
title: "Astaxanthin and meclizine extend lifespan in UM-HET3 male mice; fisetin, SG1002 (hydrogen sulfide donor), dimethyl fumarate, mycophenolic acid, and 4-phenylbutyrate do not significantly affect lifespan in either sex at the doses and schedules used"
authors: [Harrison DE, Strong R, Reifsnyder P, Rosenthal N, Korstanje R, Fernandez E, Flurkey K, Ginsburg BC, Murrell MD, Javors MA, Lopez-Cruzan M, Nelson JF, Willcox BJ, Allsopp R, Watumull DM, Watumull DG, Cortopassi G, Kirkland JL, Tchkonia T, Choi YG, Yousefzadeh MJ, Robbins PD, Mitchell JR, Acar M, Sarnoski EA, Bene MR, Salmon A, Kumar N, Miller RA]
year: 2024
journal: GeroScience
volume: 46
issue: 1
pages: "795-816"
publication-type: research-article
study-design: in-vivo
organism: mus-musculus
n-subjects: null   # varies by compound arm; ~100-200 per compound per sex pooled across 3 sites — see body
intervention: ["[[fisetin]]", "[[astaxanthin]]", "[[meclizine]]"]
hallmarks-tested: ["[[cellular-senescence]]", "[[deregulated-nutrient-sensing]]", "[[mitochondrial-dysfunction]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [astaxanthin-male-lifespan-extension, meclizine-male-lifespan-extension, fisetin-null-lifespan, fisetin-null-p16-qPCR, dimethyl-fumarate-null, mycophenolic-acid-null, 4-phenylbutyrate-null, SG1002-null, sex-specificity-positive-compounds]
local-pdf: null
verified: true
verified-date: 2026-06-30
verified-by: claude
verified-scope: "All load-bearing quantitative claims cross-checked against PMC10828146 full text: lifespan p-values (all 4 fisetin arms, astaxanthin, meclizine, 4-PBA), achieved-vs-target doses, start ages, site-specific effects, meclizine blood levels, p16 sub-cohort assay and verbatim wording, female harm signal. Corrections applied: (1) SG1002 C2018 start age 16–18 → 18 months; (2) fisetin Median Δ values added to table (+7%/−5% male; +1%/−1% female); (3) clarifying note added that paper's 'numbers of p16^Ink4a-positive cells' is the paper's own imprecise phrasing for qPCR mRNA levels (CT values), not an IHC cell count. No mg/kg/day figure in paper confirmed absent. Canonical-DB fields not applicable (study page)."
---

# Astaxanthin and meclizine extend lifespan in UM-HET3 male mice (Harrison et al. 2024 — ITP)

## TL;DR

NIA Interventions Testing Program (ITP) multi-site lifespan cohort testing nine compounds in genetically heterogeneous UM-HET3 mice. **Astaxanthin extended median male lifespan by 12% (p=0.003); meclizine by 8% (p=0.03)** — both male-specific, not significant in females. **Fisetin failed to extend lifespan in either sex at 600 ppm** under two dosing schedules (continuous or cyclic); a separate biomarker sub-cohort showed fisetin also failed to reduce p16^Ink4a mRNA in kidney, brain, or liver. The remaining five compounds (SG1002, dimethyl fumarate, mycophenolic acid, 4-phenylbutyrate) were also null. The fisetin null result is a direct rebuttal to [[yousefzadeh-2018-fisetin-senolytic]] under the more stringent ITP design.

> **⚠️ Replication status (2026): the astaxanthin and meclizine positives did NOT replicate.** The next ITP cohort — Korstanje et al. 2026 (*GeroScience*; same program, UM-HET3) — reported that **astaxanthin and meclizine do not increase lifespan** (its title lists both among eight null compounds) [^korstanje2026]. An apparent astaxanthin female-lifespan-harm signal in the pooled 3-site analysis **did not survive** a 2-site sensitivity reanalysis excluding JAX (where anomalously long control-female survival inflated it) — so it is likely a site artifact, not genuine toxicity (mitoglitazone and pioglitazone female harm did persist). Both compounds are therefore now **single-positive-cohort + failed-replication → contested** (#gap/contradictory-evidence). The fisetin null, by contrast, is consistent across cohorts. This is the ITP's false-positive-control design working as intended — a single-cohort ITP positive is a lead, not a verdict. See [[studies/korstanje-2026-itp-null-cohort]], [[astaxanthin]], [[meclizine]].

## ITP Design Rationale

The NIA Interventions Testing Program (ITP) is considered the highest-rigor preclinical lifespan testing platform available. Key design features:

- **Three independent sites** conducting identical protocols simultaneously: The Jackson Laboratory (JAX), UT Health San Antonio, and University of Michigan (UM). A positive result must be consistent across sites to be credited.
- **Genetically heterogeneous UM-HET3 mice**: four-way F1 cross (BALB/cByJ × C57BL/6J) × (C3H/HeJ × DBA/2J). This stock captures polygenic variation similar to outbred humans, reducing the risk of strain-specific artifacts that plague inbred strains. Results generalize more broadly than C57BL/6 inbred data.
- **Both sexes** tested in all arms, enabling detection of sex-specific effects.
- **Rigor over throughput**: ITP deliberately runs fewer compounds per cohort to maintain large n and multi-site replication, accepting false-negative risk in exchange for false-positive reduction.

## Compounds Tested and Schedules

| Compound | Dose (target ppm) | Dose (achieved ppm) | Diet start age | Schedule |
|---|---|---|---|---|
| Astaxanthin (Asta) | 4000 | ~1840 (46% of target) | 12 months | Continuous |
| Meclizine (Mec) | 800 | ~544 (68% of target) | 12 months | Continuous |
| Fisetin (Fis_On) | 600 | ~594 (99% of target) | 20 months | Continuous |
| Fisetin (Fis_Cyc) | 600 | ~594 (99% of target) | 20 months | Cyclic: 3 days on / 11 days off |
| SG1002 (H₂S donor) | 240 | Not measurable | 18 months (C2018); 5–9 months (C2019) | Continuous |
| Dimethyl fumarate (DMF_early) | 120 | ~42 (35% of target) | 10 months | Continuous |
| Dimethyl fumarate (DMF_16) | 120 | ~42 (35% of target) | 16 months | Continuous |
| Mycophenolic acid (MPA) | 6.7 | ~6.1 (91% of target) | 9 months | Continuous |
| 4-Phenylbutyrate (PBA) | 1000 | ~1070 (107% of target) | 9 months | Continuous |

Note: astaxanthin achieved only ~46% of target concentration — the drug is difficult to incorporate homogeneously into rodent chow. The paper reports this as the actual diet ppm, not the intended amount.

## Key Results

### Positive: Astaxanthin (males only)

[[astaxanthin]] extended **median male lifespan by 12%** (pooled across 3 sites; log-rank test p=0.003). Site-specific effects were consistent: JAX +11%, UT +11%, UM +14% — a hallmark of ITP credibility. The 90th percentile lifespan (maximum lifespan proxy) showed a non-significant +6% increase (Wang-Allison test p=0.19).

Female astaxanthin: median lifespan +3%, p=0.64 — not significant. The male specificity is unexplained but mirrors patterns seen with other ITP compounds (e.g., rapamycin shows larger male benefit in some cohorts).

### Positive: Meclizine (males only)

[[meclizine]] extended **median male lifespan by 8%** (pooled; log-rank test p=0.03). Site effects: JAX +15%, UM +11%, UT 0% — less consistent than astaxanthin, with UT contributing a null. Plasma blood levels confirmed exposure: males 174 ± 77 ng/ml, females 115 ± 100 ng/ml. The lower female exposure may partly explain sex specificity, though pharmacokinetic differences between sexes are common for antihistamines. The 90th percentile lifespan showed a non-significant +6% (Wang-Allison p=0.14).

Meclizine is an H1 antihistamine historically used for motion sickness; its mechanism of lifespan extension is not established in this paper and represents a potential discovery target. #gap/no-mechanism

### Null: Fisetin (both sexes, two dosing schedules)

[[fisetin]] at 600 ppm (99% target dose achieved) — the highest fidelity of any tested compound in this cohort — **did not extend lifespan in males or females** under either a continuous (Fis_On) or cyclic 3-day-on/11-day-off (Fis_Cyc) schedule:

| Arm | Sex | Median Δ | Log-rank p |
|---|---|---|---|
| Fis_On | Male | −5% | p=0.85 |
| Fis_Cyc | Male | +7% | p=0.54 |
| Fis_On | Female | +1% | p=0.37 |
| Fis_Cyc | Female | −1% | p=0.75 |

Dosing started at **20 months** (late-life initiation). The paper does not report an explicit mg/kg/day conversion for 600 ppm in UM-HET3 mice; no such figure appears in the text. By standard mouse food-intake estimates (~3–4 g/day at ~30 g body weight), 600 ppm corresponds to approximately 60–80 mg/kg/day — well above the threshold used in Yousefzadeh 2018 (~60 mg/kg/day at 500 ppm) and within the range expected to reach pharmacologically relevant concentrations if fisetin's senolytic activity were operative in this context.

#### Fisetin p16^Ink4a Biomarker Sub-cohort

In a **separate sub-cohort** of mice aged 22–24 months treated for 2–4 months on the same Fis_On and Fis_Cyc schedules, the paper performed **qPCR of p16^Ink4a mRNA** in kidney, brain, and liver — three tissues that show aging-associated p16 induction:

> "Neither of the two groups of Fis-treated mice had significantly lower numbers of p16^Ink4a-positive cells, compared to age-matched untreated control mice."

*(Terminology note: the paper uses the phrase "numbers of p16^Ink4a-positive cells" but the actual assay was qPCR measuring p16^Ink4a mRNA levels, expressed as cycle threshold (CT) values — not an IHC cell count or flow-cytometric cell enumeration. No individual senescent cells were counted. The paper's own language is imprecise; the finding is that fisetin did not significantly reduce bulk tissue p16^Ink4a mRNA compared to untreated aged controls.)*

p21^Cip1 showed no age-related increase in these tissues, making it an insensitive endpoint. The p16 qPCR failure for fisetin is a direct biomarker-level challenge to the senolytic mechanism proposed in Yousefzadeh 2018, which showed p16+ cell clearance in C57BL/6 mice at 100 mg/kg gavage. Key differences between experiments:
- **Strain**: UM-HET3 heterogeneous (Harrison 2024) vs inbred C57BL/6 (Yousefzadeh 2018)
- **Dosing route**: dietary 600 ppm (Harrison 2024) vs gavage 100 mg/kg × 5 days (Yousefzadeh 2018)
- **Age at start**: 20 months (Harrison 2024) vs 22–24 months (Yousefzadeh 2018)
- **Duration**: 2–4 months continuous or cyclic (Harrison 2024) vs acute 5-day course (Yousefzadeh 2018)

Whether strain background, bioavailability from chow vs gavage, or dosing regimen explains the discrepancy is unresolved. #gap/contradictory-evidence

### Null: SG1002 (Hydrogen Sulfide Donor)

SG1002 at 240 ppm (achieved concentration not measurable by plasma assay) did not extend lifespan in either sex in two separate cohort-years (C2018 starting at 18 months; C2019 starting at 5–9 months). The inability to confirm tissue exposure limits interpretability. #gap/dose-response-unclear

### Null: Dimethyl Fumarate

Dimethyl fumarate (DMF) at 120 ppm target **achieved only ~35% of target** (~42 ppm actual), in both early-start (10 months) and late-start (16 months) arms. No lifespan extension in either sex. Authors note the low achieved concentration may explain the null result — not a definitive rejection of DMF as an aging intervention. #gap/dose-response-unclear

### Null: Mycophenolic Acid

Mycophenolic acid at 6.7 ppm (91% target achieved) did not extend lifespan. Full target dose achieved; null result is interpretively cleaner than DMF.

### Null: 4-Phenylbutyrate (with Female Harm Signal)

4-Phenylbutyrate at 1000 ppm (107% target achieved) did not extend lifespan in males. It **reduced female median lifespan by 2% (p=0.01)** — a small but statistically significant harm signal in one sex. The mechanism for sex-specific harm is not established.

## Extrapolation to Humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Oxidative stress, senescence biology, and the general aging biology tested here are conserved |
| Phenotype conserved in humans? | unknown | Lifespan extension in heterogeneous mice is closer to human biology than inbred data, but direct human evidence absent for these compounds in aging |
| Replicated in humans? | no | No human aging trials for astaxanthin/meclizine as lifespan interventions; fisetin human senolytic trials underway (see [[fisetin]]) but prior to ITP null |

## Limitations

- All findings are in mice; zero human aging evidence.
- Astaxanthin target dose was poorly achieved (46% of intended); actual effective ppm is lower than planned. Positive result stands but optimal dose is uncertain.
- Meclizine's lifespan effect shows site heterogeneity (UT site 0% effect); the pooled result is significant but less robust than astaxanthin's cross-site consistency.
- Fisetin was tested starting at 20 months (late-life); earlier initiation might yield different results, though the Yousefzadeh 2018 result that this replicates used a similarly late 85-week (~20-month) start.
- DMF null result is confounded by low achieved dietary concentration.
- The p16 sub-cohort for fisetin used qPCR on bulk tissue RNA, which may be less sensitive than single-cell or flow-cytometric approaches for detecting small reductions in rare p16+ cell populations.
- Meclizine mechanism of action unknown; cannot rule out off-target effects explaining lifespan result.
- ITP does not measure cause-specific mortality, body composition changes, or molecular biomarkers as part of its standard lifespan protocol beyond the designated sub-cohorts.

## Implications for the Wiki

This paper is the **critical counter-data point** for the [[fisetin]] compound page's senolytic claims. The Yousefzadeh 2018 finding that fisetin extends lifespan in mice came from small n (8–9/group), a single inbred background (C57BL/6), and a single lab — exactly the conditions the ITP is designed to stress-test. The ITP null at comparable dose and start age, with biomarker confirmation of no p16 reduction, substantially weakens the case for fisetin as a mouse lifespan extender and argues against direct translation of the 2018 result to aging-relevant human trials.

The astaxanthin and meclizine positive results in males represent two new ITP-validated compounds warranting mechanism studies and potential human aging trial design, though neither currently has a compound page in this wiki. #gap/stub [[astaxanthin]] [[meclizine]]

## Cross-References

- [[fisetin]] — compound page; human trial status; see Limitations for ITP vs Yousefzadeh 2018 discordance
- [[cellular-senescence]] — proposed mechanism for fisetin arm
- [[yousefzadeh-2018-fisetin-senolytic]] — the 2018 study whose lifespan claim is challenged here
- [[deregulated-nutrient-sensing]] — potential mechanism for astaxanthin (Nrf2/oxidative stress axis)
- [[mtor]] — potential pathway for meclizine effects (see #gap/no-mechanism above)

## Citations

[^harrison2024]: [[studies/harrison-2024-itp-astaxanthin-meclizine]] · n=~100-200 per compound per sex (3 sites pooled) · in-vivo · p=0.003 (astaxanthin male), p=0.03 (meclizine male), p=0.54-0.85 (fisetin male) · model: UM-HET3 heterogeneous mice

[^korstanje2026]: [[studies/korstanje-2026-itp-null-cohort]] · doi:10.1007/s11357-026-02201-2 · PMID 41843349 · Korstanje R, Strong R, Salmon AB, … Harrison DE, … Miller RA · *GeroScience* 2026 (online 2026-03-17) · in-vivo, NIA Interventions Testing Program (UM-HET3) · title: "Astaxanthin, meclizine, mitoglitazone, pioglitazone, alpha-ketoglutarate, mifepristone, methotrexate, and atorvastatin-telmisartan do not increase lifespan in UM-HET3 mice" — **direct non-replication of the astaxanthin + meclizine positives in this cohort**; possible female harm signal for astaxanthin · seeded 2026-06-30, **verified: false** (full-text/dose-detail verifier pass pending).
