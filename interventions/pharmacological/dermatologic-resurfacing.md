---
type: intervention
aliases: [device-based resurfacing, laser resurfacing, fractional laser, ablative laser, non-ablative laser, microneedling, radiofrequency microneedling, HIFU, IPL skin rejuvenation, energy-based devices skin aging]
mode: pharmacological
mechanisms: ["controlled-wounding-collagen-stimulation", "fractional-photothermolysis", "microneedling-controlled-injury", "neocollagenesis"]
targets: ["[[col1a1]]", "[[col3a1]]", "[[wound-healing]]"]
target-hallmarks: ["[[loss-of-proteostasis]]"]
target-pathways: []
human-evidence-level: strong
clinical-stage: fda-approved
safety-profile: well-established
translation-gap: human-evidence-strong
next-experiment: "Head-to-head RCT of fractional ablative CO2 vs. fractional non-ablative 1550 nm vs. RF microneedling in adults 60+ using dermis-depth biopsy collagen-I immunohistochemistry at 3 months as a co-primary endpoint alongside validated Global Aesthetic Improvement Scale (GAIS), with DunedinPACE skin-specific epigenetic-clock readout to quantify whether neocollagenesis shifts epigenetic age in photoaged skin."
clinical-trials-active: null
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "All cited primary sources verified via Crossref + PubMed abstract (all 9 papers confirmed not_oa in a local paper archive; full-text not available but DOIs, study designs, and key quantitative claims cross-checked via publicly available abstracts). Corrections applied to Foppiani 2025 n, Vassão 2022 n, Sales study count, Haykal 2025 n and study count, Modena 2025 outcome measure, Robati 2020 DOI, Robati n, de Filippi Sartori year label and biopsy timing and design, Manstein 2004 subject description."
---

# Dermatologic Resurfacing — Device-Mediated Controlled Wounding

**TL;DR.** A family of device-mediated procedures — ablative lasers, non-ablative fractional lasers, intense pulsed light (IPL), mechanical microneedling, radiofrequency (RF) microneedling, monopolar RF, and focused ultrasound (HIFU) — that share a single unifying mechanism: **controlled, depth-calibrated tissue injury that triggers the programmed wound-healing cascade**, driving re-epithelialization and dermal fibroblast activation with net positive collagen synthesis (neocollagenesis). The delivery vector (photon, radio-wave, mechanical needle, ultrasound focus) determines injury depth and downtime but not the fundamental biology. This paradigm is the device-mediated parallel to [[chemical-peels]] (R44 sister page; acid-mediated wounding). Strong human evidence base (multiple Phase 2/3-equivalent RCTs, systematic reviews) across modalities for photoaging endpoints; effects are histologically confirmed via [[col1a1]] and [[col3a1]] neocollagenesis in dermis-depth biopsies.

**Schema decision (R44):** CLAUDE.md does not define a `mode: procedural` category; the closest available mode is `pharmacological` (in the broad sense of directly applied dermatologic therapy). This page uses `mode: pharmacological` with this note, and escalates the gap for a future CLAUDE.md update to add `mode: procedural` for device- and procedure-class intervention pages (see Limitations section).

This page **deliberately excludes** botulinum toxin (neuromuscular blocker; no collagen-stimulation mechanism; see Exclusions section) and dermal fillers (mechanical volume replacement). Both are valid clinical dermatology but outside this page's aging-mechanism focus.

---

## Modality Overview

