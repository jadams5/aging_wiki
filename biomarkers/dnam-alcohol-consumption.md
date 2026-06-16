---
type: biomarker
aliases: [DNAm-Alc, DNAm alcohol, alcohol epigenetic biomarker, DNA methylation alcohol consumption, TruAge alcohol biomarker]
modality: dna-methylation
unit: percentile
training-cohort: "Liu 2018: 13,317 participants across 13 population-based cohorts (training + replication); LASSO-selected 144-CpG composite model"
n-cpgs-or-features: 144
model-architecture: lasso
training-target: exposure   # predicts an external exposure quantity (alcohol intake), not an age/vital outcome; `exposure` added to the enum per R56 (2026-06-14)
calibration-tissues: ["whole-blood"]
test-retest-icc: null
human-evidence-level: limited   # strong at the heavy-drinking end (AUC 0.90–0.99 for heavy vs non-drinker); weak for grading light/moderate intake; limited as a general-population continuous predictor
mendelian-randomization: not-tested
intervention-responsive: yes
literature-checked-through: 2026-06-14
verified: true
verified-date: 2026-06-14
verified-by: claude
verified-scope: "All three primary PDFs read end-to-end (Liu 2018 PMC5575985, Yousefi 2019 PMC6880546, Lohoff 2022 PMC9095480). Major correction: SLC7A11/cg06690548 attribution moved from Liu 2018 to Lohoff 2022 (Liu 2018 does not mention this CpG or gene among its top hits). Three identifier footnotes (koppula2021, jiang2009, hnrnpa1review2021) confirmed via Crossref; first author of hnrnpa1review2021 filled in as Clarke JP. Recency-search (Clark 2026, Dragic 2025, Coltell 2026) shows no supersession of Liu 2018 core findings. TruDiagnostic percentile-transform details unverifiable (proprietary). Recency search performed 2026-06-14."
---

# DNAm Alcohol Consumption Biomarker (DNAm-Alc)

A 144-CpG blood DNA methylation composite that predicts current alcohol intake, developed by Liu et al. 2018 across 13 population-based cohorts (n=13,317). It discriminates heavy drinkers from non-drinkers with high accuracy (AUC 0.90–0.99) but explains only ~7.6% of intake variance in the general population, making it a strong case-identification tool at the heavy end and a weak continuous intake estimator elsewhere. The signal is dynamic: it tracks concurrent intake and largely reverts with sustained abstinence. This biomarker is the basis of TruDiagnostic's TruAge COMPLETE "Alcohol epigenetic biomarker" output.

**Critical disambiguation:** DNAm-Alc is NOT a component of [[biomarkers/grimage-2019]]. GrimAge contains a DNAm pack-years surrogate for tobacco smoking but has no alcohol sub-predictor. Any implication that DNAm-Alc is embedded in GrimAge or that GrimAge captures alcohol intake is incorrect.

## Identity and Development

- **Primary citation:** Liu C, Marioni RE, Hedman ÅK, et al. (2018) "A DNA methylation biomarker of alcohol consumption." *Molecular Psychiatry* 23(2):422–433 (published online November 15, 2016).
- **DOI:** 10.1038/mp.2016.192 — confirmed via Crossref and PubMed.
- **PMID:** 27843151 — confirmed.
- **PMC:** PMC5575985 — confirmed (open access).
- **Study design:** Epigenome-wide association study (EWAS) across 13 population-based cohorts; discovery + replication design; LASSO regression for feature selection.
- **Sample:** 13,317 participants of predominantly European ancestry; alcohol intake self-reported.
- **Key investigators:** Chunyu Liu (first), Daniel Levy (senior/last); co-authors include Åsa K. Hedman, Lerong Min, and the consortium.

## Model Architecture

