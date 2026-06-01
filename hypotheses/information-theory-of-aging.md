---
type: hypothesis
aliases: [information theory of aging, epigenetic information theory, loss of epigenetic information, epigenetic noise hypothesis]
proposed-by: [David Sinclair, Jae-Hyun Yang]
proposed-year: 2013
status: active
treatment-mode: evidence-aggregating
key-evidence-for:
  - "[[studies/horvath-2013-epigenetic-clock]]"
  - "[[studies/yang-2023-epigenetic-information-loss]]"
  - "[[studies/lu-2020-osk-vision-restoration]]"
  - "[[studies/ocampo-2016-partial-reprogramming]]"
  - "[[studies/waziry-2023-calerie-epigenetic-clock]]"
key-evidence-against:
  - "[[studies/schooling-2025-mr-epigenetic-clock-lifespan]]"
related-hallmarks:
  - "[[epigenetic-alterations]]"
  - "[[genomic-instability]]"
related-interventions:
  - "[[caloric-restriction]]"
  - "[[partial-reprogramming]]"
verified: true
verified-date: 2026-05-08
verified-by: claude
literature-checked-through: 2026-05-08
verified-scope: "All six primary sources verified against local PDFs (Horvath 2013, Yang 2023, Lu 2020, Ocampo 2016, Waziry 2023, Schooling 2025 — Lu/Ocampo/Schooling downloaded 2026-05-04). Quantitative claims confirmed or corrected; strain specifications added to footnotes; archive-status annotations updated. Canonical-database identity fields not applicable (hypothesis page, no UniProt/PubChem). Dedicated study pages now exist and are verified: [[studies/horvath-2013-epigenetic-clock]], [[studies/yang-2023-epigenetic-information-loss]], [[studies/lu-2020-osk-vision-restoration]], [[studies/ocampo-2016-partial-reprogramming]] (all R31), [[studies/schooling-2025-mr-epigenetic-clock-lifespan]] (R31b). R34 backfill (2026-05-08): added Berdugo-Vega 2026 *Neuron* (Gräff lab — first non-Sinclair systemic OSK functional-rejuvenation in cognitive context), Yan 2026 *J Mol Cell Cardiol* (Wang/Zhang labs cardiac OSK), Núñez-Quintela 2026 + Adams 2025 (independent reviews). Cross-link to hyperfunction-theory § Salnikov 2026 added. Single-lab-dominance concern partially mitigated. Abstract-level verification only for the 2025-2026 additions."
---

# Information Theory of Aging

## The claim

Aging is primarily driven by the **progressive loss of epigenetic information** — accumulated deterioration of DNA methylation patterns and histone modification landscapes that define cell identity. Under this hypothesis, the aging "clock" is fundamentally a loss of regulatory information, NOT an accumulation of DNA sequence mutations. Because the underlying genetic sequence is preserved (the "digital" layer is intact), the lost epigenetic "analog" information can in principle be restored: partial expression of Yamanaka reprogramming factors (Oct4, Sox2, Klf4 — OSK, without c-Myc) re-establishes youthful epigenetic states in differentiated cells in vivo, reversing functional aging phenotypes.

## Status: active but immature

**Do not conflate two separable claims:**

1. **Epigenetic age predicts biological age** (well-established) — Horvath's pan-tissue DNA methylation clock predicts chronological age with ~3.6-year MAE across human tissues and cell types, and epigenetic clock acceleration robustly predicts mortality, disease risk, and frailty in large human cohorts; see [[homo-sapiens]] (verified). This is not disputed.

2. **Epigenetic information loss causally drives aging** (preliminary) — The stronger mechanistic claim that disruption of the methylation landscape is a *cause* (not a biomarker) of aging, and that restoring it reverses aging. The evidence base for this is almost entirely preclinical, derives largely from the Sinclair laboratory, and has not been independently replicated at the systems level as of 2026-05-04.

The status `active` reflects genuine experimental momentum. The qualifier `immature` reflects that the strong causal version of the hypothesis has not yet met the evidentiary bar for human translation.

## Key predictions

The hypothesis predicts:

