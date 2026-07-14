---
type: study
doi: 10.1038/nature16932
pmid: 26840489
pmc: PMC4845101
title: "Naturally occurring p16Ink4a-positive cells shorten healthy lifespan"
authors: [Baker DJ, Childs BG, Durik M, Wijers ME, Sieben CJ, Zhong J, Saltness RA, Jeganathan KB, Verzosa GC, Pezeshki A, Khazaie K, Miller JD, van Deursen JM]
year: 2016
journal: Nature
volume: 530
issue: 7589
pages: "184-189"
study-design: in-vivo
publication-type: research-article
organism: mus-musculus
n-subjects: 225   # ATTAC lifespan cohorts: mixed bg n=57 (vehicle) + n=59 (AP); C57BL/6 n=58 (vehicle) + n=51 (AP); mechanistic sub-cohorts n=4 per group; see body for full sex-stratified breakdown
intervention: []   # genetic pharmacogenetic system (INK-ATTAC transgene + AP20187 chemical inducer of dimerization); no traditional pharmacological intervention
hallmarks-tested: ["[[cellular-senescence]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [natural-aging-lifespan-extension, ink-attac-system, p16-clearance, tumor-latency-increase, sasp-reduction, organ-healthspan-improvement]
local-pdf: null
verified: true
verified-date: 2026-06-30
verified-by: claude
verified-scope: "All primary quantitative claims (lifespan %, n values, SASP gene panel by tissue, AP dosing, tumor findings, organ healthspan) verified against PMC4845101 full PDF. Corrections applied: iWAT not gonadal fat; AP20187 is CID not rapamycin analogue; dose escalation added; cardiac Sur2a/cardiomyocyte finding corrected; n values confirmed; diet difference noted."
---

# Naturally occurring p16Ink4a-positive cells shorten healthy lifespan

## TL;DR

The landmark demonstration that chronic accumulation of **naturally arising** p16^Ink4a^-positive senescent cells causally limits healthspan and lifespan in wild-type aging mice. Using the INK-ATTAC pharmacogenetic transgene, Baker et al. induced apoptosis in p16^Ink4a^-expressing cells by administering AP20187 twice weekly from 12 months of age. Treated mice showed a **+27% increase in median lifespan** in a mixed background and **+24%** in a congenic C57BL/6J background (range 17–35% across sex and background), with improved organ function in kidney, heart, and adipose tissue and blunting of SASP markers, but **without a reduction in overall tumor incidence** (tumor latency increased). This paper converted senescent-cell clearance from a progeroid-model result (Baker 2011) to a wild-type aging result — it is the foundational evidence upon which the senolytics field rests.

## Historical context

Baker et al. 2011 (*Nature*, [[studies/baker-2011-ink-attac]]) first used the INK-ATTAC transgene to show that clearing p16-positive cells delayed or attenuated multiple age-related phenotypes in **BubR1 progeroid mice** — a model of accelerated aging caused by a hypomorphic spindle-assembly-checkpoint mutation. While compelling, the progeroid model is not normal aging. Baker 2016 addressed this directly: the same INK-ATTAC approach was applied to **wild-type mice undergoing normal, chronological aging**, making this the most direct causal evidence that naturally accumulating senescent cells are a liability — not merely a correlate — of aging.

## The INK-ATTAC system

INK-ATTAC (INK-linked Apoptosis Through Targeted Activation of Caspase 8) is a **genetic senescent-cell depletion tool** constructed as a transgene in which the **p16^Ink4a^ (Cdkn2a) promoter** drives expression of a membrane-targeted FKBP-Caspase-8 fusion protein and a GFP reporter [^baker2011]. Key features:

- **Cell-type specificity:** the transgene is expressed only in cells where the endogenous p16^Ink4a^ promoter is active (i.e., p16-high senescent cells and their precursors)
- **Inducible depletion:** AP20187 (B/B homodimerizer; chemical inducer of dimerization) cross-links the FKBP domains → forced Caspase-8 dimerization → apoptosis selectively in transgene-expressing cells. AP20187 is not a rapamycin analogue — it is a synthetic CID compound that bridges two FKBP domains and does not inhibit mTOR
- **No off-target pharmacology:** the system is antibody- and drug-independent; clearance specificity is dictated entirely by the Cdkn2a promoter. This makes the INK-ATTAC platform **methodologically orthogonal** to pharmacological senolytics and immune-surveillance approaches — see [[methods/p16-immunodetection]] for the antibody-specificity problems that affect conventional p16 IHC

Limitation: Cdkn2a is not exclusively expressed in senescent cells (it is also active in some developmental contexts and certain normal adult cell types). The transgene therefore may not achieve perfect senolytic specificity. Baker 2016 uses GFP-reporter histology and SA-β-gal staining to confirm senescent-cell identity in cleared populations.

## Design

### Cohort 1 — Mixed background

- **Genotype:** INK-ATTAC transgenic; mixed 129Sv (40% ±5%) × C57BL/6J (35% ±5%) × FVB (20% ±5%) background (determined by Harlan Laboratories SNP panels)
- **Diet:** 9% fat LabDiet #5058 (ad libitum). The paper notes this diet shortens lifespan compared to 5% fat diets typically used in lifespan studies — the vehicle-treated median lifespan on 9% fat diet is comparable to unmanipulated WT on the same diet (Extended Data Fig. 4a,b), but is shorter than standard 5% fat chow controls
- **Treatment start:** 12 months of age (late middle age), when p16^Ink4a^-positive cells begin to accumulate in tissues
- **Dosing:** AP20187 injected i.p. **twice weekly** at **0.2 µg/g body weight** from 12–18 months, then **escalated to 2.0 µg/g body weight** from 18 months onward until natural death
- **n (lifespan cohort):** vehicle n=57 (males 31, females 26), AP-treated n=59 (males 22, females 37)
- **Control:** vehicle-injected INK-ATTAC mice; non-transgenic WT C57BL/6J–129Sv mice fed the same diet served as additional lifespan reference
- **Primary endpoint:** lifespan (median and maximum survival; log-rank test)
- **Sex:** male and female analyzed separately and combined

### Cohort 2 — Congenic C57BL/6J

- **Genotype:** INK-ATTAC transgenic; congenic C57BL/6J background (Jackson Lab stock 000664; backcrossed onto pure C57BL/6J)
- **Diet:** 5% fat LabDiet #5053 (standard irradiated chow; ad libitum)
- **Treatment start:** 12 months of age
- **Dosing:** AP20187 i.p. twice weekly at same dose-escalation schedule (0.2 µg/g BW 12–18 months; 2.0 µg/g BW from 18 months)
- **n (lifespan cohort):** vehicle n=58 (males 31, females 27), AP-treated n=51 (males 25, females 26)
- **Control:** vehicle-injected INK-ATTAC mice and non-transgenic C57BL/6J mice administered AP (to confirm no off-target effects of AP in the absence of the transgene)
- **Rationale:** tests whether the lifespan effect is diet- and background-dependent; larger than mixed cohort to allow comprehensive healthspan analyses at 18 months

### Organ and SASP analysis sub-cohorts

- Aged INK-ATTAC mice sacrificed at defined timepoints for histology, organ function assays, and SASP measurement
- Tissues examined: kidney (glomerulosclerosis, tubular atrophy), heart (cardiomyocyte size, Sur2a expression, stress tolerance), adipose (fat mass, adipocyte progenitors, SASP), skeletal muscle (SASP)
- SASP cytokines measured by qPCR: *Il6*, *Il1a* (Il-1α), *Tnfα* in **inguinal white adipose tissue (iWAT)**, skeletal muscle (gastrocnemius), and kidney (Extended Data Fig. 3b; n=4 females per group)

## Key results

### Lifespan extension

| Cohort | Lifespan endpoint | AP20187 vs. vehicle (combined sexes) | Male | Female |
|---|---|---|---|---|
| Mixed background (129Sv×C57BL/6J×FVB) | Median | **+27%** (624d → 793d) | +23% | +30% |
| Congenic C57BL/6J | Median | **+24%** (699d → 866d) | +35% | +17% |

The range 17–35% reflects the span across both sexes and both genetic backgrounds (C57BL/6 males at +35%, C57BL/6 females at +17%; mixed background falls within the same range at +23–30%). All differences are statistically significant by log-rank test [^baker2016lifespan]. Maximum lifespan was significantly increased in mixed-background AP-treated males and females combined (p=0.0295) but not for either sex individually, and was not extended in the C57BL/6 cohort.

### Organ healthspan

- **Kidney:** Reduced glomerulosclerosis and tubular atrophy in treated mice; kidney function markers improved
- **Heart:** AP-treated mice had significantly smaller cardiomyocyte cross-sectional area at 18 months (implying more but smaller cardiomyocytes — less compensatory hypertrophy — vs enlarged hypertrophic cardiomyocytes in vehicle-treated mice). Ventricular wall thickness was unchanged. Cardiac *Sur2a* expression (encoding the K_ATP channel subunit Sur2a/Abcc9) was preserved in AP-treated mice; vehicle-treated mice showed age-related Sur2a decline, which correlated with impaired cardiac stress tolerance (faster time-to-death following lethal isoproterenol). Echocardiography at 18 months showed no significant differences in heart rate, LV mass, ejection fraction, or fractional shortening between groups at rest
- **Adipose tissue:** AP treatment prevented age-dependent loss of fat mass (iWAT + eWAT depot weights preserved), prevented adipocyte size reduction, and preserved expression of adipogenesis regulators PPARγ and C/EBPα. iWAT contained 8-fold fewer GFP+ (p16+) adipocyte progenitors in AP-treated vs vehicle mice. SASP output (Il6, Il1a, Tnfα) was attenuated in iWAT
- **Skeletal muscle:** Reduced SASP marker expression (Il6, Il1a, Tnfa); functional data not prominently reported in this paper (see Baker 2011 for muscle-function readouts in the progeroid model)

### SASP blunting

In **inguinal white adipose tissue (iWAT)**, skeletal muscle (gastrocnemius), and kidney of AP20187-treated INK-ATTAC mice, qRT-PCR showed significant blunting of age-dependent increases in *Il6*, *Il1a* (IL-1α), and *Tnfα* expression relative to vehicle controls (Extended Data Fig. 3b; n=4 females per group). Clearance had no effect on inflammation markers in colon or liver, indicating partial and tissue-selective clearance of p16^Ink4a^-positive cells. This confirmed that p16-positive cells in the responding tissues were a source of local SASP and that their clearance reduced the sterile-inflammation burden — the proposed mechanistic driver of senescence-associated multi-organ deterioration [^baker2016lifespan].

### Tumor findings — a critical nuance

Overall **tumor incidence at autopsy was not significantly reduced** in AP20187-treated mice. However, **tumor latency was increased** — tumors appeared later in life. This is an important distinction:

- Senescent cells are not the sole cause of cancer; they are one contributing node via paracrine SASP growth-factor and ECM-remodeling signals
- Delayed tumor onset is consistent with the SASP-as-pro-tumorigenic-microenvironment hypothesis, but p16+ cell clearance alone does not eliminate the tumor-forming capacity of pre-malignant clones
- The finding was confirmed in both cohorts and is consistent with the two-hit model: senescent SASP promotes tumor progression but is not itself the source of initiating mutations

This result distinguishes Baker 2016 from a "cancer therapy" narrative and properly positions senolytic strategies as *healthspan-extending* rather than *cancer-preventing* interventions, at least in the short-to-medium term.

## Mechanism interpretation

The paper does not propose a single downstream effector pathway. The interpretation is:

1. p16^Ink4a^-positive cells accumulate throughout life in wild-type mice, peaking in aged tissues
2. These cells constitutively secrete SASP factors (IL-6, IL-1α, TNF-α and others)
3. SASP drives tissue remodeling, chronic sterile inflammation, and paracrine promotion of adjacent-cell dysfunction
4. Genetic clearance of this population removes the SASP source, allowing partial restoration of tissue microenvironments
5. The lifespan benefit reflects integrated organ-function improvements, not a single molecular rescue

The pathway is therefore: p16+ cell accumulation → SASP → [[chronic-inflammation]] + tissue dysfunction → accelerated aging. Clearance reverses this at the source level rather than targeting downstream effectors.

## Relation to Baker 2011

| Feature | Baker 2011 [^baker2011] | Baker 2016 (this paper) |
|---|---|---|
| Model | BubR1 progeroid (premature aging; spindle checkpoint) | Wild-type naturally-aged mice |
| Background | Mixed | Mixed + congenic C57BL/6J |
| Clearance start | Young (3 months) or old | 12 months (late middle age) |
| Primary finding | Delayed phenotypes in progeroid model | Lifespan extension in normal aging |
| Translational weight | Proof-of-concept | Strongest causal evidence in normal aging |

Baker 2016 is the critical upgrade: it removes the concern that "progeroid models are not normal aging" — the effect persists and is quantitatively similar in wild-type, normally-aged mice.

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | p16^Ink4a^/CDKN2A senescence pathway is conserved; INK-ATTAC-equivalent genetic system not translatable but pharmacological clearance is the translational route |
| Phenotype conserved in humans? | partial | Human tissues accumulate p16+ and SA-β-gal+ cells with age; Hickson 2019 shows pharmacological reduction is achievable; no human lifespan data |
| Replicated in humans? | no | No equivalent of chronic AP20187-from-midlife exists in humans; pharmacological senolytics (D+Q, fisetin) are in Phase 1–2 trials but lifespan extension is not a primary endpoint — see [[interventions/pharmacological/senolytics]] |

The antibody-independent nature of INK-ATTAC means that the p16-ARC antibody-specificity confound (see [[methods/p16-immunodetection]]) does NOT affect the validity of Baker 2016's results. This is a structural strength of the paper.

## Limitations

- Results are in mice; human lifespan extension from senolytic therapy is unproven. #gap/needs-human-replication
- The INK-ATTAC transgene is not translatable as-is to humans; pharmacological senolytic approaches must approximate this effect without the precision of a genetic tool
- AP20187 itself is a research tool compound; it is not a drug, and twice-weekly injections from midlife is an idealized treatment regimen not achievable pharmacologically
- p16^Ink4a^ marks a subset of senescent cells but not all; SASP-producing senescent cells that do not upregulate p16 are not cleared by this system. The lifespan benefit may therefore be a floor estimate of what complete senolytic clearance might achieve — or may reflect the specific pathological role of p16-high cells
- Tumor latency increase without incidence reduction means senescent-cell biology is only one piece of the tumor-suppression puzzle; over-interpreting the anti-cancer angle of senolytics is not supported by this paper
- Competing interests declared: co-inventors van Deursen and Baker have financial interests in Unity Biotechnology (a senolytics company)

## Gaps

- #gap/needs-human-replication — Lifespan extension in naturally-aged wild-type mice has no human equivalent yet
- #gap/dose-response-unclear — Optimal AP20187 dosing, clearance frequency, and treatment-start age were not systematically varied in Baker 2016; whether earlier or later clearance is better in mice is incompletely explored. The dose-escalation schedule used (0.2 µg/g BW 12–18 months then 2.0 µg/g BW thereafter) was selected by precedent from the progeroid model, not empirically optimized

## Cross-references

- [[hallmarks/cellular-senescence]] — canonical home for the human accumulation evidence and full SASP mechanism; Baker 2016 is cited as the key lifespan-extension anchor
- [[interventions/pharmacological/senolytics]] — class page covering pharmacological approximations of the INK-ATTAC result; Baker 2016 is foundational evidence (verified-partial)
- [[p16-rb-pathway]] — upstream pathway that drives p16^Ink4a^ expression; the INK-ATTAC transgene is driven by the Cdkn2a/p16 promoter
- [[methods/p16-immunodetection]] — methodological context for p16 detection approaches; INK-ATTAC is antibody-independent and is therefore unaffected by the p16-ARC antibody-specificity confound
- [[studies/baker-2011-ink-attac]] — predecessor paper (progeroid model) that established the INK-ATTAC system; Baker 2016 is the wild-type-aging follow-up

## Cited by (major downstream uses in this wiki)

- [[hallmarks/cellular-senescence]] — lifespan-extension anchor; SASP-blunting anchor
- [[interventions/pharmacological/senolytics]] — genetic proof-of-principle underpinning senolytic rationale
- [[molecules/proteins/p21]] — cited during verified lifespan-number extraction round
- [[phenotypes/cancer]] — tumor-latency-without-incidence finding

---

[^baker2016lifespan]: [[studies/baker-2016-naturally-occurring-senescent-clearance]] · mixed bg: n=57 vehicle / n=59 AP; C57BL/6: n=58 vehicle / n=51 AP · in-vivo · model: wild-type INK-ATTAC mice, mixed 129Sv×C57BL/6J×FVB (9% fat diet) + congenic C57BL/6J (5% fat diet) · AP20187 i.p. twice weekly from 12 months (0.2 µg/g BW 12–18 mo, then 2.0 µg/g BW); median lifespan +27% (mixed bg, 624d→793d), +24% (C57BL/6, 699d→866d); range 17–35% across sexes and backgrounds; tumor latency increased, tumor incidence not reduced; SASP blunting (Il6, Il1a, Tnfα) in iWAT, skeletal muscle, and kidney · doi:10.1038/nature16932 · PMC4845101

[^baker2011]: [[studies/baker-2011-ink-attac]] · n=progeroid cohort · in-vivo · model: BubR1 hypomorphic mice (progeroid) · INK-ATTAC transgene established; p16+ cell clearance delays multiple age-related phenotypes in a progeroid model · doi:10.1038/nature10600 · #gap/no-fulltext-access
