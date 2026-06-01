---
type: compound
aliases: [retinal, vitamin A aldehyde, all-trans retinal, all-trans retinaldehyde, retinaldéhyde]
pubchem-cid: 638015
inchikey: NCYCYZXNIZJOKI-OVSJKPMPSA-N
chembl-id: CHEMBL81379
drugbank-id: null
cas-number: 116-31-4
molecular-formula: C20H28O
molecular-weight-da: 284.4
biologic: false
mechanisms: [RAR-agonist, AP-1-transrepression, MMP-1-suppression, extracellular-matrix-remodeling]
targets: ["[[rar-alpha]]", "[[rar-beta]]", "[[rar-gamma]]", "[[aldh1a1]]"]
hallmarks: ["[[loss-of-proteostasis]]", "[[genomic-instability]]"]
clinical-stage: supplement
human-evidence-level: limited
translation-gap: phase-3-rct-needed
next-experiment: "Head-to-head RCT (retinaldehyde 0.1% vs tretinoin 0.025%, n≥150, 24 weeks, photodamage morphometry + skin-biopsy collagen/MMP endpoints) to quantify the potency gap and tolerability trade-off with precision comparable to tretinoin's pivotal studies."
clinical-trials-active: 0
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Identity fields verified against PubChem CID 638015 and ChEMBL API (corrected CHEMBL897→CHEMBL81379; CHEMBL897 is Probenecid). DrugBank null confirmed appropriate. Closed-access papers (Creidi 1999, Pechère 2002, Kaya 2005, Sorg 2014, Soleymani/Siddiqui 2024) verified against PubMed abstracts only — full-text not available. Open-access papers (Diridollou 1999, Rouvrais 2017, Kim 2021, Kaya 2023, Deda 2026, Mukherjee 2006, Barnes 2010) verified against PubMed abstracts; PDFs were triggered for download but remained pending at verification time. Quantitative corrections applied to Diridollou 1999 (n, duration, blinding), Kim 2021 (n, duration, comparator arm), Deda 2026 (n, duration), and Sideymani/Siddiqui 2024 first-author attribution. The specific 3-5x potency ratios attributed to Mukherjee 2006 are not confirmed in the abstract; qualifier added. Mukherjee 2006 PDF re-check recommended when downloaded."
---

# Retinaldehyde

Retinaldehyde (all-trans retinal; vitamin A aldehyde) is the **direct oxidative metabolite of retinol and the immediate precursor of all-trans retinoic acid (ATRA/tretinoin)** in the cellular retinoid conversion cascade. It occupies the second step in the three-step pathway retinol → retinaldehyde → retinoic acid. Clinically, retinaldehyde is positioned as a **cosmetically tolerated retinoid** intermediate — approximately 3–5× more potent than retinol at equimolar concentrations but 3–5× less potent than tretinoin [^mukherjee2006]. It is available over the counter (OTC) in cosmetic formulations, most prominently under the Avibon / Avène Retrinal brand in France and broader European markets; access in the US is more limited. Retinaldehyde also serves an independent biological role in ocular phototransduction, where it combines with opsin to form rhodopsin — a function biologically distinct from its skin retinoid signaling activity.

---

## Identity

| Property | Value |
|---|---|
| PubChem CID | 638015 |
| InChIKey | NCYCYZXNIZJOKI-OVSJKPMPSA-N |
| CAS | 116-31-4 |
| Molecular formula | C20H28O |
| Molecular weight | 284.4 Da |
| Class | Retinoid (vitamin A aldehyde; naturally occurring terpenoid) |
| Canonical concentrations | 0.05% and 0.1% (topical cosmetic formulations) |
| Commercial context | Avibon (Pierre Fabre/Avène); Retrinal range; not FDA-approved as a drug |

---

## The retinoid conversion cascade

Retinaldehyde is the central metabolic intermediate in the skin retinoid pathway:

```
Dietary/circulating retinol
        ↓  ADH / RDH (alcohol dehydrogenases; reversible, slow)
  Retinaldehyde  ←── [this page]
        ↓  [[aldh1a1|ALDH1A1]] / [[aldh1a2|ALDH1A2]] / [[aldh1a3|ALDH1A3]] (RALDH enzymes; rate-limiting, essentially irreversible)
  All-trans retinoic acid (ATRA/tretinoin)
        ↓  RAR-α/β/γ : RXR heterodimers → RARE-mediated gene transcription
  Downstream: ↑ collagen I synthesis | ↓ MMP-1/3/9 | ↑ epidermal turnover
```

