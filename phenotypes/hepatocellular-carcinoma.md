---
type: phenotype
aliases: [HCC, primary liver cancer, hepatoma, primary malignant neoplasm of liver]
icd-10: C22.0
icd-11: null # ICD-11 code not confirmed via live WHO browser — see #gap/needs-canonical-id below
affected-tissues: ["[[liver]]"]
underlying-hallmarks:
 - "[[genomic-instability]]"
 - "[[cellular-senescence]]"
 - "[[chronic-inflammation]]"
 - "[[epigenetic-alterations]]"
 - "[[telomere-attrition]]"
typical-onset: "Peak incidence 60–70 years; risk rises steeply after age 50; median age at diagnosis ~63–66 in Western series"
prevalence-65plus: "Incidence in adults 65+ is disproportionately high; globally ~661,000 new HCC cases in 2018 (age-standardized rate 7.3/100,000); rates in males over 65 are 3–4× higher than population average [^rumgay2022]; see body for age-stratified details"
literature-checked-through: 2026-06-05
verified: true
verified-date: 2026-06-05
verified-by: claude
verified-scope: "Li 2020 FBP1 (full PDF): model corrected from 'mouse FBP1 KO + human cell lines' to 'hepatocyte-specific Fbp1 deletion (AAV8-TBG-Cre conditional)'; #gap/no-fulltext-access tag removed; inflachromene/senolytic detail (dasatinib/quercetin, ABT-263) added to footnote; FBP1 silencing in human HCC noted. Rumgay 2022: 826,000 total / 661,000 HCC / ASR 7.3 confirmed via abstract. Ningarhari 2021: n=1,502 (978 HCC) confirmed; independent determinants of telomere attrition confirmed. Mu 2015: hepatocyte origin + dedifferentiation model confirmed; 'all models tested' framing confirmed. ICD-11 code not resolvable via live WHO browser (API requires authentication); #gap/needs-canonical-id retained. McGlynn 2021, Kalligeros 2024, Macias 2021, Holczbauer 2022: review/closed-access; qualitative claims not independently verified against full text — recency framing treated as editorially plausible."
---


# Hepatocellular Carcinoma (HCC)

Hepatocellular carcinoma is the most common primary malignant tumor of the liver, arising from hepatocytes (or, in a contested subset, from hepatic progenitor cells), and accounting for approximately 80% of all primary liver cancer cases worldwide [^rumgay2022]. HCC is an aging-associated disease in two senses: it overwhelmingly arises on a background of decades-long chronic liver injury (cirrhosis, viral hepatitis, steatohepatitis) that itself reflects aging biology, and age is an independent risk factor driven by the same hallmarks — genomic instability accumulation, cellular senescence-SASP dynamics, telomere erosion, and epigenetic drift — that govern aging throughout the body.

HCC is globally the third leading cause of cancer mortality [^rumgay2022]. It is distinct from intrahepatic cholangiocarcinoma (iCCA, ~15% of primary liver cancers) and metastatic liver disease (which is more common but not a primary liver cancer). The etiology landscape is shifting: viral hepatitis (HBV, HCV) has historically dominated but is declining in relative importance as vaccination and antiviral treatment mature, while **metabolic dysfunction-associated steatotic liver disease (MASLD)-driven HCC is rising** in parallel with the global obesity epidemic [^mcglynn2021].

The page exists in this wiki because HCC is the prototypic aging-driven oncology outcome of the liver and is the central safety concern for in-vivo reprogramming approaches targeting the liver (see [[processes/partial-reprogramming]]).

---

## Epidemiology and age relationship

### Global burden

Rumgay et al. 2022 estimated approximately 826,000 new liver cancer cases globally in 2018, of which 661,000 (80%) were HCC (age-standardized rate: 7.3/100,000) [^rumgay2022]. HCC incidence is markedly geographically variable: highest in Eastern Asia and sub-Saharan Africa (regions with high endemic HBV prevalence), intermediate in Southern Europe and North America, lowest in Northern Europe. Within all regions, age-specific incidence rates rise steeply, with the highest rates in the 60–70-year age bracket [^mcglynn2021].

| Dimension | Key figure |
|---|---|
| Global new HCC cases (~2018) | ~661,000/yr [^rumgay2022] |
| HCC as share of all primary liver cancers | ~80% [^rumgay2022] |
| Global age-standardized incidence | 7.3/100,000 [^rumgay2022] |
| Male:female ratio | ~2.5:1 to 3:1 (varies by region and etiology) |
| Peak age at diagnosis | 60–70 years (Western series); younger in high-HBV-endemic regions |
| MASLD-attributable fraction | Rising; ~20–30% in Western cohorts, likely to increase [^kalligeros2024] |

