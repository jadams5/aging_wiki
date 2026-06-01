---
type: intervention
aliases: [fibrates, PPAR-alpha agonists, peroxisome proliferator-activated receptor alpha agonists, fibrate class]
mode: pharmacological
mechanisms: [ppara-agonism, cr-mimetic, fatty-acid-oxidation, adiponectin-induction, lipid-modulation]
targets: ["[[ppara]]"]
target-hallmarks: ["[[deregulated-nutrient-sensing]]", "[[altered-intercellular-communication]]"]
target-pathways: ["[[insulin-igf1]]", "[[ampk]]"]
human-evidence-level: limited
clinical-stage: phase-2
safety-profile: well-established
translation-gap: phase-3-rct-needed
next-experiment: "A geroscience-endpoint RCT of fenofibrate vs placebo in metabolically frail elderly adults (n≥200, 12–24 mo) using DunedinPACE or GrimAge shift as primary endpoint, with frailty-index slope and adiponectin as pre-specified secondaries."
clinical-trials-active: 0
literature-checked-through: 2026-05-14
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-05-14. Verify quantitative claims and source attributions against primary sources. Key DOIs for wiki-verifier: 10.1016/S0140-6736(05)67667-2 (FIELD), 10.1056/NEJMoa1001282 (ACCORD-Lipid), 10.1056/NEJM198711123172001 (Helsinki), 10.2337/dc20-1533 (Jo 2021 cohort), 10.1016/j.metabol.2022.155327 (Kim 2022 cohort), 10.1074/jbc.M406739200 (Corton 2004 CR mimetics), 10.18632/aging.100548 (Brandstädt 2013 C. elegans), 10.1038/s41598-025-89923-z (McKenzie 2025 dogs — locally available). FIELD trial and Helsinki Heart Study are closed-access (not_oa). ACCORD-Lipid download pending.

# PPARα Agonists (Fibrates)

A pharmacological class that activates the **peroxisome proliferator-activated receptor alpha (PPARα / NR1C1)**, a nuclear transcription factor that coordinates the cellular response to fasting and fatty-acid abundance. The fibrates are the clinically established drug class within this category: fenofibrate, gemfibrozil, bezafibrate, ciprofibrate, and the newer selective agonist pemafibrate. They have ~50 years of clinical safety data as lipid-modifying agents, with FDA approval for hypertriglyceridemia and mixed dyslipidemia.

In geroscience, PPARα agonists have attracted attention as potential **caloric-restriction mimetics** — the fasting/CR transcriptional program substantially overlaps with PPARα activation [^corton2004], and fibrates recapitulate several aging-biomarker shifts (insulin↓, adiponectin↑, free fatty acids↓) that associate with reduced frailty in humans and companion animals [^mckenzie2025]. No Phase 3 trial has used a longevity or geroscience primary endpoint.

This page covers the **drug class as a whole**. Compound-specific data are intended to live in `molecules/compounds/`:

- [[fenofibrate]] — implicit stub; the most-studied member for aging-adjacent signals; Loyal LOY-002 speculation centers here
- [[gemfibrozil]] — implicit stub; Helsinki Heart Study anchor; less hepatic PPARα potency vs fenofibrate
- [[bezafibrate]] — implicit stub; pan-PPAR agonist (PPARα/γ/δ); C. elegans lifespan data
- [[ciprofibrate]] — implicit stub; high-potency PPARα; limited geroscience data
- [[pemafibrate]] — implicit stub; selective PPARα modulator (SPPARMα); PROMINENT trial 2022

---

## Nuclear receptor biology — PPARα (NR1C1)

PPARα is a member of the nuclear receptor superfamily (NR1C1). It functions as an obligate heterodimer with **RXRα (retinoid X receptor alpha)**, binding to **peroxisome proliferator response elements (PPREs)** — consensus hexanucleotide repeats (AGGNCA) in the promoters of target genes — to activate transcription. Key co-activators include PGC-1α (which amplifies mitochondrial biogenesis signaling) and SRC-1/CBP/p300.