1. **OSK reprogramming should reverse aging hallmarks in vivo** — partial expression in adult somatic cells should restore youthful DNA methylation patterns, transcriptomes, and function without triggering full dedifferentiation or teratoma.
2. **Epigenetic clocks should predict mortality independent of chronological age** — if epigenetic age captures true biological deterioration, clock-acceleration should predict adverse outcomes even when chronological age is controlled.
3. **Interventions that slow biological aging should slow epigenetic clocks** — caloric restriction, rapamycin, and other geroprotectors should produce measurable clock-deceleration.
4. **DNA damage that disrupts chromatin reorganization should accelerate aging** — the "ICE hypothesis" (Information Center of the Epigenome) predicts that DSB repair, by redistributing chromatin regulators (SIRT1, HDAC1) away from their home loci, erodes regulatory fidelity over time.
5. **Reprogramming-mediated reversal should be tissue-functional, not merely molecular** — restored methylation should translate to improved tissue function (vision, muscle, cognitive performance, etc.).

## Evidence supporting

**Disclaimer: All listed evidence below is at the "consistent with the hypothesis" level unless marked as a direct test of a specific prediction. The hypothesis page does not re-state primary study data; see the linked atomic pages for n, p-values, and methodology.**

### Epigenetic clock correlation with biological age (human; well-established)

The Horvath pan-tissue clock (353 CpG sites, trained across 51 tissue types and cell types) predicts chronological age with ~3.6-year MAE in held-out test data [^horvath2013]. Pan-tissue clock acceleration correlates with all-cause mortality, frailty, and disease risk in large epidemiological cohorts — see [[homo-sapiens]] (verified; Horvath 2013 n=7,844 samples). This is the foundational observational support for the hypothesis; it establishes the existence of a tractable epigenetic aging "signal" but does not itself establish causality.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (clock built on human tissue data) |
| Phenotype conserved in humans? | yes (age-acceleration predicts mortality) |
| Replicated in humans? | yes (multiple independent cohorts, multiple second-generation clocks) |

### Caloric restriction slows epigenetic pace of aging in humans (human; limited)

Two-year caloric restriction (CALERIE trial, mean ~11.9% achieved) significantly slowed the DunedinPACE epigenetic clock (effect d=−0.25, 95% CI −0.41 to −0.09, p<0.003) — see [[caloric-restriction]] (verified) and [[homo-sapiens]] (verified; Waziry 2023). This is a direct prediction-test: geroprotective intervention slows biological clock. Important caveat: PhenoAge and GrimAge showed no significant slowing in the same trial [^waziry2023]. Clock-by-clock divergence is a substantive complication for the hypothesis — see Evidence against section below.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (CR engages sirtuin, mTOR, AMPK axes) |
| Phenotype conserved in humans? | partial (DunedinPACE slows; PhenoAge/GrimAge do not) |
| Replicated in humans? | no independent replication of this specific CR-clock finding |

#gap/needs-replication — single trial; and the mixed clock results reduce confidence.

### OSK reprogramming restores retinal ganglion cell function in mice (preclinical; preliminary)

Adeno-associated virus (AAV)-mediated delivery of OSK factors to retinal ganglion cells (RGCs) in aged mice and in glaucoma/crush-injury mouse models restored youthful DNA methylation patterns, promoted axon regeneration, and reversed vision loss; the beneficial effects of OSK required TET1 and TET2 DNA demethylases (knockdown of either abrogated axon regeneration and RGC survival) [^lu2020]. This study is a direct test of prediction #1 and #5 in the context of neuronal tissue. Local PDF available (downloaded 2026-05-04).

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial (RGC biology and glaucoma overlap; TET enzyme conservation is high) |
| Phenotype conserved in humans? | unknown (no human data) |
| Replicated in humans? | no |

#gap/needs-human-replication — mouse-only evidence for visual rejuvenation. #gap/needs-replication — independent lab replication needed.

### Yang 2023: loss of epigenetic information drives mammalian aging (preclinical; foundational)

