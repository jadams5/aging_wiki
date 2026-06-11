---
type: exposure
aliases: [dietary fat quality, saturated fat, dietary saturated fat, SFA, dietary fat, fat quality, trans fat, PUFA replacement]
exposure-class: dietary
agent: "saturated fatty acids (SFAs; primary: palmitic C16:0, stearic C18:0, myristic C14:0) + industrial trans fatty acids (iTFAs; primary: elaidic acid C18:1t; from partially hydrogenated vegetable oils). Harm framing. The beneficial comparison: replacement of SFA/iTFA with polyunsaturated fatty acids (PUFAs, ω-6 linoleic + ω-3 EPA/DHA) or monounsaturated fatty acids (MUFAs; oleic C18:1c)"
measure: "% of total energy intake from saturated fat (primary); PUFA:SFA ratio (secondary); iTFA g/day or % energy (secondary)"
modifiable: yes
dose-response: "Monotonic for SFA→LDL-C and ApoB (well-established isocaloric substitution experiments; each 1% energy SFA replaced by PUFA lowers LDL-C ~0.05 mmol/L). SFA→hard CVD endpoints is replacement-nutrient-dependent: replacement with PUFA yields consistent CVD-event reduction; replacement with refined carbohydrate may not. Direct SFA→CVD mortality association is contested in observational pooled cohorts (Siri-Tarino 2010 null; Cochrane 2020 finds RR 0.79 for cardiovascular events with SFA reduction [11 trials, 53,300 participants]; subgroup analyses did not show significant difference between PUFA vs carbohydrate replacement). iTFA→CVD risk is monotonic and unambiguously harmful even at low doses."
target-hallmarks:
  - "[[chronic-inflammation]]"
  - "[[deregulated-nutrient-sensing]]"
target-pathways:
  - "[[lipoprotein-metabolism]]"
  - "[[nf-kb]]"
mechanisms:
  - ldl-apob-elevation
  - endothelial-dysfunction
  - toll-like-receptor-4-activation
  - nf-kb-mediated-inflammation
  - insulin-resistance
  - lipoprotein-remodeling
downstream-phenotypes:
  - "[[phenotypes/atherosclerosis]]"
  - "[[phenotypes/type-2-diabetes]]"
  - "[[phenotypes/obesity]]"
human-evidence-level: strong
reversibility: "Dietary substitution of SFA/iTFA with PUFA/MUFA lowers LDL-C and ApoB within weeks (isocaloric trial timescale 4–12 weeks). Hard-CVD-event benefit is demonstrated in PREDIMED (Mediterranean-pattern PUFA/MUFA enrichment; median 4.8-year RCT; HR 0.69–0.72 for composite MACE vs low-fat control). iTFA near-elimination via food-labeling and reformulation policy has produced measurable population-level CVD mortality reductions in jurisdictions with bans."
mendelian-randomization: partial
literature-checked-through: 2026-06-11
verified: true
verified-date: 2026-06-11
verified-by: claude
verified-scope: "PREDIMED 2018 (10.1056/NEJMoa1800389) verified against full text — n, HRs, CIs confirmed; Siri-Tarino 2010 (10.3945/ajcn.2009.27725) verified against full text — RR and CI confirmed; Richardson 2020 (10.1371/journal.pmed.1003062) verified against full text — DOI corrected from a wrong citation that resolved to an unrelated paper, OR values corrected and multivariable-MR nuance added; Cochrane 2020 (10.1002/14651858.CD011737.pub3) verified against published abstract only (closed-access) — RR corrected from 0.83 to 0.79, CI corrected from 0.70–0.98 to 0.66–0.93, PUFA-subgroup framing corrected; Kim 2021 (10.1016/j.clnu.2020.07.007) not independently verified (closed-access); Mensink 2016 WHO report not independently verified (grey literature, no Crossref DOI); Mozaffarian 2009 commentary, Erridge 2011 review, Trieu 2021, Djuricic 2021 not re-read against full text"
---

# Dietary Fat Quality

