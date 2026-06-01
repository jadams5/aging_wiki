---
type: protein
aliases: [melanocortin 1 receptor, MSHR, MC1-R, melanocyte-stimulating hormone receptor]
uniprot: Q01726
ncbi-gene: 4157
hgnc: 6929
ensembl: ENSG00000258839
genage-id: null
is-noncoding-rna: false
pathways: ["[[melanocortin-system]]", "[[camp-signaling]]", "[[melanogenesis]]"]
hallmarks: []
sens-categories: []
druggability-tier: 1
gtex-aging-correlation: "MC1R is expressed primarily in melanocytes and corticoadrenal tissue; GTEx v2 tissue-level aging correlation not computed (melanocyte-specific expression precludes robust GTEx bulk-tissue aging ρ). #gap/needs-tissue-expression-data"
mr-causal-evidence: partial
caused-by: []
causes: []
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Canonical IDs (UniProt Q01726, NCBI 4157, HGNC:6929, Ensembl ENSG00000258839) re-confirmed via REST APIs. Feng 2015 and Gan-Or 2016 verified against full PDFs/PubMed abstracts — Gan-Or 2016 PD conditioning claim corrected (was 'melanoma-allele conditioning'; actual: heterogeneity-driven meta-analysis attenuation), Gan-Or 2016 footnote updated with full n and OR. Suzuki 1996 (bronze OA, download failed) and Kadekaro 2012 (closed-access, not_oa) verified against PubMed abstracts only — specific binding constants and in-vitro dose-response data not confirmed from full PDF; both footnotes tagged #gap/no-fulltext-access. Afamelanotide FDA approval date (October 8, 2019) confirmed via OpenFDA. Feng 2015 re-identified as review synthesizing primary sources, not a primary source for variant ORs — footnote corrected."
---

# MC1R (melanocortin 1 receptor)

MC1R is a Class A (rhodopsin-family) G-protein-coupled receptor expressed on melanocytes, keratinocytes, and immune cells. It is the canonical receptor for [[alpha-msh|α-MSH]] and ACTH, coupling via Gαs to adenylate cyclase → cAMP elevation → PKA activation → MITF-driven melanogenesis. Loss-of-function variants are the primary genetic determinant of red hair, fair skin, and impaired UV response, and confer a 2- to 4-fold elevated melanoma risk independent of pigmentation phenotype. MC1R is pharmaceutically targeted by afamelanotide (Scenesse, FDA-approved 2019 for erythropoietic protoporphyria) and by the unregulated analogue [[../compounds/melanotan-ii|Melanotan II]]. Aging relevance centers on photoaging, melanoma surveillance in older adults, and an emerging Parkinson's disease–pigmentation link.

## Identity

- **UniProt:** Q01726 (MSHR_HUMAN) — Swiss-Prot (manually reviewed), accessed 2026-05-09
- **NCBI Gene ID:** 4157
- **HGNC symbol:** MC1R
- **HGNC ID:** HGNC:6929
- **Ensembl:** ENSG00000258839
- **GenAge:** no entry (MC1R is not a catalogued longevity gene in HAGR as of 2026-05-09)
- **Mouse ortholog:** Mc1r (Extension locus, *e* allele mutations are the mouse model of red hair)
- **Length:** 317 amino acids; 7-transmembrane topology

## Structure and post-translational modifications

MC1R is a 7-TM GPCR with an extracellular N-terminus and intracellular C-terminus. Key PTMs:

- **N-linked glycosylation** at Asn29 (extracellular)
- **S-palmitoylation** at Cys315 (membrane anchoring of C-terminal tail)
- **Disulfide bond** Cys267–Cys273 (extracellular loop stabilization, required for ligand binding)
- **Calcium-coordinating residues:** Glu94, Asp117, Asp121 (ligand-binding pocket)

The ligand-binding pocket accommodates the His-Phe-Arg-Trp pharmacophore of α-MSH and ACTH. ASIP (agouti signal protein) acts as an inverse agonist, displacing α-MSH and switching eumelanin to pheomelanin production.

## Signaling mechanism

Upon α-MSH (or ACTH, or [[../compounds/melanotan-ii|Melanotan II]]) binding [^suzuki1996]:

1. **Gαs coupling** → adenylate cyclase activation → cAMP elevation
2. **PKA activation** → phosphorylation of CREB → transcriptional induction of **MITF** (microphthalmia transcription factor)
3. **MITF** drives expression of melanogenic enzymes: TYR (tyrosinase), TYRP1, DCT → eumelanin synthesis
4. **β-arrestin recruitment** (secondary pathway) — regulates receptor internalization and ERK signaling independent of G-protein

