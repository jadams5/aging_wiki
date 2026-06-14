---
type: hypothesis
aliases: [female survival advantage, sex gap in lifespan, male-female mortality gap, female longevity paradox]
proposed-by: [demographic observation; synthesized by Austad, Marais, Lemaître and others]
proposed-year: null
status: active
treatment-mode: evidence-aggregating
key-evidence-for:
  - "[[studies/zarulli-2018-female-survival-extreme-mortality]]"
  - "[[studies/lemaitre-2020-sex-differences-mammal-lifespan]]"
key-evidence-against: []
related-hallmarks:
  - "[[hallmarks/epigenetic-alterations]]"
  - "[[hallmarks/altered-intercellular-communication]]"
  - "[[hallmarks/telomere-attrition]]"
  - "[[hallmarks/genomic-instability]]"
related-hypotheses:
  - "[[hypotheses/disposable-soma-theory]]"
  - "[[hypotheses/antagonistic-pleiotropy]]"
literature-checked-through: 2026-06-03
verified: true
verified-date: 2026-06-03
verified-by: claude
verified-scope: "Zarulli 2018, Lemaître 2020, and Horvath 2016 verified against primary-source PDFs. Qualitative mechanism paragraphs (iron, telomere, immune, X-chromosome, mother's-curse, behavioral) verified as appropriately hedged — no fabricated effect sizes detected. Canonical-DB identity fields not applicable (hypothesis/synthesis MOC). Watson 2022 and Camus 2012 cross-checked as correctly framed."
---

# Female Longevity Advantage

## The phenomenon (not yet an explained mechanism)

In virtually every human population ever studied — across historical eras, income levels, and mortality contexts — women outlive men. This is one of the most robust findings in demography. The mechanism is **contested and likely multifactorial**; the phenomenon itself is not. This page is a synthesis MOC that aggregates candidate mechanistic hypotheses and cross-links the wiki atomic pages where the evidence lives.

The ~5-year gap in life expectancy observed in contemporary high-income countries is the compressed tip of a much more general biological pattern. The female survival advantage is not simply a modern artifact of male smoking, occupational hazard, or healthcare-avoidance — it persists under conditions where these behavioral factors cannot explain it.

**Important nuance — the health-survival paradox:** Women live longer but, on average, spend more years in poor health, with higher rates of disability and multimorbidity at equivalent ages [^verbrugge1989review]. The longevity advantage and the health burden are not contradictory: they likely reflect sex differences in the *type* and *trajectory* of disease, not simply the rate of mortality. See [[frailty]] and [[immunosenescence]] for relevant phenotype data.

## Status: active

The phenomenon is confirmed and uncontested. The mechanisms are active research topics — no single mechanism is sufficient, and there is reasonable evidence for multiple partial contributors operating in parallel. Status is therefore `active` in the sense that mechanistic explanation is still an open scientific question, not in the sense that the phenomenon is disputed.

## Key predictions of the multi-mechanism view

If the female longevity advantage is genuinely multifactorial, the following should hold:

1. The gap should persist even after controlling for behavioral factors (smoking, alcohol, risk-taking, healthcare use) — and it does, though it narrows.
2. The gap should appear across multiple mammalian species under natural conditions — it does, though the magnitude varies.
3. Biological markers of aging rate should differ by sex — they do (epigenetic clocks, telomere length, biomarker profiles).
4. No single intervention or genetic perturbation should fully abolish or reverse the gap.
5. The gap should narrow post-menopause relative to the premenopausal rate — there is some evidence for this in terms of cardiovascular disease risk convergence, but the gap does not disappear.

## Establishing the phenomenon

### Human demographic evidence

The single most decisive dataset for isolating biology from behavior is mortality under **extreme conditions** — famines, epidemics, and slavery — where behavioral advantages of women over men are minimal or eliminated. Zarulli et al. 2018 [^zarulli2018] examined seven such historical populations (including the 1845–1849 Irish famine, 1813–1816 plantation slavery in Trinidad, and the 1933 Ukrainian Holodomor). In every population, women survived longer. Critically, the female advantage was **largest in infancy** — not in middle age — suggesting a biological substrate that operates from birth, not one acquired through adult behavior. This is high-weight demographic evidence; see [[studies/zarulli-2018-female-survival-extreme-mortality]] (stub — needs seeding).

