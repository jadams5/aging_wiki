---
type: compound
aliases: [polydeoxyribonucleotide, polynucleotides, PN, PDRN, salmon DNA, salmon sperm DNA, Rejuran, Placentex, PLINEST]
pubchem-cid: null
pubchem-cid-alt: null
chembl-id: null
drugbank-id: null
administration-route: injectable
biologic: false
who-inn: null
molecular-formula: null
molecular-weight-da: null
mechanisms: [adenosine-A2A-receptor-agonism, anti-inflammatory, extracellular-matrix-remodeling, collagen-synthesis-stimulation]
targets: ["[[adora2a]]"]
hallmarks: ["[[chronic-inflammation]]", "[[loss-of-proteostasis]]", "[[altered-intercellular-communication]]"]
clinical-stage: approved-ex-us
human-evidence-level: limited
translation-gap: phase-3-rct-needed
next-experiment: "Randomized, double-blind, placebo-controlled trial in 60–80 yr adults: 4 intradermal PDRN sessions (2 mL at 3-4 wk intervals) vs vehicle saline; primary endpoint: dermal collagen density by 20-MHz ultrasound and skin biopsy collagen I/III immunohistomorphometry at 12 weeks; secondary: elasticity (Cutometer), TEWL, and validated global aesthetic improvement scale. Requires MW-verified pharmaceutical-grade PDRN with documented A2A-receptor pharmacology and inclusion of quantitative histological endpoints to bridge the mechanistic → clinical gap."
clinical-trials-active: 2
literature-checked-through: 2026-06-09
verified: true
verified-date: 2026-06-09
verified-by: claude
verified-scope: "Rho 2024 review (doi:10.1055/a-2366-3436) read in full (PMC11560330 OA full text) — all Rho-derived claims verified (235-dermatologist survey / 88%, n=20 Araco 2021, Korean/European dosing protocols, defibrotide distinction, PN product classification). Galeano 2008 (PMID 18318806), Bitto 2008 JVS (PMID 18971038), Bitto 2008 thermal (PMID 18434887), Lee 2020 (PMID 32248707), Araco 2021 (PMID 33755110), Lampridou 2025 (PMID 39645667), and Pak 2014 retraction (PMID 26839493) verified via PubMed abstract and Crossref metadata — full-text PDFs not accessed for non-OA mechanism papers. Pak 2014 retraction independently confirmed. RETRACTED footnote added per CLAUDE.md convention. Bitto 2008 thermal A2A claim, Bitto 2008 JVS page numbers, Lee 2020 n and design, Park 2015 PMID, and Araco 2021 blinding characterization corrected. Remaining non-OA papers (Kim 2022, Park/Yi 2025, Lee 2023, Kim 2023, Choi 2026, Cattelan 2026, Havas 2026, Rahman 2025, Galeano 2021) verified by DOI/PMID metadata only; full-text outcomes not checked — relevant claims carry appropriate #gap markers."
---


# Polydeoxyribonucleotide (PDRN / PN)

Polydeoxyribonucleotide (PDRN) is a heterogeneous mixture of short double-stranded DNA fragments (50–2,000 base pairs) derived by controlled extraction from salmon (*Oncorhynchus mykiss* trout or *Oncorhynchus keta* chum salmon) sperm DNA. The closely related term **polynucleotide (PN)** denotes a preparation of higher-molecular-weight DNA chains with superior viscoelasticity; the two terms are used interchangeably in the Korean and European aesthetic literature but differ in physicochemical properties (PN chains are longer and produce a more gel-like injectate). PDRN is used clinically in two distinct regulatory contexts: (1) as an injectable dermal biostimulator ("skin booster") for aesthetic skin rejuvenation — commercially as **Rejuran** (PharmaResearch, Korea) and **PLINEST** (Mastelli, Italy); and (2) as a registered wound-healing/tissue-repair drug under the tradename **Placentex** (injectable solution, approved in Italy and Korea for chronic wounds, musculoskeletal disorders, ophthalmology). This page covers the skin-aging and aesthetic applications; wound-healing evidence is summarised to anchor the mechanism.

**Key regulatory note:** PDRN/PN injectable products are **not FDA-approved** for any aesthetic or wound-healing indication in the United States as of 2026. They hold CE (EU) marking and Korean Ministry of Food and Drug Safety (MFDS) approval for specific indications. Use of PDRN/PN products in the US is off-label or investigational. The `clinical-stage: approved-ex-us` designation (schema R52) reflects this real-world non-US regulatory approval (CE + MFDS) in the absence of FDA approval — **not** a weak-evidence signal but a US regulatory gap. (Note separately that the *published efficacy literature* is Phase I/II quality at best: Phase III Korean data exist for PN vs. non-cross-linked HA, but the relevant trial was retracted — see below.) #gap/needs-human-replication

---

## Identity