Negative regulators: MGRN1 (E3 ubiquitin ligase, displaces Gαs); OPN3 (inhibits cAMP response via competing GPCR signaling) [^rodriguez2014].

**Ligand affinity hierarchy:** α-MSH ≈ ACTH >> β-MSH > γ-MSH [^suzuki1996]. The order of affinity and potency was determined by relative-affinity assays in primary human melanocyte cultures; specific Kd values were not reported in that study. #gap/dose-response-unclear [[../compounds/melanotan-ii|Melanotan II]] (cyclic synthetic) has affinity in the low-nanomolar range with higher receptor selectivity compared to the native linear peptide.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | GPCR–cAMP–MITF axis is vertebrate-conserved |
| Phenotype conserved in humans? | yes | Red-hair LOF variants replicate across European + other populations |
| Replicated in humans? | yes | Melanoma risk replicated in multiple GWAS cohorts |

## Functional role in melanocytes

MC1R activation drives the switch from pheomelanin (red/yellow, pro-oxidant on UV exposure) to **eumelanin** (brown/black, photoprotective, free-radical quenching). Beyond pigment switching, activated MC1R → cAMP → PKA also enhances **DNA damage repair capacity** in melanocytes: α-MSH reduces UV-induced oxidative stress via a p53-mediated pathway that upregulates base excision repair (BER) components [^kadekaro2012]. This DNA-repair enhancement is MC1R-dependent — cells with loss-of-function MC1R variants show impaired post-UV BER even when pigmentation is controlled for [^abdelmalek2008].

Keratinocytes express MC1R at lower levels; UV induces keratinocyte POMC/α-MSH secretion, creating a paracrine UV-response loop.

**Immune roles:** MC1R is expressed on macrophages, dendritic cells, and neutrophils. α-MSH/MC1R signaling is anti-inflammatory (suppresses NF-κB, IL-1β, TNF-α via cAMP/PKA). This is the mechanistic basis for the anti-inflammatory applications explored in KPV (α-MSH C-terminal tripeptide) research — see [[alpha-msh]].

## Genetics and aging-relevant variants

MC1R is a highly polymorphic receptor. The canonical "red hair color" (RHC) variants that cause partial or full loss of function include:

| Variant | Effect | Melanoma OR (approx.) |
|---|---|---|
| Val60Leu (p.V60L) | partial LOF | ~1.4 |
| Asp84Glu (p.D84E) | partial LOF | established risk allele [^valverde1996] |
| Arg151Cys (p.R151C) | strong LOF | ~2.0–4.0 |
| Arg160Trp (p.R160W) | strong LOF | ~2.0–3.0; also Parkinson risk [^feng2015] |
| Asp294His (p.D294H) | partial LOF | ~1.4–2.0 |

RHC variants result in: (1) pheomelanin dominance → poor UV screening; (2) impaired DNA repair response post-UV; (3) increased reactive oxygen species in melanocytes from pheomelanin photoproducts. These combine to produce substantially elevated melanoma risk even in individuals who are not red-haired [^wendt2018].

**MR evidence (partial):** MC1R variants (particularly R151C, R160W) are used as genetic instruments in GWAS studies of melanoma risk. Mendelian randomization studies have leveraged MC1R RHC alleles to dissect whether the melanoma association is mediated by pigmentation phenotype vs. direct UV-repair impairment [^castaneda2022]. No MR study has been published specifically using MC1R alleles to instrument a longevity or pace-of-aging phenotype — hence `mr-causal-evidence: partial` (instruments available, longevity MR not yet attempted). #gap/needs-population-evidence

**Parkinson's disease link:** MC1R variants R151C and R160W are associated with Parkinson disease risk; Feng et al. review prospective cohort evidence showing R151C confers a ~3-fold increased PD risk and R160W was replicated in an independent cohort [^feng2015]. The mechanistic link is hypothesized through neuromelanin biology — dopaminergic neurons of the substantia nigra produce neuromelanin via a tyrosinase-like pathway. A genetic study by Gan-Or et al. sequenced MC1R in 539 PD patients and 265 controls (New York) plus 551 PD, 351 RBD patients, and 956 controls (European), finding no common variant independently associated with PD or RBD. A fixed-effect meta-analysis of available studies showed a marginal R160W association (OR=1.22, 95% CI 1.02–1.47, p=0.03) with significant heterogeneity; removing the heterogeneity-driving study rendered this non-significant (OR=1.11, CI 0.92–1.35, p=0.27) [^ganor2016]. The wiki's prior characterization that the null result followed "conditioning on melanoma risk alleles" was incorrect — the attenuation resulted from removal of a heterogeneous study in meta-analysis, not melanoma-allele adjustment. The causal relationship remains unresolved. #gap/contradictory-evidence

