---
type: pathway
aliases: [IIS, insulin/IGF-1 signaling, insulin signaling, IGF-1 signaling, daf-2 pathway, IIS pathway]
kegg: hsa04910
reactome: R-HSA-74752
wikipathways: WP481
key-nodes: ["[[insr]]", "[[igf1r]]", "[[irs1]]", "[[irs2]]", "[[pi3k]]", "[[akt]]", "[[tsc1-tsc2]]", "[[foxo1]]", "[[foxo3]]", "[[foxo4]]", "[[daf-16]]"]
upstream: ["[[insulin]]", "[[igf-1]]", "[[growth-hormone]]"]
downstream: ["[[mtor]]", "[[foxo-transcription-factors]]", "[[protein-synthesis]]", "[[gluconeogenesis]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Holzenberger 2003 and Kenyon 2010 verified against local PDFs; Suh 2008 and Willcox 2008 verified against local PDFs (both downloaded during this pass). Kenyon 1993 and Taguchi 2007 closed-access (not_oa) — claims retained with #gap/no-fulltext-access tags; Taguchi 2007 lifespan figure (~14%) unverified against source. Canonical database IDs (KEGG, Reactome, WikiPathways) not independently re-checked against databases."
---

# Insulin / IGF-1 signaling pathway (IIS)

The **insulin / IGF-1 signaling** (IIS) pathway is the **canonical longevity pathway** in aging biology. Its discovery as a longevity regulator — Kenyon et al. 1993 showing that *C. elegans* `daf-2` mutants live approximately twice as long as wild-type [^kenyon1993] — launched modern molecular gerontology. IIS is the most phylogenetically ancient nutrient/growth-factor signaling axis in metazoans, and its reduction is associated with lifespan extension in every major model organism tested.

The pathway integrates insulin and IGF-1 receptor signals through a shared PI3K–AKT intracellular axis. Its two primary aging-relevant outputs are: (1) activation of [[mtor|mTORC1]] (anabolic, pro-aging when chronically elevated), and (2) inhibition of FOXO transcription factors (when disinhibited, FOXO drives stress resistance, proteostasis, and longevity programs).

> **Naming note:** This page covers the IIS pathway. Cross-links: [[mtor]] (direct downstream effector, has its own pathway page); [[ampk]] (antagonist, inhibits mTORC1 and activates FOXO in parallel).

## Receptor tier: INSR, IGF1R, and IRS adapters

Two receptor tyrosine kinases initiate IIS signaling in mammals:

| Receptor | Gene | Primary ligand | Key roles in aging |
|---|---|---|---|
| Insulin receptor | INSR (IR) | Insulin | Metabolic regulation; glucose uptake in muscle/fat; liver anabolism |
| IGF-1 receptor | IGF1R | IGF-1 (also insulin at high concentrations) | Growth, cell survival; reduced signaling in long-lived mice and centenarians |

Both receptors auto-phosphorylate upon ligand binding and recruit the **insulin receptor substrate (IRS) adapter family** (IRS1–4 in mammals; IRS1 dominant in muscle/fat; IRS2 dominant in liver and brain). The IRS proteins serve as docking scaffolds, linking receptor phosphotyrosines to downstream SH2-containing proteins — most critically, the p85/p110 regulatory/catalytic subunits of **PI3K**.

The IRS proteins also receive negative feedback from [[mtor|mTORC1]]-activated S6K1, which phosphorylates IRS-1 on serine residues, inhibiting it — a negative-feedback loop that attenuates insulin sensitivity under chronically anabolic conditions.

## Core intracellular cascade

```
Insulin / IGF-1
       ↓
INSR / IGF1R (receptor tyrosine kinase activation)
       ↓
IRS1/2 (adapter scaffold, phosphotyrosine docking)
       ↓
PI3K (generates PIP3 at plasma membrane)
       ↓
AKT (PDK1 + mTORC2 fully activate AKT)
      ↙          ↘
TSC1/TSC2        FOXO1/3/4
(AKT phosphorylates &    (AKT phosphorylates →
inhibits → releases      cytoplasmic retention
RHEB → mTORC1 ↑)        → transcription program ↓)
```

**AKT** (protein kinase B; three isoforms AKT1/2/3) is the central effector kinase. It requires dual phosphorylation — PDK1 on Thr308 and mTORC2 on Ser473 — for full activation. AKT then bifurcates to the two outputs with opposing aging significance:

1. **TSC1/TSC2 inhibition → mTORC1 activation** — AKT phosphorylates TSC2 (Ser939, Thr1462), inactivating the TSC1/TSC2 GAP complex; this releases RHEB-GTP at the lysosome to activate mTORC1. High IIS = high mTORC1 = suppressed autophagy, elevated protein synthesis. This branch is pro-aging when constitutively active. (See [[mtor]] for full mTORC1 biology.)

2. **FOXO inhibition → reduced longevity transcription** — AKT phosphorylates FOXO1/3/4 on three conserved serine/threonine residues, promoting 14-3-3 binding and cytoplasmic sequestration. When IIS is *reduced*, FOXO factors translocate to the nucleus and drive expression of stress-response genes (superoxide dismutases, catalase, heat-shock proteins, autophagy genes, cell-cycle arrest factors). FOXO nuclear activity is the molecular correlate of most IIS longevity phenotypes.

**PTEN** (phosphatase and tensin homolog) antagonizes PI3K by dephosphorylating PIP3 → PIP2, attenuating AKT activation. PTEN is a major tumor suppressor and a key determinant of basal pathway tone.

## FOXO transcription factors in aging

The FOXO family (FOXO1, FOXO3, FOXO4, FOXO6 in humans; DAF-16 in *C. elegans*; dFOXO in *Drosophila*) is the primary downstream effector of IIS longevity effects:

- **FOXO3** is the most-studied longevity-associated FOXO in humans. Multiple SNPs in the *FOXO3* locus are associated with exceptional longevity across independent cohorts (Hawaiian Japanese [^willcox2008], European, Ashkenazi Jewish, Chinese, Italian centenarians).
- FOXO target genes include: `SOD2` (mitochondrial superoxide dismutase), `GADD45` (DNA damage response), `BNIP3` (mitophagy), `BECN1` (autophagy initiation), `CCND1` (cyclin D1, growth suppression), `PCSK9` (cholesterol metabolism), and many proteostasis genes.
- FOXO nuclear activity is post-translationally regulated not just by IIS/AKT, but also by [[ampk]] (AMPK directly phosphorylates and activates FOXO), JNK (stress → FOXO nuclear import), and class III HDAC SIRTs (SIRT1/2 deacetylate and activate FOXO).

## Cross-pathway connections

| Connection | Direction | Mechanism |
|---|---|---|
| IIS → [[mtor]] | Downstream (activating) | AKT phosphorylates TSC2 → RHEB-GTP → mTORC1 activation |
| [[ampk]] → IIS outputs | Antagonistic/parallel | AMPK phosphorylates TSC2 (activating, not inhibiting) → mTORC1 ↓; AMPK also directly activates FOXO |
| mTORC1 → IIS | Negative feedback | S6K1 (mTORC1 substrate) phosphorylates IRS-1 Ser → IRS-1 degradation → insulin resistance |
| IIS → [[ampk]] | Indirect suppression | High IIS/mTOR = replete energy state → low AMP:ATP → AMPK less active |

This feedback topology means that chronically high IIS drives mTORC1 hyperactivation (suppressing autophagy) while simultaneously creating IRS-1 serine phosphorylation — contributing to the insulin resistance of aging.

## Role in aging: the longevity story across organisms

Reduced IIS extends lifespan in every major model organism tested. The magnitude varies dramatically (see "Magnitude attenuation" below).

### *C. elegans* — the founding result

Kenyon et al. 1993: *daf-2* (insulin receptor ortholog) mutant worms live approximately **2× as long** as wild-type Bristol N2 [^kenyon1993]. This was the first demonstration that a single-gene mutation could double animal lifespan — transforming aging from an intractable biological mystery into a tractable molecular problem.

The mechanism: reduced DAF-2 → reduced AGE-1 (PI3K ortholog) → PIP3 ↓ → DAF-16 (FOXO ortholog) nuclear translocation → longevity gene expression. DAF-18 (PTEN ortholog) also regulates pathway tone. The `daf-16` deletion epistasis result (removing DAF-16 blocks `daf-2` longevity) established that FOXO is the essential downstream mediator [^kenyon1993].

| Worm genotype | Lifespan relative to WT | Notes |
|---|---|---|
| `daf-2` (lf) | ~2× | Seminal Kenyon 1993 result [^kenyon1993] |
| `daf-16` (lf) | slightly shorter | FOXO null; epistatic to `daf-2` [^kenyon1993] |
| `age-1` (lf) | ~1.5× | PI3K ortholog [^gap/needs-replication] |
| `daf-2; daf-16` | WT | Confirms FOXO requirement |

### *Drosophila melanogaster* — IRS and FOXO

- **chico** (IRS ortholog) null mutants are long-lived (~40% extension in homozygous females, ~11% in heterozy-gous) [^gap/needs-replication — chico DOI not verified in archive]. #gap/needs-replication
- **InR** (insulin receptor ortholog) hypomorphs or overexpression of dFOXO in fat body extend lifespan.
- **dFOXO** is both necessary and sufficient for much of the lifespan extension from reduced IIS in flies.

### [[mus-musculus]] — GH/IGF1 axis and dwarf mice

In mice, IIS reduction has been achieved through several genetic models — all producing lifespan extension:

| Model | Mechanism | Lifespan extension | Notes |
|---|---|---|---|
| Ames dwarf (*Prop1^df/df*) | GH/PRL/TSH-deficient pituitary | ~50–65% [^gap/needs-replication] | GH → IGF-1 axis abolished; multiple hormonal changes |
| Snell dwarf (*Pit1^dw/dw*) | GH/PRL/TSH-deficient pituitary | ~40% [^gap/needs-replication] | Similar to Ames |
| GHR knockout (*GHR^-/-*, Laron dwarfs) | No GH receptor → IGF-1 ↓ | ~25–55% in various studies | Cleanest evidence for GH/IGF1 axis |
| IGF1R+/- heterozygous (*Igf1r^+/-*) | Haploinsufficiency of IGF-1 receptor | 26% overall (P<0.02); 33% females (P<0.001); 15.9% males (NS) [^holzenberger2003] | Sex-specific; 129/Sv background; cleaner than total GH loss |
| Brain-specific IRS-2 knockout | IRS-2 deletion in neurons | ~14% (females) [^taguchi2007] | Tissue-restricted; highlights brain IIS relevance; figure unverifiable against PDF — paper closed-access #gap/no-fulltext-access |
| Fat-specific INSR knockout (FIRKO) | Insulin receptor deleted in adipose | ~18% [^gap/needs-replication] | Fat-restricted; metabolic phenotype distinct from systemic KO |

**Key caveat for GHR/Ames/Snell models:** these are pituitary dwarfs with pleiotropic hormonal changes (reduced GH, IGF-1, thyroid hormones, prolactin) and altered body composition, thermogenesis, and cancer rates. They are not pure IIS experiments. The IGF1R heterozygous and tissue-specific models are cleaner.

### [[homo-sapiens]] — centenarian evidence (correlational)

- **FOXO3 SNPs** (rs2802292, rs13217795, others): multiple population-based studies show FOXO3 genotype associated with exceptional longevity. Willcox et al. 2008: nested case-control (n=615: 213 cases who survived to ≥95y, 402 controls who died ~77y) drawn from the Honolulu Heart Program/HAAS cohort of Hawaiian Japanese men; FOXO3A rs2802292 homozygous minor allele (GG) vs major (TT) OR=2.75 (P=0.0007) for longevity to 95+ [^willcox2008]. Replicated across European, Japanese, Italian, Chinese centenarian cohorts. #gap/needs-replication (independent replication studies exist but not all cited here)
- **IGF1R polymorphisms**: Suh et al. 2008 (Ashkenazi Jewish centenarian cohort, n=79 female centenarians screened vs n=161 controls) identified two heterozygous nonsynonymous missense variants in *IGF1R* — Ala-37-Thr and Arg-407-His — enriched in centenarians vs controls (P=0.04); carriers showed reduced IGFIR levels and reduced IGF-I-stimulated AKT phosphorylation in immortalized lymphocytes, indicating partial loss of IGF-1 signaling [^suh2008]. #gap/needs-replication
- **Circulating IGF-1 levels** and longevity in humans: relationship is complex and possibly U-shaped; very low IGF-1 in old age may reflect frailty rather than protected longevity. Requires careful separation of cause/effect.

## Magnitude attenuation: the central translation problem

The IIS pathway is conserved; the longevity magnitude is not. This is one of the most important epistemic caveats in aging biology:

| Organism | Intervention | Lifespan extension |
|---|---|---|
| *C. elegans* | `daf-2` null (worm ~80–90% functional loss) | ~100% (2×) |
| *Drosophila* | `chico` null (IRS ortholog) | ~40% (females) |
| *Mus musculus* | IGF1R+/- (50% receptor haploinsufficiency) | 26% overall; 33% females, 15.9% males (NS) [^holzenberger2003] |
| *Mus musculus* | GHR-/- (indirect IGF-1 axis) | ~25–55% |
| [[homo-sapiens]] | FOXO3 longevity SNPs | Increased odds ratio for 95+ survival; Willcox 2008: OR=2.75 (GG vs TT, rs2802292) in Hawaiian Japanese men [^willcox2008]; OR for heterozygous (TG vs TT) = 1.91 (P=0.0003) |
| [[homo-sapiens]] | IGF1R variants in centenarians | Correlational; no lifespan data |

**Why does magnitude attenuate?** Several non-exclusive hypotheses:
1. *Genetic buffering*: redundant pathways compensate for IIS reduction in long-lived mammals with slower metabolic rates.
2. *Pleiotropy of complete knockouts*: worm `daf-2` null is highly pleiotropic (smaller, sterile under some conditions, stress-resistant); the "longevity" signal includes many indirect effects not present in partial IIS reduction.
3. *Body size scaling*: larger organisms have proportionally lower metabolic rates; the marginal gain from further IIS reduction may be smaller.
4. *FOXO dose-response*: partial IIS reduction in humans may insufficiently activate FOXO to drive longevity programs.

See [[model-organisms/_extrapolation-guide]] for the full rubric and see the `#gap/needs-human-replication` convention for model-organism claims.

**Extrapolation assessment for IIS lifespan extension:**

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — IIS components are human-orthologous (INSR, IGF1R, IRS1/2, AKT, FOXO3) |
| Phenotype conserved in humans? | partial — FOXO3 SNPs associate with longevity; direct lifespan extension undemonstrated |
| Replicated in humans? | no (lifespan) / in-progress (surrogate endpoints) |

## Therapeutic implications

No approved pharmacological IIS inhibitor is used for longevity in humans. Several indirect angles are under investigation:

- **Growth hormone suppression / GH axis blockade**: studied in Laron syndrome patients (GHR mutations) as a natural human model; these individuals appear resistant to certain age-related cancers and diabetes despite short stature.
- **IGF1R antagonism**: monoclonal antibodies (e.g., ganitumab, teprotumumab — oncology indications) reduce IGF-1 signaling. Not tested for longevity.
- **Dietary protein restriction / low-protein diet**: reduces IGF-1 circulating levels in humans (unlike caloric restriction alone in primates). Mechanism parallels reduced IIS. Evidence for longevity in humans is observational.
- **Indirect via mTOR**: rapamycin and rapalogs suppress the shared mTORC1 effector arm; see [[mtor]] for detail.
- **[[klotho|Klotho]] (sKlotho)**: the secreted Klotho ectodomain inhibits IGF-1R and INSR at the cell surface, blunting IIS without a receptor-level genetic change. Klotho transgenic OE mice live ~20-30% longer; KL-VS heterozygote humans show longevity association. Klotho declines with age and CKD — see [[klotho]] for full evidence profile.

#gap/needs-human-replication — No controlled human trial has demonstrated IIS-pathway reduction extends human lifespan or health-span by a reproducible magnitude. All human evidence is GWAS/cohort/centenarian-study correlational.

## Canonical database IDs

| Database | Entry | Notes |
|---|---|---|
| KEGG | `hsa04910` | Insulin signaling pathway (human) |
| KEGG | `hsa04150` | mTOR signaling (contains IIS → mTOR branch) |
| Reactome | `R-HSA-74752` | Signaling by Insulin receptor |
| Reactome | `R-HSA-2404192` | Signaling by Type 1 IGF1 receptor (IGF1R) |
| WikiPathways | `WP481` | Insulin signaling |

## Limitations and gaps

- #gap/needs-human-replication — All lifespan data is from model organisms; human evidence is GWAS and centenarian cohort studies only.
- #gap/contradictory-evidence — Circulating IGF-1 levels show complex, possibly non-monotonic, relationship with longevity in humans. Some studies find low IGF-1 associated with frailty; others find FOXO3 genotype (which may indicate reduced IIS) associated with longevity.
- Suh 2008 IGF1R centenarian variant paper verified against primary source PDF (doi:10.1073/pnas.0705467105); n=79 centenarians screened; two nonsynonymous IGF1R variants (Ala-37-Thr, Arg-407-His) enriched in centenarians, P=0.04. Small cohort; #gap/needs-replication.
- The sex differences in the mouse IGF1R+/- result (females long-lived, males not) are unexplained and flag that IIS biology is sexually dimorphic, possibly through interaction with sex steroids. #gap/no-mechanism

## See also

- [[mtor]] — direct downstream effector (mTORC1 activation via AKT→TSC1/TSC2)
- [[ampk]] — parallel longevity pathway; antagonistic to mTOR; converges on FOXO
- [[deregulated-nutrient-sensing]] — parent Hallmark of Aging
- [[klotho]] — secreted inhibitor of IGF-1R/INSR; lifespan extension in OE mice; KL-VS human longevity variant
- [[caenorhabditis-elegans]] — primary model organism for IIS longevity genetics
- [[mus-musculus]] — mammalian model (dwarf mice, IGF1R+/-)
- [[homo-sapiens]] — FOXO3 SNPs, centenarian cohorts

## Footnotes

[^kenyon1993]: doi:10.1038/366461a0 · in-vivo · model: *C. elegans* (daf-2 mutant) · ~2× lifespan extension · citation_percentile: 100 (Nature 1993, 3379 citations)
[^holzenberger2003]: doi:10.1038/nature01298 · in-vivo · genetic model · model: Igf1r+/- mice (129/Sv background) · 26% mean lifespan extension overall (P<0.02, Cox); 33% in females (P<0.001), 15.9% in males (NS) · local PDF available
[^willcox2008]: doi:10.1073/pnas.0801030105 · nested case-control · n=615 men (213 cases ≥95y; 402 controls ~77y; drawn from Honolulu Heart Program/HAAS) · model: [[homo-sapiens]] (Hawaiian Japanese) · FOXO3A rs2802292 GG vs TT OR=2.75 (95% CI 1.51–5.02, P=0.0007) for longevity to 95+ · PNAS 2008
[^taguchi2007]: doi:10.1126/science.1142179 · in-vivo · genetic model · model: brain-specific IRS-2 knockout mice · ~14% lifespan extension (females) · Science 2007
[^kenyon2010]: doi:10.1038/nature08980 · review · model: multi-organism overview of IIS genetics of aging · Nature 2010 · local PDF available
[^suh2008]: doi:10.1073/pnas.0705467105 · case-control · n=79 female centenarians screened (full cohort: 286 female + 98 male centenarians; controls n=312) · model: [[homo-sapiens]] (Ashkenazi Jewish) · IGF1R Ala-37-Thr and Arg-407-His variants enriched in centenarians P=0.04; carriers show reduced IGFIR activity in lymphocytes · PNAS 2008
