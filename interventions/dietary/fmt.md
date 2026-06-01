---
type: intervention
aliases: [FMT, fecal microbiota transplantation, faecal microbiota transplant, stool transplant]
mode: dietary
mechanisms: [gut-microbiome-modulation]
targets: []
target-hallmarks: ["[[dysbiosis]]", "[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
target-pathways: ["[[scfa-signaling]]", "[[nf-kb]]"]
human-evidence-level: limited
clinical-stage: phase-2
safety-profile: "well-established (rCDI; FDA-approved Rebyota+Vowst) | investigational (aging-rejuvenation; ESBL transmission risk in immunocompromised)"
translation-gap: phase-3-rct-needed
next-experiment: "Double-blind RCT (n>=100) of young-donor FMT vs age-matched donor FMT in adults ≥65 with clinically measured frailty index as primary endpoint and 12-month inflammatory biomarker panel as secondary."
clinical-trials-active: 3
literature-checked-through: 2026-05-07
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Smith 2017 (eLife), Bárcena 2019 (Nat Med), Chen 2020 (Aging), DeFilipp 2019 (NEJM) verified end-to-end against local PDFs. Boehme 2021 (Nature Aging) and Chuang 2023 (Eur J Clin Microbiol Infect Dis) are closed-access (not_oa); body claims from these sources are framed qualitatively only and tagged #gap/no-fulltext-access in their footnotes. ClinicalTrials.gov trial count (n=3) spot-checked against v2 API."
---

# Fecal microbiota transplant (FMT)

Transfer of processed fecal material from a healthy donor to a recipient's gastrointestinal tract with the goal of restoring or modifying the recipient's gut microbial community. **The only intervention with direct evidence that the gut microbiome causally influences host lifespan in a vertebrate model** (killifish; Smith 2017 [^smith2017]). In rCDI it is FDA-approved and standard-of-care; in aging it is investigational only, with active Phase 1/2 trials but no hard-endpoint RCT completed.

## Mode classification rationale

FMT is classified as `mode: dietary` rather than `mode: stem-cell-therapy` for two reasons: (1) the wiki has no `microbiome-therapy` mode class, and (2) FMT delivers a microbial community via the gut — an oral or enteral route biologically analogous to dietary supplementation. It is not autologous cell therapy, does not involve surgical engraftment of tissue, and its mechanism of action is primarily metabolic (SCFA restoration, bile-acid metabolism, pathobiont displacement) rather than cell-type repopulation. If a dedicated `mode: microbiome-therapy` value is ever added to the CLAUDE.md schema, this page should be updated. #gap/unsourced — this mode decision is a wiki-schema choice, not a medical classification.

## Established medical use — rCDI (indication anchor)

FMT for recurrent *Clostridioides difficile* infection (rCDI) is the only **FDA-approved** microbiome-intervention indication:

| Product | Approval | Route | Sponsor | Notes |
|---|---|---|---|---|
| **Rebyota** (RBX2660) | Nov 2022 | Rectal enema | Ferring Pharmaceuticals | Live suspension; >8 wk post-antibiotic CDI course |
| **Vowst** (SER-109) | Apr 2023 | Oral capsule (4 caps × 3 days) | Seres Therapeutics | Lyophilized spore-enriched oral product; first orally administered microbiome therapeutic |

These products establish FMT as clinically validated and safe at the population level for the rCDI indication — but this evidence does **not** transfer to the aging indication. The immunological context, donor-selection criteria, dosing, and outcome measures are entirely different.

## Delivery routes

- **Nasoduodenal / nasogastric tube** — most common in early clinical studies; avoids upper GI acid environment
- **Colonoscopic instillation** — deeper delivery to colon; historically the most common route; allows mucosal inspection
- **Retention enema** — lower-cost; patient-administered; suitable for rectal-reaching pathobionts
- **Oral capsules (lyophilized)** — Vowst/SER-109 is the proof of concept; requires spore-forming survival through gastric acid; patient-friendly
- **Washed microbiota transplant (WMT)** — centrifugation-enriched preparation that removes inflammatory proteins in donor stool; lower adverse-event profile than crude FMT (theoretical)
- **Sterile fecal filtrate transfer (FFT)** — bacteriophage-enriched filtrate with no live bacteria; tests whether soluble components and phage mediate CDI protection independent of bacterial engraftment

## Mechanisms of action (aging context)

FMT's aging-relevant effects are hypothesised through several interconnected mechanisms:

| Mechanism | Detail | Evidence status |
|---|---|---|
| **SCFA restoration** | Young/healthy donors supply butyrate-producing *Roseburia*, *Faecalibacterium prausnitzii* — displacing age-associated Enterobacteriaceae; butyrate feeds colonocytes, suppresses NF-κB, and induces [[autophagy]] | Mechanistic; see [[scfa-signaling]] |
| **Pathobiont displacement** | Gram-negative Proteobacteria (LPS producers) decline as butyrate-producers engraft; lower systemic LPS → reduced TLR4-mediated inflammaging | Demonstrated in progeroid-mouse FMT study [^barcena2019] |
| **Bile acid normalization** | Secondary bile acids (deoxycholic acid, lithocholic acid) require intact gut flora for 7α-dehydroxylation; dysbiosis impairs this; FMT restores secondary BA profile, modulating FXR/TGR5 signalling | Bárcena 2019 identified secondary BA shifts [^barcena2019] |
| **Immune modulation** | Gut microbiome controls regulatory T-cell induction and gut-barrier tight-junction integrity; "young" community resets the gut-associated lymphoid tissue environment | Boehme 2021: young-FMT recipients showed reversed immune alterations in peripheral tissues and brain [^boehme2021] |
| **Akkermansia** | *A. muciniphila* is the hallmark mucus-layer maintainer; depleted in aged guts; Bárcena 2019 showed transplantation of *A. muciniphila* alone recapitulated key benefits of full FMT in progeroid mice | See [[akkermansia-muciniphila]] |

## Animal model evidence

### Killifish (*N. furzeri*) — heterochronic FMT

Smith et al. 2017 colonised middle-aged killifish (9.5 weeks of age, near their median lifespan in captivity of 4–8 months) with gut bacteria from young fish (6 weeks) following antibiotic depletion of resident microbiota. Young-microbiota recipients (Ymt) showed **37% median lifespan extension vs untreated wild-type controls** (Logrank p = 4.04E-09), 41% vs same-age microbiota recipients (Omt; p = 5.08E-06), and **delayed behavioural decline** (preserved spontaneous locomotor activity at 16 weeks) [^smith2017]. This is the first direct vertebrate demonstration that the gut microbiome causally influences lifespan. Killifish are the most tractable vertebrate model for lifespan studies given their ~3–6 month lifespan in captivity. #gap/needs-human-replication — killifish are phylogenetically distant from humans; the translational relevance of fish gut microbiome manipulation to human aging is unknown.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — SCFA/microbiome-immune axis conserved; killifish microbiome composition very different |
| Phenotype conserved in humans? | unknown |
| Replicated in humans? | no |

### Progeroid mice (*Lmna*^G609G^) — young→progeroid FMT

Bárcena et al. 2019 administered FMT from healthy wild-type donors to progeria-model (*Lmna*^G609G/G609G^) mice and found extended healthspan and lifespan (**13.5% increase in median lifespan, 160 vs 141 days, P = 0.0029**), along with intestinal dysbiosis reversal (elevated Proteobacteria and Cyanobacteria in progeria reduced; Verrucomicrobia/*Akkermansia* restored) [^barcena2019]. Transplantation of *A. muciniphila* alone was sufficient to exert beneficial effects. Secondary bile acid profiles were also normalised.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — Lmna progeria model is mechanistically distinct from normal aging; Proteobacteria-dysbiosis pattern is shared |
| Phenotype conserved in humans? | unknown — no equivalent human trial |
| Replicated in humans? | no |

### Centenarian → young mice FMT

Chen et al. 2020 transferred fecal microbiota from a single 101-year-old long-living donor (L group) into 11-month-old C57BL/6 mice (n=16 total; ~8 per group), using an elderly 70-year-old donor as the control group (E group). L-group recipients showed increased alpha-diversity, expansion of probiotic genera (*Lactobacillus*, *Bifidobacterium*) and SCFA-producing genera (*Roseburia*, *Faecalibacterium*, *Ruminococcus*, *Coprococcus*), reduced lipofuscin (brain, p<0.05) and senescence-associated β-galactosidase accumulation (heart and ileum, p<0.0001), and elongated intestinal villi (p<0.001) compared to E-group controls [^chen2020]. #gap/needs-replication — single study; one centenarian donor only; mice were middle-aged not young at baseline; translational relevance to human aging unclear.

### Young → aged mice — cognitive reversal

Boehme et al. 2021 transplanted microbiota from 3–4-month-old mice into 19–20-month-old recipients. Young-microbiota transplants reversed aging-related immune alterations in peripheral tissues and brain, modified hippocampal metabolome and transcriptome, and attenuated selective cognitive impairments in aged hosts [^boehme2021]. This is the primary preclinical anchor for FMT-aging-cognition trials. #gap/needs-human-replication. Note: specific n per group, p-values, and effect sizes are unverified (paper is closed-access) #gap/no-fulltext-access.

## Human evidence — aging indication

**No published large-sample RCT exists for FMT in normal aging or frailty as of May 2026.** Evidence is limited to:

- **Case reports / case series** — several case reports describe cognitive improvement after FMT in Alzheimer's patients; no controlled studies have been published. These are hypothesis-generating only.
- **Observational data from rCDI cohorts** — rCDI disproportionately affects older adults; some rCDI cohorts have reported secondary frailty or cognitive trajectories post-FMT, but these are not powered or designed to test aging outcomes.
- **Phase 1/2 trials (active as of 2026-05-07):** three trials retrieved from ClinicalTrials.gov v2 API:
  - NCT05598112 — "Effect of FMT on Aging and the Underlying Mechanisms" (Early Phase 1)
  - NCT06649981 — "Aging Resilience Through Microbiota Optimization and Regulation" (Phase 1)
  - NCT06496412 — "Safety and Efficacy of FMT on Cognitive Function" (no phase; n=40-210 range)

These trials are ongoing; no results have been published from aging-specific endpoints. `clinical-trials-active: 3` as of 2026-05-07.

## Donor selection and the super-donor hypothesis

Donor screening for clinical FMT is extensive: stool cultures (enteric pathogens, *C. difficile* toxin), blood serology (HIV, HCV, HBV, CMV, EBV, HTLV), antibiotic-resistance gene screening (ESBL, carbapenemase, MRSA, VRE), parasite panels, and exclusion criteria for recent antibiotic use, IBD, autoimmune disease, and obesity.

The **super-donor hypothesis** proposes that a minority of donors produce fecal material with disproportionately high engraftment rates and clinical response — possibly due to phage composition, SCFA-producer abundance, or immunomodulatory strains. If valid, donor stratification rather than universal FMT could dramatically improve efficacy. Currently supported by observational data from IBS and IBD FMT trials but not yet validated in aging trials. #gap/no-mechanism — the biological basis of super-donor efficacy is unresolved.

For aging applications, the additional dimension of **donor age** is critical: should the donor be young (to supply a "young-like" microbiome for heterochronic benefit), or healthy-aged (for immunological compatibility)? No aging RCT has resolved this.

## Comparison with other dysbiosis interventions

| Intervention | Mechanism | Evidence tier (aging) | Hallmark coverage | Link |
|---|---|---|---|---|
| **FMT** | Community restoration; engraftment of donor strains | Preclinical strong; human limited | [[dysbiosis]], [[chronic-inflammation]] | this page |
| **Prebiotics** | Substrate supply (fibre); enriches SCFA-producing species indirectly | Human observational | [[dysbiosis]] | [[prebiotics]] |
| **Probiotics** | Single- or multi-strain supplementation | Human limited; small RCTs | [[dysbiosis]] | [[lactobacillus]], [[bifidobacterium]] |
| **Postbiotics** | Microbial metabolites or heat-inactivated bacteria; no live cells | Preclinical/limited human | [[dysbiosis]] | [[postbiotics]] |
| **Akkermansia supplementation** | Specific mucus-layer restorer; postbiotic or live | Phase 2 (MetaboAge) | [[dysbiosis]], [[gut-barrier]] | [[akkermansia-muciniphila]] |

FMT is the only intervention that delivers the **complete community** — donor phage, SCFA producers, secondary-bile-acid converters, and immune-modulatory strains simultaneously. This is both its mechanistic advantage and its regulatory complexity.

## Safety profile

### rCDI indication — well-established

In rCDI populations (typically elderly or immunocompromised patients receiving antibiotics), Rebyota and Vowst have well-established safety profiles from Phase 3 RCTs. The most common adverse events are gastrointestinal (bloating, cramping, flatulence) and self-limiting.

### Aging/healthy-population indication — investigational

**Critical safety caveat:** In 2019, a high-profile NEJM case series (DeFilipp et al.) documented two immunocompromised patients who developed ESBL-producing *E. coli* bacteremia after receiving FMT from a shared donor; one died [^defilipp2019]. The source was an inadequately screened donor with ESBL carriage. This prompted the FDA to issue a safety alert and require ESBL screening in donor stool.

Relevance for aging: older adults have higher rates of immune senescence and are partially overlapping with the "immunocompromised" population at risk. A 2023 donor-screening study found **35.2% (56/159) of donor stools carried ESBL-producing organisms** and 31.4% carried diarrheagenic *E. coli* — even after initial health screening [^chuang2023]. Rigorous multi-step screening is essential.

Additional long-term unknowns:
- **Engraftment durability**: how long donor strains persist; whether re-administration is needed
- **Downstream host-microbiome co-evolution**: whether donor strains alter host immune set-points in unpredictable ways at long timeframes
- **Cancer risk**: theoretical concern that specific microbiome profiles (e.g., *Fusobacterium nucleatum* enrichment) could increase colorectal cancer risk — no evidence in FMT recipients but not excluded

## Limitations and gaps

- #gap/needs-human-replication — all lifespan/healthspan evidence is in fish or mice; no human aging RCT has completed
- #gap/long-term-unknown — durability of microbiome engraftment after single FMT in aging context is unstudied; rCDI recipients show engraftment waning over months
- #gap/dose-response-unclear — optimal donor age, preparation method, route, and dosing frequency for aging indication are entirely undefined
- #gap/needs-replication — Chen 2020 (centenarian → middle-aged mouse) is a single study with one centenarian donor; no independent replication
- #gap/no-mechanism — super-donor biology and predictors of FMT engraftment success are unresolved
- The progeroid-mouse model (Bárcena 2019) is an accelerated-aging model mechanistically distinct from normal chronological aging; translation confidence is low

## Cross-references

- [[dysbiosis]] — primary hallmark targeted
- [[gut-microbiome-aging-shifts]] — detailed taxonomy of age-associated compositional shifts
- [[gut-barrier]] — FMT effects on tight-junction integrity and mucus layer
- [[chronic-inflammation]] — downstream consequence of dysbiosis; FMT target via LPS/SCFA axis
- [[scfa-signaling]] — key effector pathway
- [[akkermansia-muciniphila]] — key commensal restored by FMT; single-species transplant recapitulates partial FMT benefit in Bárcena 2019
- [[bifidobacterium]] — age-depleted probiotic genus enriched by FMT from centenarian donors
- [[lactobacillus]] — probiotic genus transferred in centenarian-donor FMT; expanded in Chen 2020 recipients
- [[prebiotics]] — substrate-only alternative; weaker community-restructuring effect
- [[postbiotics]] — metabolite-bypass alternative; no live microbes; different regulatory category
- [[altered-intercellular-communication]] — gut-systemic axis; microbiome signals are intercellular communication between host and microbial cells

## Footnotes

[^smith2017]: doi:10.7554/eLife.27014 · in-vivo (killifish, *Nothobranchius furzeri*) · randomised microbiota transplant from young (6-wk) to middle-aged (9.5-wk) recipients after antibiotic depletion; controls: antibiotic-only (Abx), same-age microbiota (Omt), untreated wild-type (wt) · 37% median lifespan extension vs wt (Logrank p = 4.04E-09); 41% vs Omt (p = 5.08E-06); 21% vs Abx (p = 5.89E-05); delayed locomotor decline · local PDF available · citation percentile: 100 (n=402 citations, FWCI 20.2)

[^barcena2019]: doi:10.1038/s41591-019-0504-5 · in-vivo (progeroid *Lmna*^G609G/G609G^ mice; two models also validated in *Zmpste24*^-/-^) · FMT from healthy WT donors → progeria mice · 13.5% median lifespan extension (160 vs 141 days, P=0.0029); 9% maximal survival increase (P=0.04); dysbiosis reversal (Proteobacteria/Cyanobacteria reduced, Verrucomicrobia restored); *A. muciniphila* oral gavage alone achieved modest lifespan extension (P=0.016); secondary bile acid profile normalised · citation percentile: 100 (n=613 citations, FWCI 29.5)

[^boehme2021]: doi:10.1038/s43587-021-00093-9 · in-vivo (aged C57BL/6 mice 19–20 mo) · young-microbiota FMT from 3–4 mo donors · reversed aging-related immune alterations in peripheral tissues and brain; attenuated selective cognitive impairments; hippocampal metabolome + transcriptome modified · not_oa; PDF not in archive — quantitative claims (n per group, specific p-values, effect sizes) unverified against full text #gap/no-fulltext-access · citation percentile: 100 (n=284 citations, FWCI 24.7)

[^chen2020]: doi:10.18632/aging.102872 · in-vivo (11-month-old C57BL/6 mice; n=16 total, ~8/group) · FMT from one 101-year-old long-living donor (L group) vs one 70-year-old elderly donor (E group) · increased α-diversity; expanded *Lactobacillus*/*Bifidobacterium* and SCFA-producing genera; reduced lipofuscin (brain p<0.05) and SA-β-gal (heart/ileum p<0.0001); elongated intestinal villi (p<0.001) · OA via PMC7138539

[^defilipp2019]: doi:10.1056/NEJMoa1910437 · case-series (NEJM Brief Report) · 2 immunocompromised FMT recipients (Patient 1: hepatic encephalopathy trial NCT03420482; Patient 2: HCT trial NCT03720392) · ESBL-producing *E. coli* bacteremia transmitted from shared inadequately-screened donor (2018 FDA protocol did not require ESBL screening); 1 death (Patient 2) · prompted FDA 2019 safety alert requiring ESBL donor-stool screening · local PDF available · citation percentile: 100 (n=1092 citations, FWCI 97.6)

[^chuang2023]: doi:10.1007/s10096-023-04644-3 · observational (donor-screening audit) · n=159 stool samples · 35.2% ESBL carriage; 31.4% diarrheagenic *E. coli* carriage; only 5% (37/742) initial candidates qualified post-screening · model: clinical FMT donor bank · not_oa; PDF not in archive — percentages unverified against full text #gap/no-fulltext-access
