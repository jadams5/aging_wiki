---
type: protein
aliases: [HCAR2, hydroxycarboxylic acid receptor 2, niacin receptor 1, NIACR1, HCA2, HM74A, PUMA-G]
uniprot: Q8TDS4
ncbi-gene: 338442
hgnc: 24827
ensembl: ENSG00000182782
genage-id: null
mouse-ortholog: Hcar2 (also known as Puma-g)
pathways: ["[[scfa-signaling]]", "[[ketogenesis-pathway]]", "[[g-protein-coupled-receptor-pathway]]"]
hallmarks: ["[[chronic-inflammation]]", "[[deregulated-nutrient-sensing]]", "[[dysbiosis]]"]
sens-categories: []
druggability-tier: 1
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Tunaru 2003 (10.1038/nm824) and Singh 2014 (10.1016/j.immuni.2013.12.007) verified against primary source PDFs. Wise 2003, Taggart 2005, Thangaraju 2009, Youm 2015, Moutinho 2022, and AIM-HIGH 2011 not yet verified against full PDFs (archive status: pending/not checked this pass). Canonical-DB identity fields (UniProt Q8TDS4, NCBI Gene 338442, HGNC 24827, Ensembl ENSG00000182782) not independently re-verified against databases this pass."
---

# GPR109A (HCAR2)

A Gαi/o-coupled receptor that functions as a molecular integrator of three distinct metabolic signals: niacin (high-affinity pharmacological ligand), D-β-hydroxybutyrate (BHB; endogenous ketone body), and butyrate (low-affinity; gut-derived SCFA). Expressed on adipocytes, immune cells (macrophages, microglia, neutrophils), and colonic epithelium. Connects nutrient-sensing cues from fasting, ketogenic diet, and gut microbiome to anti-inflammatory and metabolic programs — making it a mechanistic link between several longevity-associated interventions and their downstream anti-inflammaging effects.

## Identity

- **UniProt:** Q8TDS4 (HCAR2_HUMAN)
- **NCBI Gene:** 338442
- **HGNC symbol:** HCAR2
- **Ensembl:** ENSG00000182782
- **Mouse ortholog:** Hcar2 (historically called Puma-g in deorphanization literature)
- **Length:** 363 amino acids (canonical isoform); 7 transmembrane helices (class A GPCR)

## Structure and signaling

GPR109A is a rhodopsin-class (class A) GPCR. Upon ligand binding, it couples to Gαi/o, suppressing adenylyl cyclase activity and reducing intracellular cAMP [^tunaru2003]. Reduced cAMP:

- In **adipocytes**: inhibits protein kinase A (PKA) → reduces phosphorylation and activation of hormone-sensitive lipase (HSL) → anti-lipolytic effect. This is the canonical mechanism underlying niacin's triglyceride-lowering action.
- In **immune cells**: downstream effects are more complex, involving inhibition of NF-κB and NLRP3 inflammasome activity through mechanisms that partially overlap with but are distinct from direct BHB-NLRP3 inhibition (see below).

A key regulatory phosphorylation site is at position Ser328; the disulfide bond between Cys100–Cys177 stabilizes the extracellular loop structure required for ligand docking.

## Ligands

| Ligand | Affinity (EC50) | Source | Physiological context |
|---|---|---|---|
| Nicotinic acid (niacin) | ~0.1 µM (HM74A, cAMP assay) [^wise2003]; ~1 µM (human HM74) / ~3 µM (mouse PUMA-G) in Ca²⁺ mobilization assay [^tunaru2003] | Exogenous / diet | Pharmacological dyslipidemia treatment; trace dietary amounts insufficient for receptor occupancy |
| D-β-hydroxybutyrate (BHB) | ~0.7 mM | Endogenous ketone body | Fasting, prolonged exercise, ketogenic diet; plasma concentrations reach 1–5 mM in fasting/ketosis |
| Butyrate | ~1–2 mM | Microbial fermentation | Colonic lumen concentrations 1–10 mM in fiber-replete microbiome |

The receptor was initially designated an "orphan" GPCR. Two groups concurrently deorphanized it in 2003, identifying nicotinic acid as its high-affinity ligand [^tunaru2003][^wise2003]. BHB was identified two years later as an endogenous low-to-mid-affinity agonist [^taggart2005]. Butyrate was characterized as an additional low-affinity colonic agonist in the Thangaraju 2009 work [^thangaraju2009].

