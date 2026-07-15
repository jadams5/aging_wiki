---
type: compound
aliases: [Actemra, RoActemra, atlizumab, MRA, anti-IL-6R mAb]
pubchem-cid: null
chembl-id: CHEMBL1237022
drugbank-id: DB06273
who-inn: tocilizumab
biologic: true
molecular-formula: null
molecular-weight-da: ~148000
mechanisms: [il-6-receptor-antagonism, cytokine-blockade, anti-inflammatory]
targets: ["[[il-6r]]", "[[il-6]]"]
hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: phase-3-rct-needed
next-experiment: "Adequately-powered aging-RCT (n≥400) in older adults selected by elevated hsCRP/IL-6, with pre-specified endpoints of frailty score, physical function, and biological age (e.g., DunedinPACE), controlling for infection risk via prophylactic antibiotic protocol."
clinical-trials-active: 5
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "AMBITION (Jones 2010), RECOVERY (2021), GiACTA (Stone 2017), and Cupido 2022 MR claims verified against primary source PDFs. OPTION (Smolen 2008) and TOWARD (Genovese 2008) not verified from primary PDF (not_oa); their n and ACR20 claims carry #gap/no-fulltext-access. Biggioggero 2018 review and Lu 2023 cohort not verified from primary PDF (not downloaded). Vargas-Maciel frailty pilot remains #gap/unsourced. ChEMBL/DrugBank identity fields not independently re-checked against live databases."
---

# Tocilizumab

A humanized IgG1 monoclonal antibody targeting the **interleukin-6 receptor (IL-6R / CD126)**. Developed by Chugai Pharmaceutical and co-developed/marketed by Roche/Genentech as **Actemra** (US) and **RoActemra** (EU). WHO International Non-proprietary Name: **tocilizumab**. FDA-approved across seven indications since 2010, making it the most clinically validated pharmacological tool for blocking the IL-6 signaling axis. Aging relevance: IL-6 is the principal SASP cytokine and the dominant serum biomarker of [[chronic-inflammation|inflammaging]]; tocilizumab is the canonical IL-6-axis blockade therapy and the comparator anchor for any proposed IL-6-axis aging intervention.

## Identity

- **Class:** Humanized IgG1 monoclonal antibody (Chugai/Roche platform)
- **Molecular weight:** ~148 kDa (typical for IgG1 biologic)
- **Isotype:** IgG1
- **ChEMBL ID:** CHEMBL1237022 (confirmed via ChEMBL API, 2026-05-09)
- **DrugBank ID:** DB06273
- **PubChem CID:** null — biologics of this size are not assigned small-molecule PubChem CIDs. #gap/needs-canonical-id — verify whether a PubChem biologics cross-reference exists.
- **Molecular formula:** not populated — complex glycoprotein; ~1,400 amino acids across heavy + light chains; glycosylation variable by production lot. #gap/needs-canonical-id
- **Development code:** MRA (Chugai internal)
- **Trade name(s):** Actemra (US/JP), RoActemra (EU/UK)

## Mechanism

Tocilizumab competitively binds both **soluble IL-6R (sIL-6R)** and **membrane-bound IL-6R (mIL-6R)** with high affinity, preventing IL-6 from engaging either receptor form. This blocks two distinct signaling modes:

- **Classical IL-6 signaling:** IL-6 binds mIL-6R on hepatocytes, B cells, monocytes, and some T cells → IL-6R/gp130 heterodimerization → JAK1/2/TYK2 activation → STAT3 phosphorylation → acute-phase protein synthesis, immune activation.
- **IL-6 trans-signaling:** IL-6 binds sIL-6R shed into circulation → IL-6:sIL-6R complex engages gp130 on virtually all nucleated cells (which lack mIL-6R) → same JAK-STAT3 cascade. This mode drives systemic chronic-inflammatory effects — relevant to aging biology because sIL-6R trans-signaling underlies many of the distant tissue effects of SASP-derived IL-6 [^franceschi2000].

Unlike anti-IL-6 antibodies (e.g., siltuximab), which neutralize the cytokine itself, tocilizumab blocks at the receptor level — it intercepts both locally produced and systemically circulating IL-6. This distinction matters for drug target modeling: anti-IL-6R blockade is complete (all IL-6 sources neutralized) but also removes physiological IL-6 signaling (liver acute-phase response, fever response).

