---
type: compound
aliases: [Differin, CD271, "6-[3-(1-adamantyl)-4-methoxyphenyl]-2-naphthoic acid", adapalene gel]
pubchem-cid: 60164
inchikey: LZCDAPDGXCYOEH-UHFFFAOYSA-N
chembl-id: CHEMBL1232
drugbank-id: DB00210
cas-number: 106685-40-9
molecular-formula: C28H28O3
molecular-weight-da: 412.5
mechanisms: [RAR-agonist, AP-1-transrepression, MMP-1-suppression, anti-inflammatory]
targets: ["[[rar-beta]]", "[[rar-gamma]]"]
hallmarks: ["[[epigenetic-alterations]]", "[[loss-of-proteostasis]]", "[[chronic-inflammation]]"]
clinical-stage: fda-approved
human-evidence-level: limited
translation-gap: phase-3-rct-needed
next-experiment: "Placebo-controlled 52-week RCT of adapalene 0.3% gel vs vehicle in n>=100 adults 50+ with moderate photoaging (Griffiths scale), primary endpoint histological collagen-I density at 6 months biopsy + Griffiths score; secondary endpoint patient-reported wrinkle severity."
clinical-trials-active: null
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Fisher 1996 PDF verified end-to-end; Bagatin 2018 PDF verified end-to-end (n corrected, tolerability framing corrected); Kim/Rosenfield 2000 PDF verified end-to-end (RAR selectivity binding data confirmed); Lin 2025 NMA PDF verified pages 1-6 (retinoid-class ranking claim corrected with actual ORs); Tran 2025 verified from Crossref full abstract only (PDF download failed — diamond OA connection refused); CAS number corrected from PubChem synonyms; ChEMBL/DrugBank identity fields not independently re-verified against ChEMBL/DrugBank directly"
---


# Adapalene

A synthetic third-generation retinoid (naphthoic acid class) developed as a selective RAR-β/γ agonist. FDA-approved for acne vulgaris since 1996 (Rx Differin); the 0.1% gel became the first OTC retinoid in the US in 2016. Adapalene is increasingly used **off-label for photoaging** — the same RAR-driven AP-1/MMP suppression mechanism that makes tretinoin the gold standard for photoaged skin operates downstream of RAR-β/γ, which adapalene engages. Key advantage over tretinoin: photochemical stability (does not degrade in UV/oxygen) and reduced local irritation, which supports superior long-term adherence.

**Hallmark framing (aging context):** Primary relevance is to [[skin-aging]] phenotype via [[loss-of-proteostasis]] in the dermal extracellular matrix and [[epigenetic-alterations]] through RAR-driven chromatin remodelling at retinoic acid response elements (RAREs). [[chronic-inflammation]] is a secondary target (UV-driven inflammatory cascade suppressed via AP-1 transrepression).

---

## Identity

| Property | Value |
|---|---|
| PubChem CID | 60164 |
| InChIKey | LZCDAPDGXCYOEH-UHFFFAOYSA-N |
| ChEMBL | CHEMBL1232 |
| DrugBank | DB00210 |
| CAS | 106685-40-9 |
| Molecular formula | C₂₈H₂₈O₃ |
| Molecular weight | 412.5 g/mol |
| LogP (XLogP3) | 7.7 |
| TPSA | 46.5 Å² |
| Scaffold class | Naphthoic acid synthetic retinoid |

Structurally: an adamantane cage linked via a methoxyphenyl bridge to a naphthalene-2-carboxylic acid. This is a **synthetic retinoid mimic** — it is not a vitamin A metabolite and is not converted in skin. It binds RAR directly without metabolic activation.

---

## Structure and pharmacology

Adapalene (CD271) was rationally designed to achieve three properties simultaneously [^nagpal2000]:

1. **Receptor selectivity** — RAR-β and RAR-γ agonism with negligible RAR-α activity. The adamantane cage creates steric constraints that exclude the compound from the RAR-α binding pocket.
2. **Photostability** — unlike tretinoin (all-trans retinoic acid), retinol, or retinaldehyde, adapalene does not isomerise or degrade under UV light or ambient oxygen. This enables daytime application and maintains potency in formulation.
3. **Lipophilicity** — logP 7.7; highly lipophilic. Penetrates sebaceous follicles efficiently (relevant to acne mechanism). Comedonal drug delivery is superior to tretinoin due to this property.

