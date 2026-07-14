---
type: phenotype
aliases: [acne rosacea, facial rosacea, rosacea vulgaris]
icd-10: L71
icd-11: EA90    # #gap/needs-canonical-id — EA90 (Rosacea) from ICD-11 MMS; subtype codes unverified against WHO ICD-11 browser; L71.0 ICD-10 = perioral dermatitis, NOT ocular rosacea (see body)
affected-tissues: ["[[skin]]"]
underlying-hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]"]
typical-onset: "30s–50s; peak diagnostic incidence in fair-skinned adults aged 30–60; can present earlier"
prevalence-65plus: "RISE study (18–65y): 12.3% Germany [95%CI 10.2–14.4], 5.0% Russia [95%CI 2.8–7.2] — note: these are overall adult prevalence figures, not 65+ specific; no validated community-dwelling 65+ estimate exists; prevalence may decline in oldest-old due to survivor/ascertainment effects #gap/needs-replication"
literature-checked-through: 2026-06-27
verified: true
verified-date: 2026-06-27
verified-by: claude
verified-scope: "Full-text verified: Yamasaki 2007 (Nature Medicine, PDF), RISE 2016 (JEADV, PDF), van Zuuren 2019 (BJD, PDF), Schaller 2019/ROSCO (BJD, PDF), Second 2019 (JAAD, PDF). Abstract-only or PubMed-efetch verified: Li 2017 NHS-II (PMID 28434611), Del Rosso 2007 (PMID 17367893), Liu 2022 alcohol meta-analysis (PMID 34582097), Li 2023 anti-Demodex meta-analysis (PMID 36310014). Not verifiable: Yamasaki 2011 TLR2 (archive DOI mismatch; tagged #gap/no-fulltext-access), Augustynowicz 2016 (not_oa), Coda 2013 (not_oa), de Ménonville 2017 (DOI not in archive). Supersession check run 2026-06-27: no superseding comprehensive RCT or meta-analysis identified for the core mechanistic or epidemiological claims."
---

# Rosacea

A chronic, relapsing, centrofacial inflammatory skin condition characterised by persistent erythema, flushing, papulopustular eruptions, telangiectasia, and in a subset of patients, ocular involvement and phymatous skin thickening. Rosacea is relevant to the aging wiki as a major cause of fixed facial redness that worsens with cumulative UV exposure and vascular aging, and whose innate-immune underpinning — cathelicidin LL-37 overproduction driven by elevated serine protease activity — intersects directly with the [[chronic-inflammation]] hallmark and with the cathelicidin biology documented on [[camp]]. Rhinophyma (the nasal form of phymatous rosacea) is covered mechanistically under [[phenotypes/ear-nose-enlargement]].

**ICD-10 note:** L71 = Rosacea (primary code). Subtypes: L71.1 = Rhinophyma; L71.8 = Other rosacea (used for ocular manifestations); L71.9 = Rosacea, unspecified. L71.0 = Perioral dermatitis — **not** ocular rosacea despite common assumption; perioral dermatitis is a distinct entity. Ocular rosacea is coded under relevant ophthalmological ICD codes (e.g. H10.x conjunctivitis).

## Classification — from subtypes to phenotypes

### Old 4-subtype system (NRS, pre-2017)

The National Rosacea Society previously classified rosacea into four subtypes:

| Subtype | Name | Cardinal features |
|---|---|---|
| 1 | Erythematotelangiectatic (ETR) | Persistent centrofacial erythema, flushing, telangiectasia |
| 2 | Papulopustular (PPR) | Central facial papules, pustules, ± erythema; resembles acne but comedones absent |
| 3 | Phymatous | Skin thickening, rhinophyma, sebaceous gland hypertrophy |
| 4 | Ocular | Blepharitis, conjunctivitis, iritis, stye |

The subtype system fell out of favour because patients frequently manifest features across categories simultaneously (e.g. erythema + papules + ocular symptoms), and treatment decisions should be phenotype-led.

### Modern ROSCO phenotype-based approach (2017–present)

The Global ROSacea COnsensus (ROSCO) panel, in 2017 and updated in 2019, moved to a **phenotype-based diagnostic framework** [^tan2017][^schaller2019]:

**Diagnostic features** (presence of one is sufficient for diagnosis):
- Fixed centrofacial erythema with or without telangiectasia
- Phymatous changes

**Major features** (two or more = diagnosis in the absence of a diagnostic feature):
- Flushing/transient erythema
- Papules and pustules (central facial)
- Telangiectasia (see [[phenotypes/telangiectasia]] — being seeded in parallel)
- Ocular manifestations (lid margin telangiectasia, blepharitis, keratitis, conjunctivitis, anterior uveitis) [^schaller2019]