PDRN is a heterogeneous nucleic-acid polymer, not a single small molecule. Standard small-molecule identifiers (PubChem CID, ChEMBL ID, DrugBank ID) do not apply to a polydisperse mixture of DNA fragments spanning 50–2,000 bp. No PubChem CID is assigned for PDRN as a mixture. #gap/needs-canonical-id

| Field | Value |
|---|---|
| PubChem CID | null — no CID for heterogeneous DNA fragment mixture |
| ChEMBL ID | null — not indexed as a single compound |
| DrugBank ID | null — not indexed (contrast: defibrotide, a related PDNA-derived drug, has DrugBank DB01254; see note below) |
| CAS number | Not uniquely assigned for the mixture |
| Composition | dsDNA fragments 50–2,000 bp; salmon sperm source |
| Biologic status | Not a protein/peptide biologic; a nucleic acid biomaterial |
| Primary receptor target | ADORA2A (adenosine A2A receptor) |

**Important distinction — PDRN ≠ defibrotide:** Defibrotide (Defitelio; DrugBank DB01254) is a distinct polydeoxyribonucleotide preparation derived from porcine intestinal mucosa, with a different fragment size distribution and used systemically (IV) for veno-occlusive disease. Defibrotide has a different pharmacological mechanism (endothelial protection via heparan sulfate proteoglycan interactions, adenosine release, tPA induction) and different regulatory approvals. The two products are both "PDRNs" chemically but should not be conflated. This page covers only the salmon-derived PDRN/PN aesthetic and wound-healing preparations.

---

## Mechanism of action

PDRN has at least two complementary mechanisms, both reasonably well-supported at the experimental (primarily rodent) level; human mechanistic data are sparse.

### Mechanism 1 — Adenosine A2A receptor agonism (primary pharmacological mechanism)

PDRN is partially degraded by tissue phosphodiesterases and nucleosidases to mononucleotides and nucleosides including **adenosine** and its precursors. Adenosine and PDRN-derived adenosine-containing fragments are selective agonists of the **A2A receptor** (ADORA2A), a Gs-coupled GPCR that raises intracellular cAMP via adenylyl cyclase activation. A2A receptor signalling:

- **Suppresses NF-κB** — elevated cAMP activates protein kinase A (PKA), which phosphorylates and inactivates the p65/RelA subunit of NF-κB, reducing transcription of TNF-α, IL-1β, IL-12, and other pro-inflammatory mediators [^bitto2008thermal] [^galeano2008diabetic]
- **Upregulates VEGF-A** — A2A/cAMP signalling induces VEGF-A expression in mesenchymal cells, fibroblasts, and endothelial cells, driving neovascularization and tissue repair [^bitto2008ischemia]
- **Promotes tissue repair** — Angiopoietin-1, Transglutaminase-II, and CD31 (endothelial marker) are upregulated in PDRN-treated wounds [^galeano2008diabetic]

The A2A agonism hypothesis is supported by pharmacological reversal: pretreatment with the selective A2A antagonist **DMPX** (1,3-dimethyl-1-propargylxanthine) abolishes all pro-angiogenic and wound-healing effects of PDRN in both the hind-limb ischemia model (Bitto 2008) and the db/db diabetic wound model (Galeano 2008), while DMPX alone has no effect on healing [^bitto2008ischemia] [^galeano2008diabetic]. This is the strongest evidence linking PDRN's bioactivity specifically to the A2A receptor rather than to non-specific nucleotide effects.

| Dimension | Status |
|---|---|
| Pathway (A2A → cAMP → NF-κB suppression + VEGF) conserved in humans? | yes — ADORA2A/cAMP pathway is identical; human A2A agonists (regadenoson) are clinical drugs |
| Phenotype (VEGF-driven neovascularization) conserved in humans? | partial — human wound studies exist for Placentex/PDRN but are not fully mechanistically probed |
| Replicated in humans (A2A-DMPX reversal)? | no — DMPX pharmacology data are rodent-only #gap/needs-human-replication |

### Mechanism 2 — Nucleotide salvage pathway substrate

PDRN degrades further to free nucleotides and deoxyribonucleosides (dAMP, dGMP, dCMP, dTMP), which enter cells via nucleoside transporters and are phosphorylated via the **salvage pathway** (kinase cascade: nucleoside → NMP → NDP → NTP). This supplies activated deoxyribonucleotide triphosphates (dNTPs) for:

- DNA repair synthesis (BER, NER, DSB repair)
- Cell proliferation (fibroblasts, keratinocytes, endothelial cells)
- mRNA transcription

The salvage pathway contribution is considered secondary to A2A receptor agonism by the Squadrito/Galeano group, because the receptor-blocking experiments with DMPX fully abolish the healing effects; if nucleotide substrate supply were the dominant mechanism, DMPX blockade would be incomplete. In practice, both mechanisms likely co-contribute, especially at higher PDRN concentrations where substrate supply may become relevant.

### Mechanism 3 — Physical / scaffold effects (PN-specific)

At the higher chain lengths characteristic of **PN** formulations (as distinct from shorter PDRN fragments), the polynucleotide solution forms a **3D porous viscoelastic scaffold** upon intradermal injection. This provides:

- Temporary structural ECM support (space-filling, tissue tension)
- A biologically active scaffold that directs fibroblast adhesion and migration
- Hydration via polyanionic negative-charge water binding

This physical scaffold mechanism is distinct from the A2A pharmacology and is not present or is attenuated with shorter PDRN fragments. It is not well-characterised at the molecular level and is primarily a descriptive category from clinical observation [^rho2024].

---

## Human evidence — aesthetic skin applications

**Summary grade: limited.** The published clinical evidence is predominantly from small, non-blinded or single-blinded Korean studies; most lack active pharmacological placebo controls, power calculations, or standardised histological endpoints. One systematic review (Lampridou 2025) covering 9 studies / 219 patients found encouraging outcomes on wrinkles, texture, and elasticity but concluded that rigorous validation is needed [^lampridou2025].

### Korean practice survey

A survey of 235 board-certified Korean dermatologists found that 88% use PN injections in their cosmetic practice, making PN one of the most widely used injectable skin boosters in Korean dermatology [^rho2024]. This documents widespread clinical adoption but does not constitute efficacy evidence.

### Small prospective case series — Park 2015 / 2016 (n=5)

Park et al. 2015/2016 (Dermatol Ther) reported long-chain PN filler use for skin rejuvenation in 5 Korean patients: four intradermal PN injection sessions at 2-week intervals; outcomes included self-reported improvement in pore size, skin thickness, skin tone, melanin levels, wrinkles, and sagging [^park2015pn]. This is an open-label, uncontrolled case series; no quantitative histology; small n=5. #gap/needs-replication

### Randomized controlled trial vs non-cross-linked HA — Lee 2020 (n=27, randomized, pair-matched, active-controlled)

