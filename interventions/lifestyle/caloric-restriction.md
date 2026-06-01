---
type: intervention
aliases: [CR, caloric restriction, dietary restriction, DR]
mode: dietary
mechanisms: [autophagy-induction, mtor-inhibition, ampk-activation, sirtuin-activation, igf1-reduction, insulin-sensitization]
target-hallmarks: ["[[chronic-inflammation]]", "[[deregulated-nutrient-sensing]]", "[[disabled-macroautophagy]]", "[[loss-of-proteostasis]]", "[[mitochondrial-dysfunction]]", "[[stem-cell-exhaustion]]"]
target-pathways: ["[[mtor]]", "[[ampk]]", "[[sirtuin]]", "[[insulin-igf1]]"]
human-evidence-level: strong
clinical-stage: implemented
safety-profile: well-established
translation-gap: human-evidence-strong
next-experiment: "Pharmacological CR-mimetic with CALERIE-equivalent biomarker effects (mTOR/AMPK/IGF-1/F2-isoprostane); or sustainable IF/TRE protocol RCT n>=1000 with adherence-validated CR delivery."
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Mattison 2017, Redman 2018, and Spadaro 2022 verified against primary source PDFs (R32, 2026-05-04). McCay 1935 unverifiable (closed-access, not_oa). Cross-organism magnitude figures (yeast/worm/fly/rat/mouse ranges) unsourced in primary citations — retained as consensus background with #gap/unsourced tags. R34 recency refresh (2026-05-08): integrated Aversa 2024 (Aging Cell, senescence biomarkers), Hastings 2024 (Aging Cell, telomere null), Mishra 2026 (Nat Aging, complement/C3a inflammaging), Li 2026 (Clin Nutr, organ-specific BioAge), Warmbrunn 2026 (Diabetes Care, weight regain reverses benefits), Pribic 2025 (NPJ Aging, glycomic age), Ivimey-Cook 2025 (Aging Cell, DR-vs-rapamycin vertebrate meta-analysis). All new citations sourced from PubMed efetch abstracts; numerics quoted directly from abstracts (verified-scope: abstract-level for new R34 footnotes, full-text not yet checked)."
---

# Caloric restriction (CR)

Sustained reduction in caloric intake (typically 20–40% below ad libitum in animal studies; 12–25% in human trials) **without malnutrition** — micronutrient adequacy is preserved. **The single most-studied longevity intervention** in aging biology, extending mean and maximum lifespan in essentially every model organism tested for nearly a century, from yeast to mice. Human trials (CALERIE) demonstrate robust effects on aging biomarkers but have not — and likely cannot in any reasonable timeframe — establish lifespan extension as a primary endpoint.

This page covers caloric restriction as an intervention concept. Closely-related variants (intermittent fasting, time-restricted eating, methionine restriction, fasting-mimicking diet) deserve separate pages — see `interventions/lifestyle/` for sibling entries when seeded.

## Definitional clarifications

The literature uses multiple overlapping terms with different meanings — using them interchangeably hides important distinctions:

| Term | Meaning |
|---|---|
| **Caloric restriction (CR)** | Sustained reduction in calories consumed; typically 20–40% below ad libitum for animals, 12–25% in human trials |
| **Dietary restriction (DR)** | Often synonymous with CR; sometimes used to imply restriction without specifying the caloric component |
| **Intermittent fasting (IF)** | Periodic complete or near-complete fasting (e.g., alternate-day fasting, 5:2). Time-averaged caloric reduction smaller than continuous CR |
| **Time-restricted eating (TRE)** | Restricted feeding window (e.g., 8 hr/day) without explicit caloric reduction. Closer to circadian-aligned eating than CR |
| **Methionine restriction (MetR)** | Restriction of methionine specifically (typically <0.17% of diet); recapitulates many CR effects without total caloric reduction |
| **Fasting-mimicking diet (FMD)** | Periodic low-calorie, low-protein diet (e.g., 5 days/month) designed to trigger fasting responses without sustained restriction |
| **[[prolonged-fasting\|Prolonged fasting]]** | Voluntary **complete** caloric restriction sustained ≥48–72 hr (water-only). Distinct from continuous CR: a multi-day total fast whose **systemic proteome response begins only after ~3 days** [^pietzner2024] |

CR is **not** synonymous with under-eating, malnutrition, or anorexia. The defining feature is preservation of micronutrient intake while reducing energy intake.

## Mechanisms of geroprotection

CR engages many of the pathways independently identified by longevity-pathway studies:

| Pathway | Effect | Cross-link |
|---|---|---|
| [[mtor\|mTORC1]] | Reduced amino acid input → mTORC1 ↓ | Phenocopies [[rapamycin]] partially |
| [[ampk]] | AMPK ↑ from reduced ATP/AMP ratio | Phenocopies [[metformin]] partially |
| [[insulin-igf1\|IIS]] | Reduced insulin + IGF-1 (~25–30% IGF-1 decline in long-term CR humans) | Connects to dwarf-mouse longevity story |
| [[autophagy]] | Robustly induced via mTOR ↓, AMPK ↑ | Required for CR longevity in worms/flies (epistasis evidence) |
| [[sirtuin\|Sirtuins]] | NAD+ levels rise; SIRT1/3 activity increased | Mechanism partially debated; not all CR organisms require sirtuins |
| Mitochondrial biogenesis | PGC-1α activation | Improves bioenergetic efficiency per cell |

**Genetic epistasis** establishes mTOR + autophagy as major downstream effectors, but the picture is **organism-specific**:
- In **yeast and worms**, DR does not further extend lifespan when TOR is already reduced — suggesting convergence on a final common pathway. #gap/unsourced (primary citation needed)
- In ***Drosophila***, rapamycin extends lifespan **beyond** the DR maximum at all food concentrations tested (Bjedov 2010; see [[mtor]] § Connection to other aging pathways) — indicating partial mechanistic independence in flies; CR and TOR-inhibition engage overlapping but non-identical mechanisms.
- Autophagy-deficient organisms (worm/fly ATG knockdowns) show abolished CR longevity benefit — see [[autophagy]] for primary citations.

This convergence (partial in flies, more complete in yeast/worms) is one of the major arguments that CR is mechanistically equivalent — at least in part — to pharmacological mTOR inhibition. The fly data show CR also engages TOR-independent components.

## Cross-organism evidence

| Organism | Effect | Notes |
|---|---|---|
| *S. cerevisiae* | ~20–40% chronological + replicative lifespan extension #gap/unsourced | Classic CR system; Lin et al. 2000 demonstrated SIR2-dependence |
| *C. elegans* | ~30–50% lifespan extension #gap/unsourced | Various protocols (`eat-2` mutants, peptone restriction); requires DAF-16/FOXO + autophagy |
| *D. melanogaster* | ~20–40% lifespan extension #gap/unsourced | Yeast restriction (yeast = primary protein source); rapid response to refeeding |
| Rodents (rats) | **20–50% mean and max lifespan extension** #gap/unsourced (McCay 1935 closed-access; range from review literature) | McCay 1935 was the foundational study [^mccay1935] #gap/no-fulltext-access; the most replicated CR system |
| Rodents (mice) | **10–30% lifespan extension**; varies by strain, sex, CR onset age #gap/unsourced (range from review literature) | ITP-style heterogeneous studies show large background effects |
| Vertebrates (meta-analysis, 2025) | DR significantly extends lifespan across vertebrates; rapamycin matches DR magnitude; metformin does **not** [^ivimeycook2025] | 911 effect sizes from 167 papers across 8 species; high heterogeneity + significant publication bias noted; effect robust to DR methodology |
| Rhesus macaque | **Conflicting between sites**; Mattison 2017 joint reanalysis found significant survival benefit in UW adult-onset cohort; NIA cohorts showed healthspan improvement but no statistically significant lifespan effect [^mattison2017] | Wisconsin (Colman/UW): HR 1.865 (95% CI 1.119–3.108), p=0.017 for adult-onset combined sexes. NIA J/A and old-onset: no significant survival effect. Diet quality differences between sites (purified vs. natural-ingredient diet) identified as confound. |
| Humans | **No lifespan data**; CALERIE I + II demonstrate aging-biomarker improvements at ~12–15% achieved restriction | [^redman2018] [^spadaro2022] |

## Human evidence — CALERIE and observational

### CALERIE I (Phase 1, multi-site, 6 months)

Established feasibility of sustained CR in healthy non-obese adults. Demonstrated metabolic adaptations consistent with rodent CR (reduced T3, reduced fasting insulin, reduced core temperature).

### CALERIE II (Phase 2, multi-site, 2 years; ~218 subjects enrolled)

The **largest controlled CR trial in healthy humans to date**. Target was 25% restriction. The full CALERIE II multi-centre trial enrolled ~218 subjects (NCT00427193). Achieved restriction across the trial was approximately 11.9% on average (Ravussin et al. 2015); individual site and sub-study analyses show slightly different values (see below).

