---
type: framework
aliases: [SENS, Strategies for Engineered Negligible Senescence, de Grey damage categories]
sources: []
covers: [hallmarks, interventions, sens-damage-categories, clinical-translation, current-research-in-progress]
---

> Foundational sources for the SENS framework are not single peer-reviewed studies but a collection: de Grey's 2002 *Annals of the New York Academy of Sciences* essay "Time to Talk SENS"; the 2007 book *Ending Aging* (de Grey & Rae); and the SENS Research Foundation's own publications and grant outputs. Pin these as bare references in the body when relevant, rather than as `studies/` pages.

> ⚠️ **Updated 2026-05-09 with current-research-in-progress sections per category** (R36 ingest batch). The seven-category taxonomy from de Grey 2002 is unchanged; what is new is the per-category research landscape after the 2024 / 2025 / 2026 publication and clinical-trial activity. Citations marked "needs-verification" are pending PubMed/Crossref confirmation; do not rely on them for derivative claims until verified.

# SENS damage categories

Aubrey de Grey's seven categories of accumulated cellular/molecular damage, each paired with a proposed intervention strategy. Originally proposed in the early 2000s; framework formalized by the SENS Research Foundation. SENS Research Foundation severed ties with de Grey in 2021 amid harassment allegations; de Grey founded the **Longevity Escape Velocity (LEV) Foundation** in 2022, which now runs the *Robust Mouse Rejuvenation* (RMR) studies as the primary integrative-test platform for SENS-style combination therapies. SENS Research Foundation continues to operate independently with several spinout biotechs that originated from its grant-funded work (Cyclarity Therapeutics, Repair Biotechnologies, Revel Pharmaceuticals).

This page is a *navigational overlay*. Each damage category links to its associated hallmark(s), pathways, and interventions. Quantitative claims and primary-source detail live on the linked atomic pages — follow links before relying on numbers.

> The SENS approach treats aging as accumulation of seven categories of damage that classical biology already understood by the 1980s; the goal is to repair each category rather than slow its accumulation.

The framework is complementary to [[hallmarks-of-aging]] (López-Otín 2013/2023) and [[frameworks/engineered-negligible-senescence]] (the wiki-internal MOC for full-arrest analysis). All three frameworks ultimately point to the same atomic pages.

---

## The seven damage categories

### 1. Cell loss and atrophy — RepleniSENS

**Damage:** Tissues lose post-mitotic cells faster than they're replaced (cardiomyocytes, neurons, immune progenitors).

**Repair strategy:** Stem cells, tissue engineering, growth-factor signaling, ectopic-organ engraftment.

**Maps to hallmark:** [[stem-cell-exhaustion]]

**Related pages:** [[interventions/stem-cell-therapy/]], [[hematopoietic-stem-cells]], [[interventions/stem-cell-therapy/ipsc-derived-cell-therapy]], [[interventions/stem-cell-therapy/in-vivo-partial-reprogramming-therapy]]

### 2. Division-obsessed cells — OncoSENS

**Damage:** Cells acquire mutations that bypass replicative limits → cancer.

**Repair strategy:** "WILT" (Whole-body Interdiction of Lengthening of Telomeres) — preemptively remove telomere-lengthening machinery; pair with periodic stem-cell reseeding. The canonical version has not advanced; current focus has shifted to (a) allele-selective oligonucleotides against known cancer driver mutations ([[interventions/pharmacological/allele-selective-oligonucleotides]] verified) and (b) cancer-resistance mechanism transfer from long-lived species (see [[frameworks/cancer-aging-tradeoffs]]).

**Maps to hallmark:** [[genomic-instability]] (cancer dimension), [[telomere-attrition]]

**Related pages:** [[telomerase]], [[alt-pathway]], [[frameworks/cancer-aging-tradeoffs]]

### 3. Death-resistant cells — ApoptoSENS

**Damage:** Senescent cells accumulate; resist apoptosis; secrete pro-inflammatory SASP factors.

**Repair strategy:** Senolytics — drugs that selectively kill senescent cells. Current generation: BCL-2 family inhibitors (navitoclax, UBX1325/foselutoclax), tyrosine-kinase inhibitor combinations (D+Q), flavonols (fisetin), GPX4 modulators (RLS-1496), PROTAC degraders (DT2216, PZ15227), gene-therapy approaches (Oisin FAST-PLV), CAR-T (Amor uPAR-targeted).

**Maps to hallmark:** [[cellular-senescence]]

**Related pages:** [[interventions/pharmacological/senolytics]], [[fisetin]], [[dasatinib]], [[quercetin]], [[navitoclax]], [[sasp]], [[frameworks/apoptosenes]]

### 4. Mitochondrial mutations — MitoSENS

**Damage:** Mitochondrial DNA mutates → dysfunctional respiration → ROS production cycle.

**Repair strategy:** Allotopic expression — relocate the 13 mtDNA-encoded protein genes to the nuclear genome where they're protected from local oxidative damage. Adjacent strategies: in-situ mtDNA base editing (DddA-derived deaminases, mitoTALEDs, mitoBEs); selective heteroplasmy reduction; mitochondrial transplantation (Boston Children's pediatric cardiac program; SENS-aligned biotech).

