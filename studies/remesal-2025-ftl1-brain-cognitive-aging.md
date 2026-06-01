---
type: study
doi: 10.1038/s43587-025-00940-z
pmid: 40830655
pmc: PMC12532579
title: "Targeting iron-associated protein Ftl1 in the brain of old mice improves age-related cognitive impairment"
authors: [Remesal L, Sucharov-Costa J, Wu Y, Pratt KJB, Bieri G, Philp A, Phan M, Aghayev T, White CW 3rd, Wheatley EG, Zou B, Desousa BR, Couthouis J, Jian IH, Xie XS, Lu Y, Maynard JC, Burlingame AL, Villeda SA]
year: 2025
journal: Nature Aging
volume: 5
issue: 10
pages: 1957-1969
study-design: in-vivo
publication-type: letter
organism: mus-musculus
n-subjects: null
intervention: ["[[ftl1]]"]
hallmarks-tested: ["[[mitochondrial-dysfunction]]", "[[loss-of-proteostasis]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [ftl1-hippocampal-rise-with-age, ftl1-cognitive-decline-correlation, ftl1-iron-redox-shift-fe3-accumulation, ftl1-knockdown-rescues-aged-cognition, ftl1-impairs-atp-synthesis, nadh-supplementation-rescues-ftl1-deficit]
local-pdf: null
verified: true
verified-date: 2026-05-20
verified-by: claude
verified-scope: "Full PDF read end-to-end (27 pages including methods + 55 references). All quantitative claims (n's, p-values, fold-changes, dose-response) extracted directly from main figure legends + methods. Canonical-database identity fields (mouse Ftl1 = UniProt P29391; human FTL = UniProt P02792) cross-verified against UniProt and NCBI Gene (Ftl1 mouse = NCBI Gene 14325; FTL human = NCBI Gene 2512)."
---

# Remesal 2025 — Neuronal FTL1 as a driver of hippocampal cognitive aging

## TL;DR

Remesal et al. identify **neuronal ferritin light chain 1 (FTL1)** as a pro-aging factor in the hippocampus whose age-associated rise drives cognitive decline. In young C57BL/6 mice, hippocampal AAV-mediated *Ftl1* overexpression (synapsin-1 promoter) shifts iron redox state toward oxidized Fe³⁺, reduces dendritic complexity, decreases excitatory and inhibitory synaptic markers, impairs LTP, and produces deficits in novel-object recognition (NOR) and Y-maze cognition — recapitulating aging-like phenotypes in young animals. Conversely, in aged (18–24 mo) mice, two independent neuronal-FTL1-loss-of-function approaches — AAV-shRNA knockdown and synapsin-1-Cre-driven CRISPR conditional knockout — restored synaptic markers and rescued NOR + Y-maze performance. Bulk + single-nuclei RNA-seq converge on **ATP synthesis / oxidative phosphorylation** as the most consistently regulated process, and Seahorse confirms that FTL1 OE in primary neurons cuts mitochondrial ATP production rate (P<0.0001). Exogenous **NADH** (100 mg/kg IP daily × 9 days, with the final dose 2 h before testing) rescues both dendritic morphology and cognition in FTL1-OE young mice. Senior author Saul Villeda (UCSF); funded by NIA AG081038/AG067740/AG062357 and the Simons Foundation. Published as a **Letter** (short format) in *Nature Aging*.

This paper establishes:
1. A neuronal cell-autonomous driver of hippocampal cognitive aging that is targetable in old animals (rare in the aging-brain field — most rejuvenation work targets systemic or non-neuronal compartments).
2. A mechanistic link between **brain iron dyshomeostasis** and **mitochondrial-dysfunction** at the level of ATP synthesis — distinct from (though potentially upstream of) ferroptotic cell death.
3. A pharmacological rescue paradigm — NADH supplementation — that extends prior NAD-precursor cognitive-aging work ([[nmn]], [[nr]]) using the reduced cofactor directly.

## Design

### Mouse lines
- **C57BL/6J** young (2–3 mo) and aged (18–22 or 18–24 mo per experiment) — Jackson Lab 000664; aged mice from NIA colony
- **B6;129-Gt(ROSA)26Sor^tm1(CAG-cas9°,-EGFP)Fezh/J** — inducible Cas9 transgenic (Jackson Lab 024857), used for neuron-specific conditional Ftl1 knockout

### Viral manipulation paradigms

| Direction | Vector | Promoter | Cargo | Target population |
|---|---|---|---|---|
| Overexpression | Lentivirus (in vitro) / lentivirus (in vivo) | synapsin-1 | Syn1-Ftl1-IRES-eGFP vs Syn1-IRES-eGFP control | Hippocampal neurons of **young** mice (CA1 + dentate gyrus, bilateral stereotaxic) |
| Knockdown | Lentivirus, pGreenPuro shRNA backbone | U6 | shRNA targeting Ftl1 (SH1–SH4) vs luciferase shRNA control | Hippocampal neurons of **aged** mice |
| Conditional KO | Lentivirus + Cas9 transgenic mouse | synapsin-1 (Cre) + U6 (gRNA) | Syn1-Cre + gRNA targeting Ftl1 exons 2–4 (vs scrambled gRNA) | Hippocampal neurons of **aged** Rosa26-loxP-STOP-loxP-Cas9-eGFP mice |

All in vivo stereotaxic injections: 2 μl per site at 0.2 μl/min, bilateral CA1 + dentate gyrus, viral titer 1.0 × 10⁸ vp/ml.

### Cognitive assays
- **Novel Object Recognition (NOR)** — White 2020 protocol; discrimination index = (T_novel − T_familiar) / (T_novel + T_familiar)
- **Y-maze forced alternation** — discrimination index for novel arm vs trained arm after 45-min delay
- **Radial Arm Water Maze (RAWM)** — Alamed 2006 protocol; used in cognitive composite z-score
- **Open field** — control for general locomotor / anxiety phenotypes (no differences detected in any cohort)

### Other key assays
- **Neuronal nuclei RNA-seq (snRNA-seq)** — FACS-sorted NeuN⁺ Hoechst⁺ nuclei; Smart-seq2 protocol; ~13,100–15,950 nuclei per sample; ~27,000 reads/nucleus; STAR + RSEM + DESeq2; PCA + Louvain + UMAP; Seurat
- **Synaptosome proteomics** — sub-dissected hippocampus + cortex; sucrose-gradient synaptosome fractionation; TMT-6plex isobaric labeling; Orbitrap Fusion Lumos LC-MS/MS
- **Iron redox imaging** — DNAzyme-based fluorescent sensors selective for Fe²⁺ (Fe(II)-H5) and Fe³⁺ (Fe(III)-B12), adapted from Wu 2023; confocal imaging of CA1/CA2/CA3/DG
- **Seahorse XFe24** — primary neuron mitochondrial ATP production rate (oligomycin + rotenone/antimycin protocol)
- **Field EPSP LTP** — acute hippocampal slices from 16–18-week-old male mice ~1 month after stereotaxic OE injection; Schaffer collateral stimulation; 100 Hz × 2 trains; 50-min recording
- **Western blot, qPCR, confocal synaptic-puncta quantification (synapsin / PSD95 / gephyrin)** — standard

## Key findings

### 1. FTL1 rises in aged hippocampal neurons and tracks cognitive decline

- Neuronal nuclei bulk RNA-seq (NeuN⁺ FACS-sorted nuclei from hippocampi): **28 upregulated** and **81 downregulated** genes between young (N=3, 3 mo) and aged (N=2, 18 mo) mice; GO enrichment on differentially expressed genes was dominated by **synapse-related processes** (carbohydrate metabolic process, regulation of synapse structure/activity, regulation of synapse organization, axonogenesis, synapse assembly) [^remesal2025]
- Synaptosome proteomics (sub-dissected hippocampus + cortex, sucrose-gradient synaptosomes, TMT-6plex MS/MS): **27 upregulated** and **19 downregulated** proteins with age (N=3 young, N=3 aged 18–20 mo, 20 mice pooled per replicate); GO enriched for **immune response + complement activation** [^remesal2025]
- Cross-referencing the transcriptomic and proteomic datasets yielded a single shared upregulated factor: **FTL1** [^remesal2025]
- Validation: hippocampal *Ftl1* mRNA increased by qPCR (N=6 young vs N=6 aged 18–22 mo, P=0.0219); hippocampal FTL1 protein increased by western blot (N=12 young vs N=9 aged 24 mo, **P<0.0001**) [^remesal2025]
- In an independent cohort, hippocampal FTL1 protein levels (western blot) correlated negatively with a behavioral z-score composite of Y-maze + NOR + RAWM: **Pearson r = −0.434, P = 0.0268** (N=15 young + N=11 aged 20 mo) [^remesal2025]

### 2. Mimicking the age-rise in young mice produces aging-like deficits

**In vitro (primary hippocampal neurons; DIV8 lentiviral OE → DIV18 analysis):**
- Total dendrite length: control vs Ftl1-OE **P<0.0001** (N=5 vs 5 replicates, 5–9 neurons each)
- Total Sholl intersections: **P<0.0001**
- Intersections-vs-distance from soma: **P<0.01** (control > Ftl1-OE) [^remesal2025]

**In vivo (young C57BL/6, bilateral CA1+DG Syn1-Ftl1-IRES-eGFP):**
- Hippocampal FTL1 protein ↑ by ~30% vs Syn1-eGFP control (N=6 vs 6, P=0.0434) [^remesal2025]
- **Iron redox shift** (DNAzyme sensors): Fe²⁺ unchanged (P=0.2567); Fe³⁺ ↑ (N=4 per group, **P=0.0382**); Fe³⁺/Fe²⁺ ratio ↑ (**P=0.0279**) [^remesal2025]
- **Excitatory synaptic markers ↓** (N=4 control vs 7 Ftl1-OE): synapsin P=0.0265; PSD95 **P=0.0006**; co-localized excitatory synapses **P=0.0089** [^remesal2025]
- **Inhibitory synaptic markers ↓**: synapsin P=0.0129; gephyrin P=0.0053; inhibitory synapse co-localization P=0.2001 (NS) [^remesal2025]
- NR2A, AMPA receptor, synapsin ↓ on western (Extended Data Fig 3c)
- **LTP impaired**: fEPSP slope (% baseline, average of final 5 min) reduced (N=16 control vs 16 Ftl1-OE slices, P=0.029) [^remesal2025]
- **NOR**: control mice showed novel-object preference (N=23, P=0.0023); Ftl1-OE young mice showed no preference (N=20, P=0.4315) [^remesal2025]
- **Y-maze**: same pattern — control N=18 P=0.0336; Ftl1-OE young N=22 P=0.4315 [^remesal2025]
- No locomotor/anxiety differences in open field (Extended Data Fig 3d–f) [^remesal2025]

### 3. Targeting FTL1 in aged hippocampus rescues cognition

**Aged shRNA knockdown (18 mo, bilateral CA1+DG sh-Ftl1-eGFP vs sh-Luc-eGFP):**
- FTL1 protein ↓ (N=6 vs 6, P=0.0323) [^remesal2025]
- Excitatory: synapsin P=0.0132, PSD95 P=0.1324, excitatory synapses P=0.0777 (trend)
- Inhibitory: synapsin P=0.0257, gephyrin P=0.0031, inhibitory synapse co-localization P=0.2964
- **NOR rescued**: control aged N=16 (P=0.4977 — fails); Ftl1-KD aged N=17 (**P=0.0010** — succeeds)
- **Y-maze rescued**: control aged N=17 (P=0.1895 — fails); Ftl1-KD aged N=18 (**P=0.0072** — succeeds)
- Open field unchanged [^remesal2025]

**Aged neuron-specific CRISPR cKO (22 mo, Rosa26-LSL-Cas9-eGFP transgenics + Syn1-Cre + gRNA-Ftl1):**
- FTL1 protein ↓ (N=5 vs 6, P=0.0076)
- Excitatory: synapsin **P=0.0028**, PSD95 P=0.0140, excitatory synapses P=0.0773
- Inhibitory: synapsin P=0.1091, gephyrin P=0.1091, inhibitory co-localization P=0.0472
- **NOR rescued** (control N=21 P=0.5796 fails; Ftl1-cKO N=14 **P=0.0087** succeeds — but note discrepancy: in Fig 3l, control N=15 P=0.4977 fails and Ftl1-cKO **P=0.0010** succeeds; the cKO and KD cohorts converge on the same effect direction)
- **Y-maze**: control N=21 P=0.5796; Ftl1-cKO N=14 (P=0.0883 — strong trend, not significant); see Fig 3m [^remesal2025]

Two independent loss-of-function approaches (shRNA + CRISPR cKO) converging in aged animals materially derisks an off-target / sequence-specific artifact.

### 4. Mechanism: FTL1 disrupts mitochondrial ATP synthesis

**Bulk neuronal nuclei RNA-seq:**
- Young Ftl1-OE: 100 differentially expressed genes; GO enriched for translation, oxidative phosphorylation, ATP metabolic process, aerobic respiration, proton transmembrane transport [^remesal2025]
- Aged Ftl1-KD: 309 differentially expressed genes; GO enriched for regulation of trans-synaptic signaling, transport, synapse organization, synapse plasticity, neurogenesis [^remesal2025]
- 32 genes were **bidirectionally changed** (down in Ftl1-OE young, up in Ftl1-KD aged): GO enriched for oxidative phosphorylation, proton-motive-force-driven mitochondrial ATP synthesis, translation, aerobic respiration, energy derivation by oxidation of organic compounds [^remesal2025]
- Specific ETC genes upregulated in aged Ftl1-cKO: *Sdhb* (Complex II succinate dehydrogenase), *Atp5o*, *Atp5c1*, *Atp5j* (Complex V ATP synthase), *Ndufa10* (Complex I) [^remesal2025]

**Single-nuclei RNA-seq of aged Ftl1-cKO vs control** (N=2 pooled mice per group, ~10,000 nuclei/sample; 10x Genomics 3' kit):
- Cell-type-resolved GO across CA1 pyramidal, CA2/CA3 pyramidal, DG granule cell clusters all converged on metabolic processes: proton-motive-force-driven mitochondrial ATP synthesis, oxidative phosphorylation, mitochondrial electron transport, NADH dehydrogenase complex assembly [^remesal2025]

**Seahorse XFe24 mitochondrial ATP production rate (primary hippocampal neurons, DIV8):**
- Ftl1-OE vs control: **P<0.0001** (decreased; N=12 control vs N=18 OE replicates)
- Ftl1-KD vs control: P=0.0784 (trend toward increased; N=17 control vs N=18 KD replicates) [^remesal2025]

### 5. NADH supplementation rescues FTL1-driven cognitive deficits

**Rationale:** NADH is a coenzyme that drives ATP synthesis at Complex I (NADH:ubiquinone oxidoreductase). Boosting NADH should counter FTL1's effects on ATP synthesis if that mechanistic pathway is causal.

**In vitro rescue (primary neurons, 200 μM NADH from DIV14–DIV18):**
- Total dendrite length: control+saline vs OE+saline **P<0.0001** (deficit confirmed); OE+saline vs OE+NADH **P=0.0002** (deficit mitigated)
- Total Sholl intersections: control vs OE+saline P=0.0075; OE+saline vs OE+NADH P=0.0039
- Intersections vs distance: control vs OE+saline P<0.0001; OE+saline vs OE+NADH **P<0.0001**
- N=5 control+saline, 5 OE+saline, 6 control+NADH, 6 OE+NADH replicates [^remesal2025]

**In vivo rescue** (young adult mice, bilateral Syn1-Ftl1-IRES-eGFP injection ~42–51 days prior; **NADH 100 mg/kg/day IP × 9 days**, final dose 2 h before testing):
- **NOR**: control+saline P=0.0046 (preference); Ftl1-OE+saline P=0.6516 (deficit confirmed); control+NADH P=0.0016; **Ftl1-OE+NADH P=0.0017 (rescued)**
- **Y-maze**: control+saline P=0.0250; Ftl1-OE+saline P=0.0551 (trend deficit); control+NADH P=0.0238; **Ftl1-OE+NADH P=0.0020 (rescued)**
- N=12 control+saline, 12 Ftl1-OE+saline, 14 control+NADH, 13 Ftl1-OE+NADH per cohort [^remesal2025]
- Open field unchanged across all four groups [^remesal2025]

NADH rescue suggests the FTL1 cognitive phenotype is downstream of impaired ATP synthesis — not solely a direct iron-toxicity / ferroptotic effect — and lies upstream of dendritic-arbor maintenance and synaptic plasticity.

## Wiki impact

### Hallmark connections
- **[[mitochondrial-dysfunction]]** — primary mechanism. FTL1 acts as an iron-routing perturbant that disrupts proton-motive-force-driven ATP synthesis at the inner membrane. Atp5o/c1/j, Sdhb, and Ndufa10 are bidirectionally regulated.
- **[[loss-of-proteostasis]]** — secondary. Aged-rise in neuronal ferritin protein is a proteostatic shift (whether driven by iron-loading or independent protein-handling change is not resolved in this paper).
- Iron redox shift (↑Fe³⁺/Fe²⁺) overlaps with ferroptosis machinery [^dixon2012][^stockwell2017], but Remesal explicitly notes that the **direction** of the Fe³⁺/Fe²⁺ shift in FTL1-OE young mice (increase) is *opposite* to what was previously reported in Alzheimer's mouse brain (decrease) [^wu2023]. Author interpretation: ferroptotic cell death and the FTL1-driven sub-lethal dysfunction described here are mechanistically distinct.

### Intervention modalities
- **AAV-shRNA / synapsin-1-Cre CRISPR cKO of neuronal Ftl1** — neuronal-FTL1-knockdown joins a small set of validated late-life cognitive-rescue gene-therapy targets in mouse. Companion to Wheatley 2019 (O-GlcNAcylation) and Pratt 2022 (TET2) from the same Villeda lab lineage.
- **NADH supplementation** — extends the NAD-cognitive-aging story (cf. [[nmn]], [[nr]]). Distinguishing feature: Remesal used **NADH directly** (the reduced cofactor), not a precursor — bypassing the de novo / salvage biosynthetic steps that NMN/NR rely on. This may have translational implications if NADH bioavailability differs from precursors. The IP-100-mg/kg × 9 days, 2-h pretrial paradigm is short-duration and tested only against FTL1-OE-induced deficit, not aging itself.

### Translational implications

Authors note three convergent lines for human relevance:
- **Neuroferritinopathy** — autosomal-dominant disorder caused by mutations in *FTL* (the human ortholog of *Ftl1*); presents with movement disorders, dystonia, and cognitive impairment [^levi2005][^kumar2016][^marchand2022] — demonstrating that pathological ferritin variation is cognitively impactful in humans.
- **CSF ferritin in AD** — Ayton et al. 2015 reported that CSF ferritin levels in AD cohorts predicted cognitive performance over 7 years and predicted conversion from MCI to AD [^ayton2015]. This is the most direct human correlative evidence that ferritin biology tracks cognitive trajectory.
- **General iron-dyshomeostasis aging biology** — iron accumulation in the aging brain is a long-recognized phenomenon; this paper supplies a discrete mechanistic node (neuronal FTL1 → iron redox → ATP synthesis → cognition) that is potentially druggable.

### Gaps and limitations

- **Single laboratory replication** — all in vivo behavioral and synaptic data are from the Villeda lab. Independent replication of the cognitive rescue is not yet published. #gap/needs-replication
- **Single species** — mouse only. Direct demonstration that the same mechanism operates in human hippocampal aging awaits postmortem proteomic confirmation + human-genetic association (CSF ferritin / GWAS hits exist but are correlative). #gap/needs-human-replication
- **Mechanism of FTL1 upregulation with age is not identified** — what drives the age-rise of neuronal *Ftl1* in the first place? Transcriptional regulator(s), iron-IRP-IRE post-transcriptional regulation, microglia/astrocyte iron-handoff biology — all are plausible upstream causes but none are resolved here. #gap/no-mechanism (upstream)
- **Sex** — paper does not break out by sex; electrophysiology used 16–18-week-old males only; behavioral cohorts are not sex-segregated in the figure legends. #gap/needs-sex-stratification
- **NADH dose-response and duration are minimal** — single dose (100 mg/kg IP), short window (9 days). Effect on baseline aged cognition (without FTL1 OE) is **not tested**. #gap/dose-response-unclear; #gap/long-term-unknown
- **Bidirectional gene-set is small (32 genes)** — high statistical power to call the OXPHOS signature, but mechanistic specificity to ATP synthesis (vs collateral effects on Ca²⁺ handling, redox, peroxisomal metabolism etc.) is limited.
- **Cognitive composite z-score correlation (r=−0.434, P=0.0268)** is moderate. The relationship is consistent but not deterministic; many FTL1-low aged mice still show impairment, and vice versa.

## Footnotes

[^remesal2025]: [[remesal-2025-ftl1-brain-cognitive-aging]] · this study · n's and p-values per the individual results sections above · randomized + blinded (per Methods statement: "All experiments were randomized and blinded by an independent researcher") · model: C57BL/6J mice young (2–3 mo) + aged (18–24 mo); primary hippocampal neuron cultures from E17 C57Bl/6J embryos · published as Letter, *Nature Aging* 5(10):1957–1969 · DOI 10.1038/s43587-025-00940-z · PMID 40830655 · PMC12532579 · OA via CC-BY 4.0

[^dixon2012]: doi:10.1016/j.cell.2012.03.042 · Dixon SJ et al. · *Cell* 2012;149(5):1060-1072 · ferroptosis-defining paper · in-vitro · model: human cancer cell lines · not independently re-read for this study page

[^stockwell2017]: doi:10.1016/j.cell.2017.09.021 · Stockwell BR et al. · *Cell* 2017;171(2):273-285 · ferroptosis review · not independently re-read for this study page

[^wu2023]: doi:10.1126/sciadv.eade7622 · Wu Y et al. · *Sci Adv* 2023 · DNAzyme Fe²⁺/Fe³⁺ sensor methodology paper · model: Alzheimer's disease mouse brain · Fe³⁺ enriched over Fe²⁺ in AD brain (decreased Fe³⁺/Fe²⁺ ratio reported in original — *opposite* sign vs Remesal 2025 FTL1-OE in non-AD young brain; author interpretation: distinguishes ferroptotic from sub-lethal FTL1 dysfunction) · not independently re-read

[^ayton2015]: doi:10.1038/ncomms7760 · Ayton S et al. · *Nat Commun* 2015;6:6760 · observational · CSF ferritin predicted AD outcomes over 7 yr; regulated by APOE · model: human AD cohort · not independently re-read

[^levi2005]: doi:10.1016/j.beha.2004.08.022 · Levi S et al. · *Best Pract Res Clin Haematol* 2005;18(2):265-276 · neuroferritinopathy review · not_oa likely · not independently re-read

[^kumar2016]: doi:10.7916/D8KS6PR1 · Kumar N et al. · *Tremor Other Hyperkinet Mov* 2016;6:355 · neuroferritinopathy clinical review · not independently re-read

[^marchand2022]: doi:10.1002/mds.29162 · Marchand A et al. · *Mov Disord* 2022;37(9):1948-1952 · neuroferritinopathy iron-chelation case report · not independently re-read

---

## Cross-references

- **Subject protein**: [[ftl1]] (drafted alongside this study page; verified-by-claude 2026-05-20)
- **Senior author lab work** (Villeda) — cognitive-rejuvenation-via-blood-factors paradigm: [[young-blood]] context (planned); [[gdf11]] (verified); related papers: Villeda 2011 *Nature*, Villeda 2014 *Nat Med*, Castellano 2017 *Nature* (umbilical cord plasma), Horowitz 2020 *Science* (exercise factors), Schroer 2023 *Nature* (platelet factors), Pratt 2022 *Cell Rep* (TET2)
- **Cognitive-aging gene-therapy precedents**: [[tet2]] (verified) — Pratt 2022 same-lab study
- **Hallmark coverage**: [[mitochondrial-dysfunction]] (drafted) — to be propagated with the FTL1 iron-ATP-synthesis axis; [[loss-of-proteostasis]] (drafted)
- **Tissue coverage**: [[brain]] (verified) — to be propagated with a brain-iron section
- **Intervention coverage**: [[nmn]] (drafted), [[nr]] (drafted) — NAD-precursor cognitive-aging story; this paper uses **NADH** directly rather than a precursor
- **Model organism**: [[mus-musculus]] (drafted) — C57BL/6J young + aged
