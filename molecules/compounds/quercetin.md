---
type: compound
aliases: [2-(3,4-dihydroxyphenyl)-3,5,7-trihydroxychromen-4-one, quercetin dihydrate, quercetol]
pubchem-cid: 5280343
inchikey: REFJWTPEDVJJIY-UHFFFAOYSA-N
chembl-id: CHEMBL50
drugbank-id: null
cas-number: 117-39-5
mechanisms: [senolytic, antioxidant, anti-inflammatory, pi3k-akt-inhibitor, bcl-xl-inhibitor]
measured-targets: ["[[pi3k-akt-pathway]]", "[[bcl-xl]]", "[[hsp90]]"]
hallmarks: ["[[altered-intercellular-communication]]", "[[cellular-senescence]]", "[[chronic-inflammation]]", "[[stem-cell-exhaustion]]"]
clinical-stage: phase-2-trials
human-evidence-level: limited
half-life: "~3.5 h (terminal, human oral); highly variable due to conjugation"
translation-gap: phase-3-rct-needed
next-experiment: "Adequately-powered Phase 2/3 RCT of D+Q stratified by senescent-cell burden (Farr 2024 Nat Med showed primary endpoint missed in unstratified n=60 but high T-cell-p16 tertile responded). Biomarker-stratified enrollment is now the rate-limiting step."
clinical-trials-active: 6
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "All four primary-source PDFs read end-to-end (Zhu 2015, Justice 2019, Hickson 2019, Li 2016). Canonical-database identity fields (PubChem CID, InChIKey, ChEMBL, CAS) not independently re-verified against databases — recommend cross-check on next lint pass. R34 backfill 2026-05-08: literature recency refresh added Farr 2024 Nat Med Phase 2 RCT bone-metabolism (n=60), Gonzales 2023 Nat Med SToMP-AD Phase 1 (n=5), Garbarino 2025 Neurotherapeutics biomarker companion, Liu 2025 Nat Med COIS-01 HNSCC Phase 2 (n=51), Farr 2025 Aging Cell biomarker characterization, and Lombardo 2026 PNAS demyelination safety signal — all from PubMed abstracts, full-PDF verification still pending. 2026-06-12: Farr 2024 PDF read end-to-end — corrected: (1) dosing schedule: D 2 days / Q 3 days per cycle (not both 2 days); (2) study design: open-label, not double-blind; (3) confirmed 5 cycles over 20 wk, every 28 days; (4) confirmed 36 SASP factors measured, no significant change; (5) confirmed T-cell p16 baseline-only (no post-treatment senescent-burden readout); (6) confirmed p=0.149 at 20 wk for P1NP. Gonzales 2023, Garbarino 2025, Liu 2025, Farr 2025, Lombardo 2026 — PDF verification still pending."
---

# Quercetin

A dietary flavonol found at high concentrations in capers, red onions, apples, tea, and leafy greens. Quercetin is the senolytic half of the canonical **D+Q regimen** (dasatinib + quercetin), the first senolytic combination demonstrated to reduce senescent-cell burden in living humans [^hickson2019]. Structurally similar to [[fisetin]] — quercetin has an additional hydroxyl group at ring position 5, giving the molecule 5 OH groups versus fisetin's 4. The extra hydroxyl increases antioxidant potency but does not appear to materially alter the core senolytic mechanism.

## Identity

- **PubChem CID:** 5280343
- **InChIKey:** REFJWTPEDVJJIY-UHFFFAOYSA-N
- **ChEMBL:** CHEMBL50
- **CAS:** 117-39-5
- **Class:** flavonol (flavonoid subclass)
- **Molecular formula:** C15H10O7
- **Molecular weight:** 302.23 g/mol
- **IUPAC name:** 2-(3,4-dihydroxyphenyl)-3,5,7-trihydroxychromen-4-one
- **Structural difference from fisetin:** additional 5-OH on the A-ring; fisetin lacks the 5-OH position

## Mechanism of action

### Senolytic activity — SCAP disruption