| Device | Wavelength / energy | Primary mechanism | Injury depth | Downtime | Key indications | Key trial |
|---|---|---|---|---|---|---|
| **Ablative CO2 laser** | 10,600 nm | Epidermal ablation + dermal coagulation via water absorption; fractional MTZ arrays reduce healing time | Papillary → reticular dermis | 4–14 d (fractional: 4–7 d) | Severe photoaging, deep wrinkles, acne scars | Manstein 2004 [^manstein2004]; de Filippi Sartori 2022 [^defilippi2021] |
| **Ablative Er:YAG laser** | 2,940 nm | Precise epidermal ablation with minimal thermal spread (Er:YAG absorbed ~12–18× more by water than CO2) | Papillary dermis | 5–10 d | Moderate photoaging, pigmented lesions, superficial resurfacing | Robati 2020 [^robati2020] |
| **Non-ablative fractional 1550 nm (Fraxel Restore)** | 1,550 nm | Dermal MTZ heating without epidermal ablation; erbium-doped fiber laser | Mid-to-deep dermis | 2–4 d erythema | Fine lines, melasma, surgical scars | Foppiani 2025 [^foppiani2025] |
| **Non-ablative fractional 1927 nm thulium (Clear+Brilliant; Fraxel DUAL)** | 1,927 nm | Superficial epidermal targeting; thulium fiber laser | Superficial epidermis | 1–3 d | Pigmentation, fine lines, actinic damage; safer in darker skin types | Multiple sessions required; see Fitzpatrick note |
| **IPL (intense pulsed light)** | 500–1,200 nm broadband | Selective photothermolysis of chromophores (hemoglobin, melanin) via filtered broadband light | Epidermis (primarily) | Minimal (0–2 d) | Solar lentigines, vascular lesions, mild diffuse photoaging | Sales 2022 [^sales2022] |
| **Microneedling (mechanical)** | N/A — needle arrays 0.5–3 mm | Physical micro-channels via fine needles → wound-healing cascade; platelet activation, growth factor release | Papillary dermis (depth-adjustable) | 1–3 d | Fine lines, texture, acne scars, large pores; cost-accessible | Foppiani 2025 [^foppiani2025] |
| **RF microneedling** | RF (radiofrequency) + needle 0.5–4 mm | Mechanical channel + concurrent resistive RF heating at needle tips; dual dermal remodeling | Papillary–reticular dermis | 2–5 d | Skin laxity, acne scars, aging skin | Vassão 2022 [^vassao2022]; devices: Morpheus8, Genius, Vivace |
| **Monopolar RF (Thermage)** | RF, bulk heating | Resistive heating of entire dermis and subdermis; collagen fibril contraction + fibroblast activation | Full dermis + subdermis | Minimal (hours) | Skin tightening; mild wrinkles; not classic resurfacing | Vassão 2022 [^vassao2022] |
| **HIFU (Ultherapy)** | High-intensity focused ultrasound (~4–7 MHz) | Focused acoustic energy creates focal coagulation points at dermis/SMAS depth; mechanical + thermal | Deep dermis + SMAS (1.5–4.5 mm) | Minimal (hours–2 d) | Brow lift, jawline, submental; FDA-cleared brow lift + neck | Haykal 2025 [^haykal2025]; Modena 2025 [^modena2025] |

---

## Mechanism: Fractional Photothermolysis Paradigm

### Origin of the fractional concept

Manstein et al. 2004 (*Lasers in Surgery and Medicine*) introduced **fractional photothermolysis** as a transformative refinement of laser resurfacing [^manstein2004]. Before fractional devices, ablative CO2 lasers produced confluent wounds across the full treatment field — effective but slow to heal and high-risk for infection, dyspigmentation, and scarring. The key insight was:

**Replace confluent wounding with arrays of microscopic treatment zones (MTZs) separated by spared tissue columns.**

The intact epidermal tissue between MTZs acts as a cellular reservoir — keratinocytes migrate laterally from spared zones to re-epithelialize each MTZ within approximately 24 hours (Manstein 2004 prototype at ≥250 µm MTZ spacing) rather than the 7–14 days required for full-field ablation. Benefits: dramatically shorter downtime, lower risk of post-inflammatory hyperpigmentation (PIH), and feasibility of treatment in darker skin types (Fitzpatrick III–V) that were previously contraindicated for ablative lasers.

Note: Manstein 2004's original prototype used a 1.5 µm wavelength device (non-ablative, not CO2 or Er:YAG). The fractional principle was subsequently adopted by CO2 and Er:YAG ablative platforms, and independently by non-ablative 1550 nm and 1927 nm lasers.

This principle is now applied across modalities:
- **Ablative fractional (CO2, Er:YAG):** MTZs of complete epidermal ablation + dermal coagulation with spared bridges
- **Non-ablative fractional (1550 nm, 1927 nm):** MTZs of dermal thermal injury without epidermal ablation; the epidermis remains intact as a biological dressing

### Wound-healing cascade — the shared biological mechanism

