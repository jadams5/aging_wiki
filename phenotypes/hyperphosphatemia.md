---
type: phenotype
aliases: [elevated serum phosphate, high phosphate, hyperphosphataemia, phosphate toxicity, serum phosphorus elevation]
icd-10: "E83.39 (Other disorders of phosphorus metabolism — the correct code for acquired hyperphosphatemia; confirmed via NLM ICD-10-CM API 2026-06-02)"
icd-11: null   # ICD-11 API requires authentication; not independently confirmable without auth token. #gap/needs-canonical-id — expected to fall under 5C50-5C5Z metabolic disease block; verify when WHO ICD-11 API token is available
affected-tissues: ["[[kidney]]", "[[arteries]]", "[[bone]]", "[[parathyroid]]"]
underlying-hallmarks: ["[[deregulated-nutrient-sensing]]", "[[altered-intercellular-communication]]"]
typical-onset: "Overt hyperphosphatemia (>1.45–1.5 mmol/L) is primarily a CKD stage 3b–5 phenomenon; subtle dysregulation via the FGF23-Klotho axis begins from the fourth decade onward even with normal-range serum phosphate; clinically significant hyperphosphatemia typically 60+ in CKD-affected populations"
prevalence-65plus: "~10–30% of CKD patients (varies by stage and definition); the broader subclinical FGF23-Klotho axis dysfunction affects the majority of older adults without meeting formal hyperphosphatemia criteria"
verified: true
verified-date: 2026-06-02
verified-by: claude
verified-scope: "McGovern 2013 and Larsson 2010 verified against full-text PDFs; Kuro-o 2021 verified against full-text PDF; Block 2004 and Kuro-o 2010 abstract-verified only (closed-access); Isakova 2011 abstract-verified (PMC PDF unavailable); canonical ICD-11 code remains unconfirmed (gap tag retained)"
---

# Hyperphosphatemia

**Framing note:** This page covers hyperphosphatemia primarily as a **causal-graph node and intermediate biochemical driver**, not as a classical symptom-defined aging phenotype like sarcopenia or frailty. Elevated serum inorganic phosphate is the point through which dysregulated phosphate homeostasis — driven most severely by CKD, and more subtly by age-related [[fgf23|FGF23]]–[[klotho|Klotho]] axis decline — converts into downstream structural vascular damage. The mechanistic endpoint that makes phosphate biologically important in aging is [[vascular-calcification]] (which owns the VSMC transdifferentiation mechanism) and [[arterial-stiffening]] (the functional consequence); this page owns the phosphate-homeostasis biology, the clinical definition, and the causal links. Kuro-o (2021) describes phosphate as "an endogenous pro-aging factor" whose pathogenicity is dose-, duration-, and context-dependent [^kuro-o2021].

---

## Phosphate homeostasis — the normal-state physiology

Inorganic phosphate (Pi) is the dominant extracellular anion for phosphoester chemistry, nucleotide synthesis (ATP, NADPH), and hydroxyapatite skeletal mineralization. Total body phosphorus is ~700 g; ~85% is in bone as hydroxyapatite; ~15% is in soft tissue; less than 1% is extracellular. Serum inorganic phosphate in healthy adults is maintained within a narrow band of approximately **0.8–1.45 mmol/L** (2.5–4.5 mg/dL) through the coordinated action of three hormones and the kidney.

### Intestinal absorption

Dietary phosphate is absorbed in the small intestine primarily via the sodium-phosphate cotransporter **NaPi-2b (SLC34A2)** in the jejunum. As detailed on [[phosphate-additive-reduction]], inorganic phosphate food additives are absorbed at ~80–100% efficiency (no enzymatic release required), while organic-matrix phosphate (phytate, phospholipids, casein-bound) is absorbed at 20–70% depending on food type and enzymatic activity [^calvo2023-cite]. This bioavailability differential makes the form of dietary phosphate — not just total phosphorus intake — the biologically relevant variable.

### Renal phosphate handling

The kidney is the principal phosphate excretor: approximately 90% of filtered phosphate is reabsorbed in the proximal tubule by **NaPi-2a (SLC34A1)** and **NaPi-2c (SLC34A3)** cotransporters at the brush border. The remaining ~10% appears in urine under normal conditions; this fraction can be dramatically upregulated by:

