---
type: pathway
aliases: [cyclic AMP signaling, PKA signaling pathway, Gs-cAMP-PKA-CREB, second-messenger cAMP, adenylyl cyclase pathway]
kegg: hsa04024
reactome: R-HSA-418555
wikipathways: null
key-nodes:
  - "[[adcy]]"
  - "[[prkaca]]"
  - "[[rapgef3]]"
  - "[[pde4]]"
  - "[[creb1]]"
  - "[[crtc1]]"
  - "[[gnas]]"
upstream:
  - "[[melanocortin-system]]"
  - "[[insulin-igf1]]"
downstream:
  - "[[autophagy]]"
  - "[[mitochondrial-biogenesis]]"
  - "[[ras-mapk]]"
hallmarks:
  - "[[deregulated-nutrient-sensing]]"
  - "[[altered-intercellular-communication]]"
sens-categories: []
druggability-tier: 1
caused-by:
  - "[[melanocortin-system]]"
causes:
  - "[[mitochondrial-biogenesis]]"
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Enns 2010, Dehghan 2019, Ye 2020, Wang 2021 verified against primary source PDFs; Kelly 2018 and Taylor 2013 verified against PMC full text (download failed, green OA); Bos 2006, Ali 2020, Kang 2013 not_oa/not-downloaded — claims from these three left tagged #gap/unverified-source; KEGG hsa04024 and Reactome R-HSA-418555 confirmed against live database; Okumura 2014, Abigerges 2021, Beavo 2021 not independently re-verified; AC5-KO lifespan attribution corrected (was wrongly attributed to Enns 2010; source is Yan 2007); hydralazine PKA mechanism corrected (activation not inhibition); Kelly 2018 AC/PKA decline conclusion softened to match mixed literature; Wang 2021 mouse strain corrected CD1/ICR not C57BL/6"
---

# cAMP signaling pathway

The **cyclic AMP (cAMP) signaling pathway** is a ubiquitous second-messenger cascade in which extracellular signals (hormones, neurotransmitters, metabolic cues) are transduced through G protein-coupled receptors (GPCRs) to cytoplasmic cAMP, which activates **protein kinase A (PKA)** and the **exchange protein directly activated by cAMP (Epac)**. The pathway controls an extraordinarily broad set of outputs — gene transcription via [[creb1|CREB]], mitochondrial biogenesis via PGC-1α, lipolysis, exocytosis, neuronal plasticity, and cardiac chronotropy/inotropy — making it a master integrator of hormonal status and energy state. In aging, the pathway shows region- and tissue-specific changes including reduced β-adrenergic responsiveness in cardiac and adipose tissue, blunted pCREB (Ser133) in hippocampus and parietal cortex, and paradoxically elevated cAMP in prefrontal cortex — contributing to metabolic dysfunction, cognitive decline, and impaired stress responses [^kelly2018][^enns2010]. Hippocampal adenylyl cyclase activity changes are mixed in the literature (approximately half of studies show decline, half show no change) [^kelly2018].

> **Naming note:** This page covers the pathway. Individual node pages (when seeded) will live at `molecules/proteins/prkaca.md`, `molecules/proteins/creb1.md`, etc. The KEGG pathway identifier hsa04024 covers a broad cAMP effector network; this page focuses on the Gαs/Gαi → adenylyl cyclase → cAMP → PKA + Epac → CREB axis.

---

## Canonical architecture: Gαs/Gαi → AC → cAMP → PKA + Epac

### 1. GPCR input and G-protein coupling

Extracellular ligands bind GPCRs; the class of G protein alpha subunit engaged determines the direction of cAMP flux:

| G-protein class | Direction | Example receptors |
|---|---|---|
| **Gαs** | Adenylyl cyclase activated → cAMP ↑ | β1/β2-adrenergic, glucagon (GCGR), GLP-1R, PTH1R, MC1R, MC4R, MC5R, GHSR, adenosine A2AR |
| **Gαi** | Adenylyl cyclase inhibited → cAMP ↓ | α2-adrenergic, adenosine A1R, opioid receptors, dopamine D2R |
| **Gαq** | Phospholipase C activated; no direct cAMP effect | Angiotensin AT1R, muscarinic M1R |

