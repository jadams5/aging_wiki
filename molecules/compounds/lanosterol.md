---
type: compound
aliases: [lanosterin, kryptosterol, "(3beta)-lanosta-8,24-dien-3-ol"]
pubchem-cid: 246983
inchikey: CAHGCLMLTWQZNJ-BQNIITSRSA-N
chembl-id: CHEMBL225111
drugbank-id: DB03696
cas-number: 79-63-0
administration-route: multi-route
biologic: false
molecular-formula: C30H50O
molecular-weight-da: 426.7
mechanisms: []
targets: []
hallmarks: ["[[loss-of-proteostasis]]"]
clinical-stage: preclinical
human-evidence-level: preclinical-only
translation-gap: preclinical-only
next-experiment: "Replicate the primate cortical-cataract signal in an adequately powered, randomized, masked, vehicle-controlled study with formulation-qualified lens exposure, objective densitometry, and prespecified cortical-versus-nuclear analysis."
clinical-trials-active: 0
literature-checked-through: 2026-08-18
verified: true
verified-date: 2026-08-18
verified-by: claude
verified-scope: "Partial: canonical identity, exact ClinicalTrials.gov active-intervention count, and the cited open/full-text primary studies were checked; Zhao 2015 was checked against the main article but its Online Methods, Extended Data, and Source Data were unavailable; Chen 2018 and Cheng 2025 were checked only against publisher/PubMed abstracts and highlights because full text was unavailable."
---

# Lanosterol

Lanosterol is an endogenous tetracyclic sterol and an early product of the [[mevalonate-pathway|mevalonate/sterol-biosynthesis pathway]]. It attracted attention as a possible pharmacological chaperone for cataract after a 2015 report connected lanosterol-synthase (LSS) mutations to congenital cataract and reported partial cataract clearing in rabbit lenses and dogs. The result has **not** established a cataract treatment in humans: experiments in extracted human cataract nuclei and intact induced rat lenses were negative, while a separate human-tissue study found disaggregation only after proteins had been removed from the lens. Engineered lanosterol-nanoparticle delivery in inherited rat models delayed early structural change and opacification but did not reverse advanced damage. A very small, uncontrolled nonhuman-primate study later reported a transient cortical-cataract signal after subconjunctival delivery, not conventional eye drops.

**Bottom line:** the cataract hypothesis is biologically plausible but experimentally contradictory, highly formulation- and model-dependent, and unproven in patients. Lanosterol is not an established anti-aging or cataract therapy.

## Identity and endogenous role

- **PubChem CID:** 246983
- **InChIKey:** CAHGCLMLTWQZNJ-BQNIITSRSA-N
- **ChEMBL:** CHEMBL225111
- **DrugBank:** DB03696
- **CAS:** 79-63-0
- **Formula / molecular weight:** C30H50O / 426.7 g/mol
- **Chemical class:** tetracyclic triterpenoid sterol

Lanosterol synthase cyclizes (S)-2,3-oxidosqualene to lanosterol. Lanosterol is then processed through multiple reactions toward cholesterol and other sterols; it is therefore a normal metabolic intermediate, not a xenobiotic drug.[^identity] Endogenous status does not establish the safety, stability, or ocular exposure of a concentrated formulation.

## Proposed cataract mechanisms

Three related propositions are often conflated:

1. **LSS genetics.** The initiating study found homozygous LSS missense variants in two families with congenital cataract and reported impaired enzyme activity. This connects severely perturbed sterol synthesis to a rare inherited cataract phenotype, but does not show that low lanosterol is a general cause of age-related cataract.[^zhao2015]
2. **Direct crystallin aggregate modulation.** Zhao et al. reported that lanosterol reduced preformed crystallin aggregates in cell-free and cellular systems. Chen et al. later found disaggregation of proteins isolated from surgically removed human cataract material.[^zhao2015][^chen2018] Whether lanosterol binds a specific crystallin site strongly enough to explain these effects remains disputed: Daszynski et al. found neither meaningful predicted binding to wild-type or R120G αB-crystallin nor solubilization in their human-lens preparations.[^daszynski2019]
3. **Lens-local sterol homeostasis.** Increasing lanosterol within the lens could affect membrane or protein homeostasis beyond direct aggregate binding. Rat work using ocular LSS-mRNA delivery supports this broader upstream concept, but it tests gene delivery and endogenous synthesis rather than administration of lanosterol itself.[^song2025]

