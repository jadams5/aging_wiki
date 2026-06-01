---
type: compound
aliases: [MG, 2-oxopropanal, pyruvaldehyde, propanal-2-one, 2-ketopropionaldehyde]
pubchem-cid: 880
chembl-id: CHEMBL170721
molecular-formula: C3H4O2
molecular-weight-da: 72.06
mechanisms: [age-precursor, dicarbonyl-stress]
targets: ["[[glo1]]"]
hallmarks: ["[[chronic-inflammation]]"]
clinical-stage: null
human-evidence-level: strong
translation-gap: null
next-experiment: null
clinical-trials-active: null
literature-checked-through: 2026-05-20
verified: true
verified-date: 2026-05-20
verified-by: claude
verified-scope: "Genuth 2015: corrected MG-H1 complication specificity — MG-H1+furosine = neuropathy predictors (P<0.0001); retinopathy predictors = glucosepane+furosine; furosine = nephropathy (abstract confirmed). Samanta 2024: synaptic mitochondrial MG quantification (6.2→26.2 nM at 6→30 mo) added from full PDF. Frischmann 2005: 40-60% triose-phosphate estimate flagged as not directly confirmed from this paper's abstract (paper focused on DNA adducts CEdG); #gap added. Thornalley 2003 confirmed not_oa; intracellular MG 1-5 µM claim and other Thornalley-review-derived claims kept with #gap/no-fulltext-access. PubChem CID 880, ChEMBL CHEMBL170721, InChIKey AIJULSRZWUXGPQ-UHFFFAOYSA-N not independently re-verified against databases. ACTION II (PMID 10503809) confirmed as Phase 3 trial design/safety paper. 2026-05-20 extension verified against full PDF: CORDIOPREV 2024 (doi:10.1186/s12933-024-02451-4) — corrected MG measurement method from PMC HTML extraction error: MG measured by competitive ELISA (OxiSelect Kit, Cell Biolabs), NOT LC-MS/MS; added precise MedDiet baseline MG 3.18±0.07 µg/mL; all MG values confirmed from Table 2."
---


# Methylglyoxal (MG)

Methylglyoxal (2-oxopropanal; MG) is the most reactive endogenous **α-oxoaldehyde** (α-dicarbonyl) in mammalian cells and the principal precursor to several major AGE species: **MG-H1** (Nδ-(5-hydro-5-methyl-4-imidazolon-2-yl)-ornithine; the most abundant MG-derived AGE, formed on arginine), **CEL** (Nε-carboxyethyllysine, on lysine), **MOLD** (methylglyoxal-derived lysine-dimer crosslink), and **argpyrimidine**. Intracellular MG is normally maintained at ~1–5 µM by the glyoxalase system ([[glo1]] + GLO2 + glutathione); when this system is overwhelmed (hyperglycemia, oxidative stress, aging-related GLO1 decline), MG accumulates and drives AGE burden. MG is an endogenous metabolite, not a drug; it has no `clinical-stage` designation.

Note on schema: `clinical-stage` and `next-experiment` are null for endogenous metabolites where the therapeutic goal is to *reduce* levels rather than administer the compound. The translation-relevant interventions (GLO1 inducers, MG scavengers) are documented in [[glo1]] and the body below.

## Chemistry

- **PubChem CID:** 880
- **ChEMBL:** CHEMBL170721
- **Molecular formula:** C₃H₄O₂
- **Molecular weight:** 72.06 Da
- **InChIKey:** AIJULSRZWUXGPQ-UHFFFAOYSA-N
- **SMILES:** CC(=O)C=O
- **Structure:** A three-carbon α-oxoaldehyde; C1 bears an aldehyde (−CHO), C2 bears a ketone (−C=O), C3 bears a methyl (−CH₃).

MG is **bifunctionally electrophilic** — both the C1 aldehyde and C2 ketone react with nucleophilic side chains. Preferred targets in proteins: arginine guanidino group (→ MG-H1, argpyrimidine), lysine ε-amino group (→ CEL, MOLD), cysteine thiol. MG polymerizes spontaneously at concentrations above physiological (~>50 µM) and is commercially supplied as a ~40% aqueous equilibrium mixture of the monomer and hydrate.

## Endogenous sources

The dominant route is non-enzymatic fragmentation of triose phosphates during glycolysis:

1. **Triose-phosphate fragmentation** (dominant route; quantitative contribution estimated at ~40–60% of total MG output in various models, though the exact fraction in aging human tissues in vivo is not established [^frischmann2005]): Dihydroxyacetone phosphate (DHAP) and glyceraldehyde-3-phosphate (G3P) — the two triose phosphates of glycolysis — fragment non-enzymatically at low rates to produce MG + inorganic phosphate. The rate is proportional to [triose-phosphate], which rises with glycolytic flux and hyperglycemia. #gap/needs-human-replication — Frischmann 2005 characterized MG formation routes and DNA adducts (CEdG as primary adduct at 10 µM MG) but the 40–60% estimate is from other sources in the Thornalley group; full text not verified.
2. **Lipid peroxidation:** Oxidation of polyunsaturated fatty acids generates MG via alkenal intermediates (minor contributor in most tissues).
3. **Acetone metabolism via CYP2E1:** Acetone (from ketone-body metabolism) is oxidized → acetol → MG (relevant in diabetic ketoacidosis and ketogenic states).
4. **Amino acid catabolism:** Threonine catabolism via aminoacetone → MG (minor; gut-microbiome-mediated contribution possible).
5. **Schiff-base degradation within the Maillard reaction itself:** Fructosamine Amadori products can degrade to regenerate MG — positive feedback increasing MG formation as tissue glycation rises.

## Detoxification systems

**Primary:** The **glyoxalase system** ([[glo1]] + GLO2 + glutathione). GLO1 isomerizes the methylglyoxal-GSH hemithioacetal to S-D-lactoylglutathione (rate-limiting step); GLO2 hydrolyzes SLG to D-lactate + GSH. Net: MG → D-lactate. Highly efficient; most intracellular MG is cleared via this route [^thornalley2003].

**Secondary:**
- **Aldo-keto reductase AKR1B1** — reduces MG to lactaldehyde + acetol (NADPH-consuming; quantitatively minor but important in aldose-reductase-expressing tissues such as lens and nerve).
- **Aldehyde dehydrogenase ALDH2** — oxidizes MG to pyruvate (mitochondrial; relevant in myocardium and liver).
- **Carnosine (β-Ala-His) — direct scavenging:** Carnosine reacts covalently with MG to form a stable adduct (carnosinyl-MG), sequestering MG before protein reaction. Proposed as a pharmacological MG-scavenging strategy.

## Steady-state concentration and diabetes elevation

Under normoglycemic conditions: intracellular MG ~1–5 µM [^thornalley2003]. Plasma MG ~0.5–1.0 µM in non-diabetic adults.

In poorly controlled diabetes (HbA1c >8%): intracellular MG rises to ~15–30 µM (erythrocytes) and plasma MG may reach ~2–5 µM. The rise is driven by increased glycolytic flux (higher triose-phosphate pool) combined with oxidative inactivation of GLO1 [^rabbani2016].

In **aging** (normoglycemic): intracellular MG increases progressively as GLO1 activity declines with age — a finding documented in erythrocytes and peripheral tissues by the Thornalley group [^thornalley2003]. Quantitative tissue-level data in human aging (independent of diabetes) are sparse. #gap/needs-human-replication

## AGE products formed from MG

| AGE | Residue modified | Crosslink? | Notes |
|---|---|---|---|
| **MG-H1** (hydroimidazolone) | Arginine (guanidino) | No — monovalent PTM | Most abundant MG-derived AGE; detected in skin collagen; associated with microvascular complications in DCCT/EDIC [^genuth2015] |
| **CEL** (carboxyethyllysine) | Lysine ε-amino | No — monovalent PTM | Shares formation pathway with CML (see [[carboxymethyl-lysine]]); elevated in diabetes |
| **MOLD** | Lys–Lys | Yes — bifunctional crosslink | Methylglyoxal-derived lysine dimer crosslink; less abundant than glucosepane |
| **Argpyrimidine** | Arginine | No — monovalent PTM | Fluorescent; early formation marker |

MG-H1 is the most clinically characterized: Genuth et al. 2015 (DCCT/EDIC; n=~466 T1D participants, 13–17 yr follow-up) established that skin collagen MG-H1 independently predicts **neuropathy** progression after HbA1c adjustment (dominant predictor with furosine; P<0.0001), and that the full 10-AGE panel predicts all three microvascular complications (retinopathy P≤0.002, microalbuminuria P=0.008, neuropathy P≤0.005) independently of HbA1c [^genuth2015]. For retinopathy, the principal independent predictors were glucosepane and furosine (not MG-H1). This is the primary evidence that MG-derived damage contributes to diabetic complications beyond glycemia per se, particularly for neuropathy.

## Pathological roles

**RAGE signaling → NF-κB → chronic inflammation:** MG-modified proteins (particularly MG-H1-bearing proteins) are RAGE ligands. RAGE engagement activates NF-κB → TNF-α, IL-6, IL-8, MCP-1 → chronic low-grade inflammation ([[chronic-inflammation]]). This positions MG and its AGEs as a mechanistic bridge between metabolic dysregulation and the inflammatory hallmark of aging.

