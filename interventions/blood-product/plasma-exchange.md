---
type: intervention
aliases: [therapeutic plasma exchange, TPE, plasmapheresis, young plasma transfer, heterochronic parabiosis-derived therapy, neutral blood exchange, NBE, plasma dilution]
mode: blood-product        # R21 schema addition (formalized after this page surfaced the gap); see CLAUDE.md type:intervention block
mechanisms: [systemic-milieu-restoration, aged-factor-removal, young-factor-introduction, dilution-effect, albumin-binding-capacity-restoration]
target-hallmarks: ["[[altered-intercellular-communication]]", "[[stem-cell-exhaustion]]", "[[chronic-inflammation]]"]
target-pathways: []
human-evidence-level: limited
clinical-stage: phase-2
safety-profile: investigational
translation-gap: phase-3-rct-needed
next-experiment: "Phase 3 RCT of TPE+albumin vs sham in mild AD or aging-related cognitive decline with biomarker panel (DunedinPACE, plasma proteomics) and hard endpoints; pre-registered with sufficient power for individual factor analysis."
literature-checked-through: 2026-05-20
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "DOI sanity verified against DOI lookup for all 7 originally-cited DOIs (Conboy 2005 nature03260, Villeda 2014 nm.3569, Mehdipour 2020 aging.103418, Mehdipour 2021 GeroScience s11357-020-00297-8, Mehdipour 2021 transci.103162, Boada 2020 alz.12137, Sha 2022 plasmatology). Wikilinks spot-checked. AMBAR mild-AD subgroup effect sizes, mouse cohort n's, and TPE session volume NOT cross-checked against primary PDFs — synthesis-style content lint only. R34 recency pass (2026-05-08): added Taragano 2025 J Alzheimers Dis (real-world Argentina TPE in mild-moderate AD; n=32 vs historical control n=194), Gonzalo 2024 Ann Clin Transl Neurol (AMBAR inflammatory mediator analysis; PE-Alb reduces IFN-γ, eotaxin, MIP-1α, ICAM-1 in serum and eotaxin-3, MIP-1β in CSF), Ayasse 2024 Curr Alzheimer Res (AMBAR latent-class post-hoc), and Gulej 2026 GeroScience review. All abstract-verified only via PubMed (no full PDF access for new sources)."
---

# Plasma exchange (heterochronic parabiosis-derived strategies)

Therapeutic plasma exchange (TPE), young-plasma transfer, and neutral-plasma dilution are a family of interventions that manipulate the **systemic blood environment** to reverse or slow aging phenotypes. All trace conceptually to heterochronic parabiosis research demonstrating that the composition of the circulating blood environment — not irreversible cell-intrinsic damage — is a key driver of many age-related tissue dysfunctions [^conboy2005]. Mechanistic debate now centers on whether the benefit comes primarily from introducing young-blood factors, removing old-blood factors, or simply diluting accumulated inhibitory signals.

## Historical context — heterochronic parabiosis

Heterochronic parabiosis (surgically joining the circulations of a young and old mouse) was first described in the 1950s but was systematically applied to aging biology by Conboy et al. in 2005. Young blood exposure restored Notch-mediated activation of aged muscle [[satellite-cells]], enabling regeneration at rates approaching young animals [^conboy2005]. The key inference: many age-related stem cell dysfunctions are driven by the **systemic environment**, not by irreversible cell-intrinsic changes. This opened the possibility that blood-composition manipulation in humans could have therapeutic value.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — Notch/Wnt signaling and satellite cell activation conserved; specific factors differ |
| Phenotype conserved in humans? | partial — human plasma proteome ages similarly; satellite cell niche dynamics less well characterized |
| Replicated in humans? | in-progress — AMBAR trial (AD) is largest completed human study |

## Three mechanistic strategies

### Strategy 1 — Young-plasma transfer

Introduction of plasma (or plasma fractions) from young donors into aged recipients. Villeda et al. demonstrated that young plasma infusion to aged mice improved hippocampal synaptic plasticity and cognitive performance in spatial learning tasks (novel-context recognition, radial-arm maze), effects associated with increased Creb and Egr1 activation [^villeda2014]. This is the basis of the commercial "young blood" business model (e.g., Ambrosia, 2016–2019).