Downstream pathway suppression (via STAT3): CRP, SAA, hepcidin, and fibrinogen synthesis; also suppresses the IL-6-driven component of SASP amplification (IL-6 is both a SASP output and a paracrine SASP amplifier via STAT3) — see [[sasp]].

### Pharmacokinetics

- **Half-life:** IV: dose-dependent, 6–14 days (concentration-dependent due to target-mediated drug disposition via mIL-6R); SC: ~13 days at 162 mg steady state [^biggioggero2018].
- **Formulations:** IV (Actemra) and SC (Actemra SC / RoActemra SC, approved 2013–2014 for RA and GCA).
- **Dosing (RA):** 4 mg/kg or 8 mg/kg IV every 4 weeks; or 162 mg SC weekly (body weight ≥100 kg) or every other week (< 100 kg).
- **Dosing (GCA):** 162 mg SC weekly with glucocorticoid taper [^stone2017].
- **Dosing (COVID-19 / CRS):** 8 mg/kg IV single dose (max 800 mg) [^recovery2021].
- **Clearance:** Proteolytic degradation; not metabolized hepatically or renally — contrast with small molecules.
- **Drug-drug interactions:** IL-6 suppresses CYP450 enzyme expression (CYP1A2, CYP2C9, CYP2C19, CYP3A4). Tocilizumab normalizes IL-6 levels → restores CYP expression → can alter plasma levels of co-administered drugs metabolized by these enzymes (e.g., warfarin, simvastatin, cyclosporine). Requires dose adjustment monitoring at initiation and cessation.

## FDA approvals

| Year | Indication | Notes |
|---|---|---|
| 2010 | Rheumatoid arthritis (moderate-severe, TNF-inadequate responders; then first-line) | IV; SC added 2013 |
| 2011 | Systemic juvenile idiopathic arthritis (sJIA) | IV |
| 2013 | Polyarticular juvenile idiopathic arthritis (pJIA) | IV; SC added 2021 |
| 2017 | Giant cell arteritis (GCA) | SC; first FDA-approved therapy for GCA specifically |
| 2017 | CAR-T cell cytokine release syndrome (CRS) | IV; first approved CRS therapy |
| 2021 | COVID-19 (hospitalized adults on systemic corticosteroids + supplemental O₂) | IV; Emergency Use then full approval |
| 2021 | Chimeric antigen receptor T-cell associated neurological toxicity (ICANS; as part of CRS indication) | IV |

Note: GCA, sJIA/pJIA, and CRS are all conditions where IL-6 trans-signaling is the dominant driver of tissue inflammation — consistent with the pharmacological mechanism. These indications validate the therapeutic axis but none constitutes evidence for aging-specific IL-6 reduction.

## Key clinical trial evidence

### RA pivotal trials

**OPTION (Smolen 2008)** [^smolen2008] — double-blind, placebo-controlled RCT in MTX-inadequate responders: #gap/no-fulltext-access (paper is not_oa; claims below unverified from primary PDF)
- n=623; tocilizumab 4 mg/kg or 8 mg/kg IV q4w vs placebo (all on background MTX).
- ACR20 at week 24: 59% (8 mg/kg) vs 44% (4 mg/kg) vs 26% (placebo); P<0.001 for both doses.
- Serious infections more frequent in treatment arms.

**AMBITION (Jones 2010)** [^jones2010] — tocilizumab monotherapy vs MTX monotherapy in MTX-naive:
- n=673; tocilizumab 8 mg/kg IV q4w vs MTX titrated up.
- ACR20: 69.9% (tocilizumab) vs 52.5% (MTX); P<0.001.
- First demonstration of monotherapy superiority to MTX, supporting IL-6 as primary driver in naive RA.

**TOWARD (Genovese 2008)** [^genovese2008] — tocilizumab add-on to csDMARDs in DMARD-inadequate responders: #gap/no-fulltext-access (paper is not_oa; claims below unverified from primary PDF)
- n=1,220 (largest RA pivotal trial); tocilizumab 8 mg/kg + csDMARD vs placebo + csDMARD.
- ACR20: 61% vs 25%; P<0.0001.

### Giant cell arteritis (GCA)

