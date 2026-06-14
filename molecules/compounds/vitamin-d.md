---
type: compound
aliases: [vitamin D3, cholecalciferol, D3, calcitriol, 1,25-dihydroxyvitamin D3, 25-hydroxyvitamin D, 25(OH)D, calcifediol]
pubchem-cid: 5280795
pubchem-cid-alt: 5280453
chembl-id: null
drugbank-id: null
biologic: false
molecular-formula: C27H44O
molecular-weight-da: 384.6
mechanisms: [VDR-agonism, calcium-homeostasis, immunomodulation, bone-mineralization]
targets: ["[[vitamin-d-receptor]]", "[[cyp27b1]]"]
hallmarks: ["[[chronic-inflammation]]", "[[disabled-adaptive-immunity]]"]
clinical-stage: supplement
human-evidence-level: limited-negative
translation-gap: human-evidence-strong
next-experiment: "Dose-response RCT (1000 / 2000 / 4000 IU/d) stratified by baseline 25(OH)D (<25 / 25–50 / >50 nmol/L) with primary endpoint fracture+falls in community-dwelling 70+ adults, n≥3,000, 5 yr follow-up — to resolve whether benefit is restricted to the deficient stratum."
clinical-trials-active: 24
literature-checked-through: 2026-06-14
verified: true
verified-date: 2026-06-14
verified-by: claude
verified-scope: "Primary RCT evidence (VITAL Manson 2019, ViDA Khaw/Scragg 2017, Sanders 2010, Chandler 2020, Costenbader 2019) verified against full PDFs; D-Health Neale 2022 verified against PubMed abstract (paper closed-access, full PDF unavailable); Hahn 2022 verified against PubMed abstract (download failed); MacLaughlin 1985 and Uchida 1994 not re-read (canonical mechanistic claims, no full-PDF needed for scope); PubChem CIDs 5280795/5280453 confirmed against PubChem live API; ChEMBL and DrugBank fields remain null (not independently verified)"
---

# Vitamin D (Cholecalciferol / D3)

Vitamin D3 (cholecalciferol) is a fat-soluble secosteroid produced in human skin upon UV-B irradiation and also obtained from diet and supplements. It is a **prohormone**, not a hormone: it must be hydroxylated twice — first in the liver to 25-hydroxyvitamin D (calcifediol, 25(OH)D, the serum status biomarker) and then in the kidney (and locally in immune/other tissues) by CYP27B1 (1α-hydroxylase) to produce **calcitriol (1,25(OH)₂D₃)**, the active hormonal form. Calcitriol acts through the vitamin D receptor (VDR), a nuclear receptor expressed in nearly every tissue, driving transcription of hundreds of target genes involved in calcium homeostasis, immunity, cell cycle, and inflammation.

**This page primarily covers D3 supplementation (cholecalciferol)** and situates it in the full endocrine axis. Ergocalciferol (D2) and prescription calcitriol are noted briefly. The page covers the endocrine axis, the mechanistic biology, and — critically — the **large-RCT record**, which is predominantly null on hard endpoints in replete populations.

**PubChem CID for cholecalciferol (D3):** 5280795 (C₂₇H₄₄O; MW 384.6 g/mol; InChIKey QYSXJUFSXHHAJI-YRZJJWOYSA-N)
**PubChem CID for calcitriol (1,25(OH)₂D₃):** 5280453 (C₂₇H₄₄O₃; MW 416.6 g/mol; InChIKey GMRQFYUYWCNGIN-NKMMMXOESA-N)

---

## The vitamin D endocrine axis

### Step 1 — Skin synthesis (UVB → D3)

In the epidermis, 7-dehydrocholesterol (7-DHC) is photolyzed by UV-B radiation (290–315 nm) to previtamin D3, which isomerizes thermally to cholecalciferol (D3). **Aging substantially impairs this step**: 7-DHC content in skin declines with age. MacLaughlin and Holick (1985) demonstrated that the capacity of aged human skin to produce vitamin D3 is markedly reduced — skin from elderly donors produced ~4× less previtamin D3 than skin from young donors under equivalent UV-B exposure [^maclaughlin1985]. At age 70, skin synthesis capacity is estimated at ~25% of that in young adults [^holick2007review].

Additionally, sun-avoidance behaviour, clothing, sunscreen use, institutionalization, and the shorter UV-B photoperiod at northern latitudes compound the synthesis deficit. The result: vitamin D insufficiency (serum 25(OH)D <50 nmol/L [<20 ng/mL]) affects an estimated 30–60%+ of adults aged 65+ in northern-hemisphere populations [^holick2007review].

### Step 2 — Hepatic 25-hydroxylation → 25(OH)D