Zhu et al. 2015 performed transcriptomic analysis of senescent human umbilical vein endothelial cells (HUVECs) and mouse embryonic fibroblasts (MEFs), mapping upregulated pro-survival pathways that protect senescent cells from their own pro-apoptotic SASP [^zhu2015]. They identified these as **SCAPs** (Senescent-Cell Anti-Apoptotic Pathways) and screened candidate compounds for selective elimination of cells dependent on them.

Quercetin's SCAP targets in HUVECs [^zhu2015]:
- **BCL-xL** — quercetin reduces BCL-xL expression in senescent HUVECs (via EFNB1/BCL-xL network node); siRNA against EFNB1 or BCL-xL is selectively lethal to senescent HUVECs
- *(removed: PI3KCD-in-HUVECs claim)* — Per [[interventions/pharmacological/senolytics]] verifier round (Zhu 2015 Fig 1D vs 1E/G), **PI3KCD/PI3Kδ is preadipocyte-selective, not a HUVEC SCAP**. Quercetin's broad PI3K-class inhibition contributes to its preadipocyte coverage in the D+Q combination, but PI3KCD is not the dominant HUVEC mechanism — that's BCL-xL + EFNB1.

Dasatinib's complementary SCAP targets — ephrin receptor (EFNB/EPH) kinase signaling and serine protease inhibitors (serpins, including PAI-2/SERPINB2) — cover senescent preadipocytes (mesenchymal type), which quercetin alone does not efficiently eliminate [^zhu2015]. Serpins are preadipocyte SCAP nodes targeted by dasatinib, not a primary quercetin target. The two agents together achieve broader cell-type coverage than either alone.

**Cell-type selectivity:** Quercetin is most active against senescent endothelial cells (HUVECs) in vitro. In vivo, D+Q combination clears senescent cells across multiple tissues and cell types, but quercetin as monotherapy has incomplete coverage [^zhu2015]. #gap/needs-replication — monotherapy vs combination cell-type specificity has not been fully mapped in vivo.

### Other documented activities

- **ROS scavenging:** direct antioxidant via polyphenol electron donation; inhibits lipid peroxidation
- **Anti-inflammatory:** suppresses NF-κB-mediated transcription of TNFα, IL-1β, IL-6; inhibits COX and LOX enzymes; blocks TLR4/MyD88/PI3K complex formation [^li2016]. NLRP3 inflammasome inhibition is reported in other literature but is not addressed in Li 2016 — remove attribution to that claim here. #gap/unsourced — NLRP3 claim needs a specific primary citation
- **HSP90 inhibition:** reported at supraphysiological concentrations; may contribute to proteotoxic stress in senescent cells
- **Bcl-xL / Bcl-2 binding:** reported in silico and in some biochemical assays, but evidence is weaker than for navitoclax-class compounds; not the primary mechanism #gap/contradictory-evidence

## Dietary sources and typical intake

| Source | Quercetin content (mg/100 g fresh weight) |
|---|---|
| Capers (raw) | 234 |
| Red onions | ~32–50 |
| Apples (skin) | ~4–8 |
| Green tea (brewed) | ~2–4 per 200 mL |
| Broccoli | ~3 |

Average Western dietary intake is estimated at 10–30 mg/day — orders of magnitude below doses used in senolytic trials (~500–1,000 mg/day). #gap/unsourced — precise intake estimates vary widely by method and population; cross-check against a dietary survey citation.

## Pharmacokinetics

**Oral bioavailability is poor and highly variable**, which is the primary translational challenge.

