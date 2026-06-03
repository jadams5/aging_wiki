---
type: protein
aliases: [GPER1, GPR30, GPCR-30, membrane estrogen receptor, G-protein coupled estrogen receptor 1]
uniprot: Q99527
ncbi-gene: 2852
hgnc: 4485
ensembl: ENSG00000164850
mouse-ortholog: Gper1
pathways: ["[[camp-signaling]]", "[[pi3k-akt-pathway]]", "[[ras-mapk]]"]
hallmarks: ["[[altered-intercellular-communication]]"]
known-interactors: ["[[estradiol]]", "[[esr1]]", "[[esr2]]"]
druggability-tier: 3
mr-causal-evidence: not-tested
caused-by: []
causes: []
key-domains: [7TM-GPCR, extracellular-N-terminus, intracellular-C-terminus]
key-ptms: []
genage-id: null
gtex-aging-correlation: null
literature-checked-through: 2026-06-03
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "Sharma 2013 (PDF), Gurrala 2021 (PDF), and Barton 2018 (PDF) verified against primary source PDFs; Filardo 2000 and 2002 verified via OA abstract/full-text fetch; Bologa 2006 verified via Crossref metadata and Barton 2018 description; Revankar 2005 unverifiable (closed-access, not_oa in archive); canonical IDs (UniProt Q99527, NCBI Gene 2852) confirmed against live APIs 2026-06-03; HGNC 4485 and Ensembl ENSG00000164850 not independently re-checked against live HGNC/Ensembl"
---


# GPER (G-protein coupled estrogen receptor 1)

GPER is the only well-characterized seven-transmembrane GPCR that binds 17beta-estradiol with high affinity, transducing **rapid, non-genomic estrogen signals** in seconds-to-minutes — a mechanistic counterpart to the slow (hours) genomic actions mediated by the nuclear receptors [[esr1]] (ERalpha) and [[esr2]] (ERbeta). Its expression throughout the cardiovascular system, CNS, pancreas, and immune compartment means that the acute physiological consequences of estrogen withdrawal at [[menopause]] are substantially mediated through this receptor. GPER's pharmacology is uniquely tractable: selective synthetic tools (G-1 agonist; G-15/G-36 antagonists) exist that do not activate classical nuclear estrogen receptors, enabling clean dissection of genomic vs non-genomic estrogen biology.

## Identity

- **UniProt:** Q99527 (GPER1_HUMAN) — Swiss-Prot reviewed entry; secondary accessions O00143, O43494, Q13631
- **NCBI Gene:** 2852
- **HGNC symbol:** GPER1 (historical name GPR30 is a common alias; HGNC:4485)
- **Ensembl:** ENSG00000164850
- **Mouse ortholog:** Gper1 (NCBI Gene 76854; chromosome 5 in mouse vs chromosome 7 in human)
- **Length:** 375 amino acids (canonical isoform; 7-transmembrane topology)
- **Chromosomal location (human):** 7p22.3 (chr7: 1,087,118–1,093,810 bp, GRCh38)

Note on nomenclature: GPR30 was the original designation before the receptor's identity as an estrogen receptor was established. The HGNC-approved symbol is GPER1. Both appear interchangeably in the literature; this page uses GPER throughout.

## Structure and localization

GPER belongs to the rhodopsin-like (class A) GPCR superfamily, with a canonical seven-transmembrane helical bundle. Despite this GPCR topology, its **subcellular localization is actively debated** [^revankar2005]:

- **Endoplasmic reticulum / Golgi** — Revankar et al. (2005) used impermeant fluorescent probes to argue that GPER localizes predominantly to the ER and does not accumulate at the plasma membrane, distinguishing it from classical GPCRs [^revankar2005].
- **Plasma membrane** — Subsequent work using epitope-tagged constructs, proximity ligation assays, and electron microscopy has detected GPER at the plasma membrane, particularly in endothelial and cardiomyocyte preparations [^meyer2011].
- **Other compartments** — The UniProt entry documents localization to: nucleus, cytoplasm (perinuclear), cytoskeleton, endosomal compartments, recycling endosomes (without recycling to surface), dendrites, and mitochondrial membranes in neuronal tissue. Constitutive endocytosis may account for the apparent intracellular enrichment even when surface expression occurs.

