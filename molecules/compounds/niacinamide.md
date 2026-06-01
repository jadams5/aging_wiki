---
type: compound
aliases: [nicotinamide, vitamin B3 amide, PP-factor amide, pyridine-3-carboxamide]
pubchem-cid: 936
inchikey: DFPAKSUCGFBDDF-UHFFFAOYSA-N
chembl-id: CHEMBL1140
drugbank-id: DB02701
cas-number: 98-92-0
biologic: false
molecular-formula: C6H6N2O
molecular-weight-da: 122.12
mechanisms: [anti-inflammatory, epidermal-barrier-repair, melanin-transfer-inhibition]
# nad-precursor removed: topical niacinamide does not meaningfully raise NAD+ pools; route-dependent effect only operative at oral high-dose (ONTRAC 1 g/day). Retain in body disambiguation section; omit from Dataview-queryable mechanisms field to prevent false-positive NAD-precursor class hits.
targets: []
hallmarks: ["[[chronic-inflammation]]", "[[loss-of-proteostasis]]"]
clinical-stage: supplement
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Head-to-head RCT vs tretinoin 0.025% for composite skin-aging score (TEWL, dyspigmentation, fine lines) over 24 weeks; powered to establish non-inferiority plus synergy assessment for the combination arm; n>=150 per arm."
clinical-trials-active: 1
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Shariff 2022 (doi:10.1111/ics.12759) and Ghasemiyeh 2025 (doi:10.1038/s41598-025-26693-8) verified end-to-end against local PDFs — corrections applied (see verified-date notes); Chen 2015 ONTRAC verified against Crossref metadata (not_oa, no local PDF — abstract-level only; 23% NMSC reduction, n=386, 500 mg BID confirmed); Hakozaki 2002, Bissett 2004, Tanno 2000, Draelos 2006 not_oa — abstract-only; canonical-DB IDs (PubChem 936, ChEMBL CHEMBL1140, DrugBank DB02701, CAS 98-92-0, InChIKey DFPAKSUCGFBDDF-UHFFFAOYSA-N) confirmed via PubChem REST + ChEMBL API"
---


# Niacinamide (Nicotinamide)

A water-soluble amide form of vitamin B3 (niacin), chemically identical to nicotinamide. One of the most extensively studied topical active ingredients in cosmetic dermatology, with well-replicated clinical evidence for multiple anti-aging skin endpoints: hyperpigmentation reduction, barrier repair, sebum regulation, and anti-inflammatory effects. Available OTC at concentrations of 2–10% in countless formulations; not FDA-approved as a drug but widely used as a supplement and cosmetic active.

**Critically distinct from** the systemic NAD+ precursors [[nmn]] and [[nr]] — see the Disambiguation section immediately below before applying any systemic-aging framing.

## Critical disambiguation: niacinamide vs NMN / NR (NAD+ precursors)

Niacinamide is chemically identical to nicotinamide and participates in the NAD+ salvage pathway — it is formally a NAD+ precursor. However, in the anti-aging context, **topical niacinamide is categorically different from the NMN/NR class of systemic NAD+ precursor supplements.** The mechanisms and evidence bases do not overlap:

| Property | Topical niacinamide (this page) | [[nmn]] / [[nr]] (NAD+ precursors) |
|---|---|---|
| Route | Topical skin application | Oral systemic supplementation |
| Primary mechanisms | Barrier repair, melanin-transfer inhibition, anti-inflammatory, sebum reduction | NAD+ pool replenishment → sirtuin activation, mitochondrial support |
| Does it raise cellular NAD+? | Negligibly — systemic absorption from typical topical doses is too low to shift NAD+ pools | Yes — this is the primary intended effect |
| Relevant hallmarks | [[chronic-inflammation]], [[loss-of-proteostasis]] (skin barrier) | [[deregulated-nutrient-sensing]], [[mitochondrial-dysfunction]], [[epigenetic-alterations]] |
| Human evidence | Strong RCT evidence for skin endpoints | Limited evidence for systemic aging endpoints |
| Indication | Skin aging, hyperpigmentation, acne, barrier dysfunction | Metabolic/systemic aging; frailty; some cognitive investigation |