- **FGF23** — the master phosphaturic hormone; internalizes and degrades NaPi-2a/2c (see below)
- **PTH** — promotes phosphate excretion; acts via cAMP to internalize NaPi cotransporters
- **Phosphatonins** (FGF7, MEPE, sFRP4) — minor contributors; relevant in tumor-induced osteomalacia

### The FGF23–Klotho–PTH–vitamin D regulatory network

The dominant endocrine axis governing phosphate homeostasis is:

**Phosphate excess → osteocyte FGF23 secretion → kidney phosphaturia + vitamin D suppression → serum phosphate normalization**

In detail (cross-linked to [[fgf23]] for protein-level detail and to [[klotho]] for structural context):

1. Osteocytes in bone (the dominant FGF23 source) sense elevated dietary phosphate load and vitamin D excess and respond by secreting **FGF23** [^isakova2011].
2. FGF23 binds to the **FGFR1c / Klotho ternary complex** at kidney proximal tubule cells. This requires **membrane Klotho (mKlotho)** as an obligate co-receptor — without Klotho, physiological FGF23 concentrations cannot activate FGFR1c.
3. Activated FGFR1c signals via ERK1/2 and PI3K/Akt to internalize NaPi-2a and NaPi-2c from the brush border → increased phosphate excretion.
4. FGF23 simultaneously suppresses CYP27B1 (1α-hydroxylase, which produces active 1,25(OH)₂ vitamin D) and induces CYP24A1 (which catabolizes it), reducing vitamin D-mediated intestinal phosphate absorption.
5. FGF23 suppresses PTH secretion at the parathyroid gland (which also expresses mKlotho).
6. Lower phosphate and lower vitamin D reduce the stimulus for further FGF23 secretion — a negative feedback loop closing the circuit.

**Matrix Gla Protein (MGP)** provides local vascular protection against phosphate-driven calcification by binding calcium and hydroxyapatite nuclei in the vascular wall (carboxylated form only; see [[matrix-gla-protein]] and [[vascular-calcification]] for mechanism). **Fetuin-A (AHSG)** is a systemic calcification inhibitor: it forms **calciprotein particles (CPPs)** by binding phosphate–calcium crystal precursors in plasma, preventing their nucleation into vascular hydroxyapatite. Elevated phosphate overwhelms both these inhibitor systems [^kuro-o2021].

---

## Definition and clinical thresholds

| Category | Serum inorganic phosphate |
|---|---|
| Normal (adults) | 0.8–1.45 mmol/L (2.5–4.5 mg/dL) |
| Borderline high | 1.45–1.78 mmol/L (4.5–5.5 mg/dL) |
| Hyperphosphatemia (clinical) | >1.78 mmol/L (>5.5 mg/dL) |
| Severe (ESRD risk range) | >2.26 mmol/L (>7.0 mg/dL) |

**ICD-10-CM:** E83.39 — Other disorders of phosphorus metabolism. This category includes acquired hyperphosphatemia from CKD and other causes; it is distinct from the hereditary forms (familial tumoral calcinosis, E83.39 also applies unless specific hereditary codes apply).

**Measurement note:** Serum phosphate shows significant diurnal variation (~0.1–0.3 mmol/L swing) and is suppressed by carbohydrate ingestion. Fasting morning samples are most representative. Hemolysis causes spurious elevation and must be excluded. The [[fgf23|fgf23]] page notes the important finding that **FGF23 rises before serum phosphate** in CKD progression: FGF23 compensates for declining GFR by maximizing phosphaturia, maintaining normal serum phosphate until CKD stage 3b–4, when compensation fails [^isakova2011].

---

## Causes

### 1. CKD-related (primary and most severe)

Reduced glomerular filtration rate is the dominant cause of pathological hyperphosphatemia. As GFR falls:
- Phosphate filtration decreases → compensatory FGF23 rises (CKD stage 1–2)
- FGF23 maintains phosphaturia → serum phosphate remains nominally normal (CKD stage 2–3a)
- GFR falls below ~45 mL/min/1.73 m² (stage 3b) → FGF23 compensation fails → serum phosphate begins to rise
- Stage 4–5 and dialysis: hyperphosphatemia is nearly universal without treatment [^block2004]

CKD affects approximately 10–14% of the global adult population and is increasingly prevalent with age; hyperphosphatemia is the anticipated consequence in advanced disease.

