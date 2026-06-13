---
type: phenotype
aliases: [postmenopausal osteoporosis, senile osteoporosis, age-related bone loss, osteoporosis M81]
icd-10: "M81.0 (age-related osteoporosis without current pathological fracture); M81.8 (other osteoporosis without current pathological fracture — includes secondary causes)"
icd-11: FB83.1
affected-tissues: ["[[bone]]"]
underlying-hallmarks: ["[[stem-cell-exhaustion]]", "[[cellular-senescence]]", "[[chronic-inflammation]]"]
typical-onset: "Biological bone loss begins after peak BMD ~age 30; clinically apparent (T-score ≤ −2.5) typically 65+ in women post-menopause and 70+ in men; accelerated phase 5–10 years post-menopause in women"
prevalence-65plus: "~30% women, ~16% men (T-score ≤ −2.5, community-dwelling, WHO criteria); 19.7% global prevalence across both sexes and all ages in 2022 meta-analysis"
verified: true
verified-date: 2026-05-23
verified-by: claude
verified-scope: "Farr 2024 Nature Medicine Phase 2 RCT (PDF read end-to-end; re-verified 2026-06-12 — dosing schedule corrected to D 2 d + Q 3 d per cycle × 5 cycles over 20 wk and design confirmed open-label, correcting the 2026-05-23 pass which recorded '3 d × 6 cycles') and Farr 2023 JCI (PDF read end-to-end) verified against primary sources. ICD-10-CM codes M81.0/M81.8 verified against NLM ICD-10-CM API (2025). ICD-11 FB83.1 not independently verified (WHO API requires auth token; flagged for next lint pass). Händel 2023 BMJ NMA, Singh 2022 Osteoporosis Int, Xiao 2022 Osteoporosis Int, Ayers 2023 Annals IM — all not_oa or download-pending; abstract-level only. Prevalence claims (30% women / 16% men 65+) are widely-cited NHANES/IOF consensus figures, not independently traced to a single primary source in this pass. Canonical-database fields (ICD-11) should be re-verified when WHO ICD-11 API token is available."
literature-checked-through: 2026-05-23
---

# Osteoporosis

The canonical aging-fragility phenotype: a skeletal disorder defined by low bone mineral density (BMD) and deterioration of bone microarchitecture that result in increased fracture susceptibility. Osteoporosis sits at the convergence of several hallmarks of aging — senescent osteocyte accumulation, mesenchymal stem cell exhaustion, and chronic inflammation — making it both a clinical outcome and a readout of systemic aging biology. It is the primary driver of fragility fractures (hip > vertebral > wrist), which carry mortality rates of ~20–30% within one year for hip fractures in elderly populations.

## Definition and diagnosis

**WHO BMD criteria (DXA-based):**

| Category | T-score |
|---|---|
| Normal | ≥ −1.0 |
| Osteopenia | −1.0 to −2.5 |
| Osteoporosis | ≤ −2.5 |
| Severe osteoporosis | ≤ −2.5 + fragility fracture history |

T-scores are derived from lumbar spine (L1–L4) or femoral neck (or total hip) DXA and expressed as SD units relative to a young-adult reference mean. Note: **DXA captures density, not quality** — bone quality (microarchitecture, collagen cross-link integrity, lacunocanalicular network) contributes to fracture risk independently of BMD and is not captured by T-score. This dissociation is clinically relevant for interpreting drug effects (see § Bone quality below).

**Risk stratification — FRAX:** The Fracture Risk Assessment Tool integrates BMD with clinical risk factors (age, sex, prior fracture, glucocorticoid use, secondary causes) to estimate 10-year probability of hip fracture and major osteoporotic fracture. Used to guide treatment thresholds beyond DXA alone.

**Adjunct tools (research/specialist):**
- Trabecular bone score (TBS) — texture-based DXA analysis that approximates trabecular microarchitecture without additional radiation
- Bone turnover markers: CTx (C-terminal telopeptide, resorption marker), P1NP (procollagen type 1 N-propeptide, formation marker) — used in RCTs and to monitor treatment response
- High-resolution peripheral quantitative CT (HR-pQCT) — gold standard for cortical geometry and trabecular connectivity; currently research-stage

