---
type: hallmark
aliases: [inflammaging, sterile inflammation]
category: integrative
mechanistic-tier: integrative
intervention-tractability: high
caused-by: ["[[cellular-senescence]]", "[[genomic-instability]]", "[[mitochondrial-dysfunction]]", "[[disabled-macroautophagy]]", "[[dysbiosis]]", "[[stem-cell-exhaustion]]"]
causes: ["[[stem-cell-exhaustion]]", "[[atherosclerosis]]"]
introduced: 2023
sens-correspondence: []
key-pathways: ["[[nf-kb]]", "[[nlrp3-inflammasome]]", "[[sasp]]", "[[cgas-sting]]", "[[jak-stat-pathway]]", "[[cholinergic-anti-inflammatory-pathway]]"]
key-phenotypes: ["[[atherosclerosis]]", "[[type-2-diabetes]]", "[[sarcopenia]]", "[[neurodegeneration]]", "[[alzheimers-disease]]", "[[frailty]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Rodier 2009 two-arm SASP verified against local PDF; CANTOS NEJM (Ridker 2017) MACE HR and infection safety figures verified against local PDF; Jaiswal 2014 CHIP prevalence and cardiovascular HR verified against local PDF; CHD CI corrected 1.2–3.4→1.2–3.5. Ridker 2017 Lancet (cancer analysis) not verified — OA URL returned 403, download failed; Lancet-derived cancer figures remain unverified. Franceschi 2000 and Childs 2016 not verifiable (closed-access, not_oa). López-Otín 2023 not verifiable (download failed). This is a synthesis-MOC: claim details live on canonical atomic pages. **2026-05-12 propagation pass:** added 'HMW-HA augmentation' subsection to Therapeutic landscape integrating Zhang 2023 (Nature, doi:10.1038/s41586-023-06463-0; verified against PMC10666664 HTML in [[studies/zhang-2023-nmrhas2-mouse-healthspan]]) and Termeer 2002 (LMW-HA → TLR4 DAMP mechanism); MW-direction-of-effect framing added; cross-references updated. **2026-05-12 Chen 2025 supplement:** added cGAS dual-role framing note (nuclear HR-suppression arm vs cytosolic cGAMP-synthesis arm; NMR cGAS variant dissociation; TRIM41/VCP therapeutic angle) citing Chen 2025 Science (doi:10.1126/science.adp5056; abstract-only, #gap/no-fulltext-access); cross-links added: [[cgas]], [[trim41]], [[vcp]], [[interventions/pharmacological/cgas-modulators]], [[studies/chen-2025-nmr-cgas-hr-repair]], [[hallmarks/genomic-instability]] bridging note."
---

# Chronic inflammation

Chronic, sterile, low-grade systemic inflammation that accumulates with age in the absence of overt infection — the "**inflammaging**" phenotype first named by Franceschi et al. in 2000 [^franceschi2000]. **Elevated to a standalone Integrative hallmark in the 2023 López-Otín revision** [^lopezOtin2023], having previously been treated as a sub-aspect of [[altered-intercellular-communication]] in the 2013 framework. The separation reflects accumulating evidence that chronic inflammation has distinct molecular drivers, independent therapeutic targets, and now human interventional proof-of-concept (the CANTOS trial).

This page is a **synthesis-MOC**: quantitative details, n's, p-values, and mechanism statements live on their canonical atomic pages. Claims here are one-sentence pointers with wikilinks.

---

## Why split off from altered-intercellular-communication in 2023

Three developments justified elevation to a standalone hallmark [^lopezOtin2023]:

1. **Distinct molecular drivers** — NF-κB persistent activation, NLRP3 inflammasome priming, and SASP are separable from the endocrine/paracrine signaling changes that define the parent hallmark
2. **Substantial clinical evidence** — the CANTOS Phase 3 RCT established that specifically targeting the IL-1β limb of the inflammatory cascade reduces cardiovascular events in humans, providing proof-of-concept independent of lipid lowering — see [[nf-kb]] (verified) and [[atherosclerosis]] (verified-partial)
3. **Independent therapeutic targets** — anti-IL-1β (canakinumab), anti-IL-6, JAK inhibitors, and senolytics/senomorphics each address distinct nodes; this class of interventions has no parallel in the endocrine-signaling component of [[altered-intercellular-communication]]

---

## Definition — what inflammaging is (and is not)

**Inflammaging** is not an acute inflammatory episode. Key distinguishing features:

- **Sterile** — no pathogen trigger; driven by endogenous DAMPs and cell-derived secretomes
- **Chronic and low-grade** — elevated hsCRP (~2–10 mg/L), IL-6, and TNF-α at levels well below those seen in acute infection. Serum [[ferritin]] also rises as an IL-6-driven acute-phase reactant, making elevated ferritin a partial inflammaging proxy in older adults — but one easily mistaken for true iron overload (the two require transferrin-saturation/CRP co-interpretation to distinguish)
- **Systemic** — circulating markers rise with age in multiple tissue compartments
- **Poorly resolved** — the normal inflammation-resolution machinery (specialized pro-resolving mediators: resolvins, protectins, maresins) is impaired in aged tissues #gap/no-mechanism

Contrast with **immunosenescence** ([[immunosenescence]] — verified-partial): immunosenescence describes the *functional decline* of adaptive immunity (naïve T/B cell loss, thymic involution); inflammaging describes the *activated* state of the innate immune axis. They are co-occurring and mutually reinforcing but conceptually distinct.

---

## Core molecular drivers

### 1. Senescent cell SASP

The SASP is the mechanistic bridge between [[cellular-senescence]] and chronic systemic inflammation. Senescent cells constitutively secrete IL-6, IL-8, IL-1α, CCL2, and MMPs — canonical NF-κB-driven targets — accumulating in multiple tissues with age and evading immune clearance. See [[sasp]] (verified) for composition, temporal dynamics (SASP requires 4–7 days to develop post-induction), and regulation.

The causal link: senescent cell burden → SASP → elevated circulating IL-6/IL-8 → systemic inflammaging. Senolytics reduce this burden — see [[interventions/pharmacological/senolytics]] (verified-partial).

**Cardiomyocyte exception**: cardiomyocytes produce a non-canonical SASP (TGF-β2/GDF15/EDN3) without IL-6/IL-8 — see [[cardiomyocytes]] (implicit stub) #gap/unsourced.

### 2. NF-κB persistent activation

[[nf-kb]] (verified) is the master transcriptional driver of the inflammatory gene program in aging. In normal physiology, NF-κB activation is transient and self-limiting (IκBα resynthesis feedback). In senescent cells, the IL-1α autocrine loop locks NF-κB in the "on" state indefinitely. Beyond senescent cells, NF-κB is aberrantly elevated in aged post-mitotic tissues via:

- ROS-mediated IKKβ activation and IκBα oxidation
- cGAS-STING signaling from cytosolic chromatin fragments ([[cgas-sting]] — implicit stub)
- Mitochondrial DAMPs activating TLR9 and NLRP3

**cGAS dual-role note (genomic-instability linkage):** [[cgas]] performs two mechanistically independent functions that connect [[hallmarks/genomic-instability]] to this hallmark at a single molecular node. The canonical cytosolic-sensing arm (cGAS detects cytoplasmic dsDNA → cGAMP synthesis → STING → IRF3/NF-κB → IFN/IL-6/TNF) drives inflammaging as described above. A second, parallel nuclear arm was described by Liu et al. 2018 (*Nature*) and extended by Chen et al. 2025 (*Science*): nuclear-retained cGAS binds chromatin and directly suppresses homologous-recombination (HR) repair by blocking RAD51 loading at DSBs [^chen2025]. These two arms are independent — the NMR-derived cGAS variant characterized by Chen et al. 2025 (PMID 41066557) retains normal cGAMP synthesis but has attenuated chromatin retention, blunting the HR-suppression arm selectively [^chen2025]. This distinction has direct therapeutic implications: **pan-cGAS enzymatic inhibitors** (currently in autoimmune-indication clinical development; see [[interventions/pharmacological/cgas-modulators]]) block both arms simultaneously, potentially impairing the genome-protective chromatin function. Alternatively, **chromatin-retention enhancers** targeting [[trim41]] or [[vcp]] (the ubiquitin-proteasome axis that controls nuclear cGAS extraction) could selectively address the genomic-stability arm without suppressing innate-immune cGAMP signaling. See [[studies/chen-2025-nmr-cgas-hr-repair]] for full experimental detail. #gap/no-fulltext-access

Key NF-κB target genes relevant to inflammaging: *IL6*, *IL8*, *IL1A*, *IL1B*, *TNF*, *CXCL1*, *CCL2*, *MMP1*, *MMP3*, *BCL2*, *BCL-XL* (the last two enabling senescent cell survival). See [[nf-kb]] for the full target gene table and CANTOS context.

### 3. NLRP3 inflammasome priming and activation

The NLRP3 inflammasome senses DAMPs arising with age — mitochondrial ROS, extracellular ATP, cholesterol crystals, β-amyloid, **saturated fatty acids (especially [[palmitic-acid]])** — and recruits [[asc]] + [[caspase-1]] to cleave pro-IL-1β and pro-IL-18 to their active secreted forms (R24b/d). NLRP3 is itself an NF-κB transcriptional target (signal 1 = priming; signal 2 = activation), creating a positive feedback loop. Activated [[caspase-1]] also cleaves [[gsdmd]], which forms plasma-membrane pores driving [[pyroptosis]] (R24d) — lytic inflammatory cell death that further amplifies inflammaging via DAMP release ([[hmgb1|HMGB1]], ATP). Released [[hmgb1|HMGB1]] engages [[rage]] on neighboring cells and — in its reduced (ReHMGB1) form — propagates senescence via [[jak-stat-pathway|JAK/STAT]] + NF-κB (Shin 2025; full mechanism on [[hmgb1]]). [[nlrp3-inflammasome]] (drafted) anchors the platform biology; see [[atherosclerosis]] (verified-partial) for the specific cholesterol crystal → NLRP3 → IL-1β burst in atherogenesis. Dietary palmitic acid activates NLRP3 via multiple mechanisms (Cys898 palmitoylation; ER-stress → TXNIP induction; intracellular crystallization in macrophages) — see [[palmitic-acid]]; [[mediterranean-diet]] is the RCT-validated dietary lever for displacing palmitate exposure. The integrating pathway page for the IL-1 family (IL-1α / IL-1β / IL-18 / IL-1Ra / IL-1R1 / receptor architecture / [[myd88]]–[[irak4]]–[[traf6]]–[[tak1]]–NF-κB transduction) is [[il-1-signaling]] (verified) — it consolidates the receptor + signal-transduction biology shared across the IL-1 cluster.

### 4. Mitochondrial DAMPs

Damaged mitochondria release:
- **mtDNA** — sensed by cGAS-STING and TLR9 → NF-κB activation
- **Cardiolipin** — activates the NLRP3 inflammasome
- **TFAM** — released by necrotic/apoptotic cells; TLR9 ligand

This links [[mitochondrial-dysfunction]] directly to inflammaging as an upstream driver. #gap/unsourced (specific contribution of mitochondrial DAMPs to systemic NF-κB in aged humans not established).

### 5. Gut barrier dysfunction → endotoxemia

With age, gut barrier integrity declines (reduced tight-junction protein expression, dysbiotic microbiome shifts) → increased circulating LPS → systemic TLR4-NF-κB activation. This is the mechanistic link between [[dysbiosis]] (spun off in 2023 as a co-equal hallmark) and chronic inflammation. #gap/unsourced (magnitude of LPS leak contribution to systemic inflammaging in humans is not quantified).

### 6. Immunosenescence-driven failure of resolution

Aged NK cells and macrophages show impaired phagocytic clearance of senescent cells, allowing the SASP-producing population to accumulate. T regulatory cell (Treg) function declines with age, reducing anti-inflammatory suppression. Th17 skewing increases pro-inflammatory IL-17 output. See [[immunosenescence]] (implicit stub — needs seeding from `hallmarks/immunosenescence.md`). #gap/unsourced on Th17 skewing quantitative data.

**Loss of neural anti-inflammatory tone.** A distinct, often-overlooked resolution failure is decline of the [[pathways/cholinergic-anti-inflammatory-pathway]] — the vagus → splenic [[molecules/proteins/chrna7|α7nAChR]] → NF-κB-suppression reflex that endogenously caps cytokine output. Vagal tone (and its readout [[biomarkers/heart-rate-variability-biomarker|heart-rate variability]]) declines with age, plausibly removing a brake on inflammaging. Note the evidence here is mechanistic/associational, not a demonstrated causal driver of human aging — the strong "autonomic imbalance is *the* upstream cause of aging" framing is not established. #gap/needs-human-replication

---

## Cross-talk with other hallmarks

This is the hallmark with the richest network of bidirectional connections:

| Hallmark | Direction | Mechanism | Canonical page |
|---|---|---|---|
| [[cellular-senescence]] | ↔ bidirectional | SASP drives chronic inflammation; SASP cytokines promote paracrine senescence | [[sasp]] (verified) |
| [[stem-cell-exhaustion]] | ← chronic inflammation drives | Inflammaging biases HSCs toward myeloid output (Beerman 2010); SASP impairs satellite cell activation | [[hematopoietic-stem-cells]] (verified-partial) |
| [[mitochondrial-dysfunction]] | → feeds inflammation | Mitochondrial DAMPs → TLR9, cGAS-STING, NLRP3 | [[nf-kb]] (verified) |
| [[dysbiosis]] | → feeds inflammation | Gut barrier loss → LPS endotoxemia → TLR4-NF-κB | [[altered-intercellular-communication]] (stub) |
| [[genomic-instability]] | → feeds inflammation | DDR → ATM-NEMO → NF-κB; persistent DSBs in aged cells | [[dna-damage-response]] (verified-partial) |
| [[epigenetic-alterations]] | ↔ | NF-κB drives epigenetic changes at inflammatory loci; aging methylome shifts affect inflammatory gene regulation | #gap/unsourced |
| [[deregulated-nutrient-sensing]] | ↔ | mTOR amplifies SASP protein output; AMPK suppresses NF-κB; insulin resistance promotes inflammatory macrophage polarization | [[mtor]] (verified-partial), [[ampk]] (verified) |

---

## Disease phenotypes — the inflammaging syndrome

Chronic inflammation is the convergent mechanism underlying the major age-related morbidities:

### Atherosclerosis

The IL-1β → IL-6 → CRP cascade drives endothelial dysfunction and foam cell formation. **CANTOS (Ridker 2017, NEJM)** demonstrated that anti-IL-1β (canakinumab 150 mg q3mo) reduced MACE by HR 0.85 (95% CI 0.74–0.98, p=0.021) in 10,061 patients with prior MI and hsCRP ≥2 mg/L, without LDL-C reduction — the first human proof-of-concept that targeting inflammation per se (not lipid) reduces cardiovascular events [^ridker2017]. Fatal infection/sepsis increased (0.31 vs 0.18/100 person-years, p=0.02). See [[atherosclerosis]] (verified-partial) and [[nf-kb]] (verified) for full CANTOS numerics.

**Senolytic angle**: Genetic clearance of p16⁺ senescent cells in LDLR⁻/⁻ mice reduced plaque burden ~60% (Childs 2016) [^childs2016], establishing senescent cells as causal drivers. **Mouse data only; no human senolytic cardiovascular trial completed** #gap/needs-human-replication. See [[atherosclerosis]] (verified-partial).

### Type 2 diabetes

Adipose tissue macrophage infiltration and IL-1β/TNF-α drive insulin resistance via IRS-1 serine phosphorylation — disrupting the insulin signaling cascade. See [[type-2-diabetes]] (verified-partial). NF-κB in adipose tissue connects the metabolic and inflammatory axes. IL-6 has pleiotropic roles (pro-inflammatory systemically; potentially insulin-sensitizing in skeletal muscle acutely) — the net effect is context-dependent. #gap/contradictory-evidence

### Neurodegeneration and Alzheimer's disease

DAM (disease-associated microglia) populations are the primary CNS inflammaging effectors. [[microglia]] (verified-partial) shows TREM2-dependent two-step DAM activation, primed microglial exaggerated IL-1β responses, and impaired Aβ clearance with age. The TREM2 R47H variant (OR ~2.9 for AD, Jonsson 2013) directly implicates microglial inflammatory dysregulation in AD risk. Complement-dependent synapse pruning is aberrantly reactivated in aging. See [[alzheimers-disease]] (verified-partial) and [[neurodegeneration]] (implicit stub).

CNS inflammaging ("neuroinflammaging") is largely driven by senescent-like microglia producing a neurotoxic SASP-equivalent; this overlaps with but is distinct from systemic inflammaging.

### Sarcopenia

IL-6 and TNF-α from systemic inflammation and local senescent cells promote muscle proteolysis (via NF-κB-driven ubiquitin-proteasome pathway) and suppress satellite cell activation (critical for muscle repair). The inflammatory tone of aged muscle interstitium is a primary mechanism linking inflammation to functional decline. See [[sarcopenia]] (stub; needs seeding).

### Frailty

Frailty is the composite aging phenotype most tightly associated with inflammatory biomarkers. hsCRP and IL-6 are consistent predictors of frailty onset and progression in prospective cohort studies. The causal direction (inflammation → frailty vs frailty → inflammation) is debated — likely bidirectional. #gap/contradictory-evidence #gap/unsourced (specific cohort HR data for IL-6 → frailty not linked here; needs primary study page).

### Clonal hematopoiesis (CHIP) — inflammation linkage

CHIP — age-associated clonal expansion of HSCs carrying *DNMT3A*, *TET2*, or *ASXL1* mutations — is prevalent in ~10% of people over 70 years [^jaiswal2014]. TET2-mutant macrophages (derived from CHIP clones) produce excess IL-1β and IL-6, directly driving systemic inflammaging and cardiovascular risk (HR 2.0, 95% CI 1.2–3.5 for coronary heart disease in Jaiswal 2014). This creates a vicious cycle: aging → CHIP → pro-inflammatory macrophages → more inflammaging → potentially more CHIP fitness advantage. See [[hematopoietic-stem-cells]] (verified-partial) for CHIP epidemiology.

| Dimension (CHIP-inflammation link) | Status |
|---|---|
| Pathway conserved in humans? | yes — human exome data |
| Phenotype conserved in humans? | yes — CHIP associated with CV events in humans |
| Replicated in humans? | yes (CHIP prevalence + CV risk: Jaiswal 2014, Genovese 2014) |

---

## SASP → DNA damage response connection

The DDR → SASP arm is **p53-independent** — a critical mechanistic clarification. Rodier et al. 2009 demonstrated two separable DDR arms [^rodier2009]:

1. **Growth arrest arm** — dependent on p53/p21 (canonical)
2. **SASP arm** — dependent on ATM/NBS1/CHK2 but **explicitly p53-independent** — cells with p53 knockdown continue to produce SASP after DNA damage

This means SASP suppression cannot be achieved by simply activating p53-mediated apoptosis or quiescence; the SASP arm requires separate targeting. IL-6 increases ~50× and IL-8 ~10× post-irradiation in this paradigm; both require ATM. See [[dna-damage-response]] (verified-partial) and [[atm]] (verified).

---

## Therapeutic landscape

This is the **wiki's strongest clinical-evidence hallmark** — multiple drug classes have completed Phase 2–3 trials with relevance to the inflammaging axis.

### Anti-IL-1 axis (canakinumab — CANTOS class; anakinra)

The CANTOS trial is the proof-of-concept anchor for the field. IL-1β blockade (150 mg [[canakinumab]] q3mo, n=10,061) reduced MACE without LDL change; exploratory analysis (separate Lancet paper [^ridker2017lancet]) showed fatal cancer reduced in pooled canakinumab (incidence rate 0.45 vs 0.64/100 person-years for 300 mg cancer mortality HR 0.49, 95% CI 0.31–0.75, p=0.0009) and incident lung cancer reduced at 150 mg (HR 0.61) and 300 mg (HR 0.33). **The cancer signal has now been tested in four prospective NSCLC trials — CANOPY-A (adjuvant), CANOPY-1 (first-line metastatic), CANOPY-2 (advanced), and CANOPY-N (neoadjuvant) — all reported negative primary endpoints (Garon et al. 2024 / 2024 / 2023 / 2025 JCO + JTO).** The CANTOS exploratory cancer signal **does not replicate in therapeutic-setting NSCLC**. The cardiovascular MACE finding remains intact and replicates in IL-pathway meta-analyses (He 2025 25-RCT MACE RR 0.86); a 2026 FAERS pharmacovigilance analysis (Wang 2026, n=9,262) confirms infection-signal direction. Three prevention-setting trials remain open (Can-Prevent-Lung NCT04789681, CANIFS NCT06038526, CCUS-prevention NCT05641831) — the prevention-vs-therapeutic distinction is the live open question. #gap/contradictory-evidence — the original Ridker 2017 cancer-prevention hypothesis does not generalize to NSCLC therapy; whether it holds in pre-malignant or prevention populations remains unanswered. Canakinumab is not used for aging; infection risk precludes broad deployment. See [[canakinumab]] (verified) for full updated trial inventory.

**Sibling anti-IL-1 strategy — receptor antagonism:** [[anakinra]] (verified) is the recombinant IL-1 receptor antagonist (rIL-1Ra; the drug form of endogenous [[il-1ra]]) — it competitively blocks IL-1R1, neutralizing **both** IL-1α and IL-1β signaling (whereas canakinumab is IL-1β-specific). FDA-approved for rheumatoid arthritis (2001) and CAPS/NOMID (2012); short half-life (~4–6 h) requires daily dosing. Anakinra has **no completed CV-outcomes trial** (the CV-aging signal is exclusively from CANTOS / canakinumab); off-label cardiovascular use is exploratory. Aging-rejuvenation trials are absent. The receptor-antagonism vs IL-1β-specific-mAb choice represents a meaningful mechanistic split: **blocking IL-1α matters in some contexts and is counterproductive in others** — see paradox below.

**IL-1α / AAA paradox (Salmon 2022):** IL-1α blockade *worsens* abdominal aortic aneurysm progression in mice — counterintuitive given the general SASP-suppression rationale for anti-IL-1 strategies in vascular aging [^salmon2022]. This suggests IL-1α neutralization (via anakinra-class receptor antagonism, or anti-IL-1α-specific biologics like bermekimab) is **not interchangeable** with IL-1β-specific blockade (canakinumab) for vascular endpoints. The mechanism likely reflects an early, IL-1α-driven adaptive remodeling response in arterial wall homeostasis that is protective rather than pathogenic. **Translation tension:** the CANTOS-validated cardiovascular benefit of canakinumab cannot be naively extrapolated to anakinra for vascular indications, despite both being anti-IL-1 biologics. This is a worked example of why receptor-level vs ligand-specific blockade choices matter in inflammaging therapeutics. #gap/needs-human-replication for AAA-anti-IL-1α extrapolation.

### Senolytics — clearing the SASP source

[[interventions/pharmacological/senolytics]] (verified-partial): selectively kill senescent cells, eliminating SASP at its source. Dasatinib + quercetin (D+Q) are the most clinically studied; human trials have measured circulating SASP markers as secondary endpoints (IPF, CKD populations). No cardiovascular-endpoint senolytic trial exists as of 2026. #gap/needs-human-replication

### Senomorphics — suppressing SASP output

[[interventions/pharmacological/senomorphics]] (verified-partial): suppress SASP without killing senescent cells. Key agents and their strongest evidence:

| Agent | Mechanism | Best human evidence |
|---|---|---|
| Canakinumab (anti-IL-1β) | IL-1β neutralization → NF-κB loop interruption | CANTOS Phase 3 (CV endpoints) [^ridker2017] |
| Ruxolitinib (JAK1/2i) | Block IL-6/IFN downstream of SASP | Xu 2015: SASP↓ + physical function↑ in aged mice; human aging trials in-progress #gap/needs-human-replication |
| Rapamycin (mTORC1i) | ↓ SASP translation via 4E-BP1/MK2/ZFP36L1 | Preclinical SASP suppression; lifespan extension in mice via multiple mechanisms |
| Metformin | AMPK activation → mTORC1 inhibition + NF-κB suppression | TAME trial ongoing (aging composite endpoint, ~2028) |
| Statins | Pleiotropic anti-inflammatory (CRP↓, eNOS↑) independent of LDL-C | Multiple large CVD trials; anti-inflammatory contribution contested |
| JAK inhibitors (baricitinib) | JAK-STAT suppression | RA/COVID-19 approved; aging trials preclinical |

The senomorphic vs senolytic strategy question has not been settled by any head-to-head human trial. #gap/needs-replication

### Colchicine

The COLCOT trial (n=4,745 post-MI) showed colchicine 0.5 mg/day reduced composite MACE HR 0.69 (95% CI 0.57–0.83, p<0.001). Low-cost anti-inflammatory now recommended post-MI in several guidelines. Mechanism likely involves NLRP3 inflammasome inhibition + microtubule effects on neutrophil function. Colchicine compound page is an implicit stub. #gap/unsourced (COLCOT specific numerics not independently confirmed against local PDF on this page — cite [[atherosclerosis]] verified-partial for now).

### SGLT2 inhibitors — caloric-restriction-mimetic + anti-inflammatory dual track

[[empagliflozin]] (verified) is FDA-approved for T2D (2014), HFrEF/HFpEF (2021), and CKD (2023). Mechanism is dual-track relative to inflammaging: caloric-loss → BHB ketogenesis → **HDAC class I/IIa inhibition** + **NLRP3 inflammasome suppression** (BHB-mediated, IL-1β/IL-18↓ in preclinical models — #gap/needs-human-replication in the empagliflozin context). Uric-acid reduction (~10–15% via URAT1 inhibition) plausibly contributes additional anti-inflammatory effect. Trial-validated CV mortality benefit (EMPA-REG OUTCOME HR 0.62, p<0.001) is mechanistically multifactorial — hemodynamic + metabolic + anti-inflammatory contributions are difficult to separate. No aging-endpoint human RCT in non-diabetic older adults. See [[empagliflozin]] for full mechanism + trial inventory.

### HMW-HA augmentation — comparative-biology-derived intervention class (preclinical)

High-molecular-weight hyaluronic acid ([[hyaluronic-acid|HMW-HA]], ≥1 MDa) is the dominant healthy-tissue form of hyaluronan and acts as an **endogenous anti-inflammatory** signaling ligand via [[cd44|CD44]] receptor clustering: HMW-HA → CD44 cluster → merlin (NF2) activation → suppression of YAP/TAZ and NF-κB; HMW-HA also polarizes macrophages toward an anti-inflammatory M2-like phenotype. The MW-direction-of-effect is critical: **LMW-HA (<500 kDa, generated by hyaluronidase or oxidative fragmentation) is conversely PRO-inflammatory** — it engages TLR4 (Termeer 2002 [^termeer2002]) on dendritic cells and macrophages to drive NF-κB activation and cytokine output. The synthesis-vs-degradation balance ([[has2|HAS2]] expression vs HYAL1/HYAL2 activity) is therefore the operative inflammaging-relevant variable.

Zhang et al. 2023 (*Nature*) demonstrated this directly at the whole-animal level: tamoxifen-inducible nmrHas2 transgenic mice (naked mole-rat *Has2* under the CAG promoter, activated at 3 months on a C57BL/6 × R26-CreERT2 background) showed **broad inflammation suppression across tissues** in addition to lifespan and cancer-resistance benefits [^zhang2023]. Specifics: reduced steady-state IL-12p40, MIP-1α, MIP-1β, and CCL7 in plasma of old female mice (n=7-8); reduced TNF-α and IL-6 at 4 hours post-LPS challenge in young mice (n=3); bone marrow-derived macrophages from nmrHas2 mice showed lower *Il1b*/*Il6* and higher *Il10*/*Arg1* expression (M2-like polarization). Healthspan benefits (frailty index, rotarod, grip strength) and a microbiome shift toward longer-lived species were also observed. Crucially, **mouse Has2 overexpression alone reproduced the anti-inflammatory and oxidative-stress-protective effects** in cultured fibroblasts — meaning the benefit is conferred by HMW-HA itself, not by the species-specific NMR HAS2 protein. The dominant mechanism is comparable to mTOR inhibition + caloric-restriction signatures but with stronger inflammation suppression.

This is the **first whole-animal proof of concept that HMW-HA augmentation is an aging-relevant anti-inflammatory intervention modality**. The natural translational path is AAV-HAS2 gene therapy (preclinical only as of 2026) or a sustained-release HMW-HA delivery formulation. Existing clinical HA products (intra-articular for OA, ophthalmic, dermal filler) are localized and not validated for systemic anti-inflammaging. See [[studies/zhang-2023-nmrhas2-mouse-healthspan]] for full quantitative detail and the [[frameworks/cancer-aging-tradeoffs]] Layer-1 framing for cancer-suppression context. #gap/needs-human-replication

[^termeer2002]: doi:10.1084/jem.20001858 · Termeer C, Benedix F, Sleeman J et al. · *J Exp Med* 2002 · in-vitro + in-vivo · model: murine bone-marrow dendritic cells; TLR4-deficient (C3H/HeJ) mice; TLR2-deficient mice still susceptible to LMW-HA induced DC maturation · LMW-HA fragments activate TLR4 (NOT TLR2) → DC maturation + TNF-α + p38/p42/44 MAPK + NF-κB translocation; first identification of HA fragments as endogenous TLR4 DAMPs · cited_by: ~1,348 · archive: pending download
[^zhang2023]: [[studies/zhang-2023-nmrhas2-mouse-healthspan]] · doi:10.1038/s41586-023-06463-0 · PMID 37612507 · PMC10666664 · Zhang Z, Tian X, Lu JY et al. (Gorbunova/Seluanov labs) · *Nature* 2023; 621(7977):196-205 · in-vivo · n=84 nmrHas2 vs n=91 creER (lifespan); cytokine panel n=7-8 old females, n=3 LPS challenge · randomized · p<0.05 (multiple endpoints) · nmrHas2 transgenic mice showed +4.4% median / +12.2% max lifespan, reduced cancer mortality (57% vs 70%), reduced inflammatory cytokines, improved gut barrier, microbiome shift to longevity-associated taxa; mouse Has2 alone reproduces anti-inflammatory effects · archive: not in OA-package distribution (PMC author manuscript); verified against PMC10666664 HTML

---

## Biomarkers of inflammaging

No single biomarker is adequate; the field uses composite panels:

| Marker | Specificity | Notes |
|---|---|---|
| **hsCRP** | Low (many causes) | CANTOS used ≥2 mg/L as enrollment criterion; predicts CVD events; cheap |
| **IL-6** | Moderate | Strongest consistent predictor in cohort studies; confounded by adiposity |
| **TNF-α** | Low | Elevated in aged plasma; confounded by infection, autoimmunity |
| **GDF-15** | Moderate (SASP-related) | Rises with age; multiple contributing sources; mitochondrial stress marker |
| **PAI-1** | Moderate (SASP-related) | Associated with senescent cell burden; also reflects metabolic disease |
| **Fibrinogen** | Low | Acute-phase reactant; non-specific |
| **[[biomarkers/glycanage-2017\|IgG glycome / GlycanAge]]** | High (inflammaging-specific) | G0/G2 ratio + sialylation; agalactosylated IgG drives FcγRIIIA + lectin-pathway complement (full enzymology on [[igg-fc-glycosylation]]); Mijakovac/Lauc 2026 preprint frames IgG glycans as a "functional link between chronic inflammation, aging, disease susceptibility and all-cause mortality" (n=20,045; HR 1.05 fully-adjusted in GCKD; reversed by HRT, TPE, CR) — see [[studies/mijakovac-2026-igg-glycome-mortality]]. #gap/needs-peer-review |

A validated, aging-specific inflammaging biomarker panel does not yet exist. The IgG glycome is the closest single biomarker with inflammaging-specific biology + mortality validation, but the mortality validation is preprint-grade as of 2026-05. #gap/needs-replication #gap/needs-peer-review

### Inflammation as the dominant mortality module (transcriptomic clocks, 2026)

The multi-species transcriptomic-clock work of Tyshkovskiy et al. 2026 provides strong, quantitative support for inflammaging's central position in age-related mortality [^tyshkovskiy2026]:

- **Network decomposition** (WGCNA → module-specific [[transcriptomic-clock-tage|mortality clocks]]) found **immune modules (inflammation, interferon signalling, T-cell) positively associated with chronological age and expected mortality and negatively with maximum lifespan** — the opposite of metabolic (OXPHOS, lipid) modules.
- Across **9 rodent chronic-disease models** (Alzheimer's/5xFAD, CKD, ischaemic stroke, NASH, diabetic nephropathy), the **inflammation and interferon module clocks showed the largest and most consistent tAge acceleration** — i.e., chronic disease ages tissue primarily through *inflammatory* subsystems, while metabolically driven progeria (Klotho-KO) and caloric restriction act on *metabolic* modules. This cleanly separates inflammaging-driven from metabolism-driven molecular ageing.
- The three most consistent up-regulated mortality genes across diseases — **[[gpnmb|GPNMB]], [[p21|CDKN1A]], [[lgals3|LGALS3]]** — are inflammation/senescence-associated, and their **plasma protein levels predicted all-cause mortality and multimorbidity in UK Biobank** (each n≈50,000). These are candidate circulating inflammaging-mortality biomarkers with human validation stronger than the panels above.

---

## Targeted interventions

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[chronic-inflammation]])
  OR contains(target-hallmarks, [[chronic-inflammation]])
SORT clinical-stage DESC
```

See [[frameworks/interventions-by-hallmark]] for the full matrix, class-level synthesis, and gaps. Canakinumab (CANTOS, Phase 3 RCT) is the anchor human evidence for this hallmark.

---

## Limitations and open questions

- **Tissue-specific vs. systemic inflammation.** CNS neuroinflammation (microglia), vascular wall inflammation, and adipose tissue inflammation each have distinct cellular effectors. Whether they are unified by a single "systemic inflammaging" readout or require organ-specific measurements is unresolved. #gap/needs-replication
- **Causality of CHIP-cardiovascular link.** The association between TET2-CHIP and CV events is epidemiological; whether CHIP-driven IL-1β/IL-6 is the causal mechanism (vs. shared risk factors) has not been established in an interventional setting in humans. The CANTOS subgroup analyses suggesting greater benefit in CHIP carriers are post-hoc. #gap/needs-replication
- **Senolytic vs senomorphic comparative efficacy.** No head-to-head human trial. Preclinical evidence suggests senolytics may suppress systemic SASP more durably (by eliminating the source), but this has not been confirmed in humans. #gap/needs-replication
- **Resolution pathway deficits as a driver.** Specialized pro-resolving mediators (SPMs — resolvins, protectins, maresins) are reduced with age, suggesting impaired *resolution* of inflammation is as important as *initiation*. This underexplored mechanism may explain why inflammaging persists without an acute trigger. #gap/no-mechanism
- **CANTOS as an aging trial.** CANTOS was designed for atherosclerosis prevention, not aging per se. Extrapolation to healthy aging populations requires validation. The trial does not test whether canakinumab extends lifespan, reduces frailty, or broadly reverses inflammaging. The CANTOS exploratory cancer-mortality signal (HR 0.49 for 300 mg dose) **failed to replicate in four prospective NSCLC trials (CANOPY-A/1/2/N)** — see [[canakinumab]] for the full replication-failure detail. #gap/contradictory-evidence
- **Long-term safety of anti-inflammatory aging interventions.** Immunosuppression liability of JAK inhibitors, anti-IL-1β, and senomorphics at chronic, aging-relevant doses is not characterized. Infection risk trade-offs observed in CANTOS need specific assessment in elderly populations. #gap/long-term-unknown

---

## Cross-references

**Upstream drivers:**
[[cellular-senescence]] · [[sasp]] · [[mitochondrial-dysfunction]] · [[dna-damage-response]] · [[dysbiosis]] · [[hematopoietic-stem-cells]] · [[nlrp3-inflammasome]] · [[cgas-sting]] · [[cgas]] · [[nf-kb]] · [[atm]]

**Downstream phenotypes:**
[[atherosclerosis]] · [[type-2-diabetes]] · [[sarcopenia]] · [[neurodegeneration]] · [[alzheimers-disease]] · [[frailty]] · [[immunosenescence]] · [[microglia]]

**Interventions targeting this hallmark:**
[[interventions/pharmacological/senolytics]] · [[interventions/pharmacological/senomorphics]] · [[interventions/pharmacological/cgas-modulators]] (dual-arm cGAS inhibitors; autoimmune-indication clinical development) · [[ampk]] (metformin, exercise) · [[canakinumab]] (anti-IL-1β; CANTOS) · [[anakinra]] (IL-1Ra; receptor antagonist) · [[il-1-signaling]] (integrating pathway) · [[hyaluronic-acid]] / [[has2]] augmentation (Zhang 2023 nmrHas2 transgenic mouse — preclinical proof of concept; CD44-mediated)

**cGAS genomic-stability arm (Chen 2025 — cross-hallmark):**
[[trim41]] · [[vcp]] · [[studies/chen-2025-nmr-cgas-hr-repair]] — selective chromatin-retention modulators targeting the HR-suppression arm of nuclear cGAS without blocking cGAMP synthesis; conceptually distinct from pan-cGAS enzymatic inhibitors. Cross-link: [[hallmarks/genomic-instability]] (cGAS is the molecular node bridging the two hallmarks).

**Parent frameworks:**
[[hallmarks-of-aging]] · [[altered-intercellular-communication]] (parent in 2013) · [[dysbiosis]] (co-equal in 2023)

---

## Position in causal hierarchy

This hallmark is classified as **Integrative outcome tier** (mechanistic-tier: integrative / intervention-tractability: high). See [[frameworks/hallmark-causality-graph]] for the full hierarchy and intervention-sequencing argument.

Direct upstream nodes per `caused-by:` frontmatter: [[cellular-senescence]] (SASP → IL-6/IL-8/IL-1β), [[genomic-instability]] (ATM-dependent SASP; CHIP TET2-macrophages), [[mitochondrial-dysfunction]] (DAMP-driven NLRP3/cGAS-STING/TLR9), [[disabled-macroautophagy]] (DAMP clearance failure → NF-κB), [[dysbiosis]] (LPS translocation → TLR4 → NF-κB), [[stem-cell-exhaustion]] (CHIP-mutant macrophages overproduce IL-1β/IL-6 — feedback loop).
Direct downstream nodes per `causes:` frontmatter: [[stem-cell-exhaustion]] (inflammaging cytokines suppress HSC lymphoid output; biases toward myeloid — Beerman 2010), [[atherosclerosis]] (CANTOS: MACE HR 0.85 with anti-IL-1β; Childs 2016 senolytic plaque reduction).
Note: High tractability is achieved here despite integrative tier because direct intervention (anti-IL-1β, senolytics, JAK inhibitors) can reduce MACE endpoints even without upstream reversal — see CANTOS (Ridker 2017) on [[hallmarks/chronic-inflammation]].
Edge evidence is in [[frameworks/causal-graph-data]].

---

## Footnotes

[^franceschi2000]: doi:10.1111/j.1749-6632.2000.tb06651.x · Franceschi C et al. · *Ann NY Acad Sci* 2000 · review · coinages "inflamm-aging" and evolutionary framing of immunosenescence + inflammation in aging · cited_by: 5,032 · archive: not_oa (#gap/no-fulltext-access)

[^lopezOtin2023]: doi:10.1016/j.cell.2022.11.001 · López-Otín C, Blasco MA, Partridge L, Serrano M, Kroemer G · *Cell* 2023 · review · expansion of Hallmarks of Aging from 9 to 12; chronic inflammation elevated to standalone integrative hallmark; dysbiosis added · cited_by: 4,762 · archive: closed (download failed) (#gap/no-fulltext-access — closed-access)

[^rodier2009]: doi:10.1038/ncb1909 · Rodier F et al. (Campisi lab) · *Nat Cell Biol* 2009 · in-vitro · n=multiple human fibroblast strains · persistent DDR (not acute DSB) triggers SASP; SASP requires ATM/NBS1/CHK2 but is p53-INDEPENDENT (two separable DDR arms demonstrated); IL-6 ~50× and IL-8 ~10× increase post-irradiation require ATM · model: human diploid fibroblasts + BJ/IMR90 · cited_by: 2,096 · archive: **locally downloaded** at 

[^ridker2017]: doi:10.1056/NEJMoa1707914 · Ridker PM et al. (CANTOS Investigators) · *N Engl J Med* 2017 · rct · n=10,061 · canakinumab 150 mg SC q3mo vs placebo · prior MI + hsCRP ≥2 mg/L · median follow-up 3.7 yr · MACE HR 0.85 (95% CI 0.74–0.98, p=0.021) at 150 mg; no LDL-C change; fatal infection/sepsis increased (pooled: 0.31 vs 0.18/100 person-yr, p=0.02) · archive: **locally available** at 

[^ridker2017lancet]: doi:10.1016/S0140-6736(17)32247-X · Ridker PM et al. · *Lancet* 2017 · rct (exploratory cancer analysis of CANTOS) · n=10,061 · cancer mortality HR 0.49 (95% CI 0.31–0.75, p=0.0009) for **300 mg group**; fatal cancer incidence rate 0.45 vs 0.64/100 person-yr (all doses, p<0.001 for trend); lung cancer HR 0.61 (150 mg) and 0.33 (300 mg) · hypothesis-generating; replication required #gap/needs-replication · archive: download failed (OA URL HTTP 403; Lancet paywall) #gap/no-fulltext-access — quantitative claims not independently verified against full PDF

[^childs2016]: doi:10.1126/science.aaf6659 · Childs BG et al. · *Science* 2016 · in-vivo · model: LDLR⁻/⁻ mus musculus (INK-ATTAC genetic senolytic system) · p16⁺ senescent cell clearance reduced atherosclerotic plaque ~60%; senescent foam cells causal at all disease stages · **mouse data only; no human translation** #gap/needs-human-replication · archive: not_oa (#gap/no-fulltext-access)

[^jaiswal2014]: doi:10.1056/NEJMoa1408617 · Jaiswal S et al. · *N Engl J Med* 2014 · observational (whole-exome sequencing) · n=17,182 · CHIP mutations in 5.6% (95% CI 5.0–6.3) aged 60–69, rising to 18.4% (95% CI 12.1–27.0) aged 90+; HR 2.0 (95% CI 1.2–3.5, p=0.02) for coronary heart disease; HR=11.1 (95% CI 3.9–32.6) for hematologic malignancy · model: human blood DNA · archive: **locally available** at 

[^salmon2022]: doi:10.1016/j.avsg.2022.05.024 · Salmon M et al. · *Ann Vasc Surg* 2022 · in-vivo · model: mouse AAA induction (elastase / Ang-II model) · IL-1α blockade exacerbates aneurysm growth; counterintuitive to general anti-IL-1 SASP-suppression rationale; suggests IL-1α has a protective vascular-remodeling role distinct from IL-1β · #gap/needs-human-replication — translation tension for receptor-antagonism (anakinra) vs IL-1β-specific (canakinumab) strategy choice in vascular aging · archive: not yet downloaded #gap/no-fulltext-access-yet

[^chen2025]: [[studies/chen-2025-nmr-cgas-hr-repair]] · *Science* 2025 · doi:10.1126/science.adp5056 · PMID 41066557 · Chen et al. · NMR cGAS variant retains cGAMP synthesis but attenuates nuclear chromatin retention → selective blunting of the HR-suppression arm of cGAS without altering innate-immune cGAMP signaling; demonstrates two mechanistically independent roles of cGAS: cytosolic-sensing (→ NF-κB/IFN) and nuclear chromatin-binding (→ HR suppression via RAD51 blockade) · **#gap/no-fulltext-access** — abstract only; full quantitative detail pending PDF access

[^tyshkovskiy2026]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · doi:10.1038/s41586-026-10542-3 · *Nature* 2026 · n=11,165 transcriptomes, 4 species + 9 rodent disease models + UK Biobank plasma (GPNMB n=50,117; CDKN1A n=51,276; LGALS3 n=51,647) · WGCNA module-specific elastic-net mortality clocks; ANOVA / Cox PH, P_adj<0.05 · model: mouse/rat/macaque/human · immune/inflammation/interferon modules are the dominant accelerated subsystems in chronic disease; GPNMB/CDKN1A/LGALS3 plasma proteins predict all-cause mortality + multimorbidity
