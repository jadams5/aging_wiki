---
type: compound
aliases: [aescin, beta-aescin, β-aescin, horse chestnut seed extract, HCSE, Aesculus hippocastanum extract, sodium aescinate]
pubchem-cid: 6433489
pubchem-cid-alt: 6540709
chembl-id: CHEMBL507233
chembl-id-alt: CHEMBL505939
drugbank-id: null
cas-number: 6805-41-0
molecular-formula: C55H86O24
molecular-weight-da: 1131.3
administration-route: oral
biologic: false
mechanisms: [venotonic, hyaluronidase-inhibition, venous-smooth-muscle-sensitization, anti-inflammatory]
targets: []
hallmarks: []
clinical-stage: supplement
human-evidence-level: limited
translation-gap: phase-3-rct-needed
next-experiment: "Large double-blind RCT (n≥500, ≥12 months) using CEAP-progression as primary endpoint and validated patient-reported QoL as co-primary, to determine whether HCSE slows structural CVD progression beyond oedema/symptom relief."
clinical-trials-active: 2
literature-checked-through: 2026-05-27
verified: true
verified-date: 2026-05-27
verified-by: claude
verified-scope: "Pittler 2012 Cochrane full PDF read end-to-end; all quantitative claims cross-checked (WMD, CI, trial count, adverse event frequency, leg pain/circumference findings, authors' conclusions wording). Diehm 1996 Lancet abstract-verified via PubMed efetch (PDF not downloadable — bronze OA, no PMC copy; n=240 total and per-arm confirmed, leg volume point estimates and p-values confirmed). Yang 2024 n=87 confirmed via PubMed abstract. Kuznetsov 2025 n=180 confirmed via PubMed abstract (abstract-only; Russian-language full text). CAS numbers resolved via PubChem REST (CID 6433489 → CAS 6805-41-0; CID 6540709 / β-aescin → CAS 8047-15-2). ChEMBL507233 = Escin Ia, CHEMBL505939 = Escin Ib confirmed via ChEMBL REST. Mechanism claims (hyaluronidase inhibition, PGF2α sensitization, leukocyte-adhesion) verified as review-cited in Pittler 2012 Discussion (attributed to Lorenz 1960 and Facino 1995 therein); no primary pharmacology papers independently located. PK parameters (Tmax, t½, protein binding) remain sourced from secondary review literature — not independently verified against primary PK studies. ADDENDUM 2026-05-27 (initial): 'Disease-modification plausibility (hypothesis)' subsection added — Sun 2023 (PMID 37716034), Yan 2025 (PMID 40090427), Li 2025 (PMID 40093806), Barreca 2024 (PMID 39273200) abstract-verified at that time. ADDENDUM 2026-05-27 (full PDF verification pass): Li 2025 full PDF read (gold OA via PMC, PMCID PMC11905272); Barreca 2024 full PDF read (gold OA via PMC, PMCID PMC11395133); both fully verified — corrections applied (see log/2026-05-27.md). Sun 2023 and Yan 2025 remain abstract-verified only (closed-access, no OA version; not_oa per a local paper archive + Unpaywall). Gwozdzinski 2023 (PMID 37371797) added as peripheral-venous-tissue escin mechanism study found in targeted PubMed + Europe PMC search. PubMed escin+MMP search (n=14 results) confirmed no escin+MMP study exists in peripheral venous tissue specifically. ADDENDUM 2026-05-27 (collateral-effects subsection): 'Systemic-mechanism collateral effects' subsection added — supporting refs (Wołosowicz 2025 PMID 41304763; Fields 2019 PMID 31461880; Isa 2025 PMID 40833723; Ridker/CANTOS 2017 PMID 28845751; Gwozdzinski 2025 PMID 41009489; Lichota 2020 PMID 33121005) are title/abstract-verified (each PMID confirmed via esummary to resolve to the claimed paper/journal/year; full PDFs not read). This subsection is hypothesis-scenario risk analysis, not verified disease-modification or toxicology evidence."
---

# Escin (aescin / horse chestnut seed extract)

**Escin** (also **aescin**; pharmacologically dominant fraction: **β-aescin**) is the principal bioactive triterpene saponin of standardized **horse chestnut seed extract (HCSE)**, derived from *Aesculus hippocastanum* seeds. It is classified as a **venotonic / phlebotonic** agent and is the most extensively studied herbal compound for **[[chronic-venous-disease]]** (CVI, varicose veins, and associated oedema). A 2012 Cochrane systematic review concluded HCSE is "efficacious and safe for short-term treatment of CVI," with leg-volume reduction comparable to compression stockings in a landmark Lancet RCT, though evidence for disease-modification over the long term is absent. #gap/long-term-unknown

## Identity

Escin is a **saponin mixture**, not a single molecule. The major pharmacological fractions are:

| Fraction | PubChem CID | ChEMBL ID | Role |
|---|---|---|---|
| Aescin mixture (canonical) | **6433489** | — | Pharmacopoeia reference; M.W. 2262.5 Da (two-isomer canonical entry) |
| β-Aescin (dominant bioactive) | **6540709** | CHEMBL507233 (Escin Ia), CHEMBL505939 (Escin Ib) | Principal venotonic fraction; C₅₅H₈₆O₂₄, M.W. 1131.3 Da |

The PubChem "aescin" canonical entry (CID 6433489) represents a two-isomer mixture with molecular formula C₁₁₀H₁₇₂O₄₈ and M.W. 2262.5 Da. This page uses **CID 6540709 (β-aescin / Escin Ia)** as the primary biological reference form (C₅₅H₈₆O₂₄, M.W. 1131.3 Da), which is the pharmacologically characterized individual saponin. `pubchem-cid:` in frontmatter is the mixture CID (canonical for HCSE products); `pubchem-cid-alt:` is β-aescin.

