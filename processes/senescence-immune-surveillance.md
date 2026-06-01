---
type: process
aliases: [senescence surveillance, immune-mediated senescent cell clearance, NK senolysis, immunological senolysis]
key-proteins: ["[[nkg2d]]", "[[mica]]", "[[micb]]", "[[ulbp1]]", "[[perforin]]", "[[granzyme-b]]", "[[upar]]"]
pathways: ["[[dna-damage-response]]", "[[p53-pathway]]", "[[nf-kb]]", "[[jak-stat]]"]
hallmarks: ["[[cellular-senescence]]", "[[disabled-adaptive-immunity]]", "[[chronic-inflammation]]"]
selective-variants: []
druggability-tier: 2
caused-by: ["[[cellular-senescence]]", "[[sasp]]"]
causes: ["[[chronic-inflammation]]", "[[immunosenescence]]"]
literature-checked-through: 2026-05-31
verified: true
verified-date: 2026-05-31
verified-by: claude
verified-scope: "All 10 locally-accessible primary sources read end-to-end (Xue 2007, Amor 2020, Amor 2024, Sagiv 2013, Sagiv 2016, Krizhanovsky 2008, Iannello 2013, Soriani 2009, Tarazona 2017, Zingoni 2015). Eight corrections applied. Two sources unverifiable: Kang 2011 (closed-access, not_oa) and Merkt 2026 (not in archive); claims derived from these sources tagged #gap/no-fulltext-access. Post-verification main-agent correction 2026-05-31 (9th): the Amor 2020 in-vivo models were mislabeled — the NRAS^G12V hepatocyte model is a senescent-cell-clearance readout, NOT the survival endpoint; survival was the orthotopic KP lung adenocarcinoma model (per abstract + p.4 of the local PDF). Re-verified against PDF; now consistent with the [^amor2020] verification on [[hallmarks/disabled-adaptive-immunity]]. 10th correction (NKG2D age-decline reconciliation): rewrote the age-related-decline section — resolved an internal contradiction (one line attributed NKG2D decline to Tarazona 2017 while another said preserved) and the cross-page conflict with disabled-adaptive-immunity/immunosenescence. Reconciled finding: NCRs (NKp30/NKp46) reliably decline on NK cells; NK-cell NKG2D is preserved/inconsistent (Tarazona 2017); the robust NKG2D decline is on T cells, not NK cells (Almeida-Oliveira 2011, abstract directly read — the source of the cell-type conflation); CMV is a major confounder (Campos 2014). Added [^almeida2011], [^legarfftavernier2010], [^campos2014], [^hazeldine2013] — all ABSTRACT/metadata-level (full PDFs not yet read; Le Garff-Tavernier archive-pending, Campos not_oa) → #gap/needs-fulltext-verification on these four. Propagated corrected claim to disabled-adaptive-immunity.md + immunosenescence.md."
---

# Senescence Immune Surveillance

The immune-mediated recognition and elimination of senescent cells — executed primarily by NK cells and macrophages, with context-dependent contributions from CD4+ and CD8+ T cells. This process is the body's endogenous "senolytic" system: it removes growth-arrested, pro-inflammatory cells before they accumulate to pathological levels. **Decline of this surveillance axis with age is a mechanistic bridge between [[cellular-senescence]] and its downstream consequences** — when clearance fails, senescent burden rises, SASP amplifies, and the chronic inflammatory milieu that drives tissue dysfunction deepens.

This page is the canonical home for the molecular recognition mechanism, particularly the NKG2D activating receptor and its stress-induced ligands (MICA/MICB, ULBPs). For the hallmark-level consequences of failed immune surveillance, see [[hallmarks/disabled-adaptive-immunity]]. For the inflammatory output of surviving senescent cells, see [[processes/sasp]].

---

## Recognition machinery — NKG2D and its stress-induced ligands

The dominant activating receptor for NK-cell-mediated senescent cell killing is **NKG2D** (encoded by *KLRK1*), a C-type lectin-like activating receptor expressed on NK cells, NKT cells, γδ T cells, and activated CD8+ T cells. NKG2D is triggered by a family of **stress-induced ligands** displayed on the surface of senescent (and transformed) cells:

| Ligand family | Human members | Mouse equivalents | Induction trigger |
|---|---|---|---|
| MIC | MICA, MICB | none (MIC genes absent in mice) | DDR, oxidative stress, heat shock |
| ULBP/RAET1 | ULBP1–6 | Rae-1α–ε, H60, Mult-1 | DDR, retinoic acid, ATM/ATR activation |

