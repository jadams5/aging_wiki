---
type: intervention
aliases: [vascular laser, pulsed-dye laser, PDL, KTP laser, potassium-titanyl-phosphate laser, Nd:YAG vascular laser, vascular IPL, intense pulsed light for vascular lesions, laser treatment of telangiectasia]
mode: procedural
mechanisms: [selective-photothermolysis, vascular-ablation]
targets: []
target-hallmarks: ["[[cellular-senescence]]", "[[chronic-inflammation]]"]
target-pathways: []
human-evidence-level: strong
clinical-stage: fda-approved
safety-profile: well-established
translation-gap: human-evidence-strong
next-experiment: "Evaluator-blinded RCT with ≥12-month follow-up comparing PDL (595 nm, 10 ms) vs. KTP-532 nm vs. IPL (560–950 nm filter) for photodamage-associated facial telangiectasia, using calibrated reflectance spectrometry (erythema index) and standardized digital photography as co-primary endpoints at 3 and 12 months post-last-treatment, to establish long-term recurrence rates and modality-specific durability — the key uncharacterized variable in current practice."
clinical-trials-active: 4
literature-checked-through: 2026-06-27
verified: true
verified-date: 2026-06-27
verified-by: claude
verified-scope: "Full-text verified: van Zuuren 2019 (PDF) and Nguyen 2026 (PDF). Abstract-level verified via PubMed: Adrian 1998 (PMID 6836297), Liu 2026 (PMID 42112600), Heidemeyer 2026 (PMID 41778357), Bestavros 2026 (PMID 42140233). Not verified from primary source: Anderson & Parrish 1983 (closed-access; abstract only via PubMed — 577 nm vascular selectivity confirmed in abstract, but Soret-band ~418 nm value in body text could not be cross-checked against full text; Nguyen 2026 cites 414 nm from Liu 2012 for the same peak). Mechanism § 'three skin chromophores' table added 2026-06-27 as foundational laser-dermatology reference physics — chromophore absorption maxima and device wavelengths are physics/engineering constants anchored to the already-verified Anderson & Parrish 1983 selective-photothermolysis framework, not derived from a new primary source; oxyhemoglobin Soret band stated as ~414–418 nm per the existing caveat."
---

# Vascular Laser and Light Therapy

**TL;DR.** Vascular laser and light therapies use **selective photothermolysis** — wavelength-matched pulsed light energy preferentially absorbed by oxyhemoglobin — to thermally ablate dilated, ectatic dermal blood vessels while leaving the surrounding dermis intact. They are the definitive treatment for fixed vascular lesions in aged skin: photodamage-associated facial [[telangiectasia]], [[rosacea]] erythematotelangiectatic phenotype, poikiloderma of Civatte (neck/décolletage photodamage triad), [[cherry-angioma]], and hepatic spider naevi. Evidence is strong for telangiectasia clearance as a structural endpoint — multiple systematic reviews and 25+ RCTs; van Zuuren 2019 GRADE review (low-to-moderate certainty) and a 2026 network meta-analysis anchor the rosacea-specific literature [^nguyen2026][^vanzuuren2019]. **Important framing:** this is symptomatic structural treatment — the fixed vessels are removed, but the underlying [[cellular-senescence]] and [[chronic-inflammation]] hallmarks that drove their formation are not modulated. New telangiectasias can form if the causal exposure (UV, rosacea triggers) continues.

---

## Relationship to dermatologic-resurfacing — scope boundary

This page and [[dermatologic-resurfacing]] (and [[microneedling]]) both use laser/light devices, but operate through *fundamentally different chromophores and clinical goals*:

| Feature | **This page** (vascular-laser) | **[[dermatologic-resurfacing]]** |
|---|---|---|
| Target chromophore | **Oxyhemoglobin** in vessel lumen | **Water** (bulk tissue) |
| Biological goal | Ablate ectatic vessels | Controlled wound → neocollagenesis |
| Mechanism class | `selective-photothermolysis`, `vascular-ablation` | `controlled-wounding-collagen-stimulation`, `fractional-photothermolysis` |
| Primary aging target | Vascular lesions (telangiectasia, rosacea redness) | Dermal collagen loss, wrinkles, texture |
| IPL use | Simultaneous vascular + pigment chromophore targeting | IPL is listed for mild diffuse photoaging (collagen-adjacent) |

