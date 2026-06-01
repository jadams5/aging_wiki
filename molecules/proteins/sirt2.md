---
type: protein
aliases: [SIRT2, SIR2L, SIR2L2, "NAD-dependent protein deacetylase sirtuin-2"]
uniprot: Q8IXJ6
ncbi-gene: 22933
hgnc: 10886
ensembl: ENSG00000068903
genage-id: null
mouse-ortholog: Sirt2
key-domains: [sirtuin-type-deacetylase]
key-ptms: [Ser368-phosphorylation-CDK2, Ser368-phosphorylation-CDK5, Ser372-phosphorylation, Lys-ubiquitination, Ala2-N-acetylation]
pathways: ["[[sirtuin]]", "[[cell-cycle-regulation]]"]
hallmarks: ["[[epigenetic-alterations]]", "[[genomic-instability]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 2
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: ["[[deregulated-nutrient-sensing]]"]
causes: []
known-interactors: ["[[foxo3]]", "[[p53]]", "[[nampt]]", "[[alpha-synuclein]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "North 2003, Vaquero 2006, Kim 2011, and Serrano/Vaquero 2013 verified against primary source PDFs. Outeiro 2007 verified against Crossref abstract only (full PDF unavailable — download failed both attempts; green OA URL returned 0 candidate URLs from archive); quantitative pharmacological claims (e.g., AGK2 concentration) not confirmable from abstract alone. Wang 2019 review unverifiable (closed-access, not_oa). UniProt Q8IXJ6 subcellular localization, domain boundaries, and PTMs independently re-verified via UniProt REST API. Open Targets Platform queried for ENSG00000068903 druggability. GenAge human database queried — SIRT2 confirmed absent."
---


# SIRT2 (Sirtuin 2)

The predominantly cytoplasmic mammalian sirtuin and the primary NAD+-dependent deacetylase of the interphase cytoskeleton. SIRT2 deacetylates α-tubulin at Lys40 to regulate microtubule dynamics during interphase, then translocates to chromatin during the G2/M transition where it acts as the mitotic deacetylase for histone H4K16 [^north2003] [^vaquero2006]. This dual localization — cytoplasm during G1/S, chromatin during mitosis — is biochemically distinctive among the seven mammalian sirtuins and determines SIRT2's functional repertoire. Functionally, SIRT2 occupies an unusual position in the sirtuin family: pharmacological **inhibition** (not activation) of SIRT2 is the pursued strategy for neurodegeneration, in contrast to the activation strategies pursued for SIRT1 and SIRT6.

**Naming note:** This page covers the SIRT2 protein. The family-level pathway page — covering all SIRT1–7 paralogs, NAD+ dependency, evolutionary conservation, and NAD+ precursor pharmacology — is at [[sirtuin]]. Refer there for family context; this page is SIRT2-specific.

## Identity

| Field | Value |
|---|---|
| UniProt | Q8IXJ6 (SIR2_HUMAN) |
| NCBI Gene | 22933 |
| HGNC symbol | SIRT2 |
| Ensembl | ENSG00000068903 |
| GenAge ID | null — no GenAge-human entry; Drosophila Sirt2 entry exists but with uncertain human relevance |
| Mouse ortholog | Sirt2 (Mus musculus) |
| Protein length | 389 amino acids |
| Molecular weight | ~43.5 kDa |

## Domain architecture

SIRT2 is the smallest of the seven mammalian sirtuins, consisting almost entirely of a single conserved **sirtuin-type deacetylase domain (residues 57–338; UniProt Q8IXJ6)**. Unlike SIRT1, which has large N- and C-terminal regulatory extensions that mediate STAC allosteric activation and substrate selectivity, SIRT2 has only a short N-terminal extension and a short C-terminal tail — accounting for its comparatively compact size (~43 kDa vs ~82 kDa for SIRT1). The catalytic domain contains the conserved NAD+-binding Rossmann fold, a zinc-binding motif, and residues constituting the acyl-lysine binding pocket.

**Nuclear export and localization signals:** SIRT2 contains a nuclear localization signal (NLS) and a nuclear export signal (NES), making it constitutively shuttling. At steady state it is predominantly cytoplasmic (exported via the CRM1/exportin pathway), but accumulates on chromatin during G2/M. #gap/unsourced — the precise boundaries of the NLS and NES in human SIRT2 are not definitively mapped in primary literature available to this seeder.

## Catalytic mechanism

Like all sirtuins, SIRT2 couples deacetylation to NAD+ hydrolysis:

**Acetyl-lysine + NAD+ → Deacetylated-lysine + O-acetyl-ADP-ribose + Nicotinamide**

One NAD+ molecule is consumed per catalytic cycle, directly linking SIRT2 activity to cellular NAD+ availability. SIRT2 also shows ADP-ribosyltransferase activity in vitro, though the physiological substrates of this secondary activity are not established in aging contexts. #gap/no-mechanism

Beyond deacetylation, SIRT2 has been reported to exhibit demyristoylase activity in vitro, though this is less well characterized than its deacetylase function and aging relevance is unknown. #gap/unsourced

## Key substrate interactions

### α-Tubulin (Lys40 deacetylation) — microtubule dynamics

The founding biochemical characterization of SIRT2 established it as a NAD+-dependent tubulin deacetylase: SIRT2 deacetylates α-tubulin specifically at Lys40, a mark located within the microtubule lumen associated with stable, long-lived microtubules [^north2003]. North and Verdin 2003 demonstrated that: (i) SIRT2 colocalizes with tubulin in human fibroblasts and is predominantly cytoplasmic by immunofluorescence and subcellular fractionation in 293T cells; (ii) GFP-SIRT2 overexpression in HeLa cells markedly reduced acetylated α-tubulin (Lys40) compared to untransfected cells; (iii) catalytically inactive mutants N168A and H187Y failed to deacetylate tubulin, confirming deacetylase-activity dependence; (iv) siRNA knockdown of SIRT2 caused tubulin hyperacetylation; (v) SIRT2 is the only one of the seven human SIRTs capable of deacetylating α-tubulin in vitro (SIRT1, 3, 5 deacetylate histone H4 but not tubulin); (vi) SIRT2 co-immunoprecipitates and colocalizes with HDAC6, the class II tubulin deacetylase; (vii) enzymatic kinetics show SIRT2 has ~60-fold preference for acetylated tubulin peptide over histone H3 peptide (kcat = 0.144 s−1, V/K = 894 μM−1s−1 for tubulin); (viii) the reaction requires NAD+ and is inhibited by nicotinamide but not TSA. This tubulin deacetylation activity is cytoplasm-specific and is the primary functional distinction from nuclear sirtuins.

The consequences of SIRT2-mediated tubulin deacetylation for aging biology are not well established. Hyperacetylated tubulin accumulates in some aged cells, and microtubule stability is altered in senescent cells, but whether SIRT2 activity is the upstream cause of these changes has not been shown. #gap/no-mechanism #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (human α-tubulin K40Ac is the established substrate; SIRT2 human protein biochemically characterized) |
| Phenotype conserved in humans? | unknown |
| Replicated in humans? | no |

### H4K16 deacetylation during mitosis — mitotic chromatin compaction

SIRT2 translocates from the cytoplasm to chromatin specifically at the G2/M transition and is the primary deacetylase for histone H4K16 acetylation (H4K16Ac) during mitosis [^vaquero2006]. Vaquero et al. 2006 demonstrated that: (i) SIRT2 shows strong in vitro preference for H4K16Ac over other histone substrates; (ii) global H4K16Ac decreases during the G2/M transition concomitant with SIRT2 chromatin localization; (iii) SIRT2 depletion by RNA interference elevated H4K16Ac at mitosis; (iv) the effect was NAD+-dependent and nicotinamide-sensitive.

This mitotic H4K16 deacetylation is mechanistically distinct from SIRT1's H4K16 deacetylation, which occurs in interphase heterochromatin. SIRT2 therefore acts as the **mitotic** H4K16 deacetylase while SIRT1 handles **interphase** H4K16 deacetylation — two temporally separated events with likely different downstream consequences for chromatin compaction and genome stability.

A subsequent study (Serrano and Vaquero 2013) extended this model by showing that SIRT2 regulates H4K20 methylation during mitosis through direct interaction with and deacetylation of **PR-Set7** (the H4K20me1 methyltransferase, also known as SET8/KMT5A) at **lysine K90** [^serrano2013]. SIRT2 deacetylation of PR-Set7-K90 promotes PR-Set7's chromatin localization and HMT activity, enabling establishment of H4K20me1 at the G2/M transition. H4K20me1 in turn serves as substrate for Suv4-20h enzymes that produce H4K20me2 and H4K20me3, linking SIRT2's mitotic deacetylation to the full histone methylation cascade required for heterochromatin structure, DNA repair, and genome stability. Sirt2-/- mice in this study (C57-BL6 strain) showed increased chromosomal aberrations and susceptibility to chemically induced tumorigenesis (DMBA/TPA skin model) but did not develop spontaneous tumors, in contrast to Kim 2011 mixed-lineage mice.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (H4K16Ac biology is conserved; SIRT2 mitotic localization documented in human cell lines) |
| Phenotype conserved in humans? | partial (somatic SIRT2 loss is observed in human tumors; but aging-context deacetylation timing in human tissue not measured) |
| Replicated in humans? | no |

### FoxO transcription factors — stress resistance

SIRT2 deacetylates FOXO3a and other FOXO family members in response to oxidative stress, an interaction also shared with SIRT1 and SIRT3. The functional consequences for FOXO3 transcriptional output (cell-cycle arrest, oxidative-stress resistance gene induction vs apoptosis) parallel those described for SIRT1 at the [[foxo3]] page, but the SIRT2-specific contribution is less thoroughly characterized. #gap/unsourced — a primary citation distinguishing SIRT2-specific from SIRT1-specific FOXO3 deacetylation consequences in aging contexts is needed.

## Regulation of SIRT2

**Cell-cycle regulation (Ser368 phosphorylation):**
SIRT2 is phosphorylated at Ser368 by CDK2 and CDK5 (UniProt Q8IXJ6; also recorded at Ser372 by UniProt), modulating its activity and localization. An additional phosphoserine is recorded at Ser23, Ser25, Ser27, Ser53, Ser100, and Ser207 by UniProt. Vaquero 2006 notes that the phosphorylated (upper) band of SIRT2 is the form that immunoprecipitates with PR-Set7 at mitosis, and that SIRT2 is phosphorylated chiefly during mitosis. This CDK-dependent regulation makes SIRT2 a cell-cycle-gated deacetylase — active on tubulin throughout interphase but redirected to chromatin substrates at mitotic entry. #gap/unsourced — the specific CDK1 vs CDK2 vs CDK5 contribution to the mitotic S368 phosphorylation and its functional consequence on deacetylase activity vs chromatin localization vs substrate selectivity is not fully resolved in a single primary citation.

**NAD+ availability:**
SIRT2 activity is stoichiometrically coupled to NAD+ as for all sirtuins. The age-related decline in cellular NAD+ (driven by CD38 upregulation, PARP hyperactivation, and NAMPT reduction — see [[sirtuin]] for full NAD+ landscape) functionally suppresses SIRT2 activity as it does SIRT1 and SIRT3. Whether SIRT2's cytoplasmic NAD+ pool declines in parallel with nuclear NAD+ with age has not been directly measured. #gap/needs-human-replication

**Protein level regulation:**
SIRT2 protein expression declines with age in some tissues including brain [^wang2019]. The mechanism of this age-associated decline has not been fully elucidated — it may reflect transcriptional, post-transcriptional, or proteasomal changes. #gap/no-mechanism

## Role in aging

### Tumor suppressor function — SIRT2 KO mice

SIRT2 knockout mice spontaneously develop mammary gland tumors and hepatocellular carcinomas (HCC), demonstrating tumor suppressor activity in vivo [^kim2011]. Kim et al. 2011 showed the mechanism operates through regulation of APC/C (anaphase-promoting complex/cyclosome) activity: SIRT2 deacetylates **CDH1** (APC/C coactivator, late-mitosis/G1 phase) and **CDC20** (APC/C coactivator, early mitosis), and their deacetylation by SIRT2 enhances their interaction with CDC27 (APC/C scaffold subunit), thereby activating APC/C-mediated ubiquitination and degradation of mitotic regulators including Aurora-A. SIRT2 loss causes increased Aurora-A protein stability (via impaired APC/C activity), centrosome amplification (~35% of Sirt2-/- MEFs aneuploid vs <5% WT at passage 2), and mitotic cell death. Gender-specific tumorigenesis: female Sirt2-/- mice develop mammary tumors starting at ~10 months, reaching ~60% cancer incidence by 24 months (n=26 Sirt2-/-, n=13 Sirt2+/-, n=22 WT); male Sirt2-/- mice develop HCC and other cancers (5 organ sites) starting at ~8 months, reaching ~60% cancer incidence by 20 months (n=19, n=10, n=20 respectively). This connects SIRT2's mitotic function to its tumor suppressor role — loss of SIRT2 impairs APC/C-mediated proteolysis of Aurora-A, creating conditions for centrosome amplification, aneuploidy, and subsequent tumorigenesis.

**Note on strain:** Kim 2011 used a **mixed-lineage mouse strain**. Serrano 2013, using C57-BL6 mice, found that Sirt2-/- mice in that strain did NOT develop spontaneous tumors, but did show increased susceptibility to DMBA/TPA-induced skin tumorigenesis. The discordance is attributed to C57-BL6's known high resistance to tumor development. #gap/needs-replication

SIRT2 expression is weakly expressed in several human malignancies and gliomas relative to normal tissue (per UniProt annotation), consistent with the mouse tumor suppressor phenotype. However, a direct causal role for SIRT2 loss in human tumor initiation has not been established by genetic or epidemiological evidence.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial (APC/C regulation is conserved; SIRT2 loss associated with human tumor types but mechanistic evidence is correlative) |
| Phenotype conserved in humans? | unknown |
| Replicated in humans? | no (tumor suppressor inference is from SIRT2 KO mice only) |

#gap/needs-human-replication — SIRT2 tumor suppressor phenotype demonstrated in mice (Kim 2011 mixed-lineage; Serrano 2013 C57-BL6 with chemical induction); human SIRT2 loss correlates with breast cancer and HCC but causal evidence lacking.
#gap/needs-replication — Kim 2011 spontaneous tumor phenotype did not replicate in C57-BL6 background (Serrano 2013); strain-background dependence unresolved.

### Neurodegeneration — the inhibition paradox

The key distinctive feature of SIRT2 in aging and disease pharmacology is that **SIRT2 inhibition** (not activation) has been pursued as a therapeutic strategy for neurodegeneration. Outeiro et al. 2007 identified pharmacological SIRT2 inhibitors and demonstrated that SIRT2 inhibition rescued α-synuclein-mediated toxicity in a cellular model of Parkinson's disease, modified inclusion morphology, and protected against dopaminergic cell death both in vitro and in a Drosophila model [^outeiro2007]. Genetic inhibition (siRNA) similarly rescued α-synuclein toxicity, confirming specificity. AGK2 is the selective SIRT2 inhibitor characterized in this paper (named in secondary literature; confirmed as from Outeiro 2007 laboratory by compound pedigree). The mechanistic basis was not fully established in this paper, but proposed to involve microtubule dynamics: SIRT2 inhibition increases α-tubulin acetylation, and acetylated microtubules may provide a more stable transport scaffold that is less toxic in the context of α-synuclein aggregation. Note: specific cell line names (e.g., SK-N-MC) and exact compound concentrations are not confirmable from the Crossref abstract alone — the full PDF is unavailable locally. #gap/no-fulltext-access

This stands in direct contrast to SIRT1 and SIRT6, where activation is the pursued strategy for aging and neurodegeneration. The reason for this functional inversion is incompletely understood and represents a major interpretive challenge for pan-sirtuin targeting strategies. See [[alpha-synuclein]] for the full Parkinson's disease context.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial (α-synuclein biology and SIRT2 expression in human dopaminergic neurons; but mechanistic link in humans not established) |
| Phenotype conserved in humans? | unknown |
| Replicated in humans? | no — all pharmacological rescue experiments in yeast, fly, and human cell lines only |

#gap/needs-human-replication — SIRT2 inhibitor neuroprotection in Parkinson's disease models has not been tested in human subjects.
#gap/contradictory-evidence — It is unresolved whether SIRT2 inhibition is neuroprotective through microtubule stabilization, α-synuclein clearance, or another mechanism; and whether it generalizes to non-α-synuclein neurodegenerative contexts (e.g., tauopathies). See [[tau]].

### Metabolic regulation — mixed and contested

SIRT2 has been proposed to regulate gluconeogenesis, adipogenesis, and metabolic gene programs through deacetylation of metabolic transcription factors and enzymes. However, the evidence is weaker and more contradictory than for the mitochondrial sirtuin SIRT3 or the nuclear sirtuin SIRT1 [^wang2019]. SIRT2 targets in the metabolic context include PEPCK1 (phosphoenolpyruvate carboxykinase, gluconeogenic enzyme) and G6PC (glucose-6-phosphatase) — substrates that overlap with SIRT1's metabolic portfolio. Whether SIRT2's cytoplasmic activity is additive or redundant with SIRT1's nuclear deacetylation of the same transcription factors (e.g., FOXO1, PGC-1α) has not been resolved. #gap/contradictory-evidence

### Age-associated expression changes

SIRT2 mRNA and protein levels decline with age in brain and some peripheral tissues in rodent models [^wang2019]. Whether this decline is primary (a driver of aging phenotypes) or secondary (a consequence of age-related metabolic deterioration, e.g., NAD+ decline at the translational level) has not been established in humans or in genetic epistasis experiments. The GenAge-human database does not include SIRT2 among the ~300 genes with experimental aging evidence in humans, reflecting the relatively weak direct evidence for SIRT2 as a human aging determinant compared to SIRT1 or SIRT6. #gap/no-mechanism

## Pharmacology

SIRT2 is one of the few sirtuins where inhibition, not activation, has been pharmacologically pursued:

- **AGK2** — the first selective SIRT2 inhibitor characterized; structurally a dihydroquinoxalinone; rescues α-synuclein toxicity in yeast and dopaminergic cell models at low micromolar concentrations [^outeiro2007]. Research tool only; no clinical development.
- **AK-7** — brain-penetrant SIRT2 inhibitor; studied in Huntington's disease models. No clinical stage.
- **SirReal2** — highly selective SIRT2 inhibitor (selectivity over SIRT1, SIRT3 reported >50-fold); co-crystal structure solved; structural basis for selectivity involves induced-fit binding to a selectivity pocket adjacent to the SIRT2 active site. Research tool only.
- **AGK2 / SirReal2 class**: Druggability tier 2 (high-quality probes exist; no FDA-approved SIRT2 modulator; no aging-specific clinical trial registered). This is consistent with CLAUDE.md's aging-context tier convention — the absence of a clinical drug for an aging indication places SIRT2 at tier 2 despite good probe chemistry.

Note: **selisistat (EX-527)** is a SIRT1 inhibitor, not SIRT2, and should not be conflated.

No SIRT2-activating compounds with clinical relevance have been described. Indirect SIRT2 activation through NAD+ precursors (NMN, NR) would be expected to raise SIRT2 activity as a consequence of raising the NAD+ pool, but the net effect of such activation on neurodegeneration risk vs tumor suppression remains uncharacterized.

## Pathway membership and cross-talk

| Pathway | Relationship |
|---|---|
| [[sirtuin]] | Family pathway — see for family-level context, NAD+ biology, and pharmacology |
| [[cell-cycle-regulation]] | SIRT2 is phosphorylated by CDK2/CDK5 at S368; SIRT2 deacetylates CDH1 and CDC20 to activate APC/C at mitosis (Kim 2011); also deacetylates PR-Set7 K90 to promote H4K20me1 deposition (Serrano 2013) |
| [[dna-damage-response]] | Via Serrano/Vaquero 2013: SIRT2 modulates H4K20 methylation through PR-Set7, linking mitotic deacetylation to DNA repair scaffold assembly |

## Key interactors (selected)

- [[foxo3]] — deacetylation target; stress-resistance transcriptional output
- [[p53]] — deacetylation target; parallels SIRT1-p53 interaction but SIRT2-specific contribution less characterized
- [[nampt]] — rate-limiting NAD+ biosynthesis enzyme upstream of SIRT2; NAMPT decline reduces NAD+ availability and functionally suppresses SIRT2
- [[alpha-synuclein]] — functional interaction in the neuroprotection context; SIRT2 inhibition reduces α-synuclein toxicity

## Limitations and gaps

- `#gap/needs-human-replication` — All mechanistic studies (tubulin deacetylation, H4K16 mitotic function, tumor suppressor activity, neuroprotection via AGK2) are in cell lines, yeast, fly, or mouse — no direct in-vivo human evidence.
- `#gap/needs-replication` — Kim 2011 SIRT2 KO tumor suppressor phenotype (spontaneous tumors in mixed-lineage mice) is NOT replicated in C57-BL6 mice (Serrano 2013); Serrano 2013 mice show only chemically-induced susceptibility. The spontaneous tumor phenotype is strain-background-dependent and should be considered a single-strain finding pending replication in a second mixed-lineage background.
- `#gap/contradictory-evidence` — SIRT2 inhibition is neuroprotective (Outeiro 2007) but SIRT2 is also a tumor suppressor (Kim 2011); whether pharmacological SIRT2 inhibition promotes tumorigenesis in parallel with neuroprotection is uncharacterized.
- `#gap/contradictory-evidence` — Metabolic role of SIRT2 is inconsistently reported; overlap with SIRT1 cytoplasmic substrates makes it difficult to isolate SIRT2-specific contributions.
- `#gap/no-mechanism` — Mechanism by which SIRT2 inhibition reduces α-synuclein toxicity is not established; multiple models proposed (microtubule acetylation, autophagy, direct protein interaction) but not resolved.
- `#gap/unsourced` — NLS/NES boundaries in human SIRT2; the precise functional consequence of S368 phosphorylation (CDK2 and CDK5, per UniProt; CDK1 assignment in pre-verification version was incorrect); FOXO3 deacetylation primary citation distinguishing SIRT2 from SIRT1 contribution; exact cell lines and AGK2 concentration data from Outeiro 2007 (full PDF unavailable).
- `#gap/needs-canonical-id` — GenAge-human entry for SIRT2: no entry exists as of 2026-05-07; Drosophila entry (GenAge-models) exists but human evidence threshold not met in the curated database.
- Druggability tier 2 reflects SIRT2's current position as a research-probe target without an aging-indication clinical drug; the paradox of inhibitor-direction vs tumor-suppressor loss means the druggability "direction" (inhibit vs activate) for aging is genuinely contested.

## Footnotes

[^north2003]: doi:10.1016/s1097-2765(03)00038-8 · [[studies/north-2003-sirt2-tubulin-deacetylase]] · in-vitro + in-vivo · model: human fibroblasts (GM03318), HeLa, 293T · SIRT2 identified as NAD+-dependent tubulin deacetylase; deacetylates α-tubulin Lys40 in vitro and in vivo; siRNA knockdown causes tubulin hyperacetylation; catalytic dead mutants N168A and H187Y abolish tubulin deacetylation; SIRT2 is the only SIRT1–7 capable of tubulin deacetylation; ~60-fold kinetic preference for tubulin peptide over H3 (kcat 0.144 s−1, V/K 894 μM−1s−1); co-immunoprecipitates with HDAC6 · 1512 citations · local: downloaded (bronze OA, via Cell Press camoufox)

[^vaquero2006]: doi:10.1101/gad.1412706 · [[studies/vaquero-2006-sirt2-h4k16-mitosis]] · in-vitro + in-vivo · model: human cell lines (HeLa, 293/293F); mouse MEFs from SirT1-KO and SirT2-KO mice · SIRT2 shows strong NAD+-dependent preference for H4K16Ac in vitro (completely deacetylates H4K16Ac at lowest enzyme concentration; H3K9Ac and H4K8Ac only at higher concentrations and not in vivo); global H4K16Ac drops at G2/M transition coincident with SIRT2 chromatin localization; RNAi depletion elevates H4K16Ac in 293 cells; SirT2-KO MEFs show higher H4K16Ac in mitosis (SirT1-KO MEFs do not); SirT2 associates with chromatin at early prophase and dissociates by metaphase; GFP-SirT2 live imaging shows cytoplasm-to-nucleus transition in <15 min at G2/M · 652 citations · local: downloaded (diamond OA, via Europe PMC PMC1472900)

[^kim2011]: doi:10.1016/j.ccr.2011.09.004 · [[studies/kim-2011-sirt2-tumor-suppressor-apc-c]] · in-vivo + in-vitro · model: Sirt2 KO mice (mixed-lineage strain); HeLa, 293T, HepG2 human cell lines · SIRT2 KO mice develop spontaneous mammary tumors (females, ~60% by 24 months; n=26 KO, 13 het, 22 WT) and HCC primarily (males, ~60% by 20 months; n=19 KO, 10 het, 20 WT); SIRT2 deacetylates CDH1 and CDC20 (APC/C coactivators) to promote their interaction with CDC27 and activate APC/C; SIRT2 loss stabilizes Aurora-A (via impaired APC/C-mediated ubiquitination); ~35% of Sirt2-/- MEFs aneuploid (vs <5% WT); centrosome amplification; mitotic cell death · 528 citations · local: downloaded (bronze OA, via Cell Press camoufox)

[^outeiro2007]: doi:10.1126/science.1143780 · [[studies/outeiro-2007-sirt2-alpha-synuclein-parkinson]] · in-vivo + in-vitro · model: yeast α-synuclein model; human dopaminergic cells; Drosophila Parkinson's model · SIRT2 inhibition rescued α-synuclein toxicity and modified inclusion morphology in a cellular model of Parkinson's disease; genetic inhibition (siRNA) similarly rescued α-synuclein toxicity; inhibitors protected against dopaminergic cell death in vitro and in a Drosophila model · 1038 citations · local: download failed (green OA per DOI lookup, but 0 candidate URLs retrieved; abstract verified via Crossref; quantitative pharmacological claims not confirmed from full text) #gap/no-fulltext-access

[^serrano2013]: doi:10.1101/gad.211342.112 · [[studies/serrano-2013-sirt2-h4k20-genome-stability]] · in-vivo + in-vitro · model: Sirt2 KO mice (C57-BL6 strain); MEFs; HeLa cells · SIRT2 directly interacts with and deacetylates PR-Set7 at K90, promoting PR-Set7 chromatin localization and HMT activity; Sirt2-/- cells show H4K16 hyperacetylation + reduced H4K20me1 during mitosis; loss of H4K20me1 cascades to reduce H4K20me2 and H4K20me3 across all cell cycle phases; Sirt2-/- mice develop higher chromosomal aberrations, DNA damage (comet assay), and polyploidy; susceptible to DMBA/TPA-induced skin tumorigenesis; C57-BL6 mice did NOT develop spontaneous tumors (cf. Kim 2011 mixed-lineage) · 275 citations · local: downloaded (diamond OA, via UAB institutional repository)

[^wang2019]: doi:10.1016/j.arr.2019.100961 · [[studies/wang-2019-sirt2-review-roles-disease]] · review · model: synthesis of preclinical and clinical literature · comprehensive review of SIRT2 roles in cell cycle, metabolism, neurodegeneration, and cancer; covers contested evidence for metabolic function; notes age-related expression decline in brain · 263 citations · local: not_oa (closed-access; confirmed by a local paper archive) — claims derived from this review are unverified against full text #gap/no-fulltext-access
