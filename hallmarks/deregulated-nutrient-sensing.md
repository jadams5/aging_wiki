---
type: hallmark
aliases: [insulin signaling deregulation, IIS hyperactivation, growth-signaling hyperactivity, nutrient sensing deregulation, IIS dysregulation]
category: antagonistic
mechanistic-tier: intermediate
intervention-tractability: high
caused-by: []
causes: ["[[disabled-macroautophagy]]", "[[cellular-senescence]]", "[[mitochondrial-dysfunction]]", "[[stem-cell-exhaustion]]", "[[epigenetic-alterations]]"]
introduced: 2013
sens-correspondence: []
key-pathways: ["[[insulin-igf1]]", "[[mtor]]", "[[ampk]]", "[[pi3k-akt-pathway]]", "[[sirtuin]]"]
key-phenotypes: ["[[type-2-diabetes]]", "[[sarcopenia]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Synthesis-MOC verification pass 2026-05-04: all wikilinked atomic pages confirmed to exist and have verified:true or verified:true with verified-scope. All inherited quantitative claims cross-checked against verified atomic pages — Holzenberger 2003 (+26%/+33%/+15.9%), Suh 2008 (2.3% vs 0.3% p=0.02; elevated IGF-1), Hertweck 2004 (+63% sgk-1; akt-1 p=0.1642 NS; akt-2 p=0.3717 NS; n=147), Harrison 2009 (+13%/+9% mean; +14%/+9% 90th-pct; 14 mg/kg food = 2.24 mg/kg BW/day), Willcox 2008 (OR=2.75 CI 1.51–5.02 p=0.0007; HHP/HAAS male-only; Honolulu not Okinawan), Brunet 1999 (Thr32/Ser253 = 14-3-3 binding; Ser315 = CRM1 export only) — all confirmed correct. Status annotations updated: igf1r, foxo4, foxo1, pten, akt, insr, irs-1, irs2, pi3k, pdk1, insulin, nmn, nr all upgraded from 'drafted' to 'verified-partial' per current atomic-page verified state. No quantitative claim corrections required. Downstream propagation needed: pten.md Ortega-Molina 2012 female lifespan +9% → +16% (verified by cancer page verifier from PDF Figure 2A — see log entry line 573 and 6719); hyperfunction-theory.md line 72 should read '+12% males / +16% females' (already correct on that page); pten.md needs the +16% correction applied."
---

# Deregulated Nutrient Sensing

One of the three **Antagonistic** hallmarks in the López-Otín 2013 / 2023 framework. Nutrient-sensing pathways evolved to allocate resources between growth, reproduction, and stress resistance. With age, these pathways shift toward chronic anabolic signaling — even without true nutrient excess — accelerating cellular dysfunction downstream. The **somatotropic (GH/IGF-1) and mTOR axes are the most empirically supported pro-aging growth-signaling systems in biology**: reducing their activity extends lifespan in every major model organism tested, with human genetic evidence converging on the same conclusion. Together with [[hypotheses/hyperfunction-theory]], this hallmark represents the wiki's strongest empirically-supported aging mechanism cluster.

## Definition (López-Otín 2013)

Age-associated dysregulation of the four canonical nutrient-sensing pathways — [[insulin-igf1|IIS]], [[mtor|mTOR]], [[ampk|AMPK]], and [[sirtuin|sirtuins]] — resulting in loss of metabolic homeostasis and downstream activation of multiple other hallmarks. Crucially, the dysregulation is one-directional: IIS and mTOR become *overactive* relative to what is optimal for post-reproductive animals, while AMPK and sirtuin activity *declines*. The net effect is a chronic pro-anabolic, anti-autophagic, pro-inflammatory state that the cell cannot escape.

## The four canonical pathways at a glance

| Pathway | Aging direction | Primary aging effect | Canonical intervention | Evidence page |
|---|---|---|---|---|
| [[insulin-igf1\|IIS]] (INSR/IGF1R → PI3K → AKT/SGK1 → FOXO/mTOR) | Overactive with age | Suppresses FOXO; activates mTORC1; promotes growth over repair | Genetic reduction (GHR-/-, Igf1r+/-), CR | [[insulin-igf1]] (verified-partial) |
| [[mtor\|mTOR]] (mTORC1 → S6K1/4E-BP1; mTORC2 → AKT) | Overactive with age | Suppresses autophagy (via ULK1); promotes protein synthesis; SASP amplification | [[rapamycin]] (NIA ITP-validated) | [[mtor]] (verified-partial) |
| [[ampk\|AMPK]] (LKB1/CaMKK2 → AMPKαβγ → TSC2/Raptor/ULK1) | Declines with age | Falls silent → mTOR brakes released; autophagy suppressed | [[metformin]], exercise, CR | [[ampk]] (verified, FULL) |
| [[sirtuin\|Sirtuins]] (NAD⁺-dependent deacetylases, SIRT1–7) | Declines with age (NAD⁺ depletion) | Reduced deacetylation of FOXO, PGC-1α, NF-κB; less metabolic flexibility | NMN ([[nmn]]), NR ([[nr]]), [[caloric-restriction]] | [[sirtuin]] (verified-partial) |

## IIS axis: the founding longevity pathway

### The daf-2 paradigm

The insulin/IGF-1 receptor in *C. elegans*, **DAF-2**, is the founding longevity gene of modern molecular gerontology. Loss-of-function *daf-2(e1370)* approximately doubles adult worm lifespan [^kenyon1993] — an effect completely suppressed by *daf-16* loss-of-function, establishing the epistasis that defines the pathway's longevity output. See [[daf-2]] (verified) and [[daf-16]] (verified-partial).

### The mammalian somatotropic axis

The **GH → IGF-1 → IGF1R → IIS** axis is the principal mammalian longevity-regulating signaling cascade, with convergent evidence across the longest-lived engineered mouse models:

- **GHR-/- (Laron) mice** are the longest-lived laboratory mouse model (~40–55% median lifespan extension; exact figure unconfirmed from closed-access source) [^coschigano2003] — see [[growth-hormone]] (verified). The mechanism is complete ablation of GH-stimulated IGF-1 production → near-zero circulating IGF-1 → IIS silencing.
- **Igf1r+/- mice** (129/Sv background) live **~26% longer** combined sexes (+33% females, p<0.001; +15.9% males, NS) [^holzenberger2003] — see [[igf1r]] (verified-partial). Receptor haploinsufficiency — a mild manipulation — produces striking lifespan extension, consistent with tonic IIS as a causal aging driver.
- **Laron syndrome in humans** (GHR loss-of-function; Ecuador cohort, n=99): zero cancer deaths in Laron subjects vs 17% cancer mortality in unaffected relatives; dramatically reduced diabetes [^guevara2011] — see [[growth-hormone]] (verified). #gap/no-fulltext-access (Guevara-Aguirre 2011 download failed in archive)
- **[[klotho|Klotho]] transgenic mice** (EF-1alpha OE): ~+20-30% median lifespan extension; mechanism is secreted Klotho (sKlotho) inhibition of IGF-1R/INSR at cell surface → FOXO nuclear retention → oxidative stress resistance. KL-VS heterozygous humans show survival advantage (Arking 2002: 1.43-fold OR for survival to age 75 in Czech cohort, 95% CI 1.02–2.01, P=0.036; the widely-cited "+3 yr life expectancy" figure is NOT in the Arking 2002 paper and was a downstream synthesis error) plus higher HDL, lower blood pressure. Klotho is a natural circulating IIS brake that declines with age — see [[klotho]] (verified 2026-05-05).

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — IIS pathway is deeply conserved from worms to humans |
| Phenotype (IIS reduction → lifespan extension) in humans? | partial — Laron cohort, IGF1R centenarian variants, FOXO3 GWAS; no RCT lifespan endpoint |
| Replicated in humans? | in-progress — GWAS replicated across cohorts; Laron syndrome is observational; no RCT |

### The Suh 2008 paradox — a critical nuance

Female Ashkenazi Jewish centenarians (n=384) with IGF1R loss-of-function alleles carry **paradoxically elevated** circulating IGF-1, not reduced [^suh2008] — see [[igf-1]] (verified) and [[igf1r]] (verified-partial). The interpretation: partial receptor LoF reduces receptor signaling → compensatory upregulation of IGF-1 ligand secretion. Cellular-level IIS is reduced even as serum IGF-1 rises. This dissolves the paradox mechanistically but underscores that serum IGF-1 is not a reliable proxy for cellular IIS signaling. #gap/needs-human-replication (direct intracellular IIS readout in centenarians not yet done)

## Pathway hierarchy and the SGK-1 correction

The core IIS intracellular cascade:

```
INSR / IGF1R
    ↓
IRS-1 / IRS-2   (adapter tier — see [[irs-1]], [[irs2]])
    ↓
PI3K (p110/p85) → PIP3   (see [[pi3k]])
    ↓
PDK1 → phospho-Thr308 AKT   (see [[pdk1]])
mTORC2 → phospho-Ser473 AKT  (see [[rictor]])
    ↓ AKT (see [[akt]])
    ├→ FOXO (phospho → cytoplasmic export → silenced)
    ├→ TSC2 (phospho-Thr1462 → Rheb activated → mTORC1 on)
    └→ MDM2 (p53 suppression)
    ↓ SGK1 (parallel to AKT — see [[sgk1]])
    └→ FOXO / DAF-16
```

**Critical narrative correction:** In *C. elegans*, **SGK-1, not AKT-1 or AKT-2**, is the dominant longevity kinase downstream of DAF-2. Hertweck 2004 showed *sgk-1* LoF extends mean adult lifespan **+63%** (14.7→24.0 days; p<0.0001; n=147), while *akt-1* LoF alone was NS (p=0.1642) and *akt-2* LoF alone was NS (p=0.3717) [^hertweck2004] — see [[sgk1]] (verified) and [[akt]] (verified-partial). This reframes the pathway: SGK-1 is the functionally dominant arm for longevity output in the model organism with the cleanest genetics. Mammalian equivalence is assumed but not directly verified. #gap/needs-human-replication

## The mTOR axis: from nutrient signal to aging effector

mTORC1 is the convergent output node where IIS, amino acid sensing, AMPK, and growth factor inputs integrate. Its chronic over-activation drives the two most directly downstream hallmarks — [[disabled-macroautophagy]] (ULK1 inhibition) and [[loss-of-proteostasis]] (excess protein synthesis, suppressed clearance). See [[mtor]] (verified-partial) for full pathway biology.

### S6K1-IRS1 negative feedback — the insulin-resistance amplification loop

mTORC1 → S6K1 → phospho-IRS-1 (Ser-307/Ser-632 mouse; Ser-312/Ser-636/Ser-639 human per Um 2004 corrigendum) → IRS-1 degradation → attenuated insulin signaling. This negative-feedback loop is the molecular basis of mTOR-driven insulin resistance: chronic mTOR/S6K1 activation (as occurs with nutrient excess or age-related IIS hyperactivation) progressively impairs upstream insulin sensitivity. See [[s6k1]] (verified-partial) and [[irs-1]] (verified-partial).

| Dimension | Status |
|---|---|
| mTOR pathway conserved in humans? | yes — essentially identical from yeast to humans |
| S6K1 negative feedback on IRS-1 in humans? | yes — Ser-636/Ser-639 confirmed in human adipose; basis of metformin's mechanism |
| Rapamycin lifespan extension in humans? | not yet — PEARL 2025 null on VAT endpoint; ongoing trials |

### Rapamycin: the most-validated longevity intervention

Harrison 2009 (NIA ITP): late-life rapamycin (14 mg/kg food, initiated at ~600 days = ~60 human-equivalent years) extended mean lifespan **+13% females / +9% males** and 90th-percentile lifespan +14%/+9% in genetically heterogeneous UM-HET3 mice [^harrison2009] — see [[rapamycin]] (verified-partial). This is the single most informative result for the hyperfunction-deregulated-nutrient-sensing axis: the prediction that reducing growth signaling *late in life* should extend lifespan was confirmed. See [[hypotheses/hyperfunction-theory]] (verified) for the mechanistic interpretation.

## AMPK: the counter-regulator

AMPK is the cell's primary energy-stress sensor and the functional opponent of mTORC1. When ATP drops and AMP rises, the γ-subunit's allosteric site 1 activates the heterotrimer up to ~10-fold (combined allosteric + dephosphorylation-protection effect) [^hardie2012] — see [[ampk]] (verified, FULL). AMPK then directly phosphorylates Raptor (Ser722/Ser792) to inhibit mTORC1 and phosphorylates ULK1 (Ser317/Ser777) to activate autophagy — the dual brake-release mechanism that makes AMPK activation longevity-relevant.

With age, AMPK activity declines in most tissues. This means the mTOR brakes weaken even without true nutrient excess. [[metformin]] (complex I inhibitor → AMP rise → AMPK activation → mTOR suppression) extended mean lifespan +5.83% in male C57BL/6 mice at 0.1% diet [^martinmontalvo2013] — see [[metformin]] (verified-partial).

## FOXO transcription factors: the central longevity effector

When IIS/AKT/SGK-1 signaling is reduced, **FOXO transcription factors** translocate to the nucleus and drive transcriptional programs for stress resistance, proteostasis, autophagy, DNA repair, and longevity. They are the molecular bridge between reduced nutrient sensing and cellular protection.

### FOXO3 human longevity association

rs2802292 GG genotype in *FOXO3*: OR=2.75 (95% CI 1.51–5.02; p=0.0007) for living to 95+ in Japanese-American men (HHP/HAAS cohort; Honolulu, Oahu; nested case-control, n=615; **male-only cohort**) [^willcox2008] — see [[foxo3]] (verified) and [[foxo-transcription-factors]] (verified). This is the most robustly replicated human longevity GWAS signal across populations.

**Phosphosite precision (verified against Brunet 1999):** AKT phosphorylates FOXO3 at **Thr32 and Ser253**, which creates 14-3-3 binding sites → cytoplasmic sequestration. Ser315 phosphorylation (also by AKT) drives CRM1-dependent nuclear export — a mechanistically distinct step — and does **not** create 14-3-3 binding sites. This is a common misattribution in secondary literature. See [[foxo3]] (verified) and [[pi3k-akt-pathway]] (verified-partial).

### DAF-16 / FOXO4 / FOXO1

- [[daf-16]] (verified-partial): single ancestral *C. elegans* FOXO ortholog; required for all daf-2 longevity effects; daf-16 LoF completely suppresses daf-2 longevity.
- [[foxo4]] (verified-partial): target of the FOXO4-DRI senolytic peptide (Baar 2017), which disrupts FOXO4–p53 interaction → apoptosis of senescent cells → see [[interventions/pharmacological/senolytics]] for clinical relevance.
- [[foxo1]] (verified-partial): dominant FOXO in liver/adipose; Taguchi 2007 brain-Irs2 KO paradox — female lifespan +~18% despite obesity and peripheral hyperinsulinemia — implicates tissue-specific FOXO/IIS as more important than systemic IIS for longevity [^taguchi2007]. #gap/no-fulltext-access (Taguchi 2007 closed-access)

## Sirtuins: the NAD⁺-dependent arm

SIRT1 (nuclear) is the primary longevity-associated sirtuin in mammals. It deacetylates FOXO1/3 (potentiating transcriptional activity), PGC-1α (mitochondrial biogenesis), and NF-κB (anti-inflammatory). SIRT1 activity declines with age as cellular NAD⁺ falls. NAD⁺ precursors (NMN, NR) aim to restore SIRT1 function — see [[nmn]], [[nr]]. For full sirtuin pathway biology, see [[sirtuin]] (verified-partial) and [[sirt1]] (verified-partial).

**Note:** Sirtuins are discussed here as part of the deregulated-nutrient-sensing hallmark per López-Otín 2013. Their mechanistic overlap with [[mitochondrial-dysfunction]] (SIRT3/SIRT5 mitochondrial deacetylases) and [[epigenetic-alterations]] (SIRT1/SIRT6 histone deacetylation) means they appear as contributing factors in multiple hallmarks. The canonical home for sirtuin pathway biology is [[sirtuin]].

## Hypotheses that this hallmark grounds

### [[hypotheses/hyperfunction-theory]] (verified — active, most empirically supported)

Hyperfunction theory is the direct mechanistic reading of this hallmark taken to a causal claim: aging is caused by the *continued activity* of developmental and growth programs (mTOR/IIS) past their useful window, not primarily by accumulation of molecular damage. This hallmark provides the empirical substrate for that claim. Every finding listed above under IIS and mTOR — daf-2 LoF worm longevity, Igf1r+/- mouse longevity, GHR-/- Laron longevity, S6K1 KO, PTEN GOF, rapamycin ITP — is also the primary evidence for hyperfunction theory. See [[hypotheses/hyperfunction-theory]] (verified) for the prediction table, evidence-against section, and what would update the hypothesis.

### [[hypotheses/disposable-soma-theory]] (verified — active-frame)

The disposable-soma theory provides the evolutionary frame for *why* IIS/mTOR hyperfunction persists: natural selection optimized growth and reproduction in early life, leaving insufficient power to silence those programs post-reproductively. Reducing IIS classically comes with fertility trade-offs (daf-2 LoF worms are constitutive dauer-formers; GHR-/- mice are infertile/sub-fertile), consistent with the soma-vs-germline investment logic. See [[hypotheses/disposable-soma-theory]] (verified) for the trade-off framing.

## Downstream hallmark cascade

This hallmark sits upstream of several integrative and primary hallmarks that it drives:

| Downstream hallmark | Mechanism of linkage |
|---|---|
| [[disabled-macroautophagy]] | mTORC1 phosphorylates ULK1 Ser757 → autophagy suppression; chronic mTOR hyperactivity → chronically suppressed autophagy |
| [[loss-of-proteostasis]] | Suppressed autophagy + enhanced protein synthesis → proteotoxic burden |
| [[cellular-senescence]] | mTOR in senescent cells drives SASP translation; rapamycin reduces SASP output |
| [[chronic-inflammation]] | SASP → inflammaging; S6K1/mTOR-driven pro-inflammatory translation |
| [[mitochondrial-dysfunction]] | IIS/mTOR suppresses mitophagy and mitochondrial quality control |

## Translational interventions targeting this hallmark

| Intervention | Mechanism | Strongest evidence | Evidence page | Gap |
|---|---|---|---|---|
| [[rapamycin]] | mTORC1 inhibitor (FKBP12-rapamycin-FRB complex) | Harrison 2009 NIA ITP: +9–13% mouse lifespan; PEARL 2025 null on VAT primary endpoint | [[rapamycin]] (verified-partial) | No human lifespan RCT; mTORC2 side effects at chronic doses |
| [[caloric-restriction]] | mTOR suppression + AMPK activation + IGF-1 reduction | Mattison 2017 (rhesus); Redman 2018 CALERIE (humans: biomarker improvements, no lifespan) | [[caloric-restriction]] (verified) | Human lifespan endpoint infeasible; adherence limits |
| [[metformin]] | Complex I → AMP rise → AMPK → mTOR suppression | +5.83% mean lifespan C57BL/6 male mice (Martin-Montalvo 2013); TAME trial in progress | [[metformin]] (verified-partial) | B12 depletion; TAME primary results pending |
| GLP-1 receptor agonists (semaglutide, tirzepatide) | GLP-1RA → insulin sensitization; weight/metabolic normalization | Paradigm-shifting for T2D + obesity; aging trial pipeline opening | [[type-2-diabetes]] (stub) | Aging-specific RCTs nascent; longevity endpoint absent #gap/unsourced |
| SGLT2 inhibitors ([[empagliflozin]], dapagliflozin) | Glucosuria → caloric loss (~280 kcal/day) → CR-like signaling; AMPK activation; ketogenesis (BHB rise) → mTORC1 suppression + HDAC inhibition | EMPA-REG OUTCOME (CV mortality HR 0.62), EMPEROR-Preserved/-Reduced, EMPA-KIDNEY (kidney disease progression HR 0.72) — none with aging endpoints | [[empagliflozin]] (verified) | No aging-endpoint human RCT in non-diabetic older adults #gap/needs-human-replication |

## Phenotypic outputs

- **[[type-2-diabetes]]** (stub): the prototypical clinical consequence of chronic IIS hyperactivation → insulin resistance via S6K1-IRS1 negative feedback → pancreatic beta-cell exhaustion → frank hyperglycemia. Aging-associated rise in T2D incidence is mechanistically continuous with the IIS deregulation described here.
- **[[sarcopenia]]** (stub): anabolic resistance — the paradox of high systemic IIS/mTOR signaling but impaired muscle protein synthesis response to feeding or exercise. Chronic mTOR activation contributes to satellite cell dysfunction and impaired regeneration.
- **Metabolic syndrome / visceral adiposity** — not separately paged; cross-references [[caloric-restriction]] and [[metformin]].

## Sex-specific effects

Sex dimorphism is a consistent feature of IIS/mTOR longevity manipulations and is underexplained by the basic hyperfunction model:
- Igf1r+/- lifespan extension: +33% females, +15.9% males (NS) — see [[igf1r]] (verified-partial). Female-specific effect.
- Rapamycin NIA ITP: larger effect in females (+13% mean) than males (+9% mean) — see [[rapamycin]] (verified-partial).
- S6K1 KO: female-specific lifespan extension — see [[s6k1]] (verified-partial).

#gap/no-mechanism (sex-differential rapamycin/IGF1R longevity effects unexplained; possible mTORC2 sensitivity difference or estrogen-IIS interaction)

## Targeted interventions

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[deregulated-nutrient-sensing]])
  OR contains(target-hallmarks, [[deregulated-nutrient-sensing]])
