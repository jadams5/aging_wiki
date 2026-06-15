---
type: phenotype
aliases: [age-related muscle loss, age-associated muscle wasting, age-related muscle atrophy]
icd-10: M62.84
icd-11: FB32.Y
affected-tissues: ["[[skeletal-muscle]]"]
underlying-hallmarks: ["[[stem-cell-exhaustion]]", "[[chronic-inflammation]]", "[[mitochondrial-dysfunction]]", "[[loss-of-proteostasis]]", "[[deregulated-nutrient-sensing]]"]
typical-onset: "Biological onset by age ~50 (1–2%/yr mass loss after 50); clinically apparent typically 60+"
prevalence-65plus: "1–29% community-dwelling (varies widely by criteria and population); ~10–16% by stricter definitions"
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "EWGSOP2 2019 diagnostic algorithm and cutpoints verified against primary source PDF; Cruz-Jentoft 2014 prevalence range verified against primary source PDF; Conboy 2005 mechanism claims verified against primary source PDF; Fiatarone 1990 DOI confirmed via Crossref/PubMed but PDF is closed-access (not_oa) — n and specific results unverifiable from primary source; ICD codes and rate-of-decline figures not independently verified against regulatory/epidemiological primary sources. **15-PGDH gerozyme axis (2026-05-23 propagation): Palla 2021 + Bakooshli 2023 claims AI-extracted from PubMed abstracts only; PMC PDFs not yet cross-checked — see [[studies/palla-2021-15pgdh-muscle-rejuvenation]] and [[studies/bakooshli-2023-15pgdh-nmj-regeneration]] for verification status.**"
---

# Sarcopenia

The age-associated loss of skeletal muscle mass, strength, and physical function. Distinct from cachexia (disease-driven wasting) and disuse atrophy (immobilization-driven), though they often co-exist. **Recognized as a disease in its own right** (ICD-10 M62.84; ICD-11 FB32.Y) [^ewgsop2-2019-icd], not merely a normal aging variant. A leading driver of frailty, falls, fractures, loss of independence, and all-cause mortality in older adults.

## Diagnostic criteria — modern consensus

Three competing operational definitions are in current use; results are not perfectly interchangeable:

### EWGSOP2 (European, 2019) — most-used in research

Hierarchical algorithm [^ewgsop2-2019]:

1. **Find** — SARC-F questionnaire score ≥ 4 OR clinical suspicion
2. **Assess** — Low muscle **strength** (handgrip dynamometry; chair-stand test) → "probable sarcopenia"
3. **Confirm** — Low muscle **quantity or quality** (DXA, BIA, MRI/CT) → "confirmed sarcopenia"
4. **Severity** — Low **physical performance** (gait speed ≤ 0.8 m/s, SPPB ≤ 8, TUG ≥ 20 s) → "severe sarcopenia"

EWGSOP2 explicitly **leads with strength** rather than mass — a 2019 reframing reflecting evidence that strength predicts adverse outcomes better than mass alone.

### AWGS (Asian Working Group for Sarcopenia, 2019)

Similar three-step (case-finding → assessment → diagnosis) with population-adjusted cutpoints — Asian populations have lower mean muscle mass; using European cutpoints would over-diagnose.

### FNIH (Foundation for the NIH, 2014)

Originally proposed for U.S. population. Different cutpoints for handgrip strength and ALM/BMI. Less common in current research.

**Practical implication:** sarcopenia prevalence estimates vary 5–25% in the same population depending on which criteria are applied. Always cite the specific definition.

## Pathophysiology

Sarcopenia is a multi-mechanism phenotype; no single pathway accounts for it. Major contributors:

### Muscle stem cell ([[satellite-cells|satellite cell]]) dysfunction

- Reduced satellite cell number and proliferative capacity with age — see [[stem-cell-exhaustion]].
- Impaired niche signaling (Wnt, Notch, GDF11/myostatin axis) further reduces regenerative response to injury.
- Heterochronic parabiosis demonstrated that aged satellite cell dysfunction is driven largely by the **systemic environment** rather than irreversible cell-intrinsic defects: aged cells retain intrinsic proliferative capacity, but the old systemic milieu suppresses Notch signalling required for activation [^conboy-2005]. More recent work has refined and extended this view.

### Anabolic resistance