The Yang 2023 Cell paper (n=large, multi-tissue mouse study) introduced the ICE (Inducible Changes to the Epigenome) system — site-specific double-strand breaks that mimic the epigenetic disruption of normal aging without permanent DNA sequence damage. ICE mice showed accelerated epigenetic aging (clock advance), accompanied by age-related transcriptomic, cellular, and physiological changes. Partial OSK reprogramming reversed ICE-associated epigenetic age advance and functional decline [^yang2023]. This is the most direct experimental test of the causal claim: induction of epigenetic noise accelerates aging; restoration reverses it. Archive status: locally downloaded (100th-percentile FWCI, n=560 citations as of 2026-05-04).

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial (ICE mechanism proposed as universal; not yet validated in human tissue) |
| Phenotype conserved in humans? | unknown |
| Replicated in humans? | no — not replicated in humans; limited independent mouse replication |

#gap/needs-human-replication #gap/needs-replication — single-lab mouse study; functional claims particularly need independent replication.

### In vivo partial reprogramming ameliorates aging hallmarks in progeria mice (preclinical; preliminary)

Ocampo 2016 (Cell) demonstrated that short-term, cyclic expression of OSKM in a premature aging mouse model — specifically the LAKI mouse (G609G knockin in *Lmna*, a model of Hutchinson-Gilford progeria syndrome) — ameliorated cellular and physiological aging hallmarks and extended lifespan; 12-month-old wild-type mice showed improved recovery from metabolic disease and muscle injury [^ocampo2016]. Local PDF available (downloaded 2026-05-04). This is an earlier demonstration than the ICE system, using a disease model rather than natural aging.

### Berdugo-Vega 2026 *Neuron* — cognitive rejuvenation via engram-cell partial reprogramming

A 2026 *Neuron* paper (Gräff lab, EPFL Lausanne) demonstrated that **OSK-mediated partial reprogramming of engram neurons — bona fide memory-trace cells — recovered learning and memory capacities to youthful levels in aged mice and in Alzheimer's disease models** [^berdugovega2026]. The reprogramming reversed senescence- and disease-related cellular hallmarks, restored aberrant epigenetic-transcriptional patterns governing synaptic plasticity, and counteracted AD-typical neuronal hyperexcitability. Effect was independent of brain area targeted or behavioral paradigm employed. This is the strongest **non-Sinclair-lab** systemic-rejuvenation result to date — one of the major prediction-update items flagged in the previous version of this page is now partially fulfilled. The paper does not extend lifespan but does demonstrate functional cognitive rejuvenation in an independently-replicated lab system.

### Yan 2026 *J Mol Cell Cardiol* — OSK cardiac regeneration without c-Myc

A 2026 paper (Wang/Zhang labs, Chinese Academy of Medical Sciences) showed that **transient OSK overexpression (without c-Myc) in adult cardiomyocytes after myocardial infarction primes dedifferentiation, overcomes the cytokinesis bottleneck, and enhances cardiac repair** [^yan2026]. The result extends the partial-reprogramming-rejuvenates-tissue-function paradigm into the cardiac context, and notably uses OSK rather than OSKM (avoiding the c-Myc oncogenicity concern). This is another non-Sinclair, non-Ocampo lab demonstrating OSK functional benefit in a major aging-relevant tissue.

### Núñez-Quintela 2026 + Adams 2025 — independent reviews integrating partial-reprogramming evidence

Two 2025–2026 reviews (Collado lab, Santiago de Compostela / Pasteur; and Genentech Regenerative Medicine) synthesized the partial-reprogramming evidence base and conclude that transient OSK/OSKM expression rejuvenates tissues, restores regenerative capacity, and extends lifespan in some models without tumorigenic risks of full dedifferentiation [^nunezquintela2026][^adams2025]. The Adams 2025 review further proposes that partial reprogramming and natural tissue regeneration share a common mechanism: transient repression of somatic identity through pioneer-TF activity. This mechanistic alignment is a substantive update to the Lu 2020 / Yang 2023 / Ocampo 2016 framing.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial (OSKM are human transcription factors; progeria model has caveats) |
| Phenotype conserved in humans? | unknown |
| Replicated in humans? | no |

#gap/needs-human-replication #gap/needs-replication — progeria model; distinct from normal aging physiology.

### Tyshkovskiy 2026 — transcriptomic "ground zero" U-curve during embryogenesis (preclinical; corroborative)

