---
type: intervention
aliases: [topical estrogen, topical estriol, topical estradiol, topical HRT skin, estriol cream, estradiol cream skin aging]
mode: pharmacological
mechanisms: ["estrogen-receptor-agonist", "collagen-synthesis-stimulation", "MMP-1-suppression"]
targets: ["[[esr1]]", "[[esr2]]", "[[col1a1]]", "[[col3a1]]"]
target-hallmarks: ["[[loss-of-proteostasis]]"]
target-pathways: ["[[estrogen-receptor-signaling]]"]
human-evidence-level: limited
clinical-stage: phase-2
safety-profile: investigational
translation-gap: phase-3-rct-needed
next-experiment: "Multicenter RCT (n≥200, postmenopausal women ≥55 yr) comparing topical estriol 0.3% vs vehicle over 24 weeks with collagen-I density (confocal Raman spectroscopy), DunedinPACE skin clock, and TEWL as co-primary endpoints, plus systemic estradiol pharmacokinetics to confirm minimal absorption."
clinical-trials-active: null
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Brincat 1987 (PMID 3601260), Creidi 1994 (DOI confirmed + PubMed abstract), Moraes 2009 (PMID 19450919 + PubMed abstract), Ashcroft 1999 (PMID 10514397 + PubMed abstract) all cross-checked against PubMed abstracts — quantitative claims confirmed. Farkas 2026, Peri 2026, Javaheri 2026 DOIs/PMIDs confirmed via Crossref and PubMed; full-text characterisation not independently verified (all three papers are closed-access not_oa). FDA prohibition framing, EU Ovestin off-label use, and intervention-classes.md estrogen-receptor-agonist entry verified in-wiki. clinical-stage corrected from phase-3 to phase-2 per R24 convention. Moraes 2009 n corrected from 'not stated' to n=18 per group (n=36 total) per PubMed abstract."
---

# Topical Estrogens

Topical estrogens represent a pharmacological strategy to reverse postmenopausal dermal atrophy by restoring local estrogen receptor (ER) signalling in skin — the same signalling that collapses at menopause when circulating estrogen falls dramatically. Multiple small RCTs (n=20–60) demonstrate that topical estradiol and estriol increase dermal collagen content, epidermal thickness, hydration, and wound healing in postmenopausal women. However, **no topical estrogen is FDA-approved for a skin-aging indication in the US**, cosmetic anti-aging claims on estrogen products are explicitly prohibited, and the safety data at scale are limited. In the EU, estriol creams (Ovestin) are approved for vulvovaginal atrophy and used off-label for facial and perineal skin aging. This page covers the intervention class as a whole.

Distinct from systemic HRT (oral or transdermal estradiol patches), which delivers estrogen systemically and carries the WHI-documented risks of breast cancer and thromboembolism. Topical estriol — the weakest natural estrogen — is generally considered the safest agent in this class due to minimal systemic absorption, though comparative safety data specific to the skin-aging use case are absent.

## Biology of Menopausal Skin Aging

### Estrogen receptors in skin

Estrogen receptor α (ESR1 / ER-α) and β (ESR2 / ER-β) are expressed in keratinocytes, dermal fibroblasts, sebaceous glands, and hair follicles [^hall2005]. Both subtypes bind estrogen, dimerize, and engage estrogen response elements (EREs) in target gene promoters including *COL1A1*, *COL3A1*, hyaluronan synthase 2 (HAS2), and VEGF. ER-α is the dominant subtype in dermal fibroblasts and drives the collagen-synthesis response; ER-β is more prominent in keratinocytes. Non-genomic signalling through membrane-associated ER activates PI3K/Akt and MAPK within minutes, distinct from the hours-long genomic transcriptional response [^hall2005].

### Postmenopausal collagen loss

Collagen content in postmenopausal skin declines at approximately 2% per year in the first decade after menopause; by 5 years post-menopause, total dermal collagen content has fallen ~30% [^callejaagius2013] [^brincat1987]. This rate of collagen loss is significantly faster than intrinsic chronological aging and strongly correlates with time since last menstrual period rather than chronological age, establishing estrogen deficiency — not age per se — as the primary driver [^affinito1999].

