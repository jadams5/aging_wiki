---
type: protein
aliases: [melanocortin 5 receptor, MC5-R, MCHR]
uniprot: P33032
ncbi-gene: 4161
hgnc: 6933
ensembl: ENSG00000176136
genage-id: null
pathways: ["[[melanocortin-system]]"]
hallmarks: []
sens-categories: []
druggability-tier: 3
gtex-aging-correlation: "not-queried; MC5R expression is low and tissue-restricted (sebaceous gland, exocrine epithelia, skeletal muscle) — GTEx bulk-tissue signal is likely insufficient for reliable aging-correlation extraction. #gap/needs-gtex-query"
mr-causal-evidence: not-tested
caused-by: []
causes: []
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Chen 1997, Ji 2022, Rodrigues 2009, Thiboutot 2000, McDonald 2021, Xu 2020 primary-source PDFs verified. Ng 2021 (macrophage/uveitis claim) unverifiable — download failed (no OA URL found); claim retained with #gap/no-fulltext-access. Yang 2013 and Rodrigues 2017 not_oa; ligand-binding pocket residues and cell-surface targeting claims not independently verified from primary source — #gap/no-fulltext-access retained. Zhang 2006 not_oa; sebocyte differentiation marker claim not independently verified. Janner 1998 not_oa; secretory epithelia claim not independently verified. Canonical DB identity fields (UniProt, NCBI Gene, HGNC) re-confirmed against live UniProt; Ensembl ID corrected (ENSG00000198822 → ENSG00000176136)."
---

# MC5R (melanocortin 5 receptor)

The least clinically advanced member of the melanocortin receptor family. MC5R is a Class A GPCR that couples primarily to Gαs/cAMP and, via a PI3K-regulated Akt-independent pathway, to ERK1/2. Its best-documented role is in exocrine gland secretion — sebaceous gland sebum production, lacrimal protein secretion, Harderian gland porphyrin synthesis, and pheromonal gland output in rodents. Secondary roles in immune cell biology (macrophage immunosuppression, CD8+ T cell regulation) are emerging. Aging relevance centers on the understudied question of whether MC5R decline contributes to age-related exocrine dysfunction (dry eye, xerosis).

## Identity

- **UniProt:** P33032 (MC5R_HUMAN) · reviewed Swiss-Prot entry
- **NCBI Gene:** 4161
- **HGNC symbol:** MC5R
- **Ensembl:** ENSG00000176136
- **Chromosomal location:** 18p11.21
- **Length:** 325 amino acids
- **Mouse ortholog:** Mc5r (used extensively in KO studies)

## Receptor biology

MC5R is a seven-transmembrane (7TM) GPCR. On agonist binding it activates adenylate cyclase via Gαs, elevating intracellular cAMP. A second signaling arm activates ERK1/2 through a PI3K-regulated, Akt-independent mechanism, not linked to cAMP or PKA [^rodrigues2009]. Both pathways are modulated by the accessory protein MRAP (melanocortin-2 receptor accessory protein), which in humans inhibits MC5R trafficking to the plasma membrane and reduces pharmacological efficacy for NDP-MSH [^ji2022].

**Endogenous ligands (affinity order: α-MSH > ACTH = β-MSH >> γ-MSH) [^xu2020]:**
- α-MSH (alpha-melanocyte-stimulating hormone; [[alpha-msh]]) — primary agonist; highest affinity
- ACTH (adrenocorticotropic hormone) — equal affinity to β-MSH
- β-MSH — equal affinity to ACTH
- γ-MSH — substantially lower affinity than the above
- AgRP (agouti-related peptide) — endogenous antagonist; also acts at MC5R (alongside ASIP)

**Key structural features:**
- 4 predicted N-linked glycosylation sites (extracellular loops)
- Ca²⁺ binding (cofactor role)
- Serine-rich N-terminal motifs required for trafficking to the cell surface; mutations in these cause ER/Golgi retention [^rodrigues2017]
- Transmembrane residues D115, D119 (TM3), F195 (TM5), F254 (TM6) form the ligand-binding pocket [^yang2013]

## Tissue expression and function

### Exocrine glands

MC5R's defining physiological role was established by the MC5R-knockout mouse (Mc5r-null, backcrossed 7–9 generations onto C57BL/6J; porphyrin experiments used 129/SvEvTac background): KO animals show markedly impaired sebaceous lipid production (15–20% reduction in total acetone-extractable hair lipids; >50% reduction in sterol esters specifically), impaired fur water repulsion (KO mice absorbed ~twice as much water by body mass vs. WT during swimming — ~5% vs ~2.5% body weight), defective lacrimal protein secretion (α-MSH/ACTH increased lacrimal protein secretion ~80% in WT but not KO), and nearly absent Harderian gland porphyrin synthesis (in 129/SvEv background). Thermoregulation defects in KO mice are attributable to the sebaceous and Harderian lipid deficit — the paper does not implicate sweat/eccrine glands [^chen1997].

