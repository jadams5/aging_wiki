---
type: tissue
aliases: [integument, integumentary system, cutaneous tissue]
parent-system: integumentary-system
key-cell-types:
  - "[[keratinocytes]]"
  - "[[dermal-fibroblasts]]"
  - "[[melanocytes]]"
  - "[[langerhans-cells]]"
  - "[[melanocyte-stem-cells]]"
key-aging-phenotypes:
  - "[[skin-aging]]"
  - "[[hair-greying]]"
  - "[[androgenetic-alopecia]]"
  - "[[cherry-angioma]]"
related-hallmarks:
  - "[[cellular-senescence]]"
  - "[[epigenetic-alterations]]"
  - "[[stem-cell-exhaustion]]"
  - "[[chronic-inflammation]]"
  - "[[loss-of-proteostasis]]"
  - "[[genomic-instability]]"
  - "[[disabled-macroautophagy]]"
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Krutmann 2017 PDF read end-to-end (10 pages): exposome framing, UV sub-erythemogenic dose attribution (Fisher via Krutmann) confirmed correct. Ganceviciene 2012 PDF read end-to-end (12 pages): paper is a therapeutics review ('Skin anti-aging strategies') — confirmed it does NOT contain body-weight %, dermis-thinning rate, or interfollicular melanocyte density decline figures; those three claims corrected to #gap/unsourced with attribution note. Bormann 2016 PDF read (8 pages): n=108, females, ages 18–78, 450k array all confirmed; page numbers corrected 506–516 → 563–571; study design corrected in-vitro/observational → observational. Horvath 2013 claims (n=7,844; MAE 3.6 yr; 51 tissues; skin among calibration tissues) cross-checked against verified study page — all correct. Langerhans cell density 20–40% decline (Chambers 2020): abstract-only confirmation (qualitative decline confirmed; specific percentage unverifiable — PDF download failed; tagged #gap/needs-replication pending full-text access). Paus 2024 PDF pages 1–3 read: confirmed as hair graying review covering McSC depletion and binary per-follicle mechanism. Ho 2021 and Pilkington 2021 PDFs unavailable (download failed and not_oa respectively); claims attributed to these sources are mechanism-level review claims not independently verifiable without full text. Cross-link integrity: all 5 R38 cell-type pages exist; all phenotype pages (skin-aging, hair-greying, androgenetic-alopecia, cherry-angioma, ear-nose-enlargement) exist."
---

# Skin

Skin is the largest organ of the human body, comprising approximately 15–16% of total body weight and covering a surface area of roughly 1.5–2.0 m² in an adult #gap/unsourced — anatomy figure; Ganceviciene 2012 does not contain this value; canonical anatomy textbook reference needed. It is a stratified, multi-compartment tissue organized into three principal layers — **epidermis**, **dermis**, and **subcutaneous fat (hypodermis)** — plus appendages (hair follicles, sebaceous glands, eccrine/apocrine sweat glands, nails). Functionally, skin serves as a physical and immunological barrier against microbes, UV radiation, and chemical insults; regulates body temperature through sweat secretion and vascular tone; mediates sensory perception (touch, pressure, pain, temperature); and contributes to vitamin D synthesis [^chambers2020]. All four functions deteriorate with age, and skin is uniquely accessible — visible at the surface and easily biopsiable — making it a privileged tissue for studying aging mechanisms in living humans.

The mechanistic detail of how skin ages is documented on [[skin-aging]] (verified). This page is the anatomical anchor for the skin cluster and cross-links to all subsidiary tissue and cell-type pages; it does not restate mechanisms already on [[skin-aging]].

---

## Anatomy at a glance

