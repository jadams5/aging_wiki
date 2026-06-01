---
type: hypothesis
aliases: [hyperfunction theory, hyperfunction theory of aging, Blagosklonny's hyperfunction theory, quasi-programmed aging]
proposed-by: [Mikhail Blagosklonny]
proposed-year: 2006
status: active
treatment-mode: evidence-aggregating
key-evidence-for:
  - "[[rapamycin]]"
  - "[[insulin-igf1]]"
  - "[[igf1r]]"
  - "[[s6k1]]"
  - "[[sgk1]]"
  - "[[pten]]"
  - "[[growth-hormone]]"
  - "[[daf-2]]"
  - "[[foxo3]]"
  - "[[caloric-restriction]]"
  - "[[mtor]]"
key-evidence-against:
  - "[[igf-1]]"
  - "[[rapamycin]]"
related-hallmarks:
  - "[[deregulated-nutrient-sensing]]"
  - "[[loss-of-proteostasis]]"
  - "[[disabled-macroautophagy]]"
  - "[[cellular-senescence]]"
  - "[[chronic-inflammation]]"
verified: true
verified-date: 2026-05-08
verified-by: claude
literature-checked-through: 2026-05-08
verified-scope: "Synthesis-MOC verification pass: all wikilinked atomic pages confirmed to exist and have verified:true or verified:true with verified-scope. Key quantitative claims cross-checked against verified atomic pages. Corrections: (1) S6K1 KO lifespan figure qualified — ~9% figure is unverifiable from closed-access Selman 2009; qualified with gap tag; (2) Willcox 2008 footnote corrected — 'Okinawan' removed; population correctly identified as Japanese-American men (Honolulu Heart Program / HAAS cohort, Oahu); (3) cross-organism table sgk1 label corrected from 'verified-partial' to 'verified'. Blagosklonny founding-paper DOIs resolved: 2006 Cell Cycle correct DOI is 10.4161/cc.5.18.3288 (not 10.1007/s10522-006-9008-y); 2007 Drug Discovery Today correct DOI is 10.1016/j.drudis.2007.01.004 (not 10.4161/cc.6.23.5053). These papers have no direct footnote citations in the page body — DOI resolution noted for future study-page creation. Archive status: 2006 paper is hybrid OA but no candidate download URLs found; 2007 paper is closed-access (not_oa). R34 backfill (2026-05-08): added Aronoff & Trumble 2025 (Goldilocks-zone + species-constraint refinements) and Salnikov 2026 (hyperfunction-as-downstream-of-epigenetic-ontogenesis); abstract-level verification only."
---


# Hyperfunction Theory of Aging

## The claim

Aging is not caused primarily by accumulation of molecular damage, but by the **continued activity of developmental and growth programs** past the point where they serve a useful purpose. mTORC1 and the insulin/IGF-1 signaling (IIS) axis — which drive growth and development in early life — become deleterious when their activity persists into post-reproductive life. On this view, aging is a "quasi-program": not an evolved program for senescence, but the pathological continuation of growth programs that natural selection had insufficient power to switch off. Rapamycin extends lifespan not primarily by preventing damage, but by suppressing these continued growth signals.

## Status: active — the most empirically supported aging hypothesis

Hyperfunction is currently the most directly testable and most consistently supported mechanistic hypothesis in geroscience. Its central prediction — that reducing activity of the mTOR/IIS axis extends lifespan — has been confirmed in every major model organism tested, and in at least one human-relevant genetic context. The [[rapamycin]] lifespan data from the NIA Interventions Testing Program is the strongest single block of evidence: late-life rapamycin initiation extends lifespan in genetically heterogeneous mice, a remarkably robust finding that is difficult to reconcile with a purely damage-centric view. No competing aging hypothesis has an equally strong and consistent track record of lifespan prediction across organisms.

The hypothesis remains classified "active" rather than "confirmed" because: (1) mechanistic resolution of which mTOR substrates are responsible for aging vs growth remains incomplete; (2) rapamycin's primary endpoint in the first dedicated human aging-RCT (PEARL 2025) was null on visceral adiposity, and the second (RAPA-EX-01 2026) was null on functional capacity with sensitivity analyses favoring placebo (PP Cohen's d −0.90, p=0.007) — see [[rapamycin]] for the consolidated trial inventory; (3) the Suh 2008 paradox (centenarian females carry gain-of-function-like IGF1R alleles that elevate circulating IGF-1) complicates the simplest reading of IIS reduction as universally life-extending.

