---
type: compound
aliases: [SS-31, MTP-131, Bendavia, D-Arg-Dmt-Lys-Phe-NH2, Szeto-Schiller peptide 31]
pubchem-cid: 11764719
chembl-id: CHEMBL3833370
drugbank-id: null
biologic: true
who-inn: elamipretide
molecular-formula: C32H49N9O5
molecular-weight-da: 639.8
mechanisms: [cardiolipin-stabilizer, antioxidant]
targets: ["[[cardiolipin]]", "[[cytochrome-c]]"]
hallmarks: ["[[mitochondrial-dysfunction]]"]
clinical-stage: fda-approved
human-evidence-level: limited
translation-gap: translation-blocked-efficacy
next-experiment: "Adequately powered Phase 2/3 RCT in a well-defined aging cohort (e.g., older adults with HFpEF or sarcopenia) using a hard primary endpoint (6MWT, peak VO2, or composite cardiovascular event) and subcutaneous dosing; n ≥ 200 with 12+ month follow-up."
clinical-trials-active: 2
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Szeto 2014 (BJP review), Thompson 2021 (Genet Med RCT), and Mitchell 2022 (eLife SAR) verified against primary source PDFs. Marcinek 2019 (Free Rad Biol Med) and Sabbah 2016 (Circ HF) are green-OA but failed DOI lookup (both retried; no candidate URLs found); claims attributed to these sources are flagged #gap/unverified-archive-failure. López-Otín 2023 is closed-access; claims attributed to it carry #gap/no-fulltext-access. PubChem CID 11764719 confirmed via REST API (C32H49N9O5, MW 639.8). ClinicalTrials.gov active count re-confirmed at 2 (NCT07275424 RECRUITING + NCT06373731 ACTIVE_NOT_RECRUITING) as of 2026-05-08. R34 backfill 2026-05-08: PubMed-recency search added Shirley 2026 (10.1007/s40265-025-02269-8 *Drugs* First Approval — FDA accelerated approval Sep 19, 2025 for Barth syndrome; trade name Forzinity), Zhao/Gao 2026 (10.5582/ddt.2025.01111 commentary), Schauer 2026 (10.3390/ijms27021060 rat HFpEF — bioenergetics improved without functional benefit), Xiong 2026 (10.1186/s13048-026-01975-5 SS-31 maternal-aged oocyte improvement) — abstracts verified via PubMed efetch only; full PDFs not fetched. clinical-stage upgraded from phase-3 → fda-approved (Barth-syndrome indication only; aging indication remains Phase 2a recruiting). human-evidence-level upgraded from limited-negative → limited (the FDA approval was based on the OLE-secondary improvements not the failed primary, but the open-label setup remains the active justification — appropriate to drop the negative qualifier while retaining limited)."
literature-checked-through: 2026-05-08
---

# Elamipretide (SS-31)

A synthetic tetrapeptide (D-Arg-2',6'-dimethylTyr-Lys-Phe-NH₂) that selectively accumulates at the inner mitochondrial membrane (IMM) via electrostatic attraction to the anionic phospholipid [[cardiolipin]]. It is the first-in-class **cardiolipin-stabilizing** compound: it binds and protects cardiolipin from oxidative peroxidation, preserves IMM curvature (cristae architecture), and improves electron transport chain (ETC) coupling efficiency. Named by inventors Hazel Szeto and Peter Schiller. Has advanced through Phase 2/3 trials in several mitochondrial-disease indications with a mixed clinical record: strong preclinical rationale but failed primary endpoints in most completed double-blind human trials, with positive open-label-extension data driving regulatory consideration.

**FDA approval status (R34 backfill, 2026-05-08):** On **September 19, 2025**, the U.S. FDA granted **accelerated approval** to elamipretide (trade name **Forzinity™**, Stealth BioTherapeutics) for "improving muscle strength in adult and pediatric patients with Barth syndrome weighing ≥30 kg." This makes elamipretide **the first disease-specific therapy approved for Barth syndrome** and the first cardiolipin-directed mitochondrial therapeutic. The approval was based primarily on the open-label-extension (OLE) data from TAZPOWER showing sustained 168-week 6MWT and HHD improvements — **not** the double-blind primary endpoint, which it failed [^shirley2026] [^zhao2026]. A confirmatory trial is required as a condition of accelerated approval. The aging-indication trial NCT07275424 (Phase 2a) remains in recruitment with no results yet.

