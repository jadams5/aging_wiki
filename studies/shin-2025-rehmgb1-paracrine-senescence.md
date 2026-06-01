---
type: study
doi: 10.1016/j.metabol.2025.156259
pmid: 40189139
pmc: null
title: "Propagation of senescent phenotypes by extracellular HMGB1 is dependent on its redox state"
authors: [Shin JW, Jang DH, Kim SY, Lee JJ, Gil TH, Shim E, Kim JY, Kim HS, Conboy MJ, Conboy IM, Wiley CD, Shin JS, Jeon OH]
year: 2025
journal: Metabolism
volume: 168
pages: "156259"
study-design: in-vivo
publication-type: research-article
organism: mus-musculus
n-subjects: null
intervention: ["[[hmgb1]]"]
hallmarks-tested: ["[[cellular-senescence]]", "[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [redox-dependent-sasp, paracrine-senescence-propagation, rage-jak-stat-nfkb-axis, hmgb1-blockade-muscle-regeneration, rehmgb1-elevated-in-aged-human-serum]
local-pdf: null
verified: true
verified-date: 2026-05-20
verified-by: claude
verified-scope: "Full PDF (17 pp) cross-checked end-to-end. Bibliographic + methods + every figure + discussion + reference list verified against published article. Corrections from auto-extracted draft: (1) OA status — paper is open access CC BY-NC-ND, not closed-access as the archive's not_oa flag suggested; (2) Wiley CD affiliation — Tufts Jean Mayer USDA HNRCA, not UC Davis as I had written; (3) added all specific n, doses, route, mAb identity (anti-HMGB1 3E8 clone, BioLegend 651402), tissue list, pharmacological-rescue probe concentrations (FPS-ZM1 100 nM, Momelotinib 0.3 μM), behavioral endpoints, and the human-aging-serum supplementary data that the abstract omitted. Banner removed."
---

# Shin 2025 — Propagation of senescent phenotypes by extracellular HMGB1 is dependent on its redox state

A primary-research paper establishing that **only the reduced redox form of extracellular HMGB1 (ReHMGB1)** — not its terminally oxidized form — propagates senescence to bystander cells and across tissues, acting through RAGE-mediated JAK/STAT and PI3K-AKT/NF-κB signaling. Published April 2025 in *Metabolism* (CC BY-NC-ND open access) by the Jeon Ok Hee lab (Korea University College of Medicine) in collaboration with Jeon-Soo Shin (Yonsei), Michael J. + Irina M. Conboy (UC Berkeley, heterochronic-parabiosis lineage), and Christopher D. Wiley (Tufts Jean Mayer USDA Human Nutrition Research Center on Aging, MiDAS originator). Positions extracellular ReHMGB1 as a **redox-state-dependent pro-geronic SASP factor** with translational implications for senomorphic intervention; supplementary data demonstrate ReHMGB1 is elevated in human aged (70–80 yr) serum, suggesting clinical relevance.

---

## Question

Cellular senescence spreads systemically through blood circulation, but the molecular identity of the propagating signal has remained incompletely defined. [[hmgb1]] is a known SASP factor that exists in three biologically distinct redox states (fully-reduced ReHMGB1, disulfide DsHMGB1, and terminally oxidized OxHMGB1). The study asks: **is the senescence-spreading activity of extracellular HMGB1 redox-state-dependent, and if so, can blocking it attenuate aging-related phenotypes in vivo?**

## Design

### Cell lines + culture

- **WI-38** human fetal lung fibroblasts (ATCC CCL-75) — primary model
- **BJ** human foreskin fibroblasts (ATCC CRL-2522)
- **Primary human renal epithelial cells** (ATCC PCS-400-011)
- **HSKM** human skeletal muscle cells (Lonza)

All cultures kept at 3 % O₂ (physiologic).

### Mice

- **3-month-old (young)**, **15-month-old (middle-aged)**, and **24-month-old (old)** male C57BL/6J mice (Jackson Labs Bar Harbor for 3 + 15 mo; Korea Basic Science Institute Ageing Research Facility for 24 mo).
- Approved protocols KOREA-2020-0168 and KOREA-2023-0171.

### HMGB1 reagents

- **ReHMGB1**: N-terminus six-His-tagged recombinant human HMGB1 produced in *E. coli* SoluBL21 (AMSBIO AMS.C700200); purified via Ni²⁺-NTA + heparin-Sepharose; endotoxin removed by Triton X-114 phase separation; LPS < 1.0 EU/μg.
- **OxHMGB1**: terminally oxidized HMGB1 (catalog HM060, HMGBiotech, Milan, Italy).
- **In vitro dose**: 20 μg/mL HMGB1, 72 h treatment, analysis at day 4.

### Paracrine senescence model (Fig 1)

WI-38 fibroblasts senesced by 20 Gy X-ray irradiation; conditioned media (CM) collected after 10 days in 40 % FBS DMEM, then diluted to 10 % FBS for treatment. Non-senescent WI-38 recipient cells treated with IR-CM either alone, with control IgG-CM, or with **anti-HMGB1 antibody-treated CM (aHM-CM)** for 7 days. Anti-HMGB1 mAb concentration: **2.5 μg/mL**.

### In vivo systemic ReHMGB1 (Fig 7)

3-month-old male C57BL/6J mice received a **single IV dose of ReHMGB1 at 5 mg/kg** (or PBS vehicle); analyzed at **7 days post-treatment** (7 dpt). Vehicle n=6, ReHMGB1 n=8. Tissues sampled: gastrocnemius (GA), tibialis anterior (TA), heart, liver, kidney.

### In vivo therapeutic HMGB1 blockade (Fig 8)

15-month-old male C57BL/6J mice received **anti-HMGB1 mAb (clone 3E8, BioLegend 651402) at 0.1 mg/kg IV** (or control IgG) on Day −1; **50 μL of 1.2 % BaCl₂ in saline** injected unilaterally into the TA muscle on Day 0 to induce acute muscle injury; sacrifice Day 5. n=6 IgG-injured, n=6 aHMGB1-injured, n=6 uninjured.

### Pharmacological pathway dissection (Fig 6)

- **FPS-ZM1** (Sigma 553030), RAGE antagonist: **100 nM**, 30-min pretreatment before ReHMGB1.
- **Momelotinib (CYT387)** (MedChemExpress HY-10961), JAK2 inhibitor: **0.3 μM**.

### Readouts

SA-β-gal (Cell Signaling 9860); EdU (Invitrogen C10337); p16^INK4a + p21 immunofluorescence; RT-qPCR (β-actin housekeeping); Western blot; WST-1 proliferation (Takara MK400); Incucyte SX1 live-cell phase confluence; cytokine antibody array (Full Moon Biosystems); multiplex ELISA (R&D Systems HS600C + HSTA00E, Arigo, Chondrex); bulk RNA-seq (Illumina NovaSeq 6000, paired-end 100 bp; STAR + HTSeq + DESeq2; |log₂FC| ≥ 1, p-adj < 0.05); GSEA + GO/KEGG (DAVID + clusterProfiler); STRING + Cytoscape MCODE + TRRUST TF prediction.

Behavioral endpoints (Fig 8J): grip strength (Bioseb force gauge), rotarod latency to fall (0–40 rpm over 300 s), treadmill work (1 % incline, 5–25 m/min, mild electric shock).

Statistics: two-tailed unpaired *t*-tests with Welch's correction; one-way ANOVA + Dunnett's or Tukey's; Mann–Whitney for non-normal; Benjamini–Hochberg for multiple comparisons. Prism v10.1.1 + R v4.3.3.

---

## Findings

### 1. HMGB1 release from senescent cells mediates paracrine senescence (Fig 1)

Conditioned media from IR-senescent WI-38 (IR-CM) induced senescence in naïve WI-38 (↑SA-β-gal, ↓EdU). Adding **anti-HMGB1 mAb at 2.5 μg/mL** to the CM (aHM-CM) markedly attenuated this paracrine senescence:

| Readout | IR-CM | IgG-CM | aHM-CM | p (aHM vs IgG) |
|---|---|---|---|---|
| SA-β-gal positive ratio | ~9 % | ~9 % | ~4.5 % | **p < 0.01** |
| EdU positive cells | ~60 % | ~60 % | ~70 % | p < 0.05 |
| Nuclear HMGB1 intensity (recipient cells) | low | low | restored | p < 0.05 |
| IL-6 in CM (ELISA) | ~55 pg/mL/cell | ~55 | ~37 | **p < 0.01** |
| TNF-α in CM (ELISA) | ~25 pg/mL/cell | ~25 | ~18 | p < 0.05 |

mRNA (RT-qPCR): aHM-CM **significantly reduced** *p16*, *p21*, *p53*, *IL6*, *VCAM1*, *CCL2* in recipient WI-38; *CXCL1* was not significantly different. Western blot: p21 protein **p < 0.01** and p53 protein **p < 0.01** both reduced. n = 3–6 independent experiments per assay.

A supplementary arm (Supp Fig 1) confirmed: mouse dermal fibroblasts (MDFs) from young and old mice exposed to old-mouse serum with anti-HMGB1 antibody showed reduced 3MR luminescence (senescent-cell reporter) and reduced *p16*, *Il6*, *Mmp3*.

### 2. ReHMGB1 — but not OxHMGB1 — induces senescence (Fig 2)

WI-38 treated with **20 μg/mL** ReHMGB1, OxHMGB1, or 20 Gy IR (positive control) for 72 h, analyzed day 4:

| Readout | PBS | ReHMGB1 | OxHMGB1 | IR | ReHMGB1 vs PBS |
|---|---|---|---|---|---|
| WST-1 proliferation | 1.0 | ~0.7 | ~0.95 (ns) | ~0.2 | **p < 0.001** |
| SA-β-gal positive ratio | ~1 % | ~5 % | ~2 % (ns) | ~80 % | **p < 0.001** |
| EdU positive cells | ~65 % | ~15 % | ~60 % (ns) | ~15 % | **p < 0.0001** |
| p21+ cells (% of DAPI) | ~20 % | ~60 % | ~22 % (ns) | ~90 % | **p < 0.001** |

mRNA upregulation by ReHMGB1 (not by OxHMGB1): ***p16, p21, IL6, IL8, CXCL1, SERPINE1, TNF-α, CCL2, VCAM1, TP53, MMP13*** (all p < 0.05 to p < 0.001). The IL8 fold-change reached ~20× control.

Generalization: ReHMGB1 induced SA-β-gal + reduced EdU in **WI-38, BJ foreskin, renal epithelial, and HSKM** cells across "effective concentration range" (Supp Fig 3). OxHMGB1 inert across all four cell types.

### 3. ReHMGB1 transcriptomically resembles IR-senescence; OxHMGB1 diverges (Fig 3)

Bulk RNA-seq (n ≥ 3 replicates per arm):

- **ReHMGB1**: 1,087 DEGs (601 up, 486 down) at |log₂FC| ≥ 1, p-adj < 0.05.
- **OxHMGB1**: 613 DEGs (295 up overlap with Re; 154 down overlap).
- 55 DEGs in CellAge senescence gene set; 35 in cell-cycle regulator set.
- ReHMGB1-specific (vs Ox) upregulated: ***VCAM1, ICAM1, CCL2, CXCL10, ATF3, IGFBP family, RELB***; downregulated oxidative-stress genes ***RRM2, MYBL2, FOXM1***.
- Bystander senescence marker ***p15^INK4b^ (CDKN2B)*** upregulated specifically by ReHMGB1.
- Against published IR-senescence dataset GSE13027: ReHMGB1 DEG signature **closely resembled** IR-induced senescence; OxHMGB1 **diverged significantly**.
- Versus IR, ReHMGB1 shared 89 upregulated DEGs (incl. VCAM1, IGFBP5, IL15, TGFB1, MMP2, MMP12, PDGFRB) — but exhibited ReHMGB1-specific signatures (STAT5A, COL14A1, IL12A, IRF1).
- GO-BP enrichment: cell migration, ECM organization, signal transduction (concordant with fibrosis + ossification processes).
- KEGG enrichment: cytokine-cytokine receptor interaction, PI3K-AKT, **JAK-STAT**, TNF signaling.
- OxHMGB1 activated interferon-response GO terms — qualitatively distinct from senescence-driving ReHMGB1.

### 4. Cytokine-array secretome confirms paracrine-senescence-competent SASP (Fig 4)

CM from ReHMGB1-treated WI-38 enriched in canonical SASP factors: **IGFBP5, IL15, TGFB1, MMP2, GSK3A, IGF1R, PDGFRB** (plus FGF2, TNFRSF1B, VCAM1, IL10, CX3CL1, IGFBP1/2/3, RETN, TIMP1, CTNNA1, TGFBR2, IGFBP3, MPO). Profile **closely resembled IR-senescent CM**; OxHMGB1 CM lacked SASP enrichment. KEGG: AGE-RAGE diabetic-complications pathway, MAPK, cytokine-cytokine interaction, FOXO; GO MF: TGF-β I/II/III receptor binding, IGF I/II binding.

### 5. Mechanism: ReHMGB1 → RAGE → JAK/STAT + PI3K-AKT/NF-κB (Figs 5 + 6)

GSEA (normalized enrichment scores, p = 0.000 each):

| Pathway | NES | Direction |
|---|---|---|
| Cytokine-cytokine receptor interaction | **+1.50** | up in Re |
| JAK-STAT signaling | **+1.48** | up in Re |
| Cell cycle | **−1.81** | down in Re |
| DNA replication | **−1.93** | down in Re |

TRRUST TF predictions for ReHMGB1-up DEGs: **RELA, NFKB1, STAT1** (plus STAT3, STAT5A, XBP1, REL, ATF4, KLF4, CEBPA, EP300, SP1, EGR1, MYC, JUN, ZFP36); down: E2F1/E2F3/E2F4, PTTG1, TP53, IRF1.

Western blot (n = 3) in ReHMGB1 vs OxHMGB1 vs PBS:
- ↑ **RAGE** protein (p < 0.01 Re vs PBS)
- ↑ **p-AKT** (p < 0.05)
- ↑ **p-NF-κB p65** (p < 0.05)
- ↑ **p-JAK2** (p < 0.05)
- ↑ **p-STAT1** (p < 0.01)

Pharmacological rescue (Fig 6): pre-treating ReHMGB1-stimulated WI-38 with either **FPS-ZM1 (100 nM, RAGE antagonist)** or **Momelotinib (0.3 μM, JAK2 inhibitor)** restored proliferation (Incucyte phase confluence) and reduced SA-β-gal (p < 0.05) while increasing EdU+ (p < 0.01). **Both abrogated ReHMGB1-induced senescence**, confirming the RAGE → JAK2 → STAT1 axis is functionally necessary.

### 6. Systemic ReHMGB1 in young mice induces multi-tissue senescence (Fig 7)

Single IV bolus 5 mg/kg ReHMGB1 in 3-mo C57BL/6J, sampled 7 dpt:

Serum cytokines (multiplex ELISA): **↑ IL-6 (p < 0.05), ↑ IL-1β (p < 0.05), TNF-α ns.**

Tissue *p21* (Cdkn1a) mRNA:

| Tissue | Δp21 vs Veh | p |
|---|---|---|
| Gastrocnemius (GA) | ↑ | < 0.05 |
| Tibialis anterior (TA) | ↑ | < 0.05 |
| Liver | ↑ | < 0.05 |
| Heart | ↑ (trend) | ns |
| Kidney | ↑ (trend) | ns |

Additional TA mRNA: ↑ *p15* (Cdkn2b, p < 0.05), ↑ *Cxcl10*, ↑ *Timp1* (p < 0.05). GA: ↑ *Timp1* (p < 0.05). Liver: ↑ *Tnf-α* (p < 0.05), ↑ *Mmp13* (p < 0.05), ↑ *Timp1* (p < 0.05).

TA myofiber histology: mean cross-sectional area (CSA) **not significantly different at 7 dpt** (no atrophy yet), but **HMGB1+ myonuclei decreased (p < 0.01)** — consistent with nuclear-to-extracellular HMGB1 export — and **p16+/p21+ dual-positive cells increased (p < 0.001)**.

**Pharmacokinetics** (pull-down assay of ReHMGB1 in serum): undetectable at 0 h baseline; peaked at 6 h post-injection (p < 0.001 vs 0 h); still detectable at 24 h (p < 0.05). The discussion notes the published serum half-life of reduced HMGB1 is **~17 min** (Zandarashvili 2013 NMR study), indicating extracellular ReHMGB1 must engage receptors rapidly during a narrow active window.

### 7. Aged-serum ReHMGB1 elevation — human + mouse (Supp Figs 5 + 6)

- In 24-mo aged C57BL/6 mice: total HMGB1 and reduced HMGB1 both **significantly elevated** in serum vs 3-mo controls.
- In human serum: **ReHMGB1 significantly elevated in older (70–80 yr) vs younger (~40 yr) individuals**; total HMGB1 trended up but was non-significant.

This is the most clinically translatable finding of the paper: aged human serum carries elevated levels of the geronic redox form, making it a **candidate plasma biomarker** of inflammaging tempo as well as a **plausible mechanistic node** in the aging-blood-impairs-tissue heterochronic phenotype.

### 8. HMGB1 blockade in middle-aged muscle injury rescues regeneration (Fig 8)

15-mo male C57BL/6J + BaCl₂ TA injury, 0.1 mg/kg anti-HMGB1 3E8 mAb IV at Day −1, sacrifice Day 5. n=6 per arm.

| Readout | Uninjured | IgG-injured | aHMGB1-injured | p (aHMGB1 vs IgG) |
|---|---|---|---|---|
| Muscle mass (mg/g) | ~1.5 | ~1.0 | ~1.0 | ns |
| Serum HMGB1 (ELISA) | ~250 pg/mL | ~3,500 | ~1,000 | < 0.05 |
| SA-β-gal+ cells / unit area | ~0 | ~20 | ~10 | < 0.05 |
| Mean fiber CSA (μm²) | ~3,000 | ~500 | ~1,000 | < 0.01 |
| % centralized nuclei | ~2 % | ~80 % | ~50 % | < 0.05 |
| MyoD+ cells (%) | ~0 % | ~22 % | ~32 % | < 0.05 |
| p21+ cells (%) | ~1 % | ~20 % | ~10 % | < 0.05 |

Behavioral readouts at 4 dpt (Fig 8J):

| Test | Uninjured | IgG-injured | aHMGB1-injured | p (aHMGB1 vs IgG) |
|---|---|---|---|---|
| Grip strength (g/g) | ~4.0 | ~2.8 | ~3.9 | **< 0.01** |
| Rotarod latency (s) | ~110 | ~50 | ~85 | < 0.05 |
| Treadmill work (KJ) | ~4 | ~2.5 | ~6.5 | < 0.05 |

Interpretation: **anti-HMGB1 mAb blockade in middle-aged mice reduced systemic + tissue senescence, lowered systemic HMGB1, increased myogenic progenitor MyoD+ recruitment, partially restored myofiber CSA, and fully restored grip strength to uninjured levels** — i.e., a single low-dose mAb pre-treatment delivers a senomorphic effect with functional readout in a clinically relevant injury context.

## Why it matters

- **First molecularly explicit mechanism for systemic senescence propagation via circulating SASP.** Prior work (Acosta 2008, Kuilman 2008 — see [[sasp]]) mapped CXCR2/IL-8 and IL-6 as local paracrine mediators; how the signal travels *across the bloodstream* to remote tissues had been a major open question (#gap/no-mechanism on [[altered-intercellular-communication]] until this paper). Shin 2025 nominates **circulating ReHMGB1 → RAGE → JAK/STAT + PI3K-AKT/NF-κB**.
- **Redox switch is the actionable handle.** HMGB1's three cysteines switch the protein between cytokine-active reduced form, chemokine-active disulfide form (TLR4-engaging per Venereau 2012), and inactive sulfonyl form. The senescence-propagation activity is selective for the **reduced form**, meaning **systemic redox state** (plasma thiol/disulfide balance, glutathione status, ROS load) gates whether circulating HMGB1 is geronic. Aged human serum has elevated ReHMGB1.
- **Senomorphic, not senolytic.** HMGB1 blockade in the muscle-regeneration model suggests a non-cytotoxic alternative to senolytic clearance — disrupt the propagation signal rather than kill the senescent source. Existing clinical HMGB1-blocking strategies (glycyrrhizin, anti-HMGB1 mAbs, recombinant thrombomodulin) become candidates for aging repurposing. Pharmacological rescue with **FPS-ZM1 (RAGE antagonist) or Momelotinib (JAK2 inhibitor at the FDA-approved myelofibrosis drug)** establishes existing approved-drug-class probes that could be repurposed.
- **Plasma biomarker candidate.** Elevated ReHMGB1 in 70–80 yr human serum (Supp Fig 6) suggests a redox-form-specific HMGB1 assay could index inflammaging tempo orthogonally to bulk total-HMGB1.

## Extrapolation table

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (HMGB1, RAGE, JAK/STAT, NF-κB all canonical; supplementary data demonstrate aged human serum ReHMGB1 elevation) |
| Phenotype conserved in humans? | partial (cell-culture work uses human WI-38/BJ/HSKM; in-vivo phenotype mouse only) |
| Replicated in humans? | no (first-in-class mechanism; no interventional human trial of HMGB1 blockade for aging indication) |

## Connections to the wiki

- [[hmgb1]] — protein page; this study is the canonical citation for redox-form selectivity of senescence propagation
- [[rage]] — receptor; canonical extracellular HMGB1 receptor; this study confirms RAGE → JAK2 → STAT1 axis with FPS-ZM1 pharmacological probe
- [[sasp]] — adds HMGB1 to DAMP-class SASP factors with explicit redox-state-dependent activity; complements existing CXCR2/IL-8 (Acosta 2008) and IL-6 (Kuilman 2008) axes
- [[chronic-inflammation]] — extends HMGB1 role beyond NLRP3/pyroptosis cytokine-priming to direct senescence propagation
- [[altered-intercellular-communication]] — explicit mechanism for systemic senescence spread (the hallmark's central but mechanistically underspecified phenomenon)
- [[jak-stat-pathway]] · [[nf-kb]] — downstream effectors
- [[satellite-cells]] — muscle regeneration arm of Fig 8 (MyoD+ recruitment improved)
- [[sarcopenia]] · [[frailty]] — middle-aged muscle injury rescue is the most clinically translatable phenotype tested

## Limitations

- **Mouse-only in vivo.** No human translation arm (though human aged-serum ReHMGB1 elevation is shown observationally in Supp Fig 6).
- **Redox-form pharmacology is hard.** Discussion explicitly notes "redox modulation of HMGB1 in vivo remains technically challenging due to its rapid oxidation, with a serum half-life of ~17 min" — therapeutic strategies cannot deliver "stable ReHMGB1"; intervention must target downstream RAGE/JAK or sequester all HMGB1 regardless of redox form.
- **Antibody is not isoform-specific.** The 3E8 mAb targets all HMGB1 isoforms. Authors note: "isoform-specific tools will be crucial for dissecting functional differences and guiding therapeutic strategies."
- **Single-dose, short-window.** In vivo systemic ReHMGB1 was a single IV bolus with 7 dpt readout; no chronic-administration arm. The therapeutic mAb arm was a single Day −1 dose. Long-term safety + efficacy unknown.
- **Bulk RNA-seq, not single-cell.** Does not resolve recipient-cell-type heterogeneity of susceptibility to ReHMGB1 in tissue.
- **15-mo vs 24-mo gap.** Discussion: "comparison with younger mice in future studies would be important to better understand the age-dependent nature of HMGB1-driven senescence under redox regulation." The therapeutic arm used 15-mo mice; the aging-blood arm used 24-mo. No direct head-to-head.
- **muscle-mass-difference is non-significant.** Anti-HMGB1 rescued fiber CSA and behavioral readouts, but gross muscle mass did not differ — the rescue is structural-quality + functional, not bulk regrowth.

## Footnotes

[^wiley2016]: [[studies/wiley-2016-midas]] · referenced via [[sasp]] · author Wiley CD is co-author on this Shin 2025 paper.
[^venereau2012]: doi:10.1084/jem.20101354 · "Mutually exclusive redox forms of HMGB1 promote cell recruitment or proinflammatory cytokine release" J Exp Med 2012 · the canonical paper establishing reduced HMGB1 = chemoattractant via CXCR4 (with CXCL12); disulfide HMGB1 = TLR4-ligand pro-inflammatory cytokine inducer; sulfonyl = inactive. This is the redox-biology source on which Shin 2025 builds.
[^zandarashvili2013]: doi:10.1074/jbc.M111.428342 · J Biol Chem 2013 · NMR spectroscopy real-time kinetics of HMGB1 oxidation in extracellular fluids; established the **~17 min serum half-life** of reduced HMGB1 (cited in Shin 2025 discussion ref [58]).
[^jeon2022]: doi:10.1038/s42255-022-00609-2 · "Systemic induction of senescence in young mice after single heterochronic blood exchange" Nat Metab 2022 · Jeon's prior senior-author paper establishing that a single blood-exchange transfer of old blood into young mice systemically induces senescence — the conceptual setup for the present ReHMGB1 paper.
[^rebo2016]: doi:10.1038/ncomms13363 · "A single heterochronic blood exchange reveals rapid inhibition of multiple tissues by old blood" Nat Commun 2016 · Conboy lab single-blood-exchange paper; companion conceptual basis.
