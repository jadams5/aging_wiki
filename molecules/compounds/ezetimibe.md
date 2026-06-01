---
type: compound
aliases: [Zetia, Vytorin, Roszet, Nexlizet, Nustendi, SCH 58235]
pubchem-cid: 150311
inchikey: OLNTVTPDXPETLC-XPWALMASSA-N
chembl-id: CHEMBL1138
drugbank-id: DB00973
cas-number: 163222-33-1
biologic: false
who-inn: ezetimibe
molecular-formula: C24H21F2NO3
molecular-weight-da: 409.4
mechanisms: [npc1l1-inhibition, ldl-lowering, ldlr-upregulation]
targets: ["[[npc1l1]]"]
hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
clinical-stage: fda-approved
human-evidence-level: strong
safety-profile: well-established
translation-gap: human-evidence-strong
next-experiment: "Ezetimibe vs PCSK9i in statin-treated patients at low baseline LDL (<70 mg/dL primary prevention) — what is the LDL floor below which incremental CV-outcome benefit persists? NEJM Ez-PAVE 2026 (n=3,048) tested <55 vs <70 targets and confirmed incremental benefit, but mono-agent vs add-on ezetimibe in true primary prevention below 70 mg/dL is still not established."
clinical-trials-active: 6
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "IMPROVE-IT 2015 (doi:10.1056/NEJMoa1410489) verified end-to-end against local PDF; Ge 2008 (doi:10.1016/j.cmet.2008.04.001) verified against local PDF (pages 1-3); Altmann 2004 (doi:10.1126/science.1093131, not_oa) and SHARP 2011 (doi:10.1016/s0140-6736(11)60739-3, not_oa) verified against PubMed abstracts only — full PDFs unavailable (closed-access); Bach 2019 (doi:10.1001/jamacardio.2019.2306) download failed (bronze OA), verified against PubMed abstract PMID 31314050; Ez-PAVE 2026 (doi:10.1056/NEJMoa2600283) DOI confirmed real via Crossref and PMID 41910315 abstract verified; Zhou 2026 and Mahmoud 2025 verified via PubMed abstracts only; canonical-DB identity fields (PubChem CID 150311, InChIKey, ChEMBL CHEMBL1138, DrugBank DB00973) confirmed via PubChem API"
---

# Ezetimibe

The first non-statin LDL-lowering drug to demonstrate cardiovascular outcomes benefit in a prospective randomized trial. Ezetimibe selectively blocks intestinal cholesterol absorption via inhibition of [[npc1l1|NPC1L1]], reducing LDL-C by ~18% as monotherapy and by an additional 15–20% on top of existing statin therapy. FDA-approved 2002. The pivotal IMPROVE-IT 2015 NEJM trial (n=18,144, 7-year follow-up) proved that **non-statin LDL lowering** also reduces cardiovascular events, establishing that LDL-C itself — not statin-specific pleiotropy — is the causal driver of atherosclerotic risk.

A common clinical decision rule adds ezetimibe 10 mg when a moderate statin dose has not achieved the ApoB/LDL-C target after ~12 weeks. Statin + ezetimibe is the standard intensification step before PCSK9i. Generic and low-cost post-patent.

## Identity

- **PubChem CID:** 150311
- **InChIKey:** OLNTVTPDXPETLC-XPWALMASSA-N
- **Molecular formula:** C24H21F2NO3
- **Molecular weight:** 409.4 Da
- **Class:** azetidinone; cholesterol absorption inhibitor
- **Brand names:** Zetia (US monotherapy); Vytorin (+ simvastatin); Roszet (+ rosuvastatin); Nexlizet / Nustendi (+ bempedoic acid)
- **FDA approval:** October 2002 (Zetia, monotherapy); Vytorin approved 2004
- **ChEMBL:** CHEMBL1138 · **DrugBank:** DB00973

## Mechanism of action

### NPC1L1 inhibition — the upstream step