The **adenylyl cyclases** (ADCY1–10) catalyze ATP → cAMP + PPi. Nine of the ten are transmembrane (tmACs); ADCY10 is soluble (sAC, activated by bicarbonate/Ca²⁺). Individual isoforms show tissue-specific expression — ADCY1 and ADCY8 dominate in hippocampal neurons; ADCY5 is the cardiac isoform. #gap/needs-canonical-id — no individual protein pages exist yet for ADCY isoforms; the generic `[[adcy]]` wikilink above is a stub.

### 2. cAMP production and termination

cAMP is synthesized at the plasma membrane (tmAC) or in intracellular compartments (sAC, near mitochondria). **Spatial confinement** of cAMP pools is enforced by **A-kinase anchoring proteins (AKAPs)**, which scaffold PKA regulatory subunits near specific substrates, creating distinct functional "signalosomes" [^beavo2021].

**Termination** is handled by **phosphodiesterases (PDEs)**, which hydrolyze cAMP → 5'-AMP. PDE4 (ENPP4/PDE4A–D gene products) is the dominant cytosolic cAMP-specific PDE in most tissues; PDE3 (dual-specificity) competes with PDE4 in cardiac myocytes and adipocytes [^abigerges2021]. Other cAMP-degrading PDEs include PDE7 and PDE8 (both cAMP-selective, low K_m, relatively insensitive to IBMX).

### 3. PKA: holoenzyme, activation, and substrates

Inactive **PKA** exists as an R₂C₂ tetramer — two regulatory (R) subunits (RIα, RIβ, RIIα, RIIβ; genes *PRKAR1A*, *PRKAR1B*, *PRKAR2A*, *PRKAR2B*) bound to two catalytic (C) subunits (Cα/PRKACA, Cβ/PRKACB, Cγ/PRKACG). Each R subunit has two cAMP-binding domains (CNB-A and CNB-B); cAMP binding induces conformational release of the C subunits, which then phosphorylate serine/threonine on consensus motifs (R/K–R/K–x–S/T) [^taylor2013].

PKA integrates dual-targeting logic: **RI isoforms** localize to soluble/cytosolic anchors; **RII isoforms** partner with AKAP scaffolds at discrete membranes (ER, mitochondria, centrosomes). This explains why the same rise in global cAMP can produce cell-type-specific transcriptional vs. metabolic vs. structural outputs depending on which R isoforms are expressed and which AKAPs are present.

**Key PKA substrates in aging-relevant contexts:**

| Substrate | Effect of phosphorylation | Aging context |
|---|---|---|
| **CREB1 (Ser133)** | Recruits CBP/p300 coactivator → transcription of CRE-containing genes | Memory consolidation, PGC-1α induction — pCREB declines in aged rodent hippocampus and parietal cortex (mixed evidence for AC activity decline; see §Hippocampal cAMP-CREB axis) [^kelly2018] |
| **CRTC1/2/3** | De-repressed from 14-3-3 cytoplasmic retention → nuclear → CREB co-activation | Synaptic plasticity, gluconeogenesis control |
| **Phospholamban (PLN Ser16)** | SERCA2a activity ↑ → Ca²⁺ reuptake into SR → cardiac relaxation | Cardiac aging; PKA-PLN axis in inotropic reserve |
| **HSL (Ser563)** | Hormone-sensitive lipase activated → triglyceride hydrolysis | Lipolysis in adipocytes; blunted in aged fat [^enns2010] |
| **VASP, RYR2, L-type VGCC** | Ion channel/cytoskeletal phosphorylation | Cardiac excitation-contraction coupling |

### 4. Epac: PKA-independent cAMP effector