**Senescent cells upregulate both MICA/MICB and multiple ULBPs** [^sagiv2016]. In a critical mechanistic study using replication-induced and oncogene-induced senescent cells, Sagiv et al. 2016 demonstrated that (1) MICA and ULBP2 were required for NK cell killing of senescent hepatic stellate cells (combined MICA+ULBP2 knockdown by siRNA blocked NK92 cytotoxicity, p<0.0001); (2) initial induction of these ligands is DDR-driven, while ERK signaling maintains sustained ULBP2 expression — MICA in established senescent cells is regulated by ERK-independent mechanisms (ATM inhibition further increases MICA); and (3) Nkg2d⁻/⁻ mice accumulated 50% more fibrosis area (p<0.05) and 45% more SA-β-gal-positive senescent cells (p<0.05) vs WT following CCl4 treatment [^sagiv2016].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Partial — MICA/MICB present in humans, absent in mice; ULBP/Rae-1 families are species-divergent paralogs |
| Phenotype conserved? | Partial — NK-mediated clearance of senescent cells demonstrated in both species; but quantitative data primarily from mouse models |
| Replicated in humans? | Limited — human NK/MICA co-culture data exists; in-vivo human data sparse |

### DDR pathway drives ligand induction — the p53-ATM/ATR link

DNA damage response (DDR) signaling is the proximal trigger for stress-ligand upregulation. Soriani et al. 2009 demonstrated in multiple myeloma cells treated with low-dose therapeutic agents (doxorubicin, melphalan, bortezomib) that upregulation of both NKG2D ligands (MICA/MICB, ULBPs) and DNAM-1 ligands (CD155/PVR, CD112/nectin-2) is **blocked by ATM/ATR kinase inhibitors**, placing ligand induction downstream of the canonical DDR checkpoint kinases [^soriani2009]. This is consistent with oncogene-induced senescence (OIS) models where constitutive replication stress activates the DDR, which in turn induces surface ligands that flag the pre-malignant cell for NK killing.

Separately, **p53 is required for chemokine production** that recruits NK cells to senescent tumor sites. Iannello et al. 2013 showed in a liver carcinoma model (subcutaneous H-RasV12-transformed liver cells in Rag2⁻/⁻ mice with inducible p53) that p53-dependent CCL2 secretion by senescent cells recruits NK cells and is required for NKG2D-dependent in-vivo tumor elimination — antibody-mediated CCL2 neutralization significantly delayed NK recruitment and tumor elimination (p<0.001 at days 4, 6, 8), but did not fully prevent eventual clearance [^iannello2013]. n=10–11 mice per group. #gap/needs-replication — demonstrated in a single engineered tumor-regression model; generalizability to physiological aging-associated senescence not established.

### DNAM-1 axis

**DNAM-1** (CD226) is an activating receptor co-expressed with NKG2D on NK cells. Its ligands — CD155 (PVR) and CD112 (nectin-2) — are similarly upregulated on senescent and DDR-stressed cells [^soriani2009]. DNAM-1 and NKG2D likely cooperate in the recognition of stress-ligand-displaying cells; the Soriani 2009 data showed both receptor-ligand pairs were induced in the same ATM/ATR-dependent manner. The relative contribution of each axis varies by cell type and context. #gap/needs-replication — DNAM-1 role in physiological (non-therapy-induced) aging senescence not yet characterized.

---

## Effector arms

### NK cell cytotoxicity — granule exocytosis, not death receptors

NK cells are the primary effectors for senescent cell clearance under basal conditions. The killing mechanism is **granule exocytosis** (perforin/granzyme pathway) rather than death-receptor signaling (FasL/TRAIL). Sagiv et al. 2013 showed that senescent cells upregulate the decoy death receptor **Dcr2** (TRAIL-R3), which lacks a functional death domain and blocks TRAIL-induced apoptosis; perforin-KO (Prf⁻/⁻) mice showed impaired NK killing of senescent stellate cells and 60% more scarring vs WT (p<0.0001) [^sagiv2013]. Granzyme-B inhibitor 3,4-DCI confirmed the granule pathway requirement in vitro, but no granzyme-B-KO mouse experiment was performed in this paper. This places the effector mechanism firmly in the cytotoxic granule pathway.

After NK-cell-mediated killing, macrophages clear the resulting cell debris via phagocytosis (**efferocytosis**) — this is the final clean-up step that prevents secondary necrosis and DAMP release.

### CD4+ T cell arm — the hepatocyte tumor-suppression paradigm