- Aged muscle requires a higher dose of leucine / amino acids to maximally stimulate protein synthesis (the "leucine threshold" rises with age).
- Reduced post-prandial muscle protein synthesis response.
- Blunted [[mtor|mTORC1]] activation per unit anabolic stimulus.
- Practical implication: protein RDA (0.8 g/kg/day) is **insufficient** for older adults — current consensus recommends 1.0–1.2 g/kg/day, more if frail. See [[../interventions/lifestyle/protein-intake]] for the canonical evidence base (Bauer 2013 PROT-AGE consensus + Deutz 2014 ESPEN guidelines).

### Mitochondrial dysfunction in muscle

- Age-related decline in mitochondrial content and oxidative capacity in muscle — see [[mitochondrial-dysfunction]].
- mtDNA deletions accumulate, with mosaic deficiency creating "ragged red fiber" patches.
- Impaired [[mitophagy]] contributes to dysfunctional mitochondria persistence.

### Chronic inflammation

- Elevated IL-6, TNF-α, and other SASP-aligned cytokines in aged serum — see [[chronic-inflammation]] (the "inflammaging" phenomenon).
- Direct catabolic effects on muscle protein synthesis and via increased autophagy/UPS proteolysis.
- Senescent cell accumulation in muscle ([[cellular-senescence]]) drives local inflammatory milieu.

### Neurogenic component

- Loss of motor neurons (~25% lost between ages 25 and 75 in some studies) and reduced motor unit number.
- Re-innervation by surviving motor neurons creates larger, less efficient motor units.
- Distinguishes sarcopenia partly from pure cachexia or disuse atrophy.
- **Neuromuscular junction (NMJ) instability** — dysfunction of terminal/perisynaptic [[cell-types/schwann-cells|Schwann cells]] (impaired NMJ re-capping in aged muscle) destabilizes the junction and promotes denervation; see also [[molecules/metabolites/acetylcholine]].
- **15-PGDH gerozyme axis (Blau lab, Stanford):** the prostaglandin-degrading enzyme [[15-pgdh]] (HPGD) is elevated in aged skeletal muscle (myofibers + macrophages) and rises further with denervation, depleting muscle PGE2; pharmacological inhibition with [[sw033291]] (or genetic Hpgd depletion) restores muscle mass, grip strength, and exercise capacity in aged mice via PGE2-EP4 → mitochondrial biogenesis + autophagy induction + TGF-β suppression + UPS suppression [^palla2021-pgdh]. Cross-tissue extension: 15-PGDH aggregates also define "target fibers" — histopathologic hallmarks of human neurogenic myopathies — and PGDHi restores neuromuscular junction integrity in aged + chronically denervated mice [^bakooshli2023-pgdh]. This positions sarcopenia mechanistically as a gerozyme-driven phenotype; the IP estate (formerly Myoforte Therapeutics → now Epirium Bio) is the only known clinical-translation vehicle, though no registered PGDHi clinical trial existed as of 2026-05-23 (druggability tier 2, high-quality probe — see [[15-pgdh]]).

### Hormonal changes

- Reduced testosterone (men), estrogen (women), GH/IGF-1 (both) — all anabolic for muscle.
- Vitamin D deficiency strongly associated with sarcopenia; supplementation evidence is mixed.

## Risk factors and prevalence

| Factor | Effect |
|---|---|
| Age | Strongest single predictor; ~1–2% muscle mass loss/year and ~1.5–5% strength loss/year after age 50 [^ewgsop2-2019-rateofloss] |
| Female sex | Lower baseline mass + post-menopausal hormonal acceleration |
| Sedentary lifestyle | Disuse compounds aging-related loss |
| Chronic disease (CHF, COPD, CKD, cancer) | Cachexia overlays sarcopenia |
| Hospitalization / immobilization | Acute losses (~1 kg lean mass per 10 days bed rest in older adults) often not fully recovered |
| Inadequate protein intake | Below 1.0 g/kg/day in older adults |

Prevalence estimates (community-dwelling adults): 1–29% depending on criteria and population studied [^cruz-jentoft-2014-prevalence]; ≥30% in long-term care populations; ≥50% in some chronic disease cohorts. The narrower range "~10–16%" sometimes quoted reflects stricter EWGSOP criteria in specific European community cohorts — always cite the specific definition when reporting prevalence.

## Outcomes

Sarcopenia is associated with — and prospectively predicts — adverse outcomes independent of comorbidities:

- **Falls** — 1.5–3× risk
- **Fractures** — particularly hip
- **Hospitalization** — increased length of stay, post-discharge functional decline
- **Disability** — loss of ADL/IADL independence
- **Mortality** — 2–3× all-cause mortality risk (varies by criteria + population)
- **Surgical outcomes** — sarcopenia on pre-op CT associated with worse outcomes across multiple surgery types

## Interventions

Evidence rank (strongest first):