**Maps to hallmark:** [[mitochondrial-dysfunction]]

**Related pages:** [[mtdna]], [[mtdna-heteroplasmy]], [[mitophagy]], [[oxphos]], [[allotopic-expression]] (newly seeded R36)

### 5. Intracellular waste products — LysoSENS

**Damage:** Lysosomes accumulate undegradable aggregates (lipofuscin, oxidized cholesterol byproducts including 7-ketocholesterol, retinal A2E, advanced lipofuscin variants).

**Repair strategy:** Identify enzymes (often from soil bacteria) that can break down these aggregates; deliver them to lysosomes. Adjacent: small-molecule cyclodextrin-based oxidized-cholesterol clearance (Cyclarity UDP-003); cell-autonomous degradation platforms that enhance native lysosomal clearance (Repair Biotechnologies REP-0003).

**Maps to hallmark:** [[loss-of-proteostasis]] (intracellular)

**Related pages:** [[processes/lipofuscin]], [[lysosome]], [[autophagy]], [[7-ketocholesterol]] (newly seeded R36)

### 6. Extracellular waste products — AmyloSENS

**Damage:** Misfolded protein aggregates accumulate outside cells (β-amyloid, tau, transthyretin, α-synuclein, IAPP).

**Repair strategy:** Immunotherapy — antibodies that target aggregates for clearance by phagocytes; small-molecule TTR stabilizers; antisense oligonucleotides that suppress aggregation-prone protein production at the source (BIIB080 for tau, patisiran/vutrisiran for TTR).

**Maps to hallmark:** [[loss-of-proteostasis]] (extracellular)

**Related pages:** [[amyloid-beta]], [[tau]], [[alpha-synuclein]], [[alzheimers-disease]], [[lecanemab]] (newly seeded R36), [[donanemab]] (newly seeded R36), [[tafamidis]] (newly seeded R36), [[acoramidis]] (newly seeded R36), [[patisiran]] (newly seeded R36)

### 7. Extracellular matrix stiffening — GlycoSENS

**Damage:** Glucose and other reactive carbonyls cross-link collagen and elastin, stiffening tissues (arteries, skin, joints, basement membranes). Glucosepane is the dominant glycation crosslink in long-lived human ECM.

