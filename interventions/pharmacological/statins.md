---
type: intervention
aliases: [HMG-CoA reductase inhibitors, statins, atorvastatin, rosuvastatin, simvastatin, pravastatin, pitavastatin, lovastatin, fluvastatin]
mode: pharmacological
mechanisms: [hmgcr-inhibition, ldlr-upregulation, ldl-lowering, anti-inflammatory]
targets: ["[[hmgcr]]"]
target-hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
target-pathways: ["[[srebp-2]]", "[[lipoprotein-metabolism]]"]
human-evidence-level: strong
clinical-stage: fda-approved
safety-profile: well-established
translation-gap: human-evidence-strong
next-experiment: "Head-to-head of early (age 30–40) vs standard (age 50+) statin initiation in primary prevention using cumulative ApoB-years as exposure metric and hard CV events + CCTA coronary plaque as outcomes — the life-course-LDL hypothesis remains unconfirmed by a prospective RCT."
clinical-trials-active: 180
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "CTT 2010 primary PDF verified (n, CI corrected from 0.74–0.82 to 0.76–0.80); CTT 2024 T2D PDF verified (rate ratios, n, ~62% quartile claim all confirmed); landmark RCT numerics (4S, WOSCOPS, CARE, HPS, PROVE-IT, TNT, JUPITER) cross-checked via PubMed abstracts and Crossref — no local PDFs; IMPROVE-IT DOI confirmed and citation added; SAMSON trial DOI confirmed and added; ClinicalTrials active count updated to 180 (queried 2026-05-09); per-statin PK parameters and ACC/AHA intensity-tier framework not independently re-verified against primary PK literature or guideline PDF — recommend re-check on next lint pass"
---

# Statins

**The most-validated pharmacological CV-mortality-reducing drug class in human medicine.** Statins are competitive inhibitors of HMG-CoA reductase ([[hmgcr]]), the rate-limiting enzyme of the [[mevalonate-pathway]]. Their primary clinical effect is a dose-dependent reduction of plasma LDL-C and [[apob|ApoB]]-containing particles via upregulation of hepatic LDLR — not via direct suppression of cholesterol synthesis (which is rapidly compensated). Seven statins are currently FDA-approved; one (cerivastatin, 2001) was withdrawn for safety. Adjacent drug classes that converge on the same SREBP-2 → LDLR axis: [[ezetimibe]] (intestinal NPC1L1 entry point; IMPROVE-IT 2015 first non-statin LDL-lowering CV-outcomes RCT) and [[bempedoic-acid]] (ACLY upstream of HMGCR; liver-specific bioactivation → no SAMS; CLEAR Outcomes 2023).

For aging-relevant geroprotective context: statins are among the few pharmacological agents where the pathway from molecular target to hard human mortality outcome is fully closed — HMGCR genetic loss-of-function alleles, Mendelian-randomization instruments, and multiple large RCTs converge on the same dose-response relationship. See [[hmgcr]] for the target-level evidence.

---

## Class definition

Statins share an **HMG-like pharmacophore moiety** that occupies the [[hmgcr]] catalytic-domain substrate pocket, competitively displacing HMG-CoA. Ki values are nanomolar (rosuvastatin ~0.1 nM; atorvastatin ~8 nM) vs micromolar for the endogenous HMG-CoA substrate. Lovastatin and simvastatin are inactive prodrug lactone forms that require hepatic hydrolysis to the active acid form; all other statins are active as administered.

**Approved statins:**

| Statin | Approved | Class | CYP | Half-life | Characteristic |
|---|---|---|---|---|---|
| Lovastatin (Mevacor) | 1987 (first) | prodrug | CYP3A4 | 2–4 hr | Lipophilic; first FDA-approved |
| Simvastatin (Zocor) | 1991 | prodrug | CYP3A4 | ~2 hr | Major CYP3A4 interaction risk |
| Pravastatin (Pravachol) | 1991 | active | minimal CYP | ~2 hr | Hydrophilic; safest polypharmacy profile |
| Fluvastatin (Lescol) | 1993 | active | CYP2C9 | ~1 hr | Short t½; XL formulation available |
| Atorvastatin (Lipitor) | 1996 | active | CYP3A4 | ~14 hr | Peak best-selling drug globally |
| Cerivastatin (Baycol) | 1997 | active | CYP3A4 / CYP2C8 | ~2 hr | **Withdrawn 2001** — fatal rhabdomyolysis rate |
| Rosuvastatin (Crestor) | 2003 | active | minimal CYP (minor CYP2C9) | ~19 hr | Longest t½; least CYP3A4 interaction |
| Pitavastatin (Livalo) | 2009 | active | minimal CYP (minor CYP2C9) | ~11 hr | Hydrophilic; low drug-interaction profile |