## Aging context

### Photoaging and skin aging

MC1R LOF variants accelerate photoaging phenotypes. In a melanoma case-control study population, MC1R risk variants were associated with increased periorbital skin vascular changes and photoaging markers [^suppa2011]. A GWAS in Latin Americans identified MC1R-containing loci as nominally consistent with facial skin wrinkling phenotypes, though effect sizes were small [^chen2021]. The mechanistic path: impaired MC1R function → reduced eumelanin → reduced UV absorption → greater UV-induced DNA damage → accumulation of dermal collagen fragmentation (photoaging).

### Melanoma surveillance in older adults

Melanoma incidence peaks in the 60–70s (median diagnosis age ~65). MC1R LOF variants confer additive melanoma risk atop the background age-related accumulation of UV-induced somatic mutations. The MC1R melanoma-risk contribution has been confirmed in sex-specific analyses (independent risk factor in females; attenuated in males, possibly due to higher sun exposure confounding) [^wendt2018].

### Drug interactions with aging skin

Afamelanotide (Scenesse) increases eumelanin pigmentation in MC1R LOF individuals by acting as a superpotent agonist regardless of receptor variant status — it compensates for reduced affinity of natural α-MSH for LOF variants. This raises the question of whether afamelanotide could reduce photoaging rate or melanoma risk in MC1R-variant carriers; no prospective trial addresses this as of 2026-05-09. #gap/needs-human-replication

## Pharmacology

### Afamelanotide (Scenesse, Melanotan I)

- **Approval:** FDA-approved October 2019 for prevention of phototoxicity in adults with erythropoietic protoporphyria (EPP)
- **Mechanism:** Linear α-MSH analogue (superpotent, prolonged agonist); drives eumelanin production in MC1R LOF individuals; administered as subcutaneous implant (16 mg / 60-day release)
- **Aging context druggability tier 1 rationale:** Afamelanotide is an FDA-approved drug engaging MC1R in a disease where MC1R LOF drives pathology. While the approved indication (EPP) is a rare metabolic disease rather than an aging-rejuvenation indication, the drug directly demonstrates that MC1R is pharmacologically actionable with clinical-grade evidence — warranting tier 1. The aging-context indication (photoprotection in MC1R-variant-carrying older adults) remains uninvestigated.

### Melanotan II (Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-NH2)

Unapproved cyclic synthetic analogue. Full-agonist at MC1R (and MC3R, MC4R, MC5R). Not aging-validated. See [[../compounds/melanotan-ii]] for full pharmacology and safety profile.

### ASIP (inverse agonist)

Agouti signal protein competitively displaces α-MSH at MC1R; endogenous inverse agonist driving pheomelanin production. No therapeutic targeting as of 2026.

## Pathway membership

- **[[melanocortin-system]]** — (implicit stub) the MC1R–MC5R family with shared POMC-derived ligands; MC1R is the skin/hair node
- **[[camp-signaling]]** — canonical Gαs → adenylate cyclase → PKA → CREB axis
- **[[melanogenesis]]** — (implicit stub) the TYR → TYRP1 → DCT enzymatic pathway producing eu- and pheomelanin, regulated at the MITF level by MC1R/cAMP

## Key interactors

- **[[alpha-msh]]** — primary endogenous agonist (Kd sub-nM); derived from POMC
- **ASIP** — inverse agonist; displaces α-MSH; switches eumelanin → pheomelanin
- **MGRN1** — E3 ubiquitin ligase that displaces Gαs, attenuating cAMP production; also routes MC1R for lysosomal degradation
- **OPN3 (encephalopsin/panopsin)** — inhibits cAMP response through competing GPCR pathway
- **GNB1** — Gβ1 subunit required for productive G-protein coupling
- **MITF** — downstream transcription factor (not direct interactor; regulated by PKA/CREB downstream of MC1R)

## Limitations and gaps

- `#gap/needs-tissue-expression-data` — GTEx v2 aging ρ not computable for a melanocyte-restricted receptor from bulk-tissue RNA. Single-cell expression in aging skin (CellxGene Census / Aging Atlas) not yet pulled.
- `#gap/needs-population-evidence` — No MR study has used MC1R alleles to instrument longevity, pace-of-aging, or photoaging phenotypes directly; only melanoma and Parkinson risk are instrumented.
- `#gap/contradictory-evidence` — MC1R p.R160W as an independent PD risk factor: Tell-Marti 2015 (positive association) vs. Gan-Or 2016 (marginal meta-analysis OR=1.22 that becomes non-significant when one heterogeneous study is excluded; no per-cohort significance). Primary cohort data in Gan-Or 2016 shows no common variant independently associated with PD.
- `#gap/needs-human-replication` — Whether afamelanotide slows photoaging or reduces melanoma risk in MC1R LOF older adults is uninvestigated.
- `#gap/dose-response-unclear` — The cAMP dose-response curve in keratinocyte vs. melanocyte MC1R is not well characterized for the anti-inflammatory pathway.

