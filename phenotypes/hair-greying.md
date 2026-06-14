---
type: phenotype
aliases: [canities, achromotrichia, greying, hair greying, gray hair, grey hair]
icd-10: L67.1
affected-tissues: ["[[hair-follicle]]", "[[scalp]]"]
underlying-hallmarks: ["[[stem-cell-exhaustion]]", "[[genomic-instability]]"]
typical-onset: "30s–50s (50-50-50 rule: ~50% of people have ~50% grey hair by age 50)"
prevalence-65plus: "~75–85% show significant greying (varies by ancestry and definition)"
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Nishimura 2002, Zhang 2020, Sun 2023, Rosenberg 2021, and Adhikari 2016 verified against primary source PDFs. Nishimura 2005 and Wood 2009 are closed-access (not_oa) — claims derived from those sources carry #gap/no-fulltext-access. MC1R claim not supported by Adhikari 2016; tagged #gap/unsourced pending primary citation."
---

# Hair Greying (Canities)

The progressive loss of pigmentation from scalp and body hair with age. Caused primarily by exhaustion and dysfunction of melanocyte stem cells ([[melanocyte-stem-cells|McSCs]]) that reside in the [[hair-follicle-bulge]] niche of the hair follicle. Hair greying is among the most visible and universally recognized signs of biological aging, and serves as a useful mechanistic model for studying stem cell niche maintenance and depletion more broadly. Distinguished from [[androgenetic-alopecia]] (a related but distinct follicle aging phenotype involving miniaturization rather than depigmentation) and from [[skin-aging]] of which it is one aspect.

---

## Definition and clinical features

**Grey vs white hair.** "Grey" hair is an optical mixture — individual hairs are either fully pigmented (dark) or fully depigmented (white), and the apparent grey arises from the blend. Truly depigmented, white hairs result from complete loss of functional [[melanocytes]] in the hair bulb matrix. The term "canities" (from Latin *canus*, white) encompasses both partial and complete depigmentation.

**The 50-50-50 rule.** A widely cited clinical aphorism: by age 50, approximately 50% of people have 50% grey hair. Rate of progression varies substantially by ancestry (earlier onset in Caucasians, later in East Asians, intermediate in Africans) and by anatomical region (scalp greys first, then beard, axillary, and pubic hair). #gap/unsourced — this rule is epidemiologically approximate; precise population-level data are limited.

**Canities subita ("Marie Antoinette syndrome").** Sudden or rapid onset greying over days to weeks, historically attributed to extreme psychological stress (the Marie Antoinette legend). Long considered apocryphal, but recent mechanistic work (see Stress and greying section below) provides a plausible biological basis through sympathetic norepinephrine-mediated rapid depletion of the McSC pool. The rapidity likely reflects acceleration of ongoing depletion rather than true overnight conversion of pigmented hair [^zhang2020].

**Rate of progression.** Once begun, greying progresses at variable rates. There is no reliable biochemical marker for greying rate; rate is largely genetic.

---

## Mechanism

### Melanocyte stem cell niche depletion

The core mechanism is the progressive reduction in the [[melanocyte-stem-cells|melanocyte stem cell (McSC)]] population in the lower permanent region (bulge) of the hair follicle. McSCs are responsible for replenishing the pool of mature melanocytes in the hair bulb matrix during each hair cycle. When McSC number falls below the threshold needed to regenerate the melanocyte pool at the onset of anagen (the hair growth phase), the resulting hair shaft is depigmented [^nishimura2002].

The foundational mouse work by Nishimura et al. (2002) established that [^nishimura2002]:
- Melanocyte stem cells reside in the **lower permanent portion** of the hair follicle — encompassing the bulge (where arrector pili muscle attaches) and occasionally the sub-bulge area immediately below
- The niche — not intrinsic cell fate — dominates McSC fate determination (demonstrated by transplantation: only lower permanent portion fragments, not upper permanent portion or hair bulb, generated pigmented hairs)
- Amplifying McSC progeny that migrate out of the niche can repopulate vacant niches and self-renew, confirming niche-conferred stemness (K14-SLF experiment: progeny from 2% of follicles repopulated the entire skin, generating 50× more stem cell systems)

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — McSC bulge niche demonstrated in human follicles |
| Phenotype conserved in humans? | yes — human greying maps to bulge McSC depletion |
| Replicated in humans? | partial — McSC depletion confirmed in human grey follicles; mechanistic intervention studies absent |