The Liu 2018 model is a weighted **composite of 144 CpG sites** selected from 333 candidates (those surpassing replication significance in independent cohorts) by LASSO logistic and linear regression. Sub-models of 5, 23, and 78 CpGs were also tested; the 144-CpG model achieves the best discrimination. The output is a scalar score reflecting predicted alcohol consumption and is converted by TruDiagnostic to a percentile relative to an age- and sex-matched reference population.

The score is blood-specific. The 144 CpGs were selected from Illumina Infinium 450K arrays; the model is applied on 450K or EPIC platforms. Replication CpG availability on alternative methylation platforms (e.g., targeted amplicon sequencing panels) is not established.

## Top Biological Loci

The most biologically validated site in the DNAm-Alc composite is **cg06690548**, located in the promoter region of **SLC7A11** (encoding the cystine/glutamate antiporter, also called xCT). **This site was not among the top hits in Liu 2018 itself** — it was first definitively elevated to genome-wide significance by Lohoff et al. 2022, the largest single-cohort EWAS of alcohol consumption to date (n=8,161), which identified SLC7A11/cg06690548 as the top genome-wide target (Z=−22.06, p=7.75×10⁻¹⁰⁸) [^lohoff2022]. The association is one of hypomethylation: lower methylation at cg06690548 accompanies higher alcohol intake, and corresponds to increased SLC7A11 expression in rat liver (chronic alcohol-fed model, p=0.0006) and in the prefrontal cortex (PFC) of deceased AUD patients (p=0.0352) [^lohoff2022]. A 2026 large-scale multi-cohort study by Clark et al. (n not yet confirmed from abstract; reported as "large-scale") replicated SLC7A11 as a robust hit and provided cell-type-specific decomposition showing granulocyte and T-cell subtype contributions [^clark2026].

The top CpGs in the Liu 2018 EWAS (Table 3 of that paper, continuous alcohol trait, European ancestry whole blood) include cg03523740 in **TXLNA**, cg13729116 in **LETM1** (mitochondrial calcium/proton antiporter), cg02583484 in **HNRNPA1** (heterogeneous nuclear ribonucleoprotein A1), and sites in GABRD/GABBR1 (GABA receptor genes) [^liu2018]. None of these were SLC7A11. The composite should always be interpreted as a system-level predictor rather than a single-gene biomarker.

| CpG | Gene | Direction with intake | Biological function | Replication confidence |
|---|---|---|---|---|
| cg06690548 | SLC7A11 (xCT) | Hypo | Cystine/glutamate antiporter; GSH synthesis | High — top hit Lohoff 2022 (n=8,161), confirmed Clark 2026; NOT a top-30 hit in original Liu 2018 |
| cg13729116 | LETM1 | Hypo | Mitochondrial Ca2+/H+ transport | Moderate — EWAS replication only; top hit in Liu 2018 Manhattan plot |
| cg02583484 | HNRNPA1 | Variable | RNA splicing, stress granule formation | Moderate — top hit in Liu 2018 Manhattan plot; EWAS replication only |

### Downstream biology of the top locus — marker vs mechanism

Functional follow-up of the 144 CpGs has concentrated almost entirely on **SLC7A11**, which is the one locus elevated from *statistical marker* to *plausible mechanism*. The other hits remain associations whose host genes are well-characterized only in unrelated contexts.

**SLC7A11 / xCT — a validated mechanistic chain.** Lohoff et al. 2022 established the full sequence: alcohol → hypomethylation at cg06690548 → **increased SLC7A11 expression**, documented in the **prefrontal cortex (PFC) of deceased alcohol-use-disorder patients** (p=0.0352) and in the **liver of a chronic alcohol-fed rat model** (p=0.0006), with lower methylation tracking more heavy-drinking days and higher GGT/ALT/AST [^lohoff2022]. The protein it encodes (xCT, the light chain of system xc⁻) has two well-established downstream axes [^koppula2021]:

1. **Redox / ferroptosis:** xCT imports cystine, the rate-limiting precursor for **glutathione synthesis** and antioxidant defense, making SLC7A11 a master regulator of **ferroptosis** (iron-dependent lipid-peroxidation cell death). This connects mechanistically to alcohol's oxidative tissue injury.
2. **Glutamate signaling:** xCT exports glutamate, so altered expression shifts **glutamatergic neurotransmission** — a core pathway in addiction neurobiology, craving, and dependence. Lohoff frames the alcohol-driven SLC7A11 change as abnormal glutamate signaling and a candidate **therapeutic target for alcohol use disorder** [^lohoff2022].

**LETM1 and HNRNPA1 — known genes, no alcohol-context validation.** Their host genes have rich biology, but no study has shown that the alcohol-associated methylation mark actually alters their function. **LETM1** is an inner-mitochondrial-membrane Ca²⁺/H⁺ antiporter governing mitochondrial calcium homeostasis, ATP generation, and glucose oxidation (its loss disrupts brain function; it is the gene deleted in Wolf–Hirschhorn syndrome) [^jiang2009] — a plausible but untested tie to alcohol's mitochondrial toxicity. **HNRNPA1** is an RNA-binding protein controlling pre-mRNA splicing, mRNA transport, microRNA processing, and telomere maintenance, with dysfunction implicated in neurodegeneration (ALS, frontotemporal dementia, multiple sclerosis) [^hnrnpa1review2021] — again, no demonstrated alcohol-methylation→function link.

**General EWAS caveat:** as with most methylation association studies, whether the alcohol-linked marks at these secondary sites are **causal/functional vs passenger marks** (or reflect blood cell-composition shifts or reverse causation) is untested for every locus except SLC7A11. Newer cell-type-resolved and brain-tissue work (Clark 2026; nucleus-accumbens/prefrontal-cortex AUD methylomes) may promote additional hits from marker to mechanism, but as of this writing SLC7A11 is the sole crossover. #gap/no-mechanism — functional validation of non-SLC7A11 top CpGs.

## Performance Characteristics

### Heavy-drinker discrimination (strong signal)

The original Liu 2018 analysis reports:

- **Heavy drinkers vs non-drinkers:** AUC 0.90–0.99 across validation cohorts — substantially outperforms alanine aminotransferase (ALT) and aspartate aminotransferase (AST), which reach AUC ~0.67 for the same comparison [^liu2018].
- **Heavy vs light drinkers:** AUC 0.85–0.99.

These figures represent the most clinically actionable use case for DNAm-Alc: reliably flagging heavy/hazardous drinkers from a blood draw, without depending on self-report. The biomarker may be particularly useful where alcohol-related liver injury is suspected but self-disclosure is unreliable.

### General-population continuous intake (weak signal)

In general (non-clinical) populations the biomarker's continuous-intake predictive power is modest [^yousefi2019]:

- In the ALSPAC midlife cohort (n=1,049), the 144-CpG composite explained **~7.6% of variance** in reported alcohol intake.
- In the HN5000 clinical cohort (higher average consumption), variance explained rose to **~14.3%**, suggesting performance scales with the range of intake in the reference population.
- For the AUDIT score (capturing problematic use patterns), the biomarker explained **~8.8% of variance** in ALSPAC at midlife in the primary analysis (Table 1 of Yousefi 2019); **~9.8%** in the sensitivity analysis excluding non-drinkers (Additional file 2 — this is the figure reported in the abstract).
- AUC for distinguishing any drinker vs non-drinker in general population samples is approximately **0.57–0.60** — near the chance boundary.

This weak performance in light/moderate drinker populations means DNAm-Alc should not be used to grade intake within the physiologically normal range. #gap/dose-response-unclear

### Epigenetic age acceleration (secondary finding)

Stephenson et al. 2021 examined Finnish twin pairs (n not retrieved from abstract) and found associations between alcohol consumption and both epigenome-wide methylation changes and epigenetic age acceleration across multiple clocks [^stephenson2021]. #gap/needs-replication — the clock-acceleration associations require independent replication in non-twin cohorts with objective intake verification.

