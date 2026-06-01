---
type: pathway
aliases: [NLRP3, NACHT-LRR-PYD-containing protein 3, cryopyrin, NLRP3 inflammasome, NALP3, CIAS1]
kegg: hsa04621
reactome: R-HSA-844456
wikipathways: null
key-nodes: ["[[nlrp3-protein]]", "[[asc]]", "[[caspase-1]]", "[[il-1b]]", "[[il-18]]", "[[gsdmd]]"]
upstream: ["[[chronic-inflammation]]", "[[nf-kb]]", "[[damps-pamps]]"]
downstream: ["[[atherosclerosis]]", "[[type-2-diabetes]]", "[[alzheimers-disease]]", "[[pyroptosis]]"]
hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
sens-categories: []
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Hoffman 2001, Duewell 2010, Ridker 2017 CANTOS, Martinon 2002, Agostini 2004, Heneka 2013 verified against local PDFs. Coll 2015 (10.1038/nm.3806) not verified — download still pending (green OA); MCC950 claims remain unverified against primary source. KEGG hsa04621 and Reactome R-HSA-844456 IDs not independently re-verified against canonical databases."
---


# NLRP3 inflammasome

The **NLRP3 inflammasome** is a multiprotein cytosolic complex of the innate immune system that senses diverse danger signals — metabolic crystals, pathogen products, and mitochondrial damage — and responds by activating [[caspase-1]], which cleaves pro-[[il-1b|IL-1β]] and pro-[[il-18|IL-18]] into their mature secreted forms, and cleaves [[gsdmd|gasdermin-D (GSDMD)]] to form plasma-membrane pores driving pyroptotic cell death. It is one of the most studied molecular drivers of [[chronic-inflammation|inflammaging]] — the chronic, low-grade, sterile inflammation that accumulates with age and fuels cardiovascular, metabolic, and neurodegenerative disease.

The inflammasome concept was first articulated by Tschopp and colleagues in 2002 [^martinon2002], and NLRP3 was identified as a key inflammasome-forming sensor in 2004 [^agostini2004].

## Complex structure and assembly

The NLRP3 inflammasome consists of three core components:

| Component | Gene | Role |
|---|---|---|
| NLRP3 sensor | *NLRP3* (CIAS1) | Pattern recognition; PYD + NACHT + LRR domains; senses activation signals |
| ASC adaptor | *PYCARD* | PYD–PYD bridge (NLRP3 → ASC) + CARD–CARD bridge (ASC → pro-caspase-1); forms the ASC speck |
| Pro-caspase-1 | *CASP1* | Effector; oligomerizes via CARD–CARD interaction; auto-activates upon oligomerization |

Upon activation, NLRP3 oligomerizes, recruits ASC through PYD–PYD interactions, and ASC in turn nucleates pro-caspase-1 recruitment via CARD–CARD contacts. The resulting ASC speck is a large (~1 µm) perinuclear structure visible by immunofluorescence and serves as the catalytic platform for caspase-1 autoactivation. One speck forms per cell upon activation. Atomic protein pages: [[asc]] (R24d), [[caspase-1]] (R24d), [[gsdmd]] (R24d), [[il-1b]] (verified), [[il-18]] (R25). [[nlrp3-protein]] remains an implicit stub. Family-completion siblings now seeded: [[il-1a]] (R25; SASP-apex cytokine, NLRP3-independent), [[il-1ra]] (R25; endogenous IL-1 receptor antagonist), [[il-1r1]] (R25; receptor for IL-1α/β + IL-1Ra).

## Two-signal model of activation

NLRP3 activation requires two temporally distinct signals:

### Signal 1: Priming (transcriptional)

The first signal is provided by pattern recognition receptors — typically Toll-like receptors (TLRs) detecting PAMPs (microbial products) or cytokine receptors detecting TNF-α, IL-1β, or IL-18. This signal activates [[nf-kb|NF-κB]], which drives transcriptional upregulation of both **NLRP3** and **pro-IL-1β** (both are NF-κB target genes). Without priming, resting NLRP3 levels are insufficient for inflammasome assembly.

### Signal 2: Assembly (post-translational)

The second signal triggers conformational change in NLRP3 and ASC speck nucleation. Multiple stimuli converge on a small number of proximal mechanisms:

- **Potassium efflux** — the most conserved proximal trigger; diverse NLRP3 activators share K⁺ efflux as a required step
- **Lysosomal destabilization / cathepsin B release** — activated by crystalline particles (see DAMPs below)
- **Mitochondrial dysfunction** — mitochondrial ROS, released mitochondrial DNA (mtDNA), and cardiolipin on the outer mitochondrial membrane all activate NLRP3
- **GSDMD-dependent secondary pores** — once activated, GSDMD pores amplify K⁺ efflux, creating a feed-forward loop

