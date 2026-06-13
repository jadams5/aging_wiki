---
type: phenotype
aliases: [chronic periodontitis, periodontal disease, periodontium inflammation]
icd-10: K05.30
icd-10-note: "K05.30 = chronic periodontitis, unspecified. The K05.3x family codes severity: K05.311–K05.313 (localized, slight/moderate/severe); K05.321–K05.323 (generalized). The legacy 1999 ICD-10-CM 'chronic' / 'aggressive' split was superseded by the 2017 World Workshop staging/grading schema in clinical practice, but ICD billing codes retain the earlier structure."
affected-tissues: ["[[gingiva]]", "[[periodontal-ligament]]", "[[alveolar-bone]]"]
underlying-hallmarks: ["[[dysbiosis]]", "[[chronic-inflammation]]", "[[cellular-senescence]]", "[[epigenetic-alterations]]"]
typical-onset: "Subclinical biofilm dysbiosis from ~40s; clinical attachment loss detectable in many adults by 50s; severe disease peaks 60–79"
prevalence-65plus: "~79% any periodontitis; ~40% moderate-to-severe (pooled estimates, 2011–2020 data; see body)"
literature-checked-through: 2026-06-12
verified: true
verified-date: 2026-06-12
verified-by: claude
verified-scope: "Trindade 2023 prevalence figures (55 studies, 62%, 23.6% severe, 79.3% 65+) verified against PubMed abstract (full PDF hybrid-OA/unavailable but abstract contains all three numbers verbatim); Wu 2020 CAL/PPD/RR figures verified against full PDF; Arbildo-Vega 2024 OR/RR ranges and n=41 reviews verified against full PDF; Wang 2022 MR null result and instrument sources verified against full PDF; Dominy 2019 two-brain-bank claim and GAIN trial n=643 verified against full PDF + ClinicalTrials.gov; syed2026 DOI confirmed (10.1111/ger.70079) via PubMed/Crossref — full text closed-access, body claims unverified. 2026-06-12 Grade-C/C-MIP backfill verified: Tonetti 2018 Grade A/B/C criteria (≥2mm/5yr, ≥10 cigs/day, HbA1c ≥7%) confirmed via multiple OA papers citing Tonetti (Tonetti 2018 full PDF closed-access/unfetchable); Susin 2014 population-prevalence framing (highest Africa/African-descent, lowest N.European/N.American Caucasians) verified against full PDF; Fine 2024 JP2 claim verified against PMC full text — Fine mentions b serotype + JP2 promoter region but does NOT state 530-bp or fold-increase figures (those are from Brogan 1994 primary source, PMID 8300209, now cited via [^brogan1994]); '~20-fold' corrected to '10- to 20-fold' per Brogan 1994; Nibali 2026 closed-access, verified against PubMed abstract only — abstract supports treatment and C-MIP characterization claims"
---

# Periodontitis