The skin-aging mechanisms of topical niacinamide — barrier lipid synthesis, PAR-2-mediated melanin transfer inhibition, NF-κB modulation — operate independently of NAD+ pool size and are not meaningfully recapitulated by oral NMN/NR. The wiki pages [[nmn]], [[nr]], and [[interventions/pharmacological/nad-precursors]] cover the systemic NAD+ precursor class; this page covers topical/dermatological niacinamide.

> Propagation note: [[interventions/pharmacological/nad-precursors]] should receive a reciprocal disambiguation note pointing here.

## Identity

| Property | Value |
|---|---|
| PubChem CID | 936 |
| ChEMBL | CHEMBL1140 |
| DrugBank | DB02701 |
| CAS | 98-92-0 |
| InChIKey | DFPAKSUCGFBDDF-UHFFFAOYSA-N |
| SMILES | C1=CC(=CN=C1)C(=O)N |
| Molecular formula | C₆H₆N₂O |
| Molecular weight | 122.12 Da |
| Solubility | Freely water-soluble — unlike most lipid-soluble actives (retinoids, vitamins A/E); dissolves readily in aqueous formulations |
| Class | Pyridine-3-carboxamide; amide form of nicotinic acid (niacin) |

## Mechanism of action

### (a) Epidermal barrier repair — ceramide and lipid synthesis

Niacinamide stimulates biosynthesis of ceramides and other stratum corneum lipids (cholesterol, free fatty acids) in cultured human keratinocytes. Tanno et al. (2000) demonstrated that 1–10 mM nicotinamide in keratinocyte culture significantly increased ceramide content, reduced transepidermal water loss (TEWL), and improved skin permeability barrier function [^tanno2000]. This effect is the primary mechanistic rationale for niacinamide in products targeting dry, aged, or barrier-compromised skin.

Ceramide content in aging skin declines with age, contributing to the characteristic dryness and impaired wound healing of elderly skin. Barrier repair addresses a functional deficit that accumulates independently of the extrinsic photoaging (UV) process.

### (b) Melanin transfer inhibition — PAR-2 antagonism

Hakozaki et al. (2002) identified niacinamide as an inhibitor of melanosome transfer from melanocytes to keratinocytes, proposing the mechanism as antagonism of the protease-activated receptor-2 (PAR-2) on keratinocytes [^hakozaki2002]. PAR-2 activation by skin serine proteases promotes phagocytosis of melanocyte-delivered melanosomes; niacinamide interferes with this uptake step, reducing the keratinocyte pigment load and lightening visible hyperpigmentation (solar lentigines, post-inflammatory hyperpigmentation, melasma).

This mechanism operates downstream of melanin synthesis. It is therefore complementary to — and not competitive with — tyrosinase inhibitors (kojic acid, arbutin) that act upstream. Clinical studies show niacinamide reduces dyspigmentation, particularly in photoaged Asian and Caucasian skin [^bisset2004] [^hakozaki2002].

#gap/needs-replication — The PAR-2 mechanism has not been confirmed by competitive binding assay or genetic knockdown in primary human keratinocytes. The Hakozaki 2002 paper has high citation count (n>380) and is operationally accepted but independent mechanistic confirmation by a separate lab would strengthen the claim.

### (c) Anti-inflammatory — NF-κB pathway and interleukin modulation

Niacinamide suppresses NF-κB signalling in keratinocytes and reduces production of pro-inflammatory cytokines including IL-1α, IL-6, and TNF-α. This accounts for its clinical benefit in acne vulgaris (seborrheic inflammation component) and for its tolerability advantage over retinoids (which trigger retinoic acid receptor-driven inflammatory cascade as an initial side-effect). The anti-inflammatory mechanism also contributes to erythema reduction in clinical studies.

### (d) Sebum regulation

At 2% topical concentration, niacinamide reduced facial sebum production by ~7–10% over 8 weeks vs placebo in a double-blind RCT [^draelos2006], with greater effects in sebum-rich facial zones (T-zone, forehead). Mechanism is not fully established; proposed effects include suppression of sebocyte differentiation signals or modulation of peroxisome proliferator-activated receptor (PPAR) activity in sebaceous glands.

### (e) NAD+/sirtuin effects at high oral doses (separate indication)

