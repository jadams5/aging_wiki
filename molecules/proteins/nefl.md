---
type: protein
aliases: [NF-L, neurofilament light, NEFL, NF68, NFL, light neurofilament protein, 70 kDa neurofilament, hCMT2E]
uniprot: P07196
ncbi-gene: 4747
hgnc: 7739
ensembl: ENSG00000277586
genage-id: null
pathways: ["[[neurofilament-cytoskeleton]]", "[[axonal-transport]]"]
hallmarks: ["[[loss-of-proteostasis]]", "[[chronic-inflammation]]"]
sens-categories: []
complex-subunits: [P07197, P12036]
druggability-tier: null
gtex-aging-correlation: "CNS-dominant expression; limited GTEx aging correlation data available for most CNS regions; not populated — #gap/needs-tissue-expression-data"
mr-causal-evidence: not-tested
caused-by: []
causes: []
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Mersiyanova 2000, Yuan 2017, and Khalil 2020 primary-source PDFs verified in full; UniProt P07196 identity fields and domain coordinates verified via REST API. Corrections: domain residue table updated to match UniProt P07196; Mersiyanova footnote n corrected; Khalil longitudinal n corrected to 95 (final analysis); study cohort name corrected to Austrian Stroke Prevention Study; NF-H KSP repeat count corrected to 45 (human)/51 (mouse); PTM phosphorylation site residues corrected to match UniProt; NF-H predicted MW corrected to 112.5 kDa. Canonical-DB IDs (NCBI Gene, HGNC, Ensembl, PubChem) confirmed. NEFM/NEFH UniProt accessions confirmed."
---

# NEFL (Neurofilament Light Chain)

The light subunit of the **neurofilament triplet** — the major cytoskeletal intermediate filament system of myelinated axons. NEFL is the obligate scaffold component; it is required for the co-assembly of NEFM (medium chain, NF-M) and NEFH (heavy chain, NF-H) into heteropolymeric neurofilament networks. In aging biology, NEFL is not a direct drug target but is the protein source for serum/plasma neurofilament light chain (sNfL), the most widely deployed blood biomarker of neuroaxonal damage. For clinical biomarker interpretation, see [[biomarkers/nfl-biomarker]].

## Identity

- **UniProt:** P07196 (NFL_HUMAN) — Swiss-Prot (manually curated)
- **NCBI Gene ID:** 4747
- **HGNC:** 7739 (approved symbol: NEFL)
- **Ensembl:** ENSG00000277586
- **Common synonyms:** NF-L, NFL, NF68 (SDS-PAGE name), 68/70 kDa neurofilament protein
- **Chromosomal location:** 8p21.2
- **Sequence length:** 543 amino acids (canonical isoform) [^uniprot-p07196]
- **Predicted molecular weight:** 61,517 Da (~61.5 kDa) [^uniprot-p07196]
- **Mouse ortholog:** Nefl (Mus musculus); one-to-one ortholog

### kDa discrepancy: 61.5 vs 68–70 kDa

NEFL migrates anomalously on SDS-PAGE at approximately 68–70 kDa, substantially above its predicted molecular weight of 61.5 kDa. The discrepancy arises from two factors: (1) the high content of glutamic acid residues in the C-terminal tail domain (particularly the acidic subdomain at residues ~462–543), which slows SDS-PAGE migration by reducing apparent charge-to-mass ratio under denaturing conditions; and (2) phosphorylation of head-domain serine residues, which occurs on the native protein and further alters migration. The "68 kDa" and "70 kDa" labels in older literature reflect electrophoretic migration, not predicted sequence mass. The authoritative predicted mass from the canonical 543-aa sequence is 61,517 Da [^uniprot-p07196]. #gap/needs-replication — the specific biophysical basis of the anomalous migration has been described mechanistically in intermediate filament literature but a citable primary source specifically dissecting the NEFL kDa discrepancy has not been extracted here.

## Domain Architecture

NEFL adopts the canonical intermediate filament (IF) protein tripartite structure [^yuan2017]:

