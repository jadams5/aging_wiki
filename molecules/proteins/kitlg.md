---
type: protein
aliases: [SCF, stem cell factor, Steel factor, mast cell growth factor, MGF, c-Kit ligand]
uniprot: P21583
ncbi-gene: 4254
hgnc: 6343
ensembl: ENSG00000049130
genage-id: null
mouse-ortholog: Kitl
pathways: ["[[kit-signaling-pathway]]", "[[pi3k-akt-pathway]]", "[[ras-mapk-pathway]]"]
hallmarks: ["[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]"]
sens-categories: []
druggability-tier: 2
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "UniProt P21583 canonical fields verified (isoform lengths, TM coordinates, chromosomal location); Hattori 2004 quantitative claims cross-checked against verified study page (not re-read — study page verified: true, 2026-05-19); Young 2024 (Blood, PMC11302459) full PDF read (14 pp); Imokawa 2019 review (Int J Mol Sci) PDF read (pp 1-8 of 16, covering all SCF/KIT claims on this page). Corrections: (1) isoform aa lengths added to table; (2) Young 2024 footnote n specification updated to 5 young + 9 MA C57BL/6J female mice; (3) hair-greying gap tag removed (page exists); (4) 'pleiotrophic' spelling corrected; (5) Imokawa c-KIT discrepancy note added."
---


# KITLG (Stem Cell Factor / SCF)

KIT ligand — the canonical ligand for the c-KIT (CD117) receptor tyrosine kinase. Functions as a pleiotropic cytokine regulating hematopoiesis, melanogenesis, mast cell development, gametogenesis, and interstitial cell of Cajal (ICC) maintenance. In aging biology, KITLG is most notable as the paracrine signal from epidermal keratinocytes that drives **solar lentigo (age-spot) hyperpigmentation**, and as a stromal niche factor whose decline in middle age contributes to **hematopoietic stem cell aging**.

## Identity

- **UniProt:** P21583 (SCF_HUMAN)
- **NCBI Gene:** 4254
- **HGNC:** 6343 (symbol: KITLG)
- **Ensembl:** ENSG00000049130
- **Chromosome:** 12q21.32
- **Mouse ortholog:** Kitl (MGI symbol; the "Steel" locus — classical coat-color genetics; Steel/Sl mutants lack membrane-bound Kitl and are severely anemic with white coats)
- **Receptor:** [[kit]] (c-KIT / CD117) — receptor tyrosine kinase encoded by *KIT*
- **Length:** 273 aa (precursor, canonical isoform SCF248); mature protein is processed post-signal-peptide cleavage

## Protein structure and isoforms

Two functional protein isoforms arise from alternative splicing of exon 6 [^uniprot-p21583]:

| Isoform | Also called | Length (post-signal-peptide) | Molecular weight | Cleavage | Mode of action |
|---|---|---|---|---|---|
| **SCF248** (full-length / isoform 1) | Membrane-bound SCF | **248 aa** (273 aa precursor; signal peptide aa 1–25; TM aa 215–237) | ~31 kDa (glycosylated) | Ectodomain shedding by ADAM17/TACE generates soluble form | Juxtacrine; transmembrane-tethered; primary form in epidermis |
| **SCF220** (exon-6-deleted / isoform 2) | Soluble SCF precursor | **220 aa** (245 aa precursor; exon-6 deletion replaces aa 174–202 with single Gly, removing 28 aa from ectodomain) | ~18 kDa (shed ectodomain after TACE cleavage) | Shed constitutively at higher rate | Paracrine/endocrine; diffusible |

**The isoform distinction is biologically critical.** Membrane-bound SCF (31 kDa) signals via direct cell-to-cell contact (juxtacrine). Soluble SCF (18 kDa) can diffuse and signal at a distance. In the solar lentigo context, only the membrane-bound form is detected in lesional epidermis — soluble SCF is absent — making direct keratinocyte–melanocyte contact the operative signalling mode [^hattori2004].

Differential glycosylation (N- and O-linked) also generates high-molecular-weight (HMW-SCF) and low-molecular-weight (LMW-SCF) variants within the soluble pool.

## Receptor pairing and downstream signalling

KITLG binds [[kit]] (c-KIT), a class III receptor tyrosine kinase. Binding induces receptor dimerization → autophosphorylation → activation of three major downstream axes [^uniprot-p21583]:

