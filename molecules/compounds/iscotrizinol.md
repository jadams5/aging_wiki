---
type: compound
aliases: [diethylhexyl butamido triazone, DBT, Uvasorb HEB, iscotrizinol]
pubchem-cid: 9810816
chembl-id: CHEMBL2103813
drugbank-id: DB15468
administration-route: topical
biologic: false
molecular-formula: C44H59N7O5
molecular-weight-da: 766.0
mechanisms: [UV-filter-absorption]
targets: []
hallmarks: ["[[genomic-instability]]", "[[loss-of-proteostasis]]", "[[chronic-inflammation]]"]
clinical-stage: approved-ex-us
human-evidence-level: preclinical-only
translation-gap: preclinical-only
next-experiment: "Intra-individual hemi-back RCT comparing an iscotrizinol-containing SPF 50+ formula vs a matched base without iscotrizinol, with suction-blister and tape-strip CPD quantification after single-day outdoor exposure at fixed dose 2 mg/cm² — would isolate iscotrizinol's UVB-photoprotection contribution from formulation effects and yield the first iscotrizinol-specific human biomarker endpoint."
clinical-trials-active: 0
literature-checked-through: 2026-06-09
verified: true
verified-date: 2026-06-09
verified-by: claude
verified-scope: "Canonical identifiers (CID 9810816, CAS 154702-15-5, EC 421-450-8, ChEMBL CHEMBL2103813, DrugBank DB15468, formula C44H59N7O5, MW 766.0) independently confirmed against PubChem synonym list. All six DOIs (Tsuchiya 2015, Stiefel 2013, Lim 2017, Young 2018, Fagervold 2023, Fagervold 2025) verified via Crossref — all resolve. Fagervold 2023 page numbers corrected 117899–117911 → 125931–125946. translation-gap corrected human-evidence-strong → preclinical-only. Primary source PDFs not read (closed-access; in-vitro/photophysical papers with no human endpoint data — no verification value beyond ID check). SCCS opinion number unconfirmable; #gap/needs-sccs-opinion-ref retained. Incidecoder-sourced formulation parameters remain flagged as non-primary. Recency search (PubMed 2022–2026) found no superseding RCT or meta-analysis."
---

# Iscotrizinol (diethylhexyl butamido triazone, DBT)

**INCI:** Diethylhexyl Butamido Triazone
**IUPAC:** 2-ethylhexyl 4-[[4-[4-(tert-butylcarbamoyl)anilino]-6-[4-(2-ethylhexoxycarbonyl)anilino]-1,3,5-triazin-2-yl]amino]benzoate
**Trade name:** Uvasorb HEB (3V Sigma) · **PubChem CID:** 9810816 · **CAS:** 154702-15-5 · **EC:** 421-450-8 · **MW:** 766.0 g/mol · **Formula:** C₄₄H₅₉N₇O₅

Iscotrizinol is a high-molecular-weight organic s-triazine UV filter that absorbs primarily in the **UVB range (290–320 nm)**, with secondary coverage extending into **UVA-II (~320–340 nm)**. λmax ≈ 310 nm. It is one of the most photostable organic UV filters available — empirical testing places time-to-10%-SPF-loss at approximately 25 hours under continuous irradiation, far exceeding the conventional 2-hour photostability threshold [^incidecoder-dbt]. Approved in the EU (≤10%), Japan (≤5%), and other non-US markets; **not FDA-approved** and not eligible for US sunscreen sale under the current OTC monograph framework. The primary manufacturer is 3V Sigma (Varese, Italy). Primary aging relevance is via [[phenotypes/skin-aging]] prevention — blocking UVB-induced cyclobutane pyrimidine dimers (CPDs), 6–4 photoproducts (6-4PPs), and the downstream AP-1/MMP-1 photoaging cascade. This is the thinnest-covered cluster member by primary literature — most published studies are analytical-chemistry methods papers with iscotrizinol as one of 12–22 UV filters assayed, rather than mechanistic or clinical investigations of the compound itself.

## Mechanism — UVB absorption via s-triazine scaffold

