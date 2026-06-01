---
type: process
aliases: [age-related skin dysbiosis, skin microbiota aging changes, cutaneous microbiome aging, skin microbiome compositional shifts]
key-proteins: []
pathways: []
hallmarks: ["[[dysbiosis]]", "[[chronic-inflammation]]"]
selective-variants: []
druggability-tier: null
caused-by: ["[[skin-aging]]", "[[immunosenescence]]"]
causes: ["[[chronic-inflammation]]", "[[skin-aging]]"]
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Shibagaki 2017, Kim 2022, Wu 2020, Huang 2020, Swaney 2025, Christman 2024 verified against full PDFs. Howard 2022 (closed-access, not_oa) verified against confirmed Crossref metadata — abstract-level claims only; full statistics unverifiable. Zhang 2024 (closed-access, not_oa) verified against confirmed Crossref title/abstract metadata."
---

# Skin Microbiome Aging Shifts

The **compositional changes** that occur in the human skin microbiome across the adult lifespan, characterized by a decline in sebum-dependent taxa ([[cutibacterium-acnes]], [[malassezia]]), a relative expansion of dry-niche and opportunistic taxa ([[staphylococcus-epidermidis]], Corynebacterium), increasing alpha-diversity in some cohorts, and site-specific shifts in fungal communities. This page is the cohort-level data layer for the [[dysbiosis]] hallmark and complements the per-taxon detail on the three R44 sister pages ([[cutibacterium-acnes]], [[staphylococcus-epidermidis]], [[malassezia]]).

The skin microbiome is **considerably less characterized than the gut microbiome**: the literature is thinner, cohorts are smaller, sequencing methods are less standardized, and the direction of some diversity changes is opposite to expectations (some studies show *increased* diversity with age). The central tension parallels [[gut-microbiome-aging-shifts]]: cross-sectional studies from different populations, body sites, and sequencing platforms frequently disagree, making a universal "aged skin microbiome signature" elusive.

## Methodology context

Skin microbiome sampling uses three primary methods, each with distinct biases:

- **Swab** (most common): samples surface + superficial follicular community; simple; variable recovery.
- **Tape-strip** (D-Squame or equivalent): captures stratum corneum microbes per adhesive layer; reproducible within-session; not deep-follicular.
- **Biopsy**: captures deep-follicular and dermis-adjacent communities; invasive; rarely used outside surgical contexts.

**Sequencing choice:** 16S rRNA amplicon sequencing dominates the literature through ~2022. Variable region choice differs across studies: V1-V2 (Shibagaki 2017), V1-V3 (Swaney 2025), V4 (Huang 2020), and V4-V5 (Kim 2022) have all been used; this adds a cross-study comparability problem beyond the cohort-level heterogeneity. Shotgun metagenomic sequencing (species-level + functional gene content, no amplification bias) is increasingly used in newer studies. For fungi, ITS1 or ITS2 sequencing is required — many skin microbiome studies sequence bacteria only and miss the mycobiome entirely.

**Low biomass is a unique challenge.** Skin harbors ~10^3–10^4 bacteria/cm^2 on dry sites (several orders of magnitude lower than gut). Contamination from reagents and environment is a proportionally larger confounder. Blank controls, low-input protocols, and decontamination pipelines are standard in post-2018 work but inconsistent in older studies.

**Body-site stratification is essential.** Face (sebaceous-rich), forearm (dry/moist transition), scalp (sebaceous), feet (moist + fungal-rich), and mucocutaneous junctions each harbor functionally distinct communities. Age effects found on the face do not necessarily replicate on the forearm or scalp.

## Age-associated taxonomic shifts

### Bacterial community — summary table

