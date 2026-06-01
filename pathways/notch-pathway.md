---
type: pathway
aliases: [Notch signaling, Notch pathway, Delta-Notch signaling, Notch/CSL pathway]
kegg: hsa04330
reactome: R-HSA-157118
wikipathways:
key-nodes:
  - "[[notch1]]"
  - "[[notch2]]"
  - "[[notch3]]"
  - "[[notch4]]"
  - "[[dll1]]"
  - "[[dll3]]"
  - "[[dll4]]"
  - "[[jag1]]"
  - "[[jag2]]"
  - "[[adam10]]"
  - "[[adam17]]"
  - "[[presenilin-1]]"
  - "[[presenilin-2]]"
  - "[[rbpj]]"
  - "[[maml1]]"
  - "[[hes1]]"
  - "[[hey1]]"
upstream: ["[[wnt-beta-catenin]]", "[[delta-like-ligand-expression]]"]
downstream: ["[[stem-cell-self-renewal]]", "[[cell-fate-determination]]", "[[hes-hey-transcription]]"]
hallmarks: ["[[stem-cell-exhaustion]]"]
sens-categories: []
druggability-tier: 1
caused-by: []
causes: ["[[stem-cell-exhaustion]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "R20 lightweight verifier sweep — DOIs cross-checked via DOI lookup (all 6 cited DOIs match cited author/year/topic); cross-link integrity confirmed against satellite-cells, hematopoietic-stem-cells, wnt-beta-catenin. Quantitative claims sourced via wikilinks to atomic pages — primary-PDF verification not performed (synthesis discipline)."
---

# Notch signaling pathway

The **Notch pathway** is an evolutionarily ancient juxtacrine signaling mechanism that requires direct cell-cell contact between signal-sending and signal-receiving cells. It acts as a master regulator of cell fate decisions, stem cell self-renewal, and tissue homeostasis across virtually all metazoan tissues. In aging biology, Notch is most important for its decline in skeletal muscle satellite cells and hematopoietic stem cells: reduced Notch activity with age impairs regenerative capacity, contributing directly to the [[stem-cell-exhaustion]] hallmark.

> **Naming note:** This page (`[[notch-pathway]]`) covers the pathway. Individual receptor protein pages (e.g., `[[notch1]]`, `[[notch3]]`) will, when seeded, live under `molecules/proteins/`. The pathway page is the canonical cross-link target for pathway-level claims.

---

## Receptors and ligands

Notch signaling operates through four single-pass transmembrane receptors (NOTCH1–4) and five membrane-bound ligands on the opposing cell:

| Class | Members | Notes |
|---|---|---|
| **Delta-like (DLL)** | DLL1, DLL3, DLL4 | DLL3 is an atypical ligand that inhibits rather than activates Notch in *cis* |
| **Jagged (JAG)** | JAG1, JAG2 | Generally weaker activators than DLL4; more prominent in vascular and hepatic contexts |

**Key structural features of receptors.** Each Notch receptor is synthesized as a precursor that is processed in the *trans*-Golgi by furin proteases (S1 cleavage) to yield a heterodimeric receptor at the cell surface held together non-covalently. The extracellular domain contains EGF-like repeats (29–36 per receptor) that mediate ligand binding, and a negative regulatory region (NRR) that prevents premature activation.

The pathway is **context-sensitive**: DLL ligands tend to produce Notch1/3 activation states associated with proliferation/self-renewal; JAG ligands tend to produce Notch2-biased states associated with differentiation. This DLL-vs-JAG bias in cell-fate output is not fully mechanistically explained. #gap/no-mechanism

---

## Mechanism: the S1/S2/S3 cleavage cascade

Notch receptor activation proceeds through three sequential proteolytic cleavages:

```
LIGAND (DLL/JAG) on signal-sending cell
    |
    | [physical endocytosis-driven tension]
    v
S2 cleavage — ADAM10 or ADAM17 (metalloprotease) cleaves juxtamembrane
    → generates membrane-anchored NEXT fragment
    |
S3 cleavage — γ-secretase complex (presenilin-1/2, nicastrin, APH-1, PEN-2)
              cleaves within the transmembrane domain
    → releases Notch Intracellular Domain (NICD)
    |
    v
NICD translocates to nucleus
    |
    | displaces co-repressor (NCOR2/HDAC complex) from RBPJ/CSL
    v
NICD + RBPJ/CSL + MAML1-3 coactivator → transcriptional activation
    |
    v
Target genes: HES1, HES5, HEY1, HEY2, MYC, CDKN1A (p21),...
```

**Mechanistic details.**
- S2 cleavage is rate-limiting and depends on ligand endocytosis in the sending cell, which generates a pulling force that exposes the S2 site on the receiving cell's receptor.
- The γ-secretase complex responsible for S3 cleavage contains presenilin-1 or -2 as the catalytic aspartyl protease. Presenilin also cleaves amyloid precursor protein (APP); γ-secretase inhibitors (GSIs) intended as AD therapeutics therefore obligately inhibit Notch signaling, which underlies their toxicity.
- **Non-canonical (CSL-independent) Notch signaling** has been described (e.g., mTOR activation, cytoskeletal regulation) but is less well-characterized and outside the scope of this page. #gap/unsourced

---

## Aging biology

### Skeletal muscle satellite cells (foundational evidence)

Satellite cells are the resident muscle stem cells responsible for repair and regeneration of skeletal muscle. Notch signaling is required for satellite cell activation and expansion following injury.

Notch activity declines with age in mouse satellite cells, and experimental restoration of Notch signaling substantially restores regenerative capacity in aged muscle [^conboy2003].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes (reduced satellite cell number and regeneration with human aging) |
| Replicated in humans? | in-progress — human satellite cell Notch studies exist but heterochronic parabiosis not done in humans |

In the Conboy 2003 heterochronic parabiosis model, aged mice surgically joined to young mice showed improved satellite cell activation, and DLL1 expression on activated satellite cells was reduced in aged muscle relative to young controls [^conboy2003]. This established the hypothesis that a declining systemic/paracrine DLL1 signal is a key driver of aged muscle regenerative failure. #gap/needs-replication — the identity of the systemic DLL1-presenting cell has not been established.

### Wnt/Notch balance in aged satellite cells

Aging shifts the transcriptional balance in satellite cells away from Notch (self-renewal) toward Wnt/β-catenin (differentiation/fibrosis), converting myogenic progenitors into fibro/adipogenic lineages [^brack2007]. This Wnt gain-of-function phenotype is partially separable from the Notch loss-of-function; both contribute to the age-associated decline in muscle regeneration [^brack2007].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (fibrotic conversion) conserved in humans? | partial — fibrotic replacement of aged human muscle is documented; the Wnt/Notch molecular driver is inferred |
| Replicated in humans? | no (direct molecular evidence limited) |

See [[wnt-beta-catenin]] for the Wnt side of this balance, and [[satellite-cells]] for the full satellite cell aging picture.

### Hematopoietic stem cells (HSCs)

Notch signaling decline is implicated in HSC self-renewal loss with age. Canonical Notch target genes (HES1, HES5) are progressively lost in aged HSCs in mouse bone marrow, and this correlates with skewed differentiation toward myeloid lineages (a hallmark of [[immunosenescence]] and [[anemia-of-aging]]). The mechanistic link between Notch decline and HSC myeloid bias is not fully established. #gap/no-mechanism #gap/needs-human-replication

See [[hematopoietic-stem-cells]] for full HSC aging evidence.

### Thymic involution

Notch signaling in thymic epithelial cells (TECs) supports the cortical–medullary architecture required for T cell development. Abrogation of TEC-specific Notch signaling leads to accelerated medullary TEC degeneration and premature thymic atrophy in mouse models, suggesting a role in age-related thymic involution [^garciâleon2022]. This has not been tested in human aging contexts. #gap/needs-human-replication

---

## Disease associations

### CADASIL (NOTCH3 missense mutations)

**Cerebral Autosomal Dominant Arteriopathy with Subcortical Infarcts and Leukoencephalopathy** is caused by missense mutations in NOTCH3 that stereotypically add or remove cysteine residues in the EGF-like repeats of the extracellular domain [^joutel1996]. This leads to abnormal NOTCH3 ectodomain accumulation in the walls of small cerebral arteries, resulting in recurrent stroke and progressive vascular dementia with onset in middle age (40–60 years). CADASIL is the most common monogenic cause of hereditary stroke.

Canonical NOTCH3 signaling function is not necessarily abrogated — the disease mechanism appears to involve toxic gain-of-function protein aggregation rather than loss of signaling per se. #gap/no-mechanism — the molecular link between cysteine-mutant NOTCH3 aggregation and vascular smooth muscle pathology is not fully resolved.

### Alagille syndrome (JAG1/NOTCH2 loss-of-function)

Alagille syndrome is a multi-system disorder caused predominantly by haploinsufficient loss-of-function mutations in **JAG1** (~90% of cases) and less commonly **NOTCH2** (~2%) [^li1997]. Clinical features include bile duct paucity (leading to cholestasis and liver disease), cardiac defects (especially peripheral pulmonary artery stenosis), butterfly vertebrae, posterior embryotoxon, and facial dysmorphism. The hepatic phenotype arises from insufficient JAG1-NOTCH2 signaling required for bile duct morphogenesis.

### T-cell acute lymphoblastic leukemia (NOTCH1 gain-of-function)

Activating mutations in **NOTCH1** — predominantly in the heterodimerization domain (HD mutations, destabilizing the NRR) and PEST domain (truncations extending NICD half-life) — occur in >50% of human T-ALL cases [^weng2004]. This is one of the highest mutation frequencies for any signaling gene in any cancer type, establishing NOTCH1 as a validated oncogenic driver in T cell malignancy.

---

## Therapeutic landscape

### γ-secretase inhibitors (GSIs)

GSIs block S3 cleavage and therefore prevent NICD release from all four Notch receptors simultaneously (pan-Notch inhibition). They were clinically explored in:

1. **Alzheimer's disease** — semagacestat (LY450139, Eli Lilly) reached Phase 3 IDENTITY trials. The trial was halted early: semagacestat worsened cognitive outcomes compared to placebo and produced Notch-related adverse effects including skin and GI toxicity [^henley2014]. The AD failure reflected both the Notch off-target toxicity and uncertainty about γ-secretase's role in Aβ processing at the doses tested.
2. **Oncology (T-ALL, colorectal cancer)** — GSIs are still investigated in hematologic malignancies and Notch-driven solid tumors but are limited by intestinal goblet cell metaplasia (a Notch loss-of-function phenotype in intestinal stem cells) that requires corticosteroid co-administration.

#gap/dose-response-unclear — whether partial, receptor-selective, or intermittent GSI dosing could achieve therapeutic benefit in cancer or aging without prohibitive Notch toxicity is unresolved.

### Notch-specific therapeutic antibodies

Several biologics targeting individual Notch pathway components have entered clinical development, primarily in oncology:

| Agent | Target | Mechanism | Clinical status (oncology) |
|---|---|---|---|
| Brontictuzumab (OMP-52M51) | NOTCH1 | Anti-NOTCH1 mAb, blocks ligand binding | Phase 1/2 (AML, T-ALL, colorectal) |
| Demcizumab (OMP-21M18) | DLL4 | Anti-DLL4 mAb, blocks DLL4-NOTCH interaction (anti-angiogenic + Notch) | Phase 2 (NSCLC, pancreatic); discontinued for safety |
| Navicixizumab (OMP-305B83) | DLL4 + VEGF | Bispecific | Phase 1/2 |

#gap/long-term-unknown — None of these agents has been evaluated in an aging or geroprotection context; their use in aging biology is entirely speculative at this stage.

### Notch activation as a pro-regenerative strategy

Given that aging is characterized by Notch decline (not excess) in stem cell compartments, the therapeutic logic for aging is opposite to cancer: **activating** rather than inhibiting Notch signaling to restore regenerative capacity. Approaches under investigation include:

- Synthetic DLL1/DLL4 ligands (immobilized on scaffolds) for *ex vivo* HSC expansion and satellite cell activation.
- Small molecules that stabilize NICD or inhibit NUMB (the endogenous Notch antagonist) — all preclinical. #gap/needs-human-replication

---

## Cross-pathway interactions

| Interaction partner | Nature | Aging relevance |
|---|---|---|
| [[wnt-beta-catenin]] | Reciprocal inhibition in satellite cells; Wnt gain-of-function suppresses Notch | Central to aged satellite cell fibrotic conversion [^brack2007] |
| [[mtor]] | mTOR activity can suppress NICD stability via phosphorylation-driven proteasomal degradation; exact directionality cell-type-dependent | #gap/no-mechanism — directionality in adult stem cells not established |
| [[nf-kb]] | NF-κB (chronic inflammation) may suppress Notch in muscle; inflammaging → Notch decline is hypothesized | #gap/no-mechanism |
| [[p53-pathway]] | NOTCH1 directly activates p21 (CDKN1A), linking Notch to growth arrest | Known; not specifically aging-studied |

---

## Limitations and gaps

- **Human satellite cell data.** The foundational Conboy 2003 and Brack 2007 papers are in mouse. Human satellite cell Notch aging data exists but is less mechanistic. Cross-linking to [[satellite-cells]] once that page is fleshed out. #gap/needs-human-replication
- **Notch decline mechanism in aging.** Why Notch signaling declines in aged muscle and HSCs is not fully resolved: proposed causes include reduced ligand expression on niche cells, epigenetic silencing of Notch target genes, increased NUMB expression, and chronic NF-κB activity. No single mechanism is established. #gap/no-mechanism
- **Receptor-selectivity of therapeutic antibodies.** Current anti-Notch antibodies are receptor-specific but may still hit the wrong tissues. Tissue-targeted delivery for Notch activation in stem cell niches has not been demonstrated in vivo. #gap/needs-replication
- **WikiPathways ID.** WikiPathways community-curated ID for Notch signaling was not verified in this pass; frontmatter field left blank. #gap/needs-canonical-id
- **ADAM10 vs ADAM17 specificity.** ADAM10 is the primary sheddase for most Notch receptors; ADAM17 (TACE) is more prominent under inflammatory conditions and for NOTCH1 in some contexts. The cell-type-specific rules governing ADAM10 vs ADAM17 usage are not fully characterized. #gap/no-mechanism

---

## Footnotes

[^conboy2003]: doi:10.1126/science.1087573 · Conboy IM, Conboy MJ, Smythe GM, Rando TA · *Science* 2003 · in-vivo · model: aged C57BL/6 mouse; heterochronic parabiosis · n not extractable from archive (closed-access, not_oa) · foundational paper establishing Notch decline in aged satellite cells and DLL1 reduction in aged muscle
[^brack2007]: doi:10.1126/science.1144090 · Brack AS, Conboy MJ, Roy S, Lee M, Kuo CJ, Keller C, Rando TA · *Science* 2007 · in-vivo · model: aged mouse; parabiosis + Wnt pathway manipulation · n not extractable from archive (closed-access, not_oa) · establishes Wnt/Notch balance shift in aged satellite cells and fibrotic fate conversion
[^joutel1996]: doi:10.1038/383707a0 · Joutel A et al. · *Nature* 1996 · observational/genetic · model: human CADASIL kindreds · foundational paper identifying NOTCH3 missense mutations as cause of CADASIL
[^li1997]: doi:10.1038/ng0797-243 · Li L et al. · *Nature Genetics* 1997 · observational/genetic · model: Alagille syndrome families · foundational paper establishing JAG1 mutations as cause of Alagille syndrome
[^weng2004]: doi:10.1126/science.1102160 · Weng AP, Ferrando AA et al. · *Science* 2004 · observational/genetic · model: human T-ALL primary samples · >50% of T-ALL cases harbor activating NOTCH1 mutations
[^henley2014]: doi:10.1185/03007995.2014.939167 · Henley DB et al. · *Current Medical Research and Opinion* 2014 · rct (Phase 3 safety analysis) · n=not extracted · model: humans (Alzheimer's disease, IDENTITY trial) · semagacestat worsened cognition and produced Notch-related adverse events; green OA available