CD4+ T cells play an essential role in the senescence surveillance of pre-malignant hepatocytes, as established in a landmark study by Kang et al. 2011. In a mouse model of Ras-oncogene-induced senescence in hepatocytes, immune clearance of pre-malignant senescent cells required both monocyte/macrophage recruitment (driven by SASP-derived CCL2 and other factors) and CD4+ T cell help. Mice with T cell- or macrophage-depleted immune systems showed impaired senescence surveillance and progression to hepatocellular carcinoma, whereas immunocompetent mice cleared the oncogene-senescent cells and remained tumor-free [^kang2011].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Partial — CD4+ T cell involvement in human tumor immunosurveillance established; role specifically in senescent-hepatocyte clearance is inferred |
| Replicated in humans? | No direct replication — entirely mouse model data for the senescence-specific arm |

### Macrophage efferocytosis and SASP-driven recruitment

Senescent cells actively recruit macrophages via SASP-derived chemokines — prominently **CXCL1**, **CXCL2**, **CCL2** (MCP-1), and **CCL20** — which act as "find me" signals. Macrophages then perform efferocytosis of dead/apoptotic cell fragments ("eat me" signals include phosphatidylserine externalization on dying cells). The Krizhanovsky 2008 Cell study of liver fibrosis resolution demonstrated that NK cells and macrophages cooperate: NK cells kill senescent activated stellate cells, and macrophages clear the resulting debris to resolve fibrosis [^krizhanovsky2008]. When this cooperation is disrupted (e.g., in p53⁻/⁻ or INK4a/ARF⁻/⁻ mice where stellate cells fail to properly senesce), fibrosis worsens. #gap/needs-human-replication — fibrosis-resolution data is from rodent CCl₄ and bile-duct-ligation models.

### CD8+ T cell arm

CD8+ cytotoxic T lymphocytes (CTLs) contribute to senescence surveillance in the tumor-regression context. Xue et al. 2007 demonstrated that p53 restoration in established p53-null liver tumors induced not apoptosis but senescence, with complete tumor regression requiring an intact innate immune response. The regression was associated with upregulation of inflammatory cytokines attracting NK cells and macrophages [^xue2007]. CD8+ T cell involvement in physiological (non-tumor) aging-associated senescence is less characterized — it is likely present but quantitatively secondary to NK and macrophage axes under non-oncogenic conditions. #gap/no-mechanism (CD8+ CTL-specific role in clearing non-neoplastic senescent cells not established).

---

## Tumor suppression via senescence immune surveillance

A key function of this process — distinct from homeostatic tissue maintenance — is **oncogene-induced senescence (OIS) surveillance**: immune clearance of pre-malignant cells that have activated the DDR in response to oncogene-driven hyper-replication, before they accumulate additional mutations and undergo malignant transformation.

The two key demonstrations are:

1. **Xue 2007** — p53 restoration in pre-formed liver carcinomas (already escaped surveillance) triggers senescence; innate immune system clears these senescent tumor cells [^xue2007]. Demonstrates that the immune system can eliminate established senescent tumor cells when senescence is re-imposed.

2. **Kang 2011** — Ras-OIS in hepatocytes is cleared by the immune system (CD4+ T + macrophage cooperation) before tumors form; immunosuppression allows carcinoma development [^kang2011]. This is the cleaner "prevention" model — immune surveillance eliminates newly senescent pre-malignant cells.

Together, these establish senescence immune surveillance as an **anti-tumor barrier**: first, senescence growth-arrests the pre-malignant cell (tumor suppression layer 1); then immune clearance eliminates it (tumor suppression layer 2). Failure of either layer — oncogene bypass of senescence (via p16/Rb or p53/p21 pathway inactivation), or immune evasion, or age-related immune decline — can permit progression.

---

## Immune evasion by senescent cells

Paradoxically, long-lived senescent cells have documented evasion mechanisms that blunt the NK response — contributing to their accumulation especially in contexts of sustained stress or aged immune systems.

### HLA-E / NKG2A inhibitory axis (key recent finding)

Senescent fibroblasts in fibrotic lung tissue upregulate **HLA-E**, a non-classical MHC class I molecule. HLA-E is the ligand for the **NKG2A/CD94** inhibitory receptor complex expressed on NK cells. Merkt et al. 2026 (Science Translational Medicine) demonstrated that this HLA-E upregulation in pulmonary fibrosis creates an immune-privileged niche: NKG2A checkpoint blockade using the monoclonal antibody **monalizumab** restored NK cell cytotoxicity, promoted clearance of senescent fibroblasts, and reversed fibrosis in mouse models and human cell studies [^merkt2026]. This finding is notable for two reasons: (1) it identifies a specific inhibitory checkpoint that senescent cells exploit; (2) monalizumab is already in clinical development for oncology, providing a translational path. #gap/needs-replication — single study; human IPF clinical translation pending.

### NKG2D ligand shedding (decoy mechanism)