In humans, MC5R mRNA is detected in sebaceous glands and hair follicles by RT-PCR, and MC5R protein localizes to the epidermis, hair follicles, sebaceous glands, and eccrine glands by immunohistochemistry [^thiboutot2000]. MC5R protein is expressed in **rat** preputial cells (used as a sebaceous gland model); the Thiboutot 2000 paper studied human sebaceous glands and rat preputial cells — not human preputial cells [^thiboutot2000]. In sebocyte culture, MC5R protein is expressed in the cytoplasm of differentiated, lipid-laden sebocytes rather than undifferentiated basal cells — making it a differentiation marker for the sebocyte lineage [^zhang2006].

**Summary of exocrine phenotypes from MC5R-KO mice (Chen 1997; C57BL/6J congenic unless noted):**

| Gland | Phenotype in MC5R-KO |
|---|---|
| Sebaceous | 15–20% reduction in acetone-extractable hair lipids; >50% reduction in sterol esters; impaired fur waterproofing |
| Lacrimal | α-MSH/ACTH-stimulated protein secretion abolished; EC₅₀ for ACTH stimulation ~4 nM in WT |
| Harderian | Nearly complete porphyrin deficiency (129/SvEv strain); porphyrin synthesis and stress-induced release require MC5R |
| Preputial | Reduced pheromone/odorant output; high MC5R expression confirmed (preputial mRNA ~30× skin level) |

### Skeletal muscle and adipose

MC5R is the predominant melanocortin receptor subtype in skeletal muscle and white adipose tissue. In these contexts it promotes lipid mobilization and glucose uptake, representing a potential metabolic modulatory role [^ji2022].

### Immune cells

MC5R is expressed on macrophages, where α-MSH/MC5R signaling suppresses phagolysosome activation and promotes recovery of ocular immune privilege following uveitis [^ng2021]. #gap/no-fulltext-access — Ng 2021 PDF download failed (no OA URL available in a local paper archive); this claim is attributed to that paper but not independently verified against the full text. Combined deficiency of MC5R and adenosine 2A receptor (A2Ar) in double-knockout (DKO) mice results in significantly fewer CD8+ T cells in spleen and thymus compared to WT and single-KO mice, and confers resistance to experimental autoimmune uveitis (EAU); susceptibility is restored by transfer of WT CD8+ T cells into DKO mice, demonstrating a CD8+ T cell-dependent mechanism [^mcdonald2021].

Xu 2020 notes that MC5R is expressed by B and T lymphocytes [^xu2020], but the specific claim of MC5R involvement in B-cell IgG class switching and NK-cell function has not been traced to a verified primary source in this pass. #gap/unsourced — B-cell IgG class-switching and NK-cell claims require primary-source DOI confirmation before inclusion as factual claims.

## Role in aging

There is **no primary study directly linking MC5R to aging mechanisms** in mammals as of the literature search date (2026-05-09). The aging relevance is inferential:

1. **Exocrine gland decline with age** — sebaceous gland activity, lacrimal secretion, and eccrine sweating all decline with aging, contributing to xerosis (dry skin), dry-eye syndrome (xerophthalmia), and impaired thermoregulation — known clinical-aging concerns. Whether MC5R signaling drives this decline (loss of ligand, receptor, or downstream coupling) is not established.

2. **Immunosenescence intersections** — MC5R's immunosuppressive role on macrophages is relevant to [[chronic-inflammation]] and [[altered-intercellular-communication]], but no study has specifically interrogated MC5R in the context of inflammaging.

3. **Skeletal muscle metabolic role** — as the predominant melanocortin receptor in skeletal muscle, MC5R may participate in the metabolic derangements of [[stem-cell-exhaustion|sarcopenic]] or metabolically aging muscle. This is entirely speculative. #gap/needs-human-replication #gap/no-mechanism

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | GPCR/cAMP signaling conserved; MC5R protein confirmed in human sebaceous tissue |
| Phenotype conserved in humans? | partial | Exocrine decline with aging is a human phenomenon; MC5R's causal role is undemonstrated |
| Replicated in humans? | no | No aging-focused human MC5R study; primary evidence is MC5R-KO mouse |

#gap/needs-human-replication — All functional data is from MC5R-KO rodents. The aging-context claims are indirect and require targeted study.

## Pharmacology and druggability

**Druggability tier: 3** (predicted druggable; no aging-validated or FDA-approved drug).

Selective MC5R agonists are an active area of discovery but face a fundamental development bottleneck: achieving selectivity over the closely related MC1R and MC4R. MC4R shares high sequence homology, and MC4R agonists/antagonists have independent clinical relevance (obesity: setmelanotide for MC4R pathway). MC1R is the melanoma/pigmentation receptor. Off-target activity at either limits MC5R-selective compound development.

**Research probes:**
- PL8177 — a cyclic peptide MC1R/MC5R agonist with anti-inflammatory properties; no aging indication; early clinical exploration for inflammatory diseases
- Competitive antagonists (SHU9119, HS024, JKC-363) — pharmacological tools; research use only
- No clinical-stage compound with MC5R as the primary target and an aging indication exists

