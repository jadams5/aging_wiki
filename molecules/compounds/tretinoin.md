---
type: compound
aliases: [all-trans retinoic acid, ATRA, t-RA, vitamin A acid, Retin-A, Renova, Vesanoid, retinoic acid]
pubchem-cid: 444795
inchikey: SHGAZHPCJJPHSC-YCNIQYBTSA-N
chembl-id: CHEMBL38
drugbank-id: DB00755
cas-number: 302-79-4
biologic: false
molecular-formula: C20H28O2
molecular-weight-da: 300.4
mechanisms: [RAR-agonist, AP-1-transrepression, MMP-1-suppression, collagen-synthesis-stimulation]
targets: ["[[rara]]", "[[rarb]]", "[[rarg]]"]
hallmarks: ["[[genomic-instability]]", "[[loss-of-proteostasis]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Head-to-head RCT of tretinoin 0.05% vs adapalene 0.3% vs tazarotene 0.1% for photoaging with a Horvath epigenetic-clock secondary endpoint; n≥150; minimum 24-week treatment; facial skin biopsy at baseline and endpoint for MMP-1/collagen I IHC."
clinical-trials-active: 1
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Fisher 1996 quantitative claims (70% AP-1 reduction, 50–80% MMP-1/MMP-9 reduction, MMP-2 not-induced/not-altered, n values, mechanism) cross-checked against R39-verified study page (PDF read end-to-end); identity fields (PubChem 444795, ChEMBL CHEMBL38, CAS 302-79-4, InChIKey SHGAZHPCJJPHSC-YCNIQYBTSA-N, DrugBank DB00755) confirmed via PubChem REST API + ChEMBL API; Chien 2022 author list confirmed via Crossref; NCT06571721 status confirmed as RECRUITING; Lin 2025 NMA and Siddiqui 2024 systematic review claims remain abstract-derived (no local PDFs — #gap/no-fulltext-access applies to those sections)"
---


# Tretinoin

All-trans retinoic acid (ATRA), the biologically active form of vitamin A. The **best-evidenced topical anti-aging pharmaceutical** — the only retinoid with an FDA approval specifically for photoaging reversal (Renova, 1995). Its molecular mechanism is established by direct human in vivo data: topical tretinoin pretreatment reduces UVB-induced AP-1 DNA binding by 70% and suppresses MMP-1 and MMP-9 mRNA, protein, and enzymatic activity by 50–80%, via nuclear RAR-mediated transrepression of c-Jun/c-Fos rather than a sunscreen or collagen-synthesis-first mechanism [^fisher1996]. Decades of RCT evidence confirm clinical reversal of photoaging signs; tolerability remains the primary barrier to use.

## Identity

- **PubChem CID:** 444795
- **InChIKey:** SHGAZHPCJJPHSC-YCNIQYBTSA-N
- **CAS:** 302-79-4
- **ChEMBL:** CHEMBL38
- **DrugBank:** DB00755
- **Molecular formula:** C₂₀H₂₈O₂
- **Molecular weight:** 300.4 Da
- **Canonical SMILES:** `CC1=C(C(CCC1)(C)C)/C=C/C(=C/C=C/C(=C/C(=O)O)/C)/C`
- **Class:** diterpenoid retinoid (β-ionone ring + polyene chain + carboxylic acid head group)
- **LogP (XLogP3):** 6.3 (highly lipophilic; penetrates lipid-rich stratum corneum)
- **Topological polar surface area:** 37.3 Å²
- **Hydrogen bond donors / acceptors:** 1 / 2

**Brand names (historical):** Retin-A (0.025%, 0.05%, 0.1% cream/gel; acne indication, 1971); Renova (0.02%, 0.05% cream; photoaging indication, 1995); Vesanoid (10 mg oral capsules; acute promyelocytic leukemia, 1995); multiple generics.

## FDA approval timeline

| Year | Product | Indication | Route |
|---|---|---|---|
| 1971 | Retin-A (Johnson & Johnson) | Acne vulgaris | Topical cream/gel |
| 1995 | Vesanoid (Roche) | Acute promyelocytic leukemia (APL; PML-RARα fusion) | Oral |
| 1995 | Renova (Ortho-McNeil) | Adjunctive treatment of fine facial wrinkles + mottled hyperpigmentation in photoaged skin | Topical cream |

Renova's 1995 approval is the aging-context-direct indication — making tretinoin the only retinoid with formal FDA approval for a skin-aging endpoint (not just acne). This distinction matters for the `clinical-stage: fda-approved` classification here (not "supplement").

## Mechanism

### (a) RAR-α/β/γ binding and RARE-driven transcription

All-trans retinoic acid binds nuclear retinoic acid receptors (RAR-α, RAR-β, RAR-γ) with nanomolar affinity [^drais]. The RAR/ATRA complex heterodimerizes with retinoid X receptor (RXR) and binds retinoic acid response elements (RAREs) — direct repeat sequences — in target gene promoters. Depending on coregulator recruitment (co-activators vs co-repressors), the complex either activates (e.g., RAR-β induction) or represses target gene transcription. RAR-β itself is a transcriptional target of tretinoin, creating a positive feedback loop for retinoid responsiveness in treated skin.

### (b) AP-1 transrepression — the canonical photoaging mechanism (Fisher 1996)

The primary mechanism through which tretinoin prevents UV-induced collagen degradation is **ligand-dependent AP-1 transrepression** [^fisher1996]. The RAR/ATRA complex physically interacts with c-Jun and c-Fos proteins (the AP-1 heterodimer), forming complexes that lack transactivation capacity for AP-1 response elements in MMP gene promoters.

Quantitative results (text-stated in Fisher 1996, pp.338-339; verified R39 against local PDF):

- Topical 0.1% t-RA applied 48 h before 2 MED UVB irradiation reduced **UVB-induced AP-1 DNA binding by 70%** (n=9, p<0.01 vs vehicle) [^fisher1996].
- t-RA pretreatment reduced UVB-induced **MMP-9 (92K gelatinase) mRNA, protein, and activity by 50–80%** (n=10/9/9, p<0.01 vs vehicle) [^fisher1996].
- t-RA pretreatment reduced UVB-induced **MMP-1 (interstitial collagenase) mRNA, protein, and activity by 50–80%** (n=10/8/7, p<0.01 vs vehicle) [^fisher1996].
- **MMP-2 (72K gelatinase)** was NOT induced by UVB and was NOT altered by t-RA — explicitly stated and confirmed [^fisher1996].
- The affected MMPs are MMP-1 (interstitial collagenase), MMP-3 (**stromelysin I**, not stromelysin II — confirmed by probe hybridization), and MMP-9 (92K gelatinase). MMP-2 is constitutively expressed but UV/t-RA-independent [^fisher1996].
- t-RA did not reduce UVB-induced skin reddening (erythema), ruling out a UV-absorption/sunscreen mechanism for the MMP suppression [^fisher1996].

**What the mechanism is NOT:** AP-1 transrepression via protein-protein interaction (Jun/Fos) is the established mechanism. The commonly-cited alternative hypotheses — CBP/p300 coactivator competition and TIMP-1 induction — are NOT described in Fisher 1996 and are not the primary mechanism supported by this study.

### (c) RAR-β-driven collagen synthesis stimulation

Post-Fisher-1996 laboratory work from the Voorhees/Fisher group documented that tretinoin also stimulates procollagen I synthesis in dermal fibroblasts, partially via upregulation of TGF-β/Smad3 signaling downstream of RAR-β. This is a separate mechanism from AP-1 transrepression and was established in subsequent studies, not in Fisher 1996 itself. #gap/needs-replication — the specific molecular pathway (RAR-β → TGF-β → Smad3 → COL1A1) has not been independently replicated in large human in vivo studies.

## Effects on aging hallmarks

| Hallmark | Mechanism | Evidence |
|---|---|---|
| [[genomic-instability]] | Reduces UV-induced MMP-1/MMP-9 → less collagen degradation; reduces actinic keratosis burden (UV-mutant p53+ clone clearance via increased keratinocyte turnover) | [^fisher1996], [^sumita2018] |
| [[loss-of-proteostasis]] | Suppresses MMP-driven ECM protein degradation; stimulates procollagen I synthesis (RAR-β/TGF-β axis); net shift in MMP:collagen balance | [^fisher1996] |

## Pharmacokinetics

### Topical (primary aging-context route)

- **Penetration:** Lipophilic character (logP 6.3) drives effective penetration through the stratum corneum into the viable epidermis. Accumulates in epidermis; dermal penetration is lower.
- **Systemic absorption:** Minimal — estimated 1–2% of topically applied dose reaches systemic circulation in adult skin under normal use conditions. Topical tretinoin does not meaningfully elevate plasma retinoid levels above endogenous baseline in adults.
- **Local metabolism:** Tretinoin is oxidized in keratinocytes to 4-oxo-retinoic acid and other polar metabolites; some local recycling to retinol. The active form (ATRA) is the predominant intracellular species after application.

### Oral (APL context)

- **Bioavailability:** 50% (highly variable; food increases absorption)
- **Plasma t½:** ~0.7–1.4 h (the endogenous production rate means the drug clears rapidly; autoinduction of CYP26 further shortens t½ with repeated dosing — a major obstacle for chronic oral use)
- **Protein binding:** >95% to albumin and α1-acid glycoprotein
- Oral tretinoin is NOT used for photoaging; its PK characteristics (rapid clearance, autoinduction, teratogenicity risk) make it unsuitable for chronic dermatological use. The oral form is restricted to APL treatment.

## Clinical indications

### 1. Acne vulgaris (FDA 1971)

The original indication. Tretinoin normalizes follicular keratinization (primary pathogenesis in comedonal acne), reduces comedone formation, and has anti-inflammatory effects via RAR-β. Concentrations: 0.025%, 0.05%, 0.1% cream; 0.01%, 0.025% gel. Photosensitivity and retinoid dermatitis are dose-limiting.

### 2. Photoaging / fine facial wrinkles (Renova, FDA 1995)

On-label aging indication. Evidence base includes Fisher 1996 (mechanism), Griffiths 1995 (clinical reversal of wrinkles/hyperpigmentation in vehicle-controlled RCT; the canonical clinical trial), and Sumita 2018 (RCT, formulation comparison). The Renova labeling specifies adjunctive use with sunscreen and moisturizer; tretinoin does not eliminate photoaging changes. Approved concentrations: 0.02% and 0.05% emollient cream formulations.

### 3. Acute promyelocytic leukemia (oral Vesanoid, FDA 1995)

APL carries the PML-RARα fusion gene. Pharmacological doses of oral ATRA overcome PML-RARα-mediated differentiation block, driving leukemic blasts to differentiate to granulocytes (differentiation therapy). ATRA + arsenic trioxide (ATO) is now first-line treatment in APL with >90% remission rate. This mechanism is distinct from the photoaging mechanism and is not covered further here.

### 4. Off-label dermatology

Hyperpigmentation and melasma (reduces melanin production via RAR-mediated transcriptional effects on melanogenesis); keratosis pilaris; striae distensae; other photoaged skin manifestations. Evidence for some off-label uses is robust (hyperpigmentation), others weaker.

## Aging-context clinical evidence

### Fisher 1996 — canonical mechanism in human skin in vivo

The foundational mechanistic study. Single-dose UVB applied to buttock skin of adult Caucasians; topical 0.1% t-RA applied 48 h prior. Direct human in vivo measurements of AP-1 binding, MMP-1/MMP-3/MMP-9 mRNA, protein, and activity. All quantitative figures (70% AP-1 reduction; 50–80% MMP-1/MMP-9 reduction) are TEXT-STATED in the paper body (pp.338-339, verified R39) [^fisher1996].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | N/A — direct human study |
| Phenotype conserved in humans? | N/A — direct human study |
| Replicated in humans? | Yes — mechanism confirmed in multiple subsequent human in vivo studies by the same group and others |

### Sumita 2018 — RCT formulation comparison (n=24)

Randomized, evaluator-blinded RCT in 24 women (48 forearms; bilateral within-person design) comparing 0.05% tretinoin cream (3×/week) vs 5% tretinoin peel (every 2 weeks) for photoaged forearms. Both formulations produced ~20% reduction in photoaging scores and ~60% reduction in actinic keratosis counts from baseline (no between-arm difference on these primary endpoints). Three secondary endpoints diverged at p<0.05: dermis echogenicity and Ki67 favored the cream; field cancerization (AK pattern) favored the peel. Study page: [[studies/sumita-2018-tretinoin-photoaging]]. Note: paper is closed-access; all quantitative claims are abstract-derived [^sumita2018]. #gap/no-fulltext-access

### Chien 2022 — JAMA Dermatology RCT (n=20; tretinoin vs retinoid precursors)

Randomized clinical trial (n=20 White women, 24 weeks) comparing topical tretinoin precursors (retinol and derivatives) vs tretinoin in moderate-to-severe facial photodamage. No significant difference in Griffiths photoaging scores between groups. Tretinoin caused erythema 6× more frequently than precursors. Notably, MMP-2 mRNA was significantly reduced in precursor-treated samples and correlated with fine-wrinkle improvement — a mechanistically unexpected finding given Fisher 1996's documentation that MMP-2 is UV/t-RA-independent. This warrants a dedicated follow-up. #gap/needs-replication [^chien2022]

### Siddiqui 2024 — systematic review (25 studies; tretinoin vs alternative topicals)

Systematic review of 25 studies comparing tretinoin to alternative topical photoaging therapies [^siddiqui2024]. Key findings: tretinoin is confirmed as "the gold standard therapy for photoaging." Of 25 comparator studies: alternatives were more effective in 7, equivalent in 13, less effective in 3. Tretinoin's primary disadvantage is tolerability — most alternatives have better short-term tolerability profiles. Retinaldehyde and pro-retinal nanoparticle formulations were identified as second-line options for tretinoin-intolerant patients.

### Lin 2025 — network meta-analysis (23 RCTs; 3,905 participants)

Network meta-analysis of 23 RCTs (3,905 participants) comparing topical retinoids and other photoaging agents [^lin2025]. Tretinoin and isotretinoin emerged as "the most balanced treatments across efficacy and safety." Tretinoin and retinol were superior for hyperpigmentation; isotretinoin ranked highest for fine wrinkles overall. Tretinoin had the most favorable adverse-event profile overall; tazarotene and glycolic acid carried higher adverse-event risk. Note: Scientific Reports (2025); download pending; findings are from PubMed abstract. #gap/no-fulltext-access

## Dose and concentration

| Formulation | Concentration | Common schedule | Tolerability |
|---|---|---|---|
| Cream (Retin-A, generics) | 0.025%, 0.05%, 0.1% | Nightly to every-other-night | Increases with concentration; 0.025% best tolerated |
| Emollient cream (Renova) | 0.02%, 0.05% | Nightly; with moisturizer | Better than Retin-A at equivalent concentration due to vehicle |
| Gel | 0.01%, 0.025% | Nightly | More drying than cream; acne-preferred vehicle |
| Lotion | 0.05% | Nightly | Tested for chest photoaging in RCT (Wood 2022) [^wood2022] |

Induction protocol: typically start with lowest available concentration on alternating nights; advance to nightly and then higher concentrations as tolerance develops over 4–12 weeks.

## Side effects and tolerability

**Retinoid dermatitis** (erythema, peeling, dryness, photosensitivity) affects the majority of new users; severity correlates with concentration and application frequency. Typically peaks at 4–8 weeks ("retinization period") and partially resolves with continued use as epidermal adaptation occurs.

**Teratogenicity.** Tretinoin is a known teratogen:
- Topical: FDA pregnancy category D (risk not excluded; systemic absorption is minimal from topical use but not zero; FDA labeling advises avoidance in pregnancy)
- Oral Vesanoid: FDA pregnancy category X (major teratogen at pharmacological doses; APL treatment in pregnancy requires specialist counseling)

Women of childbearing potential using topical tretinoin should use effective contraception; the very low systemic absorption from topical application likely represents minimal teratogenic risk compared to oral vitamin A supplements at high doses, but formal safety data in pregnancy are unavailable.

**Photosensitivity:** Tretinoin increases UV sensitivity by thinning the stratum corneum. Daily broad-spectrum SPF ≥30 sunscreen is mandatory with topical tretinoin use for photoaging.

**Drug interactions (topical):** Concurrent benzoyl peroxide, salicylic acid, or glycolic acid increases irritation. Concurrent sulfur-containing products may inactivate tretinoin.

**Autoinduction (oral only):** Oral ATRA induces its own metabolic clearance via CYP26A1 upregulation with repeated dosing — relevant to APL therapy management, not to topical use.

## Comparison to other retinoids

| Retinoid | Mechanism | Conversion steps to ATRA | Potency vs tretinoin | Key feature |
|---|---|---|---|---|
| **Tretinoin** (ATRA) | Direct RAR agonist | 0 (active form) | Reference standard | Gold standard; most evidence; most irritating |
| [[retinol]] (vitamin A) | RAR agonist (prodrug) | 2 (retinol → retinal → ATRA) | ~20× lower (OTC; 2-step conversion is rate-limiting) | OTC accessible; well-tolerated; less potent |
| [[retinaldehyde]] (retinal) | RAR agonist (prodrug) | 1 (retinal → ATRA) | Intermediate; better tolerated than tretinoin | 1-step conversion; better potency-tolerability tradeoff than retinol |
| [[adapalene]] | RAR-β/γ selective agonist | 0 (synthetic; binds RAR directly) | Comparable to tretinoin 0.025%; less AP-1 transrepression | More selective receptor profile; better tolerability at equivalent clinical efficacy for acne; OTC in US since 2016 |
| [[tazarotene]] | RAR-β/γ selective (prodrug: tazarotenic acid) | 1 (hydrolysis to active acid) | Most potent topical retinoid; irritant | Most photodamage-efficacious per some comparisons; least tolerated |
| [[bakuchiol]] | Functional retinoid analog (not a retinoid structurally) | N/A (structurally distinct; activates retinoid gene expression program via distinct mechanism) | Approximately equivalent to retinol at tested doses per some RCTs | Plant-derived; suitable for retinoid-intolerant patients; not an RAR agonist structurally |

See [[retinoids]] (R41 class MOC, forward reference) for the full retinoid family comparison.

## Druggability and class context

**Druggability tier: 1** (FDA-approved drug for an aging-indication — photoaging is on-label for Renova). This is a straightforward tier-1 assignment: Renova (tretinoin 0.05% cream) received FDA approval in 1995 specifically for photoaging, making it the only drug in this wiki with aging as a direct on-label indication (vs rapamycin, which is FDA-approved for transplant/cancer but not aging). No aging-context qualification needed.

**Class MOC:** [[retinoids]] — covers all retinoid family members, shared RAR/RXR mechanism, and family-level comparisons. (Forward reference — page not yet seeded; planned R41.)

**SENS alignment:** Tretinoin does not map cleanly to a SENS damage category — it modulates the signaling consequences of UV-induced damage rather than repairing a SENS-defined damage lesion. Closest alignment is [[sens-damage-categories]] extracellular crosslinks/junk outside cells (ECM integrity), though the mechanism is not direct crosslink removal.

## Limitations and gaps

- **Fisher 1996 limitations:** Buttock skin only (photoprotected site); single UV dose per session; short time course (≤72 h); all-Caucasian cohort; small n per endpoint (n=7–10). Long-term prevention of cumulative collagen loss from repeat UV exposure not tested. #gap/long-term-unknown
- **Sumita 2018:** n=24; women only; Fitzpatrick II-III; forearm only (not face); closed-access PDF; abstract-derived quantitative claims only; no untreated control arm. #gap/no-fulltext-access #gap/needs-replication
- **RAR-β-collagen-synthesis mechanism:** The specific downstream pathway (RAR-β → TGF-β → Smad3 → COL1A1) has not been independently replicated in large human in vivo studies beyond the Voorhees/Fisher lab. #gap/needs-replication
- **Chien 2022 MMP-2 finding:** Unexpected reduction of MMP-2 by retinoid precursors (contradicting Fisher 1996's documentation that MMP-2 is UV/t-RA-independent) requires follow-up. #gap/contradictory-evidence
- **Epigenetic-age readouts absent:** No published study has used a validated epigenetic clock (Horvath, DunedinPACE, GrimAge) as a secondary endpoint in a tretinoin RCT. The DHM/Qi 2026 precedent suggests this is feasible and would provide a cross-hallmark efficacy signal. #gap/needs-human-replication
- **Long-term safety:** Decades of clinical use support safety. No dedicated long-term (>5 year) RCT of continuous topical tretinoin use with hard structural endpoints (dermal biopsy collagen quantification) has been conducted. Carcinogenicity of topical use is not considered a concern (UV-protection mechanism is anti-mutagenic). #gap/long-term-unknown
- #gap/dose-response-unclear — optimal concentration and schedule for anti-aging (vs acne) endpoints are not definitively established; most RCT evidence uses 0.05% cream but comparative-concentration RCTs for aging-specific endpoints are limited.

## Cross-references

- [[studies/fisher-1996-photoaging-ap1-mmp]] — canonical mechanism; R39-verified; local PDF available
- [[studies/sumita-2018-tretinoin-photoaging]] — RCT formulation comparison; n=24; closed-access
- [[skin-aging]] — phenotype page; photoaging mechanism and retinoid therapy section
- [[dermis]] — ECM aging context; MMP-driven collagen degradation
- [[epidermis]] — keratinocyte UV response
- [[dermal-fibroblasts]] — UV-SIPS and collagen synthesis context
- [[keratinocytes]] — AP-1/NF-κB → MMP cascade; actinic keratosis context
- [[mmp-1]] — MMP-1 (interstitial collagenase); primary target of AP-1 transrepression
- [[mmp-3]] — MMP-3 (stromelysin I, not II)
- [[mmp-9]] — MMP-9 (92K gelatinase)
- [[col1a1]] — procollagen I alpha-1; downstream synthesis target
- [[rara]], [[rarb]], [[rarg]] — receptor targets (forward refs; protein pages not yet seeded)
- [[retinol]] — OTC retinoid precursor; 2-step prodrug
- [[retinaldehyde]] — 1-step retinoid precursor; intermediate potency
- [[adapalene]] — RAR-β/γ-selective synthetic retinoid; acne + photoaging comparator
- [[tazarotene]] — RAR-β/γ-selective prodrug; most potent topical retinoid
- [[bakuchiol]] — structural retinoid analog; RCT-validated functional analog for retinoid-intolerant patients
- [[retinoids]] — R41 class MOC for the full retinoid family (forward ref; not yet seeded)
- [[hallmarks/genomic-instability]] — UV-induced MMP cascade + field cancerization context
- [[hallmarks/loss-of-proteostasis]] — ECM structural-protein degradation context

## Footnotes

[^fisher1996]: [[studies/fisher-1996-photoaging-ap1-mmp]] · n=6–17 per experiment (varies by endpoint; see study page for per-assay n) · in-vivo · p<0.01 (t-RA vs vehicle for AP-1 and MMP endpoints) · model: human adult buttock skin (Caucasian); topical 0.1% t-RA pretreatment 48 h prior to 2 MED UVB · doi:10.1038/379335a0 · PMID 8552187 · *Nature* 1996;379:335-339 · **locally available PDF** (R39-verified end-to-end; all quantitative figures are text-stated, not figure-estimated)

[^sumita2018]: [[studies/sumita-2018-tretinoin-photoaging]] · n=24 enrolled (23 per-protocol; bilateral within-person design; 48 forearms) · rct (evaluator-blinded) · p<0.05 (three secondary endpoints diverged between arms) · model: human women >60 yr, Fitzpatrick II-III, forearm · doi:10.1111/jdv.15020 · PMID 29704456 · *J Eur Acad Dermatol Venereol* 2018;32(10):1819-1826 · closed access; quantitative claims abstract-derived #gap/no-fulltext-access

[^chien2022]: doi:10.1001/jamadermatol.2022.1891 · Chien AL, Kim DJ, Cheng N, et al. · *JAMA Dermatology* 2022 · rct · n=20 · model: human women; facial photoaging, White; 24 weeks · tretinoin vs retinoid precursors; no photoaging-score difference; tretinoin 6× more erythema; unexpected MMP-2 mRNA reduction by precursors · PMC9178500 (OA); download pending

[^siddiqui2024]: doi:10.1007/s40257-024-00893-w · Siddiqui Z, Zufall A, Nash M, Rao D, Hirani R, Russo M · *Am J Clin Dermatol* 2024 · systematic-review · 25 studies · tretinoin confirmed as gold standard; more effective than alternatives in 3/25, equivalent in 13/25, less effective in 7/25; tolerability is primary limitation · PMID 39348007 · closed access; claims abstract-derived #gap/no-fulltext-access · FWCI 13.1; 99th percentile

[^lin2025]: doi:10.1038/s41598-025-12597-0 · Lin L et al. · *Scientific Reports* 2025 · network meta-analysis · 23 RCTs; 3,905 participants · tretinoin + isotretinoin most balanced on efficacy + safety; tretinoin + retinol superior for hyperpigmentation; isotretinoin highest for fine wrinkles; tretinoin most favorable adverse-event profile overall (tazarotene + glycolic acid higher risk) · PMID 40707570 · OA (gold); download pending · claims abstract-derived #gap/no-fulltext-access

[^wood2022]: doi:10.36849/JDD.6658 · Wood E, Fabi S et al. · *J Drugs Dermatol* 2022 · rct · tretinoin 0.05% lotion for chest photoaging · model: human (chest skin) · PMID 35674757 · claims abstract-derived #gap/no-fulltext-access

[^drais]: doi:10.1016/j.pharmthera.2020.107600 · Larange A, Cheroutre H · review of RAR isoform biology and retinoid receptor pharmacology — cited for RAR-α/β/γ binding affinities of ATRA; nanomolar Kd confirmed in multiple radioligand-binding studies · #gap/needs-canonical-id — confirm precise binding affinities from ChEMBL CHEMBL38 bioactivity page