| Domain | Residues | Function |
|---|---|---|
| Head (N-terminal) | 2–92 | Phosphorylation-regulated assembly; interacts with tail of adjacent subunit; governs filament formation |
| IF rod domain | 90–400 | α-helical coiled-coil; the structural core; enables lateral association during filament assembly |
| — Coil 1A | 93–124 | |
| — Linker L1 | 125–137 | Short linker; flexible |
| — Coil 1B | 138–234 | |
| — Linker L12 | 235–252 | |
| — Coil 2A | 253–271 | |
| — Coil 2B | 281–396 | |
| Tail A | 397–443 | Protrudes laterally from filament surface |
| Tail B (acidic) | 444–543 | Intrinsically disordered acidic subdomain (glutamic-acid-rich "E segment"); minimal phosphorylation compared to NEFM/NEFH tails |

The coiled-coil rod domain drives parallel homodimer formation, which then assemble antiparallel to form tetramers, and stack laterally into unit-length filaments (ULFs) that anneal longitudinally into mature 10 nm intermediate filaments [^yuan2017].

## Neurofilament Triplet Assembly

NEFL is the **obligate scaffold subunit**. It can form homopolymers in vitro, but in vivo it serves as the nucleation point for the neurofilament triplet:

| Subunit | Gene | UniProt | MW (predicted) | Tail phosphorylation | Role |
|---|---|---|---|---|---|
| NF-L (light) | NEFL | P07196 | 61.5 kDa | Minimal | Obligate; homopolymer scaffold; required for NEFM/NEFH co-assembly |
| NF-M (medium) | NEFM | P07197 | 102.5 kDa | Moderate (KSP repeats in tail) | Incorporated via binding to NF-L; extends inter-filament spacing |
| NF-H (heavy) | NEFH | P12036 | 112.5 kDa | Extensive (KSP repeat phosphorylation; human NF-H has 45 KSP repeats, mouse has 51) | Large tail protrudes from filament; phosphorylation-dependent cross-bridging controls axonal caliber |

NEFL loss-of-function abolishes neurofilament network formation — NEFM and NEFH cannot form 10-nm neurofilaments without NEFL [^lariviere2004][^yuan2017]. This makes NEFL the structural bottleneck of the neurofilament system and explains why NEFL mutations are sufficient to cause neuroaxonal pathology. Note: [^lariviere2004] is closed-access (not_oa); the NF-L knockout finding is independently corroborated in [^yuan2017] (section 8.1, citing Zhu et al. 1997) and in [^mersiyanova2000] (Discussion, citing Zhu et al. 1997). #gap/no-fulltext-access — Lariviere 2004 PDF unavailable; supporting claims re-anchored to Yuan 2017 and Mersiyanova 2000 which both document the same mouse knockout phenotype.

The functional consequence of the assembled triplet is **axonal caliber regulation**: the density and phosphorylation state of neurofilaments in myelinated axons determines axon diameter, which in turn determines conduction velocity [^yuan2017]. #gap/needs-human-replication — most mechanistic data on neurofilament stoichiometry and caliber regulation are from mouse knockout models.

## Post-Translational Modifications

Key PTMs documented on human NEFL (UniProt P07196) [^uniprot-p07196]:

- **Phosphorylation:** Multiple serine/threonine/tyrosine residues documented in UniProt P07196 including Tyr-43, Ser-56, Ser-67, Ser-103 (head-domain sites); Ser-472, Ser-502, Thr-520 (tail-domain sites). Regulated by kinases including CDK5, PKA, PKC. Head phosphorylation inhibits filament assembly (controls polymerization state); aberrant head hyperphosphorylation is associated with neurofilament aggregation [^uniprot-p07196].
- **O-GlcNAc glycosylation:** Thr-21 and Ser-27 (UniProt P07196); interplay with phosphorylation (O-GlcNAc and phosphorylation may be mutually exclusive at some sites) [^uniprot-p07196].
- **Ubiquitination:** Documented; relevant to proteasomal degradation and aggregate clearance.
- **Methylation:** Reported in mass-spectrometry proteomic studies.