**GiACTA (Stone 2017)** [^stone2017] — Phase 3 double-blind RCT:
- n=251; randomized 2:1:1:1 to tocilizumab 162 mg SC weekly (n=100) or every other week (n=50) plus 26-week prednisone taper, or placebo plus 26-week prednisone taper (n=50), or placebo plus 52-week prednisone taper (n=51).
- Sustained remission through week 52: 56% (weekly), 53% (every other week) vs 14% (placebo + 26-week taper) and 18% (placebo + 52-week taper); p<0.001 for both tocilizumab groups vs the 26-week placebo group.
- Median cumulative prednisone dose over 52 weeks: 1862 mg in both tocilizumab groups vs 3296 mg (26-week placebo taper) — a ~43% reduction — and 3818 mg (52-week placebo taper). Potentially important for aging context given glucocorticoid-associated side-effects in older adults.

### COVID-19 — RECOVERY trial

**RECOVERY (2021)** [^recovery2021] — open-label platform RCT:
- n=4,116 hospitalized COVID-19 with hypoxia + systemic inflammation.
- 28-day mortality: 621/2022 (31%) tocilizumab vs 729/2094 (35%) usual care; rate ratio 0.85 (95% CI 0.76–0.94; p=0.0028).
- Significant reduction in need for invasive mechanical ventilation; significant increase in hospital discharge rate within 28 days (57% vs 50%; rate ratio 1.22, 95% CI 1.12–1.33; p<0.0001).
- Benefits were broadly consistent across subgroups. The benefit appeared larger among those receiving systemic corticosteroids (RR 0.79) than those not (RR 1.16); however, the authors note this interaction (p=0.01) "might reflect the play of chance" and was not the primary prespecified subgroup. #gap/needs-replication — corticosteroid-interaction finding should not be over-interpreted.
- **Largest-to-date RCT evidence for IL-6R blockade as an anti-inflammatory life-saving intervention** in humans with acute systemic inflammation — not an aging endpoint, but confirms the pharmacological hypothesis at scale.

## Aging-specific evidence

### Mechanistic rationale

IL-6 is:
1. A primary [[sasp|SASP]] cytokine secreted by senescent cells; also an NF-κB-driven paracrine SASP amplifier.
2. The defining biomarker of **inflammaging** — chronically elevated in healthy older adults independent of acute illness [^franceschi2000].
3. Causally linked to cardiometabolic outcomes via Mendelian randomization: IL-6R genetic instruments (IL6R Asp358Ala variant) lower CRP and cardiovascular disease risk, demonstrating that IL-6 axis activity is causal, not merely associative [^cupido2022].
4. A predictor of frailty incidence, functional decline, and mortality in longitudinal aging cohorts [^lu2023].

Tocilizumab therefore has a mechanistically coherent rationale as an aging-intervention candidate.

### Current aging clinical evidence: very limited

**No adequately-powered aging RCT has been completed.** The human trial evidence for aging-specific endpoints is confined to:

- **RA studies showing improvement in aging-adjacent endpoints:** Biggioggero 2018 review notes reduction in fatigue, anemia of chronic disease, and normalization of CRP/SAA in RA patients on tocilizumab [^biggioggero2018]. These are secondary/exploratory, not pre-specified aging endpoints, and the RA population is confounded by underlying autoimmune pathology.
- **Vargas-Maciel 2024-era frailty pilots:** small observational studies in rheumatic disease patients treated with tocilizumab show frailty score improvement over 6-12 months of treatment. These are hypothesis-generating case-series; no published placebo-controlled aging-frailty RCT exists as of 2026-05-09. #gap/unsourced — verify specific citations on next verifier pass.

**ClinicalTrials.gov active trials (RECRUITING + ACTIVE_NOT_RECRUITING, accessed 2026-05-09):** 5 active trials were found involving tocilizumab in contexts adjacent to aging (predominantly inflammatory/stroke; no dedicated frailty/inflammaging RCT identified). #gap/needs-replication

#gap/needs-human-replication — As of 2026-05-09, there is no completed Phase 2 or Phase 3 RCT testing tocilizumab against an aging-specific primary endpoint (frailty score, physical function, biological age, or lifespan) in an otherwise-healthy older-adult population selected by inflammaging criteria.

### IL-6R Mendelian randomization — causal evidence

