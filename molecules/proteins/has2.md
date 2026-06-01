---
type: protein
aliases: [HAS-2, hyaluronan synthase 2, hyaluronate synthase 2, HA synthase 2]
uniprot: Q92819
ncbi-gene: 3037
hgnc: 4819
ensembl: ENSG00000170961
omim: 601636
mouse-ortholog: Has2 (UniProt P70312; ENSMUSG00000056752)
genage-id: null   # not in GenAge human curated set as of 2026-05-12
pathways: ["[[hyaluronan-biosynthesis]]"]
hallmarks: ["[[cellular-senescence]]", "[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
sens-categories: []
druggability-tier: 3   # Open Targets: no approved SM/AB/PR drug; antibody modality has high-confidence membrane localization (UniProt loc high conf, TMHMM signal), placing it at tier 3 (predicted druggable). No aging-validated clinical probe exists. Therapeutic interest is augmentation, not inhibition. See Druggability section.
gtex-aging-correlation: null   # not yet checked; #gap/needs-tissue-expression-check
mr-causal-evidence: not-tested   # no MR study published on HAS2 and aging outcomes as of 2026-05-12
caused-by: []
causes: ["[[hyaluronic-acid]]"]
verified: true
verified-date: 2026-05-12
verified-by: claude
verified-scope: "UniProt Q92819 (552 aa, 7-TM, Mg²⁺, PTM sites Ser-221/Thr-110/Thr-328/Lys-190), HGNC 4819 (locus 8q24.13), NCBI Gene 3037, and mouse ortholog UniProt P70312 re-confirmed against canonical databases. Tian 2013 main-text verified against local PDF (doi:10.1038/nature12234): Asn→Ser substitution positions NOT stated in main text — located only in cytoplasmic loop/active-site region per main text; exact residue numbers require supplementary sequence alignment (not locally available); gap tag updated accordingly. Zhang 2023 quantitative claims (n=84/91, +4.4%/+12.2% lifespan, 57% vs 70% cancer, n=9 epigenetic clock, mouse Has2 sufficiency) verified against PMC10666664. del Marmol 2021 ~2.5 MDa NMR HA maximum and Alcian Blue critique confirmed against local PDF. Camenisch 2000 (doi:10.1172/jci10272, PMID 10930438) Has2-null lethality stage verified via PubMed abstract: E9.5–10 (not E9.5–10.5); cardiac and vascular defects confirmed; correct PMID added. Literature-checked-through refreshed."
literature-checked-through: 2026-05-12
---

# HAS2 (hyaluronan synthase 2)

HAS2 is a plasma-membrane-bound glycosyltransferase and the dominant mammalian enzyme for producing high-molecular-weight hyaluronan (HMW-HA, ≥1 MDa). It synthesizes hyaluronan by alternating addition of UDP-GlcNAc and UDP-GlcUA monomers at the cytoplasmic face of the membrane, extruding the nascent polymer chain outward through the plasma membrane as it grows. Of the three mammalian HAS isoforms — HAS1, HAS2, HAS3 — only HAS2 loss is embryonic-lethal: Has2-null mice die during midgestation (E9.5–10) with complete absence of HA, severe cardiac and vascular abnormalities, and failure of cardiac endothelial-to-mesenchyme transformation [^camenisch2000]. HAS2 came to prominence in aging biology through two landmark papers from the Gorbunova/Seluanov labs: Tian et al. 2013 (Nature), which identified NMR HAS2 as a driver of ultra-HMW-HA production and cancer resistance in naked mole rats [^tian2013], and Zhang et al. 2023 (Nature), which showed that expression of the nmrHas2 transgene in mice extends median lifespan, reduces cancer incidence, suppresses multi-tissue inflammation, and improves gut barrier integrity [^zhang2023] — establishing that the longevity mechanism evolved in NMR can be transferred to another mammalian species.

## Identity

| Field | Value |
|---|---|
| UniProt (human) | Q92819 (HAS2_HUMAN) |
| UniProt (mouse) | P70312 |
| UniProt (NMR) | See Tian 2013 supplementary; no standalone Swiss-Prot entry as of 2026-05-12 #gap/needs-canonical-id |
| NCBI Gene | 3037 |
| HGNC | 4819 |
| Ensembl | ENSG00000170961 |
| OMIM | 601636 |
| Mouse Ensembl | ENSMUSG00000056752 |
| RefSeq | NM_005328 |
| Chromosomal location | 8q24.13 |
| Protein length | 552 amino acids (human canonical isoform) |

## Enzymology

HAS2 belongs to Glycosyltransferase Family 2 (GT2) and contains seven transmembrane helices. The enzyme operates at the cytoplasmic face of the plasma membrane and catalyzes two sequential glycosylation reactions, alternately adding:

1. UDP-N-acetyl-α-D-glucosamine (UDP-GlcNAc) → GlcNAc-β(1→4)
2. UDP-α-D-glucuronate (UDP-GlcUA) → GlcUA-β(1→3)

Mg²⁺ is required as a cofactor. The nascent HA chain is translocated through the plasma membrane as it elongates, with the reducing end at the enzyme and the non-reducing end in the extracellular space. Chain processivity — how many cycles the enzyme completes without releasing the substrate — governs final HA molecular weight. HAS2 is the dominant isoform for producing high-MW chains; the mechanistic basis relates to its intrinsic processivity rather than substrate affinity per se [^vigetti2013].

HAS2 forms homodimers and heterodimers with HAS1 and HAS3, and dimerization promotes enzymatic activity (UniProt Q92819). It travels from the ER through the Golgi to the plasma membrane, with this trafficking regulated by phosphorylation.

## Three HAS isoforms — comparative MW output

| Isoform | Predominant HA MW | Embryonic requirement | Notes |
|---|---|---|---|
| HAS1 | Low-to-intermediate | Not lethal when KO alone | Partially redundant with HAS2 |
| **HAS2** | **High (≥1 MDa; dominant developmental form)** | **Yes — null is lethal at E9.5–10** | Only isoform essential for embryogenesis |
| HAS3 | Low (~100 kDa – 1 MDa) | Not lethal when KO alone | Often upregulated in cancer |

HAS2 is the only isoform whose loss is embryonic-lethal, required for HA production during cardiac morphogenesis and epithelial-to-mesenchyme transformation [^camenisch2000].

## NMR HAS2 — species-specific features and the HMW-HA story

### Tian 2013 — original NMR-HAS2 findings

Tian et al. 2013 reported that naked mole-rat (NMR; *Heterocephalus glaber*) fibroblasts produce HA "over five times larger" than human or mouse HA, attributing this to both decreased hyaluronidase activity and a unique sequence in NMR HAS2 [^tian2013]. The NMR HAS2 protein carries two Asn→Ser substitutions — two asparagines that are 100% conserved among all other mammals are replaced with serines, a change absent from all other mammalian HAS2 genes deposited in GenBank. Per Tian 2013 main text, these substitutions are located in "the cytoplasmic loop containing the enzyme's active site." **Exact residue positions are not stated in the Tian 2013 main text; they would be resolvable from the supplementary sequence alignment (Fig. 1d and supplementary data), which was not available for local verification.** #gap/needs-verification — exact Asn→Ser residue numbers require supplementary alignment or direct NMR HAS2 sequence inspection.

The proposed mechanism: the Asn→Ser substitutions increase enzyme processivity, producing ultra-HMW-HA (reported as 6–12 MDa by Tian 2013 using Alcian Blue / pulse-field gel electrophoresis). HAS2 knockdown or HYAL2 overexpression in NMR fibroblasts rendered them susceptible to malignant transformation and tumor formation in mice [^tian2013]. This established HMW-HA as a cell-autonomous cancer-resistance mechanism downstream of HAS2 activity.

### del Marmol 2021 — MW reanalysis (important caveat)

del Marmol et al. 2021 (*Sci. Reports*) used HA-specific size-exclusion chromatography combined with HA binding protein (HABP) staining and zymography to re-examine NMR HA [^delmarmol2021]. Their findings differed substantively from Tian 2013:

- NMR HA maximum MW was ~2.5 MDa — above human/mouse but well below the 6–12 MDa originally reported
- They found no significant presence of HA ≥3 MDa in NMR tissues or fibroblast supernatant (cultured under physiological conditions: 32.5°C, 5% O2); agarose gel confirmed absence of HA >1.3 MDa in NMR skin
- NMR did have greater HA *abundance* and higher MW than guinea pig and mouse controls
- RNAseq confirmed altered HA metabolism gene expression in NMR vs comparators

The del Marmol discordance with Tian 2013 likely reflects methodological differences: Alcian Blue / pulse-field gel (Tian 2013) is sensitive to HA aggregation artifacts at high concentrations, whereas SEC with HABP is more accurate for sizing [^delmarmol2021]. #gap/contradictory-evidence

**Critical interpretive note:** The MW discordance does not invalidate the core biology — both studies agree that NMR HA is higher MW and more abundant than comparator species. The discordance is about whether NMR HA is "extreme" (6–12 MDa) or merely "elevated" (~2.5 MDa). The functional sufficiency question is resolved by Zhang 2023 (see below).

### Zhang 2023 — HAS2 abundance rather than NMR-specific enzyme architecture is sufficient

Zhang et al. 2023 (Nature) generated two lines of transgenic mice: one expressing nmrHas2 (NMR-specific sequence) and a control expressing mouse Has2, both under the same CAG promoter with tamoxifen-inducible Cre-mediated activation (R26-CreERT2 × pCALNL-GFP-nmrHas2), activated at 3 months of age [^zhang2023]. The key finding: **mouse Has2 overexpression recapitulated the health and longevity benefits** — the NMR-specific protein sequence was not required. This reframes the Tian 2013 story: what matters is **HA abundance relative to endogenous hyaluronidase activity**, not the specific enzymatic architecture of NMR HAS2. #gap/contradictory-evidence (partial reframing of Tian 2013 NMR-protein-uniqueness narrative)

## Zhang 2023 transgenic mouse — aging outcomes (LANDMARK)

Zhang et al. 2023 is a landmark study demonstrating that increased HAS2 expression confers multi-domain healthspan and lifespan benefits in mice.

**Study design:** Tamoxifen-inducible nmrHas2 transgene (CAG promoter) activated at 3 months (young adult). Both sexes. Survival cohort: n=84 nmrHas2, n=91 creER controls. n=9 per group for epigenetic age analysis (24-month-old livers). Mouse-Has2 control arm confirms HA abundance as sufficient [^zhang2023].

**Outcomes:**

| Outcome | nmrHas2 mice | Controls | Notes |
|---|---|---|---|
| Median lifespan | +4.4% | — | Females +9% median; males +16% maximum |
| Maximum lifespan | +12.2% | — | vs creER controls |
| Spontaneous cancer mortality (all ages) | 57% | 70% | p significant |
| Cancer mortality (mice >27 months) | 49% | 83% | Older-cohort enrichment |
| DMBA/TPA papillomas | Reduced | — | Induced cancer model, both sexes |
| Epigenetic age (HorvathMammalMethylChip40) | ~−0.2 yr age acceleration | — | n=9/group; interpret cautiously (small n) |
| Multi-tissue inflammation | Broadly suppressed | — | IL-12p40, MIP1α/β, CCL7 significantly reduced in old females |
| Gut barrier integrity | Preserved with aging | — | Microbiome → longevity taxa |

**Transcriptome signature:** nmrHas2 mice shifted toward a longer-lived species signature, with the most prominent effect being **attenuation of inflammation across multiple tissues** [^zhang2023].

**Mechanisms proposed:** (1) direct immunomodulatory effect of HMW-HA on immune cells → M2-like macrophage polarization; (2) protection from oxidative stress; (3) improved gut barrier function via HA component of intestinal mucus layer. See [[gut-barrier]] and [[chronic-inflammation]].

**Translation note:** Mouse Has2 overexpression is sufficient. This shifts the therapeutic framing toward HA *abundance*-boosting strategies (HAS2 upregulation / hyaluronidase inhibition / exogenous HMW-HA) rather than NMR-specific protein engineering. #gap/needs-human-replication

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | HAS2/HA biology is conserved; human HAS2 structure essentially identical to mouse |
| Phenotype conserved in humans? | partial | Elevated serum HA correlates with inflammation and fibrotic disease in humans, but the protective HMW-HA → cancer/lifespan axis has not been tested prospectively |
| Replicated in humans? | no | No human clinical evidence; mouse transgenic study only |

#gap/needs-human-replication

## Regulation of HAS2

### Transcriptional

HAS2 transcription is induced by multiple aging-relevant signals:

- **TGF-β/SMAD** — TGF-β1 upregulates both HAS1 and HAS2; for HAS2, the mechanism involves SMAD signaling but the specific SMAD partners are not fully characterized (HAS1 uses SMAD3/Sp3) [^chen2012]. NF-κB activation also induces HAS2 transcription in response to IL-1β [^jones2001].
- **Hypoxia/HIF** — HIF1α transcriptionally activates HAS2 in hypoxic conditions; relevant to tumor microenvironment and wound healing. #gap/unsourced — cite needed for HIF/HAS2 direct promoter binding.
- **Mechanical stretch** — HAS2 is induced by cyclic mechanical stress in cardiac and vascular cells; relevant to the cardiac-jelly developmental function. #gap/unsourced

### Post-translational

HAS2 activity and stability are tightly regulated by nutrient and stress signaling through PTMs — with direct relevance to aging pathway crosstalk [^vigetti2013] [^vigetti2014] [^caon2020]:

| PTM | Site | Effect | Upstream regulator | Aging relevance |
|---|---|---|---|---|
| O-GlcNAcylation | Ser-221 | Stabilizes HAS2 membrane localization; increases HA production | Nutrient sensing (hexosamine pathway; UDP-GlcNAc flux) | mTORC1/nutrient sensing; O-GlcNAc decreases with age in some tissues |
| Phosphorylation | Thr-110 | Required for ER-to-Golgi transport; AMPK-mediated | AMPK (energy stress) | AMPK activation suppresses HAS2 → HA ↓; counterintuitive given AMPK's longevity associations |
| Phosphorylation | Thr-328 | Essential for catalytic activity | Kinase not fully characterized | |
| Ubiquitination | Lys-190 | Required for activity and oligomerization; reversed by USP4/USP17 | Proteasomal / deubiquitinase system | |

**Aging-context note:** The AMPK→Thr-110 phosphorylation axis means that AMPK activation (by caloric restriction, exercise, metformin, AICAR) *suppresses* HAS2 activity. This is counterintuitive given that AMPK activation is associated with longevity. It suggests HAS2 sits at an intersection of nutrient-sensing crosstalk where the HAS2-augmentation strategy (Zhang 2023) may partially oppose AMPK-pathway longevity interventions. This interaction is unresolved in the literature. #gap/no-mechanism

## Druggability (aging context)

Open Targets Platform query (ENSG00000170961, 2026-05-12):

- **Small molecule (SM):** No approved drug, no advanced clinical, no Phase 1 clinical. No high-quality ligand or pocket identified. HAS2 is not a Druggable Family member in the SM context. → **SM tier 4 (undruggable by current criteria)**
- **Antibody (AB):** No approved AB drug. High-confidence UniProt membrane localization and TMHMM transmembrane signal. Signal peptide / TM topology indicates antibody-accessible epitopes are unlikely (7-pass TM protein; extracellular loops are short). → **AB tier 3 (accessible localization but no clinical probe)**
- **PROTAC/degrader (PR):** No clinical degrader. Ubiquitination at Lys-190 is documented (USP4/USP17 deubiquitinate) → **PR tier 3 (ubiquitination biology documented; no degrader probe)**

**Aging-context tier assignment: tier 3.** No clinical drug exists for any aging indication engaging HAS2. The therapeutic interest is *augmentation* of HAS2 activity / HA abundance, not inhibition — which inverts the standard druggability framing:

- **4-methylumbelliferone (4-MU)** — depletes cytoplasmic UDP-GlcUA, the HAS2 substrate → HA synthesis inhibitor; research tool; not HAS2-selective; used to test HA-dependence in model systems. Not an aging-relevant therapeutic.
- **AAV-HAS2 gene therapy** — the obvious augmentation strategy, suggested by Zhang 2023. No clinical trial as of 2026-05-12. #gap/needs-human-replication
- **Exogenous HMW-HA** (oral / IV supplementation) — partially addresses HA abundance; bioavailability and tissue distribution are limiting factors; does not recapitulate intracellular HAS2 overexpression. #gap/dose-response-unclear

## Aging-relevant hallmarks and phenotypes

### Cellular senescence

HMW-HA produced by HAS2 interacts with CD44 at the cell surface and, in NMR fibroblasts, activates the NF2 (merlin) tumor suppressor, which contributes to early contact inhibition of proliferation [^tian2013]. This early contact inhibition (which NMR cells display at lower densities than mouse/human cells) is correlated with reduced susceptibility to transformation. Note: the precise CD44→NF2→p16^INK4a signaling chain proposed in Tian 2013 has not been independently validated by a dedicated mechanistic study — the pathway is plausible but partially inferred. #gap/needs-replication → [[cellular-senescence]]

### Chronic inflammation

HMW-HA (the HAS2 product) and LMW-HA fragments (generated by hyaluronidases from HMW-HA) have **opposite effects on inflammation**:

- **HMW-HA (≥1 MDa)** — suppresses NF-κB activation; promotes anti-inflammatory macrophage polarization (M2-like); immunomodulatory. Zhang 2023 multi-tissue transcriptomics showed broad inflammation suppression as the dominant phenotype in nmrHas2 mice [^zhang2023].
- **LMW-HA (<500 kDa, oligomers)** — pro-inflammatory; activates TLR2 and TLR4; drives SASP-like inflammatory signaling. Hyaluronidase activity (HYAL1/HYAL2) generates LMW fragments from the HMW scaffold. With aging, hyaluronidase activity tends to increase while HAS2 expression may decline in some tissues — net effect is a shift toward LMW-HA → [[chronic-inflammation]].

This MW-dependent directionality means that HAS2's anti-inflammatory role depends on maintaining HMW output *and* limiting degradation. Strategies that boost HAS2 without addressing hyaluronidase activity may have attenuated benefit.

### Gut barrier integrity

HA is a structural component of the intestinal mucus layer and supports epithelial integrity. Zhang 2023 reported that nmrHas2 mice show preserved gut barrier function during aging, with a microbiome shift toward longevity-associated taxa [^zhang2023]. See [[gut-barrier]] and [[dysbiosis]].

### Altered intercellular communication

HMW-HA acts as a paracrine and juxtacrine signal: secreted HMW-HA in the pericellular coat is sensed by adjacent cells via CD44 and RHAMM receptors, modulating proliferation, migration, and immune crosstalk [^tian2013]. This classifies HAS2/HA as mediators of the [[altered-intercellular-communication]] hallmark — in the aging-context, declining HMW-HA disrupts normal pericellular signaling fidelity.

## See also

- [[hyaluronic-acid]] — the product; MW-dependent biology, receptor interactions, tissue distribution
- [[cd44]] — primary HA receptor; CD44-NF2 signaling in contact inhibition
- [[heterocephalus-glaber]] — naked mole rat; NMR cancer resistance and longevity mechanisms
- [[studies/zhang-2023-nmrhas2-mouse-healthspan]] — primary study page (to be created)
- [[studies/tian-2013-nmr-hmw-ha-cancer]] — primary study page (to be created)
- [[chronic-inflammation]] — HMW-HA anti-inflammatory mechanism
- [[cellular-senescence]] — HMW-HA contact inhibition → p16 pathway
- [[gut-barrier]] — HA mucus layer / gut aging
- [[dysbiosis]] — microbiome shifts in nmrHas2 mice
- [[hyaluronan-biosynthesis]] — pathway page (implicit stub — propagation needed)
- [[cancer-aging-tradeoffs]] — NMR cancer resistance as an evolved longevity mechanism

## Footnotes

[^camenisch2000]: doi:10.1172/JCI10272 · PMID 10930438 · Camenisch TD et al. · *J Clin Invest* 2000 · in-vivo (mouse, Has2-null KO) · Has2(-/-) embryos lack HA, exhibit severe cardiac and vascular abnormalities, die during midgestation (E9.5–10); cardiac endothelial-to-mesenchyme transformation absent in heart explants; rescued by exogenous HA or activated Ras · n=litter-based (abstract verified; full PDF pending in archive)
[^tian2013]: [[studies/tian-2013-nmr-hmw-ha-cancer]] · doi:10.1038/nature12234 · Tian X et al. · *Nature* 2013 · in-vitro + in-vivo (NMR fibroblasts, xenograft in NIH III nude mice) · cells from ≥3 NMR, 3 mice, 3 guinea pigs; 8 mid-gestation embryos (embryonic NMR fibroblasts) · NMR HA MW 6–12 MDa vs mouse/guinea pig 0.5–3 MDa by pulse-field gel; NMR HAS2 overexpressed vs mouse/human; two Asn→Ser substitutions in active-site cytoplasmic loop (exact positions not stated in main text); HAS2 KD + HYAL2 OE renders NMR cells tumorigenic; CD44→NF2→p16^INK4a pathway
[^zhang2023]: [[studies/zhang-2023-nmrhas2-mouse-healthspan]] · doi:10.1038/s41586-023-06463-0 · Zhang Z et al. · *Nature* 2023 · in-vivo (mouse, nmrHas2 transgenic) · n=84 nmrHas2 / n=91 creER controls (survival); n=9/group (epigenetic clock, 24-mo livers) · +4.4% median lifespan; +12.2% max lifespan; cancer 57% vs 70%; inflammation ↓ multi-tissue; gut barrier preserved; mouse Has2 overexpression sufficient · PMC full-text: PMC10666664 (PMID 37612507)
[^delmarmol2021]: doi:10.1038/s41598-021-86967-9 · del Marmol D et al. · *Sci Reports* 2021 · in-vivo/ex-vivo + in-vitro (NMR, guinea pig, mouse tissues and serum; NMR fibroblasts cultured at 32.5°C, 5% O2; SEC + HABP staining + zymography + RNAseq) · n=5 NMR, 4–5 GP, 4–8 mouse per tissue · NMR HA peak MW ~2.5 MDa (lymph nodes, skin); no ultra-HMW-HA ≥3 MDa detected in tissues or fibroblast supernatant; NMR HA still higher abundance and MW than GP/mouse (except kidney medulla); HYAL1 lower expression/activity in NMR lymph nodes; Alcian Blue critique confirmed (stains non-HA components)
[^vigetti2013]: doi:10.1016/j.matbio.2013.10.002 · Vigetti D et al. · *Matrix Biology* 2013 · review · AMPK Thr-110 phosphorylation inhibits HAS2; O-GlcNAcylation Ser-221 stabilizes HAS2 membrane localization · archive pending
[^vigetti2014]: doi:10.1016/B978-0-12-800092-2.00004-6 · Vigetti D et al. · *Adv Cancer Res* 2014 · review · HAS2 PTM regulation in cancer; AMPK / O-GlcNAc crosstalk · closed access / not_oa in archive
[^caon2020]: doi:10.1369/0022155420929772 · Caon I et al. · *J Histochem Cytochem* 2020 · review · cell energy metabolism and HA synthesis; SIRT1 suppresses HAS2 expression; AMPK and O-GlcNAcylation regulation · archive pending
[^chen2012]: doi:10.1016/j.matbio.2012.10.002 · Chen L et al. · *Matrix Biol* 2012 · in-vitro · TGF-β1 upregulates HAS1 via SMAD3/Sp3; HAS2 co-upregulated but detailed mechanism not characterized in this paper
[^jones2001]: doi:10.1046/j.1523-1755.2001.0590051739.x · Jones S, Phillips AO · *Kidney Int* 2001 · in-vitro (human proximal tubular cells) · IL-1β and glucose-induced HAS2 upregulation via NF-κB; context: diabetic nephropathy