## Identity

| Field | Value |
|---|---|
| PubChem CID | 11764719 |
| ChEMBL ID | CHEMBL3833370 |
| WHO-INN | elamipretide |
| Trade name (investigational) | Bendavia (cardiac ischemia), MTP-131 |
| Sequence | D-Arg–2′,6′-dimethylTyr–Lys–Phe–NH₂ |
| Molecular formula | C32H49N9O5 |
| Molecular weight | 639.8 Da |
| Route (clinical) | Subcutaneous injection (topical ophthalmic solution for eye indications) |
| Charge | +3 at physiological pH (two basic groups on D-Arg + ε-amino of Lys) |

**Note on PubChem CID:** Elamipretide is a biologic/peptide therapeutic. Confirmed CID is 11764719 by name lookup; this entry carries the correct C32H49N9O5 formula and MW 639.8 consistent with the published sequence.

## Mechanism of action

### Cardiolipin binding and cristae stabilization

Elamipretide's positive charge (+3 net at physiological pH) drives electrostatic accumulation at the IMM, which is highly enriched in cardiolipin (CL) — an anionic dimeric phospholipid unique to mitochondria [^szeto2014]. The aromatic 2′,6′-dimethylTyr (Dmt) residue intercalates into CL's hydrophobic acyl chains via hydrophobic interaction. This dual (electrostatic + hydrophobic) anchoring positions elamipretide at the CL headgroup-acyl chain interface [^mitchell2022]. (The oft-cited ~20% IMM lipid fraction figure for CL is from the lipid composition literature; Szeto 2014 does not state this specific percentage — attribution removed pending a primary lipid-composition citation.) #gap/unsourced

The biological consequence is protection of CL from cytochrome c-catalysed peroxidation. In healthy mitochondria, [[cytochrome-c]] is loosely associated with CL at the IMM; in the presence of ROS or membrane stress, cytochrome c switches to a peroxidase mode that oxidises CL acyl chains [^szeto2014]. Oxidised CL (oxCL) loses its ability to maintain cristae curvature and the organised stacking of ETC supercomplexes, reducing respiratory efficiency. Elamipretide competes with cytochrome c for the CL binding site, suppressing CL peroxidation, maintaining cristae architecture, and restoring supercomplex organisation [^szeto2014].

### ETC efficiency and ROS leak

By preserving the CL–ETC supercomplex interface, elamipretide reduces electron leak at Complex I and III — the primary mitochondrial sources of superoxide [^szeto2014]. It thereby acts as an **antioxidant** indirectly (reducing ROS production at source) rather than by direct ROS scavenging, though the Dmt residue has modest electron-donating capacity [^szeto2014].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — CL is universal in eukaryotic IMM; cytochrome c–CL interaction is conserved |
| Phenotype conserved in humans? | yes — CL oxidation has been documented in aging human cardiac and skeletal muscle tissue |
| Replicated in humans? | in-progress (conflicted) — human mechanistic studies supportive; hard clinical endpoints mixed |

## Aging biology: the cardiolipin–aging axis

Cardiolipin content and acyl-chain composition change with aging. In aged rodent heart and skeletal muscle, total CL decreases by 20–40%, and the proportion of tetralinoleoyl-CL (the dominant species in heart) falls, replaced by oxidised and remodelled forms. These changes correlate with reduced ETC supercomplex stability, increased Complex I and IV electron leak, and impaired ATP synthesis efficiency [^marcinek2019]. Comparable CL remodelling has been documented in human aging cardiac tissue #gap/needs-replication.

Elamipretide was shown to reverse age-related redox stress and improve exercise tolerance in 24-month-old C57BL/6 mice at 3 mg/kg/day subcutaneous (28-day treatment): hydrogen peroxide emission from isolated skeletal muscle mitochondria was reduced by ~40% and in situ maximal contractile work was restored to levels comparable with young mice [^marcinek2019]. #gap/needs-human-replication #gap/unverified-archive-failure — Marcinek 2019 PDF not available in archive (green OA, download failed; could not cross-check quantitative values against source)

## Effects on aging hallmarks

