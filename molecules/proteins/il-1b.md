---
type: protein
aliases: [IL1B, IL-1 beta, "interleukin-1 beta", catabolin]
uniprot: P01584
ncbi-gene: 3553
hgnc: 5992
genage-id: null
mouse-ortholog: Il1b
ensembl: ENSG00000125538
druggability-tier: 1  # AB:Approved Drug (canakinumab) + OC:Approved Drug + SM:High-Quality Ligand (Open Targets, IL1B)
caused-by: []
causes: []
key-domains: [propeptide-1-116, mature-chain-117-269]
key-ptms: [caspase-1-cleavage-Asp116]
pathways: ["[[nlrp3-inflammasome]]", "[[nf-kb]]", "[[jak-stat-pathway]]"]
hallmarks: ["[[chronic-inflammation]]"]
known-interactors: ["[[caspase-1]]", "[[nlrp3]]", "[[il-1r1]]", "[[il-1ra]]", "[[gsdmd]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Heneka 2013, Hoffman 2001, and Ridker 2017 NEJM verified against local PDFs; UniProt P01584 chain/cleavage features verified via REST API; Auron 1984, March 1985, Cerretti 1992, Black 1989, Howard 1991, Franceschi 2000, Shi 2015, and Fuster 2017 are closed-access or pending — those claims not independently re-verified against full text (see per-claim gap markers). Il1b-/- KO gap resolved: Zheng 1995 identified as canonical source."
---

# IL-1β (IL1B)

The master pro-inflammatory cytokine of [[chronic-inflammation|inflammaging]]. IL-1β is the defining output of the [[nlrp3-inflammasome|NLRP3 inflammasome]]: a caspase-1 substrate that requires both a transcriptional priming step and a danger-sensing activation step before secretion. It is the only cytokine whose therapeutic neutralisation has been proven in a cardiovascular RCT ([[canakinumab]], CANTOS 2017), establishing a causal link between chronic sterile inflammation and atherosclerotic events. Twelve wiki pages currently link here.

## Identity

- **UniProt:** P01584 (IL1B_HUMAN) — Swiss-Prot (manually curated); accessed 2026-05-05
- **NCBI Gene:** 3553 (symbol: IL1B; synonym IL1F2)
- **HGNC:** 5992
- **Mouse ortholog:** Il1b (one-to-one)
- **Gene locus:** 2q14.1
- **Precursor length:** 269 amino acids (pro-IL-1β; ~31 kDa)
- **Mature form:** residues 117–269, 153 amino acids (~17 kDa)

### Naming note

The file name `il-1b.md` is canonical for the cytokine. No `pathways/il-1b.md` exists; the relevant pathway page is [[nlrp3-inflammasome]]. Aliases above cover the common variant spellings used across inbound links.

## Processing and structure

Pro-IL-1β is synthesised as a leaderless 31 kDa precursor with no signal peptide, and is therefore **not secreted via the classical ER-Golgi pathway** [^auron1984][^march1985]. Processing has two steps:

1. **Caspase-1 cleavage at Asp116/Ala117** — removes the 116-residue propeptide and releases the 17 kDa mature cytokine [^howard1991][^cerretti1992]. ICE (IL-1β Converting Enzyme), subsequently renamed caspase-1, was identified in 1989 as the responsible protease [^black1989].
2. **Secretion via GSDMD pores** — [[caspase-1]] simultaneously cleaves [[gsdmd]] (gasdermin D) at Asp275; the liberated N-terminal GSDMD fragment oligomerises in the plasma membrane to form ~18 nm pores [^shi2015]. Mature IL-1β exits through these pores. At high pore density, cells undergo [[pyroptosis]] — a lytic, immunogenic death.

Alternative cleavage at positions 105–106 and 115–116 by the extracellular *Streptococcus pyogenes* protease SpeB produces active IL-1β in an inflammasome-independent manner (UniProt P01584, annotation note).

### Distinct from IL-1α

[[il-1a|IL-1α]] and IL-1β are both IL-1 family members that bind [[il-1r1|IL-1R1]] with similar affinity, but their biology is fundamentally different:

| Property | IL-1α | IL-1β |
|---|---|---|
| Signal peptide | absent | absent |
| Constitutive expression | yes | low baseline |
| Active form | full-length precursor | caspase-1–cleaved mature form |
| Release mechanism | necrotic cell lysis (alarmin) | GSDMD pores; pyroptosis |
| Requires inflammasome | no | yes (canonical) |

Anakinra (recombinant IL-1Ra) blocks both via IL-1R1 antagonism. [[canakinumab]] (anti-IL-1β mAb) is IL-1β-specific.

## Two-signal model of IL-1β production

The canonical inflammasome model requires two independent signals before IL-1β is secreted [^cerretti1992]:

### Signal 1 — Priming (transcriptional)

TLR ligands (LPS), cytokines (IL-1β itself, TNF), or oncogenic signals activate **NF-κB** via [[nf-kb|the NF-κB pathway]] → transcription of `IL1B` mRNA and `NLRP3` mRNA. This step generates the substrate (pro-IL-1β) and the sensor ([[nlrp3]]). Without priming, cells have negligible amounts of either.

### Signal 2 — Activation (post-translational)

Danger-associated molecular patterns (DAMPs) or pathogen-associated molecular patterns (PAMPs) trigger NLRP3 oligomerisation:

- **Extracellular ATP** — binds P2X7 receptor → K⁺ efflux
- **Potassium efflux** — a convergent upstream signal that activates NLRP3 directly
- **Monosodium urate (MSU) and cholesterol crystals** — phagocytosis → lysosomal damage → K⁺ efflux
- **β-amyloid** — activates NLRP3 in microglia [^heneka2013]
- **Palmitate and glucose** — activate pancreatic β-cell NLRP3

Activated NLRP3 recruits the adaptor [[asc]] to form the ASC speck → procaspase-1 recruitment → autoproteolysis → active caspase-1 → cleavage of pro-IL-1β and GSDMD.

## Receptor system

| Receptor | Gene | Function |
|---|---|---|
| [[il-1r1\|IL-1R1]] | IL1R1 | Signalling receptor; pairs with IL-1RAcP (IL1RAP) co-receptor |
| IL-1R2 | IL1R2 | Decoy receptor; binds IL-1β without signalling; sequesters cytokine |
| [[il-1ra\|IL-1Ra]] | IL1RN | Endogenous antagonist; competes with IL-1 for IL-1R1 binding |

**Downstream of IL-1R1:** [[myd88|MyD88]] → IRAK1/[[irak4|IRAK4]] → [[traf6|TRAF6]] → [[tak1|TAK1]] → IKK complex → **[[nf-kb|NF-κB]]** nuclear translocation + **JNK** and **p38 MAPK** → transcription of IL-6, TNF, COX-2, iNOS, matrix metalloproteinases.

This creates a positive feedback loop: IL-1β → IL-1R1 → NF-κB → more IL-1β (via Signal 1 priming) + IL-6 production.

## Inflammaging axis

Franceschi et al. (2000) coined the term **inflamm-aging** to describe the chronic low-grade sterile inflammation that rises with age and drives multiple age-associated diseases [^franceschi2000]. IL-1β is one of its canonical effectors:

- Serum IL-1β rises modestly with age in humans, though the signal is smaller and more variable than IL-6 or TNF (#gap/contradictory-evidence — some cross-sectional studies find no age-dependent rise in circulating IL-1β; tissue and monocyte-intracellular data are cleaner).
- **NLRP3 in aged macrophages** — NLRP3 priming is chronically elevated in aged macrophages due to constitutive NF-κB activation; even weak Signal 2 stimuli elicit exaggerated IL-1β secretion #gap/needs-replication.
- **IL-1β → NF-κB → IL-6 → CRP → MACE axis** — CANTOS proved this axis is causally relevant to cardiovascular outcomes: canakinumab reduced MACE independently of LDL lowering. For quantitative effect sizes, see [[canakinumab]] and [[atherosclerosis]].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — IL1B, IL1R1, caspase-1 all conserved |
| Phenotype (inflammaging) conserved in humans? | yes — CANTOS, CHIP-CVD evidence |
| Replicated in humans? | yes (cardiovascular endpoint); partial (cellular aging mechanisms) |

## Disease landscape

### Cardiovascular disease and CANTOS

The **CANTOS trial** (Ridker 2017, NEJM; n=10,061; phase 3 RCT) demonstrated that canakinumab (anti-IL-1β mAb) reduced recurrent MACE in post-MI patients with elevated hsCRP, independent of LDL levels [^ridker2017]. For quantitative effect sizes (HR, p-values, infection rates), see [[canakinumab]] — that page is the canonical home for CANTOS data.

### Clonal hematopoiesis / TET2-CHIP

TET2 loss-of-function clonal hematopoiesis (CHIP) confers elevated CVD risk. Fuster et al. (2017, Science) showed that TET2-deficient macrophages hyperproduce IL-1β in an NLRP3-dependent manner, and that NLRP3 inhibition or IL-1β blockade abolishes the accelerated atherosclerosis in *Ldlr*-/- mice transplanted with Tet2-/- bone marrow [^fuster2017]. This places IL-1β as the mechanistic effector connecting CHIP to cardiovascular aging. See [[clonal-hematopoiesis]] and [[tet2]].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | in-progress — human CHIP-CVD association well-established; IL-1β mechanism inferred |
| Replicated in humans? | no — mechanistic human CHIP + IL-1β blockade trial needed |

#gap/needs-human-replication (TET2-CHIP mechanism)

### Alzheimer's disease

β-amyloid (Aβ) activates NLRP3 in microglia → IL-1β secretion → neuroinflammation. Heneka et al. (2013, Nature) showed in 16-month-old APP/PS1 mice that NLRP3 or caspase-1 deficiency (a) reduces brain IL-1β and caspase-1 activation, (b) reduces hippocampal/cortical Aβ burden by ~70% (FA-extractable Aβ), (c) rescues spatial memory in the Morris Water Maze, and (d) skews microglia from an M1-like (NOS2+) toward an M2-like (arginase-1+, FIZZ1+) phenotype with enhanced Aβ phagocytosis [^heneka2013]. The inflammatory skewing involves the full NLRP3/caspase-1 axis, with IL-1β as one output; the paper does not isolate IL-1β alone as the M1 driver. See [[alzheimers-disease]].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial — NLRP3 and IL-1β elevated in human AD brain; no successful IL-1β-targeting trial in AD yet |
| Replicated in humans? | no #gap/needs-human-replication |

### CAPS (cryopyrin-associated periodic syndromes)

Gain-of-function missense mutations in exon 3 of *CIAS1* (the gene encoding cryopyrin, later renamed NLRP3) cause constitutive NLRP3 activation → uncontrolled IL-1β → autoinflammatory disease (FCAS, MWS, NOMID spectrum) [^hoffman2001]. Hoffman et al. identified four distinct mutations across 3 FCAS families and 1 MWS family: A439V, V198M, E627G (FCAS), and A352V (MWS), all in exon 3, absent in >100 normal controls. Canakinumab is FDA-approved for CAPS, establishing clear human proof of concept for the NLRP3 → IL-1β → systemic inflammation axis.

### Type 2 diabetes

Palmitate and high-glucose activate β-cell NLRP3 → IL-1β → paracrine β-cell dysfunction and apoptosis. Anakinra (IL-1Ra) showed modest improvement in β-cell function in a small RCT #gap/needs-replication. See [[type-2-diabetes]].

### Crystal arthropathies

Monosodium urate (gout) and calcium pyrophosphate (pseudogout) crystals are canonical Signal 2 stimuli for NLRP3 → IL-1β. IL-1 blockade (anakinra, canakinumab) is effective in refractory gout.

## Mouse genetics

**Il1b-deficient mice** are viable, fertile, and grossly normal under specific-pathogen-free conditions, but display resistance to fever induction (LPS, turpentine) and impaired acute-phase response [^zheng1995][^horai1998]. Horai et al. (1998) additionally showed that IL-1β (but not IL-1α) is crucial for turpentine-induced fever and glucocorticoid secretion using mice deficient in IL-1α, IL-1β, IL-1α/β, and IL-1Ra, produced by gene targeting. Reduced collagen-induced arthritis severity and protection from MSU-crystal-induced inflammation have been reported in subsequent work.

**Nlrp3 gain-of-function knock-in mice** (constitutively active Nlrp3 D301N or A350V) die perinatally or in early adulthood with severe multi-organ inflammation, demonstrating that tonic NLRP3-IL-1β signalling is lethal #gap/unsourced (citation needed for specific KI line).

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — Il1b KO and human IL-1β biology directly parallel |
| Phenotype conserved in humans? | yes — CAPS (NLRP3 GoF) is the human equivalent of murine NLRP3 GoF |
| Replicated in humans? | yes (CAPS); partial (atherosclerosis, CANTOS) |

## Therapeutic landscape

| Agent | Mechanism | Target | Status |
|---|---|---|---|
| [[anakinra]] | Recombinant IL-1Ra | IL-1R1 (blocks both IL-1α and IL-1β) | FDA-approved (RA, CAPS, SJIA, NOMID) |
| [[canakinumab]] | Anti-IL-1β mAb (IgG1κ) | IL-1β (specific) | FDA-approved (CAPS, SJIA, gout); CANTOS phase 3 |
| Rilonacept | IL-1 Trap (Fc-IL-1R1-IL-1RAcP) | IL-1α + IL-1β | FDA-approved (CAPS); orphan use |
| MCC950 | NLRP3 NACHT domain inhibitor | NLRP3 activation | Preclinical; multiple phase II underway |
| OLT1177 (dapansutrile) | NLRP3 inhibitor | NLRP3 activation | Phase II (acute gout, HFpEF) |

For compound-level PK, dosing, and trial data: see [[canakinumab]], [[anakinra]], [[interventions/pharmacological/senomorphics]].

**Aging-context tier-1 rationale.** Canakinumab is FDA-approved for cryopyrin-associated periodic syndromes (CAPS), systemic juvenile idiopathic arthritis (SJIA), and gouty arthritis — all rare autoinflammatory indications, not aging-rejuvenation. Anakinra (IL-1Ra) and rilonacept (IL-1 Trap) carry similar autoinflammatory-disease approvals. The aging-context tier-1 designation reflects (a) the CANTOS Phase 3 RCT (n=10,061) demonstrating that IL-1β neutralization causally reduces cardiovascular events independent of LDL — the most direct human-RCT validation that any inflammaging cytokine is causal for an age-related disease — and (b) IL-1β's mechanistic centrality as the master NLRP3-inflammasome output. Strict Open Targets `Approved Drug = true` for an aging indication does not apply, but CANTOS arguably represents the strongest human-evidence anchor of any tier-1 protein on this wiki.

## Pathway membership and cross-references

- [[il-1-signaling]] — integrating pathway page for the IL-1 family (verified R27); receptor architecture, MyD88-IRAK-NF-κB cascade, and antagonist biology
- [[nlrp3-inflammasome]] — upstream processor; IL-1β is the primary output
- [[nf-kb]] — both upstream (Signal 1 priming) and downstream (post-receptor signalling)
- [[jak-stat-pathway]] — secondary signalling downstream of IL-1R1 in some contexts
- [[chronic-inflammation]] — hallmark context; IL-1β is a canonical driver
- [[atherosclerosis]] — disease context; CANTOS
- [[clonal-hematopoiesis]] — TET2-CHIP → IL-1β CVD axis
- [[microglia]] — key cellular source in CNS
- [[alzheimers-disease]] — neuroinflammation context
- [[type-2-diabetes]] — β-cell NLRP3-IL-1β axis
- [[canakinumab]] — therapeutic antibody; verified R12

**Family-completion cross-links (R24 + R25 + R27 seeded):**
[[caspase-1]] (R24d), [[asc]] (R24d), [[gsdmd]] (R24d), [[pyroptosis]] (R24d), [[il-1r1]] (R25), [[il-1a]] (R25), [[il-1ra]] (R25), [[il-18]] (R25), [[tet2]] (verified), [[il-1-signaling]] (pathway, R27), [[anakinra]] (compound, R27). The IL-1 family page-cluster is now schematically complete.

## Limitations and gaps

- **Serum IL-1β as a biomarker:** Circulating IL-1β is often below the detection limit of standard ELISAs in healthy humans; its rise with age is inconsistent across cohorts. Intracellular/tissue measures are more reliable but not widely used clinically. #gap/contradictory-evidence
- **Il1b-/- KO paper:** Resolved — canonical references are Zheng et al. 1995 (Immunity, single Il1b-/- KO) and Horai et al. 1998 (J Exp Med, multi-KO comparison). Both DOIs now in footnotes.
- **NLRP3 GoF KI mouse citation:** Formal citation for the perinatally lethal Nlrp3 D301N or A350V constitutive-active knock-in lines not confirmed. #gap/unsourced (citation needed for specific KI line — likely Brydges 2009 J Clin Invest or Meng 2009 EMBO; verify on next pass).
- **Inflammaging mechanistic loop:** The claim that aged macrophages have chronically elevated NLRP3 priming needs a specific primary citation #gap/needs-replication.
- **Type 2 diabetes anakinra RCT** data needs size and effect-size citation added on the [[type-2-diabetes]] page. #gap/dose-response-unclear
- **Howard 1991 DOI:** PMID 1919001 confirmed; no DOI in the PubMed record (predates DOI registration). Footnote uses PMID.
- **Black 1989 DOI:** PMID 2784432 confirmed; no DOI in the PubMed record (J Biol Chem 1989). Footnote uses PMID.
- **Closed-access sources not re-verified against full text:** Auron 1984 (PNAS), March 1985 (Nature), Cerretti 1992 (Science), Black 1989 (J Biol Chem), Howard 1991 (J Immunol), Franceschi 2000 (Ann NY Acad Sci), Shi 2015 (Nature), Fuster 2017 (Science) — all either not_oa or pending in a local paper archive. Claims sourced to these are consistent with well-established consensus biology but have not been verified line-by-line against the PDFs. #gap/no-fulltext-access (partial)

---

## Footnotes

[^auron1984]: doi:10.1073/pnas.81.24.7907 · Auron PE et al. · PNAS 1984 · in-vitro (cDNA sequencing, human monocyte mRNA) · first cDNA sequence of human IL-1β precursor; defined 269-aa structure

[^march1985]: doi:10.1038/315641a0 · March CJ et al. · Nature 1985 · in-vitro · cloning and expression of two distinct IL-1 cDNAs (α and β); established distinct gene products

[^black1989]: PMID:2784432 · Black RA et al. · J Biol Chem 1989 · in-vitro (human leukocyte extract) · identification of a pre-aspartate-specific protease that cleaves pro-IL-1β; later renamed caspase-1/ICE

[^howard1991]: PMID:1919001 · Howard AD et al. · J Immunol 1991 · in-vitro · mapped caspase-1 cleavage requirement to aspartate residues; showed ICE cleaves pro-IL-1β but not IL-1α

[^cerretti1992]: doi:10.1126/science.1373520 · Cerretti DP et al. · Science 1992 · in-vitro (molecular cloning) · molecular cloning of ICE (caspase-1); established it as the dedicated pro-IL-1β processing enzyme

[^shi2015]: doi:10.1038/nature15514 · Shi J et al. · Nature 2015 · in-vitro + in-vivo (mouse) · discovery that caspase-1 cleaves GSDMD; GSDMD N-terminal fragment forms membrane pores; IL-1β exits via pores; high-density pores → pyroptosis

[^franceschi2000]: doi:10.1111/j.1749-6632.2000.tb06651.x · Franceschi C et al. · Ann NY Acad Sci 2000 · review · coined "inflamm-aging"; defined chronic low-grade sterile inflammation as a driver of aging and age-related disease

[^heneka2013]: doi:10.1038/nature11729 · Heneka MT et al. · Nature 2013 · in-vivo (APP/PS1 mouse × Nlrp3-/- or Casp-1-/-) · n not stated per group in main text; mice analyzed at 16 months · NLRP3/caspase-1 deficiency reduces brain Aβ burden (~70% FA-extractable Aβ reduction), rescues spatial memory (MWM), skews microglia to M2 phenotype with enhanced phagocytosis; human AD/MCI brains show elevated cleaved caspase-1 · model: C57Bl/6 APP/PS1 × Nlrp3-/- · local PDF: 

[^hoffman2001]: doi:10.1038/ng756 · Hoffman HM et al. · Nature Genetics 2001 · observational (human genetics) · n=3 FCAS families + 1 MWS family (4 families total); >100 normal controls sequenced · identified 4 missense mutations in exon 3 of CIAS1 (cryopyrin/NLRP3): A439V, V198M, E627G (FCAS) and A352V (MWS); all absent in controls; established CIAS1 (NLRP3) as cause of FCAS and MWS · local PDF: 

[^ridker2017]: doi:10.1056/NEJMoa1707914 · Ridker PM et al. · NEJM 2017 · rct · n=10,061 · phase 3; post-MI patients with hsCRP ≥2 mg/L; canakinumab 150 mg q3m vs placebo · local PDF:  · for effect sizes, see [[canakinumab]]

[^fuster2017]: doi:10.1126/science.aag1381 · Fuster JJ et al. · Science 2017 · in-vivo (mouse, bone-marrow transplant) · TET2-deficient macrophages hyperproduce IL-1β via NLRP3; NLRP3 inhibition abolishes accelerated atherosclerosis in Ldlr-/- recipients · model: Tet2-/- BMT → Ldlr-/- mice

[^zheng1995]: doi:10.1016/1074-7613(95)90154-x · Zheng H et al. · Immunity 1995 · in-vivo (gene-targeted mouse) · canonical Il1b-/- single-KO characterization; mice viable and fertile; resistant to LPS/influenza-induced fever; impaired acute-phase response (reduced SAP, fibrinogen); model: Il1b-/- C57BL/6 × 129

[^horai1998]: doi:10.1084/jem.187.9.1463 · Horai R et al. · J Exp Med 1998 · in-vivo (gene-targeted mouse) · produced IL-1α-/-, IL-1β-/-, IL-1α/β-/-, and IL-1Ra-/- mice; showed IL-1β (not IL-1α) is crucial for turpentine-induced fever and glucocorticoid secretion; IL-1β-/- mice show impaired collagen-induced arthritis · model: multiple Il1 KO lines