[[npc1l1|NPC1L1 (Niemann-Pick C1-like 1)]] is a multi-pass transmembrane cholesterol transporter expressed on the apical (brush-border) surface of jejunal enterocytes and, at lower density, on hepatocyte canalicular membranes. It is the principal route for uptake of dietary and biliary cholesterol from the intestinal lumen into enterocytes [^altmann2004].

Ezetimibe binds directly to NPC1L1. The molecular mechanism is competitive blockade of **sterol-induced endocytic internalization**: in the fasted state NPC1L1 resides largely at the plasma membrane; upon cholesterol sensing in the lumen, it undergoes clathrin/AP-2-dependent endocytosis carrying cholesterol into the cell. Ezetimibe blocks this sterol-triggered internalization step, trapping NPC1L1 at the cell surface and preventing cholesterol entry [^ge2008].

Ezetimibe undergoes first-pass glucuronidation in the intestinal wall and liver to form **ezetimibe glucuronide**, which has similar NPC1L1-binding potency and is the primary circulating form. The drug is enterohepatically recycled (bile → re-uptake → re-glucuronidation), which prolongs effective half-life to ~22 hours despite modest systemic exposure.

### Downstream LDLR upregulation — shared axis with statins

Intestinal cholesterol absorption normally supplies ~50% of hepatic cholesterol input (the remainder from hepatic synthesis). When ezetimibe reduces this input:

1. Hepatic free-cholesterol pool falls.
2. SCAP (SREBP cleavage-activating protein) dissociates from the INSIG anchor.
3. SCAP escorts [[srebp-2|SREBP-2]] to the Golgi, where it is proteolytically cleaved to the active transcription factor.
4. Activated SREBP-2 induces [[ldlr|LDLR]] transcription.
5. ↑ LDLR density on hepatocyte basolateral surface → ↑ plasma LDL/ApoB clearance.

This is the same SREBP-2 → LDLR axis that statins engage from the hepatic-synthesis side. Because ezetimibe operates at the dietary-input step rather than the biosynthesis step, it **lacks statin-associated pleiotropic effects** (no prenylation depletion, no Rho/Rac modulation, no direct anti-inflammatory activity beyond what LDL reduction itself produces). This mechanistic cleanliness made IMPROVE-IT a pivotal experiment: it isolated the effect of lower LDL-C from statin pleiotropy.

## Pharmacokinetics

| Parameter | Value |
|---|---|
| Bioavailability (oral) | ~35–65% (ezetimibe); substantially higher for ezetimibe glucuronide |
| Tmax | 4–12 h (ezetimibe); 1–2 h (glucuronide) |
| Plasma protein binding | >90% |
| Enterohepatic recycling | Yes — bile re-secretion and intestinal re-absorption |
| Effective half-life | ~22 h (driven by enterohepatic recycling) |
| Metabolism | Glucuronidation (UGT1A1, UGT1A3) in small intestine + liver; minimal CYP450 involvement |
| Excretion | ~78% feces (primarily as ezetimibe glucuronide); ~11% urine |

No dose adjustment required for mild hepatic impairment; not recommended in moderate-to-severe hepatic impairment. No renal dose adjustment.

## Efficacy (lipid endpoints)

| Intervention | LDL-C reduction | ApoB reduction | Notes |
|---|---|---|---|
| Ezetimibe 10 mg monotherapy | ~18% | ~15% | Similar across statin-naive and statin-intolerant patients |
| Statin + ezetimibe vs statin alone | +15–20% additional relative reduction | comparable | The clinically relevant use case; additive |
| Ezetimibe + bempedoic acid (Nexlizet) | ~36% | ~23% | Statin-alternative for SAMS; Phase 3 CLEAR-Harmony |
| Statin + ezetimibe + PCSK9i | ~65–70% | comparable | Triple combination for FH or very-high-risk patients |