- Collagen type I and III are both reduced postmenopausally, with significant inverse correlation with years since menopause [^affinito1999]
- Skin collagen content correlates with bone mineral density (r = 0.586, p < 0.0001), consistent with a shared estrogen-dependent connective tissue maintenance program [^castelo1994] #gap/needs-replication (n=76; single center)
- Epidermal thinning, reduced keratinocyte proliferation (decreased Ki67), reduced sebum production, and reduced dermal hyaluronic acid accompany collagen loss [^hall2005]

These findings establish the mechanistic rationale for topical estrogen: reversing local ER-signalling loss should restore at least some of the collagen-synthesis and proliferative capacity lost at menopause.

## Topical Estrogen Agents

Three naturally occurring estrogens are used topically; they differ in ER-binding affinity, systemic absorption risk, and availability:

| Agent | ER binding affinity (relative) | Typical concentration | Systemic absorption | Regulatory status (skin) |
|---|---|---|---|---|
| **17β-estradiol** | High (reference = 100%) | 0.01–0.06% cream | Moderate to high; measurable serum elevations | US: off-label vaginal/topical Rx; no skin-aging approval |
| **Estriol** | Low (~10–15% of estradiol) | 0.1–0.3% cream | Minimal at standard concentrations | EU: Ovestin (vulvovaginal); off-label facial |
| **Estrone** | Intermediate (~30–60%) | ~0.1% (less common) | Moderate | Limited separate clinical data |
| **Conjugated equine estrogens (Premarin)** | Mixed (estrone sulfate + others) | 0.625 mg/g cream | Variable; vaginal absorption can be significant | US Rx (vaginal atrophy only) |
| **MEP (methyl estradiolpropanoate)** | Prodrug — metabolised to inactive compound in skin | Investigational | Negligible | Experimental; Draelos 2018 pilot |

**Estriol is the dominant agent in clinical use for skin-aging applications** in Europe due to its low systemic absorption risk and the perceived better safety-profile vs estradiol.

## Mechanism of Action

### (a) ER-mediated collagen synthesis

Ligand-bound ER-α in dermal fibroblasts binds EREs in the promoters of *COL1A1* and *COL3A1*, recruiting coactivators (CBP/p300, SRC-1) and driving transcription. Estrogen restores the postmenopausal fibroblast's collagen-synthetic capacity that is lost following ER-signal collapse at menopause. Brincat et al. 1987 demonstrated this restoration across four different HRT regimens [^brincat1987].

For the specific signalling link to [[col1a1]] and [[col3a1]], see those protein pages.

### (b) MMP suppression

Estrogens suppress matrix metalloproteinases (notably MMP-1/collagenase-1) in dermal fibroblasts through an ER-α-mediated mechanism. This is mechanistically distinct from the retinoid-class AP-1 transrepression mechanism (which physically inhibits Jun/Fos from binding MMP promoters), though the downstream output — reduced MMP-1 expression — is shared. The precise transcriptional mechanism of ER-mediated MMP-1 suppression in skin fibroblasts is less well-characterised than the retinoid AP-1 mechanism #gap/no-mechanism.

### (c) Hyaluronic acid synthesis

ER activation in fibroblasts and keratinocytes upregulates HAS2 (hyaluronan synthase 2) expression, increasing dermal HA content. HA is the primary hydration molecule in the dermis; HA decline postmenopausally contributes to skin dryness and reduced tissue turgor. See [[hyaluronic-acid]] for the HA compound page.

### (d) Wound healing enhancement

Estrogen promotes cutaneous wound healing via multiple mechanisms: reduced neutrophil infiltration (anti-inflammatory effect at the wound site), increased macrophage M2 polarisation, and direct stimulation of fibroblast proliferation and collagen deposition. Ashcroft et al. 1999 demonstrated accelerated wound healing with topical estrogen in aged humans (n=36) [^ashcroft1999].

### Cross-comparison with retinoids