## DAMPs and PAMPs activating NLRP3

| Activator class | Examples | Disease relevance |
|---|---|---|
| Cholesterol crystals | Oxidized LDL-derived crystals | [[atherosclerosis]] — macrophage foam-cell NLRP3 [^duewell2010] |
| Monosodium urate (MSU) | MSU crystals in gout | Acute gout flares |
| β-amyloid fibrils / oligomers | Aβ1-42 | [[alzheimers-disease]] — microglial NLRP3 [^heneka2013] |
| Islet amyloid polypeptide (IAPP) | Pancreatic amyloid | [[type-2-diabetes]] — beta-cell IL-1β |
| Silica / asbestos fibers | Environmental crystalline particles | Silicosis, mesothelioma |
| Bacterial pore-forming toxins | Nigericin, aerolysin | Infectious inflammation |
| ATP (extracellular) | Released from damaged cells | Purinergic danger signal via P2X7R → K⁺ efflux |
| Mitochondrial DAMPs | mtDNA, cardiolipin, ROS | NLRP3 in sterile inflammation and aging |

## Effector outputs

Activated caspase-1 cleaves three classes of substrates:

1. **Pro-IL-1β → mature IL-1β** — potent pro-inflammatory cytokine; acts via IL-1R1 on multiple cell types to amplify [[nf-kb|NF-κB]] signaling, recruit neutrophils, and drive systemic acute-phase response
2. **Pro-IL-18 → mature IL-18** — promotes IFN-γ production by NK and T cells; elevated in cardiovascular and metabolic disease
3. **Gasdermin-D (GSDMD) N-terminal fragment** — inserts into the plasma membrane as a ~16 nm pore; allows unconventional secretion of mature IL-1β/IL-18; at high activation levels drives pyroptotic cell death (cell lysis, DAMPamplification)

## Aging relevance

### Inflammaging

NLRP3 is a central effector node of [[chronic-inflammation|inflammaging]]. With aging, multiple NLRP3-activating signals accumulate simultaneously: mitochondrial dysfunction increases mtDNA leakage and ROS; cellular senescence generates DAMPs as part of the [[sasp|SASP]] (senescent cells release IL-1α, which can prime NLRP3 in neighboring cells); cholesterol crystals accumulate in vessel walls; and gut microbiome dysbiosis increases circulating LPS (TLR4 priming). The net result is chronically primed and sporadically activated NLRP3 driving the chronic IL-1β/IL-18 milieu characteristic of aged tissue.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| NLRP3 gain-of-function → age-like inflammation in humans? | yes (CAPS genetics) |
| Replicated in humans (CANTOS)? | yes — IL-1β inhibition reduces MI (Ridker 2017) |

### Atherosclerosis

Foam-cell macrophages in atherosclerotic plaques ingest cholesterol crystals and other lipid aggregates, activating NLRP3. Duewell et al. (2010) showed using bone-marrow transplant experiments in *Ldlr⁻/⁻* mice that NLRP3 and ASC in bone-marrow-derived cells are required for early atherosclerotic lesion formation: NLRP3-KO and ASC-KO bone marrow recipients had ~69% lower aortic sinus lesion area than wild-type bone marrow controls (P<0.0001). The mechanism involves phagolysosomal rupture by cholesterol crystals releasing cathepsin B/L, which activates NLRP3 [^duewell2010]. Note: cholesterol crystals activate NLRP3 in LPS-primed macrophages; priming (Signal 1) is still required in vitro. **Human proof-of-concept** came from the CANTOS trial (Ridker 2017): canakinumab (anti-IL-1β monoclonal antibody) administered to patients with prior myocardial infarction and elevated hsCRP reduced recurrent MI at the 150 mg dose (HR 0.85, 95% CI 0.74–0.98, p=0.021) without lowering LDL cholesterol — establishing that the IL-1β/NLRP3 arm of inflammation causally contributes to atherosclerotic cardiovascular events in humans [^ridker2017]. (CANTOS HR and CI values are reported on [[nf-kb]] as verified; verify against the PDF at local path before relying on these exact figures.)

### Type 2 diabetes

Pancreatic islet amyloid (IAPP deposits) and high-fat diet-driven adipose tissue inflammation both activate NLRP3 in macrophages and, to some degree, in beta cells themselves, generating local IL-1β. IL-1β impairs insulin secretion and promotes beta-cell apoptosis, contributing to the progressive beta-cell failure that characterizes [[type-2-diabetes]]. This observation underpins trials of anakinra and canakinumab in T2D. #gap/needs-human-replication — mouse data strong; human IL-1 blockade trials in T2D have shown modest glycemic effects, not yet replicated at scale.