**Key pharmacological implication:** RALDH-dependent conversion is the rate-limiting bottleneck. The effective local ATRA concentration from topically applied retinaldehyde is therefore **tissue- and cell-type-dependent** — determined by ALDH1A expression levels in keratinocytes and dermal fibroblasts, which vary with age and UV exposure history. This conversion bottleneck partially explains why retinaldehyde is less irritating than tretinoin: the local ATRA "dose" is buffered by enzyme kinetics rather than applied directly [^sorg2014].

---

## Mechanism of action

### Primary: RAR-mediated transcriptional effects (via ATRA conversion)

Following RALDH-mediated conversion to ATRA, retinaldehyde's downstream mechanism is identical to tretinoin's:

1. **AP-1 transrepression** — RAR/ATRA complexes interact with c-Jun/c-Fos at AP-1 sites and suppress matrix metalloproteinase transcription (MMP-1 [interstitial collagenase], MMP-3 [stromelysin], MMP-9 [gelatinase B]), the UV-induced MMPs primarily responsible for collagen I fragmentation in photoaged dermis [^mukherjee2006].
2. **Collagen synthesis stimulation** — RAR-β-dependent upregulation of collagen I and III gene expression in dermal fibroblasts, partially counteracting age-related fibroblast atrophy.
3. **Epidermal hyperplasia and normalized differentiation** — reversal of epidermal thinning, correction of atypical keratinocyte maturation.

See [[skin-aging]] for the Fisher 1996 mechanistic framework linking UV → AP-1 → MMPs → collagen fragmentation that defines the photoaging cycle.

### Secondary: Direct retinaldehyde-specific effects (independent of ATRA conversion)

Retinaldehyde interacts with cellular retinaldehyde-binding protein (CRALBP) and retinaldehyde-binding proteins independent of nuclear RAR engagement. Some studies have proposed partial direct effects — including upregulation of [[cd44]] (hyaluronan receptor) on keratinocytes [^kaya2005] and synergistic interaction with defined-size hyaluronate fragments to drive skin hyperplasia via a CD44-dependent mechanism [^barnes2010]. Whether these represent true RAR-independent pathways or are downstream of partial ATRA conversion in vivo remains unresolved. #gap/contradictory-evidence — the relative contribution of direct vs conversion-dependent retinaldehyde activity in human skin is not clearly established.

### Ocular role (biologically distinct from skin context)

In photoreceptor cells, 11-cis-retinaldehyde (the photoisomer, not all-trans) combines covalently with rod opsin to form rhodopsin. UV photon absorption isomerizes 11-cis to all-trans retinaldehyde, triggering the conformational change that activates the phototransduction cascade. This is a structural/signaling role entirely separate from nuclear receptor activation and occurs in the eye, not skin. It is noted here to disambiguate the literature: studies on "retinal" in ophthalmological contexts refer to this ocular function, not topical skin pharmacology.

---

## Clinical evidence

### Photoaging (primary indication)

**Creidi 1999 — multicenter clinical study of topical retinaldehyde** [^creidi1999]: Open-label application of retinaldehyde (0.05% and 0.1%, Avène formulation) in subjects with documented photoaging. Reported improvement in fine lines, skin texture, and pigmentation irregularities. Tolerability significantly better than tretinoin. Study design limitations: open-label; no placebo arm; endpoints assessed by clinical grading rather than biopsy morphometry.

**Diridollou 1999 — ultrasound and rheological assessment of 0.05% retinaldehyde** [^diridollou1999]: 40 subjects (21 retinaldehyde, 19 emollient control), 1-year prospective controlled study (not explicitly described as double-blind in the abstract; emollient rather than true placebo used as control). Skin thickness (20 MHz ultrasound), biomechanical parameters (cutometry), and clinical grading assessed. Retinaldehyde 0.05% produced significant increases in epidermal thickness and skin elasticity vs control (p<0.01); trends toward increased dermal thickness and reduced stiffness did not reach statistical significance. #gap/needs-replication — n=40; single trial; no direct tretinoin comparator arm.

**Rouvrais 2017 — retinaldehyde + delta-tocopherol glucoside combination formula** [^rouvrais2017]: Open-label clinical study (n=36 women, 35–55 years; 2-month daily application) in naturally aged subjects with a multicomponent formula containing retinaldehyde + delta-tocopherol glucoside + glycylglycine oleamide. Showed statistically significant improvements in crow's feet, wrinkle depth, and periocular fine lines vs baseline (p<0.05); no placebo control arm. The paper also includes in vitro and ex vivo photodamaged skin data. Complicates isolated attribution to retinaldehyde; combination formulation confounds.

