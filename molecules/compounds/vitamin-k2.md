---
type: compound
aliases: [menaquinone, MK-4, MK-7, vitamin K2, MenaQ7, menaquinone-7, menaquinone-4]
pubchem-cid: 5282367
chembl-id: null
drugbank-id: null
biologic: false
molecular-formula: C46H64O2
molecular-weight-da: 648.99
mechanisms: [matrix-gla-protein-carboxylation, vitamin-k-cycle, anti-calcification]
targets: ["[[matrix-gla-protein]]", "[[osteocalcin]]", "[[gas6]]"]
hallmarks: ["[[chronic-inflammation]]"]
clinical-stage: supplement
human-evidence-level: limited-negative
translation-gap: phase-3-rct-needed
next-experiment: "Long-duration (3–5 yr) high-dose (≥360 µg/d MK-7) RCT in adults with CAC>0 powered for hard CV endpoints (MACE), not just dp-ucMGP biomarker normalization"
clinical-trials-active: 5
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "AVADEC (Diederichsen 2022) and Hasific 2023 (AVADEC CAC substudy) verified against full PDFs; de Vries 2025 and Naiyarakseree 2023 verified against full PDFs; Geleijnse 2004, Knapen 2013, Knapen 2015, Schurgers 2007 verified against PubMed/Crossref abstracts only (not_oa or download unavailable); Brandenburg 2017 and Vermeer 2020 verified from abstract only; canonical-DB identity fields (PubChem CID, InChIKey) not independently re-verified"
---

# Vitamin K2 (Menaquinone)

Vitamin K2 is a fat-soluble vitamin and cofactor for γ-glutamyl carboxylase, an enzyme required to activate a family of calcium-binding proteins (Gla proteins) involved in arterial calcification prevention, bone mineralization, and cell survival signalling. The most clinically-studied form for cardiovascular aging is **MK-7 (menaquinone-7)**, which dominates the supplement market for daily dosing due to its long biological half-life (~3 days) compared to MK-4 (~1 hour). Despite a mechanistically compelling story, the RCT record on hard arterial-calcification and cardiovascular endpoints is largely null. Mechanistic biomarker (dp-ucMGP) normalization is reliable; downstream endpoint benefit is not yet demonstrated in primary-prevention populations.

## Forms of vitamin K

Vitamin K encompasses two biologically relevant sub-families:

- **Vitamin K1 (phylloquinone)** — plant-derived (green leafy vegetables); absorbed in liver; primarily drives coagulation-factor carboxylation; poor tissue distribution outside liver; short half-life.
- **Vitamin K2 (menaquinone, MK-n)** — side chain length varies; produced by gut bacteria and found in fermented foods (natto, hard cheese). The two forms most relevant to supplementation:
  - **MK-4** — short chain (4 isoprene units); synthesized in some tissues (testes, bone, arteries) from K1; half-life ~1 hour; poor suitability for once-daily dosing; studied in Japanese populations at pharmacological doses (45 mg/day, rx-only in Japan for osteoporosis).
  - **MK-7** — long chain (7 isoprene units); primarily from natto or fermented cheese; half-life ~68 hours (~2.8 days) [^schurgers2007]; absorbed lipid-dependently; accumulates 7–8-fold during prolonged intake vs K1; accumulates in extra-hepatic tissues including arterial wall; superior pharmacokinetic profile for daily supplementation at microgram doses.
  - Longer-chain MKs (MK-8 to MK-13) exist in fermented foods but are rarely isolated for supplementation.

**PubChem IDs:** MK-7 = CID 5282367 (primary); MK-4 = CID 5283545.
**ChEMBL ID:** Not found in ChEMBL for MK-7 specifically — #gap/needs-canonical-id (ChEMBL tracks MK-4 under CHEMBL2180745; MK-7 lacks a verified ChEMBL entry as of 2026-05-08).

## Mechanism — γ-carboxylation of Gla proteins

