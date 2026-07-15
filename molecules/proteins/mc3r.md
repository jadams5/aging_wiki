---
type: protein
aliases: [melanocortin 3 receptor, MC3-R, melanocortin receptor 3]
uniprot: P41968
ncbi-gene: 4159
hgnc: HGNC:6931
ensembl: ENSG00000124089
genage-id: null
pathways: ["[[melanocortin-system]]", "[[camp-signaling]]"]
hallmarks: ["[[chronic-inflammation]]", "[[deregulated-nutrient-sensing]]"]
sens-categories: []
druggability-tier: 2
gtex-aging-correlation: "GTEx v8 query returned no expression data for ENSG00000124089 via API; hypothalamic expression well-documented in primary literature but not captured in GTEx bulk-tissue panels (brain subregion granularity insufficient). #gap/needs-gtex-subregion-data"
mr-causal-evidence: partial
caused-by: []
causes: []
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Lam 2021 (Nature), Patel 2025 (Nat Commun), Roselli-Rehfuss 1993 (PNAS), Mavrikaki 2016 (Mol Metab), and Lonati 2020 (Front Endocrinol) all verified against local PDFs. Begriche/Butler 2011 not verified (not_oa, closed access). Canonical IDs (UniProt P41968, NCBI Gene 4159, HGNC:6931, ENSG00000124089) not independently re-checked against databases on this pass."
literature-checked-through: 2026-05-09
---

# MC3R (melanocortin 3 receptor)

A Class A GPCR in the [[melanocortin-system]] expressed in hypothalamic circuits, gut enteroendocrine cells, and immune cells. MC3R translates nutritional state into decisions about growth, pubertal timing, lean mass accrual, and circadian food-anticipatory behavior — functions distinct from the appetite-suppression role of [[mc4r]]. Its anti-inflammatory activity at immune cells connects it to the [[chronic-inflammation]] hallmark, making it the melanocortin-receptor family member most directly relevant to aging biology after MC1R (pigmentation / DNA-repair) and MC4R (adiposity).

## Identity

- **UniProt:** P41968 (MC3R_HUMAN, Swiss-Prot manually curated)
- **NCBI Gene:** 4159
- **HGNC:** HGNC:6931
- **Ensembl:** ENSG00000124089
- **Mouse ortholog:** Mc3r (one-to-one; used in KO studies below)
- **Length:** 323 amino acids; 7 transmembrane helices (GPCR class A)

## Structure and key PTMs

- **N-linked glycosylation** at Asn-2, Asn-16, Asn-28 (extracellular N-terminus)
- **S-palmitoylation** at Cys-315 (C-terminal tail; anchors fourth intracellular loop, important for G-protein coupling efficiency)
- **Disulfide bonds:** Cys-35–Cys-276 (extracellular loop stabilization); Cys-268–Cys-274
- **MRAP interaction:** Melanocortin Receptor Accessory Protein modulates trafficking and pharmacology of MC3R (distinct from MRAP2 effects at MC4R) [^uniprot-mc3r]

## Pharmacology

**Endogenous ligands (ranked by affinity at MC3R):**

| Ligand | Source | Relative affinity | Notes |
|---|---|---|---|
| γ-MSH | POMC; arcuate nucleus | High | Physiologically MC3R-relevant (expression overlap); Ki at MC3R ~4.4 × 10⁻⁸ M, comparable to α-MSH |
| α-MSH | POMC; arcuate nucleus | High | Agonist at MC1/3/4/5; Ki at MC3R ~5.2 × 10⁻⁸ M — similar to γ-MSH |
| β-MSH | POMC processing | Moderate | Primate-relevant |
| ACTH (1–39) | Anterior pituitary | Moderate | Full agonist |
| AgRP | Arcuate NPY/AgRP neurons | Inverse agonist | Constitutive activity + AgRP; competitive with MSH |

MC3R is **Gαs-coupled** — agonist binding activates adenylate cyclase → cAMP ↑ → PKA activation. This was established by Roselli-Rehfuss et al. (1993) using cAMP accumulation assays in 293 cells transfected with rat MC3R cDNA. Minor MAPK (ERK1/2) and Ca²⁺ signaling has been reported in heterologous systems in later literature but is not considered the primary transduction pathway [^roselli-rehfuss1993].

**Ligand-binding selectivity:** The orthosteric binding pocket of MC3R accommodates the core His-Phe-Arg-Trp (HFRW) pharmacophore shared by all melanocortin peptides. γ-MSH is physiologically relevant at MC3R because MC3R is expressed in hypothalamic regions that receive γ-MSH projections from POMC neurons; binding affinities of γ-MSH and α-MSH at MC3R are comparable (Ki ~4–5 × 10⁻⁸ M for both) [^roselli-rehfuss1993]. Receptor-subtype selectivity for MC3R vs MC4R/MC1R is achieved via synthetic peptide probes exploiting differences in extracellular loop residues, not via large native-ligand affinity differences. No MC3R-selective agonist has reached clinical approval as of 2026.

