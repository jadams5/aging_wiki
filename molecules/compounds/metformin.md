---
type: compound
aliases: [dimethylbiguanide, Glucophage, 1,1-dimethylbiguanide]
pubchem-cid: 4091
inchikey: XZWYZXLIPXDOLR-UHFFFAOYSA-N
chembl-id: CHEMBL1431
drugbank-id: DB00331
cas-number: 657-24-9
mechanisms: [ampk-activation, complex-I-inhibition, mtor-inhibition, autophagy-induction, gut-microbiome-modulation, gdf15-induction]
measured-targets: ["[[ampk]]", "[[mtor]]", "[[complex-I-mitochondrial]]"]
hallmarks: ["[[chronic-inflammation]]", "[[deregulated-nutrient-sensing]]", "[[disabled-macroautophagy]]", "[[dysbiosis]]", "[[mitochondrial-dysfunction]]"]
clinical-stage: fda-approved
human-evidence-level: limited
half-life: "4–8.7 h (plasma); ~17 h apparent elimination"
translation-gap: phase-3-rct-needed
next-experiment: "TAME (Targeting Aging with Metformin) trial — n=3000 nondiabetic adults 65-79, composite aging endpoint; design published 2016 (Barzilai), still awaiting funding + ClinicalTrials.gov registration as of 2026-05."
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Martin-Montalvo 2013 (10.1038/ncomms3192) verified against full PDF — including χ²=51.70 for 1% toxic dose, χ²=5.46 + p=0.02 for 0.1% C57BL/6 0.1% lifespan extension, and serum metformin concentrations (0.45±0.09 mM at 0.1% dose). Cabreiro 2013 (10.1016/j.cell.2013.02.035) verified against full PDF — dose-response (25/50/100 mM → +18/+36/+3% mean lifespan), live-bacteria-requirement (axenic / UV-killed / metformin-resistant OP50-MR all abolish or reverse the extension), and folate-mechanism numerics (5-methyl-THF +116%, p=2.5×10⁻⁶). Coll 2019 (10.1038/s41586-019-1911-y) verified against downloaded accepted manuscript. Barzilai 2016 (10.1016/j.cmet.2016.05.011) verified against downloaded PDF — confirmed as review/essay describing TAME rationale; B12 incidence figures confirmed. Anisimov 2008 verified via EuropePMC abstract only (PDF download failed). Owen 2000 (10.1042/bj3480607) — downloaded file is an author index page, not full paper; complex I mechanism claims remain unverified against primary source text. Bannister 2014 (10.1111/dom.12354) unverifiable (not_oa). ChEMBL ID CHEMBL1431 and PubChem CID 4091 confirmed via live API; DrugBank DB00331 confirmed via PubChem cross-reference. InChIKey and CAS not independently re-checked against canonical databases. R34 recency adds: Ivimey-Cook 2025 (10.1111/acel.70131) abstract-verified via Europe PMC + DOI lookup (download pending; gold-OA URL available); Chen 2025 (10.1186/s13098-025-01825-2) abstract-verified via Europe PMC; Morin 2024 (10.1111/acel.14334) abstract-verified via Europe PMC. NCT02432287/MILES/TAME conflation corrected via direct ClinicalTrials.gov v2 API query (NCT02432287 = MILES n=16, COMPLETED 2017; no separate TAME 3000-person trial currently registered)."
---


# Metformin

A biguanide oral antihyperglycemic approved in Europe in 1957 and in the United States in 1995; currently the most-prescribed antidiabetic drug globally (~150 million users). Primary clinical indication: type 2 diabetes mellitus via reduction of hepatic gluconeogenesis. Studied as a **geroprotector** on the strength of (a) rodent lifespan data, (b) observational human data showing metformin-treated diabetics have lower all-cause mortality than matched non-diabetic comparators, and (c) its pharmacological overlap with [[caloric-restriction]] (shared activation of [[ampk]] and suppression of [[mtor]]). The **TAME (Targeting Aging with Metformin)** Phase-4 trial (Barzilai et al. 2016 design paper; not yet registered in ClinicalTrials.gov as of 2026-05) is the field's canonical attempt to demonstrate an effect on a composite aging endpoint in humans.

## Identity