- **PI3K → AKT** — survival, proliferation
- **RAS → RAF → MEK → ERK (MAPK)** — proliferation, melanogenesis (via MITF)
- **STAT3/STAT5** — cell survival and fate in hematopoietic progenitors

In melanocytes, the MAPK arm converges with the endothelin-1/ET-B (EDNRB) Gq → PKC → CREB axis on transcriptional activation of MITF, which drives expression of melanogenic enzymes (tyrosinase, DCT, TYRP1).

## Cellular sources and target cells

KITLG is produced by **stromal/supportive cells** in multiple tissue compartments; target cells are those expressing the KIT receptor:

| Tissue | Producing cell | Target cell | Biological role |
|---|---|---|---|
| Bone marrow | Mesenchymal stromal cells (MSCs), sinusoidal endothelium | [[hematopoietic-stem-cells]] (HSCs), mast cell precursors | HSC self-renewal; mast cell differentiation |
| Epidermis | [[keratinocytes]] (basal layer) | [[melanocytes]] | Melanocyte survival, proliferation, melanogenesis |
| Hair follicle bulge | Follicular epithelial cells | [[melanocyte-stem-cells]] (McSCs) | McSC maintenance and niche retention |
| Thymus | Thymic epithelial cells | T-cell progenitors (early thymopoiesis) | T-cell development |
| Gonad | Sertoli cells; granulosa cells | Primordial germ cells | Gametogenesis |
| Gut | Stromal cells | Interstitial cells of Cajal (ICC) | Pacemaker cell (gut motility) maintenance |
| Brain | Astrocytes, Schwann cells | Neural progenitors | Neurogenesis support |

## Role in aging

### 1. Solar lentigo (age-spot) — the canonical aging phenotype

The best-characterized KITLG aging phenotype is **solar lentigo** (senile lentigo; "liver spots"), the focal epidermal hyperpigmentation of chronologically aged and UV-exposed skin.

Hattori et al. 2004 established the mechanism in 29 human patients (paired lesional vs perilesional biopsies) [^hattori2004]:

- **SCF mRNA:** 3.9-fold elevated in lesional epidermis vs perilesional normal epidermis (n=7, p<0.01)
- **Membrane-bound SCF protein (31 kDa):** 1.6-fold elevated in lesional epidermal lysates (n=6, p<0.05) via Western blot
- **Soluble SCF (18 kDa):** NOT detected in lesional or perilesional epidermal preparations
- **c-KIT mRNA on melanocytes:** UNCHANGED — 1.16-fold elevation (NS) — ruling out receptor upregulation as the primary driver

This is a **ligand-side amplification** mechanism: the aged or UV-exposed keratinocyte upregulates membrane-bound SCF, which acts via direct juxtacrine contact on adjacent melanocytes to stimulate KIT → MAPK → MITF → increased melanin synthesis. The receptor (KIT on melanocytes) is not sensitized; the signal gain is entirely upstream in the ligand-producing keratinocyte.

The ET-1/ET-B (endothelin-1 / EDNRB) cascade is co-upregulated in lentigo senilis and synergises with the SCF/KIT axis [^hattori2004]. The two pathways converge on MITF-driven melanogenic enzyme transcription. bFGF and GROα are NOT significantly elevated in this cohort (ruling out a broader keratinocyte inflammatory state as the mechanism).

Imokawa (2019) provides a comprehensive mechanistic review of solar lentigo paracrine signalling, contextualising the SCF/KIT axis within a broader model of keratinocyte–melanocyte cross-talk in aged skin [^imokawa2019]. **Note:** the Imokawa 2019 review states c-KIT mRNA was increased 2.14-fold in LS lesional epidermis citing Hattori 2004 [ref 2 therein] — this conflicts with the verified Hattori 2004 primary source (c-KIT mRNA 1.16-fold, NS; confirmed by direct PDF reading of the primary paper). The 1.16-fold NS figure from the primary source is the canonical value used on this page.

The source of SCF is the **epidermal** (keratinocyte) compartment, established by epidermal-sheet separation from dermis. This distinguishes the Hattori model from fibroblast-coculture paradigms where dermal fibroblast-derived SCF also activates melanocytes in vitro. Both compartments may contribute in vivo, but the epidermal keratinocyte is the source of elevated SCF in intact lentigo senilis biopsies. #gap/contradictory-evidence — relative dermal vs epidermal SCF contribution in intact aged skin not simultaneously quantified.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | All data from human biopsies |
| Phenotype replicated independently? | partial | SCF/KIT axis for solar lentigo widely cited; per-isoform quantitative data needs independent replication |
| Functional blockade tested? | no | No in-tissue blocking experiment published from this cohort; causality inferred from ligand–receptor biology |

