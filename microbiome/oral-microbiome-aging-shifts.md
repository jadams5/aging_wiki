---
type: process
aliases: [age-related oral dysbiosis, oral microbiota aging changes, oral microbiome compositional shifts, subgingival microbiome aging]
key-proteins: []
pathways: ["[[lps-tlr4-nfkb]]"]
hallmarks: ["[[dysbiosis]]", "[[chronic-inflammation]]"]
selective-variants: []
druggability-tier: 2
caused-by: ["[[immunosenescence]]", "[[cellular-senescence]]"]
causes: ["[[chronic-inflammation]]", "[[periodontitis]]"]
literature-checked-through: 2026-06-12
verified: true
verified-date: 2026-06-12
verified-by: claude
verified-scope: "LaMonte 2018, Sekundo 2022, and An 2020 verified against full PDFs; Ebersole 2018 and Giri 2022 are closed-access — body claims checked against abstracts/Crossref metadata only; tagged #gap/no-fulltext-access at relevant claims. Hajishengallis 2012/2021 PSD/keystone-pathogen framing cross-checked against Crossref metadata; full-text re-read not performed (review papers; mechanism framing confirmed consistent with citations). Supersession check performed (June 2026): no superseding meta-analyses or large RCTs identified for any primary source."
---

# Oral Microbiome Aging Shifts

The **compositional and functional changes** that occur in the human oral microbiome across the adult lifespan, characterized by a progressive dysbiotic shift in the subgingival and supragingival communities — enrichment of anaerobic periodontal pathobionts (the "red complex" triad of [[porphyromonas-gingivalis]], *Tannerella forsythia*, and *Treponema denticola*), increased community pathogenic potential, and reduced ecological resilience. This page is the cohort-level data layer for the [[dysbiosis]] hallmark page, specifically covering the oral niche. It complements [[gut-microbiome-aging-shifts]] and [[skin-microbiome-aging-shifts]] in the microbiome directory.

The central framing for this literature comes from Hajishengallis and colleagues: aging-associated oral dysbiosis is not merely a passive accumulation of pathobionts but an **inflammophilic ecological shift** — a positive feedback loop in which the inflamed gingival crevice environment selects for and sustains the very organisms that perpetuate inflammation [^hajishengallis2021]. This conceptual frame (polymicrobial synergy and dysbiosis, PSD model) supplants the simpler earlier "red complex" taxonomy and has implications for therapeutic design.

## The keystone-pathogen / inflammophilic dysbiosis concept

Hajishengallis and Lamont introduced the **polymicrobial synergy and dysbiosis (PSD) model** of periodontal disease in 2012, arguing that [[porphyromonas-gingivalis]] acts as a **keystone pathogen** — an organism of low relative abundance that orchestrates a systemic shift in community pathogenic potential by subverting host immunity [^hajishengallis2012]. *P. gingivalis* selectively disables complement-mediated bacterial clearance (via C5a receptor manipulation) while preserving TLR2-driven pro-inflammatory signalling; the net effect is a community that persists in an inflammatory environment that would normally clear a simple pathogen [^lamont2015].

The **inflammophilic** concept extends this: the gingival crevicular environment in aging (enriched in heme/iron from gingival bleeding, elevated local temperature, reduced oxygen tension from gingival pocket deepening) **selects for** strict anaerobes and proteolytic species. The oral ecosystem does not drift toward dysbiosis randomly — it is drawn toward a community composition that thrives in inflamed tissue [^hajishengallis2021]. Immunosenescence removes the immunological counterweight that would normally limit this drift.

## Age-associated taxonomic shifts

### Subgingival community — the dominant aging signal

The subgingival niche (periodontal pocket, gingival crevice) carries the most clinically consequential aging-associated shifts. In a pilot cohort of 30 postmenopausal women drawn from the Women's Health Initiative OsteoPerio Study (15 with no periodontitis, 15 with severe periodontitis; mean age 70.5 years, all Caucasian), LaMonte 2018 found substantial differences in subgingival microbiome composition and functional potential between groups: the disease-associated community was enriched for motility (flagellar assembly, bacterial motility proteins), LPS-biosynthesis, and proteolytic-degradation (peptidases, amino acid-related enzymes) gene functions by PICRUSt inference, consistent with a pathobiontic community profile [^lamonte2018]. Species richness (alpha-diversity) was significantly greater in women with periodontitis than without, while species evenness (Shannon index) was not significantly different. Beta-diversity separated the two groups significantly on both unweighted (p=0.002) and weighted (p=0.0001) UniFrac distances.