Vitamin K2 is the essential cofactor for **γ-glutamyl carboxylase (GGCX)**, which carboxylates specific glutamate residues in Gla-domain proteins, converting them to γ-carboxyglutamate (Gla). Carboxylation is required for Ca²⁺-binding activity. The reaction consumes the reduced (hydroquinone) form of vitamin K, which is recycled by vitamin K epoxide reductase (VKORC1) — the warfarin target.

Key Gla proteins and their roles:

| Gla protein | Primary tissue | Function when fully carboxylated |
|---|---|---|
| [[matrix-gla-protein]] (MGP) | Arterial wall, cartilage | Inhibits hydroxyapatite crystal nucleation; prevents vascular calcification |
| [[osteocalcin]] (BGLAP) | Bone | Binds Ca²⁺ in hydroxyapatite; regulates bone mineralization and systemic metabolism |
| [[gas6]] (Growth Arrest-Specific 6) | Ubiquitous | Ligand for TAM receptors (TYRO3/AXL/MERTK); modulates cell survival, phagocytosis, inflammation |
| Coagulation factors II/VII/IX/X, protein C/S | Liver | Clot formation and anticoagulation — the classic vitamin K pathway; K1-dominant in liver |

**dp-ucMGP as the upstream biomarker:** Dephosphorylated-uncarboxylated MGP (dp-ucMGP) is the circulating form of inactive, non-carboxylated MGP. Elevated dp-ucMGP = insufficient vitamin K2 at the arterial wall. Vitamin K2 supplementation reliably lowers dp-ucMGP within weeks across dose ranges (90–720 µg/d), indicating restored carboxylation capacity [^vlasschaert2020] [^knapen2015]. However, dp-ucMGP normalization does not reliably translate to reduced CAC progression or hard CV event reduction in RCTs — this is the central translation gap.

## Cardiovascular evidence

### dp-ucMGP normalization (robust, replicated)

Vitamin K2 supplementation consistently and dose-dependently reduces dp-ucMGP across healthy adults, CKD patients, and diabetic populations. This is the most robustly reproduced finding in the K2 literature and has been confirmed at doses from 90 µg/d upward [^vlasschaert2020]. dp-ucMGP is a reliable *mechanistic* biomarker for vitamin K status at the arterial wall; it is not itself validated as a surrogate endpoint predictive of hard cardiovascular outcomes.

### Arterial stiffness — one positive RCT, mixed replication

The most-cited positive K2 RCT is **Knapen 2015** [^knapen2015]: 244 healthy postmenopausal women randomized to 180 µg/d MK-7 or placebo for 3 years. Primary endpoint: carotid femoral pulse-wave velocity (cf-PWV), a measure of arterial stiffness. Results: cf-PWV improved significantly in the MK-7 group vs. placebo, with greater benefit in women with higher baseline arterial stiffness. dp-ucMGP normalized in the treatment arm [^knapen2015].

The replication picture is mixed:

- A 2025 post-hoc analysis (de Vries et al., Nutrients, doi:10.3390/nu17050815) of 165 women (post-hoc from a 243-participant trial, NCT02404519) with low vitamin K status (dp-ucMGP >400 pmol/L) who received **180 µg/d** MK-7 or placebo for 1 year found **significant improvement in Young's modulus (arterial stiffness) in post-menopausal women** (placebo +49.1% ± 77.4; MK-7 +9.4% ± 67.1; adjusted p=0.035), and significantly attenuated vascular stiffness in post-menopausal women with a high stiffness index. However, cf-PWV did not differ significantly between groups in post-menopausal women overall. This is a **confirmatory signal** for the Knapen 2015 finding in the same population type, not a replication failure [^devries2025]. #gap/needs-replication (cf-PWV-specific endpoint was non-significant)
- A 2023 open-label multicenter RCT in hemodialysis patients with arterial stiffness (cfPWV ≥10 m/s; **n=96**, 375 µg/d MK-7, **24 weeks**) found no significant reduction in cfPWV overall (−6.0% vs −6.8%; p=0.24) but did find significant benefit in the diabetic subgroup (p=0.008) [^naiyarakseree2023].

### Aortic valve calcification — negative (AVADEC)

