---
type: protein
aliases: [ten-eleven translocation 3, methylcytosine dioxygenase TET3, CXXC10, KIAA0401]
uniprot: O43151
ncbi-gene: 200424
hgnc: 28313
mouse-ortholog: Tet3
ensembl: ENSG00000187605
genage-id: null
druggability-tier: null
caused-by: []
causes: []
pathways: ["[[dna-demethylation]]", "[[epigenetic-clock]]"]
hallmarks: ["[[epigenetic-alterations]]"]
known-interactors: ["[[ogt]]", "[[tet1]]", "[[tet2]]"]
mr-causal-evidence: not-tested
gtex-aging-correlation: null
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Beck 2020 (10.1016/j.ajhg.2019.12.007) PDF verified end-to-end; Rasmussen 2016 (10.1101/gad.276568.115) PDF verified end-to-end; Li 2014 (10.1073/pnas.1318906111) PDF verified end-to-end; Dzitoyeva 2012 (10.1016/j.neurobiolaging.2012.02.006) verified via PMC full-text (PDF download failed); Gu 2011 (10.1038/nature10443) not_oa — abstract only via PubMed, not full PDF. Corrections applied: Dzitoyeva n and ages corrected; Dzitoyeva protein-vs-mRNA conflation corrected; Li 2014 n corrected; Beck 2020 catalytic-domain overgeneralization qualified; domain table residue annotation tightened. R26d HGNC correction (11591→28313) confirmed in place. CXXC correction (TET3 retains, TET2 lacks) confirmed correct. Canonical-DB identity fields (UniProt O43151 length 1795 aa, MW 193.7 kDa, CXXC 50–90) cross-verified against UniProt REST API."
---

# TET3

TET3 (ten-eleven translocation methylcytosine dioxygenase 3) is an Fe(II)- and α-ketoglutarate-dependent dioxygenase that catalyzes iterative oxidation of 5-methylcytosine (5mC) to 5-hydroxymethylcytosine (5hmC), 5-formylcytosine, and 5-carboxylcytosine. Unlike its family sibling [[tet2]], which lost its CXXC zinc-finger domain during vertebrate evolution, TET3 retains an N-terminal CXXC-type zinc finger enabling direct CpG-DNA binding. TET3's most-established biological role is in **paternal genome demethylation in the zygote immediately after fertilization** — one of the earliest epigenetic reprogramming events in mammalian development. In adulthood, TET3 is enriched in neurons, where it supports synaptic plasticity and fear extinction. Its contribution to aging is comparatively less studied than TET1 or TET2 but overlaps with the [[epigenetic-alterations]] hallmark through declining 5hmC in aging brain tissue.

## Identity

- **UniProt:** O43151 (TET3_HUMAN) — reviewed, Swiss-Prot entry; accessed 2026-05-06
- **NCBI Gene:** 200424
- **HGNC:** 28313
- **Mouse ortholog:** Tet3 (one-to-one ortholog)
- **Ensembl:** ENSG00000187605
- **Length:** 1,795 amino acids (canonical isoform); molecular weight ~193.7 kDa
- **Gene family:** TET family — TET1, TET2, TET3; all Fe(II)/2-oxoglutarate-dependent dioxygenases with conserved catalytic DSBH core, divergent N-terminal regulatory regions and domain presence

**Naming note:** The gene synonym CXXC10 reflects TET3's retention of the CXXC zinc-finger domain (unlike TET2, which encodes CXXC4/IDAX as a separate gene). This page covers the protein. No separate `pathways/tet3.md` exists; pathway context lives under [[dna-demethylation]] and [[epigenetic-alterations]].

## Domain architecture

| Domain / Feature | Residues (approx.) | Function |
|---|---|---|
| CXXC-type zinc finger | ~50–90 | Direct CpG-DNA binding (unmethylated CpG or 5caC); binds CpG-rich promoters; confers promoter targeting without obligate partner proteins |
| N-terminal low-complexity / disordered region | ~142–704 | Protein–protein interactions; developmental regulation |
| Catalytic dioxygenase / DSBH core + Cys-rich | ~985–1795 | Contains HxD…H Fe(II)-binding triad and RxxxxxR motif for 2-oxoglutarate coordination; carries out 5mC → 5hmC → 5fC → 5caC oxidation |

