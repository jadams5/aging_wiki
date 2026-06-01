---
type: cell-type
aliases: [cardiac fibroblast, CF, cardiac mesenchymal cell]
cell-ontology-id: CL:0002548
tissue-of-origin: ["[[myocardium]]", "[[heart]]"]
key-markers-mouse: [Pdgfra+, Tcf21+, DDR2+, Vimentin+]
key-markers-human: [PDGFRA+, TCF21+, COL1A1+, FAP+]
lineage-output: [myofibroblasts (activated)]
self-renewal: limited
aging-relevant: yes
affected-hallmarks: ["[[cellular-senescence]]", "[[chronic-inflammation]]"]
key-aging-phenotypes: ["[[cardiac-fibrosis]]", "[[heart-failure]]"]
typical-niche: "cardiac interstitium between cardiomyocytes; estimated ~2× cardiomyocyte number in adult heart (debated — see Pinto 2016)"
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Acharya 2012-derived claims verified against primary source PDF (downloaded 2026-05-05); Pinto 2016 and Tallquist 2017 PDF downloads failed (green OA but no fetchable URL in archive) — claims attributed to those sources remain unverified against full text; Anderson 2019 and Lewis-McDougall 2019 trusted as previously verified on [[cardiomyocytes]]; CL:0002548 identity confirmed against OLS4"
---

> Partial verification 2026-05-04 (claude): Acharya 2012 verified against PDF. Pinto 2016 and Tallquist 2017 PDFs failed to download from archive despite green OA status — claims attributed to those two sources are unverified against full text. Anderson 2019 and Lewis-McDougall 2019 trusted as previously verified on [[cardiomyocytes]]. See `verified-scope` in frontmatter. #gap/no-fulltext-access (Pinto 2016, Tallquist 2017)

# Cardiac Fibroblasts

Cardiac fibroblasts (CFs) are mesenchymal cells that reside in the interstitium of the [[myocardium]], sandwiched between cardiomyocytes. They are the **most numerous non-myocyte cell type in the adult heart** — often cited as roughly twice as numerous as [[cardiomyocytes]], though this estimate is disputed by stereological reappraisals [^pinto2016]. Their core functions are ECM homeostasis, structural support for cardiomyocytes, and wound-healing via activation to contractile myofibroblasts. In aging, CFs become a key driver of **[[cardiac-fibrosis]]** — the irreversible stiffening of the myocardium that underlies age-related [[heart-failure]] — through paracrine cross-talk with senescent cardiomyocytes and through their own acquired senescent phenotype.

---

## Identity

| Field | Value |
|---|---|
| Cell type | Resident mesenchymal cell of the cardiac interstitium |
| Proliferative capacity | Limited self-renewal via cardiac mesenchymal progenitors; quiescent at baseline; robustly proliferates upon injury |
| Estimated fraction of heart cells | ~50–60% of total cardiac cell number in rodents (Pinto 2016 stereology disputed earlier estimates); debated in human |
| Typical morphology | Elongated, spindle-shaped; lack sarcomeres; communicate via gap junctions and paracrine mediators |

### Markers

Most cardiac fibroblast markers also label other mesenchymal populations; reliable identification requires combinatorial gating:

| Marker | Species | Specificity notes |
|---|---|---|
| PDGFRA | Both | Best single positive marker; labels resting resident CFs |
| TCF21 | Both | Transcription factor; marks Tcf21+ epicardium-derived CF lineage; nuclear; used in genetic lineage tracing [^acharya2012] |
| DDR2 (discoidin domain receptor 2) | Mouse (primary) | Collagen receptor; historically used as CF marker; variable specificity — also expressed in other stromal cells [^tallquist2017] |
| Vimentin | Both | Broad intermediate-filament mesenchymal marker; not CF-specific |
| COL1A1 | Human | Collagen I alpha-1; highly expressed in CFs; reflects core ECM-secreting function |
| FAP (fibroblast activation protein) | Human (activated) | Marks activated/myofibroblast state; used in imaging studies |