**Practical implication:** The ER-vs-plasma-membrane question determines whether GPER can respond to circulating (cell-impermeable) estradiol or only to estradiol that has entered the cell. The resolution may be cell-type-specific. #gap/contradictory-evidence — subcellular localization is not resolved across cell types.

## The genomic vs non-genomic estrogen signaling distinction

This is the conceptual core of GPER's relevance to aging biology.

**Genomic (classical) estrogen signaling** via [[esr1]]/[[esr2]]:
- Estradiol diffuses into the cell → binds cytoplasmic ERalpha or ERbeta
- Receptor dimerizes, translocates to nucleus
- Binds estrogen response elements (EREs) or tethers to AP-1/Sp1 → modulates gene transcription
- Timescale: **hours** (requires transcription + translation)

**Non-genomic (rapid) estrogen signaling** via GPER:
- Estradiol (or a synthetic GPER-selective ligand) binds GPER
- Receptor couples to Gs → adenylyl cyclase activation → rapid cAMP rise [^filardo2002]
- Gβγ → Src kinase activation → shedding of membrane-bound HB-EGF → **EGFR trans-activation** → ERK1/2 (MAPK) activation [^filardo2000]
- Gbeta/gamma → PI3K activation → Akt phosphorylation; intracellular calcium mobilization from ER stores
- Timescale: **seconds to minutes** — independent of transcription

| Feature | GPER | ESR1 / ESR2 |
|---|---|---|
| Receptor class | GPCR (7TM) | Nuclear receptor (NR3A family) |
| Primary coupling | Gs/cAMP, Src/EGFR, PI3K | DNA-binding / co-activator recruitment |
| Response timescale | Seconds to minutes | Hours |
| Blocks by actinomycin D? | No (transcription-independent) | Yes |
| Tamoxifen effect | Agonist (off-target) | Antagonist (on-target) |
| Fulvestrant effect | Agonist (off-target) | Antagonist / degrader |

The tamoxifen/fulvestrant paradox is clinically significant: both drugs, used as breast cancer treatments, are **GPER agonists** at physiological concentrations [^barton2018]. GPER activation has been hypothesized to contribute to certain side effects and to resistance mechanisms in ER-positive breast cancer, though this remains an active research debate.

## Signaling mechanisms

### cAMP / PKA axis
Ligand binding → Gs coupling → adenylyl cyclase → cAMP ↑ → PKA activation. This is the dominant "first-messenger" pathway. Filardo 2002 established that cAMP also attenuates EGFR-to-MAPK signaling via Raf-1 inactivation [^filardo2002]; downstream cAMP effectors including HCN channels in cardiac pacemaker cells and EPAC are documented in subsequent mechanistic work. #gap/unsourced — HCN/EPAC details need primary citations on this page.

### EGFR trans-activation (PI3K/ERK convergence)
Estradiol → GPER → Gβγ-dependent Src activation → shedding of membrane-bound HB-EGF → EGFR → Ras → Raf → MEK → ERK1/2. This is the pathway originally described by Filardo et al. and is responsible for many mitogenic effects attributed to rapid estrogen signaling [^filardo2000]. The specific sheddase mediating HB-EGF release was not identified in the original Filardo 2000 paper; ADAM10/17 involvement is attributed to subsequent mechanistic work. It converges with [[ras-mapk]] and [[pi3k-akt-pathway]].

### Intracellular calcium
Mobilization from IP3-sensitive ER stores occurs downstream of GPER activation; mechanism involves Gbetagamma → PLCbeta or, in some cells, direct coupling to Gq. Calcium release contributes to endothelial NOS (eNOS) activation and acute vasodilation.

