---
type: intervention
aliases: [NAD precursors, NAD+ boosters, NAD+ precursor supplements, NMN/NR class, niacin family]
mode: pharmacological
mechanisms: [nad-restoration, sirtuin-activation, parp-substrate-restoration, mitochondrial-support]
targets: []
target-hallmarks: ["[[mitochondrial-dysfunction]]", "[[deregulated-nutrient-sensing]]", "[[genomic-instability]]"]
target-pathways: ["[[sirtuin]]"]
human-evidence-level: limited
clinical-stage: phase-2
safety-profile: well-established
translation-gap: phase-3-rct-needed
next-experiment: "Large RCT of 1000 mg NR or NMN with DunedinPACE biological-age clock + functional endpoints (grip strength, gait speed, fatigue) over 12 months in elderly participants with confirmed low baseline NAD+ levels."
clinical-trials-active: 53
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "All primary-source PDFs verified against local archive copies: Yoshino 2021 (Science), Mills 2016 (Cell Metabolism), Martens 2018 (Nat Commun), Trammell 2016 (Nat Commun), Yoshino 2011 (Cell Metabolism), Massudi 2012 (PLoS ONE), Grozio 2019 (Nat Metabolism), Camacho-Pereira 2016 (Cell Metabolism). ClinicalTrials.gov active-trial count (53) not re-queried since 2026-05-06. R34 recency refresh (2026-05-08): Heggelund 2024 Nat Aging COPD, McDermott 2024 NICE PAD, Brody 2024 MCI, Takeda 2025 Werner syndrome, Igarashi 2024 NMN walking/sleep, Schloesser 2026 Nat Metab three-precursor comparison, three meta-analyses (Tang 2026 BP, Caldo-Silva 2025 muscle, Song 2025 glucose/lipid) integrated from PubMed abstracts + Crossref metadata; PDFs verified locally for Heggelund 2024 + McDermott 2024 only. R37 update (2026-05-15): Trętowicz 2026 Nat Metab whole-blood NAD+ negative-aging-biomarker finding integrated — Results/Discussion paywalled but Abstract + Reporting Summary PDF + 8 source-data XLSX directly verified; rewrites the 'NAD+ Declines with Age' section to distinguish blood (refuted) from tissue (Janssens 2022 muscle, Massudi 2012 skin — still valid). #gap/contradictory-evidence between blood and tissue."
literature-checked-through: 2026-05-19
---

# NAD+ Precursor Supplements

A pharmacological class of compounds that restore intracellular NAD+ pools by providing biosynthetic precursors. The class spans multiple structural families (nucleotides, nucleosides, vitamins) that enter the NAD+ biosynthetic network at different points. The central hypothesis is that age-related decline in NAD+ levels — well-documented in rodents and partially in humans — impairs [[sirtuin]] deacylase activity, PARP-mediated DNA repair, and mitochondrial function, and that supplementation can reverse these effects. As of 2026, NMN and NR have reached Phase 1/2 human trials, with modest metabolic-marker improvements but no hard longevity or functional endpoints.

This page covers the **precursor class as a whole**. Agent-specific data live in `molecules/compounds/`:

- [[nmn]] (verified) — NMN; Yoshino 2021 women trial; Mills 2016 mouse age-associated decline mitigation (not lifespan extension); Phase 1/2 trials
- [[nr]] (verified) — nicotinamide riboside; Trammell 2016 PK; Martens 2018 clinical; ChromaDex commercial product (Tru Niagen)

## NAD+ Biosynthesis Pathways and Precursor Entry Points

NAD+ is synthesized via three partially redundant routes:

| Route | Substrate | Entry point | Key enzyme |
|---|---|---|---|
| **De novo** | L-Tryptophan | Kynurenine pathway → quinolinic acid → NAMN | QPRT (quinolinate phosphoribosyltransferase) |
| **Preiss-Handler** | Niacin (nicotinic acid, NA) | NA → NAMN → NAAD → NAD+ | NAPRT (nicotinic acid phosphoribosyltransferase) |
| **Salvage** | NAM, NMN, NR | NAM → NMN → NAD+; NR → NMN → NAD+ | NAMPT (rate-limiting; NAM → NMN); NRK1/2 (NR → NMN) |

The salvage pathway is quantitatively dominant in most mammalian tissues and is the target of NMN and NR supplementation. NAMPT — nicotinamide phosphoribosyltransferase — is the rate-limiting enzyme in the salvage route; its activity declines with age in some tissues, contributing to NAD+ depletion [^yoshino2011].

**Key NAD+-consuming enzymes:**
- **Sirtuins (SIRT1–7):** NAD+-dependent deacylases; release nicotinamide (NAM) as a product, which feeds back into the salvage pathway
- **PARPs (poly-ADP-ribose polymerases):** DNA damage sensors; PARP1 consumes large quantities of NAD+ during genotoxic stress; rising DNA damage burden with age may accelerate NAD+ depletion
- **CD38:** ectoenzyme and glycohydrolase; major NAD+-consuming enzyme; expression rises with aging and inflammation [^camacho2016]
- **SARM1:** NAD+ hydrolase in axons; activated in axonal injury; relevant to neurodegeneration but not a primary aging-clock driver in most tissues

## Compound Table