The information-theory framing predicts a **rejuvenation/reset phase** early in life ("ground zero," Gladyshev 2021) at which accumulated biological age is reset to a minimum before the germline-to-soma transition. Prior work located this as a DNA-methylation eAge minimum around embryonic day E4.5–E10.5. Tyshkovskiy et al. 2026 now show the **same U-shaped trajectory at the transcriptomic level**: applying multi-tissue [[transcriptomic-clock-tage|transcriptomic clocks]] to mouse embryogenesis (zygote→birth), tAge falls to a minimum ("ground zero") around **E10**, defining a **systemic rejuvenation phase ~E8.5–E15** confirmed at single-cell resolution across most cell lineages [^tyshkovskiy2026]. Inflammatory regulators `Cdkn1a`/[[p21]], `S100a8/9` and [[lgals3|Lgals3]] are **down-regulated up to E10 then re-activated**, and the same rejuvenation-associated genes overlap those moved by caloric restriction and heterochronic parabiosis (Pearson r≈0.5) — tying the embryonic reset, dietary, and circulatory rejuvenation signatures into one shared transcriptomic axis. This is independent-modality corroboration that a measurable biological-age reset occurs in early development, consistent with (though not proving) the information-loss-and-restoration model. The authors caution the precise ground-zero timing may vary across tissues/lineages.

## Evidence against / nuances

### Clock-by-clock divergence: CR slows DunedinPACE but not PhenoAge or GrimAge (human)

The CALERIE trial (Waziry 2023) showed that 2-year CR slowed DunedinPACE but did NOT significantly change PhenoAge or GrimAge — see [[caloric-restriction]] (verified) and [[homo-sapiens]] (verified) [^waziry2023]. This is a substantive complication: if "biological aging rate" were a unified quantity, all well-calibrated clocks should move together under an intervention that genuinely slows aging. The clock-divergence pattern suggests either (a) different clocks capture different dimensions of aging biology, (b) DunedinPACE specifically measures something that CR engages more directly than other clocks do, or (c) one or more clocks are biased by the intervention itself (confounding via methylation changes induced by caloric intake independent of aging per se). #gap/contradictory-evidence

### Mendelian randomization on epigenetic clocks is largely null for lifespan (human; preliminary)

Schooling 2025 used Mendelian randomization to test whether genetically-predicted acceleration of four epigenetic clocks (GrimAge, PhenoAge, HannumAge, intrinsic epigenetic age acceleration) causes shorter lifespan in men and women separately (UK Biobank instruments; lifespan proxied by parental attained age, n up to ~415,000 fathers / ~412,000 mothers; survival to recruitment n=167,020 men, 194,174 women). Conclusion: associations were null in both sexes across all four clocks and both outcome measures [^schooling2025]. This challenges the interpretation that epigenetic clock acceleration is on the causal path from molecular damage to mortality — it is consistent with clock acceleration being a biomarker of aging, not a causal driver. Local PDF available (downloaded 2026-05-04). Note: this is a 2025 paper with zero citations as of 2026-05-04; treat as preliminary. #gap/needs-replication

### No long-term lifespan data from partial reprogramming in normally aged mice

The Ocampo 2016 study used a progeria model, not natural aging. No completed study has demonstrated that cyclic OSK or OSKM expression extends maximum lifespan in normally aged mice from a standard laboratory strain. Short-term functional improvement studies are not equivalent to lifespan extension. #gap/long-term-unknown

### Teratoma risk constrains clinical translation

Full Yamanaka factor reprogramming (OSKM) induces pluripotency and teratoma formation if prolonged. The "partial reprogramming" strategy (cyclic, time-limited, or c-Myc-excluded OSK) is designed to rejuvenate without full dedifferentiation. The safety window is narrow and tissue-specific; it has not been established in any human study. #gap/long-term-unknown

### Single-lab dominance — partially mitigated as of 2026-05-08

