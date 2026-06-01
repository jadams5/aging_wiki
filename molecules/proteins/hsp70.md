---
type: protein
aliases: [HSPA1A, HSPA1B, HSPA1L, "heat shock 70 kDa protein 1A", "heat shock 70 kDa protein 1B", HSP70-1, HSP70-2, HSP72, "inducible HSP70"]
uniprot: P0DMV8
ncbi-gene: 3303
hgnc: 5232
complex-subunits: [P0DMV8, P0DMV9, P34931]
ensembl: ENSG00000204389  # primary paralog HSPA1A (HSPA1B/HSPA1L share family-level druggability)
druggability-tier: 1  # OC:Advanced Clinical + SM:High-Quality Ligand + Druggable Family (Open Targets, HSPA1A) — family-level druggability is composite
caused-by: []
causes: []
pathways: ["[[heat-shock-response]]", "[[unfolded-protein-response]]"]
hallmarks: ["[[loss-of-proteostasis]]"]
sens-categories: []
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Beere 2000 (10.1038/35019501) verified end-to-end against local PDF — mechanism, cell systems, and apoptosome-assembly claims confirmed; erroneous S49 cell reference in footnote corrected. UniProt P0DMV8/P0DMV9/P34931 sequence lengths (641 aa each) and PTM sites (Ala-2 acetylation, Lys-77 acetylation, Lys-561 trimethylation, Ser-631/Ser-633/Thr-636 phosphorylation) verified against live UniProt REST API. Heydari 1993, Locke 1996, Hsu 2003, Akerfelt 2010 are all not_oa and could not be verified against full text — quantitative claims (47% HSF1 reduction, 35% Hsp72 reduction, +30% lifespan) and abstract-confirmed qualitative findings are preserved as-is with #gap/no-fulltext-access tags added; Mayer & Bukau 2005 already verified on hsc70.md — chaperone-cycle deferral confirmed consistent. NCBI Gene IDs 3303/3304/3305 and HGNC IDs 5232/5233/5234 not independently re-checked against live databases."
---

# HSP70 (HSPA inducible — HSPA1A / HSPA1B / HSPA1L)

> **Division of labor:** This is the **family page** for the stress-inducible cytosolic HSP70 paralogs. For the constitutive cognate HSC70 (HSPA8) — which drives clathrin uncoating and chaperone-mediated autophagy — see [[hsc70]] (verified-partial, R10d). The two subfamilies share the same Hsp70 chaperone cycle architecture but are regulated by fundamentally different mechanisms and serve different primary cellular roles.

The inducible HSP70 paralogs (HSPA1A, HSPA1B, HSPA1L) are the central effectors of the mammalian heat-shock response (HSR). Under basal conditions their expression is low; acute stress (heat, oxidative damage, heavy metals, proteotoxic insults) triggers the transcription factor HSF1 to activate HSPA1A and HSPA1B transcription within minutes, producing a 10–100-fold surge in HSP70 protein that prevents newly denatured proteins from aggregating, refolds salvageable clients, and — when refolding fails — routes terminally misfolded proteins toward proteasomal or autophagic degradation. In aging, the capacity of this induction response declines progressively: both HSF1 transcriptional activity and the magnitude of HSP70 induction fall with age in rodents and human cells [^heydari1993] [^locke1996], compromising stress resistance and proteostasis and contributing to the [[loss-of-proteostasis]] hallmark of aging.

## Members of the inducible HSPA subfamily

| Member | UniProt | NCBI Gene | HGNC | Length | Expression pattern | Atomic page |
|---|---|---|---|---|---|---|
| HSPA1A (HSP70-1, HSP72) | P0DMV8 | 3303 | 5232 | 641 aa | Strongly stress-inducible (HSF1-driven); basal expression low | this page — family canonical |
| HSPA1B (HSP70-2) | P0DMV9 | 3304 | 5233 | 641 aa | Strongly stress-inducible (HSF1-driven); ~99% identical to HSPA1A at protein level | this page |
| HSPA1L (Hum70t) | P34931 | 3305 | 5234 | 641 aa | Testis-enriched constitutive; low-level stress-inducible in somatic tissues | this page |