| Compound | Structure | Entry point | Key aging evidence | Status |
|---|---|---|---|---|
| **[[nmn]]** | Nucleotide (ribose + nicotinamide + phosphate) | Salvage — NMN can enter gut enterocytes directly via the Slc12a8 transporter [^grozio2019]; Slc12a8 does NOT transport NR; a separate NR route also exists | Mills 2016 (mouse age-associated physiological decline mitigation) [^mills2016]; Yoshino 2021 (insulin sensitivity in women) [^yoshino2021] | Phase 1/2 clinical trials; consumer supplement |
| **[[nr]]** | Nucleoside (ribose + nicotinamide) | Salvage — NR → NMN via NRK1/2 in cells; enters via nucleoside transporters | Trammell 2016 (PK; oral bioavailability confirmed) [^trammell2016]; Martens 2018 (older adults) [^martens2018] | Phase 1/2 clinical; widely marketed (ChromaDex / Tru Niagen) |
| **Niacin (nicotinic acid, NA)** | Simple vitamin | Preiss-Handler; raises NAD+ and also NAAD (a distinguishing biomarker) | Long established in cardiovascular medicine; most potent NAD+ raiser among precursors at gram doses | Prescription (Niaspan); supplement; flushing via GPR109A limits tolerability |
| **Nicotinamide (NAM)** | Simple amide | Salvage; but NAM is also a **product** (and sirtuin inhibitor) of NAD+-consuming enzymes | Chemoprevention of non-melanoma skin cancer in immunocompetent patients (Chen 2015 ONTRAC, RR ~0.77) [^chen2015nmsc]; null in organ-transplant recipients (Allen 2023 ONTRANS, RR 1.0) [^allen2023] | Supplement; does NOT activate sirtuins; high doses may inhibit them #gap/contradictory-evidence |
| **NMN-H / NR-H** | Reduced dihydro forms | Claimed superior stability; enter salvage similarly to parent compounds | Mostly preclinical or early supplement; limited published data #gap/needs-replication | Emerging supplements; limited clinical data as of 2026 |

**Important distinctions:** Niacin and nicotinamide are both forms of vitamin B3 but with divergent pharmacology. Nicotinamide does **not** activate sirtuins — it is a feedback inhibitor of SIRT1 and SIRT3 at supraphysiological concentrations, and lacks the prostaglandin-mediated flushing of niacin. NMN and NR are the compounds of primary interest for sirtuin pathway engagement.

**Topical niacinamide ≠ systemic NAD+ precursor (R42 disambiguation).** `[[niacinamide]]` (vitamin B3 amide, chemically identical to nicotinamide) is widely used as a **topical** cosmetic ingredient for skin aging (~5% cream concentrations). Topical application does **NOT** meaningfully shift systemic or cellular NAD+ pools — the topical-skin-aging mechanism is via barrier repair (ceramide synthesis), PAR-2-mediated melanin transfer inhibition, sebum regulation, and anti-inflammatory effects, all independent of NAD+ pool size. **Oral high-dose nicotinamide (500 mg BID per ONTRAC trial, Chen 2015 NEJM [^chen2015nmsc])** does shift cellular NAD+ + reduces non-melanoma skin cancer incidence by 23% in high-risk immunocompetent patients — but Allen 2023 NEJM [^allen2023] showed this benefit does **not** extend to organ-transplant recipients (RR 1.0; 95% CI 0.8–1.3; P=0.96; n=158; same 500 mg BID × 12-month protocol). The mechanism (NAD+-mediated restoration of UV-induced cutaneous immunosuppression) may be conditional on intact immune surveillance — a striking population-context-dependent translation gap for an oral NAD+-precursor indication. See `[[niacinamide]]` for the topical compound page; this page (`nad-precursors`) covers NMN + NR + systemic NAM as NAD+-pool-elevating interventions.

## NAD+ Declines with Age

NAD+ levels fall substantially with age across tissues in rodents; the human picture is **tissue-specific and now contested at the blood level** following Trętowicz et al. 2026 [^tretowicz2026]:

- **Mouse data:** NAD+ declines significantly with age in liver and WAT of C57BL/6 mice; in aged (15–25 month) mice, NAMPT protein and NAD+ levels were significantly reduced in liver and WAT but the trend in skeletal muscle did not reach significance in the HFD-aging model [^yoshino2011]. Broader multi-tissue NAD+ decline (including skeletal muscle) across the 5–32 month lifespan is documented in Mills 2016 and Camacho-Pereira 2016 [^mills2016] [^camacho2016].
- **Human tissue data:** Massudi et al. 2012 showed age-associated decline in NAD+ in human pelvic skin biopsies (n=49, ages 15–77 plus newborns), with PARP activity increasing and correlating inversely with NAD+ levels in males (r=−0.638, p=0.0003); correlations were weaker and less significant in females [^massudi2012]. #gap/needs-replication (single tissue type: non-sun-exposed pelvic skin only; sex-stratified effects; biopsy study). Janssens et al. 2022 found a positive association between healthy aging and NAD+ abundance in human skeletal muscle [^janssens2022] — same Houtkooper laboratory that later published the Trętowicz negative-blood finding.
- **Human WHOLE-BLOOD data — directly negative as of 2026:** [[studies/tretowicz-2026-blood-nad-stable-aging|Trętowicz et al. 2026]] (*Nat Metab*, n=303 across 7 independent cohorts) found whole-blood NAD+ is **stable with age** (P = 0.24 in the dedicated aging cohort; R² = 0.012–0.051 across regression cohorts; P = 0.50–0.62 across older-adult intervention cohorts) using a UHPLC-HRMS assay rigorously validated for pre-analytical artifacts. Prior reports of blood-NAD+ decline are likely attributable to **freeze-thaw and frozen-without-methanol pre-analytical artifacts** (the same assay shows 30–80% NAD+ loss in mishandled samples). Importantly, the same assay readily detects NR-supplementation-induced NAD+ elevation, ruling out a sensitivity floor. **The negative blood finding does NOT contradict the tissue-level decline literature** — Janssens 2022 (muscle) and Massudi 2012 (skin) remain valid — but it does reshape what "blood NAD+" means as a biomarker. #gap/contradictory-evidence [^tretowicz2026]
- **CD38 as driver:** CD38 expression rises with age and inflammation, and CD38 knockout mice maintain higher NAD+ and are protected from age-associated physiological decline [^camacho2016]. CD38 is expressed by macrophages and other immune cells that accumulate in aging tissues, suggesting inflammaging drives NAD+ erosion as a downstream consequence — not merely a parallel process.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — NAD+ biosynthesis pathways are identical in rodents and humans |
| Phenotype (NAD+ decline with age) conserved in humans? | **tissue-dependent** — yes in skin biopsies (Massudi 2012) and skeletal muscle (Janssens 2022); **no in whole blood across 7 cohorts (Trętowicz 2026)** [^tretowicz2026]. The "NAD+ declines with age" framing is overgeneralized when applied to blood. |
| Causal role of NAD+ decline confirmed in humans? | no — only correlative in tissue-level human studies; genetic/intervention evidence is primarily from mice #gap/needs-human-replication |
| [[nad-blood-biomarker\|Blood NAD+ as an aging biomarker]]? | **no — directly refuted as of 2026** by 303-participant, 7-cohort multi-population study [^tretowicz2026] |

