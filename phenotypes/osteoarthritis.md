---
type: phenotype
aliases: [OA, osteoarthrosis, degenerative joint disease, knee osteoarthritis, hip osteoarthritis]
icd-10: M19.9
icd-11: FA00-FA05
affected-tissues: ["[[articular-cartilage]]", "[[synovium]]", "[[subchondral-bone]]"]
underlying-hallmarks: ["[[cellular-senescence]]", "[[chronic-inflammation]]", "[[deregulated-nutrient-sensing]]"]
typical-onset: "Symptomatic typically 50+; subclinical structural changes earlier; risk rises sharply after menopause in women"
prevalence-65plus: "~30–50% by radiographic criteria; ~10–20% symptomatic knee OA in adults 60+"
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-05-08 — minimal seed page for cross-link target. Epidemiology, ICD codes, and DMOAD-pipeline status NOT yet cross-checked against primary sources. Verify before relying on quantitative claims. The Meurot 2022 background (low-grade-inflammation framing, Berenbaum 2013, Robinson 2016) is supported by the Meurot 2022 PDF read end-to-end on 2026-05-08; everything else awaits independent verification.

# Osteoarthritis

The most common form of arthritis and a leading cause of disability worldwide. Historically framed as "wear and tear" cartilage degeneration; modern reframing positions OA as a **whole-joint disease** with three coupled pathologies — cartilage loss, synovial inflammation (synovitis), and subchondral bone remodelling — driven by a metabolically deranged, low-grade-inflammatory joint environment [^berenbaum2013] [^robinson2016]. The aging-biology relevance rests on (a) the strong age dependence of incidence, (b) growing evidence that [[cellular-senescence|joint senescent cells]] (chondrocytes, synoviocytes) drive disease via SASP, and (c) the role of metabolic-syndrome inflammation as a co-driver [^meurot2022].

## Disease scope

