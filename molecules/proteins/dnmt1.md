---
type: protein
aliases: [DNA methyltransferase 1, DNA (cytosine-5)-methyltransferase 1, DNMT1, MCMT]
uniprot: P26358
ncbi-gene: 1786
hgnc: 2976
ensembl: ENSG00000130816
mouse-ortholog: Dnmt1
key-domains: [DMAP1-binding, RFTS, CXXC-zinc-finger, BAH1, BAH2, SAM-MTase-C5]
key-ptms: [Lys142-methyl-SETD7, Ser-phosphorylation, Lys-acetylation, sumoylation, ubiquitination]
pathways: ["[[dna-methylation]]"]
hallmarks: ["[[epigenetic-alterations]]"]
known-interactors: ["[[uhrf1]]", "[[dnmt3a]]", "[[sirt1]]", "[[dnmt3l]]"]
genage-id: null
druggability-tier: 2
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[epigenetic-alterations]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Klein 2011 and Sharif 2007 verified end-to-end against local PDFs; Bocklandt 2011 verified end-to-end against local PDF (just downloaded). Song 2010 unverifiable (PDF unavailable; download failed — not fetchable via PMC). Bostick 2007 and Bestor 1988 not_oa. Winkelmann 2012 pending (unverified). UniProt P26358 domain boundaries re-verified against live UniProt API — all match. GenAge null confirmed via live query."
---


# DNMT1

**Maintenance DNA methyltransferase** responsible for copying CpG methylation patterns from parent to daughter strand at each replication cycle. DNMT1 does not establish methylation de novo — that role belongs to [[dnmt3a]] and DNMT3B — but it is the enzyme that prevents epigenetic information from being diluted by cell division. By preferentially methylating hemimethylated CpG dinucleotides (one strand methylated, one not) at the replication fork, DNMT1 preserves tissue-specific methylation programs across decades of cell renewal [^bestor1988]. In aging, the progressive functional decline of DNMT1 — through reduced expression, altered localization, or post-translational modification — is a central mechanistic candidate for age-related methylation changes that contribute to the [[epigenetic-alterations]] hallmark. Bocklandt et al. demonstrated that methylation at specific loci (e.g., EDARADD, TOM1L1, NPTX2 promoters) changes directionally and linearly with age in human saliva [^bocklandt2011]; notably, however, they did not find evidence of stochastic epigenetic drift diverging within monozygotic twin pairs (p>0.1 for genome-wide intra-pair distance vs. age). #gap/no-mechanism — the causal link between DNMT1 copying fidelity and the directional locus-specific methylation changes documented by Bocklandt 2011 has not been established.

## Identity

- **UniProt:** P26358 (DNMT1_HUMAN) — Swiss-Prot curated, accessed 2026-05-07
- **NCBI Gene:** 1786
- **HGNC symbol:** DNMT1
- **Ensembl:** ENSG00000130816
- **Mouse ortholog:** Dnmt1 (one-to-one; highly conserved across domain architecture)
- **Length:** 1,616 amino acids (~183 kDa)
- **GenAge:** Not listed as a curated aging gene; DNMT1 aging relevance is mechanistic (maintenance-methylation fidelity) rather than a longevity-QTL gene in model organisms. Confirmed via live GenAge query (Build 21, 2023): "no matching results found" for DNMT1. `genage-id: null` is correct.

## Domain structure

DNMT1 is organized into a large N-terminal regulatory region and a C-terminal catalytic domain [^uniprot-p26358]:

| Domain | Residues | Function |
|---|---|---|
| DMAP1-binding | 16–109 | Recruits co-repressor DMAP1; transcriptional silencing at replication foci |
| RFTS (Replication Foci Targeting Sequence) | 400–533 | Targets DNMT1 to replication foci during S-phase; acts as **autoinhibitory domain** by folding into the catalytic site when substrate is absent |
| CXXC zinc finger | 646–692 | Binds unmethylated CpG-containing DNA; contributes to allosteric regulation |
| BAH1 (Bromo-Adjacent Homology 1) | 755–880 | Protein–protein interaction; binds modified histones |
| BAH2 | 972–1100 | Structural; contributes to inter-domain communication |
| SAM-MTase C5 (catalytic) | 1139–1599 | Transfers methyl group from S-adenosylmethionine to cytosine C5 |

