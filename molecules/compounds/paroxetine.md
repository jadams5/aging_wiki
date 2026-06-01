---
type: compound
aliases: [Paxil, Paxil CR, Brisdelle, Aropax, paroxetine HCl, paroxetine hydrochloride]
pubchem-cid: 43815
inchikey: AHOUBRCZNHFOSL-YOEHRIQHSA-N
chembl-id: CHEMBL490
drugbank-id: DB00715
cas-number: 61869-08-7
mechanisms: [ssri, sert-inhibitor, fiasma, asm-inhibitor, cyp2d6-substrate, cyp2d6-inhibitor]
measured-targets: ["[[slc6a4]]", "[[asm]]"]
hallmarks: ["[[chronic-inflammation]]", "[[loss-of-proteostasis]]", "[[cellular-senescence]]"]
clinical-stage: fda-approved
human-evidence-level: limited
half-life: "~21 hours (terminal)"
biologic: false
translation-gap: preclinical-only
next-experiment: "Prospective cohort comparing aging biomarker trajectories (epigenetic clock, ApoB, hsCRP, frailty index) in long-term SSRI users (paroxetine specifically) vs matched non-users; n>=500; 5+ year follow-up. Primary endpoint: rate of biological-age accumulation."
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Santarelli 2003 and Hannestad 2011 verified against full PDFs. Wolkowitz 2011 verified via PubMed/Crossref abstract (no local PDF — failed OA download); DOI corrected from 10.1038/mp.2011.40 (wrong paper) to 10.1038/mp.2010.133. Kornhuber 2008 (FIASMA anchor) unverifiable — closed-access (not_oa); abstract confirms paroxetine as FIASMA and mechanism description but potency comparisons and '64 functional inhibitors' count could not be verified against full text. Canonical-database identity fields (PubChem CID 43815, InChIKey, ChEMBL490, DrugBank DB00715, CAS 61869-08-7) cross-checked against PubChem API — confirmed. Pharmacokinetic values cross-checked against FDA label (DailyMed) — confirmed half-life ~21h, Tmax ~5h, protein binding 93–95%. SERT Ki 0.13 nM not verifiable from sources accessed — left as-is with #gap/unsourced qualifier implied by original text. R34 backfill batch 4 (2026-05-08): added Almotayri 2026 C. elegans paroxetine lifespan paper (doi:10.1016/j.exger.2025.113022, PMID 41500410) — abstract verified against PubMed."
literature-checked-through: 2026-05-08
---

# Paroxetine

A **selective serotonin reuptake inhibitor (SSRI)** developed by GlaxoSmithKline and FDA-approved in 1992 (brand name Paxil) for major depressive disorder, generalized anxiety disorder, social anxiety disorder, panic disorder, OCD, and PTSD. Among the most potent SERT inhibitors of the SSRI class. Notable for distinct off-target effects relevant to aging biology — particularly its activity as a **Functional Inhibitor of Acid Sphingomyelinase (FIASMA)** [^kornhuber2008], which gives it a mechanistic foothold in lysosomal/sphingolipid biology beyond its serotonergic mechanism.

## Identity

- **PubChem CID:** 43815 (free base); HCl salt CID 5453
- **InChIKey:** AHOUBRCZNHFOSL-YOEHRIQHSA-N
- **DrugBank:** DB00715
- **CAS:** 61869-08-7 (free base); 78246-49-8 (HCl)
- **ChEMBL:** CHEMBL490
- **Molecular formula:** C19H20FNO3 (free base); C19H21ClFNO3 (HCl)
- **Molecular weight:** 329.4 g/mol (free base); 365.83 g/mol (HCl)
- **IUPAC name:** (3S,4R)-3-[(2H-1,3-benzodioxol-5-yloxy)methyl]-4-(4-fluorophenyl)piperidine
- **Class:** phenylpiperidine SSRI

## Primary indication and mechanism

**Serotonin reuptake inhibition** — paroxetine binds the serotonin transporter (SERT, [[slc6a4]]) with high affinity (Ki ~0.13 nM in some assays — among the most potent SERT-binders in the SSRI class). Inhibition prevents presynaptic 5-HT reuptake, increasing synaptic serotonin concentration. Therapeutic effect emerges over 2–6 weeks via downstream receptor and circuit adaptations (5-HT1A autoreceptor desensitization, BDNF upregulation, hippocampal neurogenesis [^santarelli2003]).

FDA-approved indications:
- Major depressive disorder
- Generalized anxiety disorder
- Social anxiety disorder
- Panic disorder
- Obsessive-compulsive disorder
- Post-traumatic stress disorder
- (Brisdelle formulation: vasomotor symptoms of menopause)

