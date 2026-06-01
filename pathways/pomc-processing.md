---
type: pathway
aliases: [proopiomelanocortin processing, POMC proteolytic cascade, PC1/PC2 prohormone processing, ACTH/MSH biosynthesis]
kegg: null
reactome: R-HSA-265301
wikipathways: null
key-nodes:
  - "[[../molecules/proteins/pomc]]"
  - "[[../molecules/proteins/pcsk1]]"
  - "[[../molecules/proteins/pcsk2]]"
  - "[[../molecules/proteins/cpe]]"
  - "[[../molecules/proteins/pam]]"
upstream:
  - "[[insulin-igf1]]"
  - "[[jak-stat-pathway]]"
downstream:
  - "[[melanocortin-system]]"
hallmarks:
  - "[[deregulated-nutrient-sensing]]"
sens-categories: []
druggability-tier: 2
caused-by:
  - "[[insulin-igf1]]"
causes:
  - "[[melanocortin-system]]"
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Joshi 1995 aging claim verified against PubMed full abstract (paper closed-access, not_oa; full PDF unavailable); Nillni 2016 verified against full PDF; Krude 1998 verified against PubMed abstract (closed-access); Jackson 1997 closed-access not verified; Bicknell 2008 download failed not verified; Hook 2009 download failed not verified; UniProt IDs for PCSK1/PCSK2/CPE/PAM confirmed via UniProt REST; Reactome ID corrected via ContentService API"
---

# POMC processing pathway

**Proopiomelanocortin (POMC)** is a 31 kDa precursor protein synthesized in the pituitary, hypothalamic arcuate nucleus, and peripheral tissues including skin keratinocytes. Its biological activity is entirely post-translational: a tissue-specific proteolytic cascade mediated by prohormone convertases **PC1/3** ([[../molecules/proteins/pcsk1|PCSK1]]) and **PC2** ([[../molecules/proteins/pcsk2|PCSK2]]) — together with carboxypeptidase E ([[../molecules/proteins/cpe|CPE]]) and the amidating enzyme PAM ([[../molecules/proteins/pam]]) — cleaves POMC into structurally distinct bioactive peptides. The identity and ratio of output peptides is determined entirely by which convertases are co-expressed, making this pathway one of the clearest biological examples of combinatorial post-translational logic. In aging, PC2 expression increases in hypothalamic arcuate POMC neurons, shifting the processing of β-endorphin toward shorter, functionally distinct isoforms; whether this also alters α-MSH production or energy homeostasis has not been directly demonstrated.

## POMC gene and primary transcript

The single-exon coding region of the human *POMC* gene (chromosome 2p23.3) encodes a 267-amino-acid preproprotein. Signal peptide cleavage in the ER releases the 241-residue POMC prohormone. The full-length precursor contains multiple embedded peptide sequences separated by paired basic cleavage motifs (dibasic sites: **KR**, **RR**, **KK**, **RK**), which are the primary recognition sequences for the proprotein convertase family [^bicknell2008].

**Domain map of human POMC (N→C):**

| Domain | Residues (approx.) | Potential products |
|---|---|---|
| Signal peptide | 1–26 | Cleaved co-translationally |
| N-POMC (γ-MSH region) | 27–74 | γ-MSH, N-POMC fragments |
| ACTH (1–39) | 75–113 | ACTH; sub-cleaved → α-MSH (ACTH 1–13) + CLIP (ACTH 18–39) |
| β-LPH (lipotropin) | 114–207 | β-LPH; sub-cleaved → γ-LPH + β-endorphin (31 aa) |

## The processing enzymes

### PC1/3 (PCSK1)

[[../molecules/proteins/pcsk1|PC1/3]] (prohormone convertase subtilisin/kexin type 1) is the dominant first-stage convertase in anterior pituitary corticotrophs and in hypothalamic POMC neurons. It cleaves at a subset of dibasic sites with the consensus **Lys/Arg-Xn-Arg** [^seidah1994]. Key activities:

- Cleaves POMC → ACTH (1–39) + N-POMC + β-LPH in corticotrophs.
- In arcuate neurons co-expressed with PC2, generates substrates that PC2 then further processes.
- PC1/3 requires a mildly acidic pH (~5.5–6.5) — consistent with Golgi/secretory granule environment.

