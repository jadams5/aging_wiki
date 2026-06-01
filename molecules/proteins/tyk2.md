---
type: protein
aliases: [tyrosine kinase 2, JAK family kinase TYK2, TYK2 kinase]
uniprot: P29597
ncbi-gene: 7297
hgnc: 12440
ensembl: ENSG00000105397
mouse-ortholog: Tyk2
genage-id: null
pathways:
  - "[[jak-stat-pathway]]"
  - "[[type-i-interferon-signaling]]"
hallmarks:
  - "[[chronic-inflammation]]"
sens-categories: []
druggability-tier: 1
gtex-aging-correlation: null
mr-causal-evidence: yes
caused-by: []
causes:
  - "[[chronic-inflammation]]"
verified: true
verified-date: 2026-05-13
verified-by: claude
verified-scope: "Dendrou 2016 PDF verified (disease count, allele frequency, signaling magnitudes); Roskoski 2023 PDF verified (domain architecture, JH2 mechanism, selectivity ratios, FDA approval); Armstrong 2025 PDF verified (post-hoc design clarified, PASI outcomes corrected); UniProt P29597 domain residue ranges confirmed via REST API. Kreins 2015 (not_oa) and Chen 2025 (not_oa) not PDF-verified — tagged #gap/no-fulltext-access in footnotes."
literature-checked-through: 2026-05-13
---


# TYK2 (tyrosine kinase 2)

TYK2 is a non-receptor tyrosine kinase of the Janus kinase (JAK) family, constitutively associated with cytokine receptor subunits IFNAR1 (type-I IFN), IL-12Rβ1 (IL-12/IL-23), and IL-10Rβ. It is the canonical signal transducer for type-I interferon and IL-12/IL-23 axes — two signaling arms directly relevant to the [[chronic-inflammation|inflammaging]] phenotype of aging. Loss-of-function (LOF) variants in humans cause susceptibility to mycobacterial infection but confer strong protection against autoimmune disease, making TYK2 a rare example of a gene with direct human Mendelian-randomization evidence for the **inflammaging-vs-host-defense tradeoff**. The first-in-class allosteric TYK2 inhibitor **deucravacitinib** (Sotyktu, BMS) received FDA approval in September 2022 for moderate-to-severe plaque psoriasis, establishing JH2 pseudokinase-domain inhibition as a viable and highly selective pharmacological strategy.

## Identity

- **UniProt:** P29597 (TYK2_HUMAN)
- **NCBI Gene:** 7297
- **HGNC symbol:** TYK2 (HGNC:12440)
- **Ensembl:** ENSG00000105397
- **Chromosomal location:** 19p13.2
- **Mouse ortholog:** *Tyk2* (one-to-one ortholog)
- **Protein length:** 1,187 amino acids (canonical isoform)
- **GenAge:** Not listed as an aging-specific gene; included here due to mechanistic role in inflammaging via IFN-α/β and IL-12/IL-23 signaling

## Domain architecture

TYK2 shares the canonical Janus-kinase "two-headed" (Janus) structure with JAK1, JAK2, and JAK3:

| Domain | Residues (approx.) | Function |
|---|---|---|
| FERM | 26–431 | Non-catalytic; mediates constitutive association with cytokine receptor subunits (IFNAR1, IL-12Rβ1, IL-10Rβ) |
| SH2-like | 450–529 | Atypical SH2; contributes to receptor coupling |
| JH2 pseudokinase | 589–875 | Catalytically impaired; autoinhibits JH1; **target of deucravacitinib** |
| JH1 kinase | 897–1176 | Catalytic domain; phosphorylates receptor subunits and STAT transcription factors |

The FERM domain is the primary receptor-docking module: it locks TYK2 to the box-1/box-2 cytoplasmic motifs of cognate receptor subunits, ensuring immediate kinase availability upon cytokine binding [^roskoski2023].

## Receptor associations and signaling context

TYK2 is constitutively paired with three receptor subunits, each anchoring a distinct cytokine axis:

| Receptor subunit | Cytokine(s) | STAT activated | Biological output |
|---|---|---|---|
| IFNAR1 | IFN-α, IFN-β | STAT1, STAT2 | Antiviral immunity; ISG expression; MHC-I upregulation |
| IL-12Rβ1 | IL-12, IL-23 | STAT4 (IL-12); STAT3 (IL-23) | Th1 differentiation (IL-12); Th17 expansion (IL-23) |
| IL-10Rβ | IL-10, IL-22, IL-28/29 | STAT3 | Anti-inflammatory; barrier repair |

