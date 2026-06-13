---
type: process
aliases: [SASP, senescence-associated secretory phenotype, senescent secretome, paracrine senescence]
key-proteins: ["[[il-6]]", "[[il-8]]", "[[il-1a]]", "[[il-1b]]", "[[cxcl1]]", "[[ccl2]]", "[[mmp1]]", "[[mmp3]]", "[[hmgb1]]"]
pathways: ["[[nf-kb]]", "[[mtor]]", "[[cgas-sting]]", "[[jak-stat]]"]
hallmarks: ["[[cellular-senescence]]", "[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
selective-variants: ["[[midas]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Coppé 2008, Kuilman 2008, Wiley 2016, and Glück 2017 verified against primary source PDFs. Acosta 2008 partially verified via title/abstract (Crossref) and companion paper text (Kuilman); full PDF not downloadable. Freund 2010 verified via PMC full-text web; mTOR/rapamycin content not found in that review — citation corrected. Kang 2015 (GATA4) DOI confirmed as 10.1126/science.aaa5612 (Science, not Cell); PDF not downloadable (green OA URL failed)."
---


# Senescence-Associated Secretory Phenotype (SASP)

The SASP is the inflammatory secretome produced by [[cellular-senescence|senescent cells]] — a complex mixture of cytokines, chemokines, growth factors, matrix metalloproteinases (MMPs), and extracellular vesicles (EVs) released constitutively after cells enter stable growth arrest. First systematically characterized by Coppé et al. in 2008 [^coppe2008], the SASP is now understood as the **mechanistic bridge between the [[cellular-senescence]] hallmark and systemic [[chronic-inflammation]]** ("inflammaging"). A single senescent cell can perpetuate its own local environment and recruit immune cells, spread senescence to neighboring cells, remodel surrounding extracellular matrix, and impair tissue regeneration — making SASP composition as important as senescence itself for aging outcomes.

## SASP composition — what is secreted

SASP is not a fixed list. Composition is highly cell-type-dependent, inducer-dependent, and time-dependent, but several categories recur across contexts [^coppe2008] [^freund2010]:

| Category | Key factors | Functional role |
|---|---|---|
| **Pro-inflammatory cytokines** | IL-6, IL-8 (CXCL8), IL-1α, IL-1β, IL-13, IL-15 | Systemic and local inflammation; paracrine senescence amplification |
| **Chemokines** | CXCL1, CXCL2, CXCL10, CCL2, CCL20 | Immune cell recruitment (neutrophils, macrophages, NK cells) |
| **Growth factors** | HGF, FGF2/7, VEGF, GM-CSF, GDF15 | Proliferative signals to neighboring cells; tumor microenvironment remodeling |
| **Matrix metalloproteinases** | MMP-1, MMP-3, MMP-10, MMP-13 | ECM degradation; tissue remodeling; invasion-permissive microenvironment |
| **Serine proteases / TIMPs** | PAI-1, IGFBP3, IGFBP7 | Coagulation, growth factor sequestration |
| **Extracellular vesicles** | Exosomes / microvesicles carrying miRNAs, proteins, mtDNA | Non-secreted cargo transfer; long-range SASP propagation |

**Core SASP** refers to the subset shared broadly across cell types and inducers (prominently IL-6, IL-8, IL-1α, MMP-3); cell-type-specific factors extend this core substantially. For example, astrocyte SASP is enriched in complement proteins, whereas fibroblast SASP is enriched in MMPs. #gap/needs-replication (systematic cross-cell-type core mapping at single-cell resolution is incomplete)

### Temporal dynamics — early vs. late SASP

SASP evolves over days after senescence induction [^freund2010]. Coppé et al. 2008 found that a robust SASP requires 4–7 days to develop after irradiation [^coppe2008]. The cited two-phase model (early TGF-β then late NF-κB) is a synthesis from multiple sources:

- **Early phase:** Dominated by TGF-β family members and IGFBP7, which are anti-proliferative and anti-tumorigenic. Early TGF-β may promote paracrine senescence without the overt inflammatory signature. #gap/unsourced (specific day-range for this phase not confirmed in Freund 2010 or Coppé 2008; may derive from Acosta 2008 or Rodier/Campisi work — needs primary citation)
- **Late phase (~day 7+, per Coppé 2008):** NF-κB-driven inflammatory SASP dominates — IL-6, IL-8, and other canonical factors. This is the phase associated with chronic pathological effects in aging.

## Transcriptional regulation

### NF-κB — the master regulator

[[nf-kb|NF-κB]] is the central transcription factor driving SASP gene expression. In senescent cells, NF-κB is persistently activated (unlike the transient activation seen in normal stress responses) via several upstream inputs:

- **IL-1α autocrine loop** — IL-1α, itself a SASP component, signals back through the IL-1 receptor to maintain NF-κB activation; this creates a positive feedback circuit that locks the SASP in the "on" state [^freund2010].
- **GATA4** — a transcription factor that accumulates in senescent cells by escaping selective autophagy-mediated degradation, activates NF-κB, and promotes SASP gene expression in a DDR-dependent but ATM/ATR-independent manner [^kang2015]. GATA4 protein levels increase in brain tissue of aging mice and humans. #gap/needs-replication (PDF not locally verified — green OA URL failed in archive; verified DOI and journal via Crossref)
- **cGAS-STING axis** (see below) — cytosolic chromatin fragments → STING → IKK → NF-κB.

### C/EBPβ

CCAAT/enhancer-binding protein β (C/EBPβ) is a critical regulator of SASP gene expression in the context of oncogene-induced senescence. Kuilman et al. 2008 showed that oncogenic stress directly activates C/EBPβ (isoforms LIP and LAP, with ~10-fold elevation of *CEBPB* mRNA), which is then recruited to the *IL6* and *IL8* promoters [^kuilman2008]. This forms a positive feedforward loop: C/EBPβ drives IL-6 expression, and IL-6 signaling in turn sustains C/EBPβ activation, amplifying the inflammatory network. C/EBPβ is required for both the induction and maintenance of OIS; its depletion causes OIS bypass and collapse of the inflammatory transcriptome. Note: this mechanism was demonstrated specifically in the context of oncogene-induced senescence (BRAF^E600), not DDR-driven senescence.

### mTOR — the translational arm

[[mtor|mTORC1]] is required for efficient SASP protein secretion, acting at the **post-transcriptional level** via at least two mechanisms:
1. **4E-BP1 phosphorylation** — mTORC1 relieves 4E-BP1's cap-dependent translation inhibition, enabling high-level production of SASP mRNAs that are typically cap-dependent.
2. **MK2/HuR axis** — mTORC1 stabilizes SASP mRNAs that carry AU-rich elements (AREs) in their 3′ UTRs.

This is why [[rapamycin]] (mTORC1 inhibitor) suppresses SASP protein levels without necessarily eliminating the senescent cell itself — the distinction between senolytic (kills senescent cells) and senomorphic (suppresses SASP) approaches. #gap/unsourced (the rapamycin–SASP suppression connection via mTORC1 post-transcriptional mechanism is not sourced to the Freund 2010 review, which does not cover mTOR; primary source for mTOR-SASP link needs to be added — likely Laberge et al. 2015 Nat Cell Biol or Herranz et al. 2015 Nat Cell Biol)

### cGAS-STING — cytosolic chromatin sensing

Cytosolic chromatin fragments (CCFs) arising from nuclear lamin B1 degradation — a characteristic feature of senescent cells — activate **cGAS**, which synthesizes cGAMP → **STING** → TBK1 → IRF3 (type I IFN induction) and NF-κB activation. Glück et al. 2017 demonstrated that diverse senescence stimuli (irradiation, oncogene activation, oxidative stress) converge on cGAS through lamin B1 loss and CCF formation, and that cGAS is required for the expression of SASP factors including IL-6 and CXCL10 [^gluck2017]. This pathway acts in parallel with, not independently of, upstream DDR signaling — cGAS-STING operates as an additional amplifier of the SASP once the nuclear envelope is compromised. cGAS knockout in MEFs and WI-38 cells markedly reduced SASP cytokine production. cGAS-STING inhibition reduces SASP in model systems #gap/needs-human-replication.

## Inducers of SASP

SASP arises whenever a cell enters stable growth arrest, but the upstream trigger shapes its character:

| Inducer | SASP Character | Notes |
|---|---|---|
| **DNA damage (DDR-driven)** | Canonical inflammatory SASP; NF-κB + ATM/ATR-dependent | Ionizing radiation, chemotherapy, replicative exhaustion |
| **Oncogene activation (OIS)** | Strong inflammatory SASP with tumor-suppressive early phase | RAS, RAF, MYC overexpression; Kuilman 2008 model |
| **Oxidative stress** | Overlaps with DDR-SASP; ROS-driven NF-κB | Mitochondrial uncoupling, peroxide exposure |
| **Mitochondrial dysfunction (MiDAS)** | Qualitatively distinct — see below | AMP/ATP-driven; relatively TGF-β-low, IFN-high |
| **Epigenome disruption** | SASP activation without obvious DNA breaks | Chromatin remodeling errors; less characterized |

### MiDAS — mitochondrial dysfunction-associated senescence

Wiley et al. 2016 defined **MiDAS** as a distinct senescence subtype with a qualitatively different SASP [^wiley2016]. Unlike DDR-driven SASP:
- MiDAS SASP **lacks the IL-1-dependent inflammatory arm** — cells do not secrete IL-1β, CXCL1, CXCL2, IL-6, IL-8, or VEGF; instead they secrete IL-10, TNF-α, and CCL27 (a pro-inflammatory cytokine unique to mouse fibroblast SASP)
- MiDAS relies on an **AMPK → p53 axis**: decreased NAD+/NADH ratio elevates the AMP/ATP ratio → activates AMPK → phosphorylates p53 (Ser-15) → p53 limits the IL-1/NF-κB arm of the SASP
- The trigger is cytosolic NAD⁺/NADH imbalance (low NAD+/NADH from impaired NADH oxidation), which also elevates the AMP/ATP ratio and activates AMPK

This matters therapeutically: interventions targeting DDR-SASP may fail to suppress MiDAS-SASP. #gap/needs-replication

### Mitochondrial RNA leakage — DAMP-sensing arm of mitochondrial-driven SASP

A mechanistically distinct mitochondrial-SASP arm — separate from Wiley 2016 MiDAS — was established by 2024–2026 work (Victorelli, López-Polo, Zhang) demonstrating that **cytosolic mitochondrial double-stranded RNA (mt-dsRNA)**, leaked into the cytoplasm via BAX/BAK miMOMP or SEC61A1-mediated permeability, activates RIG-I/MDA5 → [[mavs]] → TBK1/IKKε → IRF3/IRF7 + NF-κB → SASP amplification. Unlike MiDAS (AMPK→p53-driven *metabolic* arm), mtRNA leakage operates as a **direct DAMP-sensing axis** parallel to the better-known mtDNA→[[cgas-sting]] arm; the two arms converge on shared downstream nodes (TBK1/IKKε, IRF3, NF-κB) but are activated by distinct DAMP species. Therapeutic handles include BAX/BAK inhibition (broadly toxic), PNPase augmentation (untested), and the shared TBK1/IKKε bottleneck targetable by [[amlexanox]] / [[jak1]] inhibitors. Full mechanism, 3-lab convergence, and intervention landscape on [[mitochondrial-rna-leakage]].

## Effects on neighboring cells and tissue

### Paracrine senescence (bystander effect)

SASP can convert non-senescent neighboring cells into a senescent state — the **bystander effect**. Acosta et al. 2008 demonstrated that CXCR2-binding chemokines (including IL-8/CXCL8 and GRO-family chemokines) are the primary paracrine mediators, acting through the CXCR2 receptor to reinforce senescence in recipient cells [^acosta2008]. IL-6 plays a complementary role — Kuilman et al. 2008 showed IL-6 can act both cell-autonomously and paracrinely to maintain OIS [^kuilman2008]. This creates an expanding wave of senescent cells in aging tissues, amplifying local dysfunction beyond the original senescent population.

**HMGB1 as a redox-state-gated systemic propagator.** [[hmgb1|HMGB1]], a DAMP-class SASP factor present in the original Coppé 2008 panel, was repositioned in 2025 as a **circulating** senescence-spreading signal — Shin et al. (Jeon lab, with M.J./I.M. Conboy and C.D. Wiley as co-authors) showed that the **reduced** form of extracellular HMGB1 (ReHMGB1), but not the disulfide or sulfonyl forms, induces senescence-like phenotypes in bystander cells via the [[rage]] receptor → [[jak-stat-pathway|JAK/STAT]] + [[nf-kb|NF-κB]] axis, driving SASP gene expression and cell-cycle arrest [^shin2025]. Systemic ReHMGB1 in young mice elevated senescence markers across multiple tissues; HMGB1 inhibition in a middle-aged muscle-injury model reduced senescence, attenuated systemic inflammation, and enhanced muscle regeneration. The redox-state selectivity nominates **plasma thiol/disulfide status** as a gate on systemic senescence propagation — a potential link from organism-level redox biology to inflammaging tempo. #gap/needs-human-replication.

| Extrapolation dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (IL-6/CXCR2 signaling is human) |
| Phenotype conserved in humans? | partial (demonstrated in human cell culture; limited in-vivo evidence) |
| Replicated in humans? | in-progress (SASP plasma markers correlate with age; causal spreading not directly shown in humans) |

### Immune cell recruitment and paradoxical immunosuppression

Chemokines (CXCL1, CCL2, CXCL10) recruit neutrophils, macrophages, and NK cells to senescent foci — initially an immune surveillance mechanism to clear senescent cells. With age, this clearance becomes **inefficient** (immune senescence), so immune cells accumulate at sites of SASP without resolving them, perpetuating inflammation [^freund2010].

### ECM remodeling

MMPs secreted by senescent fibroblasts degrade basement membranes and interstitial matrix, releasing growth factor reservoirs, disrupting tissue architecture, and creating a permissive environment for tumor invasion. MMP-3 (stromelysin-1) is especially pleiotropic: it activates other MMPs, degrades laminin and fibronectin, and can activate latent TGF-β.

### Stem cell function impairment

SASP factors impair adjacent stem cell niches. IL-6, TNF-α, and TGF-β from senescent stromal cells inhibit satellite cell activation in muscle (contributing to [[sarcopenia]]), suppress hematopoietic stem cell self-renewal, and disrupt intestinal crypt homeostasis. The net effect: reduced regenerative capacity in aging tissue in a SASP-dependent manner. #gap/needs-human-replication

### Fibrosis

TGF-β (particularly in early SASP) and CTGF drive fibroblast-to-myofibroblast conversion and collagen deposition. Chronic SASP in liver, lung, and kidney contributes to age-related fibrosis. Paradoxically, acute SASP-driven TGF-β is required for normal wound healing; the same pathway becomes pathological when chronically activated.

## Role in aging — SASP as inflammaging driver

The SASP is hypothesized to be a primary driver of **inflammaging** — the low-grade sterile chronic inflammation that rises with age and predicts morbidity and mortality [^freund2010]. Mechanistically:

1. Senescent cells accumulate with age in multiple tissues (adipose, liver, skin, vasculature, brain)
2. Accumulation is not matched by clearance (immune senescence)
3. Persistent SASP elevates circulating IL-6, IL-8, CRP, and other inflammatory markers
4. Elevated systemic inflammation drives or accelerates:
   - **Atherosclerosis** — IL-6 and MMP-driven plaque instability
   - **Sarcopenia** — SASP inhibits satellite cell activation; IL-6 promotes muscle catabolism
   - **Neurodegeneration** — Senescent microglia and astrocytes produce neurotoxic SASP in Alzheimer's and Parkinson's
   - **Type 2 diabetes** — Adipose senescent cells impair insulin signaling via IL-1β and TNF-α

This causal chain is the primary rationale for [[interventions/pharmacological/senolytics|senolytic]] and **senomorphic** therapeutic strategies targeting SASP.

## Pharmacological modulation

### Senolytics — eliminating the SASP source

Senolytics clear senescent cells and thereby eliminate SASP at its source. Efficacy in reducing SASP markers has been demonstrated in mouse models for several agents:

| Agent | Target(s) | Evidence level |
|---|---|---|
| [[fisetin]] | BCL-2/XL/W family (indirect); PI3K/AKT | Reduces p16+ cells and SASP markers in aged mice; no human SASP data yet #gap/needs-human-replication |
| Dasatinib + quercetin (D+Q) | Dasatinib: BCR-ABL, c-Kit; quercetin: PI3K, HSP90 | Phase I/II human trials; reduced circulating SASP markers in IPF and CKD patients |
| Navitoclax (ABT-263) | BCL-2, BCL-XL, BCL-W | Potent senolytic; thrombocytopenia limits use (BCL-XL on platelets) |
| UBX0101 | MDM2 (p53/p21 axis) | Phase II failed for OA; senolytic mechanism not sufficient alone |

### Senomorphics — suppressing SASP output

Senomorphics suppress SASP secretion without killing senescent cells, which avoids senolytic on-target toxicities (e.g., clearance of beneficial wound-healing senescence):

| Agent | Mechanism | Notes |
|---|---|---|
| [[rapamycin]] / rapalogs | mTORC1 inhibition → ↓ SASP translation | Reduces SASP in mouse models; anti-aging effects potentially SASP-mediated |
| JAK1/2 inhibitors (ruxolitinib, baricitinib) | Block JAK-STAT downstream of IL-6/IFN | Human trials underway; reduces senescence-associated inflammatory markers |
| [[metformin]] | AMPK activation → mTOR ↓; NF-κB inhibition | Epidemiologic association with reduced inflammaging markers; TAME trial ongoing |
| NF-κB inhibitors (e.g., parthenolide) | Block NF-κB nuclear translocation | Reduces SASP in vitro; systemic toxicity limits therapeutic window |
| Methotrexate (low-dose) | Folate antagonist; NF-κB suppression at low doses | Observational: rheumatoid arthritis patients have lower SASP-associated mortality |
| BET bromodomain inhibitors (e.g., JQ1) | Suppress NF-κB-dependent transcription | Preclinical senomorphic; no human aging trials |

## Methods for studying SASP

- **Multiplex cytokine arrays (Luminex, Olink)** — measure 10–100+ SASP factors simultaneously in conditioned medium or plasma; limited by antibody cross-reactivity and calibrator-dependent quantification.
- **Conditioned medium (CM) paracrine assays** — CM from senescent cells applied to reporter cells; readouts include β-galactosidase, p21 induction, or growth arrest. Gold standard for demonstrating bystander effect.
- **Single-cell RNA-seq / single-cell proteomics** — capture SASP heterogeneity at the individual-cell level; expensive but increasingly feasible for in-vivo senescent populations. #gap/needs-replication (whole-tissue single-cell SASP atlases in human aging are nascent)
- **Plasma biomarkers** — IL-6, GDF15, PAI-1, p16 in circulating cells as proxy SASP measures in humans. None is specific to SASP vs. other inflammatory sources. #gap/unsourced (no validated SASP-specific blood test)
- **Proximity extension assays (PEA)** — ultra-sensitive plasma proteomics (Olink); increasingly used in cohort studies to link SASP markers to aging phenotypes.

## Limitations and gaps

- **SASP heterogeneity is under-mapped.** Cell-type- and inducer-specific SASP compositions are described for fibroblasts and epithelial cells but are incomplete for neurons, cardiomyocytes, and tissue-resident immune cells. #gap/needs-replication The NIH SenNet Consortium Perspective (Suryadevara et al. 2026 [^suryadevara2026_sasp]) frames this heterogeneity — including microenvironmental context within a tissue — as a systematic "senotype" problem best addressed by single-cell and spatial multi-omics; see [[cellular-senescence]] § *Senescent-cell heterogeneity and the senotype concept* and [[studies/suryadevara-2026-senotypes]].
- **Causal evidence in humans is indirect.** Clearance of senescent cells (senolytics) reducing SASP markers in humans has been demonstrated only in small trials (n < 30 for most). The link from SASP reduction to clinical outcomes has not been established. #gap/needs-human-replication
- **No validated blood-based SASP biomarker.** Plasma IL-6 is confounded by infection, autoimmunity, and adiposity; GDF15 by hypoxia and cancer. Composite SASP scores (p16 + GDF15 + PAI-1) show promise but need prospective validation. #gap/needs-replication
- **Beneficial SASP roles** (wound healing, embryonic development, tumor suppression) mean blanket SASP suppression may carry costs. The therapeutic window for senomorphic strategies is not established. #gap/dose-response-unclear
- **MiDAS SASP is understudied.** The mitochondrial dysfunction-driven subtype may dominate in metabolic disease contexts, but dedicated therapeutic approaches targeting MiDAS-SASP are nascent. #gap/no-mechanism

## Cross-references

Related entities: [[cellular-senescence]] · [[chronic-inflammation]] · [[fisetin]] · [[mtor]] · [[nf-kb]] · [[cgas-sting]] · [[interventions/pharmacological/senolytics]] · [[jak-stat]] · [[midas]] · [[sarcopenia]] · [[hallmarks-of-aging]]

## Footnotes

[^coppe2008]: doi:10.1371/journal.pbio.0060301 · in-vitro + in-vivo · n=5 human fibroblast strains (WI-38, IMR-90, BJ, HCA-2, hBF) + normal and transformed prostate epithelial cells; 41/120 array proteins significantly altered · foundational characterization of SASP cytokine profile across cell types and senescence inducers (REP, XRA, RAS); SASP requires 4–7 days to develop post-irradiation · model: human fibroblasts and human prostate epithelial cells; in-vivo arm: prostate tumor biopsies pre/post chemotherapy
[^acosta2008]: doi:10.1016/j.cell.2008.03.038 · in-vitro · CXCR2-binding chemokines (IL-8/CXCL8 and GRO-family) are primary paracrine mediators; CXCR2 receptor signaling reinforces OIS; companion paper to Kuilman 2008 · model: human fibroblasts (BJ, IMR90) and human melanocytes · PDF not locally downloadable (OA URL failed in archive; title and authorship confirmed via Crossref)
[^kuilman2008]: doi:10.1016/j.cell.2008.03.039 · in-vitro · C/EBPβ recruited to IL-6 and IL-8 promoters during OIS; IL-6 required for both induction and maintenance of OIS in cell-autonomous and paracrine fashion; C/EBPβ–IL-6 positive feedforward loop amplifies inflammatory network · model: human diploid fibroblasts (Tig3(et)/16i HDF); also IMR90 and normal human melanocytes; in-vivo arm: human colorectal adenomas (n=20 FFPE samples)
[^freund2010]: doi:10.1016/j.molmed.2010.03.003 · review · covers IL-1α autocrine loop → NF-κB as SASP maintenance mechanism; SASP develops "over several days"; immune clearance efficiency and senescent cell accumulation with age; does not cover mTOR/rapamycin-SASP connection (that claim needs separate citation) · PDF not locally downloadable; verified via PMC full-text web (PMC2879478)
[^wiley2016]: doi:10.1016/j.cmet.2015.11.011 · in-vitro + in-vivo · MiDAS SASP defined; AMPK-p53 axis distinct from DDR senescence; NAD⁺/AMP-driven · model: human IMR90, mouse models
[^gluck2017]: doi:10.1038/ncb3586 · in-vitro + in-vivo · cGAS recognizes cytosolic chromatin fragments (CCFs) arising from lamin B1 degradation in senescent cells; STING → TBK1 → IRF3 (type I IFN) and NF-κB drives SASP; cGAS-STING required for SASP across multiple senescence inducers (IR, oncogene, oxidative stress); cGAS-STING also regulates senescence in vivo (irradiation and NrasG12V OIS models) · model: mouse MEFs (C57BL/6, cGAS KO, STING KO) and human WI-38 fibroblasts
[^shin2025]: [[studies/shin-2025-rehmgb1-paracrine-senescence]] · in-vitro + in-vivo · ReHMGB1 (reduced form, 20 μg/mL × 72 h) but not OxHMGB1 induces senescence in WI-38/BJ/renal epithelial/HSKM via RAGE-mediated JAK2/STAT1 + PI3K-AKT/NF-κB; transcriptome closely resembles IR-induced primary senescence (1,087 DEGs); systemic ReHMGB1 (5 mg/kg IV, 3-mo C57BL/6J, 7 dpt) elevates p21 in GA/TA/liver, p16+/p21+ TA myofibers, IL-6 + IL-1β in serum; pharmacological rescue with FPS-ZM1 (100 nM RAGE antagonist) or Momelotinib (0.3 μM JAK2i) abrogates senescence; anti-HMGB1 mAb (3E8 clone, 0.1 mg/kg IV) in 15-mo BaCl₂ TA injury restores grip strength, increases MyoD+ progenitors, partially restores fiber CSA; ReHMGB1 elevated in 70–80 yr human serum (Supp Fig 6) · model: human cell lines + young/middle-aged C57BL/6J mice; supplementary human-serum cohort · PDF verified 2026-05-20
[^kang2015]: doi:10.1126/science.aaa5612 · in-vitro + in-vivo · GATA4 accumulates in senescent cells by escaping p62-dependent selective autophagy; GATA4 activates NF-κB and SASP; GATA4 accumulates in aging mouse and human brain · Science 349:1–7, 2015 · model: multiple human and mouse cell lines; in-vivo: aging mouse and human brain tissue · PDF not locally verified (green OA in archive but download failed)
[^suryadevara2026_sasp]: [[studies/suryadevara-2026-senotypes]] · Suryadevara V et al.; NIH SenNet Consortium; Robbins P, Fan R · review (Perspective) · doi:10.1016/j.cell.2026.05.028 · *Cell* 189(12):3501–3505 · 2026 Jun 11 · model: human tissue atlas framework · note: paywalled; abstract-sourced only; introduces "senotype" concept for tissue-specific senescent cell states shaped by microenvironmental interactions
