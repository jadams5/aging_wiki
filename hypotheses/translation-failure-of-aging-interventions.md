---
type: hypothesis
aliases: [translation gap, mouse-to-human translation failure, model-organism-to-human discordance, geroscience translation problem, lab-mouse confound problem]
proposed-by: [multiple articulators — Steven Austad, Richard Miller, Mark Mattson, Joseph Garner, Theodore Garland]
proposed-year: 2010s
status: active-frame
treatment-mode: conceptual-frame
key-evidence-for: []
key-evidence-against: []
related-hallmarks: []
related-hypotheses:
  - "[[hypotheses/hyperfunction-theory]]"
  - "[[hypotheses/antagonistic-pleiotropy]]"
  - "[[hypotheses/disposable-soma-theory]]"
  - "[[hypotheses/information-theory-of-aging]]"
verified: false
verified-date: null
verified-by: null
literature-checked-through: 2026-05-14
---

> ⚠️ Auto-extracted 2026-05-14 — not yet verified. Synthesis page; claims link out to atomic pages which carry their own verification status. Lab-mouse-confound literature (Mattson, Garner, Garland) is referenced but not yet cited from primary sources in the wiki — see Limitations.

# Translation Failure of Aging Interventions

## The frame

**This is a Mode B (conceptual-frame) page.** The translation-failure frame organizes a recurring pattern in geroscience: aging interventions that produce robust lifespan extension in model organisms (mouse, worm, fly, killifish) frequently produce null or modest results in human trials. The frame does not predict that any specific intervention will fail; it predicts that effect sizes will systematically shrink during translation, and it organizes the reasons.

The pattern is **over-determined**: many causes operate simultaneously, any one is sufficient. The frame's value lies in (a) setting a conservative human-evidence prior on any mouse-validated intervention, (b) identifying which causes are likely dominant in a specific case, and (c) guiding intervention design toward translation-resilient targets.

This is a frame, not a falsifiable mechanism. It is not the claim "mice lie" — mouse studies do not systematically mislead; the experimental and biological context surrounding them systematically inflates effect sizes relative to what humans will experience. Signal is real; magnitude is exaggerated.

## The pattern (case exhibits)

The wiki documents the following exhibits — link to atomic pages for detail and citations:

- **Caloric restriction** — ~30–40% lifespan extension in mice; CALERIE-2 found no detectable lifespan effect at 2 years in humans, with modest biomarker improvements. See [[interventions/lifestyle/caloric-restriction]].
- **Rapamycin** — Harrison 2009 ITP +9–13% lifespan in C57BL/6 and UM-HET3 mice; PEARL 2025 null on visceral adiposity; RAPA-EX-01 2026 null on functional capacity with sensitivity favoring placebo. See [[rapamycin]] and [[studies/stanfield-2026-rapa-ex-01]].
- **Metformin** — Martin-Montalvo 2013 +5.83% lifespan in C57BL/6 (p=0.02); UM-HET3 ITP non-replication (χ²=3.43, p=0.064); Ivimey-Cook 2025 vertebrate meta-analysis: rapamycin and CR generalize across species, metformin does not. See [[metformin]].
- **Sirtuin / NAD-precursor class** — resveratrol, NMN, NR class flagged `human-evidence-level: limited-negative` in the CLAUDE.md schema; multiple Phase 2/3 nulls on primary endpoints. Compound-page citations track specifics.
- **Senolytics** — extensive mouse signal across D+Q, fisetin, navitoclax; Klier 2025 UBX1325 Phase 2 is the first positive senolytic RCT for a human aging-related indication. D+Q dose translation remains contested. See [[senolytics]].

The set of interventions in this list is a wiki-internal selection — the high-profile cases where mouse-to-human translation has been formally measured. It is not a comprehensive geroscience review.

## Why the pattern persists — over-determined causes

The frame organizes translation failure into three tiers. Within each tier, multiple causes operate independently; across tiers, the causes compound.

### Tier 1: experimental-design asymmetry

Mouse studies are designed to maximize signal; human trials are designed to absorb it. The design choices are not flawed in isolation — they are appropriate to their respective contexts — but their combination produces systematic effect-size deflation during translation.

