---
type: study
doi: 10.1172/JCI196714
pmid: 41026613
pmc: PMC12646655
title: "Plasminogen activator inhibitor 1 promotes aortic aging-like pathophysiology in humans and mice"
authors: [Khoddam A, Kalousdian A, Eren M, Soberanes S, Decker A, et al.]
year: 2025
journal: Journal of Clinical Investigation
volume: 135
issue: 23
pages: "e196714"
study-design: in-vivo
publication-type: research-article
organism: multi
n-subjects: "human cfPWV cohort n=66; mouse cohorts varied by experiment (survival n=69, genetic l-NAME n=19, PAI-1 overexpression n=22-23, TM5614 n=35)"
intervention: [TM5614, l-NAME]
hallmarks-tested: ["[[cellular-senescence]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [serpine1-haploinsufficiency-lower-human-cfpwv, serpine1ta700-mouse-median-survival-plus-17-percent, pai1-reduction-protects-against-lname-stress, stabilized-pai1-overexpression-worsens-vascular-physiology, ccn1-itgb1-smooth-muscle-signature, tm5614-reverses-pwv-but-not-blood-pressure-to-baseline]
local-pdf: null
verified: true
verified-date: 2026-08-31
verified-by: claude
verified-scope: "Primary article, supplemental PDF, and supporting-data workbook checked end-to-end; JCI/PubMed correction, retraction, and postpublication supersession search current through 2026-08-31"
---

# Khoddam et al. 2025 — PAI-1 and aortic aging-like pathophysiology

## TL;DR

This mixed human-observational and mouse-experimental study connects partial loss of [[pai-1|plasminogen activator inhibitor 1 (PAI-1)]] to lower arterial stiffness and longer mouse survival, and tests the reverse direction with stabilized PAI-1 overexpression. In 33 human *SERPINE1* c.699_700dupTA heterozygotes and 33 age- and sex-matched noncarriers, the adjusted carotid-femoral pulse-wave velocity (cfPWV) difference was **−1.182 m/s** (95% CI −1.784 to −0.580; *P* = 0.0002). A CRISPR mouse analog reduced circulating PAI-1, lowered aged-mouse pulse-wave velocity (PWV), and extended **median survival from 749 to 875 days: +126 days, or 16.8% (reported as 17%)**. Partial PAI-1 loss also attenuated an 8-week l-NAME vascular-stress phenotype, while stabilized PAI-1 overexpression produced the opposite physiological pattern. Aortic transcriptomics nominated a smooth-muscle-cell CCN1–integrin-β1/ECM-remodeling program but did not establish that program causally. Oral TM5614 restored PWV to baseline during continued l-NAME exposure; it reduced blood pressure from the 4-week peak but **did not normalize either systolic or diastolic pressure to baseline**, despite stronger wording in the abstract.[^khoddam2025]

---

## Design

### Human cfPWV cohort

- **Population:** 66 additional members of an Old Order Amish founder population in Berne, Indiana who were not included in the authors' 2017 report.
- **Groups:** 33 *SERPINE1* c.699_700dupTA heterozygotes (11 men, 22 women) and 33 unaffected controls selected at random from people of the same age and sex (11 men, 22 women).
- **Age:** the supporting-data file contains matched ages 43–86 years (mean 59.0 years per genotype group).
- **Measurement:** carotid-femoral PWV after 10 minutes supine rest, using SphygmoCor XCEL applanation tonometry plus an oscillometric cuff. The sonographer was blinded to genotype.
- **Analysis:** multiple linear regression with cfPWV as outcome and genotype, age, and sex as covariates; separate simple age–PWV regressions were compared by ANCOVA.[^khoddam2025]

### Mouse cohorts and interventions

| Arm | Model and sample | Exposure / timing | Main endpoints |
|---|---|---|---|
| CRISPR target engagement | C57BL/6J *Serpine1*+/+, *Serpine1*TA700/+, and *Serpine1*TA700/TA700; n=7/genotype | Global TA insertion at the end of exon 4 | Plasma PAI-1 antigen |
| Natural aging, PWV | aged ≥600-day mice: WT n=6 (4 male, 2 female); heterozygotes n=10 (6 male, 4 female) | no pharmacological exposure | aortic PWV |
| Survival | WT n=24 (9 male, 15 female); heterozygotes n=45 (27 male, 18 female) | lifespan observation | Kaplan–Meier survival |
| Genetic l-NAME stress | 12-week C57BL/6J mice: WT n=10 (7 male, 3 female); heterozygotes n=9 (6 male, 3 female) | l-NAME 1 mg/mL drinking water for 8 weeks | PWV, tail-cuff SBP, echocardiographic E/e′ |
| Stabilized PAI-1 overexpression | B6.D2 WT n=9 (5 male, 4 female); *SERPINE1*StabOE n=14 for SBP and n=13 for PWV/E/e′ | measurements at 12 and 24 weeks | PWV, SBP, E/e′ |
| Bulk RNA-Seq | l-NAME-treated WT n=6 and heterozygotes n=6 (3 male, 3 female per genotype) | after 8 weeks l-NAME | whole-aorta differential expression |
| CCN1 immunofluorescence | WT n=9; heterozygotes n=7 | after l-NAME | aortic CCN1 signal |
| Single-cell RNA-Seq | independent l-NAME-treated WT n=6 (3 male, 3 female); heterozygotes n=4 (2 male, 2 female) | after 8 weeks l-NAME | 29,535 post-QC aortic cells; RNA velocity and CellRank |
| TM5614 reversal | 20-week B6.D2 *Serpine1*-GFP reporter mice, all *Serpine1*+/+: control chow n=16 (7 male, 9 female); TM5614 n=19 (9 male, 10 female) | l-NAME 1 mg/mL for 4 weeks, then continued l-NAME plus TM5614 20 mg/kg/day in chow or control chow for 6 weeks | PWV, SBP, DBP at baseline, week 4, week 10 |

The CRISPR insertion created a premature stop predicted to truncate mouse PAI-1 at 289 amino acids. Three of 20 F0 mice carried the intended heterozygous insertion and founded the C57BL/6J colony. The overexpression model instead expressed a functionally stabilized human PAI-1 cDNA from the murine preproendothelin-1 promoter on a B6.D2 background. Physiological measurements were blinded to genotype and/or treatment; the paper does not state random allocation for the animal treatment arms.[^khoddam2025]

---

## Key results

### Human heterozygotes had lower cfPWV

After adjustment for age and sex, heterozygotes had cfPWV **1.182 m/s lower** than matched noncarriers (coefficient −1.182 m/s; 95% CI −1.784 to −0.580; *P* = 0.0002). The genotype-specific age slopes did not differ (ANCOVA of slopes *P* = 0.785), but the fitted elevations did (*P* = 0.0002). The article describes the unadjusted aggregate difference as roughly 12% lower; the released values average 8.92 m/s in controls and 7.73 m/s in carriers. Both sex-stratified analyses were directionally consistent, according to the authors.[^khoddam2025]

This is a cross-sectional genotype association, not a PAI-1-inhibitor trial. The rare founder variant and lifelong exposure reduce confounding by short treatment duration, but the design cannot by itself show that lowering PAI-1 pharmacologically will reproduce the effect.

### CRISPR partial loss reduced PAI-1 and extended median survival by 17%

Relative to WT, plasma PAI-1 antigen was reduced by approximately 50% in heterozygotes and 100% in homozygotes (n=7/genotype). Among mice aged at least 600 days, heterozygotes had roughly 20% lower PWV than WT (n=10 versus n=6; *P*<0.01).[^khoddam2025]

In the lifespan cohort, median survival was **875 days in *Serpine1*TA700/+ mice versus 749 days in WT littermates**, a **126-day / 16.8% increase**, with separation by log-rank test (*P*<0.001; n=45 versus n=24). This is the paper's exact basis for the reported **17%**, rather than a vague approximately 20% lifespan effect. The authors reported no male–female survival difference within the heterozygous group, but the supplemental sex analysis supplies no effect estimate or interaction test.[^khoddam2025] #gap/needs-replication #gap/needs-human-replication

### Partial loss attenuated l-NAME cardiovascular stress

At 12 weeks, WT and heterozygous mice were comparable in PWV, systolic blood pressure (SBP), and E/e′. After 8 weeks of l-NAME (1 mg/mL in drinking water), all three changes were attenuated in heterozygotes:[^khoddam2025]

- WT PWV rose strongly from baseline (*P*<0.0001), whereas the heterozygous rise was smaller (*P*<0.01); end-of-study PWV differed by genotype (*P*<0.0001).
- End-of-study SBP was lower in heterozygotes than WT (*P*<0.05). When separated by sex, male heterozygote end-of-study SBP was the one comparison that did not reach significance.
- WT E/e′ increased (*P*<0.01), while the heterozygous within-group change was nonsignificant; end-of-study E/e′ differed by genotype (*P*<0.001), consistent with preserved diastolic function.

The induced PWV values overlapped those of naturally aged mice, but l-NAME is an endothelial nitric oxide synthase inhibitor stress test, not chronological aging.

### Stabilized PAI-1 overexpression produced the opposite pattern

At 12 weeks, *SERPINE1*StabOE mice already had higher SBP (*P*<0.05) and E/e′ (*P*<0.0001) than WT; PWV did not yet differ. At 24 weeks, the genotype contrasts were *P*<0.0001 for PWV, SBP, and E/e′. PWV increased significantly from 12 to 24 weeks, but the within-genotype time comparisons for SBP and E/e′ were nonsignificant. Thus, this arm supports a strong overexpression-versus-control difference, while the authors' phrase "progressive worsening" overstates the longitudinal evidence for SBP and E/e′.[^khoddam2025]

### Transcriptomics nominated, but did not prove, a PAI-1–CCN1–integrin-β1 mechanism

Whole-aorta RNA-Seq after l-NAME identified *Serpine1* and *Ccn1* among the reduced transcripts in heterozygotes (n=6/genotype). Reduced CCN1 protein signal was supported by aortic immunofluorescence (WT n=9, heterozygote n=7; one-tailed Mann–Whitney *P*<0.05).[^khoddam2025]

The independent single-cell experiment retained **29,535 cells** after quality control: 17,534 from six WT aortas and 12,001 from four heterozygous aortas. More than 60% were [[vsmc|vascular smooth muscle cells]] and just over 2% were [[endothelial-cells]]. The largest genotype differences in *Serpine1*, *Ccn1*, and *Itgb1* occurred in smooth-muscle clusters. KEGG enrichment in heterozygous aortas included autophagy, mitophagy, FoxO signaling, longevity regulation, actin-cytoskeleton regulation, vascular smooth-muscle contraction, and glucagon signaling.[^khoddam2025]

RNA velocity and CellRank inferred greater smooth-muscle-state plasticity in heterozygotes, with trajectories toward an ECM-secretory population and fibroblasts rather than predominantly mature SMC states. The ECM-secretory population combined moderate *Myh11*/*Mylk*, low *Acta2*, and higher *Adamtsl1*, *Lama2*, *Fbln1*, and *Vcan*. These analyses are computational state-transition inferences, not lineage tracing. The proposed [[pai-1|PAI-1]] → CCN1 / integrin β1 → senescence/[[extracellular-matrix-remodeling]] axis remains a hypothesis because the study did not perturb or rescue *Ccn1* or *Itgb1*.[^khoddam2025] #gap/no-mechanism

### TM5614 reversed PWV but only partially reversed blood pressure

After 4 weeks of l-NAME, PWV, SBP, and DBP had increased. Mice then remained on l-NAME for another 6 weeks while receiving **oral TM5614 at 20 mg/kg/day in standard chow** or control chow:[^khoddam2025]

- **PWV:** with TM5614, week 10 was lower than week 4 (*P*<0.0001) and no longer differed from baseline; with control chow, week 4 versus week 10 was nonsignificant and week 10 remained above baseline (*P*<0.0001).
- **SBP:** TM5614 lowered week-10 SBP versus week 4 (*P*<0.0001), but week 10 remained above baseline (*P*<0.0001). Control-chow SBP remained elevated.
- **DBP:** the same pattern held: TM5614 reduced DBP from week 4 (*P*<0.0001), but week 10 remained above baseline (*P*<0.0001); control chow did not reverse the elevation.

The figure therefore supports normalization of **PWV**, not normalization of SBP or DBP. Both sexes were included, and the authors describe sex-stratified results as consistent. This is short-term reversal of a pharmacologically induced phenotype in mice, not evidence that TM5614 reverses natural vascular aging or improves lifespan. #gap/needs-human-replication #gap/long-term-unknown

---

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | The mouse CRISPR allele was designed to mimic the human *SERPINE1* c.699_700dupTA frameshift, and the human cohort directly linked heterozygosity to lower cfPWV. |
| Phenotype conserved in humans? | partial | Age-associated arterial stiffening and PWV are shared, and carriers had lower cfPWV; acute l-NAME hypertension and the stabilized-overexpression model are not equivalent to natural human vascular aging. |
| Replicated in humans? | no | The human arm is observational genetic evidence. TM5614 has not been tested here as a vascular-aging intervention, and the mouse survival effect has no human intervention analogue. |

The human genetic arm substantially strengthens target plausibility relative to a mouse-only result, but it does not validate the drug, dose, reversibility, safety, or lifespan effect in humans.[^khoddam2025]

---

## Sex handling

The investigators included both sexes in every principal human and mouse cohort, analyzed pooled data, and repeated physiological analyses separated by sex. Important boundaries remain:[^khoddam2025]

- the genetic l-NAME arm included only three females per genotype, limiting sex-specific precision;
- the lifespan cohort was imbalanced by genotype and sex, and "not sex dependent" was based on a within-heterozygote log-rank comparison rather than a reported genotype-by-sex interaction;
- Supplemental Figure 1 reports **36 women and 13 men per human genotype**, which conflicts with the main text, Figure 1, Methods, and supporting-value file (**22 women and 11 men per genotype**). The n=33-per-genotype main-text dataset is used on this page.

---

## Limitations and evidence-weight

1. **Human evidence is small, founder-population, and cross-sectional.** The 66 participants came from one genetically and socially distinctive population; adjustment was limited to age and sex. There was no intervention, longitudinal PWV outcome, or cardiovascular-event endpoint.
2. **Internal reporting discrepancies require author clarification.** Supplemental Figure 1's human sex counts conflict with the released n=66 dataset. Table 1 reports a genotype standard error of 0.803 m/s that is not internally compatible with its coefficient, 95% CI, and *P* value; the coefficient, CI, and *P* are retained here without attempting to repair the standard error. The survival source-data sheet contains 67 rows (24 WT and 43 heterozygotes), not the 69 mice (24 and 45) in Figure 1F, and includes repeated mouse identifiers; it also lacks censoring indicators, so it cannot independently reconstruct the Kaplan–Meier curve. Supplemental Figure 5 lists 10 l-NAME-treated heterozygotes whereas main Figure 2 lists 9. In the TM5614 sheet, some sex labels and time headings conflict with the figure legend, and some SBP end-point values are missing or duplicated; the published figure/legend, not an attempted workbook repair, governs the reported group sizes and significance tests.
3. **The 17% survival effect is single-colony mouse evidence.** The survival cohorts were unequal (24 WT versus 45 heterozygotes), cause of death was not reported, and the paper does not describe randomization or prespecified survival analysis. Independent replication on another background is needed. #gap/needs-replication
4. **l-NAME is an aging-like stress model, not aging itself.** The authors acknowledge that neuronal nitric oxide synthase and central regulatory effects are not fully accounted for. Eight to ten weeks of nitric-oxide-synthase inhibition cannot establish reversal of lifelong vascular aging.
5. **The overexpression model is artificial.** Stabilized human PAI-1 driven by a preproendothelin-1 promoter on a B6.D2 background tests sufficiency under engineered excess; it does not estimate the effect of common human PAI-1 elevations.
6. **TM5614 evidence is preclinical and model-specific.** Treatment lasted six weeks, allocation was not described as randomized, no no-l-NAME drug arm was included, and the study did not report vascular-aging clinical outcomes, lifespan, or long-term bleeding/fibrosis safety. BP improved but did not return to baseline. Figure 7 used ordinary one-way ANOVA with Tukey correction despite repeated measurements on the same mice; no repeated-measures model was reported.
7. **Mechanistic results are associative.** Bulk RNA-Seq was n=6/genotype, scRNA-Seq used 4 versus 6 animals with unequal cell yields, and RNA velocity/CellRank do not directly observe lineage transitions. No CCN1 or ITGB1 intervention established mediation; CCN1 protein confirmation used a one-tailed test.
8. **Senescence was inferred rather than directly quantified.** The study did not report a validated multi-marker senescence panel or senescent-cell counts in the experimental aortas, so `hallmarks-tested: cellular-senescence` denotes a mechanistic hypothesis rather than direct hallmark burden measurement.

---

## Funding, conflicts, and data availability

The work was supported by NIH grants R35HL171553 and R01AI170938, an American Heart Association predoctoral fellowship, and NCI core-support grant P30 CA060553. Toshio Miyata was the founder and chair of **Renascience**, supplied materials, and edited the manuscript; Renascience supplied TM5614. The authors state that the company did not influence experimental design or data interpretation. This relationship is directly relevant to the pharmacological arm and should remain visible when weighing it.[^khoddam2025]

Bulk and single-cell aortic RNA-Seq were deposited as GEO **GSE297835**. JCI released the supplemental figures and a supporting-data workbook containing individual plotted values.

---

## Cross-references

- [[pai-1|PAI-1 / SERPINE1]] — target protein; downstream page should distinguish partial reduction from complete deficiency
- TM5614 — oral PAI-1 inhibitor tested only in the l-NAME reversal arm here; dedicated compound page not yet seeded
- [[arterial-stiffening]] and [[cardiovascular-aging]] — principal phenotypes
- [[hypertension]] — l-NAME-induced SBP/DBP phenotype
- [[enos]] — l-NAME target and nitric-oxide axis
- [[vsmc]] and [[endothelial-cells]] — major vascular cell types analyzed
- CCN1 and ITGB1 — candidate, unproven mediators; dedicated protein pages not yet seeded
- [[extracellular-matrix-remodeling]], [[autophagy]], and [[foxo-transcription-factors]] — transcriptomic programs
- [[cellular-senescence]] and [[sasp]] — proposed aging context; not directly quantified in this study

## Cited by wiki pages

[Backlinks; auto-populated by Obsidian]

---

## Footnotes

[^khoddam2025]: [[studies/khoddam-2025-pai1-aortic-aging]] · doi:10.1172/JCI196714 · PMID 41026613 · PMCID PMC12646655 · human n=66 cross-sectional cohort + multiple in-vivo mouse cohorts (survival n=69; genetic l-NAME n=19; TM5614 n=35) · observational + in-vivo · model: Old Order Amish *SERPINE1* c.699_700dupTA carriers and C57BL/6J/B6.D2 mice · full article, supplemental figures, and supporting-data values used for extraction
