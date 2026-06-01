---
type: protein
aliases: [TIN2, TINF2, TRF1-interacting nuclear factor 2, TERF1-interacting nuclear factor 2]
uniprot: Q9BSI4
ncbi-gene: 26277
hgnc: 11824
ensembl: ENSG00000092330
genage-id: null
mouse-ortholog: Tinf2
key-domains: [N-terminal-TRF2-binding, central-TPP1-binding, C-terminal-TRF1-binding, nuclear-localization-signal]
key-ptms: [N-acetylation-Ala2, Ser295-phosphorylation, SUMOylation-Lys302-Lys306-Lys341-Lys353]
pathways: ["[[telomerase-pathway]]"]
hallmarks: ["[[telomere-attrition]]", "[[cellular-senescence]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 4
gtex-aging-correlation: "#gap/not-queried — GTEx age-correlation for TINF2 not yet extracted; see sops/finding-tissue-expression.md"
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[telomere-attrition]]", "[[cellular-senescence]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "All five primary-source PDFs verified against wiki claims. UniProt Q9BSI4 identity fields (451 aa, isoforms, PTMs) confirmed via REST API. NCBI Gene 26277 and GenAge null confirmed. Canonical-database identity fields (PubChem not applicable; HGNC 11824 not independently re-checked via HGNC portal — recommend cross-check on next lint pass)."
---


# TIN2 (TINF2)

TIN2 is the central scaffold of the [[shelterin]] complex — a 451-amino-acid protein (canonical isoform TIN2L) that simultaneously contacts TRF1, TRF2, and TPP1 to bridge the duplex-binding and single-strand-binding arms of shelterin into a single functional unit. Without TIN2, the complex cannot assemble: TPP1-[[pot1|POT1]] is uncoupled from its telomeric anchor, and TRF2 is destabilized. TIN2 is unique among shelterin subunits in that its mutations cause some of the most severe telomere-biology disorders known — Revesz syndrome and early-onset dyskeratosis congenita — reflecting its irreplaceable role as the complex linchpin.

## Identity

- **UniProt:** Q9BSI4 (TINF2_HUMAN)
- **NCBI Gene:** 26277
- **HGNC symbol:** TINF2
- **Ensembl:** ENSG00000092330
- **Mouse ortholog:** Tinf2 (one-to-one ortholog; shelterin architecture conserved in vertebrates)
- **Length:** 451 amino acids (canonical isoform; see Isoforms below)
- **GenAge:** No entry — TIN2 does not appear in GenAge-human as of 2026-05-07; aging relevance is established via disease genetics rather than lifespan models #gap/needs-canonical-id

## Domain architecture

TIN2's three binding interfaces are structurally distinct and individually essential [^ye2004] [^houghtaling2004]:

| Domain | Residues (approx.) | Binding partner | Role |
|---|---|---|---|
| N-terminal region / TBM | 1–201 (helical) | TRF2 (TRFH domain) | Stabilizes TRF2 at telomeres; required for TRF2 complex integrity |
| TBM (TERF-binding motif) | 256–278 | TRF1 (TRFH domain) | Negative regulator of telomere elongation; TRF1 recruiter |
| Central region | ~202–255 | TPP1 (C-terminal) | Tethers the TPP1-POT1 ssDNA module to the duplex arm |
| NLS | 262–268 | — | Nuclear localization |

Domain residue boundaries follow UniProt Q9BSI4 (accessed 2026-05-07). The N-terminal helical region (8–202) and TBM (256–278) overlap with the two TRFH grooves; precise boundaries have been refined in structural studies.

**Key PTMs (UniProt-curated):**
- N-terminal acetylation (Ala-2) — constitutive
- Ser-295 phosphorylation — site and kinase not fully characterized #gap/no-mechanism
- SUMOylation at Lys-302, Lys-306, Lys-341, Lys-353 — role in shelterin dynamics not yet determined #gap/no-mechanism

## Isoforms

Two principal splice isoforms are expressed (UniProt Q9BSI4):

- **TIN2L (long)** — canonical 451 aa form; primarily nuclear; this is isoform 1 in UniProt
- **TIN2S (short)** — lacks residues 355–451 relative to TIN2L (isoform 2 in UniProt); UniProt also notes association with the **nuclear matrix** specifically for this isoform

Functional differences between isoforms are contested. The nuclear-matrix tethering reported for the long isoform has not been mechanistically linked to a specific aging or disease phenotype. #gap/needs-replication #gap/no-mechanism

## Function within shelterin

TIN2 solves a fundamental assembly problem: it holds together two chemically distinct DNA-binding modules (dsDNA binders TRF1/TRF2 and ssDNA binder POT1) that have no direct affinity for each other. For complex-level architecture and DDR suppression mechanisms, see [[shelterin]]. TIN2-specific functional contributions:

### Stabilizing TRF2 at telomeres

TIN2 binding to the TRF2 TRFH domain increases TRF2 residence time on telomeric chromatin. siRNA depletion of TIN2 in HeLa cells strongly diminished the telomeric signals of TRF2 and hRap1 in >90% of TIN2-knockdown nuclei, without reducing TRF2 or hRap1 protein levels [^ye2004]. TIN2 is therefore not merely an adaptor — it is a positive stabilizer of TRF2 at chromosome ends.

### Bridging TRF1 and TRF2 via simultaneous contact

Ye et al. 2004 demonstrated that TIN2 can interact with TRF1 and TRF2 simultaneously in biochemical pull-downs, establishing that TIN2 functions as a physical bridge rather than a switcher between the two TRFH-domain proteins [^ye2004]. Houghtaling et al. 2004 independently showed that TIN2, together with an interacting partner (TINT1/PTOP, later renamed TPP1), forms a molecular link between TRF1 and TRF2 [^houghtaling2004].

### Connecting to the TPP1-POT1 module

TIN2 interacts with the C-terminal domain of TPP1 (ACD), anchoring the TPP1-[[pot1|POT1]] heterodimer to the duplex telomere via TRF1/TRF2. This connection is essential: TPP1-POT1 cannot reach the 3' G-overhang without TIN2 providing a scaffold bridge to TRF1/TRF2. The TIN2-TPP1 interface is thus the physical link between shelterin's two functional halves. See [[shelterin]] § Architecture for the full assembly model.

## Role in aging

TIN2 does not have a well-established direct role in the *rate* of normal human aging in the absence of mutation. Its aging relevance is primarily:

1. **Disease-model proof-of-concept** — TINF2 mutations cause the most extreme short-telomere phenotypes in humans, confirming that failure of shelterin scaffold function drives accelerated telomere attrition and premature aging.
2. **Component of the senescence-gating mechanism** — TIN2, as part of shelterin, participates in the threshold at which critically short telomeres trigger persistent DDR signaling and [[cellular-senescence]]. See [[shelterin]] § Aging biology.
3. **Somatic context unknown** — whether TIN2 expression or activity changes with normal aging in somatic tissues has not been established. #gap/not-queried

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Shelterin architecture identical; TIN2 bridging function confirmed in human cell lines |
| Phenotype conserved in humans? | yes | TINF2 mutations cause severe human disease with extremely short telomeres |
| Replicated in humans? | yes (disease context) | Multiple independent cohorts; dominant causative mutations confirmed |

## TINF2 mutations and telomere-biology disorders

TINF2 mutations represent the **most common mutational cause of severe dyskeratosis congenita (DC)** and account for approximately 11% of all DC cases in large cohorts [^walne2008].

### Mutation cluster (residues 280–298)

The great majority of pathogenic TINF2 mutations are heterozygous missense mutations clustering in an ~18-residue hotspot spanning residues 280–298, within and around the TBM. Recurrent mutations include:

- **K280E** — identified first in Savage 2008 (Family A); also K280X (nonsense) found in Walne 2008
- **R282H** — most common in Walne 2008 (n=14 of 33); also found in Savage 2008
- **R282S** — identified in Savage 2008; **R282C** — most common R282 substitution in Walne 2008 (n=7 of 33)

Savage et al. 2008 identified mutations in the TINF2 gene in one large family (Family A, K280E) and four unrelated probands (R282H × 3, R282S × 1), characterizing this as "the first shelterin complex mutation linked to human disease," with mutations occurring de novo in the majority of cases [^savage2008]. All mutation carriers had very short telomeres, and phenotypic severity correlated with the specific mutation. Walne et al. 2008 extended the cluster description to residues 280–298 in a larger cohort [^walne2008].

### Dominance mechanism

TINF2 mutations act as **dominant** (heterozygous) — most are de novo. The dominant mechanism is consistent with haploinsufficiency of the scaffold function: one abnormal TIN2 molecule in an obligate hexameric complex may poison complex assembly or reduce telomerase access even when the other allele is normal. An alternative model — gain-of-dysfunction causing aberrant complex conformation — has not been ruled out. #gap/no-mechanism

### Clinical spectrum

| Syndrome | Severity | Key features | Typical onset |
|---|---|---|---|
| Revesz syndrome | Most severe | Bilateral exudative vitreoretinopathy, intrauterine growth restriction, bone marrow failure, cerebellar hypoplasia | Prenatal / infancy |
| DC (classical) | Severe | Nail dystrophy, oral leukoplakia, skin hyperpigmentation, bone marrow failure, pulmonary fibrosis | Childhood / adolescence |
| DC (attenuated) | Moderate | Overlapping features at variable penetrance | Adulthood |

Walne et al. 2008 in a large DC cohort found that patients with TINF2 mutations had telomere lengths below the 1st percentile for age in most cases, distinguishing them even from other DC genotypes which tend to have telomeres below the 10th percentile [^walne2008]. This extreme shortening reflects the position of TIN2 as the scaffold that coordinates shelterin's telomere-length regulatory function.

### Genotype–phenotype correlation

- Revesz syndrome is associated with mutations that likely disrupt TIN2 function most severely (often K280E, R282H).
- Attenuated DC presentations can result from mutations at other positions or from somatic mosaicism.
- Penetrance can vary within families; parent-of-origin effects have been reported but mechanistic basis is unclear. #gap/no-mechanism

## Pharmacology and druggability

**Druggability tier: 4** (aging context). No validated small-molecule modulator of TIN2 exists. The binding interfaces TIN2 presents to TRF1, TRF2, and TPP1 are protein-protein interactions (PPIs) — historically the most difficult drug targets. The TIN2 scaffold is not an enzyme; no catalytic site exists for small molecules to occupy. Disrupting TIN2 function would be expected to destabilize shelterin and accelerate telomere dysfunction — the opposite of a therapeutic goal in normal aging. In the disease context (TINF2 mutations), the intervention need is gene correction or telomerase augmentation, not TIN2 inhibition.

- **No clinical trials** targeting TIN2 are registered on ClinicalTrials.gov for any aging or telomere indication.
- **Gene therapy** approaches targeting TINF2 mutations are conceptually feasible but no preclinical program has been reported.

## Pathway membership

- [[telomerase-pathway]] — as a shelterin member that regulates telomerase access and processivity via the TPP1 connection
- [[shelterin]] — the six-subunit complex; TIN2 is the central scaffold subunit

## Key interactors

Within shelterin:
- [[trf1]] — direct binding via TBM; TIN2 is TRF1's primary effector for telomere length control
- [[trf2]] — direct binding via N-terminal region; TIN2 stabilizes TRF2 at telomeres
- [[tpp1]] — direct binding via central region; TIN2 anchors the TPP1-POT1 module
- [[pot1]] — indirect (via TPP1)

Beyond shelterin:
- [[atm]] — activated at deprotected telomeres when TIN2-mediated shelterin assembly fails
- [[p53]] — downstream executor of TIF-triggered senescence when TIN2/shelterin function is lost

## Gaps and open questions

- **Isoform function:** TIN2S vs. TIN2L functional distinction is unresolved; nuclear-matrix tethering role of TIN2L has not been mechanistically characterized. #gap/needs-replication #gap/no-mechanism
- **Phospho-Ser295 kinase:** the kinase responsible for TIN2 Ser295 phosphorylation and the functional consequence are not established. #gap/no-mechanism
- **SUMOylation sites:** four SUMO sites are annotated (Lys302, 306, 341, 353) but their role in shelterin assembly, telomere length control, or DDR response is unexplored. #gap/no-mechanism
- **Normal aging expression:** whether TINF2 expression or TIN2 protein levels change with age in somatic tissues has not been queried via GTEx or Aging Atlas. #gap/not-queried
- **Dominant mechanism in DC:** haploinsufficiency vs. dominant-negative vs. gain-of-dysfunction for TINF2 heterozygous mutations is not definitively established. #gap/no-mechanism
- **GenAge entry:** TINF2 has no GenAge-human entry as of 2026-05-07. The gene qualifies for inclusion based on disease genetics (extreme telomere shortening from heterozygous mutation), but the GenAge inclusion criteria focus on lifespan modification rather than telomere-biology disorders per se. #gap/needs-canonical-id
- **Structural biology of TIN2-TPP1 interface:** the TIN2-TRF1 and TIN2-TRF2 interfaces have been structurally characterized, but the TIN2-TPP1 interface is less well-defined structurally. #gap/needs-replication

## Footnotes

[^kim1999]: doi:10.1038/70508 · Kim SH, Kaminker P, Campisi J · *Nat Genet* 1999 · in-vitro (yeast two-hybrid + co-IP in human cells) · n/a · TIN2 cloned via TRF1 interaction screen; wild-type TIN2 is a **negative regulator** of telomere length (overexpression maintains or slightly shortens telomeres); N-terminal deletion mutants (TIN2-12, TIN2-13) elongate telomeres in a telomerase-dependent manner, acting as dominant negatives · PDF locally available

[^ye2004]: doi:10.1074/jbc.M409047200 · Ye JZ et al. · *J Biol Chem* 2004 · in-vitro (biochemical + cell-based) · n/a · TIN2 binds TRF1 and TRF2 simultaneously; TIN2 required for TRF2 stability at telomeres; dominant-negative TIN2 disrupts both interactions and destabilizes shelterin #gap/needs-replication (single study)

[^houghtaling2004]: doi:10.1016/j.cub.2004.08.052 · Houghtaling BR, Cuttonaro L, Chang W, Smith S · *Curr Biol* 2004 · in-vitro + cell-based · n/a · TIN2 and TINT1 (renamed PTOP/PIP1/TPP1) form a molecular link between TRF1 and TRF2; TIN2/TINT1 complex associates with TRF2 in the absence of TRF1; TINT1 knockdown results in telomere elongation, confirming TIN2-TINT1 as a negative regulator of telomerase access #gap/needs-replication (single study; independently confirms Ye 2004 on the bridging function)

[^savage2008]: doi:10.1016/j.ajhg.2007.10.004 · Savage SA et al. · *Am J Hum Genet* 2008 · observational (case series, linkage + mutation screen) · n=10 mutation carriers in Family A (8 alive; 2 deceased founders) + 4 unrelated DC probands; 298 control individuals; total cohort = 16 DC patients with TINF2 mutations · First report of TINF2 as a shelterin-complex DC gene; de novo K280E (Family A), R282H (3 probands), R282S (1 proband) mutations identified; all carriers with telomeres <1st percentile; "first shelterin complex mutation linked to human disease"

[^walne2008]: doi:10.1182/blood-2008-05-153445 · Walne AJ et al. · *Blood* 2008 · observational (cohort) · n=175 uncharacterized DC patients + 244 related bone-marrow-failure patients screened; TINF2 mutations found in 33/175 DC patients (18.9% of uncharacterized; ~11% of all DC) · telomeres shorter than any other DC subtype; all 33 TINF2 mutation carriers had very short telomeres; mutations clustered in 18-aa segment (residues 280–298); largest cohort study of TINF2 mutations at publication