- **Lab-mouse confound.** SPF housing, ad libitum feeding, single inbred genotype, sedentary low-stress conditions. The dominant aging trajectory of lab mice is shaped by these confounds — obesity, insulin resistance, immune naivete relative to wild conspecifics — which are exactly the dysfunctions that restriction-mimetics and anti-inflammatory drugs preferentially correct. Wild-derived mice show smaller effect sizes for the same interventions; humans (outbred, environment-exposed) are even less similar to the assay conditions. See [[mus-musculus]] failure-modes section. #gap/unsourced — Mattson, Garner, Garland primary literature not yet cited in the wiki.
- **Strain background.** UM-HET3 vs C57BL/6 disagreement (metformin) is the textbook case. Strain is documented on [[mus-musculus]] as "the single largest source of irreproducibility in mouse aging research." Single-strain mouse results do not generalize across mouse strains, let alone to outbred humans.
- **Dose translation.** mg/kg-effective mouse doses for senolytics and metformin are orders of magnitude above achievable human exposure. Most human supplement-tier interventions are likely subtherapeutic. The wiki documents specific cases on [[senolytics]] (D+Q dose translation) and [[metformin]] (Martin-Montalvo 2013 mouse serum metformin ~10× typical diabetic steady-state).
- **Time scaling.** ~30× lifespan ratio: a 6-month mouse study tests ~15 human years of exposure. Most human RCTs run 1–2 years. Cumulative effects that integrate over years do not appear in short human trials even when the underlying biology is the same.
- **Endpoint mismatch.** Mouse studies measure lifespan (definitive); human trials measure biomarkers (proxies). A null biomarker trial does not falsify the underlying intervention — it falsifies the specific biomarker hypothesis. CALERIE-2 modest biomarker improvements at 2 years is consistent with strong lifespan benefit over 30 years, but indistinguishable from no benefit at all.
- **Cohort baseline.** Mouse trials start in healthy young or middle-aged animals; human trials enroll already-aged, often comorbid, polypharmacy-treated subjects. PEARL and RAPA-EX-01 enrolled subjects in whom damage may already be locked in — a population in which hyperfunction-targeting interventions are predicted to underperform even if they would have worked in middle age. See [[hypotheses/hyperfunction-theory]].

### Tier 2: species-biology divergence

Mice are not small humans. Specific biological mismatches systematically attenuate translation independent of experimental design.