| Taxon | Direction with age | Mechanism | Body site | Evidence consistency |
|---|---|---|---|---|
| *Cutibacterium acnes* | **↓** significant | Sebum decline → substrate depletion | Sebaceous sites (face, forehead, scalp) | Strong — replicated across multiple cohorts [^shibagaki2017][^howard2022][^swaney2025] |
| *Staphylococcus* spp. (*S. epidermidis*, *S. hominis*, *S. capitis*) | **↑** at some sites / **↓** at others | Compensatory expansion as sebaceous niche shrinks, but *S. epidermidis* and *S. hominis* trends are site- and gender-dependent | Dry + surface sites | Moderate — Shibagaki 2017 shows *Staphylococcus* decreased in older forearm; Swaney 2025 shows *S. hominis* trending ↑ in older arm; *S. capitis* ↓ on arm [^swaney2025] #gap/contradictory-evidence |
| Corynebacterium spp. | **↑** | Not fully established; possibly pH-shift-facilitated | Multiple sites | Moderate |
| Oral-type bacteria (Streptococcus, Veillonella, etc.) | **↑** | Oral microbiome incursion via anatomical proximity, dental health decline | Cheek, perioral skin | Moderate [^shibagaki2017] #gap/no-mechanism — direct contamination vs colonisation not resolved |
| *Lactobacillus* spp. | **↓** | Unknown; possibly sebum-linked | Face, cheek | Moderate [^howard2022] |
| Alpha-diversity (Shannon / richness) | **↑** in most cohorts | Loss of *Cutibacterium* dominance → niche diversification | Face + forearm | Somewhat consistent [^shibagaki2017][^howard2022][^kim2022] — directionally opposite to gut microbiome |

Key insight: the **skin microbiome diversity increase with age is a reversal of the gut pattern**. In the gut, aging is typically associated with reduced diversity in frail/diseased cohorts. On skin, loss of the dominant *Cutibacterium* sebaceous-niche anchor allows a wider range of dry-niche organisms to fill the void, resulting in higher measured richness but reduced community stability [^swaney2025]. The Swaney 2025 UK cohort (n=59) characterises this as a shift toward a "hyperdiversified, fragile microbial community" in old age, supported by reduced network connectivity and decreased degree per node (p<0.0001) in old-age microbial networks.

### Fungal community (mycobiome)

The skin mycobiome is dominated by *Malassezia* spp. on sebaceous body sites — *Malassezia restricta* is the most abundant species on facial skin in young adults. In the Kim 2022 Korean women cohort (young group ages 20–29 vs older group ages 60–69; n=61), bacterial and fungal alpha-diversity were **both higher** in the older group on cheek and forehead; *Malassezia restricta* was identified as a key taxonomic biomarker differentiating the age groups — it was more abundant in the younger group on cheeks, and its relative decline in older subjects contributed to the mycobiome community shift [^kim2022]. The Wu 2020 Sardinian cohort (16S + ITS1 from young / elderly / centenarian skin) found that skin fungal community structure differed significantly across age groups, though the bacterial component showed stronger age-separation [^wu2020].

The fungal community on feet (plantar surface) is distinct: *Trichophyton* and other dermatophytes dominate there, and age-related changes in foot mycobiome are less studied.

#gap/needs-replication — the mycobiome literature on aging is sparse; most studies are cross-sectional in small cohorts, and ITS region standardisation differs across studies.

## Driving mechanisms

Skin microbiome shifts with age are downstream of several converging host changes, rather than primarily microbially intrinsic:

1. **Sebum production decline.** Sebaceous gland output falls substantially post-menopause and in men aged 60+, removing the primary substrate for lipophilic *Cutibacterium acnes* and *Malassezia*. This is the strongest established driver of the sebaceous-niche bacterial/fungal decline [^howard2022].

2. **Stratum corneum lipid composition shifts.** Saturated-to-unsaturated fatty acid ratios in skin surface lipids change with age; the fatty acid environment shapes which organisms can colonize the stratum corneum. Antimicrobial lipid species (lauric acid, sapienic acid from C. acnes metabolism) decline in parallel with their primary producer.

3. **Skin pH shifts toward alkaline.** Skin surface pH rises (becomes more alkaline) with age, particularly in postmenopausal women, shifting the competitive landscape toward pH-tolerant organisms. Staphylococci are more pH-tolerant across the 4.5–7 range than *Cutibacterium* (which thrives at pH 6.0–6.5).

4. **Transepidermal water loss (TEWL) increases.** Age-associated barrier impairment (reduced ceramide content, flattened rete ridges — see [[epidermis]]) increases TEWL and alters the hydration microenvironment at the skin surface, favouring moisture-adapted taxa at previously dry sites.