Senescent and stressed cells can shed soluble forms of NKG2D ligands (sMICA, sMICB, soluble ULBPs) via sheddase activity. Zingoni et al. 2015 demonstrated that in multiple myeloma cells, genotoxic stress (doxorubicin/melphalan) upregulates **ADAM10** as the predominant sheddase driving MICB shedding (ADAM17 plays a constitutive but secondary role; shADAM10 knockdown blocked drug-induced MICB release while shADAM17 did not). These soluble decoys blunt NK cell recognition, and metalloproteinase inhibition (marimastat) in combination with chemotherapy restored NK cell degranulation [^zingoni2015]. ADAM10 upregulation was associated with a senescent (SA-β-gal+) phenotype in drug-treated cells. #gap/needs-replication — data from myeloma cell lines and chemotherapy context; constitutive shedding in aging-associated physiological senescence not directly studied. #gap/needs-replication — data from myeloma cell lines and chemotherapy context; role of constitutive shedding in aging-associated physiological senescence not established.

### MHC class I modulation

Some senescent cells retain or upregulate classical MHC class I (HLA-A/B/C), which engages inhibitory KIR receptors on NK cells. This provides a "don't kill me" signal that competes with the activating NKG2D signal. The balance between these signals determines the kill/spare decision. #gap/unsourced — general NK licensing principle; specific quantification in senescent cells vs. other stressed cells not well-characterized.

---

## Age-related decline of senescence surveillance

### The NK cell paradox

Aging produces a paradoxical NK cell phenotype: **NK cell absolute numbers in blood increase with age** (due to accumulation of the terminally differentiated CD56dim CD57+ subset), **while per-cell cytotoxic function declines** [^legarfftavernier2010][^hazeldine2013]. The most reproducible phenotypic change is a **subset redistribution** — loss of the immature CD56bright (cytokine-producing) subset and accumulation of CD56dim CD57+ terminally differentiated cells — rather than a uniform loss of activating receptors [^tarazona2017][^legarfftavernier2010]. The net effect is that despite numeric compensation, the NK compartment's total senolytic capacity is reduced — consistent with the observed accumulation of senescent cells in aged tissues.

### Activating-receptor changes — and a common cell-type conflation

A frequently-repeated claim that "NKG2D, NKp30 and NKp46 all decline with age on NK cells" conflates two distinct phenomena across two different cell types. Reconciling the primary literature:

- **NKp30 / NKp46 (natural cytotoxicity receptors, NCRs) — reliably decline on NK cells with age.** This is the most consistent activating-receptor finding across cohorts [^almeida2011][^tarazona2017]. NCRs recognize distinct stress/viral ligands and their loss directly reduces NK triggering.
- **NKG2D *on NK cells* — mixed and context-dependent.** The Tarazona 2017 review describes NK-cell NKG2D as broadly **preserved** in the elderly, attributing age-related NK decline more to NCR/DNAM-1 loss than to NKG2D loss [^tarazona2017]. Other cohorts report modest decreases, but the direction is not consistent.
- **NKG2D *on T cells* — does decline with age.** Almeida-Oliveira et al. 2011 found decreased NKG2D specifically on **T cells** (not NK cells) of elderly subjects [^almeida2011] — consistent with the broader CD28⁻/CD57⁺ T-cell senescence literature. **The widespread "NKG2D declines with age" statement most plausibly originates from this T-cell finding being mis-applied to NK cells.**
- **CMV is a major confounder.** CMV seropositivity (near-universal in the elderly) drives expansion of CD57⁺NKG2C⁺ adaptive NK cells and CD57 accumulation *independent of chronological age*; for most other NK receptors, including NKG2D, CMV serostatus shows little effect. Cohorts not stratified by CMV therefore mis-attribute CMV-driven changes to aging [^campos2014].

**Bottom line for senescence surveillance:** age-related loss of NK senolytic capacity is driven primarily by the CD56bright→CD56dimCD57+ subset shift and NCR (NKp30/NKp46) decline, with NK-cell NKG2D relatively *preserved*. Because NKG2D–MICA/ULBP is the dominant axis for recognizing senescent cells, its relative preservation means impaired surveillance in aging is more about NK **differentiation state and NCR loss** than about losing the senescent-cell-recognition receptor itself. #gap/contradictory-evidence — NK-cell NKG2D direction is inconsistent across primary studies (CMV stratification, surface-density vs %-positive, and frailty status explain much of the variance); no large CMV-stratified cohort has correlated NK-cell NKG2D density with senescent-cell burden in aged humans.

