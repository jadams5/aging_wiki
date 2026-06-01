---
type: protein
aliases: [DEPTOR, DEPDC6, DEP domain containing 6, DEP-domain-containing mTOR-interacting protein]
uniprot: Q8TB45
ncbi-gene: 64798
hgnc: 22953
mouse-ortholog: Deptor
ensembl: ENSG00000155792
druggability-tier: 2  # SM:High-Quality Ligand (Open Targets, DEPTOR)
caused-by: []
causes: []
key-domains: [DEP-domain-1, DEP-domain-2, PDZ-domain, DDEX-motif, beta-TrCP-degron]
key-ptms: [Ser286-phospho, Ser287-phospho, Ser291-phospho, Ser293-phospho, Ser299-phospho, ubiquitination-K48-linked]
pathways: ["[[mtor]]", "[[insulin-igf1]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[disabled-macroautophagy]]"]
known-interactors: ["[[raptor]]", "[[rictor]]", "[[fkbp12]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Peterson 2009 (discovery paper), Zhao/Sun 2011 (doi:10.1016/j.molcel.2011.08.029), Duan/Pagano 2011 (doi:10.1016/j.molcel.2011.09.005), and Miller 2022 primary-source PDFs verified; UniProt Q8TB45 identity fields (accession, HGNC, NCBI Gene) not independently re-verified against database — recommend cross-check on next lint pass"
---

# DEPTOR (DEPDC6)

DEPTOR is the only known endogenous protein inhibitor of both [[mtor|mTOR]] complexes. It binds [[mtor]] directly, suppressing kinase activity of both [[mtor|mTORC1]] (via [[raptor]]) and [[mtor|mTORC2]] (via [[rictor]]), and is itself rapidly degraded by active mTOR via an SCF^β-TrCP E3 ubiquitin ligase — creating an auto-amplification loop that couples nutrient availability to mTOR activity. Its relevance to aging lies in its potential to phenocopy caloric restriction by tonically suppressing mTOR signaling.

## Identity

- **UniProt:** Q8TB45 (DEPTOR_HUMAN; Swiss-Prot reviewed)
- **Gene symbol:** DEPTOR (alias DEPDC6)
- **NCBI Gene:** 64798
- **HGNC:** 24784
- **Mouse ortholog:** Deptor (one-to-one; high sequence conservation)
- **Length:** 409 amino acids (human canonical isoform)

## Domain architecture

DEPTOR contains three major functional modules:

| Domain | Residues (approx.) | Function |
|---|---|---|
| DEP domain 1 | 36–119 | Protein–protein interaction scaffold |
| DEP domain 2 | 145–219 | Protein–protein interaction scaffold |
| DDEX motif | 217–235 | Linker; structural role unclear |
| PDZ domain | 324–409 (approx.) | Mediates binding to mTOR FAT domain (residues 1483–2000 of mTOR) |
| β-TrCP degron | 286–291 | Phosphodegron recognized by SCF^β-TrCP E3 ligase |

The **PDZ domain** is the primary mTOR-binding interface: it contacts the FAT domain of [[mtor]] (minimal mTOR-binding region: mTOR residues 1483–2000, upstream of the kinase domain) [^peterson2009]. DEP domains are dispensable for mTOR binding but may mediate additional interactions.

## Function: endogenous mTOR inhibitor

DEPTOR was discovered in a mass-spectrometry screen for mTOR complex components and identified as an inhibitory subunit present in both mTORC1 and mTORC2 [^peterson2009].

**Mechanism of inhibition:** DEPTOR binding to mTOR's FAT domain reduces kinase activity — for mTORC1, this suppresses phosphorylation of [[s6k1]] (Thr389) and [[4ebp1]]; for mTORC2, this suppresses phosphorylation of [[akt]] (Ser473) and [[sgk1]] (Ser422). The inhibition is partial and reversible, unlike rapamycin-induced allosteric inhibition of mTORC1.

**Effect on autophagy:** By suppressing mTORC1, elevated DEPTOR promotes [[autophagy]] induction — consistent with DEPTOR knockdown reducing autophagy flux and DEPTOR accumulation (via β-TrCP knockdown) activating autophagy under glucose deprivation [^zhao2011_sun].

## Regulation: the mTOR negative feedback loop

DEPTOR protein stability is tightly coupled to mTOR activity through a rapid degradation circuit. This is the defining regulatory feature of DEPTOR biology:

**Step 1 — Two-stage phosphorylation:** DEPTOR degradation requires two sequential phosphorylation events. First, mTOR (via mTORC1 or mTORC2) phosphorylates **priming sites** Ser293 and Ser299 on DEPTOR; this creates a binding site for CK1α. CK1α then phosphorylates the **β-TrCP degron** serines Ser286, Ser287, and Ser291 (degron sequence: ²⁸⁶SSGYFS²⁹¹). RSK1 and S6K1 (downstream of mTOR) can also phosphorylate the degron serines directly. All three degron serines must be phosphorylated for β-TrCP recognition [^zhao2011_sun][^duan2011].

**Step 2 — Degron recognition:** Phosphorylated DEPTOR is recognized by the F-box protein β-TrCP (BTRC/FBXW1) — the substrate recognition subunit of the SCF^β-TrCP Cullin-RING E3 ubiquitin ligase complex [^zhao2011_sun][^duan2011].

**Step 3 — Ubiquitination and proteasomal degradation:** SCF^β-TrCP ubiquitinates DEPTOR (K48-linked polyubiquitin chains → proteasome).

**Net effect — auto-amplification loop:** Active mTOR destroys DEPTOR → further mTOR disinhibition → more mTOR activity. This creates a positive feedback loop that amplifies the mTOR "on" state once nutrient/growth-factor signals reach threshold [^duan2011].

**Inverse correlation:** DEPTOR protein levels therefore correlate **inversely** with mTOR activity. Under nutrient deprivation, mTOR activity falls → DEPTOR half-life lengthens → DEPTOR accumulates → further mTOR suppression. This amplifies the cellular response to starvation.

**Deubiquitination:** USP7 and OTUB1 can deubiquitinate DEPTOR, stabilizing it and attenuating mTOR activity. These enzymes represent an opposing arm of the stability circuit (UniProt Q8TB45). #gap/needs-replication — USP7/OTUB1 studies are limited; functional significance in aging not established.

## Cancer dual role

DEPTOR exhibits a counterintuitive dual role in oncology, illustrating the complexity of mTOR pathway feedback:

**Most cancers — DEPTOR loss:** The majority of solid tumors downregulate DEPTOR, relieving tonic mTOR inhibition and enabling constitutive mTORC1 activation for growth and protein synthesis. DEPTOR loss is considered pro-tumorigenic in this context [^peterson2009].

**Multiple myeloma — DEPTOR overexpression:** In striking contrast, approximately 28% of multiple myelomas (160/581 cases with mRNA levels ≥4-fold above normal plasma cells) **overexpress** DEPTOR [^peterson2009]. Overexpression is particularly associated with bi-allelic cyclin D1/D3 deregulation or translocations involving c-MAF or MAFB transcription factors (the latter driven by IGH chromosomal translocations to 16q23/20q11). The mechanism is paradoxical: high DEPTOR suppresses mTORC1/2 → relieves the S6K1-IRS-1 negative feedback axis (normally S6K1 phosphorylates and destabilizes IRS-1, dampening upstream PI3K input). With DEPTOR high, S6K1 is low, IRS-1 is stable, and upstream PI3K-AKT signaling is maximally active → enhanced survival signaling dominates over the growth-suppressive effects of mTOR inhibition. Depleting DEPTOR in these cells causes apoptosis [^peterson2009]. #gap/needs-replication — this finding was in specific MM cell lines; generalizability across MM subtypes unclear.

## Aging relevance

### mTOR inhibition as a lifespan mechanism

The connection between DEPTOR and aging is mechanistically straightforward but empirically limited. Because DEPTOR is an endogenous mTOR suppressor:

- DEPTOR upregulation would be predicted to **phenocopy CR or rapamycin** by reducing mTORC1 activity → less anabolic signaling, enhanced autophagy, reduced cellular senescence burden.
- The [[hyperfunction-theory]] of aging holds that excess mTOR activity in post-reproductive life drives age-related pathology; DEPTOR would oppose this directly [^blagosklonny2010].
- Rapamycin and [[mtor]] pathway inhibition extend lifespan in mice, flies, and worms — an effect plausibly attributable in part to mTOR disinhibition paralleling elevated DEPTOR function.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — mTOR, raptor, rictor, β-TrCP all conserved; DEPTOR protein sequence well-conserved in mammals |
| Phenotype conserved in humans? | partial — CR/mTOR-inhibition extends lifespan in model organisms; no equivalent human data |
| Replicated in humans? | no — no human DEPTOR gain-of-function studies; no human aging phenotype data |

### DEPTOR in long-lived mouse models

A 2022 study in long-lived growth-hormone-receptor-knockout (GHR-KO) and Snell dwarf mice found **reduced** DEPTOR and PRAS40 levels in **liver** specifically (N=6 male + 6 female per genotype), while TSC1/TSC2 levels were elevated across liver, kidney, and skeletal muscle [^miller2022]. In kidney, DEPTOR was unchanged; in muscle, DEPTOR was paradoxically **increased**. Critically, RNAi knockdown of DEPTOR or PRAS40 in GHRKO fibroblasts did not alter mTORC1 or mTORC2 substrate phosphorylation, indicating the liver reduction in DEPTOR is not functionally responsible for the lower mTORC1 activity seen in these long-lived mice. This finding **does not support** a simple model in which DEPTOR downregulation drives mTOR suppression in longevity models; instead, elevated TSC1/TSC2 appear to be the dominant upstream regulators. #gap/contradictory-evidence — tissue-specific and model-specific effects require systematic characterization.

### DEPTOR levels in normal aging

Whether DEPTOR expression changes with age in human or mouse tissues is **not established** by the literature surveyed for this page. #gap/unsourced — no published datasets of DEPTOR protein or mRNA across age in mammalian tissues identified. This is a substantive empirical gap; if DEPTOR declines with age (as mTOR activity tends to rise in aged tissues), that would provide a mechanistic link. #gap/needs-human-replication.

### Knockout phenotype

*Deptor*-/- mice are viable and fertile, unlike mTOR or Raptor knockouts (which are embryonic lethal). They display enhanced mTOR signaling, consistent with DEPTOR's role as an mTOR brake. Detailed aging or tissue-maintenance phenotypes in Deptor-/- mice have not been extensively published as of this writing. #gap/unsourced — the KO phenotype beyond mTOR hyperactivation needs deeper characterization in the primary literature.

## Pathway membership

- [[mtor]] — DEPTOR is a component of both mTORC1 (Raptor complex) and mTORC2 (Rictor complex); the primary canonical relationship is listed here.
- [[insulin-igf1]] — DEPTOR feeds back into the IIS pathway via its effect on S6K1-IRS-1 negative feedback (multiple myeloma MM mechanism; see Cancer section).
- [[autophagy]] — DEPTOR promotes autophagy by suppressing mTORC1-mediated ULK1 inhibition.

## Key interactors

- [[raptor]] — mTORC1 scaffold; DEPTOR interacts with mTOR within the raptor-containing complex
- [[rictor]] — mTORC2 scaffold; DEPTOR interacts with mTOR within the rictor-containing complex
- [[fkbp12]] — also binds mTOR's FRB domain (rapamycin co-receptor); binding sites adjacent to DEPTOR's PDZ contact; these interactions are structurally distinct but functionally convergent (both inhibit mTOR)
- [[s6k1]] — phosphorylated by mTOR downstream; S6K1 feeds back to phosphorylate DEPTOR degron, completing the loop
- [[4ebp1]] — downstream mTORC1 substrate; DEPTOR overexpression suppresses 4EBP1 phosphorylation (Thr37/Thr46)
- [[akt]] — downstream mTORC2 substrate; DEPTOR overexpression suppresses AKT Ser473 phosphorylation

## Pharmacology and therapeutic relevance

No DEPTOR-targeting drug is in clinical development as of 2026. Potential strategies:

- **DEPTOR stabilization** (e.g., β-TrCP inhibitors, deubiquitinase activators) — would suppress mTOR; could mimic CR effects; risk profile similar to mTOR inhibitors.
- **MLN4924 (pevonedistat)** — inhibits Cullin-RING E3 ligases (including SCF^β-TrCP) broadly; in clinical trials for myeloid malignancies; not selective for DEPTOR degradation pathway.
- **Indirect elevation** via CR or fasting — nutrient deprivation slows DEPTOR phosphorylation/degradation, raising DEPTOR steady-state. This may partially explain some CR benefits via the mTOR axis.

## Limitations and gaps

- `#gap/unsourced` — DEPTOR expression trajectory with normal mammalian aging not established; no published age-series proteomics or transcriptomics data identified.
- `#gap/needs-human-replication` — All mechanistic data is from cell lines or mouse models. Human aging phenotypes for DEPTOR gain or loss of function are unknown.
- `#gap/needs-replication` — Multiple myeloma DEPTOR overexpression mechanism (IRS-1 feedback disinhibition) described primarily in Peterson 2009 original paper; independent confirmation limited.
- `#gap/contradictory-evidence` — GHR-KO long-lived mice show *reduced* DEPTOR in liver but unchanged or increased DEPTOR in kidney/muscle (Miller 2022); DEPTOR/PRAS40 knockdown does not functionally alter mTOR activity in GHRKO cells; TSC1/TSC2 elevation (not DEPTOR reduction) appears to drive mTORC1 suppression in these models.
- `#gap/long-term-unknown` — Deptor-/- aging phenotype not characterized; Deptor overexpression longevity experiments not published.
- `#gap/no-mechanism` — USP7 and OTUB1 deubiquitination of DEPTOR noted in UniProt; functional significance for DEPTOR stability in aging or nutrient-stress contexts not established.

## Footnotes

[^peterson2009]: [[studies/peterson-2009-deptor-mtor-inhibitor]] · doi:10.1016/j.cell.2009.03.046 · in-vitro + in-vivo · model: HEK293 cells + xenograft + multiple myeloma cell lines · discovery paper; n=N/A (biochemistry/cell-line study) · 1,182 citations (100th percentile)

[^zhao2011_sun]: Zhao Y, Xiong X, Sun Y (2011) · doi:10.1016/j.molcel.2011.08.029 · Mol Cell 44:304–316 · in-vitro · model: HEK293 + cancer cell lines · design: biochemical reconstitution + CHX half-life assay · SCFβ-TrCP identified as E3 ligase; RSK1+S6K1 phosphorylate degron (Ser286/287/291); β-TrCP recognition; autophagy link upon β-TrCP knockdown

[^duan2011]: Duan S, Skaar JR, Kuchay S, Toschi A, Pagano M et al. (2011) · doi:10.1016/j.molcel.2011.09.005 · Mol Cell 44:317–324 · in-vitro · model: HEK293T + T98G cells · design: biochemical reconstitution · CK1α phosphorylates degron after mTOR-mediated priming at Ser293/Ser299; mTOR–CK1α–β-TrCP auto-amplification loop reconstituted in vitro

[^blagosklonny2010]: [[hypotheses/hyperfunction-theory]] · conceptual-frame hypothesis · mTOR hyperfunction as driver of post-reproductive aging pathology; DEPTOR as endogenous mTOR brake fits this model directly

[^miller2022]: Shi X, Endicott SJ, Miller RA (2022) · doi:10.18632/aging.203959 · Aging 14:2442–2457 · in-vivo · model: GHR-KO + Snell dwarf mice · design: cross-sectional immunoblot (liver, kidney, muscle) + RNAi functional follow-up in GHRKO fibroblasts · n=6 male + 6 female per genotype · liver DEPTOR and PRAS40 reduced; kidney/muscle DEPTOR unchanged or increased; TSC1/TSC2 elevated in liver, kidney, and muscle; DEPTOR/PRAS40 knockdown did not alter mTORC1/2 substrates in GHRKO cells (functional null result)