- **Absorption:** Quercetin aglycone is absorbed in the small intestine, but most dietary quercetin is present as glycosides (quercetin-3-glucoside, quercetin-3-rutinoside). Deglycosylation by gut enzymes and microbiota determines effective absorption. Glycoside form significantly affects uptake kinetics [^li2016].
- **Conjugation:** Extensively conjugated to glucuronides and sulfates in intestinal epithelium and liver. Most circulating quercetin in plasma is in conjugate form; biological activity of conjugates is debated.
- **Plasma half-life:** 3.5 h (average terminal half-life, human oral) [^li2016]. The reported range across studies is 11–28 h for some metabolites, but the terminal half-life of quercetin itself averages 3.5 h. Peak plasma concentrations occur ~0.5–1 h post-ingestion. The comparison to fisetin's half-life in prior text was not sourced in Li 2016 and is removed here. #gap/unsourced — cross-compound PK comparison needs a dedicated PK study citation.
- **Protein binding:** >99% bound to albumin in plasma.
- **Food effects:** Co-ingestion with dietary fat increases absorption in overweight adults.

The short half-life is consistent with a **"hit-and-run" senolytic mechanism** — brief exposure above threshold is sufficient to trigger apoptosis in SCAP-dependent senescent cells, not requiring sustained plasma levels. This motivates the intermittent pulsed dosing schedule used in clinical trials (3 consecutive dosing days per week for 3 weeks in the Justice 2019 IPF protocol; a single 3-day course in the Hickson 2019 DKD protocol).

#gap/dose-response-unclear — Dose translation from mice to humans is uncertain. Trials use 500–1,000 mg/day quercetin (typically quercetin dihydrate or encapsulated form), but tissue exposure depends on formulation, food intake, and microbiome composition.

## Effects on aging hallmarks

| Hallmark | Effect | Evidence |
|---|---|---|
| [[cellular-senescence]] | D+Q reduces circulating senescent cell markers (p16, p21) in adipose tissue in humans | [^hickson2019] |
| [[cellular-senescence]] | D+Q clears senescent cells in progeroid and aged mice; reduces senescent cell burden and SASP | [^zhu2015] |
| [[chronic-inflammation]] | Quercetin reduces NF-κB-driven SASP cytokines (IL-6, IL-1β, TNFα) in vitro | [^li2016] |

## Dose-response and preclinical evidence

| Study | Organism | n | Dose | Route | Schedule | Effect |
|---|---|---|---|---|---|---|
| Zhu 2015 [^zhu2015] | HUVECs and preadipocytes (in vitro) | N=4–5 replicates | Q alone: optimal 10 μM (HUVECs), 20 μM (preadipocytes); D+Q combination: 100–200 nM D + 15–30 μM Q | In media | 3 days | Quercetin alone selectively eliminated senescent HUVECs (50% viability reduction at 10 μM vs. no effect on proliferating HUVECs); dasatinib alone preferentially eliminated senescent preadipocytes; combination (D+Q) achieved selective killing of both senescent preadipocytes and HUVECs |
| Zhu 2015 [^zhu2015] | Aged C57BL/6 mice (24-month-old males) | N=8/group | 5 mg/kg D + 50 mg/kg Q | Oral gavage | Single dose (cardiac/vascular experiments) | Reduced senescent cell burden; improved left ventricular ejection fraction and vascular reactivity; N=6–9/group for inguinal fat senescent cell clearance |
| Zhu 2015 [^zhu2015] | Ercc1−/Δ progeroid mice | N=7–8/group | 5 mg/kg D + 50 mg/kg Q | Oral gavage | Weekly from 4–6 weeks of age; euthanized 10–12 weeks | Extended healthspan; reduced composite aging score; delayed onset of kyphosis, tremor, ataxia, gait disorders; improved bone parameters and intervertebral disk GAG content |

**Extrapolation assessment (preclinical to human):**

| Dimension | Status |
|---|---|
| SCAP pathway conserved in humans? | yes — pathway identified directly in human HUVECs [^zhu2015] |
| Senescent cell clearance in humans? | yes (limited) — p16/p21 reduction in adipose biopsy [^hickson2019] |
| Replicated in healthy older humans? | no — trials to date in disease populations only; no healthy aging trial published |

## Human clinical evidence

### Justice 2019 — IPF open-label pilot (n=14) [^justice2019]

