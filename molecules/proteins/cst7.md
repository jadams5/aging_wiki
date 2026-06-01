---
type: protein
aliases: [CST7, cystatin F, cystatin-7, leukocystatin, CMAP, cystatin-like metastasis-associated protein]
uniprot: O76096
ncbi-gene: 8530
hgnc: 2479
ensembl: ENSG00000077984
genage-id: null
mouse-ortholog: Cst7
pathways: ["[[lysosomal-degradation]]"]
hallmarks: ["[[chronic-inflammation]]", "[[disabled-adaptive-immunity]]"]
sens-categories: []
druggability-tier: 4
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
literature-checked-through: 2026-05-29
verified: true
verified-date: 2026-05-29
verified-by: claude
verified-scope: "Aging-clock claim (Tyshkovskiy 2026) cross-checked against verified studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks (PDF-verified page; not re-read). Biochemistry and CNS-disease claims verified against primary-source PDFs: Daniels 2023 eLife (doi:10.7554/eLife.85279, read pp.1–15), Syage 2024 J Neuroinflammation (doi:10.1186/s12974-024-03153-0, read pp.1–6), Li 2024 J Neuroinflammation (doi:10.1186/s12974-024-03119-2, read pp.1–5), Wang 2025 J Neuroinflammation (doi:10.1186/s12974-025-03526-z, read pp.1–12). Baleviciute 2023 Nat Rev Immunol is closed-access (not_oa); treated as commentary on Daniels 2023 — no primary data claims sourced from it. Canonical-DB identity fields (UniProt O76096, NCBI Gene 8530, HGNC:2479, Ensembl ENSG00000077984) confirmed via live UniProt REST on 2026-05-29. Open Targets Platform druggability not directly queried (API errors); tier-4 assigned on structural/clinical basis. GTEx aging-correlation not populated (#gap/needs-verification remains)."
---


# CST7 (cystatin F / leukocystatin)

CST7 encodes **cystatin F** (also leukocystatin), a secreted and lysosomal glycoprotein of the cystatin superfamily that inhibits cysteine endopeptidases — primarily cathepsins L, F, K, and V — in haematopoietic cells and their tissue-resident derivatives including microglia. It is a canonical transcriptomic marker of **disease-associated microglia (DAM)** and is strongly induced in neurodegeneration and demyelination. In the aging field, `Cst7` has emerged as one of the **universal conserved mammalian genes upregulated with both chronological age and expected mortality**, naming alongside [[gpnmb|GPNMB]] and [[p21|CDKN1A]] as a core feature of the multi-species transcriptomic mortality clock.

## Identity

| Field | Value |
|---|---|
| UniProt | O76096 (CST7_HUMAN) |
| NCBI Gene | 8530 |
| HGNC symbol | CST7 |
| HGNC ID | HGNC:2479 |
| Ensembl | ENSG00000077984 |
| Chromosomal location | 20p11.21 |
| Mouse ortholog | Cst7 (NCBI Gene 13011; one-to-one) |
| GenAge | not listed |

## Biochemistry and structure

Cystatin F is a secreted glycoprotein with two N-linked glycosylation sites (Asn-62, Asn-115) and a 19-amino-acid signal peptide (residues 1–19); the mature protein is 126 amino acid residues (~15.5 kDa unglycosylated per UniProt O76096; ~17 kDa glycosylated monomer by gel; extracellular dimer ~35 kDa by non-denaturing gel).[^wang2025] Unlike most cystatins (which circulate as monomers), the secreted form of cystatin F exists predominantly as a **disulfide-linked covalent dimer** that is inhibitory-inactive; the dimer is internalized by neighbouring cells via M6P-mediated endocytosis and trafficked to the endolysosomal system, where the lysosomal protease cathepsin V cleaves 15 N-terminal amino acids from the full-length monomer to generate the fully active inhibitory monomeric form.[^wang2025] This proform-activation switch is unusual within the cystatin superfamily and provides a mechanism for spatial and temporal control of lysosomal cysteine-protease activity.

**Canonical inhibitory targets** per Wang 2025 (the most comprehensive summary review to date):

The fully processed active monomer tightly inhibits cysteine **endopeptidases** — cathepsins **L, F, K, and V** — with weaker interactions with cathepsins S and H. Critically, cathepsins **B, C, and X** (exopeptidases) are **not** inhibited by the active monomeric form.[^wang2025] UniProt O76096 independently confirms inhibition of papain and cathepsin L, with lower affinity than other cystatins, noting a potential role in immune regulation via "inhibition of a unique target in the hematopoietic system."

