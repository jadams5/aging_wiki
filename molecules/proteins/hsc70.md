---
type: protein
aliases: [HSC70, HSPA8, heat shock cognate 71 kDa, heat shock cognate protein, Hsc73, BiP-related cognate]
uniprot: P11142
ncbi-gene: 3312
hgnc: 5241
mouse-ortholog: Hspa8
ensembl: ENSG00000109971
druggability-tier: 2  # re-rated 2026-05-08; oncology-stage HSP70-family inhibitors are not aging-validated and no selective HSC70 modulator has reached late-stage clinical development. Open Targets max-druggability annotation (`OC:Advanced Clinical (cancer trials) + SM:High-Quality Ligand`, HSPA8) preserved here for reference.
caused-by: []
causes: []
key-domains: [nucleotide-binding-domain, substrate-binding-domain, lid-domain]
key-ptms: [Ser153-phosphorylation, Ser329-phosphorylation, Lys561-trimethylation, Lys512-acetylation, N-terminal-acetylation]
pathways: ["[[chaperone-mediated-autophagy]]", "[[autophagy]]"]
hallmarks: ["[[loss-of-proteostasis]]"]
known-interactors: ["[[lamp-2a]]", "[[hsp90]]", "[[chip]]", "[[bag1]]", "[[dnajb2]]"]
genage-id: null
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Schlossman 1984 (clathrin uncoating) and Mayer & Bukau 2005 (chaperone cycle) verified against local PDFs. CMA-related claims (Chiang 1989, Cuervo 1996, Cuervo 2004) trusted from already-verified [[chaperone-mediated-autophagy]] per task scope — all three are not_oa and undownloadable. Canonical-DB identity fields (UniProt P11142 length, PTM sites, NCBI Gene 3312, HGNC 5241) not independently re-verified against live databases — recommend cross-check on next lint pass."
---

# HSC70 (HSPA8)

The constitutively expressed member of the cytosolic Hsp70 chaperone family. Unlike the stress-inducible paralogue HSP72 (HSPA1A), HSC70 is present at high levels under basal conditions and does not substantially upregulate in response to heat shock — hence its designation as the "heat shock **cognate**." Its most aging-critical function is as the cytosolic substrate-recognition chaperone in [[chaperone-mediated-autophagy]] (CMA): HSC70 recognizes KFERQ-like pentapeptide motifs on target proteins, delivers them to the lysosomal surface, and threads substrates into the lumen for degradation. CMA flux declines with age, contributing to the [[loss-of-proteostasis]] hallmark; the primary bottleneck is LAMP-2A receptor levels rather than HSC70 itself, but HSC70 remains an obligate participant at every step.

## Identity

- **UniProt:** P11142 (HSP7C_HUMAN)
- **NCBI Gene:** 3312
- **HGNC:** 5241
- **Mouse ortholog:** Hspa8 (one-to-one; high sequence conservation)
- **Gene symbol:** HSPA8
- **Length:** 646 amino acids (canonical isoform; a shorter isoform 2, HSC54, has an alternative C-terminal sequence)
- **Molecular weight:** ~70 kDa (mature)
- **ATPase EC number:** 3.6.4.10

HSC70 is encoded by a single-copy gene in humans. The protein is ubiquitously expressed across tissues and is among the most abundant cytosolic proteins in most mammalian cell types.

## Domain architecture

| Domain | Approximate residues | Function |
|---|---|---|
| Nucleotide-binding domain (NBD) | 2–386 | ATP/ADP binding and hydrolysis; drives chaperone cycle allosterically |
| Substrate-binding domain-β (SBD-β) | 394–509 | Binds hydrophobic substrate stretches in a β-sandwich cleft |
| Substrate-binding domain-α / lid (SBD-α) | ~510–646 | Helical lid closes over bound substrate; allosterically coupled to NBD |

The NBD and SBD communicate via an interdomain linker: ATP binding to the NBD opens the substrate-binding cleft (low affinity, fast off-rate); ATP hydrolysis to ADP closes it (high affinity, slow off-rate). This two-state cycle underlies all chaperone functions.