Nishimura et al. (2005) extended this to the **incomplete maintenance model**: during each hair cycle, some McSCs fail to self-renew — they differentiate prematurely and are lost from the niche. This attrition is cumulative, and greying is the phenotypic readout of when the niche McSC number crosses below replenishment capacity [^nishimura2005]. The 2005 paper further showed that DNA damage (ionizing radiation in the mouse model) accelerates McSC depletion via ectopic differentiation, directly linking [[genomic-instability]] to canities.

### Loss of MITF and melanogenic program

[[mitf|MITF]] (Microphthalmia-associated transcription factor) is the master regulator of melanocyte identity and the melanogenic enzyme cascade (TYR, TYRP1, DCT). As McSCs deplete and mature melanocyte numbers in the hair bulb fall, the melanogenic program collapses in that follicle. Loss of MITF expression is therefore a downstream consequence of McSC pool depletion, not an independent primary driver in most age-related canities (though MITF mutations drive early-onset pigmentation defects). #gap/unsourced — the precise sequence of MITF expression decline relative to McSC depletion in aged human follicles has not been mapped in longitudinal studies.

### Oxidative stress and H2O2 accumulation

Independent of McSC depletion, oxidative damage contributes to melanocyte dysfunction within the hair bulb. Wood et al. (2009) showed that senile hair greying in humans is associated with massive buildup of hydrogen peroxide (H2O2) throughout the hair shaft and follicle, arising from reduced catalase activity and impaired methionine sulfoxide reductase (MSR) repair capacity [^wood2009]. This H2O2 accumulation bleaches melanin in situ and disrupts tyrosinase activity, providing a second, parallel pathway by which hairs depigment independently of McSC exhaustion.

| Dimension | Status |
|---|---|
| H2O2 accumulation in human grey follicles? | yes — demonstrated in Wood 2009 |
| Mechanism fully established? | partial — catalase/MSR insufficiency shown; upstream drivers not fully mapped |
| Therapeutic target validated? | no — no approved H2O2-targeting therapy for canities in humans |

#gap/needs-replication — Wood 2009 findings have not been independently replicated at scale.

---

## Stress and greying

### Sympathetic norepinephrine mechanism (Zhang 2020)

A landmark Nature paper by Zhang et al. (2020) demonstrated in mice that stress causes rapid and permanent depletion of McSCs through the sympathetic nervous system [^zhang2020]. Key findings:
- Three stress modalities tested: restraint stress, chronic unpredictable stress (CUS), and nociception via resiniferatoxin (RTX, a capsaicin analogue). RTX produced the most rapid effect: McSCs were largely lost from the bulge within 5 days, and unpigmented hairs appeared in the following anagen
- Restraint and CUS produced similar but slower depletion (over 3–5 hair cycles)
- The mechanism: stress activates sympathetic neurons innervating the hair follicle niche, producing burst release of **norepinephrine** (NE), which signals via ADRB2 on McSCs
- NE drives McSCs into rapid hyper-proliferation (~50% McSCs entered M phase within 24h after RTX), followed by premature differentiation and migration out of the niche — permanently exhausting the pool
- The effect was immune-independent (Rag1 mutant and myeloid-ablated mice still greyed) and adrenal-independent (adrenalectomy did not prevent greying). Blocking sympathetic innervation (6-OHDA sympathectomy; guanethidine) blocked greying
- CDK inhibitors (AT7519, Flavopiridol) and genetic P27 induction in McSCs transiently suppressed proliferation and preserved the McSC pool, demonstrating proliferation as the proximate cause of depletion

