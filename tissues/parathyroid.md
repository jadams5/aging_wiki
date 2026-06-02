---
type: tissue
aliases: [parathyroid glands, parathyroid gland, parathyroids]
parent-system: endocrine-system
key-cell-types: ["[[chief-cells]]", "[[oxyphil-cells]]"]
key-aging-phenotypes: ["[[secondary-hyperparathyroidism]]", "[[osteoporosis]]", "[[primary-hyperparathyroidism]]"]
related-hallmarks: ["[[altered-intercellular-communication]]", "[[deregulated-nutrient-sensing]]", "[[mitochondrial-dysfunction]]"]
verified: true
verified-date: 2026-06-02
verified-by: claude
verified-scope: "Minisola 2022 and Hannan 2018 verified against full PDF (OA). Farrell 2018 verified against PubMed abstract (single-institution study, not 17 studies — corrected). Jilka 2007 verified against PMC full text (mechanistic table corrected: continuous-PTH apoptosis pathway and intermittent-PTH anti-apoptotic pathway both corrected). Müller-Höcker 2014 and Mao 2024: closed-access, abstract-only; #gap/no-fulltext-access retained. Adenoma 85-90% prevalence claim tagged #gap/unsourced — not attributed to Minisola 2022. Literature supersession checked 2026-06-02."
literature-checked-through: 2026-06-02
---


# Parathyroid Glands

The parathyroid glands are four small, pea-sized endocrine glands (each ~30–50 mg in adults) located on the posterior aspect of the thyroid. Their singular essential function is the secretion of **parathyroid hormone (PTH)**, the master regulator of extracellular calcium homeostasis, with co-regulatory roles in phosphate balance, renal mineral handling, and skeletal remodeling. Through the PTH–vitamin D–FGF23–Klotho regulatory network, the parathyroids act as a hub in the broader mineral-metabolism endocrine axis that links bone, kidney, and intestine.

In aging, this gland undergoes progressive cellular and functional remodeling: chief cells — the active PTH-secreting cells — are displaced in part by oxyphil cells, a population whose functional role remains contested and which accumulates mitochondrial DNA mutations with age. Circulating PTH rises progressively from midlife onward, driven by vitamin D insufficiency, declining renal calcium reabsorption, and reduced intestinal calcium absorption. The result — **secondary hyperparathyroidism** — is one of the dominant biochemical drivers of age-related cortical bone loss, and the mechanistic context for the clinical use of intermittent PTH analogs (teriparatide, abaloparatide) as paradoxical anabolic osteoporosis therapies.

---

## Anatomy and cell types

### Macrostructure

In most adults there are four parathyroid glands: two superior and two inferior, each embedded in (or closely adherent to) the posterior capsule of the thyroid lobes. Ectopic parathyroid glands are found in approximately 3–6% of individuals and may be located in the thymus, mediastinum, or retroesophageal space — clinically relevant for surgical planning in primary hyperparathyroidism. Each gland is separated from the thyroid by a thin connective tissue capsule and is supplied by the inferior thyroid artery. Total combined parathyroid mass in healthy adults is approximately 120–140 mg. #gap/unsourced — precise mass reference range needs primary anatomical citation.

### Cell types

| Cell type | Proportion | Function | Aging notes |
|---|---|---|---|
| **Chief cells** (principal cells) | ~70–80% in young adults | PTH synthesis and secretion; express the calcium-sensing receptor (CASR); also express the Klotho co-receptor for FGF23 | Proportion declines with age as oxyphil cells expand |
| **Oxyphil cells** | Rare in children; ~10–20%+ in elderly | Uncertain; may be non-secretory, post-mitotic, or senescent chief cell variants; high mitochondrial content | Increase markedly with age and in chronic stimulation; accumulate somatic mitochondrial DNA mutations (see below) |
| **Water-clear cells** | Rare; inconstant | Uncertain; sometimes associated with severe hyperparathyroidism | Uncommon; not clearly aging-linked |
| **Fat cells (adipocytes)** | Variable | Stromal; proportion increases in middle age | Parathyroid steatosis (fat cell infiltration) increases with age; may reflect reduced functional demand or cellular senescence |