The connection to **cathepsin C** activity is indirect and context-dependent: the extracellular dimer can physically interact with cathepsin C in secretory contexts (e.g., neutrophil degranulation), and indirect effects on cathepsin C-dependent pathways (granzyme activation in CTL/NK cells) are documented in several reports — but direct intracellular inhibition of cathepsin C by the active monomer is not supported by Wang 2025 or by functional KO data in Daniels 2023 (which found no change in intracellular cathepsin C activity on Cst7 deletion).[^daniels2023][^wang2025]

- **Legumain** (asparaginyl endopeptidase / AEP) — some reviews list legumain as a target; not confirmed by Wang 2025's target enumeration for the active monomer. #gap/needs-verification

**Subcellular distribution** (per UniProt O76096): secreted to the extracellular space, but also found in lysosomes, endosomes, ER, Golgi, and multivesicular bodies — reflecting the proform biosynthetic pathway and active-monomer sequestration to the endolysosomal system.

## Expression pattern

CST7/Cst7 is expressed predominantly in **haematopoietic tissues** (peripheral blood cells, spleen) and their tissue-resident derivatives — particularly NK cells, cytotoxic T lymphocytes (CTL), and myeloid-lineage cells including microglia.[^wang2025] Expression in non-immune tissues is low under homeostatic conditions. This immune-restricted expression distinguishes it from the housekeeping cystatins (CST3 cystatin C, CST1 cystatin SN) and underlies its roles in regulating cytotoxic immune responses. #gap/needs-verification

In the central nervous system, **microglial expression** is low in homeostasis and strongly induced during disease — CST7 is one of the defining transcriptomic markers of the **disease-associated microglia (DAM)** state first described in Alzheimer's disease models.[^wang2025]

## Why CST7 matters for aging

### Universal mortality gene (Tyshkovskiy 2026)

In the Tyshkovskiy et al. 2026 multi-species transcriptomic-clock study, `Cst7` was identified as one of the **conserved genes positively associated with both chronological ageing and expected mortality** across mouse, rat, crab-eating macaque, and human, contributing positive clock coefficients to the elastic-net mortality-clock model.[^tyshkovskiy2026] The paper places `Cst7` alongside `Gpnmb` and `Cdkn1a`/p21 as the headline universal upregulated markers — genes reliably rising with both calendar age and age-adjusted death probability in the multi-species dataset.[^tyshkovskiy-genes]

This positions `Cst7` as part of the **chronic-inflammation and immune-dysregulation co-expression module** whose upregulation tracks mortality more faithfully than chronological-age clocks alone. See [[transcriptomic-clock-tage]] for the clock architecture and module-level context.

Unlike [[gpnmb]] and [[p21|CDKN1A]], circulating CST7 protein was not independently validated against UK Biobank mortality outcome data in this study — the plasma proteomics validation was specifically for GPNMB, CDKN1A, and LGALS3 (Olink panel coverage). Whether plasma cystatin F is an independent human mortality biomarker remains to be tested. #gap/needs-human-replication

### Disease-associated microglia (DAM) and neuroinflammation

CST7/Cst7 is a **canonical DAM marker**: single-cell RNA-seq studies of murine Alzheimer's disease models systematically identify it as one of the most upregulated genes in the shift from homeostatic to disease-associated microglial states.[^wang2025] Its induction is interpreted as part of a lysosomal-activation programme enabling microglia to handle increased phagocytic load (amyloid-beta, myelin debris, apoptotic cells).

However, functional studies reveal that the net effect of cystatin F upregulation on neuroinflammation is **context- and sex-dependent** rather than uniformly protective or pathological:

- In a 5xFAD amyloid-driven Alzheimer's model (App^NL-G-F^ knock-in mice, 12 months, both sexes), **Cst7 deletion produced sexually dimorphic outcomes**: in females, loss of Cst7 enhanced endolysosomal gene expression, increased lysosomal burden, and increased microglial Aβ uptake in vivo — paradoxically increasing amyloid-beta burden in the **subiculum** specifically (significant; cortex and hippocampus: non-significant trend); in males, Cst7 deletion reduced inflammatory signalling (Il1b, Il1a, Tnf, Cxcl2 downregulated) without any change in Aβ burden in any region.[^daniels2023] Mechanistically, the increased Aβ burden in females appears to be due to increased phagocytosis of Aβ "seeding" plaques rather than impaired degradation — intracellular cathepsin L and C activities were unchanged by Cst7 KO.[^daniels2023] The Nature Reviews Immunology commentary by Baleviciute and Keane 2023 highlighted these data as evidence that **microglial CST7 function is sex-specific**.[^baleviciute2023]
- In a murine coronavirus CNS infection model (JHMV, C57BL/6 mice, intracerebral), Cst7-KO mice controlled viral replication normally (no difference in viral titers at day 7 p.i. vs. controls). However, **Cst7-deficient mice developed more severe demyelination and impaired remyelination** during chronic disease (days 14–21 p.i.), correlating with increased T-cell infiltration and elevated T-cell chemoattractant chemokines Cxcl9 and Cxcl10, and elevated IFN-γ and perforin in CD8+ T cells — suggesting Cst7 normally dampens maladaptive T-cell amplification in demyelinating contexts without being essential for anti-viral host defence.[^syage2024]
- Monocyte-derived cystatin F (as a secreted dimer) was shown to physically associate with amyloid-beta, impairing monocyte phagocytosis and **worsening amyloid pathology and cognitive deficits** in mouse AD models.[^li2024] This monocyte-sourced pool of cystatin F may act differently from the microglial-intrinsic pool.