## Pathophysiology — the aging arc

### Peak BMD to slow decline (ages 30–50)

Trabecular and cortical bone accumulate to peak BMD in the late second to early third decade, with contributions from genetics (~60–80% heritability), physical loading history, and nutritional adequacy. From the fourth decade onward, slow remodeling imbalance (~0.5%/yr loss) begins as osteoclast resorption incrementally exceeds osteoblast formation — a consequence of declining anabolic signals and early BMSC adipogenic drift. See [[bone]] for remodeling cycle mechanics.

### Post-menopausal acceleration (women 50–60)

[[estradiol|Estrogen]] withdrawal at [[menopause]] removes a brake on osteoclast activity (estrogen suppresses RANKL and promotes OPG secretion by osteoblasts), producing a ~10–15% BMD loss over 5–10 years post-menopause — predominantly trabecular, producing the early vertebral fracture pattern.

### Senile/age-related phase (both sexes, 70+)

Net osteoblast insufficiency dominates: reduced [[bmsc|BMSC]] output, blunted BMP/Wnt signaling, accumulation of senescent osteocytes, and SASP-driven suppression of osteoblast function. Cortical porosity increases. Both sexes are affected, with men typically reaching the clinical T-score threshold a decade later than women due to higher baseline BMD.

## Cellular mechanisms

### Osteocyte senescence and Bone-SASP

[[Osteocytes]] are the dominant long-lived mechanosensor of bone (~95% of bone cells) and the primary source of RANKL, SOST (sclerostin), and FGF23. With age, a subset accumulate p16^INK4a^+ / p21^CIP1^+ senescence markers rather than dying by apoptosis. Senescent osteocytes secrete a bone-specific SASP (IL-6, IL-8, MMP-3, MMP-13, RANKL) that:

- Recruits and activates osteoclasts
- Suppresses adjacent osteoblast function
- Propagates senescence to neighboring osteocytes via paracrine SASP signaling [^farr2023-jci]

The "Bone-SASP" concept formalizes this local amplification loop. Critically, circulating SASP factors from non-skeletal senescent cells can propagate senescence to osteocytes in vivo: transplant of ~10⁶ senescent fibroblasts i.p. into young adult (4-month) mice induced telomere-associated foci (TAF⁺) senescence in distant osteocytes within 60 days [^farr2023-jci]. This makes bone a potential readout of systemic senescent cell burden. #gap/needs-human-replication

### BMSC adipogenic lineage drift

Bone marrow stromal cells ([[bmsc|BMSCs]]) — the osteoblast precursor pool — shift toward adipogenic differentiation with age, driven by PPAR-γ elevation and Wnt/β-catenin decline [^farr2020-review]. Reduced [[runx2|RUNX2]] activity in aged BMSCs further impairs osteoblast commitment. The result: marrow fat expansion, reduced osteoblast output, and impaired coupling between resorption and formation. See [[bone]] § BMSC adipogenic lineage drift for quantitative detail.

### Sclerostin / Wnt suppression

[[Osteocytes]] elevate SOST (sclerostin) secretion with age and mechanical unloading. Sclerostin is a canonical Wnt/β-catenin antagonist — it binds LRP5/6 co-receptors, preventing Wnt ligand binding and suppressing osteoblast proliferation and survival. This is the pharmacological rationale for romosozumab (anti-SOST mAb). See [[wnt-beta-catenin]] for the signaling mechanics and [[sost]] for the protein page.

### Remodeling uncoupling

The normal remodeling cycle couples osteoclast resorption to osteoblast formation via growth factors released during resorption (TGF-β, IGF-1, BMP-2). With aging and SASP disruption, this coupling degrades: SASP-derived IL-6 and TNF-α suppress BMP signaling and RUNX2 expression in recruited osteoblast precursors, reducing their differentiation efficiency. The OPG/RANKL ratio shifts toward RANKL, further amplifying osteoclastogenesis.

