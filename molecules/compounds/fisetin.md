---
type: compound
aliases: [3,7,3',4'-tetrahydroxyflavone, "5,7,3',4'-tetrahydroxyflavone"]
pubchem-cid: 5281614
inchikey: XHEFDIBZLJXQHF-UHFFFAOYSA-N
chembl-id: CHEMBL31096
drugbank-id: null
cas-number: 528-48-3
mechanisms: [senolytic, antioxidant, sirtuin-modulator, pi3k-akt-mtor-inhibitor, topoisomerase-inhibitor]
measured-targets: ["[[pi3k-akt-pathway]]", "[[sirt1]]", "[[topoisomerase]]"]
hallmarks: ["[[altered-intercellular-communication]]", "[[cellular-senescence]]", "[[stem-cell-exhaustion]]"]
clinical-stage: phase-2-trials
human-evidence-level: limited
half-life: "0.09 h (rapid) / 3.1 h (terminal)"
translation-gap: biomarker-only
next-experiment: "Phase 2/3 senolytic trial in IPF or osteoarthritis with hard endpoint + p16+ skin-biopsy biomarker panel; n>=200; TROFFi (NCT05595499, n=88 BCa survivors, 6MWD primary) is closest currently-recruiting design."
clinical-trials-active: 17
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Yousefzadeh 2018-derived claims verified against primary source PDF; canonical-database identity fields (PubChem CID 5281614, InChIKey, CAS) not independently re-verified against PubChem — recommend cross-check on next lint pass. R34 recency refresh 2026-05-08: added Mahoney 2026 (Aging Cell, fisetin reverses endothelial dysfunction via reduced CXCL12 SASP factor in aged mice — abstract-only), Ji 2026 TROFFi study design (Ther Adv Med Oncol — abstract-only, RCT not yet reported results), Numani 2026 diabetic wound healing (abstract-only), updated trial roster from ClinicalTrials.gov 2026-05-08; new-source PDFs not independently end-to-end verified. 2026-05-31 formulation subsection: Krishnakumar 2022 and Szymczak 2023 full PDFs end-to-end verified 2026-05-31. All Krishnakumar 2022 PK figures confirmed against Table 1 and body text. Szymczak 2023 nanoemulsion, liposome, polymeric-micelle, and SNEDDS figures confirmed against Table 4 and body text; nanocochleate figure (141-fold) confirmed in review body text (§4.5.4) but contradicted by review's own Table 4 (13-fold) — internal inconsistency in the cited review, flagged in footnote; cannot adjudicate without primary source (Bothiraja 2014 doi:10.1517/17425247.2014.848184)."
---

# Fisetin

A naturally-occurring flavonol found in strawberries (highest concentration), apples, persimmons, grapes, onions, and cucumbers. Studied as a **senolytic** — a compound that selectively kills [[cellular-senescence|senescent cells]] of certain types. Currently in human Phase 2 trials. Average dietary intake in Japan reported as ~0.4 mg/day [^yousefzadeh2018], orders of magnitude below experimental doses.

## Identity

- **PubChem CID:** 5281614
- **InChIKey:** XHEFDIBZLJXQHF-UHFFFAOYSA-N
- **CAS:** 528-48-3
- **Class:** flavonol (flavonoid subclass)
- **Molecular weight:** 286.24 g/mol
- **Solubility:** poorly water-soluble; soluble in DMSO and ethanol

## Mechanism of action

**Primary supported mechanism:** senolytic via disruption of **PI3K/AKT/mTOR signaling** — one of the SCAPs (Senescent-Cell Anti-Apoptotic Pathways) that protect senescent cells from their own pro-apoptotic SASP [^yousefzadeh2018]. Yousefzadeh et al. screened 10 flavonoids in vitro and identified fisetin as the most potent senolytic.

**Cell-type-dependent mode of action** [^yousefzadeh2018]:
- In HUVECs, fisetin induces apoptosis (caspase 3/7 activation) — classical senolytic
- In MEFs, fisetin reduces senescence markers without cell killing — senomorphic
- In vivo: significant clearance of p16+ c-Kit+ stem/progenitor cells, CD4+/CD8+ T cells, NK cells, and endothelial cells; **no effect** on p16+ macrophages or dendritic cells. **Fisetin is not a pan-senolytic.**

