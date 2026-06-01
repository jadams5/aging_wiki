---
type: model-organism
species-name: Caenorhabditis elegans
common-name: nematode worm
aliases: [C. elegans, worm]
typical-lifespan: "~17 days (wild-type N2, 20°C); range ~14–21 days depending on strain/conditions"
lifespan-ratio-to-human: "~2000× shorter (17 days vs ~80 years)"
genome-similarity-to-human: "~40% one-to-one orthologs"
genome-size-mb: 100
adult-cell-count: 959  # somatic cells, hermaphrodite; invariant (eutely)
key-strengths: [longevity-gene-discovery, IIS-pathway-founding, TOR-pathway-founding, autophagy-epistasis, sirtuin-discovery-in-aging, transparent-body, fast-lifespan-screens, RNAi-whole-genome-tractability]
key-divergences: [no-adaptive-immunity, no-circulatory-system, post-mitotic-adult-soma, IIS-effect-magnitude-does-not-translate, no-replicative-senescence]
verified: true
verified-date: 2026-05-14
verified-by: claude
literature-checked-through: 2026-05-14
verified-scope: "Tissenbaum 2001, Holzenberger 2003, Lakowski 1998, Apfeld 2004, Flachsbart 2009 verified against local PDFs. Kenyon 1993 (10.1038/366461a0), Vellai 2003 (10.1038/426620a), Melendez 2003 (10.1126/science.1087782) unverifiable — closed-access or download failed; tagged #gap/no-fulltext-access. 2026-05-14 new citations now verified: Cabreiro 2013 Cell (10.1016/j.cell.2013.02.035) verified against local PDF — body text corrected to add 'primarily' qualifier, quantitative anchors (dose-response, R²=0.82 bacterial-growth correlation, axenic/UV-irradiated failure modes, explicit dual direct+indirect framing); Cabreiro & Gems 2013 EMBO Mol Med (10.1002/emmm.201100972) verified against local PDF (PMC3799487) — confirmed as 'Bridge the Gap' review article, holobiont framing accurate; Anderson 2016 Mech Ageing Dev (10.1016/j.mad.2016.01.004) verified against PMC full text (PMC4789167, local PDF unavailable) — body text corrected to add osmotic-stress quantitative anchors (−50% without FUdR, +20–25% with FUdR), DAF-16::GFP +30%, and nuance that triple sirtuin mutant (not sir-2.1 alone) is required for greatly reduced extension. Canonical biological claims (cuticle structure, NHR count ~280, intestinal cell count 20, intestinal polyploidy) not independently re-verified against original sources — draw on training knowledge."
---

> ⚠️ Partially verified. Primary citations verified: Tissenbaum 2001, Holzenberger 2003, Lakowski 1998, Apfeld 2004, Flachsbart 2009 (local PDFs, 2026-05-04); Cabreiro 2013 Cell, Cabreiro & Gems 2013 EMBO Mol Med, Anderson 2016 Mech Ageing Dev (local PDF or PMC full text, 2026-05-14). Remaining unverified: Kenyon 1993 (10.1038/366461a0), Vellai 2003 (10.1038/426620a), Melendez 2003 (10.1126/science.1087782) — closed-access, see #gap/no-fulltext-access tags below. Canonical biological claims (NHR count, cuticle structure, intestinal cell count) not independently re-verified.

# Caenorhabditis elegans

*C. elegans* is a 1-mm soil nematode that **founded modern aging genetics**. Its short lifespan (~17 days wild-type), invariant cell lineage (959 somatic cells, hermaphrodite), optical transparency, cheap propagation, and world-class genetic tractability make it the canonical system for discovering longevity genes. Nearly every major aging pathway — IIS/FOXO, TOR, AMPK, sirtuin, autophagy, UPRmt — was either first linked to lifespan in worms, or had its key epistasis dissected there. Every major worm finding carries a translation caveat, but the pathway identifications have generally held.

---

## Organism basics

| Feature | Value |
|---|---|
| Taxonomy | Nematoda, Rhabditida |
| Wild-type strain | N2 (Bristol) |
| Adult lifespan (20°C, solid NGM) | ~17 days (range ~14–21 days) |
| Generation time (20°C) | ~3 days (egg to reproductive adult) |
| Adult cell count | 959 somatic cells (hermaphrodite) — **invariant by eutely** |
| Body plan | Transparent, ~1 mm |
| Reproduction | Primarily self-fertilizing hermaphrodite; males ~0.1% |
| Genome size | ~100 Mb, 20,000 protein-coding genes |
| Human one-to-one orthologs | ~40% of C. elegans genes |

### The eutely constraint

Adult somatic cells are **post-mitotic and fixed in number.** Once development concludes, somatic cell number does not change. This means:
- No adult stem-cell turnover in somatic tissues (intestine, muscle, neurons, hypodermis are all post-mitotic)
- **No replicative senescence** in the adult soma — the Hayflick-limit model of aging is irrelevant to worm biology
- Worm "aging" is primarily proteostatic collapse, mitochondrial dysfunction, and loss of tissue integrity in post-mitotic cells — a relevant but non-exhaustive slice of human aging