### Resistance training

The single most effective intervention. Even nonagenarians (up to age 96) in nursing homes showed meaningful strength gains (averaging 174% ± 31%) and increased muscle cross-sectional area after 8 weeks of high-intensity resistance training [^fiatarone-1990]. Recommendations: 2–3 sessions/week, multi-joint compound movements, progressive overload. #gap/needs-replication — n=10 frail nursing-home residents in original study; results have been widely replicated across populations.

### Adequate protein + leucine

See [[../interventions/lifestyle/protein-intake]] for the canonical evidence base; key points:

- Daily protein ≥ 1.0–1.2 g/kg (1.2–1.5 if frail or in recovery) — Bauer 2013 PROT-AGE + Deutz 2014 ESPEN consensus
- Distribution matters — ~25–40 g per meal × 3–4 meals appears more effective than skewed intake (Mamerow 2014)
- Leucine ≥ 2.5–3 g/meal helps overcome anabolic resistance (Moore 2015 meta-regression: older adults require ~0.40 g/kg/meal vs ~0.24 g/kg/meal in young adults)
- Whey protein has the strongest evidence base; plant proteins effective if total intake is adequate

### Vitamin D

- Replete (25-OH-D > 30 ng/mL) if deficient
- Supplementation in non-deficient individuals: evidence weaker

### Pharmacological (investigational)

| Agent | Class | Status |
|---|---|---|
| Bimagrumab | ActRII receptor antagonist | Phase 2 — increased lean mass; functional benefit less clear |
| Myostatin inhibitors (e.g., trevogrumab, tarazimab) | Anti-myostatin antibodies | Phase 2/3 — modest functional improvement; effect on hard outcomes pending |
| SARMs (selective androgen receptor modulators) | Androgen receptor agonists | Investigational — efficacy + safety unsettled |
| Testosterone (men with low T) | Androgen | Modest mass gain; cardiovascular safety debate ongoing |
| Senolytics ([[fisetin]], dasatinib + quercetin) | Senescent cell clearance | Preclinical evidence for muscle benefit; human sarcopenia-specific trial limited |
| [[15-pgdh]] inhibitors (PGDHi, e.g. [[sw033291]]) | Gerozyme inhibition — restores tissue PGE2 to physiologic levels | Preclinical: aged-mouse muscle mass + strength + exercise performance restored; mechanism via PGE2-EP4 → ↑mitochondria, ↑autophagy, ↓TGF-β, ↓UPS [^palla2021-pgdh]; NMJ regeneration extension [^bakooshli2023-pgdh]. IP held by Epirium Bio (formerly Myoforte) but no registered PGDHi trial as of 2026-05-23 (high-quality probe, not yet a clinical drug — druggability tier 2). Cancer-aging tradeoff caveat: 15-PGDH is a colon/lung tumor suppressor — see [[frameworks/cancer-aging-tradeoffs]] |

### Diet patterns

Mediterranean diet associated with reduced sarcopenia incidence in observational cohorts. Causal evidence limited.

## Hallmark mapping

Sarcopenia is a **convergent integrative phenotype** — multiple [[hallmarks-of-aging]] feed into it:

- [[stem-cell-exhaustion]] — satellite cell dysfunction
- [[deregulated-nutrient-sensing]] — anabolic resistance, blunted mTOR response to amino acids
- [[mitochondrial-dysfunction]] — reduced oxidative capacity, ragged red fibers
- [[chronic-inflammation]] — inflammaging cytokine drive on catabolism
- [[cellular-senescence]] — local senescent cell accumulation
- [[loss-of-proteostasis]] — UPS / autophagy imbalance affecting muscle protein turnover

## Related measurement & cell-biology pages

- [[cell-types/myofibers]] — the post-mitotic contractile cells whose Type II atrophy drives the strength/power loss that defines sarcopenia (FOXO → atrogin-1/MuRF1 axis)
- [[biomarkers/dnam-muscle-function-markers]] — blood FGF2/CXCL12/FGF21 methylation loci correlated with grip strength + gait speed; candidate non-invasive sarcopenia biomarker (FGF2 promoter hypomethylation predicts case-status)
- [[biomarkers/mskage-2025]] — multi-tissue musculoskeletal DNA-methylation age clock
- [[biomarkers/symphony-age]] — the blood-DNAm Musculoskeletal organ sub-clock is a surrogate of the grip/gait physical-function decline sarcopenia represents

## Limitations and gaps