**Dietary fat quality** — the saturated/trans vs unsaturated (PUFA/MUFA) composition of dietary fat — is one of the best-characterized modifiable nutritional determinants of cardiovascular disease risk. The harm axis is dominated by **saturated fatty acids (SFAs)** and **industrial trans fatty acids (iTFAs)**: both raise LDL cholesterol and ApoB, drive endothelial dysfunction, and activate pro-inflammatory signaling. The protective lever is **isocaloric replacement** of SFA/iTFA with polyunsaturated fatty acids (PUFAs), particularly linoleic acid (ω-6) and EPA/DHA (ω-3), which lower LDL-C, improve the LDL:HDL ratio, and reduce CVD event rates in RCTs.

The evidence base for dietary fat quality is strong in humans — uniquely so among nutritional exposures — because (1) lipid-lowering trials directly test the SFA↔PUFA exchange mechanism, (2) the PREDIMED trial provides a large Mediterranean-pattern RCT with hard CVD endpoints, and (3) the Cochrane meta-analysis of dietary fat reduction trials provides pooled endpoint data. A frequently-cited nuance is that the **replacement nutrient may matter**: mechanistically, SFA→PUFA exchange is more favorable than SFA→refined carbohydrate on the LDL:HDL ratio; however, the Cochrane 2020 subgroup analysis did not find a statistically significant difference in hard CVD-event reduction between PUFA and carbohydrate replacement arms. The meta-regression finding that greater SFA reduction equals greater CVD benefit holds regardless of replacement type.

This page covers dietary fat quality as an **exposure** (the compositional risk factor). For palmitic acid's specific cellular mechanisms see [[molecules/compounds/palmitic-acid]]. For downstream lipoprotein trafficking see [[pathways/lipoprotein-metabolism]]. For the Mediterranean dietary pattern as an intervention see [[interventions/dietary/mediterranean-diet]].

---

## Lipid-biomarker mechanism: SFA→LDL-C→ApoB

### Isocaloric substitution effects on LDL-C

The SFA→LDL-C relationship is one of the best-documented effects in human nutritional biochemistry, established by decades of controlled feeding studies. Replacing 1% of total energy from SFA with an equivalent from PUFA lowers LDL-C by approximately **0.05 mmol/L (1.9 mg/dL)** [^mensink2016]. The effect is graded and largely monotonic across the physiological range of SFA intake. Myristic acid (C14:0) and palmitic acid (C16:0) are the most potent LDL-raising SFAs; stearic acid (C18:0) is largely LDL-neutral (it is rapidly desaturated to oleic acid in vivo) [^mensink2016].

Replacing SFA with MUFA (oleic acid) lowers LDL-C but to a somewhat lesser extent than PUFA-for-SFA exchange, and improves the LDL:HDL-C ratio less favorably. Replacing SFA with refined carbohydrate lowers LDL-C but simultaneously lowers HDL-C and raises triglycerides, resulting in an unfavorable cardiometabolic phenotype in some individuals [^mensink2016].

### ApoB and particle-level effects

Beyond LDL-C, SFA intake raises **ApoB** (the primary atherogenic lipoprotein apolipoprotein) — reflecting an increase in total atherogenic particle number. See [[apob]] for the clinical significance of ApoB vs LDL-C. High SFA diets increase VLDL secretion and impair LDL receptor upregulation via reduced PCSK9-independent pathways, resulting in prolonged LDL residence time and elevated particle count. The LDL-C mass elevation from SFAs tracks ApoB in most studies, making LDL-C a reasonable surrogate, but some individuals exhibit discordant LDL-C/ApoB responses.

### Trans fatty acids: a separate and steeper effect

Industrial trans fatty acids (iTFAs, formed by partial hydrogenation of vegetable oils) are uniquely harmful: they simultaneously raise LDL-C **and** lower HDL-C, producing a more adverse lipoprotein profile per gram than SFAs [^mensink2016]. Meta-analyses estimate that replacing 2% of energy from iTFA with unhydrogenated fat reduces CHD risk by ~16–25% [^mozaffarian2009]. iTFA intake has declined substantially in many countries following food labeling and regulatory bans, but partial-hydrogenation products remain in some commercial and artisanal foods globally. Ruminant trans fatty acids (e.g., vaccenic acid, CLA) from dairy and beef appear to have neutral or even favorable cardiovascular effects, distinct from iTFAs. #gap/contradictory-evidence (ruminant TFA health effects remain contested; see dairy fat section below).

---

## Cardiovascular event evidence

### Cochrane meta-analysis (Hooper et al. 2020)