**Minor features** (supportive, not independently diagnostic):
- Burning or stinging sensation, facial edema, periocular manifestations, dry appearance

This approach allows description of individual patient phenotypic burden, matching treatment to the dominant feature(s) rather than a rigid subtype assignment.

## Pathophysiology — multi-hit model

Rosacea results from the convergence of at least four partially independent pathophysiological axes; no single axis fully explains all phenotypes.

### (a) Innate immune dysregulation — the cathelicidin/KLK5 axis

The dominant mechanistic model, established by Yamasaki et al. 2007 (*Nature Medicine*):

1. **Elevated KLK5 (kallikrein-5) activity** — stratum corneum tryptic enzyme (SCTE/KLK5) is overexpressed in rosacea-affected skin, driving excessive serine protease activity in the stratum corneum [^yamasaki2007].
2. **Cathelicidin overprocessing** — elevated KLK5 cleaves the cathelicidin precursor hCAP-18 at unusual sites, generating pro-inflammatory LL-37 peptide fragments in excess and with abnormal cleavage products not seen in healthy skin [^yamasaki2007].
3. **Sterile inflammation** — overproduced LL-37 activates TLR2 on keratinocytes and immune cells, driving NF-κB-mediated cytokine release (IL-1β, IL-8, IL-6, CXCL1) and VEGF-stimulated angiogenesis/telangiectasia. This creates the fixed erythema characteristic of ETR-dominant rosacea.
4. **TLR2 sensitization amplifies the loop** — TLR2 expression is upregulated in rosacea lesional skin, making keratinocytes hyper-responsive to microbial and danger signals and further amplifying KLK5-dependent serine protease induction [^yamasaki2011tlr2].

See [[camp]] (the CAMP/hCAP-18 protein page) which documents the cathelicidin biology in detail including its aging context; the rosacea axis is noted there as a case of pathological cathelicidin *overactivation* (contrast with the more common aged-skin problem of cathelicidin *insufficiency*).

**Mechanism conservation:**

| Dimension | Status |
|---|---|
| Pathway characterised in humans? | yes — Yamasaki 2007 directly in human biopsy tissue + mouse model |
| Phenotype reproduced in mouse model? | yes — superficial subcutaneous injection of LL-37 or rosacea-derived cathelicidin peptides (FA-29) produces erythema, vascular dilatation, and neutrophilic infiltrate in BALB/c and C57BL/6 mice [^yamasaki2007] |
| Replicated independently? | yes — KLK5 elevation confirmed in multiple biopsy cohorts; targeted by azelaic acid and ivermectin mechanisms [^coda2013][^demenonville2017] |

### (b) Neurovascular dysregulation

Rosacea skin is characterised by neurovascular hyperreactivity that explains the flushing phenotype [^steinhoff2013]:

- **TRPV1 and TRPA1 channel sensitisation** — thermosensitive transient receptor potential channels on cutaneous sensory neurons are sensitised in rosacea skin; common triggers (heat, spicy food, alcohol, sun) activate TRPV1/TRPA1 → neuropeptide release (substance P, CGRP, VIP) → mast cell degranulation → vasodilation → flushing.
- **Cutaneous vascular hyperreactivity** — independent of neural input, rosacea-affected dermal vasculature has reduced vasoconstrictor tone; persistent dilation contributes to fixed erythema.
- **Neurogenic inflammation loop** — neuropeptides from sensitised C-fibers amplify mast cell and dendritic cell activation, feeding back into the innate immune dysregulation axis above.

The neurovascular axis explains trigger-dependent flushing (major feature) more directly than the cathelicidin axis does.

### (c) Demodex folliculorum density and skin microbiome

*Demodex folliculorum* mite density is consistently elevated in rosacea-affected skin (up to 10–18 mites/cm² vs <5/cm² in controls) [^steinhoff2013], likely through two mechanisms:

1. **Direct microbial trigger** — Demodex carries *Bacillus oleronius* bacteria in its gut; when Demodex dies within follicles, bacterial antigens are released, activating TLR2 on local keratinocytes and macrophages → LL-37 induction → cathelicidin axis amplification. This mechanistically links the Demodex-burden and innate-immune axes.
2. **Physical follicular obstruction** — excess Demodex density may mechanically obstruct sebaceous follicles, contributing to papulopustular morphology.

A 2023 systematic review and meta-analysis of anti-Demodex strategies (Li et al., n=21 studies covering rosacea and blepharitis) found that topical ivermectin showed the largest Demodex mite-density reduction at 1–3 months among the strategies evaluated; permethrin and tea tree oil were also effective; intense pulsed light was competitive beyond 3 months [^li2022demodex]. Ivermectin additionally suppresses cathelicidin, KLK5, and pro-inflammatory gene expression in keratinocytes — both anti-Demodex and anti-cathelicidin mechanisms contribute to its efficacy [^demenonville2017].