- **CD57 accumulation** — CD57+ NK cells are terminally differentiated, with reduced proliferative capacity and often lower per-cell cytotoxic responsiveness despite retained or increased absolute degranulation in some assays (context-dependent); CD57 expansion is substantially CMV-driven [^campos2014][^tarazona2017]

### Macrophage efferocytosis decline

Macrophage efferocytosis capacity declines with age — phagocytic receptor expression changes, lysosomal function deteriorates, and anti-inflammatory resolution signaling weakens. This impairs the final clearance step that removes senescent cell debris after NK killing, potentially leaving a low-grade inflammatory signal. #gap/unsourced — general macrophage aging principle; specific quantification for efferocytosis of senescent cell debris in aged vs. young animals not confirmed from a primary source.

### Consequence — feedback amplification

The decline of NK and macrophage senolytic function creates a positive feedback loop:

1. Fewer senescent cells cleared → higher senescent cell burden
2. Higher senescent burden → more SASP → more chronic inflammation (inflammaging)
3. Chronic inflammation impairs NK cell function further (inflammatory cytokines blunt NK responses)
4. Impaired NK function → even less clearance

This loop is a mechanistic foundation for the exponential increase in senescent cell burden observed in aged tissues [^sagiv2016].

---

## Contrast: immune surveillance vs. pharmacological senolysis

This page and [[interventions/pharmacological/senolytics]] are complementary — they address the same target (senescent cells) via distinct mechanisms with different properties:

| Property | Immune surveillance (endogenous) | Pharmacological senolysis (exogenous) |
|---|---|---|
| Selectivity | Antigen-driven (NKG2D ligands, uPAR); high target specificity | Depends on drug; many senolytics hit BCL-2 broadly — off-target toxicity risk |
| Timing | Continuous, near-real-time clearance after ligand induction | Pulsed (typically intermittent dosing cycles to avoid resistance) |
| Spatial precision | Immune cells are recruited locally to SASP-secreting foci | Systemic distribution via blood; tissue penetration pharmacology-dependent |
| Debris clearance | Macrophage efferocytosis is coupled — orderly, anti-inflammatory | Synchronized apoptotic bolus; risk of sterile inflammation if clearance overwhelmed |
| Age-relevant problem | Declines with age precisely when most needed | Exogenous approach unaffected by NK decline; compensates for immunological gap |
| Engineering potential | CAR-T / NK therapy (see below) | Small-molecule senolytics (dasatinib/quercetin, navitoclax); PROTAC senolysis |

The key insight is that pharmacological senolytics were developed **because endogenous immune surveillance fails with age**, not to replace a healthy surveillance system. Strategies to restore or augment surveillance (NK cell therapies, NKG2A checkpoint blockade) may ultimately be more physiological than exogenous senolysis.

---

## Engineered immune surveillance — next-generation approaches

### CAR-T senolysis

Amor et al. 2020 identified **uPAR** (urokinase plasminogen activator receptor, encoded by *PLAUR*) as a cell-surface protein broadly induced during senescence and designed uPAR-specific CAR-T cells that efficiently ablated senescent cells in vitro and in vivo. In the original Nature paper, the **survival** endpoint was an orthotopic *Kras^G12D^;p53^−/−^* (KP) **lung adenocarcinoma** model in which senescence was induced by combined MEK + CDK4/6 inhibition; uPAR-targeted CAR-T significantly prolonged survival vs CD19-CAR/UT controls without overt toxicity [^amor2020]. Separately, an NRAS^G12V^ hepatocyte oncogene-induced-senescence model (in NSG mice) served as the **senescent-cell-clearance** readout — uPAR CAR-T reduced bioluminescence within 10 days and lowered NRAS^+^ (p<0.01) and SA-β-gal^+^ (p<0.001) cells — and CCl4-induced (and diet-induced NASH) **liver fibrosis** was reversed (reduced Sirius Red + SA-β-gal, p<0.001; reduced suPAR/ALT/AST). The NRAS hepatocyte model was a clearance, not survival, endpoint. Amor et al. 2024 extended this to show that anti-uPAR CAR-T cells have **prophylactic and durable effects** against age-related metabolic dysfunction — a single administration of 0.5×10⁶ m.uPAR-m.28z CAR-T cells improved glucose tolerance (AUC p=0.032) and exercise capacity (duration p=0.043; maximum speed p=0.046) in aged C57BL/6 mice (18–20 months) at 2.5 months post-treatment; prophylactic treatment of young mice (3 months) sustained lower fasting glucose (p=0.0026) and improved GTT (p=0.0086) measured 15 months after infusion. The authors note this is a "proof-of-principle" result and the study was not powered to draw conclusions on longevity [^amor2024].