Regardless of delivery modality, all resurfacing procedures initiate the same biological sequence, anchored in the [[wound-healing]] process page:

1. **Immediate phase (0–72 h):** platelet degranulation → PDGF, TGF-β1, EGF release; neutrophil and macrophage infiltration; early VEGF-driven angiogenesis
2. **Proliferative phase (3 d – 3 wk):** keratinocyte migration and re-epithelialization from follicular/adnexal reserves; fibroblast activation and proliferation; TGF-β1-driven upregulation of [[col1a1]] and [[col3a1]] mRNA → procollagen synthesis and secretion; lysyl oxidase-mediated crosslinking initiates collagen fibril assembly in the papillary dermis
3. **Remodelling phase (3 wk – 12+ mo):** net collagen synthesis exceeds MMP-mediated degradation for 3–12 months post-procedure; new collagen-I fibrils replace the fragmented, MMP-degraded collagen characteristic of photoaged dermis; mechanical integrity and wrinkle depth improve over time

**Histological confirmation:** Dermis-depth biopsy studies confirm neocollagenesis. De Filippi Sartori et al. 2022 demonstrated significantly higher collagen type I and III intensity (Picrosirius Red histochemistry) in periorbital skin at biopsy taken 30 days after fractional CO2 resurfacing versus untreated contralateral side (n=16 female patients; prospective split-face comparative study; collagen I: treated 158.7 ± 5.3 vs untreated 139.2 ± 5.0, P<0.0001) [^defilippi2021]. #gap/needs-replication — small n=16; design is prospective comparative, not randomised controlled trial.

### Mechanical microneedling: injury without heat

Mechanical microneedling bypasses the photonic or RF energy delivery and achieves the same wound-healing cascade through **physical micro-channels**: fine needles (0.5–3 mm) penetrate the epidermis and papillary dermis, creating controlled micro-injuries. Platelet activation at each puncture site releases PDGF, TGF-β1, and FGF — the same growth factor cascade as laser-induced MTZs. The 2025 systematic review and meta-analysis (Foppiani et al.) included 21 studies (723 patients) and found 83% pooled patient satisfaction (95% CI 0.76–0.88); most common endpoints were wrinkling (71%), skin texture (33%), and photoaging (29%); most adverse events were transient erythema [^foppiani2025]. Comparison with fractional Er:YAG (Robati 2020) in a split-face trial (n=24 completers from 32 enrolled) showed comparable efficacy for texture and dyschromia with shorter downtime for microneedling [^robati2020].

---

## Aging-Context Evidence

### Collagen biology

The mechanistic link to skin aging is direct: photoaged dermis is characterized by fragmented, crosslinked collagen-I and loss of [[col1a1]] and [[col3a1]] synthetic output from senescent dermal fibroblasts (see [[skin-aging]] and [[dermal-fibroblasts]]). Device-based resurfacing counteracts this by transiently killing or displacing senescent fibroblasts and recruiting activated fibroblasts from deeper compartments, restoring net neocollagenesis for 6–12 months post-procedure.

| Dimension | Status |
|---|---|
| Pathway (wound-healing → collagen synthesis) conserved in humans? | yes — human fibroblast TGF-β1/collagen response is well characterised |
| Phenotype (neocollagenesis post-resurfacing) demonstrated in humans? | yes — biopsy studies confirm collagen density increase post-fractional CO2 [^defilippi2021] |
| Long-term aging modification (epigenetic clock shift)? | not tested — no published RCT with biological-age clock endpoint #gap/needs-replication |
| Replicated across modalities? | yes (laser, RF, HIFU, microneedling) — class effect confirmed |

### Recent systematic reviews and meta-analyses (R25 recency search, 2019–2026)

**Microneedling (2025 systematic review and meta-analysis):** Foppiani et al. 2025 (*Aesthetic Plastic Surgery*) conducted a PRISMA-compliant systematic review including 21 articles (723 patients) on microneedling for facial rejuvenation; proportion meta-analysis found 83% pooled patient satisfaction (95% CI 0.76–0.88); wrinkling was assessed in 71% of trials, skin texture in 33%, photoaging in 29% [^foppiani2025]. Noted: heterogeneity in needle depth, session count, and outcome measures limits direct cross-study comparison.