### 2. Age-related FGF23-Klotho axis dysfunction (subtle; non-CKD)

Even in older adults with normal GFR and normal serum phosphate, the FGF23-Klotho axis undergoes progressive dysregulation. Kidney Klotho expression declines ~40–50% between young adulthood and age 65–70 (documented in [[klotho]] with primary citations). This decline:

- Reduces the kidney's FGF23 responsiveness → more FGF23 is required to maintain the same phosphaturia
- Drives compensatory FGF23 elevation in aging community cohorts, independently of CKD
- Produces subclinical phosphate dysregulation with **normal fasting serum phosphate** but impaired postprandial phosphate clearance and elevated FGF23

This pattern has been described as "aging-associated CKD-like mineral dysregulation" and is mechanistically upstream of vascular calcification risk even before formal hyperphosphatemia develops. Kuro-o's germinal mouse work showed that the premature aging syndrome of Klotho-deficient mice — including extensive vascular and soft-tissue calcification — was substantially resolved by genetically eliminating phosphate retention, providing the clearest experimental evidence that **phosphate excess is mechanistically causal in the Klotho-deficiency aging phenotype** [^kuro-o2010] [^kuro-o2021].

| Dimension | Status |
|---|---|
| FGF23-Klotho-phosphate axis conserved in humans? | Yes — genetic diseases (XLH, ADHR, HFTC) directly validate each arm of the axis in humans |
| Klotho-deficiency calcification conserved in rodents? | Yes — Klotho-null mice develop severe vascular and periarticular calcification; phenotype partially rescued by low-phosphate diet |
| Age-related Klotho decline replicated in humans? | Yes — serum Klotho declines with age in multiple cohort studies |
| Relevance to non-CKD normoglycemic aging | Partial — Klotho-null calcification is more severe than what age-related Klotho decline produces; the non-CKD phenotype is quantitatively uncertain |

### 3. Dietary inorganic phosphate additive load

Processed food phosphate additives (sodium phosphate, sodium tripolyphosphate, phosphoric acid, sodium acid pyrophosphate) are absorbed at ~80–100% efficiency and acutely stimulate FGF23 secretion. In populations with high processed food consumption, additive phosphate contributes an estimated 320–470 mg/day above whole-food phosphorus — a disproportionate fraction of absorbed load. See [[phosphate-additive-reduction]] for the full intervention evidence base. This is the primary modifiable driver in non-CKD adults.

### 4. Other causes (less aging-relevant)

- **Hypoparathyroidism** — PTH deficiency reduces phosphaturia → hyperphosphatemia; compensated by low serum calcium
- **Rhabdomyolysis / tumor lysis syndrome** — massive intracellular phosphate release into extracellular space
- **Vitamin D toxicity** — excessive 1,25(OH)₂-vitamin D increases intestinal phosphate absorption
- **Exogenous phosphate loading** — laxatives, enemas, IV phosphate
- **Pseudohypoparathyroidism** — PTH resistance

---

## Downstream consequences

### Vascular calcification (primary downstream pathology)

Elevated extracellular phosphate is **necessary and sufficient** to induce VSMC osteogenic transdifferentiation in vitro at ≥2 mM (normal serum ~1.0–1.45 mmol/L). The VSMC osteogenic switch mechanism — phosphate entry via PiT-1 (SLC20A1)/PiT-2 (SLC20A2) → ERK1/2 → RUNX2 induction → alkaline phosphatase upregulation → hydroxyapatite crystal nucleation — is fully detailed on [[vascular-calcification]]. This page defers that mechanism entirely to the sibling page; the connection here is the upstream phosphate supply.

The population epidemiology supports the link. In the large community-based McGovern 2013 cohort (n=57,832; PLoS One), serum phosphate in the range 1.25–1.50 mmol/L — within the nominal normal range — was associated with increased cardiovascular events compared to the 0.75–1.00 mmol/L reference band (OR 1.36, 95% CI 1.06–1.74 in those with normal renal function; OR 1.40, 95% CI 1.09–1.81 in CKD stages 1–2), and the association was present in both CKD and non-CKD subgroups [^mcgovern2013]. The Larsson 2010 cohort study of 2,176 Swedish community men over 29.8 years found that serum phosphate and the calcium–phosphate product both independently predicted cardiovascular and total mortality, with conjoint effects [^larsson2010]. In the landmark Block 2004 hemodialysis study (n=40,538 patients), serum phosphate >5.0 mg/dL was associated with a dose-dependent increase in mortality risk: adjusted relative risks of 1.07, 1.25, 1.43, 1.67, and 2.02 for the bands 5.0–6.0, 6.0–7.0, 7.0–8.0, 8.0–9.0, and ≥9.0 mg/dL respectively [^block2004]. #gap/no-fulltext-access — full table of CIs and the Ca×P interaction analysis are in the closed-access paper and could not be fully verified from the abstract alone.

