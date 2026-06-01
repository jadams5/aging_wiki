---
type: model-organism
species-name: Nothobranchius furzeri
common-name: African turquoise killifish
ncbi-taxonomy: 105023
typical-lifespan: "3–8 months (strain-dependent; GRZ lab strain median ~9 weeks (~2 months), maximum ~13 weeks (~3 months); wild-derived strains 6–8+ months)"
lifespan-ratio-to-human: "~150x shorter (4–6 months vs 80 years)"
genome-similarity-to-human: "~98% coverage of 248 highly-conserved eukaryotic genes (CEGMA; Reichwald 2015); no published one-to-one human ortholog percentage — prior '~70%' estimate was unsourced"
genome-size-mb: ~1240
itp-validated: false
key-strengths: [shortest-lived-vertebrate, vertebrate-physiology, telomere-biology-more-human-like, brain-aging, diapause-biology, rapid-aging-phenotypes, genetic-tractability]
key-divergences: [aquatic-ectotherm, embryonic-diapause, oviparous, smaller-brain-complexity, annual-lifecycle, limited-genetic-tools-vs-mouse]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Valenzano 2006, Reichwald 2015, Smith 2017, Terzibasi 2009, Cellerino 2016, Dolfi 2019 verified against primary source PDFs. de Bakker 2023 (brain aging review) failed to download (PDF fetch failed after retry); brain aging section claims from that paper are unverified and carry #gap/no-fulltext-access. Graf 2013 (telomere/in-vitro senescence) is closed-access (not_oa) and unverified."
---

> **Partially unverified:** Brain aging claims attributed to de Bakker & Valenzano 2023 (doi:10.1016/j.arr.2023.102019) could not be verified — PDF download failed after retry. Those claims are tagged #gap/no-fulltext-access below. Telomere/in-vitro senescence claims from Graf 2013 (doi:10.1016/j.exger.2012.02.012) are unverified — closed-access paper (not_oa). All other primary sources verified against PDFs 2026-05-04.

# *Nothobranchius furzeri* — African turquoise killifish

The African turquoise killifish is the **shortest-lived vertebrate used in laboratory aging research**, with a median lifespan of ~9 weeks (~2 months) in the standard GRZ inbred lab strain and 5–6+ months in wild-derived strains [^cellerino2016review]. Cellerino et al. (2016) report GRZ median captive lifespan "as short as 3 months" under standard conditions; Terzibasi et al. (2009) report GRZ median of 9 weeks and maximum of 13 weeks across replicated experiments. This compresses the full arc of vertebrate aging — growth, maturation, senescence, and death — into a timeline accessible within a single research project, without sacrificing vertebrate physiology. Established as an aging model in the 2000s by the Cellerino, Brunet, Valenzano, and Reichard labs, *N. furzeri* is now used heavily for brain aging, telomere biology, gut microbiome–longevity interactions, and pharmacological longevity screens in a vertebrate system.

## Identity and resources

| Field | Value |
|---|---|
| Species | *Nothobranchius furzeri* Jubb, 1971 |
| Common name | African turquoise killifish (also: turquoise killifish) |
| NCBI Taxonomy ID | 105023 |
| Order / Family | Cyprinodontiformes / Nothobranchiidae |
| Genome assembly | Reichwald 2015 assembly (GenBank: KG817100/KG959958); 19 chromosomes; reference sequence from GRZ female |
| Genome size | ~1,240 Mb assembled reference sequence; PacBio estimate ~1,500 Mb (Reichwald 2015) [^reichwald2015] |
| Typical median lifespan | ~9 weeks / ~2 months (GRZ inbred); 5–6 months (MZM-04/10P wild-derived); 6+ months (MZM-04/03 wild-derived) [^terzibasi2009] |
| Lifespan ratio to human | ~150x shorter |
| AnAge database | see AnAge entry for *N. furzeri* |
| Native range | ephemeral pools of southeastern Zimbabwe and southern Mozambique |

[^cellerino2016review]: doi:10.1111/brv.12183 · Cellerino A, Valenzano DR, Reichard M · review · model: Nothobranchius spp. biology and aging
[^reichwald2015]: doi:10.1016/j.cell.2015.10.071 · Reichwald K et al. · in-silico genomic analysis · model: N. furzeri GRZ strain genome assembly

## Strain landscape