**Closely related paralogs covered elsewhere or not yet paged:**

| Member | UniProt | NCBI Gene | Length | Compartment | Atomic page |
|---|---|---|---|---|---|
| HSPA8 (HSC70, HSC73) | P11142 | 3312 | 646 aa | Cytosol — constitutive | [[hsc70]] (verified-partial, R10d) |
| HSPA5 (BiP / GRP78) | P11021 | 3309 | 654 aa | ER-resident; UPR-induced | no page yet — brief notes below |
| HSPA9 (mortalin / GRP75) | P38646 | 3313 | 679 aa | Mitochondrial matrix | no page yet — brief notes below |

The full HSPA family has 13 members in humans. This page treats HSPA1A/1B/1L as a functional unit — they share identical domain architecture, overlapping client spectra, and co-regulation by HSF1 — while summarizing the compartment-specific paralogs for orientation. The HSPA1A and HSPA1B genes are adjacent on chromosome 6p21.33 within the MHC class III region and differ at only ~3 amino acid positions; they are functionally redundant in most studied assays. HSPA1L is more diverged at the expression level but retains high structural similarity.

**HSPA5 (BiP/GRP78) — ER context:** Resident in the ER lumen; the primary Hsp70 family member of the unfolded protein response (UPR). Activated by ER stress via PERK/IRE1α/ATF6 pathways rather than HSF1. Implicated in aging through age-associated ER stress accumulation. Not further detailed here; see [[unfolded-protein-response]] (verified R27) for the full ER-stress arm.

**Sibling chaperone family — HSP90:** [[hsp90]] (verified R27) is the major non-HSPA cytosolic chaperone family (HSP90AA1 + HSP90AB1 paralogs); together HSP90 and HSP70 form the core HSF1-induced chaperone arm of proteostasis. HSP70 and HSP90 cooperate at multiple levels — they jointly sequester HSF1 at rest (negative feedback), and the HSP70/HSP90 superchaperone complex hands clients between the two ATPases for nascent-chain folding (HSP70 first, HSP90 for stabilization of metastable conformers). HSP90 has a narrower client repertoire (steroid receptors, kinases, transcription factors) but is essential for the maturation of those clients. Druggability split: HSP90 is tier 2 (advanced-clinical inhibitors only, oncology-context); HSP70 is tier 3 (research-only inhibitors as of 2026).

**HSPA9 (mortalin/GRP75) — mitochondrial context:** Resident in the mitochondrial matrix; involved in mitochondrial protein import and the mitochondrial unfolded protein response (UPRmt). Implicated in neurodegeneration and named for its discovery as a mortality-associated factor in cultured cells. No wiki page yet. #gap/needs-canonical-id — mortalin atomic page is a candidate stub.

## Domain architecture

The inducible HSPA1A/1B/1L paralogs share the same bipartite domain architecture as all canonical Hsp70 family members, described in detail for the shared cycle on [[hsc70]]:

| Domain | Approximate residues (HSPA1A) | Function |
|---|---|---|
| Nucleotide-binding domain (NBD) | ~2–386 | ATP/ADP binding and hydrolysis; drives allosteric switch between open (low-affinity) and closed (high-affinity) substrate states |
| Substrate-binding domain-β (SBD-β) | ~394–509 | Binds hydrophobic segments of unfolded clients in a β-sandwich cleft |
| Substrate-binding domain-α / lid (SBD-α) | ~510–609 | Helical lid; closes over the substrate cleft in ADP-bound state, trapping substrate |
| C-terminal EEVD motif | ~638–641 | Docking site for TPR-domain co-chaperones (HOP/STIP1, CHIP/STUB1); conserved across cytosolic Hsp70 family |

The domain architecture and chaperone cycle are identical between HSPA1A and HSC70 (HSPA8). The key differences between the inducible and constitutive members are regulatory, not structural: HSPA1A/1B are HSF1 transcriptional targets whose expression surges under stress, whereas HSC70 maintains a large constitutive pool. At the substrate level, both recognize exposed hydrophobic stretches in unfolded or partially denatured polypeptides.

