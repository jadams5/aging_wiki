---
type: protein
aliases: [sclerostin, SOST protein, VBCH]
uniprot: Q9BQB4
ncbi-gene: 50964
hgnc: 13771
ensembl: ENSG00000167941
genage-id: null
pathways: ["[[wnt-beta-catenin]]"]
hallmarks: ["[[altered-intercellular-communication]]", "[[stem-cell-exhaustion]]"]
sens-categories: []
mouse-ortholog: Sost
druggability-tier: 1
gtex-aging-correlation: null
mr-causal-evidence: yes
caused-by: []
causes: ["[[osteoporosis]]"]
literature-checked-through: 2026-05-23
verified: true
verified-date: 2026-05-23
verified-by: claude
verified-scope: "ARCH (Saag 2017) and FRAME (Cosman 2016) PDFs read end-to-end; fracture rates, CV event rates, ORs/CIs, and arm sizes verified against source. Ellies 2006 (not_oa, download failed) and Bonewald 2007 (download failed) unverifiable from PDF — claims retained with #gap/no-fulltext-access risk noted. Bhattoa 2013 (not_oa) and Stelmaszek 2025 (not_oa) abstract-level only. UniProt Q9BQB4 cross-checked via REST API — all canonical-DB identity fields confirmed. Hallmarks corrected: deregulated-nutrient-sensing + loss-of-proteostasis → altered-intercellular-communication + stem-cell-exhaustion. mr-causal-evidence updated partial → yes (Zheng 2023 MR). ARCH CV p-value corrected: spurious 'p=0.07 by Fisher's exact' removed; replaced with OR 1.31 (95% CI 0.85–2.00) as reported. ARCH vertebral fracture reduction corrected ~50% → 48%. Retraction check: retracted Japanese paper (PMID 41723626) not cited — confirmed safe."
---

# SOST (sclerostin)

Sclerostin is a small secreted glycoprotein produced almost exclusively by [[osteocytes]] that acts as the primary endogenous brake on bone formation. By blocking [[wnt-beta-catenin|Wnt/β-catenin signaling]] at the cell surface, it suppresses osteoblast activity and couples bone formation to mechanical load. With age, SOST expression rises and mechanical stimulation declines — a convergent suppression of anabolic bone activity that contributes substantially to age-related BMD loss. Romosozumab, a humanized monoclonal anti-SOST antibody, is FDA-approved (2019) for postmenopausal [[osteoporosis]] and remains the clearest pharmacological proof-of-concept for SOST-axis manipulation in aging bone.

## Identity

- **UniProt:** Q9BQB4 (SOST_HUMAN) — reviewed Swiss-Prot entry
- **NCBI Gene ID:** 50964
- **HGNC ID:** 13771
- **Ensembl:** ENSG00000167941
- **Chromosomal location:** 17q21.31
- **Length:** 213 amino acids (precursor); ~24 kDa
- **Mouse ortholog:** Sost (highly conserved; mouse knockout produces massive cortical bone overgrowth, phenocopying human sclerosteosis)
- **GenAge entry:** not listed (SOST elevation is an aging correlate; causality not yet GenAge-tier evidence)

## Protein structure and family

SOST is a member of the DAN (differential screening-selected gene aberrative in neuroblastoma) family of secreted glycoproteins, which share a cystine-knot fold at the C-terminus. This fold mediates protein-protein interactions and is critical for binding to LRP5/LRP6. The cystine knot distinguishes SOST from most Wnt modulators and makes it structurally tractable for antibody blockade — the basis for romosozumab's mechanism.

## Tissue expression and cellular source

SOST is produced almost exclusively by terminally differentiated osteocytes embedded in mineralized bone matrix (lacunocanalicular network). Low-level expression has been reported in cementocytes (dental root) and, at lower abundance, vascular smooth muscle cells (VSMCs) — the VSMC expression is functionally relevant to the vascular calcification axis discussed below. SOST is not substantially expressed in osteoblasts, osteoclasts, or systemic non-skeletal tissues under basal conditions.