At high oral doses (500–1000 mg/day), systemic niacinamide does shift cellular NAD+ pools and can activate sirtuin-dependent DNA repair pathways in keratinocytes. This is the operative mechanism for oral nicotinamide's clinically validated role in non-melanoma skin cancer prevention (ONTRAC trial — see below). At typical topical concentrations, this pathway is not relevant because systemic absorption from skin application is negligible.

## Clinical evidence — topical anti-aging

### Landmark RCTs

**Bissett et al. 2004 (P&G; Int J Cosmet Sci)** — randomised double-blind vehicle-controlled study of 5% niacinamide moisturiser in n=50 white women with moderate facial photodamage over 12 weeks [^bisset2004]. Primary endpoints: cutaneous surface topography (silicone casts), spectrophotometry (yellowing, red blotchiness), clinical photography grading. Results: significant improvement vs vehicle in fine lines/wrinkles, skin yellowing, hyperpigmented spots, red blotchiness, and skin elasticity. Effect sizes were moderate. This is the most-cited efficacy RCT for topical niacinamide in photoaged Caucasian skin.

**Hakozaki et al. 2002 (P&G; Br J Dermatol)** — mechanistic + clinical study; n=18 Japanese women, 5% niacinamide vs vehicle on separate facial sides, 8 weeks [^hakozaki2002]. Primary endpoint: spectrophotometric individual typology angle (ITA) — a measure of skin lightness. Result: significant reduction in dyspigmentation on niacinamide side. Also established the in vitro PAR-2-based mechanism in co-culture.

**Shariff et al. 2022 (Int J Cosmet Sci)** — randomised double-blind split-face RCT of 0.4% 4-hexylresorcinol + 3% niacinamide combination vs 3% niacinamide alone; n=44 completing all study phases (50 enrolled, 6 withdrew for non-product-related reasons); Chinese women aged 35–60 years (Shanghai); 12 weeks [^shariff2021]. Primary endpoints: skin tone evenness (spectrophotometric L*), hyperpigmentation spots, fine lines/wrinkles on crow's feet and perioral area, skin firmness (Cutometer R2/R7), hydration (Corneometer), TEWL. Result: combination significantly superior to 3% niacinamide alone on hyperpigmentation spots (L* by spectrophotometry, all timepoints p<0.005), fine lines/wrinkles (from week 4 onward), and skin firmness; niacinamide-alone arm significant vs baseline for all endpoints. No product-related adverse events. Documents synergy between tyrosinase inhibitor (4-hexylresorcinol) and melanin transfer inhibitor (niacinamide).

**Vergilio & Leonardi 2024 (Curr Med Chem)** — double-blind RCT of topical niacinamide formulation + 5 MHz ultrasound vs formulation alone vs ultrasound alone vs control; n=unclear (paper behind paywall) [^vergilio2024]. Endpoints included hydration, TEWL, and photographic aging scores. The combination arm outperformed niacinamide alone, suggesting physical-enhancement of penetration may boost barrier-repair endpoints.

**Ghasemiyeh et al. 2025 (Sci Rep)** — randomised double-blind case-controlled trial; three parallel arms: (A) niosomal TXA 2%/niacinamide 2% cream twice daily; (B) conventional TXA 5%/niacinamide 4% cream; (C) hydroquinone 4% cream; n=99 enrolled (33/group); 77 completed the 3-month treatment course; Iranian patients with melasma; 3 months [^ghasemiyeh2025]. Primary endpoints: melanin index (MI) and modified Melasma Area and Severity Index (mMASI). Result: all three groups showed significant reduction in MI and mMASI (p<0.001) with no statistically significant difference between groups — niacinamide-containing arms non-inferior to hydroquinone for both primary endpoints. ADR rate significantly higher in HQ group (18.18%) vs niacinamide arms (~3%; p=0.033). Supports niacinamide as a viable hydroquinone-free alternative in melasma management with superior safety profile.

### Concentration range and dosing

Most evidence is from 2–5% topical formulations. Clinical studies (Bissett 2004, Hakozaki 2002) used 5%. Marketed products commonly range 2–10%; no evidence that >5% adds meaningfully to efficacy for hyperpigmentation or anti-aging endpoints. Formulation vehicle, pH, and skin penetration enhancers are likely more relevant than concentration above 5%.