**Endogenous ligands:** long-chain fatty acids (oleic acid, linolenic acid, EPA/DHA), fatty acyl-CoA thioesters, and oxidized phospholipids released during fasting. This positions PPARα as the cell's molecular detector of fatty-acid availability — activated when stored lipids are mobilized during caloric restriction or prolonged fasting.

**Fibrate binding:** fibrates enter the ligand-binding domain (LBD) and stabilize the active conformation of the AF-2 helix, displacing co-repressors (NCoR, SMRT) and recruiting co-activators, driving transcriptional output from PPRE-containing promoters. Fenofibrate is a prodrug (ester) hydrolyzed in vivo to the active acid fenofibric acid; gemfibrozil is an active acid directly.

---

## Drug class — the fibrates

| Compound | Selectivity | Route | Half-life | FDA status | Key aging-adjacent data |
|---|---|---|---|---|---|
| **[[fenofibrate]]** | PPARα (potent) | Oral (prodrug → fenofibric acid) | ~20 h (fenofibric acid) | Approved — hypertriglyceridemia, mixed dyslipidemia | FIELD trial [^field2005]; ACCORD-Lipid [^accord2010]; Korean cohort mortality signals [^jo2021][^kim2022]; Loyal LOY-002 speculation |
| **[[gemfibrozil]]** | PPARα (moderate) | Oral (active acid) | ~1.5 h | Approved — hypertriglyceridemia | Helsinki Heart Study [^frick1987]; inhibits CYP2C8 (drug–drug interaction risk) |
| **[[bezafibrate]]** | PPARα/γ/δ (pan-PPAR) | Oral | ~2 h | Not FDA-approved; approved EU/elsewhere | C. elegans lifespan extension [^brandstadt2013]; pan-PPAR activity complicates PPARα-selective attribution |
| **[[ciprofibrate]]** | PPARα (high potency) | Oral | ~80 h | Not FDA-approved in US; approved EU | Limited geroscience data |
| **[[pemafibrate]]** | Selective PPARα modulator (SPPARMα) | Oral | ~30 h | Not FDA-approved; PROMINENT trial (NEJM 2022) | PROMINENT failed primary CV endpoint despite 27% TG reduction [^prominent2022]; aging-specific data: none |

**Naming note:** pemafibrate is not a classical fibrate (structurally distinct from clofibrate-class compounds) but shares PPARα agonism as its mechanism and is catalogued here as the SPPARMα sub-class.

---

## Molecular mechanism

### PPARα-RXRα → PPRE transcriptional program

PPARα-RXRα heterodimer binding to PPREs activates a transcriptional program that recapitulates the cellular adaptation to caloric restriction or fasting:

- **Fatty acid β-oxidation genes** — ACOX1 (acyl-CoA oxidase 1), CPT1A (carnitine palmitoyltransferase 1A; rate-limiting for mitochondrial long-chain fatty acid import), ACADM (medium-chain acyl-CoA dehydrogenase), HADHA
- **Ketogenesis genes** — HMGCS2 (HMG-CoA synthase 2; mitochondrial), HMGCL
- **Apolipoprotein modulators** — APOA1↑ (HDL-C raising), APOC3↓ (TG-raising apolipoprotein suppressed), APOA5↑ → net TG reduction
- **FGF21 induction** — PPARα strongly induces FGF21 (fibroblast growth factor 21), itself proposed as a CR mimetic [^fgf21cr2012]
- **Anti-inflammatory effects** — PPARα transrepresses NF-κB and AP-1, reducing inflammatory gene expression; suppresses acute-phase protein production (fibrinogen, CRP)

### Downstream cross-talk with AMPK and mTORC1