**Strain background determines lifespan span.** The primary laboratory strains differ substantially in lifespan, spanning nearly 2-fold variation. Experimental results should specify the strain used; inter-strain comparisons are an active research tool for mapping lifespan QTLs.

| Strain | Origin | Median lifespan | Notes |
|---|---|---|---|
| GRZ | Zimbabwe (semi-arid) | median ~9 weeks (~2 months); maximum ~13 weeks (~3 months) | Standard "short" lab strain; most aging studies; Cellerino 2016 review states "as short as 3 months" |
| MZM-0410 | Mozambique (semi-arid) | mean 20 weeks (~5 months); maximum 26 weeks [^terzibasi2009] | Intermediate lifespan; frequently used in comparative studies |
| MZM-0403 / wild-derived | Southern Mozambique (semi-humid) | mean 24 weeks (~6 months); maximum 32 weeks [^terzibasi2009] | Longer-lived; used in lifespan/DR comparative experiments |

Strain crosses between GRZ and longer-lived strains have been used to map genomic loci associated with lifespan variation [^reichwald2015]. The ~2-fold lifespan difference within the species makes *N. furzeri* an intrinsic resource for identifying vertebrate longevity loci.

## Natural history and the annual lifecycle

*N. furzeri* inhabits ephemeral pools in semi-arid southern Africa that form only during the rainy season and dry out completely within 4–8 months. The species' life history is adapted to this: adults reproduce rapidly and die with the pool; embryos survive pool desiccation in a state of arrested development called **diapause**.

### Diapause: developmental arrest as a biological clock model

Embryos can enter up to three distinct diapause stages (DI, DII, DIII), halting development for months or years until conditions favor hatching [^dolfi2019]. Diapause involves:

- **Cell cycle arrest**: embryonic epiblast cells exit cycling and are blocked specifically in G1 phase during diapause I (confirmed by FUCCI fluorescent reporter system in stable transgenic line); exit from diapause I is synchronous and cells re-enter directly into S phase [^dolfi2019].
- **Metabolic suppression**: oxygen consumption falls dramatically; oxidative damage is buffered.
- **Epigenetic stabilization**: chromatin state is maintained over extended dormancy periods.

Diapause is of direct aging-biology interest because it represents a **reversible, non-damaging biological pause** — a natural experiment in suspending biological time. The molecular pathways governing diapause entry and exit overlap with pathways implicated in aging ([[mtor]], [[ampk]], [[insulin-igf1]]), suggesting conserved mechanisms of developmental and aging tempo regulation. #gap/no-mechanism

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial (mTOR, AMPK, cell-cycle regulators conserved; diapause-specific circuitry not present) |
| Phenotype conserved in humans? | no (human embryos do not enter diapause; some parallels to suspended animation / torpor hypotheses) |
| Replicated in humans? | no |

[^dolfi2019]: doi:10.1186/s13227-019-0142-5 · Dolfi L et al. · in-vivo · model: N. furzeri embryos (FUCCI reporter line); cell cycle dynamics during diapause entry/exit

## Genome similarity and conserved aging pathways

The *N. furzeri* genome was assembled and annotated in 2015 [^reichwald2015]. The reference assembly is ~1,240 Mb across 19 chromosomes (anchored synteny groups), with 26,141 annotated protein-coding genes and 98% coverage of 248 highly conserved eukaryotic genes (CEGMA). As a teleost fish, it shares a larger set of conserved protein-coding genes with humans than invertebrate models, while retaining important aging-relevant divergences relative to mouse. #gap/unsourced — no published figure for percent human one-to-one orthologs; prior "~70%" estimate was not found in Reichwald 2015.

The following aging-relevant pathways are well conserved:

- **[[telomere-attrition]]** — see detailed section below; more human-like than standard mouse strains.
- **[[mtor]] signaling** — mTOR kinase and core complex components (RAPTOR, RICTOR, S6K1) are conserved; pharmacological inhibition studies in killifish are feasible.
- **[[insulin-igf1]] / IIS pathway** — IGF1R, IRS, PI3K, AKT, FOXO orthologs present; IIS reduction extends lifespan across fish, worm, fly, and mouse.
- **[[ampk]] pathway** — AMPK α/β/γ subunits conserved; energy sensing mechanism orthologous.
- **[[autophagy]]** — ATG gene family conserved; autophagic flux declines with age in killifish tissues as in mammals.
- **[[mitochondrial-dysfunction]]** — mitochondrial quality control genes conserved; age-associated ROS increase documented.
- **[[cellular-senescence]]** — p16, p21, and senescence-associated β-galactosidase accumulate in aged killifish tissues; SASP-like inflammatory signatures observed in aged fish [^cellerino2016review].