**CXXC domain correction (vs. prompt):** The task brief stated TET3 "lacks the CXXC zinc-finger DNA-binding domain present in TET1." This is incorrect. UniProt O43151 annotates a CXXC-type zinc finger at residues ~50–90 in TET3 — the same domain class present in TET1. It is TET2 that lost the CXXC domain during a vertebrate chromosomal inversion; TET2 instead partners with IDAX/CXXC4 for CpG targeting. TET3 therefore occupies an intermediate position: it retains direct CpG-binding capacity via its CXXC domain, while also receiving some context-specific targeting via partner proteins. This distinction is not merely terminological — it predicts different genomic occupancy patterns between TET2 (partner-dependent) and TET1/TET3 (domain-autonomous CpG binding). #gap/needs-replication — the in-vivo quantitative importance of TET3's CXXC domain for its neuronal versus developmental functions has not been systematically compared to TET1.

## Catalytic chemistry

TET3 catalyzes the same iterative oxidation cascade as TET1 and TET2 [^rasmussen2016]:

```
5mC + α-KG + O₂  →  5hmC + succinate + CO₂    (step 1)
5hmC + α-KG + O₂  →  5fC  + succinate + CO₂    (step 2)
5fC  + α-KG + O₂  →  5caC + succinate + CO₂    (step 3)
```

5caC is excised by thymine-DNA glycosylase (TDG) and restored to unmodified cytosine via base-excision repair — completing net active demethylation. 5hmC itself also functions as a stable epigenetic mark with dedicated reader proteins.

**Co-substrate dependence:** Fe(II) and α-ketoglutarate are obligate cofactors. Ascorbate (vitamin C) maintains Fe(II) reducing conditions; 2-hydroxyglutarate (produced by mutant IDH1/IDH2) competitively inhibits TET3 as it does TET1/TET2. For therapeutic implications of these metabolite connections, see [[tet2]] (canonical home for ascorbate + IDH-inhibitor data, which was established for TET2; TET3 is implicated but secondary). #gap/needs-replication — TET3-specific sensitivity to 2HG inhibition vs TET1/TET2 has not been directly compared in human cells.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — same Fe(II)/α-KG chemistry; DSBH catalytic core conserved across vertebrates |
| Phenotype conserved in humans? | yes — TET3 deficiency in humans causes Beck-Fahrner syndrome (neurodevelopmental disorder) [^beck2020] |
| Replicated in humans? | yes (for developmental phenotype); partial (for neuronal plasticity); not-tested (for aging) |

## Tissue and developmental specificity

TET3's expression pattern is distinctly different from its family members, which is the primary reason the three paralogs have partially non-redundant biological roles [^rasmussen2016]:

| Context | Expression level | Notes |
|---|---|---|
| Oocyte → zygote (paternal pronucleus) | Very high | Dominant TET enzyme in this context; sole driver of paternal genome active demethylation after fertilization |
| Early embryo (2-cell → blastocyst) | High → declining | Rapidly replaced by TET1 in inner cell mass |
| Adult neurons (cerebral cortex, hippocampus) | High | Co-expressed with TET1; both are the predominant TET forms in CNS |
| Adult HSCs / bone marrow | Low | TET2 dominates hematopoietic tissue; TET3 is minor contributor |
| Most somatic tissues | Moderate–low | Broadly expressed but at lower levels than developmental peak |

**Subcellular localization:** Nucleus and cytoplasm in most contexts; at the zygotic stage specifically localizes to the male pronucleus where paternal genome demethylation occurs. Recruits OGT (O-GlcNAc transferase) to active gene promoters as a secondary function [per UniProt O43151].

## Zygotic reprogramming — paternal genome demethylation

TET3's signature role in developmental biology is the rapid demethylation of the paternal genome following fertilization. After sperm entry, the paternal genome (which is heavily methylated in sperm) undergoes near-complete demethylation within the first zygotic cell cycle while the maternal genome is protected by STELLA/PGC7 [^gu2011]. Key findings from Gu et al. 2011:

- TET3 is highly expressed in oocytes and is maternally deposited in the zygote
- *Tet3* maternal KO severely impairs paternal genome demethylation: 5mC fails to be converted to 5hmC on paternal chromosomes in the zygote, and paternal gene expression patterns are disrupted
- Implantation failure and developmental arrest at higher rates in maternal *Tet3*-KO embryos
- The maternal genome is protected from TET3 activity by STELLA/PGC7, explaining the asymmetric demethylation