PC1/3 loss-of-function mutations in humans (PCSK1) cause **severe early-onset obesity, malabsorptive diarrhea, and hypocortisolism** — establishing that PC1/3-dependent POMC processing is non-redundant for human energy homeostasis [^jackson1997]. The obesity phenotype is rescued by the melanocortin-4 receptor agonist **[[../molecules/compounds/setmelanotide|setmelanotide]]**, which bypasses the upstream processing failure to restore MC4R signaling directly [^gap/unsourced — clinical trials confirm setmelanotide in PCSK1 LoF; cite trial DOI when available].

### PC2 (PCSK2)

[[../molecules/proteins/pcsk2|PC2]] cleaves at a broader range of dibasic sites, with preference for **Arg-Xn-Arg** and **Lys-Arg** motifs; it requires the neuroendocrine chaperone **7B2** (SCG5) for its own folding and export from the ER [^bicknell2008]. PC2 is co-expressed with PC1/3 in:

- Intermediate pituitary melanotrophs (prominent in rodents; atrophic/vestigial in adult humans).
- Hypothalamic arcuate POMC neurons.

In tissues expressing both convertases, PC2 drives **second-stage cleavage** of PC1/3-generated intermediates:

- ACTH (1–39) → α-MSH (ACTH 1–13) + CLIP (ACTH 18–39)
- β-LPH → γ-LPH + **β-endorphin** (31 amino acids)

### Carboxypeptidase E (CPE)

After convertase cleavage, the C-terminal basic residues (Lys/Arg) left at the cleavage site are removed by [[../molecules/proteins/cpe|carboxypeptidase E]] (also called carboxypeptidase H). CPE is the principal carboxypeptidase in regulated secretory granules and is required for generating the des-basic forms of all POMC-derived peptides prior to amidation [^bicknell2008].

### PAM — peptidylglycine α-amidating monooxygenase

The C-terminal amide of **α-MSH** (Tyr-Ser-Met-Glu-His-Phe-Arg-Trp-Gly-Lys-Pro-Val-NH₂) is introduced by [[../molecules/proteins/pam|PAM]] (peptidylglycine α-amidating monooxygenase), a bifunctional copper/ascorbate-dependent enzyme. Amidation is required for full α-MSH bioactivity at MC1R–MC4R and for resistance to exopeptidase degradation [^bicknell2008].

## Tissue-specific processing logic

The same POMC precursor yields very different peptide outputs depending on the convertase complement of the expressing cell [^bicknell2008]:

| Tissue | PC1/3 | PC2 | Primary outputs |
|---|---|---|---|
| Anterior pituitary (corticotrophs) | High | Absent/low | ACTH (1–39), N-POMC, β-LPH |
| Intermediate pituitary (melanotrophs; rodents only) | High | High | α-MSH, CLIP, γ-LPH, β-endorphin |
| Hypothalamic arcuate POMC neurons | High | High | α-MSH, β-endorphin |
| Skin keratinocytes / melanocytes | Variable | Low | α-MSH, ACTH (low quantities) |
| Immune cells, gut | Variable | Variable | ACTH, β-endorphin |

In adult humans, the intermediate lobe is rudimentary, so the corticotroph pattern (ACTH-dominant) predominates in the pituitary. However, arcuate POMC neurons retain the dual PC1/3+PC2 complement and are the primary source of hypothalamic α-MSH and β-endorphin for energy regulation [^bicknell2008].

**Human pituitary note:** A minority (~15–20%) of human anterior pituitary ACTH is further processed via a **cathepsin L-dependent pathway** that operates in parallel with PCSK1/PCSK2 and can generate α-MSH-like fragments; this pathway is upregulated in pituitary adenomas [^hook2009]. Its significance for normal aging physiology is unclear #gap/no-mechanism.

## Post-cleavage modifications

| Modification | Enzyme | Target peptide | Functional consequence |
|---|---|---|---|
| C-terminal amidation | PAM | α-MSH, β-endorphin (des-Tyr form) | Required for full MC1R–MC4R bioactivity |
| N-terminal acetylation | N-acetyltransferase (PNMT-related?) | α-MSH → Ac-α-MSH; β-endorphin → Ac-β-endorphin | Ac-α-MSH has higher MC1R affinity; Ac-β-endorphin is inactive at opioid receptors |
| O-glycosylation | Golgi glycosyltransferases | ACTH, β-LPH | Modulates half-life; no receptor-level functional difference established |
| Phosphorylation | CK2 | POMC itself | Modulates sorting and secretion rate |