PK values approximate; verify from DrugBank or primary PK literature before clinical application. #gap/needs-canonical-id (no DrugBank IDs pulled for individual statins on this page — per-compound pages TBD).

---

## Primary mechanism of action

The **dominant LDL-lowering mechanism is LDLR upregulation, not direct cholesterol-synthesis blockade.** This is a critical pharmacological insight: hepatic cholesterol synthesis is rapidly compensated (via increased HMGCR expression and increased LDL-receptor recycling feedback), but the LDLR upregulation — driven by SCAP/INSIG sensing of reduced free cholesterol — produces sustained ApoB-particle clearance.

**Cascade:**

1. Statin → competitive HMGCR inhibition → ↓ mevalonate → ↓ hepatic free cholesterol pool
2. ↓ Cholesterol in ER membrane → SCAP/INSIG-2a dissociation → SCAP escorts [[srebp-2]] to Golgi
3. [[srebp-2]] cleavage (S1P/S2P proteases) → nuclear SREBP-2 fragment → binds SRE elements → ↑ [[ldlr]] transcription (8–10× upregulation at therapeutic doses) and ↑ PCSK9 transcription
4. ↑ Surface LDLR expression → ↑ plasma LDL/[[apob|ApoB]]-particle clearance → ↓ LDL-C ~30–55% depending on dose/statin

**PCSK9 paradox:** statins simultaneously induce [[pcsk9]] via the same [[srebp-2]] axis. PCSK9 promotes LDLR lysosomal degradation, partially blunting the LDLR upregulation by ~30%. This explains the rationale for statin + PCSK9i combination: inhibiting PCSK9 removes the compensatory brake on LDLR expression, enabling additive ApoB reductions of ~60–75% above statin-alone baselines. See [[pcsk9]] for mechanism and [[familial-hypercholesterolemia]] for the highest-intensity combination use case.

**Pleiotropic effects** (beyond LDL lowering): statins deplete intermediates downstream of mevalonate — specifically farnesyl-PP and geranylgeranyl-PP — reducing isoprenylation of Rho, Rac, and Ras small GTPases. This impairs geranylgeranyl-PP-dependent Rho-GTPase prenylation → reduced NF-κB, NLRP3, and Rho-kinase signaling → anti-inflammatory effects (↓ hsCRP, endothelial NO upregulation, plaque stabilization). Pleiotropic magnitude is debated: JUPITER (elevated-hsCRP primary prevention) suggests pleiotropic benefit contributes; head-to-head statin vs ezetimibe trials (same LDL-C reduction, ezetimibe lacks pleiotropy) show similar CV outcomes per unit LDL-C reduction, arguing the dominant benefit is LDL-dependent [^ctt2010].

---

## Intensity tiers (ACC/AHA 2018 framework)

| Tier | Expected LDL-C reduction | Agents |
|---|---|---|
| **High-intensity** | ≥50% | Atorvastatin 40–80 mg; Rosuvastatin 20–40 mg |
| **Moderate-intensity** | 30–49% | Atorvastatin 10–20 mg; Rosuvastatin 5–10 mg; Simvastatin 20–40 mg; Pravastatin 40–80 mg; Lovastatin 40 mg; Fluvastatin 80 mg; Pitavastatin 1–4 mg |
| **Low-intensity** | <30% | Simvastatin 10 mg; Pravastatin 10–20 mg; Lovastatin 20 mg; Fluvastatin 20–40 mg |

Note: individual LDL-C response is highly variable (genetic polymorphisms in HMGCR, LDLR, SLCO1B1/OATP1B1); the table describes population-average expectations. For ApoB-targeted dosing, monitor ApoB rather than LDL-C percentages.

---

## Cardiovascular outcomes evidence

### Primary meta-analytic evidence

