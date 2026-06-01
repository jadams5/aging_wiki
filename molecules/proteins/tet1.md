---
type: protein
aliases: [ten-eleven translocation 1, CXXC6, KIAA1676, LCX, methylcytosine dioxygenase TET1]
uniprot: Q8NFU7
ncbi-gene: 80312
hgnc: 29484
ensembl: ENSG00000138336
mouse-ortholog: Tet1
key-domains: [CXXC-zinc-finger, DSBH-catalytic, iron-binding]
key-ptms: []
pathways: []
hallmarks: ["[[epigenetic-alterations]]"]
sens-categories: []
known-interactors: ["[[tet2]]", "[[tet3]]", "[[tdg]]", "[[oct4]]", "[[sox2]]"]
druggability-tier: null
genage-id: null
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[epigenetic-alterations]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "All eight primary-source footnotes cross-checked against PDFs or PMC full-text (tahiliani2009 via PMC; ito2010, koh2011, rudenko2013, wagner2015, figueroa2010, blaschke2013, minor2013 via local archive PDFs). Four factual corrections applied: (1) wagner2015 aging-direction claim corrected — paper shows developmental increase in 5hmC, not a decline in aging adults; (2) rudenko2013 behavioral paradigm clarified — extinction deficits in both fear-conditioning AND spatial MWM, and memory acquisition is intact; (3) figueroa2010 scope narrowed — paper demonstrates 2-HG inhibition of TET2 specifically, not TET1; (4) minor2013 footnote corrected — primary model is MEFs (C57BL/6), not HEK293 + cell-free system. UniProt identity fields (Q8NFU7, length, MW) not independently re-verified against UniProt — recommend cross-check on next lint pass."
---

# TET1

TET1 (ten-eleven translocation 1) is an α-ketoglutarate- and Fe²⁺-dependent dioxygenase that catalyzes the first step of active DNA demethylation: oxidation of 5-methylcytosine (5mC) to 5-hydroxymethylcytosine (5hmC). It is the founding member of the TET enzyme family, discovered through its chromosomal translocation partner in acute myeloid leukemia, and is now recognized as a key regulator of the epigenome during pluripotency and in post-mitotic neurons. 5hmC accumulates progressively during brain maturation and is reduced in neurodegenerative disease; whether 5hmC declines with normal (non-disease) aging remains under investigation and is relevant to [[epigenetic-alterations]].

## Identity

- **UniProt:** Q8NFU7 (TET1_HUMAN) — Swiss-Prot reviewed entry
- **NCBI Gene:** 80312
- **HGNC symbol:** TET1
- **Ensembl:** ENSG00000138336
- **Mouse ortholog:** Tet1 (one-to-one ortholog; functionally conserved)
- **Length:** 2,136 amino acids (canonical isoform)
- **Molecular weight:** ~235 kDa (235,309 Da)
- **Alternative gene symbols:** CXXC6, KIAA1676, LCX

## Structural domains

| Domain | Residues (approx.) | Function |
|---|---|---|
| CXXC zinc-finger | aa 584–625 | CpG DNA binding; recognizes unmethylated and methylated CpG dinucleotides |
| Double-stranded β-helix (DSBH) catalytic | C-terminal ~600 aa | Active-site dioxygenase; harbors Fe²⁺-binding HxD…H triad and α-KG-binding pocket |
| Low-complexity N-terminal region | aa 1–~580 | Protein interaction / regulatory; required for nuclear localization in some contexts |

Cofactor requirements: Fe²⁺ (catalytic, 1 ion per active site) and Zn²⁺ (structural, 3 ions per subunit) [^uniprot-q8nfu7]. The α-ketoglutarate (α-KG) co-substrate is consumed stoichiometrically, linking TET1 activity directly to Krebs-cycle metabolite availability.

## Function

TET1 oxidizes 5mC → 5-hydroxymethylcytosine (5hmC) in a reaction requiring molecular oxygen, Fe²⁺, and α-KG as co-substrate [^tahiliani2009]. The same dioxygenase active site can perform sequential oxidations:

```
5mC → 5hmC → 5-formylcytosine (5fC) → 5-carboxylcytosine (5caC)
```