Signal flow: cytokine binding → receptor dimerization → TYK2 + partner JAK (JAK1 or JAK2) transphosphorylation → receptor phosphorylation → STAT recruitment, phosphorylation, dimerization, nuclear translocation → gene expression [^roskoski2023].

In aging, chronic low-level IFN-α/β signaling (driven by endogenous nucleic acids sensed via [[cgas-sting]] and Toll-like receptors) amplifies the SASP and promotes sterile inflammation — the [[chronic-inflammation|inflammaging]] phenotype. TYK2-mediated IL-12/IL-23 signaling drives Th1/Th17 polarization that, when dysregulated, sustains chronic inflammatory states in aging tissues.

## Key PTMs

- **pY1054 / pY1055** (activation loop): autophosphorylation marks that induce full JH1 catalytic activity
- **pY604** (JH2 domain): regulatory phosphorylation in the pseudokinase domain; modulates JH1 autoinhibition
- **pY292** (JH2): additional phosphotyrosine in the pseudokinase domain

## Deucravacitinib: JH2 allosteric mechanism

Deucravacitinib (BMS-986165; brand name Sotyktu) is an oral small molecule that binds the **regulatory ATP site of the JH2 pseudokinase domain** rather than the JH1 catalytic domain. This allosteric mechanism is the key pharmacological innovation [^roskoski2023]:

- JH2 contains a degenerate ATP-binding pocket (catalytically inactive but able to bind nucleotides and small molecules)
- Deucravacitinib locks JH2 in a conformation that maintains autoinhibitory suppression of JH1
- Because JAK1, JAK2, and JAK3 lack a competent JH2 regulatory site in the same configuration, deucravacitinib achieves 100- to 200-fold selectivity for TYK2 over JAK1/3 and ~3000-fold selectivity over JAK2 in cellular assays [^roskoski2023]

This contrasts with JH1-orthosteric JAK inhibitors (tofacitinib, baricitinib, upadacitinib), which compete with ATP at the catalytic domain and, while increasingly selective, retain clinically meaningful off-target JAK1/2/3 activity. The JH2-allosteric strategy predicts a more targeted immune modulation profile — selectively attenuating IFN-α/β and IL-12/IL-23 axes while leaving JAK1/2/3-dependent cytokines (e.g., IL-6, GM-CSF, EPO) less affected.

**FDA approval (September 2022):** deucravacitinib is approved at 6 mg once daily for adults with moderate-to-severe plaque psoriasis [^roskoski2023]. Primary Phase 3 POETYK PSO-1 and PSO-2 trials showed PASI 75 response rates of ~53–58% at week 16 versus ~35% for apremilast and ~9% for placebo (Armstrong et al. *J Am Acad Dermatol* 2023; Strober et al. *J Am Acad Dermatol* 2023 — primary publications not separately cited here). Armstrong et al. 2025 [^armstrong2025] is a post-hoc analysis of apremilast non-responders who switched to deucravacitinib at week 24 (n=165 switchers from PSO-1 and PSO-2); these patients achieved PASI 75 in 46.3% (PSO-1) and 42.3% (PSO-2) by week 52, demonstrating efficacy in an apremilast-refractory population.

A 2025 network meta-analysis (Chen J et al., n = 16 RCTs, ~8,000 patients) confirmed deucravacitinib superiority over apremilast and non-inferiority versus several biologics for psoriasis, with a favorable safety signal compared to JAK1/2/3 inhibitors [^chen2025].

**Aging-context rationale for druggability-tier: 1.** TYK2 is FDA-approved (deucravacitinib) for an immunoinflammatory indication whose core pathobiology — dysregulated IFN-α/β and IL-12/IL-23 signaling — directly maps to the [[chronic-inflammation]] hallmark of aging. While no aging-indication clinical trial of deucravacitinib has been completed as of 2026, the underlying cytokine axes it inhibits are the same axes driving inflammaging and immunosenescence. Tier 1 is appropriate; the aging-context engagement is mechanistically grounded even without an explicit aging-indication trial.

## TYK2 P1104A LOF variant: MR evidence for the inflammaging tradeoff