### PI3K / Akt
Gbeta/gamma → PI3Kbeta → Akt → downstream survival signaling. This axis contributes to GPER's reported cardioprotective and neuroprotective effects [^prossnitz2014].

## Aging-relevant physiology

### Cardiovascular system

GPER is expressed in vascular smooth muscle, endothelial cells, and cardiomyocytes [^meyer2011].

**Acute vasodilation:** Estradiol-induced endothelium-dependent vasodilation is partly GPCR-mediated, involving rapid eNOS activation via cAMP/PKA and calcium signaling. The G-1 selective agonist recapitulates this effect in ovariectomized rodents.

**Blood pressure regulation:** GPER-knockout female mice show elevated blood pressure compared with wild-type littermates — a phenotype that becomes pronounced after ovariectomy and is not rescued by exogenous estradiol [^prossnitz2014]. This establishes GPER as a non-redundant mediator of estrogen's vasodepressor effects. #gap/needs-human-replication

**Aging and GPER expression in cardiovascular tissues:** Gurrala et al. (2021) documented that GPER expression changes in a tissue- and sex-specific manner with advancing age in female C57BL/6J mice, with decreased GPER-mediated vasorelaxation to estradiol and G-1 in aged compared with adult female mice [^gurrala2021]. GPER protein expression in the aorta was significantly lower in middle-aged and aged females. Notably, GPER mRNA increased in the aged female aorta and heart (a protein-mRNA discrepancy attributed to post-transcriptional modification or enhanced proteasomal degradation), so the aging-associated change is not a simple transcriptional downregulation. This provides a mechanistic basis for why older females retain less vasodilatory response to estrogen despite circulating estradiol being present (e.g., in HRT contexts). #gap/needs-human-replication

**Cardioprotection:** Acute ischemia-reperfusion studies in rodents show GPER activation (by G-1 or endogenous estradiol) reduces infarct size and improves post-ischemic cardiac function via PKA and PI3K/Akt survival pathways. GPER-KO mice show larger infarcts in females [^prossnitz2014]. #gap/needs-human-replication

**GPER and [[cardiovascular-aging]]:** Estrogen withdrawal at [[menopause]] removes both the genomic (ERalpha-mediated) and non-genomic (GPER-mediated) cardioprotective signals simultaneously. The GPER-specific contribution — rapid vascular tone regulation, acute cardioprotection, endothelial function — may be part of why the cardiovascular risk of menopause is not fully captured by long-term HRT trial outcomes (which target genomic signaling) and why timing of HRT initiation matters. See [[menopause]] for the broader clinical picture.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | GPER orthologs present across mammals; pharmacology confirmed in human endothelial cells |
| Phenotype conserved in humans? | partial | Vascular effects shown in human tissue ex vivo; GPER-KO human data absent |
| Replicated in humans? | no | KO phenotype data are exclusively rodent; human population genetics data sparse |

### Metabolic effects

GPER-knockout male mice develop **insulin resistance, dyslipidemia, and a pro-inflammatory state** relative to wild-type littermates on standard diet — establishing that GPER is not merely a female reproductive receptor but a systemic metabolic regulator in both sexes [^sharma2013]. Female GPER-KO mice on high-fat diet show increased adiposity. GPER is expressed in pancreatic beta cells and mediates acute insulin secretion in response to estradiol — a pathway potentially relevant to the metabolic changes accompanying the menopausal transition. #gap/needs-human-replication

### Immune modulation

GPER is expressed on T cells, macrophages, and dendritic cells. GPER activation generally suppresses inflammatory cytokine production (TNF-alpha, IL-6) in macrophages, acting via cAMP-dependent mechanisms to attenuate NF-kB signaling. The rapid anti-inflammatory effect contrasts with the slower genomic anti-inflammatory actions of classical ERalpha. Loss of this rapid estrogen-immune signaling at menopause may contribute to the increased inflammatory tone captured by the [[altered-intercellular-communication]] hallmark.