---

## Genome similarity to human

~40% of *C. elegans* protein-coding genes have clear human one-to-one orthologs. Orthologs with conserved domain structure cover the core cellular machinery: DNA repair, proteostasis, metabolic sensing, mitochondrial function. Many disease genes have worm orthologs — the WormBase ortholog map is the canonical reference. However, ~60% of worm genes lack human orthologs, and many human genes involved in adaptive immunity, cardiovascular function, and complex developmental signaling are absent.

---

## Key longevity discoveries

### 1. IIS pathway — daf-2 / daf-16 axis

Loss-of-function mutations in **daf-2**, the single *C. elegans* insulin/IGF receptor, cause hermaphrodites to live more than twice as long as wild-type [^kenyon1993]. This was the largest lifespan extension reported in any organism at the time, and the first direct genetic link between an endocrine signaling pathway and aging. The paper showed that the extension required **daf-16** (the FOXO transcription factor ortholog), establishing the first epistasis link confirming the IIS–FOXO aging axis.

| Extrapolation dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — DAF-2 → IGF1R; DAF-16 → FOXO3A; AKT, PI3K all conserved |
| Phenotype conserved in humans? | partial — IIS reduction extends lifespan in mice and associates with human longevity; effect size much smaller |
| Replicated in humans? | partial — FOXO3A polymorphisms associate with exceptional longevity in multiple human cohorts [^flachsbart2009]; human IGF1R+/− analogous to mouse: ~26% longer lifespan in Igf1r+/− mice [^holzenberger2003] |

**Critical translation caveat:** The ~2× lifespan extension in *daf-2* worms does **not** translate to humans. Igf1r+/− female mice live ~33% longer, males ~15.9% longer (not statistically significant in males) [^holzenberger2003]. FOXO3A minor allele carriers show association with reaching exceptional age (OR ~1.42 for top SNP rs3800231 in German centenarians) [^flachsbart2009], but the effect size is modest — years, not a factor of 2. The pathway is conserved; the magnitude is not. See [[_extrapolation-guide]] for the documented pitfall. #gap/needs-human-replication

### 2. TOR pathway — let-363 RNAi

RNAi knockdown of **let-363**, the *C. elegans* TOR kinase ortholog, extends lifespan ~30–50% [^vellai2003]. This was the founding genetic evidence linking TOR to lifespan in a metazoan and launched the extensive TOR-aging research program that ultimately produced rapamycin as the first late-life intervention to extend lifespan in genetically heterogeneous mice (see [[mtor]]). The let-363 effect is partly epistatic with the IIS pathway, suggesting TOR and IIS converge downstream but also have independent inputs.

| Extrapolation dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — mTOR is among the most conserved kinases; same complexes (TORC1/TORC2), same substrates (S6K, 4E-BP) |
| Phenotype conserved in humans? | partial — rapamycin extends lifespan in mice; human data limited to surrogate endpoints (immunosenescence) |
| Replicated in humans? | in-progress — PEARL trial and others; lifespan endpoint not feasible in humans |

### 3. Dietary restriction — eat-2 mutants

**eat-2** loss-of-function mutants have impaired pharyngeal pumping and consume less food, serving as a genetic dietary restriction (DR) model. Most *eat* gene mutations significantly extend lifespan; eat-2 alleles — the strongest DR model — extend lifespan by up to ~57% (eat-2(ad1116): mean 30.6 days vs N2 19.5 days) and by 47% on average across seven independent trials of the reference allele ad465 [^lakowski1998]. The abstract and results section note that eat-2 mutants "can live over 50% longer." This established worms as a tractable system for dissecting DR mechanisms and the genetic programs that mediate them. Critically, eat-2-mediated lifespan extension does **not** require daf-16 and eat-2; daf-2 double mutants live longer than either single mutant, demonstrating that DR and IIS pathway operate via genetically distinct mechanisms [^lakowski1998]. The eat-2 DR model links to the [[mtor]] and [[ampk]] pathways as molecular mediators of nutrient sensing.

### 4. Sirtuin — sir-2.1

A duplication containing **sir-2.1** (the *C. elegans* SIRT1 ortholog) extends lifespan by up to ~50% in a daf-16-dependent manner [^tissenbaum2001]. This was the first evidence that sirtuins regulate aging in a metazoan (published 2001, same year as HDAC deacetylase domain characterization in yeast Sir2). The daf-16 dependence placed sir-2.1 upstream of the FOXO axis — the IIS/sirtuin intersection is a conserved feature of longevity regulation. See [[sirtuin]] for full pathway discussion including the later controversies over artifact-free sir-2.1 transgene effects.

