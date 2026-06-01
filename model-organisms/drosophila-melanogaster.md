---
type: model-organism
species-name: Drosophila melanogaster
common-name: fruit fly
aliases: [D. melanogaster, fruit fly, vinegar fly]
typical-lifespan: "1–2 months (~50 days median, standard food; ~35 days males on rich diet)"
genome-similarity-to-human: "~60% one-to-one orthologs; ~75% of human disease genes have a fly ortholog"
key-strengths:
  - genetic-toolkit (GAL4/UAS, RNAi libraries, CRISPR)
  - large-cohort lifespan screens (hundreds–thousands per arm)
  - rapid generation time (~10 days at 25°C)
  - behavioral readouts (climbing assay as frailty proxy)
  - tissue-specific transgene expression
key-divergences:
  - open-circulatory-system (no vertebrate cardiovascular analog)
  - no-adaptive-immunity (innate only — Toll, IMD pathways)
  - DR-TOR-epistasis-direction (rapamycin extends beyond DR maximum in flies; partially non-convergent)
  - eye-wing-phenotypes-no-human-analog
  - yeast-paste-diet (% yeast extract as main dietary variable, not kcal-equivalent to human CR)
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Bjedov 2010 and Zid 2009 verified against full PDFs (locally downloaded). Kapahi 2004 and Rogina 2004 verified against full PDFs (downloaded during this pass). Clancy 2001 (chico) closed-access (not_oa): abstract verified via Crossref; sex-specific heterozygote breakdown (females ~36%, males ~13%) not independently confirmable — tagged #gap/no-fulltext-access on that claim."
---

# Drosophila melanogaster (fruit fly)

*Drosophila melanogaster* is the primary invertebrate model for mechanistic aging genetics. The fly's short lifespan (~50 days median on standard food), enormous genetic toolkit, and large attainable cohort sizes make it uniquely suited to rapid lifespan screens and tissue-specific perturbations. It was the first metazoan system in which rapamycin's lifespan-extending effect was rigorously characterized, and it established the IIS (insulin/IGF-1 signaling) → [[insulin-igf1]] pathway as an evolutionarily conserved determinant of longevity.

See [[_extrapolation-guide]] for the rubric used to evaluate fly-to-human extrapolation claims.

---

## Organism profile

| Property | Value |
|---|---|
| Taxonomy | *Drosophila melanogaster* (Diptera: Drosophilidae) |
| Median lifespan (standard food, 25°C) | ~50 days (females, w^Dah^ background); ~35–40 days (males) |
| Lifespan ratio to human | ~1:600 (allowing approximate time-scaling) |
| Genome-to-human similarity | ~60% one-to-one orthologs; ~75% of human disease genes have a fly counterpart |
| Generation time | ~10 days at 25°C |
| Common lab strains | w^Dah^ (Dahomey wild-type — primary aging strain), w^1118^, *yw* (yellow/white) |

### Standard genetic backgrounds

The **w^Dah^ (Dahomey)** outbred wild-type is the aging-research community standard for lifespan experiments; it is the background used in Bjedov 2010, Barnes et al., and most Partridge-lab work. The **w^1118^** isogenic line is widely used in transgenic studies (genetic toolkit work). Results can be strain-sensitive; cross-strain replication should be considered. #gap/needs-replication

---

## Conserved aging pathways

### mTOR / dTOR signaling

The fly TOR complex ([[mtor]]) is structurally and functionally equivalent to mammalian mTORC1. Rapamycin (50–400 µM in standard food) extends median lifespan by ~7–16% in w^Dah^ females [^bjedov2010]. This effect is:

- **Abolished** in 4E-BP-null flies (p=0.4027, NS) [^bjedov2010] — implicating 4E-BP ([[4ebp1]]) as a required effector downstream of mTORC1 inhibition.
- **Abolished** in Atg5-RNAi flies (p=0.5383, NS) [^bjedov2010] — implicating [[autophagy]] as a second required effector arm.
- **Additive beyond maximum DR** — rapamycin extends lifespan at all tested yeast-extract concentrations, including concentrations at which DR already maximizes lifespan, suggesting partial pathway non-convergence [^bjedov2010]. This is the fly-specific finding that contradicts the simple "rapamycin mimics DR" framing seen in yeast and worms. See [[caloric-restriction]] for organism-specific DR–TOR epistasis.

Extrapolation table for rapamycin/mTOR:

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial (lifespan extension not demonstrated in humans; healthspan markers improving in trials) |
| Replicated in humans? | in-progress (see rapamycin trials via [[mtor]]) |