| Layer | Key cell types | Thickness | Aging-relevant notes |
|---|---|---|---|
| **Epidermis** | [[keratinocytes]] (90–95%), [[melanocytes]], [[langerhans-cells]], Merkel cells | ~0.05–1.5 mm (varies by site) | Epidermal turnover slows ~30–50% by age 70; rete ridges flatten, reducing epidermal-dermal adhesion and nutrient exchange; epidermal stem cells decline ([[stem-cell-exhaustion]]) [^chambers2020] |
| **Dermis** | [[dermal-fibroblasts]], mast cells, macrophages, endothelial cells, smooth muscle | ~1–4 mm | Dominant site of age-related structural change: collagen I/III fragmentation, MMP upregulation, p16+ fibroblast accumulation, solar elastosis in photoaged skin; loses ~20% of its thickness per decade after age 20 #gap/unsourced — dermis-thinning rate figure; Ganceviciene 2012 does not contain this figure (that paper is a therapeutics review); canonical histomorphometry reference needed |
| **Hypodermis (subcutaneous fat)** | Adipocytes, preadipocytes, vasculature | Variable (mm to cm) | Redistributes with age (centripetal shift); loss of subcutaneous fat in face and extremities contributes to dermal atrophy, easy bruising, and thermoregulation impairment #gap/unsourced |
| **Hair follicles** (appendage) | [[melanocyte-stem-cells]], keratinocyte progenitors, dermal papilla cells | Cyclic bulb structure | Follicle miniaturisation ([[androgenetic-alopecia]]); McSC depletion drives [[hair-greying]]; density declines with age |
| **Sebaceous glands** (appendage) | Sebocytes | Holocrine secretory unit | Hypertrophy with age but sebum production declines; barrier lipid composition shifts |
| **Eccrine sweat glands** (appendage) | Secretory + ductal cells | Coiled tubular | Density declines by ~15% per decade; thermoregulatory sweating capacity reduced in older adults #gap/unsourced |

---

## Major cell types in skin aging

### [[keratinocytes]]

Keratinocytes are the dominant epithelial cell of the epidermis (~90–95% of epidermal cells), forming the stratified squamous epithelium from the mitotically active basal layer up through the spinous, granular, and cornified layers. They maintain the skin's primary physical and chemical barrier via tight junctions, cornified cell envelopes, and lamellar lipid secretion. With age, basal keratinocyte proliferation declines, epidermal turnover lengthens, and the tight-junction network weakens — collectively reducing barrier efficiency [^chambers2020]. Keratinocytes are also the primary source of paracrine signals (SCF, ET-1) that drive focal melanocyte activation and solar lentigo formation in aged, UV-exposed skin #gap/unsourced — `[^skin-aging-ref]` was an undefined placeholder footnote; see [[skin-aging]] § Solar lentigines for sourced mechanism. Full cell-type detail on [[keratinocytes]] (R38 batch; planned).

### [[dermal-fibroblasts]]

Dermal fibroblasts synthesise and remodel the extracellular matrix of the dermis, producing collagen I and III (the dominant structural proteins), fibronectin, hyaluronic acid, and elastin. They are the most-studied senescent cell population in aged skin: p16^INK4a-positive senescent fibroblasts accumulate in the dermis with age, sharply reduce collagen synthesis, and secrete a pro-inflammatory SASP (IL-6, IL-8, MMP-1, MMP-3) [^ho2021]. Both replicative exhaustion and UV-induced stress-induced premature senescence (SIPS) converge on fibroblast senescence. The resulting SASP drives local chronic inflammation and matrix degradation — the central mechanistic driver of dermal atrophy and wrinkle formation. Senescent fibroblasts also play a transient beneficial role in wound healing via PDGF-AA secretion. Full cell-type detail on [[dermal-fibroblasts]] (R38 batch; planned).

### [[melanocytes]]

Melanocytes reside in the epidermal basal layer and hair follicle bulge, where they transfer melanin granules to surrounding keratinocytes to absorb UV radiation. In the interfollicular epidermis, melanocyte density declines approximately 6–8% per decade after age 30, contributing to reduced UV protection in aged skin #gap/unsourced — Ganceviciene 2012 does not contain this figure (that paper is a therapeutics review); canonical source for this figure is typically Gilchrest/Fitzpatrick melanocyte aging literature; primary histomorphometry reference needed. In sun-exposed sites, paracrine SCF signalling from UV-activated keratinocytes drives focal melanocyte proliferation, producing **solar lentigines** — see [[skin-aging]] § Solar lentigines. Full cell-type detail on [[melanocytes]] (R38 batch; planned).

### [[langerhans-cells]]