## Telomere biology — more human-like than mouse

One of the most important features distinguishing *N. furzeri* from standard mouse strains is **telomere biology closer to humans**. Unlike C57BL/6 mice, which have 5–10× longer telomeres than humans and maintain constitutive telomerase in most somatic tissues (see [[mus-musculus]]), killifish exhibit:

- **Shorter telomeres** relative to mouse strains, in a range more comparable to human somatic cells.
- **Progressive telomere shortening** with age in tissues, consistent with replicative senescence operating in vivo.
- **Telomerase activity in cultured killifish cells**: paradoxically, cultured cells from *N. furzeri* maintain telomerase and do not exhibit replicative senescence in vitro [^graf2013] #gap/no-fulltext-access, suggesting that *in vivo* telomere shortening is regulated by additional tissue-level mechanisms not replicated in cell culture. This decoupling is itself an interesting finding relevant to understanding organismal vs cellular aging.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (telomere shortening, telomerase repression in somatic tissues more similar to human than mouse) |
| Phenotype conserved in humans? | partial (organismal telomere attrition observed; in vitro culture shows telomerase activity, unlike primary human fibroblasts) |
| Replicated in humans? | yes (telomere attrition confirmed as human aging feature; killifish used to model this more faithfully than standard mouse) |

See [[telomere-attrition]] for the full biology; killifish is noted there as a complementary model to *Tert−/−* mice for telomere-driven aging.

[^graf2013]: doi:10.1016/j.exger.2012.02.012 · Graf M, Hartmann N, Reichwald K, Englert C · in-vitro · model: N. furzeri (GRZ strain) primary cell cultures; sustained telomerase + absence of replicative senescence in culture · **UNVERIFIED** — closed-access (not_oa); PDF not available in a local paper archive #gap/no-fulltext-access

## Brain aging

The killifish brain undergoes **rapid, spontaneous neurodegeneration** within its short lifespan, making it a uniquely tractable vertebrate system for brain aging research [^debakker2023]. #gap/no-fulltext-access — de Bakker & Valenzano 2023 (doi:10.1016/j.arr.2023.102019) PDF download failed; claims below attributed to this source are unverified against the primary text. Documented age-related changes include:

- **Dopaminergic and noradrenergic neuron loss**: progressive decline in substantia nigra-equivalent regions; parallels Parkinson's-relevant neurodegeneration.
- **Protein aggregation**: accumulation of α-synuclein and other aggregation-prone proteins in aged brain tissue.
- **Neuroinflammation**: glial activation (microglia-equivalent cells) increases with age.
- **Cognitive decline**: behavioral assays (maze learning, associative memory) show measurable decline within the 4–6 month lifespan, enabling longitudinal within-experiment tracking.
- **Adult neurogenesis decline**: the killifish brain maintains robust adult neurogenesis in young fish, which declines steeply with age — a potentially more prominent feature than in aged mice.

The compressed timeline (weeks of "old age" in fish vs months-to-years in mice) makes killifish practical for drug screening targeting neurodegeneration. #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial (dopaminergic and proteostasis pathways conserved; fish brain organization differs from mammalian cortical architecture) |
| Phenotype conserved in humans? | partial (neuronal loss and protein aggregation parallel human neurodegeneration; fish lack cortex, hippocampus) |
| Replicated in humans? | no (fish brain aging used to generate hypotheses; human validation required) |

[^debakker2023]: doi:10.1016/j.arr.2023.102019 · de Bakker DEM, Valenzano DR · review · model: N. furzeri (multiple strains); spontaneous brain degeneration, dopaminergic loss, α-synuclein, cognitive decline

## Caloric restriction and pharmacological longevity interventions

### Caloric restriction

