---
type: protein
aliases: [TERF2, TRBF2, "telomeric repeat-binding factor 2"]
uniprot: Q15554
ncbi-gene: 7014
hgnc: 11729
ensembl: ENSG00000132604
genage-id: 116
mouse-ortholog: Terf2
pathways: ["[[telomerase-pathway]]", "[[dna-damage-response]]"]
hallmarks: ["[[telomere-attrition]]", "[[cellular-senescence]]", "[[genomic-instability]]"]
sens-categories: []
known-interactors: ["[[shelterin]]", "[[atm]]", "[[trf1]]", "[[rap1-telomere]]", "[[pot1]]", "[[tin2]]"]
druggability-tier: 4
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[dna-damage-response]]", "[[cellular-senescence]]", "[[genomic-instability]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Broccoli 1997, van Steensel 1998, Celli & de Lange 2005, Doksani 2013, and Wu/Takai/de Lange 2012 verified against primary source PDFs. Domain residue boundaries (Broccoli 1997) noted as partially sourced from post-1997 structural work — see body. Open Targets API now functional for ENSG00000132604; tier-4 retained on aging-context grounds. Terf2+/- lymphoma and skin-keratinocyte age-correlation claims remain #gap/unsourced — no primary sources identified."
---


# TRF2 (TERF2)

TRF2 is the t-loop / end-protection subunit of the [[shelterin]] complex. It binds duplex telomeric TTAGGG repeats and enforces t-loop formation — the lariat structure that buries the chromosome 3' terminus inside internal repeat tracts, hiding it from the ATM-mediated DNA damage response (DDR). Loss or functional inactivation of TRF2 is sufficient to trigger ATM-CHK2-p53 activation at chromosome ends and end-to-end fusions via NHEJ. TRF2 levels decline with age in multiple tissues, and its dysfunction is a proximal driver of [[telomere-attrition]]-induced [[cellular-senescence]].

## Identity

- **UniProt:** Q15554 (TERF2_HUMAN) — Swiss-Prot curated entry
- **NCBI Gene:** 7014 (TERF2)
- **HGNC symbol:** TERF2
- **Ensembl:** ENSG00000132604
- **GenAge HAGRID:** 116 — included in GenAge-human as aging-relevant gene
- **Mouse ortholog:** Terf2 (one-to-one; used in cKO studies)
- **Length:** 542 amino acids (canonical isoform; UniProt Swiss-Prot, accessed 2026-05-05)

## Domain architecture

TRF2 has a three-domain organization with a large unstructured N-terminal extension [^broccoli1997]:

| Domain | Residues (approx.) | Function |
|---|---|---|
| Basic (GAR) domain | ~1–45 (N-terminal) | Positively charged; essential for t-loop strand invasion and telomeric chromatin association; required for telomere end-capping independent of dsDNA binding |
| TRFH dimerization domain | ~84–287 | Mediates homodimerization; contains a surface groove that recruits DCLRE1B/Apollo (but not TIN2, which binds TRF1's TRFH); also contacts RAP1/TERF2IP |
| Myb / HTH DNA-binding domain | ~484–541 | Sequence-specific recognition of double-stranded 5'-TTAGGG-3'; structural homolog of TRF1's Myb domain but non-interchangeable |

Note: Broccoli 1997 defines these three domains conceptually and maps the dimerization domain by analogy to TRF1 (aa 45–246 in TRF1; corresponding region in TRF2 shown to homodimerize). Precise residue boundaries for TRF2 derive from post-1997 structural and biochemical work (e.g., Chen 2008 crystal structure of TRFH; Nishikawa 2001 Myb domain structure); the Broccoli 1997 citation covers domain identification and homodimerization evidence only.

The large unstructured basic region between the GAR and TRFH domains (aa ~46–83) is thought to contribute to electrostatic interactions with the DNA backbone and to HOT1 recognition.

## Key post-translational modifications

- **Thr230 phosphorylation** — by ATM after DNA damage; part of a feedback loop in which TRF2-bound ATM is initially active then restrained
- **Ser365 phosphorylation** — function not fully resolved #gap/no-mechanism
- **Arg59 / Arg60 methylation** — by PRMT1; promotes interaction with the GAR domain and telomeric DNA association #gap/needs-replication
- **SUMOylation** — multiple sites (Lys287, 335, 353, 369, 375, 452); promotes shelterin complex stability during replication #gap/needs-replication

## Function

### T-loop formation and ATM suppression

TRF2's primary aging-relevant function is the promotion of t-loop topology — strand invasion of the 3' G-overhang into internal duplex telomeric repeats, forming a lariat that conceals the chromosome terminus [^doksani2013]. Super-resolution **STORM** (stochastic optical reconstruction microscopy) imaging confirmed that t-loops form *in vivo* at mammalian telomeres and are TRF2-dependent: conditional deletion of TRF2 in SV40LT-immortalized mouse MEFs reduced t-loop frequency 6-fold (from ~36% to ~6% of scored telomeres; p=0.01, three independent experiments). Deletion of TRF1, Rap1, POT1a, or POT1b had no effect on t-loop frequency [^doksani2013]. Full-length TRF2 reconstitution experiments are not described in this paper; the conclusion is that TRF2 is required for t-loop formation/maintenance.

The t-loop buries the 3' single-stranded overhang and conceals the free chromosome end from MRN (MRE11-RAD50-NBS1) recognition, thereby suppressing ATM kinase activation. This makes TRF2 the primary gatekeeper against ATM-dependent DDR at telomeres [^celli2005].

### Apollo recruitment and 3' overhang generation

TRF2 recruits DCLRE1B (Apollo), a 5' → 3' exonuclease, to leading-strand telomeres via the TRFH groove. Apollo performs 5'-resection of the blunt leading-strand end after replication, generating the 3' single-stranded G-overhang specifically at **leading-end telomeres** (~30-40% reduction in overhang signal at leading ends in Apollo KO MEFs) [^wu2012]. Loss of Apollo leads to specifically leading-strand telomere fragility and NHEJ-mediated fusions of leading-end telomeres. Importantly, Exo1 (a 5' exonuclease not recruited by TRF2) contributes independently to transient overhang elongation at both leading and lagging ends during S/G2; the POT1b-associated CST complex then corrects the extended overhangs in G1. The TRF2-Apollo axis is therefore responsible for leading-strand overhang specifically, not for the total telomeric overhang signal.

### RTEL1 and t-loop disassembly

The RTEL1 (regulator of telomere elongation helicase 1) interacts with TRF2 and is required to disassemble t-loops during S-phase to allow telomere replication. Without RTEL1-TRF2 interaction, persistent t-loops become replication forks obstacles, generating telomere fragility and ECTR (extrachromosomal telomeric repeats) #gap/needs-replication (RTEL1-TRF2 interaction mechanisms not directly examined in the papers cited here; claim derived from published RTEL1 literature).

## Role in aging

### Dominant-negative uncapping and replicative senescence

van Steensel et al. 1998 demonstrated that expression of TRF2-ΔBΔM (deletion of both the basic N-terminal domain and the Myb C-terminal domain) acts as a dominant negative, displacing endogenous TRF2 from telomeres [^vansteensel1998]. The experiments were conducted in **HTC75 cells** (a tetracycline-controllable derivative of the human fibrosarcoma line HT1080; also HeLa cells for localization assays). TRF2-ΔBΔM induction caused:

- Rapid appearance of anaphase bridges and chromosome end-to-end fusions (within ~4 days of doxycyclin induction; fusion frequency increased ≥10-fold; 88% of metaphases showed at least one fusion after 6 days)
- A new class of enlarged TTAGGG-repeat restriction fragments (approximately twice normal telomere length), consistent with end-joined fused telomeric DNA — the paper does not use the term "extrachromosomal circles"
- A senescence-like growth arrest in HTC75 cells, accompanied by β-galactosidase positivity, vacuolated cytoplasm, and enlarged morphology; the arrest appeared irreversible and less intense than that of senescent primary fibroblasts (direct comparison)

This was the founding demonstration that TRF2 functional loss is sufficient to drive uncapping-induced growth arrest independently of progressive telomere shortening. Whether the arrest in transformed HTC75 cells is equivalent to replicative senescence in primary fibroblasts was noted by the authors as requiring further analysis.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Human HTC75 and HeLa cells used directly in van Steensel 1998 |
| Phenotype conserved in humans? | yes | End-to-end fusions occur in human cells; ATM-CHK2 axis conserved |
| Replicated in humans? | yes | Multiple labs; human cancer cell lines and primary cells confirm |

### TRF2 conditional knockout: ATM-DDR is NHEJ-independent

Celli & de Lange 2005 used conditional TRF2 deletion (Cre-lox in MEFs) to dissect the mechanism. Key findings [^celli2005]:

- TRF2 loss triggered ATM-Ser1981 phosphorylation and CHK2 activation at telomeres within 48–72 h post-Cre
- Chromosome end-to-end fusions increased ~50-fold and were suppressed ~120-fold by DNA ligase IV knockout, confirming NHEJ as the fusion mechanism
- However, in TRF2-/- Lig4-/- p53-/- triple-null cells, telomere 3' overhangs were preserved (119 ± 18% of control by TRF overhang assay) yet telomere DDR foci were still present — demonstrating that NHEJ-mediated degradation is **not** the ATM activation signal
- The paper thus directly supports the model that TRF2 suppresses ATM via structural sequestration (t-loop and/or protein contact) rather than via nucleolytic processing of the 3' end

This study is one of the highest-priority citations on the [[shelterin]] page; see that page's footnote for the verified claim detail.

### Age-related decline of TRF2 expression

TRF2 protein and mRNA levels decline with replicative age in human fibroblasts and in multiple tissues during organismal aging in mice and humans, including skin keratinocytes (where TRF2 levels correlate with biological age proxies) #gap/needs-replication #gap/unsourced (the age-expression correlation in skin keratinocytes is referenced in the brief but specific primary sources have not been identified and cited here; a PubMed search targeting this claim is needed before relying on it in downstream pages).

### Mouse models

- **Heterozygous TRF2 knockout (Terf2+/-)** mice show increased genomic instability, higher frequency of chromosome fusions, and elevated cancer incidence (primarily lymphoma). This demonstrates that half-dose TRF2 is haploinsufficient for telomere protection in the context of oncogenic stress #gap/needs-replication (specific paper for Terf2+/- lymphoma phenotype not identified here — a targeted PubMed search is needed to confirm the citation for this claim; #gap/unsourced pending identification). #gap/needs-human-replication for extrapolation to human aging.

- **Terf2 transgenic overexpression in skin (K5TRF2 mice)** — elevated TRF2 in mouse epidermal keratinocytes (driven by the keratin-5 promoter) paradoxically caused **critically short telomeres**, increased chromosomal instability, and susceptibility to UV-induced carcinogenesis (Blanco et al. 2007, Stout & Blasco 2009; PMID 17234886, 19259387). The mechanism involves TRF2 overexpression deregulating XPF/ERCC1-mediated telomere processing, leading to accelerated telomere shortening rather than protection. This creates a non-linear dosage relationship: too little TRF2 → uncapping/senescence; too much → accelerated telomere erosion and oncogenic permissiveness via genomic instability. GenAge notes this paradox (HAGRID 116). #gap/needs-replication (primary source PDFs not verified against full text in this pass; citations are to Blasco lab published abstracts)

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | TRF2/ATM/CHK2/p53 axis structurally and functionally identical |
| Phenotype conserved in humans? | partial | Mouse telomeres are ~40–60 kb vs ~10 kb human; haploinsufficiency threshold may differ |
| Replicated in humans? | no | Heterozygous TRF2-loss aging phenotypes not studied in humans #gap/needs-human-replication |

## Relationship to telomere shortening

TRF2's end-protection function is distinct from telomere length control. TRF2 does not regulate the activity of telomerase directly (that role belongs to TPP1-POT1). However, critically short telomeres are thought to lose sufficient TRF2 binding — because TRF2 requires a minimum stretch of duplex TTAGGG repeats for stable occupancy — and therefore to lose t-loop formation capacity. This is the mechanistic bridge between telomere attrition (progressive shortening with each replication cycle) and the DDR/senescence activation that defines the [[telomere-attrition]] hallmark.

## Druggability

**Tier 4 — no validated modulator in aging context** (aging-context convention; see CLAUDE.md). Open Targets Platform API (queried 2026-05-07, ENSG00000132604) returns tractability entries including "Approved Drug" and "Advanced Clinical" across SM, AB, and OC modalities — however, these reflect pathway-level associations (e.g., drugs acting on telomere-related pathways in cancer contexts) rather than TRF2-directed agents. No approved drug, clinical candidate, or high-quality preclinical probe is known to act directly on TRF2. TRF2 lacks enzymatic activity; it functions via protein-DNA and protein-protein interactions. The TRFH groove that recruits Apollo/DCLRE1B is a PPI surface — in principle tractable by stabilized peptides or macrocyclic peptidomimetics, but no such molecule has been published with cellular TRF2 target engagement. Targeting it would require either (a) small-molecule stabilization to prevent age-related TRF2 decline, or (b) disruption in cancer contexts where TRF2 overexpression permits replication-stress tolerance. Tier-4 designation retained on aging-context grounds pending identification of a specific TRF2-directed probe.

A direct TRF2 activator to stabilize telomere capping in aging tissues has been proposed conceptually but not demonstrated experimentally #gap/no-mechanism.

## Pathway membership

- [[telomerase-pathway]] — TRF2 is part of the shelterin platform through which telomerase access is regulated (by TPP1-POT1 on the same complex)
- [[dna-damage-response]] — TRF2 is the primary suppressor of ATM-branch DDR activation at telomere ends; TRF2 loss directly engages ATM → CHK2 → [[p53]] → [[p21]] → G1/S arrest or senescence

## Key interactors

- [[shelterin]] — TRF2 is a structural subunit (dsDNA arm); see complex page for full architecture
- [[atm]] — activated at deprotected telomeres upon TRF2 loss; ATM also phosphorylates TRF2 at Thr230
- [[trf1]] — sister dsDNA-binding subunit; shares telomeric TTAGGG repeat coating with TRF2 but recruits distinct downstream factors
- [[rap1-telomere]] — TERF2IP/RAP1; constitutive TRF2-binding partner; represses HDR at telomeres; has extra-telomeric NF-κB roles
- [[pot1]] — ssDNA-binding subunit of the same complex; suppresses ATR-DDR; linked to TRF2 via TIN2 scaffold
- [[tin2]] — scaffold subunit; bridges TRF2 and TRF1 to the POT1-TPP1 subcomplex
- [[p53]] — downstream effector of TRF2-loss-triggered ATM signaling; executes senescence and apoptosis
- [[terc]] / [[tert]] — telomerase components whose access to the telomere is gated by the same shelterin complex TRF2 anchors

## Gaps and open questions

- **Age-related TRF2 decline mechanism:** the cause of declining TRF2 expression with organismal age is unknown. Candidate explanations include epigenetic silencing at the TERF2 locus, accumulating DNA damage at the gene itself, or secondary effects of altered transcription-factor networks in senescent cells. #gap/no-mechanism
- **Human haploinsufficiency phenotype:** whether Terf2+/- aging and cancer phenotypes described in mice translate to any human population-level variant association is untested. MR instrument status: `not-tested`. #gap/needs-human-replication
- **TRF2 stabilization as intervention:** conceptually appealing to prevent premature telomere uncapping in aging tissues, but no small-molecule TRF2 stabilizer has been described. #gap/needs-replication
- **Druggability confirmation:** Open Targets Platform API (ENSG00000132604) queried successfully 2026-05-07; returns tractability hits including "Approved Drug" and "Advanced Clinical" (SM/AB/OC modalities), reflecting cancer-pathway associations rather than TRF2-directed agents. Druggability-tier: 4 retained on aging-context grounds — no TRF2-directed clinical drug or validated probe exists. The HTTP 400 error reported during seeding is resolved.
- **RTEL1-TRF2 t-loop disassembly:** the interaction interface is structurally incomplete; whether disrupting this interaction could selectively target cancer cells over normal aging cells is an open question. #gap/no-mechanism
- **Skin keratinocyte age-correlation:** TRF2 levels as a biological-age proxy in keratinocytes is mentioned in the context brief but the specific primary source has not been identified and verified here. #gap/unsourced — cite before relying on this claim.
- **Terf2+/- lymphoma phenotype:** primary source not identified during this seeding pass. #gap/unsourced — needs targeted PubMed search.

## Footnotes

[^broccoli1997]: doi:10.1038/ng1097-231 · Broccoli D, Smogorzewska A, Chong L, de Lange T · *Nature Genetics* 1997 · 17:231–235 · in-vitro (biochemical + cell biology) · n/a · model: human HeLa cells + transfected NIH3T3 cells + recombinant in-vitro translation · cloned TRF2 as the second human telomere dsDNA-binding protein; showed TRF2 homodimerizes (TRFH domain, homologous to TRF1 aa 45-246 dimerization domain); defined basic N-terminal domain and C-terminal Myb-type HTH (sequence-specific for TTAGGG repeats); TRF2 does not heterodimerize with TRF1; both proteins present simultaneously at telomeres; 919 citations · **PDF downloaded** (archive:  (local PDF))

[^vansteensel1998]: doi:10.1016/s0092-8674(00)80932-0 · van Steensel B, Smogorzewska A, de Lange T · *Cell* 1998 · 92:401–413 · in-vitro (human cancer cell lines) · n=multiple clonal lines (4 independent TRF2-ΔBΔM clonal lines tested) · model: **HTC75 cells** (tetracycline-inducible HT1080 fibrosarcoma derivative); HeLa cells (localization only) · dominant-negative TRF2-ΔBΔM drives chromosome end-to-end fusions (≥10-fold increase; 88% metaphases fused at day 6), loss of G-strand overhang signal (~40-60% reduction), and a senescence-like growth arrest in HTC75 (β-galactosidase+, vacuolated, irreversible); fused telomeres retain telomeric TTAGGG signal; 1694 citations · **PDF downloaded** (archive:  (local PDF))80932-0.pdf)

[^celli2005]: doi:10.1038/ncb1275 · Celli GB, de Lange T · *Nature Cell Biology* 2005 · 7:712–718 · in-vitro (MEF conditional KO) · n=MEFs from 5 independent embryos; fusions quantified in 12 clonal TRF2^F/- p53^-/- MEF lines · model: Terf2 floxed MEFs (mixed 129/BL6 background; ES cells from 129P2/Ola) · TRF2 loss → ATM-Ser1981 + CHK2 phosphorylation at 48–72 h post-Cre; ~50-fold increase in fusions (Lig4-dependent NHEJ); ~120-fold reduction in fusions in Lig4-/- cells; overhangs retained at 119 ± 18% of control (n=3) in TRF2-/- Lig4-/- p53-/- cells — establishes structural (non-nucleolytic) ATM suppression by TRF2; 604 citations · **PDF verified 2026-05-07 against primary source** (archive:  (local PDF); previously verified on [[shelterin]] page 2026-05-05)

[^doksani2013]: doi:10.1016/j.cell.2013.09.048 · Doksani Y, Wu JY, de Lange T, Zhuang X · *Cell* 2013 · 155:345–356 · in-vitro (super-resolution **STORM** imaging) · n/a · model: SV40LT-immortalized mouse MEFs (TRF2^F/- Cre-ER^T1 conditional deletion system); also splenocytes · STORM (stochastic optical reconstruction microscopy) directly visualizes t-loops at mammalian telomeres *in vivo*; t-loop frequency reduced 6-fold (36% → 6%; p=0.01) upon TRF2 conditional deletion; deletion of TRF1, Rap1, or POT1a/b had no effect on t-loop frequency, establishing TRF2 as the sole shelterin component required for t-loops; 485 citations · **PDF downloaded** (archive:  (local PDF))

[^wu2012]: doi:10.1016/j.cell.2012.05.026 · Wu P, Takai H, de Lange T · *Cell* 2012 · 150:39–52 · in-vitro (MEF conditional KO + biochemical) · n=3+ independent experiments for overhang quantification · model: Apollo/DCLRE1B conditional KO MEFs; Exo1 KO MEFs; Apollo/Exo1 DKO MEFs (mouse, SV40LT-immortalized) · Apollo generates 3' overhang specifically at leading-strand telomeres (~30-40% reduction at leading-end in Apollo KO); Exo1 contributes transiently extended overhangs at both leading and lagging ends in S/G2; POT1b-associated CST complex corrects excessive overhangs in G1; establishes TRF2-Apollo as critical for leading-strand overhang specifically (not lagging); Exo1 contribution is not TRF2-mediated; 319 citations · **PDF downloaded** (archive:  (local PDF))