**AVADEC trial** [^diederichsen2022]: 365 men (mean age 71) with aortic valve calcification score >300 AU, randomized to 720 µg/d MK-7 + 25 µg vitamin D3 or placebo for 24 months. Primary endpoint: rate of aortic valve calcification score progression. Result: no significant difference (treatment +275 AU vs. placebo +292 AU; p=0.64). Secondary endpoints including valve area change, peak jet velocity, cardiovascular events, and all-cause mortality all null. dp-ucMGP was significantly reduced in the treatment arm (the expected mechanistic signal), making this a **biomarker-positive, endpoint-negative** trial [^diederichsen2022].

A follow-up JACC Advances paper from the AVADEC group in 2023 [^hasific2023] (n=304 analyzed, excluding participants with prior ischemic heart disease) examined coronary artery calcification (CAC) progression in the same AVADEC cohort. The primary endpoint (CAC change in all participants: placebo +254 AU vs treatment +203 AU; p=0.089) was non-significant but showed a trend. The pre-specified subgroup with baseline CAC ≥400 AU showed a significant difference (placebo +380 AU vs treatment +288 AU; p=0.047). Safety events were fewer in the treatment arm (1.9% vs 6.7%; p=0.048). This is not a cleanly null result — a subgroup signal and safety trend are hypothesis-generating [^hasific2023].

### Aortic valve calcification — one positive signal

**Brandenburg 2017** [^brandenburg2017] (Circulation): 92 patients (primarily CKD/dialysis-dependent) with aortic valve calcification, randomized to vitamin K (K1 + K2) or placebo, ~12 months. Primary endpoint (18F-NaF PET signal, a calcification activity marker) showed slower progression in the vitamin K arm. Important caveats: small n, mixed K1+K2 supplement, high-risk population (CKD baseline), and the imaging endpoint is an activity proxy rather than a CAC score or clinical endpoint [^brandenburg2017].

### Coronary artery calcification — no large completed RCT

No large completed RCT has tested MK-7 or any K2 form against CAC score progression as primary endpoint in a primary-prevention population. **VitaK-CAC** (Vossen et al., design doi:10.3390/nu7115443) is a registered 24-month placebo-controlled trial (n=~200, 360 µg/d MK-7, patients with existing CAD + CAC). Published results not located in PubMed as of 2026-05-08 — possible publication pending or trial terminated #gap/needs-replication.

The largest *completed* CAC RCT used **vitamin K1, not K2**: [[studies/shea-2009-vitamin-k-cac|Shea 2009]] (n=388, 500 µg/d phylloquinone × 3 years) was **intention-to-treat null** for CAC progression (27±6 vs 37±7 Agatston units, p=0.26), with a positive signal only in the ≥85%-adherent per-protocol subgroup (17 vs 37, p=0.03) and in those with pre-existing CAC (25 vs 59, p=0.03) [^shea2009]. It nonetheless carries ~94% of the weight in the Li 2023 CAC meta-analysis (see [[vascular-calcification]]) — a caution about how much that pooled "benefit" rests on a single K1 trial's adherence subgroup rather than a clean K2 primary endpoint.

### Cohort/observational evidence — favorable but confounded

**Rotterdam Study** [^geleijnse2004] (Geleijnse et al., J Nutr 2004): the original epidemiological anchor. In 4807 Dutch adults followed for mean 7.2 years, higher dietary menaquinone intake (K2, largely from cheese and fermented foods) was associated with reduced coronary heart disease mortality — comparing the upper tertile to the lower tertile of K2 intake: RR 0.43 (95% CI 0.24–0.77) after multivariate adjustment. The middle tertile also showed a reduction (RR 0.73, 95% CI 0.45–1.17, not significant). Phylloquinone (K1) intake showed no significant association. Important caveats: K2 sources in Dutch diet are primarily dairy; residual confounding by dairy-pattern diet is plausible; effect sizes are large compared to RCT data, suggesting some confounding [^geleijnse2004].

A 2019 meta-analysis [^chen2019] (n=9 studies, doi:10.1007/s00394-019-01998-3) found that dietary vitamin K2 intake was associated with lower cardiovascular mortality (HR ~0.83, 95% CI 0.72–0.96) and all-cause mortality, while K1 showed weaker associations. Effect sizes are consistent with the Rotterdam cohort but the same confounding caveats apply across observational studies.

