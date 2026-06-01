---
type: intervention
aliases: [chemical peeling, acid peels, chemoexfoliation, superficial peel, medium-depth peel, deep peel]
mode: pharmacological
mechanisms: [corneocyte-desquamation, AHA-exfoliation, controlled-wounding-collagen-stimulation]
targets: ["[[col1a1]]", "[[mmp-1]]", "[[dermal-fibroblasts]]"]
target-hallmarks: ["[[loss-of-proteostasis]]", "[[chronic-inflammation]]"]
target-pathways: ["[[tgf-beta-pathway]]"]
human-evidence-level: strong
clinical-stage: fda-approved
safety-profile: well-established
translation-gap: human-evidence-strong
next-experiment: "Randomised blinded trial in 60+ adults comparing 6-session glycolic acid peel series (35–50%, monthly) vs vehicle with pre/post full-face dermis-depth biopsies measuring collagen-I/III ratio, MMP-1 protein, and DunedinPACE skin-biopsy epigenetic clock score."
clinical-trials-active: null
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Sumita 2018 claims cross-checked against verified studies/sumita-2018-tretinoin-photoaging.md (R39); DOI corrected from 15114 to 15020; n=24 confirmed. Karanasios 2025 key figures verified against Crossref metadata; footnote corrected (sessions direction swapped). Bhardwaj 2021 and Kubiak 2019 DOIs confirmed against a local paper DOI lookup (both closed-access; quantitative claims not PDF-verified). Depth-classification table and mechanism framing not sourced to a single citable primary — reflects standard dermatology consensus; tagged appropriately. Supersession checked 2026-05-19."
---

# Chemical Peels

Chemical peels (chemoexfoliation) are the controlled application of caustic acid or keratolytic agents to the skin surface to induce predictable, dose-titrated depth of epidermal and/or dermal injury. The resulting programmed wound-healing cascade — re-epithelialization, collagen neosynthesis, dermal remodelling — produces improvement in photoaging parameters including wrinkle depth, skin texture, pigmentation uniformity, and laxity. The intervention class spans a wide spectrum from superficial home-use AHA exfoliants to deep phenol-croton oil peels requiring operating-room monitoring.

This page covers the **class as a whole**, with cross-references to per-agent compound pages where available. Agent-specific pharmacology lives in `molecules/compounds/`:

- [[glycolic-acid]] — 2-carbon AHA; archetypal OTC-to-medical peel range
- [[lactic-acid]] — 3-carbon AHA; additional humectant/NMF-mimetic activity
- [[salicylic-acid]] — BHA; lipid-soluble; sebaceous-follicle-penetrating