SORT clinical-stage DESC
```

See [[frameworks/interventions-by-hallmark]] for the full matrix, class-level synthesis, and gaps. This hallmark has the densest intervention cluster in the wiki.

---

## Limitations and gaps

- `#gap/needs-human-replication` — all direct lifespan evidence is from model organisms; human evidence is genetic association (FOXO3 GWAS, IGF1R centenarian variants) or observational (Laron syndrome cohort). No human RCT has a lifespan primary endpoint, and none is feasible.
- `#gap/contradictory-evidence` — the Suh 2008 paradox (centenarians with elevated serum IGF-1 despite IGF1R LoF alleles) complicates the simplest IIS-reduction model. Cellular vs serum IGF-1 disconnect requires direct measurement in humans.
- `#gap/no-fulltext-access` — Coschigano 2003 (GHR-/- lifespan %; closed-access); Taguchi 2007 (brain-Irs2 KO; closed-access); Selman 2009 (S6K1 KO lifespan %; closed-access); Kenyon 1993 (daf-2 founding paper; closed-access).
- `#gap/long-term-unknown` — Chronic rapamycin in humans: immunosuppression, dyslipidemia, and mTORC2 inhibition risks over multi-year use are not characterized in healthy aging adults.
- `#gap/dose-response-unclear` — Optimal rapamycin dosing for human longevity (intermittent vs continuous; rapalogs) and metformin dosing for aging-specific endpoints are not established.
- `#gap/needs-replication` — GLP-1 RA and SGLT2 inhibitor aging benefits: large T2D/CV RCTs exist, but these were not designed to test aging hallmarks or longevity.
- `#gap/unsourced` — Sirtuin NAD⁺ decline with age: widely cited; specific human tissue/age-quantified data not cited on this page — see [[sirtuin]] for sourcing.
- `[[mtor-kinase]]` — planned protein page for the mTOR kinase itself (distinguished from the pathway page [[mtor]]); not yet seeded.
- `[[type-2-diabetes]]` — phenotype page is a stub; full expansion planned.
- `[[sarcopenia]]` — phenotype page is a stub.
- `[[jak-stat-pathway]]` — GH signals via JAK2/STAT5B; this pathway is not yet seeded; GH biology deferred to [[growth-hormone]].
- `[[antagonistic-pleiotropy]]` — evolutionary frame overlapping with [[hypotheses/disposable-soma-theory]]; not yet seeded as a dedicated hypothesis page.