| Extrapolation dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — SIRT1 is a functional ortholog; the link to FOXO/IIS is conserved but NAD+ dependence more directly demonstrated in mammals |
| Phenotype conserved in humans? | partial — SIRT1 activation improves metabolic markers in humans; lifespan effect not demonstrable |
| Replicated in humans? | no — no human intervention trial showing lifespan extension via sirtuin activation |

### 5. AMPK — aak-2

**aak-2** encodes the primary *C. elegans* AMPK catalytic subunit. The AAK-2 kinase links cellular energy status (AMP:ATP ratio) to lifespan: aak-2(ok524) loss-of-function mutants live **12% shorter** than wild-type, and transgenic animals with increased aak-2 gene dosage live **13% longer** on average [^apfeld2004]. The paper demonstrates that aak-2 and daf-16 act **in parallel** — daf-16(mu86); aak-2(ok524) double mutants have 15% shorter lifespans than either single mutant, showing aak-2 can influence lifespan daf-16-independently [^apfeld2004]. The wiki claim that "AAK-2 acts upstream of DAF-16" is therefore incorrect per the primary source: both genes are required for the full lifespan extension of daf-2 mutants, but they act in parallel branches, not in a linear upstream-downstream hierarchy. This founding work predated the major mammalian AMPK-aging literature and motivated metformin-aging studies (see [[ampk]]).

### 6. Autophagy — bec-1 / autophagy genes

Several autophagy genes (including **bec-1**, the worm beclin-1 ortholog, and orthologs of APG1, APG7, APG8, and AUT10) are required for dauer development and for the lifespan extension conferred by IIS pathway mutations [^melendez2003]. Loss of bec-1 or other autophagy genes shortens worm lifespan and suppresses the longevity of daf-2 mutants. This placed [[autophagy]] as a downstream effector — not a cause, but a required mechanism — of IIS-mediated longevity. Note: the primary source specifically tested autophagy requirements in the context of insulin-like signaling pathway mutants; extrapolation to all longevity mutations is supported by subsequent work but not by this paper alone. The autophagy requirement has since been confirmed in multiple other longevity contexts (DR, TOR inhibition, sirtuin overexpression). #gap/no-fulltext-access (Melendez 2003, 10.1126/science.1087782 — closed-access; quantitative details unverifiable; abstract-level claims verified via Crossref)

---

## Conserved aging-relevant systems

| System | C. elegans ortholog(s) | Conservation level | Notes |
|---|---|---|---|
| IIS / FOXO | DAF-2 (IGF1R), DAF-16 (FOXO), AGE-1 (PI3K), AKT-1/2 | High | Single DAF-2 receptor vs multiple human IIS receptors |
| mTOR signaling | LET-363 (mTOR), RSKS-1 (S6K), IFE-2 (4E-BP) | High | One complex in worm vs mTORC1/mTORC2 in mammals |
| AMPK | AAK-1, AAK-2 | High | Two catalytic subunit paralogs |
| Autophagy | BEC-1, LGG-1 (LC3), ATG-7, ATG-18 | High | Core Atg machinery conserved |
| Sirtuin (NAD+) | SIR-2.1 (SIRT1 ortholog) | Partial | NAD+-dependence conserved; tissue-specific SIRTs absent |
| Mitochondrial UPR (UPRmt) | ATFS-1 (ATF5 ortholog), HSP-6 | Partial | UPRmt pathway discovered largely in worms |
| Proteostasis / HSR | HSP-90 (DAF-21), HSP-70 (HSP-1) | High | Heat shock response fully conserved |
| DNA damage response | clk-2 (RTEL1 ortholog), cep-1 (p53 ortholog) | Partial | CEP-1 is functional p53 analog; DNA repair differs |

---

## Divergent systems — translation limits

### No adaptive immunity

Worms have innate immune signaling (p38/PMK-1, DAF-2 partial overlap) but **no adaptive immunity** — no B cells, T cells, MHC, or antibody production. Inflammaging, adaptive immune decline, and the immunosenescence hallmark of human aging **cannot be modeled in worms**. Innate immune findings may be partially informative but require confirmation in vertebrate systems.

### No circulatory system

Worms have a pseudocoelom for nutrient distribution but no heart, blood vessels, or erythrocytes. Cardiovascular aging, endothelial dysfunction, and vascular senescence are entirely absent. The pharynx pumping rate is sometimes used as a proxy for age-related functional decline but is not mechanistically homologous to cardiac aging.

### Post-mitotic adult soma — no replicative senescence

Once development is complete, adult somatic cells do not divide. There is no Hayflick limit, no replicative senescence, and no adult somatic stem cell pool with age-dependent exhaustion. The [[cellular-senescence]] and [[stem-cell-exhaustion]] hallmarks of human aging have no direct worm equivalent. The germline remains mitotic — germline signals do modulate somatic aging (e.g., ablation of germline precursor cells extends lifespan via DAF-16), but this is a germline-to-soma signal, not a replicative mechanism.

### IIS effect magnitude

