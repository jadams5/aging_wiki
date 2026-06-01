---
type: protein
aliases: [OPTN, optineurin, FIP2, NRP, HYPL, GLC1E, ALS12, E3-14.7K-interacting protein, NEMO-related protein]
uniprot: Q96CV9
ncbi-gene: 10133
hgnc: 17142
ensembl: ENSG00000123240
mouse-ortholog: Optn
druggability-tier: 3
caused-by: []
causes: []
key-domains: [coiled-coil, UBAN, LIR, zinc-finger-CCHC]
key-ptms: [Ser177-phosphorylation-TBK1, Ser198-phosphorylation, Ser342-phosphorylation, Ser526-phosphorylation]
pathways: ["[[mitophagy]]", "[[autophagy]]", "[[pink1-parkin-pathway]]", "[[nf-kb]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[disabled-macroautophagy]]", "[[chronic-inflammation]]"]
sens-categories: []
known-interactors: ["[[tbk1]]", "[[lc3]]", "[[parkin]]", "[[pink1]]", "[[ndp52]]", "[[p62]]"]
genage-id: null
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Maruyama 2010 (local PDF) and Wong 2014 (local PDF, downloaded 2026-05-04) verified against primary sources; Rezaie 2002, Wild 2011, Lazarou 2015 are not_oa and unverifiable without fulltext — claims sourced to these papers carry #gap/no-fulltext-access"
---

> ⚠️ Partially verified 2026-05-04 (claude). Maruyama 2010 and Wong 2014 verified against local PDFs. Rezaie 2002 (10.1126/science.1066901), Wild 2011 (10.1126/science.1205405), and Lazarou 2015 (10.1038/nature14893) are closed-access (`not_oa`) — claims sourced to these papers are tagged #gap/no-fulltext-access and have not been independently confirmed against fulltext. UniProt identity fields (Q96CV9, 577 aa, domain positions) not re-verified against live database this pass.

# OPTN (Optineurin)

Optineurin is a **selective autophagy cargo receptor** with dual roles in [[mitophagy]] (clearance of depolarized mitochondria) and xenophagy (clearance of intracellular bacteria). It is recruited to poly-ubiquitinated cargo via its UBAN domain, then tethers the cargo to autophagosomes through a TBK1-phosphorylated LIR motif that binds [[lc3|LC3]]. OPTN is also a major ALS (amyotrophic lateral sclerosis) gene, and glaucoma-causing mutations define its importance in ocular neuron survival. In the aging context, OPTN's role as a primary mitophagy receptor places it at the intersection of [[mitochondrial-dysfunction]] and [[disabled-macroautophagy]] — two hallmarks that amplify each other when cargo-receptor capacity declines.

## Identity

- **UniProt:** Q96CV9 (OPTN_HUMAN)
- **NCBI Gene:** 10133
- **HGNC:** 17142 (symbol: OPTN)
- **Mouse ortholog:** Optn
- **Length:** 577 amino acids (canonical isoform)
- **Molecular weight:** ~66 kDa
- **Aliases:** FIP-2 (E3-14.7K-interacting protein, adenovirus screen name), NRP (NEMO-related protein), HIP-7 (huntingtin-interacting protein 7); GLC1E (OMIM locus for primary open-angle glaucoma); ALS12 (OMIM locus for familial ALS)

## Domain organization

| Domain | Approx. residues | Function |
|---|---|---|
| Coiled-coil 1 | 38–170 | Self-association; Rab8 interaction; Golgi tethering |
| Coiled-coil 2 | 239–508 | Scaffolding; TBK1 docking |
| LIR motif | 176–181 (core: Phe178-Val-Ile-Ile181) | LC3/GABARAP binding → autophagosome recruitment |
| UBAN (ubiquitin-binding motif in ABIN/NEMO) | ~415–465 (UniProt positions; UniProt lists UBAN at 474–479 as core) | Binds linear (M1/Met1-linked) and K63-linked polyubiquitin chains |
| Zinc finger (CCHC NOA-type) | 547–577 | Structural; binds ubiquitin weakly; disease-mutation hotspot |