Per mmol/L (~38.7 mg/dL) reduction in LDL-C, statins produce a **22% relative reduction in major vascular events** (coronary death, MI, stroke, revascularization) — RR 0.78 (95% CI 0.76–0.80, p<0.0001) in pooled analysis of all 26 trials [^ctt2010]. The relationship is log-linear down to very low LDL-C levels, consistent with the MR evidence from [[hmgcr]] genetic instruments.

> | Dimension | Status |
> |---|---|
> | Pathway conserved in humans? | yes (human RCT data; this IS the human data) |
> | Phenotype conserved in humans? | yes |
> | Replicated in humans? | yes — 26 RCTs, n≈169,138 [^ctt2010] |

### Mendelian randomization confirmation

[[hmgcr]] genetic loss-of-function instruments (NPC1L1 + HMGCR SNPs) confirm dose-proportional CHD risk reduction per unit LDL-C decrease [^ference2015]. The genetic and pharmacological data are concordant — a rare validation in cardiovascular medicine where genetic instruments directly proxy the drug target.

### Landmark primary RCTs

| Trial | Year | Statin | n | Population | Key result |
|---|---|---|---|---|---|
| 4S [^fouS1994] | 1994 | Simvastatin 20–40 mg vs placebo | 4,444 | Secondary prevention (prior MI/angina) | First mortality benefit: RRR for total mortality ~30% |
| WOSCOPS [^woscops1995] | 1995 | Pravastatin 40 mg vs placebo | 6,595 | Primary prevention (hypercholesterolemic men) | First primary prevention trial: 31% relative risk reduction in coronary events |
| CARE [^care1996] | 1996 | Pravastatin 40 mg vs placebo | 4,159 | Secondary prevention, average cholesterol | Benefit extends to average-cholesterol post-MI patients |
| HPS [^hps2002] | 2002 | Simvastatin 40 mg vs placebo | 20,536 | High-risk (CVD, DM, occlusive arterial disease) | Broad high-risk benefit regardless of baseline LDL |
| PROVE-IT [^proveit2004] | 2004 | Atorvastatin 80 mg vs pravastatin 40 mg | 4,162 | Post-ACS | High-intensity atorvastatin superior to moderate-intensity pravastatin; established "lower is better" principle |
| TNT [^tnt2005] | 2005 | Atorvastatin 80 mg vs 10 mg | 10,001 | Stable CAD | Further LDL-C reduction with 80 mg reduced MACE vs 10 mg (RRR ~22%) |
| JUPITER [^jupiter2008] | 2008 | Rosuvastatin 20 mg vs placebo | 17,802 | Primary prevention, LDL-C <130 mg/dL, hsCRP ≥2 mg/L | 44% reduction in MACE; trial halted early; demonstrated statin benefit in elevated-hsCRP, low-LDL group |

Numerics for individual trials verified via DOI confirmation only — PDF cross-check pending. #gap/needs-replication for exact CIs.

### Dose-response and cumulative LDL-exposure

The CTT meta-analysis confirms a log-linear relationship: each additional 1 mmol/L LDL-C reduction provides an additional ~22% RRR in major vascular events, regardless of absolute LDL level. This supports the "ApoB-years" cumulative-exposure framework — earlier initiation for the same absolute LDL-C at a given age represents more cumulative particle burden avoided, which is the rationale for initiating at lower ApoB thresholds in younger, higher-risk individuals.

---

## Adverse effects

### Statin-associated muscle symptoms (SAMS)

Myalgia, myopathy, and, rarely, rhabdomyolysis are the most clinically significant class effects.