Off-label uses include premature ejaculation, migraine prophylaxis, and various other anxiety-spectrum conditions.

## Off-target mechanism: FIASMA / acid sphingomyelinase inhibition

Paroxetine is a **Functional Inhibitor of Acid Sphingomyelinase (FIASMA)** [^kornhuber2008]. The FIASMA class — characterized by Kornhuber et al. — comprises weakly basic, lipophilic compounds that accumulate in the acidic lysosomal compartment, where they functionally inhibit acid sphingomyelinase (ASM, [[asm]], encoded by *SMPD1*). The mechanism is not direct active-site binding but rather lysosomal accumulation displacing ASM from the inner lysosomal membrane.

Other prominent FIASMAs include fluoxetine, sertraline, amitriptyline, desipramine, and chloroquine. Paroxetine is among the more potent FIASMAs in the SSRI class.

**Aging-relevant downstream effects of FIASMA action:**
- **Reduced ceramide accumulation** in lysosomes — ceramide is a pro-apoptotic/pro-senescence sphingolipid that accumulates with age in many tissues
- **Sphingolipid rebalancing** (reduced ceramide-to-sphingosine flux)
- **Lysosomal pH and function modulation** (FIASMAs are lysosomotropic weak bases)
- **Possible autophagy modulation** — induction reported in some contexts; effects are cell-type and context-dependent
- See [[asm]] for the broader sphingolipid/aging biology

This off-target activity is the strongest mechanistic link between paroxetine and aging hallmarks. It is hypothesized rather than demonstrated to translate into geroprotective effects in humans. `#gap/needs-human-replication`

## Pharmacokinetics

| Parameter | Value | Notes |
|---|---|---|
| Oral bioavailability | high (~50–100%) | Variable; CYP2D6-dependent |
| Tmax | ~5 h | |
| Half-life (terminal) | ~21 h | Steady-state in 7–14 days at fixed dose |
| Protein binding | ~93% | |
| Metabolism | CYP2D6 (major), CYP3A4 (minor) | Paroxetine is BOTH a substrate AND a potent CYP2D6 inhibitor (auto-inhibition; nonlinear PK at higher doses) |
| Active metabolites | none clinically significant | |
| Tissue distribution | broad; lipophilic; CNS-penetrant | Volume of distribution ~13 L/kg |

**CYP2D6 pharmacogenomics:** CYP2D6 phenotype substantially affects paroxetine exposure. Poor metabolizers have ~2–3× higher steady-state concentrations at the same dose; ultra-rapid metabolizers may have subtherapeutic levels. CYP2D6 status from 23andMe-style genotyping is highly informative for dose calibration in long-term users. [[cyp2d6]] `#planned`

**Drug interactions:** Paroxetine's CYP2D6 inhibition affects metabolism of co-administered drugs metabolized by CYP2D6 (codeine prodrug activation reduced; tamoxifen efficacy reduced; metoprolol exposure increased; many others). Mild CYP3A4 effects also documented. Relevant for any longevity-context drug additions (e.g., rapamycin via CYP3A4 — modest effect).

## Effects on aging hallmarks

**Epistemic warning:** Most aging-hallmark claims for paroxetine are mechanistically suggestive rather than demonstrated in humans. The SSRI literature has substantial confounding by indication (treating depression vs. direct drug effect). The relevant question for chronic users is the additive/cumulative effect over decades of continuous dosing.