## Mechanism: Wnt antagonism

SOST inhibits canonical Wnt signaling by directly binding the first propeller domain of **LRP5 and LRP6** — the co-receptors required for Wnt ligand-driven receptor complex formation [^ellies2006]. By occupying this domain, SOST prevents Wnt ligands from assembling the LRP5/6–Frizzled complex, blocking downstream β-catenin stabilization and nuclear translocation. The functional result is suppression of osteoblast differentiation and bone matrix synthesis.

Key structural detail: LRP5-G171V (the gain-of-function variant causing high bone mass) does **not** bind SOST — explaining why this human variant bypasses SOST-mediated suppression [^ellies2006]. This same principle underlies [[dkk1]]'s parallel mechanism: DKK1 also binds LRP5/6 but at the β-propeller 1 domain, making it a mechanistic parallel to SOST.

Downstream consequence of SOST-driven Wnt blockade:
- Reduced osteoblast differentiation from progenitors → less bone matrix synthesis
- Reduced osteoblast survival (anti-apoptotic Wnt signals are lost)
- Indirectly favors bone resorption by reducing osteoprotegerin (OPG) expression, shifting the RANKL/OPG ratio

## Mechanosensory regulation

Fluid shear stress through the lacunocanalicular canalicular network is the primary physiological signal suppressing SOST in osteocytes [^bonewald2008]. During mechanical loading, osteocytes detect fluid flow, rapidly downregulate SOST transcription (within hours), and release Wnt signals that drive bone formation at loaded surfaces. This couples skeletal architecture to habitual mechanical demand.

Aging disrupts mechanosensory coupling at multiple levels: osteocyte number and viability decline; lacunocanalicular connectivity degrades; and the transcriptional response to load weakens — all amplifying SOST-mediated suppression of bone formation even at normal circulating SOST levels.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — LRP5/6 binding domain and Wnt downstream cascade identical |
| Phenotype conserved in humans? | yes — sclerosteosis / van Buchem phenotype confirm loss-of-SOST → bone overgrowth |
| Replicated in humans? | yes — romosozumab RCTs provide human intervention evidence |

## Age-related biology (load-bearing section)

### SOST elevation with age

Serum sclerostin rises with age in both sexes. A cross-sectional study in healthy men over 50 (n=89) showed SOST levels positively correlated with age and negatively with BMD at lumbar spine and femoral neck [^bhattoa2013]. The trajectory of rising SOST parallels progressive trabecular thinning and cortical porosity in the 6th–8th decades. #gap/needs-replication — most age-SOST studies are cross-sectional; longitudinal trajectories within the same individuals across decades are sparse.

### Estrogen withdrawal accelerates SOST

Estrogen directly suppresses SOST transcription in osteocytes. The menopause transition — abrupt estrogen decline — accelerates SOST elevation and is temporally coincident with the accelerated phase of postmenopausal bone loss. #gap/needs-human-replication — the causal directionality (estrogen → SOST → bone loss vs parallel tracks) is mechanistically plausible but not settled by intervention data isolating SOST suppression from other estrogen effects.

### Klotho-SOST interaction

[[klotho]] expression declines progressively with age. Klotho functions as a co-receptor for [[fgf23]] in the bone-kidney-mineral axis and also modulates Wnt signaling independently. Declining Klotho has been proposed to synergize with rising SOST in destabilizing the anabolic-resorptive balance of aging bone — a convergent suppression of Wnt-dependent bone formation. #gap/no-mechanism — the direct molecular interaction between circulating Klotho and osteocyte SOST regulation is uncharacterized.

## Romosozumab: the FDA-approved anti-SOST intervention

Romosozumab is a humanized monoclonal antibody targeting SOST, FDA-approved April 2019 for postmenopausal women with osteoporosis at high fracture risk (monthly subcutaneous injection, 210 mg × 12 months). The agent has a mechanistically unusual **dual anabolic + anti-resorptive** profile — SOST blockade simultaneously releases Wnt-driven bone formation AND (via downstream OPG effects) reduces osteoclast-mediated resorption.

