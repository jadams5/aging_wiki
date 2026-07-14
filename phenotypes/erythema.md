---
type: phenotype
aliases: [facial erythema, cutaneous erythema, chronic skin redness, skin redness aging]
icd-10: L53.9
affected-tissues: ["[[skin]]"]
underlying-hallmarks:
  - "[[cellular-senescence]]"
  - "[[chronic-inflammation]]"
  - "[[genomic-instability]]"
  - "[[loss-of-proteostasis]]"
typical-onset: "Photodamage-driven diffuse erythema and telangiectasia: 30s–40s cumulative onset; rosacea peaks age 30–60; vascular proliferations (cherry angiomas) increase progressively through adulthood; seborrheic dermatitis erythema begins any age but worsens with altered sebum composition and microbiome shifts with aging"
prevalence-65plus: "Near-universal in some degree in sun-exposed Caucasian populations; clinically significant rosacea ~2–5%; poikiloderma of Civatte highly prevalent in photoaged skin over 60; background diffuse facial redness increasingly common in aggressive cosmetic-treatment contexts"
literature-checked-through: 2026-06-27
verified: true
verified-date: 2026-06-27
verified-by: claude
verified-scope: "Yamasaki 2007 (doi:10.1038/nm1616) full-text PDF verified end-to-end. Li 2017, Yano 2004, Blaudschun 2002, Steinhoff 2013, Katoulis 2002, Thibaut 2017, Gao 2025, Chung 2007 abstract-verified via PubMed + Crossref. Zhai 2024 and Nguyen 2026 abstract-verified via Crossref; DOIs added. Liu 2023 oxymetazoline meta-analysis: n=2,298, ~38% CEA week-4, 1% rebound rate not confirmed in abstract; flagged as abstract-unverifiable. Six citation-metadata corrections applied (see verified-scope detail in log). Phenotype page: R25 supersession check not required per schema."
---

# Erythema — Chronic, Cumulative-Insult Forms

Visible skin redness arising from increased cutaneous blood flow, vessel dilation, vessel proliferation, or local inflammation. This page covers the **chronic, persistent, and cumulative-insult forms** relevant to aging biology: conditions where erythema reflects structural vascular damage, innate immune dysregulation, or barrier deterioration accumulated over years to decades.

**Scope note — explicitly out of scope:** acute transient erythema including sunburn (acute UVB injury), acute cellulitis, drug eruptions, and urticaria. These are not covered here.

**ICD note:** ICD-10 L53.9 ("erythematous condition, unspecified") is the best umbrella code for this phenotype. The R23.x family (R23.2 = flushing/transient vasomotor) covers symptom-level acute erythema; those transient forms are scoped out above. Specific sub-phenotypes have their own codes: rosacea L71.x, poikiloderma of Civatte L57.5, seborrheic dermatitis L21.x, menopausal vasomotor flushing N95.1, telangiectasia I78.x, cherry angioma I78.1.

---

## The three mechanistic axes

Chronic erythema in aging arises through three partly overlapping axes that serve as the organizing spine of this page.

### (a) Vascular axis — vasodilation, telangiectatic ectasia, angiogenesis

**UV-driven VEGF/TSP-1 imbalance.** Cumulative UVB irradiation upregulates vascular endothelial growth factor (VEGF) in keratinocytes while simultaneously downregulating the anti-angiogenic factor thrombospondin-1 (TSP-1) [^yano2004]. This imbalance drives capillary proliferation in the papillary dermis, producing the vascular ectasia visible as diffuse redness and telangiectasia in photoaged skin. Neutralising VEGF antibodies partially abrogated UVB-induced angiogenesis in mouse skin [^blaudschun2002], establishing VEGF as the primary paracrine driver. The acute angiogenic response to a single UV dose resolves within ~two weeks; chronic cumulative exposure produces permanent ectatic vessels [^chung2007].