## Oral niacinamide — skin cancer prevention (ONTRAC trial)

Distinct from the topical cosmetic use case, oral nicotinamide at 500 mg twice daily (1000 mg/day) has clinically validated efficacy in reducing new non-melanoma skin cancers in high-risk patients.

**Chen et al. 2015 (NEJM; ONTRAC trial)** — Phase 3 RCT; n=386 immunocompetent adults with two or more non-melanoma skin cancers (NMSC) in the past 5 years; oral nicotinamide 500 mg BID vs placebo × 12 months; primary endpoint: new NMSC at 12 months [^chen2015]. Result: 23% reduction in new BCCs and SCCs in the nicotinamide arm (RR ~0.77; 95% CI not confirmed from abstract — verify against primary source). Secondary endpoint: new actinic keratoses — significant reduction. Mechanism: oral nicotinamide replenishes UV-depleted cellular NAD+ in UV-exposed keratinocytes, restoring NAD+-dependent DNA damage repair (PARP1 activity) and reducing UV-induced immunosuppression.

**This evidence stream is categorically different from topical anti-aging use** — the oral dose (1000 mg/day) achieves systemic NAD+ supplementation that topical application does not; the indication is chemoprevention of UV-driven cancer, not cosmetic aging. This trial is the strongest human evidence that niacinamide engages NAD+/DNA repair biology, but this pathway is not operative for topical cosmetic formulations.

**Important caveats from post-ONTRAC literature (supersession candidates — flag for main agent):**

- **Allen et al. 2023 (NEJM)** [^allen2023] — ONTRANS trial; ONTRAC follow-up RCT in organ-transplant recipients (immunosuppressed); n=158; same dose (500 mg BID); 12 months. Result: rate ratio 1.0 (95% CI 0.8–1.3; p=0.96) — **no reduction in keratinocyte cancers or actinic keratoses**. Conclusion: the ONTRAC benefit does not extend to immunosuppressed populations. The mechanism (NAD+-mediated restoration of UV-immunosuppression) may be conditional on intact immune function. This limits the generalizability of the ONTRAC finding and represents a clinically important qualification.

- **Tosti et al. 2023 (Nutrients)** [^tosti2023] — systematic review and meta-analysis; 4 intervention trials pooled (immunocompetent + immunosuppressed). Overall RRs non-significant: SCC 0.81, BCC 0.88, NMSC 0.82. Conclusion: "insufficient evidence that oral nicotinamide therapy significantly reduces the number of keratinocyte cancers." Driven in part by inclusion of the null-Allen 2023 transplant trial.

The ONTRAC (Chen 2015) immunocompetent finding remains the strongest single RCT, but the overall evidence base is now mixed. The wiki should not present oral nicotinamide's NMSC-preventive effect as definitively established. #gap/contradictory-evidence — immunocompetent vs immunosuppressed populations show divergent results; mechanism may require intact immune surveillance. Flagged for re-seeding of ONTRAC section by main agent.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Yes — NAD+-PARP repair and ceramide synthesis both active in human skin |
| Phenotype conserved in humans? | Yes — skin barrier decline and hyperpigmentation are human-validated phenomena |
| Replicated in humans? | Yes (topical anti-aging RCTs); Yes (oral chemoprevention ONTRAC RCT) |

## Tolerability and safety

Niacinamide is among the best-tolerated active skincare ingredients:

- **No photosensitivity** — unlike retinoids or alpha-hydroxy acids, no increased UV sensitivity at standard topical concentrations. Can be applied AM or PM.
- **Pregnancy** — considered safe at topical doses (no systemic absorption); widely used in pregnancy skincare.
- **Compatibility with retinoids** — niacinamide and retinoids are commonly combined; niacinamide reduces the retinoid irritation response (dryness, peeling, erythema), making it a functional tolerability buffer per the [[retinoids]] MOC for the R41 retinoid class. #gap/needs-replication — the tolerability-buffer mechanism is empirically noted in clinical guidelines but formal mechanistic studies (does niacinamide reduce RAR-driven inflammatory gene expression?) are limited.
- **Niacinamide vs niacin flushing** — niacinamide does NOT cause niacin-flush (prostaglandin D2-mediated cutaneous vasodilation). The two are isomers: niacin = nicotinic acid (carboxylic acid group); niacinamide = nicotinamide (amide group). The amide does not bind the HCA2 (GPR109A) receptor responsible for flushing.
- **Oral niacinamide safety** — at the ONTRAC dose (500 mg BID), well-tolerated; reversible nausea in a minority of participants. At very high doses (>3 g/day), hepatotoxicity risk increases; ONTRAC dose (1 g/day) is well within safe range.

