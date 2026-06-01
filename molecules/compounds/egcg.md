---
type: compound
aliases: [epigallocatechin gallate, epigallocatechin-3-gallate, (-)-EGCG, EGCg, green tea catechin]
pubchem-cid: 65064
inchikey: WMBWREPUVVBILR-WIYYLYMNSA-N
chembl-id: null   # not confirmed via ChEMBL API; see #gap/needs-canonical-id
drugbank-id: null
cas-number: 989-51-5
mechanisms: [mtor-inhibitor, pi3k-inhibitor, autophagy-inducer, nrf2-activator, sirt1-activator, anti-inflammatory, antioxidant, ampk-activator]
targets: ["[[mtor]]", "[[pi3k-akt-pathway]]", "[[ampk]]", "[[sirt1]]", "[[nf-kb]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[disabled-macroautophagy]]", "[[chronic-inflammation]]", "[[mitochondrial-dysfunction]]", "[[loss-of-proteostasis]]", "[[cellular-senescence]]"]
clinical-stage: supplement
human-evidence-level: limited
half-life: "1.9–4.6 h (terminal, fasted; markedly reduced with food)"
translation-gap: translation-blocked-bioavailability
next-experiment: "Bioavailable EGCG formulation (lipid-encapsulated or prodrug) Phase 2 RCT achieving plasma >=Ki and avoiding hepatotoxicity threshold (<800 mg/day); n>=200."
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "EFSA 2018 verified against full PDF (89 pp.); Van Aller 2011 Ki values verified via Europe PMC abstract (closed-access, full PDF not available); Ullmann 2003 PK parameters verified via Europe PMC abstract (closed-access, full PDF not available); Nakagawa 1997 DOI corrected and 0.32% bioavailability confirmed via PubMed abstract (PMID 9177723); Kuriyama 2006 HR values verified via Europe PMC abstract (closed-access, full PDF not available). Remaining cited sources (Gu 2014, Ye 2015, Yu 2017, Naumovski 2015, James 2018, Acosta 2023, Brown 2009, Mielgo-Ayuso 2014, Basu 2010, Pallauf 2017) not verified against full PDFs — recommend verification on next lint pass. R34 backfill 2026-05-08: PubMed-recency search added Zhou 2026 Neuroepidemiology cognition meta-analysis (10.1159/000543784) and Rezaei 2025 Blood Press BP meta-analysis (10.1080/08037051.2025.2517122) — abstracts verified via PubMed efetch only; full-PDF verification deferred. No 2024–2026 progeria-EGCG trial published; PENSA primary results still not in PubMed as of 2026-05-08. 2026-05-26 addition: 'Food-matrix degradation: polyphenol oxidase susceptibility' subsection added — anchored on verified [[studies/ottaviani-2023-ppo-flavanol-bioavailability]] + established black-tea PPO chemistry; supporting refs [^chen2023] (10.1016/j.fochx.2023.100615) and [^liu2023] (10.3390/molecules28041722) NOT full-PDF verified (abstract + search-grounded); flag for next lint pass."
literature-checked-through: 2026-05-08
---

# EGCG (Epigallocatechin gallate)

EGCG is the predominant catechin in *Camellia sinensis* (green tea), accounting for roughly 50–80% of total catechin content in brewed green tea. It is among the most studied plant polyphenols for aging-related biology, with documented in vitro and in vivo activities spanning [[mtor|mTOR]] inhibition, [[autophagy]] induction, [[nf-kb|NF-κB]] suppression, [[sirt1|SIRT1]] activation, and [[cellular-senescence|senescence]] modulation. Epidemiological associations between green tea consumption and reduced cardiovascular and all-cause mortality have been reported in large Japanese cohorts. However, the central bottleneck for human translation is **poor and highly variable oral bioavailability**, compounded by hepatotoxicity risk at supplemental doses.

## Identity

| Field | Value |
|---|---|
| PubChem CID | 65064 |
| InChIKey | WMBWREPUVVBILR-WIYYLYMNSA-N |
| CAS | 989-51-5 |
| ChEMBL ID | not confirmed #gap/needs-canonical-id |
| Molecular formula | C22H18O11 |
| Molecular weight | 458.4 g/mol |
| Class | [[flavan-3-ols\|Flavan-3-ol]] — gallated catechin (epigallocatechin-3-gallate); see class page for shared bioavailability + food-matrix biology |
| Source | *Camellia sinensis* leaves (green, white, oolong tea) |
| Typical green tea content | ~50–200 mg EGCG per 250 mL brewed cup (highly variable by cultivar, brewing) |