**Oxyphil cell accumulation** is a distinctive aging change in the parathyroid. Oxyphil cells are distinguished by their abundant eosinophilic cytoplasm, which on electron microscopy is packed with dysfunctional mitochondria. Müller-Höcker et al. (2014) demonstrated that oxyphil cell metaplasia is characterized by somatic mitochondrial DNA mutations — particularly in NADH dehydrogenase complex I subunit genes — and by cytochrome c oxidase activity defects consistent with age-related mitochondrial dysfunction in post-mitotic cells [^muller-hocker2014]. The accumulation of mitochondria with OXPHOS defects in oxyphil cells mirrors the pattern seen in post-mitotic cells in other tissues (e.g., cardiomyocytes, neurons). Whether oxyphil cells represent a senescent chief cell state, a terminally differentiated variant, or a stress-responsive population remains under investigation.

Recent single-cell RNA sequencing of parathyroid glands from patients with uremic secondary hyperparathyroidism (Mao et al. 2024, Kidney International) demonstrated that chief cells can **transdifferentiate** into oxyphil cells via an intermediate transcriptional state — suggesting the oxyphil accumulation in aging and stimulated glands is a dynamic lineage transition, not merely passive cell replacement [^mao2024-scrna]. This has implications for understanding whether the oxyphil-enriched gland in aging retains PTH-secretory capacity.

---

## PTH physiology: the calcium set-point system

### Synthesis, storage, and secretion

PTH is an 84-amino-acid peptide produced exclusively in chief cells. Prepro-PTH is processed through the ER/Golgi into the active PTH(1-84) form, which is stored in secretory vesicles. PTH secretion is under tight second-by-second control by extracellular ionized calcium ([Ca²⁺]ₑ), sensed through the **calcium-sensing receptor (CASR)**, a dimeric family C G-protein-coupled receptor expressed at high levels on the chief cell plasma membrane. The CASR signals via heterotrimeric G-proteins of the Gq/11, Gi/o, and G12/13 families [^hannan2018-casr].

The CASR operates as a **calcium set-point device**: as [Ca²⁺]ₑ rises, CASR activation suppresses PTH secretion via Gq→PLC→PKC signaling and simultaneously activates calcitonin secretion from thyroid C cells. Conversely, falling [Ca²⁺]ₑ releases CASR suppression → rapid PTH secretion from pre-formed vesicles (seconds to minutes) → increased PTH synthesis over hours. The set-point (the [Ca²⁺]ₑ at which PTH secretion is 50% maximal) varies across individuals and is modestly shifted upward in primary hyperparathyroidism.

FGF23 also acts directly on parathyroid chief cells via FGFR1/Klotho co-receptor signaling to **suppress PTH transcription and secretion** — Klotho is expressed in normal parathyroid tissue, creating a direct bone-to-parathyroid feedback arm [^agoro2023-fgf23]. This FGF23–Klotho–PTH axis is discussed in detail under [[fgf23]] and [[klotho]].

### PTH target actions

| Target tissue | Action | Net effect on calcium |
|---|---|---|
| **Bone** | Activates osteoblasts → upregulates RANKL → osteoclastogenesis → bone resorption; releases Ca²⁺ and PO₄³⁻ from matrix | ↑ Ca²⁺ (↑ PO₄³⁻ also, but buffered by renal effects) |
| **Kidney (proximal tubule)** | Downregulates NaPi-2a/2c → phosphaturia; reduces phosphate reabsorption | ↑ urinary phosphate excretion → ↓ serum phosphate |
| **Kidney (distal tubule)** | Activates TRPV5 and calbindin-D28k → calcium reabsorption | ↑ renal Ca²⁺ reabsorption |
| **Kidney (proximal tubule)** | Activates CYP27B1 (1α-hydroxylase) → 25(OH)D → 1,25(OH)₂D (calcitriol) synthesis | ↑ intestinal calcium absorption (indirect) |
| **Intestine (indirect)** | Via calcitriol → upregulates TRPV6 and calbindin-D9k → transepithelial Ca²⁺ transport | ↑ intestinal Ca²⁺ absorption |

