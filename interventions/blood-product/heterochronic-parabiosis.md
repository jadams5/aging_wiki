---
type: intervention
aliases: [HPB, heterochronic parabiosis, HPB aging model, isochronic parabiosis control]
mode: blood-product
mechanisms: [systemic-milieu-restoration, young-factor-introduction, aged-factor-removal]
targets: ["[[notch-pathway]]", "[[tgf-beta]]", "[[ccl11]]", "[[b2m]]", "[[gdf11]]"]
target-hallmarks: ["[[altered-intercellular-communication]]", "[[stem-cell-exhaustion]]", "[[chronic-inflammation]]"]
target-pathways: ["[[notch-pathway]]", "[[tgf-beta]]", "[[jak-stat-pathway]]"]
human-evidence-level: none
clinical-stage: preclinical
safety-profile: investigational
translation-gap: preclinical-only
next-experiment: "Transcriptomic tAge (Tyshkovskiy 2026 mortality clock) applied to a staged single-exchange NBE cohort in non-human primates, with pre-registered biomarker panel and 6-month detachment follow-up, to confirm whether the persistent tAge reduction seen in rodent HPB (dataset GSE224378) is recapitulated by a single blood-exchange protocol amenable to human translation."
clinical-trials-active: 0
literature-checked-through: 2026-05-29
verified: true
verified-date: 2026-05-29
verified-by: claude
verified-scope: "Conboy 2005, Villeda 2011, Loffredo 2013, Egerman 2015 verified against local PDFs; Villeda 2014 (status: failed) and Rebo 2016 (status: pending) not verified — claims tagged #gap/no-fulltext-access; Tyshkovskiy 2026 block accepted from verified study page [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] without PDF re-read"
---

# Heterochronic Parabiosis

**Heterochronic parabiosis (HPB)** is the surgical joining of the circulatory systems of a young and an old animal, producing a shared blood supply. It is the foundational experimental paradigm for the hypothesis that the **systemic circulating environment** — not irreversible cell-intrinsic damage — is a primary driver of many age-associated tissue dysfunctions. It is not a clinical intervention for humans; its clinical descendants are [[plasma-exchange|therapeutic plasma exchange (TPE), neutral blood exchange (NBE), and young-plasma infusion]], documented on [[interventions/blood-product/plasma-exchange]].

**Isochronic parabiosis** (young–young or old–old pairs) is the within-age control; it controls for surgical stress and shared circulation per se.

The central questions HPB probes:

1. Do **pro-geronic factors** in old blood suppress tissue function in the young partner (old-blood inhibition hypothesis)?
2. Do **anti-geronic (rejuvenating) factors** in young blood restore tissue function in the old partner (young-blood rejuvenation hypothesis)?
3. Is the benefit primarily from **diluting accumulated inhibitory signals**, independent of any positively acting young-blood factor?

Evidence supports contributions from all three, with current weight of evidence favouring old-blood inhibition and dilution over a single dominant rejuvenating factor.

## Historical context

Parabiosis — surgical skin-to-skin anastomosis allowing vascular equilibration — was used in immunology and endocrinology research from the 1950s. Its application to aging was pioneered systematically by Conboy, Rando, and colleagues at Stanford/UCB in the 2000s. The foundational 2005 *Nature* paper [^conboy2005] established that aged muscle [[satellite-cells]] and liver progenitors lose regenerative capacity primarily because of systemic inhibitory signals in old blood, not because of irreversible stem cell-intrinsic changes. Young blood exposure restored Notch-dependent satellite cell activation in aged muscle to rates approaching those of young animals, at <0.1% cell engraftment from the young partner — ruling out chimerism as the explanation.

## Established biology

### Muscle and liver regeneration (Conboy et al. 2005)