**Epac1** (RAPGEF3) and **Epac2** (RAPGEF4) are cAMP-binding guanine nucleotide exchange factors for Rap1/2 (small GTPases of the Ras superfamily) [^bos2006]. Unlike PKA, Epac does not phosphorylate CREB; instead, Rap1/Rap2 activation modulates cell adhesion (integrin signaling), insulin secretion (Epac2 in β-cells), and — in cardiomyocytes — a PKA-independent phospholamban phosphorylation through CaMKII [^okumura2014]. Epac1-knockout mice are protected against age- and stress-induced cardiomyopathy in some models [^okumura2014], suggesting Epac1 may amplify maladaptive cardiac remodeling independently of PKA. #gap/needs-replication — cardiac protection in Epac1-KO has not been extended to aging-specific longevity outcomes.

### 5. CREB → downstream gene programs

Phospho-CREB (pCREB, Ser133) binds the **cAMP response element** (CRE; consensus 5'-TGACGTCA-3') in promoters of target genes. Key downstream programs include:

- **PGC-1α** (PPARGC1A) — mitochondrial biogenesis master regulator; CREB drives PGC-1α transcription in response to exercise, cold, and fasting cues (see [[mitochondrial-biogenesis]])
- **BDNF** (brain-derived neurotrophic factor) — neuroprotective; declines with age; CREB-dependent induction supports synaptic plasticity
- **c-Fos, Fosb, Jun** — IEG (immediate-early gene) transcription factors; secondary wave of AP-1-dependent gene regulation
- **NR4A1/2/3** (Nur77/Nurr1/NOR-1) — orphan nuclear receptors; anti-inflammatory, metabolic, dopaminergic
- **CART, pro-opiomelanocortin (POMC)** — neuropeptide precursors; cAMP drives POMC transcription in response to MC4R activation (see [[melanocortin-system]])

Co-activator **CBP** (CREBBP) is recruited by pCREB; additional co-activation is provided by **CRTC1–3** (CREB-regulated transcription coactivators), whose nuclear translocation is derepressed when PKA phosphorylates 14-3-3 release sites on CRTC.

---

## Role in aging

### β-Adrenergic responsiveness declines with age

One of the most replicated cAMP-pathway aging phenotypes is **reduced β-adrenergic response** (to [[molecules/metabolites/catecholamines]]) in cardiac and adipose tissue. In aged hearts, β1-AR density decreases, G-protein coupling efficiency falls, and maximal cAMP production after β-agonist stimulation is attenuated — leading to blunted inotropic reserve [^ali2020]. The mechanism involves multiple nodes: increased [[molecules/proteins/grk2|GRK2]] (β-ARK1)-mediated receptor desensitization, upregulation of inhibitory Gαi, reduced adenylyl cyclase (AC5/AC6) expression, and increased PDE4D activity that accelerates cAMP hydrolysis before it can diffuse to effectors [^abigerges2021].

PKA loss-of-function mouse models extend lifespan: **PKA RIIβ-knockout** C57BL/6J males show extended lifespan and resistance to cardiac hypertrophy, diastolic dysfunction, and obesity-related metabolic decline [^enns2010]. Separately, **AC5-knockout** (type 5 adenylyl cyclase disruption) mice show approximately 30% median lifespan extension, improved exercise tolerance, and resistance to heart failure and obesity in the Yan 2007 study cited within Enns 2010 [^yan2007]. Both models invert the intuitive frame: reducing upstream cAMP-pathway activity is cardioprotective and pro-longevity; the mechanism is context- and tissue-specific. #gap/needs-human-replication — AC5-KO and PKA-KO longevity evidence is from mice only.

### Hippocampal cAMP-CREB axis and cognitive aging