**Structural note:** EGCG bears a galloyl ester at C-3 of the catechin ring — the feature that distinguishes it from EGC (epigallocatechin), EC (epicatechin), and ECG. The galloyl moiety is responsible for much of its protein-binding activity and is also the substrate for galloylesterase-mediated hydrolysis in the gut.

## Mechanism of action

### mTOR / PI3K inhibition

EGCG functions as an **ATP-competitive dual inhibitor** of PI3K and mTOR in vitro, with Ki values of 380 nM (PI3K) and 320 nM (mTOR) respectively [^vanaller2011]. This is mechanistically distinct from allosteric mTOR inhibitors like rapamycin (which targets the FKBP12–rapamycin binding domain). At these concentrations, EGCG suppresses downstream effectors including p70S6K and 4E-BP1.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (mTOR inhibition) conserved in humans? | partial (in vitro only; plasma exposure likely sub-Ki at supplement doses) |
| Replicated in humans? | no |

#gap/needs-human-replication — mTOR inhibition by EGCG has been demonstrated biochemically and in cell culture. Whether systemic mTOR inhibition occurs in humans at achievable plasma EGCG concentrations (typically <300 ng/mL after oral dosing; see Pharmacokinetics below) has not been shown in vivo.

### Autophagy induction

EGCG restores impaired autophagic flux in rodent models. In stress-exposed rats, EGCG treatment restored hippocampal autophagic flux and reversed cognitive deficits; effects were abolished by autophagy blockade, implicating autophagy as the primary mechanism [^gu2014]. The mTOR inhibition mechanism (above) likely contributes — mTORC1 suppression de-represses ULK1 and initiates [[autophagy]] initiation complex assembly.

### AMPK activation

EGCG activates [[ampk]] in multiple cell types, likely secondary to mild mitochondrial uncoupling that shifts the AMP:ATP ratio. This AMPK activation is upstream of and complementary to mTOR inhibition. #gap/no-mechanism — the proximal mechanism by which EGCG activates AMPK (direct allosteric vs. metabolic perturbation) is not fully established.

### NRF2 activation and antioxidant response

EGCG activates the [[nf-kb|NRF2]]/HO-1 pathway via SIRT1-dependent deacetylation of NRF2 [^ye2015], upregulating phase-II detoxifying enzymes (NQO1, HO-1, glutathione S-transferases). This protective pathway counteracts oxidative stress and is relevant to the [[mitochondrial-dysfunction]] hallmark.

**Note:** SIRT1 and NRF2 are distinct from [[nf-kb]]. This page uses [[nf-kb]] as a link placeholder for the NF-κB pathway (inflammatory suppression), which EGCG also inhibits. [[sirt1|SIRT1]]-to-NRF2 signaling is a separate mechanism.

### Anti-inflammatory / NF-κB suppression

EGCG suppresses [[nf-kb|NF-κB]] transcriptional activity and downstream [[sasp|SASP]] cytokines (IL-6, IL-8, TNF-α, MCP-1) in cell culture and rodent models. This anti-inflammatory mechanism converges with effects on [[chronic-inflammation]].

### SIRT1 activation

EGCG has been reported to activate [[sirt1]] catalytic activity, though whether this is direct or indirect (e.g., via NAD+ perturbation) is unclear. In combination with metformin, SIRT1-mediated deacetylation of NRF2 was demonstrated [^yu2017]. #gap/no-mechanism — direct binding vs. indirect activation unresolved.

## Effects on aging hallmarks