No clinically meaningful effect on HDL-C. Modest triglyceride reduction (~5%, inconsistent across trials). #gap/needs-replication for TG effects in statin-naive patients.

## Cardiovascular outcomes evidence

### IMPROVE-IT 2015 — the pivotal trial

The most important trial for ezetimibe. **First proof that non-statin LDL lowering reduces cardiovascular events** [^cannon2015].

- **Design:** double-blind RCT, n=18,144 post-ACS patients (MI or high-risk unstable angina within 10 days)
- **Arms:** simvastatin 40 mg + ezetimibe 10 mg vs simvastatin 40 mg + placebo
- **Follow-up:** median 6 years; reported at 7-year mark
- **LDL-C achieved:** 53.7 mg/dL (combo) vs 69.5 mg/dL (statin alone); ~16 mg/dL difference sustained throughout
- **Primary endpoint (composite CV death / MI / unstable angina / coronary revascularization / nonfatal stroke at 7 years):** 32.7% (combo) vs 34.7% (statin alone); HR 0.936 (95% CI 0.89–0.99); p=0.016
- **Absolute risk reduction:** 2.0 percentage points; **NNT ~50 over 7 years**
- **Key secondary findings:** MI reduction HR 0.87 (p=0.002); ischemic stroke HR 0.79 (p=0.008); no significant effect on CV death alone

**Why IMPROVE-IT matters beyond ezetimibe itself:** Statin trials had demonstrated that statin → LDL lowering → CV benefit, but could not separate LDL-causal from statin-pleiotropic effects. IMPROVE-IT used the mechanistically distinct ezetimibe to lower LDL further without adding statin pleiotropy. The observed CV-outcome benefit proportional to LDL-C reduction confirmed the LDL hypothesis directly: **LDL-C is causal, not merely a statin-treatment biomarker** [^cannon2015].

### SHARP 2011 — ezetimibe + simvastatin in CKD

- **Design:** double-blind RCT, n=9,270 patients with chronic kidney disease (CKD; ~33% on dialysis)
- **Arms:** simvastatin 20 mg + ezetimibe 10 mg vs placebo (no active comparator statin arm)
- **LDL-C reduction:** average LDL-C difference of 0.85 mmol/L (~33 mg/dL) between arms during follow-up (with ~2/3 compliance)
- **Primary endpoint (atherosclerotic events — non-fatal MI / coronary death / non-hemorrhagic stroke / arterial revascularization):** 11.3% (combo) vs 13.4% (placebo); RR 0.83 (95% CI 0.74–0.94); p=0.0021
- **Significance:** extended IMPROVE-IT's finding to CKD, where statin monotherapy has traditionally shown attenuated benefit; also provided placebo-controlled evidence for the full drug combination [^sharp2011]

### Ez-PAVE 2026 — intensive LDL targeting with ezetimibe

- **Design:** open-label RCT, n=3,048 established ASCVD patients in South Korea
- **Arms:** Intensive LDL target <55 mg/dL vs conventional <70 mg/dL; ezetimibe was among the agents used to achieve intensive target
- **Primary endpoint (composite CV event at 3 years):** 6.6% (intensive) vs 9.7% (conventional); HR 0.67 (95% CI 0.52–0.86); p=0.002
- **Relevance:** confirms incremental CV benefit of reaching <55 mg/dL over <70 mg/dL in secondary prevention; ezetimibe is a standard add-on to achieve the lower target [^ezpave2026]

### Recent meta-analyses (recency literature search, 2021–2026)

**Zhou 2026 — meta-analysis in diabetic high-risk patients** [^zhou2026]: 12 RCTs, n=25,591 T2DM patients. Ezetimibe+statin vs statin alone: MACE RR 0.90 (95% CI 0.82–0.99; p=0.02). Individual components (all-cause mortality, CV death, MI separately) showed no significant differences — composite significance was driven by multiple components. Adverse event profiles comparable. Consistent with IMPROVE-IT direction.