### CNS and neuroprotection

GPER is expressed in neurons and glia throughout the brain, including hippocampus, hypothalamus, and cortex. In rodent models, GPER activation exerts neuroprotective effects in stroke and Parkinson's disease models via PI3K/Akt and anti-apoptotic signaling. GPER-dependent signaling may contribute to the sex differences in neurodegenerative disease risk that emerge after menopause. #gap/needs-human-replication

## Pharmacological tools

GPER is a pharmacologically tractable GPCR; selective synthetic ligands allow functional dissection independent of nuclear estrogen receptors.

| Compound | Type | Selectivity | Notes |
|---|---|---|---|
| G-1 (LNS8801 is clinical-stage analog) | Agonist | GPER-selective; does not activate ERalpha/ERbeta at standard doses | Bologa et al. 2006 [^bologa2006]; identified by virtual + biochemical screening |
| G-15 | Antagonist | GPER-selective | Competitive; blocks G-1 and estradiol signaling |
| G-36 | Antagonist | GPER-selective | Membrane-permeable; preferred for studying intracellular GPER |
| 17beta-estradiol | Endogenous agonist | Pan-ER (ERalpha + ERbeta + GPER) | Full agonist at all three; [[estradiol]] page for detail |
| Tamoxifen | Partial/full agonist | GPER agonist; ERalpha/beta antagonist | Clinically used as SERM for breast cancer; off-target GPER agonism [^barton2018] |
| Fulvestrant (ICI 182,780) | Agonist | GPER agonist; ERalpha/beta pure antagonist / degrader | Used to "block" classical ER signaling; GPER confound must be considered |

**LNS8801** is a Phase 1/2 clinical-stage GPER agonist under development in oncology (melanoma, solid tumors). As of 2026, no GPER-targeted compound has an aging or cardiovascular indication in late-stage trials. #gap/needs-human-replication

### Clinical-trial status

Active aging-context trials targeting GPER specifically: 0. GPER is implicated in trials of hormone replacement / SERM use (tamoxifen, bazedoxifene) as an off-target mechanism, but no trial is designed around GPER as the primary target for an aging indication. #gap/long-term-unknown

## Aging-context druggability rationale (tier 3)

GPER is a class A GPCR — the most drugged target class in medicine — with validated selective small-molecule tools (G-1 series) at the preclinical probe stage. Its cardiovascular and metabolic phenotypes in knockout models are compelling. However:
- No GPER-selective clinical drug exists for any aging indication
- The intracellular localization controversy raises questions about accessibility of circulating small molecules to the primary receptor pool
- Translation of knockout phenotypes to GPER agonist benefit in aged humans is undemonstrated

Tier 3 (predicted druggable) is appropriate. Tier 2 upgrade would require a clinical-stage probe with a validated aging-disease biomarker readout.

## Key interactors and pathway membership

- **[[estradiol]]** — primary endogenous ligand
- **[[esr1]]** / **[[esr2]]** — co-expressed nuclear estrogen receptors; signaling crosstalk documented [^romano2018]; the three receptors likely integrate in tissue-dependent patterns rather than operating independently
- **[[camp-signaling]]** — cAMP/PKA is the first downstream effector of Gs coupling
- **[[pi3k-akt-pathway]]** — Gbeta/gamma → PI3K arm; survival and anti-apoptotic signaling
- **[[ras-mapk]]** — EGFR trans-activation → ERK1/2 arm
- EGFR — trans-activated via HB-EGF shedding; not a direct binding partner but a functional intermediary
- Src kinase — links GPER to EGFR trans-activation cascade

## Limitations and gaps

