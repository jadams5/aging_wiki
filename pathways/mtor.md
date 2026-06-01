---
type: pathway
aliases: [mTOR pathway, mTOR signaling, mTORC1, mTORC2, mechanistic target of rapamycin, mammalian target of rapamycin]
kegg: hsa04150
reactome: R-HSA-165159
wikipathways: WP3318
key-nodes: ["[[mtor-kinase]]", "[[raptor]]", "[[rictor]]", "[[mlst8]]", "[[deptor]]", "[[s6k1]]", "[[4ebp1]]", "[[tsc1-tsc2]]", "[[rheb]]"]
upstream: ["[[insulin-igf1]]", "[[ampk]]", "[[amino-acid-sensing]]"]
downstream: ["[[autophagy]]", "[[protein-synthesis]]", "[[lipogenesis]]", "[[ribosome-biogenesis]]", "[[mitochondrial-biogenesis]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[disabled-macroautophagy]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Bjedov 2010 and Harrison 2009 claims verified against primary-source PDFs. Mannick 2014 (doi:10.1126/scitranslmed.3009892) is closed-access (not_oa per a local paper archive) — n=218 and seroconversion endpoint claims unverified. Yeast/worm lifespan rows (~20–40%, ~30–50%) are not cited to primary sources and were not verified. KEGG/Reactome/WikiPathways identifiers in frontmatter not independently re-checked. 2026-05-04: SIRT3-FAO-NAD+ cross-talk note added from Li et al. 2023 (bioRxiv preprint; PMC9882180); flagged as preliminary."
---

# mTOR signaling pathway

The **mechanistic Target of Rapamycin** pathway is a master nutrient-sensing and growth-control hub that integrates signals from amino acids, growth factors (insulin, IGF-1), cellular energy state ([[ampk]]), oxygen, and stress to coordinate protein synthesis, [[autophagy]], lipogenesis, ribosome biogenesis, and mitochondrial dynamics. Pharmacological mTOR inhibition (rapamycin) is the **most-validated longevity intervention** across model organisms — extending lifespan in yeast, *C. elegans*, *Drosophila*, and multiple mouse strains, including in the rigorous NIA Interventions Testing Program.

> **Naming note:** This page is the canonical `[[mtor]]` wikilink target — it covers the *pathway*. The mTOR kinase as an individual protein will, when seeded, live at `molecules/proteins/mtor-kinase.md` to avoid wikilink ambiguity.

## Two complexes: mTORC1 and mTORC2

mTOR (a serine/threonine kinase of the PIKK family) functions as the catalytic core of two distinct complexes with non-overlapping substrate specificity:

| Complex | Defining partner | Rapamycin sensitivity | Key substrates | Output |
|---|---|---|---|---|
| **mTORC1** | [[raptor]] | Acutely inhibited | [[s6k1]], [[4ebp1]], [[ulk1]], TFEB | Protein synthesis ↑, autophagy ↓, lipogenesis ↑ |
| **mTORC2** | [[rictor]] | Mostly insensitive (chronic dosing inhibits in some tissues) | AKT (Ser473), SGK1, PKCα | Cell survival, cytoskeletal remodeling, glucose uptake |

mTORC1 is the primary aging-relevant complex; mTORC2 inhibition is the source of most rapamycin side effects (insulin resistance, dyslipidemia) and complicates clinical translation.

## Upstream inputs

mTORC1 activity at the lysosomal surface requires two parallel inputs:

1. **Amino acids** (especially leucine, arginine) — sensed by Sestrin2, CASTOR1, SAMTOR; signal through GATOR1/GATOR2 and the Rag GTPases to recruit mTORC1 to the lysosome.
2. **Growth factor signaling** ([[insulin-igf1]], cytokines) — activate the [[pi3k-akt-pathway|PI3K–AKT axis]], which phosphorylates and inhibits the [[tsc1-tsc2|TSC1/TSC2]] GAP complex; this releases [[rheb]]-GTP at the lysosome, the direct mTORC1 activator.

**Negative inputs:**
- **Energy stress**: low ATP → high AMP → [[ampk]] activation → AMPK phosphorylates TSC2 (activating) and Raptor (inhibiting) → mTORC1 ↓
- **Hypoxia**, **DNA damage** (via REDD1, p53), **glucose deprivation** all converge on TSC1/TSC2 to suppress mTORC1.

## Downstream effectors (mTORC1)

| Substrate | Effect on substrate | Cellular consequence |
|---|---|---|
| [[s6k1]] (S6 kinase 1) | Phosphorylated → activated | Phosphorylates rpS6, eIF4B → translation initiation; negative feedback on IRS-1 (insulin signaling) |
| [[4ebp1]] (eIF4E-binding protein 1) | Phosphorylated → released from eIF4E | Allows cap-dependent translation initiation |
| [[ulk1]] (autophagy initiation kinase) | Phosphorylated → inhibited | Suppresses [[autophagy]] |
| TFEB | Phosphorylated → cytoplasmic retention | Suppresses lysosomal biogenesis transcription program |
| SREBP1/2 | Indirectly activated | Lipogenesis ↑ |

## Role in aging

mTOR inhibition is the most-replicated lifespan-extending intervention in aging biology.

### Conserved across organisms

| Organism | Intervention | Lifespan extension |
|---|---|---|
| *S. cerevisiae* | TOR1 deletion / rapamycin | ~20–40% chronological + replicative |
| *C. elegans* | `let-363` (TOR ortholog) RNAi | ~30–50% |
| *D. melanogaster* | dTOR inhibition / rapamycin | ~7–16% median lifespan (w^Dah^ females, 50–400 µM, standard food) [^bjedov2010] |
| *Mus musculus* (genetically heterogeneous) | Rapamycin from late life (600 days) | ~9–14% (♀ +14%, ♂ +9%) — **NIA ITP first positive intervention** [^harrison2009] |

The mouse result is particularly important — the NIA Interventions Testing Program (ITP) is a multi-site protocol designed to filter out single-lab effects. Rapamycin was the first compound to extend mouse lifespan when started late in life.

### Mechanism of geroprotection

Two mTORC1-attributable actions are most-cited:

1. **De-repression of [[autophagy]]** — mTORC1 inhibits ULK1; rapamycin lifts this brake, enabling clearance of damaged organelles and protein aggregates. Ubiquitous knockdown of *Atg5* (an autophagy gene required for autophagosome formation) by RNAi completely abolished rapamycin-mediated lifespan extension in *Drosophila* [^bjedov2010], supporting autophagy as a required downstream effector. The paper also showed 4E-BP (translational repressor) is a parallel required effector — both autophagy and reduced translation contribute, and their combined requirement is not yet resolved [^bjedov2010].
2. **Reduction of protein synthesis** — fewer error-prone translation events; reduced load on proteostasis. Connects to the Blagosklonny "hyperfunction" theory — chronic anabolic signaling drives age-related disease even without "damage" accumulation.

### Connection to other aging pathways

- **[[insulin-igf1|IIS]]** — direct upstream of mTOR via PI3K–AKT–TSC. Long-lived IIS-deficient organisms (e.g., *daf-2* worms, GH/IGF1-deficient dwarf mice) likely owe much of their phenotype to reduced mTOR signaling.
- **[[ampk]]** — antagonizes mTORC1 via two arms: **directly** via inhibitory phosphorylation of [[raptor]] (Ser722/Ser792), and **indirectly** via activating phosphorylation of TSC2 → reduced Rheb-GTP → mTORC1 off. The TSC2 arm is the indirect one; only the Raptor arm is mechanistically direct. AMPK activators ([[metformin]], exercise) phenocopy partial mTORC1 inhibition. (Primary citations: Gwinn 2008 for Raptor sites; Hardie 2012 review for the two-arm framework — see [[ampk]].)
- **[[caloric-restriction]]** — reduces mTOR signaling via reduced amino acid + growth factor input. In *Drosophila*, rapamycin extends median and maximum lifespan **beyond** the maximum achieved by dietary restriction, and extends lifespan at all food concentrations tested — indicating rapamycin captures DR mechanisms but also engages additional longevity pathways [^bjedov2010]. The relationship between CR and TOR varies by organism: in yeast and worms, DR does not further extend lifespan when TOR is already reduced, suggesting convergence; in flies the data indicate partial independence. #gap/needs-replication — the epistasis picture is organism-specific and not fully resolved. #gap/unsourced — a citation for the yeast/worm convergence claim is needed before asserting it as a general rule.
- **[[sirtuin|NAD+/Sirtuin axis]] (SIRT3/FAO intersection)** — *(preprint, not peer-reviewed)* A 2023 bioRxiv preprint used genome-wide CRISPRa screening in K562 cells to argue that **fatty acid oxidation (FAO)** is a convergence point of the mTOR/insulin and NAD+ pathways. The proposed mechanism: mTORC1 targets **LPIN1** (a phosphatidate phosphatase controlling lipid flux toward FAO vs. lipid synthesis), while the NAD+-dependent mitochondrial deacetylase **SIRT3** regulates FAO enzyme activity. SIRT3 was the top validated genetic hit for a dual-pathway compound (BIOIO-1001); LPIN1 was directionally consistent but sub-threshold in the screen [^li2023preprint]. The paper does not establish direct mTOR regulation of NAD+ pools or vice versa — the cross-talk is inferred from shared lipid-metabolic targets. **Not yet replicated; mechanistic directionality not established.** #gap/needs-replication

## Pharmacology

| Class | Examples | Target | Notes |
|---|---|---|---|
| Macrolide rapalogs | [[rapamycin]] (sirolimus), everolimus, temsirolimus, ridaforolimus | mTORC1 (allosteric, via FKBP12) | Acute mTORC2 sparing; chronic dosing partially inhibits mTORC2 in some tissues |
| ATP-competitive mTOR inhibitors | Torin1, AZD8055, MLN0128 | mTORC1 + mTORC2 (catalytic) | More potent mTORC1 inhibition than rapalogs; not used clinically for aging |
| Dual PI3K/mTOR inhibitors | NVP-BEZ235, GDC-0980 | mTORC1, mTORC2, PI3K | Oncology only — too toxic for aging applications |

**Rapamycin in human aging trials:** the first geroprotector trial in humans was Mannick et al. 2014 — RAD001 (everolimus) in healthy elderly improved influenza vaccine antibody response, reversing immunosenescence-associated immune dysfunction [^mannick2014]. #gap/no-fulltext-access — Mannick 2014 is closed-access (not_oa per a local paper archive); the n=218 figure and "influenza vaccine seroconversion" primary endpoint stated in the footnote below have not been verified against the full PDF. PEARL trial (rapamycin in healthy adults, 2021–2024) is the largest interventional aging-focused mTOR inhibitor trial in humans to date.

#gap/dose-response-unclear — Optimal human dosing for geroprotection (vs the much higher immunosuppressive dose used in transplant medicine) is not established. PEARL used 5 mg/week intermittent.

## Limitations and concerns

- Rapamycin chronic dosing causes **insulin resistance**, **dyslipidemia**, **mouth ulcers**, **immunosuppression** (its original indication). Aging applications use intermittent dosing (e.g., once-weekly) to spare mTORC2.
- mTORC2 substrates affect glucose homeostasis — long-term metabolic consequences of partial mTORC2 inhibition in healthy aging humans are unknown. #gap/long-term-unknown
- Most aging-relevant data is from **mice**; human data is limited to surrogate-endpoint trials (immune function, biological-age clocks).

## Footnotes

[^bjedov2010]: doi:10.1016/j.cmet.2009.11.010 · in-vivo (Drosophila) · original research, multiple genetic backgrounds and food concentrations · model: Drosophila melanogaster (w^Dah^, w^1118^, yw strains; ♀ primary, ♂ secondary) · effective doses 50–400 µM; mechanism via TORC1 exclusively (not IIS, not AMPK); autophagy and 4E-BP both required effectors; rapamycin extends lifespan beyond DR maximum
[^harrison2009]: doi:10.1038/nature08221 · in-vivo (mouse) · multi-site interventional (NIA ITP, 3 sites: TJL, UM, UT); total cohort 1,960 mice (674 controls + 317–328 per treatment arm) · model: genetically heterogeneous UM-HET3 mice (CB6F1♀ × C3D2F1♂); both sexes; rapamycin started 600 days of age · maximal lifespan (90th percentile): ♀ +14%, ♂ +9% pooled; mean lifespan: ♀ +13%, ♂ +9%; p<0.0001 (log-rank) · note: pre-600-day diet differences between sites complicate male interpretation at UT/UM
[^mannick2014]: doi:10.1126/scitranslmed.3009892 · randomized, double-blind, placebo-controlled · n=218 elderly volunteers · model: humans · primary endpoint: influenza vaccine seroconversion
[^li2023preprint]: [[studies/li-2023-dual-mtor-nad-gerotherapy]] · doi:10.1101/2023.01.16.523975 · PMC9882180 · in-vivo + in-vitro + in-silico · **preprint — not peer-reviewed** · n=6–13/group (NASH models); ALS SOD1-G93A mice (n not stated) · model: K562 cells (CRISPRa screen); C57BL/6J mice; human iPSC-derived motor neurons; SOD1-G93A transgenic mice · SIRT3 top validated CRISPRa hit; LPIN1 directionally consistent but sub-threshold; mTOR-NAD+ cross-talk inferred via shared FAO regulation, not direct molecular epistasis demonstrated · #gap/needs-replication
