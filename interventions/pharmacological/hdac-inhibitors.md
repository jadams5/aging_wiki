---
type: intervention
aliases: [HDAC inhibitors, HDACi, histone deacetylase inhibitors, pan-HDAC inhibitors, HDAC6 inhibitors]
mode: pharmacological
mechanisms: [hdac-inhibition, histone-acetylation-augmentation, autophagy-inducer]
targets: ["[[hdac]]"]
target-hallmarks: ["[[epigenetic-alterations]]", "[[loss-of-proteostasis]]"]
target-pathways: ["[[autophagy]]"]
human-evidence-level: none
clinical-stage: phase-2
safety-profile: "well-established (oncology) | investigational (aging-rejuvenation)"
translation-gap: phase-3-rct-needed
next-experiment: "12-week randomized crossover trial of a selective HDAC6 inhibitor (e.g., ricolinostat) vs placebo in 60–80-year-old adults, with primary endpoints of hippocampal-dependent cognitive performance and blood DNA methylation age (epigenetic clock), to establish pharmacodynamic proof-of-concept for aging-relevant target engagement in humans."
clinical-trials-active: 1
literature-checked-through: 2026-05-07
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "McIntyre 2019, McDonald 2013, Pao 2020 claims verified via cross-check against verified [[hdac]] page (R31; PDF-verified 2026-05-07) — no PDF re-read required per SOP § 3 cross-check path. Marks 2007 (not_oa): vorinostat history, Zn2+-chelation mechanism, and FDA-approval date corroborated against [[hdac]] verified claims; full text unverifiable. Zhang/Qin 2014 (not_oa; closed-access): tubastatin A / ACY-1215 AD cognition claim not independently verified — tagged #gap/no-fulltext-access; author list corrected (11 authors, Zhang L et al., last/corresponding Qin C). NCT07404085 (EPIC trial): confirmed RECRUITING via ClinicalTrials.gov v2 API; drug identified as sodium butyrate (not a clinical-grade HDAC inhibitor drug); description updated. clinical-trials-active: 1 confirmed. human-evidence-level: none confirmed correct per schema (no completed aging-indication trials). Intervention-classes.md R16 block confirmed well-formed."
---

# HDAC inhibitors (HDACi)

HDAC inhibitors are small molecules that block the active site of Zn2+-dependent histone deacetylases (Class I, IIa, IIb, and IV; [[hdac]] HDAC1–11), raising acetylation levels on histone tails and — equally importantly — on ~3,600 non-histone substrates including alpha-tubulin, HSP90, p53, and NF-κB p65. In aged tissues, global histone acetylation at stress-response and metabolic gene promoters declines; HDAC inhibition is hypothesized to partially reverse this drift. The class has five FDA-approved members, all oncology-indicated. No HDAC inhibitor has an approved aging or healthspan indication as of 2026-05-07, and translation of invertebrate lifespan results to mammals remains undemonstrated.

**This is a class page.** Compound-level PK, dosing, and individual trial data belong on dedicated compound pages when seeded. Mechanistic protein anchor: [[hdac]] (verified R31). NAD+-dependent Class III deacetylases (sirtuins) are a distinct family — see [[sirtuin]] and [[sirtuin-activators]].

## Chemotype overview

Five structural classes achieve HDAC inhibition through distinct binding modes [^marks2007]:

| Chemotype | Examples | Selectivity | Clinical status |
|---|---|---|---|
| **Hydroxamic acids** | Vorinostat (SAHA), panobinostat, belinostat, trichostatin A (TSA) | Pan-HDAC (Class I/II) | Vorinostat, panobinostat, belinostat FDA-approved (oncology); TSA research probe only |
| **Cyclic depsipeptides** | Romidepsin (FK228, Istodax) | Class I-selective (prodrug; thiol-activated) | FDA-approved 2009 (CTCL + PTCL) |
| **Benzamides** | Entinostat (MS-275), chidamide (tucidinostat) | Class I-selective (HDAC1/2/3) | Entinostat Phase 3 failed (E2112, breast cancer, 2019); chidamide China NMPA-approved 2014 (PTCL) |
| **Aliphatic acids** | Sodium butyrate, phenylbutyrate, valproate | Broad / weak (Class I/IIa) | Valproate FDA-approved (epilepsy); butyrate food-grade; not approved for aging |
| **HDAC6-selective** | Tubastatin A, ricolinostat (ACY-1215), citarinostat (ACY-241) | HDAC6 >> Class I | Ricolinostat Phase I/II (myeloma, CLL); no completed aging trial |