## Bone quality vs bone density dissociation

BMD (T-score) captures only one dimension of fracture risk. Bone quality depends on:

- **Trabecular microarchitecture** — connectivity and plate-to-rod transitions; irreversible trabecular perforation with advanced age
- **Collagen crosslink integrity** — advanced glycation end-products (AGEs) accumulate in collagen with age, creating abnormal crosslinks that reduce post-yield toughness and increase brittleness; lacunocanalicular AGE accumulation impairs osteocyte mechanosensing [^liu2026-age-canalicular-note]
- **Mineralization heterogeneity** — secondary mineralization degree and spatial variability affect stiffness and crack propagation

**Clinical implication:** romosozumab and teriparatide improve bone quality indices beyond what BMD gains predict, which partly accounts for their fracture risk reduction exceeding BMD-response forecasts. Conversely, fluoride increases BMD dramatically but actually increases fracture risk due to qualitative defects — a canonical dissociation example.

## Prevalence and epidemiology

Global osteoporosis prevalence (WHO T-score criteria) was 19.7% (pooled, 108 studies) in a 2022 systematic review and meta-analysis, with substantial regional variation (4.1–52.0%) [^xiao2022-prevalence]. In community-dwelling adults aged 65+: ~30% of women and ~16% of men in most high-income populations. Prevalence rises sharply after age 75. Hip fracture carries ~20–30% one-year mortality in elderly populations and is the primary driver of osteoporosis-related healthcare cost.

## Intervention landscape

| Intervention | Mechanism | Fracture RCT evidence |
|---|---|---|
| **Resistance + impact exercise** | Mechanostimulus → osteocyte fluid shear → SOST suppression → Wnt → bone formation | Multiple meta-analyses; effect size modest on BMD but biomechanically meaningful; first-line for prevention |
| **Vitamin D + calcium adequacy** | Substrate for mineralization; suppresses PTH-driven resorption when deficient | Strong for fracture reduction in deficient populations; weak in replete |
| **Bisphosphonates** (alendronate, zoledronic acid, risedronate) | Osteoclast apoptosis-induction → reduced resorption; inhibit farnesyl pyrophosphate synthase | ~40–60% vertebral fracture reduction, ~40% hip fracture reduction in postmenopausal osteoporosis; living SR+NMA (Annals IM, 2023) confirms first-line role [^ayers2023-nma] |
| **Denosumab** (anti-RANKL mAb) | Blocks RANKL → RANK → suppresses osteoclastogenesis | Phase 3 (FREEDOM trial); comparable to bisphosphonates in NMA; rebound bone loss on discontinuation is a known hazard |
| **Romosozumab** (anti-sclerostin mAb) | Dual: blocks SOST → Wnt disinhibition (anabolic) AND reduces resorption (antiresorptive) | FDA approved 2019; ARCH trial (n=4,093): romosozumab → alendronate sequence reduced vertebral fracture 48% (RR 0.52; 6.2% vs 11.9%; p<0.001); CV safety signal — serious cardiovascular adverse events 2.5% (50/2040) vs 1.9% (38/2014); OR 1.31; 95% CI 0.85–2.00 (not statistically significant overall but cardiac-ischemic + cerebrovascular sub-events trended higher per Saag 2017 — boxed warning issued); FRAME (vs placebo) did NOT show same signal — possibly comparator confound; Zheng 2023 MR (n=33,961) shows genetically lower sclerostin → MI risk (OR 1.35) lending support to the on-target SOST-LRP5/6-vascular hypothesis; cross-link [[sost]] verified for full ARCH/FRAME numerics; NMA (BMJ 2023) confirms anabolic agents superior to bisphosphonates for clinical + vertebral fractures [^handel2023-nma] |
| **Teriparatide** (rhPTH 1-34) / **Abaloparatide** | Intermittent PTH receptor stimulation → net anabolic (vs continuous PTH → catabolic); stimulates osteoblast activity and reduces apoptosis | Phase 3 evidence for vertebral and non-vertebral fracture reduction; 2-year cumulative dose limit (prior carcinogenicity signal in rats — rat-specific mechanism, not replicated in humans, but regulatory limit remains); romosozumab meta-analysis confirms anabolics outperform antiresorptives for vertebral fractures [^singh2022-romosozumab] |
| **Senolytics (dasatinib + quercetin)** | Clearance of p16^INK4a^+ senescent osteocytes → reduced Bone-SASP → improved remodeling coupling | Phase 2 RCT (n=60 postmenopausal women, NCT04313634): primary endpoint CTx (bone resorption) did NOT differ from placebo at 20 weeks (−4.1% D+Q vs −7.7% control; p=0.611); P1NP transiently increased overall at 2 wks (+16%, p=0.020) and 4 wks (+16%, p=0.024) but not 20 wks (−9%, p=0.149). Exploratory high-senescent-burden tertile (T3, highest T-cell p16 mRNA, ~10/arm): P1NP ↑ +34% at 2 wks (p=0.035), CTx ↓ −11% at 2 wks (p=0.049), radius BMD ↑ +2.7% at 20 wks (p=0.004) [^farr2024-phase2-rct]. **Bottom line: primary endpoint negative in overall cohort; biomarker-stratified benefit hypothesis active but requires prospective confirmation.** See [[interventions/pharmacological/senolytics]] for full discussion. |
| **Mediterranean diet / [[vitamin-k2]]** | Adequate calcium; K2 supports MGP carboxylation for vascular/bone cross-talk; polyphenols | Observational association with lower osteoporosis incidence; causal evidence limited. See [[mediterranean-diet]] |