**Mitochondrial dysfunction:** MG directly modifies mitochondrial proteins, impairing OXPHOS. Synaptic mitochondria accumulate MG and MG-derived AGEs to a significantly greater degree than non-synaptic mitochondria in aging mice, with MG rising from 6.2±0.11 nM at 6 months to 26.2±1.2 nM at 30 months in synaptic compartments vs <1 nM at 6 months non-synaptic (Samanta 2025; see [[glo1]] § Model-organism evidence) — relevant to age-related cognitive decline and LTP impairment.

**Vascular:** Elevated plasma MG associates with arterial stiffness and endothelial dysfunction in diabetic and aging populations (Thornalley group data, multiple publications).

**Neurotoxicity:** MG-modified proteins aggregate more readily; MG-derived adducts have been detected in amyloid plaques and tau tangles. Whether MG contributes causally to neurodegeneration (vs. being a downstream marker of metabolic stress) is unclear. #gap/contradictory-evidence

## Therapeutic scavenger strategies — clinical track record

**Aminoguanidine (pimagedine):** The first pharmacological AGE-inhibitor tested in humans. Aminoguanidine traps both methylglyoxal and other reactive carbonyls (glyoxal, 3-deoxyglucosone) via condensation, forming stable adducts. Phase 3 in diabetic nephropathy (ACTION I/II trials) — **ACTION II was halted early (completed March 1998 ahead of schedule) and did not proceed to efficacy reporting** due to safety/tolerability concerns (glomerulonephritis, anemia, flu-like symptoms) [^actionii1999]. Aminoguanidine is not clinically used for MG scavenging.

**Pyridoxamine (B6 vitamin analog):** Carbonyltrap mechanism; Phase 2/3 in diabetic nephropathy. Development stalled following FDA classification as a drug (blocking OTC supplement sale) and sponsor-funding constraints. No approved indication.

**Benfotiamine (fat-soluble thiamine):** Activates transketolase, rerouting G3P/DHAP into the pentose-phosphate pathway, reducing triose-phosphate availability for MG formation. Phase 2 signal in diabetic peripheral neuropathy; mixed results in nephropathy.

**Carnosine (β-Ala-His dipeptide):** Direct MG scavenging via covalent adduction. Human pilot studies suggest carnosine supplementation reduces plasma MG and protein carbonyl burden; large-scale aging RCT data absent. #gap/needs-human-replication

**Bottom line:** The MG scavenger/inhibitor drug class has a poor clinical track record. No compound in this class has achieved Phase 3 success in a hard endpoint trial. Whether newer, better-tolerated compounds (e.g., hesperetin + resveratrol via GLO1 induction — see [[glo1]]) will do better is untested.

**CORDIOPREV 2024 — first long-duration dietary evidence for MG modulation in humans:** Gutierrez-Mariscal et al. 2024 (*Cardiovascular Diabetology*; PMID 39402581) is the strongest current human evidence that **circulating MG can be durably modulated through dietary pattern**. In the CORDIOPREV 5-year RCT (n=809; CHD patients; Mediterranean diet vs. low-fat control), serum MG was measured by competitive ELISA (OxiSelect Methylglyoxal Competitive ELISA Kit, Cell Biolabs; not LC-MS/MS). The low-fat diet significantly increased circulating MG from baseline 3.05 ± 0.08 µg/mL by Δ+0.44 ± 0.04 µg/mL (p=0.029 within-arm) while the Mediterranean diet (baseline 3.18 ± 0.07 µg/mL) maintained stable MG (Δ−0.03 ± 0.05; ns); the between-arm difference was p<0.001 [^cordioprev2024mg]. This is the first evidence in humans that a dietary intervention can prevent the age-associated rise in MG over a multi-year period. The MedDiet effect is attributed to Nrf2-mediated GLO1 upregulation by olive-oil polyphenols and other MedDiet components (see [[glo1]] § CORDIOPREV 2024).

[^cordioprev2024mg]: [[studies/cordioprev-2024-meddiet-glo1]] · n=809 (432 MedDiet; 377 low-fat; CORDIOPREV CHD cohort) · rct (parallel-arm; 5 yr) · model: established CHD patients · MG by competitive ELISA (OxiSelect Kit; protein-adducted MG-H1 form); baseline 3.18±0.07 µg/mL (MedDiet) vs 3.05±0.08 µg/mL (low-fat; ns) · ΔMG −0.03±0.05 (MedDiet; ns) vs +0.44±0.04 µg/mL (low-fat; p=0.029); p<0.001 between arms · full PDF verified 2026-05-20 (doi:10.1186/s12933-024-02451-4)

## Aging context — MG flux and the declining glyoxalase system

