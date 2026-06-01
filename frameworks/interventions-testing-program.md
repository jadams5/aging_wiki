---
type: framework
aliases: [ITP, NIA Interventions Testing Program, Aging Interventions Testing Program, NIA-ITP]
sources:
  - "[[studies/...]]"
covers: [interventions, model-organisms]
---

> Verification pass 2026-05-14 (claude): 4 PDFs read in full (Nadon 2008, Cheng 2019, Jiang 2024, Snyder 2025); 7 citations verified at abstract level only (Miller 2007, Nadon 2006, Korstanje 2026, Jiang 2025, Bou Sleiman 2022, Mokalla 2026, Parker 2025). Key corrections: Cheng 2019 female advantage (~10% median, not ~25%); Snyder paper is Snyder 2025 not 2026; Korstanje tested 11 interventions not 8; Snyder 2025 covers both 16α-hydroxyestradiol AND canagliflozin; cohort sizes per Nadon 2008 are 36F/44M per site per arm. GTE corrected: it is positive by Gehan test in females (+7%) and should not appear unqualified in the negative table.

# NIA Interventions Testing Program

The **NIA Interventions Testing Program (ITP)** is a US National Institute on Aging multi-site program testing candidate longevity-extending compounds in genetically heterogeneous mice (UM-HET3) under a pre-specified protocol, with parallel cohorts at three independent sites (Jackson Laboratory, University of Michigan, UT Health San Antonio). It is the **gold-standard methodology for mouse longevity claims** and the empirical centerpiece of the geroscience field's response to lab-mouse-confound and single-site replication failure.

This is a navigational MOC over the ITP-related compound pages, methodology papers, and the recent ITP meta-analyses. Per-compound details live on the compound pages.

## Why ITP exists

The ITP was designed to address two failure modes documented elsewhere in the wiki (see [[mus-musculus]] § Lab-mouse confounds; [[hypotheses/translation-failure-of-aging-interventions]] § Tier 1):

1. **Strain-background artifacts.** Many published mouse longevity results in single inbred strains (typically C57BL/6) fail to replicate in different strains or in heterogeneous backgrounds.
2. **Single-lab non-replication.** Mouse lifespan results are sensitive to husbandry, diet, ambient temperature, microbiome, and operator practice. Single-lab positive results in mouse aging are routinely not reproduced.

The ITP responds to both: heterogeneous-stock + multi-site simultaneously, with pre-specified protocols and analysis plans.

## Methodology

| Design element | Implementation |
|---|---|
| Genetic background | UM-HET3 — 4-way F1 cross of (BALB/cByJ × C57BL/6J) females with (C3H/HeJ × DBA/2J) males. Designed to minimize single-background artifacts while preserving genetic tractability. |
| Sites | Three independent NIA-funded sites: Jackson Laboratory (JAX), University of Michigan (UM), UT Health San Antonio (UTHSA). Cohorts at each site run simultaneously under harmonized SOPs. |
| Sexes | Males and females tested separately. Pre-specified sex-stratified analysis. |
| Cohort size | Designed minimum per Nadon 2008: 36 females + 44 males per site per arm (cross-site total 108F + 132M per arm); control group 2× size. Current cohorts may be larger — exact current standard not confirmed from OA papers. #gap/needs-citation-pass |
| Treatment onset | Most compounds started young (4–6 months) or middle-aged; specific compounds tested late-life (Harrison 2009 rapamycin started at 600 d ~20 months). |
| Endpoint | Lifespan (median + maximum + 90th percentile). Pathology endpoints in some cohorts. |
| Pre-specification | Compound, dose, formulation, onset age, statistical plan all pre-specified. Open call for compound nominations annually. |
| Statistical convention | Log-rank for primary endpoint; pre-specified secondary tests including Gehan-Breslow-Wilcoxon (more weight on early survival differences — see Jiang 2024 [^jiang2024]). |

Founding methodology papers: Miller 2007 [^miller2007] (study design + interim report); Nadon 2008 [^nadon2008] (full design rationale); Nadon 2006 [^nadon2006] (rodent-model pharmacology framework).

## Positive ITP results (extends lifespan in at least one sex)