#gap/needs-replication — the isoform-specific Western blot data (n=6) needs independent replication in a larger cohort.

### 2. Hematopoietic stem cell aging — mesenchymal niche decline

KITLG is a key niche-derived signal for [[hematopoietic-stem-cells]]. Lower expression of *Kitl* in bone marrow mesenchymal stromal cells (MSCs) correlates with reduced lymphoid lineage commitment of HSCs and increased signatures of differentiation-inactive HSCs in middle-aged mice — independently of age-associated inflammatory cytokines [^young2024].

Young et al. (2024, *Blood*) showed that natural variation in mesenchymal *Kitl* and *Igf1* expression in middle-aged mice (before overt aging phenotypes develop) predicts HSC lineage bias: lower Kitl → myeloid-skewing, a hallmark of [[stem-cell-exhaustion]] in the hematopoietic system. The myeloid shift is the canonical age-related change in HSC output that underlies increased myeloid-lineage cancers, anemia-of-aging, and declining adaptive immunity with age.

This is a niche-centric (rather than cell-intrinsic) mechanism of HSC aging: the HSC's age-related functional decline partly reflects declining KITLG support from the surrounding stromal niche rather than (or in addition to) DNA damage or epigenetic drift within the HSC itself.

#gap/needs-human-replication — The Young 2024 data are from mouse bone marrow; whether declining KITL expression in human MSCs with age has the same effect on human HSC lineage commitment has not been established.

### 3. Melanocyte stem cell niche and hair greying

KITLG produced by follicular epithelial cells in the bulge niche supports the maintenance of [[melanocyte-stem-cells]] (McSCs) in hair follicles. McSC loss or ectopic differentiation in the bulge underlies age-related hair greying. The SCF/KIT axis is one of the niche signals that keeps McSCs undifferentiated and retained in the bulge during the hair cycle. Loss or dysregulation of this niche signal may contribute to the gradual depletion of the McSC reservoir that drives [[hair-greying]] [^nishimura2011].

#gap/no-mechanism — the specific SCF threshold or isoform requirement for McSC maintenance in the human hair follicle is not established. Most mechanistic data are from mouse models.

## Druggability

- **Recombinant SCF (ancestim):** FDA-approved in 1997 for stem-cell mobilization in autologous transplantation (combined with G-CSF); **withdrawn from the US market** (2002) due to limited commercial uptake and mast cell activation adverse events (urticaria, anaphylaxis at injection site). #gap/long-term-unknown — long-term SCF supplementation in aging context not studied.
- **Receptor-side targeting ([[kit]] inhibitors):** Imatinib (BCR-ABL / KIT / PDGFR inhibitor), sunitinib, avapritinib — these target the receptor rather than the ligand; relevant for KIT-driven GISTs and mastocytosis. See [[kit]] page.
- **Anti-SCF antibodies / neutralizing agents:** Investigational, primarily in allergy/asthma and mast-cell disease contexts; no aging application.
- **Topical KIT-axis modulation:** Multiple cosmetic and dermatological approaches target the KIT axis for hyperpigmentation — KIT inhibitor 4-n-butylresorcinol, niacinamide (ET-1 suppression), and others affect upstream/downstream steps. None are direct KITLG antagonists.

**Druggability tier 2 rationale.** No FDA-approved KITLG-directed drug is currently available (ancestim was withdrawn). KIT-axis manipulation in aging is investigational. High-quality probes exist on the receptor side (imatinib for KIT); KITLG-side probes are less advanced. Aging-context tier is 2 (high-quality probe range), not tier 1, given the lack of a clinically marketed KITLG-specific agent.

## Pharmacogenomics / disease associations

- **Familial progressive hyperpigmentation (FPH):** gain-of-function KITLG variants → constitutive KIT activation → diffuse hyperpigmentation from birth. Establishes the causal link between excess KITLG signaling and melanocyte hyperactivation.
- **Waardenburg syndrome type 2F:** rare KITLG loss-of-function → melanocyte deficiency → hearing loss + hypopigmented patches.
- **Mastocytosis:** KIT gain-of-function (D816V) is the major driver; KITLG is not the primary genetic locus but elevated KITLG in the tissue microenvironment supports mast-cell expansion.
- **Mast-cell–associated conditions** (urticaria, anaphylaxis): SCF is the central survival/activation signal for tissue mast cells.