- **PubChem CID:** 4091
- **InChIKey:** XZWYZXLIPXDOLR-UHFFFAOYSA-N
- **CAS:** 657-24-9
- **Molecular formula:** C₄H₁₁N₅
- **Molecular weight:** 129.16 g/mol
- **Class:** biguanide
- **SMILES:** CN(C)C(=N)N=C(N)N

## Mechanism of action

Metformin's mechanism is multi-layered and still debated. The field distinguishes an **acute** (hours) hepatic mechanism from **chronic** (days–weeks) systemic effects.

### Acute: mitochondrial complex I inhibition

The best-supported direct biochemical target is inhibition of **mitochondrial respiratory complex I** (NADH:ubiquinone oxidoreductase) in hepatocytes [^owen2000]. Metformin accumulates in mitochondria via the organic cation transporter OCT1 (liver-selective expression). Complex I inhibition reduces the mitochondrial proton gradient → lowers ATP production → raises the cellular AMP/ADP:ATP ratio → allosteric and upstream kinase-mediated activation of [[ampk]] [^martinmontalvo2013].

The resulting AMPK activation drives downstream effects:
- Phosphorylation and inhibition of ACC (acetyl-CoA carboxylase) → reduced fatty acid synthesis
- Inhibition of [[mtor|mTORC1]] via TSC2 phosphorylation → reduced anabolic signaling, promotion of [[autophagy]]
- Suppression of hepatic glucose output (CREB-TORC2 pathway)

**Caveats:** The complex I → AMPK cascade is debated as the dominant in vivo mechanism. Foretz et al. (2010) showed AMPK-independent hepatic glucose lowering in liver-specific AMPK knockout mice. At clinical doses (~1–2 g/day), the intrahepatic metformin concentration may be too low for significant complex I inhibition; alternative mechanisms (mitochondrial glycerophosphate dehydrogenase inhibition; AMPK-independent effects on gluconeogenic enzymes) remain under investigation. #gap/no-mechanism

### Chronic: GDF15 induction

At therapeutic doses and longer timescales, metformin induces circulating **GDF15** (growth differentiation factor 15), a stress hormone that signals reduced food intake and weight loss via the GFRAL receptor complex in the hindbrain (area postrema/nucleus tractus solitarius) [^coll2019]. GDF15-null and GFRAL-null mice are insensitive to metformin's weight-preventing effects on high-fat diet, and GFRAL antagonist antibody reverses metformin-induced weight loss in obese mice. GDF15 is therefore necessary for metformin's effects on body weight and energy balance. Importantly, metformin's glucose-lowering and insulin-sensitizing effects are GDF15-independent — these are preserved in Gdf15-null mice. Relevance to aging is indirect — GDF15 rises with age and disease burden, complicating interpretation of pharmacological induction as beneficial vs. adverse. The GDF15 mechanism may also explain some of metformin's GI intolerance.

### Other documented activities

- **Gut microbiome modulation:** metformin durably shifts the gut microbiome composition — increases Akkermansia muciniphila, Bifidobacterium — which may contribute to glycemic effects and potentially anti-inflammatory effects with aging relevance. The mechanistic prototype was established in *C. elegans* + *E. coli* co-culture by Cabreiro et al. 2013 [^cabreiro2013]: metformin at 25, 50, and 100 mM extended worm mean lifespan by **+18%, +36%, and +3%** respectively (dose-response is non-monotonic; +36% at 50 mM, p<0.001 by log-rank). Critically, **metformin's life-extending effect requires live bacteria**: in axenic culture (no *E. coli*) or on UV-irradiated *E. coli*, metformin shortened (rather than extended) worm lifespan (-16%, p<0.001 on UV-killed bacteria); pre-treatment of *E. coli* with metformin then transfer to drug-free plates was sufficient to extend lifespan (+33%, p<0.001), confirming that drug action is mediated through bacterial metabolism. Mechanism: metformin disrupts *E. coli* folate metabolism (5-methyl-THF +116%, p=2.5×10⁻⁶) → bacterial methionine restriction in the host → DR-mimetic state. On a metformin-resistant *E. coli* strain (OP50-MR, *glyA* mutation), metformin shortened worm lifespan by 37% (p<0.001) — i.e., absent the microbe-mediated effect, direct toxicity dominates. Whether the same microbe-mediated mechanism operates in mammals remains unresolved. #gap/no-mechanism
- **Methylglyoxal scavenging:** metformin is a direct scavenger of the glycolytic by-product methylglyoxal (a major AGE precursor), independent of AMPK. May reduce glycation-related damage relevant to the [[deregulated-nutrient-sensing]] hallmark. #gap/needs-replication
- **Inflammation suppression:** reduces circulating IL-6, TNFα, CRP in diabetic cohorts; partly AMPK-dependent (inhibits NF-κB activation). Whether this is causal for any aging benefit or merely reflects glycemic improvement is unknown. #gap/no-mechanism

