---
type: metabolite
aliases: [Fe, ferrous iron, ferric iron, dietary iron, iron Fe]
pubchem-cid: 23925
hmdb-id: HMDB0000692
inchikey: XEEYBQQBJWHFJM-UHFFFAOYSA-N
molecular-formula: Fe
molecular-weight-da: 55.845
endogenous: true
hallmarks: ["[[mitochondrial-dysfunction]]", "[[genomic-instability]]", "[[chronic-inflammation]]"]
sens-categories: []
mechanisms: [fenton-reaction-ros, ferroptosis-induction, oxidative-lipid-damage]
homeostasis-proteins: ["[[hepcidin]]", "[[ferroportin]]", "[[ferritin]]", "[[transferrin]]"]
normal-range-serum-umol-l: "9–30 (men); 7–27 (women, premenopausal)"
accumulation-tissues: ["[[brain]]", "[[liver]]", "[[heart]]"]
literature-checked-through: 2026-06-03
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "Camaschella 2020 (hepcidin-ferroportin axis, iron cycle figures), Nemeth & Ganz 2021 (ferroportin structure/mechanism), Dixon 2012 (ferroptosis definition), and Zarulli 2018 PNAS reply (iron-longevity rebuttal) verified against full PDFs. Ward 2014 Lancet Neurol verified via PMC5672917 HTML — qualitative brain iron accumulation confirmed; specific 1–2 µg/g/decade rate is not stated in Ward 2014 (sourced from Hallgren & Sourander 1958 / Ramos 2014 cited therein) and attributed to alrouji2024 in body (closed OA, not re-read). Belaidi 2016 and Alrouji 2024 closed OA — not re-read. Sullivan 1981/1989 (pre-DOI) not accessible — per-cycle menstrual iron loss figure and original iron hypothesis claims unverified against primary text. Canonical-database identity fields (PubChem CID 23925, InChIKey, HMDB) confirmed against live PubChem API."
---

# Iron (Fe)

Iron is a redox-active transition metal and essential micronutrient — the most abundant trace element in the human body — required for oxygen transport (hemoglobin), electron transfer (cytochrome c, mitochondrial respiratory chain), and catalytic activity of hundreds of enzymes. The same redox reactivity that makes iron biologically indispensable renders it dangerous in excess: unbound ("labile") iron catalyzes the Fenton reaction, producing hydroxyl radicals that damage DNA, proteins, and lipids. With advancing age, iron accumulates in multiple tissues, and this accumulation is increasingly recognized as a driver and amplifier of several aging hallmarks. In premenopausal women, regular menstrual blood loss keeps body iron stores lower than in men of equivalent age; after [[phenotypes/menopause|menopause]], this protective difference disappears. This is the basis of the "iron hypothesis" for a component of the [[hypotheses/female-longevity-advantage|female longevity advantage]] — a contested but plausible partial mechanism.

## Identity

- **PubChem CID:** 23925
- **HMDB ID:** HMDB0000692 (elemental iron / iron ion entries)
- **InChIKey:** XEEYBQQBJWHFJM-UHFFFAOYSA-N
- **Molecular formula:** Fe
- **Molecular weight:** 55.845 Da
- **Oxidation states relevant to biology:** Fe²⁺ (ferrous; reduced; reactive Fenton substrate) and Fe³⁺ (ferric; oxidized; poor Fenton reactant, used in transferrin binding)

**Schema note:** Iron is an element, not a conventional small-molecule metabolite; PubChem CID 23925 covers elemental iron. Biological iron is always ionized or protein-bound; the HMDB entry captures serum/blood iron pools. This page covers the element's biology broadly.

## Iron homeostasis: the hepcidin-ferroportin axis

Systemic iron levels in the body are tightly regulated because there is no active excretion pathway for iron — body stores are controlled almost entirely through regulated absorption in the duodenum and recycling from senescent erythrocytes by splenic macrophages [^camaschella2020].