**Mahmoud 2025 — meta-analysis vs double-dose statin** [^mahmoud2025]: 47 RCTs, n=18,592 patients. Ezetimibe+statin produced superior LDL-C and total-cholesterol lowering vs doubling statin dose (p<0.001 for LDL; p=0.019 for TG), with higher rates of achieving LDL target (p<0.0001). Clinical outcomes (all-cause mortality, MI, stroke) did not differ significantly between strategies. **Safety: severe adverse events were significantly higher with the ezetimibe+statin combination (p=0.03)** vs doubling statin dose; the specific events driving this signal are not detailed in the abstract. No excess SAMS specifically. **Note:** this meta-analysis primarily covers shorter-term/smaller RCTs where power to detect CV outcome differences is limited; IMPROVE-IT (not included as "double-dose statin" is the comparator there) remains the definitive outcomes data point for the combination strategy. #gap/contradictory-evidence (short-term meta-analysis safety signal vs IMPROVE-IT long-term safety equivalence)

### Elderly subgroup (Bach 2019)

IMPROVE-IT pre-specified subgroup analysis in patients ≥75 years (n=2,798; 15.4% of total 18,144) [^bach2019]: HR for primary composite endpoint 0.80 (95% CI 0.70–0.90; p=0.02 for interaction) — larger absolute benefit (8.7 percentage-point ARR in this subgroup) than the overall trial population due to higher baseline event rates. Supports use of ezetimibe add-on in older high-risk patients specifically.

| Dimension | Status |
|---|---|
| Mechanism conserved in humans? | yes — NPC1L1 is expressed in human enterocytes; ezetimibe effect on LDL-C consistent across populations |
| CV-outcome benefit in humans? | yes — IMPROVE-IT (n=18,144), SHARP (n=9,270), Ez-PAVE (n=3,048) all positive |
| Aging-specific longevity data? | no — no dedicated longevity RCT; CV-mortality reduction is indirect aging benefit |

## Adverse effects and safety

Well-established after >20 years of clinical use.

- **No skeletal muscle toxicity (no SAMS):** ezetimibe mechanism does not involve HMG-CoA reductase or mevalonate pathway; myopathy risk is not increased vs placebo [^cannon2015]
- **Hepatotoxicity:** rare (<0.5%); similar to placebo in IMPROVE-IT; not clinically significant as monotherapy; minor transaminase elevations possible when combined with high-dose statins
- **GI effects:** mild — nausea, diarrhea, abdominal pain in ~3–4%; similar to placebo
- **Allergic reactions:** very rare; hypersensitivity reactions including angioedema reported post-marketing
- **Drug interactions:** minimal CYP450 involvement; cyclosporine increases ezetimibe AUC ~12-fold (avoid or dose-reduce in transplant patients); bile acid sequestrants reduce absorption (separate dosing by ≥2 h)
- **Pregnancy:** Category C (avoid); limited data

#gap/long-term-unknown — No >10-year safety data in statin-naive elderly populations as monotherapy. IMPROVE-IT (7 years, background statin) is the longest available dataset.

## Aging relevance

Ezetimibe has no primary aging-mechanism target (no mTOR, sirtuin, AMPK, or epigenetic activity). Its aging relevance is entirely cardiovascular:

1. **CV mortality reduction:** [[atherosclerosis]] is among the top causes of death after age 60. Ezetimibe's LDL-lowering in the context of statin therapy directly addresses the largest cause of atherosclerosis-driven mortality.
2. **Clean mechanistic probe:** because ezetimibe lacks statin pleiotropy, IMPROVE-IT's positive result cleanly validates LDL-C as causal in human CVD — supporting [[apob]] and [[lipoprotein-metabolism]] as genuine therapeutic targets rather than confounded biomarkers.
3. **Statin intensification without dose escalation:** high-dose statin therapy increases SAMS risk. Adding ezetimibe achieves lower LDL-C without dose escalation — a practical advantage in older adults who are more vulnerable to statin side effects.
4. **Post-statin escalation pathway:** the canonical intensification ladder is rosuvastatin/atorvastatin → add ezetimibe → add PCSK9i (or bempedoic acid). Generic ezetimibe (≤$10/month) occupies the least costly rung.

