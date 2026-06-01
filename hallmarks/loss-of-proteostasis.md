---
type: hallmark
aliases: [proteostasis collapse, protein homeostasis decline, protein homeostasis loss]
category: primary
mechanistic-tier: intermediate
intervention-tractability: moderate
caused-by: ["[[disabled-macroautophagy]]", "[[mitochondrial-dysfunction]]", "[[deregulated-nutrient-sensing]]"]
causes: ["[[neurodegeneration]]"]
introduced: 2013
sens-correspondence: ["[[sens-damage-categories|LysoSENS]]", "[[sens-damage-categories|AmyloSENS]]"]
key-pathways: ["[[autophagy]]", "[[chaperone-mediated-autophagy]]", "[[ubiquitin-proteasome-system]]", "[[unfolded-protein-response]]"]
key-phenotypes: ["[[neurodegeneration]]", "[[alzheimers-disease]]", "[[parkinsons-disease]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Komatsu 2006 (ATG7 KO), Hara 2006 (ATG5 KO), Pyo 2013 (ATG5 OE lifespan), and Fernández 2018 (Beclin-1 F121A lifespan) verified against primary-source PDFs. Cuervo & Dice 2000 (JBC) not locally available (failed download) — the page's qualitative CMA decline claim was confirmed consistent with the PubMed abstract; the '>30% decline' figure is absent from this page (correctly omitted). Anckar & Sistonen 2011 and López-Otín 2013 review citations not independently re-read end-to-end this pass; López-Otín 2023 closed-access (not_oa). Zhang & Cuervo 2008 available locally but framing cross-checked against verified [[chaperone-mediated-autophagy]] rather than re-read in full. UPS decline claims cited to López-Otín 2013 review only — no independent primary source verified."
---

# Loss of proteostasis

The chronic, age-associated decline of the cellular protein-quality-control network — molecular chaperones, the ubiquitin-proteasome system (UPS), and autophagy/lysosomal pathways — resulting in the accumulation of misfolded and aggregated proteins. One of the four **Primary** hallmarks in López-Otín et al. 2013 [^lopezotitn2013], retained in the 2023 expanded hallmarks [^lopezotitn2023]. **In 2023, macroautophagy decline was split off as its own Primary hallmark** — see [[disabled-macroautophagy]]. This page covers the broader proteostasis network, with cross-references to the autophagy-specific story.

SENS correspondence: intracellular aggregates cleared by autophagy/lysosomes map to **LysoSENS**; extracellular aggregates (Aβ, tau, transthyretin) map to **AmyloSENS** — see [[sens-damage-categories]].

## Definition (per López-Otín 2013)

Aging compromises the proteostasis network — the integrated set of pathways that maintain a correctly folded, functional proteome. Proteostasis failure manifests as: accumulation of misfolded proteins in intracellular inclusions, deposition of extracellular amyloid aggregates, reduced throughput of the UPS and lysosomal degradation pathways, and heightened ER stress. The phenotypic read-out is most severe in post-mitotic, long-lived cells — particularly neurons — where dilution through cell division is unavailable [^lopezotitn2013].

## Integrated stress response — the cellular surge protector

A fourth integrating layer beyond the three classical arms: the **integrated stress response (ISR)** converges four stress kinases (PERK / GCN2 / HRI / PKR) onto a single eIF2α-Ser51 phosphoswitch that arrests general translation and selectively translates ATF4. Chronic ISR activation in aged tissues — particularly brain — drives translation suppression and contributes to age-related cognitive decline. See [[integrated-stress-response]] (R20 verified) for the full pathway. Constituent pages: [[perk]] (UPR-ER arm), [[gcn2]] (amino acid arm), [[eif2alpha]] (substrate convergence point), [[atf4]] (master ISR transcription factor). The chemical genetic tool ISRIB and clinical successor DNL343 bypass the eIF2α phosphoswitch and reverse age-related cognitive decline in mouse models — the most promising direct ISR-aging therapeutic angle.

## Unfolded protein response — the ER-stress arm

The **unfolded protein response (UPR)** is the ER-resident proteostasis surveillance system, with three transducers — PERK, IRE1α, and ATF6 — that detect ER lumen misfolded-protein load and triage between adaptive (chaperone upregulation, ERAD induction, translation attenuation) and terminal (CHOP-driven apoptosis) outputs. Aged tissues exhibit chronic, low-grade UPR activation: maladaptive shifts toward CHOP/PERK signaling contribute to ER stress in proteopathies (AD, PD, ALS) and metabolic aging (hepatic, β-cell). See [[unfolded-protein-response]] (verified) for the full pathway, including the PERK→eIF2α→ATF4 arm shared with the broader ISR, the IRE1α→XBP1s splicing arm, and the ATF6 cleavage arm. Mechanistically the UPR is the ER-localized arm of proteostasis whereas the cytosolic chaperone/HSF1 axis above governs cytosolic-nuclear proteostasis.

## The three arms of proteostasis

### 1. Molecular chaperones

Chaperones assist de novo protein folding, prevent stress-induced misfolding, and triage irreparably damaged proteins toward degradation. Key chaperones in the aging context:

- **HSC70 (HSPA8)** — constitutively expressed; the cytosolic chaperone that recognizes KFERQ-like motifs on damaged substrates and targets them to lysosomes via chaperone-mediated autophagy. See [[chaperone-mediated-autophagy]] (verified-partial). Sibling: [[hsp70]] (stress-inducible HSPA1A/HSPA1B paralogs).
- **[[hsp90]]** — client protein stabilizer; moonlights as a luminal chaperone at the CMA translocation complex; HSP90AA1 + HSP90AB1 paralogs comprise ~1–2% of cytosolic protein. Druggability-tier 2 (advanced-clinical inhibitors only; no FDA-approved HSP90 drug as of 2026). See [[hsp90]] (verified) and [[chaperone-mediated-autophagy]] (verified-partial).
- **HSF1 (Heat Shock Factor 1)** — master transcription factor for inducible chaperone ([[hsp70]], [[hsp90]], HSP27) expression. HSF1 transcriptional activity declines with age, blunting the inducible heat shock response [^anckar2011]. #gap/needs-human-replication — direct measurement of HSF1 activity decline in aged human tissues is sparse; most data from model organisms and cell lines.

The **inducible heat shock response** — the ability of cells to rapidly upregulate chaperone expression in response to proteotoxic stress — is blunted with age via decreased HSF1 DNA-binding and transactivation activity [^anckar2011]. This is functionally important because the inducible response is the primary buffer against acute proteotoxic insults.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (HSF1 pathway highly conserved) |
| Phenotype (HSF1 decline) conserved in humans? | partial (cell line + some human tissue data; quantitative cohort data limited) |
| Replicated in humans? | no #gap/needs-human-replication |

### 2. Ubiquitin-Proteasome System (UPS)

The UPS degrades short-lived, regulatory, and damaged cytosolic/nuclear proteins tagged with K48-linked polyubiquitin chains via the 26S proteasome. **Proteasome activity declines with age** across multiple organisms — including reduced chymotrypsin-like, trypsin-like, and caspase-like activities in aged cells and tissues [^lopezotitn2013]. The 20S "open gate" proteasome can degrade some oxidatively damaged proteins independently of ubiquitin, providing a backup clearance route.

Full mechanistic detail lives on the planned atomic page [[ubiquitin-proteasome-system]] (R10b target; not yet seeded). Key aging-relevant points:
- Impaired proteasome activity → accumulation of oxidized, cross-linked, and aggregated proteins → aggregate seeds that further inhibit proteasome access
- UPS and autophagy partially compensate for each other; loss of both in neurons is catastrophic (see genetic evidence below)
- The UPS cannot degrade large oligomers or aggregates — these must be cleared via autophagy (aggrephagy) or remain as inclusions

### 3. Autophagy / lysosomal pathway

Three distinct autophagy routes contribute to proteostasis:

**Macroautophagy** — bulk and selective degradation via autophagosome-lysosome fusion. Declines with age; now its own hallmark. See [[autophagy]] (verified) and [[disabled-macroautophagy]] (stub — the 2023 split-off hallmark).

**Chaperone-mediated autophagy (CMA)** — selective, receptor-mediated direct translocation of KFERQ-motif proteins into the lysosome via LAMP-2A. LAMP-2A content at the lysosomal membrane declines with age (rat liver, 22-month-old animals) — identified as the cause of age-related CMA decline — while cytosolic HSC70 levels remain stable [^cuervo2000]. Maintaining LAMP-2A abundance in aged mouse liver (transgenic model) prevents CMA decline and preserves hepatic function [^zhang2008]. See [[chaperone-mediated-autophagy]] (verified-partial).

**Mitophagy** — selective clearance of damaged mitochondria; critical for limiting mitochondrial ROS accumulation and secondary proteotoxicity. See [[mitophagy]] (verified-partial).

The three routes are not fully redundant: when both CMA and macroautophagy decline simultaneously in aging, the compensatory buffer between them is lost — a double-hit on the proteostasis network [^kaushik2018].

## Aging-specific decline mechanisms

| Component | Age change | Key evidence source |
|---|---|---|
| HSF1 / inducible heat shock response | Activity declines | [^anckar2011]; model organisms + cell lines |
| CMA (LAMP-2A) | LAMP-2A levels fall in aged lysosomes | [^cuervo2000]; rat liver, 22 months |
| CMA activity | Substrate binding + transport both decline | [^cuervo2000]; rescued by LAMP-2A maintenance [^zhang2008] |
| Macroautophagy flux | Declines across tissues and organisms | See [[autophagy]] (verified) |
| 26S proteasome activity | Chymotrypsin-like + other activities decline | [^lopezotitn2013]; multi-organism |
| Lysosomal function | Lipofuscin accumulation; reduced hydrolase activity | Cross-link to [[chaperone-mediated-autophagy]] (verified-partial) |

## Genetic proof: autophagy is required for neuronal proteostasis

The most compelling genetic evidence for proteostasis dependence comes from neuron-specific conditional knockouts:

- **Atg7 conditional KO (nestin-Cre):** All mutant mice (n=26) develop a progressive neurological syndrome and die within 28 weeks (n=41 controls survived; P<0.01 log-rank); autopsy reveals ubiquitin-positive inclusion bodies in neurons of the cerebral cortex, cerebellum, hippocampus, hypothalamus, amygdala, and pontine nuclei — increasing in size and number with age — with massive neuronal loss in cerebral and cerebellar cortices by P56. Proteasome chymotrypsin-like and trypsin-like activities were unaltered, confirming that accumulation of ubiquitinated proteins was due to autophagy blockade rather than proteasome failure. Demonstrates that basal autophagy flux, not just induced autophagy, is essential for neuronal protein quality control. See [[atg7]] (verified — Komatsu 2006) [^komatsu2006].

- **Atg5 conditional KO (nestin-Cre):** Neuron-specific Atg5 loss causes progressive motor deficit and neurodegeneration with ubiquitin- and p62-positive inclusions similar to the Atg7 KO — independently confirming that the ATG12–ATG5–ATG16L1 conjugation step of macroautophagy is non-redundantly required for neuronal survival. See [[atg5]] (verified — Hara 2006) [^hara2006].

Together these two papers established the founding genetic proof that basal macroautophagy is an obligate proteostasis mechanism in post-mitotic cells.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (ATG5/ATG7 are conserved; human neurodegenerative inclusions contain p62 and ubiquitin — histologically analogous) |
| Phenotype conserved in humans? | yes (neurodegeneration with ubiquitin/p62 inclusions is the human pathology in AD, PD, ALS, HD, FTD) |
| Replicated in humans? | partial (genetic linkage in human disease; no direct ATG5/ATG7 KO human equivalent) |

## Disease consequences: neurodegeneration as universal read-out

Proteostasis failure is the molecular substrate linking aging to nearly every major neurodegenerative disease. Post-mitotic neurons cannot dilute toxic proteins through division and are particularly vulnerable.

**Characteristic protein aggregates by disease:**

| Disease | Aggregate | Compartment |
|---|---|---|
| Alzheimer's disease (AD) | Amyloid-β plaques + neurofibrillary tau tangles | Extracellular (Aβ) + intracellular (tau) |
| Parkinson's disease (PD) / DLB | α-synuclein Lewy bodies | Intracellular |
| ALS / FTD | TDP-43, FUS, SOD1 inclusions | Intracellular |
| Huntington's disease (HD) | Polyglutamine-expanded huntingtin | Intracellular / nuclear |

See [[neurodegeneration]] (verified-partial), [[alzheimers-disease]] (verified-partial), [[parkinsons-disease]] (verified-partial — α-synuclein aggregation).

**α-Synuclein as a proteostasis model:** wild-type α-synuclein is a CMA substrate; A53T and A30P PD-associated mutants bind LAMP-2A but cannot be translocated, blocking CMA of all other substrates — a dominant-negative mechanism relevant to disease progression. See [[chaperone-mediated-autophagy]] (verified-partial) and the planned [[alpha-synuclein]] (R10d target).

## Gain-of-function: autophagy induction extends lifespan

If proteostasis decline drives aging, then restoring proteostatic capacity should extend healthspan/lifespan. Multiple lines of genetic evidence confirm this:

- **Atg5 systemic overexpression** extends median mouse lifespan ~17.2% (combined sexes) vs wild-type littermates, with improved motor function, lean mass, and insulin sensitivity in aged animals — the only autophagy gene with a positive lifespan-extension transgenic result in mammals at time of publication. See [[atg5]] (verified — Pyo 2013) [^pyo2013].

- **Beclin-1 F121A knock-in** (BCL-2 binding-deficient; constitutively elevated basal autophagy): median lifespan extended ~12% (26 → 29 months, combined sexes, C57BL/6J background, p<0.0001), with delayed renal and cardiac aging pathology and reduced spontaneous tumorigenesis. See [[beclin-1]] (verified — Fernández 2018) [^fernandez2018]. #gap/needs-replication — single study, single strain.

- **Pharmacological autophagy inducers** (rapamycin, spermidine) extend lifespan in multiple organisms — see [[autophagy]] (verified) and [[disabled-macroautophagy]] (stub). These effects are in part attributable to proteostasis restoration alongside mTOR signaling modulation.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (lifespan extension) conserved in humans? | unknown — no equivalent gain-of-function human data |
| Replicated in humans? | no #gap/needs-human-replication |

## Therapeutic angles

| Strategy | Mechanism | Stage | Key page |
|---|---|---|---|
| mTOR inhibition (rapamycin) | Disinhibits autophagy via ULK1; restores macroautophagic flux | Mouse (ITP-validated); human trials ongoing | [[rapamycin]] (verified) |
| Spermidine supplementation | HAT inhibition → histone deacetylation → autophagy transcript upregulation | Yeast/worm/fly; human observational; no lifespan data in mammals | [[spermidine]] (verified) |
| Beclin-1/BCL-2 uncoupling | Constitutively elevated basal autophagy | Mouse KI only; preclinical | [[beclin-1]] (verified) |
| LAMP-2A maintenance (CMA) | Prevents age-related CMA decline | Mouse transgenic only; preclinical | [[chaperone-mediated-autophagy]] (verified-partial) |
| CMA small-molecule activators (CA77.1, AR.7) | Allosteric LAMP-2A stabilizers | Cell culture; preclinical #gap/needs-replication | [[chaperone-mediated-autophagy]] (verified-partial) |
| HSP-inducer drugs | Restore inducible heat shock response | Preclinical #gap/needs-replication | [[ubiquitin-proteasome-system]] (planned R10b) |
| ATG5 systemic overexpression | Direct restoration of autophagy capacity | Mouse transgenic; preclinical | [[atg5]] (verified) |

No proteostasis-targeting strategy has FDA approval specifically for aging indication as of 2026-05-04. #gap/long-term-unknown

## SENS correspondence

| Aggregate type | SENS category | Intervention strategy |
|---|---|---|
| Intracellular aggregates (α-synuclein, tau, TDP-43, huntingtin) | LysoSENS | Enhance lysosomal degradation (autophagy inducers, LAMP-2A restoration) |
| Extracellular aggregates (Aβ, tau seeds, transthyretin amyloid) | AmyloSENS | Catalytic antibodies, amyloid-clearing enzymes, seeded disassembly |

## 2023 hallmarks update — scope change

López-Otín et al. 2023 [^lopezotitn2023] elevated **macroautophagy decline** to its own Primary hallmark ([[disabled-macroautophagy]]), acknowledging that the depth of autophagy biology and its therapeutic tractability warranted independent treatment. **Loss of proteostasis** was retained as a hallmark, now framing the broader chaperone + UPS + lysosomal network — the context in which macroautophagy operates. The two hallmarks are **mechanistically upstream/downstream of each other**: macroautophagy decline contributes to loss of proteostasis, and proteostatic failure amplifies autophagic demand.

Cross-link to [[hypotheses/information-theory-of-aging]]: the information-theory perspective proposes that epigenetic drift in aging disrupts the transcriptional programs that maintain the proteostasis network (chaperone expression, ATG gene expression, TFEB signaling) — linking epigenetic and proteostatic hallmarks.

## Targeted interventions

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[loss-of-proteostasis]])
  OR contains(target-hallmarks, [[loss-of-proteostasis]])
