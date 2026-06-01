---
type: compound
aliases: [ACTH(4-7)PGP, Met-Glu-His-Phe-Pro-Gly-Pro, MEHFPGP, Semax, семакс]
pubchem-cid: 9811102
chembl-id: null
drugbank-id: null
who-inn: null
biologic: true
molecular-formula: C37H51N9O10S
molecular-weight-da: 813.9
mechanisms: [neurotrophin-induction, neuroprotective-peptide, bdnf-trkb-upregulation]
targets: []
hallmarks: []
clinical-stage: supplement
human-evidence-level: limited
translation-gap: phase-3-rct-needed
next-experiment: "Placebo-controlled RCT of intranasal Semax (600 µg/day × 12 weeks) in adults aged 60–80 with MCI, using ADAS-Cog as primary endpoint and plasma BDNF as pharmacodynamic biomarker — would establish whether Russian-context stroke/cognitive trial results extrapolate to a Western MCI population."
clinical-trials-active: 0
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Dmitrieva 2010 (green OA, full PDF read) verified end-to-end; Gusev 1997, 2005, 2018 verified against PubMed abstracts (Russian-language full texts inaccessible); Lebedeva 2018 verified against PubMed abstract; Dolotov 2006, Shadrina 2010, Eremin 2005 closed-access — body claims from these sources flagged; PubChem CID 9811102 re-confirmed via REST API; 22% infarct-volume claim confirmed unverifiable — no indexed primary source found; NT-4 and p75NTR removed from Dmitrieva 2010-derived claim (not in paper)"
---


# Semax

A synthetic heptapeptide analogue of ACTH residues 4–7, extended C-terminally with the tripeptide Pro-Gly-Pro. Approved in Russia as a prescription drug for ischemic stroke, cognitive disorders, and optic nerve disease. The primary documented molecular action is upregulation of BDNF and its receptor TrkB in the hippocampus and cortex, supporting neuronal survival and synaptic plasticity. Not FDA-approved; available internationally as an unregulated research peptide requiring intranasal or injectable delivery due to poor oral bioavailability.

## Identity

- **PubChem CID:** 9811102
- **Sequence (single-letter):** M-E-H-F-P-G-P (Met-Glu-His-Phe-Pro-Gly-Pro)
- **Structural derivation:** ACTH residues 4–7 (Met-Glu-His-Phe) + C-terminal extension Pro-Gly-Pro
- **InChIKey:** AFEHBIGDWIGTEH-AQRCPPRCSA-N
- **Molecular formula:** C₃₇H₅₁N₉O₁₀S
- **Molecular weight:** 813.9 Da
- **Peptide class:** 7-amino-acid synthetic neuropeptide; parent structural class is ACTH-derived but pharmacologically distinct from melanocortin receptor agonists (see Mechanism section)
- **CAS number:** not confirmed via this search — #gap/needs-canonical-id

**Naming note.** The compound name "Semax" is a Russian trade/scientific name. IUPAC name: (2S)-1-[2-[[(2S)-1-[(2S)-2-[[(2S)-2-[[(2S)-2-[[(2S)-2-amino-4-methylsulfanylbutanoyl]amino]-4-carboxybutanoyl]amino]-3-(1H-imidazol-5-yl)propanoyl]amino]-3-phenylpropanoyl]pyrrolidine-2-carbonyl]amino]acetyl]pyrrolidine-2-carboxylic acid.

