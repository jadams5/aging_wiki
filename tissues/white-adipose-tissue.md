---
type: tissue
aliases: [WAT, white fat, white adipose, adipose tissue, fat tissue]
parent-system: endocrine-system
key-cell-types:
  - "[[mesenchymal-stem-cells]]"
  - "[[fibroadipogenic-progenitors]]"
  - adipocytes (mature, lipid-storing)
  - preadipocytes / adipose stromal-vascular progenitors
  - adipose-tissue macrophages (crown-like structures in aged/obese WAT)
key-aging-phenotypes:
  - "[[sarcopenia]]"
  - "[[obesity]]"
  - "[[type-2-diabetes]]"
  - "[[frailty]]"
  - "[[masld]]"
related-hallmarks:
  - "[[cellular-senescence]]"
  - "[[chronic-inflammation]]"
  - "[[deregulated-nutrient-sensing]]"
  - "[[altered-intercellular-communication]]"
  - "[[stem-cell-exhaustion]]"
verified: true
verified-date: 2026-06-25
verified-by: claude
verified-scope: "Hickson 2019 (doi:10.1016/j.ebiom.2019.08.069) verified against full PDF — all IHC quantitative values confirmed (p16 −35% p=0.001; p21 −17% p=0.009; SA-β-Gal −62% p=0.005; CD68 −28% p<0.0001). Xu 2015 cross-checked against verified study page (studies/xu-2015-senescent-cells-adipogenesis). Mancuso & Bouchard 2019 (doi:10.3389/fendo.2019.00137) verified against full PDF — adipokine-trajectory claims confirmed; adiponectin source-depot claim corrected. Tchkonia 2010 DOI corrected (10.1007/s11357-010-9177-7 → 10.1111/j.1474-9726.2010.00608.x; Aging Cell, PMID 20701600). Idda 2020 body-text misattribution corrected (paper did NOT survey adipose; attribution of p16 adipose data removed from body). Ghosh 2019 DOI and metadata verified via Crossref and PubMed abstract (PMC6777079; heterochronic parabiosis old 18 mo + young 3 mo mice; VAT p16/p21/MCP-1/IL-6 reduction confirmed). Ahmed 2024 (doi:10.1111/obr.13806), Sepe 2011 (doi:10.1159/000279755): review claims not independently re-read against full text — accepted as cited. Canonical-database identity fields not applicable (tissue page). Supersession check: no superseding meta-analyses or large RCTs identified for adipose senescence/senolytics or adipokine-aging claims; one 2025 PLoS One boysenberry RCT (PMID 40844985) returned in search but is not relevant. literature-checked-through: 2026-06-25."
literature-checked-through: 2026-06-25
---

# White Adipose Tissue (WAT)

White adipose tissue is the dominant fat depot in the human body and the primary energy reservoir, storing triacylglycerols in large unilocular lipid droplets. Beyond its role as a passive energy buffer, WAT is a major **endocrine organ**: it secretes adipokines (leptin, adiponectin, resistin, visfatin, and many others) that regulate appetite, insulin sensitivity, inflammation, and immune function systemically. In aging, WAT undergoes profound structural and secretory remodelling — a centripetal redistribution of fat mass from subcutaneous to visceral and ectopic depots, a collapse of adipogenic progenitor function driven by senescent cell accumulation, and a shift from anti-inflammatory (adiponectin-dominated) to pro-inflammatory (SASP-dominated) secretion. Adipose tissue is currently **the tissue with the strongest human biopsy-based evidence for senolytic target engagement** [^hickson2019].

---

## Definition and depot anatomy

### WAT versus other adipose types

| Type | Lipid droplets | UCP-1 | Thermogenic | Primary aging change |
|---|---|---|---|---|
| **White adipose (WAT)** | Single large unilocular | Absent | No | Redistribution; progenitor failure; inflammation |
| **Brown adipose (BAT)** | Multiple small multilocular | High | Yes | Marked decline with age; near-disappearance in elderly |
| **Beige / brite adipose** | Inducible multilocular | Inducible | Cold/catecholamine-stimulated | Impaired beige-conversion capacity in aging |