**Repair strategy:** AGE-breaker compounds (the alagebrium / ALT-711 class — failed Phase 3; broad-spectrum approach has not delivered); enzymatic glucosepane cleavage (Revel Pharmaceuticals' soil-bacteria-discovered enzymes — preclinical); aldehyde-trapping / glyoxal-scavenging upstream agents (pyridoxamine, benfotiamine).

**Maps to hallmark:** Loosely [[altered-intercellular-communication]]; ECM is not formally a hallmark in López-Otín's framework. ECM stiffening is one of the major López-Otín-misses.

**Related pages:** [[processes/glucosepane]], [[advanced-glycation-end-products]] (newly seeded R36), [[collagen-crosslinking]]

---

## Maturity matrix — quick reference (2026-05-09)

| Category | Strategy maturity | Lead approved/late-stage agent | Lead biotech |
|---|---|---|---|
| **RepleniSENS** | **Phase 3** (multiple) | Bemdaneprocel (Bayer/BlueRock), zimislecel (Vertex), raguneprocel JP MAA filed (Sumitomo) | Bayer/BlueRock; Vertex; Sumitomo Pharma |
| **OncoSENS** (WILT) | **Conceptual** (canonical); **Phase 2-3** (adjacent) | Imetelstat (FDA-approved MDS, not aging) | Geron; cancer-resistance transfer programs preclinical |
| **ApoptoSENS** | **Phase 2 (mixed); Phase 1** | UBX1325 / foselutoclax (BEHOLD positive, ASPIRE missed primary) | Unity (asset under strategic-review); Rubedo; Oisin |
| **MitoSENS** | **Late preclinical** | None clinical | Cyclarity (cross-categorizes); academic mtDNA editing labs |
| **LysoSENS** | **Phase 1** | UDP-003 (Cyclarity, dosing started Jan 2025 Australia) | Cyclarity Therapeutics; Repair Biotechnologies |
| **AmyloSENS** | **FDA-approved (multiple)** | Lecanemab, donanemab, tafamidis, patisiran, vutrisiran, acoramidis | Eisai/Biogen; Lilly; Pfizer; Alnylam; BridgeBio |
| **GlycoSENS** | **Preclinical** | None clinical | Revel Pharmaceuticals |

---

## Current research in progress — by category (2024–2026)

### RepleniSENS — current programs

**The most translated SENS category by clinical-stage count.** Three Phase 3 / pivotal-stage programs; first regulatory filing (Sumitomo Japan, August 2025) for an iPSC-derived cell therapy.

- **Bemdaneprocel (Bayer/BlueRock) for Parkinson's** — Phase 1 readout: clinically meaningful 17.9-point reduction in MDS-UPDRS Part III at high dose; effects sustained at 36 months; no graft-related serious AEs. **Pivotal Phase 3 exPDite-2 (NCT06778265, needs-verification) dosed first patient September 2025.** FDA RMAT designation 2024. Allogeneic hESC-derived dopaminergic precursors.
- **Sumitomo/CiRA Kyoto raguneprocel iPSC-DA progenitors** — Phase I/II *Nature* April 2025 (PMID 40240591, needs-verification); 4/6 patients with MDS-UPDRS Part III OFF-state improvement at 24 months; no tumor formation. **Sumitomo + RACTHERA submitted Japanese marketing authorization application August 5, 2025** — likely the first regulatory filing for an iPSC-derived neural cell therapy globally.
- **Vertex zimislecel (VX-880) for type 1 diabetes** — ADA 85th Scientific Sessions (June 2025): all 12 patients restored endogenous insulin secretion, eliminated severe hypoglycemia, achieved A1C <7% and time-in-range >70%. 10/12 fully insulin-independent. Pivotal **FORWARD-101 Phase 1/2/3 underway**. BLA expected ~2027.
- **Vertex VX-264 (encapsulated, immunosuppression-free) discontinued 2024** — C-peptide rises insufficient for clinical benefit. Notable failure: **encapsulation strategies for islet cell therapy remain unsolved.**
- **Astellas ASP7317 hESC-RPE for dry AMD/geographic atrophy and Stargardt** — Phase 1b dose-escalation (50K–200K cells subretinal); enrolling 2024; readout expected late 2025 / 2026.
- **LyGenesis ectopic liver organoid (lymph node) Phase 2a (NCT04496479, needs-verification)** — first patient April 2024 (Eric Lagasse lab). **March 2025 DSMB cleared dose-escalation** after first 4-patient cohort showed acceptable safety. Enrolling 12 patients with end-stage liver disease.
- **TRIIM-X (Intervene Immune; Greg Fahy) thymic regeneration trial (NCT04375657)** — expanded follow-up to original TRIIM trial (rhGH + DHEA + metformin). Original TRIIM (Fahy 2019, *Aging Cell*; PMID 31496122, needs-verification): -2.5 yr GrimAge reversal across n=9 men. **Phase 2 enrollment ongoing as of Q1 2026.**
- **Naked mole-rat HMW-HA / [[has2|HAS2]] mouse transgenic** (Gorbunova/Seluanov labs, Rochester) — *Nature* 2023 (PMID 37612507): nmrHas2 transgenic mice +4.4% median / +12.2% max lifespan, reduced spontaneous (70%→57%) and induced cancer, attenuated tissue inflammation, gut barrier preservation, microbiome shift to longevity-associated taxa. Mouse Has2 alone reproduces anti-inflammatory benefits — HA abundance (not NMR-specific protein) is the operative variable. **First whole-animal proof of xenogeneic NMR-longevity-mechanism transfer.** See [[studies/zhang-2023-nmrhas2-mouse-healthspan]] (verified). Translation-route candidates: AAV-HAS2 gene therapy (preclinical only) or hyaluronidase inhibitors (4-MU; flavonoid-based; speculative for aging).

**Highest-priority recent finding:** Sumitomo Phase I/II *Nature* 2025 paper — first published clinical evidence for iPSC-derived neural cell durability at 24 months in living patients.

**Notable failure:** Vertex VX-264 encapsulated islet program discontinued (2024).

### OncoSENS / WILT — current programs

**The least-translated SENS category.** WILT-as-conceived has not advanced; the cancer-prevention thinking has migrated to adjacent strategies.

- **WILT remains conceptual.** No clinical or rigorous preclinical animal-model program for whole-body telomerase ablation. Last serious published commentary: de Grey 2004 (PMID 15247008, needs-verification). The required infrastructure (decadal repopulation of all proliferative tissues) is not feasible.
- **Imetelstat (Geron) — telomerase inhibitor — FDA-approved June 2024** for transfusion-dependent anemia in lower-risk MDS (brand name Rytelo). A bona-fide telomerase-targeting drug in the clinic, but used as an MDS therapy, not a WILT-style aging intervention. **Worth flagging as a precedent that telomerase inhibition is clinically tolerable.**
- **ALT (alternative lengthening of telomeres) cancer-targeting research expanded 2024–2025.** *Cold Spring Harbor Perspectives* April 2025 review (needs-DOI) on therapeutic opportunities for ALT-positive cancers — relevant because WILT would fail against ALT-using cells.
- **Cancer-resistance retrogene transfer (TP53RTGs)** — September 2024 bioRxiv (10.1101/2024.09.07.611789): Asian elephant TP53 retrogene knockouts activate distinct DNA-damage and tumor-microenvironment pathways. No mouse-engraftment study yet for pan-paralog elephant TP53. See [[frameworks/cancer-aging-tradeoffs]] for the broader cell-autonomous-tumor-suppression frame.
- **Cancer-resistant species mechanism transfer — naked mole rat HMW-HA → mice** (covered under RepleniSENS): low-cancer phenotype achieved across spontaneous tumor incidence at +4.4% lifespan cost. The closest existing translation of "transfer cancer resistance via gene therapy."
- **Tomás-Loba 2008 super-tumor-suppressor + TERT combination** — original *Cell* paper (PMID 19013273) showed TERT extension plus enhanced p53/p16/p19ARF; not advanced beyond the original report.
- **No SRF or LEV Foundation publications specifically advancing WILT in 2024–2026.**
- **Allele-selective oligonucleotides** ([[interventions/pharmacological/allele-selective-oligonucleotides]] verified) — FDA-approved drugs exist (tofersen, patisiran, milasen, others) for non-cancer indications; the conceptual extension to cancer driver-mutation hotspots (e.g., GNAQ Q209L in uveal melanoma; KRAS G12C; BRAF V600E) is preclinical for somatic-mosaic clearance.

**Highest-priority recent finding:** Imetelstat FDA approval (2024) demonstrating clinical telomerase-inhibition tolerability — relevant as proof-of-concept that the pharmacological half of WILT is feasible, even if the stem-cell-replacement half is not.

**Notable failure:** WILT itself — never escaped concept stage; the field has effectively pivoted to retrogene/HMW-HA approaches and indication-bounded ASOs.

### ApoptoSENS — current programs

**The category with the most clinical activity AND the most prominent failures.** 2025 was a mixed year — UBX1325 hit Phase 2 endpoints in BEHOLD but missed primary in Phase 2b ASPIRE.

- **UBX1325 (foselutoclax; Unity Biotechnology) BEHOLD Phase 2 in DME** — *NEJM Evidence* April 2025 (PMID 40261111; doi:10.1056/EVIDoa2400009). 65 patients, single intravitreal injection, 48-week follow-up. **+5.6 ETDRS letters vs sham** (95% CI -1.5 to 12.7). Mechanism: BCL-xL inhibition in senescent retinal vasculature.
- **UBX1325 ASPIRE Phase 2b (DME, head-to-head vs aflibercept) — missed primary endpoint.** Topline May 2025: non-inferior at most timepoints but missed primary at average of weeks 20–24. +5.5 letter gain at 36 weeks. **Unity board approved strategic alternatives (sale/license/divestiture) of UBX1325.** Major setback for senolytic-monotherapy paradigm.
- **D+Q Mayo Phase 2 osteoporosis trial (Farr/Khosla) — 2024 readout** — 60 postmenopausal women, 100 mg D + 1000 mg Q × 3 days q28d × 20 weeks. P1NP up, CTx down, distal radius BMD increased — driven by **high-senescent-cell-burden subgroup**. Establishes patient-stratification heuristic for future senolytic trials.
- **D+Q AFFIRM frailty trial / fisetin AFFIRM-LITE (NCT03430037, NCT03675724)** — Mayo Clinic; AFFIRM-LITE focuses on women with gait disturbance. Results pending.
- **Senolytic CAR-T (uPAR; Amor 2020 → 2024 *Nature Aging*)** — PMID 38267706 (January 2024) extended 2020 *Cancer Discovery* work; showed prophylactic and long-lasting efficacy against age-related metabolic dysfunction. **No clinical trial registered**; Cleara Biotech mentioned in trade press but IP-holder relationship not confirmed publicly (needs-verification).
- **Oisin Biotechnologies FAST-PLV p16/p53 dual senolytic gene therapy** — December 2024 publication (ResearchGate posted Dec 2024, needs-DOI): naturally aged mice, **+123% post-treatment survival** with combined p16+p53 caspase-9 induction; 3-fold reduced tumor incidence. **$15M Series A first close July 2024.**
- **Rubedo Life Sciences RLS-1496 GPX4 modulator** — first-in-human Phase 1 (topical) for plaque psoriasis, atopic dermatitis, skin aging — **first patient dosed May 2025** (EMA-cleared trial). Preliminary 2026 readout: met primary, significant target engagement; ~20% reduction in epidermal thickness on histology after 1 month. Systemic formulation Phase 1 planned 2026; FDA IND cleared for actinic keratosis (Phase 1b/2a).
- **Dialectic Therapeutics DT2216 (BCL-xL PROTAC)** — AACR April 2025: first-in-human Phase 1 in solid malignancies (NCT04886622), 20 patients, RP2D 0.4 mg/kg IV biw, 20% stable disease, transient grade 4 thrombocytopenia (resolved <48h). **FDA Fast Track for r/r PTCL/CTCL.** Cancer-positioned but mechanistically a senolytic PROTAC.
- **PZ15227 (CRBN-recruiting BCL-xL PROTAC; He/Zhou Mayo)** — preclinical only as of 2026; lower platelet toxicity than navitoclax. No clinical trial.

**Highest-priority recent finding:** UBX1325 BEHOLD (*NEJM Evidence* 2025) is the **first peer-reviewed Phase 2 evidence of senolytic clinical efficacy** — but the ASPIRE Phase 2b miss within months means the BCL-xL paradigm may not be the right modality for senolytic translation. The field is now diversifying toward GPX4 (Rubedo), gene-therapy (Oisin), and cell-therapy (uPAR CAR-T).

**Notable failures:** UBX0101 (knee OA, 2020); UBX1325 ASPIRE (2025) — both Unity programs.

### MitoSENS — current programs

**Slow but steady mechanistic progress; no clinical translation.** The translation gap is acute — even the most advanced mtDNA-editing technologies have not entered IND-enabling studies.

- **In vivo allotopic expression of ATP8 in mouse (2024)** — PMID 39659757 (Lewis et al., *Mol Ther Methods Clin Dev* December 2024). Transgenic mouse with epitope-tagged recoded ATP8 expressed from ROSA26 nuclear locus; protein successfully imported into mitochondria and incorporated into ATP synthase. **First in vivo demonstration of nuclear-encoded mtDNA-gene rescue in a whole mouse**, validating the foundational MitoSENS premise after ~20 years of in vitro work. Likely from the SENS/Buck team continuing Matthew "Oki" O'Connor's pre-Cyclarity work.
- **DddA-derived cytosine base editor (DdCBE) → high-fidelity Hifi-DdCBE** — used to generate LHON-mutant (MT-ND4 G11778A) mouse model with retinal ganglion cell loss; AAV-delivered mitoTALEDs intravitreally restored both genotype and phenotype (*Nature Communications* 2025; needs-DOI confirmation).
- **mitoBEs strand-selective mtDNA base editing** (*Nature Biotechnology* 2023) — extended to human disease-mutation correction in patient-derived models (*PLOS Biology* 2025; needs-DOI confirmation).
- **TALEDs (TALE-linked deaminases)** — both C-to-T and A-to-G now feasible in mtDNA. RNA off-target editing remains the main translational bottleneck; engineered variants in 2024–2025 reduce but do not eliminate it (*Cell* 2023, Mok et al., PMID 38128525, needs-verification).
- **Mitalipov mitochondrial replacement therapy (MRT) heteroplasmy reduction via forced mitophagy** — *Nature Biomedical Engineering* 2022 (PMID 35726068, needs-verification); embryo-stage application. Methodology relevant to somatic mtDNA-clearance approaches.
- **James McCully (Boston Children's) mitochondrial transplantation — 16 pediatric ECMO patients.** Autologous mitochondria injected into ischemic heart; **80% off-ECMO vs 40% historical control** (no formal Phase 1 trial registry per public search). 2024 *Sci Reports* demonstrated transcriptomic/proteomic normalization in DCD donor hearts; **March 2025 *J Heart Lung Transplant*** extended to lung perfusion. Not aging-positioned but provides safety/feasibility precedent for mito-transfer.
- **PEMphix Therapeutics, CellVie, Mitochondrion Therapeutics** — referenced in trade press; public clinical-stage data unavailable as of Q1 2026 (needs-verification on company-stage updates).

**Highest-priority recent finding:** **Lewis et al. 2024 in vivo ATP8 allotopic expression in mouse** (PMID 39659757) — first whole-organism demonstration of nuclear-encoded mtDNA-gene functional rescue.

**Notable gap:** No company has filed an IND for somatic mtDNA editing or allotopic expression in adults despite 20+ years of mechanistic work. mtDNA-editor delivery to relevant tissues at therapeutic efficiency remains unsolved.

### LysoSENS — current programs

**One Phase 1 trial active (Cyclarity); the rest preclinical.** The category has consolidated around two SRF spinouts: Cyclarity (atherosclerosis, 7-ketocholesterol) and Repair Biotechnologies (cholesterol-degrading platform).

- **Cyclarity Therapeutics UDP-003 cyclodextrin dimer (7-ketocholesterol cleavage)** — Phase 1 trial authorized December 2024; **first-in-human dosing January 2025 in Australia** (Stephen Nicholls, Victorian Heart Institute / Monash). SAD/MAD design plus 12-patient acute coronary syndrome cohort. Phase 1 readout expected 2026. **Atherosclerosis / heart attack risk reduction lead indication.** *Atherosclerosis* 2025 publication describes the underlying chemistry (10.1016/j.atherosclerosis.2025.S0021-9150(25)00538-6, needs-verification).
- **Repair Biotechnologies Cholesterol Degrading Platform (CDP) — REP-0003** — AHA Scientific Sessions November 2025: preclinical atherosclerotic plaque regression in *Ldlr-/-* mouse model, 6 weeks of treatment. Orphan Drug Designation for homozygous familial hypercholesterolemia. **REP-0004 GMP manufacture commenced; IND submission and first clinical trial planned early 2027.** Mechanistically distinct from but conceptually adjacent to LysoSENS engineered-enzyme approach.
- **Underdog Pharmaceuticals → Cyclarity rebrand 2022.** Underdog's lipofuscin/A2E program appears not to have advanced into a separate development track post-rename; A2E/AMD work has effectively paused.
- **Ichor Therapeutics LysoCLEAR (recombinant manganese peroxidase MnP for A2E in dry AMD/Stargardt)** — last published preclinical work 2018 (PMID 30516450). No 2024–2025 clinical milestones in public press; **appears stalled or paused.**
- **No active programs identified for 4Z Therapeutics or Lysocan in 2024–2026 public records.**

**Highest-priority recent finding:** **Cyclarity UDP-003 Phase 1 dosing (January 2025)** — first clinical entry of an engineered LysoSENS-class therapeutic against an aging-driver substrate (7-ketocholesterol).

**Notable gap:** No active program against neuronal lipofuscin (the original LysoSENS poster-child target) at clinical stage. AMD/Stargardt-A2E programs (LysoCLEAR) appear paused.

### AmyloSENS — current programs

**The most clinically successful SENS category, by approved-product count.** Six FDA-approved drugs across two indications (Alzheimer's, ATTR-CM); active anti-α-synuclein program advancing to Phase 3.

- **Lecanemab (Leqembi; Eisai/Biogen) — FDA approved July 2023.** Clarity AD: -27% slowing of CDR-SB at 18 months. **AAIC 2025: 4-year open-label extension data — 69% improving or maintaining cognitive/functional status; 36-month CDR-SB benefit sustained.** OLE published *Alzheimer's & Dementia* 2025 (10.1002/alz.70905; PMC12682705). ARIA-E 12.6% vs placebo 1.7%. See [[lecanemab]].
- **Donanemab (Kisunla; Eli Lilly) — FDA approved July 2024.** TRAILBLAZER-ALZ 2: -35% CDR-SB slowing in low/medium tau subgroup. **3-year extension (AAIC 2025): -1.2 CDR-SB points vs weighted ADNI control in early-start arm.** ARIA-E 24% vs placebo 1.9% — substantial safety signal. See [[donanemab]].
- **Aducanumab (Aduhelm; Biogen) — withdrawn January 2024**, full discontinuation November 2024. Notable historical failure for both the controversial accelerated-approval pathway and the broader anti-amyloid hypothesis when divorced from rigorous downstream cognitive evidence.
- **Acoramidis (Attruby; BridgeBio) — FDA approved November 22, 2024.** TTR stabilizer for ATTR-CM; ATTRibute-CM Phase 3 (n=632, mean age 77.6): **win ratio 1.8 (P<0.001); -42% composite mortality + cardiovascular hospitalization at 30 months.** Joins tafamidis and patisiran/vutrisiran in the amyloid-cardiomyopathy armamentarium. See [[acoramidis]].
- **Tafamidis (Vyndaqel/Vyndamax; Pfizer) — FDA approved 2019 for ATTR-CM.** TTR stabilizer; ATTR-ACT trial: -32% all-cause mortality at 30 months. The first oral disease-modifying ATTR-CM therapy. See [[tafamidis]].
- **Patisiran (Onpattro; Alnylam) — FDA approved 2018 for hATTR amyloidosis polyneuropathy.** RNAi therapeutic; LNP-delivered siRNA against hepatocyte TTR. Vutrisiran (Amvuttra; Alnylam) FDA-approved 2022 for hATTR polyneuropathy and 2024 for ATTR-CM (HELIOS-B trial). See [[patisiran]].
- **Prasinezumab (Roche/Prothena) anti-α-synuclein** — PADOVA Phase 2b (n=586): missed primary endpoint time-to-motor-progression (HR 0.84, p=0.0657). Levodopa-treated subgroup HR 0.79, nominal p=0.043. **Roche advanced to Phase 3 in June 2025** based on multiple secondary/exploratory signals plus ongoing PASADENA OLE.
- **Cinpanemab (Biogen) — failed.** Phase 2 SPARK in Parkinson's missed endpoints (2021). Discontinued.
- **UCB0107/minzasolmin (UCB) anti-α-synuclein** — Phase 2 ORCHESTRA in early Parkinson's; readout 2024–2025 mixed (needs-verification).
- **Etalanetug (E2814; Eisai) anti-MTBR-tau** — CTAD 2024 + 2025: **-50%/-75%/-89% CSF MTBR-tau243 reduction at 3/9 months**; tau-PET stabilization. **Phase 2 Study 202 initiated September 2024 with lecanemab as backbone.** Specific bet on anti-amyloid + anti-tau combination as the path forward.
- **BIIB080 (Biogen, MAPT antisense oligonucleotide)** — Phase 1b dose-dependent CSF total/p-tau and aggregated tau-PET reduction (n=46). **Phase 2 CELIA fully enrolled; readout expected 2026.** FDA Fast Track granted 2024.
- **Anti-tau antibodies that failed.** Gosuranemab (Biogen, anti-N-terminal tau, failed Phase 2 in PSP and Alzheimer's, 2020–2021); zagotenemab (Lilly, similar fate); semorinemab (Genentech) showed mixed late Phase 2 results. **Pattern: N-terminal tau antibodies have failed; MTBR-targeting antibodies (E2814) showing biomarker traction.**
- **Anti-IAPP (islet amyloid) human antibody m81** (*Nature Communications* 2023, PMID 37793976, needs-verification) — selective for IAPP oligomers/fibrils, protected β-cells in transgenic mouse and human-islet xenograft T2D models. **No clinical trial registered as of Q1 2026.**

**Highest-priority recent finding:** Acoramidis FDA approval (November 2024) — adds a third TTR-targeted amyloidosis therapeutic and demonstrates near-complete (≥90%) TTR stabilization is achievable orally with mortality benefit.

**Substantive supersession candidate — Cochrane 2026 meta-analysis (Nonino et al., PMID 41985900, doi:10.1002/14651858.CD016297).** A Cochrane systematic review of 17 RCTs covering 7 anti-Aβ antibodies (n=20,342) concluded that effects on cognition are **"trivial"** and effects on dementia severity are **"little to no meaningful difference"** despite statistical significance in individual trials. **This finding is substantively discordant with the FDA-approval narrative for lecanemab and donanemab.** The discordance does not invalidate the AmyloSENS framework — it qualifies the *clinical translation* claim: anti-amyloid antibodies achieve mechanistic target engagement (amyloid clearance demonstrated) and statistical efficacy in primary endpoints (CDR-SB slowing significant), but the *clinical meaningfulness* of the effect is debated. The verified compound pages [[lecanemab]] and [[donanemab]] flag this with `#gap/contradictory-evidence` tags. **This is the central open question for the AmyloSENS class as of 2026:** is statistically-significant CDR-SB slowing a meaningful clinical benefit, or is the field optimizing on biomarkers that don't translate to patient-felt outcomes?

**Notable failures:** Aducanumab withdrawal (2024); cinpanemab; gosuranemab; zagotenemab. The anti-amyloid space has now generated as many high-profile failures as approvals — and the Cochrane 2026 meta-analysis raises the possibility that even the approvals may be over-claiming clinical benefit.

### GlycoSENS — current programs

**Slowest-translating SENS category alongside MitoSENS and OncoSENS.** No clinical-stage program against the canonical SENS target (glucosepane).

- **Revel Pharmaceuticals (Spiegel/Crawford labs, Yale) glucosepane breaker pipeline** — founded 2018 (San Francisco); built on Crawford's Yale group's first total synthesis of glucosepane (Draghici et al., *Science* 2015 — PMID 26472902 [verified]). Original strategy: functional metagenomics for soil-bacterial enzymes capable of degrading synthetic glucosepane. **2026-05-15 update: reproducibility setback** — per industry-watcher reporting (Fight Aging 2024 commenter update; corroborated by Longevity.Technology + Lifespan.io coverage), **the glucosepane-cleaving activity of the original Spiegel-lab enzyme candidates could not be reproduced**, prompting Revel to broaden scope to a "5 or 6 target" crosslink portfolio rather than glucosepane exclusively. **No IND filed; no clinical trial registered as of mid-2026; no peer-reviewed animal-efficacy paper has appeared.** Therapeutic indications proposed: skin aging, osteoarthritis, kidney disease, vascular stiffness, diabetic complications. See [[processes/glucosepane]] and [[advanced-glycation-end-products]] for full narrative. #gap/needs-primary-source-verification on the reproducibility-setback claim (blog-comment-sourced, not peer-reviewed).
- **Alagebrium (ALT-711, formerly Synvista)** — already-known failure: Phase 3 in **systolic** heart failure (BENEFICIAL, Hartog 2011 — *not* HFpEF, contrary to common framing) ended without clear benefit; commercial program shuttered ~2009. **The Yang 2003 mechanism critique** (*Arch Biochem Biophys* PMID:12646266) — AGE-breakers cleave model compounds but do NOT break Maillard crosslinks in real-tissue collagen from diabetic rats — is a load-bearing reason the entire α-dicarbonyl class may be doubly suspect: not just wrong-target (doesn't hit glucosepane) but possibly never cleaving any real-tissue crosslink. See [[processes/glucosepane]] and [[advanced-glycation-end-products]].
- **Aldehyde-trapping / glyoxal-scavenging programs** — pyridoxamine (vitamin B6 form) and aminoguanidine (failed Phase 3 in diabetic nephropathy in 1990s due to autoimmunity) are the legacy small-molecule arsenal. Pyridoxamine remains in nutritional/supplement use; no successful Phase 3 in an aging indication.
- **Benfotiamine (lipid-soluble thiamine analog) for diabetic complications** — Phase 2/early Phase 3 evidence for diabetic neuropathy and retinopathy; meta-analyses 2024–2025 mixed (needs-citation). Acts upstream by reducing glycation flux.
- **Glucosepane characterization advances** — comprehensive 2024 review in *Biophysical Reviews* (10.1007/s12551-024-01188-4) reaffirms glucosepane as the dominant mature AGE crosslink (10–1000× more abundant than other crosslinking AGEs in tissue, per review-synthesis figures — see [[processes/glucosepane]] for verifier-corrected primary-source caveats). 2025 review (PMC12024170) on AGE-targeting strategies for skin anti-aging summarizes synthetic + natural agents but no clinical breakthrough.

**Highest-priority recent finding:** Functional-metagenomics enzyme discovery (Revel, ~2023–2024) — represents the first credible glucosepane-degrading biocatalyst pipeline since the Yale group's 2015 synthesis. Awaiting peer-reviewed primary publication and IND-enabling work.

**Notable failures:** Alagebrium (ALT-711) — Phase 3 program shuttered; aminoguanidine (autoimmune toxicity in DKD Phase 3). Together these established that broad-spectrum AGE-breakers are difficult to translate.

---

## Cross-cutting observations (2026-05-09)

**Overall translation pattern.** Three SENS categories have produced FDA-approved products or imminent regulatory filings (RepleniSENS, ApoptoSENS partial, AmyloSENS). Two are at Phase 1 first-in-human (LysoSENS via Cyclarity UDP-003; possibly ApoptoSENS via DT2216/RLS-1496). Two remain mechanistic-only (MitoSENS, GlycoSENS) and one (OncoSENS-WILT) remains conceptual.

**Organizational restructuring.** SENS Research Foundation severed ties with Aubrey de Grey in 2021; de Grey founded LEV Foundation in 2022, which now runs the *Robust Mouse Rejuvenation* (RMR) studies. **RMR1** (2023–early 2025; n=1000 mice; rapamycin + young-HSCs + TERT gene therapy + senolytic combinations) showed combination > single-intervention benefit and rectangularization of survival curves. RMR2 pilot underway 2025. The XPRIZE Healthspan ($101M, deadline 2030) launched 2024 and now has >100 competing teams. See [[hypotheses/longevity-escape-velocity]] (verified) for the LEV-Foundation strategic frame.

**Key 2025-2026 readouts to watch.** UDP-003 Phase 1 (Cyclarity, atherosclerosis); BIIB080 CELIA Phase 2 (Biogen, tau ASO); ASP7317 Phase 1b (Astellas, AMD); LyGenesis Phase 2a interim (liver organoids); E2814 Study 202 (lecanemab + tau combination); RLS-1496 systemic Phase 1 (Rubedo); zimislecel pivotal continuation (Vertex); raguneprocel JP MAA decision (Sumitomo).

**The framework's predictive track record.** When SENS was formulated in 2002, the consensus among biogerontologists (per [[hypotheses/longevity-escape-velocity]]) was that the proposed strategies were "fantasy." Twenty-four years later, three of the seven categories have produced FDA-approved aging-relevant interventions (lecanemab/donanemab/acoramidis for AmyloSENS; UBX1325 reaching Phase 2 efficacy for ApoptoSENS; multiple Phase 3 cell therapies for RepleniSENS). The remaining four categories are consistent with the original timeline projections (decades-scale translation) rather than falsified. **Whether SENS will succeed at the integrative level — whether combining the seven repair strategies produces engineered negligible senescence — remains the open question** addressed by [[frameworks/engineered-negligible-senescence]] and the LEV Foundation RMR program.

---

## Criticism and updates

The framework was dismissed as "fantasy" by major aging researchers when first proposed (notably the Warner et al. 2005 *EMBO Reports* critique signed by 28 biogerontologists; see [[hypotheses/longevity-escape-velocity]] for the detailed critique inventory). By the mid-2010s, multiple SENS-aligned biotech spinouts (Cyclarity Therapeutics — formerly Underdog Pharmaceuticals; Repair Biotechnologies; Revel Pharmaceuticals; OncoSenX) and parallel academic progress on senolytics shifted the consensus toward partial vindication of the damage-repair framing. As of 2026, the AmyloSENS approvals (lecanemab, donanemab, acoramidis) constitute the strongest single-category evidence that damage-repair-class interventions can reach FDA endpoints; the broader question of whether the *combination* extends healthspan/lifespan in humans is what RMR is designed to test in mice as a proof-of-concept.

**Persistent critique:** Whether all seven categories are exhaustive (the original claim) remains contested. **Epigenetic alterations** (López-Otín hallmark, addressed by partial reprogramming / OSK; see [[interventions/stem-cell-therapy/in-vivo-partial-reprogramming-therapy]]) and **chronic inflammation** (López-Otín hallmark) are obvious additions not captured by the seven SENS categories. The seven-category taxonomy is a useful organizing schema but should not be treated as biology's full damage-class inventory. #gap/contradictory-evidence

---

## See also

- [[hallmarks-of-aging]] — the complementary academic framework (López-Otín 2013/2023)
- [[frameworks/engineered-negligible-senescence]] — the wiki-internal MOC for the full-arrest analysis (R34/R36 seeded)
- [[frameworks/cancer-aging-tradeoffs]] — the cell-autonomous-tumor-suppression framework (R36 seeded)
- [[frameworks/hallmark-causality-graph]] — proximal damage / intermediate / integrative tier ordering
- [[hypotheses/longevity-escape-velocity]] — de Grey's strategic prediction (R36 seeded, verified)
- [[hypotheses/negligible-senescence]] — Finch 1990 natural negligible senescence (verified)
- [[interventions/]] — by intervention type
