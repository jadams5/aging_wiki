---
type: biomarker
aliases: [tAge, transcriptomic clock, transcriptomic age, transcriptomic mortality clock, gene-expression clock, RNA clock, multi-species transcriptomic clock, module-specific clock]
modality: transcriptomic
unit: composite-score
training-cohort: "Tyshkovskiy 2026: aggregated multi-species meta-dataset — 11,165 transcriptomes across 4 mammals (3,876 mouse + 663 rat + 2,623 crab-eating macaque + 4,003 human), >25 tissues, 96 rodent data sources, 79 interventions; chronological clocks trained on 3,575 untreated control rodent samples"
n-cpgs-or-features: "elastic-net sparse (hundreds of genes per composite clock); all-module gene panel 2,141 genes; full-transcriptome input 18,592 genes (rodent) / 12,897 1:1 orthologs (multi-species)"
model-architecture: elastic-net
training-target: mortality
calibration-tissues: ["[[blood]]", "multi-tissue (>25 tissues incl. liver, kidney, brain, skeletal muscle, skin)"]
test-retest-icc:
human-evidence-level: strong
mendelian-randomization: not-applicable
intervention-responsive: partial
literature-checked-through: 2026-05-29
verified: true
verified-date: 2026-05-29
verified-by: claude
verified-scope: "Anchored on the primary source [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] (Nature 2026), whose main text + Methods were read end-to-end from the user-provided PDF and cross-checked. Performance metrics, gene lists, and module counts verified against Figs 1–6 + Methods. Comparison to prior transcriptomic clocks (Peters 2015, RNAAgeCalc, Buckley 2023) and the pan-mammalian DNAm clock (Lu 2023, r=0.953) taken from this paper's reported benchmarks, not independently re-verified against those primary sources. No PubChem/UniProt fields applicable to a biomarker page."
---

# Transcriptomic clock (tAge)

A **transcriptomic clock** estimates biological age from a tissue's (or cell's, or pseudobulk metacell's) **gene-expression profile**. Unlike DNA-methylation clocks (which read a slow, largely stochastic epigenetic mark) transcriptomic clocks read the **dynamic functional state** of a sample, making them sensitive to acute damage and rejuvenation that DNAm misses. The defining work is **Tyshkovskiy et al. 2026** (Gladyshev lab) [^tyshkovskiy2026], which built interpretable, mortality-trained, **multi-species** transcriptomic clocks and is the canonical reference for this page.

This page covers the **tAge clock family** as a unit (they share training data, software and a single primary reference), rather than splitting per sub-clock.

## The clock family

| Clock | Target | What it captures |
|---|---|---|
| **Chronological** tAge | calendar age (scaled to species max lifespan) | age per se; **largely insensitive to lifespan-extending interventions** |
| **Normalized-age** tAge | chronological age ÷ expected max (99.9th-pct) lifespan | age *and* intervention effects |
| **Mortality** tAge | expected Gompertz log-hazard rate | the flagship: ageing + intervention + damage burden; best lifespan-model discriminator |
| **Maximum-lifespan** ("lifespan") clock | species/strain max lifespan | longevity-regulating expression, partly age-independent |
| **Module-specific** clocks (23 rodent / 14 multi-species) | per WGCNA module | *which subsystem* is ageing — inflammation, interferon, OXPHOS, chromatin, ECM/EMT, … |

The **mortality clock is the key conceptual advance.** Chronological clocks barely move under rapamycin/CR-type interventions, so they cannot grade an intervention's benefit. The mortality clock — trained on cohort-specific Gompertz expected-hazard rather than calendar age — integrates ageing-associated *and* intervention-modulating changes, and **discriminates short- vs long-lived models better than even a dedicated lifespan clock**. This is the transcriptomic analogue of the leap from first-generation DNAm clocks ([[horvath-clock-2013]], [[hannum-clock-2013]]) to mortality-trained second-generation clocks ([[grimage-2019]], [[phenoage-2018]], [[dunedinpace-2022]]).

## How it is built

- **Models:** elastic-net (sparse, interpretable gene coefficients) and Bayesian-ridge (probabilistic, uncertainty-quantified — useful for small samples and single-cell). Elastic-net and BR outperformed SVM, random forest, kNN and LightGBM.
- **Relative ("reference-centred") clocks:** each sample's expression is centred against a randomly chosen age/sex/strain-matched control reference group within the same dataset+tissue, then the clock predicts the *age difference*. This within-dataset batch correction lifted rodent multi-tissue accuracy to median R²=0.92 / r=0.96 and was robust to reference-group choice (LOFO r=0.939–0.956).
- **Mortality target:** per-cohort/strain/sex/intervention Gompertz fits (μ(t)=Ae^{rt}) give each sample an expected log-hazard; normalized age = chronological age ÷ Gompertz-simulated 99.9th-percentile max lifespan.
- **Species scaling:** chronological age divided by species maximum recorded lifespan (4 / 3.8 / 39 / 122 yr for mouse / rat / crab-eating macaque / human) to make a unified multi-species clock.
- **Module clocks:** [[methods/wgcna|WGCNA]] co-expression modules (28 rodent / 15 multi-species) → elastic-net clock per module; the composite clock decomposes additively into per-module contributions (tAge_composite = C₀ + Σ tAge_module).
- **Single-cell application:** bulk-trained clocks are applied to [[methods/single-cell-rna-seq|scRNA-seq / snRNA-seq]] data via **metacell aggregation** (pooling ~100+ cells / ≥200k reads), which bridges single-cell sparsity to clock input — used for the Tabula Muris Senis and Klotho-KO analyses.