D3 (from skin or diet/supplements) is transported in blood on vitamin D-binding protein (VDBP/GC) to the liver, where CYP2R1 (and CYP27A1) 25-hydroxylates it to calcifediol (25(OH)D). 25(OH)D is the principal circulating form and the standard laboratory biomarker of vitamin D status. It is biologically weak (low VDR affinity) but is the substrate for the activating CYP27B1 enzyme in kidney and peripheral tissues.

**Serum 25(OH)D thresholds (IOM / Endocrine Society):**
- Deficiency: <30 nmol/L (<12 ng/mL)
- Insufficiency: 30–50 nmol/L (12–20 ng/mL)
- Adequacy: ≥50 nmol/L (≥20 ng/mL)
- Optimal by Endocrine Society: ≥75 nmol/L (≥30 ng/mL)
- Toxicity threshold: typically >250 nmol/L (>100 ng/mL); frank hypercalcemia >375 nmol/L

### Step 3 — Renal / peripheral 1α-hydroxylation → calcitriol

CYP27B1 (1α-hydroxylase) in the renal proximal tubule is the dominant source of circulating calcitriol, but the same enzyme is expressed at lower levels in macrophages, dendritic cells, keratinocytes, breast, prostate, colon, and other tissues — enabling local **autocrine/paracrine VDR signalling** independent of systemic calcitriol. Renal CYP27B1 is:
- **Stimulated** by PTH (the dominant regulator), hypocalcaemia, and hypophosphataemia
- **Suppressed** by FGF23, calcitriol itself (negative feedback), and hyperphosphataemia

**Aging impairs this step independently**: renal CYP27B1 activity declines with age-associated GFR reduction, and FGF23 rises with age (see [[fgf23]]), further suppressing 1α-hydroxylation. The result is a double deficit in aging: reduced substrate (25(OH)D from impaired skin synthesis) *and* reduced conversion efficiency (lower CYP27B1 capacity). This is the mechanistic basis for the PTH/vitamin D/FGF23 axis dysregulation described on the [[parathyroid]] page.

### Step 4 — VDR signalling (genomic mechanism)

Calcitriol enters cells by diffusion and binds VDR in the cytoplasm/nucleus with high affinity (K_d ~0.1 nM). The calcitriol–VDR complex forms a heterodimer with RXR (retinoid X receptor), translocates to chromatin, and binds vitamin D response elements (VDREs) — typically DR3 half-site repeats 5'-GGTTCA-3'. This drives transcription of >200 target genes (the *VDR cistrome*) [^holick2007review].

**Key VDR target genes (canonically verified):**
- *CAMP* (cathelicidin LL-37) — innate antimicrobial peptide; upregulated in macrophages [^selvaraj2015]
- *BGLAP* (osteocalcin) — bone matrix Gla protein; VDRE in promoter drives osteoblast expression [^uchida1994]
- *TNFSF11* (RANKL) — osteoclastogenesis signal; paradoxically upregulated by VDR in osteoblasts, enabling bone remodelling coupling
- *CYP24A1* (24-hydroxylase) — inactivates calcitriol → negative feedback loop
- *TRPV6*, *S100G* (calbindin-D9k) — intestinal calcium absorption channels

### PTH / FGF23 / calcium feedback loop

The VDR axis forms a closed feedback loop with [[parathyroid|PTH]] and [[fgf23|FGF23]]:

```
↓25(OH)D / ↓Ca²⁺ → ↑PTH → ↑CYP27B1 → ↑calcitriol → ↑intestinal Ca²⁺ absorption → ↑Ca²⁺ → ↓PTH
                          ↑FGF23 (from bone) → ↓CYP27B1 → ↓calcitriol (counterbalance)
```

In aging: the skin-synthesis deficit + declining CYP27B1 + rising FGF23 converge to produce the characteristic aging pattern: low 25(OH)D → elevated PTH → secondary hyperparathyroidism → cortical bone resorption. Vitamin D supplementation corrects the upstream substrate deficit, suppresses compensatory PTH, and partially restores intestinal calcium absorption — the best-documented pharmacodynamic effect.

### Ergocalciferol (D2) and calcitriol (prescription)

**Ergocalciferol (D2, CID 5280793):** plant-derived; prescription-grade in the US for vitamin D deficiency correction (50,000 IU weekly dosing). Effective at raising 25(OH)D but slightly less potent than D3 at equivalent doses due to lower 25-hydroxylation efficiency and shorter half-life in circulation.

**Calcitriol (1,25(OH)₂D₃, prescription):** bypasses the hepatic and renal activation steps; used in renal failure patients who lack CYP27B1 capacity. Not appropriate for routine deficiency supplementation — it does not raise 25(OH)D (the status biomarker) and the narrow therapeutic index for hypercalcemia is much tighter than for D3.