### FDA-approved agents

All five FDA-approved HDAC inhibitors target oncology indications — **NOT aging-validated:**

- **Vorinostat (SAHA, Zolinza)** — hydroxamic acid; FDA-approved 2006 for cutaneous T-cell lymphoma (CTCL); the first approved HDAC inhibitor. Origin compound for the class pharmacology [^marks2007].
- **Romidepsin (Istodax, FK228)** — cyclic depsipeptide prodrug; FDA-approved 2009 (CTCL) and 2011 (PTCL); Class I-selective after thiol activation.
- **Belinostat (Beleodaq)** — hydroxamic acid; FDA-approved 2014 (PTCL).
- **Panobinostat (Farydak)** — hydroxamic acid; FDA-approved 2015 (multiple myeloma, conditional); conditional approval withdrawn EMA 2020 after confirmatory trial failed.
- **Chidamide (Tucidinostat, Epidaza)** — benzamide; China NMPA-approved 2014 (PTCL); not FDA-approved.

### HDAC6-selective inhibitors (primary aging-context candidates)

HDAC6 is a cytoplasmic deacetylase with two tandem catalytic domains; its primary substrates are alpha-tubulin (K40) and HSP90 rather than histones. HDAC6 inhibition increases tubulin acetylation, stabilizing microtubules and restoring axonal transport — a mechanism implicated in neurodegeneration and proteostasis [^mcintyre2019]. This selectivity profile separates HDAC6 inhibitors from the pan-HDAC toxicity pattern (cytopenias, GI) that limits oncology agents for healthy-aging use.

| Agent | Status | Primary indication explored |
|---|---|---|
| Tubastatin A | Preclinical | Neurodegeneration models |
| Ricolinostat (ACY-1215) | Phase I/II (completed, oncology) | Multiple myeloma, CLL; no aging trial completed |
| Citarinostat (ACY-241) | Phase I/II (oncology) | Multiple myeloma; not aging-indicated |

### Aliphatic acids (endogenous HDAC inhibitors)

Sodium butyrate, phenylbutyrate, and valproate inhibit Class I/IIa HDACs weakly and non-selectively. Beta-hydroxybutyrate (BHB), produced during fasting and ketogenic diet at 1–2 mmol/L, is an endogenous Class I HDAC inhibitor — a proposed link between caloric restriction and epigenetic rejuvenation [^mcintyre2019]. See [[ketogenic-diet]] for the BHB-HDAC inhibition mechanism.

## Mechanism of action

All approved HDAC inhibitors chelate the active-site Zn2+ ion in the HDAC catalytic domain (the DAC domain), blocking deacetylase activity [^marks2007]. The primary aging-relevant consequences are:

1. **Histone hyperacetylation** — H3K9ac, H3K14ac, H4K16ac increase at gene promoters, reopening chromatin at loci silenced with age. Stress-response, autophagy, and metabolic gene networks that are hypo-acetylated in aged tissues are the intended targets [^mcintyre2019].
2. **Non-histone substrate effects** — see [[hdac]] for the full substrate landscape. Key aging-relevant non-histone effects:
   - HDAC6 inhibition → alpha-tubulin K40 hyperacetylation → microtubule stabilization → restored axonal transport → improved proteostasis and autophagosome flux
   - HDAC1 inhibition → OGG1 hyperacetylation → impaired BER AP-lyase activity (note: HDAC1 *activation*, not inhibition, rescued OGG1 in the Pao 2020 brain-aging context — this is a nuance where HDAC1 inhibition would be counterproductive; see below)
   - HDAC3 inhibition → NF-κB p65 K310 hyperacetylation → altered inflammatory SASP gene output

**Important nuance — HDAC1 and DNA repair:** Pao et al. 2020 showed that HDAC1 *deacetylates* OGG1 to *stimulate* its AP-lyase DNA repair activity in aged neurons [^pao2020]. In this context, HDAC1 inhibition would hyperacetylate OGG1 and *impair* BER — the opposite of the intended effect. This illustrates that pan-HDAC inhibition in the brain may have complex substrate-specific consequences not captured by the "histone hyperacetylation = good" heuristic. #gap/contradictory-evidence

## Aging biology evidence

### Invertebrate lifespan extension

Pharmacological HDAC inhibition extends lifespan in multiple invertebrate models [^mcintyre2019]:

- **Drosophila melanogaster:** Vorinostat (SAHA) administered during mid- and late-life extended longevity in Canton-S and Oregon-R flies [^mcdonald2013]. Sodium butyrate and phenylbutyrate also extend fly lifespan (Kang et al. 2002; Zhao et al. 2005 — see [^mcintyre2019]).
- **C. elegans:** Valproate, trichostatin A (TSA), and beta-hydroxybutyrate extend lifespan in multiple studies, in part via *hda* (HDAC) knockdown phenocopying — consistent with epigenetic derepression of stress-response genes [^mcintyre2019].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — Zn2+-dependent HDACs are structurally conserved; histone acetylation patterns are conserved across eukaryotes |
| Phenotype conserved in humans? | unknown — invertebrate lifespan extension not replicated in mammals |
| Replicated in humans? | no — no aging-endpoint human trial |

**Caveats:** (1) Invertebrate lifespan has not been extended by selective HDAC inhibitors in mammals under controlled ITP-style conditions. (2) Short-chain fatty acids (butyrate, valproate) act on multiple targets beyond HDACs (GPR41/43, mTOR, mitochondria); HDAC-specificity of the lifespan effects is not established. (3) Doses required for HDAC inhibition in flies may not translate to safe chronic dosing in mammals. #gap/needs-human-replication #gap/needs-replication

### Mammalian aging models

The Pao 2020 study established a specific HDAC1 pro-repair role in aged mouse neurons: exifone (a P/Q-HDAC1 activator, 50 mg/kg/day IP, 4 weeks) restored OGG1 AP-lyase activity in 17-month-old C57BL/6J mice and improved contextual fear conditioning and hippocampal LTP in 8-month-old 5XFAD AD-model mice [^pao2020]. Critically, this is HDAC1 *activation*, not inhibition — a mechanism that runs opposite to the canonical HDAC inhibitor class. The 5XFAD behavioral rescue arm was AD-model mice, not aged WT.

No pan-HDAC inhibitor has been shown to extend lifespan in mice under controlled multi-center conditions (NIA ITP has not tested any HDAC inhibitor). #gap/needs-human-replication

### HDAC6 and neurodegeneration models

Tubastatin A and ricolinostat improve tubulin acetylation and axonal transport deficits in Alzheimer's and Parkinson's disease mouse models [^zhang2014]. The mechanism — HDAC6 inhibition → tubulin hyperacetylation → restored microtubule stability → autophagosome trafficking — connects to the [[loss-of-proteostasis]] and [[disabled-macroautophagy]] hallmarks. These are preclinical findings; no clinical neurodegeneration trial using HDAC6-selective inhibitors has reported aging-relevant outcomes. #gap/needs-human-replication

## Human evidence

**No HDAC inhibitor has an approved aging, healthspan, or geroprotective indication.** Human evidence is confined to:

1. **Oncology Phase 2/3 trials** (FDA-approved agents) — establish safety and PK profiles useful for extrapolation, but not aging endpoints.
2. **Entinostat E2112 Phase 3 failure (2019)** — entinostat + exemestane failed to improve overall survival vs. exemestane alone in postmenopausal hormone-receptor-positive, HER2-negative advanced breast cancer. This was an oncology failure, but it illustrates Class I-selective HDAC inhibitor limitations in a human setting.
3. **NCT07404085 (EPIC trial)** — a single recruiting trial as of 2026-05-07: **sodium butyrate** (dietary supplement; aliphatic acid HDACi) + virtual-reality cognitive training in 40–75-year-old adults with remitted mood disorders (bipolar disorder or major depressive disorder; n=160 estimated). Primary endpoint: global cognitive composite score at 3 weeks. This is the only active aging-adjacent HDAC inhibitor trial identified; it is not a longevity or healthspan primary endpoint trial, and it uses a non-selective aliphatic acid rather than a clinical-grade HDAC inhibitor drug.
4. **Ricolinostat (ACY-1215) oncology trials** — Phase I/II in myeloma (NCT02787369, active not recruiting) and CLL; not aging-indicated.

`clinical-trials-active: 1` reflects the EPIC trial (NCT07404085, sodium butyrate arm) as the sole active aging-adjacent registered trial (ClinicalTrials.gov v2 API search, 2026-05-07; queries: "HDAC inhibitor aging", "histone deacetylase inhibitor older adults", "HDACi longevity"). Note: NCT02787369 (ricolinostat in CLL; ACTIVE_NOT_RECRUITING) is oncology-only and excluded from this count. #gap/long-term-unknown

## Safety profile and translation barriers

**Oncology doses are incompatible with aging prophylaxis.** At therapeutic oncology doses, pan-HDAC inhibitors cause:
- Thrombocytopenia and neutropenia (cytopenias — dose-limiting)
- GI toxicity (nausea, diarrhea, fatigue)
- QTc prolongation (especially panobinostat)
- Increased infection risk