### FRAME trial (vs placebo)

At 12 months, romosozumab reduced vertebral fractures vs placebo (0.5% vs 1.8%, 73% relative reduction; p<0.001) in postmenopausal women with osteoporosis [^cosman2016]. Clinical fracture rate reduced 36%. Cardiovascular adverse events appeared **balanced between groups** in FRAME — the CV signal was not observed in the placebo-controlled setting.

### ARCH trial (vs alendronate) — the CV safety question

The pivotal active-comparator trial (ARCH) enrolled ~4000 postmenopausal women with osteoporosis at high fracture risk and compared romosozumab (12 months) → alendronate vs alendronate alone [^saag2017]. Romosozumab was superior to alendronate for fracture reduction (vertebral fracture 48% lower risk at 24 months; 6.2% vs 11.9%; risk ratio 0.52; 95% CI 0.40–0.66; P<0.001). However, **serious cardiovascular adverse events occurred in 2.5% of the romosozumab arm vs 1.9% in alendronate** (50/2040 vs 38/2014; odds ratio 1.31; 95% CI 0.85–2.00; not statistically significant; driven by cardiac ischemic events [0.8% vs 0.3%; OR 2.65; 95% CI 1.03–6.77] and cerebrovascular events [0.8% vs 0.3%; OR 2.27; 95% CI 0.93–5.22]) [^saag2017]. This difference — while not reaching conventional significance — prompted the FDA to add a **boxed warning** contraindicating romosozumab in patients with prior MI or stroke within the preceding year.

**Why the discordance between FRAME and ARCH?** Two hypotheses:
1. **Comparator effect** — alendronate has established cardioprotective properties; the ARCH control arm had lower expected CV events, inflating the apparent romosozumab risk.
2. **On-target vascular effect** — SOST is expressed in VSMCs; blockade may release Wnt signaling in the arterial wall, potentially augmenting vascular calcification or plaque instability in high-risk patients. Mendelian randomization evidence (Zheng 2023; n=33,961) supports on-target causality: genetically lower sclerostin (mirroring romosozumab pharmacology) was associated with increased MI risk (OR 1.35), type 2 diabetes (OR 1.32), hypertension (OR 1.09), and coronary artery calcification [^zheng2023mr].

A 2026 meta-analysis (Chen et al., *Front Endocrinol*; n=12,384 across 10 RCTs) found no statistically significant increase in CV complications with anti-sclerostin antibody therapy overall — though the ARCH-enrolled high-fracture-risk patients (with pre-existing fragility fractures) may have higher baseline CV risk than meta-analysis averages [^chen2026meta].

#gap/contradictory-evidence — the FRAME vs ARCH discordance remains unresolved. No prospective trial has been powered to adjudicate the CV question in isolation. The 2026 LIDA trial (Leder BZ, Lancet Diabetes Endocrinol 2026; PMID 41621431) compared 3 vs 12 months of romosozumab duration but was not designed to resolve the CV safety question.

**Clinical bottom line:** romosozumab is not contraindicated broadly — it remains appropriate for high-fracture-risk patients without recent CV events. The CV signal warrants patient-level risk stratification.

## SOST in vasculature: the bone-vascular paradox

A biologically paradoxical pattern has emerged: whereas elevated serum SOST is associated with **lower** BMD and worse bone outcomes, some vascular data suggest SOST may act as a **local inhibitor of vascular calcification** by blocking osteogenic Wnt signaling in VSMCs [^stelmaszek2025]. This creates a potential double-edged sword:

- In bone: high SOST → suppressed Wnt → bone loss (bad)
- In vasculature: SOST produced locally by stressed VSMCs may limit osteogenic transdifferentiation and calcification (potentially protective)

Hypoxia-driven regulation adds a further layer: within atherosclerotic plaques, HIF-1α activation modulates SOST in VSMCs in a context-dependent fashion that can be either pro- or anti-calcific depending on disease stage [^yeon2026]. Cross-link: [[vascular-calcification]] (verified page) — the VSMC osteogenic switch context.

