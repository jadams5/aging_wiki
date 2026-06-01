---
type: process
aliases: [intestinal barrier, gut epithelial barrier, leaky gut, intestinal permeability]
key-proteins:
  - "[[cldn1]]"
  - "[[cldn2]]"
  - "[[cldn3]]"
  - "[[cldn15]]"
  - "[[ocln]]"
  - "[[tjp1]]"
  - "[[jam-a]]"
  - "[[muc2]]"
  - "[[reg3g]]"
  - "[[tricellulin]]"
pathways:
  - "[[scfa-signaling]]"
  - "[[wnt-beta-catenin]]"
  - "[[notch-pathway]]"
  - "[[lps-tlr4-nfkb]]"
  - "[[nf-kb]]"
  - "[[tgf-beta]]"
hallmarks:
  - "[[dysbiosis]]"
  - "[[chronic-inflammation]]"
  - "[[altered-intercellular-communication]]"
selective-variants: []
druggability-tier: 2
caused-by:
  - "[[dysbiosis]]"
  - "[[cellular-senescence]]"
  - "[[chronic-inflammation]]"
causes:
  - "[[chronic-inflammation]]"
  - "[[altered-intercellular-communication]]"
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Thevaranjan 2017 (doi:10.1016/j.chom.2017.03.002) verified against full PDF end-to-end: old-mouse age corrected (24 mo → 18–22 mo), group sizes corrected (n ~10–20/group → n=4–12 per experiment), bacterial product corrected (LPS → MDP), cytokine coverage expanded (TNF only → TNF + IL-6), anti-TNF non-rescue of permeability noted, 2018 correction (doi:10.1016/j.chom.2018.03.006) noted. Shimizu 2022 (doi:10.1007/s11357-021-00398-y) verified against full PDF: r=−0.307 p<0.001 confirmed, Pearson's test identified, absolute HD5 values added (elderly 1.82±1.47 vs middle-aged 2.58±1.51 ng/mL), DOSANCO cohort detail added. Depommier 2019 (doi:10.1038/s41591-019-0495-2) verified against full PDF: exact ± values added, plasma LPS secondary endpoint confirmed reduced, L:M ratio not measured (corrects prior claim of non-specific 'inflammation markers'). Wu 2026 (doi:10.1111/acel.70533; PMID:42083126) resolved from PMID: DOI confirmed, author list corrected (Wu F, Fang B → Wu F, Zhang M, Wu J et al.; Fang B is senior author), FMT-to-GF framing flagged as unconfirmed by abstract (needs full-text verification — PMC available). Butyrate AMPK mechanism (Peng 2009) added as citation; HDAC→H3 acetylation mechanism remains #gap/unsourced. Schoultz/Keita 2020 and Odenwald 2020 are reviews — not verified against primary sources per instructions (relax for review-citations). **2026-05-12 propagation pass:** added HMW-HA / HAS2-augmentation intervention row + dedicated 'HMW-HA and gut barrier preservation' subsection integrating Zhang 2023 (Nature, doi:10.1038/s41586-023-06463-0; verified against PMC10666664 HTML in [[studies/zhang-2023-nmrhas2-mouse-healthspan]]) — FITC-dextran preservation (n=12), goblet/Paneth cell counts, organoid rescue with HMW-HA but NOT LMW-HA at 20 µg/mL."
literature-checked-through: 2026-05-12
---

# Gut Barrier

The intestinal epithelial barrier is a multi-layered system that prevents luminal contents — commensal bacteria, dietary antigens, and microbial products such as LPS — from gaining systemic access while allowing selective absorption of nutrients and water. In aging, barrier function progressively declines, permitting LPS translocation that drives a chronic low-grade systemic inflammatory state ("inflammaging") via the [[lps-tlr4-nfkb]] axis. Barrier loss is mechanistically upstream of the [[dysbiosis]] hallmark and contributes to [[chronic-inflammation]] and [[altered-intercellular-communication]].

This page covers the intestinal epithelial barrier as a biological **process**: its structural architecture, regulatory pathways, age-related changes, measurement methods, and interventions. Microbiome compositional shifts that precede and exacerbate barrier loss are covered on [[dysbiosis]]; the LPS-TLR4-NFkB signal transduction cascade is covered on [[lps-tlr4-nfkb]].