First-in-human trial of D+Q as a senolytic. Enrolled 14 patients with idiopathic pulmonary fibrosis (IPF), an age-related fibrotic lung disease with known senescent cell accumulation. Protocol: dasatinib 100 mg/day + quercetin **1,250 mg/day** (250 mg capsules × 5/day) for 3 consecutive days per week for 3 weeks (9 total treatment days). **100% retention** (14/14 completed) with no drug discontinuation.

**Primary endpoints** were retention rate and completion rate for planned clinical assessments — feasibility outcomes, not efficacy. **Secondary** functional endpoints showed statistically and clinically significant improvements:
- 6-minute walk distance (6MWT) increased by 21.5 m (p=0.012)
- 4-meter gait speed improved by 0.12 m/s (p=0.024)
- Timed 5-times sit-to-stand decreased by 2.2 s (p=0.013)
- Short Physical Performance Battery (SPPB) score improved (p=0.003)

Pulmonary function (FEV1, FVC) was **unchanged**, consistent with expectations given the short study duration and progressive nature of IPF. Correlations were observed between functional improvements and changes in SASP markers in plasma (23/48 SASP markers r ≥ 0.50). Limitations: open-label, no placebo arm, n=14, disease population only; study was powered for feasibility, not efficacy.

### Hickson 2019 — Diabetic kidney disease pilot (n=9) [^hickson2019]

9 patients with diabetic kidney disease (DKD); mean age 68.7 ± 3.1 years; 7 male, 2 female. Protocol: dasatinib 100 mg/day + quercetin 1,000 mg/day for 3 consecutive days, single course. Abdominal subcutaneous adipose tissue biopsies and attached skin biopsies obtained at Day 0 (baseline) and Day 14 (11 days after completing the last dose of D+Q).

Key findings (Day 14 vs. Day 0):
- Adipose p16INK4a+ cells reduced by **35%** in raw values (p=0.001)
- Adipose p21CIP1+ cells reduced by **17%** in raw values (p=0.009)
- Adipose SA-βgal+ cells reduced by **62%** in raw values (p=0.005)
- Adipose CD68+ macrophages decreased 28% (p=0.0001) — consistent with senescent-cell-anchored macrophage reduction
- Circulating SASP factors significantly reduced: IL-1α, IL-6, MMP-9, MMP-12 (all p<0.05)
- Adipocyte progenitor cell density/time in culture increased 8% (p=0.027), consistent with depletion of senescent and pre-senescent cells limiting replicative potential
- This was the first human in vivo demonstration that senolytics physically reduce senescent cell burden in a tissue biopsy

Limitations: no control arm, n=9, single-course treatment only, disease population; sample size was set for 80% power to detect a difference of 5% in SA-βgal activity.

### Farr 2024 — postmenopausal women, bone metabolism Phase 2 RCT (n=60) [^farr2024]

The first **placebo-controlled** D+Q senolytic RCT to publish primary results. Open-label design (over-encapsulation for double-blinding was cost-prohibitive). Sixty postmenopausal women age 60–90 randomized to intermittent D+Q vs placebo: D 100 mg/day × **2 consecutive days**, Q 1,000 mg/day (250 mg ×4) × **3 consecutive days**, every 28 days × **5 cycles** (20 weeks total). **Primary endpoint MISSED**: percent change at 20 weeks in CTx (bone resorption) — D+Q −4.1% (IQR −13.2, 2.6) vs control −7.7% (IQR −20.1, 14.3); p=0.611. Secondary P1NP (bone formation) increased significantly at 2 weeks (+16%, p=0.020) and 4 weeks (+16%, p=0.024) but returned to NS at 20 weeks (−9%, p=0.149). **Circulating SASP:** 36 SASP factors measured at baseline and 2 weeks — no significant D+Q vs control difference in any group. **Exploratory tertile analysis**: women with the highest T-cell p16 mRNA variant 5 (highest senescent-cell-burden tertile, n≈10/arm) showed concomitant P1NP +34% (p=0.035), CTx −11% (p=0.049) at 2 weeks, and radius BMD +2.7% (p=0.004) at 20 weeks. No serious adverse events. The first signal that **baseline senescent-cell burden may dictate D+Q response** — likely to shape future trial designs around biomarker-stratified enrollment. NCT04313634.