**Activated myofibroblast markers** (acquired upon injury or paracrine activation):
- α-SMA (ACTA2)+ — canonical myofibroblast marker
- Periostin (POSTN)+
- FAP+

> Note: No single marker is definitively CF-specific. The field has moved toward **PDGFRA+ TCF21+ dual gating** as the most reliable approach for resident resting CFs [^tallquist2017].

---

## Developmental origin

The cardiac fibroblast population is primarily derived from the **epicardium** during embryogenesis. The Tcf21+ subpopulation arises through epicardial epithelial-to-mesenchymal transition (EMT) from Tcf21-expressing epicardial progenitor cells [^acharya2012]. Tcf21-lineage cells are restricted to the cardiac fibroblast lineage (excluded from VSMC, cardiomyocyte, and endothelial populations at E14.5 and later), though whether they constitute the numerical majority of all adult resident CFs is not directly quantified in the paper. A secondary, minor contribution comes from endothelial cells via endothelial-mesenchymal transition (EndMT) during heart development; the quantitative significance of this route in the adult heart is debated. Neural crest cells contribute CFs primarily to the cardiac outflow tract [^tallquist2017].

| Dimension | Status |
|---|---|
| Epicardial origin conserved in humans? | yes — Tcf21/TCF21 epicardial lineage is conserved |
| EndMT contribution quantified in humans? | unknown #gap/needs-human-replication |
| Replicated in humans? | yes (lineage-marker immunostaining; no direct fate-mapping equivalent to genetic Cre-tracing in mice) |

---

## Core functions

### ECM maintenance

CFs are the primary producers and organizers of the myocardial extracellular matrix. They constitutively secrete collagen types I and III (forming the fibrillar scaffold), collagen type IV (basement membrane), fibronectin, laminin, and proteoglycans. This matrix provides mechanical support for cardiomyocytes and transmits contractile forces [^tallquist2017].

Matrix metalloproteinases (MMPs) and their inhibitors (TIMPs), secreted by CFs, regulate ECM turnover under homeostatic conditions. A shift toward excessive TIMP activity and reduced MMP activity in aging and disease leads to net collagen accumulation — the biochemical basis of fibrosis.

### Paracrine signaling to cardiomyocytes

CFs secrete a variety of pro-survival and pro-hypertrophic factors that act on adjacent cardiomyocytes. This bidirectional paracrine axis is critical for normal cardiomyocyte function — but it also mediates the pathological fibrotic program in aging (see below). Key paracrine mediators include IGF-1, FGF-2, and TGF-β family members [^tallquist2017]. #gap/unsourced for specific CF-derived IGF-1 and FGF-2 quantification in vivo.

### Mechanical coupling

CFs can form gap junctions with cardiomyocytes via Connexin-43 and Connexin-45, though the extent and functional significance of cardiomyocyte–fibroblast electrical coupling in the intact adult heart remains **contested** [^tallquist2017]. #gap/contradictory-evidence — some studies show fibroblast-driven arrhythmias via electrotonic coupling; others dispute the functional significance of in vivo gap junctions between these cell types.

### Wound healing and scar formation

Following myocardial injury (infarction, pressure overload, or inflammation), quiescent CFs **activate** to α-SMA+ myofibroblasts, which:
1. Proliferate and migrate to the injury site
2. Secrete large amounts of collagen I/III
3. Contract the nascent scar via actin-myosin machinery
4. Contribute to maturation and stabilization of the infarct scar

This reparative program is essential for mechanical integrity after acute injury; its chronic, low-level activation in aging is pathological.

---

## Aging context

### Cardiomyocyte senescence drives CF activation via non-canonical SASP

The clearest mechanistic link between cardiac aging and CF-mediated fibrosis comes from Anderson et al. 2019 [^anderson2019], which showed that **senescent cardiomyocytes** secrete a **non-canonical pro-fibrotic SASP** consisting specifically of TGFβ2, GDF15, and EDN3 (endothelin-3). Importantly, classical inflammatory SASP components (IL-6, IL-1β, CXCL1) were **not** upregulated in purified aged cardiomyocyte fractions — the inflammatory components detected in whole-heart aging studies likely originate from non-cardiomyocyte cardiac cells.

