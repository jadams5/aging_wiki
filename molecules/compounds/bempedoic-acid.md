---
type: compound
aliases: [ETC-1002, ESP-55016, Nexletol, Nilemdo, 8-hydroxy-2,2,14,14-tetramethylpentadecanedioic acid]
pubchem-cid: 10472693
inchikey: HYHMLYSLQUKXKP-UHFFFAOYSA-N
chembl-id: CHEMBL3545313
drugbank-id: DB11936
cas-number: 738606-46-7
molecular-formula: C19H36O5
molecular-weight-da: 344.5
who-inn: bempedoic acid
mechanisms: [acly-inhibition, ldl-lowering, ldlr-upregulation, ampk-activation]
targets: ["[[acly]]", "[[mevalonate-pathway]]", "[[srebp-2]]", "[[ldlr]]", "[[ampk]]"]
hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Head-to-head bempedoic acid vs PCSK9i in statin-intolerant secondary-prevention patients not at LDL target on ezetimibe — establishes relative LDL-lowering potency and MACE benefit equivalence for treatment intensification decisions"
clinical-trials-active: 3
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Pinkosky 2016 (Nature Communications) and Banach 2020 (JAMA Cardiology) verified against local PDFs; Nissen 2023 JAMA primary-prevention subgroup verified against local PDF (PMC10336623); Hamayal 2024 meta-analysis verified against local PDF; CLEAR Outcomes NEJM (not_oa) headline figures cross-verified via FDA prescribing information, Hamayal 2024 meta-analysis, and Nissen 2023 JAMA which cites the CLEAR Outcomes trial; PubChem CID 10472693 and ChEMBL3545313 confirmed via direct API; DrugBank DB11936 confirmed via ChEMBL; FDA label verified via openFDA API; ApoB −15.1% and hsCRP −22.4% values from Banach 2020 not visible in PDF pages read (secondary endpoints); canonical-database identity fields (InChIKey, CAS) not independently re-verified against primary databases"
---

# Bempedoic acid

An FDA-approved (2020) oral small-molecule inhibitor of ATP-citrate lyase (ACLY) that lowers LDL-C by 17–28% as monotherapy or in combination. **The key clinical differentiator from statins is its liver-specific mechanism of action:** bempedoic acid requires hepatic bioactivation by an enzyme absent in skeletal muscle, making it free of statin-associated muscle symptoms (SAMS). It is the first non-statin oral LDL-lowering agent since ezetimibe to show cardiovascular outcomes benefit in a large Phase 3 trial (CLEAR Outcomes, 2023 NEJM, n=13,970, HR 0.87 for 4-component MACE). It is positioned as the muscle-symptom-free LDL-lowering alternative for statin-intolerant individuals.

## Identity

- **PubChem CID:** 10472693 (confirmed via API 2026-05-09; note: reported CID 24779522 in brief was incorrect — returns a different compound)
- **InChIKey:** HYHMLYSLQUKXKP-UHFFFAOYSA-N
- **CAS:** 738606-46-7
- **ChEMBL:** CHEMBL3545313
- **DrugBank:** DB11936
- **Molecular formula:** C19H36O5
- **Molecular weight:** 344.5 Da
- **Class:** dicarboxylic acid / ACLY inhibitor
- **IUPAC:** 8-hydroxy-2,2,14,14-tetramethylpentadecanedioic acid
- **Brands:** Nexletol (US monotherapy, 180 mg); Nilemdo (EU monotherapy); Nexlizet (US fixed-dose combo with ezetimibe 10 mg); Nustendi (EU combo)
- **FDA approval:** February 2020 (both monotherapy and fixed-dose combo)
- **Oral bioavailability:** high (prodrug; CoA-ester formed hepatically; parent compound well-absorbed)
- **Half-life:** ~21 h (active ETC-1002-CoA)
- **Route:** oral tablet, 180 mg once daily

## Mechanism of action

### Step 1 — Hepatic bioactivation (the liver-specificity key)