[^bjedov2010]: [[studies/bjedov-2010-rapamycin-drosophila]] · n=~200/group · in-vivo · p<0.05 for extension; p=0.4027 (4E-BP null, NS); p=0.5383 (Atg5-RNAi, NS) · model: w^Dah^ *D. melanogaster* females · doi:10.1016/j.cmet.2009.11.010

### 4E-BP and translational control

Overexpression of constitutively active *d4E-BP* (the fly ortholog of mammalian 4E-BP1; [[4ebp1]]) extends lifespan by 11% in males and 22% in females — but **only on rich food (5% yeast extract), not under dietary restriction** [^zid2009]. Under DR conditions, activated d4E-BP overexpression produces no additional longevity benefit, indicating that the mitochondrial-activity arm of the DR response is already saturated when calories are restricted. This is a critical directional distinction: d4E-BP overexpression recapitulates one downstream consequence of DR on rich food, but is not itself a DR mimetic at the organismal level.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (4EBP1 is the direct ortholog) |
| Phenotype conserved in humans? | unknown |
| Replicated in humans? | no |

[^zid2009]: [[studies/zid-2009-4ebp-drosophila-dr]] · n=~150/group · in-vivo · model: *D. melanogaster* (w^Dah^) · rich-food condition (5% YE) required for effect; no effect under DR · doi:10.1016/j.cell.2009.07.034

### Insulin/IGF-1 signaling (IIS) — chico mutants

The *chico* gene encodes the sole Drosophila insulin receptor substrate (IRS) — the fly ortholog of mammalian IRS1/2 (see [[insulin-igf1]]). Heterozygous *chico* loss-of-function mutants (*chico^1^/+*) extend median lifespan by ~36% (heterozygotes overall; extension is greater in females than males) [^clancy2001]. Homozygous mutants show up to ~48% extension but are dwarf [^clancy2001]. The sex-specific breakdown in heterozygotes (the paper reports ~36% for females and ~13% for males) cannot be independently confirmed without the full PDF (paper is closed-access). #gap/no-fulltext-access This established IIS as a conserved longevity pathway from invertebrates through mammals, paralleling the *daf-2* result in *C. elegans*.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (IRS1/IRS2 are functional orthologs) |
| Phenotype conserved in humans? | partial (reduced IGF-1 signaling associated with longevity in human cohorts, but effect size much smaller than in flies) |
| Replicated in humans? | partial (observational longevity associations; no lifespan RCT) |

#gap/needs-human-replication

[^clancy2001]: [[studies/clancy-2001-chico-lifespan]] · n=~80–120/group · in-vivo · model: *D. melanogaster* (various backgrounds) · doi:10.1126/science.1057991

### TOR and dietary restriction epistasis

Transgenic manipulation of TOR pathway components extends lifespan in flies in a manner that partially overlaps with but is not fully convergent with DR [^kapahi2004]. Overexpression of dTSC2 (tuberin, a TOR suppressor) extended mean lifespan by ~14% in males and ~12% in females. Expression of dominant-negative dTOR (dTOR^FRB^) extended mean lifespan by ~24%; dominant-negative dS6K (dS6K^KQ^) extended lifespan by ~22% (all using ubiquitous *da*-GAL4 driver at 29°C; log-rank p<0.0001). Fat-body-specific expression of dTSC2 was sufficient to recapitulate the lifespan extension. Critically, dTSC2 overexpression extends lifespan at multiple yeast-extract concentrations including those that maximize DR — suggesting TOR inhibition and DR act through overlapping but not identical mechanisms in flies.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | unknown |
| Replicated in humans? | no |

[^kapahi2004]: [[studies/kapahi-2004-tor-drosophila-dr]] · n=~92–182/group · in-vivo · model: *D. melanogaster* (w^1118^ background; *da*-GAL4 ubiquitous driver) · doi:10.1016/j.cub.2004.03.059

### Sir2 / sirtuins

Overexpression of fly dSir2 (the single *Drosophila* sirtuin ortholog most similar to mammalian SIRT1) using the ubiquitous **tubulin-GAL4** driver extends median lifespan by up to ~57% in females and ~32% in males (tubulin-GAL4/dSir2^EP2300^: females 58 days vs 37 days control; males 54 days vs 41 days control; n≥171 per group; log-rank p<0.0001) [^rogina2004]. Neuronal-specific overexpression (ELAV-GAL4) also extends lifespan: ~52% in females, ~20% in males. Reduction of dSir2 blocks the lifespan extension from caloric restriction — dSir2-null flies cannot extend lifespan on low-calorie food [^rogina2004]. The proposed pathway is: CR → decrease in Rpd3 → increase in dSir2 → lifespan extension. #gap/needs-replication