| Hallmark | Effect | Evidence source |
|---|---|---|
| [[deregulated-nutrient-sensing]] | mTOR inhibition (ATP-competitive); AMPK activation | [^vanaller2011] |
| [[disabled-macroautophagy]] | Restores autophagic flux in rodent model; mTOR-dependent | [^gu2014] |
| [[chronic-inflammation]] | Suppresses NF-κB, reduces IL-6/TNF-α; lowers serum inflammatory markers in human RCTs (limited) | [^basu2010] |
| [[loss-of-proteostasis]] | Autophagy induction clears misfolded proteins; NRF2 activation upregulates proteasome components | [^gu2014] |
| [[mitochondrial-dysfunction]] | NRF2/HO-1 activation reduces ROS; AMPK promotes [[mitochondrial-biogenesis]] | [^ye2015] |
| [[cellular-senescence]] | Reduces senescence markers in vitro; limited direct in vivo evidence in mammals #gap/needs-human-replication | #gap/unsourced |
| [[genomic-instability]] | Antioxidant activity reduces oxidative DNA damage in vitro; not confirmed in vivo in aging context | #gap/needs-human-replication |

## Pharmacokinetics

**Oral bioavailability is the dominant constraint for human translation.** Free EGCG is extremely poorly absorbed from the gut, with estimates of systemic bioavailability from early green tea studies as low as ~0.32% of ingested dose appearing in plasma as unconjugated EGCG [^nakagawa1997].

Key PK parameters from human ascending-dose study (50–1600 mg oral, fasted healthy volunteers) [^ullmann2003]:

| Parameter | Range across doses |
|---|---|
| Peak plasma Cmax | 130–3,392 ng/mL |
| AUC(0-∞) | 442–10,368 ng·h/mL |
| Terminal half-life (t½z) | 1.9–4.6 h |
| Tmax | 1.3–2.2 h |

**Food dramatically reduces bioavailability.** Taking EGCG capsules with a light meal reduced AUC by 2.7–3.9-fold compared to fasted dosing [^naumovski2015]. Most clinical trials have not standardized the fed/fasted state, complicating dose-response interpretation.

**Metabolism:** EGCG is rapidly glucuronidated and sulfated in intestinal epithelial cells and liver; the majority of circulating EGCG in humans is in conjugate form, potentially limiting receptor-level activity. Colonic microbiome catabolism generates ring-fission metabolites (pyrogallol, valerolactones) with distinct — and poorly characterized — bioactivity. #gap/dose-response-unclear

**Translation from mouse doses:** Mouse experiments often use 50–200 mg/kg oral doses. Allometric body-surface-area scaling to a 70 kg human yields ~290–1,160 mg/day equivalent — but given the much lower bioavailability variability in gavage-dosed rodents vs. capsule-dosed humans, effective tissue exposure comparisons are uncertain.

## Food-matrix degradation: polyphenol oxidase susceptibility

A distinct pre-absorption loss mechanism — separate from the gut/hepatic conjugation that dominates the PK section above — is **enzymatic oxidation by polyphenol oxidase (PPO)** when EGCG is co-ingested with high-PPO foods (notably banana; see [[../../studies/ottaviani-2023-ppo-flavanol-bioavailability]] and the [[flavan-3-ols]] class page for the food-matrix biology). PPO is a copper-dependent oxidase that converts free *o*-diphenol (catechol) and *o*-triphenol (pyrogallol/galloyl) rings to *o*-quinones, which polymerize and are not absorbed.

**EGCG is expected to be at least as PPO-susceptible as (−)-epicatechin, not less.** Whereas epicatechin presents a single catechol (3′,4′-diOH) B-ring, EGCG carries (i) a **pyrogallol B-ring** (3′,4′,5′-triOH) and (ii) a **galloyl ester** at C-3 (itself a pyrogallol). Pyrogallol-type rings have the *lowest redox potential* among tea-catechin rings — i.e., they are the most readily oxidized — so EGCG offers more oxidizable vicinal-polyhydroxy sites than the epicatechin that Ottaviani et al. actually tracked [^ottaviani2023]. The proof of concept is black-tea manufacture: the "fermentation" step *is* PPO oxidizing catechins and gallated catechins to theaflavins/thearubigins [^chen2023]. In vitro, PPO drives a concentration-dependent decline of EGCG with formation of gallic acid and EGC [^liu2023].

**Nuance — kinetics, not susceptibility.** If PPO docks onto EGCG via the galloyl group, that group's electron-withdrawing character can *slow* turnover relative to a bare catechol, so the degradation *rate* may differ from epicatechin even though net oxidizability is higher [^liu2023]. The practical implication is that Ottaviani's epicatechin-only readout, and its "effect on gallated catechins not quantified" caveat, most likely **understate** rather than rescue the food-matrix problem for tea EGCG.