The ~2× lifespan extension in *daf-2* worms is an order-of-magnitude larger than what IIS pathway manipulation achieves in mammals. Human FOXO3A longevity-associated polymorphisms are common variants with modest effect sizes. See the [[_extrapolation-guide]] for the canonical documentation of this pitfall.

### Short-lived and cold

Wild-type worms live 17 days at 20°C. Temperature directly controls metabolic rate and lifespan (15°C → longer; 25°C → shorter). Thermal sensitivity is not relevant to human aging. Many longevity interventions in worms have only been tested at a single temperature; temperature × intervention interactions are rarely reported.

### No connective-tissue / ECM / skeletal aging

Humans suffer enormous functional decline from connective-tissue aging — collagen glycation (advanced glycation end-products, AGEs), cartilage degeneration (osteoarthritis), bone loss (osteoporosis), dermal collagen disorganization, and arterial stiffening from elastin/collagen crosslinking. **Worms have none of this.** The worm cuticle (collagen-based) is shed four times during larval development and is structurally distinct from mammalian ECM. There is no analogous post-developmental ECM accumulation, no AGE-driven crosslinking pathology, no skeletal load-bearing tissue, no cartilage. Interventions targeting glycation (carnosine, alagebrium) or collagen crosslinking (lysyl oxidase modulators) cannot be screened meaningfully in worms.

### Endocrine simplicity

Worms have nuclear hormone receptors (NHRs, ~280 in *C. elegans* vs ~48 in humans) and ~40 insulin-like peptides (INSs) that bind the single DAF-2 receptor, but they lack the vertebrate endocrine architecture: no thyroid, no adrenal, no pituitary, no separate insulin/IGF-1 distinction, no sex steroids in the testosterone/estrogen sense (worms have steroid-like dafachronic acids that bind DAF-12, but these are developmental signals, not sustained adult hormones). Endocrine-driven aging phenotypes (menopause, andropause, hypothyroidism, adrenal axis dysregulation) have no worm equivalent. Interventions targeting steroid biosynthesis, thyroid axis, or the HPA axis cannot be modeled.

### Intestinal polyploidy vs mammalian stem-cell renewal

The 20 worm intestinal cells become polyploid (up to 32C) and post-mitotic during development; they age in place over the entire ~17-day adult lifespan with no cell-replacement mechanism. The mammalian intestine, in contrast, is one of the body's highest-turnover tissues, with Lgr5⁺ crypt-base columnar stem cells renewing the epithelium every ~3–5 days throughout life. Worm intestinal aging is a study of *aging cells in place*; mammalian intestinal aging is a study of *stem-cell exhaustion and crypt-clone drift*. Two different problems. Findings about intestinal aging in worms (mitochondrial decline, autophagy collapse, lipid accumulation) are about cell-autonomous aging in long-lived post-mitotic cells, not about the stem-cell-driven mammalian phenotype.

---

## Worm-specific experimental confounds

Distinct from species-biology divergences (above), the **husbandry conditions of standard *C. elegans* lifespan assays** introduce confounds analogous to the mouse-housing problem on [[mus-musculus]]. These are *experimental-design artifacts*, not fixed properties of the species — but they apply to nearly every published worm longevity study.

### Bacterial food (OP50 vs HT115 etc.)

Lab worms eat bacteria. The standard food is *E. coli* OP50 (a uracil-auxotrophic B strain), grown on solid NGM (nematode growth medium) plates. Different bacterial strains substantially alter worm lifespan, drug response, and metabolic phenotype. Cabreiro et al. (2013) [^cabreiro2013] showed that **metformin's lifespan-extending effect in *C. elegans* is primarily microbiome-mediated, not direct on worm metabolism** — metformin (50 mM) alters bacterial folate and methionine metabolism (inhibiting bacterial methionine synthase and disrupting the folate cycle), and the worm responds to the altered nutrient landscape resembling dietary restriction. Crucially, metformin does *not* extend lifespan in axenic culture (no bacteria) or on UV-irradiated bacteria, and instead shortens lifespan under those conditions — demonstrating that live bacteria are required for the life-extending effect. *E. coli* strains that are resistant to metformin's bacteriostatic effects (e.g., OP50-MR) do not show lifespan extension; lifespan change across bacterial strains correlates strongly with metformin's capacity to inhibit bacterial growth (R²=0.82, p<0.0007) [^cabreiro2013]. Note: metformin also has direct toxic effects on worms — the paper explicitly identifies both indirect (microbiome-mediated life-extending) and direct (life-shortening) effects, with the net outcome depending on which *E. coli* strain is present. **Many "compound-extends-worm-lifespan" claims may be bacterial-metabolism effects.** Cabreiro & Gems (2013) [^cabreiroreview2013] place this class of confounds in a broader framework: the worm and its bacterial food source constitute a "worm-bug" holobiont, and drug actions on bacteria can indirectly alter host physiology, activate detoxification pathways, or mimic dietary restriction. Implication: a positive worm result for a compound that is also metabolized by gut bacteria cannot be cleanly attributed to a worm-side mechanism.