Ezetimibe does not modulate any hallmark of aging directly. The hallmarks listed in frontmatter (`chronic-inflammation`, `altered-intercellular-communication`) reflect that atherosclerotic plaque biology is an inflammatory intercellular communication process and that LDL lowering reduces this pathology.

## Combination products in use

| Product | Combination | Indication |
|---|---|---|
| Vytorin | ezetimibe 10 mg + simvastatin 10/20/40/80 mg | Hypercholesterolemia |
| Roszet | ezetimibe 10 mg + rosuvastatin 5/10/20/40 mg | Hypercholesterolemia / FH |
| Nexlizet / Nustendi | ezetimibe 10 mg + bempedoic acid 180 mg | Statin-intolerant / FH |

## Limitations and gaps

- LDL-C reduction as monotherapy (~18%) is modest compared to potent statins (~40–55%) or PCSK9 inhibitors (~60%). Ezetimibe's value is as an add-on.
- IMPROVE-IT used simvastatin 40 mg as background therapy — a moderate-intensity statin. Whether the additive benefit translates to a high-intensity statin background (rosuvastatin 20–40 mg) at equivalent or lower residual LDL-C is not directly tested. Clinical guidelines assume the benefit is mechanism-class general (LDL lowering → CV benefit) rather than statin-background-specific.
- No data on primary prevention in low-risk individuals with LDL-C below 100 mg/dL at baseline.
- Mahmoud 2025 meta-analysis (vs double-dose statin) found no significant clinical outcome difference — though this comparison is underpowered; the mechanistic basis for preferring ezetimibe add-on over dose escalation in SAMS-prone patients is strong regardless. #gap/contradictory-evidence (short-term meta-analyses vs IMPROVE-IT long-term outcomes signal)
- No aging-specific longevity or healthspan data. Aging benefit is inferred from CV-mortality reduction, not from hallmark-targeting. #gap/needs-human-replication for longevity endpoints.

## Footnotes

[^altmann2004]: doi:10.1126/science.1093131 · Altmann SW, Davis HR Jr, Zhu LJ et al. · *Science* 2004 Feb 20;303(5661):1201–4 · in-vivo (NPC1L1 knockout mice) + biochemical · NPC1L1 KO mice showed no effect of ezetimibe on cholesterol absorption, establishing NPC1L1 as the obligate ezetimibe target · n=groups of NPC1L1-KO vs WT mice · cited_by: 1752 · abstract-only verification (PMID 14976318); archive: not_oa (closed-access)

[^ge2008]: doi:10.1016/j.cmet.2008.04.001 · Ge L, Wang J et al. · *Cell Metabolism* 2008 Jun;7(6):508–19 · in-vitro (CRL-1601 hepatocyte cell line + L02 human liver cells) + fluorescence/biochemical assays · NPC1L1 recycles between endocytic recycling compartment (ERC) and plasma membrane in a cholesterol-regulated manner; cholesterol replenishment triggers clathrin/AP-2-dependent internalization; ezetimibe blocks this sterol-induced internalization, trapping NPC1L1 at cell surface · cited_by: 370 · PDF verified (local archive, pages 1-3)