Important caveat from 2024 data: uPAR specificity changes with disease progression in some tissues (e.g., in advanced MASH, uPAR broadens to myeloid-lineage cells), requiring attention to target-cell context before clinical translation. #gap/needs-human-replication — entirely mouse and cell-line data for the age-metabolic-function endpoint.

| Dimension | Status |
|---|---|
| Mechanism conserved in humans? | Partial — uPAR is human-expressed; CAR construct functional in human cell assays |
| Lifespan/healthspan replicated in humans? | No — mouse-only |
| Clinical trials active? | Phase 1 being planned; no active NCT recruiting as of 2026-05-31 |

### NKG2D-targeted CAR-T / CAR-NK

NKG2D itself has been used as the recognition domain in CAR-T and CAR-NK constructs — leveraging its natural affinity for stress ligands to direct T cells or NK cells against NKG2D-ligand-expressing senescent (and tumor) cells. This approach was mentioned in Rosas-Campos 2025 as an emerging senolytic modality but lacks the direct aging-endpoint data of the uPAR approach [^rosas2025]. #gap/needs-replication — mechanistic proof-of-concept; no aging-outcome RCT or controlled mouse aging study cited.

### Senolytic vaccines

Ichim et al. 2025 reported that immunization with dendritic cells pulsed with senescent fibroblast lysate ("SenoVax") induced prophylactic and therapeutic tumor regression in lung cancer models via CD8+ T cell activation; combination with checkpoint blockade (anti-PD-L1, anti-CTLA-4) showed synergistic tumor control [^ichim2025]. This approach attempts to prime adaptive immune surveillance against shared senescent-cell antigens. #gap/needs-replication — Phase 1 data not yet published; translational path requires identification of senescence-specific peptide antigens.

---

## Limitations and gaps

- **Mouse-model dominance.** The core recognition mechanism data (NKG2D/MICA, granule exocytosis, CD4+ T cell senescence surveillance) is almost entirely from mouse models. MICA/MICB have no direct mouse orthologs — the Rae-1/H60/Mult-1 ligand family serves this role in mice but differs structurally. Human NK/MICA data exists in cell-culture coassay, but in-vivo human senescence surveillance clearance rates have not been directly measured. #gap/needs-human-replication
- **Quantitative gap.** What fraction of physiologically accumulating senescent cells are cleared per unit time in young vs. aged animals? This rate constant is unknown. The field infers declining clearance from senescent burden accumulation, but direct clearance kinetics are not established. #gap/needs-replication
- **CD8+ T cell role unclear.** CD8+ CTL contribution to non-neoplastic physiological senescent cell clearance is not well-characterized. Most data is from tumor-regression contexts. #gap/no-mechanism
- **Macrophage efferocytosis of senescent debris — quantitative data lacking.** The claim that macrophage efferocytosis of senescent cell debris declines with age is mechanistically plausible but not confirmed from a directly measured primary source in this context. #gap/unsourced
- **NKG2D/NKp30/NKp46 in-vivo aging decline.** Tarazona 2017 reviews the phenotypic changes; in-vivo receptor density on NK cells in aged humans with direct correlation to senescent-cell burden has not been established in a large cohort. #gap/needs-replication
- **Ligand-shedding quantification.** How much soluble MICA decoy is present in aged plasma vs. young, and whether this explains age-related NK dysfunction in vivo, is not established. #gap/needs-replication

---

## Footnotes

[^sagiv2016]: doi:10.18632/aging.100897 · Sagiv A et al. · *Aging (Albany NY)* 2016 · in-vivo + in-vitro · n≥6 mice per genotype (liver sections); ≥3 independent in-vitro experiments · model: IMR-90/WI38/BJ fibroblasts + human HSCs; Nkg2d⁻/⁻ C57BL/6 mice (CCl4 6 weeks) · MICA and ULBP2 surface expression required for NK killing (combined siRNA knockdown blocked NK92 cytotoxicity p<0.0001); ERK inhibition reduces ULBP2 (>50%) but not MICA (MICA is ERK-independent in established senescent cells); Nkg2d⁻/⁻ mice: 50% more fibrotic area (p<0.05) + 45% more SA-β-gal+ cells (p<0.05) · LOCAL PDF available

[^sagiv2013]: doi:10.1038/onc.2012.206 · Sagiv A et al. · *Oncogene* 2013 (pub 2012) · in-vivo + in-vitro · model: IMR-90 fibroblasts + primary human HSCs; Prf⁻/⁻ C57BL/6 mice (CCl4, 12 bi-weekly injections) · granule exocytosis (not death-receptor) required for NK killing; Dcr2 decoy receptor blocks TRAIL pathway; Prf⁻/⁻ mice: 60% more scarring vs WT (p<0.0001); granzyme-B inhibitor 3,4-DCI used in vitro only (no GzmB-KO mouse experiment) · LOCAL PDF available

