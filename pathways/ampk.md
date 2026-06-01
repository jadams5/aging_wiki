---
type: pathway
aliases: [AMPK pathway, AMPK signaling, AMP-activated protein kinase, AMPK-mTOR axis]
kegg: hsa04152
reactome: R-HSA-380972
wikipathways: WP1471
key-nodes: ["[[prkaa1]]", "[[prkaa2]]", "[[prkab1]]", "[[prkab2]]", "[[prkag1]]", "[[prkag2]]", "[[lkb1]]", "[[camkk2]]", "[[tsc1-tsc2]]", "[[raptor]]", "[[ulk1]]", "[[acc1]]", "[[pgc1a]]"]
upstream: ["[[energy-stress]]", "[[lkb1]]", "[[camkk2]]", "[[caloric-restriction]]"]
downstream: ["[[mtor]]", "[[autophagy]]", "[[fatty-acid-oxidation]]", "[[mitochondrial-biogenesis]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[disabled-macroautophagy]]", "[[mitochondrial-dysfunction]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "All four primary sources verified against full PDFs. Hardie 2012 (NRM): γ-subunit site numbering and fold-activation corrected; 'direct antagonist' framing qualified. Gwinn 2008 (Mol Cell): Raptor Ser722/Ser792 confirmed correct. Kim 2011 (NCB): ULK1 Ser317/Ser777 confirmed; added caveat that Ser777 is not conserved in human ULK1. Martin-Montalvo 2013 (Nat Commun): 'median' corrected to 'mean' lifespan; exact statistics added; male-only scope noted; higher-dose lifespan shortening quantified."
---

# AMPK signaling pathway

**AMP-activated protein kinase (AMPK)** is the cell's primary energy-stress sensor and a major antagonist of [[mtor|mTOR signaling]] (via both direct Raptor phosphorylation and indirect TSC2/Rheb suppression — see §mTORC1 inhibition below). When cellular ATP drops and AMP/ADP rises — during caloric restriction, exercise, hypoxia, or pharmacological stress — AMPK activates and orchestrates a broad metabolic rebalancing: suppressing anabolic programs (protein synthesis, lipogenesis) while activating catabolism ([[autophagy]], fatty acid oxidation, glycolysis). In aging biology, AMPK activity tends to decline with age, and its activation phenocopies many of the longevity benefits of [[caloric-restriction]]. Genetic manipulation of AMPK orthologs extends lifespan in *C. elegans* and *Drosophila*; pharmacological activation by [[metformin]] extends healthspan in mice and is under active investigation in humans.

> **Naming note:** This page covers the AMPK *pathway*. Individual subunit protein pages, when seeded, will use disambiguating suffixes (`molecules/proteins/prkaa1.md`, etc.) per the wiki's naming convention.

## Heterotrimeric structure and the AMP/ADP/ATP switch

AMPK functions as an obligate heterotrimer of three subunits:

| Subunit | Type | Role | Human isoforms |
|---|---|---|---|
| **α (PRKAA1/2)** | Catalytic | Serine/threonine kinase; contains the T-loop (Thr172) that must be phosphorylated for full activity | α1, α2 |
| **β (PRKAB1/2)** | Regulatory scaffold | Bridges α and γ; contains a glycogen-sensing domain (CBM); anchors the complex to membranes | β1, β2 |
| **γ (PRKAG1/2/3)** | AMP/ADP/ATP sensor | Contains four CBS (cystathionine β-synthase) domains forming two Bateman domains; binds adenine nucleotides with differential affinity | γ1, γ2, γ3 |

The γ subunit carries three regulatory nucleotide-binding sites [^hardie2012]:

- **Site 1** (AMP > ADP >> ATP): allosteric activation; bound AMP conformationally activates the kinase up to ~tenfold (though in practice the observed effect is often smaller due to assay limitations)
- **Site 3** (AMP/ADP competitive with ATP): protects Thr172 from dephosphorylation by PP2A/PP2C when AMP is bound — a key regulatory mechanism that sustains the phosphorylated, active state
- **Site 4**: permanently occupied by AMP; structural role

The ~100-fold increase in AMPK activity is the combined result of Thr172 phosphorylation by upstream kinases (LKB1 or CaMKK2) — not protection from dephosphorylation at site 3 alone. Allosteric activation (site 1) and protection from dephosphorylation (site 3) act additively on top of this phosphorylation. The net result is a highly non-linear switch: a small drop in energy charge (ATP/AMP ratio) produces a large amplified AMPK response, because: (1) AMP rises as ATP falls (both changes are sensed), (2) allosteric activation and (3) protection from dephosphorylation stack multiplicatively [^hardie2012].

## Upstream activating kinases

### LKB1 (STK11) — the canonical activator

**LKB1** (encoded by *STK11*) is the primary upstream AMPK kinase under most conditions. It constitutively phosphorylates AMPK at Thr172, but this phosphorylation is rapidly reversed by PP2C phosphatases under energy-replete conditions. When AMP accumulates, PP2C is sterically blocked by bound AMP, so the phosphorylation becomes stable and AMPK remains active.

LKB1 functions as a heterotrimer with its pseudokinase partner STRAD (STRADα/β) and the scaffolding protein MO25 (CAB39); this complex is required for LKB1 catalytic activity and cytoplasmic localization (Reactome R-HSA-380972: "LKB1 forms a trimeric complex with STRAD and MO25").

**Aging / disease relevance:** LKB1 is the tumor suppressor mutated in **Peutz-Jeghers syndrome** (autosomal dominant; GI hamartomatous polyps + elevated cancer risk). Somatic *STK11* loss-of-function is the most common mutation in non-small-cell lung adenocarcinoma. LKB1 loss eliminates the canonical AMPK activation route, making these tumors highly metabolically flexible.

### CaMKK2 (CAMKK2) — the Ca²⁺ route

**CaMKK2** (calcium/calmodulin-dependent protein kinase kinase 2) phosphorylates AMPK at the same Thr172 site, providing a Ca²⁺-dependent, energy-independent route to activation. This matters in contexts where cytosolic Ca²⁺ spikes without an ATP crisis — notably during muscle contraction and neuronal depolarization. CaMKK2-dependent AMPK activation is LKB1-independent (demonstrated in LKB1-null cell lines).

### TAK1 (MAP3K7) — the inflammatory input

TGF-β-activated kinase 1 (TAK1/MAP3K7) has also been shown to phosphorylate AMPK Thr172 in specific contexts, coupling AMPK to innate immune/NF-κB signaling. This pathway is less characterized than LKB1 or CaMKK2 routes. #gap/needs-replication

## Downstream effectors

### 1. mTORC1 inhibition (dual mechanism)

AMPK suppresses [[mtor|mTORC1]] via two parallel phosphorylation events — ensuring robust energy-checkpoint enforcement:

**a) TSC2 phosphorylation (Ser1387 / Ser1345 in humans):** AMPK phosphorylates TSC2 (tuberin), a component of the TSC1/TSC2 GAP complex. This activates the GAP activity of TSC2 toward the GTPase Rheb, converting Rheb from GTP-bound (mTORC1-activating) to GDP-bound (inactive). Result: mTORC1 is deprived of its lysosomal activator.

