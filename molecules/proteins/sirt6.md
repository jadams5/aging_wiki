---
type: protein
aliases: [SIRT6, sirtuin-6, SIR2L6]
uniprot: Q8N6T7
ncbi-gene: 51548
hgnc: 14934
ensembl: ENSG00000077463
mouse-ortholog: Sirt6
genage-id: 239
key-domains: [sirtuin-type-deacylase, C-terminal-disordered-DNA-binding]
key-ptms: [Lys33-acetylation, Ser10-phosphorylation, sumoylation, Lys170-ubiquitination]
pathways: ["[[sirtuin]]", "[[dna-damage-response]]", "[[nf-kb-signaling]]", "[[igf1-signaling]]"]
hallmarks: ["[[genomic-instability]]", "[[epigenetic-alterations]]", "[[deregulated-nutrient-sensing]]", "[[chronic-inflammation]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 2
caused-by: ["[[nampt]]"]
causes: ["[[genomic-instability]]", "[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "DOI sanity verified against DOI lookup for all 5 cited DOIs (Mostoslavsky 2006 cell.2005.11.044, Kanfi 2012 nature10815, Mao 2011 science.1202723, Tian 2019 cell.2019.03.043, Huang 2018 s41589-018-0150-0); the user-flagged DOI correction (Huang 2018 → -0150-0) is correctly carried through. Wikilinks spot-checked. Quantitative claims (lifespan extension percentages, kcat values, citation counts) NOT cross-checked against primary PDFs — synthesis-style content lint only; no local PDFs available."
---

# SIRT6

A nuclear, chromatin-associated NAD+-dependent deacylase that is one of the most aging-relevant members of the sirtuin family. SIRT6 maintains genome integrity at telomeres and double-strand break (DSB) sites, represses NF-κB-driven inflammation, and regulates glucose metabolism. Loss of SIRT6 in mice produces a severe progeroid syndrome; overexpression extends male lifespan. Long-lived species have evolved more potent SIRT6 variants, directly linking SIRT6 activity level to lifespan across mammals.

## Identity

- **UniProt:** Q8N6T7 (SIR6_HUMAN)
- **NCBI Gene:** 51548
- **HGNC symbol:** SIRT6
- **Ensembl:** ENSG00000077463
- **Mouse ortholog:** Sirt6 (Mus musculus)
- **GenAge ID:** 239 (GenAge-human; evidence from mammalian model organism studies)
- **Length:** 355 amino acids (canonical isoform)
- **Chromosome location:** 19p13.3

## Functional domains and structure

SIRT6 has two structurally defined regions:

- **Sirtuin-type deacylase domain** (residues 27–272) — the catalytic core; binds NAD+ and coordinates a single Zn2+ ion essential for activity; houses substrate-binding groove
- **C-terminal disordered region** (residues 284–355) — mediates non-specific dsDNA binding; required for chromatin recruitment and DSB recognition via a tunnel-like structure

Lys33 acetylation (reversed by [[sirt1]]) inhibits DSB binding, providing cross-regulatory coupling between SIRT6 and SIRT1. Ser10 phosphorylation by MAPK8/JNK1 enhances PARP1 recruitment under oxidative stress. Sumoylation represses H3K56ac deacetylase activity; Lys170 ubiquitination (regulated by STUB1 and USP10) controls protein stability.

## Enzymatic activities

SIRT6 is unusual among sirtuins in having three distinct catalytic modes, all NAD+-dependent:

### 1. NAD+-dependent deacetylase (weak)

Removes acetyl groups from lysine residues of histone and non-histone substrates. Catalytic efficiency is **~1000-fold lower** than for fatty-acyl substrates in vitro. Primary histone substrates:

- **H3K9ac** — at telomeric and subtelomeric chromatin; maintains heterochromatin and telomere length
- **H3K18ac** — at promoters of ribosomal RNA genes; represses rDNA transcription
- **H3K56ac** — at DSB sites; SIRT6-mediated deacetylation promotes chromatin compaction after repair

Non-histone substrates include NF-κB p65 (deacetylation at Lys310 → transrepression; see below) and GCN5/KAT2A (which in turn acetylates SIRT6 at Lys33, forming a feedback loop).

### 2. NAD+-dependent defatty-acylase (primary activity)

Removes long-chain acyl groups (myristoyl C14, palmitoyl C16) from lysine residues. Activity is **~10-fold higher** than deacetylation in vitro (Km ~3.4 µM for myristoylated peptide; kcat ~0.0049 s-1). Substrates include TNF-alpha (demyristoylation promotes secretion), providing a distinct inflammatory regulatory mechanism. This activity likely accounts for the bulk of SIRT6's physiological NAD+ consumption.

### 3. Mono-ADP-ribosyltransferase

Mono-ADP-ribosylates lysine and arginine residues; relevant at DSB sites for PARP1 stimulation (see DNA repair section). Physiological importance in vivo is less well characterized than the deacylase activities.

## Role in aging

### Progeroid phenotype in Sirt6-knockout mice

The foundational aging-relevance paper showed that Sirt6-/- mice on a mixed C57BL/6 background are born at Mendelian ratios but rapidly deteriorate: by 2–3 weeks of age they exhibit loss of subcutaneous fat, lordokyphosis, lymphopenia, severe hypoglycemia, and metabolic wasting [^mostoslavsky2006]. Animals die by approximately 4 weeks. The phenotype is not a clean recapitulation of normal aging but rather an accelerated degenerative syndrome with features of genomic instability — increased DNA damage markers, elevated colonic polyp formation, and metabolic failure. The paper established that mammalian SIRT6 is essential for normal metabolic and genomic homeostasis.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | SIRT6 is highly conserved; same substrates (H3K9ac, H3K56ac) identified in human cells |
| Phenotype conserved in humans? | partial | No human SIRT6-null syndrome documented; rs107251 minor allele homozygosity associated with ~5.5–5.9 year lifespan reduction (UniProt; not independently verified here) |
| Replicated in humans? | no | Progeroid phenotype is mouse-only; human GWAS data are weak and observational |

#gap/needs-human-replication — the progeroid knockout phenotype is entirely from Sirt6-/- mice; no human loss-of-function syndrome replicates it.

### Lifespan extension by SIRT6 overexpression (male-specific)

Transgenic male mice overexpressing Sirt6 lived approximately 14.5% longer than WT controls in one line and approximately 10% longer in a second independent line (combined analysis reported ~15% in males) [^kanfi2012]. Female transgenics did not show lifespan extension in the original study, a sex-specific result that remains unexplained. The paper proposed that SIRT6-dependent repression of IGF1 signaling (particularly in the liver) underlies male lifespan extension, consistent with the well-established pro-longevity effects of reduced insulin/IGF1 signaling in mammals. #gap/needs-replication — lifespan extension in males has not been independently replicated in a different lab as of this writing.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | IGF1 signaling is conserved; SIRT6 regulates hepatic IGF1 output in human liver cells |
| Phenotype conserved in humans? | unknown | No human overexpression equivalent; observational data weak |
| Replicated in humans? | no | No human trial or Mendelian randomization result confirms lifespan extension |

#gap/needs-human-replication — SIRT6 overexpression lifespan data are entirely from Mus musculus.

## DNA damage repair

SIRT6 is recruited to DSB sites within seconds of damage, where it performs multiple functions that promote both homologous recombination (HR) and non-homologous end joining (NHEJ):

- Deacetylates H3K56ac at the break, enabling local chromatin compaction and stabilization of repair factors
- Promotes SNF2H (SMARCA5) and CHD4 recruitment, remodeling chromatin to expose break ends
- Stimulates PARP1 activity via mono-ADP-ribosylation, amplifying the early DNA damage response and enhancing BER (base excision repair) at oxidative lesions [^mao2011]

The Mao 2011 paper demonstrated that SIRT6 activates PARP1 under oxidative stress, boosting BER efficiency. This is mechanistically distinct from the histone deacetylation function and links SIRT6 to the cellular oxidative damage repair axis.

## Cross-species SIRT6 activity and lifespan

A striking comparative biology result: SIRT6 orthologs from longer-lived mammalian species have intrinsically more potent DSB repair activity than those from shorter-lived species [^tian2019]. The naked mole rat (Heterocephalus glaber; 30+ year maximum lifespan) SIRT6 is markedly more active than mouse SIRT6 in recruiting DNA repair factors and promoting HR. Bowhead whale SIRT6 showed even higher activity. This suggests that evolutionary selection for longevity has operated directly on SIRT6 catalytic efficiency, making it a molecular correlate of species lifespan — a result with implications for therapeutic target validation.

See [[heterocephalus-glaber]] for additional NMR aging biology.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Human SIRT6 retains the same DSB-repair functions |
| Phenotype conserved in humans? | partial | Human SIRT6 activity level is intermediate between mouse and NMR; not directly measured against longevity |
| Replicated in humans? | no | Comparative biology finding; no human intervention equivalent |

## NF-κB regulation and inflammation

SIRT6 deacetylates NF-κB subunit p65 at Lys310, evicting it from target gene promoters and reducing transcription of pro-inflammatory cytokines. This places SIRT6 at the junction of the [[nf-kb-signaling]] and [[chronic-inflammation]] axes. With age, declining SIRT6 expression and/or NAD+ availability may contribute to the upregulation of NF-κB-driven inflammatory gene expression seen in aged tissues (inflammaging phenotype). #gap/no-mechanism — the precise causal chain from age-related SIRT6 decline → NF-κB activation in vivo in humans is not yet established.

## Metabolic regulation

SIRT6 represses glycolysis by co-repressing HIF-1alpha at the promoters of multiple glycolytic genes, consistent with its tumor-suppressive role (Warburg effect repression). In the liver, SIRT6 suppresses gluconeogenic gene expression via interaction with the coactivator PGC-1alpha. Sirt6-/- hepatocytes show markedly increased glucose uptake and lactate production. The metabolic phenotype of knockout mice (severe hypoglycemia, fat wasting) reflects this transcriptional role. SIRT6 activity thus connects nutrient sensing — through NAD+ levels as a proxy for cellular energy state — to chromatin-level metabolic gene control. See [[nampt]] for the biosynthetic pathway supplying the NAD+ cofactor.

## Pharmacology

### MDL-800 (SIRT6 activator)

MDL-800 is the first reported cellularly active small-molecule SIRT6 allosteric activator [^huang2018]. It binds an allosteric site on SIRT6 and increases deacetylase activity up to ~22-fold in biochemical assays. In cell-based experiments, MDL-800 treatment reduced H3K56ac levels, consistent with on-target SIRT6 activation, and showed anti-proliferative effects in cancer cell lines (proposed to act via SIRT6's tumor-suppressive function). Anti-aging therapeutic utility has not been demonstrated in vivo in lifespan studies. #gap/needs-human-replication — MDL-800 has only been tested in cell culture and short-term mouse experiments; no lifespan or healthspan data exist.

### Upstream regulators

- **[[nampt]]** (NAMPT) — rate-limiting enzyme in the salvage pathway of NAD+ biosynthesis; NAMPT activity determines cellular NAD+ levels and thus SIRT6 catalytic capacity
- **SIRT1** — deacetylates SIRT6 at Lys33, activating DSB repair activity; bidirectional regulatory coupling
- **GCN5/KAT2A** — acetylates SIRT6 at Lys33 (inhibitory), forming a negative feedback to DSB recruitment

## Cross-references

- [[sirtuin]] — parent class; SIRT6 is a Class IV sirtuin (nucleus-localized, deacylase-dominant)
- [[sirt1]] — SIRT1 both cooperates with SIRT6 (Lys33 deacetylation) and has partially overlapping aging functions
- [[nampt]] — provides the NAD+ required for SIRT6 catalysis; NAMPT decline in aging may limit SIRT6 activity
- [[genomic-instability]] — primary hallmark driven by SIRT6 loss
- [[epigenetic-alterations]] — SIRT6 shapes the histone acetylation landscape at chromatin
- [[deregulated-nutrient-sensing]] — SIRT6 connects NAD+ metabolism to IGF1 and HIF-1alpha signaling
- [[chronic-inflammation]] — SIRT6 represses NF-κB; loss promotes inflammaging
- [[heterocephalus-glaber]] — NMR SIRT6 has higher intrinsic DSB repair activity, correlating with extreme longevity
- [[mus-musculus]] — primary model organism for SIRT6 lifespan experiments
- [[nf-kb-signaling]] — SIRT6 p65 deacetylation axis
- [[dna-damage-response]] — SIRT6 is an early DSB responder
- [[igf1-signaling]] — SIRT6 regulates hepatic IGF1 output (proposed mechanism of lifespan extension)

## Limitations and gaps

- #gap/needs-human-replication — All lifespan data (both KO progeroid syndrome and OE lifespan extension) are from Mus musculus. Human GWAS associations are small-effect and observational.
- #gap/needs-replication — Male lifespan extension (Kanfi 2012) has not been independently replicated in a separate laboratory.
- #gap/contradictory-evidence — Female Sirt6-overexpressing mice showed no lifespan extension in Kanfi 2012; mechanism of sex specificity is unexplained and has not been resolved.
- #gap/dose-response-unclear — MDL-800 cellular dosing for optimal SIRT6 activation without toxicity is not established in vivo.
- #gap/long-term-unknown — No long-term safety or efficacy data exist for any SIRT6 activator compound in any in vivo lifespan model.
- #gap/no-mechanism — The molecular mechanism by which SIRT6 overexpression specifically extends male but not female lifespan is unknown.
- The defatty-acylase activity (dominant in vitro) may account for more physiological substrate interactions than currently appreciated — most functional studies focus on deacetylase activity because histone substrates are easier to assay.

## Footnotes

[^mostoslavsky2006]: [[studies/mostoslavsky-2006-sirt6-progeroid]] · doi:10.1016/j.cell.2005.11.044 · in-vivo · model: Sirt6-/- mouse (C57BL/6 × 129 mixed) · progeroid phenotype, death by ~4 weeks, hypoglycemia, lymphopenia; foundational SIRT6 loss-of-function study · Cell 2006; 1597 citations

[^kanfi2012]: [[studies/kanfi-2012-sirt6-lifespan]] · doi:10.1038/nature10815 · in-vivo · model: Sirt6-overexpressing transgenic mice · ~14.5% and ~10% median lifespan extension in two independent male lines; no extension in females · Nature 2012; 1042 citations; closed access (no local PDF)

[^mao2011]: [[studies/mao-2011-sirt6-parp1-ber]] · doi:10.1126/science.1202723 · in-vivo + in-vitro · model: MEFs and mouse tissues · SIRT6 activates PARP1 under oxidative stress; promotes BER · Science 2011; 846 citations

[^tian2019]: [[studies/tian-2019-sirt6-longevity-species]] · doi:10.1016/j.cell.2019.03.043 · in-vitro + comparative · model: SIRT6 orthologs from mammals of varying lifespan (NMR, bowhead whale, mouse, human) · NMR SIRT6 shows higher DSB repair activity than mouse SIRT6; activity correlates positively with species max lifespan · Cell 2019; 344 citations

[^huang2018]: [[studies/huang-2018-mdl800-sirt6-activator]] · doi:10.1038/s41589-018-0150-0 · in-vitro + cell-culture · model: HCT116 and other cancer cell lines · MDL-800 activates SIRT6 deacetylase ~22-fold; reduces H3K56ac; anti-proliferative activity · Nat Chem Biol 2018; 256 citations; closed access (no local PDF)