| Hallmark | Claimed effect | Evidence tier | Notes |
|---|---|---|---|
| [[mitochondrial-dysfunction]] | Restores CL integrity, reduces ROS leak, improves ETC coupling efficiency | Preclinical strong; human mechanistic supportive; hard endpoints mixed | Primary mechanism page |
| [[sarcopenia]] | Improved skeletal muscle contractile performance in aged mice | Preclinical (mouse) only | #gap/needs-human-replication |
| [[heart-failure]] | LV ejection fraction improvement in dog HF model; mixed Phase 2 RCT results | Dog in-vivo + Phase 2 human | Translation gap confirmed |

## Pharmacokinetics

- **Route:** subcutaneous injection is the validated delivery route for systemic distribution; oral bioavailability is very low (poor GI absorption of charged peptide) [^szeto2014].
- **Distribution:** rapid uptake into tissues with high mitochondrial density (heart, skeletal muscle, kidney, brain). IMM accumulation is driven by membrane potential (~180 mV); does not require a transporter. Concentration in IMM estimated to exceed plasma concentration by ~1000-fold.
- **Half-life (plasma):** short; specific PK values vary by species and dose. Human single-dose Phase 1 data (NCT01115920 / NCT02436447) show rapid distribution; terminal half-life order of hours. #gap/dose-response-unclear — precise human PK parameters not published in the open literature.
- **No CYP metabolism** expected (peptide substrate; cleared by proteolysis + renal excretion).

## Clinical record

### TAZPOWER — Barth syndrome (Phase 2/3; NCT03098797)

Barth syndrome is a rare X-linked cardiomyopathy caused by loss-of-function mutations in *tafazzin* (TAZ), the enzyme that matures cardiolipin. It provides a near-ideal genetic proof-of-concept population because the primary defect is CL remodelling — the exact target of elamipretide [^thompson2021].

The TAZPOWER trial randomised 12 males with Barth syndrome (mean age 19.5 years, range 12–35; all male) to **12 weeks** of elamipretide 40 mg/day SC versus placebo in a crossover design (1:1, separated by a 4-week washout), followed by an open-label extension (Part 2) of 40 mg/day for a total of 36 additional weeks [^thompson2021]. The open-label extension is ongoing to 168 weeks per the protocol, but the published results cover through week 36 of Part 2.

**Primary endpoints (12-week double-blind phase):** Two co-primary endpoints — 6-minute walk test (6MWT) and Barth Syndrome Symptom Assessment (BTHS-SA) total fatigue score. **Neither was met:** 6MWT change vs. placebo was −0.8 m (p=0.97); BTHS-SA change was +0.06 points (p=0.89). No secondary endpoints showed significant differences in the double-blind phase either [^thompson2021].

**Open-label extension (Part 2) results at 36 weeks (n=8 completers):** 6MWT improved by +95.9 m from baseline (25%, p=0.024); BTHS-SA improved by −2.1 points (26%, p=0.031); knee extensor strength by HHD improved by +56.0 newtons (42%, p=0.001). Cardiac stroke volume also increased (16% improvement in LV stroke volume indexed to BSA). Two of 10 Part 2 participants discontinued due to injection site reactions [^thompson2021].

N=12 in Part 1 (8 completers in Part 2) is very small; interpretation is limited. The open-label Part 2 improvements lack a placebo control — placebo effect cannot be excluded [^thompson2021].

**Design note:** n=12 crossover (planned sample size for ~80% power to detect 50 m on 6MWT or 1.3 points on BTHS-SA per the protocol). Primary endpoint miss in the double-blind phase may reflect inadequate power rather than lack of efficacy, particularly given the positive open-label extension signals. #gap/needs-replication

### MMPOWER-3 — primary mitochondrial myopathy (Phase 3; NCT05162768; completed)

Phase 3 trial in subjects with primary mitochondrial disease from nuclear DNA mutations. Status: completed. Primary results had not been published in peer-reviewed form as of the knowledge cutoff (2025-08); consult ClinicalTrials.gov NCT05162768 for posted results. #gap/unsourced

### PROGRESS-HF — heart failure with reduced ejection fraction (Phase 2)

Note: The DOI 10.1002/ejhf.876 cited in some summaries of PROGRESS-HF was found to resolve to an ivabradine paper in the academic archive — that DOI is dropped here. The Sabbah 2016 Circulation Heart Failure paper (10.1161/circheartfailure.115.002206) is attributed to preclinical cardiac outcomes in a dog pacing-induced HF model, not PROGRESS-HF [^sabbah2016]. #gap/unsourced for PROGRESS-HF human primary outcome data. #gap/unverified-archive-failure — Sabbah 2016 PDF not available in archive (green OA, download failed; could not cross-check claims against source)

