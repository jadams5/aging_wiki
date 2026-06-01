---
type: protein
aliases: [Insulin-like growth factor 1, somatomedin C, IGF1, IGF-I]
uniprot: P05019
ncbi-gene: 3479
hgnc: 5464
genage-id: 28
mouse-ortholog: Igf1
ensembl: ENSG00000017427
druggability-tier: 1  # AB:Advanced Clinical (anti-IGF1 antibodies in trials) + SM:Med-Quality Pocket (Open Targets, IGF1)
caused-by: []
causes: []
key-domains: [B-domain, C-domain, A-domain, D-domain, E-peptide]
key-ptms: [three-disulfide-bonds]
pathways: ["[[insulin-igf1]]", "[[pi3k-akt-pathway]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
sens-categories: []
known-interactors: ["[[igf1r]]", "[[insr]]", "[[igfbp3]]", "[[als]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Holzenberger 2003 and Suh 2008 verified against local PDFs; Guevara-Aguirre 2011 verified against PMC3357623 full text (web); Liu 1993 (not_oa) verified against PubMed abstract + Crossref metadata — full-text not available; Rinderknecht 1978 structural claims cross-confirmed via UniProt P05019 (full PDF not retrievable: download failed)"
---

# IGF-1 (Insulin-like Growth Factor 1)

The primary circulating mediator of growth hormone action — a 70-amino-acid peptide secreted mainly by the liver that activates [[igf1r|IGF-1 receptor]] (IGF1R) with high affinity (Kd ~0.1 nM) and drives anabolism, cell survival, and postnatal growth. Within the [[insulin-igf1|IIS pathway]], IGF-1 is the upstream ligand whose circulating level declines with age. The aging story, however, is paradoxical: human centenarians — far from having low IGF-1 — show **elevated** circulating IGF-1 as a compensatory response to partial loss-of-function IGF1R variants [^suh2008]. IGF-1 is central to the somatotropic axis, the evolutionary "brake" on aging whose reduction extends lifespan in diverse organisms.

## Identity

- **UniProt:** P05019 (IGF1_HUMAN) — Swiss-Prot reviewed
- **NCBI Gene:** 3479
- **HGNC symbol:** IGF1
- **GenAge-human ID:** 28
- **Mouse ortholog:** Igf1 (one-to-one; ~95% sequence identity at mature peptide level)

## Precursor structure and processing

Human IGF-1 is translated as a 195-amino-acid precursor (class I / isoform IGF-IB) with the following domain layout:

| Region | Residues | Function |
|---|---|---|
| Signal peptide | 1–21 | Directs ER secretion; cleaved co-translationally |
| Propeptide (B-domain of precursor) | 22–48 | Removed during processing |
| **Mature IGF-1** | **49–118** | **The 70-aa circulating hormone** |
| E-peptide (C-terminal extension) | 119–195 | Splice-variant-specific; retained in some isoforms |

The **mature 70-amino-acid form** (UniProt residues 49–118; MW ~7.6 kDa) contains the four characteristic domains of the insulin superfamily: **B–C–A–D**, stabilised by **three disulfide bonds** (Cys54–Cys96, Cys66–Cys109, Cys95–Cys100 in precursor numbering). This folded structure places IGF-1 structurally within the insulin family — the B- and A-domains are topologically equivalent to the B and A chains of insulin [^rinderknecht1978].

### Splice isoforms and E-peptides

Four splice isoforms are generated from the *IGF1* gene via alternative first and third exon usage, all sharing the identical mature 70-aa sequence but differing in signal peptide sequence (class I vs class II, reflecting different first exons) and the C-terminal E-peptide:

- **IGF-IEa** — most abundant in liver and most other tissues; 195 aa total; principal source of circulating IGF-1
- **IGF-IEb** — alternative E-peptide; expressed in liver and other tissues
- **IGF-IEc** (Mechano Growth Factor, MGF) — muscle-specific variant; transiently induced by mechanical load; may act locally without entering circulation
- **Class II isoforms** — alternative 5' exon; slightly different signal peptide

For all isoforms, the mature 70-aa processed form is identical. The E-peptide may have independent bioactivity (especially MGF/Ec), but its physiological significance remains `#gap/needs-replication`.

## The GH–IGF-1 axis

IGF-1 is the central effector of the growth hormone (GH) axis:

```
Hypothalamus
  ↓ GHRH
Anterior pituitary (somatotroph cells)
  ↓ GH (pulsatile)
Liver (primary) + extrahepatic tissues (paracrine)
  ↓ IGF-1 synthesis + secretion
IGF1R activation → PI3K–AKT–mTORC1 + RAS–MAPK
  ↓ (long-loop negative feedback)
Hypothalamus + pituitary: IGF-1 inhibits GHRH and GH release
```

Approximately 75% of circulating IGF-1 derives from hepatic secretion driven by GH receptor (GHR) signalling via JAK2–STAT5b. Extrahepatic paracrine IGF-1 (muscle, bone, brain) is largely GH-independent and acts locally [^gap/unsourced — precise tissue fraction in adults not well-quantified]. Liver-specific Igf1 knockout mice demonstrate that circulating IGF-1 contributes to postnatal growth but is not absolutely required for normal growth — extrahepatic paracrine sources partially compensate. #gap/needs-replication

## Circulating levels and binding proteins

Normal adult plasma IGF-1: ~100–300 ng/mL (varies widely by sex, age, nutritional state, and assay) [^gap/unsourced — reference range from textbook consensus; for wiki purposes, a primary range citation is needed].

### IGFBP1–6: the carrier system

In circulation, >99% of IGF-1 is bound to **insulin-like growth factor binding proteins** (IGFBPs 1–6). The predominant ternary complex:

- **IGFBP-3** (primary carrier; ~70–80% of circulating IGF-1) + **ALS** (acid-labile subunit) + IGF-1 → ~150 kDa ternary complex; half-life ~12–15 h vs ~12 min for free IGF-1
- **IGFBP-1** and **IGFBP-2** — smaller binary complexes, shorter half-life; IGFBP-1 levels are acutely regulated by insulin (suppressed postprandially)
- IGFBPs generally reduce bioavailability (buffering free IGF-1), though some (IGFBP-3, -5) can enhance local delivery in some contexts

The IGFBP system means that total serum IGF-1 assays measure mostly bound (inactive) pool; free IGF-1 assays are more mechanistically relevant but less standardised clinically.

### Age-related decline in circulating IGF-1

Serum IGF-1 peaks in adolescence (~400–700 ng/mL at Tanner stage IV/V), then declines through adulthood to ~50–150 ng/mL by age 70+. This decline tracks the age-associated reduction in pulsatile GH secretion. The fall in IGF-1 with age has been proposed to contribute to sarcopenia, bone loss, and cognitive decline — but this "IGF-1 deficiency" model of aging is complicated by the centenarian paradox described below. #gap/contradictory-evidence

**Cross-species transcriptomic confirmation.** The multi-species transcriptomic-clock meta-analysis of Tyshkovskiy et al. 2026 found `Igf1` to be **a canonical longevity regulator negatively associated with maximum lifespan both within and across species**, and observed that `Igf1` tissue expression **declines with age** [^tyshkovskiy2026]. The authors frame the decline as part of a mix of *detrimental* and *compensatory* age-related changes (contrasting, e.g., `Fmo3`, which rises with age as an mTOR/inflammation inhibitor) — consistent with the centenarian-paradox tension below rather than a simple "more IGF-1 is younger" reading.

## Receptor binding

| Receptor | Affinity | Notes |
|---|---|---|
| **IGF1R** (type I IGF receptor) | Kd ~0.1–1 nM | Primary high-affinity receptor; homodimer; activates PI3K–AKT and RAS–MAPK |
| INSR-A isoform (foetal isoform of insulin receptor) | ~5–10 nM | IGF-1 binds INSR-A with moderate affinity; primarily expressed in foetal tissues, some cancers |
| INSR-B isoform (adult insulin receptor) | >100 nM | Negligible IGF-1 binding under physiological conditions |
| INSR/IGF1R hybrid receptors | intermediate | Formed by heterodimer between one INSR and one IGF1R half-receptor; pharmacological relevance in cancer; aging relevance unclear |

The high-affinity IGF1R interaction is the dominant aging-relevant signal. See [[igf1r]] for full receptor biology.

## Role in postnatal growth: genetic evidence

The landmark mouse knockout study established that both IGF-1 and IGF-1 receptor are required for normal postnatal growth [^liu1993]:

- **Igf1-/- mice**: viable but born at ~60% of normal body size; severe postnatal growth retardation; some perinatal lethality on certain backgrounds; brain hypoplasia
- **Igf1r-/- mice**: 45% of normal birth weight; die immediately after birth (respiratory failure); more severe than Igf1-/- alone
- **Igf1-/-; Igf1r-/- double KO**: phenotype similar to Igf1r-/- alone (~45% birth weight, perinatal lethal) — confirms IGF-1 acts primarily through IGF1R, with no alternative receptor compensating significantly in the embryo; however, the **Igf2-/-; Igf1r-/-** double KO shows further exacerbation to ~30% normal size

| Genotype | Birth weight (% WT) | Postnatal viability |
|---|---|---|
| Igf1-/- | ~60% | Mostly viable; growth-retarded |
| Igf1r-/- | ~45% | Perinatal lethal |
| Igf2-/- | ~60% | Viable |
| Igf1-/-; Igf1r-/- | ~45% (same as Igf1r-/-) | Perinatal lethal |
| Igf2-/-; Igf1r-/- | ~30% | Perinatal lethal |

These data established the non-redundant in vivo roles of IGF-1 ligand and receptor; the single-gene lifespan extension experiments in mice (see below) build directly on this framework.

## IGF-1 in aging: the somatotropic axis

### Model-organism evidence: reduction extends lifespan

Reduced GH–IGF-1 signalling is among the most reproducible genetic lifespan interventions across model organisms. The primary mammalian evidence is covered in depth on [[insulin-igf1]]; key points for IGF-1 as a ligand:

- **GHR-/- mice** (Laron dwarfs): absence of GH receptor → very low circulating IGF-1 → ~25–55% lifespan extension in various backgrounds; protect against spontaneous cancer [^gap/needs-replication — specific values vary by study/background; see insulin-igf1.md for tabulated data]
- **Ames / Snell dwarf mice**: GH/PRL/TSH-deficient; near-zero circulating IGF-1; ~50% lifespan extension; but note pleiotropic hormonal changes make these impure IGF-1 experiments
- **IGF1R+/- heterozygous mice** (Holzenberger 2003): 26% overall mean lifespan extension (P<0.02, Cox's test); 33% in females (P<0.001), 15.9% in males (NS); increased oxidative stress resistance (paraquat challenge); notably, serum IGF-1 is **paradoxically elevated** in Igf1r+/- mice (males 795±64 vs 625±30 ng/mL, P<0.01; females 716±39 vs 516±14 ng/mL, P<0.001) — a compensatory response to reduced receptor availability, directly parallel to the Suh 2008 centenarian finding [^holzenberger2003]
- **IGF-1 overexpression in mice** (cardiac-specific): cardiac IGF-1 transgenic mice show ~23% longer median lifespan in some lines [^gap/needs-replication — contradicted by other OE studies; context-specific]. #gap/contradictory-evidence

The direction of effect in rodent models is predominantly: **lower GH/IGF-1 = longer lifespan**. The magnitude attenuates from invertebrates (~2× in *daf-2* worms) to mammals (~26% in IGF1R+/- mice), raising the central translation question.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — IGF-1/IGF1R/IRS1/AKT/FOXO are orthologous; same intracellular cascade |
| Phenotype conserved in humans? | partial — centenarian data (see below) is correlational; no direct lifespan test possible |
| Replicated in humans? | no (lifespan) / limited (correlational cohort studies) |

### The Laron syndrome natural experiment

Laron syndrome (autosomal recessive GHR mutations → GH insensitivity → near-zero serum IGF-1 → dwarfism) provides a human analogue of GHR-/- mice. Guevara-Aguirre et al. 2011 studied an Ecuadorian cohort of 99 GHRD subjects and 1,606 unaffected relatives as controls [^guevara2011]:

- **Cancer**: 0 cancer-related deaths among GHRD subjects over the study period (only 1 non-lethal cancer diagnosed total); cancer accounted for 20% of deaths among controls and 17% of all diseases in controls (P=0.003, exact hypergeometric test) — near-complete protection #gap/needs-replication (single cohort; n small)
- **Type 2 diabetes**: diabetes incidence near zero in Laron subjects vs ~5% in controls despite higher rates of obesity
- **Lifespan**: not significantly different overall; Laron subjects died earlier from **accidents and alcohol-related causes** — study explicitly noted this confound
- **Serum IGF-1**: ≤20 ng/mL in all GHRD subjects vs 29–310 ng/mL (mean 144) in controls (P<0.0001, no overlap); confirms GHR → IGF-1 axis

This cohort is the strongest human evidence that chronic GH/IGF-1 reduction protects against two major age-related diseases (cancer, T2D) — consistent with the rodent lifespan data but not constituting a lifespan extension per se. #gap/needs-replication (single Ecuadorian founder-effect cohort; genetics partially confounded; 70% of GHRD deaths were accidents/alcohol/convulsive disorders).

### The centenarian paradox: elevated IGF-1 with IGF1R loss-of-function

The Suh et al. 2008 centenarian study (Ashkenazi Jewish cohort; full genotyping cohort: 384 centenarians [286 female + 98 male], mean age 97.7; n=312 controls, mean age 79.5; initial mutation discovery in n=79 short-statured female centenarians + n=161 female controls) produced a counterintuitive finding [^suh2008]:

- Two heterozygous nonsynonymous missense variants in *IGF1R* — **Ala-37-Thr** and **Arg-407-His** — were enriched in female centenarians vs controls: 9/384 centenarians (2.3%) vs 1/312 controls (0.3%), P=0.02
- Immortalised lymphocytes from variant carriers showed **reduced IGF1R protein levels** and **reduced AKT phosphorylation** upon IGF-1 stimulation — confirming partial receptor loss-of-function
- **Female offspring of centenarians** (n=105; not necessarily variant carriers) had **35% higher serum IGF-1** than age-matched female controls (n=67) (P<0.01) — interpreted as a **compensatory hypersecretion** in response to partial receptor insensitivity (gender-specific: male offspring showed no difference)
- Variant carriers were also **~2.5 cm shorter** on average (162±2.8 vs 165±0.8 cm, P=0.41, NS) — height difference in carriers vs noncarriers did not reach significance, consistent with the modest partial LOF effect; the P<0.001 height result applies to female offspring of centenarians vs controls in the broader cohort comparison (Fig. 1B)

**Interpretation:** The centenarian phenotype in Suh 2008 is NOT "low IGF-1 → long life" (as the simple IIS-reduction model would predict). Instead: **reduced IGF1R sensitivity (partial LOF) → liver/pituitary respond by secreting MORE IGF-1 (compensatory GH/IGF-1 axis activation) → elevated circulating IGF-1 despite reduced downstream signalling**. This reconciles the seeming paradox: what matters for longevity is pathway *activity* (reduced AKT/FOXO inhibition at the tissue level), not the circulating IGF-1 ligand level per se. #gap/needs-replication (n=79 female centenarians; single-cohort)

**This finding has important implications for interpreting epidemiological studies** that use serum IGF-1 as a proxy for IIS pathway activity — serum IGF-1 and tissue IIS signalling can move in opposite directions.

## Pharmacology

### Mecasermin (recombinant human IGF-1)

**Mecasermin** (brand: Increlex) is FDA-approved recombinant human IGF-1 (rhIGF-1) for the treatment of **severe primary IGF-1 deficiency** (caused by GH gene deletions or GHR mutations, i.e., Laron syndrome) in children. Administered subcutaneously.

- Indication: severe primary IGF-1 deficiency (serum IGF-1 SD ≤ –3.0, normal GH secretion, exclusion of secondary causes)
- Mechanism: replaces absent endogenous IGF-1; stimulates longitudinal bone growth via IGF1R in growth plates
- Aging relevance: not used for aging; provides proof-of-concept that exogenous IGF-1 can restore pathway activity in receptor-intact tissues

**Note on supraphysiological IGF-1 for aging:** There is no approved or well-supported use of IGF-1 supplementation for anti-aging. Elevated IGF-1 correlates with cancer risk in epidemiological studies (breast, prostate, colorectal) — the somatotropic axis is anti-aging in the direction of *reduction*, not augmentation. GH replacement in elderly (supraphysiological) has shown adverse effects (gynecomastia, glucose intolerance, arthralgia) without clear longevity benefit. #gap/long-term-unknown

### Therapeutic strategies targeting IGF-1 for aging

| Approach | Rationale | Status |
|---|---|---|
| Dietary protein restriction | Reduces circulating IGF-1 in humans (unlike CR alone); mechanism parallels reduced IIS | Observational; no lifespan trial |
| GH secretagogue withdrawal / somatostatin analogues | Reduce GH → reduced liver IGF-1 | Used clinically for acromegaly; not tested for longevity |
| IGF1R antagonists (e.g., ganitumab, teprotumumab) | Direct receptor blockade; reduces IGF-1 signalling | Oncology indications; no aging trials |
| Indirect via mTOR (rapamycin) | Inhibits convergent downstream mTORC1 arm | See [[mtor]]; ITP-validated for lifespan |

**Aging-context tier-1 rationale.** Mecasermin (rhIGF-1, Increlex) is FDA-approved for severe primary IGF-1 deficiency in children (Laron syndrome / GH-resistance), and teprotumumab (anti-IGF1R mAb) is FDA-approved for thyroid eye disease (2020) — neither is approved for an aging-rejuvenation indication. The aging-context tier-1 designation reflects the IIS-pathway / somatotropic-axis biology engaged by IGF-1: this is the most reproducibly lifespan-extending genetic intervention across model organisms (daf-2 worms → IGF1R+/- mice → centenarian IGF1R variants in humans), and IGF1R antagonists in oncology development (ganitumab) provide pharmacological access to the axis. Strict Open Targets `Approved Drug = true` for an aging indication does not apply.

## Key interactors and pathway connections

- [[igf1r]] — primary receptor (Kd ~0.1–1 nM); receptor page covers IGF1R structure, KO phenotype, and centenarian variants
- [[insr]] — secondary receptor (INSR-A isoform); metabolic overlap with insulin
- [[igfbp3]] — primary circulating carrier protein; forms ternary complex with ALS
- [[insulin-igf1]] — the IIS pathway hub page; full mechanism, cross-organism lifespan data, and FOXO biology
- [[pi3k-akt-pathway]] — shared intracellular effector cascade (IRS1/2 → PI3K → AKT → FOXO/mTOR)
- [[mtor]] — indirect downstream target via AKT–TSC1/TSC2–RHEB axis
- [[foxo3]] — key transcription factor disinhibited by reduced IIS; nuclear FOXO3 drives longevity programs
- [[growth-hormone]] — upstream regulator of hepatic IGF-1 production via GHR–JAK2–STAT5b
- [[irs1]] / [[irs2]] — intracellular adapters linking phosphorylated IGF1R to PI3K

## Limitations and gaps

- #gap/needs-human-replication — All longevity data is from model organisms or correlational human studies. No controlled human trial has demonstrated that reducing IGF-1 signalling extends human lifespan.
- #gap/contradictory-evidence — The relationship between circulating IGF-1 and longevity in humans is non-monotonic. Suh 2008 shows centenarians have *elevated* IGF-1 (compensatory); some epidemiological cohorts associate low IGF-1 in old age with frailty and worse outcomes. Distinguishing cause (protective low IIS) from effect (frailty → low GH pulsatility → low IGF-1) requires careful design.
- #gap/needs-replication — Guevara-Aguirre 2011 Laron cancer/T2D protection is a single small founder-effect cohort; not independently replicated in other GHR-mutation populations.
- #gap/needs-replication — IGF-1 isoform E-peptide (MGF) independent bioactivity: proposed but not robustly demonstrated in vivo.
- #gap/dose-response-unclear — Optimal degree of IGF-1 signalling reduction for human healthspan/longevity benefit unknown; U-shaped risk for cancer (too-high) vs frailty (too-low) complicates any target range.
- #gap/unsourced — Circulating reference range 100–300 ng/mL (adult); needs primary normative data citation.
- #gap/unsourced — Extrahepatic tissue fraction of total circulating IGF-1 not well-quantified.
- #gap/long-term-unknown — Long-term safety of any pharmacological IGF-1 reduction strategy in humans not established.

## Footnotes

[^rinderknecht1978]: doi:10.1016/s0021-9258(17)40889-1 · in-vitro (protein biochemistry / sequencing) · model: purified human plasma IGF-1 · JBC 1978 · 1,542 citations · archive status: hybrid OA but download failed (no candidate URLs resolved); structural claims (70 aa mature, 3 disulfide bonds, insulin-family homology) cross-confirmed against UniProt P05019 #gap/no-fulltext-access
[^liu1993]: doi:10.1016/s0092-8674(05)80085-6 · in-vivo · genetic model (KO/double-KO) · model: Mus musculus · Cell 1993 · 2,377 citations · archive status: not_oa
[^holzenberger2003]: doi:10.1038/nature01298 · in-vivo · genetic model (IGF1R+/-) · model: Mus musculus (129/Sv) · 26% mean lifespan extension overall (P<0.02, Cox's test); females 33% longer (756±46 vs 568±49 days, P<0.01 t-test; P<0.001 Cox), males 15.9% longer (679±80 vs 585±69 days, NS); serum IGF-1 paradoxically elevated in Igf1r+/- vs WT (males 795±64 vs 625±30 ng/mL P<0.01; females 716±39 vs 516±14 ng/mL P<0.001) · Nature 2003 · local PDF verified
[^suh2008]: doi:10.1073/pnas.0705467105 · case-control · n=384 centenarians (286F+98M, mean age 97.7) + n=312 controls (mean age 79.5); initial discovery screen n=79 short female centenarians + 161 female controls · model: [[homo-sapiens]] (Ashkenazi Jewish) · IGF1R Ala-37-Thr (n=2) + Arg-407-His (n=7) = 9/384 centenarians (2.3%) vs 1/312 controls (0.3%), P=0.02; carriers show reduced IGF1R levels (P<0.03) and reduced AKT phosphorylation in lymphocytes; carriers ~2.5 cm shorter (162±2.8 vs 165±0.8 cm, P=0.41, NS); female offspring IGF-1 35% elevated (n=105 vs n=67 controls, P<0.01) · PNAS 2008 · local PDF verified
[^guevara2011]: doi:10.1126/scitranslmed.3001845 · observational (cross-sectional cohort with longitudinal mortality follow-up) · n=99 GHRD (GHR mutations) + 1,606 controls (relatives) · model: [[homo-sapiens]] (Ecuadorian founder cohort) · 0 cancer deaths in GHRD vs 20% of deaths in controls (17% of all diseases); p=0.003, hypergeometric test; near-zero T2D (0/90 vs ~5% controls, p=0.02); serum IGF-1 ≤20 ng/ml in GHRD vs 29–310 ng/ml controls; overall lifespan not significantly extended (70% of GHRD deaths from accidents/alcohol/convulsive disorders) · Sci Transl Med 2011 · archive status: download failed (green OA PMC3357623; URL filter blocked)
[^tyshkovskiy2026]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · doi:10.1038/s41586-026-10542-3 · *Nature* 2026 · n=11,165 transcriptomes across 4 species · meta-analysis (mixed-effects gene-trait associations + elastic-net clock coefficients) · model: mouse/rat/macaque/human, multi-tissue · `Igf1` negatively associated with maximum lifespan within and across species; tissue expression declines with age