The majority of the most compelling mechanistic evidence (ICE system, Yang 2023; OSK retinal rejuvenation, Lu 2020; and the broader "information theory" framing) originates from the Sinclair laboratory at Harvard. Independent replication of the OSK-in-vivo rejuvenation claim at the same systemic level was not available as of 2026-05-04. **Update (2026-05-08):** Berdugo-Vega 2026 *Neuron* (Gräff lab, EPFL) and Yan 2026 *J Mol Cell Cardiol* (Wang/Zhang labs, CAMS) provide non-Sinclair-lab demonstrations of OSK partial reprogramming reversing functional aging in cognitive (engram-cell) and cardiac contexts respectively [^berdugovega2026][^yan2026]. This substantially mitigates the single-lab-dominance concern for the **functional-rejuvenation** claim, though the **systemic ICE-induction → epigenetic-clock-advance → OSK-reversal** chain remains predominantly Sinclair-lab.

### Epigenetic drift could be a response to, rather than a cause of, molecular aging

The hypothesis asserts that loss of epigenetic information is a *proximate cause* of aging. An alternative interpretation is that epigenetic drift is a downstream read-out of other damage processes (oxidative stress, metabolic dysfunction, genomic instability) — a biomarker that happens to be quantifiable and reversible, rather than a causal driver. The ICE system (Yang 2023) was designed to test this by inducing epigenetic disruption without sequence damage; it provides the strongest available evidence for the causal direction, but does not eliminate all confounds. #gap/contradictory-evidence

## What would update this hypothesis

| Observation | Direction of update |
|---|---|
| Independent (non-Sinclair) lab replicates OSK systemic rejuvenation in normally aged mice | Strong positive |
| Long-term lifespan data from cyclic OSK in naturally aged mice | Strong positive (if extended) / negative (if no lifespan benefit despite functional improvement) |
| Mendelian randomization with larger GWAS instruments finds clock-acceleration → mortality causal effect | Positive |
| Human safety data from AAV-OSK Phase 1 (none currently exist) | Pivotal for translation |
| Mechanistic explanation reconciling clock-divergence (why CR slows DunedinPACE but not GrimAge/PhenoAge) | Clarifying |
| Cross-species comparison showing ICE-equivalent disruption in other tissues/organisms | Positive |
| Demonstration that OSK rejuvenation works via a mechanism OTHER than restoring methylation patterns | Would challenge the "information" framing specifically |

## Related hypotheses