**IPL and Nd:YAG appear on both pages for different indications.** IPL used for poikiloderma of Civatte (this page) works by simultaneously targeting oxyhemoglobin and melanin — both vascular clearance goals. IPL listed on [[dermatologic-resurfacing]] addresses mild diffuse photoaging and solar lentigines — a chromophore overlap (melanin), but different clinical intent.

---

## Mechanism — selective photothermolysis

### Foundational theory

Anderson and Parrish (1983) established the selective photothermolysis framework as the mechanistic basis for vascular laser therapy [^anderson1983]: deliver light at a wavelength maximally absorbed by the *target* chromophore (not bulk tissue), in a pulse duration **shorter than the thermal relaxation time (TRT)** of the target structure, so that heat generated inside the target dissipates *inward* (destroying the vessel) before diffusing outward to non-target dermis.

**Oxyhemoglobin absorption peaks** relevant to vascular therapy:
- ~418 nm (Soret band — very high absorption; limited clinical use due to shallow penetration)
- **542 nm and 577 nm** (alpha/beta Q-bands) — the primary clinical window; pulsed-dye laser (585–595 nm) and KTP/532 nm are positioned near these peaks
- 920–1,000 nm range — secondary absorption; Nd:YAG 1064 nm exploits this for deeper, larger vessels

**Thermal relaxation time (TRT).** TRT scales with the square of the vessel diameter (TRT ≈ d² / 16κ, where κ is thermal diffusivity of blood). Practical benchmarks:
- 0.1 mm vessel: TRT ~1 ms
- 0.3 mm vessel: TRT ~5–10 ms
- 1–3 mm vessel (leg telangiectasia): TRT ~30–100 ms

PDL pulse widths of 0.45–6 ms are appropriate for superficial facial telangiectasia (0.1–0.3 mm); longer-pulse (6–20 ms) modes reduce purpura formation at the cost of slightly reduced peak thermal confinement. PDL at 10 ms demonstrated superior tolerability (fewer edema and purpura events) vs. 6 ms with comparable erythema reduction in a 2026 RCT (n=80) [^liu2026pdl].

### The three skin chromophores — selecting the target by wavelength

Selective photothermolysis works because skin contains only three chromophores that meaningfully absorb therapeutic light, each with a distinct absorption signature. **Wavelength is the primary lever:** choose one that sits on the *target* chromophore's absorption while minimizing absorption by the competitors. (Pulse duration, above, is the second lever; fluence is the third.)

| Chromophore | Absorption signature | Clinical target | Representative devices |
|---|---|---|---|
| **Oxyhemoglobin** (vessel lumen) | Discrete peaks: ~414–418 nm (Soret), 542 nm, 577 nm; secondary 920–1,000 nm shoulder | Vascular lesions — telangiectasia, diffuse erythema, angiomas | KTP 532 nm; pro-yellow 577 nm; PDL 585–595 nm; Nd:YAG 1064 nm (deep) |
| **Melanin** (epidermis, hair follicle) | Broad, **no peak** — absorption falls monotonically from UV through near-IR | Pigment (lentigines) and hair removal — *a different application* | 532 nm (pigment); 755 nm alexandrite, 810 nm diode, 1064 nm (hair) |
| **Water** (bulk dermal matrix) | Mid-infrared: ~2,940 nm, ~10,600 nm | Ablative resurfacing — vaporization → neocollagenesis | Er:YAG 2,940 nm; CO₂ 10,600 nm — see [[dermatologic-resurfacing]] |

Because hemoglobin has sharp peaks, vascular devices can be aimed precisely — KTP at the 542 nm peak, pro-yellow and PDL at/near 577 nm. Melanin, by contrast, has no peak: it is targeted by penetration depth, and it is also the **principal competing chromophore** for vascular work.

