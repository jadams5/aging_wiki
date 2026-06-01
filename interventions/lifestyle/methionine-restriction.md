---
type: intervention
aliases: [MR, low-methionine diet, methionine restriction, methionine-restricted diet]
mode: dietary
mechanisms: [amino-acid-sensing, fgf21-induction, gcn2-activation, mtorc1-inhibition, igf1-reduction, one-carbon-metabolism-alteration]
targets: []
target-hallmarks: ["[[deregulated-nutrient-sensing]]", "[[loss-of-proteostasis]]"]
target-pathways: ["[[mtor]]", "[[integrated-stress-response]]"]
human-evidence-level: limited
clinical-stage: implemented
safety-profile: well-established
translation-gap: phase-2-needed
next-experiment: "6-month RCT of moderate methionine restriction (~2 g/day vs ad lib protein), primary endpoints DunedinPACE + plasma FGF21 + IGF-1; n=60–100 metabolically healthy middle-aged adults"
clinical-trials-active: 0
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "All primary-source PDFs verified except Orentreich 1993 (archive failed; verified via PubMed abstract — diet percentages 0.17%/0.86% and ~30% lifespan extension confirmed) and Ables 2017 (archive failed; closed-access — GCN2 KO claim not independently verified against full text; Fang 2022 review contradicts a strong GCN2-essential framing). Canonical-database identity fields not re-verified. R34 recency refresh (2026-05-08): Parkhitko 2025 Trends Endocrinol Metab review, Zhang 2026 Alz Dement late-life MR/FGF21-FGFR1 mechanism in APP/PS1 mice, and Plummer 2025 IMR + selenium dermatitis paper integrated via PubMed abstracts."
---

# Methionine restriction (MR)

Dietary reduction of methionine — an essential sulfur-containing amino acid — extends lifespan in rodents, reduces adiposity, and improves insulin sensitivity without requiring overall caloric restriction. **The most mechanistically tractable amino-acid-specific longevity intervention**, with converging evidence from rodent genetics, GCN2/mTORC1 signaling biology, and FGF21 endocrinology. Human evidence is limited to small short-term metabolic trials. De facto partial MR is achievable through plant-predominant diets, as animal proteins are the primary dietary methionine source.

This page covers methionine restriction as a longevity intervention. For total caloric reduction, see [[caloric-restriction]]. For related dietary strategies, see [[intermittent-fasting]] and [[ketogenic-diet]].

## Background: methionine's central role in metabolism

Methionine is essential (cannot be synthesized de novo in mammals) and occupies a unique position in intermediary metabolism:

- **Sulfur amino acid metabolism**: methionine is the precursor to cysteine (via the transsulfuration pathway) and homocysteine; it supplies the sulfur backbone for glutathione.
- **One-carbon metabolism**: methionine is converted to S-adenosylmethionine (SAM), the universal methyl-group donor for DNA methylation, histone methylation, RNA methylation, and phospholipid synthesis. SAM is consumed to produce S-adenosylhomocysteine (SAH), which is hydrolyzed to homocysteine. This cycle links dietary methionine intake directly to epigenetic regulation.
- **mTORC1 sensing**: mTORC1 monitors methionine availability partly via SAMTOR, a cytoplasmic sensor that binds SAM and, when SAM is high, suppresses the GATOR1 complex to allow mTORC1 activation [^tang2022]. When methionine (and thus SAM) falls, SAMTOR releases GATOR1, reducing mTORC1 activity.
- **Protein synthesis**: methionine provides the initiator Met-tRNA for translation and is incorporated into proteins; it is one of the most abundant amino acids in animal-derived foods.

Dietary methionine content is highly variable: animal proteins (meat, eggs, dairy) contain ~1.5–3% methionine by amino acid mass, while plant proteins (legumes, grains) contain ~0.5–1.5%, making plant-predominant diets inherently moderately methionine-restricted [^cavuoto2012].

## Foundational rodent evidence

### Orentreich 1993 — the founding lifespan study

Low-methionine ingestion (0.17% of diet vs 0.86% control) in male Fischer 344 rats extended median lifespan by ~30% (median ~1059 vs ~818 days; maximum ~1252 vs ~1116 days, per Fang 2022 citing the original data) [^orentreich1993]. MR completely abolished growth despite animals consuming more food per unit body weight than controls, confirming the effect is not attributable to caloric restriction. This study predated GCN2 and FGF21 biology and was initially interpreted through the lens of reduced reactive oxygen species generation (methionine → homocysteine → oxidative stress pathway). It remains the foundational demonstration that **a single amino acid can be the rate-limiting dietary longevity factor**.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | unknown |
| Replicated in humans? | no |

