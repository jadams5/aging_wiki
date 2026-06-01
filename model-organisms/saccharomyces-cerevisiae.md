---
type: model-organism
species-name: Saccharomyces cerevisiae
common-name: budding yeast
aliases: [S. cerevisiae, baker's yeast, brewer's yeast]
ncbi-taxonomy: 4932
typical-lifespan: "CLS: days to weeks in stationary phase (WT W303/BY4741 ~5–14 days); RLS: ~25 generations (WT BY4741)"
lifespan-ratio-to-human: incommensurate  # unicellular; two distinct lifespan measures, neither maps to human developmental time
genome-similarity-to-human: "~30% one-to-one orthologs (protein-coding genes; ~6,000 genes total)"
genome-size-mb: 12
itp-validated: no
key-strengths: [TOR-pathway-founding-genetics, sirtuin-discovery, autophagy-gene-discovery, fast-genetic-screens, haploid-genetics, two-distinct-lifespan-assays, low-cost-high-throughput]
key-divergences: [unicellular-no-tissue-context, no-immune-system, no-replicative-senescence-in-daughter-cells, petite-mutant-mitochondrial-flexibility, asymmetric-division-rejuvenation]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Kaeberlein 1999 (PDF) and Kaeberlein 2004 (PDF) fully verified. Heitman 1991 and Kaeberlein 2005 verified via Crossref abstract (not_oa PDFs). Fabrizio 2001 verified via Crossref abstract only (not_oa; RAS2-specific CLS claim unverifiable from abstract). Tsukada/Ohsumi 1993 verified via Crossref abstract only (download failed; quantitative details unverifiable). NCBI Taxonomy 4932 not independently re-checked."
---


# *Saccharomyces cerevisiae* — budding yeast

*S. cerevisiae* is the **foundational organism for cellular aging genetics**. Despite being unicellular, it was the proving ground for three of the most consequential discoveries in aging biology: the **TOR pathway** (Heitman, Movva, and Hall, 1991), the **sirtuin/SIR2 longevity axis** (Kaeberlein, McVey, Guarente, 1999), and the core **ATG autophagy gene** network (Tsukada and Ohsumi, 1993 — later awarded the Nobel Prize in 2016). The organism's radical tractability — a 12 Mb genome, haploid genetics, days-to-weeks lifespan assays, and rich community reagent libraries — makes it irreplaceable for pathway dissection, even though its unicellular biology limits direct physiological extrapolation to humans.

A critical feature unique to yeast aging: **two entirely distinct lifespan metrics** exist, with different mechanistic determinants, different gene-knockout effects, and different intervention sensitivities. Understanding which assay a yeast finding comes from is prerequisite to interpreting it.

---

## Organism basics

| Feature | Value |
|---|---|
| Taxonomy | Fungi, Ascomycota, Saccharomycetes |
| Common laboratory strains | BY4741, W303, S288C |
| Chronological lifespan (CLS) | ~5–14 days (WT; stationary phase at 30°C in SC medium) |
| Replicative lifespan (RLS) | ~25 divisions (WT; counted by micromanipulation) |
| Generation time | ~90 min (log phase at 30°C) |
| Genome size | ~12 Mb; ~6,000 protein-coding genes |
| Human one-to-one orthologs | ~30% of yeast genes |
| NCBI Taxonomy ID | 4932 |

---

## The CLS vs RLS distinction — critical and unique to yeast

Budding yeast has **two operationally independent aging assays** that measure fundamentally different biological phenomena. Nearly every major yeast aging discovery must be tagged with which assay it came from, because the gene-knockout lists and intervention sensitivities differ substantially.

### Chronological lifespan (CLS)

**Definition:** How long a non-dividing (stationary-phase) cell population remains viable — i.e., can re-grow when re-plated on fresh medium — without dividing. Cells are arrested in G1/G0 by nutrient depletion.

