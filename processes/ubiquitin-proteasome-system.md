---
type: process
aliases: [UPS, ubiquitin proteasome system, 26S proteasome pathway, proteasome-mediated degradation]
key-proteins: ["[[parkin]]", "[[mdm2]]", "[[uba1]]", "[[ubiquitin]]", "[[psmd14]]"]
pathways: ["[[mtor]]", "[[p53-pathway]]", "[[nf-kb]]"]
hallmarks: ["[[loss-of-proteostasis]]"]
selective-variants: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Hershko & Ciechanover 1998 (local PDF) and Saez & Vilchez 2014, Bonaldo & Sandri 2012 (downloaded PDFs) verified against primary sources. Glickman & Ciechanover 2002 not_oa — claims attributed solely to this source remain unverified. Vilchez/Saez/Dillin 2014 (ncomms6659) download failed (bronze OA, no candidate URLs) — PROTAC and UPS–autophagy integration claims attributed solely to this source remain unverified. Chondrogianni 2015 download corrupted (wrong PDF fetched — see BUG-6 in FEATURE_REQUESTS) — C. elegans lifespan extension claims unverified against primary PDF."
---

# Ubiquitin-Proteasome System (UPS)

The principal ATP-dependent pathway for **selective intracellular protein degradation** in eukaryotes. Substrates are tagged with chains of ubiquitin — a 76-amino-acid protein — through a three-enzyme cascade (E1 → E2 → E3), then recognized and destroyed by the 26S proteasome. Responsible for degrading the majority of short-lived, regulatory, and misfolded proteins in the cytoplasm and nucleus. Distinct from the [[autophagy]]-lysosomal pathway, which handles longer-lived proteins, organelles, and bulk cytoplasm. Both pathways decline with age, contributing to the [[loss-of-proteostasis]] hallmark.

## Mechanism overview

### The ubiquitination cascade

Substrate selection and tagging proceed through three enzymatic tiers [^hershko1998]:

| Tier | Enzyme class | Human count | Function |
|---|---|---|---|
| E1 | Ubiquitin-activating enzyme | 2 (UBA1, UBA6) | ATP-dependent formation of Ub~E1 thioester intermediate |
| E2 | Ubiquitin-conjugating enzyme | ~40 | Transfer Ub from E1 → E2~Ub thioester; define chain topology with E3 |
| E3 | Ubiquitin ligase | ~600–650 | Substrate recognition + Ub transfer from E2 to substrate lysine; primary determinant of substrate specificity |

Note on E1 count: Hershko & Ciechanover 1998 state "usually there is a single E1." The second human E1 (UBA6) was identified in 2007, after the 1998 review. The "2 (UBA1, UBA6)" figure reflects the current consensus; for the ~650 E3 figure see Bonaldo & Sandri 2012 ("more than 650 ubiquitin ligases" in humans [^bonaldo2012]). #gap/unsourced — a current census review should be linked for the precise E2/E3 counts.

The three E3 classes have distinct catalytic mechanisms [^glickman2002]:

- **RING-type** (~600 total): act as scaffolds that juxtapose E2 and substrate; do not form a Ub intermediate (e.g., [[mdm2]], APC/C, SCF complex). Largest class.
- **HECT-type** (~28): form a covalent Ub~E3 thioester intermediate before transfer to substrate (e.g., NEDD4-family). Can shape chain topology independently.
- **RBR-type** (RING-Between-RING, ~14): hybrid mechanism; initial RING acts like RING, second RING (RING2) forms a Ub intermediate like HECT (e.g., [[parkin]], HOIP/LUBAC).

Note: The RING (~600), HECT (~28), and RBR (~14) sub-class counts derive from Glickman & Ciechanover 2002 [^glickman2002], which is closed-access (not_oa) and could not be verified against the PDF. Hershko 1998 recognized only four functional E3 types at the time (N-end rule E3α, HECT, Cyclosome/APC, PULC/SCF) — RING as a structural class and RBR were formalized later. #gap/no-fulltext-access — Glickman 2002 E3 count figures await OA re-verification.

