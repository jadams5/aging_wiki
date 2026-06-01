---
type: compound
aliases: [MT-II, MT2, melanocortin agonist, "Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-NH2", cyclic melanotropic peptide]
pubchem-cid: 92432
chembl-id: CHEMBL430239
drugbank-id: null
who-inn: null
biologic: true
molecular-formula: C50H69N15O9
molecular-weight-da: 1024.2
mechanisms: [melanocortin-receptor-agonism, melanogenesis-induction, appetite-suppression]
targets: ["[[mc1r]]", "[[mc3r]]", "[[mc4r]]", "[[mc5r]]"]
hallmarks: []
clinical-stage: preclinical
human-evidence-level: limited
translation-gap: translation-blocked-safety
next-experiment: "Adequately powered prospective cohort study (n ≥ 500 users, 5+ yr follow-up) with melanoma incidence as primary endpoint and objective UV-exposure measurement (UV dosimeter) to separate direct MC1R-agonist tumorigenicity from UV-seeking behavioural co-variate; current evidence base is exclusively retrospective case-series."
clinical-trials-active: 1
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Mallory 2021 verified against full PDF (gold OA). Dorr 1996, Habbema 2017, Burian/Jemec 2019, Gilhooley 2021, Breindahl 2015 are closed-access (not_oa); verified via Crossref metadata and PubMed abstracts only — full-text quantitative cross-check not possible for those sources. PubChem CID 92432 identity fields (formula, MW, InChIKey) independently confirmed via PubChem REST API. ChEMBL ID CHEMBL430239 resolved via PubChem cross-reference. NCT07437560 confirmed RECRUITING via ClinicalTrials.gov v2 API. 2021 melanoma review not located (see body); #gap/unsourced maintained."
---

# Melanotan II

Melanotan II (MT-II) is a synthetic cyclic heptapeptide analogue of alpha-melanocyte-stimulating hormone (α-MSH). It activates melanocortin receptors — primarily MC1R in skin melanocytes and MC4R in the hypothalamus — producing UV-independent skin darkening, appetite suppression, and (at clinical doses) spontaneous penile erection. It was developed at the University of Arizona by the Hadley/Hruby group in the 1980s–1990s and reached Phase I clinical testing for cosmetic tanning. It is not approved anywhere. Clinuvel Pharmaceuticals abandoned cosmetic MT-II development in the 2000s, pivoting to the structurally related linear analogue Melanotan I (afamelanotide / Scenesse), which is FDA-approved for erythropoietic protoporphyria. MT-II remains unregulated and is widely sold illicitly for cosmetic tanning. It has no direct aging-hallmark evidence and no DrugAge entry as of 2026-05-09.

## Identity

- **PubChem CID:** 92432
- **ChEMBL ID:** CHEMBL430239 (resolved via PubChem CID 92432 cross-reference)
- **DrugBank ID:** not assigned (unapproved; illicit cosmetic use)
- **WHO-INN:** not assigned
- **InChIKey:** JDKLPDJLXHXHNV-MFVUMRCOSA-N (from PubChem)
- **Molecular formula:** C50H69N15O9
- **Molecular weight:** 1024.2 Da
- **Chemical class:** cyclic heptapeptide (synthetic α-MSH analogue)
- **Core sequence:** Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-NH2 — cyclized via lactam bond between Asp³ and Lys¹⁰

The cyclic constraint was introduced to improve receptor affinity and resistance to proteolytic degradation relative to linear α-MSH. The D-Phe residue at position 4 (vs. L-Phe in native α-MSH) further stabilises the pharmacophore conformation required for high-affinity melanocortin receptor binding.

## MT-I vs MT-II disambiguation

**This page covers Melanotan II (MT-II), the cyclic heptapeptide. Melanotan I (MT-I / afamelanotide / Scenesse) is a distinct linear peptide with a separate regulatory history.**