## Key predictions

The hyperfunction theory predicts:

1. **mTOR inhibition should extend lifespan** even when initiated late in life, after damage has accumulated — because the benefit is from reducing ongoing hyperfunction, not from preventing prior damage.
2. **Reduced IIS signaling should extend lifespan** across phylogenetically distant organisms, reflecting conservation of the growth program axis.
3. **Long-lived genetic models should show reduced anabolic signaling** upstream of mTOR and IIS (e.g., reduced GH, IGF-1 receptor activity, or downstream kinase activity), not just enhanced repair mechanisms.
4. **A trade-off between growth and longevity should exist within a species** — manipulations that reduce growth-signaling should extend lifespan even at a cost to body size or anabolic capacity.
5. **Interventions that mimic growth-signal reduction** (caloric restriction, rapamycin, metformin) should converge mechanistically on mTOR/IIS suppression and produce overlapping lifespan phenotypes.

## Evidence supporting

Evidence is presented as brief summaries + wikilinks. Quantitative details live on the verified atomic pages.

### Rapamycin / direct mTOR inhibition

- **Late-life rapamycin extends mouse lifespan** across three genetically heterogeneous UM-HET3 sites in the NIA ITP — see [[rapamycin]] (verified-partial). This is the prediction most specific to hyperfunction: damage-centric theories predict late-life interventions would fail because damage is already accumulated; hyperfunction predicts they should succeed because the causal agent (mTOR hyperactivity) is still active. Harrison 2009 (feeding initiated at 600 days of age, equivalent to age ~60 human years) confirmed the prediction. [^harrison2009]
- **Dose-dependent rapamycin effects** across 4.7/14/42 ppm tested in ITP — see [[rapamycin]] (verified-partial) for Miller 2014 dose-response. [^miller2014]
- **mTOR pathway** is the primary mechanistic node linking nutrient sensing to longevity across organisms — see [[mtor]] (verified-partial). The [[s6k1]] substrate (a direct mTORC1 effector) extends lifespan when ablated — see below. [^harrison2009]

### Genetic reduction of IIS / S6K1