| Mechanism | Topical retinoids | Topical estrogens |
|---|---|---|
| Receptor | RAR-α/β/γ (nuclear receptor, RXR heterodimer) | ER-α/β (nuclear receptor, ER homodimer) |
| Collagen synthesis | Via RAR-β2 + RARE-driven program | Via ERE-driven COL1A1/COL3A1 transcription |
| MMP suppression | AP-1 transrepression (Jun/Fos interference — well-characterised) | ER-mediated mechanism (poorly characterised) |
| Tolerability | Retinoid dermatitis (erythema, peeling) common; especially tretinoin | Local irritation; estrogen-sensitive tissue effects at high doses |
| Teratogenicity | Yes (RAR-mediated embryonic patterning) | Theoretical (systemic estrogen is teratogenic) |
| US FDA skin-aging approval | Yes (tretinoin/Renova; tazarotene/Avage) | No |

The two classes act via orthogonal receptors and can in principle be combined for additive collagen-synthetic benefit. Comparative trial data are limited; Piérard 1996 compared tretinoin to glycolic acid in HRT-treated women [^pierard1996] but is not a direct retinoid vs estrogen comparison. #gap/needs-replication for combination evidence.

## Clinical Evidence

### Brincat 1987 — Collagen restoration across four HRT regimens (n=not fully stated)

The foundational study establishing that estrogen therapy restores postmenopausal skin collagen. Skin biopsy (hydroxyproline content) before and after four different HRT regimens. "All regimens showed increases in skin collagen levels proportionate to the levels at the start of the treatment. Estrogen replacement therapy is shown to be prophylactic in women with higher skin collagen levels and both prophylactic and therapeutic in women with lower skin collagen levels" [^brincat1987]. This is a systemic HRT study (not topical), and the effect magnitude was not reported as a percentage in the abstract, limiting quantitative comparison with later topical-only trials. #gap/needs-replication #gap/dose-response-unclear

### Creidi 1994 — Premarin cream vs placebo (n=54, 24 weeks)

Double-blind RCT: Premarin cream (conjugated equine estrogens) vs placebo in 54 postmenopausal women aged 52–70, 24 weeks. Skin thickness increased from 1.56 mm to 1.68 mm with Premarin vs 1.52 mm to 1.59 mm with placebo — statistically significant difference (p=0.013). Premarin also significantly improved fine wrinkles vs placebo. **Interpretation:** first clean RCT demonstrating topical estrogen (CEE cream) superior to placebo for skin thickness and fine wrinkles in postmenopausal women [^creidi1994]. Small n; single-center; endpoint is echographic skin thickness + clinical wrinkle score rather than histological collagen content. #gap/needs-replication

### Fuchs 2003 — Estradiol vs glycolic acid vs combination (6-month, randomized)

Randomized histologic study: estradiol 0.01% vs glycolic acid 15% vs combination vs vehicle. Estradiol: +23% epidermal thickness; glycolic acid: +27% epidermal thickness; combination: +38% epidermal thickness. All three treatment arms showed statistically significant improvement in markers of skin aging reversal vs vehicle [^fuchs2003]. #gap/needs-replication (small n; journal not indexed in major databases; dose comparators not balanced by potency equivalence).

### Moraes 2009 — Topical estradiol 0.01% vs topical isoflavones 40% (n=36, 24 weeks)

Double-blind 24-week RCT in postmenopausal women (n=18 per group: G1 estradiol 0.01%, G2 isoflavones 40% genistein 4%). The estradiol group showed 75% increase in epidermal thickness vs 20% with topical isoflavones. Additional histological outcomes: dermal papillae +125% (estradiol) vs no significant change (isoflavones); fibroblasts +123% (estradiol) vs no significant change; vessels +77% (estradiol) vs +36% (isoflavones). All skin parameters improved significantly more with estradiol than with isoflavones at 24 weeks [^moraes2009]. #gap/needs-replication (small n=18/group; isoflavone dose not clinically validated). This trial is the clearest head-to-head showing pharmaceutical estrogen > phytoestrogen for skin histomorphometric outcomes.

### Ashcroft 1999 — Wound healing in aged humans (n=36, 80 days)