## Expression and tissue context

Expression is highest in **adipose tissue** and **spleen** (UniProt annotation). Additional expression confirmed in:

- **Mature neutrophils** (but not immature neutrophils or eosinophils) — receptor activation triggers cAMP reduction and promotes neutrophil apoptosis
- **Macrophages** and **microglia** — anti-inflammatory signaling (see below)
- **Colonic epithelium** — mediates butyrate's anti-proliferative and tumor-suppressive effects

Expression is notably absent from most other gastrointestinal epithelial cell types and from most circulating lymphocytes. #gap/needs-human-replication — most expression data derive from mouse studies; human tissue atlas data should be cross-checked against GTEx/Human Protein Atlas.

## Role in aging

### Anti-inflammaging via BHB and butyrate signaling

Chronic low-grade inflammation ([[chronic-inflammation]]) is one of the most reproducible correlates of mammalian aging (inflammaging). GPR109A is positioned as a receptor that converts fasting- and microbiome-derived signals into anti-inflammatory outputs:

- **BHB → GPR109A → macrophage suppression:** Fasting and caloric restriction raise plasma BHB to concentrations sufficient for GPR109A occupancy. In macrophages and microglia, GPR109A activation suppresses NF-κB-dependent inflammatory gene expression. Note: BHB also inhibits NLRP3 inflammasome via a separate, receptor-independent mechanism (potassium efflux inhibition) [^youm2015]; dissecting the GPR109A-dependent vs independent contributions of BHB to inflammasome suppression requires GPR109A-null models. #gap/needs-replication

- **Butyrate → colonic Treg homeostasis:** Singh et al. 2014 (Immunity) showed that GPR109A is required for butyrate-induced colonic regulatory T cell (Treg) differentiation and IL-18 production in colonocytes [^singh2014]. GPR109A-knockout mice had reduced colonic Tregs and increased susceptibility to colitis. This places GPR109A downstream of the gut microbiome's butyrate output and upstream of colonic immune tolerance — a key inflammaging-relevant circuit. #gap/needs-human-replication

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Human HCAR2 shares ~87% amino acid identity with mouse Hcar2; functional conservation demonstrated for niacin and BHB signaling |
| Phenotype conserved in humans? | partial | Niacin's anti-lipolytic effect is well-documented in humans; BHB/butyrate immune-modulatory effects have limited human evidence |
| Replicated in humans? | no | Singh 2014 Treg data are mouse-only; BHB anti-inflammatory human trials exist but GPR109A contribution unresolved |

### Neuroinflammation and Alzheimer's disease

GPR109A (HCAR2) is expressed by **microglia** in the brain. In a 5xFAD mouse model:

- HCAR2 expression increased in plaque-associated microglia, suggesting receptor upregulation in response to amyloid pathology [^moutinho2022]
- Genetic deletion of HCAR2 impaired microglial phagocytic responses and worsened amyloid burden and cognitive deficits
- Pharmacological activation with niacin (Niaspan) reduced amyloid plaques, attenuated neuronal loss, and restored working memory performance
- Epidemiological correlation: higher dietary niacin intake associated with reduced AD risk in the analyzed cohort (observational; not shown to be GPR109A-mediated)

This work positions HCAR2 as part of the microglial homeostatic response to amyloid — relevant to [[chronic-inflammation]] and potentially to the neurodegenerative component of brain aging. #gap/needs-replication — single lab; independent replication needed.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | partial | Human microglia express HCAR2; amyloid-driven upregulation not yet confirmed in human brain |
| Phenotype conserved in humans? | partial | Epidemiological niacin-AD correlation is observational; no interventional human data |
| Replicated in humans? | no | 5xFAD model data only |

### Niacin pharmacology and the AIM-HIGH/HPS2-THRIVE context

Niacin is FDA-approved for dyslipidemia. Its primary mechanisms include:

1. Anti-lipolytic action in adipocytes via GPR109A → reduced hepatic VLDL synthesis → lower triglycerides, raised HDL
2. Direct effects on hepatic lipid metabolism (GPR109A-independent in liver, since liver expression is low)

However, large RCTs **failed** to show cardiovascular benefit from niacin added to statin therapy:

- AIM-HIGH (n=3,414): niacin added to simvastatin did not reduce cardiovascular events vs simvastatin alone [^aim-high2011] #gap/contradictory-evidence
- HPS2-THRIVE (n=25,673): extended-release niacin + laropiprant showed no benefit and significantly increased adverse events including myopathy, infection, and bleeding