**b) Raptor phosphorylation (Ser722 / Ser792):** AMPK directly phosphorylates Raptor, the mTORC1 scaffold/substrate-recruiter. Phospho-Raptor binds 14-3-3 proteins, sterically occluding substrate docking [^gwinn2008]. This provides a TSC-independent brake — important in TSC1/TSC2-deficient tumors.

These two mechanisms create redundant mTORC1 suppression: even if TSC2 signaling is disrupted (as in TSC-related mTORopathies), AMPK can still partially inhibit mTORC1 via Raptor [^gwinn2008].

### 2. ULK1 activation → [[autophagy]]

**ULK1** (the mammalian autophagy-initiating kinase) is regulated in opposite directions by AMPK and mTORC1:

- mTORC1 phosphorylates ULK1 at Ser757 → **inhibits** ULK1 and autophagy
- AMPK phosphorylates ULK1 at Ser317 and Ser777 → **activates** ULK1

When AMPK activates and mTORC1 is suppressed simultaneously (as during nutrient deprivation), these two inputs reinforce each other to maximally de-repress autophagy [^kim2011]. AMPK and ULK1 also interact physically; ULK1 phosphorylates AMPK back at several sites, establishing a feedback regulatory loop.

**Species note:** Ser777 in mouse ULK1 is **not conserved in human ULK1** [^kim2011]. AMPK-dependent phosphorylation of additional sites in human ULK1 may contribute to activation, but the precise human-ULK1 AMPK sites require further characterization. #gap/needs-human-replication