- **Incidence:** ~5% in blinded RCTs; 10–25% in observational/real-world data — the gap is largely attributable to the **nocebo effect** (symptoms arise from expectation of side effects rather than pharmacological action).
- **Nocebo evidence:** Two concordant N-of-1 crossover RCTs confirm the nocebo hypothesis. The SAMSON trial (Wood et al. 2020, *N Engl J Med*) used a within-person crossover design in 60 patients randomised to statin, placebo, or no-treatment periods; approximately 90% of perceived statin side-effect burden also occurred on placebo [^samson2020]. A larger Norwegian multicenter crossover RCT (Kristiansen et al. 2020, n=77, *Eur Heart J Cardiovasc Pharmacother*) found atorvastatin 40 mg did not significantly increase muscle symptom intensity vs placebo in statin-intolerant CHD patients (mean VAS difference 0.31, 95% CI −0.24 to 0.86) [^kristiansen2020].
- **Rhabdomyolysis:** rare at standard doses (~0.04 per 1000 patient-years); highest risk with CYP3A4-metabolized statins combined with strong CYP3A4 inhibitors (macrolides, azole antifungals, diltiazem, grapefruit juice). Cerivastatin was withdrawn due to 10× higher rhabdomyolysis rate than comparators.
- **SLCO1B1 pharmacogenomics:** common loss-of-function variant in SLCO1B1 (encodes OATP1B1, the hepatic organic anion transporter) impairs hepatic statin uptake → elevated plasma statin concentrations → higher SAMS risk. Relevant for simvastatin 40–80 mg; less relevant for rosuvastatin and pravastatin. Routine SLCO1B1 genotyping is not yet standard of care but is the most actionable pharmacogenomic risk factor for SAMS.

### New-onset type 2 diabetes

A moderate, dose-dependent increase in T2D incidence is a confirmed on-target class effect [^ctt2024diabetes].

- **CTT 2024 individual-participant data meta-analysis (19 placebo-controlled trials, n=123,940):** Low/moderate-intensity statins: rate ratio 1.10 (95% CI 1.04–1.16); high-intensity statins: rate ratio 1.36 (95% CI 1.25–1.48) [^ctt2024diabetes]. Approximately 62% of new-onset diabetes diagnoses occurred in participants already in the top quartile of baseline glucose — most cases represent accelerated diagnosis of pre-diabetes, not de novo T2D in metabolically normal individuals.
- **Mechanism:** on-target via mevalonate pathway depletion in pancreatic β-cells → reduced isoprenylation of Ras/Rho GTPases → impaired insulin secretion + insulin sensitivity. Consistent with [[hmgcr]] MR genetic instruments also showing T2D risk elevation per LDL-lowering allele.
- **Net benefit:** for any patient at moderate-to-high CV risk, the ~22% relative reduction in major vascular events far outweighs the modest T2D risk increase. For primary prevention patients with borderline glucose, the T2D signal warrants consideration of lifestyle optimization and glucose monitoring.

### Hepatotoxicity

Mild transaminase elevation (ALT/AST) occurs in ~1–3% of patients, typically transient and dose-dependent. Clinically significant hepatotoxicity is rare. FDA 2012 label revision removed routine monitoring recommendation. Severe acute liver injury attributable to statins is extremely rare in the absence of co-existing liver disease.

### Cognitive complaints

Anecdotal reports of cognitive impairment have not been confirmed in large blinded RCTs or MR studies. The association is widely attributed to nocebo and the high prevalence of age-related cognitive decline in the population most commonly treated with statins. #gap/contradictory-evidence — FDA added a label note in 2012, but the causal evidence is absent.

### Drug interactions

High-interaction risk (CYP3A4-dependent statins: atorvastatin, simvastatin, lovastatin):
- Macrolide antibiotics (clarithromycin, erythromycin) — hold simvastatin/lovastatin during course
- Azole antifungals (itraconazole, ketoconazole) — avoid
- Grapefruit juice — clinically relevant for simvastatin/lovastatin
- Calcium-channel blockers (diltiazem, verapamil) — simvastatin dose cap 10 mg with diltiazem per label

Low-interaction risk: **rosuvastatin, pravastatin, pitavastatin** — preferred for polypharmacy patients or complex medication regimens.

---

## Aging-relevance and geroprotective framing

Statins are among the most evidence-rich pharmacological interventions in the wiki's evidence base for **hard mortality endpoints** — comparable to or exceeding more "longevity-prioritized" agents for which robust human evidence remains limited. Three framing points:

1. **Cumulative LDL-exposure matters.** The MR literature, familial hypercholesterolemia natural history, and PCSK9 LOF cohort studies support a model where **ApoB-particle exposure is approximately proportional to incident atherosclerosis burden**, and that this accumulation begins in the third decade. Earlier statin initiation for elevated-ApoB individuals represents more cumulative exposure avoided. See [[familial-hypercholesterolemia]] for the extreme phenotype confirming causality.