## Training Target and Schema Note

DNAm-Alc predicts an **exposure quantity** (alcohol intake level), not a biological age or vital outcome — a class the original `training-target:` enum (`chronological-age | mortality | morbidity | pace`) did not cover. Seeding this page surfaced that gap, resolved by **R56 (2026-06-14): `exposure` was added to the enum** for DNAm/omic predictors of external exposures (alcohol, smoking intensity, BMI, dietary pattern). This page now uses `training-target: exposure`. Note the distinction from a `type: exposure` page (R53): [[exposures/alcohol]] is the *risk factor itself*, whereas this `exposure`-target biomarker is the *methylation readout that estimates* that exposure; the two cross-link. See `schema-history.md` § R56.

## Reversibility

DNAm-Alc reflects **current and recent intake rather than permanent lifetime alcohol exposure**. Two lines of evidence support this:

1. **Liu 2018 longitudinal analysis (Framingham Heart Study):** In participants with Framingham exams ~4 years apart, the DNAm-Alc score tracked change in alcohol intake between exams. Individuals who reduced intake showed corresponding score reductions; those who abstained showed reversion toward baseline non-drinker values [^liu2018].

2. **Yousefi et al. 2019 life-course analysis:** In the ALSPAC cohort, DNAm-Alc measured during pregnancy (a period of reduced intake) was not predictive of AUDIT scores at midlife. Only concurrent measurement was associated with concurrent intake. This temporal dissociation rules out genetic confounding as the primary explanation and supports the interpretation that the biomarker marks current biological state rather than early-life programming [^yousefi2019].

The speed of reversion has not been precisely characterized — the Framingham data suggests it occurs over multi-year timescales, but whether reversion is complete or partial with different abstinence durations remains unclear. #gap/long-term-unknown

## Reporting by TruDiagnostic (TruAge COMPLETE)

TruDiagnostic's TruAge COMPLETE panel reports DNAm-Alc as a **percentile** score relative to a reference cohort matched for age (±5 years) and sex. The specific risk bands used are:

- Normal: below the 70th percentile
- Intermediate: approximately 70th–80th percentile
- High: at or above the 80th percentile

The exact scoring algorithm, reference cohort composition, and percentile-transform methodology are **proprietary and unpublished**. The underlying 144-CpG Liu 2018 model is the public component; the percentile conversion is TruDiagnostic-specific. Users should interpret the percentile relative to the stated reference population rather than treating it as an absolute biomarker of intake.

Note: TruDiagnostic's panel also includes GrimAge components and DunedinPACE, but these are reported separately. DNAm-Alc is an independent output that does not feed into those composites.

## Relationship to Aging Clocks

DNAm-Alc is structurally distinct from mortality- and pace-clocks:

| Dimension | DNAm-Alc | GrimAge | DunedinPACE |
|---|---|---|---|
| Training target | Alcohol intake (exposure) | Time-to-death (mortality) | Longitudinal pace of biological change |
| Output unit | Percentile or score | Biological age (years) | Rate |
| Smoking component | None | Yes (DNAm pack-years) | Yes (indirect, via pace) |
| Alcohol component | **Yes** (the whole predictor) | **No** | No (not designed to) |
| Intervention-responsive | Yes (tracks intake changes) | Partial (weakly) | Yes |

Heavy drinking is associated with accelerated biological age across multiple DNAm clocks. However, DNAm-Alc itself is not a clock — it does not output a biological age estimate and does not predict mortality independently of the intake it captures. For mortality/morbidity prediction downstream of alcohol intake, clinicians should consult [[biomarkers/grimage-2019]] or [[biomarkers/phenoage-2018]] as separate outputs.

## Recent Literature (R25 Recency Search — 2021–2026)

