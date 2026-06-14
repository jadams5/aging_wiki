---
type: protein
aliases: [FTL, FTL1, ferritin light chain, ferritin L subunit, FRIL_HUMAN, FRIL1_MOUSE, ferritin light polypeptide 1]
uniprot: P02792
ncbi-gene: 2512
hgnc: 3999
ensembl: ENSG00000087086
genage-id: null
mouse-ortholog: Ftl1
pathways: []
hallmarks: ["[[mitochondrial-dysfunction]]", "[[loss-of-proteostasis]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
literature-checked-through: 2026-05-20
verified: true
verified-date: 2026-05-20
verified-by: claude
verified-scope: "Aging-context claims sourced from Remesal 2025 (PDF read end-to-end on the [[remesal-2025-ftl1-brain-cognitive-aging]] study page). Canonical-DB identity fields (UniProt P02792 human FTL, P29391 mouse Ftl1; NCBI Gene 2512 human, 14325 mouse; HGNC 3999; Ensembl ENSG00000087086; molecular weight 20,020 Da human; 175 aa human) verified live against UniProt, NCBI Gene, and Open Targets APIs on 2026-05-20. Background ferritin biology (24-subunit composition, H/L heterooligomerization, iron-responsive-element regulation) drawn from canonical knowledge — flagged where claims are background-knowledge vs Remesal-paper-sourced."
---

# FTL1 / FTL — Ferritin Light Chain

FTL1 (mouse) / FTL (human) is the **light-chain subunit of the ferritin iron-storage complex**. Ferritin is the principal cytosolic iron-storage protein in vertebrates: a 24-subunit hollow nanocage (~24 × 12 nm internal cavity) that sequesters up to ~4,500 ferric iron atoms per cage as a hydrous oxide mineral. The L-subunit (FTL) provides nucleation sites for iron-core formation and stabilizes the mineral over long-term storage; it is enzymatically distinct from the H-subunit ([[fth1]]), which carries the ferroxidase activity that oxidizes incoming Fe²⁺ to Fe³⁺ before deposition.

The aging-relevant identity of this protein was established by [^remesal2025], which identified **neuronal FTL1 as a cell-autonomous pro-aging factor in the mouse hippocampus**: its age-related rise in hippocampal neurons drives a shift in iron redox state (↑Fe³⁺/Fe²⁺), impairs mitochondrial ATP synthesis, decreases synaptic markers + LTP, and produces NOR + Y-maze cognitive deficits. AAV-shRNA knockdown or synapsin-1-Cre CRISPR conditional knockout of *Ftl1* in **aged** (18–22 mo) mouse hippocampi reverses synaptic + cognitive aging phenotypes. The cognitive deficit is recapitulated by NADH supplementation rescue, locating the FTL1 phenotype downstream of impaired ATP synthesis.

This is — as of mid-2026 — the strongest mechanistic evidence that a single iron-storage protein acts as a discrete, cell-autonomous driver of cognitive aging in a model organism.

## Identity

- **UniProt:** P02792 (FRIL_HUMAN) — Swiss-Prot reviewed; mouse ortholog **P29391** (FRIL1_MOUSE)
- **NCBI Gene:** 2512 (human FTL, chr 19) / 14325 (mouse Ftl1, chr 7)
- **HGNC symbol:** FTL (HGNC:3999)
- **Ensembl:** ENSG00000087086 (human); canonical transcript ENST00000331825.11
- **GenAge ID:** not listed — #gap/not-in-genage. As of 2026-05-20, FTL is not curated in GenAge HAGR (the canonical aging-gene database). The Remesal 2025 Nature Aging paper was published 2025-08-19 and may not yet have triggered curation review. The hippocampal cognitive-aging linkage is strong enough to warrant nomination.
- **Mouse ortholog:** **Ftl1** (one-to-one ortholog; mouse symbol convention adds the "1" because of a related pseudogene [[ftl1-ps1]]). The Remesal 2025 paper uses mouse *Ftl1* throughout; human counterpart is *FTL*.
- **Length (human canonical):** 175 amino acids → mature subunit
- **Subunit mass:** ~20,020 Da
- **Subunit form:** 24 subunits assemble into the ferritin holoprotein (4-3-2 symmetry hollow shell); each tissue's ferritin has a characteristic FTH1:FTL ratio (L-rich = long-term storage tissues like liver/spleen; H-rich = catalytically active tissues like heart/brain) — background biology, not Remesal-paper-sourced.

## Naming and disambiguation

The mouse gene symbol is **Ftl1** (with the numerical suffix; the un-suffixed *Ftl* would refer to the pseudogene line). The human gene symbol is **FTL** (no numerical suffix; the human genome has one functional ferritin-light-chain gene). This wiki page is named `ftl1.md` to match the Remesal 2025 paper's nomenclature; aliases include both `FTL` and `FTL1` for resolution. Cross-link wikilinks should resolve to this page regardless of which symbol the source paper used.

This is **NOT** to be confused with:
- [[fth1]] — ferritin heavy chain 1 (the ferroxidase-active subunit; *separate page*; the H-subunit catalyzes Fe²⁺ → Fe³⁺ oxidation prior to mineral deposition)
- *FTMT* (mitochondrial ferritin) — encoded by a separate intronless gene, expressed primarily in testis and brain mitochondria; not extensively characterized in this paper
- **Serum ferritin** as a clinical biomarker — this measures circulating ferritin (a mix of H + L subunits, largely L-dominant), is interpreted as a proxy for total-body iron stores, and is mechanistically distinct from the neuronal-cytosolic-FTL1 aging role described by Remesal

## Aging-context biology

### Hippocampal neuronal FTL1 rises with age

In a discovery cohort, FACS-purified NeuN⁺ neuronal nuclei from young (3 mo) vs aged (18 mo) C57BL/6J hippocampi showed *Ftl1* mRNA among 28 upregulated transcripts (RNA-seq); independent synaptosome TMT proteomics on cortical+hippocampal synaptosomes (20 mice pooled per replicate) identified FTL1 among 27 upregulated proteins. The intersection of the two omics datasets yielded FTL1 as the single shared upregulated factor [^remesal2025].

Validation in independent cohorts:
- Hippocampal *Ftl1* mRNA: N=6 young vs N=6 aged 18–22 mo, **P=0.0219**
- Hippocampal FTL1 protein (western blot): N=12 young vs N=9 aged 24 mo, **P<0.0001**
- Cognitive composite (Y-maze + NOR + RAWM z-score) vs hippocampal FTL1: **Pearson r = −0.434, P = 0.0268** (N=15 young + N=11 aged 20 mo)

[^remesal2025]

### Neuronal FTL1 overexpression in young mice is sufficient to produce aging-like deficits

Bilateral stereotaxic delivery of Syn1-Ftl1-IRES-eGFP (lentiviral, neuron-specific synapsin-1 promoter) into the CA1 + dentate gyrus of young (2–3 mo) C57BL/6J mice produced [^remesal2025]:

| Phenotype | Effect | Statistical detail |
|---|---|---|
| Hippocampal FTL1 protein | ↑ ~30% vs Syn1-eGFP control | N=6+6; P=0.0434 |
| Labile Fe²⁺ (DNAzyme sensor) | unchanged | P=0.2567 |
| Labile Fe³⁺ (DNAzyme sensor) | ↑ | P=0.0382 |
| Fe³⁺/Fe²⁺ ratio | ↑ | P=0.0279 |
| Excitatory synapse markers (synapsin, PSD95, co-loc) | all ↓ | P=0.0265 / 0.0006 / 0.0089 |
| Inhibitory synapse markers (synapsin, gephyrin) | ↓ | P=0.0129 / 0.0053 |
| NR2A, AMPAR, synapsin (whole-tissue WB) | ↓ | (Extended Data Fig 3c) |
| Hippocampal LTP (fEPSP slope, last 5 min) | ↓ | N=16+16 slices; P=0.029 |
| NOR discrimination | abolished | N=23 control / N=20 OE; P=0.0023 vs P=0.4315 |
| Y-maze discrimination | abolished | N=18 control / N=22 OE; P=0.0336 vs P=0.4315 |
| Open-field activity / anxiety | unchanged | (Extended Data Fig 3d–f) |

In vitro, the same Ftl1 OE construct in primary E17 hippocampal neurons (DIV8 infection → DIV18 analysis) reduced total dendrite length (P<0.0001), total Sholl intersections (P<0.0001), and intersection-vs-distance complexity (P<0.01) [^remesal2025].

### Knockdown / knockout in aged hippocampus rescues cognition

Two independent neuronal-FTL1-loss-of-function approaches both rescued aged cognition [^remesal2025]:

**AAV-shRNA knockdown** (18 mo C57BL/6, bilateral CA1+DG sh-Ftl1-eGFP vs sh-Luc-eGFP):
- FTL1 protein ↓ (P=0.0323)
- Excitatory synapsin ↑ (P=0.0132), gephyrin ↑ (P=0.0031)
- NOR: control aged N=16 P=0.4977 (failing); Ftl1-KD aged N=17 **P=0.0010 (rescued)**
- Y-maze: control aged N=17 P=0.1895; Ftl1-KD aged N=18 **P=0.0072 (rescued)**

**Synapsin-1-Cre CRISPR conditional KO** (22 mo Rosa26-LSL-Cas9-eGFP transgenics + lentiviral Syn1-Cre + gRNA-Ftl1):
- FTL1 protein ↓ (N=5+6; P=0.0076)
- Excitatory synapsin **P=0.0028**, PSD95 P=0.0140; inhibitory co-localization P=0.0472
- NOR + Y-maze trends consistent with rescue (significance varies by exact cohort — see Fig 3l,m)

Two orthogonal loss-of-function approaches converging on the same direction of effect in aged animals materially derisks shRNA off-target / sequence-specific artifacts.

### Mechanism: ATP synthesis impairment

Single-nuclei RNA-seq (10x Genomics) of aged Ftl1-cKO hippocampi resolved into CA1 pyramidal, CA2/CA3 pyramidal, and DG granule cell clusters. GO enrichment across all three excitatory neuron classes consistently called out the same metabolic processes [^remesal2025]:

- Proton-motive-force-driven mitochondrial ATP synthesis
- Oxidative phosphorylation
- Mitochondrial electron transport, ubiquinol to cytochrome c
- ATP biosynthetic process
- NADH dehydrogenase complex assembly (Complex I)

Specific bidirectionally regulated ETC genes (down in FTL1 OE young hippocampus, up in FTL1 cKO aged hippocampus): ***Sdhb*** (Complex II), ***Atp5o*, *Atp5c1*, *Atp5j*** (Complex V / ATP synthase F1Fo), ***Ndufa10*** (Complex I) [^remesal2025].

Functional confirmation by Seahorse XFe24 in primary neurons (DIV8) [^remesal2025]:
- Ftl1 OE vs control: **mitochondrial ATP production rate ↓, P<0.0001** (N=12+18)
- Ftl1 KD vs control: trend ↑ (P=0.0784)

### NADH supplementation rescues the FTL1 cognitive deficit

NADH directly enters Complex I (NADH:ubiquinone oxidoreductase) as the electron donor for the proton-motive force; boosting NADH availability should rescue an FTL1-driven ATP-synthesis bottleneck. Tested in vitro (primary neurons, 200 μM NADH, DIV14–DIV18) and in vivo (young adult mice with Syn1-Ftl1 OE; NADH **100 mg/kg/day IP × 9 days**, final dose 2 h pretrial) [^remesal2025]:

| Test | Ftl1 OE + saline | Ftl1 OE + NADH | Effect |
|---|---|---|---|
| NOR (P-value for novel preference) | 0.6516 (fails) | **0.0017 (rescued)** | NADH restores preference |
| Y-maze | 0.0551 (fails/trend) | **0.0020 (rescued)** | NADH restores preference |
| In-vitro dendrite length | reduced | restored | OE+sal vs OE+NADH P=0.0002 |
| In-vitro Sholl intersections | reduced | restored | P=0.0039 |

NADH effect on aged baseline cognition (without FTL1 OE) is **not tested** in this paper — the rescue is demonstrated against an FTL1-induced deficit, not against natural aging. #gap/long-term-unknown; #gap/dose-response-unclear

## Iron-redox-state shift: relationship to ferroptosis

The Remesal 2025 finding of **↑Fe³⁺/Fe²⁺ ratio** in FTL1-OE young hippocampus is in the **opposite direction** to what was previously reported in Alzheimer's-disease mouse brain by [^wu2023] (where Fe³⁺/Fe²⁺ ratio **decreased**, interpreted as iron-driven ferroptotic priming). The author interpretation [^remesal2025] is that:

- Ferroptosis (regulated iron-dependent lipid-peroxidation cell death; canonical refs [^dixon2012][^stockwell2017]) presents with ↑Fe²⁺ and ↓Fe³⁺/Fe²⁺ — net pro-radical, pro-cell-death state
- FTL1-driven sub-lethal cognitive dysfunction presents with ↑Fe³⁺ and ↑Fe³⁺/Fe²⁺ — consistent with **enhanced iron sequestration** in oxidized-storage form, which depletes the labile-iron pool needed for normal mitochondrial iron-sulfur cluster biogenesis (Complexes I, II, III) and heme synthesis

Both result in mitochondrial dysfunction by different routes. Whether the same neuron can transition from one regime to the other (FTL1-sequestration → ferroptotic priming) under additional stress is **not addressed** in this paper. #gap/no-mechanism (transitional state)

## Translational implications

### Neuroferritinopathy

A rare autosomal-dominant late-onset neurodegenerative disorder caused by frameshift mutations in *FTL* exon 4. Clinical presentation: movement disorders (dystonia, chorea, parkinsonism), cognitive impairment, and characteristic brain iron deposition on MRI. The mechanistic link is loss of normal ferritin-cage iron sequestration → free-iron toxicity. Citations: [^levi2005][^kumar2016][^marchand2022] (the latter explores L-ferritin chelation as therapy).

This human genetic disease demonstrates that *pathological* alteration of FTL function is cognitively impactful. The Remesal 2025 work generalizes: even *physiological* age-associated rise in neuronal FTL1 is cognitively impactful at a sub-clinical level.

### CSF ferritin in Alzheimer's disease

Ayton et al. 2015 (*Nature Communications*) measured CSF ferritin in clinical AD cohorts and reported that CSF ferritin levels predicted [^ayton2015]:
- Cognitive performance over 7 years
- Conversion from mild cognitive impairment (MCI) to Alzheimer's disease
- Modulation by APOE genotype (CSF ferritin tracked APOE risk)

Together with neuroferritinopathy and Remesal's mouse work, this is the most direct human correlative evidence that ferritin biology tracks cognitive trajectory at the population level. None of these establish *causation* in human cognitive aging; the Remesal mouse work is the first to establish causation in any organism.

## Wiki connections

### Hallmark connections

- **[[mitochondrial-dysfunction]]** — primary. FTL1 → iron redox shift → impaired ATP synthesis. The Atp5o/c1/j, Sdhb, Ndufa10 transcriptional signature is the strongest single-protein hippocampal-aging driver in the wiki as of 2026-05-20.
- **[[loss-of-proteostasis]]** — secondary. The age-rise in neuronal ferritin protein is a proteostatic shift; whether it represents accumulated mis-handling or transcriptional drift is unresolved.
- **[[chronic-inflammation]]** — adjacent. Brain iron accumulation is broadly linked to microglial activation and neuroinflammation; Remesal's specific demonstration is **neuron-cell-autonomous** but the broader iron biology overlaps strongly.

### Pathways

No KEGG pathway dedicated to ferritin per se; FTL participates in:
- Iron transport and storage (Reactome R-HSA-917937)
- Cellular response to iron starvation / overload (regulated by IRP1/IRP2 binding to the 5'-UTR iron-responsive element in *FTL* mRNA) — background biology

### Druggability and probes

| Aspect | Status (2026-05-20) |
|---|---|
| Approved drugs targeting FTL | None |
| Advanced clinical small molecules | None |
| Structure with bound ligand | Yes (multiple crystal structures of apoferritin + ligand; PDB) |
| High-quality pocket | No |
| Med-quality pocket | Yes |
| In-aging-context tractability | AAV-shRNA + CRISPR-cKO demonstrated in mouse (Remesal 2025); no clinical-grade neuron-targeting modality exists |
| Iron-chelation as indirect modality | Deferoxamine, deferiprone (used in neuroferritinopathy) — see [^marchand2022]; not FTL1-specific |

**Aging-context druggability tier: 3** — predicted druggable (pocket exists, ligand-bound structures exist) but no high-quality probe or clinical-stage compound. The Remesal 2025 demonstration that a neuron-specific knockdown is sufficient + safe in aged mice is the **first** indication that this protein is therapeutically actionable in an aging-cognition context; this nominates FTL1 for a gene-therapy modality (AAV-shRNA delivered via intracerebral or intra-CSF route) more than a small-molecule modality.

### Cross-references

- [[remesal-2025-ftl1-brain-cognitive-aging]] — the foundational paper (verified)
- [[ferritin]] — the holoprotein page (verified); covers the 24-subunit nanocage and **serum ferritin as a clinical biomarker** (the iron-stores/inflammaging/women's-health content deferred from this subunit page)
- [[fth1]] — ferritin heavy chain partner (verified); the ferroxidase-active subunit
- [[mitochondrial-dysfunction]] — primary hallmark connection (drafted; FTL1 should be propagated into this page)
- [[brain]] — tissue page (verified; FTL1 should be propagated into the brain-iron section)
- [[neurons]] — cell type (planned)
- [[nmn]], [[nr]] — NAD-precursor cognitive-aging modalities (drafted; Remesal extends with NADH-direct)
- [[gdf11]], [[tet2]] — Villeda-lab cognitive-aging proteins (verified)
- [[alzheimers-disease]] — neuroferritinopathy + CSF-ferritin-AD links (drafted)

### Gaps

- `#gap/needs-human-replication` — primary in vivo + behavioral data are mouse-only; human relevance is by association (neuroferritinopathy + CSF-ferritin-AD) not direct demonstration
- `#gap/needs-replication` — single-laboratory (Villeda lab). Independent replication of the cognitive-rescue claim is not yet published.
- `#gap/no-mechanism` (upstream) — what drives the age-rise of neuronal *Ftl1*? Transcriptional regulator, iron-IRP-IRE post-transcriptional control, microglial→neuronal iron handoff, all plausible.
- `#gap/needs-sex-stratification` — electrophysiology males-only; behavioral cohorts not sex-broken-out in figure legends
- `#gap/dose-response-unclear` — NADH rescue tested at one dose (100 mg/kg IP) and one short duration (9 days); effect on aged baseline (no FTL1 OE) not tested
- `#gap/not-in-genage` — FTL not curated in GenAge HAGR as of 2026-05-20; aging-gene nomination warranted

## Footnotes

[^remesal2025]: [[remesal-2025-ftl1-brain-cognitive-aging]] · in-vivo + in-vitro · Nature Aging 5(10):1957-1969 · DOI 10.1038/s43587-025-00940-z · model: C57BL/6J mice young (2–3 mo) + aged (18–24 mo); primary E17 hippocampal neurons · all n's and P-values listed inline above · published as Letter (short format); randomized + blinded per Methods · OA CC-BY 4.0 · verified end-to-end PDF read

[^wu2023]: doi:10.1126/sciadv.eade7622 · Wu Y et al. · *Sci Adv* 2023 · DNAzyme Fe²⁺/Fe³⁺ sensor methodology; Fe³⁺ enriched over Fe²⁺ in AD brain (decreased Fe³⁺/Fe²⁺ ratio reported) · model: Alzheimer's mouse brain · cited by Remesal 2025 for the contrast in iron-redox direction (sub-lethal FTL1 dysfunction vs ferroptotic priming) · not independently re-read

[^dixon2012]: doi:10.1016/j.cell.2012.03.042 · Dixon SJ et al. · *Cell* 2012;149(5):1060-1072 · ferroptosis-defining paper · in-vitro · model: human cancer cell lines · not independently re-read

[^stockwell2017]: doi:10.1016/j.cell.2017.09.021 · Stockwell BR et al. · *Cell* 2017;171(2):273-285 · ferroptosis review · not independently re-read

[^ayton2015]: doi:10.1038/ncomms7760 · Ayton S et al. · *Nat Commun* 2015;6:6760 · observational · CSF ferritin predicted AD outcomes over 7 yr; regulated by APOE · model: human AD cohort · not independently re-read

[^levi2005]: doi:10.1016/j.beha.2004.08.022 · Levi S et al. · *Best Pract Res Clin Haematol* 2005;18(2):265-276 · neuroferritinopathy review · not_oa likely · not independently re-read

[^kumar2016]: doi:10.7916/D8KS6PR1 · Kumar N et al. · *Tremor Other Hyperkinet Mov* 2016;6:355 · neuroferritinopathy clinical review · not independently re-read

[^marchand2022]: doi:10.1002/mds.29162 · Marchand A et al. · *Mov Disord* 2022;37(9):1948-1952 · neuroferritinopathy iron-chelation case report · not independently re-read