2. **Atherosclerosis as a mechanistic hallmark driver.** Atherosclerotic cardiovascular disease is the leading cause of death in aged humans. Plaque burden → endothelial dysfunction → impaired tissue perfusion → contributes to [[altered-intercellular-communication]] (vascular paracrine signals) and [[chronic-inflammation]] (NLRP3/inflammasome activation by cholesterol crystals). See [[atherosclerosis]] for mechanism.

3. **Pleiotropic anti-aging signals.** Beyond LDL-C, statins reduce hsCRP ~15–20%, may improve endothelial NO bioavailability, and stabilize existing plaques. These effects intersect with [[chronic-inflammation]] as a hallmark target. Whether the pleiotropic benefits are additive to LDL-lowering or largely subsumed by it remains disputed.

**Comparative geroprotection context:** No head-to-head RCTs compare statins vs, say, metformin or rapamycin on mortality in non-CVD populations. The statin evidence base is weighted toward CV-risk-elevated individuals; extrapolation to primary prevention in low-ApoB individuals carries more uncertainty.

---

## Per-statin comparison (key properties for clinical selection)

| Statin | Relative LDL-C reduction (40 mg dose unless noted) | Half-life | Primary CYP | Hydrophilicity | Notes |
|---|---|---|---|---|---|
| Atorvastatin | ~50% (40 mg); ~55% (80 mg) | ~14 hr | CYP3A4 | Lipophilic | Most prescribed worldwide; extensive drug-interaction data |
| Rosuvastatin | ~52% (40 mg); ~58% (80 mg) | ~19 hr | minimal (CYP2C9 minor) | Hydrophilic | Preferred for polypharmacy; kidney excretion; Asian populations: start 5 mg |
| Simvastatin | ~35% (40 mg) | ~2 hr | CYP3A4 | Lipophilic | Off-patent; dose cap 40 mg with many co-medications; 80 mg withdrawn in US due to myopathy |
| Pravastatin | ~25% (40 mg); ~34% (80 mg) | ~2 hr | minimal CYP | Hydrophilic | Preferred in drug interactions, liver disease, post-transplant |
| Fluvastatin | ~25% (40 mg) | ~1 hr | CYP2C9 | Hydrophilic | XL 80 mg once-daily available |
| Lovastatin | ~30% (40 mg) | ~2 hr | CYP3A4 | Lipophilic | First approved; now rarely preferred |
| Pitavastatin | ~38% (4 mg) | ~11 hr | minimal CYP (CYP2C9 minor) | Hydrophilic | HIV-specific data (REPRIEVE trial); glucuronidation-based clearance |

LDL-C reduction values are approximate population averages; actual response varies by individual. Source for specific LDL-C reduction percentages: ACC/AHA intensity-tier framework. Verify exact numbers from primary PK/PD literature on a per-agent basis. #gap/needs-canonical-id for individual per-statin PK parameters (DrugBank IDs not pulled on this page).

---

## Combination strategies

**Statin + ezetimibe:** ezetimibe blocks NPC1L1-mediated intestinal cholesterol absorption → additional ~15–20% LDL-C reduction on top of statin. The IMPROVE-IT trial (n=18,144, NSTEMI/UA patients, median 7-year follow-up) demonstrated incremental CV benefit from additional LDL-C lowering beyond statin alone, confirming the linear dose-response [^improveit2015].

**Statin + PCSK9i:** monoclonal antibodies (evolocumab, alirocumab) or small-interfering RNA (inclisiran) against [[pcsk9]] remove the compensatory LDLR-degradation brake, enabling 50–60% additional LDL-C reduction over statin alone. First-choice escalation strategy when statin-alone ApoB target is not reached, particularly in [[familial-hypercholesterolemia]] and post-ACS patients with high baseline risk.

---

## Limitations and open questions