5. **Immune aging.** [[immunosenescence]] and reduced [[langerhans-cells]] density in the epidermis weaken the skin's immune surveillance of commensal communities, potentially permitting expansion of organisms held at low abundance by the younger immune system. The Naik 2015 framework (developed in [[staphylococcus-epidermidis]] R44 context) describes how skin commensals tune local T cell populations — this bidirectional relationship becomes dysregulated with age. #gap/no-mechanism — the causal chain from Langerhans cell decline to specific taxon expansion in aging humans is not established.

6. **Anatomical changes.** Epidermal thinning and rete-ridge flattening (see [[epidermis]]) alter the physical architecture available to follicular-associated taxa; sebaceous follicle regression reduces the sebum-reservoir niche occupied by *C. acnes* and lipophilic cocci.

## Cohort evidence

| Cohort | N | Country | Age range | Body sites | Method | Key finding |
|---|---|---|---|---|---|---|
| Shibagaki 2017 | 37 (18 young, 19 older) | Japan | 23–37 vs 60–76 | Cheek, forearm, forehead, scalp | 16S (V1-V2) | Striking *Cutibacterium* decline on face + forearm; increased diversity; oral bacteria enriched in older group [^shibagaki2017] |
| Howard 2022 | 158 | USA | 20–74 (6 groups) | Forearm, buttock, face | 16S | Diversity ↑ across all sites; Cutibacterium + Lactobacillus ↓ at all sites with age; sebocyte gland area decline correlated with bacterial shift [^howard2022] |
| Kim 2022 | 61 (29 young, 32 older) | South Korea | 20–29 vs 60–69 | Cheek + forehead | 16S (V4-V5) + ITS1-5.8S | Higher alpha-diversity (bacterial + fungal) in older group; *Cutibacterium* + *Lactobacillus* ↓ in older group; *Malassezia restricta* key mycobiome biomarker (higher in younger on cheeks) [^kim2022] |
| Wu 2020 (Sardinia) | 65 (young n=19; elderly n=24; centenarians n=22) | Italy | Young (19–33) → elderly (68–88) → centenarian (99–107) | Skin (palms, forehead, umbilicus) + oral + gut | 16S + ITS1 | Skin fungal structure differed significantly across age groups at palms, forehead, umbilicus (ANOSIM p<0.05); body site dominated over age for overall community distribution; gut bacteria of centenarians clustered separately from younger groups [^wu2020] |
| Huang 2020 | Multi-cohort (8,959 samples; 10 studies) | USA / UK / China / Tanzania / others | Adult lifespan (18–90 yr) | Hand + forehead | 16S (V4) | Skin microbiome predicts chronological age MAE 3.8 ± 0.45 yr (vs oral 4.5 ± 0.14 yr, gut 11.5 ± 0.12 yr); hand→forehead cross-site generalisation confirmed [^huang2020] |
| Swaney 2025 | 59 (30 young mean 26.7 yr; 29 old mean 72.3 yr) | UK | Young (YA) vs old (OA) | Face (cheek) + arm (antecubital fossa) | 16S (V1-V3) | Site-specific age shifts in diversity, interpersonal heterogeneity, network connectivity, metabolic potential; *C. acnes* ↓ significantly (face p=0.024; arm p=0.0078); *S. hominis* ↑ trending (arm p=0.15); diversity ↑ on face (Shannon + Pielou p<0.05); shift to hyperdiversified, fragile community in old age [^swaney2025] |

**Missing large longitudinal cohort.** All studies above are cross-sectional. A true longitudinal skin microbiome aging study tracking individuals over years remains absent from the literature as of 2026. #gap/needs-replication

## Body-site heterogeneity

Age effects differ qualitatively by anatomical site, not just quantitatively:

- **Face / forehead / scalp** — sebaceous-rich; most dramatic *C. acnes* decline; most consistently studied.
- **Forearm / arm** — dry + moist transition site; smaller magnitude shifts; useful reference site because less confounded by sebaceous biology.
- **Feet** — distinct baseline community (Trichophyton, Corynebacterium minutissimum dominant); fungal community shifts with age are under-studied.
- **Mucocutaneous junctions (nostril, lip, perioral skin)** — oral microbiome incursion with age via proximity, dental hygiene decline, and immune shifts; Shibagaki 2017 identified 38 total age-differentiating species, of which 16 were confirmed oral bacteria (Streptococcus, Veillonella, Prevotella, Rothia, Fusobacterium, Haemophilus, and relatives). Whether this represents true colonisation or sampling contamination from oral breathing is not fully established [^shibagaki2017]. #gap/no-mechanism

