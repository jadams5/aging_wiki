---
type: hypothesis
aliases: [androgen-longevity hypothesis, castration-longevity hypothesis, testosterone-lifespan tradeoff, eunuch longevity hypothesis]
proposed-by: [Hamilton JB, Mestler GE]
proposed-year: 1969
status: contested
treatment-mode: evidence-aggregating
key-evidence-for:
  - "[[studies/hamilton-mestler-1969-eunuchs-mortality]]"
  - "[[studies/min-2012-korean-eunuchs-lifespan]]"
key-evidence-against: []   # Le Bourg 2015 critique (doi:10.1159/000435854) disputes Min 2012 — no dedicated study page yet; Nieschlag 2003 (voice-type proxy study) provides only indirect/conflicting signal
related-hallmarks:
  - "[[hallmarks/altered-intercellular-communication]]"
  - "[[hallmarks/chronic-inflammation]]"
  - "[[hallmarks/epigenetic-alterations]]"
related-hypotheses:
  - "[[hypotheses/antagonistic-pleiotropy]]"
  - "[[hypotheses/disposable-soma-theory]]"
  - "[[hypotheses/female-longevity-advantage]]"
literature-checked-through: 2026-06-04
verified: true
verified-date: 2026-06-04
verified-by: claude
verified-scope: "Mode A synthesis MOC — all load-bearing evidence-for claims trace to verified primary sources. Full-text-verified 2026-06-04: Min 2012 (eunuch lifespans), Garratt 2021 (mouse castration lifespan, PMC8190203), Sugrue 2021 (castration epigenetic-clock deceleration, eLife). Garratt 2026 (Nature) is permanently closed-access (no OA/PMC/preprint route exists — confirmed) — its four claims are abstract-verified only; quantitative effect sizes remain #gap/no-fulltext-access. Hamilton-Mestler 1969 primary PDF closed-access — figures (69.3 vs 55.7 yr) cross-checked via Min 2012. Evidence-against (Le Bourg 2015 critique, Nieschlag 2003) are closed-access, documented at body level (not as study-page wikilinks); key-evidence-against frontmatter remains [] pending dedicated study pages — residual Mode-A schema gap."
---

> **Verification (2026-06-04):** Verified with documented scope. Full-text-verified primaries: [[studies/min-2012-korean-eunuchs-lifespan]], Garratt 2021 (PMC8190203), Sugrue 2021 (eLife). **Garratt 2026 (*Nature*) is permanently closed-access** — no OA, PMC, or preprint copy exists by any route (confirmed) — so its claims are abstract-verified only and effect sizes are `#gap/no-fulltext-access`. Hamilton-Mestler 1969 is cross-checked via Min 2012 (its primary PDF is closed). See `verified-scope` for the full breakdown.

# Androgen Deprivation and Male Longevity Hypothesis

## The claim

Reduced lifetime exposure to endogenous androgens — principally testosterone — extends male lifespan. The claim is supported by two historical natural-experiment datasets (institutionalized eunuchs and Korean court eunuchs), directionally consistent animal data, and the mechanistic plausibility that testosterone drives oxidative stress, inflammatory tone, and immune-suppressive effects harmful over a lifetime. The claim is **contested** because both human datasets are small, confounded, and unreplicated; a 2015 formal critique argues the best human data are insufficient to establish the effect; and androgen deprivation carries clear costs (bone loss, muscle atrophy, metabolic disruption, cognitive effects) that complicate a simple longevity-benefit framing.

## Status: contested

Both human datasets are directionally consistent and each has been independently cited as supporting evidence, but neither has been replicated in a modern controlled cohort, both are small-n historical records, and the sole published critical reanalysis (Le Bourg 2015 [^lebourg2015]) disputes whether the data establish statistical significance. Animal data — including a 2026 *Nature* meta-analysis of sterilization and lifespan across vertebrates [^garratt2026] — more robustly support a gonadal-androgen effect on male lifespan, but rodent and companion-animal castration models include confounders that are not specific to testosterone removal (e.g., altered reproductive behavior, stress from female access, surgery itself).

The hypothesis is therefore best described as **plausible, directionally consistent across multiple evidence streams, but not yet established at human population level**.

## Key predictions

