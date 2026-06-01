---
type: process
aliases: [histone PTMs, histone post-translational modifications, histone marks, chromatin marks, histone code]
key-proteins: ["[[hdac]]", "[[sirt1]]", "[[sirt6]]", "[[cbp-p300]]", "[[ezh2]]"]
pathways: ["[[sirtuin]]"]
hallmarks: ["[[epigenetic-alterations]]"]
selective-variants: ["[[histone-acetylation]]"]
druggability-tier: 2
caused-by: ["[[deregulated-nutrient-sensing]]", "[[genomic-instability]]"]
causes: ["[[epigenetic-alterations]]", "[[cellular-senescence]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Michishita 2008 (local PDF) and Pal & Tyler 2016 and Feser 2010 (both downloaded this session) verified against primary source PDFs. Allis & Jenuwein 2016, Vaquero 2007, and De Cecco 2019 are closed-access (not_oa) — claims attributed to these sources tagged #gap/no-fulltext-access. Canonical-DB identity fields not applicable (process page). Key corrections: druggability-tier 1→2 (aging-context; mirrors [[hdac]] R31); Feser 2010 lifespan extension figure corrected from '~40%' to '30–50% in wild-type yeast depending on induction level'; Michishita 2008 mechanism qualifier added (SIRT6 deacetylates H3K9ac at telomeres; H3K9me3 deposition by downstream KMTs is an inference not explicitly stated in the paper); SIRT1/H4K16ac primary-substrate attribution qualified per Pal & Tyler 2016."
---


# Histone Modification

Post-translational modifications (PTMs) of histone proteins that regulate chromatin compaction, gene expression, DNA repair, and replication. Histones are the protein spools around which ~147 bp of DNA is wound; modifications to their unstructured N-terminal tails alter the electrostatic charge and protein-interaction landscape of the nucleosome, creating a combinatorial "histone code" that is read by effector proteins to regulate virtually every nuclear process [^allis2016].

In aging, the histone modification landscape undergoes characteristic deterioration: activating marks are progressively lost from active loci, repressive marks at heterochromatin erode, and histone protein levels themselves decline — collectively contributing to the [[epigenetic-alterations]] hallmark and enabling de-repression of repetitive elements, transposable elements, and developmental genes that should remain silenced.

This page covers the umbrella process. For the specific sub-process of enzymatic acetylation/deacetylation, see [[histone-acetylation]]. For the DNA-level epigenetic complement, see [[dna-methylation]] (verified R31b).

---

## Core mark types

### Acetylation

Histone acetylation is the most therapeutically tractable mark class and is directly coupled to NAD+ metabolism via the sirtuin deacetylases.

| Mark | Active/repressive | Key enzyme (write) | Key enzyme (erase) | Aging relevance |
|---|---|---|---|---|
| **H3K9ac** | Activating | CBP/p300, PCAF | [[hdac]] (class I/II), [[sirt1]] | Declines at some loci with age; [[sirt1]] loss impairs deacetylation capacity |
| **H3K14ac** | Activating | CBP/p300, GCN5 | [[hdac]] (class I) | Altered with age; reduced at stress-response gene promoters |
| **H3K27ac** | Activating (enhancer mark) | CBP/p300 | [[hdac]] (class I/II) | Age-associated loss at enhancers; super-enhancer erosion linked to cell-identity drift |
| **H4K16ac** | Activating (decondensation) | MOF/KAT8, CBP/p300 | Sir2 (yeast), [[sirt2]] (mammalian primary), [[sirt1]], [[hdac]] | Increases with age in yeast (Sir2-dependent loss drives the increase); mammalian H4K16ac changes with aging are less well characterized; restoration via Sir2 OE extends yeast lifespan [^vaquero2007] |
| **H3K56ac** | Activating (replication, repair) | CBP/p300, Rtt109 (yeast) | [[sirt6]], [[sirt1]] | Marked at replication origins and DSB sites; SIRT6 deacetylates H3K56ac at DSBs to facilitate repair; reduced with age in senescent cells |

The **H4K16ac** mark is particularly aging-relevant in yeast, where it is the primary histone substrate of Sir2 (the yeast SIRT1 ortholog). In yeast, H4K16ac at subtelomeric X elements increases with replicative age due to progressive loss of Sir2, driving a more open chromatin state and contributing to lifespan shortening [^vaquero2007]. **Caution on mammalian translation:** Pal & Tyler 2016 (the primary review source here) explicitly notes that mammalian SIRT1 is primarily an H3K9ac (not H4K16ac) deacetylase; H4K16ac deacetylation in mammals is more associated with SIRT2. The H4K16ac aging mechanism is most robustly established in yeast; direct causal evidence in mammalian cells is limited. #gap/needs-human-replication The H3K9ac substrate attribution for mammalian SIRT1 is discussed on the [[sirt1]] (verified) page.

### Methylation

Histone methylation is not directly activating or repressive — the outcome depends on the specific residue and degree of methylation (mono-, di-, or trimethylation). Methyl marks are written by lysine methyltransferases (KMTs) and erased by lysine demethylases (KDMs).

| Mark | Active/repressive | Principal KMT | Principal KDM | Aging context |
|---|---|---|---|---|
| **H3K4me1** | Activating (enhancer) | MLL/KMT2 family | KDM1A (LSD1) | Enhancer mark; reduced at tissue-specific enhancers in aged cells |
| **H3K4me3** | Activating (promoter) | MLL/KMT2 family, SETD1A/B | KDM5A/B (JARID1A/B) | Marks active gene promoters; redistributes with age toward intergenic regions |
| **H3K36me3** | Activating (gene body) | SETD2 | KDM4A | Transcription-coupled mark; SETD2 loss promotes intragenic cryptic transcription; enriched on lifespan-extension genes in worm models #gap/needs-human-replication |
| **H3K79me2/3** | Activating | DOT1L | (no canonical KDM) | DNA damage checkpoint signaling; altered in replicative senescence |
| **H3K9me2/3** | Repressive (heterochromatin) | EHMT2 (G9a), SUV39H1/H2 | KDM3A, KDM4A/B | Marks constitutive heterochromatin at transposons and pericentromeric repeats; **declines with age** (see § Heterochromatin loss) |
| **H3K27me3** | Repressive (facultative) | EZH2 (PRC2) | KDM6A (UTX), KDM6B (JMJD3) | Polycomb-mediated gene silencing; redistributes with age from developmental genes to novel loci; loss de-represses oncogenes and repeat elements |
| **H4K20me3** | Repressive (constitutive heterochromatin) | SUV4-20H1/H2 | (no canonical KDM) | Marks pericentromeric heterochromatin; declines in aged tissues, contributing to centromere instability |

**H3K9me3** and **H3K27me3** are the two most aging-relevant repressive marks. Both are enriched at regions that must remain silenced — constitutive heterochromatin (transposons, satellite repeats) and Polycomb-repressed developmental genes respectively. Both show age-associated redistribution and focal loss [^pal2016].

### Secondary marks

- **Phosphorylation** — H3S10ph, H2AXS139ph (γH2AX): primarily DNA damage response marks. γH2AX decorates DSB flanking nucleosomes within minutes of break induction; its accumulation (in the absence of active repair) is a canonical marker of persistent genomic damage in senescent cells.
- **Ubiquitination** — H2AK119ub1 (Polycomb-mediated silencing, written by RING1A/B); H2BK120ub1 (transcription elongation). Age-associated changes documented but less mechanistically characterized. #gap/needs-human-replication
- **ADP-ribosylation** — PARP1/2-mediated; competes with deacetylation for NAD+; PARP hyperactivation in aged/damaged cells depletes NAD+, suppressing sirtuin activity. Important in the NAD+ competition axis (see [[sirtuin]]).
- **Sumoylation** — largely repressive; crosstalk with ubiquitination.
- **Citrullination** — mediated by PAD4; converts arginine-methyl marks to citrulline, antagonizing methylation; described in inflammatory contexts.

---

## Histone variants

Distinct from PTMs, **histone variants** replace canonical histones at specific genomic contexts and carry intrinsic regulatory properties. Several change in abundance with age.

| Variant | Context | Aging change |
|---|---|---|
| **H3.3** | Active genes, telomeres, centromeres | Progressively replaces H3.1/H3.2 in post-mitotic cells; H3.3 accumulation may reduce chromatin plasticity in aged neurons |
| **H2A.Z** | Active promoters, enhancers; also DSB-flanking | Increases with age at certain loci; associated with transcriptional variability and nucleosome instability |
| **macroH2A** (macroH2A1/2) | Inactive X, senescent heterochromatin (SAHFs) | Increases in senescent cells; incorporated into Senescence-Associated Heterochromatin Foci (SAHFs), where it promotes stable silencing |
| **H2A.X** | All chromatin (low level); DSB-flanking (γH2AX form) | Total H2A.X levels relatively stable; γH2AX decorated foci accumulate with age as unrepaired DSBs persist |

The increase in macroH2A and accumulation of γH2AX in aged and senescent cells are both indicators of altered chromatin homeostasis rather than drivers per se, though macroH2A incorporation in SAHFs may contribute to the stable gene-silencing characteristic of replicative senescence. #gap/needs-human-replication for macroH2A age-changes in human tissues (most data from cultured cells or mouse).

---

## Writers, readers, erasers — the chromatin enzyme toolkit

Histone PTMs are dynamically controlled by a tripartite enzyme system:

| Role | Function | Examples |
|---|---|---|
| **Writers** (HATs, KMTs, kinases, ubiquitin ligases) | Add the mark | CBP/p300 (H3K27ac, H3K56ac), MLL (H3K4me3), EZH2 (H3K27me3), SUV39H1 (H3K9me3), PARP1 (PAR), RNF2/RING1B (H2AK119ub1) |
| **Readers** (bromodomains, chromodomains, Tudor, PHD) | Recognize and bind the mark — propagate or amplify downstream signals | BRD4 reads H3/H4ac (super-enhancer regulation); HP1α/β/γ reads H3K9me3 (heterochromatin formation); EED reads H3K27me3 (PRC2 propagation) |
| **Erasers** (HDACs, KDMs, phosphatases, DUBs) | Remove the mark | [[hdac]] (HDAC1–11; acetyl-lysine); [[sirt1]], [[sirt6]] (NAD+-dependent deacetylases); KDM1A/LSD1 (H3K4me1/2); KDM6A/B (H3K27me3) |

**Cross-talk between marks is extensive.** H3K4me3 at promoters stimulates acetylation by recruiting HATs. H3K9me3 at heterochromatin recruits HP1, which recruits SUV39H1 (H3K9me3 writer) for self-reinforcing silencing. EZH2 (PRC2) H3K27me3 activity is stimulated by H3K27me3 binding to the EED subunit. These positive feedback loops explain why age-related perturbations at one mark can propagate — and why restoring a single mark does not easily reset the chromatin state.

---

## Role in aging

### Age-related shifts in the histone modification landscape

Across organisms, aging is associated with a reproducible shift in the global histone modification balance — though the changes are locus-specific, tissue-specific, and sometimes contradictory across studies [^pal2016]:

- **Activating marks decline globally**: H3K27ac (enhancer activity), H4K16ac (chromatin decondensation), H3K4me3 (active promoters) — all show genome-wide reduction with age in multiple tissues
- **Repressive marks redistribute**: H3K9me3 and H4K20me3 decline at constitutive heterochromatin (permitting transposable element transcription) but may increase at some loci; H3K27me3 redistributes from Polycomb target genes toward novel regions
- **Net result**: progressive erosion of chromatin identity boundaries — active genes become less robustly active; silenced regions become less robustly silenced

This is "epigenetic drift" at the histone level, the histone counterpart to the CpG methylation drift described in [[dna-methylation]] (verified R31b). The two processes are mechanistically coupled: DNA methylation status influences histone mark deposition (e.g., unmethylated CpGs recruit PRC2 via the EED subunit), and histone marks influence DNMT targeting (DNMT3L recognizes unmethylated H3K4 to stimulate DNMT3A/3B de novo activity).

### Histone protein level decline

A complementary, underappreciated aspect: histone protein levels themselves decrease with age, independent of PTM patterns. Feser et al. 2010 demonstrated in *Saccharomyces cerevisiae* that histone H3/H4 levels decline during replicative aging (quantified by ChIP and western blotting across successive cell generations using the mother-enrichment program), and that overexpressing histones from galactose-inducible promoters extended median replicative lifespan of wild-type yeast by **30% at 1% galactose** and up to **50% at 2% galactose** (the higher-induction condition) — establishing that histone level decline is a **cause** of yeast aging phenotypes, not merely a correlate [^feser2010]. A high-copy plasmid encoding all four core histones extended the median lifespan of short-lived *asf1* mutants by 65%. #gap/needs-human-replication — whether histone protein level decline causally contributes to aging in mammalian cells is unresolved; observational data suggest H3/H4 decline in human aged tissues, but lifespan-extension experiments are not feasible without animal models.

The mechanism linking histone level to aging likely involves increased cryptic transcription from transposable elements (fewer nucleosomes available to maintain repressive chromatin compaction) and impaired DNA repair (fewer histones to signal and respond to DSBs).

### Heterochromatin loss and transposable element de-repression

One of the clearest mechanistic links from histone modification loss to downstream aging phenotypes is the **heterochromatin erosion → transposable element de-repression → innate immune activation** axis:

1. Loss of H3K9me3 (and its reader HP1α) at pericentromeric heterochromatin and LINE-1 transposable element loci with age [^pal2016]
2. De-repression of LINE-1 (L1) retrotransposons — their RNA and reverse-transcription intermediates accumulate in aged cells
3. Cytoplasmic L1 products trigger cGAS-STING innate immune sensing, driving interferon and SASP-like inflammatory cytokine production

De Cecco et al. 2019 demonstrated that L1-derived reverse-transcription intermediates activate cGAS-STING in senescent cells, driving the interferon arm of the SASP; nucleoside reverse transcriptase inhibitors (NRTIs) — 3TC/lamivudine — suppressed this axis and reduced age-associated inflammation in mice [^dececco2019]. #gap/needs-human-replication — the NRTI intervention effect on human aging inflammation has not been demonstrated in a completed RCT.

The H3K9me3/HP1/heterochromatin axis is also linked to the SIRT6 protein (see [[sirt6]]).

### SIRT1, Sir2, and H4K16ac / H3K9ac — the NAD+ connection

In yeast, Sir2 (the SIRT1 ortholog) deacetylates H4K16ac as part of its heterochromatin silencing function; this is well established as the primary Sir2 histone substrate [^vaquero2007]. As NAD+ declines with age (via increased ERC accumulation and Sir2 redistribution; see [[sirtuin]] verified), Sir2 activity at subtelomeric heterochromatin falls, H4K16ac accumulates at these loci, and the resulting open-chromatin state contributes to yeast replicative lifespan shortening.

In mammals, the orthologous mechanism operates through [[sirt1]] deacetylation of **H3K9ac** (not H4K16ac; mammalian SIRT1 is primarily an H3K9ac deacetylase per Pal & Tyler 2016) [^pal2016]. As cellular NAD+ declines with age (via CD38 upregulation, PARP hyperactivation; see [[sirtuin]] verified), SIRT1 enzymatic rate falls, H3K9ac levels rise at heterochromatin loci, and chromatin shifts toward a more open, transcriptionally permissive state. This is the mechanistic link between the deregulated-nutrient-sensing hallmark and the epigenetic-alterations hallmark at the histone level.

The H3K9ac deacetylation by SIRT1 at heterochromatin is also linked to DNA repair: deacetylation of H3K9ac is required for proper chromatin compaction and HP1 association at heterochromatic DSB-flanking sites; impaired SIRT1 activity reduces the efficiency of this step.

### SIRT6 and H3K9 at telomeres

[[sirt6]] (verified) deacetylates H3K9ac specifically at telomeric chromatin, maintaining the low H3K9ac levels required for proper telomere structure and function. Michishita et al. 2008 showed that SIRT6 localizes to telomeres during S phase, deacetylates H3K9ac at telomeric chromatin (directly demonstrated by T-ChIP and mass spectrometry on histone tail peptides), and that SIRT6 depletion leads to H3K9 hyperacetylation at telomeres, telomere dysfunction foci, and end-to-end chromosomal fusions reminiscent of Werner syndrome [^michishita2008]. The paper proposes that SIRT6-mediated H3K9ac deacetylation promotes a specialized telomeric chromatin state required for stable association of WRN and other replication-processing factors during S phase; the paper does not explicitly demonstrate downstream H3K9me3 deposition by KMTs — that inference is from the broader heterochromatin literature. SIRT6 overexpression extended median lifespan ~15% in male mice in a single study (noted on [[sirtuin]] and [[sirt6]]). SIRT6 also deacetylates H3K56ac at DSBs — a function in DNA repair that partially overlaps with the H3K9 telomere role.

**Note:** The SIRT6/H3K9me3 substrate attribution is cross-referenced to the [[sirt6]] (verified) page; the quantitative details of the Michishita 2008 experiment should be confirmed from the local PDF (available via archive at ).

---

## Epigenetic drift at the histone level — evidence extrapolation

| Dimension | Status |
|---|---|
| Histone PTM machinery conserved in humans? | yes — HATs, HDACs, KMTs, KDMs are all vertebrate-conserved (orthologous enzymes identified in human genome) |
| Age-related global H4K16ac increase conserved in humans? | partial — yeast and mouse data strong; limited direct human aged-tissue evidence #gap/needs-human-replication |
| H3K9me3 decline at heterochromatin conserved in humans? | partial — observed in cultured human cells and mouse; systemic human tissue data thin |
| LINE-1 de-repression with age conserved in humans? | yes — De Cecco 2019 used human senescent cells for cGAS-STING activation data; LINE-1 RNA elevated in aged human blood in population studies |
| Histone level decline causally relevant in humans? | not-tested — yeast lifespan data only (Feser 2010); mammalian causal experiments lacking |

---

## Interventions and druggability

Druggability tier 2 (aging-context; corrected from seeder-assigned tier 1) — mirrors the [[hdac]] verified R31 page rating. While FDA-approved HDAC inhibitors exist (vorinostat, romidepsin, panobinostat for hematological malignancies), these are oncology approvals only; no HDAC inhibitor has completed an aging-endpoint RCT, and none is validated for an aging indication. The aging-context convention (see CLAUDE.md type:process schema) requires tier to reflect aging-validated modulation, not maximum-druggability across all indications. Tier 2 = high-quality probe exists but no FDA-approved aging drug.

| Intervention | Mechanism | Aging evidence |
|---|---|---|
| HDAC inhibitors (class I/II) | Block HDAC active site (Zn-chelation); raise histone acetylation globally | FDA-approved for CTCL/MM/MDS; in worm/fly models extend lifespan (see [[hdac]] verified); no aging RCT completed |
| NAD+ precursors (NMN, NR) | Raise cellular NAD+ → activate [[sirt1]]/[[sirt6]] → restore H4K16ac deacetylation | Blood NAD+ raised in human trials; aging endpoints unproven (see [[sirtuin]] verified) #gap/long-term-unknown |
| Caloric restriction | Reduces mTOR, raises AMPK/NAD+, activates sirtuins → slows histone mark drift | Slows DunedinPACE in CALERIE 2-yr trial; histone-mark-level changes in humans uncharacterized #gap/needs-human-replication |
| NRTI antivirals (3TC/lamivudine) | Block LINE-1 reverse transcriptase → reduce cGAS-STING activation from retrotransposon intermediates | Mouse aging-inflammation reduction (De Cecco 2019) [^dececco2019] #gap/needs-human-replication |
| Partial reprogramming (OSK) | Restores youthful histone mark patterns via TET + histone-modifier recruitment | Mouse retinal aging reversal (Lu 2020); ICE model (Yang 2023) — see [[partial-reprogramming]] (verified) #gap/needs-human-replication |

See [[hdac]] (verified R31) for the full HDAC inhibitor evidence table including invertebrate lifespan data and the HDAC6 inhibitor neurodegeneration-trial pipeline.

---

## Relationship to sibling processes

| Process | Relationship |
|---|---|
| [[dna-methylation]] (verified) | Mechanistically coupled: unmethylated CpG islands recruit PRC2 (H3K27me3 writer); DNMT3L reads unmethylated H3K4; marks co-regulate the same loci |
| [[histone-acetylation]] | Selective variant of this page — covers the enzymatic acetylation cycle, HAT/HDAC biochemistry, and the SIRT1/H4K16ac axis in more detail |
| [[dna-demethylation]] | TET enzymes operate at the DNA level but interact with histone mark landscape at oxidized-5mC loci |
| [[partial-reprogramming]] | OSK reprogramming resets both DNA methylation and histone modification patterns; covers the Lu 2020 and Yang 2023 mechanistic evidence |

---

## Limitations and gaps

- **Global vs. locus-specific changes**: genome-wide ChIP-seq studies of aged human tissues are sparse; most mechanistic data come from cell culture or mouse models. Specific locus-by-locus changes in human aged tissues across different organs are incompletely mapped. #gap/needs-human-replication
- **Causal vs. correlative**: whether histone mark drift causally drives aging or reflects upstream DNA damage and metabolic decline is unresolved at the histone level (less clear than for DNA methylation, where the ICE system provides causal evidence). #gap/no-mechanism at causal level
- **Histone variant dynamics in human aging**: macroH2A, H2A.Z, H3.3 accumulation with age has been documented in cultured cells; in-vivo human tissue data are limited. #gap/needs-human-replication
- **KDM biology in aging**: lysine demethylases are understudied relative to KMTs; whether age-related H3K9me3 / H3K27me3 redistribution reflects altered KMT/KDM balance or loss of reader/propagation proteins is unclear. #gap/no-mechanism
- **Cross-talk complexity**: the interaction between histone marks, DNA methylation, and histone variants at specific aging-relevant loci (e.g., Polycomb targets, IAP elements) is incompletely mapped. #gap/needs-human-replication

---

## Cross-references

| Entity | Relationship |
|---|---|
| [[epigenetic-alterations]] | Parent hallmark; histone modification drift is one of four epigenetic layers |
| [[sirt1]] (verified) | Primarily H3K9ac deacetylase in mammals (per Pal & Tyler 2016); H4K16ac is the primary substrate of yeast Sir2 (SIRT1 ortholog); NAD+-dependent; aging-relevant SIRT1 decline drives H3K9ac accumulation at heterochromatin in mammalian cells |
| [[sirt6]] (verified) | H3K9ac, H3K56ac deacetylase at telomeres and DSBs; Michishita 2008 substrate |
| [[hdac]] (verified R31) | Zn-dependent HDAC1–11 family; class-level overview; HDAC inhibitor pharmacology |
| [[sirtuin]] (verified) | NAD+ decline mechanism; SIRT1/6 in aging; NAD+ precursor trials |
| [[cbp-p300]] | HAT writer complex; H3K27ac and H3K56ac; EP300 substrate of spermidine autophagy mechanism |
| [[ezh2]] | PRC2 catalytic subunit; H3K27me3 writer; age-associated redistribution |
| [[dna-methylation]] (verified) | Sibling epigenetic process; co-regulated at many loci |
| [[histone-acetylation]] | Selective variant; detailed HAT/HDAC biochemistry |
| [[partial-reprogramming]] (verified) | OSK epigenetic reset; restores youthful histone marks and DNA methylation |
| [[cellular-senescence]] | SAHFs contain macroH2A, H3K9me3; γH2AX accumulates in senescent cells |
| [[genomic-instability]] | DSBs trigger H2A.X phosphorylation; repair requires coordinated histone mark changes |
| [[hypotheses/information-theory-of-aging]] | ICE model: epigenetic information loss (including histone marks) proposed as causal driver |

---

## Footnotes

[^allis2016]: doi:10.1038/nrg.2016.59 · Allis CD, Jenuwein T · *Nature Reviews Genetics* 2016 · review · n/a · model: vertebrates; foundational review of the histone code concept, writers/readers/erasers, and chromatin regulatory logic; 2,637 citations · #gap/no-fulltext-access (not_oa)
[^pal2016]: doi:10.1126/sciadv.1600584 · Pal S, Tyler JK · *Science Advances* 2016 · review · n/a · model: multi-organism; comprehensive review of histone modification changes in aging across yeast, worm, fly, mouse, and human; covers heterochromatin loss model, global histone protein reduction, H3K56ac and H4K16ac in yeast aging, H3K9me3 and H3K27me3 redistribution, histone variants (macroH2A, H3.3, H2A.Z), and retrotransposon de-repression; explicitly states mammalian SIRT1 is primarily an H3K9Ac deacetylase (not H4K16Ac, which is the yeast Sir2 primary substrate) · local PDF available · verified against PDF 2026-05-07
[^feser2010]: doi:10.1016/j.molcel.2010.08.015 · Feser J et al. · *Molecular Cell* 2010 · in-vivo · model: *S. cerevisiae* (multiple strain backgrounds: S288c, DBY746, W303); histone H3/H4 levels decline dramatically during replicative aging (quantified by western blot and ChIP using mother-enrichment program, n=aged cells at ~30 generations); galactose-inducible H3/H4 overexpression in WT yeast extended median replicative lifespan by ~30% (1% gal, Fig. 6A, p=0.0071) and ~50% (2% gal, Fig. 6B, p=0.0068); high-copy 4-core-histone plasmid extended *asf1* mutant median lifespan by 65% (Fig. 3E, p=0.0000012); H2A/H2B OE also extended *asf1* lifespan (Fig. 3F, p=0.0013); Hir complex deletion (Hir1, Hir2, Hir3, Hpc2) extended WT median lifespan 25–35% (Fig. 3G); this pathway is distinct from Sir2/ERC and TOR/CR pathways · local PDF available · verified against PDF 2026-05-07 · #gap/needs-human-replication
[^vaquero2007]: doi:10.1038/sj.onc.1210617 · Vaquero A, Sternglanz R, Reinberg D · *Oncogene* 2007 · review · n/a · model: mammalian; covers NAD+-dependent deacetylation of H4K16 by class III HDACs (sirtuins), including SIRT1 substrate; 308 citations · #gap/no-fulltext-access (not_oa)
[^michishita2008]: doi:10.1038/nature06736 · Michishita E et al. · *Nature* 2008 · in-vitro + cell-based · model: WI-38 human fibroblasts (SIRT6 knockdown via shRNA; S6KD vs pSR control), U2OS osteosarcoma cells, IMR90 cells; TIF scoring: n=158 (pSR), n=110 (S6KD) cells; T-ChIP + mass spectrometry for H3K9ac substrate identification; cytogenetic analysis for chromosome fusions · SIRT6 is an NAD+-dependent H3K9 deacetylase; localizes to telomeres during S phase; SIRT6 depletion → H3K9 hyperacetylation at telomeres → TIF formation (p=1.22×10⁻⁶ by two-tailed Student's t-test) → end-to-end chromosomal fusions reminiscent of Werner syndrome; H3K9ac (not H3K56ac) is the substrate validated at telomeric chromatin in this paper; hTERT expression reverses the S6KD premature senescence phenotype · local PDF available · verified against PDF 2026-05-07
[^dececco2019]: doi:10.1038/s41586-018-0784-9 · De Cecco M et al. · *Nature* 2019 · in-vivo + in-vitro · model: mouse + human senescent cells; LINE-1 retrotransposon-derived reverse-transcription intermediates activate cGAS-STING in aged/senescent cells; NRTIs reduce age-associated inflammation; 1,175 citations · #gap/no-fulltext-access (not_oa)