## Mechanism: Why NAD+ Restoration Might Slow Aging

NAD+ acts as a cofactor for sirtuins — the SIRT1–7 deacylase/deacetylase family. Declining NAD+ constrains sirtuin activity, which in turn:

1. Reduces SIRT1-mediated deacetylation of PGC-1α → impairs mitochondrial biogenesis and oxidative metabolism (see [[mitochondrial-dysfunction]])
2. Reduces SIRT3-mediated deacetylation of mitochondrial metabolic enzymes → impairs electron transport chain efficiency
3. Reduces SIRT1-mediated deacetylation of NF-κB → may promote inflammatory signaling (see [[deregulated-nutrient-sensing]] / [[chronic-inflammation]])
4. Reduces SIRT6-mediated DNA double-strand break repair → impairs genome maintenance (see [[genomic-instability]])

PARP1 activity for DNA repair also requires NAD+. Rising oxidative and genotoxic stress with age — coupled with rising PARP1 consumption — accelerates NAD+ depletion, potentially creating a vicious cycle: DNA damage → PARP consumption → lower NAD+ → impaired sirtuins → reduced DNA repair [^massudi2012].

See [[sirtuin]] for the full sirtuin pathway biology. See [[mitochondrial-dysfunction]] for the downstream OXPHOS effects.

## Bioavailability and Delivery Considerations

Oral NMN bioavailability is more complex than initially assumed:

- **NR (NR → NMN route):** Trammell et al. 2016 demonstrated that oral NR raises blood NAD+ metabolites in humans; NR enters cells via nucleoside transporters and is phosphorylated to NMN by NRK1/2, then adenylated to NAD+ [^trammell2016]. This route appears to be functionally intact in humans.
- **NMN (direct vs. indirect):** Grozio et al. 2019 identified Slc12a8 as a dedicated sodium-dependent NMN transporter in mouse gut small intestine; Slc12a8 specifically transports NMN but NOT NR (confirmed by isotopic competition experiments and Slc12a8 KO studies) [^grozio2019]. Slc12a8 expression is upregulated in the aged ileum, suggesting a compensatory response to age-related NAD+ decline. However, earlier pharmacokinetic data (Trammell 2016 and follow-on work) and the controversial nature of in vivo NMN/NR kinetic measurements suggest that the relative contribution of intact-NMN transport vs. conversion to NR/nicotinamide intermediates in humans remains debated [^trammell2016] #gap/contradictory-evidence. The Grozio finding is in mouse gut; direct evidence in humans is lacking.
- **Niacin** raises NAD+ robustly but causes vasodilatory flushing via GPR109A-mediated prostaglandin D2 release, limiting adherence at the doses required for meaningful NAD+ elevation.
- **Nicotinamide (NAM)** raises NAD+ but simultaneously inhibits sirtuin activity at high concentrations — making it a poor candidate for sirtuin-mediated aging benefits despite being a "NAD+ precursor."

## Human Clinical Evidence

Human trials are small-to-moderate in size, with consistently demonstrated NAD+ elevation but mixed metabolic outcomes:

### NMN — Yoshino 2021 (Science)

The largest NMN RCT as of this writing [^yoshino2021]:

- **Phase 1/2 RCT**; n=25 postmenopausal women with prediabetes (overweight or obese; BMI 25.3–39.1 kg/m²); 12 randomized to placebo, 13 to NMN (250 mg/day oral; Oriental Yeast Co.) × 10 weeks; single site (Washington University)
- **NAD+ biomarker:** PBMC NAD+ rose significantly after NMN vs. placebo; skeletal muscle steady-state NAD+ did NOT change in either group (Fig 1E). NMN increased skeletal muscle NAD+ turnover metabolites (N-methyl-nicotinamide, 2PY, 4PY), suggesting increased flux rather than pool expansion.
- **Primary result:** NMN improved skeletal muscle insulin sensitivity (rate of insulin-stimulated glucose disposal per kg fat-free mass; 25±7% greater after NMN than before, p<0.01); placebo did not change. Hepatic and adipose tissue insulin sensitivity were unchanged in both groups.
- **Secondary:** NMN significantly upregulated skeletal muscle expression of PDGFRβ (PDGFRB) and pericyte markers CD90/CD109 during insulin infusion (308 DEGs in NMN vs 5 in placebo group); muscle mitochondrial respiratory capacity and physical function (handgrip, fatigability) were NOT affected by NMN.
- **Limitation:** small n; limited to postmenopausal women with prediabetes who were overweight/obese; single site; 10-week duration; no change in muscle steady-state NAD+ complicates mechanistic interpretation #gap/needs-replication

| Dimension | Status |
|---|---|
| NAD+ elevation confirmed? | partial — PBMC NAD+ rose; skeletal muscle steady-state NAD+ unchanged; only NAD+ turnover metabolites rose in muscle |
| Metabolic improvement? | yes (muscle insulin sensitivity in this specific population); hepatic and adipose insulin sensitivity unchanged |
| Generalizable to healthy older adults? | unknown #gap/needs-human-replication |