Dietary restriction (every-other-day feeding from week 4) extended lifespan and retarded several aging biomarkers in *N. furzeri* [^terzibasi2009]. Effects were strain-dependent: in the inbred GRZ strain, DR increased median lifespan from 11.5 to 13 weeks (log-rank χ²=7.98, p=0.005) and extended maximum lifespan 10%; it also reduced the demographic rate of aging. In the wild-derived MZM-04/10P strain, DR caused early mortality but extended maximum lifespan (10% survivorship extended from 41 to 46 weeks; p=0.02) without reducing median lifespan. In both strains, DR reduced lipofuscin accumulation in liver (p<0.01) and Fluoro-JadeB neurodegeneration in brain, and improved performance on the active avoidance behavioral task (n=10/group, p<0.01 both strains). This vertebrate replication of the CR longevity effect adds to evidence from worms, flies, and mice that the CR → mTOR/AMPK/autophagy axis is broadly conserved.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (mTOR inhibition, AMPK activation, autophagy induction all observed under CR in humans) |
| Phenotype conserved in humans? | partial (healthspan biomarkers improve in CALERIE trial; lifespan extension not demonstrated in humans) |
| Replicated in humans? | in-progress / not demonstrated |

[^terzibasi2009]: doi:10.1111/j.1474-9726.2009.00455.x · Terzibasi E et al. · n=10/group (behavior); survival: multiple replicate experiments pooled · in-vivo · model: N. furzeri GRZ inbred (median 9 wk, max 13 wk) and MZM-04/10P wild-derived (median 20 wk, max 26 wk); every-other-day feeding from week 4; lifespan + lipofuscin + neurodegeneration + behavioral endpoints

### Resveratrol

Resveratrol extended median and maximum lifespan in *N. furzeri* in a dose-dependent manner — the first vertebrate demonstration of resveratrol longevity effects [^valenzano2006]. At 120 µg/g food, median lifespan increased 33% and maximum lifespan 27% (p<0.001, log-rank test; n=60 treated, n=47 controls). At 600 µg/g food, median lifespan increased 56% and maximum lifespan 59% (p<0.001, log-rank). The lowest dose (24 µg/g; n=30) was ineffective. Resveratrol also delayed age-dependent behavioral decline (locomotor activity, open-field exploration, cognitive performance in shuttle-box test) and reduced neurofibrillary degeneration (Fluoro-JadeB staining in optic tectum). Mechanism proposed involved sirtuin activation, though the authors note that the direct SIRT1-activation hypothesis was already being debated. The study used the Gonarezhou (GRZ) strain, with treatment starting at week 4 (sexual maturity). #gap/needs-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial (SIRT1 is conserved; resveratrol's mechanism of sirtuin activation debated; multiple off-target effects) |
| Phenotype conserved in humans? | no (human RCTs of resveratrol have not shown lifespan extension; healthspan evidence mixed) |
| Replicated in humans? | no |

[^valenzano2006]: doi:10.1016/j.cub.2005.12.038 · Valenzano DR et al. · n=157 total (110 treated at 3 doses; 47 controls) · in-vivo · randomized · p<0.001 (log-rank) at 120 and 600 µg/g doses · model: N. furzeri Gonarezhou (GRZ) strain; resveratrol added to food from week 4; +33% median, +27% maximum lifespan at 120 µg/g; +56% median, +59% maximum at 600 µg/g

## Gut microbiome rejuvenation

One of the most striking killifish findings concerns the gut microbiome. Transplanting intestinal microbiota from **young (6-week-old) donors into middle-aged (9.5-week-old) killifish** extended recipient lifespan and preserved a young-like microbial community composition [^smith2017]. Key findings:

- Middle-aged fish receiving young-fish gut content (Ymt group) showed **~37% median lifespan increase** vs untreated controls (wt; p=4.04×10⁻⁹, Logrank test), **~21%** vs antibiotic-only controls (Abx; p=5.89×10⁻⁵), and **~41%** vs same-age microbiota controls (Omt; p=5.08×10⁻⁶).
- Transfer of same-age (9.5-week-old) microbiota (Omt group) did not extend lifespan vs untreated controls — confirming the young-microbiome specificity of the effect.
- The gut microbiome of killifish undergoes age-associated diversity loss (6-week vs 16-week old fish, n=16+14; Mann-Whitney p<0.001) — a pattern also observed in aging humans (see [[dysbiosis]]).
- Young-microbiome transfer preserved specific genera (*Exiguobacterium*, *Planococcus*, *Propionigenium*, *Psychrobacter*) associated with young-like microbial state.
- Ymt fish maintained higher spontaneous locomotor activity at 16 weeks vs Omt and wt controls, indicating healthspan benefit beyond lifespan.
- The lifespan extension was achieved in a vertebrate system, supporting translational relevance beyond invertebrate microbiome-longevity findings.