## Architecture — the multi-layer barrier

The intestinal barrier is not a single structure but a stack of complementary defense systems:

| Sub-barrier | Key components | Function |
|---|---|---|
| **Mucus layer** | [[muc2]] (secreted gel-forming mucin), IgA | Physical exclusion of bacteria; two layers in colon (inner sterile, outer colonized) |
| **Epithelial monolayer** | Enterocytes, goblet cells, Paneth cells, enteroendocrine cells | Selective absorptive and secretory barrier; renewed every 3–5 days from [[intestinal-stem-cells]] |
| **Tight junctions (TJ)** | [[cldn1]], [[cldn3]] (sealing), [[cldn2]] (pore-forming), [[ocln]], [[tjp1]] (ZO-1), [[jam-a]], [[tricellulin]] | Paracellular seal; governs charge- and size-selectivity |
| **Antimicrobial peptides (AMPs)** | [[reg3g]] (Reg3γ), α-defensins (HD5/6 from Paneth cells), β-defensins | Chemical exclusion; bactericidal against gram-positive organisms |
| **Secretory IgA (sIgA)** | Dimeric IgA + secretory component | Immune exclusion; luminal antibody coating of commensals and pathogens |
| **Lamina propria immune cells** | Intraepithelial lymphocytes, dendritic cells, macrophages | Sampling and first-response layer |

### Tight junction molecular architecture

Tight junctions seal the intercellular space between adjacent epithelial cells. The core transmembrane proteins are **claudins** (27 family members; CLDN1/3 are barrier-forming, CLDN2/15 are pore-forming and increase paracellular water and cation flux), **occludin** ([[ocln]]), and **junctional adhesion molecule-A** ([[jam-a]]). The cytoplasmic plaque proteins ZO-1 ([[tjp1]]), ZO-2, and ZO-3 link the transmembrane proteins to the perijunctional actomyosin ring, which governs junction tension and opening. **Tricellulin** ([[tricellulin]]) seals tricellular contacts where three cells meet, a mechanically vulnerable region [^schoultz2020].

Claudin-2, uniquely, forms paracellular water and cation channels — its overexpression (as occurs with dysbiotic inflammation) increases permeability rather than reducing it. Loss of barrier-forming claudins coupled with gain of claudin-2 is a common pattern in aged and inflamed intestine.

## Regulatory pathways

### SCFA signaling — the butyrate axis

Short-chain fatty acids (SCFAs) — acetate, propionate, butyrate — produced by microbial fermentation of dietary fiber are the primary extrinsic regulators of barrier function. **Butyrate** is the dominant colonocyte energy substrate (~70% of total energy in colonocytes) and acts as a direct transcriptional regulator via HDAC inhibition and GPR109A/FFAR2/3 signaling:

- Butyrate enhances tight junction assembly via AMPK activation, accelerating reorganization of ZO-1 and occludin into mature junctions [^peng2009]; separately, butyrate acts as an HDAC inhibitor — whether this directly drives transcriptional upregulation of [[ocln]] and [[tjp1]] via histone H3 acetylation at their promoters is mechanistically plausible but not confirmed by a primary source #gap/unsourced
- Butyrate activates PPAR-γ in colonocytes → promotes epithelial differentiation and MUC2 production
- Butyrate maintains colonocyte oxygen consumption, sustaining the physiological epithelial hypoxia that suppresses facultative anaerobes

SCFA production is microbiome-dependent and declines with age-associated loss of fiber-fermenting taxa (Lachnospiraceae, Ruminococcaceae). See [[scfa-signaling]] for detailed pathway biology.

### Wnt/β-catenin — epithelial renewal

[[wnt-beta-catenin|Wnt/β-catenin]] signaling from the crypt niche (Wnt3 from Paneth cells; R-spondin from stromal cells) drives [[intestinal-stem-cells|intestinal stem cell]] (ISC) self-renewal and proliferative expansion. Age-associated changes in niche Wnt tone alter ISC function and villus renewal rate. Excessive Wnt activation drives hyperproliferation and loss of goblet cell differentiation; insufficient Wnt drives ISC quiescence and epithelial atrophy. #gap/contradictory-evidence — the direction of Wnt change in aged intestine is disputed (hyper- vs. hypo-activation may be region- and context-dependent).