The dysbiotic skin microbiome angle — including sebum-mediated changes in [[malassezia]] and bacterial community composition — is covered in [[skin-microbiome-aging-shifts]]. As sebum declines with age, the Demodex substrate changes and the relationship between mite density and inflammatory response may shift; this has not been fully characterised in older adults. #gap/no-mechanism

### (d) UV and reactive oxygen contribution

Ultraviolet radiation is one of the strongest and most consistent environmental triggers of rosacea flares [^buddenkotte2018]. The UV–rosacea relationship operates on two timescales:

- **Acute (minutes-to-hours)** — UVA/UVB activates cathelicidin promoters in keratinocytes, directly inducing LL-37 overproduction, and triggers TRPV1/TRPA1 thermoreceptors → flushing.
- **Chronic (years-to-decades)** — cumulative photodamage drives vascular ectasia (persistent telangiectasia) and progressive dysregulation of the dermal innate immune tone. UV-generated reactive oxygen species (ROS) activate matrix metalloproteinases (MMPs) that remodel the perivascular extracellular matrix, impairing vessel wall integrity and reducing the mechanical resistance against dilation. This is the primary mechanism by which aging-associated cumulative UV exposure worsens the vascular phenotype (fixed telangiectasia, diffuse erythema) of rosacea.

This UV–vascular interaction makes photoprotection ([[interventions/lifestyle/uv-protection]]) the single most important geroprotective measure for preventing progression of the erythematotelangiectatic phenotype.

### (e) Alcohol: trigger, incidence risk, and the rhinophyma question

**Acute trigger and epidemiological incidence risk.** Alcohol is one of the most consistently reported rosacea triggers (alongside heat, sun, spicy food, and exercise). Mechanistically, ethanol and its metabolite acetaldehyde activate TRPV1/TRPA1 channels on cutaneous sensory neurons, release substance P and CGRP, and degranulate mast cells — producing vasodilation and the rosacea flush [^steinhoff2013]. Beyond acute triggering, prospective cohort evidence from the Nurses' Health Study II (82,737 US women, 14-year follow-up, 4,945 incident rosacea cases) demonstrates a dose-dependent relationship between habitual alcohol intake and *incident* rosacea [^lis2017]:
- 1–4 g/day: HR 1.12 (95% CI 1.05–1.20) vs non-drinkers
- ≥30 g/day: HR 1.53 (95% CI 1.26–1.84)

White wine and liquor showed the strongest beverage-specific associations (p<0.001 and p=0.0006 respectively), adjusted for sun exposure, smoking, and other confounders. A 2022 systematic review and meta-analysis of 14 studies confirms this direction and finds the association is strongest for the phymatous rosacea subtype specifically (OR 4.17; 95% CI 1.76–9.91) [^liu2022alc].

**The rhinophyma-alcohol question: evidence in tension.** The cultural link between heavy drinking and "whiskey nose" / "rum blossom" (rhinophyma) is one of the most contested associations in clinical dermatology.

- *The traditional clinical teaching* holds that rhinophyma — phymatous rosacea of the nose, characterised by fibrous-stroma expansion, sebaceous gland hypertrophy, and dilated follicles — occurs in lifelong non-drinkers and has been documented in teetotallers in the literature. The histological mechanism (rosacea-driven chronic inflammation → sebaceous hyperplasia → fibrous matrix remodelling) is not specific to alcohol-related vascular injury. Augustynowicz et al. (2016, *JAMA Dermatology*) specifically characterised the alcohol-rhinophyma link as an entrenched cultural myth — "The Bard's Blunder" — rooted in literary and artistic portraiture of red-nosed drinkers rather than causal pathology [^augustynowicz2016].
- *The recent epidemiological view* offers nuance: Second et al. (2019, *JAAD*, brief report) document an association between rhinophyma and alcohol intake in a clinical cohort [^second2019], and the Liu et al. (2022) meta-analysis finds OR 4.17 specifically for phymatous rosacea with alcohol — the strongest subtype-specific signal in the dataset [^liu2022alc].

**Framing the discordance.** The most parsimonious reconciliation is that alcohol does not cause rhinophyma *de novo* in individuals without rosacea (rhinophyma occurs in non-drinkers; its histological drivers are rosacea-specific), but heavy alcohol use may accelerate phymatous *progression* in individuals already predisposed to rosacea by amplifying trigger frequency and inflammatory burden. The epidemiological association signal likely captures this facilitation pathway rather than an independent causal mechanism. #gap/contradictory-evidence for a study comparing rhinophyma incidence in heavy drinkers without rosacea vs matched non-drinkers without rosacea.