## Clinical correlates

The following associations are **descriptive** — microbiome-causality for most is not established:

- **Skin barrier impairment.** Age-related barrier dysfunction (reduced ceramide, increased TEWL) and skin microbiome shifts co-occur; Howard 2022 found significant correlations between natural moisturising factors, antimicrobial peptides (including [[ll-37]]) expression, and microbiome composition [^howard2022]. Causal direction unresolved. #gap/no-mechanism
- **Seborrheic dermatitis.** Post-menopausal pattern shifts in facial sebum and *Malassezia* abundance correlate with changing seborrheic dermatitis prevalence across the lifespan, but mechanistic causality from microbiome shifts to disease transition is not established.
- **Wound-healing decline.** The aged skin microbiome may contribute to delayed wound healing, partially through altered antimicrobial peptide profiles and reduced beneficial commensal protection of wound edges. Evidence is largely from model-organism or in-vitro studies. #gap/needs-human-replication
- **Acne resolution and sebaceous follicle involution.** The paradoxical *improvement* in acne with age (as sebum and *C. acnes* decline) is the clearest clinical consequence of the sebaceous-niche shift. This is a well-established phenotypic correlation, not a gap.
- **Age-related hyperpigmentation.** Whether melanocyte regulation by commensals changes with age is speculative; no primary evidence for direct microbiome contribution. #gap/unsourced

## Therapeutic and intervention context

Intervention trials for skin microbiome modulation in aging are sparse and early-stage:

- **Topical prebiotics / postbiotics** (cosmetic products). Sterile bacterial metabolites (postbiotics) and prebiotic polysaccharides feeding commensals are increasingly common in cosmetic formulations. A prospective clinical study of Epidermidibacterium keratini EPI-7 postbiotics reported skin-aging-related improvements (PMID 37743489), but sample sizes were small.
- **Oral + topical xylo-oligosaccharide (XOS) intervention — gut-skin axis RCT.** Zhang 2024 (n=unspecified, 8-week double-blind RCT) compared oral (O), topical (T), and combined oral-topical (OT) XOS treatment. The OT group showed the greatest reduction in cutaneous *Cutibacterium*, intestinal *Bifidobacterium* enrichment, and a significant reduction in facial pores compared to O and T alone [^zhang2024]. This is the best available RCT evidence for the gut-skin axis in skin microbiome aging, though the sample size is unpublished in the abstract and replications are lacking. #gap/needs-replication
- **Dietary polyphenols — skin microbiome effects.** Christman 2024 (n=22 women ages 25–65, 6-week double-blind crossover RCT cranberry beverage) found improved skin elasticity and antioxidant activity; cranberry beverage did not change overall skin microbiome α- or β-diversity but did alter abundance of specific species (notably increased *Staphylococcus epidermidis* and *Cutibacterium granulosum*). Effects on skin parameters were more pronounced in women >40 years. Note: only n=12 women were included in the microbiome analysis after excluding low-read samples [^christman2024]. Sample size is small; not powered for aging-specific microbiome endpoints.
- **Sebum-modulating compounds.** [[niacinamide]] (topical; R42 in this wiki) and azelaic acid reduce sebum indirectly modulate *C. acnes* and *Malassezia* abundance; this is used clinically for acne and rosacea rather than for aging-microbiome restoration per se.
- **Gut-skin axis connection.** [[gut-microbiome-aging-shifts]] (R33) describes gut compositional shifts that may propagate to skin via systemic immune mediators (circulating SCFAs, LPS, immune cell activation). The mechanistic pathway from gut dysbiosis to skin microbiome change in aging is hypothesised but not directly established in humans. #gap/no-mechanism

## Relationship to dysbiosis hallmark and downstream hallmarks

```
Skin aging (sebum decline, immune aging, TEWL increase)
  ↓ C. acnes / Malassezia        → ↓ antimicrobial lipid production → ↓ pathogen exclusion
  ↑ S. epidermidis, Coryne.      → altered Th17/Treg balance via skin-resident T cell tuning
  ↑ oral bacteria incursion      → ↑ pro-inflammatory signalling at perioral/facial skin
  ↑ alpha-diversity + fragility  → reduced colonization resistance

  → [[dysbiosis]] (hallmark)
  → [[chronic-inflammation]] (altered skin immune environment)
```