[^rogina2004]: [[studies/rogina-2004-sir2-drosophila-cr]] · n≥149–232/group · in-vivo · model: *D. melanogaster* (multiple backgrounds; tubulin-GAL4 and ELAV-GAL4 drivers) · doi:10.1073/pnas.0404184101

### Autophagy

Atg-gene functions are conserved in flies. Loss of *Atg5* via RNAi in adult flies blocks the rapamycin longevity response [^bjedov2010], placing autophagy downstream of mTORC1 inhibition in the fly lifespan pathway — consistent with its role in worms and mammals (see [[autophagy]]). Intestinal-specific autophagy induction extends fly lifespan. #gap/needs-human-replication

---

## Drosophila-specific aging biology

### Insulin-like peptides (DILPs)

Unlike mammals, flies encode **seven** insulin-like peptides (DILP1–7), expressed from distinct tissues at different life stages. The key aging-relevant DILPs are DILP2, DILP3, and DILP5, which are produced by insulin-producing cells (IPCs) in the brain and act on a single insulin receptor (dInR). This contrasts with the mammalian insulin/IGF-1 bifurcation (two ligands, two receptors). The functional divergence in ligand architecture is a noted difference from mammalian IIS when interpreting fly IIS data. #gap/unsourced — needs primary citation on DILP architecture

### Intestinal stem cells and Notch signaling

The fly midgut contains a well-characterized intestinal stem cell (ISC) compartment regulated by Notch and Jak/STAT signaling. With age, ISC proliferation increases aberrantly — a phenotype linked to dysbiosis and gut barrier dysfunction. Notch signaling restrains ISC proliferation; its dysregulation with age is one of the few stem-cell aging processes studied mechanistically in flies. Whether this maps to mammalian intestinal aging is uncertain. #gap/needs-human-replication

### Heat-shock and stress resistance

Drosophila was one of the early systems in which stress-response genes (Hsp70, Hsp83) were linked to lifespan. Hormesis (mild stress → lifespan extension) is well-characterized in flies. These findings have partial mammalian analogs but the translatability of specific Hsp manipulations to mammalian lifespan is unclear. #gap/needs-human-replication

### Diet measurement: yeast extract (% YE)

The primary dietary variable in fly longevity research is **% yeast extract (YE)** in the food medium, not caloric density in the mammalian sense. Standard food is typically 5–10% YE; DR is achieved by dilution (e.g., 0.5–2.5% YE). Yeast provides both protein and carbohydrate; the lifespan-optimal YE concentration is generally ~1–5% depending on strain and sex. This is **not directly comparable to mammalian caloric restriction** — the critical variable may be amino acid content (particularly methionine) rather than total calories. Any extrapolation from fly DR to human CR must acknowledge this confound.

---

## Genetic toolkit

The **GAL4/UAS** binary expression system allows tissue-specific, temporal-specific, and inducible transgene expression in living flies. Combined with genome-wide **RNAi libraries** (e.g., Vienna Drosophila Resource Center, Bloomington stock center), it enables systematic knockdown screens across thousands of genes in specific tissues. The system has no direct mammalian equivalent and is a core reason fly aging genetics moves faster than mouse aging genetics. Key uses in aging research:

- Neuron-specific vs. gut-specific vs. fat-body-specific gene knockdown
- Conditional (adult-onset) gene silencing via temperature-sensitive Gal80 (TARGET system)
- Pan-neuronal or IPC-specific DILP manipulation

### Behavioral readouts

**Climbing assay** (negative geotaxis): Flies placed in a vial tap down and climb upward; the fraction that climbs to a threshold height in a fixed time decreases with age. This is the most widely used proxy for age-related locomotor decline ("frailty equivalent"). It integrates neuromuscular function, motivation, and proprioception. While not a direct analog of any single human frailty component, it provides a reproducible, high-throughput healthspan readout.

---

## Major divergences from humans

| System | Fly | Human | Translation risk |
|---|---|---|---|
| Circulatory system | Open (hemolymph, tubular heart) | Closed (vascular, cardiac) | No cardiovascular aging analog; cardiac tube aging phenotypes poorly translated |
| Adaptive immunity | Absent (innate only: Toll, IMD pathways) | Present | Inflammaging studies in flies miss adaptive immune senescence entirely |
| Mitochondrial biology | Distinct respiratory complex subunits; different mt-genome size | Vertebrate mt-genome organization | Mitochondrial aging mechanisms partially diverged |
| Telomere biology | Telomeres maintained by retrotransposons, not telomerase | Telomerase + shelterin | Telomere biology findings in flies do **not** translate |
| Drug metabolism | CYP6 family (distinct from human CYP3A4) | CYP3A4-dominated | Pharmacokinetic translation requires caution; fly "effective dose" may differ |
| DR–TOR epistasis | Rapamycin extends beyond DR maximum (partial non-convergence) | Unclear | Cannot assume fly DR/rapamycin mechanistic framing applies to humans |
| Eye/wing phenotypes | Retinal degeneration, wing aging used as readouts | No analog | Tissue-specific findings in eye/wing don't extrapolate |