### Cross-species comparative evidence

The human advantage is not unique among mammals. Lemaître et al. 2020 [^lemaitre2020] analyzed 134 wild mammal populations across 101 species and found that female median lifespan exceeded male median lifespan in the **majority of populations**; the average female advantage was approximately 18.6% — substantially larger than the ~7.8% human gap reported in the same analysis. Crucially, the study found **no consistent sex difference in the rate of actuarial senescence** across species: females generally start from a lower baseline mortality rather than aging more slowly. This complicates some mechanistic stories (e.g., if women simply age more slowly biologically, a consistent senescence-rate difference would be expected). See [[studies/lemaitre-2020-sex-differences-mammal-lifespan]] (stub — needs seeding).

The cross-species prevalence means that any complete mechanistic account must invoke factors present across mammals broadly, not only human-specific cultural or medical factors.

## Candidate mechanisms

The following candidates are not mutually exclusive. Current evidence suggests multiple mechanisms contribute additively or synergistically.

---

### 1. X-chromosome buffering / heterozygote advantage (leading genetic hypothesis)

**Core idea:** Women carry two X chromosomes; men carry one X and one Y. X-chromosome inactivation (XCI) in female somatic cells produces cellular mosaicism — each cell silences one X copy, but which copy is silenced varies across cells. This mosaicism may **buffer against deleterious X-linked mutations**: a woman heterozygous for a harmful X-linked variant will have approximately half her cells compensating with the functional copy. A hemizygous male with the same variant has no such backup. Over a lifetime, deleterious mutations and epigenetic deterioration of the X may thus have asymmetric consequences by sex.

**Status of evidence:** Consistent with the cross-species pattern (XY sex determination is ancestral across most mammals); formally proposed in "unguarded X" and "toxic Y" frameworks reviewed in Marais et al. 2018 [^marais2018]. See [[processes/x-chromosome-inactivation]] for the cellular mechanism. XCI skewing (the loss of balanced inactivation with age, resulting in one X being preferentially silenced in most cells) is an aging phenotype in its own right and may paradoxically reduce the mosaicism benefit over the lifespan. Direct causal evidence linking XCI patterns to female longevity advantage in humans remains limited. #gap/needs-human-replication

**Y-chromosome deterioration** (a related "toxic Y" mechanism) proposes that Y chromosome heterochromatin loss with aging activates transposable elements and may reduce male longevity specifically [^muyle2021]. This is preliminary and largely model-organism based. #gap/needs-human-replication

---

### 2. Sex-differential epigenetic aging rate (molecular aging clocks)

**Core idea:** Multiple independent epigenetic clock analyses converge on the finding that men show faster biological aging than women by DNA methylation metrics.

**Evidence:** Horvath et al. 2016 [^horvath2016] analyzed seven racial/ethnic groups and reported that **men have higher epigenetic aging rates than women in blood, saliva, and brain tissue** — across all groups examined. This is a direct molecular-aging-rate difference, not merely a behavioral or social confound. The Horvath intrinsic epigenetic age acceleration (IEAA) and extrinsic epigenetic age acceleration (EEAA) measures both showed consistent male disadvantage in blood and saliva. In brain, the sex effect was significant in **non-cerebellar regions** (meta-analysis mean difference 0.82 years, p=3.1×10⁻⁵) but not in the cerebellum (p=0.8); the abstract-level summary of "brain" should be understood with this regional qualifier.

More recent second-generation clocks (GrimAge, DunedinPACE) trained on mortality outcomes show similar patterns: GrimAge acceleration tends to be higher in men; DunedinPACE (pace of aging, not age at a point) also shows male-disadvantaged means in most cohorts, though effect sizes vary. These clocks are verified on separate atomic pages — see [[biomarkers/grimage-2019]] and [[biomarkers/dunedinpace-2022]].