Bempedoic acid is a **prodrug**. It is absorbed intact, reaches the liver via portal circulation, and is there converted to its active CoA-thioester form (ETC-1002-CoA / ESP-1002-CoA) by **very-long-chain acyl-CoA synthetase 1 (ACSVL1, encoded by SLC27A2)**. ACSVL1 is expressed at high levels in hepatocytes and renal tubular cells but is **absent or negligible in skeletal muscle** [^pinkosky2016]. This is the mechanistic basis for the SAMS-free profile: the drug is pharmacologically inert in muscle tissue.

### Step 2 — ACLY inhibition → depleted cytosolic acetyl-CoA

ETC-1002-CoA competitively and reversibly inhibits **ATP-citrate lyase (ACLY)** [^pinkosky2016]. ACLY catalyzes: citrate (exported from mitochondria) + CoA + ATP → acetyl-CoA (cytosolic) + oxaloacetate + ADP. ACLY sits **upstream of HMG-CoA reductase ([[hmgcr]])** in the cytosolic sterol biosynthesis pathway and is also the primary carbon source for lipogenic acetyl-CoA used in:
- Cholesterol and isoprenoid (mevalonate pathway) biosynthesis
- Fatty acid synthesis (via ACC1/FASN)
- Histone acetylation (nuclear pool) — see aging-relevance note below

### Step 3 — SREBP-2 → LDLR upregulation (same axis as statins; different step)

↓ cytosolic acetyl-CoA → ↓ HMG-CoA biosynthesis → ↓ hepatic free-cholesterol → free-cholesterol depletion in ER membrane → SCAP dissociates from INSIG → SCAP escorts **[[srebp-2]]** to Golgi → site-1 and site-2 proteases cleave SREBP-2 → nuclear SREBP-2 fragment transactivates **[[ldlr]]** gene → ↑ LDLR surface density → ↑ LDL/ApoB particle uptake from plasma [^pinkosky2016].

This is the same SREBP-2 → LDLR axis used by statins (which target HMGCR directly at the rate-limiting step). Bempedoic acid acts at the upstream ACLY step — mechanistically distinct from statins, and additive with statins when used in combination because the two block different enzymatic nodes in the same pathway.

### Step 4 — Hepatic AMPK activation (pleiotropic)

In hepatocyte models, bempedoic acid activates **[[ampk]]** — the cell's central energy sensor — independently of the ACLY-cholesterol axis [^pinkosky2016]. Mechanistic pathway: ETC-1002-CoA (the active form) directly and allosterically activates AMPKα1β1γ1 heterotrimeric complexes; this activation is **not** mediated by changes in cellular AMP/ATP ratio — it is an energy-charge-independent mechanism distinct from canonical AMP-dependent AMPK activation. This also means bempedoic acid can only activate AMPK in tissues that express ACSVL1 (i.e., liver and kidney), not in muscle or macrophages where ACSVL1 is absent. Downstream AMPK effects in liver include:
- ↓ ACC activity → ↓ malonyl-CoA → ↓ FASN-mediated lipogenesis (triglyceride reduction)
- ↓ hepatic glucose output (modest; relevant to glucose-handling effects)

AMPK activation also produces mild mTOR suppression in liver, which is mechanistically interesting for aging (see below) but has no documented clinical benefit in this context. #gap/needs-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — ACLY/SREBP-2/LDLR axis is vertebrate-conserved |
| Phenotype conserved in humans? | yes — LDL-C reduction and MACE benefit demonstrated in human RCT |
| Replicated in humans? | yes — CLEAR Outcomes (n=13,970) |

## Efficacy — LDL-C and lipid effects

| Study | Design | n | Dose | LDL-C change vs placebo | ApoB | hsCRP | Notes |
|---|---|---|---|---|---|---|---|
| Banach 2020 (JAMA Cardiology) [^banach2020] | Pooled Phase 3 RCT analysis | 3,623 | 180 mg/day | −17.8% (ASCVD/HeFH pool, 95% CI −19.5% to −16.0%); −24.5% (statin-intolerant pool, 95% CI −27.8% to −21.1%) | −15.1% | −22.4% | Two pools analyzed separately: ASCVD/HeFH on max-tolerated statin (n=3,009); statin-intolerant (n=614) |
| Ballantyne 2018 (Atherosclerosis) [^ballantyne2018] | RCT | 269 | 180 mg/day + ezetimibe 10 mg | −28% (combo) | ~−23% | not primary | Statin-intolerant; additive with ezetimibe |
| CLEAR Outcomes [^nissen2023] | Phase 3 RCT | 13,970 | 180 mg/day | −21% (placebo-corrected, ~29 mg/dL absolute at 6 mo) | n/r | not primary | High-risk statin-intolerant; combined with other non-statin therapies in some patients |