The red-complex triad remains a useful organizing principle even within the PSD model:

| Taxon | Direction with aging | Mechanism | Evidence |
|---|---|---|---|
| *Porphyromonas gingivalis* | ↑ in periodontal disease; prevalence ↑ with age | Keystone immunosubversion; gingipain-mediated C5a/TLR2 crosstalk | Multiple cross-sectional; PSD model [^hajishengallis2012] |
| *Tannerella forsythia* | ↑ with aging periodontal disease | Anaerobic protease-rich; inflammophilic niche adaptation | Consistent across studies |
| *Treponema denticola* | ↑ with aging periodontal disease | Spirochete; motile; thrives in deep anaerobic pockets | Consistent |
| *Fusobacterium nucleatum* | ↑ in aged subgingival plaque | Coaggregation bridge organism — bridges early and late colonizers; immune subversion | Moderate |
| *Prevotella intermedia* | ↑ with aging/hormonal shifts | Anaerobic; responds to steroid hormones (estrogen/progesterone decline in menopause) | Moderate [^ebersole2018] |
| *Streptococcus* (early colonizers) | Generally stable; relative abundance ↓ as anaerobes expand | Early colonizers; form base for biofilm succession | Moderate |
| *Candida* spp. | ↑ in older and denture-wearing individuals | Immunosenescence-facilitated; denture biofilm niche | Multiple cohorts [^jayaraman2026] |

### Salivary microbiome

The salivary compartment is distinct from the subgingival community and reflects a mixed oral community:

In a Japanese cohort (n=54, elderly nursing home residents vs community-dwelling controls), Ogawa 2018 found **significantly lower microbiota diversity and compositionally distinct communities** in frail elderly compared to controls, with frailty status independently associated with altered salivary microbiota independent of oral hygiene metrics. Community-dwelling healthy older adults clustered separately from institutionalized elders [^ogawa2018].

In 54 centenarians (Sekundo 2022, Journal of Oral Microbiology; Heidelberg Dental Centenarian Study; mean age 101.1±1.6 years, 83.3% female), **microbiome diversity correlated significantly with successful oral aging** — centenarians retaining more natural teeth (≥20 teeth; the WHO "successful oral aging" threshold) had significantly greater alpha-diversity in both supragingival plaque and saliva (p<0.001). Note: this study sampled supragingival plaque and saliva only; subgingival samples were not collected. Most centenarians showed hyposalivation (mean **stimulated** salivary flow rate 0.84±0.55 ml/min; only 26.4% had a normal flow rate of 1–3 ml/min), with low buffering capacity and acidic resting salivary pH. The resting pH was between 5.0 and 5.8 in 46.3% of participants. Salivary pH correlated positively with alpha-diversity in both salivary and plaque samples [^sekundo2022]. This is the best available direct centenarian data for oral microbiome composition.

### Fungal community (oral mycobiome)

Oral *Candida* colonization increases substantially with age, driven by immunosenescence, polypharmacy-induced xerostomia, denture wearing, and reduced salivary antimicrobial peptide (e.g., histatin, lactoferrin) activity. Jayaraman 2026 (Frontiers in Immunology) found that aging correlates with enrichment of oral *Candida* and that *Candida* abundance positively correlates with CD4+FOXP3+ regulatory T cell accumulation and T cell dysfunction at the oral mucosa, in an IL-6-dependent manner, providing a mechanistic link between fungal dysbiosis and local immune senescence [^jayaraman2026]. #gap/needs-replication — this T-cell-Candida mechanism is based on a single 2026 study; human n not specified in the abstract.

Denture wearers are at particular risk: denture biofilm provides a protected anaerobic niche for *Candida* biofilm formation, and denture stomatitis (Candida-dominated inflammation affecting the denture-bearing mucosa) affects 20–67% of complete-denture wearers globally [^peric2024]. Tooth loss is both a consequence and a driver of further oral microbiome dysbiosis in elders.

## Drivers of aging-associated oral shifts

The compositional changes are **not intrinsically age-driven** in isolation — they emerge from converging host changes that reshape the oral ecological niche:

1. **Hyposalivation and xerostomia.** Salivary flow rate declines modestly with healthy aging but is sharply reduced by polypharmacy (antihypertensives, anticholinergics, antidepressants, diuretics — among the most commonly prescribed drug classes in older adults). Saliva is the primary vehicle for antimicrobial proteins (secretory IgA, lactoferrin, lysozyme, histatins, mucins) and the mechanical flush that prevents subgingival colonization by anaerobes. Reduced flow rate facilitates plaque accumulation and anaerobic pocket formation [^sekundo2022]. #gap/dose-response-unclear — the relationship between degree of flow-rate reduction and community composition change is not well-characterized.

2. **Immunosenescence.** Age-related decline in systemic and mucosal immunity — reduced secretory IgA diversity, neutrophil dysfunction, and impaired macrophage phagocytosis — relaxes immunological pressure on subgingival communities. Ebersole 2018 reviewed evidence that aging increases periodontitis susceptibility primarily through immune dysregulation rather than through intrinsic microbial shifts; this is the immunological driver upstream of microbiome change [^ebersole2018]. #gap/no-fulltext-access — Ebersole 2018 is closed-access; body claims verified via abstract/Crossref metadata only.

3. **Denture wearing.** Complete or partial dentures alter the mechanical, chemical, and oxygen environment of the oral cavity. The denture prosthetic surface provides a structured biofilm substrate that is not subject to the normal mucosal immune defense; this promotes *Candida* and anaerobic bacterial colonization. O'Donnell 2015 (PLoS One, n=123 denture wearers) demonstrated that natural tooth presence substantially shapes the total oral community even in partial denture wearers; fully edentulous individuals have the most altered communities [^odonnell2015].

4. **Gingival recession and pocket deepening.** Age-associated [[gingival-recession]] increases subgingival niche volume, reduces oxygen tension in deepened pockets, and extends the biofilm surface available for anaerobic colonizer succession. This physical-architectural change is downstream of both mechanical wear and periodontal disease but feeds back to worsen subgingival dysbiosis.

5. **Medication burden.** Polypharmacy-driven xerostomia (point 1) is the dominant drug effect, but additional mechanisms include: bisphosphonate-associated osteonecrosis of the jaw (alters periapical microenvironment); immunosuppressants used in solid-organ transplant recipients (candidiasis risk); and metformin use (potential microbiome-modifying effects not specific to the oral cavity).

6. **Tooth loss and edentulism.** Each tooth extraction removes a colonization surface and associated microbiome. Progressive edentulism in older adults shifts the community toward mucosa-adapted species and away from tooth-biofilm-associated organisms. The oral community in fully edentulous elders differs fundamentally from dentate elders and should not be conflated in cohort analysis.

## Relationship between oral dysbiosis and systemic aging phenotypes

### Inflammaging meets the gingival crevice

The gingival crevice represents a focal point where oral dysbiosis drives systemic [[chronic-inflammation]]. Key mechanism: sub-gingival gram-negative anaerobes (including [[porphyromonas-gingivalis]], *Tannerella forsythia*, Fusobacterium) shed LPS that activates the [[lps-tlr4-nfkb]] pathway in gingival fibroblasts, macrophages, and systemic monocytes — contributing to the chronic low-grade endotoxemia that characterizes inflammaging. This parallels the gut-barrier permeability mechanism described in [[gut-microbiome-aging-shifts]] but operates via a distinct anatomical route (the sulcular epithelium rather than the gut mucosa).

Romandini 2026 (Journal of Periodontal Research) reviewed seven interconnected pathways linking periodontitis to systemic disease, including microbial translocation from the gingival crevice, inflammatory mediator spillover, and maladaptive myelopoiesis driven by shared aging vulnerabilities such as clonal hematopoiesis [^romandini2026].

### Alzheimer's disease and neuroinflammation

The association between periodontal disease and Alzheimer's disease has received substantial recent attention:

- Lin 2024 (Ageing Research Reviews, umbrella review of multiple meta-analyses, doi:10.1016/j.arr.2023.102128) found that **severe periodontitis and extensive tooth loss — but not mild oral disease alone — were strongly associated with cognitive dysfunction** [^lin2024].
- The proposed mechanism runs through *P. gingivalis* gingipains reaching the brain (via trigeminal nerve or haematogenous route) and triggering tau phosphorylation and amyloid-β aggregation, as well as systemic neuroinflammatory priming. The evidence for this causal pathway in humans remains observational; no RCT of periodontal treatment has demonstrated cognitive benefit as a primary endpoint. #gap/needs-human-replication