**Key PTMs (HSPA1A, UniProt P0DMV8):**

- N-terminal acetylation at Ala-2 (co-translational)
- Lys-77 acetylation — stress-responsive; acetylated state correlates with routing toward degradation rather than refolding (UniProt evidence)
- Lys-561 trimethylation (by METTL21A) — increases chaperone activity; shared with HSC70
- Ser-631/Ser-633/Thr-636 phosphorylation — functional context not fully characterized

For the full chaperone cycle mechanism (J-protein co-chaperone stimulation of ATP hydrolysis; BAG-family NEF-mediated nucleotide exchange; CHIP-mediated ubiquitination triage), see [[hsc70]] — the cycle is shared and not restated here. #gap/unsourced — the K77 acetylation-state routing claim from UniProt curation requires a primary-source citation; flag for next lint pass.

## The heat-shock response and HSF1 axis

The HSR is the primary regulatory context distinguishing inducible HSP70 from its constitutive paralogs [^akerfelt2010].

**Basal repression of HSF1:** Under unstressed conditions, HSF1 monomers are held inactive in a complex with HSP70 (HSPA1A), HSP90, and TRiC/CCT chaperonin. The sequestered HSF1 pool is **predominantly nuclear** (Anckar & Sistonen 2011 p.1091; the older "basal HSF1 lives in the cytoplasm" model has been superseded — see verified [[hsf1]] page). This sequestration creates a chaperone-titration mechanism: so long as chaperones are available to bind HSF1, the transcription factor remains inactive.

**Stress activation:** When a proteotoxic stress (heat, oxidative damage, heavy metals, hypoxia, viral infection) generates misfolded or unfolded proteins, HSP70 and HSP90 are titrated away from HSF1 toward misfolded clients. Free HSF1 then:

1. Trimerizes (from monomer to active homotrimer)
2. Acquires DNA-binding competence
3. Binds heat shock elements (HSEs) — pentanucleotide `nGAAn` arrays in gene promoters
4. Activates transcription of HSPA1A, HSPA1B, DNAJB1, HSPH1, and dozens of other heat-shock genes

The result is a rapid (minutes) and large-fold (10–100×) increase in HSP70 protein. As newly synthesized HSP70 re-accumulates, it re-engages HSF1, trimers dissociate, and the HSF1 signal is attenuated in a negative-feedback loop [^akerfelt2010]. This autoregulatory architecture makes the HSR intrinsically self-limiting.

**HSF1 beyond classical heat shock:** HSF1 regulates a broader transcriptional program than its name implies: developmental genes, metabolic genes, and longevity pathways (particularly in collaboration with DAF-16/FOXO in *C. elegans*) are co-regulated by HSF1 [^hsu2003].

**Pharmacological HSF1 modulation:**
- HSP90 inhibitors (geldanamycin, 17-AAG/tanespimycin, ganetespib) de-repress HSF1 by sequestering HSP90 away from HSF1 — paradoxically inducing a heat-shock response while killing cancer cells. Used clinically in oncology.
- HSF1A and compound F1 (small-molecule HSF1 activators; preclinical) — promote HSR in non-stressed cells; proposed as proteostasis-enhancing agents for neurodegenerative disease.
- Arimoclomol — amplifies the HSF1 response by stabilizing HSF1 binding to HSEs; currently investigational in ALS and inclusion body myositis (IMBs).

## Anti-apoptotic activity

HSP70 directly inhibits the intrinsic apoptotic pathway at the level of apoptosome assembly [^beere2000].

Beere et al. 2000 demonstrated in cell-free systems that HSP70 prevents cytochrome *c* / dATP-mediated caspase activation by binding directly to Apaf-1 — not to procaspase-9 — thereby blocking recruitment of procaspase-9 to the Apaf-1 apoptosome complex. Crucially, HSP70 allows the formation of Apaf-1 oligomers but prevents functional apoptosome assembly at the caspase-recruitment step. This mechanistic distinction placed HSP70 as a post-cytochrome-c checkpoint in apoptosis signaling (see [[apaf-1]] for the apoptosome assembly details; [[apoptosis]] for pathway context) [^beere2000].

