---
type: compound
aliases: [phylloquinone, menaquinone, vitamin K1, vitamin K2, MK-7, menaquinone-7, MK-4, menaquinone-4, K1, K2, fat-soluble vitamin K, VKDPs cofactor]
pubchem-cid: 5284607
pubchem-cid-alt: 5287554
administration-route: oral
biologic: false
molecular-formula: "C31H46O2 (K1); C46H64O2 (MK-7)"
molecular-weight-da: "450.7 (K1 phylloquinone); 649.0 (MK-7 menaquinone-7); 580.9 (MK-4 menaquinone-4)"
mechanisms: [gamma-carboxylation-cofactor]
targets: ["[[matrix-gla-protein]]", "[[ggcx]]", "[[vkor]]"]
hallmarks: ["[[altered-intercellular-communication]]"]
clinical-stage: supplement
human-evidence-level: limited
translation-gap: biomarker-only
next-experiment: "A 3-year double-blind RCT in non-CKD adults aged 55–75 with elevated baseline dp-ucMGP (>400 pmol/L) and CAC score 1–400 (intermediate calcification), randomized to MK-7 180 µg/day vs placebo, with CAC progression (Agatston units) as the primary endpoint and carotid-femoral PWV as secondary — this would resolve whether MK-7's established dp-ucMGP reduction translates to structural anti-calcification benefit in non-CKD aging."
clinical-trials-active: 7
literature-checked-through: 2026-06-02
verified: true
verified-date: 2026-06-02
verified-by: claude
verified-scope: "Diederichsen 2022 (Circulation), Li/Wang 2023 (Front Nutr), Murali 2023 (JAHA), and de Vries 2025 (Nutrients) verified against full local PDFs. Knapen 2015 verified against PubMed abstract only (#gap/no-fulltext-access; key quantitative claims in the abstract match wiki). Schurgers 2007, Schurgers 2013, Bladbjerg 2024, Naiyarakseree 2023, Levy-Schousboe 2023, El Borolossy 2022 not re-read against full text — archive status: not_oa, not_oa, not_oa, PDF available, pending download, PDF available respectively; claims derived from abstract/prior seeder extraction for these. PubChem CIDs 5284607 (K1) and 5287554 (MK-7) confirmed via live PubChem REST API. ChEMBL IDs not verified — API returned 500 at verification time; omitted from frontmatter. clinical-trials-active count methodology documented in footnote."
---

# Vitamin K (Family Page)

The fat-soluble vitamin family serving as the obligatory cofactor for **gamma-glutamyl carboxylase (GGCX)**, the enzyme responsible for gamma-carboxylation of glutamate residues (converting Glu to Gla) on vitamin K-dependent proteins (VKDPs). Without sufficient reduced vitamin K, VKDPs remain as uncarboxylated, functionally inert forms — the coagulation consequences (prolonged clotting time) are the well-known clinical marker, but the extrahepatic consequences in vascular and bone tissues are the aging-relevant axis.

**Scope note:** This page covers the **vitamin K family** with the K1 (phylloquinone) versus K2 (menaquinones, especially MK-7) distinction as the central aging-relevant axis. The primary canonical form (PubChem CID 5284607) is K1 phylloquinone — the most abundant dietary form and the benchmark for coagulation studies. The primary alt form (PubChem CID 5287554) is MK-7 — the form with the largest anti-aging and vascular evidence base. MK-4 (PubChem CID 5282367) is documented in the identity section but is not a primary focus. Individual sub-form pages may be seeded later if warranted by evidence depth.

## Identity

| Field | K1 (phylloquinone) | MK-7 (menaquinone-7) | MK-4 (menaquinone-4) |
|---|---|---|---|
| **PubChem CID** | 5284607 | 5287554 | 5282367 |
| **Common name** | Vitamin K1, phylloquinone | Vitamin K2 MK-7 | Vitamin K2 MK-4 |
| **Molecular formula** | C₃₁H₄₆O₂ | C₄₆H₆₄O₂ | C₃₁H₄₀O₂ |
| **Molecular weight** | 450.7 Da | 649.0 Da | 580.9 Da |
| **InChIKey** | MBWXNTAXLNYFJB-NKFFZRIASA-N | RAKQPZMEYJZGPI-LJWNYQGCSA-N | — |
| **Source** | Plant-derived (leafy greens, vegetable oils) | Bacterial fermentation; natto (fermented soybeans); some hard cheeses | Animal products; biosynthetically converted from K1 by tissue-specific enzymes (including brain) |
| **Plasma half-life** | ~1 hour | ~3 days | ~1–2 hours |
| **Hepatic preference** | High | Lower; superior peripheral tissue distribution | Moderate |