### Miller 2005 — mouse lifespan and ITP context

Miller et al. demonstrated that a methionine-deficient diet extends mouse lifespan while slowing immune aging and lens opacity, reducing serum IGF-I (~35% reduction: 397 vs 257 ng/mL), insulin (~75% reduction: 1.6 vs 0.4 ng/mL), fasting glucose (~50% reduction: 64.7 vs 32.9 mg/dL), and T4, and increasing hepatocyte stress resistance [^miller2005]. The study used n=40 female (BALB/cJ × C57BL/6J)F1 (CB6F1) mice per group; the MR diet started at 0.1% methionine from age 6 weeks, increased to 0.12% at 4 months and 0.15% at 6 months; control diet contained 0.43% methionine. Maximum lifespan (mean of oldest 10%) was 1144±26 days in controls vs ≥1261±32 days in MR mice; all-mice log-rank p=0.02. This was one of the few dietary interventions (outside total caloric restriction) to show robust lifespan extension in mice at the time, and its reduction of IGF-1 implicated the insulin/IGF-1 signaling axis as a mediator. **Not yet replicated by the NIA Interventions Testing Program** (ITP tests only pharmacological interventions in genetically heterogeneous mice); the lifespan data derive from an inbred F1 hybrid. #gap/needs-replication

### Isocaloric MR: separating calories from amino acids

A key control experiment distinguishes MR from caloric restriction: when food is supplemented to equalize caloric intake between MR and control animals, the metabolic and adiposity effects of MR persist [^ables2017]. This demonstrates that **amino-acid sensing per se — not caloric deficit — is the primary driver** of MR's metabolic phenotype, distinguishing MR mechanistically from CR. Whether the isocaloric lifespan extension data are as robust as caloric restriction remains contested. #gap/needs-replication

## Mechanism

### FGF21 induction — the hepatic stress signal

Hepatic fibroblast growth factor 21 (FGF21) is a key effector linking dietary MR to its metabolic phenotype [^fang2022]. The liver senses reduced methionine via the integrated stress response (ISR) and rapidly upregulates FGF21 transcription. FGF21 then acts as an endocrine hormone to:

- Stimulate adipose tissue lipolysis and fatty acid oxidation
- Reduce adiposity and ectopic fat deposition
- Improve insulin sensitivity in muscle and adipose tissue
- Modulate energy expenditure

In *Fgf21^-/-* mice on the MR diet, the MR-induced increases in energy expenditure and energy intake were absent, and body weight and adiposity were reduced proportionally to reduced food consumption (not through increased EE) [^fang2022]. The MR-dependent improvement in insulin sensitivity was partially attenuated in *Fgf21^-/-* mice (twofold improvement vs threefold in WT), indicating a partial FGF21-dependent component [^fang2022]. Hepatic triglyceride reduction by MR was also absent in *Fgf21^-/-* mice. However, the hepatic transcriptional effects of MR (including downregulation of lipogenic genes) were preserved in *Fgf21^-/-* mice, confirming that liver gene expression responses are FGF21-independent [^fang2022]. Together: FGF21 mediates MR's effects on energy balance, thermogenesis, adiposity-independent insulin sensitivity, and serum triglycerides, but the hepatic transcriptional remodeling is FGF21-independent. The wiki's broad framing that "FGF21 mediates metabolic benefits but is not the sole longevity effector" is directionally correct but imprecise — the paper characterizes specific FGF21-dependent vs independent responses rather than making a clean lifespan/longevity statement. #gap/no-mechanism — the FGF21-independent longevity component is uncharacterized.

### GCN2 — the amino acid sensor

GCN2 (General Control Non-derepressible 2, also encoded by *EIF2AK4*) is the primary kinase that senses uncharged tRNAs, which accumulate when any essential amino acid — including methionine — falls below the threshold for charging. GCN2 phosphorylates eIF2α, triggering the integrated stress response (ISR):

- Global protein synthesis is attenuated
- Selective translation of stress-response mRNAs (including ATF4) is upregulated
- ATF4 drives expression of amino acid biosynthesis/transport genes, including FGF21

