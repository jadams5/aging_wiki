---
type: intervention
aliases: [AMPK activators, AMPK agonists, biguanides, indirect AMPK activators]
mode: pharmacological
mechanisms: [ampk-activation, mtor-inhibition, autophagy-induction, atp-amp-ratio-modulation]
targets: ["[[ampk]]"]
target-hallmarks: ["[[deregulated-nutrient-sensing]]", "[[disabled-macroautophagy]]", "[[mitochondrial-dysfunction]]"]
target-pathways: ["[[ampk]]"]
human-evidence-level: limited
clinical-stage: phase-3
safety-profile: well-established
translation-gap: phase-3-rct-needed
next-experiment: "TAME (Targeting Aging with Metformin) — design paper Barzilai 2016, ~3000-person Phase 3 in non-diabetic 65–79 yr olds. Not currently ClinicalTrials.gov-registered (NCT02432287 = MILES n=16 not TAME; verified 2026-05-08). Alternative: CR-mimetic combination trial (metformin + rapamycin) with a validated biological-age clock as primary endpoint."
clinical-trials-active: 1
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Martin-Montalvo 2013, UKPDS 34 (1998), Cabreiro 2013, Barzilai 2016, Foretz 2014, Hardie 2012 verified against primary-source PDFs. Bannister 2014 (not_oa) and Myers 2017 (not_oa) verified to abstract-level only via Barzilai 2016 cross-reference and wiki footnote metadata; full-text unverifiable. R34 recency adds (2026-05-08): Ivimey-Cook 2025 (10.1111/acel.70131) integrated via metformin-page footnote (canonical source); Altintas/MacArthur 2026 (doi:10.64898/2026.04.21.719899; PMID 42079053; bioRxiv preprint) abstract-verified via PubMed — first report that direct allosteric AMPK activator MK-8722 extends *C. elegans* lifespan AMPK-dependently and improves aged-mouse healthspan, recalibrating the prior 'direct activators clinically stalled' framing."
---

# AMPK activators

A pharmacological class that activates **AMP-activated protein kinase (AMPK)** — the cell's master energy-stress sensor — either **directly** (by allosteric binding to the kinase complex) or **indirectly** (by altering the AMP:ATP ratio or acting upstream of LKB1). Downstream consequences of AMPK activation include suppression of [[mtor|mTOR signaling]], induction of [[autophagy]], enhanced mitochondrial biogenesis, and inhibition of lipogenesis and gluconeogenesis. Because AMPK activity declines with age and its activation phenocopies many longevity benefits of [[caloric-restriction]], the class is of major interest as a geroprotector. [[metformin]] is the anchor compound: it has decades of human safety data, robust observational signals for reduced all-cause mortality, and is the subject of the pivotal **TAME** Phase 3 trial.

This page covers the **drug class as a whole**. Compound-specific data lives in `molecules/compounds/`:

- [[metformin]] (verified) — biguanide; T2D first-line drug; TAME trial pending
- [[berberine]] (planned) — isoquinoline alkaloid; substantial Chinese pharmacology literature

## Direct vs indirect activators

The class divides into two mechanistically distinct sub-categories:

| Sub-class | Mechanism | Examples |
|---|---|---|
| **Indirect activators** | Raise intracellular AMP:ATP ratio (usually by partial mitochondrial Complex I inhibition) or act upstream of LKB1 to increase Thr172 phosphorylation | Metformin, phenformin, berberine, salicylate / aspirin |
| **Direct allosteric activators** | Bind the allosteric activator site at the α/β subunit interface; activate independently of nucleotide ratio | A-769662, 991, MK-8722, PT-1 |
| **AMP mimetics** | Synthetic adenosine analogues that are phosphorylated intracellularly to AICAR (ZMP), which mimics AMP at γ-subunit binding sites | AICAR (5-aminoimidazole-4-carboxamide riboside) |

**Clinical implication:** all approved compounds and those with human aging data are indirect activators. Direct activators have historically been treated as research tools or failed preclinical candidates following the MK-8722 cardiac-hypertrophy program halt (see §Safety below); however, a 2026 preprint (Altintas, MacArthur et al.) [^altintas2026] reports that MK-8722 extends *C. elegans* lifespan AMPK-dependently and improves aged-mouse healthspan (reduced fat accumulation, blocked decline in fasting glucose, enhanced circadian respiratory quotient) at doses that did not produce overt cardiac toxicity in the murine cohort, partially relitigating the "direct activators are clinically dead" framing. The 2017 cardiac-hypertrophy signal in dogs and NHPs remains unresolved; MK-8722's gerotherapeutic window relative to cardiac safety in larger species needs explicit characterization. #gap/contradictory-evidence #gap/needs-replication