PPARα activation does not directly phosphorylate AMPK, but the metabolic consequences of PPARα-driven fatty acid oxidation increase the AMP/ATP ratio in hepatocytes under substrate-flux conditions, providing indirect AMPK activation pressure. AMPK in turn phosphorylates and activates TSC2, suppressing mTORC1 — placing PPARα agonism upstream of the canonical mTOR/AMPK aging-relevant axis. This cross-talk is documented in the liver but is less characterized in other tissues. See [[ampk]] and [[mtor]] pathway pages for detailed downstream biology.

### Adiponectin induction

A consistent and pharmacologically relevant effect of fibrates in humans is **adiponectin induction** — circulating adiponectin rises 10–30% in most clinical studies. Adiponectin itself signals through AdipoR1/R2 receptors to activate AMPK and PPARα in peripheral tissues, creating a positive feedback loop between PPARα agonism and adiponectin-mediated metabolic improvement. Adiponectin also has anti-inflammatory, insulin-sensitizing, and anti-fibrotic properties relevant to aging biology.

---

## Aging biology rationale — the CR-mimetic frame

The geroscience argument for PPARα agonism rests on three lines of evidence:

**1. Transcriptional overlap with caloric restriction.** Corton et al. (2004) formally proposed that PPARα agonists are caloric restriction mimetics based on transcriptomic overlap between CR-regulated genes and PPAR ligand-regulated genes in rodent liver [^corton2004]. The CR state drives fatty acid mobilization and PPARα activation via elevated fatty acid ligands; fibrates pharmacologically recapitulate this transcriptional signature without caloric deficit. Nikolai et al. (2015) reviewed PPARα among candidate CR mimetic classes, noting the liver-centric nature of the overlap and species-translation caveats [^nikolai2015].

**2. Fasting/CR biomarker signature matches fibrate pharmacodynamics.** The metabolic hallmarks of aging-associated frailty include hyperinsulinemia, dyslipidemia, elevated free fatty acids, and decreased adiponectin — exactly the phenotype fibrates counteract. McKenzie et al. (2025) demonstrated in 451 companion dogs that insulin, adiponectin, and lipid concentrations change with age in patterns that predict frailty index and quality-of-life decline [^mckenzie2025]. The adiponectin-frailty link is especially notable because PPARα activation is the most pharmacologically tractable means of raising adiponectin. This dog cohort study is used by independent analysts to support the Loyal LOY-002 PPARα-agonist hypothesis (see below).

**3. Invertebrate lifespan extension via NHR-49/PPARα.** Fibrates (bezafibrate, clofibrate) extend lifespan in *C. elegans* in a manner dependent on **NHR-49**, the worm nuclear receptor homolog of PPARα [^brandstadt2013]. Extension of ~10–20% lifespan was observed; the mechanism required NHR-49 function (loss-of-function abolished the effect). Extrapolation to mammalian aging is limited — NHR-49 regulates fat metabolism and stress responses more broadly than mammalian PPARα, and *C. elegans* lacks many mammalian metabolic tissues.

| Dimension | Status |
|---|---|
| PPARα pathway conserved in humans? | yes — NR1C1 is highly conserved; fibrates are clinically active in humans |
| Aging-frailty phenotype conserved? | partial — canine and human cohort data show correlated biomarker shifts; no direct intervention-on-aging-phenotype RCT |
| Replicated longevity effect in mammals? | not tested — no mouse or rat ITP-style lifespan study of fibrates published as of 2026-05-14 #gap/needs-human-replication |

---

## Human evidence — primary outcomes vs aging endpoints

### The fibrate CV trial evidence base (established indications)

Fibrates were developed and tested for CV endpoints in dyslipidemic populations. Results are **mixed**, and critically, none of these trials used geroscience or aging endpoints.

**Helsinki Heart Study (Frick et al., NEJM 1987)** [^frick1987]: n=4,081 middle-aged men with dyslipidemia; gemfibrozil 1,200 mg/day × 5 years; randomized, double-blind vs placebo. Cardiac endpoints (fatal + non-fatal MI) reduced by 34% (p<0.02). All-cause mortality was non-significantly different between arms. The study established fibrates as a CV risk modifier in high-risk dyslipidemic men.