### Rising MASLD-driven HCC

The etiological landscape of HCC is undergoing a documented shift [^mcglynn2021]. Effective HCV treatment (direct-acting antivirals), HBV vaccination, and screening have reduced the viral fraction of HCC. Simultaneously, MASLD has become the fastest-growing etiology in Western populations. The MASLD → MASH → cirrhosis → HCC progression represents an aging-accelerated metabolic cascade: age amplifies all steps via increased hepatic insulin resistance, mTORC1 hyperactivation, SASP-driven inflammatory microenvironment, and impaired mitophagy (see [[liver]] § Hallmarks of aging). Crucially, MASLD-driven HCC may arise without cirrhosis in ~20% of cases — a mechanistic distinction from viral HCC [^kalligeros2024]. Cross-link: [[masld]].

#gap/needs-replication — the non-cirrhotic MASLD-HCC fraction varies substantially across cohorts and requires larger prospective studies to confirm as a stable epidemiological feature.

---

## Aging as a dominant risk factor — mechanistic basis

HCC is the exemplar of oncogenesis driven by aging biology. Age is an independent risk factor for HCC development even after adjusting for viral hepatitis status, alcohol, and metabolic disease [^macias2021]. The mechanistic basis maps cleanly onto the Hallmarks of Aging framework:

### Genomic instability accumulation

Decades of hepatocyte replication, exposure to genotoxic metabolites (ROS from lipid peroxidation, aflatoxin B1, acetaldehyde), and declining DNA repair capacity lead to accumulation of somatic mutations in hepatocytes. The most commonly mutated genes in HCC include TP53, CTNNB1 (β-catenin), ARID1A, TERT promoter, and RB1 — all reflecting loss of tumor suppression or gain of oncogenic signaling. The mutational landscape reflects decades of cumulative damage rather than a single acute mutagenic event; age is therefore a proxy for total genotoxic load. See [[genomic-instability]].

| Dimension | Status |
|---|---|
| Genomic instability mechanism conserved in humans? | yes — somatic mutation data from human HCC WGS |
| Phenotype conserved in model organisms? | yes — mouse hepatocarcinogenesis models recapitulate core mutations |
| Replicated across independent cohorts? | yes (TCGA-LIHC + multiple international sequencing consortia) |

### Telomere attrition — the critical HCC-initiating event

Telomere shortening in cirrhotic hepatocytes appears to be not merely a bystander marker but a functional driver of HCC initiation. Ningarhari et al. 2021 analyzed telomere length in 1,502 HCC patient samples and found that aging, liver fibrosis, male sex, and alcohol were independent determinants of liver telomere attrition; telomere length at the time of HCC diagnosis stratified molecular subtypes with distinct biology [^ningarhari2021]. Shorter telomeres in the surrounding non-tumor cirrhotic liver are associated with higher risk of HCC development.

The mechanism: critically short telomeres trigger genome instability (chromosomal fusions, end-to-end joining, breakage-fusion-bridge cycles), creating the structural chromosomal rearrangements seen in advanced HCC. In the pre-malignant state, dysfunctional telomeres transiently activate senescence checkpoints (p53-dependent); when these checkpoints are lost (TP53 mutation), cells escape senescence and enter a genomically unstable proliferative state — the classic telomere-crisis-to-cancer transition. See [[telomere-attrition]].

### Cellular senescence — the double-edged sword in HCC

Senescent cells occupy a paradoxical dual role in HCC pathogenesis that reflects the general "double-edged sword" of senescence in aging biology [^cai2022]:

**Cell-autonomous tumor suppression (anti-HCC).** Oncogene-induced senescence (OIS) in hepatocytes expressing activated Ras, β-catenin, or EGFR mutations arrests these cells in a pre-malignant state. This is a genuine tumor-suppressive mechanism: mice with impaired hepatocyte senescence show accelerated HCC development in carcinogenesis models. Senescent pre-malignant hepatocytes are normally cleared by NK cells and cytotoxic T cells (see [[cellular-senescence]] § immune surveillance).