[^krizhanovsky2008]: doi:10.1016/j.cell.2008.06.049 · Krizhanovsky V et al. · *Cell* 2008 · in-vivo · model: mouse CCl₄-induced liver fibrosis (6-week C57BL/6) · NK cells preferentially kill senescent activated stellate cells; NK depletion (anti-AsiaGM1 antibody) retains senescent cells and fibrosis; p53⁻/⁻ or INK4a/ARF⁻/⁻ mice (impaired senescence induction) → worse fibrosis · LOCAL PDF available

[^iannello2013]: doi:10.1084/jem.20130783 · Iannello A et al. · *J Exp Med* 2013 · in-vivo · n=10–11 per group · model: subcutaneous H-RasV12 liver tumor cells (inducible p53 shRNA) in Rag2⁻/⁻ mice · p53-dependent CCL2 secretion recruits NK cells; CCL2 neutralization (antibody, 100 µg i.p.) significantly delayed tumor elimination and reduced NK infiltration (p<0.001); CCL3/4/5 neutralization had no effect · LOCAL PDF available

[^soriani2009]: doi:10.1182/blood-2008-08-173914 · Soriani A et al. · *Blood* 2009 · in-vitro + ex-vivo · n=5 MM cell lines + 6 patient-derived plasma cell samples · model: multiple myeloma cells + therapeutic drug treatment (doxorubicin, melphalan, bortezomib) · ATM/ATR-dependent upregulation of NKG2D + DNAM-1 ligands; blocked by ATM/ATR inhibitors (caffeine, KU-55933); associated with G2/M-phase senescent phenotype · LOCAL PDF available

[^kang2011]: doi:10.1038/nature10599 · Kang T-W et al. · *Nature* 2011 · in-vivo · model: mouse Ras-OIS hepatocytes · CD4+ T cells + monocytes/macrophages required for senescence surveillance of pre-malignant hepatocytes; immune depletion → hepatocellular carcinoma · #gap/no-fulltext-access (closed-access, not_oa per a local paper archive; claims from this source cannot be independently verified)

[^xue2007]: doi:10.1038/nature05529 · Xue W et al. · *Nature* 2007 · in-vivo · model: mouse p53-null liver carcinoma (TRE-shp53 transgenic) with inducible p53 restoration · p53 restoration → senescence (not apoptosis, confirmed by absence of cleaved caspase-3 and TUNEL) → NK cell + macrophage + neutrophil innate immune clearance → complete tumor regression; broad immune suppression (dexamethasone) blocks regression · LOCAL PDF available

[^amor2020]: doi:10.1038/s41586-020-2403-9 · Amor C et al. · *Nature* 2020;583(7814):127-132 · in-vivo + in-vitro · model: orthotopic KP (*Kras^G12D^;p53^−/−^*) lung adenocarcinoma + MEK/CDK4/6i (**survival endpoint** — uPAR CAR-T significantly prolonged survival) + NRAS^G12V^ hepatocyte OIS (senescent-cell-clearance readout in NSG mice: bioluminescence ↓, NRAS^+^ p<0.01, SA-β-gal^+^ p<0.001) + CCl4 / diet-NASH liver fibrosis (fibrosis + SA-β-gal reduced p<0.001; suPAR/ALT/AST ↓) · uPAR (PLAUR) broadly induced on senescent cells; uPAR CAR-T ablate them in vitro + in vivo · **full PDF re-verified 2026-05-31** — corrects an earlier draft of this page that mislabeled the NRAS hepatocyte model as the survival endpoint (it is a clearance model; survival was the KP lung model per abstract + p.4). Consistent with the [^amor2020] verification on [[hallmarks/disabled-adaptive-immunity]]. · LOCAL PDF available

[^amor2024]: doi:10.1038/s43587-023-00560-5 · Amor C et al. · *Nature Aging* 2024 · in-vivo · n=3–4/group · model: aged C57BL/6 mice (18–20 months) + young prophylactic cohort (3 months) · 0.5×10⁶ m.uPAR-m.28z CAR-T cells: improved fasting glucose (p=0.011), GTT AUC (p=0.032), exercise duration (p=0.043), max speed (p=0.046) at 2.5 months; prophylactic glucose improvement sustained at 15 months (p=0.0026); CAR-T cells persist 12+ months; authors describe as "proof-of-principle" · LOCAL PDF available