### Polyubiquitin chain types

Ubiquitin has seven internal lysines (K6, K11, K27, K29, K33, K48, K63) plus the N-terminal Met1 (M1/linear chains), all of which can be used as linkage sites for chain extension. Chain topology determines the functional fate of the tagged substrate [^glickman2002]:

| Chain linkage | Primary function |
|---|---|
| **K48** | Canonical proteasomal degradation signal |
| **K11** | Cell cycle substrate degradation (APC/C substrates); some ER-associated degradation |
| **K63** | Non-degradative: DNA-damage signaling, NF-κB activation, autophagy receptor recruitment |
| **M1 (linear)** | NF-κB activation (LUBAC complex) |
| K6, K27, K29, K33 | Context-specific; roles in DNA repair, mitophagy ([[parkin]]-K6/K27) |
| Mixed / branched | Increasingly recognized; enhanced proteasome targeting in some contexts |

### Deubiquitinases (DUBs)

~100 human DUBs reverse ubiquitination, editing chain length and linkage or fully removing Ub tags. Major families: USP (largest), OTU, JAMM, MJD, UCH. Some DUBs associate with the 19S cap directly (USP14, UCHL5/UCH37) and deubiquitinate substrates at the proteasome gate — they can both promote (gate clearance) and suppress (premature release) degradation, creating a regulatory checkpoint.

## The 26S proteasome — architecture

The 26S proteasome (~2.5 MDa) consists of a 20S catalytic core flanked by one or two 19S regulatory particles [^glickman2002]:

### 20S core particle

Four stacked heptameric rings in an α7β7β7α7 arrangement:
- **α-rings** (top and bottom): gate access to the lumen; α1-α7 subunits
- **β-rings** (inner two): carry the three proteolytic activities in the β subunits:

| Active site | Subunit | Cleavage preference |
|---|---|---|
| Chymotrypsin-like | β5 (PSMB5) | After hydrophobic residues |
| Trypsin-like | β2 (PSMB7) | After basic residues |
| Caspase-like | β1 (PSMB6) | After acidic residues |

All three active sites are N-terminal threonine proteases. Substrates are unfolded by the 19S ATPases and threaded through the narrow α-ring gate (~13 Å, from T. acidophilum structural data; eukaryotic gate is closed and opens upon 19S engagement [^hershko1998]) into the lumen, where they are degraded into short peptides (Hershko 1998 estimates ~8 residues based on the 28 Å distance between adjacent active sites; the commonly cited 3–22 residue range derives from later biochemical characterization not in this review).

### 19S regulatory particle

Consists of ~19 subunits in two sub-complexes:
- **Lid** (8 non-ATPase subunits — Rpn3, Rpn5, Rpn6, Rpn7, Rpn8, Rpn9, Rpn11, Rpn12): recognizes and binds polyubiquitin chains; contains RPN11/PSMD14, a JAMM-family DUB that cleaves Ub chains before translocation
- **Base** (6 AAA+ ATPases RPT1-6 + 3 non-ATPase subunits — Rpn1, Rpn2, Rpn10): unfolds substrates + opens the α-ring gate; ATP-dependent

### Immunoproteasome

In immune cells (and in other cell types under IFN-γ stimulation), the constitutive β1/β2/β5 subunits are replaced by inducible variants β1i (LMP2/PSMB9), β2i (MECL1/PSMB10), and β5i (LMP7/PSMB8). The immunoproteasome generates peptides better suited for MHC-I antigen presentation. Expression of immunoproteasome subunits increases with age in some tissues — relevance to [[chronic-inflammation]] is an active area. #gap/needs-replication

## Role in proteostasis and aging

### UPS as a proteostasis arm

The UPS degrades the majority of regulatory proteins with short half-lives: cyclins, transcription factors, misfolded proteins that escape the [[chaperone-mediated-autophagy|CMA]] and [[autophagy|macroautophagy]] arms. It is the primary quality-control mechanism for cytoplasmic and nuclear proteins, and for ER-associated degradation (ERAD) of misfolded ER proteins [^vilchez2014].