## The Hsp70 chaperone cycle

HSC70 operates through an ATP-driven allosteric cycle shared by all canonical Hsp70 family members [^mayerbukau2005]:

1. **ATP-bound (open) state** — HSC70 binds substrate weakly; high on/off rate scans for exposed hydrophobic stretches on unfolded or partially denatured polypeptides.
2. **J-protein (Hsp40) co-chaperone stimulates ATP hydrolysis** — DNAJ-family co-chaperones (e.g., DNAJB2, DNAJC6) dramatically accelerate HSC70's intrinsic low ATPase activity and present substrate.
3. **ADP-bound (closed) state** — substrate is trapped in the SBD; stable complex formed.
4. **Nucleotide exchange** — NEFs (nucleotide exchange factors: BAG family proteins including BAG1, BAG2, BAG3; HSPH1/HSP110) displace ADP, resetting HSC70 for another cycle. BAG1 promotes substrate release and proteasome hand-off; BAG3 connects HSC70 to autophagy (chaperone-assisted selective autophagy, CASA). Note: Mayer & Bukau 2005 covers Bag-1 through Bag-6 and HspBP1 as NEFs; HSPH1/HSP105 NEF activity for cytosolic Hsc70 was established by Dragovic et al. 2006 and Raviol et al. 2006, postdating this review. #gap/unsourced — HSPH1 NEF claim lacks a footnote to its primary source; cite Dragovic 2006 (doi:10.1038/sj.emboj.7601049) on next pass.

The cycle is not merely repetitive: co-chaperone identity determines where the substrate goes — proteasome (CHIP/STUB1 ubiquitination route), autophagosome (BAG3/p62 CASA route), or lysosome (LAMP-2A CMA route).

## Key cellular functions

### 1. CMA substrate recognition — the aging-critical role

HSC70's most important aging-relevant function is recognizing and delivering substrates for [[chaperone-mediated-autophagy]] [^chiang1989] [^cuervo1996]. The five-step CMA mechanism (detailed on the CMA page) requires HSC70 at steps 1, 4, and 5:

- **Step 1 (cytosolic recognition):** HSC70 binds the KFERQ-like pentapeptide motif on substrate proteins. The motif requires: a glutamine (Q) at position 1 or 5; flanking basic residues (K or R); flanking hydrophobic residues (F, I, L, V); and flanking acidic residues (E or D). HSC70 + co-chaperones HIP, HOP, HSP40, HSP90 form the cytosolic delivery complex.
- **Step 4 (lumenal pulling):** A pool of HSC70 resident on the luminal face of the lysosomal membrane (lys-hsc70) drives substrate translocation by pulling the unfolded polypeptide into the lumen.
- **Step 5 (complex disassembly):** lys-hsc70 promotes disassembly of the LAMP-2A translocation multimer back to inactive monomers, enabling receptor recycling.

**Rate-limiting step is LAMP-2A, not HSC70.** The abundance and multimerization state of LAMP-2A — not HSC70 levels — sets CMA flux under basal conditions and in aging [^cuervo1996]. #gap/needs-replication — the conclusion that HSC70 is non-limiting rests on a smaller body of evidence than the LAMP-2A bottleneck; direct HSC70 overexpression experiments in aged tissues are sparse.

### 2. De novo protein folding and refolding

HSC70 binds nascent polypeptides emerging from ribosomes (often in cooperation with the ribosome-associated RAC complex) to prevent premature aggregation. It also refolds stress-denatured proteins — the classical "heat shock" chaperone function — though under chronic heat shock, the inducible HSPA1A (HSP72) takes over as the dominant species.

### 3. Clathrin uncoating

One of the first biochemically defined functions of HSC70 was its role in dismantling clathrin-coated vesicles after endocytosis [^schlossman1984]. The "uncoating ATPase" activity — now recognized as HSC70 — disaggregates clathrin triskelions from the vesicle surface in an ATP-dependent reaction, enabling clathrin recycling. This function is entirely separate from its proteostatic/CMA roles.