| Feature | Melanotan I (MT-I / afamelanotide) | Melanotan II (MT-II) |
|---|---|---|
| Structure | Linear 13-mer; [Nle4, D-Phe7]-α-MSH | Cyclic 7-mer lactam; Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-NH2 |
| Regulatory status | FDA-approved 2019 (Scenesse); EMA-approved 2014 | Not approved anywhere; illicit cosmetic use |
| Approved indication | Erythropoietic protoporphyria (EPP) — photoprotection | None |
| Developer | Clinuvel Pharmaceuticals | University of Arizona → Clinuvel (abandoned) |
| Selectivity | Relatively MC1R-selective | Non-selective: MC1R, MC3R, MC4R, MC5R |
| Erection side effect | Not reported at therapeutic doses | Prominent at Phase I doses (0.025 mg/kg SC) |
| Route (approved) | Subcutaneous implant (bioresorbable, 16 mg) | SC injection (illicit, unstandardised) |

**Conflation warning:** Published literature on "melanotan" and "melanotans" (plural) frequently fails to distinguish MT-I from MT-II. Case reports of adverse events attributed to "melanotan" may involve MT-II purchased illicitly (variable purity; see Breindahl 2015) [^breindahl2015]. When reading primary literature, always confirm which peptide form was studied.

## Mechanism of action

MT-II is a non-selective melanocortin receptor agonist. It activates class-A GPCRs (Gs-coupled) across multiple subtypes:

**MC1R (primary cosmetic target — skin melanocytes):**
MC1R activation → Gs → adenylyl cyclase → cAMP → PKA → CREB / MITF phosphorylation → transcriptional upregulation of melanogenic enzymes (tyrosinase, TYRP1, TYRP2) → eumelanin synthesis. Eumelanin is the UV-protective form of melanin (photoprotective brown-black pigment), as opposed to phaeomelanin (UV-sensitising red-yellow pigment). MC1R activation thus recapitulates the UV-tanning response's pigment-darkening component without the UV-induced DNA damage (CPDs, 6-4PPs) that normally triggers it [^hadley2006].

**MC4R (hypothalamus — appetite/energy):**
MC4R is the primary anorexigenic receptor in the hypothalamic melanocortin circuit. MC4R agonism reduces food intake and increases energy expenditure. At Phase I doses, MT-II produces mild appetite suppression [^dorr1996]. PT-141 (bremelanotide), a structurally related MT-II derivative, was later developed as an MC4R-preferring agonist for female hypoactive sexual desire disorder (FDA-approved 2019 as Vyleesi) — a reminder that MT-II's scaffold was pharmacologically productive, but required selectivity engineering.

**Sexual arousal (MC4R, central):**
At Phase I doses (0.025 mg/kg SC), MT-II produced spontaneous penile erections in 2 of 3 subjects (persisting 1–5 hours) [^dorr1996]. This was an incidental finding that later generated the bremelanotide/PT-141 development program for erectile dysfunction and HSDD, distinct from the cosmetic-tanning indication.

**MC3R, MC5R:**
MT-II binds MC3R (hypothalamic energy balance, less well characterised than MC4R) and MC5R (exocrine glands). Clinical consequences at cosmetic doses are not well characterised. #gap/no-mechanism

## Pharmacokinetics

**Route:** Subcutaneous injection (Phase I; illicit use). No approved oral form exists — melanocortin peptides are rapidly degraded in the GI tract.

**Stability advantage of cyclic structure:** The lactam bridge between Asp³ and Lys¹⁰ reduces proteolytic susceptibility and constrains the peptide backbone into the bioactive conformation. Half-life is substantially longer than for linear α-MSH (which has a plasma half-life of minutes). Formal PK data from the Dorr 1996 Phase I are not reported in the abstract; #gap/dose-response-unclear for MT-II human PK parameters.

**Product quality in illicit supply:** LC-MS/MS analysis of three illicit internet-sold MT-II vials found actual content of 4.3–8.8 mg per vial versus the 10 mg labelled dose, with unknown impurities at 4–6% [^breindahl2015]. This adulteration renders dose estimation impossible from illicit products.

## Clinical evidence

### Phase I tanning study (Dorr 1996) [^dorr1996]