Iscotrizinol is built on a **1,3,5-triazine (s-triazine)** ring system — the same scaffold family as bemotrizinol (Tinosorb S) and bisoctrizole (Tinosorb M), but with a distinct substitution pattern. The three anilinyl arms of the s-triazine (two 2-ethylhexyl ester arms and one tert-butyl amide arm) create an asymmetric chromophore whose dominant absorption is in the UVB range rather than the broader UVB+UVA span of bis-substituted triazine filters like bemotrizinol.

Photodeactivation proceeds predominantly via fluorescence and internal conversion from the locally excited ³ππ\* triplet state, with minimal intersystem crossing to reactive species; the compound does not exhibit significant singlet-oxygen quenching [^tsuchiya2015]. This dissipation-via-heat pathway is what underlies the exceptional photostability: unlike avobenzone (which isomerizes and degrades) or Mexoryl SX (which can photolyze at high UV loads), iscotrizinol re-sets to ground state intact under repeated photon absorption cycles.

The very high molecular weight (766 Da) places this compound among the least-skin-penetrating organic UV filters, favourable for a compound whose utility is strictly in the stratum corneum. Protein-binding studies found comparatively low reactivity of DBT and the related ethylhexyl triazone toward amino groups in model systems [^stiefel2013], further supporting a low-sensitization-risk profile.

## Regulatory status

| Region | Status | Max concentration |
|---|---|---|
| **EU** | Authorized under Annex VI of EU Cosmetics Regulation (EC) No 1223/2009 | ≤10% |
| **Japan** | Approved; listed in the Japan Cosmetics Ingredient Standard (JCIS) | ≤5% |
| **Australia (TGA)** | Permitted as a listed sunscreen active; mirrors EU authorization | ≤10% (per EU precedent) |
| **United States (FDA)** | **Not GRASE.** Not in the OTC sunscreen monograph (21 CFR §352). No Time and Extent Application (TEA) publicly filed. |  — |

Regulatory note: "Not FDA-approved" reflects the US OTC-monograph framework's decades-long backlog on evaluating post-1978 organic UV filters, not a finding of harm. Per the **R52 convention** in this wiki, `approved-ex-us` is the appropriate `clinical-stage:` value. See [[interventions/lifestyle/uv-protection]] for the broader regulatory context.

A dedicated **SCCS opinion number** for iscotrizinol could not be confirmed through web search at the time of writing. The EU Annex VI entry is well-documented in the cosmetics industry but the original SCCS dossier reference (expected to be a 1990s–2000s era opinion, predating the modern SCCS/N-series numbering) was not traceable through publicly indexed sources. #gap/needs-sccs-opinion-ref

## Human evidence

Primary literature specifically studying iscotrizinol as an isolated intervention is **very sparse**. No RCT, cohort study, or clinical study with iscotrizinol as the sole active variable has been identified as of June 2026. Evidence for photoprotective efficacy is therefore inferential, drawn from:

1. **Multi-filter formulation studies** — iscotrizinol appears as one component in high-SPF commercial formulations tested for overall DNA-damage reduction. Young 2018 [^young2018] demonstrated that a high-SPF formulation containing iscotrizinol reduced epidermal CPD formation in a dose-application study (n=28, Fitzpatrick I/II), but iscotrizinol's marginal contribution within the multi-filter stack was not isolated.

2. **Photophysical characterization** — Tsuchiya 2015 [^tsuchiya2015] confirmed photostability of the triplet excited state in solution, providing the mechanistic basis for iscotrizinol's empirical photostability advantage but yielding no biological-outcome data.

3. **Regulatory risk assessment** — Lim et al. 2017 [^lim2017] performed a human risk assessment for iscotrizinol in sunscreen products (in the context of Korean regulatory review), confirming acceptable safety margins under realistic use conditions, but this is a safety document rather than an efficacy study.

**Evidence gap table:**

| Endpoint | Status |
|---|---|
| CPD/6-4PP reduction — human in vivo, isolated | **Not studied** |
| SPF contribution quantified in multi-filter formulations | Yes (formulation-level, not compound-isolated) |
| Photoaging hard endpoints (histology, MMP-1, collagen) | **Not studied** |
| Plasma pharmacokinetics / systemic exposure | **Not studied** |
| Long-term photocarcinogenesis prevention | **Not studied** |

#gap/needs-human-replication · #gap/no-isolated-compound-rct

## Safety