### FUdR sterilization confound

Virtually all worm lifespan assays use **5-fluoro-2'-deoxyuridine (FUdR)** — a chemotherapy drug (thymidylate synthase inhibitor) — to prevent reproduction in adult hermaphrodites (so they can be counted in lifespan assays without progeny overwhelming the plate). FUdR is not inert: Anderson et al. (2016) [^anderson2016] demonstrated that **FUdR itself interacts with FOXO (daf-16), sirtuins, and base-excision repair** — i.e., the canonical aging pathways. The key demonstration: moderate osmotic stress (300 mM NaCl) *reduces* lifespan by ~50% in the absence of FUdR, but *increases* lifespan 20–25% in the presence of FUdR (400 µM) — meaning osmotic-stress lifespan extension requires FUdR. FUdR-induced lifespan extension under osmotic stress is partially abrogated by loss of *daf-16* (FOXO) or *nth-1* (base-excision repair uracil-DNA glycosylase), and greatly reduced by loss of the sirtuin triple mutant *sir-2.1; sir-2.3; sir-2.4* (single *sir-2.1* deletion alone has minimal effect). FUdR also increases DAF-16::GFP levels ~30% independently of osmolarity. Worms on FUdR are partly chemotherapy-treated — the authors explicitly recommend that "FUdR use should be avoided in *C. elegans* stress or aging studies, or when different genotypes are compared." Interventions tested under FUdR may have effects modified, masked, or created by the drug. FUdR-free lifespan assays (germline-ablation strains like glp-1, or fer-15;fem-1 sterile mutants) are technically harder and used less often.

### Plate vs liquid culture

Solid NGM plates and liquid culture produce different aging trajectories: liquid culture has higher bacterial density, different oxygenation, no agar gradient for compound diffusion, and different worm activity. Lifespan-modifying interventions sometimes work in one format and not the other. Most published longevity data is plate-based; high-throughput compound screening platforms increasingly use liquid culture (WMicroTracker, Microfluidic Worm Hotel) — cross-format extrapolation is non-trivial.

### Pharmacokinetics absent

Compounds added to NGM plates reach worms via cuticle absorption and ingestion-with-food; there is no oral / IV / IP distinction, no first-pass hepatic metabolism, no plasma-protein binding, no kidney clearance, no blood-brain barrier. A compound's *worm-effective concentration* (typically µM in plate agar) translates to a human dose by no known formula. The worm system is a **pathway screening tool, not a pharmacology system.**

### Temperature × intervention

Wild-type worms live ~17 days at 20°C, ~23 days at 15°C, and ~11 days at 25°C. Many published longevity interventions have been tested at only one temperature, usually 20°C; temperature × intervention interactions (whether the extension scales linearly with the baseline, or only emerges at one temperature) are rarely reported.

### N2 Bristol strain artifacts

Most published work uses the N2 Bristol reference strain. Wild isolates from the *Caenorhabditis* Natural Diversity Resource (CaeNDR) show substantial aging-trajectory variation. The "worm aging" literature is mostly N2 aging; cross-strain replication is rare and sometimes contradictory. Direct parallel to the C57BL/6 problem in mouse aging.

---

## Hallmarks of aging — what worms can and cannot model

Mapping the 12 [[hallmarks-of-aging]] (López-Otín 2023) to worm-modelability:

| Hallmark | Worm-modelable? | Notes |
|---|---|---|
| Genomic instability | partial | DNA repair pathways conserved (ATM-1, ATR, MRN); somatic mutations less central to aging because adult soma is post-mitotic |
| Telomere attrition | **no** | Adult soma is post-mitotic — no replicative telomere shortening. Germline telomeres exist but are not an adult-aging mechanism. |
| Epigenetic alterations | partial | H3K27me3, H3K4me3, H3K9me3 dynamics conserved; **CpG DNA methylation is absent in C. elegans** — the Horvath-clock paradigm has no worm equivalent |
| Loss of proteostasis | **yes** | Heat shock response (HSF-1), UPR, UPRmt all worked out in worms; aggregation models for Aβ, tau, polyQ, α-synuclein are widely used |
| Disabled macroautophagy | **yes** | Foundational worm work — bec-1, atg-7, lgg-1; autophagy required for IIS/TOR/DR longevity |
| Deregulated nutrient sensing | **yes** | IIS (daf-2/16), TOR (let-363), AMPK (aak-2), sirtuins (sir-2.1) all founded or major-advance in worms |
| Mitochondrial dysfunction | partial | mit mutants (clk-1, isp-1) extend lifespan via UPRmt; mt-DNA heteroplasmy and clonal mt mutation accumulation differ from mammals |
| Cellular senescence | **no** | Post-mitotic adult soma — no replicative senescence, no oncogene-induced senescence in adult cells, no SASP |
| Stem cell exhaustion | partial | Germline stem cells age (decline in mitotic zone, oogenesis quality); **no adult somatic stem cells** to exhaust |
| Altered intercellular communication | partial | Insulin-like peptides, TGF-β-like (DAF-7), Wnt all present; **no immune cytokines, no inflammaging signaling** |
| Chronic inflammation (inflammaging) | **no** | No adaptive immunity, no NF-κB-driven cytokine network analogous to mammals (worm NF-κB is absent); innate p38/PMK-1 signaling exists but is not a chronic inflammatory state in the human sense |
| Dysbiosis | **yes (uniquely)** | Bacterial food source IS the worm "microbiome" — Cabreiro 2013 metformin-bacteria-folate work is the canonical demonstration; worm dysbiosis is exceptionally tractable |

