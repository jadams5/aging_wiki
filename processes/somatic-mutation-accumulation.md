---
type: process
aliases: [somatic mosaicism, somatic mutational burden, somatic mutagenesis]
key-proteins: ["[[dna-polε]]", "[[dna-polδ]]", "[[pcna]]", "[[p53]]"]
pathways: ["[[dna-damage-response]]", "[[base-excision-repair]]", "[[mismatch-repair]]", "[[nucleotide-excision-repair]]", "[[homologous-recombination]]", "[[non-homologous-end-joining]]"]
hallmarks: ["[[genomic-instability]]", "[[cellular-senescence]]", "[[chronic-inflammation]]"]
selective-variants: []   # CHIP is a phenotype (clonal-expansion readout), not a sub-process variant — see body + causes:
druggability-tier: 4
caused-by: ["[[genomic-instability]]"]
causes: ["[[cellular-senescence]]", "[[chronic-inflammation]]", "[[phenotypes/clonal-hematopoiesis]]"]
literature-checked-through: 2026-05-26
verified: true
verified-date: 2026-05-26
verified-by: claude
verified-scope: "Cagan 2022 verified end-to-end against local PDF (all 28 pages). Martincorena 2015 verified end-to-end against local PMC PDF (newly downloaded). Martincorena 2018 verified end-to-end against local PMC PDF (newly downloaded). Albertson 2009 verified end-to-end against local PMC PDF (newly downloaded). Lodato 2018 not re-read — cross-checked against verified neurons.md (verified: true 2026-05-06, verified against PMC5831169); neuronal rates match. Moore 2020 not_oa — claims in tissue-rate table kept with Moore 2020 citation; specific quantitative claims (~29 base substitutions/year) unconfirmed against full text. Coorens 2025 integrated from abstract only (local PDF not available); rate ~28 SNVs/gastric gland/year confirmed from abstract."
---

# Somatic Mutation Accumulation

Every somatic cell accrues mutations throughout life from replication errors, endogenous mutagens, and declining DNA repair fidelity. Because each mutation is confined to the clonal descendants of the cell in which it arose, aged tissues become a **mosaic** of thousands of distinct genomes — the quantitative substrate of the [[hallmarks/genomic-instability|genomic instability]] hallmark. This page covers the empirical phenomenon: measured rates, the cross-species constraint, detection methods, and mechanisms. **The causal question — whether accumulated mutations drive aging vs. merely track it — is treated as a separate hypothesis; see [[hypotheses/somatic-mutation-theory-of-aging]]**.

## Key distinctions

Three related quantities are often conflated:

| Term | Definition | Example |
|---|---|---|
| **Mutation rate** | Somatic mutations acquired per cell per year (or per division) | ~47 substitutions/genome/year in human intestinal crypts (Cagan 2022) |
| **Mutation burden** | Total somatic SNVs per cell at a given age | ~2,000–3,000 substitutions/genome in a 60–70-year-old human colon epithelial cell |
| **Clonal expansion** | Fraction of a tissue occupied by a single mutant lineage | CHIP clone at 2% VAF = ~4% of blood HSCs |

A cell can carry a high burden without detectable clonal expansion; a clone can expand from a single mutation conferring even weak selective advantage. These three quantities are measured by different methods and have different implications for tissue function and disease risk.

## Why bulk sequencing misses nearly all somatic variants

In polyclonal tissue, any unique somatic mutation sits at a variant allele frequency (VAF) of roughly 1/(number of independent cells), which in most tissues is far below the 1–5% limit of detection of standard bulk whole-genome sequencing. Bulk WGS detects variants near 50% VAF (heterozygous germline) or near 100% VAF (homozygous germline), plus any clonally expanded somatic variants that exceed the detection threshold. The overwhelming majority of per-cell somatic mutations — present in one cell or a tiny clone — are invisible.

This is why accurate somatic mutation burden measurement requires methods that physically isolate or tag single cells before sequencing:

- **Single-cell WGS** — isolate a single cell, amplify its genome, sequence; detects all variants but amplification artifacts are a major noise source
- **Clonal organoids / intestinal crypts** — culture clonal outgrowths from single cells; clonal expansion amplifies signal above sequencing noise; the Cagan 2022 multi-species atlas used this approach [^cagan2022]
- **Microdissection** — isolate micro-anatomical units (crypts, glands) that are already clonal in architecture; used by Martincorena et al. 2015/2018 [^martincorena2015] [^martincorena2018]
- **Error-corrected / duplex sequencing** — double-stranded molecular barcode scheme that eliminates PCR and sequencing errors; enables detection of variants at VAF ~10⁻⁷ in bulk tissue

For a detailed treatment of the error-corrected approach, see [[methods/duplex-sequencing]].

## Measured rates across tissues and species

### Cross-species rate constraint (Cagan 2022)

The most comprehensive inter-species dataset to date is the Cagan et al. 2022 *Nature* study: WGS of 208 intestinal crypts from 56 individuals spanning **16 mammalian species** — humans, dogs, cats, horses, ferrets, giraffes, lions, tigers, black-and-white colobus monkeys, harbour porpoises, and more — each covering a range of life stages and ages [^cagan2022].

Key findings:

- Somatic mutation rate per year **strongly inversely correlates with species lifespan**: log-log allometric LME regression (FVE = 0.85, P = 1×10⁻⁶; slope = −0.86, 95% CI: −1.08, −0.65). Short-lived species (mice, ~2.5 yr 80th-percentile lifespan) accumulate ~796 substitutions/genome/year; long-lived species (humans, ~83.7 yr) accumulate ~47 substitutions/genome/year (Table 1); other mammals span the intervening range
- **Despite a ~30× lifespan range (Table 1: 2.75–83.67 yr, fold variation 30.4) and ~40,000× body-mass range (Table 1: 20.5 g–800 kg, fold variation 39,024), end-of-lifespan mutation burden varies only ~3×** (Table 1: 1,828–5,378 substitutions/genome, fold variation 2.94), not the 30× divergence that lifespan alone would predict
- Mutational signatures observed (COSMIC SBS1 + SBS5, the "clock-like" age-associated signatures) are conserved across species, suggesting shared endogenous mechanisms — deamination of methylcytosine (SBS1) and an unknown replication/repair process (SBS5)
- The observation is consistent with mutation accumulation being subject to evolutionary constraint: maximum lifespan has co-evolved with minimum mutation rate across mammalian lineages

This result has been cited as evidence that somatic mutation burden at end-of-life is approximately constant across mammals — a finding compatible with a causal role for mutations in limiting lifespan, though not proof of causation (see [[hypotheses/somatic-mutation-theory-of-aging]]).

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (study is directly in human tissue) |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | yes — multiple independent studies across tissues |

### Per-tissue mutation rate estimates in humans

Rates vary substantially by tissue, reflecting differences in cell division frequency, intrinsic repair capacity, and exogenous mutagen exposure:

| Tissue | Approximate rate | Notes |
|---|---|---|
| Intestinal crypt epithelium | ~47 substitutions/genome/year (human); ~796/yr (mouse) | Cagan 2022 [^cagan2022], Table 1; WGS of microdissected crypts; human data originally from Lee-Six 2019 re-analysed by Cagan pipeline |
| Normal sun-exposed skin epidermis | ≥2–6 mutations/Mb/cell (donors aged 55–73); UV-SBS7 dominates | Martincorena 2015 [^martincorena2015]; deep targeted sequencing (74 cancer genes) of 234 microdissected eyelid epidermis patches; ~25% of cells carry driver mutations; rate much higher than intestine because UV mutagenesis dominates |
| Normal oesophageal epithelium | tens to hundreds of driver-mutant clones per cm² by age 75 (~120 NOTCH1 mutations/cm² on average) | Martincorena 2018 [^martincorena2018]; widespread NOTCH1/TP53 driver mutations in histologically normal tissue |
| Normal gastric epithelium | ~28 SNVs/gastric gland/year | Coorens 2025 [^coorens2025]; WGS of 238 microdissections, 30 individuals; extends Sanger normal-tissue programme to stomach |
| Normal endometrial epithelium | ~29 base substitutions/year | Moore 2020 [^moore2020]; WGS of microdissected glands |
| Prefrontal cortex neurons | ~23 SNVs/neuron/year | Lodato 2018 [^lodato2018]; single-cell WGS; see [[cell-types/neurons]] for full detail |
| Hippocampal dentate gyrus neurons | ~40 SNVs/neuron/year | Lodato 2018 [^lodato2018]; higher than PFC — mechanism unclear |