### Gut-oral axis

*P. gingivalis* introduced orally in aged mice caused greater gut microbiome disruption (reduced alpha-diversity, decreased *Akkermansia*) than the same intervention in young mice, and the gut barrier impairment was more pronounced in old animals [^giri2022]. This extends the dysbiosis-inflammaging loop: oral pathobiont translocation to the gut is amplified by age-related gut immune senescence, suggesting a positive feedback between oral and gut dysbiosis in aging. #gap/needs-human-replication — the Giri 2022 data are from aged mice only; human oral-gut microbiome coupling in aging has not been directly characterized. #gap/no-fulltext-access — Giri 2022 is closed-access; claims verified via abstract/Crossref metadata only.

## Rapamycin and oral microbiome rejuvenation

A notable preclinical finding: 8 weeks of rapamycin treatment (42ppm encapsulated rapamycin, eRAPA) in aged female mice (An 2020, eLife; two cohorts: C57BL/6Nia at UW and C57BL/6J at JAX; 20-month-old animals, n=10 rapamycin + 10 control in the NIA-UW cohort; 13 rapamycin + 13 control in the JAX cohort) reversed age-related periodontal bone loss (new bone formation confirmed by microCT pre- and post-treatment), attenuated NF-κB-driven inflammation in gingival tissue and periodontal bone (reduced p65, restored IκBα, reduced pro-inflammatory cytokines), and shifted the oral microbiome toward a compositionally younger profile on beta-diversity analysis (weighted UniFrac; rapamycin-treated old mice clustered with young mice; p<0.01). Reduced Bacteroidetes phylum abundance was the dominant compositional change [^an2020]. Whether these effects persist after treatment cessation was noted by the authors as an important open question — post-cessation durability was not measured in this study. This is the strongest published evidence for mechanistic reversibility of oral microbiome aging and positions mTORC1 inhibition as a candidate therapeutic lever for oral inflammaging. No human periodontal trial of rapamycin has been conducted. #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (keystone pathogen / PSD mechanism; immunosenescence mechanism) |
| Phenotype conserved in humans? | yes (aging periodontitis is a well-documented human phenotype) |
| Replicated in humans? | partial — microbiome composition studies replicated across cohorts; causal direction confirmed in mice via FMT and rapamycin experiments; interventional human data limited |

## Cohort evidence

| Cohort / Study | N | Country | Design | Key finding |
|---|---|---|---|---|
| LaMonte 2018 (WHI OsteoPerio) | n=30 total (15 no-periodontitis, 15 severe periodontitis); postmenopausal women; mean age 70.5 yr | USA | Cross-sectional pilot (ancillary to WHI Observational Study) | Subgingival communities differ substantially by periodontitis status; disease community enriched for LPS biosynthesis + proteolytic degradation + motility gene functions (PICRUSt); higher species richness in disease [^lamonte2018] |
| Ogawa 2018 | 54 elderly (nursing home + community) | Japan | Cross-sectional | Frailty independently associated with altered salivary microbiota and reduced diversity [^ogawa2018] |
| Sekundo 2022 | 54 centenarians; mean age 101.1±1.6 yr; 83.3% female | Germany | Cross-sectional, centenarian cohort (supragingival plaque + saliva only) | Diversity correlated with successful oral aging (≥20 natural teeth); mean stimulated salivary flow 0.84±0.55 ml/min (hyposalivation in majority); salivary pH → alpha-diversity correlation confirmed [^sekundo2022] |
| Giri 2022 | Aged vs young mice | USA | In vivo (P. gingivalis challenge) | Oral P. gingivalis causes greater gut microbiome disruption + gut-barrier impairment in aged vs young mice [^giri2022] |
| An 2020 | Aged female mice (C57BL/6Nia + C57BL/6J); 20-month-old; n=10+10 (NIA-UW), n=13+13 (JAX) | USA | In vivo (8-week rapamycin treatment; two-site design) | 8 weeks rapamycin reverses periodontal bone loss (microCT confirmed), attenuates gingival/bone NF-κB inflammation, shifts oral microbiome toward youthful beta-diversity; post-cessation durability not measured [^an2020] |
| Jayaraman 2026 | Not specified in abstract | USA | Cross-sectional (human oral mucosal immunology) | Aging-associated Candida enrichment correlates with mucosal Treg accrual and T cell dysfunction; IL-6-dependent mechanism [^jayaraman2026] |