The review by Wang et al. 2025 summarises the current picture: "cystatin F is significantly upregulated in several CNS diseases" and "its role differs across disease contexts — serving a neuroprotective function while promoting pathological progression" depending on which cell type expresses it and which disease process is active.[^wang2025]

### Aging neuroinflammation

The combination of (a) its universal upregulation with chronological age/mortality in multi-tissue transcriptomic data and (b) its status as a DAM marker implicates cystatin F as a **molecular node linking aging-associated chronic neuroinflammation to declining microglial lysosomal efficiency**. The working model is that age-dependent upregulation of Cst7 in microglia suppresses cathepsin C-dependent protease cascades, progressively impairing phagolysosomal digestion capacity and contributing to [[chronic-inflammation]] module activation. This is mechanistically plausible but not yet demonstrated by a causal experiment with age-specific Cst7 manipulation (independently of disease context). #gap/no-mechanism

## Druggability (aging-context)

**Tier 4 — undruggable** in the current aging-intervention landscape.

CST7 is a secreted inhibitory protein rather than an enzymatic target. There are no clinical drugs, approved probes, or advanced-stage biologics targeting cystatin F for any indication as of 2026-05-29. Open Targets Platform was not directly queried (API 400/500 errors); tier 4 is assessed on absence of any clinical compound and the structural basis (endogenous inhibitor, no binding pocket for small molecules).

Wang 2025 catalogues several preclinical-only research strategies: RIPK1 pathway inhibition (necrostatin-1s), miRNA targeting (anti-miR-29a), mRNA stabilization (targeting ELAVL1), necroptosis inhibition (NSA for PD models), and A2AR modulation — all animal/in-vitro stage, no clinical agents.[^wang2025] The note about brensocatib (a cathepsin C inhibitor in bronchiectasis) is removed — cathepsin C is not a direct monomeric substrate of cystatin F (see Biochemistry section above), making this connection speculative. #gap/needs-verification on Open Targets Platform direct query.

The sexual dimorphism and context-dependence described above make the druggability path particularly unclear: the protective vs. pathological effects of cystatin F may be cell-type and disease-state specific, such that a blanket inhibitor or inducer would carry unpredictable effects. #gap/dose-response-unclear

## Relationship to other aging markers

| Marker | Relationship to Cst7 / CST7 |
|---|---|
| [[gpnmb]] | Co-top universal mortality gene (Tyshkovskiy 2026); both are DAM-expressed; GPNMB has UK Biobank plasma validation, CST7 does not yet |
| [[p21]] (CDKN1A) | Co-top universal mortality gene; mechanistically upstream (p53 → p21 → cell-cycle arrest in senescent cells); not co-expressed with Cst7 in DAM specifically |
| [[lgals3]] | Third headline mortality gene; galectin-3 is also myeloid-enriched and has plasma mortality validation |
| [[chronic-inflammation]] | Cst7/CST7 is a positive contributor to inflammation + immune modules in the Tyshkovskiy mortality clock; DAM induction is part of the aging neuroinflammatory programme |
| [[disabled-adaptive-immunity]] | Via indirect effects on cathepsin C-dependent pathways: cystatin F in extracellular / secreted contexts can suppress cathepsin C activity and thereby dampen granzyme activation in NK cells / CTL (Wang 2025); direct intracellular monomer-mediated cathepsin C inhibition is not supported by current evidence (active monomer targets cathepsins L/F/K/V, not C) |

## Evidence extrapolation

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — cystatin family proteins and cathepsin targets are conserved; human CST7 and mouse Cst7 are one-to-one orthologs |
| Age-upregulation conserved in humans? | yes — Tyshkovskiy 2026 multi-species transcriptomic clock shows conservation across rodents and primates including human tissues |
| Plasma/protein validated in humans? | no — UK Biobank proteomics validation in Tyshkovskiy 2026 covered GPNMB/CDKN1A/LGALS3 but not CST7; #gap/needs-human-replication |
| Causal for mortality? | not tested — transcriptomic associations are observational; no MR study exists |

## Limitations and gaps