These failures suggest that raising HDL via niacin does not reduce CV risk in statin-treated patients, and that the flushing/inflammation associated with high-dose niacin (mediated partly through prostaglandin D2 release downstream of GPR109A activation in Langerhans cells) may offset benefits. **GPR109A as an anti-aging target should be evaluated separately from the failed niacin-dyslipidemia indication** — the relevant biology for aging involves BHB and butyrate signaling at physiological receptor occupancy, not pharmacological niacin dosing.

**Aging-context tier-1 rationale.** Niacin (nicotinic acid) is FDA-approved for dyslipidemia (high-affinity pharmacological agonist of GPR109A), not for an aging-rejuvenation indication, and the AIM-HIGH and HPS2-THRIVE outcome trials failed to show added cardiovascular benefit on top of statins. The aging-context tier-1 designation reflects GPR109A's role as the receptor that integrates fasting-derived BHB and microbiome-derived butyrate into anti-inflammaging signals (macrophage / microglial NF-κB suppression, colonic Treg homeostasis), connecting [[caloric-restriction]] / [[ketogenic-diet]] / dietary fiber to [[chronic-inflammation]] modulation. Strict Open Targets `Approved Drug = true` for an aging indication does not apply. #gap/no-mechanism — the precise downstream effectors coupling GPR109A → NF-κB suppression in macrophages are not fully established.

## Connection to longevity interventions

GPR109A sits at the intersection of several interventions with documented pro-longevity effects:

- **[[caloric-restriction]]** and **[[intermittent-fasting]]**: both raise plasma BHB into the 0.5–5 mM range needed for GPR109A occupancy, providing a mechanistic route from caloric restriction → BHB → GPR109A → anti-inflammaging
- **[[ketogenic-diet]]**: raises BHB to the highest sustained concentrations among dietary interventions; most direct pharmacological challenge of GPR109A
- **Gut microbiome / dietary fiber**: butyrate produced by colonic fermentation (by *Faecalibacterium prausnitzii*, *Roseburia* spp., *Butyricicoccus*, among others) activates GPR109A in colonocytes and macrophages — one mechanistic route from microbiome diversity → colonic immune homeostasis

Note: GPR109A-mediated signaling is functionally distinct from FFAR2 ([[gpr43]]) and FFAR3 ([[gpr41]]) — both of which bind short-chain fatty acids (acetate, propionate, butyrate) at micromolar-to-millimolar affinity. GPR109A has no affinity for acetate or propionate and binds butyrate with lower affinity than FFAR2. The SCFA receptor cluster should be evaluated as complementary rather than redundant.

## Pathway membership

- [[scfa-signaling]] — canonical GPR109A/FFAR2/FFAR3 axis
- [[ketogenesis-pathway]] — BHB as endogenous ligand; fasting-induced ketogenesis feeds receptor
- [[g-protein-coupled-receptor-pathway]] — Gαi/o coupling; adenylyl cyclase inhibition; cAMP reduction

## Limitations and gaps

- `#gap/needs-human-replication` — Singh 2014 colonic Treg homeostasis data are mouse-only; human colonic biopsy studies showing GPR109A-dependent Treg induction are lacking
- `#gap/needs-human-replication` — Moutinho 2022 microglia/amyloid findings are 5xFAD mouse model; human microglial HCAR2 upregulation in AD not confirmed in single-cell atlases at publication
- `#gap/needs-replication` — BHB anti-inflammatory effect through GPR109A (as opposed to GPR109A-independent NLRP3 inhibition) has not been genetically dissected in multiple independent labs
- `#gap/no-mechanism` — precise signaling cascade coupling GPR109A → NF-κB suppression in macrophages not fully established; Gβγ vs Gαi contributions unclear
- `#gap/dose-response-unclear` — threshold plasma BHB required for meaningful GPR109A occupancy in human macrophages/microglia in vivo is unknown; in vitro EC50 (~0.7 mM) may not predict in vivo tissue concentrations
- `#gap/long-term-unknown` — chronic GPR109A agonism effects (beyond short-term anti-lipolytic / anti-inflammatory) not studied in long-lived cohorts
- `#gap/contradictory-evidence` — niacin (high-affinity agonist) failed CV outcome trials, while low-affinity endogenous agonists BHB/butyrate are associated with positive metabolic outcomes; the pharmacology at different receptor occupancies may produce qualitatively different downstream outputs
- `gtex-aging-correlation:` not populated — requires GTEx v2 API query per `sops/finding-tissue-expression.md` #gap/unsourced
- `mr-causal-evidence: not-tested` — no published Mendelian randomization studies using HCAR2 as instrument for aging/inflammatory phenotypes as of 2026-05