## Relationship to dysbiosis hallmark and downstream hallmarks

```
Aging oral ecosystem:
  ↑ Subgingival anaerobes (P. gingivalis, T. forsythia, T. denticola)
      → Gingipain-mediated complement subversion + TLR2 activation
      → Sulcular LPS translocation → [[lps-tlr4-nfkb]] → [[chronic-inflammation]]
      → Oral-gut translocation amplified by aging gut → gut dysbiosis
  ↑ Candida colonization
      → Mucosal Treg dysfunction → impaired local immune surveillance
  ↓ Salivary flow (hyposalivation / polypharmacy)
      → ↓ Antimicrobial peptides → broader pathobiont tolerance
  ↑ Gingival recession / pocket depth
      → Anaerobic niche expansion → inflamed-niche selection
      → [[periodontitis]] (phenotype)
      → [[gingival-recession]] (phenotype)

  All drivers: positive feedback via [[immunosenescence]]
  → [[dysbiosis]] (hallmark)
  → [[chronic-inflammation]] (hallmark)
```

The [[dysbiosis]] hallmark page frames the conceptual context. The [[gut-microbiome-aging-shifts]] page covers the parallel gut process, including LPS-driven endotoxemia and the SCFA/barrier mechanism. [[porphyromonas-gingivalis]] is the dedicated taxon page for the keystone pathogen.

## Therapeutic and intervention context

Interventions that modulate the oral microbiome in aging are at early-stage or preclinical evidence levels:

- **Periodontal treatment (scaling and root planing).** Standard-of-care mechanical debridement reduces subgingival pathobiont load; effects on systemic inflammation markers (CRP, IL-6) in older adults are consistently measured but modest and transient in RCTs. Periodontal treatment is the only intervention with a defined standard-of-care rationale. #gap/long-term-unknown — whether durable periodontal treatment in older adults reduces systemic inflammaging markers longitudinally is not established.
- **Probiotic oral lozenges.** Heat-killed probiotic lozenges (Lin 2022, PMID 35236778) have been examined for oral hygiene in older adults; evidence is limited to small trials. #gap/needs-replication
- **Salivary flow stimulation.** Addressing polypharmacy-driven hyposalivation — via medication review or salivary substitutes — is a rational upstream intervention but trial evidence for microbiome endpoints is absent.
- **Rapamycin** — see section above; preclinical only [^an2020]. #gap/needs-human-replication
- **Oral hygiene + denture hygiene.** Denture hygiene reduces Candida biofilm and is the primary modifiable lever for denture stomatitis prevention. Population-level evidence for microbiome restoration via improved denture hygiene is limited.

## Limitations and gaps

- **Cross-sectional dominance.** All human cohort studies are cross-sectional. True longitudinal tracking of oral microbiome composition from midlife to old age in health-screened individuals is absent. #gap/needs-replication
- **Periodontal-status confounding.** The aged oral microbiome and the periodontitis-associated microbiome are difficult to disentangle in older populations, where periodontitis prevalence is very high. Studies not stratifying by periodontal status may conflate disease-driven and age-driven compositional shifts.
- **Salivary vs subgingival compartmentalization.** Saliva samples the supragingival + shed subgingival community; subgingival swabs/curette samples are more directly relevant to the inflammophilic dysbiosis mechanism but are invasively collected. Most aging studies use saliva; subgingival data in aging cohorts are sparse.
- **16S amplicon heterogeneity.** Variable-region choice (V1-V3 vs V3-V4 vs V4) and extraction protocols differ across studies, limiting cross-cohort comparison of relative abundances. Shotgun metagenomics with functional inference is available for few aging oral cohorts.
- **Mycobiome neglect.** Most studies sequence bacteria only; the aging trajectory of oral fungi beyond *Candida* is largely uncharacterised. #gap/needs-replication
- **Causal direction.** It remains unclear whether oral microbiome dysbiosis *drives* aging phenotypes (e.g., systemic inflammation, cognitive decline) or whether aging phenotypes (immunosenescence, hyposalivation, tooth loss) mechanistically precede and cause microbiome shifts. Rapamycin mouse experiments support the hypothesis that reducing inflammaging reverses the shift, but direct causal evidence in humans is lacking. #gap/no-mechanism (causal)
- **Human Alzheimer's-periodontitis causality unresolved.** The epidemiological association is consistent across studies but the proposed *P. gingivalis* causal mechanism in humans has not been validated by periodontal RCT trials with cognitive endpoints. #gap/needs-human-replication
- **Interventional RCT data sparse.** No large pre-registered RCT has targeted oral microbiome restoration in older adults with systemic aging endpoints (inflammaging markers, cognitive outcomes, frailty) as the primary endpoint.