Age-related memory decline correlates with reduced cAMP-CREB signaling in the hippocampus, though the picture is mixed and region-specific. Kelly 2018 surveyed human and rodent data and found that: approximately **half** of animal studies show age-related reductions in hippocampal AC activity and the other half show no change; basal cAMP levels do not consistently change with age in rodent hippocampus; PKA activity is significantly decreased in prefrontal cortex and hippocampus of aged rodents; and pCREB (Ser133) immunoreactivity declines in aged rodent hippocampus and parietal cortex. Critically, the review notes that prefrontal cAMP **increases** with age (the opposite pattern), correlating with cognitive deficits through a different mechanism — so the effect is brain-region-specific and not a uniform decline [^kelly2018]. In Alzheimer's disease, tau accumulation in hippocampal neurons suppresses PKA via nuclear proteasome-dependent upregulation of the PKA regulatory subunit PKAR2α specifically in the nuclear fraction — caused by disruption of the PA28γ-20S proteasome complex that normally degrades PKAR2α — blocking CREB phosphorylation and reducing glutamate receptor (GluA1) surface expression [^ye2020].

The CREB-BDNF arm is particularly relevant: CREB-driven BDNF transcription is necessary for the late phase of LTP (L-LTP); failure of this transcriptional response may be one of the earliest functional deficits in normal cognitive aging before any overt pathology. #gap/no-mechanism — the upstream cause of hippocampal pCREB decline is not established; candidates include reduced norepinephrine tone, oxidative inactivation of AC1/AC8, and membrane-lipid remodeling that alters AC accessibility. #gap/contradictory-evidence — Kelly 2018 found that roughly half of studies showed no age-related AC activity change in hippocampus, so the AC-activity-decline framing is contested.

### cAMP-PGC-1α and mitochondrial biogenesis in aging

Exercise-induced cAMP (via β-agonist/catecholamine release) activates PKA → CREB → PGC-1α → mitochondrial biogenesis transcription program. In aged rodent skeletal muscle, this cascade is impaired: pCREB induction after exercise is attenuated, PGC-1α upregulation is blunted, and mitochondrial content recovers more slowly [^kang2013]. Pharmacological cAMP elevation with pentoxifylline (a non-selective PDE inhibitor) in D-galactose-accelerated aging CD1/ICR mice (60 mg/kg/d i.p., 4 weeks) increased pCREB and PGC-1α protein levels, restored Nrf2-mediated antioxidant gene expression (HO-1, NQQ1, SOD2, CAT), and improved markers of mitochondrial biogenesis (citrate synthase activity, mtDNA copy number, TFAM) in hippocampus [^wang2021]. #gap/needs-human-replication — these effects have not been recapitulated in controlled human trials with aging endpoints.

### Lipolytic cAMP signaling and metabolic aging

Catecholamine-stimulated lipolysis depends on the β-AR → cAMP → PKA → hormone-sensitive lipase (HSL) axis. Aging is associated with a **lipolytic defect** in adipose tissue: reduced β-AR density, lower AC coupling efficiency, and higher basal PDE activity all contribute to a blunted cAMP rise after adrenergic stimulation, thereby impairing triglyceride mobilization during fasting or exercise. This lipolytic resistance may contribute to the accumulation of visceral fat in older adults and downstream metabolic aging. #gap/unsourced — specific RCT-level human evidence quantifying the cAMP amplitude reduction in aged human adipocytes is lacking; cited above as mechanistic inference from rodent studies.

### PKA, sirtuins, and longevity (C. elegans)

In *C. elegans*, hydralazine binds and **stabilizes** the PKA catalytic subunit (PRKACA/KIN-1), causing dissociation of the regulatory subunit and thereby **activating** PKA — which in turn phosphorylates and activates SIRT1 (SIR-2.1) in a NAD-independent manner, and SIRT5 (which deacetylates CPS1 and other mitochondrial targets), leading to improved mitochondrial function and median lifespan extension of approximately 25% [^dehghan2019]. The mechanism is PKA **activation**, not inhibition — hydralazine's longevity benefit requires PKA (abrogated in KIN-1 knockdown worms). This positions PKA as a longevity-promoting kinase in *C. elegans*, in contrast to the mammalian cardiac context where PKA/AC5 over-activity is pro-aging. Whether hydralazine-PKA-SIRT1/5 axis is conserved in mammals as a longevity-relevant pathway is not established. #gap/needs-human-replication