**Biological analog:** Thought to model aspects of post-mitotic cell aging in multicellular organisms (neurons, muscle fibers). Captures quiescence, stress resistance, and damage accumulation in non-dividing cells.

**Measurement:** Colony-forming units (CFUs) sampled from stationary cultures over days to weeks. Median survival ~5–14 days for WT under standard conditions; extended to months in some mutants.

**Key regulators:** Ras2/cAMP/PKA pathway and Sch9 (TOR/S6K ortholog) are dominant CLS determinants [^fabrizio2001]. Loss of SCH9 or mutations in adenylate cyclase (CYR1, downstream of RAS2) dramatically extends CLS by up to 3-fold; the RAS2-specific deletion result is attributed to this paper but cannot be independently verified from the abstract (paper is closed-access) #gap/no-fulltext-access. TOR inhibition by rapamycin extends CLS. Autophagy is required for CLS (autophagic flux of damaged components during quiescence).

### Replicative lifespan (RLS)

**Definition:** The number of daughter cells a single mother cell produces before it stops dividing. Counted by micromanipulation — a researcher removes each bud by hand under a microscope and tracks the mother cell until it ceases budding.

**Biological analog:** Thought to model aspects of mitotic cell aging (stem cells, proliferating epithelium). Captures asymmetric damage segregation, rDNA stability, and protein aggregate inheritance.

**Measurement:** Micromanipulation of ~40–60 mother cells per strain; labor-intensive; WT median ~25 generations. High-throughput alternatives (lifespan machine) exist but are technically demanding.

**Key regulators:** SIR2 (histone deacetylase) and rDNA stability are dominant RLS determinants. rDNA circles (ERCs — extrachromosomal rDNA circles) accumulate asymmetrically in mother cells and are a primary cause of replicative aging [^kaeberlein1999]. TOR/Sch9 axis also regulates RLS, acting partly via ribosome biogenesis and partly via Sir2 [^kaeberlein2005].

### Asymmetric division and daughter-cell rejuvenation

A landmark feature of yeast RLS biology: **daughter cells receive a full RLS, regardless of mother cell age.** Aged mothers retain the bulk of oxidatively damaged proteins, carbonylated aggregates, and ERCs — actively segregated away from daughters via cytoskeletal mechanisms. This "rejuvenation" of the daughter cell is a model for understanding how stem cells maintain youthful potential (asymmetric inheritance of damage) versus how differentiated cells accumulate damage. The proteins and mechanisms behind asymmetric segregation — including the role of actin cables and the Hsp104 disaggregase — are active research areas.

| CLS vs RLS | CLS | RLS |
|---|---|---|
| Cell state | Non-dividing (G1/G0 arrest) | Dividing mother cells |
| Measured as | Days viable in stationary phase | Number of daughter cells produced |
| Primary damage type | Oxidative damage, nutrient depletion stress | ERC accumulation, protein aggregates |
| Key pathway 1 | Ras2/cAMP/PKA | SIR2/rDNA stability |
| Key pathway 2 | Sch9 (TOR/S6K) | TOR/Sch9 (partly via Sir2) |
| Caloric restriction effect | Large (glucose 0.5% vs 2%) | Large; mechanism debated |
| Autophagy role | Required | Modulatory |

---

## Key discoveries made in yeast

### 1. TOR pathway — TOR1 and TOR2

The **TOR proteins** were discovered in a yeast rapamycin-resistance screen. Heitman, Movva, and Hall identified TOR1 and TOR2 as the rapamycin targets in *S. cerevisiae* [^heitman1991]. Rapamycin forms a gain-of-function complex with FKBP12 (encoded by FPR1 in yeast), and this complex inhibits TOR kinase activity. The discovery established the molecular target of rapamycin and launched the entire TOR-signaling field, ultimately leading to the identification of mTOR in mammals and the pivotal Harrison 2009 ITP result showing rapamycin extends mouse lifespan (see [[mtor]]).

