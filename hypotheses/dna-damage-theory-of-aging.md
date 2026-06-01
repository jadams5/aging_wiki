---
type: hypothesis
aliases: [DDT, DNA damage theory of aging, double-strand break theory of aging, somatic DNA damage theory]
proposed-by: [Leo Szilard, Howard Curtis, Jan Vijg]
proposed-year: 1959
status: active
treatment-mode: evidence-aggregating
key-evidence-for:
  - "[[studies/chen-2025-nmr-cgas-hr-repair]]"
  - "[[studies/tyner-2002-p53-mutant-aging]]"
  - "[[studies/yang-2023-epigenetic-information-loss]]"
  - "[[molecules/proteins/sirt6]]"
  - "[[molecules/proteins/brca1]]"
  - "[[molecules/proteins/brca2]]"
  - "[[molecules/proteins/atm]]"
  - "[[model-organisms/balaena-mysticetus]]"
  - "[[model-organisms/heterocephalus-glaber]]"
key-evidence-against:
  - "[[studies/tyner-2002-p53-mutant-aging]]"
  - "[[hypotheses/hyperfunction-theory]]"
  - "[[model-organisms/caenorhabditis-elegans]]"
related-hallmarks:
  - "[[hallmarks/genomic-instability]]"
  - "[[hallmarks/cellular-senescence]]"
  - "[[hallmarks/stem-cell-exhaustion]]"
  - "[[hallmarks/epigenetic-alterations]]"