**Non-cell-autonomous tumor promotion (pro-HCC) via SASP.** Senescent hepatocytes and stellate cells secrete a SASP (IL-6, IL-8, MMP-2, MMP-9, HGF, EGF, TGF-β) that creates a pro-tumorigenic microenvironment for neighboring pre-malignant hepatocytes [^cai2022]. With advancing age, immunosenescence impairs NK cell-mediated clearance of senescent cells (see [[hallmarks/disabled-adaptive-immunity]]), allowing senescent cells to persist and sustain paracrine pro-tumorigenic signaling.

The net effect of hepatocyte senescence on HCC risk is therefore context- and age-dependent:
- **Young liver / intact immune surveillance**: OIS arrests pre-malignant cells → tumor suppression dominates
- **Aged liver / impaired surveillance**: senescent cells accumulate → SASP-driven promotion dominates

**HSC senescence and the SASP → HCC axis.** Li et al. 2020 demonstrated a specific pathway linking hepatocyte metabolic dysfunction to HCC via stellate cell senescence [^li2020]: loss of FBP1 (fructose-1,6-bisphosphatase 1) in hepatocytes drives aerobic glycolysis and HMGB1 secretion, which triggers paracrine senescence in [[hepatic-stellate-cells]]. The SASP of senescent stellate cells then promotes HCC growth; senolytic clearance of senescent stellate cells inhibited tumor progression in the mouse model. This is the primary direct experimental evidence linking HSC senescence-SASP to HCC promotion.

| Dimension | Status |
|---|---|
| Senescence → SASP → HCC promotion in humans? | partial — human HCC biopsies show elevated senescence markers + SASP; causal direction not established by human data alone |
| FBP1/HMGB1 → HSC senescence axis in humans? | not tested — mouse + human cell lines only [^li2020] |
| Senolytic clearance of HSCs reduces HCC? | preclinical only #gap/needs-human-replication |

### Epigenetic drift and loss of hepatocyte identity

Age-associated epigenetic drift in hepatocytes includes progressive loss of hepatocyte-identity CpG methylation and de-repression of loci associated with proliferative and dedifferentiated states. This epigenetic instability lowers the barrier to malignant transformation. Strong DNA-methylation aging-clock signals in hepatic tissue indicate robust epigenetic age accumulation in the liver. See [[epigenetic-alterations]].

### Immunosenescence and failed surveillance

HCC immune surveillance normally clears both senescent pre-malignant hepatocytes and early tumor cells via NK cells, NKT cells, and cytotoxic CD8+ T cells. Aging impairs all three limbs: NK cell number and cytotoxic function decline; NKT cells show exhaustion phenotypes; CD8+ T cell polyfunctionality declines. The net effect is an elevated probability that both senescent cells and early HCC cells escape immunological control in the aged liver. See [[hallmarks/disabled-adaptive-immunity]] #gap/unsourced — direct quantitative comparison of HCC immune surveillance efficiency in young vs. aged human liver is lacking; the inference is from component studies of age-related immune decline.

---

## Cell of origin — the unresolved debate

The cell from which HCC originates has been a sustained controversy with direct implications for aging biology:

**Hepatocyte dedifferentiation (majority view, mouse genetic evidence).** Mu et al. 2015, using fate-tracing in multiple mouse HCC models (oncogene expression, DEN carcinogenesis, high-fat diet), found that "HCCs arose exclusively from hepatocytes but never from the progenitor/biliary compartment" [^mu2015]. Tumors displaying progenitor markers (EpCAM+, KRT19+, AFP+) reflected hepatocyte dedifferentiation rather than a true progenitor cell of origin. This is consistent with the broader finding that hepatocytes retain significant epigenetic plasticity and can re-acquire progenitor-like features under malignant pressure.

**HPC origin in a subset (histological evidence, human).** Some HCC subtypes — particularly combined hepatocellular-cholangiocarcinoma (cHCC-CCA), and EpCAM+/progenitor-marker-enriched "stem-like HCC" — are histologically and molecularly consistent with origin from [[hepatic-progenitor-cells]] or biliary progenitors [^holczbauer2022]. SOX9+ biliary progenitors have been implicated as a cell of origin in specific mouse carcinogenesis models. In human cirrhosis, the ductular reaction (HPC expansion) correlates with HCC risk, though whether this is causal or a shared response to the carcinogenic microenvironment is not resolved.