The three proteostasis arms are interlinked: UPS impairment upregulates autophagy (compensatory); autophagy impairment can overload the UPS (bidirectional crosstalk). See [[loss-of-proteostasis]] for the integrative hallmark framing.

### Decline with age

Proteasomal activity declines measurably during aging across multiple organisms and tissues [^saez2014]:

- **Chymotrypsin-like activity** (β5, most active site) shows the most consistent age-related decline; decreases documented in aged human fibroblasts, lymphocytes, and rodent tissues
- **Trypsin-like and caspase-like activities** also decline, though more variably across tissue types
- 26S assembly is less efficient in aged cells; free 20S and 19S particles accumulate at the expense of intact 26S complex
- Oxidatively modified proteins accumulate with age and are initially targeted by the UPS, but in excess they inhibit the proteasome — a self-reinforcing decline loop
- **Lipofuscin** — oxidized protein/lipid aggregates — accumulates in lysosomes with age and indirectly sequester proteasomal substrates; not directly degraded by the UPS

Mechanisms of age-related decline include reduced transcription of proteasome subunit genes, post-translational modifications of proteasome subunits (oxidation, carbonylation), and substrate overload from increased protein misfolding burden [^saez2014].

### Evidence: proteasome activation extends lifespan

Genetic or pharmacological proteasome activation is sufficient to extend lifespan in model organisms [^chondrogianni2015], establishing a causal link (not just correlation) between proteasome activity and longevity:

| Model | Intervention | Effect |
|---|---|---|
| *C. elegans* | Overexpression of rpn-6 (19S subunit) | Extended lifespan; resistance to proteotoxic stress |
| *C. elegans* | Chemical activation of 20S particle | Extended lifespan + proteotoxicity resistance [^chondrogianni2015] |
| Human fibroblasts | PSMB5 overexpression | Delayed replicative senescence; reduced protein aggregate burden |

#gap/needs-human-replication — no human intervention trial has demonstrated lifespan or healthspan extension via direct proteasome activation; all data from model organisms or cell culture.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — UPS is ancient and conserved |
| Phenotype conserved in humans? | yes — proteasomal activity decline with age documented in human peripheral blood cells and fibroblasts |
| Replicated in humans? | no — lifespan extension by proteasome activation not tested in humans |

## Aging-disease consequences

### Neurodegeneration