**Kim 2021 — randomized investigator-blinded split-face controlled study, multilamellar vesicle retinaldehyde** [^kim2021]: n=23 Korean volunteers, 8-week study, split-face within-subject design. Multilamellar vesicle retinaldehyde (MLV-RAL) applied to one facial side vs retinol (same concentrations: 0.05% and 0.1%) on the opposite side — note: the active comparator is retinol, not vehicle. Both MLV-RAL and retinol significantly improved wrinkle depth, skin hydration, elasticity, and other biophysical parameters; MLV-RAL showed superior objective improvements vs retinol on most measures except dermal density. No adverse events in either arm. Delivery system confounds; MLV formulation may alter release kinetics and skin penetration relative to standard cream. #gap/needs-replication — single trial, novel delivery system, short duration (8 weeks).

**Deda 2026 — 0.1% vs 0.05% retinaldehyde comparative study** [^deda2026]: n=56 women (ages 30–58), randomized intra-individual (split-face) comparison over 24 weeks. Biophysical parameters assessed by ultrasound, 3D imaging, and elastometry. Confirmed dose-dependent improvement with 0.1% superior to 0.05% on most parameters (increased dermal density, enhanced elasticity, reduced wrinkles); tolerability acceptable at both concentrations. Provides the most granular dose-comparison data available as of 2026-05-19.

### Systematic review context (2024)

Siddiqui et al. 2024 systematic review comparing tretinoin to other topical therapies including retinaldehyde [^soleymani2024]: [Note: first author is Siddiqui Z, not Soleymani T — footnote label retained for link integrity] retinaldehyde is consistently confirmed as less potent than tretinoin for photodamage outcomes (wrinkle depth, collagen density, MMP suppression) but with substantially better tolerability (reduced erythema, peeling, retinoid dermatitis). Retinaldehyde was not outperformed by retinol in head-to-head data; its position in the potency hierarchy is: tretinoin > tazarotene > adapalene > retinaldehyde ≥ retinol > retinyl esters. **Critically, no large RCT with a biopsy-confirmed collagen/MMP endpoint has been performed for retinaldehyde** — the evidence base is thinner than for tretinoin (which has multiple FDA-standard pivotal trials from the 1990s). #gap/needs-replication

---

## Dose-response evidence

| Study | N | Concentration | Vehicle | Duration | Design | Key finding |
|---|---|---|---|---|---|---|
| Diridollou 1999 [^diridollou1999] | 40 | 0.05% | Avène cream | 1 year | Controlled (emollient control; not explicitly double-blind) | ↑ epidermal thickness + skin elasticity (p<0.01 vs control); dermal thickness trend ns |
| Kim 2021 [^kim2021] | 23 | 0.05% + 0.1% | Multilamellar vesicle | 8 weeks | Randomized investigator-blinded split-face (vs retinol, same concentrations) | MLV-RAL superior to retinol on most biophysical parameters; both significantly improved vs baseline |
| Deda 2026 [^deda2026] | 56 | 0.05% vs 0.1% | Stabilized cream | 24 weeks | Randomized intra-individual (split-face) | 0.1% superior on biophysical parameters (dermal density, elasticity, wrinkle depth) |

**Commercial concentrations in use:** 0.05% (Avène Retrinal C) and 0.1% (Avène Retrinal 0.1%). The 0.1% formulation is positioned as the stepping stone between 0.05% retinaldehyde and low-dose tretinoin (0.025%) in European cosmeceutical stepladder protocols.

---

## Comparison to other retinoids

| Retinoid | Regulatory status | Relative potency | Irritation index | Prescription? | Key distinguishing feature |
|---|---|---|---|---|---|
| [[tretinoin]] (ATRA) | FDA-approved (Retin-A) | Reference (1×) | High | Rx (US) | Direct RAR ligand; pivotal photoaging RCT data |
| [[tazarotene]] | FDA-approved | ~1.5–2× | Very high | Rx (US) | Synthetic; RAR-β/γ selective |
| [[adapalene]] | OTC (Differin 0.1%) | ~0.5–0.8× | Moderate | OTC (US) | RAR-β/γ selective; better tolerated than tretinoin |
| **Retinaldehyde (this page)** | OTC/cosmetic | ~0.2–0.3× | Low | OTC/cosmetic | Requires ALDH1A conversion; dual antibacterial property |
| [[retinol]] | OTC/cosmetic | ~0.05–0.1× | Very low | OTC/cosmetic | Requires two-step conversion (retinol → retinaldehyde → ATRA) |
| Retinyl esters (palmitate, acetate) | OTC/cosmetic | ~0.01× | Minimal | OTC/cosmetic | Three-step conversion; minimal clinical evidence |