- **High molecular weight (766 Da)** provides a structural basis for minimal skin penetration; dermal absorption is expected to be low, though no published Matta-style maximal-use pharmacokinetic study exists for iscotrizinol.
- **Protein reactivity** is comparatively low — DBT and the related ethylhexyl triazone showed reduced amino-group binding versus ketone-class filters (benzophenone-3, butyl methoxydibenzoylmethane) in model screening systems [^stiefel2013], suggesting lower contact sensitization potential.
- **No significant singlet oxygen generation** confirmed in photophysical studies [^tsuchiya2015] — no photosensitizing ROS-generation concern identified.
- **Human risk assessment** (Lim 2017 [^lim2017]) concluded acceptable safety margins under realistic Korean market use conditions; no reproductive, endocrine, or mutagenicity red flags identified in that review.
- **No published case reports of contact allergy or photoallergy** to iscotrizinol were found in PubMed as of June 2026 — an absence notable for a compound with decades of commercial use, though systematic post-marketing surveillance data are not publicly available.

## Environmental fate

Iscotrizinol (DBT) is **persistent in marine sediments**. Two independent studies from the Lebaron laboratory at Sorbonne University found that DBT was not degraded by:

- A synthetic microbial consortium over 12 days (controls for oxybenzone and homosalate were degraded) [^fagervold2023]
- Natural coastal marine sediment microbiomes after 100 days of incubation [^fagervold2025]

This environmental recalcitrance is structurally consistent with the same high-MW lipophilic properties that underlie iscotrizinol's photostability and low skin penetration. Accumulation in marine sediments is a concern for aquatic ecosystems; unlike benzophenone-3 or octocrylene, iscotrizinol has not been specifically implicated in coral bleaching or hormonal disruption, but its sediment persistence is a regulatory signal worth monitoring.

#gap/long-term-unknown (environmental toxicology)

## Comparison with cluster members

| Property | Iscotrizinol (DBT) | Bemotrizinol (Tinosorb S) | Bisoctrizole (Tinosorb M) | Mexoryl 400 (MCE) | TriAsorB (PBT) |
|---|---|---|---|---|---|
| Scaffold | s-triazine (1,3,5) | s-triazine (1,3,5) | benzotriazole | cyclohexenylidene cyanoacetate | 1,2,4-triazine |
| MW (Da) | 766.0 | 628.8 | 659.0 | 322.4 | 540.6 |
| λmax (nm) | ~310 (UVB) | 310 + 345 (UVB + UVA-II) | 303 + 360 (UVB + UVA-I) | 385 (UVA-I tail) | broad (UVB–HEV) |
| UVA-I coverage | Weak / none | Moderate | Strong | Strong (380–400 nm only) | Broad + HEV |
| EU max % | 10 | 10 | 10 | 3 | 5 |
| Photostability | Exceptional | Good | Good (photostabilizes avobenzone) | Good (no photostabilizer needed) | Good |
| Skin penetration | Very low (MW) | Low | Very low (particle) | Low (MW 322) | Low (particle) |
| FDA status | Not GRASE | Not GRASE | Not GRASE | Not GRASE | Not GRASE |
| Primary role | UVB booster | Broad UVB+UVA-II | Broad UVB+UVA-I | UVA-I gap-fill | UVB+UVA+HEV booster |

**Practical niche:** iscotrizinol is a **UVB workhorse** — formula chemists use it to achieve high SPF numbers efficiently, leveraging its high ε in the UVB range and its exceptional photostability that keeps the whole filter stack active longer. It is not typically the primary driver of UVA protection; it functions as a complement to UVA-specific filters (avobenzone, Mexoryl SX/XL, Tinosorb M, Uvinul A Plus). In ex-US formulations, it is one of the most commonly included organic UVB filters precisely because of its stability, compatibility with other filters, and low-sensitization profile.

## Cross-references