## Cross-mechanism combinations

### Niacinamide + retinoids (R41 class)

The most clinically relevant combination. Tretinoin (all-trans retinoic acid) and retinol are the gold-standard topical anti-aging actives with the strongest evidence for collagen synthesis and MMP suppression (see [[retinoids]]). Their limitation is irritancy — initial weeks cause erythema, scaling, and dryness from RAR-driven retinoid dermatitis. Niacinamide co-applied (same formulation or separate product) reduces these side effects via barrier repair and anti-inflammatory activity, enabling higher retinoid tolerability and adherence. Common layered or pre-mixed formulations. #gap/long-term-unknown — whether the niacinamide-retinoid combination is superior to retinoid alone for collagen endpoints (as opposed to just better tolerated) has not been rigorously tested with appropriate powering.

### Niacinamide + vitamin C (ascorbic acid)

Historically, mixing niacinamide and vitamin C in the same formulation was warned against due to a theoretical concern about formation of nicotinic acid (via a Maillard-like reaction) causing flushing. Modern formulation chemistry has largely dismissed this at typical cosmetic use concentrations and storage conditions: the reaction rate is negligible at room temperature and typical product stability windows. However, some formulators still separate the two actives (AM vs PM application) as a precautionary convention. Stability testing in specific formulations is required to confirm.

### Niacinamide + tyrosinase inhibitors (for hyperpigmentation)

Niacinamide (melanin transfer inhibition, post-synthesis) + tyrosinase inhibitors such as tranexamic acid, kojic acid, arbutin, or 4-hexylresorcinol (melanin synthesis inhibition, pre-synthesis) are mechanistically complementary. Combination is clinically supported by Shariff 2021 [^shariff2021] and by the Ghasemiyeh 2025 tranexamic acid/niacinamide RCT [^ghasemiyeh2025].

### Niacinamide + ceramides (barrier stack)

Niacinamide + topical ceramide mixtures (ceramide 1, 3, 6-II) used in barrier-focused products (e.g., CeraVe formulations) provide complementary mechanisms: niacinamide stimulates endogenous ceramide synthesis while exogenous ceramides directly replenish the barrier. No RCT specifically addresses this combination vs either component alone as of 2026. Empirically regarded as synergistic by formulation chemists.

## Limitations and gaps

- **No evidence for collagen induction comparable to retinoids** — the most clinically meaningful anti-aging endpoint (dermal collagen synthesis, MMP suppression) is driven by retinoids via RAR transcriptional programs. Niacinamide does not share this mechanism. Claims in some popular sources that niacinamide "boosts collagen" are not well-supported by direct mechanistic data at cosmetic concentrations. #gap/unsourced — a robust human biopsy study directly measuring collagen synthesis post-niacinamide is not confirmed in my knowledge; verify against current literature.
- **PAR-2 mechanism not independently confirmed** — the foundational mechanistic claim (Hakozaki 2002) has high citation count but the specific PAR-2 antagonism has not been validated by independent labs using competitive binding assays. #gap/needs-replication.
- **Oral vs topical: entirely different evidence streams** — the ONTRAC chemoprevention evidence (oral 1 g/day) cannot be cited to support topical cosmetic anti-aging claims. The two routes have distinct mechanisms, exposures, and endpoints.
- **No head-to-head RCT vs tretinoin** with appropriate power for a composite skin-aging primary endpoint. Most comparisons are either uncontrolled or use hyperpigmentation as a sole endpoint.
- **`clinical-trials-active: 1`** — only one active registered trial specifically testing niacinamide topically for skin aging as of the ClinicalTrials.gov query (NCT07280637 — periocular wrinkles, NA phase, niacinamide as part of a combination injection; not a standalone niacinamide topical trial). The dominant evidence base is historical RCTs from the 2000s–2020s.
- Long-term (>1 year) data on topical niacinamide for facial aging endpoints is sparse. #gap/long-term-unknown.

