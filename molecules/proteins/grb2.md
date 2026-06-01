---
type: protein
aliases: [GRB2, growth factor receptor-bound protein 2, ASH, Adapter protein GRB2, SH2/SH3 adapter GRB2]
uniprot: P62993
ncbi-gene: 2885
hgnc: 4566
genage-id: null
mouse-ortholog: Grb2
ensembl: ENSG00000177885
druggability-tier: 2  # SM:High-Quality Ligand + High-Quality Pocket (Open Targets, GRB2)
caused-by: []
causes: []
key-domains: [SH3-N, SH2, SH3-C]
key-ptms: [Tyr209-phosphorylation, Thr211-phosphorylation, Lys109-ubiquitination]
pathways: ["[[insulin-igf1]]", "[[pi3k-akt-pathway]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
sens-categories: []
known-interactors: ["[[sos1]]", "[[insr]]", "[[igf1r]]", "[[irs-1]]", "[[gab1]]", "[[cbl]]", "[[egfr]]", "[[shc]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Cheng 1998 and Proctor 2007 primary-source PDFs verified in full. Lowenstein 1992 download failed (bronze OA, no PMC mirror); Pawson 1995 and Buday 1993 are not_oa — those three sources unverifiable locally. Domain residue ranges, SH2 YxN specificity, and sem-5/Drk orthology claims sourced to unverifiable papers; canonical UniProt identity fields (P62993, 217 aa, domain positions) not independently re-checked against UniProt."
---

# GRB2 (Growth factor Receptor-Bound protein 2)

GRB2 is the canonical **non-enzymatic adapter protein** that links activated receptor tyrosine kinases (RTKs) to the [[ras-mapk|RAS–MAPK]] proliferation/growth axis. Its "SH3–SH2–SH3" modular architecture makes it the prototypical member of the adaptor protein class. It is constitutively expressed, lacks catalytic activity, and functions entirely by bridging phosphotyrosine-containing receptors (or docking proteins) to proline-rich effectors — most critically, the guanine-nucleotide exchange factor SOS, which activates RAS at the plasma membrane.

## Identity

- **UniProt:** P62993 (GRB2_HUMAN)
- **NCBI Gene:** 2885
- **HGNC symbol:** GRB2
- **Aliases:** ASH ("abundant Src homology" — name used at original cloning); Drk in *Drosophila*; Sem-5 in *C. elegans*
- **Length:** 217 amino acids (canonical human isoform)
- **Mouse ortholog:** Grb2 (highly conserved; near-identical functional properties)

## Domain architecture

GRB2 has a characteristic tripartite "SH3–SH2–SH3" layout with no enzymatic domain [^lowenstein1992]:

| Domain | Residues (human) | Binding specificity | Key partners |
|---|---|---|---|
| SH3 (N-terminal) | 1–58 | Proline-rich motifs (PxxP) | SOS1, SOS2, CBL, GAB1 |
| SH2 | 60–152 | Phosphotyrosine (pY) in **YxN** context | EGFR pY1068, INSR pY1158/60/63, IGF1R, IRS-1 |
| SH3 (C-terminal) | 156–215 | Proline-rich motifs (PxxP) | SOS1, SOS2, CBL |

The SH2 domain preferentially binds the **YxN** phosphotyrosine motif, which is particularly enriched in RTK autophosphorylation sites and on IRS adapter proteins [^pawson1995]. Both SH3 domains can simultaneously engage proline-rich segments of SOS, anchoring SOS near the plasma membrane and promoting RAS nucleotide exchange.

## Function: bridging RTKs to RAS–MAPK

The canonical GRB2 signaling cycle [^lowenstein1992] [^buday1993]:

1. **RTK activation** — ligand binding triggers receptor autophosphorylation (e.g., EGFR Tyr1068, INSR Tyr1158/1160/1163, IGF1R activation loop)
2. **GRB2 recruitment** — SH2 domain engages the phosphotyrosine motif on the receptor directly, OR on IRS-1/IRS-2 docking scaffold proteins after they bind the receptor
3. **SOS recruitment** — both SH3 domains bind proline-rich regions of SOS (Son of Sevenless), a RAS guanine nucleotide exchange factor; GRB2 brings the cytosolic SOS pool to the plasma membrane
4. **RAS activation** — membrane-localized SOS exchanges GDP for GTP on RAS (KRAS, NRAS, HRAS), converting it to the active GTP-bound form
5. **MAPK cascade** — RAS-GTP recruits and activates RAF → MEK → ERK, driving gene expression programs for growth and proliferation

**Two alternative modes of GRB2 engagement** exist at the INSR/IGF1R tier:

- **Direct receptor binding:** GRB2 SH2 binds autophosphorylated tyrosines on INSR or IGF1R directly.
- **IRS-1–mediated (indirect):** GRB2 SH2 binds phosphotyrosine residues on [[irs-1|IRS-1]] (and IRS-2), which function as amplifying docking scaffolds. This route predominates in insulin-sensitive tissues. IRS-1 Tyr895 is a well-characterized GRB2-binding site (YxN motif).

The SHC adapter protein (SHCA/SHCB/SHCC) provides an additional relay: SHC itself binds RTK phosphotyrosines via PTB or SH2 domains, is phosphorylated, and then recruits GRB2 at the SHC pTyr residue. SHC–GRB2–SOS is therefore another route to RAS activation, particularly prominent at EGFR and at INSR/IGF1R.

## Beyond RAS: additional GRB2 scaffolding roles

GRB2 is not exclusively a RAS-MAPK conduit [^pawson1995]:

- **GAB1/GAB2 scaffolding:** GRB2 SH3 domains recruit GAB1 (GRB2-associated binder 1) to activated receptors. GAB1 then amplifies PI3K activation (via its MBD domain) and SHP2 phosphatase recruitment, providing cross-talk between the MAPK and [[pi3k-akt-pathway|PI3K–AKT]] arms.
- **CBL-mediated receptor downregulation:** GRB2 SH3 binds the E3 ubiquitin ligase CBL, targeting it to the receptor complex. CBL ubiquitinates activated RTKs, triggering their internalization and lysosomal degradation — a negative-feedback mechanism that attenuates prolonged growth-factor signaling. The GRB2–CBL interaction thus participates in growth-factor receptor turnover.
- **T-cell receptor signaling:** GRB2 engages the LAT scaffolding protein in T-cell receptor complexes and links to SOS for RAS activation in lymphocyte development.
- **Nuclear localization:** UniProt P62993 annotations indicate GRB2 localizes not only to the cytoplasm but also to the nucleus, endosomes, and Golgi, suggesting functions beyond plasma-membrane signaling that are not yet fully characterized. #gap/no-mechanism

## Post-translational modifications

| PTM | Site | Regulatory significance |
|---|---|---|
| N-acetylation | Met1 | Constitutive; affects stability |
| N6-acetylation | Lys6, Lys50, Lys109 | Less characterized |
| Phosphorylation | Tyr209, Thr211 | Potential regulatory role; near C-terminal SH3 |
| Ubiquitination | Lys109 | Both proteasomal (cytoplasmic) and nuclear poly-ubiquitination |

## Aging biology relevance

GRB2's role in aging derives primarily from its position as the canonical RAS–MAPK adapter in the **RAS-arm of insulin/IGF-1 receptor signaling**, and from invertebrate genetic data implicating its ortholog in longevity determination.

### C. elegans sem-5 and the daf-2/IIS longevity axis

The *C. elegans* ortholog of GRB2 is **sem-5**, one of the founding genes of the modular signaling concept. Sem-5 is required for the RAS-MAPK arm downstream of the *daf-2* (INSR/IGF1R ortholog) pathway [^pawson1995]. In the context of *C. elegans* longevity biology:

- *daf-2* loss-of-function approximately doubles adult lifespan, primarily through disinhibition of [[daf-16|DAF-16]] (FOXO transcription factor) via reduced AKT/SGK activity.
- The pathway bifurcates at the receptor level: the PI3K–AKT arm (via AGE-1/PI3K) gates FOXO/DAF-16 and longevity; the RAS–MAPK arm (via SEM-5/SOS-1/RAS-1) governs developmental cell fates and proliferation.
- Sem-5 (GRB2) is strictly required for the *let-23* (EGFR ortholog) → RAS-1 developmental pathway in *C. elegans* [^pawson1995]. Mutations in *sem-5* cause vulvaless phenotypes — the RAS signaling arm controls vulval induction.
- This invertebrate context demonstrates that GRB2/SEM-5 occupies a separable, parallel branch from the PI3K–AKT longevity branch at the same receptor tier. The longevity-extending effect of daf-2 reduction operates through the PI3K-AKT-DAF-16 arm, not primarily through the SEM-5-RAS arm.

| Dimension | Status | Notes |
|---|---|---|
| GRB2/SEM-5 role in IIS conserved in humans? | yes | SEM-5, Drk (fly), GRB2 (vertebrates) — orthologous adapters with conserved SH3-SH2-SH3 architecture |
| MAPK arm's longevity significance in humans? | unknown | Human data on RAS-MAPK longevity modulation sparse; anti-RAS oncology literature extensive but aging-focused studies absent |
| Aging phenotypes linked to GRB2 dysregulation? | preclinical only | Mouse conditional KOs reveal roles in atherosclerosis (Grb2+/-) and immune function; no human aging data |

#gap/needs-human-replication

### Grb2 knockout mice: embryonic lethality and conditional phenotypes

Complete Grb2 knockout is **embryonic lethal** in mice, with arrest occurring post-implantation due to failure of endoderm (parietal and visceral) differentiation from the inner cell mass [^cheng1998]. No Grb2−/− embryos were recovered at any timepoint from E7.5 to 3 weeks postnatally; empty decidua at E7.5 indicates arrest shortly after implantation (~E4.5), consistent with the requirement for endoderm formation beyond E5. This essential developmental function means:

- Grb2-null (Grb2−/−) mice are not informative for aging studies.
- Grb2+/− heterozygotes are viable and phenotypically normal, enabling gene-dosage studies.

Proctor et al. 2007 demonstrated that Grb2+/− (haploinsufficient) mice on an apoE−/− background developed **fewer atherosclerotic lesions** on a Western diet vs apoE−/− controls [^proctor2007]. Bone marrow transplantation established that the protective effect was hematopoietic-cell-intrinsic: reduced Grb2 in macrophages impaired foam cell formation in response to oxidized LDL. While not an aging study per se, this demonstrates that quantitative reduction in GRB2 signaling is atheroprotective — a disease phenotype directly relevant to cardiovascular aging.

Tissue-specific conditional knockouts (Cre-mediated) have defined additional GRB2 functions in T-cell development, B-cell receptor signaling, hepatocyte regeneration, and intestinal epithelial homeostasis (subsequent literature, not examined in Cheng 1998). These settings are aging-relevant but direct lifespan studies have not been performed. #gap/needs-human-replication

### GRB2 as a node in the RAS–MAPK oncogenic axis

RAS is mutated in ~30% of human cancers, and constitutive RAS–MAPK signaling is a canonical driver of oncogene-induced senescence (OIS) as well as proliferative bypass. Because GRB2 is the primary adaptor that brings SOS to the receptor complex, it is nominally upstream of this axis — though GRB2 itself is rarely mutated in cancer (it is a scaffold, not a kinase or GTPase). Its relevance to the [[deregulated-nutrient-sensing]] hallmark is **tangential**: GRB2 connects growth-factor receptors to growth/proliferation programs, but the core aging-relevant IIS longevity axis runs through PI3K–AKT–FOXO rather than through the RAS–MAPK arm.

## Pharmacology

GRB2 is a **difficult pharmacological target**:

- It is non-enzymatic, so conventional small-molecule active-site inhibitors do not apply.
- Its SH2 domain has been targeted by **phosphotyrosine peptidomimetics** and small-molecule SH2 inhibitors in oncology research, with limited clinical success.
- Its SH3 domains have been targeted with proline-rich peptides and fragments, but potency and selectivity are poor.
- Recent **PROTAC/degrader** strategies have been proposed for GRB2 in oncology contexts; none have entered human trials.
- **No aging-specific interventions** targeting GRB2 are in development. Because GRB2 is required for embryogenesis and normal tissue homeostasis (immune function, hepatocyte regeneration), systemic GRB2 inhibition poses unacceptable toxicity risk.

#gap/dose-response-unclear — no dose–response data for graded GRB2 inhibition in an aging model.

## Pathway membership

- [[insulin-igf1]] — GRB2 recruited to INSR/IGF1R and IRS-1 phosphotyrosine sites; RAS-MAPK arm
- [[pi3k-akt-pathway]] — indirect; GRB2–GAB1 provides an alternative PI3K activation route
- [[ras-mapk]] — direct; GRB2 is the canonical RTK-to-SOS adaptor

## Key interactors

- [[sos1]] / [[sos2]] — RAS GEFs; primary effectors recruited by GRB2 SH3 domains
- [[insr]] — direct SH2 binding to autophosphorylated INSR
- [[igf1r]] — direct SH2 binding to autophosphorylated IGF1R
- [[irs-1]] / [[irs-2]] — indirect route; GRB2 SH2 binds pTyr-895 (YxN) on IRS-1
- [[gab1]] — GRB2 SH3 recruits GAB1 → PI3K amplification
- [[cbl]] — GRB2 SH3 brings CBL E3 ligase to receptor complexes → RTK ubiquitination
- [[shc]] — SHC bridges RTK pTyr to GRB2 via SHC's own pTyr residues
- [[egfr]] — prototype direct SH2 binding partner (pTyr1068)

## Limitations and gaps

- #gap/needs-human-replication — no direct evidence that GRB2 levels or variants affect human aging trajectories; all aging-adjacent data is from invertebrate genetics (sem-5) or mouse cardiovascular models.
- #gap/no-mechanism — GRB2 nuclear localization annotated in UniProt; no function described.
- The **original "Cheng 1998" DOI** supplied in the task brief (`10.1016/s0092-8674(00)80939-2`) did not resolve in the archive; the correct DOI is `10.1016/s0092-8674(00)81702-x` (confirmed via Crossref + archive). **Note for verifier:** The brief-supplied Buday DOI `10.1016/0092-8674(93)90412-h` also did not resolve; the correct Buday & Downward 1993 DOI is `10.1016/0092-8674(93)90146-h` (confirmed via Crossref + DOI lookup).
- No [[genage-id]] is currently assigned to GRB2 in the GenAge Human Gene database; `genage-id: null` reflects this. #gap/needs-canonical-id — verify against HAGR GenAge if a GRB2 entry exists.
- [[sos1]], [[sos2]], [[shc]], [[gab1]], [[cbl]] protein pages do not yet exist; they are implicit stubs.

## Footnotes

[^lowenstein1992]: doi:10.1016/0092-8674(92)90167-b · in-vitro + biochemical · Lowenstein et al. 1992 · Cell · original cloning and characterization of GRB2; demonstrated SH2 binding to RTK phosphotyrosines and SH3 binding to SOS; named the protein and established the RTK→GRB2→SOS→RAS link · n=N/A (biochemical) · n_citations=1,644 · archive: pending (OA bronze)

[^pawson1995]: doi:10.1038/373573a0 · review · Pawson T. 1995 · Nature · "Protein modules and signalling networks" — foundational review of SH2/SH3 modular signaling proteins including GRB2/SEM-5; covers YxN specificity and the adaptor protein concept · n=N/A (review) · n_citations=2,433 · archive: not_oa

[^buday1993]: doi:10.1016/0092-8674(93)90146-h · in-vitro + biochemical · Buday L & Downward J. 1993 · Cell · "Epidermal growth factor regulates p21ras through the formation of a complex of receptor, Grb2 adapter protein, and Sos nucleotide exchange factor" — demonstrated GRB2–SOS complex formation and its role in EGF-stimulated RAS activation · n=N/A (biochemical) · n_citations=1,077 · archive: not_oa (closed)

[^cheng1998]: doi:10.1016/s0092-8674(00)81702-x · in-vivo (mouse, knockout) · Cheng AM et al. 1998 · Cell · "Mammalian Grb2 Regulates Multiple Steps in Embryonic Development and Malignant Transformation" — established Grb2-null post-implantation lethality from failure of endoderm (parietal and visceral) differentiation from ICM; no −/− embryos recovered from E7.5 to birth; chimeric analysis placed the block post-endoderm/epiblast formation step; also showed Grb2 haploinsufficiency delays MT-driven mammary tumor onset · model: Grb2−/− in R1 ES cells (129 background); chimeric experiments used ICR recipient females · n_citations=376 · archive: local PDF available (completed)

[^proctor2007]: doi:10.1161/atvbaha.106.134007 · in-vivo (mouse, Grb2+/−) + in-vitro (macrophage) · Proctor BM et al. 2007 · Arterioscler Thromb Vasc Biol · "Grb2 is required for atherosclerotic lesion formation" — Grb2+/−/apoE−/− mice on C57Bl/6J background showed fewer atherosclerotic lesions after 2 months Western diet (aortic sinus: 0.151±0.075 mm² vs 0.263±0.097 mm² in apoE−/−, P=0.003; n=15 apoE−/−, n=12 Grb2+/−/apoE−/−); bone marrow transplant confirmed hematopoietic-cell-intrinsic protection; Grb2+/− macrophages showed reduced oxLDL uptake and degradation (P=0.020 and P=0.010) and impaired foam cell formation · model: Grb2+/−/apoE−/− mice, C57Bl/6J background (12 generations backcross for apoE−/−; 7 generations for Grb2+/−) · n_citations=27 · archive: local PDF available (completed)