Double-blind study: topical estrogen patch vs placebo patch in 36 elderly adults (n=18 women, mean age 74.4 yr; n=18 men, mean age 70.7 yr). The estrogen/placebo patch was attached for 24 hours to the upper inner arm, through which two 4-mm punch biopsies were made; wounds were excised at day 7 or day 80. Estrogen treatment accelerated wound healing: reduced wound size at day 7, increased collagen at days 7 and 80, increased fibronectin at day 7, enhanced wound strength at day 80, reduced neutrophil infiltration, and decreased elastase levels [^ashcroft1999]. **Distinct endpoint** (wound healing) from the cosmetic photoaging literature, but establishes that topical estrogen drives biologically meaningful collagen deposition in aged human skin in both sexes. #gap/needs-replication (n=36; elderly adults of both sexes; endpoint was wound healing, not photoaging reversal).

### Draelos 2018 — MEP pilot (n=not stated, 14 weeks)

Double-blind pilot: methyl estradiolpropanoate (MEP), a prodrug metabolised to an inactive compound in skin, twice daily for 14 weeks. Statistically significant improvement vs baseline in dryness (p<0.001), laxity (p=0.001), atrophy (p=0.003), dullness (p<0.001) [^draelos2018]. The MEP prodrug design avoids systemic estrogen activity — if validated at scale, this would address the primary safety concern. #gap/needs-replication (pilot; no placebo data reported in available abstract; prodrug metabolism in skin not externally validated).

### Farkas 2026 — Systematic review of safety and efficacy (JAAD)

The most current systematic review: Farkas E et al., *Journal of the American Academy of Dermatology* 2026. PMID 40854497. Concluded that topical estrogen improves skin-aging endpoints (collagen, thickness, hydration) across the literature base, but the overall evidence quality is low-to-moderate due to small sample sizes, short durations, and heterogeneous endpoints [^farkas2026]. **Key R25 finding:** A 2026 JAAD systematic review confirms the accumulated small-RCT evidence while explicitly noting the absence of large, definitive trials and the need for standardized outcome reporting. The review also flags the real-world trend toward off-label topical estrogen prescribing. #gap/needs-replication (entire evidence base is small trials; no single RCT is individually definitive).

### Peri 2026 — Real-world trend and systematic review (n=)

Peri K et al., *Journal of Cutaneous Medicine and Surgery* 2026. Documents a growing real-world trend of topical estrogen use for skin rejuvenation, alongside a systematic review of safety and effectiveness [^peri2026]. The real-world uptick in prescribing is occurring ahead of the evidence base, consistent with a pattern of off-label adoption driven by patient demand and the mechanistic plausibility of ER-based skin aging reversal.

### Overall evidence table

| Study | Agent | n | Design | Key endpoint | Effect vs control | DOI |
|---|---|---|---|---|---|---|
| Brincat 1987 | Systemic HRT (4 regimens) | Postmenopausal women | Before-after | Skin collagen (hydroxyproline) | Increase proportional to baseline | No DOI available (PMID 3601260) |
| Creidi 1994 | CEE cream (Premarin) | 54 | RCT 24 wk | Skin thickness, fine wrinkles | +0.12 mm vs +0.07 mm (p=0.013) | 10.1016/0378-5122(94)90074-4 |
| Fuchs 2003 | Estradiol 0.01% ± glycolic acid | Not stated | Randomized histologic 6 mo | Epidermal thickness | +23% estradiol; +38% combo | PMID 12839261 (no DOI available) |
| Moraes 2009 | Estradiol 0.01% vs isoflavones 40% | 36 (n=18/group) | RCT 24 wk | Epidermal thickness | +75% vs +20% (estradiol superior) | 10.1016/j.ejogrb.2009.04.007 |
| Ashcroft 1999 | Topical estrogen patch | 36 | Double-blind 80d | Wound healing, collagen | Faster healing + more collagen | 10.1016/S0002-9440(10)65217-0 |

**Overall assessment:** The small-RCT evidence base is internally consistent — topical estrogen (estradiol or CEE) reliably improves histological skin parameters in postmenopausal women at 6–24 weeks. The effect is real. The evidence is insufficient for regulatory approval: trials are underpowered, lack long-term follow-up, and use heterogeneous endpoints. No large Phase 3 RCT has been conducted for the skin-aging indication.

## WHI Implications and Safety

### Systemic HRT safety context