The hypothesis predicts:

1. Males castrated pre-pubertally should live longer on average than age-matched intact males of the same socioeconomic status.
2. The lifespan advantage should scale with duration of androgen deprivation (earlier castration → greater benefit).
3. Testosterone replacement in eunuchs should partially or fully reverse the lifespan advantage.
4. Pharmacological androgen deprivation in aging men (as in prostate cancer treatment) should, after controlling for the underlying disease, show a longevity signal.
5. Mechanisms of harm (oxidative stress, inflammatory signaling, immune suppression) should be demonstrable at physiological androgen concentrations in aged males.

Predictions 1 and 2 have partial support from historical data. Predictions 3, 4, and 5 lack definitive human evidence. See "Limitations and gaps" below.

---

## Human natural-experiment evidence (evidence for)

### Hamilton & Mestler 1969 — institutionalized eunuchs

The foundational study is Hamilton & Mestler 1969 [^hamilton1969], which analyzed mortality records of castrated men residing in a US institution for the intellectually disabled alongside intact men and women from the same institution. Per widely-cited secondary accounts:

- Castrated men survived substantially longer than intact men — **13.6 years** (mean age at death 69.3 yr castrated vs 55.7 yr intact men, as quoted by Min 2012, which had access to the primary figures).
- Women in the same institution showed survival comparable to or intermediate between castrated men and intact men.
- The institutional design was explicitly chosen to control for socioeconomic status, diet, and healthcare access.