### NR — Martens 2018 (Nature Communications)

[^martens2018]:

- **2×6-week randomized, double-blind, placebo-controlled crossover**; 30 randomized (healthy middle-aged and older adults, ages 55–79, lean, BMI 24±4 kg/m²); 24 completed; 500 mg twice daily NR (1g/day; NIAGEN, ChromaDex) vs placebo × 6 weeks each
- PBMC NAD+ elevated ~60% over placebo (mean change = 6.2 pmol per mg protein, one-sided 95% CI 0.074 to ∞, p=0.048); NAAD elevated nearly 5-fold (mean change = 1.2 pmol/mg protein, p=0.018) — NAAD is an especially sensitive biomarker of NR utilization
- **Primary result:** well-tolerated; no significant changes in blood pressure, lipids, glucose, insulin sensitivity, body composition, exercise capacity, or motor function after correction for multiple comparisons; systolic BP tended lower (mean −3.9 mmHg) but did not reach significance at Bonferroni-adjusted threshold
- **Interpretation:** proof-of-concept that oral NR raises NAD+ in older humans at 1g/day; the lack of metabolic effects is consistent with this population being metabolically healthy (no baseline metabolic dysfunction)
- **Note:** The ~2.7-fold NAD+ rise figure sometimes attributed to Martens 2018 actually originates from Trammell 2016's single-subject pilot (n=1, 1000 mg/day for 7 days) [^trammell2016].

### NR — Trammell 2016 (Nature Communications)

[^trammell2016]:

- **Two-part PK study:** (1) single-subject pilot — a healthy 52-year-old male took 1000 mg NR/day for 7 days; PBMC NAD+ rose up to 2.7-fold, NAAD rose ~45-fold, establishing NAAD as a highly sensitive biomarker of NR repletion; (2) 12 healthy human subjects received single doses of 100, 300, or 1000 mg NR in a three-way crossover, confirming dose-dependent NAD+ metabolite elevation in blood
- Confirmed oral bioavailability: NR raises NAD+ and downstream metabolites (NAAD, Me-2PY, Me-4PY) in a dose-dependent manner in human blood; no phosphorylated species (NMN, NAD+, NADP+) detectable in plasma
- Established the pharmacokinetic foundation for NR supplementation trials; identified NAAD as the most sensitive biomarker of NR utilization

### 2024–2026 RCT and meta-analysis wave (R34 recency refresh)

The clinical evidence base expanded substantially 2024–2026 with disease-specific NR RCTs hitting primary endpoints, NMN function-and-sleep signals in older adults, three meta-analyses synthesizing the cumulative class evidence, and a head-to-head precursor comparison reframing the mechanism debate. Findings below are from PubMed abstracts + Crossref metadata; PDFs verified locally for Heggelund 2024 and McDermott 2024 only — others flagged for future verifier pass. #gap/needs-replication

**Disease-specific RCTs (NR predominantly):**

- **Heggelund 2024 (Nat Aging) — COPD [^heggelund2024]:** n=40 stable COPD, NR 6 weeks. Sputum IL-8 −52.6% vs placebo (95% CI −75.7% to −7.6%, p=0.030); persisted 12 weeks post-treatment. Whole-blood NAD+ 2-fold rise. **First disease-specific NR RCT to meet a primary inflammatory endpoint.**
- **McDermott 2024 (Nat Commun) NICE — PAD [^mcdermott2024]:** n=90 PAD patients, NR ± resveratrol vs placebo × 6 months. 6-min walk distance +17.6 m vs placebo (90% CI +1.8, +∞; primary endpoint met). Per-protocol +31.0 m. Resveratrol added no benefit. **First positive functional-outcome RCT in NR.**
- **Takeda 2025 (Aging Cell) — Werner syndrome [^takeda2025]:** progeroid; NR 1 g/day × 26-week crossover. CAVI improved (arterial stiffness); skin ulcer area decreased; heel-pad thinning trend. **First positive RCT in a progeroid disease.**
- **Brody 2024 (GeroScience) — MCI [^brody2024]:** n=20 mild cognitive impairment, NR 1 g/day × 10 weeks. NAD+ 2.6-fold; cognition (MoCA) stable; default-mode network CBF reduced. Pilot — null on primary cognition outcome.
- **Igarashi 2024 (GeroScience) — older adults walking/sleep [^igarashi2024]:** n=60, NMN 250 mg/day × 12 weeks. Primary endpoint (stepping test) null; 4-m walking time and PSQI sleep quality improved at 12 weeks.

**Meta-analyses:**

- **Tang 2026 (Nutrients) — BP [^tang2026]:** 10 RCTs, n=349. NMN reduced DBP −2.15 mmHg (95% CI −3.68 to −0.61); SBP not significant overall but **−3.94 mmHg in age ≥60 subgroup**.
- **Caldo-Silva 2025 (J Cachexia) — muscle [^caldosilva2025]:** NMN: no significant effect on SMI, HGS, gait speed, or 5CST in older adults. **Class-level null on muscle-functional endpoints — cuts against sarcopenia-prevention positioning.**
- **Song 2025 (Crit Rev Food Sci Nutr) — glucose/lipid [^song2025]:** 12 RCTs, n=513. NMN raised blood NAD+ but no significant change in fasting glucose, TG, TC, LDL-C, HDL-C. High RoB in 5/12 studies. Authors conclude "exaggeration of benefits" likely.

**Mechanism / head-to-head:**

