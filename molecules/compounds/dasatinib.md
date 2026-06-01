---
type: compound
aliases: [Sprycel, BMS-354825]
pubchem-cid: 3062316
inchikey: ZBNZXTGUTAYRHI-UHFFFAOYSA-N
chembl-id: CHEMBL1421
drugbank-id: DB01254
cas-number: 302962-49-8
mechanisms: [senolytic, tyrosine-kinase-inhibitor, bcr-abl-inhibitor, src-family-kinase-inhibitor, ephrin-receptor-inhibitor]
measured-targets: ["[[bcr-abl]]", "[[src-family-kinases]]", "[[ephrin-receptors]]", "[[kit]]", "[[pdgfr]]"]
hallmarks: ["[[altered-intercellular-communication]]", "[[cellular-senescence]]", "[[stem-cell-exhaustion]]"]
clinical-stage: fda-approved
human-evidence-level: limited
half-life: "3–5 h (terminal)"
translation-gap: phase-3-rct-needed
next-experiment: "Adequately-powered placebo-controlled Phase 2/3 RCT of D+Q stratified by senescent-cell burden (Farr 2024 Nat Med showed primary endpoint missed in unstratified n=60, but high-T-cell-p16 tertile responded). Biomarker-stratified enrollment is now the rate-limiting step for trial efficiency."
clinical-trials-active: 6
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Primary-source claims verified against Zhu 2015 (10.1111/acel.12344), Justice 2019 (10.1016/j.ebiom.2018.12.052), and Hickson 2019 (10.1016/j.ebiom.2019.08.069) full PDFs. CAS 302962-49-8 confirmed via PubChem CID 3062316 synonyms list. ChEMBL1421 confirmed via PubChem synonyms. DrugBank DB01254 and InChIKey not independently re-verified against those databases — recommend cross-check on next lint pass. R34 backfill 2026-05-08: literature recency refresh added Farr 2024 Nat Med Phase 2 RCT bone-metabolism (n=60), Gonzales 2023 Nat Med SToMP-AD Phase 1 (n=5), Garbarino 2025 Neurotherapeutics biomarker companion, Liu 2025 Nat Med COIS-01 HNSCC Phase 2 (n=51), Farr 2025 Aging Cell biomarker characterization, and Lombardo 2026 PNAS demyelination safety signal — all from PubMed abstracts, full-PDF verification still pending."
---


# Dasatinib

A small-molecule **tyrosine kinase inhibitor (TKI)** originally developed by Bristol-Myers Squibb and FDA-approved in 2006 (brand name Sprycel) for **chronic myeloid leukemia (CML)** and Philadelphia-chromosome-positive ALL. In aging research, dasatinib is the "D" component of the canonical **D+Q regimen** (dasatinib + [[quercetin]]) — the first senolytic drug combination to reach human clinical trials. It targets the ephrin-dependent survival pathways that protect certain senescent cell populations, complementing quercetin's BCL-xL / EFNB1 focus in HUVECs (per Zhu 2015 Fig 1E/G; PI3KCD/PI3Kδ is preadipocyte-selective per Fig 1D, NOT a HUVEC SCAP — and serpins are preadipocyte SCAP nodes within the dasatinib-covered population, not direct quercetin targets). Neither agent alone is a pan-senolytic; combination is required to cover a broader range of senescent cell types.

## Identity