**Other documented activities** that may or may not contribute to senolysis:
- Direct ROS scavenger and antioxidant
- Increases hSIRT1 catalytic activity in vitro
- Topoisomerase inhibitor
- Inhibits TNFα, IL-6, and NF-κB activity

#gap/no-mechanism — Despite the in vivo phenotype, no single direct molecular target of fisetin's senolytic activity has been identified. Polypharmacology (the combined effect of many weak interactions) is plausible. Fisetin is **not** a Bcl-xL/Bcl-2 inhibitor (that mechanism applies to the [[navitoclax]]/[[a1331852]] class, not to fisetin per Yousefzadeh 2018).

## Effects on aging hallmarks

| Hallmark | Effect | Evidence |
|---|---|---|
| [[cellular-senescence]] | Reduces p16+ senescent cells in fat, spleen, liver, kidney, blood T cells (mouse) and adipose explants (human ex vivo) | [^yousefzadeh2018] |
| [[chronic-inflammation]] | Indirect — reduces SASP factor expression in tissues; reduces serum MCP-1 | [^yousefzadeh2018] |

## Pharmacokinetics

**Bioavailability is the dominant uncertainty for human translation.**

- **Half-lives** (per Yousefzadeh 2018 Discussion citing earlier work): **0.09 h rapid, 3.1 h terminal**. Extremely short — far shorter than typical drug half-lives for a chronic supplement.
- Reported oral bioavailability in rodents: <5% for free fisetin; rapidly conjugated (glucuronidated, sulfated). Most circulating fisetin is in conjugate form.
- Lipophilic; tissue accumulation favors adipose.

The very short half-life argues for a **"hit-and-run" senolytic mechanism** — one-time elimination of vulnerable senescent cells per dose, rather than continuous receptor occupancy. This rationalizes the intermittent dosing schedules used in clinical trials (e.g., 2 days/month).

#gap/dose-response-unclear — The mouse experimental dose (100 mg/kg gavage; ~60 mg/kg/day chow) does not translate cleanly to human supplement doses (typical 100–500 mg total). Allometric body-surface scaling suggests ~600 mg/day human-equivalent for a 70 kg adult — but factoring in bioavailability and rapid clearance, effective tissue exposure at supplement doses is likely well below the experimental range. The Mayo Phase 2 trial uses 20 mg/kg/day × 2 days, which is closer to mouse-equivalent exposure when adjusted for short dosing window and "hit-and-run" assumption.

### Formulation & bioavailability enhancement

Free fisetin's <5% oral bioavailability has driven extensive nano- and lipid-based reformulation. A 2023 review catalogues the landscape [^szymczak2023]; representative **preclinical** gains vs free fisetin:

| Formulation | Species | Reported gain vs free fisetin |
|---|---|---|
| Nanocochleates (DMPC/cholesterol/Ca²⁺) | mouse | ~141-fold bioavailability |
| Nanoemulsion (Miglyol/Labrasol/Tween) | mouse | 11.92-fold AUC (i.p.) |
| Polymeric micelles (Pluronic F127 + folate) | rat | 6.3-fold AUC; 1.8-fold Cmax |
| Liposomes (DOPC/DODA-PEG2000) | mouse | 4.43-fold AUC (i.p.); 1.64-fold (i.v.) |
| SNEDDS | rat | 3.7-fold Cmax; 1.52-fold AUC |

The **only human PK data** is for a micelle-in-fenugreek-galactomannan hydrogel (FF-20, "Hybrid-FENUMAT") — *not* a liposome. In a randomized double-blind single-dose crossover (n=15 healthy volunteers; 1000 mg FF-20 delivering 192 mg fisetin vs 1000 mg unformulated, 10-day washout), FF-20 raised AUC₀₋₁₂ₕ **26.9-fold** (341.4 vs 12.67 ng·h/mL) and Cmax **23.9-fold** (238.2 vs 9.97 ng/mL) [^krishnakumar2022].

**Critical caveat — formulation gains do not yet bridge the senolytic concentration gap.** The best-in-human Cmax of 238.2 ng/mL ≈ **0.83 µM** — roughly **24-fold below the 20 µM** threshold at which fisetin cleared senescent cells in human adipose explants ex vivo [^yousefzadeh2018], and reached only transiently at peak. No fisetin formulation study has measured a senolytic or clinical efficacy endpoint — all are PK-only. Consumer "liposomal fisetin" products are not the validated FF-20 system and carry no published human senolytic PK. Whether *any* oral formulation achieves senolytic tissue concentrations in humans remains open #gap/dose-response-unclear.