Early genetic evidence pointed to GCN2 as an important mediator. However, comprehensive metabolic phenotyping in *Gen2^-/-* mice found that GCN2 knockout did not compromise the ability of MR to increase energy expenditure, reduce body weight and adiposity, increase hepatic FGF21, or increase target gene expression in BAT and WAT — indicating GCN2 is individually dispensable for MR's metabolic effects [^fang2022]. Instead, MR activates the ISR through a GCN2-independent mechanism involving PERK (PKR-like endoplasmic reticulum kinase), which is activated by reduced hepatic glutathione (GSH) rather than uncharged tRNAs [^fang2022]. Redundancy between GCN2 and PERK means neither is individually essential. **The claim that GCN2 is "the proximal sensor" should be qualified**: GCN2 participates but is not required. #gap/no-mechanism — the redundant sensing architecture is still being resolved. This places MR within the [[integrated-stress-response]] network through multiple overlapping eIF2α kinases. The ISR→[[atf4]] axis remains the best-characterized transcriptional relay to FGF21.

### mTORC1 inhibition via SAMTOR

mTORC1 monitors methionine availability via SAMTOR, a sensor protein that binds SAM (the direct metabolite of methionine) and inhibits the GATOR1 complex when SAM is abundant [^tang2022]. MR reduces intracellular SAM, releasing GATOR1 from SAMTOR-mediated inhibition, which then suppresses Rag GTPase activity and reduces mTORC1 activity at the lysosomal surface [^kitada2020]. This is mechanistically distinct from leucine sensing (which signals through Sestrin2/CASTOR), meaning methionine and leucine availability converge on mTORC1 via separate sensors. The downstream consequences of mTORC1 suppression — reduced ribosome biogenesis, induced autophagy, reduced S6K1/4E-BP1 phosphorylation — overlap substantially with [[caloric-restriction]] and [[rapamycin]] mechanisms.

### One-carbon metabolism and methylation flux

Reduced methionine intake lowers SAM availability, which constrains methyltransferase reactions globally. This has complex downstream consequences:

- **DNA methylation** patterns shift; CpG methylation at specific loci changes with methionine availability, potentially altering gene expression at aging-relevant loci. Whether this contributes to longevity or is a confound is unclear. #gap/no-mechanism
- **Histone methylation** (H3K4me3, H3K36me3) depends on SAM; MR may alter chromatin state at longevity-relevant promoters
- **Phosphatidylcholine synthesis** (via the PEMT pathway) is reduced under low-methionine conditions, altering membrane composition
- The methionine cycle → homocysteine → transsulfuration → cysteine/glutathione pathway can be upregulated as a compensatory response to preserve cysteine and antioxidant capacity

The interaction between dietary methionine, methylation flux, and epigenetic clocks is an active and under-resolved research area. #gap/no-mechanism

### Summary pathway map

```
Dietary methionine ↓
       │
       ├─[SAM ↓]──→ SAMTOR releases GATOR1 ──→ mTORC1 ↓ ──→ autophagy ↑, ribosome biogenesis ↓
       │
       └─[uncharged Met-tRNA ↑]──→ GCN2 ↑ ──→ eIF2α-P ──→ ISR
                                                              │
                                                              └──→ ATF4 ↑ ──→ FGF21 ↑ (hepatic)
                                                                                     │
                                                                                     └──→ adipose lipolysis ↑, insulin sensitivity ↑
```

## Macronutrient framework: MR within the protein landscape

Solon-Biet et al. (2014) used the Geometric Framework for nutrition to show that in mice fed ad libitum across 25 different macronutrient combinations, **low protein:carbohydrate ratio** was the primary dietary predictor of longevity, with cardiometabolic health and lifespan maximized at low protein (13–14% of energy) and high carbohydrate intake [^solon-biet2014]. This work contextualizes MR: much of the benefit attributed to "low protein" diets in rodents may be specifically attributable to low methionine + branched-chain amino acid (BCAA) content, since methionine and BCAAs are the most mTORC1-activating amino acids. MR is therefore the amino-acid-specific distillation of a broader "protein-restriction" longevity signal. #gap/contradictory-evidence — separating methionine from other protein-restriction signals in humans requires isocaloric amino-acid-substitution designs that have not been conducted.

## Human evidence

### Observational context: plant-based diets as proxy

Populations habitually consuming plant-predominant diets achieve 30–50% lower methionine intakes than omnivore populations, given the differential methionine density of animal vs plant proteins. Epidemiological associations between plant-based diets and reduced all-cause mortality are well-established but are confounded by total calorie intake, fiber intake, micronutrient profiles, and lifestyle covariates. **No epidemiological study has specifically attributed plant-diet longevity associations to methionine restriction per se**. #gap/no-mechanism