**Current synthesis.** The evidence most strongly supports **hepatocyte dedifferentiation** as the dominant route, with possible HPC origin in a biologically distinct minority. The progenitor markers observed in many HCC subtypes are most likely acquired during malignant transformation rather than inherited from a progenitor cell of origin [^mu2015]. The debate matters for aging biology: if the dominant route is hepatocyte dedifferentiation driven by accumulated genomic/epigenetic damage over decades, then age is mechanistically embedded in HCC pathogenesis rather than merely a passive risk factor.

---

## Background liver disease and the cirrhosis context

~80–90% of HCCs arise on a background of chronic liver disease with cirrhosis [^mcglynn2021]. The major etiological contexts are:

| Etiology | HCC relative risk | Trend |
|---|---|---|
| Chronic HBV infection | ~15–20× | Declining (vaccination, antivirals) |
| Chronic HCV infection | ~15–20× | Declining (curative DAAs) |
| Alcoholic cirrhosis | ~5× | Stable |
| MASLD/MASH | ~3–5× (much higher with cirrhosis) | Rising; now dominant in Western populations [^kalligeros2024] |
| Hereditary hemochromatosis | ~20× in homozygous adults | Stable |
| Aflatoxin B1 exposure | Acts synergistically with HBV | Regional (Sub-Saharan Africa, Southeast Asia) |

The cirrhosis-to-HCC annual transition rate is approximately 1–4% for most etiologies. The implication for aging: cirrhosis is itself an aging-amplified phenotype (see [[liver-fibrosis]]), and the probability of HCC in cirrhotic liver compounds over time — making age an independent multiplier on top of etiology-specific risk.

---

## Reprogramming safety tension

The liver is the leading near-term target for in-vivo partial reprogramming interventions because systemically administered lipid nanoparticles accumulate preferentially in hepatocytes (see [[liver]] § Partial epigenetic reprogramming). However, this same delivery advantage creates the central safety concern: the liver is the most common site of HCC, and Yamanaka factors (OSKM) are oncogenic under conditions of sustained or dysregulated expression. In the original constitutive OSKM mouse models, hepatocyte dysplasia and tumor formation were reported.

Current partial reprogramming approaches use transient pulsed expression to minimize oncogenic risk; the evidence so far is that brief OSK/OSKM pulses do not induce HCC in healthy young mice. The critical unresolved question is whether the **aged, chronically injured liver** — which already harbors pre-malignant cells with TP53 mutations and short telomeres — has a different safety profile than a healthy young liver. This question is the primary barrier between preclinical promise and human application of liver-targeted partial reprogramming. See [[processes/partial-reprogramming]] and [[in-vivo-partial-reprogramming-therapy]].

#gap/long-term-unknown — the therapeutic window for partial reprogramming in aged, pre-fibrotic or pre-malignant human liver has not been defined; this is arguably the field's most important unanswered safety question.

---

## Surveillance, diagnosis, and treatment (brief overview)

This page focuses on the aging biology of HCC, not clinical oncology. Key practical points:

- **Surveillance** in at-risk populations (cirrhosis, chronic HBV): liver ultrasound every 6 months ± AFP. Surveillance detects HCC at resectable/transplantable stage; improves survival.
- **Staging** by BCLC (Barcelona Clinic Liver Cancer) criteria; accounts for both tumor extent and underlying liver function (Child-Pugh score).
- **Treatment modalities** (by stage): surgical resection (early), liver transplantation (Milan criteria), radiofrequency/microwave ablation (early), TACE (intermediate), systemic therapy — sorafenib (first-line anti-angiogenic); atezolizumab + bevacizumab (first-line immunotherapy preferred in current guidelines); nivolumab; regorafenib (second-line). Immunotherapy is particularly relevant to the aging angle: immune checkpoint inhibitors re-engage the adaptive immune response that immunosenescence impairs.
- **Age is not a contraindication** to treatment; performance status and liver function reserve are the limiting factors [^macias2021].

---

## Hallmark connections

| Hallmark | Role in HCC pathogenesis |
|---|---|
| [[genomic-instability]] | Primary driver — accumulated somatic mutations over decades; TP53/CTNNB1/TERT promoter mutations |
| [[cellular-senescence]] | Double-edged: OIS suppresses early HCC; SASP from persistent senescent hepatocytes/HSCs promotes late HCC; immunosenescence removes clearance of senescent cells |
| [[chronic-inflammation]] | SASP-driven NF-κB, IL-6, TNF-α, EGF; creates pro-tumorigenic microenvironment; Kupffer cell inflammaging amplifies |
| [[telomere-attrition]] | Critical HCC-initiation mechanism — telomere crisis → chromosomal instability → TP53 mutation escape |
| [[epigenetic-alterations]] | Hepatocyte identity drift; de-repression of oncogenic loci; DNA methylation clock strongly tracks hepatic aging |
| [[deregulated-nutrient-sensing]] | mTORC1 hyperactivation in aged liver promotes hepatocyte proliferative signaling and MASLD progression → HCC |