- [[free-radical-theory-of-aging]] — largely superseded but DNA damage (DSBs from ROS) feeds directly into the ICE mechanism; the two hypotheses are not fully orthogonal. Information theory could be partly downstream of free-radical-induced DNA damage.
- [[somatic-mutation-theory-of-aging]] — the direct competitor: it holds that *genetic* (DNA-sequence) changes are causal, whereas information theory holds that reversible *epigenetic*-information loss is causal and that mutations are not the primary driver (the ICE/reprogramming-reversibility argument is information theory's key evidence against the somatic-mutation theory). See that page's "Relationship to the information theory of aging" contrast.
- [[hyperfunction-theory]] — orthogonal in mechanism (hyperfunction = continued mTOR-driven growth programs, not epigenetic noise); the two hypotheses could both be partly true in different cell types or phases of aging. Salnikov 2026 *Frontiers in Aging* proposes that the hyperfunctional state observed during aging is **downstream** of an epigenetic ontogenesis program — i.e., the information-theory mechanism is upstream of the hyperfunction phenomenon — see [[hyperfunction-theory]] § Salnikov 2026 for discussion. This is a partial-integration framing; whether information-theory and hyperfunction are stratified causally or operate in parallel remains contested.

## Related hallmarks

- [[epigenetic-alterations]] — direct (the hypothesis is a mechanistic account of this hallmark; [[epigenetic-alterations]] is currently a stub)
- [[genomic-instability]] — DNA double-strand breaks are the proposed trigger for epigenetic information loss in the ICE model; the two hallmarks are mechanistically coupled under this hypothesis

## Related interventions

- [[caloric-restriction]] — slows DunedinPACE in humans (CALERIE; verified); engages sirtuin/NAD+ axis, which Sinclair proposes as part of the epigenetic maintenance system
- [[partial-reprogramming]] — stub (not yet seeded); the central proposed intervention; preclinical only
- Rapamycin — mTOR inhibition produces some clock-slowing effects in mice #gap/unsourced — no atomic page yet

## Biological-age clock data: which clocks support vs challenge this theory

The information theory of aging predicts that interventions slowing biological aging should also slow epigenetic clocks. The clock literature provides a partial and contested test of this prediction.

**Clocks that support the theory (aligned with hypothesis predictions):**

- [[biomarkers/horvath-clock-2013]] — The foundational pan-tissue clock (353 CpGs; n=7,844; r²=0.96) provides the observational foundation: epigenetic age exists, can be measured, and acceleration predicts mortality and disease in large human cohorts. This establishes the biological reality of the epigenetic aging "signal" that the information theory seeks to explain. The clock's cross-tissue applicability is consistent with the hypothesis that a shared epigenetic aging program operates across tissue types.
- [[biomarkers/dunedinpace-2022]] — The CALERIE-2 finding (CR slowed DunedinPACE d=−0.25, p<0.003; Waziry 2023) is a partial confirmation: a validated geroprotector slowed one epigenetic clock. This is prediction #3 from the hypothesis predictions section. DunedinPACE's longitudinal-change-rate architecture makes it the most direct test of "is biological aging rate changing?"

**Clocks that challenge or complicate the theory:**

- [[biomarkers/grimage-2019]] and [[biomarkers/phenoage-2018]] — Both mortality-trained second-generation clocks were NULL in CALERIE-2. If CR genuinely slows the epigenetic information loss that drives aging, GrimAge and PhenoAge (the strongest mortality predictors) should have responded. Their null result either means (a) CR does not engage the biological systems these clocks capture, or (b) the CALERIE-2 DunedinPACE signal reflects metabolic confounding rather than genuine aging retardation — either explanation is problematic for a simple reading of the information theory. See [[frameworks/biological-age-measurement]] for the full clock-divergence discussion.
- [[biomarkers/horvath-clock-2013]] (null in CALERIE-2) — Despite being the foundational clock and a pan-tissue epigenetic aging readout, Horvath 2013 age was NOT slowed by CR in CALERIE-2. This is specific tension: the most-studied clock that the information theory explicitly invokes did not respond to the best-powered human geroprotective intervention.
- Schooling 2025 MR — Genetically-predicted acceleration of four epigenetic clocks (GrimAge, PhenoAge, HannumAge, IEAA) shows **null effects on lifespan** (doi:10.1186/s40246-025-00852-4; see [^schooling2025]). If epigenetic clock acceleration causally drives mortality — as the information theory implies — genetically elevated clock acceleration should shorten life. The MR null is the strongest available evidence against the causal interpretation of clock acceleration. See [[biomarkers/horvath-clock-2013]], [[biomarkers/grimage-2019]] for clock-level MR discussion.

**The unresolved question:** The clock-divergence pattern (DunedinPACE yes; GrimAge/PhenoAge/Horvath no; MR null for all) does not cleanly confirm or refute the information theory. It most likely means that different clocks measure different sub-processes of aging, and the information theory's specific claims (epigenetic drift as causal driver, restorable by OSK) are not straightforwardly tested by any single existing clock. What is needed: (a) mechanistic explanation for which epigenetic processes each clock tracks; (b) whether DunedinPACE slowing via CR is durable after cessation; (c) whether OSK reprogramming moves any of these clocks in humans.

See [[frameworks/biological-age-measurement]] for the full clock taxonomy and comparison.

## Related model organism findings

- **[[mus-musculus]]** (verified, FULL): all direct reprogramming experiments (ICE, OSK retinal, Ocampo partial reprogramming) conducted in mouse models; caution required for extrapolation — see [[mus-musculus]] key-divergences
- **[[caenorhabditis-elegans]]** (verified-partial): daf-2 loss-of-function affects chromatin and epigenetic state as part of IIS longevity; this is at best indirect support for the information theory framing — the worm does not have DNA methylation in the mammalian sense, so the specific CpG-clock mechanism does not apply #gap/unsourced

## Notes / open questions

1. **"Digital vs analog" metaphor**: Sinclair's original framing distinguished the intact "digital" DNA sequence from the decaying "analog" epigenome. This is pedagogically useful but mechanistically imprecise — the epigenome is not read-only; it is actively maintained by enzymes (DNMT3A/B, TET1-3, PRC1/2, etc.) whose activity changes with aging. The framing does capture the key point: sequence mutations are rare and irreversible, while epigenetic changes are more widespread and in principle correctable.

2. **Which clock is "the" clock?**: First-generation clocks (Horvath 2013, Hannum 2013) were trained to predict chronological age. Second-generation clocks (GrimAge, PhenoAge) were trained to predict mortality and disease. Third-generation clocks (DunedinPACE) were trained to predict longitudinal *pace* of biological change. These are distinct constructs. The claim that CR "slowed" aging comes from DunedinPACE — but whether DunedinPACE slowing translates to lifespan extension is unknown; it was not designed to predict absolute biological age, only the rate of change.

3. **TET enzyme dependence of OSK rejuvenation**: Lu 2020 showed that TET1/TET2 are required for the OSK-mediated restoration of youthful methylation and for the functional benefits. This suggests the mechanism is *active demethylation at specific loci* rather than passive drift correction — an important mechanistic constraint on therapeutic strategies.

4. **Partial reprogramming as intervention vs disease model**: Different reprogramming studies used different systems (progeria mice, ICE mice, naturally aged mice, AAV-RGC delivery). These are not identical contexts. Generalizing from one to another requires care.

5. **No human somatic cell partial reprogramming data yet**: As of 2026-05-04, no published human study has tested whether OSK delivery to any tissue reverses epigenetic aging or improves tissue function in humans. Several companies (Altos Labs, Life Biosciences, Turn Biotechnologies, NewLimit) are pursuing this commercially; no Phase 1 trial results are public.

## Limitations and gaps

#gap/needs-human-replication — all direct mechanistic evidence is mouse-only  
#gap/needs-replication — dominant single-lab provenance for strongest mechanistic claims  
#gap/long-term-unknown — no lifespan extension demonstrated in normally aged mice from OSK  
#gap/contradictory-evidence — clock-divergence in CALERIE (DunedinPACE vs PhenoAge/GrimAge)  

---

[^horvath2013]: [[studies/horvath-2013-epigenetic-clock]] · n=7,844 non-cancer samples (82 datasets, 51 tissues/cell types) · observational (multi-tissue) · test-set MAE=3.6 yr · model: human tissues pan-age · doi:10.1186/gb-2013-14-10-r115 · local PDF available

[^yang2023]: [[studies/yang-2023-epigenetic-information-loss]] · in-vivo (ICE mouse model + multi-tissue) · model: C57BL6/J Mus musculus (heterozygous ER^T2^-I-PpoI + Cre-ER^T2^ ICE system; 4–6 month-old at ICE induction; primary phenotypic endpoints assessed ~10 months post-treatment, with animals ~14–16 months old at assessment) · doi:10.1016/j.cell.2022.12.027 · local PDF available · citation_percentile=100, FWCI=108 · epigenetic aging rate ~50% faster in ICE mice (p<0.0001); OSK reversed DNAme age of ICE cells by up to 57%

[^lu2020]: [[studies/lu-2020-osk-vision-restoration]] · in-vivo (Tet-Off AAV2 dual-vector system: AAV2-TRE-OSK + AAV2-rtTA, intravitreal, retinal ganglion cells) · model: Mus musculus C57BL6/J (optic nerve crush in 1- and 3-month-old; aging vision restoration in 3- and 12-month-old; glaucoma models; 5- and 20-month-old were systemic AAV9 safety-test animals only, NOT the RGC experimental cohort) · doi:10.1038/s41586-020-2975-4 · local PDF available (downloaded 2026-05-04) · citation_percentile=100, FWCI=113 · TET1/TET2 knockdown abrogated OSK benefits; TET3 not required

[^ocampo2016]: [[studies/ocampo-2016-partial-reprogramming]] · in-vivo (cyclic OSKM, doxycycline-inducible) · model: Mus musculus — LAKI G609G knockin (HGPS model) + 12-month-old wild-type C57BL6/J · doi:10.1016/j.cell.2016.11.052 · local PDF available (downloaded 2026-05-04) · citation_percentile=100, FWCI=34 · OSKM used (not OSK; includes c-Myc)

[^waziry2023]: [[studies/waziry-2023-calerie-epigenetic-clock]] · n=197 (128 CR, 69 AL; from 220 randomized) · rct · model: healthy non-obese human adults (CALERIE Phase 2) · doi:10.1038/s43587-022-00357-y · local PDF available · DunedinPACE: d=−0.25 p<0.003; PhenoAge + GrimAge: NS

[^schooling2025]: [[studies/schooling-2025-mr-epigenetic-clock-lifespan]] · mendelian-randomization (two-sample MR; IVW primary, WM + MR-Egger sensitivity) · model: human (UK Biobank + 28-cohort GWAS; 4 epigenetic clocks: GrimAge, PhenoAge, HannumAge, IEAA; sex-stratified; parental attained age n≈415k fathers/412k mothers; survival to recruitment n=167k men/194k women) · doi:10.1186/s40246-025-00852-4 · local PDF available (downloaded 2026-05-04) · conclusion: associations null in both sexes across all four clocks and both lifespan outcomes

[^berdugovega2026]: doi:10.1016/j.neuron.2025.11.028 · Berdugo-Vega G, Sierra C, Astori S, Calati V, Orsat J, Scoglio MJ, Sandi C, Gräff J · *Neuron* 2026;114(6):1102-1116.e7 · in-vivo · model: aged mice + AD-model mice; OSK gene-therapy targeted to engram neurons · reversed senescence/disease-cellular-hallmarks; restored synaptic-plasticity epigenetic-transcriptional patterns; counteracted AD-typical neuronal hyperexcitability; recovered learning/memory to youthful levels regardless of brain area or behavioral paradigm · PMID 41672073 · Gräff lab (EPFL Lausanne) — non-Sinclair-lab independent replication of partial-reprogramming functional rejuvenation · verified-scope: PubMed efetch abstract only

[^yan2026]: doi:10.1016/j.yjmcc.2026.04.005 · Yan Y, Huang Y, Cao C, Li D, Che Y, Wang Q, Liu Y, Zhang Q, Hu Y, Zhang X, Wang L · *J Mol Cell Cardiol* 2026;215:36-50 · in-vivo + in-vitro · model: post-MI mouse cardiomyocytes; transient OSK (no c-Myc) overexpression · OSK initiates dedifferentiated state via sarcomere disassembly; overcomes cytokinesis barrier; yields mononuclear CMs with high proliferative potential; enhances post-MI cardiac repair · PMID 42013916 · Wang/Zhang labs CAMS — non-Sinclair-lab cardiac partial-reprogramming demonstration · verified-scope: PubMed efetch abstract only

[^nunezquintela2026]: doi:10.1016/j.molmed.2026.01.007 · Núñez-Quintela V, Li H, Collado M · *Trends Mol Med* 2026 · review · synthesis of genetic + chemical partial-reprogramming strategies, tissue-specific in-vivo effects, clinical-translation challenges (safety, delivery, temporal control) · PMID 41864756 · Collado lab Santiago de Compostela / Pasteur · verified-scope: PubMed efetch abstract only

[^adams2025]: doi:10.1016/j.gde.2025.102351 · Adams MT, Jasper H, Mosteiro L · *Curr Opin Genet Dev* 2025;93:102351 · review · proposes partial reprogramming and natural tissue regeneration share a common mechanism: transient somatic-identity repression via pioneer-TF activity at noncanonical sites · PMID 40311172 · Genentech Regenerative Medicine · verified-scope: PubMed efetch abstract only

[^tyshkovskiy2026]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · doi:10.1038/s41586-026-10542-3 · *Nature* 2026 · n=11,165 transcriptomes (4 species) incl. mouse embryogenesis scRNA-seq (E6.5–E8.5) + whole-embryo profiles (zygote→birth) · multi-tissue elastic-net/Bayesian-ridge transcriptomic clocks; mixed-effects, P_adj<0.05 · model: mouse embryo + multi-tissue · U-shaped tAge with minimum ("ground zero") ~E10, rejuvenation phase ~E8.5–E15; Cdkn1a/S100a8/9/Lgals3 down to E10 then up; rejuvenation signature overlaps CR + heterochronic parabiosis (r≈0.5)
