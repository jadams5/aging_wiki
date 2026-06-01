---
type: model-organism
species-name: Macaca fascicularis
common-name: crab-eating macaque
aliases: [cynomolgus monkey, long-tailed macaque, cynomolgus macaque]
ncbi-taxonomy: 9541
typical-lifespan: "20–30 years (colony); maximum 39 years (captivity; AnAge)"
lifespan-ratio-to-human: "~2–3x shorter than human maximum; ~10x longer than mouse"
genome-similarity-to-human: "~93–99% protein-coding gene identity for characterized orthologs (drug-metabolizing enzymes, individual gene families); whole-genome one-to-one ortholog figure not verified — #gap/needs-canonical-id"
genome-size-mb: 3060
itp-validated: no
key-strengths: [primate-physiology, translational-NHP-model, conserved-transcriptomic-ageing-signature, longitudinal-multi-tissue-sampling, drug-PK-similarity-to-human, regulatory-acceptance-as-preclinical-model]
key-divergences: [cost-and-ethics-constraints, slow-generation-time, limited-transgenic-toolkit, colony-size-constraints, macaque-immune-biology-differs-from-human-in-some-axes]
literature-checked-through: 2026-05-29
verified: true
verified-date: 2026-05-29
verified-by: claude
verified-scope: "NCBI taxonomy ID, AnAge lifespan/longevity-quotient/body-mass, T2T-MFA8v1.1 genome size, and Uno 2019/2020 per-family identity figures verified against primary sources. Zhang 2023 Protein&Cell cardiac/FOXP1 claims verified against full PDF (PMC OA). Tyshkovskiy 2026 claims cross-checked against verified studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks (not re-read). Yang 2024 Cell (metformin), Sun 2025 Nature Aging (cochlear), and Takebayashi 2026 Exp Anim (AMH) are closed-access or author-triage-only — claims from those papers not independently verified against full text; tagged #gap/no-fulltext-access where applicable. Whole-genome human-ortholog % gap correctly characterized as unverified. Supersession check not required for model-organism type per CLAUDE.md."
---

> Partially verified 2026-05-29 by claude. Canonical identity fields (NCBI taxonomy, AnAge lifespan, genome size), Uno 2019/2020 enzyme-identity figures, and Zhang 2023 cardiac/FOXP1 claims have been verified. Tyshkovskiy 2026 claims cross-checked against the verified study page. Yang 2024 (metformin), Sun 2025 (cochlear), and Takebayashi 2026 (AMH) are closed-access — quantitative claims from those papers carry #gap/no-fulltext-access. Whole-genome human-ortholog % is correctly characterized as unverified per body text.

# *Macaca fascicularis* — crab-eating macaque

The crab-eating macaque (also called the cynomolgus monkey or long-tailed macaque) is the **primary non-human primate (NHP) model for translational aging research** and drug development. Its close phylogenetic proximity to humans, shared organ-system architecture, and primate immune biology make it the most powerful available bridge between rodent mechanistic data and human clinical translation. A maximum recorded lifespan of 39 years in captivity (AnAge) [^anage] is both long enough to study meaningful aging trajectories and short enough to enable longitudinal multi-decade studies. The species achieved a central role in the multi-species aging transcriptomics literature in 2026 when Tyshkovskiy et al. demonstrated that the transcriptomic ageing signature is conserved from rodents through macaque to humans — and that a macaque-trained transcriptomic mortality clock reaches Pearson r=0.91, R²=0.84, comparable in predictive power to second-generation DNA-methylation clocks [^tyshkovskiy2026].

## Identity and resources

| Field | Value |
|---|---|
| Species | *Macaca fascicularis* (Raffles, 1821) |
| NCBI Taxonomy ID | 9541 |
| Common names | crab-eating macaque, cynomolgus monkey, long-tailed macaque |
| AnAge maximum lifespan | 39 years (captivity) |
| Adult body mass | ~6.4 kg (adult average) |
| Longevity quotient | 209% of allometric prediction (above expected for body size) [^anage] |
| Genome assembly | T2T-MFA8v1.1 (Shanghai Jiao Tong Univ, 2024; telomere-to-telomere) |
| Genome size | ~3,060 Mb (T2T assembly); ~2,906 Mb (Macaca_fascicularis_6.0) |
| Key research colonies | ONPRC, CNPRC, TNPRC, WPRC (US National Primate Research Centers); commercial breeders (Mauritius, Cambodia, China) |
| Regulatory acceptance | FDA- and EMA-recognized preclinical species for toxicology and PK/PD |