## Footnotes

[^suzuki1996]: doi:10.1210/endo.137.5.8612494 · Suzuki I, Cone RD, Im S, Nordlund J, Abdel-Malek ZA · *Endocrinology* 1996 · in-vitro · model: primary human melanocyte cultures · PMID: 8612494 · demonstrates α-MSH = ACTH > β-MSH > γ-MSH order of affinity and potency for MC1R-mediated proliferation, melanogenesis, and cAMP formation; γ-MSH stimulated cAMP transiently without affecting pigmentation · **bronze OA; PDF download failed** — verified against abstract only; specific binding constants not in abstract #gap/no-fulltext-access
[^rodriguez2014]: doi:10.1016/j.abb.2014.07.003 · Rodríguez CI & Setaluri V · *Arch Biochem Biophys* 2014 · review · cAMP/MC1R signaling in melanocytes and melanoma; 107 citations
[^kadekaro2012]: doi:10.1158/1541-7786.MCR-11-0436 · Kadekaro AL, Chen J, Yang J et al. · *Mol Cancer Res* 2012 · in-vitro (primary human melanocytes) · α-MSH → MC1R → cAMP/PKA + PI3K/ATR/DNA-PK → p53 Ser15 phosphorylation → upregulation of OGG1 and APE-1/Ref-1 (BER enzymes); p53 inhibition (pifithrin-α) or p53 silencing abrogates the α-MSH antioxidant effect · **closed-access (not_oa)** — verified against abstract only; body-level data (n, dose-response) not independently confirmed #gap/no-fulltext-access
[^abdelmalek2008]: doi:10.1111/j.1751-1097.2008.00294.x · Abdel-Malek ZA et al. · *Photochem Photobiol* 2008 · review · MC1R variants, UV response, impaired DNA repair; 110 citations (99th percentile FWCI)
[^flanagan2000]: doi:10.1093/hmg/9.17.2531 · Flanagan N et al. · *Hum Mol Genet* 2000 · genetics · pleiotropic effects of MC1R gene on human pigmentation; 292 citations
[^valverde1996]: doi:10.1093/hmg/5.10.1663 · Valverde P et al. · *Hum Mol Genet* 1996 · genetics (association) · Asp84Glu MC1R variant associated with melanoma; 309 citations
[^wendt2018]: doi:10.1001/jamadermatol.2018.1252 · Wendt J et al. · *JAMA Dermatol* 2018 · observational (case-control) · sex-specific MC1R variant contribution to melanoma risk
[^feng2015]: doi:10.1186/s40035-015-0043-z · Feng D, Cai W, Chen X · *Transl Neurodegen* 2015 · review · synthesizes PD–cancer genetic links including MC1R; reports R151C confers ~3-fold increased PD risk (citing Gao 2015) and R160W replicated in independent cohort (citing Tell-Marti 2015 [ref 153]); MC1R section is review-level synthesis, not primary source for variant ORs
[^ganor2016]: doi:10.1016/j.neurobiolaging.2016.03.029 · Gan-Or Z et al. · *Neurobiol Aging* 2016 · genetics (case-control + meta-analysis) · n=539 PD + 265 controls (New York cohort); n=551 PD + 351 RBD + 956 controls (European cohort) · No common MC1R variant independently associated with PD or RBD in primary analysis; meta-analysis R160W OR=1.22 (95% CI 1.02–1.47, p=0.03) with significant heterogeneity (p=0.048); OR=1.11 (p=0.27) after removing heterogeneous study · PMCID: PMC4892956
[^castaneda2022]: doi:10.1093/hmg/ddac074 · Castaneda-Garcia C et al. · *Hum Mol Genet* 2022 · GWAS · novel causal SNPs at melanoma loci including MC1R replication
[^suppa2011]: doi:10.1111/j.1365-2133.2011.10536.x · Suppa M et al. · *Br J Dermatol* 2011 · observational · MC1R variants + periorbital photoaging markers in melanoma case-control population
[^chen2021]: doi:10.1111/bjd.20436 · Chen Y et al. · *Br J Dermatol* 2021 · GWAS · MC1R-locus consistent with facial skin wrinkling in Latin Americans