## Dose-response evidence

| Study | Organism | Subjects | Dose | Route | Schedule | Effect |
|---|---|---|---|---|---|---|
| Yousefzadeh 2018 — acute [^yousefzadeh2018] | 22–24 month WT C57BL/6 | n=6–7/group | 100 mg/kg | Oral gavage | 5 consecutive days | Significant p16+ cell reduction in fat (Fig 4A, p<0.01); cell-type-specific clearance in WAT |
| Yousefzadeh 2018 — chronic [^yousefzadeh2018] | 85-week f1 C57BL/6;FVB/n WT | n=8–9/group | 500 ppm chow (~60 mg/kg/day) | Oral diet | Continuous from 85 wks | Extended median + max lifespan (Log rank p<0.05); reduced multi-organ pathology |
| Yousefzadeh 2018 — human ex vivo [^yousefzadeh2018] | Human adipose explants | n=3 (1 lean, 1 obese, F, 55–66 yr) | 20 μM | In media | 48 h | Reduced SA-β-gal+ cells; reduced IL-6, IL-8, MCP-1 in conditioned media |
| Mayo Phase 2 (NCT03675724) | Older women | n=~40 (planned) | 20 mg/kg/day | Oral | 2 consecutive days/month | (In progress; not yet reported) |

## Human evidence

**Active fisetin trial roster (ClinicalTrials.gov, 2026-05-08; 17 RECRUITING / ACTIVE_NOT_RECRUITING / ENROLLING_BY_INVITATION):**

| Trial | NCT | Phase | Status | Endpoint |
|---|---|---|---|---|
| Alleviation by Fisetin of Frailty, Inflammation in Older Women | NCT03675724 | Phase 2 | **Enrolling by invitation** (status updated; estimated completion 2027-04) | Frailty, inflammation markers |
| Alleviation by Fisetin in Older Adults (parallel) | NCT03430037 | Phase 2 | Enrolling by invitation | Frailty, inflammation markers |
| Diabetic Kidney Disease | NCT03325322 | Phase 2 | **Suspended** (no reason posted; estimated completion 2027-01) | Renal markers |
| TROFFi — physical function in BCa survivors [^ji2026] | NCT05595499 | Phase 2 | **Recruiting** | Δ6MWD baseline-to-end (primary); planned n=88 postmenopausal early-stage breast cancer survivors with 6MWD <400 m post-chemotherapy; fisetin 20 mg/kg/day d1–3 of 14-day cycle × 4 cycles vs placebo. **First placebo-controlled fisetin senolytic RCT** with hard physical-function primary endpoint. |
| Vascular function in older adults | NCT06133634 | Phase 1/2 | Active, not recruiting | Vascular function |
| Multimorbidity pilot | NCT06431932 | Phase 1/2 | Recruiting | Senescence biomarkers |
| Mobility impairment in PAD | NCT06399809 | Phase 2 | Recruiting | Walking distance |
| Frailty + exercise in BCa survivors | NCT06113016 | Phase 2 | Recruiting | Frailty |
| Cancer-survivor fatigue | NCT06819254 | Phase 4 | Recruiting | Fatigue |
| Mild Alzheimer's disease | NCT07279714 | Phase 2 | Recruiting | Cognitive endpoints |
| Healthy aging | NCT07195318 | NA | Recruiting | Aging biomarkers |
| ILD in CVID | NCT05593588 | Phase 2 | Enrolling by invitation | Pulmonary function |
| Childhood-cancer-survivor frailty (D+Q+F) | NCT04733534 | Phase 2 | Active, not recruiting | Frailty |
| Sleep + aging biomarkers (urolithin A + fisetin) | NCT06990256 | NA | Recruiting | Sleep + biomarkers |
| Fisetin PK in young vs old | NCT06796374 | NA | Recruiting | PK comparison |
| STOP-Sepsis (D+Q+F + senolytics) | NCT05758246 | Phase 2 | Recruiting | Sepsis progression |
| D+Q+F+temozolomide for prostate cancer | NCT07025226 | Early Phase 1 | Recruiting | Safety |

**Completed:** NCT05416515 (carpal tunnel syndrome, Phase 2, completed); NCT04313634 (skeletal health older humans, Phase 2, completed); NCT04771611 (COVFIS-HOME, Phase 2, completed) — primary results not yet integrated into this page #gap/needs-replication.