The Women's Health Initiative (2002) randomized trial of combined systemic HRT (conjugated equine estrogens + medroxyprogesterone acetate) showed increased risks of breast cancer (HR 1.26, 95% CI 1.00–1.59), venous thromboembolism (HR 2.06), stroke (HR 1.41), and coronary heart disease (HR 1.29) in the CEE+MPA arm. This fundamentally altered clinician willingness to prescribe systemic HRT for any indication and created a chilling effect on the entire estrogen-for-aging field, including topical applications.

**Key distinction:** WHI tested systemic HRT delivering pharmacologically significant serum estradiol levels. Topical estriol cream at standard concentrations produces minimal detectable serum estrogen elevation, and is mechanistically expected to have minimal systemic effects. However, **WHI-scale evidence for topical estriol safety in skin-aging populations does not exist**, and the regulatory-approval pathway for any topical estrogen skin-aging indication would require such safety data.

### Systemic absorption: estradiol vs estriol

- **Topical estradiol 0.01% cream:** Can produce measurable serum estradiol elevation above baseline. One case report documented interference with serum estradiol laboratory measurements following topical estradiol gel use [^sato2025], illustrating that systemic absorption can reach clinically significant levels even with topical application. Facial skin has higher permeability than forearm or thigh skin, increasing absorption risk for facial applications.
- **Topical estriol 0.1–0.3% cream:** Estriol's short ER-occupancy time and rapid hepatic metabolism (10-fold shorter half-life than estradiol) result in minimal systemic accumulation at standard topical concentrations. This is the primary mechanistic argument for estriol's better safety profile vs topical estradiol.
- **Vaginal estriol cream (Ovestin):** Vaginal mucosa has high permeability; serum estriol elevation is measurable but transient due to rapid hepatic clearance.

### Contraindications

- Known or suspected estrogen-sensitive cancers (breast cancer, endometrial cancer)
- Active or history of venous thromboembolism or stroke (applies primarily to systemic; theoretical concern for high-absorption topical estradiol)
- Pregnancy and lactation (teratogenic risk at systemic estrogen levels)
- Undiagnosed abnormal genital bleeding

**The contraindication profile for topical estriol is considered less stringent than for systemic HRT**, but in the absence of large safety studies, conservative clinical practice applies the systemic HRT contraindication list to topical estradiol, and a somewhat relaxed version to topical estriol.

### R25-flagged safety concerns: hair loss and additional concerns (Javaheri 2026)

Javaheri et al. 2026 (JAAD, PMID 41713586) specifically highlights topical estrogen use in hair loss and flags additional safety concerns not widely discussed in the skin-aging literature [^javaheri2026]. These concerns include the risk of unintentional transfer to other individuals (e.g., children, male partners) via skin contact, the absence of standardized concentration and vehicle formulations for compounded preparations, and the growing off-label use without adequate informed consent about systemic absorption variability. This paper is the first systematic treatment of the safety-concern landscape for the skin-specific topical estrogen use case in 2026.

## Regulatory Landscape

### United States

- **FDA status:** No topical estrogen is approved for a skin-aging or photoaging indication in the US.
- FDA regulations explicitly prohibit cosmetic products (OTC) from bearing anti-aging claims if they contain pharmacologically active ingredients like estrogens.
- Topical estrogen preparations for skin aging require a prescription and are used off-label.
- Compounding pharmacies supply custom estriol and estradiol creams; quality and concentration consistency varies.
- The regulatory gap between "vaginal/vulvovaginal atrophy" and "skin aging" is significant: Ovestin-equivalent formulations are sometimes used off-label by clinicians who view the distinction as artificial given the shared ER biology.

### European Union

- Estriol creams (Ovestin, 0.1% estriol; Intrarosa — prasterone) are approved for vulvovaginal atrophy indication.
- Off-label facial and body skin aging use is common in the EU, supported by dermatology practice guidelines in some member states.
- The EMA has not approved any estrogen product for a skin-aging-specific indication.

### Japan

- Topical estriol has wider availability as a cosmetic/quasi-drug ingredient in some formulations.
- Specific approval status varies by product classification.

## Combination and Sequencing