## Effects on aging hallmarks

| Hallmark | Effect | Evidence level |
|---|---|---|
| [[deregulated-nutrient-sensing]] | AMPK activation, mTORC1 suppression — mimics nutrient-deprivation signaling | Strong preclinical; mechanism confirmed |
| [[disabled-macroautophagy]] | Promotes autophagy via AMPK→mTOR axis; AMPK directly phosphorylates ULK1 | Strong preclinical; indirect in humans |
| [[mitochondrial-dysfunction]] | Complex I inhibition: mild, hormetic-type stress proposed; mechanism debated | Mechanistic; net in vivo effect uncertain |
| [[chronic-inflammation]] | Reduces circulating inflammatory markers in diabetic humans | Observational; causality unclear |

## Rodent lifespan evidence

**Martin-Montalvo 2013 (NIA, C57BL/6 mice)** [^martinmontalvo2013]: Male C57BL/6 mice fed 0.1% (w/w) metformin in chow (starting at 54 weeks of age, ~13.5 months) showed **mean lifespan extension of +5.83%** (χ²=5.46, p=0.02, Gehan-Breslow survival test; n=64 metformin vs n=83 SD controls). A higher dose (1% w/w chow) was toxic and **shortened** mean lifespan by 14.4% (χ²=51.70, p<0.001, Gehan-Breslow; n=90 1%-metformin vs n=88 SD), likely due to renal failure. Female mice were not tested in this lifespan arm. A replication cohort of male B6C3F1 mice (n=36 metformin vs n=297 controls) showed +4.15% mean lifespan extension (χ²=3.43, p=0.064, Gehan-Breslow) — not statistically significant, though the authors note it suggests the effect is not strain-specific. Serum metformin in 0.1%-fed mice was 0.45 ± 0.09 mM (Mean ± SEM), an order of magnitude higher than typical diabetic-patient steady-state, complicating dose extrapolation.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (AMPK/mTOR axis) |
| Phenotype conserved in humans? | partial (metabolic effects confirmed; lifespan unknown) |
| Replicated in humans? | in-progress (TAME trial) |

**Anisimov 2008 (female SHR mice)** [^anisimov2008]: Metformin added to drinking water (100 mg/kg) extended mean lifespan of female outbred SHR **mice** by **+37.8%**, mean lifespan of last 10% survivors by +20.8%, and maximum lifespan by +10.3% (2.8 months). Tumor incidence was not significantly reduced. SHR is an outbred mouse stock; this is a single-strain result in a cancer-prone, hypertension-prone line and may not generalize. #gap/needs-human-replication

**ITP non-replication:** The NIA Interventions Testing Program (ITP), which tests compounds in the genetically heterogeneous UM-HET3 mouse stock, did not find significant lifespan extension for metformin in standard log-rank analysis. A 2024 reanalysis using the Gehan test identified a borderline signal, but this is not yet considered definitive. #gap/contradictory-evidence

**Vertebrate meta-analysis (Ivimey-Cook 2025):** A 2025 meta-analysis of 911 effect sizes across 167 papers and 8 vertebrate species found that **rapamycin produces statistically significant vertebrate lifespan extension comparable to dietary restriction, but metformin does not** [^ivimeycook2025]. The authors flag high heterogeneity and significant publication bias as caveats, but the headline conclusion meaningfully recalibrates the rodent-lifespan evidence base for metformin: across the totality of vertebrate lifespan studies, the metformin signal is not robust. #gap/contradictory-evidence

## Human observational evidence

**Bannister 2014 (UK CPRD cohort)** [^bannister2014]: In a matched-cohort analysis of 78,241 metformin-initiating T2D patients vs. 78,227 matched non-diabetic comparators followed for a median of ~3 years, the metformin group had **lower all-cause mortality** (HR ~0.85 vs. non-diabetics). Sulfonylurea initiators had *higher* mortality than non-diabetics (HR ~1.37). This is the most-cited evidence for metformin's potential geroprotective effect in humans.