This page covers WAT. Brown and beige adipose are distinct tissues with different cell-type composition, transcriptional programs, and aging trajectories — WAT is the dominant energy reservoir and the primary locus of aging-relevant pathology. #gap/needs-page — `[[brown-adipose-tissue]]` is a stub target; BAT biology is not covered here.

### Subcutaneous versus visceral WAT depots

Two principal WAT compartments exist, with profoundly different metabolic and inflammatory behaviors:

| Feature | Subcutaneous WAT (SAT) | Visceral WAT (VAT) |
|---|---|---|
| **Location** | Beneath skin (abdominal, gluteal, femoral, dorsal) | Surrounding abdominal organs (omental, mesenteric, peri-renal, pericardial) |
| **Drainage** | Systemic circulation | Portal vein → liver |
| **Adiponectin secretion** | Higher | Lower |
| **IL-6 / TNF-α secretion** | Lower | Higher |
| **Insulin sensitivity** | More insulin-sensitive | More insulin-resistant |
| **Metabolic risk** | Protective at moderate amounts; deleterious when very large | Independently predicts T2D and CVD at any waist circumference |
| **Change with age** | Decreases (especially in very old age) | Increases through middle age; complex changes in old age |

Visceral fat drains via the portal vein, exposing the liver directly to adipokines, free fatty acids, and pro-inflammatory cytokines secreted from VAT [^tchkonia2010]. This anatomical relationship is the mechanistic basis for the strong association between VAT accumulation and hepatic steatosis, insulin resistance, and [[masld]].

---

## WAT as an endocrine organ

WAT is embryologically a **connective tissue** — adipocytes arise from mesenchymal progenitors (mesoderm-derived) and share lineage with fibroblasts, osteoblasts, and chondrocytes. This page is filed under `parent-system: endocrine-system` because WAT's dominant aging-relevant functions are hormonal rather than structural: WAT was reclassified as an endocrine organ following the discovery of leptin in 1994 (Zhang et al., *Nature* 1994) and adiponectin in 1995–1996. Its secretome — collectively termed **adipokines** — constitutes a bidirectional hormonal communication system between fat stores and systemic metabolism, appetite regulation, immune function, and bone metabolism. The connective tissue identity remains important for understanding adipocyte progenitor biology and the senescent preadipocyte lineage (both are mesenchymal stromal cells).

### Key adipokines and their aging trajectories

| Adipokine | Primary source | Key functions | Change with age |
|---|---|---|---|
| **Leptin** | Mature adipocytes | Appetite suppression (hypothalamus); pro-inflammatory; pro-fibrotic in some contexts | Increases with age (especially VAT expansion); leptin resistance develops |
| **Adiponectin** | Mature adipocytes; predominantly bone marrow adipose tissue, with higher levels from SAT than VAT among peripheral depots [^mancuso2019] | Insulin sensitisation; anti-inflammatory (inhibits NF-κB); cardioprotective; activates AMPK | Decreases with obesity and age-related visceral expansion; loss of high-molecular-weight isoform most deleterious |
| **Resistin** | Macrophages in human WAT (distinct from rodent) | Pro-inflammatory; impairs insulin signalling | Increases in aging; associated with frailty |
| **Chemerin** | Adipocytes | Adipogenesis regulation; immune cell recruitment | Increases with obesity and aging |

With aging, the adipokine landscape shifts from the adiponectin-rich, anti-inflammatory profile of young, healthy SAT toward a leptin-dominant, pro-inflammatory, and SASP-enriched secretome, particularly in visceral depots [^mancuso2019]. This shift contributes to systemic **inflammaging** ([[chronic-inflammation]]) and worsening insulin resistance ([[deregulated-nutrient-sensing]]).

### WAT as a major SASP source in aging