In yeast, TOR signaling controls ribosome biogenesis, autophagy, nitrogen catabolite repression, and stress responses — the same functional arms are conserved in mammalian mTORC1. Kaeberlein et al. 2005 showed that downregulation of TOR1 or its effector SCH9 (an S6K ortholog) extends yeast RLS, and that deletion of either gene fails to further extend lifespan under CR — placing TOR/Sch9 as a primary conduit of CR-mediated longevity [^kaeberlein2005]. Both tor1Δ and sch9Δ extend lifespan independent of Sir2. The "~60% RLS extension" figure attributed to this paper cannot be independently confirmed from the abstract (paper is not open-access); the Crossref abstract does not state this number. This established yeast TOR/S6K as a core aging pathway and motivated the mammalian TOR-aging research program.

| Extrapolation dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — mTOR kinase, RAPTOR/RICTOR complexes, S6K, 4E-BP all conserved; FKBP12–rapamycin mechanism identical |
| Phenotype conserved in humans? | partial — TOR inhibition extends lifespan in worms, flies, mice; human lifespan effect undemonstrated |
| Replicated in humans? | in-progress — rapamycin improves immune aging in elderly; PEARL trial; full lifespan endpoint not feasible |

### 2. SIR2 / sirtuin — founding RLS work

Kaeberlein, McVey, and Guarente demonstrated in 1999 that **SIR2 deletion shortens RLS by ~50%** and **SIR2 overexpression extends RLS by ~30%** in a manner requiring the SIR2/3/4 complex as well as SIR2 alone through distinct mechanisms [^kaeberlein1999]. This was the founding evidence that an NAD+-dependent deacetylase directly controls aging in any organism. The mechanism: SIR2 silences rDNA repeats, suppressing formation of life-shortening ERCs (extrachromosomal rDNA circles); additionally, the SIR2/3/4 complex silences subtelomeric heterochromatin.

This work directly motivated the worm sir-2.1 overexpression studies (Tissenbaum and Guarente, 2001) and the eventual mammalian SIRT1 aging literature. For the full trajectory — including later controversies over transgene artifacts and the revised view of mammalian SIRT1 in lifespan extension — see [[sirtuin]] and [[sirt1]].

| Extrapolation dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — SIRT1–7 all have human orthologs; NAD+-dependence conserved; rDNA-suppression mechanism specific to organisms with repeat-rich rDNA |
| Phenotype conserved in humans? | partial — SIRT1 activation improves metabolic markers; lifespan extension undemonstrated in humans |
| Replicated in humans? | no — no human intervention trial demonstrating lifespan extension via sirtuin activation |

### 3. Caloric restriction — glucose restriction in yeast

Reducing glucose from 2% (standard) to 0.5% extends both CLS and RLS in yeast [^kaeberlein2004cr]. This was one of the first mechanistic dissections of caloric restriction (CR) in any organism. The mechanism was initially attributed to SIR2 activation by Lin et al. (2000) — glucose restriction was proposed to raise NAD+:NADH ratio, activating Sir2. However, Kaeberlein et al. (2004) demonstrated the existence of a SIR2-independent longevity pathway responsive to CR [^kaeberlein2004cr]. Critically, CR alone does not extend RLS in sir2Δ single-mutant cells (Figure 2A of the paper); the SIR2-independent pathway becomes apparent in the sir2Δ fob1Δ double mutant background, where ERCs are dramatically reduced and the ERC-accumulation pathway no longer dominates aging. In that double-mutant context, CR extends mean RLS substantially and more than in wild-type cells, demonstrating the existence of a SIR2-independent, ERC-independent longevity pathway. Additionally, the paper showed that strain background matters: FOB1 deletion and SIR2 overexpression extend lifespan in BY4742 but not in PSY316. A later consensus: CR engages both TOR/Sch9 (SIR2-independent) and SIR2-dependent routes, with the balance being strain- and condition-dependent. #gap/contradictory-evidence