This axis — AMPK → ULK1 → autophagy — is considered a major mechanism by which exercise and caloric restriction promote autophagic flux and proteostasis in aging.

### 3. Acetyl-CoA carboxylase (ACC) phosphorylation → fatty acid metabolism

AMPK phosphorylates and inactivates **ACC1** (Ser79) and **ACC2** (Ser212), the rate-limiting enzymes for converting acetyl-CoA to malonyl-CoA in fatty acid synthesis. Malonyl-CoA is both the FA synthesis precursor and an allosteric inhibitor of CPT1 (the mitochondrial fatty acid importer). AMPK thus:

- Reduces FA synthesis (malonyl-CoA falls)
- De-represses CPT1 → increases mitochondrial β-oxidation (FA catabolism)

This is the most acutely reversible metabolic effect of AMPK — it acts within minutes. ACC phosphorylation is the canonical pharmacodynamic biomarker for AMPK activation in tissue studies.

### 4. SREBP1 inhibition → lipogenesis suppression

**SREBP1c** (sterol regulatory element-binding protein 1c), the master transcriptional activator of de novo lipogenesis, is inhibited by AMPK through multiple mechanisms:
- AMPK phosphorylates SREBP1 directly (Ser372), blocking proteolytic cleavage and nuclear translocation
- AMPK also inhibits SREBP1 indirectly by reducing mTORC1 → mTORC1 normally promotes SREBP1 processing

This connects AMPK to hepatic lipid metabolism — relevant to NAFLD and age-associated metabolic dysfunction.

### 5. PGC-1α activation → mitochondrial biogenesis

**PGC-1α** (peroxisome proliferator-activated receptor-gamma coactivator 1-alpha), the master regulator of mitochondrial biogenesis, is activated downstream of AMPK through:
- Direct AMPK phosphorylation of PGC-1α (Thr177/Ser538 in mouse = T178/S539 in human UniProt Q9UBK2 per Jager 2007 — see [[pgc-1alpha]] verified R13)
- AMPK-mediated activation of SIRT1 (via elevated NAD⁺ from increased fatty acid oxidation) → SIRT1 deacetylates and further activates PGC-1α

PGC-1α activation drives transcription of nuclear-encoded mitochondrial genes (ETC components, TCA cycle enzymes, mtDNA replication machinery). This is one mechanism by which exercise and CR maintain mitochondrial mass and quality with age — a counterpoint to the mitochondrial deterioration seen in [[mitochondrial-dysfunction|mitochondrial dysfunction]]. #gap/needs-human-replication

### 6. FOXO transcription factor activation → stress resistance

AMPK phosphorylates **FOXO3a** (at multiple Ser residues distinct from AKT phosphorylation sites), contributing to FOXO nuclear retention and transcriptional activation. FOXO target genes include MnSOD, catalase, BIM, GADD45, and several autophagy genes (BNIP3, LC3). In *C. elegans*, DAF-16 (the FOXO ortholog) is required for the longevity conferred by *aak-2* (AMPK) gain-of-function — placing FOXO downstream of AMPK in the longevity pathway.

## Role in aging

### AMPK activity declines with age

Basal AMPK activity decreases in multiple tissues (skeletal muscle, liver, hypothalamus) during normal aging in rodents, associated with reduced LKB1 expression and altered AMP/ATP sensing. This decline may contribute to the age-associated increases in mTORC1 activity, decreased autophagy, lipid accumulation, and mitochondrial deterioration. #gap/needs-human-replication — most data in rodents.

### Caloric restriction and AMPK

[[caloric-restriction]] (CR) activates AMPK primarily via the LKB1 route (reduced nutrients → reduced ATP → elevated AMP). A substantial fraction of CR's transcriptomic and metabolic effects overlap with those of AMPK activation, suggesting AMPK is a key effector of CR's geroprotective action. In *C. elegans*, CR-mediated lifespan extension requires *aak-2* (the worm AMPK α subunit ortholog); *aak-2* loss-of-function largely abolishes CR longevity. #gap/needs-human-replication