### ReNEW — dry age-related macular degeneration (Phase 3; NCT06373731)

Active (not recruiting) as of 2026-05-06. Phase 3 study of subcutaneous elamipretide in dry AMD with non-central geographic atrophy. Dry AMD involves impaired mitochondrial function in retinal pigment epithelium — mechanistically plausible target for elamipretide. Results pending.

### Healthy Aging & Physical Function (Phase 2a; NCT07275424; RECRUITING)

Explicitly aging-focused trial. Recruiting as of 2026-05-06. Phase 2a. No results available.

### Summary of human evidence

| Trial | Indication | Phase | N | Primary endpoint | Result |
|---|---|---|---|---|---|
| TAZPOWER (NCT03098797) | Barth syndrome (genetic CL deficiency) | 2/3 | 12 (Part 1); 8 completers (Part 2 OLE) | 6MWT + BTHS-SA total fatigue (co-primary) | Not met (double-blind, 12 wk); OLE (36 wk, uncontrolled): 6MWT +95.9 m p=0.024, HHD +56.0 N p=0.001 |
| NCT05162768 | Primary mitochondrial myopathy (nDNA mutations) | 3 | unknown | tbd | Completed; results pending |
| NCT02814097 | HFrEF (stable) | 2 | unknown | LV function | Results pending/mixed |
| ReNEW (NCT06373731) | Dry AMD | 3 | unknown | tbd | Active; results pending |
| NCT07275424 | Healthy aging + physical function | 2a | unknown | Physical function | Recruiting |

**Assessment:** Multiple Phase 2/3 trials have been completed with either missed primary endpoints or results not yet published. The strongest genetic proof-of-concept (TAZPOWER) achieved secondary but not primary endpoint at very small n — yet the OLE-driven sustained-improvement signal at 168 weeks was sufficient for FDA accelerated approval (Sep 19, 2025). Human translation for non-Barth indications (HFpEF, dry AMD, sarcopenia, healthy aging) remains unproven at the level of hard clinical endpoints. Preclinical evidence in animal models is mechanistically strong and internally consistent. As of 2026-05-08, `human-evidence-level: limited` (upgraded from `limited-negative`) reflects the regulatory acceptance for one rare-disease indication; the negative-evidence signal applies to non-Barth indications and is captured in the `translation-blocked-efficacy` translation-gap field.

### 2024–2026 mechanistic / preclinical updates

- **Schauer 2026, *Int J Mol Sci* (rat HFpEF model)** [^schauer2026]: Female obese ZSF1 rats received vehicle or elamipretide for 12 weeks. Elamipretide modestly improved Complex I and II respiration (consistent with Szeto 2014 mechanism), but mitochondrial ultrastructure, cardiolipin composition, tafazzin expression, diastolic function (E/é, β-stiffness, titin phosphorylation), LV ejection fraction, hypertrophy, fibrosis, and inflammatory markers were all unchanged or slightly worse vs. untreated HFpEF. **Authors' conclusion: "no functional or structural benefits were observed in experimental HFpEF, suggesting limited therapeutic efficacy once HFpEF is established."** This adds preclinical-rodent evidence to the human PROGRESS-HF / heart-failure trial null pattern — the bioenergetic-without-function disconnect appears in both species.
- **Xiong 2026, *J Ovarian Res* (mouse aged oocyte model)** [^xiong2026]: SS-31 supplementation restored spindle/chromosome architecture, ΔΨm, mitophagy, and reduced aneuploidy + ROS + DNA damage in maternally-aged mouse oocytes. Mechanism via Pink1, Rps27a, Tomm7, Map1lc3b transcript induction; SS-31 also raised spermidine + GSH levels in single-cell metabolomics. Reproductive-aging indication is novel for SS-31 and a candidate aging-relevant phenotype, but no human translation. Preclinical mouse only.

## Comparison with other mitochondria-targeted antioxidants