- **#gap/contradictory-evidence** — Subcellular localization (plasma membrane vs ER/Golgi) is not settled and may differ across cell types, complicating mechanistic interpretation.
- **#gap/needs-human-replication** — GPER-KO metabolic, cardiovascular, and neuroprotective phenotypes are established in rodents; human genetic data are sparse. No GPER loss-of-function human syndrome is described.
- **#gap/needs-human-replication** — Whether GPER agonism (e.g., G-1 derivatives) provides aging-relevant cardioprotection or metabolic benefit in humans is untested at the clinical level.
- **#gap/long-term-unknown** — Off-target GPER agonism by tamoxifen and fulvestrant has unknown long-term physiological consequences in the context of aging (post-menopausal SERM users).
- **#gap/dose-response-unclear** — Dose-response relationships for GPER-selective agonists in aging-context endpoints (blood pressure, insulin sensitivity, inflammatory markers) are not characterized in humans.
- The `gtex-aging-correlation:` field is null — GPER tissue-by-age expression in human GTEx data has not been extracted for this page. Recommend follow-up via `sops/finding-tissue-expression.md`.
- `genage-id:` is null — GPER does not appear to have a GenAge entry; confirm via direct lookup.

## Footnotes

[^filardo2000]: doi:10.1210/mend.14.10.0532 · Filardo EJ, Quinn JA, Bland KI, Frackelton AR Jr · Mol Endocrinol 2000 · n=multiple cell lines · in-vitro · model: MCF-7 and SKBr3 breast cancer cells · original demonstration of GPR30-mediated ERK activation via HB-EGF/EGFR trans-activation

[^filardo2002]: doi:10.1210/mend.16.1.0758 · Filardo EJ, Quinn JA, Frackelton AR Jr, Bland KI · Mol Endocrinol 2002 · in-vitro · model: GPR30-expressing cell lines · characterized cAMP axis and its attenuation of MAPK signaling

[^revankar2005]: doi:10.1126/science.1106943 · Revankar CM et al. · Science 2005 · in-vitro / imaging · model: HEK293 + GPR30-expressing cells with impermeant fluorescent probes · key paper arguing for intracellular ER/Golgi localization of GPER

[^bologa2006]: doi:10.1038/nchembio775 · Bologa CG et al. (Prossnitz group) · Nat Chem Biol 2006 · in-vitro + in-vivo · model: virtual screening + biochemical validation · discovery of G-1 as the first GPER-selective agonist

[^prossnitz2014]: doi:10.1016/j.mce.2014.02.002 · Prossnitz ER, Barton M · Mol Cell Endocrinol 2014 · review · comprehensive overview of GPER biology including KO phenotype data (blood pressure, cardioprotection) and clinical opportunities

[^meyer2011]: doi:10.1016/j.vph.2011.06.003 · Meyer MR, Prossnitz ER, Barton M · Vasc Pharmacol 2011 · review · n=multiple studies · cardiovascular GPER expression and regulation of vascular tone and blood pressure; 157 citations

[^sharma2013]: doi:10.1210/en.2013-1357 · Sharma G, Hu C, Brigman JL, Zhu G, Hathaway HJ, Prossnitz ER · Endocrinology 2013 · in-vivo · model: GPER-KO male mice on standard chow · demonstrated insulin resistance, dyslipidemia, and pro-inflammatory phenotype in GPER-null males

[^barton2018]: doi:10.1016/j.jsbmb.2017.03.021 · Barton M et al. · J Steroid Biochem Mol Biol 2018 · review · 20-year retrospective; documents tamoxifen and fulvestrant as GPER agonists and clinical implications; n=review

[^gurrala2021]: doi:10.1007/s11357-021-00331-3 · Gurrala R, Kilanowski-Doroh IM et al. · GeroScience 2021 · in-vivo · model: adult, middle-aged, and aged female C57BL/6J mice · demonstrated age-associated reduction in GPER protein expression in aorta and decreased vasorelaxation to E2 and G-1 in aged females; GPER mRNA increased in aged female aorta and heart (post-transcriptional discrepancy); changes are tissue- and sex-specific

[^romano2018]: doi:10.1016/j.ygcen.2017.04.013 · Romano SN et al. · Gen Comp Endocrinol 2018 · review + in-vitro · crosstalk between nuclear ERs and GPER signaling