| Intervention | Result | Sex specificity | Reference |
|---|---|---|---|
| [[rapamycin]] (14 mg/kg food) | +9% ♂, +13% ♀ median; both sexes | Both | Harrison 2009 [^harrison2009] |
| 17α-estradiol (14.4 ppm) | +19% ♂ median | Male only | Strong 2016 [^strong2016] |
| Acarbose (1000 ppm, from 16 mo) | +6% ♂ median; +2% ♀ (NS) | Male-biased | Strong 2016 [^strong2016] |
| Canagliflozin (SGLT2 inhibitor) | ~14% ♂ | Male-biased; #gap/needs-replication | ITP 2020 cohort |
| 16α-hydroxyestradiol | Male lifespan +15%; female lifespan −7% (harm); end-of-life pathology characterized in Snyder 2025 jointly with late-start canagliflozin | Male-only benefit; female harm | Snyder 2025 [^snyder2026] |
| Captopril, NDGA, glycine, aspirin | Modest or single-sex; older ITP cohorts | Male-biased pattern | Various; #gap/needs-citation-pass |

The male-biased pattern in the ITP positive-result set is the single most striking finding to emerge from the program. See § Sex differences below.

## Negative ITP results (notable failures)

The list of ITP-tested compounds that **failed** to extend lifespan is at least as informative as the positive list — these are interventions for which positive results were published in single-strain mice, supplement-industry-promoted, or biologically plausible:

| Intervention | Reason for testing | Result | Reference |
|---|---|---|---|
| Astaxanthin | Antioxidant; supplement-industry-promoted | No lifespan effect at new dose/starting age; prior ITP cohort showed positive | Korstanje 2026 [^korstanje2026] |
| Meclizine | mTORC1 modulator | No lifespan effect at new dose/starting age; prior ITP cohort showed positive | Korstanje 2026 [^korstanje2026] |
| Mitoglitazone | PPAR-γ partial agonist | No lifespan effect at new dose/starting age; prior ITP cohort showed positive; female lifespan decreased at two sites | Korstanje 2026 [^korstanje2026] |
| Pioglitazone | PPAR-γ agonist | No lifespan effect; female lifespan decreased at two sites | Korstanje 2026 [^korstanje2026] |
| α-Ketoglutarate | Geroprotector candidate (Asadi Shahmirzadi 2020 mouse paper) | No lifespan effect | Korstanje 2026 [^korstanje2026] |
| Mifepristone | Glucocorticoid antagonist | No lifespan effect | Korstanje 2026 [^korstanje2026] |
| Methotrexate | Autophagy modulator candidate | No lifespan effect | Korstanje 2026 [^korstanje2026] |
| Atorvastatin + telmisartan | Combination cardiovascular drugs | No lifespan effect | Korstanje 2026 [^korstanje2026] |
| 3 additional interventions (unnamed in title) | Paper tested 11 interventions total; 3 not named in title | No lifespan effect | Korstanje 2026 [^korstanje2026]; #gap/needs-full-text — cannot identify the 3 unlisted interventions without full-text access (paper not OA) |
| Resveratrol | Sirtuin activator; STAC class | No lifespan effect in earlier ITP cohort | Strong 2008 / Miller 2011 cohorts; #gap/needs-citation-pass |
| Methylene blue | Mitochondrial electron-shuttle | No lifespan effect | Strong 2008 cohort; #gap/needs-citation-pass |
| Curcumin | Antioxidant supplement | No lifespan effect | Earlier ITP cohort; #gap/needs-citation-pass |
| Green tea extract (GTE) | Antioxidant supplement | No lifespan effect by **log-rank**; however, Jiang 2024 [^jiang2024] reanalysis using Gehan test found +7% female median lifespan (p=0.0344) — reclassified as positive-by-Gehan in females | See Jiang 2024 [^jiang2024] |
| Many others (~30+ compounds) | Various | Negative | Comprehensive listing requires per-cohort study-page pass |