## Subcellular Localization

NEFL localizes to:
- **Axonal cytoskeleton** — primary compartment; the mature neurofilament network is concentrated in large myelinated axons where it provides structural support and determines axonal caliber
- **Cell body (perikaryon)** — assembly and transport initiation occurs in the soma
- **Slow axonal transport** — neurofilaments are transported anterogradely at ~0.2–1 mm/day (slow component a, SCa) via interactions with microtubule motors [^yuan2017]

## Expression Pattern

NEFL is expressed selectively in neurons. Highest expression in:
- Large myelinated motor neurons (spinal cord anterior horn)
- Peripheral motor and sensory axons
- CNS long-projection neurons (cortical and hippocampal pyramidal neurons, cerebellar Purkinje cells)

Non-neuronal expression is negligible under physiological conditions, which is the basis for the selectivity of serum NEFL protein as a biomarker of neuronal (not glial or non-neural) damage. #gap/needs-tissue-expression-data — GTEx aging correlation data for NEFL in CNS tissues should be populated per `sops/finding-tissue-expression.md`; CNS tissue availability in GTEx is limited compared to peripheral tissues.

## Role in Aging

### Serum NfL as aging biomarker

The primary aging-relevance of NEFL is as the protein source for serum/plasma NfL (sNfL), a biomarker of progressive neuroaxonal loss. Serum NfL is relatively stable below age 60 but rises in an accelerating, nonlinear manner thereafter in population-based cohorts [^khalil2020]. The increase in variance above age 60 was statistically significant (Brown-Forsythe test, p<0.0001), suggesting an increasing contribution of subclinical comorbid neuropathology at older ages. In the Khalil 2020 population cohort (n=335 cross-sectional; n=95 final longitudinal analysis; Austrian Stroke Prevention Study / ASPS-Fam, Graz, Austria), baseline sNfL correlated with normalized brain volume (rs=−0.321, p<0.0001 cross-sectionally), and longitudinal change in sNfL correlated with annualized brain atrophy (rs=−0.290, p<0.01) — indicating the age-associated sNfL rise tracks real neuroaxonal attrition rather than analytical artifact [^khalil2020].

The mechanistic interpretation is that aging post-mitotic neurons accumulate DNA damage, mitochondrial dysfunction, proteostatic stress, and inflammation — each of which can destabilize neurofilament networks, impair axonal transport, and ultimately cause neuroaxonal injury that releases NEFL protein fragments into CSF and blood. This positions NEFL protein at the convergence of multiple hallmarks of aging acting in post-mitotic neurons.

For clinical biomarker methodology, reference ranges, and disease applications, see [[biomarkers/nfl-biomarker]].

### Proteostasis failure and aggregate formation

In neurodegeneration, NEFL protein escapes its normal neurofilament context and forms pathological aggregates [^lariviere2004]:

- **ALS (amyotrophic lateral sclerosis):** Neurofilament aggregates are a hallmark pathological finding in motor neuron perikarya and axons of ALS patients; both misregulated phosphorylation (aberrant head hyperphosphorylation) and impaired axonal transport contribute to aggregate formation
- **Alzheimer's disease:** Neurofilament components are found within neurofibrillary tangles and dystrophic neurites; tau-neurofilament interactions are altered in AD
- **Charcot-Marie-Tooth disease (CMT2E/CMT1F):** Aggregate-forming NEFL missense mutants cause dominant gain-of-toxic-function axonopathy (see below)

The [[loss-of-proteostasis]] hallmark is engaged at two levels: (1) impaired neurofilament assembly/turnover due to mutation or stress leads to insoluble protein aggregates analogous to amyloid or synuclein aggregates in other neurodegenerative contexts; (2) proteasomal and autophagic clearance of damaged neurofilament subunits is impaired in aging neurons, contributing to aggregate accumulation [^yuan2017].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (aggregate formation, axonal injury) conserved in humans? | yes |
| Replicated in human aging specifically? | partial — rising sNfL in population aging confirmed; aggregate causality inferred from disease models |