The authoritative synthesis of dietary fat reduction RCTs is the Cochrane review "Reduction in saturated fat intake for cardiovascular disease" (Hooper et al. 2020; 15 RCTs, ~59,000 participants total; CVD-events analysis: 11 trials, 53,300 participants) [^hooper2020]. Key findings:

- Reducing saturated fat intake reduced **cardiovascular events** (RR 0.79; 95% CI 0.66–0.93; 11 trials, 53,300 participants; GRADE moderate-quality), corresponding to a ~21% relative reduction
- **No significant effect on all-cause mortality** (RR 0.96; 95% CI 0.90–1.03; 11 trials) or cardiovascular mortality (RR 0.95; 95% CI 0.80–1.12) in the pooled analysis
- Subgroup analysis: subgrouping **did not suggest significant differences** between replacement of SFA with polyunsaturated fat or carbohydrate; data on MUFA and protein replacement were very limited
- Meta-regression showed that greater reductions in saturated fat (reflected in greater LDL-C reductions) resulted in greater CVD-event reductions, explaining most heterogeneity

This finding drives the current dietary guidance: the recommendation is not simply "eat less fat" but rather **replace SFA with PUFA/MUFA** — a distinction that resolves much of the historical confusion about dietary fat and heart disease.

### PREDIMED RCT (Estruch et al. 2013 / 2018)

PREDIMED (Prevención con Dieta Mediterránea) was a large randomized trial (n=7,447; high-CV-risk adults; Spain; ~5-year follow-up) comparing a Mediterranean diet supplemented with extra-virgin olive oil (MUFA-rich), a Mediterranean diet with nuts (PUFA-rich), vs a low-fat control diet [^predimed2018]. The trial was stopped early for benefit; after correction of a randomization issue and re-analysis, results were published in NEJM 2018:

- Mediterranean + EVOO: HR 0.69 (95% CI 0.53–0.91) for composite MACE (myocardial infarction, stroke, cardiovascular death) vs control
- Mediterranean + nuts: HR 0.72 (95% CI 0.54–0.95) vs control
- Mechanism: the Mediterranean pattern increases MUFA (oleic) and PUFA (linoleic, α-linolenic, EPA/DHA) intake while reducing SFA and iTFA; polyphenols from EVOO add pleiotropic anti-inflammatory benefit

PREDIMED is the strongest RCT-level evidence for the PUFA/MUFA-enriched dietary pattern reducing hard CVD endpoints in humans [^predimed2018].

### Pooled cohort observational evidence

The direct SFA→CVD mortality association in observational data has been contested. The Siri-Tarino et al. 2010 meta-analysis (21 prospective cohorts; n=347,747; 5–23-year follow-up) found no significant association between saturated fat intake and CVD mortality (RR 1.07; 95% CI 0.96–1.19 for CHD) [^siritarino2010]. Critics note this analysis did not stratify by replacement nutrient and included dietary measurement heterogeneity.

The Kim, Je, and Giovannucci meta-analysis (2021; 11 prospective cohort studies; n=709,635; up to 23-year follow-up) found that total fat intake was inversely associated with all-cause mortality but the relationship for SFA specifically was non-significant for all-cause or CVD mortality when adjusted for overall diet quality [^kim2021].

The resolution: observational cohort studies measuring total SFA intake without accounting for replacement nutrient will systematically dilute any causal effect. The RCT evidence (Cochrane, PREDIMED) provides the cleaner signal.

---

## Inflammatory and cellular mechanisms

### Toll-like receptor 4 activation and NF-κB

Saturated fatty acids — particularly palmitic acid (C16:0) — activate **Toll-like receptor 4 (TLR4)** on macrophages, monocytes, and endothelial cells, triggering [[nf-kb]]-mediated pro-inflammatory cytokine production (IL-1β, IL-6, TNF-α) [^erridge2011]. This is distinct from the LDL-raising mechanism and provides a direct inflammatory pathway linking high SFA intake to [[chronic-inflammation]] without requiring lipid-intermediate steps. Unsaturated fatty acids (oleic acid, EPA/DHA) competitively inhibit this TLR4 activation, offering a mechanistic explanation for MUFA/PUFA anti-inflammatory effects.

For the detailed cellular lipotoxicity cascade see [[molecules/compounds/palmitic-acid]].