### Model organism longevity evidence

| Organism | Genetic intervention | Lifespan effect |
|---|---|---|
| *C. elegans* | *aak-2* gain-of-function (constitutively active) | ~13% lifespan extension (epistasis with *daf-16*/FOXO) |
| *C. elegans* | *aak-2* loss-of-function | Shortened lifespan; abolished CR benefit |
| *D. melanogaster* | AMPK overexpression (neuronal) | ~30% lifespan extension #gap/needs-replication |
| *Mus musculus* | Metformin (indirect AMPK activator) | 5.83% **mean** lifespan extension in male C57BL/6 (0.1% w/w in diet; Gehan-Breslow p=0.02) [^martinmontalvo2013] |

Extrapolation quality:

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (α, β, γ subunit orthologs conserved; LKB1 and CaMKK2 conserved) |
| Phenotype conserved in humans? | partial (AMPK activation by exercise, metformin, caloric restriction demonstrated in humans; longevity effect not established) |
| Replicated in humans? | no — no human genetic or interventional lifespan data; surrogate endpoint trials ongoing |

### Exercise as a physiological AMPK activator

Skeletal muscle AMPK activates rapidly during exercise (within minutes of contraction onset), driven by both ATP consumption (LKB1 route) and Ca²⁺ release (CaMKK2 route). Chronic exercise training increases basal AMPK expression and sensitivity, which may underlie exercise's effects on mitochondrial biogenesis, insulin sensitivity, and autophagy induction. This is among the best-characterized physiological AMPK activation contexts in humans.

## Pharmacology

### Indirect activators

| Agent | Mechanism | Notes |
|---|---|---|
| [[metformin]] | Complex I inhibition → reduced ATP production → elevated AMP/ATP → AMPK activation (LKB1-dependent) | First-line type 2 diabetes drug; extends healthspan/lifespan in mice [^martinmontalvo2013]; TAME trial (human longevity) ongoing |
| Salicylate (aspirin metabolite) | Allosteric AMPK activation at β-subunit CBM domain (distinct from AMP site) | Mechanistically distinct from metformin; additive with metformin in some models |
| AICAR (acadesine) | AMP mimetic; phosphorylated to ZMP intracellularly; binds γ subunit | Research tool; used to confirm AMPK-dependent effects; limited clinical use |
| 2-deoxyglucose (2-DG) | Glycolysis inhibition → ATP depletion → AMPK | Experimental only |

### Direct allosteric activators

| Agent | Mechanism | Notes |
|---|---|---|
| A-769662 | Synthetic compound; binds at the α/β subunit interface; activates and protects from dephosphorylation | Originally discovered at Abbott; historically important; β1-subunit selective; largely a research tool |
| Newer 991/PF-739 class | Improved direct activators with better selectivity and oral bioavailability | Under preclinical and early clinical investigation for metabolic disease |

**Metformin and aging:** Martin-Montalvo et al. (2013) demonstrated that low-dose metformin (0.1% w/w in diet, yielding ~0.45 mM serum concentration) extended **mean** lifespan by 5.83% (χ²=5.46, p=0.02, Gehan-Breslow test) and improved healthspan markers in **male** C57BL/6 mice [^martinmontalvo2013]. A second cohort of male B6C3F1 mice showed a 4.15% mean lifespan extension that did not reach significance (p=0.064). Molecular correlates included increased pAMPK (Thr172) by 27% (p<0.05) and increased ACC phosphorylation in liver. Higher dose (1% w/w) significantly shortened mean lifespan by 14.4% (p<0.001), suggesting a hormetic dose-response. The study was conducted exclusively in males — sex-generalizability is untested. #gap/needs-human-replication The Targeting Aging with Metformin (**TAME**) trial — Barzilai et al. 2016 design paper, planned ~3,000 healthy older adults aged 65–79 (primary endpoint: composite of age-related diseases) — **does not currently have a ClinicalTrials.gov registration** as of 2026-05; NCT02432287 (sometimes mis-cited as TAME) is the unrelated MILES pilot trial (n=16, completed 2017). TAME first-results timelines previously reported as ~2027–2028 are speculative pending registration. See [[metformin]] for full status. #gap/long-term-unknown #gap/dose-response-unclear