Langerhans cells are the resident dendritic cells of the epidermis and the first innate immune sentinels of the skin barrier. They constitute roughly 2–4% of epidermal cells in young adults, declining in density by approximately 20–40% in aged skin [^chambers2020] #gap/needs-replication — specific percentage range could not be confirmed against Chambers 2020 full PDF (PDF unavailable; abstract confirms qualitative decline only; full-text needed to verify the 20–40% figure). This depletion reduces innate immune surveillance (delayed contact hypersensitivity responses), impairs the afferent arm of skin-resident adaptive immunity, and contributes to the increased susceptibility of older adults to cutaneous infections and delayed vaccine responses. The decline is driven by impaired Langerhans cell self-renewal (dependent on IL-34/CSF1R signalling) and reduced replenishment from bone marrow-derived monocytic precursors. Full cell-type detail on [[langerhans-cells]] (R38 batch; planned).

### [[melanocyte-stem-cells]]

Melanocyte stem cells (McSCs) reside in the hair follicle bulge and sub-bulge niche, where they supply melanocytes to each new hair cycle. Progressive McSC depletion — driven by DNA damage accumulation, p53/p16 activation, and stem cell niche changes — is the primary mechanism of **hair greying** ([[hair-greying]]). Unlike interfollicular melanocytes, which decline gradually, follicular pigmentation is essentially binary per follicle: once McSCs are exhausted, the follicle produces white (unpigmented) hairs permanently [^paus2024]. Full cell-type detail on [[melanocyte-stem-cells]] (R38 batch; planned).

---

## Aging phenotypes

| Phenotype | Brief description |
|---|---|
| [[skin-aging]] | Umbrella phenotype: wrinkles, dermal atrophy, inelasticity, solar lentigines. Full mechanistic detail here. |
| [[hair-greying]] | Progressive depigmentation via McSC depletion in hair follicle bulge; universal after ~50 |
| [[androgenetic-alopecia]] | Follicle miniaturisation driven by androgen sensitivity + aging; affects ~50% of males by 50 |
| [[cherry-angioma]] | Benign vascular proliferations; prevalence increases with age; mechanism incompletely understood #gap/no-mechanism |
| Ear and nose enlargement | Continued cartilage growth throughout adulthood; well-recognised clinical observation; ear lobe elongation also occurs #gap/unsourced |

---

## Hallmark connections

### [[cellular-senescence]]

p16^INK4a-positive senescent [[dermal-fibroblasts]] accumulate progressively with age and in UV-damaged sites. Their SASP (IL-1α, IL-6, IL-8, MMPs) drives matrix degradation and local chronic inflammation. Both intrinsic (replicative) and extrinsic (UV-SIPS) pathways converge on fibroblast senescence. Senescent keratinocytes and endothelial cells contribute additional SASP in photoaged skin [^ho2021]. See [[skin-aging]] for quantitative detail.

### [[stem-cell-exhaustion]]

Skin has three distinct stem cell compartments subject to age-related decline: (1) **epidermal basal-layer progenitors** (keratinocyte renewal), (2) **hair follicle bulge stem cells** (hair cycling and appendage maintenance), and (3) **[[melanocyte-stem-cells]]** (follicular pigmentation). Depletion of each compartment drives distinct phenotypes — epidermal thinning, alopecia, and hair greying respectively.

### [[chronic-inflammation]]

The SASP of senescent skin cells maintains a persistent low-grade pro-inflammatory milieu in aged dermis — the skin manifestation of **inflammaging**. Aged skin shows elevated IL-1β, IL-6, IL-8, and TNF-α in the dermis and epidermis relative to young adult skin, alongside reduced anti-inflammatory IL-10 [^pilkington2021]. This drives Langerhans cell dysfunction, impaired wound healing, and amplified UV-induced MMP activation.

### [[loss-of-proteostasis]]

Collagen I fragmentation is the dominant loss-of-proteostasis phenotype in aged dermis: basal MMP-1 activity rises in senescent fibroblasts, accelerating collagen fragment generation; fragmented collagen further suppresses fibroblast collagen synthesis via oxidative stress, creating a self-amplifying degradation cycle. Elastin network disorganisation is an independent contributor — elastin has a biological half-life of decades and is poorly replaced in adult dermis.