- **Primary prevention at low absolute risk:** the absolute risk reduction scales with baseline risk; for genuinely low-risk individuals (no traditional CV risk factors, low ApoB, low inflammation), the absolute benefit is small and needs to be weighed against SAMS nuisance and T2D risk signal. #gap/contradictory-evidence on population-appropriate threshold.
- **Elderly (>75 years) primary prevention:** weaker evidence base; observational meta-analyses (e.g., BMC Medicine 2021 [^bmcmed2021]) show benefits but confounding is difficult to exclude. Several guidelines do not strongly recommend primary prevention statin initiation in >75 year olds without established CVD.
- **Statin holiday for surgery/infection:** acute illness may transiently increase SAMS risk; guidelines recommend not stopping statins in hospital unless rhabdomyolysis is suspected (rebound is associated with increased perioperative events).
- **Muscle symptom management in intolerance:** SLCO1B1 genotyping, switching to rosuvastatin/pitavastatin (low CYP interaction), dose reduction, alternate-day dosing are all evidence-supported strategies before labeling a patient "statin-intolerant."
- **Pleiotropic vs LDL-specific benefit:** ezetimibe + statin data from IMPROVE-IT mostly support a "LDL-lowering is the driver" conclusion, but the exact quantitative contribution of pleiotropic effects to JUPITER-type primary prevention benefit is not settled. #gap/contradictory-evidence
- **Long-term effects in very young initiators:** no RCT data for statins initiated before age 30–35 in primary prevention. The cumulative-LDL-exposure benefit extrapolation rests on MR/FH natural history; a prospective RCT of early vs standard initiation has not been done. This is the `next-experiment` gap.

---

## Cross-references

- [[hmgcr]] — molecular target (verified protein page)
- [[srebp-2]] — transcriptional bridge between HMGCR inhibition and LDLR upregulation
- [[ldlr]] — effector receptor upregulated by statin-SREBP-2 axis
- [[apob]] — atherogenic particle marker and primary dosing target
- [[pcsk9]] — SASP factor co-induced by SREBP-2; targeted by combination therapy
- [[atherosclerosis]] — downstream phenotype and disease context
- [[familial-hypercholesterolemia]] — highest-leverage statin indication; natural experiment confirming cumulative LDL causality
- [[lipoprotein-metabolism]] — pathway context (forward ref — will resolve once pathway page seeded) #gap/stub
- [[lpa]] — Lp(a) as a statin-decision node
- [[mediterranean-diet]] — complementary dietary LDL-lowering intervention; dietary fat substitution as alternative or adjunct
- [[palmitic-acid]] — dietary LDL-raising compound; the dietary foil to this page's pharmacological intervention

---

## Footnotes