### Endothelial dysfunction

SFA-enriched diets impair endothelium-dependent vasodilation by reducing endothelial nitric oxide synthase (eNOS) activity and increasing reactive oxygen species. Postprandial SFA exposure (e.g., after a high-SFA meal) produces transient endothelial dysfunction measurable by flow-mediated dilation (FMD) studies. This effect is attenuated when the same caloric load is delivered with MUFA (olive oil) instead of SFA. #gap/needs-replication (postprandial FMD data are largely acute-study designs; chronic endothelial impact of habitual SFA intake at population-relevant doses requires larger MR-embedded biopsy studies).

### Insulin resistance and metabolic pathway effects

High SFA diets induce skeletal muscle insulin resistance via ceramide accumulation and IRS-1 serine phosphorylation, impairing insulin-stimulated GLUT4 translocation. Diacylglycerol (DAG) from SFA-enriched phospholipid remodeling activates PKC-θ, further impairing insulin signaling. Replacement with ω-3 PUFAs (EPA/DHA) reduces ceramide synthesis and restores insulin sensitivity in RCT and cell-culture models. This provides a mechanism linking high SFA intake to [[phenotypes/type-2-diabetes]] and [[deregulated-nutrient-sensing]] beyond the LDL pathway. #gap/needs-human-replication (ceramide causal pathway in humans is inferred from mechanistic studies; longitudinal ceramide biomarker data with dietary fat are sparse).

---

## Mendelian randomization evidence

The MR evidence for dietary fat quality effects on CVD is **partial** — meaning instruments exist but the causal chain is typically resolved via the lipid-intermediate (LDL-C/ApoB) rather than fat intake itself being directly instrumented.

**LDL-C as causal mediator (MR-confirmed, ApoB predominant):** Richardson et al. 2020 (PLoS Medicine; multivariable MR using genetic instruments for LDL-C, HDL-C, triglycerides, and ApoB; GWAS in UK Biobank n=393,193–441,016; CHD data from CARDIoGRAMplusC4D, 60,801 cases) found that in univariable MR, genetically predicted LDL-C increases CHD risk (OR per 1-SD: 1.66; 95% CI 1.49–1.86) [^richardson2020]. However, in multivariable MR adjusting simultaneously for ApoB, triglycerides, and LDL-C, only **ApoB retained a robust effect** (OR 1.92; 95% CI 1.31–2.81; p<0.001); the LDL-C estimate reversed to OR 0.85 (95% CI 0.57–1.27; p=0.44). The authors conclude that ApoB — reflecting total atherogenic particle number — is the critical underlying driver. This validates the SFA→ApoB→CVD causal chain and supports ApoB (rather than LDL-C mass alone) as the key intermediary, without directly instrumenting SFA intake.

**Direct SFA intake MR:** Genetic instruments for habitual SFA intake per se are weak (polygenic and confounded by total energy and dietary pattern), so MR estimates for "SFA intake → CVD" are not available with adequate precision. The causal signal is operationalized through lipid intermediates (LDL-C, ApoB).

**Circulating SFA biomarkers:** Trieu et al. 2021 (PLoS Medicine; plasma odd-chain SFA pentadecanoic acid 15:0 and heptadecanoic acid 17:0 as biomarkers of dairy fat intake) found that higher circulating dairy-fat biomarkers were associated with lower or neutral CVD risk in pooled cohort data [^trieu2021], supporting the ruminant-fat vs iTFA distinction. This MR-adjacent evidence uses biomarkers rather than genetic instruments and should be weighted accordingly.

---

## Dairy fat: the contested sub-category

A recurring controversy is whether dairy SFAs (from whole milk, cheese, butter, cream) carry the same risk as SFAs from processed meat or pastries. Several lines of evidence suggest dairy-specific SFAs may be less harmful or neutral:

1. Plasma 15:0 and 17:0 (biomarkers of ruminant fat intake, not de-novo lipogenesis) are consistently associated with neutral or lower CVD risk in cohort studies [^trieu2021]
2. Dairy contains a matrix of nutrients (calcium, potassium, fermentation products) that may offset SFA effects
3. Dairy SFAs are accompanied by naturally-occurring ruminant trans fatty acids (CLA, vaccenic acid) that differ from iTFAs