[^cannon2015]: doi:10.1056/NEJMoa1410489 · Cannon CP, Blazing MA, Giugliano RP et al. (IMPROVE-IT Investigators) · *N Engl J Med* 2015;372:2387–97 · rct · n=18,144 post-ACS patients (9,077 monotherapy; 9,067 combo) · simvastatin 40 mg+ezetimibe 10 mg vs simvastatin 40 mg+placebo · median follow-up 6 years; Kaplan-Meier event rates reported at 7 years · primary endpoint (CV death / major coronary event / nonfatal stroke) HR 0.936 (95% CI 0.89–0.99; p=0.016) · 32.7% vs 34.7% at 7 years; ARR 2.0 pp · LDL-C: 53.7 vs 69.5 mg/dL median time-weighted average · MI HR 0.87 (p=0.002); ischemic stroke HR 0.79 (p=0.008); CV death HR 1.00 (p=1.00) · cited_by: 4233 · PDF verified end-to-end (local archive)

[^sharp2011]: doi:10.1016/s0140-6736(11)60739-3 · Baigent C et al. (SHARP Investigators) · *Lancet* 2011 Jun 25;377(9784):2181–92 · rct · n=9,270 CKD patients (4,650 treatment; 4,620 placebo; ~33% on dialysis) · simvastatin 20 mg+ezetimibe 10 mg vs placebo · median 4.9-year follow-up · average LDL-C difference 0.85 mmol/L (~33 mg/dL) at ~2/3 compliance · primary endpoint (non-fatal MI, coronary death, non-hemorrhagic stroke, or arterial revascularization): 11.3% vs 13.4%; RR 0.83 (95% CI 0.74–0.94; p=0.0021) · cited_by: 2418 · abstract-only verification (PMID 21663949); archive: not_oa (closed-access)

[^bach2019]: doi:10.1001/jamacardio.2019.2306 · Bach RG et al. · *JAMA Cardiology* 2019;4(8):776–84 · pre-specified subgroup analysis of IMPROVE-IT · n=2,798 patients ≥75 years (15.4% of 18,144 total) · primary composite endpoint HR 0.80 (95% CI 0.70–0.90); p=0.02 for interaction · 8.7 percentage-point ARR in elderly vs ~0.9–0.8% ARR in younger cohorts, driven by higher baseline event rates · cited_by: 114 · abstract-only verification (PMID 31314050); download failed

[^zhou2026]: doi:10.1186/s12872-026-05541-1 · Zhou Y, Jin J · *BMC Cardiovascular Disorders* 2026 · meta-analysis · n=25,591 (12 RCTs) · T2DM patients at elevated MI risk · ezetimibe+statin vs statin alone · MACE RR 0.90 (95% CI 0.82–0.99; p=0.02) · individual components (all-cause mortality, CV death, MI) not significant separately · adverse event profiles comparable · PMID: 41555252 · **abstract-only verification 2026-05-09 — full PDF not end-to-end verified**

[^mahmoud2025]: doi:10.1080/08998280.2025.2487966 · Mahmoud A et al. · *Proc (Bayl Univ Med Cent)* 2025 · meta-analysis · n=18,592 (47 RCTs) · ezetimibe+statin vs double-dose statin · superior LDL-C lowering (p<0.001), TG reduction (p=0.019), and LDL-target achievement (p<0.0001) with combination; no significant difference in all-cause mortality, MI, or stroke; **severe adverse events higher with combination (p=0.03)** · PMID: 40557229 · **abstract-only verification 2026-05-09 — full PDF not end-to-end verified**

[^ezpave2026]: doi:10.1056/NEJMoa2600283 · Lee YJ et al. (Ez-PAVE Investigators) · *N Engl J Med* 2026 Apr;394(14):1365–75 · rct · n=3,048 established ASCVD patients (1,526 intensive; 1,522 conventional) · intensive LDL target <55 mg/dL vs conventional <70 mg/dL; achieved medians 56 vs 66 mg/dL · primary composite HR 0.67 (95% CI 0.52–0.86; p=0.002) at median 3 years · DOI confirmed real via Crossref and PMID 41910315 · archive: not_in_archive (not yet indexed); **abstract-only verification 2026-05-09 — DOI and key results confirmed; full PDF not read**