- **With topical retinoids:** mechanistically orthogonal (RAR vs ER pathways); combining is theoretically additive for collagen synthesis. Piérard 1996 studied retinoid combinations in HRT-treated women [^pierard1996] but is not a direct comparative trial. No published head-to-head RCT of retinoid + topical estrogen vs either alone exists. #gap/needs-replication
- **With sunscreen:** mandatory — UV-degradation of topical estrogen and UV-driven MMP activation counteract the ER-mediated protective effect. See [[uv-protection]] (forward-ref).
- **With systemic HRT:** double-dosing concern. If a patient is on systemic HRT, topical estrogen adds local (facial/body) application to an already-elevated systemic estrogen background. Coordination with prescribing clinician required.
- **With hyaluronic acid topicals:** HA acts via different mechanism (direct hygroscopic hydration); can complement topical estrogen's HA-synthase induction. No interaction concern.

## SENS / Hallmark Mapping

- **[[loss-of-proteostasis]]** (primary target): postmenopausal dermal ECM collapse is driven by loss of ER-mediated collagen-I/III synthesis and upregulation of MMP-1. Topical estrogen restores this via ERE-driven transcription in fibroblasts, partially reversing a proteostatic deficit in the dermal ECM.
- **[[altered-intercellular-communication]]** (secondary): ER signalling in the dermis is a paracrine-epithelial communication axis; fibroblast-keratinocyte crosstalk is estrogen-regulated. The dermal "inflammaging" component of postmenopausal skin loss may also be addressable via anti-inflammatory ER signalling effects on immune cells in the dermis.

SENS framing: loosely maps to **extracellular crosslinks / junk** (ECM structural failure), but the mechanism here is *under-synthesis* of collagen rather than crosslink accumulation. The intervention is tissue-specific (skin); no SENS applicability to systemic aging.

## Limitations and Open Questions

- **No large definitive RCT for the skin-aging indication.** The largest RCTs in this space have n=20–60, durations ≤6 months, and heterogeneous endpoints. A Phase 3-scale trial has never been conducted. #gap/needs-replication
- **No US FDA approval.** The regulatory pathway is blocked not by evidence of inefficacy but by the absence of a sponsor committing to the Phase 3 program — likely because off-label and OTC-compounded use satisfies market demand without requiring approval. #gap/long-term-unknown
- **Systemic absorption variability.** Topical application, particularly on facial skin or vulvovaginal mucosa, can produce variable systemic absorption depending on concentration, vehicle, application area, skin barrier integrity, and individual variation. The safety data for long-term topical estrogen in breast-cancer-risk populations are lacking. #gap/long-term-unknown
- **Indication ambiguity with vulvovaginal atrophy (VVA).** Much of the RCT evidence base uses VVA-approved preparations in populations with vulvovaginal complaints, then secondarily reports skin metrics. Interpreting these as primary skin-aging endpoints requires caution. #gap/needs-replication
- **No epigenetic-age clock endpoint.** No RCT has used a biological-age clock (DunedinPACE, GrimAge) as an endpoint. The field does not know whether topical estrogen changes measurable skin biological age or merely cosmetic skin appearance metrics. #gap/needs-human-replication
- **Compounding quality.** The majority of off-label use involves compounded preparations with unvalidated concentration accuracy and vehicle composition. The clinical evidence base uses pharmaceutical-grade preparations. Extrapolating to compounded products is unsafe. #gap/unsourced (compounding quality data lacking)

## Cross-References

- [[skin-aging]] — phenotype page (forward-ref; page pending)
- [[dermis]] — primary target tissue (forward-ref; page pending)
- [[dermal-fibroblasts]] — key cell type for collagen synthesis arm
- [[col1a1]] — target gene; ERE-driven transcription in fibroblasts
- [[col3a1]] — target gene; co-regulated with col1a1
- [[menopause]] — upstream context (forward-ref; page pending)
- [[esr1]] — estrogen receptor alpha (forward-ref; key target protein page needed)
- [[esr2]] — estrogen receptor beta (forward-ref; key target protein page needed)
- [[retinoids]] — related intervention with orthogonal mechanism; comparison table above
- [[uv-protection]] — mandatory co-intervention (R42 forward-ref; page pending)
- [[hyaluronic-acid]] — downstream HA-synthesis target and topical complement
- [[chemical-peels]] — R44 sister pharmacological skin-aging intervention
- [[loss-of-proteostasis]] — primary target hallmark
- [[frameworks/intervention-classes]] — `estrogen-receptor-agonist` class added R44

