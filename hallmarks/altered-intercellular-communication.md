---
type: hallmark
aliases: [intercellular signaling deregulation, cell-cell communication breakdown, intercellular signaling drift, endocrine aging]
category: integrative
mechanistic-tier: integrative
intervention-tractability: moderate
caused-by: ["[[cellular-senescence]]", "[[chronic-inflammation]]", "[[stem-cell-exhaustion]]", "[[dysbiosis]]"]
causes: ["[[stem-cell-exhaustion]]"]
introduced: 2013
sens-correspondence: []
key-pathways: ["[[nf-kb]]", "[[insulin-igf1]]", "[[jak-stat-pathway]]"]
key-phenotypes: ["[[immunosenescence]]", "[[sarcopenia]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Synthesis MOC verified: López-Otín 2013 PDF-read for hallmark categorization, sub-component framing, and integrative-tier count; Conboy 2005 PDF-read for heterochronic parabiosis stats (GFP <0.1%, P<0.005, 5 weeks, strain IDs); Loffredo 2013 PDF-read for GDF11 cardiac claim; Egerman 2015 PDF-read for GDF11 assay specificity and age-direction challenge. López-Otín 2023 is closed-access (download failed) — 2023-specific claims unverified against primary source. Villeda 2011, Smith 2015, Sinha 2014, Katsimpardi 2014 remain pending download; claims from these are tagged accordingly."
---

# Altered Intercellular Communication

The progressive disruption of endocrine, paracrine, juxtacrine, neuronal, and neuroendocrine signaling that accompanies aging — a loss of coordinated communication between cells and tissues that degrades homeostatic feedback, distorts local niche signals, and propagates damage systemically. One of the two **Integrative** hallmarks in the original López-Otín 2013 framework (alongside stem cell exhaustion), meaning it arises downstream of the primary and antagonistic hallmarks and amplifies their effects at the organismal scale [^lopezOtin2013]. The 2023 expansion adds more hallmarks and reorganizes categories [^lopezOtin2023].

**2023 update:** López-Otín et al. 2023 elevated [[chronic-inflammation]] and [[dysbiosis]] to independent hallmark status [^lopezOtin2023]. This page retains the broader framing from 2013 — endocrine axis decline, SASP-driven signal noise, and heterochronic circulating factors — with [[chronic-inflammation]] becoming a cross-referenced hallmark rather than a sub-domain. The two overlap mechanistically but are now tracked separately.

---

## Definition (López-Otín 2013, retained 2023)

Aging is associated with changes in intercellular communication at multiple levels: altered hormone and growth-factor secretion (endocrine), paracrine signaling noise from [[sasp|SASP]]-secreting senescent cells, disrupted neuroendocrine axes, and changes in extracellular vesicle cargo. The hallmark encompasses:

- **Endocrine axis decline** — reduced circulating GH, IGF-1, sex steroids, thyroid hormone, and dehydroepiandrosterone (DHEA) with age
- **SASP-driven signal noise** — senescent cells constitutively secrete inflammatory cytokines, MMPs, and growth factors that scramble local homeostatic signals
- **Heterochronic circulating factors** — circulating proteins in young blood that maintain tissue function, and inhibitory proteins in aged blood that impair it
- **Neural and neuro-immune crosstalk changes** — hypothalamic inflammation, microglial reprogramming, complement-driven synapse pruning

SENS correspondence: None assigned in canonical SENS framework. The hallmark does not map cleanly to any single SENS damage category; its downstream effectors are distributed across OncoSENS (SASP → tumor microenvironment), ApoptoSENS (senescent cells), and RepleniSENS (stem cell niche signals). #gap/unsourced — a formal SENS mapping for this hallmark has not been definitively established in the SENS literature.

---

## Core mechanisms

### 1. Endocrine axis decline

The most systematically documented component. Key axes degrade in parallel during aging:

**Somatotropic axis ("somatopause").** Pituitary GH secretion declines progressively from peak in young adulthood, with corresponding reductions in hepatic IGF-1 production. Mechanistic details, evidence table, and longevity trade-off (GHR-KO Laron mice): see [[insulin-igf1]] (verified) and [[growth-hormone]] (verified). The somatotropic axis is both a longevity regulator (reduced signaling extends lifespan in model organisms) and a mediator of physiological decline (muscle atrophy, adiposity shift, bone density loss). The apparent paradox is partly resolved by distinguishing developmental/growth-phase IIS from aged post-mitotic-tissue IIS. #gap/contradictory-evidence — whether age-related somatopause is adaptive (reduced oncogenic signaling) or pathological (reduced anabolic support) is context-dependent.

**Sex hormone axes.** Ovarian senescence at [[menopause]] (mean ~51 years in humans) — driven by depletion of the [[ovary|ovarian]] follicle pool — produces abrupt [[estradiol]] and [[progesterone]] withdrawal; testosterone declines gradually in men ("andropause," ~1–2% per year after age 30). These shifts alter bone density ([[osteoporosis]]), muscle mass, cardiovascular risk, cognitive function, and immune activation thresholds, making menopause the archetypal example of an abrupt, system-wide endocrine-communication failure in human aging. HRT effects: see [[hormone-replacement-therapy]] and [[topical-estrogens]] — clinical use established; net benefit/risk depends on timing, formulation, and individual risk profile.

**Thyroid and adrenal axes.** Subclinical hypothyroidism increases in prevalence with age; DHEA declines steeply from mid-adulthood. #gap/unsourced — no verified atomic pages for these axes yet.

**Glucocorticoid dysregulation.** HPA axis responsiveness changes with age; basal cortisol rises slightly while response amplitude diminishes. Chronic elevated glucocorticoids suppress immune function and accelerate hippocampal atrophy. #gap/unsourced — no verified atomic page; link to [[hypotheses/glucocorticoid-cascade-hypothesis]] when seeded.

---

### 2. SASP-driven signal noise

Senescent cells release a constitutive inflammatory secretome — the [[sasp|SASP]] (verified) — that disrupts homeostatic paracrine signaling in aged tissues. The SASP is the primary mechanistic bridge from the [[cellular-senescence]] hallmark to altered intercellular communication:

- Dozens of cytokines (IL-6, IL-8, IL-1α, IL-1β), chemokines (CXCL1, CCL2), growth factors (HGF, EGF, VEGF), and MMPs are constitutively secreted, creating a chronic pro-inflammatory microenvironment in aged tissues
- SASP components disrupt stem-cell niche homeostasis: MMP3/MMP9 cleave ECM signals; IL-6 activates JAK/STAT3; TGF-β suppresses satellite-cell activation (see [[satellite-cells]], verified)
- Paracrine senescence: SASP from one senescent cell induces senescence in neighboring cells, propagating the signal — a feed-forward loop documented by Acosta 2008 (see [[sasp]] verified for source attribution)
- The NF-κB pathway is the master transcriptional driver of SASP: see [[nf-kb]] (verified) for canonical activation mechanism and CANTOS trial linkage

For SASP composition, upstream regulation, and therapeutic targeting: see [[sasp]] (verified — Coppé 2008 + Kuilman 2008 + Wiley 2016 + Glück 2017 PDF-verified).

---

### 3. Heterochronic circulating factors

The most striking evidence that intercellular communication changes drive — rather than merely reflect — aging comes from parabiosis experiments, in which young and old animals share a circulatory system.

**Conboy 2005 — foundational parabiosis evidence.** In heterochronic parabiosis (young C57Bl/Ka + old C57Bl/6 mice), aged satellite cell activation and regenerative capacity were substantially restored after 5 weeks of shared circulation — without cell transplantation (GFP+ engraftment was <0.1%; the mechanism is signaling, not cellular contribution) [^conboy2005]. This established that systemic factors in young blood can rejuvenate aged tissue-resident stem cells. The Notch activation defect in aged satellite cells was reversed: see [[satellite-cells]] (verified — Conboy 2005 PDF-verified with strain correction) for full mechanistic detail.

**Villeda 2011 — aged blood impairs neurogenesis.** The same logic runs in reverse: aged blood suppresses hippocampal neurogenesis and spatial learning when infused into young mice [^villeda2011]. #gap/needs-replication — specific responsible factors not identified in the 2011 paper; follow-up work (below) needed.

**B2M — an inhibitory aged-blood factor.** β2-microglobulin (B2M, a component of MHC class I) accumulates in aged plasma and CSF, and impairs hippocampal neurogenesis and cognitive function when administered systemically to young mice. Genetic deletion of B2M in aged mice partially restored neurogenesis and cognitive function [^smith2015]. B2M is the best-characterized pro-aging circulating factor as of 2025. #gap/needs-human-replication — B2M elevation confirmed in human plasma with age, but therapeutic targeting not yet clinically evaluated.

**ReHMGB1 — a redox-state-dependent senescence-propagating factor.** Shin et al. 2025 nominated **reduced extracellular HMGB1** (ReHMGB1) as a circulating signal that propagates senescence systemically [^shin2025]. The reduced form (but not the oxidized) engages [[rage]] on bystander cells → [[jak-stat-pathway|JAK/STAT]] + [[nf-kb|NF-κB]] → SASP induction + cell-cycle arrest. Systemic ReHMGB1 in young mice elevated multi-tissue senescence markers; HMGB1 inhibition in a middle-aged muscle-injury model reduced senescence, attenuated systemic inflammation, and improved regeneration. This is the first molecularly explicit mechanism for **how SASP propagates beyond local paracrine range** — the open question for this hallmark — and ties systemic redox status to senescence tempo. The full receptor + downstream architecture is on [[hmgb1]] and [[rage]]; the bystander-effect framing on [[sasp]] § *Paracrine senescence*. #gap/needs-human-replication.

**GDF11 — a contested "youth factor."** GDF11 (growth differentiation factor 11) was initially reported to decrease with age and, when systemically restored, to reverse cardiac hypertrophy [^loffredo2013], enhance vascular and neurogenic function [^katsimpardi2014], and restore skeletal muscle function [^sinha2014] in aged mice — generating intense interest in GDF11 as a circulating rejuvenation factor. However, Egerman et al. 2015 published a direct replication challenge: using more specific GDF11 assays (distinguishing GDF11 from the highly homologous GDF8/myostatin), they found GDF11 *increases* rather than decreases with age, and that GDF11 supplementation *inhibits* rather than promotes muscle regeneration in aged mice [^egerman2015]. #gap/contradictory-evidence — the GDF11 story remains unresolved: assay specificity, doses, and context-dependence are all contested. No human clinical evidence.

| Factor | Direction with aging | Proposed effect | Replication status |
|---|---|---|---|
| IGF-1 | Decreases | Loss of anabolic/neuroprotective signaling | Replicated; see [[insulin-igf1]] |
| B2M | Increases | Impairs neurogenesis + cognition | Single lab; #gap/needs-replication |
| GDF11 | Contested | Cardiac/muscle/neuro rejuvenation | #gap/contradictory-evidence |
| TGF-β | Increases | Inhibits satellite-cell activation | See [[satellite-cells]] |
| GDF15 | Increases | Cachexia, anorexia | #gap/unsourced |
| CCL11 (eotaxin) | Increases | Impairs neurogenesis | #gap/unsourced — Villeda 2011 original identification; no verified atomic page |
| HMGB1 (reduced) | Increases (release) | RAGE → JAK/STAT + NF-κB → SASP propagation | [[shin-2025-rehmgb1-paracrine-senescence]] (abstract-only); [[hmgb1]] (drafted) |

---

### 4. Neuronal and neuro-immune crosstalk

**Microglia reprogramming.** Brain-resident microglia transition from homeostatic to disease-associated microglia (DAM) states in aged CNS, adopting a senescence-like phenotype characterized by morphological changes, reduced surveillance, impaired phagocytosis, and elevated inflammatory secretion. See [[microglia]] (verified — Ginhoux 2010, Guerreiro 2013, Elmore 2014, Hammond 2019 PDF-verified). The DAM transition involves complement-mediated synapse pruning (C1q, C3, CR3) that is amplified in aging and drives neurodegeneration.

**Hypothalamic inflammation as a pacemaker.** NF-κB activation in the hypothalamus — driven by SASP from local senescent cells and circulating inflammatory signals — has been proposed as a central coordinator of systemic aging, with downstream effects on GH secretion, sex hormone control, and metabolic regulation via the hypothalamic–pituitary axes. #gap/unsourced — this mechanism is primarily from Xin Zhang lab studies (Nature 2013; #gap/needs-replication in humans); no verified atomic page yet; see [[nf-kb]] (verified) for canonical pathway context.

---

## Signaling shifts: what changes with age

| Signal | Direction | Downstream effect | Evidence |
|---|---|---|---|
| IL-6 | Increases | JAK/STAT3 activation; wasting; acute-phase response | [[sasp]] (verified), [[nf-kb]] (verified) |
| TNF-α | Increases | NF-κB activation; insulin resistance | [[nf-kb]] (verified) |
| TGF-β | Increases | Stem-cell inhibition; fibrosis | [[satellite-cells]] (verified) |
| Complement C1q | Increases in plasma | Synapse pruning; DAM activation | [[microglia]] (verified) |
| IGF-1 | Decreases | Reduced anabolic support; reduced FOXO inhibition | [[insulin-igf1]] (verified) |
| GH | Decreases | Reduced hepatic IGF-1 production | [[growth-hormone]] (verified) |
| Sex steroids | Decrease | Bone, muscle, CV, cognitive effects | #gap/unsourced |
| GDF11 | Contested | Cardiac/muscle effects | #gap/contradictory-evidence |

---

## Therapeutic angles

**Heterochronic plasma strategies (preclinical / early clinical).**
Plasma dilution and young plasma infusion have been explored as strategies to reduce pro-aging factors and/or supplement youth factors. The mechanistic rationale from Conboy 2005 is the strongest preclinical grounding [^conboy2005]. Commercial "young blood" clinics emerged before rigorous trials, prompting FDA warnings. No RCT evidence for human aging benefit as of 2025. #gap/needs-human-replication.

**Anti-inflammatory / senolytic strategies.**
The major intersection with [[chronic-inflammation]] hallmark (which covers CANTOS + senolytics). Key point for this hallmark: senolytics (dasatinib + quercetin, navitoclax, fisetin) reduce SASP-driven signal noise, which directly targets the intercellular communication disruption described here. See [[interventions/pharmacological/senolytics]], [[fisetin]] (drafted), [[navitoclax]] (drafted), [[dasatinib]] (drafted). CANTOS trial (canakinumab anti-IL-1β; n=10,061): see [[nf-kb]] (verified) for CANTOS detail — relevant because it demonstrates IL-1β–driven intercellular signal disruption is pharmacologically modifiable with cardiovascular benefit.

**Hormone replacement.**
Sex hormone replacement (HRT) is clinically implemented for menopausal symptoms; cardiovascular and cognitive-protection evidence is complex (Women's Health Initiative). GH replacement remains controversial — reduces fat/increases lean mass but has not shown longevity benefit and elevates cancer risk at supraphysiological doses. See [[growth-hormone]] (verified) and [[insulin-igf1]] (verified).

**B2M targeting.**
B2M blocking antibodies restore hippocampal neurogenesis in aged mice [^smith2015]. No human therapeutic development reported yet. #gap/needs-human-replication.

---

## Cross-hallmark integration

This is an integrative hallmark — it aggregates upstream damage signals and propagates them systemically.

| Upstream source | Signal propagated | Target page |
|---|---|---|
| [[cellular-senescence]] | SASP cytokines, MMPs, growth factors | [[sasp]] (verified) |
| [[chronic-inflammation]] | IL-6, TNF-α, IL-1β; NF-κB activation | [[chronic-inflammation]] (separated 2023) |
| [[stem-cell-exhaustion]] | Aged niche sends inhibitory signals (TGF-β, Wnt3a dysregulation) | [[satellite-cells]] (verified) |
| [[deregulated-nutrient-sensing]] | Reduced IIS → endocrine axis shift | [[insulin-igf1]] (verified) |
| [[dysbiosis]] | Gut–systemic barrier disruption → circulating bacterial products; IL-17/IL-22 axis changes | [[dysbiosis]] (separated 2023) |

---

## Targeted interventions

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[altered-intercellular-communication]])
  OR contains(target-hallmarks, [[altered-intercellular-communication]])