Parabiosis of young (2–3 month) and aged (19–26 month) C57Bl/Ka-Ly5.2 mice restored hepatocyte proliferation and [[satellite-cells|satellite cell]] activation in old HPB partners [^conboy2005]. Satellite cell assays used n=4–6 pairs per condition. Notch signalling — suppressed in aged muscle — was restored to levels comparable to young isochronic controls. The key mechanistic inference: **age-related satellite cell dysfunction is environmentally imposed and reversible**, a conceptual anchor for the entire young-blood therapeutic programme. The liver finding was specifically restoration of hepatocyte proliferation (measured by BrdU/Ki67 co-staining with albumin), with molecular reversion of the age-associated cEBP-α–Brm complex.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — Notch signalling in human satellite cell activation is conserved; specific circulating inhibitory factors differ |
| Phenotype conserved in humans? | partial — sarcopenic aged human satellite cells show reduced activation; systemic milieu role inferred but not established by HPB |
| Replicated in humans? | no — HPB is rodent-only; plasma-based descendants are the human proxy (see [[interventions/blood-product/plasma-exchange]]) |

### Old blood impairs neurogenesis and cognition (Villeda et al. 2011)

In a landmark *Nature* study [^villeda2011], the aged systemic milieu suppressed hippocampal neurogenesis and impaired synaptic plasticity and contextual memory in young mice. Using HPB (young–old parabiosis), old-to-young parabionts showed decreased neurogenesis (fewer Dcx+, BrdU+, and Sox2+ cells in the dentate gyrus) relative to isochronic young–young controls; old HPB partners showed increased neurogenesis. Infusion of old plasma into young mice (without surgery) independently confirmed that soluble factors in aged blood inhibit adult neurogenesis and impaired contextual fear conditioning and radial arm water maze (RAWM) performance. A multiplex proteomic screen of 66 cytokines/chemokines across aging identified 17 proteins correlating with decreased neurogenesis; six factors elevated specifically in old unpaired and young heterochronic cohorts — including CCL2, [[ccl11]] (eotaxin-1), CCL12, CCL19, haptoglobin, and β2-microglobulin. [[ccl11]] was the lead candidate: significantly elevated in aged plasma and CSF in mice and in healthy humans aged 20–90 years; infusion into young mice reduced neurogenesis and impaired contextual memory and RAWM performance; neutralising anti-CCL11 antibody rescued the neurogenesis deficit.

### Young blood restores cognitive function (Villeda et al. 2014)

The complementary direction: injection of young human plasma into aged mice improved synaptic plasticity (LTP), spatial learning (radial-arm maze), and contextual memory [^villeda2014]. Effects were associated with activation of CREB and Egr1 in the hippocampus. This is the direct preclinical rationale for young-plasma infusion as a therapeutic.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — CREB/Egr1 synaptic plasticity pathways are conserved; young-human-plasma efficacy shown only in aged mice |
| Phenotype conserved in humans? | unknown — no controlled human cognition study with young plasma in healthy aging |
| Replicated in humans? | no — Phase 1/2 trial in MCI (Alkahest GRF6019 PLASMA-1 pilot) showed some signals but was small and uncontrolled |

### Rapid old-blood inhibition (Rebo et al. 2016)

A single transient blood exchange between young and old C57Bl/6 mice (without surgical parabiosis, replacing ~50% of blood volume) produced rapid inhibition of multiple tissues in the young recipient by old blood within 4 days — fat tissue, liver, and muscle were affected — and a matching tissue-function improvement in the old recipient [^rebo2016]. This demonstrated that **continuous prolonged parabiosis is not necessary**: a single exchange captures much of the HPB effect, making the model more translatable to therapeutic plasma exchange concepts.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | unknown — single-exchange inhibitory effect shown in mouse; equivalent human blood-exchange model not tested |
| Phenotype conserved in humans? | unknown |
| Replicated in humans? | no |

### The GDF11 controversy