[^anage]: AnAge database entry for *Macaca fascicularis*, HAGR (genomics.senescence.info/species/); maximum recorded lifespan 39 years (one wild-born male in captivity); longevity quotient 209% above allometric prediction.

## Role in aging transcriptomics — Tyshkovskiy 2026 (anchor study)

The most important recent contribution of the crab-eating macaque to aging biology is as the **primate arm of the Tyshkovskiy et al. 2026 (*Nature*) multi-species transcriptomic clock study** [^tyshkovskiy2026]. This study assembled >11,000 transcriptomes from mouse, rat, crab-eating macaque, and human — integrating the macaque as a critical phylogenetic bridge between short-lived rodents and humans.

**Macaque-specific contributions:**

- **2,623 crab-eating macaque transcriptomes** from >30 tissues sourced from dataset GSA CRA012195 — the largest multi-tissue macaque transcriptomic resource integrated into a cross-species aging analysis.
- The **macaque mortality clock** (trained on multi-species data, tested on macaque-only held-out data) reached **Pearson r=0.91, R²=0.84** — demonstrating that mortality-associated transcriptomic states are reproducible within this species.
- The **multi-species chronological clock** — trained across all 4 species — reached **r=0.952 in leave-one-fold-out cross-validation**, comparable to the pan-mammalian DNA-methylation clock (r=0.953). The macaque data was essential to establishing this cross-species generalizability.

**Cross-species conservation of ageing genes:**

Gene- and pathway-level ageing signatures were conserved from rodents through macaque to human. Key universally up-regulated genes with ageing/mortality (and down-regulated with maximum lifespan): **Gpnmb** ([[gpnmb]]), **Vsig4**, **Cdkn1a**/p21 ([[p21]]), **Eda2r**, **S100a6/8/9**, **Lgals3**/galectin-3 ([[lgals3]]), **Casp1**. Key universally down-regulated with ageing: **Nrep**, **Col1a1**, **Col3a1** (ECM/regeneration markers), **Sparc**.

The conservation of this signature from rodents → macaque → humans provides strong cross-species validation that the transcriptomic hallmarks of ageing are not rodent-specific artefacts. The crab-eating macaque functions as a **phylogenetic bridge species**: if a signature holds in both rodent and macaque, the prior probability that it will hold in humans is substantially higher than rodent-only evidence alone.

| Dimension | Status |
|---|---|
| Transcriptomic ageing signature conserved from rodent? | yes — gene- and pathway-level conservation confirmed (Tyshkovskiy 2026) |
| Mortality clock translatable to macaque? | yes — r=0.91, R²=0.84 in macaque test set |
| Cross-species clock including macaque translates to human? | yes — r=0.952 multi-species; Framingham + UK Biobank validation |

See [[biomarkers/transcriptomic-clock-tage]] for full tAge clock methodology and performance metrics.

[^tyshkovskiy2026]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · doi:10.1038/s41586-026-10542-3 · Tyshkovskiy A et al. / Gladyshev VN lab · *Nature* 2026 · n=11,165 transcriptomes (3,876 mouse + 663 rat + 2,623 crab-eating macaque + 4,003 human); macaque arm = GSA CRA012195, >30 tissues · meta-analysis + new in-vivo RNA-seq · macaque mortality clock: r=0.91, R²=0.84; multi-species chronological clock: r=0.952 · model: 4-species (mouse/rat/macaque/human)

## Metformin aging study (Yang et al. 2024)

A landmark 40-month primate study (Yang et al. 2024, *Cell*) demonstrated that **metformin decelerates multi-dimensional biological aging in adult male cynomolgus monkeys** [^yang2024]. Using transcriptomic, DNA methylomic, plasma proteomic, and metabolomic clocks built specifically from macaque data, the study observed a **~6-year regression in brain aging** as measured by the transcriptomic/methylomic clocks. Neuroprotective benefits were partially mediated through Nrf2 activation (anti-oxidative transcription factor). This is a rare positive NHP intervention result and strengthens the translational case for metformin as a geroprotector — see [[metformin]] for the full cross-species evidence picture.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (Nrf2, AMPK, mTOR; metformin targets are human-conserved) |
| Phenotype conserved in humans? | partial — similar multi-omic clock constructs available in humans; brain aging metric is macaque-specific |
| Replicated in humans? | in-progress — TAME trial (human); macaque data bolsters rationale |