Lee et al. 2020 (J Dermatolog Treat) conducted a randomized, pair-matched, active-controlled split-face trial in 27 Korean patients comparing polynucleotide filler versus non-cross-linked hyaluronic acid (HA) filler for periocular rejuvenation (crow's feet), with three injection sessions at two-week intervals. On the primary and secondary objective endpoints (visual analog scale and global esthetic improvement scale), there was no statistically significant difference between the PN and HA groups. PN showed higher improvement rates in skin roughness and pore volume versus non-cross-linked HA. The active comparator was non-cross-linked HA specifically (low-viscosity skin booster formulation), not cross-linked HA filler [^lee2020pn].

**Note on collagen composition outcome:** The wiki seeder originally attributed elasticity and "collagen composition" improvements to this trial; these specific outcomes are not confirmed from the published abstract. Collagen-composition improvement data may appear in full-text tables but could not be confirmed against the source PDF (non-OA). #gap/verify-outcomes

**Caveats:** Korean single-center study; pair-matched, active-controlled (not double-blind); no saline placebo; comparator is a non-equivalent HA product; n=27 is small. Evidence quality: limited.

**Note on the retracted Pak 2014 study:** An earlier Phase III RCT by Pak et al. (2014, J Korean Med Sci, n=72) claiming Phase III-level evidence for PN vs HA crow's feet treatment was **retracted in 2016** (retraction notice: J Korean Med Sci 2016;31(2):330, doi:10.3346/jkms.2016.31.2.330, PMID 26839493) and must not be cited. The retraction is documented in PubMed; the original article (PMID 25473210) is now flagged "RETRACTED ARTICLE." The Rho 2024 review cites Pak 2014 as a source for the 72-patient crow's feet trial data — this is why n=72 appeared in the seeder's draft. The Lee 2020 study (n=27, independent group, same endpoint) is the valid non-retracted evidence for the PN vs HA comparison. See footnote below. #gap/contradictory-evidence — retracted data must not support PN efficacy claims.

### European placebo-controlled study — Araco 2021 (n=20)

Araco and Araco 2021 (Aesthet Surg J) conducted a preliminary prospective randomized double-blind study of highly purified polynucleotide (PN-HPT) vs. placebo (normal saline) in 20 women aged 30–50 years with grade 3–4 moderate-to-severe atrophic acne scars (n=10 treatment, n=10 control). Double-blinding covered both the injecting physician and the patient. Statistically significant improvements in dermal quality and scar reduction were observed at 1 and 3 months in the PN-HPT group only [^araco2021].

**Caveats:** Very small n=20; single center (Rome, Italy); atrophic acne scar endpoint may not generalise to age-related skin changes; investigates PN-HPT (a specific high-purity formulation). Evidence quality: limited (preliminary), though the double-blind design is stronger than the seeder originally noted.

### 3D imaging study — Kim 2022 (n=30)

Kim et al. 2022 (Aesthet Plast Surg) used a 3D skin surface scanner (Antera 3D camera) to assess PN filler efficacy for crow's feet in 30 Korean subjects, reporting improvement in crow's feet grading, wrinkles, texture, pores, depressions, and skin redness [^kim2022pn]. No control arm; single-centre; outcome is a validated imaging metric. Evidence quality: low (uncontrolled).

### Systematic review — Lampridou 2025 (9 studies, 219 patients)

The most recent independent systematic review [^lampridou2025]: 9 studies / 219 total patients; all studies show promising outcomes with statistically significant results on wrinkle, texture, and elasticity endpoints; adverse effects mild and transient; patient satisfaction moderate to high. Authors' conclusion: "Limited consensus regarding optimal use; rigorous high-quality studies essential." This is a systematic review of low-to-moderate quality studies — it aggregates but does not upgrade the constituent evidence.

### Broader regenerative aesthetics systematic review — Rahman 2025

Rahman et al. 2025 (Aesthet Plast Surg) conducted a critical systematic review of 19 studies (14 RCTs, 5 prospective) on regenerative aesthetics broadly (including PN). They found "significant lack of consistent, high-quality evidence" and identified common issues: inadequate reporting, unclear mechanisms, absent long-term safety data. The field "lacks scientific rigor for specialty recognition" [^rahman2025]. This is a methodological critique directly relevant to all PN clinical claims.

---

## Dosing and protocols

Based on the clinical literature reviewed and Rho 2024 consensus data [^rho2024]:

**Korean standard protocol:**
- 2 mL PN per session, intradermal (papular or fanning technique)
- Every 3–4 weeks × 3–4 sessions
- Maintenance sessions every 3–6 months if desired

**European consensus:**
- 3 consecutive sessions, 3 weeks apart
- Effect duration reported as 6–12 months post-treatment course

**Route:** Intradermal injection only (aesthetic context); intramuscular, intra-articular, and topical routes used in wound-healing/orthopaedic contexts. Route is critical: intradermal PDRN delivery targets dermal fibroblasts directly; systemic routes activate A2A receptors in vascular and inflammatory compartments.

**Administration note:** `administration-route: injectable` covers intradermal (aesthetic), intra-articular (orthopaedic), intramuscular (IM), and intravenous (wound) contexts across the PDRN product family. This page's clinical-stage and evidence reflect the aesthetic intradermal context.

---

## Wound healing (mechanistic anchor — non-skin-aging context)

The primary mechanistic literature on PDRN uses wound-healing models, which are the foundation for extrapolating the A2A/VEGF mechanism to skin aging:

- **Diabetic wound healing (Galeano 2008):** PDRN (8 mg/kg IP daily × 12 days) accelerated wound healing in db/db genetically diabetic mice, increasing VEGF-A, CD31, Angiopoietin-1, and Transglutaminase-II, improving wound-breaking strength. All effects abolished by A2A antagonist DMPX [^galeano2008diabetic]. **Model: rodent; diabetic context.**
- **Thermal burn injury (Bitto 2008):** PDRN (8 mg/kg/day IP × 14 days) improved angiogenesis, granulation tissue formation, and re-epithelialization in a mouse thermal injury model; reduced serum TNF-α. This study does not include DMPX pharmacological reversal; A2A-specific mechanism for thermal injury is not confirmed in this paper [^bitto2008thermal].
- **Peripheral artery occlusion (Bitto 2008 JVS):** PDRN restored blood flow and revascularization in a rat hind-limb ischemia model via VEGF-A upregulation; abolished by DMPX [^bitto2008ischemia].
- **Galeano 2021 review:** Survey of the field confirming PDRN's role in impaired skin wound healing including diabetic ulcers and pressure wounds [^galeano2021].

**Extrapolation caveat:** The wound-healing evidence is entirely in **rodent models** with **systemic PDRN administration** (IP injection at 8 mg/kg). Aesthetic use involves **intradermal injection** in the absence of diabetic impairment or ischemia. The A2A mechanism is pharmacologically well-anchored (DMPX reversal), but whether the same VEGF-A + anti-inflammatory response operates in aged (non-injured, non-diabetic) human dermis after intradermal delivery at the concentrations achieved clinically is not established. #gap/needs-human-replication

---

## Neocollagenesis (aging context)

PDRN/PN stimulates fibroblast proliferation and collagen synthesis in aging and photo-damaged skin. The cellular-level evidence:

- Human dermal fibroblast cultures: PDRN activates ADORA2A → FAK + MAPK phosphorylation → fibroblast proliferation and fibronectin/collagen upregulation (Lee 2023 plant-derived PDRN) [^lee2023ginseng]
- Seaweed-derived PDRN (Porphyra sp.): suppresses nitric oxide and promotes collagen production in human dermal fibroblasts (Kim 2023) [^kim2023seaweed]
- In the aesthetic clinical context, PN-treated subjects showed higher improvement in roughness and pore volume versus non-cross-linked HA at 12 weeks (Lee 2020) [^lee2020pn]; "collagen composition" improvement reported in the Rho 2024 review for the same endpoint population cannot be attributed to the non-retracted Lee 2020 paper from abstract data alone — the original claim derived from the retracted Pak 2014 paper. #gap/verify-outcomes

Mechanistic chain: PDRN → A2A agonism → cAMP/PKA → pro-anabolic gene programme in dermal fibroblasts → increased collagen I/III synthesis + fibroblast proliferation → dermal structural repair.

This chain is consistent with the known biology of [[dermal-fibroblasts]] and [[loss-of-proteostasis]] in skin aging; PDRN addresses the downstream collagen deficiency without targeting senescent cells directly. It should be considered a **biostimulatory collagen-synthesis agent** rather than a senolytic or senomorphic.

---

## Comparison with hyaluronic acid skin boosters

PDRN/PN competes with non-cross-linked hyaluronic acid (skin booster HA) in the injectable aesthetic market.

| Feature | PDRN/PN | Non-cross-linked HA |
|---|---|---|
| Primary mechanism | A2A receptor agonism → fibroblast stimulation | ECM space-filling + hydration; CD44 signaling (MW-dependent) |
| Tissue scaffold | Forms porous 3D scaffold (PN > PDRN) | Provides viscous hydration depot |
| Effect on collagen | Biostimulatory (upregulates synthesis) | Indirect (via CD44/hydration); less direct collagen synthesis evidence |
| Duration | 6–12 months per clinical report | 6–12 months for skin boosters |
| Clinical evidence | Limited; 1 RCT vs non-cross-linked HA (n=27; null result on VAS/GAIS) | Variable; more trials for cosmetic fillers overall |
| Reversibility | Not reversible (unlike cross-linked HA) | Non-cross-linked HA is absorbed over weeks |
| Combination | Combined PN+HA activates fibroblasts synergistically vs either alone (in vitro evidence) | Combined with PN: synergistic fibroblast activation |

See [[hyaluronic-acid]] for full molecular weight-dependent HA biology.

---

## Active clinical trials (ClinicalTrials.gov, accessed 2026-06-09)

Active trials with PDRN in skin:

- NCT07280637 — "Treatment of Periocular Wrinkles With the Active Ingredients PDRN, Hyaluronic Acid and Niacinamide" — ACTIVE_NOT_RECRUITING, Phase N/A
- NCT07472192 — "Comparative Study for Facial Scar Remodeling Using Fractional Carbon Dioxide Laser Combined With PDRN Versus Fractional CO₂ Laser" — RECRUITING, Phase 2

`clinical-trials-active: 2` (aesthetic context; additional wound/orthopaedic trials exist outside the aesthetic scope of this page)

---

## R25 recency search (2021–2026)

**Searches conducted 2026-06-09:**

1. PubMed: "polydeoxyribonucleotide AND (skin OR dermal OR aesthetic) AND (meta-analysis[pt] OR randomized controlled trial[pt] OR systematic review[pt])" mindate=2019 — 3 hits (PMIDs 40826297, 39645667, 39198280)
2. PubMed: "polydeoxyribonucleotide AND (skin OR dermal OR aesthetic)" mindate=2023 — 15 hits; abstracts reviewed
3. Crossref: "Squadrito polydeoxyribonucleotide adenosine A2A" — 3 key mechanism papers retrieved and verified
4. Crossref: "Galeano polydeoxyribonucleotide diabetic wound healing" — 3 key wound papers retrieved and verified
5. PubMed: "polydeoxyribonucleotide AND adenosine AND A2A AND (wound OR angiogenesis)" — 23 hits; key papers reviewed
6. ClinicalTrials.gov v2: "polydeoxyribonucleotide skin" RECRUITING + ACTIVE_NOT_RECRUITING — 4 trials; 2 aesthetic-relevant

**High-priority hits (meta-analyses / systematic reviews):**

- Lampridou 2025 (J Cosmet Dermatol) — systematic review 9 studies / 219 patients; integrated as primary synthesis evidence [^lampridou2025]
- Rahman 2025 (Aesthet Plast Surg) — critical systematic review of regenerative aesthetics broadly, negative methodological assessment; integrated as methodological context [^rahman2025]
- Park / Yi 2025 (Aesthet Plast Surg, PMID 40826297) — RCT comparing air-botulinum toxin + PDRN vs monotherapies for acne scars; integrated as additional evidence [^park2025acne]

**2025/2026 additions:**

- Choi 2026 (Int J Mol Sci, PMID 42196335) — review of PDRN combination strategies (PDRN + HA, growth factors, physical therapies); confirms A2A mechanism and synergistic effects; no contradictions with earlier literature [^choi2026combo]
- Cattelan 2026 (Dermatol Surg, PMID 42160631) — regenerative aesthetics review noting PN as tissue repair + anti-inflammatory scaffold [^cattelan2026]
- Havas 2026 (Marine Drugs, PMID 41892958) — Porphyridium extract containing plant-derived PDRN; confirms ADORA2A activation in fibroblasts; adds non-salmon source data [^havas2026]

**No contradictions with training-era citations identified.** The Lampridou 2025 systematic review is the most authoritative recent synthesis and is consistent with the moderate-evidence framing applied here. The Rahman 2025 critical review reinforces the #gap/needs-replication framing rather than contradicting it.

**Key gap:** No 2021–2026 blinded, placebo-controlled human RCT (with histological or objective biomarker primary endpoints) for PDRN skin aging has been published. The field remains in the small uncontrolled / single-blinded proof-of-concept phase.

---

## Safety profile

PDRN/PN has an excellent short-term safety profile in published aesthetic studies, consistent with its biologics-adjacent regulatory history:

- Adverse events are predominantly injection-related (bruising, transient erythema, mild swelling) and resolve within days
- No anaphylaxis or serious adverse events reported in published case series
- Allergenicity: salmon-sperm-derived DNA is generally poorly immunogenic; allergic reactions are theoretically possible but not documented in published literature
- Long-term safety (>12 months): no systematic data; #gap/long-term-unknown
- Formulation-dependent: Placentex (wound-healing drug) and Rejuran/PLINEST (aesthetic products) use different purification standards and concentrations — adverse events from one formulation should not be freely extrapolated to another

---

## Limitations and gaps

- **No large, placebo-controlled human RCT** for aesthetic skin aging with histological primary endpoints exists as of 2026-06-09. The Lee 2020 RCT (n=27) compared PN vs a non-equivalent active comparator (non-cross-linked HA) rather than placebo, and primary endpoints (VAS/GAIS) were not significantly different. #gap/needs-human-replication
- **No FDA-approved indication.** In the US, PDRN/PN use is investigational or off-label. Regulatory differences between CE/MFDS approval and FDA should be flagged in any clinical decision context.
- **Canonical identifiers absent.** No PubChem CID, ChEMBL ID, or DrugBank ID applies to the PDRN mixture. MW-characterization of specific commercial products is manufacturer-dependent. #gap/needs-canonical-id
- **Mechanism: A2A agonism is established in rodent models via DMPX reversal; human A2A mechanistic data (receptor occupancy, cAMP measurements, VEGF induction in aged human dermis) are not published.** #gap/needs-human-replication
- **ADORA2A page does not yet exist** in this wiki — linked as a stub. #gap/stub
- **PN vs PDRN distinction** is clinically used but imprecisely defined in the literature; chain-length cutoffs vary by manufacturer. The molecular heterogeneity of different commercial products makes direct cross-study comparison unreliable. #gap/dose-response-unclear
- **COL1A1/COL3A1 wikilinks** are stubs (R40 deferred). Linked anyway as they will be seeded.
- **Retracted Pak 2014 study** (J Korean Med Sci doi:10.3346/jkms.2014.29.S3.S201) must NOT be cited for any efficacy claim. The retraction occurred in 2016; some reviews still cite this paper — it is the apparent source of the "72-patient Phase III RCT outperforming HA" claim. The Lee 2020 study covers a similar design and is the valid replacement.

---

## See also

- [[skin-aging]] — canonical phenotype hub; dermal collagen fragmentation + fibroblast biostimulation context
- [[dermal-fibroblasts]] — cell type biostimulated by PDRN; collagen I/III synthesis, ECM maintenance
- [[dermis]] — tissue context; dermal ECM composition, HA content, collagen turnover
- [[hyaluronic-acid]] — primary competitor/comparator skin booster; ECM biostimulator with distinct A2A-independent mechanism
- [[chronic-inflammation]] — hallmark; A2A-mediated NF-κB suppression targets this hallmark
- [[loss-of-proteostasis]] — hallmark; PDRN addresses collagen synthesis failure in aged dermis
- [[altered-intercellular-communication]] — hallmark; PDRN affects paracrine dermal-epidermal fibroblast signalling
- [[adora2a]] — primary receptor target (implicit stub — page not yet seeded)
- [[col1a1]], [[col3a1]] — collagen I/III proteins upregulated by PDRN treatment (R40 stubs)
- [[ghk-cu]] — related dermal biostimulator (copper peptide; TGF-β-mediated collagen synthesis)
- [[interventions/pharmacological/retinoids]] — distinct but clinically co-administered AP-1/MMP-targeting intervention
- [[frameworks/intervention-classes]] — adenosine-A2A-receptor-agonism class added 2026-06-09 for this page

---

## Footnotes

[^rho2024]: [[studies/rho-2024-injectable-skin-boosters]] · doi:10.1055/a-2366-3436 · PMID 39544509 · PMC11560330 · Rho NK, Kim H-S, Kim S-Y, Lee W · review · Arch Plast Surg 2024;51(6):528-541 · Gold OA (PMC) · Survey of 235 Korean dermatologists (88% PN use); clinical protocols; mechanism summary; PN vs HA comparison; formulation overview. This is the anchor synthesis review for the page.

[^galeano2008diabetic]: doi:10.1111/j.1524-475X.2008.00361.x · PMID 18318806 · Galeano M, Bitto A, Altavilla D, Minutoli L, Polito F, Calò M, Lo Cascio P, Stagno d'Alcontres F, Squadrito F · in-vivo · Wound Repair Regen 2008;16(2):208-217 · n=multiple experimental groups; female db/db and normal mice; daily IP PDRN 8 mg/kg × 12 days · model: incisional skin-wound model in genetically diabetic (db/db) and normal mice · 160 citations · PDRN increased VEGF-A, CD31, Angiopoietin-1, Transglutaminase-II in diabetic wounds; improved wound-breaking strength; all effects abolished by A2A antagonist DMPX; DMPX alone had no effect. **Primary A2A mechanism-anchor study.**

[^bitto2008thermal]: doi:10.1097/ccm.0b013e318170ab5c · PMID 18434887 · Bitto A, Galeano M, Squadrito F, Minutoli L, Polito F, Dye JF, Clayton EA, Calò M, Venuti FS, Vaccaro M, Altavilla D · in-vivo · Crit Care Med 2008;36(5):1594-1602 · model: thermal burn injury in mice; 8 mg/kg/day IP × 14 days · PDRN improved angiogenesis (microvessel density, PECAM-1), granulation tissue formation (fibronectin/laminin), and re-epithelialization in thermal injury; reduced serum TNF-α. Note: this paper does NOT include DMPX reversal experiments — A2A-specific mechanism confirmation for thermal injury is not in this study. A2A mechanism is anchored to Galeano 2008 and Bitto 2008 JVS.

[^bitto2008ischemia]: doi:10.1016/j.jvs.2008.06.041 · PMID 18971038 · Bitto A, Polito F, Altavilla D, Minutoli L, Migliorato A, Squadrito F · in-vivo · J Vasc Surg 2008;48(5):1292-1300 · model: rat hind-limb ischemia (femoral artery excision); IP PDRN 8 mg/kg daily × 21 days · VEGF-A mRNA upregulated throughout study (day 14: HLI 7±2.2 vs HLI+PDRN 13.3±3.8 n-fold/β-actin, p<0.0001); blood flow restored (p<0.005 vs vehicle); all positive effects abolished by DMPX (A2A antagonist). Confirms A2A receptor-dependent VEGF-A induction. Primary mechanistic anchor for A2A/VEGF pathway.

[^park2015pn]: doi:10.1111/dth.12299 · PMID 26814448 · Park KY, Seok J, Rho NK, Kim BJ, Kim MN · in-vivo (case series) · Dermatol Ther 2016;29(1):37-40 · n=5 Korean women · long-chain PN filler for skin rejuvenation; 4 intradermal sessions at 2-week intervals; pore size and skin thickness improved in patients in their 30s; skin tone, melanin, wrinkles, and sagging improved in patients in their 40s; open-label, uncontrolled. Note: the seeder originally cited PMID 25473210 for this reference — that PMID belongs to the RETRACTED Pak 2014 paper, not to Park 2015.

[^pak2014retracted]: **RETRACTED** — doi:10.3346/jkms.2014.29.S3.S201 · PMID 25473210 · Pak CS et al. · *J Korean Med Sci* 2014;29(Suppl 3):S201-S209 · originally a Phase III, randomized, double-blind, matched-pairs, active-controlled trial (n=72) comparing polynucleotide filler (Rejuran) vs HA (Yvoire-Hydro) for crow's feet correction; **retracted 2016** (retraction notice: J Korean Med Sci 2016;31(2):330, doi:10.3346/jkms.2016.31.2.330, PMID 26839493) — reason for retraction not publicly detailed; the Rho 2024 review cites this paper (ref 28) as the original source for the 72-patient PN vs HA crow's feet trial. Do NOT cite for any efficacy claim. The Lee 2020 study (PMID 32248707, n=27) is the valid non-retracted replacement for the PN vs HA comparison.

[^lee2020pn]: doi:10.1080/09546634.2020.1748857 · PMID 32248707 · Lee YJ, Kim HT, Lee YJ, Paik SH, Moon YS, Lee WJ, Chang SE, Lee MW, Choi JH, Jung JM, Won CH · randomized · J Dermatolog Treat 2022;33(1):254-260 (published online 2020) · n=27 Korean patients · randomized, pair-matched, active-controlled split-face trial (NOT double-blind); PN filler vs non-cross-linked HA for periocular rejuvenation; three injections at 2-week intervals. Primary/secondary endpoints (VAS and GAIS scores) NOT significantly different between PN and HA groups. PN showed higher improvement rates in roughness and pore volume. Note: the n=72 "double-blind" description in the seeder draft was absorbed from the retracted Pak 2014 paper (PMID 25473210) which the Rho 2024 review cited as ref 28; Lee 2020 is cited as the replication (ref 29 in that review). Collagen-composition outcome cannot be confirmed from abstract alone (#gap/verify-outcomes).

[^araco2021]: doi:10.1093/asj/sjab125 · PMID 33755110 · Araco A, Araco F · randomized · Aesthet Surg J 2021;41(7):NP866-NP874 · n=20 women aged 30–50 yr, grade 3–4 atrophic acne scars (10 PN-HPT, 10 normal-saline placebo) · double-blind randomized prospective study; PN-HPT (4 mL) vs placebo; outcomes at 1 and 3 months by Antera 3D and patient satisfaction questionnaire; PN-HPT group improved significantly at both timepoints; placebo group did not. Double-blind confirmed: neither injecting physician nor patient knew allocation.

[^kim2022pn]: doi:10.1007/s00266-022-02832-8 · Kim JH, Kim ES, Kim SW, Hong SP, Kim J · in-vivo (uncontrolled series) · Aesthet Plast Surg 2022;46(4):1902-1909 · n=30 Korean subjects · 3D imaging (Antera camera) of crow's feet after PN filler; improved grading, texture, pores, depressions, redness; no control arm. 11 citations.

[^lampridou2025]: doi:10.1111/jocd.16721 · PMID 39645667 · PMC11845969 · Lampridou S, Bassett S, Cavallini M, Christopoulos G · systematic review · J Cosmet Dermatol 2025;24(2):e16721 (published online 2024-12-08; print 2025 Feb) · PROSPERO CRD42024588712 · 9 studies / 219 patients; low-to-moderate quality studies; PN shows promising outcomes in reducing wrinkles, improving skin texture, and enhancing elasticity, with statistically significant results in several studies; side effects mild and transient; patient satisfaction moderate to high; authors conclude limited consensus on optimal use, rigorous high-quality studies essential. **Primary systematic review anchor for human-evidence section.**

[^rahman2025]: doi:10.1007/s00266-024-04287-5 · PMID 39198280 · Rahman E et al. · systematic review · Aesthet Plast Surg 2025;49(1):341-355 · 19 studies (14 RCTs, 5 prospective); critical methodological review; "significant lack of consistent, high-quality evidence" for regenerative aesthetics broadly including PN; identifies inadequate reporting, unclear mechanisms, absent long-term safety data.

[^galeano2021]: doi:10.3390/ph14111103 · PMID 34832885 · Galeano M, Pallio G, Irrera N, Mannino F, Bitto A, Altavilla D, Vaccaro M, Squadrito G, Arcoraci V, Colonna MR, Lauro R, Squadrito F · review · Pharmaceuticals 2021;14(11):1103 · Survey of PDRN in impaired skin wound healing (diabetic foot ulcers, pressure wounds, thermal injury); mechanism review emphasising A2A/salvage pathway duality. 64 citations.

[^park2025acne]: doi:10.1007/s00266-025-05157-4 · PMID 40826297 · Park MH, Hwang SK, Hwang JK, Chua D, Yi KH · randomized · Aesthet Plast Surg 2025;49(23):6668-6674 · n=multiple arms (acne scar model); air-botulinum + PDRN vs monotherapy; POSAS score reduction: 12.0 (combination) vs 9.0 (botulinum) vs 6.1 (PDRN alone); combination superior. Recent RCT integrating PDRN into multi-modality treatment.

[^lee2023ginseng]: doi:10.3390/molecules28217240 · PMID 37959659 · Lee K-S et al. · in-vitro · Molecules 2023;28(21):7240 · plant-derived PDRN from ginseng; activates A2A receptor, induces FAK and MAPK phosphorylation; increases fibronectin, filaggrin, Ki-67, Bcl-2, Cyclin D1 in fibroblasts and keratinocytes; model: artificial skin (KeraSkin). Extends A2A mechanism to non-salmon-derived PDRN.

[^kim2023seaweed]: doi:10.1002/cbf.3840 · PMID 37589166 · Kim T-H et al. · in-vitro · Cell Biochem Funct 2023 · seaweed-derived PDRN (Porphyra sp.); suppresses NO in LPS-stimulated macrophages; promotes collagen production in human dermal fibroblasts. Extends anti-inflammatory + collagen-stimulation evidence to alternative PDRN sources.

[^choi2026combo]: doi:10.3390/ijms27104355 · PMID 42196335 · Choi J, Jang SK, Lee D, Yoo YM · review · Int J Mol Sci 2026;27(10):4355 · PDRN combination strategies; confirms A2A receptor activation mechanism; PDRN + HA, growth factors, and physical therapies show synergistic tissue-repair effects. Most recent mechanistic synthesis.

[^cattelan2026]: doi:10.1097/DSS.0000000000004985 · PMID 42160631 · Cattelan L, Dayan S, Cohen S, Muniz M, Fabi SG · review · Dermatol Surg 2026 · Regenerative aesthetics overview; PN described as tissue repair + anti-inflammatory ECM scaffold. Most recent clinical review.

[^havas2026]: doi:10.3390/md24030099 · PMID 41892958 · Havas F, Krispin S, Cohen M, Attia-Vigneau J · in-vitro + clinical · Marine Drugs 2026;24(3):99 · Porphyridium plant-derived PDRN activates ADORA2A, reduces inflammation, increases collagen and HA in dermal fibroblasts; clinical study showing skin-plumping and hydration benefits. Supports ADORA2A agonism as generalizable PDRN mechanism.