## See also

- [[nmn]] — NAD+ precursor; distinct systemic mechanism; do not conflate with topical niacinamide
- [[nr]] — nicotinamide riboside; also a NAD+ precursor; distinct from topical niacinamide
- [[interventions/pharmacological/nad-precursors]] — class page for systemic NAD+ precursors
- [[retinoids]] — R41 class; primary evidence-based anti-aging topical class; commonly combined with niacinamide
- [[skin-aging]] — aging phenotype page (implicit stub; may not exist yet)
- [[keratinocytes]] — cell type (implicit stub)
- [[melanocytes]] — cell type (implicit stub)
- [[melanogenesis]] — process page (implicit stub)
- [[ascorbic-acid]] — companion ingredient; vitamin C (R42 sister compound)
- [[chronic-inflammation]] — hallmark
- [[loss-of-proteostasis]] — hallmark

## Footnotes

[^tanno2000]: doi:10.1111/j.1365-2133.2000.03705.x · Tanno O, Ota Y, Kitamura N, Katsube T, Inoue S · *Br J Dermatol* 2000;143(3):524–531 · in-vitro · model: cultured human keratinocytes; nicotinamide 1–10 mM 24–72 h; ceramide content + TEWL measured · n=not reported (cell culture) · **abstract-only verification** — local PDF not available.

[^hakozaki2002]: doi:10.1046/j.1365-2133.2002.04834.x · Hakozaki T, Minwalla L, Zhuang J, Chhoa M, Matsubara A, Miyamoto K, Greatens A, Hillebrand GG, Bissett DL, Boissy RE · *Br J Dermatol* 2002;147(1):20–31 · in-vitro + rct · n=18 Japanese women (clinical split-face) · 5% niacinamide vs vehicle, 8 weeks · spectrophotometric ITA primary endpoint · significant dyspigmentation reduction; PAR-2 antagonism mechanism proposed in keratinocyte-melanocyte co-culture · **abstract-only verification** — local PDF not available.

[^bisset2004]: doi:10.1111/j.1467-2494.2004.00228.x · Bissett DL, Miyamoto K, Sun P, Li J, Berge CA · *Int J Cosmet Sci* 2004;26(5):231–238 · rct · n=50 white women · 5% niacinamide moisturiser vs vehicle, 12 weeks · multiple photoaging endpoints (silicone cast topography, spectrophotometry, clinical grading) · significant improvements in fine lines, yellowing, hyperpigmented spots, red blotchiness, elasticity · **abstract-only verification** — local PDF not available.

[^draelos2006]: doi:10.1080/14764170600717704 · Draelos ZD, Matsubara A, Smiles K · *J Cosmet Laser Ther* 2006;8(2):96–101 · rct · n not confirmed from abstract · 2% niacinamide vs vehicle, 8 weeks · sebum excretion rate measured (Sebutape); ~7–10% reduction in sebum excretion in niacinamide arm · **abstract-only verification** — local PDF not available.

[^chen2015]: doi:10.1056/NEJMoa1506197 · Chen AC, Martin AJ, Choy B, Fernández-Peñas P, Dalziell RA, McKenzie CA, Scolyer RA, Dhillon HM, Vardy JL, Kricker A, St George G, Chinniah N, Halliday GM, Damian DL · *N Engl J Med* 2015;373(17):1618–1626 · rct · n=386 immunocompetent adults with ≥2 prior NMSCs · oral nicotinamide 500 mg BID vs placebo × 12 months · primary endpoint: new NMSC at 12 months · ~23% reduction in new BCC/SCC; significant actinic keratosis reduction · ONTRAC trial · **abstract-only verification** — local PDF not available (not_oa).

[^shariff2021]: doi:10.1111/ics.12759 · Shariff R, Du Y, Dutta M, Kumar VS, Thimmaiah S, Doraiswamy C, et al. (Damodaran A, corresponding) · *Int J Cosmet Sci* 2022;44(1):103–117 · rct · n=44 completing/50 enrolled · randomised double-blind split-face · 0.4% 4-hexylresorcinol + 3% niacinamide vs 3% niacinamide alone, 12 weeks · Chinese women 35–60 years (Shanghai) · primary endpoints: spectrophotometric L* (skin lightness), hyperpigmentation spots, fine lines/wrinkles, skin firmness, TEWL, hydration · combination significantly superior on hyperpigmentation (all timepoints p<0.005) and fine lines/wrinkles (from week 4); niacinamide arm significant vs baseline for all endpoints · **PDF verified**.