### Alzheimer's disease

In the [[alzheimers-disease|Alzheimer's brain]], β-amyloid (Aβ) fibrils and oligomers activate NLRP3 in [[microglia]]. Heneka et al. showed in APP/PS1 mice that NLRP3 deficiency reduces amyloid plaque burden (~70% reduction in FA-extractable Aβ at 16 months), skews microglia toward an M2 phagocytic phenotype, and preserves spatial memory (Morris Water Maze) and LTP [^heneka2013]. The paper also showed strongly elevated cleaved caspase-1 in human MCI and AD brain tissue compared to controls. Tau phosphorylation reduction was not reported in Heneka 2013 and should not be attributed to this study. #gap/unsourced — tau phosphorylation link needs separate citation. ASC specks released extracellularly seeding Aβ aggregation is a later finding (Venegas et al. 2017, Nat Med) not established by Heneka 2013. #gap/needs-human-replication — mouse models robust; human genetic data limited (no common NLRP3 variants with established AD risk).

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| NLRP3 → neuroinflammation/AD phenotype? | yes (mouse models) |
| Replicated in humans? | in-progress (NLRP3-inhibitor CNS trials planned; no Phase 2/3 data yet) |

### Cardiac aging and heart failure

NLRP3 activation is elevated in failing human and mouse hearts. Senescent cardiomyocytes (CM senescence, see [[cardiomyocytes]]) activate NLRP3 in recruited macrophages via SASP components, and CM pyroptosis contributes to myocardial remodeling under pressure overload and ischemic injury. The non-canonical, Tgfb2/Gdf15/Edn3-only SASP of CMs (Anderson 2019) does not include IL-1β directly, but NLRP3 in neighboring immune cells can be activated by CM-derived DAMPs (mtDNA, ATP). #gap/no-mechanism — the specific DAMPs linking aged CMs to myocardial NLRP3 activation have not been directly demonstrated.

## Genetic disorders: CAPS

Gain-of-function mutations in *CIAS1* (the gene encoding NLRP3) cause **Cryopyrin-Associated Periodic Syndromes (CAPS)**, a spectrum of Mendelian autoinflammatory disorders [^hoffman2001]:

| Syndrome | Severity | Features |
|---|---|---|
| FCAS (Familial Cold Autoinflammatory Syndrome) | Mild | Cold-triggered urticaria, fever, arthralgia |
| MWS (Muckle-Wells Syndrome) | Intermediate | Periodic fever, urticaria, sensorineural deafness, amyloidosis |
| CINCA/NOMID | Severe | Chronic neonatal-onset multisystem inflammatory disease |

All three syndromes respond dramatically to IL-1 blockade (anakinra, canakinumab, rilonacept), providing unambiguous human genetic proof that constitutive NLRP3 activation drives pathology — and validating IL-1β as the key effector downstream of NLRP3.

## Therapeutic angles

| Agent | Target | Mechanism | Approval / Stage | Evidence level |
|---|---|---|---|---|
| **Anakinra** | IL-1R1 (blocks IL-1α + IL-1β) | Competitive receptor antagonist (recombinant IL-1Ra) | FDA-approved (CAPS, RA, NOMID) | Strong (CAPS); limited (aging applications) |
| **Canakinumab** | IL-1β (monoclonal) | Neutralizes secreted IL-1β | FDA-approved (CAPS, gout, SJIA); CANTOS Phase 3 [^ridker2017] | Strong (CAPS, CV); limited (T2D, AD) |
| **Rilonacept** | IL-1α + IL-1β (soluble receptor trap) | Decoy receptor fusion protein | FDA-approved (CAPS) | Strong (CAPS); no aging trial data |
| **MCC950** | NLRP3 directly | Inhibits NLRP3 ATPase / conformational change; blocks ASC speck formation | Preclinical (no human trials) [^coll2015] | Preclinical only; #gap/needs-human-replication |
| **Colchicine** | Microtubules (pleiotropic) | Inhibits NLRP3 assembly (indirect); anti-neutrophil; anti-crystal phagocytosis | FDA-approved (gout); LoDoCo2 trial CV outcomes positive | Limited (gout-NLRP3 link established; CV mechanism multi-mechanism) |
| **Senolytics** | Senescent cells (upstream) | Eliminate SASP source that primes/amplifies NLRP3 activation | Preclinical-to-Phase-2 ([[interventions/pharmacological/senolytics]]) | Preclinical; human trials limited |

### MCC950 / CMPD-4

MCC950 (also called CMPD-4) is the most widely used selective NLRP3 inhibitor in preclinical research. Coll et al. showed it blocks NLRP3 ASC speck formation and IL-1β release in macrophages and in multiple mouse models of NLRP3-driven disease without affecting NLRC4, AIM2, or NLRP1 inflammasomes [^coll2015]. No human clinical trials have been reported as of 2026. #gap/needs-human-replication #gap/dose-response-unclear

### Canakinumab / CANTOS

The CANTOS trial (Ridker 2017) enrolled 10,061 patients with prior MI and hsCRP ≥2 mg/L and randomly assigned them to canakinumab 50/150/300 mg subcutaneous every 3 months vs placebo. The 150 mg dose met the primary MACE endpoint (HR 0.85, 95% CI 0.74–0.98, p=0.021). The 300 mg dose also reduced cancer incidence and mortality (Lancet companion paper — separate endpoint, separate statistical analysis). Increased fatal infection risk was observed (incidence rates ~0.31 vs 0.18 per 100 person-years; HR ~1.31). The trial established human causal proof for IL-1β in atherosclerotic events, independent of LDL lowering [^ridker2017].

## Limitations and open questions

- **NLRP3 and aging in humans**: while strong mechanistic evidence links NLRP3 to inflammaging in rodents, direct human intervention data beyond CAPS and atherosclerosis (CANTOS) is sparse. #gap/needs-human-replication
- **Tissue-specific NLRP3 biology**: macrophage/microglia-centric studies may underrepresent NLRP3 roles in non-immune cells (cardiomyocytes, neurons, adipocytes). #gap/no-mechanism in several tissue contexts
- **MCC950 translation**: no human-grade NLRP3 inhibitor has completed Phase 2 trials as of 2026. Infectivity risk (paralleling canakinumab's fatal infection signal) is a concern for chronic use in aging populations. #gap/long-term-unknown
- **NLRP3 vs other inflammasomes**: aged tissue may also involve NLRC4, AIM2, NLRP1, and non-canonical caspase-4/5 pathways; NLRP3-centric therapeutic targeting may be incomplete. #gap/needs-replication

## Cross-references

This pathway intersects with:
- [[chronic-inflammation]] — NLRP3 as the molecular effector of inflammaging
- [[nf-kb]] — Signal 1 priming; downstream of IL-1β secretion (paracrine feed-forward)
- [[sasp]] — Senescent-cell SASP provides both priming signals (IL-1α) and DAMPs
- [[atherosclerosis]] — cholesterol crystal NLRP3 activation in foam-cell macrophages
- [[type-2-diabetes]] — islet/adipose NLRP3 in beta-cell loss and insulin resistance
- [[alzheimers-disease]] — Aβ-driven microglial NLRP3 and ASC speck seeding
- [[microglia]] — primary NLRP3-expressing cell type in the CNS
- [[cardiomyocytes]] — non-canonical SASP and cardiac NLRP3 context
- [[interventions/pharmacological/senomorphics]] — IL-1β inhibition as senomorphic strategy
- [[pyroptosis]] — effector cell death mode downstream of GSDMD cleavage (stub)
- [[caspase-1]] — effector caspase; protein page planned (stub)
- [[il-1b]] — primary cytokine output; protein page planned (stub)
- [[gsdmd]] — pore-forming executioner; protein page planned (stub)
- [[asc]] — adaptor bridging NLRP3 and pro-caspase-1; protein page planned (stub)

## Footnotes

[^martinon2002]: doi:10.1016/s1097-2765(02)00599-3 · Martinon F, Burns K, Tschopp J · Mol Cell 2002 · in-vitro · model: THP-1 cell-free system + 293T reconstitution + dominant-negative in differentiated THP-1 cells · coined the term "inflammasome"; demonstrated NALP1/Pycard/caspase-1/caspase-5 complex by gel filtration (~700 kDa); showed Pycard (ASC) is essential for caspase-1 and caspase-5 activation; DN-Pycard blocked LPS-induced IL-1β maturation in vivo; NALP1 is the founding member — NLRP3 (NALP3) is mentioned as related but is not studied as an inflammasome component in this paper · 5,880 citations · archive: local PDF available at  (local PDF))00599-3.pdf

[^hoffman2001]: doi:10.1038/ng756 · Hoffman HM et al. · Nat Genet 2001 · genetic/positional cloning · model: FCAS and MWS pedigrees (human germline), 3 FCAS families + 1 MWS family · identified CIAS1 (NLRP3) gain-of-function missense mutations in exon 3 (which encodes the NBS/NACHT domain, not the PYD-NACHT linker; mutations A439V, V198M, E627G, A352V all map to the NACHT domain per Fig. 3b); both FCAS and MWS caused by same gene; protein named cryopyrin; 920 aa, 105.7 kDa, pI 6.16; mutations absent in >100 normal controls · 1,631 citations · archive: local PDF available at  (local PDF)

[^agostini2004]: doi:10.1016/s1074-7613(04)00046-9 · Agostini L et al. (Tschopp lab) · Immunity 2004 · in-vitro · model: 293T reconstitution + THP-1 endogenous inflammasome + monocytes from a single MWS patient (R260W mutation) · demonstrated NALP3 (NLRP3) forms an inflammasome with ASC, Cardinal (CARD8), and caspase-1, but NOT caspase-5 (key distinction from the NALP1 inflammasome); NALP3-induced caspase-1 activation is strictly dependent on ASC; macrophages from the MWS R260W patient spontaneously secreted active IL-1β even without LPS stimulation, supporting constitutive inflammasome activation as the pathogenic mechanism; anakinra treatment of these patients abolished symptoms within hours · 1,726 citations · archive: local PDF available at  (local PDF))00046-9.pdf

[^duewell2010]: doi:10.1038/nature08938 · Duewell P et al. · Nature 2010 · in-vivo + in-vitro · model: ApoE⁻/⁻ mice (confocal early-lesion study) + lethally irradiated *Ldlr⁻/⁻* mice reconstituted with NLRP3-KO, ASC-KO, or IL-1α/β-dKO bone marrow (n=7–9/group), fed high-fat diet 8 weeks · cholesterol crystals appear as early as 2 weeks after atherogenic diet in ApoE⁻/⁻ mice, correlated with macrophage accumulation (r²=0.99, P<0.001); cholesterol crystals activate NLRP3 via phagolysosomal membrane rupture + cathepsin B/L release; NLRP3-KO and ASC-KO bone marrow recipients showed ~69% reduction in average aortic sinus lesion area vs WT bone marrow controls (P<0.0001); cholesterol crystals without LPS priming did not release IL-1β (priming required for in-vitro activation); IL-18 plasma levels also reduced in KO reconstituted mice · 3,809 citations · archive: local PDF available at  (local PDF)

[^ridker2017]: doi:10.1056/NEJMoa1707914 · Ridker PM et al. (CANTOS Trial) · NEJM 2017 · rct · n=10,061 · model: humans with prior MI and hsCRP ≥2 mg/L · canakinumab 150 mg q3mo: HR 0.85 (95% CI 0.74–0.98, p=0.021) for MACE vs placebo; no LDL change; fatal infection rate increased (~0.31 vs 0.18/100 person-yr) · established human causal proof for IL-1β in atherosclerotic events · 8,619 citations · archive: local PDF available at  (local PDF)

[^heneka2013]: doi:10.1038/nature11729 · Heneka MT et al. · Nature 2013 (published Jan 2013; PMC manuscript) · in-vivo · model: APP/PS1 transgenic mice crossed with *Nlrp3⁻/⁻* (n=15) or *Casp1⁻/⁻* (n=14) vs APP/PS1 WT (n=14) and WT controls (n=16); all on C57Bl/6 background; 16-month-old animals · NLRP3 or caspase-1 deficiency: (1) reduced Aβ plaque burden and FA-extractable Aβ (~70% reduction in formic-acid-soluble Aβ); (2) improved spatial memory (Morris Water Maze, probe trial day 9, p<0.05); (3) prevented LTP suppression (p<0.001); (4) skewed microglia to M2 phenotype with enhanced Aβ phagocytosis; (5) increased IDE expression. Also showed elevated cleaved caspase-1 in human MCI (n=8) and AD (n=12) brain vs controls (n=8). Tau phosphorylation was NOT reported as an outcome in this paper — do not attribute that claim here. · 2,736 citations · archive: local PDF available at  (local PDF)

[^coll2015]: doi:10.1038/nm.3806 · Coll RC et al. · Nat Med 2015 · in-vitro + in-vivo · model: macrophages (human + mouse) + multiple disease models (gout, T2D, peritonitis, EAE, CAPS) · MCC950 (CMPD-4) selectively inhibits NLRP3 but not NLRC4/AIM2/NLRP1; blocks ASC speck formation and IL-1β/IL-18 secretion; effective in multiple inflammatory disease models; no human trial data · 2,637 citations · archive: download pending (OA green — not yet verified against primary source; quantitative claims in MCC950 section of this page remain unverified #gap/needs-verification)