The master regulator is **hepcidin** (HAMP), a 25-amino-acid liver-derived peptide hormone. Hepcidin binds **ferroportin** (SLC40A1), the only known mammalian iron exporter, and triggers its internalization and degradation. When hepcidin rises (triggered by iron loading, inflammation via IL-6, or hemojuvelin signaling), ferroportin is destroyed on enterocytes, hepatocytes, and macrophages, blocking iron release into the bloodstream. When hepcidin falls (iron deficiency, hypoxia, erythropoietic demand), ferroportin remains at the surface and iron flows into the blood [^nemeth2021] [^galymuckenthaler2023].

| Compartment | Key protein | Form of iron | Regulation |
|---|---|---|---|
| Blood (transport) | Transferrin (TF) | Fe³⁺ | TF binding sites normally 20–45% occupied (average ~30% in healthy adults) [^nemeth2021] |
| Cells (storage) | Ferritin (FTH1 / FTL) | Fe³⁺ (ferrihydrite core) | IRE/IRP post-transcriptional system |
| Mitochondria | Frataxin, mitoferrin | Fe²⁺ (labile) | Dedicated import; local redox buffering |
| Cytoplasm (labile) | Chelatable Fe²⁺ | Fe²⁺ | Redox-reactive; kept minimal |
| Lysosomes | NCOA4 (ferritinophagy) | Fe³⁺→Fe²⁺ | Selective autophagy releases stored iron |

**Iron recycling dominates over absorption.** The adult human recycles ~20–25 mg of iron per day from senescent erythrocytes (phagocytosed by reticuloendothelial macrophages), whereas dietary absorption accounts for only ~1–2 mg/day [^camaschella2020]. This means even modest inflammation-driven hepcidin elevation can rapidly divert iron into macrophage stores (functional iron deficiency) without changing total body iron.

## Why iron accumulates with age

Despite its tight regulation, iron accumulates progressively in multiple tissues with age, for several convergent reasons:

1. **Impaired ferritinophagy.** The selective autophagy receptor NCOA4 targets ferritin for lysosomal degradation (ferritinophagy), releasing iron for reutilization or export. With age, autophagic flux declines (see [[processes/autophagy]]), reducing NCOA4-mediated iron recycling. Ferritin may accumulate in cells while iron remains sequestered.

2. **Chronic inflammation elevates hepcidin.** Inflammaging (low-grade chronic inflammation; see [[hallmarks/chronic-inflammation]]) drives sustained IL-6 production, which stimulates hepatic hepcidin synthesis. Elevated hepcidin locks iron in macrophages and limits export, contributing to both the anemia of aging in the blood and tissue iron deposition.

3. **Mitochondrial dysfunction releases labile iron.** Aged mitochondria produce more superoxide and have compromised electron transport chain integrity (see [[hallmarks/mitochondrial-dysfunction]]). Damaged mitochondria release Fe²⁺ from iron-sulfur clusters. This cytosolic labile iron pool is available for Fenton-reaction catalysis.

4. **Declining antioxidant defenses.** With age, glutathione peroxidase 4 (GPX4) activity, ferrostatin-sensitive lipid repair, and catalase capacity decline, reducing the cell's ability to detoxify iron-catalyzed lipid peroxides.

5. **Brain-specific accumulation.** In the brain, microglia and oligodendrocytes have limited iron export capacity. Iron deposited as neuromelanin and hemosiderin accumulates in the substantia nigra, globus pallidus, and putamen across the lifespan [^ward2014].

## Fenton chemistry: the mechanistic bridge to hallmarks

Ferrous iron (Fe²⁺) reacts with hydrogen peroxide to generate hydroxyl radical (OH•) — the Fenton reaction — which is among the most reactive oxygen species known:

> Fe²⁺ + H₂O₂ → Fe³⁺ + OH• + OH⁻

Hydroxyl radicals damage:
- **DNA:** strand breaks, 8-oxoguanine, and abasic sites → contributes to [[hallmarks/genomic-instability]]
- **Lipids:** initiation of lipid peroxidation chain reactions (4-HNE, malondialdehyde, phospholipid peroxides) → contributes to [[hallmarks/mitochondrial-dysfunction]] and [[processes/ferroptosis]] (see below)
- **Proteins:** carbonylation, cross-linking → contributes to [[hallmarks/loss-of-proteostasis]]

