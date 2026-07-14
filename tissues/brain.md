---
type: tissue
aliases: [encephalon, cerebrum + cerebellum + brainstem, CNS]
parent-system: nervous-system
key-cell-types: ["[[microglia]]", "[[neurons]]", "[[astrocytes]]", "[[oligodendrocytes]]", "[[neural-stem-cells]]"]
key-aging-phenotypes: ["[[alzheimers-disease]]", "[[parkinsons-disease]]", "[[neurodegeneration]]"]
related-hallmarks: ["[[loss-of-proteostasis]]", "[[chronic-inflammation]]", "[[disabled-macroautophagy]]", "[[mitochondrial-dysfunction]]", "[[stem-cell-exhaustion]]"]
verified: true
verified-date: 2026-07-11
verified-by: claude
verified-scope: "Wikilink targets confirmed; Hara 2006 DOI and Komatsu 2006 DOI/Cre driver corrected against full text; Bouzid 2023 DOI, odds ratio, and n corrected against verified neurodegeneration claims. Azevedo 2009 remains unavailable for full-text verification. Kress 2014 aging/AQP4 numerics and causal limits were propagated from its verified extraction on 2026-07-11. Thapaliya 2026 ME/CFS and Mossige 2026 DTI-ALPS claims were checked against full text on 2026-07-11."
---

# Brain

The brain is the central organ of the nervous system and the primary site of age-associated neurodegeneration in humans. It encompasses the **cerebrum** (cortex, basal ganglia, hippocampus, amygdala), **cerebellum**, and **brainstem** (midbrain, pons, medulla). The human brain contains approximately 86 billion neurons and a roughly equal number of non-neuronal cells [^azevedo2009].

Brain aging is defined by the progressive failure of multiple quality-control systems — chiefly autophagy, proteostasis, and mitochondrial homeostasis — in largely post-mitotic neurons that cannot be replaced. These failures converge on the hallmarks [[loss-of-proteostasis]], [[disabled-macroautophagy]], [[mitochondrial-dysfunction]], and [[chronic-inflammation]], and ultimately manifest as the neurodegenerative phenotypes that dominate aging morbidity in humans.

---

## Anatomy at a glance

| Region | Key structures | Aging-relevant notes |
|---|---|---|
| Cerebral cortex | Frontal, parietal, temporal, occipital lobes | Cortical thinning ~0.3–0.5%/yr after age 50 #gap/unsourced |
| Hippocampus | CA1–CA4, dentate gyrus, subiculum | Primary atrophy site in Alzheimer's disease; adult neurogenesis in dentate gyrus |
| Basal ganglia | Striatum, substantia nigra, globus pallidus | Dopaminergic loss in substantia nigra pars compacta → Parkinson's disease |
| White matter | Corticospinal tract, corpus callosum, myelinated fiber bundles | White matter hyperintensities increase with age; BBB leakage overlaps WM rarefaction |
| Cerebellum | Purkinje cells, granule cells | Less primary aging degeneration than cortex/basal ganglia |
| Brainstem | Midbrain, pons, medulla oblongata | Houses autonomic centers; locus coeruleus NA neurons vulnerable in AD prodrome |

The **blood-brain barrier** (BBB) — formed by tight junctions between endothelial cells, supported by astrocytic end-feet and pericytes — progressively increases in permeability with age, admitting peripheral inflammatory signals and reducing clearance efficiency. #gap/unsourced — quantitative human in-vivo BBB permeability data across lifespan are sparse.

---

## Major cell types

### [[neurons]]

Post-mitotic neurons are the primary effectors of brain function and the cell population with the most severe aging vulnerability. Most cortical and subcortical neurons are generated prenatally and must persist for the entire lifespan. This extreme longevity without replacement makes neurons uniquely sensitive to accumulated macromolecular damage — misfolded proteins, oxidized lipids, mitochondrial defects, and DNA damage compound over decades without dilution by division.

Two canonical anatomical patterns of selective neuronal vulnerability define the major neurodegenerative diseases (see [[neurodegeneration]] for cross-disease overview):

- **Hippocampal and cortical neurons** — preferentially affected in [[alzheimers-disease]]; CA1 pyramidal neurons and layer II/III entorhinal cortex neurons among the earliest sites of tau pathology
- **Substantia nigra pars compacta dopaminergic neurons** — preferentially affected in [[parkinsons-disease]]; ~60–80% loss required before motor symptoms manifest #gap/unsourced

### [[microglia]] (verified)

Resident innate immune cells of the brain, derived from yolk-sac progenitors and maintained by local self-renewal throughout life. In aging, microglia undergo:

- Dystrophic morphology (shortened, de-ramified processes)
- Transcriptional shift toward pro-inflammatory states — enrichment of OA2 (Ccl4+, Il1b+) and OA3 (interferon-response: Ifitm3+, Irf7+) clusters in aged mouse brain
- Emergence of disease-associated microglia (DAM) in neurodegenerative disease — TREM2-hi, P2RY12-low, phagocytically engaged near amyloid plaques

Full aging characterization on [[microglia]] (verified-partial); see that page for Keren-Shaul 2017 DAM model, Hammond 2019 scRNA-seq aging substates, and TREM2 R47H AD risk genetics.

### [[astrocytes]]

Astrocytes regulate synaptic transmission, BBB integrity, metabolic support to neurons, and reactive gliosis after injury. With aging, astrocytes shift toward a reactive ("A1") phenotype characterized by complement upregulation and reduced neurotrophic support. The extent to which astrocyte reactivity is primary (causes neuronal dysfunction) vs secondary (responds to it) is contested. #gap/contradictory-evidence — astrocyte A1/A2 classification is debated as oversimplified; human reactive-astrocyte states in aged brain not fully characterized. Page planned: [[astrocytes]] (implicit stub).

### [[oligodendrocytes]]

Oligodendrocytes produce myelin sheaths that enable rapid saltatory conduction. Age-associated white matter rarefaction — visible as white matter hyperintensities on MRI — reflects oligodendrocyte aging, demyelination, and reduced remyelination capacity. The oligodendrocyte precursor cell (OPC) pool declines in function with age, limiting repair. Page planned: [[oligodendrocytes]] (implicit stub).

### [[neural-stem-cells]]

Adult neurogenesis persists in two regions: the **subventricular zone** (SVZ, supplying olfactory bulb interneurons) and the **dentate gyrus** of the hippocampus. Both zones undergo marked age-associated decline in neurogenic output, though the functional significance of this decline for human cognition is actively debated — human adult hippocampal neurogenesis is quantitatively lower than in rodents and its extent is contested. #gap/contradictory-evidence — human adult neurogenesis magnitude and aging trajectory remain disputed across post-mortem studies. Page planned: [[neural-stem-cells]] (implicit stub).

---

## Key aging features

### Autophagy failure and protein aggregation

Conditional knockout of autophagy genes in neurons establishes the necessity of autophagic flux for brain health. Loss of *Atg5* (neuron-specific, Nestin-Cre) or *Atg7* (neuron-specific) in mice causes progressive neurodegeneration with ubiquitin/p62-positive inclusion bodies, motor deficits, and premature death — in the absence of any primary protein aggregation disease mutation [^hara2006][^komatsu2006]. These studies establish that basal constitutive autophagy is essential for clearing normally-generated aggregate-prone proteins in post-mitotic neurons. See [[atg5]] (verified-partial) and [[atg7]] (verified-partial) for primary-source details.

The relevance to human aging is that autophagy flux declines with age — mediated in part by [[mtor]] hyperactivation suppressing autophagy induction and reduced [[tfeb]] nuclear translocation — leaving neurons progressively less able to clear misfolded proteins. This links [[disabled-macroautophagy]] directly to the proteinopathies defining [[alzheimers-disease]] (Aβ, tau) and [[parkinsons-disease]] (α-synuclein).

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (inclusion-body neurodegeneration) conserved in humans? | yes |
| Replicated in humans? | in-progress — human genetic autophagy-variant associations exist but conditional-KO model has no direct human equivalent |

### Microglial activation and neuroinflammation

CNS inflammaging — the age-associated elevation of pro-inflammatory microglial signaling — is a major contributor to neuronal vulnerability. See [[microglia]] (verified-partial) for the mechanistic detail; see [[chronic-inflammation]] (drafted) for the systemic context.

The CHIP-neurodegeneration connection: Bouzid et al. 2023 found that somatic mutations in *TET2* and *DNMT3A* — the canonical CHIP genes — are associated with reduced Alzheimer's disease risk (meta-analysis OR=0.64, P=3.8×10^-5; n=5,730 total: 1,362 AD, 4,368 controls), suggesting that TET2-mutant microglia may paradoxically be neuroprotective (increased anti-inflammatory output) rather than universally damaging [^bouzid2023]. This nuance is documented on [[neurodegeneration]] (drafted).

### Glymphatic clearance decline