- **CAS:** CID 6433489 (aescin mixture): **6805-41-0**; CID 6540709 (β-aescin / Escin Ia): **8047-15-2** (also listed: 11072-93-8) — confirmed via PubChem synonyms REST
- **DrugBank:** Not assigned (herbal extract, not a registered pharmaceutical in DrugBank)
- **Regulatory class:** Germany: approved phytomedicine (Bundesinstitut für Arzneimittel und Medizinprodukte / BfArM); UK/EU: traditional herbal medicinal product (THMP) under EMA Committee on Herbal Medicinal Products (HMPC); USA: dietary supplement (DSHEA)
- **Standard clinical product:** HCSE standardized to **16–21% escin** by weight; typical oral dose = 300 mg HCSE (≈50 mg escin) twice daily (~100 mg escin/day total) [^pittler2012]

## Critical toxicology distinction: escin vs. esculin

> This distinction is clinically important and a common source of confusion.

**Escin** (the triterpene saponin covered by this page) is the venoactive component and is **safe in standardized extract at approved doses**.

**Esculin** (also spelled **aesculin**; a hydroxycoumarin glucoside, CAS 531-75-9) is a structurally distinct, **toxic and anticoagulant compound** present in **raw / unprocessed** horse chestnut seeds, bark, and leaves. Raw horse chestnut seed is **poisonous** — ingestion causes vomiting, muscle weakness, paralysis, and has caused deaths in children. **Standardized HCSE manufacturing specifically removes or limits esculin** to safe levels (European Pharmacopoeia limits: ≤0.01% esculin by weight in standardized HCSE). Only standardized, esculin-controlled HCSE products are used clinically.

Do NOT use unprocessed horse chestnut preparations. Standardized products will state esculin content compliance with PhEur specifications.

## Mechanism of action

Escin is a **pleiotropic saponin** with three documented primary mechanisms relevant to CVI:

### 1. Venotonic — venous smooth muscle sensitization

Escin increases venous tone (venoconstriction) without raising systemic arterial blood pressure at therapeutic doses. The proposed mechanism is **potentiation of prostaglandin F2α (PGF2α)-mediated contraction** and enhanced **Ca²⁺-dependent** contractile responses in venous smooth muscle. This sensitization of the venous contractile apparatus increases venous return, reducing reflux-driven ambulatory venous hypertension — the central driver of CVI pathology (see [[chronic-venous-disease]] § Mechanisms). The molecular target has not been crisply identified; the sensitization model is based on isolated vessel pharmacology and is the most mechanistically coherent explanation for the venoconstriction endpoint. [^pittler2012] #gap/no-mechanism (specific molecular target)

### 2. Anti-oedematous — capillary pore sealing and hyaluronidase inhibition

Escin reduces trans-capillary fluid filtration by two complementary mechanisms:
- **Direct reduction in capillary hydraulic permeability** ("sealing" of endothelial pores), reducing the rate of fluid movement from the capillary lumen into the interstitium under elevated hydrostatic pressure.
- **Hyaluronidase and elastase inhibition** — escin inhibits hyaluronidase and elastase *in vitro*, two enzymes involved in proteoglycan degradation in the venous-wall glycocalyx and pericapillary ground substance. Protecting the hyaluronan-rich glycocalyx matrix maintains the physical filtration barrier. This mechanism is consistent with the known role of venous hypertension in MMP/enzyme-mediated ECM breakdown (see [[chronic-venous-disease]] § MMP/ECM remodeling). [Lorenz 1960, as cited in ^pittler2012]

Both mechanisms converge on reducing leg oedema — the primary measurable pharmacodynamic endpoint in clinical trials. [^pittler2012]

### 3. Anti-inflammatory — leukocyte adhesion and lysosomal enzyme release

Escin reduces leukocyte activation and adhesion to venous endothelium, and suppresses release of lysosomal enzymes (elastase, collagenase) from activated leucocytes. This limits the inflammatory component of CVI-associated skin and wall damage. The anti-inflammatory mechanism overlaps with the broader venotonic class and with the leukocyte–endothelial cascade described on [[chronic-venous-disease]].

### Disease-modification plausibility (hypothesis — not clinically tested)

> **Status: hypothesis.** All *clinical* escin/HCSE evidence is for oedema and symptom relief over ≤16 weeks (see § Clinical evidence). No trial has tested whether escin slows CEAP progression — this is **untested, not refuted** (`#gap/long-term-unknown`). The argument below is a mechanistic rationale for *why such a trial is worth running*, built on rodent/in-vitro mechanism studies primarily in **non-peripheral-venous** tissues (cerebral, gut, lung), with one study in human umbilical vein endothelium (HUVEC) and one new direct study in human varicose-vein endothelial cells (see [^gwozdzinski2023]). It is **not** evidence of disease modification.

The structural progression of CVI is driven by a self-reinforcing loop: ambulatory venous hypertension → leukocyte/endothelial activation → inflammatory **MMP upregulation (MMP-1/-2/-3/-7/-9)** → collagen + elastin degradation → vein-wall weakening and valve incompetence → more reflux (see [[chronic-venous-disease]] § MMP/ECM remodeling).[^raffetto2021ref] Escin has documented actions at **four nodes of this exact loop**, raising the hypothesis that chronic dosing could attenuate structural remodeling rather than only palliating oedema:

| Progression node | Escin action | Strongest evidence | Caveat |
|---|---|---|---|
| Venous hypertension (upstream driver) | Venotonic — raises venous tone, ↓ pooling | Clinical oedema endpoints [^pittler2012] | Functional & **reversible**; does not remodel structure |
| Leukocyte/platelet–endothelial adhesion | ↓ platelet adhesion; ↓ P-selectin, GP1b, integrins αV/β3; ↓ IL-6/IL-8; ↓ MMP-2/-9 secretion | Escin **alone** ↓ platelet adhesion in TNFα-activated HUVEC [^barreca2024]; peripheral varicose-vein endothelial cells (HVVEC) [^gwozdzinski2023] | For MMP-2/-9 endpoint specifically: only EBGS combination data reported — escin-specific MMP contribution not isolable; platelet adhesion endpoint does have escin-alone arm |
| Inflammasome activation | ↓ NLRP3 / caspase-1 / IL-1β / IL-18 / GSDMD pyroptosis | In vivo rat **venous** (sagittal-sinus) thrombosis [^li2025sss] | Cerebral venous, not peripheral vein wall |
| **MMP effector (the ECM-degrading step)** | **↓ MMP-9** (AMPK activation → ↑Cav-1 → ↓MMP-9) | In vivo: stroke/BBB — escin activates AMPK (phospho-AMPK ↑), AMPK inhibitor dependency confirmed [^sun2023]; DSS colitis via LOXL2/MMP-9 axis (LOXL2 overexpression rescue) [^yan2025] | Both **non-peripheral-vein** rodent models; no peripheral-vein MMP mechanism study exists |

The MMP-9 link is the load-bearing one: two independent in-vivo rodent models show escin downregulates MMP-9 (Sun 2023 via AMPK activation; Yan 2025 via LOXL2 suppression), and MMP-9 is among the proteases implicated in vein-wall ECM breakdown on [[chronic-venous-disease]]. The AMPK activation direction has been confirmed with pharmacological inhibitor experiments (AMPK inhibitor + Cav-1 siRNA used to demonstrate pathway dependency in Sun 2023). Combined with the *in vitro* elastase + hyaluronidase inhibition already noted above, and the newly-identified escin effect on varicose-vein endothelial cell adhesion properties [^gwozdzinski2023], escin plausibly opposes the protease and adhesion arms of progression, not just the filtration arm of oedema. No study has yet tested escin's MMP effects in peripheral venous tissue specifically. #gap/no-mechanism (venous-wall MMP suppression untested in peripheral vein)

**Extrapolation status (this hypothesis):**

| Dimension | Status |
|---|---|
| Pathway (inflammation→MMP-9→ECM) conserved in human vein wall? | partial — MMP-9 elevation in human varicose-vein wall is established;[^raffetto2021ref] escin reduces adhesion/ROS in human varicose-vein endothelial cells in vitro [^gwozdzinski2023]; escin's MMP-9 suppression shown only in non-venous rodent tissue — no peripheral-vein MMP study exists |
| Phenotype (slowed structural progression) conserved in humans? | unknown — never measured |
| Replicated in humans? | no — no escin trial has used vein-wall ECM/MMP or CEAP-progression endpoints |

This is the rationale behind the page's `next-experiment` field. The cleanest first step short of a multi-year RCT would be a mechanistic human study measuring vein-wall MMP/ECM markers (or circulating MMP-9) before/after sustained HCSE in CEAP C2–C4 patients. An intermediate step now technically feasible is an ex-vivo varicose-vein wall explant experiment testing whether escin suppresses MMP-9 activity at pharmacologically relevant concentrations. #gap/needs-human-replication

### Systemic-mechanism collateral effects (disease-modification scenario)

> **Status: hypothesis-scenario risk analysis.** Pairs with the subsection above. MMP-9, AMPK, and NLRP3 are active in *many* tissues, so if escin engages them **systemically and chronically** — the exposure profile a disease-modification regimen would require — the same mechanisms that help the vein could carry collateral effects. None of these is documented for oral HCSE; they are the risk-side complement to the efficacy hypothesis.

**The reconciliation (the key point).** Pittler 2012 found HCSE adverse events "mild and infrequent" [^pittler2012] — but that record comes from **≤16-week trials of an orally-dosed saponin with low bioavailability** (escin is large, polar, ~MW 1131 Da, and substantially hydrolysed in the gut). Oral dosing produces low plasma concentrations, likely below the thresholds for systemic AMPK/MMP-9/NLRP3 engagement or saponin membrane toxicity — the preclinical mechanism studies used IV dosing or direct in-vitro exposure, which oral dosing does not reproduce. So the reassuring safety data **do not cover** a disease-modification regimen, which would need *sustained* (years) and possibly *higher / better-delivered* exposure to engage these pathways in the vein wall. The design changes needed to make escin disease-modifying are exactly the ones that exit the validated safety envelope. This is the central tension.