**Radiofrequency (2022 systematic review):** Vassão et al. 2022 (*J Cosmet Laser Ther*) reviewed 21 RF skin rejuvenation articles (354 patients); found large discrepancy in device types and treatment parameters; most used RF was fractional followed by non-ablative RF; treatment temperature 38–44°C was the most consistent parameter; temporary adverse effects included discomfort, pain, erythema, and hyperpigmentation; concluded that optimal treatment parameters remain unestablished [^vassao2022].

**IPL (2022 systematic review):** Sales et al. 2022 (*Arch Dermatol Res*) reviewed IPL (termed "ILP" in the paper) for skin rejuvenation; the PRISMA-compliant review included 16 studies (published online Oct 2021; print 2022); found consistent improvements in pigmentation, vascular lesions, and skin texture assessed by digital photography and self-reported efficacy; noted the highest-quality evidence for IPL is in dyschromia rather than wrinkle depth [^sales2022].

**HIFU (2025 systematic review):** Haykal et al. 2025 (*Aesthetic Surgery Journal*) reviewed 45 clinical trials and cohort studies (January 2010 – October 2024 search window) on HIFU for skin tightening and body contouring; found significant efficacy in lower face, neck, and periorbital regions with skin laxity improvements of 18–30%; body contouring studies documented circumference reduction of 2.5–4.5 cm; fewer than 5% of patients reported transient adverse events (erythema, swelling, mild discomfort); standardization of treatment protocols remains a key challenge [^haykal2025].

**HIFU meta-analysis (2025):** Modena et al. 2025 (*Lasers in Medical Science*) conducted a systematic review and meta-analysis of HIFU for skin sagging; 12 articles included (3 randomised, 9 non-randomised; 475 participants total: 333 women, 142 men); meta-analysis was limited to 2 randomised studies on neck skin sagging; noted substantial controversy in the literature regarding efficacy; concluded that HIFU shows promising results for skin sagging with significant adverse-event controversy [^modena2025]. #gap/needs-replication — meta-analysis limited to 2 RCTs for neck sagging specifically.

**RF microneedling in skin of color (2023 review):** Chao et al. 2023 (*Facial Plastic Surgery*) reviewed energy-based devices in Fitzpatrick III–VI skin, noting that RF microneedling carries substantially lower PIH risk than ablative lasers due to the non-UV chromophore-independent mechanism of RF energy delivery [^chao2023].

**No major discordances between recent and training-era evidence found.** The systematic reviews confirm the efficacy picture established in earlier literature, with newer evidence adding nuance about device-specific depth, skin-of-color safety profiles, and combination protocols.

---

## Sequencing with Other Interventions

Resurfacing procedures are commonly deployed as components of multimodal anti-aging protocols. Evidence-based sequencing:

### Pre-procedure
- **Pause [[retinoids]] (tretinoin, adapalene) 3–5 days before procedure** — retinoid-thinned epidermis may increase penetration depth and risk of paradoxical over-treatment in ablative procedures. Resume after full re-epithelialization (2–4 weeks for ablative; ~1 week for non-ablative).
- **Broad-spectrum sunscreen ([[uv-protection]])** consistently 4–6 weeks before procedure — reduces baseline UV-driven inflammation and minimizes PIH risk by limiting background melanocyte activation.
- **Consider topical hydroquinone or tranexamic acid** for 4 weeks pre-procedure in Fitzpatrick III–VI patients to suppress melanocyte activity.

### Post-procedure
- **Occlusive dressings and gentle cleansing** for 3–7 days (ablative) or 24–48 hours (non-ablative): maintain moist wound environment, reduces infection risk, accelerates re-epithelialization.
- **Mandatory broad-spectrum sunscreen post-procedure 8–12 weeks** — regenerating epidermis has reduced melanin density and is highly susceptible to UV-induced PIH. This is the dominant cause of treatment failure in clinical practice #gap/unsourced (patient non-compliance estimate; no RCT data on sunscreen adherence post-resurfacing).
- **Resume [[retinoids]] at 2–4 weeks post-procedure** (full re-epithelialization confirmed) to maintain the neocollagenesis response and prevent the epidermal atrophy / collagen degradation cycle from restarting.
- **[[uv-protection]]** maintained indefinitely post-procedure as standard-of-care in any anti-photoaging protocol.
- **Avoid concurrent chemical peels (see [[chemical-peels]])** until full healing — combining wounding modalities substantially increases risk of scarring and infection.