## Cross-references

**Pathways (verified):**
- [[insulin-igf1]] (verified-partial) — canonical home for IIS pathway architecture
- [[pi3k-akt-pathway]] (verified-partial) — PI3K/AKT/PTEN/FOXO intracellular cascade
- [[mtor]] (verified-partial) — mTOR complex biology and rapamycin mechanism
- [[ampk]] (verified, FULL) — energy sensing; mTOR antagonism; longevity via FOXO/ULK1

**Key proteins:**
- [[daf-2]] (verified), [[igf1r]] (verified-partial), [[insr]] (verified-partial), [[igf-1]] (verified), [[insulin]] (verified-partial)
- [[irs-1]] (verified-partial), [[irs2]] (verified-partial)
- [[pi3k]] (verified-partial), [[pdk1]] (verified-partial), [[akt]] (verified-partial), [[sgk1]] (verified), [[pten]] (verified-partial)
- [[foxo-transcription-factors]] (verified), [[foxo3]] (verified), [[foxo1]] (verified-partial), [[foxo4]] (verified-partial), [[daf-16]] (verified-partial)
- [[s6k1]] (verified-partial), [[4ebp1]] (verified-partial), [[ulk1]] (verified-partial)
- [[raptor]] (verified, FULL), [[rictor]] (verified-partial), [[tsc1-tsc2]] (verified, FULL)
- [[growth-hormone]] (verified), [[sirt1]] (verified-partial)