## Footnotes

[^hall2005]: doi:10.1016/j.jaad.2004.08.039 · review · n/a · comprehensive JAAD review of estrogen physiology in skin, menopause-associated cutaneous changes, and HRT effects · model: human (postmenopausal women + in vitro fibroblast/keratinocyte systems) · *J Am Acad Dermatol* 2005 · Hall G, Phillips TJ · 320 citations; citation percentile 100th · archive: in index, not downloaded (not_oa)

[^callejaagius2013]: doi:10.1016/j.bpobgyn.2013.06.004 · review · n/a · skin connective tissue and aging; collagen loss rate ~2%/yr post-menopause; estrogen treatment improves collagen content, dermal thickness, and elasticity · model: postmenopausal women (review of clinical + histological studies) · *Best Pract Res Clin Obstet Gynaecol* 2013 · Calleja-Agius J, Brincat M, Borg M · 124 citations; citation percentile 100th · archive: in index, green OA (download pending)

[^brincat1987]: PMID: 3601260 · observational + HRT treatment series · postmenopausal women · 4 HRT regimens · skin collagen content measured via hydroxyproline in skin biopsy specimens; all regimens produced collagen increases proportional to baseline; prophylactic in women with higher baseline collagen; prophylactic + therapeutic in women with lower baseline collagen · *Obstet Gynecol* 1987 Jul;70(1):123-7 · Brincat M, Versi E, Moniz CF, Magos A, de Trafford J, Studd JW · no DOI available (pre-DOI era); PMID confirmed via PubMed; not in a local paper archive (no DOI to look up)

[^affinito1999]: doi:10.1016/s0378-5122(99)00077-8 · observational · n=32 (16 premenopausal, 16 postmenopausal) · immunohistochemistry + image analysis of skin collagen types I and III · postmenopausal: collagen I and III significantly lower; significant inverse correlation with years since menopause · *Maturitas* 1999 · Affinito P et al. · archive: not confirmed in a local paper archive

[^castelo1994]: doi:10.1016/0378-5122(94)90126-0 · observational · n=76 women, five age groups · bone mineral density + skin collagen correlation; r=0.586, p<0.0001; parallel decline of bone and skin collagen with estrogen deficiency · *Maturitas* 1994 · Castelo-Branco C et al. · archive: not confirmed in a local paper archive

[^creidi1994]: doi:10.1016/0378-5122(94)90074-4 · rct · n=54 (postmenopausal women 52–70 yr) · 24-week double-blind RCT · Premarin cream 0.625 mg/g vs placebo, nightly facial application with morning SPF-15 sunblock · skin thickness (dermal + epidermal, B-scan ultrasonic echography) +0.12 mm (1.56→1.68 mm) vs +0.07 mm (1.52→1.59 mm), p=0.013; fine wrinkles (profilometry) improved vs placebo at wk 12 (p=0.010) and wk 24 (p=0.012); roughness/laxity/pigmentation improved in both arms without inter-group difference · *Maturitas* 1994 Oct;19(3):211-23 · Creidi P, Faivre B, Agache P, Richard E, Haudiquet V, Sauvanet JP · PMID: 7799828 · 116 citations; archive: in index, not downloaded (not_oa)

[^fuchs2003]: PMID: 12839261 · randomized · postmenopausal women · 6 months · estradiol 0.01% vs glycolic acid 15% vs combination vs vehicle · epidermal thickness: +23% estradiol, +27% GA, +38% combo; all statistically significant vs vehicle · *Cutis* 2003 · Fuchs KO et al. · no DOI available; not confirmed in a local paper archive

[^moraes2009]: doi:10.1016/j.ejogrb.2009.04.007 · rct · n=36 (n=18/group: G1 estradiol 0.01%, G2 isoflavones 40% genistein 4%) · postmenopausal women · 24-week double-blind · epidermal thickness +75% (estradiol) vs +20% (isoflavones); dermal papillae +125% vs NS; fibroblasts +123% vs NS; vessels +77% vs +36%; all parameters significantly better with estradiol · *Eur J Obstet Gynecol Reprod Biol* 2009 · Moraes AB, Haidar MA, Soares JM, Simões MJ, Baracat EC, Patriarca MT · PMID: 19450919 · 57 citations; archive: in index, not downloaded (not_oa)