Rising MG flux with age (from both increasing glycolytic stress and declining GLO1) creates a vicious cycle:
- ↑ MG → ↑ MG-H1/CEL/MOLD → ↑ RAGE signaling → ↑ NF-κB → ↑ ROS
- ↑ ROS → ↑ oxidative inactivation of GLO1 → ↑ MG further

This positive-feedback loop positions the glyoxalase system as a **bottleneck** in the aging process — small decrements in GLO1 activity get amplified into progressively larger MG accumulation and AGE burden. Therapeutic restoration of GLO1 activity in aged tissues (via Nrf2 activation, direct enzyme upregulation, or enzyme replacement) is an under-explored aging intervention.

## Limitations and gaps

- Intracellular MG concentration in aging human tissues (not erythrocytes alone; not diabetic patients) is technically difficult to measure directly. Most aging data extrapolated from erythrocyte or plasma proxies. #gap/needs-human-replication.
- The relative contribution of each endogenous MG source (triose-phosphate fragmentation vs. other routes) in human aging tissues in vivo has not been quantified. #gap/no-mechanism for source apportionment.
- No MG scavenger drug has succeeded in a Phase 3 trial. Whether failure reflects off-target toxicity or insufficient target engagement (wrong MG flux bottleneck) is unresolved. #gap/contradictory-evidence.
- MG's contribution to neurodegeneration (Alzheimer's, Parkinson's) is mechanistically plausible but causal evidence in humans is absent. #gap/needs-human-replication.

## See also

- [[glo1]] — principal MG-detoxification enzyme; Tier 1 AGE defense
- [[fn3k]] — Tier 2 deglycation (acts downstream of MG, on Amadori products)
- [[microbial-amadori-deglycation]] — FAOX/FAOD enzymes
- [[advanced-glycation-end-products]] — AGE formation context; three-tier defense framework
- [[carboxymethyl-lysine]] — CML; the parallel non-MG AGE adduct
- [[glucosepane]] — dominant mature ECM crosslink; MG-MOLD is a minor MG-derived crosslink
- [[age-crosslink-breakers]] — intervention class for mature-AGE cleavage

## Footnotes

[^frischmann2005]: doi:10.1021/tx0501278 · Frischmann M, Bidmon C, Angerer J, Pischetsrieder M · *Chem Res Toxicol* 2005;18(10):1586–92 · PMID:16533023 · in-vitro · characterization of MG endogenous formation: "endogenously formed by fragmentation of triose phosphates during glycolysis, ketone body metabolism of acetone, and catabolism of threonine"; identified DNA adducts CEdG at physiological 10 µM MG · archive: status pending #gap/no-fulltext-access

[^thornalley2003]: doi:10.1042/bst0311343 · Thornalley PJ · *Biochem Soc Trans* 2003;31(Pt 6):1343–8 · PMID:14641060 · review · GLO1 mechanism, substrates, intracellular MG ~1–5 µM, age/oxidative-stress-related GLO1 decline · archive: closed-access (not_oa) #gap/no-fulltext-access

[^rabbani2016]: doi:10.1007/s10719-016-9705-z · Rabbani N, Xue M, Thornalley PJ · *Glycoconj J* 2016;33(4):513–25 · PMID:27406712 · review · dicarbonyl stress mechanisms; MG elevated in diabetes and aging; GLO1 inducers in clinical development · archive: OA hybrid; download pending

[^genuth2015]: doi:10.2337/db14-0215 · Genuth S, Sun W, Cleary P, Gao X, Sell DR, Lachin J, Monnier VM, DCCT/EDIC Research Group · *Diabetes* 2015;64(1):266–78 · PMID:25187362 · observational · n=~466 DCCT/EDIC T1D participants (13–17 yr follow-up) · 10-AGE panel predicted retinopathy (P≤0.002), microalbuminuria (P=0.008), neuropathy (P≤0.005) independently of HbA1c; retinopathy: glucosepane + furosine as principal independent predictors; nephropathy: furosine; neuropathy: MG-H1 + furosine (P<0.0001) · archive: OA bronze; download pending

[^actionii1999]: doi:10.1016/s0197-2456(99)00024-0 · Freedman BI, Wuerth JP, Cartwright K, Bain RP, Dippe S, Hershon K, Mooradian AD, Spinowitz BS · *Control Clin Trials* 1999;20(5):493–510 · PMID:10503809 · rct (Phase 3 design/baseline paper) · n=599 type 2 diabetic nephropathy · ACTION II trial ended March 1998 ahead of schedule; safety/tolerability concerns precluded planned efficacy endpoint; aminoguanidine clinical development discontinued · archive: status pending #gap/no-fulltext-access