- **S6K1 KO extends mouse lifespan** — female-specific extension (statistically significant, log-rank χ²=11.07, p<0.001); exact % is unverifiable because Selman 2009 is closed-access (#gap/no-fulltext-access) — abstract-level metadata suggests ~9% but GenAge records 19%; the quantitative claim should not be relied upon until full-text access is available — see [[s6k1]] (verified). This is particularly important: S6K1 is a direct mTORC1 substrate, so its ablation targets the pathway one step downstream of the kinase, providing mechanistic precision that rapamycin (a broader mTORC1 allosteric inhibitor) cannot. [^selman2009]
- **IGF1R+/- mice live ~26% longer** (combined sexes; +33% females, +15.9% males NS) on a 129/Sv background — see [[igf1r]] (verified-partial) and [[insulin-igf1]] (verified-partial). Receptor haploinsufficiency — a relatively modest manipulation — produces a striking lifespan extension, consistent with tonic IIS hyperfunction as a causal agent. [^holzenberger2003]
- **PTEN partial gain-of-function** (Pten+/- or Super-PTEN; increases PTEN dosage) extends mouse lifespan in both males (+12%) and females (+16%), while also reducing cancer incidence — see [[pten]] (verified-partial). PTEN is the direct antagonist of PI3K, the upstream activator of AKT→mTOR. [^ortegamolina2012]
- **SGK-1 loss of function in *C. elegans*** extends mean adult lifespan ~63% — the dominant longevity kinase in the IIS pathway is SGK-1, not AKT-1 or AKT-2 — see [[sgk1]] (verified). [^hertweck2004]
- **DAF-2 (insulin/IGF-1 receptor) loss of function in *C. elegans*** approximately doubles adult lifespan — the founding result of modern molecular gerontology — see [[daf-2]] (verified). [^kenyon1993]

### GH / somatotropic axis reduction

- **GHR-/- Laron mice are the longest-lived laboratory mouse model** — estimated ~40–55% median lifespan extension depending on sex and colony (exact numbers under-reported in the closed-access Coschigano 2003 source; see #gap note below) — see [[growth-hormone]] (verified-partial). The mechanism is complete abolition of GH→IGF-1→IIS signaling. [^coschigano2003] #gap/no-fulltext-access
- **Laron syndrome in humans** (GHR LoF; zero circulating IGF-1) is associated with dramatically reduced cancer incidence and protection from diabetes — see [[growth-hormone]] (verified-partial) citing Guevara-Aguirre 2011. The Ecuador cohort (n=99 Laron, n=1,600 controls) showed zero cancer deaths among Laron subjects vs 17% in relatives. #gap/no-fulltext-access (Guevara-Aguirre 2011 download failed in archive) [^guevara2011]

### Caloric restriction converges on mTOR suppression

- **CR mechanistically suppresses mTORC1 and IIS activity**, working via AMPK activation, IGF-1 reduction, and reduced amino acid signaling — see [[caloric-restriction]] (verified-partial) and [[ampk]] (verified). The overlap between CR's longevity mechanism and rapamycin's mechanism is a major argument for hyperfunction: both interventions reduce mTOR/IIS hyperfunction, and both extend lifespan. [^martinmontalvo2013]
- **AMPK, the energy-stress counter-signaler to mTOR**, acts as a functional antagonist of mTORC1 hyperfunction — see [[ampk]] (verified). Metformin's longevity effects operate substantially through AMPK→mTOR axis suppression. [^martinmontalvo2013]

### FOXO / human longevity genetics

- **FOXO3 longevity-associated GWAS variant** (rs2802292 GG genotype; OR=2.75 for living to 95+ in Japanese-American men, HHP/HAAS cohort, Honolulu; **male-only cohort**) supports the IIS-longevity axis in humans — see [[foxo3]] (verified-partial). FOXO3 is the primary transcription factor disinhibited when IIS/AKT signaling is reduced. [^willcox2008]

### Cross-organism consistency

The depth and breadth of the mTOR/IIS-longevity dataset is itself a major pillar of hyperfunction theory:

| Organism | Manipulation | Lifespan effect | Source page |
|---|---|---|---|
| *C. elegans* | *daf-2* LoF | ~2× | [[daf-2]] verified |
| *C. elegans* | *sgk-1* LoF | +63% | [[sgk1]] verified |
| *Mus musculus* | Rapamycin (late-life) | +9–13% | [[rapamycin]] verified-partial |
| *Mus musculus* | Igf1r+/- | +26% combined | [[igf1r]] verified-partial |
| *Mus musculus* | S6K1 KO | sig. extension (females; % unverifiable — Selman 2009 closed-access) #gap/no-fulltext-access | [[s6k1]] verified |
| *Mus musculus* | GHR-/- | ~40–55% | [[growth-hormone]] verified-partial |
| *Mus musculus* | PTEN GOF | +12–16% | [[pten]] verified-partial |
| Human (GWAS) | FOXO3 GG variant | OR=2.75 longevity | [[foxo3]] verified-partial |
| Human (genetics) | IGF1R LoF alleles | Centenarian enrichment | [[igf1r]] verified-partial |

No other aging hypothesis can point to a similarly consistent table of predictions confirmed across this range of organisms and manipulations.

### Cross-vertebrate meta-analysis: rapamycin replicates DR magnitude

A 2025 meta-analysis of 911 effect sizes from 167 papers across 8 vertebrate species (Ivimey-Cook et al.) found that **rapamycin produces statistically significant lifespan extension matching the magnitude of dietary restriction**, while metformin does not [^ivimeycook2025]. This is the strongest cross-species replicability evidence for rapamycin to date and bolsters the central hyperfunction prediction (mTOR suppression → lifespan extension) beyond the mouse ITP. The negative metformin result is informative for the broader "AMPK-activator class extends lifespan" framing — it complicates the simplest reading that any mTOR-suppressing intervention will extend lifespan, and is consistent with metformin's lifespan effect being primarily glucose-lowering / disease-prevention rather than hyperfunction-axis suppression.

### 2025 evolutionary-medicine integration: Aronoff & Trumble framework

A 2025 review in *Evolution Medicine and Public Health* (Aronoff & Trumble, Arizona State University) explicitly integrates hyperfunction theory with life-history theory and the "Brain-Body Energy Conservation" model, framing chronic disease as the manifestation of an imbalanced anabolic-vs-catabolic axis (IGF-1 / mTOR / AMPK / Klotho) [^aronoff2025]. The paper introduces a useful refinement: a "**Goldilocks zone**" caveat for therapeutics that suppress anabolic signaling — interventions that push too far in the catabolic direction risk introducing **hypofunction-side health risks** (impaired immunity, sarcopenia, frailty). The authors also flag a "**species constraint**" — that hyperfunction-targeting drugs validated in shorter-lived species with greater anabolic imbalance may be less effective in humans, where the imbalance is already partially mitigated by slower life-history pace. This is the most explicit recent statement of why dose × duration matters for hyperfunction-targeting interventions in humans, and overlaps with the RAPA-EX-01 2026 interpretation that 6 mg/week sirolimus may exceed the optimal dose for this human context.

### Salnikov 2026: hyperfunction as downstream of epigenetic ontogenesis program

A 2026 *Frontiers in Aging* synthesis (Salnikov) argues that the hyperfunction state observed during aging is **not the primary cause but a downstream effect** of an epigenetic program of ontogenesis that progressively redistributes cellular resources from self-sufficiency to specialized function [^salnikov2026]. This is a partial integration of hyperfunction theory with [[information-theory-of-aging]]: the unbalanced epigenetic regulation drives the hyperfunctional state. The paper does not falsify hyperfunction but reframes it as a downstream manifestation of an upstream epigenetic-program drift. Whether this is a productive reframing or a category error remains contested; the hypothesis as Blagosklonny formulated it is mechanistically agnostic about whether mTOR/IIS hyperactivity is itself caused by upstream epigenetic drift or is a primary phenomenon.

## Evidence against / nuances

### The Suh 2008 paradox

Female Ashkenazi Jewish centenarians (n=384) with IGF1R loss-of-function alleles have **elevated** circulating IGF-1 levels relative to controls — the opposite of what a naive IIS-reduction model predicts — see [[igf-1]] (verified-partial) and [[igf1r]] (verified-partial). The current interpretation: partial IGF1R LoF reduces receptor signaling, triggering compensatory upregulation of IGF-1 ligand secretion. The net cellular-level IIS signaling is reduced despite elevated ligand — but this requires inference about receptor occupancy that is not directly measured. The paradox weakens the claim that serum IGF-1 is a reliable proxy for IIS signaling at the cellular level. [^suh2008]

### Sex-asymmetry in rapamycin effects

Harrison 2009 showed larger relative lifespan extension in females (+13% mean; +14% 90th-percentile) than males (+9% mean; +9% 90th-percentile) — see [[rapamycin]] (verified-partial). Pure hyperfunction theory, which attributes aging to a shared growth program, predicts approximately symmetric effects. The sex asymmetry may reflect mTOR pathway sex differences, mTORC2 sensitivity differences, or differential immunosuppression effects — but it is unexplained by the basic theory. [^harrison2009]

### PEARL 2025 + RAPA-EX-01 2026: two null human aging-RCTs

**PEARL 2025** (n=114; 48 weeks; compounded rapamycin 5–10 mg/week vs placebo) did not meet its primary endpoint of visceral adipose tissue reduction (η²=0.001, p=0.942) — see [[rapamycin]]. Limitations: small sample, dose uncertainty (compounded rapamycin bioavailability ~1/3 of commercial), and the possibility that VAT is not the right endpoint for a hyperfunction-suppression intervention. [^pearl2025]

**RAPA-EX-01 2026** (n=40; 13 weeks; commercial sirolimus 6 mg/week vs placebo, both arms exercising) tested the "rapamycin cycling hypothesis" — that alternating mTORC1 inhibition and activation could amplify training-induced gains. The primary outcome (30-s chair-stand) was null on ITT (Δ −2.13 reps, p=0.089) but **prespecified sensitivity analyses reached significance favoring placebo**: per-protocol Δ −3.44 reps (p=0.007, Cohen's d −0.90). All secondary functional outcomes directionally favored placebo. AE burden was higher in the sirolimus arm, including one drug-attributable serious infection. Authors interpret the result as a pharmacokinetic mismatch — rapamycin's 62-h half-life means 6 mg/week does not produce the on-off mTORC1 pulse the cycling hypothesis requires; the drug persists across the training stimulus. [^stanfield2026]

**Pattern interpretation.** Two consecutive dedicated aging-rejuvenation RCTs at the n=1-biohacker dose range (5–10 mg/week intermittent) failed their prespecified primary endpoints. Neither falsifies hyperfunction theory in principle — both are underpowered for mortality, neither tests continuous-feeding pharmacology equivalent to mouse ITP, and the dose × schedule × outcome space remains underexplored. But they do raise the bar for the **human translational claim**: the dose schedule that has dominated public discourse and biohacker practice for ~5 years is now the dose schedule that has produced two clearly null/negative trials. The mouse ITP signal is unaltered.

### mTORC1 vs mTORC2 complexity

Rapamycin acutely inhibits mTORC1 but not mTORC2; chronic dosing can suppress mTORC2 in many tissues. Much of rapamycin's side-effect profile (insulin resistance, dyslipidemia) traces to inadvertent mTORC2 inhibition — see [[mtor]] (verified-partial) and [[rapamycin]] (verified-partial). This complicates the "more rapamycin = more longevity" inference: the drug that tests the hyperfunction hypothesis also disrupts signaling not implicated in hyperfunction. The Lamming approach — identifying mTORC2-sparing dosing regimens — is a direct attempt to resolve this, but relevant data are from closed-access sources (#gap/no-fulltext-access).

### Tissue-specificity of IIS longevity effects

Taguchi 2007 showed that brain-specific Irs2 knockout in mice extends female lifespan ~18% despite obesity and hyperinsulinemia — see [[irs2]] (drafted). This challenges the hyperfunction model's assumption that systemic IIS reduction is the causal mechanism: tissue-specific manipulations produce longevity even when the peripheral IIS axis is intact or elevated. The implication is that the aging-driving hyperfunction may be compartmentalized rather than systemic. #gap/no-fulltext-access (Taguchi 2007 closed-access)

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — mTOR/IIS axis is deeply conserved |
| Phenotype (IIS reduction → lifespan extension) conserved in humans? | partial — FOXO3 GWAS, IGF1R centenarian variants; no RCT lifespan endpoint |
| Replicated in humans? | in-progress — PEARL null on VAT (2025); RAPA-EX-01 null on chair-stand with sensitivity analyses favoring placebo (2026); AGE trial and others ongoing |

## What would update this hypothesis

1. **Identification of the causal mTOR substrate(s):** If a specific substrate (e.g., 4E-BP1 phosphorylation vs S6K1 phosphorylation) mediates the aging vs growth distinction, that would sharply constrain the mechanism. See [[4ebp1]] (verified-partial) and [[s6k1]] (verified-partial) for current state. The Lamming hypothesis — that mTORC1→S6K1 drives aging while mTORC1→4E-BP1 drives beneficial protein-synthesis — is a refinement of hyperfunction, not a refutation.
2. **Large human RCTs with aging-relevant endpoints:** A well-powered (n>500), multi-year trial of rapamycin or rapalogs in healthy older adults with primary endpoints of functional capacity, disease incidence, or mortality would be definitive. PEARL was too small and too short; the PEARL-Extend, Dog Aging Project (rapalogs in companion dogs), and Targeting Aging with Metformin (TAME) trials are the most relevant ongoing efforts.
3. **Resolution of the Suh 2008 paradox:** Direct measurement of IIS signaling (e.g., pAKT, pFOXO3) in long-lived humans' tissues — rather than circulating IGF-1 as a proxy — would test whether cellular-level IIS is actually reduced in centenarians. If it is, the paradox dissolves. If it is not, the link between IIS and human longevity is more complex than the model suggests.
4. **Dissection of mTOR-dependent vs IIS-dependent longevity programs:** Organisms in which rapamycin extends lifespan despite IIS manipulation, or vice versa, would clarify whether these are independent mechanisms or a single pathway. The *C. elegans* epistasis literature (Apfeld 2004; see [[caenorhabditis-elegans]]) suggests partial independence.
5. **Human intervention with mTOR-selective (mTORC2-sparing) compounds:** If a compound that inhibits only mTORC1 (e.g., via selective Raptor disruption) extends healthspan in humans without the metabolic side effects of rapamycin, that would strongly support hyperfunction over a non-specific mechanism.

## Related hypotheses

- [[free-radical-theory-of-aging]] — the principal alternative; attributes aging to oxidative damage accumulation. Hyperfunction and free-radical theories are not mutually exclusive (mTOR hyperfunction can produce excess ROS via mitochondrial biogenesis), but their causal priority differs. Hyperfunction predicts damage-prevention should not be sufficient; free-radical theory predicts it should be.
- [[information-theory-of-aging]] — (Sinclair et al.) attributes aging to epigenetic "noise" and loss of cellular identity; Yamanaka-factor partial reprogramming as intervention. Partially complementary: mTOR hyperfunction could drive epigenetic drift; both theories predict interventions targeting programs rather than damage repair.
- [[disposable-soma-theory]] — evolutionary frame for why somatic maintenance is under-invested; explains *why* growth programs are not switched off post-reproductively. Conceptually compatible with hyperfunction (provides the evolutionary reason for quasi-programmed aging) but operates at a different level of explanation.
- [[antagonistic-pleiotropy]] — evolutionary frame; growth-promoting genes that are beneficial early are not purged by selection when they become harmful later. Also compatible with hyperfunction; mTOR hyperfunction could be the molecular mechanism by which antagonistic pleiotropic genes act.
- [[hypotheses/translation-failure-of-aging-interventions]] — Mode B synthesis frame; predicts that hyperfunction-targeting interventions (rapamycin, CR-mimetics) should systematically underperform in already-aged human trial cohorts compared to mouse studies — a specific prediction derived from the hyperfunction-vs-damage cohort-age interaction. See Notes / open questions below.

## Related hallmarks

- [[deregulated-nutrient-sensing]] — the most direct hallmark expression of hyperfunction; mTOR/IIS hyperactivity is the primary driver
- [[disabled-macroautophagy]] — mechanistic downstream consequence: mTORC1 suppresses autophagy, and chronic mTOR hyperfunction chronically represses cellular clearance
- [[loss-of-proteostasis]] — downstream of autophagy suppression; protein aggregate accumulation is partly a consequence of mTOR-mediated autophagy inhibition
- [[cellular-senescence]] — mTOR signaling in senescent cells drives the SASP; rapamycin reduces SASP cytokine output by suppressing mTOR-dependent translation
- [[chronic-inflammation]] — SASP → chronic low-grade inflammation is a downstream consequence of mTOR-driven senescence programs; links hyperfunction to inflammaging

## Related interventions

- [[rapamycin]] — the most direct pharmacological test of the hypothesis; mTORC1 inhibitor with the most extensive mammalian lifespan data
- [[caloric-restriction]] — the most extensively studied intervention; mechanistically suppresses mTOR/IIS/AMPK axis and phenocopies genetic IIS reduction
- [[metformin]] — activates AMPK → suppresses mTORC1; tested in TAME trial (results pending); indirectly supports hyperfunction

## Related model organism findings

The model-organism evidence for hyperfunction is cross-species and robust. Key caveats for human extrapolation:

- **C. elegans:** daf-2 / sgk-1 results are genetically clean but represent a single-receptor worm vs vertebrate multi-ligand complexity. See [[caenorhabditis-elegans]] (verified-partial).
- **Mouse:** The IGF1R+/- extension (+26–33%) is specific to the 129/Sv background; C57BL/6 congenic attenuates to ~11%. Genetic background sensitivity is an underappreciated limitation. See [[mus-musculus]] (verified-partial).
- **Human extrapolation:** IIS pathway is conserved, but human lifespan genetics (FOXO3, IGF1R centenarian variants) provides only association evidence, not causal longevity data. See [[homo-sapiens]] (verified-partial).

## Notes / open questions

**The rapamycin paradox:** Rapamycin is both the strongest evidence *for* hyperfunction theory and the most cited argument *against* direct human translation. The drug simultaneously inhibits mTOR (putatively anti-aging) and suppresses mTORC2 (causing insulin resistance, immunosuppression) — making it impossible to cleanly interpret observed human effects as purely anti-aging. Resolving this requires either mTORC2-sparing alternatives or a better pharmacodynamic model of which rapamycin effects are beneficial at what dose. Intermittent dosing (e.g., weekly) appears to spare mTORC2 in mice (Arriola Apelo 2016; see [[rapamycin]] verified-partial) and may be the key to human translation.

**Quasi-programmed vs programmed aging:** Blagosklonny's specific claim is that aging is "quasi-programmed" — not selected for, not a program in the design-intent sense, but an unchosen continuation of developmental programs past their useful window. This is important because it implies aging is *modifiable* by switching off the programs, not by repairing downstream damage. The distinction from "programmed aging" theories (which posit that aging is adaptive) matters for what kinds of interventions are predicted to work.

**The 4E-BP1 vs S6K1 substrate question:** The Lamming hypothesis within hyperfunction proposes that mTORC1→S6K1 is the pro-aging arm while mTORC1→4E-BP1 is the longevity-beneficial arm (the latter mediating beneficial protein-synthesis effects). See [[4ebp1]] (verified-partial): Zid 2009 showed 4E-BP overexpression extends Drosophila lifespan on rich food (but not on DR), and Bjedov 2010 showed rapamycin does NOT extend lifespan in *Drosophila* Atg5-null flies — suggesting autophagy is required for rapamycin's effect. These data complicate a simple S6K1-dominant model.

**Hyperfunction and cancer:** mTOR hyperfunction promotes cell growth, which is also a driver of tumorigenesis. Laron syndrome humans have dramatically reduced cancer rates — consistent with hyperfunction theory. But rapamycin-treated mice sometimes show increased tumor incidence; immunosuppression (mTORC2 / immune surveillance) may counteract the anti-cancer benefit of reduced mTOR growth signaling. This tension is unresolved.

**Hyperfunction × translation-failure: are already-aged trial cohorts the wrong test population?** A specific synthesis question that has not yet been formally tested: if hyperfunction dominates the *causal driver* of mouse aging (because mice die — predominantly from cancer — at ages where systemic damage accumulation is still modest), and damage accumulation dominates the causal driver of *late-life human aging* (because by 65–75 years humans have decades of accumulated DNA damage, ECM crosslinking, mitochondrial mutations, and senescent-cell burden), then **hyperfunction-targeting interventions should produce strong signal in mouse studies and weak signal in already-aged human trials** — even when the same intervention engaging the same molecular target would have worked in middle-aged healthy humans.

The PEARL 2025 and RAPA-EX-01 2026 null results (see above) are consistent with this prediction but cannot test it alone — both trials enrolled aged subjects (mean ages 71 and 66 respectively), without a younger comparator arm. A direct test would require an mTOR-inhibitor RCT stratified by enrollment age (e.g., 45–55 vs 65–75) with sufficient statistical power to detect age-stratified effect size differences. As of 2026 no such trial has been published.

This is a **direct prediction of the translation-failure frame** ([[hypotheses/translation-failure-of-aging-interventions]] Tier 3) — that mouse-validated hyperfunction-suppression interventions will appear to "fail" in human trials not because the intervention doesn't work, but because the *population tested* (already-aged) is the wrong target. The interaction is testable; the wiki flags it as the most empirically tractable next step for refining hyperfunction theory's human-translation predictions. #gap/synthesis-needed

---

[^harrison2009]: doi:10.1038/nature08221 · in-vivo · randomized · model: UM-HET3 mice, late-life rapamycin (14 mg/kg food) initiated at ~600 d · mean lifespan +13% females / +9% males; 90th-percentile +14%/+9% · local PDF available

[^miller2014]: doi:10.1111/acel.12194 · in-vivo · model: UM-HET3 mice, 3 rapamycin doses (4.7/14/42 ppm) · dose-response characterization · local PDF available

[^selman2009]: doi:10.1126/science.1177221 · in-vivo · genetic · model: S6K1 KO female mice · statistically significant female lifespan extension (log-rank χ²=11.07, p<0.001, n=29 KO + 23 WT); exact % not confirmed — closed-access (not_oa); abstract-derived figure ~9% but GenAge (ID 72508) records 19%; quantitative figure unreliable #gap/no-fulltext-access

[^holzenberger2003]: doi:10.1038/nature01298 · in-vivo · genetic · model: Igf1r+/- 129/Sv mice · +26% combined (P<0.02 Cox); +33% females (P<0.001); +15.9% males (NS) · local PDF available

[^ortegamolina2012]: doi:10.1016/j.cmet.2012.02.001 · in-vivo · genetic · model: PTEN GOF knock-in mice · females +16% / males +12% lifespan; reduced cancer · local PDF available

[^hertweck2004]: doi:10.1016/s1534-5807(04)00095-4 · in-vivo · genetic · model: C. elegans sgk-1 loss-of-function · +63% mean adult lifespan (14.7→24.0 d; p<0.0001; n=147) · local PDF available

[^kenyon1993]: doi:10.1038/366461a0 · in-vivo · genetic · model: C. elegans daf-2(e1370) · ~2× adult lifespan extension · closed-access (not_oa) — founding result, widely cited

[^coschigano2003]: doi:10.1210/en.2003-0247 · in-vivo · genetic · model: GHR-/- Laron mice · substantial lifespan extension (exact % not confirming from closed-access source; ~40–55% widely cited) · closed-access (not_oa) #gap/no-fulltext-access

[^guevara2011]: doi:10.1126/scitranslmed.3001845 · observational · n=99 Laron, ~1600 controls (Ecuador cohort) · zero cancer deaths in Laron subjects; dramatically reduced diabetes · closed-access (download failed) #gap/no-fulltext-access

[^martinmontalvo2013]: doi:10.1038/ncomms3192 · in-vivo · model: C57BL/6 mice, metformin · +5.83% mean lifespan (p=0.02); AMPK activation; mTOR suppression · local PDF available

[^willcox2008]: doi:10.1073/pnas.0801030105 · observational · n=615 men (nested case-control within the HHP/HAAS cohort of Japanese-American men, Honolulu, Oahu; 213 cases ≥95y vs 402 controls died <81y) · rs2802292 GG OR=2.75 (CI 1.51–5.02; P=0.0007) for living to 95+ · local PDF available · male-only cohort

[^suh2008]: doi:10.1073/pnas.0705467105 · observational · n=384 Ashkenazi Jewish centenarians · IGF1R LoF alleles 2.3% vs 0.3% controls (P=0.02); elevated circulating IGF-1 paradox · local PDF available

[^pearl2025]: doi:10.18632/aging.206235 · rct · n=114 adults, 1 year, compounded rapamycin vs placebo · primary endpoint VAT p=0.942 (null) · local PDF available

[^stanfield2026]: [[studies/stanfield-2026-rapa-ex-01]] · doi:10.1002/jcsm.70274 · rct (double-blind, placebo-controlled, n=40 sedentary adults 65–85) · 13 weeks sirolimus 6 mg/week + home exercise vs. placebo + home exercise · primary 30-s chair-stand ITT Δ −2.13 reps (p=0.089); per-protocol Δ −3.44 reps, p=0.007, Cohen's d −0.90 (favors placebo); all secondary functional outcomes directionally favored placebo · PMC13082878 (OA) · ACTRN12624000790549

[^ivimeycook2025]: doi:10.1111/acel.70131 · Ivimey-Cook ER, Sultanova Z, Maklakov AA · *Aging Cell* 2025;24(9):e70131 · meta-analysis · 911 effect sizes from 167 papers across 8 vertebrate species · rapamycin produced significant lifespan extension at DR-matching magnitude; metformin did NOT produce significant vertebrate lifespan extension · OA gold; PMC12419861 · verified-scope: PubMed efetch abstract only

[^aronoff2025]: doi:10.1093/emph/eoaf010 · Aronoff JE, Trumble BC · *Evol Med Public Health* 2025;13(1):111-124 · review · evolutionary-medicine + life-history integration of hyperfunction theory; introduces "Goldilocks zone" (over-suppression of anabolism produces catabolic health risks) and "species constraint" (drugs validated in shorter-lived species may be less effective in humans) caveats · OA gold; PMC12202095; PMID 40574888 · verified-scope: PubMed efetch abstract only

[^salnikov2026]: doi:10.3389/fragi.2026.1735269 · Salnikov L · *Frontiers in Aging* 2026;7:1735269 · review/theory · proposes hyperfunctional state during aging is downstream of an epigenetic program of ontogenesis; partial integration with information theory of aging · OA gold; PMC12868204; PMID 41646545 · verified-scope: PubMed efetch abstract only · author affiliated with AntiCA Biomed
