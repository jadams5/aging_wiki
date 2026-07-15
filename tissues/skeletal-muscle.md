---
type: tissue
aliases: [striated muscle, voluntary muscle, skeletal musculature]
parent-system: musculoskeletal-system
key-cell-types: ["[[satellite-cells]]", "[[myofibers]]", "[[fibroadipogenic-progenitors]]"]
key-aging-phenotypes: ["[[sarcopenia]]", "[[frailty]]"]
related-hallmarks: ["[[stem-cell-exhaustion]]", "[[disabled-macroautophagy]]", "[[mitochondrial-dysfunction]]", "[[chronic-inflammation]]", "[[deregulated-nutrient-sensing]]", "[[cellular-senescence]]", "[[loss-of-proteostasis]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Synthesis-MOC light verification (cross-page consistency only; no PDF re-reads). Conboy 2005-derived claims cross-checked against verified satellite-cells.md: strain corrected (C57Bl/Ka-Ly5.2 → C57Bl/Ka) in footnote; all other Conboy 2005 claims consistent. Sousa-Victor 2014 claims consistent with satellite-cells.md (not_oa; no new PDF access). EWGSOP2 Cruz-Jentoft 2019 claims consistent with sarcopenia.md (verified-partial). Quantitative claims flagged #gap/unsourced in body (atrogin-1/MURF1 induction magnitude, Type I/II atrophy rates, denervation rates, falls mortality) are accurately tagged and not asserted as verified; these remain open for primary-source citation. **15-PGDH gerozyme axis (2026-05-23 propagation): Palla 2021 + Bakooshli 2023 claims AI-extracted from PubMed abstracts only; PMC PDFs not yet cross-checked — see [[studies/palla-2021-15pgdh-muscle-rejuvenation]] and [[studies/bakooshli-2023-15pgdh-nmj-regeneration]] for verification status.**"
---

# Skeletal Muscle

Skeletal muscle is the largest metabolic organ in the body, comprising approximately 40% of body mass in young adults. It consists primarily of **multinucleated post-mitotic myofibers** (the contractile units), with a resident stem cell population ([[satellite-cells]]) lodged between the sarcolemma and basal lamina of each fiber. Supporting cell populations include [[fibroadipogenic-progenitors]] (FAPs), vascular endothelial cells, pericytes, and resident macrophages. Together these form the tissue context in which [[sarcopenia]] — the progressive, age-associated loss of muscle mass, strength, and function — develops.

Skeletal muscle is central to whole-organism aging biology: it accounts for the dominant share of insulin-stimulated glucose disposal (via [[glut4]] translocation), it is the primary energy depot for locomotor activity, and its failure is the proximate driver of falls, frailty, and loss of independent function in older adults.

---

## Anatomy at a glance

| Component | Role | Aging-relevant notes |
|---|---|---|
| Myofibers (Type I, slow) | Oxidative, fatigue-resistant; sustained force | Relatively preserved in aging relative to Type II |
| Myofibers (Type II, fast) | Glycolytic, high-force; rapid fatigable | **Preferentially atrophy** in aging; most responsible for strength loss |
| [[satellite-cells]] | Muscle stem cells; regenerate damaged fibers | Functional decline with age (quiescence deepening → senescence); see [[satellite-cells]] (verified-partial) for sourced detail |
| [[fibroadipogenic-progenitors]] | FAPs; interstitial progenitors | Shift toward fibrogenic and adipogenic fates in aged muscle → myosteatosis and fibrosis |
| Neuromuscular junction | Motor neuron → fiber signaling | Denervation + reinnervation cycles reduce functional motor unit number with age |

---

## Major cell types in aging

### [[satellite-cells]] (verified-partial)

The primary regenerative unit of adult skeletal muscle. In aging, satellite cell functional capacity declines through two mechanisms operating in sequence:

1. **Niche-extrinsic suppression** (dominant in middle-aged muscle): elevated systemic inhibitory signals (TGF-β, Wnt, GDF8/myostatin) suppress Notch signaling and blunt the activation response. Heterochronic parabiosis showed that aged satellite cells retain intrinsic proliferative capacity — it is the old systemic milieu that drives most of the functional decline [^conboy2005].
2. **Intrinsic senescence** (dominant in very old/geriatric muscle): p16^Ink4a^ upregulation in geriatric satellite cells drives irreversible exit from quiescence and loss of regenerative contribution [^sousa-victor2014].

Full mechanistic detail is on [[satellite-cells]] (verified-partial). Quantitative claims here are cross-referenced, not restated.

### [[myofibers]] (drafted)

Multinucleated post-mitotic cells that cannot divide. Age-related atrophy occurs via two converging proteolytic axes:

- **Ubiquitin-proteasome system (UPS)**: FOXO transcription factors (FOXO1, FOXO3a) — activated by reduced IIS/AKT signaling — upregulate the E3 ubiquitin ligases **atrogin-1** (MAFbx/FBXO32) and **MURF1** (TRIM63), which target myosin heavy chains and other structural proteins for degradation. This is the primary molecular effector of muscle atrophy. #gap/unsourced — quantitative induction magnitude in aged human muscle needs primary citation.
- **Autophagy/lysosome system**: Impaired [[mitophagy]] and macroautophagy (see [[disabled-macroautophagy]]) allow dysfunctional mitochondria and damaged protein aggregates to accumulate in aging myofibers; paradoxically, excessive autophagy flux also contributes to atrophy in some contexts.

Type II fiber cross-sectional area declines more steeply than Type I in aging humans, consistent with preferential loss of fast glycolytic fibers — the primary substrate of power and strength. #gap/unsourced — comparative Type I vs Type II fiber atrophy rate in longitudinal human studies needs primary citation.

### [[fibroadipogenic-progenitors]] (planned)

FAPs are interstitial progenitors (PDGFRα+, Sca-1+, Lin-) that in young muscle adopt a pro-myogenic supportive role. In aged muscle, the FAP niche shifts toward:

- **Fibrogenesis** — collagen deposition and connective tissue expansion (endomysial/perimysial fibrosis)
- **Adipogenesis** — intramuscular lipid accumulation (**myosteatosis**), which correlates strongly with insulin resistance and predicts adverse outcomes independently of muscle mass

This FAP fate-switch is driven in part by elevated TGF-β and reduced Wnt signaling in the aged muscle environment. #gap/unsourced — mechanistic evidence for FAP fate-shift in human aging vs mouse aging needs primary citation.

---

## Key aging features

### Sarcopenia (direct phenotype)

Progressive loss of muscle mass and strength beginning by approximately age 50 (1–2% mass loss/year; 1.5–5% strength loss/year) [^ewgsop2-2019]. The full mechanistic, diagnostic, and interventional profile is on [[sarcopenia]] (verified-partial). This page does not restate those claims.

The **anabolic resistance** component deserves particular emphasis as a tissue-level mechanism: aged muscle requires a higher amino acid dose (particularly leucine) to achieve maximal stimulation of myofibrillar protein synthesis. The mTORC1 signaling response per unit anabolic stimulus is blunted. Practical consequence: the protein RDA (0.8 g/kg/day) is insufficient for older adults; current consensus is 1.0–1.2 g/kg/day minimum.

### Mitochondrial decline

Aged skeletal muscle shows reduced mitochondrial content, cristae density, and oxidative phosphorylation capacity — paralleling the [[mitochondrial-dysfunction]] hallmark. mtDNA deletions accumulate over decades, creating mosaic patches of fiber segments with severely deficient cytochrome c oxidase (COX) activity ("ragged red fibers" in modified Gomori trichrome staining). Impaired [[mitophagy]] allows dysfunctional mitochondria to persist rather than being cleared.

| Dimension | Status |
|---|---|
| Mechanism conserved in humans? | yes |
| COX-deficient ragged red fibers in aged human muscle? | yes (histopathologically documented) |
| Mitophagy decline with age in human muscle? | partial — indirect evidence; primary human longitudinal data limited |

### Insulin resistance and GLUT4 deficit

Aged skeletal muscle shows reduced insulin-stimulated [[glut4]] translocation to the plasma membrane, contributing to whole-body insulin resistance and T2D risk. The mechanistic basis is a defect in actin cytoskeletal remodeling and AS160 (TBC1D4) phosphorylation distal to AKT in the IIS pathway. Full detail on [[glut4]] (drafted R10c) and [[insulin-igf1]] (verified-partial).

### Neuromuscular junction degeneration and denervation

Loss of motor neurons (~25% between ages 25 and 75 in some studies) combined with denervation of individual myofibers and compensatory reinnervation by surviving motor neurons creates larger, less efficient motor units. This neurogenic component of sarcopenia is distinct from primary muscle-cell aging and poorly addressed by purely anabolic interventions. #gap/unsourced — quantitative denervation rates in aged human muscle need primary citation.

The prostaglandin-degrading enzyme [[15-pgdh]] (HPGD) rises in aged muscle and rises further after sciatic-nerve transection in mice, depleting muscle PGE2; 15-PGDH aggregates also define "target fibers" in human neurogenic myopathies. Pharmacological inhibition with [[sw033291]] restored motor-axon regeneration, NMJ density, and force after acute crush injury and in aged chronically-denervated mice [^bakooshli2023]. This positions 15-PGDH as a gerozyme acting on both the myofiber compartment ([^palla2021]) and the pre-synaptic NMJ — a unified mechanistic target across sarcopenia's anabolic and neurogenic components.

### Autophagy dysregulation

Conditional knockout of *Atg5* or *Atg7* specifically in skeletal muscle leads to myofiber atrophy, accumulation of protein aggregates and abnormal mitochondria, and a myopathy phenotype — establishing that constitutive autophagy is essential for muscle homeostasis. #gap/unsourced — primary citations for Atg5/Atg7 muscle-conditional KO studies needed; existing detail is on [[autophagy]] (verified-partial) and [[disabled-macroautophagy]] (drafted).

---

## Disease consequences

### [[sarcopenia]] (verified-partial)

Direct, defining consequence. See [[sarcopenia]] for diagnostic criteria, prevalence, and outcomes.

### [[frailty]] (drafted)

Sarcopenia is the dominant musculoskeletal component of the frailty phenotype. All five Fried Phenotype frailty criteria — weakness, slowness, exhaustion, low activity, weight loss — are directly or indirectly driven by skeletal muscle decline. See [[frailty]] for the composite syndrome profile.

### [[type-2-diabetes]] (drafted)

Skeletal muscle accounts for ~70–80% of insulin-stimulated glucose disposal; its age-related insulin resistance is a major contributor to T2D risk in older adults. GLUT4 translocation defects and impaired IRS-1/AKT signaling in aged muscle are the molecular substrate. See [[type-2-diabetes]] (drafted) and [[deregulated-nutrient-sensing]] (verified-partial).

### Falls and immobility-related mortality

Strength loss (particularly lower-limb power) is the primary proximate risk factor for falls in older adults — a leading cause of fractures, hospitalization, institutionalization, and death. The mechanistic link is through Type II fiber atrophy reducing the rapid force-generation capacity needed for balance correction. #gap/unsourced — prospective falls-attributable mortality data need primary citation.

---

## Aging-relevant verified findings (cross-referenced)

The following key findings are documented and sourced on other pages; cited here for navigational completeness:

- **Heterochronic parabiosis — satellite cell rejuvenation** — Conboy 2005: aged satellite cells exposed to young systemic milieu show restored Notch signaling and regenerative capacity; resident-cell mechanism confirmed by <0.1% GFP+ engraftment [^conboy2005]. Full detail on [[satellite-cells]].
- **Geriatric satellite cell senescence** — Sousa-Victor 2014: p16^Ink4a^ upregulation in geriatric (~28–32 month) mice drives irreversible satellite cell senescence [^sousa-victor2014]. Full detail on [[satellite-cells]].
- **EWGSOP2 sarcopenia diagnostic algorithm** — Cruz-Jentoft 2019: strength-led hierarchical diagnostic (probable sarcopenia → confirmed → severe) [^ewgsop2-2019]. Full detail on [[sarcopenia]].
- **GLUT4 translocation deficit** — See [[glut4]] (R10c drafted) for IIS pathway cascade and aging defect.
- **Anabolic resistance** — mTORC1 blunted response to amino acid stimulus; see [[mtor]] (verified-partial) and [[insulin-igf1]] (verified-partial).

---

## Aging-protective interventions

Ranked by strength of evidence:

| Intervention | Mechanism | Evidence level |
|---|---|---|
| **Resistance training** | Activates satellite cells; stimulates MPS via mTORC1; maintains Type II fiber CSA; restores neuromuscular junction | Strong (RCT evidence; even nonagenarians respond [^fiatarone1990]) |
| **Protein intake (1.2–1.5 g/kg/day for older adults; 1.6–2.0 g/kg/day for RT-active adults; up to 2.4 g/kg/day during energy deficit)** | Overcomes anabolic resistance; leucine ≥2.5–3 g/meal stimulates mTORC1; whey protein preferred. See [[protein-intake]] | Strong (Bauer 2013 PROT-AGE, Deutz 2014 ESPEN, Morton 2018 meta n=1,863, Longland 2016 deficit RCT, Jäger 2017 ISSN) |
| **Exercise + GLUT4 restoration** | AMPK-driven GLUT4 translocation independent of insulin | Strong — see [[glut4]], [[ampk]] |
| **Vitamin D (if deficient)** | Supports neuromuscular function; VDR in satellite cells | Moderate (replete if deficient; benefit in non-deficient less clear) |
| **Myostatin inhibitors (anti-GDF8 Abs)** | Remove inhibitory niche signal suppressing satellite cell activation | Phase 2/3 investigational — modest functional benefit; hard outcome data pending |
| **Senolytics ([[fisetin]], D+Q)** | Clear p16+ senescent satellite cells from muscle niche; **also clear load-induced senescent cells** that the hypertrophic/regenerative stimulus itself generates and that an aged niche fails to remove — restoring overload hypertrophy and regeneration in old mice [^dungan2022][^moiseeva2023] | Preclinical (mouse); senescent-cell appearance post-exercise shown in humans but senolytic rescue mouse-only; benefit is age-specific (aged/clearance-impaired muscle), untested in young/trained muscle; no human senolytic + resistance-training trial #gap/needs-human-replication |
| **[[15-pgdh]] inhibitors (PGDHi; [[sw033291]])** | Inhibit the gerozyme HPGD → restore tissue PGE2 → PGE2-EP4 drives mitochondrial biogenesis + autophagy induction + TGF-β/UPS suppression in myofibers; restores NMJ pre-/post-synaptically | Preclinical strong (aged-mouse muscle mass, grip strength, exercise capacity [^palla2021]; NMJ regeneration [^bakooshli2023]); IP held by Epirium Bio (no registered trial as of 2026-05-23; druggability tier 2 — high-quality probe); cancer-aging tradeoff caveat — 15-PGDH is a colon/lung tumor suppressor (see [[frameworks/cancer-aging-tradeoffs]]) |

---

## Hallmark connections

| Hallmark | Skeletal muscle mechanism |
|---|---|
| [[stem-cell-exhaustion]] | Satellite cell quiescence deepening and geriatric senescence; reduced regenerative output |
| [[disabled-macroautophagy]] | Autophagy required for myofiber homeostasis (Atg5/7 cKO phenotype); impaired mitophagy allows dysfunctional mitochondria to accumulate |
| [[mitochondrial-dysfunction]] | Oxidative capacity decline; COX-deficient ragged red fiber patches; impaired mitophagy |
| [[chronic-inflammation]] | Inflammaging cytokines (IL-6, TNF-α) directly suppress protein synthesis and activate atrogin-1/MURF1; senescent cell SASP in muscle niche |
| [[deregulated-nutrient-sensing]] | Anabolic resistance (blunted mTORC1 per amino acid stimulus); GLUT4/insulin resistance; AMPK pathway alterations |
| [[cellular-senescence]] | p16+ geriatric satellite cells; SASP from senescent niche cells amplifies catabolism |
| [[loss-of-proteostasis]] | Myofiber protein aggregate accumulation; UPS/autophagy imbalance; atrogin-1/MURF1 axis |

---

## Limitations and gaps

- `#gap/unsourced` — quantitative atrogin-1/MURF1 induction magnitude in aged human muscle; comparative Type I vs Type II atrophy rates in longitudinal human studies; denervation rates; falls-attributable mortality
- `#gap/needs-human-replication` — FAP fate-switch mechanism in human aging; senolytics for sarcopenia (preclinical only); partial reprogramming strategies (preclinical only)
- `#gap/needs-replication` — anabolic resistance leucine threshold quantification in aged humans (varies across studies)
- `#stub` — this is an anchor tissue stub; satellite-cells, myofibers, FAPs, and neuromuscular junction sections will deepen as those pages are seeded

---

## Cross-references

- [[satellite-cells]] (verified-partial) — primary muscle stem cell page; Conboy 2005 and Sousa-Victor 2014 verified there
- [[sarcopenia]] (verified-partial) — direct downstream phenotype; diagnostic criteria, prevalence, intervention evidence
- [[frailty]] (drafted) — composite syndrome; skeletal muscle is dominant component
- [[type-2-diabetes]] (drafted) — insulin resistance mediated via skeletal muscle GLUT4 deficit
- [[glut4]] (drafted R10c) — GLUT4 translocation mechanism and aging defect
- [[stem-cell-exhaustion]] (drafted) — hallmark MOC; satellite cells are canonical substrate
- [[disabled-macroautophagy]] (drafted) — hallmark MOC; muscle Atg5/7 KO phenotype
- [[mitochondrial-dysfunction]] (drafted) — hallmark MOC; COX-deficient fiber patches
- [[chronic-inflammation]] (drafted) — inflammaging cytokine drive on catabolism
- [[deregulated-nutrient-sensing]] (verified-partial) — hallmark MOC; anabolic resistance and AMPK axis
- [[mtor]] (verified-partial) — mTORC1 blunted anabolic response; rapamycin muscle effects
- [[ampk]] (verified, full) — AMPK activation mediates exercise-induced GLUT4 translocation; parallel to IIS
- [[insulin-igf1]] (verified-partial) — IIS pathway and its decline in muscle
- [[myofibers]] (drafted) — multinucleated post-mitotic contractile cells
- [[fibroadipogenic-progenitors]] (planned) — FAPs; myosteatosis and fibrosis in aging
- [[notch-pathway]] (implicit stub) — quiescence-activation switch in satellite cells
- [[wnt-pathway]] (implicit stub) — fibrogenic conversion in aged satellite cells
- [[myostatin]] (implicit stub) — inhibitory paracrine signal suppressing satellite cell activation
- [[bone]] (implicit stub) — musculoskeletal coupling; sarcopenia-osteoporosis interaction
- [[biomarkers/mskage-2025]] — multi-tissue musculoskeletal DNA-methylation age clock (muscle/cartilage/bone/tendon/MSC); the tissue-level counterpart to the blood-based SYMPHONY MSK sub-clock
- [[biomarkers/dnam-muscle-function-markers]] — blood FGF2/CXCL12/FGF21 methylation loci correlated with grip strength + gait speed; candidate non-invasive sarcopenia markers
- [[15-pgdh]] — prostaglandin-degrading gerozyme; elevated in aged muscle (myofibers + macrophages) and post-denervation
- [[sw033291]] — canonical 15-PGDH small-molecule inhibitor (research tool); IP held by Epirium Bio; no registered PGDHi clinical trial as of 2026-05-23
- [[studies/palla-2021-15pgdh-muscle-rejuvenation]] — 15-PGDH inhibition rejuvenates aged muscle mass + strength
- [[studies/bakooshli-2023-15pgdh-nmj-regeneration]] — 15-PGDH inhibition restores NMJ in aged + denervated mice

---

## Footnotes

[^conboy2005]: [[studies/conboy-2005-parabiosis-satellite-cells]] · doi:10.1038/nature03260 · Conboy IM et al. · in-vivo heterochronic parabiosis · Nature 2005;433:760-764 · young C57Bl/Ka (2–3 mo) paired with aged C57Bl/6 (19–26 mo); n=3–6 pairs per condition; P<0.005; <0.1% GFP+ engraftment confirms resident-cell mechanism; Notch signaling restored in aged satellite cells by young systemic environment
[^sousa-victor2014]: [[studies/sousa-victor-2014-geriatric-musc-senescence]] · doi:10.1038/nature13013 · Sousa-Victor P et al. · in-vivo + in-vitro · Nature 2014;506:316-321 · geriatric satellite cells (28–32 mo C57BL/6 mice) upregulate p16^Ink4a^; switch from reversible quiescence to irreversible senescence; p16 silencing partially restored activation kinetics · not_oa · #gap/no-fulltext-access

[^ewgsop2-2019]: [[studies/cruz-jentoft-2019-ewgsop2-sarcopenia]] · doi:10.1093/ageing/afy169 · Cruz-Jentoft AJ et al. · consensus statement · Age and Ageing 2019;48(1):16-31 · strength-led hierarchical diagnostic algorithm; 1–2% mass loss/yr and 1.5–5% strength loss/yr after age 50 reported (citing ref [129])
[^fiatarone1990]: doi:10.1001/jama.1990.03440220053029 · Fiatarone MA et al. · JAMA 1990;263(22):3029-3034 · n=10 frail nursing-home residents aged ~90 (up to 96) · 8 weeks high-intensity resistance training · strength gains averaged 174% ± 31%; increased muscle cross-sectional area · closed-access · #gap/no-fulltext-access

[^palla2021]: [[studies/palla-2021-15pgdh-muscle-rejuvenation]] · doi:10.1126/science.abc8059 · PMID 33303683 · PMC7938328 · Palla AR,..., Blau HM · *Science* 371(6528):eabc8059 (2021) · in-vivo aged C57BL/6 mice; 15-PGDH overexpression in young muscle → atrophy; pharmacological inhibition (SW033291) or genetic Hpgd depletion in aged muscle → restored mass, grip strength, exercise capacity via PGE2-EP4 → ↑mitochondria, ↑autophagy, ↓TGF-β, ↓UPS · AI-extracted from PubMed abstract; PMC PDF not yet end-to-end verified

[^bakooshli2023]: [[studies/bakooshli-2023-15pgdh-nmj-regeneration]] · doi:10.1126/scitranslmed.adg1485 · PMID 37820010 · PMC10763629 · Bakooshli MA,..., Blau HM · *Sci Transl Med* 15(717):eadg1485 (2023) · in-vivo (sciatic nerve crush + chronic denervation + aged mouse) + observational human IHC; 15-PGDH inhibitor → motor-axon regeneration, NMJ restoration, force recovery; 15-PGDH aggregates define "target fibers" in human neurogenic myopathies

[^dungan2022]: [[studies/dungan-2022-senolytic-muscle-hypertrophy]] · doi:10.1007/s11357-022-00542-2 · Dungan CM et al. · *GeroScience* 2022;44(4):1925-1940 · in-vivo (mouse) + human IHC · adult (5–6 mo) vs old (23–24 mo) C57BL/6J, synergist-ablation mechanical overload; senolytic D+Q 5/50 mg/kg days 7+10 of 14-day MOV · load-induced senescent cells emerge ~2 wk post-resistance-exercise in humans; old mice over-accumulate them and have blunted hypertrophy; D+Q gave old mice larger muscles/fibers + shifted Igf1/Ddit4/Mmp14 · #gap/needs-human-replication

[^moiseeva2023]: [[studies/moiseeva-2023-senescence-atlas-muscle-regeneration]] · doi:10.1038/s41586-022-05535-x · Moiseeva V et al. · *Nature* 2023;613(7942):169-178 · scRNA-seq + senescent-cell enrichment · young + old mice · senescent cells repress muscle regeneration at all ages via an inflamed (inflammageing-like) niche; clearance or CD36 neutralization accelerates regeneration in young AND old; transplant delays it; senescent cells also accumulate in human muscle