The neuronal rates are notable because neurons are post-mitotic: mutations in non-dividing cells derive from replication-independent mechanisms (endogenous mutagens, NHEJ-repaired DSBs, transcription-associated mutagenesis), not from polymerase fidelity during S phase. For full neuronal detail, see [[cell-types/neurons]].

### Positive selection in histologically normal aged tissue

A striking finding from the Sanger Institute's normal-tissue programme is that aged tissues harbor not just passively-accumulating neutral mutations but also **clones bearing canonical cancer driver mutations expanding under positive selection** — in apparently normal, non-cancerous tissue:

- **Normal sun-exposed epidermis**: ~25% of the skin surface in middle-aged adults is colonized by clones bearing mutations in NOTCH1, NOTCH2, FAT1, TP53, and other driver genes; individual clones range from a few cells to several mm² in area; mutant clones are selected for a competitive growth advantage over wild-type neighbors, not because they are transforming to cancer [^martincorena2015]
- **Normal oesophagus**: by middle-to-old age, normal-appearing oesophageal epithelium contains on average ~120 different NOTCH1 mutations per cm² (tens to hundreds of driver-mutant clones per cm²); in middle-aged and elderly donors NOTCH1 mutations affect 12–80% of cells; more NOTCH1 mutations in normal oesophagus than in oesophageal cancer itself; TP53 (2–37% of cells in elderly donors) and PIK3CA mutations also prevalent [^martincorena2018]
- **Normal endometrium**: clones with KRAS, PTEN, PIK3CA and other driver mutations are pervasive in histologically normal uteri from reproductive-age women onward; burden and driver frequency increase with age [^moore2020]

This pervasive clonal dynamics in normal tissue reframes the cancer-aging relationship: cancer is not the first emergence of mutant cells, but the acquisition of additional mutations (or epigenetic events) enabling invasion and proliferation beyond the tissue boundary in an already heavily mutated field. #gap/no-mechanism — the mechanisms governing whether an expanded driver-mutant clone remains benign vs. acquires malignant properties are not fully understood.

## Mechanisms of somatic mutation accumulation

### 1. Replication errors

The dominant source of somatic mutations in highly proliferative tissues is polymerase errors during DNA replication. The intrinsic error rate of replicative polymerases Pol-ε (leading strand) and Pol-δ (lagging strand) is ~10⁻⁷ per base per division before proofreading; their combined 3'→5' exonuclease proofreading activity reduces this to ~10⁻⁹ per base per division. Mouse genetic studies using knockin proofreading-null alleles of Pol-ε (*Pole^exo−*) and Pol-δ (*Pold1^exo−*) demonstrate that loss of either proofreading activity produces a **discrete mutator phenotype** with markedly elevated, tissue-specific cancer incidence — Pol-ε loss drives intestinal adenocarcinomas and histiocytic sarcomas; Pol-δ loss drives thymic lymphomas and skin squamous cell neoplasms. Pols-ε and -δ proofreading act in **parallel pathways** (combined double-mutant mutation rate is not multiplicative), each rate-limiting for its respective tissue-specific cancer phenotype [^albertson2009]. Post-replication mismatch repair (MMR; see [[pathways/mismatch-repair]]) provides a second correction layer, reducing the final germline rate to ~10⁻¹⁰ per base per generation.