**Weight and caveats:** Epigenetic clocks are **trained primarily on chronological age or mortality** and may partly recapitulate sex differences already in the training data. Whether higher epigenetic age acceleration in men is a *cause* of shorter male lifespan, a *consequence* of the same upstream biological differences, or a correlated biomarker is not resolved by clock studies alone. The consistency across multiple independent clock algorithms across multiple independent cohorts is nevertheless high-confidence. See [[biomarkers/horvath-clock-2013]] for clock methodology.

**Sex differences in clock-defined aging are the most robustly measured biological-aging difference between the sexes.** They are not sufficient to establish mechanism but are consistent with most of the mechanistic candidates below. #gap/needs-replication (causal direction from epigenetic difference to mortality needs MR or intervention evidence)

---

### 3. Sex hormone effects / estrogen protection

**Core idea:** Estrogens (principally 17β-estradiol) exert cardioprotective, anti-inflammatory, and collagen-maintenance effects. The premenopausal female cardiovascular disease burden is substantially lower than age-matched males. This cardioprotection partially narrows post-menopause, and female cardiovascular mortality rises toward (though does not fully reach) male rates after age 60–70.

**Evidence:** Estradiol acts through ESR1/ESR2 and GPER receptors to modulate nitric oxide bioavailability, LDL oxidation, vascular tone, and inflammatory cytokine expression. See [[molecules/compounds/estradiol]] (verified) for mechanistic detail.

**The critical counterpoint:** The female longevity advantage is **not eliminated by menopause**. Women spend roughly one-third of their lives post-menopause and still outlive men by several years. The Zarulli 2018 data [^zarulli2018] includes post-reproductive-age mortality where estrogen protection is minimal. The cross-species data [^lemaitre2020] includes many mammalian species without a distinct post-reproductive lifespan. This means estrogen protection cannot be the sole or primary explanation. It is best understood as a **contributing partial mechanism**, particularly for cardiovascular endpoints, with the largest relative contribution in the 40–70 age window. See [[phenotypes/menopause]] for the phenotype page.

**Premature menopause:** Women with premature ovarian insufficiency (menopause before age 40) have substantially elevated all-cause mortality; they lose ~2 years of life expectancy per decade of menopause advancement in some analyses [^pmid39137103]. This is consistent with estrogen protection but confounded by underlying pathology causing early menopause. #gap/needs-replication (causal MR evidence needed)

---

### 4. Iron / ferroptosis hypothesis

**Core idea:** Premenopausal women lose iron through menstruation, maintaining lower body iron stores (lower serum [[ferritin]], roughly half male levels). Excess iron drives oxidative damage and, at extremes, ferroptotic cell death. The post-menopausal convergence of female and male iron stores roughly correlates with the narrowing of the sex gap in cardiovascular disease risk.

**Status of evidence:** This is a plausible mechanistic pathway with indirect supporting evidence (lower iron stores → lower oxidative load → lower lipid peroxidation → lower cardiovascular and cancer risk) but **lacks strong direct causal evidence in humans**. The iron hypothesis was proposed as a partial explanation for the sex-mortality gap by Sullivan and others. A reply to Zarulli et al. 2018 by Delanghe et al. argued that iron status does not explain the extreme-mortality data [^zarulli2018reply]; the Zarulli team concurred that iron is unlikely to be a primary driver under those conditions.

This mechanism may contribute at the margin — particularly to cardiovascular risk convergence post-menopause — but is probably not a major contributor to the full longevity gap. See [[hallmarks/genomic-instability]] for oxidative-damage mechanisms, [[molecules/metabolites/iron]] § iron hypothesis for the full evidence appraisal (incl. the Zarulli infancy-survival counterargument and the hemochromatosis paradox), [[processes/ferroptosis]] for the cell-death mechanism, and [[ferritin]] for the dual reading of the post-menopausal ferritin rise (loss-of-protection vs relief-of-chronic-deficiency). #gap/no-mechanism (direct RCT or MR evidence on iron-depletion-as-longevity-intervention is lacking) #gap/needs-human-replication

---

### 5. Immune sex differences

**Core idea:** Women mount stronger innate and adaptive immune responses than men. X-linked immune genes (e.g., TLR7, TLR8, IRAK1, BTK, MECP2, CD40L) are expressed from both X copies in female immune cells (some escape XCI), creating a gene-dosage advantage. Estrogen also upregulates several immune effectors. This stronger immune response improves survival from infections, which historically were major mortality causes.