The initial identification of **GDF11** as a key rejuvenating young-blood factor [^loffredo2013] — declining with age and reversing cardiac hypertrophy when administered to old mice — generated enormous interest but was substantially challenged by Egerman et al. 2015 [^egerman2015]. Loffredo et al. used SOMAscan aptamer-based proteomics (which measures ~1,000 proteins) on plasma from 10 young (2-month) and 10 old (23-month) C57BL/6 female mice, identifying GDF11 as declining with age. They then showed that daily i.p. rGDF11 (0.1 mg/kg, 30 days) in old (23-month) C57BL/6 mice reduced heart weight/tibia ratio (7.93±0.19 vs 9.61±0.21 mg/mm in saline controls; n=16 per group, p<0.05) and reduced cardiomyocyte cross-sectional area. Egerman et al. rebutted this using a GDF11-specific immunoassay validated to be non-cross-reactive with the 90%-homologous myostatin/GDF-8: the SOMAmer used by Loffredo cross-reacts with myostatin (apparent K_D for GDF11: 6.6±1.1 nM vs myostatin: 11.8±1.1 nM). Using the specific assay, GDF11 shows a **trend toward increase** with age in rat serum (~1.4-fold, p=0.0534) and a non-significant trend toward increase in human serum (older individuals ≥60 vs 20–30 years). GDF11 mRNA increases with age in rat skeletal muscle. Functionally, exogenous GDF11 *inhibits* rather than promotes muscle regeneration when administered to aged animals, and decreases satellite cell expansion in adult and aged mice. The SOMAmer-based proteomics used in the original Loffredo study appear to have measured combined myostatin+GDF11. This controversy is tracked in full on [[gdf11]]. **The HPB cardiac and tissue-rejuvenation phenomena are real; the mechanistic attribution to GDF11 specifically is not supported.** #gap/contradictory-evidence

The identity of the dominant pro-rejuvenative factor(s) in young blood remains unresolved. Candidate molecules include TIMP2 (neurogenesis; Castellano 2017, unverified DOI), plasminogen (brain function; Bieri 2023, unverified DOI), and anti-geronic exosome populations [^gulej2026review].

## Tyshkovskiy 2026 — transcriptomic mortality clock resolves the HPB aging signature

The Tyshkovskiy et al. 2026 *Nature* study [^tyshkovskiy2026] provides the first **clock-level, multi-subsystem, quantitative characterisation** of what HPB does to the aging transcriptome. This is the most mechanistically resolved description of HPB aging effects available.

**Dataset:** Liver transcriptomes from young (3-month) and old (20-month) C57BL/6J mice in isochronic (young–young, old–old) vs heterochronic (young–old) parabiosis, euthanized either immediately ('attached') or 2 months after surgical detachment ('detached'). GEO accession: GSE224378.

**Key findings from this analysis:**

### tAge rejuvenation in old HPB partners

In **old heterochronic parabionts**, the **transcriptomic mortality clock (tAge) detected a significant tAge REDUCTION** at the attached timepoint, consistent with molecular rejuvenation. The chronological clock showed only a non-significant trend at this time point. Critically, **2 months after detachment the tAge reduction became statistically significant for both clocks** — suggesting that the rejuvenating transcriptomic reprogramming initiated during HPB is durable and consolidates after the young-blood exposure ends [^tyshkovskiy2026].

The top gene contributing to the HPB-associated tAge reduction in old mice was **upregulation of `Nrep`** (N-myc and STAT interactor / neurite outgrowth related protein), a protein linked to enhanced regenerative potential. The anti-mortality signature also included **downregulation of `Cdkn1a`** ([[p21]], the canonical p53-pathway cell-cycle inhibitor and universal aging marker) and **downregulation of `Vcam1`** (vascular cell adhesion molecule 1, whose inhibition alleviates neuroinflammation and improves learning/memory in aged mice) [^tyshkovskiy2026].

### Multi-subsystem scope — modular clock decomposition

HPB-induced tAge deceleration was **not confined to a single module** — old heterochronic parabionts showed:

- **Downregulation** of inflammatory, interferon, p53, and apoptotic pathway modules (pro-aging/pro-mortality directions reversed)
- **Upregulation** of oxidative phosphorylation and lipid metabolism modules (metabolic rejuvenation)

This modular decomposition indicates HPB exerts a **systemic, multi-hallmark health-promoting effect** opposing the broad aging/mortality transcriptomic signature — not a tissue-specific or pathway-specific fix [^tyshkovskiy2026].

### Overlap with caloric restriction and embryonic ground zero

The HPB rejuvenation transcriptomic signature **overlapped substantially with caloric restriction** (Pearson r≈0.5 between CR and HPB gene-expression change vectors). Shared genes include `Cdkn1a`, `Ccl5`, `S100a9`, `Lgals3` (all downregulated by both HPB and CR). This situates HPB within a common **cross-intervention rejuvenation axis** — a set of core aging-trajectory genes that multiple distinct interventions modulate in convergent directions, also shared with embryonic 'ground zero' (the minimum tAge point around E10 in embryogenesis) [^tyshkovskiy2026].

See [[caloric-restriction]] for the CR rejuvenation signature; [[transcriptomic-clock-tage]] for the clock framework; [[lgals3]] and [[p21]] for the shared genes.

### Pro-aging cost to the young partner

**Young heterochronic parabionts** showed **transiently higher tAge** that diminished after detachment and recovery. This mirrors the epigenetic-age elevation seen in young HPB partners in earlier studies and reinforces that HPB imposes a symmetric cost: the old partner benefits at the young partner's transient molecular expense. This is relevant to ethical considerations and also argues against a "pure dilution" explanation — if the young partner's tAge rises, the young animal is losing something (not merely gaining old inhibitory factors, which would be a passive transfer) [^tyshkovskiy2026].

## Mechanism framework

Three mechanistic sub-hypotheses remain in tension and may all be partially correct:

| Hypothesis | Canonical evidence | Status |
|---|---|---|
| **Young-factor introduction** — positive rejuvenating factors from young blood restore tissue function | Villeda 2014 (young plasma → cognition), TIMP2/Castellano 2017 | Supported; identity of dominant factor(s) unresolved |
| **Old-factor removal / dilution** — old blood carries inhibitory factors; diluting them is sufficient | Mehdipour 2020 (NBE mouse), Rebo 2016, CCL11/B2M | Strongly supported; may explain most HPB benefit independently |
| **Young-factor + old-factor synergy** — full HPB benefit requires both adding young factors and removing old ones | No clean crossover study; inferred from incomplete rescue by NBE vs HPB | Unresolved |

The Tyshkovskiy 2026 transcriptomic data do not directly adjudicate these hypotheses (they describe the output, not the mechanistic cause), but the **persistence of the tAge signal after detachment** suggests a transcriptional reprogramming event lasting beyond the period of young-blood exposure — consistent with an epigenetic-resetting mechanism rather than a simple receptor-ligand effect.

## Known pro-aging circulating factors (old blood)

| Factor | Direction with age | Evidence for aging role | Wiki page |
|---|---|---|---|
| [[ccl11]] (eotaxin-1) | Elevated | Infusion into young mice reduces neurogenesis and impairs learning (Villeda 2011) | [[ccl11]] |
| [[b2m]] (beta-2-microglobulin) | Elevated | Infusion impairs hippocampal function; MHC-I component | [[b2m]] |
| TGF-β1 | Elevated | Suppresses satellite cell activation, multiple stem cell compartments | [[tgf-beta]] |
| VCAM-1 (Vcam1) | Elevated | Neuroinflammation amplifier; downregulation by HPB associated with cognitive improvement | — |

## Translation to humans

HPB as a surgical procedure has no human application. The translational derivatives are:

| Derivative | Mechanism | Human evidence | Wiki page |
|---|---|---|---|
| Young-plasma infusion | Young-factor introduction | Limited (Alkahest pilot, Ambrosia — uncontrolled) | [[interventions/blood-product/plasma-exchange]] |
| Neutral blood exchange (NBE) | Aged-factor dilution | Rodent only | [[interventions/blood-product/plasma-exchange]] |
| Therapeutic plasma exchange (TPE) + albumin | Aged-factor removal + albumin restoration | Phase 2/3 (AMBAR, AD, n=496; subgroup effect) | [[interventions/blood-product/plasma-exchange]] |

The translational challenge is that HPB provides **continuous, bidirectional, weeks-long** shared circulation. Clinical analogs (TPE sessions, plasma infusions) provide episodic, unidirectional, lower-volume modulation. Whether episodic interventions approximate the continuous signal that drives rodent HPB benefits is unknown. #gap/needs-human-replication

## R25 recency search summary (2024–2026)

Search terms: "heterochronic parabiosis aging", broad PubMed search 2024-01-01 to 2026-05-29 (n=39 results). High-priority filter (RCT/meta-analysis/systematic review) returned zero results — confirming there are no RCTs or meta-analyses of HPB per se (expected: it is a rodent experimental paradigm). Key recent literature triaged:

- **Tyshkovskiy 2026 (Nature; PMID 42203874)** — integrated; forms the anchor for the transcriptomic-clock section above. Most mechanistically resolved HPB characterisation to date.
- **Wang et al. 2025 (Life Medicine; PMID 41450877; doi:10.1093/lifemedi/lnaf025)** — HPB in aging-accelerated SAM-P8 mice; transcriptomic analysis. Not integrated (archive status pending; claims not independently verified). Consistent with direction of Tyshkovskiy findings.
- **Gulej et al. 2026 (GeroScience; PMID 41721191)** — critical review of plasma-based rejuvenation strategies; integrated in limitations. Argues for mechanistically targeted approaches over broad plasma therapies.
- **Sucharov et al. 2026 (Immunity; PMID 42140192)** — aged circulating CD8+ T cells drive cognitive decline (Villeda lab); relevant to old-blood pro-aging factor space. Not integrated on this page (belongs on T-cell biology page).
- **Gulej et al. 2026 GeroScience (PMID 41714560)** — young blood rejuvenates neurovascular coupling via endothelial IGF-1/IGF-1R signalling. Candidate young-blood factor identification. Not integrated (pending verification).
- **Liu et al. 2025 (Science Advances; PMID 40668916)** — HPB uncovers AdipoR1 as retinal rejuvenation mediator. Organ-specific mechanism. Not integrated.

No recency literature contradicted the established HPB paradigm. The GDF11 controversy (Loffredo 2013 vs Egerman 2015) predates the recency window and is documented under its own #gap/contradictory-evidence marker.

## Limitations and gaps

- **Not a human intervention.** Surgical parabiosis is an animal research tool; all human-relevant inferences must pass through the translational proxy interventions documented on [[interventions/blood-product/plasma-exchange]]. #gap/needs-human-replication
- **GDF11 controversy unresolved.** The dominant young-blood rejuvenating factor(s) remain contested. Multiple candidate molecules have been proposed; no single "master rejuvenation factor" has been validated. #gap/contradictory-evidence (see [[gdf11]])
- **Mouse-to-human factor identity.** Specific circulating factors mediating HPB effects in mice may not be the same as those most important in humans — the plasma proteome ages differently across species. #gap/needs-human-replication
- **Continuous vs episodic exposure.** HPB provides weeks of uninterrupted shared circulation; TPE/plasma infusions provide hours of episodic exposure. Whether duration and continuity of exposure is required for the transcriptomic reprogramming shown by Tyshkovskiy 2026 is untested.
- **Liver-centrism of Tyshkovskiy data.** The GSE224378 dataset used by Tyshkovskiy 2026 is liver RNA-seq. Whether tAge benefits generalise to brain, muscle, and other tissues with HPB in the same animals is unconfirmed. #gap/needs-replication
- **Young-partner cost.** The pro-aging tAge elevation in young HPB partners reinforces the ethical and scientific concern that HPB benefits may be partially zero-sum — relevant to any human clinical model involving young donors. #gap/long-term-unknown