**FIELD Trial (Keech et al., *Lancet* 2005)** [^field2005]: n=9,795 type 2 diabetics; fenofibrate 200 mg/day × 5 years; randomized double-blind vs placebo. Primary endpoint (coronary events) non-significantly reduced (RRR 11%, p=0.16). Total cardiovascular events significantly reduced (RRR 11%, p=0.035). Non-cardiovascular mortality was higher in the fenofibrate arm (p=0.04), which has generated ongoing mechanistic debate. Notable secondary finding: diabetic retinopathy progression significantly reduced (–37%). #gap/contradictory-evidence — fenofibrate reduced total CV events but not the primary CHD endpoint and showed a non-cardiovascular mortality signal that requires explanation.

**ACCORD-Lipid (ACCORD Study Group, NEJM 2010)** [^accord2010]: n=5,518 type 2 diabetics on simvastatin; fenofibrate 160 mg + simvastatin vs placebo + simvastatin; mean follow-up 4.7 years. Primary endpoint (major CV events): no significant difference (HR 0.92, 95% CI 0.79–1.08, p=0.32). Pre-specified subgroup: participants with elevated TG (≥204 mg/dL) and low HDL-C (≤34 mg/dL) showed a non-significant trend favoring fenofibrate (HR 0.69). The trial failed its primary endpoint and is generally interpreted as negative for add-on fenofibrate in statin-treated diabetics.

**PROMINENT Trial (Das Pradhan et al., NEJM 2022)** [^prominent2022]: n=10,497 diabetics on statins with elevated TG; pemafibrate vs placebo. Pemafibrate reduced TG 26.2%, VLDL-C 25.8%, apo-C-III 27.6% — on-target lipid effects confirmed. Primary endpoint (MACE): HR 1.03 (95% CI 0.91–1.15, p=0.67) — **no benefit, numerically non-significant trend toward harm**. The PROMINENT result is a significant challenge to the TG-lowering = CV-benefit hypothesis and raises questions about whether PPARα-mediated lipid effects translate to CV event reduction in a statin-optimized background. Mechanistic post-mortem analyses are ongoing.

**Class-level pattern from CV trial evidence:** The primary lipid-indication evidence base for fibrates is mixed-to-negative at the level of major CV endpoints in statin-treated populations. The geroscience interest in fibrates is distinct from the CV indication and rests on different outcome hypotheses (metabolic frailty, biological aging rate, lifespan).

### Cohort-level mortality signals

Two large Korean real-world cohort studies provide observational evidence for all-cause mortality reduction with fenofibrate use, though confounding cannot be excluded:

**Jo et al., *Diabetes Care* 2021** [^jo2021]: n=10,114 Korean diabetic patients (propensity-score matched); fenofibrate users vs non-users. All-cause mortality: 7.6 vs 15.3 per 1,000 person-years; **HR 0.437 (95% CI 0.340–0.562, p<0.0001)** — representing a ~56% lower mortality rate in fenofibrate users. Cardiovascular events also significantly reduced. Observation period ~3 years. **Caveat:** propensity-score matching does not eliminate unmeasured confounding (healthier-user bias is plausible in a real-world dyslipidemia cohort); and the study population is Korean diabetics, limiting generalizability. #gap/needs-replication — observational; no geroscience endpoint.

**Kim et al., *Metabolism* 2022** [^kim2022]: fenofibrate add-on to statins in a general hypertriglyceridemic population; HR for all-cause mortality 0.826 (95% CI 0.795–0.858, p<0.0001) overall; HR 0.618 for >1 year of fenofibrate use. The magnitude of the association increases with treatment duration, consistent with a time-on-drug pharmacological effect rather than selection artifact — though this does not rule out confounding. #gap/needs-replication — observational.