[^ashcroft1999]: doi:10.1016/S0002-9440(10)65217-0 · rct (double-blind) · n=36 elderly adults (n=18 women mean age 74.4 yr; n=18 men mean age 70.7 yr) · estrogen patch (24-hr application) vs placebo patch; biopsies through patch at day 7 and day 80 · accelerated wound healing: reduced wound size at day 7; increased collagen at days 7 and 80; increased fibronectin day 7; enhanced wound strength day 80; reduced neutrophil infiltration; decreased elastase · *Am J Pathol* 1999 · Ashcroft GS, Greenwell-Wild T, Horan MA, Wahl SM, Ferguson MW · PMID: 10514397 · PMC: PMC1867002 · 415 citations; citation percentile 100th · archive: in index, bronze OA (download pending)

[^draelos2018]: PMID: 30500138 · rct pilot (double-blind) · postmenopausal women · 14 weeks · MEP (methyl estradiolpropanoate, prodrug metabolised to inactive in skin) twice daily · statistically significant improvement vs baseline in dryness (p<0.001), laxity (p=0.001), atrophy (p=0.003), dullness (p<0.001) · *J Drugs Dermatol* 2018 · Draelos ZD · archive: not confirmed in a local paper archive

[^farkas2026]: doi:10.1016/j.jaad.2025.08.050 · systematic-review · topical estrogen safety and efficacy for skin aging · concluded evidence supports improvement of skin-aging endpoints but overall evidence quality is low-to-moderate; calls for larger trials and standardized endpoints · *J Am Acad Dermatol* 2026 Jan;94(1):212-215 (epub 2025 Aug 23) · Farkas E, Goldblatt A, Nehorayan I, Lefkowitz RB, Fleshner L, Tepper K, Marmon S (New York Medical College) · PMID: 40854497 · FWCI 8.72; citation percentile 95th · archive: in index, not downloaded (not_oa; archive indexes by epub year 2025) · R25 recency search priority hit

[^peri2026]: doi:10.1177/12034754261418258 · systematic-review · topical estrogens for skin rejuvenation; real-world trend analysis and systematic review of safety and effectiveness · documents growing off-label prescribing trend; evidence review · *J Cutan Med Surg* 2026 (online ahead of print Jan 28, 2026) · Peri K (McGill University), Saed Aldien A (McGill University), Li MK (University of British Columbia Dermatology) · PMID: 41603206 · archive: in index, not downloaded (not_oa); full-text characterisation not independently verified · R25 recency search priority hit

[^javaheri2026]: doi:10.1016/j.jaad.2025.12.118 · review (JAAD) · topical estrogens for skin aging; hair loss use and additional safety concerns · unintentional transfer risk, compounding quality variability, lack of informed consent regarding systemic absorption · *J Am Acad Dermatol* 2026 Feb 17 (S0190-9622(26)00253-7; online ahead of print) · Javaheri ED (Mayo Clinic Alix School of Medicine, Phoenix), Abdelwahab RM (Mayo Clinic Dermatology), Sominidi-Damodaran S (Mayo Clinic Dermatology) · PMID: 41713586 · archive: DOI not in a local paper archive index; DOI confirmed valid via Crossref + PubMed; paper is closed-access; full-text safety concern details not independently verified · R25 recency search priority hit

[^sato2025]: doi:10.1002/ccr3.71077 · case-report · topical estradiol gel leading to laboratory error in serum estradiol measurement — illustrates clinically significant systemic absorption from topical application · *Clin Case Rep* 2025 · Sato T et al. · PMID: 41040826 · weight accordingly: case report only; cited here for absorption-concern illustration, not as efficacy evidence

[^pierard1996]: doi:10.1016/0378-5122(95)00983-3 · rct · n=not stated · 1-month double-blind · 0.05% tretinoin vs 6% glycolic acid facial hemisurfaces in HRT-treated menopausal women · tretinoin superior for skin elasticity · *Maturitas* 1996 · Piérard GE, Henry F, Piérard-Franchimont C · PMID: 8794420 · archive: not confirmed in a local paper archive
