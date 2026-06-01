---
type: compound
aliases: [Colcrys, Colchicys, Mitigare, colchicine]
pubchem-cid: 6167
inchikey: IAKHMKGGTNLKSZ-INIZCTEOSA-N
chembl-id: CHEMBL107
drugbank-id: DB00570
who-inn: colchicine
biologic: false
cas-number: 64-86-8
molecular-formula: C22H25NO6
molecular-weight-da: 399.4
mechanisms: [tubulin-polymerization-inhibition, microtubule-disruption, nlrp3-inflammasome-inhibition, neutrophil-recruitment-inhibition, anti-inflammatory]
targets: ["[[nlrp3-inflammasome]]"]
hallmarks: ["[[chronic-inflammation]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Frailty / inflammaging RCT in community-dwelling adults 70+ using 0.5 mg/d colchicine vs placebo with composite frailty score + NLR + hsCRP as co-primary endpoints; would directly test aging-context efficacy beyond the CV-indication anchor."
clinical-trials-active: 68
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "COLCOT 2019, LoDoCo2 2020, and COPPS-2 2014 primary source PDFs verified in full; Toldo 2022 mechanism review verified in full (§5.5 colchicine section). PK table values (half-life, bioavailability, protein binding) and canonical identity fields (PubChem CID 6167, ChEMBL CHEMBL107, DrugBank DB00570, InChIKey) not independently re-verified against primary sources — recommend cross-check against package insert and DrugBank on next lint pass. clinical-trials-active count re-queried from ClinicalTrials.gov v2 API 2026-05-09."
---

# Colchicine

A plant alkaloid derived from *Colchicum autumnale* (autumn crocus), colchicine is one of the oldest drugs in clinical use (approved in the US as early as 1961 for gout). Its primary mechanism — binding to tubulin dimers and blocking microtubule polymerization — prevents neutrophil chemotaxis and NLRP3 inflammasome assembly. As an aging intervention, colchicine's profile is unusual: it is **FDA-approved, cheap (~$10/month generic), and now has large-scale RCT evidence** (COLCOT 2019, LoDoCo2 2020) demonstrating that 0.5 mg/day reduces major cardiovascular events, establishing it as a validated low-cost chronic-inflammation modulator with direct relevance to the [[chronic-inflammation]] aging hallmark.

## Identity

- **PubChem CID:** 6167
- **ChEMBL ID:** CHEMBL107
- **DrugBank ID:** DB00570 (not independently confirmed via live fetch — #gap/needs-canonical-id cross-check)
- **InChIKey:** IAKHMKGGTNLKSZ-INIZCTEOSA-N
- **CAS:** 64-86-8
- **Class:** tropolone alkaloid; natural product from *Colchicum autumnale* and *Gloriosa superba*
- **Molecular weight:** 399.4 Da
- **Molecular formula:** C22H25NO6
- **Solubility:** freely soluble in water; soluble in ethanol

## FDA-Approved Indications

| Indication | Regimen | Year first approved |
|---|---|---|
| Acute gout flares | 1.2 mg at onset, then 0.6 mg 1 hour later | 1961 (marketed); modern approval 2009 (Colcrys) |
| Gout prophylaxis | 0.5–0.6 mg once or twice daily | 2009 |
| Familial Mediterranean Fever (FMF) | 1.2–2.4 mg/d | 2009 |
| Pericarditis (idiopathic recurrent) | 0.5 mg BID × 3 months (weight-based) | 2014 |

Post-pericardiotomy syndrome prevention (COPPS-2 context) is supported by RCT but not a labeled indication in the US; used off-label perioperatively.

## Mechanism of Action

**Primary mechanism — tubulin binding / microtubule disruption:**
Colchicine binds with high affinity to the β-tubulin subunit at the colchicine-binding site, inhibiting tubulin polymerization into microtubules. In neutrophils and other granulocytes, intact microtubule networks are required for chemotaxis, degranulation, and diapedesis through the endothelium. Colchicine disrupts these functions at therapeutic plasma concentrations [^toldo2022].

**Secondary mechanism — NLRP3 inflammasome inhibition:**
NLRP3 inflammasome assembly and activation require intact microtubule-dependent intracellular transport of ASC (apoptosis-associated speck-like protein) to the perinuclear region. By disrupting microtubules, colchicine prevents NLRP3 inflammasome formation, thereby blocking caspase-1-mediated cleavage of pro-IL-1β and pro-IL-18 to their active forms [^toldo2022]. This is mechanistically distinct from the direct NLRP3-binding mechanism of MCC950-class inhibitors.

**Net downstream effects:**
- Reduced IL-1β and IL-18 secretion
- Reduced neutrophil-endothelial adhesion and transmigration
- Decreased C-reactive protein (CRP) and other acute-phase reactants
- Reduced monocyte activation

The NLRP3 → IL-1β pathway aligns mechanistically with the aging-relevant CANTOS/canakinumab target. Colchicine provides an orthogonal intervention at the upstream (inflammasome assembly) rather than downstream (IL-1β neutralization) step — see [[canakinumab]] for the antibody arm.

## Effects on Aging Hallmarks

| Hallmark | Evidence | Notes |
|---|---|---|
| [[chronic-inflammation]] | Multiple RCTs show reduction in hsCRP, NLR, and IL-6 at 0.5 mg/d [^colcot2019][^lodoco2020] | Central hallmark mechanism; NLRP3 inflammasome is a key inflammaging driver |

**Indirect hallmark linkages (not primary claims):**
- Reduced cardiovascular events likely attenuate the [[altered-intercellular-communication]] burden from atherosclerotic lesion-derived inflammatory secretome
- NLRP3 inflammasome activation in aged macrophages and endothelial cells is a driver of sterile [[chronic-inflammation]] (often grouped under "inflammaging")

## Key Clinical Trials

### COLCOT 2019 (Tardif et al.) — post-MI [^colcot2019]

**Design:** Randomized, double-blind, placebo-controlled; n=4,745; enrolled within 30 days of acute MI; median follow-up 22.6 months.

**Intervention:** Colchicine 0.5 mg once daily vs placebo (on background of standard post-MI therapy).

**Primary composite endpoint:** CV death, resuscitated cardiac arrest, MI, stroke, or urgent hospitalization for angina requiring revascularization.

**Result:** Colchicine group HR 0.77 (95% CI 0.61–0.96; p=0.02). Absolute event rate: 5.5% colchicine vs 7.1% placebo. Primarily driven by reductions in stroke (HR 0.26) and urgent angina hospitalization (HR 0.50).

**Safety signal:** Overall serious adverse events not different between arms (16.4% colchicine vs 17.2% placebo, p=0.47). GI adverse events overall similar (17.5% vs 17.6%, p=0.90); diarrhea 9.7% vs 8.9% (p=0.35); nausea 1.8% vs 1.0% (p=0.02). Pneumonia as a serious adverse event occurred in 0.9% of colchicine patients vs 0.4% of placebo patients (p=0.03). Non-cardiovascular death: 23 colchicine patients vs 20 placebo patients (discussed in paper as numerically higher but not formally reported as a percentage endpoint in the primary publication).

### LoDoCo2 2020 (Nidorf et al.) — chronic coronary disease [^lodoco2020]

**Design:** Randomized, double-blind, placebo-controlled; n=5,522; stable chronic coronary disease (prior CAD ≥6 months without recent ACS); median follow-up 28.6 months.

**Intervention:** Colchicine 0.5 mg once daily vs placebo.

**Primary composite endpoint:** CV death, spontaneous (non-procedural) MI, ischemic stroke, or ischemia-driven coronary revascularization.

**Result:** Colchicine group HR 0.69 (95% CI 0.57–0.83; p<0.001). Absolute event rate: 6.8% vs 9.6%.

**Safety:** GI intolerance was a notable cause of pre-randomization dropout: 15.4% of patients who entered the open-label run-in phase did not proceed to randomization, with GI upset the most common reason (437/1006 patients). Among randomized patients, overall permanent discontinuation was 10.5% in each arm. Hospitalization for pneumonia was numerically lower with colchicine (1.7% vs 2.0%, HR 0.84, 95% CI 0.56–1.24, NS). Noncardiovascular death was higher with colchicine (1.9% vs 1.3%, HR 1.51, 95% CI 0.99–2.31) — not statistically significant but of potential concern. No significant increase in hospitalization for infection overall.

### COPPS-2 2014 (Imazio et al.) — post-pericardiotomy [^copps2014]

**Design:** Randomized, double-blind, placebo-controlled; n=360; cardiac surgery patients; perioperative colchicine 0.5 mg once or twice daily (weight-based) × 1 month.

**Primary outcome:** Postpericardiotomy syndrome at 3 months: 19.4% colchicine vs 29.4% placebo (absolute difference 10.0%, 95% CI 1.1%–18.7%; log-rank p=0.046; NNT=10).

**Secondary:** No significant difference in postoperative atrial fibrillation (33.9% vs 41.7%) or pericardial effusion overall. GI adverse events higher in colchicine arm (20.0% vs 11.7%).

### Meta-analytic context

A 2023 meta-analysis of colchicine for prevention of major cardiovascular events in coronary artery disease (pooling COLCOT, LoDoCo2, and smaller trials) confirmed a consistent ~25–30% relative risk reduction in MACE [^metaanalysis2023]. A second 2023 meta-analysis in post-MI patients specifically confirmed the benefit in the acute post-MI window [^metaanalysis2023b].

## Pharmacokinetics

| Parameter | Value | Notes |
|---|---|---|
| Oral bioavailability | ~45% (range 24–88%) | Enterohepatic recirculation |
| Time to peak (Tmax) | 0.5–3 h | Rapid absorption |
| Half-life (terminal) | 26–31 h | Supports once-daily dosing |
| Volume of distribution | 5–8 L/kg | Extensive tissue distribution |
| Protein binding | ~39% | Albumin; low binding |
| Metabolism | CYP3A4 (minor) | P-glycoprotein (P-gp) substrate |
| Elimination | ~40–65% renal | Dose reduction required in renal impairment (eGFR <30) |

**Therapeutic index:** Narrow. Toxic concentrations are 2–3× therapeutic. Colchicine toxicity mimics GI illness initially (nausea, vomiting, diarrhea), progressing at higher doses/longer exposure to multi-organ failure (rhabdomyolysis, bone marrow suppression, cardiac toxicity). Fatalities have occurred at cumulative doses of 7–21 mg in adults.

**Key drug interactions:**
- Strong CYP3A4 inhibitors (clarithromycin, ketoconazole, ritonavir) and P-gp inhibitors (cyclosporine, verapamil) can increase colchicine exposure severalfold — **dose reduction mandatory; contraindicated with clarithromycin in renal/hepatic impairment**
- Statins (lovastatin, simvastatin) — additive myopathy risk; monitor CK
- Digoxin — P-gp competition may raise digoxin levels

## Aging-Context Framing

**Why colchicine is relevant to aging biology:**
The NLRP3 inflammasome is increasingly recognized as a central driver of sterile inflammaging. With aging, mitochondrial dysfunction and cellular debris activate the NLRP3 sensor in macrophages, endothelial cells, and adipocytes, sustaining a low-grade IL-1β/IL-18 secretory state that accelerates atherosclerosis, sarcopenia, and neurodegeneration [^toldo2022]. Colchicine's microtubule mechanism simultaneously blocks neutrophil infiltration and NLRP3 assembly — two complementary drivers of age-associated sterile inflammation.

**Practical advantages over biologics (vs [[canakinumab]], [[anakinra]]):**
- FDA-approved and generic (~$10/month); no injection required; established long-term safety in FMF patients followed decades
- COLCOT + LoDoCo2 provide a large-scale Phase 3 RCT base unavailable for most aging interventions
- The [[nlr-biomarker]] (neutrophil-to-lymphocyte ratio) — a direct readout of neutrophil activation — is one of the most responsive biomarkers to colchicine, with measurable NLR reduction within weeks at 0.5 mg/d

**Current aging-indication gap:**
No dedicated geriatric frailty or inflammaging RCT exists. COLCOT and LoDoCo2 enrolled patients based on CAD/post-MI criteria, not aging or frailty phenotype. The biological mechanism predicts benefit in inflammaging-driven conditions (sarcopenia, dementia, frailty) but this remains untested. #gap/needs-human-replication for aging-direct indication.

**Translation assessment:**
`translation-gap: human-evidence-strong` for the cardiovascular-inflammation indication. For an aging-first frailty indication: `phase-3-rct-needed`. The mechanistic bridge exists (inflammasome → inflammaging → frailty); only a frailty-endpoint trial is needed to close the gap.

## Safety Profile

| Concern | Frequency / Grade | Notes |
|---|---|---|
| GI adverse effects (nausea, diarrhea) | Common (7–20% at 0.5 mg/d vs 5–12% placebo) | Dose-limiting in RCTs; GI tolerability improved with low-dose 0.5 mg/d vs older higher-dose regimens |
| Neuromuscular (myopathy, neuropathy) | Rare; risk increases with drug interactions (statins, CYP3A4 inhibitors) | Monitor CK in high-risk combinations |
| Hepatotoxicity | Rare | Transaminase monitoring in prolonged use |
| Bone marrow suppression | Toxic doses; not therapeutic-range | Primarily toxicity concern |
| Infection risk (pneumonia) | Signal in COLCOT (pneumonia as serious AE: 0.9% vs 0.4%, p=0.03); LoDoCo2 showed no significant difference in pneumonia hospitalization (1.7% vs 2.0%, NS) | Plausible via neutrophil suppression in COLCOT; watch in immunocompromised |
| Reproductive (teratogenicity) | FDA Category C; limited data | Used in FMF during pregnancy with careful monitoring; avoid in first trimester if possible |
| Renal / hepatic impairment | Dose reduction mandatory | Narrow therapeutic index amplified by reduced clearance |

**Long-term safety in FMF:** decades of use in FMF patients (at 1–2 mg/d, higher than cardiovascular dose) have established an acceptable long-term safety profile in that population — providing real-world evidence beyond the 2–3 year RCT windows.

## Dosing Summary

| Indication | Regimen |
|---|---|
| Acute gout attack | 1.2 mg then 0.6 mg 1 h later; max 1.8 mg per course |
| Gout prophylaxis | 0.5–0.6 mg once or twice daily |
| FMF | 1.2–2.4 mg/d in 1–2 divided doses |
| Pericarditis recurrence prevention | 0.5 mg BID (weight ≤70 kg: 0.5 mg once daily) × 3 months |
| Post-MI CV prevention (COLCOT) | 0.5 mg once daily (chronic) |
| Chronic CAD (LoDoCo2) | 0.5 mg once daily (chronic) |
| Post-pericardiotomy (COPPS-2) | 0.5 mg BID (weight-based) × 1 month, perioperative |

## Cross-References

- [[chronic-inflammation]] — primary aging hallmark targeted
- [[pathways/nlrp3-inflammasome]] — central mechanistic target (upstream of IL-1β)
- [[biomarkers/nlr-biomarker]] — NLR is a direct pharmacodynamic readout of colchicine's neutrophil-suppression effect
- [[molecules/compounds/canakinumab]] — IL-1β antibody acting downstream in the same NLRP3 → IL-1β → cardiovascular risk axis (CANTOS trial comparator)
- [[molecules/compounds/anakinra]] — IL-1 receptor antagonist; overlapping mechanism; pericarditis indication
- [[interventions/pharmacological/senolytics]] — distinct mechanistic class (senolytic vs anti-inflammatory); colchicine does not kill senescent cells

## Limitations and Gaps

- **No aging-first RCT:** COLCOT and LoDoCo2 enrolled based on cardiovascular criteria. The frailty, sarcopenia, and inflammaging-endpoint space is untested. #gap/needs-human-replication for aging-direct indication.
- **GI tolerability:** ~10–20% discontinue due to GI side effects even at the low 0.5 mg/d dose; this may limit population-level coverage in aging prevention protocols.
- **Infection signal:** The COLCOT pneumonia signal (serious AE rate 0.9% vs 0.4%, p=0.03) warrants monitoring in elderly populations with age-related immune vulnerability — the neutrophil suppression that reduces inflammaging may also impair acute infection defense. LoDoCo2 did not replicate this signal (pneumonia hospitalization 1.7% vs 2.0%, NS). #gap/needs-replication for the pneumonia risk in aging populations.
- **Drug interaction burden in older adults:** Polypharmacy (statins, macrolides, calcium-channel blockers) is common in the target aging population; CYP3A4/P-gp interactions requiring dose adjustment are frequent. #gap/dose-response-unclear for complex polypharmacy contexts.
- **NLRP3 specificity:** Colchicine's microtubule mechanism affects many cell processes beyond NLRP3; off-pathway effects (e.g., on spindle assembly, epithelial cell division) may have uncharacterized long-term consequences in rapidly dividing tissues (gut epithelium, bone marrow).
- **DrugBank ID not independently confirmed via live fetch** — DB00570 is the widely cited accession; verify on next lint pass. #gap/needs-canonical-id

## Footnotes

[^colcot2019]: doi:10.1056/NEJMoa1912388 · Tardif JC, Kouz S, Waters DD, et al. "Efficacy and Safety of Low-Dose Colchicine after Myocardial Infarction." *N Engl J Med* 2019;381(26):2497–2505 · n=4,745 (2,366 colchicine / 2,379 placebo) · rct · HR 0.77 (95% CI 0.61–0.96), p=0.02 (log-rank) · model: post-MI adults on standard therapy; median follow-up 22.6 months; GI AEs overall NS (17.5% vs 17.6%); pneumonia serious AE 0.9% vs 0.4% (p=0.03) · archive: local PDF available

[^lodoco2020]: doi:10.1056/NEJMoa2021372 · Nidorf SM, Fiolet ATL, Mosterd A, Eikelboom JW, et al. "Colchicine in Patients with Chronic Coronary Disease." *N Engl J Med* 2020;383(19):1838–1847 · n=5,522 (2,762 colchicine / 2,760 placebo) · rct · HR 0.69 (95% CI 0.57–0.83), p<0.001 (log-rank) · model: stable chronic coronary disease adults (prior CAD ≥6 months); median follow-up 28.6 months; 15.4% pre-randomization dropout mostly GI; pneumonia hospitalization NS (1.7% vs 2.0%); noncardiovascular death HR 1.51 (95% CI 0.99–2.31) · archive: local PDF available

[^copps2014]: doi:10.1001/jama.2014.11026 · Imazio M, Brucato A, Ferrazzi P, et al. "Colchicine for Prevention of Postpericardiotomy Syndrome and Postoperative Atrial Fibrillation: The COPPS-2 Randomized Clinical Trial." *JAMA* 2014;312(10):1016–1023 · n=360 (180 per arm) · rct · postpericardiotomy syndrome 19.4% vs 29.4% (absolute difference 10.0%, 95% CI 1.1%–18.7%; log-rank p=0.046; NNT=10) · postop AF: 33.9% vs 41.7% (NS by ITT) · model: cardiac surgery patients; perioperative 0.5 mg BID (≥70 kg) or 0.5 mg QD (<70 kg) × 1 month · archive: local PDF available

[^toldo2022]: doi:10.1016/j.pharmthera.2021.108053 · Toldo S, Mezzaroma E, Buckley LF, Potere N, Di Nisio M, Biondi-Zoccai G, Van Tassell BW, Abbate A · "Targeting the NLRP3 inflammasome in cardiovascular diseases." *Pharmacol Ther* 2022;236:108053 · review · n=N/A · model: mechanistic review; colchicine § 5.5 covers microtubule-disruption → NLRP3/ASC approximation interference + GDF-15-mediated neutrophil suppression; MCC950 + anakinra + canakinumab also reviewed · archive: local PDF available (HHS public access manuscript, PMC9187780) · citation_percentile=100

[^metaanalysis2023]: doi:10.1007/s00392-023-02254-9 · Authors TBD (archive: not_oa; no local PDF) · "A meta-analysis evaluating efficacy and safety of colchicine for prevention of major cardiovascular events in patients with coronary artery disease." *Clin Res Cardiol* 2023 · meta-analysis · pooled COLCOT + LoDoCo2 + smaller trials; ~25–30% RRR in MACE confirmed · archive: closed-access, not downloaded · **abstract-only verification**

[^metaanalysis2023b]: doi:10.3389/fcvm.2023.1194605 · Authors TBD (archive: pending gold OA) · "Early long-term low-dosage colchicine and major adverse cardiovascular events in patients with acute myocardial infarction: a systematic review and meta-analysis." *Front Cardiovasc Med* 2023 · meta-analysis · post-MI colchicine benefit confirmed across trials · **abstract-only verification**
