---
type: protein
aliases: [SIRT7, sirtuin-7, SIR2L7]
uniprot: Q9NRC8
ncbi-gene: 51547
hgnc: 14935
ensembl: ENSG00000187531
mouse-ortholog: Sirt7
genage-id: 269
key-domains: [sirtuin-type-deacylase, nucleolar-localization-C-terminal]
key-ptms: [Arg388-methylation, mitotic-phosphorylation, Lys63-ubiquitination]
pathways: ["[[sirtuin]]"]
hallmarks: ["[[epigenetic-alterations]]", "[[stem-cell-exhaustion]]", "[[loss-of-proteostasis]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 4
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[stem-cell-exhaustion]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Ford 2006 (PDF) and Li 2016 (PDF) verified against full text. Mohrin 2015 verified against PMC4447312 full text. Vakhrusheva 2008 and Barber 2012 verified against PubMed abstracts and Crossref metadata (both closed-access, not_oa in archive). UniProt Q9NRC8 length/domains confirmed via REST API. GenAge ID 269 confirmed. Open Targets druggability tier 4 confirmed. Specific Vakhrusheva 2008 lifespan numbers (~12 mo vs ~24 mo) unverifiable from abstract alone — tagged gap."
---

# SIRT7

The most divergent and least-understood member of the mammalian sirtuin family. SIRT7 is the only sirtuin that resides primarily in the **nucleolus** — the ribosome-manufacturing compartment — rather than at chromatin, in the cytoplasm, or in mitochondria like its paralogs. Its biochemical activities span two distinct histone marks: **H3K18 deacetylation** (removal of acetyl groups at gene promoters, repressing oncogenic programs; Barber 2012) and **H3K122 desuccinylation** (removal of succinyl groups at DSB sites, promoting chromatin compaction and DNA repair; Li 2016). Through these activities it regulates ribosome biogenesis, the DNA damage response, and nuclear integrity. In aging, SIRT7 is most relevant as a gatekeeper of [[stem-cell-exhaustion|hematopoietic stem cell (HSC) fitness]]: loss of SIRT7 in aged HSCs disrupts [[unfolded-protein-response|mitochondrial unfolded-protein response (mtUPR)]] competence, impairing HSC self-renewal and driving exhaustion. SIRT7-knockout mice develop cardiac hypertrophy and die prematurely.

## Identity

- **UniProt:** Q9NRC8 (SIR7_HUMAN)
- **NCBI Gene:** 51547
- **HGNC symbol:** SIRT7
- **Ensembl:** ENSG00000187531
- **Mouse ortholog:** Sirt7 (Mus musculus)
- **GenAge ID:** 269 (GenAge-human; evidence from mouse knockout and HSC studies)
- **Length:** 400 amino acids (canonical isoform)
- **Chromosome location:** 17q25.3 (adjacent to SIRT6 at 19p13.3 — the two most aging-relevant sirtuins are on different chromosomes)

## Functional domains and structure

SIRT7 has a compact architecture centered on the conserved sirtuin catalytic core:

- **Sirtuin-type deacylase domain** (residues 82–329) — catalytic core; binds NAD+ and coordinates an essential Zn2+ ion; houses the acyl-group binding groove. The groove geometry preferentially accepts succinyl-lysine (a larger, charged acyl group) over the acetyl group favored by SIRT1/2/3. This explains why desuccinylation is the primary in vitro activity.
- **Short N-terminal extension** (residues 1–81) — divergent from other sirtuins; required for Pol I interaction
- **C-terminal region** (residues 330–400) — contains a **nucleolar localization signal (NoLS)** that is unique in the sirtuin family and directs SIRT7 to ribosomal DNA (rDNA) repeats in the nucleolus

Key post-translational modifications:

- **Arg388 methylation** — inhibits H3K18Ac deacetylase activity; the methyltransferase responsible is not yet fully characterized (#gap/no-mechanism)
- **Mitotic phosphorylation** — displaces SIRT7 from chromatin during cell division, releasing its transcriptional repression of Pol I targets
- **Lys63-linked ubiquitination** — controls protein stability and may redirect SIRT7 from the nucleolus to DNA damage sites

## Enzymatic activities

SIRT7's enzymatic profile is distinct from all other mammalian sirtuins:

### 1. NAD+-dependent desuccinylase (primary activity)

SIRT7 removes succinyl groups from lysine residues. The primary characterized substrate is **H3K122-succinylation** — a lateral-surface histone modification at the nucleosome dyad that, when present, promotes chromatin accessibility; SIRT7-mediated H3K122 desuccinylation promotes chromatin compaction and nucleosome stabilization [^li2016]. SIRT7 is recruited to **DNA double-strand break (DSB) sites in a PARP1-dependent manner**, where it catalyses H3K122 desuccinylation to condense chromatin and facilitate efficient DSB repair via both NHEJ and homologous recombination. Depletion of SIRT7 impairs chromatin compaction during DNA-damage response and sensitizes cells to genotoxic stress. The in vitro desuccinylase activity at H3K122 was demonstrated to be NAD+-dependent and abolished by catalytic-dead SIRT7-H187Y mutant. Note: H3K18 deacetylation is a distinct activity characterized by Barber 2012 [^barber2012] and is NOT what Li 2016 describes; the two papers concern different histone marks and different cellular functions.

### 2. NAD+-dependent deacetylase (secondary activity, context-specific)

SIRT7 deacetylates H3K18ac at Pol II–dependent gene promoters, where it acts as a transcriptional co-repressor via interaction with ELK4 and other transcription factors [^barber2012]. H3K18 deacetylation by SIRT7 appears to preferentially repress a set of genes associated with oncogenic transformation; in cancer contexts, SIRT7 loss de-represses this gene set, reducing malignancy (the tumor-suppressive function). Non-histone substrates include ATM, CDK9, and DDX21. The deacetylase activity is considerably weaker than SIRT1 or SIRT3 for most substrates.

### 3. RNA polymerase I activation (structural/scaffolding role)

SIRT7 physically associates with RNA polymerase I (Pol I) and rDNA chromatin in the nucleolus, stimulating Pol I-dependent transcription of 45S pre-rRNA [^ford2006]. Ford et al. 2006 demonstrated via ChIP that SIRT7 co-localizes with Pol I at the rDNA promoter and transcribed region, and that overexpression of SIRT7 increases pre-rRNA synthesis in a dose-dependent manner. Critically, **Ford 2006 reported that recombinant SIRT7 exhibited no detectable deacetylase or ADP-ribosyltransferase activity** when acetylated histones and Pol I complex components were used as substrates — the Pol I activation therefore likely acts via a not-yet-identified substrate of the Pol I elongation complex in an NAD+-dependent manner. Knockdown of SIRT7 by siRNA markedly reduced pre-rRNA levels and caused apoptosis, consistent with an essential scaffolding or enzymatic role. Whether catalytic deacylation is required for Pol I stimulation remains unresolved (#gap/no-mechanism).

## Role in aging

### Cardiac aging and premature death in SIRT7-knockout mice

The foundational in vivo aging paper showed that Sirt7-/- mice on a mixed background develop **cardiac hypertrophy, inflammatory cardiomyopathy, and increased apoptosis** of cardiomyocytes [^vakhrusheva2008]. Key findings:

- Sirt7-/- animals had **reduced lifespan** (mean and maximum lifespans reduced vs WT; specific median survival values not verifiable from abstract — paper is closed-access) #gap/needs-replication
- Histology: dilated cardiomyopathy, diffuse fibrosis, increased p53 activity in cardiomyocytes
- Mechanistic link: SIRT7 deacetylates p53 in cardiomyocytes, restraining apoptosis; loss of SIRT7 → p53 hyperactivation → cardiomyocyte apoptosis → heart failure

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | p53 deacetylation by sirtuins is conserved; SIRT7 expressed in human heart |
| Phenotype conserved in humans? | partial | No human SIRT7-null syndrome; low SIRT7 expression correlates with cardiomyopathy in some human studies |
| Replicated in humans? | no | Mouse-only lifespan data |

#gap/needs-human-replication — the cardiac-aging and premature-death phenotype is entirely from Sirt7-/- mice; no human equivalent established.

### SIRT7-mtUPR axis in hematopoietic stem cell aging

The most mechanistically rich aging paper: Mohrin et al. 2015 showed that SIRT7 controls a **mitochondrial unfolded-protein response (mtUPR)** checkpoint that governs HSC metabolic state and self-renewal capacity [^mohrin2015]. Key findings:

- SIRT7 expression is **reduced in aged HSCs** vs young HSCs in mice
- NRF1 (nuclear respiratory factor 1) **recruits SIRT7** to the promoters of mitochondrial ribosomal protein (mRP) and mitochondrial transcription factor (mTF) genes, where SIRT7 acts as a transcriptional co-repressor — this is the mechanistic direction (NRF1→SIRT7 targeting, not SIRT7 activating NRF1)
- SIRT7 repression of mRP/mTF genes reduces mitochondrial protein folding stress (PFSmt); loss of SIRT7 → de-repression of mRP/mTF → increased mitochondrial protein load → mtUPR activation → HSC quiescence failure
- **SIRT7-/- HSCs showed a ~40% reduction in long-term hematopoietic reconstitution** in transplantation assays vs SIRT7+/+ (n=7 recipients per group)
- SIRT7 overexpression in aged HSCs improved reconstitution capacity and reversed myeloid-biased differentiation in transplantation assays
- The SIRT7-NRF1 axis represents a **reversible** aging factor — restoring SIRT7 function could partly rejuvenate aged HSCs

This connects SIRT7 to the [[mitohormesis]] biology (mitochondrial stress response and hormesis) and to [[unfolded-protein-response]] (the mtUPR branch is mechanistically distinct from the cytosolic/ER UPR but shares the principle of adaptive stress signaling). Note: the causal logic is NRF1 → SIRT7 targeting → transcriptional repression of mRP/mTF genes → reduced mitochondrial protein folding stress; SIRT7 is the executioner enzyme, not the upstream activator of NRF1.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | NRF1 and mtUPR components are conserved; SIRT7 expressed in human HSCs |
| Phenotype conserved in humans? | unknown | Aged human HSC function is impaired, but SIRT7-specific contribution not established |
| Replicated in humans? | no | Mouse HSC study; no human SIRT7 intervention data |

#gap/needs-human-replication — SIRT7-NRF1-mtUPR HSC aging axis demonstrated in mice only.
#gap/needs-replication — this Science 2015 paper has not been independently replicated in a different laboratory as of the seeding date.

### H3K122 desuccinylation and genome stability

H3K122 desuccinylation by SIRT7 promotes chromatin condensation at DNA DSB sites, facilitating efficient repair and suppressing genomic instability [^li2016]. SIRT7 depletion sensitizes cells to genotoxic agents (VP16, camptothecin, ionizing radiation) across multiple human cancer cell lines (MCF-7, U2OS, HCT116, HepG2). The link between SIRT7 desuccinylase activity and retrotransposon silencing or rDNA heterochromatin is **not demonstrated in Li 2016** — that paper is specifically about DSB repair at general genomic loci. Any claim that SIRT7-mediated H3K122 desuccinylation suppresses retrotransposons requires a separate citation. Age-related decline in SIRT7 could contribute to genomic instability via impaired DSB repair, linking SIRT7 to [[epigenetic-alterations]] and [[genomic-instability]].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | H3K122-succinylation mark and SIRT7 are conserved; all experiments in human cell lines |
| Phenotype conserved in humans? | yes (cell-culture) | Li 2016 was conducted in human cancer cell lines (MCF-7, U2OS, HCT116, HepG2); no in vivo human data |
| Replicated in humans? | no | Li 2016 (NatComms) was in cell-culture systems; no clinical replication |

## Ribosome biogenesis and Pol I regulation

SIRT7's nucleolar localization places it at the center of ribosome biogenesis — the cell's most energetically expensive anabolic process. SIRT7 directly activates Pol I–driven rDNA transcription [^ford2006] by a mechanism that was unresolved in the founding study (no deacetylase or ADP-ribosyltransferase activity detected in vitro; likely NAD+-dependent but substrate unidentified). The net effect is context-dependent: in actively growing cells, SIRT7 supports Pol I activity; whether SIRT7 also maintains heterochromatic rDNA silencing via histone deacylation at rDNA loci is not established by the cited primary sources. SIRT7 depletion causes proliferation arrest and apoptosis in cultured cells, consistent with an essential role in maintaining ribosome output.

The connection to [[loss-of-proteostasis]] hallmark: ribosome biogenesis quality control is itself a proteostasis checkpoint; age-related decline of SIRT7 may compromise this checkpoint and contribute to production of aberrant ribosomal proteins.

## Oncology context (aging-antagonistic function)

SIRT7 deacetylates H3K18ac at the promoters of a set of genes regulated by Myc and ELK4, repressing oncogenic programs [^barber2012]. In many human cancers (thyroid, breast, colorectal), SIRT7 is over-expressed — and H3K18ac hypoacetylation (a consequence) is a marker of tumor malignancy and poor prognosis. This is the reverse of most aging-relevant sirtuin biology: cancer cells exploit SIRT7's chromatin-compacting activity to silence tumor-suppressor loci. This may reflect antagonistic pleiotropy: SIRT7-driven chromatin silencing is beneficial in non-dividing tissue maintenance contexts but co-opted in cancers for inappropriate gene repression. This context is included for completeness but is not the primary focus of this wiki page; see [[epigenetic-alterations]] for the aging-cancer epigenetic overlap.

## Cross-references

- [[sirtuin]] — parent pathway; SIRT7 is the sole nucleolar sirtuin, placing it in a distinct functional niche from nuclear (SIRT1, SIRT6), cytoplasmic (SIRT2), and mitochondrial (SIRT3, SIRT4, SIRT5) paralogs
- [[sirt1]] — closest functional overlap in chromatin/transcription regulation; SIRT1 deacetylates H3K9/K14; SIRT7 deacetylates H3K18ac (Barber 2012) at overlapping but distinct promoter sets
- [[sirt6]] — parallel nuclear sirtuin with strong aging phenotype (KO progeroid, OE lifespan extension); SIRT6 and SIRT7 both act on H3K18ac (Barber 2012 shows SIRT7-specific effect; SIRT6 deacetylation is at different genomic contexts); see SIRT6 for the cross-species activity story
- [[sirt3]] — mitochondrial sirtuin; the SIRT7-NRF1-mtUPR axis makes SIRT7 a functional upstream regulator of mitochondrial proteostasis that SIRT3 also maintains
- [[nrf1]] — transcription factor that **recruits SIRT7** to promoters of mitochondrial ribosomal protein and transcription factor genes; NRF1 is the targeting factor, not the downstream effector of SIRT7
- [[p53]] — SIRT7 deacetylates p53 in cardiomyocytes, restraining apoptosis; SIRT7 loss → p53 hyperactivation in heart
- [[unfolded-protein-response]] — SIRT7 governs mtUPR competence in HSCs (Mohrin 2015); distinct from ER UPR but converging on proteostasis
- [[mitohormesis]] — SIRT7-NRF1 axis feeds into the mitochondrial stress response network
- [[epigenetic-alterations]] — SIRT7-driven H3K122 desuccinylation (at DSBs) maintains genome integrity; SIRT7-driven H3K18 deacetylation (at Pol II promoters) maintains chromatin silencing; SIRT7 loss → DSB repair defects and de-repression of oncogenic programs
- [[stem-cell-exhaustion]] — SIRT7 loss → HSC quiescence failure → premature exhaustion (Mohrin 2015)
- [[loss-of-proteostasis]] — ribosome biogenesis quality control and mtUPR both impacted by SIRT7 decline
- [[cgas-sting]] — retrotransposon de-repression upon SIRT7 loss may activate cGAS-STING via cytoplasmic DNA; mechanistic link inferred, not directly demonstrated (#gap/no-mechanism)
- [[nampt]] — rate-limiting enzyme in NAD+ salvage; NAD+ availability limits SIRT7 catalytic activity, making NAMPT a functional upstream regulator of all sirtuins including SIRT7
- [[c-myc]] — key target of SIRT7-dependent H3K18 repression program at Myc target genes

## Pharmacology

No clinical-stage SIRT7-targeting compound exists. SIRT7 is currently druggability-tier 4 (no clinical drug or high-quality probe with demonstrated aging-context activity in vivo).

**Research-stage tools:**
- **97-D** — a cell-permeable SIRT7 inhibitor described in biochemical studies; selectivity profile vs other sirtuins not rigorously established in vivo; no lifespan or HSC-aging data
- **SRT1720** — a nominally SIRT1-selective activator that has off-target activity at SIRT7 in biochemical assays; not considered a SIRT7-specific tool

The upstream regulator [[nampt]] (NAMPT activators, NMN, NR) could increase cellular NAD+ and thereby boost SIRT7 catalytic activity, but this is a non-selective approach affecting all sirtuins and PARP enzymes simultaneously. No study has specifically attributed benefits of NAD+ supplementation to SIRT7-dependent mechanisms in aging.

#gap/dose-response-unclear — no in vivo dose-response data for any SIRT7-directed compound in an aging model.
#gap/long-term-unknown — no long-term safety or efficacy data for any SIRT7-modulating agent.

## Limitations and gaps

- #gap/needs-human-replication — Both major aging phenotypes (cardiac KO and HSC aging axis) are from Mus musculus. No human SIRT7 loss-of-function syndrome is known.
- #gap/needs-replication — The SIRT7-NRF1-mtUPR HSC aging mechanism (Mohrin 2015) has not been independently replicated.
- #gap/no-mechanism — The Arg388 methylation that inhibits deacetylase activity: the upstream methyltransferase is not fully characterized.
- #gap/no-mechanism — Whether Pol I activation by SIRT7 requires catalytic activity (deacylation) or acts via direct protein-protein scaffolding is unresolved.
- #gap/no-mechanism — The mechanistic link between SIRT7 loss → cGAS-STING activation via retrotransposon de-repression is an inference; the causal chain has not been experimentally demonstrated. Li 2016 does not address retrotransposons; if SIRT7's H3K18 deacetylation or H3K122 desuccinylation suppresses L1 elements, that requires a separate citation not yet present on this page.
- #gap/needs-canonical-id — `mr-causal-evidence: not-tested`; no Mendelian randomization study has used SIRT7 locus instruments as of the seeding date. GWAS instruments may exist (17q25.3 locus) but no MR study has been published.
- SIRT7 has two distinct histone substrates characterized by different papers: H3K18 deacetylation (Barber 2012, Nature, cancer/oncogenic context) and H3K122 desuccinylation (Li 2016, Nature Communications, DSB repair context). These are easily conflated in secondary literature; the two marks are on different residues with different functional consequences. Li 2016 does NOT characterize H3K18 desuccinylation.
- Vakhrusheva 2008 lifespan data: abstract confirms "reduction in mean and maximum lifespans" in Sirt7-/- mice on a mixed background, but specific median survival values (e.g., "12 months vs 24 months") cannot be confirmed from the abstract alone — paper is closed-access (#gap/no-fulltext-access for Vakhrusheva 2008 specifically).
- Li 2016 desuccinylase characterization was in Nature Communications (not Nature as sometimes cited in secondary literature) — confirmed correct in this wiki.

## Footnotes

[^ford2006]: [[studies/ford-2006-sirt7-pol1]] · doi:10.1101/gad.1399706 · in-vitro + cell-culture · n=N/A (biochemical + cell line studies) · model: HEK293T + U2OS + IMR90 human cells; mSIRT7 expressed in E. coli · SIRT7 localizes to transcriptionally active rDNA in nucleolus; co-immunoprecipitates with Pol I complex; SIRT7 overexpression increases pre-rRNA in dose-dependent manner; siRNA knockdown reduces pre-rRNA and causes apoptosis; **recombinant SIRT7 showed no detectable deacetylase or ADP-ribosyltransferase activity in vitro** — Pol I activation mechanism was unresolved in 2006 · Genes & Development 2006; 609 citations; OA (diamond); local PDF verified

[^vakhrusheva2008]: [[studies/vakhrusheva-2008-sirt7-cardiac-aging]] · doi:10.1161/CIRCRESAHA.107.164558 · PMID:18239138 · in-vivo · model: Sirt7-/- mice (mixed background) · reduced mean and maximum lifespans (specific months not stated in abstract); cardiac hypertrophy, inflammatory cardiomyopathy, 3-fold increase in collagen III accumulation; ~200% increase in basal apoptosis in Sirt7-/- primary cardiomyocytes; SIRT7 deacetylates p53 in vitro and p53 is hyperacetylated in vivo in KO hearts → increased cardiomyocyte apoptosis · Circulation Research 2008; 618 citations; closed access (not_oa in archive — lifespan-specific numbers unverified)

[^mohrin2015]: [[studies/mohrin-2015-sirt7-mtupr-hsc]] · doi:10.1126/science.aaa2361 · PMID:25792330 · PMC:PMC4447312 · in-vivo · model: mouse HSCs (SIRT7-/- and aged), transplantation assays · NRF1 recruits SIRT7 to mRP/mTF promoters to repress mitochondrial protein synthesis load; SIRT7-/- HSCs show increased proliferation (reduced quiescence, confirmed by BrdU), ~40% reduction in long-term hematopoietic reconstitution (n=7); SIRT7 expression reduced in aged HSCs; SIRT7 overexpression in aged HSCs improves reconstitution and reverses myeloid bias · Science 2015; 457 citations; closed access (not_oa in archive; full text verified via PMC4447312)

[^barber2012]: [[studies/barber-2012-sirt7-h3k18-myc]] · doi:10.1038/nature11043 · PMID:22722849 · PMC:PMC3412143 · in-vitro + cell-culture · model: cancer cell lines (MCF7, LNCaP, xenografts) + primary human cells; E1A transformation assay · SIRT7 is an NAD+-dependent H3K18Ac deacetylase; binds promoters of genes regulated by ETS transcription factor ELK4; H3K18 deacetylation represses tumor-suppressor-linked gene set; SIRT7 depletion reduces tumorigenicity of cancer cell xenografts; H3K18 hypoacetylation associated with aggressive tumor phenotypes and poor prognosis in patients · Nature 2012; 599 citations; closed access (not_oa in archive; abstract and metadata verified via PubMed PMID 22722849)

[^li2016]: [[studies/li-2016-sirt7-desuccinylase]] · doi:10.1038/ncomms12235 · in-vitro + cell-culture · model: MCF-7, U2OS, HEK293T, HCT116, HepG2, HeLa cells + biochemical assays with calf thymus histones · SIRT7 is an NAD+-dependent histone desuccinylase targeting **H3K122-succinylation** (not H3K18); recruited to DSBs in a PARP1-dependent manner; H3K122 desuccinylation promotes chromatin condensation and efficient DSB repair; SIRT7 depletion sensitizes cells to genotoxic stress · Nature Communications 2016; 375 citations; OA (gold); local PDF verified