---

## Failure modes for translation

These are documented cases where fly findings misled or failed to translate:

1. **Sir2 / caloric restriction coupling** — Initial reports linked Sir2 to CR-mediated lifespan extension; subsequent work challenged the necessity of Sir2 for CR effects. The story is still partially contested. #gap/contradictory-evidence
2. **DR–TOR epistasis direction** — In yeast and some worm studies, TOR inhibition and DR converge on the same pathway; in flies, rapamycin extends lifespan **beyond DR maximum**, implying partial independence. This contradicts the simple convergence model propagated from simpler organisms. See [[mtor]] and [[caloric-restriction]].
3. **d4E-BP overexpression diet context** — The 4E-BP overexpression lifespan extension (Zid 2009) is observed **only on rich food**, not under DR. Confusing this with a DR result (the wiki previously had this wrong, corrected during [[4ebp1]] verification) would mischaracterize 4E-BP's mechanism.
4. **Large lifespan effects from heat-shock-promoter transgenics** — Several fly lifespan papers (not Rogina 2004, which used tubulin-GAL4/ELAV-GAL4) used heat-shock promoters; the chronic mild thermal stress can confound the genetic effect. Effect sizes from heat-shock-driver studies should be down-weighted. Note: the large Sir2 effects in Rogina 2004 (up to ~57% median extension) used constitutive drivers and are not subject to this artifact, though independent replication is still warranted.
5. **Open circulatory system** — Fly "heart tube" aging research is often described with cardiovascular language; it does not model human cardiac aging and should not be cited in cardiovascular aging contexts without caveats.

---

## Strengths summary

- **Speed**: Full lifespan experiments in ~2–3 months; multiple independent cohorts feasible per year
- **Scale**: 200–500 animals per arm routinely; 1000+ not unusual; statistical power for detecting ~5% lifespan changes
- **Genetic precision**: Tissue-specific, conditional, inducible manipulations via GAL4/UAS
- **Conserved pathways**: mTOR, IIS, autophagy, sirtuins, AMPK — all functionally present and druggable
- **Low cost**: Orders of magnitude cheaper than mouse studies; enables exploratory screens before committing to mammalian models
- **Behavioral phenotyping**: Climbing, sleep, feeding, mating — tractable geroscience endpoints

---

## Limitations and gaps

- **No adaptive immunity** — inflammaging, senescent-cell immune clearance, and B/T cell dynamics are unstudied. #gap/needs-human-replication
- **Diet–longevity curve non-equivalence** — Fly yeast-extract DR is not kcal-equivalent to mammalian CR. Cross-system DR comparisons require caution. #gap/contradictory-evidence
- **Strain sensitivity** — Lifespan effects can be strongly background-dependent (w^Dah^ vs w^1118^ vs outbred Canton-S). Many older papers used Canton-S; replication in standardized backgrounds is uneven. #gap/needs-replication
- **Aging mechanisms in fat body vs. gut vs. neurons** — tissue-specific contributions to systemic aging are being mapped but no consensus "primary aging tissue" has emerged. #gap/no-mechanism
- **DILP architecture divergence** — Seven DILP ligands vs. one mammalian insulin + one IGF-1 means fly IIS studies may not cleanly deconvolute insulin vs. IGF-1 effects. #gap/unsourced — needs dedicated comparative review citation

---

## Cross-references

- [[_extrapolation-guide]] — rubric for fly-to-human translation
- [[hypotheses/translation-failure-of-aging-interventions]] — Mode B synthesis on why invertebrate-magnitude effects (worm 2× lifespan, fly ~30–50% lifespan) systematically attenuate toward mammals and especially humans
- [[mtor]] — dTOR pathway; Bjedov 2010 rapamycin result; DR–TOR epistasis
- [[4ebp1]] — d4E-BP; Zid 2009 rich-food vs. DR distinction
- [[insulin-igf1]] — chico / dInR / DILP biology
- [[autophagy]] — Atg5 requirement for rapamycin effect in flies
- [[caloric-restriction]] — yeast-extract DR; organism-specific DR–TOR epistasis
- [[caenorhabditis-elegans]] — parallel IIS/DR system for comparison
- [[mus-musculus]] — mammalian lifespan model; contrast with fly divergences
