---
type: protein
aliases: [FFAR3, free fatty acid receptor 3, FFA3R, GPCR41, GPR41]
uniprot: O14843
ncbi-gene: 2865
hgnc: 4499
ensembl: ENSG00000185897
genage-id: null
mouse-ortholog: Gpr41
pathways: ["[[scfa-signaling]]", "[[g-protein-coupled-receptor-pathway]]"]
hallmarks: ["[[chronic-inflammation]]", "[[dysbiosis]]", "[[deregulated-nutrient-sensing]]"]
sens-categories: []
known-interactors: ["[[gpr43]]", "[[gpr109a]]"]
druggability-tier: null
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: ["[[dysbiosis]]"]
causes: ["[[chronic-inflammation]]", "[[deregulated-nutrient-sensing]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Kimura 2011, Brown 2003, Le Poul 2003, Samuel 2008, and Tolhurst 2012 primary-source PDFs verified against claims. Nøhr 2015 is not_oa — ganglia expression claims tagged #gap/no-fulltext-access. Canonical-database identity fields (UniProt O14843, NCBI Gene 2865, HGNC 4499, Ensembl ENSG00000185897) not independently re-verified against databases on this pass."
---

> Auto-extracted by Claude on 2026-05-06. Verify quantitative claims and source attributions against primary sources [UniProt O14843; DOIs: 10.1074/jbc.M211609200, 10.1073/pnas.1016088108, 10.1073/pnas.0808567105, 10.2337/db11-1019, 10.1210/en.2013-1142].

# GPR41 (FFAR3)

**GPR41** (also FFAR3 — free fatty acid receptor 3) is a Gαi/o-coupled GPCR that senses short-chain fatty acids (SCFAs) produced by colonic microbiota. Its preferred ligand is propionate (C3), followed by butyrate (C4), valerate (C5), and acetate (C2) in decreasing potency. GPR41 is most abundantly expressed in sympathetic ganglia, where it couples microbial fermentation products directly to autonomic outflow, energy expenditure, heart rate, and thermogenesis. In the context of aging, GPR41 is a critical transducer of the gut microbiome-to-periphery communication axis; the decline in microbiota-derived SCFAs with age (arising from [[dysbiosis]]) attenuates GPR41 signaling and its downstream effects on sympathetic tone, GLP-1 release, and metabolic homeostasis.

## Identity

- **UniProt:** O14843 (FFAR3_HUMAN)
- **NCBI Gene:** 2865
- **HGNC symbol:** FFAR3 (approved name; GPR41 is the historical alias)
- **Ensembl:** ENSG00000185897
- **Mouse ortholog:** Gpr41 (one-to-one)
- **Length:** 346 amino acids (canonical isoform)
- **Chromosome location:** 19q13.12, in a tandem-repeat cluster with *FFAR2* (*GPR43*) and *FFAR1* (*GPR40*)

> **Naming note:** The HGNC approved symbol is *FFAR3*; *GPR41* is a historical alias widely used in the older literature and in mouse genetics (the mouse gene is designated *Gpr41*). Both forms are used interchangeably in primary sources. This page uses GPR41 / FFAR3 as co-equal names.

## Key functional domains and structure

GPR41 has the canonical Class A (rhodopsin-family) GPCR topology — seven transmembrane helices, a short extracellular N-terminus, three extracellular loops, and a cytoplasmic C-terminal tail. Key features from UniProt O14843:

- **Seven transmembrane helical domains** (typical GPCR)
- **N-linked glycosylation site** — Asn166
- **Disulfide bond** — Cys88–Cys169 (connecting ECL1 and ECL2; conserved across class A GPCRs)
- **SCFA binding pocket residues** — His146, Arg185, His245, Arg258 (required for short-chain carboxylate coordination)
- **Disordered C-terminal region** — residues 307–346; contains palmitoylation site and GRK/arrestin phosphorylation sites

## Deorphanization (2003)

GPR41 was deorphanized concurrently by two independent groups in 2003, establishing propionate as the primary activating ligand.

Brown et al. 2003 screened 40 orphan GPCRs against a panel of SCFAs using a calcium mobilization assay; both GPR41 and GPR43 (FFAR2) responded to propionate, butyrate, and acetate, with GPR41 showing highest sensitivity to propionate and butyrate (EC50 ~ 12 µM for propionate). The ligand rank order determined was propionate > butyrate ≈ valerate > acetate for GPR41, distinct from GPR43 (acetate ≈ propionate > butyrate) [^brown2003].

Le Poul et al. 2003 independently confirmed human GPR41 and GPR43 activation by SCFAs using [35S]-GTPγS binding and cAMP assays in CHO cells; propionate EC50 for GPR41 was reported in the low-micromolar range, with coupling confirmed to Gi/Go (pertussis-toxin sensitive, inhibition of cAMP) [^lepoul2003].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (human FFAR3 shares >90% transmembrane domain homology with mouse Gpr41) |
| Phenotype conserved in humans? | unknown (no human knockout; few human genetic studies) |
| Replicated in humans? | no (functional studies primarily in mouse and heterologous expression systems) |

## Signaling mechanism

Upon SCFA binding, GPR41 signals via Gαi/o and, distinctly, via the Gβγ subunit released from Gαi:

- **Gαi/o arm** — inhibits adenylyl cyclase → decreased cAMP → PKA suppression
- **Gβγ arm** — activates PLCβ → IP3/DAG → calcium release + PKC; also activates PI3K and ERK/MAPK cascade
- **Downstream outputs** — sympathetic ganglion stimulation (via ERK/MAPK in neurons; Gβγ-dominant), GLP-1 and PYY release from enteroendocrine L-cells (minor contribution relative to GPR43), adipokine modulation

Kimura et al. 2011 established that the GPR41-SNS axis specifically uses the Gβγ-PLCβ-MAPK branch; it was not blocked by pertussis toxin-insensitive Gαi removal in sympathetic neurons, pointing to Gβγ as the primary transducer of neuronal activation [^kimura2011]. #gap/needs-replication — this mechanistic assignment rests primarily on one study; independent pharmacological confirmation is lacking.

## Tissue expression and cellular distribution

| Tissue / cell type | Expression level | Notes |
|---|---|---|
| Sympathetic ganglia (mouse, human) | High | Superior cervical ganglia, stellate ganglia; dominant site [^kimura2011] |
| Enteric neurons | Moderate | Submucosal plexus; documented by Nøhr et al. [^nohr2015] |
| Enteroendocrine L-cells (colon) | Low–moderate | Co-expressed with GPR43; minor SCFA GLP-1 contribution [^tolhurst2012] |
| Adipose tissue | Low/undetected | qRT-PCR in Kimura 2011 found no adipose Gpr41 expression; older reports were not replicated in that study #gap/contradictory-evidence |
| Kidney | Low | Reported in early expression studies; functional role uncharacterized #gap/unsourced |
| Bone marrow / immune cells | Low | Far lower than GPR43 (FFAR2) in hematopoietic compartment |

Nøhr et al. 2015 surveyed GPR41/FFAR3 mRNA and protein in autonomic and somatic sensory ganglia using ISH, IHC, and single-cell qRT-PCR; confirmed robust expression in mouse and human superior cervical, stellate, and dorsal root ganglia, with moderate expression in nodose ganglia [^nohr2015].

## Physiological functions

### Sympathetic nervous system activation

The best-characterized function of GPR41. Kimura et al. 2011 showed that *Gpr41*-knockout mice have [^kimura2011]:
- Significantly lower resting heart rate (~610 ± 16 bpm vs ~682 ± 10 bpm in wild-type; n=12/group; p<0.01)
- Reduced body temperature
- Lower UCP-1 expression in brown adipose tissue
- Reduced oxygen consumption and energy expenditure
- Attenuated norepinephrine release in response to propionate treatment

Propionate infusion elevated heart rate and plasma norepinephrine in wild-type but not *Gpr41*-knockout mice. The same Gβγ-MAPK mechanism was recapitulated in cultured sympathetic ganglion cells. Ketone body beta-hydroxybutyrate (produced during fasting or ketosis) was shown to act as a GPR41 antagonist in this study — providing a mechanism by which fasting-induced ketogenesis may suppress SNS tone via FFAR3 inhibition. #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (human FFAR3 expressed in sympathetic ganglia; Gβγ-MAPK conserved) |
| Phenotype conserved in humans? | unknown (no human knockout or pharmacological probe study) |
| Replicated in humans? | no |

### Microbiota-mediated energy homeostasis

Samuel et al. 2008 used gnotobiotic (germ-free) mice colonized with a defined two-member microbiota (Bacteroides thetaiotaomicron + Methanobrevibacter smithii) to study GPR41 in host energy harvest. *Gpr41*-knockout mice colonized with this microbiota gained significantly less fat mass than wild-type colonized controls despite similar caloric intake, and had lower plasma PYY (a gut hormone that slows intestinal transit to increase absorption). The interpretation is that GPR41-mediated PYY release from enteroendocrine L-cells slows gut transit, allowing greater caloric harvest from microbial fermentation products; loss of GPR41 accelerates transit and reduces harvest efficiency [^samuel2008]. Note: the effect was measured as a colonized gnotobiotic model and does not directly address conventional-colonization conditions. #gap/needs-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (PYY secretion from L-cells is conserved) |
| Phenotype conserved in humans? | partial (propionate infusion increases PYY in humans; GPR41-dependence not confirmed) |
| Replicated in humans? | no (no human genetic or pharmacological equivalent; indirect evidence from propionate infusion studies) |

### GLP-1 and PYY release

Tolhurst et al. 2012 established that GLP-1 secretion from mouse colonic L-cells in response to SCFAs is mediated primarily by GPR43 (FFAR2), with GPR41 playing a secondary role [^tolhurst2012]. The dual-receptor study used primary mouse colonic L-cell cultures from *Ffar2*-knockout, *Ffar3*-knockout, and double-knockout animals; loss of GPR43 reduced SCFA-stimulated GLP-1 secretion by ~70%; loss of GPR41 reduced it by ~30%. The GPR41 contribution to GLP-1 is therefore smaller than GPR43's, but non-negligible at physiological propionate concentrations. PYY co-secretion with GLP-1 from L-cells follows similar receptor proportions. #gap/needs-human-replication

## Role in aging

GPR41 does not appear in GenAge as a primary aging gene; the aging relevance is indirect and pathway-level:

1. **SCFA supply decline with dysbiosis.** Aging gut microbiome shifts (reduction in butyrate/propionate producers; see [[dysbiosis]] and [[scfa-signaling]]) reduce luminal SCFA concentrations and therefore GPR41 activation. This attenuates the SNS-stimulatory, PYY-secretory, and GLP-1-augmenting outputs of GPR41, contributing to impaired metabolic regulation in older adults. #gap/no-mechanism — the specific contribution of reduced GPR41 signaling (vs. other SCFA-mediated effects) to aging phenotypes has not been directly measured.

2. **Sympathetic tone and cardiovascular aging.** Chronic attenuation of GPR41-mediated sympathetic activation with age (secondary to SCFA decline) may contribute to reduced resting metabolic rate, impaired thermogenesis, and altered heart rate variability — features of metabolic aging. #gap/unsourced — this connection is mechanistically plausible but not demonstrated in intervention studies.

3. **Interaction with GLP-1/PYY axis.** Reduced GPR41-mediated GLP-1 and PYY secretion may contribute to reduced satiety signaling, adiposity gain, and impaired incretin function in older adults, connecting to [[deregulated-nutrient-sensing]]. GPR41's contribution is modest relative to GPR43 in this axis, but the compound effect of declining GPR43 + GPR41 activation in aged individuals is unquantified. #gap/needs-replication

4. **Ketone antagonism.** The beta-hydroxybutyrate antagonism of GPR41 identified by Kimura et al. 2011 suggests that the fasting / ketogenic state directly modulates the GPR41 axis; this has potential relevance to [[caloric-restriction]] and [[intermittent-fasting]] interventions, although direct evidence for GPR41 as the mediator of CR-associated sympathetic changes is lacking. #gap/no-mechanism

## Relationship to sibling receptors

GPR41, GPR43 ([[gpr43]]), and GPR109A ([[gpr109a]]) form a functionally overlapping SCFA-receptor cluster, each with distinct ligand preferences, tissue distributions, and downstream programs:

| Receptor | Gene | Primary ligands | Key tissue | G-protein | Aging connection |
|---|---|---|---|---|---|
| GPR41 | FFAR3 | Propionate > butyrate > valerate | Sympathetic ganglia | Gαi/o + Gβγ | SNS activation; energy expenditure |
| GPR43 | FFAR2 | Acetate ≈ propionate | Immune cells, L-cells, adipocytes | Gαi/o + Gαq | Treg induction; anti-inflammatory |
| GPR109A | HCAR2 | Butyrate, beta-OHB, niacin | Colonic epithelium, DCs, macrophages | Gαi | Treg/IL-18 induction; colonocyte homeostasis |

All three signal through Gαi/o; GPR43 additionally couples Gαq. All three are co-seeded in this R25 Tier B pass.

## Pharmacology and druggability

No clinical-stage FFAR3-selective agonist or antagonist exists as of 2026. Druggability tier is unresolved (#gap/needs-canonical-id pending Open Targets query; the ENSG ID is ENSG00000185897 — use for druggability-tier lookup per `sops/finding-druggability.md`).

- **Propionate** ([[propionate]]) is the highest-affinity endogenous agonist; dietary fiber-derived via microbial fermentation; no selectivity (also activates GPR43).
- **Beta-hydroxybutyrate** functions as a GPR41 antagonist at physiological concentrations during fasting/ketosis [^kimura2011]; it is a GPR109A agonist — the two roles are receptor-subtype specific.
- FFAR3/GPR41-selective agonists have been described in patent literature (AR420626 class, used in some research); none are in clinical development for aging or metabolic indications.

## Limitations and gaps

- `#gap/needs-human-replication` — All functional data on GPR41's role in SNS activation, energy expenditure, and PYY secretion is from mouse knockout studies. No human pharmacological or genetic knockout equivalent exists.
- `#gap/needs-canonical-id` — `druggability-tier` not populated; requires Open Targets Platform lookup against ENSG00000185897.
- `#gap/no-mechanism` — The mechanism by which aging-associated SCFA decline (vs. other microbiome changes) specifically modulates GPR41 signaling in vivo has not been measured.
- `#gap/contradictory-evidence` — Adipose tissue GPR41 expression: early reports claimed expression in adipose; Kimura 2011 found no detectable expression by qRT-PCR. The discrepancy may reflect method sensitivity differences or species differences.
- `#gap/long-term-unknown` — No chronic intervention study has manipulated GPR41 signaling specifically and tracked aging or longevity endpoints.
- `genage-id` not assigned — GPR41/FFAR3 does not appear to have a GenAge entry; confirmed null.

## Footnotes

[^brown2003]: doi:10.1074/jbc.M211609200 · Brown AJ et al. · *J Biol Chem* 2003 · in-vitro (calcium mobilization + cAMP assay in heterologous cells) · deorphanization of GPR41 and GPR43; propionate rank-order established; n=N/A (biochemical assay) · citation percentile 100 (2,280 citations)

[^lepoul2003]: doi:10.1074/jbc.M301403200 · Le Poul E et al. · *J Biol Chem* 2003 · in-vitro ([35S]-GTPγS + cAMP assay, CHO cells) · concurrent deorphanization; Gi/Go coupling confirmed by pertussis-toxin sensitivity · citation percentile 100 (1,595 citations)

[^samuel2008]: doi:10.1073/pnas.0808567105 · Samuel BS et al. · *PNAS* 2008 · in-vivo (gnotobiotic mouse, defined microbiota colonization) · Gpr41-KO mice gain less fat mass than WT; PYY release attenuated in KO; model: germ-free C57BL/6 colonized with B. thetaiotaomicron + M. smithii · citation percentile 100 (1,525 citations)

[^kimura2011]: doi:10.1073/pnas.1016088108 · Kimura I et al. · *PNAS* 2011 · in-vivo (Gpr41-KO mouse) + in-vitro (cultured sympathetic neurons) · KO mice: lower heart rate, body temperature, UCP-1, O2 consumption; propionate-induced NE release abolished in KO; beta-hydroxybutyrate antagonism; n≈12/group · local PDF confirmed · citation percentile 100 (1,050 citations)

[^tolhurst2012]: doi:10.2337/db11-1019 · Tolhurst G et al. · *Diabetes* 2012 · in-vitro (primary mouse colonic L-cells, Ffar2-KO + Ffar3-KO) · GPR43 primary mediator (~70% GLP-1); GPR41 secondary (~30%); n=N/A (ex-vivo primary culture) · citation percentile 100 (2,153 citations) · note: title refers to FFAR2 as primary; GPR41 role documented in supplementary + KO comparison

[^nohr2015]: doi:10.1016/j.neuroscience.2015.01.040 · Nøhr MK et al. · *Neuroscience* 2015 · in-vivo + in-vitro (ISH, IHC, single-cell qRT-PCR; mouse and human ganglia) · GPR41/FFAR3 confirmed in sympathetic and sensory ganglia in both species · citation percentile 100 (266 citations) · not_oa; full-text PDF not available locally #gap/no-fulltext-access