**Bellinge 2021** [^bellinge2021] (Danish Diet, Cancer and Health Study, n=53,372, 21-year follow-up, 8,726 ASCVD hospitalizations): highest vs lowest intake of **both** K1 (HR 0.79, 95% CI 0.74–0.84) **and** K2 (HR 0.86, 95% CI 0.81–0.91) was associated with fewer atherosclerotic-CVD hospitalizations. Notably, the protective association is *similar for K1 and K2 despite their very different dietary sources* (K1 from leafy greens, K2 from dairy/meat) — itself a signal that dietary vitamin K is partly a **marker of overall diet quality** rather than a clean causal exposure, reinforcing the adjustment caveat below.

**Adjustment caveat flagged in synthesis analyses:** When K1 associations are fully adjusted for overall diet quality (fruit/vegetable pattern), the K1-cardiovascular association largely disappears. K2 associations are more robust to adjustment, but K2 sources (fermented dairy, natto) are also dietary-quality markers [^vlasschaert2020].

### CKD/dialysis subgroup — more positive signal

Several K2 RCTs show benefit specifically in CKD/hemodialysis populations, where vascular K2 deficiency is extreme:

- Kurnatowska 2015 [^kurnatowska2015] (Pol Arch Med Wewn, n=38 CKD stage 3–5 nondialyzed patients, MK-7 90 µg/d + D3 vs. placebo × 270 days): significantly slower progression of coronary artery calcification and carotid intima-media thickness (cIMT) in the treatment arm.
- Valkyrie Study [^valkyrie2019] (doi:10.1681/ASN.2019060579, n=132 hemodialysis with atrial fibrillation): rivaroxaban ± MK-7 (360 µg/d) — MK-7 arm showed less coronary calcification progression vs. rivaroxaban-only arm, supporting K2 protective role in VKA-replacement context.

**The CKD subgroup pattern** suggests that K2 supplementation is most likely to demonstrate benefit in populations with both extreme K2 deficiency and active vascular calcification, rather than in the general population where K2 sufficiency varies.

### Diabetes subgroup — negative

The MK-7 + type 2 diabetes trial [^dalmeijer2019] (doi:10.1093/ajcn/nqz147, n=100 T2DM patients, 360 µg/d MK-7 × 6 months, vascular calcification primary endpoint): no significant effect on vascular calcification score despite significant dp-ucMGP reduction. A 6-month K supplementation post-hoc in T2DM patients (doi:10.1016/j.atherosclerosis.2023.117307, Atherosclerosis 2024) also null for calcification propensity time.

### Combined with vitamin D3 — the calcium-partitioning hypothesis

Vitamin K2 is frequently co-supplemented with [[vitamin-d]] (D3) on the rationale that calcitriol upregulates synthesis of the Gla proteins MGP and osteocalcin while K2 supplies the cofactor to γ-carboxylate (activate) them — together partitioning calcium into bone and away from arteries (the "calcium paradox"). The mechanism is plausible and the biomarker engagement (dp-ucMGP, ucOC) is real, but the only RCT to test the **combination on a hard structural endpoint — AVADEC (K2 720 µg + D3) — was null** for aortic-valve calcification progression, and the large D3 monotherapy trials are null on mortality/CVD. See [[hypotheses/d3-k2-calcium-partitioning]] for the full, evidence-graded synthesis.

## Bone evidence

**Knapen 2013** [^knapen2013] (Osteoporosis International, doi:10.1007/s00198-013-2325-6): 244 healthy postmenopausal women, 180 µg/d MK-7 × 3 years, randomized placebo-controlled. Primary endpoint: bone mineral density (BMD) and bone mineral content (BMC) at lumbar spine and femoral neck. Results: MK-7 significantly reduced the age-related decline in BMC and BMD at lumbar spine; favorable effect on vertebral height loss in lower thoracic region. Bone strength (stiffness index) improved. This is the **best-powered bone trial** for MK-7 at supplement doses.