**Perivascular collagen loss enabling vessel ectasia.** UV-driven MMP-1/MMP-3 activation (via AP-1 / NF-κB — see [[skin-aging]] § Mechanism by hallmark for the sourced mechanism; not restated here) fragments the perivascular collagen support matrix in the papillary dermis. Collagen fibres normally constrain vessel diameter; their loss allows passive vessel expansion and removes the mechanical restoring force limiting ectasia. This structural change is permanent without laser ablation.

**SASP angiogenic milieu.** Accumulation of p16^INK4a-positive senescent dermal fibroblasts and endothelial cells with age (see [[cellular-senescence]]) produces a pro-angiogenic SASP including VEGF-A, hepatocyte growth factor (HGF), and MMPs. This milieu amplifies UV-induced vessel proliferation and likely contributes to the progressive rise in cherry angioma (benign capillary proliferation) incidence after age 40 — see [[cherry-angioma]]. #gap/needs-human-replication for the direct SASP→telangiectasia causal link in humans.

**Paradox of chronic photoaging.** Acute UV drives angiogenesis, but heavily photoaged skin shows a complex net picture: deep microvessel density may decline while superficial ectatic vessels become disproportionately prominent, partly because chronic UV and resulting stromal fibrosis impair deeper vessel maintenance [^chung2007].

### (b) Inflammatory / innate-immune axis — cathelicidin LL-37, kallikrein-5, cytokines, microbial

**The cathelicidin / KLK-5 axis (rosacea).** In healthy skin, cathelicidin (CAMP gene; processed to the antimicrobial peptide LL-37) provides barrier defence at low concentrations. In rosacea-susceptible individuals, elevated serine protease activity from kallikrein-related peptidase 5 (KLK-5, stratum corneum tryptic enzyme, SCTE) drives abnormal processing of cathelicidin into more inflammatory peptide fragments [^yamasaki2007]. These fragments trigger mast cell activation, TLR-2 signalling on keratinocytes, NF-κB–driven cytokine production (IL-8, IL-6, MCP-1), and angiogenesis — producing sustained vasodilation and visible erythema [^yamasaki2007][^steinhoff2013]. The cascade is self-amplifying: aberrant LL-37 fragments further activate mast cells and TLR-2, perpetuating the cycle. This axis explains why topical ivermectin — which inhibits KLK-5 and CAMP gene expression in keratinocytes, reducing LL-37 processing and downstream cytokine secretion — outperforms non-KLK5-targeting agents such as metronidazole in meta-analysis [^thibaut2017][^gao2025]. See [[rosacea]] for the complete clinical picture.

**Malassezia-driven seborrheic dermatitis erythema.** Seborrheic dermatitis (SD) erythema is driven by an exaggerated innate immune response to Malassezia spp. lipases cleaving sebum triglycerides into irritating free fatty acids (oleic acid, arachidonic acid) that activate keratinocyte toll-like receptors, inducing IL-1β, IL-6, and TNF-α. The resulting barrier disruption and cytokine-driven vasodilation produces erythema on sebum-rich sites. With age, sebaceous gland function changes and the skin microbiome composition shifts — see [[malassezia]] for the microbial detail and [[skin-microbiome-aging-shifts]].

### (c) Barrier-dysfunction / neurogenic axis — compromised or over-treated barrier

**Neurogenic vasodilation.** Sensory nerves expressing TRPV1 (capsaicin receptor) and other nociceptors release neuropeptides when the barrier is breached or stimulated: substance P (SP) and calcitonin gene-related peptide (CGRP). CGRP is a potent vasodilator and the primary mediator of neurogenic erythema in the skin [^steinhoff2013]. In rosacea, neurovascular coupling is aberrant — triggers including heat, spicy food, alcohol, and exercise elicit exaggerated SP/CGRP release and prolonged facial erythema disproportionate to the stimulus.

**Over-treatment reactive erythema.** Aggressive topical regimens (high-frequency retinoids, exfoliating acids, physical scrubs, benzoyl peroxide, harsh cleansers) impair the stratum corneum lipid bilayer and reduce the natural moisturising factor (NMF) pool. The barrier-deficient skin becomes hyperresponsive, with erythema triggered by normally innocuous stimuli. As cosmetic self-treatment escalates in aging-concerned adults, this pattern is increasingly common — and clinically distinct from rosacea, though the two often co-occur.