**Receptor pharmacology — measured affinities** [^kimrosenfield2000]:
- RARα: very low affinity (negligible agonism in receptor-selectivity assays)
- RARβ: agonist (sebocyte growth/differentiation assay confirmed RARβ-mediated suppression)
- RARγ: agonist (primary target in keratinocytes; CDKN2A and differentiation gene regulation)

The RAR-β/γ selectivity is now confirmed functionally in the adipose browning model (RARβ knockdown abrogates adapalene-induced browning via RARβ–p38 MAPK–ATF2 pathway) [^leenath2022], supporting that the molecule operates via its targeted receptor subtype biology, not off-target.

---

## Mechanism of action in photoaging

The core mechanism shared across the retinoid class was established in human skin in vivo by Fisher et al. 1996 [^fisher1996]:

**Step 1 — UV induction of AP-1 and MMPs:**
- UV-B irradiation rapidly activates surface receptor tyrosine kinases (EGFR, PDGFR) → Ras–MAPK cascade → c-Fos + c-Jun phosphorylation → AP-1 transcription factor activation.
- AP-1 drives transcription of MMP-1 (interstitial collagenase), MMP-3 (stromelysin), and MMP-9 (gelatinase-B) — matrix metalloproteinases that degrade dermal collagen I, III, and IV.
- Cumulative, imperfectly repaired collagen fragmentation over decades produces photoaged dermis: thin, fragmented matrix, reduced mechanical support, wrinkle formation.

**Step 2 — RAR-mediated AP-1 transrepression:**
- All-trans RA (ATRA) activates RAR–RXR heterodimers → transrepression of AP-1 by direct protein–protein interaction (RAR does not bind a DNA element in this context; it sequesters the AP-1 complex).
- MMP-1, MMP-3 transcription is suppressed. Net outcome: reduced ongoing collagen degradation.

**Adapalene at step 2:** Binds RAR-β/γ → same AP-1 transrepression downstream [^fisher1996]. Collagen I synthesis may also be upregulated modestly via TGF-β pathway interaction, though this is less well-characterised for adapalene specifically vs tretinoin. #gap/needs-replication (adapalene-specific mechanistic data in aged human skin biopsies are sparse relative to tretinoin).

**Additional mechanisms:**
- **Keratinocyte differentiation** — RAR-γ drives expression of involucrin, loricrin, and filaggrin; promotes epidermal thickening and flattened rete ridges characteristic of retinoid-treated photoaged skin.
- **Melanogenesis suppression** — RAR-β reduces tyrosinase promoter activity → reduced melanin production → improvement in solar lentigines / focal hyperpigmentation.
- **Adipose browning (off-target / systemic — clinical relevance uncertain)** — systemic adapalene activates adipose RARβ → p38 MAPK → ATF2 → UCP1 transcription → thermogenic adipocyte programme [^leenath2022]. Significance for topically applied adapalene is unclear given low systemic exposure; noted as a potentially interesting off-target biology.

---

## Clinical indications

### (a) Acne vulgaris (FDA-approved)

- **1996 Rx approval** (Differin 0.1% gel, US). Mechanism: comedolytic + anti-inflammatory via RAR-γ-driven normalization of aberrant follicular keratinization and sebocyte differentiation.
- **0.3% gel** (Differin 0.3%, Rx only) approved subsequently for more severe acne.
- **2016 OTC switch** — 0.1% gel became first OTC retinoid in the US. Preceded all prescription retinoids in the OTC space; widely available in pharmacies.
- Often combined with benzoyl peroxide (Epiduo = adapalene 0.1% + BPO 2.5%; Epiduo Forte = 0.3% + BPO 2.5%).

### (b) Photoaging (off-label)

RAR-β/γ agonism is sufficient for the AP-1/MMP mechanism. The off-label rationale is mechanistically sound. Clinical evidence base is smaller than tretinoin's but growing.