**Summary:** worms excel at proteostasis, autophagy, and nutrient-sensing hallmarks (where they founded much of the field); model partially mitochondrial / epigenetic / stem-cell / signaling hallmarks; **cannot model** telomere attrition, cellular senescence, or inflammaging at all.

---

## For personal / home research — what worm assays can and cannot tell you about your own aging

If you are running *C. elegans* assays at home (or evaluating worm-derived claims for personal aging strategy), the practical translation rules:

**Worms are useful for:**
- Initial proof-of-concept that a compound or genetic perturbation hits a conserved aging pathway (IIS, TOR, AMPK, autophagy, proteostasis).
- Epistasis dissection — which pathway mediates the effect, which doesn't.
- Cheap, fast screening of compound libraries for *any* lifespan effect; positive hits warrant follow-up in vertebrate systems.
- Generating mechanistic hypotheses about pathway interaction.

**Worms are NOT useful for:**
- Dose translation. Worm-effective µM plate concentrations do not predict human serum or tissue concentrations.
- Anything immune-system-related. No adaptive immunity, no inflammaging, no senescent-cell-immune-clearance.
- Anything cardiovascular, neurodegenerative-with-circulation, or vascular. No heart, no vessels, no BBB.
- Anything ECM / skeletal / cartilage / dermal collagen — these tissues are absent.
- Telomere-targeted or replicative-senescence-targeted interventions. Adult soma is post-mitotic.
- Anything endocrine in the vertebrate sense (thyroid, adrenal, sex steroid). Worm endocrinology is qualitatively different.
- Microbiome interventions that aim to manipulate gut bacterial composition for human aging benefit — the worm "microbiome" is a single food source, not a complex community.

**Negative worm results rarely rule out a human effect** — the worm-vs-mammal divergences above mean a worm-null intervention may still work in humans via a system the worm doesn't have. **Positive worm results** (especially in pathway-conserved areas like proteostasis, autophagy, nutrient sensing) are informative as direction-of-effect signal but tell you nothing about magnitude in humans. See [[hypotheses/translation-failure-of-aging-interventions]] for the broader synthesis.

---

## Experimental strengths

1. **Whole-genome RNAi screens** — the Ahringer and Vidal RNAi libraries enable systematic knockdown of nearly every gene; entire-genome lifespan screens have been completed and published.
2. **Transparent body plan** — GFP reporters in live animals; tissue-level imaging without dissection.
3. **~17-day lifespan** — a longevity experiment from strain to result in ~4 weeks; unmatched throughput vs any vertebrate system.
4. **Invariant cell lineage** — every cell has a known fate; cell-specific manipulation is routine (e.g., germline ablation by laser).
5. **Genetic tractability** — forward/reverse genetics, CRISPR, transgenics, temperature-sensitive alleles, all well-developed.
6. **Community resources** — WormBase, Caenorhabditis Genetics Center (CGC), Wormbook; extensive curated mutant/strain collections.
7. **Low cost** — a single researcher can run hundreds of lifespan assays simultaneously at minimal cost.

---

## Known failure modes

1. **IIS effect magnitude** — *daf-2* 2× extension does not predict human IGF1 pathway interventions. Magnitude translation is poor even if pathway identity is conserved.
2. **Caloric restriction epistasis** — worm DR models (eat-2, dilution, liquid culture) sometimes give conflicting results and different genetic dependencies. The "correct" worm DR model is debated; extrapolation to human CR mechanisms is uncertain. #gap/contradictory-evidence
3. **Sirtuin controversies** — the original sir-2.1 1.5-copy transgene lifespan extension was later questioned by Burnett et al. (2011) as partly confounded by background genetic differences. Outcrossing reduced the effect in some studies. The worm sirtuin data require careful interpretation (see [[sirtuin]] for full discussion). #gap/contradictory-evidence
4. **Pharmacokinetics irrelevant** — absorption, distribution, metabolism, excretion (ADME) do not apply. Compounds added to plates are absorbed across the entire cuticle; pharmacokinetic translation to mammals is non-existent.
5. **No tumor suppression** — worm somatic cells are post-mitotic; cancer and oncogene-driven senescence programs cannot be modeled.
6. **Single genetic background** — most published work uses N2 Bristol. Genetic background effects, which are important in mouse longevity studies, are understudied in worms.