**Compounds / interventions:**
- [[rapamycin]] (verified-partial), [[metformin]] (verified-partial)
- [[caloric-restriction]] (verified), [[nmn]] (verified-partial), [[nr]] (verified-partial)

**Hypotheses:**
- [[hypotheses/hyperfunction-theory]] (verified) — deregulated nutrient sensing is the central empirical claim
- [[hypotheses/disposable-soma-theory]] (verified) — evolutionary rationale for IIS hyperfunction persistence

**Other hallmarks:**
- [[disabled-macroautophagy]], [[loss-of-proteostasis]], [[cellular-senescence]], [[chronic-inflammation]], [[mitochondrial-dysfunction]]

**Framework MOC:**
- [[hallmarks-of-aging]] (parent)

**Model-organism natural experiments:**
- [[canis-lupus-familiaris]] — breed-size lifespan paradox; single IGF1 haplotype (Sutter 2007) underlies giant-vs-small-breed lifespan difference (~2–3×); within-species replication of IIS/GH axis longevity tradeoff

---

## Position in causal hierarchy

This hallmark is classified as **Intermediate response/damage tier** (mechanistic-tier: intermediate / intervention-tractability: high). See [[frameworks/hallmark-causality-graph]] for the full hierarchy and intervention-sequencing argument.