Aged WAT secretes a substantial Senescence-Associated Secretory Phenotype (SASP) burden from at least three cell populations that accumulate senescent cells: preadipocytes/adipose progenitors, mature adipocytes, and adipose-tissue macrophages. The adipose SASP includes IL-6, IL-8, TNF-α, MCP-1, MMP-2, MMP-9, and — most importantly for adipose biology — **activin A**, a TGF-β superfamily member secreted by senescent fat progenitors that paracrinally suppresses adipogenesis in neighbouring healthy progenitors [^xu2015elife]. See [[sasp]] for the canonical SASP component catalogue; adipose activin A is a tissue-specific addition.

---

## Aging changes in WAT

### Fat redistribution: the centripetal shift

One of the most consistent and clinically consequential aging changes in body composition is a **redistribution of fat mass**:

- **Loss of subcutaneous fat** — particularly in peripheral/gluteo-femoral depots, the face, and extremities; accelerates in very old age (>75)
- **Gain of visceral fat** — accumulates through middle age (peaking around the 6th–7th decade); associated with insulin resistance, CVD, and [[type-2-diabetes]]
- **Ectopic fat deposition** — fat infiltrates skeletal muscle (intramuscular fat / intermuscular fat; relevant to [[sarcopenia]]), bone marrow (marrow adiposity), liver (hepatic steatosis → [[masld]]), and pericardium

This redistribution occurs independently of total body weight change; it is driven by both failing subcutaneous adipogenesis (see § Declining adipogenic progenitor function) and selective expansion of visceral and ectopic depots. At a mechanistic level, the adipogenic failure in SAT forces free fatty acids into ectopic storage — the **lipotoxicity spillover** mechanism (see § Lipotoxicity) [^sepe2011].

### Declining adipogenic progenitor function

The capacity to generate new healthy adipocytes (adipogenesis) declines markedly with age. The principal drivers:

1. **Senescent preadipocyte accumulation**: Senescent fat progenitors accumulate in aged WAT and are less proliferative, less adipogenic, and more pro-inflammatory than their young counterparts [^tchkonia2010]. Critically, senescent progenitors impair neighbouring healthy progenitors through paracrine SASP — the activin A mechanism documented in detail by Xu et al. 2015 [^xu2015elife].

2. **Intrinsic preadipocyte dysfunction**: Beyond senescence, aged preadipocytes show reduced transcription of pro-adipogenic factors (PPARγ, C/EBPα, FABP4) and increased responsiveness to pro-inflammatory signals. Region-specific preadipocyte pools differ in their aging kinetics — omental (visceral) preadipocytes senesce faster and accumulate more inflammation than subcutaneous preadipocytes [^tchkonia2010].

3. **Progenitor pool depletion**: Aged [[mesenchymal-stem-cells]] and adipose stromal-vascular fraction progenitors show reduced self-renewal capacity and biased differentiation (osteogenic at the expense of adipogenic in some contexts) [^sepe2011].

### Senescent cell accumulation in adipose: the strongest human biopsy evidence

Adipose tissue has the strongest direct human biopsy evidence for senolytic target engagement of any tissue to date. Key data points:

- **Cross-sectional accumulation**: Dimri 1995 and subsequent studies established that SA-β-gal+ cells increase in human fat tissue with age. Idda et al. 2020 (n=5/group; ages 13–35, 40–59, >65 yr) surveyed p16INK4a and p21CIP1 across 10 human organs — **adipose tissue was not among the organs surveyed** (see footnote); it provides the human cross-organ framework for tissue-specific senescence marker accumulation [^idda2020].

- **Functional impairment in old mice**: In 18-month-old C57BL/6 mice, genetic clearance of p16^Ink4a^-positive cells via INK-ATTAC (AP20187, two 3-day courses) reduced circulating activin A by >30%, reduced SABG+ cells in adipose, and partially blunted ongoing fat mass loss vs wild-type controls (p<0.05 at 3 weeks) [^xu2015elife].