These class toxicities reflect the broad epigenetic impact of pan-HDAC inhibition on rapidly dividing hematopoietic and GI cells. At the chronic low doses required for aging prevention, the safety profile is unknown. #gap/long-term-unknown

**HDAC6-selective inhibitors** (ricolinostat, tubastatin A) avoid the histone-disruption toxicity of pan agents by targeting the cytoplasmic tubulin/HSP90 substrates rather than nuclear chromatin broadly. This selectivity makes them the most credible aging-indication candidates, but chronic safety data in healthy older adults remains entirely absent.

**Aliphatic acids** (sodium butyrate, valproate, BHB at nutritional ketosis levels) are the most tolerable chronic HDAC inhibitors, but their HDAC selectivity is poor and their in-vivo HDAC-specific contribution to any aging benefit is unestablished.

| Safety tier | Agents | Rationale |
|---|---|---|
| Incompatible with aging prophylaxis | Vorinostat, panobinostat, romidepsin, belinostat | Oncology-dose cytopenias + GI; chronic QTc risk |
| Investigational (requires safety profiling) | Entinostat, ricolinostat, citarinostat | Class I / HDAC6 selective; Phase 1/2 data in cancer patients; chronic aging-dose safety not established |
| Tolerated but non-specific | Sodium butyrate, valproate, BHB | Broad targets; poor HDAC class selectivity; chronic dietary exposure acceptable |

## Assessment: translation gap

HDAC inhibitors as an aging-intervention class face a stack of unresolved barriers:

1. **Species-translation gap:** Invertebrate lifespan extension (flies, worms) has not been extended to mammals under controlled conditions. The translational distance from *Drosophila* to human is large for epigenetic interventions. #gap/needs-human-replication
2. **Selectivity problem:** Pan-HDAC inhibitors change acetylation at thousands of loci simultaneously. Beneficial effects on aging-relevant loci may be outweighed by adverse epigenetic perturbations at oncogene promoters or immune gene networks. The chromatin-dose window for aging benefit vs. harm has not been characterized.
3. **HDAC1 brain nuance:** The Pao 2020 finding that HDAC1 *activation* (not inhibition) rescues DNA repair in aged neurons suggests that the simplistic "HDAC inhibition → epigenetic rejuvenation" frame is incomplete. Tissue-specific and member-specific effects complicate class-level predictions.
4. **No aging-dose PK:** Pharmacokinetics at sub-oncology doses in older adults are not established. Bioavailability, half-life, and tissue distribution at chronic low doses are unknown for most agents.
5. **No human aging biomarker data:** No trial has reported whether any HDAC inhibitor moves epigenetic clock biomarkers (e.g., [[grimage-2019]], [[dunedinpace-2022]]) in human aging.

## Related and sibling classes

| Class | Mechanism | Relation to HDAC inhibitors |
|---|---|---|
| [[sirtuin-activators]] | SIRT1–7 deacetylase activation | Class III deacetylases; mechanistically distinct from Zn2+-HDACs; same acetylome substrates overlap |
| [[nad-precursors]] | NAD+ replenishment → SIRT1/3/6 activity | Indirect support for sirtuin (Class III) activity; complementary to HDAC inhibition at different substrate sets |
| [[mtor-inhibitors]] | mTOR inhibition → autophagy induction | Convergence on autophagy: HDAC6 inhibition → tubulin acetylation → autophagosome flux; mTOR inhibition → ULK1 activation |
| [[caloric-restriction]] | Endogenous BHB → HDAC inhibition | BHB is an endogenous Class I HDAC inhibitor at nutritional ketosis; CR is a confounded HDAC inhibitor + mTOR inhibitor + AMPK activator |
| [[ketogenic-diet]] | BHB production → HDAC inhibition | Most physiological chronic HDAC inhibitor; low selectivity |

## Limitations and open questions

- **No mammalian lifespan extension data.** ITP has not tested any HDAC inhibitor. Invertebrate results do not establish mammalian aging efficacy. #gap/needs-human-replication
- **HDAC1 activation vs. inhibition in the brain.** Pao 2020 shows that HDAC1 function is required for OGG1-mediated BER in aged neurons — pan-HDAC inhibitors would impair this protective mechanism. The right aging intervention for brain HDAC biology may be activation of HDAC1 or selective inhibition of other members, not pan-inhibition. #gap/contradictory-evidence
- **Epigenetic clock response unknown.** Whether any HDAC inhibitor reverses DNA methylation age in human tissues has not been tested in a controlled trial. #gap/needs-human-replication
- **Chronic safety at sub-oncology doses entirely uncharacterized.** #gap/long-term-unknown
- **Dosing for aging: no established target.** The dose that achieves histone hyperacetylation at aging-relevant loci without off-target chromatin disruption in healthy adults is unknown. #gap/dose-response-unclear
- **HDAC6-selective candidates are the most tractable** but have no completed aging-indication trial data beyond preclinical models.