**Redman 2018 (CALERIE II metabolic sub-study, Pennington site)** [^redman2018]: An ancillary study of 53 subjects (34 CR, 19 AL control) with intensive metabolic chamber measurements. In this highly adherent sub-cohort, ~15% CR was achieved over 2 years (14.8% ± 1.5%), resulting in 8.7 kg mean weight loss. Primary findings:
- Sleeping energy expenditure reduced ~7% beyond that expected from weight loss alone (metabolic adaptation; p<0.01 at Y1 and Y2)
- Urinary F2-isoprostane (oxidative damage marker) significantly reduced vs controls (p<0.01 at both Y1 and Y2), supporting the oxidative damage theory of aging
- T3 and T4 thyroid hormones significantly reduced; leptin significantly reduced; insulin showed early reduction at Y1 only
- **Note:** LDL, blood pressure, and bone/mood/cognition safety outcomes are reported in other CALERIE II papers (Martin 2016 JAMA Intern Med; Rickman 2011), not in Redman 2018. PLA2G7 reduction is reported in Spadaro 2022, not Redman 2018.

**Spadaro 2022 (CALERIE II immune sub-study)** [^spadaro2022]: Secondary analysis focused on thymic function and adipose tissue transcriptomics in CALERIE II participants. Achieved CR in this analysis was **~14%** for 2 years (stated explicitly in abstract). Key findings:
- CR significantly increased thymic mass and sjTREC (signal-joint T cell receptor excision circle) levels in both CD4 and CD8 cells in the majority of participants — indicating **improved thymopoiesis** (n=22 female, n=5 male for CD4; n=20 female, n=5 male for CD8)
- 233 genes up-regulated, 131 down-regulated in subcutaneous adipose tissue after CR, including suppression of PLA2G7 (encoding platelet activating factor acetyl hydrolase, a pro-inflammatory lipid enzyme)
- Pla2g7 knockout in mice partially phenocopied CR's protective effects on thymic lipoatrophy and age-related inflammation, implicating PLA2G7 suppression as a mechanistic contributor

A landmark finding: CR **improved thymopoiesis** in middle-aged adults — a striking [[immunosenescence]]-relevant result suggesting CR can partially counter one of the most consistent age-related immune deficits. The paper does not claim full "restoration" of youthful thymic function.

### CALERIE-2 follow-up analyses (2024–2026)

A wave of CALERIE-2 ancillary analyses have appeared since 2023, expanding the molecular and biological-age portrait of human CR. All draw from the same ~218-subject parent cohort (NCT00427193; ~12% achieved CR over 2 yr).

- **Senescence biomarkers** — CR significantly reduced circulating SASP markers (machine-learning-selected senescence biomarkers predicted HOMA-IR, insulin sensitivity index, and resting metabolic rate residual changes) at 12 and 24 months vs. AL controls; adipose-tissue RNA-seq showed reduced expression of a senescence-focused gene set [^aversa2024]. Aligns with the Spadaro 2022 PLA2G7/thymic-lipoatrophy mechanism.
- **Complement / inflammaging** — CR lowered the C3a/C3 ratio and dampened all three canonical complement pathways; circulating C3a is elevated with age in humans and mice; intra-adipose C3a-neutralizing antibody reduced inflammaging in mice [^mishra2026]. Identifies complement deactivation as an immunometabolic checkpoint linking CR to reduced [[chronic-inflammation]].
- **Telomere length** — Intent-to-treat analysis found **no** significant effect of CR on telomere length attrition over 24 months by either qPCR or DNAmTL [^hastings2024]. Effect-of-treatment-on-the-treated analyses showed transient, opposing-direction trends in the weight-loss vs. weight-maintenance phases — interpretation unclear.
- **Organ-specific biological age** — A 5-organ BioAge analysis in n=185 CALERIE-2 participants showed CR mitigated age-related increases in **metabolic** (−0.63 yr at 24 mo, p=3×10⁻⁷), **cardiovascular** (−1.00 yr, p=2×10⁻⁶), **whole-body** (−1.27 yr, p=1×10⁻⁴), and **immune** (−0.62 yr, p=3×10⁻³) BioAge; **liver** age modestly slowed only at 24 mo; **kidney** age unaffected [^li2026]. Dose-response: ≥12.4% CR drove the metabolic + whole-body effects.
- **Glycomic age (GlycAge)** — In a CALERIE-2 pilot subset (n=26, no concurrent control), 25% CR over 2 yr increased IgG galactosylation (p=0.016) and decreased IgG-based GlycAge (p=0.027) from 12 to 24 months; complement C3 protein and C3 N-glycoforms also fell [^pribic2025]. Pilot-only — single-arm, no AL control in this analysis.
- **Weight regain reverses benefits** — Post-hoc analysis of n=190 CALERIE-2 participants stratified by post-month-12 weight trajectory: ~10% (n=20) regained >5% baseline weight, and this group lost CR-induced gains in insulin AUC, IGF-1/IGFBP-1 ratio, and biological age estimates. Sustained moderate weight loss preserved benefits [^warmbrunn2026]. Reinforces that CR's biological-age signature in humans is adherence-coupled and reversible.
- **Small-RNA mediators** — 16 smRNAs associated with %CR and 41 with CR-vs-AL across plasma, muscle, and adipose; 17 miRNAs altered by CR in both humans and rhesus monkeys, implicating insulin-signaling, circadian-rhythm, and cell-cycle pathways as conserved CR effectors [^orenduff2026].

