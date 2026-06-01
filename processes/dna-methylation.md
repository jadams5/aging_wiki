---
type: process
aliases: [5-methylcytosine, 5mC, CpG methylation, cytosine methylation]
key-proteins: ["[[dnmt3a]]", "[[dnmt1]]", "[[dnmt3b]]", "[[dnmt3l]]", "[[tet1]]", "[[tet2]]", "[[tet3]]"]
pathways: ["[[one-carbon-metabolism]]"]
hallmarks: ["[[epigenetic-alterations]]"]
selective-variants: ["[[dna-demethylation]]"]
druggability-tier: 2
caused-by: ["[[one-carbon-metabolism]]"]
causes: ["[[epigenetic-alterations]]", "[[cellular-senescence]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Heyn 2012 and Bocklandt 2011 verified end-to-end against local PDFs; corrections applied to sample sizes, methylation magnitude, and CpG count claims. Bird 2002 download failed (diamond OA, CSHL server 520 error on two attempts); key claims attributed to Bird 2002 are consistent with the widely-replicated CpG landscape described in secondary sources but await direct PDF confirmation. Smith & Meissner 2013 and Ehrlich 2002 are closed-access (not_oa) — those claims unverifiable locally. Wilson & Jones 1983 DOI located (10.1126/science.6844925) but is closed-access; gap tag updated."
---

# DNA Methylation

The addition of a methyl group to the C5 position of cytosine in the context of a CpG dinucleotide, producing 5-methylcytosine (5mC). DNA methylation is the most extensively characterized epigenetic mark in mammals, regulating transcription, genome stability, X-chromosome inactivation, and imprinting. Its **progressive misregulation with age** — global hypomethylation at repetitive elements combined with focal hypermethylation at CpG island promoters — is the molecular basis for the [[epigenetic-alterations]] hallmark and the substrate for all DNA-methylation-based epigenetic clocks ([[biomarkers/horvath-clock-2013]], [[biomarkers/grimage-2019]], [[biomarkers/dunedinpace-2022]]).

For the reverse process (5mC → cytosine via TET oxidation), see [[dna-demethylation]].

---

## Establishment and maintenance machinery

### De novo methylation

De novo methyltransferases establish new methylation marks on previously unmethylated DNA, principally during embryonic development and germ-cell reprogramming [^smith2013]:

| Enzyme | Gene | Role |
|---|---|---|
| DNMT3A | [[dnmt3a]] | Primary de novo methyltransferase in somatic tissues; most frequently mutated CHIP driver (somatic loss-of-function → methylation drift in aged HSCs) |
| DNMT3B | [[dnmt3b]] | De novo methyltransferase active in early embryogenesis; mutations → ICF syndrome (immunodeficiency, centromeric instability, facial anomalies) |
| DNMT3L | [[dnmt3l]] | Catalytically inactive; accessory factor that stimulates DNMT3A/3B activity and targets de novo methylation via recognition of unmethylated H3K4 |

DNMT3A and DNMT3B form heterodimeric complexes with DNMT3L, which lacks a functional SAM-binding domain but allosterically doubles the catalytic output of the active subunits [^smith2013]. #gap/needs-replication

### Maintenance methylation

After each replication cycle, newly synthesized DNA strands carry unmethylated CpGs opposite the methylated parental strand — forming hemimethylated sites. [[dnmt1]] (the maintenance methyltransferase) is recruited to these hemimethylated sites by its partner **UHRF1**, which reads hemimethylated DNA and recruits DNMT1 via a direct protein-protein interaction, restoring symmetric CpG methylation within the cell cycle [^smith2013].

Failure of maintenance — whether by DNMT1 reduction, UHRF1 dysfunction, or replication-fork speed exceeding DNMT1 capacity — generates passive demethylation by dilution across cell divisions.

---

## Substrate and genomic landscape

In vertebrate genomes, approximately **70–80% of all CpG dinucleotides are methylated** [^bird2002]. CpGs are globally underrepresented relative to what random base-composition would predict (the "CpG paradox"), because methylcytosine undergoes spontaneous deamination to thymine, and over evolutionary time unmaintained mCpGs have been lost.

The major exceptions are **CpG islands**: regions of ~0.5–2 kb with high CpG density (observed/expected ratio > 0.6), often located at or near gene promoters. Approximately 60% of human gene promoters are associated with CpG islands. In normal differentiated cells, most CpG island promoters remain unmethylated and associated with active or poised transcription [^bird2002].

Key genomic contexts:

| Context | Basal methylation | Regulatory effect |
|---|---|---|
| CpG island promoters | Low (~5%) | Methylation represses transcription |
| Gene bodies | High | Positive correlation with transcription elongation |
| Repetitive elements (LINE-1, Alu, IAP) | High | Maintains silencing of transposable elements |
| Imprinted loci | Allele-specific | Parent-of-origin gene expression control |
| X chromosome (female) | Inactive X hypermethylated | Dosage compensation |

---

## Transcriptional repression mechanism

Promoter CpG methylation represses transcription through two cooperative mechanisms [^bird2002]:

1. **Steric exclusion** — methylated CpGs block binding of many transcription factors that require unmethylated CpG motifs in their recognition sequences (e.g., SP1, NRF1, certain E-box-binding factors).

2. **Methyl-CpG binding proteins** — a family of proteins including MeCP2 and the MBD proteins (MBD1, MBD2, MBD3, MBD4) specifically recognize 5mC. MeCP2 and MBD2 recruit HDAC-containing NuRD and Sin3A co-repressor complexes, leading to histone deacetylation and chromatin compaction independent of direct transcription-factor competition.

---

## Demethylation

5mC can be removed by two routes; the active enzymatic route is the dominant regulated mechanism (full mechanism: [[dna-demethylation]]):

- **Active demethylation** — TET family dioxygenases ([[tet1]], [[tet2]], [[tet3]]) oxidize 5mC → 5-hydroxymethylcytosine (5hmC) → 5-formylcytosine (5fC) → 5-carboxylcytosine (5caC); 5fC and 5caC are excised by TDG and replaced with unmodified cytosine via base-excision repair.
- **Passive demethylation** — if DNMT1/UHRF1 maintenance fails across replication cycles, 5mC is diluted by replication without restoration.

---

## Role in aging

### Global hypomethylation

With age, there is progressive **global loss of DNA methylation**, particularly at:
- Repetitive elements (LINE-1, Alu retrotransposons, satellite repeats) — the most abundant methylated sequences in the genome
- Intergenic and non-coding regions
- Gene bodies of broadly expressed genes

This is consistent with reduced DNMT1 processivity or UHRF1 stoichiometry with age, and correlates with re-activation of transposable elements (contributing to genome instability and the innate immune activation phenotype observed in aged cells) [^ehrlich2002]. #gap/needs-human-replication

### Focal hypermethylation

Simultaneously, a subset of CpG island promoters — particularly those associated with developmental transcription factors and tumor suppressor genes — acquire de novo methylation with age [^heyn2012]. This pattern mirrors the cancer methylome (CpG island methylator phenotype, CIMP), suggesting aging and oncogenesis share convergent epigenetic failure modes [^ehrlich2002].

The combined hypomethylation/hypermethylation pattern across tissues has been demonstrated directly in a comparison of newborn and nonagenarian/centenarian methylomes:

| Feature | Newborn | Centenarian |
|---|---|---|
| Global 5mC content | 80.5% of CpGs methylated | 73.0% of CpGs methylated (~7.5 pp / ~9% relative reduction) |
| Repetitive element methylation | High | Reduced |
| CpG island promoter methylation | Low | Elevated at developmental genes |

Source: Heyn et al. 2012 — WGBS of n=1 newborn + n=1 centenarian (103-y-old male, Y103); extended to n=19 newborns + n=19 nonagenarians via 450K CpG array [^heyn2012]. #gap/needs-replication — extreme-age design (newborn vs. centenarian) may not capture monotonic change; small WGBS n limits single-nucleotide resolution for the centenarian figure.

### Epigenetic drift

Beyond the directional global changes, individual CpGs show increasing **stochastic variability** between cells and between individuals with age — epigenetic drift. Bocklandt et al. 2011 demonstrated that saliva DNA methylation at just **two** CpG sites (in the EDARADD and NPTX2 gene promoters) could predict chronological age within ~5.2 years (n=34 identical twin pairs in discovery; validated in 60 unrelated individuals aged 18–70), establishing proof-of-concept for methylation-based age estimation [^bocklandt2011]. This preceded and motivated the Horvath 2013 multi-tissue clock ([[biomarkers/horvath-clock-2013]]).

Epigenetic drift appears to be stochastic in origin — the methylation maintenance machinery is not perfectly faithful at every site in every cell, and errors accumulate over decades. However, whether drift is purely neutral (passenger) or contributes causally to aging phenotypes is contested; see [[hypotheses/information-theory-of-aging]].

### Causal versus biomarker debate

DNA methylation patterns are the substrate for epigenetic clocks, but whether clock acceleration *causes* aging outcomes (vs. reflects them) is unresolved. Evidence on both sides:

- **Causal support**: partial reprogramming using OSK (Oct4, Sox2, Klf4) restores youthful methylation patterns and reverses functional deficits in mouse retinal ganglion cells ([[studies/lu-2020-osk-vision-restoration]]); Yang et al. 2023 showed ICE-induced epigenetic information loss accelerates mouse physiological aging without primary DNA sequence damage ([[studies/yang-2023-epigenetic-information-loss]]).
- **Biomarker / confounded**: Mendelian randomization analyses of epigenetic clock acceleration and lifespan/health outcomes show mixed results; [[studies/schooling-2025-mr-epigenetic-clock-lifespan]] is a key R31b batch entry to cross-check.

See [[hypotheses/information-theory-of-aging]] for full treatment.

### Druggability (aging context)

DNMT inhibitors — **decitabine** (5-aza-2'-deoxycytidine) and **azacitidine** — are FDA-approved for myelodysplastic syndrome (MDS) and AML. Both are nucleoside analogues that trap DNMT1 in a covalent complex with DNA, causing passive demethylation by depletion of active enzyme. **Not validated for aging indications** — at MDS-therapeutic doses they cause replication-coupled cytotoxicity and are not suitable for chronic aging use. Druggability tier 2 reflects the existence of high-quality chemical probes and approved drugs, but not aging-specific clinical validation. #gap/needs-human-replication

DNMT inhibitor use in aging will likely require either:
1. Ultra-low maintenance doses without global demethylation (untested in humans for aging endpoints)
2. Locus-specific tools (dCas9-TET or dCas9-DNMT fusions) — [[partial-reprogramming]] context

---

## Selective variants / related processes

- **[[dna-demethylation]]** — the TET-mediated active removal of 5mC (R31b batch; stub until seeded)
- **[[partial-reprogramming]]** — OSK-mediated restoration of youthful methylation landscapes in vivo

---

## Evidence extrapolation

| Dimension | Status |
|---|---|
| Methylation machinery conserved in humans? | yes — DNMT1/3A/3B/TET1/2/3 are vertebrate-conserved |
| Global hypomethylation with age conserved in humans? | yes — demonstrated in multiple human tissues and cell types |
| Focal hypermethylation with age conserved in humans? | yes — Heyn 2012 and multiple subsequent WGBS studies in humans |
| Epigenetic reprogramming (OSK) validated in humans? | no — mouse/primate only to date #gap/needs-human-replication |

---

## Limitations and gaps

- **Wilson & Jones 1983** (original human aging hypomethylation observation) — DOI located: 10.1126/science.6844925 (Wilson VL, Jones PA · *Science* 220:1055–1057 · 1983 · "DNA Methylation Decreases in Aging But Not in Immortal Cells"); closed-access (not_oa). Citation footnote not yet added to body claims that may depend on it. #gap/no-fulltext-access — if a claim specifically requires this foundational paper, a footnote can be drafted from the Crossref metadata and the claim text should note closed-access status.
- Whether the age-related focal hypermethylation pattern is mechanistically driven (active targeting of DNMT3A/3B) or passive (loss of protective factors at CpG islands) is unclear. #gap/no-mechanism
- Epigenetic drift magnitude and directionality are highly tissue-specific; blood-derived data dominates the literature; brain, liver, and muscle data are thinner. #gap/needs-human-replication
- Locus-specific demethylation tools (dCas9-TET) remain preclinical; no human aging trial data. #gap/long-term-unknown
- CIMP in aging vs. cancer: whether age-related CpG island hypermethylation is oncogenic or protective (silencing senescence-associated genes) is contested. #gap/contradictory-evidence

---

## Footnotes

[^bird2002]: doi:10.1101/gad.947102 · Bird A · *Genes & Development* 2002 · review · n/a · model: vertebrates; foundational overview of CpG methylation landscape, MBD proteins, and transcriptional repression mechanisms; cited >6,900 times
[^smith2013]: doi:10.1038/nrg3354 · Smith ZD, Meissner A · *Nature Reviews Genetics* 2013 · review · n/a · model: mammalian; comprehensive review of DNMT machinery, de novo vs. maintenance methylation, TET pathway, developmental dynamics; cited >3,000 times · #gap/no-fulltext-access (not_oa — DNMT machinery claims unverified against PDF)
[^bocklandt2011]: doi:10.1371/journal.pone.0014821 · Bocklandt S et al. · *PLoS ONE* 2011 · observational · n=34 identical twin pairs (discovery; age 21–55); validated in n=31 males + n=29 females (age 18–70) · model: human saliva; 88 CpG loci in ~80 genes correlated with age; final prediction model used two cytosines (EDARADD and NPTX2 promoters); average accuracy 5.2 yr (r=0.83, p=2.2×10⁻¹⁶, n=66 combined); foundational to epigenetic clock field
[^heyn2012]: doi:10.1073/pnas.1120658109 · Heyn H et al. · *PNAS* 2012 · observational · WGBS: n=1 newborn + n=1 centenarian (103-y-old, Y103); array validation: n=19 newborns + n=19 nonagenarians (mean age 92.6 y, PBMCs) · model: human CD4+ T cells / PBMCs; global 5mC: 80.5% (newborn) vs 73.0% (centenarian) by WGBS; confirmed hypomethylation at Alu/LINE-1 and elevated methylation at CpG island promoters in the aged group; small WGBS n limits statistical resolution at individual CpGs
[^ehrlich2002]: doi:10.1038/sj.onc.1205651 · Ehrlich M · *Oncogene* 2002 · review · n/a · model: human cancer/aging; documents parallel hypomethylation of repetitive elements and hypermethylation of CpG island promoters in both aging and cancer; cited >1,500 times · #gap/no-fulltext-access (not_oa — aging/cancer hypomethylation parallelism claims unverified against PDF)