#gap/needs-replication — PPO-mediated loss of EGCG bioavailability has not been measured *in vivo* in humans; the prediction rests on shared PPO substrate chemistry, in-vitro EGCG oxidation, and the epicatechin-specific human data of [^ottaviani2023].

#gap/no-mechanism — green tea is itself low-PPO (cocoa powder and tea leaf are below detection in Ottaviani's survey), so the realistic exposure is brewed tea *co-consumed with* a high-PPO food (e.g., a matcha-banana smoothie), not tea alone; the magnitude in that scenario is unquantified.

## Dose-response evidence

### Model organism data

| Study | Organism | Dose | Route | Finding |
|---|---|---|---|---|
| Pallauf et al. 2017 (review) [^pallauf2017] | *C. elegans*, *Drosophila* | Various | Supplemented diet | Lifespan extension reported in most flavonoid/catechin studies in invertebrates; mechanisms include insulin/IGF-1 and DAF-16 pathway modulation |
| Gu et al. 2014 [^gu2014] | Sprague-Dawley rat | ~100 mg/kg (estimated) | Oral gavage | Restored autophagic flux; improved hippocampal memory in stress model |

#gap/needs-human-replication — No mammalian lifespan data for EGCG; NIA Interventions Testing Program has not published EGCG lifespan results as of 2026.

### Human metabolic/clinical data

| Study | N | Design | Dose | Duration | Key finding |
|---|---|---|---|---|---|
| Brown et al. 2009 [^brown2009] | 88 | RCT | 800 mg/day EGCG | 3 months | No improvement in insulin sensitivity; modest reduction in diastolic BP only |
| Mielgo-Ayuso et al. 2014 [^mielgoayuso2014] | 83 | RCT | 300 mg/day EGCG | 12 weeks | No significant effect on body weight or metabolic parameters during energy-restricted diet |
| Basu & Lyons 2010 [^basu2010] | 35 | RCT | Green tea beverage (~480 mg catechins/day) | 8 weeks | Significant reduction in body weight (−2.5 ± 0.7 kg, p<0.01) vs. control; reduced LDL, lipid peroxidation |

#gap/contradictory-evidence — RCT results for EGCG on metabolic parameters are mixed. Green tea beverage appears more effective than isolated EGCG capsules for body weight outcomes, possibly reflecting the synergistic catechin matrix or caffeine interactions.

## Human epidemiological evidence

The **Ohsaki Cohort Study** (Kuriyama et al. 2006) tracked 40,530 Japanese adults aged 40–79 for up to 11 years of all-cause mortality follow-up (and up to 7 years for cause-specific mortality) [^kuriyama2006]. Green tea consumption was **inversely associated with all-cause and cardiovascular disease mortality** (strongest effect in women). In women, HR for ≥5 cups/day vs. <1 cup/day was 0.77 (95% CI, 0.67–0.89) for **all-cause mortality** and 0.69 (95% CI, 0.53–0.90) for **CVD mortality**. Cancer mortality association was non-significant.

**Caveats for aging interpretation:**
- Green tea contains multiple bioactive compounds (L-theanine, caffeine, ECG, EGC, EC) — the EGCG-attributable fraction cannot be isolated from observational data.
- Japanese cohort lifestyle confounding (diet, smoking) is partially controlled but not eliminated.
- Dose–EGCG exposure relationship for typical Japanese green tea is ~100–200 mg EGCG/cup, but this was not directly measured in the cohort.
- This is cardiovascular and all-cause mortality data, not a direct test of the aging hallmarks hypothesis.

### Updated 2024–2026 meta-analyses on green tea / cognition and BP

**Cognition (Zhou 2026, *Neuroepidemiology*) [^zhou2026].** A meta-analysis of 18 observational studies (n=58,929) reported green tea consumption inversely associated with cognitive impairment: pooled OR=0.63 (95% CI 0.54–0.73); dementia OR=0.74 (0.56–0.99); MCI OR=0.64 (0.43–0.96). The protective effect was significant in **Asian populations only** (no association in European populations) and largest in adults 50–69 years. High-consumption groups OR=0.64 (0.50–0.82). Sex-stratified: women OR=0.51 (0.28–0.95), men OR=0.47 (0.28–0.80). This extends and corroborates the Ohsaki Cohort Study cognitive-mortality signal but does not isolate EGCG from other catechins or from caffeine + L-theanine. The observed effect is observational and population-specific (Asian populations); reverse causation (early-stage cognitive impairment reduces tea-drinking habits) cannot be ruled out without longitudinal-with-pre-baseline-tea-history data.