These results, in aggregate, **strengthen** the human-evidence claim that CR moves multiple molecular and biological-age signatures in a direction that animal data predict. None of them, however, address all-cause mortality.

> **Contrast with prolonged complete fasting — inflammation runs the opposite way.** Sustained moderate CR is **anti-inflammatory**: it lowers the C3a/C3 ratio and dampens complement [^mishra2026], reduces circulating SASP markers [^aversa2024], and slows immune BioAge [^li2026]. **[[prolonged-fasting|Prolonged complete fasting]] does the reverse acutely** — a ~10-day water-only fast *raised* hsCRP by 129% (and ≥66% of a 1,422-person validation cohort showed a significant CRP rise regardless of fast duration), *activated* the complement and coagulation cascades, *activated* platelets (urinary 11-dehydro-TXB2 ↑), and *raised* liver transaminases — though these normalized on refeeding [^commissati2025]. The two interventions therefore diverge sharply on inflammation despite sharing the mTOR/AMPK/autophagy/IIS mechanism base: chronic mild energy restriction quiets inflammaging, whereas acute total energy deprivation triggers an acute-phase response. This is a central reason **prolonged fasting is not simply "more CR"** — see [[prolonged-fasting]] for the full benefit-vs-harm picture.

### Okinawan / observational evidence

The "Okinawan paradox" — historical Okinawan caloric intake was ~20% below mainland Japanese, with elevated centenarian density. Observational, confounded by other lifestyle factors; modernization has eliminated the longevity advantage in younger Okinawan generations.

### CRON Society / human "CR enthusiasts"

Long-term self-imposed CR practitioners studied by Fontana / Holloszy show metabolic profiles resembling CR rodents (low IGF-1, low blood pressure, low inflammation). Self-selected; small n; not RCT evidence.

## Side effects and limitations

- **Reduced bone density** at sustained heavy restriction; mitigated by adequate calcium + vitamin D + resistance training
- **Reduced muscle mass** — partly inevitable with caloric deficit; preserved by adequate protein intake + resistance training. The lean-mass-preservation evidence converges on ≥1.6 g/kg/day during energy deficit (Longland 2016 deficit RCT: 2.4 g/kg arm gained +1.2 kg lean mass while losing 4.8 kg fat over 40% deficit + 4 wk RT) — see [[protein-intake]] for the full dose-evidence base. Note the IGF-1 tradeoff: higher protein elevates serum IGF-1 (Fontana 2008: 1.67→0.95 g/kg dropped IGF-1 22%), partially offsetting one of CR's geroprotective signaling effects — but lean-mass loss in older adults is the more proximal and irreversible risk.
- **Cold intolerance** — reduced T3, lower core temperature
- **Reduced fertility / libido** at heavy restriction
- **Wound healing** — slowed in animal models; modest effect in humans
- **Frailty risk in elderly** — CR is **not recommended** for adults > ~65 unless overweight; benefits in older adults less clear and risks more pronounced (potential exacerbation of [[sarcopenia]])
- **Sustainability** — even motivated CALERIE volunteers achieved only ~12–15% of the 25% target (i.e., roughly half); long-term adherence is the dominant practical limitation. Spadaro 2022 notes that "~14% sustained CR for 2 years" reflects what "humans achieve in free-living conditions" and is "much lower than the forced 25 to 40% restriction of calories in laboratory animals."
- **Weight regain reverses benefits** — Post-hoc CALERIE-2 analysis (Warmbrunn 2026 [^warmbrunn2026]) showed that participants who regained >5% baseline weight after the active CR phase lost the gains in insulin AUC, IGF-1/IGFBP-1 ratio, and biological-age estimates. Sustained moderate weight loss is required to preserve metabolic and biological-age benefits — rebound undoes them.