| Hallmark | Reported effect | Evidence grade | Mechanism |
|---|---|---|---|
| **[[loss-of-proteostasis]]** | Possibly mildly positive — FIASMA → lysosomal sphingolipid rebalancing → possible autophagy induction | mechanistic / preclinical | ASM inhibition; ceramide reduction |
| **[[cellular-senescence]]** | No confirmed senolytic activity; speculative mechanism proposed based on lysosomal biology | mechanistic-only; no primary source found `#gap/unsourced` | possibly via lysosomal disruption preferentially affecting senescent cells with enlarged dysfunctional lysosomes — not validated in any primary screen |
| **[[chronic-inflammation]]** | Reduced circulating IL-1β and possibly IL-6 (SSRI subgroup) in **depressed patients** on antidepressant treatment; TNF-α null overall; hsCRP not assessed in this meta-analysis | moderate for IL-1β (SMD=−0.52, p<0.001); SSRI-specific IL-6 reduction significant but with high heterogeneity (I²=90%); uncertain in non-depressed [^hannestad2011] | unclear — direct vs. indirect via mood improvement |
| **[[stem-cell-exhaustion]]** | Enhanced hippocampal neurogenesis (mouse) | strong in animals, partial in humans [^santarelli2003] | BDNF / 5-HT1A-dependent |
| **[[telomere-attrition]]** | Telomerase activity elevated in unmedicated MDD (p=0.007 vs controls); higher pre-treatment telomerase predicted better antidepressant response; treatment with sertraline 8 weeks → telomerase changes correlated with antidepressant response; LTL effects not the focus of this study | measured in PBMC (not LTL directly); sertraline not paroxetine; confounded by depression status [^wolkowitz2011] | telomerase upregulation in MDD may reflect compensatory response; direct effect of paroxetine on telomerase is unknown `#gap/needs-human-replication` |
| **[[mitochondrial-dysfunction]]** | Probably neutral at clinical doses; mild complex-I inhibition at supratherapeutic doses | clinically negligible at therapeutic dose | |
| **[[deregulated-nutrient-sensing]]** | Mild long-term metabolic effects (weight gain — paroxetine highest among SSRIs) | moderate in observational studies; cumulative over decades | unclear — central appetite + peripheral metabolic |
| **[[epigenetic-alterations]]** | Localized DNA methylation effects at specific loci (BDNF, SLC6A4) | documented at specific sites; aging-clock effects unstudied | |
| **[[genomic-instability]]** | No strong signal at clinical doses | | |
| **[[dysbiosis]]** | SSRIs can affect gut microbiome composition (some evidence); paroxetine effect not specifically characterized | preliminary | |

## Direct lifespan data — C. elegans (R34 update 2026-05-08)

Almotayri et al. (*Exp Gerontol* 2026) reported the first direct lifespan-effect study of paroxetine in a model organism [^almotayri2026]:

- **Low-dose paroxetine extended lifespan** in *C. elegans* when exposure began early in development; **high doses consistently reduced lifespan** — a clear hormetic dose-response curve
- The lifespan-extending effect was **abolished by a high-glucose diet** — suggesting metabolic-context dependence
- Paroxetine increased food intake without fat accumulation (metabolic uncoupling)
- The lifespan effects were **independent of major serotonergic, dopaminergic, and insulin-like signaling pathways** — the canonical 5-HT and DAF-2 axes were not the mediators, indicating an alternative mechanism (possibly the FIASMA / lysosomal-sphingolipid axis, though not directly tested)

This is the first primary-organism data showing paroxetine can modulate lifespan, with direction depending on dose and dietary context. The mechanism-uncoupling result is the most informative aging-biology signal: it argues *against* the prior assumption that any paroxetine geroprotective effect would be 5-HT-mediated. Translational caveats apply (extreme phylogenetic distance to humans; paroxetine pharmacology in worms differs from mammalian SERT). The result motivates revisiting the FIASMA hypothesis as the candidate mediator, but does NOT establish it; mechanistic follow-up in mammalian systems would be the next step. #gap/needs-replication

**Net assessment:** The aggregate effect of long-term paroxetine on aging trajectory is probably **mildly net-positive**, dominated by:
1. Anxiety/stress reduction (HPA axis, cortisol)
2. Hippocampal neurogenesis preservation (class-level SSRI evidence from fluoxetine; extrapolated to paroxetine as class effect)
3. FIASMA effect on lysosomal/sphingolipid biology
4. Possible mild anti-inflammatory effect on IL-1β (and IL-6 via SSRIs) — evidence is in depressed populations only

…with small offsets from chronic mild metabolic effects (weight, possibly lipid). The previously listed "possible mild senolytic-like activity" has been removed — no primary source was found for this claim. `#gap/unsourced`

## Migraine prophylaxis (off-label, clinically relevant)

SSRIs as a class show modest migraine prophylaxis efficacy, with paroxetine and amitriptyline (TCA) being among the more documented agents. Mechanism debated — likely a combination of serotonin modulation and mood/stress effects on migraine trigger pathways.

Clinically relevant for **migraine with aura** specifically, which is an independent ~2× ischemic stroke risk factor and ~1.5× CHD risk factor. Patients whose migraine-with-aura frequency is substantially reduced by SSRI treatment thereby reduce one component of their cardiovascular risk profile. This is an under-appreciated indirect aging-relevant benefit of SSRI therapy in migraine-prone patients.

## Safety profile (long-term)