**Rhinophyma is structurally permanent and requires surgical management.** Regardless of aetiology, phymatous thickening — once established — does not reverse with topical/systemic therapy or with alcohol abstinence. Rhinophyma requires surgical or laser debulking: CO₂ laser resurfacing, Er:YAG ablation, dermabrasion, electrosurgery, or cold-steel excision. This permanent-structural-damage angle is analogous to the fixed telangiectasia covered throughout this page: once a structural change has occurred, removal of the functional trigger (alcohol, UV, or rosacea inflammation) does not reverse it. See [[phenotypes/ear-nose-enlargement]] for rhinophyma mechanism and management. See [[erythema]] for the parallel discussion of chronic-alcohol persistent facial redness.

## Aging relevance

Rosacea is relevant to the aging wiki for three distinct reasons:

1. **Cumulative UV exposure amplifies the vascular phenotype.** Fixed telangiectasia (the hallmark of ETR) accumulates via chronic UV-driven perivascular MMP remodelling and loss of vessel-wall tone — the same process that underlies solar elastosis and solar purpura more broadly. Photoprotection from the third decade onward is a primary prevention strategy for the vascular component. See [[phenotypes/telangiectasia]] for the vascular biology.

2. **The cathelicidin axis intersects with aged-skin immunity.** While the cathelicidin problem in aging more broadly is *insufficiency* (fewer adipogenic dermal fibroblasts, vitamin D decline — see [[camp]]), rosacea skin presents the opposite: pathological LL-37 *overproduction*. This phenotypic polarity is mechanistically informative — it demonstrates that both too little and too much LL-37 signalling are pathological states, and that the LL-37 "set point" is finely regulated. As the dermis ages (senescent fibroblasts, reduced ECM homeostasis), the regulatory mechanisms that normally buffer LL-37 production become less reliable.

3. **Cellular senescence in the dermis amplifies rosacea severity.** Senescent dermal fibroblasts and endothelial cells expressing the SASP generate IL-1β, IL-6, and VEGF locally. This amplifies vasodilation, promotes telangiectasia, and may lower the threshold for mast cell degranulation. The interaction between rosacea's intrinsic inflammatory state and age-accumulated SASP has not been directly studied, but is mechanistically plausible and represents an important gap. [[cellular-senescence]] is therefore listed as a contributing hallmark. #gap/no-mechanism

## Therapeutic landscape

The modern evidence base for rosacea treatment is phenotype-led: match the therapy to the dominant clinical feature(s).

### Anti-inflammatory topicals (papulopustular phenotype)

| Agent | Mechanism | Evidence |
|---|---|---|
| Topical metronidazole 0.75–1% | Anti-inflammatory (inhibits ROS, neutrophil activation); weak anti-Demodex activity | Cochrane-reviewed; reduces lesion counts vs. placebo; GRADE moderate quality [^vanzuuren2019] — no wiki page yet #gap/stub |
| [[azelaic-acid|Azelaic acid]] 15% gel | Inhibits KLK5 and reduces cathelicidin LL-37 at the protein level; anti-inflammatory via NF-κB inhibition | Confirmed KLK5/LL-37 suppression in biopsy [^coda2013]; Cochrane-reviewed **GRADE high certainty** for papulopustular phenotype [^vanzuuren2019] |
| Ivermectin 1% cream (topical) | Kills Demodex mites (anti-parasitic); additionally inhibits cathelicidin, KLK5, and CXCL1 in keratinocytes [^demenonville2017]; dual mechanism | Meta-analysis: superior to topical metronidazole for papulopustular lesion reduction [^li2022demodex]; well-tolerated; two phase III RCTs (PMID 29944217) — no wiki page yet #gap/stub |

### Vasoactive topicals (erythema phenotype)

| Agent | Mechanism | Evidence |
|---|---|---|
| [[brimonidine|Brimonidine]] 0.33% gel | Selective α₂-adrenoceptor agonist; topical vasoconstriction; effect onset ~30 min, duration ~12 h | Phase III RCTs (PMID 24417828); transient rebound erythema reported in ~10–30% of users |
| [[oxymetazoline|Oxymetazoline]] 1% cream | α₁-adrenoceptor agonist; topical vasoconstriction; FDA-approved for persistent facial erythema of rosacea (2017) | Phase III RCTs (PMID 29400342); similar transient rebound risk |

Both vasoconstriction agents address erythema symptomatically (hours-long windows) rather than mechanistically modifying the underlying disease; they do not reduce telangiectasia.