The 2026 Korstanje cohort [^korstanje2026] is particularly informative because it tests **11 interventions** (8 compound-groups named in the title plus 3 additional re-tests of previously-positive compounds at new doses/ages) and finds **none** extend lifespan. The class includes several biologically plausible candidates (PPAR-γ agonists, α-KG, methotrexate) whose single-lab mouse data did not replicate in UM-HET3. Notably, the 3 previously-positive compounds (astaxanthin, meclizine, mitoglitazone) failed when tested at different doses or later starting ages, underscoring the sensitivity of ITP outcomes to timing and dose. Full compound list for the 3 unlisted interventions requires full-text access (paper not OA). #gap/needs-full-text

## Sex differences — the dominant ITP finding

A central observation across 20 years of ITP results: **most positive compounds extend lifespan in males but not females, or with substantially larger effect in males.** Jiang et al. (2025) [^jiang2025] reviewed two decades of ITP data and concluded that biological sex is a major determinant of pro-longevity drug efficacy, with the male-biased pattern far more common than the reverse.

Possible explanations (not yet adjudicated by the wiki):
- UM-HET3 females already have a survival advantage (Cheng 2019 [^cheng2019] documented ~10% female-survival advantage by median lifespan in UM-HET3: females 887 days 95% CI 879–898 vs males 803 days 95% CI 791–815; n=3,690 control mice), leaving less room for further extension.
- Sex-specific pharmacokinetics — many compounds have different metabolism in male vs female mice.
- The set of pathways most modulated by ITP-tested compounds (mTOR, AMPK, insulin/IGF) interact differently with sex hormones.
- Bou Sleiman 2022 *Science* [^bousleiman2022] used the UM-HET3 + parent-strain genetic architecture to map sex-and-age-dependent longevity QTLs, demonstrating that the genetic determinants of mouse longevity differ substantially between sexes and across the lifespan.

The wiki should treat any "ITP-positive in one sex" result as a partial-translation finding pending sex-stratified human data.

## What ITP-validation means for human translation

ITP-validation removes strain-background and single-lab confounds. It does **not** remove the other tiers of translation barriers documented on [[hypotheses/translation-failure-of-aging-interventions]]:

- ITP mice are still **SPF-housed, ad libitum-fed, sedentary, sub-thermoneutral, microbiome-impoverished** — the lab-mouse confounds (Martin/Mattson 2010) apply equally to UM-HET3.
- ITP mice still **die predominantly from cancer** (~70%); ITP positive results may reflect cancer-suppression more than aging-mechanism engagement.
- ITP mice are still 30× shorter-lived than humans; **time-scaling** problems still apply.
- ITP positive ≠ human positive: rapamycin is the strongest ITP-positive intervention and has produced null results in PEARL 2025 and [[studies/stanfield-2026-rapa-ex-01]] (RAPA-EX-01 2026). See [[rapamycin]] for the full translation history.

**ITP-validation is necessary but not sufficient** for confidence in a human aging intervention. The translation-failure frame predicts that even ITP-validated compounds will show shrunken effect sizes in humans — and so far the evidence (rapamycin specifically) is consistent with that prediction.

## Cross-vertebrate corroboration

The Ivimey-Cook 2025 *Aging Cell* meta-analysis [^ivimeycook2025] independently corroborates which ITP-positive compounds generalize across vertebrates: **rapamycin** and **dietary restriction** mirror each other and extend lifespan across vertebrate species; **metformin does not.** This is consistent with the ITP record — rapamycin is the strongest ITP-positive, while metformin's single-strain C57BL/6 positive result (Martin-Montalvo 2013) did not replicate in UM-HET3 (the B6C3F1 replication cohort was non-significant, p=0.064 — see [[metformin]]).

The convergence of ITP-internal replication and cross-vertebrate meta-analysis is the strongest empirical signal currently available for which mouse longevity claims are likely translation-resilient.

## Limitations and open questions