The biomarker companion paper (Farr 2025 Aging Cell) [^farr2025] characterizes **T-cell p16_variant 5** (one of two p16 protein-coding transcripts at the CDKN2A locus) as a more selective predictor of D+Q response than total p16 (variant 1+5). Variant 5 detection arises later than variant 1+5 in DNA-damage-induced senescence (Week 4 vs Week 1 in vitro), suggesting variant 5 is a marker of established senescent-cell abundance rather than acute senescence induction. A correlated plasma SASP panel performed equivalently in identifying responders and is more clinically tractable than the T-cell assay.

### Gonzales 2023 — SToMP-AD Phase 1 (n=5) [^gonzales2023]

Open-label proof-of-concept Phase 1 in n=5 early-symptomatic mild AD patients (mean age 76 ± 5 y, 40% female), 12-week dosing with intermittent D 100 mg + Q 1000 mg. **Confirmed CNS penetrance** of dasatinib (CSF:plasma ratio 0.42–0.92% in 4/5 participants) but **quercetin not detected in CSF**. Treatment well-tolerated; no early discontinuation. CSF IL-6 and GFAP increased post-treatment (p=0.008, p=0.028); cognitive endpoints unchanged. NCT04063124. The follow-up exploratory biomarker analysis (Garbarino 2025 Neurotherapeutics) [^garbarino2025] reported plasma fractalkine + MMP-7 increases, modest CSF Aβ/tau stability, and PBMC downregulation of pro-inflammatory transcripts (FOS, FOSB, IL1β, IL8, JUN, JUNB, PTGS2). The CSF-undetectable quercetin finding raises the question of whether D+Q's CNS effects are dasatinib-only or quercetin metabolites (which were not assayed in CSF) drive the brain pharmacology.

### Liu 2025 — COIS-01 D+Q + anti-PD-1 Phase 2 in HNSCC (n=51) [^liu2025]

Phase 2 trial of D+Q + anti-PD-1 neoadjuvant chemoimmunotherapy in head & neck squamous cell carcinoma. Major pathological response 33.3% (95% CI 16.6–54.7%); grade 3–4 AE rate 4.2%. Frames D+Q as an **immunosenescence-clearing adjunct** enabling checkpoint inhibitor response — a translational application separate from healthspan/aging applications. Mechanistic preclinical work in the same paper (naturally aged + Ercc1-deficient progeroid mice) demonstrates senolytic-mediated reduction of T/B-cell immunosenescence enables anti-PD-1 efficacy. NCT05724329.

### Active trials as of 2026-05-08 (CT.gov v2 API)

Six active D+Q senolytic trials (`clinical-trials-active: 6`):