### Olsen 2020 — small human RCT of methionine + cysteine restriction

Olsen et al. conducted a double-blind randomized controlled pilot trial in women with overweight or obesity (BMI 25–35 kg/m², age 23–40), comparing three levels of methionine + cysteine content over 7 days [^olsen2020]. n=20 women were randomized (19 completed all visits) across three arms: Met/Cys_low (n=7; ~1.6 g sulfur amino acids/day), Met/Cys_medium (n=7), and Met/Cys_high (n=6; control ~5.6 g/day). All diets were isocaloric (~2200 kcal/day), vegan-based. Key findings in the Met/Cys_low vs Met/Cys_high comparison:

- Serum FGF21 increased by an unadjusted median of 47% in the Met/Cys_low group (96→141 pg/mL) vs a 64% decrease in the Met/Cys_high group over 7 days; the group × time interaction was significant (p=0.004), confirming FGF21 induction translates to humans
- Adipose tissue mRNA expression of DGAT1 (lipogenesis gene) increased in the Met/Cys_low group (0.43 log₂-fold change vs Met/Cys_high, p significant); tendencies toward increased ACAC and FASN expression
- No significant changes in body weight (expected given only 7 days)
- Well-tolerated; compliance ~95%

This is the best-available human mechanistic evidence that the rodent MR→FGF21 pathway is conserved in humans. The trial was very short (7 days), had very small n (n=6–7/group), was limited to women with overweight/obesity aged 20–40, and used combined methionine + cysteine restriction on a vegan diet, not methionine restriction alone. **Not replicated; no longevity or aging-biomarker endpoints**. #gap/needs-replication #gap/needs-human-replication

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | FGF21 induction confirmed at 7 days (Olsen 2020, n=6–7/group) |
| Phenotype conserved in humans? | unknown | Adiposity/metabolic effects plausible but 7 days is too short for phenotypic endpoints |
| Replicated in humans? | no | Single pilot trial (n=20); aging endpoints untested; restriction was combined Met+Cys, not methionine alone |

### What is missing: aging-endpoint RCT

No human trial has evaluated MR against an aging-specific primary endpoint (biological age clock, all-cause mortality, validated functional measure). The interventional literature is restricted to metabolic phenotypes in overweight populations over weeks, not aging biomarkers in middle-aged or older adults over months. #gap/needs-human-replication

### 2025–2026 mechanism updates