The **RFTS autoinhibition mechanism** is structurally characterized: in the apo state, the RFTS domain occupies the DNA-binding cleft of the catalytic domain, blocking substrate access. Binding of hemimethylated DNA (guided by UHRF1; see below) displaces the RFTS and relieves autoinhibition, activating the enzyme at replication forks [^song2010].

## Function: the maintenance methylation cycle

DNMT1 acts within a multiprotein replication-fork complex. The key steps [^bostick2007][^sharif2007]:

1. **UHRF1 (Np95) reads hemimethylated CpG.** As the replication fork creates a daughter strand, parental-strand methylation generates hemimethylated CpG sites. UHRF1's SRA (SET- and RING-Associated) domain specifically recognizes the 5-methylcytosine on the parental strand while the orphaned cytosine on the daughter strand is accommodated in a binding pocket.
2. **UHRF1 recruits DNMT1.** UHRF1 forms complexes with DNMT1 and PCNA at replicating heterochromatin [^sharif2007]. Structural work subsequent to Sharif 2007 has shown UHRF1 uses its tandem Tudor and PHD finger domains to engage histone tails, but the specific recruitment mechanism was not resolved in Sharif 2007. #gap/needs-replication — UHRF1 recruitment detail beyond complex formation requires structural studies not available in the Sharif 2007 primary source.
3. **DNMT1 methylates the daughter strand.** Activated (autoinhibition relieved), DNMT1 transfers a methyl group from SAM to the cytosine on the daughter strand, restoring symmetric CpG methylation.
4. **Cycle completion.** The newly symmetrically methylated site dissociates, DNMT1 moves processively, and the pattern is faithfully copied.

Without DNMT1 activity, cells lose methylation at a rate of approximately 50% per division through passive dilution — a process called **replication-dependent passive demethylation**. In long-lived post-mitotic tissues (neurons) DNMT1 is still expressed and likely performs a non-replicative maintenance role, though its exact function in post-mitotic cells is less well characterized. #gap/no-mechanism

| Dimension | Status | Notes |
|---|---|---|
| Hemimethylation reading by UHRF1 conserved in humans? | yes | SRA domain mechanism demonstrated in human and murine cells |
| RFTS autoinhibition conserved? | yes | Structural data from multiple species; functional in human cell lines |
| Replicated in humans? | yes | Knockout studies not possible; genetic disease and biochemical data confirm the mechanism |

## Key PTMs

DNMT1 stability and activity are regulated by multiple post-translational modifications [^uniprot-p26358]:

- **Lys-142 methylation by SETD7** — marks DNMT1 for proteasomal degradation; links histone methylation cross-talk to DNMT1 turnover
- **Deacetylation by SIRT1** — SIRT1 has been reported to stabilize DNMT1 by preventing acetylation-driven degradation; connects nutrient/stress sensing to maintenance methylation fidelity (see SIRT1 cross-talk below) #gap/needs-replication
- **Serine phosphorylation** — multiple sites regulated through the cell cycle; S154 phosphorylation promotes degradation in G2/M
- **Sumoylation** — reported to increase enzymatic activity
- **Ubiquitination/deubiquitination** — bidirectional regulation of stability at replication foci

## Mutations and disease

### HSAN1E — hereditary sensory and autonomic neuropathy type 1E

Heterozygous missense mutations in the TS (targeting sequence) domain of DNMT1 — specifically **p.Tyr495Cys** (c.A1484G) and **p.Asp490Glu-Pro491Tyr** (c.1470TCC-1472ATA, a triple nucleotide substitution causing two amino acid changes on one allele) — cause HSAN1 with dementia and hearing loss [^klein2011]. The mutant TS domain forms inclusion bodies (misfolded) rather than entering the nucleus, causes premature degradation of full-length DNMT1, reduces methyltransferase activity, and abolishes heterochromatin binding after S phase — the mutant localizes normally to replication foci during S phase but fails to bind heterochromatin during G2 phase, when wild-type DNMT1 is persistently associated [^klein2011]. The net effect is global hypomethylation (~8% reduction in 5-mdC in affected vs. unaffected Kindred-1 members, p<0.001) with local site-specific hypermethylation. Disease is adult-onset, progressive, and involves:
- Sensorineural deafness (onset typically ages 20–35)
- Progressive cognitive decline and dementia (onset typically 30s–40s)
- Sensory neuropathy (impaired pain/temperature sensation; loss of ambulation)

