---
type: protein
aliases: [FPRL1, formyl-peptide receptor-like 1, lipoxin A4 receptor, ALXR, ALX, LXA4R, FMLP-R-II, FPRH1, HM63, FPR2A]
uniprot: P25090
ncbi-gene: 2358
hgnc: 3827
ensembl: ENSG00000171049
genage-id: null
pathways: ["[[nf-kb]]", "[[lps-tlr4-nfkb]]"]
hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
sens-categories: []
druggability-tier: 2
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Cooray 2013 (PNAS) and Bozinovski 2014 (J Thorac Dis) and Slayo 2025 (Mol Neurodegen) verified against primary source PDFs; Wang 2014 (Alzheimer's & Dementia) verified via PMC full text; Claria 2012 (J Immunol) partially verified via Crossref metadata + abstract only (PDF download failed); Le 2002 (Trends Immunol) and Iribarren 2005 (Immunol Res) closed-access, not verified; canonical-DB identity fields (UniProt P25090, NCBI Gene 2358, HGNC 3827, Ensembl ENSG00000171049) confirmed via UniProt REST API"
---

# FPR2 (FPRL1 / ALX)

Formyl-peptide receptor 2 is a class A GPCR expressed on neutrophils, monocytes/macrophages, microglia, and epithelial cells that occupies a paradoxical dual role in inflammation: the same receptor mediates both **pro-inflammatory** signaling (in response to formyl peptides, serum amyloid A, and LL-37 in some contexts) and **pro-resolving** signaling (in response to lipoxin A4, resolvin D1, and annexin A1). This **biased agonism** — where different ligands stabilize distinct receptor conformations to produce opposing functional outcomes — places FPR2 at the pivot of the acute-to-chronic inflammation transition. In aging, dysregulation of pro-resolving FPR2 ligands (specialized pro-resolving mediators / SPMs) is implicated in the failure of inflammation resolution known as [[chronic-inflammation|inflammaging]].

## Identity

- **UniProt:** P25090 (FPR2_HUMAN)
- **NCBI Gene ID:** 2358
- **HGNC:** 3827
- **Ensembl:** ENSG00000171049
- **Chromosome:** 19q13.41 (gene cluster with FPR1, FPR3)
- **Protein length:** 351 amino acids
- **Mouse ortholog:** Fpr2 / Fpr-rs1 (one-to-one; conserved Gαi coupling and biased agonism)
- **MIM:** 136538

## Gene/protein family

FPR2 belongs to the **formyl-peptide receptor family**, a sub-family of class A (rhodopsin-like) GPCRs. Three human family members:

| Gene | NCBI Gene ID | Primary agonist class |
|------|-------------|----------------------|
| FPR1 | 2357 | fMet-Leu-Phe (fMLF); high-affinity |
| FPR2 | 2358 | Diverse: formyl peptides, SAA, LL-37, lipoxin A4, resolvins, annexin A1 |
| FPR3 | 2359 | Mitochondria-derived peptides; no LXA4 response |

FPR2 was originally cloned as FPRH1/FPRL1 (formyl-peptide receptor-like 1); it was subsequently identified as the human lipoxin A4 receptor (LXA4R / ALX) [^le2002]. The dual naming reflects independent characterization from the pro-inflammatory and pro-resolving directions before their convergence on a single gene.

## Structure and signal transduction

FPR2 is a **7-transmembrane GPCR** (TM1–TM7 spanning residues 28–304) that couples principally to **Gαi/GNAI1**, inhibiting adenylate cyclase and reducing intracellular cAMP. Key features:

- **N-linked glycosylation** at Asn4 (extracellular N-terminus)
- **Disulfide bond** Cys98–Cys176 (stabilizes extracellular loop 2)
- **Heterodimerization** with FPR1 documented; functional consequence under investigation

Downstream effectors activated by Gαi signaling: phospholipase C-β → IP3/DAG → intracellular Ca2+ mobilization; PI3Kγ → Akt; ERK1/2 → gene expression; p38 MAPK. The precise effector profile is ligand-dependent (biased agonism — see below).

## Biased agonism: the pro-inflammatory / pro-resolving switch

The canonical mechanistic feature of FPR2 is **ligand-specific receptor conformational change** producing divergent downstream signaling [^cooray2013]:

| Ligand class | Representative ligand | Outcome | Dimerization state |
|---|---|---|---|
| Formyl peptides | fMet-Leu-Phe analogues | Chemotaxis, ROS burst | — |
| Acute-phase / DAMPs | Serum amyloid A (SAA) | Pro-inflammatory cytokines, NET formation | Monomer / FPR1-ALX heterodimer; does NOT promote ALX homodimerization (decreases ALX homodimer BRET signal) |
| Host AMPs | LL-37 / CAMP protein | Context-dependent: chemotactic at low dose, resolution-promoting in some models | — |
| Specialized pro-resolving mediators | Lipoxin A4 (LXA4), Resolvin D1 (RvD1) | Anti-inflammatory, PMN stop-signals, efferocytosis promotion | — |
| Endogenous protein ligands | Annexin A1 (ANXA1) | Pro-resolving, IL-10 production, p38/MK2/HSP27 axis | Homodimer |

Cooray et al. 2013 (PNAS) demonstrated that **annexin A1 preferentially activates FPR2 homodimers** signaling through p38 MAPK → MK2 → HSP27 → IL-10 production, while SAA does not promote ALX homodimerization (it decreases the ALX homodimer BRET signal) and instead drives pro-inflammatory outputs through a distinct conformational state, with FPR1/ALX heterodimers mediating pro-apoptotic JNK pathway activation [^cooray2013]. IL-10 production by AnxA1 was confirmed in primary human monocytes and in vivo in C57BL/6 mice (i.p. injection of 1 µg AnxA1); the effect was absent in Alx-Fpr2/3 KO mice. This structural basis for biased agonism is clinically relevant because the ratio of pro-resolving to pro-inflammatory FPR2 ligands — rather than receptor expression alone — determines tissue inflammatory tone.

Cross-links: [[../compounds/ll-37]] · [[../proteins/camp]] (LL-37 / CAMP protein) are documented FPR2 ligands; their interaction with FPR2 is context-sensitive and may vary by tissue and local concentration.

## Role in aging and inflammaging

### SPM decline with age

Specialized pro-resolving mediators (lipoxins, resolvins, protectins, maresins) are biosynthesized from omega-3 and omega-6 polyunsaturated fatty acids via lipoxygenase and COX-2 pathways. Their circulating and tissue levels have been reported to **decline with advancing age** in multiple studies, with functional consequences for acute inflammation resolution. This decline, combined with maintained or elevated pro-inflammatory FPR2 agonist loads (SAA rises in chronic low-grade inflammation), may shift the FPR2 ligand environment toward chronic pro-inflammatory signaling.

#gap/needs-replication — Population-level data on SPM decline across the human lifespan are limited; most studies are cross-sectional or use surrogate tissues (cerebrospinal fluid, adipose biopsy).

### Alzheimer's disease as an aging-relevant resolution-failure model

Resolution of neuroinflammation is impaired in Alzheimer's disease (AD), an aging-associated condition. Wang et al. (2015, *Alzheimer's & Dementia*, online Feb 2014) found:

- Reduced LXA4 levels in AD hippocampal tissue (n=7 AD vs n=7 controls; Mann-Whitney U z=−2.236, p=0.026) and CSF (AD n=15 significantly lower than MCI n=20 and SCI n=21 groups; ANCOVA Bonferroni p=0.006 vs MCI, p<0.001 vs SCI)
- Hippocampal tissue RvD1 did **not** differ significantly between AD and controls (z=−0.575, p=0.62)
- SPM receptor expression changes in AD: FPRL1/FPR2 immunohistochemistry showed stronger glial labeling in AD, but Western blot showed **no statistically significant difference** in LXA4R/FPR2 protein between AD (n=7) and controls (n=9; z=−0.053, p=0.958); ChemR23 was significantly elevated in AD (z=−2.593, p=0.008); the biosynthetic enzyme 15-LOX-2 was higher in AD (z=−2.382, p=0.016)
- CSF LXA4 **correlated positively with MMSE cognitive scores** (Spearman r=0.475, p<0.0005); CSF RvD1 also correlated with MMSE (r=0.343, p<0.05) [^wang2014]

The same receptor axis (FPR2/ALX) mediates microglial responses to amyloid-beta: FPRL1/FPR2 on microglial cells drives chemotaxis toward Aβ and participates in its internalization, linking FPR2 biology to neuroinflammation and amyloid clearance [^iribarren2005].