[^vergilio2024]: doi:10.2174/0109298673325125240813075250 · Vergilio MM, Leonardi GR · *Curr Med Chem* 2024 (online ahead of print) · rct · double-blind placebo-controlled; n not confirmed · topical niacinamide ± 5 MHz ultrasound; hydration, TEWL, photographic aging endpoints · combination arm outperformed formulation alone · **abstract-only verification** — local PDF not available.

[^ghasemiyeh2025]: doi:10.1038/s41598-025-26693-8 · Ghasemiyeh P, Haghighi NF, Dastgheib L, Ranjbar S, Mohammadi-Samani S · *Sci Rep* 2025;15:42739 · rct · randomised double-blind case-controlled · 3 arms: (A) niosomal TXA 2%/niacinamide 2% twice daily; (B) conventional TXA 5%/niacinamide 4%; (C) hydroquinone 4% · n=99 enrolled (33/group); n=77 completed 3-month treatment · Iranian melasma patients · primary endpoints: MI + mMASI · all groups significant reduction (p<0.001); no significant difference between groups — niacinamide arms non-inferior to HQ · ADR rate: ~3% niacinamide arms vs 18.18% HQ (p=0.033) · **PDF verified**.

[^allen2023]: Allen NC, Martin AJ, Snaidr VA, Eggins R, Chong AH, Fernandéz-Peñas P, Gin D, Sidhu S, Paddon VL, Banney LA, Lim A, Upjohn E, Schaider H, Ganhewa AD, Nguyen J, McKenzie CA, Prakash S, McLean C, Lochhead A, Ibbetson J, Dettrick A, Landgren A, Allnutt KJ, Allison C, Davenport RB, Mumford BP, Wong B, Stagg B, Tedman A, Gribbin H, Edwards HA, De Rosa N, Stewart T, Doolan BJ, Kok Y, Simpson K, Low ZM, Kovitwanichkanont T, Scolyer RA, Dhillon HM, Vardy JL, Chadban SJ, Bowen DG, Chen AC, Damian DL · doi:10.1056/NEJMoa2203086 · *N Engl J Med* 2023 Mar 2;388(9):804-812 · PMID 36856616 · rct (phase 3, randomized 1:1, placebo-controlled) · n=158 (79 nicotinamide / 79 placebo); organ-transplant recipients (immunosuppressed) with ≥2 keratinocyte cancers in past 5 yr · oral nicotinamide 500 mg BID vs placebo × 12 months · primary endpoint: new keratinocyte cancers at 12 months · **rate ratio 1.0; 95% CI 0.8–1.3; P=0.96 (null)**; secondary endpoints (SCC, BCC, AK counts, QoL) also null; trial stopped early for poor recruitment; ONTRANS trial · ANZCTR ACTRN12617000599370 · contrasts with Chen 2015 ONTRAC RR ~0.77 in immunocompetent patients — defines a population-context translation gap for oral nicotinamide NMSC chemoprevention; mechanism (NAD+-mediated restoration of UV-immunosuppression) likely conditional on intact immune surveillance · abstract-verified via PubMed efetch; full PDF not locally archived

[^tosti2023]: doi:10.3390/nu16010100 · Tosti G, Pepe F, Gnagnarella P, Silvestri F, Gaeta A, Queirolo P, Gandini S · *Nutrients* 2023 Dec 26;16(1):100 · PMID 38201930 · systematic-review + meta-analysis · 4 intervention trials pooled (immunocompetent + immunosuppressed populations) · oral nicotinamide for keratinocyte-cancer prevention · overall RRs non-significant: SCC 0.81, BCC 0.88, NMSC 0.82 · conclusion: insufficient evidence that oral nicotinamide significantly reduces keratinocyte cancers · result heavily influenced by inclusion of Allen 2023 null-transplant trial · abstract-verified via PubMed efetch; full PDF not locally archived