SORT clinical-stage DESC
```

Only one compound currently links to this hallmark (egcg). Spermidine and rapamycin operate via proteostasis-restoring autophagy but are tagged to [[disabled-macroautophagy]]. See [[frameworks/interventions-by-hallmark]] § Loss of proteostasis for gap analysis and tagging recommendations.

---

## Limitations and gaps

- **Human in-vivo proteostasis flux is technically inaccessible**: most quantitative proteostasis data (chaperone activity, CMA rates, UPS throughput) comes from isolated cells, lysosomes, or model-organism tissues. Human aging data relies on biomarkers (aggregate burden by imaging, peripheral-blood surrogates). #gap/needs-human-replication
- **UPS aging data lacks a verified atomic page**: see [[ubiquitin-proteasome-system]] (planned R10b; not yet seeded). The proteasome activity decline claim is supported by López-Otín 2013 review citation but lacks an independent atomic-page anchor in this wiki. #gap/unsourced (pending UPS page creation)
- **HSF1 decline quantification**: the blunting of the heat shock response with age is well-established conceptually but quantitative age-curve data in human tissues is sparse. #gap/needs-human-replication
- **CMA activators in vivo**: CA77.1 and AR.7 have not been tested in aged animal lifespan studies; pharmacokinetic and BBB-penetrance data are minimal. #gap/dose-response-unclear #gap/long-term-unknown
- **ATG5 lifespan extension replication**: Pyo 2013 is a single study in one mouse strain; independent replication by the ITP or another lab is absent. #gap/needs-replication
- **Beclin-1 F121A lifespan replication**: single study, single C57BL/6J strain; no ITP-validation. #gap/needs-replication
- **Extracellular aggregate clearance (AmyloSENS) is a hard open problem**: anti-Aβ immunotherapy (Lecanemab/Donanemab) reduces amyloid burden but shows only modest clinical benefit; tau-targeting is earlier-stage. No proteostasis intervention has convincingly altered AD progression in Phase 3 trials. #gap/contradictory-evidence

## Cross-references

- [[disabled-macroautophagy]] — the 2023 split-off hallmark; macroautophagy biology in depth
- [[autophagy]] — macroautophagy process page (verified)
- [[chaperone-mediated-autophagy]] — CMA process page (verified-partial)
- [[mitophagy]] — selective mitochondrial autophagy (verified-partial)
- [[unfolded-protein-response]] — ER-stress arm of proteostasis (PERK/IRE1α/ATF6) (verified)
- [[hsp90]] — major cytosolic chaperone; HSP90AA1/HSP90AB1; druggability-tier 2 (verified)
- [[hsp70]] — stress-inducible chaperone family (verified)
- [[ubiquitin-proteasome-system]] — UPS process page (planned R10b)
- [[atg5]] — E3-like complex subunit; Pyo 2013 lifespan-extension transgenic (verified)
- [[atg7]] — E1-like enzyme; Komatsu 2006 neurodegeneration KO (verified)
- [[beclin-1]] — autophagy initiation scaffold; Fernández 2018 lifespan-extension KI (verified)
- [[lc3]] — autophagosome membrane marker (verified-partial)
- [[p62]] — autophagy cargo receptor / aggregate marker (verified-partial)
- [[tfeb]] — master transcriptional regulator of lysosomal biogenesis (verified-partial)
- [[neurodegeneration]] — primary disease phenotype (verified-partial)
- [[alzheimers-disease]] — Aβ + tau proteinopathy (verified-partial)
- [[parkinsons-disease]] — α-synuclein proteinopathy (verified-partial)
- [[rapamycin]] — mTOR inhibitor / autophagy inducer (verified)
- [[spermidine]] — autophagy inducer; HAT inhibitor mechanism (verified)
- [[hallmarks-of-aging]] — parent MOC
- [[hypotheses/information-theory-of-aging]] — epigenetic → proteostasis cross-link
- [[sens-damage-categories]] — LysoSENS + AmyloSENS

## Position in causal hierarchy

This hallmark is classified as **Intermediate response/damage tier** (mechanistic-tier: intermediate / intervention-tractability: moderate). See [[frameworks/hallmark-causality-graph]] for the full hierarchy and intervention-sequencing argument.

Direct upstream nodes per `caused-by:` frontmatter: [[disabled-macroautophagy]] (ATG5/ATG7 KO → neurodegeneration; autophagy abolishes proteasome compensation), [[mitochondrial-dysfunction]] (mtROS damages proteins → aggregate load), [[deregulated-nutrient-sensing]] (mTOR suppresses autophagy flux and drives excess protein synthesis).
Direct downstream nodes per `causes:` frontmatter: [[neurodegeneration]] (Aβ/tau/α-syn/TDP-43 aggregate pathology — strongest human evidence for this hallmark).
Edge evidence is in [[frameworks/causal-graph-data]].

## See also

- [[studies/lopez-otin-2013-hallmarks-of-aging]]
- [[studies/lopez-otin-2023-hallmarks-expanding-universe]]

## Footnotes

[^lopezotitn2013]: doi:10.1016/j.cell.2013.05.039 · López-Otín C, Blasco MA, Partridge L, Serrano M, Kroemer G · Cell 2013;153(6):1194-1217 · review · defining paper for the 9 hallmarks; proteostasis defined as a primary hallmark; local PDF available

[^lopezotitn2023]: doi:10.1016/j.cell.2022.11.001 · López-Otín C, Blasco MA, Partridge L, Serrano M, Kroemer G · Cell 2023;186(2):243-278 · review · 2023 expanded hallmarks (12 total); macroautophagy split off as new primary hallmark; archive status: failed download (not locally available) #gap/no-fulltext-access

[^anckar2011]: doi:10.1146/annurev-biochem-060809-095203 · Anckar J, Sistonen L · Annu Rev Biochem 2011;80:1089-1115 · review · HSF1 regulation, heat shock response; age-related blunting of HSF1 transactivation capacity; local PDF available

[^cuervo2000]: doi:10.1074/jbc.M002102200 · Cuervo AM, Dice JF · J Biol Chem 2000;275(40):31505-13 · in-vivo · model: rat liver (22-month-old aged animals vs young adults) · age-related decline in CMA: both substrate binding and lysosomal transport decline; LAMP-2A fall identified as cause; cytosolic HSC73 unchanged · 636 citations · hybrid OA (PDF failed download) #gap/no-fulltext-access

[^zhang2008]: doi:10.1038/nm.1851 · Zhang C, Cuervo AM · Nat Med 2008;14(9):959-965 · in-vivo · model: Alb-Tet-off-LAMP-2A transgenic mice, FVB background, 22–26 months · maintaining LAMP-2A abundance in aged liver prevents CMA decline; reduced oxidized proteins, improved hepatic function, reduced lipofuscin · local PDF available

[^komatsu2006]: doi:10.1038/nature04723 · Komatsu M, Waguri S, Chiba T, et al. · Nature 2006;441:880-884 · in-vivo · model: nestin-Cre conditional Atg7 KO mice · all mutants die ≤28 weeks; ubiquitin + p62 inclusions in neurons; basal autophagy required for neuronal survival · local PDF available

[^hara2006]: doi:10.1038/nature04724 · Hara T, Nakamura K, Matsui M, et al. · Nature 2006;441:885-889 · in-vivo · model: nestin-Cre conditional Atg5 KO mice · progressive neurodegeneration with ubiquitin + p62 inclusions; independent confirmation of autophagy requirement in neurons · local PDF available

[^pyo2013]: doi:10.1038/ncomms3300 · Pyo J-O, Yoo S-M, Ahn H-H, et al. · Nat Commun 2013;4:2300 · in-vivo · n=65 WT + 70 Atg5 Tg (line 25, combined sexes) · model: pCAGGS-Atg5 ubiquitous transgenic mice (C57BL/6 background) · median lifespan extended ~17.2% (χ²=17.32, P<0.001, log-rank); max lifespan WT 781±22 d vs Tg 900±34 d (P<0.01); improved healthspan (motor function, lean mass, insulin sensitivity) in aged mice · local PDF available

[^fernandez2018]: doi:10.1038/s41586-018-0162-7 · Fernández ÁF, Sebti S, Wei Y, et al. · Nature 2018;558:136-140 · in-vivo · model: Becn1^F121A/F121A knock-in mice (C57BL/6J, >12 backcross generations) · n=68 WT + 102 KI; median WT=26 mo, KI=29 mo (combined); p<0.0001 log-rank · delayed renal/cardiac aging; reduced spontaneous tumors · local PDF available

[^kaushik2018]: doi:10.1038/s41580-018-0001-6 · Kaushik S, Cuervo AM · Nat Rev Mol Cell Biol 2018 · review · CMA mechanism, aging, disease, pharmacology; CMA-macroautophagy compensation; stated ~40% of mammalian proteome contains KFERQ-like motif · 1,278 citations · PDF download failed #gap/no-fulltext-access