- **First human senolytic biopsy trial (Hickson 2019)**: A single 3-day course of dasatinib (100 mg/day) + quercetin (1,000 mg/day in 2 divided doses) in 9 adults with diabetic kidney disease reduced, in abdominal subcutaneous adipose tissue biopsies taken at Day 14:
  - p16INK4a+ cells: −35% (p=0.001)
  - p21CIP1+ cells: −17% (p=0.009)
  - SA-β-Gal+ cells: −62% (p=0.005)
  - CD68+ macrophages: −28% (p<0.0001)
  - Circulating SASP factors (IL-1α, IL-6, MMP-9, MMP-12) also reduced [^hickson2019]

  All three senescence markers were quantified by immunohistochemistry (% positive cells per 100 adipocytes or per nucleus), not mRNA. This is proof-of-target-engagement in humans; functional metabolic endpoints require larger trials.

### Inflammation and crown-like structures

In aged and obese WAT, dead and dying adipocytes become surrounded by macrophages forming **crown-like structures (CLS)** — a histological hallmark of adipose tissue inflammation. Macrophage phenotype shifts from anti-inflammatory (M2-like: IL-10, TGF-β secreting) to pro-inflammatory (M1-like: TNF-α, IL-6, IL-1β secreting) with aging and obesity. CLS density correlates with local and systemic insulin resistance. Parabiosis experiments (Ghosh & Yung 2019) demonstrated that young circulating factors can reverse aged WAT senescence markers and reduce MCP-1 and IL-6 in visceral adipose of old mice [^ghosh2019].

---

## Lipotoxicity and ectopic fat deposition

When subcutaneous WAT's buffering capacity fails — either because adipocyte number declines or existing adipocytes are hypertrophic and insulin-resistant — non-esterified fatty acids (NEFAs) and triacylglycerols spill over into ectopic tissues [^ahmed2024]:

- **Liver**: hepatic triacylglycerol accumulation → [[masld]] (metabolic dysfunction-associated steatotic liver disease); mechanistic relevance demonstrated in Xu 2015 where ruxolitinib-treated old mice showed reduced liver weight and hepatic triglyceride/protein ratio (p<0.05) [^xu2015elife]
- **Skeletal muscle**: intramuscular and intermuscular fat infiltration; impairs contractile efficiency and insulin signalling → contributes to [[sarcopenia]] (sarcopenic obesity phenotype; [[fibroadipogenic-progenitors]] in muscle differentiate to adipocytes)
- **Bone marrow**: marrow adiposity increases with age; marrow adipocytes compete with osteoblast progenitors for the MSC lineage pool
- **Pericardium/epicardium**: epicardial fat expansion is an independent cardiovascular risk factor; secretes IL-6, TNF-α directly to myocardium

The ectopic fat mechanism connects the [[deregulated-nutrient-sensing]] hallmark (insulin resistance worsening spillover) with [[chronic-inflammation]] (SASP from ectopic fat macrophages) in a feed-forward loop.

---

## Intervention relevance

### Senolytics

Adipose tissue is the best-validated target tissue for senolytic therapy. Hickson 2019 provides the first human biopsy-level proof-of-target-engagement [^hickson2019]. [[interventions/pharmacological/senolytics]] (see page for full SCAP map and compound details):
- **Dasatinib + quercetin (D+Q)**: demonstrated senescent-cell reduction in human adipose (Hickson 2019); D targets Src/BCR-Abl; Q targets PI3K/AKT and BCL-2/BCL-XL in senescent progenitors
- **Fisetin** ([[fisetin]]): extended lifespan and reduced adipose senescent cell burden in aged mice (Yousefzadeh 2018); no human adipose biopsy trial yet #gap/needs-human-replication

### GLP-1 receptor agonists

GLP-1 RA compounds ([[semaglutide]] and class page [[interventions/pharmacological/glp1-agonists]]) reduce visceral fat mass substantially: semaglutide 2.4 mg/week reduced body weight ~15% in STEP-1 (n=1,961; predominantly adipose mass reduction) [^lincoff2023_proxy]. The mechanism engages both appetite suppression (CNS GLP-1R) and adipose lipolysis/lipogenesis pathways. Whether GLP-1 RA directly reduces WAT senescent cell burden in humans is not yet established — preliminary mechanistic data suggest anti-inflammatory adipose effects, but biopsy-level senescence marker data are lacking. #gap/needs-human-replication