## Footnotes

[^tunaru2003]: doi:10.1038/nm824 · Tunaru S et al. · *Nature Medicine* 2003 · n=N/A (receptor deorphanization) · in-vitro / in-vivo (mouse) · deorphanizes PUMA-G (mouse) and HM74 (human; NB: not HM74A — that high-affinity isoform distinction is Wise 2003) as nicotinic acid receptors; EC50 ~3 µM (PUMA-G) and ~1 µM (HM74) in Ca²⁺ mobilization assay; Puma-g-KO mice lose niacin anti-lipolytic response completely; KO mice show no FFA decrease after nicotinic acid injection vs. >1h decrease in WT · model: CHO-K1 expression cells + mouse PUMA-G-KO adipocytes · locally available: 

[^wise2003]: doi:10.1074/jbc.M210695200 · Wise A et al. · *J Biol Chem* 2003 · in-vitro · concurrent deorphanization; identifies HM74 (low-affinity) and HM74A (high-affinity, = GPR109A) as nicotinic acid receptors; EC50 ~0.1 µM for HM74A

[^taggart2005]: doi:10.1074/jbc.C500213200 · Taggart AKP et al. · *J Biol Chem* 2005 · in-vitro + in-vivo (mouse) · identifies D-β-hydroxybutyrate as endogenous ligand for PUMA-G/GPR109A; EC50 ~0.7 mM; BHB anti-lipolytic effect abolished in Puma-g-KO mice · model: mouse adipocytes

[^thangaraju2009]: doi:10.1158/0008-5472.CAN-08-4466 · Thangaraju M et al. · *Cancer Research* 2009 · in-vitro + in-vivo (Apc-min mouse) · GPR109A is a butyrate receptor in colonic epithelium; receptor loss accelerates intestinal tumorigenesis in Apc-min model; butyrate-induced apoptosis requires GPR109A · model: colon epithelial cells + Apc-min/Gpr109a-KO mice

[^singh2014]: doi:10.1016/j.immuni.2013.12.007 · Singh N et al. · *Immunity* 2014 · in-vivo (mouse) · GPR109A (encoded by Niacr1) activation by butyrate/niacin promotes colonic Treg induction (Foxp3+ CD4+ T cells: ~25.8% WT vs ~14.4% Niacr1−/− in colonic LP, Fig. 1A; p<0.002) and IL-18 production in colonic epithelium; colonic DCs and macrophages from Niacr1−/− mice defective in Treg-inducing capacity; all Niacr1−/− mice died by day 10 of 3% DSS colitis vs. 0/N WT deaths; Niacr1−/−·ApcMin/+ mice showed markedly increased polyps vs. ApcMin/+ controls (p<0.02 colon, p<0.01 small intestine) · model: Niacr1−/− mice on C57BL/6 background (5× backcross) + DSS colitis + AOM+DSS carcinogenesis · locally available: 

[^youm2015]: doi:10.1038/nm.3804 · Youm YH et al. · *Nature Medicine* 2015 · in-vitro + in-vivo (mouse) · BHB suppresses NLRP3 inflammasome by blocking potassium efflux — receptor-independent mechanism; distinct from GPR109A-mediated anti-inflammatory effects · model: human monocytes + mouse gout/arthritis models · note: GPR109A contribution not tested in this study

[^moutinho2022]: doi:10.1126/scitranslmed.abl7634 · Moutinho M et al. · *Science Translational Medicine* 2022 · in-vivo (5xFAD mouse) · HCAR2 expressed on microglia; receptor upregulated by amyloid; HCAR2-KO worsens amyloid burden and cognition; niacin treatment reduces plaques and restores memory; epidemiological niacin-AD correlation in cohort data · model: 5xFAD + HCAR2-KO mice

[^aim-high2011]: doi:10.1056/NEJMoa1107579 · AIM-HIGH Investigators · *N Engl J Med* 2011 · n=3,414 · rct · niacin added to simvastatin raised HDL but did not reduce cardiovascular events vs simvastatin alone; trial stopped early for futility · model: human (stable CV disease)