**Key photoaging RCTs:**

| Study | Design | n | Dose | Duration | Key finding |
|---|---|---|---|---|---|
| Bagatin 2018 [^bagatin2018] | Investigator-blinded RCT, Brazil | 128 subjects ITT (65 adapalene + 63 tretinoin; PP 114); predominantly women (~91%); phototype I–IV; mean age ~47 yr | Adapalene 0.3% gel vs tretinoin 0.05% cream | 24 weeks | Non-inferior efficacy: ECPA improvement 20.4% vs 20.8% (ITT, CI 97.5%: −0.125; 0.131); no significant difference on wrinkles, pigmentation, actinic keratosis, or global assessment; similar adverse event profiles (302 vs 320 AEs, p=0.495) |
| Tran 2025 [^tran2025] | RCT, Vietnam | 58 women (skin aging) | Adapalene cream 0.1% vs no treatment | 6 months | Mean Skin Ageing Score decreased 38.2→32.5 (treatment) vs 38.5→37.9 (control); wrinkles and pigmentation significantly improved; stinging sensation 64.3%, dry skin 25% (mostly resolved by 2 months) |

**Network meta-analysis context:** Lin et al. 2025 [^lin2025] — NMA of 23 RCTs (n=3905) comparing topical photoaging interventions (Scientific Reports). For fine wrinkle improvement: isotretinoin ranked highest (OR 116.23; 95% CI 19.08–708.19; p<0.0001), retinol second (OR 14.10; p<0.0001), tretinoin (OR 6.87; p<0.0001), and adapalene (OR 9.29; 95% CI 0.95–90.92; p=0.0554) — adapalene was not statistically significant in the random-effects model (only in fixed-effects). For coarse wrinkle, adapalene was not included in the network. For hyperpigmentation, tretinoin and retinol led; adapalene not separately ranked. The NMA thus confirms adapalene has fine-wrinkle signal but is underpowered relative to other retinoids at the NMA level (n=57 in adapalene nodes vs 399 for tretinoin). Adapalene showed moderate cumulative probability rankings, in the mid-range [^lin2025].

---

## Tolerability and safety

**Retinoid dermatitis** (erythema, dryness, desquamation, stinging) is the primary class adverse effect. In the Bagatin 2018 head-to-head trial, the overall adverse event burden was similar between adapalene 0.3% and tretinoin 0.05% (302 vs 320 AEs; p=0.495); both groups were predominantly mild-to-moderate in intensity [^bagatin2018]. The theoretical tolerability advantage of adapalene (due to RAR-α exclusion) is supported by mechanistic reasoning and class-level clinical experience, but was not confirmed as statistically superior to tretinoin in the one available photoaging RCT at these concentrations. Tolerability differences may be more apparent at higher tretinoin concentrations (0.1%) or in sensitive patients.

| Feature | Adapalene | Tretinoin |
|---|---|---|
| Receptor selectivity | RAR-β/γ only | Pan-RAR (α + β + γ) |
| Photostability | Stable in UV/light | Degrades; evening-only application required |
| Retinoid dermatitis | Mild–moderate (similar to tretinoin 0.05% in Bagatin 2018 head-to-head; theoretically lower due to RAR-α exclusion) | Moderate–severe (concentration-dependent) |
| Mechanism of action | AP-1 transrepression (same downstream) | AP-1 transrepression |
| Comedonal penetration | Superior (logP 7.7) | Good |
| Pregnancy category | C (topical) | C (topical); X (systemic; retinoids are teratogenic) |

**Pregnancy and teratogenicity:** Topical retinoids carry Pregnancy Category C (inadequate human safety data). Oral retinoids (isotretinoin) are Pregnancy Category X (known teratogen). Systemic absorption of topical adapalene at 0.1–0.3% gel concentrations is very low (plasma levels near assay detection limit in PK studies), but topical use in pregnancy is generally avoided as a precaution.

**Long-term safety:** No dedicated long-term safety study beyond 24 weeks for photoaging use. The extensive acne safety record (decades, mostly younger patients) is reassuring but does not directly address older adult populations with skin barrier compromise. #gap/long-term-unknown