**Blood pressure (Rezaei 2025, *Blood Pressure*) [^rezaei2025].** A GRADE-assessed meta-analysis of 36 RCTs in adults found green tea supplementation modestly reduced SBP (WMD −1.08 mmHg, 95% CI −1.98 to −0.18; I²=85%) and DBP (WMD −1.09 mmHg, 95% CI −1.67 to −0.50; I²=74%). Stronger effects in baseline SBP ≥120 mmHg, **<500 mg/day** dose subgroup, ≤8-week trials, Asian populations, and women. The high heterogeneity (I²=85% for SBP) and the absence of a clear dose-duration relationship temper enthusiasm — the absolute effect size (~1 mmHg) is much smaller than mainstream antihypertensive drug effects. Green tea is a complementary, not primary, BP-management strategy. The <500 mg/day finding is consistent with the EFSA hepatotoxicity threshold (≥800 mg/day EGCG): the safest exposure window is also where the BP effect is largest.

## Human clinical trial evidence

| Trial | NCT | Phase | Status | Intervention | Primary outcome | Key detail |
|---|---|---|---|---|---|---|
| PENSA (Prevention of Cognitive Decline in ApoE4 Carriers) | NCT03978052 | N/A | Completed | EGCG + multimodal lifestyle | ADCS-PACC composite; cognitive decline | n=129; 60–80 years; 12-month intervention + 3-month follow-up; ApoE4 carriers with subjective cognitive decline |

Published results from PENSA were not confirmed in PubMed as of 2026-05-05. #gap/needs-replication

## Safety and hepatotoxicity

**At supplemental doses (≥800 mg/day EGCG), EGCG poses a hepatotoxicity risk.** The EFSA Panel on Food Additives and Nutrient Sources concluded in 2018 that evidence from interventional clinical trials shows that doses equal or above 800 mg EGCG/day taken as a food supplement have been shown to induce a statistically significant increase of serum transaminases compared to control [^efsa2018]. The mechanistic basis appears to be **mitochondrial dysfunction** — high-dose EGCG impairs mitochondrial membrane potential, elevates mitochondrial ROS, and triggers hepatocyte apoptosis in murine models [^james2018].

Genetic susceptibility: variants in UGT1A4 (rs6755571 A/C) were associated with significantly elevated liver transaminase levels after 6–9 months of high-dose green tea extract supplementation in postmenopausal women [^acosta2023]. COMT genotype may also modulate risk via altered EGCG methylation kinetics.

**Hepatotoxicity summary:**
- Risk threshold: ≥800 mg/day EGCG (as a food supplement); no evidence of hepatotoxicity below 800 mg EGCG/day in clinical studies up to 12 months
- Typically reversible on discontinuation
- Rare cases of acute liver failure have been reported with very high-dose preparations
- Fasted-state consumption substantially increases plasma exposure and likely increases risk

The EFSA 2018 opinion (10.2903/j.efsa.2018.5239) is the authoritative safety document; it should be the primary reference for any dosing guidance. #gap/long-term-unknown — Long-term safety of moderate supplemental doses (200–400 mg/day EGCG, fed state) has not been evaluated in prospective trials.

## Classification

- **SENS strategy:** not a primary SENS target; touches [[sens-damage-categories|ApoptoSENS]] and [[sens-damage-categories|MitoSENS]] via indirect mechanisms
- **Hallmarks frame:** multi-hallmark, predominantly [[deregulated-nutrient-sensing]] and [[disabled-macroautophagy]] via mTOR/AMPK; secondary [[chronic-inflammation]]
- **Intervention type:** [[interventions/pharmacological/polyphenols|polyphenol supplement]] (implicit stub); also relevant to [[interventions/lifestyle/green-tea-consumption|green-tea-consumption]] (implicit stub)

## Limitations and gaps