Replication errors accumulate as a function of the number of cell divisions; tissues with high turnover (intestine, haematopoiesis, epidermis) therefore accumulate mutations faster in absolute terms than quiescent tissues — but post-mitotic neurons show rates comparable to or exceeding dividing cells on a per-year basis, implicating replication-independent mechanisms (see below).

### 2. Endogenous mutagens and the mutational signature framework

Somatic mutations carry chemical "signatures" reflecting the mutagenic process that caused them. The COSMIC SBS (single-base substitution) classification catalogues >60 signatures visible in cancer genomes; many are equally detectable in normal aged tissues.

Key aging-relevant signatures:

- **SBS1** — C→T transitions at CpG dinucleotides, caused by spontaneous hydrolytic deamination of 5-methylcytosine; accumulates at a rate proportional to chronological time (i.e., per year, not per cell division); present at baseline in nearly all human tissues
- **SBS5** — flat "clock-like" signature of uncertain aetiology, possibly endogenous damage and repair; conserved across mammals in Cagan 2022 (labelled "SBSB", cosine similarity 0.89 to COSMIC SBS5) [^cagan2022]; contributes alongside SBS1 to the ~47 substitutions/genome/year rate in human intestinal crypts
- **SBS7a/b** — UV-induced C→T at dipyrimidines (CC→TT characteristic); dominates in sun-exposed skin; drives the dramatically elevated burden in Martincorena 2015 [^martincorena2015]
- **SBS2/13** — APOBEC cytidine deaminase activity; episodic/strand-clustered; elevated in some cancers and increasingly detected in aged normal tissue

For the methods underlying mutational signature analysis, see [[methods/duplex-sequencing]].

### 3. Decline of DNA repair with age

Multiple components of the DNA damage response decline in aged cells:

- Base excision repair (BER; see [[pathways/base-excision-repair]]) enzyme levels and activity decrease in aged rodent and human tissues
- Nucleotide excision repair (NER; see [[pathways/nucleotide-excision-repair]]) shows reduced capacity in aged human fibroblasts and lymphocytes
- Non-homologous end joining (NHEJ; see [[pathways/non-homologous-end-joining]]) fidelity may decline; aged cells show slower DSB resolution
- Homologous recombination (HR; see [[pathways/homologous-recombination]]) is restricted to S/G2 phase and unavailable in post-mitotic cells

#gap/no-mechanism — whether the rate of increase in somatic mutations per year *accelerates* with age (as repair declines) or remains approximately linear is tissue-dependent and not fully resolved. Cagan 2022 found approximately linear accumulation in intestinal crypts [^cagan2022]; Lodato 2018 found approximately linear accumulation in neurons [^lodato2018]; but some small-scale studies in other tissues suggest possible non-linearity in advanced age #gap/needs-replication.

## Relationship to genomic-instability hallmark

This page is the **atomic process page** for the empirical phenomenon of somatic mutation accumulation: the rates, detection methods, mutational mechanisms, and tissue atlases are here. The [[hallmarks/genomic-instability]] hallmark is the **navigational overlay** — it aggregates somatic mutation accumulation alongside other DNA damage modalities (DSBs, chromosomal instability, telomere erosion, mtDNA damage) and connects them to downstream hallmarks. When a claim is specifically about measured mutation rates, burden numbers, or detection methodology, it belongs here; when the claim is about the hallmark as a whole (e.g., its relationship to senescence or inflammation), it belongs on the genomic-instability page.

**Aliases note:** The `[[hallmarks/genomic-instability]]` page currently carries `somatic mutation accumulation` as an alias. This page uses `aliases: [somatic mosaicism, somatic mutational burden, somatic mutagenesis]` to avoid collision; the main agent should resolve the alias overlap during propagation.

## Relationship to CHIP (clonal hematopoiesis)