| Trial | NCT | Phase | Status | n | Endpoint |
|---|---|---|---|---|---|
| Senolytics in IPF (Justice 2019) | NCT02874989 | Phase 1 pilot | Completed | 14 | Retention/completion + functional |
| Senolytics in DKD (Hickson 2019) | NCT02848131 | Phase 1 pilot | Completed | 9 | p16/p21/SA-βgal in adipose biopsy |
| D+Q in postmenopausal bone (Farr 2024) | NCT04313634 | Phase 2 RCT | Completed | 60 | CTx Δ at 20 wk (primary missed) |
| SToMP-AD Phase 1 (Gonzales 2023) | NCT04063124 | Phase 1 | Completed | 5 | CSF penetrance + safety |
| Senolytics to Improve Osteoporosis Therapy (SENOSTEO) | NCT06018467 | Phase 2 | Active, not recruiting | ~90 | BMD, bone turnover |
| D+Q in HIV (SPACE) | NCT07144293 | Phase 2 | Active, not recruiting | TBD | Physical function |
| Adipose snRNA-seq mapping | NCT05653258 | Phase 2/3 | Recruiting | TBD | Senescent adipose populations |
| SToMP-AD Phase 2 (Alzheimer's) | NCT04685590 | Phase 2 | Active, not recruiting | ~50 | AD progression |
| Sequential D+Q+fisetin+temozolomide | NCT07025226 | Early Phase 1 | Recruiting | TBD | Cancer-context safety |
| SEN-SURVIVORS (childhood cancer survivors) | NCT04733534 | Phase 2 | Active, not recruiting | TBD | Frailty in CCS |
| COIS-01 D+Q + anti-PD-1 in HNSCC (Liu 2025) | NCT05724329 | Phase 2 | Reported | 51 | Major pathological response |

#gap/needs-human-replication — As of 2026-05-08, the placebo-controlled D+Q RCT data is limited to a single trial (Farr 2024 n=60 in postmenopausal women) which **missed its primary endpoint** in the unstratified analysis. The exploratory tertile finding (high senescent-cell-burden subgroup responded) needs confirmatory trials with biomarker-stratified enrollment.

#gap/long-term-unknown — No trial has evaluated D+Q safety or efficacy beyond ~20 weeks (Farr 2024 dosing window).

### Preclinical safety signal — oligodendrocyte demyelination (Lombardo 2026 PNAS) [^lombardo2026]

Naïve young (3–4 mo) and aged (22 mo) C57BL/6J mice treated with D+Q developed significant corpus callosum demyelination vs. vehicle, **without overt cell death**. In vitro, primary rat oligodendrocyte progenitor cells in differentiation media exposed to D+Q showed reduced MBP and morphological complexity; bulk RNA-seq + IPA implicated ER stress / unfolded-protein-response signaling. The authors propose D+Q-treated oligodendrocytes resemble those in MS lesions and frame the finding as a *model* of OPC dysfunction. Translational implications for chronic-cycle senolytic dosing in older adults — particularly any cohort with subclinical white-matter pathology — are unresolved. Note that quercetin was undetectable in CSF in Gonzales 2023 SToMP-AD; if the demyelination signal in mice is quercetin-mediated, human CNS exposure may be below threshold, but if dasatinib alone or D+Q-induced peripheral SASP drives it, the human risk could remain. #gap/long-term-unknown #gap/contradictory-evidence

## D+Q regimen — complementarity rationale

The key insight of Zhu 2015 [^zhu2015] was that different senescent cell types rely on different SCAPs:

- **Senescent endothelial cells** (HUVECs) → depend on EFNB1/BCL-xL network → **quercetin-sensitive** (note: **PI3KCD is NOT a HUVEC SCAP** per Zhu 2015 Fig 1E/G — corrected from earlier framing; PI3KCD is preadipocyte-selective per Fig 1D)
- **Senescent preadipocytes** (mesenchymal) → depend on ephrin/EPH receptor kinases + PI3KCD + serpins (PAI-2/SERPINB2) → primarily **dasatinib-sensitive** (with quercetin's PI3K-class inhibition contributing)

No single agent covers both populations efficiently. D+Q combines quercetin's endothelial coverage with dasatinib's mesenchymal coverage, making the combination more effective in tissues containing mixed senescent cell types (adipose, lung, kidney). This SCAP-complementarity framework generalizes: future senolytic combinations may be rationally designed by matching agents to SCAP profiles of target cell populations.

## Classification

- **SENS strategy:** [[sens-damage-categories|ApoptoSENS]] — senolytic (clears intracellular junk-accumulating or pro-inflammatory senescent cells)
- **Primary hallmark target:** [[cellular-senescence]]
- **Secondary:** [[chronic-inflammation]] (via SASP suppression)
- **Clinical category:** dietary supplement / investigational drug (D+Q combination under IND)

## Comparison with [[fisetin]]

| Attribute | Quercetin | Fisetin |
|---|---|---|
| Structural class | Flavonol (5-OH present) | Flavonol (no 5-OH) |
| PubChem CID | 5280343 | 5281614 |
| Primary senolytic target | HUVECs (endothelial) | HUVECs + stem/progenitor cells |
| Human in vivo data | Yes — p16/p21 reduction in adipose (n=9) | Pending (Phase 2 NCT03675724) |
| Used as single agent in trials? | No — always co-administered with dasatinib | Yes — Phase 2 as monotherapy |
| Typical senolytic dose | 1,000–1,250 mg/day (pulsed 3 days; 1,250 mg/day in Justice 2019, 1,000 mg/day in Hickson 2019) | 20 mg/kg/day (pulsed 2 days) |

## Limitations and concerns

- **Polypharmacology:** Quercetin interacts with dozens of targets at micromolar concentrations; in vitro senolytic mechanism may differ from in vivo primary mechanism at lower achieved tissue concentrations.
- **CYP enzyme interactions:** Quercetin inhibits CYP3A4 and CYP2C8/9 in vitro — potential for drug-drug interactions when combined with dasatinib (itself a CYP3A4 substrate). Clinical significance of this interaction in the D+Q context has not been formally characterized. #gap/long-term-unknown
- **Population specificity:** Both published human trials enrolled patients with serious diseases (IPF, DKD). Whether senolytic D+Q benefits healthy older adults is extrapolation at this stage.
- **Formulation matters:** Quercetin aglycone, quercetin dihydrate, and glycoside forms have different absorption profiles. Trials use quercetin dihydrate; supplement products vary. Dose equivalence across formulations is not established. #gap/dose-response-unclear
- **Dasatinib dependency:** Most senolytic evidence for quercetin is combination data. Quercetin monotherapy senolytic evidence in vivo is limited to endothelial-rich tissues.
- **Conflict of interest:** Mayo Clinic / Kirkland group holds patents on D+Q senolytic uses; several trial investigators are named inventors. Independent replication outside the Mayo network is limited as of 2026; Liu 2025 (Sun Yat-sen) provides the first large-scale independent D+Q clinical evidence in HNSCC, but in a fundamentally different translational frame (immunotherapy adjunct, not aging-rejuvenation).
- **Primary-endpoint failure (Farr 2024):** the first placebo-controlled D+Q RCT failed to demonstrate efficacy on its pre-registered primary bone-resorption endpoint. Whether the exploratory tertile-stratified finding represents a real biomarker-conditional effect or a multiple-testing artifact is unresolved; resolution requires a confirmatory adequately-powered biomarker-stratified trial.

## Limitations and gaps

- #gap/needs-human-replication — Senolytic efficacy in healthy aging, not yet tested in RCT
- #gap/dose-response-unclear — Optimal dose, formulation, and pulsing schedule not established
- #gap/long-term-unknown — No safety or efficacy data beyond 3–6 months in humans
- #gap/contradictory-evidence — Bcl-xL targeting by quercetin claimed in some sources but weakly supported vs navitoclax class; requires primary affinity data

## Footnotes

[^zhu2015]: [[studies/zhu-2015-achilles-heel-senescent-cells]] · mouse n=6–9/group (aged C57BL/6); n=7–8/group (Ercc1−/Δ progeroid) · in-vitro (HUVEC, preadipocyte, MEF, BM-MSC) + in-vivo (C57BL/6, Ercc1−/Δ mice) · doi:10.1111/acel.12344 · Aging Cell 2015

[^justice2019]: [[studies/justice-2019-senolytics-ipf-pilot]] · n=14 · open-label pilot (no control arm) · model: stable IPF patients, age 70.8 ± 7.9 y · D 100 mg/day + Q 1,250 mg/day · 3 days/week × 3 weeks · doi:10.1016/j.ebiom.2018.12.052 · EBioMedicine 2019

[^hickson2019]: [[studies/hickson-2019-senolytics-diabetic-kidney]] · n=9 · open-label pilot (no control arm) · model: diabetic kidney disease, age 68.7 ± 3.1 y · D 100 mg/day + Q 1,000 mg/day × 3 days · doi:10.1016/j.ebiom.2019.08.069 · EBioMedicine 2019

[^li2016]: [[studies/li-2016-quercetin-inflammation-immunity]] · review · model: in-vitro and in-vivo mixed · doi:10.3390/nu8030167 · Nutrients 2016

[^farr2024]: Farr JN, Atkinson EJ, Achenbach SJ, et al. "Effects of intermittent senolytic therapy on bone metabolism in postmenopausal women: a phase 2 randomized controlled trial." *Nat Med* 2024;30(9):2605–2612 · n=60 (D+Q n=30 / placebo n=30) · randomized, open-label, placebo-controlled · primary endpoint CTx % change at 20 wk: p=0.611 (NS) · model: postmenopausal women age 60–90 y · D 100 mg/day × 2 consecutive days + Q 1,000 mg/day (250 mg ×4) × 3 consecutive days, every 28 days × 5 cycles (20 wk total) · 36 SASP factors measured at baseline and 2 wk post-dosing; no significant D+Q vs control difference · T-cell p16 mRNA measured at baseline only for stratification (not post-treatment) · doi:10.1038/s41591-024-03096-2 · PMID 38956196 · NCT04313634

[^farr2025]: Farr JN, Monroe DG, Atkinson EJ, et al. "Characterization of Human Senescent Cell Biomarkers for Clinical Trials." *Aging Cell* 2025;24(5):e14489 · biomarker companion to Farr 2024 · in-vitro DNA-damage timecourse + retrospective biomarker analysis of NCT04313634 cohort · doi:10.1111/acel.14489 · PMID 39823170

[^gonzales2023]: Gonzales MM, Garbarino VR, Kautz TF, et al. "Senolytic therapy in mild Alzheimer's disease: a phase 1 feasibility trial." *Nat Med* 2023;29(10):2481–2488 · n=5 · open-label proof-of-concept · model: early-symptomatic mild AD, mean age 76 ± 5 y · D 100 mg + Q 1000 mg × 2 consecutive days every 14 days × 6 cycles (12 wk) · CSF dasatinib detected in 4/5 (CSF:plasma ratio 0.42–0.92%); quercetin not CSF-detectable · doi:10.1038/s41591-023-02543-w · PMID 37679434 · NCT04063124 (SToMP-AD)

[^garbarino2025]: Garbarino VR, Palavicini JP, Melendez J, et al. "Evaluation of exploratory fluid biomarkers from a phase 1 senolytic trial in mild Alzheimer's disease." *Neurotherapeutics* 2025;22(4):e00591 · biomarker follow-up to Gonzales 2023 · paired t-tests on CSF/plasma/urine analytes pre/post · doi:10.1016/j.neurot.2025.e00591 · PMID 40274471 · NCT04063124

[^liu2025]: Liu N, Wu J, Deng E, et al. "Immunotherapy and senolytics in head and neck squamous cell carcinoma: phase 2 trial results." *Nat Med* 2025;31(9):3047–3061 · n=51 · COIS-01 Phase 2 single-arm trial · D+Q + anti-PD-1 neoadjuvant chemoimmunotherapy · 33.3% major pathological response (95% CI 16.6–54.7%) · grade 3–4 AEs 4.2% · doi:10.1038/s41591-025-03873-7 · PMID 40855191 · NCT05724329 (COIS-01); preceding NCT04718415 (OOC-001)

[^lombardo2026]: Lombardo ER, Pijewski RS, Lustig JT, et al. "Senolytic treatment induces oligodendrocyte dysfunction and demyelination in the corpus callosum." *Proc Natl Acad Sci U S A* 2026;123(12):e2524897123 · in-vivo (C57BL/6J young 3–4 mo + aged 22 mo) + in-vitro (primary rat OPCs) · D+Q produced significant CC demyelination without cell death; transcriptomic ER-stress / UPR signature in OPCs · doi:10.1073/pnas.2524897123 · PMID 41843680