- **Lab-mouse confounds intact.** ITP design does not address SPF / ad libitum / sedentary / thermoneutrality concerns. See [[mus-musculus]] § Lab-mouse confounds.
- **Cancer-mortality dominance.** UM-HET3 mice die predominantly from cancer; the aging-mechanism specificity of any ITP-positive compound is partially confounded with cancer suppression.
- **No primate or human ITP-equivalent.** Lifespan endpoints in humans require ~decade-scale follow-up; the ITP is the highest standard available but does not directly predict human outcomes.
- **Cagemate / social-housing effects** (Mokalla 2026 [^mokalla2026]) recently identified as an under-recognized variable: cagemate number affects death risk in UM-HET3, adding a husbandry variable not currently controlled in ITP standard SOP.
- **Statistical methodology.** Jiang 2024 [^jiang2024] showed that pre-specified log-rank misses life-extending compounds detectable by Gehan-Breslow-Wilcoxon — methodology choices change the positive-set membership. Parker 2025 [^parker2025] (bioRxiv) proposes broader statistical-rigor reforms for animal aging research.
- **Open question: does ITP-validation predict human translation?** As of 2026 there is one major test case — rapamycin — which has produced null human trials (PEARL, RAPA-EX-01). One case is not enough to evaluate ITP-as-translation-predictor; senolytics, GLP-1 agonists, and SGLT2-inhibitor aging trials may provide additional tests over the coming decade.

## See also

- [[mus-musculus]] — UM-HET3 strain biology, lab-mouse confound context, ITP method summary
- [[hypotheses/translation-failure-of-aging-interventions]] — Mode B synthesis frame; ITP design responds to Tier 1 (experimental-design asymmetry) but does not address Tiers 2 and 3
- [[model-organisms/_extrapolation-guide]] — three-dimension rubric; ITP-validated interventions are the lowest-risk extrapolation set in mouse data
- [[rapamycin]] — strongest ITP-positive intervention; mixed human-translation record
- [[metformin]] — ITP non-replication (UM-HET3 cohort p=0.064 vs Martin-Montalvo C57BL/6 p=0.02); Ivimey-Cook 2025 cross-vertebrate analysis confirms metformin does not generalize
- [[hallmarks-of-aging]] — most ITP-positive compounds target deregulated-nutrient-sensing or loss-of-proteostasis hallmarks
- `interventions/pharmacological/` — class pages for compound classes containing ITP-validated members

## Limitations and gaps

- #gap/needs-study-pages — Most ITP papers do not have dedicated `studies/` pages. Per-cohort study-page seeding would substantially improve verification chains and Dataview-queryability of "ITP-validated" claims.
- #gap/needs-citation-pass — The negative-result table includes "ITP 2008/2011 cohort" references without dedicated study pages or DOIs; resveratrol, methylene blue, curcumin, and green-tea negative results need citation backfill.
- #gap/contradictory-evidence — Single-strain positive vs UM-HET3 negative discordance (metformin, others) is the canonical ITP-vs-non-ITP conflict pattern. Each instance deserves a per-compound page note.
- #gap/no-fulltext-access — Jiang 2025, Bou Sleiman 2022 (*Science*), Nadon 2006, Miller 2007, Mokalla 2026, and Parker 2025 (preprint) remain at abstract-level only. Korstanje 2026 is not OA; the 3 interventions beyond the 8 named in its title cannot be identified without full-text access.
- #gap/needs-replication — Canagliflozin ITP positive result has been reported in one cohort; replication status unclear as of this writing.

---

[^miller2007]: doi:10.1111/j.1474-9726.2007.00311.x · Miller RA, Harrison DE, Astle CM, Floyd RA, Flurkey K, Hensley KL, Javors MA, Leeuwenburgh C, Nelson JF, Ongini E, Nadon NL, Warner HR, Strong R · *Aging Cell* 2007 · methodology · "An Aging Interventions Testing Program: study design and interim report" · founding ITP design paper · 3-site + UM-HET3 + both sexes confirmed from Crossref abstract; PDF not OA · verified-scope: abstract-level only (PDF download failed)

[^nadon2008]: doi:10.1007/s11357-008-9048-1 · Nadon NL, Strong R, Miller RA, Nelson J, Javors M, Sharp ZD, Peralba JM, Harrison DE · *Age (Dordr)* 2008 · methodology · "Design of aging intervention studies: the NIA interventions testing program" · full design rationale · UM-HET3 cross = CB6F1 × C3D2F1 (BALB/cByJ × C57BL/6J ♀ F1 × C3H × DBA/2 ♂ F1); planned group sizes 36F + 44M per site per arm, control group 2× · PDF verified 2026-05-14