Search performed 2026-06-14 via PubMed eutils (term: "DNA methylation alcohol biomarker epigenetic", date range 2021-01-01 to 2026-06-14; secondary: "SLC7A11 DNA methylation alcohol"; tertiary: "alcohol DNA methylation biomarker" broad recent). High-priority hits triaged below:

**Lohoff et al. 2022** (PMID 34857913) — single largest EWAS to that date (n=8,161), confirmed SLC7A11 cg06690548 as the top genome-wide alcohol-associated site, characterized relevance to alcohol use disorder pathophysiology [^lohoff2022]. Must-include: definitive SLC7A11 biological confirmation.

**Dragic et al. 2022** (PMID 35762294) — systematic review of observational studies of alcohol consumption and blood DNA methylation [^dragic2022]. Confirms the cross-cohort generalizability of the Liu 2018 signature but notes heterogeneity in effect estimates.

**Stephenson et al. 2021** (PMID 33277923) — Finnish twin EWAS; adds evidence for epigenetic age acceleration from alcohol consumption; twin design partially controls genetic confounding [^stephenson2021].

**Clark et al. 2026** (PMID 41699103) — large-scale multi-cohort DNAm study of alcohol use, cell-type-specific decomposition, published *Molecular Psychiatry* 2026 [^clark2026]. Must-include: most recent authoritative EWAS; replicates SLC7A11 and provides cell-type insights not in the 2018 original.

**Dragic et al. 2025** (PMID 40624694) — French E3N cohort EWAS of alcohol and DNA methylation; independent European-ancestry replication [^dragic2025].

**Coltell et al. 2026** (PMID 41750578) — Mediterranean cohort; alcohol × oxidative-stress-linked methylation changes; identifies overlap with aging biomarker CpGs [^coltell2026]. Discretionary inclusion — no direct challenge to Liu 2018 findings; cited for the aging-biomarker intersection.

No meta-analyses or RCTs were retrieved for DNAm-Alc specifically (not an intervention target). The dominant study design in this literature is observational EWAS across population cohorts.

**Discordance note:** No major 2021–2026 study contradicts Liu 2018's core findings. The newer EWASs (Lohoff 2022, Clark 2026) uniformly converge on SLC7A11 as the top site, adding credibility. The main tension across papers is that variance-explained at the general-population level (~7–15%) is consistently weaker than AUC at the heavy-drinker end, confirming the non-linear utility profile in the original publication.

## Ancestry and Generalizability

The Liu 2018 training cohorts were composed predominantly of European-ancestry individuals. The Stephenson 2021 Finnish twin cohort and Dragic 2025 French E3N cohort are similarly European-anchored. No large-scale validation in non-European ancestry populations has been confirmed from this search. Cross-ancestry portability of LASSO-based CpG models is not guaranteed; population-specific CpG-effect magnitudes and LD patterns at methylation QTLs may differ. #gap/needs-human-replication — non-European ancestry validation.

## Limitations and Gaps

1. **Blood-only.** Trained and validated exclusively in peripheral blood; not validated in liver (the primary alcohol-injury organ) or brain tissue. Brain EWAS of alcohol use disorder (e.g., Zillich 2022, PMID 34775485) report partially overlapping but distinct CpG sets, limiting cross-tissue inference.
2. **Self-reported intake in training data.** Alcohol consumption was self-reported across all 13 training cohorts, introducing measurement error that may attenuate estimated predictive performance. Objective biomarker comparators (PEth, CDT) were not used as training labels.
3. **Weak in the non-heavy range.** AUC ~0.57–0.60 for general-population discrimination means this biomarker cannot reliably grade intake for individuals who drink in the light-to-moderate range. #gap/dose-response-unclear
4. **Proprietary percentile transform.** TruDiagnostic's reference cohort and risk-band thresholds are not publicly documented; comparisons across labs or platforms require caution.
5. **Reversion timeline uncharacterized.** While reversion with abstinence is established in principle, the time-course (weeks vs months vs years) is not precisely characterized. #gap/long-term-unknown
6. **Mendelian randomization not tested.** No MR study using genetic instruments for DNAm-Alc CpG methylation has been identified; directionality of the methylation → biology relationship is inferred from observational data. #gap/needs-replication — MR study needed.
7. **Age-dependent performance.** Yousefi 2019 found substantially weaker predictive capacity in adolescents even at comparable self-reported intake, suggesting the 144-CpG model reflects long-term biological remodeling accumulated over years of exposure rather than acute intake. This limits use in younger individuals.