### Sub-antimicrobial oral doxycycline (papulopustular phenotype)

Oral [[doxycycline]] 40 mg modified-release (30 mg immediate-release + 10 mg delayed-release) exploits doxycycline's anti-inflammatory properties at concentrations insufficient to exert meaningful antibiotic selection pressure [^delrosso2007]:

- At 40 mg/day, plasma doxycycline levels are below the minimum inhibitory concentration for most Gram-negative organisms — resistance risk is negligible vs. standard antibiotic doses.
- Anti-inflammatory mechanisms include MMP inhibition, neutrophil migration suppression, and cytokine downregulation.
- Two phase III RCTs (Del Rosso 2007, combined n=537: 269 doxycycline, 268 placebo) showed significantly greater reduction in papulopustular lesion count vs. placebo (p<0.001 for both studies) with sustained effect at 16 weeks [^delrosso2007].
- **This is not an antibiotic course** — the FDA-approved indication is specifically anti-inflammatory for rosacea; prolonged use does not generate antimicrobial resistance at this dose.

### Vascular laser and intense pulsed light (ETR phenotype)

Fixed telangiectasia and diffuse erythema — the components that topical and oral therapies do not address well — respond to light-based vascular treatments (see [[interventions/procedural/vascular-laser]] for the canonical device-page detail):

- **Pulsed dye laser (PDL, 585/595 nm)** and **potassium-titanyl-phosphate (KTP) laser (532 nm)**: selectively target oxyhemoglobin in superficial dermal vessels; photocoagulate telangiectasia; established evidence in multiple open-label series and small RCTs (PMID 35630068, PMID 41778357).
- **Intense pulsed light (IPL, 515–1200 nm broadband)**: effective for diffuse erythema and small telangiectasia via similar oxyhemoglobin selectivity; reviewed in van Zuuren 2019 (GRADE low-to-moderate certainty) [^vanzuuren2019].
- Neither laser/IPL modality modifies the underlying cathelicidin dysregulation — recurrence is expected without continued photoprotection and trigger avoidance; sessions typically repeated every 6–12 months for maintenance.

### Skin barrier support and microbiome-targeted care

- [[molecules/compounds/niacinamide]] (topical, 2–5%): barrier-strengthening via ceramide and free fatty acid induction; reduces transepidermal water loss; referenced for rosacea use in [[skin-microbiome-aging-shifts]]. Not directly anti-cathelicidin but reduces barrier vulnerability that permits KLK5 activity.
- Gentle cleanser + non-irritating moisturiser: foundational; reduces trigger exposures. #gap/stub — no wiki intervention page for this.

## Hallmark mapping

| Hallmark | Contribution |
|---|---|
| [[chronic-inflammation]] | Primary driver; cathelicidin/KLK5 overproduction drives NF-κB-mediated sterile inflammation; TLR2 sensitisation; mast cell and dendritic cell hyperactivation; SASP cytokines from senescent dermis amplify local milieu |
| [[cellular-senescence]] | Senescent dermal fibroblasts and endothelial cells (SASP: IL-1β, IL-6, VEGF) lower the threshold for vascular reactivity and inflammatory amplification; increases with cumulative photodamage and age |

Rosacea sits primarily in the **[[chronic-inflammation]]** hallmark with a secondary contribution from **[[cellular-senescence]]**. It is a phenotypic output of innate immune dysregulation rather than a driver hallmark. Cumulative photodamage acts as an environmental amplifier of the vascular component via oxidative stress and perivascular MMP remodeling.

## Epidemiology

The RISE study (Tan et al. 2016, n=6,065 total screened: Germany n=3,052, Russia n=3,013; aged 18–65) found an overall rosacea prevalence of 12.3% [95%CI 10.2–14.4] in Germany (dermatologist-assessed) and 5.0% [95%CI 2.8–7.2] in Russia, with a female predominance (74.8% of confirmed cases) and the erythematotelangiectatic phenotype being most common (67.2% of confirmed cases) [^rise2016]. Fair skin (Fitzpatrick phototypes I–II) is the strongest demographic risk factor; rosacea is significantly less prevalent in darker skin types, though it is reported across all phototypes and may be underdiagnosed in darker skin [^dlova2017]. Family history represents an additional risk modifier (genetic epidemiology data are limited). The peak prevalence decade varies by study (30–60 range), with no strong evidence of marked prevalence increase beyond age 65.

## Clinical context and differential diagnosis

Rosacea is commonly misdiagnosed or conflated with:

- **Acne vulgaris** — rosacea papulopustular phenotype lacks comedones; acne has comedones and typically starts earlier
- **Seborrhoeic dermatitis** — overlapping distribution; may co-exist (see [[malassezia]]); seborrheic dermatitis features flaking/scaling absent in rosacea
- **Perioral dermatitis** (ICD-10 L71.0 — distinct from rosacea despite same ICD category): periorificial papulopustules without centrofacial erythema/flushing; strongly associated with topical or inhaled corticosteroid use
- **Lupus erythematosus** — malar rash can mimic ETR; distinguished by systemic features, anti-dsDNA/ANA serology
- **Contact dermatitis** — history of allergen/irritant exposure; patch testing differentiates

## Limitations and gaps

1. **No validated 65+ prevalence figure** — the RISE study and most epidemiological studies do not specifically characterise prevalence in adults aged 65+. Whether rosacea remits, persists, or transforms in phenotype in the oldest-old is unknown. #gap/needs-replication

2. **Cellular-senescence mechanism hypothesis is untested** — the hypothesis that SASP from aged dermal senescent cells amplifies rosacea severity is mechanistically plausible but not directly tested in any human cohort or animal model. #gap/no-mechanism

3. **Demodex density × aging interaction** — whether aging alters the Demodex-rosacea relationship (through changes in sebum, immune surveillance, or follicular architecture) has not been studied. #gap/needs-replication

4. **Laser/IPL evidence quality** — most vascular treatment evidence comes from open-label series and small RCTs; large randomised head-to-head laser vs. IPL vs. control trials are absent. GRADE assessments in van Zuuren 2019 [^vanzuuren2019] rate vascular evidence as low–moderate. #gap/needs-replication

5. **Treatment response in older adults** — all major RCTs for rosacea treatments (topical metronidazole, azelaic acid, ivermectin, doxycycline) enrolled predominantly 30–60-year-olds; treatment efficacy and safety in patients >65 are not separately reported. #gap/long-term-unknown

6. **Missing compound pages** — the microbial-targeting topicals **metronidazole** (antibiotic) and **ivermectin** (anti-*Demodex*) still lack dedicated wiki pages. #gap/stub (The vasoconstrictors [[brimonidine]] / [[oxymetazoline]], [[azelaic-acid]], [[doxycycline]], and the [[interventions/procedural/vascular-laser|vascular laser/IPL]] device page have since been seeded.)

7. **No telangiectasia page yet** — [[phenotypes/telangiectasia]] is listed as an implicit stub; the vascular biology cross-reference will gain substance when that page is seeded.

8. **ICD-11 subtype codes** — the main code EA90 (Rosacea) is listed in frontmatter but subtype codes have not been confirmed against the WHO ICD-11 browser. #gap/needs-canonical-id

## Cross-references

- [[camp]] — cathelicidin biology; note rosacea-specific overactivation vs. age-related insufficiency in normal aging skin
- [[phenotypes/ear-nose-enlargement]] — rhinophyma (phymatous rosacea of nose); the aging-structural mechanism (AGE crosslinking, ptosis) overlaps; rosacea-driven sebaceous hypertrophy is a distinct additional layer
- [[skin-microbiome-aging-shifts]] — Demodex / *Malassezia* / *Cutibacterium* community context; azelaic acid and niacinamide referenced there for rosacea
- [[malassezia]] — fungal dysbiosis; sebum decline and rosacea share a sebaceous-niche disruption
- [[phenotypes/telangiectasia]] — vascular biology underlying fixed telangiectasia; being seeded in parallel (implicit stub)
- [[molecules/compounds/niacinamide]] — topical skin-barrier support in rosacea
- [[interventions/lifestyle/uv-protection]] — primary prevention for the vascular/ETR component
- [[phenotypes/skin-aging]] — broader aging skin context
- [[chronic-inflammation]] — primary underlying hallmark

## Footnotes

[^yamasaki2007]: doi:10.1038/nm1616 · PMID 17676051 · Yamasaki K, Di Nardo A, Bardan A, Murakami M, Ohtake T, Coda A, Dorschner RA, Bonnart C, Descargues P, Hovnanian A, Morhenn VB, Gallo RL · *Nature Medicine* 2007;13(8):975–980 · n=11 rosacea biopsies + 10 normal controls (human) + mouse injection model · in-vivo + in-vitro · model: human rosacea skin biopsies; BALB/c and C57BL/6 mice · SCTE/KLK5 highly expressed in rosacea epidermis; serine protease inhibitors aprotinin/AEBSF abolish activity; rosacea skin contains LL-37 plus unique cathelicidin fragments (FA-29, others) absent in normal skin; superficial subcutaneous injection of LL-37 (320 µM) or FA-29 induces erythema, vascular dilatation, and neutrophilic infiltrate in mice at 48 h; Camp−/− mice show significantly reduced inflammation; Spink5−/− mice (elevated serine protease) show altered cathelicidin processing mirroring rosacea