[^yang2024]: doi:10.1016/j.cell.2024.08.021 · Yang Y, Lu X, Liu N, Ma S, Zhang H et al. · *Cell* 2024; 187(22):6358-6378 · in-vivo · n=adult male cynomolgus monkeys; 40-month treatment · randomized · model: *M. fascicularis* · metformin decelerated multi-dimensional biological aging including ~6-year brain aging regression; Nrf2 mediation · 136 citations (FWCI 78.1, 100th percentile) · archive: closed-access (not_oa)

## Cardiac and cochlear aging — single-cell transcriptomic studies

**Cardiac aging (Zhang et al. 2023, *Protein & Cell*):** Single-nucleus RNA-seq of aged cynomolgus monkey ventricles identified **FOXP1** as a key gatekeeper transcription factor downregulated in aged cardiomyocytes [^zhang2023cardiac]. Aged cardiomyocytes showed dramatic cell-number loss and profound transcriptional fluctuation. FOXP1 deficiency reproduced hypertrophic and senescent phenotypes in human embryonic stem cell-derived cardiomyocytes (hESC-CMs) — a direct NHP-to-human phenotype bridge.

**Cochlear aging (Sun et al. 2025, *Nature Aging*):** Single-cell profiling identified **SLC35F1 deficiency** in hair cells as a signature of primate cochlear aging [^sun2025]. Long-term metformin treatment delayed cochlear aging in primates. The conserved NHP-to-human cochlear aging signature strengthens the case for macaque as a model for age-related hearing loss.

These studies illustrate the macaque's unique value for **single-cell resolution aging biology in tissues that are inaccessible or ethically constrained in humans** — particularly heart and inner ear.

[^zhang2023cardiac]: doi:10.1093/procel/pwac038 · Zhang Y, Zheng Y, Wang S et al. · *Protein & Cell* 2023; 14(4):279-293 · in-vivo + in-vitro · model: aged *M. fascicularis* LV (3 young + 3 aged male monkeys, 8/group for phenotypic assays); snRNA-seq 35,612 nuclei; FOXP1 as CM gatekeeper; FOXP1 KD in hESC-derived cardiomyocytes; archive: diamond OA (PDF downloaded)
[^sun2025]: doi:10.1038/s43587-025-00896-0 · Sun G, Fu X, Zheng Y et al. · *Nature Aging* 2025; 5(9):1862-1879 · in-vivo · model: *M. fascicularis* cochlea; single-cell profiling; SLC35F1 deficiency as aging signature; metformin delays cochlear aging · archive: closed-access

## Genome biology and conservation of aging pathways

The macaque genome is ~3,060 Mb (T2T assembly), slightly larger than the rodent genomes (~2.7–2.9 Gb). Individual gene families characterized to date show **93–99% protein-coding sequence identity to human orthologs** — substantially higher than rodent (~85–90%) [^uno2019][^uno2020]. A whole-genome one-to-one ortholog percentage comparable to the oft-cited rat (~90%) or mouse (~85%) figures has not been verified from a primary source for this page; treat the per-family figures as a lower bound on conservation. #gap/needs-canonical-id

All major mammalian aging-relevant pathways are functionally conserved in macaque:

- **[[mtor]] signaling** — mTORC1/2 present; rapamycin-sensitive; IIS/mTOR axis orthologous.
- **[[insulin-igf1]] / IIS pathway** — IGF1, IGF1R, IRS1, AKT, FOXO conserved; macaque insulin physiology is close to human, making it valuable for metabolic aging studies.
- **[[ampk]] pathway** — present and energy-sensing function conserved; AMPK-mediated transcriptional responses are active in macaque aging (Tyshkovskiy 2026 metabolic modules).
- **[[autophagy]]** — ATG family conserved; autophagic flux decline with age documented.
- **[[sirtuin]] pathway** — SIRT1-7 orthologous; NAD+ biology conserved.
- **[[p53-pathway]] and senescence** — TP53, CDKN1A (p21), p16/CDKN2A, RB conserved; [[p21]]/CDKN1A is among the top universally up-regulated aging genes across all 4 species in Tyshkovskiy 2026.
- **[[chronic-inflammation]] / NF-κB** — conserved; inflammaging signature confirmed in Tyshkovskiy 2026 inflammation/interferon modules.

[^uno2019]: doi:10.1016/j.bcp.2019.05.018 · Uno Y, Murayama N, Yamazaki H · *Biochem Pharmacol* 2019; 166:153-162 · in-silico · model: *M. fascicularis* vs human SULT enzymes; 95-97% sequence identity
[^uno2020]: doi:10.1016/j.dmpk.2020.05.001 · Uno Y, Yamazaki H · *Drug Metab Pharmacokinet* 2020; 35(4):397-400 · in-silico · model: *M. fascicularis* vs human UGT3A/8A enzymes; 93-99% identity