Combined with maximally tolerated statin (when used adjunctively), LDL-C reduction is approximately 38% on top of statin baseline. #gap/dose-response-unclear for combination effects — the additive LDL-C reduction with statins has not been formally characterized in all subgroups.

## Cardiovascular outcomes — CLEAR Outcomes trial

**CLEAR Outcomes (2023, NEJM)** [^nissen2023] — the pivotal cardiovascular-outcomes RCT.

- **Design:** Randomized, double-blind, placebo-controlled
- **n:** 13,970 statin-intolerant adults (≥18 y) with established CVD or high ASCVD risk
- **Duration:** Median 40.6 months
- **Primary endpoint (4-component MACE):** cardiovascular death, non-fatal MI, non-fatal stroke, or coronary revascularization
- **Result:** HR 0.87 (95% CI 0.79–0.96, p=0.004) — statistically significant reduction in MACE [^nissen2023]
- **LDL-C:** −21% placebo-corrected at 6 months (absolute ~−29 mg/dL)
- **Context:** First non-statin oral LDL-lowering drug since ezetimibe (IMPROVE-IT, 2015 [^cannon2015]) to show CV outcomes benefit. Established bempedoic acid as a guideline-relevant option for statin-intolerant patients.

**Primary prevention subgroup — JAMA 2023** [^nissen2023pp]:
- n=4,206 (30% of trial; 2,100 bempedoic acid, 2,106 placebo) — primary prevention patients (no established CVD), median follow-up 39.9 months
- Primary endpoint (4-component MACE): HR 0.70 (95% CI 0.55–0.89), p=0.002 — a numerically stronger relative risk reduction than the overall trial (HR 0.87)
- LDL-C: −30.2 mg/dL (−21.3%) at 6 months
- Absolute risk reduction: 2.3% (event rate 5.3% vs 7.6%)
- Key adverse effects in this subgroup: gout 2.6% vs 2.0%; cholelithiasis 2.5% vs 1.1%
- This prespecified subgroup analysis established bempedoic acid as beneficial in primary as well as secondary prevention for statin-intolerant patients; results should be interpreted as hypothesis-generating given subgroup-within-RCT status

**Confirmatory meta-analysis (Hamayal 2024)** [^hamayal2024]:
- 6 RCTs, n=17,844
- Pooled MACE RR 0.86 (95% CI 0.79–0.94)
- MI significantly reduced; myalgia incidence lower in bempedoic acid arm
- Consistent with CLEAR Outcomes results

## Adverse effects and safety

### The key feature: no statin-associated muscle symptoms (SAMS)

Bempedoic acid does not cause myalgia, myopathy, or elevated CK at rates above placebo [^nissen2023]. The liver-specific bioactivation by ACSVL1 (absent in skeletal muscle) is the confirmed pharmacological reason. Confirmed in CLEAR Outcomes muscle-symptom subgroup analysis — the primary clinical rationale for choosing bempedoic acid in statin-intolerant patients.

### Hyperuricemia and gout

Bempedoic acid elevates serum uric acid. In the CLEAR Outcomes CV outcomes trial (per FDA prescribing information), gout occurred in 3.2% of treated patients vs 2.2% on placebo; in the earlier Phase 3 hypercholesterolemia trials (Banach 2020), gout was 1.4% vs 0.4% [^banach2020][^nissen2023]. Uric acid elevation is ~0.8 mg/dL mean increase (Nissen 2023 primary prevention subgroup: mean change +0.80 mg/dL SD 1.1). Mechanism: bempedoic acid and/or its metabolites compete for renal **organic anion transporter 2 (OAT2)**, reducing uric acid tubular secretion. Also produces pseudo-elevation of serum creatinine (competition at OAT transporters) — this is NOT a GFR change; eGFR is unaffected and dose adjustment is not indicated for the creatinine change.

**Clinical implication:** Screen for gout history and baseline uric acid before initiating. Use with caution in patients with recurrent gout; consider urate-lowering therapy if gout flares occur.