## CR mimetics

Pharmacological agents that recapitulate CR effects without caloric reduction. Most-cited:

- [[rapamycin]] — direct mTORC1 inhibition; the most-validated CR mimetic in mice (NIA ITP). A 2025 meta-analysis of 911 effect sizes from 167 vertebrate studies found rapamycin matches DR-driven lifespan extension while metformin does not [^ivimeycook2025]
- [[metformin]] — partial AMPK activation; observational evidence in diabetics; TAME trial design pending; **failed to extend lifespan** in the Ivimey-Cook 2025 vertebrate meta-analysis [^ivimeycook2025]
- Acarbose — α-glucosidase inhibitor; reduces post-prandial glucose; ITP-validated lifespan extension in mice
- [[nmn]] / [[nr]] — NAD+ boosting; sirtuin substrate; emerging human data
- [[spermidine]] — autophagy induction; observational signal (Bruneck) does not replicate in randomized trials. SmartAge 2022 (NCT03094546) null on primary cognition endpoint; CATIS 2025 contradictory direction in post-stroke cohort. Currently `human-evidence-level: limited-negative`.
- [[fisetin]] — different mechanism (senolytic) but overlapping anti-inflammatory effects
- Resveratrol — proposed sirtuin activator; controversial mechanism; failed to extend lifespan in non-obese mice

## Cross-organism extrapolation

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | mTOR, AMPK, autophagy, IIS all conserved |
| Phenotype conserved in humans? | partial | Biomarker improvements robust; lifespan effect not measured |
| Replicated in humans? | in-progress | CALERIE-style protocols established; no long-term mortality endpoint completed |

#gap/needs-human-replication — CR's lifespan-extending effect in humans is **inferred** from biomarker improvements + animal data; no human RCT has measured all-cause mortality as a primary endpoint and is unlikely to in any reasonable timeframe given study duration requirements (decades).

#gap/dose-response-unclear — The optimal % restriction in humans is unknown. CALERIE-II achieved ~12–15% restriction across sites and sub-studies (Redman 2018 Pennington sub-study: ~15%; Spadaro 2022: ~14%; full trial average: ~12%); whether deeper restriction would yield proportionally greater benefit is unverified.

## Key open questions

1. **Magnitude transfer to humans**: rodent CR extends max lifespan ~30%; primate data from Mattison 2017 shows a significant survival benefit only in UW adult-onset animals (HR ~1.87), with no quantified "5–10% extension" figure stated in the paper — the survival curve medians in UW males shift from ~26 to ~28 years (control vs CR) by Kaplan-Meier, and the NIA cohorts show no significant effect. #gap/unsourced — the "5–10%" figure on this page has no direct support in Mattison 2017 and has been removed. Human translation magnitude on lifespan is unknown; CALERIE-2 ancillaries (Li 2026, Pribic 2025) suggest BioAge-trajectory slowing on the order of 0.5–1.3 years over 2 years of ~12% CR, but BioAge units are not lifespan units and the durability beyond the trial endpoint is unknown.
2. **Optimal protocol**: continuous moderate CR vs IF vs TRE vs FMD — head-to-head efficacy comparisons in humans are limited; most practitioners adopt IF/TRE for sustainability rather than evidence.
3. **Onset timing**: late-life CR has reduced benefit in mice (started at >18 months); human implementation timing unclear, though CALERIE II suggests middle-aged adults still benefit on biomarkers.
4. **Genotype × CR interactions**: ITP-style heterogeneous mouse studies show large strain-dependent effects; human responses likely also vary substantially. No human pharmacogenomic CR data yet.
5. **Macronutrient composition**: protein restriction (especially methionine) may capture much of CR's benefit while allowing higher caloric intake — this is an active research area not yet tested in humans for longevity outcomes.

## Biomarker effects

The CALERIE-2 trial (Waziry 2023) is the definitive dataset for CR effects on biological age clocks [^waziry2023]. The trial included four pre-specified clock endpoints:

| Clock | Response to 2-year ~12% CR | Significance |
|---|---|---|
| [[biomarkers/dunedinpace-2022\|DunedinPACE]] | Slowed (d=−0.25; ~2–3% per yr) | p<0.003 |
| [[biomarkers/phenoage-2018\|PhenoAge]] | No change | NS |
| [[biomarkers/grimage-2019\|GrimAge]] | No change | NS |
| [[biomarkers/horvath-clock-2013\|Horvath 2013]] | No change | NS |

