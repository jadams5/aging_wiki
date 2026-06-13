---
type: hallmark
aliases: [gut microbiome aging, microbiome aging, age-related dysbiosis]
category: integrative
mechanistic-tier: integrative
intervention-tractability: moderate
caused-by: ["[[chronic-inflammation]]", "[[cellular-senescence]]"]
causes: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
introduced: 2023
sens-correspondence: []
key-pathways: ["[[lps-tlr4-nfkb]]", "[[scfa-signaling]]"]
key-phenotypes: ["[[chronic-inflammation]]", "[[type-2-diabetes]]", "[[sarcopenia]]", "[[frailty]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Claesson 2012 and Smith 2017 claims verified against full primary-source PDFs; Depommier 2019 group-n values corrected against full PDF (downloaded from PMC); López-Otín 2023 unverifiable (closed-access, download failed) — framing claims attributed to this source carry #gap/no-fulltext-access; AI-synthesized mechanistic background (SCFA biology, LPS-TLR4 axis, compositional shift taxa) not independently primary-sourced on this page — see body-level #gap/unsourced tags"
---

# Dysbiosis

Age-associated alterations in the **composition, diversity, and function of the gut microbiome** — reduced species diversity, shifted community structure toward pro-inflammatory taxa, depletion of beneficial commensals, and increased gut barrier permeability — that contribute to systemic aging via metabolic, immune, and barrier-mediated mechanisms. **Newly recognized as a standalone integrative hallmark in the 2023 expansion of the Hallmarks of Aging framework** [^lopezOtin2023]. This is the wiki's most under-developed hallmark; the page is intentionally lighter than others and explicitly flags the coverage gap.

## Why dysbiosis was split off in 2023

Prior to the 2023 expansion, microbiome-aging interactions were treated as sub-components of [[altered-intercellular-communication]] and [[chronic-inflammation]]. Three developments drove its elevation to a standalone hallmark [^lopezOtin2023]:

1. **Cross-species evidence accumulation** — microbiome aging effects demonstrated across invertebrates, fish, and mammals; the killifish FMT result (Smith 2017) provided particularly striking vertebrate lifespan extension data — see [[nothobranchius-furzeri]] (verified).
2. **Mechanistic specificity** — distinct mechanistic pathways identified (LPS translocation, microbiome-derived metabolites, immune training) that operate independently of the mechanisms attributed to other hallmarks.
3. **Therapeutic traction** — fecal microbiome transplantation, targeted probiotics, prebiotics, and "postbiotic" strategies (direct metabolite supplementation, e.g., [[urolithin-a]]) now constitute a semi-distinct intervention category.

## Core observations

### Reduced diversity with aging

Cross-sectional and longitudinal cohort studies consistently find that gut microbiome alpha-diversity (species richness, Shannon entropy) declines with age. The ELDERMET cohort (Ireland; community-dwelling elderly) showed that microbiome composition in 178 older adults (age 64–102, mean 78 ± 8 yr) clustered strongly with residence type — community-dwelling individuals retained greater diversity than long-term residential care residents, and diversity correlated inversely with frailty scores [^claesson2012]. Critically, the paper's primary interpretive claim is that diet is the dominant upstream driver of microbiome composition (which in turn affects health), not aging per se: diet changed within 1 month of entering long-term care, while the microbiome took approximately 1 year to shift to the long-stay profile, supporting a diet → microbiota → health causal direction. The ELDERMET finding is influential but cross-sectional; it cannot establish whether dysbiosis drives frailty, or whether frailty (via diet change and polypharmacy) drives dysbiosis in the long-stay population. #gap/contradictory-evidence

### Compositional shifts

The most consistently reported compositional changes with aging across cohort studies include #gap/unsourced — specific magnitude figures below are from the training-knowledge synthesis and have not been verified against individual primary sources:

- **Decreased** *Faecalibacterium prausnitzii*, *Bifidobacterium* spp., *Lactobacillus* spp. — key butyrate and lactate producers associated with gut epithelial health
- **Decreased** *Akkermansia muciniphila* — the dominant mucolytic bacterium; its abundance correlates with metabolic health and intestinal barrier integrity (see [[akkermansia-muciniphila]] — verified-partial, R12)
- **Increased** *Proteobacteria* (including *Enterobacteriaceae*) — gram-negative, LPS-bearing phylum; expansion linked to gut barrier dysfunction and systemic inflammation
- **Increased** *Clostridiales* pro-inflammatory species at the expense of anti-inflammatory species within the same order

**A note on the Firmicutes/Bacteroidetes ratio:** Early literature cited an age-associated increase in the F/B ratio. This metric has largely been abandoned as a reliable aging biomarker; it varies enormously by cohort, geography, and diet, and the directionality of change is inconsistent across studies. It is not used here. #gap/unsourced

### Reduced short-chain fatty acid production

Declining *Faecalibacterium prausnitzii*, *Roseburia*, and *Eubacterium rectale* abundance translates to reduced fermentation of dietary fiber into **short-chain fatty acids (SCFAs)** — principally butyrate, propionate, and acetate. Butyrate is:

- The primary energy substrate for colonocytes (gut epithelial cells), supporting mucosal barrier integrity
- A histone deacetylase (HDAC) inhibitor — with epigenetic anti-inflammatory effects on intestinal immune cells
- A signaling molecule acting on GPR41, GPR43, and GPR109A receptors on immune cells and enteroendocrine cells

See [[scfa-signaling]] (verified R13) for the full biology. Reduced SCFA production with aging represents a tractable mechanistic link between microbiome compositional changes and gut barrier dysfunction. #gap/unsourced — citation for magnitude of SCFA decline with aging needed.

### Gut barrier dysfunction and LPS translocation ("leaky gut")

Age-associated thinning of the intestinal mucus layer, combined with reduced SCFA-supported epithelial integrity, increases gut barrier permeability. This allows translocation of bacterial products — principally **lipopolysaccharide (LPS)**, the gram-negative outer membrane component — into the portal and systemic circulation. Circulating LPS activates TLR4 on macrophages and other immune cells, driving NF-κB-mediated cytokine production (TNF-α, IL-6, IL-1β). This is the primary molecular bridge from gut dysbiosis to systemic **[[chronic-inflammation]]** (inflammaging).

The LPS → TLR4 → NF-κB → cytokine axis is well-established in the endotoxemia literature; the age-related increase in low-grade circulating LPS (metabolic endotoxemia) is supported by observational data in elderly cohorts but causality and magnitude specifics have not been verified against primary sources here. #gap/unsourced — citation needed for human cohort LPS measurements with age.

## Connections to other hallmarks

Dysbiosis is deeply bidirectional with several other hallmarks:

| Hallmark | Relationship |
|---|---|
| [[chronic-inflammation]] | Dysbiosis → LPS translocation → TLR4 → NF-κB → systemic cytokines; conversely, inflammaging disrupts intestinal immune homeostasis and alters microbiome composition. Bidirectional and mutually reinforcing. |
| [[altered-intercellular-communication]] | Microbiome-derived metabolites (SCFAs, urolithins, bile acids, polyamines, TMAO) are systemic signaling molecules; dysbiosis disrupts this communication network |
| [[cellular-senescence]] | SASP from senescent gut stromal and epithelial cells may alter the mucosal niche, facilitating dysbiosis; conversely, dysbiosis-driven inflammation can accelerate senescence accumulation via NF-κB |
| [[stem-cell-exhaustion]] | Gut crypt stem cells (Lgr5+ cells) depend on microbiome-derived signals for niche maintenance; dysbiosis-driven inflammation may impair crypt stem cell function #gap/no-mechanism |
| [[disabled-macroautophagy]] | Autophagy is required for intestinal epithelial integrity (Paneth cell homeostasis); declining autophagy may worsen barrier dysfunction and worsen the dysbiosis→inflammation cycle. See [[autophagy]] when seeded. |

## Microbiome-derived metabolites relevant to aging

The microbiome functions as an endocrine organ — producing metabolites that reach systemic circulation and affect aging biology across organ systems.

### Urolithin A (UA)

A gut bacterial metabolite of dietary **ellagitannins** (pomegranates, walnuts, certain berries), produced by *Gordonibacter urolithinfaciens* and *Ellagibacter isourolithinifaciens*. UA is a **mitophagy inducer** with Phase 2 RCT evidence in middle-aged adults for muscle strength and endurance gains. See **[[urolithin-a]]** (verified-partial) for the full mechanistic profile and ATLAS RCT data. #gap/needs-replication — independent replication beyond Amazentis-sponsored trials needed.

Importantly, ~40% of individuals are non-producers of UA due to microbiome metabotype variation — the same dietary intake produces no circulating UA in non-producers, explaining why direct supplement formulations (Mitopure) bypass the microbiome bottleneck entirely.

### Short-chain fatty acids (SCFAs)

Butyrate, propionate, and acetate — produced by fermentation of dietary fiber by *Faecalibacterium prausnitzii*, *Roseburia*, *Eubacterium rectale*, and related taxa. In addition to colonocyte fuel and HDAC inhibition (above), SCFAs modulate systemic immunity, adipocyte function, and gut-brain signaling. Reduced SCFA production with age is a plausible mechanism linking microbiome changes to both gut inflammation and systemic metabolic effects. See [[scfa-signaling]] (verified R13).

### TMAO (trimethylamine N-oxide)

A pro-atherosclerotic metabolite produced by gut bacterial conversion of dietary choline and L-carnitine (via trimethylamine, TMA) to TMAO by hepatic FMO3. Elevated plasma TMAO is associated with cardiovascular disease risk in prospective human cohort studies. Whether TMAO increases with aging per se (vs. dietary intake variation) is not well established. See [[tmao]] (stub). #gap/unsourced — no verified primary source for age-specific TMAO trajectory on this page.

### Spermidine and other polyamines

Polyamines (spermidine, spermine, putrescine) can be produced or degraded by gut bacteria and have systemic effects on autophagy, mitochondrial function, and epigenetic regulation. See **[[spermidine]]** when seeded. #gap/unsourced

### Secondary bile acids

The gut microbiome converts primary bile acids (synthesized by the liver from cholesterol) into secondary bile acids via bacterial dehydroxylation. Secondary bile acids act as signaling molecules via TGR5 and FXR receptors, affecting metabolic regulation and intestinal immunity. Age-related shifts in bile acid profiles (mediated partly by microbiome changes) may contribute to metabolic aging. #gap/unsourced — no primary-source citation verified here.

## Cross-organism evidence

### Killifish FMT extends vertebrate lifespan (strong cross-species evidence)

The most compelling experimental evidence that microbiome aging drives systemic aging comes from *Nothobranchius furzeri* (African turquoise killifish; GRZ strain). Smith et al. 2017 treated middle-aged (9.5-week-old) recipients overnight with an antibiotic cocktail (vancomycin, metronidazole, neomycin, ampicillin), then exposed them for 12 h to gut content from 6-week-old (young) donors (Ymt group), 9.5-week-old same-age donors (Omt group), or antibiotic-only controls (Abx). Young-microbiome recipients (Ymt) showed a **+37% median lifespan increase vs untreated wild-type controls** (p=4.04×10⁻⁹, Logrank test; Figure 4B). Critically, same-age microbiota transfer (Omt) did **not** extend lifespan vs untreated controls, confirming that lifespan extension is specific to young-donor microbiota and not an artifact of antibiotic treatment or any microbiome recolonization. Young-microbiome recipients also maintained significantly higher spontaneous locomotor activity at 16 weeks of age compared to all control groups (Figure 4C; Dunn Kruskal-Wallis multiple comparison test, BH-adjusted p=0.004) [^smith2017]. The full evidence is documented on **[[nothobranchius-furzeri]]** (verified); this note is for navigation only.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — microbiome-aging interactions documented in humans; specific genera and metabolites differ |
| Phenotype conserved in humans? | unknown — no controlled human longevity trial of young-microbiome transfer |
| Replicated in humans? | no |

#gap/needs-human-replication — FMT for aging/longevity has not been tested in controlled human trials with lifespan or healthspan primary endpoints.

### Mouse models

Murine germ-free (GF) vs colonized experiments and selective microbiome manipulation have demonstrated microbiome effects on immune system maturation, intestinal barrier function, systemic inflammation, and metabolic phenotypes. However, mouse gut microbiome composition differs substantially from humans (different dominant phyla, genera, and metabolic capacities). Mouse-specific dysbiosis findings should be cross-checked against human cohort data before extrapolation. See [[mus-musculus]] (verified).

### Centenarian microbiomes

Observational studies of centenarians (>100 yr) and semi-supercentenarians in China (Janda et al.) and Italy have noted enrichment of specific taxa (including *Akkermansia muciniphila*, certain *Christensenellaceae* family members) in long-lived individuals vs age-matched elderly controls. These are cross-sectional observational associations; causality is not established; confounds (diet, geography, frailty selection) are major. #gap/unsourced — specific centenarian microbiome citations not verified on this page.

## Disease phenotypes

Gut dysbiosis is associated with (or implicated mechanistically in) multiple age-related conditions:

| Condition | Mechanism / association | Confidence |
|---|---|---|
| [[type-2-diabetes]] | Reduced *Akkermansia*, increased gram-negative taxa; LPS-driven insulin resistance; impaired GLP-1 signaling | Strong epidemiological; mechanism supported but multi-factorial |
| [[chronic-inflammation]] (inflammaging) | LPS → TLR4 → cytokines; direct gut-to-systemic innate immune activation | Strong mechanistic |
| [[frailty]] | ELDERMET cohort: diversity inversely correlates with frailty score; SCFAs affect muscle protein synthesis; nutrient absorption | Strong observational association; causality unclear |
| Cardiovascular disease | TMAO axis; LPS-driven systemic inflammation; bile acid signaling effects on cholesterol metabolism | Moderate |
| Cognitive decline / Alzheimer's | Gut-brain axis: SCFAs cross BBB; LPS may reach brain via vagal nerve or circulation; association with amyloid and tau pathology in preliminary human studies | Preliminary; #gap/needs-replication |
| [[sarcopenia]] | Reduced SCFA effects on muscle protein synthesis; inflammaging-mediated anabolic resistance; impaired gut absorption of nutrients | Plausible but evidence primarily observational |

## Therapeutic angles

This section is a navigational overlay; mechanistic detail lives on compound and intervention pages.

| Strategy | Target | Stage | Notes |
|---|---|---|---|
| **Fecal microbiome transplantation (FMT)** | Global microbiome rejuvenation | Preclinical strong; clinical: C. diff (FDA-approved), IBD (investigated); aging-specific: not yet in RCT | Smith 2017 killifish result is the strongest preclinical support for longevity FMT — see [[nothobranchius-furzeri]] |
| **Akkermansia muciniphila supplementation** | Gut barrier integrity; metabolic health | Phase 2 proof-of-concept in obesity/metabolic syndrome (Depommier 2019, n=40 enrolled/n=32 completed); aging-specific trials not yet completed | Pasteurized *A. muciniphila* (10^10 cells/day, 3 months) improved insulin sensitivity, reduced insulinemia and cholesterol vs placebo in overweight/obese adults; overall gut microbiome community structure was not significantly changed by supplementation [^depommier2019]. See [[akkermansia-muciniphila]] (verified-partial, R12). #gap/needs-replication — proof-of-concept only; not powered for definitive conclusions; no aging-specific cohort tested |
| **[[interventions/dietary/prebiotics|Prebiotics]]** (dietary fiber, inulin, FOS) | SCFA-producing taxa enrichment | Implemented (dietary); RCT evidence for aging-specific outcomes limited | #gap/needs-replication |
| **Postbiotics — inactivated microbe / microbial fragment preparations** | Bypass live-cell variability while retaining barrier-reinforcing surface antigens (per ISAPP 2021 strict definition: inanimate microorganisms and/or their components conferring a health benefit; isolated metabolites such as pure SCFAs are NOT postbiotics under this definition) | Pasteurized [[akkermansia-muciniphila]] (Depommier 2019; Kang 2024) is the leading aging-relevant postbiotic; isolated-metabolite supplements (purified butyrate, [[urolithin-a]]) sit outside the ISAPP postbiotic class and are tracked separately | See [[interventions/dietary/postbiotics]] for full class context |
| **[[caloric-restriction]]** | Modulates microbiome composition | Verified-partial — CR affects microbiome; aging-specific microbiome effects in CALERIE not fully characterized | See [[caloric-restriction]] (verified-partial) |
| **Mediterranean diet** | Increase diversity; favor SCFA producers | Observational evidence favorable; RCT evidence limited | #gap/needs-replication |
| **[[interventions/dietary/probiotics|Probiotics]]** (specific strains) | Targeted repletion of beneficial taxa; strain-specific effects on gut-symptom endpoints (gas/bloating/transit) and immune markers; AGA 2020 recommends against for IBS | Strain–disease pairings modest; Goodoory 2023 meta-analysis (82 RCTs) downgraded most IBS-symptom evidence to low/very-low certainty; systematic evidence in aging-specific outcomes weak | #gap/needs-replication |
| **[[berberine]]** | Gut-luminal CutC/FMO inhibition via bacterial-NR-mediated conversion to dihydroberberine; enriches [[akkermansia-muciniphila]]; suppresses TMAO axis | Supplement; clinical RCTs (Chen 2020 CBAR n=891 colorectal adenoma; Tan 2025 6-yr followup HR 0.58 for any adenoma; BRAVO 2026 negative for adiposity / positive for LDL-ApoB-CRP); aging-specific endpoint trials absent | The most mechanistically dissected "vitamin-like luminal agent" — ~0.68% oral bioavailability is the *mechanism* (acts as a bacterial-enzyme cofactor rather than systemic drug). Plasma TMAO ↓ 58–64% in HFD-fed hamsters (Ma 2022). See [[berberine]]. #gap/needs-human-replication for aging-specific endpoints |

## Targeted interventions

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[dysbiosis]])
  OR contains(target-hallmarks, [[dysbiosis]])