5fC and 5caC are substrates for thymine-DNA glycosylase ([[tdg]])-mediated base-excision repair, ultimately replacing the modified base with unmodified cytosine — completing the active demethylation cycle [^ito2010]. 5hmC also has an independent role as a stable epigenetic mark ("sixth base"), especially in neurons, where it is enriched at gene bodies of actively transcribed genes.

Beyond catalysis, TET1 regulates chromatin accessibility and recruits histone-modifying complexes, influencing gene expression programs independently of demethylation per se.

## Tissue specificity and developmental expression

TET1 is most highly expressed in embryonic stem cells (ESCs) and the inner cell mass, where it maintains hypomethylation at CpG-island promoters and supports pluripotency [^ito2010] [^koh2011]. Expression is markedly downregulated upon differentiation. In adult tissues, **brain (neurons) is the primary site of high TET1 activity and 5hmC abundance** — neuronal 5hmC levels are among the highest in the body and accumulate progressively during postnatal brain maturation [^wagner2015].

Other adult tissues with detectable TET1: fetal heart, lung; adult skeletal muscle, thymus, ovary (UniProt Q8NFU7). TET2 and TET3 show broader adult expression; TET2 predominates in hematopoietic tissues.

## Aging relevance

### 5hmC dynamics across the lifespan

Wagner et al. 2015 quantified absolute levels of 5mC, 5hmC, and 5fC across the human and mouse brain lifespan using LC-MS isotope-dilution mass spectrometry [^wagner2015]. The primary finding is developmental: in human cerebral grey matter, 5hmC **increases** progressively from fetal levels (~0.1%) through postnatal development, reaching a steady-state plateau of approximately 1.2% in the fully developed adult brain (reached around age 22). This steady-state level is nearly twice as high as in mouse cerebral cortex. 5fC, by contrast, declines strongly during early brain development. The paper does not document a clear decrease in 5hmC during adult aging — the oldest samples are individuals aged 61–85 (n=2–4), too few to establish an aging-decline trend in adults. Attribution of an "aging decline" in 5hmC to Wagner 2015 is not supported; the paper characterizes developmental accumulation. Aging-associated 5hmC decline in the brain is documented in neurodegenerative disease contexts and other studies. #gap/needs-replication

Because TET1 is the dominant TET isoform in neurons, the progressive postnatal accumulation of 5hmC is consistent with high neuronal TET1 activity during brain maturation. Whether TET1 activity or 5hmC levels specifically decline during aging (as opposed to disease) has not been independently confirmed in large human cohorts. #gap/needs-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — TET1 and 5hmC are present in human neurons |
| Phenotype conserved in humans? | partial — 5hmC accumulates in human brain during development (Wagner 2015); whether 5hmC declines with adult aging in humans is not established from Wagner 2015 alone; causal link to cognitive aging not established |
| Replicated in humans? | no — Tet1 KO cognitive phenotype is mouse-only so far |

### Tet1 knockout and cognitive aging

Tet1 KO mice (C57BL/6 background; exon-4-deleted null allele; 4-month-old males) display downregulation of multiple neuronal activity-regulated genes (including Npas4, c-Fos, Arc, Egr2, Egr4) and impaired memory extinction, with memory acquisition remaining intact [^rudenko2013]. The Npas4 promoter region is hypermethylated (~20–45% CpG methylation) in Tet1KO hippocampus and cortex compared to controls (~3.5–8%), providing a mechanistic link between TET1 loss and gene silencing. Behaviorally, Tet1KO mice showed: (1) impaired contextual fear memory extinction (retained ~60% freezing after extinction training vs ~20% in controls, p<0.01; n=10+9); and (2) impaired spatial reference memory extinction in the Morris water maze (failed to show decreasing target-quadrant preference over 3 extinction days; n=10+9). Memory acquisition was normal in both contextual and cued fear conditioning. Additionally, Tet1KO mice exhibited abnormally enhanced hippocampal long-term depression (LTD) while LTP was intact. These phenotypes collectively suggest TET1 loss-of-function may contribute to cognitive aging, specifically via impaired inhibitory learning and epigenetic silencing of plasticity genes. #gap/needs-human-replication

### α-KG dependence and metabolic cross-talk

