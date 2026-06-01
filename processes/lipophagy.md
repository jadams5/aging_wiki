---
type: process
aliases: [lipid-droplet autophagy, selective autophagy of lipid droplets, lysosomal lipolysis]
key-proteins: ["[[atg7]]", "[[lc3]]", "[[beclin-1]]", "[[lipa]]", "[[plin2]]", "[[plin3]]", "[[rab7]]"]
pathways: ["[[autophagy]]", "[[mtor]]", "[[ampk]]"]
hallmarks: ["[[disabled-macroautophagy]]", "[[deregulated-nutrient-sensing]]"]
selective-variants: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Singh 2009 (PDF), Singh & Cuervo 2011 (PDF), Kaushik & Cuervo 2015 (PDF), Kaushik & Cuervo 2016 (PDF) verified against primary sources. Settembre 2013 PDF download failed (status: failed despite green OA); TFEB claims partially verified via PMC full-text fetch — LIPA/CLEAR claim and specific quantitative LD data unverified; tagged #gap/no-fulltext-access on affected claims."
---

# Lipophagy

Selective macroautophagic degradation of **lipid droplets** (LDs) — cytoplasmic organelles that store neutral lipids (primarily triacylglycerols, TAG; and cholesteryl esters) — via delivery to lysosomes, where lysosomal acid lipase ([[lipa]]) hydrolyzes TAGs into free fatty acids and glycerol for export and re-use in beta-oxidation or membrane biosynthesis. First described by Singh et al. in 2009 in hepatocytes [^singh2009], lipophagy is now recognized as a major route of intracellular lipid mobilization that **operates in parallel with cytosolic lipolysis** (ATGL/PNPLA2 + HSL), with relative dominance depending on cell type, energy status, and organism age.

Lipophagy decline with age is proposed to contribute to **ectopic lipid accumulation**, NAFLD/NASH progression, and impaired energy homeostasis in aging tissues. #gap/needs-human-replication

## Discovery

Singh et al. (2009) showed that macroautophagy machinery directly engages hepatic lipid droplets during nutrient deprivation [^singh2009]:
- Inhibiting autophagy pharmacologically (3-methyladenine / 3MA) or genetically (siRNA knockdown of Atg5; Atg5-KO mouse embryonic fibroblasts) in cultured rat hepatocytes (RALA255-10G line) significantly increased intracellular TAG and LD number/size. Leupeptin was used as a lysosomal protease inhibitor (not an autophagy inhibitor) to demonstrate lysosomal lipid turnover.
- Electron microscopy and LC3 immunogold labelling revealed lipid droplet material enclosed within double-membrane autophagosomes (autolipophagosomes) and autophagolysosomes.
- Hepatocyte-specific Atg7-knockout mice (Atg7^F/F-Alb-Cre, examined at four months of age) displayed markedly elevated hepatic TAG and cholesterol, increased LD number and size, and impaired fatty acid beta-oxidation.
- The study coined the term "macrolipophagy" and established that autophagy regulates hepatic lipid content in vivo.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — macroautophagy machinery and LIPA are conserved; LD composition varies |
| Phenotype conserved in humans? | partial — hepatic lipid accumulation upon autophagy loss is consistent; human lipophagy flux data sparse |
| Replicated in humans? | no — genetics of human NAFLD implicate autophagy, but controlled lipophagy-flux studies in human hepatocytes are limited #gap/needs-human-replication |

## Mechanism

### Step 1 — Lipid droplet recognition and sequestration

The precise "eat-me" signal that recruits the autophagy machinery to lipid droplets remains incompletely understood #gap/no-mechanism, but several elements have been identified:

- **Rab7** — a late-endosomal GTPase — localizes to lipid droplets and is required for lipophagy. Rab7 loss impairs LD-autophagosome contact and reduces lipophagy flux. #gap/needs-replication
- **Perilipins (PLINs)** — LD coat proteins PLIN2 and PLIN3 must be removed to expose TAGs to lipases (both cytosolic and lysosomal). Removal occurs via chaperone-mediated autophagy (CMA) prior to macrolipophagy in some contexts (see below — [[#CMA–lipophagy interplay]]).
- **FAF2 (UBXD8)** — an LD-associated ubiquitin regulatory protein, proposed to link LD ubiquitination to autophagy receptors. Evidence is primarily in cell-free and cell-culture systems. #gap/needs-replication
- **p62/SQSTM1** — may bridge ubiquitinated LD-associated proteins to LC3 on the phagophore, analogous to its role in selective autophagy of other cargo; direct evidence for lipophagy-specific p62 requirement is limited. #gap/no-mechanism

### Step 2 — Autophagosome formation around LD cargo

Standard macroautophagy machinery ([[ulk1]], [[beclin-1]] / VPS34 complex, ATG5–ATG12–ATG16L1 conjugation, [[lc3]] lipidation) extends the phagophore around the lipid droplet. For large droplets, partial sequestration of LD surface material (microautophagy-like) has been described in yeast, but in mammals macroautophagy is the primary route [^singhcuervo2011].

### Step 3 — Lysosomal degradation by LIPA

The autophagosome fuses with the lysosome (Rab7-RILP-HOPS pathway) → autolysosome. **Lysosomal acid lipase (LIPA / LAL)** — the only known intralysosomal lipase — hydrolyzes TAG and cholesteryl esters into free fatty acids and glycerol/cholesterol. Resulting free fatty acids are exported (likely via ABCA1 and ACSL pathways) for beta-oxidation in mitochondria or re-esterification [^singh2009].

LIPA deficiency (Wolman disease / cholesteryl ester storage disease) severely impairs lipid clearance and results in massive hepatic and adrenal lipid accumulation, confirming the physiological importance of the lysosomal route.

## CMA–lipophagy interplay

A critical upstream gatekeeping step: **PLIN2 and PLIN3 must be removed from the LD surface before macroautophagy machinery can access TAG**. Under nutrient deprivation, chaperone-mediated autophagy (CMA) degrades PLIN2 and PLIN3 first, which exposes lipid droplet TAGs to both cytosolic lipases (ATGL) and the lipophagy machinery [^kaushik2015]:

- CMA-resistant PLIN2 (CMA-targeting-motif mutant: 414SLKVQ → 414SLKAA, preventing Hsc70 binding) prevents lipase and macroautophagy-effector access to the LD surface → impaired lipolysis even when CMA is otherwise active [^kaushik2015].
- Conversely, blocking CMA (LAMP2A knockdown) accumulates PLIN2/3 on LDs → LD retention phenotype and failure to recruit ATGL and autophagy effectors (Beclin1, ATG5, LC3).
- AMPK-dependent phosphorylation of PLIN2 is required for CMA-mediated PLIN2 degradation, but this phosphorylation occurs **after** Hsc70/HSPA8 binds PLIN2 at the LD surface — not before. The current model is: Hsc70 arrives at LD → binds PLIN2 → AMPK phosphorylates PLIN2 → phospho-PLIN2 is released to lysosome for CMA degradation [^kaushik2016plin2]. The specific phosphorylation sites on PLIN2 have not been reported in the primary literature to date. #gap/unsourced

This establishes a **CMA → macrolipophagy** sequential dependency in the lysosomal lipolysis axis. With age, CMA declines substantially (LAMP2A expression falls in aged livers), which upstream-impairs lipophagy even if macroautophagy machinery remains intact.

## Lipophagy vs cytosolic lipolysis

Two parallel routes for intracellular TAG mobilization:

| Feature | Cytosolic lipolysis | Lipophagy |
|---|---|---|
| Key enzymes | ATGL (PNPLA2) + HSL (LIPE) → DAG → MAG | LIPA (lysosomal acid lipase) |
| Compartment | Cytosol, LD surface | Lysosome / autolysosome |
| Products | Free fatty acids + glycerol | Free fatty acids + glycerol (slower release) |
| Regulation | Catecholamines → PKA → HSL Ser563/Ser660 phospho | mTOR-inhibition / starvation → ULK1 activation |
| Cell-type dominance | Adipocytes (primary route in WAT); universal | Hepatocytes (major); brown adipocytes (both); heart, neurons (emerging) |
| Speed | Minutes (acute) | Hours |

In **white adipocytes**, cytosolic lipolysis (ATGL + HSL) dominates TAG mobilization; lipophagy contributes but is secondary [^singhcuervo2011]. In **hepatocytes**, lipophagy is a major route and is particularly important under prolonged starvation. In **brown adipocytes**, both pathways are active and partially redundant.

## Transcriptional regulation — TFEB

TFEB, the master transcriptional regulator of lysosomal biogenesis and autophagy (see [[tfeb]]), drives coordinated upregulation of lipophagy-relevant genes during starvation [^settembre2013]:

- TFEB overexpression in mouse liver (adenoviral delivery) under a high-fat diet (40% kcal fat, 10–12 weeks, C57BL/6 males) reduced hepatic lipid content and liver weight (p<0.001) and decreased circulating TAG (p<0.0001).
- TFEB activates LIPA transcription (among other lysosomal hydrolases) via the CLEAR network. #gap/no-fulltext-access Note: the Settembre 2013 PDF was unavailable for verification (download failed); this specific LIPA/CLEAR claim is attributed in the secondary literature to this paper but could not be confirmed against the full-text. Verify when PDF access is available.
- mTORC1 inactivation (starvation, rapamycin) releases TFEB → nuclear translocation → lipophagy induction.
- TFEB itself is transcriptionally upregulated by its own nuclear activity (autoregulatory loop): ChIP-qPCR confirmed TFEB binding to CLEAR sites in its own promoter during starvation, with nuclear re-feeding suppressing the loop [^settembre2013].

This TFEB-driven arm operates at a transcriptional timescale (hours–days) and is particularly relevant to the chronic adaptation of hepatic lipid metabolism in aging.

## Metabolic regulation

| Signal | Effect on lipophagy | Mechanism |
|---|---|---|
| Nutrient deprivation (starvation) | ↑ | mTORC1 ↓ → ULK1 activation + TFEB nuclear translocation |
| AMPK activation (metformin, exercise) | ↑ | Direct ULK1 Ser317/Ser777 phosphorylation + AMPK-dependent PLIN2 phosphorylation (CMA priming; specific residues not identified in primary sources) #gap/unsourced |
| Insulin / IGF-1 | ↓ | mTORC1 activation → ULK1 Ser757 phosphorylation (inhibitory) |
| Rapamycin | ↑ | mTORC1 inhibition → TFEB nuclear translocation; see [[mtor]] |
| Caloric restriction | ↑ | mTOR ↓ + AMPK ↑; hepatic lipophagy induction well-documented in mouse CR models #gap/needs-human-replication |
| Ethanol (acute) | ↓ | Autophagy flux impairment; contributes to alcoholic fatty liver |
| High-fat diet (chronic) | ↓ | mTOR constitutive activation; TFEB cytoplasmic retention; LD surface remodeling |

## Role in aging

### Lipophagy declines with age

Hepatic autophagy flux — including lipophagy — declines progressively with age in rodents. Contributing mechanisms include:
- Reduction of LAMP2A on the lysosomal membrane (CMA rate-limiting step; well-documented decline with aging) [^kaushik2015]
- General reduction in ATG5, ATG7, and BECN1 protein levels in aged liver
- Lysosomal dysfunction: lipofuscin accumulation, reduced hydrolase activity, impaired acidification
- Chronic mTOR hyperactivation in aged adipose and liver (nutrient-sensing dysfunction)

The combined effect is diminished LD clearance → ectopic lipid accumulation in liver, muscle, and heart with age.

### NAFLD/NASH connection

Impaired hepatic lipophagy is a proposed mechanistic driver of NAFLD/NASH in aging:
- Loss of ATG7 in mouse liver phenocopies NAFLD histologically (ballooning hepatocytes, steatosis, elevated transaminases) [^singh2009].
- TFEB overexpression in HFD-fed mice reduces hepatic steatosis by upregulating lipophagy [^settembre2013].
- Human NAFLD is associated with reduced autophagic flux markers (p62 accumulation; reduced LC3-II turnover) in liver biopsies — though mechanistic dissection of lipophagy specifically from bulk autophagy is technically limited. #gap/needs-human-replication

### Ectopic lipid accumulation in non-hepatic tissues

Lipophagy may contribute to lipid homeostasis in skeletal muscle, heart, and neurons — tissues prone to ectopic lipid accumulation with aging — but the evidence base is substantially thinner than in hepatocytes. #gap/needs-human-replication #gap/needs-replication

## Pharmacological interventions

| Agent | Mechanism of action | Evidence level |
|---|---|---|
| [[rapamycin]] | mTORC1 inhibition → TFEB activation + ULK1 disinhibition | Mouse: reduces hepatic lipid accumulation |
| [[metformin]] | AMPK activation → PLIN2 phospho (CMA priming) + ULK1 | Preclinical; human NAFLD trials ongoing (not lipophagy-specific endpoints) |
| [[spermidine]] | HAT inhibitor → autophagy gene upregulation | Preclinical; lipophagy-specific data limited; see [[autophagy]] |
| [[caloric-restriction]] | mTOR ↓ + AMPK ↑ | Strong in rodents; human liver lipophagy CR data limited |
| Exercise | AMPK activation; LC3 lipidation increase in muscle | Human muscle biopsy data; lipophagy endpoint not well characterized |
| TFEB activators | Various (trehalose, resveratrol, geranylgeranylacetone; mechanism debated — note: Compound C is an AMPK inhibitor, not a TFEB activator) | Preclinical only #gap/dose-response-unclear |

No clinical-stage compound has been validated specifically for lipophagy activation in humans as of 2026-05-04.

## Measurement methods

Quantifying lipophagy flux is technically demanding because lipid droplets lack a unique outer marker analogous to TOMM20 for mitochondria:

- **LD number and size** (BODIPY, Oil Red O, LipidTOX, EM) after autophagy inhibition vs. control — indirect; also affected by cytosolic lipolysis.
- **GFP-LC3 + BODIPY co-localization** — positive signal confirms LD-autophagosome contact; requires bafilomycin A1 control to distinguish formation from clearance.
- **LIPA activity assay** in lysosomal fractions with LD-derived substrate — functional readout but confounded by non-lysosomal sources.
- **Stable-isotope tracing** (13C-oleate pulse-chase → lysosomal lipid fraction) — gold standard for flux; technically demanding; not yet standard in aging studies. #gap/needs-replication

## Limitations and gaps

- **Cargo receptor unknown**: no lipophagy-specific receptor with the specificity of NDP52/OPTN for mitophagy has been identified. FAF2, Rab7, and PLIN dynamics are involved, but the primary "eat-me" signal on LDs is unclear. #gap/no-mechanism
- **Macrolipophagy vs microlipophagy**: mammalian microlipophagy (direct lysosomal membrane engulfment of LD material) is poorly characterized; most evidence comes from yeast. The relative contribution to total lysosomal lipolysis in mammals is unknown. #gap/needs-replication
- **Human flux data**: controlled lipophagy-flux measurements in human tissues are scarce; most aging data is from rodent liver. #gap/needs-human-replication
- **LD heterogeneity**: LDs vary in size, protein coat, and lipid composition across cell types; whether all LD subtypes are equally recognized by lipophagy machinery is unknown. #gap/no-mechanism
- **Therapeutic window**: boosting lipophagy in aging liver vs. unintended effects in adipose (mobilizing energy stores needed for thermoregulation) — dose and tissue-specificity unclear. #gap/dose-response-unclear

## Cross-references

Related processes: [[autophagy]], [[mitophagy]], [[chaperone-mediated-autophagy]]
Key regulators: [[tfeb]], [[mtor]], [[ampk]]
Key proteins: [[lipa]], [[plin2]], [[plin3]], [[atg7]], [[lc3]], [[beclin-1]], [[p62]], [[rab7]]
Hallmarks: [[disabled-macroautophagy]], [[deregulated-nutrient-sensing]]
Phenotypes: [[nafld]], [[sarcopenia]] (ectopic lipid accumulation component)
Interventions: [[rapamycin]], [[caloric-restriction]], [[metformin]], [[spermidine]]

## Footnotes

[^singh2009]: doi:10.1038/nature07976 · [[studies/singh-2009-autophagy-lipid-metabolism]] · in-vivo (mouse; Atg7^F/F-Alb-Cre hepatocyte-specific KO, examined at 4 months) + in-vitro (rat hepatocyte line RALA255-10G; Atg5-KO MEFs) · p<0.05 (TG content); p<0.01 (LD counts) · model: C57BL/6 Atg7 flox/flox × Alb-Cre; in-vitro pharmacological inhibitor: 3-methyladenine (3MA); genetic: siAtg5 lentiviral; lysosomal inhibitor used separately: leupeptin (to trap cargo, not as autophagy inhibitor); primary lipophagy discovery paper; coined term "macrolipophagy"; local PDF available

[^singhcuervo2011]: doi:10.1016/j.cmet.2011.04.004 · [[studies/singh-cuervo-2011-autophagy-energetic-balance]] · review · model: multi-organism / multi-tissue; key synthesis: macrolipophagy is constitutive in many cell types (not hepatocyte-specific); acute lipid challenge upregulates macrolipophagy; chronic HFD impairs autophagosome-lysosome fusion → vicious cycle; adipocyte Atg7 KO → lean phenotype, BAT-like WAT; mammalian macroautophagy is primary route (not microautophagy) for LD degradation

[^kaushik2015]: doi:10.1038/ncb3166 · [[studies/kaushik-2015-cma-plin-lipolysis]] · in-vivo (mouse; L2AKO conditional liver-specific LAMP2A KO) + in-vitro (NIH3T3 fibroblasts; LAMP2A-knockdown L2A(−) clones) · p<0.05 · model: CMA-deficient mice and fibroblasts; key finding: CMA degrades PLIN2/PLIN3 at LD surface to expose LD to cytosolic lipase ATGL and macroautophagy effectors (Beclin1, ATG5, LC3); CMA loss → impaired LD breakdown, reduced ATGL recruitment, failure of macrolipophagy initiation; CMA-resistant PLIN2 mutant (414SLKVQ→414SLKAA) phenocopies CMA blockage

[^kaushik2016plin2]: doi:10.1080/15548627.2015.1124226 · [[studies/kaushik-2016-ampk-plin2-cma]] · in-vitro (NIH3T3 fibroblasts; L2A-KO MEFs; L2A KO mouse liver) · model: LAMP2A knockdown/KO cells and mice; Phos-tag electrophoresis · key finding: AMPK-dependent phosphorylation of PLIN2 is required for CMA-mediated PLIN2 degradation; compound C (AMPK inhibitor) reduces PLIN2 phosphorylation by 62.7±13.5% (n=3, p<0.05); phosphorylation occurs AFTER Hsc70 binds PLIN2 (not before); specific phosphorylation sites NOT identified; AMPK and CMA are interdependent (CMA blockage reduces p-AMPK levels by ~52% and total AMPK by ~28%)

[^settembre2013]: doi:10.1038/ncb2718 · [[studies/settembre-2013-tfeb-lipid-metabolism]] · in-vivo (mouse; adenoviral TFEB liver OE + HFD model; C57BL/6 males, ~5 wks at diet start, 40% kcal fat, 10–12 wks, n=10/group) + in-vitro · p<0.001 (hepatic lipid content); p<0.0001 (serum TAG) · key finding: TFEB OE reduces hepatic lipid content and liver weight on HFD; TFEB autoregulatory loop confirmed by ChIP-qPCR (CLEAR sites in TFEB promoter); starvation induces TFEB transcription through own nuclear activity; LIPA/CLEAR claim NOT independently verified from PDF — #gap/no-fulltext-access (PDF download failed; partially verified via PMC full-text)