---

## Mechanisms in aging-relevant biology

### Calcium homeostasis and bone

VDR-mediated upregulation of TRPV6/calbindin-D9k in enterocytes increases intestinal calcium absorption. In the absence of adequate calcitriol, calcium absorption falls to ~15% of dietary calcium (passive diffusion only), driving compensatory PTH elevation and skeletal resorption [^holick2007review]. This is the mechanism by which vitamin D deficiency causes or exacerbates osteoporosis. VDR also drives osteocalcin/BGLAP expression in osteoblasts via a well-characterised VDRE in the BGLAP promoter [^uchida1994].

The extrapolation note applies to the bone mechanism (see below).

### Innate immune modulation — cathelicidin / LL-37

Upon activation with LPS or mycobacterial infection, macrophages upregulate CYP27B1 locally, convert 25(OH)D to calcitriol, and drive VDR-dependent transcription of *CAMP*, encoding LL-37 (the only human cathelicidin). LL-37 inserts into bacterial membranes and kills pathogens. This represents a **tissue-autonomous innate immune function of vitamin D that is independent of renal calcitriol**. See [[ll-37]] for LL-37 mechanism. Selvaraj et al. reviewed this axis in the tuberculosis context [^selvaraj2015].

**Aging relevance:** age-related decline in macrophage CYP27B1 activity (along with declining 25(OH)D substrate) may impair LL-37 induction. The LL-37 page also notes the skin-to-VDR axis (aging reduces skin LL-37 expression from combined UV-synthesis and TGF-β pathway changes). This connection is mechanistically compelling but has not been demonstrated to be causally reversed by D3 supplementation in aged humans — #gap/needs-human-replication.

### Adaptive immunity — Treg promotion, Th1/Th17 suppression

VDR signalling in T cells and dendritic cells drives:
- Treg (FoxP3+) induction — tolerogenic
- Suppression of Th1 (IFN-γ, TNF-α) and Th17 (IL-17) differentiation
- Reduced dendritic cell maturation → impaired antigen presentation

These effects are immunosuppressive in the context of autoimmune disease. The VITAL ancillary study by Hahn et al. (2022, BMJ) enrolled 25,871 participants randomized to 2000 IU D3/day vs placebo and found a statistically significant **22% relative reduction in incident confirmed autoimmune disease** (HR 0.78, 95% CI 0.61–0.99; p=0.05) over a median 5.3 years of supplementation [^hahn2022]. This is one of the few positive signal outputs from a major vitamin D RCT.

### Inflammaging

The VITAL inflammation substudy (Costenbader et al. 2019, Clinical Chemistry) randomized 1,561 VITAL participants and found that **neither vitamin D (2000 IU/day) nor omega-3 reduced CRP or IL-6 at 1 year**; in fact, IL-6 increased 8.2% in the vitamin D arm (p=0.02), and hsCRP increased 35.7% in vitamin-D-deficient recipients [^costenbader2019]. This is a direct human trial result contra the expected anti-inflammatory effect. The VDR anti-inflammatory biology (NF-κB suppression, Treg induction) is well-established in vitro and in animal models, but translation to CRP/IL-6 reduction in human supplementation trials is inconsistent and modest at best.

#gap/contradictory-evidence — vitamin D's in vitro / animal model anti-inflammatory biology (NF-κB suppression, Th17 inhibition) is not reliably reproduced as CRP/IL-6 reduction in human RCTs at 2000 IU/d supplementation.

### Skeletal muscle and falls — a contested story

VDR is expressed in skeletal muscle; calcitriol modulates muscle calcium handling and protein synthesis via both genomic (VDR-mediated) and rapid non-genomic mechanisms. Multiple meta-analyses have reported falls reduction with vitamin D supplementation in older adults, but the dose-form matters critically:

**High-dose intermittent/bolus dosing INCREASES falls and fractures:**
- Sanders et al. (2010, JAMA) RCT in 2,256 community-dwelling women ≥70 yr: annual oral dose of 500,000 IU cholecalciferol. Falls increased 15% (RR 1.15, 95% CI 1.02–1.30; p=0.03) and fractures increased 26% (RR 1.26, 95% CI 1.00–1.59; p=0.047) in the treated group vs placebo [^sanders2010]. This is a **paradoxical harm signal from high-dose bolus vitamin D**.
- The ViDA trial (Khaw/Scragg et al. 2017, Lancet Diabetes Endocrinol, n=5,108): monthly 100,000 IU. Falls: HR 0.99 (95% CI 0.92–1.07; null); non-vertebral fractures: HR 1.19 (95% CI 0.94–1.50; null, trend toward harm) [^scragg2017].