## Aging context

### PC2 dysregulation in arcuate POMC neurons

A 1995 study examined prohormone convertase mRNA in the hypothalamic arcuate nucleus of female C57BL/6J mice across the lifespan. By Northern blot and in situ hybridization, PC2 mRNA levels were significantly elevated (at least 2-fold by double-label in situ hybridization in POMC neurons specifically; p < 0.05 by Northern blot) in middle-aged (12–13 months, irregularly cycling) versus young (4–5 months, normally cycling) mice, while PC1 and furin mRNA levels were unchanged in middle-aged animals. In old mice, furin mRNA was additionally significantly reduced relative to both young and middle-aged animals. The mechanism: PC2 is the enzyme that cleaves β-endorphin-(1-31) to shorter, functionally distinct fragments β-endorphin-(1-27) and -(1-26); elevated PC2 in middle-aged arcuate POMC neurons correlates with an increased proportion of these shorter β-endorphin forms previously documented in this strain. The authors propose that the natural age-related shift in β-endorphin peptide processing is mediated by increased PC2 expression [^joshi1995]. Whether the increased PC2 also shifts ACTH → α-MSH processing (a second-stage cleavage also catalyzed by PC2) and whether this alters satiety or HPA tone has not been tested. #gap/needs-replication (single study, female-only, single mouse strain, abstract-only access — full statistics and n per group not confirmed) #gap/needs-human-replication

### SIRT1–PC2 axis and caloric restriction signaling

A 2016 JBC study from Nillni's group showed that **SIRT1** — the NAD+-dependent deacetylase and canonical mediator of caloric-restriction signaling — regulates PC2 production in **paraventricular nucleus (PVN) CRH neurons**. The study's subject is pro-CRH processing, not POMC processing. SIRT1 activity in the PVN increases biosynthesis of PC2 (via transcriptional regulation of the preproPC2 gene, mediated at least in part by FoxO1); elevated PC2 in turn drives maturation of pro-CRH into bioactive CRH(1-41), increasing HPA-axis output (elevated serum ACTH and glucocorticoids in lean and diet-induced obese rats). Pharmacological SIRT1 inhibition (icv Ex-527, 5 µg) reduced PVN PC2 protein and blunted CRH production in diet-induced obese rats; pharmacological SIRT1 activation (icv SA3, 3–6 µg/rat) increased PVN PC2 and PC1 and elevated serum ACTH and corticosterone. The model organism was male Sprague-Dawley rats; anterior pituitary POMC, PC1, and CPE were also elevated with SIRT1 activation — an indirect downstream consequence of increased hypothalamic CRH driving ACTH synthesis [^nillni2016]. **This study does not test SIRT1 regulation of PC2 in arcuate POMC neurons**; the PVN and ARC are anatomically and functionally distinct, and SIRT1's effects may be region- and substrate-specific. Whether the same SIRT1→PC2 axis operates on POMC processing (rather than CRH processing) in aged arcuate neurons has not been directly tested. #gap/needs-replication — POMC-specific applicability of this axis in arcuate neurons is inferred, not demonstrated.

### POMC deficiency: a model of downstream pathway failure

Homozygous or compound heterozygous loss-of-function mutations in *POMC* itself cause a recognizable syndrome: severe early-onset obesity, red hair (due to absent MC1R stimulation in melanocytes), and secondary adrenal insufficiency (absent ACTH) [^krude1998]. This phenotype precisely mirrors what would be expected from global failure of the POMC processing cascade output — providing genetic proof-of-concept that the pathway products are non-redundant for human metabolic physiology.

### Age-related hypothalamic inflammation and POMC neuron loss

Independent of convertase regulation, the number and transcriptional activity of hypothalamic POMC neurons decline with age in rodents, associated with hypothalamic inflammation (microglial activation, NF-κB signaling). This upstream loss of POMC-expressing cells reduces the substrate available for processing. The relative contribution of (a) fewer POMC neurons vs. (b) altered convertase ratios in the remaining neurons to age-associated changes in α-MSH tone is not resolved. #gap/no-mechanism

## Druggability

**Druggability tier: 2** — PCSK1/PCSK2 are biochemically druggable serine proteases; no FDA-approved drug directly targets either convertase for an aging indication. The clinical evidence base for targeting this pathway in aging is limited to:

1. **Setmelanotide** ([[../molecules/compounds/setmelanotide|setmelanotide]]): a cyclic peptide MC4R agonist approved (2020) for POMC deficiency, PCSK1 deficiency, and LEPR deficiency-associated obesity. It bypasses the upstream processing failure; it does not modulate convertase activity. Not an aging intervention.
2. **CPE-knockout models**: CPE-deficient (fat/fat) mice are hyperphagic and severely obese; CPE is a compelling target but no clinical CPE modulator exists. #gap/unsourced — no PCSK1/PCSK2 small-molecule inhibitor in clinical use for any indication as of 2026.

The aging-context druggability tier 2 reflects that high-quality tool compounds exist for the convertases (e.g., the fluorogenic substrate systems in Seidah's group), but no clinical-stage compound targets PC1/3 or PC2 directly in an aging context.

## Canonical IDs and databases

| Resource | ID | Notes |
|---|---|---|
| KEGG | null | No dedicated POMC-processing pathway entry; see hsa04080 (neuroactive ligand-receptor interaction) for product receptors #gap/needs-canonical-id |
| Reactome | R-HSA-265301 (Corticotropin cleavage from POMC) | Reaction-level entry under R-HSA-209952 (Peptide hormone biosynthesis) → R-HSA-2980736 (Peptide hormone metabolism) → R-HSA-392499 (Metabolism of proteins). R-HSA-264876 is insulin processing, not POMC. No dedicated top-level POMC-processing pathway exists in Reactome; R-HSA-265301 is the closest confirmed entry. |
| WikiPathways | null | No confirmed WikiPathways entry #gap/needs-canonical-id |
| PCSK1 UniProt | P29120 (human) | PCSK1 protein page: [[../molecules/proteins/pcsk1]] (implicit stub) |
| PCSK2 UniProt | P16519 (human) | PCSK2 protein page: [[../molecules/proteins/pcsk2]] (implicit stub) |
| CPE UniProt | P16870 (human) | CPE protein page: [[../molecules/proteins/cpe]] (implicit stub) |
| PAM UniProt | P19021 (human) | PAM protein page: [[../molecules/proteins/pam]] (implicit stub) |

## Limitations and gaps

- **No dedicated top-level Reactome entry** — Reactome has a reaction-level entry R-HSA-265301 (Corticotropin cleavage from POMC) nested under R-HSA-209952 (Peptide hormone biosynthesis), but no standalone POMC-processing pathway at the top level. KEGG and WikiPathways have no POMC-processing pathway entry confirmed. #gap/needs-canonical-id (KEGG and WikiPathways only; Reactome reaction entry confirmed)
- **Aging data is sparse and dated** — the key aging-related convertase study [^joshi1995] is a 1995 single-strain female-mouse dataset; the abstract-accessible data show a ≥2-fold PC2 mRNA increase in 12–13 month vs 4–5 month POMC neurons (p < 0.05), but full statistics, per-group n, and histological detail require the full text (paper is closed-access). The mechanism identified is specific to β-endorphin processing, not α-MSH production. No human aging cohort data exists on hypothalamic PC1/3 or PC2 expression. #gap/needs-human-replication
- **SIRT1–PC2 axis** [^nillni2016] was established in **PVN CRH neurons** for pro-CRH processing; applicability to arcuate POMC neurons is not tested in this paper and cannot be directly inferred. #gap/needs-replication
- **Intermediate lobe is vestigial in adult humans** — much rodent POMC-processing literature (especially PC2-driven α-MSH from the NIL) does not extrapolate directly to human pituitary. Extrapolation applies only for arcuate neurons and peripheral sites.
- **α-MSH N-acetyltransferase identity** remains uncertain in humans — the enzyme responsible for α-MSH N-acetylation in arcuate neurons is not definitively identified. #gap/no-mechanism

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (PC1/3, PC2, CPE, PAM all expressed; intermediate-lobe pattern differs) |
| POMC deficiency phenotype conserved? | yes (Krude 1998 — severe obesity, adrenal insufficiency, red hair) |
| Replicated aging data in humans? | no — all aging-convertase data is rodent only |

## Cross-references

- [[../molecules/proteins/pomc]] — the precursor protein (wave 1 seed)
- [[../molecules/proteins/alpha-msh]] — primary anorexigenic output (R35-Stage2 stub)
- [[../molecules/compounds/setmelanotide]] — MC4R agonist bypassing POMC processing failure (wave 1)
- [[../molecules/compounds/kpv]] — α-MSH(11-13) tripeptide fragment (R36 stub)
- [[melanocortin-system]] — downstream receptors and pharmacology
- [[../molecules/proteins/mc4r]] — primary energy-balance receptor downstream of α-MSH (R35-Stage2)
- [[insulin-igf1]] — upstream regulator of POMC neuron activity
- [[deregulated-nutrient-sensing]] — hallmark context
- [[../molecules/proteins/pcsk1]] — PC1/3 (implicit stub)
- [[../molecules/proteins/pcsk2]] — PC2 (implicit stub)
- [[../molecules/proteins/cpe]] — carboxypeptidase E (implicit stub)
- [[../molecules/proteins/pam]] — PAM amidating enzyme (implicit stub)

## Footnotes

[^bicknell2008]: doi:10.1111/j.1365-2826.2008.01709.x · Bicknell AB · *J Neuroendocrinol* 2008 · review · 131 citations · tissue-specific POMC processing; PC1/3 vs PC2 substrate specificity; CPE and PAM roles · archive: confirmed (doi-keyed), PDF failed download (status: failed)

[^seidah1994]: doi:10.1016/0076-6879(94)44015-8 · Seidah NG, Chrétien M · *Methods Enzymol* 1994 · review · 89 citations · subtilisin/kexin family proprotein convertases; biochemical mechanism and substrate recognition · archive: confirmed (doi-keyed), not_oa

[^jackson1997]: doi:10.1038/ng0797-303 · Jackson RS et al. · *Nat Genet* 1997 · observational (human genetics) · 1152 citations · PCSK1 LoF mutations → obesity + impaired prohormone processing · archive: confirmed (doi-keyed), not_oa

[^krude1998]: doi:10.1038/509 · Krude H et al. · *Nat Genet* 1998 · observational (human genetics, case series) · 1717 citations · POMC LoF → severe early-onset obesity, adrenal insufficiency, red hair · archive: confirmed (doi-keyed), not_oa

[^hook2009]: doi:10.1007/s12020-009-9163-5 · Hook VY et al. · *Endocrine* 2009 · in-vitro + human tissue · 33 citations · dual cathepsin L + PCSK pathway in human pituitary for POMC → ACTH/α-MSH/β-endorphin · archive: confirmed (doi-keyed), pending download

[^joshi1995]: doi:10.1210/en.136.6.2721 · Joshi D, Miller MM, Seidah NG, Day R · *Endocrinology* 1995 · in-vivo · PMID:7750497 · PC2 mRNA ≥2-fold elevated in arcuate POMC neurons of middle-aged (12–13 month, irregularly cycling) vs young (4–5 month, normally cycling) female C57BL/6J mice by double-label in situ hybridization (p < 0.05 by Northern blot); PC1 and furin unchanged at middle age; furin additionally reduced in old mice. Mechanism: PC2 drives β-endorphin-(1-31) cleavage to shorter -(1-27)/-(1-26) forms observed in aging. · model: female C57BL/6J mice · archive: not_oa; claims verified against PubMed abstract (PMID 7750497); full PDF unavailable — per-group n and complete statistics not confirmed #gap/no-fulltext-access

[^nillni2016]: doi:10.1074/jbc.m115.675264 · Toorie AM, Cyr NE, Steger JS, Beckman R, Farah G, Nillni EA · *J Biol Chem* 2016 · in-vivo (male Sprague-Dawley rat) + in-vitro (N43-5 hypothalamic, AtT20 corticotroph cell lines) · CAUTION: study is about SIRT1→PC2 regulation of **CRH processing in PVN neurons**, not POMC processing in arcuate neurons. PVN SIRT1 increases preproPC2 biosynthesis (via FoxO1) → PC2 elevates pro-CRH→CRH(1-41) maturation → increased ACTH + glucocorticoids. SIRT1 inhibition (icv Ex-527 5 µg) reduced PVN PC2 in DIO rats; SIRT1 activation (icv SA3 3–6 µg/rat) increased PC2 and serum ACTH/corticosterone in lean and DIO rats. Anterior pituitary POMC and PC1 increased as downstream consequence of elevated CRH signaling. Arcuate POMC neurons not directly studied. · archive: downloaded (hybrid OA)