Additional anti-apoptotic mechanisms reported for HSP70:
- Inhibition of AIF (apoptosis-inducing factor) nuclear translocation in caspase-independent death pathways
- Sequestration of cytochrome *c* before apoptosome engagement (reported in some contexts; mechanistic status contested)

The anti-apoptotic activity of HSP70 is a major mechanism underlying cytoprotection by heat preconditioning and ischemic preconditioning in heart and brain — tissues with well-documented age-associated vulnerability to ischemia-reperfusion injury.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Apaf-1/procaspase-9/cytochrome-c apoptosome is conserved; HSP70-Apaf-1 interaction studied in human cell-free systems |
| Phenotype conserved in humans? | partial | Heat preconditioning cardioprotection studied in humans; HSP70-Apaf-1 as mechanism not directly tested in human tissue |
| Replicated in humans? | no | Genetic manipulation evidence absent #gap/needs-human-replication |

## Aging biology

### HSF1 transcriptional output declines with age

The central aging-relevant finding for this subfamily: the HSR becomes progressively attenuated with age at multiple levels [^akerfelt2010].

- **HSF1 activation efficiency declines:** Aged animals show reduced HSF1 trimerization, DNA-binding, and transcriptional output in response to equivalent heat stress stimuli. Locke & Tanguay 1996 quantified a 47% reduction in HSF1 DNA-binding activity and a 35% reduction in Hsp72 protein content in aged rat myocardium following heat stress, despite similar HSF1 protein levels in old vs. young hearts — indicating a post-translational failure of HSF1 activation rather than loss of HSF1 protein [^locke1996]. #gap/no-fulltext-access — Locke 1996 is closed-access; the 47% and 35% figures could not be verified against the full PDF.
- **HSP70 mRNA induction is blunted in aged rodents:** Heydari et al. 1993 showed in aged male Fischer 344 rats that HSP70 (Hsp72) mRNA induction by heat stress was reduced compared with young animals in liver, and that this decline was diet-sensitive — caloric restriction partially preserved the induction response [^heydari1993]. #gap/no-fulltext-access — Heydari 1993 is closed-access; magnitude of the mRNA reduction could not be verified against the full PDF.
- **Human evidence:** Similar attenuation of heat-inducible HSP70 protein in peripheral blood mononuclear cells (PBMCs) has been reported in aged humans in multiple observational studies, though the mechanistic basis (HSF1 activity, chromatin accessibility, post-translational regulation) is not fully characterized in humans. #gap/needs-replication — the PBMC finding requires a specific primary citation; flag for next lint pass.

The net consequence of blunted HSP70 induction is reduced capacity to handle proteotoxic stress in aged tissues — contributing to accumulation of aggregated proteins, increased vulnerability to ischemia-reperfusion injury, and impaired recovery from acute stress.

### HSF1 overexpression extends lifespan in model organisms

Hsu, Murphy & Kenyon 2003 demonstrated that *C. elegans* with reduced *hsf-1* activity (RNAi knockdown) showed accelerated tissue aging and shortened lifespan, while overexpression of *hsf-1* extended lifespan [^hsu2003]. The paper also established a cooperative interaction between HSF-1 and DAF-16 (the worm FOXO ortholog): both transcription factors co-activate genes encoding small heat-shock proteins (*hsp-16.1*, *hsp-16.49*) that mediate the longevity effect. Importantly, polyglutamine-expansion protein aggregation — an aging-associated proteotoxic insult — was delayed in long-lived animals, linking HSF1/HSP70 activity to protein aggregate accumulation in aging [^hsu2003]. #gap/no-fulltext-access — Hsu 2003 is closed-access (not_oa); the lifespan extension magnitude and tissue-aging details could not be verified against the full PDF.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | HSF1 pathway and Hsp70 targets highly conserved; DAF-16/FOXO axis conserved |
| Phenotype conserved in humans? | unknown | No human lifespan manipulation study possible; GWAS associations weak |
| Replicated in humans? | no | Model-organism finding only #gap/needs-human-replication |

### HSPA1L longevity associations