---

## Compartmentalization and microdomains

A critical contemporary insight is that cAMP does not act as a freely diffusing global second messenger. Instead, **AKAP scaffolds** (e.g., mAKAP/AKAP6 in cardiac myocytes; AKAP79/150 in neurons) tether PKA regulatory subunits and PDEs into proximity, creating **cAMP microdomains** where local signal amplitude is decoupled from bulk cytosolic cAMP [^beavo2021]. In cardiac hypertrophy and heart failure, the balance of PDE3 vs. PDE4 anchoring to these complexes shifts, altering the local cAMP waveform even when total cAMP is unchanged [^abigerges2021]. This compartmentalization model has major implications for aging: a "decline in cAMP signaling" may not mean a uniform fall, but a redistribution of subcellular cAMP pools with some pools hyperactivated and others silenced.

---

## Pharmacological landscape

| Drug class | Examples | Mechanism | Aging relevance |
|---|---|---|---|
| Non-selective PDE inhibitor | Theophylline, caffeine, pentoxifylline | Block PDE1–5; global cAMP ↑ | Cognitive/mitochondrial effects in aging models; limited by toxicity at high dose |
| PDE4-selective inhibitor | Roflumilast (COPD-approved), apremilast (PsA-approved) | Block PDE4A–D → cAMP ↑ in immune/inflammatory cells | Aging trial: rolipram improved memory in aged rats; roflumilast explored for neuroinflammation |
| PDE5 inhibitor | Sildenafil, tadalafil | Block PDE5 (cGMP-specific) — minimal direct cAMP effect | Note: often grouped with cAMP-raising drugs but the primary effector is cGMP/PKG, not cAMP |
| β-agonists | Salmeterol, formoterol, clenbuterol | Activate β2-AR → Gαs → AC → cAMP ↑ | Explored for sarcopenia (anabolic via PKA → mTOR); off-target cardiac risks limit aging use |
| GLP-1 receptor agonists | Semaglutide, liraglutide | GLP-1R → Gαs → cAMP → PKA + Epac2 (pancreatic β-cell) | Geroprotective evidence accumulating; cAMP mechanism is pancreatic and extra-pancreatic |
| β-blockers | Metoprolol, carvedilol | Block β-AR → reduce cAMP in heart | Standard HF/cardiac aging management; geroprotective in the hyperadrenergic-aging frame |
| Adenylyl cyclase activator | Forskolin (non-clinical tool compound) | Directly activates tmAC | Used as experimental cAMP elevator; no approved aging indication |

**Druggability-tier rationale (tier 1):** Multiple FDA-approved drugs modulate this pathway in aging-relevant contexts — β-blockers (standard of care in cardiac aging), GLP-1 agonists (approved, emerging broad-organ effects), and PDE4 inhibitors (roflumilast FDA-approved). The aging-context tier is 1. #gap/dose-response-unclear — optimal cAMP modulation amplitude for geroprotection in any tissue is not established.

---

## Cross-pathway connections

