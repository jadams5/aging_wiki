---
type: intervention
aliases: [rapalog, rapalogs, mTOR inhibitors, mTORC1 inhibitors, sirolimus class, rapamycin family]
mode: pharmacological
mechanisms: [mtor-inhibition, mtorc1-inhibition, autophagy-induction]
targets: ["[[mtor]]"]
target-hallmarks: ["[[deregulated-nutrient-sensing]]", "[[disabled-macroautophagy]]", "[[loss-of-proteostasis]]", "[[stem-cell-exhaustion]]"]
target-pathways: ["[[mtor]]"]
human-evidence-level: limited
clinical-stage: phase-2
safety-profile: investigational
translation-gap: phase-3-rct-needed
next-experiment: "PEARL-style RCT extended to 5+ years with hard frailty+mortality composite endpoint in healthy adults 60+; or Mannick-style intermittent-dosing trial in lower respiratory infection prevention as a functional immunosenescence endpoint; n>=2,000."
clinical-trials-active: null
verified: true
verified-date: 2026-05-08
literature-checked-through: 2026-05-08
verified-by: claude
verified-scope: "Harrison 2009 (ITP rapamycin), Bjedov 2010 (Drosophila), PEARL 2025 (Moel et al.), and Arriola 2016 (intermittent dosing) verified end-to-end against local PDFs. Stanfield 2026 RAPA-EX-01 (jcsm.70274) verified via PMC OA full text (PMC13082878) — primary endpoint, sensitivity analyses, secondary outcomes (incl. epigenetic clocks), AE summary, and SAE pneumonia case extracted from PMC HTML rendering. Mannick 2014 and Mannick 2018 (Sci Transl Med) verified via PubMed abstract + Crossref metadata only (not_oa, no local PDF). Mannick 2021 (Lancet Healthy Longevity Phase 2b/3 RTB101) verified via PubMed PMID:33977284 abstract (not_oa). Johnson 2013 review not verified (not_oa). PROTECTOR1 press-release-only claim unchanged."
---

# mTOR Inhibitors (Rapalogs)

A pharmacological class that inhibits mammalian/mechanistic target of rapamycin complex 1 (mTORC1), the central nutrient-sensing kinase hub that integrates amino acid, energy, and growth-factor signals to gate anabolic programs. The founding member, [[rapamycin]] (sirolimus), is the **most extensively validated longevity-extending intervention in mammals** — extending lifespan across three independent NIA Interventions Testing Program (ITP) sites in genetically heterogeneous mice [^harrison2009]. The class has FDA approval for organ transplant rejection and several oncology indications; its use for aging is off-label and investigational.

This page covers the **drug class as a whole**. Compound-specific data live in `molecules/compounds/`:

- [[rapamycin]] (sirolimus) — verified-partial; the founding member and ITP lifespan anchor; PEARL trial
- [[everolimus]] (RAD001) — implicit stub; Mannick 2014/2018 immune-aging data
- temsirolimus — IV-only oncology rapalog; no aging-specific data; implicit stub

## Class definition and taxonomy

Three mechanistic tiers exist within the mTOR inhibitor class:

| Tier | Examples | Mechanism | Aging use |
|---|---|---|---|
| **Allosteric rapalogs (FKBP12-dependent)** | rapamycin, everolimus, temsirolimus, ridaforolimus | Bind FKBP12; complex docks FRB domain of mTOR; partial allosteric inhibition; mTORC1-selective acutely | Aging research; FDA-approved transplant/oncology |
| **ATP-competitive mTOR kinase inhibitors (TORKi / Torkinibs)** | Torin1, Torin2, pp242, INK128 | Occupy catalytic site; inhibit both mTORC1 and mTORC2 fully; also inhibit PI3K family members (some) | Research tools only; not in clinical aging trials |
| **mTORC1-selective rapalogs** | RTB101 (dactolisib-adjacent; resTORbio) | Engineered for mTORC1 selectivity; improved PK vs rapamycin | Phase 3 PROTECTOR1 — **failed** |

For aging biology, the allosteric rapalogs dominate the clinical literature. ATP-competitive inhibitors are too toxic for chronic use. RTB101 represents the only dedicated aging-focused Phase 3 attempt — its failure is discussed below.