**Critical pharmacokinetic difference:** MK-7's ~3-day half-life (compared to ~1 hour for K1) enables sustained tissue distribution, including to extrahepatic sites such as the vascular wall. This is the pharmacokinetic basis for the MK-7 positioning for vascular and bone endpoints — not a distinct mechanism, but superior substrate delivery to peripheral GGCX.

## Mechanism of action

### The vitamin K cycle (GGCX/VKOR)

Vitamin K functions as a cofactor via a two-step enzymatic cycle [^stafford1995]:

1. **Gamma-carboxylation (GGCX step):** Vitamin K hydroquinone (KH2, the reduced active form) is oxidised to vitamin K epoxide during GGCX catalysis. GGCX uses this oxidation energy to carboxylate glutamate residues on VKDPs — adding a second carboxyl group to form gamma-carboxyglutamate (Gla). Each Gla residue gains calcium-chelating capacity.
2. **Epoxide reductase (VKOR step):** Vitamin K epoxide is regenerated to the active hydroquinone (KH2) by the **vitamin K epoxide reductase complex** ([[vkor]], gene *VKORC1*). This regeneration allows a single molecule of vitamin K to be reused in multiple carboxylation cycles.
3. **Warfarin block:** Warfarin (and acenocoumarol, phenprocoumon) inhibit VKOR, depleting KH2 and preventing GGCX from carboxylating VKDPs in all tissues — both hepatic coagulation factors and extrahepatic substrates including MGP [^schurgers2013].

### Vitamin K-dependent proteins (VKDPs) relevant to aging

| Protein | Location | Requires Gla? | Aging relevance |
|---|---|---|---|
| Prothrombin (Factor II), VII, IX, X | Liver/plasma | Yes — Gla-domain essential for phospholipid binding | Coagulation; warfarin target; not direct aging mechanism |
| **Matrix Gla Protein (MGP)** | Vascular smooth muscle, cartilage | **Yes** — uncarboxylated ucMGP is biologically inert | **Primary anti-calcification factor in the arterial wall; the central aging-relevant VKDP** — see [[matrix-gla-protein]] |
| Osteocalcin (BGLAP) | Bone, osteoblasts | Yes | Bone mineralisation marker; some endocrine functions claimed (disputed) |
| Gas6 (Growth Arrest-Specific 6) | Widely expressed | Yes | TAM receptor (Tyro3/Axl/MerTK) ligand; roles in cell survival, inflammation, efferocytosis |
| Protein S | Liver/plasma | Yes | Anticoagulant cofactor for activated Protein C |

MGP is the central VKDP for the aging/vascular calcification axis. For the full mechanistic description see [[matrix-gla-protein]].

### K1 vs K2 — the hepatic-preferential split

- **Vitamin K1 (phylloquinone):** Rapidly cleared by the liver (~1-hour plasma half-life). Efficient for hepatic VKDP carboxylation (coagulation factors, Protein S/C). Limited peripheral tissue accumulation. The majority of dietary vitamin K in Western diets.
- **Vitamin K2 (menaquinones, especially MK-7):** The extended half-life (~72 hours for MK-7) enables accumulation in extrahepatic tissues — most critically, the vascular wall. When vascular vitamin K status is assessed via dp-ucMGP (the circulating biomarker of extrahepatic GGCX activity), MK-7 supplementation reduces dp-ucMGP far more effectively than equivalent mass doses of K1 [^schurgers2007].

This pharmacokinetic split is the mechanistic justification for using MK-7 — not K1 — for the vascular calcification indication.

## Biomarker: dp-ucMGP

Dephosphorylated-uncarboxylated MGP (dp-ucMGP) is the validated clinical biomarker of extrahepatic vitamin K insufficiency. It is inversely proportional to vascular vitamin K status:

- **High dp-ucMGP** → insufficient K2 reaching the vascular wall → MGP not carboxylated → calcification risk elevated
- **Low dp-ucMGP** → adequate vascular K2 status → MGP activated → anti-calcification function preserved