No single target is entered in frontmatter because the proposed αB-crystallin interaction is contested, and LSS is the enzyme that produces lanosterol rather than a demonstrated pharmacological target of exogenous lanosterol. No existing intervention-mechanism class precisely captures the proposed aggregate-modulating activity.

## Conflicting cataract evidence

| Evidence | Model and exposure | Result | What it establishes — and does not |
|---|---|---|---|
| [[studies/zhao-2015-lanosterol-cataracts|Zhao et al. 2015]] | LSS genetics; crystallin assays; dissected rabbit lenses; canine cataract treatment with supplement-only dosing details | Positive genetic, biochemical, ex-vivo, and canine signals | Generated the hypothesis. It did not test clinical efficacy in humans, and the inaccessible treatment details cannot establish that a simple topical solution reaches the lens.[^zhao2015] |
| [[studies/shanmugam-2015-lanosterol-human-cataract-nuclei|Shanmugam et al. 2015]] | 40 surgically extracted human age-related cataract nuclei, allocated 20 per arm to nominal 25 mM lanosterol or control immersion for 6 days; sequence and concealment were unreported | No agreed clearing; opacity was unchanged or progressed in both groups | A direct negative result in intact extracted human cataract nuclei, but still an ex-vivo immersion study rather than dosing a living eye.[^shanmugam2015] |
| [[studies/chen-2018-lanosterol-human-cataract-aggregates|Chen et al. 2018]] | Protein aggregates isolated from surgically removed human cataract material | Lanosterol dissociated aggregates at micromolar-scale concentrations; response varied with cataract severity | Positive biochemical evidence from human-derived material. Isolation bypassed the capsule, intact-lens architecture, diffusion barriers, clearance, and clinical outcome assessment.[^chen2018] |
| [[studies/daszynski-2019-lanosterol-failure|Daszynski et al. 2019]] | Three induced rat-lens cataract models exposed to lanosterol liposomes after induction; human lens fragments and homogenates; in-silico docking | No reversal; all induced opacities progressed during exposure, with no human-lens protein solubilization or convincing predicted αB-crystallin binding | A multi-assay failure to reproduce the proposed reversal effect. Without an induced vehicle/blank-liposome arm, it cannot estimate prevention or progression rate versus vehicle.[^daszynski2019] |
| Nagai et al. 2020 | Shumiya cataract rats; 0.5% solid-lanosterol nanoparticles by repeated intravitreal injection or, in a separate study, a twice-daily topical in-situ nanoparticle gel | Delayed early lens-structure collapse and opacification; advanced structural damage was not repaired | Positive prevention/delay signals with engineered exposure in an inherited rat model, not reversal of established dense cataract or evidence for unformulated eye drops.[^nagai2020] |
| [[studies/zhang-2022-lanosterol-cynomolgus-cataracts|Zhang et al. 2022]] | Older cynomolgus monkeys; three cortical-cataract and three nuclear-cataract animals received subconjunctival lanosterol thermogel; no cataract vehicle-control group | Cortical opacity improved through day 14 and regressed toward baseline by day 21; nuclear cataract did not significantly improve | Exploratory evidence that delivered exposure and cataract subtype may matter. The tiny groups, lack of a vehicle control, transient response, and invasive depot route preclude an efficacy conclusion.[^zhang2022] |
| Su et al. 2024 | HLE-B3 human lens epithelial cells with SREBF2 knockdown or oxidative stress; 10 µM lanosterol | Reduced amyloid signal and apoptosis while restoring measured cholesterol-pathway changes | Supports a cell-state/sterol-homeostasis response to parent lanosterol, but not intact-lens clearing, ocular delivery, or clinical efficacy.[^su2024] |

The positive isolated-aggregate result does not resolve the negative intact-lens studies: it shows that lanosterol can affect some cataract-derived protein assemblies under direct exposure, not that adequate free drug reaches aggregates inside a living lens. Conversely, the negative experiments do not prove that every formulation and cataract subtype will fail. The disagreement is best treated as an unresolved boundary-condition problem, not as confirmation or refutation of a human therapy. #gap/contradictory-evidence