**Naming convention note:** per CLAUDE.md, `[[mtor]]` resolves to the mTOR pathway page (verified), not a protein page. The mTOR kinase protein lacks a dedicated protein page currently — see [[mtor]] for combined pathway+kinase biology.

## Compound table

| Compound | Alias | Route | Half-life | Key aging-relevant evidence | Status |
|---|---|---|---|---|---|
| **[[rapamycin]]** | Sirolimus | Oral | ~62 h | ITP lifespan extension [^harrison2009]; PEARL 48-wk healthspan null on VAT [^pearl2025]; RAPA-EX-01 13-wk null + sensitivity-favoring-placebo on chair-stand [^stanfield2026]; Mannick immune data (via everolimus proxy) | FDA-approved transplant; off-label aging |
| **[[everolimus]]** | RAD001 | Oral | ~28 h | Mannick 2014 vaccine response +20% [^mannick2014]; Mannick 2018 infection reduction [^mannick2018] | FDA-approved oncology/TSC; aging off-label |
| **Temsirolimus** | CCI-779 | IV only | ~17 h (rapamycin metabolite) | No dedicated aging trial; preclinical Drosophila overlap with rapamycin literature | FDA-approved renal cell carcinoma |
| **RTB101** (BEZ235) | — | Oral | Not published | Phase 2a (n=264, as BEZ235+RAD001) significant; Phase 2b (n=652, RTB101 alone) significant in pooled analysis; Phase 3/PROTECTOR1 (n=1,024) failed primary endpoint; see below | Development discontinued (resTORbio) |

Ridaforolimus (AP23573) is an additional rapalog in oncology development; it has no aging-specific trial data and is omitted from the detailed comparison.

## Mechanism

### mTORC1 vs mTORC2: the critical distinction

The mTOR kinase exists in two structurally distinct complexes with different substrate profiles and rapamycin sensitivity [^johnson2013review]:

**mTORC1** (mTOR + Raptor + mLST8 + PRAS40 + Deptor):
- Phosphorylates **S6K1** (T389) → ribosome biogenesis, protein synthesis
- Phosphorylates **4E-BP1** → cap-dependent translation
- Suppresses **ULK1** (S757) → when mTORC1 is inhibited, ULK1 is activated → [[autophagy]] initiation
- Acutely sensitive to allosteric rapalogs

**mTORC2** (mTOR + Rictor + mSin1 + mLST8):
- Phosphorylates **AKT S473** → insulin signaling, glucose homeostasis
- Phosphorylates **SGK1, PKCα** → cytoskeletal organization
- Rictor subunit sterically occludes the FKBP12-rapamycin docking site → **acutely rapamycin-resistant**
- Suppressed by chronic/high-dose rapamycin exposure (Lamming et al. 2012 — mechanism of rapamycin-induced insulin resistance) #gap/no-fulltext-access for direct verification

**Why this matters for aging dosing:** most aging benefits (lifespan extension, autophagy induction, reduced SASP) are attributed to mTORC1 inhibition. mTORC2 suppression drives the adverse metabolic effects (hyperglycemia, dyslipidemia, insulin resistance) at transplant doses. The intermittent dosing strategy — weekly rather than daily — is designed to achieve transient mTORC1 inhibition while allowing mTORC2 to recover between doses [^arriola2016].

### Downstream aging pathways

mTORC1 inhibition intersects multiple aging hallmarks (see [[mtor]] for pathway-level detail):

- **Autophagy de-repression** → improved proteostasis, mitochondrial quality control → [[disabled-macroautophagy]], [[loss-of-proteostasis]]
- **Reduced anabolic sensing of amino acids / growth factors** → mimics nutrient-restricted state → [[deregulated-nutrient-sensing]]
- **SASP suppression** — mTOR-dependent translation of SASP cytokines is reduced; indirect reduction in senescent cell paracrine signaling → [[cellular-senescence]] (indirect)
- **Stem cell rejuvenation** — in aged mice, rapamycin rejuvenates intestinal stem cells and hematopoietic stem cells; mechanism involves reducing mTOR-driven hyperactivation of stem cell cycling → [[stem-cell-exhaustion]] #gap/needs-human-replication

## Aging evidence

### Mammalian lifespan: Harrison 2009 ITP (mouse)

The foundational lifespan experiment [^harrison2009]:

- **Design:** genetically heterogeneous UM-HET3 mice; n=1,960 total; treatment started at 600 days (~20 months; late middle age); microencapsulated rapamycin 14 mg/kg food (~2.24 mg/kg/day)
- **Sites:** three independent NIA ITP sites (Jackson Laboratory, U Michigan, UTHSC)
- **Result:** mean lifespan extended +13% (females) and +9% (males); replicated independently at all three sites; 90th-percentile lifespan similarly extended; p<0.0001 pooled log-rank
- **Significance:** first demonstration that a pharmacological intervention started in late middle age extends lifespan in mammals; mTOR inhibition established as a conserved longevity pathway

Miller 2014 ITP dose-escalation showed dose-dependent effects up to +23–26% median lifespan extension at the highest rapamycin dose (42 ppm); females consistently show larger effects. See [[rapamycin]] for full quantitative detail.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — mTOR is highly conserved; ITP mice are genetically heterogeneous (UM-HET3) |
| Phenotype conserved in humans? | in-progress — human aging endpoints not yet tested in a powered trial |
| Replicated in humans? | in-progress — PEARL (n=114) and Mannick trials are Phase 2 surrogates only |

### Invertebrate lifespan: Bjedov 2010 Drosophila (fly)

Rapamycin feeding extends lifespan in adult *Drosophila melanogaster* [^bjedov2010]:

- Rapamycin extended lifespan in both male and female flies when fed to adults only (not during development); significant extension occurred at 50, 200, and 400 µM with no significant difference between effective concentrations; 1 µM had no effect; females showed larger extensions than males
- Mechanism traced to TORC1 branch specifically (not TORC2/IIS/AMPK); autophagy and translation inhibition were identified as downstream mechanisms; 4E-BP and autophagy (ATG5) were both required
- Lifespan extension was not due to reduced feeding (caloric restriction confound excluded by food consumption measurements); rapamycin extended lifespan beyond the maximum achievable by dietary restriction and in flies with lifespan already maximized by DR, indicating additional mechanisms beyond CR mimicry

#gap/needs-human-replication — Invertebrate evidence is cross-phyletic support; does not substitute for mammalian or human data.

### Human immune aging: Mannick 2014 and 2018

**Mannick 2014** [^mannick2014] — the first randomized human trial of mTOR inhibition for an aging outcome:

- **Design:** randomized, placebo-controlled; n=218 healthy elderly volunteers (≥65 years)
- **Intervention:** everolimus (RAD001) 0.5 mg/day, 5 mg/week, or 20 mg/week × 6 weeks before influenza vaccination
- **Primary endpoint:** influenza vaccine titer response (anti-hemagglutinin antibody titer at 4 weeks post-vaccination)
- **Key findings:** all three dosing schedules improved vaccine titers by ~20% compared to placebo; PD-1+ exhausted CD4 and CD8 T cell frequencies reduced; suggesting partial reversal of immunosenescence
- **Safety:** dose-dependent adverse effects; mouth sores at higher doses; tolerable at 5 mg/week

**Mannick 2018** [^mannick2018] — Phase 2a follow-up combining catalytic and allosteric mTOR inhibitors:

- **Design:** randomized, double-blind, placebo-controlled; n=264 adults ≥65 years
- **Intervention:** BEZ235 (RTB101; catalytic mTOR inhibitor) + RAD001/everolimus (allosteric mTOR inhibitor) in low-dose combination vs placebo × 6 weeks; followed for 1 year post-treatment
- **Primary endpoint:** rate of infections over 1-year follow-up
- **Key findings:** the BEZ235+RAD001 combination significantly reduced the rate of infections compared to placebo (p=0.001); antiviral gene expression was upregulated; influenza vaccine response improved in the treatment group
- **Significance:** provided Phase 2a proof-of-concept that dual TORC1 inhibition (catalytic + allosteric) using a functional infection endpoint can show benefit in elderly immune function; established RTB101 (BEZ235) as the lead compound for subsequent larger trials

Note: A separate Phase 2b/3 program (Mannick 2021, *Lancet Healthy Longevity*; doi:10.1016/S2666-7568(21)00062-3) tested RTB101 10 mg/day alone and RTB101 + everolimus 0.1 mg/day vs placebo in n=652 (Phase 2b) and n=1,024 (Phase 3; PROTECTOR1). The Phase 2b arm found RTB101 10 mg/day alone (pooled parts 1+2 analysis) significantly reduced lab-confirmed RTIs (19% vs 28% placebo; OR 0.601, p=0.02). The Phase 3 trial (PROTECTOR1; RTB101 monotherapy only) failed its primary endpoint. #gap/needs-replication