Reference ranges vary by assay (InaKtif MGP, ELISA-based), but dp-ucMGP > 400–500 pmol/L is commonly used to define "low extrahepatic vitamin K status" in RCT inclusion criteria [^devries2025].

MK-7 supplementation at 180 µg/day consistently reduces dp-ucMGP by 25–50% in RCTs regardless of underlying population (healthy postmenopausal women, CKD/hemodialysis patients, diabetic patients) — this is the most reproducible pharmacodynamic effect. Whether this biomarker reduction translates to structural (calcification) or functional (arterial stiffness) benefit is the open question (see Human Evidence section).

## Clinical evidence

### Coagulation — well-established, not the aging axis

Vitamin K's role in coagulation (hepatic carboxylation of factors II, VII, IX, X) is foundational biochemistry established over decades. Dietary vitamin K deficiency (rare in adults; occurs in fat malabsorption syndromes, prolonged antibiotic use, or neonates) causes coagulopathy. Warfarin anticoagulation operates entirely through this VKOR/coagulation pathway. This is **not in dispute** and carries no relevant translation gap. The evidence is strong for coagulation, but this page focuses on extrahepatic aging-relevant effects.

### Vascular calcification and arterial stiffness — limited surrogate-endpoint evidence

**Knapen 2015 (strongest positive arterial stiffness RCT):** Double-blind, placebo-controlled RCT in n=244 healthy postmenopausal women, MK-7 180 µg/day vs placebo, 3 years. Primary endpoints: carotid-femoral PWV (cfPWV) and Stiffness Index β — both decreased significantly in MK-7 vs placebo in the overall group; benefit greatest in women with above-median baseline stiffness. Local carotid PWV improved significantly in the above-median-stiffness subgroup. dp-ucMGP reduced ~50%. No effect on acute-phase markers or endothelial function markers [^knapen2015]. Key limitation: postmenopausal women only; 3-year treatment window.