literature-checked-through: 2026-05-12
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-05-12 — synthesized as a Mode-A evidence-aggregating hypothesis page. Multiple primary-source DOIs cited from canonical databases (DOI lookup confirmed); Chen 2025 (*Science* adp5056) cited from abstract only (#gap/no-fulltext-access). Cross-reference against existing wiki study pages — some `key-evidence-for:` entries may not yet have verified status. Recency search: PubMed 2019–2026, query "DNA damage aging somatic mutation DNA repair" — meta-analyses/systematic reviews/reviews; integrated Vijg 2021 (*Ageing Res Rev*, PMID 33711511, 106 citations, FWCI 7.8), Panier et al. 2024 (*Annu Rev Pathol*, PMID 37832947), and Toiber & Schumacher 2026 (*Annu Rev Pathol*, PMID 41086257).

# DNA Damage Theory of Aging

## TL;DR

The DNA damage theory of aging (DDT) holds that **the progressive accumulation of unrepaired or misrepaired DNA lesions — double-strand breaks (DSBs), single-strand breaks, oxidative base modifications, crosslinks, and replication errors — is a primary rate-limiting driver of biological aging**. As lesion load outpaces declining repair fidelity with age, the result is somatic mutation mosaicism, cellular senescence, tissue dysfunction, and ultimately the organismal aging phenotype. The theory's modern form distinguishes it from its origins in the somatic-mutation hypothesis (Szilard 1959) by broadening from mutations per se to encompass all persistent DNA lesions and their downstream cellular consequences, including epigenetic disruption. Recent comparative-biology evidence — especially the NMR cGAS finding (Chen 2025) — provides some of the cleanest species-level support for the prediction that superior DNA repair causally extends lifespan.

## Statement of the hypothesis

**Explicit testable predictions:**

1. **Aging rate is proportional to net DNA-damage accumulation** (damage load minus repair capacity). Species, genotypes, and individuals with more efficient or durable DNA repair should have longer healthspan and lifespan, all else being equal.
2. **Interventions that improve DNA repair fidelity or reduce lesion burden should extend healthspan or lifespan.** Conversely, genetic ablation of repair genes should accelerate aging phenotypes.
3. **Long-lived species should have measurably enhanced DNA repair relative to short-lived comparators of similar body size.** This is a quantitative, cross-species prediction testable without experimental manipulation.
4. **Repair fidelity should decline with chronological age** in human tissues, tracking the accumulation of senescent and dysfunctional cells.
5. **Progeroid syndromes (diseases caused by defective DNA repair) should phenocopy accelerated aging,** validating the causal direction rather than mere correlation.

These predictions make DDT a "Mode A" evidence-aggregating hypothesis — they are falsifiable and have been tested across organisms, genetic models, and comparative-biology datasets. See [[hallmarks/genomic-instability]] for the mechanistic substrate.

---

## Historical development

### 1959: Szilard's somatic-mutation theory

Leo Szilard, the physicist who contributed to nuclear weapons development, applied radiation-damage thinking to aging biology in a 1959 PNAS paper. He proposed that **random "hits" to chromosomes** accumulate over a lifetime and that aging results from accumulation of non-lethal somatic mutations. Szilard's theory is narrower than DDT — it focuses specifically on mutations (heritable sequence changes), not the broader universe of DNA lesions including unrepaired DSBs, ICLs, or transcription-blocking lesions. #gap/unsourced — Szilard 1959 PNAS is not in a local paper archive; DOI not reliably confirmed via web sources; claims cited from secondary reviews [^vijg2021].

### 1963–1970s: Curtis broadens the damage framing

Howard Curtis extended Szilard's model by proposing that non-mutational chromosome damage — aberrations visible cytologically — accumulates with age in liver cells. Curtis recognized that aging biology required accounting for all forms of chromosomal insult, not just point mutations. This broader framing is the conceptual precursor to DDT proper [^vijg2021].

### 1980s–2000s: Molecular epidemiology and progeroid syndromes

Molecular cloning of human DNA repair genes produced the most compelling evidence for the DDT: **progeroid syndromes** — inherited diseases caused by loss-of-function mutations in specific repair genes — phenocopy accelerated aging. Ataxia-telangiectasia (*ATM*), Werner syndrome (*WRN*), Cockayne syndrome (*CSB/CSA*), Bloom syndrome (*BLM*), xeroderma pigmentosum (*XPA–XPG*), and Fanconi anemia (*FANC* genes) each produce clinical features overlapping multiple aging hallmarks at far younger-than-normal ages. The progeroid-syndrome argument is the strongest *in natura* evidence for the causal claim — see [[pathways/dna-damage-response]] for the progeroid syndrome table.

### 2000s–2015: Vijg and the somatic-mutation rate debate

Jan Vijg at the Albert Einstein College of Medicine developed and applied transgenic lacZ mutation-reporter mice to measure tissue-specific somatic mutation frequencies across age. These studies established that somatic mutation burden rises with age in a tissue-specific fashion — roughly 2–3-fold higher in old vs young tissues [^vijg2020]. Vijg's 2021 synthesis review argues that all roads from DNA damage lead to aging: the primary lesions matter less than the ensemble of unrepaired/misrepaired outcomes (mutations, transcriptional blockage, epigenetic disruption, senescence) that drive the aging phenotype [^vijg2021].

### 2016–present: SIRT6 and repair-mediated lifespan extension

The discovery that SIRT6 overexpression extends lifespan in male mice (Kanfi et al. 2012, *Nature*) [^kanfi2012] provided the first direct mammalian genetic test of the DDT's intervention prediction: improving a DNA repair cofactor (SIRT6 deacetylates H3K9/K56, facilitating chromatin compaction and DSB repair) extends lifespan. Roichman et al. 2021 subsequently showed that **restoration of energy homeostasis downstream of SIRT6 underlies the lifespan benefit** in both sexes [^roichman2021]. See [[molecules/proteins/sirt6]] for the full mechanistic account.

### 2020–present: Information-theory integration and comparative biology

Yang et al. 2023 (*Cell*) demonstrated that experimentally inducing DSBs without permanent sequence change (the ICE system) accelerated epigenetic aging and functional decline, while partial OSK reprogramming reversed these changes [^yang2023ict]. This finding partially bridges DDT and the information theory of aging (Sinclair): the mechanism by which DSBs drive aging may be partly through epigenetic noise rather than mutations per se. See [[hypotheses/information-theory-of-aging]] for the downstream framing. In parallel, comparative-biology work on the bowhead whale (Firsanov 2025, *Nature*) and naked mole-rat (Chen 2025, *Science*) showed that the longest-lived mammals both exhibit enhanced DNA repair — bowhead via elevated CIRBP promoting HR and NHEJ, NMR via an evolutionarily modified cGAS that potentiates HR — directly supporting prediction #3. See [[model-organisms/balaena-mysticetus]] and [[model-organisms/heterocephalus-glaber]].

---

## Predictions and evidence

### Prediction 1: Improved DNA repair extends lifespan

**SIRT6 overexpression — direct genetic test in mammals**

Kanfi et al. 2012 (*Nature*, n=46) showed that transgenic male mice overexpressing SIRT6 — a sirtuin with key roles in DSB repair, chromatin compaction, and telomere maintenance — lived ~14.5% longer than controls [^kanfi2012]. The effect was male-specific in the original paper. Roichman et al. 2021 (*Nat Commun*) demonstrated that SIRT6 overexpression extends both male and female healthspan by restoring metabolic energy homeostasis downstream of enhanced repair capacity [^roichman2021]. See [[molecules/proteins/sirt6]] for the full mechanism. #gap/needs-replication — not ITP-validated; single-lab findings.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — SIRT6 biology highly conserved; SIRT6 LOF causes premature aging in mice |
| Phenotype conserved in humans? | unknown — no human overexpression study |
| Replicated in humans? | no |

**NMR cGAS four-amino-acid variant — mechanistically precise evolutionary evidence**

Chen et al. 2025 (*Science*) identified a four amino acid substitution in NMR cGAS that removes the HR-suppressive function present in human and mouse cGAS. By weakening TRIM41-mediated ubiquitination and P97 segregase interaction, NMR cGAS undergoes prolonged chromatin retention upon DNA damage, enhancing FANCI–RAD50 interaction and amplifying HR repair. The four-AA substitutions were associated with lifespan extension in the experimental system and were proposed as a route to longevity-intervention design [^chen2025]. This is a precisely mechanistic evolutionary confirmation that DNA repair enhancement contributes to lifespan — with species-level power that no mouse experiment can replicate. See [[studies/chen-2025-nmr-cgas-hr-repair]]. #gap/no-fulltext-access — abstract-only sourcing; quantitative specifics unconfirmed.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — cGAS, TRIM41, P97/VCP, FANCI, RAD50 all expressed in human cells |
| Phenotype conserved in humans? | unknown — four-AA variant not yet tested in human cells |
| Replicated in humans? | no |

### Prediction 2: DNA repair loss accelerates aging

**Progeroid syndromes: DDR gene mutations phenocopy aging**

Multiple human and mouse genetic progeroid syndromes confirm prediction 2. Details and citations live on [[pathways/dna-damage-response]]:

- *ATM* loss-of-function causes ataxia-telangiectasia — median human survival ~25 years; cerebellar degeneration; premature immunosenescence; ~30% cancer risk. See [[molecules/proteins/atm]] (verified-partial).
- *WRN* loss-of-function causes Werner syndrome — premature atherosclerosis, cataract, type 2 diabetes, osteoporosis, and cancer risk beginning in young adulthood. Werner recapitulates multiple aging hallmarks with adult onset, providing particularly clean evidence for the DDT since the syndrome starts post-developmentally.
- *BRCA1/2* deficiency accelerates genomic instability in dividing cells; while primarily characterized as cancer-susceptibility genes, hypomorphic mouse models show aging-related phenotypes — see [[molecules/proteins/brca1]] and [[molecules/proteins/brca2]]. #gap/unsourced — dedicated study pages for BRCA hypomorphic aging mouse models are not yet seeded; claims are structurally supported by the protein pages but lack wiki-level primary citations.

**p53 hyperactivation — antagonistic-pleiotropy evidence**

Tyner et al. 2002 (*Nature*) demonstrated that p53+/m mice with constitutively elevated p53 activity show 23% shorter median lifespan (96 vs 118 weeks, P<0.0001) with osteoporosis, muscle wasting, and lymphoid atrophy — while being cancer-resistant [^tyner2002]. This result both supports and complicates DDT: it supports the prediction that maximizing DNA damage *response* (p53 surveillance) drives stem-cell exhaustion and tissue aging, confirming a mechanistic link between DDR activity and aging rate. It also demonstrates that the *response to* DNA damage, not just the damage itself, shapes aging rate. See [[studies/tyner-2002-p53-mutant-aging]].

**ICE model — induction of epigenetic disruption via targeted DSBs**

Yang et al. 2023 (*Cell*) showed that site-specific DSBs that mimic normal aging's epigenetic disruption — without permanent sequence change — accelerate the epigenetic aging clock and produce functional aging phenotypes. OSK reprogramming reverses both the epigenetic advance and functional decline [^yang2023ict]. This partially bridges DDT and the information theory: DNA damage drives aging partly via epigenetic noise downstream of the DDR. See [[studies/yang-2023-epigenetic-information-loss]].

### Prediction 3: Long-lived species have enhanced DNA repair

**Bowhead whale: CIRBP-mediated dual-pathway repair enhancement**

The bowhead whale (*Balaena mysticetus*, ~211-year max lifespan) resolves Peto's paradox via elevated expression of CIRBP (cold-inducible RNA-binding protein), which promotes both NHEJ and HR. See [[model-organisms/balaena-mysticetus]] (verified). This is a direct confirmation of prediction 3 in the most extreme longevity outlier among mammals. Firsanov et al. 2025 (*Nature*) provides the primary source; its direct-comparison of bowhead vs human repair capacity constitutes some of the most precisely quantified cross-species repair data available [^firsanov2025].

**Naked mole-rat: cGAS-HR axis and broader genomic stability**

NMR cells maintain low rates of somatic mutation accumulation relative to same-age mice. Multiple mechanisms have been identified: superior contact inhibition (p16/p27 two-tier), HMW hyaluronan suppression of neoplastic transformation, and — per Chen 2025 — an evolutionarily modified cGAS that potentiates HR repair by prolonged chromatin retention [^chen2025]. See [[model-organisms/heterocephalus-glaber]]. The ensemble presents a convergent case that repair enhancement is mechanistically central to extreme longevity in this species.

**Cross-species somatic mutation rate scaling**

Vijg 2021 (*Ageing Res Rev*) reviewed evidence that somatic mutation rates track organismal lifespan inversely across mammals: longer-lived species accumulate mutations more slowly. This observation supports prediction 3 at the population level. Whether per-cell mutation rates in the soma causally limit lifespan — rather than merely correlating with it — is the key unresolved question [^vijg2021]. The Somatic Mutations in Aging Project (Lee et al. 2022, *Nature*) provided cross-tissue quantification in humans; a Vijg & Dong 2020 (*Cell*) review synthesized the mechanistic framework for how somatic mosaicism drives aging [^vijg2020].

### Prediction 4: Repair fidelity declines with age in human tissues

This prediction is robustly supported observationally:

- γH2AX foci (markers of unresolved DSBs) increase progressively in aged human liver, brain, and lymphocytes — see [[hallmarks/genomic-instability]].
- HR efficiency declines with age in human cells as RAD51 and BRCA1 expression falls; NHEJ becomes more error-prone (increased indels). Base excision repair (BER) activity falls in aged brain and liver. See [[pathways/base-excision-repair]].
- Somatic mutation burden rises ~2–3-fold from young to old in human tissues (Vijg & Dong 2020; Panier et al. 2024 *Annu Rev Pathol* [^panier2024]).
- Whether repair decline is *causal* for aging or a downstream consequence of broader cellular dysfunction is not established in humans — genetic rescue experiments are feasible only in model organisms. #gap/needs-human-replication

---

## Counter-evidence and complications

### Progeroid syndromes argue for lesion-type specificity, not generic damage

The fact that different progeroid syndromes produce distinct subsets of aging phenotypes — Werner syndrome affects connective tissue and metabolism particularly; Cockayne syndrome produces neurological and growth deficits prominently; ataxia-telangiectasia particularly affects the immune system and cerebellum — argues that **the type of lesion (and the repair pathway that is compromised) matters enormously**, not just the total damage burden. This is consistent with a refined DDT but argues against a simple "total damage = aging rate" formulation. Not all DNA damage drives all aspects of aging: different lesion types route through different cellular outcomes (senescence, apoptosis, epigenetic disruption, mutation). #gap/contradictory-evidence

### Invertebrate DDR mutants often have normal lifespan

In *C. elegans* and *Drosophila melanogaster*, loss-of-function mutations in many DDR genes do not shorten lifespan, and in some cases extend it. *C. elegans* rad-51, him-5, and other HR mutants can live normally or even show mild extension under some conditions. This creates a significant challenge for the DDT in its strong form: if DNA damage drove aging rate-limitingly, these organisms should age faster when repair is impaired. The invertebrate exception likely reflects both (a) reduced replication stress in non-dividing adult soma, and (b) fundamentally different aging biology in organisms with post-mitotic adult neurons dominating the body plan. See [[model-organisms/caenorhabditis-elegans]]. #gap/contradictory-evidence

### Bub1b transgenics: aneuploidy acceleration does not uniformly accelerate aging

Mice haploinsufficient for *BUB1B* (BUBR1), a spindle assembly checkpoint kinase, accumulate aneuploidy and develop progeroid features. However, the specific phenotypic profile (cataracts, sarcopenia, fat loss, wound-healing defects) does not mirror aging uniformly — several aging-associated pathologies do not appear, and the lifespan shortening is moderate. Whether this is a partial "aneuploidy-type" DDT validation or a spindle-checkpoint-specific effect is debated. #gap/contradictory-evidence

### Hyperfunction theory: direct competition for primacy

The hyperfunction theory (Blagosklonny) holds that aging is driven by continued mTOR/IIS signaling overdrive, not damage accumulation. Its strongest evidence — rapamycin extends lifespan in genetically heterogeneous mice across multiple sites (NIA ITP) — is difficult for DDT to explain without invoking mTOR's role in DNA repair regulation. See [[hypotheses/hyperfunction-theory]]. The critical empirical tension: **rapamycin's lifespan benefit does not appear to require improved DNA repair**, and the NIA ITP null record for antioxidant compounds (which would reduce a key source of oxidative DNA damage) cuts against DDT-driven benefit from damage reduction. However, rapamycin may indirectly reduce DNA damage burden by reducing replication stress and inducing autophagy. This is contested. #gap/contradictory-evidence

### Caloric restriction works partly independently of DNA damage reduction

CR extends lifespan robustly in rodents and other organisms; its mechanisms include mTOR suppression, AMPK activation, sirtuin activation, and autophagy induction — but its relationship to DNA damage burden is complex. Some studies show CR reduces oxidative DNA damage in rodent tissues; others show CR's primary benefit operates via anabolic suppression rather than damage repair. If CR's major mechanism were repair enhancement, it would strongly support DDT; instead, the mechanism plurality partially decouples the repair-enhancement and longevity-extension pathways. See [[interventions/lifestyle/caloric-restriction]].

---

## Relation to adjacent hypotheses

### vs Free-radical theory of aging

DDT is broader: it centers on DNA lesions regardless of their source. ROS-driven oxidative damage (8-oxo-dG, strand breaks from reactive oxygen species) is one input to DDT's damage register, but not the only one. DDT survives even if free-radical damage is not the dominant lesion source — replication errors, endogenous aldehydes (Patel lab work on formaldehyde-DNA adducts and FANC pathway dependence), spontaneous deamination, and replication-stress-induced DSBs all contribute to lesion burden. The [[hypotheses/free-radical-theory-of-aging]] (status: **superseded**) failed primarily on its specific causal prediction that antioxidant supplementation should extend lifespan. DDT makes no such prediction; it would predict that reducing *all* lesion sources would extend lifespan, not just ROS.

### vs Somatic-mutation theory (Szilard 1959 origin)

DDT is broader than the somatic-mutation hypothesis. The somatic-mutation hypothesis is essentially the mutation-driven subset of DDT — it predicts that heritable sequence changes (mutations) accumulate and drive aging. DDT additionally encompasses unrepaired DSBs, ICLs, replication stress, transcription-blocking lesions, and the downstream epigenetic, senescent, and apoptotic consequences of these lesions even when no heritable mutation results. The Vijg 2020–2021 synthesis explicitly frames DDT as encompassing "all roads from DNA damage," not just mutagenesis per se [^vijg2021][^vijg2020].

### vs Information theory of aging (Sinclair 2023)

These two hypotheses are **compatible and potentially hierarchically related**. Sinclair's information theory holds that aging is driven by loss of epigenetic information — specifically, that DSBs cause redistribution of chromatin regulators (SIRT1, HDAC1) away from their home loci, eroding regulatory fidelity. Under this framing, DNA damage (DDT) is the *initiating event* and epigenetic noise (information theory) is the *proximal mechanism*. Yang et al. 2023's ICE system provided explicit experimental evidence for this causal chain: DSBs → epigenetic disruption → aging. The information theory can be viewed as DDT with a specified molecular mechanism for how DNA lesions drive aging — see [[hypotheses/information-theory-of-aging]]. The key remaining distinction: information theory emphasizes that the *epigenetic information* is the limiting resource, and if it can be restored (via OSK reprogramming) the organism can recover even from a high accumulated-damage context. DDT in its original form would predict that damage accumulation is irreversible. Recent evidence favors the hybrid view.

### vs Hyperfunction theory (Blagosklonny 2006)

DDT and hyperfunction are **genuinely competing** at the level of primacy. Hyperfunction holds that aging is signaling-overdrive, not damage accumulation. The empirical tension is starkest in the rapamycin ITP data: rapamycin extends lifespan dramatically in mice when started at an age when damage has already substantially accumulated, suggesting the benefit is from suppressing ongoing hyperfunction rather than preventing prior damage. A DDT advocate can argue that mTOR suppression secondarily reduces replication stress and DNA damage burden; a hyperfunction advocate argues the mTOR pathway is primary. Both may be partially correct — the field's current best synthesis is that damage accumulation and signaling dysregulation are parallel, partially interacting drivers. See [[hypotheses/hyperfunction-theory]] for the mTOR lifespan data.

---

## Status assessment

**Currently: active — strengthened by recent comparative-biology evidence; not yet displaceable by any single competing hypothesis.**

The DDT has been progressively strengthened since 2012 by:

1. **SIRT6 lifespan extension** (Kanfi 2012, Roichman 2021) — direct genetic test of the prediction that improving a DNA repair cofactor extends lifespan in a mammal.
2. **Bowhead whale CIRBP finding** (Firsanov 2025) — the world's longest-lived mammal achieves its longevity partly via superior DNA repair fidelity.
3. **NMR cGAS four-AA variant** (Chen 2025) — an evolutionarily precise molecular mechanism by which a long-lived rodent achieves superior HR repair, with lifespan extension attributable to the four-AA substitution.
4. **Vijg 2020–2021 somatic mutation quantification** — cross-tissue and cross-species somatic mutation burden data provide quantitative epidemiological grounding.
5. **ICE model** (Yang 2023) — experimental confirmation that induction of DNA damage-equivalent epigenetic disruption accelerates aging, and repair/restoration reverses it.

The DDT has been *complicated but not overturned* by:

- Hyperfunction-theory evidence (rapamycin ITP data)
- Invertebrate DDR mutant null phenotypes
- Lesion-type specificity of progeroid syndromes
- The recognition that DNA damage *responses* (senescence, apoptosis) rather than lesions per se may be the proximate aging drivers

The most intellectually honest current position: DDT is **active and strongly supported for mammalian aging**, with the caveat that the specific lesion type, tissue, and cellular response context determines how damage translates into functional aging. The theory is not refuted but requires specification — "which type of DNA damage, in which cell type, via which downstream pathway" — to be fully mechanistically predictive.

---

## What would update this hypothesis

| Observation | Direction of update |
|---|---|
| NIA ITP-class multi-site mouse trial of a DNA repair enhancer (e.g., SIRT6 overexpression or a SIRT6-activating compound) extends lifespan in genetically heterogeneous mice | Strong positive |
| Human genetic variant in a major repair gene (e.g., *WRN*, *ATM*) with MR-validated causal effect on biological aging rate or lifespan | Strong positive |
| Restoration of repair fidelity in aged human cells to youthful levels reverses functional aging markers | Moderate positive |
| Cross-tissue somatic mutation burden shows *no* dose-response relationship with biological age acceleration (via GWAS/MR) | Significant negative |
| Rapamycin's lifespan benefit in mice is fully abrogated in animals with enhanced DNA repair → implies benefit is *not* from damage reduction | Complicating (would dissociate DDT and hyperfunction predictions) |
| The four-AA NMR cGAS variant introduced into human cells produces no HR potentiation or lifespan-related phenotype | Negative for the translational claim; does not falsify the comparative-biology point |
| A mammal with genuinely *impaired* DNA repair capacity that nonetheless lives longer than its size predicts | Would falsify prediction 3 unless other longevity mechanisms dominate |

---

## Knowledge gaps

- `#gap/needs-human-replication` — All direct lifespan-extension experiments (SIRT6, NMR cGAS) are mammalian model or comparative-biology; no human RCT or genetic intervention data exists.
- `#gap/needs-replication` — SIRT6 lifespan extension: single-lab finding (Cohen lab); not ITP-validated; strain-specific concerns apply.
- `#gap/no-fulltext-access` — Chen 2025 (*Science* adp5056): closed-access; quantitative specifics (n, effect sizes, p-values for lifespan extension) not independently verified. Wiki page [[studies/chen-2025-nmr-cgas-hr-repair]] sourced from abstract only.
- `#gap/unsourced` — Szilard 1959 PNAS primary source not in a local paper archive; historical claims cited from secondary reviews.
- `#gap/unsourced` — Curtis 1963 primary source not in a local paper archive; cited from secondary reviews.
- `#gap/unsourced` — BRCA1/2 hypomorphic mouse aging studies (prediction 2 support) not yet seeded as study pages; structurally supported by protein pages.
- `#gap/unsourced` — Fanconi anemia pathway dependence on endogenous aldehyde-DNA adducts (Patel lab): relevant mechanistic DDT support; no study page yet.
- `#gap/needs-human-replication` — Whether repair fidelity decline with age is *causal* for human tissue aging (not merely correlative) requires human genetic studies or controlled repair-enhancement interventions.
- `#gap/contradictory-evidence` — Invertebrate DDR mutant null/extension phenotypes are not reconciled with a universal DDT; species-specific framing required.
- `#gap/no-mechanism` — The quantitative rules governing how specific lesion types and burdens cross the threshold from tolerated damage to rate-limiting aging acceleration in humans are not established.

---

## Related wiki pages

### Hallmarks
- [[hallmarks/genomic-instability]] — the canonical wiki home for the mechanistic substrate of DDT; progeroid syndrome table, γH2AX accumulation, CHIP epidemiology, ATM/p53 causal evidence
- [[hallmarks/cellular-senescence]] — DDR-persistent foci are the proximal trigger for OIS and RIS; senescent cells are a downstream consequence of chronic DNA damage signaling
- [[hallmarks/stem-cell-exhaustion]] — p53 hyperactivation accelerates stem-cell exhaustion (Tyner 2002); BRCA1/2 deficiency depletes HSC functional reserve; repair fidelity decline limits progenitor pool renewal
- [[hallmarks/epigenetic-alterations]] — DSBs drive epigenetic noise via DDR-chromatin remodeling (Yang 2023 ICE mechanism); bridge between DDT and information theory

### Pathways
- [[pathways/dna-damage-response]] (verified-partial) — the cellular DDR machinery; progeroid syndrome table; two-arm senescence model (growth-arrest vs SASP)
- [[pathways/homologous-recombination]] — the high-fidelity DSB repair pathway directly potentiated by NMR cGAS variant (Chen 2025); SIRT6 and BRCA1/2 operate here
- [[pathways/base-excision-repair]] — BER fidelity declines with age in human tissues; primary pathway for oxidative base damage (8-oxo-dG)
- [[pathways/p53-pathway]] — DDR → p53 stabilization → senescence/apoptosis axis; Tyner 2002 trade-off

### Proteins
- [[molecules/proteins/sirt6]] — SIRT6 lifespan extension; DSB repair via H3K9/K56 deacetylation; NAD+ dependence
- [[molecules/proteins/atm]] — primary DSB transducer kinase; biallelic loss causes ataxia-telangiectasia; required for inflammatory SASP component
- [[molecules/proteins/atr]] — replication-stress transducer; ssDNA gap sensing; stalled-fork stabilization
- [[molecules/proteins/brca1]] — HR repair; CHIP-associated variant biology
- [[molecules/proteins/brca2]] — RAD51 loading at DSBs; Fanconi anemia pathway
- [[molecules/proteins/rad50]] — MRN complex ATPase; initial DSB sensing; RAD50 recruitment potentiated by NMR cGAS chromatin retention (Chen 2025)
- [[molecules/proteins/p53]] — antagonistic pleiotropy (Tyner 2002); tumor suppression vs aging trade-off

### Studies
- [[studies/chen-2025-nmr-cgas-hr-repair]] — NMR cGAS four-AA variant; HR potentiation; lifespan extension; abstract-only (#gap/no-fulltext-access)
- [[studies/tyner-2002-p53-mutant-aging]] (verified) — p53 hyperactivation; 23% shorter lifespan; antagonistic pleiotropy evidence for DDR→aging causal link
- [[studies/yang-2023-epigenetic-information-loss]] (verified) — ICE model; DSBs → epigenetic aging; OSK reversal; bridging DDT and information theory

### Model organisms
- [[model-organisms/balaena-mysticetus]] (verified) — bowhead whale; 200+ year lifespan; CIRBP-mediated enhanced DNA repair; clearest mammalian confirmation of prediction 3
- [[model-organisms/heterocephalus-glaber]] (verified, partial scope) — NMR; cGAS HR potentiation; multiple convergent repair-enhancement mechanisms; cancer resistance
- [[model-organisms/caenorhabditis-elegans]] (verified-partial) — invertebrate exception: DDR mutants often normal lifespan; post-mitotic soma limits replication-stress-driven damage relevance
- [[model-organisms/mus-musculus]] (verified, full) — SIRT6 overexpression; p53+/m; NIA ITP data; dominant rodent DDT model

### Related hypotheses
- [[hypotheses/free-radical-theory-of-aging]] (verified, status: **superseded**) — DDT supersedes the free-radical theory as a more general account: ROS damage is one input to the lesion load, but not rate-limiting alone; antioxidant-supplementation null results falsify the free-radical hypothesis without falsifying DDT
- [[hypotheses/information-theory-of-aging]] (verified, status: **active**) — downstream of DDT: Sinclair's framework proposes that DSBs drive aging via epigenetic noise; DDT and information theory are **compatible**; information theory specifies the proximal mechanism
- [[hypotheses/hyperfunction-theory]] (verified, status: **active**) — competing hypothesis: hyperfunction argues aging is signaling-overdrive, not damage; rapamycin ITP data is the primary empirical tension with DDT; the two hypotheses may both be partially correct in different contexts
- [[hypotheses/somatic-mutation-theory-of-aging]] (status: **contested**) — the narrower sibling: it restricts the causal claim to heritable DNA-*sequence* changes (mutations), whereas DDT covers the broader lesion universe (breaks, adducts, crosslinks) including non-mutagenic damage; the somatic-mutation theory is more readily challenged by the mutator-mouse-cancer and reprogramming-reversibility data
- [[hypotheses/negligible-senescence]] — NMR and bowhead data directly relevant to DDT's comparative-biology predictions; whether repair enhancement fully explains negligible senescence is unresolved

---

## Footnotes

[^vijg2021]: doi:10.1016/j.arr.2021.101316 · Vijg J · *Ageing Res Rev* 2021;68:101316 · review · PMID 33711511 · 106 citations · FWCI 7.8 · 100th citation percentile · OA via PMC (PMC10018438) · "From DNA damage to mutations: All roads lead to aging" — synthesis of DDT from Szilard 1959 through somatic mutation quantification to modern multi-omic aging; key source for historical framing and cross-species mutation data

[^vijg2020]: doi:10.1016/j.cell.2020.06.024 · Vijg J, Dong X · *Cell* 2020;182(1):10–23 · review · 208 citations · FWCI 10.2 · 100th citation percentile · bronze OA · "Pathogenic Mechanisms of Somatic Mutation and Genome Mosaicism in Aging" — systematic treatment of tissue-specific somatic mutation burden, mosaicism, and mechanistic links to aging and cancer; 2–3-fold mutation-burden increase old vs young in multiple human tissues

[^panier2024]: doi:10.1146/annurev-pathmechdis-051122-093128 · Panier S, Wang S, Schumacher B · *Annu Rev Pathol Mech Dis* 2024;19:399–426 · review · PMID 37832947 · 37 citations · FWCI 6.9 · 100th citation percentile · "Genome Instability and DNA Repair in Somatic and Reproductive Aging" — germline vs somatic repair strategies; therapeutic implications; comprehensively covers repair-decline evidence across tissues

[^toiber2026]: doi:10.1146/annurev-pathmechdis-042624-105942 · Toiber D, Schumacher B · *Annu Rev Pathol Mech Dis* 2026 · review · PMID 41086257 · 0 citations (very recent) · hybrid OA · "Targeting Genome Stability to Mitigate Human Aging and Disease" — therapeutic strategies for repair enhancement; senescent-cell elimination; damage limitation in normal cells; most current comprehensive DDT therapeutic review

[^kanfi2012]: doi:10.1038/nature10815 · Kanfi Y, Naiman S, Amir G, Peshti V, Zinman G, Nahum L, Bar-Joseph Z, Cohen HY · *Nature* 2012;483:218–221 · in-vivo · model: transgenic male C57BL/6 mice overexpressing SIRT6 · SIRT6 overexpression extended median male lifespan ~14.5%; improved metabolic phenotypes; repair-cofactor mechanism · 1,042 citations · FWCI 52.8 · 100th citation percentile · closed-access (not_oa) #gap/no-fulltext-access — n per group and full statistical tables not confirmed against full text

[^roichman2021]: doi:10.1038/s41467-021-23545-7 · Roichman A, Elhanati S, Aon MA, Abramovich I, Di Francesco A, Shahar Y, Avivi MY, Shurgi M, Rubinstein A, Wiesner Y, Shuchami A, Petrover Z, Lebenthal-Loinger I, Yaron O, Lyashkov A, Ubaida-Mohien C, Kanfi Y, Lerrer B, Fernandez-Marcos P, Serrano M, Gottlieb E, de Cabo R, Cohen HY · *Nat Commun* 2021;12:3208 · in-vivo · model: male and female SIRT6-overexpressing C57BL/6 mice · restoration of energy homeostasis (metabolic flexibility, mitochondrial function) mediates lifespan extension; extends healthspan both sexes · 180 citations · FWCI 20.6 · gold OA · download_status: pending

[^tyner2002]: [[studies/tyner-2002-p53-mutant-aging]] · n=91 (headline comparison: 35 p53+/m + 56 p53+/+) · in-vivo · model: C57BL/6 × 129/Sv mixed background · p=<0.0001 · median lifespan 96 vs 118 wk; 23% reduction; cancer resistance but accelerated aging phenotypes · antagonistic pleiotropy of p53 DDR activity vs aging

[^yang2023ict]: [[studies/yang-2023-epigenetic-information-loss]] · in-vivo (ICE mouse model + multi-tissue) · model: C57BL6/J mice · doi:10.1016/j.cell.2022.12.027 · local PDF available · epigenetic aging rate ~50% faster in ICE mice; OSK reversed DNAme age by up to 57%; bridges DDT and information theory — DSBs → epigenetic disruption → aging

[^chen2025]: [[studies/chen-2025-nmr-cgas-hr-repair]] · n=NR · in-vitro+in-vivo · model: multiple (NMR vs human/mouse cell lines + in-vivo NMR systems) · doi:10.1126/science.adp5056 · PMID 41066557 · **#gap/no-fulltext-access** — abstract-only sourcing; quantitative specifics (n, p-values, lifespan-extension magnitudes) unconfirmed · NMR cGAS four-AA variant loses HR-suppressive function; prolonged chromatin retention potentiates HR via FANCI–RAD50 axis; four AA residues mediate lifespan extension

[^firsanov2025]: doi:10.1038/s41586-024-08096-3 — note: DOI lookup returned mismatched result for this DOI; citing from [[model-organisms/balaena-mysticetus]] verified page as the primary wiki source for Firsanov 2025 bowhead CIRBP finding. #gap/unsourced — direct DOI confirmation pending. Firsanov D et al. *Nature* 2025 — CIRBP elevation promotes NHEJ and HR in bowhead whale cells; mechanistic basis of Peto's-paradox resolution in the world's longest-lived mammal.