### Tendon rupture (FDA Warning and Precaution)

A small but real signal of tendon rupture (Achilles and other tendons) is listed as an **FDA Warning and Precaution** — not a boxed warning. Incidence varies by study population: 0.2% vs 0% (placebo) in the Phase 3 hypercholesterolemia trials [^banach2020]; 1.2% vs 0.9% in the CLEAR Outcomes CV trial (per FDA prescribing information); 1.4% vs 0.9% adjudicated tendon rupture in the CLEAR primary prevention subgroup [^nissen2023pp]. Risk factors per FDA label: age >60, concomitant corticosteroid or fluoroquinolone use, renal failure, prior tendon disorders. Mechanism unknown — possibly related to altered acetyl-CoA availability in tenocytes or off-target effects. Discontinue if tendon rupture occurs.

### Drug interactions — statin co-administration limits

Bempedoic acid mildly inhibits **OATP1B1/1B3** hepatic uptake transporters, increasing systemic exposure of co-administered statins:
- Simvastatin AUC: increased ~2-fold → **FDA label: avoid simvastatin >20 mg/day concomitantly**
- Pravastatin AUC: increased ~2-fold → **FDA label: avoid pravastatin >40 mg/day concomitantly**
- Rosuvastatin, atorvastatin, pitavastatin: no major interaction at standard doses

This interaction is clinically relevant because statin-intolerant patients are often trying low-dose statins concurrently. Generally, if bempedoic acid is added to a partial statin regimen, choose atorvastatin or rosuvastatin over simvastatin.

### Other lab changes

- Modest elevations in ALT, AST, and BUN — generally clinically insignificant; routine liver function monitoring per clinical judgment
- No interaction with QT interval reported

## Aging-mechanism relevance

### CV prevention as aging intervention

Atherosclerotic cardiovascular disease is the leading cause of mortality in adults over 50. LDL/ApoB lowering is one of the best-validated interventions for reducing [[chronic-inflammation|vascular inflammation]] and [[altered-intercellular-communication|atherosclerotic signalling]] — both of which overlap with the aging-hallmark framework. Bempedoic acid's MACE reduction in the CLEAR Outcomes statin-intolerant population makes it a tier-1 CV-prevention tool when statins are not an option.

### ACLY inhibition → acetyl-CoA pools → histone acetylation

ACLY generates cytosolic acetyl-CoA, which is also the substrate for histone acetyltransferases in the nucleus. Chronic ACLY inhibition could in principle alter nuclear acetyl-CoA availability and affect histone acetylation patterns — an epigenetic mechanism. This is mechanistically plausible but **has not been studied in the context of bempedoic acid in humans**. Whether the drug's degree of ACLY inhibition meaningfully affects nuclear (vs cytosolic) acetyl-CoA pools in liver remains unknown. #gap/no-mechanism for any aging-epigenetic effect.

### AMPK activation as CR-mimetic signal

The hepatic AMPK activation documented by Pinkosky et al. is pharmacologically interesting because AMPK is a key node of the [[deregulated-nutrient-sensing]] hallmark. AMPK activation produces [[mtor]] suppression and [[disabled-macroautophagy|autophagy induction]] downstream. However, clinical aging-biomarker data for bempedoic acid outside of LDL-C and CV events are absent. #gap/needs-human-replication for any aging-specific biomarker benefit beyond LDL reduction.

## Comparison to other LDL-lowering approaches

| Agent | Mechanism | LDL-C reduction | SAMS risk | CV outcomes evidence | Route |
|---|---|---|---|---|---|
| Statins ([[hmgcr]] inhibitors) | HMGCR competitive inhibition | 30–55% | High | Yes (multiple large RCTs) | Oral |
| Ezetimibe | NPC1L1 inhibition (gut absorption) | ~18–20% | None | Yes (IMPROVE-IT [^cannon2015]) | Oral |
| Bempedoic acid (this page) | ACLY inhibition → SREBP-2 → LDLR | 17–21% | **None** | Yes (CLEAR Outcomes [^nissen2023]) | Oral |
| PCSK9 inhibitors ([[pcsk9]]) | PCSK9 mAb → LDLR rescue | 50–60% | None | Yes (FOURIER, ODYSSEY) | Injection q2w |
| Inclisiran (siRNA) | PCSK9 siRNA → LDLR rescue | 50% | None | Ongoing (ORION) | Injection q6m |