- **[[ampk]]** — cAMP/PKA and AMPK share a bidirectional relationship. Elevated cAMP → PKA → phosphorylates and activates AMPK in some cell types; conversely, AMPK activation can suppress β-AR desensitization. Both respond to energy stress but with different kinetics and tissue specificity. See [[ampk]] for the canonical AMPK-cAMP intersection.
- **[[mtor]]** — CREB-driven PGC-1α is a nexus with mTOR biology: mTORC1 promotes anabolic translation while PGC-1α drives mitochondrial capacity. cAMP and mTOR signaling are partially antagonistic in some contexts (PKA can activate Rheb in some tissues, countering AMPK suppression of mTOR).
- **[[insulin-igf1]]** — Insulin/IGF-1 signaling can inhibit cAMP via Gαi-coupled cross-talk (PI3K-activated PDE3B in adipocytes, suppressing PKA-mediated lipolysis). Counter-regulation of lipolysis by insulin is the major physiological example.
- **[[melanocortin-system]]** — MC1R, MC4R, MC5R are all Gαs-coupled; their downstream effects (pigmentation, appetite suppression, metabolic rate, sebaceous gland lipid regulation) are cAMP-mediated. See [[melanocortin-system]] for the melanocortin-cAMP network detail.
- **[[sirtuin]]** — PKA-SIRT1 interaction (PKA directly phosphorylates and activates SIRT1 in a NAD-independent manner; conversely, NAD+ availability links SIRT1 activity to metabolic state). Hydralazine-PKA activation → SIRT1/SIRT5 axis in *C. elegans* provides a longevity-relevant link [^dehghan2019].
- **[[ras-mapk]]** — Epac1/2 activates Rap1, which can suppress Raf1 → MEK → ERK, providing inhibitory cross-talk from cAMP to the proliferative MAPK cascade. Separate from PKA-mediated MEK inhibition via B-Raf phosphorylation.

---

## Limitations and gaps

- **Tissue heterogeneity:** cAMP effects are entirely context-dependent. Cardiac AC5 KO extends lifespan [^yan2007]; hippocampal AC1/AC8 activity supports memory [^kelly2018]. A systemic cAMP "raiser" would have opposing effects in these tissues simultaneously. No geroprotection strategy can target cAMP globally. #gap/no-mechanism
- **Compartmentalization is under-characterized in aged tissue:** Whether AKAP scaffold composition changes with age — altering the spatial map of cAMP microdomains — is largely unknown. #gap/needs-replication
- **CREB decline causality not established:** CREB phosphorylation declines with age, but MR evidence that restoring pCREB *causes* cognitive preservation in humans is absent. #gap/no-mechanism
- **Human aging-specific clinical data is sparse:** Most mechanistic data is from rodent models; GLP-1 agonist and PDE4 inhibitor human trials have not been powered for aging endpoints. #gap/needs-human-replication
- **Epac aging biology is nascent:** Epac1/2 roles in aging-specific phenotypes are largely unstudied outside the cardiac stress model. #gap/unsourced

---

## Footnotes