**Note on causality:** The observational data above does not prove that phosphate *causes* cardiovascular mortality independently of CKD severity and other confounders. Mendelian randomization evidence for phosphate itself as a causal CV risk factor is limited and the field has not yet generated a definitive large-scale MR study for serum phosphate. The mechanistic support from cell culture (VSMC transdifferentiation) and animal models (Klotho-null calcification rescue by low-phosphate diet) provides a plausible causal mechanism; the human population data are consistent but not causally proven. #gap/contradictory-evidence — correlation vs causation unresolved in non-CKD populations.

### Secondary hyperparathyroidism

Elevated phosphate directly stimulates PTH secretion from parathyroid chief cells — independently of calcium levels — and suppresses renal 1α-hydroxylase, reducing 1,25(OH)₂ vitamin D, which further removes inhibition of PTH secretion. The resulting secondary hyperparathyroidism:

- Amplifies osteoclast activity → bone resorption → bone pain and fractures
- Raises serum calcium (potentially further elevating the calcium–phosphate product)
- Contributes to adynamic bone disease and metastatic calcification in advanced CKD
- Is a primary target of CKD mineral and bone disorder (CKD-MBD) management

### Soft-tissue calcification

Beyond the vasculature, elevated phosphate drives calcification in:
- Periarticular tissue (tumoral calcinosis phenotype in extreme phosphate excess, as seen in HFTC)
- Cardiac valves (aortic valve calcification)
- Myocardial tissue
- Cornea, conjunctiva (band keratopathy with concurrent hypercalcemia)

### Left ventricular hypertrophy

FGF23 elevation — the compensatory response to even modest phosphate loading — drives LVH via off-target FGFR4 activation in cardiomyocytes (Klotho-independent; see [[fgf23]] § FGF23 and the heart). This creates a mechanism by which subclinical phosphate dysregulation with elevated FGF23 but still-normal serum phosphate can drive cardiac remodeling.

---

## Management

### Phosphate binders (CKD standard of care)

In CKD stage 3b–5 and dialysis, oral phosphate binders are the primary pharmacological intervention to reduce intestinal phosphate absorption:

| Binder class | Examples | Mechanism | Notes |
|---|---|---|---|
| **Calcium-based** | Calcium carbonate, calcium acetate | Calcium–phosphate precipitation in gut | Risk of hypercalcemia and vascular calcification if overused; use limited in calcified patients |
| **Non-calcium, non-aluminum** | Sevelamer hydrochloride, sevelamer carbonate | Polymer anion exchange; sequesters phosphate | No calcium or aluminum burden; sevelamer carbonate preferred (less acidosis); expensive |
| **Lanthanum** | Lanthanum carbonate | Forms insoluble lanthanum phosphate | Effective; accumulation concerns with long-term use |
| **Iron-based** | Ferric citrate, sucroferric oxyhydroxide | Iron–phosphate chelation | Additional benefit: treats iron-deficiency anemia in CKD |
| **Aluminum-based** | Aluminum hydroxide | Effective but toxic | Neurotoxicity; short-course rescue use only; largely abandoned |

Evidence on mortality benefit of phosphate binders remains mixed — the large Block 2004 observational study established hyperphosphatemia as a mortality risk factor, but RCTs of binder therapy specifically targeting mortality have not conclusively proven benefit [^block2004]. #gap/needs-human-replication — no large RCT of phosphate binder vs placebo with mortality as primary endpoint in non-dialysis CKD has been completed.

### Dietary phosphate restriction