## Genetic Disease: CMT2E / CMT1F

NEFL mutations cause autosomal-dominant axonal neuropathy. The first disease-causing NEFL mutation was identified by Mersiyanova et al. (2000) in a Russian family with Charcot-Marie-Tooth disease type 2 (CMT2, axonal) [^mersiyanova2000]:

- **Mutation:** p.Gln333Pro (A998C transversion in exon 1)
- **Mechanism:** Missense substitution in the coil 2B region of the IF rod domain; disrupts coiled-coil packing and leads to aggregate-forming mutant protein
- **Inheritance:** Autosomal dominant; one mutant allele is sufficient to cause disease, consistent with dominant-negative or gain-of-toxic-function mechanism
- **Disease:** CMT2E — axonal neuropathy; onset in second to third decade; progressive distal muscle weakness and sensory loss

Subsequent work defined additional NEFL mutations causing:
- **CMT1F** — demyelinating variant; onset in infancy/childhood; more severe than CMT2E
- **CMTDIG** — dominant intermediate form (mixed axonal/demyelinating features)

The dominance of NEFL-related CMT is notable: NEFL is the scaffold component required for neurofilament assembly, so even a minority of mutant subunits (from one allele) can disrupt the entire triplet network via dominant-negative poisoning of the assembly pathway. #gap/needs-replication — the specific dominant-negative vs gain-of-function mechanism has been modeled in cell systems but human genetic evidence for the mechanism is inferred.

## Druggability

NEFL is a **structural cytoskeletal protein** with no identified enzymatic active site. It is not a direct drug target. Druggability tier: null (structural scaffold; not tractable for small-molecule intervention in the conventional sense). #gap/no-mechanism — no therapeutic strategy targeting NEFL directly has advanced to preclinical development for aging or neurodegeneration; approaches targeting upstream regulators (kinases controlling neurofilament phosphorylation, autophagy inducers to clear aggregates) exist but are not NEFL-specific.

NEFL's clinical value is as a **biomarker** rather than a therapeutic target; drug development in this context is focused on assay validation and clinical utility, not on modulating NEFL protein directly.

## Pathway Membership

- [[neurofilament-cytoskeleton]] — core structural component of the neurofilament intermediate filament network (implicit stub)
- [[axonal-transport]] — neurofilaments are transported via slow axonal transport; transport impairment → neurofilament accumulation (implicit stub)

## Key Interactors

- **NEFM (NF-M; P07197)** — co-assembles with NEFL in the triplet; requires NEFL for filament formation
- **NEFH (NF-H; P12036)** — co-assembles with NEFL; highly phosphorylated tail governs inter-filament spacing
- **PRPH (Peripherin)** — neuronal intermediate filament expressed in PNS neurons; can co-assemble with NEFL in peripheral neurons; upregulated in ALS and may contribute to aggregate formation
- **CDK5 / CDC2** — kinases phosphorylating NEFL head domain; regulate assembly state
- **KIF5A/DYNC1H1** — kinesin/dynein motors mediating slow axonal transport of neurofilaments

## Limitations and Open Questions

1. **GTEx aging correlation not populated.** CNS tissue representation in GTEx is limited; aging-specific expression trajectories for NEFL in human neurons require single-cell RNA-seq data from aging atlases (Tabula Muris Senis, Human Aging Atlas). #gap/needs-tissue-expression-data

2. **MR causal evidence absent.** No published Mendelian randomization study has used genetic instruments at the NEFL locus to test causal effects on neurodegeneration or longevity. Germline variants at NEFL may have limited power given that the protein's aging relevance is mediated by somatic accumulation of damage in post-mitotic neurons. #gap/not-tested-MR

3. **GenAge entry not confirmed.** A search of GenAge HAGR did not return a confirmed NEFL entry; `genage-id: null` is appropriate pending manual re-check. #gap/needs-canonical-id

4. **kDa discrepancy mechanistic source.** The 61.5 vs 68–70 kDa anomaly is described in intermediate filament literature generally but a primary NEFL-specific citation has not been extracted. #gap/needs-replication