## Cross-References

- [[exposures/alcohol]] — the modifiable-exposure page; DNAm-Alc is the epigenetic readout of this exposure
- [[biomarkers/grimage-2019]] — mortality clock; includes DNAm pack-years (smoking) but NO alcohol component; must not be conflated with DNAm-Alc
- [[biomarkers/omicmage]] — multi-omic aging composite; relationship to DNAm-Alc not yet characterized
- [[biomarkers/dunedinpace-2022]] — pace clock; separately reported on TruAge COMPLETE; not an alcohol predictor
- [[biomarkers/phenoage-2018]] — sister mortality-trained clock; reported on the same panel
- [[hallmarks/epigenetic-alterations]] — the hallmark that alcohol exposure perturbs, per [[exposures/alcohol]]
- [[frameworks/biological-age-measurement]] — cross-clock comparison MOC

## Footnotes

[^liu2018]: doi:10.1038/mp.2016.192 · n=13,317 (discovery + replication across 13 population-based cohorts; 9,643 European + 2,423 African ancestry whole blood + 1,251 CD14+ monocytes) · EWAS + LASSO regression · model: adult humans, predominantly European ancestry, whole blood, Illumina 450K · 144-CpG composite selected from 333 replication-significant candidates · AUC heavy vs non-drinker 0.90–0.99; heavy vs light 0.85–0.99; ALT/AST comparator AUC ~0.67 · variance explained in replication cohorts: 12.0–13.8% (KORA F4, LBC1936, ARIC, MESA) — note: the 7.6% ALSPAC figure derives from Yousefi 2019, not this paper · top EWAS CpGs include TXLNA (cg03523740), LETM1 (cg13729116), HNRNPA1 (cg02583484), GABRD/GABBR1 loci; SLC7A11 was NOT a top Liu 2018 hit · Framingham longitudinal analysis: DNAm-Alc score reverts with abstinence over ~4 yr inter-exam interval · Mol Psychiatry 2018 · PMC5575985 · Liu C et al.

[^yousefi2019]: doi:10.1186/s13148-019-0753-7 · n=1,049 (ALSPAC midlife parents, mean age 50.2 yr) + HN5000 replication cohort (N=281 European-ancestry subset, oropharyngeal cancer, mean age 58.4 yr) · observational (cross-sectional + longitudinal life-course, two generations) · model: adult humans, European ancestry, whole blood (HM450 + EPIC arrays) · variance explained by 144-CpG model: 7.63% of alcohol intake (ALSPAC midlife, Table 1); 14.3% (HN5000 replication, higher average intake cohort); 8.81% of AUDIT score at midlife (Table 1); 9.8% of AUDIT excluding non-drinkers (sensitivity analysis, Additional file 2) — the abstract cites the 9.8% sensitivity-analysis figure · DNAm-Alc during pregnancy (β=0.15, p=0.557) not predictive of midlife AUDIT, whereas concurrent midlife DNAm-Alc (β=1.63, p<0.001) was strongly predictive — argues against genetic confounding; temporal specificity supports current-intake interpretation · Clin Epigenetics 2019 · PMID 31775873 · Yousefi PD, Richmond R, Langdon R, et al. (incl. Liu C, Levy D, Zuccolo L)