A 2025 review (*Molecular Neurodegeneration*) synthesized evidence that n-3-derived SPMs — acting via FPR2 and related receptors — regulate microglial mitochondrial respiration and inflammation resolution in AD, reinforcing the aging-disease-resolution failure link [^slayo2025]. #gap/needs-human-replication

### Obesity and metabolic inflammaging

Clária et al. (2012, *J Immunology*) showed that RvD1 and RvD2 reduce local inflammatory tone in obese adipose tissue — increasing adiponectin expression and suppressing pro-inflammatory cytokines (TNF-α, IL-6, IL-1β) and monocyte accumulation [^claria2012]. RvD1 acts via ALX/FPR2 and ChemR23; RvD2 acts primarily via GPR32 and ChemR23. Obesity-associated low-grade inflammation (a form of inflammaging) is thus mechanistically linked to insufficient pro-resolving SPM signaling, with ALX/FPR2 as a key receptor node for RvD1. #gap/needs-replication — full text of this paper was not available for quantitative claim verification (PDF download failed; partially verified via Crossref abstract only).

### COPD and chronic airway inflammation

In COPD, pro-resolving FPR2 agonists (LXA4, RvD1, annexin A1) are insufficient to suppress inflammation. Bozinovski, Anthony, and Vlahos (2014) attribute this to agonist-biased ALX/FPR2 receptor conformations within a COPD airway environment rich in competing pro-inflammatory FPR2 agonists (SAA, LL-37/hCAP-18, mitochondrial hexapeptides released from damaged tissue), which drive pro-inflammatory receptor conformations and override pro-resolving signaling [^bozinovski2014]. SAA also promotes FPR2 homodimerization and pro-survival signaling in neutrophils. COPD is highly age-associated, and this resolution-failure mechanism is a candidate contributor to the aging-inflammation link.

## Extrapolation table

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | GPCR class A; Gαi coupling conserved; SPM receptor function validated in primary human leukocytes |
| Phenotype conserved in humans? | partial | Resolution failure in aging and AD documented in humans; causal directionality (SPM decline → inflammaging) not formally established |
| Replicated in humans? | partial | SPM-FPR2 resolution axis replicated across multiple disease models; direct aging-specific RCT data lacking |

## Pharmacology and druggability

**Druggability tier: 2** (aging context). Multiple selective FPR2 agonists have reached clinical development for inflammatory indications (not aging per se):

- **BMS-986235 (LAR-1219)** — potent selective FPR2 agonist (J Med Chem 2020); clinical development for cardiovascular / inflammatory indications
- **Lipoxin A4 analogues** — synthetic mimetics in early clinical investigation; anti-inflammatory without immunosuppression
- **Resolvin D1 (RvD1)** — endogenous agonist; not clinical-stage as drug per se but used as pharmacological tool
- **Compound 17b** — biased FPR2 agonist (Nat Commun 2018); evidence of conformationally selective agonism

No FPR2-targeting drug is FDA-approved or in a registered aging-indication clinical trial as of 2026-05-09. Tier 2 reflects high-quality pharmacological probes + multiple clinical-stage agonists for inflammatory indications. #gap/needs-aging-trial