## Delivery is part of the hypothesis

Lanosterol is highly hydrophobic and poorly compatible with aqueous dosing. A useful ocular product would need to remain stable, cross ocular barriers, enter the avascular lens, achieve an active unbound concentration, and distribute through the relevant cortical or nuclear region without ocular toxicity. The literature tests materially different exposure systems:

- direct incubation of cells, purified aggregates, excised nuclei, fragments, homogenates, or whole explanted lenses;
- liposomal or nanoparticle formulations;
- canine treatment reported by Zhao et al., with route, formulation, and schedule confined to unavailable Online Methods;
- intravitreal nanoparticles and, separately, a topical in-situ nanoparticle gel in Shumiya cataract rats; and
- a subconjunctival sustained-release thermogel in monkeys.[^zhao2015][^shanmugam2015][^chen2018][^daszynski2019][^nagai2020][^zhang2022][^su2024]

These routes cannot be read as interchangeable. Dense nuclear cataract may also be less permeable and structurally less reversible than cortical opacity, consistent with the subtype split in the monkey study but not yet demonstrated in a controlled efficacy experiment. Lens exposure, formulation composition, cataract subtype, and time since opacification should therefore be measured rather than treated as nuisance variables. #gap/dose-response-unclear

## Human evidence and clinical development

There are **no reported controlled trials showing that parent lanosterol improves cataract in living humans**. Human-derived evidence is limited to tissue removed during surgery, with conflicting results.[^shanmugam2015][^chen2018][^daszynski2019]

A US Phase 2 pilot, NCT07395986, is testing twice-daily 0.4% **ZOC2017217** against matching placebo in adults with age-related cataract over 24 weeks. A sponsor announcement calls it lanosterol-derived, while the registry describes the active only by its development code; its exact chemical identity and equivalence to parent lanosterol are not established there. As of 2026-08-18 its structured record reported **ACTIVE_NOT_RECRUITING** status and 8 actual enrollees, although the retained narrative still described approximately 40 participants; it had no posted results and listed primary and study completion in February 2027.[^nct07395986]

Accordingly, `clinical-stage: preclinical` and `human-evidence-level: preclinical-only` refer specifically to **parent lanosterol**. The derivative trial is a relevant translational development, not evidence that lanosterol eye drops work. The schema's active-trial count remains 0 because the exact parent-lanosterol intervention query returned no `RECRUITING` or `ACTIVE_NOT_RECRUITING` study; NCT07395986 is tracked separately under its undisclosed ZOC2017217 identity.

A date-filtered PubMed and Europe PMC supersession check from 2023-08-18 through 2026-08-18 found the newer genetic, cell, purified-protein, and LSS-mRNA studies described here, but no parent-lanosterol human efficacy trial, meta-analysis, or large randomized trial.

<!-- clinical-trials-active: ClinicalTrials.gov v2 queried 2026-08-18 for exact parent-lanosterol intervention terms: 0 RECRUITING + ACTIVE_NOT_RECRUITING. NCT07395986 is ACTIVE_NOT_RECRUITING but excluded from the exact-parent count because its registry intervention is ZOC2017217; structured enrollment 8 ACTUAL, retained narrative approximately 40; primary/study completion 2027-02; last update posted 2026-08-11. Recheck by 2027-02-18. -->

## Human genetics: a systemic proxy, not a local-dose trial

[[studies/hashimi-2024-lanosterol-cataract-genetics|Hashimi et al. 2024]] found no robust association between LSS-region variants, blood-ratio-associated variants involving lanosterol, or an unweighted nine-allele score and cataract in a large UK Biobank analysis; an initial variant signal did not replicate.[^hashimi2024] This was not a formal Mendelian-randomization study, but it weakens a simple claim that lifelong systemic variation in the measured lanosterol-related proxies materially changes cataract risk.

It does **not** settle the local ocular intervention question. The analyses relied on indirect circulating ratio traits rather than measured lens lanosterol, the phenotype combined heterogeneous cataract codes and subtypes, and lifelong small genetic differences do not emulate pharmacological intraocular exposure. The result should be read as null systemic genetic evidence with a lens-local biology caveat, not as a trial of topical lanosterol.

## Related upstream delivery strategy