A chronic, polymicrobial, dysbiosis-driven inflammatory disease of the tooth-supporting apparatus (periodontium), characterized by progressive destruction of alveolar bone and connective tissue resulting in clinical attachment loss (CAL). Distinct from gingivitis (reversible inflammation confined to the gingival margin) — periodontitis implies irreversible structural damage unless treated. Among the most prevalent chronic diseases globally and a prototypic **age-associated inflammatory condition**: prevalence rises steeply with age, and bidirectional causal links connect periodontitis to inflammaging, cellular senescence, and major age-associated systemic diseases (diabetes, cardiovascular disease, Alzheimer's disease). Represents the anchor phenotype for the dental-aging cluster in this wiki.

## Classification — 2017 World Workshop schema

The 2017 AAP/EFP World Workshop on the Classification of Periodontal and Peri-Implant Diseases fundamentally restructured the diagnostic taxonomy, collapsing the former "chronic" / "aggressive" dichotomy into a single **Periodontitis** category differentiated by staging and grading [^papapanou2018]:

| Dimension | Levels | Clinical anchor |
|---|---|---|
| **Stage** (severity + complexity) | I–IV | CAL, radiographic bone loss, tooth loss, local complexity factors |
| **Grade** (biological risk, rate of progression) | A–C | Direct evidence (bone loss rate); indirect modifiers (smoking, diabetes) |
| **Extent** | Localized (<30% teeth) / Generalized (≥30%) | — |

**Stage III–IV generalized (Grade B/C)** is the clinically severe disease most relevant to aging; Grade C is defined partly by diabetes or heavy smoking (both highly prevalent in older cohorts).

A critical distinction between the Grade levels [^tonetti2018]:

| Grade | Rate of progression | Primary modifiers | Representative clinical picture |
|---|---|---|---|
| **A** (slow) | No evidence of bone loss over ≥5 yr | None | Older adult, heavy deposits, bone loss proportionate to plaque |
| **B** (moderate) | <2 mm bone loss over 5 yr | Smoking <10 cigs/day; diabetes HbA1c <7% | Most common adult chronic periodontitis |
| **C** (rapid) | ≥2 mm bone loss over 5 yr, OR attachment loss disproportionate to plaque burden | Smoking ≥10 cigs/day; diabetes HbA1c ≥7%; **or** Grade C MIP pattern (see below) | Molar-incisor concentration in young adults; generalized in heavy smokers/diabetics |

### Grade C, molar-incisor pattern (C-MIP) — formerly "localized aggressive periodontitis"

The most clinically distinctive subtype within the 2017 framework is **Grade C periodontitis with a molar-incisor distribution** (C-MIP), historically termed "localized aggressive periodontitis" (LAP) under the pre-2017 taxonomy [^fine2024]. This pattern is the classic explanation for **interproximal bone loss and recession at the first molars and central incisors in an otherwise healthy young adult**, and is the presentation most likely to be missed by a clinician expecting disease to correlate with oral hygiene status.

**Defining clinical features [^tonetti2018] [^nibali2026]:**

- **Characteristic tooth distribution:** interproximal clinical attachment loss concentrated at the first permanent molars and/or incisors, typically sparing most other teeth. Deep angular bony defects on the mesial surfaces of first molars are pathognomonic.
- **Young age of onset:** disease onset in adolescence or early adulthood (commonly diagnosed 11–25 yr); the first permanent molars (which erupt ~age 6) are affected earliest, reflecting the timing of exposure in susceptible individuals.
- **Rapid progression:** bone loss rate substantially exceeds what would be predicted from plaque levels — meeting the Grade C criterion of ≥2 mm radiographic bone loss over 5 years, or a local bone loss: patient-age ratio that is disproportionately high.
- **Disproportionate to local factors:** good oral hygiene and the absence of caries do **not** exclude C-MIP. The defining hallmark is bone loss that is *disproportionate* to the amount of supragingival plaque and calculus — a direct departure from common Grade A/B periodontitis, where local factor burden and disease severity track closely. Clinicians must resist the reflexive reassurance offered by a clean-looking mouth.
- **Familial/heritable clustering:** first-degree relatives of affected individuals have substantially elevated risk, consistent with both Mendelian-susceptibility loci and shared microbial/immune environments. The specific inheritance pattern remains debated (autosomal dominant with incomplete penetrance has been proposed), but familial clustering is robust [^nibali2026]. #gap/needs-replication for molecular genetic architecture.
- **Population distribution:** consistently highest prevalence in populations of African descent and in Africa; lowest in Northern European/North American Caucasian populations [^susin2014]. The reasons for this disparity are incompletely understood and likely reflect both genetic variation in immune response genes and differential colonization by virulent bacterial strains.

**Microbiological and immunological associations [^fine2024] [^nibali2026]:**

*Aggregatibacter actinomycetemcomitans* (Aa) — specifically the **highly leukotoxic JP2 clone** (serotype b, with a 530-bp deletion in the leukotoxin promoter region conferring 10- to 20-fold higher leukotoxin production) — has been the most strongly implicated bacterium in C-MIP, particularly in West African and African-diaspora cohorts [^brogan1994]. Colonization with the JP2 clone in adolescents substantially predicts subsequent rapid attachment loss at molars and incisors; non-JP2 Aa strains carry lower but non-negligible risk [^nibali2026] [^fine2024]. The proposed mechanism is leukotoxin-mediated killing of the neutrophils and macrophages deployed to the subgingival crevice, creating a local immunological blind spot specifically at the first molar/incisor eruption sites.

Concurrent with the microbial signature, multiple lines of evidence point to **intrinsic neutrophil functional defects** in affected individuals — reduced chemotaxis, impaired oxidative burst, or defective phagocytic killing — which may be present as a constitutive host susceptibility trait independent of bacterial exposure [^nibali2026]. Whether the neutrophil defect is primary (genetically determined) or secondary (induced by Aa leukotoxin and/or chronic periodontal inflammation) remains an open question. #gap/no-mechanism

**Why it matters for this wiki / aging context:**

C-MIP is the primary cause of **interproximal recession and attachment loss at the anterior teeth in young adults** who would otherwise be expected to have minimal periodontitis. Because it is progressive but highly treatable with non-surgical periodontal therapy plus adjunctive systemic antibiotics (amoxicillin–metronidazole or azithromycin), missing the diagnosis condemns the patient to accelerated tooth loss beginning in the second and third decades of life, substantially front-loading the downstream sequelae tracked here: tooth loss, chewing compromise, nutritional restriction, and social/psychological burden. See [[gingival-recession]] for the clinical presentation angle. Early detection requires that periodontitis be diagnosed based on **radiographic bone loss pattern and attachment level mapping**, not based on plaque scores alone.

**ICD-10 billing caveat:** Payers still use the legacy K05.3x code tree (chronic periodontitis by location/severity) because the 2017 schema was not immediately adopted into ICD-10-CM. The two coding systems are not 1:1 maps. #gap/needs-replication for exact mapping in administrative data.

## Pathophysiology

### Step 1 — Subgingival dysbiosis (initiating event)

The healthy subgingival niche harbors a diverse but homeostatic microbiome. Dysbiosis shifts the community toward a destructive state driven by a small number of keystone pathogens — most critically **[[porphyromonas-gingivalis]]** — within the "red complex" (together with *Tannerella forsythia* and *Treponema denticola*) [^socransky1998]. P. gingivalis is mechanistically termed a **keystone pathogen**: present at relatively low absolute abundance but capable of subverting innate immunity to create a permissive environment for the entire dysbiotic community [^hajishengallis2012]. See [[oral-microbiome-aging-shifts]] for age-associated shifts in subgingival ecology.

Key P. gingivalis virulence mechanisms:
- **Gingipains** (Kgp, RgpA, RgpB) — cysteine proteases that degrade complement, cleave IgG, and manipulate [[lps-tlr4-nfkb|TLR4/NF-κB]] signaling to dysregulate innate immune activation
- **Lipopolysaccharide (LPS)** — atypical lipid-A structure that can antagonize TLR4 while activating TLR2, shifting the response from bactericidal to tissue-damaging
- **Outer membrane vesicles (OMVs)** — shed lipid vesicles carrying gingipains into distant tissues (see oral-systemic section)

The subgingival dysbiotic biofilm is the **proximate trigger** but is insufficient alone — the magnitude of tissue damage is primarily determined by the host inflammatory response, not bacterial burden directly.

### Step 2 — Dysregulated host inflammatory response

Bacterial products activate gingival fibroblasts, resident macrophages, and recruited neutrophils/monocytes via pattern recognition receptors (PRRs). The resulting inflammatory cascade is physiologically designed for transient defense but becomes self-sustaining in chronic periodontitis:

- **NF-κB activation** → sustained production of IL-1β, TNF-α, IL-6, IL-8, prostaglandin E2 (PGE2)
- **Th17/Treg imbalance** — periodontitis shifts T-cell populations toward Th17 (IL-17-producing), further amplifying neutrophil recruitment and RANKL expression [^deng2022]
- **Impaired resolution** — defective production of specialized pro-resolving mediators (SPMs; lipoxins, resolvins, protectins) contributes to chronicity — see [[spm-pathway]]

The inflammatory milieu of established periodontitis resembles the systemic inflammaging phenotype (see [[chronic-inflammation]]) but concentrated in the periodontal pocket — a self-sustaining local inflammatory niche.

### Step 3 — MMP-mediated connective tissue collagenolysis

Chronically activated fibroblasts, macrophages, and neutrophils secrete matrix metalloproteinases, principally **[[mmp-1]]** (collagenase-1, targets type I collagen — the dominant structural collagen of the periodontium) [^natarajan2024]. Elevated MMP-1 levels in gingival crevicular fluid correlate with progressive attachment loss. The net result is:

- Dissolution of the Sharpey fiber attachment of the periodontal ligament to cementum and alveolar bone
- Loss of connective tissue support for the tooth root
- Deepening of the periodontal pocket (>3 mm is pathological; >6 mm indicates severe disease)

### Step 4 — RANKL/OPG-driven alveolar bone resorption

Alveolar bone is continuously remodeled; periodontitis shifts this balance strongly toward resorption [^deng2022]:

- Activated T cells and fibroblasts upregulate **RANKL** (receptor activator of NF-κB ligand)
- RANKL binds RANK on osteoclast precursors → osteoclast differentiation and activation
- **Osteoprotegerin (OPG)**, the decoy receptor that normally antagonizes RANKL, is simultaneously suppressed by IL-1β and TNF-α
- Net result: elevated RANKL/OPG ratio → osteoclast-driven alveolar bone loss on radiograph

This is mechanistically identical to the bone-resorption arm of osteoporosis (see [[osteoporosis]]) and reflects the same pathway engaged by systemic inflammation in age-related bone loss. See [[alveolar-bone]] for anatomy.

### Cellular senescence contribution

Gingival tissues in periodontitis accumulate **senescent cells** across all age groups (not only in older adults), characterized by elevated p16, β-galactosidase, and lipofuscin in fibroblasts and macrophages, with concurrent SASP cytokine elevation [^rattanaprukskul2024]. Importantly:

- Senescence is detectable in *young* diseased gingival tissue, suggesting that chronic inflammation is sufficient to drive senescence independent of chronological age
- In diabetic periodontitis, hyperglycemia drives macrophage senescence via GLUT1-mediated mTOR phosphorylation → SASP amplification → further periodontal destruction — a feed-forward loop [^wang2021-glut1]
- Experimental periodontitis in mice accelerates CD4+ T-cell senescence (PD-1+CD153+ phenotype with SASP), and adoptive transfer of these cells exacerbates systemic autoimmunity [^li2026]

This positions periodontitis as both a **consequence of** accelerated local aging (inflammaging + senescence in the gingival niche) and a **driver of** broader immune senescence — a bidirectional relationship with [[cellular-senescence]].

## Prevalence and age epidemiology

Global pooled estimates from 55 epidemiological studies (2011–2020): ~62% of dentate adults have some form of periodontitis; severe periodontitis ~23.6% [^trindade2023]. Age stratification shows a steep gradient:

| Age group | Estimated prevalence (any periodontitis) |
|---|---|
| 30–44 yr | ~40–50% |
| 45–64 yr | ~60–70% |
| **65+ yr** | **~79%** (pooled) |

Among US adults, periodontitis affects ~40% of those ≥30 yr, with burden concentrated in adults with multimorbidity (as tracked in NHANES 2011–2014) [^odwyer2023]. The 65+ prevalence (~79%) reflects convergent risk: cumulative biofilm exposure, reduced salivary flow, polypharmacy-induced xerostomia, systemic inflammation, reduced immune surveillance, and declining manual dexterity limiting oral hygiene.

Severe disease (Stage III–IV) disproportionately affects socioeconomically disadvantaged older adults — the "inverse care law" applies prominently to oral health [^syed2026].

## Oral–systemic axis

Periodontitis is both a **local readout of systemic inflammaging** and an **active contributor** to systemic inflammatory burden via four routes: bacteremia from the periodontal pocket, systemic cytokine spillover, shared immune dysregulation, and direct bacterial invasion of distant organs.

### Bidirectional link with type 2 diabetes

The periodontitis–T2DM relationship is one of the most studied oral–systemic associations:

- **Observational (strong signal):** 53 studies meta-analyzed; T2DM patients had 0.61 mm deeper pockets + 0.89 mm greater attachment loss; severe periodontitis elevated T2DM incidence by 53% (RR 1.53) [^wu2020]. The putative mechanism runs through [[advanced-glycation-end-products]]: hyperglycemia increases AGEs in periodontal tissues; AGE-RAGE signaling amplifies NF-κB-driven inflammation. Conversely, periodontitis raises systemic IL-6/TNF-α, worsening insulin resistance — a vicious cycle.
- **Mendelian randomization (null):** A two-sample MR analysis using genetic instruments for both traits found no evidence of bidirectional causal effect (all p > 0.05) [^wang2022-mr]. This contradicts the observational signal and may indicate that shared confounders (adiposity, socioeconomic status, smoking) account for much of the observational association. **#gap/contradictory-evidence — the observational vs. MR discordance remains unresolved.** Larger, better-powered MR studies with more validated instruments are needed.
- **Interventional:** Periodontal treatment modestly improves HbA1c (~0.4% reduction in meta-analyses), which is clinically plausible even without a direct causal pathway (reduced systemic inflammation improving insulin sensitivity) — but does not resolve causality.

See [[type-2-diabetes]] and [[advanced-glycation-end-products]].

### Association with atherosclerosis/CVD

All 41 systematic reviews in a 2024 umbrella review reported a positive association between periodontal disease and cardiovascular disease, with odds ratios ranging from 1.22 to 4.42 and risk ratios from 1.14 to 2.88 [^arbildo2024]. Proposed mechanisms:
- Translocation of P. gingivalis into the bloodstream → uptake by arterial endothelium and macrophages → foam cell formation
- Systemic elevation of IL-6, CRP, and fibrinogen from periodontal inflammation
- Molecular mimicry between oral bacterial heat-shock proteins and cardiovascular antigens

**Causal status is contested**: MR data for periodontitis → coronary artery disease is less well powered than for T2DM. See [[atherosclerosis]]. Smoking (a major MR-instrumented confounder per Larsson 2022) likely inflates the observational association. #gap/contradictory-evidence

### P. gingivalis / gingipains → Alzheimer's disease hypothesis

The most mechanistically provocative oral–systemic link. **Dominy et al. 2019** (*Science Advances*) — the landmark paper:
- P. gingivalis DNA and gingipain protease activity detected in post-mortem AD brains (confirmed across two independent brain banks)
- Oral infection with P. gingivalis in mice produced brain colonization, Aβ42 production, and hippocampal neuron loss
- COR388 (atuzaginstat), an orally bioavailable gingipain inhibitor, reduced brain P. gingivalis load and neurodegeneration in the mouse model
- A Phase 2/3 human trial was initiated [^dominy2019]

Subsequent supporting evidence:
- Gingipain-K levels in CSF positively correlated with Aβ42, phospho-tau, and SNAP-25 across mild cognitive impairment and AD stages [^li2026-ad]
- Large national survey (NHANES-linked): periodontitis bacterial markers associated with incident AD dementia independent of APOE genotype [^beydoun2020]

**Important caveats:** The Phase 2/3 COR388 trial (GAIN trial, n=643) was discontinued in 2021 after failing to meet primary cognitive endpoints — a significant negative result for the therapeutic translation of this hypothesis. The hypothesis remains scientifically live (gingipains are present in AD brains; the mechanism is biologically plausible) but clinical validation has so far failed. See [[alzheimers-disease]]. **#gap/contradictory-evidence — biological association established but therapeutic validation failed at Phase 2/3.**

See also [[porphyromonas-gingivalis]] for the full P. gingivalis mechanistic page.

## Relationship to aging hallmarks

| Hallmark | Directional relationship |
|---|---|
| [[dysbiosis]] | Subgingival dysbiosis (red-complex + P. gingivalis keystone) is the **proximate initiating event** in periodontitis; oral dysbiosis is an age-associated change documented across aging cohorts |
| [[chronic-inflammation]] | Bidirectional: systemic inflammaging reduces gingival immune competence; periodontal inflammation elevates circulating IL-6/TNF-α, contributing to systemic inflammaging load |
| [[cellular-senescence]] | Senescent fibroblasts and macrophages accumulate in diseased gingiva; SASP amplifies local destruction; periodontitis accelerates systemic T-cell senescence |
| [[epigenetic-alterations]] | Age-associated DNA methylation changes at immune-regulatory loci alter gingival immune competence; P. gingivalis can directly modify host epigenetics via histone citrullination |

## Links to frailty and functional decline

Tooth loss — the end-stage outcome of untreated severe periodontitis — is independently associated with [[frailty]], malnutrition, cognitive impairment, and reduced quality of life in older adults. Chewing efficacy reduction limits dietary diversity toward soft, energy-dense, fiber-poor foods, compounding sarcopenia risk and microbiome dysbiosis in the gut. See [[tooth-loss]] and [[gingival-recession]] for downstream phenotypes.

## Interventions and treatment context

Standard of care is **non-surgical periodontal therapy (NSPT)** — scaling and root planing (SRP) to mechanically disrupt and debride subgingival biofilm and calculus, achieving pocket depth reduction and CAL gain. Evidence for SRP in Stage I–III periodontitis is strong; Stage IV (complex cases with advanced bone loss) may require surgical adjuncts.

Adjunctive interventions with evidence in the context of aging-relevant systemic disease:
- **Systemic antibiotics** (amoxicillin + metronidazole, or doxycycline subantimicrobial): modest additional benefit on pocket depth; doxycycline uniquely inhibits MMPs in addition to antimicrobial action ([[mmp-1]] inhibition)
- **Host modulation therapy**: sub-antimicrobial doxycycline (Periostat) is FDA-approved specifically to reduce MMP-mediated collagen destruction in periodontitis
- **SPM-based approaches**: topical application of resolvins / lipoxins (see [[spm-pathway]]) has shown preclinical benefit for periodontal tissue resolution; no approved clinical formulation
- **Treatment of systemic co-morbidities**: glycemic control in T2DM significantly improves NSPT outcomes; optimizing HbA1c before and during periodontal treatment is standard of care

No interventions in the periodontitis space have been validated against aging-specific endpoints (biological age, hallmark biomarkers, longevity). #gap/needs-human-replication for SPM approaches; #gap/long-term-unknown for the effect of sustained periodontal health maintenance on systemic aging outcomes.

## Extrapolation note

Most mechanistic P. gingivalis data (brain colonization, gingipain neurodegeneration) is from mouse models.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — P. gingivalis present in human AD brains; gingipain activity confirmed post-mortem; human OMV biology less characterized |
| Phenotype conserved in humans? | yes — clinical periodontitis + AD association in human epidemiology |
| Replicated in humans? | in-progress / partial — Phase 2/3 gingipain inhibitor trial (GAIN) failed primary endpoint; epidemiological associations replicated across cohorts |

## Limitations and gaps

- **MR vs. observational discordance** for T2DM and CVD associations: instrumental variable quality for periodontitis GWAS is limited (complex polygenic trait, few strong SNPs); observational confounding by smoking/SES is substantial. #gap/contradictory-evidence
- **Phase 2/3 gingipain inhibitor (COR388/GAIN) failure** does not fully falsify the hypothesis (inadequate CNS exposure, stage too late, drug-target engagement not confirmed in CNS) but substantially raises the bar for the P. gingivalis → AD causal claim. #gap/contradictory-evidence
- **Staging→ICD mapping** remains non-trivial for administrative data research; the 2017 World Workshop staging system is not yet fully embedded in ICD codes. #gap/needs-replication for epidemiology using billing codes
- **Intervention trials in older adults**: most periodontal RCTs exclude frail elderly or nursing-home populations where disease burden is highest. #gap/needs-human-replication
- **Senolytic potential**: accumulation of senescent cells in periodontitis tissues suggests senolytics could be adjunctive; no human trials in periodontitis. #gap/needs-human-replication
- **Sibling pages to be seeded**: [[gingival-recession]], [[tooth-loss]], [[gingiva]], [[alveolar-bone]], [[periodontal-ligament]], [[oral-microbiome-aging-shifts]], [[porphyromonas-gingivalis]] are all stubs or absent as of 2026-06-12. #stub (these pages)

## See also

- [[dysbiosis]] — hallmark page for microbial community changes in aging
- [[chronic-inflammation]] — systemic inflammaging MOC
- [[cellular-senescence]] — upstream hallmark; senescent cell accumulation in gingival tissues
- [[lps-tlr4-nfkb]] — signaling pathway activated by P. gingivalis LPS
- [[mmp-1]] — principal collagenase in periodontal tissue destruction
- [[spm-pathway]] — endogenous resolution failure in chronic periodontitis
- [[advanced-glycation-end-products]] — AGE-RAGE axis linking diabetes to periodontal inflammation
- [[type-2-diabetes]], [[atherosclerosis]], [[alzheimers-disease]] — systemic disease associations
- [[frailty]] — downstream consequence of tooth loss and nutritional compromise
- [[porphyromonas-gingivalis]] — keystone pathogen page (stub)
- [[oral-microbiome-aging-shifts]] — age-associated dysbiosis context (stub)

---

## Footnotes

[^papapanou2018]: doi:10.1002/jper.17-0721 · Papapanou PN et al. · *Journal of Periodontology* 2018;89(S1) · n=N/A · consensus report · AAP/EFP 2017 World Workshop staging/grading classification — consolidates "chronic" + "aggressive" into single Periodontitis entity with Stage I–IV (severity) × Grade A–C (risk) · open-access supplement

[^socransky1998]: doi:10.1111/j.1600-051X.1998.tb02419.x · Socransky SS et al. · *Journal of Clinical Periodontology* 1998;25(2):134-144 · n=185 subjects (13,261 subgingival plaque samples) · observational, cluster analysis · defined red complex (*P. gingivalis*, *T. forsythia*, *T. denticola*) as most strongly associated with clinical parameters of periodontal disease · model: human

[^hajishengallis2012]: doi:10.1038/nrmicro2810 · Hajishengallis G et al. · *Nature Reviews Microbiology* 2012;10(10):717-725 · n=N/A (review) · review · introduced "keystone pathogen" concept; P. gingivalis low-abundance dysbiosis driver via complement C5aR manipulation

[^deng2022]: doi:10.1111/jre.12958 · Deng J et al. · *Journal of Periodontal Research* 2022;57(5):897-908 · n=N/A (review) · review · Th17/Treg imbalance and RANKL/RANK/OPG system in periodontitis bone loss; microbial–immune–bone crosstalk

[^natarajan2024]: doi:10.4103/jpbs.jpbs_1249_23 · Natarajan PM et al. · *Journal of Pharmacy & Bioallied Sciences* 2024 · n=N/A (review) · review · MMP-1 collagenolytic activity in type I collagen of periodontium; elevated MMP-1 in gingival crevicular fluid correlates with attachment loss

[^trindade2023]: doi:10.1111/jcpe.13769 · Trindade D et al. · *Journal of Clinical Periodontology* 2023;50(5):604-626 · n=55 epidemiological studies (meta-analysis) · systematic review + meta-analysis · pooled prevalence any periodontitis ~62%; severe ~23.6%; 65+ pooled ~79.3%

[^wu2020]: doi:10.1186/s12903-020-01180-w · Wu CZ et al. · *BMC Oral Health* 2020;20(1) · n=53 observational studies (meta-analysis) · systematic review + meta-analysis · T2DM patients: 0.61 mm deeper pockets + 0.89 mm greater attachment loss; severe periodontitis elevated T2DM incidence RR=1.53; mild periodontitis weaker effect (RR=1.28)

[^wang2022-mr]: doi:10.3389/fgene.2021.792396 · Wang YB et al. · *Frontiers in Genetics* 2022;12:792396 · n=N/A (MR analysis using GWAS summary stats) · two-sample bidirectional Mendelian randomization · NO causal effect of periodontitis on T2DM and NO causal effect of T2DM on periodontitis (all p > 0.05) — contradicts observational signal; instruments from DIAGRAM + FinnGen R5

[^arbildo2024]: doi:10.1186/s12903-024-04907-1 · Arbildo-Vega HI et al. · *BMC Oral Health* 2024 · n=41 systematic reviews (umbrella review) · umbrella review · all 41 reviews report positive periodontitis–CVD association; OR 1.22–4.42; RR 1.14–2.88; causal directionality contested

[^dominy2019]: doi:10.1126/sciadv.aau3333 · Dominy SS et al. · *Science Advances* 2019;5(1):eaau3333 · n=human post-mortem brains + mouse infection model · multi-method · P. gingivalis DNA + gingipain activity in AD brains (2 independent brain banks); oral infection → brain colonization + Aβ42 + hippocampal neuron loss in mice; COR388 gingipain inhibitor reduced neurodegeneration · NOTE: Phase 2/3 GAIN trial of COR388 subsequently failed primary cognitive endpoints (2021) — does not falsify biological findings but blocks current therapeutic translation

[^li2026-ad]: doi:10.3389/fnagi.2026.1737524 · Li JH et al. · *Frontiers in Aging Neuroscience* 2026;18:1737524 · n=clinical cross-sectional (mild-to-severe AD stages) · observational cross-sectional · periodontitis prevalence 38% in MCI → 67% in dementia stages; gingipain-K in CSF correlated with Aβ42, phospho-tau, SNAP-25

[^beydoun2020]: doi:10.3233/jad-200064 · Beydoun MA et al. · *Journal of Alzheimer's Disease* 2020;75(1):157-172 · n=large NHANES-linked national survey (exact n not confirmed) · observational prospective · periodontitis clinical + bacterial markers associated with incident AD dementia and all-cause dementia in 65+ adults

[^rattanaprukskul2024]: doi:10.1177/00220345241255325 · Rattanaprukskul K et al. · *Journal of Dental Research* 2024;103(8) · n=clinical tissue samples (periodontitis vs. healthy) · observational cross-sectional · elevated p16, lipofuscin, β-galactosidase in gingival fibroblasts + macrophages in periodontitis; senescence in young diseased tissue demonstrates inflammation-driven (not just age-driven) mechanism

[^wang2021-glut1]: doi:10.1038/s41368-021-00116-6 · Wang Q et al. · *International Journal of Oral Science* 2021;13(1) · n=in vitro + diabetic mouse model · experimental · hyperglycemia → GLUT1-driven glucose uptake → mTOR phosphorylation → macrophage senescence → SASP in periodontal tissue; feed-forward loop amplifying chronic periodontitis in T2DM

[^li2026]: doi:10.3389/fimmu.2026.1806138 · Li J et al. · *Frontiers in Immunology* 2026;17:1806138 · n=mouse ligature-induced periodontitis model + adoptive transfer · experimental in vivo · periodontitis accelerates CD4+ T-cell senescence (PD-1+CD153+, elevated SASP); adoptive transfer exacerbates collagen antibody-induced arthritis → systemic immune aging link

[^odwyer2023]: doi:10.3122/jabfm.2022.220207R1 · O'Dwyer MC et al. · *Journal of the American Board of Family Medicine* 2023 · n=NHANES 2011–2014 cross-sectional · observational · periodontitis in ~40% of US adults ≥30 yr; burden concentrated in multimorbidity

[^syed2026]: doi:10.1111/ger.70079 · Syed SS et al. · *Gerodontology* 2026 (online May 2026) · PMID:42136528 · n=meta-analysis · systematic review + meta-analysis · socioeconomic factors associated with oral health inequalities in older adults; inverse care law operationalized — closed-access #gap/no-fulltext-access

[^tonetti2018]: doi:10.1002/jper.18-0006 · Tonetti MS, Greenwell H, Kornman KS · *Journal of Periodontology* 2018;89(S1):S159–S172 · PMID:29926952 · n=N/A · consensus framework · 2017 World Workshop staging-and-grading paper; defines Stage I–IV × Grade A–C matrix, Grade C criteria (≥2 mm bone loss/5 yr or disproportionate-to-plaque evidence), and molar-incisor extent modifier; companion paper to Papapanou 2018 disease-definitions consensus

[^susin2014]: doi:10.1111/prd.12019 · Susin C, Haas AN, Albandar JM · *Periodontology 2000* 2014;65(1):27–45 · PMID:24738585 · n=systematic review of population surveys · review · aggressive periodontitis prevalence varies markedly by population; consistently highest in Africa and populations of African descent, lowest in Northern European/North American Caucasians; methodological heterogeneity in case definitions limits pooled estimates — closed-access

[^fine2024]: doi:10.3390/pathogens13100849 · Fine DH, Schreiner H, Diehl SR · *Pathogens* 2024;13(10):849 · PMID:39452721 · n=N/A · review · comprehensive history and evidence base for localized aggressive periodontitis (C-MIP); argues for reinstatement as distinct disease entity; covers JP2 clone of *A. actinomycetemcomitans*, familial clustering, disproportionate-to-plaque characteristic, and declining research after 2017 reclassification — open-access (CC-BY 4.0)

[^nibali2026]: doi:10.1111/jre.70067 · Nibali L, Alamri MM, Viana Miguel MMV, Shaddox L · *Journal of Periodontal Research* 2026 (ahead of print) · PMID:41631366 · n=N/A · review · Grade C molar-incisor pattern periodontitis (C-MIP): JP2 clone of *A. actinomycetemcomitans*, neutrophil/immunological dysfunction, genetic architecture, treatment outcomes; non-surgical therapy + systemic antibiotics shows favorable short- and long-term clinical, microbiological, and immunological outcomes — closed-access #gap/no-fulltext-access

[^brogan1994]: doi:10.1128/iai.62.2.501-508.1994 · Brogan JM, Lally ET, Poulsen K, Kilian M, Demuth DR · *Infection and Immunity* 1994;62(2):501–508 · PMID:8300209 · n=15 Aa strains characterized (leukotoxin promoter analysis) · primary research · characterizes JP2 vs non-JP2 leukotoxin promoters; 530-bp deletion absent in JP2 creates dual-promoter architecture; strains with JP2-like promoter expressed 10- to 20-fold higher leukotoxin than minimally-toxic strains — open-access (PMC186135)