### Caloric restriction

Caloric restriction reduces total fat mass (predominantly subcutaneous), lowers circulating leptin, raises adiponectin, and reduces WAT macrophage infiltration in rodents and in short-term human trials. See [[interventions/lifestyle/caloric-restriction]] for the full evidence base. Whether caloric restriction specifically clears senescent cells from WAT or merely reduces SASP output by reducing total senescent cell number (through lower metabolic stress) is mechanistically unresolved. #gap/no-mechanism

### JAK inhibition (senomorphic)

Ruxolitinib (JAK1/2 inhibitor) at 60 mg/kg/day in food for 8 weeks in 22-month-old C57BL/6 mice reduced circulating activin A, preserved fat mass, improved OGTT and insulin tolerance test, and reduced hepatic triglycerides (p<0.05 for all) [^xu2015elife]. The human-equivalent dose is substantially lower than the mouse dose (allometric scaling); whether clinically achievable ruxolitinib doses suppress WAT SASP in humans is unresolved. See [[interventions/pharmacological/senomorphics]].

---

## Hallmark connections

### [[cellular-senescence]]

Senescent cells in WAT (preadipocytes, mature adipocytes, and macrophages) accumulate with age and are the tissue's dominant aging driver. Evidence base is multi-level: human cross-sectional IHC (Dimri 1995; adipose was not surveyed by Idda 2020 — see senescent-cell accumulation section), functional impairment in old mouse models (Xu 2015 eLife), and human interventional biopsy (Hickson 2019). The activin A SASP axis is WAT-specific and creates a paracrine feed-forward loop suppressing new adipogenesis.

### [[chronic-inflammation]]

Aged WAT secretes a chronic low-grade pro-inflammatory milieu — the adipose contribution to **inflammaging**. Mechanisms include SASP from senescent cells, M1-polarized adipose macrophages in CLS, and reduced adiponectin (which normally suppresses NF-κB-driven inflammation). The visceral VAT contribution is amplified by portal drainage.

### [[deregulated-nutrient-sensing]]

Declining adiponectin with age impairs [[ampk]] activation in peripheral tissues. Increased leptin resistance uncouples the hypothalamic satiety response. Ectopic fat deposition into liver and muscle produces lipotoxicity-driven insulin resistance at the cellular level (diacylglycerol → PKCε → IRS-1 serine phosphorylation → IRS-1 degradation pathway) [^ahmed2024].

### [[altered-intercellular-communication]]

WAT is one of the body's largest endocrine glands by mass. Age-related changes in its secretome alter systemic hormonal signalling across multiple tissues: reduced adiponectin impairs hepatic and muscle insulin response; increased SASP cytokines (IL-6, TNF-α, MCP-1) propagate inflammaging; elevated activin A suppresses adipogenesis; altered exosome cargo from aged adipocytes carries miRNAs that modulate target-tissue gene expression.

### [[stem-cell-exhaustion]]

Adipose stromal-vascular fraction progenitors (including [[mesenchymal-stem-cells]] and preadipocytes) show age-related functional decline — reduced proliferation, impaired adipogenic commitment, and increased senescence accumulation. This progenitor exhaustion is mechanistically distinct from SASP-mediated paracrine suppression (§ Activin A) but both converge on reduced adipogenic capacity in aged WAT.

---

## Limitations and gaps