**Key candidate rejuvenating factors identified in young plasma:** [[gdf11]] (contested — see that page), TIMP2 #gap/needs-replication, plasminogen, and others under active investigation.

### Strategy 2 — Old-factor dilution / neutral blood exchange (NBE)

Rather than introducing young-blood components, Mehdipour et al. proposed that simply **diluting old blood with saline-albumin** (neutral blood exchange, NBE) replicates many heterochronic parabiosis benefits [^mehdipour2020]. This directly challenges the "young-factor" hypothesis: if dilution alone is sufficient, the circulating inhibitory factors in old blood — not the absence of young factors — are the primary driver of aging phenotypes.

NBE was shown to reduce inhibitory factors including [[ccl11]] (eotaxin-1) and [[b2m]] (beta-2-microglobulin), both of which are elevated in aged plasma and have been demonstrated to impair neurogenesis and cognitive function when infused into young mice [^mehdipour2020]. A follow-up study confirmed that plasma dilution improves cognition and reduces neuroinflammation markers in old mice independently of young-blood exposure [^mehdipour2021geo].

**Candidate aged inhibitory factors reduced by NBE:**
- [[ccl11]] (eotaxin-1) — elevated in aged plasma; inhibits neurogenesis; causal role demonstrated by young-mouse infusion experiments
- [[b2m]] (beta-2-microglobulin) — elevated in aged plasma; impairs hippocampal function; MHC-I component
- TGF-β1 — elevated with age; suppresses satellite cell activation and multiple stem cell compartments

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — CCL11 and B2M are elevated in aged human plasma; neurogenic role in humans not directly demonstrated |
| Phenotype conserved in humans? | unknown — NBE improved mouse cognition; no human NBE trial for aging published as of 2026 |
| Replicated in humans? | no — dilution hypothesis tested only in mice; human analog is TPE (below) |

### Strategy 3 — Therapeutic plasma exchange (TPE) with albumin replacement

Clinical-grade plasmapheresis — a standard apheresis procedure used for decades in autoimmune disease (myasthenia gravis, AIDP) — replaces patient plasma with 5% human albumin solution. This removes plasma proteins indiscriminately, including accumulated inhibitory factors, and restores albumin's binding and transport capacity. Mehdipour et al. proposed repositioning TPE as a gerotherapeutic [^mehdipour2021transci] and noted it mechanistically overlaps with NBE while being immediately implementable in existing clinical infrastructure.