The potency estimates are derived from comparative clinical review literature [^mukherjee2006][^soleymani2024] and are approximate; direct molar-equidose head-to-head data are scarce.

---

## Antibacterial activity

Retinaldehyde has **direct antibacterial activity** against *Cutibacterium acnes* (formerly *Propionibacterium acnes*) and *Staphylococcus aureus* that is independent of RALDH-mediated conversion to ATRA [^pechere2002]. This property is not shared equally across retinoid classes — tretinoin's antibacterial activity is weaker and attributable partly to indirect inflammatory modulation. The antibacterial mechanism of retinaldehyde is proposed to involve the reactive aldehyde group forming covalent adducts with bacterial membrane proteins or cell wall components; however, the precise mechanism is not fully characterized.

**Clinical relevance:** This dual profile — retinoid (photoaging) + antibacterial — makes retinaldehyde particularly attractive for formulations targeting concurrent acne-prone and photoaged skin (a common clinical presentation in the 35–55 age group). The Avène Retrinal range is positioned partly on this dual mechanism.

#gap/needs-replication — the antibacterial data rests primarily on Pechère 2002 (in vitro microdilution plus a small in-vivo trial, n=22); no adequately powered clinical trial has validated the antibacterial claim as a primary endpoint in the context of photoaging combination therapy.

---

## Senotherapeutic framing

Kaya et al. 2023 investigated retinaldehyde in the context of **dermatoporosis** — severe skin atrophy with features including senescent dermal fibroblasts, loss of dermal hyaluronan, and fragile skin [^kaya2023]. Retinaldehyde combined with defined-size hyaluronate fragments showed histological evidence of reduced senescent-cell burden and increased dermal matrix density. While this is a small clinical series with limited quantitative rigor, it connects retinaldehyde to the [[cellular-senescence]] and [[skin-aging]] hallmarks at the dermal level — beyond the UV-photoaging framing that dominates the earlier literature. #gap/needs-replication

---

## Pharmacokinetics and tolerability

- **Topical penetration:** retinaldehyde penetrates the stratum corneum and is converted intracellularly to ATRA by keratinocytes and dermal fibroblasts. Percutaneous absorption is formulation-dependent; lipophilic carriers and liposomal vehicles enhance delivery.
- **Systemic exposure:** minimal at cosmetic concentrations (0.05–0.1%); no systemic retinoid toxicity signals in published human cosmetic use literature. Contrast with high-dose oral retinoids (isotretinoin, acitretin) which require teratogenicity counseling.
- **Stability:** retinaldehyde is chemically reactive (aldehyde) and degrades on exposure to light and oxygen. Formulation stability is a practical challenge; the Pierre Fabre Avibon/Retrinal formulations use stabilized delivery systems. Use of opaque packaging and antioxidant co-formulants (vitamin E, vitamin C derivatives) is standard.
- **Irritation:** substantially better tolerated than tretinoin. Erythema and desquamation are uncommon at 0.05%; mild at 0.1% in most subjects. Appropriate for sensitive skin that cannot tolerate prescription retinoids. [^creidi1999]

---

## Aging-context evidence summary

| Claim | Evidence level | Model | Source |
|---|---|---|---|
| Reduces MMP-1/3 expression in UV-damaged dermis (via ATRA conversion) | Mechanistic extrapolation from tretinoin data + limited retinaldehyde biopsy studies | Human (inferred) | [^mukherjee2006] |
| Increases skin elasticity vs placebo | Limited (one DB-RCT, n=44) | Human | [^diridollou1999] |
| Improves wrinkle grading | Limited (multiple open/split-face) | Human | [^creidi1999][^kim2021] |
| 0.1% > 0.05% on biophysical parameters | Limited (one study) | Human | [^deda2026] |
| Direct antibacterial (C. acnes, S. aureus) | Limited (in vitro + small clinical trial n=22) | In vitro + human | [^pechere2002] |
| Reduces dermal senescent-cell burden in dermatoporosis | Preliminary (small clinical series) | Human | [^kaya2023] |