## Key strengths as an aging model

### 1. Primate physiology: best available human surrogate

The macaque shares organ-system architecture, immune biology, reproductive endocrinology, and metabolic physiology with humans far more closely than any rodent. This is decisive for:
- **Cardiovascular aging** — aortic stiffness, left ventricular remodeling, metabolic syndrome all present with human-like trajectory.
- **Neurodegeneration** — primate cerebral cortex organization; amyloid-β aggregation in aged macaques; cognitive decline detectable on NHP-adapted task batteries.
- **Reproductive and hormonal aging** — menopause-equivalent biology; anti-Müllerian hormone trajectory validated in macaque [^menstrual2024]. No rodent model has a close menopause analog.
- **Drug PK/PD** — CYP450, UGT, SULT, and transporter enzyme profiles are substantially closer to human than in rodents; macaque is the regulatory-accepted preclinical species for hepatic and metabolic PK studies.

### 2. Conserved transcriptomic ageing signature

Tyshkovskiy 2026 establishes that the macaque is a **validated transcriptomic bridge species** — its ageing gene signature overlaps quantitatively with both rodent and human signatures, enabling cross-species clock construction and intervention-effect extrapolation with measurable confidence [^tyshkovskiy2026].

### 3. Longitudinal multi-tissue data generation

Unlike humans, macaque studies can employ serial tissue biopsies, controlled diet regimens, and standardized housing — enabling the kind of controlled longitudinal multi-tissue data (GSA CRA012195: 2,623 transcriptomes, >30 tissues) that is not feasible in human cohorts.

### 4. Regulatory pathway leverage

Positive NHP aging data in macaque is recognized by FDA and EMA as the strongest preclinical evidence tier. For geroprotectors (e.g., metformin, senolytics, partial reprogramming), NHP studies can directly inform IND submissions and Phase 1 trial design in ways rodent data cannot.

[^menstrual2024]: doi:10.1538/expanim.25-0098 · Takebayashi A, Tsuji S, Sankai T et al. · *Exp Anim* 2026; 75(2):234-240 · PMID 41423208 · observational · model: *M. fascicularis* (n=21 menarche; n=22 menopause tracking; n=74 for AMH lifespan profile) · menopause at mean 27.0±2.5 yr; AMH declines with age across lifespan; ovarian reserve trajectory similar to humans

## Key divergences from human (and from rodents)

### 1. Cost and ethical constraints

Macaque studies are approximately **50–100x more expensive per-animal than mouse studies**, with strict IACUC/AAALAC oversight requirements. Colony sizes are typically 10–50 animals per arm, vs hundreds in rodent studies. This limits statistical power, reduces replication, and means the macaque is reserved for near-translation experiments rather than broad mechanistic screens.

### 2. Slow generation time

Sexual maturity at ~3.4 years (females) / ~4.2 years (males), gestation 165 days, litter size 1. Generation time of ~5–6 years makes transgenic colony establishment impractical. True CRISPR knockout/knock-in macaque lines exist (generated by pronuclear injection in China), but the ecosystem of established transgenic lines is minimal compared to mouse. Founder effects and colony management constraints are significant.

### 3. Limited transgenic toolkit

Unlike mice, there are no inducible Cre driver lines, reporter strains, or established conditional knockout macaque models for most aging genes. Mechanistic interrogation requiring genetic manipulation is essentially infeasible except at great cost via de novo CRISPR work. This means the macaque is primarily a **phenotypic and pharmacological model**, not a genetic-mechanistic model. #gap/needs-replication

### 4. Immune biology differences from humans in specific axes

Macaque NK receptor biology (KIR gene family), certain MHC allele distributions, and microbiome composition differ from humans, particularly in colony-housed vs. wild animals. Immunosenescence trajectories are broadly conserved but not identical. Macaque data from pathogen-exposure or vaccine studies may not translate directly to human immune-aging contexts.

### 5. No NIA Interventions Testing Program equivalent

The NIA ITP operates exclusively in UM-HET3 mice, with a secondary arm in rats. No equivalent multi-site, pre-specified, genetically diverse macaque longevity-intervention program exists. Macaque intervention studies are typically single-site, small-cohort, and not independently replicated. #gap/needs-replication

## Conserved aging programs most informative for human extrapolation