Elamipretide differs from mitochondria-targeted antioxidants like MitoQ (mitoquinone) and SkQ1 in mechanism: those compounds act as redox-cycling electron sinks within the IMM to quench superoxide, whereas elamipretide acts upstream by preventing ROS production through CL stabilisation. The structure-activity study by Mitchell et al. (2022) compared SS-31 against three structural analogs and demonstrated that **side chain composition and sequence register** — particularly aromatic side chain identity and the presence of polar groups — modulate membrane electrostatic surface potential (ψs) and determine cell-protective potency under serum-deprivation stress; the tryptophan-containing analog SPN10 outperformed SS-31 in membrane potential restoration and cell viability [^mitchell2022]. No peptide in the study depolarised the IMM, supporting the safety profile of this class. #gap/needs-replication — direct head-to-head comparisons with MitoQ in the same aging model are not yet published.

## Limitations and knowledge gaps

- **Small-n trials dominate.** TAZPOWER n=12, several Phase 2 HF trials estimated n≈20–60. Underpowering is a plausible alternative explanation for primary endpoint misses.
- **Indication heterogeneity.** Trials span rare genetic disease (Barth, PMM), common cardiopulmonary disease (HF, AMD), and now normal aging (NCT07275424). Results from one population may not generalise to others.
- **No validated biomarker of target engagement.** No clinically applicable assay measures CL oxidation state or ETC supercomplex assembly in patients, making it impossible to confirm drug reaching target at therapeutic concentrations in humans. #gap/no-mechanism
- **PK data gap.** Published human PK data are limited; optimal dose, dosing interval, and exposure-response relationships are unclear. #gap/dose-response-unclear
- **Aging-specific human data entirely absent.** All completed Phase 2/3 trials enrolled disease populations, not otherwise-healthy older adults. NCT07275424 (aging cohort) is recruiting; no results yet. #gap/needs-human-replication
- **PROGRESS-HF primary results citation gap.** The frequently cited PROGRESS-HF DOI (10.1002/ejhf.876) does not resolve to the correct paper in this wiki's archive; original results should be verified before citing. #gap/doi-unconfirmed
- **Long-term safety.** Open-label extension of TAZPOWER (168 weeks) provides the longest human safety data; subcutaneous site reactions documented. Systemic long-term safety in older adults is unknown. #gap/long-term-unknown

## Classification

- **SENS strategy:** [[mitochondrial-dysfunction]] → MitoSENS (mitochondrial functional restoration)
- **Intervention class page:** None yet — elamipretide is the canonical first compound in the `cardiolipin-stabilizer` class (listed as roadmap entry in [[frameworks/intervention-classes]])
- **López-Otín 2023 relevance:** cited as representative mito-targeted peptide in the [[mitochondrial-dysfunction]] hallmark discussion [^lopezotin2023]

## Cross-references

- [[mitochondrial-dysfunction]] — primary hallmark page; elamipretide mechanism anchors here
- [[cardiolipin]] — molecular target (implicit stub — no page yet) #stub
- [[cytochrome-c]] — interacting protein at IMM; CL–cyt-c peroxidase switching is the proximal mechanism
- [[reactive-oxygen-species]] — downstream consequence elamipretide reduces
- [[heart-failure]] — primary non-aging clinical indication
- [[sarcopenia]] — aging phenotype with plausible benefit (preclinical only)
- [[mitochondrial-myopathy]] — orphan disease indication (implicit stub — no page yet) #stub

## Footnotes

[^szeto2014]: doi:10.1111/bph.12461 · Szeto HH · *British Journal of Pharmacology* 2014 · review + mechanistic · model: multiple in-vitro + in-vivo rodent models (rat/mouse cardiac, skeletal muscle, renal, CNS); dog heart failure; summarises preclinical evidence for SS-31 across disease models · archive: local PDF available (OA bronze)

[^thompson2021]: doi:10.1038/s41436-020-01006-8 · Thompson WR, Hornby B, Manuel R, Bradley E, Laux J, Carr J, Vernon HJ · *Genetics in Medicine* 2021 · n=12 (crossover RCT, Part 1) + 36-wk open-label extension (Part 2, n=10 continuing; 8 completers at wk 36) · rct · model: Barth syndrome patients (male, mean age 19.5 yr, range 12–35) · both co-primary endpoints (6MWT, BTHS-SA) not met in double-blind phase (p=0.97, p=0.89); OLE showed significant 6MWT (+95.9 m, p=0.024), BTHS-SA (−2.1 pts, p=0.031), HHD (+56.0 N, p=0.001) improvements · archive: local PDF available

