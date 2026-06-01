---
type: protein
aliases: [RHOT2, mitochondrial Rho GTPase 2, MIRO-2, hMiro-2, ARHT2, C16orf39, Ras homolog gene family member T2]
uniprot: Q8IXI1
ncbi-gene: 89941
hgnc: 21169
ensembl: ENSG00000140983
mouse-ortholog: Rhot2
genage-id: null
druggability-tier: 4
caused-by: []
causes: []
key-domains: [GTPase-1, EF-hand-1, EF-hand-2, GTPase-2, transmembrane]
key-ptms: [PINK1-phosphorylation, Parkin-ubiquitination-K27, USP30-deubiquitination]
pathways: ["[[pink1-parkin-pathway]]", "[[mitophagy]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[disabled-macroautophagy]]"]
sens-categories: []
gtex-aging-correlation: null
mr-causal-evidence: not-tested
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Primary-source PDFs verified for Wang 2011 (Cell), Fransson 2003 (JBC), Birsa 2014 (JBC), and López-Domènech 2018 (EMBO J). Klosowiak 2013 (EMBO Rep, PMC3818075) verified against PubMed abstract only — PDF download stalled (bronze OA); body claims derived from the abstract are accurate. UniProt Q8IXI1 domain architecture confirmed via REST API. GenAge RHOT2 absence confirmed via direct query."
---

# MIRO2 (RHOT2)

Mitochondrial Rho GTPase 2 — the paralog of [[miro1]] (RHOT1), anchored to the mitochondrial outer membrane (OMM) via a C-terminal transmembrane helix. MIRO2 links mitochondria to kinesin-1 (KIF5) and dynein motors through the adaptor proteins TRAK1/TRAK2, enabling bidirectional mitochondrial trafficking along microtubules and, in combination with [[miro1]], along actin filaments. Its two EF-hand calcium-sensing domains transduce local Ca²⁺ rises into trafficking arrest. In the [[pink1-parkin-pathway]], PINK1 phosphorylates MIRO2 at the conserved site equivalent to MIRO1 Ser156, targeting it for Parkin-mediated ubiquitination at multiple lysine residues and subsequent proteasomal degradation — committing the damaged mitochondrion to immobility and [[mitophagy]]. Compared to [[miro1]], MIRO2 has **broader tissue distribution** (high in heart, liver, skeletal muscle, kidney, and pancreas; not restricted to neurons), making it the dominant isoform outside the nervous system, though the functional division of labor between the two paralogs remains incompletely characterized.

## Identity

- **UniProt:** Q8IXI1 (MIRO2_HUMAN)
- **NCBI Gene:** 89941
- **HGNC symbol:** RHOT2
- **Ensembl:** ENSG00000140983
- **Mouse ortholog:** Rhot2 (Miro2)
- **Length:** 618 amino acids (canonical isoform; same length as MIRO1)
- **Sequence identity to MIRO1:** ~60% (overall; Fransson 2003 reports "60% identical"; López-Domènech 2018 likewise states 60%); higher in EF-hand regions
- **Topology:** single-pass type IV transmembrane protein; C-terminal anchor (residues 593–615) in OMM; all functional domains face the cytoplasm

## Domain architecture