### Aging-frontier note — senolytic patient stratification

The Farr 2024 phase 2 RCT represents a pivotal framing for bone senolytics: the "average" patient may not benefit, but a pre-selected high-senescent-burden patient may. This discordance between overall-population and biomarker-stratified results is conceptually important — it does not mean senolytics are ineffective for bone, but that a patient-selection strategy is needed before a Phase 3 design can be powered. Farr 2025 *Aging Cell* (referenced in prior bone page context) is a follow-up candidate; verify before citing. #gap/needs-replication

## Hallmark connections

| Hallmark | Mechanism in osteoporosis |
|---|---|
| [[cellular-senescence]] | Senescent osteocyte accumulation → Bone-SASP → osteoclast recruitment + osteoblast suppression; systemic SASP propagation of senescence to osteocytes |
| [[stem-cell-exhaustion]] | BMSC adipogenic lineage drift → reduced osteoblast pool; satellite cell analogies (niche-driven fate switch rather than intrinsic cell failure) |
| [[chronic-inflammation]] | Inflammaging cytokines (IL-6, TNF-α) directly suppress RUNX2, BMP signaling, and OPG, shifting the OPG/RANKL ratio toward resorption |
| [[deregulated-nutrient-sensing]] | IGF-1 decline with aging suppresses osteoblast survival; mTOR signaling modulates osteoblast/osteoclast balance; vitamin D/mineral axis dysregulation via FGF23 elevation |

## Limitations and gaps

- **Bone quality not captured by DXA** — fracture risk prediction would improve substantially with quality-adjusted metrics (HR-pQCT, TBS); no current clinical standard integrates all quality dimensions. #gap/needs-replication for TBS as independent fracture predictor in prospective cohorts
- **Senolytic stratification** — the Farr 2024 RCT leaves the patient-selection question open; T-cell p16 mRNA burden was the exploratory stratifier, not a validated biomarker. #gap/needs-replication
- **Male osteoporosis** — most RCT data are in postmenopausal women; male-specific pathophysiology (testosterone contribution, later onset) and treatment efficacy are less well-characterized. #gap/unsourced for male-specific fracture-prevention RCT summary
- **Bone-vascular axis intervention** — no trial has tested whether anti-osteoporosis drugs favorably affect vascular calcification simultaneously; cross-link [[processes/vascular-calcification]] and [[matrix-gla-protein]] for the mechanistic framing