**Therapeutic hypotheses** (speculative, not validated):
- MC5R agonists as treatments for dry-eye syndrome or xerosis by restoring exocrine secretory function
- MC5R modulation in inflammatory skin or ocular disease (acne, seborrhea, uveitis)
- Metabolic applications (adipose/muscle MC5R agonism) — overlaps with MC4R obesity pathway concerns

## Pathway membership

- [[melanocortin-system]] — primary pathway; MC5R is one of five melanocortin receptors (MC1R–MC5R) activated by POMC-derived peptides

## Key interactors / related proteins

- [[alpha-msh]] — primary endogenous agonist; POMC-derived
- [[pomc]] — precursor gene for α-, β-, γ-MSH and ACTH; all endogenous MC5R ligands are POMC cleavage products
- [[mc1r]] — sister receptor; convergent ligand set; selectivity overlap is pharmacological bottleneck
- [[mc4r]] — sister receptor; obesity relevance; high-homology risk for off-target effects

## Gaps and limitations

- #gap/needs-human-replication — No primary aging study exists; all exocrine phenotype data derives from MC5R-KO mice.
- #gap/no-mechanism — The mechanism linking MC5R activity levels to age-related exocrine decline is entirely unstudied.
- #gap/needs-gtex-query — GTEx aging-correlation not queried; MC5R is tissue-restricted and low-abundance in bulk-tissue assays.
- Ensembl ID corrected from ENSG00000198822 (which is GRM3, a different gene) to ENSG00000176136 (confirmed MC5R via UniProt P33032 cross-reference and Ensembl REST lookup). HGNC:6933 and NCBI Gene 4161 confirmed correct.
- #gap/unsourced — B-cell IgG class-switching and NK-cell claims: Xu 2020 confirms B/T lymphocyte MC5R expression broadly, but the specific IgG class-switching and NK-cell functional claims have not been traced to a primary source.
- #gap/dose-response-unclear — No human dose-response data for any MC5R-targeted agent in any indication.

## Footnotes

[^chen1997]: doi:10.1016/s0092-8674(00)80467-5 · Chen W et al. · *Cell* 1997 · in-vivo (mouse, KO) · model: Mc5r-null backcrossed 7–9 generations onto C57BL/6J (most experiments); 129/SvEvTac used for Harderian porphyrin experiments · local PDF available in a local paper archive
[^ji2022]: doi:10.3390/ijms23158727 · Ji L-Q et al. · *Int J Mol Sci* 2022 · review · pharmacology + energy-metabolism regulation; covers MRAP interactions and skeletal muscle/adipose expression
[^rodrigues2009]: doi:10.1016/j.mce.2009.01.014 · Rodrigues AR et al. · *Mol Cell Endocrinol* 2009 · in-vitro (HEK293 cells expressing rat MC5R-GFP) · α-MSH activates ERK1/2 (EC₅₀ ~7.3 nM) through a PI3K-regulated, Akt-independent pathway; cAMP, PKA, PKC, and Akt are not required; abolished by wortmannin and LY294002
[^rodrigues2017]: doi:10.1016/j.bbamcr.2017.04.004 · Rodrigues AR et al. · *Biochim Biophys Acta Mol Cell Res* 2017 · in-vitro · serine-rich N-terminal motifs required for MC5R cell-surface targeting
[^yang2013]: doi:10.1021/bi3013593 · Yang Y et al. · *Biochemistry* 2013 · in-vitro (mutagenesis) · ligand-binding pocket residues identified by site-directed mutagenesis
[^zhang2006]: doi:10.1016/j.peptides.2005.05.030 · Zhang L et al. · *Peptides* 2006 · in-vitro (human tissue) · MC5R as differentiation marker of human sebocytes; not_oa in a local paper archive
[^thiboutot2000]: doi:10.1046/j.1523-1747.2000.00094.x · Thiboutot D et al. · *J Invest Dermatol* 2000 · in-vitro (human sebaceous gland tissue + rat preputial cells) · MC5R mRNA detected in human sebaceous glands by RT-PCR; MC5R protein confirmed in human epidermis, hair follicles, sebaceous glands, and eccrine glands by IHC; rat preputial cells used as a sebaceous gland model (not human preputial cells)
[^janner1998]: doi:10.1210/en.139.5.2348 · Janner M et al. · *Endocrinology* 1998 · in-vitro (secretory epithelium) · MC5R expression in secretory epithelia supports exocrine/endocrine gland role; not_oa
[^ng2021]: doi:10.1080/09273948.2020.1849735 · Ng TF et al. · *Ocul Immunol Inflamm* 2021 · in-vivo (mouse) · MC5R on macrophages mediates α-MSH immunosuppression; loss → heightened retinal damage in uveitis
[^mcdonald2021]: doi:10.3389/fimmu.2021.742154 · McDonald T et al. · *Front Immunol* 2021 · in-vivo (mouse, double-KO) · MC5R/A2Ar combined deficiency reduces CD8+ T cells and confers autoimmune-disease resistance
[^xu2020]: doi:10.1007/s00018-020-03511-0 · Xu Y et al. · *Cell Mol Life Sci* 2020 · review · comprehensive MC5R signaling pathway overview in health and disease; covers immunomodulation, thermoregulation, sebogenesis