#gap/needs-human-replication — human microbiome transplant for longevity has not been tested in controlled trials.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial (microbiome-aging interactions documented in humans; specific genera differ) |
| Phenotype conserved in humans? | unknown (no controlled human longevity trial of young-microbiome transfer) |
| Replicated in humans? | no |

[^smith2017]: doi:10.7554/eLife.27014 · Smith P, Willemsen D, Popkes M et al. · in-vivo · n=11 captive TK (microbiome characterization); survival experiment: multiple groups (Ymt, Omt, Abx, wt) · p<0.001 (Logrank, Ymt vs wt) · model: N. furzeri (9.5-week-old recipients, 6-week-old donors); antibiotic pretreatment + gut content transfer at 9.5 weeks; +37% median lifespan (Ymt vs wt); +41% vs same-age controls (Omt)

## Strengths as an aging model

1. **Shortest-lived vertebrate for lifespan studies**: complete lifespan experiments in as little as 3 months (GRZ strain) or 6–8 months (wild-derived strains), 5–10x faster than mice and orders of magnitude faster than primates. Enables within-experiment cohort designs that are impossible in longer-lived vertebrates.
2. **Vertebrate physiology**: organ-level aging — cardiovascular, brain, muscle, gut — directly relevant to mammalian aging, unlike invertebrate models.
3. **More human-like telomere biology than standard mouse**: makes it the preferred vertebrate model for telomere-driven aging research without requiring knockout engineering (contrast with *Tert−/−* mice). See [[telomere-attrition]].
4. **Spontaneous, rapid brain aging**: enables longitudinal neurodegeneration studies within weeks; suitable for drug screening targeting Parkinson's-like and age-related brain degeneration.
5. **Gut microbiome–longevity platform**: Smith 2017 demonstrated vertebrate longevity extension via microbiome transfer in a tractable timeline — not achievable in mice without multi-year studies.
6. **Diapause biology**: provides a unique window into reversible biological-time arrest; embryos are experimentally accessible and can be stored for extended periods.
7. **Genomically tractable**: genome assembled and annotated [^reichwald2015]; CRISPR/Cas9 tools available (though less developed than mouse toolkit); transgenic reporter lines exist (e.g., FUCCI cell-cycle reporters [^dolfi2019]).
8. **Ecological lifespan variation**: strain-by-strain lifespan differences (~2-fold within species) allow genetic mapping of longevity QTLs without interspecific crosses.

## Failure modes and limitations

### 1. Ectotherm / aquatic physiology

*N. furzeri* is an ectotherm. Temperature fluctuations alter metabolic rate and lifespan, introducing a confound not present in homeothermic mice and humans. Drug bioavailability and metabolism differ substantially from mammals; pharmacological studies require careful dose calibration and cannot be directly extrapolated to mammalian dosing.

### 2. Annual lifecycle and husbandry constraints

The annual lifecycle imposes breeding season structure on colony maintenance. Unlike mice, killifish cannot simply be bred on a fixed schedule without managing diapause-breaking conditions. This increases technical burden and limits adoption relative to mouse.

### 3. Limited genetic toolkit relative to mouse

While CRISPR and transgenic tools exist, the killifish toolkit is less mature than the mouse toolkit. No equivalent of the Cre-lox conditional knockout system is widely available; inducible knockouts are less established. The ITP has no killifish arm. #gap/unsourced

### 4. Brain complexity gap

Killifish lack a mammalian-equivalent cortex and hippocampus. Brain aging findings (neuronal loss, protein aggregation) are relevant but anatomically non-equivalent. Behavioral tests are limited compared to rodent behavioral batteries. Cognitive aging phenotypes cannot be directly mapped onto human dementia without intermediate mammalian model replication.

### 5. Microbiome composition divergence

The killifish gut microbiome composition differs substantially from mammals; genera identified in Smith 2017 as "young-associated" are not the same taxa implicated in human aging microbiome studies. The principle (microbiome rejuvenation extends lifespan) may be conserved; the specific microbial mediators likely differ.

### 6. No ITP validation

The NIA Interventions Testing Program does not operate in killifish. There is no multi-site, pre-specified replication infrastructure equivalent to the ITP for killifish longevity interventions. Single-lab findings should be treated as preliminary pending independent replication. #gap/needs-replication

## Comparison with other models