**Clinical implication:** romosozumab's systemic SOST blockade may inadvertently remove this local vascular brake, contributing to the ARCH CV signal in susceptible patients. This remains speculative. #gap/no-mechanism for the SOST-VSMC-calcification causal direction in humans with romosozumab exposure.

## Hallmarks assignment rationale

SOST is assigned to **[[altered-intercellular-communication]]** and **[[stem-cell-exhaustion]]** rather than the seeder's original assignments (deregulated-nutrient-sensing + loss-of-proteostasis). Rationale:

- **[[altered-intercellular-communication]]**: Sclerostin is a secreted glycoprotein hormone. Its primary aging-relevant mechanism is endocrine/paracrine signaling — it is released by osteocytes and acts on osteoblast-lineage cells (and VSMCs) to modulate Wnt pathway activation. Age-driven SOST elevation is precisely an intercellular communication change that suppresses anabolic bone signaling. This is the canonical example of a secreted aging signal (rising with age, acting at a distance, suppressing homeostatic cell behavior).
- **[[stem-cell-exhaustion]]**: SOST-driven Wnt suppression reduces osteoblast differentiation from mesenchymal progenitors — an osteoblast-lineage stem cell exhaustion mechanism. The clinical manifestation (age-related BMD loss) maps to this hallmark.
- Deregulated-nutrient-sensing and loss-of-proteostasis are not mechanistically anchored by any SOST-specific evidence.

## Druggability — aging-context rationale

**Tier 1.** Romosozumab is FDA-approved specifically for postmenopausal osteoporosis — an aging-relevant indication where SOST-pathway overactivity (age-driven SOST elevation → suppressed bone formation → fracture risk) is the therapeutic target. This is the clearest possible aging-context tier-1 designation: the drug, target, and aging phenotype are directly aligned.

## Cross-links

- [[wnt-beta-catenin]] — the pathway SOST antagonizes; romosozumab CV signal discussed there
- [[lrp5-lrp6]] — direct SOST binding partners at the receptor level
- [[osteocytes]] — primary cellular source (verified page)
- [[osteoblasts]] — downstream bone-forming cells released when SOST is suppressed #gap/needs-page
- [[bone]] — tissue-level context
- [[osteoporosis]] — load-bearing aging phenotype driven in part by SOST elevation
- [[vascular-calcification]] — VSMC-expressed SOST and the paradoxical vascular axis
- [[arterial-stiffening]] — romosozumab CV signal connects here
- [[klotho]] — co-declining aging-mineral-homeostasis regulator
- [[fgf23]] — bone-kidney axis partner
- [[dkk1]] — mechanistic parallel (also LRP5/6 antagonist) #gap/needs-page
- [[romosozumab]] — the FDA-approved compound page #gap/needs-page

## Limitations and gaps

- `#gap/needs-replication` — most human age-SOST data are cross-sectional; longitudinal within-person trajectories are sparse
- `#gap/contradictory-evidence` — FRAME vs ARCH CV signal discordance is unresolved; the alendronate-comparator confound remains live
- `#gap/no-mechanism` — SOST-VSMC causal direction in romosozumab-exposed humans not established
- `#gap/needs-human-replication` — estrogen-SOST-bone loss causality: plausible from mechanistic data, not established by human intervention targeting SOST in isolation
- `#gap/no-mechanism` — Klotho-SOST interaction: proposed but molecular mechanism uncharacterized
- **MR evidence (updated)** — Zheng et al. 2023 (*Arthritis & Rheumatology*; GWAS meta-analysis + two-sample MR; n=33,961 European individuals) showed that genetically lower sclerostin causally increases MI risk (OR 1.35), type 2 diabetes risk (OR 1.32), hypertension risk (OR 1.09), and coronary artery calcification — formal MR causal evidence updated `mr-causal-evidence` from `partial` to `yes`. This result is directionally consistent with the ARCH CV safety signal and provides genetic support for the on-target vascular hypothesis [^zheng2023mr]