---

## Limitations and gaps section

- #gap/needs-human-replication — All worm lifespan findings. The IIS/FOXO, TOR, AMPK, and autophagy pathways are conserved and relevant, but quantitative translation of any single finding requires mammalian validation.
- #gap/needs-replication — Several worm longevity screens were conducted in single labs; independent replication is inconsistent. The sirtuin controversy illustrates the risk.
- The UPRmt (mitochondrial unfolded protein response) pathway, largely worked out in worms, lacks a well-characterized human equivalent; its translational relevance is unclear. #gap/no-mechanism
- Temperature sensitivity of worm lifespan confounds cross-study comparisons; a systematic temperature-controlled replication resource does not exist. #gap/unsourced

---

## Cross-references

- [[insulin-igf1]] — IIS pathway; daf-2/daf-16 axis
- [[mtor]] — TOR pathway; let-363 RNAi founding work
- [[ampk]] — aak-2 energy sensing
- [[sirtuin]] — sir-2.1 lifespan extension; controversies
- [[autophagy]] — bec-1; autophagy requirement for longevity
- [[_extrapolation-guide]] — model-organism translation rubric; C. elegans IIS pitfall documented
- [[hypotheses/translation-failure-of-aging-interventions]] — Mode B synthesis on systematic effect-size attenuation across model-organism→human; worm IIS magnitude is the canonical Tier 2 example
- [[deregulated-nutrient-sensing]] — primary hallmark covered by IIS, TOR, AMPK findings
- [[disabled-macroautophagy]] — hallmark; worm autophagy data
- [[cellular-senescence]] — hallmark absent in post-mitotic worm soma; contrast with mammalian systems
- [[caloric-restriction]] — eat-2 CR model
- [[mus-musculus]] — vertebrate model for translational follow-up of worm findings
- [[daf-16]] — stub; FOXO ortholog page needed #stub
- [[daf-2]] — stub; worm insulin receptor page needed #stub

---

## Footnotes

[^kenyon1993]: doi:10.1038/366461a0 · [[studies/kenyon-1993-daf2-lifespan]] · in-vivo · n not specified in abstract (multiple independent mutant alleles) · model: *C. elegans* hermaphrodite N2 background · lifespan >2× wild-type; daf-16 required for extension · cited_by ~3379; citation_percentile 100; closed-access #gap/no-fulltext-access (not_oa per a local paper archive — quantitative details unverifiable beyond title; title confirms "twice as long as wild type")

[^tissenbaum2001]: doi:10.1038/35065638 · in-vivo · model: *C. elegans* hermaphrodite (N2 background) · sir-2.1 extrachromosomal transgene → mean lifespan 20.9–27.4 days vs N2 17.6 days (P<0.05; up to ~56% extension in best line geEx2); integrated lines: 21.6–27.5 days; daf-16-dependent (daf-16(mgDf50) abolishes extension) · n per strain: N2 n=142, geEx1 n=214, geEx2 n=80, geEx3 n=209, geIn1 n=46, geIn2 n=121, geIn3 n=276 · locally available:  · cited_by ~1904

[^vellai2003]: doi:10.1038/426620a · in-vivo · model: *C. elegans* · let-363 (TOR ortholog) RNAi extends lifespan ~30–50%; partially epistatic with IIS · cited_by ~1046; download failed (bronze OA URL not accessible) #gap/no-fulltext-access (quantitative lifespan figures unverifiable against primary source)

[^lakowski1998]: doi:10.1073/pnas.95.22.13091 · in-vivo · model: *C. elegans* hermaphrodite (N2 background, 20°C) · n=50/strain per experiment · eat-2 alleles extend mean lifespan 29–57% over wild-type (eat-2(ad1116): 30.6 days vs N2 19.5 days, +57%, p<0.0005; eat-2(ad465): average +47% over 7 independent trials); eat-2-mediated extension does not require daf-16; eat-2; daf-2 double mutants live longer than either single mutant (additive, distinct pathways); eat-2; clk-1 double mutants do not live longer than single mutants (epistatic, same pathway) · locally available:  · cited_by ~961

[^apfeld2004]: doi:10.1101/gad.1255404 · in-vivo · model: *C. elegans* (N2, 20°C) · aak-2(ok524) loss-of-function: 12% shorter lifespan than wild-type; aak-2 increased-dosage transgenic: 13% longer lifespan on average · aak-2 and daf-16 act in **parallel** (not linear hierarchy): daf-16(mu86); aak-2(ok524) double mutants 15% shorter than either single mutant · AMP:ATP ratio increases with age and predicts life expectancy · locally available:  · cited_by ~632

[^melendez2003]: doi:10.1126/science.1087782 · in-vivo · model: *C. elegans* · bec-1 (beclin1 ortholog) and orthologs of APG1, APG7, APG8, AUT10 required for dauer morphogenesis in IIS pathway mutants and for lifespan extension of daf-2/IIS mutants; autophagy as downstream effector of IIS-mediated longevity · cited_by ~1245; closed-access (not_oa per a local paper archive) #gap/no-fulltext-access (quantitative lifespan figures unverifiable; abstract-level claims verified via Crossref)