| Hallmark / process | Evidence in macaque | Human extrapolation confidence |
|---|---|---|
| Transcriptomic ageing signature ([[chronic-inflammation]], [[epigenetic-alterations]]) | Tyshkovskiy 2026; 2,623 transcriptomes; multi-tissue [^tyshkovskiy2026] | High — signature directly overlaps human data |
| Metabolic aging / mTOR-AMPK axis | Yang 2024 (metformin multi-omic clocks) [^yang2024] | High — pathway conservation + macaque-metabolic similarity |
| Cardiac aging / cardiomyocyte transcriptomics | Zhang 2022/2023 snRNA-seq; FOXP1 [^zhang2023cardiac] | High for cardiomyocyte biology; human iPSC validation shown |
| Cochlear aging / hair cell biology | Sun 2025 single-cell; SLC35F1 [^sun2025] | Moderate — functional validation in mouse; human confirmation needed |
| Neurodegeneration / Alzheimer's | Aβ accumulation in aged macaques (general NHP literature; not independently cited here) | Moderate — macaque amyloid without human-equivalent frank AD #gap/unsourced |
| Reproductive aging / menopause | AMH trajectory; menstrual cycle patterns [^menstrual2024] | High — closest non-human model for human menopause |
| Telomere biology | Somatic telomerase expressed at lower levels than rodents; telomere attrition similar to human (not verified against primary source) | Moderate — better than rodents; direct comparison studies needed #gap/needs-replication |

## Limitations and gaps

- **Whole-genome human ortholog percentage unverified.** The canonical whole-genome similarity figure (often cited as ~93% for NHP broadly) could not be traced to a primary sequencing paper with explicit one-to-one ortholog statistics for *M. fascicularis* specifically. Tagged `#gap/needs-canonical-id`. Per-family figures (93–99%) are verified but not equivalent to a whole-genome summary.
- **Transgenic toolkit absent.** Unlike mouse, no established conditional-knockout or knock-in macaque lines exist for aging-biology targets. Mechanistic aging genetics in this species requires de novo CRISPR generation at prohibitive cost. #gap/needs-replication
- **No multi-site replication infrastructure.** Intervention studies are single-site and small-n. Yang 2024 (metformin) has not been independently replicated. #gap/needs-replication
- **Macaque lifespan data confounded by colony conditions.** Maximum recorded lifespan of 39 years is from captivity; wild lifespans are substantially shorter due to predation and disease. Colony-housing effects on the microbiome, stress hormones, and diet confound aging-trajectory data.
- **Macaque transcriptomic data tissue breadth.** The Tyshkovskiy 2026 macaque arm (2,623 transcriptomes, >30 tissues) is large relative to prior macaque aging datasets but remains tissue-imbalanced relative to the rodent meta-dataset (3,876 mouse + 663 rat samples, 96 sources). Human tissue coverage in that study is also limited (blood, brain, skin, muscle). #gap/needs-replication
- **Neurodegeneration phenotype incompleteness.** Aged macaques accumulate amyloid-β but typically do not develop frank Alzheimer's pathology (neurofibrillary tau tangles, widespread neuronal loss) equivalent to human AD. The macaque is a partial but not complete AD model. #gap/no-mechanism

## See also

- [[mus-musculus]] — primary rodent comparator; ITP infrastructure; ~85% ortholog conservation
- [[rattus-norvegicus]] — secondary rodent; larger body; ~90% ortholog conservation
- [[heterocephalus-glaber]] — extreme-longevity rodent; negligible senescence comparator
- [[homo-sapiens]] — the translational target; macaque is closest preclinical surrogate
- [[_extrapolation-guide]] — three-dimension rubric for model→human extrapolation
- [[biomarkers/transcriptomic-clock-tage]] — tAge clock; macaque as one of four training/test species
- [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] — anchor paper; multi-species transcriptomic aging hallmarks
- [[mtor]] — conserved in macaque; rapamycin sensitivity retained
- [[ampk]] — conserved; Yang 2024 metformin acts via AMPK-Nrf2 axis
- [[p21]] — `CDKN1A`; top universal macaque/human ageing gene (Tyshkovskiy 2026)
- [[gpnmb]] — universally up-regulated with ageing across macaque and human (Tyshkovskiy 2026)
- [[lgals3]] — universally up-regulated; plasma protein predicts human mortality in UK Biobank
- [[chronic-inflammation]] — inflammation/interferon modules conserved in macaque tAge
- [[cellular-senescence]] — p21/p16/CDKN2A senescence biology conserved
- [[epigenetic-alterations]] — DNA methylation aging conserved; macaque methylation clocks available
- [[metformin]] — Yang 2024 macaque data is strongest NHP geroprotector evidence for this compound
- [[hypotheses/translation-failure-of-aging-interventions]] — macaque is the primary species for bridging rodent-human translation gap