CHIP ([[phenotypes/clonal-hematopoiesis]]) is the clinically-visible, clonally-expanded form of somatic mutation accumulation in blood. When a haematopoietic stem cell acquires a driver mutation (most commonly in DNMT3A, TET2, or ASXL1) and expands to >2% VAF, it is detectable by standard clinical sequencing. CHIP is therefore the clonal-expansion readout of somatic mosaicism in the haematopoietic compartment — the same underlying biology (mutation accumulation + positive selection) expressed at a scale large enough to be detected in a blood draw. CHIP epidemiology, hazard ratios for cardiovascular disease, and the companion biomarker page are covered on [[phenotypes/clonal-hematopoiesis]] and [[biomarkers/chip-clonal-hematopoiesis-biomarker]]; they are not duplicated here. For context, see also the [[biomarkers/chip-clonal-hematopoiesis-biomarker]] page on the detection platform and clinical threshold conventions.

## Relationship to downstream hallmarks

Somatic mutation accumulation is **upstream** of several other hallmarks and pathological processes:

- **[[cellular-senescence]]** — p53/p21 activation by DNA damage drives growth arrest; persistent high-damage burden in a cell drives the senescence programme (see [[processes/replicative-senescence]])
- **[[chronic-inflammation]]** — CHIP clones with TET2 or DNMT3A mutations are hyperinflammatory; clonally expanded cells secrete elevated SASP-like cytokines (IL-6, IL-18) contributing to inflammaging; see [[processes/sasp]]
- **Cancer** — while the causal link to aging phenotypes beyond cancer is contested (see below), somatic mutations are the established causal substrate of cancer initiation; the pervasive driver-mutant clones in normal aged tissue described by Martincorena 2015/2018 [^martincorena2015] [^martincorena2018] represent pre-cancerous fields
- **[[cell-types/neurons]]** — elevated somatic mutation burden in aged neurons correlates with neurodegeneration; whether mutations are causal vs. a consequence of oxidative stress associated with neurodegeneration is unclear [^lodato2018]

## Limitations and knowledge gaps

**Causal vs. correlational status.** The fundamental open question is whether somatic mutation burden causally drives aging phenotypes (beyond cancer) or accumulates as a bystander/consequence of the same processes that cause aging. The Cagan 2022 cross-species constraint is consistent with a causal contribution, but correlation with maximum lifespan does not establish causality [^cagan2022]. Reducing somatic mutation rate specifically (rather than the broader DNA damage load) in a controlled lifespan experiment has **not** been demonstrated in mammals. #gap/needs-replication

**Incomplete tissue atlas.** Most precise mutation burden data come from tissues amenable to clonal organoid culture or microdissection (intestine, oesophagus, endometrium, skin). Rates in cardiac muscle, skeletal muscle, adipose, and many CNS regions are poorly characterized. #gap/needs-replication

**Clonal expansion dynamics.** Why some driver-mutant clones expand to dominate tissue while others remain small is not understood. In normal oesophagus, NOTCH1 mutations are more common than in oesophageal cancer — implying the same mutation is context-dependent in its fitness effect. The rules governing tissue-level clonal competition are largely unknown. #gap/no-mechanism

**Functional consequences in non-dividing cells.** In neurons and cardiomyocytes, most somatic mutations will not be transcribed (residing in non-expressed genomic regions). Whether the subset of mutations in active genes or regulatory elements is sufficient to impair cell function at physiological burdens (~2,000–3,000 SNVs/neuron in a 75-year-old brain) is untested experimentally. #gap/no-mechanism

**Interaction with epigenetic aging.** Somatic mutations and epigenetic drift both accumulate with age; whether they co-regulate (mutations disrupting epigenetic regulators → accelerated drift; epigenetic dysregulation → transcription-associated mutagenesis) or accumulate largely independently is an active area. #gap/no-mechanism

**Causal link to NMR extreme longevity.** The naked mole rat (Heterocephalus glaber) has an exceptionally low somatic mutation rate relative to its body mass, but whether this is mechanistically linked to its ~31-year lifespan is inferential only. See [[model-organisms/heterocephalus-glaber]] for detail.

## Recency literature note

A date-filtered PubMed search (2022–2026, terms: "somatic mutation accumulation aging," "somatic mosaicism aging WGS normal tissue") was conducted on 2026-05-26. High-priority hits triage:

- Ren 2022 (*Frontiers in Aging*, PMID 36213345) — review of age-related somatic mutation burden using single-cell sequencing; consistent with Cagan 2022 framing; discretionary
- Bizzotto 2022 (*Nature Reviews Neuroscience*, PMID 35322263) — review of somatic mosaicism as lineage tracer in brain; supports Lodato 2018 neuronal rates; discretionary
- Coorens 2025 (*Nature*, PMID 40108450) — normal gastric epithelium; WGS of 238 microdissections, 30 individuals; ~28 SNVs/gastric gland/year; extends Sanger normal-tissue programme to stomach. **Integrated into tissue rate table above.**
- Cagan 2025 / Coorens 2025 (*Nature*, PMID 40044850) — mouse haematopoietic stem/progenitor cell dynamics; ~45 somatic mutations/year in mouse HSPCs, ~threefold higher than human progenitors; extends the cross-species rate-vs-lifespan picture to the blood compartment; consistent with Cagan 2022 intestinal crypt framing
- No meta-analyses or RCTs exist for this process page (pre-clinical/observational domain only)

No recent high-priority hit contradicts the Cagan 2022 cross-species framing or the Martincorena normal-tissue positive-selection finding.

## Footnotes

[^cagan2022]: [[studies/cagan-2022-somatic-mutation-rates-mammals]] · doi:10.1038/s41586-022-04618-z · PMID 35418684 · n=208 crypts, 56 individuals, 16 species · cross-species comparative WGS · LME regression FVE=0.85, P=1×10⁻⁶ (lifespan correlation); slope=−0.86 (95% CI: −1.08, −0.65) · model: multi-mammalian intestinal crypts · local PDF available

[^coorens2025]: doi:10.1038/s41586-025-08729-z · PMID 40108450 · Coorens et al. · *Nature* 2025 · n=238 microdissections, 30 individuals (18 with gastric cancer) · observational WGS · model: human normal gastric epithelium · ~28 SNVs/gastric gland/year · extends Sanger normal-tissue programme to stomach

[^martincorena2015]: [[studies/martincorena-2015-somatic-mutations-normal-skin]] · doi:10.1126/science.aaa6806 · PMID 25999502 · n=234 microdissected skin patches, 4 donors aged 55–73 · observational WGS · p<0.001 (positive selection) · model: human sun-exposed epidermis · archive status: pending download (OA via figshare)

[^martincorena2018]: [[studies/martincorena-2018-somatic-clones-oesophagus]] · doi:10.1126/science.aau3879 · PMID 30337457 · n=844 biopsies, 9 individuals aged 20–75 · observational WGS + microdissection · model: human normal oesophageal epithelium · archive status: pending download (OA via Cambridge repository)

[^moore2020]: [[studies/moore-2020-endometrium-mutational-landscape]] · doi:10.1038/s41586-020-2214-z · PMID 32350471 · n=hMSM glands, cross-sectional age range · observational WGS · model: human normal endometrial epithelium · archive status: not_oa (closed access)

[^lodato2018]: [[studies/lodato-2018-somatic-mutations-neurons]] · doi:10.1126/science.aao4426 · PMID 29217584 · n=161 neurons (93 PFC + 26 DG normal; 42 DNA-repair-disorder) from 15 normal donors aged 4 months–82 years · observational single-cell WGS · p=0.006 (repair-disorder excess) · model: human neurons · see [[cell-types/neurons]] for full verified detail · archive status: download failed (OA via PMC5831169)

[^albertson2009]: [[studies/albertson-2009-polymerase-proofreading-mice]] · doi:10.1073/pnas.0907147106 · PMID 19805137 · n=not stated for lifespan; survival curves shown for Pol-ε exo⁻ and Pol-δ exo⁻ mice · in-vivo mouse genetics · model: C57BL/6 Pol-ε/Pol-δ proofreading-deficient mice · archive status: pending download (OA)