## Related pages

- [[interventions/blood-product/plasma-exchange]] — the canonical page for TPE, NBE, and young-plasma infusion (human-translational descendants of HPB)
- [[gdf11]] — the contested rejuvenating factor; full evidence dispute
- [[ccl11]] — pro-aging old-blood factor; neurogenesis inhibitor
- [[b2m]] — pro-aging old-blood factor; hippocampal function impairment
- [[satellite-cells]] — the first tissue in which HPB rejuvenation was mechanistically demonstrated
- [[transcriptomic-clock-tage]] — the clock framework used in Tyshkovskiy 2026 to quantify HPB rejuvenation
- [[caloric-restriction]] — overlapping tAge rejuvenation signature (r≈0.5 with HPB; shared genes Cdkn1a, Ccl5, S100a9, Lgals3)
- [[p21]] — [[lgals3]] — universal aging markers downregulated by both HPB and CR
- [[hallmarks/altered-intercellular-communication]] — the hallmark this paradigm most directly probes
- [[hallmarks/stem-cell-exhaustion]] — a downstream consequence HPB can partially reverse in muscle and liver
- [[hypotheses/information-theory-of-aging]] — conceptual frame overlapping with the "ground zero" embryonic rejuvenation axis shared with HPB

---

## Footnotes

[^conboy2005]: [[studies/conboy-2005-parabiosis-satellite-cells]] · doi:10.1038/nature03260 · Conboy IM, Conboy MJ, Wagers AJ, Girma ER, Weissman IL, Rando TA · *Nature* 2005 (letters to nature) · n=4–6 pairs/condition (satellite cell assays); n=3–5 (liver) · in-vivo heterochronic parabiosis · p<0.005 · model: young (2–3 mo) + aged (19–26 mo) C57Bl/Ka-Ly5.2 mice; restored Notch-dependent satellite cell activation and hepatocyte proliferation in aged partners; <0.1% GFP+ cells in regenerated myotubes (cell chimerism not the mechanism); 5 weeks parabiosis duration · archive: downloaded (local PDF available)

[^villeda2011]: doi:10.1038/nature10357 · Villeda SA et al., Wyss-Coray T · *Nature* 2011;477(7362):90–94 · in-vivo HPB + plasma infusion (mouse) · p<0.05 · model: young/aged C57BL/6J mice; HPB decreased Dcx+/BrdU+/Sox2+ cells in dentate gyrus of young parabionts; old plasma infusion into young mice independently recapitulated neurogenesis suppression and impaired contextual fear conditioning and RAWM performance; CCL11 identified as one of 6 age-elevated factors; CCL11 infusion into young mice inhibited neurogenesis and impaired learning; anti-CCL11 antibody rescued deficit; CCL11 elevated in aged mouse plasma/CSF and in human plasma (ages 20–90) · archive: downloaded (local PDF available)

[^villeda2014]: doi:10.1038/nm.3569 · Villeda SA, Plambeck KE, Middeldorp J, Castellano JM, Mosher KI, Luo J, Smith LK, Bieri G, Lin K, Berdnik D, Wabl R, Udeochu J, Wheatley EG, Zou B, Simmons DA, Xie XS, Longo FM, Wyss-Coray T · *Nature Medicine* 2014;20(6):659–663 · in-vivo (mouse) + young-human-plasma infusion (mouse) · p<0.05 · model: aged C57BL/6J mice; young human plasma improved hippocampal synaptic plasticity (LTP), radial-arm maze, contextual memory; CREB/Egr1 activation · archive: download failed (OA available) #gap/no-fulltext-access

