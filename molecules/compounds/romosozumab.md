---
type: compound
aliases: [Evenity, AMG 785, CDP-7851, anti-sclerostin antibody]
pubchem-cid: null
pubchem-cid-alt: null
chembl-id: CHEMBL2107874
chembl-id-active-metabolite: null
drugbank-id: null
who-inn: romosozumab
administration-route: injectable
biologic: true
molecular-formula: null
molecular-weight-da: ~136700
mechanisms: [sclerostin-inhibition, wnt-pathway-activation, osteoanabolic]
targets: ["[[sost]]"]
hallmarks: ["[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Head-to-head CV-safety RCT powered to adjudicate the ARCH alendronate-comparator confound: a 3-arm design (romosozumab vs alendronate vs placebo in patients without prior CV events) with MACE as a co-primary endpoint alongside vertebral fracture reduction would resolve whether the CV signal is compound-specific or comparator-driven."
clinical-trials-active: 16
literature-checked-through: 2026-06-02
verified: true
verified-date: 2026-06-02
verified-by: claude
verified-scope: "FRAME (Cosman 2016) and ARCH (Saag 2017) PDFs read end-to-end; all quantitative endpoints, arm sizes, CIs, p-values, and adverse-event table counts verified against full text. BRIDGE (Lewiecki 2018) abstract-only — full PDF closed-access (download failed); BMD numbers and CV imbalance counts confirmed from PubMed abstract. Recency-sweep sources (LIDA, Chen 2026 meta, Zheng 2023 MR, Ferrer 2025, Bandeira 2026, Liu 2025, Cipolloni 2026, Handel 2023) abstract-verified. DrugBank ID not independently confirmed — #gap/needs-canonical-id retained. Corrections applied: (1) FRAME T-score eligibility criterion corrected from 'lumbar spine or total hip' to 'total hip or femoral neck'; (2) Chen 2026 meta DOI corrected from 10.3389/fendo.2025.1526408 (non-existent) to 10.3389/fendo.2025.1732708; (3) Zheng 2023 MR DOI corrected from 10.1002/art.42592 to 10.1002/art.42538; (4) clinical-trials-active updated from 10 to 16; (5) FRAME and ARCH footnotes expanded with full CI, event counts, and volume/page data from PDFs."
---

# Romosozumab

Romosozumab (brand name Evenity; research codes AMG 785, CDP-7851) is a humanized IgG2 monoclonal antibody that targets and neutralizes sclerostin (SOST), the osteocyte-secreted brake on Wnt/β-catenin signaling in bone. FDA-approved April 2019 for postmenopausal women at high fracture risk, it is the first agent with a **dual anabolic + anti-resorptive** mechanism: by blocking SOST, it simultaneously releases Wnt-driven bone formation AND reduces bone resorption, a pharmacological combination not achieved by any previous osteoporosis drug. A boxed cardiovascular (CV) warning — arising from the ARCH trial comparison against alendronate — limits its use in patients with prior myocardial infarction (MI) or stroke within the preceding year. Understanding both the bone biology and the CV controversy is essential for positioning this drug in the aging-osteoporosis landscape.

## Identity

- **WHO INN:** romosozumab (confirmed)
- **Brand name:** Evenity (Amgen / UCB)
- **ChEMBL ID:** CHEMBL2107874 (confirmed via ChEMBL API 2026-06-02 — returned as "Antibody" type; synonyms include Evenity, AMG 785, CDP-7851)
- **PubChem CID:** not assigned for monoclonal antibodies; leave null
- **DrugBank ID:** not independently confirmed via live API — #gap/needs-canonical-id for DrugBank accession
- **Molecule type:** humanized IgG2 monoclonal antibody; biologic: true
- **Approximate molecular weight:** ~136.7 kDa (IgG2 biologic estimate; formal sequence MW from prescribing information)
- **Target:** [[sost]] (sclerostin / SOST protein, UniProt Q9BQB4)
- **FDA approval date:** April 9, 2019 (postmenopausal women at high fracture risk or failed other osteoporosis therapy)
- **Dose/regimen:** 210 mg subcutaneous injection once monthly × 12 months; given as two 105 mg injections at one visit; treatment is self-limiting at 12 months (approved course)

## Mechanism of action

### Sclerostin inhibition → Wnt de-repression → dual bone effect

Sclerostin is produced almost exclusively by [[osteocytes]] embedded in mineralized bone and secreted into the perilacunar fluid, from which it reaches osteoblast-lineage cells on bone-forming surfaces. Its molecular mechanism is binding to the first β-propeller domain of **LRP5 and LRP6**, the obligate Wnt co-receptors. By occupying this domain, SOST prevents Wnt ligands from assembling the LRP5/6–Frizzled receptor complex, blocking β-catenin stabilization and nuclear translocation. The downstream result is suppression of osteoblast differentiation, proliferation, and survival — the canonical cellular mechanism of age-related bone loss. See [[sost]] and [[wnt-beta-catenin]] for detailed molecular mechanism.

Romosozumab's IgG2 framework binds sclerostin with high affinity, neutralizing its circulating and tissue-bound forms and effectively mimicking the post-loading state of bone in which osteocytes downregulate SOST in response to mechanical fluid shear through the lacunocanalicular network. With SOST neutralized:

1. Wnt ligands engage LRP5/6–Frizzled freely → β-catenin accumulates → osteoblast gene programs activate → **bone formation increases** (anabolic effect)
2. Wnt/β-catenin signaling in osteoblasts upregulates OPG relative to RANKL → osteoclast recruitment is suppressed → **bone resorption decreases** (anti-resorptive effect)

This dual anabolic + anti-resorptive profile is unique among approved agents. Bisphosphonates and denosumab are purely anti-resorptive and maintain but do not robustly increase BMD. Teriparatide (PTH 1-34) and abaloparatide are predominantly anabolic but also transiently increase resorption early in the course. Romosozumab does both simultaneously during the 12-month treatment window.

### The "anabolic window" and self-limiting mechanism

The anabolic bone-forming effect of romosozumab is concentrated in the first 6–9 months of treatment, after which the increment attenuates despite ongoing dosing. This self-limiting phenomenon reflects SOST-independent compensatory feedback: as bone mass accumulates, sclerostin-independent Wnt pathway suppressors (DKK1, Kremen, sFRP family) and changes in the mechanical load environment collectively restore a homeostatic constraint on osteoblast activity. The treatment course is therefore capped at 12 months in the approved indication; continuation beyond 12 months provides no additional bone-formation benefit and exposes patients to prolonged CV risk.

Following the 12-month romosozumab course, **sequential antiresorptive therapy is essential** to consolidate gains: the large bone-formation burst during romosozumab treatment is not maintained if treatment is simply stopped. Transition to denosumab (anti-RANKL mAb) provides the best-documented BMD preservation in RCT follow-on data; transition to bisphosphonates (alendronate) is the lower-cost alternative and was the sequence used in ARCH. See § Sequencing below.

## Pivotal clinical trials

### FRAME trial (vs placebo; Cosman 2016)

The FRAME trial was a Phase 3, double-blind, randomized, placebo-controlled trial in postmenopausal women with osteoporosis (T-score −2.5 to −3.5 at the total hip or femoral neck) [^cosman2016].

| Parameter | Value |
|---|---|
| n | 7180 (3589 romosozumab, 3591 placebo) |
| Design | Phase 3 RCT; 12 months romosozumab/placebo → 12 months denosumab both arms |
| Eligibility T-score | −2.5 to −3.5 at the total hip or femoral neck |
| Primary endpoint | Vertebral fracture at 12 months |
| Vertebral fracture (12 mo) | 0.5% (16/3321) romosozumab vs 1.8% (59/3322) placebo; RR 0.27; 95% CI 0.16–0.47; **p<0.001** (73% relative risk reduction) |
| Clinical fracture (12 mo) | 1.6% (58/3589) vs 2.5% (90/3591); HR 0.64; 95% CI 0.46–0.89; **p=0.008** (36% relative risk reduction) |
| Nonvertebral fracture (12 mo) | 1.6% (56/3589) vs 2.1% (75/3591); HR 0.75; 95% CI 0.53–1.05; p=0.10 (not significant) |
| CV adverse events | Balanced between groups — CV signal **NOT observed** in placebo-controlled setting (adjudicated serious CV events: 1.2% romosozumab vs 1.1% placebo) |

FRAME provided the primary efficacy signal and the FDA approval basis. The absence of a CV imbalance versus placebo is critical context for interpreting the ARCH signal (see below and the FRAME-vs-ARCH discordance discussion).

### ARCH trial (vs alendronate; Saag 2017) — source of the CV boxed warning

The ARCH trial compared romosozumab (12 months) followed by alendronate versus alendronate alone in postmenopausal women with prior fragility fracture and high fracture risk — the highest-severity osteoporosis population [^saag2017].

| Parameter | Value |
|---|---|
| n | 4093 (2046 romosozumab→alendronate, 2047 alendronate→alendronate) |
| Design | Phase 3 RCT; 24 months total |
| Vertebral fracture (24 mo) | 6.2% vs 11.9%; RR 0.52; 95% CI 0.40–0.66; **p<0.001** (48% relative risk reduction) |
| Clinical fracture (24 mo) | 9.7% vs 13.0%; HR 0.73; **p<0.001** (27% relative risk reduction) |
| Serious CV adverse events (yr 1) | 50/2040 (2.5%) romosozumab vs 38/2014 (1.9%) alendronate; OR 1.31; 95% CI 0.85–2.00; **not statistically significant** overall |
| Cardiac ischemic events (yr 1) | 16/2040 (0.8%) romosozumab vs 6/2014 (0.3%) alendronate; OR 2.65; 95% CI 1.03–6.77 (nominally significant) |
| Cerebrovascular events (yr 1) | 16/2040 (0.8%) romosozumab vs 7/2014 (0.3%) alendronate; OR 2.27; 95% CI 0.93–5.22 (not significant) |
| Hip fracture (24 mo) | 2.0% (41/2046) romosozumab→alendronate vs 3.2% (66/2047) alendronate; HR 0.62; 95% CI 0.42–0.92; **p=0.02** |

The CV imbalance — concentrated in the cardiac ischemic and cerebrovascular sub-categories during Year 1 romosozumab exposure — prompted the FDA to add a boxed warning: romosozumab is **contraindicated** in patients who have had an MI or stroke in the preceding year.

**FRAME vs ARCH discordance:** The CV signal appears in ARCH but not FRAME. Two explanations are actively debated and both may be partially true:

1. **Comparator confound (alendronate is cardioprotective):** Alendronate has established anti-inflammatory and vascular effects; its long-term use in ARCH's control arm may have suppressed CV events below the expected population rate, inflating the apparent romosozumab risk. FRAME's placebo control showed no such protective baseline.
2. **On-target SOST inhibition in vasculature:** Sclerostin is expressed in vascular smooth muscle cells (VSMCs), where it may locally inhibit osteogenic Wnt signaling and calcification. Mendelian randomization evidence (Zheng 2023; n=33,961) shows that genetically lower sclerostin — mirroring romosozumab pharmacology — is causally associated with increased MI risk (OR 1.35), type 2 diabetes (OR 1.32), and hypertension (OR 1.09) [^zheng2023mr]. This provides genetic support for an on-target vascular mechanism independent of the alendronate comparator.

A 2026 meta-analysis (Chen et al., n=12,384 across 10 RCTs) found no statistically significant increase in CV complications with anti-sclerostin antibody therapy overall [^chen2026meta]. However, the ARCH patient population (pre-existing fragility fractures, older age, higher baseline CV risk) may not be captured by the meta-analysis average. The discordance is genuinely unresolved. See [[sost]] for full mechanism and evidence discussion; see [[wnt-beta-catenin]] for the vascular Wnt context.

#gap/contradictory-evidence — the FRAME-vs-ARCH CV discordance is unresolved. No prospective trial has been powered to adjudicate the CV question in isolation; the LIDA trial (Leder 2026) compared 3 vs 12 months of romosozumab but was not designed to address CV outcomes [^leder2026lida].

### BRIDGE trial (men; Lewiecki 2018)

The BRIDGE Phase 3 trial examined romosozumab in men with osteoporosis [^lewiecki2018].

| Parameter | Value |
|---|---|
| n | 245 (163 romosozumab, 82 placebo) |
| Design | Phase 3 RCT; 12 months; primary endpoint BMD |
| LS BMD change (12 mo) | +12.1% romosozumab vs +1.2% placebo; **p<0.001** |
| TH BMD change (12 mo) | +2.5% vs −0.5%; **p<0.001** |
| CV adverse events | Numerically imbalanced: 8/163 (4.9%) romosozumab vs 2/82 (2.5%) placebo; study was not powered for CV endpoints |

BRIDGE confirms BMD efficacy in men but is underpowered for fracture and CV outcomes. Romosozumab is not FDA-approved for male osteoporosis as of 2026-06-02 (approved indication is postmenopausal women); male osteoporosis is an active area of off-label consideration. #gap/needs-replication for fracture endpoint in men.

## Evidence quality table

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — LRP5/6 Wnt pathway is identical in human bone; romosozumab itself is human-targeting |
| Phenotype (fracture reduction) conserved? | yes — FRAME + ARCH demonstrate fracture risk reduction in large Phase 3 RCTs |
| Replicated in humans? | yes — multiple Phase 3 RCTs across postmenopausal women and men |

## Aging-context relevance

Osteoporosis is among the most prevalent aging phenotypes: ~30% of women and ~16% of men over age 65 meet the WHO T-score threshold, with a lifetime fracture risk exceeding 50% in women [^osteoporosis-epidemiology]. Hip fractures carry ~20–30% one-year mortality in elderly populations. The biology is directly aging-mechanistic: age-related SOST elevation, mechanical unloading, estrogen withdrawal, osteocyte senescence accumulation, and BMSC adipogenic drift all converge on suppression of the same Wnt-driven osteoanabolic axis that romosozumab reactivates pharmacologically.

The drug's mechanism is thus a direct molecular intervention at an aging hallmark — SOST elevation with age constitutes a pathological shift in [[altered-intercellular-communication]] (the osteocyte-to-osteoblast endocrine signal), and the downstream depletion of the osteoblast output from mesenchymal progenitors is a canonical [[stem-cell-exhaustion]] phenotype.

Romosozumab does not extend lifespan in model organisms (no DrugAge entry) and is not proposed as a general aging intervention. Its aging relevance is specific to the bone compartment: it is the highest-efficacy currently-approved pharmacological intervention for the fracture-risk dimension of aging-associated fragility.

### Bone-vascular axis — the SOST paradox

A biologically counterintuitive axis has emerged: whereas SOST elevation is harmful in bone (suppresses bone formation → fracture), vascular SOST produced by stressed VSMCs may locally inhibit osteogenic Wnt transdifferentiation and calcification. SOST's presence in VSMCs creates a potential vascular-protective role that romosozumab's systemic neutralization might inadvertently remove — the mechanistic hypothesis underlying the on-target CV explanation of the ARCH signal. See [[sost]] § "SOST in vasculature: the bone-vascular paradox" for full discussion. #gap/no-mechanism — the causal direction of SOST-VSMC-calcification-CV events in romosozumab-exposed patients is not established.

## Sequencing and clinical positioning

### Anabolic-first strategy

The current evidence-based paradigm for high-fracture-risk osteoporosis is **anabolic-first**: initiate romosozumab for 12 months to generate the anabolic window of bone formation, then consolidate gains with a sequential antiresorptive. The ARCH trial demonstrates the sequence romosozumab → alendronate; denosumab is also used clinically post-romosozumab and may produce additional BMD gains.

A 2026 systematic review (Cipolloni 2026, *Medicina*) confirmed that anabolic-first sequencing is superior to antiresorptive-first for both BMD and fracture prevention [^cipolloni2026]. The LIDA trial (Leder 2026, n=50) demonstrated that 3-month romosozumab → 9-month denosumab was non-inferior to 12-month romosozumab for total hip BMD change (5.7% vs 6.0%), suggesting that abbreviated romosozumab courses may have clinical utility for patients concerned about cost or CV exposure duration [^leder2026lida]. This result was abstract-level only in initial reporting; verifier should confirm full trial outcomes. #gap/needs-replication for hard fracture endpoints.

### Comparators

| Agent | Class | Primary mechanism | Fracture reduction | Notes |
|---|---|---|---|---|
| **Romosozumab** | Anti-SOST mAb | Dual: ↑ formation + ↓ resorption | Vertebral −73% vs placebo (FRAME); −48% vs alendronate (ARCH) | CV boxed warning; 12-month course only |
| **Teriparatide** (PTH 1-34) | PTH receptor agonist | Net anabolic; intermittent PTH → osteoblast activation | Vertebral ~65% vs placebo | 2-year cumulative dose limit; injectable; costly; no CV warning |
| **Abaloparatide** | PTHrP analog | Net anabolic; more osteoblast-selective than teriparatide | Vertebral ~86% vs placebo (ACTIVE trial) | 2-year limit; injectable |
| **Denosumab** | Anti-RANKL mAb | Pure antiresorptive; suppresses osteoclastogenesis | Vertebral ~68% vs placebo (FREEDOM) | Rebound bone loss on discontinuation; requires careful transition |
| **Bisphosphonates** | Osteoclast apoptosis | Pure antiresorptive; inhibit farnesyl pyrophosphate synthase | Vertebral ~40–60%; hip ~40% | Oral; inexpensive; long skeletal half-life; antiresorptive in perpetuity |

Network meta-analysis (Händel 2023 BMJ, 69 RCTs) confirmed anabolic agents (romosozumab, teriparatide) outperform bisphosphonates for clinical + vertebral fracture prevention, with romosozumab showing particular advantage for hip fracture in the ARCH sequence arm [^handel2023].

A 2025 meta-analysis (Ferrer 2025, n=15,476 across 10 RCTs) confirmed romosozumab's superiority for lumbar spine BMD gains versus multiple comparators [^ferrer2025]. A further 2026 meta-analysis (Bandeira 2026, n=13 studies) found efficacy and safety similar to teriparatide overall, with no significant differences in fracture outcomes or CV safety profiles when comparing the two anabolics directly [^bandeira2026].

### Sequencing decision framework

**Choose romosozumab over teriparatide/abaloparatide when:**
- Patient has had a recent osteoporotic fracture and is at imminent risk of another (where the simultaneous anti-resorptive effect provides faster protection)
- Patient is post-teriparatide (sequential therapy; anabolic-then-anabolic is acceptable per evidence)
- No prior MI or stroke within 12 months (contraindication must be absent)

**Choose teriparatide/abaloparatide over romosozumab when:**
- Patient has had MI or stroke within 12 months
- Pre-existing high CV risk where the boxed warning is clinically actionable
- Cost access is limiting (teriparatide now generic in some markets)

**Antiresorptives alone (bisphosphonates, denosumab):** appropriate for prevention of initial fractures in lower-risk postmenopausal women; less appropriate for high-risk patients with prior fragility fracture where the anabolic-first strategy is now guideline-supported.

## Active clinical trials (as of 2026-06-02)

ClinicalTrials.gov v2 API query for romosozumab; RECRUITING + ACTIVE_NOT_RECRUITING: **16 trials** [^ctgov2026].

Key active studies:
- **NCT07366086** — pediatric osteogenesis imperfecta safety follow-up; Phase 3; RECRUITING
- **NCT06059222** (OPTIMIST) — optimised use of romosozumab; Phase 4; RECRUITING
- **NCT06938152** — cycle vs sequential therapy with romosozumab + denosumab; Phase 4; RECRUITING
- **NCT07283887** — romosozumab + denosumab, alone or combined; Phase 4; RECRUITING
- **NCT05058976** (RUBI) — geriatric osteoporosis; Phase 4; ACTIVE_NOT_RECRUITING
- **NCT04800367** — premenopausal IOP (idiopathic osteoporosis); Phase 2; ACTIVE_NOT_RECRUITING

Post-approval Phase 4 trials predominate, reflecting a mature clinical development program focused on sequencing, dosing duration, and special populations.

## Safety profile

**FDA boxed warning — cardiovascular events:** Romosozumab may increase the risk of MI, stroke, and cardiovascular death, based on the ARCH trial imbalance. **Contraindicated in patients who have had an MI or stroke within the preceding year.** Assess CV risk before initiating; the prescriber should consider whether the fracture-risk benefit outweighs CV risk for each patient.

**Other adverse events (from FRAME + ARCH prescribing data):**
- Arthralgia, headache: most common (≥10%); similar between arms in FRAME
- Injection site reactions: mild (erythema, pain, bruising); generally transient
- Atypical femoral fracture: rare; class risk for long-term antiresorptive agents in the post-romosozumab transition phase; not attributed to romosozumab itself
- Osteonecrosis of the jaw (ONJ): rare; reported in post-marketing pharmacovigilance; class risk with bone-active agents
- Hypocalcemia: rare; ensure vitamin D and calcium adequacy before initiating

**FDA FAERS pharmacovigilance (2019–2023; Liu 2025, n=7,055 reports):** disproportionality analysis identified expected signals (bone density abnormal, fracture reporting — likely reporting of the indication rather than drug adverse event); no unexpected safety signal beyond the known cardiovascular and ONJ/atypical fracture class risks [^liu2025faers].

#gap/long-term-unknown — post-marketing data on CV outcomes beyond the 12-month ARCH Year-1 window, and the long-term skeletal effects after the romosozumab → antiresorptive sequence, continue to accumulate. The ARCH trial patients were followed to 24 months on alendronate; longer-term fracture data are limited.

## Hallmark assignments rationale

Romosozumab is assigned to [[stem-cell-exhaustion]] and [[altered-intercellular-communication]]:

- **[[stem-cell-exhaustion]]:** SOST-driven Wnt suppression directly reduces osteoblast differentiation from mesenchymal stromal cell (BMSC) progenitors — the osteoblast-lineage stem cell pool. Age-related SOST elevation is a primary driver of this osteoblast progenitor exhaustion. Romosozumab corrects this by pharmacologically releasing the Wnt anabolic signal.
- **[[altered-intercellular-communication]]:** Sclerostin is an osteocyte-secreted endocrine/paracrine signal. Its age-related elevation constitutes a canonical altered-intercellular-communication phenotype: the osteocyte → osteoblast signaling axis is disrupted by rising SOST secretion. Romosozumab acts on this signaling molecule directly.

## Limitations and gaps

- **CV safety unresolved:** The FRAME-vs-ARCH discordance leaves the true CV risk profile uncertain. No powered prospective trial has isolated the CV question. #gap/contradictory-evidence
- **12-month course only:** The treatment is self-limiting; long-term direct bone effects are not maintained without sequential antiresorptives. Patient selection and sequencing are therefore paramount.
- **Not indicated for male osteoporosis** (as of 2026-06-02): BRIDGE demonstrated BMD efficacy in men but the trial was not powered for fracture or CV endpoints. #gap/needs-replication
- **Vascular mechanism uncharacterized:** Whether SOST inhibition in VSMCs contributes to the CV signal is mechanistically plausible but not proven. #gap/no-mechanism
- **Cost and access:** Romosozumab is substantially more expensive than bisphosphonates; cost-effectiveness depends on fracture-risk severity. The LIDA trial's abbreviated 3-month regimen is a potential access strategy if replicated.
- **DrugBank ID not confirmed:** #gap/needs-canonical-id — DrugBank accession not independently verified via live API. Recommend lookup at go.drugbank.com for the next verifier pass.

## Cross-references

- [[sost]] (verified 2026-05-23) — target protein; SOST/Wnt mechanism; full FRAME/ARCH trial numerics; MR evidence; vascular paradox; both PDFs end-to-end verified
- [[wnt-beta-catenin]] — downstream signaling pathway; romosozumab CV signal context
- [[osteocytes]] (verified 2026-05-23) — primary SOST source; lacunocanalicular mechanosensing; CV signal context in § "Romosozumab and the SOST axis"
- [[osteoporosis]] (verified 2026-05-23) — primary aging phenotype target; intervention landscape table
- [[bone]] — tissue context; remodeling cycle mechanics
- [[lrp5-lrp6]] — direct SOST binding partners at receptor level
- [[dkk1]] — mechanistic parallel: also inhibits LRP5/6 but distinct domain
- [[interventions/pharmacological/senolytics]] — complementary approach targeting senescent osteocytes (Farr 2024 Phase 2 RCT context)
- [[stem-cell-exhaustion]] — hallmark: BMSC/osteoblast progenitor depletion
- [[altered-intercellular-communication]] — hallmark: osteocyte-to-osteoblast endocrine signaling disruption
- [[vascular-calcification]] — VSMC-expressed SOST and the CV paradox
- [[arterial-stiffening]] — downstream CV phenotype connected to ARCH signal

## Footnotes

[^cosman2016]: doi:10.1056/NEJMoa1607948 · Cosman F, Crittenden DB, Adachi JD, et al. · N Engl J Med 2016;375:1532-43 · rct · n=7180 (3589 romosozumab, 3591 placebo) · model: postmenopausal women T-score −2.5 to −3.5 at total hip or femoral neck · romosozumab 210 mg SC monthly × 12 mo vs placebo; both → denosumab 60 mg SC every 6 mo × 12 mo · vertebral fracture 73% lower risk at 12 mo (0.5% [16/3321] vs 1.8% [59/3322]; RR 0.27; 95% CI 0.16–0.47; p<0.001); clinical fracture 36% lower (1.6% [58/3589] vs 2.5% [90/3591]; HR 0.64; 95% CI 0.46–0.89; p=0.008); nonvertebral fracture NS (1.6% vs 2.1%; HR 0.75; 95% CI 0.53–1.05; p=0.10); adjudicated serious CV events balanced (1.2% vs 1.1%) · PMID 27641143 · PDF end-to-end verified 2026-06-02

[^saag2017]: doi:10.1056/NEJMoa1708322 · Saag KG, Petersen J, Brandi ML, et al. · N Engl J Med 2017;377:1417-27 · rct · n=4093 (2046 romosozumab→alendronate, 2047 alendronate→alendronate) · model: postmenopausal women at high fracture risk with prior fragility fracture (96.1% prevalent vertebral fracture) · romosozumab (210 mg SC monthly × 12 mo) → alendronate vs alendronate alone × 24 mo · vertebral fracture 48% lower risk at 24 mo (6.2% [127/2046] vs 11.9% [243/2047]; RR 0.52; 95% CI 0.40–0.66; p<0.001); clinical fracture 27% lower (9.7% [198/2046] vs 13.0% [266/2047]; HR 0.73; 95% CI 0.61–0.88; p<0.001); nonvertebral fracture 19% lower (8.7% vs 10.6%; HR 0.81; 95% CI 0.66–0.99; p=0.04); hip fracture 38% lower (2.0% vs 3.2%; HR 0.62; 95% CI 0.42–0.92; p=0.02); serious CV adverse events Year 1: 2.5% (50/2040) romosozumab vs 1.9% (38/2014) alendronate; OR 1.31; 95% CI 0.85–2.00 (NS overall); cardiac ischemic events 16/2040 (0.8%) vs 6/2014 (0.3%); OR 2.65; CI 1.03–6.77; cerebrovascular events 16/2040 (0.8%) vs 7/2014 (0.3%); OR 2.27; CI 0.93–5.22 → FDA boxed warning · PMID 28892457 · PDF end-to-end verified 2026-06-02

[^lewiecki2018]: doi:10.1210/jc.2017-02163 · Lewiecki EM, Blicharski T, Goemaere S, Lippuner K, et al. · J Clin Endocrinol Metab 2018;103(9):3183-3193 · rct · n=245 (163 romosozumab, 82 placebo) · model: men with osteoporosis · romosozumab 210 mg SC monthly × 12 mo vs placebo · LS BMD +12.1% vs +1.2% (p<0.001); TH BMD +2.5% vs −0.5% (p<0.001); CV adverse events numerically imbalanced: 8/163 (4.9%) vs 2/82 (2.5%); not powered for fracture or CV endpoints · PMID 29931216 · abstract-verified; full PDF download failed (closed-access) — #gap/no-fulltext-access

[^zheng2023mr]: doi:10.1002/art.42538 · Zheng J et al. · Arthritis Rheumatol 2023;75(10):1781-1792 · GWAS meta-analysis + two-sample Mendelian randomization · n=33,961 European individuals · lower genetically predicted sclerostin → increased MI risk (OR 1.35; 95% CI 1.01–1.79), type 2 diabetes (OR 1.32; 95% CI 1.03–1.69), hypertension (OR 1.09; 95% CI 1.04–1.15), coronary artery calcification; formal genetic support for on-target CV risk of SOST inhibition · PMID 37096546 · abstract-verified

[^chen2026meta]: doi:10.3389/fendo.2025.1732708 · Chen L, Wang Q, Gu M · Front Endocrinol (Lausanne) 2026;16:1732708 · systematic review + meta-analysis · n=12,384 across 10 RCTs · anti-sclerostin antibodies significantly increase BMD; no statistically significant increase in CV complications overall (RR 1.23; 95% CI 0.92–1.64; p=0.17) · PMID 41635538 · abstract-verified

[^handel2023]: doi:10.1136/bmj-2021-068033 · Händel MN, Abrahamsen B et al. · BMJ 2023;381:e068033 · meta-analysis (network meta-analysis) · 69 RCTs · anabolic agents (romosozumab, teriparatide) more effective than bisphosphonates for clinical + vertebral fracture prevention · PMID 37130601

[^leder2026lida]: doi:10.1016/S2213-8587(25)00319-5 · Leder BZ, Ramchand SK, Jordan M, et al. · Lancet Diabetes Endocrinol 2026;14(3):216-222 · rct · n=50 postmenopausal women at high fracture risk · 3-month romosozumab (+ 9 months denosumab) vs 12-month romosozumab (standard course) · total hip BMD 5.7% vs 6.0%; non-inferiority criterion met (2% threshold); adverse events balanced · **does not address fracture or CV endpoints** · PMID 41621431 · abstract-verified only — #gap/needs-fulltext-verification

[^ferrer2025]: doi:10.1097/RHU.0000000000002241 · Ferrer BL, Garcia MSM, Herrera SR, et al. · J Clin Rheumatol 2025;31(6):e119-e127 · meta-analysis · n=15,476 (10 randomized trials) · romosozumab showed significantly greater improvements in lumbar spine BMD versus comparators; CV safety comparable to other interventions · PMID 40323656 · abstract-verified only

[^bandeira2026]: doi:10.1111/1756-185x.70658 · Bandeira TFGS, Aguiar PM, Vianna CMM, et al. · Int J Rheum Dis 2026;29(4):e70658 · systematic review + meta-analysis · 13 studies · romosozumab vs teriparatide: similar efficacy and safety; no significant differences in fracture outcomes or CV safety profiles · PMID 41999058 · abstract-verified only

[^liu2025faers]: doi:10.1007/s40520-024-02921-5 · Liu L, Wu S, Wei L, et al. · Aging Clin Exp Res 2025;37(1):23 · pharmacovigilance analysis · n=7,055 FDA FAERS reports (2019–2023) · signals include fracture reporting (ROR 107.8), bone density abnormal (ROR 343.65); no unexpected safety signals beyond known CV/ONJ/atypical fracture class risks · PMID 39808360 · abstract-verified only

[^cipolloni2026]: doi:10.3390/medicina62040687 · Cipolloni V, Bonifacio M, Hassny SM, et al. · Medicina (Kaunas) 2026;62(4):687 · systematic review + meta-analysis · anabolic-first strategy in osteoporosis confirmed superior to antiresorptive-first for BMD and fracture prevention outcomes in very-high-fracture-risk patients · PMID 42075559 · abstract-verified only; DOI confirmed via PubMed efetch 2026-06-02

[^osteoporosis-epidemiology]: see [[osteoporosis]] § Prevalence and epidemiology; ~30% women and ~16% men aged 65+ based on NHANES/IOF consensus and Xiao 2022 meta-analysis (doi:10.1007/s00198-022-06454-3)

[^ctgov2026]: ClinicalTrials.gov v2 API query: filter.overallStatus=RECRUITING,ACTIVE_NOT_RECRUITING; query.term=romosozumab; date 2026-06-02; returned 16 studies across Phase 1–4. Active studies include NCT07366086 (pediatric OI, Ph3), NCT06059222 (OPTIMIST, Ph4), NCT06938152 (cycle vs sequential, Ph4), NCT07283887 (romo+denosumab combo, Ph4), NCT05058976 (RUBI geriatric, Ph4), NCT04800367 (premenopausal IOP, Ph2), NCT05101018 (Ph4), NCT05775094 (Ph1), NCT04232657 (Ph2), NCT05010590 (Ph4), NCT05972551 (Ph3), NCT06558188 (Ph4), NCT07616401, NCT06533865 (Ph3), NCT05688969, NCT06164795.