1. **Bioavailability-efficacy disconnect.** Most mechanistic studies use in vitro concentrations (1–50 µM) that are 10–100× above typical fasted-state human plasma Cmax. Claims about mTOR inhibition, AMPK activation, and autophagy induction at supplement doses should be viewed skeptically until confirmed by pharmacodynamic biomarker studies in humans.
2. **Polypharmacology makes target attribution unreliable.** EGCG binds nonspecifically to many proteins at high concentrations (via hydrophobic and hydrogen-bond interactions with its galloyl group). On-target vs. off-target contributions to in vivo effects are poorly dissected.
3. **No mammalian lifespan data.** ITP has not reported on EGCG in mice as of 2026.
4. **Mixed RCT results on metabolic endpoints.** Brown 2009 and Mielgo-Ayuso 2014 show no benefit on insulin sensitivity or weight at 300–800 mg/day, respectively.
5. **Hepatotoxicity limits the dose ceiling.** The narrow margin between efficacious doses in animal models and hepatotoxic doses in humans at supplement-level intake constrains translational potential.
6. **ChEMBL ID unconfirmed.** ChEMBL API queries returned no result for EGCG by name or synonym; the canonical ChEMBL identifier requires manual lookup. #gap/needs-canonical-id

## Footnotes

[^kuriyama2006]: [[studies/kuriyama-2006-green-tea-mortality-ohsaki]] · doi:10.1001/jama.296.10.1255 · n=40,530 · observational (prospective cohort) · model: Japanese adults 40–79 yr; up to 11 years follow-up

[^vanaller2011]: [[studies/vanaller-2011-egcg-pi3k-mtor-inhibitor]] · doi:10.1016/j.bbrc.2011.02.010 · n=N/A · in-vitro · p<0.05 · model: purified PI3K/mTOR enzymes + cell-based assays; Ki(PI3K)=380 nM, Ki(mTOR)=320 nM

[^gu2014]: [[studies/gu-2014-egcg-autophagy-memory-rat]] · doi:10.1371/journal.pone.0112683 · n=~40/group · in-vivo · p<0.05 · model: chronic-stress Sprague-Dawley rats; autophagy blockade reversed EGCG benefit

[^ye2015]: [[studies/ye-2015-egcg-nrf2-sirt1-glomerulonephritis]] · doi:10.1371/journal.pone.0119543 · n=N/A · in-vivo · model: murine crescentic glomerulonephritis; NRF2 and SIRT1 endpoints

[^yu2017]: [[studies/yu-2017-egcg-metformin-nrf2-sirt1]] · doi:10.7150/ijbs.21750 · n=N/A · in-vitro · model: non-small-cell lung cancer cell lines; SIRT1-NRF2 deacetylation axis

[^ullmann2003]: [[studies/ullmann-2003-egcg-ascending-dose-pk]] · doi:10.1177/147323000303100205 · n=60 (10/group across 6 dose levels; 8 active + 2 placebo per group) · rct (single-ascending-dose) · model: healthy male volunteers; doses 50–1600 mg EGCG oral, fasted

[^naumovski2015]: [[studies/naumovski-2015-egcg-food-bioavailability]] · doi:10.3390/antiox4020373 · n=~12 · rct (crossover) · model: healthy humans; fasted vs. fed-state AUC comparison

[^nakagawa1997]: [[studies/nakagawa-1997-egcg-plasma-hplc]] · doi:10.1006/abio.1997.2098 · n=small (single subject reported; rat + human) · observational (PK) · model: human volunteer (97 mg EGCG single oral dose, fasted); CL-HPLC detection; 0.32% bioavailability of unconjugated EGCG in human plasma at 60 min post-dose · **Note:** doi:10.1006/abio.1997.2122 (Ras protein paper) is incorrect; correct DOI confirmed via PubMed PMID 9177723

[^james2018]: [[studies/james-2018-egcg-hepatotoxicity-mitochondria]] · doi:10.1016/j.fct.2017.11.029 · n=N/A · in-vivo · model: C57BL/6 mice; bolus high-dose EGCG; mitochondrial dysfunction endpoints