**de Vries 2025 (post-hoc, 1-year, low-K-status cohort):** Post-hoc analysis of NCT02404519, n=165 women with elevated dp-ucMGP (>400 pmol/L), MK-7 180 µg/day vs placebo. Vascular stiffness significantly attenuated in post-menopausal women only (Young's modulus: MK-7 +9.4% ± 67.1 vs placebo +49.1% ± 77.4; adjusted p=0.035). Blood pressure effect (−3.0%, p=0.007) was in a post-hoc high-stiffness-index subgroup (n=26), not the overall analysis. dp-ucMGP significantly reduced [^devries2025]. Caveat: post-hoc; women only; industry-funded.

**Diederichsen 2022 Circulation trial (negative hard-endpoint RCT):** The most rigorous trial to date for a structural endpoint. Double-blind, multicenter RCT, n=365 elderly men (mean age 71.0 ± 4.4 years), **720 µg MK-7/day + 25 µg vitamin D** vs placebo, 24 months, with **aortic valve calcification (AVC) progression** as the primary endpoint (Agatston CT score). Result: no significant difference in AVC progression (treatment effect −17 AU, 95% CI −86 to +53; p=0.64) — a non-significant trend favouring treatment that did not reach significance. dp-ucMGP decreased significantly in the treatment group (−212 pmol/L vs +45 pmol/L in placebo; p<0.001). Interpretation: 720 µg/day MK-7 reliably reduces the biomarker (dp-ucMGP) but did not translate to reduced structural calcification in the aortic valve in this 2-year trial [^diederichsen2022]. This is the key null trial; it does not preclude benefit in medial arterial calcification (a different tissue compartment) but sets a cautionary precedent for assuming biomarker → structural endpoint translation. The dose (720 µg/day) was 4× higher than the Knapen/de Vries trials, making under-dosing an unlikely explanation for the null result.

**Naiyarakseree 2023 (hemodialysis, multicenter RCT):** Open-label, n=96 CKD hemodialysis patients, MK-7 375 µg/day vs standard care, 24 weeks. Primary endpoint cfPWV: no significant overall difference (MK-7 −6.0% vs control −6.7%; p=0.24). Pre-specified diabetic subgroup (n=16/14): significant improvement (MK-7 −10.0% vs control +3.8%; p=0.008). CKD-specific context with extreme baseline K deficiency; limited generalizability to non-CKD aging [^naiyarakseree2023].

**Li/Wang 2023 meta-analysis:** 14 RCTs (1,842 enrolled; 1,533 in analysis); CAC-specific sub-analysis (4 RCTs, n=424): vitamin K supplementation slowed CAC progression (MD = −17.37 Agatston units; 95% CI −34.18 to −0.56; p=0.04; I²=34%). The positive signal is dominated by the Shea 2009 community-dwelling trial (94.4% weight in fixed-effects). dp-ucMGP analysis (7 trials, n=578): robustly reduced (MD −243.31; 95% CI −366.08 to −120.53; p=0.0001; I²=71%) [^li2023].

**Murali 2023 systematic review (contradictory, non-CKD focus):** 49 RCTs (n=9,901), explicitly excluding CKD. Vitamin K: 5 RCTs (n=1,074) — classified as **"possibly reduces progression"** (same tier as other uncertain interventions, not a flat positive). Concludes "the vitamin K pathway may not represent a therapeutic target to mitigate this in a non-CKD cohort." Only 1 of 5 vitamin K trials (Shea 2009, in adherent/mild-CAC participants) achieved its primary endpoint [^murali2023]. #gap/contradictory-evidence

**Framing the discordance:** The Li 2023 meta-analysis positive CAC result is dominated by Shea 2009 (a community-dwelling trial). Murali 2023 applied stricter non-CKD inclusion and reached a negative conclusion — the discordance reflects different inclusion criteria and endpoint heterogeneity rather than a clean CKD vs non-CKD split. The Diederichsen 2022 trial (the largest and most rigorous structural endpoint trial) was **null for aortic valve calcification**. Overall interpretation: the dp-ucMGP biomarker effect of MK-7 is robust and reproducible; the structural (CAC) and functional (PWV) endpoint evidence is mixed and inadequately powered in non-CKD adults. **Hard cardiovascular outcome data (MI, CV death, stroke) do not yet exist for MK-7 in any population.** #gap/needs-human-replication

### Bone — limited and conflicting

Osteocalcin (bone Gla protein, BGLAP) is a VKDP expressed by osteoblasts. Like MGP, uncarboxylated osteocalcin (ucOC) is inert. Vitamin K supplementation reduces ucOC, and observational data link higher MK-7 intake to higher bone mineral density. However:

- The RenaKvit trial (Levy-Schousboe 2023, n=123 dialysis patients, MK-7 vs placebo, 24 weeks) found MK-7 **accelerated** BMD loss at the distal radius while **preventing** lumbar spine BMD decline. The authors explicitly conclude findings "do not support MK-7 supplementation to preserve bone" in dialysis patients [^lewy2023].
- A pediatric CKD RCT (El Borolossy 2022, n=60, MK-7 100 µg/day + vitamin D) showed significant dp-ucMGP and ucOC reduction with combined K2+D, suggesting the combination may have greater bone effect [^elborolossy2022].
- Non-CKD adult bone-specific RCT evidence is limited; bone endpoint results do not consistently support supplementation independent of adequate vitamin D status.

### Coagulation safety of MK-7 supplementation

A relevant concern for oral MK-7 supplementation is potential interference with warfarin anticoagulation. **Bladbjerg 2024** (double-blind, n=123 dialysis patients, MK-7 360 µg/day, 1 year) found **no detectable effect on biomarkers of coagulation activation** in non-anticoagulated patients. PIVKA-II (uncarboxylated prothrombin, an index of hepatic vitamin K sufficiency) decreased in the MK-7 group, confirming pharmacodynamic activity, but coagulation pathway activation was not stimulated [^bladbjerg2024]. This supports a safety profile consistent with the hypothesis that MK-7 at supplemental doses preferentially serves extrahepatic (GGCX) needs without triggering procoagulant overshoot in patients with normal clotting. **Caveat:** patients on warfarin represent a specific population where MK-7 should not be used without hematology guidance — it would antagonize anticoagulation.

## Warfarin and the vascular calcification paradox

Warfarin is among the most prescribed medications globally for atrial fibrillation, venous thromboembolism, and mechanical heart valves. Its anti-K2 pharmacology is directly relevant to aging:

- Warfarin inhibits VKOR → depletes KH2 in all tissues → MGP in the vascular wall remains uncarboxylated → accelerated vascular calcification
- Clinical studies show warfarin users have measurably higher dp-ucMGP and higher coronary calcification scores than matched controls [^schurgers2013]
- This is a well-documented iatrogenic calcification mechanism — the very drug preventing thromboembolism accelerates vascular mineral deposition via the anti-K2 side effect
- The clinical relevance: direct oral anticoagulants (DOACs — apixaban, rivaroxaban, edoxaban, dabigatran) do not inhibit VKOR and do not affect vitamin K cycle — a potential CV advantage in the long-term aging context #gap/needs-human-replication — head-to-head DOAC vs warfarin vascular calcification RCT data are limited

## Dietary sources and typical intake

| Source | Vitamin K form | Approximate content |
|---|---|---|
| Leafy greens (kale, spinach, collards) | K1 (phylloquinone) | 100–800 µg/100 g |
| Vegetable oils (soybean, canola) | K1 | 50–200 µg/100 mL |
| Natto (fermented soybeans) | MK-7 | ~900–1100 µg/100 g |
| Hard cheeses (Gouda, Edam) | MK-7 + MK-8, MK-9 | 20–75 µg/100 g |
| Curd/soft cheeses, butter | MK-4, low MK-7 | 5–15 µg/100 g |
| Liver, poultry dark meat | MK-4 | 10–60 µg/100 g |

Western diets are generally K1-adequate (from vegetables/oils) but **K2-insufficient** — natto is not broadly consumed outside Japan. The typical Western diet provides ~5–15 µg/day MK-7 from cheese sources, compared to the 180 µg/day used in the Knapen and de Vries RCTs. This dietary gap underlies the supplementation rationale.

## Pharmacokinetics summary

- **Absorption:** Fat-soluble; requires dietary fat for micelle incorporation and chylomicron-mediated absorption from the small intestine. All forms require fat co-ingestion for adequate bioavailability.
- **K1 plasma half-life:** ~1 hour (rapidly taken up by liver).
- **MK-7 plasma half-life:** ~3 days (accumulates in VLDL and subsequently distributes to peripheral tissues, including arterial wall, adipose, and bone).
- **MK-4 conversion:** K1 can be converted to MK-4 in certain tissues (brain, testis) by a tissue-specific side chain cleavage and prenylation step; this conversion is not the primary route of MK-4 acquisition and is of limited quantitative importance for the vascular wall.
- **No upper tolerance level established** in non-anticoagulated patients at supplement doses (≤1000 µg/day MK-7); no toxicity signals at doses used in RCTs.

## Aging hallmark intersections

| Hallmark | Mechanism | Evidence tier |
|---|---|---|
| [[altered-intercellular-communication]] | MGP carboxylation prevents vascular calcification → preserves arterial compliance → maintains systemic vascular-wall-to-systemic-circulation signalling milieu; warfarin-accelerated calcification impairs this | Mechanistic in humans (surrogate-endpoint RCTs); hard outcome data absent |
| [[chronic-inflammation]] | Vascular calcification drives macrophage recruitment and SASP at the arterial wall (secondary effect); also, Gas6 (a VKDP) modulates TAM receptor signalling involved in efferocytosis and inflammation resolution | Mechanistic; no direct anti-inflammatory RCT endpoint for MK-7 |

**Hallmark selection rationale:** The primary hallmark link is [[altered-intercellular-communication]] because the clinically relevant aging effect — vascular calcification → arterial stiffening — operates via degraded systemic vascular communication (pulse pressure transmission, baroreceptor dysfunction, end-organ micro-damage). [[chronic-inflammation]] is a downstream consequence of calcification-driven VSMC phenotypic switching but is secondary to the primary mechanism. No direct link to [[deregulated-nutrient-sensing]] or other hallmarks has primary-source support for vitamin K specifically.

## Human evidence summary

| Context | Endpoint | Verdict |
|---|---|---|
| Coagulation factor carboxylation | PT/INR, clotting | Well-established; foundational biochemistry |
| dp-ucMGP reduction | MK-7 supplementation | Robust and reproducible across populations |
| Arterial stiffness (cfPWV, SI) | MK-7 RCTs | Knapen 2015: positive (3-yr, postmenopausal women); de Vries 2025: positive (post-hoc, low-K-status women); Naiyarakseree 2023: null overall, diabetic subgroup positive (HD patients) |
| Aortic valve calcification (AVC) | MK-7 (720 µg/day) + vitamin D RCT | Diederichsen 2022: **null** (treatment effect −17 AU, 95% CI −86 to +53; n=365, 2 yr, Circulation) |
| Coronary artery calcification (CAC) | Meta-analysis + systematic review | Li 2023: marginally positive (dominated by Shea 2009); Murali 2023: "possibly reduces progression" (non-CKD, no definitive positive) |
| Bone mineral density | MK-7 RCTs | Mixed; RenaKvit 2023: divergent effects by anatomic site; insufficient to recommend |
| Hard CV outcomes (MI, stroke, CV death) | None identified | #gap/needs-human-replication — no hard-outcome RCT exists for MK-7 |

**Human-evidence-level assignment (`limited`):** dp-ucMGP effects are established. Arterial stiffness data show positive signals (Knapen 2015) but the largest structural-endpoint trial is null (Diederichsen 2022). No hard CV endpoint data. Bone evidence is inconsistent. This constitutes a surrogate-level evidentiary basis — `limited`, not `preclinical-only` (substantial human trial activity exists) and not `strong` (no hard outcomes, key structural-endpoint null).

## Limitations and knowledge gaps

- #gap/needs-human-replication — No RCT has evaluated MK-7 with hard cardiovascular outcomes (MI, CV death, stroke) as primary endpoints in any population.
- #gap/needs-human-replication — The only rigorous structural-calcification endpoint trial (Diederichsen 2022 Circulation, aortic valve calcification) was null. A powered non-CKD CAC-endpoint RCT for MK-7 has not been completed.
- #gap/contradictory-evidence — Li 2023 meta-analysis and Murali 2023 systematic review reach different conclusions about CAC benefit in non-CKD adults; discordance reflects inclusion criteria and endpoint heterogeneity, not resolution.
- #gap/needs-human-replication — Whether DOAC-vs-warfarin anticoagulation divergence in vascular calcification outcomes has clinical magnitude in prospective RCTs remains open.
- #gap/dose-response-unclear — Optimal dose and form (MK-7 dose ≥180 µg/day? MK-4? combination?) for extrahepatic GGCX saturation in non-CKD older adults is not established.
- **clinical-trials-active count note (verified 2026-06-02):** The count of 7 reflects active (RECRUITING + ACTIVE_NOT_RECRUITING) trials on ClinicalTrials.gov where vitamin K2/MK-7 is the study agent and the indication is aging-relevant (cardiovascular calcification, arterial stiffness, bone/osteoporosis, CKD-related calcification). A broad query for "menaquinone" returns 60 active trials, the majority of which are NOAC-vs-warfarin anticoagulation management studies where menaquinone-7 appears as the comparator or reference, not the study agent. Highlighted trials: DANCODE (NCT05500443, Danish coronary decalcification), InterVitaminK (NCT05259046, cardiovascular/metabolic/bone), and Role of Vitamin K2 in CKD (NCT05942053).
- The vascular calcification mechanism page ([[vascular-calcification]]) and the MGP protein page ([[matrix-gla-protein]]) carry the detailed mechanistic arguments; this page summarises and cross-links.

## Classification

- **SENS strategy:** indirect — MK-7 supports MGP carboxylation, which inhibits extracellular hydroxyapatite accumulation; this maps most closely to a GlycoSENS/extracellular-junk prevention strategy, though SENS has not formally categorized vascular calcification.
- **Intervention category:** dietary supplement; no prescription indication for vascular calcification.
- **Risk profile for supplementation:** Low in non-anticoagulated patients (no established toxicity at ≤1000 µg/day MK-7). **Contraindicated with warfarin** — MK-7 supplementation will antagonize warfarin anticoagulation.

## Cross-references

- [[matrix-gla-protein]] — the primary extrahepatic VKDP; the mechanistic linchpin of vitamin K's vascular anti-calcification effect
- [[vascular-calcification]] — the process page; carries the detailed mechanistic description, RCT evidence framing, and conflict discussion
- [[ggcx]] — gamma-glutamyl carboxylase; the enzyme for which vitamin K is the cofactor
- [[vkorc1|VKOR]] — vitamin K epoxide reductase; warfarin's target; regenerates active vitamin K hydroquinone
- [[altered-intercellular-communication]] — the primary hallmark linked via vascular calcification → arterial stiffening
- [[chronic-inflammation]] — secondary via calcification-driven VSMC phenotypic switching
- [[arterial-stiffening]] — downstream phenotype; cfPWV is the primary functional RCT endpoint
- [[atherosclerosis]] — partially overlapping phenotype; intimal vs medial calcification distinction
- [[klotho]] — parallel anti-calcification system; both Klotho and MGP fail in CKD
- [[fgf23]] — FGF23/Klotho/phosphate axis; distinct but intersecting vascular calcification driver
- [[bmp-2]] — BMP-2 is sequestered by carboxylated MGP; uncarboxylated MGP allows BMP-2 to drive VSMC osteogenic transdifferentiation

## Footnotes

[^stafford1995]: doi:10.1146/annurev.bi.64.070195.003401 · Stafford DW · *Annu Rev Biochem* 1995;64:551–577 · review · comprehensive description of the vitamin K cycle (GGCX, VKOR), Gla protein biochemistry, and warfarin mechanism; foundational reference for the cofactor mechanism

[^schurgers2007]: doi:10.1182/blood-2006-04-018697 · Schurgers LJ, Teunissen KJF, Hamulyak K, Knapen MHJ, Vik H, Vermeer C · *Blood* 2007;109(8):3279–3283 · rct (crossover) · n=32 healthy volunteers · comparative bioavailability K1 vs MK-7 in VKDPs carboxylation; MK-7 significantly more effective at reducing dp-ucMGP than K1 at equivalent molar doses · model: homo-sapiens · archive: not_oa

[^schurgers2013]: doi:10.1038/ki.2013.26 · Schurgers LJ et al. · *Kidney Int* 2013 · review · warfarin inhibition of VKOR → MGP non-carboxylation → vascular calcification; MK-7 vs K1 tissue distribution; dp-ucMGP as biomarker; CKD context with mechanism generalisable · archive: not_oa #gap/no-fulltext-access

[^knapen2015]: doi:10.1160/th14-08-0675 · PMID:25694037 · Knapen MHJ, Braam LA, Drummen NE, Bekers O, Hoeks AP, Vermeer C · *Thrombosis and Haemostasis* 2015;113(5):1135–1144 · rct (double-blind, placebo-controlled) · n=244 (MK-7 n=120, placebo n=124) · healthy postmenopausal women · MK-7 180 µg MenaQ7/day vs placebo × 3 years · cfPWV and Stiffness Index β significantly decreased in MK-7 group overall; local carotid stiffness parameters improved in women with above-median baseline Stiffness Index β (median 10.8); dp-ucMGP reduced ~50% vs placebo · no effect on acute-phase markers (IL-6, hsCRP, TNF-α) or endothelial dysfunction markers · model: homo-sapiens · archive: not_oa #gap/no-fulltext-access — quantitative claims verified against PubMed abstract only

[^devries2025]: doi:10.3390/nu17050815 · PMID:40077685 · de Vries F et al. · *Nutrients* 2025;17(5):815 · post-hoc analysis of double-blind RCT (NCT02404519; full trial n=243 men+women 40–70 yr) · post-hoc cohort: n=165 women with dp-ucMGP >400 pmol/L (78 pre/peri-menopausal, 87 post-menopausal; MK-7 n=82, placebo n=83) · MK-7 180 µg/day × 1 year · vascular stiffness attenuated in post-menopausal women (Young's modulus: placebo +49.1% ± 77.4 vs MK-7 +9.4% ± 67.1; adjusted p=0.035); BP reduction (brachialis −3.0% ± 9.0; p=0.007) in post-menopausal high-stiffness-index subgroup only (n=26 MK-7); dp-ucMGP significantly reduced in both menopausal groups · industry-funded (Gnosis by Lesaffre) · model: homo-sapiens · archive: local PDF verified

[^diederichsen2022]: doi:10.1161/CIRCULATIONAHA.121.057008 · PMID:35465686 · Diederichsen ACP et al. · *Circulation* 2022;145(18):1387–1397 · rct (double-blind multicenter, 4 Danish centres) · n=365 elderly men (mean age 71.0 ± 4.4 yr; n=182 treatment, n=183 placebo) · **720 µg MK-7/day + 25 µg vitamin D** vs placebo × 24 months · primary: AVC Agatston progression: **null** (treatment effect −17 AU; 95% CI −86 to +53; p=0.64) · dp-ucMGP: −212 pmol/L (treatment) vs +45 pmol/L (placebo); p<0.001 · model: homo-sapiens · archive: local PDF verified

[^naiyarakseree2023]: doi:10.3390/nu15112422 · PMID:37299386 · Naiyarakseree N et al. · *Nutrients* 2023 · rct (multicenter open-label) · n=96 hemodialysis patients (MK-7 n=50, control n=46) · MK-7 375 µg/day × 24 weeks · cfPWV overall: null (MK-7 −6.0% vs control −6.7%; p=0.24); diabetic subgroup (n=16/14): MK-7 −10.0% vs control +3.8% (p=0.008) · CKD/ESRD context · model: homo-sapiens · archive: local PDF available (not re-read during this verification pass — claims verified against seeder extraction)

[^li2023]: doi:10.3389/fnut.2023.1115069 · PMID:37252246 · Li T, Wang Y, Tu WP · *Frontiers in Nutrition* 2023 · systematic-review + meta-analysis · 14 RCTs, 1,533 participants in analysis (1,842 enrolled); CAC sub-analysis: 4 RCTs, n=424 (Shea 2009 = 94.4% fixed-effects weight) · CAC: MD −17.37 Agatston (95% CI −34.18 to −0.56; p=0.04; I²=34%); dp-ucMGP: MD −243.31 (95% CI −366.08 to −120.53; p=0.0001; I²=71%) · mixed CKD/non-CKD populations · model: homo-sapiens · archive: local PDF verified

[^murali2023]: doi:10.1161/jaha.123.031676 · PMID:38014685 · Murali S, Smith ER, Tiong MK, Tan SJ, Toussaint ND · *J Am Heart Assoc* 2023;12:e031676 · systematic-review · 49 RCTs (n=9,901); CKD patients explicitly excluded · vitamin K: 5 RCTs (n=1,074; median participants 154, range 68–388; median duration 12 months): "possibly reduces progression" — only 1 RCT (Shea 2009, in adherent participants) achieved primary CAC endpoint; conclusion: "insufficient or conflicting data" for vitamin K in non-CKD cohort · model: homo-sapiens · archive: local PDF verified

[^bladbjerg2024]: doi:10.1053/j.jrn.2023.11.007 · PMID:38128853 · Bladbjerg EM, Levy-Schousboe K, Frimodt-Møller M et al. · *J Renal Nutr* 2024 · rct (double-blind, placebo-controlled) · n=123 dialysis patients (MK-7 n=61, placebo n=62) · MK-7 360 µg/day × 1 year · coagulation activation markers: no significant differences vs placebo; PIVKA-II decreased in MK-7 group; no adverse event difference · supports coagulation safety of MK-7 at supplemental doses in non-anticoagulated patients · model: homo-sapiens · archive: not_oa #gap/no-fulltext-access — claims from seeder extraction; full-text not verified

[^lewy2023]: doi:10.1093/ndt/gfac315 · PMID:36460034 · Levy-Schousboe K et al. (RenaKvit trial) · *Nephrol Dial Transplant* 2023 · rct (double-blind, placebo-controlled, multicentre) · n=123 dialysis patients · MK-7 vs placebo × 24 weeks · BMD 1/3 distal radius: accelerated loss in MK-7 group; lumbar spine BMD: preserved in MK-7 group · conclusion: "do not support MK-7 supplementation to preserve bone" in dialysis · model: homo-sapiens · archive: pending download — claims from seeder extraction; full-text not verified #gap/no-fulltext-access

[^elborolossy2022]: doi:10.1038/s41430-021-01050-w · PMID:34845313 · El Borolossy R, El-Farsy MS · *Eur J Clin Nutr* 2022 · rct · n=60 pediatric CKD hemodialysis patients (four groups: K2-only, vitamin D-only, K2+D, control) · combined MK-7 100 µg + native vitamin D showed greatest dp-ucMGP and ucOC reduction over 4 months · pediatric CKD-specific; limited generalizability to non-CKD aging · model: homo-sapiens · archive: local PDF available (not re-read during this verification pass — claims verified against seeder extraction)