## Expression

**Brain:** Expressed in hypothalamic nuclei including the arcuate nucleus (ARC), paraventricular nucleus (PVN), and ventromedial hypothalamus (VMH). Also expressed in mesolimbic regions including the nucleus accumbens and ventral tegmental area — these extrahypothalamic sites mediate food-seeking motivation during caloric deficit [^mavrikaki2016].

**Periphery:** Gut enteroendocrine cells (especially L-cells and K-cells — functional significance for gut-brain melanocortin axis is under study); placenta; immune cells (macrophages, monocytes) where anti-inflammatory signaling occurs.

**GTEx note:** Bulk-tissue GTEx panels do not resolve hypothalamic subregion expression at the granularity needed for MC3R; the API query returned no data for ENSG00000124089. Expression is documented in primary literature but not reflected in GTEx summary statistics here. #gap/needs-gtex-subregion-data

## Functions

### 1. Nutrient-state sensing and linear growth

The defining 2021 finding from Lam et al. demonstrates MC3R as a **nutritional gate for growth and puberty** rather than a simple appetite regulator [^lam2021]:

- Humans carrying bi-allelic loss-of-function (LoF) MC3R variants showed **delayed puberty onset**, **reduced final height**, **lower lean mass**, and **reduced IGF1** — all consistent with a failure to transduce nutritional sufficiency into growth signals.
- Mc3r-null males showed a 2-day delay in sexual maturation vs WT littermates; female Mc3r-null mice had a significantly prolonged oestrous cycle. Critically, in WT mice an overnight fast more than doubled oestrous cycle length, but this fasting-induced cycle prolongation was completely abolished in Mc3r-null mice — demonstrating that MC3R is required to transduce nutritional state into reproductive timing [^lam2021].
- MC3R expression concentrates in hypothalamic neurons that control GnRH pulsatility and growth-hormone release, placing MC3R upstream of both the reproductive and growth axes.

**Proposed model:** MC3R bifurcates the melanocortin system. MC4R governs calorie acquisition (appetite suppression via PVN circuits); MC3R governs calorie *disposition* — allocating ingested calories to linear growth, lean mass, and reproductive readiness rather than fat storage.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Human LoF variants replicate mouse Mc3r-KO puberty/growth phenotype |
| Phenotype conserved in humans? | yes | Delayed puberty + reduced height in human LoF carriers [^lam2021] |
| Replicated in humans? | partial | Lam 2021 (large UKBB genetics + family studies; heterozygous LoF carriers do NOT show elevated fat mass, only growth/puberty/lean mass effects); cross-species Duckett 2025 replication [^duckett2025] |

### 2. Energy partitioning and circadian food-anticipatory behavior

MC3R-null mice do not develop the severe obesity of Mc4r-null mice, but show altered nutrient partitioning and impaired food-anticipatory activity (FAA) — the increase in locomotion that precedes scheduled meals [^begriche2011]:

- Under time-restricted feeding, Mc3r-null mice fail to upregulate FAA, suggesting MC3R integrates circadian signals with metabolic state.
- Hyperglycemia and glucose intolerance develop in Mc3r-null mice under caloric restriction despite weight loss — an unusual metabolic phenotype indicating defective adaptation to energy deficit.
- Mesolimbic MC3Rs in the limbic system (nucleus accumbens) modulate food-seeking motivation specifically during weight-loss states, without affecting homeostatic feeding [^mavrikaki2016].

### 3. Hepatic autophagy and metabolic regulation

A 2025 Nature Communications study adds a visceral-organ dimension to MC3R biology [^patel2025]:

- MC3R activation in hepatocytes upregulates **hepatic autophagy** via LC3II activation and TFEB cytoplasmic-to-nuclear translocation, with subsequent upregulation of autophagy- and lysosome-related genes. γ-MSH (the MC3R-preferring endogenous agonist) drives this pathway in vitro and in vivo; Mc3r-deficient hepatocytes show impaired autophagosome flux and p62/SQSTM1 accumulation [^patel2025].
- Liver-specific MC3R restoration in Mc3r-null mice (Mc3rHep/Hep) improved mitochondrial function, partially reduced systemic adiposity and eWAT weight, and normalized serum TG and NEFA — but did not fully restore body weight to WT levels [^patel2025].
- This connects MC3R to the [[disabled-macroautophagy]] hallmark pathway in hepatic tissue — a novel finding not yet replicated. #gap/needs-replication

### 4. Anti-inflammatory signaling

MC3R, like other melanocortin receptors, is expressed on immune cells and mediates anti-inflammatory effects of α-MSH and related peptides [^lonati2020]:

- Macrophage MC3R activation suppresses pro-inflammatory responses; in a mouse peritonitis model, γ₂-MSH (acting via MC3R) reduced neutrophil migration and IL-1β in peritoneal lavage fluids [^lonati2020]. Broader TNF-α and IL-6 suppression by melanocortins (via PKA → IκBα stabilization → NF-κB inhibition) is primarily attributed to MC1R and the melanocortin system generally, with MC3R as one of several contributing receptors [^lonati2020]. MC3R-specific suppression of IL-12 is not directly demonstrated in this review. #gap/no-mechanism
- The tripeptide **KPV** (C-terminal fragment of α-MSH) retains anti-inflammatory activity partly via MC3R and MC1R; see [[kpv]] for mechanistic detail.
- In the aging context, declining melanocortin tone as a contributor to [[chronic-inflammation]] (inflammaging) is an underexplored hypothesis. #gap/no-mechanism — whether age-related decline in POMC neuron activity reduces MC3R-mediated immune modulation has not been directly tested.

## MC3R in aging — synthesis

MC3R's relevance to aging operates across two axes:

**Axis 1 — Growth and body composition across the lifespan.** The same MC3R circuit that gates pubertal linear growth likely regulates adult lean-mass maintenance. The Lam 2021 data shows that human MC3R LoF carriers have reduced lean mass in adulthood, not just delayed puberty. Loss of lean mass (sarcopenia-adjacent) with age overlaps the MC3R phenotype, though whether aging-associated hypothalamic dysfunction involves MC3R specifically has not been established. #gap/needs-human-replication

**Axis 2 — Anti-inflammatory immune modulation.** Reduced melanocortin tone with aging (driven by loss of hypothalamic POMC neurons or impaired α-MSH processing) could reduce tonic MC3R-mediated immune suppression, contributing to [[chronic-inflammation]]. This is mechanistically plausible but not directly evidenced. #gap/no-mechanism

**Cross-species consistency:** Duckett et al. 2025 examined MC3R across humans, dogs, and mice — LoF consistently delayed puberty in all three species but did not consistently cause obesity [^duckett2025]. This cross-species reproducibility of the growth/puberty phenotype strengthens the human relevance of the growth axis, while attenuating concern that MC3R-null metabolic phenotypes are species-specific.

## Druggability (tier 2)

- No FDA-approved or Phase 3 clinical drug targets MC3R for any aging-relevant indication.
- Research-grade MC3R agonists exist (e.g., cyclic peptide probes) but none has advanced to clinical trials for aging or metabolic disease as of 2026.
- Setmelanotide (Imcivree) is a melanocortin agonist approved for POMC/PCSK1/LEPR-deficiency obesity — it acts primarily at MC4R; MC3R occupancy is secondary and not the therapeutic target.
- **Aging-context tier-2 rationale:** High-quality pharmacological probes exist for the MC3R binding pocket; receptor selectivity is achievable; no aging-indication clinical drug exists. Contrast with MC4R (tier 1 via setmelanotide).

**MR evidence (partial):** Mendelian randomization instruments from the Lam 2021 / UKBB analyses provide genetic evidence for MC3R LoF → delayed puberty and reduced lean mass, but MC3R has not been directly tested as an MR instrument for aging-specific outcomes (mortality, inflammaging biomarkers, biological age clocks). The instrument is available; the aging-outcome MR study is pending. #gap/needs-human-replication

## Pathway membership

- [[melanocortin-system]] — family MOC; upstream POMC → α/γ-MSH → MC3R
- [[camp-signaling]] — primary effector pathway (planned wave 2 page; implicit stub)
- [[disabled-macroautophagy]] — hepatic autophagy connection [^patel2025]

## Key interactors

- [[alpha-msh]] — primary agonist shared with MC1R and MC4R
- [[agrp]] — inverse agonist; suppresses constitutive MC3R activity in ARC neurons #gap/stub
- [[mrap]] — melanocortin receptor accessory protein; modulates MC3R trafficking and surface expression #gap/stub
- [[mc4r]] — functionally complementary receptor in same ARC circuits; distinguishing MC3R vs MC4R contributions is an active research area #gap/stub

## Limitations and gaps

- **No aging-specific mouse KO lifespan study** exists for Mc3r. #gap/needs-human-replication
- **GTEx expression data unavailable** from API at this resolution. Hypothalamic subregion bulk-tissue data is needed. #gap/needs-gtex-subregion-data
- **Hepatic autophagy finding** (Patel 2025) is a single study; mechanism linking MC3R → LC3/ULK1 autophagy induction is not fully resolved. #gap/needs-replication
- **Anti-inflammatory MC3R contribution vs MC1R** is not cleanly dissected in human immune cell studies; most mechanistic work uses non-selective MSH peptides. #gap/no-mechanism
- **No selective MC3R agonist in human trials.** Druggability is tier 2 (probe-quality) not tier 1.
- **MR for aging outcomes** not yet published. Genetic instruments exist; study pending. #gap/needs-human-replication