The integrated result: PTH maintains [Ca²⁺]ₑ in the physiological range (~1.1–1.3 mmol/L ionized) while simultaneously disposing phosphate renally. This makes PTH the **counter-regulatory partner** of FGF23: where FGF23 suppresses phosphate reabsorption and calcitriol synthesis (a phosphate-lowering set), PTH reinforces phosphate excretion and calcitriol production (a calcium-restoring set). Both are dysregulated in aging and CKD. See [[hyperphosphatemia]] for the downstream consequences of phosphate axis dysregulation.

---

## Aging changes in the parathyroid

### PTH rises with age: epidemiological evidence

Circulating intact PTH (iPTH) rises progressively across adulthood even in individuals without CKD or primary hyperparathyroidism. Farrell et al. (2018) performed a retrospective data-mining study of 33,652 PTH test results from a single private pathology laboratory and derived age-stratified PTH reference intervals: the upper and lower reference limits increased by **63% between the youngest (18–29 years) and oldest (≥80 years) age partitions**, and individuals with optimal vitamin D status were used to reduce confounding [^farrell2018-refrange]. Aloia et al. (2006) similarly found that population-derived PTH reference intervals shift upward with decade of age when vitamin D-replete individuals are analyzed [^aloia2006-refrange]. #gap/dose-response-unclear — precise magnitude of age-related PTH rise is assay-dependent and cohort-dependent; the Farrell 63% figure is from one Australian laboratory cohort and may differ across assay platforms and populations.

### Drivers of the age-related PTH rise

Multiple overlapping mechanisms converge on elevated PTH in aging:

1. **Vitamin D insufficiency** — reduced solar UV-B exposure, decreased skin synthesis efficiency (7-dehydrocholesterol declines in aged skin), reduced hepatic and renal hydroxylation capacity → lower 25(OH)D → lower 1,25(OH)₂D → reduced intestinal calcium absorption → CASR-mediated PTH elevation. Vitamin D insufficiency (25(OH)D <50 nmol/L) is prevalent in 30–60%+ of older adults in northern latitudes.

2. **Declining renal function** — GFR falls ~0.7–1 mL/min/1.73 m² per decade after age 40 in the general population. As GFR declines:
   - Phosphate excretion decreases → phosphate tends to rise → stimulates PTH directly and via FGF23 elevation
   - CYP27B1 (1α-hydroxylase) capacity in the proximal tubule falls → less calcitriol → less intestinal calcium absorption
   - The FGF23–Klotho axis becomes progressively dysregulated (see [[fgf23]], [[klotho]])
   This represents the early stages of the **CKD-mineral and bone disorder (CKD-MBD)** continuum, which Freire-Filho et al. (2025) review as a distinct aging-CKD intersection [^freire-filho2025-ckd-aging].

3. **Reduced intestinal calcium absorption efficiency** — independent of vitamin D, intestinal TRPV6 and calbindin-D9k expression decline with age, and the calcitriol-responsive calcium transport system becomes less sensitive. The net result is that the same dietary calcium intake produces less absorbed calcium, requiring PTH-mediated skeletal buffering to maintain [Ca²⁺]ₑ.

4. **FGF23 elevation and Klotho decline** — FGF23 rises significantly with age (even without overt CKD), driven by osteocyte stress and skeletal mineralization signals. Elevated FGF23 suppresses CYP27B1 → lowers calcitriol → reduces calcium absorption → stimulates PTH. Simultaneously, parathyroid Klotho expression declines with age and in CKD, blunting the FGF23→PTH-suppression feedback and allowing PTH to rise unchecked despite the elevated FGF23 signal [^agoro2023-fgf23]. This axis is detailed on [[fgf23]] and [[klotho]].

### Secondary hyperparathyroidism in aging

The sustained elevation of PTH from the above drivers constitutes **secondary hyperparathyroidism** in aging — a compensatory state in which elevated PTH maintains [Ca²⁺]ₑ near the normal range, but at the cost of continuous **cortical bone resorption**. The skeletal consequences:

- PTH acts on osteoblasts (which express PTHR1, the type 1 PTH receptor) to upregulate RANKL, driving osteoclastogenesis and cortical bone resorption
- **Cortical bone** is preferentially eroded — secondary hyperparathyroidism causes endosteal resorption and increased cortical porosity, increasing fracture risk even when trabecular BMD appears preserved
- Elevated PTH also promotes renal phosphate excretion (protective against hyperphosphatemia) and calcitriol synthesis (partially compensatory for the calcitriol-deficit driver) — a dual endocrine effort that succeeds in maintaining calcium homeostasis but fails to protect bone

The clinical threshold distinguishing "physiological age-related PTH elevation" from pathological **secondary hyperparathyroidism** is not sharply defined outside of CKD guidelines (KDIGO targets iPTH 2–9× the upper limit of normal in CKD stage 5). In the general aging population without CKD, PTH in the upper quartile of the normal range is associated with increased fracture risk and accelerated bone loss. #gap/contradictory-evidence — thresholds for intervention in the general (non-CKD) aging population are not established by RCT.

### Primary hyperparathyroidism: prevalence and age pattern

In contrast to secondary hyperparathyroidism (compensatory, vitamin-D/CKD-driven), **primary hyperparathyroidism** (PHP) is an autonomous overproduction of PTH by one or more parathyroid glands — in ~85–90% of cases due to a single parathyroid adenoma, rarely multigland disease or carcinoma. #gap/unsourced — the 85–90% single-adenoma figure is not from Minisola 2022 (which attributes PHP to "clonally dysregulated overgrowth of one or more parathyroid glands" without specifying this proportion); needs a primary surgical series citation. Minisola et al. (2022) document the epidemiology across four decades: US prevalence is approximately **233 per 100,000 women** and **85 per 100,000 men** (~0.23% and ~0.085% respectively); Scandinavian observational data report 2–5% prevalence in postmenopausal women; prevalence rises sharply with age [^minisola2022-epidemiology]. PHP shows a **3:1 female-to-male predominance** and peaks in incidence in the post-menopausal period (typically diagnosed in women aged 55–75 years). In older adults aged 65+, PHP is the most common cause of hypercalcemia after malignancy-associated hypercalcemia.

Clinical PHP in the modern era is predominantly **asymptomatic** (discovered incidentally on routine chemistry panels showing hypercalcemia + elevated PTH), in contrast to the classical "bones, stones, groans, and moans" symptomatic presentation (nephrolithiasis, osteitis fibrosa cystica, GI symptoms, neuropsychiatric). Asymptomatic PHP remains associated with bone loss — primarily cortical at the distal radius and femoral neck — and with modestly increased fracture risk. The distinction between PHP and the vitamin-D-deficiency-driven secondary form requires measuring both serum calcium (elevated or high-normal in PHP; normal or low in secondary) and PTH simultaneously.

---

## The FGF23–Klotho–PTH aging interplay

The parathyroid is embedded in a three-way hormonal feedback with bone (via FGF23) and kidney (via calcitriol and Klotho):

```
[Bone → FGF23 ↑] → [Parathyroid: Klotho/FGFR1 → PTH ↓]
         ↓ (in aging/CKD: Klotho ↓ in parathyroid → FGF23 resistance)
[PTH ↑ unchecked] → [Bone resorption ↑, Calcitriol ↑ transiently]
         ↓
[Calcitriol → CASR expression ↑ in parathyroid → PTH ↓] (buffering)
         ↓ (failing in aging)
[Hyperparathyroidism sustained → cortical bone loss → [[osteoporosis]]]
```

Key points on the aging axis:
- Parathyroid chief cells express **Klotho** and **FGFR1** as the FGF23 receptor complex; this is the direct bone-to-parathyroid communication channel
- In aging and CKD, parathyroid Klotho expression **declines**, blunting FGF23's PTH-suppressive action
- The result is a gland that becomes progressively resistant to FGF23 feedback, allowing PTH to rise further than the bone-stress signal alone would warrant
- This dysregulation is part of the "FGF23 excess / calcitriol deficit / PTH excess" triad that defines aging-associated CKD-MBD

Full quantitative evidence for FGF23 and Klotho changes with age is on [[fgf23]] (verified) and [[klotho]] respectively. The downstream effects on [[bone]] and [[hyperphosphatemia]] are documented on those pages.