**Caution:** These observations are largely observational; replacement-nutrient confounding applies here too (dairy-fat consumers who replace carbohydrate may differ from those replacing PUFA). The Cochrane 2020 review [^hooper2020] does not stratify by SFA source, and its trial-level evidence does not specifically isolate dairy fat. #gap/contradictory-evidence

---

## Downstream phenotypes

| Phenotype | Effect direction | Evidence quality | Notes |
|---|---|---|---|
| [[phenotypes/atherosclerosis]] | risk-increasing (SFA/iTFA) | strong | LDL-C/ApoB mechanistic chain + Cochrane RCT data; MR-confirmed via LDL intermediary |
| [[phenotypes/type-2-diabetes]] | risk-increasing (SFA); risk-reducing (PUFA replacing SFA) | moderate | Observational cohort + mechanistic (ceramide/DAG pathway); less RCT data for diabetes-specific endpoint |
| [[phenotypes/obesity]] | indirect; high-fat diets associated with caloric excess | limited | Dietary fat per se vs caloric density disputed; PUFA-for-SFA swap does not reduce adiposity in most RCTs |

---

## Dose-response nuance

### SFA→LDL-C: monotonic and well-quantified

Each additional 1% of energy from SFA raises LDL-C by approximately 0.05 mmol/L when substituted for PUFA [^mensink2016]. This relationship holds across the range of SFA intakes observed in Western populations (~8–15% of total energy). No lower threshold has been established below which SFA has zero LDL effect; natural SFA intake in traditional hunter-gatherer populations consuming primarily animal products suggests some SFA may be metabolically neutral in the context of high physical activity and low iTFA. #gap/dose-response-unclear (threshold for LDL elevation not established in low-iTFA, high-PUFA context).

### SFA→hard CVD: replacement-nutrient-dependent

The dose-response from SFA to CVD events is not well-described as a single function — it depends critically on what replaces the SFA calories. The practical dose-response guidance from Cochrane 2020: reducing saturated fat intake reduces combined CVD events by approximately 21% (RR 0.79; 95% CI 0.66–0.93), with greater reductions in saturated fat causing proportionally greater reductions in CVD events [^hooper2020].

---

## Aging-specific context

There is no dedicated Hallmarks-of-Aging literature on dietary fat quality as a primary aging driver in the way smoking or oxidative stress are framed. However, three aging-relevant pathways are mechanistically engaged:

1. **[[chronic-inflammation]]**: TLR4-driven NF-κB activation from high SFA intake amplifies the baseline inflammaging signal in older adults. Older individuals have higher baseline NF-κB activity and may be more sensitive to dietary pro-inflammatory triggers.
2. **[[deregulated-nutrient-sensing]]**: SFA-driven insulin resistance engages the mTOR/AMPK axis; ceramide accumulation impairs autophagy initiation by inhibiting Akt-mTOR signaling (through PP2A activation). The overlap with caloric restriction biology is direct — caloric restriction's longevity benefit partially depends on reduced SFA-driven lipotoxicity.
3. **Atherosclerosis as a downstream aging phenotype**: The cumulative lifetime burden of high-SFA diets is a major driver of [[phenotypes/atherosclerosis]], which is both a terminal cause of death and an accelerator of vascular aging.

The aging-specific epigenetic clock literature has not yet clearly separated dietary fat quality from overall diet quality in clock-acceleration models. #gap/needs-replication

---

## Extrapolation table

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — LDL-C/ApoB mechanism and TLR4 signaling are human-primary; animal data are consistent |
| Phenotype conserved in models? | yes — rodent high-fat diet models recapitulate dyslipidemia and atherosclerosis; human RCT and cohort evidence is primary |
| Causal evidence in humans? | yes for LDL-C endpoint (MR + isocaloric trials); partial for hard CVD events (RCT + Cochrane) |

---

## Limitations and knowledge gaps