[^tarazona2017]: doi:10.1007/s00262-016-1882-x · Tarazona R et al. · *Cancer Immunol Immunother* 2017 · review · NK cell immunosenescence: redistribution to CD56dim CD57+ subset; diminished NKp30/NKp46/DNAM-1 expression; NKG2D expression is reported as **preserved** in the elderly; CMV seropositivity modulates NKG2C/CD57 expansion · LOCAL PDF available

[^almeida2011]: doi:10.1016/j.humimm.2011.01.009 · Almeida-Oliveira A, Smith-Carvalho M, Porto LC et al. · *Hum Immunol* 2011 Apr;72(4):319-29 · observational (flow cytometry; healthy donors childhood→old age) · **NK cells: NKp30 and NKp46 decreased in elderly**; KIR increased on CD56bright subset; **NKG2D decreased on T cells (NOT NK cells) of elderly subjects**; cytotoxic activity altered with age · PMID 21262312 · **abstract directly read 2026-05-31; full-text download attempted 2026-05-31 but no OA URL available** #gap/no-fulltext-access — this is the key reconciling source (NCR-vs-NKG2D, NK-vs-T cell-type distinction); the cited finding is from the abstract verbatim
[^legarfftavernier2010]: doi:10.1111/j.1474-9726.2010.00584.x · Le Garff-Tavernier M, Béziat V, Decocq J et al. · *Aging Cell* 2010 Aug;9(4):527-35 · observational (cord blood, 18–60, 60–80, 80–100 yr) · profound CD56bright-subset decline with age; specific increase in inhibitory LIR-1/ILT-2; NK function recovers after IL-2 activation in the very old (functional defect is partly reversible) · PMID 20477761 · **abstract + metadata-level 2026-05-31; download attempted but no OA URL** #gap/no-fulltext-access
[^campos2014]: doi:10.1016/j.exger.2014.01.008 · Campos C, Pera A, Sanchez-Correa B et al. · *Exp Gerontol* 2014 Jun;54:130-7 · observational (CMV-stratified cohorts) · CD57⁺/NKG2C⁺ NK expansion tracks **CMV seropositivity rather than chronological age**; age and CMV have separable effects on CD56/CD16-defined NK subsets; most NK receptors (incl. NKG2D) show little CMV effect · PMID 24440462 · **not_oa; abstract-level 2026-05-31** #gap/no-fulltext-access
[^hazeldine2013]: doi:10.1016/j.arr.2013.04.003 · Hazeldine J, Lord JM · *Ageing Res Rev* 2013 Sep;12(4):1069-78 · review · age-related decline in per-cell NK cytotoxicity, NCR expression and IFN-γ output; CD56bright→CD56dim subset redistribution; consequences for infection/cancer surveillance in older adults · PMID 23660515 · **LOCAL PDF available (downloaded 2026-05-31); not yet read end-to-end** #gap/needs-fulltext-verification

[^zingoni2015]: doi:10.4049/jimmunol.1402643 · Zingoni A et al. · *J Immunol* 2015 · in-vitro + ex-vivo · model: MM cell lines (SKO-007(J3), U266, OPM-2, LP1) + patient-derived CD138⁺/CD38⁺ plasma cells · ADAM10 (not ADAM17) is the predominant drug-induced sheddase for MICB in senescent MM cells; ADAM10 upregulation requires ROS; marimastat (MMP/ADAM inhibitor) + chemotherapy restores NK cell degranulation; MICA*008 allele resistant to shedding; n=9 patients analyzed for ADAM10 · LOCAL PDF available

[^merkt2026]: doi:10.1126/scitranslmed.adq5442 · Merkt W et al. · *Science Translational Medicine* 2026 · in-vivo + in-vitro + human samples · model: mouse lung fibrosis + human IPF fibroblasts · senescent fibroblasts upregulate HLA-E → NKG2A checkpoint suppression of NK cells; NKG2A blockade (monalizumab) restores NK killing + reverses fibrosis · #gap/no-fulltext-access (DOI not in a local paper archive; paper too recent for OA ingest; PMID 42127218 confirmed via PubMed; claims from this source cannot be independently verified)

[^rosas2025]: doi:10.3389/fimmu.2025.1701655 · Rosas-Campos R et al. · *Front Immunol* 2025 · review · CAR-T and CAR-NK approaches targeting NKG2D ligands for senolysis; notes translational gap re: specificity and off-target effects in elderly · not locally available

[^ichim2025]: doi:10.1186/s12967-025-07393-3 · Ichim TE et al. · *J Transl Med* 2025 · in-vivo · model: mouse lung cancer + DC vaccination · SenoVax (DC pulsed with senescent fibroblast lysate) induces CD8+ T cell-mediated tumor regression; synergizes with checkpoint blockade · not locally available