The [[glymphatic-system]] is a proposed perivascular CSF–interstitial-fluid transport and solute-clearance process associated with astrocytic [[aquaporin-4|AQP4]]. In Kress et al., old mice (18 months in the main Results; 18–20 months in the abstract) had reduced CSF-tracer penetration, 40% lower clearance of intraparenchymally injected amyloid-β1–40, 27% lower penetrating-arteriole wall pulsatility, and reduced perivascular AQP4 polarization relative to young mice.[^kress2014] These parallel phenotypes do not establish which change was causal, and the study measured neither cognition nor chronic amyloid accumulation. Healthy longitudinal human aging data using direct tracers are lacking. #gap/needs-human-replication

Sleep changes CSF influx, vascular/CSF oscillations, and tracer disappearance, but those endpoints are not interchangeable: the direction of net parenchymal clearance during sleep remains actively contested. The canonical process page separates rodent tracer evidence, human hydrodynamics, invasive human tracer studies, and indirect imaging proxies.

A 2026 cross-sectional ME/CFS study adds a human disease association, not an aging trajectory: 31 adults with ME/CFS had a lower bilateral DTI-ALPS index than 27 healthy controls (1.44 ± 0.086 vs 1.51 ± 0.11; raw p=0.014, p-FDR=0.028), and the index correlated with single-item sleep-disturbance and concentration ratings. The separate WHODAS cognition score, fatigue, direct between-group asymmetry test, and several other symptom associations were null.[^thapaliya2026-alps] This should be labeled an altered [[methods/dti-alps|DTI-ALPS]] index rather than demonstrated glymphatic clearance failure: direct comparison against intrathecal contrast-enhanced MRI found limited correspondence and no 48-hour tracer-dynamics association.[^mossige2026-alps] The study measured neither waste accumulation nor neuroinflammation and does not show that ME/CFS accelerates brain aging. #gap/needs-replication

### BBB permeability increase

Age-associated degradation of tight junction proteins (occludin, claudin-5) and pericyte loss elevate BBB permeability, allowing peripheral inflammatory cytokines (IL-6, TNF-α), activated monocytes, and albumin to enter the brain parenchyma. This feeds the neuroinflammatory cycle and amplifies microglial activation. #gap/unsourced — human longitudinal BBB permeability quantification across aging is sparse.

### Neuronal iron dysregulation and FTL1

Brain iron accumulation with age is a long-recognized phenomenon documented across cortex, hippocampus, basal ganglia, and substantia nigra by MRI susceptibility imaging and post-mortem chemistry. The mechanistic node most directly tying this to cognitive decline (as opposed to neurodegenerative cell death) was established by Remesal et al. 2025 [^remesal2025]: **neuronal [[ftl1|ferritin light chain 1]] rises with age in the mouse hippocampus, and its rise is sufficient + necessary for hippocampal cognitive aging**.

- Aged-mouse hippocampal FTL1 protein ↑ vs young (western blot, P<0.0001); cognitive composite z-score (Y-maze + NOR + RAWM) negatively correlates with hippocampal FTL1 (r=−0.434, P=0.0268)
- AAV-mediated neuronal *Ftl1* overexpression in young CA1+DG: ↑Fe³⁺/Fe²⁺ ratio, ↓dendritic complexity, ↓excitatory/inhibitory synapses, ↓LTP, abolished NOR + Y-maze discrimination — recapitulating aging-like phenotypes in young animals
- Two independent loss-of-function approaches in aged hippocampus (AAV-shRNA + synapsin-1-Cre CRISPR cKO) **restore** synaptic markers + NOR/Y-maze performance
- Mechanism: FTL1 perturbs proton-motive-force-driven mitochondrial ATP synthesis (Sdhb, Atp5o/c1/j, Ndufa10 transcriptionally regulated; Seahorse confirms ATP-rate decrease, P<0.0001 in FTL1-OE primary neurons). See [[mitochondrial-dysfunction]] for the broader connection.
- **Pharmacological rescue:** NADH 100 mg/kg/day IP × 9 days restores NOR + Y-maze in FTL1-OE young mice (P=0.0017 NOR, P=0.0020 Y-maze) — locating the deficit downstream of impaired ATP synthesis. Extends the NAD-cognitive-aging story beyond [[nmn]] / [[nr]] (which act as NAD precursors) with the reduced cofactor delivered directly.

Iron-redox direction in FTL1-driven aging (↑Fe³⁺/Fe²⁺) is **opposite** to what Wu et al. 2023 reported in Alzheimer's-mouse-brain (↓Fe³⁺/Fe²⁺, interpreted as ferroptotic priming) — author interpretation distinguishes sub-lethal iron-sequestration dysfunction from ferroptotic cell death. See [[ftl1]] for full atomic-page detail.