---

## The PTH paradox: intermittent anabolic vs continuous catabolic

A clinically and mechanistically important distinction is that PTH's skeletal effects are **dose-rate-dependent**:

- **Continuous/sustained PTH elevation** (as in secondary or primary hyperparathyroidism, or pharmacological continuous infusion) → net bone **resorption** → cortical bone loss; the dominant effect is RANKL-driven osteoclastogenesis outpacing bone formation
- **Intermittent/pulsatile PTH** (once-daily subcutaneous injection at pharmacological doses) → net bone **anabolism** → increased trabecular and cortical BMD; the dominant effect is stimulation of osteoblast proliferation, survival (via Runx2, IGF-1, Wnt signaling), and matrix formation

Jilka (2007) comprehensively reviewed the cellular and molecular mechanisms distinguishing these two PTH regimes [^jilka2007-pth-paradox]. The key mechanistic insights:

| Feature | Continuous PTH | Intermittent PTH |
|---|---|---|
| RANKL/OPG ratio in osteoblasts | Sustained increase → osteoclastogenesis | Transient increase; net shift toward formation |
| Osteoblast apoptosis | Not prevented; sustained PTH suppresses Runx2 below the threshold required for osteoblast survival signaling | Inhibited via cAMP→PKA→Bad phosphorylation + Bcl-2 transcriptional upregulation; Runx2 is transiently increased above survival threshold |
| Wnt/β-catenin in osteoblasts | Suppressed (sustained Runx2 suppression impairs Wnt co-signaling) | Activated transiently via PTH-mediated reduction of sclerostin and other Wnt antagonists |
| Net bone balance | Negative (resorption > formation) | Positive (formation > resorption) |

This "PTH paradox" is the basis for:
- **Teriparatide** (recombinant human PTH 1-34; once-daily 20 µg SC) — FDA-approved anabolic osteoporosis therapy since 2002; significantly increases BMD and reduces vertebral + non-vertebral fractures
- **Abaloparatide** (PTHrP analog; once-daily 80 µg SC) — FDA-approved 2017; similar anabolic mechanism; modestly different PTHR1 binding kinetics that may reduce hypercalcemia risk

**Clinical note:** the anabolic window for teriparatide is **limited to 2 years** (regulatory label; reduced to 18 months in some countries due to osteosarcoma signal in Fischer 344 rats at suprapharmacological lifetime doses; causality in humans not established). After discontinuation, anti-resorptive therapy (bisphosphonate or denosumab) is required to preserve the BMD gain. #gap/long-term-unknown — optimal sequencing of teriparatide and anti-resorptive agents for fracture prevention in the aging population is an active area with multiple RCTs.

---

## Hallmark connections

| Hallmark | Parathyroid / PTH mechanism |
|---|---|
| [[altered-intercellular-communication]] | PTH is the primary endocrine signal coordinating Ca²⁺ homeostasis across bone, kidney, and intestine; secondary hyperparathyroidism represents a distorted intercellular communication state where compensatory PTH signaling produces maladaptive skeletal resorption; FGF23 resistance in the aging parathyroid is a failed feedback-loop example |
| [[deregulated-nutrient-sensing]] | Calcium sensing via CASR is a nutrient-sensing system; its dysregulation (elevated PTH despite normal/near-normal calcium) represents a shift in the nutrient-sensing set-point with age; vitamin D is a nutrient-derived hormone whose insufficiency drives the PTH elevation |
| [[mitochondrial-dysfunction]] | Oxyphil cell accumulation with age is characterized by somatic mitochondrial DNA mutations in NADH dehydrogenase and COX-encoding genes — the same mtDNA deletion and point-mutation pattern seen in other post-mitotic aging tissues; the functional consequence for parathyroid secretory capacity is unclear but the cellular mechanism is canonical mitochondrial aging [^muller-hocker2014] |

---

## Model-organism extrapolation note

Most mechanistic PTH biology has been characterized in rodents (C57BL/6 mice, Sprague-Dawley rats). Key divergences to note:

| Dimension | Status |
|---|---|
| CASR calcium-set-point mechanism conserved? | Yes — CASR structure and function is highly conserved across mammals |
| Age-related PTH rise conserved in rodents? | Partial — aged C57BL/6 mice show PTH-axis dysregulation in CKD-model contexts; normative aging data more limited than in humans |
| Oxyphil cell accumulation in rodent parathyroid? | No — oxyphil cells are a primate-specific parathyroid cell type; rodent parathyroids lack oxyphil cells, limiting the mouse as a model for parathyroid aging at the cellular level |
| Intermittent PTH anabolism conserved? | Yes — teriparatide anabolic mechanism validated in multiple rodent and primate models before human trials |

The absence of oxyphil cells in rodent parathyroid glands is an important structural divergence: rodent models cannot be used to study oxyphil-cell biology (including the mitochondrial mutation question). Human biopsy-based studies and primate models are required for this aspect.

---

## Key aging phenotypes

- **[[secondary-hyperparathyroidism]]** (implicit stub) — compensatory PTH elevation driven by vitamin D insufficiency, declining GFR, and FGF23/Klotho axis dysregulation; the dominant parathyroid-related aging phenotype
- **[[osteoporosis]]** — cortical bone loss from sustained PTH-driven resorption; parathyroid dysfunction is a major upstream driver
- **[[primary-hyperparathyroidism]]** (implicit stub) — autonomous adenoma-driven PTH excess; incidence peaks in postmenopausal women; the dominant cause of hypercalcemia in non-hospitalized elderly
- **[[hyperphosphatemia]]** — phosphate axis dysregulation downstream of CKD + elevated FGF23 + declining renal tubular function; parathyroid PTH is the principal phosphaturic regulator; see [[hyperphosphatemia]]

---

## Interventions (brief; depth on relevant compound/intervention pages)

| Intervention | Mechanism re: parathyroid | Evidence level |
|---|---|---|
| Vitamin D supplementation | Restores calcitriol → ↑ CASR expression in parathyroid + ↑ intestinal Ca²⁺ absorption → suppresses compensatory PTH; the most direct pharmacological correction of secondary hyperparathyroidism in non-CKD elderly | Strong (meta-analyses of PTH suppression); fracture efficacy evidence mixed and population-dependent |
| Calcium supplementation | Elevates [Ca²⁺]ₑ → CASR-mediated PTH suppression | Moderately strong for PTH suppression; fracture efficacy controversial (cardiovascular signal in high-dose supplementation) |
| Teriparatide / abaloparatide (intermittent PTH) | See PTH paradox above — recruits PTH signaling in an anabolic regime by bypassing the sustained-elevation catabolic pathway | Phase 3 RCTs; FDA-approved; indicated for high-fracture-risk osteoporosis |
| Cinacalcet (calcimimetic) | Allosterically sensitizes CASR to Ca²⁺ → suppresses PTH secretion; approved for secondary hyperparathyroidism in CKD dialysis patients and for PHP | Approved (CKD-secondary HP + PHP); not established for the general aging PTH-rise |
| Parathyroidectomy | Removes the autonomous adenoma source in PHP; resolves hypercalcemia and reduces fracture risk | Standard of care for symptomatic PHP; evidence for benefit in asymptomatic PHP is ongoing |

---

## Limitations and gaps

- `#gap/needs-replication` — oxyphil cell transdifferentiation from chief cells (Mao 2024 scRNA-seq data is in uremic SHPT, not normal aging; replication in non-CKD aging human tissue needed)
- `#gap/dose-response-unclear` — no consensus threshold for when age-related PTH elevation in non-CKD adults warrants intervention; PTH reference ranges are assay-dependent and lack age-stratified consensus
- `#gap/contradictory-evidence` — the fracture risk reduction by vitamin D supplementation in vitamin-D-replete elderly adults is inconsistent across meta-analyses; PTH-suppression endpoint and fracture endpoint do not track uniformly
- `#gap/long-term-unknown` — optimal sequencing after teriparatide (bisphosphonate vs denosumab; timing; duration) for maximal fracture prevention not definitively resolved
- `#gap/needs-human-replication` — the functional consequence of oxyphil mitochondrial DNA mutations for PTH secretory capacity has not been directly tested in human parathyroid physiology studies (Müller-Höcker 2014 characterizes the mutations but does not functionally assay secretory output of oxyphil-enriched glands)
- The rodent model divergence (no oxyphil cells) limits mechanistic aging studies; non-human primate or human ex-vivo parathyroid organoid models are needed for oxyphil biology