The first and pivotal Phase I human study: 3 healthy adult male volunteers received MT-II subcutaneously at escalating doses (0.01–0.03 mg/kg) on alternating days over two weeks (5 total injections). Two subjects demonstrated visible increased skin pigmentation (face, upper body, buttocks). Spontaneous penile erections lasting 1–5 hours post-injection occurred in 2 of 3 subjects. Adverse effects included mild nausea and somnolence at higher doses. Authors concluded: "MT-II has tanning activity in humans given only 5 low doses" and recommended 0.025 mg/kg as the basis for further trials.

**Critical limitations:** n=3; all male; no placebo control; pilot study only. The tanning effect was subjectively assessed; the erection side-effect dominated subsequent development attention and diverted the program toward sexual dysfunction rather than cosmetic tanning.

Evidence quality:

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (MC1R melanocortin signalling is conserved) |
| Phenotype conserved? | yes (tanning confirmed) |
| Replicated in humans? | no independent replication in published form |

### Off-label and illicit use landscape

MT-II is sold globally as an unlicensed injectable peptide for cosmetic tanning, primarily via internet pharmacies. A qualitative study of online forums (n=205 user accounts; 623 discussion entries) documented that motivation for use included pre-holiday tanning and fitness-competition preparation, and that users routinely combined MT-II with sunbed sessions to amplify tanning [^gilhooley2021]. This co-use pattern is critical to interpreting the melanoma risk signal below.

### Active clinical trial

One recruiting trial (ClinicalTrials.gov, searched 2026-05-09): NCT07437560, Phase 2 — MT-II as adjunct to narrowband UVB phototherapy for repigmentation in stable nonsegmental vitiligo (not an aging or cosmetic-tanning indication). `clinical-trials-active: 1`.

## Safety and melanoma risk

### Adverse effects at Phase I doses

Reported in Dorr 1996 [^dorr1996]: mild nausea, somnolence, spontaneous penile erections. These are on-target pharmacological effects (MC4R: erections; MC4R/MC3R: CNS effects). Nausea is a class effect of systemic melanocortin agonism.

Additional case reports from illicit use: acute ischemic priapism (a urological emergency requiring surgical intervention) has been reported in three cases in the literature — Dreyer et al. 2019 (BMJ Case Reports), Nelson et al. 2012 (Clin Toxicol; concurrent with a pain pill, complicated by rhabdomyolysis), and the Mallory 2021 index case (55-year-old male, 2 mg SC, 30-hour priapism requiring operative penoscrotal decompression after phenylephrine failure; new erectile dysfunction at 15-week follow-up) [^mallory2021]. Cardiovascular effects (hypertension, tachycardia) at supraphysiological doses have been reported anecdotally in online communities; no systematic characterisation exists. #gap/long-term-unknown

### Melanoma and melanocytic naevi

**Eruptive melanocytic naevi (mole proliferation):** A systematic review of eruptive melanocytic nevi (Burian and Jemec 2019, n=multiple case series pooled) identified melanotan as a suspected trigger in 41% of cases [^burian2019]. Five associated melanoma cases were documented in that review, though the authors noted: "the nature of the data precluded assessment of risk of malignant transformation."

**Case reports of melanoma:** Habbema et al. 2017 (literature review, n=case reports) documented four reports of melanomas emerging from existing moles during or shortly after melanotan use [^habbema2017]. The review notes: "conclusive evidence linking these phenomena is lacking" and emphasises that melanotan use is embedded in UV-seeking behaviour (sunbed co-use), making causal attribution to the peptide itself vs. sunbed UV exposure impossible in retrospective case data.

**Attribution question:** The user-provided framing states "a 2021 review noted increased melanoma incidence among users, though authors attributed this to UV-seeking behavior rather than the peptide itself." The specific 2021 review with this exact framing was not identified in the literature search (searches for 2020–2023 reviews on melanotan + melanoma + UV-seeking returned no matching 2021 review paper). The Gilhooley 2021 qualitative user-experience study [^gilhooley2021] documented UV-seeking co-use patterns (sunbeds) but did not measure melanoma incidence. The closest matching source for the UV-attribution argument is Habbema 2017 [^habbema2017], which acknowledged the co-variate but stopped short of attribution. This attribution claim requires source confirmation by wiki-verifier. #gap/needs-replication