#gap/needs-replication — The Mannick 2014 trial uses everolimus (RAD001); the Mannick 2018 Phase 2a trial uses BEZ235 (catalytic mTOR inhibitor) + RAD001 combination. Neither uses sirolimus/rapamycin directly; immune-aging effects likely generalize across rapalogs but this is not confirmed with sirolimus. The subsequent Phase 2b/3 program (Mannick 2021) used RTB101 (a distinct catalytic inhibitor, also called BEZ235 in the Phase 2a context) alone and in combination with everolimus 0.1 mg.

### PEARL trial 2025: healthspan in healthy adults

Full data on the PEARL trial are documented on [[rapamycin]] (verified-partial); summary here for class-page completeness [^pearl2025]:

- **Design:** 48-week decentralized double-blind RCT; n=114 completers; compounded rapamycin 5 or 10 mg/week vs placebo
- **Critical caveat:** compounded rapamycin had ~1/3 the bioavailability of commercial sirolimus — effective doses were ~1.67 and ~3.33 mg commercial equivalents respectively
- **Primary endpoint (VAT):** not significantly changed
- **Notable secondary signals:** lean tissue mass improved in women at 10 mg (p=0.013); self-reported pain improved in women at 10 mg (p<0.001); general health and emotional well-being improved in the 5 mg group for all genders
- **Conclusion:** tolerable safety at these doses; pilot-scale; no hard aging endpoint; bioavailability confound complicates dose interpretation

#gap/needs-replication — PEARL is n=114, 48-week, with surrogate endpoints and a significant bioavailability confound. Results are hypothesis-generating, not confirmatory.

### RAPA-EX-01 trial 2026: rapamycin × exercise null

Full data on RAPA-EX-01 are documented on [[rapamycin]] and [[studies/stanfield-2026-rapa-ex-01]]; summary here for class-page completeness [^stanfield2026]:

- **Design:** 13-week double-blind RCT (ACTRN12624000790549); n=40 sedentary adults aged 65–85; commercial sirolimus 6 mg/week vs placebo, both arms exercising (chair-stands + exercycle 3×/week)
- **Hypothesis tested:** "rapamycin cycling hypothesis" — alternating mTORC1 inhibition (rest days) and activation (training days) might preserve or amplify training-induced gains
- **Primary endpoint (30-s chair-stand reps, ITT):** Δ −2.13 reps (95% CI −4.61 to 0.34, p=0.089) — favors placebo, ns
- **Sensitivity analyses (prespecified) reach significance favoring placebo:** complete-case Δ −2.46 reps (p=0.045); per-protocol Δ −3.44 reps (p=0.007, Cohen's d −0.90)
- **All secondary functional outcomes** (grip, 6MWD, SF-36) directionally favored placebo, none significant
- **Four epigenetic clocks** (PCGrimAge, SystemsAge, OMICmAge, DunedinPACE) showed mixed non-significant trends
- **AE burden** higher in sirolimus arm (99 vs 63 total events); 1 SAE — community-acquired pneumonia after a single 6 mg dose, drug-relatedness cannot be excluded
- **Authors' interpretation:** rapamycin's 62-h half-life means 6 mg/week does not produce the on-off mTORC1 pulse the cycling hypothesis requires — drug persists across the training stimulus and blunts adaptation. The result rules out 6 mg/week as the right dose-schedule for combined rapamycin-exercise interventions but does not falsify the cycling hypothesis in principle.

#gap/needs-replication — RAPA-EX-01 is n=40 across 13 weeks; sensitivity analyses are exploratory. The "lower dose or less-frequent dosing" follow-up the authors propose has not been run.

**Class-level pattern (R34, 2026-05-08):** PEARL 2025 (rapamycin, body composition) and RAPA-EX-01 2026 (rapamycin, functional capacity) are the two dedicated aging-rejuvenation rapamycin RCTs to date and **both reported null/negative on their prespecified primary endpoints**. The earlier positive trials in this class used everolimus (Mannick 2014 immune aging; Mannick 2018 BEZ235+RAD001 infection reduction) — different rapalog, different mechanism endpoint. The class's human aging-rejuvenation thesis at the n=1-biohacker dose range now has two consecutive negative high-quality data points and is in active need of dose × schedule × outcome reformulation. #gap/contradictory-evidence — discrepancy with mouse ITP continuous-feeding lifespan extension is unresolved.

## RTB101 PROTECTOR1 Phase 3 failure

ResTORbio's PROTECTOR1 trial (Phase 3; n=1,024; adults ≥65 years without COPD and not current smokers) tested RTB101 10 mg/day alone to prevent respiratory illness. The trial **failed to meet its primary endpoint** — no significant reduction in clinically symptomatic respiratory illness (RTB101 26% vs placebo 25%; OR 1.07, p=0.65). Note: the Phase 3 primary endpoint was symptomatic respiratory illness (not required to be PCR-confirmed), a broader and harder-to-detect endpoint than the lab-confirmed RTI endpoint used in Phase 2b [^mannick2021protector].

This failure has significant implications for the class:

1. **Endpoint mismatch may explain failure** — Phase 3 used clinically symptomatic respiratory illness (no PCR confirmation required), while Phase 2b used lab-confirmed RTIs. RTB101 monotherapy showed a significant reduction in lab-confirmed RTIs in Phase 2b (pooled analysis: 19% vs 28%; OR 0.60, p=0.02) but failed in Phase 3 against the symptomatic endpoint. Antiviral gene upregulation was confirmed in both trials, suggesting on-target biological activity persisted.
2. **Seasonal variation** — trial timing and respiratory illness season overlap may have confounded the result
3. **Population selection** — Phase 3 excluded COPD patients and current smokers (lower baseline risk than Phase 2b), reducing detectable event rates
4. **Dose selectivity** — RTB101's mTORC1 selectivity (as a catalytic site inhibitor) may have missed important mTOR-dependent immune effects; the Phase 2a combination with everolimus showed p=0.001 for infection reduction

The failure does **not** invalidate the rapalog class for aging biology generally — it specifically negates RTB101 monotherapy against a symptomatic-illness endpoint in a lower-risk elderly population. The broader ITP lifespan data and Mannick Phase 2a combination data remain intact. Antiviral gene upregulation was confirmed in Phase 3, suggesting biological activity without translating to the clinical endpoint.

#gap/contradictory-evidence — RTB101 Phase 2b (lab-confirmed RTI, significant) vs Phase 3/PROTECTOR1 (symptomatic illness, failed) discordance requires resolution; endpoint differences, population differences, and seasonality are all candidate explanations.

## Dosing-window debate: transplant vs aging

| Context | Dose | Schedule | Primary targets | Known concerns |
|---|---|---|---|---|
| Transplant immunosuppression | 2–5 mg/day (trough-guided) | Daily, long-term | mTORC1 + mTORC2 | Hyperglycemia, dyslipidemia, wound healing, infection |
| Cancer (everolimus) | 10 mg/day | Daily, long-term | mTORC1 (+ mTORC2 chronic) | Same metabolic profile; cancer context shifts risk/benefit |
| Aging research — mouse ITP (high dose) | ~6–7 mg/kg/day via chow | Continuous | mTORC1 (+ some mTORC2) | Not directly translatable to human dose |
| Aging target — intermittent (PEARL) | 5–10 mg/week (compounded) | Once-weekly | mTORC1 (mTORC2 largely spared) | Bioavailability confound; short trial; small n |
| Aging target — Mannick trials | 0.5 mg/day or 5 mg/week (everolimus) | Various | mTORC1-selective schedule | Short duration (6–16 weeks); immune endpoint only |

The intermittent rationale rests on Arriola Apelo et al. 2016 mouse data showing weekly rapamycin spares mTORC2/AKT-S473 signaling and glucose homeostasis, while daily dosing impairs both [^arriola2016]. Direct human pharmacodynamic confirmation of this mTORC1/mTORC2 selectivity at weekly doses has not been published. #gap/needs-human-replication

## Safety profile

### At transplant doses (daily, chronic)

- **Metabolic:** hyperglycemia, insulin resistance, dyslipidemia (elevated triglycerides, LDL) — attributed to mTORC2 suppression of Akt-mediated insulin signaling
- **Wound healing:** impaired (mTOR coordinates fibroblast/keratinocyte proliferation)
- **Immunosuppression:** increased infection susceptibility; immunosuppression is dose-dependent and is the intended on-target effect for transplant but an adverse effect for aging
- **Mucositis:** mouth ulcers (class effect)
- **Pulmonary:** interstitial pneumonitis (rare; more common in oncology doses)

### At aging-targeted intermittent doses (5–10 mg/week)

Per Mannick 2014/2018 and PEARL 2025:
- Tolerable safety profile; adverse event rates similar to placebo
- Mouth sores most common complaint at higher doses (Mannick 2014: dose-dependent, at 20 mg/week)
- No signal for clinically significant immunosuppression at weekly doses in healthy adults over 6–48 weeks of observation across these trials
- GI symptoms reported more frequently than placebo in PEARL (10 mg: n=8, 5 mg: n=7 vs placebo: n=4 of completers reporting GI symptoms)

**Long-term safety at aging-target doses is entirely unknown** — no trial exceeds 16 months; transplant safety data does not transfer because the dose and schedule differ substantially. #gap/long-term-unknown

## Cross-class relationships

| Class | Mechanism relationship | Clinical relationship |
|---|---|---|
| [[caloric-restriction]] | CR suppresses mTOR (partly) via AMPK-mediated inhibition and reduced amino-acid tone; rapamycin mimics a subset of CR transcriptional effects | Mechanistic overlap but not equivalent; mouse gene-expression data show divergences [^harrison2009] |
| [[ampk-activators]] | AMPK inhibits mTORC1 via TSC2 phosphorylation and direct Raptor phosphorylation; independent upstream convergence on mTORC1 | Functional synergy proposed; combination with metformin studied preclinically |
| [[senolytics]] | Different mechanism (SCAP-targeting vs nutrient-sensing); rapamycin is a senomorphic (reduces SASP) rather than senolytic (does not kill senescent cells) | Clinical development proceeding in parallel; potential combination rationale #gap/no-mechanism |
| [[nad-precursors]] | NAD+ → sirtuin activation → AMPK/mTOR intersections; distinct pathway | Sibling geroprotector class; potential combinatorial interactions unexplored in humans |
| [[sirtuin-activators]] | SIRT1 can deacetylate mTOR pathway components; SIRT1-AMPK-mTOR axis proposed | Mechanistic intersection; SIRT1 activators (resveratrol, NAD+) convergent on some mTOR targets |

## SENS / hallmark mapping

- **SENS category:** Not a primary fit for any single SENS damage category. mTOR inhibition acts upstream of damage accumulation rather than removing specific damage types. Closest correspondence: MitoSENS (improved mitochondrial quality via autophagy/mitophagy) and AmyloSENS (improved proteostasis) — but these are indirect.
- **Hallmark targets:** [[deregulated-nutrient-sensing]] (primary), [[disabled-macroautophagy]] (via mTORC1 de-repression of ULK1), [[loss-of-proteostasis]] (via autophagy), [[stem-cell-exhaustion]] (preclinical only), [[cellular-senescence]] (SASP reduction, indirect)

## Clinical evidence summary (as of 2026)

| Trial | Agent | Population | Design | Key result | DOI |
|---|---|---|---|---|---|
| Harrison 2009 ITP [^harrison2009] | Rapamycin 14 ppm | UM-HET3 mice (n=1,960) | In-vivo, 3-site | Lifespan +13% F / +9% M | 10.1038/nature08221 |
| Bjedov 2010 [^bjedov2010] | Rapamycin adult feeding | *Drosophila* | In-vivo | Adult lifespan +10–15% | 10.1016/j.cmet.2009.11.010 |
| Mannick 2014 [^mannick2014] | Everolimus 0.5–20 mg | Healthy elderly ≥65 (n=218) | Phase 2a RCT | Vaccine titer +20%; PD-1+ T cells reduced | 10.1126/scitranslmed.3009892 |
| Mannick 2018 [^mannick2018] | BEZ235 (RTB101) + RAD001 combination | Elderly ≥65 (n=264) | Phase 2a RCT | BEZ235+RAD001 reduced infection rate (p=0.001); antiviral gene upregulation | 10.1126/scitranslmed.aaq1564 |
| Mannick 2021 (Phase 2b/3) | RTB101 10 mg/day ± everolimus 0.1 mg | Elderly ≥65 (Phase 2b n=652; Phase 3/PROTECTOR1 n=1,024) | Phase 2b + Phase 3 RCT | Phase 2b: RTB101 alone significantly reduced lab-confirmed RTIs (OR 0.60, p=0.02); Phase 3 (PROTECTOR1): RTB101 monotherapy failed primary endpoint | 10.1016/S2666-7568(21)00062-3 |
| PROTECTOR1 (failed) | RTB101 10 mg | Elderly ≥65 ≥2 risk factors (n=1,024) | Phase 3 RCT | Primary endpoint not met — RTB101 monotherapy failed | N/A (resTORbio press release) |
| PEARL 2025 [^pearl2025] | Rapamycin 5/10 mg/wk (compounded) | Healthy adults 50–85 (n=114) | Phase 2 RCT | VAT ns; lean mass ↑ women 10 mg; pain ↓ women 10 mg | 10.18632/aging.206235 |

#gap/needs-human-replication — No trial has used lifespan, frailty index, or validated biological-age clock as a primary endpoint in healthy aging adults. All positive human data uses immune-functional or surrogate endpoints.

## Limitations and open questions

- **No hard-endpoint aging trial.** All human data uses surrogate or functional endpoints (vaccine titer, infection rate, body composition, self-reported health). A Phase 3 trial with frailty composite or all-cause mortality endpoint would be needed to establish clinical utility for aging. #gap/needs-human-replication
- **RTB101 Phase 3 failure is unresolved.** Was the failure due to dose, trial design, indication mismatch, or insufficient mTORC1 inhibition alone? The mechanistic post-mortem has not been published. #gap/contradictory-evidence
- **Optimal dose and schedule for aging are unknown.** The weekly-dose rationale is mechanistically sound in mice but has not been validated pharmacodynamically in humans (mTORC2 sparing not directly confirmed). #gap/dose-response-unclear
- **Bioavailability confound in compounded rapamycin studies.** PEARL and several real-world cohort studies use compounded sirolimus with substantially reduced bioavailability versus commercial Rapamune; this complicates dose interpretation. #gap/needs-replication
- **Long-term immunosuppression risk at aging doses.** The transplant safety database does not apply to intermittent low doses. Cancer risk balance (antiproliferative vs immunosuppressive) is unresolved. #gap/long-term-unknown
- **Sex dimorphism in mouse ITP unexplained.** Females show systematically larger lifespan extension and higher blood levels at equivalent dietary dose; the mechanism (PK difference vs hormonal interaction) is unknown and may have implications for dosing in humans. #gap/no-mechanism
- **Veterinary aging trial context.** The University of Washington / Halloran lab dog rapamycin trial (Phase 2, small n) has begun and provides an intermediate model between mouse and human; data pending as of 2026. Not yet published at sufficient scale for wiki integration.

## Cross-references

- [[rapamycin]] — verified-partial compound page; foundational ITP lifespan data; PEARL trial; dosing-window mechanism
- [[mtor]] — verified pathway page; mTORC1/mTORC2 biology; detailed downstream substrate map
- [[autophagy]] — verified-partial; primary downstream process activated by mTOR inhibition
- [[deregulated-nutrient-sensing]] — primary hallmark targeted
- [[disabled-macroautophagy]] — hallmark addressed via autophagy de-repression
- [[loss-of-proteostasis]] — secondary hallmark benefit via improved proteostasis
- [[stem-cell-exhaustion]] — hallmark with preclinical evidence; not yet human-validated
- [[caloric-restriction]] — lifestyle intervention with mechanistic overlap (mTOR suppression as one downstream effect)
- [[ampk-activators]] — sibling pharmacological class; upstream convergent on mTORC1
- [[senolytics]] — distinct mechanism; complement rather than substitute
- [[nad-precursors]] — sibling geroprotector class; R23d batch
- [[sirtuin-activators]] — sibling geroprotector class; pathway intersections with mTOR
- [[interventions/pharmacological/senomorphics]] — rapamycin is classified as a senomorphic (SASP suppressor) within this schema

## Footnotes

[^harrison2009]: doi:10.1038/nature08221 · in-vivo · n=1,960 total (674 controls; 317–328/rapamycin group) · p<0.0001 · model: UM-HET3 genetically heterogeneous mice; 3 independent NIA ITP sites; rapamycin 14 mg/kg food started 600 days · Harrison DE et al. · *Nature* 2009 · locally available

[^bjedov2010]: doi:10.1016/j.cmet.2009.11.010 · in-vivo · Drosophila · rapamycin adult feeding; median adult lifespan +10–15% · Bjedov I et al. · *Cell Metabolism* 2010 · locally available

[^mannick2014]: doi:10.1126/scitranslmed.3009892 · rct · n=218 · everolimus 0.5 mg/day or 5/20 mg/wk × 6 wk · model: healthy elderly ≥65 yr · vaccine titer +~20%; PD-1+ T cells reduced · Mannick JB et al. · *Sci Transl Med* 2014 · not_oa — no local PDF #gap/no-fulltext-access

[^mannick2018]: doi:10.1126/scitranslmed.aaq1564 · rct (phase 2a) · n=264 · BEZ235 (RTB101) + RAD001 (everolimus) low-dose combination vs placebo × 6 wk; followed 1 yr · model: elderly ≥65 yr · combination reduced infection rate (p=0.001); antiviral gene expression upregulated · Mannick JB et al. · *Sci Transl Med* 2018 · not_oa — no local PDF #gap/no-fulltext-access — Note: RTB101 was the compound code for BEZ235; later Phase 2b (n=652) and Phase 3/PROTECTOR1 (n=1,024) results published as Mannick 2021 *Lancet Healthy Longevity* doi:10.1016/S2666-7568(21)00062-3

[^pearl2025]: doi:10.18632/aging.206235 · rct · n=114 completers (40/5 mg, 35/10 mg, 39/placebo) · 48 weeks · model: healthy adults 50–85 · VAT primary endpoint ns; lean tissue mass ↑ women 10 mg (p=0.013); pain ↓ women 10 mg (p<0.001) · Moel M et al. · *Aging* 2025 · locally available

[^stanfield2026]: [[studies/stanfield-2026-rapa-ex-01]] · doi:10.1002/jcsm.70274 · rct (double-blind, placebo-controlled, n=40) · 13 weeks · model: sedentary adults 65–85 yr; sirolimus 6 mg/week + home exercise vs. placebo + home exercise · primary 30-s chair-stand ITT Δ −2.13 reps (p=0.089); per-protocol Δ −3.44 reps, p=0.007, Cohen's d −0.90 (favors placebo); all secondary functional outcomes directionally favored placebo · Stanfield B et al. · *J Cachexia Sarcopenia Muscle* 2026 · PMC13082878 (OA); local PDF not yet downloaded

[^arriola2016]: doi:10.1111/acel.12405 · in-vivo + ex-vivo · n=9–11/group (GTT); n=6 (islet) · model: male C57BL/6J mice; multiple rapamycin schedules · weekly dosing spares mTORC2/AKT S473 and glucose homeostasis vs daily dosing · Arriola Apelo SI et al. · *Aging Cell* 2016 · locally available

[^mannick2021protector]: doi:10.1016/S2666-7568(21)00062-3 · rct (phase 2b + phase 3) · Phase 2b n=652 (179 in part 1; 473 in part 2); Phase 3/PROTECTOR1 n=1,024 · RTB101 5 mg and 10 mg/day (phase 2b part 1); RTB101 10 mg, 10 mg BID, RTB101+everolimus 0.1 mg (phase 2b part 2); RTB101 10 mg alone (phase 3) · Primary endpoint: lab-confirmed RTIs (phase 2b) / symptomatic respiratory illness (phase 3) · Phase 2b pooled analysis: RTB101 10 mg significantly reduced lab-confirmed RTIs (19% vs 28%; OR 0.601, p=0.02); Phase 3: failed (26% vs 25%; OR 1.07, p=0.65); antiviral gene upregulation confirmed in both · Mannick JB et al. · *Lancet Healthy Longevity* 2021 · not_oa — no local PDF #gap/no-fulltext-access (abstract and PubMed PMID:33977284 used for verification)

[^johnson2013review]: doi:10.1038/nature11861 · review · Johnson SC, Rabinovitch PS, Kaeberlein M · *Nature* 2013 · not_oa — no local PDF