**Interpretation:** CR slowed the pace-of-aging clock (DunedinPACE) but did not move the mortality-trained or chronological-age clocks. This selective response is consistent with DunedinPACE's sensitivity to multi-system metabolic dynamics — the same systems CR most acutely modulates. Whether the DunedinPACE slowing represents durable biological-age retardation or acute metabolic confounding is unresolved. See [[frameworks/biological-age-measurement]] for full cross-clock analysis. #gap/needs-replication — DunedinPACE CR response has not yet been independently replicated in a separate CR cohort.

**Update (2024–2026):** Subsequent CALERIE-2 ancillary analyses converge on the same direction: organ-specific BioAge clocks (Li 2026 [^li2026]) showed metabolic and cardiovascular BioAge slowing of similar magnitude (~0.5–1.0 yr at 24 mo); GlycAge (Pribic 2025 [^pribic2025]) decreased over months 12–24 in a single-arm pilot. These are correlated within-trial readouts, not independent-cohort replications, but they triangulate on a consistent biological-age signature beyond DunedinPACE alone.

**Transcriptomic module-clock signature (rodent).** The transcriptomic-clock framework of Tyshkovskiy et al. 2026 adds *pathway resolution* to how CR rejuvenates. Across 8 rodent CR liver datasets, CR **reduced mortality-[[transcriptomic-clock-tage|tAge]] relative to age-matched controls**, with the **strongest effects in metabolic modules** — haem/ROS, lipid/PPAR signalling and cholesterol/mTOR signalling — and broad up-regulation of cellular respiration, oxidative phosphorylation and lipid/amino-acid metabolism genes [^tyshkovskiy2026]. This contrasts sharply with chronic diseases (which accelerate *inflammatory* module tAge), and parallels [[klotho|Klotho]] biology (its deficiency drives metabolic/NRF2 module ageing). The key conceptual point: CR's geroprotection is **metabolically targeted**, and module-specific clocks make this quantifiable — directly answering "which subsystem does CR rejuvenate?" at the network level.

[^waziry2023]: [[studies/waziry-2023-calerie-epigenetic-clock]] · n=197 (128 CR, 69 AL; from 220 randomized) · rct · model: healthy non-obese human adults (CALERIE Phase 2, 2-year ~12% achieved CR) · doi:10.1038/s43587-022-00357-y · local PDF available · DunedinPACE: d=−0.25 95% CI (−0.41, −0.09) p<0.003; Horvath 2013: NS; PhenoAge: NS; GrimAge: NS

[^tyshkovskiy2026]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · doi:10.1038/s41586-026-10542-3 · *Nature* 2026 · n=8 rodent CR liver datasets (within a 4-species, 11,165-transcriptome meta-analysis) · mixed-effects / module-specific elastic-net mortality clocks, P_adj<0.05 · model: mouse liver (C57BL/6J, DBA/2J, B6C3F1) · CR reduced mortality-tAge, strongest in haem/ROS, lipid/PPAR and cholesterol/mTOR modules

## Cross-references

- [[mtor]] — primary downstream pathway
- [[ampk]] — secondary downstream pathway
- [[autophagy]] — required mediator (epistasis)
- [[insulin-igf1]] — affected pathway
- [[deregulated-nutrient-sensing]] — primary hallmark target
- [[immunosenescence]] — CALERIE II showed improved thymopoiesis and reduced thymic lipid accumulation (Spadaro 2022)
- [[sarcopenia]] — potential adverse interaction in elderly
- [[interventions/lifestyle/intermittent-fasting]] — closely related variant (planned)
- [[prolonged-fasting]] — complete multi-day water-only fast; distinct modality whose systemic proteome signature emerges only after ~3 days (Pietzner 2024)
- [[interventions/lifestyle/methionine-restriction]] — mechanistically related variant (planned)
- [[rapamycin]] — pharmacological mimetic
- [[frameworks/biological-age-measurement]] — clock comparison MOC; DunedinPACE CR result contextualized

## Footnotes