[^marcinek2019]: doi:10.1016/j.freeradbiomed.2018.12.031 · Marcinek DJ et al. · *Free Radical Biology and Medicine* 2019 · n=~10–12/group (aged mice, unverified — PDF not available) · in-vivo · model: 24-month C57BL/6 mice, 3 mg/kg/day SC × 28 days · archive: green OA, download failed (no candidate URLs in PMC lookup); quantitative values (n, H₂O₂ % reduction, p-values) NOT verified against source PDF — treat as unconfirmed #gap/unverified-archive-failure

[^sabbah2016]: doi:10.1161/circheartfailure.115.002206 · Sabbah HN et al. · *Circulation: Heart Failure* 2016 · in-vivo · model: dog pacing-induced HF (attributed) · archive: green OA, download failed (no candidate URLs); claims attributed to this paper NOT verified against source PDF #gap/unverified-archive-failure

[^mitchell2022]: doi:10.7554/eLife.75531 · Mitchell W, Tamucci JD, Ng EL, Liu S, Birk AV, Szeto HH, May ER, Alexandrescu AT, Alder NN · *eLife* 2022 · in-vitro (ITC, NMR, cell culture) + in-silico (MD simulations) · structure-activity analysis of SS-31 vs. three tetrapeptide analogs (SS-20, SPN4, SPN10); key finding: side chain composition modulates membrane electrostatic surface potential (ψs) and cell-protective potency under stress; SPN10 (tryptophan-containing) most potent; no peptide depolarized IMM · model: HK-2 and ARPE-19 human cell lines (serum deprivation stress) · archive: local PDF available (OA gold)

[^lopezotin2023]: doi:10.1016/j.cell.2022.11.001 · López-Otín C et al. · *Cell* 2023 · review · Hallmarks of Aging (expanded 12-hallmark framework); elamipretide cited as mito-targeted intervention candidate · archive: closed access (not_oa) — cannot verify citation context against source PDF #gap/no-fulltext-access

[^shirley2026]: doi:10.1007/s40265-025-02269-8 · Shirley M · *Drugs* 2026;86(3):377–383 · "Elamipretide: First Approval" milestone review · FDA accelerated approval Sep 19, 2025 for Barth syndrome (≥30 kg, adult + pediatric, muscle strength); trade name **Forzinity™**; first disease-specific BTHS therapy + first cardiolipin-directed mitochondrial therapeutic; Phase 3 development continues for dry AMD + mitochondrial myopathies · PMID 41335372 · abstract verified via PubMed efetch 2026-05-08

[^zhao2026]: doi:10.5582/ddt.2025.01111 · Zhao C, Zhuang X, Gao J · *Drug Discov Ther* 2026;19(6):435–436 · commentary on Sep 2025 FDA accelerated approval; confirms approval based on TAZPOWER OLE 168-week sustained benefit despite missed double-blind primary endpoint; common AE = mild injection-site reactions; confirmatory trial required · PMID 41260682 · abstract verified via PubMed efetch 2026-05-08

[^schauer2026]: doi:10.3390/ijms27021060 · Schauer A, Jahn D, Vahle B, Barthel P, Männel A, Fabig G, Linke A, Adams V, Augstein A · *Int J Mol Sci* 2026;27(2):1060 · Heart Center Dresden · Female obese ZSF1 rat HFpEF model + age-matched lean controls; 12 wk Ela vs vehicle · improved Complex I/II respiration but unchanged mitochondrial ultrastructure, cardiolipin composition, tafazzin, diastolic function, LV EF (slight decline), hypertrophy/fibrosis/inflammation; conclusion: "no functional or structural benefits... once HFpEF is established" · gold OA · PMID 41596703 · abstract verified via PubMed efetch 2026-05-08

[^xiong2026]: doi:10.1186/s13048-026-01975-5 · Xiong D, Zhang Y, Wei J, Wang L, Zhang G, Yu L, Zeng J, Liu W · *J Ovarian Res* 2026;19(1):78 · Sichuan Provincial Women's Hospital · maternally-aged mouse oocyte model + IVM; SS-31 restored spindle/chromosome structure, ΔΨm, mitophagy, fertilization ability; reduced aneuploidy, ROS, DNA damage; mechanism via Pink1/Rps27a/Tomm7/Map1lc3b transcript induction + spermidine + GSH metabolite increases (single-cell transcriptome + metabolomics) · gold OA · PMID 41612464 · abstract verified via PubMed efetch 2026-05-08