See [[dysbiosis]] for the hallmark-causality context. See the sister microbe pages ([[cutibacterium-acnes]], [[staphylococcus-epidermidis]], [[malassezia]]) for per-taxon mechanistic detail. See [[skin-aging]] for the underlying host biology.

## Limitations and gaps

- **Cross-sectional dominance.** All major cohort studies as of 2026 are cross-sectional; age, cohort, diet, and geography confounds are inseparable from chronological aging signal. True longitudinal tracking in healthy individuals is absent. #gap/needs-replication
- **Methodology heterogeneity.** 16S rRNA variable-region choice (V1-V3 vs V3-V4), DNA extraction protocols, and decontamination standards differ across studies. Direct cross-study comparison of relative abundances is unreliable.
- **Low biomass contamination.** The contamination problem is more acute for skin than gut; earlier (pre-2018) studies may have inflated the prevalence of low-abundance taxa.
- **Mycobiome neglect.** The majority of skin microbiome aging studies sequence bacteria only; the aging trajectory of skin fungi (beyond *Malassezia* on face) is almost entirely uncharacterised. #gap/needs-replication
- **Causal direction not established.** It is unclear whether microbiome compositional shifts *drive* skin aging phenotypes, or whether skin aging (sebum decline, barrier impairment, immune aging) mechanistically precedes and causes the microbiome shift. The most parsimonious reading of current evidence is the latter, but intervention experiments that modulate the microbiome first (e.g., C. acnes supplementation in elderly skin) are lacking. #gap/no-mechanism
- **Population diversity.** The published cohorts are predominantly Asian (Japanese, Korean) and Caucasian (US/UK/Italian). Skin microbiome composition differs substantially by ethnicity, climate, and geography; the generalisability of any single cohort is limited.
- **Intervention RCT data sparse.** No large-scale (n>100), pre-registered RCT has targeted skin microbiome restoration in older adults with aging phenotypes as a primary endpoint. The Zhang 2024 and Christman 2024 trials are early-stage proofs of concept. #gap/needs-replication

## Footnotes