- **MMP-9 suppression — wound-healing irony, but the marimastat precedent does *not* apply.** MMP-9 is *required* for normal wound re-epithelialization and ECM remodeling; the broad-spectrum MMP-inhibitor oncology drugs (marimastat, batimastat) failed partly on impaired tissue repair [^mmp9review]. Chronically suppressing MMP-9 could in principle retard venous-ulcer healing — which itself depends on controlled remodeling. **However**, the dose-limiting "musculoskeletal syndrome" of those drugs was an off-target effect of **broad zinc-active-site chelation**; selective inhibition of MMP-2/-9/-13/MT1-MMP does **not** cause it [^fields2019]. Escin is an *indirect, signaling-level* MMP-9 down-regulator (via AMPK/Cav-1 and LOXL2), **not** a catalytic chelator, so it does not inherit the marimastat toxicity by either the mechanism axis or the MMP-identity axis. Cite the precedent only to dismiss it. #gap/needs-human-replication
- **AMPK activation — mostly beneficial, one real caveat.** Sun 2023 shows escin *activates* AMPK. AMPK activation is broadly pro-longevity (metformin-like) and the net effect is likely favorable. The genuine caveat: AMPK restrains anabolism (inhibits mTORC1, protein synthesis), so *chronic systemic* activation could blunt muscle protein synthesis — a theoretical concern in older CVD patients already at sarcopenia risk. Proportionate, not alarming; transient AMPK activation (exercise) is beneficial.
- **NLRP3 inhibition — infection trade-off.** NLRP3→caspase-1→IL-1β is core innate host defense. Chronic suppression trades anti-inflammatory benefit against infection susceptibility: long-term IL-1 blockade in children shows infection as the leading serious adverse event [^il1safety], and the CANTOS trial (canakinumab) produced an excess of fatal infections offsetting its cardiovascular benefit [^cantos]. Whether oral escin suppresses NLRP3 *systemically* enough to inherit this is unestablished and unlikely at supplement exposures.
- **Saponin-intrinsic effects (dose/route-gated).** Escin is a hemolytic saponin — it perturbs the RBC membrane at 15–60 µg/mL in vitro [^hemolysis2025]; this is **why oral is strongly preferred over IV** (sodium aescinate). Escin/saponins also have antiplatelet–anticoagulant activity [^lichota2020], supporting the existing warfarin/antiplatelet bleeding caution (see § Safety). Both are concentration-threshold phenomena that become relevant only if exposure is pushed up — i.e., in the disease-modification scenario.

**Bottom line.** Most relevant: the reconciliation gap itself (existing safety data don't cover a sustained/higher-exposure regimen). Plausible and dose-gated: hemolysis and bleeding-interaction. Real but proportionate: AMPK anabolic-suppression and NLRP3 infection risk, *if* systemic engagement occurs. Likely negligible / over-stated: the marimastat musculoskeletal-syndrome precedent (does not apply to an indirect MMP-9 modulator). Speculative at oral doses: anti-angiogenic/cytotoxic effects and wound-healing impairment (require sustained high tissue concentrations the oral route doesn't reach).

### Targets

No single high-affinity molecular target for escin's venotonic activity has been identified; the mechanism class is functionally defined by the haemodynamic endpoint (venous tone + capillary permeability). `targets: []` is set accordingly. The most downstream identified targets are **hyaluronidase** and **elastase** (both inhibited *in vitro*) for the anti-oedematous arm. For the venotonic arm, the PGF2α/Ca²⁺ sensitization points to venous smooth-muscle Ca²⁺-release and receptor-coupling pathways, but the proximal receptor target is unknown. [^gap/no-mechanism]

## Pharmacokinetics

Oral HCSE is reasonably well absorbed when standardized; bioavailability data are primarily from European pharmacokinetic studies of escin (β-aescin fraction):