**Evidence:** The female survival advantage in the Zarulli 2018 data was especially pronounced in **infants during epidemics**, consistent with an immune advantage that operates from birth (not an acquired behavioral difference). Female-biased innate immunity is well-documented in innate immune signaling studies. See [[hallmarks/disabled-adaptive-immunity]] and [[phenotypes/immunosenescence]] for related aging immune phenotypes.

**The double edge:** Stronger female immunity is also associated with much higher rates of autoimmune disease (lupus, rheumatoid arthritis, multiple sclerosis, Hashimoto's) — consistent with the immune-overdrive view. This is one of the few survival-cost trade-offs demonstrably carried by the female longevity advantage. The immunosenescence trajectory also differs by sex; women retain immune competence better in some respects but show distinct inflammaging patterns. #gap/contradictory-evidence (net benefit vs net cost of heightened female immunity for longevity is not cleanly partitioned in the literature)

---

### 6. Telomere biology

**Core idea:** Women have longer mean leukocyte telomere length (LTL) than men at equivalent ages. Longer telomeres buffer against replicative senescence and genomic instability. This difference may partially explain slower cellular aging in women.

**Evidence:** The sex difference in LTL is well-established in cross-sectional studies [^ongel2021]; women show slower LTL attrition rate in some (but not all) longitudinal analyses. See [[biomarkers/telomere-length-leukocyte]] and [[hallmarks/telomere-attrition]] for primary data.

**Caveats:** LTL is a crude aggregate measure — it does not capture tissue-specific telomere dynamics, and LTL itself has modest predictive value for individual longevity. The sex difference in LTL may be downstream of other sex differences (estrogen upregulates telomerase activity; lower oxidative burden in premenopausal women slows telomere erosion) rather than a primary causal mechanism. Mendelian randomization evidence for a causal LTL → longevity path is mixed. #gap/needs-replication (MR evidence for LTL sex-difference → longevity gap is not published to date, per literature search)

---

### 7. Mitochondrial "mother's curse" (COUNTERVAILING mechanism — widens male disadvantage)

**Core idea:** Mitochondrial DNA (mtDNA) is maternally inherited in most mammals, including humans. Under maternal transmission, natural selection can efficiently purge mtDNA variants harmful to *females* (who transmit them) but is **blind to variants harmful to males only**. Over evolutionary time, male-harming mtDNA variants accumulate — a phenomenon termed "mother's curse" (Camus et al. 2012 [^camus2012]). This creates an asymmetric mitochondrial mutation load that could systematically disadvantage male aging.

**Evidence:** Camus et al. 2012 demonstrated in *Drosophila* that mtDNA haplotypes differentially affect male vs female aging in a pattern consistent with mother's curse (male aging affected; female aging largely spared by male-harming mt variants). **This is an experimental non-human demonstration; human evidence is limited.**

**Critical countervailing data:** Watson et al. 2022 [^watson2022] found that in the marine crustacean *Tigriopus californicus*, mitonuclear incompatibility affected females rather than males — the opposite of the mother's curse prediction. The mother's curse hypothesis is therefore contested empirically, with some organisms supporting it and others contradicting it. The relevance to human sex-longevity difference is hypothetical; no direct human MR study has tested this pathway.

See [[hypotheses/mitohormesis]] for mitochondrial biology and aging context. A dedicated [[hypotheses/mothers-curse]] stub page would be appropriate. #gap/needs-human-replication #gap/contradictory-evidence

---

### 8. Behavioral and social factors

**Core idea:** Men historically smoked more, engaged in more risk-taking behavior, had greater occupational hazards (mining, construction, military mortality), and were less likely to seek medical care. These factors demonstrably raise male mortality and would predict a sex gap even without any biological substrate.

**Evidence:** The sex gap in life expectancy in high-income countries **narrowed substantially** during the latter 20th century as female smoking rates rose toward male rates in many countries, and male occupational mortality fell. This convergence is consistent with behavioral explanation playing a meaningful role.

**The residual gap:** After controlling for smoking, alcohol, BMI, and occupational hazard in epidemiological studies, a residual female survival advantage remains. The cross-species evidence [^lemaitre2020] in wild mammals (where human behavioral confounds do not apply) further confirms that biology contributes independently. The honest summary: **both biology and behavior contribute**; behavior can amplify or dampen the biological baseline gap; the baseline gap exists without behavior.

The behavioral channel is therefore a **modifier**, not a competing explanation. Policy interventions that reduce male behavioral risk (smoking cessation, safety regulations, healthcare-seeking promotion) should narrow — but not eliminate — the gap.

---

## Evidence supporting (summary)

- **Cross-historical extreme-mortality survival** — women survive famines, epidemics, and slavery conditions better than men; infant females show advantage even before adult behavioral differences apply. See [[studies/zarulli-2018-female-survival-extreme-mortality]] [^zarulli2018].
- **Cross-species wild mammal lifespan** — female median lifespan exceeds male in the majority of 101 species analyzed; human gap (~7.8%) is smaller than the cross-mammal average (~18.6%). See [[studies/lemaitre-2020-sex-differences-mammal-lifespan]] [^lemaitre2020].
- **Epigenetic clock acceleration** — men show consistently higher epigenetic aging rates across blood, saliva, and brain. See [[biomarkers/horvath-clock-2013]], [[biomarkers/grimage-2019]], [[biomarkers/dunedinpace-2022]] [^horvath2016].
- **X-chromosome buffering** — two-X heterozygosity reduces penetrance of deleterious X-linked variants. See [[processes/x-chromosome-inactivation]] and Marais et al. 2018 [^marais2018].
- **Sex chromosome biology review** — Marais et al. 2018 synthesizes unguarded-X, toxic-Y, and mother's-curse contributions [^marais2018].

## Evidence that complicates or qualifies (not refutation)

- **Post-menopausal persistence** — estrogen protection alone cannot explain the gap because it persists decades after menopause.
- **No single sex difference fully explains the gap** — behavioral adjustment narrows but does not eliminate it; epigenetic clocks show consistent sex difference but do not establish causal direction; XCI mosaicism lacks direct causal human data; LTL difference has modest predictive value.
- **Mother's curse is contested** — some model organisms do not support the prediction (Watson et al. 2022 [^watson2022]).
- **Health-survival paradox** — whatever mechanism underlies female longevity does not protect from morbidity, disability, or frailty in equivalent measure. The survival advantage is real; it is not accompanied by proportional health-span advantage. See [[phenotypes/frailty]].
- **Cross-species senescence rate null finding** — Lemaître et al. 2020 [^lemaitre2020] found females do not consistently age more slowly (lower senescence rate) — they have lower baseline mortality. This complicates simple "women age slower" narratives and is inconsistent with sex differences operating purely through rate of damage accumulation.

## What would update this hypothesis

This page will require structural revision if:

1. **A single unifying mechanism is identified** that accounts for the majority of the gap across historical, cross-species, and molecular evidence lines — none currently exists.
2. **MR evidence** establishes or refutes causal contribution of LTL sex differences or X-linked immune gene dosage to the mortality gap.
3. **Epigenetic intervention studies** show that equalizing male and female epigenetic aging rates (e.g., via methylation-modulating interventions) narrows the survival gap in animal models.
4. **Post-menopausal HRT data** at scale establish whether estrogen replacement in the timing window restores the pre-menopausal survival trajectory (the "timing hypothesis" in cardiovascular data — see [[molecules/compounds/estradiol]]).
5. **Mother's curse MR or experimental evidence in mammals** either confirms or refutes the male-specific mtDNA disadvantage hypothesis.

## Related hypotheses

- [[hypotheses/androgen-deprivation-longevity-hypothesis]] — the male-side natural-experiment: do eunuchs live longer? Hamilton & Mestler 1969, Min 2012, and Garratt 2026 vertebrate meta-analysis suggest reduced androgen exposure benefits male lifespan; a contested hypothesis that is the mechanistic complement of the estrogen-protection candidate mechanism here.
- [[hypotheses/disposable-soma-theory]] — the Blagosklonny 2010 critique explicitly argues that disposable soma cannot explain why females, who bear greater reproductive cost, live longer. The interaction between sex-specific life-history trade-offs and longevity is actively contested; see the disposable-soma page for the NMR queen paradox.
- [[hypotheses/antagonistic-pleiotropy]] — sex-biased pleiotropic effects are likely; alleles beneficial for male reproductive success (testosterone-driven) may be harmful for male longevity at older ages.
- [[hypotheses/dna-damage-theory-of-aging]] — the lower oxidative burden in premenopausal women (iron hypothesis, estrogen antioxidant effects) connects to DNA damage accumulation.
- [[hypotheses/free-radical-theory-of-aging]] — premenopausal lower iron load → lower ROS → lower lipid peroxidation is consistent with this frame.

## Related hallmarks

- [[hallmarks/epigenetic-alterations]] — men show accelerated epigenetic drift by clock metrics; epigenetic mechanisms are a leading molecular correlate of the gap.
- [[hallmarks/altered-intercellular-communication]] — sex-hormone-driven intercellular signaling (estrogen paracrine and endocrine effects) diverges substantially by sex and changes at menopause.
- [[hallmarks/telomere-attrition]] — LTL is longer in women; rate of attrition may also differ.
- [[hallmarks/genomic-instability]] — XCI mosaicism buffers genomic instability consequences in women; iron-driven oxidative damage is lower premenopausally.
- [[hallmarks/disabled-adaptive-immunity]] — female immune advantage is relevant here; the senescence trajectory of adaptive immunity differs by sex.

## Related phenotype pages

- [[phenotypes/menopause]] — the post-reproductive transition that provides the critical test of estrogen-protection hypotheses.
- [[phenotypes/frailty]] — site of the health-survival paradox; women experience more frailty despite living longer.
- [[phenotypes/immunosenescence]] — sex-specific trajectories of immune aging.
- [[phenotypes/sarcopenia]] — muscle loss trajectories differ by sex and hormone status.

## Limitations and gaps

- #gap/unsourced — no verified atomic wiki page yet exists for most behavioral-adjustment analyses; the residual-biological-gap claim after behavioral control should be sourced when those study pages are seeded.
- #gap/stub — [[studies/zarulli-2018-female-survival-extreme-mortality]] and [[studies/lemaitre-2020-sex-differences-mammal-lifespan]] need seeding as study pages.
- #gap/stub — [[hypotheses/mothers-curse]] should be seeded as a dedicated hypothesis page.
- ✅ Resolved (2026-06-14) — [[processes/ferroptosis]], [[molecules/metabolites/iron]], and [[ferritin]] now exist and are linked from the iron-hypothesis section.
- #gap/needs-human-replication — XCI mosaicism → longevity causal path not established in humans.
- #gap/needs-human-replication — Mother's curse mtDNA mechanism not tested in human MR studies.
- #gap/needs-replication — LTL sex difference → longevity causal MR evidence not published.
- #gap/contradictory-evidence — Mother's curse is empirically contested across model organisms.
- #gap/no-mechanism — the health-survival paradox (women live longer but with more disability) lacks a single agreed mechanistic explanation.

---

[^zarulli2018]: doi:10.1073/pnas.1701535115 · Zarulli V, Jones JAB, Oksuzyan A, Lindahl-Jacobsen R, Christensen K, Vaupel JW · "Women live longer than men even during severe famines and epidemics" · *PNAS* 115(4):E832–E840 · 2018 · observational, historical demographic data · n=7 populations under extreme mortality conditions (famine, epidemic, slavery) · female survival advantage persisted in all seven, largest in infancy · 292 citations; FWCI 29.1 (citation_percentile 100); bronze OA; no local PDF

[^zarulli2018reply]: doi:10.1073/pnas.1801481115 · Zarulli V, Christensen K, Vaupel JW · "Reply to Delanghe et al.: Iron status is not likely to play a key role in the gender survival gap under extreme conditions" · *PNAS* 115(16) · 2018 · the authors rebut the iron-hypothesis interpretation of the extreme-mortality data

[^lemaitre2020]: doi:10.1073/pnas.1911999117 · Lemaître JF, Ronget V, Tidière M, et al. (14 authors) · "Sex differences in adult lifespan and aging rates of mortality across wild mammals" · *PNAS* 117(15):8546–8553 · 2020 · comparative analysis · n=134 wild mammal populations across 101 species · female median lifespan exceeded male in majority of populations; average female advantage ~18.6%; no consistent sex difference in actuarial senescence rate across species · 282 citations; FWCI 20.4 (citation_percentile 100); bronze OA; no local PDF

[^horvath2016]: doi:10.1186/s13059-016-1030-0 · Horvath S, Gurven M, Levine ME, et al. (21 authors) · "An epigenetic clock analysis of race/ethnicity, sex, and coronary heart disease" · *Genome Biology* 17:171 · 2016 · observational cross-sectional, 7 racial/ethnic groups · men show higher intrinsic epigenetic aging rates than women in blood, saliva, and brain · 759 citations; FWCI 35.2 (citation_percentile 100); gold OA; no local PDF

[^marais2018]: doi:10.1186/s13293-018-0181-y · Marais GAB, Gaillard JM, Vieira C, Plotton I, Sanlaville D, Gueyffier F, Lemaître JF · "Sex gap in aging and longevity: can sex chromosomes play a role?" · *Biology of Sex Differences* 9:33 · 2018 · review · synthesizes unguarded-X, toxic-Y, Y-loss, and mother's-curse mechanisms as contributors to the sex gap · 135 citations; FWCI 14.2 (citation_percentile 100); gold OA; no local PDF

[^muyle2021]: doi:10.1098/rstb.2020.0124 · Muyle A, Bachtrog D, Marais GAB, Turner JM · "Epigenetics drive the evolution of sex chromosomes in animals and plants" · *Phil Trans R Soc B* 376(1826) · 2021 · review · Y heterochromatin loss with aging activates transposable elements and may contribute to lower male longevity; mechanistic detail on sex-chromosome aging

[^camus2012]: doi:10.1016/j.cub.2012.07.018 · Camus MF, Clancy DJ, Dowling DK · "Mitochondria, maternal inheritance, and male aging" · *Current Biology* 22(18):1717–1721 · 2012 · experimental; *Drosophila melanogaster* · mtDNA haplotypes affect male aging specifically, consistent with mother's curse (selective filter removes female-harming mt variants only); direct human extrapolation not established · 211 citations; bronze OA; no local PDF

[^watson2022]: doi:10.1098/rspb.2022.1211 · Watson ET, Flanagan BA, Pascar JA, Edmands S · "Mitochondrial effects on fertility and longevity in *Tigriopus californicus* contradict predictions of the mother's curse hypothesis" · *Proc Biol Sci* 289 · 2022 · experimental; marine crustacean · mitonuclear incompatibility disadvantaged females, not males — contradicts mother's curse prediction; illustrates organism-specificity of the mechanism · 10 citations; green OA

[^ongel2021]: doi:10.1016/j.clnu.2020.07.030 · Öngel ME, Yıldız C, Akpınaroğlu C, Yilmaz B, Özilgen M · "Why women may live longer than men do? A telomere-length regulated and diet-based entropic assessment" · *Clinical Nutrition* 40(3):1186–1191 · 2021 · modelling/observational synthesis · faster telomere shortening in men cited as major contributor to lifespan estimation difference; note: modelling study, not direct longitudinal measurement

[^verbrugge1989review]: doi:10.2307/2136740 · Verbrugge LM · "The twain meet: empirical explanations of sex differences in health and mortality" · *J Health Social Behav* 30(3):282–304 · 1989 · review; classic framing of the health-survival paradox showing women report more morbidity and disability despite lower mortality · #gap/no-fulltext-access (older paper; verify if citing quantitative claims)

[^pmid39137103]: doi:10.1097/GME.0000000000002412 · "Sex differences in all-cause mortality and life span between women with premature menopause and men" · *Menopause* 2024 · observational; premature ovarian insufficiency cohort · women with premature menopause have substantially elevated all-cause mortality, approaching male rates; consistent with estrogen-protection partial mechanism; confounding by underlying pathology not fully resolved
