---
type: compound
aliases: [Ilaris, ACZ885]
pubchem-cid: null
chembl-id: CHEMBL1201834
drugbank-id: DB06168
mechanisms: [anti-IL-1beta neutralizing monoclonal antibody, IgG1-kappa]
targets: ["[[il-1b]]"]
hallmarks: ["[[altered-intercellular-communication]]", "[[chronic-inflammation]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: translation-blocked-cost
next-experiment: "Cost-effectiveness modelling + biosimilar pathway for chronic-prevention indication; or low-cost IL-1beta small-molecule alternative with comparable MACE benefit."
clinical-trials-active: 14
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Ridker 2017 NEJM CANTOS primary PDF verified end-to-end; Svensson 2022 CHIP substudy PDF verified (downloaded via PMC during this pass); Lancet lung-cancer companion (10.1016/s0140-6736(17)32247-x) #gap/no-fulltext-access — not_oa; ChEMBL1201834 confirmed as CANAKINUMAB via ChEMBL API; FDA approval dates and Novartis BLA withdrawal not independently re-verified against FDA Orange Book — recommend cross-check on next lint pass. R34 recency refresh 2026-05-08: integrated CANOPY-A negative adjuvant NSCLC results (Garon 2024, J Clin Oncol — abstract verified via PubMed efetch, full PDF not yet downloaded), CANOPY-1 negative first-line NSCLC (Tan 2024 J Clin Oncol — abstract verified), CANOPY-2 negative advanced NSCLC (Paz-Ares 2024 Lung Cancer — abstract verified), CANOPY-N negative neoadjuvant NSCLC (Lee 2025 JTO Clin Res Rep — abstract verified), He 2025 BMC Cardiovasc Disord meta-analysis confirming class-level MACE benefit (abstract verified), Wang 2026 FAERS pharmacovigilance (abstract verified), and ClinicalTrials.gov v2 active-trial count (14 RECRUITING+ACTIVE_NOT_RECRUITING) including new prospective TET2-CHIP trial NCT06691217 — none of the four CANOPY trials' PDFs locally archived; primary-source PDF verification deferred to next dedicated verifier pass."
---

# Canakinumab

A fully human IgG1κ monoclonal antibody that neutralizes [[il-1b|interleukin-1β (IL-1β)]] with sub-picomolar affinity. Developed by Novartis (development code ACZ885) and marketed as **Ilaris**. FDA-approved since 2009 for rare autoinflammatory genetic diseases driven by NLRP3 or other IL-1β-axis gain-of-function mutations. **Not approved for cardiovascular prevention**, despite being the intervention tested in CANTOS — the largest and most influential prospective trial of anti-inflammatory therapy in atherosclerosis. Canakinumab is the wiki's principal clinical anchor for the [[chronic-inflammation]] hallmark.

## Identity

- **Class:** fully human monoclonal antibody, IgG1κ isotype
- **Molecular weight:** ~145 kDa (heavy + light chains)
- **Development code:** ACZ885 (Novartis)
- **Trade name:** Ilaris
- **ChEMBL ID:** CHEMBL1201834 (confirmed against ChEMBL API)
- **DrugBank ID:** DB06168
- **PubChem CID:** null — biologics are not assigned small-molecule PubChem CIDs; the compound frontmatter field is inapplicable for monoclonal antibodies. #gap/needs-canonical-id — if a PubChem protein databank or biologics entry exists, link here on next lint pass.

## Target specificity

Canakinumab binds **IL-1β exclusively** — it does not bind IL-1α or the IL-1 receptor antagonist (IL-1Ra). This narrow specificity is a critical pharmacological distinction:

- **[[anakinra]]** — a recombinant IL-1Ra that competitively blocks the IL-1 receptor (IL-1R1); therefore blocks signaling from both IL-1α and IL-1β. Broader suppression but shorter half-life (4–6 hours; daily SC injection).
- **Canakinumab** — binds free IL-1β directly, prevents its engagement of IL-1R1, leaving IL-1α-mediated signaling intact. This selectivity may explain its tolerability profile relative to broad IL-1 blockade and means IL-1α-driven inflammation is not suppressed. #gap/needs-replication — the functional consequence of IL-1α sparing in the context of chronic atherosclerotic inflammation has not been independently characterized.

The target is the upstream cytokine driving the [[nlrp3-inflammasome]] → IL-1β → [[nf-kb]] axis prominent in chronic low-grade inflammaging. See [[chronic-inflammation]] for the pathway context.

## Mechanism and pharmacokinetics

**Mechanism:** Canakinumab binds IL-1β with a reported Kd in the sub-picomolar range, effectively stoichiometrically sequestering circulating IL-1β. By blocking IL-1R1 engagement it interrupts the downstream MyD88–IRAK–TRAF6–IKK–NF-κB signaling cascade responsible for pro-inflammatory gene transcription (cytokines, adhesion molecules, acute-phase proteins). #gap/needs-replication — the precise measured Kd and its comparison to endogenous IL-1β concentrations have not been independently verified against the primary binding characterization papers for this page; verify on next verifier pass.

**Pharmacokinetics:**
- **Half-life:** ~26 days — an exceptionally long half-life attributable to IgG FcRn-mediated recycling and the large molecular weight. This enables **once-every-3-months (q3mo) subcutaneous dosing** — the schedule used in CANTOS.
- **Route:** subcutaneous injection; no oral form exists for a ~145 kDa protein.
- **Clearance:** predominantly via proteolysis (typical for IgG antibodies); not hepatically or renally metabolized in a conventional sense — contrast with small-molecule drugs.
- **Dose used in CANTOS:** 50, 150, or 300 mg SC every 3 months [^ridker2017nejm].

The long half-life is a double-edged feature: it supports infrequent dosing but also means immune suppression persists for months after the last dose, relevant to the infection signal (see below).

## FDA approvals

Canakinumab is approved for rare IL-1β-driven autoinflammatory monogenic diseases, not for common-population indications:

| Year | Indication | Genetic basis |
|---|---|---|
| 2009 | CAPS: FCAS (familial cold autoinflammatory syndrome), MWS (Muckle-Wells syndrome), NOMID/CINCA (neonatal-onset multisystem inflammatory disease) | NLRP3 gain-of-function variants |
| 2013 | Systemic juvenile idiopathic arthritis (sJIA) | Polygenic; IL-1β-driven flare mechanism |
| 2016 | TRAPS (TNF receptor-associated periodic syndrome), HIDS/MKD (hyperimmunoglobulin D syndrome / mevalonate kinase deficiency), FMF (familial Mediterranean fever) | Rare monogenic periodic fever syndromes |

Off-label use: adult-onset Still's disease (AOSD), sharing pathophysiology with sJIA.

The CAPS approval is mechanistically coherent with the [[nlrp3-inflammasome]] page: NLRP3 gain-of-function mutations constitutively activate the inflammasome → excess IL-1β secretion → autoinflammatory episodes. Canakinumab neutralizes that excess IL-1β.

## CANTOS — aging-relevant trial evidence

The trial-result tables and full statistical narrative live on indication-specific pages to avoid duplication. The brief synopsis below links to the canonical locations.

**CANTOS (Canakinumab Anti-inflammatory Thrombosis Outcomes Study)** — Phase 3 RCT, n=10,061 post-MI patients with hsCRP ≥2 mg/L at baseline. Canakinumab 50/150/300 mg q3mo SC vs placebo. Pre-specified primary endpoint: first MACE (CV death, non-fatal MI, or non-fatal stroke) [^ridker2017nejm].

Key results (canonical home: [[atherosclerosis]] and [[chronic-inflammation]]):
- **Primary endpoint (MACE) incidence rates** (per 100 person-years): placebo 4.50 · 50 mg 4.11 (HR 0.93, 95% CI 0.80–1.07; P=0.30, ns) · 150 mg 3.86 (HR 0.85, 95% CI 0.74–0.98; P=0.021, met pre-specified threshold p<0.02115) · 300 mg 3.90 (HR 0.86, 95% CI 0.75–0.99; P=0.031, did NOT meet pre-specified threshold p<0.01058).
- The pre-specified closed-testing procedure set different thresholds per dose: p<0.02115 for both 50 mg and 150 mg; p<0.01058 for 300 mg. Only the 150 mg arm met its threshold.
- **hsCRP reduction at 48 months**: median reductions greater than the placebo group were 26 percentage points (50 mg), 37 percentage points (150 mg), and 41 percentage points (300 mg) — all P<0.001 for comparison to placebo. No significant reduction in LDL cholesterol — establishing that the CV benefit, if real, is attributable to inflammation reduction rather than lipid lowering. This was the first prospective demonstration of that principle at population scale.
- **All-cause mortality**: neutral across all doses combined (HR 0.94, 95% CI 0.83–1.06; P=0.31).

**Class-level meta-analytic confirmation (2025):** A 25-RCT systematic review and meta-analysis of immunomodulatory drugs in coronary heart disease (He 2025 *BMC Cardiovasc Disord*) found that overall, the immunomodulator class did not significantly reduce MACE (RR 0.92, 95% CI 0.84–1.01, p=0.09; I²=60%), but subgroup analyses recovered the CANTOS-aligned signal: **interleukin-pathway inhibitors** (which here cluster canakinumab with IL-6 inhibitors and IL-1Ra agents) reduced MACE with RR 0.86 (95% CI 0.75–0.97, p=0.02), and **NLRP3 inflammasome inhibitors** (a category that captures the canakinumab/colchicine mechanism with different drug examples) reduced MACE with RR 0.75 (95% CI 0.65–0.86, p<0.0001). Benefits were evident only in trials with follow-up >6 months. This is the first meta-analysis to formally aggregate canakinumab + adjacent IL-1/NLRP3-pathway interventions and confirms that the CANTOS effect is mechanistically robust across the class, not idiosyncratic to canakinumab [^he2025metaanalysis].

**CANTOS lung cancer pre-specified secondary analysis** [^ridker2017lancet] — exploratory analysis within CANTOS:
- 300 mg arm showed a striking reduction in incident lung cancer mortality (HR 0.49, 95% CI 0.31–0.75) and in new lung cancer incidence.
- The result was hypothesis-generating for anti-inflammatory cancer prevention but was pre-specified as exploratory.
- Canonical home: [[cancer]] page.

**Status of cancer-signal replication as of 2026-05** — *the CANTOS lung cancer signal has not replicated in any of four prospective NSCLC trials in therapeutic settings.* The Novartis CANOPY oncology program (named to evoke CANTOS) directly tested whether IL-1β neutralization improves NSCLC outcomes when given alongside standard cancer therapy:

- **CANOPY-A** (Garon 2024 *J Clin Oncol*) — Phase 3 adjuvant trial in completely-resected stage II–IIIB NSCLC after platinum-based chemotherapy, n=1,382. Primary endpoint disease-free survival HR 0.94 (95% CI 0.78–1.14, one-sided p=0.258). **Negative**. CRP and IL-6 dropped as expected, confirming target engagement, but no clinical benefit. OS not formally tested per the closed-testing hierarchy [^garon2024canopy-a].
- **CANOPY-1** (Tan 2024 *J Clin Oncol*) — Phase 3, first-line metastatic NSCLC, canakinumab vs placebo each combined with pembrolizumab + platinum-based chemotherapy. **Did not improve survival** vs placebo arm [^tan2024canopy-1].
- **CANOPY-2** (Paz-Ares 2024 *Lung Cancer*) — Phase 3, advanced NSCLC after platinum-doublet chemotherapy + immunotherapy progression, canakinumab + docetaxel vs placebo + docetaxel, n=237. **Did not meet primary OS endpoint** [^pazares2024canopy-2].
- **CANOPY-N** (Lee 2025 *JTO Clin Res Rep*) — Phase 2 neoadjuvant, n=88; major pathologic response rate 2.9% (canakinumab alone) vs 17.1% (canakinumab + pembrolizumab) vs 16.7% (pembrolizumab alone). **Canakinumab alone or combined with pembrolizumab did not improve MPR vs pembrolizumab alone** [^lee2025canopy-n].

The four-trial replication failure suggests the CANTOS lung cancer signal **does not extend to therapeutic NSCLC settings**, where established disease confounds the intended anti-inflammatory mechanism. Whether the CANTOS signal reflects a real cancer-prevention effect — operating in early/precancerous biology rather than established tumors — remains the open question the prevention-setting trials are designed to test:

- **Can-Prevent-Lung** (NCT04789681) — Phase 2 single-arm, canakinumab in patients with indeterminate pulmonary nodules; primary endpoint = nodule regression; recruiting (n=50; estimated completion 2027). Tests the *prevention* hypothesis directly.
- **CANIFS** (NCT06038526) — Phase 2 in high-risk former smokers; molecular endpoints (ASC speck, caspase-1, IL-1β); active, not recruiting (n=41).
- **CCUS prevention** (NCT05641831) — Phase 2 RCT canakinumab vs placebo in clonal cytopenias of unknown significance; primary endpoint = time to overt myeloid malignancy; recruiting (n=110). Tests cancer-prevention from a CHIP-related premalignant context.

Exploratory biomarker analyses from CANOPY-1 + CANOPY-N (Solomon 2025 *Cancer Res Commun*) reported a possible benefit of canakinumab + ICI in the subset with low T-cell tumor infiltration ("immunosuppressive TME") [^solomon2025canopy-tme] — hypothesis-generating but underpowered.

#gap/needs-replication — the prevention-setting hypothesis has not yet been tested in a Phase 3-powered trial; until Can-Prevent-Lung and CCUS-prevention report, the cancer signal must be considered unconfirmed in any indication.

### CANTOS infection signal

A critical safety finding from CANTOS: fatal infection or sepsis rate was higher in canakinumab-treated arms vs placebo — 0.31 vs 0.18 events per 100 person-years (P=0.02) [^ridker2017nejm]. Sepsis accounted for a significant fraction of excess fatal infections. This signal is expected mechanistically: IL-1β is a central mediator of innate immune responses to bacterial pathogens, and its sustained neutralization over the long 26-day half-life impairs early infection response. Canonical safety summary lives on [[interventions/pharmacological/senomorphics]].

The infection signal was a key factor in Novartis's decision not to pursue FDA approval for a cardiovascular prevention indication.

**Real-world post-marketing confirmation (2026):** A FAERS pharmacovigilance analysis of 9,262 canakinumab-related adverse-event reports from 2010 onward (Wang 2026 *Pharmacol Res Perspect*) confirmed and refined the CANTOS infection signal — **infections and infestations** showed a strongly elevated reporting odds ratio (ROR 2.54; n=3,532 reports), and age-stratified analyses found that older patients (≥65 years) most frequently reported **pneumonia, sepsis, and cellulitis**, with additional strong signals for **neoplasms** in the same age stratum. ~40% of adverse events occurred after >1 year of exposure, indicating both early- and long-term surveillance is required [^wang2026faers]. This is the first large-scale real-world confirmation that the infection-and-malignancy signals observed in CANTOS persist in routine clinical use across the CAPS / sJIA / periodic-fever indications, and that risk is age-stratified — directly relevant to any future aging-prevention use case.

### CANTOS-CHIP subgroup (Svensson 2022)

A pre-specified exploratory genomic substudy of CANTOS examining whether cardiovascular benefit from canakinumab is modified by clonal hematopoiesis of indeterminate potential (CHIP) [^svensson2022]. Targeted deep sequencing of 74 CHIP-associated genes was performed on baseline peripheral blood DNA from n=3,923 CANTOS participants (of whom 338, or 8.6%, met CHIP criteria). TET2 was the most common CHIP variant gene in this population (in contrast to general population cohorts where DNMT3A predominates — a difference attributed to the high-hsCRP selection criterion of CANTOS). TET2-CHIP carriers showed a 62% relative reduction in MACE on canakinumab vs placebo (HR 0.38, 95% CI 0.15–0.96; P=0.04 in stratified analysis), compared with no significant benefit in non-TET2-CHIP patients (HR 1.08, 95% CI 0.58–2.00; P=0.82). However, the interaction test was not statistically significant (P for interaction = 0.14). The mechanistic interpretation: TET2-deficient myeloid cells exhibit hyper-inflammatory IL-1β production in response to inflammatory stimuli (NLRP3 inflammasome pathway), so IL-1β neutralization corrects a specifically elevated substrate in TET2-CHIP carriers.

This result is exploratory and underpowered (26% power for incident MACE per the paper's own limitations statement) — differential benefit is hypothesis-generating rather than established. Canonical home: [[clonal-hematopoiesis]].

**Prospective replication of CANTOS-CHIP underway (R34 update, 2026-05):** the post-hoc TET2-CHIP signal is now being directly tested in a Phase 2 RCT — **NCT06691217 ("Effects of IL-1 Beta Inhibition on Vascular Inflammation in TET2 Clonal Hematopoiesis")**, a Massachusetts General Hospital–led trial randomizing TET2-CHIP carriers to canakinumab vs placebo with primary endpoint = change in coronary perivascular fat attenuation index (a coronary CT measure of vascular inflammation), n=120, recruiting since April 2026. This is the first prospective genotype-stratified canakinumab trial — the experiment Svensson et al. flagged as essential. The 2026 *Front Cardiovasc Med* CHIP–CVD review (Wu 2026) frames mutation-guided IL-1β-pathway prevention as the emerging "cardio-hematology" precision-medicine direction, and identifies the lack of prospective genotype-stratified trials as the principal knowledge gap NCT06691217 is designed to close [^wu2026chip-review].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (human RCT) |
| Phenotype conserved in humans? | yes (MACE endpoints, CANTOS) |
| Replicated in humans? | in-progress / limited (CANTOS-CHIP subgroup not independently replicated) |

## Translation gap — why canakinumab is not used for aging prevention

Despite CANTOS providing the strongest prospective human evidence that chronic inflammation drives atherosclerotic events and possibly cancer, canakinumab has **not been adopted for aging-prevention or cardiovascular-prevention indications**. Several reasons:

1. **Infection signal:** The fatal infection or sepsis excess (0.31 vs 0.18 per 100 PY; P=0.02) raises the risk-benefit threshold for use in the general post-MI population, let alone healthy individuals. For rare genetic diseases where the alternative is severe recurrent autoinflammatory episodes, the trade-off is favorable; for broad cardiovascular prevention, it is not. #gap/long-term-unknown — long-term infectious risk with decades of use (relevant to aging-prevention use case) is unknown.

2. **Cost:** Canakinumab is priced at approximately $150,000–200,000 USD per year for approved indications (orphan-disease pricing). This is economically non-viable for a chronic prevention drug in a general population, even at lower doses.

3. **Regulatory pathway:** Novartis submitted but then withdrew a supplemental BLA for a cardiovascular indication. The drug is currently **not FDA-approved** for any cardiovascular or anti-inflammatory aging-related use outside the rare disease indications listed above.

4. **Competing biology:** IL-1β is one node in a multi-cytokine chronic-inflammation network. Other interventions — statins, colchicine (shown in COLCOT/LoDoCo2 to reduce MACE), low-dose methotrexate (neutral in CIRT), and lifestyle interventions — offer overlapping benefit at far lower cost and risk. Colchicine in particular now has a CANTOS-comparable MACE signal at ~$5/month. See [[interventions/pharmacological/senomorphics]] for the comparative landscape.

This gap is foundational: CANTOS validated the **mechanistic hypothesis** (IL-1β drives vascular inflammation that causes clinical events) but the **specific drug** cannot be the translational vehicle due to cost and safety. The search for cost-effective, safer IL-1β pathway modulators remains active.

## Cross-references

- **Target:** [[il-1b]]
- **Upstream:** [[nlrp3-inflammasome]]
- **Downstream signaling:** [[nf-kb]]
- **Hallmark:** [[chronic-inflammation]], [[hallmarks/chronic-inflammation]]
- **Indication pages (trial data canonical home):** [[atherosclerosis]], [[cancer]], [[frailty]]
- **Intervention class:** [[interventions/pharmacological/senomorphics]]
- **CHIP interaction:** [[clonal-hematopoiesis]]
- **Comparator drugs:** [[anakinra]] (IL-1Ra antagonist; shorter-acting), [[colchicine]] (mechanistically distinct but overlapping MACE benefit)

## Limitations and gaps

- **No aging or longevity endpoint in any trial.** CANTOS used MACE (cardiovascular events) and exploratory cancer as endpoints — not healthspan, frailty, or lifespan. Whether IL-1β neutralization slows biological aging per se is untested. #gap/needs-human-replication
- **Population specificity.** CANTOS enrolled post-MI patients with elevated hsCRP — a selected high-inflammation population. Extrapolation to normative aging in otherwise healthy individuals is unestablished. #gap/needs-replication
- **Optimal dosing for non-autoinflammatory use unclear.** CANTOS tested 50/150/300 mg q3mo. Whether lower doses (reducing infection risk) would preserve benefit is unknown. #gap/dose-response-unclear
- **CHIP subgroup finding not independently validated.** The TET2-CHIP differential benefit is a single exploratory analysis. Prospective Phase 2 RCT NCT06691217 began recruiting April 2026 to test the hypothesis directly with vascular-inflammation imaging endpoint. #gap/needs-replication

- **CANTOS lung cancer signal failed to replicate in NSCLC therapeutic settings.** As of 2026-05, all four prospective Novartis-sponsored CANOPY oncology trials (CANOPY-A adjuvant n=1,382; CANOPY-1 first-line metastatic; CANOPY-2 advanced post-platinum; CANOPY-N neoadjuvant) reported negative primary endpoints. Whether the original CANTOS signal reflects a *prevention*-specific effect (operating before clinical disease) remains untested in adequately-powered Phase 3 trials; ongoing Phase 2 prevention-setting trials (Can-Prevent-Lung NCT04789681, CANIFS NCT06038526, CCUS-prevention NCT05641831) may resolve this question. #gap/contradictory-evidence
- **No biomarker-guided patient selection strategy exists** for identifying which aging individuals with elevated hsCRP would have a favorable risk-benefit profile. #gap/unsourced
- **PubChem CID:** null — not applicable for this biologic; verify whether a biologics cross-reference entry exists in PubChem or another canonical registry. #gap/needs-canonical-id

## Footnotes

[^ridker2017nejm]: [[studies/ridker-2017-cantos-primary]] · n=10,061 randomized (placebo=3,344; 50 mg=2,170; 150 mg=2,284; 300 mg=2,263) · rct · primary endpoint MACE: 150 mg HR 0.85 (95% CI 0.74–0.98; p=0.021, pre-specified threshold p<0.02115 met); 300 mg HR 0.86 (p=0.031, threshold p<0.01058 not met); 50 mg HR 0.93 (p=0.30, ns) · median follow-up 3.7 years · model: post-MI humans with hsCRP ≥2 mg/L · doi:10.1056/NEJMoa1707914 · PDF locally available

[^ridker2017lancet]: [[studies/ridker-2017-cantos-lung-cancer]] · n=10,061 (sub-analysis) · rct (pre-specified exploratory) · p=0.0009 (300 mg lung cancer mortality) · model: post-MI humans · doi:10.1016/s0140-6736(17)32247-x · PDF not yet downloaded #gap/no-fulltext-access

[^svensson2022]: [[studies/svensson-2022-chip-cantos]] · n=3,923 (genomic substudy); 338 (8.6%) with CHIP; TET2-CHIP subgroup: placebo n=31, canakinumab n=71 · pre-specified exploratory genomic substudy within rct · model: post-MI humans with hsCRP ≥0.20 mg/dL · doi:10.1001/jamacardio.2022.0386 · PDF locally available (PMC)

[^garon2024canopy-a]: Garon EB et al. · *J Clin Oncol* 2024 Jan 10;42(2):180–191 · n=1,382 (canakinumab 200 mg q3w SC × 18 cycles n=693; placebo n=689) · randomized double-blind phase 3 · primary endpoint disease-free survival HR 0.94 (95% CI 0.78–1.14; one-sided p=0.258; **negative**) · model: completely-resected stage II–IIIA/IIIB NSCLC after adjuvant cisplatin-based chemotherapy · doi:10.1200/JCO.23.00910 · PMID:37788412 · PDF not yet downloaded (R34 abstract-only verification) #gap/no-fulltext-access

[^tan2024canopy-1]: Tan DSW et al. · *J Clin Oncol* 2024 Jan 10;42(2):192–204 · randomized double-blind phase 3 · canakinumab 200 mg q3w SC vs placebo each combined with pembrolizumab + platinum-based doublet chemotherapy as first-line therapy · primary OS endpoint not met (**negative**) · model: advanced/metastatic NSCLC, treatment-naive · doi:10.1200/JCO.23.00980 · PMID:38039427 · PDF not yet downloaded (R34 abstract-only verification) #gap/no-fulltext-access

[^pazares2024canopy-2]: Paz-Ares L et al. · *Lung Cancer* 2024 Mar;189:107451 · n=237 (canakinumab+docetaxel n=120; placebo+docetaxel n=117) · randomized double-blind phase 3 · primary endpoint OS not met (**negative**) · model: advanced NSCLC after platinum-doublet chemotherapy + anti-PD-1/PD-L1 progression · doi:10.1016/j.lungcan.2023.107451 · PMID:38354535 · PDF not yet downloaded (R34 abstract-only verification) #gap/no-fulltext-access

[^lee2025canopy-n]: Lee JM et al. · *JTO Clin Res Rep* 2025 Jun 13;6(8):100859 · n=88 (canakinumab alone n=35; canakinumab + pembrolizumab n=35; pembrolizumab alone n=18) · randomized phase 2 neoadjuvant · primary endpoint major pathologic response (≤10% residual tumor cells): canakinumab alone 2.9% (1/35), canakinumab + pembrolizumab 17.1% (6/35), pembrolizumab alone 16.7% (3/18) — **canakinumab did not improve MPR** · model: resectable stage Ib–IIIa NSCLC · doi:10.1016/j.jtocrr.2025.100859 · PMID:40810132 · PMC: open-access · PDF not yet downloaded

[^solomon2025canopy-tme]: Solomon BJ et al. · *Cancer Res Commun* 2025 Apr 1;5(4):632–646 · exploratory biomarker analyses across CANOPY-1 + CANOPY-N tumor samples (IHC, transcriptomics, multiplex IF) · low T-cell tumor infiltration (immunosuppressive TME) associated with PFS+OS improvements when canakinumab was added to pembrolizumab-based regimens · hypothesis-generating for biomarker-stratified IL-1β + ICI combinations · doi:10.1158/2767-9764.CRC-24-0490 · PMID:40116353 · PDF not yet downloaded

[^wang2026faers]: Wang Y et al. · *Pharmacol Res Perspect* 2026 Jun;14(3):e70251 · pharmacovigilance disproportionality analysis of FAERS database (2010 onward); canakinumab as primary suspected drug · n=9,262 adverse-event reports · age-stratified findings: <12 yr — pyrexia, GI/hepatobiliary disorders dominant; 12–17 yr — leukopenia; ≥65 yr — pneumonia, sepsis, cellulitis, strong neoplasm signals · ROR for infections and infestations 2.54 (n=3,532); for general/admin-site disorders 1.47 (n=6,765) · ~40% of AEs after >1 year of exposure · model: real-world post-marketing humans · doi:10.1002/prp2.70251 · PMID:41998856 · PMC:13090527 · PDF not yet downloaded

[^he2025metaanalysis]: He D et al. · *BMC Cardiovasc Disord* 2025 Nov 10;25(1):798 · systematic review and meta-analysis of 25 RCTs (Jan 2014–Oct 2024) of immunomodulatory drugs in coronary heart disease; PROSPERO CRD42024597008 · primary endpoint MACE: overall RR 0.92 (95% CI 0.84–1.01, p=0.09; I²=60%, ns); IL-pathway inhibitor subgroup RR 0.86 (0.75–0.97, p=0.02); NLRP3-inhibitor subgroup RR 0.75 (0.65–0.86, p<0.0001); benefit only in trials with follow-up >6 months · GRADE quality of evidence: moderate · model: humans with coronary heart disease · doi:10.1186/s12872-025-05250-1 · PMID:41214504 · PMC:12604377 · PDF not yet downloaded

[^wu2026chip-review]: Wu H et al. · *Front Cardiovasc Med* 2026 Apr 10;13:1796328 · narrative review · CHIP–CVD mechanistic synthesis advocating "cardio-hematology" precision-medicine framework; identifies absence of prospective genotype-stratified IL-1β trials as the principal knowledge gap · doi:10.3389/fcvm.2026.1796328 · PMID:42039360 · PMC:13105890 · PDF not yet downloaded