---

## Pigmentation Risk and Fitzpatrick Considerations

Post-inflammatory hyperpigmentation (PIH) is the dominant procedural complication in darker skin types. Risk ranking (highest to lowest):

| Modality | PIH risk in Fitzpatrick IV–VI | Notes |
|---|---|---|
| Ablative CO2 (full field) | Very high | Essentially contraindicated without expert management |
| Ablative CO2 fractional | High | Requires lower energy settings, fewer passes |
| Ablative Er:YAG fractional | Moderate-high | Less thermal scatter than CO2 reduces risk |
| Non-ablative 1550 nm | Moderate | Can be used Fitzpatrick I–V with care |
| Non-ablative 1927 nm thulium | Moderate-low | Highest safety index for darker types among lasers |
| IPL | Moderate | Dependent on chromophore selectivity; inappropriate if tanned |
| RF microneedling | Low | RF energy is chromophore-independent; preferred in Fitzpatrick IV–VI |
| Mechanical microneedling | Low | No light/heat interaction; minimal PIH risk |
| HIFU | Low | Deep-targeted; epidermis unaffected |

See Chao et al. 2023 for a comprehensive energy-device guide for skin-of-color patients [^chao2023].

---

## Maintenance and Repeat Intervals

Most modalities require an initial series plus maintenance:
- **Ablative fractional CO2/Er:YAG:** often one treatment with significant downtime; repeat at 12–18 months for maintenance; single deep treatment may provide years of benefit
- **Non-ablative fractional 1550/1927 nm:** 3–5 sessions (monthly) for initial correction; maintenance 1–2 sessions/year
- **IPL:** 3–5 sessions (monthly); maintenance every 6–12 months
- **Mechanical microneedling:** 3–6 sessions (monthly); maintenance 2–4/year
- **RF microneedling:** 3 sessions (monthly–bimonthly); maintenance every 6–12 months
- **HIFU:** typically single session with results building over 3–6 months; repeat interval approximately 12 months (not confirmed in Haykal 2025 abstract; full-text required for specific interval) [^haykal2025] #gap/needs-replication

---

## What This Page Deliberately Excludes

### Botulinum toxin (BoNT-A)
Mechanism: presynaptic SNARE-complex proteolysis (SNAP-25 cleavage) → blockade of acetylcholine release at the neuromuscular junction → temporary paralysis of targeted facial musculature → reduction of dynamic wrinkles. **Aging mechanism:** none — BoNT-A does not affect collagen synthesis, dermal ECM architecture, senescent cell burden, or any López-Otín hallmark. It treats the *motor* component of dynamic wrinkling; it does not address the underlying dermal deterioration. Combined with resurfacing, it provides additive cosmetic benefit (eliminating dynamic wrinkling while resurfacing improves static wrinkles and texture), but the mechanisms are entirely orthogonal. Not included here.

### Dermal fillers
Mechanism: volumetric tissue displacement and support via injection of HA, calcium hydroxylapatite (CaHA), or poly-L-lactic acid (PLLA) microspheres. HA and CaHA fillers act mechanically (volume replacement); PLLA microspheres have a secondary biostimulatory effect producing moderate neocollagenesis over 3–6 months (distinct mechanism from controlled wounding). Fillers primarily address volume loss rather than the surface-texture and collagen-density deficits targeted by resurfacing. Clinical practice combines both, but the wiki separates pages by mechanism class. Not included here.

---

## Limitations and Gaps