**Critical caveats for the Bannister result:**

- Healthy user bias: metformin initiators must be metabolically eligible; non-diabetics include individuals with occult disease.
- Duration of follow-up was short (median ~3 years), which is insufficient to detect a geroprotective effect distinct from glycemic benefit.
- Reverse causation and immortal-time bias are unaddressed.
- The finding has not been replicated with rigorous causal methods on all-cause mortality. #gap/needs-replication

**Mendelian randomization (Chen 2025, frailty index):** A two-sample MR analysis using 10 SNPs as genetic proxies for metformin-target effects (calibrated to body-weight reduction) found that genetically-predicted metformin action was associated with **reduced frailty index** (β = -0.41, 95% CI -0.74 to -0.07, p=0.017) [^chen2025mrfrailty]. The mitochondrial-complex-I sub-target carried the largest effect; HbA1c mediated only 5.5% of the body-weight-FI effect, suggesting the mechanism is not solely glycemic. This is the first MR-causal evidence for a metformin–aging-phenotype link in humans, though FI is not all-cause mortality and the body-weight calibration introduces interpretive uncertainty.

**UK population pharmaco-epidemiology (Morin 2024):** Across UK Biobank prescription records, metformin was among prescription drugs most strongly associated with **reduced all-cause mortality** [^morin2024]; the analysis is observational (matched-cohort across multiple drugs) and does not resolve the confounding/selection issues that affect Bannister 2014.

## TAME Trial

**Targeting Aging with Metformin (TAME)** [^barzilai2016]:

- **Phase:** designed as a Phase 4 trial of an approved drug; the FDA precedent-setting feature is use of "aging" as a primary endpoint
- **Sponsor:** AFAR (American Federation for Aging Research) / NIA
- **Design:** Randomized, double-blind, placebo-controlled; ~3,000 participants aged 65–79 years without diabetes; sites across the US
- **Dose:** 1,500–1,700 mg/day (extended-release formulation)
- **Primary outcome:** A composite endpoint of incident cardiovascular disease, cancer, dementia, and death — operationalizing aging as a single treatable condition
- **Status:** As of 2026-05-08, the TAME 3,000-participant Phase-4 trial **does not have a current ClinicalTrials.gov registration**. The trial remains in the funding/design phase; first patient first dose is not yet announced. Enrollment timelines and expected first-results dates from prior reporting (~2028–2029) are speculative pending registration. ⚠️ **NCT02432287, sometimes mis-cited as "TAME," is the unrelated MILES (Metformin In Longevity Study) pilot trial — n=16, completed 2017** (Kulkarni et al. 2018, *Aging Cell* 17:e12723). Do not conflate the two.
- **Significance:** TAME would be the first FDA-reviewed trial with "targeting aging" as its explicit indication; success or failure would set precedent for future geroscience trials

## Pharmacokinetics

| Parameter | Value |
|---|---|
| Oral bioavailability | 50–60% (absorbed in small intestine via OCT1/3) |
| Tmax | 2.5 h (immediate-release) |
| Plasma half-life | 4–8.7 h |
| Volume of distribution | ~654 L (extensive tissue distribution) |
| Protein binding | Negligible (<5%) |
| Elimination | Renal excretion unchanged (no hepatic metabolism) |
| Contraindication | eGFR <30 mL/min/1.73m² (lactic acidosis risk) |

Metformin accumulates in the gut wall, liver, and kidney at concentrations substantially higher than plasma — relevant to interpreting in vitro experiments performed at plasma-equivalent concentrations.

## Clinical dosing (T2D standard)

- **Starting dose:** 500 mg twice daily with meals (to reduce GI side effects)
- **Standard dose range:** 1,000–2,000 mg/day
- **Maximum dose:** 2,550 mg/day (divided doses)
- **Formulation:** immediate-release or extended-release (ER reduces GI AEs)

Extended-release is preferred for tolerability; the TAME trial uses 1,500 mg ER daily.

## Safety and adverse effects

**GI intolerance** is the dominant adverse effect: nausea, diarrhea, and abdominal discomfort affect ~20–30% of initiators; resolves for most patients with gradual dose escalation or switch to ER formulation.