- **Telomere biology.** C57BL/6 mice have telomeres 5–10× human length plus constitutive somatic telomerase. Telomere attrition is not a major mouse aging driver but is a major human one. Interventions tested in lab mice are tested on the wrong dominant constraint relative to humans. See [[telomere-attrition]] and the telomere section of [[mus-musculus]].
- **Pathway-magnitude conservation.** Worm *daf-2* → ~2× lifespan extension; mouse *Igf1r+/−* → +26% combined sexes; human *FOXO3A* longevity polymorphisms → ~1.42× OR for exceptional longevity. Direction is conserved; magnitude shrinks with body size and longevity. See [[insulin-igf1]].
- **CYP drug metabolism.** Mouse CYP3A vs human CYP3A4 substrate specificity differs. Compounds metabolized to active form in mice may not in humans. Documented for D+Q and fisetin on the senolytic pages and [[model-organisms/_extrapolation-guide]].
- **Immune / SASP divergence.** Mouse vs human SASP composition differs in factor identity and proportion; mouse Th1/Th2 balance, NK receptor families (Ly49 vs KIR), neutrophil lifespan (~6–8 h mouse vs ~5–7 d human) differ in ways that shift which compounds engage which senescent populations. See [[sasp]].
- **Microbiome.** Mouse gut microbiome differs substantially from human in dominant phyla and metabolic capacity; facility-specific mouse microbiome variation alone can shift inflammatory phenotype and lifespan. Many anti-aging effects are partly microbiome-mediated, and the assay vs human microbiome mismatch shifts which interventions translate.
- **Cancer-aging trade-off dominance.** Mice die ~70% from cancer (especially lymphoma in B6); humans die from cardiovascular, neurodegeneration, and cancer in mixed proportions. Interventions that work primarily by suppressing cancer (a substantial component of rapamycin's mouse lifespan effect) inflate apparent lifespan extension in mice without engaging the dominant human causes of death.

### Tier 3: selection bias and interpretation

The pattern is partly an artifact of which interventions we choose to translate, and how we measure them.

- **Publication bias.** Null mouse results are underreported, especially in commercial-interest areas (NAD precursors, sirtuin activators). Translation-success rates published in the literature systematically overestimate the underlying population rate. Ivimey-Cook 2025 documents this for vertebrate lifespan meta-analyses (cited on [[metformin]]).
- **Selection-on-strongest-signal.** Translation programs select interventions with the strongest mouse signal — which is exactly the population most contaminated by lab-mouse confounds, publication bias, and species-magnitude inflation. The translation-failure rate is therefore partly a regression-to-the-mean phenomenon disguised as biology. This causal pathway is not specific to aging — it operates across translational medicine — but the long latency and biomarker dependence of aging trials make it especially severe.
- **Single-hallmark targeting on a multi-hallmark process.** Mouse interventions typically engage one [[hallmarks-of-aging]] hallmark; human aging is heterogeneous across hallmarks and individuals. A 30% reduction in senescence burden may modestly reduce frailty over a decade — real, but undetectable in a 2-year RCT.
- **Hyperfunction-vs-damage mismatch.** If [[hypotheses/hyperfunction-theory]] is correct, mouse aging is hyperfunction-dominant (because mice die — predominantly from cancer — before systemic damage accumulates substantially); late-life human aging at trial-enrollment age is partly damage-dominant (by 65–75 years humans have decades of accumulated DNA damage, ECM crosslinking, mitochondrial mutations, and senescent-cell burden). Hyperfunction-targeting interventions (mTOR inhibitors, CR-mimetics) may work in middle-aged humans but underperform in already-aged trial subjects. The PEARL 2025 (mean age 71) and RAPA-EX-01 2026 (mean age 66) null results are consistent with this prediction. A direct test requires an age-stratified mTOR-inhibitor RCT (45–55 vs 65–75 enrollment). [[hypotheses/hyperfunction-theory]] § Notes / open questions develops the synthesis.

## What it explains well

- **Why robust mouse signals systematically underperform in humans.** The over-determined-causes structure predicts attenuation, not direction-reversal.
- **Why some interventions translate better than others.** Rapamycin and CR generalize across vertebrates (Ivimey-Cook 2025); metformin does not. The frame predicts: translation-resilient interventions act on highly conserved mechanisms with similar magnitudes across body sizes (mTOR, CR-signaling); translation-fragile interventions depend on species-specific PK or biology (metformin liver metabolism, senolytic CYP activation).
- **Why human cohorts matter so much.** The same intervention may show measurable effects in middle-aged healthy subjects and null effects in aged comorbid subjects, even when the underlying biology is identical.
- **Why aging trials need biomarker endpoints.** Lifespan endpoints in humans are effectively untestable in <decade trials; the frame predicts this is a permanent constraint, not a methodological deficiency to be fixed by better trial design.

## What it doesn't easily address

- **Specific predictions.** It cannot predict whether a specific intervention will succeed or fail; it sets priors and identifies barriers to attend to.
- **Mouse-correct cases.** Some interventions discovered in mice translated cleanly to humans for non-aging indications — SGLT2 inhibitors, GLP-1 receptor agonists. The frame does not explain why these specific cases worked; the most likely answer is that diabetes/obesity readouts are not subject to the lifespan-trial-cohort-baseline problem.
- **Quantitative translation rule.** There is no "subtract X log-units of effect size when translating from mouse to human." Allometric and FDA body-surface-area HED conversions exist but are not aging-specific. #gap/no-mechanism.
- **Per-case heterogeneity.** The reason rapamycin disappoints in PEARL may differ from the reason metformin fails ITP-UMHET3, but the frame treats both as "translation failure." Case-by-case mechanism analysis is needed at the atomic-page level.

## Where specific predictions get tested

The frame is tested at the level of specific cases. The most-relevant atomic pages where translation outcomes are tracked:

- [[interventions/lifestyle/caloric-restriction]] — CALERIE-2 effect-size shrinkage
- [[rapamycin]] — PEARL 2025, [[studies/stanfield-2026-rapa-ex-01]] null
- [[metformin]] — Martin-Montalvo / UM-HET3 ITP non-replication; Ivimey-Cook 2025 vertebrate meta-analysis
- [[senolytics]] — UBX1325 (Klier 2025) as first positive senolytic RCT counterexample
- [[mus-musculus]] — per-organism failure-modes catalog
- [[model-organisms/_extrapolation-guide]] — the three-dimension rubric and case-level pitfalls (the data-layer counterpart to this hypothesis page)

A standing **Interventions Testing Program** entity page would be the natural home for cross-validating ITP-validated results against human trial outcomes. The wiki does not yet have one. #gap/missing-page — `interventions-testing-program.md`.

## Related frameworks and hypotheses

- [[hypotheses/hyperfunction-theory]] — predicts mTOR inhibition should work; translation-failure predicts it may not in already-aged trial cohorts. The two are complementary: hyperfunction names a target, translation-failure names a constraint on testing. The interaction is under-developed in the wiki.
- [[hypotheses/antagonistic-pleiotropy]] (Mode B) — AP predicts late-life-arm interventions should be safer (early-life fitness costs already paid out); translation-failure predicts effect sizes will still be small in humans because of the over-determined causes above. AP licenses intervention; translation-failure constrains expectation.
- [[hypotheses/disposable-soma-theory]] — predicts cross-species effect-size differences (longer-lived species invest more in soma maintenance, leaving less room for intervention to improve maintenance further). This is one specific mechanism by which Tier 2 pathway-magnitude conservation operates.
- [[hypotheses/information-theory-of-aging]] — predicts epigenetic reprogramming should restore youthful phenotype; the translation-failure frame predicts reprogramming trials in humans will face the same lab-mouse-confound and dose-translation problems as small molecules, plus delivery-vector novel barriers.

## What would update this frame

The frame is not falsifiable in the Popperian sense (it is a Mode B conceptual organizer), but it would be substantially modified by:

- A systematic mouse-vs-human normalized effect-size meta-analysis showing tight cross-species correlation across many interventions — would suggest translation is good and apparent failures are noise. Ivimey-Cook 2025 partially addresses this for vertebrates and finds heterogeneity, consistent with the current frame.
- A successful human aging RCT with mouse-magnitude effect sizes — would suggest at least some interventions translate cleanly and identify what made them work.
- Evidence that lab-mouse-confound corrections (wild-derived strains, environmental enrichment, late-life onset) substantially improve translation — would suggest the experimental-design asymmetry tier is dominant and tractable.
- Evidence that human trials enrolling middle-aged healthy subjects (not aged comorbid) show mouse-magnitude effects — would shift weight to the cohort-baseline arm.
- "Lab-mouse → wild-mouse → primate → human" stepped translation programs that successfully predict human outcomes — would shift the frame from "translation is hard" to "translation requires intermediate vertebrates."

## Practical implications for the wiki

- Set conservative `human-evidence-level` priors on mouse-validated interventions; default to `preclinical-only` or `limited` until human RCT data exists.
- Weight ITP-validated heterogeneous-strain results higher than single-strain mouse results.
- Prefer interventions validated across multiple vertebrate models (Ivimey-Cook 2025 methodology).
- For human aging trials, demand mechanism-anchored biomarker engagement before efficacy claims.
- Bias intervention recommendations toward damage-removal (senolytics, glycation reversal, mtDNA clearance) for already-aged populations and hyperfunction-suppression (mTOR inhibitors, CR-mimetics) for middle-aged healthy populations — a prediction derivable from the Tier 3 hyperfunction-vs-damage argument.

## Notes / why this frame matters

1. **The frame is selectionist, not nihilist.** It does not predict that no aging intervention will work in humans. It predicts that effect sizes will be smaller, translation-resilient interventions will be a minority, and choosing among candidates requires explicit attention to which translation barriers apply.

2. **The frame has methodological consequences.** ITP design (heterogeneous strains, multiple sites, lifespan endpoints), wild-derived mouse studies, environmental-enrichment housing, and cross-vertebrate validation are not academic refinements — they are the empirical correctives to the translation-failure pattern. The frame predicts that interventions validated under these correctives translate more reliably than interventions validated only in standard SPF C57BL/6.

3. **The frame interacts with [[hypotheses/hyperfunction-theory]] in ways the wiki has not yet developed.** Open question: if hyperfunction dominates mouse aging and damage dominates human late-life, does this explain rapamycin's PEARL/RAPA-EX-01 nulls? A subgroup analysis of rapamycin trials in middle-aged vs already-aged cohorts would directly test this prediction. #gap/synthesis-needed.

4. **The frame is not unique to aging biology.** Translational attrition is a general feature of pharmaceutical R&D. What makes the aging case distinctive is (a) the long latency between intervention and primary endpoint, (b) the dependence on biomarker proxies of unknown sufficiency, (c) the prevalence of lab-mouse-confound-sensitive interventions (CR-mimetics, anti-inflammatories) in the geroscience pipeline, and (d) the absence of a clear regulatory pathway for healthspan-extension claims. The frame adapts the general translation-failure pattern to these aging-specific amplifiers.

## Limitations and gaps

- #gap/unsourced — Lab-mouse-confound primary literature (Mattson "fat lazy mice," Garner mouse housing, Garland mouse exercise context) is referenced here but not yet cited from primary sources on the relevant wiki pages. Per-organism pass (planned next) should pull and integrate these.
- #gap/missing-page — `interventions-testing-program.md` does not exist. ITP is the most-cited mouse-aging methodology in the wiki; it deserves a dedicated entity page documenting design, validated interventions, and a translation-tracking table.
- #gap/needs-replication — Systematic meta-analysis of mouse-vs-human normalized effect sizes across the geroscience literature would directly test this frame's central magnitude-shrinkage claim. Ivimey-Cook 2025 provides a vertebrate-level lifespan analysis but does not separate mouse-vs-human or quantify shrinkage.
- #gap/no-mechanism — The frame does not provide a quantitative translation rule. FDA HED scaling exists but is not aging-specific and is acknowledged to fail for CR-mimetics and senolytics.
- ✓ Synthesis with hyperfunction-vs-damage developed 2026-05-14 — see [[hypotheses/hyperfunction-theory]] § Notes / open questions (Hyperfunction × translation-failure synthesis section). Open empirical question: does the age-stratified mTOR-inhibitor RCT prediction hold? No such trial published as of 2026.
- #gap/no-fulltext-access — Ivimey-Cook 2025 vertebrate meta-analysis is cited on [[metformin]] but does not yet have a dedicated study page; the verification chain back to primary results is one hop longer than ideal.