This controversy directly prefigures the larger mammalian debate over whether SIRT1 mediates mammalian CR benefits — see [[caloric-restriction]] and [[sirt1]] for the current status.

### 4. Autophagy — ATG gene discovery

Yoshinori Ohsumi's lab identified the first autophagy-defective *S. cerevisiae* mutants using a genetic screen for cells that fail to accumulate autophagic bodies in the vacuole under nitrogen starvation [^ohsumi1993]. This foundational screen yielded the first ATG (then called APG) genes — ATG1, ATG6, ATG7, ATG8, and others — whose mammalian orthologs are the core of the autophagy machinery in all eukaryotes. Ohsumi received the Nobel Prize in Physiology or Medicine in 2016 for this body of work.

For CLS specifically: autophagy is required for normal CLS in yeast; autophagy-defective mutants (atg1Δ, atg7Δ) show shortened CLS, and autophagy induction extends CLS. This established the principle — now fully conserved in worms, flies, mice, and humans — that autophagic flux maintenance is a longevity mechanism. See [[autophagy]].

| Extrapolation dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — ATG gene family conserved; ULK1 (ATG1 ortholog), Beclin-1 (ATG6 ortholog), ATG7, LC3 (ATG8 ortholog) all function in human cells |
| Phenotype conserved in humans? | yes — autophagic flux declines with age in mammals and humans; restoration extends healthspan in model organisms |
| Replicated in humans? | partial — human aging studies show autophagic decline; intervention trials ongoing |

### 5. Sch9 / Ras2 in chronological lifespan

Fabrizio and Longo (2001) showed that deletion of **SCH9** (encoding a kinase acting downstream of TOR as an S6K ortholog) or **RAS2** (encoding a Ras GTPase upstream of cAMP/PKA signaling) dramatically extends yeast CLS [^fabrizio2001]. This placed two major nutrient-sensing pathways — TOR/Sch9 and Ras/PKA — as primary CLS determinants and modeled the IIS pathway in a unicellular context (Sch9 is the functional analog of the worm AGE-1→AKT→PNK-1 axis and the mammalian PI3K→AKT→S6K axis). The parallel between yeast Sch9/CLS and worm AGE-1/DAF-2 lifespan motivated the cross-organism aging-pathway synthesis.

---

## Conserved aging-relevant systems

| System | Yeast ortholog(s) | Conservation level | Notes |
|---|---|---|---|
| TOR signaling | TOR1, TOR2 (catalytic subunits), SCH9 (S6K analog) | High | TOR1/TOR2 discovery made in yeast; rapamycin mechanism identical |
| Sirtuin / NAD+ | SIR2 (SIRT1 ortholog) | Partial | rDNA silencing mechanism unique to yeast; NAD+-dependence conserved |
| AMPK | SNF1 (AMPK ortholog), SNF4 (γ subunit) | Partial | Energy sensing function conserved; SNF1 regulates CLS and stress response |
| Autophagy | ATG1 (ULK1), ATG6 (Beclin-1), ATG7, ATG8 (LC3) | High | Founding ATG genes identified in yeast; all core components conserved |
| Ras/PKA | RAS2, CYR1 (adenylyl cyclase), TPK1/2/3 (PKA) | Partial | Nutrient sensing arm; mammalian Ras signaling diverged |
| Proteostasis / HSP | HSP90 (HSC82/HSP82), HSP70 (SSA1-4), HSP104 | Partial | HSP104 disaggregase has no direct mammalian ortholog; important for aggregate clearing |
| Mitochondrial respiration | Standard OXPHOS complexes | Partial | Yeast can grow without mtDNA (petite mutants); mammalian cells cannot |
| DNA damage response | RAD9 (BRCA1 analog), RAD51 | Partial | Core DDR conserved; specific tumor suppressors (TP53) absent |