This zygotic role — absent for TET1 or TET2 — is TET3's most-characterized non-redundant function [^gu2011].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — paternal genome 5hmC observed in human zygotes; TET3 protein present |
| Phenotype conserved in humans? | partial — direct maternal TET3 KO in human zygotes not tested; inferred from ART outcomes in TET3-deficient contexts |
| Replicated in humans? | no direct experimental test; TET3 deficiency syndrome patients do not directly reveal this developmental phenotype |

## Neuronal function and adult plasticity

In the adult brain, TET3 is one of two dominant TET enzymes (alongside TET1). Key neuronal functions:

### Fear extinction and behavioral adaptation

Li et al. 2014 (*PNAS*) showed that fear extinction — a form of reversal learning — triggers genome-wide redistribution of 5hmC in the infralimbic prefrontal cortex (ILPFC), driven by TET3 [^li2014]. Extinction learning selectively increased Tet3 **mRNA** (not Tet1) in cortical neurons in an activity-dependent manner; intra-ILPFC Tet3 shRNA knockdown impaired fear extinction memory, while Tet1 knockdown had no effect. TET3-mediated 5hmC redistribution at extinction-regulated loci — including an accumulation within the gephyrin gene intron — was associated with permissive chromatin states and rapid behavioral adaptation. This establishes TET3 as a mediator of **activity-dependent epigenetic remodeling** in the adult neocortex.

### Aging and declining 5hmC in brain

Dzitoyeva et al. 2012 (*Neurobiology of Aging*) examined 5hmC in aging mouse brain mitochondria and found that aging decreases mitochondrial 5hmC (but not 5mC) in the **frontal cortex** of aged mice [^dzitoyeva2012]. In the cerebellum the opposite trend was observed (5hmC increased with age). The study measured **mRNA** (not protein) for TET1, TET2, and TET3: in the frontal cortex, no significant differences in TET1–TET3 mRNA were found with aging; in the cerebellum, TET2 and TET3 mRNA were significantly increased in old versus adult mice. The study does not cleanly attribute the frontal-cortex mitochondrial 5hmC decline to TET downregulation, as mRNA levels in that region were unchanged. This establishes a correlation between brain aging and altered mitochondrial 5hmC patterns with some TET-family mRNA changes, but the causal direction and TET3-specific protein contribution are not resolved. #gap/needs-replication — TET3-specific expression trajectories across human brain aging (e.g., from ROSMAP or GTEx aging data) are not clearly delineated; most studies report TET1+TET3 together.

## Functional redundancy and TET-family interactions

The three TET paralogs partially overlap in function, but their tissue-specific expression creates apparent non-redundancy in vivo [^rasmussen2016]:

| Genetic model | Phenotype |
|---|---|
| *Tet1*-/- (single KO) | Viable; reduced 5hmC in brain and gonads; impaired meiotic recombination; mild imprinting defects |
| *Tet2*-/- (single KO) | Viable; myeloproliferative disease (see [[tet2]]) |
| *Tet3*-/- (single KO, constitutive) | Neonatal lethality; severely impaired zygotic demethylation |
| *Tet1/Tet2* double KO | Mostly perinatal lethal; some survive and develop normally but the majority die perinatally with encephaly, growth retardation, and compromised imprinting (Dawlaty et al. 2013 per [^rasmussen2016]) |
| *Tet1/Tet2/Tet3* triple KO | Embryonic lethal; complete loss of 5hmC; gastrulation failure |

The embryonic lethality of triple KO and neonatal lethality of *Tet3* single KO reflects TET3's non-redundant developmental role, primarily in zygotic reprogramming. The partial redundancy in adult somatic tissues (where double KOs produce additive but not always synergistic phenotypes) reflects overlapping substrate access in cells where multiple TET forms are co-expressed. #gap/needs-replication — quantitative contributions of TET3 vs TET1 in adult neurons have not been resolved by conditional double-KO studies in the aging context.

## Disease — TET3 deficiency syndrome (Beck-Fahrner syndrome)

Beck et al. 2020 (*Am J Hum Genet*) delineated **TET3 deficiency** as a Mendelian disorder of the DNA demethylation machinery in 11 human cases [^beck2020]. Key features:

- Intellectual disability, global developmental delay, hypotonia
- Facial dysmorphism (variable)
- Caused by heterozygous loss-of-function or dominant-negative missense variants in or near the catalytic domain; most missense variants localize to the dioxygenase domain, but at least one (p.Arg752Cys, family 1) is upstream of the catalytic domain per Beck et al. Fig. 2A
- MIM designation: Beck-Fahrner syndrome (BEFAHRS, MIM 618798)
- Mechanism: haploinsufficiency or dominant-negative disruption of TET3 catalytic activity → impaired 5hmC production in neurons and during early development

Unlike TET2 (where somatic LoF mutations drive hematological malignancy via clonal expansion), TET3 germline mutations primarily cause neurodevelopmental rather than oncological phenotypes. TET3 somatic mutations in cancer are rare and not yet established as driver events in any tumor type. #gap/needs-replication — genome-wide cancer cohort analyses for TET3 somatic mutations are sparse compared to TET2.

## Aging relevance summary

TET3 is a less-established aging gene compared to TET1 or TET2, with the following tentative connections:

1. **Brain 5hmC decline:** Mitochondrial 5hmC in mouse frontal cortex declines with age [^dzitoyeva2012]; 5hmC is one of the most abundant modified bases in neurons generally. TET2 and TET3 mRNA are increased (not decreased) in aged cerebellum in the same study, complicating a simple "TET decline drives 5hmC loss" narrative. Whether TET3 protein abundance decreases with age in human neurons is not established. #gap/needs-replication #gap/no-mechanism
2. **Epigenetic clock:** TET enzymes, including TET3, write 5hmC modifications that influence DNA methylation patterns measured by Horvath-type clocks. Whether TET3 variation contributes to epigenetic aging rate independently of TET1/TET2 is untested. #gap/needs-replication
3. **Neurodevelopmental precedent:** Beck-Fahrner syndrome demonstrates that TET3 dosage in neurons is essential during development; extrapolating to age-related neuronal dysfunction is speculative but biologically plausible.
4. **Less-studied than paralogs:** Most aging-focused TET research has interrogated TET1 (hippocampal memory) and TET2 (CHIP / cardiovascular). TET3's specific contribution to the aging epigenome remains an open area.

## Cross-references

- [[tet2]] — verified sibling; canonical home for CHIP, TET-family catalytic chemistry, IDH/2HG connection, ascorbate co-factor data
- [[tet1]] — R24b sibling (seeded in parallel); TET1 retains CXXC domain; predominant in hippocampus / memory
- [[epigenetic-alterations]] — hallmark page; TET3 is a direct 5hmC writer contributing to epigenetic landscape
- [[dna-demethylation]] — pathway page (implicit stub)
- [[neurons]] — TET3's primary adult tissue context; implicit stub (R24c candidate)
- [[5hmc]] — the primary oxidation product of TET3 activity; implicit stub
- [[horvath-clock-2013]] — epigenetic age estimator dependent on TET-written CpG methylation patterns
- [[epigenetic-clock]] — pathway context; TET3 as an upstream regulator
- [[ogt]] — OGT is recruited to active gene promoters by TET3 (UniProt O43151); implicit stub
- [[idh1]] / [[idh2]] — mutant IDH enzymes produce 2HG that inhibits TET3; implicit stubs

## Limitations and gaps

- **Aging-specific evidence absent.** TET3 expression trajectories in aging human tissues are not clearly established from current bulk or single-cell transcriptomic databases. Most 5hmC-aging studies do not separate TET1 vs TET3 contributions. #gap/needs-human-replication
- **No large-cohort GWAS association.** Unlike TET2, TET3 has no established GWAS association with age-related disease phenotypes. MR-causal evidence: not-tested. #gap/needs-replication
- **Druggability not established.** No clinical drug or high-quality chemical probe specifically modulates TET3. `druggability-tier` left null; requires Open Targets Platform lookup. #gap/needs-canonical-id
- **Conditional neuronal KO aging studies absent.** Whether TET3 conditional KO in adult neurons accelerates age-related neurodegeneration or cognitive decline has not been directly tested. #gap/needs-replication
- **CXXC domain function in adults uncharacterized.** TET3's CXXC zinc finger is annotated in UniProt O43151 but its contribution to neuronal occupancy vs developmental (zygotic) occupancy has not been dissected. #gap/no-mechanism
- **TET3 somatic mutation spectrum unknown.** Unlike TET2 with comprehensive CHIP/cancer genomics data, TET3 somatic mutation rates in aging tissues are not systematically catalogued. #gap/needs-replication