[^nadon2006]: doi:10.1111/j.1474-9726.2006.00185.x · Nadon NL · *Aging Cell* 2006 · review · "Exploiting the rodent model for studies on the pharmacology of lifespan extension" · pre-ITP rationale paper · verified-scope: abstract-level only (PDF download failed, not OA) #gap/no-fulltext-access

[^harrison2009]: doi:10.1038/nature08221 · Harrison DE et al. · *Nature* 2009 · n=~1,901 (pooled 3 sites); UM-HET3 mice · rapamycin (14 mg/kg food) started 600 d ~20 mo; +9% ♂, +13% ♀ median lifespan; +9% ♂, +14% ♀ 90th percentile · log-rank p<0.0001 · canonical ITP-positive · verified-scope: full text verified on [[mus-musculus]] page

[^strong2016]: doi:10.1111/acel.12496 · Strong R et al. · *Aging Cell* 2016 · UM-HET3 multi-site; 17α-estradiol 14.4 ppm and acarbose 1000 ppm (from 16 mo); 17αE2 +19% ♂ median, no effect ♀; ACA +6% ♂ median, +2% ♀ NS · verified-scope: full text verified on [[mus-musculus]] page

[^snyder2026]: doi:10.1007/s11357-025-01741-3 · Snyder JM, Harrison DE, Korstanje R, Ginsburg B, Reifsnyder PC, Nelson J, Leiser S, Kaczorowski C, Imai DM, Salmon AB, Strong R, Ladiges W, Miller RA · *GeroScience* **2025** · 48:1787–1797 · in-vivo · UM-HET3 end-of-life histopathology for **both** 16α-hydroxyestradiol (OH_Est, 5 ppm from 12 mo; +15% ♂ median lifespan, −7% ♀) and late-start canagliflozin (Cana_16, 180 ppm from 16 mo; +15% ♂, −6% ♀); n=164 mice examined; neoplasia = dominant cause of death (72%); no significant drug-induced changes in inferred cause of death · PMID 40601216 · PDF verified 2026-05-14 · NOTE: year is 2025 (online July 2025, GeroScience (2025) 48:1787); cited as Snyder 2026 in wiki body per in-press date confusion — correct citation year is 2025

[^korstanje2026]: doi:10.1007/s11357-026-02201-2 · Korstanje R, Strong R, Salmon AB, Bogue MA, Curran SP, Diaz V, Fernandez E, Ginsburg B, Han M, Harrison DE, Kaczorowski C, Kaeberlein M, Kennedy BK, Kumar N, LaCroix-Fralish M, Leiser SF, Nelson JF, Polymenis M, Reifsnyder PC, Rosenthal NA, Silva E, Tower J, Miller RA · *GeroScience* 2026 · online March 17 2026 · in-vivo · UM-HET3; **11 total interventions** tested (8 compound-groups named in title: astaxanthin, meclizine, mitoglitazone, pioglitazone, α-ketoglutarate, mifepristone, methotrexate, atorvastatin+telmisartan; plus 3 additional unnamed in title per abstract) · NONE extend lifespan; pioglitazone and mitoglitazone associated with **reduced** female lifespan at two sites · previously-positive compounds (astaxanthin, meclizine, mitoglitazone) failed at different doses/later ages · PMID 41843349 · verified-scope: abstract-level only (not OA) #gap/no-fulltext-access; 3 additional compound identities unverifiable without full text · most informative recent ITP negative-result publication

[^jiang2025]: doi:10.1093/gerona/glaf138 · Jiang N, Xu Z, Zhao S, Gelfond J, Strong R, Nelson JF · *J Gerontol A Biol Sci Med Sci* 2025 · 80(7) · published July 2025 · meta-review · "Sex as a major determinant of pro-longevity drug efficacy: a review of two decades of the NIA Interventions Testing Program" · PMID 40717358 · 54 agents tested in >30,000 mice over 20 years; most lifespan-extending compounds effective primarily or exclusively in males; dosage and onset age also sexually dimorphic · verified-scope: abstract-level only (PDF download failed, not OA via PMC)