SORT clinical-stage DESC
```

No compound or intervention page currently links here via frontmatter — this is a tagging gap, not a therapeutic gap. Senolytics, senomorphics, and canakinumab all modulate intercellular communication but are tagged to [[cellular-senescence]] and [[chronic-inflammation]] only. See [[frameworks/interventions-by-hallmark]] § Altered intercellular communication for propagation candidates.

---

## Cross-references

**Pathways:**
- [[nf-kb]] (verified) — SASP master transcription factor; inflammaging; CANTOS trial
- [[insulin-igf1]] (verified) — endocrine signaling; IGF-1 decline; longevity axis
- [[jak-stat-pathway]] — downstream of IL-6 / GH signaling; not yet seeded #gap/unsourced

**Proteins / molecules:**
- [[growth-hormone]] (verified) — somatropause; JAK2/STAT5B axis
- [[sasp]] (verified) — SASP composition, regulation, and paracrine effects

**Cell types:**
- [[satellite-cells]] (verified) — heterochronic parabiosis; TGF-β / Notch niche signaling
- [[microglia]] (verified) — DAM transition; complement; neuro-immune crosstalk

**Phenotypes:**
- [[immunosenescence]] (verified) — convergent outcome of immune compartment communication breakdown
- [[sarcopenia]] (verified-partial) — driven by disrupted niche signaling + reduced anabolic endocrine support

**Hallmarks:**
- [[chronic-inflammation]] — elevated to independent hallmark 2023; inflammaging core; SASP-driven
- [[cellular-senescence]] — primary source of SASP
- [[stem-cell-exhaustion]] — aged niche impairs self-renewal
- [[dysbiosis]] — elevated to independent hallmark 2023; gut-systemic signaling
- [[deregulated-nutrient-sensing]] — endocrine overlap (IIS/GH/mTOR axes)

**Studies:**
- [[studies/lopez-otin-2013-hallmarks-of-aging]] — original hallmark paper; integrative category definition
- [[studies/conboy-2005-heterochronic-parabiosis]] — foundational systemic factors evidence

---

## Limitations and open questions

- #gap/needs-human-replication — Heterochronic parabiosis findings are entirely mouse-based. Plasma exchange / young-plasma trials in humans are ongoing but underpowered; no RCT evidence for aging endpoints.
- #gap/contradictory-evidence — GDF11 as a circulating youth factor: original Loffredo/Wagers Science papers vs Egerman 2015 replication challenge. Assay specificity (GDF11 vs GDF8/myostatin) and dose-response remain unresolved. See `hypotheses/gdf11-controversy` when seeded.
- #gap/needs-replication — B2M as a pro-aging factor: single-lab finding (Villeda 2015); not yet independently replicated as therapeutic target.
- #gap/unsourced — Hypothalamic NF-κB as a central aging pacemaker: mechanistically interesting but primary evidence is from a single lab (Zhang 2013 Nature); no verified atomic page.
- #gap/unsourced — Sex hormone axis decline in aging: clinically important but no verified atomic page yet; HRT data (WHI, KEEPS) not linked.
- #gap/unsourced — JAK-STAT pathway page not yet seeded; GH→JAK2→STAT5B signaling cross-reference currently without atomic target.
- #gap/no-mechanism — Why SASP composition differs between senescence contexts (oncogene-induced vs telomere-driven vs genotoxic) is not fully established, which affects which intercellular signals dominate in which aged tissues.
- #gap/long-term-unknown — Effects of senolytics on the broader intercellular signaling landscape (beyond senescent-cell clearance) over multi-year follow-up in humans unknown.
- Quantification: no single biomarker of "altered intercellular communication" exists. The field uses proxy measures (plasma cytokine panels, IGF-1 levels, SASP factor arrays) that capture pieces but not the integrated state.

---

## Position in causal hierarchy

This hallmark is classified as **Integrative outcome tier** (mechanistic-tier: integrative / intervention-tractability: moderate). See [[frameworks/hallmark-causality-graph]] for the full hierarchy and intervention-sequencing argument.

Direct upstream nodes per `caused-by:` frontmatter: [[cellular-senescence]] (SASP is the primary paracrine signal disruption in aged tissue), [[chronic-inflammation]] (systemic inflammaging distorts endocrine axis feedback; IL-6/TNF-α alter receptor sensitivity), [[stem-cell-exhaustion]] (aged niche sends inhibitory signals — TGF-β, altered Wnt), [[dysbiosis]] (microbiome-derived metabolites are systemic signaling molecules; gut-systemic axis disruption).
Direct downstream nodes per `causes:` frontmatter: [[stem-cell-exhaustion]] (heterochronic circulating factors — Conboy 2005; TGF-β suppresses satellite cell activation; weak-to-moderate edge, GDF11 disputed).
Edge evidence is in [[frameworks/causal-graph-data]].

## Notes on 2023 framework revision

The 2023 López-Otín expansion elevated [[chronic-inflammation]] and [[dysbiosis]] to independent hallmarks [^lopezOtin2023]. Practically, this means:
- Inflammaging (chronic low-grade sterile inflammation) is now covered on the [[chronic-inflammation]] page
- Gut microbiome changes are covered on the [[dysbiosis]] page
- This page focuses on the remaining components: endocrine axes, SASP-driven signal noise, heterochronic circulating factors, and neuro-immune crosstalk
- Mechanistic overlap persists — SASP drives both inflammation and altered communication; the split is organizational, not biological

---

## See also

- [[hallmarks-of-aging]] (parent framework MOC)
- [[studies/lopez-otin-2013-hallmarks-of-aging]] — original hallmark paper
- [[chronic-inflammation]] — separated 2023; inflammaging primary locus
- [[dysbiosis]] — separated 2023; gut–systemic axis
- [[sens-damage-categories]] — no primary SENS mapping for this hallmark
- [[gaps/README]] — aggregated gap tracker

---

[^lopezOtin2013]: doi:10.1016/j.cell.2013.05.039 · review · Cell 2013 · n/a · model: conceptual framework — local PDF available
[^lopezOtin2023]: doi:10.1016/j.cell.2022.11.001 · review · Cell 2023 · n/a · model: conceptual framework — closed-access; download failed; #gap/no-fulltext-access — 2023-specific reorganization claims (hallmark count, new integrative tier) unverified against primary source
[^conboy2005]: doi:10.1038/nature03260 · n=≥3 pairs/condition · in-vivo · model: heterochronic parabiosis (C57Bl/Ka-Ly5.2 or GFP-transgenic young, 2–3 months + C57Bl/6 aged, 19–26 months; 5 weeks) · GFP+ engraftment <0.1%; P<0.005; resident satellite cell mechanism · PDF verified 2026-05-04; cross-checked via [[satellite-cells]] (verified)
[^loffredo2013]: doi:10.1016/j.cell.2013.04.015 · in-vivo · model: heterochronic parabiosis (young female C57BL/6, 2 months + old C57BL/6, 23 months; 4 weeks) + aptamer proteomics screen; n=4–22/group · PDF verified 2026-05-04
[^katsimpardi2014]: doi:10.1126/science.1251141 · in-vivo · model: parabiosis + recombinant GDF11 (aged mice) · download pending — verify before relying on quantitative claims
[^sinha2014]: doi:10.1126/science.1251152 · in-vivo · model: recombinant GDF11 in aged mice · download pending
[^egerman2015]: doi:10.1016/j.cmet.2015.05.010 · in-vivo · model: aged C57BL/6 mice + hSkMDC cell culture; GDF11-specific immunoassay; rat (n=3–5/age) and human serum (n=9–10/group) · GDF11 increases (not decreases) with age; assay cross-reactivity with myostatin documented; GDF11 inhibits (not promotes) satellite cell expansion · key replication challenge to [^loffredo2013]; #gap/contradictory-evidence · PDF verified 2026-05-04
[^villeda2011]: doi:10.1038/nature10357 · in-vivo · model: heterochronic parabiosis + aged plasma infusion (mice) · download pending
[^smith2015]: doi:10.1038/nm.3898 · in-vivo · model: young + aged mice; B2M systemic administration + genetic deletion · download pending; #gap/needs-replication
[^shin2025]: [[studies/shin-2025-rehmgb1-paracrine-senescence]] · doi:10.1016/j.metabol.2025.156259 · in-vitro + in-vivo · ReHMGB1 (reduced, 20 μg/mL) but not OxHMGB1 propagates senescence via RAGE → JAK2/STAT1 + PI3K-AKT/NF-κB; systemic IV ReHMGB1 (5 mg/kg) in 3-mo C57BL/6J induces multi-tissue senescence (GA, TA, liver) at 7 dpt; anti-HMGB1 mAb 3E8 blockade (0.1 mg/kg IV) in 15-mo BaCl₂ TA-injury model reduces senescence, restores grip strength, increases MyoD+ progenitors; ReHMGB1 elevated in aged (70–80 yr) human serum (Supp Fig 6); FPS-ZM1 + Momelotinib pharmacological rescue · model: WI-38/BJ/renal epithelial/HSKM cells + C57BL/6J mice; human-aged-serum supplementary arm · PDF verified 2026-05-20 · CC BY-NC-ND open access