[^ctt2010]: doi:10.1016/S0140-6736(10)61350-5 · Cholesterol Treatment Trialists' Collaboration · *Lancet* 2010;376(9753):1670–81 · meta-analysis · n=169,138 (≈170,000) across 26 randomised trials · per 1 mmol/L LDL-C reduction: RR for major vascular events 0.78 (95% CI 0.76–0.80, p<0.0001); 22% proportional reduction; linear dose-response across LDL strata · local PDF verified
[^ference2015]: doi:10.1016/j.jacc.2015.02.020 · Ference BA et al. · *JACC* 2015;65(15):1552–61 · mendelian-randomization · NPC1L1 + HMGCR natural genetic instruments confirm dose-proportional CHD RRR per unit LDL-C reduction concordant with statin RCT data · no local PDF (status: failed)
[^fouS1994]: doi:10.1016/s0140-6736(94)90566-5 · Scandinavian Simvastatin Survival Study Group · *Lancet* 1994;344(8934):1383–9 · rct · n=4,444 · simvastatin 20–40 mg vs placebo · secondary prevention (prior MI/angina); total mortality RRR ~30%; first demonstration of statin mortality benefit · no local PDF (status: not_oa)
[^woscops1995]: doi:10.1056/nejm199511163332001 · Shepherd J, Cobbe SM, Ford I, et al. (WOSCOPS Group) · *N Engl J Med* 1995;333(20):1301–7 · rct · n=6,595 · pravastatin 40 mg vs placebo · primary prevention in hypercholesterolemic men; 31% RRR coronary events · no local PDF (status: pending)
[^care1996]: doi:10.1056/NEJM199610033351401 · Sacks FM, Pfeffer MA, Moye LA, et al. (CARE Trial Investigators) · *N Engl J Med* 1996;335(14):1001–9 · rct · n=4,159 · pravastatin 40 mg vs placebo · secondary prevention (post-MI, average cholesterol); 24% RRR in coronary events; established benefit extends to average-cholesterol patients · no local PDF (status: pending)
[^hps2002]: doi:10.1016/s0140-6736(02)09327-3 · Heart Protection Study Collaborative Group · *Lancet* 2002;360(9326):7–22 · rct · n=20,536 · simvastatin 40 mg vs placebo · broad high-risk populations (CVD, DM, occlusive arterial disease); 24% RRR in first major vascular event regardless of baseline LDL-C · no local PDF (status: not_oa)
[^proveit2004]: doi:10.1056/NEJMoa040583 · Cannon CP, Braunwald E, McCabe CH, et al. (PROVE-IT TIMI 22 Investigators) · *N Engl J Med* 2004;350(15):1495–504 · rct · n=4,162 · atorvastatin 80 mg vs pravastatin 40 mg post-ACS · atorvastatin 80 mg: 16% RRR in death/major CV events vs pravastatin 40 mg; established "lower is better" principle · no local PDF (status: pending)
[^tnt2005]: doi:10.1056/NEJMoa050461 · LaRosa JC, Grundy SM, Waters DD, et al. (TNT Investigators) · *N Engl J Med* 2005;352(14):1425–35 · rct · n=10,001 · atorvastatin 80 mg vs 10 mg in stable CAD · 80 mg reduced major CV events by ~22% vs 10 mg (HR 0.78, 95% CI 0.69–0.89) · no local PDF (status: pending)
[^jupiter2008]: doi:10.1056/NEJMoa0807646 · Ridker PM, Danielson E, Fonseca FAH, et al. (JUPITER Trial Study Group) · *N Engl J Med* 2008;359(21):2195–207 · rct · n=17,802 · rosuvastatin 20 mg vs placebo in primary prevention with LDL-C <130 + hsCRP ≥2 mg/L · 44% RRR in first major vascular event (HR 0.56, 95% CI 0.46–0.69); trial halted early at median 1.9 yr follow-up · no local PDF (status: pending)
[^ctt2024diabetes]: doi:10.1016/S2213-8587(24)00040-8 · Cholesterol Treatment Trialists' Collaboration · *Lancet Diabetes Endocrinol* 2024 · individual-participant-data meta-analysis · 19 placebo-controlled RCTs (n=123,940) + 4 intensity-comparison RCTs (n=30,724) · low/moderate-intensity: rate ratio 1.10 (95% CI 1.04–1.16) new-onset diabetes; high-intensity: rate ratio 1.36 (95% CI 1.25–1.48); ~62% of new diagnoses in top quartile of baseline glucose → mostly accelerated pre-diabetes diagnosis · local PDF available
[^samson2020]: doi:10.1056/NEJMc2031173 · Wood FA, Howard JP, Finegold JA, et al. · *N Engl J Med* 2020;383(22):2182–84 · rct (N-of-1 crossover) · n=60 statin-intolerant patients (3-way crossover: atorvastatin 20 mg / placebo / no treatment, 1-month blocks) · ~90% of symptom intensity attributed to statins also occurred on placebo; confirms nocebo as primary driver of perceived SAMS in clinical practice · no local PDF (status: pending)
[^kristiansen2020]: doi:10.1093/ehjcvp/pvaa076 · Kristiansen O, Vethe NT, Peersen K, et al. · *Eur Heart J Cardiovasc Pharmacother* 2021;7(6):507–16 · rct (multicenter crossover, double-blinded) · n=77 statin-intolerant CHD patients randomized; 71 completed · atorvastatin 40 mg vs placebo: mean VAS difference 0.31 (95% CI −0.24 to 0.86); atorvastatin did not significantly increase muscle symptom intensity · no local PDF (status: pending)
[^improveit2015]: doi:10.1056/NEJMoa1410489 · Cannon CP, Blazing MA, Giugliano RP, et al. (IMPROVE-IT Investigators) · *N Engl J Med* 2015;372(25):2387–97 · rct · n=18,144 · simvastatin 40 mg + ezetimibe 10 mg vs simvastatin 40 mg + placebo; post-NSTEMI/UA; median 7-year follow-up · primary endpoint rate 32.7% vs 34.7% at 7 years; incremental CV benefit from additional LDL-C lowering beyond statin alone confirmed; validates linear LDL-C dose-response · no local PDF (status: not checked)
[^bmcmed2021]: doi:10.1186/s12916-021-02009-1 · Ramos R, Comas-Cufí M, Martí-Lluch R, et al. · *BMC Medicine* 2021;19:1–14 · systematic-review (observational studies) · statin use in older adults (≥65 yr) without CVD associated with lower all-cause mortality; confounding acknowledged; not RCT-level evidence · model: older human populations