**Age-associated barrier thinning.** Epidermal turnover slows ~30–50% by age 70 and sebum production declines, impairing stratum corneum barrier function — see [[skin-aging]] § Histology. The thinner corneum provides less diffusion resistance and a lower threshold for irritant-triggered erythema, contributing to the "sensitive skin" phenotype common in elderly populations.

---

## Sub-phenotypes at a glance

| Sub-phenotype | Dominant axis | Typical distribution | Canonical wiki home |
|---|---|---|---|
| **Photodamage-driven diffuse erythema + poikiloderma of Civatte** (L57.5) | Vascular (UV→VEGF→ectasia; perivascular collagen loss; fragrance contact sensitisation in ~25% of PoC patients [^katoulis2002]) | Sun-exposed face, neck, V of chest, forearms; characteristic sparing of shaded sub-mental and retroauricular zones | [[skin-aging]] (UV mechanism); [[poikiloderma-of-civatte]] (#stub — not yet seeded) |
| **Rosacea** (L71.x) | Inflammatory / innate-immune (cathelicidin LL-37 / KLK-5) + vascular + neurogenic | Central face: nose, cheeks, forehead, chin | [[rosacea]] (seeded in parallel — may be stub) |
| **Fixed telangiectasia** (I78.x) | Vascular (ectatic vessels; VEGF; SASP angiogenic milieu; collagen-support loss) | Generalized; face, chest, limbs; discrete ectatic vessels visible at <1 mm diameter | [[telangiectasia]] (seeded in parallel — may be stub) |
| **Seborrheic dermatitis erythema** (L21.x) | Inflammatory / innate-immune (Malassezia lipase → free fatty acids → TLR cascade) | Scalp, nasolabial folds, eyebrows, beard, chest, periauricular | [[malassezia]] |
| **Post-inflammatory erythema** (PIE; L99.8) | Vascular (dilated post-inflammatory vessels; chromophores: oxyhaemoglobin + melanin) | Site of prior insult (acne, injury, eczema); face common in post-acne context | This page; see also [[rosacea]] for comedone-associated forms |
| **Barrier/sensitive-skin reactive erythema** (L24.x) | Barrier-dysfunction / neurogenic | Face most vulnerable (thin periorbitally and nasally); diffuse in aggressive-treatment reactions | This page |
| **Cherry angiomas** (I78.1) | Vascular (proliferative capillary angiogenesis; SASP angiogenic milieu) | Trunk predominantly; arms, scalp, face; prevalence rises sharply >40 | [[cherry-angioma]] |
| **Menopausal vasomotor flushing** (N95.1) | Neurogenic / thermoregulatory (hypothalamic GnRH/kisspeptin → autonomic cascade → cutaneous vasodilation) | Generalized; head, neck, chest | [[vasomotor-symptoms]] |

---

## Mechanism by aging relevance

### Cumulative UV and the vascular erythema trajectory

Cumulative UV exposure — the dominant extrinsic driver of skin aging — converges on the vascular axis through two complementary routes. First, UV upregulates epidermal VEGF in keratinocytes while suppressing anti-angiogenic TSP-1, stimulating capillary proliferation [^yano2004]. Second, the AP-1/NF-κB–MMP axis (see [[skin-aging]] for the sourced mechanism) fragments perivascular collagen, stripping the structural constraint that prevents vessel dilation. Decades of cumulative exposure produce the permanently ectatic, structurally unsupported capillary plexus that constitutes baseline chronic erythema in photoaged populations.

### Senescence SASP and the angiogenic microenvironment

The age-related accumulation of senescent fibroblasts and endothelial cells in the dermis (see [[cellular-senescence]]) creates a pro-angiogenic SASP environment. VEGF-A, HGF, and MMP-1 secreted by senescent cells promote neo-vascularisation and vessel destabilisation, amplifying the UV-driven process and establishing an angiogenic ground state in aged skin independent of any new UV event. Whether senolytic clearance of senescent cells reduces cutaneous vascular pathology is untested in human skin trials. #gap/needs-human-replication

### Barrier decline and age-associated sensitive-skin erythema

Epidermal thinning, reduced sebum production, altered stratum corneum lipid composition, and declining NMF with age (see [[skin-aging]] § Histology) reduce barrier efficiency. Combined with aggressive cosmetic treatment regimens that are more common in aging-concerned adults, this creates a reinforcing cycle: treatment-induced barrier disruption → reactive erythema → further barrier breakdown. Managing this axis requires simplifying regimens, prioritising repair, and identifying irritant triggers before adding prescription actives.

### Chronic alcohol and persistent facial redness

**The reversible-vs-permanent distinction is the clinical crux.** Alcohol produces two mechanistically distinct forms of facial redness: a *functional* vasodilatory flush during acute drinking (transient, resolves within hours of cessation), and a *structural* form that accumulates with years of chronic heavy use and persists after drinking stops.

**How chronic alcohol drives fixed structural ectasia.** Repeated vasodilatory episodes — mediated by acetaldehyde-driven prostaglandin release, TRPV1 channel activation, and mast cell degranulation — cause episodic engorgement of facial capillaries and venules. Over years to decades, chronic episodic vessel-wall stretching in a photoaged dermis where perivascular collagen support is already depleted (see [[skin-aging]] and the vascular axis section above) translates repeated transient dilation into **permanent structural ectasia**: fixed telangiectasia visible even when the individual is fully sober and has achieved sustained abstinence. This chronic-cumulative pathway is distinct from the acute acetaldehyde flush (prominent in ALDH2-deficient individuals, covered on [[exposures/alcohol]]); it is the pathway that persists post-cessation and requires device treatment. See [[telangiectasia]] for the structural ectasia biology.

**Alcohol as an incidence risk factor for rosacea.** Beyond its direct vascular effect, chronic alcohol use is an independent risk factor for rosacea development. A prospective cohort from the Nurses' Health Study II — 82,737 US women followed for 14 years with 4,945 incident rosacea cases — found a dose-dependent association between alcohol intake and rosacea incidence [^lis2017]:
- 1–4 g/day: HR 1.12 (95% CI 1.05–1.20) vs non-drinkers
- ≥30 g/day: HR 1.53 (95% CI 1.26–1.84)

White wine and liquor showed the strongest beverage-specific associations (p<0.0001 and p=0.0006 respectively), with the association persisting after adjustment for sun exposure, smoking, and skin phototype. Because rosacea itself generates persistent facial telangiectasia through the cathelicidin/KLK-5 innate-immune axis (see [[rosacea]]), the alcohol→rosacea-incidence pathway represents a second structural route by which heavy drinking produces post-cessation permanent facial redness.

**What abstinence does and does not fix:**

| Component | Post-cessation course |
|---|---|
| Acute vasodilatory flush | Resolves (minutes to hours) |
| Acute acetaldehyde-driven erythema | Resolves; ALDH2 genetic influence (see [[exposures/alcohol]]) |
| Inflammatory background redness from ongoing mast cell activation | May improve substantially over weeks–months of abstinence |
| Fixed facial telangiectasia (established ectatic vessels) | **Does not resolve** — requires KTP/PDL/IPL laser treatment |
| Rosacea developed during drinking period | **Does not remit** with abstinence alone; requires rosacea-specific treatment |
| Hepatic spider naevi (cirrhosis-associated) | *Potentially regress* if liver function recovers; persist in established cirrhosis — see [[telangiectasia]] § Hepatic spider naevi |

**Device treatment** remains the only durable option for fixed vessels regardless of cessation history: KTP 532 nm, PDL 585–595 nm, or IPL for fixed facial telangiectasia and persistent post-chronic-alcohol erythema that does not improve with abstinence. See [[telangiectasia]] § Treatment for the photothermolysis framework.

---

## Therapeutic landscape

Detail lives on individual compound and intervention pages. Overview only:

### Photoprotection
Broad-spectrum UVA+UVB sunscreen (SPF 30+) is the primary prevention strategy for UV-driven vascular erythema, reducing the VEGF-stimulating dose and slowing perivascular collagen degradation. See [[uv-protection]].

### Barrier repair
For barrier-dysfunction/neurogenic erythema: ceramide-dominant moisturisers, panthenol, and colloidal oatmeal reduce TEWL and restore stratum corneum lamellar lipids. [[niacinamide]] (nicotinamide) reduces barrier disruption (ceramide stimulation, tight-junction upregulation), has a documented anti-erythema effect via PAR-2 inhibition of melanin transfer (reducing post-inflammatory chromophoric contribution), and is well-tolerated in sensitive/reactive skin.

### Anti-inflammatory topicals (rosacea / seborrheic dermatitis)
Three agents with confirmed efficacy (21-RCT meta-analysis, superior ranking: ivermectin > azelaic acid > metronidazole [^gao2025]):
- **[[azelaic-acid|Azelaic acid]] (15–20%):** anti-inflammatory (NF-κB inhibition), reduces LL-37 production, modest anti-angiogenic effect. Also reduces post-inflammatory erythema chromophores (haemoglobin content decreased in treated areas over 12 weeks).
- **Metronidazole (0.75–1%):** reduces reactive oxygen species; long-standing first-line for rosacea. Pending compound page.
- **Ivermectin 1% cream:** inhibits KLK-5 expression and LL-37 processing; superior to metronidazole in meta-analysis [^thibaut2017][^gao2025]. Pending compound page.

### Topical vasoconstrictors (transient redness reduction only)
- **[[brimonidine|Brimonidine]] gel 0.33%:** selective α2-adrenergic agonist; constricts cutaneous vessels; onset ~30 min, duration ~12 h; no durable structural benefit; rebound erythema reported.
- **[[oxymetazoline|Oxymetazoline]] cream 1%:** α1/α2-adrenergic agonist; ~38% two-grade Clinician Erythema Assessment improvement at week 4 in rosacea (meta-analysis, n=2,298); 1% rebound erythema rate; application-site dermatitis is the major adverse event [^liu2023].

### Sub-antimicrobial-dose oral doxycycline
[[doxycycline|Doxycycline]] 40 mg modified-release (sub-antimicrobial dose) inhibits MMP activity and reduces inflammatory cytokines without antibiotic-selection pressure; approved for papulopustular rosacea erythema in multiple jurisdictions.

### Vascular light and laser — the only durable modality for fixed telangiectasia
For structurally ectatic, permanently dilated vessels — including rosacea-associated telangiectasia, poikiloderma of Civatte, and post-inflammatory telangiectasia — topical vasoconstrictors provide only transient relief. Vascular-targeted light and laser are the only durable treatment modality:

- **Pulsed-dye laser (PDL, ~595 nm):** selectively absorbed by oxyhaemoglobin; vessel coagulation; 4-RCT meta-analysis (n=141) shows no significant advantage over IPL for >50% clearance, but IPL shows advantage for >75% clearance; PDL has lower pain scores [^zhai2024].
- **KTP laser (532 nm):** shorter wavelength; targets superficial vessels; less effective for deeper ectasia.
- **Nd:YAG (1064 nm):** deep penetration; suitable for larger, deeper vessels; more post-treatment purpura.
- **Intense pulsed light (IPL, 515–1200 nm):** treats mixed pigmented + vascular presentations; combination oxymetazoline + PDL showed superiority for telangiectasia in one network meta-analysis (25 RCTs, but most with high/unclear risk of bias) [^nguyen2026].
- **Radiofrequency microneedling:** outperformed PDL for patient satisfaction and erythema reduction in the same network meta-analysis, but constituent RCT quality was generally poor [^nguyen2026].

Procedural detail lives on the device page — see [[interventions/procedural/vascular-laser]] (canonical) and [[telangiectasia]].

---

## Hallmark mapping

| Hallmark | Mechanism in chronic erythema |
|---|---|
| [[cellular-senescence]] | SASP pro-angiogenic milieu: VEGF-A, HGF, MMP secretion by senescent fibroblasts and endothelial cells drive vascular proliferation and ectasia in aged dermis |
| [[chronic-inflammation]] | KLK-5/LL-37 cathelicidin cascade, TLR-2 / NF-κB signalling, IL-6/IL-8/MCP-1 cytokine-driven vasodilation; Malassezia-driven innate immune cascade in seborrheic dermatitis |
| [[genomic-instability]] | Cumulative UV-induced CPD / 6-4PP damage activates AP-1 and NF-κB → MMP-1/3/9 → perivascular collagen destruction enabling vessel ectasia (see [[skin-aging]]) |
| [[loss-of-proteostasis]] | Perivascular collagen fragmentation by chronically elevated MMP-1 in aged dermis; fragmented collagen further impairs fibroblast collagen synthesis, self-amplifying the structural permissiveness for vessel dilation |

---

## Limitations and gaps

- **SASP → vascular erythema causality in humans:** the contribution of senescent cell SASP to telangiectasia is inferred from SASP component identity; no human senolytic trial has used telangiectasia or diffuse erythema as a primary outcome. #gap/needs-human-replication
- **Cathelicidin axis in non-rosacea photoaged skin:** whether the KLK-5/LL-37 axis is elevated in general photoaged skin (without clinical rosacea) contributing to background age-associated redness is not established. #gap/no-mechanism
- **Barrier-erythema quantitative threshold:** the TEWL or capacitance threshold that produces clinically visible erythema in elderly skin has not been prospectively established. #gap/dose-response-unclear
- **PIE vs. fixed telangiectasia distinction:** post-inflammatory erythema (PIE) is clinically heterogeneous — some lesions represent residual haemoglobin staining, others true ectatic vessels, and others melanin-containing pigment cells; the distinction has therapeutic implications (azelaic acid targets haemoglobin/melanin chromophores; PDL targets ectatic vessels) but is not reliably distinguished by clinical examination alone. #gap/no-mechanism
- **Poikiloderma of Civatte RCT data:** sparse; most evidence is observational or case series; pathogenesis (UV-primary vs. fragrance contact sensitisation as a co-trigger) not definitively resolved [^katoulis2002]. #gap/needs-replication
- **Sensitive-skin phenotyping:** no validated biomarker distinguishes barrier-driven from neurogenic-driven reactive erythema in clinical settings. #gap/no-mechanism
- **IPL vs. PDL meta-analysis limitations:** Zhai 2024 analysis (n=141, 4 RCTs) is underpowered with high heterogeneity; treat results as hypothesis-generating [^zhai2024]. #gap/needs-replication

---

## Cross-references

- [[skin-aging]] — primary UV/MMP/collagen mechanism hub; do not duplicate
- [[rosacea]] — cathelicidin/KLK-5 axis in full; seeded in parallel
- [[telangiectasia]] — fixed ectatic vessels; vascular laser detail; seeded in parallel
- [[cherry-angioma]] — discrete benign capillary proliferations
- [[malassezia]] — microbial driver of seborrheic dermatitis erythema
- [[vasomotor-symptoms]] — menopausal neurogenic/thermoregulatory flushing
- [[uv-protection]] — sunscreen as primary prevention
- [[niacinamide]] — barrier repair + PAR-2 anti-erythema mechanism
- [[cellular-senescence]] — SASP angiogenic milieu
- [[chronic-inflammation]] — innate immune pathways
- [[skin-microbiome-aging-shifts]] — Malassezia ecosystem context

---

## Footnotes

[^yamasaki2007]: doi:10.1038/nm1616 · Yamasaki K, Di Nardo A, Bardan A, Murakami M, Ohtake T, Coda A, Dorschner RA, Bonnart C, Descargues P, Hovnanian A, Morhenn VB, Gallo RL · *Nature Medicine* 2007;13(8):975-980 · in-vivo + in-vivo mouse · n=11 rosacea biopsies + 10 normal controls (immunohistochemistry); n=3/group (quantitative tape-strip cathelicidin); mouse injection experiments with BALB/c + C57BL/6 · model: human rosacea skin + mus-musculus · PMID 17676051 · Elevated KLK-5/SCTE activity drives abnormal cathelicidin LL-37 processing in rosacea skin; Camp deletion reduced SCTE-induced skin inflammation; cathelicidin peptide (LL-37, FA-29) injection produced erythema and vascular dilatation (not telangiectasia) in mouse skin at 48 h, characterised histologically by neutrophilic infiltrate, thrombosis, and haemorrhage; established the cathelicidin axis as the central innate-immune driver of rosacea pathogenesis

[^steinhoff2013]: doi:10.1016/j.jaad.2013.04.045 · Steinhoff M, Schauber J, Leyden JJ · *Journal of the American Academy of Dermatology* 2013;69(6 Suppl 1):S15-26 · review · PMID 24229632 · Synthesises innate immune, neurovascular, and microbial axes of rosacea; covers cathelicidin, TLR-2, Demodex, and TRPV1/SP/CGRP neurogenic vasodilation; CGRP identified as the primary vasodilatory neuropeptide mediating neurogenic erythema

[^yano2004]: doi:10.1046/j.0022-202x.2003.22101.x · Yano K, Kajiya K, Ishiwata M, Hong YK, Miyakawa T, Detmar M · *Journal of Investigative Dermatology* 2004;122(1):201-208 · in-vivo · PMID 14962109 · model: mouse dorsal skin + time-course UVB irradiation · Demonstrated UVB upregulates VEGF mRNA while downregulating TSP-1 mRNA in hyperplastic epidermis; skin vascularity increased until day 8 post-irradiation then normalised by day 13; angiogenic response prolonged in TSP-1-deficient mice; VEGF/TSP-1 balance controls post-UVB cutaneous angiogenesis; keratinocyte-derived (epidermal) VEGF is the paracrine driver of papillary dermis capillary proliferation

[^blaudschun2002]: doi:10.1046/j.1365-2133.2002.04669.x · Blaudschun R, Sunderkötter C, Brenneisen P, Hinrichs R, Peters T, Schneider L, Razi-Wolf Z, Hunzelmann N, Scharffetter-Kochanek K · *British Journal of Dermatology* 2002;146(4):581-587 · in-vivo · PMID 11966687 · model: skh-1 hairless mice (repetitive UVB; 50–60 mJ/cm²; anti-VEGF neutralising antibody i.p.) + human skin biopsies · VEGF induced in epidermis following UVB in human and mouse skin; repetitive UVB increased FVIII-RAG-positive vessel count; neutralising anti-VEGF antibody partly abrogated the angiogenic response; confirms VEGF is causal rather than merely correlative

[^chung2007]: doi:10.1111/j.1346-8138.2007.00341.x · Chung JH, Eun HC · *Journal of Dermatology* 2007;34(9):593-600 · review · PMID 17727362 · model: human + mouse · Reviews differential vascular response to UV in aging and photoaged skin: acute UV drives angiogenesis via VEGF; chronic cumulative exposure may paradoxically reduce deep microvessel density while superficial ectatic vessels become prominent; retinoic acid can modulate UV-induced vascular changes in aged skin

[^thibaut2017]: doi:10.1007/s13555-017-0176-3 · Thibaut de Ménonville S, Rosignoli C, Soares E, Roquet M, Bertino B, Chappuis JP, Piwnica D · *Dermatology and Therapy (Heidelberg)* 2017;7(2):213-225 · in-vitro (NHEK + calcitriol stimulation) + reconstructed human epidermis + skin ex-vivo · PMID 28243927 · Ivermectin significantly reduced CAMP/LL-37 and KLK-5 gene expression in stimulated keratinocytes; reduced IL-8, IL-6, MCP-1 secretion; mechanism: inhibition of the innate immune KLK-5/LL-37 processing cascade upstream of cytokine release

[^katoulis2002]: doi:10.1046/j.1365-2133.2002.04993.x · Katoulis AC, Stavrianeas NG, Katsarou A, Antoniou C, Georgala S, Rigopoulos D, Koumantaki E, Avgerinou G, Katsambas AD · *British Journal of Dermatology* 2002;147(3):493-497 · observational · n=32 poikiloderma of Civatte patients (24 female, 8 male; age 38–74) + 97 controls · PMID 12207589 · Any contact sensitisation (standard series) in 40.62% (13/32) of patients; fragrance-specific sensitisation (fragrance mix, Balsam of Peru, or fragrance series allergens) in 25% (8/32), significantly higher than controls (9.27%; p<0.05); nickel sulphate most common single allergen (18.75%; 6/32); UV-induced dermal connective tissue change dominant histological feature; fragrance sensitisation may co-trigger or amplify UV-driven erythema in a subset; no photopatch test positivity found

[^gao2025]: doi:10.1016/j.ad.2024.12.026 · Gao X, Xiang W · *Actas Dermo-Sifiliográficas* 2025;116(8):863-875 · systematic review + meta-analysis · n=21 RCTs · PMID 40246142 · Ivermectin ranked superior to azelaic acid and metronidazole; azelaic acid superior to metronidazole; brimonidine and oxymetazoline both effective for redness reduction; minocycline also effective; provides comparative efficacy hierarchy for topical rosacea agents

[^liu2023]: doi:10.1111/jocd.15747 · Liu F, Zhou Q, Wang H, Fu H, Li Y, Tao M, Luo H, Cao Y · *Journal of Cosmetic Dermatology* 2023;22(9):2408-2419 · meta-analysis · PMID 37128814 · Oxymetazoline 1% cream: significantly higher CEA and SSA success rates vs. vehicle at 3, 6, 9, 12 h; application-site dermatitis most important adverse event (RR=8.91, 95% CI 1.76–45.23 vs vehicle) — confirmed in abstract. Note: n=2,298, ~38% two-grade CEA improvement at week 4, and 1% rebound erythema rate cited in body are not confirmed from abstract; require full-text verification #gap/needs-replication

[^zhai2024]: doi:10.1111/jocd.16549 · PMID 39240125 · Zhai Q, Cheng S, Liu R, Xie J, Han X, Yu Z · *Journal of Cosmetic Dermatology* 2024 · meta-analysis · n=141 (4 RCTs) · IPL vs. PDL for rosacea: no significant difference for >50% clearance (RR=−0.07, 95% CI −0.19 to 0.05); IPL advantage for >75% clearance (RR=−0.13, 95% CI −0.23 to −0.04); erythema index change similar (SMD=−0.15, 95% CI −0.55 to 0.26); PDL lower VAS pain score (SMD=1.54, 95% CI 0.08 to 3.00); limited power due to small total n — treat as hypothesis-generating #gap/needs-replication

[^nguyen2026]: doi:10.1111/ddg.15961 · PMID 41273013 · Nguyen L, Sorbe C, Seeber N, Schneider SW, Herberger K · *JDDG: Journal der Deutschen Dermatologischen Gesellschaft* 2026 · systematic review + network meta-analysis · 25 RCTs included for qualitative analysis · RF microneedling outperformed PDL for patient satisfaction (MD −1.32, 95% CI −1.89 to −0.76) and erythema (MD −1.44, 95% CI −1.96 to −0.91); combination oxymetazoline + PDL superior for telangiectasia (MD −0.58, 95% CI −1.03 to −0.14); most constituent RCTs had unclear or high risk of bias — conclusions should be weighted accordingly

[^lis2017]: doi:10.1016/j.jaad.2017.02.040 · Li S, Cho E, Drucker AM, Qureshi AA, Li WQ · *J Am Acad Dermatol* 2017;76(6):1061–1067.e2 · PMID 28434611 · PMC5438297 · prospective cohort · n=82,737 women (Nurses' Health Study II, 1991–2005); 14-year follow-up; 4,945 incident rosacea cases identified · dose-dependent alcohol–rosacea incidence association: HR 1.12 (95% CI 1.05–1.20) at 1–4 g/day to HR 1.53 (95% CI 1.26–1.84) at ≥30 g/day vs non-drinkers; white wine (p<0.0001) and liquor (p=0.0006) most strongly associated by beverage type; abstract-confirmed; specific covariate list (sun exposure, smoking, phototype) per full paper, not confirmed from abstract alone