**Note:** The 3-year Knapen 2013 trial uses 180 µg/d — the same dose and duration as the arterial-stiffness trial (Knapen 2015) published separately from the same study. These are likely derived from the same cohort or related Maastricht studies; the bone and vascular endpoints were assessed in parallel.

## Dose-response summary

The evidence picture differs substantially by dose and endpoint:

| Dose (MK-7/day) | dp-ucMGP normalization | Bone endpoint | Arterial stiffness | Calcification (CAC/AVC) |
|---|---|---|---|---|
| 45–90 µg | Partial | No direct trial; 90 µg may be below threshold for arterial endpoints | Insufficient data — no trial at this dose for arterial endpoints | Insufficient data |
| 180 µg | Reliable [^knapen2015] | Full bone benefit at 180 µg (Knapen 2013) | **Positive cf-PWV (Knapen 2015); Positive Young's modulus in post-menopausal women with low K status (de Vries 2025 [^devries2025])** | Not directly tested |
| 360 µg | Reliable | Not primary endpoint | Hemodialysis patients (n=96, 375 µg/d, 24 wk): null overall, positive in diabetic subgroup [^naiyarakseree2023] | VitaK-CAC: results pending; T2DM: null [^dalmeijer2019] |
| 720 µg | Reliable [^diederichsen2022] | Not tested | Not primary endpoint | **Null for AVC (AVADEC [^diederichsen2022]); CAC ≥400 AU subgroup: p=0.047 trend [^hasific2023])** |