**Ex vivo human evidence exists** (Yousefzadeh 2018, n=3 adipose explants) — fisetin reduces senescent-cell burden and SASP cytokine secretion in human tissue at 20 μM. This is mechanistically supportive but not equivalent to in vivo human efficacy.

#gap/needs-human-replication — As of 2026-05-08 no large completed placebo-controlled fisetin senolytic RCT has reported on a hard endpoint. The trial pipeline has expanded substantially since 2024; TROFFi (NCT05595499) is the first multicenter RCT design with a placebo arm and hard physical-function primary endpoint to enter recruitment.

## Recent mechanistic findings (2024–2026)

**Mahoney 2026 — fisetin reverses age-related endothelial dysfunction via CXCL12 SASP** [^mahoney2026]: Aging Cell 2026, single-cell aortic transcriptomics in young (6 mo) and old (27 mo) C57BL/6 mice ± in vivo fisetin (100 mg/kg/day intermittent gavage). Senescent endothelial cells exhibit elevated CXCL12 expression; fisetin treatment reduces tissue and circulating CXCL12, restoring endothelial function. Plasma-transfer experiments (old plasma onto young arteries) show CXCL12 is mechanistically required: it impairs endothelial NO bioavailability, increases mitochondrial oxidative stress, and drives endothelial-to-mesenchymal transition. **First identification of a specific SASP factor (CXCL12) as a mediator of fisetin's vascular phenotype** and a candidate biomarker for senolytic trials with vascular endpoints.

**Numani 2026 — topical fisetin improves diabetic wound healing** [^numani2026]: Adv Wound Care 2026; topical fisetin reduces senescent-cell burden in skin and accelerates wound closure dynamics in diabetic mice — extends fisetin's senolytic context to dermal/topical delivery, relevant to translational design where systemic exposure is unwanted.

**Class context:** Fisetin remains the most-trialed senolytic in aging-relevant indications as of 2026 (17 active/enrolling vs 0 active senolytic-aging trials for navitoclax). Mechanistically positioned as a polypharmacological flavonol senolytic distinct from the BCL-xL-axis BH3-mimetic class ([[navitoclax]], [[a1331852]], [[interventions/pharmacological/senolytics|UBX1325/foselutoclax]]).

## Classification

- **SENS strategy:** [[sens-damage-categories|ApoptoSENS]] — senolytic
- **Hallmark target:** [[cellular-senescence]]
- **Clinical category:** dietary supplement / investigational drug

## Limitations and concerns

- **Cell-type specificity:** fisetin clears some p16+ populations (T cells, NK cells, MSCs, endothelial cells) but not others (macrophages, dendritic cells per Yousefzadeh 2018). Whole-tissue p16+ clearance is incomplete.
- **Polypharmacology:** fisetin engages many targets at low affinity — senolytic effect may be one of several in vivo activities.
- CYP3A4 inhibitor in vitro — possible drug-drug interactions for co-administered drugs.
- Yousefzadeh 2018 lifespan study used F1 C57BL/6;FVB/n hybrid mice and small n (8–9/group). Replication in larger cohorts and other backgrounds would strengthen confidence.
- Long-term safety in humans unknown. Authors note "no adverse effects of fisetin have been reported, even when given at high doses," but no dedicated long-term safety study has been conducted. #gap/long-term-unknown
- Disclosed financial conflicts: Mayo Clinic holds patents on senolytic drugs; several Yousefzadeh authors are inventors.

## Footnotes