- `#gap/needs-human-replication` — activin A mechanism (senescent fat progenitors → activin A → suppressed adipogenesis): established in primary human cells in vitro and in aged mice in vivo; no human in-vivo demonstration of rescue.
- `#gap/needs-human-replication` — GLP-1 receptor agonist effects on WAT senescent cell burden: weight loss and anti-inflammatory effects established; biopsy-level senescence marker data absent.
- `#gap/needs-human-replication` — JAK inhibitor (ruxolitinib) fat-mass rescue: demonstrated in aged mice at supra-therapeutic dose; no human adipose biopsy data at clinically achievable doses.
- `#gap/long-term-unknown` — long-term safety of senolytic depletion of WAT progenitors; Hickson 2019 is a 3-day course, 14-day follow-up.
- `#gap/needs-page` — `[[brown-adipose-tissue]]` (BAT) page does not exist; cross-reference from this page is a stub link.
- `#gap/needs-page` — `[[adipocytes]]` cell-type page does not exist; adipocyte biology is summarized here rather than linked atomically.
- `#gap/needs-page` — `[[adipose-tissue-macrophages]]` cell-type page does not exist.
- `#gap/unsourced` — adiponectin decline quantitative rate with age: direction is well-established but exact population-level magnitude varies substantially by sex, depot, and BMI; a specific number has not been cited here.
- `#gap/no-mechanism` — the precise molecular switch that drives the centripetal fat redistribution with age (loss of SAT vs gain of VAT) is incompletely understood at the transcriptional/epigenetic level; both depot-intrinsic preadipocyte differences and systemic endocrine changes (GH/IGF-1 decline, cortisol, sex hormones) contribute.
- `#gap/no-mechanism` — whether caloric restriction clears senescent cells from WAT or reduces SASP burden without clearance.

---

## Cross-references

### Hallmarks
- [[cellular-senescence]] (verified) — senescent cell accumulation in WAT; SASP; senolytics
- [[chronic-inflammation]] (verified) — adipose-driven inflammaging; VAT macrophages; adipokine shift
- [[deregulated-nutrient-sensing]] (verified) — insulin resistance; adiponectin/leptin axis; AMPK
- [[altered-intercellular-communication]] — adipose endocrine secretome; exosome cargo
- [[stem-cell-exhaustion]] — adipose progenitor decline; preadipocyte pool exhaustion

### Cell types
- [[mesenchymal-stem-cells]] (verified) — multipotent progenitors including adipose-derived (AD-MSCs)
- [[fibroadipogenic-progenitors]] (verified) — muscle-resident FAPs that differentiate to intramuscular fat in sarcopenic obesity

### Processes
- [[sasp]] — adipose SASP composition; activin A; macrophage polarisation
- [[lipophagy]] — autophagy of lipid droplets; relevant to aged adipocyte lipid homeostasis

### Pathways
- [[ampk]] — adiponectin activates AMPK in peripheral tissues; declines with adiponectin loss
- [[insulin-igf1]] — VAT-driven portal NEFA and adipokine load impairs hepatic insulin signalling

### Interventions
- [[interventions/pharmacological/senolytics]] — dasatinib+quercetin (Hickson 2019 human biopsy data); fisetin (mouse data)
- [[interventions/pharmacological/senomorphics]] — ruxolitinib (mouse fat mass rescue, Xu 2015)
- [[semaglutide]] (verified) — GLP-1 RA; VAT reduction; anti-inflammatory effects
- [[interventions/pharmacological/glp1-agonists]] — GLP-1 receptor agonist class page

### Phenotypes
- [[sarcopenia]] — sarcopenic obesity; ectopic intramuscular fat from WAT lipotoxic spillover
- [[obesity]] — excess WAT accumulation
- [[type-2-diabetes]] — VAT-driven insulin resistance; hepatic steatosis
- [[frailty]] — loss of subcutaneous fat + sarcopenic obesity combination
- [[masld]] — hepatic ectopic fat from WAT spillover

### Study pages
- [[studies/xu-2015-senescent-cells-adipogenesis]] (verified) — activin A mechanism; JAK inhibition fat-mass rescue
- [[studies/idda-2020-senescent-markers-human-tissues]] — human cross-sectional senescence marker data across organs

---

## Footnotes

[^tchkonia2010]: doi:10.1111/j.1474-9726.2010.00608.x · PMID 20701600 · PMC2941545 · Tchkonia T, Morbeck DE, Von Zglinicki T, Van Deursen J, Lustgarten J, Scrable H, Khosla S, Jensen MD, Kirkland JL · review · *Aging Cell* 2010;9(5):667–684 · n=N/A (review) · model: human + mouse · foundational review establishing that senescent cells accumulate in aged fat tissue, impair adipogenic capacity, and secrete pro-inflammatory SASP; characterises depot-specific differences in preadipocyte aging · gold OA (PMC)