**Important framing:** The 56% mortality reduction (Jo 2021) and 38% reduction in long-term users (Kim 2022) are striking observational signals. They are not direct evidence that fibrates slow aging; they could reflect (a) TG/dyslipidemia treatment, (b) anti-inflammatory effects reducing CVD and non-CVD mortality, (c) confounding. A geroscience-endpoint RCT is needed to determine whether any of the mortality signal is mediated by slowing the aging process itself. #gap/contradictory-evidence — RCT evidence (ACCORD-Lipid, PROMINENT) is neutral-to-negative for CV endpoints, while observational cohort evidence is strongly protective for all-cause mortality; the discordance is unresolved.

### Aging-endpoint trials: current status

As of 2026-05-14, no registered or completed trial uses a geroscience primary endpoint (biological age clock, frailty index slope, DunedinPACE shift, composite healthspan) for a fibrate. ClinicalTrials.gov search for fenofibrate + aging/frailty/sarcopenia: 0 actively recruiting trials with aging-specific endpoints. The only active fibrate-relevant trial is NCT04661358 (fenofibrate for diabetic retinopathy; not an aging endpoint). #gap/needs-human-replication

---

## Preclinical aging evidence

### C. elegans: fibrates extend lifespan via NHR-49/PPARα

Brandstädt et al. (2013, *Aging*) showed that bezafibrate and clofibrate extend lifespan in *C. elegans* by 10–20% in an NHR-49-dependent manner [^brandstadt2013]. NHR-49 is the closest worm ortholog to mammalian PPARα (also related to HNF4α). Loss-of-function NHR-49 worms did not show lifespan extension with fibrate treatment, indicating on-target action. The study established invertebrate genetic validation of the PPARα-aging axis but is not straightforward to extrapolate given species differences in lipid metabolism and body plan.

No ITP-style mouse or rat lifespan study of any fibrate has been published as of 2026-05-14. #gap/needs-human-replication — This is a significant gap in the preclinical evidence base for the CR-mimetic geroscience framing.

### Rodent cognitive and neuroprotective effects

Multiple rodent studies have examined fenofibrate's effects on neuroinflammation and cognitive aging, driven by PPARα's role in suppressing NF-κB-mediated neuroinflammation and supporting fatty acid metabolism in brain. PPARα is expressed in hippocampal neurons and astrocytes. The strongest evidence is in animal models of metabolic stress + cognitive impairment, not in pure-aging paradigms. #gap/needs-human-replication — No human RCT has examined fibrates for cognitive aging endpoints. #gap/unsourced — specific rodent study citations pending wiki-verifier confirmation of quantitative claims.

---

## The LOY-002 connection (speculative — flagged as non-peer-reviewed inference)

**What is known:** Loyal Inc. is conducting the FDA's first Reasonable Expectation of Effectiveness (RXE)-track canine longevity drug program with an undisclosed compound designated **LOY-002**. Loyal has not disclosed the drug's active pharmaceutical ingredient (API). LOY-002 has shown statistically significant effects on aging-associated biomarkers in a clinical study of n=451 dogs [^mckenzie2025].

**The biomarker evidence from McKenzie et al. 2025:** This Loyal-affiliated study (McKenzie B et al., *Scientific Reports*, 2025, doi:10.1038/s41598-025-89923-z; locally available) documented that **insulin, adiponectin, and lipid concentrations change with age in companion dogs in ways that predict frailty and quality-of-life decline**. Dogs with hyperinsulinemia, dyslipidemia, elevated free fatty acids, and low adiponectin showed worse frailty scores. This is the aging-frailty biomarker signature that PPARα agonists are known to pharmacologically counteract in humans and dogs.

**Independent analyst inference:** Dr. William Tancredi ("Doc's FIRE," Substack, 2026-03-22) [^docstanc2026] — a non-peer-reviewed post — argues, based on constraint satisfaction of (a) the biomarker profile, (b) canine safety data consistent with known fenofibrate tolerability, (c) Loyal's patent keywords ("prodrugs, fatty acids, diabetes, vegetable oils, nutrition" per CBInsights), and (d) the CR-mimetic mechanism consistent with Loyal's "downstream of caloric restriction" framing — that **LOY-002 is most likely fenofibrate or a fenofibrate prodrug analog**.