| Feature | *N. furzeri* | *Mus musculus* | *C. elegans* | *D. melanogaster* |
|---|---|---|---|---|
| Lifespan | 2–8 months (strain-dependent; GRZ ~2–3 months, wild-derived 6–8 months) | 2–3 years | ~3 weeks | ~2 months |
| Vertebrate? | Yes | Yes | No | No |
| Telomere biology | More human-like | Poor (long telomeres, somatic telomerase) | n/a | n/a |
| Brain aging model | Yes (limited anatomy) | Yes (best anatomy) | No | Limited |
| Genetic tools | Moderate | Excellent | Excellent | Excellent |
| ITP validated | No | Yes | No | No |
| Diapause | Yes (embryos) | No | Dauer (larval) | No |
| Husbandry cost | Low-moderate | Moderate | Very low | Low |

See [[caenorhabditis-elegans]], [[drosophila-melanogaster]], and [[mus-musculus]] for the other model organisms' pages.

## Key aging interventions tested in killifish

| Intervention | Result | Reference |
|---|---|---|
| Resveratrol (dietary) | +33% median, +27% max lifespan at 120 µg/g; +56% median, +59% max at 600 µg/g (GRZ strain; p<0.001 log-rank) | Valenzano 2006 [^valenzano2006] |
| Dietary restriction (every-other-day) | GRZ: +13% median lifespan (p=0.005); MZM-04/10P: max lifespan extended (p=0.02), no median effect; reduced lipofuscin + neurodegeneration in both strains | Terzibasi 2009 [^terzibasi2009] |
| Young gut microbiome transfer | +37% median lifespan vs untreated controls (p=4.04×10⁻⁹); +41% vs same-age microbiota controls; preserved microbiome diversity and locomotor activity | Smith 2017 [^smith2017] |

Additional pharmacological screens are ongoing; killifish is increasingly used as a rapid vertebrate filter before committing to mouse lifespan studies. #gap/needs-replication

## Limitations and gaps

- **Telomere biology (in vitro vs in vivo discordance)**: cultured killifish cells maintain telomerase and do not senesce [^graf2013], while organismal tissues show telomere shortening — mechanism of this discordance is unknown. #gap/no-mechanism
- **Diapause mechanism**: molecular circuitry governing diapause entry/exit is incompletely characterized; connections to canonical aging pathways are inferred, not established. #gap/no-mechanism
- **Drug metabolism**: killifish CYP450 repertoire is uncharacterized relative to human; pharmacological dose-response cannot be translated to mammals without separate PK studies. #gap/unsourced
- **Microbiome mediators**: specific microbial species/metabolites responsible for Smith 2017 lifespan extension are not identified. #gap/no-mechanism
- **Brain aging anatomy**: absence of cortex and hippocampus limits direct translational inference to human dementia. Intermediate mammalian model replication required. #gap/needs-human-replication
- **Resveratrol replication**: Valenzano 2006 resveratrol result has not been independently replicated in killifish or confirmed mechanistically. #gap/needs-replication
- **No ITP-equivalent**: no multi-site pre-specified replication infrastructure for killifish longevity interventions. All longevity results should be considered preliminary until independently replicated. #gap/needs-replication

## See also

- [[_extrapolation-guide]] — rubric for fish→mammal→human extrapolation
- [[hypotheses/translation-failure-of-aging-interventions]] — Mode B synthesis on systematic effect-size attenuation across model-organism→human
- [[mus-musculus]] — dominant vertebrate aging model; ITP-validated; longer timeline
- [[caenorhabditis-elegans]] — invertebrate; excellent genetic tools; very short lifespan
- [[drosophila-melanogaster]] — invertebrate; genetic screens; 2-month lifespan
- [[telomere-attrition]] — telomere biology; killifish noted as more human-like than standard mouse
- [[cellular-senescence]] — senescence accumulation in aged killifish tissues
- [[dysbiosis]] — gut microbiome aging; Smith 2017 killifish FMT result
- [[autophagy]] — autophagic flux decline with age; conserved in killifish
- [[mitochondrial-dysfunction]] — mitochondrial aging; conserved in killifish
- [[caloric-restriction]] — dietary restriction extends killifish lifespan; Terzibasi 2009
- [[mtor]] — central longevity pathway; conserved in killifish
- [[diapause]] — embryonic developmental arrest; killifish-specific biology (#stub — no page yet)