## Footnotes

[^uniprot-mc3r]: UniProt P41968 (MC3R_HUMAN, Swiss-Prot), accessed 2026-05-09 · manually curated; curation evidence: experimental at gene + protein level · MRAP interaction and PTM data from UniProt structured annotations.

[^roselli-rehfuss1993]: doi:10.1073/pnas.90.19.8856 · Roselli-Rehfuss L et al. · *PNAS* 1993 · n=N/A · molecular cloning (in-vitro, heterologous expression in 293 cells) · rat MC3R cDNA cloned from hypothalamic library; Gαs coupling established by cAMP accumulation assay; competition binding Ki values: NDP-MSH (1.0 × 10⁻⁸ M) > γ₂-MSH (4.4 × 10⁻⁸ M) ≈ α-MSH (5.2 × 10⁻⁸ M) >> ACTH₄₋₁₀ (>10⁻⁶ M); MC3R mRNA confined to hypothalamus (not melanocytes or adrenal) · local PDF:  (local PDF)

[^lam2021]: doi:10.1038/s41586-021-04088-9 · Lam BYH, O'Rahilly S et al. · *Nature* 2021 · n=~200,643 UKBB WES participants; ~500,000 genotyped; 812 female rare-MC3R-mutation carriers for menarche analysis; 5,993 ALSPAC participants; Mc3r-null mice · human genetics + mouse in-vivo · 812 female MC3R LoF carriers had 4.7-month delay at menarche (beta=0.39 yr, P=6.4×10⁻¹²); associated with shorter stature, lower lean mass, lower IGF1, lower ALM/BMI; Mc3r-null males had 2-day delay in sexual maturation; fasting-induced oestrous cycle prolongation (>2× in WT) was abolished in Mc3r-null females · local PDF:  (local PDF)

[^duckett2025]: doi:10.1016/j.molmet.2025.102301 · Duckett K, O'Rahilly S et al. · *Molecular Metabolism* 2025 · cross-species (human, dog, mouse) · MC3R LoF consistently delayed puberty across all three species; obesity not a consistent phenotype · local PDF: pending (archive status: pending; OA gold)

[^patel2025]: doi:10.1038/s41467-025-56936-1 · Patel TP, Yanovski JA et al. · *Nature Communications* 2025 · in-vivo (Mc3rTB/TB and MC3RhDM/hDM mice; C57BL/6 background) + in-vitro (primary hepatocytes, GFP-LC3 transgenic) · MC3R activation upregulates hepatic autophagy via LC3II activation and TFEB nuclear translocation → autophagy/lysosome gene upregulation; γ-MSH activates this pathway; Mc3r-deficient hepatocytes show impaired autophagosome flux and p62 accumulation; liver-specific MC3R rescue (Mc3rHep/Hep) partially restored body weight, improved mitochondrial respiration, normalized serum TG/NEFA/cholesterol, and partially reduced eWAT weight · local PDF:  (local PDF)

[^lonati2020]: doi:10.3389/fendo.2020.569241 · Lonati C, Catania A et al. · *Frontiers in Endocrinology* 2020 · mini-review · melanocortin receptors (MC1R, MC3R, MC4R, MC5R) reduce pro-inflammatory responses in immune and endothelial cells via PKA → NF-κB inhibition; MC3R-specific evidence: γ₂-MSH reduces neutrophil migration and IL-1β in mouse peritonitis model; broad TNF-α/IL-6 suppression attributed to melanocortin system (not MC3R alone); focused on COVID-19/respiratory-virus context · local PDF:  (local PDF)

[^begriche2011]: doi:10.1016/j.physbeh.2011.04.007 · Begriche K, Butler AA et al. · *Physiology & Behavior* 2011 · review + Mc3r-null mouse data · MC3R coordinates circadian food-anticipatory behavior with nutritional state; Mc3r-null mice show FAA deficits and glucose intolerance under caloric restriction · local PDF: pending (archive status: not_oa)

[^mavrikaki2016]: doi:10.1016/j.molmet.2016.05.002 · Mavrikaki M, Butler AA et al. · *Molecular Metabolism* 2016 · in-vivo (Mc3rTB/TB mice on C57BL/6J;C57BL/6N mixed background + operant conditioning + ICV γ-MSH pharmacology) · mesolimbic MC3Rs in NAc shell mediate enhanced food-seeking motivation during caloric restriction (10–15% weight loss); Mc3rTB/TB mice showed reduced active lever pressing during CR (FR1 and PR1); DAT-Cre rescue of limbic Mc3r partially restored motivational responses during CR but did not rescue fat-mass phenotype · local PDF:  (local PDF)