---

## See also

- [[fgf23]] — bone-derived phosphaturic hormone; suppresses PTH via parathyroid Klotho/FGFR1; elevated in aging (verified 2026-05-23)
- [[klotho]] — obligate FGF23 co-receptor; expressed in parathyroid; declines with age and CKD
- [[bone]] — primary target of PTH-driven resorption; documents the mineral-axis physiology in detail (verified)
- [[hyperphosphatemia]] — downstream of PTH-mediated phosphate wasting; verified 2026-06-02
- [[osteoporosis]] — key downstream phenotype of secondary hyperparathyroidism-driven bone loss
- [[osteoclasts]] — effector cells of PTH-driven bone resorption via RANKL signaling
- [[thyroid]] — sibling gland anatomically adjacent; separate endocrine function (thyroid hormone / calcitonin); calcitonin provides weak counter-regulation to PTH
- [[endocrine-system]] — parent-system MOC (being seeded in parallel)
- [[deregulated-nutrient-sensing]] — hallmark page; calcium/vitamin D sensing is a nutrient-sensing axis
- [[altered-intercellular-communication]] — hallmark page; PTH endocrine axis is the prototypical mineral-axis communication system

---

## Footnotes

[^hannan2018-casr]: doi:10.1038/s41574-018-0115-0 · PMID 30443043 · Hannan FM, Kallay E, Chang W, Brandi ML, Thakker RV · review · *Nature Reviews Endocrinology* 2018 Dec 1;15(1):33–51 · "Calcium-sensing receptor in physiology and in calcitropic and non-calcitropic diseases" · comprehensive review of CASR structure (dimeric family C GPCR; ~240–310 kDa dimer), G-protein coupling (Gq/11, Gi/o, G12/13), parathyroid set-point physiology, Klotho–CASR interaction in parathyroid chief cells, and disease-relevant mutations (FHH1-3, ADH1-2, NSHPT); confirms calcitriol upregulates parathyroid CASR expression via CASR gene VDREs; documents that parathyroid CaSR interacts with Klotho to regulate PTH secretion · verified against full PDF (PMC author manuscript; PMC6535143)

[^muller-hocker2014]: doi:10.1016/j.ajpath.2014.07.015 · PMID 25418474 · Müller-Höcker J, Schäfer S, Krebs S, Blum H, Zsurka G, Kunz WS, Prokisch H, Seibel P, Jung A · observational (human tissue) · model: human parathyroid biopsies (age-stratified cohort); n not specified in abstract · *American Journal of Pathology* 2014 Sep · "Oxyphil cell metaplasia in the parathyroids is characterized by somatic mitochondrial DNA mutations in NADH dehydrogenase genes and cytochrome c oxidase activity–impairing genes" · somatic mtDNA mutations and COX-activity defects characterize oxyphil cells; consistent with the mitochondrial aging hypothesis in post-mitotic cells · closed-access (not_oa); verified at abstract/DOI level only #gap/no-fulltext-access

[^mao2024-scrna]: doi:10.1016/j.kint.2023.11.027 · PMID 38142040 · Mao J, You H, Wang M, Ba Y, Qian J, Cheng P, Lu C, Chen J · in-vivo (human tissue) + scRNA-seq · model: parathyroid glands from uremic secondary hyperparathyroidism patients · *Kidney International* 2024 · "Single-cell RNA sequencing reveals transdifferentiation of parathyroid chief cells into oxyphil cells in patients with uremic secondary hyperparathyroidism" · identifies intermediate transcriptional states between chief and oxyphil; supports dynamic lineage transition model; **data is from uremic SHPT, not normal aging — extrapolation to non-CKD aging parathyroid requires caution** · closed-access (not_oa); verified at abstract/DOI level only #gap/no-fulltext-access

