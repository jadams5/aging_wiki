---
type: protein
aliases: [ATG5, autophagy related 5, APG5, APG5L, apoptosis-specific protein]
uniprot: Q9H1Y0
ncbi-gene: 9474
hgnc: 589
mouse-ortholog: Atg5
ensembl: ENSG00000057663
druggability-tier: 4
caused-by: []
causes: []
key-domains: [UblA, UblB, helix-rich-region]
key-ptms: [Lys130-isopeptide-to-ATG12]
pathways: ["[[autophagy]]", "[[mitophagy]]"]
hallmarks: ["[[disabled-macroautophagy]]", "[[loss-of-proteostasis]]"]
known-interactors: ["[[atg12]]", "[[atg7]]", "[[atg10]]", "[[atg16l1]]", "[[atg3]]", "[[lc3]]", "[[beclin-1]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Kuma 2004, Hara 2006, Pyo 2013, and Mizushima 2001 primary source PDFs verified end-to-end. Mizushima 1998 closed-access (not_oa) — claims attributed to it (conjugation reaction mechanism, ATG16L1 affinity change on conjugation) cannot be independently confirmed against full text; retained with gap tag. Domain structure citations (UblA/HBR/UblB) corrected to remove Mizushima 2001 misattribution — that paper does not describe crystal structure. UniProt identity fields (Q9H1Y0, length 275 aa, K130) not independently re-queried against live database this session but confirmed via Mizushima 2001 cDNA length statement and K130R mutant experiments."
---

# ATG5 — autophagy E3-like complex scaffolding subunit

The obligate "modified" component of the ATG12–ATG5 conjugation system. ATG5 is covalently modified by [[atg12]] at Lys130 via a reaction catalyzed by [[atg7]] (E1) and [[atg10]] (E2), forming the stable ATG12–ATG5 conjugate. This conjugate then associates non-covalently with [[atg16l1]] to assemble the ~800 kDa **ATG12–ATG5–ATG16L1 E3-like complex** — the enzyme that determines where and when [[lc3]] is lipidated on the phagophore membrane. Without ATG5, autophagosome biogenesis stalls at the phagophore elongation step: ATG5-deficient mice die at birth from neonatal starvation, and systemic ATG5 overexpression extends mouse lifespan by ~17.2%, making ATG5 the only autophagy gene with both a lethal KO phenotype and a positive lifespan-extension transgenic result in mammals [^kuma2004] [^pyo2013].

## Identity

| Field | Value |
|---|---|
| UniProt | Q9H1Y0 (ATG5_HUMAN) |
| NCBI Gene | 9474 |
| HGNC | 589 |
| Gene symbol | ATG5 |
| Mouse ortholog | Atg5 (one-to-one; functionally equivalent) |
| Protein length | 275 amino acids (UniProt Q9H1Y0, canonical isoform) |
| Yeast functional ortholog | Atg5p (*S. cerevisiae*; named Apg5p prior to 2003 nomenclature revision) |

**Naming note:** No `pathways/atg5.md` exists. This page (`molecules/proteins/atg5.md`) is the canonical `[[atg5]]` resolution. The autophagy pathway page is [[autophagy]].

## Domain structure

ATG5 folds into a compact structure containing two ubiquitin-like domains flanking a central helix-rich region (domain architecture from subsequent crystallographic work; not described in Mizushima 2001, which characterizes subcellular localization in ES cells):

- **UblA domain (ubiquitin-like domain A):** N-terminal; participates in ATG16L1 binding.
- **Helix-rich region (HBR):** Central helical bundle that forms the core of the ATG12-binding interface.
- **UblB domain (ubiquitin-like domain B):** C-terminal; contributes to the overall fold.

The conjugation site **Lys130** is the acceptor lysine for ATG12; the K130R point mutant cannot be conjugated and fails to elongate isolation membranes [^mizushima2001]. Structural studies suggest that isopeptide bond formation at Lys130 causes conformational change and increases ATG16L1 binding affinity [^mizushima1998]. #gap/no-fulltext-access — Mizushima 1998 is closed-access; the conformational-change claim cannot be confirmed against full text.

**Critical residue:** **Glu122** — SCAR25 disease variant E122D reduces ATG12 conjugation and abolishes autophagic activity, confirming that productive conjugation at K130 is the essential event (UniProt Q9H1Y0, accessed 2026-05-04).

## The ATG12–ATG5 conjugation reaction

The ATG12–ATG5 isopeptide bond is synthesized by a ubiquitin-like E1–E2–E3 cascade, though the final "E3" step does not use a dedicated ligase — instead, ATG10 transfers ATG12 directly to ATG5 [^mizushima1998]:

1. **Activation (E1 — ATG7):** ATG7 adenylates the C-terminal **Gly140** of ATG12, then forms an ATG12~ATG7 thioester at ATG7-Cys572. See [[atg7]] for the mechanistic detail.
2. **Conjugation (E2 — ATG10):** The ATG12~ATG7 thioester is transferred to the active-site cysteine of [[atg10]] (**Cys166 in human ATG10**; note: Cys133 is the *S. cerevisiae* ScAtg10 residue per Yamaguchi 2012 Fig. 3C; human Cys166 confirmed by UniProt Q9H0Y0), forming an ATG12~ATG10 intermediate.
3. **Isopeptide bond formation:** ATG12's C-terminal Gly140 forms an isopeptide bond with the ε-amino group of ATG5 **Lys130**, releasing ATG10.

The resulting ATG12–ATG5 conjugate is **essentially irreversible** under physiological conditions — no isopeptidase that cleaves it has been identified in mammals. Unlike ubiquitin, ATG12 is not recycled.

### ATG16L1 association and E3-like function

The ATG12–ATG5 conjugate is catalytically inert on its own. It acquires E3-like activity by associating non-covalently with ATG16L1 via the N-terminal coiled-coil domain of ATG16L1 binding to the ATG5 UblA domain [^mizushima2001]. The resulting **ATG12–ATG5–ATG16L1 complex** (~800 kDa; assembled from two ATG12–ATG5 dimers bridged by ATG16L1 dimerization):

- Binds to the outer face of the elongating phagophore (via ATG16L1's membrane-recruitment interactions with WIPI2 and FIP200).
- Presents the ATG3 (E2)~LC3 thioester intermediate to the phagophore PE, catalyzing LC3-I → LC3-II (PE-conjugated) lipidation.
- Restricts LC3 lipidation to the phagophore membrane — prevents promiscuous LC3-II generation on other cytoplasmic membranes.
- Dissociates from the completed autophagosome upon membrane closure.

This topology is the reason ATG5 deficiency prevents LC3-II generation entirely: ATG3 (E2) lacks intrinsic specificity for the phagophore and requires the E3-like complex for productive catalysis [^mizushima1998].

## Knockout phenotypes

### Whole-body Atg5 knockout (constitutive)

Germline Atg5-deficient mice are born at normal Mendelian ratios (+/+:+/−:−/− = 150:371:147), appear morphologically normal at birth, but die within 1 day of delivery [^kuma2004]. Of 52 Atg5−/− mice observed, 51 died within 1 day; the single survivor died on day 9. Under standardized caesarean conditions (no suckling), wild-type and heterozygous mice survived 20.6 ± 3.2 h, whereas Atg5−/− mice survived 12.4 ± 1.3 h (P<0.01). The neonatal lethal phenotype is due to failure to mobilize amino acids during the physiological starvation window between placental nutrient delivery and the onset of suckling. Autophagy is transiently and massively upregulated at birth to provide amino acids; without ATG5 this adaptive response is abolished.

Biochemically: at 10 h post-caesarean delivery, total plasma amino acid concentration (and particularly essential amino acids and branched-chain amino acids) is significantly lower in Atg5−/− neonates than in wild-type littermates. AMPK is activated in Atg5−/− hearts at 10 h (but not wild-type), and ST-segment elevation on ECG indicates cardiac energy depletion. Forced milk feeding can prolong Atg5−/− survival to >25 h, confirming nutrient insufficiency as the proximate cause [^kuma2004].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes — SCAR25 loss-of-function variants (see Disease section) |
| Replicated in humans? | partial — human SCAR25 hypomorphic alleles |

### Conditional knockouts

**Neuron-specific Atg5 knockout** — Hara et al. 2006 IS the primary Atg5-flox × nestin-Cre paper (NOT Atg7). Mice bearing Atg5^flox/flox crossed with nestin-Cre develop progressive motor and behavioural deficits after three weeks of age, with ataxic gait, limb-clasping, and tremor. Histological examination reveals partial loss of cerebellar Purkinje cells, axonal swelling (eosinophilic spheroids in cerebellar nuclei), and large ubiquitin-positive inclusion bodies in neurons of the thalamus, pons, medulla, dorsal root ganglia, and other regions. Inclusions are neuron-specific (NeuN-positive) and do not form in glial cells [^hara2006].

**Cardiomyocyte-specific** and **skeletal-muscle-specific** conditional Atg5 knockouts have been reported and produce age-accelerated cardiac dysfunction and muscle atrophy phenotypes phenotypically similar to their ATG7 conditional KO counterparts, but primary citations are not confirmed in this page's footnotes — excluded pending verification. #gap/unsourced

## Disease associations

**Spinocerebellar Ataxia, Autosomal Recessive, 25 (SCAR25):** Rare recessive neurodevelopmental disorder caused by biallelic hypomorphic ATG5 variants. Characterized by cerebellar hypoplasia, developmental delay, truncal ataxia, dysmetria, and nystagmus. Causative variants reduce ATG12 conjugation efficiency and autophagic flux (UniProt Q9H1Y0, accessed 2026-05-04). SCAR25 provides the human genetic proof-of-concept that attenuated ATG5 function is neurotoxic — consistent with the mouse conditional KO phenotypes.

Note: ATG7 loss-of-function causes the related SCAR31, indicating that disrupting either end of the E1–E2 axis (ATG7 = E1; ATG10 = E2) converges on the same cerebellar neurodegenerative endpoint.

## Aging context

### ATG5 overexpression extends mouse lifespan (~17.2%)

Pyo et al. 2013 generated CAG promoter–driven Atg5 ubiquitous transgenic mice (C57BL/6 background) and conducted a survival study with n=65 WT + 70 Atg5 Tg (detailed in verified ATG7 and ULK1 pages). Key findings [^pyo2013]:

- Median lifespan extended ~17.2% in Tg vs WT (χ²=17.32, p<0.001).
- Tg mice showed elevated LC3-II levels and reduced p62 accumulation in multiple tissues — confirming enhanced autophagic flux, not artifact.
- Improved metabolic parameters: leaner body composition, enhanced insulin sensitivity, reduced age-associated oxidative stress.
- End-of-life necropsy showed normal age-dependent histological changes (hepatic lipid accumulation, cardiac fibrosis, loose muscle fibers) that were less severe in Tg mice than age-matched WT; no formal cancer incidence endpoint was reported, though Tg mice showed no detectible symptoms of age-related disease including skin ulcerations and atrophy.

ATG5 overexpression works mechanistically by increasing the pool of ATG12–ATG5–ATG16L1 E3-like complex, accelerating LC3-II generation rate and expanding the autophagosome formation capacity per unit time.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — ATG12–ATG5 conjugation is fully conserved; K130 and the E1/E2/E3-like logic are identical |
| Phenotype conserved in humans? | unknown — no ATG5 OE human trial data |
| Replicated in humans? | no — mouse-only lifespan data #gap/needs-human-replication |

### ATG5–ATG12 levels decline with age

ATG5 protein and ATG12–ATG5 conjugate levels decline in aged rodent tissues, consistent with the broader pattern of autophagic capacity decline with aging. #gap/unsourced — the primary citation for this claim ([^mizushima2001]) is incorrect: Mizushima 2001 studies Apg5-deficient embryonic stem cells and does not report age-related ATG5 decline. A primary source documenting tissue-level ATG5/ATG12–ATG5 age-trajectory needs to be identified and verified before this claim is reinstated. #gap/needs-replication — human age-trajectory data for ATG5/ATG12–ATG5 are limited to small cross-sectional studies; systematic quantification across tissues and ages is lacking.

### Position in pro-longevity intervention pathways

ATG5 is a convergence point for multiple canonical longevity interventions:

- **[[caloric-restriction]]** — upregulates autophagic flux; requires ATG5-dependent LC3 lipidation.
- **mTORC1 inhibition (rapamycin)** — releases ULK1 from mTOR inhibition → phagophore initiation → ATG5-dependent elongation. [[ulk1]] page documents ULK1's role upstream.
- **[[ampk]] activation (metformin, AICAR)** — activates [[ulk1]] at Ser317/Ser777 → same elongation dependency on ATG5.
- **[[spermidine]]** — polyamine that inhibits EP300 acetyltransferase → derepresses autophagy at transcriptional and possibly translational levels; downstream LC3 lipidation requires ATG5. #gap/needs-replication for spermidine's precise mechanism in mammalian aging models.

ATG5's non-druggable nature (it is a structural scaffold modified post-translationally, not an enzyme with an active site amenable to small molecules) means pharmacological strategies target upstream activators ([[ulk1]], TFEB) or ATG5 expression rather than ATG5 activity directly.

## Pathway membership and cross-references

- [[autophagy]] — ATG5 is essential for phagophore elongation; the ATG12–ATG5–ATG16L1 complex is the LC3-lipidation E3; see that page for the full initiation → elongation → closure → fusion cascade.
- [[mitophagy]] — LC3-II on the phagophore requires ATG5; hence ATG5 is required for all LC3-II-dependent mitophagy receptor recognition ([[bnip3]], [[fundc1]], NIX, and the PINK1–[[parkin]] terminal ubiquitin-cargo capture step).
- [[atg7]] — E1-like activating enzyme for both ATG12 and LC3; obligate upstream partner of ATG5 in the conjugation cascade.
- [[atg12]] — direct covalent partner; the ATG12–ATG5 isopeptide is the functional unit; see [[atg12]] for the ATG12 side of the reaction.
- [[atg10]] — E2-conjugating enzyme that mediates the final transfer of ATG12 to ATG5 Lys130; currently a stub.
- [[atg16l1]] — non-covalent ATG5 binding partner; essential for E3-like complex membrane targeting and LC3 lipidation specificity.
- [[lc3]] — substrate of the ATG3/ATG12–ATG5–ATG16L1 E3-like system; LC3-I → LC3-II lipidation is the direct readout of ATG5 complex activity.
- [[beclin-1]] — PI3KC3/VPS34 complex generates PI3P on the phagophore, which recruits WIPI2 → ATG16L1 → ATG12–ATG5–ATG16L1; the two systems are functionally coupled but molecularly parallel.
- [[ulk1]] — kinase upstream of phagophore nucleation; initiates the cascade that ultimately requires ATG5-dependent elongation.
- [[disabled-macroautophagy]] — hallmark page; ATG5 KO is the most direct route to complete macroautophagy blockade.
- [[loss-of-proteostasis]] — p62/ubiquitin inclusions and aggregated proteins accumulate when ATG5 is absent.

## Limitations and knowledge gaps

- `#gap/needs-human-replication` — The ATG5 OE lifespan extension (~17.2%) is mouse-only (Pyo 2013). No human ATG5 overexpression interventional data exist. SCAR25 provides human genetic validation that ATG5 is necessary, but not that augmentation extends lifespan.
- `#gap/unsourced` + `#gap/needs-replication` — Age-associated decline of ATG12–ATG5 conjugate was claimed in the body text with a Mizushima 2001 citation, but that paper studies ES cells and does not report age-related ATG5 decline. Primary source identification and verification is required before this claim can be reinstated.
- `#gap/unsourced` — Cardiomyocyte-specific and skeletal-muscle-specific Atg5 conditional KO phenotypes are widely cited in reviews but primary citations are not confirmed in this page's footnotes; a verification pass should identify and link the primary papers before these claims are added.
- `#gap/no-mechanism` — How ATG5/ATG12–ATG5 levels are regulated with aging is unknown; candidate mechanisms include transcriptional downregulation, altered ATG7 E1 activity as the limiting step, or altered proteasomal degradation of unconjugated ATG5, but no unifying model has been established.
- `#gap/needs-replication` — ATG5 E122D (SCAR25 variant) mechanistic data are from cell-based studies; in-vivo mouse or human confirmation of the specific E122D mechanism is limited.
- ATG5 pharmacology: no small molecule directly activates ATG5 or stabilizes the ATG12–ATG5–ATG16L1 complex. Upstream TFEB activators, mTOR inhibitors, and AMPK agonists are the proximal druggable entry points.

## Footnotes

[^mizushima1998]: [[studies/mizushima-1998-atg12-atg5-conjugation-system]] · n=N/A · in-vitro + in-vivo (yeast, mammalian cell lines) · foundational characterization of ATG12–ATG5 isopeptide bond + E1/E2 requirement · model: *S. cerevisiae* Apg5p + mouse cell lines · doi:10.1038/26506 · cited_by: 1644 · locally: not downloaded (not_oa — closed access; #gap/no-fulltext-access for claims attributed solely to this paper)

[^mizushima2001]: [[studies/mizushima-2001-atg5-phagophore-mapping]] · n=N/A · in-vitro + in-vivo (mouse APG5−/− embryonic stem cells, GFP-Apg5 localization) · mapped Apg5 to the outer face of the isolation membrane (phagophore); K130R mutant abolishes Atg12 conjugation and phagophore elongation but not initial membrane targeting; without Apg12-Apg5 conjugate, LC3 cannot target to isolation membranes; ~60–70% of starvation-induced lysosomal protein degradation is autophagy-dependent in ES cells · model: Apg5-deficient mouse ES cells (R1 line) · doi:10.1083/jcb.152.4.657 · cited_by: 1327 · locally: 

[^kuma2004]: [[studies/kuma-2004-atg5-ko-neonatal-lethal]] · n=52 (Atg5−/− neonates observed); Mendelian ratio confirmed (+/+:+/−:−/− = 150:371:147) · in-vivo (mouse, Atg5 germline KO) · 51/52 Atg5−/− mice died within 1 day; caesarean-standardized survival: WT/het 20.6±3.2 h vs KO 12.4±1.3 h (P<0.01); plasma and tissue amino acid decline (esp. essential AAs, BCAAs) at 10 h post-birth; AMPK activation and ST-segment elevation in KO hearts indicate energy depletion; milk feeding rescues to >25 h · model: Atg5-deficient Mus musculus · doi:10.1038/nature03029 · cited_by: 2808 · locally: 

[^hara2006]: [[studies/hara-2006-neuronal-atg5-ko-neurodegeneration]] · n=N/A · in-vivo (mouse, Atg5^flox/flox × nestin-Cre) · neuron-specific Atg5 KO causes progressive neurodegeneration, motor deficits, Purkinje cell loss, axonal swelling, and ubiquitin-positive intraneuronal inclusion bodies; inclusions are neuron-specific (NeuN+) · model: neuron-specific Atg5-null mice (Atg5^flox/flox; nestin-Cre) · doi:10.1038/nature04724 · cited_by: 3796 · locally: 

[^pyo2013]: [[studies/pyo-2013-atg5-overexpression-lifespan]] · n=65 (WT) + 70 (Atg5 Tg, line 25, combined sexes) · in-vivo (mouse, pCAGGS-Atg5 ubiquitous OE) · log-rank test χ²=17.32, p<0.001; median lifespan +119 days (~17.2%); max lifespan WT 781±22d vs Tg 900±34d · anti-ageing phenotypes: leanness (−12% body weight after 12 months), enhanced insulin sensitivity (ITT/GTT), reduced oxidative stress (GSH/GSSG), improved motor endurance · model: C57BL/6 background pCAGGS-Atg5 transgenic Mus musculus · doi:10.1038/ncomms3300 · cited_by: 689 · locally: 