- **Schloesser 2026 (Nat Metab) — three-precursor comparison [^schloesser2026]:** n=65 healthy adults, 14-day open-label RCT NR vs NMN vs NAM. NR and NMN comparably raise circulatory NAD+; NAM does not. Ex vivo with human gut microbiota: NR and NMN are converted to **nicotinic acid (NA) by gut microbes**, and NA (not NMN/NR/NAM directly) is the potent NAD+ booster. **Reframes mechanism — questions whether the Slc12a8 transporter route (Grozio 2019) is rate-limiting for systemic NAD+ elevation in humans.** #gap/contradictory-evidence

**Biomarker-validity / negative result:**

- **Trętowicz 2026 (Nat Metab) — whole-blood NAD+ stability [^tretowicz2026]:** n=303 across 7 independent cohorts (Netherlands, Spain, Finland; ages 19–87; frail, athletic, post-cardiac-event, long-lived-family). Whole-blood NAD+ does NOT vary with age (all six independent age comparisons null, P 0.24–0.62, R² 0.012–0.051) and does NOT respond to exercise or protein interventions in older adults, but DOES respond to 5-month NR supplementation in the twin-pair positive-control arm. The negative age result is attributed to **pre-analytical handling artifacts** in prior literature (frozen-without-methanol samples lose 30–80% of NAD+; the validated UHPLC-HRMS method controls for this). **Materially shifts the biomarker framing for this whole intervention class:** if the goal is to "restore an age-related blood NAD+ deficit," that premise is not supported. The supplementation field can still proceed on tissue-level (muscle/skin) or pathological-state (COPD, PAD, Werner) rationales, but the simplest version of the precursor-supplementation story is no longer defensible.

**Class-level interpretation as of 2026-05:** disease-specific RCTs (COPD, PAD, Werner) yield positive primary-endpoint signals, while meta-analyses across healthy/aging populations show null-to-modest effects on metabolic biomarkers and muscle function. The pattern is consistent with "NAD+ supplementation helps when there's a baseline NAD+ deficit driven by inflammation or pathology, but provides little benefit in metabolically healthy adults." Mechanism may be more gut-microbiota-dependent than initially supposed (Schloesser 2026). The "restore age-related blood NAD+ decline" rationale is no longer supported in healthy aging populations (Trętowicz 2026); the field's strongest remaining rationales are (a) tissue-level NAD+ decline in muscle/skin and (b) pathological NAD+ deficit in specific disease contexts.

### Broader trial landscape

Multiple additional NMN and NR trials have been completed or are ongoing as of 2026 (53 active recruiting trials for NMN or NR on ClinicalTrials.gov). Published results include:

- Modest improvements in muscle endurance/fatigue in some trials (primary endpoints often not reached; interpretation complicated by small n and short duration)
- Consistent NAD+ biomarker elevation — pharmacodynamic effect is robust
- Generally null results on lipids, blood pressure, fasting glucose in metabolically normal populations

**Overall human evidence assessment:** NAD+ can be reliably raised by oral NMN or NR supplementation. Downstream physiological benefits remain inconsistent across trials, likely because the optimal population (those with the greatest baseline NAD+ deficit), dose, duration, and endpoints have not been established. #gap/dose-response-unclear #gap/needs-replication

## Potential Caveats and Risks

Three concerns deserve attention:

1. **CD38-driven NAD+ consumption and inflammation:** CD38 expression rises in inflammatory contexts; if supplementation raises NAD+ without addressing the inflammatory driver of CD38 upregulation, the benefit may be blunted. CD38 protein and NADase activity increase 2–3x in multiple tissues (liver, adipose, spleen, skeletal muscle) during aging in mice [^camacho2016]; CD38 is expressed by immune and stromal cells including macrophages that accumulate in aging adipose tissue. The paper identifies CD38 — not PARP1 or SIRT1 expression changes — as the primary driver of the age-related NAD+ decline, suggesting anti-inflammatory or CD38-inhibition co-interventions may be required for full NAD+ restoration efficacy.

2. **Cancer cell metabolism concern:** NAD+ is required for cancer cell proliferation, and NAMPT inhibitors are under investigation as anti-cancer agents. Conversely, NAD+ supplementation could theoretically support tumor cell metabolism. Direct evidence that NMN/NR supplementation promotes cancer progression in humans is lacking, but the theoretical concern warrants attention, particularly in individuals with subclinical or occult malignancies. #gap/needs-replication

3. **SIRT1-mediated longevity pathways and nicotinamide feedback:** High-dose nicotinamide (which accumulates as a degradation product of all NAD-consuming reactions) inhibits sirtuins. The net sirtuin activity gain from supplementation depends on the balance between NAD+ elevation (activating) and NAM accumulation (inhibiting). Oral nicotinamide does not appear to raise sirtuin activity despite raising NAD+ [^massudi2012], consistent with this concern.

## Cross-Class Relationships

| Related class | Relationship |
|---|---|
| [[sirtuin-activators]] | Downstream MoA overlap: NAD+ precursors restore the cofactor pool; sirtuin activators (e.g., STACs, resveratrol-derivatives) attempt to allosterically activate sirtuins directly. Effects are additive in principle; combination not well-studied in humans. |
| [[mtor-inhibitors]] | Distinct mechanism; mTOR inhibition (rapamycin, rapalogs) affects protein synthesis + autophagy. Some mechanistic convergence via SIRT1-mTOR crosstalk but these are independent classes with non-overlapping primary MoAs. |
| [[ampk-activators]] | AMPK activation (metformin, AICAR) and SIRT1 activation are functionally coupled via the SIRT1-LKB1-AMPK axis: SIRT1 deacetylates LKB1 to enhance AMPK activity. NAD+ precursors may synergize with AMPK activators, but combination trials are lacking. |
| [[caloric-restriction]] | CR robustly raises NAD+ in rodents (NAMPT activity rises; NAD+-consuming stress decreases). NMN/NR supplementation is sometimes framed as a CR mimetic specifically for the NAD+/sirtuin arm of CR's effects. |