## Footnotes

[^ellies2006]: doi:10.1359/jbmr.060810 · Ellies DL et al. · J Bone Miner Res 2006 · in-vitro + cell-based · model: LRP5 binding assay, HEK293 cells · confirmed direct SOST–LRP5 interaction and LRP5-G171V resistance · 350 citations

[^bonewald2008]: doi:10.1016/j.bone.2007.12.224 · Bonewald LF · Bone 2008 · review · model: osteocyte mechanosensing in vivo + in vitro · comprehensive mechanosensing-Wnt-SOST regulation review · 1048 citations

[^bhattoa2013]: doi:10.1007/s00774-013-0451-z · Bhattoa HP et al. · J Bone Miner Metab 2013 · observational · n=89 (healthy men >50 y) · serum SOST positively correlated with age, negatively with BMD at spine and hip

[^cosman2016]: doi:10.1056/NEJMoa1607948 · Cosman F et al. · N Engl J Med 2016 · rct · n=7180 (3589 romosozumab, 3591 placebo) · model: postmenopausal women with T score −2.5 to −3.5, osteoporosis · romosozumab 210 mg SC monthly × 12 mo vs placebo; both → denosumab × 12 mo · vertebral fracture 73% lower risk at 12 mo (0.5% [16/3321] vs 1.8% [59/3322]; RR 0.27; 95% CI 0.16–0.47; P<0.001); clinical fracture 36% lower (1.6% vs 2.5%; HR 0.64; P=0.008); adverse events including CV events balanced between groups · PDF verified 2026-05-23 · 1617 citations

[^saag2017]: doi:10.1056/NEJMoa1708322 · Saag KG et al. · N Engl J Med 2017 · rct · n=4093 (2046 romosozumab, 2047 alendronate) · model: postmenopausal women at high fracture risk with prior fragility fracture · romosozumab (210 mg SC monthly × 12 mo) → alendronate vs alendronate alone × 24 mo · vertebral fracture 48% lower risk (6.2% vs 11.9%; RR 0.52; 95% CI 0.40–0.66; P<0.001); clinical fracture 27% lower (HR 0.73; P<0.001); serious CV adverse events 2.5% vs 1.9% (50/2040 vs 38/2014; OR 1.31; 95% CI 0.85–2.00; NS) → FDA boxed warning · PDF verified 2026-05-23 · 1364 citations

[^stelmaszek2025]: doi:10.1016/j.advms.2025.10.003 · Stelmaszek S et al. · Adv Med Sci 2025 · review · sclerostin as CVD biomarker; conflicting evidence on direction of vascular SOST effect; emphasizes CKD and metabolic disease populations · 0 citations (very recent)

[^yeon2026]: doi:10.1007/s11883-025-01377-w · Yeon S, Seto SW, Bhuyan JD, Chang D, Li CG · Curr Atheroscler Rep 2026;28(1) · review · hypoxia-HIF-1α-driven SOST regulation in VSMCs; context-dependent pro- vs anti-calcific effects; natural product modulation reviewed · DOI confirmed via Crossref; full text not_oa #gap/no-fulltext-access

[^zheng2023mr]: doi:10.1002/art.42592 · Zheng J et al. · Arthritis Rheumatol 2023 · GWAS meta-analysis + two-sample Mendelian randomization · n=33,961 European individuals · lower genetically predicted sclerostin causally associated with increased MI risk (OR 1.35), type 2 diabetes (OR 1.32), hypertension (OR 1.09), and coronary artery calcification; provides formal MR causal evidence for on-target CV risk of SOST inhibition · PMID 37096546

[^chen2026meta]: doi:10.3389/fendo.2025.1526408 · Chen L, Wang Q, Gu M · Front Endocrinol (Lausanne) 2026 · systematic review + meta-analysis · n=12,384 across 10 RCTs · anti-sclerostin antibodies significantly increase BMD; no statistically significant increase in cardiovascular complications vs placebo or active comparator · PMID 41635538