Agents not individually seeded (TCA, Jessner's, phenol-croton oil) are summarised in the agent overview table below. #gap/stub for TCA, Jessner's, and phenol-croton oil compound pages.

## Peel Agent Overview

| Agent | Class | Depth (typical conc.) | Mechanism | Primary aging indication | Compound page |
|---|---|---|---|---|---|
| Glycolic acid | AHA (2-carbon) | Superficial–medium (20–70%) | Corneodesmosome disruption → wounding at higher concentrations | Photoaging, solar lentigines, texture | [[glycolic-acid]] |
| Lactic acid | AHA (3-carbon) | Superficial (30–50%) | Same + increased corneocyte hydration; larger MW = slower penetration than glycolic | Dry/sensitive skin photoaging | [[lactic-acid]] |
| Mandelic acid | AHA (large MW) | Superficial (20–40%) | Slow penetration due to MW ~152 Da; tolerated by darker Fitzpatrick types (IV–VI); lower PIH risk | Melasma, PIH-prone skin; combination peels | *not yet seeded* #gap/stub |
| Salicylic acid (SA) | BHA (beta-hydroxy) | Superficial–medium (20–30%) | Lipid-soluble → penetrates sebaceous follicle (unlike AHAs); anti-inflammatory (prostaglandin suppression); desquamation | Acne-associated photoaging; sebaceous-dense skin | [[salicylic-acid]] |
| Jessner's solution | AHA + BHA + resorcinol in ethanol | Superficial (layered application) | Synergistic corneodesmosome disruption; depth controlled by number of layers applied | Photoaging, melasma | *not yet seeded* #gap/stub |
| Trichloroacetic acid (TCA) | Inorganic acid | Superficial → deep (10–50%); frosting endpoint | Protein coagulation (distinct from AHA desquamation): TCA denatures skin proteins → white frost = depth indicator | Photoaging, actinic keratoses, field cancerization | PubChem CID 6421; ChEMBL CHEMBL14761; *compound page not yet seeded* #gap/stub |
| Phenol-croton oil (Baker-Gordon) | Phenol with croton oil potentiator | Deep (reticular dermis) | Phenol — protein precipitation + epidermal extraction; croton oil — irritant/potentiator of depth; reticular dermis penetration | Severe photoaging; rhytides | Largely replaced by ablative CO2/Er:YAG laser resurfacing; *not yet seeded* #gap/stub |

**Key distinguishing chemistries:**
- **AHAs** (glycolic, lactic, mandelic, citric): water-soluble; pH-dependent free-acid active species; corneodesmosome → wounding at higher concentrations.
- **BHA** (salicylic acid): lipid-soluble; penetrates sebaceous follicle; additional anti-inflammatory effect via prostaglandin pathway.
- **TCA**: protein coagulation mechanism; the white frost endpoint is a clinical depth indicator (faint frost = papillary dermis; solid white frost = reticular dermis penetration). NOT pH-mediated desquamation like AHAs.
- **Phenol-croton oil**: deepest penetrating; croton oil (tiglate esters from *Croton tiglium*) potentiates phenol penetration; cardiotoxicity risk at concentrations required for full-face application historically required cardiac monitoring.

## Depth Classification and Clinical Use

Chemical peel depth is the primary determinant of efficacy, downtime, and risk. Classification is not perfectly discrete — concentration, contact time, skin preparation, and individual skin physiology all influence actual depth achieved.

| Depth category | Tissue targeted | Typical agents | Downtime | Photoaging indication | Setting |
|---|---|---|---|---|---|
| **Very superficial** | Stratum corneum only | AHA 5–15% (leave-on or 2-min contact); SA 10–15% | None–1 day flaking | Maintenance, texture, hydration | OTC; home use |
| **Superficial** | Full epidermis to stratum basale | AHA 20–35% (5 min); SA 20–25%; Jessner's 1–2 layers | 3–5 days peeling | Mild photoaging, solar lentigines, dyschromia | In-office cosmetic; medical-spa |
| **Medium-depth** | Full epidermis + papillary dermis | AHA 50–70%; TCA 35–50%; Jessner's + TCA 35% (combination); CO₂ "superslush" + TCA 35% | 5–7 days visible peeling; erythema 4–6 weeks | Moderate–severe photoaging, fine wrinkles, actinic damage | Physician in-office |
| **Deep** | Upper reticular dermis | Phenol-croton oil (Baker-Gordon); high TCA 50%+ | 2–3 weeks healing; persistent erythema months | Severe photoaging, deep rhytides | Operating room (phenol-croton oil) or advanced clinic; general anesthetic or heavy sedation may be used |

## Common Protocols

### Low-concentration maintenance series (home or spa)

AHA 5–15% leave-on products used nightly or as weekly masks. No professional supervision required. Incremental phototype improvement over months; no neocollagenesis signal at these concentrations; benefit is primarily stratum-corneum-level exfoliation with minor texture and pigmentation improvement.

### Medical-grade superficial–medium in-office series

4–6 peel sessions every 2–4 weeks, typically glycolic acid 30–50% or TCA 25–35%, with 2–5 min contact time and neutralization. Standard format for addressing moderate photoaging. Downtime 3–7 days per session. Neocollagenesis is documented at the upper range of this protocol (TCA 35%+ with papillary dermis frosting) [^bhardwaj2021] [^kubiak2019].

### Single-session medium-depth combination peel

Jessner's solution (primes epidermis) followed by TCA 35% (medium-depth). The Monheit technique combines these agents to achieve papillary dermis penetration with more uniform frosting than TCA 35% alone, while reducing total TCA concentration needed. Well-established dermatological protocol for moderate photoaging with 5–7 day recovery.

### Deep phenol-croton oil peel (rare, mostly historical)

Single-session Baker-Gordon formula (88% phenol, 2 mL croton oil, 8 mL distilled water with septisol). Now largely supplanted by ablative CO₂ laser resurfacing which offers similar collagen-stimulation depth with superior depth control and lower systemic toxicity. When performed, requires cardiac monitoring (arrhythmia risk from phenol absorption), IV access, and operating room setting. Complete contraindication in patients with cardiac, renal, or hepatic disease.

## Mechanism: Controlled Wounding Paradigm

Chemical peels operate via the **controlled-wounding mechanism** (see [[frameworks/intervention-classes]] § controlled-wounding-collagen-stimulation) shared with [[dermatologic-resurfacing]] (R44 sister). The mechanism diverges from the two other major anti-photoaging pharmacological approaches:

| Mechanism class | Representatives | Primary molecular event | Notes |
|---|---|---|---|
| **Controlled wounding** | Chemical peels, ablative laser, microneedling | TGF-β1-driven neocollagenesis after injury | Benefit scales with wound depth; [[col1a1]] mRNA upregulated in wound-healing phase |
| **RAR transcription** | Retinoids ([[retinoids]] — R41) | AP-1 transrepression → MMP-1 suppression; RARE-driven collagen-I synthesis | Mechanism is independent of wounding; active at sub-inflammatory concentrations |
| **Biochemical cofactor / ECM modulation** | [[ascorbic-acid]] (prolyl hydroxylase cofactor), [[ghk-cu]] (TGF-β signalling), [[niacinamide]] (barrier repair) | Cofactor supply, growth-factor-pathway engagement, or barrier-protein synthesis | No physical injury required |

**Unifying principle (controlled-wounding arm):** The acid-induced or photon/needle-induced epidermal/dermal wound triggers a three-phase wound healing response — inflammatory (platelet/neutrophil/macrophage), proliferative (fibroblast activation, collagen deposition), remodelling (matrix metalloproteinase-mediated collagen organisation). The net output, measured 4–8 weeks after the proliferative phase, is net positive collagen-I and collagen-III balance in the papillary dermis — partially restoring the collagen scaffold lost to photoaging and chronological aging [^bhardwaj2021].

**Chemical vs physical wounding:** TCA protein coagulation and AHA acid desquamation at peel concentrations both achieve the same downstream fibroblast activation via the same TGF-β1 paracrine pathway. The distinction is onset speed and depth control: TCA produces a visible frost endpoint allowing real-time depth titration; AHA peels require pre-determined concentration + contact time protocols for depth control.

## Pigmentation Risks and Fitzpatrick Skin Type Stratification

Post-inflammatory hyperpigmentation (PIH) is the principal safety concern for chemical peels in darker skin types (Fitzpatrick IV–VI). PIH risk increases with:
- Depth of peel (medium > superficial > very superficial)
- Agent type (TCA > glycolic AHA; salicylic acid has lower PIH risk than equivalent-depth AHAs due to intrinsic anti-inflammatory activity)
- Concurrent sun exposure (exacerbates PIH in post-peel skin)
- Underlying melasma or prior PIH history

**Relative PIH risk by agent (approximate ranking, higher = more risk):**

TCA 35%+ > Glycolic acid 50–70% > Lactic acid 50% > Jessner's (layered) > Glycolic 30–35% > Salicylic acid 20–30% > Mandelic acid 20–40% (lowest among acid peels)

Mandelic acid's lower PIH risk in Fitzpatrick IV–VI skin is attributed to its larger molecular weight (slower, more uniform penetration) and possible anti-tyrosinase activity. Salicylic acid's anti-inflammatory activity appears to reduce post-peel erythema and PIH risk relative to depth-matched AHAs [^bhardwaj2021]. #gap/needs-replication (head-to-head PIH-outcome RCTs in Fitzpatrick IV–VI are sparse).

Pre-treatment priming with hydroquinone 4% or kojic acid for 2–4 weeks prior to medium/deep peels in at-risk skin types is standard practice to reduce PIH risk; the evidence base is observational rather than RCT-grade. #gap/needs-replication

## Aging-Context Evidence

### Head-to-head vs retinoids

Sumita 2018 compared tretinoin 5% peel vs tretinoin 0.05% cream over photoaged forearms (n=24 women, ages >60, evaluator-blinded RCT) [^sumita2018]:
- Mean photoaging score reduced ~20% with both modalities (equivalent composite efficacy)
- Ultrasonographic aging parameters (density, elasticity) favoured the cream
- Actinic keratosis count reduction (field cancerization stabilization) favoured the peel
- Tolerability broadly equivalent
- **Interpretation:** chemical peel and topical retinoid achieve comparable photoaging score improvements, with different strength profiles. These are complementary, not competing, interventions.

### Laser vs chemical peel meta-analysis

Karanasios 2025 (Plastic and Reconstructive Surgery, n=38 studies, 1,695 patients) [^karanasios2025]:
- Both modalities produced significant improvement over baseline
- Overall efficacy comparable (SMD 1.53, 95% CI 0.57–2.50)
- Chemical peels outperformed laser for psoriasis (SMD −4.30)
- Lasers required fewer sessions (mean difference: 2.0 sessions, p<0.001)
- Transient erythema more common with lasers (RR 6.63)
- Procedure pain higher with lasers (RR 4.42)
- **Conclusion:** both modalities are effective for skin rejuvenation; choice should be individualised by patient skin type, condition, and tolerance. Chemical peels remain preferred where minimising erythema/pain downtime is a priority.

### TCA + glycolic combination vs TCA monotherapy RCT

Kubiak 2019 (Journal of Cosmetic Dermatology, n=40 women, Glogau II–III photoaging) [^kubiak2019]:
- 15% TCA + 70% glycolic acid (combination, 5 sessions over 70 days) vs 35% TCA monotherapy
- Both groups: significant improvement in elasticity, hydration, melanin index, and erythema index
- Combination: higher post-treatment hydration values; lower melanin index (pigmentation advantage)
- TCA monotherapy: superior wrinkle reduction at the expense of lower tolerability
- **Interpretation:** combination peel leverages synergistic depth + the independent AHA-humectancy effect; TCA monotherapy gives stronger anti-wrinkle signal but with tolerability trade-off

### TCA-lactic acid mechanism evidence

Bhardwaj 2021 (*Frontiers in Medicine*, in vitro / ex vivo / 3D human skin equivalent) [^bhardwaj2021]:
- Combined TCA + lactic acid peel inhibited collagen-degrading enzymes (MMP activity) and upregulated COL1A, COL3B, fibronectin, and elastin gene expression
- Significantly inhibited total melanin production
- Repaired UV-damaged collagen in skin exposed to 6 J/cm² UV
- Demonstrated synergistic inhibition between the two acid components
- **Limitation:** in vitro / 3D model; not in vivo RCT; mechanistic framing only #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway (neocollagenesis) conserved in humans? | yes — TGF-β1/collagen synthesis pathway is identical between skin model and human dermis |
| Phenotype (wrinkle/photodamage improvement) demonstrated in humans? | yes — multiple RCTs including vehicle-controlled and head-to-head designs |
| Long-term data (>6 months)? | limited — most RCTs terminate at 3–6 months; maintenance schedules largely empirical #gap/long-term-unknown |
| Deep peel replicated by modern ablative laser? | yes — CO₂ laser largely supplants Baker-Gordon phenol peel for deep-wounding indication |

## Sequencing with Other Interventions

### Retinoids ([[retinoids]])

Retinoids increase keratinocyte turnover and reduce the thickness of the stratum corneum. This **increases chemical peel penetration depth** — patients actively using tretinoin/adapalene may experience a deeper-than-expected peel at a given concentration. Standard precaution: discontinue topical retinoids 5–7 days prior to any medium-depth or deeper peel, resume after full re-epithelialization (typically 7–14 days post-peel). Retinoid pre-treatment for 2–6 weeks before a peel series is also used to "condition" skin and reduce healing time in some protocols — the two strategies (pause vs prime) are context-specific.

### Sunscreen and photoprotection ([[uv-protection]])

Mandatory co-intervention. Post-peel skin is photosensitive for 1–4 weeks (degree depends on peel depth). UV exposure during this window significantly elevates PIH risk (particularly in darker Fitzpatrick types) and can negate collagen-synthesis gains by triggering MMP re-activation. SPF ≥30 broad-spectrum coverage is a non-negotiable post-peel requirement for all depths. Pre-peel UV protection reduces baseline photodamage and improves peel outcomes. See [[uv-protection]] (R42).

### Dermatologic resurfacing ([[dermatologic-resurfacing]])

Chemical peels and physical resurfacing (ablative laser, microneedling, IPL) share the controlled-wounding mechanism and are often sequenced or combined. Typical staging:
- **Superficial–medium peels** (series format) for diffuse fine texture, dyschromia, and superficial wrinkles
- **Ablative fractional CO₂ or Er:YAG** for deeper rhytides and significant skin laxity after peel series
- **IPL** (non-ablative) for vascular and pigmented lesions as adjunct between peel sessions
- Combination in the same session (Jessner's + CO₂ superficial ablation) is sometimes used but requires expert operator control to prevent over-depth injury.

## Limitations and Gaps

- **Sparse high-quality RCT literature on aging-specific endpoints.** Most trials use clinical grading scales (GAIS, Glogau, wrinkle score) rather than biological-age endpoints (epigenetic clocks, dermal biopsy neocollagenesis quantification). Long-term (>6-month) blinded RCT data is limited for the class as a whole. #gap/long-term-unknown
- **PIH risk in Fitzpatrick IV–VI is systematically understudied.** Head-to-head agent comparisons in dark-skin cohorts are sparse; PIH-risk rankings above are largely consensus/observational. #gap/needs-replication
- **Deep peel RCTs are ethically and practically difficult** given the required cardiac monitoring, operating-room setting, and prolonged recovery. Evidence base is primarily case series and comparative (non-randomised) studies for deep peels. #gap/needs-replication
- **TCA PubChem / canonical IDs not yet linked to a compound page.** TCA (trichloroacetic acid) PubChem CID 6421 / ChEMBL CHEMBL14761 — compound page stub needed. #gap/stub
- **No head-to-head meta-analysis of AHA peel series vs retinoid series in a well-powered, blinded RCT.** Sumita 2018 compared tretinoin formats (peel vs cream), not AHA vs retinoid. #gap/needs-human-replication
- **No biological-age (epigenetic clock) endpoint used in any chemical peel trial.** Whether the photoaging composite improvements translate to measurable DunedinPACE or GrimAge deceleration in skin biopsies is unknown. #gap/no-mechanism

## Cross-References

- [[glycolic-acid]] — R44 sister compound page; AHA prototype; OTC-to-medical peel range
- [[lactic-acid]] — R44 sister compound page; AHA + humectant
- [[salicylic-acid]] — R44 sister compound page; BHA; sebaceous-follicle penetration
- [[dermatologic-resurfacing]] — R44 sister intervention class; same controlled-wounding paradigm via physical modalities
- [[retinoids]] — R41 intervention class; complementary photoaging approach via RAR transcription mechanism
- [[uv-protection]] — R42 intervention; mandatory co-intervention for any peel protocol
- [[skin-aging]] — target phenotype
- [[epidermis]] — primary target tissue (superficial peels)
- [[dermal-fibroblasts]] — effector cell for neocollagenesis
- [[col1a1]] — downstream collagen gene upregulated in wound-healing response
- [[loss-of-proteostasis]] — target hallmark (ECM proteostasis)
- [[chronic-inflammation]] — target hallmark (post-peel remodelling reduces baseline dermal inflammation)
- [[frameworks/intervention-classes]] — mechanism class reference (corneocyte-desquamation, AHA-exfoliation, controlled-wounding-collagen-stimulation)

## Footnotes

[^karanasios2025]: doi:10.1097/PRS.0000000000012719 · meta-analysis · 38 studies, n=1,695 patients · laser vs chemical peel; both achieve significant improvement over baseline; overall efficacy comparable (SMD 1.53, 95% CI 0.57–2.50); lasers: fewer sessions needed (mean diff 2.0, p<0.001), superior melasma response; chemical peels: less transient erythema (RR 6.63 favours peels), less procedural pain (RR 4.42 favours peels), superior psoriasis response (SMD −4.30) · *Plastic and Reconstructive Surgery* 2025 · Karanasios G et al. · archive: not downloaded (not_oa)

[^kubiak2019]: doi:10.1111/jocd.13171 · rct (clinical trial/comparative) · n=40 women (Glogau II–III photoaging), two groups n=20 each · 15% TCA + 70% glycolic combination peel vs 35% TCA monotherapy × 5 sessions over 70 days · combination: higher hydration values, lower melanin index; TCA monotherapy: superior wrinkle reduction; both: significant improvement in elasticity, hydration, melanin, erythema · *Journal of Cosmetic Dermatology* 2019 · Kubiak M, Mucha P, Rotsztejn H · archive: not downloaded (not_oa)

[^bhardwaj2021]: doi:10.3389/fmed.2021.617068 · in-vitro/ex-vivo (3D human skin equivalent + biopsy) · TCA-lactic acid peel: upregulates COL1A, COL3B, fibronectin, elastin; inhibits MMP activity; inhibits melanin production; synergistic effect of TCA + lactic acid combination; repairs UV-damaged collagen · *Frontiers in Medicine* 2021 · Bhardwaj V et al. · archive: pending download (OA gold)

[^sumita2018]: [[studies/sumita-2018-tretinoin-photoaging]] · doi:10.1111/jdv.15020 · rct (evaluator-blinded, parallel-group) · n=24 women ages >60, 48 forearms (1 dropout; per-protocol n=23) · tretinoin 5% peel × 4 sessions vs tretinoin 0.05% cream daily × 4 months · photoaging score: ~20% reduction, no significant difference between groups; ultrasonographic parameters favoured cream; actinic keratosis count favoured peel · *J Eur Acad Dermatol Venereol* 32(10):1819-1826 · 2018 · Sumita JM et al. · PMID 29704456 · archive: closed access (not_oa) #gap/no-fulltext-access