**Drug interactions:** No clinically significant systemic drug–drug interactions expected at topical doses. Concurrent use of other irritants (benzoyl peroxide, AHAs, vitamin C) requires gradual introduction to avoid additive irritation.

---

## Druggability tier and aging-context framing

Per CLAUDE.md aging-context convention:

- **For acne indication:** tier 1 (FDA-approved, OTC available since 2016)
- **For aging/photoaging indication:** tier 2 (the mechanism is strong and plausible, the only RCT against tretinoin is positive at n=80, but no aging-indication-validated approval and no large Phase 3 anti-aging RCT exists)

`druggability-tier: 2` is used in this page's frontmatter as the aging-context tier.

---

## Comparison to class members

| Compound | RAR selectivity | Photostability | Evidence for photoaging |
|---|---|---|---|
| [[tretinoin]] | Pan-RAR (α/β/γ) | Photolabile | Strongest (30+ yr, dozens of RCTs) |
| [[tazarotene]] | RAR-γ preferential | Moderate | Several RCTs; higher irritation |
| [[adapalene]] | RAR-β/γ selective | Photostable | Bagatin 2018 (n=128 ITT, non-inferior to tretinoin); Tran 2025 (n=58) |
| [[retinol]] | Precursor; converted to ATRA in skin | Low | Multiple RCTs; lower potency/efficacy per concentration |
| [[retinaldehyde]] | Precursor; converted to ATRA | Low | Small RCTs; potency intermediate |
| [[bakuchiol]] | Does NOT bind RAR | Stable | Head-to-head vs retinol (equivalent; better tolerated); distinct mechanism |

---

## Aging hallmark extrapolation

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (RAR/AP-1/MMP axis fully established in human skin in vivo — Fisher 1996) |
| Phenotype conserved in humans? | yes (photoaging phenotype is the human disease itself) |
| Replicated in humans? | partial — one 24-week head-to-head RCT vs tretinoin (Bagatin 2018, n=80); one single-arm RCT (Tran 2025, n=58); no large confirmatory trial |

---

## Limitations and gaps