[^lohoff2022]: doi:10.1038/s41380-021-01378-6 · n=8,161 (meta-analysis of two Generation Scotland EWAS waves; single largest cohort EWAS of alcohol consumption to date) · EWAS · model: adult humans, whole blood (MethylationEPIC 450K array) · cg06690548 / SLC7A11 identified as top genome-wide alcohol-associated CpG (Z=−22.06, p=7.75×10⁻¹⁰⁸); hypomethylation associates with heavy drinking days and elevated GGT (p=1.03×10⁻²¹), ALT (p=1.29×10⁻⁶), AST (p=1.97×10⁻⁸); increased SLC7A11 mRNA in prefrontal cortex of deceased AUD patients (p=0.0352) and rat liver (chronic alcohol-fed model, p=0.0006); MR confirms AC→AUD causal direction; AUC for AUD discrimination 0.81–0.92 across two cohorts · Mol Psychiatry 2022;27(3):1754–1764 · PMID 34857913 · Lohoff FW (first); Evans KL (last)

[^stephenson2021]: doi:10.1111/acer.14528 · Finnish twin cohort · observational EWAS (twin-design partially controls genetic confounding) · model: adult human twins, blood · found associations between alcohol intake and epigenome-wide methylation changes and epigenetic age acceleration · Alcohol Clin Exp Res 2021;45(2):318–328 · PMID 33277923 · Stephenson M et al.

[^dragic2022]: doi:10.2217/epi-2022-0055 · systematic review of observational studies · model: human adult blood-based studies · confirms cross-cohort generalizability of alcohol–methylation associations; notes heterogeneity in effect estimates · Epigenomics 2022 · PMID 35762294 · Dragic D et al.

[^clark2026]: doi:10.1038/s41380-026-03477-8 · large-scale multi-cohort EWAS with cell-type-specific decomposition · model: adult humans, whole blood (cell-type deconvoluted) · SLC7A11 replicated as robust top hit; granulocyte and T-cell subtype contributions identified · Mol Psychiatry 2026;31(6):3506–3515 · PMID 41699103 · Clark SL et al.

[^dragic2025]: doi:10.1186/s13148-025-01893-1 · French E3N cohort EWAS · observational · model: adult European-ancestry women, blood · independent replication of SLC7A11 and other Liu 2018 sites · Clin Epigenetics 2025 · PMID 40624694 · Dragic D et al.

[^coltell2026]: doi:10.3390/antiox15020197 · Mediterranean cohort · observational · model: adult humans, blood · examines overlap between alcohol-associated CpGs and oxidative-stress / aging biomarker methylation sites · Antioxidants (Basel) 2026 · PMID 41750578 · Coltell O et al.

[^koppula2021]: doi:10.1007/s13238-020-00789-5 · review · SLC7A11/xCT (system xc⁻) cystine import → glutathione synthesis + antioxidant/redox defense; master regulator of ferroptosis; glutamate export → glutamatergic signaling · *Protein & Cell* 2021;12(8):599–620 · Koppula P, Zhuang L, Gan B · DOI, authors, journal, volume/issue/pages confirmed via Crossref (published online 2020, issue year 2021)

[^jiang2009]: doi:10.1126/science.1175145 · genome-wide RNAi screen · LETM1 identified as a mitochondrial Ca²⁺/H⁺ antiporter; knockdown reduces mitochondrial Ca²⁺ uptake + impairs ATP generation · *Science* 2009;326(5949):144–147 · Jiang D, Zhao L, Clapham D · DOI, title, authors, journal, volume/issue/pages confirmed via Crossref

[^hnrnpa1review2021]: doi:10.3389/fmolb.2021.659610 · review · hnRNP A1 functions (pre-mRNA splicing, mRNA transport, miRNA processing, telomere maintenance) and dysfunction in neurodegeneration (ALS, FTD, MS) · *Frontiers in Molecular Biosciences* 2021;8:659610 · Clarke JP, Thibault PA, Salapa HE, Levin MC · DOI, title, first author (Clarke JP), journal, year, article number confirmed via Crossref