**AMBAR Trial (Alzheimer's Disease Management by Albumin Replacement)** — the largest completed human study applying TPE+albumin to an aging-related condition. Boada et al. conducted a Phase 2/3 RCT in 496 patients with mild-to-moderate Alzheimer's disease across 41 Spanish sites [^boada2020]. TPE+albumin (with/without IVIG) vs sham over 14 months. Key results:

- Primary cognitive endpoint (ADAS-Cog and ADCS-ADL) — **no statistically significant difference in the full mild-moderate cohort** (primary analysis missed significance)
- Prespecified secondary analysis in the **mild-AD subgroup**: significant slowing of cognitive decline (~50% slower progression on ADAS-Cog; ~70% slower on ADCS-ADL)
- Moderate-AD subgroup: no effect
- The positive signal was in a subgroup — the overall trial is ambiguous #gap/contradictory-evidence

#gap/needs-replication — The AMBAR mild-AD subgroup result has now been partially supported by a real-world Argentine cohort (Taragano 2025) but a pre-registered Phase 3 confirmatory trial specifically in mild AD is still needed.

### Post-AMBAR follow-ups (2024–2025)

Three follow-up analyses have appeared since the AMBAR primary publication:

**Gonzalo et al. 2024 (Ann Clin Transl Neurol)** — analyzed serum and CSF samples from n=142 AMBAR participants for changes in 19 inflammatory mediators (6 cytokines, 9 chemokines, 4 vascular injury indicators) [^gonzalo2024]. PE-Alb significantly reduced IFN-γ, eotaxin, MIP-1α, and ICAM-1 in serum, and eotaxin-3 and MIP-1β in CSF (p<0.05, FDR-corrected). Increased serum MIP-1α was associated with worsening ADAS-Cog, CDR-sb, and ADCS-CGIC in placebo but not PE-Alb. This provides a peripheral-to-central mechanistic link consistent with the dilution / inhibitory-factor-removal hypothesis (notably eotaxin/CCL11 — the same factor identified in the Mehdipour mouse work).

**Ayasse et al. 2024 (Curr Alzheimer Res)** — applied a 2-class latent growth mixture model to the AMBAR ADAS-Cog 12 endpoint [^ayasse2024]. After identifying and removing a small (n=48, 22%) "highly variable" trajectory class, the stable cognitive-trajectory subgroup showed significant treatment efficacy (p=0.007, Cohen's d=−0.4) — a post-hoc reanalysis suggesting that unobserved heterogeneity may have masked a treatment effect in the original primary analysis. This is hypothesis-generating, not confirmatory; pre-specified stratification in a future Phase 3 is warranted.

**Taragano et al. 2025 (J Alzheimers Dis)** — Argentina real-world TPE study; n=32 mild-to-moderate AD patients (mean age 72.1; 42.4% female; baseline MMSE 15–26) compared to historical control n=194 matched on inclusion criteria [^taragano2025]. Protocol: 6 weekly intensive sessions + ≥10 monthly maintenance sessions (514 procedures total; 81.5% uneventful; 18.5% mild-moderate AEs mostly venipuncture-related; no severe events). TPE significantly slowed MMSE decline (45% less than controls, p<0.001) and reduced memory deterioration (88% less in immediate recall, p<0.001; 74% in delayed recall, p=0.04). This is the largest non-AMBAR human dataset on TPE in AD and is broadly consistent with the AMBAR mild-AD subgroup signal. Limitations: non-randomized, historical-control design; conflict-of-interest (one author Terumo BCT employee). #gap/needs-replication

**Gulej et al. 2026 (GeroScience)** — most recent critical review of plasma-based rejuvenation strategies [^gulej2026]; argues that progress requires "precise, mechanistically informed interventions—rather than broad, premature applications of plasma therapies" — i.e., that the field needs candidate-factor identification + targeted intervention rather than continued generalist TPE programs.

## IgG glycome rejuvenation — Mijakovac 2026 preprint

> ⚠️ Preprint data — medRxiv (doi:10.64898/2026.04.21.26351390, posted 2026-04-23); not peer-reviewed. All claims provisional. #gap/needs-peer-review

The [[studies/mijakovac-2026-igg-glycome-mortality]] preprint includes the first IgG glycome data from a TPE cohort. Nine participants (4F/5M, mean age 60.8 years, SD 9.19) who underwent monthly TPE sessions over a 6-month period at Circulate Health (Seattle, WA; IRB: Diagnostics Institutional Review Board, Cummaquid, MA) had dried-blood-spot IgG N-glycome profiled by CGE-LIF at baseline, ~3 months, and ~5 months [^mijakovac2026_tpe]. The intervention was associated with a **mean reduction of 0.4 glycan years per month of TPE treatment** (P=0.0245, linear mixed-effects model with time as fixed effect, participant as random intercept, adjusted for age and sex).

**Mechanistic interpretation.** TPE removes the circulating IgG pool along with other plasma proteins. Newly synthesized IgG from B cells — produced to replenish the removed IgG — is glycosylated according to the prevailing inflammatory environment at the time of synthesis. However, the act of repeatedly removing the accumulated pool of aged, hypogalactosylated IgG (G0-enriched) and replacing it with freshly-synthesized IgG shifts the circulating glycan-age distribution toward a younger profile over time. This mechanism is distinct from the estrogen/[[b4galt1|B4GALT1]]-mediated glycan improvement seen with HRT, and from the inflammation-reduction pathway hypothesized for caloric restriction — TPE acts directly on the IgG pool composition rather than on the glycosyltransferase pathway.

This glycomic finding is consistent with the broader multi-omics evidence from [[studies/fuentealba-2025-plasma-exchange-multi-omics|Fuentealba 2025 Aging Cell]], which demonstrated that a single-blinded randomized controlled TPE trial (n=42) produced improvement in 15 epigenetic clock measures relative to placebo [^fuentealba2025_tpe]. Together, the two studies from the Circulate Health / Kiprov / Verdin group suggest that TPE's rejuvenating effects span multiple aging-measurement modalities: epigenetic (Fuentealba 2025) and glycomic (Mijakovac 2026).

**Critical caveats.** The TPE glycome sub-cohort is n=9 — extremely small for any quantitative inference. The study is single-arm with no placebo/sham comparison: regression to the mean, selection bias (healthier patients more likely to complete 6 months of monthly apheresis), and unmeasured lifestyle changes concurrent with TPE participation cannot be excluded. The effect is observational within the broader 20,045-individual cross-study analysis, not from a dedicated glycome-TPE RCT. #gap/needs-replication #gap/needs-peer-review

[^mijakovac2026_tpe]: doi:10.64898/2026.04.21.26351390 · Mijakovac A, Butz E, Vučković F, Kiprov D, Verdin E, Younggren B, Lauc G et al. · medRxiv preprint 2026-04-23 · PREPRINT — not peer-reviewed · n=9 (4F/5M, mean age 60.8) · longitudinal (single-arm, monthly TPE, 6 months) · glycan age −0.4 yr/month (P=0.0245) · CGE-LIF IgG glycome profiling; dried blood spots · local PDF: fetched medRxiv 2026-05-20

[^fuentealba2025_tpe]: doi:10.1111/acel.70103 · Fuentealba M, Kiprov D, Schneider K, Verdin E et al. · Aging Cell 2025 · rct (single-blinded) · n=42 · TPE ± IVIG vs placebo · 15 epigenetic clocks showed biological age rejuvenation vs placebo; multi-omics analysis · archive: pending

## Ambrosia and the direct young-plasma controversy

Ambrosia LLC (2016–2019) ran an uncontrolled commercial "trial" charging participants $8,000–$12,000 for infusions of young donor plasma (16–25 years), with self-reported health outcomes. The FDA issued a safety warning in February 2019 noting: (1) no proven clinical benefit for any aging indication, (2) risks of plasma transfusion reactions, (3) exploitation of vulnerable populations. Ambrosia subsequently ceased operations in the US. #gap/unsourced — Ambrosia's self-reported outcome data were never peer-reviewed or published; no DOI exists for those "results." This page does not cite their unpublished observations.

## Human clinical evidence summary

| Study | Design | N | Intervention | Endpoint | Result |
|---|---|---|---|---|---|
| AMBAR [^boada2020] | Phase 2/3 RCT, sham-controlled | 496 mild–moderate AD | TPE + albumin ± IVIG × 14 mo | ADAS-Cog, ADCS-ADL | Primary: NS; mild-AD subgroup: significant slowing |
| Sha 2022 [^sha2022] | Observational / review | — | TPE comparisons in chronic disease | AD-relevant outcomes | Low-volume TPE proposed as alternative; n/a as primary efficacy evidence |
| Villeda 2014 [^villeda2014] | RCT (mouse); human plasma infusion (mouse) | Mouse cohorts, n~10-15/group | Young human plasma → aged mice | Synaptic plasticity, cognition | Improved; not a human efficacy trial |

No completed Phase 2/3 RCT has demonstrated human benefit for a healthy-aging endpoint (as opposed to AD). #gap/needs-human-replication

## Key proteins and factors

| Factor | Direction with age | Role in mechanism | Wiki page |
|---|---|---|---|
| CCL11 (eotaxin-1) | Elevated | Inhibits neurogenesis; pro-inflammatory | [[ccl11]] |
| B2M (beta-2-microglobulin) | Elevated | Impairs hippocampal function | [[b2m]] |
| GDF11 | Contested (see page) | Initially proposed as rejuvenating; contested data | [[gdf11]] |
| Albumin | Reduced binding capacity with age | Scavenges toxic metabolites; TPE restores capacity | — |
| TGF-β1 | Elevated | Suppresses stem cell activation | [[tgf-beta-pathway]] |

## Safety profile

**TPE itself** (standard medical procedure) has a well-characterized safety profile in disease indications: main risks are citrate-induced hypocalcemia (tingling, cramping), allergic reactions to albumin replacement (~rare), catheter/access complications, and transient hypotension. Not safe or trivial: ~500 mL/session plasma removed, typically 5–7 sessions per course.

**Young-plasma infusion** carries additional risks of alloimmunization, transfusion-transmitted infection, TRALI, and circulatory overload — the standard plasma transfusion risk profile. The FDA warning specifically cited these risks in the Ambrosia context.

**Long-term effects of repeated TPE in non-diseased individuals:** unknown. #gap/long-term-unknown — No safety data beyond 14 months (AMBAR) in any trial. Chronic depletion of beneficial plasma proteins (clotting factors, immunoglobulins) is a theoretical concern; AMBAR replaced with albumin only, not full plasma reconstitution.

## Limitations and gaps

- **Young-factor vs dilution hypothesis unresolved** — the two dominant mechanistic models (introduce young factors vs remove old factors) make partially overlapping but partially distinguishable predictions. A crossover design comparing young-plasma infusion, NBE, and sham in the same subjects would most efficiently discriminate them. #gap/no-mechanism
- **No agreed biomarker panel** — trials use cognitive endpoints (sluggish signal) rather than validated aging biomarkers (DunedinPACE, plasma proteomics). Sensitivity is low; required sample sizes are very large. #gap/dose-response-unclear
- **AMBAR primary endpoint missed** — the Phase 2/3 showed only a subgroup effect in mild AD; a full Phase 3 in mild AD with pre-registration and adequate power is needed. #gap/needs-replication
- **Healthy aging vs disease** — all human trials target a specific disease (AD). No trial has tested TPE in otherwise healthy aged adults against an aging primary endpoint. Regulatory path for a healthy-aging indication is unclear.
- **GDF11 controversy** — early excitement about GDF11 as a key young-blood rejuvenating factor (Loffredo 2013, Sinha 2014) was substantially challenged (Egerman 2015, Glass 2015); the net effect of systemic GDF11 with age and its therapeutic potential remain contested. See [[gdf11]] for the full evidence dispute.
- **Mouse-to-human translation** — heterochronic parabiosis in mice involves continuous, prolonged (weeks) shared circulation, not episodic plasma exchange. Whether intermittent TPE sessions approximate the continuous young-blood exposure that drives mouse benefits is unknown. #gap/needs-human-replication

## Related interventions and concepts

- [[senolytics]] — targets cellular senescence; a distinct mechanism but overlapping target hallmarks
- [[caloric-restriction]] — another systemic intervention that affects circulating factor profiles
- [[hypotheses/young-blood-hypothesis]] — stub; the broader conceptual debate should be created if evidence accumulates

## Footnotes

[^conboy2005]: [[studies/conboy-2005-parabiosis-satellite-cells]] · doi:10.1038/nature03260 · n=3–6 pairs/condition · in-vivo heterochronic parabiosis · p<0.005 · model: young (2–3 mo) paired with aged (19–26 mo) C57Bl/Ka-Ly5.2 mice; rejuvenated Notch-dependent satellite cell activation in aged muscle; <0.1% GFP+ engraftment confirms resident-cell mechanism

[^villeda2014]: doi:10.1038/nm.3569 · Villeda SA et al. · Nature Medicine 2014;20(6):659-663 · n~10–15/group · in-vivo (mouse) + young-human-plasma infusion (mouse) · p<0.05 · model: aged C57BL/6J mice; young human plasma improved hippocampal synaptic plasticity and spatial learning · archive: download failed (OA available at doi URL) #gap/no-fulltext-access

[^mehdipour2020]: doi:10.18632/aging.103418 · Mehdipour M et al. · Aging 2020;12(9):8790–8819 · in-vivo (mouse) + ex-vivo · model: aged C57BL/6J mice; saline-albumin exchange reduced CCL11 and B2M; improved muscle, liver, brain markers; argues old-blood dilution replicates heterochronic parabiosis benefits · archive: pending

[^mehdipour2021geo]: doi:10.1007/s11357-020-00297-8 · Mehdipour M et al. · GeroScience 2021;43(1):1–18 · in-vivo (mouse) · model: aged C57BL/6J mice; plasma dilution improved contextual fear conditioning and reduced hippocampal neuroinflammation markers independently of young-blood exposure · archive: completed (local PDF available)

[^mehdipour2021transci]: doi:10.1016/j.transci.2021.103162 · Mehdipour M, Etienne J, Liu C et al. · Transfusion and Apheresis Science 2021;60(4):103162 · perspective/review · proposes repositioning clinical-grade plasmapheresis (TPE) as a gerotherapeutic; reviews dilution hypothesis and clinical feasibility · archive: not_oa (closed access) #gap/no-fulltext-access

[^boada2020]: doi:10.1002/alz.12137 · Boada M et al. · Alzheimer's & Dementia 2020;16(10):1412–1425 · Phase 2/3 RCT · n=496 mild–moderate AD · sham-controlled · primary endpoints ADAS-Cog + ADCS-ADL NS in full cohort; prespecified mild-AD subgroup: significant slowing (ADAS-Cog ~50%; ADCS-ADL ~70%) · 41 Spanish sites · 14-month intervention · archive: pending (green OA via PMC7984263)

[^sha2022]: doi:10.1177/26348535221131685 · Sha JY et al. · Plasmatology 2022 · observational / review · n=— · proposed low-volume TPE as alternative to conventional TPE in chronic pathologies including AD · low citation count (n=8); treat as hypothesis-generating only · archive: pending

[^gonzalo2024]: doi:10.1002/acn3.52235 · Gonzalo R, Minguet C, Ortiz AM, Bravo MI, López OL, Boada M, Ruiz A, Costa M · Ann Clin Transl Neurol 2024;11(12):3280–3291 · post-hoc analysis of AMBAR samples; n=142 · serum + CSF measurements of 19 inflammatory mediators (6 cytokines, 9 chemokines, 4 vascular-injury indicators) at multiple time points across the 14-month AMBAR schedule (lasting effects) and pre-/post-procedure (acute effects) · PE-Alb significantly reduced IFN-γ, eotaxin (CCL11), MIP-1α, and ICAM-1 in serum, and eotaxin-3 and MIP-1β in CSF (p<0.05 FDR-corrected); MIP-1α increase correlated with cognitive worsening in placebo but not in treatment group · model: human (AMBAR substudy) · note: most authors are full-time Grifols employees (sponsor of AMBAR) — disclosure noted but does not invalidate the FDR-corrected biomarker shifts · archive: not_oa — abstract-verified only (PMID 39476248; PMC11651178 available)

[^ayasse2024]: doi:10.2174/0115672050316936240905064215 · Ayasse ND, Stewart WF, Lipton RB, Gomez-Ulloa D, Runken MC · Curr Alzheimer Res 2024;21(5):353–365 · post-hoc latent growth mixture modeling of AMBAR ADAS-Cog 12 endpoint · 2-class model identified stable (78%) and highly variable (22%, n=48) trajectories; refitting efficacy on stable class vs full placebo: significant treatment efficacy on cognition (p=0.007, Cohen's d=−0.4); simulated dataset (n=1000) confirmed direction · model: human (AMBAR substudy + simulation) · note: hypothesis-generating only; latent stratification was applied to treatment arm only due to small placebo n; two authors are Grifols employees (disclosure) · archive: not_oa — abstract-verified only (PMID 39318022)

[^taragano2025]: doi:10.1177/13872877251375430 · Taragano F, Seinhart D, Epstein P, Sylvestre V, Barañano C, Otero Castro V, Sánchez V, Kilstein A, González R, Franco-Trecu V, Costa-Urrutia P · J Alzheimers Dis 2025;108(1):129–141 · real-world cohort study, Buenos Aires (Clínica Nuestra Señora de las Nieves, 2022–2024) · n=32 mild-moderate AD patients receiving TPE; historical control n=194 (2008–2018) matched on inclusion criteria · mean age 72.1; 42.4% female; baseline MMSE range 15–26; protocol 6 weekly intensive + ≥10 monthly maintenance; 514 procedures (81.5% uneventful; 18.5% mild-moderate AEs mostly venipuncture-related; no severe AEs); plasma exchange volumes 88.2% (intensive) and 49.8% (maintenance) of estimated plasma volume · MMSE decline 45% slower than controls (p<0.001); immediate recall preservation 88% better (p<0.001); delayed recall 74% better (p=0.04); other domains directionally preserved · model: human · COI: P. Costa-Urrutia is full-time Terumo BCT employee · archive: not_oa — abstract-verified only (PMID 40928812; PMC12541112 available)

[^gulej2026]: doi:10.1007/s11357-026-02136-8 · Gulej R, Patai R, Ungvari A, Tordai A, Huffman DM, Tarantini S, Yabluchanskiy A, Ungvari Z, Csiszar A · GeroScience 2026 (online ahead of print Feb 20, 2026) · critical review · synthesizes parabiosis-based discovery, early human plasma-infusion studies, and TPE as rejuvenation; argues clinical translation remains uncertain; calls for mechanistically informed targeted interventions over broad plasma therapies · model: review · archive: not_oa — abstract-verified only (PMID 41721191)