This CM-derived SASP activates cardiac fibroblasts, promoting myofibroblast conversion and ECM deposition — a paracrine driver of age-related fibrosis that originates upstream in the cardiomyocyte senescence program:

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — TGFβ2/GDF15/EDN3 are expressed in human heart; purified human CM senescence profiling not done |
| Phenotype conserved in humans? | yes — cardiac fibrosis increases with age in humans |
| Replicated in humans? | no #gap/needs-human-replication |

### Senescent cardiac progenitor cells drive CF fibrotic SASP (canonical inflammatory)

Lewis-McDougall et al. 2019 showed that **cardiac progenitor cells (CPCs)** become senescent in aged human donors: >50% of CPCs from subjects >70 years old were p16INK4A+/SA-β-gal+ (compared to ~22% in the 50–59-year age group), drawn from a cohort of n=35 cardiac surgery patients aged 32–86 [^lewis2019]. The SASP from these senescent CPCs includes a **canonical inflammatory profile** — PAI-1, IL-8, IL-6, IL-1β, IGFBP-3, MMP-3, and GM-CSF — which is distinct from the non-canonical CM SASP above. This senescent-CPC SASP paracrinally activates cardiac fibroblasts toward the fibrotic program and also renders otherwise-healthy cycling CPCs senescent in conditioned-medium experiments.

> This creates a self-amplifying paracrine loop: senescent CMCs and CPCs each independently drive CF activation via different SASP compositions.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — human CPCs directly studied |
| Phenotype conserved in humans? | yes — CPC senescence burden increases with donor age |
| Replicated in humans? | in-progress — based on a single center cohort; mechanistic SASP → CF data from in vitro conditioned medium experiments; in vivo human CF activation not directly measured #gap/needs-replication |

### Cardiac fibroblast senescence

Cardiac fibroblasts themselves can also acquire senescent phenotypes with aging, contributing to ECM dysfunction via a fibroblast-intrinsic SASP. However, the primary evidence in the two verified studies (Anderson 2019 and Lewis-McDougall 2019) attributes the paracrine fibrotic drive to senescent cardiomyocytes and CPCs respectively — direct quantification of senescent CFs in aged human myocardium and their intrinsic SASP profile is an open area. #gap/needs-replication #gap/unsourced

### Hallmark connections

| Hallmark | Mechanism in cardiac fibroblasts |
|---|---|
| [[cellular-senescence]] | CFs are both targets of senescent-cell paracrine activation (from CMs and CPCs) and potentially senescent themselves in aged hearts |
| [[chronic-inflammation]] | Senescent-CPC SASP (IL-6, IL-8, IL-1β) activates CFs and feeds systemic inflammaging loop |
| [[loss-of-proteostasis]] | Activated myofibroblasts overproduce crosslinked collagen, which is resistant to MMP-mediated proteolysis — a form of ECM proteostasis failure |
| [[stem-cell-exhaustion]] | Exhaustion and senescence of CPCs removes a trophic/regulatory influence on the CF population, permitting unchecked fibrotic activation |

---

## Cell number debate

The claim that cardiac fibroblasts outnumber cardiomyocytes has been a long-standing teaching point. Pinto et al. 2016 reanalyzed cardiac cell composition using quantitative stereology and flow cytometry in adult mouse hearts, finding that **non-myocytes collectively constitute ~70% of cardiac cell number** but emphasizing that **CFs are not the majority of non-myocytes** — endothelial cells predominate [^pinto2016]. The precise CF-to-CM ratio is context-dependent (species, cardiac region, methodological approach) and should not be stated as a fixed number.

| Dimension | Status |
|---|---|
| Quantitative cell-number ratio confirmed in humans? | no #gap/needs-human-replication — stereological methods in human heart are challenging; single-nucleus RNA-seq atlas data provides relative proportions but not absolute counts |