[[studies/song-2025-lss-mrna-cataract-rats|Song et al. 2025]] delivered lipid-nanoparticle-formulated human LSS mRNA mainly by intracameral injection in rats. Separate normal-rat experiments measured increased lens hLSS and lanosterol at 24 hours; efficacy cohorts showed prevention/suppression in a selenite model dosed before induction and reduced established opacity in a galactose model, but did not measure hLSS or lanosterol to establish mediation.[^song2025] This supports investigation of lens-local sterol synthesis, but it is a distinct gene-expression strategy with different exposure, durability, manufacturing, and safety questions. It is **not evidence that topical lanosterol works**.

Human iPSC-derived lentoid bodies provide another supportive but preclinical bridge: lanosterol delayed rather than reversed opacity and reduced αA/αB-crystallin aggregation in that model.[^zhang2022lentoid] More recent purified-protein and ex-vivo mouse-lens work also reported inhibition of UV-A-induced aggregation of human αB-crystallin.[^cheng2025] Neither model contains the full delivery barriers or clinical heterogeneity of an aging human lens.

## Relevance to aging biology

Cataract is a localized age-associated failure of long-lived lens-protein homeostasis, making this work relevant to [[loss-of-proteostasis]]. Lanosterol studies test whether some aggregated crystallins retain pharmacologically recoverable conformations. They do not show rejuvenation outside the lens, correction of systemic aging, or reversal of the broader hallmark.

| Extrapolation dimension | Assessment |
|---|---|
| Pathway conserved in humans? | **Yes.** Humans synthesize lanosterol through LSS and express lens crystallins. |
| Disease phenotype conserved? | **Partial.** Cataract occurs across the studied species, but induced rat models, inherited canine disease, and heterogeneous human age-related subtypes need not share the same aggregate state or permeability. |
| Replicated in humans? | **No clinical replication.** Human ex-vivo findings conflict, and no controlled in-human efficacy result is available. |

## Safety and practical interpretation

- An endogenous metabolite is not automatically safe when concentrated, formulated with penetration enhancers, or delivered into ocular tissues.
- The reviewed studies do not define a validated human dose, ocular pharmacokinetic target, long-term retinal/corneal safety margin, or interaction profile. #gap/long-term-unknown
- Commercial or do-it-yourself lanosterol eye-drop claims should not be treated as evidence-based cataract care; delaying clinical assessment can forgo established management of vision-limiting cataract.
- Cataract subtype and severity should be prespecified in future work rather than pooled after treatment.

## Key gaps

- **Controlled replication:** adequately powered, randomized, masked, vehicle-controlled testing of the primate cortical-cataract signal with objective imaging. #gap/needs-human-replication
- **Lens pharmacokinetics:** simultaneous measurement of formulation stability, aqueous-humor exposure, lens-region exposure, unbound drug, and opacity response.
- **Mechanistic adjudication:** blinded cross-laboratory comparison of the Zhao-, Chen-, and Daszynski-style assays using the same lanosterol lot, cataract material, formulation, and prespecified endpoints. #gap/contradictory-evidence
- **Subtype boundary:** direct comparison of early cortical, dense nuclear, posterior subcapsular, congenital, and induced cataracts.
- **Molecular specificity:** distinguish direct crystallin binding from membrane/sterol-homeostasis effects, and determine whether any aggregate effect is stereospecific and reversible.
- **Human translation:** only after exposure and safety are established, a masked dose-ranging trial with objective densitometry, visual acuity, contrast sensitivity, and patient-reported function. #gap/needs-human-replication

## References