- **No randomised head-to-head trial comparing all major modalities** against a common biological endpoint (dermis-depth biopsy neocollagenesis, epigenetic clock). Cross-modality comparisons are largely retrospective or single-arm. #gap/contradictory-evidence (indirect comparisons conflict on effect size)
- **No epigenetic-clock endpoint data.** All clinical outcomes are graded by blinded photography, patient-reported outcomes (GAIS, FACE-Q), or histology. Whether resurfacing shifts DunedinPACE or GrimAge in skin has never been tested. #gap/needs-replication
- **Session count and energy parameters incompletely characterized.** Optimal treatment parameters (fluence, pulse width, needle depth, session interval) are device- and skin-type-specific and poorly standardized across manufacturers. #gap/dose-response-unclear
- **Long-term durability beyond 24 months sparse.** Most RCT follow-up is 3–12 months; natural collagen turnover eventually erodes the neocollagenesis benefit. #gap/long-term-unknown
- **Mode: procedural schema gap.** CLAUDE.md defines `mode: pharmacological | lifestyle | dietary | gene-therapy | stem-cell-therapy | blood-product`. Device-mediated procedures do not fit cleanly into any existing mode. This page uses `mode: pharmacological` as the least-wrong option with a schema-decision note. **Escalate to CLAUDE.md cleanup: add `mode: procedural` for device- and surgery-based interventions.** Until resolved, this page and [[chemical-peels]] use `mode: pharmacological` with in-body annotation.
- **`clinical-trials-active:` not queried.** ClinicalTrials.gov active trial count for device-based resurfacing was not pulled at this seeding (per the intervention class, counts are relevant but procedural devices have many manufacturer-sponsored small studies that may inflate counts). #gap/unsourced — needs ClinicalTrials.gov v2 API query on next verifier pass.

---

## Cross-References

- [[skin-aging]] — phenotype page; clinical endpoints these devices target
- [[dermis]] — tissue target of deeper resurfacing modalities
- [[epidermis]] — tissue target of superficial modalities; re-epithelialization source
- [[dermal-fibroblasts]] — primary cell type activated by wounding cascade
- [[col1a1]] — type I collagen alpha-1; primary neocollagenesis marker
- [[col3a1]] — type III collagen alpha-1; co-deposited early in wound healing
- [[wound-healing]] — process page; the shared mechanistic anchor
- [[microneedling]] — dedicated granular page for mechanical + RF microneedling (collagen induction therapy); evidence appraisal for the aging indication
- [[chemical-peels]] — R44 sister page; parallel controlled-wounding paradigm via chemical rather than physical vector
- [[retinoids]] — R41; pre/post-procedure pairing; mechanism is orthogonal (RAR agonism) but synergistic clinically
- [[uv-protection]] — R42; mandatory post-procedure (8–12 weeks); sunscreen prevents PIH and treatment failure
- [[loss-of-proteostasis]] — primary hallmark targeted (neocollagenesis restores ECM proteostatic architecture)

---

## Footnotes

[^manstein2004]: doi:10.1002/lsm.20048 · original-concept clinical study · n=15 subjects (forearm MTZ density testing) + n=30 subjects (periorbital photoaging; 4 treatments over 2–3 wk; 3-mo follow-up); no animal subjects · fractional photothermolysis concept: MTZ arrays (100 µm diameter, 300 µm depth) + spared tissue bridges → re-epithelialization within 1 day; wrinkle score improved 18% at 3 months (P<0.001); device wavelength: 1.5 µm prototype (not CO2 or Er:YAG) · *Lasers in Surgery and Medicine* 2004 · Manstein D, Herron GS, Sink RK, Tanner H, Anderson RR · archive: download failed (no free-text URL available)

[^defilippi2021]: doi:10.1093/asj/sjab357 · prospective split-face comparative study (non-randomised) · n=16 female patients with dermatochalasis and periorbital rhytids · biopsy obtained 30 days post-laser (during scheduled upper blepharoplasty); Picrosirius Red histochemistry; collagen I: treated 158.7 ± 5.3 vs untreated 139.2 ± 5.0 (P<0.0001); collagen III: treated 105.1 ± 7.7 vs untreated 104.1 ± 7.1 (P<0.0001); periorbital rhytidosis improvement 23% at 1 month, 43.67% at 6 months · *Aesthetic Surgery Journal* 2022 (published online Oct 2021; PubMed year 2022) · de Filippi Sartori J, Osaki T, Osaki T, de Souza J, Allemann N · archive: not_oa; not downloaded