[^kelly2018]: doi:10.1016/j.cellsig.2017.11.004 · PMID:29175000 · PMC:PMC5732030 · review · model: human + rodent brain aging · mixed finding: ~half of studies show hippocampal AC activity decline with age, ~half show no change; basal cAMP does not consistently fall; PKA activity reduced in hippocampus and prefrontal cortex; pCREB declines in hippocampus/parietal cortex; prefrontal cAMP paradoxically *increases* with age; effect is brain-region-specific; download failed (green OA, PMC fallback used)
[^enns2010]: doi:10.18632/aging.100138 · PMID:20448293 · in-vivo (mouse) · model: C57BL/6 (PKA RIIβ-KO and Cβ-KO; NOT AC5-KO) · RIIβ-KO C57/BL6J males: extended lifespan, cardiac hypertrophy suppressed, diastolic dysfunction suppressed; Cβ-KO: obesity resistance, hepatoprotection, improved cardiac function; PKA identified as aging target; n=not stated in paper (retrospective perspective); AC5-KO data is from Yan 2007 (ref 9 in Enns 2010), not this paper
[^yan2007]: doi:10.1016/j.cell.2007.07.016 · PMID:17662939 · in-vivo (mouse) · model: mixed background AC5-KO · AC5-KO mice show ~30% median lifespan extension, improved exercise tolerance, resistance to heart failure and obesity; not independently verified against PDF (cited via Enns 2010) #gap/needs-replication
[^taylor2013]: doi:10.1016/j.bbapap.2013.03.007 · PMID:23535202 · PMC:PMC3763834 · review · model: biochemical / structural · PKA holoenzyme structure (R₂C₂ tetramer), regulatory subunit isoforms (RIα, RIβ, RIIα, RIIβ — functionally non-redundant), AKAP anchoring logic (amphipathic helix binds D/D domain of R-subunit dimer); 20-year retrospective ("Lessons Learned after Twenty Years"); download failed (green OA, PMC fallback used); catalytic subunit isoform listing (Cα/Cβ/Cγ) confirmed in Enns 2010 text, not independently in Taylor 2013 PMC text
[^bos2006]: doi:10.1016/j.tibs.2006.10.002 · PMID:17084085 · review · model: biochemical / cell biology · Epac1/2 as cAMP-GEFs for Rap1/Rap2; PKA-independent cAMP effector functions; not_oa in archive #gap/unverified-source
[^okumura2014]: doi:10.1172/JCI64784 · PMID:24892712 · in-vivo (mouse) · model: Epac1-KO mouse (cardiac stress/aging) · Epac1-KO protects against stress-induced cardiomyopathy via PKA-independent PLN-CaMKII pathway
[^abigerges2021]: doi:10.1016/j.yjmcc.2020.10.011 · PMID:33184031 · in-vitro + in-vivo (rat/mouse) · model: cardiac hypertrophy model · PDE3/PDE4 balance shifts in hypertrophy, altering local cAMP pool dynamics
[^ali2020]: doi:10.1007/s10741-019-09825-x · PMID:31407140 · review · model: human + animal cardiovascular aging · β-AR downregulation and reduced cAMP response in aged cardiac tissue; GRK2/Gαi upregulation as mechanism; not_oa in archive #gap/unverified-source
[^ye2020]: doi:10.1111/acel.13055 · PMID:31668016 · in-vitro + in-vivo (mouse) · model: hippocampal neurons (5 div primary), tau-overexpressing mice (AAV-syn-hTau-EGFP into CA3, n=15/group) · overexpressed full-length wild-type human tau inhibits PKA via nuclear proteasome-dependent PKAR2α (RIIα) elevation: hTau disrupts PA28γ-20S proteasome complex → PKAR2α accumulates in nuclear fraction → PKA inhibited → pCREB(Ser133) and pGluA1(Ser845) reduced → memory deficits; rolipram (PKA agonist) rescues
[^kang2013]: doi:10.1016/j.exger.2013.08.004 · PMID:23994518 · in-vivo (rat) · model: aged Fischer 344 rats, endurance training protocol · exercise restores p-CREB and PGC-1α in aged skeletal muscle; not_oa in archive #gap/unverified-source
[^wang2021]: doi:10.1155/2021/6695613 · PMID:34257818 · in-vivo (mouse) + in-vitro · model: D-galactose aging model, CD1/ICR mice (NOT C57BL/6), n=12/group behavioral, n=6/group histology; dose: PTX 60 mg/kg/d i.p. × 4 weeks; D-gal 100 mg/kg/d s.c. × 8 weeks · pentoxifylline activates cAMP-CREB pathway → Nrf2 + PGC-1α protein/mRNA ↑ → antioxidant (HO-1, NQO1, SOD2, CAT) and mitochondrial biogenesis markers (CS activity, mtDNA copy number, TFAM) restored in hippocampus; Nrf2-KO mice confirmed Nrf2 dependence
[^dehghan2019]: doi:10.1038/s41467-019-12425-w · PMID:31659167 · in-vivo (worm) + in-vitro · model: C. elegans N2 · hydralazine binds and stabilizes PKA catalytic subunit (PRKACA/KIN-1) → regulatory subunit dissociates → PKA ACTIVATED (not inhibited) → SIRT1/SIR-2.1 phosphorylated/activated (NAD-independent) + SIRT5/TFAM upregulated → mitochondrial biogenesis ↑ → ~25% median lifespan extension (exact value in Table S1; KIN-1 knockdown abrogates lifespan benefit confirming PKA-dependence)
[^beavo2021]: doi:10.1124/molpharm.120.000197 · PMID:33574048 · review · model: biochemical / pharmacological · AKAP-mediated cAMP compartmentalization; PDE inhibitor approach to phosphoproteomic dissection of cAMP-dependent signaling