**Phosphoregulation of the LIR:** TBK1 phosphorylates **Ser177** (immediately upstream of the LIR Phe178 anchor), which dramatically enhances LC3 binding affinity [^wild2011]. #gap/no-fulltext-access — Wild 2011 is closed-access; quantitative detail (fold-enhancement, assay type) not independently confirmed from fulltext. This phospho-switch is functionally analogous to PINK1-mediated Ser17 phosphorylation of FUNDC1 (though driven by a different kinase), and analogous to ULK1-mediated Ser403 phosphorylation of p62. Ser177 phosphorylation is the mechanistic crux of OPTN's autophagy-receptor activation.

**UBAN selectivity:** The UBAN domain preferentially binds **linear (M1) and K63-linked** polyubiquitin chains, which distinguishes OPTN from other cargo receptors (e.g., [[p62]] which prefers K63/K48). On depolarized mitochondria coated by Parkin-deposited K63/K48-linked chains, OPTN is recruited via K63-Ub recognition. The ALS-causing **E478G** mutation lies within the UBAN domain and specifically disrupts ubiquitin binding, abolishing mitophagy receptor function [^wong2014].

## Discovery and characterization

OPTN was first identified in multiple independent protein-interaction screens under different names:

- As **FIP-2** (E3-14.7K-interacting protein) — discovered through interaction with an adenoviral anti-apoptotic protein.
- As **HIP-7** (huntingtin-interacting protein 7) — identified in a yeast-two-hybrid screen for huntingtin-binding proteins.
- As **NRP** (NEMO-related protein) — noted for structural homology to the NF-κB essential modulator NEMO/IKKγ, though it lacks IKK-binding capacity.

The gene was named **optineurin** and its sequence and disease relevance established by Rezaie et al. 2002, who identified mutations in the gene as causing familial primary open-angle glaucoma (POAG) [^rezaie2002]. #gap/no-fulltext-access — Rezaie 2002 is closed-access; the ~17% of hereditary POAG families figure cited in the seeder has not been confirmed against the primary PDF. The name derives from Latin *opticus* (eye) + Greek *neuron*, reflecting its ocular-neuronal expression pattern.

## ALS association

In 2010, Maruyama et al. performed **homozygosity mapping** (Affymetrix SNP 500K array) and candidate-region sequencing in six Japanese familial ALS kindreds and discovered that **exonic deletions and missense mutations in OPTN cause ALS** (designated ALS12) [^maruyama2010]. Extended analysis covered 76 familial ALS (FALS) and 597 sporadic ALS (SALS) individuals. Key findings:

- **Homozygous deletion of OPTN exon 5** (Alu-mediated recombination) in two siblings (family 1) → frameshift, premature stop → near-complete loss of protein expression → ALS.
- **E478G missense mutation** (c.1743A>G, exon 14; UBAN/DFxxER domain) in subjects from two families (families 4 and 5, four affected individuals) → dominant ALS; E478G protein fails to inhibit NF-κB and shows aberrant cytoplasmic distribution.
- **Q398X nonsense mutation** (c.1502C>T, exon 12) in one homozygous sporadic individual (also co-occurred with POAG) and one additional SALS subject → premature stop at codon 398, truncating the coiled-coil 2 domain.
- Q398X and E478G mutations were absent in 781 healthy Japanese volunteers and over 6,800 glaucoma individuals, confirming pathogenicity.
- The proportion of FALS attributable to OPTN is not explicitly quantified as a percentage in the Maruyama paper; **~1% of familial ALS** is a commonly cited derived estimate from subsequent cohort studies. #gap/needs-replication — prevalence estimates vary across populations and replication cohorts.

The ALS-OPTN link provides a direct genetic argument that impaired selective autophagy (specifically mitophagy/ubiquitin-aggregate clearance) is pathogenic in motor neurons. This mechanistically connects ALS to neuronal proteostasis failure, a theme shared with TDP-43 and FUS pathology.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | OPTN/TBK1/LC3 axis fully conserved |
| Phenotype conserved in humans? | yes | ALS12 is a human genetic disease (direct causal evidence) |
| Replicated in humans? | yes (ALS); partial (mitophagy) | ALS causality established; mitophagy flux data mostly from patient-derived cell lines |

## Mitophagy mechanism

### Recruitment to damaged mitochondria

OPTN is recruited to depolarized mitochondria through a multi-step process established by Lazarou et al. 2015 and Wong et al. 2014 [^lazarou2015] [^wong2014]:

1. Mitochondrial membrane potential collapse → PINK1 stabilization on the OMM → PINK1 phosphorylates ubiquitin at Ser65 → phospho-Ub recruits and activates [[parkin]] (an E3 ubiquitin ligase).
2. Parkin ubiquitinates OMM proteins (MFN1, MFN2, VDAC1, TOMM20), building K63/K27-linked polyubiquitin chains.
3. **OPTN (and [[ndp52|NDP52]])** are recruited to the polyubiquitin coat via their ubiquitin-binding domains.
4. TBK1 is co-recruited (via OPTN and NDP52 interactions), phosphorylates OPTN Ser177 → activates the LIR → OPTN bridges the ubiquitinated mitochondrion to LC3/GABARAP on the growing autophagosome membrane.
5. Autophagosome seals around the tagged mitochondrion → mitochondria-laden autophagosome fuses with lysosome → mitochondrial contents degraded.

**Critical Lazarou 2015 finding:** In a comprehensive genetic screen using cells lacking all five known cargo receptors (p62, NDP52, OPTN, TAX1BP1, NBR1), **OPTN and NDP52 are the primary essential receptors for PINK1/Parkin-driven mitophagy** — p62 is dispensable [^lazarou2015]. #gap/no-fulltext-access — Lazarou 2015 is closed-access; specific quantitative outcomes (reconstitution efficiencies, receptor hierarchy data) not independently confirmed from fulltext this pass. This revised the prior model where p62 was assumed to be the dominant mitophagy receptor. The p62-dispensability finding is independently supported by Wong 2014 (local PDF verified): p62 depletion does not disrupt LC3 recruitment to damaged mitochondria or impair mitochondrial degradation in parkin-expressing HeLa cells [^wong2014]. #gap/needs-replication — the primary-receptor conclusion (Lazarou) comes from one genetic reconstitution system; replication in primary neurons or cardiomyocytes is limited.

### Parkin-independent contexts

PINK1 can directly recruit OPTN and NDP52 even in the absence of Parkin, by generating phospho-ubiquitin signals that are sufficient (without further chain elongation) to concentrate cargo receptors [^lazarou2015]. This Parkin-independent arm is relevant for tissues with low Parkin expression (e.g., neurons).

## Xenophagy and innate immunity

Wild et al. 2011 (Science) demonstrated that OPTN functions as an **autophagy receptor for intracellular Salmonella** [^wild2011]. #gap/no-fulltext-access — Wild 2011 is closed-access; the following claims are from secondary literature and the wiki seeder and have not been confirmed against the primary PDF:

- Salmonella-containing vacuoles acquire ubiquitin coats → OPTN recruited via UBAN domain → TBK1 phosphorylates OPTN Ser177 → LC3 recruitment → xenophagy.
- OPTN knockdown increases intracellular *Salmonella* replication ~4-fold.
- The TBK1 phosphorylation step is required: Ser177Ala OPTN cannot restrict bacterial growth even when UBAN binding is intact.

This established the **TBK1 → OPTN Ser177 → LC3** phospho-LIR axis as a general mechanism operative in both mitophagy and antimicrobial autophagy. #gap/needs-human-replication — the bacterial-burden data are reportedly from HeLa cells; primary human macrophage data are limited.

## NF-κB regulation

A distinct function of OPTN, mechanistically separate from its autophagy-receptor role, is **inhibition of NF-κB signaling**:

- OPTN interacts with RIPK1 (receptor-interacting kinase 1) via its coiled-coil domain, competing with NEMO for RIPK1 binding.
- OPTN also sequesters poly-ubiquitinated RIPK1, preventing its activation of IKKβ.
- Net effect: OPTN acts as a **negative regulator of NF-κB** — loss of OPTN leads to constitutive low-level NF-κB activation.
- This is relevant to ALS pathogenesis: OPTN-null motor neurons show elevated inflammatory NF-κB signaling, potentially contributing to neurodegeneration via non-cell-autonomous glial activation.

In the aging context, chronic OPTN decline (from either reduced expression or disease-associated mutations) could contribute to [[chronic-inflammation]] via dysregulated NF-κB, creating a feed-forward loop: less OPTN → more NF-κB → more [[sasp|SASP]]-like inflammation → impaired mitophagy. #gap/no-mechanism — the link between age-related OPTN expression changes and NF-κB dysregulation has not been mechanistically dissected in aged tissues.

## OPTN E478G — ALS mutation dissects ubiquitin binding from LIR function