The molecular mechanism is consistent with the essential-maintenance-methylation model: DNMT1 haploinsufficiency (functionally, given dominant-negative or hypomorphic TS-domain mutations) permits accumulation of methylation errors at heterochromatic loci in long-lived neurons that require decades of methylation maintenance, ultimately causing neurodegeneration. This is a proof-of-principle that maintenance methylation fidelity is required for adult tissue homeostasis over the human lifespan.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — human genetics |
| Phenotype conserved in humans? | yes — adult-onset neurodegeneration in DNMT1-mutation carriers |
| Replicated in humans? | yes (Klein 2011 original report; subsequent case series) |

### ADCA-DN — autosomal dominant cerebellar ataxia, deafness, and narcolepsy

A distinct RFTS mutation cluster (positions 554, 589, 590) causes ADCA-DN, with adult-onset cerebellar ataxia, sensorineural deafness, and narcolepsy [^winkelmann2012]. The clinical overlap with HSAN1E (deafness, narcolepsy) but distinct neurological predominance (cerebellar ataxia vs. sensory neuropathy + dementia) reflects position-dependent effects within the RFTS autoinhibitory domain — different mutations perturb DNMT1 refolding and substrate recognition to different degrees, with distinct cell-type vulnerability profiles. #gap/no-mechanism — the exact reasons why different RFTS mutations preferentially affect different neuronal populations are not fully established.

## Aging context: epigenetic drift

### DNMT1 and age-related methylation changes

Age-related methylation changes in mammalian tissues are well-documented: site-specific hypermethylation at CpG islands (silencing of tumor-suppressor and developmental genes) coexists with global hypomethylation of repetitive elements (loss of heterochromatic silencing). DNMT1 is implicated in both arms:

- **Hypermethylation** — aberrant DNMT1 recruitment to gene promoters through age-altered chromatin modifications (e.g., Polycomb-mediated H3K27me3 redistribution) can establish de facto methylation at loci previously kept unmethylated
- **Hypomethylation of repeats** — progressive decline in DNMT1 expression or processivity in some aging tissues allows passive demethylation of satellite repeats (LINE-1, IAP elements), potentially derepressing transposable elements

The concept of **epigenetic drift** — the stochastic divergence of methylation states between genetically identical cells over time — is partly attributable to imperfect copying fidelity by DNMT1. Even a small per-replication error rate (estimated ~10^-4 per CpG per division in some contexts) accumulates significantly over decades and many cell divisions [^shah2014]. DNMT1 fidelity is therefore an intrinsic rate-limiter on epigenetic stability across the lifespan. #gap/no-mechanism — the quantitative contribution of DNMT1 copying errors (vs. active demethylation, chromatin remodeling, or transcription-factor-driven changes) to the observed age-related drift has not been cleanly partitioned.

### SIRT1 cross-talk

Multiple reports link SIRT1 deacetylase activity to DNMT1 stability and/or localization in the context of aging and caloric restriction. The proposed mechanism: SIRT1 deacetylates DNMT1 (or DNMT1-associated histones), stabilizing DNMT1 at heterochromatin and maintaining methylation patterns under metabolic stress. Caloric restriction, which activates SIRT1, may thereby slow methylation drift by preserving DNMT1 function. #gap/needs-replication — the direct SIRT1-DNMT1 interaction and its aging-specific functional consequences have not been demonstrated in a clean primary study with adequate controls; most evidence is correlative or in specialized cell-culture systems. The claim is plausible but unverified at the mechanistic level.

See [[sirt1]] for SIRT1's broader role in epigenetic maintenance.

## Druggability

Druggability-tier: **2** (aging-context convention per CLAUDE.md R26/R27).