Every major neurodegenerative disease accumulates ubiquitin-positive protein aggregates, which overwhelm and inhibit the UPS, creating a feedforward collapse [^vilchez2014]. The shared aggregate → UPS inhibition → more aggregate cycle is a unifying mechanistic feature. See [[neurodegeneration]] for disease-specific aggregate identities (alpha-synuclein in Parkinson's, tau/Abeta in Alzheimer's, TDP-43 in ALS/FTD, polyQ proteins in Huntington's).

### Skeletal muscle atrophy (sarcopenia)

During muscle atrophy — including sarcopenia, cachexia, and disuse atrophy — two muscle-specific E3 ligases are strongly induced: **atrogin-1** (FBXO32/MAFbx) and **MuRF1** (TRIM63). These target myofibrillar and metabolic proteins for ubiquitin-mediated proteasomal degradation, driving net protein catabolism [^bonaldo2012]. Inhibiting atrogin-1 or MuRF1 reduces atrophy in preclinical models. See [[sarcopenia]].

#gap/needs-human-replication — atrogin-1/MuRF1 mRNA elevation in muscle biopsies has been confirmed in elderly humans during disuse, but whether UPS is the causal driver (vs. reduced protein synthesis) is debated.

### Cancer — oncogene and tumor suppressor regulation

The UPS is the primary regulator of oncoproteins and tumor suppressors with short half-lives. Canonical examples:
- **[[mdm2]]** (RING E3) degrades [[p53]] — the master tumor suppressor — via K48-linked ubiquitination; disruption of MDM2-p53 interaction is a therapeutic strategy
- **SCF-beta-TrCP** targets IκBα → NF-κB activation
- **APC/C-Cdh1** and **SCF-Skp2** are master cell-cycle regulators; their misregulation drives checkpoint bypass

## Key cross-links to the ubiquitin-like conjugation systems

The ATG12 and LC3/GABARAP protein families (central to [[autophagy]]) are activated by **ubiquitin-like (UBL) conjugation cascades** that are structurally homologous to the E1→E2→E3 hierarchy but are distinct systems [^glickman2002]:

- ATG7 (E1-like) activates both ATG12 and LC3
- ATG10 (E2-like) transfers ATG12; ATG3 (E2-like) transfers LC3
- ATG16L1 complex provides E3-like specificity for LC3 lipidation

This evolutionary relationship means some inhibitors cross-react with both systems. The ATG UBL cascades do not use ubiquitin itself and their substrates are not directed to the proteasome — they are mechanistically related but functionally independent. See [[atg7]].

## Therapeutic angles

### Proteasome inhibitors — cancer

Proteasome inhibition kills rapidly dividing cancer cells by:
1. Blocking degradation of pro-apoptotic proteins (BIM, NOXA) → cell death
2. Preventing NF-κB activation (IκBα stabilization)
3. Inducing ER stress via ERAD inhibition → unfolded protein response → apoptosis

Approved agents (all target β5/chymotrypsin-like site):

| Drug | Type | Target | Approved indication |
|---|---|---|---|
| Bortezomib (Velcade) | Reversible boronate | β5 + β1 | Multiple myeloma, mantle cell lymphoma |
| Carfilzomib (Kyprolis) | Irreversible epoxyketone | β5 + β2i | Relapsed/refractory multiple myeloma |
| Ixazomib (Ninlaro) | Reversible boronate (oral) | β5 | Multiple myeloma |
| Marizomib | Irreversible (pan-active) | β5 + β2 + β1 | Investigational (CNS, crosses BBB) |

Note: proteasome inhibitors *impair* proteostasis in non-cancer contexts — they are not aging interventions. They are included here because they confirm the UPS as a tractable drug target and illuminate structure-activity relationships.

### PROTACs — induced targeted protein degradation

Proteolysis-Targeting Chimeras (PROTACs) are heterobifunctional small molecules that recruit an E3 ligase to a protein of interest (POI), inducing POI ubiquitination and proteasomal degradation. Mechanism: one end binds the POI; linker; other end binds an E3 ligase. Unlike inhibitors, PROTACs are catalytic (the E3 is used repeatedly) and target proteins that lack a conventional active site [^vilchez2014].

Most advanced E3-recruiting warheads:
- **CRBN (Cereblon)** — recruited by thalidomide and its analogs (lenalidomide, pomalidomide); IMiD class; already approved as CRBN-modifying agents; forms basis of many PROTAC scaffolds
- **VHL (Von Hippel-Lindau)** — recruited by VHL ligands; used in BRD4, SMARCA2/4, and other PROTACs

Aging-relevant PROTAC: **DT2216** — VHL-recruiting BCL-xL degrader; shown to have senolytic activity (BCL-xL is a pro-survival dependency of senescent cells); reduces platelet toxicity relative to navitoclax (a BCL-xL inhibitor) because platelets lack VHL and cannot be degraded. #gap/needs-replication — senolytic efficacy in aged organisms not yet established in published human trials.

### Proteasome activators — aging-relevant (preclinical)

Small molecules and genetic approaches that increase 20S or 26S proteasome activity are under investigation as aging interventions. Oleuropein (olive polyphenol) and other natural compounds have been shown to activate the proteasome and extend lifespan in *C. elegans* models [^chondrogianni2015]. No human trial data. #gap/needs-human-replication

## Limitations and gaps

- **UPS flux assays in human aging tissue** are technically challenging — most human data comes from peripheral blood cells (lymphocytes, PBMCs) or skin fibroblasts. Activity changes in brain, muscle, and heart with normal aging are extrapolated from rodent data. #gap/needs-human-replication
- The **relative contributions of UPS vs. autophagy decline** to proteostatic failure in old age are not precisely quantified in vivo. #gap/no-mechanism
- **Tissue specificity** of age-related proteasome decline is not uniform: heart, brain, and muscle may decline differently than liver. Comprehensive human tissue atlas of proteasome activity across the lifespan is lacking. #gap/needs-replication
- **Whether increasing proteasome activity** above young-adult levels has beneficial hormetic effects vs. adverse consequences (e.g., excessive oncogene turnover, disrupted signaling kinetics) is unknown. #gap/dose-response-unclear
- The **RING vs. HECT vs. RBR E3 ligase count estimates** (~600, ~28, ~14) are approximate; the human ubiquitylome is still being characterized. #gap/unsourced — exact current count should be cross-checked against a current census review.

## Footnotes

[^hershko1998]: doi:10.1146/annurev.biochem.67.1.425 · review · Hershko A & Ciechanover A 1998 Annu Rev Biochem 67:425-479 · model: biochemistry · foundational Nobel review of the ubiquitin system; E1/E2/E3 cascade mechanism, 26S proteasome architecture, cellular substrates · **local PDF verified 2026-05-04** — confirms single E1 in 1998; α7β7β7α7 core; PGPH/trypsin-like/chymotrypsin-like activities; four E3 functional types (RING/RBR classification postdates this review)

[^glickman2002]: doi:10.1152/physrev.00027.2001 · review · Glickman MH & Ciechanover A 2002 Physiol Rev · model: biochemistry · comprehensive mechanistic coverage of UPS architecture + E1/E2/E3 cascade + proteasome structure · cited 4,100+ times · **not_oa — no local PDF; E3 sub-class counts (~600 RING, ~28 HECT, ~14 RBR) and several mechanism claims attributed to this source cannot be verified** #gap/no-fulltext-access

[^vilchez2014]: doi:10.1038/ncomms6659 · review · Vilchez D, Saez I & Dillin A 2014 Nat Commun · model: multi-organism · protein clearance mechanisms in aging and age-related disease; UPS and autophagy integration · cited 666 times · **download failed (bronze OA, no candidate URLs after filtering) — claims attributed solely to this source unverified** #gap/no-fulltext-access

[^saez2014]: doi:10.2174/138920291501140306113344 · review · Saez I & Vilchez D 2014 Curr Genomics 15:38-51 · model: multi-organism · mechanistic links between proteasome activity, aging, age-related diseases; documents activity decline with age in multiple tissues · cited 324 times · **local PDF verified 2026-05-04** — confirms 8-subunit Lid (Rpn3/5/6/7/8/9/11/12); bortezomib FDA approval 2003; proteasome decline in aged human fibroblasts, lymphocytes, brain, muscle

[^chondrogianni2015]: doi:10.1096/fj.14-252189 · in-vivo · Chondrogianni N et al. 2015 FASEB J · model: *C. elegans* · 20S proteasome activation extends lifespan + proteotoxicity resistance; establishes causal (not correlative) link · cited 167 times · **PDF download corrupted** (archive fetched wrong file — library conference presentation; see BUG-6 in FEATURE_REQUESTS.md) **— C. elegans lifespan/proteotoxicity claims unverified against primary PDF** #gap/no-fulltext-access

[^bonaldo2012]: doi:10.1242/dmm.010389 · review · Bonaldo P & Sandri M 2012 Dis Model Mech 6:25-39 · model: rodent + human biopsies · cellular and molecular mechanisms of muscle atrophy; atrogin-1 (FBXO32/MAFbx) and MuRF1 (TRIM63) as dominant UPS drivers of sarcomeric proteolysis during atrophy · **local PDF verified 2026-05-04** — confirms >650 E3 ligases in human genome; atrogin-1/MuRF1 induction by FoxO during denervation, cachexia, sarcopenia