## Cross-references

- [[hdac]] — verified protein family page (R31); canonical source for class taxonomy, substrate biology, mechanistic claims, and pharmacology table
- [[epigenetic-alterations]] — primary targeted hallmark
- [[loss-of-proteostasis]] — secondary target (HDAC6 → tubulin acetylation → axonal transport → proteostasis)
- [[disabled-macroautophagy]] — tertiary target (HDAC6 → autophagosome trafficking)
- [[sirtuin]] — Class III deacetylases; mechanistically distinct but substrate-overlapping
- [[sirtuin-activators]] — sibling pharmacological class
- [[caloric-restriction]] — lifestyle intervention with overlapping HDAC-inhibitor mechanism via BHB
- [[ketogenic-diet]] — endogenous BHB-mediated HDAC inhibition
- [[scfa-signaling]] — gut-derived butyrate as endogenous HDAC inhibitor; microbiome link to epigenome
- [[cbp-p300]] — the HAT counterpart to HDACs; the acetylation balance is the core regulatory axis
- [[p53]] — HDAC1/SIRT1 deacetylate p53 K382; relevant to senescence threshold

## Footnotes

[^marks2007]: doi:10.1038/sj.onc.1210204 · Marks PA · *Oncogene* 2007 · review · ~537 citations · Discovery and development of SAHA (vorinostat) as the first approved HDAC inhibitor; covers hydroxamic acid chemotype, mechanism of Zn2+-chelation, and early clinical rationale · archive: not_oa

[^mcintyre2019]: doi:10.15252/emmm.201809854 · McIntyre RL, Daniels EG, Molenaars M, Houtkooper RH, Janssens GE · *EMBO Molecular Medicine* 2019 · review · 112 citations · HDAC inhibitors in aging — covers lifespan extension in C. elegans (valproate, BHB via hda RNAi) and Drosophila (sodium butyrate, phenylbutyrate, TSA, vorinostat/SAHA); preclinical results in neurodegeneration, cardiac, and metabolic aging · archive: downloaded (gold OA); PDF verified against hdac.md R31

[^mcdonald2013]: doi:10.1016/j.exger.2012.09.006 · McDonald P, Maizi BM, Arking R · *Experimental Gerontology* 2013 · in-vivo · model: Drosophila melanogaster · 35 citations · Vorinostat (SAHA) extended mid- and late-life longevity in Canton-S and Oregon-R flies; mechanism attributed to HDAC inhibition and altered histone acetylation · archive: download failed (green OA); drug identity (vorinostat/SAHA) confirmed via McIntyre 2019 Table 1; verified against hdac.md R31

[^pao2020]: doi:10.1038/s41467-020-16361-y · Pao PC et al. · *Nature Communications* 2020 · in-vivo · model: Hdac1 cKO (Nestin-Cre), 5XFAD AD model, aged (17-month) C57BL/6J mice · 199 citations · HDAC1 deacetylates OGG1 (p300-acetylated lysines), stimulating AP-lyase BER activity; HDAC1 loss → elevated 8-oxoG at gene promoters; exifone (50 mg/kg/day IP, 4 wk) rescued OGG1 activity in 17-mo WT mice and improved fear conditioning + LTP in 8-mo 5XFAD mice; **note: HDAC1 activation is the mechanism — the opposite direction from pan-HDAC inhibition** · archive: downloaded (gold OA); PDF verified against hdac.md R31

[^zhang2014]: doi:10.3233/JAD-140066 · Zhang L et al. (11 authors; last/corresponding: Qin C) · *Journal of Alzheimer's Disease* 2014 · in-vivo · model: Alzheimer's disease transgenic mice · title: "Tubastatin A/ACY-1215 Improves Cognition in Alzheimer's Disease Transgenic Mice" — both agents tested; HDAC6 inhibition → tubulin hyperacetylation → microtubule stabilization mechanism · archive: not_oa (closed-access; full text not verified) · #gap/no-fulltext-access #gap/needs-replication — single preclinical study in AD model, not aged WT mice; exact n, strain, doses, and quantitative outcomes not independently verified