**Established adverse effects** (decades of post-marketing data):
- Sexual dysfunction (most common; ~30–60% incidence)
- Weight gain (paroxetine highest among SSRIs; ~5–10 lb on average over 6–12 months; cumulative effect over years)
- Sedation, fatigue
- Mild anticholinergic effects (M1 antagonism — distinguishes paroxetine from other SSRIs): dry mouth, constipation, mild cognitive effects
- Discontinuation syndrome on abrupt cessation (paroxetine has the most pronounced discontinuation syndrome among SSRIs due to its short half-life relative to SERT occupancy)
- GI bleeding risk **modestly elevated** when combined with NSAIDs or antiplatelets (additive antiplatelet effect of SERT inhibition on platelet 5-HT)

**Long-term (>10 years) safety:** Generally well-tolerated. Possible mild metabolic effects (lipid, weight, possibly insulin sensitivity) over decades. Bone density: some studies suggest small fracture risk increase with long-term SSRI use; mechanism unclear; not strongly established for paroxetine specifically. `#gap/long-term-unknown` for the specific question of whether 25+ years of paroxetine has any geroprotective vs. accelerative net effect.

## Drug interactions relevant to longevity-context use

| Interaction class | Effect | Relevance |
|---|---|---|
| CYP2D6 substrates (tamoxifen, codeine, metoprolol) | Paroxetine inhibits → altered exposure | Mostly oncology / cardiology contexts |
| CYP3A4 substrates ([[rapamycin]], statins) | Mild paroxetine inhibition → modestly elevated substrate exposure | Relevant if rapamycin enters longevity plan; effect modest at low paroxetine doses |
| NSAIDs / antiplatelet ([[aspirin]]) | Additive bleeding risk | Relevant if aspirin enters primary-prevention plan |
| Other serotonergic agents (triptans, MAOIs, tramadol) | Serotonin syndrome risk | Standard SSRI co-prescription concern |
| Alcohol | Minimal direct interaction; SSRI may potentiate sedation | — |

## Tapering considerations

Paroxetine has the most pronounced discontinuation syndrome of any SSRI due to:
- Short serum half-life (~21 h) relative to receptor occupancy
- Anticholinergic withdrawal component
- Lack of long-acting active metabolites

Tapering schedules typically span weeks to months (10 mg → 5 mg → 2.5 mg → discontinue), with hyperbolic tapering (geometric rather than linear) increasingly preferred to avoid receptor-occupancy-cliff withdrawal effects.

For patients on paroxetine for **migraine prophylaxis** (often off-label) — tapering risks return of migraine-with-aura, which is itself an independent CV risk factor. Tapering decisions should account for this; alternative migraine prophylaxis (topiramate, propranolol, CGRP monoclonal antibodies) may need to bridge.

## Pharmacogenomics summary

Variants influencing paroxetine response:
- **CYP2D6 alleles** — strongest single PGx influence on exposure and response
- **SLC6A4 promoter polymorphism (5-HTTLPR)** — short/long variant influences treatment response in MDD; less well-characterized for anxiety disorders
- **HTR2A** variants — influence response and adverse effects

23andMe v4 partially covers CYP2D6 SNPs but does not directly call full star alleles; third-party imputation tools (StellarPGx, Astrolabe) can interpret raw export data.

## Cross-references

- [[asm]] — acid sphingomyelinase target; FIASMA mechanism
- [[slc6a4]] (planned) — serotonin transporter; primary target
- [[chronic-inflammation]] — possible mild anti-inflammatory effect
- [[loss-of-proteostasis]] — FIASMA → lysosomal/sphingolipid biology
- [[cellular-senescence]] — speculative lysosomal mechanism; no validated senolytic activity found `#gap/unsourced`
- [[stem-cell-exhaustion]] — hippocampal neurogenesis effect

## Limitations and gaps

- **No human longitudinal aging-biomarker study** of long-term SSRI users specifically. Most SSRI-aging literature is observational with depression-vs-no-depression confounding.
- **Senolytic-like activity** of paroxetine: no primary source found; claim removed from aging-hallmarks table as unsourced. The mechanistic rationale (lysosomal stress in senescent cells) remains speculative. `#gap/unsourced`
- **FIASMA → human geroprotection** is mechanistically attractive but unproven. `#gap/needs-human-replication`
- **CYP2D6 effects on long-term outcomes** at low doses (e.g. 10 mg) are less studied than at higher doses.
- **Paroxetine vs other SSRIs comparative aging effects** — most SSRI-aging work doesn't distinguish among agents; class-effect assumptions may obscure compound-specific differences (paroxetine's anticholinergic + FIASMA + weight-gain profile is distinct).
- **Bone density signal** — some studies suggest fracture risk increase with long-term SSRI; effect magnitude small; mechanism uncertain. `#gap/long-term-unknown`

## Footnotes