**Vitamin B12 deficiency:** Long-term metformin use is associated with reduced serum B12 levels; the Barzilai 2016 TAME rationale paper notes that vitamin B12 deficiency occurred in ~7% of metformin group vs 5% placebo in DPP/DPPOS over 13 years [^barzilai2016]. Mechanism: interference with ileal calcium-dependent B12 absorption. Can cause peripheral neuropathy if severe. Clinical practice: monitor B12 annually in long-term users; supplement if deficient. Relevant to geroprotector use, as B12 deficiency itself contributes to neuropathy and cognitive decline in aging. #gap/long-term-unknown

**Lactic acidosis:** Rare (<1 case/10,000 patient-years in non-renally impaired patients); nearly exclusively associated with contraindicated use in renal impairment or acute illness with hemodynamic instability. Risk is substantially lower than early retrospective estimates suggested.

**Drug interactions:** metformin dose reduction required if OCT2 inhibitors (cimetidine, trimethoprim) are co-administered; they reduce renal tubular secretion of metformin.

## Relationship to caloric restriction

Metformin mimics several molecular signatures of [[caloric-restriction]] [^martinmontalvo2013]:
- AMPK activation (both CR and metformin raise AMP/ATP ratio)
- mTORC1 suppression
- Autophagy induction
- Reduction in IGF-1 signaling (indirect, via AMPK)

However, the transcriptional signature of metformin in mice (liver gene expression) overlaps substantially but not completely with CR, and metformin did not reduce caloric intake in non-obese animals in the Martin-Montalvo study (metformin-fed C57BL/6 mice actually consumed more calories than SD controls). They are mechanistically related but not equivalent. Martin-Montalvo 2013 did not include a combined Met+CR lifespan arm; the CR group in that study was used only for transcriptome comparisons. Whether combined Met+CR produces additive lifespan extension is untested. #gap/dose-response-unclear

## Limitations and open questions

- **Causal human evidence absent** — all human observational data has major confounding issues. The TAME trial is needed to establish causation. #gap/needs-human-replication
- **Sex-specific effects** — male-only lifespan extension in Martin-Montalvo 2013; Anisimov 2008 used female mice only. Sex dimorphism in metformin's geroprotective effects is unresolved. #gap/contradictory-evidence
- **ITP null result** — failure to replicate in genetically heterogeneous mice (UM-HET3 stock) under standard log-rank testing undercuts the lifespan evidence. #gap/contradictory-evidence
- **Mechanism ambiguity** — complex I inhibition, GDF15 induction, gut microbiome modulation, and direct AGE scavenging are each plausible; their relative contributions in aging contexts are unknown. #gap/no-mechanism
- **B12 depletion** is a real and underappreciated long-term risk in geroprotective dosing regimens. Any aging trial must monitor and correct B12 status.
- **Exercise interaction** — observational data suggest metformin may blunt exercise-induced mitochondrial adaptations (reduced PGC-1α induction). Relevant for aging intervention design, since exercise is one of the most robust healthspan interventions. This interaction deserves dedicated study. #gap/needs-replication

## Classification

- **SENS strategy:** not a primary fit; closest to [[sens-damage-categories|MitoSENS]] (mitochondrial modulation) and indirect [[sens-damage-categories|AmyloSENS]] (reduced AGE formation)
- **Hallmark targets:** [[deregulated-nutrient-sensing]], [[disabled-macroautophagy]], [[chronic-inflammation]]
- **Intervention category:** [[ampk-activators]] (R23d class page) — anchor compound for the indirect-AMPK-activator geroprotector class (TAME pivotal trial)
- **DrugAge entry:** metformin is listed in DrugAge with lifespan extension data from multiple rodent studies

## Cross-references

- [[ampk]] — primary molecular target; page verified
- [[mtor]] — downstream suppression; page verified
- [[autophagy]] — induced via AMPK→ULK1 axis; page verified
- [[caloric-restriction]] — shares mechanistic signature; page verified
- [[type-2-diabetes]] — primary clinical indication (implicit stub)
- [[insulin-igf1]] — upstream pathway metformin indirectly modulates (implicit stub)
- [[deregulated-nutrient-sensing]] — primary hallmark target (implicit stub)
- [[interventions/pharmacological/geroprotectors]] — category page (implicit stub)

## Footnotes