- **Global burden:** the Meurot 2022 introduction reports >300 million individuals affected worldwide [^meurot2022]; figure attributed to GBD 2017 estimates (Palazzo 2014; James 2018 — author's references 1–3). Independent verification against GBD primary source not yet done. #gap/needs-replication
- **Economic burden (US):** ~$350 billion estimated economic cost in the US per Palazzo 2014 (cited in [^meurot2022]); independent verification pending. #gap/needs-replication
- **Cardiovascular comorbidity:** OA is associated with cardiovascular mortality elevated by >50% versus matched non-OA controls (driven by sedentary lifestyle and shared metabolic-syndrome substrate) — figure cited in [^meurot2022] introduction; primary source not independently retrieved.
- **FDA designation:** listed as a "severe disease" by the FDA in 2018, formalizing the regulatory framing for disease-modifying OA drug (DMOAD) development [^meurot2022]; primary FDA guidance document not retrieved. #gap/needs-replication

## Subtypes

| Subtype | Driver | Aging-biology relevance |
|---|---|---|
| **Primary (idiopathic) OA** | Multifactorial age-driven; no single antecedent injury | Most aging-relevant; senescent-cell + low-grade-inflammation hypotheses apply |
| **Post-traumatic OA (PTOA)** | Defined antecedent joint injury (ACL tear, meniscal damage, intra-articular fracture) | Mechanistically informative — accelerated OA timeline allows mechanism dissection in mouse models (DMM, ACLT, MIA) |
| **Metabolic-syndrome-associated OA** | Obesity + dyslipidemia + insulin resistance; non-load-bearing joints affected → not weight-load-only | Direct intersection with [[deregulated-nutrient-sensing]] and [[chronic-inflammation]] hallmarks; basis for the [[glp1-agonists]] OA hypothesis [^meurot2022] [^qin2026] |
| **Erosive OA** | Inflammatory variant; predominantly hand DIP/PIP joints; women > men | Less aging-classical; not the focus of current geroscience trials |

The metabolic-syndrome-associated phenotype is the most aging-biology-relevant subtype: it dissociates OA from pure mechanical loading, positions adipose-driven low-grade inflammation as a primary driver, and provides the conceptual basis for testing weight-loss-independent metabolic interventions like the [[glp1-agonists]] in cartilage protection [^qin2026].

## Pathophysiology

### Three-tissue framing (modern)

OA is no longer treated as cartilage-only [^berenbaum2013] — synovitis and subchondral bone changes are integral, often preceding radiographic cartilage loss:

1. **Articular cartilage:** chondrocyte dysfunction → matrix metalloproteinases (MMP-1, MMP-3, MMP-13) and aggrecanases (ADAMTS4, ADAMTS5) degrade type II collagen and aggrecan; chondrocytes lose homeostatic anabolic/catabolic balance.
2. **Synovium:** synovitis (often in the early stages) — macrophage infiltration with M1-skewed polarization; production of IL-1β, IL-6, TNF-α, PGE₂, NO; ROS via iNOS-COX2 axes [^meurot2022]. Synovitis severity correlates with pain (Meurot 2022 reports R²=0.91 in MIA mouse model).
3. **Subchondral bone:** remodelling, sclerosis, osteophyte formation; bone marrow lesions visible on MRI predict structural progression.

### Low-grade inflammation hypothesis

The "OA as inflammatory disease" reframing [^berenbaum2013] [^robinson2016] argues that low-grade systemic inflammation — driven by metabolic syndrome, adiposity, hyperglycemia, and AGE accumulation — directly amplifies local joint inflammation. Mechanistic links: chronic hyperglycemia → AGE accumulation in cartilage → AGE-RAGE signalling activates inflammatory and oxidative pathways within joint tissue; AGEs synergize with IL-1β to increase OS and inflammation. This positions OA in the same conceptual frame as [[chronic-inflammation|inflammaging]] of other tissues. #gap/needs-human-replication for direct mechanistic evidence in humans.

### Cellular senescence in OA

Joint cells — particularly chondrocytes and synovial fibroblasts — accumulate p16+ senescence markers with age and post-injury. Senescent chondrocytes produce SASP factors (MMP-13, IL-6, IL-8) that drive matrix degradation and prime adjacent cells. **The first major clinical test of this hypothesis (UNITY-OA-101, UBX0101 intra-articular MDM2 inhibitor) failed in Phase 2** for knee OA in 2020 — the program was abandoned. The failure is interpreted as either (a) UBX0101's mechanism not cleanly senolytic against the relevant SCAP, or (b) chondrocyte SCAP profile not matched to the MDM2/p53/p21 axis [^senolytics-page]. See [[interventions/pharmacological/senolytics]] for the current senolytic-OA evidence map.

## Aging hallmark intersections

| Hallmark | Link | Evidence quality |
|---|---|---|
| [[cellular-senescence]] | p16+ chondrocyte and synoviocyte accumulation; SASP-driven matrix degradation; UNITY senolytic program (failed Phase 2) | Preclinical strong; clinical first-attempt failed |
| [[chronic-inflammation]] | Local synovitis + low-grade systemic inflammation feedback; metabolic-syndrome amplification | Human RCT-supported (anti-IL-1β trials); Meurot 2022 confirms macrophage M1-skew [^meurot2022] |
| [[deregulated-nutrient-sensing]] | Metabolic-syndrome OA subtype; AGE accumulation from chronic hyperglycemia; hyperinsulinemia-cartilage links | Mechanism-supported; Qin 2026 GLP-1R-AMPK-PFKFB3 axis adds a chondrocyte-metabolic-reprogramming mechanism [^qin2026] |
| [[mitochondrial-dysfunction]] | Chondrocyte mitochondrial decline; metabolic shift toward glycolysis under inflammation; reversed by GLP-1R agonism per [^qin2026] | Preclinical; Qin 2026 glycolysis-to-OXPHOS finding directly relevant |
| [[disabled-macroautophagy]] | Reduced chondrocyte autophagy with age contributes to OA; rapamycin shows chondroprotection in mouse models | Preclinical; not yet clinically tested in OA |
| [[altered-intercellular-communication]] | [[15-pgdh]] elevation in aged/injured cartilage depletes chondrocyte PGE2; PGDHi reprograms preexisting chondrocyte subpopulations toward ECM-synthesizing phenotype [^singla2025] | Preclinical strong (mouse + ex-vivo human explants); IP held by Epirium Bio but no registered PGDHi clinical trial as of 2026-05-23 |

## Interventions and clinical landscape

**Existing clinical care** focuses on symptom management — analgesics, NSAIDs, physical therapy, intra-articular corticosteroid or hyaluronic acid injection, and end-stage joint replacement (arthroplasty). **No DMOAD (disease-modifying OA drug) is currently FDA-approved** [^meurot2022]. Multiple candidate classes are in development; pipelines include:

- **Senolytics** — see [[interventions/pharmacological/senolytics]]; UNITY-OA-101 (UBX0101) failed Phase 2 in 2020. Fisetin OA trials remain a target of interest given fisetin's [[cellular-senescence|senolytic]] activity in the indication; no large fisetin-OA trial has reported as of 2026-05-08. #gap/needs-human-replication
- **Anakinra** ([[anakinra]] — IL-1Ra) — multiple OA trials registered; results mixed; aging-relevance via [[chronic-inflammation]] axis.
- **GLP-1 receptor agonists** — emerging hypothesis; see [[glp1-agonists]] § Joint and cartilage and the new entries [^meurot2022] (liraglutide preclinical, intra-articular delivery) and [^qin2026] (semaglutide weight-loss-independent chondroprotection via GLP-1R-AMPK-PFKFB3 axis; pilot RCT ChiCTR2200066291 supportive). The GLP-1-agonist OA hypothesis is the freshest aging-biology-rooted DMOAD candidate as of 2026.
- **Wnt-pathway modulators** — lorecivivint (CDC-like kinase / DYRK inhibitor); intra-articular spiroindolinone class (sprifermin — recombinant FGF18); these are structural-DMOAD candidates rather than aging-biology-rooted.
- **15-PGDH inhibitors (PGDHi)** — emerging gerozyme-targeted class; [[15-pgdh]] (HPGD) protein is elevated in aged + injured murine articular cartilage; both systemic and intra-articular [[sw033291]]-class inhibition increases tissue PGE2 to physiologic levels, drives **gene-expression reprogramming of preexisting chondrocytes** (↓hypertrophic 15-PGDH+ subset defined by CD200/Ihh/Mef2c/Wnt5b/Spp1/Pth1r/Alpl/Runx2, ↑ECM-synthesizing articular subset defined by Bmp5/Fgf2/Stat5a/Hdac9) without invoking stem/progenitor expansion, and reduces OA-associated pain in aged mice (CatWalk p=0.010 paw contact, p=0.028 mean intensity, vehicle vs PGDHi) [^singla2025]. Mouse cohorts: aged n=9/group; PTOA n=7/group. **Ex-vivo human OA cartilage explants** — n=11 patients (55–75 yr, total-knee-replacement source) characterized the CD200+ 15-PGDH+ subpopulation by FACS; PGDHi treatment experiments used n=5/group for GAG content (DMMB assay) and stiffness (nanoindentation, Young's modulus). IP held by Epirium Bio (formerly Myoforte Therapeutics); no registered PGDHi clinical trial as of 2026-05-23 (druggability tier 2 — high-quality probe, not yet a clinical drug; see [[15-pgdh]]). This is the freshest aging-biology-rooted DMOAD candidate as of 2026 alongside the GLP-1RA hypothesis; both have cancer-aging tradeoff caveats (15-PGDH is a tumor suppressor in colon/lung — see [[frameworks/cancer-aging-tradeoffs]]).
- **Liraglutide systemic — NEGATIVE** — Gudbergsen et al. 2021 (*Am J Clin Nutr*) reported daily systemic liraglutide injections in OA-with-obesity patients did NOT ameliorate OA-related pain after diet-induced weight loss; authors speculate poor local joint concentrations [^gudbergsen2021]. This negative trial is a major reason the Meurot 2022 work pivoted to intra-articular delivery, and the Qin 2026 demonstration of weight-loss-independent chondroprotection via systemic semaglutide is the contemporary counterpoint requiring replication.

## Mouse models in OA research

Three induction models dominate; choice matters for interpretation [^meurot2022]:

| Model | Mechanism | Onset | Strengths | Limitations |
|---|---|---|---|---|
| **MIA (sodium monoiodoacetate)** | Single intra-articular injection of MIA inhibits chondrocyte glycolysis → chondrocyte death | Days–weeks | Rapid, reproducible, allows pharmacological dose-response (von Frey pain assay validated) | Chemically toxic mechanism — does not recapitulate slow degenerative human OA; primarily used for analgesic and short-term anti-inflammatory screening |
| **DMM (destabilization of medial meniscus)** | Surgical transection of MMTL → mechanical instability → progressive cartilage loss | Weeks–months | Closer to human PTOA; structural endpoint relevant | Surgical variability; longer experimental timeline |
| **HFD/HFHS (high-fat / high-fat-high-sugar diet) ± surgical destabilization** | Diet-induced obesity superimposed on PTOA | Months | Recapitulates metabolic-syndrome OA subtype; relevant for GLP-1 trials | Confounds weight + metabolic effects (which Qin 2026 explicitly controlled by pair-feeding) |

## Cross-references

- [[interventions/pharmacological/senolytics]] — UNITY-OA-101 failure; fisetin-OA hypothesis
- [[fisetin]] — senolytic; OA among proposed indications (no powered OA trial yet reported)
- [[anakinra]] — IL-1Ra; OA trials
- [[glp1-agonists]] — emerging DMOAD class via [^meurot2022] [^qin2026]
- [[semaglutide]] — Qin 2026 weight-loss-independent chondroprotection
- [[cellular-senescence]] — chondrocyte senescence as OA driver
- [[chronic-inflammation]] — local synovitis + systemic inflammaging substrate
- [[deregulated-nutrient-sensing]] — metabolic-syndrome OA subtype
- [[15-pgdh]] — gerozyme; rises in aged/injured cartilage; pharmacologically tractable DMOAD target
- [[sw033291]] — canonical 15-PGDH small-molecule inhibitor (research tool); Epirium Bio holds IP for an aging/muscle indication but no registered clinical trial as of 2026-05-23
- [[frameworks/cancer-aging-tradeoffs]] — 15-PGDH cancer-aging tradeoff (tumor suppressor in colon/lung vs gerozyme)
- Studies: [[studies/meurot-2022-liraglutide-oa]], [[studies/qin-2026-semaglutide-oa]], [[studies/singla-2025-15pgdh-cartilage-regeneration]]

## Open questions / gaps

- #gap/needs-human-replication — no DMOAD has reached FDA approval despite ~20 years of pipeline activity. Whether geroscience-rooted approaches (senolytics, senomorphics, GLP-1-RA chondroprotection) succeed where structural-modifier approaches have stalled is the foundational open question.
- #gap/needs-mechanism — relative weight of chondrocyte-intrinsic vs synovium-driven vs subchondral-bone-driven pathology in human OA remains contested; therapy targeting one tissue may be limited by upstream pathology in another.
- #gap/needs-human-replication — Qin 2026 GLP-1R-AMPK-PFKFB3 chondrocyte-metabolic-reprogramming mechanism has only one mouse-model report + one pilot RCT (ChiCTR2200066291) as of 2026-05-08; needs a powered Phase 2/3 RCT with structural and pain endpoints before this becomes clinical-decision-relevant.
- #gap/no-mechanism — synovitis-pain coupling (R²=0.91 in [^meurot2022] MIA mice) is observational; the molecular nociceptor pathway between synovial macrophage M1-state and DRG neuron sensitization is incompletely mapped.
- #gap/contradictory-evidence — systemic liraglutide failed in Gudbergsen 2021 [^gudbergsen2021] but Qin 2026 reports systemic semaglutide chondroprotection in mice. Resolution may rest on (a) species-specific PK reaching joint, (b) different pharmacology between liraglutide and semaglutide, (c) IA vs systemic delivery threshold.

## Footnotes

[^meurot2022]: [[studies/meurot-2022-liraglutide-oa]] · n=120 (short-term mouse) + n=49 (long-term mouse) + 6 human OA cartilage samples (IHC only) · in-vivo + in-vitro · multiple p<0.0001 · model: MIA-induced OA in C57Bl/6 mice + IL-1β-stimulated primary chondrocytes + LPS-stimulated RAW 264.7 macrophages · doi:10.1038/s41598-022-05323-7

[^qin2026]: [[studies/qin-2026-semaglutide-oa]] · in-vivo (mouse OA + obesity) + pilot RCT ChiCTR2200066291 · model: C57BL/6 obesity-OA mouse + small human pilot · doi:10.1016/j.cmet.2026.01.008 · pmid:41666927

[^berenbaum2013]: doi:10.1016/j.joca.2012.11.012 · review · Berenbaum F · *Osteoarthritis Cartilage* 2013;21:16–21 · "Osteoarthritis as an inflammatory disease (osteoarthritis is not osteoarthrosis!)" · cited in [^meurot2022] · primary source not yet retrieved for verification

[^robinson2016]: doi:10.1038/nrrheum.2016.136 · review · Robinson WH et al. · *Nat Rev Rheumatol* 2016;12:580–592 · "Low-grade inflammation as a key mediator of the pathogenesis of osteoarthritis" · cited in [^meurot2022]; primary source not yet retrieved for verification

[^gudbergsen2021]: doi:10.1093/ajcn/nqaa328 · rct · n=156 · Gudbergsen H et al. · *Am J Clin Nutr* 2021;113:314–323 · "Liraglutide after diet-induced weight loss for pain and weight control in knee osteoarthritis: a randomized controlled trial" · cited in [^meurot2022] (their reference 44) · primary source not yet retrieved; AI-extracted from Meurot 2022 narrative — verify before relying on n or effect size

[^senolytics-page]: see [[interventions/pharmacological/senolytics]] § UNITY-OA-101 row in clinical-trial table for the canonical citation chain · this is a wiki-internal cross-reference, not a primary-source footnote

[^singla2025]: [[studies/singla-2025-15pgdh-cartilage-regeneration]] · in-vivo (aged n=9/group + PTOA n=7/group C57BL/6 mice) + ex-vivo human OA cartilage explants (n=11 patients aged 55–75 for FACS characterization of CD200+ subset; n=5/group for GAG + stiffness PGDHi treatment readouts) · scRNA-seq + multiplexed IF · CatWalk pain p=0.010 (paw contact) / p=0.028 (mean intensity), vehicle vs PGDHi · model: aged and surgically-induced OA mouse + human explant treatment · Singla M, Wang YX,... Blau HM, Bhutani N (last/corresponding author) · *Science* 391(6789):1053–1062, in-print 2026-03-05 (online 2025-11-27) · doi:10.1126/science.adx6649 · PMID 41308124 · PMC13127300 · verified 2026-05-23 against PMC HTML