[^farrell2018-refrange]: doi:10.1111/cen.13486 · PMID 28949026 · Farrell CL, Nguyen L, Carter AC · observational (single-institution retrospective; n=33,652 PTH test results from a private pathology laboratory) · *Clinical Endocrinology* 2018;88(2):311–317 · "Parathyroid hormone: Data mining for age-related reference intervals in adults" · age-stratified reference intervals derived from vitamin-D-adequate subjects; upper and lower reference limits increased **63%** between the 18–29 and ≥80 age partitions; argues for age-stratified PTH reference ranges · closed-access (not_oa); verified at abstract/PubMed level only #gap/no-fulltext-access

[^aloia2006-refrange]: doi:10.4158/EP.12.2.137 · PMID 16690460 · Aloia JF, Feuerman M, Yeh JK · observational · *Endocrine Practice* 2006 · "Reference range for serum parathyroid hormone" · population-derived PTH reference ranges with age; documents upward shift in older vitamin-D-replete cohorts · in local archive (pending)

[^minisola2022-epidemiology]: doi:10.1002/jbmr.4665 · PMID 36245271 · Minisola S, Arnold A, Brandi ML, Clarke BL, Hannan FM, Thakker RV, et al. · review · *Journal of Bone and Mineral Research* 2022 Nov;37(11):2315–2329 · "Epidemiology, Pathophysiology, and Genetics of Primary Hyperparathyroidism" · US prevalence: 233 per 100,000 women (~0.23%) and 85 per 100,000 men (~0.085%); Scandinavian prevalence 2–5% in postmenopausal women (per observational/case-control data); 3:1 female-to-male ratio documented across multiple regional datasets (Italian: 69% women; England/Wales parathyroidectomy data: 3× more women than men); incidence peaks postmenopausally (diagnosed predominantly in women aged 55–75); modern presentation predominantly asymptomatic; genetic basis in ~10% of all PHPT cases; CaSR downregulation in adenomas is a key pathophysiologic mechanism · confirmed against PDF: year is November 2022 (Crossref published-print shows 2020 — this is a metadata error; the paper's own masthead and copyright state 2022) · open access (CC BY 4.0)

[^jilka2007-pth-paradox]: doi:10.1016/j.bone.2007.03.017 · PMID 17517365 (PMC1995599 — submitted version, not OA) · Jilka RL · review · *Bone* 2007 Apr 6;40(6):1434–1446 · "Molecular and cellular mechanisms of the anabolic effect of intermittent PTH" · comprehensively reviews why pulsatile PTH favors bone formation while continuous PTH favors resorption; key mechanistic distinction: intermittent PTH activates cAMP→PKA→Bad phosphorylation + Bcl-2 to inhibit osteoblast apoptosis and transiently elevates Runx2; continuous PTH suppresses Runx2 below the osteoblast survival threshold and sustains RANKL elevation; PTH also reduces sclerostin to activate Wnt signaling; IGF-1 is required for periosteal bone formation response · verified against PMC full text (submitted version)

[^agoro2023-fgf23]: doi:10.1038/s41581-022-00665-x · PMID 36624273 · Agoro R, White KE · review · *Nature Reviews Nephrology* 2023 · "Regulation of FGF23 production and phosphate metabolism by bone-kidney interactions" · covers the FGF23–Klotho–PTH–calcitriol regulatory circuit; discusses parathyroid Klotho expression and FGF23-mediated PTH suppression; includes aging/CKD-related dysregulation · closed-access (not_oa); verified at abstract/DOI level only #gap/no-fulltext-access

[^freire-filho2025-ckd-aging]: doi:10.1097/MNH.0000000000001084 · PMID 40314085 · Freire-Filho WA, Dalboni MA, Elias RM · review · *Current Opinion in Nephrology and Hypertension* 2025 · "Effects of aging on chronic kidney disease mineral and bone disorder" · reviews the intersection of normal aging and CKD-MBD; covers FGF23 elevation, Klotho decline, PTH rise, and secondary hyperparathyroidism as a continuum from normal aging to overt CKD · closed-access (not_oa); verified at abstract/DOI level only #gap/no-fulltext-access