Standard KDIGO 2017 guidance recommends targeting serum phosphate toward normal range in CKD stages 3b–5 via dietary phosphate restriction, with preference for identifying and reducing additive sources over restricting natural whole-food phosphate (which would unnecessarily reduce protein and essential mineral intake). The specific target is <1.45–1.78 mmol/L. See [[phosphate-additive-reduction]] for the evidence base on additive-specific restriction, which has the strongest mechanistic and practical case as a non-CKD preventive lever.

### Phosphate restriction for non-CKD aging

In non-CKD adults, there is no evidence-based clinical guideline recommending serum phosphate reduction as an aging intervention. However, the mechanistic and epidemiological data support the following as reasonable prevention:

- Preferentially avoiding processed foods with phosphate additives (nearly 100% bioavailable), particularly processed cheese, processed meats, and cola beverages
- Monitoring serum FGF23 as an earlier marker of phosphate axis dysregulation than serum phosphate itself
- Maintaining adequate Klotho-supportive lifestyle behaviors — exercise, avoidance of smoking and excessive alcohol, which have shown modest associations with Klotho levels

**FGF23 as a clinical proxy:** Because FGF23 elevation precedes serum phosphate rise in CKD and in aging-related axis dysregulation, intact FGF23 (iFGF23) may be a more sensitive early biomarker of phosphate axis stress than serum phosphate alone. Clinical iFGF23 assays are available but not standard outside nephrology. See [[fgf23]] for the FGF23–CV-mortality literature and the caveat on reverse causation in observational studies.

---

## Aging relevance and causal-graph framing

Hyperphosphatemia occupies the following position in the aging causal graph:

```
Age-related Klotho decline
    → FGF23 resistance (kidney)
    → Compensatory FGF23 elevation
    → Impaired postprandial phosphate clearance
    → Subclinical / overt hyperphosphatemia
         |
         ├─→ [[vascular-calcification]] (VSMC osteogenic switch via PiT-1/2–ERK–RUNX2)
         |       └─→ [[arterial-stiffening]]
         ├─→ Secondary hyperparathyroidism → bone resorption
         └─→ LVH (via FGF23–FGFR4 off-target)
```

The node is embedded in two hallmark frames:

| Hallmark | How hyperphosphatemia connects |
|---|---|
| [[deregulated-nutrient-sensing]] | Phosphate is a nutrient-sensing signal; the FGF23–Klotho–PTH–vitamin D axis is the dedicated phosphate endocrine circuit; its age-related degradation constitutes a form of nutrient-sensing deregulation analogous to insulin resistance |
| [[altered-intercellular-communication]] | FGF23 is an endocrine hormone: osteocytes communicate bone phosphate status to kidney and parathyroid via FGF23; age-related Klotho decline breaks this intercellular signaling fidelity |

**SENS correspondence:** Hyperphosphatemia as such does not map to a SENS damage category directly. The downstream vascular calcification (hydroxyapatite deposition in medial ECM) has been likened to extracellular junk accumulation, analogous to GlycoSENS targets. SENS has not formally proposed a "CalciSENS" category. #gap/needs-replication — the SENS framing gap is noted on [[vascular-calcification]].

---

## Limitations and gaps

- **ICD-11 code unconfirmed:** WHO ICD-11 API requires authentication; code could not be verified in this seeding pass. #gap/needs-canonical-id — expected under 5C50-5C5Z metabolic disorders; verify when auth token is available.
- **Causal evidence in non-CKD populations is observational:** The McGovern 2013 and Larsson 2010 community studies show association between phosphate levels and CV events, but Mendelian randomization evidence for phosphate as an independent causal factor is limited. #gap/contradictory-evidence — confounding by subclinical CKD and by co-variation with FGF23 complicates causal interpretation.
- **Serum phosphate vs. absorbed phosphate:** Standard serum phosphate assays miss the dynamic postprandial excursions that may be more biologically relevant; fasting samples in range do not rule out subclinical phosphate axis stress. #gap/no-mechanism for non-fasting excursion monitoring in a clinical context.
- **FGF23 elevation as proxy:** FGF23 is the more sensitive upstream biomarker, but the Henry 2022 MR study's finding that genetically higher FGF23 is *protective* against HF undermines the simple causal narrative (see [[fgf23]] for detailed discordance framing). Clinical use of FGF23 in non-CKD aging is not validated.
- **Management evidence in non-CKD:** No RCT has randomized non-CKD adults to phosphate restriction or binder therapy with hard cardiovascular or mortality endpoints. All intervention evidence derives from CKD/dialysis populations.
- **Missing atomic pages (implicit stubs):** [[arteries]] tissue page does not exist; [[parathyroid]] cell-type/tissue page does not exist; [[pit-1-slc20a1]] and [[pit-2-slc20a2]] protein pages do not exist; [[matrix-gla-protein]] is cross-linked from sibling page [[vascular-calcification]] but its own page status should be confirmed.