**Assessment:** This inference is **consistent with but not confirmed by** the available evidence. The biomarker shift pattern is specifically consistent with PPARα activation. Fenofibrate has 50+ years of human safety data, established canine use, and is a prodrug (ester, consistent with patent keywords). However:
- Loyal has not confirmed the API.
- Multiple mechanisms could produce the same biomarker shift.
- The inference rests on a single analyst's non-peer-reviewed constraint-satisfaction argument.

**Implication for the wiki:** If LOY-002 is confirmed as fenofibrate or analog, it would represent the first regulatory-track aging-drug precedent for a PPARα agonist and dramatically accelerate interest in translating the canine RXE data to human aging trials. This wiki entry will require immediate update upon LOY-002 API disclosure.

#gap/no-disclosure — Loyal has not disclosed the LOY-002 API as of 2026-05-14. Cross-link: [[model-organisms/canis-lupus-familiaris]] for canine aging model context.

---

## Safety profile

### Class-level safety (established clinical use)

Fibrates have been used clinically since the 1960s (clofibrate) and have one of the most mature real-world safety databases of any lipid-modifying drug class:

- **Myopathy/rhabdomyolysis risk with statin combinations:** The most clinically significant concern. Gemfibrozil inhibits CYP2C8 and glucuronidation of statin lactone forms, raising statin plasma levels and dramatically increasing myopathy risk (contraindicated in combination with most statins). **Fenofibrate does not inhibit CYP2C8** and is the preferred fibrate for statin combination use (ACCORD-Lipid used fenofibrate + simvastatin safely at the group level). Nevertheless, combination monitoring (CK, symptoms) is standard of care.
- **Hepatotoxicity:** Transaminase elevation occurs in ~5% of patients; clinically significant hepatotoxicity is rare but reported. LFT monitoring is recommended at baseline and periodically.
- **Cholelithiasis:** Fibrates increase cholesterol secretion into bile, slightly increasing gallstone risk (class effect; historically more prominent with clofibrate, which is no longer marketed). The magnitude is small (~1% absolute increase over years of use) and rarely clinically significant in modern practice.
- **Creatinine elevation (fenofibrate-specific):** Fenofibrate produces a reversible increase in serum creatinine (~10–15%) via a tubular secretion mechanism that does not reflect true GFR reduction. This can confuse eGFR calculation and is not a marker of nephrotoxicity — but requires awareness.
- **Drug interactions:** Gemfibrozil: CYP2C8 inhibitor — avoid with repaglinide, pioglitazone, dasabuvir, many statins. Fenofibrate: warfarin potentiation (monitor INR); coadministration with ezetimibe generally safe.

### Contraindications

- Severe hepatic or renal impairment
- Gallbladder disease
- Pregnancy (limited safety data; Category C)
- Concomitant gemfibrozil + statin (avoid; substitute fenofibrate)

---

## Monitoring — protocol relevance

For individuals taking fibrates in a personal health/longevity protocol:

| Analyte | Baseline | On-therapy cadence | Rationale |
|---|---|---|---|
| ALT / AST | Yes | 3 months, then annual | Hepatotoxicity surveillance |
| CK | Yes (if statin combo) | Symptom-driven | Myopathy / rhabdomyolysis |
| Creatinine / eGFR | Yes | Annual | Fenofibrate creatinine artifact — use CysC-based GFR for true trend |
| Lipid panel (TG, LDL, HDL, non-HDL) | Yes | 6–8 weeks post-start, then annual | Efficacy and dose-adequacy |
| Fasting insulin / adiponectin | Optional — for aging-biology monitoring | Quarterly × 1 year | Track CR-mimetic biomarker response; neither is standard of care |

---

## Limitations and open questions

