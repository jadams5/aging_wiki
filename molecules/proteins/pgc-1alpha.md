---
type: protein
aliases: [PPARGC1A, PGC1A, "PPAR-gamma coactivator 1-alpha", "PGC-1 alpha", "PGC-1α"]
uniprot: Q9UBK2
ncbi-gene: 10891
hgnc: 9237
ensembl: ENSG00000109819
genage-id: 256
mouse-ortholog: Ppargc1a
druggability-tier: 2
caused-by: []
causes: []
key-ptms:
  - K79-acetylation (GCN5/KAT2A)
  - K146-acetylation (GCN5/KAT2A)
  - K184-acetylation (GCN5/KAT2A)
  - K254-acetylation (GCN5/KAT2A)
  - K271-acetylation (GCN5/KAT2A)
  - K278-acetylation (GCN5/KAT2A)
  - K321-acetylation (GCN5/KAT2A)
  - K347-acetylation (GCN5/KAT2A)
  - K413-acetylation (GCN5/KAT2A)
  - K442-acetylation (GCN5/KAT2A)
  - K451-acetylation (GCN5/KAT2A)
  - K778-acetylation (SIRT1 target; deacetylated by SIRT1; mouse numbering per Hubbard 2013 / Rodgers 2005; human UniProt K779)
  - T178-phosphorylation (AMPK; human UniProt; Thr177 in mouse per Jager 2007)
  - S539-phosphorylation (AMPK; human UniProt; Ser538 in mouse per Jager 2007)
  - S570-phosphorylation (Akt; repressive; Li 2007)
  - T262/S265/T298-phosphorylation (p38 MAPK; activating in muscle; #gap/unsourced — needs primary citation)
pathways: ["[[ampk]]", "[[sirtuin]]", "[[mitochondrial-biogenesis]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[deregulated-nutrient-sensing]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Primary-source PDFs verified for all locally available sources (Puigserver 1998, Rodgers 2005, Li 2007, Hubbard 2013, Jager 2007, Lin 2004, Lerin 2006, Ristow 2009); Leick 2010 closed-access (not_oa) — claims from that paper remain #gap/no-fulltext-access; canonical-database identity fields (UniProt accession, NCBI Gene, HGNC, GenAge ID) not independently re-verified against databases on this pass"
---

# PGC-1α (PPARGC1A)

PGC-1α is the master transcriptional coactivator for [[mitochondrial-biogenesis]]. It is intrinsically disordered, carries no enzymatic activity of its own, and instead functions as a scaffold that recruits HAT complexes and mediator components to nuclear-receptor target genes. Its activity is exquisitely tuned by post-translational modification — particularly the competing actions of [[sirt1|SIRT1]] (deacetylation; activating) and [[gcn5|GCN5/KAT2A]] (acetylation; repressing) — making it a central node where energy status is translated into mitochondrial gene expression. PGC-1α activity declines with age in muscle and brain, a change linked to accumulated acetylation as SIRT1 activity falls, and the resulting mitochondrial insufficiency contributes to the [[mitochondrial-dysfunction]] hallmark.

## Identity

- **UniProt:** Q9UBK2 (PRGC1_HUMAN), Swiss-Prot (manually curated), accessed 2026-05-05
- **Gene / HGNC symbol:** PPARGC1A / HGNC:9237
- **NCBI Gene ID:** 10891
- **Mouse ortholog:** Ppargc1a (one-to-one ortholog)
- **GenAge entry:** ID 256 — included on the basis of vascular aging acceleration in Ppargc1a knockout mice (telomere dysfunction, DNA damage, atherosclerosis)
- **Length:** 798 amino acids (canonical isoform 1; human)
- **Molecular weight:** ~91 kDa
- **Structure:** Intrinsically disordered; no solved full-length crystal structure. The protein lacks a folded globular core; activity is mediated through linear binding motifs that dock onto ordered partner surfaces.

**Isoforms:** At least 10 isoforms arising from alternative promoter usage and alternative splicing. The most studied are:

| Isoform | Distinguishing feature | Primary tissue |
|---|---|---|
| Isoform 1 (canonical) | Full-length, 798 aa | Broad; BAT, muscle, liver |
| PGC-1α2 / PGC-1α3 | Exercise-specific alternative N-terminus | Skeletal muscle |
| PGC-1α4 | Truncated; promotes hypertrophy, not mitochondrial biogenesis | Skeletal muscle |
| Liver-specific (isoform 9) | Alternative first exon | Liver |

The isoform distinction matters for exercise biology: PGC-1α2, -3, and -4 are preferentially induced by exercise in mouse skeletal muscle and have distinct downstream programs. #gap/needs-human-replication — isoform-specific responses in human muscle are less fully characterized.

## Domain architecture

PGC-1α has a modular organization that can be read left-to-right as "activation — regulatory — RNA processing":

| Region (approx.) | Name | Function |
|---|---|---|
| ~1–200 | N-terminal activation domain (AD) | Recruits [[cbp-p300|CBP/p300 family HAT complexes]], SRC-1 and mediator; required for transcriptional potentiation |
| ~144–148 | LxxLL motif (NR box) | Nuclear receptor interaction interface (docks onto ligand-binding domains of PPARs, ERRs, etc.) |
| ~200–400 | Serine/arginine-rich regulatory region | Harbors many of the GCN5-targeted acetylation sites; conformational changes regulate partner access |
| ~400–600 | Central region | Additional regulatory elements; contains the major Akt phosphorylation site (S570 per Li 2007) |
| ~677–753 | RNA recognition motif (RRM) | RNA binding; role in splicing regulation of target pre-mRNAs |
| ~753–798 | RS-rich C-terminus | Splicing factor-like domain; connects to SR-protein network |

Note on CBP/p300 as a PGC-1α HAT: The N-terminal AD recruits CBP/p300, and CBP/p300 binding to PGC-1α has been observed. However, direct acetylation of PGC-1α by CBP/p300 has **not** been demonstrated in the primary literature for the functionally defined acetylation sites (Rodgers 2005 identifies GCN5 as the writer; see PTM section below). This attribution should be treated as inferential [^cbp-caveat]. See [[cbp-p300]] for the verifier finding on this point (2026-05-05).

## Discovery

PGC-1α was identified in 1998 by Puigserver et al. (Spiegelman lab, Dana-Farber Cancer Institute) in a yeast-two-hybrid screen for proteins interacting with PPARγ in brown adipose tissue (BAT) [^puigserver1998]. The original finding: PGC-1α was cold-inducible, strongly expressed in BAT, and its overexpression in white fat cells drove a broad thermogenic gene-expression program (UCP1, OXPHOS subunits, mtDNA replication machinery), establishing it as a master regulator of adaptive thermogenesis. The pathway from cold → β-adrenergic → cAMP → CREB → Pgc-1α transcription → NRF1/TFAM → mtDNA replication was worked out over subsequent years.

## Substrate and coactivation network

PGC-1α does not bind DNA directly. It docks onto sequence-specific transcription factors already sitting at target promoters and amplifies their activity by recruiting HAT complexes and mediator. Key coactivation partners:

| Partner TF | Downstream program | Primary tissue context |
|---|---|---|
| [[nrf1|NRF1]] / NRF2 (not the antioxidant NRF2/NFE2L2) | TFAM, OXPHOS subunit transcription, mtDNA replication | Broad mitochondrial biogenesis |
| PPARα | Fatty acid oxidation (β-oxidation genes) | Liver, heart, muscle |
| PPARγ | Adipogenesis, thermogenesis | BAT, WAT |
| PPARδ/β | Fatty acid oxidation, slow-twitch fiber program | Skeletal muscle |
| ERRα / ERRβ / ERRγ | Expanded mitochondrial program, OXPHOS | Broad; particularly muscle and heart |
| HNF4α + [[foxo1|FoxO1]] | Gluconeogenic genes (PEPCK, G6Pase) | Liver, fasting response |
| MEF2 | Slow-twitch (Type I) muscle fiber gene program | Skeletal muscle |
| [[foxo3|FoxO3]] | Mitophagy, antioxidant defense (SOD2, CAT) | Muscle |

The ERR subfamily (estrogen-related orphan receptors) are particularly important: ERRα is sometimes described as a "partner TF" that PGC-1α constitutively coactivates, making the ERRα–PGC-1α axis a semi-constitutive mitochondrial transcription module.

[[tfam|TFAM]] is an indirect but critical output: NRF1, coactivated by PGC-1α, drives TFAM expression; TFAM packages and replicates the mitochondrial genome. The PGC-1α → NRF1 → TFAM axis is the canonical molecular link between nuclear energy-sensing and mitochondrial DNA maintenance.

## PTM regulation

This is the central aging-relevant biology of PGC-1α. Activity is controlled post-translationally by three major mechanisms:

### Acetylation by GCN5/KAT2A (repressive)

GCN5 (KAT2A) acetylates at least 13 lysines in PGC-1α [^rodgers2005], [^lerin2006]. Acetylation at these sites causes PGC-1α to redistribute to nuclear foci (associated with inactive chromatin) and reduces its transcriptional activity on target promoters. In the fed state, GCN5 activity predominates, acetylating and silencing PGC-1α. In the fasted state, SIRT1 deacetylates these sites, re-activating the protein.

**Critical attribution note:** GCN5/KAT2A is the experimentally identified writer for PGC-1α acetylation in the Rodgers 2005 and Lerin 2006 studies. CBP/p300 co-precipitates with PGC-1α and recruits to PGC-1α target promoters, but direct acetylation of PGC-1α by CBP/p300 has not been demonstrated in these papers. Do not propagate "CBP/p300 acetylates PGC-1α" without a primary citation establishing direct catalytic action on the protein [^cbp-caveat].

| Acetylation site (mouse numbering in source) | Human UniProt Q9UBK2 equivalent | Writer | Effect | Source |
|---|---|---|---|---|
| K77 | K79 | GCN5/KAT2A | Repressive | Rodgers 2005 [^rodgers2005] |
| K144 | K146 | GCN5/KAT2A | Repressive | Rodgers 2005 |
| K183 | K184 | GCN5/KAT2A | Repressive | Rodgers 2005 |
| K253 | K254 | GCN5/KAT2A | Repressive | Rodgers 2005 |
| K270 | K271 | GCN5/KAT2A | Repressive | Rodgers 2005 |
| K277 | K278 | GCN5/KAT2A | Repressive | Rodgers 2005 |
| K320 | K321 | GCN5/KAT2A | Repressive | Rodgers 2005 |
| K346 | K347 | GCN5/KAT2A | Repressive | Rodgers 2005 |
| K412 | K413 | GCN5/KAT2A | Repressive | Rodgers 2005 |
| K441 | K442 | GCN5/KAT2A | Repressive | Rodgers 2005 |
| K450 | K451 | GCN5/KAT2A | Repressive | Rodgers 2005 |
| K757 | K758 | GCN5/KAT2A | Repressive | Rodgers 2005 |
| K778 | K779 | SIRT1 substrate (eraser known; deacetylated by SIRT1) | Repressive when acetylated | Rodgers 2005; Hubbard 2013 [^hubbard2013] |

*Note: Rodgers 2005 identified these 13 sites by tandem mass spectrometry of mouse PGC-1α (mouse Ppargc1a sequence). Mouse numbering is used in the source paper. The "Human UniProt" column gives the corresponding residue in the canonical human isoform Q9UBK2 (798 aa), which is shifted +2 relative to mouse. Hubbard 2013 used a mouse PGC-1α K778 peptide for the SIRT1 assay, consistent with Rodgers 2005 mouse numbering.*

### Deacetylation by SIRT1 (activating)

[[sirt1|SIRT1]] deacetylates PGC-1α during fasting and caloric restriction in the liver, re-activating gluconeogenic and mitochondrial programs [^rodgers2005]. The Rodgers 2005 study used adenoviral SIRT1 overexpression in mouse liver; see [[sirt1]] for full verification details and quantitative claims. Hubbard 2013 specifically mapped K778 (K779 in current UniProt numbering) as a SIRT1 deacetylation target [^hubbard2013]; see [[sirt1]] for the Hubbard 2013 extraction.

The SIRT1–PGC-1α axis is a fasting/CR sensor: NAD+ rises as fuel availability falls → SIRT1 activity increases → PGC-1α deacetylated and activated → mitochondrial and gluconeogenic gene programs upregulated.

Hubbard 2013 used a mouse PGC-1α peptide centered on K778 (mouse sequence; equivalent to K779 in human UniProt Q9UBK2) to demonstrate SIRT1 activation by STACs. The paper explicitly labels this substrate "PGC-1α–K778" throughout; residue numbering follows the mouse sequence used in Rodgers 2005. The K778/K779 nomenclature difference is a mouse-vs-human isoform offset, not an error in either paper.

### Phosphorylation by AMPK (activating)

[[ampk|AMPK]] directly phosphorylates PGC-1α at T178 and S539 (UniProt numbering; Jager 2007 uses Thr177/Ser538 in mouse sequence) in skeletal muscle [^jager2007]. This phosphorylation activates PGC-1α and initiates a feedforward loop: AMPK → PGC-1α → PGC-1α promoter autoregulation (PGC-1α can bind and coactivate its own promoter via MEF2) → increased PGC-1α expression. This AMPK-PGC-1α-SIRT1 axis is the mechanistic basis of exercise-induced mitochondrial biogenesis:

- Exercise → AMP/ATP ratio rises → AMPK activated → PGC-1α phosphorylated (T178/S539) → target genes expressed → more mitochondria → more NAD+ generation capacity → SIRT1 deacetylates PGC-1α further (activating)

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | AMPK→PGC-1α phosphorylation demonstrated in human muscle biopsies post-exercise |
| Phenotype conserved in humans? | yes | Mitochondrial biogenesis in response to exercise is well-documented in humans |
| Replicated in humans? | yes | Multiple exercise-training studies in humans show AMPK/PGC-1α pathway activation |

### Phosphorylation by Akt (repressive)

In the fed state, [[akt|Akt]] (PKB) phosphorylates PGC-1α primarily at **Ser570**, inhibiting its ability to coactivate gluconeogenic targets (HNF4α/FoxO1 complex) in liver [^li2007]. Li 2007 identified Ser570 as the major Akt phosphorylation site by in vitro kinase assay and mass spectrometry of GST-PGC-1α C-terminal fragments; mutation of S570 to Ala markedly decreased phosphorylation, while combinatorial mutation of other candidate Akt sites did not further reduce it. This provides the insulin-signaling brake on hepatic gluconeogenesis via PGC-1α: insulin → PI3K → Akt → PGC-1α(pS570) → PEPCK and G6Pase suppressed.

Note: Some earlier sources describe S265 as an additional Akt site, but Li 2007 — the primary citation on this page — demonstrates S570 as the dominant site. S265 is not reported in Li 2007. #gap/unsourced for S265 as an Akt site; a separate citation would be needed to add that claim.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Insulin → Akt → gluconeogenesis suppression is conserved |
| Phenotype conserved in humans? | yes | Insulin resistance in T2DM involves defective Akt-mediated PGC-1α suppression |
| Replicated in humans? | partial | Mechanistic details established in mouse liver/cell lines (Li 2007); human studies focus on downstream phenotype rather than PGC-1α phosphorylation directly |

### Phosphorylation by p38 MAPK (activating, muscle-specific)

p38 MAPK phosphorylates PGC-1α at T262, S265, and T298 in response to cytokines and exercise in muscle, increasing its stability and transcriptional activity. This provides a second, AMPK-independent route to PGC-1α activation in exercising muscle. #gap/needs-replication — the specific sites and kinetic contribution relative to the AMPK route require further characterization in vivo.

## Loss-of-function phenotypes

The global Pgc-1α knockout mouse (Lin 2004) is viable and fertile [^lin2004]. Key phenotypes:

- **Cold intolerance:** severe defect in adaptive thermogenesis; body temperature of Pgc-1α-null mice drops to ~33.5°C within 3 hr at 4°C and hypothermia becomes lethal beyond 6 hr; UCP1 induction in BAT is reduced to ~45% of wild-type level; type 2 iodothyronine deiodinase (D2) mRNA reduced ~50%
- **Reduced exercise capacity:** impaired mitochondrial oxidative capacity in skeletal muscle; mitochondrial gene expression (ERRα, Ndufb5, Cox7a1, Atp5j) reduced 30–60% in quadriceps; AMPK constitutively activated (compensatory)
- **Striatal neurodegeneration:** spongiform lesions found predominantly in the striatum of **3-month-old** Pgc-1α-null mice (not aged mice); lesions associated with reactive astrocytes and loss of NF220-positive axons; behavioral phenotype resembles aspects of Huntington's disease (hyperactivity + striatal lesions)
- **Hyperactivity:** 40% increase in random movement frequency; driven by CNS/striatal pathology, not thermogenesis

Importantly, basal mitochondrial content is not abolished in Pgc-1α-null mice — compensatory mechanisms (including PGC-1β and constitutive AMPK activation) maintain some mitochondrial baseline. The null mouse also shows resistance to diet-induced obesity and improved insulin sensitivity, likely due to compensatory hyperactivity-driven energy expenditure. The null mouse reveals which programs require PGC-1α specifically rather than the broader PGC coactivator family.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial — loss-of-function mutations in PPARGC1A in humans are rare; metabolic and neurological associations exist (Parkinson's disease via PARIS repression of PPARGC1A) |
| Replicated in humans? | no — no human equivalent of germline knockout; genetic association studies support direction |

## Aging biology

### Expression declines with age

PGC-1α mRNA and protein levels decline with age in skeletal muscle, brain, and (less consistently) liver. This decline tracks with the aging-associated reduction in mitochondrial content, OXPHOS capacity, and exercise tolerance. A primary driver appears to be declining SIRT1 activity (as NAD+ falls with age — see [[sirt1]] and [[nampt]]) leading to net accumulation of acetylated (inactive) PGC-1α rather than a reduction in gene transcription alone.

In mouse skeletal muscle, PGC-1α is reported to be required for exercise training to prevent the age-associated decline in mitochondrial enzyme content: Ppargc1a-null mice trained from midlife do not sustain the mitochondrial enzyme levels that WT mice maintain, establishing PGC-1α as necessary (not just sufficient) for the protective effect of exercise on aging muscle [^leick2010]. #gap/needs-human-replication #gap/no-fulltext-access — Leick 2010 is closed-access; this claim could not be verified against the primary source on this pass.

### The Wenz 2009 finding — RETRACTED

Wenz et al. 2009 (PNAS 106:20405) reported that muscle-specific Pgc-1α overexpression (MCK-Pgc1a transgenic mice) extended median lifespan, prevented sarcopenia, and improved cardiac and systemic metabolic function in aged mice [^wenz2009-retracted]. **This paper was retracted in December 2016 (retraction DOI: 10.1073/pnas.1619713114) due to concerns about data integrity.** Do not propagate the lifespan or sarcopenia-prevention quantitative claims from Wenz 2009 without independent replication.

**What remains valid:** The general biology that PGC-1α overexpression in muscle promotes mitochondrial biogenesis and oxidative metabolism is supported by multiple independent lines of evidence and is not in dispute. The specific lifespan and sarcopenia-prevention magnitude claims from Wenz 2009 require independent replication.

#gap/needs-replication — lifespan extension from muscle-specific PGC-1α overexpression; the Wenz 2009 data have been retracted and no direct replication in aged mice has been published as of 2026-05-05.

### GenAge classification

GenAge entry 256: included based on evidence that Ppargc1a knockout mice show accelerated vascular aging — telomere shortening, DNA damage accumulation, and atherosclerosis — demonstrating a direct role in mammalian aging biology. The vascular-aging phenotype is distinct from the muscle and thermogenesis phenotypes of the Lin 2004 global KO; vascular effects may reflect impaired mitochondrial function in endothelial cells and smooth muscle.

### Connection to [[mitohormesis]]

Moderate reactive oxygen species (ROS) generated during exercise activate AMPK and p38 MAPK, which in turn activate PGC-1α → mitochondrial biogenesis (mitohormetic response). Ristow et al. 2009 demonstrated in a human RCT that co-supplementation with antioxidants (vitamin C + E) during exercise training blunted the exercise-induced activation of PGC-1α target genes and attenuated the insulin-sensitizing effects of training [^ristow2009]. This supports the view that ROS act as beneficial signaling molecules upstream of PGC-1α activation, not purely as damage agents.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes — Ristow 2009 is a human RCT |
| Replicated in humans? | in-progress — several follow-up trials; some partially replicate, some do not #gap/contradictory-evidence |

## Pharmacology and exercise

### Endurance exercise

The most validated PGC-1α activator in humans. Acute endurance exercise raises the AMP:ATP ratio → AMPK → PGC-1α phosphorylation (T178/S539) and possibly p38 MAPK → PGC-1α phosphorylation (T262/S265/T298). Chronic training increases basal PGC-1α expression and mitochondrial content in skeletal muscle. This is the mechanistic basis of the exercise-mediated protection against age-related mitochondrial decline [^leick2010].

### Resveratrol (indirect, contested)

[[resveratrol|Resveratrol]] was proposed to activate SIRT1 → deacetylate PGC-1α → activate mitochondrial programs. The mechanism of resveratrol→SIRT1 activation is contested (Pacholec 2010, verified on [[sirt1]]). At high doses, resveratrol can activate AMPK independently, which would also activate PGC-1α. Do not cite "resveratrol activates PGC-1α via SIRT1" as a settled mechanism. #gap/contradictory-evidence

### Bezafibrate

Bezafibrate is a pan-PPAR agonist that increases Ppargc1a transcription in muscle; has been used as a pharmacological tool to probe PGC-1α biology in mouse models of mitochondrial disease. Not validated as an anti-aging intervention. #gap/needs-human-replication

### ZLN005

ZLN005 is a small-molecule transcriptional inducer of PPARGC1A identified in a cell-based screen. Preclinical only as of 2026-05-05. #gap/needs-replication

### Caloric restriction

[[caloric-restriction|Caloric restriction]] induces PGC-1α in liver and muscle, partly via the SIRT1 axis (NAD+ rises during CR → SIRT1 more active → PGC-1α deacetylated/activated). This is one proposed mechanism by which CR improves mitochondrial function and extends healthspan. #gap/no-mechanism — the relative contribution of SIRT1 versus AMPK versus transcriptional induction to CR-induced PGC-1α activation in different tissues is not fully resolved.

## Pathway membership and cross-references

- [[ampk]] — AMPK directly phosphorylates and activates PGC-1α; canonical upstream activator during exercise and energy stress
- [[sirtuin]] / [[sirt1]] — SIRT1 deacetylates and activates PGC-1α during fasting/CR; SIRT1 decline with age is a proposed mechanism of PGC-1α hypo-activity in aging
- [[mitochondrial-biogenesis]] — PGC-1α is the master coactivator; NRF1/NRF2→TFAM axis is the canonical effector
- [[mitochondrial-dysfunction]] — PGC-1α decline contributes to the age-related fall in mitochondrial content and OXPHOS capacity
- [[deregulated-nutrient-sensing]] — fasting/CR→SIRT1→PGC-1α is a core nutrient-sensing axis; Akt-mediated repression in the fed state couples insulin signaling to mitochondrial suppression
- [[foxo3]] — co-operates with PGC-1α on mitophagy and antioxidant defense gene programs in muscle
- [[foxo1]] — PGC-1α + FoxO1 drive hepatic gluconeogenesis
- [[gcn5]] — GCN5/KAT2A is the primary acetylase writer that silences PGC-1α
- [[tfam]] — indirect PGC-1α output via NRF1; TFAM packages mtDNA
- [[nrf1]] — direct TF partner; drives TFAM and OXPHOS gene expression
- [[cbp-p300]] / [[ep300]] — recruited to PGC-1α target promoters; direct acetylation of PGC-1α by this family is not established (see PTM section)
- [[nampt]] — NAD+ biosynthesis; sets SIRT1 activity ceiling; connects to PGC-1α activity
- [[mitohormesis]] — PGC-1α is the effector of the mitohormetic exercise response
- [[exercise]] — primary physiological activator of PGC-1α in skeletal muscle
- [[caloric-restriction]] — induces PGC-1α via SIRT1 and AMPK
- [[resveratrol]] — indirect; mechanism contested

## Limitations and gaps

- #gap/needs-human-replication — isoform-specific PGC-1α responses in human skeletal muscle (vs mouse exercise isoforms) are incompletely characterized
- #gap/needs-replication — lifespan extension from muscle-specific PGC-1α overexpression (Wenz 2009 retracted; no independent replication published as of 2026-05-05)
- #gap/contradictory-evidence — resveratrol→SIRT1→PGC-1α mechanism is contested; antioxidant blunting of exercise-induced PGC-1α activation (Ristow 2009) has not been uniformly replicated
- #gap/no-mechanism — relative contribution of SIRT1 vs AMPK to CR-induced PGC-1α activation in liver vs muscle vs brain is unresolved
- #gap/needs-human-replication — vascular aging acceleration in Ppargc1a-null mice (GenAge basis) has not been directly tested in human genetic studies
- #gap/unsourced — p38 MAPK site mapping (T262/S265/T298) needs primary citation verification; present attribution is from training knowledge
- #gap/no-fulltext-access — Leick 2010 (aging muscle claim) is closed-access; verification of that specific claim is pending open-access or institutional access
- #gap/unsourced — S265 as a secondary Akt phosphorylation site on PGC-1α; Li 2007 identifies S570 as the primary site but does not report S265; separate primary citation needed before adding S265 back

## Footnotes

[^puigserver1998]: doi:10.1016/s0092-8674(00)81410-5 · Puigserver P et al. (Spiegelman lab) · in-vitro + in-vivo (mouse BAT, C2C12 cells) · Cell 92:829 (1998) · Discovery paper: identified PGC-1α as cold-inducible PPARγ coactivator in BAT; overexpression drove thermogenic gene program · locally available in archive

[^lin2004]: doi:10.1016/j.cell.2004.09.013 · Lin J et al. (Spiegelman) · in-vivo (global Ppargc1a-null mouse, C57Bl/6 backcross) · Cell 119:121 (2004) · Global KO: viable and fertile; cold-intolerant (BAT thermogenesis severely impaired); reduced mitochondrial gene expression in muscle (30–60%); spongiform striatal neurodegeneration in 3-month-old mice (NOT aged mice); CNS hyperactivity (+40% movement); resistant to diet-induced obesity (due to hyperactivity-driven energy expenditure) · locally available in archive

[^rodgers2005]: doi:10.1038/nature03354 · Rodgers JT, Lerin C et al. (Puigserver/Spiegelman) · in-vitro + in-vivo (mouse liver, adenoviral overexpression) · Nature 434:113 (2005) · SIRT1 deacetylates PGC-1α in liver during fasting; GCN5 identified as acetyltransferase writer · locally available in archive

[^lerin2006]: doi:10.1016/j.cmet.2006.04.013 · Lerin C, Rodgers JT, Kalume DE, Kim S, Pandey A, Puigserver P · in-vitro + in-vivo (mouse liver hepatocytes, adenoviral GCN5) · Cell Metabolism 3:429 (2006) · Identifies GCN5 as the endogenous acetyltransferase in the PGC-1α protein complex; GCN5 (not p300, SRC-1, or TIP60) acetylates PGC-1α directly; GCN5 acetylation relocalizes PGC-1α to inactive nuclear foci; GCN5 represses gluconeogenic gene expression by 6-fold and reduces hepatic glucose secretion by 78%; confirms GCN5 as primary writer · locally available in archive

[^jager2007]: doi:10.1073/pnas.0705070104 · Jager S, Handschin C, St-Pierre J, Spiegelman BM · in-vitro + in-vivo (primary mouse myotubes; skeletal muscle-specific Pgc-1α-KO mice; AICAR treatment) · PNAS 104:12017 (2007) · AMPK directly phosphorylates PGC-1α at Thr177+Ser538 (mouse sequence confirmed by mass spectrometry; equivalent to T178/S539 in human UniProt Q9UBK2); phosphorylation required for PGC-1α-dependent induction of PGC-1α promoter; many AMPK effects on GLUT4 and mitochondrial genes require PGC-1α protein · locally available in archive

[^li2007]: doi:10.1038/nature05861 · Li X, Monks B, Ge Q, Birnbaum MJ · in-vitro + in-vivo (mouse liver; H4IIe hepatoma cells; primary hepatocytes; Akt2-KO mice) · Nature 447:1012 (2007) · Akt phosphorylates PGC-1α at Ser570 as the primary site (identified by in vitro kinase assay + anti-pS570 antibody; S570A mutation markedly reduces phosphorylation); inhibits gluconeogenic coactivation; insulin → Akt → PGC-1α(pS570) suppression → PEPCK/G6Pase down; also inhibits fatty acid oxidation via ERRα coactivation · locally available in archive

[^ristow2009]: doi:10.1073/pnas.0903485106 · Ristow M, Zarse K et al. · n=40 healthy young males (20 previously untrained + 20 pretrained; each split 10/10 antioxidant vs no supplement) · two-part design: open-label pilot (n=16 part 1) then double-blind placebo-controlled (n=24 part 2); registered NCT00638560 · PNAS 106:8665 (2009) · Antioxidant supplementation (vitamin C 1000 mg/day + vitamin E 400 IU/day) during 4-week exercise training blunted PGC-1α/PGC-1β/PPARγ target gene induction and insulin sensitization (GIR, adiponectin); supports ROS-mitohormetic model · locally available in archive

[^hubbard2013]: doi:10.1126/science.1231097 · Hubbard BP, Gomes AP et al. (Sinclair) · in-vitro (biochemical) · Science 339:1216 (2013) · Maps specific SIRT1 deacetylation sites including K778 on PGC-1α; evidence for common SIRT1 activation mechanism · locally available in archive

[^leick2010]: doi:10.1016/j.exger.2010.01.011 · Leick L, Lyngby SS et al. (Pilegaard) · in-vivo (Ppargc1a-null and WT mice, exercise training) · Experimental Gerontology 45:336 (2010) · PGC-1α required for exercise training to prevent age-associated decline in mitochondrial enzyme content in mouse muscle · #gap/no-fulltext-access — closed-access (not_oa per a local paper archive); quantitative claims from this paper could not be verified against primary source on this pass

[^wenz2009-retracted]: doi:10.1073/pnas.0911570106 · Wenz T et al. (Moraes) · **RETRACTED 2016** (retraction doi:10.1073/pnas.1619713114) · Reported muscle-specific PGC-1α overexpression extends lifespan and prevents sarcopenia in aged mice · Do not cite quantitative claims from this paper.

[^cbp-caveat]: CBP/p300 interacts with the PGC-1α N-terminal activation domain and co-precipitates with PGC-1α at target promoters. Direct catalytic acetylation of PGC-1α by CBP/p300 is not demonstrated in Rodgers 2005 (which names GCN5 as the writer) or other primary studies in the PGC-1α PTM literature as of 2026-05-05. This attribution gap was flagged during verification of [[cbp-p300]] (2026-05-05).