This study was notable for identifying a direct neuro-stem cell axis as the stress mediator, bypassing the HPA axis (adrenal corticosterone was not required).

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — sympathetic innervation of follicles is conserved; norepinephrine receptor expression on human McSCs not directly mapped |
| Replicated in humans? | no — mouse model; partial indirect support from Rosenberg 2021 (see below) |

#gap/needs-human-replication

### Reversibility under stress reduction (Rosenberg / Picard 2021)

Rosenberg et al. (2021) provided the first quantitative evidence that hair greying can be partially **reversed** in humans [^rosenberg2021]. Key findings:
- High-resolution hair pigmentation pattern (HPP) profiling of 397 individual hairs from 14 participants (7F/7M, mean age 35±13, range 9–65; age range chosen to capture early-stage canities)
- Spontaneous re-pigmentation (white-to-dark transitions) documented across ages, sexes, ethnicities (Caucasian, Hispanic, Asian), and body regions (scalp, pubic, beard)
- Reversal rate was similar to the rate of greying (Cohen's d=0.15, p=0.59) — repigmentation is not slower than depigmentation
- Stress-pigmentation temporal correlation demonstrated in 2 individuals via retrospective life events calendar: in one case (35-year-old male), reversal coincided with lowest-stress period (vacation); in another (30-year-old Asian female), greying corresponded temporally with peak marital conflict stress (p=0.007 by permutation test)
- Proteomic analysis of white vs. dark hair segments from matched individuals consistently upregulated mitochondrial proteins in white hairs (CPT1A, ACOT7, SOD1, CFL1, PGK1 across both independent experiments); metabolic remodelling signature, not structural/keratin changes
- Importantly: **stress-mapping was performed in only 2 participants** (retrospective; causal interpretation not established); McSC biology of re-pigmenting follicles not directly characterized

This finding challenges the prior assumption that McSC depletion is irreversible once established. The reversal events may reflect re-activation of residual McSC reserve rather than true stem cell regeneration, consistent with Sun 2023's dedifferentiation model. #gap/needs-replication #gap/no-mechanism — molecular basis of re-pigmentation not established; McSC state in re-pigmenting follicles not directly characterized in Rosenberg 2021.

---

## McSC dedifferentiation model (Sun 2023)

Sun et al. (2023) fundamentally revised the model of McSC maintenance through live multiphoton imaging of individual hair follicles across hair cycles [^sun2023]. Key findings:
- McSCs are not static residents of a dedicated stem cell compartment; most reside in the **hair germ (HG)** at telogen, not the bulge (81% in HG, 13% with >1 McSC in bulge, 6% with 1 McSC in bulge per quantification)
- In young follicles, McSCs dynamically transit between the HG and the bulge/ORS compartment across the hair cycle. In the HG during early anagen, McSCs transiently acquire differentiation markers (dendritic morphology, pigmentation gene expression) — this is a reversible **TA-like state**, not terminal differentiation
- Return transit to the bulge/ORS at mid-late anagen is coupled to **dedifferentiation** — WNT signals are downregulated in the bulge/ORS environment, enabling McSCs to shed differentiation markers and return to a stem state
- In aged follicles, McSC positions become scattered: distance between McSCs within the HG increases (P=0.0426 at 7th vs. 2nd telogen), and the percentage of HFs containing bulge McSCs increases (P=0.0006). This spatial displacement reduces access to WNT dedifferentiation signals, impairing the dedifferentiation-return cycle and causing net McSC loss over successive hair cycles
- The primary failure mode in aging is loss of **positional access to dedifferentiation cues** rather than direct apoptosis, terminal differentiation, or immobilization per se

This model is mechanistically compatible with the sympathetic/norepinephrine model of Zhang 2020 — excessive norepinephrine-driven proliferation and premature differentiation could scatter McSCs and overwhelm the dedifferentiation program.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | unknown — live intrafollicular imaging not yet performed in human follicles |
| Replicated in humans? | no — mouse model only to date |

#gap/needs-human-replication #gap/needs-replication

---

## Genetic associations

Hair greying has a moderate-to-strong heritable component (twin studies estimate ~70% heritability for onset age; this figure is widely cited but the primary sources are not well-characterized on this page). #gap/unsourced — heritability figure needs primary citation.

**IRF4** — The strongest GWAS-identified locus for hair greying in humans. Adhikari et al. (2016), a GWAS in admixed Latin Americans, identified a genome-wide significant association at the *IRF4* locus with hair greying onset [^adhikari2016]. IRF4 (Interferon Regulatory Factor 4) is a transcription factor known to regulate hair and eye pigmentation; the same locus also influences hair color and skin pigmentation. The mechanism linking IRF4 genotype to canities rate is not fully established. #gap/no-mechanism

**MC1R** — Variants in *MC1R* (Melanocortin 1 receptor), best known for their role in red hair and fair skin, have been associated with earlier greying onset in some populations. MC1R signaling regulates [[mitf|MITF]] activity and therefore the melanogenic program. The association is modest and population-specific. #gap/needs-replication #gap/unsourced — the MC1R–canities association is not reported in Adhikari 2016; this claim requires a separate primary citation (e.g., a dedicated MC1R–greying GWAS or case-control study).

**Other loci.** The Adhikari 2016 GWAS identified additional genome-wide significant loci for other hair traits in the same cohort: *PRSS53* (hair shape), *EDAR* (hair shape and beard thickness), *FOXL2* (eyebrow thickness), *PAX3* (monobrow), and others [^adhikari2016]. These loci were **not** associated specifically with hair greying in this study — only the IRF4 locus reached genome-wide significance for greying. Larger-scale GWAS in European or multi-ancestry populations for greying specifically are needed for better powered results.

---

## Reversibility: summary of evidence

| Evidence | Direction | Quality | Notes |
|---|---|---|---|
| Rosenberg 2021 (human observational) | reversible under stress reduction | low–moderate | small n; retrospective stress mapping; causal inference limited |
| Zhang 2020 (mouse experimental) | McSC depletion by stress is rapid and permanent in mice | moderate | mouse-only; mechanism (NE/sympathetic) is compelling but human relevance uncertain |
| Sun 2023 (mouse live imaging) | dedifferentiation maintenance model: McSC loss in aging is due to positional displacement from WNT niche signals; does not claim restoration of lost McSCs | low | mechanism for how McSCs are normally maintained and why they fail; no pharmacological rescue of aged greying shown |
| Clinical observation | spontaneous repigmentation after illness resolution, post-partum, drug discontinuation | anecdotal | case reports; not systematically quantified |

The current best interpretation: reversal is possible in **early or moderate greying** when some McSC reserve persists; once the bulge is depleted the loss appears permanent. The stress-reversibility window may be narrower than the Rosenberg 2021 data imply.

---

## Therapeutic landscape

No therapy is currently approved to reverse or prevent age-related hair greying. The clinical landscape as of 2026:

| Approach | Status | Notes |
|---|---|---|
| Topical/oral antioxidants | preclinical interest | targeting H2O2 buildup (catalase supplementation, PC-KUS pseudocatalase — Wood group); no large RCT |
| Stress reduction / autonomic modulation | hypothesis only | mechanistic basis from Zhang 2020; no intervention trial |
| Small-molecule McSC activators | preclinical | compounds targeting Wnt/Notch pathway to delay McSC depletion; early-stage |
| Stem cell transplantation | research stage | no clinical application established |
| Hair dye | cosmetic standard | addresses appearance, not biology |

#gap/long-term-unknown — no compound has completed a rigorous phase 2 trial for anti-greying. The space is largely cosmetically motivated and underfunded relative to mechanistic understanding.

---

## Hallmark mapping

Hair greying is a phenotypic readout of two core hallmarks intersecting in the hair follicle niche:

- **[[stem-cell-exhaustion]]** — primary driver; progressive depletion of the McSC pool is the proximate cause of depigmentation per Nishimura 2005 and Sun 2023 (Sun 2023 reframes the failure as loss of positional access to WNT-dependent dedifferentiation signals, leading to net McSC attrition per hair cycle)
- **[[genomic-instability]]** — radiation-induced DNA damage accelerates McSC ectopic differentiation and greying in mice per Nishimura 2005; accumulation of oxidative DNA damage in McSCs may contribute to age-related depletion
- **[[chronic-inflammation]]** and **[[cellular-senescence]]** — secondary contributors; senescent cells in the follicle niche secrete SASP factors that may impair McSC maintenance; not well characterized #gap/no-mechanism

**SENS correspondence.** Hair greying maps most directly to the SENS category of stem cell loss (LSC, "loss of stem cells / functional stem cells") — depletion of a self-renewing progenitor pool. No specific SENS damage-repair intervention has been proposed for McSCs.

---

## Limitations and gaps

- **Human McSC biology underpowered.** Nearly all mechanistic data derive from mouse models. Human McSC isolation and in vivo imaging remain technically challenging.
- **No intervention-grade evidence.** Greying is not treated as a health outcome in clinical trials (it is cosmetic); therefore the trial infrastructure that exists for sarcopenia or immunosenescence does not exist here. #gap/long-term-unknown
- **Reversibility boundary undefined.** The threshold between "still-rescuable McSC quiescence" and "truly depleted niche" is not characterized. #gap/no-mechanism
- **Genetic architecture incomplete.** The Adhikari 2016 GWAS in Latin Americans explains a minority of heritability; large European or multi-ancestry GWAS needed. #gap/needs-replication
- **Stress-greying in humans is observational only.** Rosenberg 2021 cannot be interpreted as showing that stress causes greying (or its reversal causes re-pigmentation) in a causal sense without a controlled intervention study. #gap/needs-replication
- **H2O2 mechanism needs validation.** Wood 2009 catalase/H2O2 findings have high mechanistic plausibility but have not been independently replicated at scale or in interventional settings.

---

## See also

- [[melanocyte-stem-cells]] — the cellular effector of this phenotype
- [[hair-follicle-bulge]] — the niche in which McSC maintenance (and failure) occurs
- [[mitf]] — master regulator of the melanogenic program
- [[stem-cell-exhaustion]] — the underlying hallmark
- [[androgenetic-alopecia]] — sibling follicle-aging phenotype (miniaturization, not depigmentation)
- [[skin-aging]] — umbrella phenotype encompassing hair greying and other integumentary changes
- [[molecules/metabolites/catecholamines]] — norepinephrine, the sympathetic mediator of stress-induced McSC depletion per Zhang 2020 (NE → ADRB2 → McSC niche exhaustion)

---

## Footnotes

[^nishimura2002]: [[studies/nishimura-2002-melanocyte-stem-cell-niche]] · doi:10.1038/416854a · Nishimura EK et al. · Nature 2002;416(6883):854–859 · in-vivo · model: mus-musculus (transgenic; Dct-lacZ reporter + K14-SLF lines on C57BL/6 background) · PDF verified · established McSC identity in lower permanent portion / bulge niche; niche dominates fate determination; transplantation (lower permanent portion only, not upper or hair bulb) confirms self-renewal; amplifying progeny repopulate vacant niches 50× · citation percentile 100 (874 citations)

[^nishimura2005]: [[studies/nishimura-2005-hair-graying-incomplete-msc]] · doi:10.1126/science.1099593 · Nishimura EK, Granter SR, Fisher DE · Science 2005;307(5710):720–724 · in-vivo · model: mus-musculus · closed-access; not locally downloaded · incomplete McSC self-renewal per hair cycle as mechanism of progressive greying; DNA damage accelerates ectopic differentiation and depletion · citation percentile 100 (733 citations) · #gap/no-fulltext-access

[^wood2009]: [[studies/wood-2009-h2o2-hair-graying]] · doi:10.1096/fj.08-125435 · Wood JM et al. · FASEB J 2009;23(7):2065–2075 · in-vitro/human observational · model: human scalp tissue · closed-access; not locally downloaded · H2O2 accumulation throughout grey follicles due to reduced catalase + impaired MSR repair; bleaches melanin in situ; disrupts tyrosinase · #gap/no-fulltext-access

[^zhang2020]: [[studies/zhang-2020-sympathetic-nerves-melanocyte-stem-cells]] · doi:10.1038/s41586-020-1935-3 · Zhang B et al. · Nature 2020;577(7792):676–681 · in-vivo · model: mus-musculus (C57BL/6J; multiple transgenic lines) · PDF verified · stress activates sympathetic neurons → burst norepinephrine release → McSC ADRB2 activation → ~50% McSCs enter M phase within 24h → differentiation, migration, permanent niche exhaustion within ~5 days; immune-independent (Rag1 mutant, CD11b-DTR mice unaffected); adrenal-independent (adrenalectomy did not prevent greying); sympathetic-dependent (6-OHDA ablation and guanethidine blocked greying); CDK inhibition preserved McSC pool · citation percentile 100 (268 citations)

[^sun2023]: [[studies/sun-2023-msc-dedifferentiation-dynamic-niche]] · doi:10.1038/s41586-023-05960-6 · Sun Q et al. · Nature 2023;616(7958):774–782 · in-vivo · model: mus-musculus (multiple reporter and conditional KO lines; live multiphoton imaging) · PDF verified · central finding: McSCs toggle between stem and transit-amplifying (TA) states via reversible dedifferentiation governed by local WNT signals; HG McSCs differentiate at early anagen then dedifferentiate and return to bulge/ORS during mid-late anagen; in aging, McSC positions become scattered (increased HG-to-McSC distance, P=0.0426; more bulge McSCs at 7th vs 2nd telogen, P=0.0006), impairing access to WNT dedifferentiation signals and causing net McSC loss over successive cycles · citation percentile 100 (86 citations)

[^rosenberg2021]: [[studies/rosenberg-2021-hair-greying-stress-reversal]] · doi:10.7554/eLife.67437 · Rosenberg AM et al. · eLife 2021;10:e67437 · observational · model: human (n=14 total; 7F/7M; mean age 35±13, range 9–65; 1 Hispanic, 8 Caucasian, 1 Asian among reversal participants; stress-mapped subset n=2) · PDF verified · high-resolution per-hair pigmentation profiling (HPP) approach; spontaneous re-pigmentation documented across ages, sexes, ethnicities, and body regions; reversal rate similar to or slightly faster than greying rate (Cohen's d=0.15, p=0.59 for rate difference); stress-mapping in 2 individuals showed temporal correlation between perceived stress peak and greying, and stress reduction with reversal (p=0.007 permutation test in one case); proteomic analysis of white vs. dark hair segments consistently upregulated mitochondrial proteins (CPT1A, ACOT7, SOD1, CFL1, PGK1) across 2 independent experiments; McSC state in re-pigmenting follicles not directly characterized · #gap/needs-replication

[^adhikari2016]: [[studies/adhikari-2016-hair-gwas-latin-american]] · doi:10.1038/ncomms10815 · Adhikari K et al. · Nat Commun 2016;7:10815 · GWAS · model: admixed Latin Americans (CANDELA cohort; n=6,630 recruited, n=6,357 retained post-QC including 2,922 males; Brazil, Chile, Colombia, Mexico, Peru) · PDF verified · genome-wide significant association at IRF4 locus (SNP rs12203592 in intron 4, P=3×10⁻¹³) with hair greying; same SNP also associated with hair colour (P=2×10⁻¹³); PRSS53 (hair shape), EDAR (hair shape, beard), FOXL2 (eyebrow thickness) associated with other hair traits but NOT specifically greying in this paper; 18 total genome-wide significant signals across 7 hair traits · #gap/needs-replication (not yet replicated in European or East Asian GWAS)