## Compound table

| Compound | Class | Clinical stage | Aging-relevant evidence | Notes |
|---|---|---|---|---|
| **[[metformin]]** | Biguanide (indirect) | FDA-approved (T2D) | Bannister 2014 mortality observational; Martin-Montalvo 2013 mouse lifespan; TAME Phase 3 pending | Anchor compound; most human data |
| **AICAR** | AMP mimetic | Research tool only | Lifespan extension in *C. elegans* | Not clinically usable; poor bioavailability and off-target effects |
| **[[berberine]]** | Alkaloid (indirect) | Consumer supplement | LDL-C ↓~20%; HbA1c ↓~0.5–1.0% in T2D; Chen 2020 CBAR RCT n=891 — adenoma recurrence RR 0.77; Tan 2025 6-yr followup adjusted HR 0.58 for any adenoma but null for advanced; BRAVO 2026 negative for adiposity in MASLD | Shares metformin's Complex I → AMPK chassis but **dominant clinical evidence is post-transcriptional LDLR mRNA stabilization (Kong 2004) and gut-luminal TMAO axis (Ma 2022)**, not AMPK-mediated. ~0.68% oral bioavailability — acts as a "vitamin-like" luminal agent. See [[berberine]] for full compound page. #gap/needs-human-replication for aging endpoints |
| **Salicylate / aspirin** | Salicylate (indirect) | FDA-approved (CVD) | Partial AMPK activation via ACC phosphorylation; ASPREE trial negative for disability-free survival in older adults | Weak AMPK activator; primary indication cardiovascular |
| **MK-8722** | Direct allosteric (pan-AMPK) | Preclinical only; development halted | Improved glucose homeostasis in non-human primates | Cardiac hypertrophy in dogs and NHPs at therapeutic doses; program abandoned [^myers2017] |
| **PT-1** | Direct allosteric (α1-selective) | Research tool | In-vitro AMPK activation | Not progressed clinically |
| **A-769662** | Direct allosteric (β1-selective) | Research tool | Widely used in mechanistic studies | Selective for β1-containing complexes; not developed for clinical use |

## Mechanism of action

AMPK is a heterotrimeric kinase (α/β/γ) whose γ subunit contains nucleotide-binding sites that allosterically couple the AMP:ATP ratio to kinase activity. Full mechanistic detail is on [[ampk]]. Briefly:

1. **Energy stress** (rising AMP, falling ATP) → AMP displaces ATP at γ-subunit site 3, protecting Thr172 from dephosphorylation by PP2C/PP2A.
2. **Upstream kinase** (LKB1 or CaMKK2) phosphorylates Thr172, providing the base activity; the AMP-protection step amplifies this ~100-fold into an active state [^hardie2012].
3. **Metformin's indirect route** — Complex I inhibition raises the AMP:ATP ratio in hepatocytes, engaging the canonical AMPK activation mechanism [^foretz2014]. However, Foretz et al. (2014) emphasize that AMPK may not be the primary mediator of metformin's glucose-lowering action: in LKB1-knockout and AMPKα1/α2-knockout hepatocytes, metformin still suppresses gluconeogenesis, implicating AMPK-independent targets including direct AMP-mediated inhibition of fructose-1,6-bisphosphatase and inhibition of mitochondrial glycerophosphate dehydrogenase (mGPD) [^foretz2014]. AMPK activation by metformin is therefore best described as a secondary consequence of energy stress rather than the drug's primary pharmacological action.

**Key downstream substrates for aging biology:**