TET1 activity is stoichiometrically coupled to α-ketoglutarate, a Krebs-cycle metabolite produced from isocitrate by isocitrate dehydrogenase (IDH1/2). Several oncometabolites competitively inhibit TET enzymes by displacing α-KG from the active site:

- **2-hydroxyglutarate (2-HG)** — produced by gain-of-function IDH1/IDH2 mutations; potently inhibits TET2 (demonstrated directly) and by extension TET1 (mechanistically plausible via identical α-KG-binding active site), causing CpG hypermethylation [^figueroa2010]
- **Fumarate and succinate** — accumulate in SDH/FH-mutant tumors; also inhibit TET activity

In aging, mitochondrial dysfunction and shifts in Krebs-cycle intermediate levels may reduce α-KG availability and thereby reduce TET activity, contributing to epigenetic drift. This link is mechanistically plausible but not directly demonstrated in aged non-tumor tissue. #gap/no-mechanism

## Disease associations

- **Acute myeloid leukemia (AML):** TET1 was identified as the MLL fusion partner in t(10;11)(q22;q23) translocations [^tahiliani2009]. Unlike [[tet2]], somatic loss-of-function mutations in TET1 are rare in hematologic malignancies.
- **Glioblastoma:** TET1 is upregulated in glioblastoma stem-like cells; proposed role in maintenance of tumor epigenome.
- **Neurodegenerative disease:** Reduced 5hmC and presumed TET1 activity is associated with Alzheimer's disease cortex (observational; causality unclear). #gap/no-mechanism

## Therapeutic angles: vitamin C as TET cofactor

Ascorbate (vitamin C) acts as a cofactor that reduces Fe³⁺ → Fe²⁺ at the TET active site, regenerating catalytic activity. High-dose vitamin C significantly enhances TET-mediated 5hmC generation in cell culture [^minor2013] and drives Tet-dependent global demethylation in ESCs [^blaschke2013]. This has therapeutic implications in:

- **MDS / AML with TET2 loss:** vitamin C supplementation partially restores TET2 activity and may impede leukemogenesis (clinical trials ongoing) #gap/long-term-unknown
- **Aged tissues:** supraphysiological vitamin C is being explored to boost TET activity and reverse epigenetic drift; no confirmed aging-specific human trial data as of 2026-05-06 #gap/needs-human-replication

Because TET1 is α-KG-dependent (not NAD⁺-dependent), its regulation is **parallel to, not downstream of,** sirtuin/NAD⁺ biology. Cross-link to [[sirtuin]] is noted for completeness; the two pathways converge on epigenetic drift through different biochemical routes.

## Relationship to pluripotency and reprogramming

TET1 is upregulated during somatic cell reprogramming to iPSCs and is directly regulated by pluripotency factors [[oct4]] and [[sox2]] [^koh2011]. TET1-mediated demethylation at somatic loci is required for efficient reprogramming. This positions TET1 as a node connecting the [[induced-pluripotent-stem-cells]] biology and the [[epigenetic-alterations]] hallmark, and as a potential mediator of [[partial-reprogramming]]-based rejuvenation strategies.

## Cross-references

- [[tet2]] — verified; sister enzyme; primary aging/cancer-relevant TET in hematopoietic tissue
- [[tet3]] — R24b sibling stub; primary TET in mature neurons complementing TET1
- [[epigenetic-alterations]] — parent hallmark
- [[partial-reprogramming]] — TET1 upregulated during OSKM-driven reprogramming
- [[oct4]], [[sox2]] — verified; transcriptional regulators of TET1 in pluripotent cells
- [[induced-pluripotent-stem-cells]] — TET1 active in iPSC state
- [[tdg]] — downstream BER partner that excises 5fC/5caC to complete demethylation cycle
- [[sirtuin]] — parallel epigenetic regulator; NAD⁺-dependent vs α-KG-dependent axis

## Limitations and gaps