---

## Therapeutic angles

### Senolytic clearance to reduce fibrosis

Anderson 2019 demonstrated that clearing senescent cardiomyocytes (via navitoclax or genetic INK-ATTAC ablation) reduced cardiac hypertrophy and fibrosis in aged mice, implicating the CM-to-CF paracrine axis as druggable [^anderson2019]. Importantly, navitoclax did **not** improve ejection fraction or left ventricular mass index in that study — an effect on fibrosis without functional cardiac improvement. Lewis-McDougall 2019 showed that senolytic clearance of senescent CPCs (via D+Q or AP20187) reduced LV fibrosis (p<0.05) and increased the number of small Ki67+/EdU+ cardiomyocytes in aged mice, consistent with partial regenerative recovery [^lewis2019].

No completed human clinical trial has specifically targeted cardiac senescent cells with senolytics as of 2026-05-04. #gap/needs-human-replication

### Anti-fibrotic pharmacology

- **Pirfenidone** — TGF-β pathway inhibitor; FDA-approved for idiopathic pulmonary fibrosis; under investigation in cardiac fibrosis contexts (PIROUETTE trial — cardiac HFpEF). #gap/long-term-unknown for cardiac outcomes.
- **SGLT2 inhibitors** (empagliflozin, dapagliflozin) — emerging evidence for anti-fibrotic effects in the heart; mechanism not fully established (proposed: NHE1 inhibition → cardiomyocyte Ca²⁺ handling → reduced fibroblast activation; and/or metabolic shift). #gap/no-mechanism
- **TGF-β pathway inhibitors** — many preclinical candidates; fibrosis reduction in rodent models; human translation limited by systemic effects of TGF-β suppression. #gap/needs-human-replication

---

## Limitations and gaps

| Gap | Tag | Notes |
|---|---|---|
| CF senescence intrinsic characterization | #gap/needs-replication | Lewis-McDougall 2019 addresses CPC senescence; primary evidence for CF-intrinsic senescent phenotype in aged human heart is lacking |
| Non-canonical CM SASP in human cardiac tissue | #gap/needs-human-replication | Anderson 2019 established TGFβ2/GDF15/EDN3 in purified mouse CMs; human equivalents not profiled |
| CF-to-CM ratio in human heart | #gap/needs-human-replication | Stereological methods in human are limited; absolute CF counts in aged vs young human heart not robustly established |
| Fibroblast-cardiomyocyte gap junction function in vivo | #gap/contradictory-evidence | Electrotonic coupling evidence is contested across model systems |
| Myofibroblast reversibility | #gap/no-mechanism | Whether activated myofibroblasts can revert to quiescent CFs in the adult human heart under therapeutic conditions is unknown |
| Senolytic anti-fibrotic translation to humans | #gap/needs-human-replication | Navitoclax and D+Q data are mouse-only; no completed human cardiac senolytic trial |
| SGLT2i anti-fibrotic mechanism | #gap/no-mechanism | Multiple competing hypotheses; no single mechanism validated in clinical tissue |

---

## Cross-references

- [[cardiomyocytes]] — primary upstream source of non-canonical pro-fibrotic SASP (TGFβ2/GDF15/EDN3) that activates cardiac fibroblasts; senescence driven by oxidative telomere damage
- [[cardiac-fibrosis]] — principal downstream pathological outcome of CF activation in aging
- [[heart-failure]] — functional consequence of cardiac fibrosis and myocardial stiffening
- [[myocardium]] — tissue niche; cardiac fibroblasts are the most numerous stromal cell type here
- [[cellular-senescence]] — upstream driver (in CMs and CPCs) and potentially intrinsic process in aged CFs
- [[chronic-inflammation]] — senescent-CPC SASP feeds inflammatory loop that activates CFs
- [[heart]] — organ-level context (implicit stub)
- [[interventions/pharmacological/senolytics]] — navitoclax and D+Q tested in aged mouse hearts; no completed human cardiac trial
- [[tgf-beta]] — core paracrine signal from senescent CMs activating CFs (implicit stub)