- **Tmax:** ~2–3 hours after oral dosing
- **Half-life:** ~20 hours — substantially longer than most flavonoid compounds (contrast with [[fisetin]]'s <0.1 h rapid phase), enabling twice-daily oral dosing schedules
- **Protein binding:** high (>90%) — primarily albumin; distributes to vascular/connective tissue
- Extensive hepatic conjugation and renal/biliary elimination; no major active metabolite identified

The long half-life is pharmacokinetically favorable for a venous condition — trough concentrations remain meaningful across the dosing interval. #gap/dose-response-unclear (concentration–effect relationship for venous tone vs. oedema endpoints not established in vivo)

## Clinical evidence

### Cochrane systematic review (Pittler & Ernst, 2012) — the anchor

The definitive evidence synthesis is a **Cochrane systematic review** by Pittler and Ernst (last update 2012) of HCSE vs. placebo and active comparators for CVI. [^pittler2012]

Key findings (vs. placebo):
- **Leg volume reduction:** WMD **32.1 mL** (95% CI 13.49 to 50.72) — statistically significant reduction in leg volume favouring HCSE vs placebo (positive WMD = reduction in favour of HCSE; 6 trials, n=502)
- **Leg pain:** reduced in **6 of 7 placebo-controlled trials**
- **Leg circumference:** reduced at ankle and calf in individual trials
- **Overall verdict:** "efficacious and safe for short-term treatment of CVI"
- **Gap acknowledged by the review:** called for "larger, more rigorous trials" to definitively establish long-term efficacy and safety

The Cochrane review included exactly **17 RCTs** (most ≤12 weeks), with heterogeneous populations and outcome measures. The effect size is modest but consistent. #gap/long-term-unknown

### Diehm 1996 (Lancet) — head-to-head versus compression stockings

The landmark comparative trial by **Diehm et al.** randomized **240 patients** with CVI over **12 weeks** to: (a) HCSE oral, (b) compression stockings (Class I), or (c) placebo. [^diehm1996]

Key findings:
- **HCSE vs. placebo:** lower-leg volume decreased by **43.8 mL** (HCSE) vs. increased by **9.8 mL** (placebo); p = 0.005
- **Compression vs. placebo:** leg volume decreased by **46.7 mL**; p = 0.002
- **HCSE vs. compression:** not significantly different — the two active treatments were **equivalent** for oedema reduction over 12 weeks
- Conclusion: "compression stocking therapy and HCSE therapy are alternative therapies" for CVI oedema

This is the most frequently cited evidence that HCSE has a meaningful therapeutic effect — the compression-equivalence framing positions it as a credible first-line option for patients who cannot or will not wear stockings.

### Broader phlebotonic class context (Martínez-Zapata 2020, Cochrane)

HCSE/escin sits within the broader class of **phlebotonics** (venoactive drugs) assessed by Martínez-Zapata et al. in a 2020 Cochrane review of 69 RCTs (n=7,690). [^martinezzapata2020] Class-level findings:
- **Oedema:** phlebotonics probably reduce oedema (RR 0.70, 95% CI 0.63–0.78) and ankle circumference (MD −4.27 mm) — moderate certainty
- **Quality of life:** little or no effect
- **Ulcer healing:** no effect (RR 0.94, 95% CI 0.79–1.13)
- **Adverse events:** probably increase

This class-level evidence contextualizes escin/HCSE: the benefit is **real but confined to oedema and symptoms** — phlebotonics are **not disease-modifying** and do not alter ulcer healing or disease progression. This is the honest characterization of the clinical utility.

### Post-2012 literature (R25 recency search — 2019–2026)

A date-filtered PubMed search (2019–2026; terms: escin OR aescin OR "horse chestnut seed extract"; filter: meta-analysis[pt] OR randomized controlled trial[pt] OR systematic review[pt]) returned 11 hits. The most CVI-relevant post-2012 RCTs found:

**Yang et al. 2024 (Vascular, PMID 38670962)** — RCT (**n=87**; post-endovenous laser ablation for varicose veins) testing sodium aescinate 60 mg twice daily (oral) for 20 days post-procedure vs. control. Calf circumference and oedema recovered faster in the aescinate group at days 10, 21, and 30 (p<0.001). [^yang2024] This is a procedural-adjunct use case, not primary CVI pharmacotherapy, but confirms escin's anti-oedematous effect in a randomized venous-disease context.

**Kuznetsov et al. 2025 (Angiology and Vascular Surgery, PMID 41805617)** — RCT (**n=180** female patients) testing topical escin + heparin + phospholipid combination gel to reduce "string" symptom after radiofrequency ablation of saphenous vein. Combined agent resolved "string" symptom in 93.5% vs. ~72–77% in control arms; oedema reduction 91.7% vs. 72.7–76.9% (p<0.05). Abstract-only verification; full text is Russian-language. Again a procedural-adjunct context, not primary CVI pharmacotherapy. [^kuznetsov2025]

No post-2012 placebo-controlled HCSE RCT using CEAP-progression endpoints, patient-reported QoL scales, or ulcer-healing outcomes was identified. The 2020 Cochrane class-level review supersedes the 2012 individual-drug review as the most comprehensive synthesis available, but escin-specific data within that review derives from the same pre-2012 trial pool. **The recency search confirms no major study has materially changed the evidence base since Pittler 2012.** `literature-checked-through: 2026-05-27`.

### Active trials (ClinicalTrials.gov, 2026-05-27)

**2 RECRUITING or ACTIVE_NOT_RECRUITING trials** were identified using the ClinicalTrials.gov v2 API (terms: escin OR aescin OR horse chestnut OR Aesculus):

| NCT | Title | Status | Condition |
|---|---|---|---|
| NCT07244029 | Aescin-Based Herbal Extract (Reparil) for Postoperative Sequelae After Mandibular Third Molar Surgery | RECRUITING | Postoperative edema/pain (oral surgery) |
| NCT06872034 | Venostan (HCSE Tablets) for Postoperative Swelling in Ankle Fractures | RECRUITING | Postoperative edema (ankle fracture) |

Neither active trial targets primary CVI or varicose veins — both are **procedural-adjunct anti-oedematous** indications. This confirms the absence of an active dedicated CVI trial for HCSE. #gap/long-term-unknown

## Safety

**Generally well tolerated at recommended doses (300 mg HCSE / 50 mg escin, twice daily):**

- **Common adverse effects:** GI upset (nausea, stomach discomfort), dizziness, headache, and pruritus (itching) — mostly mild and reversible
- **Frequency:** 14 of 17 included trials reported adverse events; frequency ranged from 1–36% of treated patients across studies. Four studies reported **no treatment-related adverse events** in the HCSE group. Overall characterised as "mild and infrequent" by the review authors. [^pittler2012]

**Cautions and contraindications:**
- **Anticoagulants:** theoretical interaction (saponins may have mild antiplatelet or anticoagulant properties); monitor INR if used with warfarin. Evidence for clinically significant interaction is limited but extrapolation is prudent
- **Renal impairment:** case reports of nephrotoxicity exist for high-dose **parenteral** (IV) aescinate (sodium aescinate injection, used clinically in China for cerebral oedema). At oral supplement doses, renal adverse events have not been systematically reported, but caution in severe CKD is appropriate. The parenteral vs. oral distinction is critical — IV dosing achieves far higher plasma concentrations
- **Raw horse chestnut:** as detailed above under Critical Toxicology Distinction — raw seed is poisonous; esculin content in raw preparations is toxic
- **Pregnancy:** insufficient data; avoid unless under medical supervision (saponins may have abortifacient properties at high doses in animal models; no adequately powered human pregnancy safety study exists) #gap/long-term-unknown
- **Drug–herb interactions:** limited systematic data; standard phytomedicine caution applies for co-administration with other anticoagulants, NSAIDs, or renally-cleared drugs

## Dose-response evidence

| Study | Design | n | HCSE dose | Duration | Primary endpoint | Key result |
|---|---|---|---|---|---|---|
| Diehm 1996 [^diehm1996] | RCT (3-arm) | 240 | 300 mg HCSE (50 mg escin) × 2/day | 12 weeks | Leg volume (water displacement) | −43.8 mL vs. +9.8 mL placebo (p=0.005); equivalent to compression |
| Pittler 2012 Cochrane [^pittler2012] | Systematic review (17 RCTs) | pooled (6 trials, n=502 for leg volume) | Varies; modal = 300 mg × 2/day | 2–16 weeks | Leg volume; pain; circumference | WMD 32.1 mL (95% CI 13.49 to 50.72) reduction vs placebo; pain reduced 6/7 trials |
| Yang 2024 [^yang2024] | RCT | 87 | 60 mg sodium aescinate × 2/day (oral, 20 days) | 20 days | Leg circumference post-ablation | Faster oedema recovery at d10, d21, d30 (p<0.001) |

#gap/dose-response-unclear — Optimal dose for primary CVI (not post-procedural) has not been established in modern RCTs. The 300 mg HCSE / 50 mg escin twice-daily regimen is the pharmacopoeia-established standard, but no dose-ranging study comparing 50 vs. 100 vs. 150 mg escin/dose in a primary CVI population has been published.

## Hallmark mapping

CVI and its related vascular oedema do not map cleanly to a single López-Otín hallmark — they are downstream phenotypes of aging-associated vascular remodeling. The most relevant hallmark associations:
- **[[altered-intercellular-communication]]** — the ECM/MMP/SASP-driven vein-wall remodeling that escin's hyaluronidase-inhibition arm partially counters (via glycocalyx protection)
- **[[chronic-inflammation]]** — the leukocyte–endothelial cascade driving venous wall damage that escin's anti-inflammatory arm addresses

However, no direct evidence links escin to senescent-cell biology, hallmark-level mechanistic endpoints, or biological-age biomarkers. The `hallmarks: []` frontmatter assignment is intentional — linking to hallmarks based only on the downstream disease phenomenology without compound-level hallmark mechanistic data would overstate the evidence. When and if escin/HCSE is tested against SASP markers, MMP output, or cellular senescence endpoints in venous tissue, this field should be updated.

## Classification

- **Pharmacopoeia class:** Venoactive drug / phytomedicine (EMA HMPC monograph; BfArM approved in Germany)
- **Regulatory status (USA):** Dietary supplement (DSHEA; not FDA-approved as a drug)
- **Mechanism class (this wiki):** [[frameworks/intervention-classes#venotonic / phlebotonic]]
- **Clinical phenotype addressed:** [[chronic-venous-disease]] (varicose veins / CVI, CEAP C2–C4)
- **Affected tissue:** [[veins]]

## Limitations and gaps

- **No disease-modification evidence.** All positive RCT evidence is for oedema reduction and symptom relief. No RCT has demonstrated CEAP-progression prevention, ulcer healing, or structural variceal improvement with HCSE. The distinction between symptomatic relief and disease modification is the central clinical-evidence gap for the entire phlebotonic class. #gap/long-term-unknown
- **Short trial duration.** The majority of evidence comes from trials ≤12 weeks. CVI is a chronic, progressive disease; whether sustained benefit persists beyond 12 weeks, and whether therapy slows structural progression over years, is unknown. #gap/long-term-unknown
- **No validated patient-reported outcome (PRO) in most trials.** Leg volume by water displacement is a surrogate; modern trials would require validated QoL instruments (CIVIQ-20, Aberdeen Varicose Vein Questionnaire, EQ-5D). The Pittler 2012 Cochrane review noted heterogeneous outcome measures as a limitation.
- **Molecular target undefined.** Escin's venotonic mechanism (PGF2α sensitization, Ca²⁺ pathway) has not been traced to a specific receptor or kinase. #gap/no-mechanism
- **CAS numbers resolved.** CID 6433489 (aescin mixture) → CAS 6805-41-0; CID 6540709 (β-aescin) → CAS 8047-15-2 (confirmed via PubChem synonyms).
- **DrugBank absence.** No DrugBank entry found; PK data (Tmax, half-life, protein binding) were sourced from secondary review literature, not the primary PK studies. #gap/needs-replication (PK parameters)
- **Active trial gap.** No active ClinicalTrials.gov trial is testing HCSE for primary CVI as of 2026-05-27. The compound is off-patent, limiting industry investment in new rigorous trials. This may be the defining structural barrier to better evidence.
- **HCSE product heterogeneity.** Commercial products vary in escin content and standardization; trial results from EGb-standardized products may not generalize to non-standardized retail supplements. The `clinical-stage: supplement` designation reflects US regulatory reality; the EMA/BfArM regulated-phytomedicine status in Germany is clinically more rigorous.

## Footnotes

[^pittler2012]: doi:10.1002/14651858.CD003230.pub4 · Pittler MH, Ernst E · *Cochrane Database Syst Rev* 2012;(11):CD003230 · systematic review · 17 RCTs included (10 placebo-controlled, 2 vs. compression, 4 vs. rutosides, 1 vs. pycnogenol) · horse chestnut seed extract (escin) vs. placebo: leg volume WMD 32.1 mL (95% CI 13.49 to 50.72) reduction favouring HCSE (6 trials, n=502); leg pain reduced in 6/7 placebo-controlled trials (7th showed improvement vs baseline); ankle circumference WMD 4.71 mm (95% CI 1.13 to 8.28), calf WMD 3.51 mm (95% CI 0.58 to 6.45); adverse events ranged 1–36% across studies, 4 studies reported no treatment-related events, overall "mild and infrequent"; judged "efficacious and safe short-term treatment for CVI"; calls for larger definitive RCTs · PMID 23152216 · full PDF verified

[^diehm1996]: doi:10.1016/s0140-6736(96)90467-5 · Diehm C, Trampisch HJ, Lange S, Schmidt C · *Lancet* 1996;347(8997):292–294 · RCT (3-arm, parallel) · n=240 total (HCSE n=95, compression n=99, placebo n=46) · HCSE (300 mg × 2/day, ~50 mg escin) vs. compression stockings (Class I) vs. placebo for 12 weeks, CVI · HCSE: leg vol −43.8 mL (95% CI 21.1–66.4) vs. placebo +9.8 mL (p=0.005); compression: −46.7 mL (95% CI 30.4–63.0) vs. placebo (p=0.002); HCSE vs. compression equivalence (p=0.001, not significantly different); both well tolerated · PMID 8569363 · **abstract-verified only** (bronze OA, PDF not downloadable from archive)

[^martinezzapata2020]: doi:10.1002/14651858.CD003229.pub4 · Martínez-Zapata MJ et al. · *Cochrane Database Syst Rev* 2020;(5):CD003229 · systematic review · 69 RCTs (56 with usable data, n=7,690) · phlebotonics class (MPFF/diosmin, rutosides, Ca-dobesilate, pycnogenol, HCSE): oedema RR 0.70 (95% CI 0.63–0.78), ankle MD −4.27 mm; no QoL benefit; no ulcer healing effect (RR 0.94, 0.79–1.13); probably increase adverse events · PMID 33141449

[^yang2024]: doi:10.1177/17085381241249288 · Yang X, Jin J, Huang S et al. · *Vascular* 2024 (online ahead of print) · RCT · n=87 (mean age 59.9 ± 10.7 years; 54 men) · post-endovenous laser ablation for varicose veins · sodium aescinate 60 mg oral × 2/day for 20 days vs. control · calf and ankle circumference recovered faster in aescinate group at days 10, 21, 30 (p<0.001 for calf; p<0.001 and p=0.002 for ankle); pain relief faster by day 21 · PMID 38670962 · abstract-verified (PDF not independently downloaded)

[^kuznetsov2025]: doi:10.33029/1027-6661-2025-31-4-110-117 · Kuznetsov MR, Bogachev VY, Sapelkin SV et al. · *Angiology and Vascular Surgery* 2025;31(4):110–117 · RCT · n=180 female patients (ages 18–72) · post-radiofrequency ablation of great saphenous vein · topical heparin (1000 IU) vs. combined escin + heparin + phospholipid gel vs. control · "string" symptom resolution: combined agent 93.5% vs. controls ~72.7–76.9%; oedema reduction 91.7% vs. 72.7–76.9% (p<0.05) · PMID 41805617 · abstract-only verification; full text Russian-language, PDF not cross-checked

[^raffetto2021ref]: doi:10.20517/2574-1209.2021.16 · Raffetto JD, Khalil RA · *Vessel Plus* 2021;5:36 · review (mechanistic) · MMP-1/-2/-3/-7 elevated in human varicose-vein wall (MMP-2 activity specifically increased), driving collagen/elastin degradation → wall weakening · PMID 34250453 · cross-reference; primary verification on [[chronic-venous-disease]]

[^sun2023]: doi:10.1016/j.phymed.2023.155071 · Sun X, Liu Z, Zhou L et al. · *Phytomedicine* 2023;120:155071 · in-vivo mouse (tMCAO, 6-wk + 12-month-old) + in-vitro bEnd.3 endothelial cells · escin reduced rt-PA-induced haemorrhagic transformation and protected the BBB; mechanism: escin **activates AMPK** (↑phospho-AMPK) → ↑Cav-1 → **↓MMP-9**; AMPK inhibitor + Cav-1 siRNA experiments confirmed pathway dependency · PMID 37716034 · **abstract-verified only** (closed-access, not_oa per a local paper archive + Unpaywall; full PDF not read — AMPK direction confirmed from structured abstract: "Escin increased phosphorylated-AMPK and Cav-1 expression while decreasing MMP-9") · non-venous model — extrapolation to vein wall unproven

[^yan2025]: doi:10.1016/j.jep.2025.119623 · Yan J, Xu X, Zhu Y et al. · *J Ethnopharmacol* 2025;345:119623 · in-vivo mouse (DSS-induced chronic colitis) + in-vitro Caco-2 cells · escin Ia ↓ inflammation and oxidative stress, restored intestinal mucosal barrier; mechanism: escin suppresses LOXL2 → ↓MMP-9 → barrier protection; LOXL2 overexpression rescue experiment confirmed: elevated LOXL2 abolished escin Ia's protective effect · PMID 40090427 · **abstract-verified only** (closed-access, not_oa per a local paper archive + Unpaywall; full PDF not read) · gut model, not venous — extrapolation to vein wall unproven

[^li2025sss]: doi:10.7150/ijms.102624 · Li M, Liu X, Zhou X, Meng R, Ji X · *Int J Med Sci* 2025;22(7):1602–1611 · in-vivo rat (FeCl₃-induced superior sagittal sinus thrombosis — SSST; Sprague-Dawley, 200–250 g, 2-month-old male; n=12/group behavioral, n=6–8/group molecular) · escin 3 mg/mL by gavage, 1 mL × 2/day × 1 week · BBB protection: ↓Evans-blue dye, ↓MMP-9 protein (Western blot), ↑Occludin, ↑ZO-1; microglia: ↓Iba1+, ↓CD68+, ↓Iba1+CD68+ co-positive cells; pyroptosis: ↓NLRP3, ↓Caspase-1, ↓IL-1β, ↓IL-18, ↓GSDMD (all Western blot, p<0.05 vs SSST); neuroprotection: ↑NeuN+ surviving neurons; **did NOT promote sinus recanalization** — LSCI showed no significant CBF difference between SSST and SSST+Escin groups (p=0.931), confirming anti-inflammatory/barrier mechanism, not thrombolytic · PMID 40093806 · **full PDF verified** (gold OA; downloaded via PMC, PMCID PMC11905272; PDF read end-to-end 2026-05-27) · cerebral venous model — not peripheral vein wall

[^barreca2024]: doi:10.3390/ijms25179252 · Barreca MM, Raimondo S, Conigliaro A et al. · *Int J Mol Sci* 2024;25(17):9252 · in-vitro HUVEC (human umbilical vein endothelial cells) + human platelets (n=10 donors); pretreatment overnight (18 h) with EBGS (0.25 µg/mL each of escin, bromelain, ginkgo biloba, sage miltiorrhiza) or single compounds, then TNFα activation (20 ng/mL, 2 h) · **escin alone** reduced platelet adhesion to TNFα-activated endothelium (Figure 3B; p<0.0001 vs TNFα alone); all four single compounds showed individual activity in the platelet adhesion assay · EBGS combination additionally: ↓P-selectin/GP1b/integrins αV,β3 mRNA (real-time PCR); ↓IL-6/IL-8 (ELISA); ↓FAK/VCAM-1 protein (Western blot) · **For MMP-2/-9 specifically**: only EBGS combination data reported (ELISA Figure 5B) — escin-specific MMP contribution is not isolable from the combination; EBGS ↓MMP-2 (both ± platelets), ↓MMP-9 (in TNFα+Platelets condition, p<0.005) · **Conclusions and Limitations**: authors' conclusions section states single compounds alone "had no significant effects on the modulation of the platelet–endothelium interaction" — this appears to conflict with Figure 3B which shows all single compounds including escin significantly reduced platelet adhesion (p<0.0001); the authors' conclusion likely refers to the full multi-endpoint profile (adhesion molecules, cytokines, MMPs), for which only the combination showed comprehensive activity · PMID 39273200 · **full PDF verified** (gold OA; downloaded via PMC, PMCID PMC11395133; PDF read end-to-end 2026-05-27) · HUVEC is umbilical vein endothelium (venous), not peripheral vein — escin effect on peripheral varicose-vein wall unproven

[^gwozdzinski2023]: doi:10.3390/biomedicines11061702 · Gwozdzinski K, Gwozdzinski L, Bernasinska-Slomczewska J · *Biomedicines* 2023;11(6):1702 · in-vitro · human varicose vein endothelial cells (HVVEC) vs HUVEC · escin **alone** tested at 1 and 10 mg/mL (both non-cytotoxic); escin generated slight ROS in HUVEC and slight superoxide in HVVEC; the tested drugs (including escin) "may lead to a reduction in the adhesive properties" of HVVEC cells, suggesting lower thrombosis risk; study first to characterize action of varicose-vein therapeutics directly in HVVEC · PMID 37371797 · abstract-verified (open-access Biomedicines/MDPI; full PDF not independently read — abstract sufficient for the adhesion-properties claim; no MMP data reported) · **This is the only identified study testing escin in peripheral varicose-vein endothelial cells**; found via targeted PubMed search (escin OR aescin AND varicose OR saphenous) 2026-05-27

[^mmp9review]: doi:10.3390/pharmaceutics17111425 · Wołosowicz M et al. · *Pharmaceutics* 2025;17(11):1425 · review · MMP-9 as therapeutic target; broad-spectrum MMP-inhibitor trials failed on lack of selectivity, poor tolerability, and impairment of physiological tissue repair; MMP-9's biphasic role in wound healing · PMID 41304763 · title/abstract-verified (PMID resolves to claimed paper; full PDF not read)

[^fields2019]: doi:10.3390/cells8090984 · Fields GB · *Cells* 2019;8(9):984 · review · "The Rebirth of Matrix Metalloproteinase Inhibitors: Moving Beyond the Dogma" — reports that selective-inhibitor testing showed MMP-2/-9/-13/MT1-MMP are NOT responsible for the musculoskeletal syndrome that limited broad-spectrum hydroxamate MMP inhibitors (MSS is an off-target consequence of broad zinc-active-site chelation) · PMID 31461880 · title/abstract-verified (PMID resolves to claimed paper; full PDF not read) · **load-bearing for the "marimastat precedent does not apply to escin" claim**

[^il1safety]: doi:10.1007/s40272-025-00712-7 · Isa H et al. · *Paediatr Drugs* 2025 · systematic review · long-term anti-IL-1 therapy (anakinra, canakinumab) in children: infections were the most common type of serious adverse event · PMID 40833723 · title/abstract-verified (PMID resolves to claimed paper; full PDF not read)

[^cantos]: doi:10.1056/NEJMoa1707914 · Ridker PM et al. (CANTOS) · *N Engl J Med* 2017;377(12):1119–1131 · RCT · canakinumab (anti-IL-1β) lowered recurrent cardiovascular events but caused a significant excess of fatal infection/sepsis · landmark IL-1-axis-suppression safety datum · cited as well-established background; PMID 28845751

[^hemolysis2025]: doi:10.3390/ijms26188923 · Gwozdzinski K et al. · *Int J Mol Sci* 2025;26(18):8923 · in-vitro biophysical · "The Effect of Escin on the Plasma Membrane of Human Red Blood Cells" — escin induced hemolysis and increased membrane fluidity at 15–60 µg/mL, lipid bilayer as primary target · PMID 41009489 · title/abstract-verified (PMID resolves to claimed paper; full PDF not read)

[^lichota2020]: Lichota A et al. · *Int J Mol Sci* 2020 · review · "Factors Affecting the Formation and Treatment of Thrombosis by Natural and Synthetic Compounds" — saponins broadly affect coagulation and platelet activation · PMID 33121005 · title/abstract-verified (PMID resolves to claimed paper; DOI not independently confirmed; full PDF not read)