- **No plasma protein validation in humans** — the Tyshkovskiy 2026 transcriptomic data are human-tissue RNA-seq; circulating CST7 protein as a mortality biomarker is untested. #gap/needs-human-replication
- **No aging-specific causal experiment** — existing Cst7 KO studies are in disease models (AD, coronavirus infection), not aged WT mice. Whether reducing or eliminating Cst7 in aged-only animals affects neuroinflammation or survival is unknown. #gap/no-mechanism
- **Sexual dimorphism unresolved at the mechanistic level** — why Cst7 has opposite effects in male and female microglia is not known; sex-specific studies dominate the recent literature but no unifying mechanism is established. #gap/no-mechanism
- **`gtex-aging-correlation`** not populated — GTEx tissue-by-age expression summary not retrieved; for verifier pass. #gap/needs-verification
- **`mr-causal-evidence: not-tested`** — no instruments from germline GWAS at the CST7 locus have been used in a Mendelian randomization study for an aging endpoint to date.
- `druggability-tier: 4` assigned based on absence of clinical drug or probe; Open Targets Platform not independently queried — verify on verifier pass. #gap/needs-verification

## Related pages

[[gpnmb]] · [[p21]] · [[lgals3]] · [[transcriptomic-clock-tage]] · [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · [[chronic-inflammation]] · [[disabled-adaptive-immunity]] · [[cell-types/microglia]]

[^tyshkovskiy2026]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · n=11,165 transcriptomes, 4 species (mouse/rat/macaque/human), >25 tissues · meta-analysis + new RNA-seq · elastic-net + Bayesian-ridge mortality clocks · model: multi-species
[^tyshkovskiy-genes]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · linear mixed-effects gene-trait associations, P_adj<0.05 · multi-tissue rodent meta-dataset + multi-species cross-validation · `Cst7` named as a positive contributor to chronological-age and mortality clocks alongside `Gpnmb` and `Cdkn1a`
[^daniels2023]: doi:10.7554/eLife.85279 · Daniels MJD et al. · *eLife* 2023 · n=5–12/group · in vivo App^NL-G-F^ 12-month-old mice, both sexes · Cst7 KO female mice showed increased endolysosomal genes, increased lysosomal burden, increased microglial Aβ uptake in vivo, and increased subicular amyloid plaque number (significant) but not cortex/hippocampus; male KO reduced inflammatory genes (Il1b, Il1a, Tnf, Cxcl2) without amyloid change in any region; intracellular cathepsin L and C activity unchanged in both sexes · model: mouse (App^NL-G-F^ amyloid knock-in, sex-stratified) · verified 2026-05-29
[^baleviciute2023]: doi:10.1038/s41577-022-00830-0 · Baleviciute A, Keane L · *Nature Reviews Immunology* 2023 · 23:73 · commentary · sex-specific profiles of microglial CST7 in AD highlighted · model: mouse/review · NOT yet verified against full text
[^syage2024]: doi:10.1186/s12974-024-03153-0 · Syage AR, Lane TE et al. · *J Neuroinflammation* 2024 · 21(1):157 · n=6/group for scRNA-seq; n=5–8 for histology · C57BL/6 Cst7-KO vs WT, JHMV i.c. infection · viral titers equivalent at day 7; chronic disease (days 14–21): Cst7-KO had increased T-cell infiltration, more axonal damage and demyelination, impaired remyelination, elevated Cxcl9/Cxcl10 T-cell chemoattractants and IFN-γ/perforin in CD8+ T cells · model: mouse (JHMV coronavirus, C57BL/6) · verified 2026-05-29
[^li2024]: doi:10.1186/s12974-024-03119-2 · Li Q et al. · *J Neuroinflammation* 2024 · 21(1):125 · AD patients + APP/PS1 mice + 5XFAD injection model · monocyte-specific cystatin F overexpression increased Aβ deposition in APP/PS1 mice; secreted cystatin F dimer in plasma exists in dimeric form and physically interacts with Aβ via specific amino acid interactions, inhibiting monocyte internalization of Aβ; tail-vein injection of recombinant cystatin F dimer (200 µg/kg every 3 days × 1 month) in 3-month-old 5XFAD mice worsened amyloid pathology and cognitive deficits; monocytic cystatin F mRNA specifically elevated in sporadic AD patients · model: mouse (APP/PS1 + 5XFAD) + human monocytes · verified 2026-05-29
[^wang2025]: doi:10.1186/s12974-025-03526-z · Wang YT et al. · *J Neuroinflammation* 2025 · 22(1):203 · review · comprehensive review of cystatin F structure, function and CNS disease roles; active monomer inhibits cathepsins L/F/K/V (not B/C/X); dimer inactive until endolysosomally processed by cathepsin V; upregulated in AD, MS, PD, ALS, stroke, AGS, prion disease, GBM; role context-dependent (neuroprotective vs. pathological depending on disease context and cell type) · model: review · verified 2026-05-29