- **PubChem CID:** 3062316
- **InChIKey:** ZBNZXTGUTAYRHI-UHFFFAOYSA-N
- **DrugBank:** DB01254
- **CAS:** 302962-49-8 (confirmed via PubChem CID 3062316 synonyms list)
- **ChEMBL:** CHEMBL1421 (confirmed via PubChem CID 3062316 synonyms list)
- **Molecular formula:** C22H26ClN7O2S
- **Molecular weight:** 488.0 g/mol
- **IUPAC name:** N-(2-chloro-6-methylphenyl)-2-[[6-[4-(2-hydroxyethyl)piperazin-1-yl]-2-methylpyrimidin-4-yl]amino]-1,3-thiazole-5-carboxamide
- **Class:** aminothiazole-based TKI (distinct from imatinib's piperazinyl-pyrimidine scaffold)

## Oncology context (origin)

Dasatinib was developed to overcome imatinib resistance in CML; it binds both the **active and inactive** conformations of the ABL kinase (imatinib binds only the inactive form), giving it broader coverage of BCR-ABL point mutations. Primary oncology targets [^pkpubchem]:

- **BCR-ABL** — inhibitory IC50 in the low-nM range
- **SRC family kinases** (SRC, LCK, YES, FYN) — relevant to its senolytic mechanism
- **c-KIT, PDGFR-β** — additional kinase targets
- **EPHA2 and other EPH receptors** — directly relevant to SCAP disruption in senescent preadipocytes

FDA-approved indications: chronic-phase, accelerated-phase, and blast-phase CML; Philadelphia-chromosome-positive ALL.

## Mechanism as a senolytic

The senolytic mechanism was first characterized by Zhu et al. 2015 [^zhu2015] using transcriptomic analysis of senescent vs. non-senescent cells. Senescent cells upregulate a network of **SCAPs (Senescent-Cell Anti-Apoptotic Pathways)** that protect them from the pro-apoptotic signals in their own SASP environment.

Dasatinib selectively disrupts the **ephrin-dependent SCAP arm**:

- Senescent human preadipocytes and other stromal cells overexpress **EFNB1** and **EFNB3** (ephrin ligands) and cognate **EPH receptors**
- This ephrin signaling provides survival input via downstream SRC-family kinase activity
- Dasatinib's SRC/EPH inhibition collapses this survival signal, triggering apoptosis in ephrin-dependent senescent cells
- In parallel, dasatinib also modulates **BCR-ABL**-related signaling in hematopoietic senescent cells (relevant to its cell-type specificity pattern)

This mechanism is **distinct from and complementary to** [[quercetin]]'s mechanism, which targets **BCL-xL and EFNB1 in HUVECs** (per Zhu 2015 Fig 1E/G) — PI3KCD/PI3Kδ is **preadipocyte-selective** (Fig 1D), not a HUVEC SCAP, and was previously misframed in this and other wiki pages. Serpins (PAI-1/PAI-2) are upregulated SCAPs in preadipocytes within the dasatinib-covered population, but quercetin does not directly target serpins. Neither agent is sufficient alone to clear the full spectrum of p16+/p21+ senescent cells [^zhu2015].

| Senescent cell type | D effective? | Q effective? | D+Q effective? |
|---|---|---|---|
| Human preadipocytes (subcutaneous) | Yes | No | Yes |
| Human umbilical vein endothelial cells (HUVECs) | No | Yes | Yes |
| Murine embryonic fibroblasts (MEFs, Ercc1-deficient) | No | Yes | Yes |

#gap/needs-replication — The cell-type specificity table above is derived from in vitro viability assays (crystal violet / ATPLite) in Zhu et al. 2015; it may not fully capture in vivo tissue-level specificity. The original wiki entry listed "partial" dasatinib efficacy against HUVECs and included murine cardiac fibroblasts as a tested cell type — neither is supported by Zhu 2015 (Fig. 2A shows D alone does not significantly reduce senescent HUVEC viability; cardiac fibroblast SCAP specificity was not assayed in vitro in this paper).

## Effects on aging hallmarks

| Hallmark | Effect | Evidence |
|---|---|---|
| [[cellular-senescence]] | D+Q reduces senescence markers (p16, p21, SA-β-gal) in murine adipose, kidney, heart; and in human adipose biopsies | [^zhu2015], [^hickson2019] |
| [[chronic-inflammation]] | D+Q reduces circulating SASP cytokines (IL-6, TNF, MMP-12, MMP-13) in mice and reduces adipose senescence-associated secretory phenotype in humans | [^zhu2015], [^hickson2019] |

## Pharmacokinetics

| Parameter | Value | Notes |
|---|---|---|
| Oral bioavailability | ~14–34% (variable) | Low; food has minimal effect (high-fat meal +14% AUC) |
| Tmax | 0.5–6 h | Rapid absorption |
| Half-life (terminal) | 3–5 h | Supports intermittent dosing logic |
| Protein binding | ~96% | Primarily albumin |
| Metabolism | CYP3A4 (major) | Drug-drug interactions with CYP3A4 inhibitors/inducers clinically significant |
| Active metabolite | M4 (equipotent to parent) | ~5% of total AUC |

[^pkpubchem]: PubChem CID 3062316, Pharmacology and Biochemistry section · in-silico/regulatory-label compilation · model: human PK from label studies

The short half-life is consistent with a **"hit-and-run" senolytic mechanism**: intermittent dosing (e.g., 100 mg D1-D2 of a monthly cycle) delivers a senolytic pulse without continuous receptor occupancy, reducing cumulative toxicity risk relative to oncology dosing (100 mg/day continuous).

#gap/dose-response-unclear — The optimal senolytic dose, dosing interval, and duration for aging applications have not been established in prospective dose-finding studies. Aging-application doses used in pilot trials (100 mg × 2 days/3 weeks) are substantially lower than continuous CML dosing.

## Dose-response evidence

| Study | Organism | N | Dose | Schedule | Key finding |
|---|---|---|---|---|---|
| Zhu 2015 [^zhu2015] | Aged C57BL/6 mice (>24 mo) + Ercc1-/Δ progeroid, irradiated WT, and mdx dystrophic mice | N=6–14/group depending on model | 5 mg/kg D + 50 mg/kg Q | Single oral gavage (aged mice); weekly oral gavage (Ercc1-/Δ progeroid) | First demonstration of in vivo senescent-cell elimination; functional improvements in frailty phenotypes, cardiovascular function, and exercise endurance |
| Justice 2019 [^justice2019] | Humans with IPF | n=14 | 100 mg D + 1250 mg Q/day | 3 consecutive days/week × 3 weeks (Days 1–3, 8–10, 15–17; 9 total dosing days), open-label pilot | Improved 6-min walk distance, 4-m gait speed, chair-stands, and SPPB score at 3-week endpoint |
| Hickson 2019 [^hickson2019] | Humans with diabetic kidney disease | n=9 | 100 mg D + 1000 mg Q/day (500 mg ×2) | 3-day course (Days 1–3); adipose biopsy at Day 0 and Day 14 | First human tissue evidence: p16+ cells −35% (p=0.001), p21+ cells −17% (p=0.009), SA-βgal+ cells −62% (p=0.005) in adipose biopsies at Day 14 |

## Human clinical evidence

**Justice et al. 2019 (IPF, n=14)** [^justice2019]: First-in-human D+Q trial. Open-label, single-arm pilot with no control arm. Fourteen participants (12 non-Hispanic white, 2 Hispanic white; 2 women) aged 70.8 ± 7.9 years with stable mild-to-severe IPF. Dose: dasatinib 100 mg/day + quercetin 1250 mg/day (not 1000 mg) for 3 consecutive days/week × 3 weeks (Days 1–3, 8–10, 15–17; 9 total dosing days). Statistically significant and clinically meaningful improvements were reported in 6-minute walk distance, 4-m gait speed, 5-repetition chair-stands, and Short Physical Performance Battery (SPPB) score at the 3-week endpoint (p<0.05 all). Grip strength and spirometric measures (FEV1, FVC) did not change. Circulating SASP factor changes were inconclusive. Axillary skin biopsy was planned as a senescence readout but was omitted due to technical complications. The n is too small to draw efficacy conclusions.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (ephrin/SRC signaling) |
| Phenotype conserved in humans? | yes (in-progress) |
| Replicated in humans? | in-progress (multiple Phase 2 trials ongoing) |

**Hickson et al. 2019 (DKD, n=9)** [^hickson2019]: Nine subjects (7 male, 2 female; mean age 68.7 ± 1.0 years; eGFR 27.0 ± 0.7 mL/min/1.73m²) with diabetes mellitus and CKD (on diabetes therapy). Dose: dasatinib 100 mg/day + quercetin 1000 mg/day (500 mg twice daily) for 3 consecutive days (Days 1–3). Abdominal subcutaneous adipose tissue biopsies collected at Day 0 (baseline) and Day 14 (11 days after completing the 3-day course). Demonstrated: p16INK4A+ cells reduced 35% (p=0.001); p21CIP1+ cells reduced 17% (p=0.009); SA-βgal+ cells reduced 62% (p=0.005); CD68+ macrophages per adipocyte reduced 28% (p<0.0001); crown-like structures reduced significantly (p=0.001). Skin biopsies from the overlying epidermal layer also showed reductions in p16INK4A+ and p21CIP1+ cells. Circulating SASP factors (IL-1α, IL-6, MMPs-9 and -12) significantly lower at Day 14. Adipocyte progenitor replicative potential increased 86% over 3 passages (p=0.027). First direct tissue-level evidence that senolytics reduce senescent cells in living humans. Sample size is very small; no control arm; not powered for clinical outcomes.

### Phase 2 RCT — postmenopausal women, bone metabolism (Farr 2024) [^farr2024]

The first placebo-controlled D+Q senolytic RCT to publish results. Sixty (n=60) postmenopausal women randomized to intermittent D+Q (D 100 mg + Q 1000 mg, 2 consecutive days every 4 weeks × 5 cycles) vs placebo. **Primary endpoint MISSED**: percentage change at 20 weeks in CTx (bone resorption marker) — D+Q −4.1% (IQR −13.2, 2.6) vs control −7.7% (IQR −20.1, 14.3); p=0.611. P1NP (bone formation) increased significantly at 2 weeks (+16%, p=0.020) and 4 weeks (+16%, p=0.024) but normalized by 20 weeks. **Exploratory** finding: women in the highest tertile for T-cell p16 mRNA (high senescent-cell-burden subgroup) showed concomitant P1NP +34% (p=0.035), CTx −11% (p=0.049) at 2 weeks and radius BMD +2.7% (p=0.004) at 20 weeks. No serious adverse events. Trial: NCT04313634.

This is the first hard signal that **baseline senescent-cell burden may dictate response** to D+Q — a therapeutic-efficiency framework that will likely shape future trial designs. The biomarker companion paper (Farr 2025 Aging Cell) [^farr2025] characterizes T-cell p16_variant 5 as a more predictive selection biomarker than total p16 (variant 1+5) and identifies a plasma SASP panel that performs equivalently to the more technically challenging T-cell assay.

### Phase 1 — mild Alzheimer's (SToMP-AD, Gonzales 2023) [^gonzales2023]

Open-label proof-of-concept Phase 1 in n=5 early-symptomatic AD patients (mean age 76 ± 5 y; 40% female). 12-week dosing with intermittent D 100 mg + Q 1000 mg. **Confirmed CNS penetrance**: dasatinib detected in CSF in 4/5 participants (CSF:plasma ratio 0.42–0.92%); quercetin not CSF-detectable. Well-tolerated; no early discontinuation. CSF IL-6 and GFAP increased post-treatment (p=0.008, p=0.028); cognitive endpoints unchanged. The follow-up exploratory biomarker analysis (Garbarino 2025 Neurotherapeutics) [^garbarino2025] reported plasma fractalkine + MMP-7 increases, modest CSF Aβ/tau stability, and PBMC downregulation of pro-inflammatory transcripts (FOS, FOSB, IL1β, IL8, JUN, JUNB, PTGS2). Trial: NCT04063124. SToMP-AD Phase 2 RCT continues at NCT04685590.

### Phase 2 — head & neck squamous cell carcinoma (COIS-01, Liu 2025) [^liu2025]

Phase 2 trial (n=51) of **D+Q + anti-PD-1** neoadjuvant chemoimmunotherapy in HNSCC. Major pathological response rate 33.3% (95% CI 16.6–54.7%); grade 3–4 adverse event rate 4.2%. Provides a separate translational frame for D+Q — as an *immunosenescence-clearing adjunct* enabling checkpoint inhibitor response — distinct from healthspan/aging applications. Mechanistic preclinical work in the same paper used naturally aged mice and Ercc1-deficient progeroid mice to show senolytic-mediated reduction of T/B-cell immunosenescence enables anti-PD-1 efficacy. Trial: NCT05724329.

### Active trials as of 2026-05-08 (CT.gov v2 API)

Six trials with `RECRUITING` or `ACTIVE_NOT_RECRUITING` status (`clinical-trials-active: 6`):

| Trial | NCT | Phase | Status | Focus |
|---|---|---|---|---|
| Senolytics to Improve Osteoporosis Therapy (SENOSTEO) | NCT06018467 | Phase 2 | Active, not recruiting | Bone density |
| D+Q in HIV (SPACE trial) | NCT07144293 | Phase 2 | Active, not recruiting | Physical function |
| snRNA-seq mapping of senescent adipose populations | NCT05653258 | Phase 2/3 | Recruiting | Adipose senescence map |
| SToMP-AD Phase 2 (Alzheimer's) | NCT04685590 | Phase 2 | Active, not recruiting | AD progression |
| Sequential D+Q+fisetin+temozolomide | NCT07025226 | Early Phase 1 | Recruiting | Cancer-context |
| SEN-SURVIVORS (childhood cancer survivors) | NCT04733534 | Phase 2 | Active, not recruiting | Frailty in CCS |

#gap/needs-human-replication — No completed RCT with a control arm has yet demonstrated that D+Q reduces senescent cell burden or improves clinical outcomes in aging populations. All human evidence is from open-label pilots with small n. Definitive efficacy unknown.

## Safety and adverse effects

**Oncology-dose safety profile (100 mg/day continuous):** well-characterized. Major adverse effects include:
- Myelosuppression: anemia, neutropenia, thrombocytopenia
- **Pleural effusions** (most distinguishing toxicity; ~30% incidence at 100 mg/day)
- QTc prolongation (less frequent)
- Peripheral edema, headache, nausea

**Senolytic-dose safety (100 mg × 2 days/intermittent cycle):** adverse effects reported in Justice 2019, Hickson 2019, Gonzales 2023 SToMP-AD, and Farr 2024 RCT (n=60, intermittent over 20 weeks) pilots/trials were described as generally mild and transient with no serious adverse events attributed to D+Q. However: #gap/long-term-unknown — dedicated long-term safety data for repeated intermittent senolytic cycles over years are absent. Even brief exposures can cause myelosuppression in susceptible individuals.

**New preclinical safety signal — oligodendrocyte demyelination (Lombardo 2026 PNAS) [^lombardo2026]:** Naïve young (3–4 mo) and aged (22 mo) C57BL/6J mice treated with D+Q developed significant demyelination in the corpus callosum vs. vehicle, without overt cell death. In vitro, primary rat oligodendrocyte progenitor cells exposed to D+Q in differentiation media showed reduced MBP and morphological complexity; bulk RNA-seq + IPA implicated ER stress / unfolded-protein response signaling. The authors note that D+Q-treated oligodendrocytes resemble those in MS lesions and propose D+Q as a *model* of oligodendrocyte dysfunction rather than recommending discontinuation. Translational implications for chronic-cycle senolytic dosing in older adults — particularly any cohort with subclinical white-matter pathology — are unresolved. #gap/long-term-unknown #gap/contradictory-evidence — preclinical signal not yet evaluated in humans on D+Q; CSF biomarkers of oligodendrocyte stress (e.g., MBP, NFL) were not reported in Gonzales 2023 / Garbarino 2025 SToMP-AD analyses.

**Drug interactions (CYP3A4):** dasatinib is a CYP3A4 substrate and weak inhibitor. Co-administration with strong CYP3A4 inhibitors (ketoconazole, grapefruit) substantially increases exposure; inducers (rifampin) reduce it. Clinically relevant interaction with [[quercetin]] itself (quercetin is a moderate CYP3A4 inhibitor — may raise dasatinib AUC in D+Q combination) #gap/unsourced — quantitative D+Q interaction data not confirmed from primary source; flag for verification.

## Classification

- **SENS strategy:** [[sens-damage-categories|ApoptoSENS]] — senolytic (clears ephrin-dependent senescent cells)
- **Hallmark target:** [[cellular-senescence]]
- **Intervention class:** see [[interventions/pharmacological/senolytics]]
- **Clinical category:** FDA-approved oncology drug / investigational senolytic (off-label aging use)

## Relation to quercetin (D+Q rationale)

The mechanistic rationale for combining dasatinib with [[quercetin]] is that each agent kills different senescent cell subtypes due to distinct SCAP targeting [^zhu2015]:

- **Dasatinib** — ephrin/SRC-dependent senescent preadipocytes, hematopoietic cells
- **[[quercetin]]** — BCL-xL / EFNB1-dependent senescent endothelial cells (HUVECs); MEFs (per Zhu 2015 Fig 1E/G; PI3KCD is preadipocyte-selective per Fig 1D, not a HUVEC node)

Neither alone achieves broad senolytic coverage. This is the defining feature of the D+Q strategy — deliberately polypharmacological. Contrast with [[fisetin]], which has a partially overlapping but distinct cell-type selectivity profile.

## Limitations and gaps

- **Limited human RCT data:** As of 2026-05-08, only one placebo-controlled D+Q senolytic RCT has reported (Farr 2024 n=60 postmenopausal bone) — and the **primary endpoint missed** in the unstratified analysis. Two open-label pilots (Justice 2019 IPF n=14, Hickson 2019 DKD n=9) and one Phase 1 AD trial (Gonzales 2023 n=5) preceded it. The Liu 2025 HNSCC Phase 2 (n=51) supplies a separate translational frame (immunotherapy adjunct, not aging-rejuvenation). Net: D+Q has crossed into the "biomarker-stratified efficacy unknown" tier but has not yet demonstrated unconditional aging-application benefit in a controlled trial.
- **CYP3A4 interaction with quercetin partner:** pharmacokinetic interaction in the D+Q combination has not been rigorously characterized. Quercetin inhibits CYP3A4 and may elevate dasatinib exposure above intended senolytic dose.
- **Cell-type specificity in humans:** the mouse senescent-cell profile that validates D+Q combinability may not translate exactly to human tissue compositions.
- **Long-term senolytic safety:** repeated intermittent senolytic courses over years have no safety track record. Theoretical concern: inadvertent elimination of beneficial "senescent-like" cells (e.g., wound-healing myofibroblasts, placental senescent cells).
- **Biomarker gap:** no validated, non-invasive circulating biomarker for senescent-cell burden in humans; trials rely on adipose biopsy or peripheral blood surrogates. #gap/no-mechanism — single reliable senescent-cell load biomarker absent.
- **Selection bias:** IPF and DKD populations (high senescent-cell burden) may not be representative of general aging populations; beneficial effects may be smaller in otherwise healthy older adults.
- Commercial conflict: Mayo Clinic and several Kirkland lab authors hold patents on senolytic use.

## Footnotes

[^zhu2015]: [[studies/zhu-2015-senolytic-drugs]] · n=variable (N=8 for aged C57BL/6 fat/liver; N=7–8 for Ercc1-/Δ; N=6–9 for irradiated leg; N=8 for cardiac/vasomotor) · in-vitro + in-vivo · model: human preadipocytes and HUVECs (in vitro); aged C57BL/6 mice (>24 months), Ercc1-/Δ progeroid mice, irradiated wild-type mice, and mdx dystrophic mice (in vivo) · dose: D 5 mg/kg + Q 50 mg/kg, single oral gavage · doi:10.1111/acel.12344 · note: INK-ATTAC transgenic mice used only as genetic-clearance comparator, not treated with D+Q

[^justice2019]: [[studies/justice-2019-senolytics-ipf]] · n=14 · in-vivo (human, open-label single-arm pilot, no control) · model: IPF patients age 55–84 · dose: D 100 mg + Q 1250 mg/day × 3 days/week × 3 weeks (9 total dosing days) · doi:10.1016/j.ebiom.2018.12.052

[^hickson2019]: [[studies/hickson-2019-senolytics-dkd]] · n=9 (7M/2F; mean age 68.7y; eGFR 27.0) · in-vivo (human, open-label Phase 1 pilot, no control) · model: diabetic kidney disease patients · dose: D 100 mg + Q 1000 mg/day (500 mg ×2) × 3 days · biopsy Day 0 and Day 14 · doi:10.1016/j.ebiom.2019.08.069

[^pkpubchem]: PubChem CID 3062316 pharmacology section · regulatory-label compilation · model: human PK from FDA label studies

[^farr2024]: Farr JN, Atkinson EJ, Achenbach SJ, et al. "Effects of intermittent senolytic therapy on bone metabolism in postmenopausal women: a phase 2 randomized controlled trial." *Nat Med* 2024;30(9):2605–2612 · n=60 (D+Q n=30 / placebo n=30) · randomized, double-blind, placebo-controlled · primary endpoint p=0.611 (NS) · model: postmenopausal women age ≥70 · D 100 mg + Q 1000 mg × 2 consecutive days every 4 weeks × 5 cycles (20 wk) · doi:10.1038/s41591-024-03096-2 · PMID 38956196 · NCT04313634

[^farr2025]: Farr JN, Monroe DG, Atkinson EJ, et al. "Characterization of Human Senescent Cell Biomarkers for Clinical Trials." *Aging Cell* 2025;24(5):e14489 · biomarker companion to Farr 2024 · in-vitro DNA-damage timecourse + retrospective biomarker analysis of NCT04313634 cohort · doi:10.1111/acel.14489 · PMID 39823170

[^gonzales2023]: Gonzales MM, Garbarino VR, Kautz TF, et al. "Senolytic therapy in mild Alzheimer's disease: a phase 1 feasibility trial." *Nat Med* 2023;29(10):2481–2488 · n=5 · open-label proof-of-concept · model: early-symptomatic mild AD, mean age 76 ± 5 y · D 100 mg + Q 1000 mg × 2 consecutive days every 14 days × 6 cycles (12 wk) · CSF dasatinib detected in 4/5 (CSF:plasma ratio 0.42–0.92%) · doi:10.1038/s41591-023-02543-w · PMID 37679434 · NCT04063124 (SToMP-AD)

[^garbarino2025]: Garbarino VR, Palavicini JP, Melendez J, et al. "Evaluation of exploratory fluid biomarkers from a phase 1 senolytic trial in mild Alzheimer's disease." *Neurotherapeutics* 2025;22(4):e00591 · biomarker follow-up to Gonzales 2023 · paired t-tests on CSF/plasma/urine analytes pre/post · doi:10.1016/j.neurot.2025.e00591 · PMID 40274471 · NCT04063124

[^liu2025]: Liu N, Wu J, Deng E, et al. "Immunotherapy and senolytics in head and neck squamous cell carcinoma: phase 2 trial results." *Nat Med* 2025;31(9):3047–3061 · n=51 · COIS-01 Phase 2 single-arm trial · D+Q + anti-PD-1 neoadjuvant chemoimmunotherapy · 33.3% major pathological response (95% CI 16.6–54.7%) · grade 3–4 AEs 4.2% · doi:10.1038/s41591-025-03873-7 · PMID 40855191 · NCT05724329 (COIS-01); preceding NCT04718415 (OOC-001)

[^lombardo2026]: Lombardo ER, Pijewski RS, Lustig JT, et al. "Senolytic treatment induces oligodendrocyte dysfunction and demyelination in the corpus callosum." *Proc Natl Acad Sci U S A* 2026;123(12):e2524897123 · in-vivo (C57BL/6J young 3–4 mo + aged 22 mo) + in-vitro (primary rat OPCs) · D+Q produced significant CC demyelination without cell death; transcriptomic ER-stress / UPR signature in OPCs · doi:10.1073/pnas.2524897123 · PMID 41843680