Translational hooks: neuroferritinopathy (autosomal dominant *FTL* mutations → cognitive/movement disorder); CSF ferritin predicts cognitive decline + MCI→AD conversion in AD cohorts (Ayton 2015). #gap/needs-human-replication — Remesal's mouse-FTL1-knockdown rescue has not been independently reproduced or translated to human modalities.

---

## Disease consequences

### [[alzheimers-disease]] (drafted)

The most prevalent age-associated neurodegenerative disease; affects ~10% of adults >65 and ~32% >85 in the US #gap/unsourced. Core neuropathology: amyloid-beta (Aβ) plaques and hyperphosphorylated tau neurofibrillary tangles in cortex and hippocampus. Genetic risk is dominated by APOE ε4 and TREM2 R47H — both with direct mechanistic links to microglial Aβ clearance failure. See [[alzheimers-disease]] for DOI-sourced clinical and mechanistic detail.

### [[parkinsons-disease]] (drafted)

Defined by dopaminergic neuron loss in the substantia nigra and Lewy body (α-synuclein aggregate) pathology. PINK1/Parkin-mediated mitophagy failure and lysosomal dysfunction via GBA loss-of-function are the best-characterized molecular drivers. See [[parkinsons-disease]] for sourced detail.

### [[neurodegeneration]] (drafted)

Category-level page covering shared mechanisms across AD, PD, ALS, HD, FTD, and prion diseases — including the Hara 2006 / Komatsu 2006 autophagy-neurodegeneration proof, the CHIP-AD Bouzid 2023 association, and the anti-amyloid antibody trials.

---

## Aging-protective interventions

The following interventions have evidence for brain-health benefit in aging, though effect sizes in humans and mechanisms vary:

- **Exercise** — most robustly supported; increases BDNF; promotes adult hippocampal neurogenesis in rodents; associated with reduced dementia risk in observational studies. See [[interventions/lifestyle/exercise]] (planned stub).
- **Sleep** — treat diagnosed sleep disorders for established benefits; sleep-linked brain-fluid dynamics are well supported, but glymphatic mediation of neurodegeneration risk and increased net endogenous-solute clearance remain unproven. See [[glymphatic-system]] and [[interventions/lifestyle/sleep|sleep]].
- **Dietary patterns** (Mediterranean, MIND diet) — observational associations with reduced cognitive decline; RCT evidence limited. #gap/needs-human-replication
- **Cognitive engagement** — cognitive reserve hypothesis; observational evidence; mechanism unclear. #gap/no-mechanism
- **Rapamycin** (mTOR inhibition) — extends rodent lifespan and improves cognitive function in aged mice; no human CNS trial data. See [[rapamycin]] (verified-partial), [[mtor]] (verified-partial).
- **Senolytics** — clearing senescent cells from the brain (particularly senescent microglia and astrocytes) is a theoretical target; preclinical only. See [[interventions/pharmacological/senolytics]] (verified-partial).

---

## Hallmark connections

| Hallmark | Brain-specific mechanism |
|---|---|
| [[loss-of-proteostasis]] | Neuronal Aβ/tau/α-syn aggregation; proteasome impairment in aging neurons; neuronal [[ftl1]] rise (Remesal 2025) |
| [[disabled-macroautophagy]] | Autophagy failure → neurodegeneration (Hara/Komatsu Atg5/7 KO) |
| [[mitochondrial-dysfunction]] | High neuronal energy demand; mtDNA mutation accumulation; Complex I deficiency in PD; neuronal-iron-FTL1 → ATP-synthesis decline in hippocampus (Remesal 2025) |
| [[chronic-inflammation]] | Microglial SASP/neuroinflammation; CHIP-mediated TET2-mutant macrophage IL-6/IL-1β |
| [[stem-cell-exhaustion]] | Neural stem cell decline in SVZ/dentate gyrus; limited adult neurogenesis |
| [[epigenetic-alterations]] | Epigenetic clock acceleration in brain tissue; methylation drift at neuron-identity loci |

---

## Limitations and gaps

- `#gap/needs-human-replication` — most mechanistic aging data (autophagy-necessity, microglial state transitions, glymphatic decline) are from mouse models; human equivalents are largely post-mortem or indirect
- `#gap/unsourced` — cortical thinning rate, BBB permeability aging trajectory, astrocyte A1/A2 prevalence, human adult neurogenesis magnitude — all need primary sources
- `#gap/contradictory-evidence` — human adult hippocampal neurogenesis (Boldrini 2018 vs Sorrells 2018 opposing conclusions); astrocyte A1/A2 classification utility
- `#stub` — this page is an anchor tissue stub; several subsections will deepen as [[neurons]], [[astrocytes]], [[oligodendrocytes]], and [[neural-stem-cells]] are expanded