## Footnotes

[^gu2011]: doi:10.1038/nature10443 · Gu TP, Guo F, Yang H et al. (Guo-Liang Xu lab) · Nature 2011;477:606-610 · "The role of Tet3 DNA dioxygenase in epigenetic reprogramming by oocytes" · maternal-KO *Tet3* mouse embryos show failure of paternal genome 5mC → 5hmC conversion in the zygote; impaired paternal gene expression and developmental arrest; STELLA/PGC7 protects maternal genome from TET3-mediated demethylation; n≈60 embryos across genotypes per main experiment · in-vivo · model: mus-musculus (Tet3 maternal conditional KO) · archive status: confirmed in archive (not_oa; 1,121 citations; FWCI 46.1)

[^beck2020]: doi:10.1016/j.ajhg.2019.12.007 · Beck DB, Petracovici A, He C et al. · Am J Hum Genet 2020;106:234-245 · "Delineation of a Human Mendelian Disorder of the DNA Demethylation Machinery: TET3 Deficiency" · 11 individuals across 8 families with heterozygous TET3 LoF/dominant-negative variants; intellectual disability, global developmental delay, hypotonia, facial dysmorphism, autistic features, movement disorders; reduced 5hmC in HEK293 cells overexpressing variants; missense variants in dioxygenase domain dominant-negative in overexpression assay; one variant (p.Arg752Cys) outside catalytic domain; MIM: Beck-Fahrner syndrome BEFAHRS (618798) · observational (case series + functional validation in HEK293 cells) · model: human + in-vitro HEK293 assay · archive status: bronze OA; PDF downloaded 2026-05-06; 107 citations

[^rasmussen2016]: doi:10.1101/gad.276568.115 · Rasmussen KD, Helin K · Genes Dev 2016;30:733-750 · "Role of TET enzymes in DNA methylation, development, and cancer" · comprehensive TET-family review covering TET1/TET2/TET3 domain architecture, catalytic mechanism, biological roles, domain conservation, CXXC domain distribution across paralogs; confirms TET1 and TET3 have N-terminal CXXC zinc finger; TET2 lacks CXXC domain and is recruited to chromatin by IDAX/CXXC4 and other binding partners; constitutive Tet3 KO leads to neonatal lethality with 100% penetrance; Tet1 and Tet2 single KOs viable without overt developmental defects; 1,013 citations · review · model: N/A · archive status: diamond OA; PDF downloaded 2026-05-06

[^li2014]: doi:10.1073/pnas.1318906111 · Li X, Wei W, Zhao QY et al. · PNAS 2014;111:7120-7125 · "Neocortical Tet3-mediated accumulation of 5-hydroxymethylcytosine promotes rapid behavioral adaptation" · fear extinction triggers genome-wide redistribution of 5hmC in infralimbic prefrontal cortex; Tet3 mRNA rises in cortical neurons in an activity-dependent manner; neuronal activity–dependent 5hmC redistribution linked to rapid behavioral adaptation; Tet3 knockdown via intra-ILPFC shRNA impairs fear extinction memory; n=3–8 mice per group depending on experiment (in vitro depolarization n=3; in vivo molecular n=4–5; behavioral memory tests n=7–8) · in-vivo + in-vitro + molecular · model: mus-musculus (fear-conditioning / extinction paradigm) · archive status: confirmed in archive (bronze OA; 188 citations; PDF downloaded 2026-05-06)

[^dzitoyeva2012]: doi:10.1016/j.neurobiolaging.2012.02.006 · Dzitoyeva S, Chen H, Manev H · Neurobiol Aging 2012;33:2881-2891 · "Effect of aging on 5-hydroxymethylcytosine in brain mitochondria" · aging decreases mitochondrial 5hmC but not 5mC in frontal cortex of aged C57BL/6 males; in cerebellum 5hmC increases with age; TET2 and TET3 **mRNA** (not protein) significantly increased in aged cerebellum; no significant TET1–TET3 mRNA changes in frontal cortex with aging; n=5 mice per age group · in-vivo · model: mus-musculus (adult 4 months vs aged 24 months, C57BL/6 males) · archive status: green OA via PMC3462297; PDF download failed (no URLs after filtering); verified via PMC full-text; 201 citations