## SENS / Hallmark Mapping

- **Hallmark targets:**
  - [[mitochondrial-dysfunction]] — SIRT3/PGC-1α restoration of OXPHOS efficiency is the primary proposed mechanism
  - [[genomic-instability]] — SIRT6/PARP1 DNA repair support
  - [[deregulated-nutrient-sensing]] — SIRT1-mediated insulin sensitivity normalization (Yoshino 2021)
- **SENS category:** loose fit to MitoSENS (mitochondrial damage) insofar as NAD+ restoration supports mitochondrial function, but NAD+ precursors do not remove damage — they restore a depleted cofactor. SENS framing is not a primary lens for this class.

## Clinical Evidence Summary (as of 2026)

| Trial | Agent | Population | Design | Key result | DOI |
|---|---|---|---|---|---|
| Yoshino 2021 [^yoshino2021] | NMN 250 mg/day | Postmenopausal prediabetic women, overweight/obese (n=25; 12 placebo, 13 NMN) | Phase 1/2 RCT × 10 wk | Muscle insulin sensitivity +25±7% (p<0.01); PBMC NAD+ rose; skeletal muscle steady-state NAD+ unchanged; PDGFRβ upregulated; mitochondrial function/physical performance unchanged | 10.1126/science.abe9985 |
| Martens 2018 [^martens2018] | NR 1g/day | Healthy middle-aged/older (n=24 completed, 30 randomized; ages 55–79) | Randomized crossover × 6 wk | PBMC NAD+ ~60% over placebo (p=0.048); NAAD ~5-fold over placebo; no significant cardiometabolic changes | 10.1038/s41467-018-03421-7 |
| Trammell 2016 [^trammell2016] | NR 100/300/1000 mg single doses | Healthy adults: n=1 pilot (1000 mg/day × 7d) + n=12 three-dose crossover | Phase 1 PK | Dose-dependent NAD+ elevation; 2.7-fold NAD+ rise in pilot; NAAD validated as sensitive biomarker; oral bioavailability confirmed | 10.1038/ncomms12948 |

#gap/needs-human-replication — No trial has used aging-specific hard endpoints (frailty index, biological age clock, all-cause mortality in healthy adults 60+). All outcome evidence is from short metabolic-marker trials in small samples.

## Limitations and Open Questions

- **No large or long-term RCT.** All human trials are small (n<50 in most cases), short (≤3 months), and use surrogate metabolic endpoints. A phase 3 RCT with biological-age and functional endpoints in older adults has not been conducted. #gap/needs-human-replication
- **Optimal dose and population unknown.** Yoshino 2021 used 250 mg/day NMN; other studies 1g/day NR. The dose–response relationship for functional outcomes is not established. Baseline NAD+ deficit — which varies by individual and tissue — may be a critical selection criterion for trial enrollment. #gap/dose-response-unclear
- **Tissue-level NAD+ measurement.** Blood NAD+ metabolites (the most accessible PD biomarker) may not accurately reflect NAD+ status in the tissues most relevant to aging (brain, liver, skeletal muscle). Tissue biopsies are invasive; non-invasive methods are under development but not validated. #gap/no-mechanism (in the sense of: PD-to-efficacy link is unverified)
- **NMN bioavailability controversy.** Whether oral NMN reaches tissues intact (via Slc12a8) or acts primarily via NR intermediates is unresolved and may affect the compound comparison [^grozio2019]. #gap/contradictory-evidence
- **Sirtuin activation not directly confirmed in humans.** Elevated NAD+ is observed, but whether downstream sirtuin deacylation activity is actually increased in humans at supplementation doses is largely untested. #gap/needs-replication
- **Long-term safety.** Short-term safety at doses ≤1g/day appears favorable across completed trials. Data beyond 6 months in humans is sparse. #gap/long-term-unknown
- **Cancer risk unclear.** Theoretical concern about NAD+ support for cancer cell metabolism; no clinical signal in short trials but no long-term surveillance data.

## Cross-References

- [[nmn]] — verified compound page; NMN-specific pharmacology and trial data
- [[nr]] — verified compound page; NR-specific pharmacology and trial data
- [[sirtuin]] — verified pathway page; downstream target of NAD+ restoration
- [[mitochondrial-dysfunction]] — hallmark; primary biological target
- [[deregulated-nutrient-sensing]] — hallmark; sirtuin/insulin sensitivity link
- [[genomic-instability]] — hallmark; PARP/SIRT6 DNA repair connection
- [[sirtuin-activators]] — sibling R23d intervention class (allosteric sirtuin activation vs. cofactor restoration)
- [[mtor-inhibitors]] — sibling R23d intervention class
- [[ampk-activators]] — sibling R23d intervention class; AMPK-SIRT1 axis overlap
- [[caloric-restriction]] — lifestyle intervention with overlapping NAD+/sirtuin mechanism

## Footnotes