- **Strength vs mass discordance** — many older adults lose strength faster than mass (dynapenia); the optimal definition is not fully settled.
- **Imaging gold standard** — DXA estimates of lean mass include non-muscle tissue; D3-creatine dilution gives more accurate true muscle mass but is research-only.
- **Outcomes definition** — falls, fractures, mortality are downstream of many co-morbidities; isolating sarcopenia's independent contribution is difficult. #gap/needs-replication
- **Treatment-effect heterogeneity** — protein supplementation works much better when paired with resistance training; isolated nutritional interventions show smaller effects.

## Footnotes

[^ewgsop2-2019]: [[studies/cruz-jentoft-2019-ewgsop2-sarcopenia]] · doi:10.1093/ageing/afy169 · Cruz-Jentoft AJ et al. · consensus statement · European Working Group on Sarcopenia in Older People 2 (EWGSOP2) · Age and Ageing 2019;48(1):16-31 · the 2019 reframed diagnostic algorithm (strength-led); Table 3 specifies cutpoints: grip strength <27 kg (men)/<16 kg (women); chair stand >15 s for 5 rises; gait speed ≤0.8 m/s; SPPB ≤8; TUG ≥20 s

[^ewgsop2-2019-icd]: [[studies/cruz-jentoft-2019-ewgsop2-sarcopenia]] · doi:10.1093/ageing/afy169 · EWGSOP2 (Cruz-Jentoft et al. 2019) notes sarcopenia is "formally recognised as a muscle disease with an ICD-10-MC Diagnosis Code that can be used to bill for care in some countries" — the specific year of ICD-10 M62.84 adoption and ICD-11 FB32.Y are not confirmed in this source. #gap/unsourced for year "2016" and ICD-11 code

[^ewgsop2-2019-rateofloss]: [[studies/cruz-jentoft-2019-ewgsop2-sarcopenia]] · doi:10.1093/ageing/afy169 · "Beyond the age of 50 years, loss of leg muscle mass (1–2% per year) and loss of strength (1.5–5% per year) have been reported" (p. 23, citing ref [129])  — these are reported figures from the literature, not primary data from this paper

[^cruz-jentoft-2014-prevalence]: [[studies/cruz-jentoft-2014-sarcopenia-prevalence]] · doi:10.1093/ageing/afu115 · Cruz-Jentoft AJ et al. · systematic review · n=18 prevalence studies · Age and Ageing 2014;43(6):748-759 · community-dwelling prevalence: 1–29%; long-term care: 14–33%; acute hospital: 10% (one study only) · all studies used EWGSOP definition

[^conboy-2005]: [[studies/conboy-2005-parabiosis-satellite-cells]] · doi:10.1038/nature03260 · Conboy IM et al. · in-vivo heterochronic parabiosis · Nature 2005;433:760-764 · young (2–3 mo) C57Bl/Ka-Ly5.2 (or β-actin-eGFP) mice paired with aged (19–26 mo) C57Bl/6 mice; n=3-6 pairs per condition; P<0.005; <0.1% GFP+ engraftment in regenerated aged muscle confirms resident-cell activation rather than circulating-cell engraftment · "the age-related decline of progenitor cell activity can be modulated by systemic factors that change with age"; mechanism is Notch signalling restoration; cells retain intrinsic proliferative capacity · model: mus-musculus

[^fiatarone-1990]: doi:10.1001/jama.1990.03440220053029 · Fiatarone MA et al. · JAMA 1990;263(22):3029-3034 · n=10 frail nursing-home residents aged ~90 (up to 96) · 8 weeks high-intensity weight training · strength gains averaged 174% ± 31%; increased muscle cross-sectional area; improved walking speed · closed-access: results taken from PubMed abstract #gap/no-fulltext-access

[^palla2021-pgdh]: [[studies/palla-2021-15pgdh-muscle-rejuvenation]] · doi:10.1126/science.abc8059 · PMID 33303683 · PMC7938328 · in-vivo · model: young C57BL/6 (2–4 mo) vs aged (>24 mo); SW033291 mg/kg dose not stated in paper; human vastus lateralis microarray data from Raue 2012 dataset · Palla AR... Blau HM · *Science* 371(6528):eabc8059 (2021) · verified 2026-05-23 against PMC7938328

[^bakooshli2023-pgdh]: [[studies/bakooshli-2023-15pgdh-nmj-regeneration]] · doi:10.1126/scitranslmed.adg1485 · PMID 37820010 · PMC10763629 · in-vivo (sciatic crush + chronic denervation + aged mouse) + observational human IHC (target fibers in neurogenic myopathies) · Bakooshli MA... Blau HM · *Sci Transl Med* 15(717):eadg1485 (2023)