**Positioning:** Bempedoic acid fills the oral, SAMS-free, moderate-potency niche. For patients needing >40% LDL reduction who are statin-intolerant, PCSK9 inhibitors are more potent but require injection. Bempedoic acid + ezetimibe (Nexlizet) can achieve ~28–38% combined LDL reduction orally, covering most patients at moderate risk who cannot tolerate statins. For very high-risk patients not at goal on bempedoic acid + ezetimibe, adding a PCSK9 inhibitor is a logical intensification step.

## Cross-references

- [[hmgcr]] — statin class target; ACLY acts upstream of HMGCR
- [[srebp-2]] — transcription factor activated by both statins and bempedoic acid via the same depletion-sensing pathway
- [[ldlr]] — the effector receptor upregulated by SREBP-2
- [[apob]] — the apolipoprotein on LDL/VLDL particles reduced by bempedoic acid
- [[mevalonate-pathway]] — the cholesterol biosynthesis pathway downstream of ACLY
- [[ampk]] — hepatic AMPK activator; aging-relevance node
- [[pcsk9]] — alternative non-statin target (injectable; higher potency)
- [[atherosclerosis]] — primary clinical indication; causal role of LDL/ApoB
- [[familial-hypercholesterolemia]] — patient population with highest LDL burden; bempedoic acid is used in FH patients intolerant of or needing add-on beyond maximal statin
- [[interventions/pharmacological/statins]] — first-line class from which bempedoic acid is differentiated
- [[lipoprotein-metabolism]] — canonical home for LDL/ApoB physiology

## Limitations and knowledge gaps

- #gap/long-term-unknown — CLEAR Outcomes median follow-up was 40.6 months. Long-term safety beyond 3–4 years is not established, particularly for the tendon-rupture signal (FDA Warning and Precaution, not a boxed warning).
- #gap/no-mechanism — Mechanism of tendon rupture is unknown; causal relationship has not been established per the FDA label.
- #gap/no-mechanism — ACLY inhibition → nuclear acetyl-CoA → histone acetylation changes: mechanistically plausible but unstudied in humans.
- #gap/needs-replication — AMPK activation-mediated aging effects (autophagy, mTOR, non-CV benefits) are preclinical only. No human aging-biomarker data.
- #gap/dose-response-unclear — Optimal LDL-C target achievement strategy combining bempedoic acid with other non-statin agents has not been systematically defined.
- The CLEAR Outcomes trial was conducted in a statin-intolerant population; the generalizability to statin-tolerant patients as add-on therapy requires separate evidence.
- Comparative head-to-head trials vs PCSK9 inhibitors in statin-intolerant secondary-prevention patients (the most common clinical decision point) are not available.

## Footnotes

[^pinkosky2016]: doi:10.1038/ncomms13457 · Pinkosky SL, Newton RS, Day EA, Ford RJ, Lhotak S, Austin RC, Birch CM, Smith BK, Filippov S, Groot PHE, Steinberg GR, Lalwani ND · *Nature Communications* 2016;7:13457 · in-vivo (mouse + DKO) + in-vitro (human hepatocytes + primary myotubes) · n=variable per figure (n=8 for ACSVL1 synthetase activity; n=4–10 for mouse lipid endpoints) · establishes: (1) ACSVL1 (gene: Slc27a2/FATP2) as the specific liver/kidney-restricted ACS isoform that bioactivates ETC-1002; (2) ACLY inhibition as primary mechanism for LDL-C lowering and atherosclerosis reduction; (3) hepatic AMPK activation by ETC-1002-CoA via direct allosteric mechanism independent of cellular energy charge (not AMP-dependent); (4) absence of ACSVL1 in human skeletal muscle as basis for SAMS-free profile · archive: downloaded (gold OA via PMC5133702)