The Fenton reaction is also catalyzed in the Haber-Weiss cycle (Fe³⁺ re-reduced by superoxide, regenerating Fe²⁺), making it autocatalytic in the presence of ongoing mitochondrial superoxide leak.

## Iron and ferroptosis

**Ferroptosis** is an iron-dependent, non-apoptotic, regulated form of cell death driven by unrestricted phospholipid peroxidation [^dixon2012]. The defining features are:

- Iron-dependent lipid peroxidation (blocked by chelation with deferoxamine) [^dixon2012]
- GPX4-catalyzed suppression (cell death triggered when GPX4 is inhibited or glutathione is depleted) — GPX4 as the key suppressor was established in subsequent work (Yang et al. 2014 *Cell*; Conrad et al. 2018 *Nat Cell Biol*)
- Accumulation of phosphatidylethanolamine-containing oxidized lipids — PE-specificity established by Kagan et al. 2017 (*Nat Chem*), not in Dixon 2012

Iron accumulation in aged cells raises the labile iron pool available for ferroptotic lipid peroxidation. Ferroptotic cell death has been implicated in age-related macular degeneration, neurodegeneration, and cardiac aging. Critically, aged cells with higher baseline lipid peroxidation may be closer to the ferroptotic threshold even at baseline iron loads that younger cells tolerate. See [[processes/ferroptosis]] (stub — needs seeding) for the full mechanism page.

## Brain iron accumulation and neurodegeneration

The aging brain undergoes progressive regional iron accumulation — measurable non-invasively with quantitative susceptibility mapping (QSM) MRI [^ward2014]. Iron deposits accumulate preferentially in:

- **Substantia nigra** (Parkinson's disease-relevant)
- **Hippocampus and temporal cortex** (Alzheimer's disease-relevant)
- **Globus pallidus and striatum**

The iron in neurodegeneration is not random — it co-localizes with amyloid-β plaques (Alzheimer's) and Lewy bodies (Parkinson's), where it potentiates aggregation and radical generation [^belaidi2016]. Whether iron accumulation is a cause or consequence of neurodegeneration remains contested (#gap/contradictory-evidence), though animal and autopsy data favor a causal contribution:

- **Alzheimer's:** Aβ and tau interact with iron; iron promotes Aβ aggregation and tau phosphorylation; iron chelation reduced Aβ load in mouse models.
- **Parkinson's:** Neuromelanin in substantia nigra dopaminergic neurons sequesters iron; neuronal death releases iron, which propagates oxidative damage.
- **General aging:** Regional brain iron rises ~1–2 µg/g/decade in basal ganglia across the lifespan even without neurodegeneration [^alrouji2024]. (Ward 2014 [^ward2014] describes this increase as "linear" but does not state a specific µg/g/decade rate; the quantitative figure derives from postmortem spectrometry data — Hallgren & Sourander 1958; Ramos et al. 2014 — summarized in [^alrouji2024].) #gap/needs-replication (postmortem-derived; longitudinal QSM data sparse)

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes (QSM/MRI data) |
| Replicated in humans? | yes (observational; causal MR partial) |

## The iron hypothesis for female longevity advantage

**The core claim:** Premenopausal women lose ~15–30 mg iron per menstrual cycle #gap/unsourced (per-cycle figure not verified against Sullivan 1981/1989 — no fulltext access; commonly cited range in secondary literature), maintaining serum ferritin levels roughly half those of age-matched men. Lower total body iron → lower Fenton-reaction oxidative burden → lower lipid peroxidation → lower cardiovascular disease risk and possibly longer lifespan.

**Origin:** Sullivan 1981 (*Lancet*) first formally proposed that the sex difference in ischemic heart disease incidence — which tracks menstrual status more closely than estrogen per se — might be explained by iron-mediated oxidative damage [^sullivan1981]. He elaborated this in a comprehensive review in 1989 [^sullivan1989]. A supportive observation is that male blood donors (who lose iron regularly) appear to have lower cardiovascular event rates in some cohort analyses (though confounded by the healthy-donor effect).

**Post-menopausal convergence:** After menopause, women's serum ferritin rises toward male-equivalent levels over ~5 years. Female cardiovascular disease risk also rises toward male rates in the post-menopausal window, consistent with the iron hypothesis. However, the convergence is incomplete and is also consistent with estrogen withdrawal (see [[hypotheses/female-longevity-advantage]] § estrogen-protection section).

**The other side of the ledger — iron deficiency is a women's-health harm, not just a longevity benefit.** The same menstrual iron loss that *may* lower lifetime Fenton-reaction burden also makes iron deficiency the world's most common nutritional deficiency, overwhelmingly affecting premenopausal women. Iron deficiency *without* anemia (low [[ferritin]], normal hemoglobin) is a large, underrecognized entity that imposes real healthspan costs — fatigue, impaired attention/processing speed, and restless-legs syndrome — that respond to iron repletion independent of hemoglobin. So a low-iron state is genuinely double-edged: plausibly cardio-protective at the population level, yet a frequent cause of symptomatic morbidity in individual menstruating women. The serum-ferritin biomarker, its disputed iron-deficiency thresholds (modern argument for <25–30 ng/mL vs the legacy <12–15), and the dual reading of the post-menopausal ferritin rise are covered in depth on **[[ferritin]]**.

### Caveats and contested status

The iron hypothesis is **plausible but not established**. The critical evidence against it as a primary longevity driver:

1. **Zarulli et al. 2018 rebuttal.** The PNAS reply by Zarulli, Christensen, and Vaupel to a Delanghe commentary [^zarulli2018reply] concluded that iron status does not likely explain the female survival advantage under extreme mortality conditions (famine, epidemic). Zarulli et al.'s core argument is that **the largest sex-survival difference is observed in infancy** — an age when there is no differential iron storage between males and females in contemporary populations. They additionally note that the male–female mortality difference after age 50 (post-menopause) did not decrease in their analysis of historical famine/epidemic data — the opposite of what the iron hypothesis would predict. This is strong evidence against iron being a *primary* driver of the overall longevity gap.

2. **The gap exists before and after the iron-loading window.** Female infants show survival advantages before menstruation begins; very elderly women show advantages long after menstrual iron loss has ceased. Neither window is explained by differential iron exposure.

3. **Behavioral/occupational confounders.** Cross-cohort studies of blood donation as an iron-depletion proxy are systematically confounded by the healthy-donor effect. Randomized iron-depletion interventions for cardiovascular outcomes in older adults have not been conducted at scale.

4. **Hemochromatosis paradox.** Men with hereditary hemochromatosis (HFE mutations, sustained iron overload) do not have shorter lifespans than the general male population in adequately treated cohorts — though untreated hemochromatosis causes liver cirrhosis and cardiomyopathy, consistent with the toxicity hypothesis.

**Honest framing:** Iron loss through menstruation is a plausible *partial* contributor to the cardiovascular component of the female longevity advantage, particularly in the 40–65 age window. It is unlikely to be a primary or sufficient explanation for the full longevity gap. The field lacks a large randomized trial of therapeutic phlebotomy or iron chelation for longevity outcomes in postmenopausal women. #gap/needs-human-replication #gap/no-mechanism (causal MR evidence linking genetically-predicted lower iron stores to reduced mortality in women is limited)

## Iron and aging hallmarks: summary

| Hallmark | Mechanistic link | Evidence strength |
|---|---|---|
| [[hallmarks/mitochondrial-dysfunction]] | Fe²⁺ damages mtDNA + ETC complexes via Fenton; ferroptosis primarily executes at IMM | strong (mechanistic); partial (causal in humans) |
| [[hallmarks/genomic-instability]] | Hydroxyl radicals from Fenton reaction cause 8-oxoG, DSBs | strong (mechanistic); partial (causal) |
| [[hallmarks/chronic-inflammation]] | Iron overload activates NF-κB; hemosiderin in macrophages promotes NLRP3; SASP amplifies hepcidin→iron sequestration loop | moderate (mechanistic); partial (causal) |
| [[hallmarks/loss-of-proteostasis]] | Protein carbonylation from ROS; ferritin aggregation with impaired ferritinophagy | moderate (mechanistic) |
| [[hallmarks/cellular-senescence]] | Ferroptosis and senescence share partial overlap: senescent cells have higher ROS and labile iron; senescent cells upstream of ferroptotic threshold | emerging (limited) |

## Iron in the SENS framework

Iron accumulation is not a primary SENS damage category. It is best understood as an **amplifier**: excess iron converts background mitochondrial ROS into the high-reactivity hydroxyl radical, accelerating all oxidative damage categories that SENS targets (mitochondrial mutations, intracellular junk, crosslinks). The closest SENS concept is [[frameworks/apoptosenes]] (waste-product-induced cell death → ferroptosis when iron is the driver).

## Interventions (aging context)

No compound or intervention has been evaluated in a powered human aging trial specifically targeting iron-driven hallmarks. Mechanistically relevant approaches include:

- **Phlebotomy / blood donation:** reduces total body iron; not tested in longevity RCT; confounded by healthy-donor effect
- **Iron chelation (deferoxamine, deferasirox, deferiprone):** used clinically for iron-overload disorders (hemochromatosis, transfusion-dependent anemia); reduces Fenton-reaction oxidative burden in model organisms; no aging-indication RCT. Note: the SKY and EMBARK Phase II trials (Pineda-Pardo et al. 2025; PMID 39973479) tested deferiprone in early Parkinson's disease — deferiprone did not improve motor outcomes when combined with L-dopa, and worsened symptoms when given alone; no support for iron chelation as a disease-modifying strategy in PD at current evidence level #gap/needs-replication
- **Dietary low-heme iron:** plant-based diets, lower red meat → modestly lower serum ferritin; observational data only
- **GPX4 induction / ferroptosis suppression:** liproxstatin-1, ferrostatin-1 (preclinical only — no human aging trial)

#gap/long-term-unknown — No powered human trial has tested iron depletion as an aging intervention. The intervention matrix for iron targets is preclinical.

## Limitations and gaps

- #gap/needs-human-replication — The iron hypothesis for female longevity advantage lacks MR evidence and no phlebotomy-for-longevity RCT has been conducted.
- #gap/contradictory-evidence — Iron's role in neurodegeneration is both causal (Fenton mechanism; chelation rescue in mice) and possibly reactive (iron released as consequence of neuronal death, not cause).
- #gap/needs-replication — Brain iron accumulation rate data are primarily cross-sectional; longitudinal QSM aging studies are sparse.
- #gap/stub — [[processes/ferroptosis]] does not yet exist as a full atomic page; ferroptosis-in-aging mechanism detail lives as a stub here until that page is seeded.
- #gap/dose-response-unclear — The threshold of iron accumulation that tips a tissue from homeostatic to pathological is not established for any aging context.
- #gap/no-mechanism — Causal MR evidence for genetically-determined lower serum iron → reduced all-cause mortality (vs iron deficiency increasing mortality) is inconsistent; no clean instrument separates "low iron = less Fenton damage" from "low iron = anemia = worse outcome."

---

## Footnotes

[^camaschella2020]: doi:10.3324/haematol.2019.232124 · Camaschella C, Nai A, Silvestri L · "Iron metabolism and iron disorders revisited in the hepcidin era" · *Haematologica* 105(2):260–272 · 2020 · review · 639 citations; FWCI 58.8 (citation_percentile 100) · gold OA · covers hepcidin-ferroportin axis, IRE/IRP system, absorption physiology, and pathological states; confirmed: 1–2 mg/day dietary absorption, 20–25 mg/day recycling from macrophages, 25-amino-acid hepcidin, NCOA4/ferritinophagy; PDF verified

[^nemeth2021]: doi:10.3390/ijms22126493 · Nemeth E, Ganz T · "Hepcidin-Ferroportin Interaction Controls Systemic Iron Homeostasis" · *Int J Mol Sci* 22(12):6493 · 2021 · review · 465 citations; FWCI 57.0 (citation_percentile 100) · gold OA; covers molecular mechanism of hepcidin binding and ferroportin degradation; confirmed: two mechanisms (occlusion + endocytosis/degradation), TF binding sites 20–45% occupied, total body iron ~3–4 g, daily losses 1–2 mg · PDF verified

[^galymuckenthaler2023]: doi:10.1038/s41580-023-00648-1 · Galy B, Conrad M, Muckenthaler M · "Mechanisms controlling cellular and systemic iron homeostasis" · *Nat Rev Mol Cell Biol* 24:287–308 · 2023 · review · 564 citations; FWCI 220.0 (citation_percentile 100) · closed OA; covers IRE/IRP post-transcriptional regulation, ferritinophagy via NCOA4, mitochondrial iron, and aging context · no local PDF

[^ward2014]: doi:10.1016/s1474-4422(14)70117-6 · Ward RJ, Zucca FA, Duyn JH, Crichton RR, Zecca L · "The role of iron in brain ageing and neurodegenerative disorders" · *Lancet Neurol* 13(10):1045–1060 · 2014 · review · 1739 citations; FWCI 44.9 (citation_percentile 100) · green OA · covers age-related brain iron accumulation, neuromelanin, and neurodegenerative disease association · no local PDF (green OA via DOI)

[^belaidi2016]: doi:10.1111/jnc.13425 · Belaidi AA, Bush AI · "Iron neurochemistry in Alzheimer's disease and Parkinson's disease: targets for therapeutics" · *J Neurochem* 139 Suppl 1:179–197 · 2015 · review · 565 citations; FWCI 25.4 (citation_percentile 100) · closed OA · covers iron-Aβ interaction, tau-iron chemistry, and chelation as therapeutic strategy · no local PDF

[^alrouji2024]: doi:10.1016/j.arr.2024.102575 · Alrouji M, Anwar S, Venkatesan K, et al. · "Iron homeostasis and neurodegeneration in the ageing brain: Insight into ferroptosis pathways" · *Ageing Res Rev* 102:102575 · 2024 · review · 24 citations; FWCI 20.7 (citation_percentile 100) · closed OA · covers region-specific brain iron accumulation rates with age and ferroptosis pathway overlap · no local PDF

[^dixon2012]: doi:10.1016/j.cell.2012.03.042 · Dixon SJ, Lemberg KM, Lamprecht MR, et al. · "Ferroptosis: An Iron-Dependent Form of Nonapoptotic Cell Death" · *Cell* 149(5):1060–1072 · 2012 · research article (in vitro) · 16,751 citations; FWCI 52.3 (citation_percentile 100) · seminal paper defining ferroptosis; iron chelation with deferoxamine blocks the cell death, establishing Fe²⁺ requirement; ferrostatin-1 identified as inhibitor (EC₆₀ = 60 nM in HT-1080 cells); GPX4 as target and PE-specificity of oxidized lipids were established in subsequent work not in this paper · PDF verified

[^sullivan1981]: PMID: 6112609 · Sullivan JL · "Iron and the sex difference in heart disease risk" · *Lancet* 1(8233):1293–1294 · 1981 · letter/hypothesis · the original proposal that menstrual iron loss, not estrogen, explains premenopausal female cardiovascular protection; DOI not indexed in Crossref (pre-DOI era journal record) · #gap/no-fulltext-access (older Lancet letter; verify before citing quantitative claims)

[^sullivan1989]: PMID: 2653014 · Sullivan JL · "The iron paradigm of ischemic heart disease" · *Am Heart J* 117(5):1177–1188 · 1989 · review/hypothesis · comprehensive elaboration of the iron hypothesis including the menstruation-iron-loss mechanism, male donor data, and epidemiological support; DOI not indexed in Crossref · #gap/no-fulltext-access

[^zarulli2018reply]: doi:10.1073/pnas.1801481115 · Zarulli V, Christensen K, Vaupel JW · "Reply to Delanghe et al.: Iron status is not likely to play a key role in the gender survival gap under extreme conditions" · *PNAS* 115(18):E4150 · 2018 · correspondence · the Zarulli group rejects iron as a primary driver of the female extreme-mortality survival advantage; core argument: (1) the largest sex-survival difference is observed in infancy (before menstruation; no differential iron stores at that age); (2) the male–female mortality difference after age 50 (post-menopause, when iron stores converge) did not decrease in the historical famine/epidemic data · green OA · PDF verified