**Caveats:** The institutional population with intellectual disability is not generalizable. Castration in this cohort included trauma- and disease-related gonadal loss alongside elective surgical cases — creating selection confound. Full text is paywalled; exact n, statistical analyses, and survival curves have not been verified against the primary PDF. See [[studies/hamilton-mestler-1969-eunuchs-mortality]] (verified: false; #gap/no-fulltext-access).

### Min, Lee & Park 2012 — Korean Joseon court eunuchs

Min et al. 2012 [^min2012] analyzed genealogical records of 81 Joseon court eunuchs castrated in boyhood and compared their lifespans to intact male aristocrats of the same era. Reported findings from secondary accounts:

- Eunuchs lived **14.4–19.1 years longer** on average (mean eunuch lifespan 70.0 ± 1.76 yr) than intact male aristocrats of three comparator clans (Mok n=1,126; Shin n=1,414; Seo n=49).
- Three of 81 eunuchs (3.7%) survived past age 100 (ages 100, 101, 109) — a centenarian rate the authors estimate is ≥130× that of present-day developed nations, and far above the kings (47.0 ± 3.21 yr) and male royal family (45.0 ± 2.79 yr) of the same era.
- Noble social status of the comparator group was intended to control for socioeconomic confound.

**Caveats:** Published as a letter with no abstract — condensed methods and limited statistical reporting. n=81 is exceptionally small for a longevity study. Le Bourg 2015 [^lebourg2015] formally disputed the statistical basis of the lifespan-advantage conclusion. Historical genealogical records carry unquantified age-recording error. Lifestyle of court eunuchs differed from intact men in ways beyond androgen status (dietary, occupational, role-specific stressors). Full text is paywalled. See [[studies/min-2012-korean-eunuchs-lifespan]] (verified: false; #gap/no-fulltext-access).

### Critical reanalysis: Le Bourg 2015

Le Bourg 2015 [^lebourg2015] published a formal critique arguing: (1) the n is too small for reliable inference; (2) the comparator group selection in Min 2012 is inadequately justified; (3) historical age recording error in centenarian counts is not accounted for; and (4) the data do not provide adequate statistical grounds to claim a lifespan advantage. This critique has not been formally rebutted in the literature and must be weighed against the original finding. #gap/contradictory-evidence

---

## Animal and epigenetic evidence (evidence for, with caveats)

### Garratt, Try & Brooks 2021 — early castration in male mice

Garratt et al. 2021 [^garratt2021] conducted a 2×2 factorial lifespan study in male mice (C57BL/6Jausb; n=32/27/36/27 across groups) crossing castration status (intact vs castrated at 7 weeks) with social environment (male cage-mates vs female access). Key findings:

- **Castration or access to females individually extended maximal but not median lifespan.** On the 90%-mortality timepoint (the age by which 90% of the cohort had died — i.e., top-decile survivorship), castration added ~87 days vs intact male-housed controls (Fisher's exact P=0.026) and female access added ~84 days (P=0.039); the two did **not** compound (castrated+female vs castrated-only P=0.351).
- Neither factor influenced **median** survival (Cox: castration P=0.632; social environment P=0.883).
- In females, mating access significantly reduced **overall** survival (log-rank P=0.034) — note this is the *opposite* pattern from males (an overall/median effect, not a maximal-lifespan effect).

**Weight and caveats:** Mouse study; the male benefit is on maximal rather than median lifespan — a narrower endpoint. The design conflated reproductive experience (female access) with androgen removal, making mechanism interpretation complex; female partners were replaced at 300 days, so female access was not lifelong same-partner exposure. Androgen deprivation via castration is a blunt intervention that also removes paracrine testicular factors beyond testosterone. See [[studies/garratt-2021-castration-maximal-lifespan-mice]] (stub — needs seeding). #gap/needs-human-replication

### Garratt et al. 2026 — vertebrate meta-analysis of sterilization and lifespan

A 2026 *Nature* meta-analysis by Garratt et al. [^garratt2026] — the most comprehensive synthesis of the topic to date — examined lifespan effects of surgical sterilization and hormonal contraception across vertebrates using multiple evidence streams:

- **Sterilization is associated with increased life expectancy** across both sexes in vertebrates broadly.
- **Castrated males show stronger lifespan benefits than females after sterilization**, with effects most pronounced when surgery is pre-pubertal.
- In males, the survival benefit is **restricted to surgical castration** — hormonal contraception did *not* improve male survival (whereas females benefit from both methods), underscoring that the male effect is androgen-removal-specific rather than a generic gonadal-hormone effect.
- Meta-analyses show **improved survival with sterilization across vertebrates** in laboratory and wild environments.
- **Gonadectomized rodents show increased healthspan.**
- Notably, **survival of women is slightly decreased after permanent surgical sterilization** — a reversal of the male-benefit pattern, suggesting the mechanisms are sex-specific and not simply about removing "gonadal hormones" generically.

This is high-weight evidence for the male-specific androgen-deprivation-longevity pathway. **Design:** a hybrid of primary zoo/aquarium-mammal cohort survival analysis plus complementary cross-vertebrate meta-analyses (not a pure meta-analysis). **Caveats:** the pooled sources span different organisms, castration methods, ages of sterilization, and environmental contexts. The female-decreased-survival result challenges a simple "sex hormones shorten lifespan" account and implicates testosterone specifically (rather than gonadal hormones generally) as the life-shortening factor in males. **Full text is permanently closed-access** — confirmed 2026-06-04 that no OA, PMC, or preprint copy exists by any route — so all four claims above are abstract-verified only and quantitative effect sizes (hazard ratios, the pre-pubertal-gradient magnitude) remain unconfirmed. #gap/no-fulltext-access (Garratt 2026)

### Sugrue et al. 2021 — castration delays epigenetic aging in sheep and mice

Sugrue et al. 2021 [^sugrue2021] used DNA methylation clocks to show (primary model: **sheep**):

- Castrated male **sheep** showed a **decelerated epigenetic aging rate** vs intact males — on average **3.1 months** of epigenetic-age deceleration in sexually mature animals (≥18 months; p=0.018, Mann–Whitney U; n=61 intact / 63 castrated), measured with a purpose-built 185-CpG sheep clock (**not** the human Horvath 353-CpG clock).
- Androgen-sensitive CpG dinucleotides that undergo progressive hypomethylation with age in intact males remain **stable in castrated males and females** (MKLN1, ETAA1, LMO4, KIAA2026). The mouse and bat-skin data confirm *conservation* of these androgen-sensitive sites across species — they do **not** independently demonstrate a clock-based aging-rate deceleration (that result is sheep-specific).
- Castration "feminizes" the methylation pattern at androgen-regulated loci — suggesting androgens drive male-specific epigenetic aging trajectories.

This is mechanistic evidence connecting androgen removal to a measurable molecular aging rate. **Caveats:** the clock-deceleration result is sheep-specific; human translation not confirmed; epigenetic clock changes correlate with but are not identical to lifespan extension. The authors themselves caution that the methylation changes "may not promote aging per se" and may simply track cumulative androgen exposure rather than causally drive lifespan. See [[biomarkers/horvath-clock-2013]] for clock methodology context. #gap/needs-human-replication

---

## Evidence qualifying or opposing the hypothesis (evidence against / complicating)

### The castrati singers study: voice-type as androgen proxy

Nieschlag, Kramer & Nieschlag 2003 [^nieschlag2003] examined lifespan by vocal category — using voice type as a proxy for sex hormone exposure — in opera singers. Sopranos (more estrogenized) lived significantly longer than altos (more androgenized), while basses showed a tendency toward longer life than tenors. This is **indirect supporting evidence** for the androgenic-harm framing in women (more androgen → shorter life). For men, the finding was that more androgenized voice (bass) trended toward *longer* life than less androgenized (tenor) — which is **opposite to the eunuch-longevity prediction** in the male direction, though described as a trend rather than a significant result. Voice category is a poor proxy for testosterone levels; this study is low-weight and the sample is occupationally selected. #gap/needs-replication

**Critical note:** There is no confirmed, peer-reviewed study specifically examining the lifespan of historical castrati singers as a dedicated natural experiment. Literature searches for "castrati longevity" or "castrati lifespan" returned no relevant papers beyond the Nieschlag 2003 voice-category study and a handful of musicological reviews. This gap means the "castrati as null counter-evidence" claim sometimes cited in popular accounts is not grounded in a published primary analysis.

### Testosterone's beneficial effects in aging men

The testosterone compound page [[molecules/compounds/testosterone]] (verified) documents substantial evidence that normal-physiological testosterone levels in aging men protect against:
- Cardiovascular disease (the TRAVERSE trial 2023 [^traverse2023] showed TRT in hypogonadal men with elevated cardiovascular risk was non-inferior to placebo on major cardiovascular events over ~33 months)
- Bone mineral density loss
- Sarcopenia and functional decline
- Metabolic syndrome components

This evidence suggests that physiological testosterone is NOT harmful in aging men and may be beneficial — which would contradict a simple "testosterone shortens lifespan" narrative. The reconciliation is that the eunuch-longevity hypothesis concerns **lifetime elimination of testosterone from youth**, not adult TRT to restore physiological levels. The two interventions are biologically distinct.

### ADT in prostate cancer does not provide clean human evidence

Androgen deprivation therapy (ADT) for prostate cancer — the closest modern analogue to castration in men — cannot provide clean evidence about testosterone and lifespan because:
1. The underlying malignancy is a lethal competing-risk factor.
2. ADT is associated with accelerated cardiovascular disease, bone loss, metabolic syndrome, and cognitive effects in the cancer context.
3. The patient population is selected for prostate cancer rather than healthy aging.

No study design in cancer populations can cleanly test whether androgen deprivation in healthy men would extend lifespan, because ADT's net effect in cancer patients aggregates anti-tumor benefits, bone/metabolic harms, and disease-course effects.

### The antagonistic pleiotropy framing

[[hypotheses/antagonistic-pleiotropy]] predicts that testosterone should confer large early-life fitness benefits (muscle mass, aggression, dominance, sperm production, secondary sex characters) that were positively selected despite late-life costs. Under this framing, the eunuch-longevity hypothesis is not surprising — it is the *expected outcome* of removing an AP allele's early-benefit, late-cost tradeoff. However, AP alone doesn't predict the magnitude of the lifespan extension or tell us whether modern testosterone levels (which have changed from ancestral levels due to dietary and environmental shifts) still carry the same AP cost profile.

---

## Proposed mechanisms (hypothesis-level; not yet established as causal)

Several mechanisms have been proposed to explain how testosterone might shorten male lifespan. These are mechanistically plausible but most lack direct causal human evidence:

### 1. Immune suppression

Testosterone suppresses multiple branches of innate and adaptive immunity — consistent with the well-documented sex difference in immune response where women mount stronger antibody and cellular immune responses [^female2018]. Weaker male immunity would disadvantage survival under infectious mortality historically and is consistent with the Zarulli 2018 infant-sex-advantage data under epidemics (see [[hypotheses/female-longevity-advantage]]). Direct evidence that testosterone-driven immune suppression drives longevity differential: not established causally. #gap/no-mechanism

### 2. Oxidative stress burden

Testosterone at supraphysiological and high-physiological concentrations may increase reactive oxygen species (ROS) production — consistent with the general frame that anabolic hormones driving tissue growth also drive mitochondrial respiration and ROS generation. However, at normal physiological concentrations the oxidative-stress effect of testosterone is contested, and many studies show anti-oxidant properties of moderate testosterone. #gap/contradictory-evidence

### 3. Epigenetic aging acceleration (supported by Sugrue 2021)

Sugrue et al. 2021 [^sugrue2021] demonstrate that androgens drive male-specific methylation changes at androgen-regulated CpGs — providing a molecular mechanism for why intact males age epigenetically faster than females or castrates. This links the androgen-deprivation-longevity hypothesis directly to the epigenetic aging field and to the male-faster-epigenetic-aging finding in Horvath et al. 2016 (see [[hypotheses/female-longevity-advantage]] § Epigenetic clock section). #gap/needs-human-replication

### 4. Cardiovascular remodeling

High-androgen milieu drives left ventricular hypertrophy, altered lipid profiles (lower HDL, higher LDL), and vascular smooth muscle changes. In aggregate these elevate cardiovascular mortality. This is the most clinically validated pathway — the sex difference in cardiovascular disease rates before age 65 is partially explained by androgen-driven cardiovascular risk. See [[molecules/compounds/testosterone]] for the evidence base. This mechanism likely contributes to the sex-mortality gap even if it is not the sole driver. #gap/contradictory-evidence (TRAVERSE showed TRT does not increase MACE in hypogonadal men; the developmental/lifetime exposure question is different)

---

## Connection to the female longevity advantage

The androgen-deprivation-longevity hypothesis is best understood as the male face of the broader [[hypotheses/female-longevity-advantage]] question. Women live longer than men across virtually all populations and historical periods. The eunuch data suggest that removing androgens in men *narrows the gap* (eunuchs reportedly lived closer to female lifespans than intact men do). This is consistent with androgen exposure being one contributor to male-specific excess mortality — but only one contributor among several, since:
- Eunuchs still do not appear to have survived to the same mean ages as women.
- The female longevity advantage includes multiple mechanisms (X-chromosome buffering, immune differences, epigenetic sex differences) that operate independently of estrogen/testosterone levels.

See [[hypotheses/female-longevity-advantage]] for the full multi-mechanism account.

---

## What would update this hypothesis

1. **Independent replication in a modern cohort.** If a contemporary country with historical records of large-scale castration (e.g., harem eunuchs in Ottoman records, Chinese imperial records) were analyzed with modern survival statistics, a replication of the Hamilton/Min finding would substantially strengthen the case.

2. **ADT natural experiment with long follow-up in non-cancer men.** If future cohort studies on men who received pharmacological ADT for non-cancer indications (e.g., severe testosterone-driven behavioral disorders) could be assembled with 20+ year follow-up, survival analysis could test the human lifespan prediction without the competing-risk problem of cancer.

3. **Mechanistic RCT.** A short-term RCT reducing testosterone to castration levels in aging men and measuring epigenetic aging clocks, biomarkers of oxidative stress, immune function, and inflammation would provide mechanistic evidence without requiring a lifespan endpoint. Sugrue 2021's sheep/mouse epigenetic clock data suggest this is tractable.

4. **MR evidence.** Mendelian randomization using instruments for lifetime androgen exposure (testosterone GWAS instruments) against mortality outcomes in large biobanks (UK Biobank, FinnGen) could provide causal human evidence without natural-experiment cohorts. A negative MR result in men would substantially weaken the hypothesis. **Partly addressed for *disease* outcomes:** two UK Biobank MR studies now show genetically-higher testosterone causally increases prostate cancer, hypertension and hematocrit in men with no cardiovascular benefit [[studies/ruth-2020-testosterone-mr-disease]] [[studies/mohammadi-shemirani-2020-testosterone-mr-elife]] — directionally consistent with a somatic cost of androgen exposure — but **neither tested longevity, frailty, or all-cause mortality**, so the lifespan endpoint specifically remains #gap/not-yet-done. See [[molecules/compounds/testosterone]] § *Mendelian randomization* and § *Testosterone, mTOR, and the rate of aging* for the full causal-evidence synthesis.

5. **Garratt 2026 full-text review.** Confirming the effect size estimates and sex-specificity of sterilization effects from the vertebrate meta-analysis against primary data is a near-term verification priority.

---

## Related hypotheses

- [[hypotheses/antagonistic-pleiotropy]] — testosterone's early-life fitness benefits (growth, reproduction, dominance) at the cost of late-life longevity is a textbook AP example; the eunuch data support the AP prediction.
- [[hypotheses/disposable-soma-theory]] — testosterone-driven investment in reproduction (muscle, aggression, mate-seeking) comes at the expense of somatic maintenance — a resource-allocation version of the same trade-off.
- [[hypotheses/female-longevity-advantage]] — the female side of the same sex-differential phenomenon; androgen removal in men may be one mechanism narrowing the sex-longevity gap.

## Related hallmarks

- [[hallmarks/altered-intercellular-communication]] — testosterone is a major endocrine signaling molecule; its deprivation reshapes intercellular hormonal communication broadly.
- [[hallmarks/chronic-inflammation]] — testosterone has immunosuppressive and anti-inflammatory effects; eunuchs show different immune profiles (though whether this extends lifespan via reduced inflammaging is not established).
- [[hallmarks/epigenetic-alterations]] — Sugrue 2021 shows androgens drive male-specific epigenetic aging trajectory at androgen-regulated CpGs.

## Related entities

- [[molecules/compounds/testosterone]] (verified) — androgen biology, TRAVERSE trial, aging effects
- [[cell-types/leydig-cells]] — testicular source of testosterone
- [[phenotypes/andropause]] — the normal age-related decline in testosterone in men; distinct from castration
- [[tissues/testis]] — primary androgen-producing organ

---

## Limitations and gaps

#gap/contradictory-evidence — The Le Bourg 2015 critique disputes the statistical basis of the Min 2012 finding. No published rebuttal exists.
#gap/needs-replication — No modern, adequately powered cohort study of castrated men and longevity outcomes exists. Both human datasets are historical small-n records.
#gap/no-fulltext-access — Hamilton & Mestler 1969 (closed access); Min 2012 (closed access; no abstract); Garratt 2026 (closed access). Quantitative claims in this page rely on secondary accounts.
#gap/no-mechanism — Proposed mechanisms (immune suppression, oxidative stress, epigenetic acceleration) are plausible but not proven causal in humans.
#gap/needs-human-replication — Animal and sheep epigenetic evidence from Sugrue 2021 has not been replicated in human castrate cohorts.
#gap/stub — [[studies/garratt-2021-castration-maximal-lifespan-mice]] — needs seeding as a full study page.
#gap/stub — [[studies/garratt-2026-sterilization-vertebrate-lifespan]] — needs seeding; this 2026 Nature paper is the most important recent synthesis.

---

## Footnotes

[^hamilton1969]: [[studies/hamilton-mestler-1969-eunuchs-mortality]] · n=large institutional cohort (exact n unconfirmed; #gap/no-fulltext-access) · observational · doi:10.1093/geronj/24.4.395 · PMID: 5362349 · institutional US cohort of castrated and intact men with intellectual disability; castrated men survived 13.6 yr longer (mean age at death 69.3 vs 55.7 yr, figures quoted by Min 2012); primary PDF closed-access/unverifiable, numbers cross-checked via Min 2012; 253 citations

[^min2012]: [[studies/min-2012-korean-eunuchs-lifespan]] · n=81 eunuchs · observational, letter · doi:10.1016/j.cub.2012.06.036 · PMID: 23017989 · Joseon dynasty (1392–1910) genealogical records; n=81 eunuchs (of 385 in the Yang-Se-Gye-Bo registry) with identifiable lifespans; mean lifespan 70.0 ± 1.76 yr, 14.4–19.1 yr longer than intact aristocrats (Mok/Shin/Seo clans); 3/81 centenarians (100, 101, 109); disputed by Le Bourg 2015; full PDF verified 2026-06-04; 169 citations (bronze OA)

[^lebourg2015]: doi:10.1159/000435854 · Le Bourg É · "No Ground for Advocating that Korean Eunuchs Lived Longer than Intact Men" · *Gerontology* 62(1):69–70 · 2015 · letter/commentary · formal statistical critique of Min 2012; n dispute; comparator selection concern; 5 citations; no local PDF

[^garratt2021]: doi:10.1007/s11357-020-00308-8 · Garratt M, Try H, Brooks RC · "Access to females and early life castration individually extend maximal but not median lifespan in male mice" · *GeroScience* 2021;43(3):1437–1446 · PMID:33420707 · in-vivo 2×2 factorial · model: male mice C57BL/6Jausb (n=32/27/36/27) · castration +87 d and female access +84 d on the 90%-mortality timepoint (Fisher P=0.026 and 0.039); no median effect (Cox P=0.632/0.883); effects non-additive; in females mating reduced overall survival (log-rank P=0.034) · green OA (PMC8190203); **full text verified 2026-06-04**

[^garratt2026]: doi:10.1038/s41586-025-09836-9 · Garratt M, Lagisz M, Staerk J, et al. (incl. Colchero F, Nakagawa S) · "Sterilization and contraception increase lifespan across vertebrates" · *Nature* 2026;649(8099):1264–1272 · PMID:41372417 · hybrid zoo/aquarium-mammal cohort survival analysis + complementary cross-vertebrate meta-analyses · sterilization increases life expectancy in both sexes; in males the benefit is restricted to (pre-pubertal-stronger) surgical castration, not hormonal contraception; women's survival slightly decreased after permanent surgical sterilization; increased healthspan in gonadectomized rodents · **permanently closed access — no OA/PMC/preprint route exists (confirmed 2026-06-04); claims abstract-verified only, quantitative effect sizes unverifiable** · #gap/no-fulltext-access

[^sugrue2021]: doi:10.7554/eLife.64932 · Sugrue VJ, Zoller JA, Narayan P, … Hore TA, Horvath S (17 authors) · "Castration delays epigenetic aging and feminizes DNA methylation at androgen-regulated loci" · *eLife* 2021;10:e64932 · PMID:34227937 · in-vivo epigenetic clock analysis · primary model: sheep (185-CpG purpose-built clock; not Horvath 353-CpG); mouse + bat-skin show conservation of androgen-sensitive CpGs only · castrated male sheep decelerate epigenetic aging ~3.1 mo (p=0.018, Mann–Whitney U; n=61 intact/63 castrated, ≥18 mo); androgen-sensitive CpGs (MKLN1/ETAA1/LMO4/KIAA2026) hypomethylate with age in intact males but stay stable in castrates + females; authors caution changes "may not promote aging per se" · gold OA; **full text verified 2026-06-04**

[^nieschlag2003]: doi:10.1055/s-2003-40468 · Nieschlag E, Kramer U, Nieschlag S · "Androgens shorten the longevity of women: sopranos last longer" · *Exp Clin Endocrinol Diabetes* 111(4):230–231 · 2003 · observational, voice-category analysis · sopranos (more estrogenized) lived significantly longer than altos (more androgenized) in women; no statistically significant castrati-specific survival advantage confirmed; 12 citations; closed access

[^traverse2023]: [[molecules/compounds/testosterone]] (verified) · Lincoff AM, Bhasin S, Flevaris P, et al. · "Cardiovascular safety of testosterone-replacement therapy" · *NEJM* 389(2):107–117 · 2023 · RCT · TRAVERSE: TRT in hypogonadal men with high CV risk non-inferior to placebo on MACE over ~33 months; n=5,246 · doi:10.1056/NEJMoa2215025

[^female2018]: doi:10.1186/s13293-018-0187-5 · Vázquez-Martínez ER, García-Gómez E, Camacho-Arroyo I, González-Pedrajo B · "Sexual dimorphism in bacterial infections" · *Biology of Sex Differences* 9:27 · 2018 · review · testosterone mediates immune suppression via receptor-mediated mechanisms; female estradiol confers pro-inflammatory advantages; sex-dimorphic immunity is one candidate mechanism for sex-differential longevity; 159 citations; gold OA