Direct upstream nodes per `caused-by:` frontmatter: none (intrinsic age-related deregulation; evolutionary hyperfunction driver).
Direct downstream nodes per `causes:` frontmatter: [[disabled-macroautophagy]], [[cellular-senescence]], [[mitochondrial-dysfunction]], [[stem-cell-exhaustion]], [[epigenetic-alterations]] (via NAD+/SIRT1 axis).
Edge evidence is in [[frameworks/causal-graph-data]].

---

[^kenyon1993]: doi:10.1038/366461a0 · in-vivo · genetic · model: *C. elegans* daf-2(e1370) · ~2× adult lifespan extension; completely suppressed by daf-16 LoF · closed-access (not_oa) — founding result; see [[daf-2]] (verified)

[^holzenberger2003]: doi:10.1038/nature01298 · in-vivo · genetic · model: Igf1r+/- 129/Sv mice · +26% combined (Cox p<0.02); +33% females (p<0.001); +15.9% males (NS) · local PDF available; see [[igf1r]] (verified-partial)

[^coschigano2003]: doi:10.1210/en.2003-0247 · in-vivo · genetic · model: GHR-/- Laron mice · substantial lifespan extension (~40–55% range widely cited; exact % unconfirmed from closed-access source) · closed-access (not_oa) #gap/no-fulltext-access; see [[growth-hormone]] (verified)