Cupido et al. 2022 performed Mendelian randomization on both IL6 (the gene encoding IL-6) and IL6R (the gene encoding IL-6 receptor) using large GWAS datasets [^cupido2022]. Key findings:
- A polygenic IL6R instrument (up to 19 variants weighted for association with CRP; the Asp358Ala variant rs2228145 is one contributor but the instrument is not a single-variant instrument) associated with lower coronary artery disease (OR 0.90, 95% CI 0.86–0.95), any stroke, ischemic stroke, atrial fibrillation, and RA risk — consistent with the expected pharmacological effect of tocilizumab.
- The IL-6R instrument phenocopies the pharmacological effect of tocilizumab, providing causal-inference support that the drug's mechanism of action is on-target and that the IL-6 axis is causal — not merely correlative — in inflammatory disease outcomes.
- **Important safety signal:** The IL6R instrument was associated with *increased* pneumonia risk (OR 1.17, 95% CI 1.09–1.27; met multiple-testing threshold). The IL6 instrument did not show this pneumonia signal, suggesting IL-6R blockade (vs. IL-6 ligand blockade) may carry a differential infection risk. This is a mechanistically plausible concern given the role of IL-6 trans-signaling in lung mucosal immunity. #gap/long-term-unknown — whether this MR-predicted pneumonia risk is borne out in clinical trials of tocilizumab used chronically for aging indications is unknown.
- Caveat: MR estimates reflect lifelong partial reduction of IL-6R signaling via polygenic germline variation with modest per-variant effect sizes. They do not directly model complete pharmacological receptor blockade at a specific time in life.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — direct human pharmacological + MR evidence |
| Phenotype conserved in humans? | yes — RECOVERY, OPTION, GiACTA: anti-inflammatory effects confirmed |
| Replicated in aging-specific cohort? | no — aging-frailty/healthspan endpoint RCT not yet done |

## Safety profile

Tocilizumab is well-established across approved indications. Safety signals relevant to aging use:

**Infection risk** — the dominant concern:
- Upper and lower respiratory tract infections are the most common AEs in RA trials. In AMBITION (MTX-naive patients), total infection rates were 34.4% (tocilizumab) vs 37.3% (MTX) — not significantly different — but serious infections were numerically higher with tocilizumab (1.4% vs 0.7%).
- Serious infections (pneumonia, cellulitis, opportunistic): ~3–5% per year in RA; numerically higher than comparator bDMARDs in some head-to-head studies.
- Atypical infections (tuberculosis reactivation, herpes zoster, pneumocystis) occur; TB screening required at initiation.
- IL-6 blockade suppresses the liver acute-phase response → CRP and SAA are unreliable as infection markers during therapy. **Fever response may be blunted**; infection can present without classic signs in patients on tocilizumab. This is a specific safety concern in older adults where infection recognition is already attenuated.
- **Mendelian randomization signal (Cupido 2022):** The IL6R polygenic instrument was associated with increased pneumonia risk (OR 1.17, 95% CI 1.09–1.27), a signal not seen with IL6 instruments. This suggests IL-6R blockade may carry a pneumonia-specific risk beyond what is attributable to IL-6 signaling inhibition per se — possibly because mIL-6R-mediated classical signaling in lung tissue plays a protective role against *Streptococcus pneumoniae* and related pathogens [^cupido2022]. This is a mechanistic caution for aging-indication use in immunosenescent older adults.

**Laboratory abnormalities:**
- **Liver enzyme elevation (ALT/AST):** ~30% of patients develop grade 1–2 elevation; grade 3–4 in ~3%. Dose reduction or interruption required. Hepatotoxicity contraindicates use with other hepatotoxic drugs.
- **Neutropenia:** ~2% grade 3–4; dose-dependent; usually reversible on dose reduction.
- **Hyperlipidemia:** LDL and total cholesterol rise within weeks of initiation (IL-6 normally suppresses lipoprotein lipase; blockade reverses this). Clinically significant LDL elevations in ~25–30% of patients. The lipid effect is pharmacologically counterintuitive given the anti-inflammatory context — requires statin co-prescription consideration. #gap/dose-response-unclear — whether the LDL rise in older adults treated for an aging indication (lower-dose, less frequent dosing than RA) would be clinically meaningful is unknown.
- **GI perforation (rare):** ~0.26/100 patient-years in RA trials; more frequent in patients with diverticulitis history. Mechanism: IL-6 inhibition impairs intestinal mucosal healing. Caution in older adults with diverticular disease.

**Immunogenicity:** anti-drug antibody (ADA) development is less common with IV (~2%) than SC (~6%) formulation; high-titer ADA can reduce efficacy.

**Cost:** list price approximately $25,000–50,000 USD/year for RA indications. For a chronic aging-prevention indication in the general older-adult population, this is a major translation blocker. #gap/long-term-unknown — economic modeling for aging-specific dosing (possibly lower and less frequent than RA dosing) is unavailable.