## Cross-references

- [[bone]] (verified 2026-05-23) — primary affected tissue; remodeling cycle, aging mechanisms, bone-vascular axis paradox
- [[osteocytes]] (verified 2026-05-23) — mechanosensory hub; SOST source; senescence node; FGF23 source
- [[osteoblasts]] — bone matrix secretion; coupling to resorption
- [[osteoclasts]] — bone resorption; RANKL/OPG regulation
- [[mesenchymal-stem-cells|BMSCs]] — osteoblast precursor; adipogenic lineage drift with age
- [[runx2]] (verified 2026-05-23) — master osteoblast TF; ectopic VSMC expression in vascular calcification
- [[sost]] — sclerostin; SOST/Wnt suppression axis; romosozumab target
- [[wnt-beta-catenin]] (verified 2026-05-23) — pro-osteogenic signaling pathway suppressed by sclerostin and SASP
- [[matrix-gla-protein]] (verified 2026-05-23) — bone-vascular axis; calcification inhibitor
- [[osteopontin]] (verified 2026-05-23) — non-collagenous bone matrix protein; hydroxyapatite nucleation inhibitor
- [[cellular-senescence]] — hallmark page; SASP biology
- [[stem-cell-exhaustion]] — hallmark page; BMSC pool decline
- [[chronic-inflammation]] — hallmark page; inflammaging cytokine drive
- [[processes/vascular-calcification]] (sibling-seeded 2026-05-23) — bone-vascular paradox; shared RUNX2/MGP/osteopontin biology
- [[mediterranean-diet]] (existing) — dietary pattern with observational bone-health association
- [[vitamin-k2]] (existing) — MGP carboxylation; bone + vascular benefit
- [[interventions/pharmacological/senolytics]] (existing) — D+Q and other senolytics; full trial discussion
- [[sarcopenia]] (verified) — osteosarcopenia; mechanical coupling of bone and muscle loss
- [[alveolar-bone]] (seeded 2026-06-12) — the tooth-bearing bone of the jaw; shares age-related remodeling-imbalance and estrogen-decline mechanisms with systemic osteoporosis, though the causal link remains contested: a 2025 two-sample Mendelian randomization (Chen et al.) found *no* causal effect of periodontitis on systemic bone mineral density, but the reverse direction (systemic osteoporosis → alveolar bone loss) remains untested by MR

## Footnotes

[^farr2024-phase2-rct]: [[studies/farr-2024-senolytic-bone-rct]] · doi:10.1038/s41591-024-03096-2 · PMID 38956196 · PMC11705617 · Farr JN, Atkinson EJ et al., Khosla S · phase-2 rct · n=60 postmenopausal women (age 62–88) · *Nature Medicine* 2024;30(9):2605-2612 · open-label, single-site RCT · intermittent D+Q (dasatinib 100 mg × 2 consecutive days + quercetin 1000 mg × 3 consecutive days per cycle, every 28 days × 5 cycles over 20 wk) vs control · primary endpoint: CTx % change at 20 wks — no difference (median D+Q −4.1% vs control −7.7%; p=0.611) · secondary: P1NP increased vs control at 2 wks (+16%, p=0.020) and 4 wks (+16%, p=0.024) but not at 20 wks (−9%, p=0.149) · exploratory high-T-cell-p16-variant-5 tertile (T3; ~10 participants per arm): P1NP +34% at 2 wks (p=0.035), CTx −11% at 2 wks (p=0.049), radius BMD +2.7% at 20 wks (p=0.004); no effect in lower tertiles (T1/T2) · no serious adverse events · NCT04313634 · PDF verified end-to-end 2026-06-12 (schedule corrected: the 2026-05-23 pass recorded "3 consecutive days × 6 cycles" in error; Methods give D 2 d + Q 3 d per cycle × 5 cycles = 20 wk; design is open-label, not double-blind)