## Footnotes

[^hajishengallis2012]: doi:10.1111/j.2041-1014.2012.00663.x · Hajishengallis G, Lamont RJ · *Molecular Oral Microbiology* 2012 · PMID:23134607 · n=N/A (review) · review · model: in-vitro + mouse + human (synthesized) · introduces the polymicrobial synergy and dysbiosis (PSD) model; defines *P. gingivalis* as a keystone pathogen orchestrating community virulence via complement C5a receptor manipulation; argues dysbiosis is a community property, not reducible to a single organism. >1,000 citations (Crossref).

[^lamont2015]: doi:10.1016/j.molmed.2014.11.004 · Lamont RJ, Hajishengallis G · *Trends in Molecular Medicine* 2015 · PMID:25498392 · n=N/A (review) · review · model: in-vitro + mouse + human (synthesized) · extends PSD model to other inflammatory diseases; characterizes dysbiotic communities as acquiring functional specialization; emphasizes inflammation-dysbiosis positive feedback loop. ~470 citations (Crossref).

[^hajishengallis2021]: doi:10.1111/prd.12371 · Hajishengallis G, Lamont RJ · *Periodontology 2000* 2021 · PMID:33690950 · n=N/A (review) · review · model: in-vitro + mouse + human (synthesized) · characterizes dysbiotic periodontal communities as "quasi-organismal entities"; articulates the inflammophilic dysbiosis concept — diseased gingival environment selects for community composition that sustains it; dialogue with host immunity described in detail. 247 citations (Crossref). Green OA.

[^lamonte2018]: doi:10.3390/dj6040058 · LaMonte MJ et al. · *Dentistry Journal* 2018 · PMID:30347640 · n=30 total (15 no-periodontitis, 15 severe periodontitis); postmenopausal women; mean age 70.5 yr; all Caucasian · observational cross-sectional pilot · 16S rRNA (V1–V3, 454 FLX) + PICRUSt functional inference · model: postmenopausal US women (WHI OsteoPerio Study ancillary) · disease-associated subgingival microbiome enriched for motility, LPS-biosynthesis, and proteolytic-degradation gene functions (>30 functional pathways elevated, LDA>2.75); higher species richness in disease; significant beta-diversity separation (unweighted UniFrac p=0.002, weighted p=0.0001); authors note small n limits generalizability. Gold OA.

[^ebersole2018]: doi:10.1007/s40496-018-0202-2 · Ebersole JL et al. · *Current Oral Health Reports* 2018 · PMID:30555774 · n=N/A (review) · review · model: human (synthesized) · increased periodontitis in aging is primarily a consequence of age-associated immune dysregulation (innate + adaptive), not intrinsic microbial changes; aging impairs neutrophil function, macrophage phagocytosis, and secretory IgA diversity at the oral mucosa. Closed-access. #gap/no-fulltext-access — body claims cross-checked against abstract and Crossref metadata only; full-text verification pending.

[^ogawa2018]: doi:10.1038/s41598-017-18677-0 · Ogawa T et al. · *Scientific Reports* 2018 · PMID:29323208 · n=54 elderly participants (nursing home residents vs community-dwelling controls) · observational cross-sectional · 16S rRNA · model: Japanese elderly · significant diversity reduction and compositional difference in frail elderly vs healthy controls; general frailty independently associated with oral microbiota composition beyond oral hygiene metrics. 74 citations (Crossref). Gold OA.

[^sekundo2022]: doi:10.1080/20002297.2022.2059891 · Sekundo C et al. · *Journal of Oral Microbiology* 2022 · PMID:35401946 · n=54 centenarians; mean age 101.1±1.6 yr; 83.3% female · cross-sectional · 16S rRNA V4 (Illumina MiSeq; **supragingival** plaque + saliva; subgingival not sampled) · model: German centenarians (Heidelberg Dental Centenarian Study HD100Z) · alpha-diversity correlated significantly with successful oral aging (≥20 natural teeth; p<0.001 in both saliva and plaque) and DMFT index (ρ=0.43, p=0.002 saliva; ρ=0.49, p<0.001 plaque); majority showed hyposalivation (mean **stimulated** salivary flow rate 0.84±0.55 ml/min; only 26.4% normal 1–3 ml/min); resting salivary pH 5.0–5.8 in 46.3% of cases; salivary pH positively correlated with alpha-diversity. Gold OA.