### [[genomic-instability]]

Cumulative UV-induced DNA damage (cyclobutane pyrimidine dimers, 6-4 photoproducts) in epidermal keratinocytes and dermal fibroblasts is the dominant extrinsic source of genomic instability in skin. Even sub-erythemogenic UV doses (as low as 0.01 minimal erythema dose) activate AP-1 and NF-κB, driving MMP transcription and collagen degradation [^krutmann2017]. Accumulated somatic mutations in clonal keratinocyte populations underlie the age-associated risk of squamous cell carcinoma.

### [[epigenetic-alterations]]

Skin has tissue-specific DNA methylation aging signatures detectable at high accuracy (see § Skin as a systems-aging readout below). The pan-tissue [[biomarkers/horvath-clock-2013]] (verified) includes skin among its 51 calibration tissues; skin-specific clocks (Bormann 2016; Qi 2026) outperform it in epidermal samples.

### [[disabled-macroautophagy]]

Autophagy flux declines in aged keratinocytes and fibroblasts, allowing damaged organelles and protein aggregates to accumulate. Impaired mitophagy in aged keratinocytes is associated with the accumulation of dysfunctional mitochondria and elevated reactive oxygen species, compounding UV-driven oxidative stress. #gap/unsourced — primary citations for autophagy decline in aged human skin cells needed; mechanistic detail is on [[disabled-macroautophagy]].

---

## Therapeutic landscape

For the full mechanistic and clinical detail of skin-aging therapeutics, see [[skin-aging]] § Therapeutic landscape. A high-level overview:

- **UV protection (sunscreen, SPF 30+):** the best-evidenced primary prevention strategy, reducing CPD formation and the AP-1/NF-κB-MMP cascade. Evidence is observational/epidemiological [^krutmann2017].
- **Topical retinoids (tretinoin 0.025–0.1%):** gold-standard pharmacological intervention; inhibits AP-1-mediated MMP transcription (~50–80% reduction in MMP-1/MMP-3/MMP-9) and stimulates collagen synthesis via RAR-β. See [[skin-aging]] for sourced mechanism.
- **Senolytics** (dasatinib+quercetin, [[fisetin]]):** preclinical evidence for senescent fibroblast clearance and improved wound healing; no skin-specific aging RCTs published as of 2026. See [[senolytics]].
- **Topical epigenetic strategies:** early-stage (Qi 2026 DHM serum; no vehicle-controlled RCT yet). See [[skin-aging]] § Topical DNMT-inhibitors for full appraisal.

---

## Skin as a systems-aging readout

Skin is uniquely accessible for aging research: it is visible at the surface, safely biopsiable under local anaesthesia, and now samplable non-invasively via adhesive tape-strips (yielding superficial epidermal DNA for methylation analysis). This accessibility has made skin the dominant tissue for epigenetic clock development and validation.

The pan-tissue Horvath 2013 clock calibrated against skin among its 51 reference tissues (n=7,844 samples; MAE 3.6 yr held-out) [^horvath2013]. The Bormann 2016 epidermis-specific clock (n=108 females, 450k array) was the first tissue-dedicated skin methylation predictor [^bormann2016]. The 2026 Qi 23k clock (173 CpGs; CV MAE 5.66 yr; multi-ethnic validation MAE 4.88 yr; no Fitzpatrick-phototype bias) and the TapeLift clock both extend this to non-invasive tape-strip sampling with cross-ethnic applicability [^qi2026]. Bivalent-region hypermethylation (H3K4me3 + H3K27me3 poised enhancers) is a conserved skin-aging epigenetic signature across phototypes [^qi2026].

Beyond epigenetic clocks, skin biopsies provide access to [[dermal-fibroblasts]] for functional assays (collagen synthesis, MMP secretion, senescence markers), and the skin is the only barrier tissue where ultrasonographic dermal thickness, optical coherence tomography, and confocal reflectance microscopy provide real-time structural aging readouts in living subjects — all without tissue removal.

---

## Limitations and gaps