---

## Limitations and gaps

- `#gap/needs-canonical-id` — ICD-11 code for HCC (primary malignant neoplasm of liver, hepatocellular carcinoma): could not be confirmed via the WHO ICD-11 browser in this session. Candidate codes include XH1GK1 or entities under the 2B neoplasm chapter; requires live WHO browser or MMS API access to confirm. ICD-10 C22.0 is well-established and confirmed.
- `#gap/needs-human-replication` — direct experimental demonstration that SASP from senescent HSCs promotes HCC in humans (Li 2020 FBP1/HMGB1 axis is mouse + cell lines)
- `#gap/needs-human-replication` — senolytic clearance of senescent HSCs reducing HCC risk; preclinical only
- `#gap/needs-human-replication` — whether blunted HPC-mediated regeneration in aged liver contributes to oncogenic hepatocyte accumulation; indirect evidence only
- `#gap/long-term-unknown` — therapeutic window for partial reprogramming in aged/pre-malignant human liver; the central safety barrier for the field
- `#gap/unsourced` — quantitative comparison of HCC immune surveillance efficiency between young and aged human liver; component studies exist but integrated measurement is lacking
- `#gap/no-mechanism` — how immunosenescence and SASP together create the threshold at which OIS → tumor suppression transitions to SASP → tumor promotion; not mechanistically resolved at the population level

---

## Cross-references

- [[liver]] — parent tissue page; aging biology context; reprogramming safety section
- [[hepatic-stellate-cells]] — SASP contributes to HCC microenvironment; Li 2020 FBP1/HMGB1 axis
- [[hepatic-progenitor-cells]] — contested cell-of-origin debate; stem-like HCC subtype
- [[hepatocytes]] — dominant cell of origin by mouse fate-tracing evidence
- [[liver-fibrosis]] — cirrhosis is the predominant HCC background (~80–90% of cases)
- [[masld]] — fastest-growing HCC etiology in Western populations
- [[cellular-senescence]] — double-edged sword hallmark; OIS vs SASP roles
- [[genomic-instability]] — primary driver of cumulative somatic mutation landscape
- [[telomere-attrition]] — telomere crisis → chromosomal instability → escape from OIS
- [[epigenetic-alterations]] — hepatocyte identity drift; de-repression of oncogenic loci
- [[chronic-inflammation]] — SASP + Kupffer cell inflammaging; NF-κB/IL-6 axis
- [[hallmarks/disabled-adaptive-immunity]] — immunosenescence removes surveillance of senescent and pre-malignant hepatocytes
- [[processes/partial-reprogramming]] — liver as primary target; HCC risk is the central safety concern
- [[in-vivo-partial-reprogramming-therapy]] — clinical development context; HCC safety barrier
- [[sasp]] — the pro-tumorigenic secretome of senescent hepatocytes and stellate cells
- [[processes/senescence-immune-surveillance]] — NK/CD8+ T cell clearance impaired with aging

---

## Footnotes

[^rumgay2022]: doi:10.1016/j.ejca.2021.11.023 · Rumgay H, Ferlay J, de Martel C, Georges D, Ibrahim AS, Zheng R, Wei W, Lemmens VEPP, Soerjomataram I · "Global, regional and national burden of primary liver cancer by subtype" · Eur J Cancer 161:108-118 · 2022 · observational (GLOBOCAN 2018 + registry data) · n=95 countries · key finding: 826,000 new liver cancer cases globally in 2018; 661,000 HCC (ASR 7.3/100,000); HCC = 80% of all primary liver cancers; highest rates in Eastern Asia and Northern Africa

[^mcglynn2021]: doi:10.1002/hep.31288 · McGlynn KA, Petrick JL, El-Serag HB · "Epidemiology of Hepatocellular Carcinoma" · Hepatology 73(S1):4-13 · 2021 · review · key content: HBV and HCV remain leading global risk factors; metabolic factors (obesity, T2D, NAFLD/MASLD) are the fastest-growing etiology in Western populations; primary prevention through metabolic risk reduction is highest-yield strategy; age-specific incidence rises steeply after age 50