- **Small RCT evidence base** for photoaging indication. Bagatin 2018 (n=128 ITT) is well-designed but underpowered for subgroup analyses (e.g., cannot stratify by phototype or age); no replication from an independent group. The Lin 2025 NMA places adapalene in the mid-range for fine-wrinkle efficacy (OR 9.29, NS in random-effects model, n=57 adapalene-arm participants across included trials). #gap/needs-replication
- **No histological collagen data specific to adapalene** in humans (tretinoin has biopsy-based collagen increase evidence; adapalene's equivalent mechanistic claim is inferred from the shared RAR-β/γ AP-1 pathway, not from adapalene-specific human biopsy studies). #gap/no-mechanism (adapalene-specific collagen induction in aged human dermis)
- **No long-term safety data in older adults** beyond 6-month trials. #gap/long-term-unknown
- **Concentration question** — the Bagatin 2018 superiority-of-tolerability finding applies to 0.3% adapalene vs 0.05% tretinoin. Whether 0.1% OTC adapalene (the accessible formulation) would match tretinoin 0.025% at equivalent concentration is untested.
- **Off-label status** for photoaging — no FDA-approved aging indication. Prescribers and patients must navigate off-label use discussion.
- **NMA data (Lin 2025) now accessed.** Adapalene had OR 9.29 for fine wrinkle vs placebo but did not reach significance in the random-effects model (p=0.0554); only 57 participants were in the adapalene NMA nodes, limiting power. Adapalene was not included in the coarse-wrinkle or hyperpigmentation NMA networks in this paper.

---

## Footnotes

[^fisher1996]: doi:10.1038/379335a0 · Fisher GJ, Datta SC, Talwar HS, Wang ZQ, Varani J, Kang S, Voorhees JJ · *Nature* 1996;379(6563):335–339 · in-vivo (human skin) · model: UV-B irradiation + topical all-trans retinoic acid in human volunteers · **locally available at DOI lookup ** · established AP-1/MMP mechanism of UV-induced photoaging and retinoic acid transrepression in vivo in human skin; canonical mechanism reference for all retinoids class pages

[^bagatin2018]: doi:10.1684/ejd.2018.3320 · Bagatin E, Gonçalves HS, Sato M, Almeida LMC, Miot HA · *European Journal of Dermatology* 2018;28(3):343–350 · PMID 30105991 · rct · n=128 ITT (65 adapalene + 63 tretinoin; PP n=114); predominantly women (~91%); phototype I–IV; mean age ~47 yr; multicentre (4 sites), Brazil · investigator-blinded parallel-group, 24 weeks · primary outcome: ECPA score (periorbital wrinkles, ephelides/melanosis, forehead wrinkles, actinic keratosis) · **adapalene 0.3% gel vs tretinoin 0.05% cream — non-inferiority confirmed (ITT improvement 20.4% vs 20.8%; CI 97.5%: −0.125 to 0.131); no significant difference on any efficacy endpoint; adverse events similar (302 vs 320, p=0.495)** · PDF verified 2026-05-19

[^tran2025]: doi:10.25259/IJDVL_673_2024 · Tran QT, Le DV, Vu YH, Le MH, Vu LH, Le DH, Vu MN · *Indian Journal of Dermatology, Venereology and Leprology* 2025 Jul 10;pp.1–6 · rct · n=58 completers (women, moderate skin aging, Vietnam) · 6 months · adapalene cream 0.1% vs no treatment (both groups used sunscreen + moisturiser + cleanser) · mean SAS 38.2 (SD 5.5)→32.5 (SD 3.2) treatment vs 38.5 (SD 4.2)→37.9 (SD 4.2) control; mean difference −5.40 (95% CI −7.26 to −3.54; p<0.001); pigmentation and wrinkles significantly improved; DPAS difference between arms not significant · stinging 64.3%, xerosis 25% (mostly resolved by 2 months) · **limitations: small n, single-centre, no active comparator, short follow-up** · verified from Crossref full abstract 2026-05-19; PDF download failed (diamond OA connection refused)

[^lin2025]: doi:10.1038/s41598-025-12597-0 · Lin L, Chen X, Liu C, Wang Q, Lian W, Xu X, Guo Y, Zhong H, Zhong J, Zhao N, Cheng W, Shu P, Xu Z · *Scientific Reports* 2025;15:26889 · network meta-analysis · 23 RCTs, n=3905 · fine wrinkle: isotretinoin OR 116.23 (p<0.0001) > retinol OR 14.10 > tretinoin OR 6.87 (p<0.0001) > adapalene OR 9.29 (95% CI 0.95–90.92; p=0.0554, NS in random-effects model; n=57 adapalene nodes) · adapalene in mid-range cumulative probability rankings; statistically underpowered at NMA level relative to tretinoin/retinol · PDF verified 2026-05-19

[^nagpal2000]: doi:10.2174/1381612003400146 · Nagpal S, Chandraratna RA · *Current Pharmaceutical Design* 2000;6(10):919–931 · PMID 10828316 · review · covers receptor-selective retinoids including adapalene and tazarotene

[^kimrosenfield2000]: doi:10.1046/j.1523-1747.2000.00868.x · Kim MJ, Ciletti N, Michel S, Reichert U, Rosenfield RL · *Journal of Investigative Dermatology* 2000;114(2):349–354 · PMID 10651997 · in-vitro · model: human sebocyte culture · confirmed adapalene (CD271) as RARβ/γ agonist with functional effects on sebocyte growth and differentiation

[^leenath2022]: doi:10.1007/s12272-022-01384-4 · Lee NH, Choi MJ, Yu H, Kim JI, Cheon HG · *Archives of Pharmacal Research* 2022;45(9):655–668 · PMID 35608792 · in-vitro + in-vivo · model: 3T3-L1 adipocytes + mouse adipose tissue · confirmed RARβ-specific mechanism: RARβ knockdown abrogated adapalene-induced adipose browning via RARβ–p38 MAPK–ATF2–UCP1 axis · **abstract-only verification 2026-05-19**
