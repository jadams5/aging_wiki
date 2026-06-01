---
type: intervention
aliases: [AAV-Klotho, Klotho gene therapy, AAV-KL, secreted Klotho gene therapy]
mode: gene-therapy
mechanisms: [klotho-restoration, fgf23-signaling, anti-fibrotic, kidney-protection, cognitive-protection]
targets: ["[[klotho]]"]
target-hallmarks: ["[[chronic-inflammation]]", "[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]"]
target-pathways: ["[[fgf-signaling]]"]
human-evidence-level: none
clinical-stage: preclinical
safety-profile: investigational
translation-gap: preclinical-only
next-experiment: "Phase 1 of AAV-Klotho (or recombinant secreted Klotho protein) in age-related cognitive decline (lower regulatory bar than systemic anti-aging) with klotho serum ELISA + cognitive composite biomarkers as co-primaries; n=20–40; target population: adults 65–80 with MCI or age-consistent cognitive decline."
clinical-trials-active: 0
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Castner 2023, Davidsohn 2019, Dubal 2014, Dubal 2015 verified against local PDFs; Kurosu 2005 verified against PMC full text (PMC2536606); Kuro-o 1997 partially verified via PubMed abstract only (not_oa, no full-text access) — lifespan figures in days unverifiable from abstract alone, tagged accordingly. R34 recency pass (2026-05-08): PubMed klotho gene therapy 2024–2026 returned 14 hits, soluble klotho cognition/aging 2024–2026 returned 20 hits; no new AAV-Klotho preclinical or clinical-trial primary data identified beyond Davidsohn 2019. New biomarker / observational evidence (Nakashima 2025 Kidney Int Rep — low sKlotho HR 1.74 for mortality in n=1241 hemodialysis patients; López-Valdés 2025 brain-aging review; Buonpane 2026 atherosclerosis review) confirms biology but does not change the gene therapy translation status. No edits required to body claims; clinical-stage and human-evidence-level fields unchanged."
---

# AAV-Klotho gene therapy

AAV-mediated delivery of the secreted Klotho isoform (KL1+KL2 extracellular domain, or full-length transmembrane KL with furin-cleavage site) to restore circulating Klotho levels in aging tissues. Klotho declines ~40% between age 40 and 80 in humans, and this decline tracks with cognitive deterioration, renal function loss, and all-cause frailty markers. The gene therapy rationale is simple: Klotho has a short half-life as a recombinant protein (~7 minutes in rodents; ~29.5 hours in aged rhesus macaques per Castner 2023 — longer than rodent estimates but still insufficient for chronic systemic anti-aging dosing by repeated injection), making durable systemic elevation impractical by protein infusion — AAV-mediated expression offers persistent, organ-targeted secretion. **All aging-relevant evidence as of 2026-05-06 is preclinical (mouse or NHP).** No regulated human gene therapy trial exists for this indication.

See [[klotho]] for full protein biology, isoform structure, FGF23/FGFR1 co-receptor mechanism, and aging epidemiology. This page focuses on the gene therapy modality.

---

## Klotho biology — brief recap

[[Klotho]] encodes a type-I single-pass transmembrane protein expressed primarily in kidney tubular cells and the choroid plexus. It exists in two functional forms:

- **Membrane Klotho (mKL):** acts as an obligate co-receptor for FGF23, forming a ternary complex with FGFR1c to regulate phosphate excretion and 1,25-vitamin D biosynthesis.
- **Secreted/soluble Klotho (sKL):** shed by ADAM10/17 proteases; circulates at ~200–800 pg/mL in healthy adults and declines with age. The soluble form mediates most of the systemic anti-aging effects attributed to Klotho: anti-fibrotic signaling (TGF-β1 inhibition), Wnt ligand antagonism, IGF-1/insulin pathway suppression, and reduction of oxidative stress [^kuroo1997].

The therapeutic strategy for AAV-Klotho typically overexpresses the **secreted isoform** (sKL) to elevate circulating levels, bypassing renal dependency on endogenous expression.

---

## Foundational mouse evidence

### Transgenic overexpression extends lifespan