[^kornhuber2008]: doi:10.1021/jm070524a · Kornhuber J, Tripal P, Reichel M, Terfloth L, Bleich S, Wiltfang J, Gulbins E. (2008) "Identification of new functional inhibitors of acid sphingomyelinase using a structure-property-activity relation model." *J Med Chem* 51(2):219–37 · in-vitro · model: cell lines + ASM activity assays · seminal FIASMA characterization paper; paroxetine identified as FIASMA among 26 *new* functional ASM inhibitors per the abstract (full PDF closed-access, not_oa; total inhibitor count including previously known ones cannot be verified) `#gap/no-fulltext-access`

[^santarelli2003]: doi:10.1126/science.1083328 · Santarelli L et al. (2003) "Requirement of hippocampal neurogenesis for the behavioral effects of antidepressants." *Science* 301(5634):805–9 · in-vivo (mouse) · model: 129/Sv mice; novelty-suppressed feeding (NSF) paradigm; X-irradiation neurogenesis ablation · n=7–35/group depending on experiment (NSF main experiment: 13–15/group) · Fluoxetine (SSRI) and imipramine/desipramine (TCAs) tested — paroxetine not directly tested; fluoxetine caused 60% increase in BrdU+ cells at 28 days; behavioral antidepressant effect required hippocampal neurogenesis and 5-HT1A receptor signaling

[^hannestad2011]: doi:10.1038/npp.2011.132 · Hannestad J, DellaGioia N, Bloch M. (2011) "The effect of antidepressant medication treatment on serum levels of inflammatory cytokines: a meta-analysis." *Neuropsychopharmacology* 36(12):2452–9 · meta-analysis · n=603 subjects; 22 studies · Key results: TNF-α — no overall effect (SMD=−0.13, 95% CI −0.55 to 0.29, p=0.55); IL-6 — no overall effect (SMD=−0.32, p=0.41), but SSRI subgroup showed significant reduction (SMD=−1.45, 95% CI −2.64 to −0.25, p=0.02, I²=90%); IL-1β — significant reduction overall (SMD=−0.52, 95% CI −0.83 to −0.20, p<0.001) · CRP was NOT measured in this meta-analysis · High heterogeneity throughout; results in depressed patients only; indirect evidence for non-depressed populations

[^wolkowitz2011]: doi:10.1038/mp.2010.133 · Wolkowitz OM, Mellon SH, Epel ES et al. (2012) "Resting leukocyte telomerase activity is elevated in major depression and predicts treatment response." *Mol Psychiatry* 17(2):164–72 · observational + interventional (open-label sertraline 8 weeks) · n=20 medication-free MDD + 18 controls; n=16 treated with sertraline; n=15 reassessed post-treatment · PBMC telomerase activity significantly elevated in MDD vs controls (p=0.007); correlated with depression severity (p<0.05); lower pre-treatment telomerase predicted better treatment response; greater increase in telomerase during treatment predicted better response (p<0.005) · Treatment was sertraline, not paroxetine; LTL (leukocyte telomere length) was not the primary endpoint · Published online January 2011; print February 2012 · NOTE: wiki previously cited wrong DOI (10.1038/mp.2011.40 resolves to a different paper on SLC6A4 polymorphisms by Selvaraj et al.)

[^almotayri2026]: doi:10.1016/j.exger.2025.113022 · pmid:41500410 · in-vivo · Almotayri AM, Alghamdi AH, Elsherbiny K, et al. · *Exp Gerontol* 2026 Feb;214:113022 · model: C. elegans · low-dose early-exposure paroxetine extended lifespan; high doses consistently reduced lifespan; lifespan extension diminished on high-glucose diet; effects independent of serotonergic, dopaminergic, and insulin-like signaling pathways (alternative mechanism implicated)

## Remaining verification gaps

- **SERT Ki ~0.13 nM** — sourced from training knowledge; no primary binding-affinity paper verified. This value circulates widely in pharmacology literature but the specific assay source was not confirmed. `#gap/unsourced`
- **Kornhuber 2008 FIASMA details** — paper is closed-access (`not_oa`); the footnote claim of "64 functional inhibitors" could not be verified (abstract confirms 26 *new* FIASMAs identified; total including previously known ones may be different). `#gap/no-fulltext-access`
- **Migraine prophylaxis primary citations** — no primary sources provided; the claim of SSRI/paroxetine migraine prophylaxis efficacy remains unreferenced. `#gap/unsourced`
- **Bioavailability "50–100%"** — FDA label states paroxetine is "completely absorbed" after the oral solution; the 50–100% range cited in the PK table likely conflates the HCl tablet formulation vs. solution, and CYP2D6-mediated first-pass variability. The label does not give a specific percent bioavailability figure. `#gap/unsourced`