---

## Cross-references

- [[vascular-calcification]] (verified 2026-05-23) — primary downstream process; owns the VSMC PiT-1/2–ERK1/2–RUNX2 osteogenic mechanism; `caused-by:` list includes [[hyperphosphatemia]]
- [[arterial-stiffening]] — functional endpoint of progressive medial calcification
- [[fgf23]] (verified 2026-05-23) — master phosphaturic hormone; FGF23–CV-mortality data; MR discordance
- [[klotho]] (verified 2026-05-05) — obligate FGF23 co-receptor; age-related Klotho decline drives phosphate axis dysfunction
- [[osteocytes]] — primary FGF23 secretion source; mechanosensors linking phosphate status to endocrine response
- [[matrix-gla-protein]] — vascular calcification inhibitor; requires vitamin K-dependent carboxylation
- [[phosphate-additive-reduction]] (verified 2026-05-23) — dietary intervention targeting modifiable phosphate load; evidence base
- [[deregulated-nutrient-sensing]] — hallmark: phosphate/mineral sensing axis
- [[altered-intercellular-communication]] — hallmark: FGF23 endocrine axis fidelity
- [[chronic-inflammation]] — intersects phosphate toxicity via NF-κB-mediated RUNX2 induction in VSMCs; FGF23 elevation correlates with inflammatory markers
- [[osteoporosis]] — bone-vascular axis intersection; FGF23/osteocyte biology; secondary hyperparathyroidism drives bone resorption
- [[kidney]] — primary phosphate excretion organ; CKD as the dominant hyperphosphatemia driver

---

## Footnotes

[^kuro-o2021]: doi:10.5551/jat.RV17045 · PMID:33028781 · Kuro-o M · *Journal of Atherosclerosis and Thrombosis* 2021;28(3):203-213 · review · key thesis: phosphate as "an endogenous pro-aging factor" mediating arteriosclerosis and aging via calciprotein particle formation (CPPs), FGF23-Klotho axis dysfunction, and VSMC transdifferentiation; proposes that CPPs — not free phosphate ions — are the proximate pathological mediator; FGF23-Klotho axis decline is the mechanism that fails to suppress CPP accumulation; Klotho-null and FGF23-null mice share premature aging phenotypes (vascular calcification, sarcopenia, cardiac hypertrophy, frailty, shortened lifespan) rescued by dietary phosphate restriction or genetic elimination of phosphate retention · ~67 citations (Crossref)

[^kuro-o2010]: doi:10.1016/j.mad.2010.02.008 · PMID:20197072 · Kuro-o M · *Mechanisms of Ageing and Development* 2010;131(4):270-275 · review + animal model synthesis · Klotho-null and FGF23-null mice develop hyperphosphatemia + premature aging syndrome including vascular calcification; phenotype "can be rescued by resolving hyperphosphatemia" (abstract); also discusses effects of altered phosphate on glucose metabolism, insulin sensitivity, and oxidative stress in vivo and in vitro · model: mus-musculus · not_oa (closed-access) #gap/no-fulltext-access — abstract-verified; mechanistic details of the dietary rescue (specific phosphate level, duration, strain data) require full-text access

[^block2004]: doi:10.1097/01.ASN.0000133041.27682.A2 · PMID:15284307 · Block GA, Klassen PS, Lazarus JM, Ofsthun N, Lowrie EG, Chertow GM · *Journal of the American Society of Nephrology* 2004;15(8):2208-2218 · observational cohort · n=40,538 maintenance hemodialysis patients (≥1 mineral-metabolism measure during last 3 months of 1997); serum phosphate >5.0 mg/dL associated with dose-dependent increased mortality risk: adjusted RR 1.07, 1.25, 1.43, 1.67, 2.02 for bands 5.0–6.0, 6.0–7.0, 7.0–8.0, 8.0–9.0, ≥9.0 mg/dL respectively; higher serum calcium also independently associated with increased mortality; Ca×P product and PTH elevation (≥600 pg/ml) separately predicted risk; population-attributable risk for mineral-metabolism disorders = 17.5% · ~2,076 citations (Crossref) · landmark paper for CKD-MBD phosphate-mortality literature · not_oa #gap/no-fulltext-access — abstract-verified; specific CIs and Ca×P threshold data require full-text access