[^yousefzadeh2018]: [[studies/yousefzadeh-2018-fisetin-senolytic]] · n=8–9/group (lifespan) · in-vivo (mouse) + ex vivo (human) · Log rank p<0.05 (lifespan) · model: f1 C57BL/6;FVB/n WT mice fed 500 ppm fisetin chow from 85 weeks
[^mahoney2026]: doi:10.1111/acel.70500 · Mahoney SA, Mazan-Mamczarz K, Tsitsipatis D, VanDongen NS, Henry-Smith C, Okereke AN, Munk R, Darvish S, Murray KO, De S, Gorospe M, Seals DR, Rossman MJ, Herman AB, Clayton ZS · *Aging Cell* 2026 May;25(5):e70500 · in-vivo + plasma-exposure ex vivo · model: young (6 mo) and old (27 mo) male+female C57BL/6 mice ± in vivo fisetin 100 mg/kg/day intermittent + cultured human aortic ECs · single-cell transcriptomics on aortas; fisetin reduces senescent-EC CXCL12 expression and circulating CXCL12; old-plasma exposure impairs vascular function and induces endothelial senescence partially driven by CXCL12 · NIH/NIA Intramural; preprint update from bioRxiv 2025 Aug · **abstract-only verification 2026-05-08** — full PDF not end-to-end verified.
[^numani2026]: doi:10.1177/21621918261426580 · Numani A, Carrasco-Jeldres M, Hernandez-Rovi… (full author list TBD) · *Adv Wound Care (New Rochelle)* 2026 Feb 23 (online ahead of print) · in-vivo · model: diabetic mice; topical fisetin · reports improved wound healing dynamics with reduced cutaneous senescent-cell burden · **abstract-only verification 2026-05-08** — full PDF not end-to-end verified.
[^ji2026]: doi:10.1177/17588359261424668 · Ji J, Crespi CM, Yee L, Zekster YA, Al-Saleem A, Petersen L, Lee C, Son N, Smith C, Evans T, Tchkonia T, Kirkland JL, Kuchel GA, Cohen HJ, Sedrak MS · *Ther Adv Med Oncol* 2026 Mar 11;18:17588359261424668 · TROFFi study **rationale and trial design** publication (not yet results) · Phase 2 multicenter randomized double-blind placebo-controlled · planned n=88 postmenopausal early-stage breast cancer survivors with 6MWD <400 m, completed neo/adjuvant chemotherapy within 12 mo · 1:1 randomization to fisetin 20 mg/kg/day d1–3 of 14-day cycle × 4 cycles vs placebo · primary endpoint Δ6MWD baseline-to-end-of-treatment · NCT05595499 · status: recruiting as of 2026-05.
[^szymczak2023]: doi:10.3390/ijms241814158 · Szymczak J, Cielecka-Piontek J · *Int J Mol Sci* 2023;24(18):14158 · review · compilation of fisetin nano/lipid formulation PK (animal data: nanocochleates ~141-fold per §4.5.4 body text citing Bothiraja 2014 [review ref 97], nanoemulsion 11.92-fold AUC i.p., Pluronic-F127 micelles 6.3-fold AUC + 1.8-fold Cmax i.p. rat, DOPC/DODA-PEG2000 liposomes 4.43-fold AUC i.p. + 1.64-fold i.v. mouse, SNEDDS 3.7-fold Cmax + 1.52-fold AUC oral rat) · **full PDF end-to-end verified 2026-05-31** · ⚠️ Internal inconsistency in this review: nanocochleate body text (§4.5.4) reports 141-fold; review's own Table 4 reports 13-fold for the same reference (Bothiraja 2014). Wiki uses the body-text figure (141-fold); cannot adjudicate without the primary source (doi:10.1517/17425247.2014.848184). #gap/needs-replication
[^krishnakumar2022]: doi:10.1017/jns.2022.72 · Krishnakumar IM, Jaja-Chimedza A, Joseph A, Balakrishnan A, Maliakel B, Swick A · *J Nutr Sci* 2022;11:e74 · randomized double-blind comparative crossover · n=15 healthy volunteers (12 male, 3 female; age 22–55 yr; BMI 18–25) · single dose 1000 mg FF-20 hybrid micelle-in-fenugreek-galactomannan hydrogel (delivering 192 mg fisetin; 19.2% fisetin content by HPLC) vs 1000 mg unformulated fisetin (98.2% purity), 10-day washout · AUC₀₋₁₂ₕ 341.4 ± 130.05 (FF-20) vs 12.67 ± 4.86 (UF) ng·h/mL = 26.9-fold (p<0.0001); Cmax 238.2 ± 87.26 vs 9.97 ± 3.97 ng/mL = 23.9-fold (abstract: "more than twenty-three times"; Discussion: "23.9-fold") · t₁/₂ 1.51 h (FF-20) vs 1.14 h (UF) · **PK-only, no senolytic/efficacy endpoint** · funder: Akay Natural Ingredients (FF-20 manufacturer); Life Extension co-author (sells FF-20 as "Bio-Fisetin") — CoI present · PMID 36304817 / PMC9574875 · **full PDF end-to-end verified 2026-05-31** — all PK figures confirmed against Table 1 and body text