[^holzenberger2003]: doi:10.1038/nature01298 · in-vivo · model: *Mus musculus* 129/Sv background (Igf1r+/−) · combined-sex: mean 26% longer lifespan (P<0.02, Cox's test); ♀: 33% longer (756±46 vs 568±49 days, P<0.001, t-test); ♂: 15.9% longer (679±80 vs 585±69 days, NS) · greater resistance to oxidative stress (paraquat injection); normal food intake, metabolic rate, body temperature · locally available:  · cited_by ~2091

[^flachsbart2009]: doi:10.1073/pnas.0809594106 · observational (case-control) · n=1,031 German long-lived individuals (LLI, aged 95–110; 388 centenarians subset) + 731 younger controls (aged 60–75) · model: humans · 16 FOXO3A SNPs tested; top SNP rs3800231 OR=1.42 (95% CI 1.18–1.70, p=0.0002) in centenarians; association stronger in centenarians than nonagenarians; extended Willcox 2008 Japanese finding to Europeans and to both sexes; French replication (n=535 centenarians) showed trend but not significant · locally available:  · cited_by ~567

[^cabreiro2013]: doi:10.1016/j.cell.2013.02.035 · Cabreiro F, Au C, Leung KY, Vergara-Irigaray N, Cochemé HM, Noori T, Weinkove D, Schuster E, Greene ND, Gems D · *Cell* 2013 · in-vivo · model: *C. elegans* N2 + *E. coli* OP50 co-culture · "Metformin retards aging in C. elegans by altering microbial folate and methionine metabolism" · PMID 23540700 · metformin (25 mM) extends mean lifespan +18%, (50 mM) +36%, (100 mM) +3% in standard OP50 conditions; no extension in axenic (bacteria-free) culture or on UV-irradiated bacteria; metformin-resistant OP50-MR strain shortens lifespan (−37%, p<0.001); lifespan effect across strains correlates with capacity to inhibit bacterial growth (R²=0.82, p<0.0007); mechanism: metformin inhibits bacterial methionine synthase (MS) → 5-methyl-THF accumulation (methyl trap) + reduced SAMe → altered host methionine metabolism mimicking DR; 15 µM FUdR used for sterilization; paper explicitly identifies both indirect (microbiome-mediated life-extending) and direct (life-shortening, bacterial-independent) effects · locally available:  · verified 2026-05-14 against full PDF

[^cabreiroreview2013]: doi:10.1002/emmm.201100972 · Cabreiro F, Gems D · *EMBO Molecular Medicine* 2013 · "Bridge the Gap" review article · "Worms need microbes too: microbiota, health and aging in Caenorhabditis elegans" · PMID 23913848 · PMC3799487 · frames *C. elegans* + its bacterial food source as a two-organism "worm-bug" holobiont; catalogs bacterial strain effects on worm lifespan, dietary restriction mechanisms (Table 1: bDR +29–57%, eat-2 +57%, axenic +85/74% etc.), probiotics (Lactobacillus/Bifidobacterium), bacterial dysbiosis in old worms, and microbiota as mediators of drug effects (biotransformation, arrested proliferation, indirect host effects); explicitly uses Cabreiro 2013 metformin data as the canonical example of microbiota-mediated drug action (Fig 3C); cover pages 1300–1310 · locally available:  · verified 2026-05-14 against full PDF

[^anderson2016]: doi:10.1016/j.mad.2016.01.004 · Anderson EN, Corkins ME, Li JC, Singh K, Parsons S, Tucey TM, Sorkaç A, Huang H, Dimitriadi M, Sinclair DA, Hart AC · *Mechanisms of Ageing and Development* 2016 · in-vivo · model: *C. elegans* N2 · "C. elegans lifespan extension by osmotic stress requires FUdR, base excision repair, FOXO, and sirtuins" · PMID 26854551 · PMC4789167 · central finding: 300 mM NaCl osmotic stress reduces lifespan ~50% without FUdR but increases lifespan 20–25% with 400 µM FUdR — extension absolutely requires FUdR; FUdR increases DAF-16::GFP levels ~30% independently of osmolarity; epistasis: *daf-16(mu86)* partially abrogates extension; *sir-2.1; sir-2.3; sir-2.4* triple sirtuin mutant greatly reduces extension (single *sir-2.1* deletion alone has minimal effect); *nth-1(ok724)* (BER uracil-DNA glycosylase) blunts extension and reduces acute stress resistance ~30%; authors explicitly recommend FUdR "should be avoided in *C. elegans* stress or aging studies, or when different genotypes are compared"; n ≥ 140–313 animals per condition · local PDF download failed (status: failed, no OA URL); PMC full text verified via PMC4789167 · verified 2026-05-14 against PMC full text