The rs34536443 / P1104A missense variant (exon 20; A→C substitution; Pro→Ala at position 1104 in the JH1 activation loop) is the most functionally characterized TYK2 LOF variant in humans. It impairs TYK2 catalytic activation in response to type-I IFN and IL-12 stimulation.

**Dendrou et al. 2016 (Science Translational Medicine)** used the P1104A variant as a Mendelian randomization instrument to resolve causal effects of TYK2 signaling amplitude on autoimmune disease risk [^dendrou2016]:

- P1104A (rs34536443) homozygous carriers show >50% lower pSTAT in response to type-I IFN and ~70% less IL-12 and IL-23 signaling compared to major-allele homozygotes; the protective dosage effect is non-additive (supralinear in homozygotes), with minor allele frequency ~0.20% in the UK general population
- The variant achieves protection by reducing TYK2-mediated IFN-α/β and IL-12 responses without abolishing them (hypomorphic, not null)
- The paper established P1104A as a human pharmacogenetic "trial" of TYK2 inhibition at the constitutional level — predicting the therapeutic window for TYK2-targeted drugs

**Autoimmune protection spectrum:** the rs34536443 minor allele is the only SNP at the TYK2 locus that protects against **10 different autoimmune conditions** (Fig. 1C) [^dendrou2016], including ankylosing spondylitis, Crohn's disease, multiple sclerosis, psoriasis, ulcerative colitis, rheumatoid arthritis, SLE, and others (full list in paper Table S1). This breadth is consistent with TYK2's role as a shared transducer across IFN-α/β and IL-12/IL-23 — the two axes most implicated in chronic autoimmune inflammation.

**The host-defense tradeoff.** The price of constitutively reduced TYK2 signaling is impaired pathogen clearance:

- **Kreins et al. 2015** described patients with complete TYK2 deficiency — recurrent mycobacterial infections (including BCG and *Mycobacterium tuberculosis*), viral infections (including severe herpes and Epstein-Barr), and susceptibility to *Salmonella*, but notably **absent hyper-IgE syndrome** (unlike human TYK2 null mutations previously described) [^kreins2015].
- Mechanistically: TYK2 deficiency impairs IFN-α/β-driven antiviral immunity AND IL-12-dependent IFN-γ production from NK/T cells — the primary anti-mycobacterial effector axis.