### Notch signaling — cell-fate allocation

[[notch-pathway|Notch]] signaling from Paneth cells and stroma controls the absorptive (Notch-on → enterocyte) vs. secretory (Notch-off → goblet/Paneth/enteroendocrine) cell-fate decision at the ISC level. Age-related Notch pathway changes bias differentiation away from goblet cells, reducing mucus output [^unsourced-notch-age] #gap/unsourced.

### AHR — dietary and microbial ligand integration

The aryl-hydrocarbon receptor ([[ahr]]) is activated by tryptophan-derived microbial metabolites (indole, indole-3-aldehyde, indole-3-propionic acid) and dietary ligands (indole-3-carbinol from cruciferous vegetables). AHR signaling promotes:
- IL-22 secretion from innate lymphoid cell type 3 (ILC3) → Reg3γ and defensin upregulation
- Goblet cell MUC2 production
- Barrier gene expression in enterocytes

Reduced dietary diversity and dysbiosis in aging decrease tryptophan-AHR ligand availability, attenuating this axis. #gap/needs-replication — the aging-specific contribution of AHR attenuation to barrier decline is mechanistically plausible but not yet measured in controlled human aging studies.

## Age-related changes

### Increased permeability — evidence base

**Germ-free aging mouse study (Thevaranjan 2017):** Aged (18–22 month) conventional C57BL/6 mice showed increased intestinal permeability vs. young (10–14 week) controls, measured by FITC-dextran gavage; germ-free aged mice maintained youthful permeability and colonization of germ-free mice with aged-mouse microbiota was sufficient to induce barrier dysfunction. Circulating muramyl dipeptide (MDP) — a bacterial cell-wall product and bacterial translocation surrogate — was significantly elevated in old conventional but not old germ-free mice. Aged conventional mice also had elevated circulating TNF and IL-6, and macrophage bacterial killing capacity was impaired [^thevaranjan2017]. This study is the strongest mechanistic causal evidence linking age-associated dysbiosis → barrier loss → systemic inflammation.

**Human functional evidence:** The lactulose:mannitol (L:M) ratio, a functional permeability test, is elevated in older vs. younger adults in multiple cross-sectional studies. Plasma LPS-binding protein (LBP) and soluble CD14 (sCD14) — surrogate markers of LPS exposure — rise progressively with age in population cohorts. The precise magnitude of age-related L:M change varies across studies and is confounded by diet, drug use (NSAIDs, PPIs), and comorbidities. #gap/needs-replication — a well-controlled, large longitudinal cohort with standardized L:M + plasma LBP simultaneously remains absent from the literature as of 2026.

| Permeability marker | Age effect | Notes |
|---|---|---|
| Lactulose:mannitol ratio | ↑ in older adults | Best functional readout; probe-based |
| Plasma LBP | ↑ with age | Elevated even in "healthy aging" cohorts |
| sCD14 | ↑ with age | Monocyte activation marker; sensitive to low-level LPS exposure |
| FITC-dextran (mouse) | ↑ in aged mice | Gold-standard murine assay; not translatable to humans directly |
| Zonulin (serum) | ↑ reported; validity disputed | See "Measurement" section below |

### Mucus layer thinning