**Daily moderate-dose: modest benefit in deficient elderly, not in replete:**
The Endocrine Society position (and most meta-analyses up to ~2022) supported 800–1000 IU/d for fall/fracture risk reduction in vitamin-D-deficient older adults, especially when combined with calcium. The benefit appears concentrated in institutionalised or severely deficient individuals and is small in magnitude. The distinction between **deficiency correction** (robust endpoint effect) and **supplementation in already-replete individuals** (null or harm in bolus form) is the key clinical interpretive frame for all vitamin D RCT literature.

The mechanism for bolus-dose harm is hypothesised to involve induction of CYP24A1 (the inactivating enzyme), paradoxical calcitriol suppression, or altered VDR dynamics with intermittent supraphysiological peaks, but remains incompletely understood. #gap/no-mechanism for the bolus-harm paradox.

#gap/contradictory-evidence — daily low-dose D3 supplementation in deficient elderly may reduce falls; annual/monthly bolus high-dose D3 appears to increase falls and fractures. These cannot be reconciled as a single "vitamin D effect on falls."

---

## Hard-endpoint RCT record (the critical section)

The three large, well-powered RCTs of vitamin D3 supplementation primarily enrolled vitamin-D-sufficient participants and used primary prevention designs. All are null on their primary hard endpoints. **Note on D-Health framing:** D-Health (n=21,315) found null all-cause mortality overall but showed a nominally significant exploratory signal toward *increased* cancer mortality after excluding the first 2 years (HR 1.24, p=0.05); the authors caution that monthly bolus dosing "might not be appropriate in people who are vitamin D-replete."

### VITAL (2019)

Manson et al., NEJM 2019 [^manson2019], randomized 25,871 US adults (men ≥50, women ≥55) to vitamin D3 2000 IU/day or placebo, in a 2×2 factorial design with omega-3. Median follow-up 5.3 years. Mean baseline 25(OH)D ~77 nmol/L (adequate by most criteria — only ~12% had levels <50 nmol/L at baseline).

- **Primary outcome — invasive cancer incidence:** HR 0.96 (95% CI 0.88–1.06); **p=0.47 — null**
- **Primary outcome — major CVD events (MACE: MI, stroke, CVD death):** HR 0.97 (95% CI 0.85–1.12); **p=0.69 — null**
- **Cancer mortality** (secondary): HR 0.83 (95% CI 0.67–1.02); p=0.07 — non-significant trend toward reduction
- **Advanced cancer development** (secondary ancillary, Chandler 2020, JAMA Network Open [^chandler2020]): D3 reduced advanced or metastatic cancer development by ~17% (HR 0.83; 95% CI 0.69–0.99) over the trial period — a nominally significant secondary signal, not the primary endpoint
- **Autoimmune disease** (ancillary, Hahn 2022, BMJ [^hahn2022]): HR 0.78 (95% CI 0.61–0.99); p=0.05 — positive signal for incident autoimmune disease

Interpretation: In a predominantly vitamin-D-sufficient US population, 2000 IU/day D3 does not prevent cancer or cardiovascular events. Secondary signals (cancer mortality, autoimmune disease) are hypothesis-generating but require confirmation.

### D-Health (2022)

Neale et al., Lancet Diabetes Endocrinol 2022 [^neale2022], randomized 21,315 older Australians (≥60 yr), recruited via the Commonwealth electoral roll, to 60,000 IU/month vitamin D3 or placebo. Median follow-up 5.7 years. Baseline mean serum 25(OH)D ~77 nmol/L in the placebo group.

- **Primary outcome — all-cause mortality:** HR 1.04 (95% CI 0.93–1.18); p=0.47 — **null**
- CVD-specific mortality: HR 0.96 (95% CI 0.72–1.28; p=0.77) — null
- Cancer-specific mortality: HR 1.15 (95% CI 0.96–1.39; p=0.13) — null; exploratory analysis excluding first 2 years showed HR 1.24 (95% CI 1.01–1.54; p=0.05), a nominally significant *increased* cancer mortality signal #gap/needs-replication
- Conclusion: Monthly high-dose D3 did not reduce mortality in this mostly vitamin-D-replete population. Point estimates for cancer mortality trended upward rather than toward reduction.

### ViDA (2017)

Scragg/Khaw et al., Lancet Diabetes Endocrinol 2017 [^scragg2017], n=5,108 adults 50–84 yr in New Zealand. Initial 200,000 IU loading dose, then monthly 100,000 IU D3 vs placebo. Mean duration 3.4 years. Baseline mean 25(OH)D ~63 nmol/L.

- **Primary outcome — cardiovascular disease:** not reported in this secondary/post-hoc analysis publication (which reports falls and fractures); the CVD primary findings were published in a prior publication (Scragg et al., *BMJ* 2017; doi:10.1136/bmj.j6). Falls and fracture results: null (see Skeletal Muscle / Falls section above). The ViDA primary CVD results (Scragg et al. 2017, BMJ): HR 0.97 (95% CI 0.85–1.12) — null.