## Translation gap — why tocilizumab is not used for aging prevention

Despite being the most powerful clinical-grade IL-6 axis blocker, tocilizumab has not advanced into dedicated aging-prevention trials for several reasons:

1. **No aging RCT exists.** The largest controlled trials (RECOVERY, GiACTA, OPTION, AMBITION, TOWARD) were all designed for acute inflammatory or autoimmune indications. The aging-as-inflammation hypothesis has not been powered-and-tested with frailty/healthspan endpoints.
2. **Infection safety trade-off.** Blunted fever response + elevated serious-infection risk in older adults (where pneumonia and sepsis are already leading causes of death) raises the acceptable risk-benefit threshold considerably higher than in working-age RA patients.
3. **Cost.** $25,000–50,000/year is economically non-viable as a public-health aging-prevention tool at current pricing. Biosimilars (multiple launched 2023–2024: Tofidence, Tyenne, Tecentriq-like biosimilars) are reducing cost but access remains a barrier for non-approved indications.
4. **Mechanistic uncertainty for aging endpoint.** RECOVERY and GiACTA demonstrate IL-6R blockade is efficacious for acute/autoimmune inflammation; the extrapolation to chronic low-grade inflammaging — where IL-6 elevation is smaller in magnitude and the pathological mechanism is more diffuse — has not been directly tested.
5. **Competing, cheaper alternatives in development.** Small-molecule JAK inhibitors (baricitinib, tofacitinib) partially overlap the downstream STAT3 pathway; colchicine and IL-1β inhibitors (canakinumab: [[canakinumab]]; anakinra: [[anakinra]]) address upstream nodes. A head-to-head aging-prevention trial has not been run across these alternatives.

## Classification

- **SENS strategy:** adjacent to [[frameworks/apoptosenes]] via SASP modulation; not directly mapped to a SENS damage category. IL-6 is a secreted signal, not a damage lesion per se.
- **Hallmarks targeted:** [[chronic-inflammation]] (primary), [[altered-intercellular-communication]] (via SASP IL-6 suppression)
- **Mechanism class:** `il-6-receptor-antagonism` — see [[frameworks/intervention-classes]] § IL-6R antagonist

## Cross-references

- **Primary target:** [[il-6r]] (implicit stub if absent)
- **Cytokine ligand:** [[il-6]]
- **Aging biomarker context:** [[il-6-biomarker]]
- **SASP mechanism:** [[sasp]]
- **Hallmarks:** [[chronic-inflammation]], [[altered-intercellular-communication]]
- **Comparator drugs (IL-1β axis):** [[canakinumab]] (CANTOS anchor), [[anakinra]] (IL-1Ra)
- **Intervention class context:** [[senomorphics]] (if it exists; IL-6R blockade is a high-potency senomorphic approach)
- **Downstream pathway:** [[jak-stat-pathway]]

## Limitations and gaps

- **No aging-specific primary endpoint RCT.** The entire human evidence base is in autoimmune/inflammatory disease or acute-illness populations. #gap/needs-human-replication
- **Frailty-pilot data anecdotal.** No published placebo-controlled trial in frailty-defined or inflammaging-defined older adults. #gap/needs-replication
- **Infection risk in older adults unquantified.** RA trial safety data cannot be directly extrapolated to immunosenescent 70+ populations without dedicated safety study. #gap/long-term-unknown
- **LDL-elevation in aging-dose context unknown.** Aging-indication dosing may differ from RA (lower frequency); LDL impact at sub-therapeutic dosing not characterized. #gap/dose-response-unclear
- **Molecular formula not populated.** Complex glycoprotein; lot-to-lot glycan variation means a single formula is an approximation at best; leave null until canonical FDA label value confirmed. #gap/needs-canonical-id
- **Cost barrier.** Translation for population-wide aging prevention blocked by cost at current pricing; biosimilar availability (2023–2024 US launches) is beginning to address this but non-approved-indication access remains limited. #gap/unsourced — biosimilar pricing data not independently verified here.
- **PubChem CID null.** Biologic; no small-molecule PubChem record expected. #gap/needs-canonical-id — verify biologics registry cross-reference on next lint pass.

## Footnotes