The E478G point mutation (within the UBAN/DFxxER domain) is mechanistically informative [^wong2014]:

- Abolishes stable K63/M1-linked ubiquitin binding → OPTN-E478G transiently contacts damaged mitochondria but fails to stably associate: only **~1%** of mitochondria are surrounded by optn-E478G after 1 h CCCP, vs **~60%** for wild-type OPTN (Fig. 4A, parkin-expressing HeLa cells, 20 µM CCCP).
- Consequently, LC3 autophagosome formation is dramatically impaired: only **~3%** of mitochondria are engulfed by LC3-positive autophagosomes with E478G expression, vs **~30%** with wild-type OPTN (Fig. 6H/I; p < 0.001).
- Does **not** impair LC3 binding via the LIR — an F178A LIR mutant (not E478G) is the construct used to show LIR-dependence of LC3 recruitment.
- Net: OPTN-E478G cannot stably link ubiquitinated cargo to autophagosomes → loss of mitophagy receptor function. The paper does not describe E478G as dominant-negative; it behaves as a loss-of-stable-recruitment allele.

This mutation cleanly separates the UBAN (stable cargo docking) step from the LIR (autophagosome recruitment) step. Both are independently required: UBAN-deficient E478G cannot recruit OPTN to mitochondria; LIR-deficient F178A recruits OPTN to mitochondria normally but cannot recruit LC3.

## Primary open-angle glaucoma (POAG)

Beyond ALS, OPTN mutations cause **GLC1E** (familial POAG):