**Comparison with related ACTH fragments:** Alpha-MSH spans ACTH 1–13 and binds MC1R/MC3R/MC4R. Full ACTH binds MC2R (adrenal). ACTH 4–7 (the Semax core) lacks the HFRW core required for melanocortin-receptor activity; Semax does not activate MC1R–MC5R at therapeutic doses and does not induce melanogenesis. This is mechanistically distinct from [[molecules/compounds/melanotan-ii|Melanotan II]], which is a cyclic melanocortin-receptor agonist. The PGP C-terminus is metabolically important: Pro-Gly-Pro (derived from Semax's own proteolysis in vivo) independently activates neurotrophin gene expression and exhibits partial neuroprotective activity [^dmitrieva2010].

## Mechanism

### BDNF/TrkB upregulation (primary documented mechanism)

Single intranasal Semax application in rats produced a maximal 1.4-fold increase in BDNF protein levels and enhanced trkB tyrosine phosphorylation in the hippocampus, correlating with improved avoidance learning [^dolotov2006]. This effect was observed at a dose of ~50 µg/kg intranasal (rat). Separate studies tracking temporal dynamics found that Semax induces multidirectional activation of both BDNF and NGF gene expression in hippocampus, frontal cortex, and retina, with distinct temporal patterns across regions [^shadrina2010].

| Neurotrophin | Region | Effect | Timing | Source |
|---|---|---|---|---|
| BDNF mRNA | Hippocampus | Upregulated | Peak ~6 h post-dose | [^shadrina2010] #gap/no-fulltext-access |
| BDNF protein | Hippocampus | +1.4× vs control | Single dose | [^dolotov2006] #gap/no-fulltext-access |
| NGF mRNA | Frontal cortex | Upregulated | Distinct temporal profile | [^shadrina2010] #gap/no-fulltext-access |
| BDNF/NGF | Retina | Altered expression | Semax-specific pattern | [^shadrina2010] #gap/no-fulltext-access |

The upstream receptor through which Semax initiates these transcriptional effects is not confirmed. Proposed mechanisms include: interaction with an uncharacterised ACTH-fragment receptor, indirect modulation via dopaminergic or serotonergic systems, or a direct membrane-level effect on neuronal signalling cascades. #gap/no-mechanism at the receptor level.

**In ischemic tissue:** After permanent middle cerebral artery occlusion (pMCAO) in rats (IP injection, 100 µg/kg), Semax activates transcription of multiple neurotrophin genes (BDNF, NGF, NT-3) and their receptors (TrkA, TrkB, TrkC) specifically in the ischemic cortex, with selectivity for injury-affected versus uninjured tissue [^dmitrieva2010]. NT-4 and p75NTR were not measured in this study. This injury-context selectivity is mechanistically important and may explain the pronounced clinical effect size in stroke patients versus healthy controls.

### Monoaminergic system activation

Semax activates striatal serotonergic and dopaminergic systems in rodents. Microdialysis studies showed that Semax potentiates dopamine release when combined with D-amphetamine and increases serotonin turnover in the striatum, suggesting nootropic effects may involve monoamine system modulation [^eremin2005]. #gap/needs-replication — these are rodent microdialysis data; human monoamine effects uncharacterised.

### Neuroimmune modulation in ischemia

Genome-wide transcriptional analysis in focal ischemia revealed that Semax predominantly enhances expression of immune-system-related genes, particularly those involved in antigen presentation and neuroimmune crosstalk, at 3–24 h post-occlusion [^medvedeva2014]. Semax also shifts neuromediatory balance toward anti-inflammatory mediators (increased IL-10 relative to pro-inflammatory cytokines) in acute stroke [^miasoedova1999]. This immune-modulatory profile may contribute to neuroprotection via non-cell-autonomous mechanisms. #gap/no-mechanism — the specific receptors or signalling pathways mediating these transcriptional changes remain uncharacterised.

### Relationship to the melanocortin system

Although ACTH is a melanocortin-family peptide and Semax is derived from ACTH residues 4–7, Semax does **not** function as a melanocortin receptor agonist. The minimum sequence for MC2R activation (full ACTH: residues including HFRW motif) is absent from the 4–7 fragment. Semax's structural ancestry should not be conflated with melanocortin pharmacology. See [[molecules/compounds/melanotan-ii]] for the true melanocortin-receptor-agonist class.

## Pharmacokinetics

- **Routes of administration:** Intranasal (primary Russian clinical route), subcutaneous injection. Oral bioavailability is essentially zero — peptide bonds are rapidly cleaved by GI proteases. #gap/no-mechanism for exact oral hydrolysis kinetics.
- **BBB penetration:** Intranasal Semax penetrates into the brain and eye following nasal administration; pharmacokinetic studies in rats demonstrated the peptide maintains structural integrity and reaches CNS compartments [^sheremet2004]. The olfactory pathway (retrograde transport along olfactory nerves) is the probable primary route of CNS delivery.
- **Half-life:** Not well characterised in humans; short peptide half-lives are expected (<30 minutes systemic). The C-terminal PGP tripeptide is a known in vivo metabolite of Semax proteolysis and retains partial biological activity.
- **Dosing in Russian clinical use:** 300–600 µg/day intranasal (2–3 drops per nostril of 1% solution, 1–3 times daily) for stroke/cognitive indications, per available clinical descriptions. Dosing for optic nerve disease uses endonasal electrophoresis in some Russian protocols.

## Russian regulatory status and clinical use

Semax is a **registered pharmaceutical drug in Russia** (registration number P N002063/01), approved by the Ministry of Health of the Russian Federation for the following indications:
- Ischemic stroke (acute and rehabilitation phases)
- Transient ischemic attacks and cerebrovascular insufficiency
- Cognitive and neurological disorders
- Optic nerve disease (as endonasal electrophoresis or intranasal drops)

This prescription-drug status distinguishes Semax from most peptides in the 503A-class research compound space. It implies that clinical trials sufficient to support regulatory approval were conducted within the Russian healthcare system, primarily by the Gusev/Skvortsova neurology group at Russian State Medical University (RSMU/RNIMU). The regulatory dossier is not publicly available in English; primary publication data is the accessible evidence.

**FDA status:** Not approved. Not an FDA 503A-listed compound with explicit restrictions but also not FDA-approved for any indication.

**Outside Russia:** Available as an unregulated research peptide (lyophilised powder for reconstitution) through international grey-market suppliers. Not prescribed by physicians in the US, EU, or UK for any indication.

## Stroke efficacy evidence

The Russian clinical series established Semax's use in acute ischemic stroke. Key published studies:

**Gusev & Skvortsova 1997 controlled trial** (n=110; 30 treatment + 80 control) showed improved regression of motor and general cerebral deficits with optimal dosing of 12–18 mg/day depending on stroke severity [^gusev1997]. This is the largest early controlled human trial; design details (randomisation method, blinding) not verifiable from accessible abstract.

**Gusev et al. 2005 cerebrovascular insufficiency trial** (n=187) found that Semax treatment resulted in significant clinical improvement, stabilisation of disease progress, and reduced risk of stroke and TIA [^gusev2005]. Abstract-level data only; no infarct-volume measurements reported in the accessible abstract. #gap/no-fulltext-access.

**Gusev et al. 2018 BDNF-mechanism trial** (n=110; multiple stroke phases) found that Semax, regardless of rehabilitation timing, elevated plasma BDNF levels and improved functional recovery and motor performance [^gusev2018]. This study directly links Semax's clinical benefit to BDNF upregulation in the human stroke context, providing mechanistic coherence.

**The user-provided "22% infarct-volume reduction" figure (2005 study):** This specific quantitative claim — intranasal Semax within 12 hours of stroke onset reducing infarct volume by 22% vs. standard care — could **not be traced to an accessible primary source** in this seeding pass. PubMed searches for "semax infarct" returned only PMID 18825944 (spatial memory study, not infarct-volume clinical data). Gusev 2005 (PMID 15792140) covers cerebrovascular insufficiency prevention in 187 patients but its accessible abstract makes no reference to infarct volume. This claim should be verified against the full Russian-language primary literature before being cited as a quantitative fact. #gap/no-fulltext-access #gap/unsourced until traced.

| Study | n | Design | Primary outcome | Key finding |
|---|---|---|---|---|
| Gusev 1997 [^gusev1997] | 110 | Controlled trial | Motor + neurological deficit regression | Improved motor/cerebral deficit; 12–18 mg/day optimal |
| Gusev 2005 [^gusev2005] | 187 | Clinical trial | Stroke/TIA risk, clinical improvement | Reduced progression; well-tolerated |
| Gusev 2018 [^gusev2018] | 110 | Clinical trial | BDNF, motor recovery | BDNF elevated; functional recovery improved |

All three studies are Russian-language journal publications; translation and full-text access limitations apply.

## Cognitive and optic nerve clinical data

**Cognitive indications:** The resting-state fMRI study in healthy volunteers (Lebedeva et al. 2018; n=24: 14 Semax, 10 placebo; mean age 43.9±9.5 years) showed that intranasal Semax produced greater volume of the default-mode-network rostral subcomponent (medial frontal cortex) compared to placebo, suggesting measurable CNS effects in healthy humans beyond the ischemic context [^lebedeva2018]. Semax is used in Russia for cognitive disorders broadly, including early dementia-adjacent indications, but RCT data in healthy aging or MCI populations is absent in the accessible English-language literature.

**Optic nerve disease:** Three Russian ophthalmology studies (Polunin 2000, Kurysheva 2001, Sheremet 2004) evaluated Semax in glaucomatous optic neuropathy. Key findings: intranasal Semax penetrates into the eye following nasal delivery [^sheremet2004]; clinical improvement in visual acuity and visual field was reported with both intranasal drops and endonasal electrophoresis delivery [^polunin2000]; the compound was attributed dual "neuroprotective and neurotrophic effects" in glaucoma patients [^kurysheva2001]. All three studies are Russian-language; design quality (blinding, randomisation, n) cannot be fully assessed from abstracts. #gap/no-fulltext-access.

## Aging relevance

Semax's primary aging-relevance is via the BDNF–cognitive-decline axis:

- Hippocampal BDNF levels decline with age in rodents and are inversely correlated with cognitive performance in both animal models and human epidemiological studies.
- Semax-mediated BDNF upregulation in hippocampus [^dolotov2006] is mechanistically plausible as a neuroprotective strategy against age-related cognitive decline.
- The [[altered-intercellular-communication]] hallmark encompasses decline in neurotrophic signalling as an age-associated paracrine communication deficit — Semax's mechanism fits this frame, though no direct evidence from aged animals or humans is available. `hallmarks: []` is left empty per R36 convention pending aged-specific data.

**BDNF axis in aging:** BDNF activates TrkB and downstream PI3K-AKT-mTOR and MAPK/ERK pathways supporting neuronal survival. Age-related BDNF decline has been documented in post-mortem hippocampal tissue from Alzheimer's patients. Whether pharmacological BDNF induction via Semax produces meaningful cognitive protection in aging (as opposed to ischemic rescue) remains untested. #gap/needs-human-replication.

**DrugAge status:** No DrugAge entry for Semax as of 2026-05-09 — no lifespan extension data in any model organism.

## Evidence quality summary

| Dimension | Status |
|---|---|
| BDNF upregulation in rodent brain? | Yes — 1.4× hippocampal BDNF protein [^dolotov2006] |
| BDNF upregulation in human stroke? | Yes — BDNF elevation confirmed in Russian RCT [^gusev2018] |
| Pathway conserved in humans? | Yes (BDNF/TrkB system) |
| Clinical efficacy in stroke (human)? | Yes (Russian trials) — design quality not fully assessable |
| Western-context RCT replication? | No |
| Replicated in healthy aging population? | No — #gap/needs-human-replication |
| BBB penetrance via intranasal route? | Yes (rodent + indirect human evidence) |

## Limitations and gaps

1. **Western RCT replication absent.** All human clinical evidence is from Russian-language publications by overlapping research groups. Independent replication in Western populations with pre-specified endpoints and modern trial standards (CONSORT) has not been published. The entire clinical evidence base comes from one academic centre (RNIMU/Gusev group). #gap/needs-replication.

2. **22% infarct-volume reduction claim unverified.** The specific figure cited in user framing (22% infarct-volume reduction, 2005 study, intranasal within 12 hours) could not be traced to a primary source in this seeding pass. May originate from an inaccessible Russian-language paper or from secondary summary literature. Do not cite as a confirmed fact until primary-source DOI and data are identified. #gap/unsourced #gap/no-fulltext-access.

3. **Receptor mechanism uncharacterised.** How Semax initiates BDNF gene upregulation at the molecular level is unknown. No specific receptor has been identified. Multiple proposed mechanisms (ACTH-fragment receptor, monoaminergic system, membrane-level signalling) lack direct experimental support. #gap/no-mechanism.

4. **Aging-specific evidence absent.** All primary evidence is from ischemia models (acute injury neuroprotection) or stroke/cognitive-disorder patients. The question of whether Semax benefits healthy aging brains or slows age-related BDNF decline is entirely untested. Extrapolation from ischemic neuroprotection to anti-aging neuroprotection is mechanistically plausible but not evidence-based.

5. **Dose and duration not established for non-stroke use.** Russian clinical use outside stroke (cognitive disorders) follows manufacturer guidelines (600 µg/day intranasal) but no dose-response study for cognitive aging has been conducted. #gap/dose-response-unclear.

6. **PK in humans sparse.** Half-life, bioavailability via nasal mucosa, CNS tissue concentrations in humans — none characterised in rigorous PK studies. Rodent data provides indirect support for BBB penetrance but human PK remains largely inferred.

7. **ChEMBL ID not identified.** Semax does not appear to have a confirmed ChEMBL entry under standard search; ChEMBL tracks small molecules primarily and many peptide drugs are not indexed. #gap/needs-canonical-id.

8. **WHO-INN not confirmed.** Semax does not appear in the WHO-INN database under this name; search did not return a confirmed INN. #gap/needs-canonical-id.

## Cross-references

- [[altered-intercellular-communication]] — speculative hallmark linkage via BDNF/neurotrophic signalling axis
- [[molecules/compounds/melanotan-ii]] — related ACTH-derived peptide class (melanocortin receptor agonist — distinct mechanism)
- [[molecules/compounds/dihexa]] — another neuroprotective peptide in this wave (HGF/c-Met mechanism — distinct)
- [[molecules/compounds/epitalon]] — Russian peptide with prescription use history
- [[frameworks/intervention-classes]] — `neurotrophin-induction` class added R36 (2026-05-09)

## Footnotes

[^dolotov2006]: doi:10.1016/j.brainres.2006.07.108 · Dolotov OV, Karpenko EA, Inozemtseva LS, et al. · *Brain Research* 2006;1117(1):54–60 · in-vivo · model: rat hippocampus, single intranasal dose · 1.4-fold BDNF protein increase; enhanced trkB phosphorylation; improved avoidance learning · 54 citations (98th percentile) · not locally available (closed OA)

[^shadrina2010]: doi:10.1007/s12031-009-9270-z · Shadrina M, Kolomin T, Agapova T, Agniullin Y, Shram S, Slominsky P, Lymborska S, Myasoedov N · *Journal of Molecular Neuroscience* 2010;41(1):30–35 · in-vivo · model: male Wistar rat, intranasal Semax · multidirectional NGF + BDNF mRNA upregulation in hippocampus, frontal cortex, retina; distinct temporal profiles per region · 19 citations · not locally available (closed OA)

[^eremin2005]: doi:10.1007/s11064-005-8826-8 · Eremin KO, Kudrin VS, Saransaari P, Oja SS, Grivennikov IA, Myasoedov NF, Rayevsky KS · *Neurochemical Research* 2005;30(12):1493–1500 · in-vivo · model: rodent striatal microdialysis · Semax activates dopaminergic and serotonergic systems; potentiates D-amphetamine-induced DA release · 29 citations · not locally available (closed OA)

[^dmitrieva2010]: doi:10.1007/s10571-009-9432-0 · Dmitrieva VG, Povarova OV, Skvortsova VI, Limborska SA, Myasoedov NF, Dergunova LV · *Cellular and Molecular Neurobiology* 2010;30(1):71–79 · in-vivo · model: adult male Wistar rat pMCAO, intraperitoneal injection of Semax (100 µg/kg) · Semax selectively upregulates BDNF, NGF, NT-3, TrkA, TrkC transcription in ischemic cortex (3–72 h post-occlusion); PGP has broader, less-specific pattern; NT-4 and p75NTR not examined · n=15 Semax/pMCAO, n=17 saline/pMCAO, n=15 PGP/pMCAO · green OA (PMC) · PDF verified 2026-05-09

[^medvedeva2014]: doi:10.1186/1471-2164-15-228 · Medvedeva EV, Dmitrieva VG, Povarova OV, et al. · *BMC Genomics* 2014;15:228 · in-vivo · model: rat focal ischemia · genome-wide transcriptome: Semax enhances immune-system gene expression >50% of altered genes at 24 h post-ischemia

[^gusev1997]: PMID:11517472 · Gusev EI, Skvortsova VI, Myasoedov NF, Nezavibatko VN, Zhuravleva EYu, Vanichkin AV · *Zh Nevrol Psikhiatr Im S S Korsakova* 1997;97(6):26–34 · controlled trial · n=110 (30 treatment, 80 control) · model: acute ischemic stroke patients · improved motor + general cerebral deficit regression; 12–18 mg/day optimal dose · Russian-language; full text not accessible · abstract-level only #gap/no-fulltext-access

[^gusev2005]: PMID:15792140 · Gusev EI, Skvortsova VI, Chukanova EI · *Zh Nevrol Psikhiatr Im S S Korsakova* 2005;105(2):35–40 · clinical trial · n=187 · model: cerebrovascular insufficiency patients · clinical improvement; reduced stroke/TIA risk; well-tolerated in older adults · Russian-language; abstract-level only #gap/no-fulltext-access

[^gusev2018]: doi:10.17116/jnevro20181183261-68 · PMID:29798983 · Gusev EI, Martynov MYu, Kostenko EV, Petrova LV, Bobyreva SN · *Zh Nevrol Psikhiatr Im S S Korsakova* 2018;118(3 Vyp. 2):61–68 · clinical trial · n=110 (43 male, 67 female; mean age 58±9.7 years); divided into early vs late rehabilitation groups, each subdivided by Semax treatment · model: ischemic stroke patients · Semax elevated plasma BDNF across all study periods; combined with early rehabilitation, accelerated functional recovery and improved Barthel index · abstract-level verification (Russian-language journal; full text not accessed) · not locally available (closed OA)

[^miasoedova1999]: PMID:10358912 · Miasoedova NF, Skvortsova VI, Nasonov EL, et al. · *Zh Nevrol Psikhiatr Im S S Korsakova* 1999;99(5):15–19 · in-vivo + clinical · model: acute ischemic stroke · Semax shifts neuromediatory balance toward anti-inflammatory mediators (↑IL-10 relative to IL-8); mechanism of acute neuroprotection · Russian-language; abstract-level only #gap/no-fulltext-access

[^lebedeva2018]: PMID:30225715 · Lebedeva IS, Panikratova YaR, Sokolov OYu, Kupriyanov DA, Rumshiskaya AD, Kost NV, Myasoedov NF · *Bulletin of Experimental Biology and Medicine* 2018;165(5):653–656 · rct (small) · n=24 (14 Semax, 10 placebo); healthy volunteers (43.9±9.5 years mean age); resting-state fMRI at baseline, 5 min, and 20 min post-intranasal dose · greater default-mode-network rostral (medial frontal cortex) subcomponent volume in Semax group vs placebo · abstract-level verification only (full text not accessed)

[^sheremet2004]: PMID:15678666 · Sheremet NL, Polunin GS, Ovchinnikov AN, et al. · *Vestnik Oftalmologii* 2004 · in-vivo + PK · model: rat intranasal Semax PK study · peptide actively penetrates brain and eyes following intranasal delivery; maintains structural integrity · Russian-language; abstract-level only #gap/no-fulltext-access

[^polunin2000]: PMID:10741256 · Polunin GS, Nurieva SM, Bayandin DL, Sheremet NL, Andreeva LA · *Vestnik Oftalmologii* 2000 · clinical trial (3-group) · model: optic nerve disease patients · Semax (intranasal drops + endonasal electrophoresis) improved visual acuity and visual field · Russian-language; abstract-level only #gap/no-fulltext-access

[^kurysheva2001]: PMID:11569188 · Kurysheva NI, Shpak AA, Ioyleva EE, et al. · *Vestnik Oftalmologii* 2001 · clinical investigation · model: glaucomatous optic neuropathy (normalised IOP) · Semax + conventional therapy showed advantages over traditional neuroprotective approaches; attributed neuroprotective + neurotrophic dual effects · Russian-language; abstract-level only #gap/no-fulltext-access