## Limitations and gaps

- **Mechanism of KITLG transcriptional upregulation in aged keratinocytes** is not established — what UV-sensing or aging-associated transcription factor (AP-1, NF-κB, p53?) drives *KITLG* induction remains unresolved. #gap/no-mechanism
- **Per-isoform quantitative data in solar lentigo** rest on small sub-cohorts (n=6–7). Independent large-cohort replication of the 3.9-fold mRNA / 1.6-fold membrane SCF protein figures is absent. #gap/needs-replication
- **Human MSC-KITLG → HSC aging link** is established in mice (Young 2024); human equivalence is inferred, not directly demonstrated. #gap/needs-human-replication
- **GenAge:** KITLG has no GenAge entry (HAGR Build 21, 2023). Not a curated aging gene in the standard database — its aging relevance is established via downstream phenotypes (lentigo, HSC aging, McSC niche), not longevity genetics. #gap/needs-canonical-id — no longevity GWAS hit for KITLG in major aging GWAS studies (to verify).
- **MR causal evidence:** not tested. No published Mendelian randomization study using KITLG as instrument for an aging-relevant outcome identified.

## Cross-references

- [[kit]] — cognate receptor tyrosine kinase (R40 sister page)
- [[melanocytes]] — KIT-expressing target cells in skin
- [[melanocyte-stem-cells]] — McSC niche maintenance by KITLG in hair follicle bulge
- [[keratinocytes]] — epidermal source of membrane-bound SCF in solar lentigo
- [[hematopoietic-stem-cells]] — bone marrow niche target; Kitl decline in middle age predicts myeloid skewing
- [[skin-aging]] — phenotype page; SCF/KIT axis is the canonical mechanism for solar lentigo subsection
- [[hair-greying]] — downstream phenotype of McSC KITLG-niche disruption
- [[melanogenesis]] — KITLG → KIT → MAPK → MITF → tyrosinase axis
- [[stem-cell-exhaustion]] — hallmark; HSC myeloid skewing driven by declining niche KITLG
- [[altered-intercellular-communication]] — hallmark; epidermal keratinocyte → melanocyte paracrine cross-talk exemplar
- [[studies/hattori-2004-scf-solar-lentigo]] — R39 verified study; canonical source for solar lentigo SCF mechanism

## Footnotes

[^hattori2004]: [[studies/hattori-2004-scf-solar-lentigo]] · doi:10.1111/j.0022-202x.2004.22503.x · n=29 total (per-assay: n=7 RT-PCR SCF, n=6 WB, n=4 GROα PCR, n=10 IHC) · observational, paired within-patient · model: human lentigo senilis biopsies, Japanese adults 35–85 yr · p<0.01 (SCF mRNA 3.9-fold), p<0.05 (membrane-bound 31 kDa SCF protein 1.6-fold), NS (GROα, bFGF, c-KIT mRNA 1.16-fold)

[^imokawa2019]: doi:10.3390/ijms20153666 · review · Imokawa G · Int J Mol Sci 2019 · comprehensive mechanistic review of solar lentigo paracrine signalling; contextualises SCF/KIT, ET-1/ET-B, and keratinocyte UV-response axes · locally available: 

[^young2024]: doi:10.1182/blood.2024024275 · n=5 young (2 mo) + 9 middle-aged (14 mo) C57BL/6J female mice (scRNA-seq main cohort) · in-vivo (mouse) · observational (scRNA-seq + CellChat ligand-receptor + ex-vivo MSC conditioned media) · Young KA et al. · Blood 2024 · Kitl and Igf1 expression variation in bone marrow MSCs in middle age underlies steady-state HSC lineage-commitment changes; lower Kitl correlates with differentiation-inactive HSC signature and reduced lymphoid priming; effects independent of pro-inflammatory cytokines (IL-1β, IL-6, TNF, RANTES) · OA via PMC: PMC11302459

[^nishimura2011]: doi:10.1111/j.1755-148x.2011.00855.x · review · Nishimura EK · Pigment Cell Melanoma Res 2011 · melanocyte stem cells as a melanocyte reservoir in hair follicles; SCF/KIT niche signals discussed for McSC maintenance · 297 citations · not OA (closed access)

[^uniprot-p21583]: UniProt P21583 (SCF_HUMAN), KITLG · accessed 2026-05-19 · Swiss-Prot manually curated entry · Homo sapiens