**Late-life MR + brain FGF21-FGFR1 axis (Zhang 2026, *Alzheimer's & Dementia*).** 14-month-old male APP/PS1 AD mice received 17 weeks of 0.17% methionine MR; MR reduced amyloid-β deposition, preserved synaptic markers, and suppressed neuroinflammation. The mechanism: hepatic FGF21 induction → brain FGFR1-AMPKα signaling → NF-κB inhibition. Hippocampal FGFR1 knockdown abolished MR's neuroprotective effects while leaving peripheral metabolic effects intact, dissociating the central neuroprotective axis from peripheral metabolism [^zhang2026meth-ad]. This refines the [[fgf21]]-as-effector framing on this page: the brain-side receptor (FGFR1) and downstream AMPK-NF-κB axis are now mechanistically required for MR-mediated neuroprotection in late-life AD models, independent of peripheral metabolic improvement. #gap/needs-human-replication — translation to human AD trials untested.

**Parkhitko 2025 review and human translation challenges (*Trends Endocrinol Metab*).** A 2025 review from the Aging Institute UPMC explicitly catalogues human-translation barriers for MetR: low palatability of MetR diets, deleterious side effects from continuous restriction (bone-mineral-density loss; cysteine compensation), microbiota activity-mediated resistance, and methionine transfer from neighboring cells [^parkhitko2025review]. Several MetR-mimetic strategies — small-molecule pathway inhibitors, synthetic biotic methionine-degraders, and xenotopic enzyme tools — are now in early-stage clinical development. This contextualizes the intervention's translation gap: even with FGF21 induction confirmed in humans (Olsen 2020), continuous dietary restriction is not the most likely path to clinical adoption.

**Intermittent MR + selenium supplementation (Plummer 2025, *J Inflamm*).** The Orentreich Foundation tested IMR (3 days/week reduced methionine) plus selenium supplementation in mouse models and found protection against inflammation and dermatitis with reduced bone-density side effects of continuous MR [^plummer2025imr-selenium]. Strengthens the intermittent-MR cycling rationale beyond the Plummer & Johnson 2022 IMR data already cited.

**Sex- and tissue-specific responses (Thyne 2025, *J Gerontol A*).** Female mice show greater mitochondrial-respiration response to MR than males; methionine sulfoxide reductase A (MsrA) modulates the response in a tissue-dependent manner [^thyne2025tissue]. Hepatic mitochondrial peroxide is reduced by MR in females; renal peroxide is increased by MR regardless of sex. This refines the sex-specific MR phenotype framing — extends what was previously inferred from Miller 2005 (female F1-hybrid only) to a tissue-resolved sexual dimorphism. Note: data are mouse-only; human relevance untested. #gap/needs-replication

**Cysteine restriction (CysR) as the active component (Ommi 2026, *Aging*).** The Orentreich group continues to dissect the SAAR diet (0.12% methionine + cysteine-free) into its components; D,L-buthionine sulfoximine (BSO) recapitulates the anti-obesity phenotype of cysteine restriction (via GSH biosynthesis inhibition) without the SAAR-induced bone-mineral-density loss [^ommi2026cysr-bso]. Implication: the much-cited "MR" literature actually contains a substantial cysteine-restriction signal that may be separable from methionine-specific effects; future human MR trials should specify whether cysteine is also restricted. This is consistent with Olsen 2020 having tested combined Met+Cys restriction (not MR alone) — a caveat already flagged on this page.

#gap/needs-human-replication

## Cross-modality relations

### vs [[caloric-restriction]]

Isocaloric MR recapitulates many CR effects (reduced adiposity, improved insulin sensitivity, mTORC1 inhibition, lifespan extension in rats) without caloric reduction. The CR page notes this explicitly as a major open question [caloric-restriction § Key open questions, item 5]. The mechanistic overlap suggests:
- Both CR and MR reduce mTORC1 activity (CR via reduced total energy/leucine input; MR via SAM/SAMTOR)
- Both induce FGF21 (CR through general energy restriction; MR through specific ISR)
- **Key difference**: MR does not require total caloric deficit and thus avoids the lean-mass loss and cold-intolerance side effects of sustained CR

Conversely, extreme CR that is sufficient to deplete essential amino acids will inevitably reduce methionine — raising the possibility that some CR longevity signal is partially explained by incidental methionine restriction. Head-to-head isocaloric + isomethionine designs would be needed to fully separate these signals. #gap/contradictory-evidence

### vs [[intermittent-fasting]]

IF reduces mean methionine intake by cycling between feeding and fasting, but the primary mechanism is time-averaged caloric and macronutrient restriction plus circadian effects, not sustained amino acid depletion. During the re-feeding window of IF, methionine sensing (mTORC1 + GCN2) will spike, potentially attenuating the sustained MR signal. Intermittent MR (cycling 4 days of control diet + 3 days of MR diet, without fasting) has been tested in male and female C57BL/6J mice on a high-fat diet background and produces similar reductions in adiposity, hepatosteatosis, and favorable hormonal changes (IGF-1, FGF21, leptin, adiponectin) as continuous MR [^aabsle2022imr]. No lifespan endpoint was assessed. #gap/needs-human-replication

### vs [[ketogenic-diet]]

Ketogenic diets typically increase animal protein and fat intake, often raising methionine intake relative to baseline diets. Longevity effects attributed to ketosis (beta-hydroxybutyrate signaling, mTOR modulation, reduced glucose/insulin) operate through distinct molecular mechanisms from amino-acid sensing. The combination of MR and ketosis has not been systematically studied.

## Practical considerations

**Implementing moderate MR without extreme restriction:**

A practical target is approximately 1.5–2 g/day dietary methionine (vs a typical omnivore intake of ~3–4 g/day in Western populations). This can be approximated by:
- Plant-predominant diet (legumes, grains, vegetables as primary protein sources)
- Reducing red meat, poultry, and egg intake to 1–2 servings/week
- Preferring lower-methionine animal proteins (fish > beef > chicken in some contexts)

**What supplementation offsets MR:**
- High-dose branched-chain amino acid (BCAA) supplementation partially restores mTORC1 activity independently of methionine, potentially blunting MR longevity effects
- Supplemental cysteine or NAC (N-acetylcysteine) replenishes the transsulfuration pathway and reduces the need for methionine conversion; combined cysteine supplementation with low-methionine diet may preserve glutathione while preserving the longevity signal (this is experimentally unresolved)

**Safety concerns:**
- Short-term (7 days): well-tolerated in the only human RCT (Olsen 2020, n=20); side effects were mild-to-moderate gastrointestinal symptoms, headache, fatigue, dizziness, and sleep disturbances with no differences between groups; no severe adverse events reported
- Long-term: theoretical concern for impaired protein synthesis at extreme restriction; muscle wasting risk increases if total protein intake is simultaneously reduced
- Children / pregnancy: methionine is essential for growth; restriction is inappropriate outside healthy adults
- Homocysteine: methionine restriction reduces homocysteine generation from the methionine cycle, which may be cardioprotective (elevated homocysteine is a cardiovascular risk factor); however, very low methionine with inadequate folate/B12 co-factors could theoretically impair transsulfuration. Monitoring plasma homocysteine in MR trials is warranted. #gap/long-term-unknown

## Limitations and open gaps

- `#gap/needs-human-replication` — No human trial has assessed aging-biomarker, epigenetic clock, or longevity endpoints under MR; all rodent lifespan data.
- `#gap/needs-replication` — Miller 2005 mouse lifespan data have not been independently replicated in a large heterogeneous mouse cohort (e.g., NIA ITP).
- `#gap/dose-response-unclear` — The optimal degree and duration of methionine restriction for aging benefit in humans is entirely unknown. Rodent studies use 0.17% dietary methionine (vs ~0.86% control); the human equivalent dose is unestablished.
- `#gap/long-term-unknown` — Longest human trial is 7 days (Olsen 2020, n=20, pilot); potential adverse effects of sustained restriction on muscle mass, wound healing, and immune function in older adults are completely unstudied.
- `#gap/no-mechanism` — The FGF21-independent component of MR longevity (demonstrated in FGF21-KO mice) is uncharacterized. The quantitative contribution of each pathway (GCN2/ISR vs mTORC1/SAMTOR vs methylation flux) to longevity vs metabolic phenotype is unresolved.
- `#gap/needs-canonical-id` — No KEGG/Reactome pathway ID for the integrated methionine-restriction signaling network as a unified pathway; individual sub-pathways (ISR: R-HSA-9612973; mTORC1: R-HSA-165159) are covered separately.

## Cross-references

- [[caloric-restriction]] — related intervention; isocaloric MR separates amino-acid sensing from caloric deficit
- [[intermittent-fasting]] — related intervention; different primary mechanism
- [[ketogenic-diet]] — sibling R23c intervention; largely orthogonal mechanism
- [[mtor]] — primary downstream signaling target (SAMTOR→GATOR1 axis)
- [[integrated-stress-response]] — GCN2→eIF2α→ATF4 axis activated by MR
- [[gcn2]] — proximal amino-acid sensor; protein page
- [[atf4]] — downstream transcription factor; induces FGF21 and amino acid transport genes
- [[deregulated-nutrient-sensing]] — primary hallmark targeted
- [[loss-of-proteostasis]] — secondary hallmark; autophagy induction via mTOR suppression
- [[autophagy]] — downstream effector of mTOR suppression
- [[fgf21]] — key hepatic effector; protein page (verified R26b 2026-05-06). Note: the verified [[fgf21]] page caught a Laeger 2014 misattribution — Laeger 2014 used general low-protein diet (~5% casein), not methionine-specific restriction. No Laeger 2014 claims appear on this page; FGF21-MR mechanism is sourced to Fang 2022 (appropriate).
- [[insulin-igf1]] — IGF-1 reduction is a consistent MR phenotype in rodents (Miller 2005)

## Footnotes

[^orentreich1993]: doi:10.1093/jn/123.2.269 · Orentreich N, Matias JR, DeFelice A, Zimmerman JA · *J Nutr* 1993 · in-vivo · model: male Fischer 344 rats, 0.17% vs 0.86% methionine diet from weaning · ~30% lifespan extension (abstract); methionine restriction completely abolished growth despite higher food intake per body weight (isocaloric CR distinction confirmed) · n per group and absolute lifespan values not in abstract; full PDF not accessible (DOI lookup failed; paper is hybrid OA but no PMC full-text available) · Fang 2022 review cites this paper as reporting median 1059d / max 1252d (MR) vs median 818d / max 1116d (control) from the original data #gap/no-fulltext-access

[^miller2005]: doi:10.1111/j.1474-9726.2005.00152.x · Miller RA, Buehner G, Chang Y, Harper JM, Sigler R, Smith-Wheelock M · *Aging Cell* 2005 · n=40/group female (BALB/cJ × C57BL/6J)F1 (CB6F1) mice · in-vivo · control diet 0.43% Met; MR diet started 0.1% at 6 weeks, increased to 0.12% (4 mo) then 0.15% (6 mo); log-rank p=0.02 (all mice), p<0.0002 (survivors >365d); max lifespan 1144±26 d (control) vs ≥1261±32 d (MR); IGF-I: 397→257 ng/mL; insulin: 1.6→0.4 ng/mL; fasting glucose: 64.7→32.9 mg/dL; slows immune (T-cell subsets) and lens aging; increases hepatocyte APAP stress resistance

[^cavuoto2012]: doi:10.1016/j.ctrv.2012.04.009 · Cavuoto P, Fenech MF · *Cancer Treat Rev* 2012 · review · model: narrative review across organisms · covers MR mechanisms, cancer dependency, and longevity data; note: DOI lookup matched wrong paper — DOI confirmed via PMID 22342103 cross-check; title mismatch is an archive BUG-2 candidate

[^ables2017]: doi:10.1016/j.exger.2017.01.012 · Ables GP, Johnson JE · *Exp Gerontol* 2017 · review · model: mouse and rat MR studies · pleiotropic responses to MR; covers isocaloric vs hypocaloric comparisons and FGF21 upregulation in aged mice · PDF not accessible (DOI lookup failed; no PMC full-text) #gap/no-fulltext-access — GCN2 KO "blunted metabolic responses" claim sourced here could not be independently verified; Fang 2022 review reports Gen2^-/- mice show full MR metabolic responses, suggesting this claim may be overstated or refers to a different endpoint

[^fang2022]: doi:10.1146/annurev-nutr-062320-111849 · Fang H, Stone KP, Forney LA, Wanders D, Gettys TW · *Annu Rev Nutr* 2022 · review · model: mouse MR studies (primarily C57BL/6J and F344 rats); *Fgf21^-/-*, *Gen2^-/-*, *Perk*-null, *Atf4^-/-*, *Nrf2*-null KO mouse data · establishes FGF21 as key mediator of MR energy balance/thermogenesis/adiposity effects; hepatic transcriptional remodeling is FGF21-independent; GCN2 individually dispensable (PERK provides redundant ISR activation); ATF4 and NRF2 also individually dispensable via redundancy; sensing architecture uses multiple interchangeable kinases

[^tang2022]: doi:10.1126/sciadv.abn3868 · Tang X, Zhang Y, Wang G, et al. · *Sci Adv* 2022 · in-vitro/structural · model: Drosophila melanogaster SAMTOR crystal structures (SAM-bound and SAH-bound) + functional mutagenesis assays; SAMTOR is highly conserved and authors confirm functional equivalence with human SAMTOR · molecular mechanism of SAM sensing by SAMTOR: SAM binding induces conformational change in N-terminal helical domain that blocks SAMTOR–GATOR1-KICSTOR interaction, activating mTORC1; SAM dissociation (as during MR) allows SAMTOR to re-engage GATOR1, suppressing Rag GTPase activation and mTORC1

[^kitada2020]: doi:10.3389/fcell.2020.00715 · Kitada M, Xu J, Ogura Y, Monno I, Koya D · *Front Cell Dev Biol* 2020 · mini-review · model: mechanistic review of methionine→mTORC1 signaling · covers SAMTOR→GATOR1→Rag GTPase axis (cytoplasmic SAM-sensing branch) and PP2A methylation branch (SAM→LCMT1→methyl-PP2A→NPRL2 phosphorylation→mTORC1 activation) as two parallel mechanisms by which methionine/SAM activates mTORC1

[^solon-biet2014]: doi:10.1016/j.cmet.2014.02.009 · Solon-Biet SM et al. · *Cell Metab* 2014 · in-vivo · n=858 mice (25 diet groups; protein 5–60%, fat 16–75%, carbohydrate 16–75%, 3 energy densities) · model: C57BL/6 mice ad libitum across 25 macronutrient combinations; Geometric Framework · median lifespan increased from ~95 to ~125 weeks as protein:carbohydrate ratio decreased; effect driven by protein intake, not caloric intake per se; high-protein diets elevated circulating BCAAs and activated hepatic mTOR; low-protein/high-carbohydrate diets maximized longevity and cardiometabolic health markers

[^olsen2020]: doi:10.1186/s12967-020-02288-x · Olsen T, Øvrebø B, Haj-Yasein N, et al. · *J Transl Med* 2020 · double-blind rct (pilot) · n=20 randomized (19 completed); 3 arms: Met/Cys_low (n=6 completed, ~1.6 g SAA/day), Met/Cys_medium (n=7), Met/Cys_high (n=6, control ~5.6 g SAA/day) · model: human, 7-day isocaloric vegan-based methionine+cysteine restriction; women aged 23–40, BMI 25–35 kg/m² · serum FGF21 increased 47% (median 96→141 pg/mL) in Met/Cys_low vs 64% decrease in Met/Cys_high; group × time interaction p=0.004; DGAT1 adipose mRNA upregulated; no significant body weight change (too short); well-tolerated

[^aabsle2022imr]: doi:10.1111/acel.13629 · Plummer JD, Johnson JE · *Aging Cell* 2022 · in-vivo · n=4/group (male C57BL/6J mice, 5 mo old, high-fat diet model; n=8/group female 9-mo-old mice in second experiment) · model: mouse, two IMR regimens (4 days control + 3 days 0.12% Met = IMR1; 4 days control + 3 days 0% Met = IMR2) vs continuous MR (0.15% Met) · IMR2 produced similar protection against diet-induced obesity (adiposity reduced 70–77%), similar FGF21 elevation (~42–87-fold at Day 42), and similar IGF-1 reduction (~50–56%) as continuous MR; liver steatosis grade reduced ~63%; no lifespan endpoint tested

[^zhang2026meth-ad]: doi:10.1002/alz.71287 · Zhang Y, Li Y, Wang Q, Pang J, Wang D, Yuan T, Liu Z · *Alzheimer's & Dementia* 2026;22(3):e71287 · in-vivo · n not stated in abstract · model: 14-month-old male APP/PS1 AD mice receiving 17 weeks of MR (0.17% methionine) vs control; hippocampal FGFR1 knockdown via AAV in subset · late-life MR reduced Aβ deposition, preserved synaptic markers, suppressed neuroinflammation; mechanism: hepatic FGF21 → brain FGFR1-AMPKα → NF-κB inhibition; hippocampal FGFR1 knockdown abolished neuroprotective effects but left peripheral metabolic improvements intact, dissociating central from peripheral mechanisms · PMID 41830497 · PMC13093841

[^parkhitko2025review]: doi:10.1016/j.tem.2025.09.006 · Parkhitko AA, Pathak S, Johnson JE, Mittendorfer B, Steinhauser ML · *Trends Endocrinol Metab* 2025 (Online Oct 6) · review · catalogues challenges for human MetR translation (palatability, side effects from continuous restriction, microbiota interaction, cysteine compensation, intercellular methionine transfer) and surveys MetR-mimetic strategies (small molecules, synthetic biotics, xenotopic enzyme tools) entering early-stage clinical trials · PMID 41053925

[^plummer2025imr-selenium]: doi:10.1186/s12950-025-00451-z · Plummer JD, Johnson JE · *J Inflammation (Lond)* 2025;22(1):24 · in-vivo · model: mouse · IMR (3 days/week reduced methionine) + selenium supplementation provided protection against inflammation and dermatitis without continuous-MR-associated bone/musculoskeletal side effects · PMID 40461845

[^thyne2025tissue]: doi:10.1093/gerona/glaf177 · Thyne KM, Camones R, Salmon AB · *J Gerontol A Biol Sci Med Sci* 2025;80(9):glaf177 · in-vivo · model: mouse with WT and MsrA-KO genotypes, both sexes, MR diet · females showed greater mitochondrial respiration changes with MR than males; hepatic mitochondrial peroxide reduced by MR in females; renal peroxide increased by MR regardless of sex; H2S production capacity selectively increased in liver by MR · MsrA effects context-dependent · PMID 40795766 · PMC12448830

[^ommi2026cysr-bso]: doi:10.18632/aging.206358 · Ommi NB, Mattocks DAL, Horowitz MC, Nichenametla SN · *Aging (Albany NY)* 2026 Mar 2;18(1):82–99 · in-vivo · model: male obese C57BL/6NTac mice on high-fat diets ± SAAR (0.12% methionine, no cysteine), ± NAC supplementation, ± BSO (GSH inhibitor) · SAAR diet's anti-obesity effect operates via cysteine restriction (CysR) — confirmed by NAC reversal; SAAR detrimental bone effects (lower trabecular/cortical BMD, fewer osteoblasts, more marrow adipocytes) also CysR-mediated; **BSO (GSH-biosynthesis inhibitor) recapitulates anti-obesity effect on a methionine-replete diet without bone defects** — separates anti-obesity from bone-pathology endpoints · PMID 41790529