---

## Cross-references

- [[microglia]] (verified-partial) — primary aging characterization page for the key CNS immune cell
- [[neurons]] (planned) — post-mitotic neuronal vulnerability
- [[astrocytes]], [[oligodendrocytes]], [[neural-stem-cells]] (planned stubs)
- [[alzheimers-disease]], [[parkinsons-disease]], [[neurodegeneration]] — disease consequence pages
- [[loss-of-proteostasis]], [[disabled-macroautophagy]], [[chronic-inflammation]], [[mitochondrial-dysfunction]], [[stem-cell-exhaustion]] — hallmark pages
- [[atg5]], [[atg7]] (verified-partial) — neuronal-autophagy-necessity studies
- [[mtor]] (verified-partial) — suppresses autophagy; rapamycin extends CNS healthspan in mice
- [[glymphatic-system]] — perivascular brain-fluid transport, aging evidence, sleep controversy, and measurement hierarchy
- [[interventions/lifestyle/exercise]] — most-supported brain-aging intervention (stub planned)
- [[spinal-cord]] (implicit stub)

---

## Footnotes

[^azevedo2009]: doi:10.1002/cne.21974 · Azevedo FA et al. · in-vivo isotropic fractionator · model: human post-mortem brain; 4 males · ~86 billion neurons + ~85 billion non-neuronal cells; neurons and non-neuronal cells approximately equal in number · not_oa (archive confirmed)

[^hara2006]: doi:10.1038/nature04724 · Hara T et al. · in-vivo conditional KO · model: Nestin-Cre × Atg5^flox/flox (neuron-specific Atg5 KO) C57BL/6 mice · progressive motor deficits, ubiquitin/p62 inclusions, premature death without primary proteinopathy · local PDF available (archive confirmed) · see [[atg5]] for verified claims

[^komatsu2006]: doi:10.1038/nature04723 · Komatsu M et al. · in-vivo conditional KO · model: Nestin-Cre × Atg7^flox/flox (neuron-specific Atg7 KO) · ubiquitin-positive inclusions, neurodegeneration, shortened lifespan (all mutants dead within 28 weeks) · local PDF available (archive confirmed) · see [[atg7]] for verified claims

[^bouzid2023]: doi:10.1038/s41591-023-02397-2 · Bouzid H et al. · observational (meta-analysis) · Nature Medicine 2023;29(7):1662-1670 · n=5,730 total (1,362 AD; 4,368 controls) · CHIP meta-analysis OR=0.64 (protective) vs AD dementia, P=3.8×10^-5 · documented on [[neurodegeneration]] page; see that page for full verified claims

[^remesal2025]: [[remesal-2025-ftl1-brain-cognitive-aging]] · in-vivo + in-vitro · *Nature Aging* 2025;5(10):1957-1969 · DOI 10.1038/s43587-025-00940-z · model: C57BL/6J mice young (2-3 mo) + aged (18-24 mo); primary E17 hippocampal neurons · randomized + blinded · all quantitative claims (n's, P-values) sourced from full PDF read on [[ftl1]] and [[remesal-2025-ftl1-brain-cognitive-aging]] pages · OA CC-BY 4.0

[^kress2014]: [[studies/kress-2014-glymphatic-aging]] · experiment-specific n=4–20/group · in-vivo · model: young, middle-aged, and old C57BL/6 mice · old mice had 40% lower injected amyloid-β clearance, 27% lower penetrating-arteriole pulsatility, and reduced perivascular AQP4 polarization · doi:10.1002/ana.24271

[^thapaliya2026-alps]: [[studies/thapaliya-2026-me-cfs-dti-alps]] · n=58 analyzed (31 ME/CFS, 27 healthy controls; 61 enrolled) · cross-sectional · model: adults with physician-diagnosed ME/CFS vs healthy controls · lower bilateral DTI-ALPS index with disease-specific single-item sleep/concentration correlations; WHODAS cognition, fatigue, and direct between-group asymmetry test null · doi:10.3389/fnins.2026.1875420 · PMID 42403482

[^mossige2026-alps]: [[methods/dti-alps]] · Mossige I et al. · n=56 · prospective-observational secondary analysis · model: humans undergoing work-up for cerebrospinal-fluid disorders · limited DTI-ALPS correspondence with intrathecal gadobutrol-enhanced MRI; no 48-hour tracer-dynamics association · doi:10.1148/radiol.252070 · PMID 41631990