### 4. Co-chaperone for the HSP90 system

HSC70 acts as a loading chaperone that hands off client proteins to HSP90 via the adaptor protein HOP (STIP1/STI1). The HSC70/HOP/HSP90 superchaperone complex is required for folding and activation of HSP90 clients (steroid hormone receptors, kinases, transcription factors).

### 5. CHIP-mediated ubiquitination triage

The E3 ubiquitin ligase CHIP (STUB1) binds the C-terminal EEVD motif of HSC70 and ubiquitinates substrates that cannot be productively folded, routing them for proteasomal degradation. This positions HSC70 at the decision node between folding retry (chaperone cycle), CMA (LAMP-2A route), selective autophagy (BAG3 route), and proteasomal degradation (CHIP route).

## HSC70 vs HSP72 (HSPA1A) — key distinctions

| Property | HSC70 (HSPA8) | HSP72 (HSPA1A) |
|---|---|---|
| Expression | Constitutive; high basal levels | Low basal; strongly induced by heat shock, oxidative stress |
| HSF-1 dependence | Not a canonical HSF-1 target | Primary HSF-1 transcriptional target |
| CMA role | Obligate substrate chaperone (cytosolic + lumenal pool) | Minor or absent |
| Clathrin uncoating | Yes (primary) | No |
| Cancer / stress biology | Often context-specific | Major stress-response mediator |

Both recognize overlapping hydrophobic substrate patches, but their regulation is fundamentally different. The constitutive nature of HSC70 makes it the dominant chaperone for steady-state proteostasis and CMA.

## Aging relevance

### HSC70 levels in aging

HSC70 protein levels are relatively stable with age in most tissues — a notable contrast to the progressive decline in HSF-1 transcriptional activity and attenuated heat-shock response seen in aged mammals. The age-related failure of CMA is therefore attributed primarily to LAMP-2A reduction (via altered membrane lipid dynamics in the lysosomal membrane) rather than HSC70 loss [^cuervo1996]. #gap/contradictory-evidence — a minority of studies report modest age-related HSC70 declines in specific cell types (e.g., neurons); the generality of the "preserved HSC70" conclusion is uncertain.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | HSPA8 highly conserved; CMA substrates and KFERQ motif function confirmed in human cells |
| Phenotype conserved in humans? | partial | CMA activity measurable in human lymphocytes; tissue-level aging decline not directly quantified in humans |
| Replicated in humans? | no | Bulk of aging/CMA data from rodents #gap/needs-human-replication |

### α-Synuclein pathology blocks CMA via HSC70

Wild-type α-synuclein is a bona fide CMA substrate (carries a KFERQ-like motif; degraded via HSC70/LAMP-2A). Parkinson's disease-associated missense mutants A53T and A30P, as well as dopamine-modified wild-type α-synuclein, bind HSC70 normally and dock at LAMP-2A but block translocation without entering the lumen — competitively inhibiting CMA for all substrates [^cuervo2004]. This creates a proteostatic crisis in dopaminergic neurons: impaired CMA → accumulation of other substrates → aggregate formation → further toxicity. The [[alpha-synuclein]] page documents this in detail.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | SNCA mutations / LAMP-2A blockade shown in human neuroblastoma cells |
| Phenotype conserved in humans? | partial | PD Lewy body pathology consistent; human CMA flux measurements not available |
| Replicated in humans? | no | Genetic association with PD, not direct flux measurement #gap/needs-human-replication |

### Tau as a CMA substrate