Note on LXA4/FPR2 controversy: Hanson et al. (2013, *Biochemical Pharmacology*) reported that heterologously expressed FPR2 does not respond to LXA4 in some assay systems, suggesting the receptor pharmacology may be cell-context-dependent or require specific membrane lipid environments. This is an active area of debate in the field. #gap/contradictory-evidence

## Pathway membership

- [[nf-kb]] — pro-inflammatory FPR2 activation feeds into NF-κB via PI3Kγ → IKK
- [[lps-tlr4-nfkb]] — SAA-mediated FPR2 signaling amplifies TLR-driven NF-κB responses
- SPM-pathway — [[#gap/needs-canonical-id]] no dedicated wiki page yet; FPR2 is the canonical receptor node for lipoxin A4, resolvin D1 class SPMs; implicit stub: [[spm-pathway]]

## Key interactors and ligands

- [[../proteins/camp]] (LL-37) — endogenous antimicrobial peptide ligand; context-dependent pro- or anti-inflammatory via FPR2
- [[../compounds/ll-37]] — LL-37 compound page
- Annexin A1 (ANXA1) — endogenous glucocorticoid-regulated pro-resolving ligand; activates FPR2 homodimers → IL-10
- Serum amyloid A (SAA) — acute-phase DAMP; pro-inflammatory FPR2 agonist
- Resolvin D1 (RvD1) — omega-3 metabolite; potent pro-resolving FPR2 agonist; structural basis for selectivity elucidated by molecular dynamics [^nunes2023]
- FPR1 — heterodimerization partner; may modify FPR2 signaling

## Limitations and gaps

- `#gap/needs-canonical-id` — SPM-pathway has no dedicated wiki page. Implicit stub: [[spm-pathway]].
- `#gap/needs-aging-trial` — No registered clinical trial tests FPR2 agonism in a human aging or inflammaging indication as of 2026-05-09.
- `#gap/needs-human-replication` — SPM decline with aging as causal driver of inflammaging is biologically plausible but not established by RCT or MR evidence.
- `#gap/contradictory-evidence` — LXA4 / FPR2 pharmacological coupling is disputed (Hanson 2013 vs multiple functional studies); cell-context dependence likely.
- `#gap/no-fulltext-access` — Le 2002 (Trends Immunol, 10.1016/s1471-4906(02)02316-5) and Iribarren 2005 (Immunol Res, 10.1385/ir:31:3:165) are closed-access (`not_oa` per a local paper archive); framing claims attributed to these reviews cannot be fully verified against primary source text. Claria 2012 (J Immunol, 10.4049/jimmunol.1201272) PDF download failed repeatedly; body claims partially verified from Crossref abstract.
- `gtex-aging-correlation:` not populated — requires GTEx v2 API query per `sops/finding-tissue-expression.md`.
- `mr-causal-evidence: not-tested` — no GWAS instruments or MR studies identified for FPR2 and aging outcomes.
- `genage-id: null` — FPR2 does not appear in GenAge Human; aging relevance is indirect (through SPM axis). #gap/needs-canonical-id if relevant.

## Footnotes

[^le2002]: doi:10.1016/s1471-4906(02)02316-5 · Le Y, Murphy PM, Wang JM · *Trends Immunol* 2002;23(11):541–548 · review · cited_by 604 · Formyl-peptide receptors revisited: characterization of FPR and FPRL1 (FPR2) as receptors for structurally diverse pro- and anti-inflammatory ligands

[^cooray2013]: doi:10.1073/pnas.1308253110 · Cooray SN, Gobbetti T, Montero-Melendez T, McArthur S, Thompson D, Clark AJL, Flower RJ, Perretti M · *PNAS* 2013;110(45):18232–18237 · in-vitro + in-vivo · model: transfected HEK293 cells (BRET/co-IP), primary human monocytes and neutrophils, C57BL/6 and Alx-Fpr2/3 KO mice (i.p. AnxA1 1 µg; LPS 10 mg/kg) · AnxA1 selectively promotes ALX homodimerization (BRET signal enhanced; co-IP confirmed); SAA does NOT promote homodimerization (decreases BRET signal); AnxA1 → p38/MAPKAPK/Hsp27 pathway → IL-10 in monocytes and mice; FPR1/ALX heterodimer → JNK pathway → pro-apoptotic signaling in neutrophils; biased agonism established mechanistically

[^wang2014]: doi:10.1016/j.jalz.2013.12.024 · Wang X, Zhu M, Hjorth E, Cortés-Toro V, Eyjolfsdottir H, Graff C, et al. · *Alzheimer's & Dementia* 2015;11(4):405–419 (online Feb 2014) · observational · n=postmortem hippocampal tissue (AD n=7–10, controls n=7–10) + CSF (AD n=15, MCI n=20, SCI n=21) · LXA4 reduced in AD hippocampus (p=0.026) and CSF (p<0.001 vs SCI); hippocampal RvD1 not significantly reduced (p=0.62); FPR2/LXA4R protein not significantly different by Western blot (p=0.958); ChemR23 significantly elevated in AD (p=0.008); CSF LXA4 correlates with MMSE (r=0.475, p<0.0005); CSF RvD1 correlates with MMSE (r=0.343, p<0.05)

[^iribarren2005]: doi:10.1385/ir:31:3:165 · Iribarren P, Le Y, Wang JM · *Immunol Res* 2005;31(3):165–176 · review · cited_by 105 · FPRL1/FPR2 on microglia mediates Aβ chemotaxis and internalization in Alzheimer disease

[^claria2012]: doi:10.4049/jimmunol.1201272 · Clária J, Dalli J, Yacoubian S, Gao F, Serhan CN · *J Immunol* 2012;189(5):2597–2605 · in-vivo + ex-vivo · model: obese mouse adipose / human adipocytes · RvD1 (via ALX/FPR2 and ChemR23) and RvD2 (via GPR32 and ChemR23) rescue adiponectin expression and reduce monocyte accumulation and pro-inflammatory cytokines in obese adipose tissue · #gap/no-fulltext-access PDF download failed; body claims partially verified from Crossref abstract only

[^bozinovski2014]: doi:10.3978/j.issn.2072-1439.2014.08.08 · Bozinovski S, Anthony D, Vlahos R · *J Thorac Dis* 2014;6(11):1548–1556 · review · COPD resolution failure attributed to imbalance between pro-inflammatory FPR2 agonists (SAA, LL-37/hCAP-18, mitochondrial hexapeptides) and pro-resolving agonists (LXA4, RvD1, annexin A1); agonist-biased ALX/FPR2 conformations proposed as mechanism; SAA shown to promote FPR2 homodimerisation and pro-survival neutrophil pathways

[^slayo2025]: doi:10.1186/s13024-025-00824-1 · Slayo M, Rummel C, Singhaarachchi PH, Feldotto M, Spencer SJ · *Mol Neurodegener* 2025;20:35 · review · n-3-derived SPMs (lipoxins, D-series resolvins, protectins, maresins) regulate microglial mitochondrial bioenergetics (AMPK → SIRT1 → PGC-1α → oxidative phosphorylation) and inflammation resolution in AD; SPM bioavailability proposed as sustaining pro-resolving microglial phenotype and amyloid-β phagocytosis; FPR2/ALX and related receptors (ChemR23, RORα/LGR6) as therapeutic targets; RvD4 receptor on microglia is currently unknown

[^nunes2023]: doi:10.1021/acs.jpcb.3c01787 · Nunes VS, Serhan CN · *J Phys Chem B* 2023 · in-silico (molecular dynamics) · Structural basis for RvD1 vs AT-RvD1 selectivity at FPR2; R201 and R205 as receptor hotspots; RvD1 maintains active state 74% of simulation time