[^foppiani2025]: doi:10.1007/s00266-025-04972-z · systematic-review + proportion meta-analysis · 21 articles included (346 screened; 723 patients; majority female 72%; mean age 48 y) · pooled patient satisfaction 83% (95% CI 0.76–0.88); wrinkling assessed in 71% of trials, skin texture 33%, photoaging 29%; 90% of trials used multiple sessions; transient erythema most common adverse event (6.8%) · *Aesthetic Plastic Surgery* 2025 (PMID 40542236) · Foppiani JA et al. (Lin SJ) · archive: not_oa; not downloaded · cross-checked against PubMed abstract

[^vassao2022]: doi:10.1080/14764172.2022.2100914 · systematic-review · 21 articles included (354 patients treated with different RF modalities) · fractional RF most common, followed by non-ablative RF; treatment temperature 38–44°C most consistent parameter; large parameter heterogeneity; temporary adverse effects: discomfort, pain, erythema, hyperpigmentation; optimal treatment parameters remain unestablished · *Journal of Cosmetic and Laser Therapy* 2022 (PMID 35856592) · Vassão PG et al. (Renno ACM) · archive: not_oa; not downloaded · cross-checked against PubMed abstract

[^sales2022]: doi:10.1007/s00403-021-02283-2 · systematic-review · 16 studies included (PRISMA-compliant; Scopus + PubMed; published online Oct 2021, print 2022) · IPL (termed "ILP" in paper) for skin rejuvenation assessed by digital photography and self-reported efficacy; improvements in pigmentation, vascular lesions, and skin texture; strongest evidence for dyschromia vs. wrinkle depth · *Archives of Dermatological Research* 2022 (PMID 34609598) · Sales AFS et al. (Vassão PG) · archive: not_oa; not downloaded · cross-checked against PubMed abstract

[^haykal2025]: doi:10.1093/asj/sjaf053 · systematic-review · 45 clinical trials and cohort studies meeting inclusion criteria (search Jan 2010 – Oct 2024) · HIFU for skin tightening and body contouring: skin laxity improvements 18–30% in lower face/neck/periorbital; body contouring circumference reduction 2.5–4.5 cm; <5% transient adverse events; standardization of treatment protocols remains key challenge; Level of Evidence 3 · *Aesthetic Surgery Journal* 2025 (PMID 40184185) · Haykal D, Sattler G, Verner I, Madhumita B, Cartier H · archive: not_oa; not downloaded · cross-checked against PubMed abstract

[^modena2025]: doi:10.1007/s10103-025-04424-9 · systematic-review + meta-analysis · 12 articles included (3 RCT, 9 non-randomised; 475 participants: 333 women, 142 men); meta-analysis limited to 2 RCTs specifically for neck skin sagging; notes substantial controversy in literature regarding HIFU efficacy; "FACE-Q Appraisal of Lines and Wrinkles" outcome NOT confirmed in abstract — outcome measure for the meta-analysis was neck skin sagging improvement · *Lasers in Medical Science* 2025 (PMID 40167815) · Modena DAO, Ferro M, Rangon C, Guirro E · archive: not_oa; not downloaded · cross-checked against PubMed abstract #gap/needs-fulltext — specific meta-analytic outcome measure requires full-text confirmation

[^chao2023]: doi:10.1055/s-0043-1772197 · review · energy-based devices in skin of color (Fitzpatrick III–VI): RF microneedling has lowest PIH risk of resurfacing modalities due to chromophore-independent RF mechanism; ablative CO2 highest risk; 1927 nm thulium preferred among lasers in darker skin types · *Facial Plastic Surgery* 2023 (PMID confirmed; Crossref DOI confirmed) · Chao JR, Porter JP, Hessler JL · archive: not_oa; not downloaded · cross-checked against Crossref/PubMed abstract

[^robati2020]: doi:10.1111/jocd.13440 · split-face clinical trial · n=24 completers (32 enrolled; 3 monthly treatments each side) · microneedling vs. fractional Er:YAG for facial rejuvenation; comparable improvement in dyschromia and periorbital wrinkling (P<0.05 for both, no significant difference between methods); significant improvement in TEWL and CRRT on both sides; downtime significantly shorter for microneedling; patient satisfaction high for both with no significant difference · *Journal of Cosmetic Dermatology* 2020 (PMID 32359018) · Robati RM, Hamedani MH, Namazi MR, Niknejad N, Gheisari M · archive: not in index