[^banach2020]: doi:10.1001/jamacardio.2020.2314 · Banach M, Duell PB, Gotto AM Jr, Laufs U, Leiter LA, Mancini GBJ, Ray KK, Flaim J, Ye Z, Catapano AL · *JAMA Cardiology* 2020;5(10):1124–1135 · pooled Phase 3 RCT analysis · n=3,623 (ASCVD/HeFH pool: bempedoic acid 2,010 + placebo 999; statin-intolerant pool: bempedoic acid 415 + placebo 199) · LDL-C: −17.8% (ASCVD/HeFH, 95% CI −19.5% to −16.0%; p<.001); −24.5% (statin-intolerant, 95% CI −27.8% to −21.1%; p<.001); ApoB −15.1%, hsCRP −22.4% vs placebo (secondary endpoints; specific figures not visible in primary-results pages — see supplementary) · archive: downloaded

[^ballantyne2018]: doi:10.1016/j.atherosclerosis.2018.06.002 · Ballantyne CM, Banach M, Mancini GBJ, Lepor NE, Hanselman JC, Zhao X, Leiter LA · *Atherosclerosis* 2018;277:195–203 · rct · n=269 statin-intolerant patients · bempedoic acid 180 mg + ezetimibe 10 mg vs placebo; LDL-C ~−28% in combo arm · citation count: 400 · archive: not_oa

[^nissen2023]: doi:10.1056/NEJMoa2215024 · Nissen SE, Lincoff AM, Brennan D, Ray KK, Mason D, Kastelein JJP, Thompson PD, Libby P, Cho L, Plutzky J, Bays HE, Moriarty PM, Menon V, Grobbee DE, Louie MJ, Chen CF, Li N, Bloedon L, Robinson P, Horner M, Sasiela WJ, McCluskey J, Davey D, Fajardo-Campos P, Petrovic P, Fedacko J, Zmuda W, Lukyanov Y, Nicholls SJ · *New England Journal of Medicine* 2023;388(15):1353–1364 · rct · n=13,970 statin-intolerant adults · primary endpoint HR 0.87 (95% CI 0.79–0.96, p=0.004) for 4-component MACE; LDL-C −21% at 6 months · citation count: 743 · archive: not_oa (closed access)

[^nissen2023pp]: doi:10.1001/jama.2023.9696 · Nissen SE, Menon V, Nicholls SJ, Brennan D, Laffin L, Mason D, Cho L, Kastelein JJP, Libby P, Ridker PM, Ray KK, Foody J, Louie MJ, Lincoff AM · *JAMA* 2023;330(2):131–140 · rct (prespecified subgroup analysis of CLEAR Outcomes) · n=4,206 primary-prevention patients (bempedoic acid 2,100; placebo 2,106); median follow-up 39.9 months · HR 0.70 (95% CI 0.55–0.89; p=0.002) for 4-component MACE; LDL-C −30.2 mg/dL (−21.3%) at 6 months; gout 2.6% vs 2.0%; adjudicated tendon rupture 1.4% vs 0.9% · archive: downloaded (PMC10336623)

[^cannon2015]: doi:10.1056/NEJMoa1410489 · Cannon CP, Blazing MA, Giugliano RP et al. (IMPROVE-IT Investigators) · *New England Journal of Medicine* 2015;372(25):2387–2397 · rct · n=18,144 acute coronary syndrome patients · ezetimibe + simvastatin vs simvastatin: HR 0.936 (95% CI 0.89–0.99) for MACE; established LDL lowering below statin alone as beneficial · citation count: 4,233 · archive: pending download (bronze OA)

[^hamayal2024]: doi:10.1080/14796678.2024.2388478 · Hamayal M, Shahid W, Akhtar CH, Shekiba F, Iftikhar I, Tahir MD, Awwab M, Hussain S, Naeem S, Hafeez M · *Future Cardiology* 2024;20(11–12):639–650 · meta-analysis · n=17,844 (6 RCTs; primary intervention n=8,130, secondary n=9,714) · pooled MACE RR 0.86 (95% CI 0.79–0.94; p=0.0005); MI significantly reduced (RR 0.76; 95% CI 0.66–0.89; p=0.0005); myalgia lower in bempedoic acid arm (RR 0.85; 95% CI 0.75–0.95; p=0.005); adverse events modestly increased overall (RR 1.02; 95% CI 1.00–1.03) but no significant difference in serious adverse events · archive: downloaded