[^isakova2011]: doi:10.1038/ki.2011.47 · PMID:21389978 · Isakova T et al. (CRIC Study Group) · *Kidney International* 2011;79(12):1370-1378 · observational (Chronic Renal Insufficiency Cohort) · n=3,879 patients with CKD stage 2–4 · key finding: FGF23 is elevated before both PTH and serum phosphate become abnormal in CKD; median FGF23 was markedly above healthy-population levels even when mean serum phosphate and median PTH remained in normal range; high FGF23 (>100 RU/ml) was more common than secondary hyperparathyroidism and hyperphosphatemia in all eGFR strata; the eGFR threshold at which FGF23 slope increased was significantly higher than the corresponding threshold for PTH (non-overlapping 95% CIs) — establishing FGF23 as the earliest biomarker of CKD mineral dysregulation · note: study population was CKD stages 2–4; FGF23 rise onset at stage 1 is extrapolated from this finding, not directly measured · ~1,067 citations (Crossref) · #gap/no-fulltext-access — PMC PDF unavailable; abstract-verified (PMC3134393)

[^mcgovern2013]: doi:10.1371/journal.pone.0074996 · PMID:24040373 · McGovern AP, de Lusignan S, van Vlymen J et al. · *PLoS One* 2013;8(9):e74996 · observational community cohort · n=57,832 participants with varying kidney function (primary care database, UK); subgroups: normal renal function n=24,184, CKD stages 1–2 n=20,356, CKD stages 3–5 n=13,292 · phosphate 1.25–1.50 mmol/L associated with increased CV events vs 0.75–1.00 mmol/L reference band: OR 1.36 (95% CI 1.06–1.74; p=0.016) in normal renal function group, OR 1.40 (95% CI 1.09–1.81; p=0.010) in CKD stages 1–2; hyperphosphatemia (>1.50 mmol/L) further elevated risk in CKD stages 3–5 (OR 2.34, 95% CI 1.64–3.32; p<0.001) · study design: multilevel logistic regression + Cox proportional hazards; 30-month follow-up · gold OA · ~114 citations (Crossref)

[^larsson2010]: doi:10.1161/ATVBAHA.109.196675 · PMID:19948843 · Larsson TE, Olauson H, Hagström E, Ingelsson E, Arnlöv J, Lind L, Sundström J · *Arteriosclerosis, Thrombosis, and Vascular Biology* 2010;30(2):333-339 · observational community cohort · n=2,176 Swedish men born 1920–1924 (Uppsala), mean age 50.1 at baseline; median follow-up 29.8 years (range 0.04–32.2); 1,009 deaths (466 cardiovascular) · Cox proportional hazards, adjusted for age, albumin, eGFR, diabetes, antihypertensive medication, BP, cholesterol, triglycerides, BMI, smoking · serum Pi independently predicted total mortality (HR per SD 1.06; 95% CI 1.01–1.12; p=0.03) and cardiovascular mortality (HR per SD 1.10; 95% CI 1.02–1.18; p=0.01); Ca×Pi product similarly predicted cardiovascular mortality (HR per SD 1.10; 95% CI 1.03–1.19; p=0.008); conjoint effects of elevated Ca and Pi on mortality are additive (not multiplicative); Pi was not a significant independent predictor of non-cardiovascular mortality in the fully adjusted model (HR 1.02; p=ns); results consistent in eGFR >90 subsample (n=1,777) confirming independence from renal function · ~119 citations (Crossref)

[^calvo2023-cite]: doi:10.3390/nu15030736 · Calvo MS et al. · *Nutrients* 2023 · review · bioavailability differential between inorganic additive phosphate (~80–100%) and organic-matrix phosphate (~20–70%); cumulative additive exposure estimates; see [[phosphate-additive-reduction]] for full citations and SOP reference · gold OA · cited per [[phosphate-additive-reduction]] (verified 2026-05-23)
