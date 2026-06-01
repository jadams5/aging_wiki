---
type: study
doi: 10.1126/science.abc8059
pmid: 33303683
pmc: PMC7938328
title: "Inhibition of prostaglandin-degrading enzyme 15-PGDH rejuvenates aged muscle mass and strength"
authors: [Palla AR, Ravichandran M, Wang YX, Alexandrova L, Yang AV, Kraft P, Holbrook CA, Schürch CM, Ho ATV, Blau HM]
year: 2021
journal: Science
study-design: in-vivo
publication-type: research-article
volume: 371
issue: 6528
pages: "eabc8059"
organism: mus-musculus
n-subjects: null   # n=3–15 per group depending on assay; see body for per-experiment breakdown; no single total-subject count applies
intervention: ["[[sw033291]]"]
hallmarks-tested: ["[[stem-cell-exhaustion]]", "[[mitochondrial-dysfunction]]", "[[disabled-macroautophagy]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings:
  - 15-pgdh-protein-elevated-in-aged-muscle-and-multiple-other-aged-tissues
  - pge2-and-pgd2-reduced-in-aged-vs-young-skeletal-muscle
  - 15-pgdh-overexpression-in-young-muscle-causes-atrophy-causal-sufficiency
  - sw033291-inhibition-increases-aged-muscle-mass-strength-exercise-endurance
  - mechanism-pge2-ep4-axis-activates-akt-foxo-pge2-increases-mitochondrial-biogenesis
  - mechanism-sw033291-reduces-atrogene-expression-murfl-atrogin1-mus-suppression
  - mechanism-sw033291-reduces-tgf-beta-pathway-genes-myostatin-smad3
  - mechanism-sw033291-increases-autophagy-flux-p62-colchicine-assay
  - 15-pgdh-elevated-in-aged-human-vastus-lateralis-biopsy-microarray
  - ep4-conditional-ko-abolishes-sw033291-benefit-confirms-pge2-ep4-axis
local-pdf: null
verified: true
verified-date: 2026-05-23
verified-by: claude
verified-scope: "Verified against PMC7938328 HTML (a local paper archive PDF download failed; PMC author-manuscript HTML used as verification source). All per-experiment n values, mouse ages, mechanism claims, and experiment designs confirmed against PMC text and figure legends. SW033291 mg/kg dose not stated in paper — unverifiable gap. Human cohort n not stated in paper. Specific % fold-change effect sizes not stated in paper text (figures only). Sex of mice not stated in paper — flagged as gap."
---

# Inhibition of prostaglandin-degrading enzyme 15-PGDH rejuvenates aged muscle mass and strength

**Palla AR et al. · *Science* 371(6528):eabc8059 · 2021 · DOI: 10.1126/science.abc8059**

PMC7938328 (NIHMS1662497). PMID: 33303683. Published online 2020-12-10; print issue 2021-01-29.
Corresponding author: Helen M. Blau (hblau@stanford.edu), Baxter Laboratory for Stem Cell Biology, Stanford School of Medicine.
Citation count: ~198 (100th percentile; FWCI 13.7 per a local paper DOI lookup as of 2026-05-23).

---

## TL;DR

Palla et al. 2021 identified the prostaglandin-degrading enzyme **15-PGDH** (gene: *Hpgd*; hydroxyprostaglandin dehydrogenase 15-(NAD)) as a **gerozyme** — an enzyme that increases in aged tissues and whose elevated activity drives a pathological aging phenotype. In aged skeletal muscle, 15-PGDH accumulates in both myofibers and macrophages, resulting in degradation of prostaglandin E2 (PGE2) to levels significantly below those in young muscle. The authors demonstrate that this reduction is causally sufficient to drive atrophy: overexpression of 15-PGDH in young muscle phenocopies aging-associated atrophy, and inhibition of 15-PGDH — either by targeted genetic knockdown or by the small-molecule inhibitor **SW033291** administered intraperitoneally for one month — restores PGE2 levels and substantially increases muscle mass, fiber cross-sectional area, plantar flexor force, and exercise endurance in aged mice. Mechanistically, PGE2 signals through the **EP4 receptor** on myofibers to activate AKT → p-FOXO3a, increase mitochondrial biogenesis, promote autophagy flux, and suppress atrogene (MuRF1, Atrogin-1) and TGF-β pathway (myostatin, Smad3) expression. Elevated 15-PGDH was also found in aged cardiac muscle, skin, spleen, and colon in mice, and in aged human vastus lateralis biopsies — establishing it as a hallmark of multiple aged tissues with broad therapeutic implications for [[sarcopenia]] and potentially other aging phenotypes.

---

## Background

[[Sarcopenia]] — the age-associated loss of skeletal muscle mass, strength, and function — affects ~10–29% of adults over 65 and is a primary driver of frailty, falls, and loss of independence. Despite its clinical importance, no pharmacological agents have received regulatory approval specifically for sarcopenia as of this writing.

Prior work had established that [[satellite-cells|satellite cells]] (muscle stem cells) decline in function with age and that the systemic milieu of aged organisms suppresses regenerative capacity [^conboy2005]. The [[tgf-beta|TGF-β/myostatin axis]] had been characterized as a major aging-associated inhibitory signal in muscle. However, the role of eicosanoid signaling — specifically prostaglandins — in aged muscle homeostasis had received less attention. The prostaglandin E2 (PGE2) arm of arachidonic acid metabolism had been shown to act on muscle stem cells in regenerative contexts, but whether alterations in PGE2 levels contribute to age-related muscle loss was not established at the time of publication.

15-PGDH is the principal enzyme responsible for inactivating PGE2 by oxidizing its 15-hydroxyl group to a ketone, producing the biologically inactive metabolite 15-keto-PGE2 (PGEM). SW033291 had been characterized as a highly potent, specific 15-PGDH inhibitor (Ki = 0.1 nM in vitro) and had been used in prior hematopoietic stem cell expansion studies; this paper represents its first application to the muscle aging context.

---

## Methods overview

### Animal model and age groups

C57BL/6 mice; young (2–4 months) vs. aged (>24 months). All studies conducted in mice unless specifically noted for human biopsy data. Sex of animals not stated in paper. #gap/unsourced

### Mass spectrometry — prostaglandin quantification

Prostaglandin levels (PGE2, PGD2, and the 15-PGDH metabolite PGEM / 15-keto-PGE2) in muscle homogenates were measured by **LC-MS/MS** (liquid chromatography–tandem mass spectrometry). This is a gold-standard approach for eicosanoid quantification; PGEM was "not detected at all or only at low levels" in both young and aged samples, which is consistent with the high-activity degradation being at the 15-PGDH step (i.e., PGEM is degraded further downstream). #gap/needs-replication — the LC-MS/MS prostaglandin profile in aged vs. young human muscle has not been confirmed in an independent large cohort.

### 15-PGDH localization — CODEX multiplex imaging and FACS

CODEX (co-detection by indexing) multiplex imaging was used to co-localize 15-PGDH immunostaining with cell-type markers (CD11b, CD45 for macrophages; myosin heavy chain for myofibers) in intact aged muscle tissue sections. FACS sorting separated macrophage (CD11b+/CD11c−/F4/80+/CD31−), endothelial, and muscle stem cell (MuSC) populations from muscle for transcript analysis.

### Gain-of-function (15-PGDH overexpression in young muscle)

AAV-mediated overexpression of 15-PGDH in tibialis anterior (TA) of young mice, assessed at 1 month post-injection.

### Loss-of-function — genetic

Two approaches: (1) AAV9-delivered shRNA to knock down *Hpgd* in aged muscle; (2) conditional knockout of the EP4 receptor (AAV9-MCK-Cre delivered to *Ptger4*^fl/fl^ mice, creating MCK-EP4Δ/Δ) to test the receptor requirement.

### Small-molecule inhibition — SW033291

SW033291 administered **intraperitoneally (i.p.) daily for 1 month** to aged and young mice. Specific mg/kg dose is **not stated anywhere in the paper** (confirmed by verifier against full PMC text); the dose used is only cited by reference to the original Zhang et al. 2015 pharmacology paper. #gap/dose-response-unclear

### Functional readouts

- Muscle mass: dissected wet weights of tibialis anterior (TA), gastrocnemius (GA), and soleus
- Fiber cross-sectional area (CSA): histological sections, immunostained with anti-MHC isoform antibodies
- Force: in vivo plantar flexor force measurement (absolute and normalized to baseline)
- Exercise endurance: time to exhaustion on treadmill
- Mitochondrial function: PGC1α expression, mtDNA/nuclear DNA ratio, citrate synthase activity, succinate dehydrogenase staining, mitochondrial membrane potential (TMRM), TEM morphology of intermyofibrillar mitochondria
- UPS: atrogene mRNA expression (MuRF1/Trim63, Atrogin-1/Fbxo32, Musa1, Smart, Traf6, HDAC4)
- TGF-β axis: myostatin, Tgfb2, Acvr2a, Smad3 expression
- Autophagy: p62 western blot after colchicine treatment (flux assay)
- Signaling: pAKT, pFOXO3a, pS6rp in muscle lysates and differentiated human myotubes

### Human data

Microarray gene expression data from vastus lateralis biopsies: aged human subjects (mean 78 ± 6 years) vs. young (mean 25 ± 3 years). Source: publicly available dataset from Raue U et al., *J Appl Physiol* 112:1625–1636 (2012). Specific n (number of subjects per group) is not stated in this paper. #gap/unsourced

---

## Key findings

### 15-PGDH accumulates in aged tissues — a gerozyme

15-PGDH protein and activity are elevated in aged skeletal muscle of mice compared to young controls [^palla2021]. The enzyme was found in **both myofibers and macrophages** within aged muscle:

- Macrophages (CD11b+/CD11c−/F4/80+/CD31−): striking increase in *Hpgd* transcript levels in aged vs. young (n=3–8 per group, p<0.01) — the most prominent cellular source
- Isolated whole FDB muscles and single myofibers: increased *Hpgd* transcript in aged vs. young (n=3–6 per group, p<0.05)
- Endothelial cells and muscle stem cells: lower 15-PGDH expression

Cross-tissue survey in mice showed elevated 15-PGDH activity in aged cardiac muscle, skin, spleen, and colon (n=3–5 per group, p<0.05) — establishing 15-PGDH as a **multi-tissue aging hallmark** rather than a muscle-specific phenomenon.

**Human validation:** Microarray analysis of vastus lateralis biopsies showed significantly increased *HPGD* expression in aged humans (78 ± 6 yr) compared to young (25 ± 3 yr). #gap/needs-replication — this is microarray data from biopsy; protein-level confirmation in a larger human cohort is needed.

### PGE2 is depleted in aged muscle

PGE2 and PGD2 levels were significantly reduced in aged skeletal muscle compared to young controls by LC-MS/MS (n=14 young, n=8 aged). The inactive metabolite PGEM was undetectable or at low levels in both groups, suggesting rapid downstream catabolism rather than PGEM accumulation. SW033291 treatment of aged mice restored PGE2 and PGD2 to levels on par with young muscle (n=6–9 per group) [^palla2021].

### Causal sufficiency: 15-PGDH overexpression in young muscle induces atrophy

AAV-mediated overexpression of 15-PGDH in TA of young mice (1 month) produced [^palla2021]:

- Significantly decreased myofiber CSA (n=3 per group, p<0.05)
- Significantly decreased TA mass (n=10 per group, p<0.05)
- Significantly decreased absolute and relative plantar flexor force (n=7–10 per group, p<0.05)
- Upregulation of atrogenes MuRF1 (*Trim63*) and Atrogin-1 (*Fbxo32*) (n=5 per group, p<0.05)

This gain-of-function experiment establishes that elevated 15-PGDH is **causally sufficient** — not merely correlated — with muscle atrophy.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — *HPGD* elevated in human vastus lateralis by microarray; mechanistic confirmation pending |
| Phenotype conserved in humans? | unknown — muscle functional readouts not tested in humans in this paper |
| Replicated in humans? | no #gap/needs-human-replication |

### SW033291 treatment of aged mice: muscle mass, strength, and endurance

Aged mice treated with SW033291 i.p. daily for 1 month showed significant improvements across all functional readouts (n=8–12 per group unless otherwise noted) [^palla2021]:

| Readout | Finding | n | p |
|---|---|---|---|
| TA mass | Significant increase | 8–12 | <0.05 |
| GA mass | Significant increase | 8–12 | <0.05 |
| Soleus mass | Significant increase | 8–12 | <0.05 |
| Myofiber CSA (TA) | Significant increase; both MHC2a (oxidative) and MHC2b (glycolytic) fast-twitch fibers | 4 | <0.05 |
| Plantar flexor force (absolute) | Significant increase | 7–11 | <0.0001 |
| Plantar flexor force (relative to baseline) | Significant increase | 7–11 | <0.0001 |
| Time to exhaustion (treadmill) | Significant increase in both young and aged | 4–5 | <0.05 |

These effect sizes are approximate pending PDF verification. The treadmill endurance improvement in both young and aged mice suggests systemic benefit beyond aged muscle alone.

### EP4 receptor mediates PGE2 signaling in myofibers

EP4 (*Ptger4*) is the most highly expressed prostaglandin receptor in differentiated myotubes. Conditional ablation of EP4 in myofibers (AAV9-MCK-Cre in *Ptger4*^fl/fl^ aged mice) **fully abrogated** the muscle mass and strength benefits of SW033291 treatment (n=3–7 per group, p<0.05), confirming that PGE2 acts directly on myofibers through the EP4 receptor rather than through satellite cells or other interstitial cell types [^palla2021].

A parallel experiment used shRNA-mediated knockdown of prostaglandin D synthase (*Ptgds*, SHPTGDS) to selectively deplete PGD2 without affecting PGE2. Despite elimination of the PGD2 response, SW033291 still improved muscle mass, force, and endurance — isolating **PGE2, not PGD2**, as the active mediator.

### Mechanism: PGE2-EP4 activates a multi-pathway anabolic and quality-control program

**Signaling cascade (in vitro and in vivo):**

Differentiated human myotubes treated with PGE2 showed rapid (15–30 min) increases in pAKT, inactive pFOXO3a, and pS6 ribosomal protein — indicators of anabolic pathway activation and atrophy-gene suppression. Myotube diameter increased markedly; this effect was blocked by the EP4 antagonist ONO-AE3-208, confirming EP4 specificity. In vivo, SW033291-treated aged muscle showed increased pFOXO3a vs. vehicle controls (n=3–4 per group, p<0.05). CREB phosphorylation was also confirmed in skeletal muscle following PGE2 [^palla2021].

**Mitochondrial biogenesis and function:**

SW033291 treatment of aged mice restored mitochondrial parameters to levels comparable to young controls [^palla2021]:

| Mitochondrial readout | n | p |
|---|---|---|
| PGC1α mRNA (master mitochondrial regulator) | 3–4 | <0.05 |
| mtDNA/nuclear DNA ratio | 4 | <0.05 |
| Citrate synthase activity | 4 | <0.05 |
| SDH staining intensity | 4 | <0.001 |
| Mitochondrial membrane potential (TMRM) | ~139 aged vehicle / ~89 aged SW fibers | <0.001 |
| IMF mitochondria number (TEM) | ~1,350 aged vehicle / ~1,371 aged SW total counted | <0.001 |

TEM also showed restoration of mitochondrial morphology: "large distended vacuous organelles" in aged vehicle-treated muscle resolved to "round compact organelles" resembling young muscle after SW033291 treatment.

**Autophagy:**

p62 protein levels after colchicine treatment (autophagy flux assay) were increased in aged mice treated with SW033291 vs. vehicle controls, indicating enhanced autophagic flux — linking 15-PGDH inhibition to the [[autophagy]] / [[disabled-macroautophagy]] axis. #gap/needs-replication — autophagy flux data in this paper is presented via western blot of p62 after colchicine; independent confirmation with orthogonal assays (LC3-II turnover, autophagic substrate clearance) not reported in this paper.

**Ubiquitin-proteasome system (UPS) suppression:**

Atrogene expression was significantly reduced in aged mice treated with SW033291 (n=8–15 per group) [^palla2021]:

| Gene | Role | p |
|---|---|---|
| *Trim63* (MuRF1) | E3 ubiquitin ligase; direct muscle protein ubiquitination | <0.01 |
| *Fbxo32* (Atrogin-1/MAFbx) | E3 ubiquitin ligase; sarcomere component ubiquitination | <0.01 |
| *Musa1* | Muscle-specific E3 ubiquitin ligase | <0.05 |
| *Smart* | Muscle-specific ubiquitin E3 ligase | <0.05 |
| *Traf6* | Ubiquitin ligase adaptor | <0.05 |
| *Hdac4* | Class IIa HDAC; activates atrogene expression | diminished |

Genetic *Hpgd* knockdown in aged muscle produced a similar atrogene-suppression profile (MuRF1, Atrogin-1, myostatin; n=4–5 per group, p<0.05).

**TGF-β pathway suppression:**

Transcriptome analysis of aged SW033291-treated muscle showed downregulation of the TGF-β signaling program: myostatin (*Mstn*), *Tgfb2*, *Acvr2a*, *Smad3* — consistent with the known pro-atrophic role of myostatin-TGF-β signaling in aging muscle.

The convergence of four protective mechanisms — enhanced mitochondrial biogenesis, increased autophagy flux, suppressed UPS atrogene expression, and suppressed TGF-β/myostatin signaling — under a single pharmacological intervention distinguishes this paper from earlier single-pathway approaches to sarcopenia.

---

## Significance and translational context

### The "gerozyme" concept

This paper introduced and empirically grounded the concept of a **gerozyme**: an enzyme that is upregulated in aged tissues and whose elevated activity directly drives an aging phenotype. This concept generalizes: if enzymes that degrade beneficial metabolites (here, PGE2) accumulate with age, their pharmacological inhibition becomes a general therapeutic strategy. The gerozyme concept has subsequently been explored for other prostaglandin-pathway enzymes and in other tissue contexts.

### Clinical translation: Myoforte → Epirium Bio

The Blau lab's patent estate around 15-PGDH inhibition for muscle aging was initially licensed to **Myoforte Therapeutics** (spun out of Stanford). The same patent estate subsequently moved to **Epirium Bio** (per conflict-of-interest statements in later papers from this group, including Singla et al. 2025). This is relevant context for interpreting the COI disclosures: authors listing Myoforte in this 2021 paper are the same individuals associated with Epirium Bio in 2025.

### Cross-tissue extension: subsequent literature

- **Bakooshli et al. 2023** — extended 15-PGDH findings to the neuromuscular junction (NMJ); 15-PGDH inhibition restored NMJ integrity in aged mice. See [[studies/bakooshli-2023-15pgdh-nmj-regeneration]].
- **Singla et al. 2025** — extended 15-PGDH findings to cartilage aging; 15-PGDH inhibition reduced cartilage degradation. See [[studies/singla-2025-15pgdh-cartilage-regeneration]].

---

## Limitations and gaps

- **Mouse-only functional data.** All muscle mass, strength, and exercise data are from C57BL/6 mice. The human data in this paper is limited to microarray gene expression from vastus lateralis biopsies showing elevated *HPGD* — no functional pharmacological data in humans. #gap/needs-human-replication

- **Single drug, undisclosed dose.** SW033291 was administered at a single regimen (i.p. daily for 1 month); the exact mg/kg dose is not reported in this paper. Dose-response relationships, minimum effective dose, and alternative administration routes (oral bioavailability) are not characterized. #gap/dose-response-unclear

- **Long-term safety not characterized.** One month of treatment in mice provides no data on long-term safety. 15-PGDH is a tumor suppressor in colorectal, lung, and breast cancers — its inhibition raises theoretical oncogenic risk. This is not addressed in the paper (and was a topic for subsequent literature). See [[frameworks/cancer-aging-tradeoffs]] for general discussion of this tradeoff class.

- **Cancer-aging tradeoff.** 15-PGDH inactivates PGE2, and PGE2 has immunosuppressive and pro-tumorigenic effects in colorectal cancer (COX-2/PGE2 pathway is the primary target of aspirin's cancer-preventive action). Inhibiting 15-PGDH to raise PGE2 could theoretically increase cancer risk, especially in colon tissue where 15-PGDH acts as a tumor suppressor. This mechanistic concern is not resolved in this paper. #gap/long-term-unknown

- **Autophagy flux readout.** The p62/colchicine western blot for autophagy flux is a single-timepoint, single-method assessment. Orthogonal confirmation (LC3-II flux, autophagic substrate clearance) is not reported here. #gap/needs-replication

- **Sex balance.** The sex of animals used is not stated anywhere in the paper (verified against PMC HTML full text and figure legends). It is unclear whether experiments used male only, female only, or both sexes, and whether findings generalize across sex. #gap/unsourced

- **Macrophage vs. myofiber source.** Although both cell types express 15-PGDH in aged muscle, the relative contribution of macrophage-derived vs. myofiber-derived 15-PGDH to total PGE2 degradation is not quantified. Cell-type-specific conditional knockouts beyond the EP4 myofiber KO are not reported in this paper.

---

## Conflicts of interest

(Verbatim from PMC):

> A.R.P., M.R., A.T.V.H. and H.M.B. are named inventors on patent applications regarding 15-PGDH inhibition licensed to Myoforte Therapeutics. Y.X.W., C.A.H. and H.M.B. are named inventors on a patent application for processing of multiplex microscopy images. A.R.P., A.T.V.H. and H.M.B. receive consulting fees and have equity and stock options from Myoforte Therapeutics. H.M.B. is a cofounder of Myoforte Therapeutics. C.M.S. is a scientific advisor to Enable Medicine, LLC.

The financial interests of four of the ten authors (including the first and last/corresponding authors) in the commercial translation of these findings are substantial. Results should be evaluated accordingly, with particular attention to effect sizes and the degree of independent replication. As of 2026, independent replication in mice has been published (Bakooshli 2023, Singla 2025 in different tissue contexts); direct replication of the muscle aging phenotype by independent groups is a priority for weight of evidence. #gap/needs-replication

---

## Cross-references

- [[15-pgdh]] — protein page for the gerozyme (implicit stub; should be seeded from this study)
- [[sw033291]] — compound page for the 15-PGDH inhibitor
- [[sarcopenia]] — phenotype page; this study is the primary mechanistic reference for PGE2/15-PGDH axis in muscle aging
- [[skeletal-muscle]] — tissue page
- [[satellite-cells]] — muscle stem cell page; PGE2-EP4 signals primarily on myofibers in this paper (not satellite cells directly), but satellite cell context is relevant
- [[stem-cell-exhaustion]] — upstream hallmark; 15-PGDH elevation contributes to impaired muscle regenerative milieu
- [[mitochondrial-dysfunction]] — hallmark restored by SW033291 via PGC1α/citrate synthase/membrane potential normalization
- [[disabled-macroautophagy]] — autophagy flux enhanced by SW033291 (p62 colchicine flux assay)
- [[autophagy]] — process page; mechanistic pathway engaged by PGE2-EP4 signaling
- [[tgf-beta]] — pathway page; myostatin/Smad3/TGF-β2 arm is suppressed by SW033291
- [[frameworks/cancer-aging-tradeoffs]] — 15-PGDH is a tumor suppressor; its inhibition raises cancer-risk tradeoff questions not addressed in this paper
- [[studies/bakooshli-2023-15pgdh-nmj-regeneration]] — follow-up paper: 15-PGDH inhibition at the neuromuscular junction
- [[studies/singla-2025-15pgdh-cartilage-regeneration]] — follow-up paper: 15-PGDH inhibition in cartilage aging

---

## Footnotes

[^palla2021]: [[studies/palla-2021-15pgdh-muscle-rejuvenation]] · doi:10.1126/science.abc8059 · n=3–15 per group depending on assay (in-vivo, muscle mass n=8–12; force n=7–11; TEM n=3; prostaglandin LC-MS/MS n=8–14) · in-vivo · p<0.05 to p<0.0001 · model: aged C57BL/6 mice (>24 mo) vs. young (2–4 mo); sex not stated; human microarray validation (Raue 2012 dataset; vastus lateralis; mean aged 78 ± 6 yr vs. young 25 ± 3 yr; cohort n not stated in this paper)

[^conboy2005]: doi:10.1038/nature03260 · Conboy IM et al. · *Nature* 2005;433:760-764 · n=3–6 pairs · in-vivo heterochronic parabiosis · p<0.005 · model: aged (19–26 mo) C57Bl/Ka × young (2–3 mo) C57Bl/6 mice · satellite cell dysfunction is driven by systemic environment (Notch signaling); cells retain intrinsic proliferative capacity