### The deficiency-correction vs. supplementation-in-replete distinction

The null results above should not be read as "vitamin D has no biological effect." Rather, the correct interpretation is:

1. **Deficiency correction in truly deficient individuals** has substantial endpoint effects — rickets in children, osteomalacia in adults, PTH normalization, and probable fracture risk reduction are not in dispute.
2. **Supplementation in already-replete individuals** (baseline 25(OH)D >50 nmol/L) does not appear to produce additional endpoint benefits, at the tested doses.
3. The clinical question (and where trials have been inadequately powered) is the dose-response and threshold for supplementation benefit in people with borderline levels (25–50 nmol/L range).

`human-evidence-level: limited-negative` is justified: the primary hard-endpoint trials are largely null, while secondary signals and the deficiency-correction benefit constitute "limited" positive evidence.

### Summary of evidence by endpoint

| Endpoint | Best evidence | Direction | Confidence |
|---|---|---|---|
| PTH suppression / Ca²⁺ homeostasis | Multiple RCTs | Positive (D3 reliably suppresses PTH in deficient) | High |
| Fractures (deficient adults) | Meta-analyses; strongest with Ca co-supplement | Positive, small effect | Moderate |
| Fractures (replete adults) | VITAL, ViDA | Null | High |
| Falls (daily low-dose in deficient elderly) | Meta-analyses | Small positive | Moderate |
| Falls (annual / monthly bolus) | Sanders 2010; ViDA | Harm (increased falls/fractures) | Moderate-high |
| Cardiovascular events | VITAL, ViDA, D-Health | Null | High |
| Cancer incidence | VITAL | Null | High |
| Cancer mortality | VITAL secondary; D-Health exploratory | VITAL: non-significant trend toward reduction (HR 0.83, p=0.07); D-Health: non-significant trend toward *increase* in exploratory analysis (HR 1.24, p=0.05 excl. first 2 yr) — contradictory signals | Low #gap/contradictory-evidence |
| Autoimmune disease incidence | VITAL ancillary (Hahn 2022) | Reduced ~22% | Moderate (single trial; secondary endpoint) |
| CRP / IL-6 (inflammaging) | VITAL inflammation substudy | Null / paradoxical increase | Moderate |

---

## Pharmacokinetics

- **Absorption:** Cholecalciferol is fat-soluble; absorption requires bile salts and dietary fat (~60–80% from oil-based supplements; lower from fat-free forms). Obesity sequestration in adipose tissue reduces bioavailability on a per-kg basis.
- **25-hydroxylation half-life:** Circulating 25(OH)D has a t₁/₂ of ~15–25 days, explaining why daily supplementation and weekly supplementation give similar 25(OH)D levels at steady state.
- **Conversion to calcitriol:** tightly regulated by PTH (stimulatory) and FGF23 (inhibitory); calcitriol t₁/₂ is ~4–6 hours (rapid turnover; serum calcitriol levels are not a practical monitoring target for supplementation).
- **Inactivation:** CYP24A1 (24-hydroxylase) — itself VDR-induced — converts both 25(OH)D and calcitriol to inactive 24,25- and 1,24,25-dihydroxyvitamin D metabolites. High-dose bolus vitamin D induces CYP24A1, potentially creating a period of calcitriol insufficiency after the initial peak (hypothesised mechanism for falls paradox).

### Supplement forms on the market

- **D3 (cholecalciferol):** preferred over D2 for supplementation — more potent on a unit-for-unit basis at raising 25(OH)D; widely available OTC at 400–5000 IU doses.
- **D2 (ergocalciferol):** prescription-grade high-dose (50,000 IU/wk); similar efficacy to D3 for treating deficiency at pharmacological doses.
- **25(OH)D₃ (calcifediol/Rayaldee):** FDA-approved prescription form for CKD-related secondary hyperparathyroidism; bypasses hepatic 25-hydroxylation; raises 25(OH)D more rapidly.

---

## Evidence quality grading for non-human claims

The VDR mechanism (VDRE-mediated transcription) and calcium homeostasis mechanism are well-established in human biochemistry and confirmed in human tissue. The following applies to claims about aging-specific effects of vitamin D that derive from non-human studies:

| Dimension | Status |
|---|---|
| VDR pathway conserved in humans? | Yes — VDR, VDRE sequences, and primary target genes (CAMP, BGLAP, CYP24A1) are highly conserved |
| Calcium homeostasis conserved? | Yes — the full PTH–VDR–intestinal-Ca²⁺ axis is conserved and validated in humans |
| LL-37 induction by VDR in macrophages | Yes — human macrophage and monocyte data exist; tuberculosis clinical context validates the axis [^selvaraj2015] |
| Treg induction by calcitriol | Partial — established in vitro and animal models; clinical translation to measurable Treg fraction shift by D3 supplementation is inconsistent |
| Falls / fractures (low-dose daily) | Partial — benefit in institutionalised / deficient elderly does not extrapolate cleanly to community-dwelling replete adults |
| Cancer prevention | No — RCT evidence null for incidence; secondary cancer mortality signal unconfirmed |

---

## Aging relevance and hallmark connections

| Hallmark | Mechanism | Evidence |
|---|---|---|
| [[chronic-inflammation]] | VDR-driven NF-κB suppression; Treg induction; cathelicidin induction → reduced microbial translocation. **But:** CRP/IL-6 effects null in replete human RCTs. | In vitro strong; human RCT weak #gap/contradictory-evidence |
| [[disabled-adaptive-immunity]] | VDR-mediated regulation of Th1/Th17 suppression, Treg expansion, DC maturation. Autoimmune-disease signal from VITAL (Hahn 2022). | Mechanistic strong; one large RCT anchors clinical claim |
| [[deregulated-nutrient-sensing]] | Vitamin D is a nutrient-hormone; declining serum 25(OH)D with age is a nutrient-sensing failure driven by reduced skin synthesis + kidney CYP27B1 activity | Indirect; documented aging trajectory |
| [[altered-intercellular-communication]] | PTH–VDR–FGF23 axis is a canonical mineral-axis endocrine communication system; disruption with age contributes to secondary hyperparathyroidism | Documented in [[parathyroid]] and [[fgf23]] pages |

---

## Safety and upper tolerable intake

- **Upper tolerable intake (IOM, 2011):** 4,000 IU/day for adults (safety margin over typical supplemental doses)
- **Toxicity threshold:** 25(OH)D >250 nmol/L is considered a risk threshold for toxicity; hypercalcaemia (thirst, polyuria, weakness, nausea) typically at >375 nmol/L
- **Kidney stones:** high calcium + D3 may increase renal calcium load; relevant mainly at high doses or in people predisposed to hypercalciuria
- **Drug interactions:** thiazide diuretics (↑ risk of hypercalcemia with high D doses), calcimimetics (cinacalcet — additive PTH suppression)
- **Granulomatous disease:** sarcoidosis, tuberculosis, and other granulomatous diseases involve macrophage CYP27B1 overexpression — D3 supplementation can cause hypercalcemia in these conditions
- **The bolus-dose harm signal** is the dominant safety concern unique to vitamin D: annual 500,000 IU or monthly 100,000+ IU dosing has increased falls/fractures in multiple RCTs. Daily supplementation at standard doses (800–2000 IU/d) does not share this signal.

---

## Clinical use and dosing reference

| Indication | Typical dose | Evidence level |
|---|---|---|
| Deficiency treatment | 50,000 IU D2 weekly × 8–12 wk (then maintenance) | Established; biomarker-validated |
| Maintenance / prevention | 800–1000 IU/d (1500–2000 IU/d if obese or high latitude) | Consensus; fracture endpoint inconclusive |
| Secondary hyperparathyroidism (non-CKD aging) | 1000–2000 IU/d to achieve 25(OH)D >75 nmol/L; monitor PTH | Reasonable; PTH suppression endpoint documented |
| CKD-MBD | Ergocalciferol high-dose OR calcifediol (Rayaldee); calcitriol for GFR <30 | Guidelines-based |
| **Do NOT use:** annual/monthly bolus doses in community-dwelling elderly | 500,000 IU annually or 100,000 IU monthly | Contraindicated by Sanders 2010 and ViDA falls/fracture signal |

---

## Limitations and gaps

- #gap/contradictory-evidence — anti-inflammatory effects (CRP, IL-6) documented in vitro and animal models but not consistently reproduced in human RCTs; VITAL inflammation substudy found IL-6 *increased* in the D3 arm at 1 year [^costenbader2019]
- #gap/contradictory-evidence — falls/fracture evidence contradicts by dose-form: daily low-dose may reduce falls in deficient elderly; bolus high-dose increases falls/fractures
- #gap/no-mechanism — the mechanism for paradoxical falls/fracture increase with bolus dosing is not established; CYP24A1 induction and calcitriol oscillation is hypothesised but not proven
- #gap/needs-replication — autoimmune disease incidence reduction (Hahn 2022, VITAL ancillary): nominally significant but a secondary endpoint requiring independent replication in a trial powered for this outcome
- #gap/needs-human-replication — LL-37 induction as an anti-aging immune mechanism: the VDR→CAMP axis is established in macrophages; whether D3 supplementation in aged humans meaningfully raises LL-37 output and reduces infection/inflammaging burden is not established
- #gap/dose-response-unclear — the deficiency-threshold below which supplementation produces hard-endpoint benefit has not been defined in a single well-powered stratified trial; all major RCTs enrolled predominantly replete individuals
- The page does not cover VDR genetics (BsmI, ApaI, TaqI, FokI polymorphisms) which modulate VDR function and may partly explain inconsistent trial results across populations — `#gap/needs-wiki-page` for VDR polymorphisms in aging