**Plausible biological mechanism for direct risk:** MC1R agonism theoretically could stimulate melanocyte proliferation independently of UV. MC1R signalling through MITF upregulates not only melanogenic enzymes but also survival factors. However, whether supraphysiological MC1R agonism is pro-tumorigenic in human melanocytes has not been tested in adequately powered studies. The existing evidence base is retrospective case-series and qualitative observation. #gap/no-mechanism

**Current evidence summary:** The melanoma signal is real in case reports and plausible mechanistically, but population-level incidence data with adequate UV-exposure adjustment do not exist. The translation-gap classification `translation-blocked-safety` reflects this uncertainty — the safety profile cannot be characterised without prospective data.

## Regulatory history

| Event | Year | Notes |
|---|---|---|
| MT-II synthesis / first characterisation | ~1985–1991 | Hadley and Hruby group, University of Arizona; Levine N, Dorr RT et al. |
| Phase I tanning pilot (Dorr et al.) | 1996 | n=3; established proof-of-concept; erection side effect flagged |
| Clinuvel begins clinical development of MT-I (afamelanotide) | early 2000s | Pivoted from MT-II to linear MT-I (better safety profile, no erection SE, EPP indication) |
| Clinuvel abandons MT-II | ~2000s | MT-II's non-selective receptor profile and side-effect burden drove pivot; MT-I suited EPP indication |
| EMA approval: afamelanotide (Scenesse) for EPP | 2014 | MT-I, not MT-II |
| FDA approval: afamelanotide (Scenesse) for EPP | 2019 | MT-I, not MT-II |
| MT-II illicit market grows | 2000s–present | Internet-sold vials; unregulated; inconsistent purity |
| MT-II banned in UK (unlicensed medicine) | ongoing | Sale illegal; multiple EU jurisdictions ban sale |
| NCT07437560 — MT-II for vitiligo (Phase 2) | 2026–present | First institutional trial; vitiligo repigmentation indication; not cosmetic tanning |

## Classification and aging context

- **SENS strategy:** Not applicable — no direct aging-damage correspondence
- **Hallmarks:** None directly established (`hallmarks: []`, R36 wave-1 convention)
- **DrugAge entry:** Not present as of 2026-05-09 #gap/unsourced
- **Aging relevance:** None demonstrated. The UV-independent tanning mechanism is theoretically relevant to skin cancer prevention by reducing UV exposure needed to achieve tanning, but no population-level photoprotection evidence exists for MT-II.
- **Energy-sensing note:** MC4R appetite suppression converges on the same downstream effectors (food intake reduction, energy expenditure) as CR/mTOR interventions, but MT-II has not been studied in aging-biology contexts.

## Limitations and knowledge gaps

- #gap/needs-human-replication — No Phase II or Phase III tanning trial has been completed. One Phase I study (n=3; all male) is the only controlled human pharmacology data [^dorr1996].
- #gap/needs-replication — Melanoma risk: population-level incidence data with objective UV-exposure co-variate adjustment do not exist.
- #gap/no-mechanism — Direct pro-melanocytic tumorigenicity of supraphysiological MC1R agonism has not been tested in melanocyte culture or in vivo at MT-II-equivalent concentrations.
- #gap/dose-response-unclear — Human PK parameters (half-life, Cmax, AUC) for MT-II were not reported in the Phase I abstract; illicit dosing is unstandardised.
- #gap/long-term-unknown — No safety data beyond short-term Phase I exposure. All long-term safety information derives from uncontrolled illicit use.
- ChEMBL ID resolved as CHEMBL430239 (verified via PubChem CID 92432 cross-reference on 2026-05-09).
- **Product quality:** Illicit vials contain 43–88% of stated dose with ~5% unknown impurities [^breindahl2015]; any "real-world" report based on illicit MT-II use is confounded by dose and purity uncertainty.
- **2021 melanoma review — source not located:** Exhaustive searches in PubMed (terms: "melanotan melanoma review", "melanotan melanoma", "melanotan melanoma incidence"; date filters 2019–2023) and Europe PMC returned no 2021 review paper specifically measuring melanoma incidence among MT-II users with UV-seeking behavior as a confound. The closest paper is Gilhooley 2021 [^gilhooley2021], a qualitative user-experience study (not an incidence study). The UV-attribution argument in the body is supported by Habbema 2017 [^habbema2017] but the framing of a dedicated 2021 incidence review cannot be sourced. #gap/unsourced — claim removed from narrative; retained here for documentation.