- **No geroscience-endpoint RCT exists.** The entire aging-biology case for fibrates currently rests on transcriptomic CR-overlap (Corton 2004), invertebrate lifespan extension (Brandstädt 2013), observational cohort mortality signals (Jo 2021, Kim 2022), and the McKenzie 2025 canine frailty biomarker study. None of these constitute direct evidence of slowing aging in humans. #gap/needs-human-replication
- **PROMINENT trial is a significant setback for the TG-lowering hypothesis.** The most potent and selective PPARα agonist (pemafibrate) failed to reduce MACE despite robust TG lowering. If the CV benefit of fibrates was mediated by TG reduction, PROMINENT should have shown benefit. The negative result suggests either (a) TG reduction alone is insufficient for CV benefit in statin-treated patients, or (b) off-target effects of classical fibrates contribute to their observational benefits. This discordance should inform any aging-biology trial design for fibrates. #gap/contradictory-evidence
- **No mammalian lifespan data.** No ITP-style mouse or rat lifespan experiment with any fibrate has been published. This is a critical gap — the C. elegans data is encouraging but phylogenetically distant. #gap/needs-human-replication
- **LOY-002 API is undisclosed.** The most prominent current human-adjacent trial context for PPARα agonism in aging (Loyal's canine program) cannot be formally attributed to this class until Loyal discloses LOY-002's identity. #gap/no-disclosure
- **CR-mimetic framing remains incompletely validated.** Transcriptomic overlap between CR and PPARα agonism is documented in mouse liver but the degree of overlap in other tissues, and whether it translates to CR-magnitude lifespan extension, is unknown. #gap/no-mechanism
- **Observational cohort confounding is substantial.** The Jo 2021 (56% mortality reduction) and Kim 2022 (38% for long-term users) signals are striking but require prospective validation. Healthier-user bias, indication confounding, and unmeasured comorbidity differences cannot be excluded. #gap/needs-replication

---

## Cross-references

- [[ppara]] — protein/nuclear receptor page (forward-reference stub)
- [[deregulated-nutrient-sensing]] — primary hallmark targeted; AMPK/IIS/mTOR axis
- [[altered-intercellular-communication]] — adiponectin-mediated signaling; secondary hallmark
- [[caloric-restriction]] — lifestyle intervention with mechanistic overlap; CR transcriptional program vs PPARα pharmacology
- [[hyperfunction-theory]] — PPARα agonism as a counter to anabolic overactivation (CR-mimetic frame)
- [[mtor-inhibitors]] — sibling class with overlapping nutrient-sensing mechanism; mTOR cross-talk with AMPK (PPARα downstream)
- [[ampk-activators]] — sibling class; AMPK is both upstream (AMP/ATP → AMPK → fatty acid oxidation) and downstream (PPARα-driven FAO → AMP/ATP shift) of PPARα
- [[glp1-agonists]] — sibling class (metabolic frailty targeting); compare CR-mimetic profiles
- [[model-organisms/canis-lupus-familiaris]] — canine aging model; Loyal LOY-002 clinical program; McKenzie 2025 frailty biomarker study
- [[fenofibrate]] — implicit stub; primary compound of interest for aging applications
- [[gemfibrozil]] — implicit stub
- [[bezafibrate]] — implicit stub; C. elegans lifespan data
- [[pemafibrate]] — implicit stub; PROMINENT trial 2022

---

## Footnotes

[^corton2004]: doi:10.1074/jbc.M406739200 · review/experimental · Corton JC et al. · *J Biol Chem* 2004 · formally proposes PPARα/PPARγ agonists as CR mimetics based on transcriptomic overlap in rodent liver; foundational CR-mimetic framing for fibrate class · download pending (hybrid OA)

[^nikolai2015]: doi:10.1017/S0954422415000062 · review · Nikolai S, Pallauf K, Huebbe P, Rimbach G · *Nutr Res Rev* 2015 · reviews candidate CR mimetic classes including PPARα agonists; notes liver-centric overlap and species caveats · download pending (bronze OA)

[^frick1987]: doi:10.1056/NEJM198711123172001 · rct · n=4,081 · Frick MH et al. · *NEJM* 1987 · Helsinki Heart Study; gemfibrozil 1,200 mg/day × 5 yr vs placebo; CHD events −34% (p<0.02); all-cause mortality non-significant · not_oa — no local PDF #gap/no-fulltext-access

[^field2005]: doi:10.1016/S0140-6736(05)67667-2 · rct · n=9,795 · Keech A et al. (FIELD Study Investigators) · *Lancet* 2005 · fenofibrate 200 mg/day × 5 yr in type 2 diabetes; primary coronary endpoint p=0.16 (ns); total CV events p=0.035; retinopathy regression significant; non-CV mortality signal (p=0.04) · not_oa — no local PDF #gap/no-fulltext-access

[^accord2010]: doi:10.1056/NEJMoa1001282 · rct · n=5,518 · ACCORD Study Group, Ginsberg HN et al. · *NEJM* 2010 · fenofibrate 160 mg + simvastatin vs placebo + simvastatin in type 2 diabetes; primary MACE HR 0.92 (p=0.32); TG-high/HDL-low subgroup trend HR 0.69 (ns) · bronze OA — download pending

[^prominent2022]: doi:10.1056/NEJMoa2210645 · rct · n=10,497 · Das Pradhan A et al. · *NEJM* 2022 · pemafibrate vs placebo in statin-treated diabetics with elevated TG; TG −26%, apo-CIII −27%; primary MACE HR 1.03 (p=0.67) — failed primary endpoint; challenges TG-lowering-as-CV-benefit hypothesis · bronze OA — download pending

[^jo2021]: doi:10.2337/dc20-1533 · observational · n=10,114 (propensity-score matched) · Jo SH et al. · *Diabetes Care* 2021 · Korean NHIS cohort; fenofibrate users vs non-users in type 2 diabetes; all-cause mortality 7.6 vs 15.3/1,000 PY; HR 0.437 (95% CI 0.340–0.562, p<0.0001); ~3-year follow-up · bronze OA — download pending

[^kim2022]: doi:10.1016/j.metabol.2022.155327 · observational · Kim KS, Hong S, Han K, Park CY · *Metabolism* 2022 · Korean general population with elevated TG; fenofibrate add-on to statin; all-cause mortality HR 0.826 overall; HR 0.618 for >1 yr use; mean follow-up ~4.1 yr · hybrid OA — download pending

[^brandstadt2013]: doi:10.18632/aging.100548 · in-vivo · n=not-reported per group · Brandstädt S, Schmeisser K, Zarse K, Ristow M · *Aging (Albany NY)* 2013 · bezafibrate and clofibrate extend *C. elegans* lifespan 10–20% in NHR-49 (PPARα ortholog)-dependent manner; NHR-49 loss-of-function abolishes effect · hybrid OA — download pending

[^mckenzie2025]: doi:10.1038/s41598-025-89923-z · observational · n=451 companion dogs · McKenzie B, Peloquin M, Graves JL, Chen F et al. · *Sci Rep* 2025 · insulin, adiponectin, and lipid concentrations change with age in ways predicting frailty and quality-of-life decline in dogs; Loyal Inc.-affiliated; biomarker profile consistent with PPARα-agonist pharmacodynamics · locally available ((local PDF))

[^fgf21cr2012]: doi:10.1089/rej.2012.1392 · review · *Rejuvenation Research* 2012 · FGF21 as a CR mimetic; PPARα is the primary driver of FGF21 induction; context for PPARα-FGF21-CR framing · download pending

[^docstanc2026]: https://doctortanc.substack.com/p/the-puzzle-of-the-pill-loy-002 · #non-peer-reviewed-analysis · Tancredi W ("Doc's FIRE") · published 2026-03-22 · argues LOY-002 is fenofibrate or fenofibrate prodrug based on biomarker shift profile (insulin/adiponectin/FFA consistent with PPARα agonism), Loyal patent keywords, and canine safety profile; not peer-reviewed; cited here solely for the inference framing, not as primary evidence
