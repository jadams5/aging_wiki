---
type: study
doi: 10.1111/acel.70494
pmid: 42103698
pmc: PMC13156074
title: "Exceptional Longevity Modifying Allele APOE2 Promotes DNA Signaling Pathways Resisting Cellular Senescence in Human Neurons"
authors: [Gerónimo-Olvera C, Scheeler SM, Galicia Aguirre C, Vega-Hormazabal G, Garcia D, Wu L, Murad N, Schneider K, Wilson KA, Markov NT, Song S, Simons J, Gerencser AA, Parlan E, Mooney SD, Verdin E, Campisi J, Tracy TE, Furman D, Melov S, Ellerby LM]
year: 2026
journal: Aging Cell
volume: 25
issue: 5
pages: e70494
study-design: in-vitro
publication-type: research-article
organism: human-ipsc + mus-musculus
n-subjects: "iPSC-derived neurons across 3 isogenic backgrounds (ε2/ε2, ε3/ε3, ε4/ε4); 3–6 biological replicates per genotype across 2–5 differentiations; mouse cohort 3–4/genotype at 16 mo"
intervention: ["[[apoe]]"]
hallmarks-tested: ["[[genomic-instability]]", "[[cellular-senescence]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [apoe2-reduces-dna-damage, apoe2-enhances-dna-repair, apoe2-resists-senescence, apoe4-elevated-rrna, apoe2-preserved-lamin-h3k9me3-hmgb1]
local-pdf: null
verified: true
verified-date: 2026-05-20
verified-by: claude
verified-scope: "PMC HTML full text (PMC13156074) verified as canonical source per user authorization (CC-BY 4.0 gold OA; journal PDF not locally archived — paper post-dates a local paper archive OpenAlex snapshot). All quantitative claims cross-checked against PMC Methods, Results, Figure legends, and Supplementary references. Supersession check skipped (paper published 2026-05-08; no meta-analyses possible at 12 days post-publication)."
---

# Gerónimo-Olvera et al. 2026 — APOE2 promotes DNA repair signaling and resists cellular senescence in human neurons

**Aging Cell**, vol. 25 issue 5, article e70494 (online 8 May 2026; received 7 Jul 2025; accepted 10 Apr 2026). doi:[10.1111/acel.70494](https://doi.org/10.1111/acel.70494) · PMID:42103698 · PMC13156074 · CC-BY 4.0 (gold OA). Corresponding author: Lisa M. Ellerby (Buck Institute for Research on Aging / USC Leonard Davis School of Gerontology). Senior collaborators: Judith Campisi, Eric Verdin, Simon Melov, David Furman, Tara E. Tracy.

## Question

How does the **APOE2** longevity allele protect neurons against aging beyond its known role in lipid metabolism? In particular, do APOE alleles differentially modulate DNA damage, DNA repair capacity, and cellular senescence in human neurons?

## Models

### Isogenic human iPSCs — GABAergic inhibitory neurons

- ε2/ε2 (Fujifilm R1169, Donor 01434) vs ε4/ε4 (Fujifilm R1168, Donor 01434) — both female
- iCell Neural Base Media 1; 14+ days maturation; 2–5 batches per experiment

### Isogenic human iPSCs — Ngn2-induced glutamatergic excitatory neurons

- CRISPR/Cas9 isogenic NCRM1 male background; Ngn2 transgene at AAVS1 safe-harbor locus
- All three genotypes (ε2/ε2, ε3/ε3, ε4/ε4); 28-day Ngn2 induction
- Stress paradigm: 10 Gy irradiation or 200 nM doxorubicin on day 18, analyzed day 28
- Maturation confirmed by PSD95, VGLUT1, MAP2

### Isogenic neural stem cells (NSCs)

- iPSC-derived (ε2 / ε3 / ε4); SMAD inhibition (SB431542 10 μM + LDN-193189 1 μM); 5 Gy IR for early-DDR kinetics

### Human APOE-targeted replacement mice (in-vivo confirmation)

- B6.129P2-*Apoe*<tm1(APOE\*2/3/4)Mae>N9 (Taconic 1547/1548/1549); female; 16 months at analysis; hippocampus / dentate gyrus IHC; n=3–4/genotype
- One-way ANOVA + Tukey's HSD; adjusted p<0.05

## Key findings

### DNA damage — APOE4 > APOE3 ≥ APOE2 across systems

| Marker | System | Comparison | p (vs ε2) |
|---|---|---|---|
| pγH2AX puncta | GABAergic, basal | ε4 > ε2 | p<0.01 (n=3) |
| % tail DNA + olive tail moment (alkaline comet) | GABAergic, basal | ε4 > ε2 | combined >1,000 cells across 3 reps |
| pγH2AX foci per nucleus | Glutamatergic, post-10 Gy | ε4 > ε2 | p<0.0001 (n=6) |
| pγH2AX foci size | Glutamatergic, 200 nM doxorubicin | ε4 > ε2 ≈ ε3 | p<0.05–0.0001 (n=3) |
| 53BP1 foci size | Glutamatergic, irradiation | ε4 > ε2, ε3 | p<0.0001 (n=6) |
| p-ATM foci size | Glutamatergic, irradiation | ε2 < ε3, ε4 | p<0.05–0.001 (n=6) |

NSCs after 5 Gy IR: ε2 resolved γH2AX / p-ATM / 53BP1 foci faster than ε4 (prolonged DDR activation in ε4; p<0.05, n=3) — suggests the DDR phenotype is established at the neural progenitor stage, not strictly differentiation-induced.

**Rescue experiment:** Recombinant APOE2 protein (50 ng/mL, applied from day 11 twice-weekly) applied to APOE4 glutamatergic neurons before/after irradiation reduced pγH2AX foci number and foci size, and 53BP1 foci number and foci size (p<0.05–0.0001; n=3) — indicating that extracellular APOE2 is sufficient to partially restore the DDR phenotype in an APOE4 background.

### Senescence markers — APOE4 acquires senescence features after stress; APOE2 resists

| Marker | System | Direction | Stat |
|---|---|---|---|
| p16 (CDKN2A) | Glutamatergic post-IR | ε4 > ε2, ε3 | p<0.0001 (n=4) |
| CRYAB (αB-crystallin SHSP) | Basal | ε2 < ε4 | p<0.05 (n=4) |
| CRYAB | Post-IR | ε4 > ε2, ε3 | p<0.05 (n=4) |
| Lamin A/C (basal) | Glutamatergic | ε2 > ε3, ε4 | p<0.05 (n=3) |
| Lamin A/C (post-IR) | Glutamatergic | ε3/ε4 lose Lamin A/C; ε2 preserved | p<0.05 (n=3) |
| H3K9me3 (heterochromatin) | Glutamatergic, basal | ε4 > ε2, ε3 |  |
| H3K9me3 (post-IR) | Glutamatergic | ε3/ε4 decrease; ε2 maintains |  |
| Nucleolar size (Nucleolin IF) | Glutamatergic basal + IR | ε2 ≈ ε3 < ε4 | p<0.01–0.001 (n=4) |
| Nuclear size (post-IR) | Glutamatergic | all increase; ε2 < ε4 | p<0.05 (n=3) |

The "smaller nucleoli + preserved lamin / H3K9me3" phenotype echoes long-established longevity correlates: small nucleoli predict longevity in *C. elegans* and in laminopathy models, and lamin / heterochromatin loss is a canonical Hutchinson-Gilford progeria signature.

### In-vivo recapitulation — aged APOE2 mouse hippocampus matches in-vitro signature

In dentate gyrus of 16-month female human-APOE targeted-replacement mice (n=3–4/genotype; one-way ANOVA + Tukey's HSD):

- **Nucleolar size:** ε2 ≈ ε3 < ε4 (p<0.05–0.0001 across pairwise comparisons)
- **Lamin A/C:** ε2 > ε3, ε4 (p<0.05–0.0001 across pairwise comparisons)
- **H3K9me3:** ε2 > ε3, ε4 (p<0.05–0.0001 across pairwise comparisons)
- **Nuclear HMGB1:** ε2 > ε3, ε4 (p<0.05–0.0001) — HMGB1 nuclear retention is a non-senescence signature (HMGB1 release into the cytosol is a SASP hallmark; nuclear retention indicates the cells have NOT undergone senescence-associated nuclear-to-cytoplasm translocation)

The mouse data confirm that the in-vitro differential nuclear / nucleolar / chromatin phenotype is preserved in vivo in aged brain tissue.

### Transcriptome (bulk RNA-seq, GABAergic)

- 1,403 DEGs ε2 vs ε4 (adj. p<0.05, DESeq2)
- ε2-enriched pathways: **DNA damage response and repair, genomic stability** (GO; FDR<0.05)
- ε4-enriched pathways: synaptic activity, axonogenesis, ion channel function
- ε2 DNA-repair hub genes upregulated: *BRCA1*, *CDK1*, *PLK1*, *TOP2A*, *BLM*, *RAD9B*
- ε2 top upregulated: *DSCAM* (neuronal delamination/locomotion), *CSMD2* (dendrite/synapse maintenance)
- ε2 top downregulated (i.e. ε4 elevated): *NNAT* (Neuronatin; AD-associated; spine loss + ER calcium overload), *CNTN4* (APP function, AD pathology)
- "Hallmarks of Aging" senescence gene sets were enriched in ε4 relative to ε2 (RNA-seq from publicly available aged-mouse APOE-TR cohort, ~18 mo)

### Single-cell RNA-seq (GABAergic; GEO GSE143276)

- 7,328 cells post-QC; Seurat v4.3.0 → 7 clusters
- ε4-enriched clusters: 1, 3, 4
- ε2-enriched clusters: 0, 2, 5
- Cluster 0 (ε2) up: *VGF* (downregulated in AD; "master regulator" of AD networks); enriched mitotic spindle + UV-DDR pathways
- Cluster 1 (ε4) up: *VCAN*, *TXNIP*, *VSNL1* (AD-elevated in hippocampus/entorhinal cortex)
- Cluster 2 (ε2) up: *KCNMB2*, *IGSF21* (stabilizes inhibitory synapses)
- Pathway distribution: inflammatory signaling 24%, DNA repair 19%

### Repetitive-element transcription (RepEnrich2, GABAergic)

- ε4 neurons: **elevated rRNA**, reduced SINE/LINE/LTR vs ε2 (PCA shows clear separation; p<0.05 DESeq2)
- Elevated rRNA expression is mechanistically linked to nucleolar stress + senescence — consistent with the enlarged nucleoli observed in ε4 cells and the proposal that nucleolar hypertrophy drives senescence-associated rDNA instability.

### Neuronal motility + morphology (GABAergic, 21-day brightfield imaging)

- ε4 neurons: **decreased neurite complexity** at 300, 450, 600 h (p<0.05; n=3)
- Cell-body tracking (n=60/genotype): ε4 higher VCL (curvilinear velocity, p<0.01) but lower VAP (average path velocity, p<0.01) and higher wobble amplitude (p<0.0001) — ε4 cells move more but less efficiently / less directionally.

## Authors' headline conclusion (verbatim)

> "Together, these results suggest that APOE genotype shapes neuronal aging through differential regulation of DNA damage responses and nuclear homeostasis."

> "APOE2 is associated with enhanced DNA repair capacity, preserved nuclear architecture, and restrained nucleolar activity, whereas APOE4 is linked to persistent DNA damage signaling, chromatin instability, and acquisition of senescence-associated features."

## Why it matters

1. **First human-isogenic functional study of ε2/ε2 neurons.** Until now, the ε2 longevity-allele literature was dominated by population genetics (Schächter 1994, Farrer 1997) and a single APOE3-Christchurch case report (Arboleda-Velasquez 2019). The rarity of homozygous ε2/ε2 individuals (~1% of European populations) had made primary functional studies almost impossible. Isogenic iPSC engineering circumvents the allele-frequency problem.
2. **Mechanistically promotes APOE from lipid-handler to genome-maintenance modifier.** Lipid clearance alone does not explain the longevity effect; this paper provides direct human-neuronal evidence that APOE allelic identity modulates DNA repair gene expression, DDR kinetics, and senescence acquisition.
3. **Extracellular-APOE2 protein rescue** (recombinant APOE2 partially restores the DDR phenotype in APOE4 neurons) suggests a *non-cell-autonomous* protective mechanism that could be drug-tractable — e.g., recombinant APOE2 protein, peptidomimetic mimics, or biased agonists.
4. **Aligns several disparate longevity signals.** Small nucleoli (C. elegans longevity), preserved nuclear lamin (anti-progeroid), retained H3K9me3 (heterochromatin maintenance — see [[loss-of-heterochromatin-hypothesis]] if seeded), reduced rRNA transcription (nucleolar restraint), nuclear HMGB1 retention (anti-SASP) all co-occur in APOE2 — and were independently identified as longevity correlates across organisms.

## Limitations

- ε2/ε2 GABAergic iPSC line is from a single female donor (01434); replicated across 2–5 differentiations but n=1 donor for the GABAergic arm. Ngn2 glutamatergic arm uses isogenic NCRM1 male background but again single donor source. **#gap/needs-replication** — multi-donor isogenic panels needed.
- Mouse arm uses commercially available targeted-replacement mice on C57BL/6 background; female only; n=3–4/genotype is modest for IHC quantification.
- Recombinant APOE2 rescue used on APOE4 neurons but not tested in vivo.
- Causal directionality of the DNA-repair phenotype vs senescence acquisition is correlative; whether DNA-repair upregulation is the upstream cause or downstream consequence of preserved nuclear architecture is not resolved.
- Tau-APOE interaction (the Shi 2017 axis) is not directly addressed in this paper.
- Mouse APOE-TR brains were analyzed at 16 months — middle-aged; the trajectory through 24–36 months (lifespan-relevant) is not characterized.

## Wiki integration

- **[[apoe]]** — adds the "Neuronal DNA repair and senescence resistance" mechanism; resolves prior **#gap/unsourced** flag on ε2/ε2 functional studies and partially resolves **#gap/needs-human-replication** for tau-ApoE / DNA-damage axis (human iPSC neuronal data are now available, though tau itself was not directly assayed)
- **[[alzheimers-disease]]** — adds APOE2-protective neuronal mechanism in genetic-risk + cellular-senescence sections
- **[[cellular-senescence]]** — propagation candidate: neuronal senescence is one of the rare cell-type-specific senescence mechanisms; APOE genotype as modifier is novel
- **[[genomic-instability]]** — propagation candidate: APOE as a modifier of neuronal DNA damage / repair capacity

## Data deposition

- NCBI GEO: **GSE143276** (single-cell RNA-seq raw and processed data)
- Aging Cell article includes Tables S1 (bulk RNA-seq DEGs + GO), S2 (scRNA cluster markers/DEGs), S3 (repetitive elements DEGs) and Figs S1–S8.

## Funding

NIA 1R01AG061879, 5P01AG066591, T32 AG000266; Paul F. Glenn Center for Biology of Aging (postdoctoral fellowship); Hevolution Foundation HF-PART-23-1422047; CatalystX (Alex & Bob Griswold); Valley Foundation Fellowship.