- **E50K** — the most studied glaucoma mutation; lies in the coiled-coil region; in Maruyama 2010 the E50K protein retains NF-κB inhibitory activity (unlike E478G/Q398X), localizes near the Golgi, and forms large cytoplasmic granules [^maruyama2010]. The Rab8 interaction and RGC-death mechanism for E50K are attributed to post-2002 characterization [^rezaie2002]. #gap/no-fulltext-access — detailed E50K characterization claims sourced to Rezaie 2002 not confirmed against primary PDF.
- **H26D**, **R545Q** — additional POAG-associated variants (attributed to Rezaie 2002; #gap/no-fulltext-access).
- Mechanistic hypothesis: impaired vesicle trafficking (via Rab8 interaction) → intraocular pressure dysregulation → RGC degeneration. The glaucoma mechanism is distinct from the ALS/autophagy mechanism (UBAN mutations). #gap/no-mechanism — the direct link between E50K-driven vesicle trafficking defects and RGC death remains incompletely established.

## Aging relevance

- **Mitophagy decline in aging:** Mitophagy flux declines with age in multiple tissues. Whether this reflects reduced OPTN expression, TBK1 activity, or upstream PINK1/Parkin signaling is not fully resolved. #gap/needs-human-replication
- **Neurodegeneration:** OPTN aggregates have been found in TDP-43-positive and TDP-43-negative ALS inclusions, and in some Alzheimer's and Parkinson's disease brains, implicating OPTN dysfunction in a broader spectrum of age-related neurodegeneration beyond ALS.
- **NF-κB / inflammaging:** The OPTN–RIPK1–NF-κB axis positions OPTN as a potential brake on [[chronic-inflammation|inflammaging]]; age-related OPTN loss could accelerate inflammatory signaling. No longitudinal human data available. #gap/unsourced
- **GenAge status:** OPTN does not currently have a GenAge entry (genage-id: null) — its aging relevance is inferred from disease genetics and pathway membership, not from direct lifespan experiments. #gap/needs-canonical-id

## Pathway membership

- [[mitophagy]] — primary cargo receptor alongside [[ndp52]]
- [[autophagy]] — general selective autophagy receptor; also participates in aggrephagy
- [[pink1-parkin-pathway]] — downstream effector of PINK1/Parkin ubiquitin signaling
- [[nf-kb]] — negative regulator via RIPK1 sequestration

## Key interactors

| Interactor | Interaction type | Functional consequence |
|---|---|---|
| [[tbk1]] | Direct kinase | Phospho-Ser177 → LIR activation |
| [[lc3]] | LIR-mediated | Autophagosome docking |
| [[parkin]] | Indirect (via polyUb) | Recruited downstream of Parkin ubiquitination |
| [[pink1]] | Indirect (via phospho-Ub) | Parkin-independent recruitment |
| [[ndp52]] | Functional partner | Co-receptors for mitophagy; redundant overlap |
| [[p62]] | Functional competitor | Both bind ubiquitinated cargo; p62 is dispensable for mitophagy per Lazarou 2015 |
| Rab8A/B | Direct | Golgi/endosomal trafficking; disrupted by E50K glaucoma mutant |
| RIPK1 | Direct | NF-κB suppression |
| Huntingtin (HTT) | Direct (coiled-coil) | Unknown physiological significance; historical yeast-two-hybrid interaction |
| Myosin VI (MYO6) | Direct | Autophagosome maturation; OPTN bridges cargo to MYO6 actin-motor |

## Limitations and gaps

- **No direct lifespan data in any model organism.** OPTN's aging relevance is inferred from disease genetics (ALS12, GLC1E) and pathway position. #gap/needs-human-replication
- **Primary mitophagy receptor conclusion (Lazarou 2015) not yet replicated in primary neurons.** The quintuple-KO reconstitution was in HeLa cells; the p62-dispensability result is independently confirmed by Wong 2014 (local PDF) but also only in HeLa cells. Neuronal mitophagy may have distinct receptor hierarchies. #gap/needs-replication
- **Age-related expression changes:** GTEx shows OPTN expression across tissues, but longitudinal age-stratified data are sparse; Aging Atlas coverage limited. #gap/unsourced
- **Parkin-independent mitophagy quantification:** The relative contribution of OPTN in Parkin-low tissues (neurons) vs. Parkin-high tissues is not quantitatively resolved.
- **UBAN E478G mechanism:** Wong 2014 (verified) characterizes E478G as a loss-of-stable-recruitment allele, not a dominant-negative; whether E478G competes with WT OPTN in heterozygous patients remains debated. #gap/contradictory-evidence
- **NF-κB link to inflammaging:** The OPTN–RIPK1–NF-κB suppression axis has been described in cell-culture models (Maruyama 2010 confirmed Q398X and E478G abolish NF-κB inhibition in NSC-34 cells); evidence in aged human tissues is absent. #gap/unsourced
- **Three key sources unverifiable:** Rezaie 2002 (POAG genetics), Wild 2011 (xenophagy/Ser177 phosphorylation), Lazarou 2015 (mitophagy receptor hierarchy) are all closed-access. Quantitative claims attributed to these papers should be re-verified if PMC author manuscripts or preprints become available. #gap/no-fulltext-access
- **~17% of hereditary POAG families (Rezaie 2002):** This figure cited in the seeder was not confirmed against the primary PDF. #gap/no-fulltext-access
- **Schwamborn 2000 original cloning citation:** The supplied DOI (10.1074/jbc.275.27.21036) was absent from the archive index during seeding. Not cited here. Suggest verifier attempt DOI resolution via publisher if OPTN cloning provenance becomes relevant. #gap/unsourced

## Footnotes

[^rezaie2002]: doi:10.1126/science.1066901 · n=families (POAG, number unconfirmed) · observational (human genetics) · model: familial POAG kindreds · not_oa — fulltext not accessible; quantitative claims unverified #gap/no-fulltext-access
[^maruyama2010]: doi:10.1038/nature08971 · n=6 initial families; extended to 76 FALS + 597 SALS · observational (human genetics; homozygosity mapping + candidate-region sequencing) · model: Japanese ALS kindreds · local PDF available at archive
[^wild2011]: doi:10.1126/science.1205405 · in-vitro (HeLa cells, reported) · Salmonella xenophagy · Ser177 phosphorylation by TBK1; ~4-fold bacterial replication increase with OPTN KD (unverified) · not_oa — fulltext not accessible; all quantitative claims unverified #gap/no-fulltext-access
[^wong2014]: doi:10.1073/pnas.1405752111 · in-vitro (HeLa cells, parkin-expressing; 20 µM CCCP-induced depolarization) · E478G: ~1% mito surrounded vs ~60% WT; LC3 recruitment 3% vs ~30% WT (p<0.001) · local PDF available at archive (downloaded 2026-05-04)
[^lazarou2015]: doi:10.1038/nature14893 · in-vitro (CRISPR quintuple-KO HeLa reconstitution, reported) · OPTN + NDP52 primary receptors; p62 dispensable (p62-dispensability independently confirmed in Wong 2014, local PDF) · not_oa — fulltext not accessible; receptor-hierarchy quantitative claims unverified #gap/no-fulltext-access