---

## Divergent systems — translation limits

### Unicellular — no tissue context

The most fundamental limitation. Yeast has no cell-cell signaling in the aging context, no endocrine hormones, no inflammatory crosstalk between tissues, no immune surveillance, and no stem-cell niches. Aging-related phenomena that depend on systemic intercellular communication — [[inflammaging]], [[immunosenescence]], [[stem-cell-exhaustion]] in somatic compartments, [[sasp]] paracrine effects — have no analog in yeast. Pathway conservation is informative; organismal-level phenotype translation requires a multicellular model.

### No adaptive immunity

No B cells, T cells, or innate immune signaling comparable to mammalian TLR/NLR pathways. Yeast innate-like defense exists (cell wall remodeling, osmotic stress responses) but is not homologous. Inflammaging and the chronic low-grade inflammation of mammalian aging cannot be modeled.

### Petite mutants and mitochondrial flexibility

Yeast can survive and even thrive without functional mitochondrial DNA ("petite mutants"), relying on fermentation. Most animal cells require functional mitochondria for survival. This means yeast mitochondrial genetics and the role of mtDNA integrity in aging must be interpreted with caution: the biological stakes of mtDNA loss are fundamentally different. [[mitochondrial-dysfunction]] as an aging hallmark applies to cells that are OXPHOS-dependent; yeast can escape this constraint. #gap/needs-human-replication

### Asymmetric division — RLS as mother-cell aging

RLS measures only the aging of the **mother cell**. Daughter cells reset. This asymmetry is a feature, not a bug (it models stem-cell vs differentiated-cell aging), but it means that yeast RLS does not model symmetric division (as in cultured mammalian cells) or post-mitotic aging (as in neurons). The daughter-cell rejuvenation phenomenon in yeast has conceptually informed hypotheses about stem-cell aging but has not been directly translated to any multicellular system as a therapeutic mechanism.

### Genome — ~30% ortholog coverage

Roughly 70% of human protein-coding genes lack a clear yeast ortholog. Human disease genes absent in yeast include essentially all genes involved in neurodegeneration (tau, APP, alpha-synuclein — though yeast models overexpressing these proteins are used experimentally), cancer tumor suppressors (TP53, RB1, APC), and complex developmental signaling (Wnt, Hedgehog, Notch). For aging hallmarks requiring these pathways — [[genomic-instability]] in the cancer context, [[cellular-senescence]] via p16/p21/TP53, [[loss-of-proteostasis]] in neurodegenerative contexts — yeast is an inadequate primary model.

---

## Experimental strengths

1. **Fastest genetic screens in eukaryote biology** — haploid genetics, large colony-forming populations, and cheap media allow whole-genome deletion and overexpression libraries to be screened for CLS/RLS phenotypes. The yeast deletion collection (~4,800 viable deletion strains) has been systematically phenotyped for aging.
2. **Two distinct aging assays** — CLS and RLS measure different phenomena and can be used together to distinguish post-mitotic from mitotic aging mechanisms.
3. **Clear pathway-to-phenotype mapping** — strong epistasis analysis is tractable in yeast; placing genes in the same vs different pathways is far more straightforward than in mice.
4. **Cheap and fast** — a complete RLS experiment takes ~4 weeks; CLS ~2–4 weeks. Low cost, no animal ethics review required.
5. **Founding organism for key pathway discoveries** — TOR, sirtuin, autophagy all worked out mechanistically in yeast before mammalian validation. Yeast is the discovery layer; mammals are the validation layer.
6. **Community resources** — SGD (Saccharomyces Genome Database), yeast deletion collections (Open Biosystems / Horizon), GFP-fusion libraries, TAP-tag proteome library; extensive published lifespan datasets.

---

## Failure modes for translation

### CLS-to-multicellular context