## Footnotes

[^dorr1996]: doi:10.1016/0024-3205(96)00160-9 · Dorr RT, Lines R, Levine N, Brooks C, Xiang L, Hruby VJ, Hadley ME · *Life Sciences* 1996;58(20):1777–1784 · n=3 (healthy adult males) · Phase I pilot · in-vivo (human) · model: subcutaneous MT-II 0.01–0.03 mg/kg q.o.d. × 2 weeks · primary outcome: skin pigmentation (visible) in 2/3 subjects; spontaneous erections in 2/3 subjects; nausea/somnolence at upper doses · 131 citations (archive confirmed) · not downloaded
[^hadley2006]: doi:10.1016/j.peptides.2005.01.029 · Hadley ME, Dorr RT · *Peptides* 2006;27(4):921–930 · review · n/a · describes MT-I and MT-II development history, receptor pharmacology, and commercialisation trajectory; describes PT-141 program for sexual dysfunction · 99 citations (archive confirmed) · not downloaded
[^habbema2017]: doi:10.1111/ijd.13585 · Habbema L, Halk AB, Neumann M, Bergman W · *International Journal of Dermatology* 2017;56(10):975–980 · review · n=case reports (exact n not specified in abstract) · documents four melanoma cases during/after melanotan use; notes melanotan embedded in UV-seeking behaviour; "conclusive evidence linking these phenomena is lacking" · 28 citations (archive confirmed; closed access, not downloaded)
[^burian2019]: doi:10.1007/s40257-019-00444-8 · Burian EA, Jemec GBE · *American Journal of Clinical Dermatology* 2019;20(6):819–832 · systematic review · n=multiple pooled case series · melanotan identified as trigger in 41% of eruptive melanocytic nevi cases; 5 associated melanoma cases documented; authors note precluded risk-of-malignant-transformation assessment · 31 citations (archive confirmed; closed access, not downloaded)
[^gilhooley2021]: doi:10.1159/000514492 · Gilhooley E, Daly S, McKenna D · *Dermatology (Basel)* 2021;237(4):546–554 · qualitative study · n=205 users (623 discussion entries) · documents UV-seeking co-use (sunbeds) as common MT-II use context; motivations: pre-holiday tanning and fitness-competition preparation; no melanoma incidence measurement · 6 citations (archive confirmed; closed access, not downloaded)
[^mallory2021]: doi:10.1016/j.esxm.2020.100298 · Mallory CW, Lopategui DM, Cordon BH · *Sexual Medicine* 2021;9(1):100298 · case report · n=1 (55-year-old male; 2 mg MT-II SC to abdomen; 30-hour priapism duration on presentation) · acute ischemic priapism following MT-II SC injection; cavernosal aspiration + phenylephrine (4,500 mcg total) failed; required operative penoscrotal decompression; at 15-week follow-up patient had new erectile dysfunction (rigidity 4/10, corpora fibrosis); authors report this as third MT-II priapism case in literature (citing Dreyer 2019 BMJ Case Rep + Nelson 2012 Clin Toxicol) · gold OA (PDF verified 2026-05-09)
[^breindahl2015]: doi:10.1002/dta.1655 · Breindahl T, Evans-Brown M, Hindersson P, McVeigh J, Bellis M, Stensballe A, Kimergård A · *Drug Testing and Analysis* 2015;7(2):164–172 · analytical · n=3 illicit MT-II vials (different internet shops) · LC-UV-MS/MS; actual MT-II content 4.32–8.84 mg vs 10 mg labelled; unknown impurities 4.1–5.9% in 2/3 samples · 34 citations (archive confirmed; closed access, not downloaded)