Population-genetic studies have reported associations between HSPA1L variants and longevity in some cohorts, potentially reflecting altered stress-response calibration. These associations are not consistently replicated across cohorts and may reflect linkage disequilibrium with nearby MHC loci on chromosome 6p21.33. #gap/needs-replication — HSPA1L longevity SNP evidence does not meet the threshold for inclusion as a supported claim; a primary citation and replication study are required before this can be stated non-hedged.

## Disease relevance

### Neurodegeneration — proteostasis angle

HSP70 (HSPA1A/1B) and HSP90 cooperate as chaperones for misfolded α-synuclein, Aβ, and tau — the aggregation-prone proteins of Parkinson's disease and Alzheimer's disease. In vitro, elevated HSP70 suppresses aggregation of α-synuclein and reduces formation of toxic oligomers. The declining HSP70 induction capacity in aged neurons is therefore hypothesized to accelerate neurodegenerative pathology onset, though direct evidence for HSP70 induction failure as a causal driver (rather than a contributing factor) in human neurodegeneration is not established. #gap/no-mechanism

For the HSC70 / CMA / α-synuclein axis (distinct from the inducible HSP70 aggregate-suppression role described here), see [[hsc70]] and [[alpha-synuclein]].

### Cancer — HSP70 overexpression as a survival mechanism

Many tumor types show constitutively elevated HSPA1A/HSPA1B expression, independent of acute stress induction — often attributed to the proteotoxically stressful tumor microenvironment (hypoxia, nutrient limitation, rapid growth), NF-κB activation, or HSF1 hyperactivation in cancer. HSP70 overexpression protects tumor cells from proteotoxic stress, chemotherapy-induced apoptosis, and immune-mediated killing. This has made HSP70 a target in oncology drug development, though no HSP70 inhibitor has reached approval.

### Ischemia-reperfusion injury

Heat preconditioning (brief sublethal heat exposure) induces HSP70 and confers protection against subsequent ischemia-reperfusion injury in heart and brain in animal models. The protective effect is blunted in aged animals in parallel with the decline in HSP70 inducibility [^locke1996]. Pharmacological HSF1 activation (arimoclomol, small-molecule HSF1 activators) is being explored as a means to restore this protective capacity in aged tissues without requiring heat stress.

## Pharmacology

### HSP90 inhibitors — HSF1/HSP70 inducers

Geldanamycin (and its analogs 17-AAG/tanespimycin, 17-DMAG/alvespimycin, ganetespib) bind the ATP-binding pocket of HSP90, disrupting HSP90's chaperone function. This releases HSF1 from HSP90 sequestration, driving HSF1 trimerization and robust induction of HSP70. The HSP70 induction by HSP90 inhibitors is a well-characterized on-target pharmacodynamic biomarker. Clinically used in oncology (multiple tumor types); not aging-specific, but mechanistically relevant to HSF1/HSP70 biology.

### HSP70 inhibitors (research tools and early clinical)

- **VER-155008** — adenosine-derived ATP-site inhibitor of Hsp70 NBD (~0.5 µM affinity); does not discriminate well between HSPA1A and HSPA8; used as a tool compound in cancer biology. Not clinically advanced.
- **JG-98** — allosteric inhibitor targeting the HSP70-BAG3 interaction surface (the C-terminal EEVD/BAG interface); disrupts HSP70 co-chaperone routing; anti-tumor activity in preclinical models. Not aging-specific.

Neither compound has a published aging-specific study. #gap/dose-response-unclear — optimal pharmacological modulation strategy for aging (activate vs inhibit; which paralog; which tissue) is undefined.

### Arimoclomol — HSF1 co-inducer

Arimoclomol (Orphazyme) is a small molecule that amplifies HSF1 transcriptional activity by slowing the dissociation of HSF1 trimers from HSEs. It does not activate HSF1 de novo but co-induces the stress response when HSF1 is already partially activated. Investigated in ALS (Phase 2/3 clinical trials) and inclusion body myositis (IBM). The rationale — restore failing proteostasis in protein-aggregation diseases by amplifying the HSR — directly addresses the age-associated HSP70 induction failure. Clinical results in ALS Phase 2/3 trials did not meet primary endpoints; investigation continues in other indications. #gap/long-term-unknown