---

## Footnotes

[^acharya2012]: doi:10.1242/dev.079970 · Acharya A, Baek ST, Huang G et al. · 2012 · Development 139(12):2139–2149 · in-vivo · model: Tcf21^iCre (tamoxifen-inducible Cre knocked into the Tcf21 locus) + R26R^YFP/R26R^tdT reporter lineage tracing in mixed C57BL6/129SV mice · 484 citations · 100th citation percentile · establishes that Tcf21-expressing epicardial progenitors are restricted to the cardiac fibroblast lineage (not VSMC/CM/EC) at E14.5 and later; Tcf21 is required for epicardial EMT of CF progenitors; Tcf21-lineage cells constituted ~6% of total cardiac single-cell suspension at E18.5 and were enriched for CF marker genes (Col1a1, Col3a1, Col6a1, Postn, Pdgfra); archive:  (local PDF)

[^pinto2016]: doi:10.1161/CIRCRESAHA.115.307778 · Pinto AR, Ilinykh A, Ivey MJ et al. · 2016 · Circulation Research 118(3):400–409 · in-vivo · model: adult mouse heart (multiple genetic lineage reporters + flow cytometry + stereology) · 1,360 citations · 100th citation percentile · quantitative reappraisal of cardiac cell composition showing endothelial cells are more numerous than CFs; disputes earlier "2:1 CF-to-CM" claim; archive: download failed (green OA listed but no fetchable URL resolved) — quantitative claims unverified against full PDF #gap/no-fulltext-access

[^tallquist2017]: doi:10.1038/nrcardio.2017.57 · Tallquist MD, Molkentin JD · 2017 · Nature Reviews Cardiology 14(8):503–516 · review · model: mouse + human cardiac fibroblast literature · 540 citations · 100th citation percentile · authoritative review redefining CF identity, lineage, markers, and activation states; basis for PDGFRA+/TCF21+ combinatorial gating recommendation; archive: download failed (green OA listed but no fetchable URL resolved) — marker specificity and paracrine-factor claims unverified against full text #gap/no-fulltext-access

[^anderson2019]: doi:10.15252/embj.2018100492 · Anderson R, Lagnado A, Maggiorani D et al. · 2019 · The EMBO Journal 38(5):e100492 · in-vivo + in-vitro · model: mixed-sex C57BL/6 mice aged 3–30 months; human right atrial appendage biopsies n=35 (aged 32–86) · n=4–8 mice/group · 489 citations · 100th citation percentile · senescent cardiomyocytes secrete non-canonical SASP (TGFβ2, GDF15, EDN3); classical inflammatory factors (IL-6, IL-1β, CXCL1) not upregulated in purified CMs; genetic (INK-ATTAC) and pharmacological (navitoclax 50 mg/kg/day) senolytic clearance reduces cardiac fibrosis and hypertrophy but does NOT improve ejection fraction; local PDF available (previously verified on [[cardiomyocytes]])

[^lewis2019]: doi:10.1111/acel.12931 · Lewis-McDougall FC, Ruchaya PJ, Domenjo-Vila E et al. · 2019 · Aging Cell 18(3):e12931 · in-vivo + in-vitro · model: human CPCs n=35 cardiac surgery patients aged 32–86; NSG mouse MI injection model n=4–5/group; aged INK-ATTAC + wild-type mice n=5–11/group · 296 citations · 100th citation percentile · >50% of CPCs from subjects >70 yr are p16INK4A+/SA-β-gal+ (senescent); senescent-CPC SASP (PAI-1, IL-8, IL-6, IL-1β, IGFBP-3, MMP-3, GM-CSF) activates fibrotic program in CFs and renders cycling CPCs senescent; D+Q or AP20187 clearance in aged mice reduced LV fibrosis (p<0.05) and increased Ki67+/EdU+ cardiomyocytes; local PDF available (previously verified on [[cardiomyocytes]])