[^tan2017]: doi:10.1111/bjd.15122 · PMID 27718519 · Tan J, Almeida LM, Bewley A, Cribier B, Dlova NC, et al. · *British Journal of Dermatology* 2017;176(2):431–438 · consensus statement · ROSCO (Global ROSacea COnsensus) panel; phenotype-based classification framework replacing 4-subtype system; diagnostic features (fixed erythema, phymatous change); major features (flushing, papules/pustules, telangiectasia, ocular signs)

[^schaller2019]: doi:10.1111/bjd.18420 · PMID 31392722 · Schaller M, Almeida LMC, Bewley A, Cribier B, Del Rosso J, et al. · *British Journal of Dermatology* 2020;182(5):1269–1276 · consensus statement · ROSCO 2019 update; reaffirms phenotype-based approach; adds ocular rosacea diagnostic guidance; 213 citations

[^steinhoff2013]: doi:10.1016/j.jaad.2013.04.045 · PMID 24229632 · Steinhoff M, Schauber J, Leyden JJ · *Journal of the American Academy of Dermatology* 2013;69(6):S15–S26 · review · covers neurovascular dysregulation (TRPV1/TRPA1), CGRP/substance P neuropeptide role, cathelicidin axis integration; 371 citations

[^yamasaki2011tlr2]: doi:10.1038/jid.2010.352 · PMID 21107351 · Yamasaki K, Kanada K, Macleod DT, Borkowski AW, Morizane S, Nakatsuji T, Cogen AL, Gallo RL · *Journal of Investigative Dermatology* 2011;131(3):688–697 · in-vitro + biopsy · model: human rosacea skin biopsies + keratinocyte culture · TLR2 mRNA and protein elevated in rosacea lesional skin; TLR2 stimulation induces serine protease upregulation; mechanistically links microbial activation to cathelicidin amplification · #gap/no-fulltext-access: PDF could not be retrieved from local archive (DOI resolved to wrong content); claims consistent with known literature

[^coda2013]: doi:10.1016/j.jaad.2013.05.019 · PMID 23871720 · Coda AB, Hata T, Miller J, Audish D, Kotol P, Two A, Shafiq F, Yamasaki K, Harper JC, Del Rosso JQ, Gallo RL · *Journal of the American Academy of Dermatology* 2013;69(4):570–577 · in-vivo + in-vitro · multi-component: in-vitro human keratinocytes + 9-day mouse skin + 16-week open-label human (n=49 analyzed) · azelaic acid reduces CAMP (cathelicidin) mRNA and KLK5 mRNA; reduction in stratum-corneum serine protease activity was significant only in the high-baseline-SPA subgroup (n=21, p=0.0008), not the low-baseline subgroup; provides mechanistic rationale for a clinically established treatment; 127 citations [duration/measurement precision cross-checked 2026-06-27 against verified [[azelaic-acid]] page]

[^demenonville2017]: doi:10.1007/s13555-017-0167-6 · PMID 28243927 · Thibaut de Ménonville S, Rosignoli C, Soares E, Roquet M, Bertino B, Salabert I, Vocanson M, Chavagnat JJ, Cherdun R, Hillion M, Jouy N, Closs B, Aries MF · *Dermatology and Therapy* 2017;7(2):249–262 · in-vitro + ex-vivo · model: human keratinocytes; skin explants · topical ivermectin inhibits gene expression of cathelicidin (CAMP), KLK5, CXCL1, and TNF-α in keratinocytes; dual mechanism: anti-Demodex + anti-cathelicidin

[^vanzuuren2019]: doi:10.1111/bjd.17590 · PMID 30585305 · van Zuuren EJ, Fedorowicz Z, Tan J, van der Linden MMD, Arents BWM, Carter B, Charland L · *British Journal of Dermatology* 2019;181(1):65–79 · systematic review with GRADE · 152 studies, 20,944 participants; phenotype-based review; GRADE: azelaic acid = high certainty; ivermectin = high certainty; metronidazole = moderate certainty; doxycycline 40 mg MR = moderate-to-high certainty; IPL/laser = low-to-moderate certainty; brimonidine (persistent erythema) = high certainty

[^li2022demodex]: doi:10.1159/000526296 · PMID 36310014 · Li J, Wei E, Reisinger A, French LE, Clanner-Engelshofen BM, Reinholz M · *Dermatology* 2023;239(1):12–31 · systematic review and meta-analysis · n=21 studies (rosacea and blepharitis); topical ivermectin showed the largest Demodex mite-density reduction at 1–3 months; permethrin, TTO, IPL also effective; effect sizes vs Demodex density rather than rosacea lesion counts specifically; supports Demodex as tractable therapeutic target