- `#gap/unsourced` — skin body-weight percentage (~15–16%) and surface area (~1.5–2.0 m²): previously attributed to Ganceviciene 2012 (a therapeutics review that does not contain these figures); canonical anatomy textbook reference needed
- `#gap/unsourced` — dermis thickness loss rate (~20% per decade after age 20): previously attributed to Ganceviciene 2012 (incorrect); canonical histomorphometry reference needed (Shuster 1975 / Gniadecka 1994 / Sandby-Møller 2003 are candidate primary sources)
- `#gap/unsourced` — interfollicular melanocyte density decline (~6–8% per decade after age 30): previously attributed to Ganceviciene 2012 (incorrect); Gilchrest/Fitzpatrick melanocyte aging literature is the likely canonical source
- `#gap/unsourced` — subcutaneous fat redistribution quantitative claims; eccrine sweat gland density decline rate; ear and nose enlargement mechanism
- `#gap/unsourced` — autophagy decline in aged human skin cells; primary citations needed for [[disabled-macroautophagy]] connection
- `#gap/needs-replication` — Langerhans cell density 20–40% decline figure (Chambers 2020): percentage range unverifiable; abstract confirms qualitative decline only; full PDF download failed
- `#gap/needs-replication` — UV-vs-intrinsic epigenetic clock acceleration in paired anatomic site studies (see [[skin-aging]] § Epigenetic alterations)
- `#gap/no-mechanism` — cherry angioma pathogenesis; cartilaginous appendage growth mechanism in aging
- `#stub` — sister cell-type pages [[dermal-fibroblasts]], [[keratinocytes]], [[melanocytes]], [[langerhans-cells]], [[melanocyte-stem-cells]] are R38-batch seeds; content pending
- `#stub` — subcutaneous fat / hypodermis as a compartment (no dedicated wiki page exists)
- `#stub` — [[dermis]] and [[epidermis]] tissue sub-pages (R38 batch; planned)

---

## Cross-references

- [[skin-aging]] (verified) — primary mechanistic hub; all quantitative claims on collagen fragmentation, MMP, senescence, solar lentigines, clocks live here
- [[dermal-fibroblasts]] (R38 batch; planned) — senescence accumulation, SASP, collagen synthesis
- [[keratinocytes]] (R38 batch; planned) — epidermal barrier, UV response, SCF paracrine signalling
- [[melanocytes]] (R38 batch; planned) — epidermal pigmentation, UV protection, lentigo formation
- [[langerhans-cells]] (R38 batch; planned) — innate immune sentinel; density decline with age
- [[melanocyte-stem-cells]] (R38 batch; planned) — hair follicle pigmentation; McSC depletion → [[hair-greying]]
- [[dermis]] (R38 batch; planned) — dermal compartment page
- [[epidermis]] (R38 batch; planned) — epidermal compartment page
- [[hair-greying]] (verified) — McSC depletion phenotype
- [[androgenetic-alopecia]] (existing) — follicle miniaturisation phenotype
- [[cherry-angioma]] (existing) — age-associated benign vascular phenotype
- [[cellular-senescence]] (verified) — hallmark; dermal fibroblast SASP is skin's canonical substrate
- [[epigenetic-alterations]] (existing) — hallmark; skin-specific clocks
- [[stem-cell-exhaustion]] (existing) — hallmark; three skin stem cell compartments
- [[chronic-inflammation]] (existing) — hallmark; inflammaging in aged dermis
- [[loss-of-proteostasis]] (existing) — hallmark; collagen fragmentation loop
- [[genomic-instability]] (existing) — hallmark; UV-induced CPD accumulation
- [[disabled-macroautophagy]] (existing) — hallmark; autophagy in aged keratinocytes/fibroblasts
- [[biomarkers/horvath-clock-2013]] (verified) — pan-tissue clock; skin among calibration tissues
- [[fisetin]] (existing) — senolytic relevant to skin senescent cell clearance
- [[senolytics]] (existing) — intervention class

---

## Footnotes

[^ganceviciene2012]: doi:10.4161/derm.22804 · Ganceviciene R, Liakou AI, Theodoridis A, Makrantonaki E, Zouboulis CC · review · Dermato-Endocrinology 2012;4(3):308-319 · n=N/A (review) · model: human · **Note:** this paper is a therapeutics review ("Skin anti-aging strategies") covering photoprotection, antioxidants, retinoids, chemical peels, IPL/lasers, injectable fillers, BTX, PRP, and HRT — it does NOT contain anatomy figures for body-weight percentage or dermis thickness loss per decade; those claims were incorrectly attributed to this paper; collagen content ~1%/yr decline (ref 30 therein = Shuster 1975) is mentioned in passing; local PDF confirmed