### Indirect strategies: CASA and BAG3

Chaperone-assisted selective autophagy (CASA) routes misfolded proteins to autophagosomes via the HSP70 / BAG3 / HSPB8 / p62/SQSTM1 complex. BAG3 (the stress-inducible BAG family nucleotide exchange factor) switches HSP70-client complexes from proteasomal delivery toward autophagy. CASA activity declines in aged muscle, contributing to myofibrillar protein aggregate accumulation and muscle weakness. Strategies to enhance CASA — via BAG3 overexpression, HSPB8 enhancement, or autophagy pathway activation — are being explored as aging interventions. See [[autophagy]] for the broader autophagic flux context.

## Key interactors

| Interactor | Type | Functional context |
|---|---|---|
| [[hsp90]] | Co-chaperone partner | HSP90/HSP70 superchaperone complex for steroid receptors and kinases; HSP90 sequesters HSF1 at baseline |
| [[apaf-1]] | Substrate (anti-apoptotic target) | HSP70 binds Apaf-1, blocking apoptosome assembly [^beere2000] |
| [[hsf1]] | Transcription factor (upstream regulator) | HSF1 is the master activator of HSPA1A/1B transcription; HSP70 feeds back to repress HSF1 — autoregulatory loop |
| [[hsc70]] | Paralog (constitutive) | Shared chaperone cycle; functional divergence in CMA, clathrin uncoating; the cognate vs inducible distinction |
| DNAJB1 (Hsp40) | J-protein co-chaperone | Co-induced with HSPA1A by HSF1; stimulates ATP hydrolysis; substrate presentation |
| [[chip]] (STUB1) | E3 ubiquitin ligase | Binds EEVD motif of HSP70; routes non-foldable clients to proteasomal degradation |
| BAG3 | NEF / autophagy adaptor | Nucleotide exchange + CASA routing; stress-inducible BAG family member |
| BAG1 | NEF / proteasome adaptor | Nucleotide exchange + proteasome-directed routing |
| HSPH1 (HSP105/110) | NEF | High-affinity nucleotide exchange; co-induced by HSF1 |

Cross-references to [[dnaj]] and [[bag]] (family pages): neither page exists yet — implicit stubs.

## Limitations and open questions

- **Human aging data are largely indirect.** HSP70 induction decline in aging is well-documented in rodents; the human evidence is primarily from PBMC studies and observational cross-sectional data. Tissue-level quantification of HSP70 inducibility in aged human organs is lacking. #gap/needs-human-replication
- **HSPA1A vs HSPA1B functional distinction.** Despite ~99% protein identity, whether HSPA1A and HSPA1B have distinct expression kinetics, client preferences, or interactor biases in the context of aging is not established. Most studies use antibodies or probes that cannot distinguish them. #gap/needs-replication
- **Causal vs correlative decline.** The age-associated decline in HSP70 induction is well-established as a correlate of aging; whether it is causal (contributing to aging phenotypes) or a downstream consequence of other aging changes (e.g., epigenetic silencing at HSE-containing promoters, HSF1 PTM pattern changes) requires genetic rescue experiments in aged animals. #gap/no-mechanism
- **Therapeutic window for HSF1 activation.** Chronic HSF1 overactivation supports cancer cell survival (HSF1 is a driver of non-oncogene addiction in many tumor types). An aging intervention that broadly activates HSF1 may have oncogenic risk; the risk/benefit balance in aged non-cancer tissue is not studied. #gap/long-term-unknown
- **HSPA1L aging-specific function.** HSPA1L has received minimal study in aging contexts outside of longevity genetics. Its testis-enriched expression and lower stress inducibility in somatic tissues make it an outlier in this family; whether it has aging-specific functions is essentially unknown. #gap/no-mechanism
- **GenAge status.** HSPA1A/HSPA1B do not have confirmed GenAge-human entries as of the seeding date (2026-05-05), though HSF1 (*hsf-1*) and multiple small heat-shock proteins are listed in GenAge-models from *C. elegans* lifespan studies. #gap/needs-canonical-id — check GenAge for HSPA1A at next lint pass.

## Footnotes