The microtubule-associated protein [[tau]] (MAPT) is also a CMA substrate. Hyperphosphorylated tau (characteristic of Alzheimer's disease and other tauopathies) is a poor CMA substrate, potentially contributing to aggregate accumulation in aged neurons. This link connects HSC70/CMA biology to the broader neurodegenerative disease axis. #gap/needs-replication — the relative contribution of CMA failure to tauopathy vs. other clearance pathway failures (macroautophagy, proteasome) is contested.

## Subcellular localization

- **Cytoplasm (primary):** dominant form; performs chaperone cycle, CMA substrate recognition, and clathrin uncoating
- **Lysosomal membrane (peripheral, cytoplasmic face):** participates in LAMP-2A multimerization and substrate delivery
- **Lysosomal lumen (lys-hsc70):** pulls substrates through LAMP-2A pore during CMA translocation
- **Nucleus / nucleolus:** redistributes on heat shock; nuclear functions less defined
- **Cell membrane / melanosome:** minor pools; functions uncertain

## Post-translational modifications

Key PTMs mapped on HSC70 (UniProt P11142):

| PTM | Site | Function / context |
|---|---|---|
| Trimethylation | K561 (by METTL21A) | Increases ATPase/chaperone activity; METTL21A loss impairs HSC70 function |
| Phosphorylation | S153, S329, S362, S541 | Regulation unclear; S541 may modulate co-chaperone interactions |
| Acetylation | K108, K246, K319, K328, K512, K524, K589, K597, K601 | Multiple sites; K512 also SUMOylation site |
| N-terminal acetylation | S2 | Co-translational; stability |
| ISGylation | — | Antiviral innate immune signaling context |

## Pharmacology and therapeutic angles

### HSC70 inhibitors (research tools)

- **VER-155008** — adenosine-derived ATP-site inhibitor with ~0.5 μM affinity for HSC70 NBD; used as tool compound in cancer and aggregation research; not in clinical development for aging
- **MAL3-101** — allosteric inhibitor targeting the SBD-interdomain linker region; disrupts Hsp70-substrate interaction; anti-tumor activity in multiple myeloma models; not aging-specific

No selective HSC70 activator is in clinical or late preclinical development as of 2026. This is partly because HSC70 is not the rate-limiting step in CMA — LAMP-2A restoration or stabilization is a higher-priority target.

### Indirect HSC70-relevant strategies

- **LAMP-2A overexpression / gene therapy** — bypasses HSC70 limitation; shown to restore CMA in aged transgenic mice (Zhang & Cuervo 2008, cited on [[chaperone-mediated-autophagy]])
- **CMA activators (AR7, CA)** — small molecules that increase LAMP-2A levels; tested preclinically; HSC70 levels not the rate-limiting target
- **HSP90 inhibitors** — indirectly increase HSC70 availability by releasing clients; not CMA-targeted

#gap/dose-response-unclear — optimal HSC70 modulation strategy for aging is undefined; most work focuses on LAMP-2A as the intervention target, not HSC70 itself.

**Druggability — tier-2 (re-rated 2026-05-08).** No selective HSC70 modulator is FDA-approved or in late-stage clinical development for any indication; VER-155008 and MAL3-101 are research-grade tool compounds; the Open Targets max-druggability annotation (`OC:Advanced Clinical (cancer trials)`) refers to oncology-stage HSP70-family programs that are not aging-validated. Tier-2 ("high-quality probe") accurately reflects the current state. HSC70's obligate-participant role in CMA (the canonical [[loss-of-proteostasis]] decline pathway) makes it scientifically central but does not, by itself, justify tier-1 in the aging-context convention.

## Key interactors

| Interactor | Type | Functional context |
|---|---|---|
| [[lamp-2a]] | Lysosomal receptor | CMA: HSC70 delivers substrates to LAMP-2A; lys-hsc70 pulls through |
| [[hsp90]] | Co-chaperone partner | HSP90 client loading via HOP/STIP1 adaptor |
| [[chip]] (STUB1) | E3 ubiquitin ligase | Binds HSC70 EEVD motif; ubiquitinates non-foldable substrates for proteasome |
| BAG1/2/3/5 | NEFs | Nucleotide exchange; BAG3 routes clients to selective autophagy (CASA) |
| DNAJB2, DNAJC6, others | J-proteins (Hsp40 co-chaperones) | Stimulate ATP hydrolysis; present substrates |
| HSPH1 (HSP105) | NEF | High-affinity nucleotide exchange factor |
| [[alpha-synuclein]] | Substrate (pathological) | WT: CMA substrate; A53T/A30P: binds HSC70 but blocks LAMP-2A translocation |
| [[tau]] | Substrate (pathological) | Hyperphosphorylated tau: poor CMA substrate |

## Pathway membership

- [[chaperone-mediated-autophagy]] — obligate cytosolic recognition chaperone + lumenal pulling motor
- [[autophagy]] — broader autophagy regulation via BAG3/CASA arm
- Clathrin-mediated endocytosis — uncoating ATPase function (separate from proteostasis role)
- [[loss-of-proteostasis]] — primary hallmark connection via CMA decline with age

## Limitations and open questions

- **No direct human aging data for HSC70.** All aging-related CMA decline data are from rodent tissues. Whether HSC70 levels or activity change in human tissues with age is unmeasured at scale. #gap/needs-human-replication
- **HSC70 as non-rate-limiting assumption.** The claim that LAMP-2A (not HSC70) is rate-limiting in aging is well-supported in hepatocytes but may not generalize to all cell types (neurons, cardiomyocytes). #gap/needs-replication
- **Co-chaperone age-related changes unmapped.** Whether the BAG family composition, DNAJ-family balance, or CHIP activity change with age — and how that shifts HSC70 routing decisions — is poorly characterized. #gap/no-mechanism
- **HSC70 inhibitor specificity.** VER-155008 and MAL3-101 also target HSPA1A and other Hsp70 family members; no fully selective HSC70 inhibitor exists. #gap/dose-response-unclear
- **GenAge status.** HSC70/HSPA8 does not have a confirmed GenAge entry as of the seeding date (2026-05-04). This reflects the absence of direct lifespan studies in HSPA8-manipulated animals rather than evidence against aging relevance. #gap/needs-canonical-id

## Footnotes

[^schlossman1984]: doi:10.1083/jcb.99.2.723 · in-vitro · model: calf brain cytosol (enzyme source); activity assayed using calf brain empty clathrin cages and coated vesicles · established HSC70 ("uncoating ATPase") as the 70,000-mol-wt polypeptide that removes clathrin coats in an ATP-dependent reaction; purified 38-fold to >95% purity; isolated as a mixture of monomers and dimers, both active; end product of enzymatic uncoating is clathrin triskelions; 442 citations (100th percentile); PDF verified 2026-05-04
[^chiang1989]: doi:10.1126/science.2799391 · in-vitro · model: rat hepatocyte lysosomes · identified a 70 kDa heat shock cognate protein (HSC73 / HSC70) as required for selective lysosomal degradation of proteins with the KFERQ pentapeptide motif; 959 citations (100th percentile); archive confirmed, not_oa
[^cuervo1996]: doi:10.1126/science.273.5274.501 · in-vitro · model: rat liver lysosomes and intact hepatocytes · identified LAMP-2A as the lysosomal receptor for CMA; established the HSC70-substrate → LAMP-2A docking model; 937 citations (100th percentile); archive confirmed, not_oa
[^cuervo2004]: doi:10.1126/science.1101738 · in-vitro · model: PC12 cells (rat pheochromocytoma) and isolated Wistar rat liver lysosomes · A53T and A30P α-synuclein bind LAMP-2A normally and act as uptake-blockers (Cuervo 2004's own term) — they fail to translocate but block uptake of other CMA substrates; 1,966 citations (100th percentile); not_oa · cell model corrected from "SK-N-SH" via PubMed MeSH cross-check during alpha-synuclein.md verification 2026-05-04
[^mayerbukau2005]: doi:10.1007/s00018-004-4464-6 · review · Mayer MP, Bukau B (2005) Cell Mol Life Sci 62:670–684 · comprehensive mechanistic review of the Hsp70 chaperone cycle; NBD/SBD allostery, J-protein and BAG-family NEF co-chaperone functions; covers NEFs Bag-1 through Bag-6 and HspBP1 but does not discuss HSPH1/HSP105 as a mammalian cytosolic NEF (that evidence postdates this review); 2,811 citations (100th percentile); PDF verified 2026-05-04