- **Replacement-nutrient confounding in observational studies**: studies measuring only SFA intake without specifying the replacement macronutrient will dilute or miss the true causal effect. The SFA→null-CVD observational results (Siri-Tarino 2010, others) are likely attributable to this confound. #gap/contradictory-evidence
- **Dairy fat exception**: whether dairy-specific SFAs carry the same risk as industrial SFAs remains contested; plasma 15:0/17:0 biomarker data suggest lower risk but MR instruments for dairy fat intake are weak. #gap/contradictory-evidence
- **MR for SFA intake directly**: no well-powered MR study using genetic instruments for habitual SFA intake has been published; the causal chain is validated only through the LDL-C intermediary. #gap/needs-replication
- **Threshold for no-harm SFA intake**: the lower threshold (if any) for SFA at which CVD risk converges to reference is not established by RCT. #gap/dose-response-unclear
- **Aging-specific evidence**: no large RCT has specifically enrolled older adults (>70) and tested SFA-reduction with PUFA replacement on CVD endpoints; PREDIMED enrolled median age 67 but included a range from 55–80. #gap/needs-replication
- **Downstream palmitic-acid page**: `[[molecules/compounds/palmitic-acid]]` holds the cellular lipotoxicity detail; ensure this page is up to date with the TLR4 mechanism.
- **Ceramide causal pathway**: the ceramide-mediated insulin resistance mechanism is well-established in cell culture and rodents but the in-human evidence is mostly observational biomarker studies. #gap/needs-human-replication

---

## Related pages

- [[molecules/compounds/palmitic-acid]] — archetypal dietary SFA; cellular lipotoxicity and TLR4 activation mechanisms
- [[pathways/lipoprotein-metabolism]] — LDL-C/ApoB assembly, secretion, and receptor-mediated clearance
- [[apob]] — the atherogenic lipoprotein protein; marker of total atherogenic particle burden
- [[interventions/dietary/mediterranean-diet]] — practical dietary pattern that operationalizes high-MUFA/PUFA, low-SFA in an RCT-validated context
- [[hallmarks/chronic-inflammation]] — TLR4/NF-κB inflammatory axis engaged by SFAs
- [[hallmarks/deregulated-nutrient-sensing]] — ceramide/DAG-mediated insulin resistance; mTOR/AMPK overlap
- [[phenotypes/atherosclerosis]] — primary downstream CVD phenotype
- [[phenotypes/type-2-diabetes]] — secondary downstream metabolic phenotype
- [[phenotypes/obesity]] — associated downstream phenotype; mediated partly through caloric density of high-fat diets
- [[exposures/smoking]] — comparative exposure page with established MR instruments (contrast with partial MR for SFA)
- [[exposures/alcohol]] — dietary exposure comparator; overlapping inflammatory mechanisms

---

## Footnotes

[^mensink2016]: Mensink RP · *Effects of Saturated Fatty Acids on Serum Lipids and Lipoproteins: A Systematic Review and Regression Analysis* · WHO/FAO technical report, 2016 (WHO ISBN 9789241565349) · grey-literature document; no Crossref DOI assigned; not independently verified against full text · systematic review + isocaloric substitution regression · n=84 controlled trials; each 1% energy SFA→PUFA lowers LDL-C ~0.05 mmol/L; stearic acid (C18:0) is LDL-neutral; trans fatty acids raise LDL-C and lower HDL-C simultaneously · canonical reference for SFA-lipid dose-response quantification · the underlying regression methodology is also published as Mensink RP et al. *Am J Clin Nutr* 2003;77(5):1146–1155 (doi:10.1093/ajcn/77.5.1146; PMID 12716665; 60 controlled trials) #gap/no-fulltext-access

[^hooper2020]: doi:10.1002/14651858.CD011737.pub3 · Hooper L, Martin N, Jimoh OF, Kirk C, Foster E, Abdelhamid AS · *Cochrane Database Syst Rev* 2020;8:CD011737 · meta-analysis · 15 RCTs (~59,000 participants total); CVD-events analysis: 11 trials, 53,300 participants, ~8% had CVD event · reducing SFA intake reduced combined CVD events (RR 0.79; 95% CI 0.66–0.93; GRADE moderate); no effect on all-cause mortality (RR 0.96; 95% CI 0.90–1.03) or CVD mortality (RR 0.95; 95% CI 0.80–1.12); subgroup analysis did not show significant difference between PUFA vs carbohydrate replacement; meta-regression: greater SFA reduction → greater CVD-event reduction · PMID 32428300 · closed-access; verified against published abstract #gap/no-fulltext-access