| Domain | Residues (approx.) | Function |
|---|---|---|
| GTPase domain 1 | 2–168 | Atypical Rho-family GTPase; nucleotide binding and hydrolysis (NTPase activity, including GTP/ATP/UTP, inferred from structural homology — not directly assayed in Fransson 2003 #gap/unsourced) |
| EF-hand 1 | 184–219 | Ca²⁺ sensor (micromolar range) |
| EF-hand 2 | 304–339 | Ca²⁺ sensor; cooperative with EF-hand 1 |
| GTPase domain 2 | 414–576 | Second atypical GTPase; structural/scaffolding role; coupled to EF-hand 2 via interlocking helix [^klosowiak2013] |
| Transmembrane helix | 593–615 | C-terminal OMM anchor |

Both GTPase domains are "atypical" relative to canonical Rho GTPases [^fransson2003]. The C-terminal GTPase domain shows broader NTPase activity (GTP, ATP, UTP); this biochemical characterization derives from later structural and biochemical work and is not reported directly in Fransson 2003, which characterized domain architecture. #gap/unsourced — a primary citation for the NTPase activity (GTP, ATP, UTP) of the C-terminal GTPase domain is needed. Structural analysis of Drosophila Miro (ortholog of both vertebrate paralogs) showed that the EF-hand 2 and C-terminal GTPase domain are conformationally coupled — Ca²⁺ occupancy of EF-hand 2 shifts the GTPase 2 domain, and the PINK1 phosphorylation site lies within the extensive EF-hand–cGTPase interface, providing an allosteric mechanism by which Ca²⁺ could influence nucleotide binding or effector interactions [^klosowiak2013]. Whether this coupling is functionally distinct between MIRO1 and MIRO2 is not established. #gap/no-mechanism

## Function

### Mitochondrial trafficking — shared machinery with MIRO1

MIRO2, together with [[miro1]], forms the OMM receptor layer of the mitochondrial transport machinery. Both proteins interact with TRAK1 and TRAK2 (Milton orthologs), which simultaneously bind kinesin-1 (KIF5B) for anterograde trafficking and dynein–dynactin for retrograde trafficking [^fransson2003][^lopezd2018]. Genetic ablation of both *Miro1* and *Miro2* (Miro-DKO MEFs) eliminates mitochondrial motility more completely than loss of either paralog alone, demonstrating functional redundancy for bulk trafficking [^lopezd2018].

A key specificity point: López-Domènech et al. 2018 found that Miro1 and Miro2 cooperate not only for microtubule-based transport but also for **actin-dependent mitochondrial distribution** — loss of both paralogs (Miro-DKO) causes perinuclear collapse of the mitochondrial network and loss of mitochondria from cell protrusions. Miro2 is proposed to have a more prominent role than Miro1 in actin-based redistribution, partly through more efficient recruitment of the myosin Myo19 to the OMM; Miro1KO has a stronger effect on long-range microtubule-dependent trafficking, while Miro2KO shows reduced Myo19 stability on mitochondria [^lopezd2018]. Neither single-KO fully recapitulates the DKO phenotype. This broader transport role emphasizes MIRO2's non-redundant contribution to mitochondrial positioning outside the neuron-centric view of MIRO1.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — MIRO2 ubiquitously expressed; MIRO–TRAK–motor complex conserved in human cells |
| Phenotype conserved in humans? | partial — DKO trafficking phenotype characterized in MEFs; human tissue data limited |
| Replicated in humans? | no — human in vivo data lacking |

### Calcium-dependent arrest

MIRO2 EF-hand domains confer Ca²⁺-dependent arrest by the same mechanism described for [[miro1]]: at resting cytoplasmic Ca²⁺ (~100 nM), mitochondria are motile; at elevated local [Ca²⁺] (~1–5 µM), EF-hand occupancy triggers dissociation of the MIRO–TRAK–kinesin complex, immobilizing mitochondria at high-Ca²⁺ sites [^fransson2003]. #gap/needs-human-replication — quantitative Ca²⁺ dose-response for MIRO2-specific EF-hand mutants has not been measured in a human cell system; existing data derive from rodent neurons or use heterologous expression of Miro1.

## Role in the PINK1–Parkin pathway

MIRO2 is a co-substrate alongside [[miro1]] in the PINK1/Parkin damage-sensing cascade on depolarized mitochondria [^wang2011]. The sequence mirrors what is detailed on [[pink1-parkin-pathway]]; key MIRO2-specific points:

1. **PINK1 phosphorylation** — PINK1 phosphorylates MIRO2 at the site equivalent to MIRO1 Ser156 (exact human MIRO2 phosphosite not confirmed separately from MIRO1 in Wang 2011; inferred by sequence homology) [^wang2011]. Note: Birsa et al. 2014 found that the Miro1 S156A phospho-null mutant does not substantially affect the kinetics of Miro1 ubiquitination in dopaminergic SH-SY5Y cells [^birsa2014], suggesting PINK1 phosphorylation of Miro may be cell-type- or context-dependent (or that Parkin can be activated by PINK1 phosphorylation of ubiquitin/Parkin independently of Miro phosphorylation). This creates uncertainty about whether MIRO2 phosphorylation at the equivalent site is strictly required for its ubiquitination.
2. **Parkin ubiquitination — K27 linkage** — Parkin ubiquitinates Miro, generating atypical K27-linked polyubiquitin chains (in addition to Lys-11 and Lys-29 linkages). Birsa et al. 2014 showed that this K27-predominant ubiquitination is strictly dependent on Ser65 of the Parkin Ubl domain, linking Parkin's phospho-activation state to Miro degradation [^birsa2014]. **Important attribution note:** Birsa 2014 studied this mechanism for Miro1 throughout; MIRO2 is mentioned only once in the paper, parenthetically, in the context of a PINK1 substrate screen. The K27 linkage and Parkin Ser65 dependence are **not independently demonstrated for MIRO2** in this paper. By analogy with Miro1 and their high sequence conservation (~60%), the same mechanism likely applies, but direct evidence for MIRO2-specific K27 chain composition in a MIRO2-focused experiment is lacking. #gap/needs-replication — MIRO2-specific K27 chain characterization. The K27 linkage is distinct from the more commonly studied K48/K63 chains and may have implications for proteasomal targeting specificity.
3. **Degradation and motor detachment** — ubiquitinated MIRO2 is degraded by the proteasome, releasing the MIRO–TRAK–motor linkage and isolating the damaged mitochondrion prior to autophagosome engulfment [^wang2011].

Miro (detected via anti-Miro1 antibody cross-reactive with Miro2) accumulates on depolarized mitochondria in PINK1-null and Parkin-null cells [^wang2011]. The phospho-dead Miro S156A mutant delays mitochondrial arrest; this was demonstrated for Miro1 — MIRO2-specific phospho-dead data were not separately reported in Wang 2011. Whether a MIRO2-equivalent S156A mutant delays mitophagy is inferred by analogy, not directly tested. #gap/needs-replication

## MIRO1 / MIRO2 paralog comparison

| Feature | MIRO1 (RHOT1) | MIRO2 (RHOT2) |
|---|---|---|
| UniProt | Q8IXI2 | Q8IXI1 |
| Gene | RHOT1 | RHOT2 |
| Sequence identity | — | ~60% overall [^fransson2003] |
| Tissue expression | Neuronal-enriched, ubiquitous low | Ubiquitous; high in heart, liver, muscle, kidney, pancreas |
| Null mouse phenotype | Perinatal lethal (*Rhot1*-null) | *Rhot2*-null: viable and fertile to adulthood [^lopezd2018]; Miro-DKO (both knocked out) is lethal at E10.5 |
| Dominant aging context | Neurodegeneration / axonal trafficking | Peripheral tissue mitochondrial quality control; broader non-neuronal role |
| PINK1/Parkin regulation | Yes; Ser156 phosphorylation (Wang 2011); K27-predominant ubiquitination [^birsa2014] | Yes; equivalent phosphorylation (inferred by homology; not directly confirmed in Wang 2011); K27 mechanism inferred by analogy — not independently demonstrated for MIRO2 [^birsa2014] |
| Microtubule transport | Yes (kinesin-1, dynein) | Yes (shared TRAK1/2 adaptor) |
| Actin-dependent distribution | Partial (requires Miro2 co-expression) | Yes (see DKO phenotype) [^lopezd2018] |
| Parkinson's association | Heterozygous mutations in PD patients | Not individually studied in PD patient cohorts |

## Aging context

### Non-neuronal mitochondrial quality control

Because MIRO2 is broadly expressed in metabolically demanding non-neuronal tissues (heart, skeletal muscle, liver), its age-dependent dysfunction has different implications than the axonal trafficking failure attributed to [[miro1]] decline. In these tissues, inefficient MIRO2-dependent mitophagy could impair organelle quality control during the heightened mitochondrial stress of aging.

Age-associated reductions in mitophagy flux in heart and skeletal muscle are well documented (reviewed in [[mitophagy]] and [[mitochondrial-dysfunction]]); whether MIRO2 protein levels or turnover rates change with age in these tissues is not directly established. #gap/unsourced — a direct measurement of MIRO2 protein across aged vs young human heart or skeletal muscle tissue is lacking.

### Coupling to PINK1–Parkin pathway decline

The broader PINK1–Parkin axis declines functionally with age in multiple tissues, as reviewed on [[pink1-parkin-pathway]]. Given MIRO2's position as a direct PINK1 phosphosubstrate and Parkin ubiquitination target, any attenuation of PINK1 or Parkin activity with age would impair MIRO2 degradation and delay motor detachment from damaged mitochondria. This would reduce mitophagy throughput in exactly those tissues — heart, skeletal muscle — where age-related mitochondrial dysfunction most directly underlies loss of organ function.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — PINK1/Parkin/MIRO2 axis functional in human cell lines |
| Phenotype conserved in humans? | unknown — no age-stratified human tissue data for MIRO2 specifically |
| Replicated in humans? | no |

#gap/needs-human-replication

## Pathway membership

- [[mitophagy]] — MIRO2 removal is required for motor detachment and mitophagy initiation on depolarized mitochondria
- [[pink1-parkin-pathway]] — MIRO2 is a direct PINK1 phosphosubstrate and Parkin ubiquitination target
- [[mitochondrial-dysfunction]] — impaired MIRO2 trafficking degrades mitochondrial quality control in non-neuronal tissues

## Key interactors

- [[parkin]] (PRKN) — E3 ubiquitin ligase; K27-polyubiquitinates MIRO2 on Ser65-activated Parkin
- [[pink1]] — Ser/Thr kinase; phosphorylates MIRO2 on the equivalent of MIRO1 Ser156
- [[trak1]] / [[trak2]] — adaptor proteins bridging MIRO2 to kinesin-1 and dynein; shared with MIRO1
- [[miro1]] — paralog (RHOT1, ~60% identity); partial functional redundancy; both required for full trafficking range
- USP30 — deubiquitinase counteracting Parkin-driven MIRO2 ubiquitination; USP30 inhibition augments mitophagy

## Limitations and gaps

- #gap/needs-human-replication — All mechanistic data on MIRO2 trafficking and PINK1/Parkin-mediated degradation derive from mouse embryonic fibroblasts, Drosophila neurons, and human cell lines (HeLa, HEK293T). No in vivo human data on MIRO2 function.
- #gap/unsourced — Direct measurement of MIRO2 protein levels in aged vs young human heart, skeletal muscle, or liver tissue has not been reported.
- #gap/needs-replication — The K27-linked ubiquitination mechanism (Birsa 2014) was demonstrated for Miro1 in overexpression systems; Miro2 was not independently studied for K27 chain composition. Endogenous MIRO2-specific K27 chain characterization in primary human cells is lacking.
- #gap/no-mechanism — The allosteric coupling between EF-hand 2 and GTPase domain 2 identified in Drosophila Miro (Klosowiak 2013) has not been functionally resolved to separate MIRO2-specific outputs; Ca²⁺ dose-response measurements using MIRO2-specific EF-hand mutants in human cells are absent.
- #gap/long-term-unknown — Consequences of tissue-specific *Rhot2* deletion in adult mouse heart or skeletal muscle across aging have not been published.
- #gap/needs-canonical-id — GenAge entry for RHOT2/MIRO2: not present in GenAge human database (aging relevance inferred from pathway membership; no direct longevity genetic data). Tag for future re-check.

## Footnotes

[^fransson2003]: doi:10.1074/jbc.M208609200 · Fransson A et al. 2003 J Biol Chem · in-vitro (NIH3T3 fibroblasts + COS 7 cells; Myc-tagged Miro-1/Miro-2 overexpression) · · identifies Miro-1 and Miro-2 as atypical Rho GTPases (618 aa each; 60% identical); Northern blot establishes tissue expression: Miro-1 mRNA abundant in heart and skeletal muscle; Miro-2 mRNA abundant in heart, liver, skeletal muscle, kidney, and pancreas; Miro localizes to mitochondria (co-stains with MitoTracker and cytochrome c); constitutively active Miro-1/Val-13 induces perinuclear aggregation of the mitochondrial network and increased apoptosis (M30 assay). Note: this paper describes domain architecture by sequence analysis; biochemical NTPase activity measurements are not reported here.

[^wang2011]: doi:10.1016/j.cell.2011.10.018 · Wang X, Schwarz TL 2011 Cell · in-vitro (Drosophila motor neurons + rat/mouse hippocampal neurons + HeLa + HEK293T; PINK1-null + Parkin-null comparison; anti-Miro1 antibody cross-reactive with Miro2) · · demonstrates PINK1 phosphorylates Miro at Ser156 (experimentally confirmed for human Miro1; MIRO2 equivalent site inferred by sequence alignment to Drosophila Miro) and Parkin ubiquitinates Miro → proteasomal degradation → motor detachment → mitophagy initiation; Miro accumulates on depolarized mitochondria in PINK1-null and Parkin-null cells; phospho-dead Miro S156A delays mitochondrial arrest; MIRO2-specific data not reported separately

[^birsa2014]: doi:10.1074/jbc.M114.563031 · Birsa N et al. 2014 J Biol Chem · in-vitro (SH-SY5Y dopaminergic neuroblastoma, COS-7, HeLa, HEK; overexpression + endogenous Miro in neuronal cells + PD patient fibroblasts; Parkin mutant panel) · · demonstrates K27-predominant ubiquitination of Miro (studied primarily for Miro1; Miro2 mentioned only in one sentence citing a PINK1 substrate screen) is strictly dependent on Ser65 of the Parkin Ubl domain; Miro1 S156A phospho-null mutant does not affect ubiquitination kinetics in SH-SY5Y cells; Miro ubiquitination precedes degradation and may signal mitochondrial arrest independently of rapid Miro removal. **Note:** K27 linkage and Parkin Ser65 dependence are demonstrated for Miro1, not independently for MIRO2.

[^lopezd2018]: doi:10.15252/embj.201696380 · López-Domènech G et al. 2018 EMBO J · in-vitro (MEFs from Miro1-KO, Miro2-KO, and Miro-DKO mice generated from E8.5 embryos; primary neurons) · · Miro1 and Miro2 together coordinate both microtubule- and actin-dependent mitochondrial transport; Miro2-KO mice viable and fertile to adulthood; Miro-DKO lethal at E10.5; Miro2 has a more prominent role in actin-based distribution and Myo19 stabilisation on mitochondria; Miro1 is the primary regulator of long-range microtubule-dependent trafficking; TRAK1/2 and motor proteins can still localise to mitochondria in the complete absence of both Miro proteins

[^klosowiak2013]: doi:10.1038/embor.2013.151 · Klosowiak JL et al. 2013 EMBO Rep · structural (X-ray crystallography; Drosophila Miro tandem EF-hand + C-terminal GTPase domain) · PMID 24071720 · PMC3818075 · archive pending (bronze OA; PDF download stalled; verified from PubMed abstract) · first crystal structure of Miro EF-hand/GTPase-2 domain complex; reveals two 'hidden' non-canonical EF hands each paired with a canonical EF hand; demonstrates allosteric coupling between Ca²⁺-bound EF-hand and cGTPase domain; PINK1 phosphorylation site lies within the EF-hand–cGTPase interface