[^franceschi2000]: doi:10.1111/j.1749-6632.2000.tb06651.x · Franceschi C, Bonafe M, Valensin S, et al. · *Ann NY Acad Sci* 2000;908:244–254 · review · introduces "inflamm-aging" concept; IL-6 identified as central chronic pro-inflammatory mediator elevated with age · n/a (theoretical framework paper) · 5,032 citations (OpenAlex) · locally not downloaded (not_oa)

[^smolen2008]: doi:10.1016/S0140-6736(08)60453-5 · Smolen JS, Beaulieu A, Rubbert-Roth A, et al. · *Lancet* 2008;371(9617):987–997 · rct · model: RA adults inadequate MTX responders · n=623 · ACR20 at week 24: 59% (8 mg/kg) vs 26% (placebo); P<0.001 · OPTION trial · 1,389 citations (OpenAlex) · locally not downloaded (not_oa)

[^jones2010]: doi:10.1136/ard.2008.105197 · Jones G, Sebba A, Gu J, et al. · *Ann Rheum Dis* 2010;69(1):88–96 · rct · model: MTX-naive RA adults · n=673 · ACR20: 69.9% (tocilizumab) vs 52.5% (MTX); P<0.001 · AMBITION trial · 789 citations (OpenAlex) · PDF locally available

[^genovese2008]: doi:10.1002/art.23940 · Genovese MC, McKay JD, Nasonov EL, et al. · *Arthritis Rheum* 2008;58(10):2968–2980 · rct · model: DMARD-inadequate RA adults · n=1,220 · ACR20: 61% (tocilizumab + csDMARD) vs 25% (placebo + csDMARD); P<0.0001 · TOWARD trial · 851 citations (OpenAlex) · locally not downloaded (not_oa)

[^stone2017]: doi:10.1056/NEJMoa1613849 · Stone JH, Tuckwell K, Dimonaco S, et al. · *N Engl J Med* 2017;377(4):317–328 · rct · model: GCA adults (mean age ~69) · n=251 (2:1:1:1 randomization: tocilizumab weekly SC n=100; every-other-week n=50; placebo+26-wk taper n=50; placebo+52-wk taper n=51) · sustained remission at week 52: 56% (tocilizumab weekly) vs 53% (every other week) vs 14% (placebo 26-wk taper) vs 18% (placebo 52-wk taper); P<0.001 for both tocilizumab groups vs 26-wk placebo · GiACTA trial · PDF verified 2026-05-09

[^recovery2021]: doi:10.1016/S0140-6736(21)00676-0 · RECOVERY Collaborative Group · *Lancet* 2021;397(10285):1637–1645 · rct · model: hospitalized COVID-19 adults with hypoxia (O₂ sat <92%) + CRP ≥75 mg/L · n=4,116 (tocilizumab n=2,022; usual care n=2,094) · 28-day mortality rate ratio 0.85 (95% CI 0.76–0.94; p=0.0028) · hospital discharge within 28 days rate ratio 1.22 (95% CI 1.12–1.33; p<0.0001) · RECOVERY trial · PDF verified 2026-05-09

[^biggioggero2018]: doi:10.2147/DDDT.S150580 · Biggioggero M, Crotti C, Becciolini A, Favalli EG · *Drug Des Devel Ther* 2019;13:1187–1208 · review · model: RA humans · comprehensive evidence review covering SC vs IV formulations; pharmacokinetics; safety; co-morbidity benefits (fatigue, anemia, cardiovascular) · PMID:30587928 · locally not downloaded

[^cupido2022]: doi:10.1111/bcp.15191 · Cupido AJ, Asselbergs FW, Natarajan P, et al. (CHARGE Inflammation Working Group) · *Br J Clin Pharmacol* 2022;88(5):2875–2884 · mendelian-randomization · model: human GWAS populations (UK Biobank CRP GWAS as exposure; multiple outcome GWAS) · polygenic IL6R instrument (up to 19 CRP-associated variants in 100 kb window); lower CAD (OR 0.90, 0.86–0.95), stroke, AF, RA risk; increased pneumonia risk (OR 1.17, 1.09–1.27) · PDF verified 2026-05-09

[^lu2023]: doi:10.1007/s11357-023-00906-2 · Lu Y, et al. · *GeroScience* 2023;45(6):3591–3605 · observational (longitudinal cohort) · model: community-dwelling older adults · elevated plasma IL-6 associated with higher probability of multi-domain functional decline ("low in all domains" intrinsic capacity trajectory) · PMID:37620614 · locally not downloaded