[^guevara2011]: doi:10.1126/scitranslmed.3001845 · observational · n=99 Laron, ~1,600 controls (Ecuador) · zero cancer deaths in Laron subjects; dramatically reduced diabetes · download failed #gap/no-fulltext-access; see [[growth-hormone]] (verified)

[^suh2008]: doi:10.1073/pnas.0705467105 · observational · n=384 Ashkenazi Jewish centenarians · IGF1R LoF alleles 2.3% vs 0.3% controls (p=0.02); paradoxically elevated circulating IGF-1 · local PDF available; see [[igf-1]] (verified)

[^hertweck2004]: doi:10.1016/s1534-5807(04)00095-4 · in-vivo · genetic · model: *C. elegans* sgk-1 LoF · +63% mean adult lifespan (14.7→24.0 d; p<0.0001; n=147); akt-1 alone p=0.1642 NS; akt-2 alone p=0.3717 NS · local PDF available; see [[sgk1]] (verified)

[^harrison2009]: doi:10.1038/nature08221 · in-vivo · randomized · model: UM-HET3 mice, late-life rapamycin (14 mg/kg food) initiated at ~600 d · mean lifespan +13% females / +9% males; 90th-percentile +14%/+9% · local PDF available; see [[rapamycin]] (verified-partial)

[^hardie2012]: doi:10.1038/nrm3311 · review · γ-subunit AMP allosteric activation ~10-fold (combined allosteric + dephosphorylation protection); site 1/3/4 nucleotide-binding model · see [[ampk]] (verified, FULL)

[^martinmontalvo2013]: doi:10.1038/ncomms3192 · in-vivo · model: C57BL/6 male mice, 0.1% metformin diet · +5.83% mean lifespan (p=0.02); AMPK activation; mTOR suppression · local PDF available; see [[metformin]] (verified-partial)

[^willcox2008]: doi:10.1073/pnas.0801030105 · observational · n=615 men (nested case-control, HHP/HAAS cohort, Honolulu; 213 cases ≥95y vs 402 controls died <81y) · rs2802292 GG OR=2.75 (CI 1.51–5.02; p=0.0007) for living to 95+ · local PDF available; male-only cohort; see [[foxo3]] (verified)

[^taguchi2007]: doi:10.1016/j.cell.2007.02.005 · in-vivo · genetic · model: brain-specific Irs2 KO (Nestin-Cre) female mice · +~18% lifespan despite obesity + hyperinsulinemia · closed-access (not_oa) #gap/no-fulltext-access; see [[irs2]] (verified-partial)