**Rationale:** DNMT inhibitors — specifically **decitabine** (5-aza-2'-deoxycytidine) and **azacitidine** (5-azacytidine) — are FDA-approved for myelodysplastic syndrome and AML. Both act as mechanism-based covalent inhibitors: they incorporate into DNA, trap DNMT1 in a covalent adduct, and cause proteasomal degradation of DNMT1. This results in global passive demethylation.

For aging applications, this mechanism is problematic:
- The effect (global hypomethylation) mirrors and worsens the age-related drift being targeted
- Covalent trapping causes prolonged DNMT1 depletion — difficult to tune for subtle re-setting of specific loci
- Toxicity and mutagenicity concerns preclude use in healthy aging-associated prevention contexts

No aging-indication-validated DNMT1 modulator exists. Tier 1 would require a compound that corrects DNMT1 fidelity/targeting without global hypomethylation — no such tool exists as of 2026-05-07. Tier 2 reflects: clinical drug targeting DNMT1 exists (decitabine/azacitidine) but only in an oncology context; the mechanism is not aging-tractable as-is.

## Cross-references

- [[dnmt3a]] — de novo methyltransferase; the two enzymes cooperate (DNMT3A establishes new methylation; DNMT1 maintains it across replication). Paired page; see for CHIP biology and somatic mutation aging relevance.
- [[uhrf1]] — essential DNMT1 cofactor; reads hemimethylated CpG and recruits DNMT1 to replication forks (implicit stub)
- [[sirt1]] — deacetylase reported to stabilize DNMT1 and modulate maintenance methylation under metabolic stress
- [[dna-methylation]] — pathway page covering the broader methylation/demethylation cycle (implicit stub)
- [[epigenetic-alterations]] — Hallmark of Aging; DNMT1 dysfunction → methylation drift is a central mechanism
- [[horvath-clock-2013]] — pan-tissue epigenetic clock; built on CpG methylation maintained by DNMT1
- [[tet2]] — active demethylation enzyme (TET family); functionally opposed to DNMT1 on the methylation/demethylation axis
- [[clonal-hematopoiesis]] — DNMT3A (not DNMT1) is the dominant CHIP driver, but methylation maintenance context is shared

## Limitations and gaps

- GenAge null confirmed — DNMT1 not in GenAge Build 21 (2023); `genage-id: null` is correct per live query.
- `#gap/needs-replication` — SIRT1-DNMT1 direct interaction and its functional significance in aging tissues is inferred from correlative studies; direct mechanistic evidence is insufficient as of 2026-05-07.
- `#gap/no-mechanism` — quantitative partitioning of DNMT1 copying errors vs. active demethylation vs. chromatin remodeling as drivers of age-related methylation drift has not been established. Note: Bocklandt 2011 explicitly failed to find stochastic intra-twin-pair drift; causal link to DNMT1 fidelity is mechanistic inference only.
- `#gap/no-mechanism` — cell-type-specific vulnerability to TS-domain mutations (HSAN1 with dementia+deafness vs. ADCA-DN) is not mechanistically explained at the level of downstream targets or network effects. Winkelmann 2012 (ADCA-DN source) remains unverified — PDF pending.
- `#gap/no-fulltext-access` — Song 2010 (doi:10.1126/science.1195380) on RFTS autoinhibition structural mechanism is not_oa and PDF download failed. RFTS autoinhibition claim on this page attributed to Song 2010 is unverified against the primary source.
- `#gap/needs-human-replication` — DNMT1 expression decline in aging tissues (reported in rat liver, mouse brain) has not been systematically quantified in human tissue across age groups; GTEx-based expression-age correlation not populated.
- `gtex-aging-correlation:` not populated — see `sops/finding-tissue-expression.md` for GTEx v2 protocol.
- `mr-causal-evidence: not-tested` — no Mendelian randomization study has used germline DNMT1 variants as instruments for aging outcomes. Unlike DNMT3A, DNMT1 aging relevance is not primarily through somatic mutation (no CHIP driver role), so MR is methodologically applicable but has not been performed.
- `druggability-tier: 2` — aging-context tier confirmed. Open Targets Platform query (ENSG00000130816) confirms "Approved Drug (SM) = true" (max-druggability tier 1), but aging-context per CLAUDE.md R26/R27 convention is tier 2: decitabine/azacitidine approved for MDS/AML, not for aging indications. Tier 2 assignment is correct and verified.

## Footnotes

[^bestor1988]: doi:10.1016/0022-2836(88)90122-2 · Bestor T et al. · *J Mol Biol* 1988 · foundational DNMT1 cloning paper from mouse cells; established the enzyme as the principal maintenance methyltransferase · review · model: murine (Mus musculus) · PDF: not_oa (archive status)
[^sharif2007]: doi:10.1038/nature06397 · n=not applicable (biochemical + cell-line study; multiple Dnmt-knockout ESC lines; Np95-null embryos) · in-vitro + in-vivo (murine ESCs; Np95/UHRF1 conditional knockout; restriction-enzyme sensitivity assay; bisulfite sequencing; immunofluorescence) · Sharif J et al. · *Nature* 2007 · showed Np95 (UHRF1) localization to replicating heterochromatin is dependent on hemimethylated DNA; Np95 forms complexes with Dnmt1 and PCNA at replication foci; Np95-null cells lose global methylation to a level comparable to Dnmt1-null ESCs; Dnmt1 catalytic activity is unchanged in Np95-null cells, establishing recruitment (not activation) as the mechanism · model: murine ESCs + mouse embryos · PDF: local copy available
[^bostick2007]: doi:10.1126/science.1147939 · n=not applicable (biochemical + mammalian cell study) · in-vitro + in-vivo · Bostick M et al. · *Science* 2007 · independently demonstrated UHRF1 SRA domain binds hemimethylated DNA and is required for DNMT1 recruitment and maintenance methylation · model: human + mouse cell lines · PDF: not_oa (archive status)
[^klein2011]: doi:10.1038/ng.830 · observational (human genetics; exome + Sanger sequencing; 4 HSAN1 kindreds; n=24 affected + 12 genetically-related unaffected samples from Kindred-1 for methylation analysis) · Klein CJ et al. · *Nature Genetics* 2011 · identified two heterozygous DNMT1 TS-domain mutations in HSAN1: p.Tyr495Cys (c.A1484G; Kindreds 1, 3, 4) and p.Asp490Glu-Pro491Tyr (c.1470TCC-1472ATA triple nucleotide change; Kindred 2); both mutations cause misfolding, premature DNMT1 degradation, reduced methyltransferase activity, and loss of heterochromatin binding after S phase; 8% global hypomethylation (p<0.001) with local hypermethylation in affected vs. unaffected · model: human · PDF: local copy available
[^winkelmann2012]: doi:10.1093/hmg/dds035 · observational (human genetics; exome sequencing of ADCA-DN pedigrees) · Winkelmann J et al. · *Hum Mol Genet* 2012 · identified distinct DNMT1 RFTS mutation cluster (positions 554, 589, 590) causing ADCA-DN with cerebellar ataxia, deafness, narcolepsy · model: human · PDF: pending (archive status)
[^song2010]: doi:10.1126/science.1195380 · in-vitro (biochemical; X-ray crystallography; enzyme kinetics) · Song J et al. · *Science* 2010 · crystal structure of DNMT1 in complex with hemimethylated DNA; defined the RFTS autoinhibitory mechanism · model: in-vitro · PDF: not_oa (download failed — no PMC candidate URLs; closed Science subscription article) · #gap/no-fulltext-access — RFTS autoinhibition mechanism on wiki page unverified against this source
[^bocklandt2011]: doi:10.1371/journal.pone.0014821 · n=34 pairs (68 individuals) discovery cohort + 60 replication (31 male, 29 female); saliva DNA; ages 18–70 · observational · Bocklandt S et al. · *PLoS ONE* 2011 · identified 88 CpG sites (80 genes) whose methylation in saliva correlates with age; built 2-cytosine model explaining 73% of age variance (avg error 5.2 yr); importantly did NOT find stochastic epigenetic drift within MZ twin pairs (p>0.1); found directional locus-specific changes · model: human · PDF: local copy available
[^shah2014]: doi:10.1101/gr.176933.114 · n=168 (longitudinal blood samples, 6–10 yr follow-up) · observational (longitudinal) · Shah S et al. · *Genome Res* 2014 · showed epigenetic drift at specific CpG sites is constrained by genetic and environmental factors but accumulates measurably over years; estimated site-specific drift rates · model: human · PDF: pending (archive status)
[^uniprot-p26358]: UniProt P26358 (DNMT1_HUMAN), Swiss-Prot curated — domain boundaries re-verified against live UniProt REST API on 2026-05-07: DMAP1-binding [16-109], RFTS [400-533], CXXC zinc finger [646-692], BAH1 [755-880], BAH2 [972-1100], SAM-MTase C5 [1139-1599] — all match wiki table exactly. PTM sites and disease associations not independently re-verified against live database in this pass.