5. **Dominant-negative mechanism in CMT2E.** Inferred from cell models; not formally proven in human tissue. #gap/needs-replication

## Cross-references

- [[biomarkers/nfl-biomarker]] — clinical serum/plasma NfL biomarker; aging trajectory, disease applications, confounders
- [[hallmarks/loss-of-proteostasis]] — neurofilament aggregate formation in neurodegeneration
- [[hallmarks/chronic-inflammation]] — neuroinflammation drives neuroaxonal damage and NEFL release
- [[neurofilament-cytoskeleton]] — parent pathway/process page (implicit stub)
- [[axonal-transport]] — transport of neurofilaments in myelinated axons (implicit stub)
- [[phenotypes/neurodegeneration]] — downstream phenotype (implicit stub)

## Footnotes

[^uniprot-p07196]: UniProt P07196 (NFL_HUMAN), accessed 2026-05-09 · Swiss-Prot manually curated entry · canonical sequence 543 aa; predicted MW 61,517 Da; HGNC:7739; Ensembl ENSG00000277586; disease associations: CMT1F, CMT2E, CMTDIG

[^mersiyanova2000]: doi:10.1086/302962 · Mersiyanova IV, Perepelov AV, Polyakov AV, et al. · *Am J Hum Genet* 2000;67(1):37–46 · n=28 family members (six-generation Russian family from Mordovian Republic; 12 affected, 14 unaffected, 2 unknown status) + 46 unrelated CMT patients screened for NF-L mutations + 90 unrelated healthy controls (180 chromosomes) screened for the Gln333Pro variant · observational (genetic linkage + SSCP mutation analysis) · identified first NEFL disease mutation (p.Gln333Pro, A998→C transversion in exon 1 of NF-L) in CMT2E; locus mapped to chromosome 8p21; maximum two-point LOD score 5.93 · model: human pedigree · archive status: downloaded

[^lariviere2004]: doi:10.1002/neu.10270 · Lariviere RC, Julien JP · *J Neurobiol* 2004;58(2):131–148 · review · functions of intermediate filaments in neuronal development and disease; covers NEFL's role as obligate neurofilament scaffold, ALS aggregate pathology, and mouse knockout phenotypes · archive status: not_oa — cannot verify against full text; load-bearing claims (NF-L knockout abolishes NF-M/NF-H network formation; aggregate formation in ALS/AD) re-anchored to Yuan 2017 [^yuan2017] and Mersiyanova 2000 [^mersiyanova2000], both of which document or cite the same underlying primary findings · #gap/no-fulltext-access

[^yuan2017]: doi:10.1101/cshperspect.a018309 · Yuan A, Rao MV, Veeranna, Nixon RA · *Cold Spring Harb Perspect Biol* 2017;9(4):a018309 · review · comprehensive treatment of neurofilament structure, assembly, transport, stoichiometry, and disease; confirms NF-L predicted MW 61.5 kDa (SDS-PAGE migration 68–70 kDa); NF-M 102.5 kDa; NF-H 112.5 kDa in human; ULF assembly pathway; slow axonal transport mechanism · archive status: downloaded

[^khalil2020]: doi:10.1038/s41467-020-14612-6 · Khalil M, Pirpamer L, Hofer E, et al. · *Nat Commun* 2020;11:812 · n=335 cross-sectional (195f/140m; age 38.5–85.6 yr); n=103 agreed to follow-up; n=95 final longitudinal analysis (8 excluded for incident disease); mean f/u 5.9 yr (SD±0.97, range 4.0–6.9 yr); Austrian Stroke Prevention Study / ASPS-Fam (Graz, Austria) · observational cohort · sNfL stable below age 60, increases nonlinearly with significant variance acceleration above age 60 (Brown-Forsythe p<0.0001); correlates with brain volume loss cross-sectionally (rs=−0.321) and longitudinally (rs=−0.290, p<0.01) · model: neurologically inconspicuous community-dwelling adults · local PDF available