Many CLS interventions that extend yeast stationary-phase survival do not have direct mechanistic analogs in multicellular organisms. The stationary-phase environment in a glucose-exhausted flask is specific and not obviously analogous to any mammalian tissue compartment. Results from yeast CLS screens should be treated as pathway leads rather than translatable findings. #gap/needs-human-replication

### SIR2 → SIRT1 extrapolation was substantially revised

The early prediction that yeast SIR2 overextension of RLS would translate to mammalian SIRT1 lifespan extension was not confirmed. Transgenic mice overexpressing SIRT1 do not show consistent lifespan extension under standard conditions; the Sinclair-lab claims of resveratrol-mediated SIRT1 activation and lifespan extension were contested. The foundational yeast mechanism (rDNA suppression via SIR2) has no direct mammalian equivalent — mammalian SIRT1 does not control rDNA circles in the same way. The pathway (NAD+-dependent deacetylation) is conserved; the specific longevity mechanism is not. See [[sirt1]] for the full discussion. #gap/contradictory-evidence

### TOR mutant phenotypes diverge in some aspects

Yeast TOR1 deletion is viable and long-lived; complete mTOR knockout in mice is embryonic lethal. Many yeast TOR pathway genetic manipulations are not feasible equivalents in mammals. The rapamycin-inhibitable fraction of TOR function is what translates — acute pharmacological inhibition is a better cross-species comparison than genetic knockout.

### No pharmacokinetics

Compounds added to yeast cultures are absorbed across the cell wall/membrane globally, without absorption, distribution, metabolism, or excretion steps. Dose-response relationships in yeast do not predict mammalian PK in any way. Yeast chemical biology screens are useful for identifying molecular targets, not for dose selection in mammals.

---

## Limitations and gaps

- #gap/needs-human-replication — All yeast aging findings require multicellular and ultimately mammalian validation before any human relevance can be assumed.
- #gap/contradictory-evidence — The CR-SIR2 relationship remains unresolved across strain backgrounds and conditions; this controversy has not been definitively settled.
- #gap/no-mechanism — The mechanism by which asymmetric protein-aggregate inheritance (daughter-cell rejuvenation) is maintained at a molecular level is incompletely understood; the relevance to mammalian stem-cell aging is hypothetical.
- HSP104, the key disaggregase for aggregate clearance in yeast RLS, has no direct mammalian ortholog. The protein aggregate inheritance model of aging — well-supported in yeast — lacks a clear mechanistic parallel in mammals. #gap/no-mechanism
- The relationship between yeast CLS and yeast RLS regulation is incompletely mapped: some gene deletions affect one but not the other; a unified model integrating both is lacking. #gap/unsourced

---

## Cross-references

- [[mtor]] — TOR1/TOR2 founding work; rapamycin mechanism; mammalian mTOR pathway
- [[sirtuin]] — SIR2 founding RLS work; NAD+ deacetylase mechanism; cross-species trajectory
- [[sirt1]] — Mammalian SIRT1; Kaeberlein 1999 yeast SIR2 as precursor; revised translation status
- [[autophagy]] — ATG gene discovery in yeast; CLS dependence on autophagy
- [[caloric-restriction]] — Glucose restriction model in yeast; SIR2-dependent vs independent mechanisms
- [[ampk]] — SNF1 as yeast AMPK ortholog; energy sensing
- [[deregulated-nutrient-sensing]] — Primary hallmark covering TOR, Sch9/S6K, Ras/PKA in yeast
- [[disabled-macroautophagy]] — Hallmark; ATG gene founding work in yeast
- [[mitochondrial-dysfunction]] — Hallmark; petite mutant divergence from mammalian biology
- [[caenorhabditis-elegans]] — Worm model; next-level multicellular validation of yeast pathway findings
- [[mus-musculus]] — Mouse; primary vertebrate validation system
- [[_extrapolation-guide]] — Rubric for model-organism translation

---

## Footnotes