[^giri2022]: doi:10.1111/jre.13062 · Giri S et al. · *Journal of Periodontal Research* 2022 · PMID:36251393 · n=aged and young mice (specific n not reported in abstract) · in-vivo (P. gingivalis oral challenge) · model: aged vs young mice · aged mice showed greater gut microbiome alpha-diversity loss and decreased beneficial taxa (including Akkermansia) after P. gingivalis challenge vs young mice; gut barrier impairment more pronounced in old animals; suggests oral-gut dysbiosis cross-amplification in aging. Closed-access. #gap/no-fulltext-access — body claims cross-checked against abstract and Crossref metadata only; specific n, strain, and full methodology unverified.

[^an2020]: doi:10.7554/eLife.54318 · An JY et al. · *eLife* 2020 · PMID:32342860 · n=NIA-UW cohort: 5 young + 5 adult + 20 old (10 eudragit + 10 rapamycin); JAX cohort: 13 young + 26 old (13 eudragit + 13 rapamycin); all female · in-vivo (8-week 42ppm eRAPA dietary rapamycin; two-site parallel design; C57BL/6Nia [UW] + C57BL/6J [JAX]; 20-month-old treated animals) · model: aged female mice · 8-week rapamycin reversed age-related periodontal bone loss (microCT CEJ-ABC measurement, confirmed in both cohorts), attenuated NF-κB inflammatory signaling in gingival tissue and periodontal bone, reduced pro-inflammatory cytokines, and shifted oral microbiome toward youthful beta-diversity profile (weighted UniFrac; rapamycin-treated old clustered with young, p<0.01; no significant difference young vs rapamycin-treated old); Bacteroidetes reduction was primary compositional change; post-cessation durability was not assessed. Gold OA.

[^jayaraman2026]: doi:10.3389/fimmu.2026.1714595 · Jayaraman S et al. · *Frontiers in Immunology* 2026 · PMID:41939907 · n=not specified in abstract · cross-sectional (human oral mucosal immunology) · model: aging human oral mucosa · enrichment of oral Candida with aging correlates with CD4+FOXP3+ regulatory T cell accrual and T cell dysfunction; IL-6-dependent mechanism; links fungal dysbiosis to oral immune senescence. #gap/needs-replication — single 2026 study; N not published in abstract.

[^lin2024]: doi:10.1016/j.arr.2023.102128 · Lin CS et al. · *Ageing Research Reviews* 2024 · PMID:38007045 · n=umbrella review of multiple meta-analyses · review (umbrella) · model: human (synthesized) · severe periodontitis and extensive tooth loss strongly associated with cognitive dysfunction; mild oral disease alone not significantly associated; notes that severity threshold matters for cognitive risk inference.

[^peric2024]: doi:10.3390/jof10050328 · Perić M et al. · *Journal of Fungi* 2024 · PMID:38786683 · n=28 studies included · systematic review · model: denture wearers globally · denture stomatitis affects 20–67% of complete-denture wearers; Candida biofilm formation linked to denture type, continuous wearing, inadequate hygiene, and salivary flow/pH characteristics; monitoring critical in immunocompromised elders.

[^odonnell2015]: doi:10.1371/journal.pone.0137717 · O'Donnell LE et al. · *PLoS One* 2015 · PMID:26368937 · n=123 denture wearers · observational cross-sectional · 16S rRNA · model: mixed-dentition denture wearers · natural tooth presence substantially affects overall oral microbial composition; denture and dental plaques are compositionally distinct; Candida levels correlate positively with Lactobacillus.

[^romandini2026]: doi:10.1111/jre.70099 · Romandini M et al. · *Journal of Periodontal Research* 2026 · PMID:42001319 · n=N/A (review) · review · model: human (synthesized) · seven interconnected pathways link periodontitis to systemic disease; aging-related clonal hematopoiesis drives myeloid cells with heightened proinflammatory potential; shared aging vulnerabilities (oxidative stress, epigenetic changes) underlie the periodontitis-multimorbidity nexus.