[^mccay1935]: doi:10.1093/jn/10.1.63 · in-vivo (rat) · n=~unknown #gap/no-fulltext-access · model: Long-Evans rats fed restricted calories from weaning · authors: McCay CM, Crowell MF, Maynard LA · foundational CR paper; PDF not accessible (closed-access, not_oa in a local paper archive); n and specific magnitude figures unverified
[^mattison2017]: doi:10.1038/ncomms14063 · in-vivo (rhesus macaque) · n=197 total (NIA: 121 monkeys in multiple age/sex groups; UW: 76 adult-onset monkeys) · pooled longitudinal comparison of NIA + Wisconsin primate cohorts · significant survival benefit in UW adult-onset animals (HR 1.865, 95% CI 1.119–3.108, p=0.017 by Cox regression); no significant survival effect in NIA J/A or old-onset cohorts · healthspan improvements (morbidity reduced ~2.7x in controls vs CR, HR 2.665 for UW, p=0.0006) conserved across both sites · diet quality differences (purified sucrose-based UW diet vs natural-ingredient NIA diet) identified as key confound affecting survival outcomes
[^redman2018]: doi:10.1016/j.cmet.2018.02.019 · randomized controlled trial (CALERIE II Pennington ancillary metabolic sub-study) · n=53 (34 CR, 19 AL control) · achieved CR ~15% (14.8% ± 1.5%) over 2 years · 8.7 kg mean weight loss in CR group · primary endpoints: sleeping energy expenditure (metabolic adaptation) and urinary F2-isoprostane (oxidative damage) · SleepEE reduced ~7% beyond weight-loss expectation (p<0.01); F2-isoprostane significantly reduced vs controls (p<0.01) · reduced T3, T4, leptin; no significant change in bone/mood/cognition (those outcomes in other CALERIE II papers)
[^spadaro2022]: doi:10.1126/science.abg7292 · CALERIE II secondary immune analysis · ~14% CR achieved over 2 years (stated in abstract) · n=27 (22F + 5M) for CD4 sjTREC; n=25 (20F + 5M) for CD8 sjTREC · thymopoiesis significantly improved (increased thymic mass, increased sjTRECs in CD4 and CD8 cells, p<0.05) · 233 genes up-regulated / 131 down-regulated in subcutaneous adipose tissue · PLA2G7 suppressed by CR; Pla2g7 KO mice partially phenocopy CR immune-metabolic benefits
[^aversa2024]: doi:10.1111/acel.14038 · Aversa Z, White TA, Heeren AA et al. (LeBrasseur lab, Mayo) · *Aging Cell* 2024;23(2):e14038 · CALERIE-2 plasma + adipose secondary analysis · randomized · plasma senescence biomarkers significantly reduced at 12 + 24 mo vs AL; ML-selected SASP markers predicted HOMA-IR, insulin sensitivity index, RMR-residual change; adipose RNA-seq showed reduced senescence-focused gene-set expression · model: healthy non-obese human adults (CALERIE Phase 2) · verified-scope: PubMed efetch abstract only (full PDF not yet checked) · PMID: 37961856
[^hastings2024]: doi:10.1111/acel.14149 · Hastings WJ et al. · *Aging Cell* 2024;23(6):e14149 · CALERIE-2 telomere ancillary · randomized · n=219 (intent-to-treat) · ITT analysis: NO significant CR effect on telomere length attrition over 24 months by qPCR (aTL) or DNAmTL · Effect-of-Treatment-on-the-Treated showed transient opposing-direction effects in 0–12 mo (loss phase) vs 12–24 mo (maintenance phase); net 0–24 mo effect null · model: healthy non-obese human adults · verified-scope: PubMed efetch abstract only · PMID: 38504468
[^mishra2026]: doi:10.1038/s43587-026-01107-0 · Mishra M, Kim HH, Youm YH et al. (Dixit lab, Yale) · *Nat Aging* 2026 (online-ahead-of-print Apr 13) · CALERIE-2 plasma exoproteome (longitudinal; ~14% CR over 2 yr) · randomized · CR significantly lowered C3a/C3 ratio, dampening all three canonical complement pathways; identified non-senescent age-associated macrophage subset in visceral fat as predominant C3a source; intra-adipose C3a-neutralizing antibody reduced inflammaging in mice; FGF21 overexpression and Pla2g7 KO also lowered C3a · model: human + mouse · verified-scope: PubMed efetch abstract only · PMID: 41974968
[^li2026]: doi:10.1016/j.clnu.2026.106625 · Li Y, Xu X, Sehgal R et al. · *Clin Nutr* 2026;60:106625 · CALERIE-2 organ-specific BioAge ancillary · randomized · n=185 (120 CR, 65 AL) · ITT estimates at 24 mo: metabolic BioAge −0.63 yr (p=3.02×10⁻⁷); cardiovascular −1.00 yr (p=1.96×10⁻⁶); whole-body −1.27 yr (p=1.20×10⁻⁴); immune −0.62 yr (p=2.92×10⁻³); liver −0.54 yr (p=8.30×10⁻³); kidney NS · dose-response: ≥12.4% CR drove metabolic + whole-body effects · model: healthy non-obese human adults · verified-scope: PubMed efetch abstract only · PMID: 41895150
[^warmbrunn2026]: doi:10.2337/dc25-1911 · Warmbrunn MV, Yang L, Kishore Biswas R et al. (Fontana group) · *Diabetes Care* 2026;49(5):783–791 · CALERIE-2 weight-trajectory post-hoc · n=190 (analysis subset of n=220 randomized) · stratified by post-12-mo weight trajectory; ~10% (n=20) regained >5% baseline; weight-regain group lost CR-induced gains in insulin AUC, IGF-1/IGFBP-1 ratio, and biological-age estimates; sustained weight loss preserved benefits and was associated with greater BioAge reduction · model: healthy non-obese human adults · verified-scope: PubMed efetch abstract only · PMID: 41838032
[^pribic2025]: doi:10.1038/s41514-025-00254-9 · Pribić T, Das JK, Đerek L et al. · *NPJ Aging* 2025;11(1):71 · CALERIE-2 glycomic pilot · n=26 (no concurrent control) · 25% CR target over 2 yr · IgG galactosylation increased BL→24mo (p=0.051) and 12→24mo (p=0.016); IgG-based GlycAge decreased 12→24mo (p=0.027); plasma high-branched glycans declined; bisecting GlcNAcs increased; complement C3 protein and C3-Man9 N-glycoforms reduced · pilot caveat: absence of control group · model: healthy non-obese human adults · verified-scope: PubMed efetch abstract only · PMID: 40750782
[^orenduff2026]: doi:10.1016/j.isci.2025.114514 · Orenduff MC, Huffman KM, Belsky DW, Pieper CF, Kraus WE, Kraus VB · *iScience* 2026;29(1):114514 · CALERIE-2 small-RNA ancillary · plasma + muscle + adipose smRNA-seq at 12 + 24 mo · 16 smRNAs associated with %CR, 41 with CR-vs-AL; shared pathway enrichment in insulin signaling, circadian rhythm, cell cycle, stress response; cross-species: 17 miRNAs altered by CR in both humans and rhesus monkeys · model: human + cross-species · verified-scope: PubMed efetch abstract only · PMID: 41550774
[^ivimeycook2025]: doi:10.1111/acel.70131 · Ivimey-Cook ER, Sultanova Z, Maklakov AA · *Aging Cell* 2025;24(9):e70131 · meta-analysis · 911 effect sizes from 167 papers across 8 vertebrate species · DR robustly extended lifespan across log-response means and medians; rapamycin produced significant lifespan extension matching DR magnitude; metformin did NOT produce significant lifespan extension; effect of DR robust to DR methodology; high heterogeneity + significant publication bias acknowledged · model: cross-species vertebrate meta · verified-scope: PubMed efetch abstract only · PMID: 40532901
[^pietzner2024]: [[studies/pietzner-2024-fasting-proteome]] · n=12 · in-vivo human, single-arm uncontrolled · 7-day water-only fast; daily plasma proteomics (2,923 targets, Olink Explore 3072) · doi:10.1038/s42255-024-01008-9 · *Nat Metab* 2024;6(4):764–777 · local PDF verified (PMC7617311) · systemic proteome response (1,044/2,923 targets, 35.9%) emerged only after 3 days of complete fasting · model: human · cited here only for the prolonged-fasting definitional contrast — full account on the [[prolonged-fasting]] + study pages
[^commissati2025]: [[studies/commissati-2025-prolonged-fasting-inflammation]] · n=20 (+ n=1,422 validation cohort) · in-vivo human, single-arm uncontrolled · ~10-day water-only fast + ~5-day refeeding; SOMAScan 1,317 proteins + targeted MS + ELISAs · doi:10.1016/j.molmet.2025.102152 · *Mol Metab* 2025;102152 · local PDF verified (accepted pre-proof) · prolonged fasting is acutely pro-inflammatory (hsCRP +129%; complement + coagulation activation; platelet activation via urinary 11-dehydro-TXB2; AST +65%/ALT +64%), all normalizing on refeeding · model: human · cited here for the CR-vs-prolonged-fasting inflammation contrast — full account on [[prolonged-fasting]] + study page