[^heitman1991]: doi:10.1126/science.1715094 · Heitman J, Movva NR, Hall MN · in-vivo · model: *S. cerevisiae* · title: "Targets for Cell Cycle Arrest by the Immunosuppressant Rapamycin in Yeast" · rapamycin arrests cells in G1; FKBP-rapamycin complex is toxic agent (FPR1-null cells are rapamycin-resistant); TOR1 and TOR2 identified as genes participating in rapamycin toxicity; nonallelic noncomplementation of FPR1, TOR1, TOR2 suggests protein complex · cited_by ~1994 · download: not_oa (verified via Crossref abstract) #gap/no-fulltext-access

[^kaeberlein1999]: doi:10.1101/gad.13.19.2570 · Kaeberlein M, McVey M, Guarente L · in-vivo · model: *S. cerevisiae* W303R (W303-1A MATa RDN1::ADE2 RAD5) · n=50 per strain · sir2Δ mean RLS 11.6 vs W303R 21.4 generations (~46% reduction; paper states "~50%"); SIR2 OE (second copy at URA3) mean RLS 28.8 vs W303R 23.0 generations (~30% extension) · SIR2/3/4 complex and SIR2 alone act via two distinct mechanisms · cited_by ~2249 · locally available: 

[^fabrizio2001]: doi:10.1126/science.1059497 · Fabrizio P, Pozza F, Pletcher SD, Gendron CM, Longo VD · in-vivo · model: *S. cerevisiae* · SCH9 deletion and adenylate cyclase (CYR1) mutations extend CLS by up to 3-fold per Crossref abstract; RAS2-specific deletion claim not verifiable from abstract alone (paper is closed-access) · TOR/Sch9 and Ras/PKA as primary CLS regulators · cited_by ~868 · download: not_oa #gap/no-fulltext-access

[^kaeberlein2005]: doi:10.1126/science.1115535 · Kaeberlein M, Powers RW, Steffen KK, Kennedy BK et al. · in-vivo · model: *S. cerevisiae* BY4742 · large-scale screen of 564 single-gene deletion strains; 10 gene deletions increase RLS; 6 correspond to TOR/Sch9 pathway components; tor1Δ and sch9Δ fail to further extend lifespan under CR, suggesting CR acts through TOR/Sch9; both tor1Δ and sch9Δ extend lifespan independent of Sir2 · "~60%" RLS extension for TOR1/SCH9 deletion not independently verifiable from abstract (not_oa) · cited_by ~1297 · download: not_oa (verified via Crossref abstract) #gap/no-fulltext-access

[^kaeberlein2004cr]: doi:10.1371/journal.pbio.0020296 · Kaeberlein M, Kirkland KT, Fields S, Kennedy BK · in-vivo · model: *S. cerevisiae* BY4742 (mean RLS 27 generations; Table 1) · n=20 mother cells per strain per glucose concentration · CR (0.5% or lower glucose vs 2% standard) extends RLS 15–25% in WT BY4742; CR does NOT extend RLS in sir2Δ single mutant (Figure 2A); SIR2-independent CR effect demonstrated in sir2Δ fob1Δ double mutant background where ERC levels are reduced (Figure 2C–2E); CR+SIR2-OE additive in BY4742 (Figure 4B); strain-background dependent: FOB1 deletion and SIR2-OE do not extend lifespan in PSY316 · cited_by ~441 · locally available: 

[^ohsumi1993]: doi:10.1016/0014-5793(93)80398-e · Tsukada M, Ohsumi Y · in-vivo · model: *S. cerevisiae* · isolation of autophagy-defective mutants (apg1 founding mutant + 75 additional apg mutants comprising 15 complementation groups = at least 15 APG genes; APG genes later renamed ATG); founding ATG gene identification; basis for Ohsumi Nobel Prize in Physiology or Medicine 2016 · cited_by ~1714 · download: failed (no PMC record; verified via Crossref abstract only) #gap/no-fulltext-access