- [[interventions/lifestyle/uv-protection]] — umbrella intervention page; photoprotection framework; comparative filter overview
- [[phenotypes/skin-aging]] — primary aging endpoint for UV-filter compound class
- [[molecules/compounds/bemotrizinol]] — cluster sibling (s-triazine; broader UVB+UVA-II coverage)
- [[molecules/compounds/bisoctrizole]] — cluster sibling (benzotriazole; particulate; broadest UVA-I organic filter)
- [[molecules/compounds/triasorb]] — cluster sibling (1,2,4-triazine; UVB+UVA+HEV absorber+reflector; Pierre Fabre)
- [[molecules/compounds/mexoryl-400]] — cluster sibling (cyclohexenylidene cyanoacetate; UVA-I 380–400 nm gap-fill; L'Oréal)
- [[molecules/compounds/ecamsule]] — cluster sibling (Mexoryl SX; UVA-II; L'Oréal; FDA-approved via NDA)
- [[molecules/compounds/drometrizole-trisiloxane]] — cluster sibling (Mexoryl XL; oil-soluble UVA filter; L'Oréal)
- [[molecules/compounds/tinosorb-a2b]] — cluster sibling (Tinosorb A2B; UVA broadband; BASF)
- [[hallmarks/genomic-instability]] — UV-induced CPD/6-4PP/8-OHdG DNA damage burden
- [[hallmarks/loss-of-proteostasis]] — MMP-driven dermal collagen/elastin degradation
- [[hallmarks/chronic-inflammation]] — UV-NF-κB cytokine induction

## Footnotes

[^tsuchiya2015]: doi:10.1039/c4pp00373j · Tsuchiya T, Kikuchi A, Oguchi-Fujiyama N, Miyazawa K, Yagi M · *Photochem Photobiol Sci* 2015;14(4):807–814 · in-vitro photophysics (steady-state + time-resolved spectroscopy) · characterized ³ππ\* excited state of DBT; deactivation predominantly via fluorescence; no significant singlet-oxygen quenching · primary photostability mechanism paper for iscotrizinol

[^stiefel2013]: doi:10.1111/ics.12082 · Stiefel C, Schwack W · *Int J Cosmet Sci* 2013;35(6):588–599 · in-vitro HPTLC screening · DBT and ethylhexyl triazone showed comparatively low reactivity toward amino-group model phases vs ketone-class filters · low-protein-binding signal; relevant to contact sensitization risk assessment

[^lim2017]: doi:10.1016/j.toxlet.2017.07.293 · Lim SK, Kim MK, Suh HS, Kim MH, Baek SH, Lee BM · *Toxicol Lett* 2017 (conference abstract supplement; full paper status unclear) · human risk assessment for DBT in sunscreen cosmetics (Korean regulatory context) · concluded acceptable safety margins under realistic use; no endocrine/mutagenicity flags · #gap/no-fulltext-access

[^young2018]: doi:10.2340/00015555-2992 · Young AR, Greenaway J, Harrison GI, Lawrence KP, Sarkany R, Douki T, Boyer F, Josse G, Questel E, Monteil C, Rossi AB · *Acta Derm Venereol* 2018;98(9):880–887 · in-vivo, n=28, Fitzpatrick I/II · high-SPF formulation containing iscotrizinol among multiple UV filters significantly reduced CPD formation at 1.3 and 2.0 mg/cm² but not at typical low-application-volume 0.75 mg/cm²; iscotrizinol contribution not isolated from co-filters · key real-world DNA-damage study; formulation-level not compound-level evidence

[^fagervold2023]: doi:10.1007/s11356-023-31063-w · Fagervold SK, Rohée C, Lebaron P · *Environ Sci Pollut Res Int* 2023;30(55):125931–125946 · microcosm biodegradation study · synthetic microbial consortium degraded oxybenzone, homosalate, homosalate, and ethylhexyl salicylate but not DBT, ethylhexyl triazone, bemotrizinol, bisoctrizole, or diethylamino hydroxybenzoyl hexyl benzoate · first microbial consortium persistence paper for DBT

[^fagervold2025]: doi:10.1007/s11356-025-36772-y · Fagervold SK, Rohée C, Lebaron P · *Environ Sci Pollut Res Int* 2025;32(33):19823–19835 · marine sediment microcosms, 100 d · DBT not biodegraded alongside most modern triazine filters; BP3/homosalate/octisalate were degraded · extended timeframe environmental persistence confirmation for DBT

[^incidecoder-dbt]: Incidecoder ingredient profile — Diethylhexyl Butamido Triazone (accessed 2026-06-09) — summarising photostability (~25 h to lose 10% SPF), EU max 10%, Japan max 5%, λmax 310 nm, UVB primary with UVA-II secondary coverage · non-primary source; used for formulation-level parameters only; verify against SCCS dossier when available