[^predimed2018]: doi:10.1056/NEJMoa1800389 · Estruch R, Ros E, Salas-Salvadó J, Covas MI, Corella D, Arós F, et al. (PREDIMED Investigators) · *N Engl J Med* 2018;378(25):e34 · randomized trial · n=7,447 high-CV-risk adults, Spain, ~4.8 yr median; Mediterranean diet + EVOO: HR 0.69 (95% CI 0.53–0.91) for MACE; Mediterranean + nuts: HR 0.72 (95% CI 0.54–0.95) vs low-fat control · PMID 29897866

[^siritarino2010]: doi:10.3945/ajcn.2009.27725 · Siri-Tarino PW, Sun Q, Hu FB, Krauss RM · *Am J Clin Nutr* 2010;91(3):535–546 · meta-analysis · n=347,747; 21 prospective cohorts, 5–23 yr follow-up · no significant association between SFA intake and CHD (RR 1.07; 95% CI 0.96–1.19) or CVD mortality when not stratifying by replacement nutrient; widely cited as "saturated fat is not harmful" but see replacement-nutrient caveat in body · PMID 20071648

[^kim2021]: doi:10.1016/j.clnu.2020.07.007 · Kim Y, Je Y, Giovannucci EL · *Clin Nutr* 2021;40(3):1060–1070 · systematic review + meta-analysis · n=709,635; 11 prospective cohort studies, up to 23 yr · total fat inversely associated with all-cause mortality; SFA non-significantly associated with all-cause or CVD mortality in fully adjusted models; replacement-nutrient data limited · PMID 32723506

[^richardson2020]: doi:10.1371/journal.pmed.1003062 (PMID 32203549) · Richardson TG, Sanderson E, Palmer TM, Ala-Korpela M, Ference BA, Davey Smith G, Holmes MV · *PLoS Med* 2020;17(3):e1003062 · multivariable Mendelian randomization · GWAS in UK Biobank (393,193–441,016 participants); CHD outcomes from CARDIoGRAMplusC4D (60,801 cases, 123,504 controls); univariable MR: LDL-C OR 1.66 (95% CI 1.49–1.86), ApoB OR 1.73 (95% CI 1.56–1.91); multivariable MR: only ApoB retains robust effect (OR 1.92; 95% CI 1.31–2.81; p<0.001); LDL-C estimate reverses to OR 0.85 (p=0.44) when adjusted for ApoB; supports ApoB as the predominant causal atherogenic entity · PMID 32203549

[^trieu2021]: doi:10.1371/journal.pmed.1003763 · Trieu K, Bhat S, Dai Z, Leander K, Gigante B, Qian F, Korat AVA, Sun Q, Pan XF, Laguzzi F, Cederholm T, de Faire U, Hellénius ML, Wu JHY, Risérus U, Marklund M · *PLoS Med* 2021;18(10):e1003763 · prospective cohort (biomarker-based) · plasma 15:0 and 17:0 as biomarkers of dairy fat intake; higher levels associated with neutral or lower CVD and all-cause mortality; supports ruminant-fat distinction from iTFA and total SFA grouping · PMID 34547017

[^mozaffarian2009]: doi:10.1056/NEJMra0905563 · Mozaffarian D, Willett WC · review · *N Engl J Med* 2009;361(21):2252–2254 · commentary + evidence synthesis · replacing 2% energy iTFA with unhydrogenated fat reduces CHD risk ~16–25%; iTFA uniquely raises LDL-C and lowers HDL-C simultaneously · PMID 19920386

[^erridge2011]: doi:10.1080/09637486.2010.511237 · Erridge C · *Int J Food Sci Nutr* 2011;62(1):1–7 · review · saturated fatty acids activate TLR4 and trigger NF-κB-mediated inflammation in macrophages and endothelial cells; palmitic acid is the primary agonist; mechanism distinct from LDL-C elevation pathway · PMID 20874031

[^djuricic2021]: doi:10.3390/nu13051610 (PMID 34371930) · Djuricic I, Calder PC · *Nutrients* 2021;13(5):1610 · review · beneficial effects of ω-6 (linoleic acid) and ω-3 (EPA/DHA) PUFAs on cardiovascular, metabolic, and inflammatory outcomes; anti-inflammatory resolution lipids (resolvins, protectins) from DHA; PUFA replacement of SFA mechanistic and clinical summary