[^owen2000]: [[studies/owen-2000-metformin-complex-I]] · doi:10.1042/bj3480607 · in-vitro · model: isolated rat hepatocyte mitochondria · foundational mechanistic paper; cited 2,000+ times

[^martinmontalvo2013]: [[studies/martin-montalvo-2013-metformin-mice]] · n=64 metformin / n=83 SD control (C57BL/6 primary lifespan arm); n=36/297 (B6C3F1 replication arm) · in-vivo · p=0.02 Gehan-Breslow (C57BL/6 mean lifespan); p=0.064 (B6C3F1, NS) · model: male C57BL/6 mice fed 0.1% metformin chow from 54 weeks of age · locally available PDF

[^anisimov2008]: [[studies/anisimov-2008-metformin-shr]] · doi:10.4161/cc.7.17.6625 · in-vivo · model: female outbred SHR mice (100 mg/kg metformin in drinking water) · mean lifespan +37.8%; last 10% survivors +20.8%; maximum lifespan +10.3%; single-strain result; PDF download failed (no candidate URLs in archive)

[^bannister2014]: [[studies/bannister-2014-metformin-nondiabetic-mortality]] · doi:10.1111/dom.12354 · observational · n=78,241 metformin initiators vs 78,227 matched non-diabetic controls · UK CPRD · median follow-up ~3 years · HR ~0.85 all-cause mortality; not_oa (no local PDF)

[^barzilai2016]: [[studies/barzilai-2016-metformin-aging-tool]] · doi:10.1016/j.cmet.2016.05.011 · review · model: human (trial design) · Cell Metabolism 2016; describes TAME rationale and design

[^coll2019]: [[studies/coll-2019-gdf15-metformin]] · doi:10.1038/s41586-019-1911-y · in-vivo + RCT sub-study · model: mice (Gdf15-null, Gfral-null) + human CAMERA trial data · Nature 578:444–448, 2020 (DOI registered 2019); GDF15 necessary for metformin weight-lowering effect; glucose lowering is GDF15-independent

[^cabreiro2013]: Cabreiro F, Au C, Leung KY, Vergara-Irigaray N, Cochemé HM, Noori T, Weinkove D, Schuster E, Greene NDE, Gems D · doi:10.1016/j.cell.2013.02.035 · in-vivo · *Cell* 153:228–239 · model: *C. elegans* + *E. coli* OP50 co-culture, +6 other *E. coli* strains, *B. subtilis* · 25/50/100 mM metformin → +18%/+36%/+3% mean lifespan (log-rank p<0.001 at 50 mM); axenic culture, UV-killed bacteria, and metformin-resistant OP50-MR all eliminate the life-extending effect (50 mM shortens lifespan -16% to -37% in those conditions); mechanism = bacterial folate disruption (5-methyl-THF +116%, p=2.5×10⁻⁶) → host methionine restriction → DR-mimetic state · OA via PMC; locally available

[^ivimeycook2025]: Ivimey-Cook ER, Sultanova Z, Maklakov AA · doi:10.1111/acel.70131 · meta-analysis · *Aging Cell* 2025 · n=911 effect sizes from 167 papers across 8 vertebrate species · DR robustly extends vertebrate lifespan; rapamycin replicates the DR-magnitude effect; **metformin does not produce a significant vertebrate lifespan extension across the pooled dataset** · high heterogeneity and significant publication bias caveats noted · OA gold; PMC12419861

[^chen2025mrfrailty]: Chen T, Liu YL, Qiu HN, Lin CY, Wu F, Li JB, Lin JN · doi:10.1186/s13098-025-01825-2 · two-sample Mendelian randomization · *Diabetol Metab Syndr* 2025 · 10 SNPs as genetic proxies for metformin-target effects (body-weight calibration) · genetically-predicted metformin → reduced frailty index (β=-0.41, 95% CI -0.74 to -0.07, p=0.017); mitochondrial complex I sub-target carries the largest effect; HbA1c mediates 5.5% of body-weight→FI · OA; PMC12183837

[^morin2024]: Morin J, Rolland Y, Bischoff-Ferrari HA, Ocampo A, Perez K · doi:10.1111/acel.14334 · observational · *Aging Cell* 2024 · UK Biobank prescription-records analysis across multiple prescription drug classes · metformin among drugs most strongly associated with reduced all-cause mortality · OA; PMC11634711