SORT clinical-stage DESC
```

Only metformin links here via `hallmarks:` frontmatter (gut-microbiome-modulation mechanism). Urolithin-a has a microbiome-derived mechanism but is not yet tagged to this hallmark. FMT and Akkermansia supplementation pages are on the seeding roadmap. See [[frameworks/interventions-by-hallmark]] § Dysbiosis for coverage gap detail.

---

## Limitations and gaps

This hallmark page reflects the wiki's most under-developed coverage area. Specific structural limitations:

- **Most evidence is cross-sectional.** Prospective longitudinal microbiome studies with hard aging outcomes (mortality, disability, frailty onset) are sparse and under-powered. Causality vs correlation remains the dominant unresolved question for nearly every association listed above. #gap/needs-replication
- **Diet and geography as massive confounds.** Microbiome composition is highly sensitive to diet, antibiotic history, geographic region, and co-morbidities. Most cohort studies inadequately control for diet. This makes generalizable claims about "aging microbiome changes" inherently provisional.
- **Strain-level resolution lacking in older literature.** 16S rRNA amplicon sequencing (the dominant method in cohort studies) provides genus-level resolution; species- and strain-level claims require shotgun metagenomic sequencing. Many older results conflate genus-level observations with species-level claims.
- **Causality direction is unresolved.** Does dysbiosis drive the frailty/inflammaging phenotype, or do aging physiology and frailty alter the microbiome? Likely bidirectional with no clear primary driver.
- **Cross-species translatability.** Killifish FMT data is striking but killifish-specific genera and metabolites likely differ from the human mechanism. Mouse microbiome composition diverges substantially from humans.
- **Clinical trial endpoints.** Human trials in the dysbiosis/aging space lack consensus primary endpoints — microbiome composition, functional metabolites (SCFAs, TMAO), disease endpoints, or aging biomarkers (biological age clocks) each measure different things.
- **Wiki coverage gap** — several entities referenced on this page do not yet have atomic pages: [[tmao]], [[lps-tlr4-nfkb]], [[gut-barrier]]. These are high-priority stubs for the next seeding round. *(R12-R13: [[akkermansia-muciniphila]] verified-partial, [[scfa-signaling]] verified, [[spermidine]] verified.)*

## Open questions

1. **Cause or consequence?** Is age-associated dysbiosis a primary driver of systemic aging, a consequence of failing organ systems (immune decline, gut motility changes, polypharmacy), or both? Manipulative experiments (FMT, germ-free colonization) provide some causal leverage but the human situation is underdetermined.
2. **Do microbiome rejuvenation strategies work via the microbiome or independently?** For example, [[urolithin-a]] supplement bypasses the microbiome entirely — is it superior to dietary ellagitannin intake in high producers? If so, why target the microbiome at all for that specific intervention?
3. **Which metabolites are the key mediators?** The microbiome produces thousands of metabolites. SCFAs and urolithins are the best characterized; the full metabolic spectrum of the aging gut microbiome → systemic aging effects is not mapped.
4. **Therapeutic window for FMT.** In killifish, middle-aged recipients benefited; in humans, the optimal age window and donor selection criteria for longevity-focused FMT are completely unknown.

## Position in causal hierarchy

This hallmark is classified as **Integrative outcome tier** (mechanistic-tier: integrative / intervention-tractability: moderate). See [[frameworks/hallmark-causality-graph]] for the full hierarchy and intervention-sequencing argument.

Direct upstream nodes per `caused-by:` frontmatter: [[chronic-inflammation]] (inflammaging disrupts intestinal immune homeostasis and alters microbiome composition — bidirectional), [[cellular-senescence]] (SASP from senescent gut stromal cells alters the mucosal niche).
Direct downstream nodes per `causes:` frontmatter: [[chronic-inflammation]] (LPS translocation → TLR4 → NF-κB → systemic cytokines — bidirectional; diet is dominant upstream per Claesson 2012), [[altered-intercellular-communication]] (microbiome-derived metabolites as systemic signaling molecules).
Note: Bidirectionality with [[chronic-inflammation]] is genuine — both nodes drive each other. The ordering here reflects that LPS-mediated NF-κB activation is a well-characterized mechanism from dysbiosis to inflammation, but the relative magnitude of this contribution vs. other inflammatory drivers in human aging is not established.
Edge evidence is in [[frameworks/causal-graph-data]].

## Cross-references

- [[hallmarks-of-aging]] — parent MOC; dysbiosis is one of three integrative hallmarks
- [[chronic-inflammation]] — bidirectional; gut barrier → LPS → inflammaging
- [[altered-intercellular-communication]] — microbiome metabolites as systemic signals
- [[urolithin-a]] (verified-partial) — gut bacterial metabolite; mitophagy inducer; Phase 2 RCT data
- [[caloric-restriction]] (verified-partial) — modulates microbiome; affects aging via multiple mechanisms
- [[nothobranchius-furzeri]] (verified) — Smith 2017 FMT vertebrate lifespan extension
- [[type-2-diabetes]] (verified-partial) — dysbiosis well-established association
- [[frailty]] (verified) — ELDERMET diversity-frailty correlation
- [[sarcopenia]] (verified) — plausible downstream target of dysbiosis-driven inflammation
- [[akkermansia-muciniphila]] — verified-partial (R12 2026-05-05); central therapeutic target
- [[ewingella-americana]] — gut-derived facultative anaerobe with antitumor activity (Iwata 2025; murine Colon-26 100% CR vs 20% anti-PD-L1; non-mammalian-vertebrate gut microbiome as therapeutic pharmacopoeia)
- [[interventions/pharmacological/bacterial-cancer-therapy]] — tumor-targeting bacteria as a distinct intervention modality; mechanism intersects with the dysbiosis/microbiome research cluster
- [[scfa-signaling]] — verified (R13 2026-05-05) — butyrate/propionate/acetate biology
- [[tmao]] — #stub — cardiovascular-risk metabolite
- [[spermidine]] — #stub — polyamine-autophagy connection
- [[gut-barrier]] — #stub — intestinal barrier biology; tight junctions, mucus layer
- [[oral-microbiome-aging-shifts]] — the **oral cavity** is a second major dysbiotic niche in aging, distinct from the gut; subgingival inflammophilic dysbiosis is the keystone-pathogen mechanism behind [[periodontitis]]
- [[porphyromonas-gingivalis]] — keystone oral pathogen; gingipain virulence; oral→systemic (cardiovascular, Alzheimer's) dissemination
- [[periodontitis]] · [[gingival-recession]] · [[tooth-loss]] — oral-dysbiosis disease phenotypes feeding inflammaging and frailty
- [[studies/lopez-otin-2023-hallmarks-expanding-universe]] — canonical 2023 expansion reference

---

## Footnotes

[^lopezOtin2023]: [[studies/lopez-otin-2023-hallmarks-expanding-universe]] · doi:10.1016/j.cell.2022.11.001 · López-Otín C, Blasco MA, Partridge L, Serrano M, Kroemer G · Cell 2023;186(2):243-278 · review · dysbiosis elevated from sub-component to standalone integrative hallmark; canonical framework reference for this page · archive: closed-access (not_oa); PDF not available locally #gap/no-fulltext-access

[^claesson2012]: [[studies/claesson-2012-eldermet-microbiota-elderly]] · doi:10.1038/nature11319 · Claesson MJ et al. · Nature 2012;488(7410):178-184 · observational (cohort; ELDERMET; Ireland) · n=178 non-antibiotic-treated elderly subjects (age 64–102, mean 78±8 yr) across 4 residence settings: community-dwelling n=83, day-hospital n=20, short-term rehabilitation n=15, long-term residential care n=60; plus 13 young adult controls (mean 36±6 yr) · 16S rRNA V4 amplicon sequencing (454 Titanium platform; 5.4M reads; 47,563 OTUs at 97% identity) · key results: microbiota composition clearly separated by residence type (UniFrac PCoA); diet-microbiota co-segregation confirmed by Procrustes analysis (Monte-Carlo P<0.0001); long-stay subjects had significantly less diverse microbiota than community-dwellers; faecal butyrate, acetate, and propionate higher in community vs long-stay (metabolomics + shotgun metagenomics for SCFA gene frequencies); inflammation markers (TNF-α, IL-6, IL-8, CRP) significantly higher in long-stay/rehabilitation; diet changed within 1 month of long-stay admission, microbiome took ~1 year to fully shift — supports diet→microbiota→health causal direction · local PDF:  — verified against full text 2026-05-04

[^smith2017]: [[studies/smith-2017-killifish-fmt-lifespan]] · doi:10.7554/eLife.27014 · Smith P, Willemsen D, Popkes M et al. · eLife 2017;6:e27014 · in-vivo · 4 groups: Ymt (9.5-wk recipients receiving 6-wk donor gut content), Omt (same-age 9.5-wk donor gut content), Abx (antibiotic-only, no recolonization), wt (untreated controls) · antibiotic pretreatment: vancomycin 0.01g/L + metronidazole 0.5g/L + neomycin 0.5g/L + ampicillin 0.5g/L overnight · p=4.04×10⁻⁹ (Ymt vs wt, Logrank); p=5.08×10⁻⁶ (Ymt vs Omt, Logrank); p=5.89×10⁻⁵ (Ymt vs Abx, Logrank) · model: N. furzeri GRZ strain · +37% median lifespan (Ymt vs wt); +41% vs same-age microbiota controls (Omt); Omt did NOT live longer than wt controls; young-microbiome specificity confirmed · locomotor activity at 16 wk significantly higher in Ymt vs all controls (BH-adjusted p=0.004, Dunn Kruskal-Wallis) · key longevity-associated genera identified: Exiguobacterium, Planococcus, Propionigenium, Psychrobacter · local PDF:  — verified against primary source (primary verification on [[nothobranchius-furzeri]] page; re-verified in full for this page 2026-05-04)

[^depommier2019]: [[studies/depommier-2019-akkermansia-human-rct]] · doi:10.1038/s41591-019-0495-2 · Depommier C et al. (Cani lab) · Nature Medicine 2019;25(7):1096-1103 · rct (randomized, double-blind, placebo-controlled; 3 months) · n=40 enrolled, n=32 completed (placebo n=11, pasteurized A. muciniphila n=12, live A. muciniphila n=9) · participants: overweight/obese with metabolic syndrome (BMI >25, insulin-resistant) · dose: 10^10 bacteria/day oral · pasteurized A. muciniphila significantly improved insulin sensitivity index (+28.62±7.02% vs placebo, P=0.002), reduced insulinemia (-34.08±7.12%, P=0.006), reduced total cholesterol (-8.68±2.38%, P=0.02), and reduced plasma LPS vs placebo; overall gut microbiome structure unaffected by supplementation; no serious adverse events; compliance >99% all groups · local PDF:  — verified against full PMC author manuscript