**Key dose-response interpretation:** 180 µg/d is the **dose with the most consistent positive arterial signals** — both Knapen 2015 (cf-PWV) and de Vries 2025 (Young's modulus, post-menopausal women with low K status) showed benefit. Higher doses (360–720 µg/d) achieve reliable dp-ucMGP normalization but have not improved hard arterial or calcification endpoints in general populations. The exception is the hemodialysis diabetic subgroup (Naiyarakseree 2023) and the Hasific 2023 CAC ≥400 AU subgroup signal. Whether a ceiling effect exists above 180 µg/d for arterial stiffness endpoints in replete populations, or whether population K-status at baseline is the key modifier, is unresolved.

**Practical anchors for dose decisions:**
- 90 µg/d: daily intake commonly recommended for general sufficiency; likely achieves partial dp-ucMGP normalization.
- 180 µg/d: the dose in the only positive arterial-stiffness RCT (Knapen 2015); also the dose in the bone-benefit trial.
- The standard Natto-derived MenaQ7 supplement dose in most clinical studies is 180–360 µg/d. Trial-supported minimum for arterial signaling is 180 µg/d.

## Safety and drug interactions

**Safety:** Vitamin K2 has a wide safety margin and no established Tolerable Upper Limit (UL) set by EFSA or IOM. No dose-limiting toxicity has been identified at doses up to 720 µg/d in 2-year trials. Long-term safety beyond 3 years is not established, though no signals have emerged #gap/long-term-unknown.

**Critical interaction — warfarin and coumarin anticoagulants:**
- Vitamin K is the direct pharmacological target of warfarin/acenocoumarol (VKA agents), which inhibit VKORC1 (the vitamin K recycling enzyme). Any K2 supplementation in a patient on VKAs will **shift the INR toward under-anticoagulation** and may require warfarin dose upward adjustment. MK-7's long half-life (~3 days) makes INR management considerably harder than K1, because even a missed supplement dose creates INR fluctuation over days.
- **This interaction is clinically serious.** K2 supplementation is contraindicated or requires close INR monitoring in VKA-treated patients.
- **DOACs (apixaban, rivaroxaban, dabigatran, edoxaban) are NOT vitamin-K-dependent** and have no pharmacokinetic interaction with vitamin K2. Patients on DOACs can supplement K2 without INR concern.
- **Aspirin** is also NOT vitamin-K-dependent. No pharmacokinetic interaction.

In the Valkyrie trial [^valkyrie2019], patients receiving MK-7 360 µg/d alongside rivaroxaban (not warfarin) showed no excess bleeding events, consistent with the above.

## Clinical translation gap

The mechanistic narrative for K2 and arterial aging is coherent and plausible:
1. Aging and K2 dietary insufficiency → elevated dp-ucMGP → insufficient MGP carboxylation in arterial media → uncontrolled Ca²⁺ crystal nucleation → progressive medial calcification → increased arterial stiffness → elevated CV risk.

Steps 1 (K2 deficiency is common in older adults) and 2 (K2 supplementation lowers dp-ucMGP) are well-established. Step 3 (MGP carboxylation inhibits calcification) is established in animal models and correlational human data. Steps 4–5 (K2 supplementation reduces calcification → reduces CV risk) are **not yet established by RCT evidence** in primary-prevention populations.

The most honest current framing:
- K2 supplementation reliably improves an upstream mechanistic biomarker (dp-ucMGP).
- The only positive arterial-endpoint RCT in a healthy population (Knapen 2015 cf-PWV) has not been replicated.
- The largest and best-powered calcification RCTs (AVADEC, aortic valve; VitaK-CAC, coronary, pending) are null or absent.
- Positive signals are clustered in metabolically-compromised populations (CKD, dialysis) with extreme baseline K2 deficiency.
- There is no evidence that K2 supplementation **reverses** existing arterial calcification. The hypothesis is inhibition of new deposition, not reversal.

**What is needed to resolve the gap:** A well-powered, long-duration (≥3 years) RCT in adults with early CAC (CAC score 1–400) using ≥180 µg/d MK-7, with MACE as a primary endpoint rather than a surrogate calcification score. No such trial is currently registered or recruiting as of 2026-05-08 per ClinicalTrials.gov search.

## Aging context

Arterial medial calcification accelerates with aging; dp-ucMGP levels rise with age in community-dwelling adults, suggesting K2 functional insufficiency is prevalent in older adults even with adequate dietary intake [^vlasschaert2020]. This makes vascular K2 carboxylation a plausible age-related deficit mechanism connecting to [[chronic-inflammation]] through Gas6/TAM receptor signalling (Gas6 carboxylation modulates macrophage clearance of apoptotic cells; impaired efferocytosis → unresolved inflammation). The Gas6 aging angle is understudied relative to MGP.

Vitamin K2 represents a low-risk, low-cost hedging intervention for arterial aging with mechanistic plausibility, weak positive observational data, a single replicated arterial stiffness RCT, and null hard-endpoint data. It is not a validated anti-calcification therapy at current evidence standards.

## Knowledge gaps

- #gap/needs-replication — Knapen 2015 cf-PWV benefit (180 µg/d MK-7, postmenopausal women) has been partially supported by de Vries 2025 (Young's modulus, same population at same dose) but the specific cf-PWV finding has not been replicated in a fully independent powered trial. A definitive 3-year independent RCT at 180 µg/d in postmenopausal women powering for cf-PWV is still lacking.
- #gap/dose-response-unclear — Whether doses above 180 µg/d add any arterial endpoint benefit over 180 µg/d in replete populations; AVADEC at 720 µg/d was null for AVC while Knapen 2015 at 180 µg/d was positive for cf-PWV. Baseline vitamin K status may be a key moderator (de Vries 2025 enrolled only low-K-status women and showed benefit).
- #gap/needs-replication — VitaK-CAC trial results (MK-7 360 µg/d × 24 months in CAD patients with CAC) not published as of 2026-05-08.
- #gap/no-mechanism — Gas6 carboxylation role in aging and inflammation is understudied; most K2 mechanistic literature focuses exclusively on MGP.

## Footnotes

[^schurgers2007]: doi:10.1182/blood-2006-08-040709 · Schurgers LJ et al. · Blood 2007 · pharmacokinetic comparison; MK-7 half-life ~68 hours (~2.8 days) vs K1 ~1.5 hours; MK-7 accumulates 7–8-fold over prolonged intake vs K1; osteocalcin carboxylation more complete with MK-7 · observational PK study · model: healthy adults

[^vlasschaert2020]: [[studies/vlasschaert-2020-vitK-cv-systematic-review]] · doi:10.3390/nu12102909 · Vlasschaert C, Goss CJ, Pilkey NG, McKeown S, Holden RM · *Nutrients* 2020;12(10):2909 · systematic-review · "Vitamin K Supplementation for the Prevention of Cardiovascular Disease: Where Is the Evidence?" — qualitative synthesis of controlled trials; RCT evidence for CV benefit rated insufficient across all endpoints except dp-ucMGP normalization · (citation key/slug corrected from a prior "vermeer2020" misattribution 2026-06-14; first author is Vlasschaert, not Vermeer — the linked studies/ page is not yet seeded)

[^knapen2015]: [[studies/knapen-2015-mk7-arterial-stiffness]] · doi:10.1160/TH14-08-0675 · Knapen MHJ, Braam LAJLM, Drummen NE, Bekers O, Hoeks APG, Vermeer C · Thrombosis and Haemostasis 2015 · n=244 postmenopausal women · rct · primary endpoint cf-PWV improved significantly in MK-7 arm (p<0.05); effect larger in women with highest baseline stiffness; dp-ucMGP normalized · model: healthy postmenopausal women · PDF not available (not_oa)

[^knapen2013]: [[studies/knapen-2013-mk7-bone-density]] · doi:10.1007/s00198-013-2325-6 · Knapen MHJ, Drummen NE, Smit E, Vermeer C, Theuwissen E · Osteoporosis International 2013 · n=244 postmenopausal women · rct · 3-year MK-7 180 µg/d significantly reduced lumbar spine and femoral neck BMD decline; improved vertebral height · model: healthy postmenopausal women

[^diederichsen2022]: [[studies/diederichsen-2022-avadec-aortic-valve]] · doi:10.1161/CIRCULATIONAHA.121.057008 · Diederichsen ACP et al. (18 authors) · Circulation 2022 · n=365 men, mean age 71, AVC score >300 AU · rct · 2-year 720 µg/d MK-7 + 25 µg D3 · primary endpoint AVC progression: treatment +275 AU vs placebo +292 AU, p=0.64, null · dp-ucMGP reduced significantly in treatment arm · model: men with established aortic valve calcification

[^hasific2023]: [[studies/hasific-2023-avadec-cad]] · doi:10.1016/j.jacadv.2023.100643 · Hasific S et al. · JACC Advances 2023 · n=304 analyzed (149 placebo, 155 intervention; from AVADEC cohort, excluding prior ischemic heart disease) · rct substudy · 720 µg/d MK-7 + 25 µg D3 × 24 months; primary endpoint (CAC all participants) p=0.089 (NS trend); CAC ≥400 AU subgroup: p=0.047 (significant); safety events fewer in treatment arm (p=0.048) · model: men 65–74 with AVC ≥300 AU, no prior MI

[^geleijnse2004]: [[studies/geleijnse-2004-rotterdam-menaquinone-chd]] · doi:10.1093/jn/134.11.3100 · Geleijnse JM, Vermeer C, Grobbee DE et al. · J Nutr 2004 · n=4807 · observational (prospective cohort) · Rotterdam Study; dietary K2 intake upper tertile vs lower tertile: CHD mortality RR 0.43 (95% CI 0.24–0.77); K1 not significantly associated; follow-up through Jan 2000 (mean ~7.2 yr) · model: Dutch adults age 55+ (enrolled 1990–1993)

[^chen2019]: [[studies/chen-2019-vitK-cv-meta-analysis]] · doi:10.1007/s00394-019-01998-3 · J Nutr 2019 cohort meta-analysis · systematic-review + meta-analysis · n=9 studies · dietary K2 associated with lower CV mortality HR ~0.83 (0.72–0.96); K1 weaker association

[^shea2009]: [[studies/shea-2009-vitamin-k-cac]] · doi:10.3945/ajcn.2008.27338 · PMID 19386744 · Shea MK, O'Donnell CJ, Hoffmann U et al. · *Am J Clin Nutr* 2009;89(6):1799–1807 · rct · n=388 healthy older adults, 3 years; 500 µg/d phylloquinone (K1) added to a calcium-600 mg + vitamin-D-400 IU multivitamin (n=200) vs the same calcium+D multivitamin without K1 (n=188) · **ITT null** for CAC progression (27±6 vs 37±7 Agatston, p=0.26); per-protocol ≥85%-adherent positive (17 vs 37, p=0.03); pre-existing-CAC subgroup positive (25 vs 59, p=0.03) · K1 trial that carries ~94% of the Li 2023 CAC meta weight despite a null primary endpoint · model: homo-sapiens (community-dwelling older adults)

[^bellinge2021]: doi:10.1161/JAHA.120.020551 · PMID 34369182 · Bellinge JW, Dalgaard F, Murray K et al. · *J Am Heart Assoc* 2021;10(16):e020551 · observational (prospective cohort) · Danish Diet, Cancer and Health Study; n=53,372, median 21-yr follow-up, 8,726 ASCVD hospitalizations · highest vs lowest intake: K1 HR 0.79 (95% CI 0.74–0.84), K2 HR 0.86 (95% CI 0.81–0.91) for ASCVD hospitalization, multivariable-adjusted · similar K1 and K2 associations despite very different dietary sources — consistent with vitamin K as a partial diet-quality marker · model: Danish adults (median age 56, no prior ASCVD)

[^kurnatowska2015]: [[studies/kurnatowska-2015-k2-ckd-calcification]] · doi:10.20452/pamw.3041 · Kurnatowska I et al. · Pol Arch Med Wewn 2015 · n=38 CKD stages 3–5 · rct · 270 days MK-7 90 µg/d + D3; significantly slower CAC and cIMT progression in treatment arm · model: CKD nondialyzed patients

[^valkyrie2019]: [[studies/valkyrie-2019-hemodialysis-mk7]] · doi:10.1681/ASN.2019060579 · ASN 2019 · n=132 hemodialysis patients with atrial fibrillation · rct · rivaroxaban ± MK-7 360 µg/d; less coronary calcification progression in MK-7 arm

[^dalmeijer2019]: [[studies/dalmeijer-2019-mk7-diabetes-calcification]] · doi:10.1093/ajcn/nqz147 · Am J Clin Nutr 2019 · n=100 T2DM patients · rct · 360 µg/d MK-7 × 6 months; no significant effect on vascular calcification despite dp-ucMGP normalization

[^devries2025]: [[studies/devries-2025-mk7-arterial-stiffness-postmenopausal]] · doi:10.3390/nu17050815 · Nutrients 2025 · n=165 women (post-hoc from NCT02404519; 78 pre/peri-menopausal, 87 post-menopausal) with dp-ucMGP >400 pmol/L (low vitamin K status); n=82 MK-7, n=83 placebo · post-hoc analysis of rct · 1-year MK-7 180 µg/d; dp-ucMGP significantly reduced in post-menopausal women (p<0.001); Young's modulus (arterial stiffness) significantly attenuated in post-menopausal women (placebo +49.1% ± 77.4 vs MK-7 +9.4% ± 67.1; adjusted p=0.035); cf-PWV change not significant in post-menopausal women overall; significant blood pressure improvement in high-stiffness subgroup · model: pre/peri- and post-menopausal women with low vitamin K status

[^naiyarakseree2023]: [[studies/naiyarakseree-2023-mk7-hemodialysis-stiffness]] · doi:10.3390/nu15112422 · Nutrients 2023 · n=96 chronic hemodialysis patients with arterial stiffness (cfPWV ≥10 m/s); n=50 MK-7, n=46 control · open-label rct · 24-week MK-7 375 µg/d; no significant reduction in cfPWV overall (−6.0% vs −6.8%; p=0.24); significant benefit in diabetic subgroup (p=0.008)

[^brandenburg2017]: [[studies/brandenburg-2017-aortic-valve-vitaminK]] · doi:10.1161/CIRCULATIONAHA.116.027011 · Brandenburg VM et al. · Circulation 2017 · n=92 primarily CKD/dialysis patients with aortic valve calcification · rct · vitamin K (K1+K2 combination) × ~12 months; 18F-NaF PET calcification activity slower in treatment arm (positive signal, mixed K1+K2 supplement, high-risk population)