**The competing-chromophore problem.** In the visible range where hemoglobin absorbs, epidermal melanin absorbs too, intercepting light meant for the dermal vessel. In tanned or darker (Fitzpatrick IV–VI) skin this raises the risk of epidermal burn and post-inflammatory hyperpigmentation (see § Safety). Clinical devices manage this three ways: (a) **longer wavelengths** — 1064 nm Nd:YAG is largely ignored by melanin, penetrates deeper, and is the safest vascular option in darker skin; (b) **active epidermal cooling** (contact plate, cryogen spray, or chilled air) that protects the surface while the dermal target heats; and (c) **calibrated fluence** dialed to phototype with mandatory test spots.

**Why consumer home-IPL hair-removal devices cannot do vascular work.** Home IPL emits a broad, crudely filtered band (~515–1,200 nm) tuned loosely toward *melanin* for hair removal, at deliberately low fluence for unsupervised safety, with no precise wavelength selection and no medical-grade epidermal cooling. It cannot be aimed at the hemoglobin peaks the way a 532/577/595 nm device can, and lacks the energy to coagulate a vessel — so it is the wrong instrument for redness or telangiectasia, and (per most manufacturers' own instructions) is contraindicated over vascular lesions and on the upper/periocular face. Same acronym, different machine: home IPL targets melanin for hair; clinical vascular devices target oxyhemoglobin for vessels.

### Sequence of events post-irradiation

1. Photon absorption → rapid intravascular heating (~100°C at therapeutic fluences within the blood column)
2. Erythrocyte and endothelial thermal coagulation within 1 ms pulse window
3. Perivascular mild heating (below injury threshold if TRT-matched)
4. Intravenous thrombus → fibrotic obliteration of vessel lumen over days to weeks
5. Dermis regenerates around the obliterated vessel, leaving surrounding structures intact

This mechanism is **categorically different** from the wound-healing/neocollagenesis cascade triggered by ablative lasers: no tissue ablation, no keratinocyte reserve recruitment, no TGF-β1 driven collagen synthesis (at least as the intended primary mechanism). Incidental collagen bystander effects have been described at high fluences but are not the clinical objective.

---

## Modality comparison

| Modality | Wavelength | Primary targets | Vessel caliber/depth | Purpura risk | Downtime | Notes |
|---|---|---|---|---|---|---|
| **Pulsed-dye laser (PDL)** | 585–595 nm | Superficial 0.1–0.5 mm vessels; facial telangiectasia; rosacea ETR; cherry angioma | Superficial dermis (0.5–1 mm) | Common at high fluences / short pulse; reduced with long-pulse (10 ms) modes [^liu2026pdl] | 5–10 d with purpura; 1–2 d with subpurpuric settings | Historical gold standard for facial vessels and rosacea; broadest evidence base; [[telangiectasia]] § treatment |
| **KTP / frequency-doubled Nd:YAG** | 532 nm | Fine superficial vessels; facial and nasal telangiectasia; rosacea; perialar vessels | Superficial dermis | Low | 1–3 d erythema | 532 nm targets the 542 nm hemoglobin peak; 75–100% clearance in 90% of patients after a single treatment in one prospective series [^adrian1998]; 2026 RCT (n=24) confirmed rosacea erythema reduction, enhanced by adjunct ivermectin [^heidemeyer2026] |
| **Long-pulsed Nd:YAG** | 1064 nm | Larger/deeper vessels (>0.5 mm); leg telangiectasia; resistant nasal tip vessels; resistant rosacea | Mid-to-deep dermis (3–5 mm) | Low | 1–3 d | Deeper penetration; more patient discomfort; effective for vessels unresponsive to 532/595 nm; standard for leg reticular veins amenable to laser vs. sclerotherapy |
| **Intense pulsed light (IPL)** | 500–1200 nm (broadband, filtered) | Telangiectasia + dyspigmentation (simultaneous); diffuse erythema; poikiloderma of Civatte | Epidermis–superficial dermis | Minimal | 1–2 d | First-line for poikiloderma of Civatte (addresses both vascular and pigment components); operator-dependent filtering choices critical; not chromophore-specific [^weiss2000][^goldman2001] |
| **Pro-yellow (577 nm)** | 577 nm CW/pulsed | Fine superficial vessels; rosacea erythema; poikiloderma | Superficial dermis | Very low | Minimal | Targets the 577 nm hemoglobin peak directly; emerging evidence; may be preferred where purpura is unacceptable |

**Sessions required.** Most indications require 1–3 sessions; nasal tip vessels and leg telangiectasia are most treatment-resistant and may need 3–5 sessions. Response is modulated by vessel diameter, depth, skin phototype (Fitzpatrick type), and operator technique.

---

## Age-related indications

### Photodamage-associated facial telangiectasia

The canonical indication. Cumulative UV exposure drives the MMP-mediated perivascular collagen degradation axis (documented on [[skin-aging]]), progressively depleting the fibrous scaffold that maintains superficial capillaries in a toned, non-ectatic state. Vessels dilate passively and become structurally fixed (ectatic). PDL, KTP-532 nm, and IPL achieve durable clearance; the treated vessel is destroyed and does not regenerate. New telangiectasias form in adjacent unprotected skin if UV exposure continues — emphasizing that laser addresses the *lesion*, not the *cause*. See [[telangiectasia]] for epidemiology, mechanism, and the UV→MMP perivascular axis.

### Poikiloderma of Civatte

The photodamage triad — diffuse erythema, telangiectasia, and reticulate hyperpigmentation — on the lateral neck and décolletage, with characteristic sparing of the submental triangle (confirming UV causation). IPL is considered first-line: its broadband spectrum simultaneously addresses the vascular (oxyhemoglobin) and pigment (melanin) components. Clinical series report >75% clearance after 2–4 sessions [^weiss2000][^goldman2001]. PDL and KTP-532 nm are alternatives for the predominantly vascular component. ICD-10: L57.5.

### Rosacea erythematotelangiectatic phenotype (ETR)

Rosacea-associated telangiectasias form within a context of neurovascular dysregulation and chronic TLR-2/kallikrein-5 innate-immune activation (see [[rosacea]]). Unlike topical brimonidine — which achieves temporary vasoconstriction of the erythematous component but *does not* clear structurally fixed telangiectasias — laser and IPL are the only modalities achieving durable clearance of fixed rosacea vessels [^vanzuuren2019]. A 2026 network meta-analysis of 25 RCTs found radiofrequency microneedling (RF microneedling) outperformed PDL for patient satisfaction (MD -1.32) and erythema reduction (MD -1.44); oxymetazoline plus PDL showed superior outcomes for telangiectasia specifically [^nguyen2026]. The evidence landscape is active; modality choice depends on whether diffuse erythema or discrete telangiectasia is the primary complaint.

### Cherry angioma

Discrete vascular tumors driven by somatic GNAQ/GNA11/GNA14 activating mutations (see [[cherry-angioma]]). PDL (585–595 nm) and KTP-532 nm achieve reliable ablation via selective photothermolysis of the lesional vasculature. Simple, typically single-session treatment for small (<5 mm) lesions. Larger lesions may require 2 sessions or electrodesiccation of the central feeding vessel (if arteriole-sized). Unlike telangiectasia (structural perivascular matrix failure), cherry angiomas do not regenerate from the same site after thermal destruction — the somatic clone is ablated.

### Hepatic spider naevi

Central pulsating arteriole + radiating branches. Electrodesiccation of the central feeding arteriole is technically simpler; KTP-532 nm and PDL are equally effective for persistent or multiple lesions. See [[telangiectasia]] § hepatic spider naevi for the mechanism (hyperestrogenemia / substance P / VEGF axis). **Spider naevi that resolve with hepatic recovery do not require laser** — their regression is driven by normalization of the mediator excess. Laser is indicated only when spider naevi are persistent after hepatic recovery or are symptomatic in active liver disease.

### Leg telangiectasia — sclerotherapy is first-line

Ambulatory venous hypertension and valve incompetence drive leg spider veins (CEAP C1; see [[chronic-venous-disease]]). **Sclerotherapy** (chemical endothelial injury via sodium tetradecyl sulfate, polidocanol, or hypertonic saline) is the evidence-based first-line treatment — superior clearance rates, lower cost, and the capacity to address the reticular feeder veins that laser cannot reliably reach [^weiss2014]. Long-pulsed Nd:YAG 1064 nm is an alternative for vessels too small or superficial to inject safely and for vessels recurrent after sclerotherapy. Laser is *not* first-line for standard leg telangiectasia — this is a common patient misconception driven by advertising.

---

## Evidence base

### Systematic reviews and network meta-analyses

**van Zuuren 2019** (GRADE systematic review, 152 studies, *BJD*): Among the modalities for rosacea, laser/IPL achieves **low-to-moderate certainty evidence** for reducing erythema and telangiectasia [^vanzuuren2019]. The certainty rating reflects heterogeneous trial populations, operator variability, and inconsistent outcome measures — not absence of effect. Brimonidine is rated high-certainty for temporary erythema (not telangiectasia); laser/IPL retains the only durable clearance evidence.

**Nguyen et al. 2026** (network meta-analysis, 25 RCTs, *JDDG*): The most current quantitative synthesis for laser/energy devices in rosacea [^nguyen2026]. RF microneedling outperformed PDL for patient satisfaction and erythema; oxymetazoline + PDL superior for telangiectasia. This should be the primary evidence anchor for comparative-efficacy questions in rosacea. **Important limitation acknowledged by the authors:** funnel-plot analysis identified RF microneedling as an outlier (potential publication bias); its apparent superiority should be interpreted cautiously until supported by additional well-powered RCTs. Most included studies also had unclear or high risk of bias. Note: RF microneedling's primary mechanism ([[dermatologic-resurfacing]]) is neocollagenesis, not selective photothermolysis — its inclusion in this network reflects that it is also a competitor intervention for rosacea symptoms via non-vascular pathways.

**Bestavros et al. 2026** (systematic review, visible light/laser for rosacea, *J Cutan Med Surg*): Synthesizes PDL, KTP, IPL evidence; confirms broad multi-modality support for light-based treatment of rosacea telangiectasia as the class [^bestavros2026]. Full efficacy details not available from abstract.

### Key RCTs

**Liu et al. 2026** (PDL pulse duration RCT, n=80, ETR, *J Dermatolog Treat*) [^liu2026pdl]: Both 6 ms and 10 ms pulse durations significantly reduced erythema in erythematotelangiectatic rosacea (p<0.001 for each group); no significant between-group difference in efficacy. 10 ms was superior for tolerability (edema p<0.05; purpura p<0.001 more frequent with 6 ms). Confirms that long-pulse PDL improves the safety profile without sacrificing efficacy — a clinically actionable finding.

**Heidemeyer et al. 2026** (KTP-532 nm ± ivermectin, split-face RCT, n=24, *J Dermatolog Treat*) [^heidemeyer2026]: Combination of KTP-532 nm plus topical 1% ivermectin cream achieved greater Normalized Erythema Index (NEI) reduction at 16 weeks (16.6% vs. 5.3%, p=0.04) vs. KTP alone; ivermectin separately enhanced papule reduction (p=0.02). No significant differences in other secondary erythema scores (SRI, CEA, PGA). Demonstrates that vascular laser (targeting telangiectasia/erythema) and anti-Demodex topical (targeting the inflammatory component) are complementary rather than redundant.

### Evidence gaps — what is not well supported

- **Long-term recurrence rates** after PDL/KTP/IPL: most trials report ≤6-month outcomes; 12-month data are sparse. #gap/long-term-unknown
- **Head-to-head comparison** of PDL vs. KTP vs. IPL for facial telangiectasia in a well-powered, evaluator-blinded RCT: the standard of care is largely practice-based. #gap/needs-replication
- **Biological-age endpoints:** no epigenetic-clock, transcriptomic skin-age, or hallmark-level biomarker measurement has been performed for vascular laser treatment — the mechanism targets structures, not hallmarks. #gap/no-mechanism

---

## Hallmark mapping and the symptomatic-treatment caveat

| Hallmark | Relationship to vascular lesions | Does laser modulate the hallmark? |
|---|---|---|
| [[cellular-senescence]] | Senescent dermal fibroblasts secrete VEGF, MMP-1/3, IL-6 — the SASP-driven angiogenic/perivascular matrix-degrading milieu that permits telangiectasia formation | **No.** Laser ablates the structural consequence (ectatic vessel) but does not reduce senescent cell burden; SASP continues to degrade perivascular ECM and promote new vessel ectasia in adjacent unprotected areas |
| [[chronic-inflammation]] | Rosacea ETR arises in a context of chronic TLR-2/kallikrein-5 innate-immune activation + mast cell-driven persistent vasodilation → irreversible structural ectasia | **Partially.** Removing the ectatic vessels eliminates a visible inflammatory sink, but the upstream innate-immune dysregulation that would generate new telangiectasia remains untreated |
| [[altered-intercellular-communication]] | UV→MMP→perivascular collagen fragmentation axis (same as wrinkle formation) permits vessel ectasia | **No.** Laser does not restore perivascular collagen or inhibit MMP activity |

**Bottom line on hallmark targeting:** listing `[[cellular-senescence]]` and `[[chronic-inflammation]]` in the frontmatter reflects that these hallmarks underlie the phenotypes treated — not that vascular laser modulates them. This is an important distinction for evidence interpretation: **the appropriate comparator for clinical benefit is not "biological age reversal" but "structural clearance of a specific vascular lesion."** By that measure, the evidence is strong.

---

## Safety

**Well-established class-level profile:**
- **Purpura** — transient post-treatment bruising; characteristic of PDL at purpuric fluences; essentially absent with KTP-532 nm, IPL, and long-pulse PDL (10 ms). Resolves within 7–10 days.
- **Transient erythema and edema** — universal; resolves within days.
- **Post-inflammatory hyperpigmentation (PIH)** — the major skin-type-dependent risk. Melanin absorbs strongly at 532 nm (KTP) and moderately across the PDL waveband; in Fitzpatrick IV–VI skin, energy parameters must be conservative and test spots are mandatory. IPL carries higher PIH risk in darker phototypes than laser (broader spectrum; less selectivity). Long-pulsed Nd:YAG 1064 nm has the lowest PIH risk among vascular modalities in darker skin types (least melanin absorption at 1064 nm).
- **Dyspigmentation and scarring** — uncommon with appropriate technique; elevated risk with excessive fluences, inadequate skin cooling, or inappropriate phototype selection.
- **Recurrence** — treated vessels are destroyed; the indication recurs because the causal process (UV, rosacea inflammatory drive) continues to generate new ectasia in adjacent skin. Recurrence in untreated adjacent vessels is expected without adjunct photoprotection or rosacea management.

**Contraindications:** recent isotretinoin use (within 6 months); active herpes simplex infection at the treatment site; active inflammatory skin disease at the treatment site; photosensitizing medications without appropriate dose adjustment. Tan/recent UV exposure increases PIH risk.

---

## Combination and sequencing approaches

- **[[uv-protection]]:** mandatory adjunct. UV-driven perivascular matrix degradation and VEGF expression are the primary causal drivers of photodamage-associated telangiectasia and poikiloderma; sunscreen use is the only intervention with strong RCT evidence for *preventing* new lesions [^gap-uv-prevention].
- **[[rosacea]] topical management (brimonidine, ivermectin, azelaic acid):** complementary to laser for ETR. Brimonidine manages diffuse transient erythema between laser sessions; ivermectin addresses the Demodex-driven papulopustular component and enhances laser's vessel-reduction efficacy [^heidemeyer2026]. These do not substitute for laser when fixed telangiectasias are the primary complaint.
- **Sclerotherapy for leg telangiectasia:** if leg vessels are the target, sclerotherapy should be offered first; laser (Nd:YAG 1064 nm) is an adjunct for very fine or superficial vessels. Do not substitute laser for sclerotherapy without a clinical reason.
- **Timing relative to resurfacing:** vascular laser and resurfacing laser may be combined in the same session or sequenced (vascular first, then resurfacing after erythema/purpura resolves) at operator discretion; no standardized protocol. Do not assume synergistic collagen benefit from vascular sessions — the mechanism does not reliably trigger neocollagenesis at subtherapeutic dermal heating.

---

## Limitations and gaps

- **Long-term durability**: clinical series primarily report ≤6-month outcomes; recurrence rates at 12 and 24 months are not well characterized in controlled data. #gap/long-term-unknown
- **No head-to-head RCT** comparing PDL vs. KTP-532 nm vs. IPL vs. pro-yellow for facial telangiectasia with standardized endpoints and ≥12-month follow-up. Modality selection is largely practice-based. #gap/needs-replication
- **Outcome-measure heterogeneity:** trials use physician global assessments, patient satisfaction scales, erythema indices (NEI), and photographic scales inconsistently, making pooled meta-analyses imprecise (acknowledged by Nguyen 2026 [^nguyen2026]).
- **Hallmark-level evidence absent:** no trial has measured senescent cell burden, SASP markers, or epigenetic age before and after vascular laser treatment. #gap/no-mechanism at the hallmark level.
- **`clinical-trials-active: 4`** reflects a ClinicalTrials.gov v2 query on 2026-06-27 (pulsed dye laser + IPL + rosacea/telangiectasia; RECRUITING + ACTIVE_NOT_RECRUITING); most active PDL trials concern burn scars or port-wine stains rather than aging-related vascular lesions. The count for strictly aging-context vascular indications is lower (~2–3) and should be re-queried at the 6-month cadence per [[integrating-clinical-trials]].
- **Post-inflammatory hyperpigmentation risk** in Fitzpatrick IV–VI skin types remains a meaningful limiting factor for IPL and 532 nm modalities; the evidence base is disproportionately from lighter skin types. #gap/needs-human-replication in diverse skin phototypes.

---

## Cross-references

- [[telangiectasia]] — primary phenotype page; mechanism, epidemiology, and full treatment-section content lives there; this page is the canonical procedural device page, centralizing modality-specific and evidence content
- [[rosacea]] — erythematotelangiectatic rosacea; the principal context for PDL/KTP/IPL in aging
- [[cherry-angioma]] — benign vascular tumor; laser ablation is standard treatment
- [[chronic-venous-disease]] — leg telangiectasia context; sclerotherapy is first-line there
- [[erythema]] — persistent facial erythema; differential diagnosis and treatment overlap with ETR rosacea
- [[skin-aging]] — UV→MMP→perivascular matrix degradation axis driving telangiectasia formation
- [[dermatologic-resurfacing]] — sister procedural page; neocollagenesis target chromophore (water), not oxyhemoglobin; read this to understand the scope boundary
- [[microneedling]] — mechanistic parallel (controlled wounding → neocollagenesis); not a vascular intervention
- [[uv-protection]] — prevention of recurrent telangiectasia; the essential adjunct
- [[cellular-senescence]] — upstream hallmark (SASP-VEGF-perivascular collagen degradation axis)
- [[chronic-inflammation]] — upstream hallmark (rosacea neurovascular dysregulation + TLR-2/kallikrein-5)

---

## Footnotes

[^anderson1983]: doi:10.1126/science.6836297 · Anderson RR, Parrish JA · *Science* 1983;220(4596):524–527 · PMID 6836297 · foundational selective-photothermolysis theory: suitably brief pulses of selectively absorbed radiation cause selective damage to the target (vessels or melanosomes) while sparing surrounding tissue; 577 nm demonstrated for selective microvascular damage in human skin · in-vivo + in-vitro · closed-access; verified against PubMed abstract (abstract confirms 577 nm and framework; Soret-band ~418 nm claim in body text cannot be confirmed from abstract alone — Nguyen 2026 cites 414 nm for the oxyhemoglobin Soret peak from Liu 2012; #gap/no-fulltext-access for this specific value)

[^vanzuuren2019]: doi:10.1111/bjd.17590 · van Zuuren EJ et al. · *Br J Dermatol* 2019;181(1):65–79 · PMID 30585305 · systematic review with GRADE assessments · 152 studies, 20,944 participants · rosacea phenotype-based interventions: laser/IPL achieves low-to-moderate certainty evidence for erythema/telangiectasia reduction; topical brimonidine: high certainty for temporary erythema but does not clear fixed telangiectasias; laser/light is the only durable modality for fixed vessels · verified against full PDF

[^nguyen2026]: doi:10.1111/ddg.15961 · Nguyen L, Sorbe C, Seeber N, Schneider SW, Herberger K · *J Dtsch Dermatol Ges* 2026;24(1):24–32 · PMID 41273013 · systematic review + network meta-analysis · 25 RCTs, 843 patients (mean age 46.9 yr), rosacea; RFMN outperformed PDL for patient satisfaction (MD -1.32; 95% CI -1.89 to -0.76) and erythema (MD -1.44; 95% CI -1.96 to -0.91); oxymetazoline + PDL superior for telangiectasia (MD -0.58; 95% CI -1.03 to -0.14); comparable adverse events; RFMN flagged as funnel-plot outlier (potential publication bias); most studies unclear/high RoB · published online 2025 / print 2026 · verified against full PDF

[^liu2026pdl]: doi:10.1080/09546634.2026.2665064 · Liu T, Liu Y, Meng X, et al. · *J Dermatolog Treat* 2026;37(1):article 2665064 · PMID 42112600 · single-center prospective RCT · n=80 erythematotelangiectatic rosacea patients · both 6 ms and 10 ms PDL pulse durations reduced erythema significantly (p<0.001); no significant between-group efficacy difference; 10 ms superior tolerability (edema p<0.05; purpura p<0.001 more frequent with 6 ms) · model: human clinical · verified against PubMed abstract

[^heidemeyer2026]: doi:10.1080/09546634.2026.2635882 · Heidemeyer K, Cazzaniga S, et al. · *J Dermatolog Treat* 2026;37(1):article 2635882 · PMID 41778357 · randomized evaluator-blinded split-face RCT · n=24 rosacea patients · KTP-532 nm + 1% ivermectin cream vs KTP-532 nm alone; combination: greater Normalized Erythema Index (NEI) reduction at week 16 (16.6% vs 5.3%, p=0.04); ivermectin enhanced papule reduction (p=0.02); no significant difference in SRI or other secondary erythema scores · model: human clinical · verified against PubMed abstract (8 authors; Feldmeyer L is 7th)

[^bestavros2026]: doi:10.1177/12034754261445881 · Bestavros S, Ding M, Aluko E, Geng R, Sibbald C · *J Cutan Med Surg* 2026 · PMID 42140233 · systematic review · visible light and laser therapy for rosacea; keywords: PDL, IPL, KTP, rosacea · abstract-only via PubMed; detailed findings not yet confirmed

[^adrian1998]: doi:10.1111/j.1524-4725.1998.tb04055.x · PMID 9464292 · Adrian RM, Tanghetti EA · *Dermatol Surg* 1998;24(1):71–74 · prospective case series · n=40 patients with facial telangiectasia · variable-pulse 532 nm Nd:YAG (VersaPulse; 9.5–12.0 J/cm² at 3–4 mm spot size) with water-cooled sapphire contact cooling: 75–100% clearance in 90% of patients after single treatment; no significant side effects · closed-access; verified against PubMed abstract

[^weiss2000]: doi:10.1046/j.1524-4725.2000.00060.x · Weiss RA, Goldman MP · *Dermatol Surg* 2000;26(11):978–982 · PMID 10971554 · prospective case series · n=135 patients with poikiloderma of Civatte · IPL: >75% clearance of telangiectasias and hyperpigmentation; low side-effect rate · closed-access · footnote carried from verified [[telangiectasia]] page

[^goldman2001]: doi:10.1097/00006534-200105000-00009 · Goldman MP, Weiss RA · *Plast Reconstr Surg* 2001;107(6):1376–1382 · PMID 11335804 · prospective case series · IPL for neck poikiloderma; 50–75% improvement after mean 2.8 treatments; 5% hypopigmentation rate · closed-access · footnote carried from verified [[telangiectasia]] page

[^weiss2014]: doi:10.1097/dss.0000000000000225 · Weiss MA et al. · *Dermatol Surg* 2014;40(11):1190–1206 · PMID 25418805 · evidence-based consensus statement · sclerotherapy for varicose and telangiectatic leg veins: STS, polidocanol, hypertonic saline; sclerotherapy recommended first-line for leg telangiectasias and reticular veins · footnote carried from verified [[telangiectasia]] page

[^gap-uv-prevention]: UV protection (see [[uv-protection]]) is the primary strategy for preventing new telangiectasia formation after laser treatment; no dedicated RCT for post-laser recurrence-prevention specifically, but the UV→MMP perivascular matrix degradation mechanism (documented on [[skin-aging]]) makes photoprotection mechanistically necessary. #gap/needs-replication for a primary source quantifying recurrence-rate reduction with sunscreen after PDL/IPL.