[^bousleiman2022]: doi:10.1126/science.abo3191 · Bou Sleiman M, Roy S, Gao AW, Sadler MC, von Alvensleben GVG, Li H, Sen S, Harrison DE, Nelson JF, Strong R, Miller RA, Kutalik Z, Williams RW, Auwerx J · *Science* 2022 · 377(6613) · QTL mapping · "Sex- and age-dependent genetics of longevity in a heterogeneous mouse population" · PMID 36173858 · sex-independent QTL on chr 12; sex-specific QTLs, some age-conditional; validated Hipk1, Ddost, Hspg2, Fgd6, Pdk1 as conserved longevity genes in C. elegans · verified-scope: abstract-level only (Science — not OA, PDF download failed)

[^cheng2019]: doi:10.1111/acel.12905 · Cheng CJ, Gelfond JAL, Strong R, Nelson JF · *Aging Cell* 2019 · 18:e12905 · observational · "Genetically heterogeneous mice exhibit a female survival advantage that is age- and site-specific: Results from a large multi-site study" · PMID 30801953 · n=3,690 control UM-HET3 mice, 3 sites, 6 cohorts over 10 years · female median 887 days (95% CI 879–898) vs male 803 days (95% CI 791–815) — **~10% female advantage by median** · peak sex-specific hazard ratio ~350 days; convergence ~800 days; no sex difference in maximum lifespan · PDF verified 2026-05-14

[^jiang2024]: doi:10.1007/s11357-024-01161-9 · Jiang N, Gelfond J, Liu Q, Strong R, Nelson JF · *GeroScience* 2024 · 46:4533–4541 · methodology · "The Gehan test identifies life-extending compounds overlooked by the log-rank test in the NIA Interventions Testing Program: Metformin, Enalapril, caffeic acid phenethyl ester, green tea extract, and 17-dimethylaminoethylamino-17-demethoxygeldanamycin hydrochloride" · PMID 38630424 · reanalyzed ITP 2004–2022 data; Gehan identified 6 additional life-extending compounds (5 newly positive: metformin +8% ♂ p=0.0495, enalapril +7% ♂ p=0.046, CAPE +5% ♀ p=0.0481, GTE +7% ♀ p=0.0344, 17-DMAG +7% ♂ p=0.0321; plus 1,3-butanediol +9% ♂ previously found by log-rank in ♀ only) · proportional-hazard assumption violated for the 5 compounds missed by log-rank, validating Gehan preference · PDF verified 2026-05-14

[^parker2025]: doi:10.1101/2025.03.14.642436 · Parker ES, Golzarri-Arroyo L, Dickinson SL, Henschel B, Becerra-Garcia AM et al. · *bioRxiv* preprint 2025 · methodology · "Improving Statistical Rigor in Animal Aging Research by Addressing Clustering and Nesting Effects: Illustration with the National Institute on Aging's Intervention Testing Program Data" · PMID 40166275 (preprint) · proposes accounting for cage-level clustering/nesting effects to avoid inflated Type I errors; illustrates with ITP 2019 data · Crossref confirmed preprint type "posted-content" · verified-scope: abstract-level only (preprint, not yet peer-reviewed)

[^mokalla2026]: doi:10.1007/s11357-025-02080-z · Mokalla TR et al. · *GeroScience* 2026 · published Jan 9 2026 · husbandry confound · "Association between cagemate number and risk of death in mice: a time-varying covariate analysis using Cox frailty models" · PMID 41514094 · n=2,635 UM-HET3 mice, 3 sites; same-sex cages median 3/cage without reassignment after cagemate death; Cox frailty models with nested cage+site random effects; cagemate number as time-varying covariate · verified-scope: abstract-level only (PDF download failed, not OA via PMC)

[^ivimeycook2025]: doi:10.1111/acel.70131 · Ivimey-Cook ER, Sultanova Z, Maklakov AA · *Aging Cell* 2025 · meta-analysis · "Rapamycin, Not Metformin, Mirrors Dietary Restriction-Driven Lifespan Extension in Vertebrates" · PMID 40532901 · cross-vertebrate corroboration of ITP rapamycin pattern · verified-scope: PubMed efetch metadata only · also cited on [[mus-musculus]] page