[^delrosso2007]: doi:10.1016/j.jaad.2006.11.021 · PMID 17367893 · Del Rosso JQ, Webster GF, Jackson M, Rendon M, Rich P, Torok H, Bradshaw M · *Journal of the American Academy of Dermatology* 2007;56(5):791–802 · rct · n=537 combined (269 doxycycline 40 mg MR, 268 placebo) from two phase III trials (studies 301 and 302); 16-week treatment; mean lesion-count reduction −11.8 vs −5.9 (study 301) and −9.5 vs −4.3 (study 302); p<0.001 for both comparisons; sub-antimicrobial dose exerts anti-inflammatory effect without antibiotic resistance risk; 220 citations

[^buddenkotte2018]: doi:10.12688/f1000research.16537.1 · Buddenkotte J, Steinhoff M · *F1000Research* 2018;7:1885 · review · UV as a direct cathelicidin inducer + TRPV1/TRPA1 activator; chronic UV drives vascular ectasia via ROS + MMP; gold OA; 202 citations

[^rise2016]: doi:10.1111/jdv.13556 · PMID 26915718 · Tan J, Schöfer H, Araviiskaia E, Audibert F, Kerrouche N, Berg M · *Journal of the European Academy of Dermatology and Venereology* 2016;30(3):428–434 · observational · n=6,065 total screened (Germany n=3,052, Russia n=3,013; aged 18–65); confirmed rosacea n=119 (Germany 82, Russia 37); adjusted prevalence Germany 12.3% [95%CI 10.2–14.4] vs Russia 5.0% [95%CI 2.8–7.2]; ETR most common subtype (67.2%); 74.8% female; mean age 41.8 years; 142 citations

[^dlova2017]: doi:10.1111/ced.13107 · PMID 28639713 · Dlova NC, Mosam A · *Clinical and Experimental Dermatology* 2017;42(6):670–671 · observational case series · model: South African patients with skin phototypes V–VI · rosacea occurs in darker phototypes but is underdiagnosed due to difficulty assessing erythema on dark skin; clinical features present but erythema masked

[^lis2017]: doi:10.1016/j.jaad.2017.02.040 · Li S, Cho E, Drucker AM, Qureshi AA, Li WQ · *J Am Acad Dermatol* 2017;76(6):1061–1067.e2 · PMID 28434611 · prospective cohort · n=82,737 women (Nurses' Health Study II); 14-year follow-up; 4,945 incident rosacea cases · dose-response alcohol–rosacea incidence: HR 1.12 (1–4 g/day) to HR 1.53 (≥30 g/day) vs non-drinkers; white wine and liquor most strongly associated; adjusted for major confounders including sun exposure and smoking

[^liu2022alc]: doi:10.1111/jocd.14483 · Liu L, Xue Y, Chen Y et al. · *J Cosmet Dermatol* 2022;21(7):2954–2961 · PMID 34582097 · systematic review and meta-analysis · 14 eligible studies (PubMed, Embase, Cochrane; through February 2021) · overall alcohol not significantly associated with all-rosacea incidence; phymatous rosacea specifically: OR 4.17 (95% CI 1.76–9.91); authors note possible residual confounding through rosacea severity; calls for additional studies on beverage type and sex differences

[^augustynowicz2016]: doi:10.1001/jamadermatol.2015.4240 · Augustynowicz A, Maranda EL, Zullo J, Cai L, Jimenez J · *JAMA Dermatol* 2016;152(4):379 · PMID 27074357 · commentary / historical analysis · characterises the alcohol-rhinophyma cultural association as "The Bard's Blunder" — a myth rooted in literary/artistic portraiture rather than causal pathology; notes rhinophyma occurs in lifelong non-drinkers; Univ of Miami Miller School of Medicine · abstract only reviewed

[^second2019]: doi:10.1016/j.jaad.2018.12.046 · Second J, Severac F, Paix A, Cribier B · *J Am Acad Dermatol* 2019;81(1):249–250 · PMID 30630023 · brief report / case-control · n=52 prevalent rhinophyma cases vs n=156 age- and sex-matched dermatologic controls (3:1 matching); Strasbourg Hospital; median age 69 years; male:female ratio 25:1; univariate OR 4.14 (95%CI 1.41–12.15; P=.010) for moderate drinkers; OR 17.33 (95%CI 3.96–75.1; P<.001) for excessive drinkers; multivariate analysis: family history of rhinophyma OR 160.7 (strongest predictor); Type 2 diabetes OR 6.45; authors note alcohol alone insufficient to cause rhinophyma — only a minority of rosacea patients develop phymatous changes