## Cross-pathway connections

- **[[mtor]]** — AMPK suppresses mTORC1 via two parallel mechanisms: (1) direct phosphorylation of Raptor (Ser722/Ser792) and (2) indirect inhibition via TSC2 phosphorylation → Rheb-GTP depletion [^gwinn2008]. The "direct antagonist" framing oversimplifies: the TSC2 arm is indirect (TSC2 → Rheb → mTOR). The two pathways form a reciprocal switch: nutrient/energy abundance → mTOR on, AMPK off; energy stress → AMPK on, mTOR off. Many longevity interventions act by tilting this balance toward AMPK/low-mTOR (CR, exercise, metformin, rapamycin via different nodes).
- **[[autophagy]]** — AMPK is a major positive regulator via ULK1 activation + mTORC1 suppression. Autophagy flux may mediate a substantial fraction of AMPK's geroprotective effects.
- **[[caloric-restriction]]** — CR is the prototypical physiological AMPK activator. AMPK likely mediates a significant portion of CR's effects on metabolism, autophagy, and lifespan (epistasis in worms).
- **[[metformin]]** — The most widely used pharmaceutical AMPK activator; largest candidate geroprotection trial in humans (TAME).
- **[[deregulated-nutrient-sensing]]** — AMPK activation is a hallmark-correcting intervention for deregulated nutrient sensing; declining AMPK with age contributes to the hallmark.

## Limitations and gaps

- **Human longevity evidence absent:** All genetic longevity data is in invertebrates (*C. elegans*, *Drosophila*); mouse lifespan data is pharmacological (metformin), not direct AMPK manipulation. No human genetic variant has been conclusively linked to AMPK-dependent longevity. #gap/needs-human-replication
- **Isoform specificity matters:** α1 vs. α2, β1 vs. β2, γ1/2/3 complexes have distinct tissue distributions and substrate preferences. Most pharmacological activators have isoform preferences (e.g., A-769662 is β1-selective). Tissue-specific effects may partially explain hormetic dose-response seen with metformin. #gap/needs-replication
- **AMPK vs. other metformin targets:** Metformin's effects may not be entirely AMPK-dependent. In LKB1-null cells, metformin still reduces cell growth. GPR132, HMGA1, and mitochondrial complex I inhibition without AMPK activation have been proposed as alternative mediators. #gap/contradictory-evidence
- **Age-related AMPK decline mechanism unknown:** Why AMPK sensitivity falls with age (reduced LKB1? altered nucleotide ratios? epigenetic? mitochondrial uncoupling?) is not established in humans. #gap/no-mechanism
- **Direct allosteric activator clinical development:** No direct AMPK activator has reached late-phase clinical trials for any aging-related indication as of 2026. Most remain metabolic disease candidates.

## Footnotes

[^hardie2012]: doi:10.1038/nrm3311 · review · model: biochemical/mammalian cell systems · n=N/A · ~4260 citations — canonical mechanistic review of AMPK structure, nucleotide sensing, upstream kinases, and downstream substrates by D.G. Hardie (Dundee)

[^gwinn2008]: doi:10.1016/j.molcel.2008.03.003 · in-vitro + in-vivo · model: HEK293 cells + mouse tissues · n=N/A · ~3700 citations — demonstrates that AMPK directly phosphorylates Raptor (Ser722/Ser792) to inhibit mTORC1 independently of TSC2

[^kim2011]: doi:10.1038/ncb2152 · in-vitro + in-vivo · model: MEFs, HEK293, mouse liver · n=N/A · ~6800 citations — demonstrates that both AMPK and mTOR phosphorylate ULK1 at distinct sites to oppositely regulate autophagy initiation

[^martinmontalvo2013]: doi:10.1038/ncomms3192 · in-vivo · model: male C57BL/6 mice (n=64 metformin, n=83 control) + male B6C3F1 replication cohort · randomized · p=0.02 (Gehan-Breslow) — metformin (0.1% w/w in diet) extends **mean** lifespan 5.83% in C57BL/6; 4.15% non-significant extension in B6C3F1; higher dose (1% w/w) shortened lifespan by 14.4%; pAMPK (Thr172) increased 27% in liver; study exclusively in males