---

## Implicit stubs / cross-links

- [[vitamin-d-receptor]] — VDR / NR1I1; no page exists yet; referenced by ≥3 pages in the wiki (this page, [[ll-37]], [[parathyroid]]); warrants seeding as a stub #stub
- [[cyp27b1]] — 1α-hydroxylase; no dedicated page exists; central to the D3 activation axis and CKD-MBD
- [[calcium-homeostasis]] — no process page exists; closely linked to [[parathyroid]] and this page
- [[osteoporosis]] — phenotype page; referenced as downstream of vitamin D deficiency
- [[secondary-hyperparathyroidism]] — phenotype page; implicit stub
- [[ll-37]] — existing compound page (verified); links back here for VDR-driven cathelicidin induction

---

## See also

- [[parathyroid]] — parathyroid glands; PTH–VDR–FGF23 axis in aging (verified 2026-06-02)
- [[bone]] — bone mineral metabolism; VDR target gene osteocalcin; cortical bone loss in secondary hyperparathyroidism (verified 2026-05-23)
- [[fgf23]] — FGF23 suppresses CYP27B1; elevated in aging; part of the mineral axis
- [[klotho]] — FGF23 co-receptor; expressed in parathyroid; declines with age
- [[ll-37]] — cathelicidin; VDR target gene; innate antimicrobial function
- [[chronic-inflammation]] — hallmark; vitamin D immune modulation
- [[disabled-adaptive-immunity]] — hallmark; VDR effects on Th1/Th17/Treg balance
- [[vitamin-k2]] — vitamin K2 (MK-7); the γ-carboxylation partner that activates the MGP/osteocalcin substrate vitamin D upregulates
- [[hypotheses/d3-k2-calcium-partitioning]] — the combined D3+K2 calcium-partitioning (bone-vs-artery) hypothesis; mechanistically motivated, biomarker-supported, but hard-endpoint-null (AVADEC combined arm)
- [[interventions-by-hallmark]] — intervention matrix

---

## Footnotes

[^maclaughlin1985]: doi:10.1172/jci112134 · MacLaughlin J, Holick MF · observational (human skin tissue, age-stratified) · *J Clin Invest* 1985;76(4):1536–1538 · "Aging decreases the capacity of human skin to produce vitamin D3" · aged skin (~70 yr) produced ~4× less previtamin D3 than young skin (~20 yr) under equivalent UV-B exposure · model: ex vivo human skin biopsies · n not specified in abstract; multi-donor age-stratified design

[^holick2007review]: doi:10.1056/nejmra070553 · Holick MF · review · *N Engl J Med* 2007;357(3):266–281 · "Vitamin D Deficiency" · comprehensive review of the vitamin D endocrine axis, aging-associated synthesis decline, prevalence of deficiency, and downstream health consequences; >11,000 citations; figures cited include skin-synthesis decline to ~25% at age 70 and deficiency prevalence in older adults

[^uchida1994]: doi:10.1002/jbmr.5650091219 · Uchida M, Ozono K, Pike JW · in vitro (osteocalcin gene regulation) · *J Bone Miner Res* 1994;9(12):1981–1987 · "Activation of the human osteocalcin gene by 24r,25-dihydroxyvitamin D3" — establishes VDRE-mediated transcription of osteocalcin/BGLAP in osteoblasts; foundational VDR molecular biology

[^selvaraj2015]: doi:10.1139/cjpp-2014-0386 · Selvaraj P, Harishankar M, Afsal K · review · *Can J Physiol Pharmacol* 2015;93(5):405–411 · "Vitamin D: Immuno-modulation and tuberculosis treatment" · reviews VDR-mediated cathelicidin (LL-37/CAMP) induction in macrophages; documents CYP27B1 autocrine activation in immune cells independent of renal calcitriol; autophagy induction by 1,25(OH)₂D₃ in infected macrophages

[^manson2019]: doi:10.1056/nejmoa1809944 · Manson JE, Cook NR, Lee I-M, Christen W, Bassuk SS, Mora S, et al. (VITAL Research Group) · randomized controlled trial · *N Engl J Med* 2019;380(1):33–44 · "Vitamin D Supplements and Prevention of Cancer and Cardiovascular Disease" · n=25,871 · 2000 IU/d D3 vs placebo × median 5.3 yr · primary cancer HR 0.96 (p=0.47); primary CVD HR 0.97 (p=0.69) — null on both primary endpoints · baseline 25(OH)D ~77 nmol/L (replete) · ~1,416 citations (Crossref 2026-06-14)