[^beere2000]: doi:10.1038/35019501 · Beere HM et al. (2000) "Heat-shock protein 70 inhibits apoptosis by preventing recruitment of procaspase-9 to the Apaf-1 apoptosome" · Nature Cell Biology 2(8):469–475 · in-vitro (cell-free system, cell culture) · model: Jurkat T cell cytosolic extracts (endogenous Hsp70); 293T and MCF-7 cells (Hsp70 overexpression); THP.1 cell lysates (size-exclusion fractionation); recombinant reconstitution with purified Apaf-1, procaspase-9, and cytochrome c · mechanism: HSP70 binds Apaf-1 directly (not procaspase-9); does not block Apaf-1 oligomerization but blocks procaspase-9 recruitment and activation at the apoptosome; Hsp70AAAA mutant (C-terminal EEVD-motif alanine substitution) has no inhibitory activity, confirming the C-terminal interaction surface is required · 1,494 citations (100th percentile) · local PDF: 

[^hsu2003]: doi:10.1126/science.1083701 · Hsu AL, Murphy CT & Kenyon C (2003) "Regulation of Aging and Age-Related Disease by DAF-16 and Heat-Shock Factor" · Science 300(5622):1142–1145 · in-vivo · model: *C. elegans* (Bristol N2 background; RNAi knockdown and transgenic overexpression of *hsf-1*) · *hsf-1* overexpression extends lifespan; *hsf-1* RNAi shortens lifespan and accelerates tissue aging; HSF-1 cooperates with DAF-16/FOXO to induce small heat-shock proteins; polyglutamine aggregation delayed in long-lived animals · 1,488 citations (100th percentile) · not OA; archive: not_oa

[^heydari1993]: doi:10.1128/mcb.13.5.2909 · Heydari AR et al. (1993) "Expression of heat shock protein 70 is altered by age and diet at the level of transcription" · Mol Cell Biol 13(5):2909–2918 · in-vivo · model: male Fischer 344 rats (young 6-month vs aged 24-month); ad libitum vs caloric restriction feeding; HSP70 mRNA induction by 42°C heat stress assessed in liver · finding: heat-inducible HSP70 mRNA significantly reduced in aged rats; caloric restriction partially preserved induction capacity · 239 citations (99th percentile) · not OA; archive: not_oa

[^locke1996]: doi:10.1379/1466-1268(1996)001<0251:dhsrit>2.3.co;2 · Locke M & Tanguay RM (1996) "Diminished heat shock response in the aged myocardium" · Cell Stress & Chaperones 1(4):251–260 · in-vivo · model: aged (26-month) vs young (6-month) Fischer 344 rats; 42°C heat stress; HSF1 activation assessed by gel-shift; Hsp72 protein by Western blot · finding: 47% reduction in HSF1 DNA-binding activity and 35% reduction in Hsp72 protein in aged hearts; aged hearts failed to show heat-preconditioning cardioprotection · 130 citations · not OA; archive: not_oa

[^akerfelt2010]: doi:10.1038/nrm2938 · Akerfelt M, Morimoto RI & Sistonen L (2010) "Heat shock factors: integrators of cell stress, development and lifespan" · Nat Rev Mol Cell Biol 11(8):545–555 · review · comprehensive review of HSF family (HSF1–4) regulation, targets, and aging/longevity roles; covers HSF1 sequestration by Hsp70/90, HSE binding, trimerization, and the negative-feedback autoregulatory loop; aging context includes HSF-1/DAF-16 lifespan data and declining HSR with age · 1,431 citations (100th percentile) · not OA; archive: not_oa

[^mayerbukau2005]: doi:10.1007/s00018-004-4464-6 · Mayer MP & Bukau B (2005) "Hsp70 chaperones: Cellular functions and molecular mechanism" · Cell Mol Life Sci 62(6):670–684 · review · comprehensive mechanistic description of the Hsp70 chaperone cycle (NBD/SBD allostery, J-protein co-chaperone functions, BAG-family NEF nucleotide exchange) — canonical reference shared with [[hsc70]] where this cycle is described in detail · 2,811 citations (100th percentile) · local PDF: 