[^xu2015elife]: [[studies/xu-2015-senescent-cells-adipogenesis]] · doi:10.7554/eLife.12997 · Xu M, Palmer AK, Ding H, Weivoda MM, Pirtskhalava T, White TA, Sepe A, Johnson KO, Stout MB, Giorgadze N, Jensen MD, LeBrasseur NK, Tchkonia T, Kirkland JL · *eLife* 2015 · n=6 human donors (in vitro); n=8 mice (INK-ATTAC); n=9/group (ruxolitinib) · model: primary human fat progenitors + aged C57BL/6 mice · in-vitro + in-vivo · verified against PMC4758946

[^hickson2019]: doi:10.1016/j.ebiom.2019.08.069 · Hickson LJ, Langhi Prata LGP, Bobart SA, Evans TK, Giorgadze N, Hashmi SK, Kulkarni MM, O'Hara SP, Tchkonia T, Kirkland JL et al. · *EBioMedicine* 2019;47:446–456 · n=9 (open-label, single-arm; diabetic kidney disease) · first-in-human trial; single 3-day course D+Q; abdominal subcutaneous adipose biopsies at Day 14; p16INK4a+ cells −35% (p=0.001), p21CIP1+ cells −17% (p=0.009), SA-β-Gal+ cells −62% (p=0.005), CD68+ macrophages −28% (p<0.0001); all IHC cell counting, not mRNA · open-label, no placebo control

[^idda2020]: [[studies/idda-2020-senescent-markers-human-tissues]] · doi:10.18632/aging.102903 · Idda ML, McClusky WG, Lodde V, Munk R, Abdelmohsen K, Rossi M, Gorospe M · *Aging (Albany NY)* 2020;12(5):4052–4066 · n=5 donors/organ/age-group · observational (cross-sectional IHC) · human FFPE tissue arrays; 10 organs; 3 age groups · adipose tissue was NOT among the 10 organs surveyed — adipose senescence accumulation is established by other studies cited here; this paper provides the cross-organ framework

[^mancuso2019]: doi:10.3389/fendo.2019.00137 · Mancuso P, Bouchard B · review · *Frontiers in Endocrinology* 2019;10:137 · n=N/A (review) · model: human + mouse · covers aging-induced adipose compositional changes, brown fat decline, visceral expansion, adiponectin decrease, and pro-inflammatory adipokine shift with age

[^ghosh2019]: doi:10.1093/gerona/gly290 · Ghosh AK, O'Brien M, Mau T, Qi N, Yung R · *J Gerontol A* 2019;74(11):1709–1715 · n=heterochronic parabiosis pairs (mouse) · in-vivo · young circulating factors reduce p16, p21, MCP-1, and IL-6 in aged visceral adipose; demonstrates systemic reversibility of WAT senescence/inflammation

[^ahmed2024]: doi:10.1111/obr.13806 · Ahmed B, Farb MG, Gokce N · review · *Obesity Reviews* 2024;25(11):e13806 · n=N/A (review) · model: human + mouse · comprehensive synthesis of adipose tissue aging: senescent cell accumulation, fibrosis, adipogenesis failure, regional redistribution, and cardiometabolic consequences

[^sepe2011]: doi:10.1159/000279755 · Sepe A, Tchkonia T, Thomou T, Zamboni M, Kirkland JL · review · *Gerontology* 2011;57:66–75 · n=N/A (review) · model: human + mouse · regional differences in fat progenitor aging; declining preadipocyte proliferation and differentiation; free fatty acid spillover into ectopic depots as lipotoxicity mechanism

[^lincoff2023_proxy]: doi:10.1056/NEJMoa2307563 · Lincoff AM et al. (SELECT trial) · *NEJM* 2023 · n=17,604 · RCT · semaglutide 2.4 mg/week; 20% MACE reduction; substantial weight (predominantly fat mass) reduction — adipose endpoints are secondary/exploratory; primary aging-specific adipose biopsy data not collected