| Substrate | Phosphorylation site | Effect |
|---|---|---|
| Raptor | Ser722 / Ser792 | Direct mTORC1 inhibition — suppresses anabolic programs |
| TSC2 | Ser1387 | Indirect mTORC1 inhibition via Rheb-GTP depletion |
| ULK1 | Ser317 / Ser555 | Autophagy induction (opposite to mTOR's inhibitory phosphorylation of ULK1) |
| ACC1/2 | Ser79 | Inhibits fatty acid synthesis; activates fatty acid oxidation |
| PGC-1α | Ser538 / Ser179 | Drives mitochondrial biogenesis and ROS defense |

The net effect is a coordinated metabolic switch: suppression of anabolic programs (protein synthesis via mTOR, lipogenesis via ACC) and activation of catabolic/stress-response programs ([[autophagy]], fatty acid oxidation, mitochondrial biogenesis) that overlap substantially with the longevity signature of caloric restriction.

## Aging evidence

### Rodent lifespan

Martin-Montalvo et al. (2013) showed that low-dose metformin (0.1% w/w in diet, initiated at ~6 months of age) extended **mean** lifespan by 5.83% (χ²=5.46, p=0.02, Gehan-Breslow survival test) in male C57BL/6 mice (n=64 metformin, n=83 control), with healthspan improvements (reduced body fat, improved insulin sensitivity, reduced lens opacity) [^martinmontalvo2013]. A second cohort of male B6C3F1 mice showed 4.15% mean lifespan extension (χ²=3.43, p=0.064) — not significant, but consistent in direction. Higher dose (1% w/w) shortened mean lifespan by 14.4% (χ²=51.70, p<0.001), likely due to renal failure from drug accumulation — a hormetic dose-response underscoring the sensitivity of the Complex I mechanism. These studies were conducted exclusively in males; sex generalizability is untested. #gap/needs-human-replication

### Vertebrate meta-analysis (Ivimey-Cook 2025)

Ivimey-Cook et al. (2025, *Aging Cell*) conducted a vertebrate-wide meta-analysis of 911 effect sizes across 167 papers and 8 species comparing dietary restriction, rapamycin, and metformin lifespan effects. **Rapamycin produces statistically significant lifespan extension matching DR magnitude; metformin does not produce a significant vertebrate lifespan extension across the pooled dataset.** The authors note high heterogeneity and significant publication bias as caveats, but the result meaningfully recalibrates the rodent-lifespan evidence base for the indirect-AMPK-activator anchor compound at the class level. See [[metformin]] for full citation [[metformin#Vertebrate meta-analysis]] — the canonical class-level interpretation is that metformin's geroprotective signal in humans rests on observational signals (Bannister 2014) and metabolic-syndrome-secondary outcomes rather than robust preclinical lifespan data. #gap/contradictory-evidence

### Human observational

Bannister et al. (2014) conducted a retrospective cohort study of 78,241 matched triplets (metformin users, sulfonylurea users, matched non-diabetic controls) in the UK Clinical Practice Research Datalink [^bannister2014]. Metformin-treated T2D patients had **lower all-cause mortality** than matched non-diabetic controls (HR 0.85, 95% CI 0.81–0.90) — a striking result given that the non-diabetic group was ostensibly healthier at baseline. Sulfonylurea users had higher mortality than both groups. The result is observational with residual confounding risks (metformin users who tolerate the drug may be a selected healthier sub-population). #gap/needs-human-replication for aging-specific endpoints.

UKPDS 34 (1998) demonstrated that intensive metformin therapy in overweight T2D patients reduced all-cause mortality by 36% (95% CI 9–55%; p=0.011) and diabetes-related death by 42% vs conventional therapy (diet alone) over a median ~10.7 years [^ukpds1998]. The primary metformin vs conventional comparison was n=342 (metformin) vs n=411 (conventional diet); 1,704 was the total overweight patient pool randomized across all intensive-treatment arms (metformin, chlorpropamide, glibenclamide, insulin) plus conventional. This established metformin's cardiovascular and survival benefits beyond glucose lowering.

### Model organisms (non-mouse)

Metformin extends lifespan in *C. elegans* co-cultured with live *E. coli* by 18%, 36%, and 3% at 25, 50, and 100 mM respectively [^cabreiro2013]. Importantly, Cabreiro et al. (2013, *Cell*) demonstrated that this effect requires live bacteria: in axenic (bacteria-free) culture, metformin shortens rather than extends worm lifespan. The mechanism is **food-bacterium-mediated**: metformin inhibits bacterial folate and methionine metabolism in the co-cultured *E. coli*, reducing host methionine availability and mimicking dietary restriction. This is distinct from mammalian gut-microbiome effects — in *C. elegans*, *E. coli* is the worm's sole food source, not a commensal microbiome. Nonetheless, the finding raises the question of whether a fraction of metformin's geroprotective effect in mammals is similarly AMPK-independent and microbiome-dependent, which remains unresolved. #gap/no-mechanism #gap/contradictory-evidence

### TAME trial

The **Targeting Aging with Metformin (TAME)** trial (NCT02432287; PI: Nir Barzilai, Albert Einstein College of Medicine) is the pivotal human proof-of-concept study for geroprotection [^barzilai2016]. Design: ~3000 adults aged 65–79 with two or more age-related comorbidities (cardiovascular disease, cancer, cognitive impairment) or at high risk; treated with metformin 1,500–1,700 mg/day vs placebo; **composite primary endpoint**: time to first occurrence of new major age-related condition (MI, stroke, cancer, dementia, disability, or death). TAME is designed to demonstrate that a drug can slow the biological aging process itself — a regulatory and conceptual precedent that would open the door to FDA approval of geroprotectors as a drug class. Results expected ~2027–2028. As of 2026-05-06, TAME remains ongoing. #gap/long-term-unknown

| Parameter | Value |
|---|---|
| NCT | NCT02432287 |
| Phase | 3 |
| n | ~3000 |
| Age | 65–79 |
| Intervention | Metformin 1500–1700 mg/day |
| Primary endpoint | Composite first age-related condition or death |
| Expected completion | ~2027–2028 |
| Sponsor | American Federation for Aging Research (AFAR) |

## Safety profile

**Metformin (well-established):**
- Most common: GI side effects (nausea, diarrhea, abdominal discomfort) — reported in 10–25% of users; largely dose-dependent and transient. Extended-release formulation reduces GI burden.
- Rare but serious: **lactic acidosis** — incidence ~3/100,000 patient-years; occurs almost exclusively in patients with impaired renal function, hepatic insufficiency, or heart failure where metformin accumulates. Contraindicated in eGFR <30 mL/min/1.73m².
- Long-term: **Vitamin B12 deficiency** — metformin reduces ileal B12 absorption via a calcium-dependent mechanism (estimated 10–30% reduction in serum B12 after years of use); annual monitoring recommended in the TAME protocol and endorsed by Barzilai 2016 [^barzilai2016].
- Drug interactions: iodinated contrast media (hold 48h peri-procedure due to lactic acidosis risk with acute kidney injury).

**Berberine:** Generally well-tolerated at clinical doses (300–500 mg BID-TID; 600–1500 mg/day). GI side effects similar to metformin (mainly constipation in the CBAR trial; diarrhea in lipid-lowering doses). CYP3A4 inhibition is clinically significant — co-administration with simvastatin/atorvastatin raises rhabdomyolysis risk; P-glycoprotein inhibition raises digoxin AUC. **Absolutely contraindicated in pregnancy** (displaces bilirubin from albumin → neonatal kernicterus). The Tan 2025 CBAR-FE 6-year safety dataset is the longest available; no excess SAEs observed. #gap/long-term-unknown for use beyond 6 years. See [[berberine]] for full safety profile.

**Direct allosteric activators (investigational):**
- MK-8722 produced dose-dependent **cardiac hypertrophy** in beagle dogs and cynomolgus monkeys at exposures achieving robust AMPK activation [^myers2017]. Histological findings: concentric hypertrophy without fibrosis — interpreted as an on-mechanism effect of constitutive AMPK activation in cardiomyocytes, which normally requires AMPK only under ischemic stress. This finding effectively halted MK-8722 clinical development and raised the concern that **direct pan-AMPK activation in energy-replete tissue may be intrinsically harmful to the heart**.
- Implication: indirect activators (which only engage AMPK in metabolically stressed tissue) may have an inherent safety advantage over direct activators for a chronic geroprotection indication.

## Cross-class relationships

AMPK activators overlap and combine with other geroprotective pharmacological classes:

- **[[mtor-inhibitors]]** — rapamycin/rapalogs inhibit mTORC1 via FKBP12-rapamycin binding; AMPK activators inhibit mTORC1 via Raptor phosphorylation and TSC2. The two classes converge on the same mTOR node via distinct mechanisms. The NIA Interventions Testing Program (ITP) tested metformin alone, rapamycin alone, and the combination — rapamycin alone showed robust lifespan extension in mice; metformin alone was modest; combination data suggests additive effects in some contexts. #gap/needs-human-replication
- **[[nad-precursors]]** — NR/NMN activate SIRT1, which activates LKB1 and thus AMPK indirectly (SIRT1 → LKB1 → AMPK → PGC-1α). The two classes share downstream mitochondrial biogenesis effects.
- **[[sirtuin-activators]]** — resveratrol activates SIRT1, which connects to AMPK via LKB1 deacetylation; the two classes share substantial mechanistic overlap.
- **[[caloric-restriction]]** — CR is the physiological archetype of AMPK activation. AMPK-activating drugs are often described as CR mimetics; AMPK epistasis in worms (aak-2/AMPK mutants partially block CR lifespan extension) supports this framing.

## Extrapolation table

| Dimension | Status |
|---|---|
| AMPK pathway conserved in humans? | Yes — identical heterotrimeric structure; Thr172 phosphorylation conserved |
| Metformin mortality signal conserved from mice to humans? | Partial — mouse lifespan extension modest and male-only; human observational signal is strong but confounded |
| Direct AMPK activator safety conserved in humans? | Unknown — cardiac hypertrophy in dogs/NHPs; human cardiac data not available; likely on-mechanism risk |
| Food-bacterium-mediated mechanism (Cabreiro) translated to mammals? | Unknown — demonstrated via *E. coli* food bacteria in *C. elegans*; whether gut microbiota mediate analogous effects in mammals is unresolved; #gap/needs-human-replication |

## Limitations and gaps

- **Direct activators: stalled in clinic, partially relitigated preclinically.** The 2017 MK-8722 cardiac-hypertrophy signal in dogs and NHPs [^myers2017] has not been overcome and no direct allosteric AMPK activator has entered Phase 2 for any aging-related indication. The 2026 Altintas/MacArthur preprint [^altintas2026] reports MK-8722 extends *C. elegans* lifespan AMPK-dependently and improves aged-mouse healthspan, suggesting the rodent-cardiac safety window may be more permissive than the larger-species data implied; whether this translates to dogs/NHPs/humans at gerotherapeutic doses is unresolved. The theoretical rationale for direct activators (isoform selectivity, context-independence) remains untested in humans. #gap/long-term-unknown #gap/contradictory-evidence
- **Metformin's AMPK-dependence is contested.** In LKB1-null and AMPKα1/α2-null hepatocytes, metformin still suppresses gluconeogenesis, implicating AMPK-independent mechanisms: direct AMP-mediated inhibition of fructose-1,6-bisphosphatase, inhibition of mitochondrial glycerophosphate dehydrogenase (mGPD), and possibly GDF15 induction [^foretz2014]. AMPK activation is a secondary consequence of the energy stress metformin induces, not the primary pharmacological event. The fraction of metformin's geroprotective effect attributable to AMPK activation per se is unknown. #gap/contradictory-evidence
- **Food-bacterium / microbiome confound.** Cabreiro 2013 demonstrates that metformin's longevity effects in *C. elegans* require live *E. coli* food bacteria and are mediated by alteration of bacterial folate/methionine metabolism rather than direct host AMPK activation. Whether a similar bacterium-mediated mechanism operates in mammals (via gut microbiota) remains unresolved. #gap/no-mechanism
- **TAME endpoint sensitivity.** The composite aging endpoint used by TAME is novel and has no regulatory precedent; the trial is partly designed to establish this endpoint's validity. A negative result would be difficult to interpret (drug failure vs endpoint failure). #gap/long-term-unknown
- **Sex bias in preclinical data.** Martin-Montalvo 2013 used exclusively male mice. Female lifespan effects of metformin are unstudied in the ITP-class paradigm. #gap/needs-replication
- **Berberine human aging data is minimal but the cancer-prevention signal is strong.** Extensive RCT data exists for metabolic syndrome in Chinese populations (HbA1c ↓, LDL-C ↓ ~20%, ApoB ↓). The strongest single-endpoint human signal is colorectal-adenoma chemoprevention: Chen 2020 CBAR (n=891, RR 0.77) and the durable Tan 2025 6-yr followup (adjusted HR 0.58 for any adenoma; HR 0.99 NS for advanced adenoma). No long-term aging-endpoint trials and no ITP lifespan data. Mechanism-wise berberine differs from metformin: the dominant clinical signal traces to *post-transcriptional LDLR mRNA stabilization* (Kong 2004) and *gut-luminal TMAO suppression* (Ma 2022) rather than AMPK per se — meaning berberine's "AMPK-activator" classification is mechanistically incomplete for its strongest human evidence. See [[berberine]] for full compound page. #gap/needs-human-replication for aging-endpoint trials in Western populations.

## Cross-references

- [[metformin]] — verified compound page (anchor of this class)
- [[ampk]] — verified pathway page (mechanism)
- [[mtor]] — downstream suppression target
- [[autophagy]] — downstream induction target
- [[caloric-restriction]] — physiological AMPK activator; shares mechanisms
- [[deregulated-nutrient-sensing]] — hallmark target
- [[disabled-macroautophagy]] — hallmark target (downstream of AMPK → ULK1)
- [[mitochondrial-dysfunction]] — hallmark target (downstream of AMPK → PGC-1α)
- [[mtor-inhibitors]] — sibling pharmacological class (R23d); converges on mTORC1
- [[nad-precursors]] — sibling pharmacological class (R23d); shares mitochondrial biogenesis endpoint
- [[sirtuin-activators]] — sibling pharmacological class (R23d); overlapping LKB1/AMPK axis
- [[senomorphics]] — metformin has senomorphic effects (partial SASP suppression) independent of direct senolysis

## Footnotes

[^hardie2012]: doi:10.1038/nrm3311 · review · model: biochemical/mammalian · n=N/A · ~4260 citations — canonical AMPK structure + nucleotide-sensing review by D.G. Hardie; local PDF available

[^foretz2014]: doi:10.1016/j.cmet.2014.09.018 · review · model: mammalian cells + mouse · n=N/A · ~1400 citations — Foretz et al., comprehensive metformin MoA review covering Complex I, AMPK-dependent and -independent mechanisms

[^martinmontalvo2013]: doi:10.1038/ncomms3192 · in-vivo · model: male C57BL/6 mice (n=64 metformin, n=83 SD control) + male B6C3F1 replication (n=36 metformin, n=297 SD control) · χ²=5.46, p=0.02 Gehan-Breslow — metformin 0.1% w/w extends mean lifespan 5.83% (C57BL/6); B6C3F1 4.15% extension p=0.064 ns; 1% w/w dose shortens mean lifespan 14.4% (p<0.001); male-only; local PDF available

[^bannister2014]: doi:10.1111/dom.12354 · observational · model: human (n=78,241 matched triplets) · HR 0.85 (95% CI 0.81–0.90) — metformin-treated T2D patients have lower all-cause mortality than matched non-diabetic controls; sulfonylurea users had higher mortality; not_oa

[^ukpds1998]: doi:10.1016/s0140-6736(98)07037-8 · rct · model: human overweight T2D (n=342 metformin vs n=411 conventional; 1,704 total overweight randomized across all arms) · median follow-up 10.7 years · 36% reduction all-cause mortality (95% CI 9–55%), 42% reduction diabetes-related death vs conventional (diet alone); p=0.011 — UKPDS 34; local PDF available

[^cabreiro2013]: doi:10.1016/j.cell.2013.02.035 · in-vivo · model: *C. elegans* co-cultured with *E. coli* (multiple strains/concentrations) — metformin extends worm lifespan 18%/36%/3% at 25/50/100 mM via bacterial folate and methionine pathway alteration; effect requires live *E. coli* (axenic culture reverses effect to lifespan shortening); local PDF available

[^barzilai2016]: doi:10.1016/j.cmet.2016.05.011 · review/essay · model: human trial design — Barzilai et al. describe TAME trial rationale and design; B12 monitoring recommendation endorsed; local PDF available

[^myers2017]: doi:10.1126/science.aah5582 · in-vivo · model: dogs + cynomolgus monkeys · — Myers et al. (Merck); MK-8722 pan-AMPK activator improves glucose homeostasis but induces cardiac hypertrophy at therapeutic exposures; closed-access (not_oa)

[^altintas2026]: Altintas Ö, Knufinke M, Mann CG, Langston PK, Rabinowitz JD, Murphy CT, Ewald CY, Mitchell SJ, MacArthur MR · doi:10.64898/2026.04.21.719899 · *bioRxiv* preprint 2026 Apr 29 · PMID 42079053 · PMC13131576 · in-vivo · model: *C. elegans* (lifespan, AMPK-dependent via aak-2 epistasis) + 18→24-mo-old mice (healthspan: reduced body fat, blocked fasting-glucose decline, enhanced circadian respiratory quotient; hepatic RNA-seq: ↓inflammation, ↑sterol metabolism including lithocholic acid) · MK-8722 pharmacologic AMPK activator extends worm lifespan and improves aged-mouse healthspan; first preprint reframing the "direct activator clinically stalled" narrative · OA gold; abstract-verified via PubMed; full preprint not yet locally archived #gap/needs-replication — preprint, not yet peer-reviewed