[^identity]: [PubChem Compound Summary: Lanosterol, CID 246983](https://pubchem.ncbi.nlm.nih.gov/compound/246983); [ChEMBL CHEMBL225111](https://www.ebi.ac.uk/chembl/explore/compound/CHEMBL225111); [DrugBank DB03696](https://go.drugbank.com/drugs/DB03696). Canonical identity records accessed 2026-08-18.

[^zhao2015]: doi:10.1038/nature14650 · Zhao et al. · *Nature* · 2015 · human-family genetics plus in-vitro, ex-vivo rabbit-lens, and in-vivo canine experiments · Figure 5 reports `n=7` canine analysis units but the main article does not establish whether these are dogs, eyes, or lenses; route, formulation, and schedule are confined to unavailable Online Methods · PMID:26200341. The later corrigendum (doi:10.1038/nature15253) corrected affiliations, not the scientific report.

[^shanmugam2015]: doi:10.4103/0301-4738.176040 · Shanmugam et al. · *Indian Journal of Ophthalmology* · 2015 · ex-vivo study of 40 extracted human cataract nuclei, 20 per arm; authors asserted random selection but did not report sequence/concealment or the scope of observer masking · PMID:26862091 · PMCID:PMC4784074.

[^chen2018]: doi:10.1016/j.bbrc.2018.10.175 · Chen et al. · *Biochemical and Biophysical Research Communications* · 2018 · ex-vivo biochemical study of aggregates isolated from human cataract material · PMID:30392915.

[^daszynski2019]: doi:10.1038/s41598-019-44676-4 · Daszynski et al. · *Scientific Reports* · 2019 · intact rat lenses (three induced cataract models), human lens material, and molecular docking · PMID:31186457 · PMCID:PMC6560215.

[^nagai2020]: doi:10.3390/ijms21031048 · Nagai et al. · *International Journal of Molecular Sciences* · 2020 · repeated intravitreal solid-lanosterol nanoparticles in Shumiya cataract rats · PMID:32033321 · PMCID:PMC7036956; doi:10.3390/pharmaceutics12070629 · Nagai et al. · *Pharmaceutics* · 2020 · topical in-situ gel containing solid lanosterol nanoparticles in the same rat model · PMID:32635523 · PMCID:PMC7408553.

[^zhang2022]: doi:10.1093/pcmedi/pbac021 · Zhang et al. · *Precision Clinical Medicine* · 2022 · exploratory in-vivo cynomolgus-monkey study · nine animals total; three clear-lens controls, three cortical-cataract, three nuclear-cataract · PMID:36196296 · PMCID:PMC9523460.

[^su2024]: doi:10.1016/j.bbrep.2024.101679 · Su et al. · *Biochemistry and Biophysics Reports* · 2024 · HLE-B3 human lens epithelial-cell experiments with SREBF2 knockdown and oxidative stress · PMID:38501050 · PMCID:PMC10945048.

[^hashimi2024]: doi:10.3389/fgene.2024.1231521 · Hashimi et al. · *Frontiers in Genetics* · 2024 · GWAS-region, cross-trait, and genetic-risk-score analyses in UK Biobank with FinnGen replication · PMID:38440190 · PMCID:PMC10910428.

[^song2025]: doi:10.1038/s41467-025-63553-5 · Song et al. · *Nature Communications* · 2025 · intracameral pB-UC18 LNP–LSS-mRNA delivery in juvenile rats · separate normal-rat target-engagement assays plus preventive selenite and established-opacity galactose efficacy models · PMID:41006301 · PMCID:PMC12474983.

[^zhang2022lentoid]: doi:10.3389/fphar.2022.959978 · Zhang et al. · *Frontiers in Pharmacology* · 2022 · in-vitro human iPSC-derived lentoid-body study · PMID:36059984 · PMCID:PMC9437520.

[^cheng2025]: doi:10.1016/j.saa.2025.126558 · Cheng et al. · *Spectrochimica Acta Part A: Molecular and Biomolecular Spectroscopy* · 2025 · in-vitro human αB-crystallin UV-A aggregation plus ex-vivo mouse-lens study · PMID:40516309.

[^nct07395986]: [ClinicalTrials.gov NCT07395986](https://clinicaltrials.gov/study/NCT07395986) · Phase 2 randomized quadruple-masked placebo-controlled pilot of ZOC2017217 in age-related cataract · ACTIVE_NOT_RECRUITING; structured enrollment 8 ACTUAL despite a retained narrative describing approximately 40 · primary/study completion 2027-02 · last update posted 2026-08-11 · registry accessed 2026-08-18; no results posted. Lanosterol-derived description: [Lexitas/Ocusun sponsor announcement, 2026-07-14](https://www.prnewswire.com/news-releases/lexitas-pharma-services-and-ocusun-enroll-first-patient-in-a-pilot-study-for-an-upcoming-phase-iii-clinical-trial-evaluating-investigational-eye-drop-for-age-related-cataract-302824020.html); sponsor-reported claims are not efficacy evidence.