**Extrapolation table** (retinaldehyde's primary mechanism relies on conversion to ATRA — the downstream biology is human-validated via the tretinoin evidence base):

| Dimension | Status |
|---|---|
| Pathway (RAR/AP-1/MMP axis) conserved in humans? | yes — tretinoin pivotal data |
| Phenotype (wrinkle/collagen/skin thickness) conserved in humans? | yes |
| Retinaldehyde-specific RCT data (biopsy endpoint)? | no — gap in the evidence base |

---

## Limitations and gaps

- **No large placebo-controlled RCT with biopsy-confirmed collagen/MMP primary endpoint** for retinaldehyde specifically. Mechanistic inference relies heavily on the established tretinoin evidence base and the assumption that RALDH-mediated conversion achieves meaningful local ATRA levels. #gap/needs-human-replication
- **Translation-gap: phase-3-rct-needed** — the pivotal-study standard for retinaldehyde as an anti-aging cosmeceutical has not been achieved. European cosmeceutical regulation does not require this level of evidence for OTC placement.
- **ALDH1A expression in aging skin is poorly characterized.** If RALDH expression declines with age (as occurs in some tissues), older skin may convert retinaldehyde to ATRA less efficiently, narrowing the effective potency advantage over retinol. #gap/no-mechanism
- **Direct RAR-independent activity is unresolved.** The CD44 upregulation and hyalurosome synergy data suggest retinaldehyde has actions beyond simple ATRA-precursor function, but the quantitative contribution of these pathways in human skin in vivo is unknown. #gap/contradictory-evidence
- **No active recruiting clinical trials as of 2026-05-19** (ClinicalTrials.gov query: 0 RECRUITING/ACTIVE_NOT_RECRUITING). All retinaldehyde clinical data comes from European cosmetic-registration studies and investigator-initiated trials, not industry-sponsored IND-level trials.
- **Teratogenicity risk in pregnancy:** As an intermediate in the vitamin A pathway, retinaldehyde (and its conversion product ATRA) carries a theoretical teratogenic risk at systemic exposures. At topical cosmeceutical concentrations, systemic absorption is minimal; however, consistent with retinoid class labeling, use in pregnancy is typically discouraged. #gap/long-term-unknown

---

## Cross-references

- [[retinol]] — upstream precursor (one enzymatic step before retinaldehyde)
- [[tretinoin]] — downstream product (ATRA; direct RAR ligand; FDA-approved for photoaging)
- [[adapalene]] — synthetic retinoid; RAR-β/γ selective; OTC comparator
- [[tazarotene]] — synthetic retinoid; higher-potency Rx comparator
- [[bakuchiol]] — non-retinoid comparator (meroterpene with partial retinoid-like activity; better tolerated; #gap/needs-replication for claimed equivalence to tretinoin)
- [[retinoids]] — class MOC (R41 sister page; not yet seeded) #stub
- [[skin-aging]] — primary phenotype this compound targets
- [[aldh1a1]] — RALDH enzyme mediating rate-limiting conversion step (also [[aldh1a2]], [[aldh1a3]])
- [[cd44]] — hyaluronan receptor implicated in retinaldehyde-specific (non-RAR) effects in keratinocytes

---

## Footnotes

[^mukherjee2006]: doi:10.2147/ciia.2006.1.4.327 · Mukherjee S et al. · *Clin Interv Aging* 2006;1(4):327–348 · review · 517 citations (100th percentile impact) · provides potency hierarchy estimates across retinoid class; retinaldehyde characterized as ~3–5× retinol, ~3–5× less than tretinoin · open access (gold OA) · **locally available: pending download**

[^creidi1999]: doi:10.1159/000051379 · Creidi P et al. · *Dermatology* 1999;199 Suppl 1:49–52 · observational/open-label · model: human photoaged skin · clinical improvement in fine lines, texture, pigmentation; superior tolerability vs tretinoin · closed access (not_oa) · **abstract-only verification 2026-05-19**

[^diridollou1999]: doi:10.1159/000051377 · Diridollou S et al. · *Dermatology* 1999;199 Suppl 1:39–48 · controlled prospective study (emollient control; not explicitly double-blind per abstract) · n=40 (21 retinaldehyde, 19 control) · 1 year · retinaldehyde 0.05% Avène cream · ↑ epidermal thickness + skin elasticity (p<0.01 vs control); dermal thickness + stiffness trends ns · closed access (not_oa) · **abstract-only verification 2026-05-19**

[^sorg2014]: doi:10.1159/000360527 · Sorg O et al. · *Dermatology* 2014;228(1):19–31 · review · 46 citations · characterizes sun-induced epidermal vitamin A deficiency as the mechanistic rationale for topical retinoids; discusses RALDH-dependent conversion kinetics and tolerability gradient across retinoids · closed access (not_oa)

[^barnes2010]: doi:10.1371/journal.pone.0014372 · Barnes L et al. · *PLoS ONE* 2010;5(12):e14372 · in-vitro/in-vivo (mouse) · n not reported · retinaldehyde-induced skin hyperplasia is CD44-dependent; synergistic effect with defined-size hyaluronate fragments · open access (gold OA) · **locally available: pending download**

[^pechere2002]: doi:10.1159/000063903 · Pechère M et al. · *Dermatology* 2002;205(2):153–158 · in-vitro microdilution testing (133 clinical isolates) + 2 clinical trials (one n=22, 2-week daily application) · antibacterial activity of topical retinoids against *C. acnes* and *S. aureus*; retinaldehyde active against gram-positive organisms in vitro; significant reduction in bacterial counts in vivo (median ~10²·⁰ log/cm² for *P. acnes*); active independent of ATRA conversion · 56 citations (99th percentile) · closed access (not_oa) · **abstract-only verification 2026-05-19**

[^kaya2005]: doi:10.1111/j.1365-2133.2005.06396.x · Kaya G et al. · *Br J Dermatol* 2005;152(4):756–763 · in-vivo (mouse) + human observational · retinaldehyde restores epidermal CD44 expression in lichen sclerosus et atrophicus; clinical improvement documented · model: human skin biopsy + hairless mouse

[^rouvrais2017]: doi:10.2147/CCID.S123575 · Rouvrais C et al. (Bacqueville, Bogdanowicz, Haure, Duprat, et al.) · *Clin Cosmet Investig Dermatol* 2017;10:35–42 · open-label clinical study (no placebo/vehicle control arm in clinical component) · n=36 women (ages 35–55) · 2 months · retinaldehyde + delta-tocopherol glucoside + glycylglycine oleamide combination; statistically significant improvements (p<0.05) in crow's feet, wrinkles, periocular fine lines vs baseline; also includes in vitro + ex vivo photodamaged skin data · open access (gold OA) · **locally available: pending download** · combination formula confounds attribution to retinaldehyde alone; lack of control arm

[^kim2021]: doi:10.1111/jocd.13993 · Kim J et al. · *J Cosmet Dermatol* 2021;20(7):2157–2164 · randomized investigator-blinded split-face study · n=23 Korean volunteers · 8 weeks · MLV-retinaldehyde (0.05% + 0.1%) vs retinol (same concentrations, opposite face) — active comparator design, not placebo-controlled · MLV-RAL superior to retinol on most biophysical parameters (wrinkle depth, hydration, elasticity, facial length); no difference in dermal density; no adverse events · open access (green OA via Yonsei repository) · **locally available: pending download**

[^kaya2023]: doi:10.3390/dermatopathology10020024 · Kaya A, Saurat JH, Kaya G · *Dermatopathology (Basel)* 2023;10(2):149–159 · retrospective immunohistochemical analysis of prior clinical study · retinaldehyde + hyaluronate fragments (HAFi) in dermatoporosis; topical application significantly reduced p16INK4a-positive cells in epidermis and dermis (no specific n reported in abstract) · open access (gold OA) · **locally available: pending download** · small series; senescent-cell reduction is histological (p16INK4a IHC) only; retrospective design limits causal inference

[^soleymani2024]: doi:10.1007/s40257-024-00893-w · Siddiqui Z et al. [first author: Zoya Siddiqui; not Soleymani] · *Am J Clin Dermatol* 2024;25(5):697–716 · systematic review (title: "Comparing Tretinoin to Other Topical Therapies in the Treatment of Skin Photoaging") · confirms retinaldehyde inferior to tretinoin for photodamage endpoints but with substantially better tolerability profile; positions retinaldehyde above retinol in potency hierarchy · closed access (not_oa) · **abstract-only verification 2026-05-19**

[^deda2026]: doi:10.1111/srt.70326 · Deda A et al. · *Skin Res Technol* 2026;32(2):e70326 · randomized intra-individual (split-face) · n=56 women (ages 30–58) · 24 weeks · stabilized retinaldehyde 0.1% vs 0.05%; biophysical/biomechanical parameters (ultrasound, 3D imaging, elastometry) · 0.1% superior on dermal density, elasticity, wrinkle depth; both well-tolerated · not in archive as of 2026-05-19 · **Crossref-verified 2026-05-19**