Kurosu et al. 2005 generated transgenic mice overexpressing Klotho (~2-fold above wild-type circulating levels) and demonstrated lifespan extension of **~19–31%** relative to wild-type controls [^kurosu2005]. The exact extension varied by founder line and sex: male EFmKL46 line +20.0%, male EFmKL48 line +30.8%; female EFmKL46 +18.8%, female EFmKL48 +19.0%. Transgenic mice showed reduced insulin/IGF-1 signaling and resistance to oxidative stress. Note: the paper does not report suppressed p53/p21 expression — that is not a finding of this study. This is the foundational evidence that Klotho elevation is sufficient — not merely correlative — to extend healthy lifespan in mammals. #gap/needs-replication — original study used a C3H background (4× backcross), not pure C57BL/6; strain-dependence of lifespan extension not characterized.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — Klotho/FGF23/FGFR1 axis is present and functionally homologous |
| Phenotype conserved in humans? | partial — low circulating Klotho associates with cognitive decline and CKD progression in humans; causal direction uncertain |
| Replicated in humans? | no — no controlled intervention study |

#gap/needs-human-replication

### Klotho-null phenotype

Kuro-o et al. 1997 showed the reverse: mice homozygous for a hypomorphic Klotho allele develop a syndrome resembling accelerated aging (arteriosclerosis, skin atrophy, osteoporosis, emphysema, infertility, shortened lifespan) [^kuroo1997]. Specific lifespan figures in days (~60 days vs. ~600 days for WT) are widely cited in secondary sources but could not be confirmed from the abstract alone (full text not available; #gap/no-fulltext-access). This loss-of-function phenotype established Klotho as a longevity gene and provided the rationale for Klotho restoration as therapy.

---

## Nonhuman primate evidence — Castner 2023

Castner et al. (2023, *Nature Aging*) administered a **single subcutaneous (s.c.) injection of recombinant secreted rhesus Klotho protein** to aged rhesus macaques (n=18; mean age 21.78 years, range 15–28 years; 13 female and 5 male) and tested spatial working memory using the spatial delayed-response (SDR) task [^castner2023]. Key results:

- **10 µg/kg s.c.** (primary dose) significantly improved high-memory-load (HML) task performance within 4 hours and the effect persisted for at least 2 weeks (days 14–23)
- **20 µg/kg and 30 µg/kg** did **not** produce significant cognitive improvement in HML or NML tasks — an inverted-U dose-response pattern
- The same rhesus KL protein at 10 µg/kg s.c. enhanced LTP in young mouse hippocampal slices and improved Y-maze working memory in young mice (C57BL/6J congenic, male, ~4 months)
- The study is recombinant protein, not gene therapy — but establishes proof-of-concept that **elevated circulating sKL is sufficient to rapidly enhance cognitive function in aged primates**
- Putative serum half-life in NHPs: 29.5 hours (n=2 monkeys, 30 µg/kg s.c. time-course); substantially longer than the minutes-to-hours estimate from rodent data

This result is critical for AAV-Klotho because it validates the secreted Klotho protein as the effector (not membrane Klotho), confirms NHP translation, and — crucially — reveals a dose-response inversion that any gene therapy program must account for. A naive "more is better" AAV dose may be counterproductive.

#gap/needs-replication — single NHP cohort study; inverted-U dose-response not yet mechanistically explained. #gap/dose-response-unclear

---

## Combination gene therapy — Davidsohn 2019 (Church lab)

Davidsohn et al. (2019, *PNAS*) delivered three longevity genes via **AAV8** vectors — **FGF21, α-Klotho, and sTGF-βR2** — in mouse models of obesity, type 2 diabetes, heart failure, and renal failure [^davidsohn2019]. This is the most proximate AAV-Klotho preclinical study (as opposed to transgenic overexpression). All mice were C57BL/6J male; dosing was 1E11 vg per mouse via retroorbital injection. Key outcomes in the Klotho-relevant disease models:

- Renal failure model (unilateral ureteral obstruction, UUO): AAV:αKlotho alone produced **75% reduction in renal medullary atrophy** vs. AAV:GFP control (P<0.05); largest reduction was in the FGF21+αKlotho+sTGFβR2 triple combination (P<0.001)
- Heart failure model (ascending aortic constriction, AAC): AAV:sTGFβR2 + AAV:αKlotho showed the **largest cardiac gains** — 222% increase in fractional shortening (FS) and 159% increase in ejection fraction (EF) vs. AAV:GFP at day 90 (P<0.01). Note: the "58% improvement" figure cited in prior versions of this page refers specifically to FGF21+αKlotho's improvement in FS relative to baseline, not vs. controls — the full data are in Fig. 4A–C.
- Obesity/diabetes model: FGF21 alone fully reversed the HFD obesity phenotype; Klotho alone showed modest weight loss (~15%) in naturally aging obese mice on normal diet; Klotho contribution was additive but FGF21 dominated
- Single-dose AAV8; ~10-fold increase in circulating αKlotho confirmed by ELISA; long-term expression confirmed (>3 months for heart failure model)

This study establishes that **AAV8-delivered secreted Klotho is bioactive and protective in disease contexts in mice**, but does not address lifespan or anti-aging endpoints directly.

#gap/needs-replication — Church lab single study; no independent replication of AAV-Klotho disease-reversal findings as of 2026-05-06.

---

## Cognitive enhancement — Klotho-VS variant (Dubal 2014)

Dubal et al. (2014, *Cell Reports*) identified the **KL-VS haplotype** (a naturally occurring variant carried by ~26% of humans in these cohorts, consistent with population frequencies of ~20–25%) as associated with elevated circulating Klotho and enhanced cognitive performance [^dubal2014]. KL-VS **heterozygotes** showed (across three independent cohorts, total n=718 individuals aged 52–85):

- Higher klotho serum levels (~10% above non-carriers in fasting morning samples from cohort 1; confirmed across cohorts)
- Improved global composite cognitive Z-score (Cohen's d = 0.34 across three cohorts — clinically meaningful effect size exceeding FDA-approved AD treatments)
- Cognitive benefit was independent of age, sex, and APOE ε4 status
- Benefit observed in cross-sectional design across all three cohorts; the paper does not report a longitudinal follow-up within the Rush Memory and Aging Project cohort — that characterization was an overstatement in the prior version of this page

Important caveat: **KL-VS homozygotes show decreased lifespan and decreased cognition** — excluded from the above analysis. This paradoxical homozygous effect complicates the dose-response model for Klotho elevation therapies.

The 2015 follow-up in hAPP mice (Alzheimer's model) showed that elevating Klotho (transgenic KL mice, which are hemizygous on an incipient C57BL/6 background) prevented premature mortality, maintained NMDA receptor GluN2B subunit levels in hippocampus, and preserved spatial memory [^dubal2015mouse]. AAV-mediated Klotho elevation was used in a subset of experiments confirming the result is expressible via non-germline delivery.

These human genetics data support the translational hypothesis that Klotho elevation is cognitively beneficial in humans — the strongest (if indirect) human evidence in this space.

---

## Delivery strategies

### Systemic AAV (most common)

- **AAV8 IV (retroorbital)**: high hepatic tropism; liver as primary secretory organ for circulating sKL. Used in Davidsohn 2019. AAV8 was chosen specifically for its high liver infection rate and ability to produce high levels of secreted proteins.
- **AAV-PHP.eB (IV)**: engineered capsid with enhanced CNS penetrance after systemic injection (developed by Gradinaru lab, Caltech); theoretically useful for both peripheral secretion and direct CNS Klotho expression. **Note:** PHP.eB CNS tropism is mouse-specific via LY6A receptor; does **not** translate to NHPs — a critical translational gap for cognitive applications.

### Kidney-targeted

Kidney (particularly proximal tubule cells) is the dominant site of endogenous Klotho expression. Kidney-directed AAV (e.g., retrograde renal artery injection) would recapitulate the physiological secretion source and is relevant for CKD-context applications. Lower total vector dose; reduced off-target transduction.

### CNS-targeted (intrathecal)

Intrathecal AAV9 or AAVrh10 can transduce choroid plexus epithelium — the second major Klotho source — for applications targeting cognitive aging. Avoids systemic exposure. Relevant precedent: intrathecal AAV9 is FDA-cleared for spinal muscular atrophy (onasemnogene abeparvovec, pediatric). Adult neurological AAV trials increasingly use intrathecal routes.

---

## Mechanism summary

```
Aging → ↓ circulating sKL
     → ↑ FGF23 (unopposed)       → hyperphosphatemia, 1,25-VitD↓, cardiac hypertrophy
     → ↑ TGF-β1/Wnt signaling    → fibrosis (kidney, lung, heart)
     → ↑ oxidative stress (↓ SOD2, ↓ catalase)
     → ↑ insulin/IGF-1 signaling  → accelerated cellular aging
     → ↓ NMDA-GluN2B in hippocampus → cognitive decline

AAV-Klotho (sKL) restoration:
     → FGF23 co-receptor activity → restores phosphate/VitD homeostasis
     → Wnt ligand sequestration   → anti-fibrotic
     → Nrf2 activation            → reduced ROS
     → IGF-1 pathway suppression  → mimics caloric-restriction signaling
     → GluN2B preservation        → synaptic plasticity maintained
```

Cross-links: [[fgf23]], [[fgf-signaling]], [[wnt-beta-catenin]], [[tgf-beta-signaling]], [[nrf2]]

---

## Translation barriers

### Protein half-life limits recombinant protein approaches

Recombinant sKL has a short circulating half-life in rodents (estimated at ~7 minutes per Castner 2023 citation of prior mouse data). In aged rhesus macaques, Castner 2023 measured a putative half-life of **29.5 hours** (n=2 monkeys, 30 µg/kg s.c., time-course up to 52 hours) — substantially longer than the rodent estimate, consistent with primate-scale PK. The Castner 2023 study used single-injection recombinant Klotho and observed cognitive effects persisting for at least 2 weeks — indicating the mechanism involves sustained downstream effects (synaptic remodeling) rather than purely acute pharmacokinetic presence. But for chronic systemic anti-aging benefits (renal, cardiac, metabolic), sustained elevation is still likely needed. This creates the core rationale for gene therapy over protein infusion.

### Dose-response inversion

The Castner 2023 finding that high-dose Klotho is **ineffective or potentially counterproductive** for cognitive outcomes is a significant warning for gene therapy design. AAV-mediated overexpression is hard to dose precisely, and long-lived episomal expression may produce supraphysiological levels. The optimal therapeutic window for sKL is not yet defined in any species. #gap/dose-response-unclear

### Cancer risk — contested

Klotho is generally tumor-suppressive: it inhibits IGF-1 and Wnt signaling (both proto-oncogenic pathways), and low Klotho expression is associated with more aggressive cancers in multiple tumor types. Unlike [[aav-tert]], AAV-Klotho does not face the fundamental conflict where the therapeutic molecule is also a pan-cancer driver. However, Klotho's IGF-1 suppression shares mechanism with some longevity pathways that can theoretically affect cancer susceptibility in tissue-specific contexts — this requires monitoring but is not considered a primary barrier. #gap/long-term-unknown

### AAV immunogenicity

Pre-existing neutralizing antibodies against AAV serotypes are prevalent in humans (AAV9: ~20–40% seroprevalence in adults). Neutralizing antibodies will block transduction efficiency in a substantial fraction of any clinical cohort, requiring pre-screening and potentially excluding a significant patient population. Re-dosing is effectively precluded with the same serotype due to immune priming.

### PHP.eB does not translate to NHPs

The enhanced CNS tropism of AAV-PHP.eB — which made it attractive for CNS Klotho delivery in mice — is dependent on the LY6A receptor, which is absent from NHP brain endothelium. Any CNS-targeted Klotho gene therapy in humans must use alternative serotypes (AAV9 IT, AAVrh10 IT, or novel engineered capsids). #gap/needs-human-replication

---

## Commercial and academic landscape

Dedicated AAV-Klotho gene therapy companies have not advanced to clinical stage as of 2026-05-06. The Church lab (Harvard) has published the most proximate preclinical gene therapy work (Davidsohn 2019). The Dubal lab (UCSF) has built the most robust cognitive-enhancement translational case using both human genetics and NHP studies. Rejuvenate Bio (Church lab spinout) has pursued multi-gene longevity approaches in dogs; Klotho is among reported targets.

By contrast, the broader recombinant protein space (non-AAV Klotho delivery) has seen interest from several smaller biotechs — none have reached Phase 2 as of this writing. There are **no active recruiting ClinicalTrials.gov entries** for AAV-Klotho as a gene therapy for aging as of 2026-05-06.

Compare to the [[aav-tert]] and [[aav-osk]] programs: all three are at a similar preclinical stage with no regulated human trials. [[aav-tert]] carries a higher perceived cancer-risk barrier; AAV-Klotho is arguably lower-risk based on Klotho's tumor-suppressive biology.

---

## Extrapolation table

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | FGF23/Klotho/FGFR1 axis is human-orthologous; sKL isoforms well-characterized |
| Phenotype conserved in humans? | partial | Low sKL → CKD + cognitive decline association in humans (epidemiological, not interventional); KL-VS variant provides genetic support |
| Replicated in humans? | no | Castner 2023 is NHP (macaque), not human; KL-VS GWAS is associational, not interventional |

---

## Gaps and limitations

- **No human intervention data.** All therapeutic evidence is mouse or NHP. Human KL-VS genetics is associational. #gap/needs-human-replication
- **Dose-response for AAV-delivered sKL not characterized** in any species at therapeutic doses. High-dose Klotho appears ineffective or counterproductive for at least some outcomes (Castner 2023). #gap/dose-response-unclear
- **Long-term safety unknown.** No multi-year animal study of sustained AAV-Klotho expression. Cancer surveillance data absent. #gap/long-term-unknown
- **PHP.eB CNS tropism does not translate to NHPs.** A CNS-targeting strategy that works in mice requires a different capsid for human application. #gap/needs-human-replication
- **Mechanism of cognitive rescue is incompletely understood.** NMDA receptor preservation and synaptic plasticity are downstream correlates; the direct molecular targets of sKL in the CNS are not fully mapped. #gap/no-mechanism
- **Davidsohn 2019 is a single-lab combination study** — AAV-Klotho alone vs. combination not fully disentangled for all endpoints; independent replication absent. #gap/needs-replication

---

## Cross-references

- [[klotho]] (verified-partial) — canonical protein page; all molecular biology, isoform structure, FGF23 mechanism, aging epidemiology
- [[fgf23]] (implicit stub) — phosphate-regulating hormone; obligate signaling partner of membrane Klotho
- [[fgf-signaling]] (implicit stub) — pathway page for FGFR/FGF axis
- [[wnt-beta-catenin]] — Klotho antagonizes Wnt ligands; anti-fibrotic mechanism
- [[chronic-inflammation]] (hallmark) — Klotho suppresses NF-κB-driven inflammation
- [[stem-cell-exhaustion]] (hallmark) — kidney tubular cell loss in Klotho-null mice resembles stem cell depletion
- [[altered-intercellular-communication]] (hallmark) — circulating sKL is a systemic endocrine signal; decline disrupts inter-organ communication
- [[aav-tert]] (gene-therapy sibling, verified) — telomerase gene therapy; similar stage; higher cancer-risk barrier
- [[aav-osk]] (gene-therapy sibling, R23b) — Yamanaka partial-reprogramming gene therapy; OSK approach
- [[aav-follistatin]] (gene-therapy sibling, R23b) — muscle-targeted; different mechanism
- [[crispr-base-editing-pcsk9]] (R23b sibling) — cardiovascular gene editing; different modality
- [[partial-reprogramming]] — broader conceptual sibling
- [[hallmarks-of-aging]]
- [[sens-damage-categories]]

---

## Footnotes

[^kuroo1997]: doi:10.1038/36285 · Kuro-o M et al. · in-vivo · Nature 1997 · 390:45–51 · model: Klotho hypomorphic mouse (multiple inbred backgrounds including BALB/c, C3H, C57BL/6 noted in MeSH; specific strain for lifespan measurements unconfirmed from abstract) · mice homozygous for hypomorphic klotho allele develop accelerated-aging syndrome (arteriosclerosis, skin atrophy, osteoporosis, emphysema, infertility, short lifespan); exact lifespan figures in days (~60 vs. ~600) could not be confirmed from abstract alone — full text not accessible (not_oa) · #gap/no-fulltext-access · archive: not_oa (no local PDF)

[^kurosu2005]: doi:10.1126/science.1112766 · Kurosu H et al. · in-vivo · Science 2005 · 309:1829–1833 · model: Klotho-overexpressing transgenic mice (C3H background, 4× backcross; NOT C57BL/6); ~2× circulating sKL elevation · lifespan extension by founder line: male EFmKL46 +20.0%, male EFmKL48 +30.8%, female EFmKL46 +18.8%, female EFmKL48 +19.0% vs. WT; reduced insulin/IGF-1 signaling; resistance to oxidative stress · note: p53/p21 suppression is NOT reported in this paper — that claim was erroneous · archive: not_oa (failed download; verified against PMC full text PMC2536606)

[^castner2023]: doi:10.1038/s43587-023-00441-x · Castner SA, Gupta S, Wang D, Moreno AJ, Park C, Chen C, Poon Y, Groen A, Greenberg K, David N, Boone T, Baxter MG, Williams GV, Dubal DB · in-vivo · Nature Aging 2023 · 3:931–937 · model: aged rhesus macaques (Macaca mulatta; n=18; mean age 21.78 years, range 15–28; 13F 5M) + young C57BL/6J congenic male mice (~4 months) · single s.c. injection of recombinant rhesus secreted Klotho (96% homologous to human KL) · 10 µg/kg improved HML working memory within 4h and for ≥2 weeks; 20 µg/kg and 30 µg/kg did not improve performance (inverted-U dose-response); increased LTP in mouse hippocampal slices; putative serum half-life 29.5h in NHPs · archive: downloaded PMC2023 (local PDF)

[^dubal2014]: doi:10.1016/j.celrep.2014.03.076 · Dubal DB, Yokoyama JS, Zhu L, Broestl L, Worden K, Wang D, et al. · observational + in-vivo · Cell Reports 2014 · 7:1065–1076 · model: three independent human cohorts (Hillblom Aging Study + UCSF Memory and Aging Center + Normal Aging Cohort; total n=718, ages 52–85, mostly Caucasian, no dementia) + KL transgenic C57BL/6 mice (hemizygous, line 46) · KL-VS heterozygotes: elevated circulating Klotho ~10%, improved global cognitive Z-score (Cohen's d=0.34 across cohorts), independent of age, sex, APOE ε4; mouse overexpression confirmed cognitive enhancement in multiple tasks; synaptic GluN2B upregulation is proposed mechanistic substrate · KL-VS homozygotes excluded (decreased lifespan and cognition) · archive: local PDF verified

[^dubal2015mouse]: doi:10.1523/JNEUROSCI.5791-12.2015 · Dubal DB, Zhu L, Sanchez PE, Worden K, Broestl L, Johnson E, Ho K, Yu G-Q, Kim D, Betourne A, Kuro-O M, Masliah E, Abraham CR, Mucke L · in-vivo · J Neurosci 2015 · 35:2358–2371 · model: hAPP-J20 transgenic mice (Alzheimer's model; incipient C57BL/6 background, N6–N7; B6;C3H) crossed with hemizygous KL transgenic mice; four genotypes (NTG, KL, hAPP, hAPP/KL); total n=366 mice for longevity analysis (NTG 111, hAPP 67, KL 110, hAPP/KL 78); additional cohorts for behavior, biochemistry, electrophysiology · Klotho elevation (3.0–3.5× in hippocampus): prevented premature mortality in hAPP mice (survival effect independent of age by proportional hazard analysis); maintained hippocampal GluN1, GluN2A, GluN2B (depleted in hAPP); increased GluN2B in PSD fractions ~2-fold; improved spatial learning and memory; reduced epileptiform activity ~60%; did not alter Aβ, tau, or plaque levels · archive: local PDF verified

[^davidsohn2019]: doi:10.1073/pnas.1910073116 · Davidsohn N, Pezone M, Vernet A, Graveline A, Oliver D, Slomovic S, Punthambaker S, Sun X, Liao R, Bonventre JV, Church GM et al. · in-vivo · PNAS 2019 · 116:23505–23511 · model: C57BL/6J male mice; disease models: obesity/T2D (HFD, 8–17 wk old), heart failure (ascending aortic constriction, 6 mo old), renal failure (unilateral ureteral obstruction, 1E11 vg/mouse AAV8 retroorbital) · AAV8 serotype; ~10× increase in circulating αKlotho confirmed by ELISA · αKlotho AAV alone: 75% reduction in renal medullary atrophy vs. control (P<0.05); sTGFβR2 + αKlotho combination: 222% increase in cardiac FS, 159% increase in EF vs. control (P<0.01) at day 90; FGF21 fully reversed obesity/diabetes; Klotho modestly additive for metabolic phenotypes · archive: local PDF verified