[^acosta2023]: [[studies/acosta-2023-egcg-hepatotoxicity-ugt1a4]] · doi:10.1080/19390211.2022.2128501 · n=~120 (postmenopausal women) · observational (genetic association within RCT) · model: human; UGT1A4 genotype × EGCG exposure interaction

[^efsa2018]: [[studies/efsa-2018-green-tea-catechin-safety]] · doi:10.2903/j.efsa.2018.5239 · n=N/A · systematic-review (regulatory opinion) · model: human evidence synthesis; EFSA Panel on Food Additives and Nutrient Sources (ANS) 2018; concluded ≥800 mg EGCG/day as food supplement induces statistically significant elevation of serum transaminases; no hepatotoxicity evidence below 800 mg EGCG/day in studies up to 12 months; 89 pp.

[^brown2009]: [[studies/brown-2009-egcg-insulin-rct]] · doi:10.1017/S0007114508047727 · n=88 · rct · p=ns (insulin sensitivity) · model: overweight/obese humans; 800 mg/day EGCG, 3 months

[^mielgoayuso2014]: [[studies/mielgoayuso-2014-egcg-weight-rct]] · doi:10.1017/S0007114513003784 · n=83 · rct · p=ns (body weight) · model: obese women; 300 mg/day EGCG + energy restriction, 12 weeks

[^basu2010]: [[studies/basu-2010-green-tea-metabolic-syndrome]] · doi:10.1080/07315724.2010.10719814 · n=35 · rct · p<0.01 (body weight) · model: obese humans with metabolic syndrome; green tea beverage ~480 mg catechins/day, 8 weeks

[^pallauf2017]: [[studies/pallauf-2017-flavonoids-lifespan-review]] · doi:10.1017/S0029665116000720 · n=N/A · review · model: C. elegans, Drosophila; narrative review of flavonoid lifespan extension literature

[^zhou2026]: Zhou S, Zhu Y, Ren N, Wu M, Liu Y. *Neuroepidemiology* 2026;60(1):178–199 · n=58,929 (18 observational studies, NOS-rated high quality); meta-analysis · pooled OR cognitive impairment 0.63 (0.54–0.73); dementia OR 0.74 (0.56–0.99); MCI OR 0.64 (0.43–0.96); strongest 50–69 yr; significant in Asian populations only · doi:10.1159/000543784 · PMID 39947165 · abstract verified via PubMed efetch 2026-05-08

[^ottaviani2023]: [[studies/ottaviani-2023-ppo-flavanol-bioavailability]] · doi:10.1039/d3fo01599h · n=8 (Phase 1) + 11 (Phase 2) · controlled crossover (Phase 2 randomized) · p=4×10⁻⁵ · model: healthy men; high-PPO banana smoothie reduced peak plasma (−)-epicatechin-metabolite (SREM) Cmax by 84±9% vs capsule. (−)-Epicatechin was the only flavan-3-ol tracked; effect on gallated catechins/procyanidins not quantified

[^chen2023]: Chen L et al. · *Food Chemistry: X* 2023 · doi:10.1016/j.fochx.2023.100615 · review/mechanistic · model: black-tea fermentation biochemistry — PPO-catalysed oxidation of catechins and gallated catechins to theaflavins/thearubigins. **Not full-PDF verified** (abstract + search-grounded); cited for established food-chemistry background

[^liu2023]: Liu K et al. · *Molecules* 2023;28(4):1722 · doi:10.3390/molecules28041722 · in-vitro · model: PPO + tea polyphenols; concentration-dependent EGCG decline with gallic acid + EGC formation; galloyl-binding electron-withdrawing effect modulates oxidation rate. **Not full-PDF verified** (abstract + search-grounded)

[^rezaei2025]: Rezaei M, Akhavan N, Fathi F, Alavi SM, Fadaii M, Dehzad MJ, Askarpour M. *Blood Pressure* 2025;34(1):2517122 · n=36 RCTs; PRISMA + GRADE; adults ≥18 yr · WMD SBP −1.08 mmHg (−1.98 to −0.18, I²=85%); DBP −1.09 mmHg (−1.67 to −0.50, I²=74%); stronger effects in baseline SBP ≥120 mmHg, <500 mg/day dose, ≤8 wk, Asian populations, women · doi:10.1080/08037051.2025.2517122 · PMID 40497293 · abstract verified via PubMed efetch 2026-05-08