The inner mucus layer of the colon thickens continuously via secretion from goblet cells and is critical for excluding luminal bacteria from epithelial contact. In aged mice, inner mucus layer thickness decreases (quantitative data: #gap/unsourced — specific thickness measurements require verification against primary sources). Goblet cell MUC2 transcript and protein levels decline in aged intestine in both mouse and human samples. Reduced SCFA availability contributes to reduced MUC2 secretion.

### Paneth cell dysfunction and AMP decline

Paneth cells (deep crypt base, small intestine) secrete α-defensins (HD5, HD6 in humans) and Reg3γ that maintain the sterile crypt environment and suppress pathobionts. In aged humans:
- Human defensin-5 (HD5) concentrations decline with age; community-dwelling adults >70 yr have significantly lower fecal HD5 vs. middle-aged adults (r = −0.307, p <0.001 for age × HD5 correlation) [^shimizu2022]
- Paneth cell granule morphology becomes abnormal in aged mice (mis-trafficking of antimicrobial content)
- This functionally uncouples crypt sterilization from ISC niche maintenance

HD5 decline correlates with microbiome compositional shifts toward Gram-negative taxa, consistent with reduced bactericidal output. #gap/needs-replication — longitudinal data on HD5 across human lifespan are lacking; Shimizu 2022 is cross-sectional.

### Barrier protein expression shifts

| Protein | Age-direction | Evidence quality |
|---|---|---|
| [[ocln]] (occludin) | ↓ mRNA + protein | Aged rodent intestine; confirmed in Wu 2026 Aging Cell |
| [[tjp1]] (ZO-1) | ↓ | Aged rodent intestine; human data sparse |
| [[tricellulin]] | ↓ | Decreased in aged mouse intestinal tissue (Wu 2026) [^wu2026] #gap/unsourced — FMT-to-GF-mouse design not confirmed in abstract; verify against full text |
| [[cldn2]] | ↑ (pore-forming) | Pro-inflammatory and dysbiosis contexts; increases paracellular flux |
| [[cldn1]] (sealing) | Variable / context-dependent | Aging data conflicting |
| [[muc2]] | ↓ expression + secretion | Goblet cell depletion in aged mouse colon |

### IgA changes

Secretory IgA production and repertoire shift with age. Total sIgA levels may remain numerically stable while IgA avidity and cross-reactivity against commensals changes (increased autoreactive IgA coating of previously tolerated commensals; functional "microbiome IgA coating" pattern shifts). This is a mechanistically plausible but incompletely characterized aging change. #gap/no-mechanism

## Barrier loss → inflammaging cascade

The best-supported downstream consequence of increased gut permeability in aging is the **LPS-TLR4-NFkB** inflammaging loop:

```
Dysbiosis → ↑ Gram-negative taxa → ↑ luminal LPS
       ↓
Barrier dysfunction (↓ tight junctions, ↓ mucus)
       ↓
LPS translocation into portal and systemic circulation
       ↓
TLR4 activation on monocytes/macrophages/hepatocytes
       ↓
NFkB activation → TNF-α, IL-6, IL-1β production
       ↓
Systemic chronic low-grade inflammation ("inflammaging")
       ↓
Accelerated hallmark progression (cellular senescence, mitochondrial dysfunction, etc.)
```

Evidence from Thevaranjan 2017 [^thevaranjan2017]: circulating MDP (muramyl dipeptide, a bacterial translocation marker) and pro-inflammatory cytokines TNF and IL-6 were higher in aged conventional vs. germ-free aged mice. Anti-TNF treatment (adalimumab) in old mice altered microbiota composition, indicating a reciprocal relationship between TNF-driven inflammation and dysbiosis; however, anti-TNF treatment had no measurable effect on FITC-dextran intestinal permeability (data not shown in paper — barrier rescue was not demonstrated by TNF blockade alone). The cascade is bidirectional — systemic inflammation (SASP, senescent-cell-derived cytokines) feeds back to increase barrier permeability via cytokine disruption of tight junctions (TNF-α directly downregulates [[ocln]] and [[tjp1]] via NFkB/myosin light chain kinase pathways; see [[nf-kb]]).

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (LPS elevation + permeability) conserved in humans? | yes |
| Causal direction confirmed in humans? | partial — Thevaranjan 2017 is mouse-only; human causality inferred from FMT studies + LBP associations |

## Measurement

| Assay | What it measures | Caveats |
|---|---|---|
| **Lactulose:mannitol (L:M) ratio** | Paracellular (lactulose) vs. transcellular (mannitol) flux | Gold-standard functional test; requires dietary restriction before dosing; standardization varies across labs |
| **FITC-dextran gavage** | Paracellular flux of 4-kDa FITC-dextran into blood | Mouse-only gold standard; not used in humans |
| **Plasma LPS / LBP** | Systemic endotoxin burden | Proxy; confounded by meal timing, smoking, systemic infection |
| **Plasma sCD14** | Monocyte LPS-response activation | More stable than LPS; commonly used surrogate |
| **Serum zonulin** | Claimed regulator of TJ opening | Highly controversial; leading commercial "zonulin" ELISA detects complement C3 + properdin, not true zonulin (haptoglobin-2 precursor); results not interpretable as zonulin [^odenwald2020] #gap/contradictory-evidence |
| **Claudin-3 in urine/stool** | TJ protein shedding | Research-stage; not yet validated for aging context |

**Zonulin note:** serum/plasma "zonulin" assays sold commercially detect complement components rather than the actual zonulin protein (haptoglobin-2 precursor). Multiple review papers from 2020 onward have documented this measurement artifact [^odenwald2020]. Claims derived from commercial zonulin ELISA should be interpreted with extreme caution. #gap/contradictory-evidence

## Interventions targeting the aging gut barrier

| Intervention | Mechanism | Evidence quality |
|---|---|---|
| **Dietary fiber / butyrate** | SCFA production → TJ upregulation, MUC2 secretion, colonocyte energy | Preclinical strong; human RCT data on barrier endpoints sparse #gap/needs-human-replication |
| **[[akkermansia-muciniphila]] supplementation** | Restores Amuc_1100 outer-membrane protein → TJ induction; increases MUC2-secreting goblet cell density | Human RCT (Depommier 2019): pasteurized A. muciniphila 10¹⁰ CFU/day × 3 months in overweight adults improved insulin sensitivity +28.62% and significantly reduced plasma LPS (secondary endpoint) vs. placebo; L:M ratio (gut barrier permeability) was not measured [^depommier2019]; barrier rescue demonstrated in mouse models #gap/needs-human-replication for direct barrier-permeability endpoints |
| **[[spermidine]]** | Polyamine → autophagy induction in epithelial cells; supports tight junction turnover | Preclinical; human barrier data absent #gap/needs-human-replication |
| **FMT from young donors** | Compositional reset of microbiome → restores SCFA producers + reduces pathobionts | Killifish lifespan extension (Smith 2017); Thevaranjan 2017 showed colonization with aged microbiota increased permeability in GF mice but did NOT demonstrate young-donor FMT as a permeability rescue [^thevaranjan2017]; human gut barrier endpoint data limited — see [[interventions/dietary/fmt]] |
| **Indole / AHR ligands (tryptophan)** | AHR activation → IL-22 → Reg3γ, defensin, barrier gene upregulation | Preclinical mouse models; human supplementation trials in planning stages #gap/needs-human-replication |
| **[[hyaluronic-acid|HMW-HA]] augmentation** ([[has2|HAS2]] gene therapy) | HA is a structural component of the mucus layer; HMW-HA → [[cd44|CD44]] signaling supports epithelial integrity, goblet/Paneth cell maintenance, and ISC organoid-forming capacity | Zhang 2023 nmrHas2 transgenic mice maintained low FITC-dextran permeability into old age (n=12), had increased goblet/Paneth cell counts, and exogenous HMW-HA at 20 µg/mL rescued organoid formation in old creER mouse crypts (LMW-HA did not) [^zhang2023]; preclinical only; AAV-HAS2 not yet developed #gap/needs-human-replication |

### HMW-HA and gut barrier preservation — Zhang 2023 evidence

The Zhang et al. 2023 (*Nature*) nmrHas2 transgenic mouse study identified intestinal barrier preservation as one of the dominant healthspan benefits of HMW-HA augmentation [^zhang2023]. In old mice (~24 months), nmrHas2 transgenic animals showed:
- **FITC-dextran permeability** (4 kDa, gavage): old nmrHas2 (n=12) maintained youthful low permeability, while old creER controls (n=12) had significantly increased gut leakiness (p<0.05)
- **Goblet cells**: increased counts in both small intestine and colon vs age-matched creER controls (n=10/group)
- **Paneth cells**: elevated counts in young nmrHas2 mice; the age-related increase pattern was blunted compared to creER (p<0.05)
- **Intestinal stem cells (LGR5+)**: counts were similar between genotypes at both young and old ages — the barrier benefit is not driven by ISC expansion
- **Organoid formation rescue**: crypts from old creER mice produced far fewer organoids than young or nmrHas2 crypts (n=3/group, p<0.05). **Adding exogenous HMW-HA (20 µg/mL) to the culture medium rescued organoid formation in old creER crypts; LMW-HA did NOT** — direct demonstration that HMW-HA itself (not the gene-therapy delivery) restores ISC functional capacity, and that the [[hyaluronic-acid|MW-direction-of-effect]] is preserved at the gut-epithelial level

This positions HMW-HA / [[has2|HAS2]] augmentation as a candidate intervention class for gut-barrier preservation in aging, complementing the SCFA/butyrate, [[akkermansia-muciniphila]], and AHR-ligand routes already documented above. Mechanistically, HA is a known component of the mucus layer architecture and supports epithelial-junction stability via CD44 cluster signaling. The aging-relevant variable is the balance of HAS2 synthesis vs HYAL hyaluronidase degradation — Zhang 2023 explicitly attributes the only-"mild" HA accumulation in nmrHas2 mouse tissues to higher endogenous mouse HYAL activity than naked mole-rats. See [[studies/zhang-2023-nmrhas2-mouse-healthspan]] for full quantitative detail and the broader anti-inflammaging context. #gap/needs-human-replication

### Akkermansia — barrier specificity caveat

The Depommier 2019 human RCT [^depommier2019] is the strongest human evidence for A. muciniphila supplementation, but its primary endpoints were metabolic (insulin sensitivity, cholesterol, body weight) — not intestinal barrier function. Barrier-specific biomarkers (L:M ratio, LBP, sCD14) were not the primary study outcomes. Barrier rescue in humans by A. muciniphila supplementation requires dedicated endpoint validation. #gap/needs-human-replication

## Limitations and gaps

- **Quantitative human barrier data in aging are sparse.** Most permeability data in aging come from mouse models or cross-sectional human studies with inadequate standardization. A well-powered longitudinal cohort tracking L:M + LBP + sCD14 across the 50–80-year age range is needed. #gap/needs-human-replication
- **Causality directionality.** Barrier dysfunction and dysbiosis are mutually reinforcing; whether aging-associated barrier loss is driven primarily by compositional microbiome shifts or by cell-intrinsic epithelial aging (senescent enterocytes, ISC dysfunction) remains unresolved. #gap/no-mechanism
- **Tissue heterogeneity.** The small intestine and colon have distinct tight-junction protein profiles and different vulnerability to age-related changes; most mouse aging data are from cecum/colon, which may not represent small-intestinal aging accurately.
- **Measurement standardization.** No validated clinical biomarker for "intestinal barrier aging" exists that is simultaneously sensitive, specific, and practical for population-level aging studies. #gap/needs-replication
- **Zonulin assay invalidity.** The most widely used commercial "barrier biomarker" does not measure what it claims [^odenwald2020]. This has contaminated a substantial portion of the published literature. #gap/contradictory-evidence
- **AHR tryptophan axis data in human aging.** The mechanistic link from reduced microbial tryptophan catabolism → attenuated AHR → reduced IL-22/Reg3γ → barrier decline is inferred from mouse models and correlation data; no controlled human study has directly tested this axis in healthy aging. #gap/no-mechanism

## Footnotes

[^thevaranjan2017]: doi:10.1016/j.chom.2017.03.002 · Thevaranjan N et al. · *Cell Host & Microbe* 2017 · in-vivo · aged (18–22 mo) vs. young (10–14 wk) C57BL/6 mice; germ-free aged mice maintained youthful permeability and lower systemic MDP/TNF/IL-6 vs. conventional aged controls; aged-microbiota colonization of GF mice increased paracellular permeability (n=6–8 per microbiota group; GF colonization n=23 total); permeability measured by FITC-dextran gavage; bacterial translocation measured by MDP (muramyl dipeptide) bioassay — circulating LPS was NOT the measured bacterial product marker · note: 2018 correction published (doi:10.1016/j.chom.2018.03.006) clarifying blinding and FITC-dextran dose (0.8 mg/ml, not 80 mg/ml) · cited >1175 times (OpenAlex 2026-05-07)

[^depommier2019]: doi:10.1038/s41591-019-0495-2 · Depommier C et al. · *Nature Medicine* 2019 · rct · n=40 enrolled, 32 completed; overweight/obese insulin-resistant adults with metabolic syndrome; 3-arm (placebo / live A. muciniphila / pasteurized A. muciniphila) · 10¹⁰ CFU/day × 3 months · pasteurized arm vs. placebo: insulin sensitivity +28.62±7.02% (P=0.002), insulinemia −34.08±7.12% (P=0.006), total cholesterol −8.68±2.38% (P=0.02) · plasma LPS was a secondary outcome and was significantly reduced by pasteurized A. muciniphila; gut barrier (L:M ratio) was not measured · local PDF available

[^shimizu2022]: doi:10.1007/s11357-021-00398-y · Shimizu Y et al. · *GeroScience* 2022 · observational (cross-sectional) · n=196 community-dwelling Japanese adults (35–81 yr); HD5 fecal concentration negatively correlated with age (r = −0.307, p <0.001, Pearson's correlation); elderly (>70 yr, n=64) mean HD5 1.82±1.47 ng/mL vs. middle-aged (≤70 yr, n=132) 2.58±1.51 ng/mL (p<0.001, unpaired Student's t-test); no sex difference in HD5 levels · model: human · DOSANCO Health Study cohort

[^peng2009]: doi:10.3945/jn.109.104638 · Peng L et al. · *J Nutr* 2009 · in-vitro · Caco-2 monolayers; butyrate treatment increased AMPK activity and accelerated tight junction assembly (ZO-1 and occludin reorganization) as measured by TER and inulin permeability; AMPK inhibitor compound C abolished the butyrate-induced TER increases; demonstrates AMPK-mediated (not HDAC-mediated) mechanism for butyrate TJ enhancement · model: Caco-2 cell culture

[^schoultz2020]: doi:10.3390/cells9081909 · Schoultz I, Keita AV · *Cells* 2020 · review · comprehensive overview of intestinal barrier structure + TJ protein biology + permeability measurement methods; n/a (review); cited >423 times

[^odenwald2020]: doi:10.1136/gutjnl-2020-323026 · Odenwald MA, Turner JR · *Gut* 2020 · review · documents that commercial "zonulin" ELISAs detect complement C3 and properdin rather than haptoglobin-2 precursor (true zonulin); advises against use of commercial kits for permeability studies

[^wu2026]: doi:10.1111/acel.70533 · PMID:42083126 · PMCID:PMC13139644 · Wu F, Zhang M, Wu J et al. (Fang B senior author) · *Aging Cell* 2026 · in-vivo · aged mouse intestinal tissue showed increased SASP markers (IL-1β, TNF-α, p16) and decreased occludin and tricellulin tight-junction protein levels, plus microbiome enrichment for inflammatory taxa (Desulfovibrio, Candidatus_Saccharimonas) and decreased fecal IgA; RNA-seq of follicle-associated epithelium showed 578 DEGs including downregulation of Gp2/Ccl28; primary focus was M cell and mucosal immune aging, not an FMT-to-GF experiment — the "aged microbiota transferred to young germ-free mice" framing in the wiki body text is NOT supported by the abstract and should be verified against the full text · PDF not in a local paper archive (DOI not indexed); PMC full text available via PMCID above #gap/unsourced
[^zhang2023]: [[studies/zhang-2023-nmrhas2-mouse-healthspan]] · doi:10.1038/s41586-023-06463-0 · PMID 37612507 · PMC10666664 · Zhang Z, Tian X, Lu JY et al. (Gorbunova/Seluanov labs) · *Nature* 2023; 621(7977):196-205 · in-vivo · n=12 (FITC-dextran old), n=10/group (goblet/Paneth/ISC counts), n=3/group (organoid formation) · randomized · p<0.05 (multiple endpoints) · tamoxifen-inducible nmrHas2 transgenic mice (C57BL/6 × R26-CreERT2) showed maintained low intestinal permeability into old age, increased goblet/Paneth cells, and exogenous HMW-HA (20 µg/mL) rescue of old-mouse crypt organoid formation (LMW-HA negative control did not rescue); first whole-animal demonstration that HMW-HA augmentation preserves gut barrier function in aging · archive: not in OA-package distribution (PMC author manuscript); verified against PMC10666664 HTML