[^farr2023-jci]: doi:10.1172/JCI162519 · PMID 36809340 · Farr JN, Saul D, Doolittle ML et al., Khosla S · in-vivo · model: aged C57BL/6 mice, 20 months at baseline, treated 4 months (endpoint 24 months) · local model: DMP1-Cre⁺/⁻ × p16-LOX-ATTAC (osteocyte-specific), AP20187 10 mg/kg twice-weekly i.p., n=15 females + 10 males/group · systemic model: p16-INK-ATTAC (pan-p16⁺ clearance) · transplant arm: ~10⁶ Sn or non-Sn primary murine fibroblasts i.p. into 4-month-old syngeneic male C57BL/6 WT mice (n=11/group) · *Journal of Clinical Investigation* 2023;133(8):e162519 · local senolysis (osteocyte-specific) improved lumbar spine BV/TV via increased bone formation rates but had no significant effect on femur trabecular/cortical bone, bone resorption, or marrow adiposity; systemic senolysis improved both spine and femur + reduced resorption + reduced marrow adipocyte numbers; Rankl reduction was systemic-only; Sn fibroblast transplantation induced TAF⁺ senescence in host osteocytes at 2 months (60 days) post-transplant, confirming non-cell-autonomous SASP propagation of senescence to distant bone cells · local PDF verified end-to-end 2026-05-23

[^farr2020-review]: doi:10.1007/s11914-020-00619-x · PMID 32794138 · PMC7541777 · Farr JN, Kaur J, Doolittle ML, Khosla S · review · *Current Osteoporosis Reports* 2020 · narrative review of osteocyte cellular senescence; SASP-driven resorption promotion; p16/p21 accumulation in aged bone · DOI lookup failed (PMC7541777 is verification fallback)

[^ayers2023-nma]: doi:10.7326/M22-0684 · PMID 36592455 · Ayers C, Harrod C et al. · meta-analysis (living systematic review + NMA) · *Annals of Internal Medicine* 2023 · 34 RCTs; bisphosphonates and denosumab reduce fractures in postmenopausal osteoporosis; rare serious adverse effects at longer durations · not_oa (closed-access); results from PubMed abstract

[^handel2023-nma]: doi:10.1136/bmj-2021-068033 · PMID 37130601 · Händel MN, Abrahamsen B et al. · meta-analysis (network meta-analysis) · *BMJ* 2023;381:e068033 · 69 trials; bone anabolic agents (romosozumab, teriparatide) more effective than bisphosphonates for clinical + vertebral fracture prevention; active safety monitoring required for romosozumab (CV signal) · DOI lookup pending

[^xiao2022-prevalence]: doi:10.1007/s00198-022-06454-3 · PMID 35687123 · Xiao PL, Lu HD et al. · meta-analysis · *Osteoporosis International* 2022 · 108 studies; global prevalence 19.7% overall; range 4.1–52.0% across regions; higher in developing nations; women > men at all ages · not_oa (closed-access); results from PubMed abstract

[^singh2022-romosozumab]: doi:10.1007/s00198-021-06095-y · PMID 34432115 · Singh S, Dutta S et al. · meta-analysis · *Osteoporosis International* 2022 · romosozumab significantly reduced vertebral and nonvertebral fracture risk + increased BMD at multiple sites; safety profile comparable to controls in postmenopausal women · DOI lookup pending (OA via PMC9003152)

[^liu2026-age-canalicular-note]: doi:10.1016/j.bone.2026.117890 · PMID 41962789 · Liu CJ et al. · in-vivo · *Bone* 2026 · AGE accumulation in osteocyte canalicular network deteriorates canalicular physical properties; impaired fluid flow → reduced mechanosensing; cited for AGE-lacunocanalicular mechanism · DOI confirmed via PubMed esummary 2026-05-23; not in local archive