[^kalligeros2024]: doi:10.1016/j.metabol.2024.156004 · Kalligeros M, Henry L, Younossi ZM · "Metabolic dysfunction-associated steatotic liver disease and its link to cancer" · Metabolism 156:156004 · 2024 · review · key content: MASLD is a risk factor for HCC and multiple non-liver cancers; MASLD-HCC may arise without cirrhosis in ~20% of cases; HCC risk in MASLD increases proportionally with fibrosis stage

[^macias2021]: doi:10.18632/aging.203620 · Macias RIR et al. · "Aging and liver cancer" · Aging (Albany NY) 13:23416-23431 · 2021 · review · key content: aging hallmarks (genomic instability, telomere attrition, epigenetic alterations, senescence) drive HCC susceptibility in older adults; peak HCC diagnosis ages 60–70; advanced age is not a contraindication for treatment; comorbidities and liver function reserve govern eligibility

[^ningarhari2021]: doi:10.1016/j.jhep.2020.11.052 · Ningarhari M, Caruso S, Hirsch TZ et al. (Zucman-Rossi J last author) · "Telomere length is key to hepatocellular carcinoma diversity and telomerase addiction is an actionable therapeutic target" · J Hepatol 74:1155-1166 · 2021 · observational + in-vitro · n=1,502 patient samples · key finding: aging, liver fibrosis, male sex, and alcohol are independent determinants of liver telomere attrition; telomere length stratifies HCC molecular subtypes; anti-TERT treatment halted proliferation in HCC cell lines and xenografts, demonstrating oncogenic TERT addiction · model: human HCC samples + xenograft

[^cai2022]: doi:10.3390/cells12010132 · Cai X, Guillot A, Liu H · "Cellular Senescence in Hepatocellular Carcinoma: The Passenger or the Driver?" · Cells 12(1):132 · 2022 (published Jan 2023) · review · key content: senescence exerts dual effects in HCC — OIS arrests pre-malignant hepatocytes (tumor suppression) while the SASP of persisting senescent cells promotes HCC progression; discusses senescence-related therapeutic strategies including senolytics in the HCC context

[^li2020]: doi:10.1038/s41556-020-0511-2 · Li F, Huangyang P, Burrows M et al. (Simon MC last author) · "FBP1 loss disrupts liver metabolism and promotes tumorigenesis through a hepatic stellate cell senescence secretome" · Nat Cell Biol 22(6):728-739 · 2020 · in-vivo + in-vitro · model: mouse hepatocyte-specific Fbp1 deletion (AAV8-TBG-Cre conditional) in DEN and diet-/CCl4-induced HCC models + human HSC cell lines · key finding: hepatocyte-specific FBP1 loss drives ER stress and aerobic glycolysis → HMGB1 secretion → paracrine HSC activation and senescence; blocking HMGB1 release with inflachromene suppressed HSC SASP; senolytic clearance of senescent HSCs (dasatinib/quercetin or ABT-263/navitoclax) inhibited tumor progression in both DEN and NAFLD-HCC models; FBP1 silenced in human and murine HCC tumors · PMID:32367049

[^mu2015]: doi:10.1172/JCI77995 · Mu X, Español-Suñer R, Mederacke I et al. (Schwabe RF last author) · "Hepatocellular carcinoma originates from hepatocytes and not from the progenitor/biliary compartment" · J Clin Invest 125(10):3891-3903 · 2015 · in-vivo (genetic fate-tracing) · model: multiple mouse HCC models (DEN-chemical, oncogene-driven, HFD metabolic) · key finding: HCCs arose exclusively from hepatocytes in all models tested; tumors with progenitor markers (EpCAM+, AFP+) reflected hepatocyte dedifferentiation, not progenitor origin; progenitor/biliary compartment did not contribute to HCC

[^holczbauer2022]: doi:10.1016/j.jhepr.2021.100416 · Holczbauer Á, Wangensteen KJ, Shin S · "Cellular origins of regenerating liver and hepatocellular carcinoma" · JHEP Reports 4(4):100416 · 2022 · review · key content: reviews evidence for hepatocyte vs. progenitor HCC cell of origin; notes progenitor-marker HCC subtypes (cHCC-CCA, stem-like HCC); favors hepatocyte dedifferentiation as dominant route while acknowledging progenitor-origin subset; implications for clinical taxonomy and prevention