## Performance

| Setting | Metric |
|---|---|
| Rodent chronological (multi-tissue) | R²=0.88, r=0.94 (held-out) |
| Rodent relative chronological | median R²=0.92, r=0.96 |
| **Multi-species chronological** (LOFO, 4 species) | **r=0.952** — matches pan-mammalian DNAm clock (r=0.953) [^panmammal] |
| Multi-species mortality clock | r=0.91 (macaque) / 0.94 (human) / 0.96 (mouse) / 0.92 (rat) |
| Human blood time-to-death (Framingham, RNA-seq n=3,698) | comparable to 2nd-gen DNAm clocks (DunedinPACE, YingDamAge, PhenoAge); beats 1st-gen transcriptomic chronological clocks (Peters, RNAAgeCalc) |

## What raises and lowers tAge (validation panel)

**Raises mortality tAge (pro-ageing/damage):**
- Replicative senescence in human fibroblasts + WI-38 (tAge rises with passage, *precedes* phenotype; `CDKN1A` a top driver)
- γ-irradiation (20 Gy) in mouse + naked-mole-rat fibroblasts; oligomycin and 2-deoxyglucose (metabolic poisons)
- Chronic disease (AD/5xFAD, CKD, stroke, NASH, diabetic nephropathy) — via inflammatory modules
- `Klotho`-KO progeria — via energy-metabolism + NRF2 modules ([[klotho]])
- LPS neuroinflammation

**Lowers tAge (rejuvenation):**
- hTERT immortalization (abolishes the senescence-associated tAge rise)
- iPSC/partial reprogramming ([[in-vivo-partial-reprogramming-therapy]]) — strongest in EMT/MET module
- Heterochronic parabiosis in old mice (top driver `Nrep`; `Cdkn1a`/`Vcam1` down)
- Caloric restriction ([[caloric-restriction]]) — via metabolic modules
- Early embryogenesis — U-shaped trajectory, minimum ("ground zero") ~E10 ([[information-theory-of-aging]])

## Transcriptomic vs DNA-methylation clocks (complementary modalities)

| | DNAm clocks | Transcriptomic clocks |
|---|---|---|
| Reads | stable epigenetic mark | dynamic functional state |
| γ-irradiation / hTERT | **no change** | tAge moves |
| Mechanistic interpretability | low (CpG → gene unclear) | **high** (genes annotated, module-resolved) |
| Single-cell application | limited | works (Bayesian-ridge on metacells) |

In Framingham, transcriptomic and DNAm clock outputs were **positively correlated** after age/sex adjustment, **strongest between the chromatin-modification transcriptomic module clock and epigenetic clocks** — a candidate mechanistic bridge between the two modalities. The two are best read as complementary: DNAm = long-term stochastic drift, transcriptome = current damage/repair state.

## Top contributing genes

Up with mortality tAge: [[p21|CDKN1A]], [[gpnmb|GPNMB]], [[lgals3|LGALS3]], [[cst7|Cst7]], [[eda2r|Eda2r]], [[vsig4|Vsig4]], [[s100a8-s100a9|S100a8]], `S100a6`, [[caspase-1|Casp1]]. Down: [[sparc|Sparc]], [[nrep|Nrep]], [[col1a1|Col1a1]], [[col3a1|Col3a1]]. See [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] for the full panel and module assignments.

## Resources

- **TACO** (Transcriptomic Age Calculator Online): https://app.gladyshevlab.org/TACO/ — upload expression data, choose organ-specific / multi-tissue / multi-species clocks, compare groups.
- **`tAge`** R package; trained weights on Zenodo (doi:10.5281/zenodo.18763485).

## Gaps & caveats

- Mortality-clock training inherits the quality of per-cohort Gompertz survival fits.
- Human intervention-responsiveness untested in an RCT — the open analogue of CALERIE-2/DunedinPACE. #gap/needs-human-replication
- Earlier transcriptomic clocks (Peters 2015 blood, RNAAgeCalc, Buckley 2023 brain) were chronological-only and human-restricted; this family is the first multi-species, mortality-trained, module-decomposed transcriptomic clock. Those predecessors are not yet separate wiki pages. #gap/needs-replication

## Related pages

- Source: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]]
- DNAm clocks: [[horvath-clock-2013]] · [[hannum-clock-2013]] · [[phenoage-2018]] · [[grimage-2019]] · [[dunedinpace-2022]]
- Proteomic clock: [[lehallier-proteomic-clock-2019]]
- Driver genes: [[gpnmb]] · [[lgals3]] · [[p21]]

[^tyshkovskiy2026]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · n=11,165 transcriptomes, 4 species · meta-analysis + new in-vivo RNA-seq · model: mouse/rat/macaque/human
[^panmammal]: Benchmark = Lu et al. 2023 pan-mammalian DNA-methylation clock (cross-species r=0.953); the multi-species transcriptomic chronological clock reached r=0.952. · model: cross-species