[^mills2016]: doi:10.1016/j.cmet.2016.09.013 · in-vivo (mouse) · n=9–15/group · NMN 100 or 300 mg/kg/day administered ad libitum in drinking water to regular chow-fed wild-type C57BL/6N male mice starting at 5 months of age for 12 months · mitigated age-associated physiological decline (O2 consumption, energy metabolism, insulin sensitivity, lipid metabolism, eye function, bone density) · no significant difference in survival (log-rank test) — this is NOT a lifespan study · *Cell Metabolism* 2016 · Mills KF et al. (Yoshino J, Imai S co-senior) · archive: local PDF available
[^yoshino2021]: doi:10.1126/science.abe9985 · rct · n=25 (12 placebo, 13 NMN) · NMN 250 mg/day oral × 10 weeks vs placebo · postmenopausal women with prediabetes who were overweight or obese · primary endpoint: skeletal muscle insulin sensitivity (hyperinsulinemic-euglycemic clamp) 25±7% greater after NMN (p<0.01); placebo unchanged · PBMC NAD+ rose; skeletal muscle steady-state NAD+ did NOT change in either group · muscle gene expression (PDGFRβ, CD90, CD109 upregulated); mitochondrial respiratory capacity and physical function unchanged · *Science* 2021 · Yoshino M et al. · archive: local PDF available
[^trammell2016]: doi:10.1038/ncomms12948 · phase-1-pk · two-part: (1) n=1 pilot (52-yr-old male, 1000 mg/day × 7 days; PBMC NAD+ 2.7-fold, NAAD ~45-fold) + (2) n=12 healthy adults, single-dose 100/300/1000 mg crossover · dose-dependent NAD+ metabolite elevation confirmed; NAAD validated as sensitive biomarker; oral bioavailability established; no phosphorylated species in plasma · *Nature Communications* 2016 · Trammell SA et al. · archive: local PDF available
[^martens2018]: doi:10.1038/s41467-018-03421-7 · randomized-crossover · n=24 completed (30 randomized) · NR 500 mg twice daily (1g/day; NIAGEN, ChromaDex) vs placebo × 6 weeks each · healthy middle-aged and older adults ages 55–79 · PBMC NAD+ ~60% over placebo (p=0.048); NAAD ~5-fold over placebo (p=0.018); no significant cardiometabolic changes after correction for multiple comparisons · *Nature Communications* 2018 · Martens CR et al. · archive: local PDF available
[^camacho2016]: doi:10.1016/j.cmet.2016.05.006 · in-vivo (mouse) · CD38 knockout maintains higher NAD+ in aged mice; CD38 expression rises with age and inflammation; CD38 mediates age-related NAD+ decline via SIRT3-dependent mitochondrial mechanism · *Cell Metabolism* 2016 · Camacho-Pereira J et al. · archive: in index, not downloaded (status: pending)
[^yoshino2011]: doi:10.1016/j.cmet.2011.08.014 · in-vivo (mouse) · NMN treats pathophysiology of diet- and age-induced diabetes in mice; NAMPT decline with age identified as rate-limiting step in NAD+ salvage · *Cell Metabolism* 2011 · Yoshino J et al. · archive: local PDF available
[^massudi2012]: doi:10.1371/journal.pone.0042357 · observational · n=49 human subjects (ages 15–77 plus newborns 0–1 yr) · pelvic skin biopsies only (non-sun-exposed; NOT muscle) · age-associated NAD+ decline (significant in males; r=−0.706, p<0.001) and rising PARP activity documented; inverse correlation between NAD+ and PARP activity in males (r=−0.638, p=0.0003); effects weaker/non-significant in females · *PLoS ONE* 2012 · Massudi H et al. · archive: local PDF available
[^grozio2019]: doi:10.1038/s42255-018-0009-4 · in-vivo/in-vitro (mouse) · Slc12a8 identified as sodium-dependent NMN-specific transporter in mouse small intestine (jejunum/ileum); does NOT transport NR; Slc12a8 KD abrogates fast NMN uptake in vivo; Slc12a8 KO reduces NAD+ in jejunum/ileum; Slc12a8 expression rises with age in ileum (compensatory) · *Nature Metabolism* 2019 · Grozio A et al. · archive: local PDF available

[^heggelund2024]: doi:10.1038/s43587-024-00758-1 · n=40 · rct (randomized double-blind placebo-controlled) · primary endpoint (sputum IL-8) met (−52.6%, p=0.030 at 6 weeks; persistent 12 weeks post-treatment) · model: stable COPD patients · NR 6 weeks · NCT04990869 · *Nature Aging* 2024 · Heggelund J et al. · archive: local PDF available · integrated from abstract pending full PDF verification (R34)
[^mcdermott2024]: doi:10.1038/s41467-024-49092-5 · n=90 · rct (randomized double-blind placebo-controlled, NR ± resveratrol vs placebo) · primary endpoint met (6MWD +17.6 m at 6 months, 90% CI +1.8, +∞) · model: peripheral artery disease (PAD) patients · 6 months · *Nature Communications* 2024 · McDermott MM et al. · archive: local PDF available · integrated from abstract pending full PDF verification (R34)
[^brody2024]: doi:10.1007/s11357-023-00999-9 · n=20 · rct pilot (placebo-controlled) · NAD+ 2.6-fold rise (p<0.001); cognition stable; DMN CBF reduced · model: mild cognitive impairment older adults · NR 1 g/day × 10 weeks · *GeroScience* 2024 · Brody DM et al. (Pinto group) · archive: pending download · integrated from abstract pending PDF verification (R34)
[^takeda2025]: doi:10.1111/acel.70093 · rct (double-blind randomized crossover placebo-controlled) · CAVI improved; skin ulcer area decreased; heel-pad thinning trend; blood creatinine decreased · model: Werner syndrome (progeroid) patients · NR 1 g/day × 26 weeks crossover · *Aging Cell* 2025 · Takeda T et al. (Oshima group) · archive: pending download · integrated from abstract pending PDF verification (R34)
[^igarashi2024]: doi:10.1007/s11357-024-01204-1 · n=60 · rct (randomized double-blind placebo-controlled parallel-group) · primary endpoint (stepping test) null; 4-m walking time shorter at 12 weeks; PSQI sleep quality improved · model: older adults · NMN 250 mg/day × 12 weeks · UMIN000047871 · *GeroScience* 2024 · Igarashi M et al. · archive: pending download · integrated from abstract pending PDF verification (R34)
[^tang2026]: doi:10.3390/nu18060890 · meta-analysis · 10 RCTs / 11 arms / n=349 · NMN reduced DBP −2.15 mmHg vs placebo (95% CI −3.68 to −0.61); SBP −3.94 mmHg in age ≥60 subgroup (95% CI −7.06 to −0.82) · *Nutrients* 2026 · Tang et al. · archive: not in archive · integrated from abstract pending PDF verification (R34)
[^caldosilva2025]: doi:10.1002/jcsm.13799 · meta-analysis · NMN: no significant effect on SMI, HGS, gait speed, 5CST in older adults · *Journal of Cachexia, Sarcopenia and Muscle* 2025 · Caldo-Silva A et al. · archive: pending download · integrated from abstract pending PDF verification (R34)
[^song2025]: doi:10.1080/10408398.2024.2387324 · meta-analysis · 12 RCTs, n=513 · NMN raised blood NAD+ but no significant change in fasting glucose, TG, TC, LDL-C, HDL-C · 5/12 studies high RoB · authors conclude "exaggeration of benefits" likely · *Critical Reviews in Food Science and Nutrition* 2025 · Song Q et al. · archive: pending · integrated from abstract pending PDF verification (R34)
[^schloesser2026]: doi:10.1038/s42255-025-01421-8 · n=65 · rct (open-label, placebo-controlled, three-arm comparison NR vs NMN vs NAM) · NR and NMN comparably raise circulatory NAD+; NAM does not · ex-vivo: gut microbes convert NR/NMN to nicotinic acid; NA is the potent NAD+ booster · 14 days · *Nature Metabolism* 2026 · Schloesser D et al. · archive: pending download · integrated from abstract pending PDF verification (R34) — substantively reframes mechanism debate