[^chambers2020]: doi:10.1111/imm.13152 · Chambers ES, Vukmanovic-Stejic M · review · Immunology 2020;160(2):116-125 · n=N/A (review) · model: human · covers epidermal barrier immunity, Langerhans cell decline (~20–40% density loss in aged skin), keratinocyte barrier changes, and T cell compartment alterations with age; archive: bronze OA, PDF download failed #gap/no-fulltext-access — Langerhans cell density percentage unverified pending full-text access

[^ho2021]: doi:10.1016/j.mad.2021.111525 · Ho CY, Dreesen O · review · Mech Ageing Dev 2021;198:111525 · n=N/A (review) · model: human + mouse · comprehensive review of cellular senescence in skin aging; p16+ dermal fibroblast and keratinocyte senescence, SASP components, and comparison of intrinsic vs photoaging contexts; archive: hybrid OA, PDF download failed #gap/no-fulltext-access — mechanism claims unverified pending full-text access

[^pilkington2021]: doi:10.1016/j.jid.2020.11.006 · Pilkington SM, Bulfone-Paus S, Griffiths CEM, Watson REB · review · J Invest Dermatol 2021;141(3):510-521 · n=N/A (review) · model: human · documents elevated dermal/epidermal IL-1β, IL-6, IL-8, TNF-α and reduced IL-10 in aged human skin; characterises the skin as a locus of inflammaging; archive: not_oa #gap/no-fulltext-access

[^krutmann2017]: [[studies/krutmann-2017-skin-aging-exposome]] · doi:10.1016/j.jdermsci.2016.09.015 · Krutmann J et al. · review · J Dermatol Sci 2017;85(3):152-161 · model: human · defines skin aging exposome; UV, air pollution, tobacco, nutrition, temperature, stress, sleep; sub-erythemogenic UV dose evidence sourced from Fisher 1996 (cited therein); local PDF available (archive confirmed)

[^horvath2013]: [[studies/horvath-2013-epigenetic-clock]] · doi:10.1186/gb-2013-14-10-r115 · Horvath S · Genome Biol 2013;14:R115 · n=7,844 non-cancer samples / 82 GEO datasets / 51 tissues · pan-tissue first-generation methylation clock; MAE 3.6 yr held-out; skin among calibration tissues; local PDF available (archive confirmed)

[^bormann2016]: doi:10.1111/acel.12470 · Bormann F, Rodríguez-Paredes M, Hagemann S et al. · observational · Aging Cell 2016;15:563-571 · n=108 white females ages 18–78 (450k methylation array) · first tissue-specific DNA methylation clock for human epidermis; SVM-based predictor MAE <5.25 yr vs Horvath clock MAE 14.5 yr on epidermis; open-access (gold OA); local PDF available (archive confirmed)

[^paus2024]: doi:10.1016/j.jid.2023.09.276 · Paus R, Sevilla A, Grichnik JM · review · J Invest Dermatol 2024;144(3):474-491 · n=N/A (review) · model: human + mouse · comprehensive review of hair graying mechanisms; McSC depletion model; distinguishes follicular (binary per-follicle) from interfollicular melanocyte aging; cautions against over-extrapolation from mouse models; local PDF available (archive confirmed)

[^qi2026]: [[studies/qi-2026-dhm-epigenetic-skin-aging]] · doi:10.1007/s13555-026-01764-4 · Qi M et al. · Dermatol Ther 2026 · n=17 (methylome pilot, multi-ethnic) + n=60 (product-use, Brazilian) · skin tape-strip epidermis clock; 23k-probe 173-CpG predictor; CV MAE 5.66 yr; multi-ethnic validation MAE 4.88 yr; no Fitzpatrick-phototype bias; bivalent-region hypermethylation conserved cross-ethnicity · Beiersdorf-funded; product-use arm open-label, no vehicle control