- #gap/needs-replication — Wagner 2015 documents 5hmC accumulation during brain development but does not demonstrate an aging decline in adult 5hmC levels. Whether neuronal 5hmC or TET1 protein declines with normal human aging (vs. neurodegeneration) requires dedicated aged-cohort studies with adequate sample sizes.
- #gap/needs-human-replication — Cognitive-aging phenotype of Tet1 KO is mouse-only; no human Mendelian genetics equivalent.
- #gap/no-mechanism — Link between mitochondrial/Krebs-cycle dysfunction in aging and TET1 activity suppression is plausible but not demonstrated in aged non-neoplastic tissue.
- #gap/needs-canonical-id — GenAge ID for TET1 not confirmed; entry may exist under the CXXC6 alias or may not be listed.
- `druggability-tier` not populated — no Open Targets entry confirmed; recommend lookup at platform.opentargets.org with Ensembl ENSG00000138336.
- `gtex-aging-correlation` not populated — retrieve via GTEx v2 API per `sops/finding-tissue-expression.md`.
- `mr-causal-evidence` = not-tested — no MR study on TET1 expression vs aging outcomes identified.

## Footnotes

[^tahiliani2009]: doi:10.1126/science.1170116 · Tahiliani M et al. · *Science* 2009 · n/a (biochemical) · in-vitro + in-vivo · model: HEK293 cells + mouse ESCs; original discovery of TET1-mediated 5mC→5hmC conversion · cited ~5,700×
[^ito2010]: doi:10.1038/nature09303 · Ito S et al. · *Nature* 2010 · n/a (biochemical/genetic) · in-vitro + in-vivo · model: mouse ESCs; TET proteins catalyze sequential 5mC→5hmC→5fC→5caC oxidations; TET1 required for ES-cell self-renewal · cited ~2,500×
[^koh2011]: doi:10.1016/j.stem.2011.01.008 · Koh KP et al. · *Cell Stem Cell* 2011 · in-vitro + in-vivo · model: mouse ESCs; TET1/TET2 regulate 5hmC and cell lineage specification; TET1 regulated by OCT4/SOX2 · cited ~774×
[^rudenko2013]: doi:10.1016/j.neuron.2013.08.003 · Rudenko A et al. · *Neuron* 2013 · in-vivo · model: Tet1 KO C57BL/6 male mice (4-month-old); n=10+9 per group for fear-conditioning extinction, n=10+9 for MWM extinction; memory acquisition intact; memory extinction deficits in both contextual fear conditioning (p<0.01) and spatial MWM; Npas4 promoter hypermethylation (~20–45% CpG) vs controls (~3.5–8%); abnormal hippocampal LTD · cited ~446×
[^wagner2015]: doi:10.1002/anie.201502722 · Wagner M et al. · *Angew Chem Int Ed* 2015 · observational · model: human brain (fetal 15-WOP + individuals aged 0.6–85 years, n=2–4 per age group) and mouse brain (C57BL/6, postnatal day 1 to 18 months); LC-MS isotope-dilution quantification of 5hmC, 5mC, 5fC; key finding: 5hmC increases progressively during postnatal brain development, reaching steady-state ~1.2% of cytosines in human adult grey matter (plateau by ~age 22); 5fC declines with development; adult aging decline in 5hmC not demonstrated (insufficient aged-adult sample sizes) · cited ~137×
[^figueroa2010]: doi:10.1016/j.ccr.2010.11.015 · Figueroa ME et al. · *Cancer Cell* 2010 · in-vitro + in-vivo · model: AML patient samples + mouse; IDH1/2 mutations produce 2-HG, impair TET2 catalytic function, cause CpG hypermethylation phenotype · cited ~2,700×
[^blaschke2013]: doi:10.1038/nature12362 · Blaschke K et al. · *Nature* 2013 · in-vitro · model: mouse ESCs; vitamin C drives Tet-dependent global demethylation; effect abolished in Tet1/Tet2 double KO · cited ~865×
[^minor2013]: doi:10.1074/jbc.C113.464800 · Minor EA et al. · *J Biol Chem* 2013 · in-vitro · model: primary mouse embryonic fibroblasts (MEFs, C57BL/6) + HEK-293T + HeLa cells; ascorbate (1–1,000 μM) dose-dependently enhances TET-mediated 5hmC generation up to 4-fold above basal levels; effect abolished by phloretin (ascorbate transporter blocker) and attenuated by Tet1/2/3 siRNA knockdown · cited ~410×
[^uniprot-q8nfu7]: UniProt Q8NFU7 (TET1_HUMAN) · Swiss-Prot reviewed · accessed 2026-05-06