[^tretowicz2026]: [[studies/tretowicz-2026-blood-nad-stable-aging]] · doi:10.1038/s42255-026-01537-5 · observational + intervention pooled · n=303 across 7 independent cohorts (aging cohort n=40; twin-pair NR n=24; CardioHT n=26; ELITE n=47; LLS n=70; TEAMS n=65; MEJNES2019 n=31) · whole-blood NAD+ stable with age across all 6 age-comparison cohorts (P=0.24 aging cohort; R²=0.012 CardioHT; P=0.50 ELITE; R²=0.051 LLS; P=0.62 TEAMS; P=0.62 MEJNES2019) and stable across exercise/protein interventions in older adults · positive control: NR supplementation raises whole-blood NAD+ as expected · methodological core: UHPLC-HRMS validated for pre-analytical artifacts (frozen-without-methanol samples lose 30–80% of NAD+) · *Nature Metabolism* 2026-05-14 · Trętowicz MM et al. (Houtkooper laboratory, Amsterdam UMC) · archive: not in archive (DOI not yet in OpenAlex; reporting-summary + 8 source-data XLSX directly verified) · `verified: false` (Results/Discussion paywalled)

[^janssens2022]: doi:10.1038/s43587-022-00174-3 · observational · n=88 human muscle biopsies · positive association between healthy aging trajectories and skeletal muscle NAD+ abundance · *Nature Aging* 2022 · Janssens GE et al. (Houtkooper laboratory) · archive: pending verification · cited as ref. 5 in Trętowicz 2026 — the muscle-level finding remains valid; only the blood-level extrapolation is challenged

[^chen2015nmsc]: Chen AC, Martin AJ, Choy B, Fernández-Peñas P, Dalziell RA, McKenzie CA, Scolyer RA, Dhillon HM, Vardy JL, Kricker A, St George G, Chinniah N, Halliday GM, Damian DL · doi:10.1056/NEJMoa1506197 · *N Engl J Med* 2015;373(17):1618-1626 · rct · n=386 immunocompetent adults with ≥2 prior non-melanoma skin cancers (NMSC) in past 5 yr · oral nicotinamide 500 mg BID vs placebo × 12 months · primary endpoint: new NMSC at 12 months · ~23% reduction in new BCC/SCC (RR ~0.77); significant actinic keratosis reduction · ONTRAC trial; abstract-verified; full PDF not_oa

[^allen2023]: Allen NC, Martin AJ, Snaidr VA, Eggins R, Chong AH, Fernandéz-Peñas P, Gin D, Sidhu S, Paddon VL, Banney LA, Lim A, Upjohn E, Schaider H, Ganhewa AD, Nguyen J, McKenzie CA, Prakash S, McLean C, Lochhead A, Ibbetson J, Dettrick A, Landgren A, Allnutt KJ, Allison C, Davenport RB, Mumford BP, Wong B, Stagg B, Tedman A, Gribbin H, Edwards HA, De Rosa N, Stewart T, Doolan BJ, Kok Y, Simpson K, Low ZM, Kovitwanichkanont T, Scolyer RA, Dhillon HM, Vardy JL, Chadban SJ, Bowen DG, Chen AC, Damian DL · doi:10.1056/NEJMoa2203086 · *N Engl J Med* 2023 Mar 2;388(9):804-812 · PMID 36856616 · rct (phase 3, randomized 1:1, placebo-controlled) · n=158 (79 nicotinamide / 79 placebo); organ-transplant recipients (immunosuppressed) with ≥2 keratinocyte cancers in past 5 yr · oral nicotinamide 500 mg BID vs placebo × 12 months · primary endpoint: new keratinocyte cancers at 12 months · **rate ratio 1.0; 95% CI 0.8–1.3; P=0.96 (null)**; secondary endpoints (SCC, BCC, AK counts, QoL) also null; trial stopped early for poor recruitment; ONTRANS trial · ANZCTR ACTRN12617000599370 · null finding in immunosuppressed population contrasts directly with Chen 2015 ONTRAC RR ~0.77 in immunocompetent population — defines a population-context translation gap for oral NAD+-precursor NMSC chemoprevention; mechanism (NAD+-mediated restoration of UV-immunosuppression) likely conditional on intact immune surveillance · abstract-verified via PubMed efetch; full PDF not locally archived