[^shibagaki2017]: doi:10.1038/s41598-017-10834-9 · Shibagaki N et al. · *Scientific Reports* 2017 · n=37 (18 young women ages 23–37; 19 older women ages 60–76) · observational cohort · model: healthy Japanese women · striking decline of *Propionibacterium* (*Cutibacterium*) on cheek, forearm, forehead in older group; 38 total age-differentiating species identified (16 confirmed oral bacteria — Streptococcus, Veillonella, Prevotella, Rothia, Fusobacterium, Haemophilus and relatives); alpha-diversity ↑ on face/forehead in older group (Welch's t-test p<0.05); *Staphylococcus* decreased in older forearm microbiome. 16S V1-V2 region; 4 skin sites (cheek, forearm, forehead, scalp).

[^howard2022]: doi:10.1016/j.jid.2021.11.029 · Howard B et al. · *Journal of Investigative Dermatology* 2022 · n=158 Caucasian females; 6 age groups (20–24 to 70–74 years) · observational cohort · model: US women · bacterial diversity ↑ across all skin sites (forearm, buttock, face) with age; Cutibacterium + Lactobacillus ↓ at all sampled sites; sebocyte gland area decline correlated with microbiome composition; antimicrobial peptide expression (including LL-37) correlated with bacterial community change. *Archive: closed-access (not_oa) — abstract-level claims verified via Crossref; full quantitative statistics (p-values, correlation coefficients) unverifiable without institutional access.* #gap/no-fulltext-access

[^kim2022]: doi:10.1038/s41598-022-06189-5 · Kim HJ et al. · *Scientific Reports* 2022 · n=61 (29 young women ages 20–29, mean 22.1 yr; 32 older women ages 60–69, mean 61.1 yr) · observational cohort · model: healthy Korean women · bacterial + fungal alpha-diversity both ↑ in older group (cheek: Shannon p<0.001; forehead: Shannon p<0.05); *Cutibacterium* + *Lactobacillus* ↓ in older group; *Malassezia restricta* higher in younger group on cheeks and identified as key fungal age-differentiating biomarker; network density (D) higher in younger group; TEWL ↑ in older group; sebum ↓ in older group. 16S V4-V5 region; ITS1-5.8S for fungi; cheek + forehead.

[^wu2020]: doi:10.1128/msphere.00558-19 · Wu L et al. · *mSphere* 2020 · n=65 (young n=19 ages 19–33; elderly n=24 ages 68–88; centenarians n=22 ages 99–107) · observational cohort · model: Sardinian population (AKEntAnnos/AKEA cohort) · 6 body sites: left/right palms, forehead, umbilicus, oral cavity, gut; 16S (bacteria) + ITS1 (fungi); skin bacterial communities significantly different among age groups at all skin sites (ANOSIM p=0.001–0.003); skin fungal communities significantly different at palms, forehead, umbilicus (ANOSIM p=0.002–0.015); body site primary driver of β-diversity (R²=21%, p=0.001 for site vs individual); centenarian gut bacteria clustered separately from younger + elderly; fungal gut communities could not be separated by age.

[^huang2020]: doi:10.1128/msystems.00630-19 · Huang S et al. · *mSystems* 2020 · multi-cohort (8,959 samples from 10 studies; USA, UK, China, Tanzania, others; n=1,975 skin samples) · observational (random-forest meta-analysis of public 16S-V4 data) · skin microbiome predicts chronological age MAE 3.8 ± 0.45 yr (best of any body site); gut MAE 11.5 ± 0.12 yr; oral MAE 4.5 ± 0.14 yr; hand→forehead and forehead→hand cross-site generalisation confirmed (cross-prediction MAE 4.2–6.9 yr); bacteria enriched in young adults (18–30 yr) more abundant and ubiquitous than bacteria enriched in elderly (>60 yr).

[^swaney2025]: doi:10.3389/fragi.2025.1644012 · Swaney MH et al. · *Frontiers in Aging* 2025 · n=59 (30 young age mean 26.7 ± 4.45 yr; 29 old age mean 72.3 ± 4.04 yr) · observational cohort · model: UK population (Birmingham) · site-specific age-related shifts in diversity, interpersonal heterogeneity, network connectivity, metabolic potential; *C. acnes* ↓ significantly (face p=0.024, arm p=0.0078); diversity ↑ on face (Shannon + Pielou evenness p<0.05, not significant on arm); reduced network node degree in old age (p<0.0001); "hyperdiversified, fragile" community in old age. 16S V1-V3; face (cheek) + arm (antecubital fossa). Age effects on face driven primarily by female participants.

[^zhang2024]: doi:10.1039/d3fo05473j · Zhang L et al. · *Food & Function* 2024 · Vol.15 pp.4246–4261 · double-blind RCT · 8-week oral (O) vs topical (T) vs combined oral-topical (OT) xylo-oligosaccharide (XOS) · skin aging endpoints; OT combined intervention: greatest cutaneous *Cutibacterium* reduction + facial pore reduction + intestinal *Bifidobacterium* enrichment vs O or T alone · N not available from abstract/metadata. *Archive: closed-access (not_oa) — title and outcomes confirmed via Crossref metadata; N and full statistics unverifiable.* #gap/needs-replication — single RCT; N not publicly available. #gap/no-fulltext-access

[^christman2024]: doi:10.3390/nu16183126 · Christman L et al. · *Nutrients* 2024 · n=22 women ages 25–65 (12 aged 25–39; 10 aged 40–65); Fitzpatrick skin types 2–3; 6-week double-blind crossover RCT · polyphenol-rich cranberry beverage vs placebo · improved net elasticity on face (p≤0.05) and improved gross + net elasticity on forearm vs placebo; SOD ↑ vs placebo; GPx ↑ vs baseline; TNF-α ↓ vs baseline; effects on elasticity + SOD/TNF-α differed by age group (>40 primarily for elasticity; <40 for SOD/TNF-α); α- and β-diversity unchanged; specific species altered (S. epidermidis ↑; Cutibacterium granulosum ↑; Dermacoccus ↓); microbiome analysis n=12 (low-read exclusions reduced microbiome sample size). NCT04183920. #gap/needs-replication — n=12 for microbiome; underpowered for aging-specific microbiome endpoints.