**Implications for aging pharmacology.** The P1104A haplotype is functionally equivalent to a moderate (not complete) TYK2 inhibitor sustained constitutively over a lifetime. Its protection against autoimmune disease without causing overt mycobacterial susceptibility in heterozygous carriers suggests there is a therapeutic window in which partial TYK2 inhibition suppresses inflammaging-relevant signaling while preserving adequate host defense. This is the scientific basis for the anticipated investigation of TYK2 inhibitors in aging-associated inflammatory conditions (e.g., frailty, cardiovascular inflammation, neuroinflammation in Alzheimer's), though no Phase 2/3 aging-indication trial of deucravacitinib has been reported as of 2026. #gap/needs-human-replication

## Pathway membership

- [[jak-stat-pathway]] — JAK family member; TYK2 is the primary transducer for IFNAR1 and IL-12Rβ1 complexes within the broader JAK-STAT signaling network
- [[type-i-interferon-signaling]] — TYK2 phosphorylates IFNAR1 and STAT1/STAT2 in the type-I IFN production and response arms; constitutive FERM-domain association with IFNAR1 is required for IFN-α/β signaling competence

## Aging-context evidence summary

| Claim | Evidence type | Human? | Note |
|---|---|---|---|
| TYK2 LOF (P1104A / rs34536443) protective vs autoimmune disease | MR / human genetics | yes | Dendrou 2016; 10 conditions; MAF ~0.20% UK |
| Complete TYK2 LOF → mycobacterial susceptibility | Human case series | yes | Kreins 2015; n=10 patients |
| Deucravacitinib suppresses IFN-α/β + IL-12/IL-23 signaling | Phase 3 RCT | yes | POETYK PSO; Armstrong 2025 |
| Chronic IFN-α/β drives inflammaging SASP | in-vitro / mouse | partial | cGAS-STING pathway; see [[cgas-sting]] |
| TYK2 as a druggable inflammaging target | None (aging indication) | no | Mechanistic extrapolation only #gap/needs-human-replication |

## Key interactors

- **IFNAR1** — constitutive FERM-domain binding; required for type-I IFN signaling
- **IL-12Rβ1** — constitutive FERM-domain binding; required for IL-12 and IL-23 signaling
- **IL-10Rβ** — constitutive FERM-domain binding; required for IL-10/IL-22 signaling
- **JAK1** — transphosphorylation partner at the IFNAR complex (JAK1 on IFNAR2 / TYK2 on IFNAR1)
- **JAK2** — transphosphorylation partner at the IL-12Rβ2/IL-12Rβ1 complex
- **STAT1, STAT2, STAT4, STAT3** — direct phosphorylation substrates; activated depending on receptor complex

## Limitations and knowledge gaps

- **No aging-indication trial.** As of 2026, deucravacitinib has not been tested in a Phase 2 or Phase 3 trial for any aging phenotype (frailty, inflammaging biomarkers, cardiovascular inflammation, neuroinflammation). The aging-context rationale is mechanistically strong but empirically untested. #gap/needs-human-replication
- **GTEx aging correlation not populated.** TYK2 tissue-by-age expression correlation (Spearman ρ across GTEx tissues) not yet extracted. Populate per `sops/finding-tissue-expression.md`. #gap/unsourced
- **Mouse aging phenotype unclear.** *Tyk2* knockout mice have been generated and show impaired IFN + IL-12 responses, but whether they show accelerated or attenuated aging phenotypes has not been systematically studied.  #gap/needs-human-replication
- **IL-23-specific inhibition tradeoff.** Selective IL-23p19 antibodies (guselkumab, risankizumab) target the same IL-23 cytokine axis as TYK2 without affecting type-I IFN. Whether JH2-allosteric TYK2 inhibition provides incremental benefit vs IL-23-selective biologics for aging-context inflammation is unstudied. #gap/needs-replication
- **Infection risk at aging doses.** The mycobacterial susceptibility signal from complete TYK2 deficiency (Kreins 2015) is most severe in the null state. Whether chronic partial TYK2 inhibition in older, immunosenescent individuals creates a qualitatively different infection-risk profile compared to younger trial populations is unknown. #gap/long-term-unknown
- **Pseudokinase domain conformational pharmacology.** The precise structural mechanism by which deucravacitinib-bound JH2 maintains JH1 autoinhibition at the atomic level has been modeled computationally but full crystallographic characterization with the intact FERM-SH2-JH2-JH1 full-length protein remains an open area. #gap/no-mechanism

## Footnotes

[^roskoski2023]: doi:10.1016/j.phrs.2022.106642 · Roskoski R Jr · *Pharmacological Research* 2023 · review · cited 70+ times (per archive) · model: biochemical/pharmacological review of deucravacitinib JH2 mechanism and FDA-approval data; citation percentile 100th in archive

[^dendrou2016]: doi:10.1126/scitranslmed.aag1974 · Dendrou CA et al. · *Science Translational Medicine* 2016 · mendelian-randomization / human genetics · model: human cohorts (multiple autoimmune GWAS datasets); n=large-scale GWAS; P1104A protective haplotype; 241 citations per archive; citation percentile 100th

[^kreins2015]: doi:10.1084/jem.20140280 · Kreins AY et al. · *Journal of Experimental Medicine* 2015 · observational · n=10 patients with complete TYK2 deficiency · model: human primary immunodeficiency case series; 349 citations per archive; citation percentile 100th; not OA locally — #gap/no-fulltext-access

[^armstrong2025]: doi:10.1007/s13555-025-01606-9 · Armstrong AW et al. · *Dermatology and Therapy* 2025 · post-hoc analysis of Phase 3 POETYK PSO-1 (n=54) and PSO-2 (n=111) apremilast non-responders switched to deucravacitinib at week 24 · model: adults with moderate-to-severe plaque psoriasis; primary POETYK PSO-1/PSO-2 week-16 efficacy data (PASI 75 ~53–58%) are from Armstrong et al. *J Am Acad Dermatol* 2023 and Strober et al. *J Am Acad Dermatol* 2023; OA (gold)

[^chen2025]: doi:10.1007/s10067-025-07597-4 · Chen J et al. · *Clinical Rheumatology* 2025 · systematic-review + meta-analysis · n=~16 RCTs (~8,000 patients) · comparative efficacy deucravacitinib vs biologics/apremilast; not OA locally