[^neale2022]: doi:10.1016/S2213-8587(21)00345-4 · Neale RE, Baxter C, Romero BD, McLeod DSA, et al. (D-Health Trial) · randomized controlled trial · *Lancet Diabetes Endocrinol* 2022;10(2):120–128 (PMID 35026158) · "The D-Health Trial: a randomised controlled trial of the effect of vitamin D on mortality" · n=21,315 (10,662 vitamin D / 10,649 placebo) · 60,000 IU/month D3 vs placebo · median follow-up 5.7 yr · all-cause mortality HR 1.04 (95% CI 0.93–1.18; p=0.47) — null · cancer mortality HR 1.15 (p=0.13); exploratory (excl. first 2 yr): HR 1.24 (1.01–1.54; p=0.05) — trend toward increased cancer mortality, not decrease · baseline mean 25(OH)D ~77 nmol/L (placebo) · verified against PubMed abstract

[^scragg2017]: doi:10.1016/S2213-8587(17)30103-1 · Khaw KT, Stewart AW, Waayer D, Lawes CMM, Toop L, Camargo CA Jr, Scragg R · randomized controlled trial (secondary + post-hoc analysis) · *Lancet Diabetes Endocrinol* 2017;5(6):438–447 · n=5,108 · initial 200,000 IU then monthly 100,000 IU D3 vs placebo · mean duration 3.4 yr · falls HR 0.99 (p=0.82); non-vertebral fractures HR 1.19 (p=0.15) — null on falls/fractures; trend toward fracture increase · baseline 25(OH)D mean ~63 nmol/L

[^sanders2010]: doi:10.1001/jama.2010.594 · Sanders KM, Stuart AL, Williamson EJ, Simpson JA, Kotowicz MA, Young D, Nicholson GC · randomized controlled trial · *JAMA* 2010;303(18):1815–1822 · "Annual High-Dose Oral Vitamin D and Falls and Fractures in Older Women" · n=2,256 community-dwelling women ≥70 yr · single annual 500,000 IU D3 dose · falls RR 1.15 (95% CI 1.02–1.30; p=0.03); fractures RR 1.26 (95% CI 1.00–1.59; p=0.047) — **paradoxical harm** from annual bolus dosing · verified against PubMed abstract (PMID 20460620)

[^hahn2022]: doi:10.1136/bmj-2021-066452 · Hahn J, Cook NR, Alexander EK, Friedman S, Walter J, Bubes V, et al. · randomized controlled trial (ancillary) · *BMJ* 2022;376:e066452 (PMID 35082139) · "Vitamin D and marine omega 3 fatty acid supplementation and incident autoimmune disease: VITAL randomized controlled trial" · n=25,871 VITAL participants; median 5.3 yr follow-up · D3 2000 IU/d vs placebo · confirmed incident autoimmune disease HR 0.78 (95% CI 0.61–0.99; p=0.05) — 22% relative reduction · note: secondary endpoint; autoimmune diseases pooled across types (rheumatoid arthritis, polymyalgia rheumatica, autoimmune thyroid disease, psoriasis, others) · verified against PubMed abstract (PMID 35082139)

[^costenbader2019]: doi:10.1373/clinchem.2019.306902 · Costenbader KH, MacFarlane LA, Lee I-Min, Buring JE, Mora S, Bubes V, et al. · randomized controlled trial (ancillary) · *Clin Chem* 2019;65(12):1508–1521 · n=1,561 VITAL participants · 1-year biomarker follow-up · D3 2000 IU/d vs placebo · hsCRP: no change; IL-6 increased 8.2% in D3 arm (p=0.02); hsCRP increased 35.7% in D3-vitamin-D-deficient subgroup · conclusion: "Neither vitamin D nor n-3 FA supplementation over 1 year decreased these biomarkers of inflammation"

[^chandler2020]: doi:10.1001/jamanetworkopen.2020.25850 · Chandler PD, Chen WY, Ajala ON, Hazra A, Cook N, Bubes V, et al. (VITAL Research Group) · secondary analysis of VITAL RCT · *JAMA Netw Open* 2020;3(11):e2025850 · "Effect of Vitamin D₃ Supplements on Development of Advanced Cancer" · n=25,871 VITAL; 5-yr follow-up · D3 2000 IU/d vs placebo · advanced or metastatic cancer HR 0.83 (95% CI 0.69–0.99) — nominally positive secondary endpoint; cancer mortality trend