[^rebo2016]: doi:10.1038/ncomms13363 · Rebo J, Mehdipour M, Gathwala R, Causey K, Liu Y, Conboy MJ, Conboy IM · *Nature Communications* 2016;7:13363 · in-vivo single-exchange (mouse) · model: young (2–4 mo) + aged (20–24 mo) C57Bl/6 mice; single ~50% blood volume exchange; multi-tissue inhibition in young recipients within 4 days; tissue function improvement in old recipients · archive: pending

[^loffredo2013]: doi:10.1016/j.cell.2013.04.015 · Loffredo FS, Steinhauser ML, Jay SM et al., Wagers AJ, Lee RT · *Cell* 2013;153(4):828–839 · in-vivo HPB + GDF11 administration · p<0.05 · model: young (2 mo, CD45.1) + aged (23 mo, CD45.2) C57BL/6 female mice; 4 weeks parabiosis; primary HPB experiment: O-HP n=5, Y-IP n=10, O-IP n=12; heart weight/tibia ratio in O-HP 7.93±0.19 vs O-IP 9.61±0.21 mg/mm (p<0.05); rGDF11 treatment (0.1 mg/kg/day i.p., 30 days) in old mice: n=16/group; SOMAscan proteomics on plasma from 10 young + 10 old mice identified GDF11 as candidate; GDF11 proposed as circulating cardiac rejuvenation factor · archive: downloaded (local PDF available) · NOTE: see #gap/contradictory-evidence and [[gdf11]] for the Egerman 2015 rebuttal; SOMAscan GDF11 aptamer cross-reacts with myostatin; GDF11-as-rejuvenation-factor hypothesis for muscle not supported; cardiac data not directly rebutted

[^egerman2015]: doi:10.1016/j.cmet.2015.05.010 · Egerman MA, Cadena SM, Gilbert JA et al., Brack AS, Glass DJ · *Cell Metabolism* 2015;22(1):164–174 · in-vivo + in-vitro (mouse, rat, human) · model: hSkMDCs (adult human), C57BL/6 mice, Sprague-Dawley rats; GDF11-specific immunoassay (clone 743833; validated non-cross-reactive with myostatin) showed GDF11 shows a trend toward *increase* with age in rat serum (~1.4-fold, p=0.0534, Student's t-test, n=4 young/old) and non-significant trend toward increase in human serum (9 older ≥60 vs 10 younger 20–30 y); GDF11 mRNA increases dramatically in rat skeletal muscle with age; GDF11 inhibits myoblast differentiation and satellite cell expansion at physiological concentrations; 0.1 mg/kg/day GDF11 for 28 days in 23-month C57BL/6 mice did not improve regenerative capacity and showed impaired regeneration markers; prior studies' reagents (SOMAmer + Abcam antibody) are not GDF11-specific · archive: downloaded (local PDF available) · disputes [^loffredo2013] #gap/contradictory-evidence

[^tyshkovskiy2026]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · doi:10.1038/s41586-026-10542-3 · Tyshkovskiy A et al. (Gladyshev VN lab) · *Nature* 2026 · meta-analysis + new RNA-seq · n=11,165 transcriptomes + newly generated HPB liver RNA-seq (GSE224378) · model: multi-species (mouse, rat, macaque, human); HPB analysis in C57BL/6J mice (young 3 mo / old 20 mo; isochronic and heterochronic; attached and 2-month-detached conditions) · verified study page; all HPB-specific claims on this page sourced from this verified source

[^gulej2026review]: doi:10.1007/s11357-026-02136-8 · Gulej R, Patai R, Ungvari A, Tordai A, Huffman DM, Tarantini S, Yabluchanskiy A, Ungvari Z, Csiszar A · *GeroScience* 2026 (online Feb 20) · critical review · argues plasma-based rejuvenation strategies require mechanistically informed, targeted approaches; reviews HPB discovery → NBE/TPE translation · archive: not_oa — abstract-verified only (PMID 41721191)
