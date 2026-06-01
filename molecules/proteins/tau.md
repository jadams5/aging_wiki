---
type: protein
aliases: [MAPT, microtubule-associated protein tau, neurofibrillary tangle protein, "paired helical filament tau"]
uniprot: P10636
ncbi-gene: 4137
hgnc: 6893
mouse-ortholog: Mapt
ensembl: ENSG00000186868
druggability-tier: 2
caused-by: []
causes: []
key-domains: [N-terminal-projection, proline-rich-region, microtubule-binding-repeats, C-terminal-tail]
key-ptms: [Ser202-phospho, Thr205-phospho, Ser396-phospho, Ser404-phospho, Thr181-phospho, Thr217-phospho]
pathways: ["[[chaperone-mediated-autophagy]]"]
hallmarks: ["[[loss-of-proteostasis]]", "[[disabled-macroautophagy]]"]
known-interactors: ["[[gsk3b]]", "[[cdk5]]", "[[hsp70]]", "[[lamp2a]]"]
genage-id: null
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Hutton 1998 (10.1038/31508) primary source PDF verified against all FTDP-17 genetics claims; UniProt P10636 + NCBI Gene 4137 verified for sequence length, isoform count, exon count, gene size, chromosomal location; Lee 2001 (10.1146/annurev.neuro.24.1.1121) not_oa — tauopathy taxonomy and kinase claims retained from seeder, unverified; Goedert 1989 (10.1093/emboj/8.2.393) not in archive — 6-isoform claim retained from seeder, unverified; Cuervo 2004 DOI 10.1038/nn1387 definitively wrong (maps to unrelated synaptic plasticity paper) — tau/CMA section flagged; Mukrasch 2009 (10.1371/journal.pbio.0070034) not in archive — NMR/IDP claims retained from seeder, unverified"
---

# Tau (MAPT)

Tau is a neuronal microtubule-associated protein whose primary physiological role is to stabilize axonal microtubules and regulate axonal transport. In aging and neurodegenerative disease, tau undergoes pathological hyperphosphorylation, detaches from microtubules, and assembles into beta-sheet-rich paired helical filaments (PHFs) that accumulate as neurofibrillary tangles (NFTs) — a defining lesion of Alzheimer's disease and a dozen other "tauopathies." Tau aggregation both reflects and amplifies [[loss-of-proteostasis]], and aggregated tau resists clearance via [[chaperone-mediated-autophagy]] and the ubiquitin–proteasome system.

## Identity

- **UniProt:** P10636 (TAU_HUMAN)
- **NCBI Gene:** 4137 (MAPT)
- **HGNC:** 6893
- **Ensembl:** ENSG00000186868
- **Mouse ortholog:** Mapt (high sequence conservation; all six human isoforms have murine counterparts)
- **Chromosomal location:** 17q21.31 (human); this locus also carries the MAPT inversion haplotype (H1/H2) linked to tauopathy risk
- **Gene size:** ~134 kb; 16 exons (NCBI Gene 4137, GRCh38.p14: 45,894,554–46,028,334)

## Isoforms (alternative splicing)

Six major isoforms arise in the adult human CNS through alternative splicing of exons 2, 3 (N-terminal inserts, called N1 and N2) and exon 10 (an additional microtubule-binding repeat, R2) [^goedert1989]. UniProt P10636 lists 9 total isoforms when peripheral nervous system (PNS) isoforms are included; the canonical/longest UniProt entry is **PNS-tau at 758 aa** (includes large inserts from exon 4A absent in CNS). The 6 CNS isoforms below are the disease-relevant forms for tauopathy research.

| Isoform | N-inserts | MT-binding repeats | aa | Expression |
|---|---|---|---|---|
| 2N4R | N1+N2 | R1–R4 | 441 | Adult brain (largest CNS isoform) |
| 1N4R | N1 | R1–R4 | 412 | Adult brain |
| 0N4R | none | R1–R4 | 383 | Adult brain |
| 2N3R | N1+N2 | R1,R3,R4 | 410 | Adult brain |
| 1N3R | N1 | R1,R3,R4 | 381 | Adult brain |
| 0N3R | none | R1,R3,R4 | 352 | Adult brain (smallest CNS isoform) |

The 3R:4R ratio is ~1:1 in normal adult human brain. Disruption of this ratio — whether toward 3R dominance (Pick's disease) or 4R dominance (PSP, CBD) — is a defining feature of disease-specific tauopathies. The fourth repeat (R2, encoded by exon 10) enhances microtubule binding affinity; 4R tau is a stronger microtubule stabilizer than 3R tau. #gap/needs-replication (quantitative 3R/4R binding affinity comparison in human neurons not well-established).

In fetal brain, only the smallest 0N3R isoform is expressed; the full complement of six isoforms appears postnatally.

## Domain organization

Tau is an intrinsically disordered protein (IDP) with no stable tertiary structure in solution [^mukrasch2009]. Four functional regions:

1. **N-terminal projection domain** (residues 1–150 in 2N4R): acidic; projects away from the microtubule surface; modulates inter-microtubule spacing; interacts with the neuronal plasma membrane and spectrin. Includes the two alternatively spliced N1 (exon 2, 29 aa) and N2 (exon 3, 29 aa) inserts.
2. **Proline-rich region** (PRR, ~150–243): rich in PXXP motifs; interacts with SH3-domain proteins; separates the projection domain from the microtubule-binding repeats. Contains the majority of proline-directed phosphorylation sites (Ser/Thr-Pro motifs), many of which are hyperphosphorylated in AD.
3. **Microtubule-binding repeats (MTBR)** (~244–368 in 2N4R): 3 or 4 imperfect repeats (~31 aa each) forming the core microtubule-binding surface; also the nucleus for pathological aggregation; pseudo-repeat R2 (exon 10) is the fourth repeat present only in 4R isoforms.
4. **C-terminal tail** (~369–441): less well-characterized; contributes to aggregation kinetics; site of some phosphorylation events and caspase cleavage (Asp421 truncation by caspase-3 generates a pro-aggregant fragment).

## Native function

In healthy neurons, tau:

- **Stabilizes axonal microtubules** by binding along the outer surface; reduces catastrophe frequency and promotes polymerization [^lee2001].
- **Regulates axonal transport**: modulates the processivity of kinesin and dynein; MT-bound tau acts as a "roadblock" at supraphysiological concentrations — the native balance maintains efficient transport while preserving microtubule dynamics.
- **Segregates to axons**: maintained in axons by a diffusion barrier at the axon initial segment; somatodendritic tau is rapidly degraded.
- **Nuclear functions**: tau has been reported in the nucleus, possibly protecting genomic DNA; significance contested. #gap/unsourced

Tau knockout mice (Mapt−/−) are viable and fertile with mild motor deficits, suggesting partial redundancy with other MAPs (MAP1B, MAP2) [^lee2001].

## Pathological hyperphosphorylation

Tau in Alzheimer's disease brain is phosphorylated at approximately 3–4× the stoichiometry of normal adult tau; ~85 phosphorylation sites have been mapped (Ser, Thr, Tyr residues) [^lee2001]. Key diagnostic sites:

| Site | Kinase(s) | Antibody | Clinical use |
|---|---|---|---|
| Ser202/Thr205 | GSK3β, CDK5 | AT8 | Histopathology gold standard |
| Ser396/Ser404 | GSK3β | PHF1 | Histopathology |
| Thr181 | GSK3β, CDK5 | AT270 | CSF + plasma biomarker (p-tau181) |
| Thr217 | — | — | Plasma biomarker; earlier AD signal than p-tau181 |
| Thr231 | GSK3β | AT180 | CSF biomarker |

**Major tau kinases:**
- **GSK3β** — constitutively active in neurons; activated by Wnt/Fz pathway loss; major contributor to PHF-tau in AD
- **CDK5** — normally activated by p35; pathological cleavage to p25 (calpain-mediated) generates hyperactive CDK5/p25 complex; Thr231 and other sites
- **p70S6K** — downstream of [[mtor]]; phosphorylates tau at Thr212 (overlapping AT8 epitope) — links mTOR hyperactivation to tau pathology
- **DYRK1A** — encoded on chromosome 21; elevated in Down syndrome (trisomy 21 → early-onset AD); phosphorylates Thr212

Phosphorylation at most of these sites reduces tau's affinity for microtubules, freeing tau to accumulate in the cytoplasm and aggregate.

## Pathological aggregation cascade

Hyperphosphorylated tau follows a stereotyped aggregation pathway:

1. **Microtubule detachment** — phospho-tau has reduced MT affinity; accumulates in soluble cytoplasmic pool
2. **Oligomer formation** — soluble phospho-tau forms small oligomers (likely most neurotoxic species #gap/contradictory-evidence)
3. **Beta-sheet conversion** — the MTBR (especially the hexapeptide motifs ^306VQIVYK^311 and ^275VQIINK^280) nucleates cross-beta structure
4. **PHF assembly** — two tau filaments coil around each other with a periodicity of ~80 nm → paired helical filaments (PHFs)
5. **NFT formation** — PHFs accumulate intraneuronally → mature neurofibrillary tangles (NFTs); neurons may survive for years with NFTs; eventual neuronal death releases "ghost tangles" (extracellular NFTs)

This cascade is templated: exogenously introduced tau seeds propagate intracellularly in a prion-like manner and can spread trans-synaptically between connected neurons. The stereotyped anatomical progression of NFT pathology through the brain (Braak stages I–VI) is consistent with trans-neuronal spreading from the entorhinal cortex outward.

## Tauopathies — disease taxonomy

Tau pathology defines a family of neurodegenerative diseases distinguished by isoform composition, cell-type distribution, and morphology of tau inclusions [^lee2001]:

| Disease | Tau isoforms | Primary cell type | Notes |
|---|---|---|---|
| Alzheimer's disease | 3R+4R | Neurons (NFTs) | Tau secondary to Aβ; Braak staging; most common |
| Pick's disease (FTD) | 3R-dominant | Neurons (Pick bodies) | Frontal/temporal atrophy |
| Progressive supranuclear palsy (PSP) | 4R-dominant | Neurons + glia | Vertical gaze palsy; Richardson syndrome |
| Corticobasal degeneration (CBD) | 4R-dominant | Neurons + astrocytes | Asymmetric motor + cognitive |
| Argyrophilic grain disease (AGD) | 4R-dominant | Neurons (grains) | Often incidental; memory |
| Chronic traumatic encephalopathy (CTE) | 3R+4R | Neurons (perivascular) | Trauma history; distinct distribution |
| FTLD-tau (MAPT mutations) | isoform-dependent | Neurons ± glia | Autosomal dominant; see below |

## Genetics — MAPT mutations and FTLD-tau

Missense and splice-site mutations in MAPT cause frontotemporal dementia with parkinsonism linked to chromosome 17 (FTDP-17 / FTLD-tau) — autosomal dominant, early onset (40s–60s) [^hutton1998]. This was the landmark study demonstrating that tau dysfunction alone (without Aβ) is sufficient to cause neurodegeneration.

Key mutation classes:
- **Missense mutations** (e.g., P301L, V337M, R406W) — directly reduce tau's affinity for microtubules or promote aggregation
- **Splice-site mutations** (e.g., +13, +14, and +16 in intron 10) — shift 3R:4R splicing toward 4R excess; 4R dominance appears sufficient to cause disease [^hutton1998]
- **Mutation locations**: exon 10 (R2 repeat) and flanking intron are mutation hotspots

The MAPT locus also harbors a ~900-kb inversion polymorphism (H1 vs H2 haplotype); the H1 haplotype (more common) is a risk factor for PSP and CBD, likely by increasing 4R tau expression.

| Dimension | Status |
|---|---|
| Tau aggregation causes neurodegeneration in humans? | yes — FTDP-17 MAPT mutations are sufficient |
| Hyperphosphorylation necessary for toxicity? | partial — required for PHF formation; oligomers may be toxic independently |
| Aβ-tau interaction mechanistically established in humans? | no — epidemiologically linked; mechanistic hierarchy debated |

## Tau as biomarker

Tau and phospho-tau are among the most clinically established AD biomarkers [^lee2001]:

- **CSF total-tau (t-tau)** — reflects neuronal injury/death broadly; elevated in AD and other dementias; not specific to tauopathy
- **CSF phospho-tau (p-tau181, p-tau231)** — more specific to AD-type tau pathology; ratio CSF Aβ42/p-tau181 is a diagnostic index
- **Plasma p-tau217** — emerging blood-based biomarker; high sensitivity/specificity for Aβ-positive AD at preclinical stages; simpler collection than CSF #gap/needs-replication (head-to-head performance vs CSF not uniformly established)
- **[18F]-flortaucipir PET** — enables regional tau burden imaging in vivo; FDA-approved for AD diagnosis

## Clearance pathways and proteostasis failure

Soluble tau is normally turned over by multiple pathways; aggregated tau resists all of them:

- **Chaperone-mediated autophagy (CMA)**: tau contains a canonical KFERQ-like motif (^275VQIINK^280 region partially overlaps); recognized by HSC70 → delivered to LAMP-2A on the lysosomal membrane → translocated for degradation [^cuervo2004]. Pathological mutations and hyperphosphorylation block this step — phospho-tau binds LAMP-2A but is not translocated, acting as a competitive inhibitor that also impairs general CMA flux. This is the canonical home for tau's role on [[chaperone-mediated-autophagy]]. #gap/no-fulltext-access (see footnote — primary DOI unresolvable; tau/CMA claim awaits re-citation)
- **Macroautophagy**: via autophagosomes; clearance of oligomeric and small aggregate forms. TFEB activation promotes autophagic clearance of tau in mouse models. Relevant to [[disabled-macroautophagy]] hallmark.
- **Ubiquitin–proteasome system (UPS)**: soluble tau is ubiquitinated (Lys254, Lys311, Lys353) and degraded by 26S proteasome; large tau aggregates physically block proteasome entry.
- **Extracellular spreading**: secreted tau fragments can be taken up by neighboring neurons, bypassing intracellular clearance entirely.

Declining CMA activity with age (LAMP-2A levels fall ~30–40% between 2 and 22 months in rodent brain) creates a permissive environment for tau accumulation in aging neurons. #gap/needs-human-replication (human brain LAMP-2A age-decline magnitude not established from primary sources on this wiki)

## Therapeutic landscape

Tau is an intensively pursued drug target in AD and tauopathies; most clinical-stage programs have failed or returned mixed results as of 2026:

**Anti-tau immunotherapy (passive):**
- **Gosuranemab** (BMS-986168; targets N-terminal extracellular tau) — Phase 2 in PSP: **NEGATIVE** on primary endpoint (CDR+NAVSB). #gap/needs-replication
- **Tilavonemab** (ABBV-8E12; targets N-terminal tau) — Phase 2 in PSP and FTD-tau: **NEGATIVE** on primary endpoint.
- **Semorinemab** (RO7105705; targets N-terminal tau) — Phase 2 in prodromal/mild AD: primary endpoint negative in first study; further studies ongoing. #gap/long-term-unknown

**Anti-tau immunotherapy (active):**
- Several active vaccines (AADvac1, ACI-35) in Phase 2; results pending or mixed. #gap/long-term-unknown

**Antisense oligonucleotides:**
- **BIIB080** (ION-10) — ASO targeting MAPT mRNA; Phase 2 in AD; reduces CSF total-tau ~50% in preliminary data; clinical outcome data pending. #gap/long-term-unknown

**Microtubule stabilizers:**
- **Epothilone D** — promoted MT assembly to compensate for tau loss; Phase 1 in AD: dose-limiting neuropathy; no Phase 2 advancement.

**Tau aggregation inhibitors:**
- **Methylene blue / LMTX** — claimed to disaggregate tau; Phase 3 trials inconclusive; methodological criticisms raised. #gap/contradictory-evidence

**Small-molecule kinase inhibitors:**
- GSK3β and CDK5 are pleiotropic — no tau-kinase inhibitor has reached Phase 3 with tau pathology as primary endpoint; toxicity and selectivity concerns. #gap/long-term-unknown

## Interactors and pathway connections

- [[gsk3b]] — primary tau kinase in AD context; activated by loss of Wnt signaling; inhibited by lithium (tool compound); phosphorylates ~40 tau sites
- [[cdk5]] — neuronal kinase; p25/CDK5 pathological complex; phosphorylates overlapping sites with GSK3β
- [[hsp70]] — major chaperone triage factor; attempts refolding or routes to proteasome; overwhelmed in advanced tauopathy
- [[lamp2a]] — CMA receptor; tau-binding but blockade by phospho-tau; declining with age
- [[mtor]] — hyperactivation suppresses autophagy → less tau clearance; p70S6K phosphorylates tau Thr212
- [[alzheimers-disease]] — tau NFTs are the second defining lesion (after Aβ plaques); Braak tau staging correlates with clinical severity better than amyloid load
- [[neurodegeneration]] — tauopathies as a class of proteinopathy within neurodegeneration; tau spreads via connected circuits
- [[chaperone-mediated-autophagy]] — tau is a CMA substrate; phospho-tau blocks CMA; aging-associated LAMP-2A decline intersects with tau risk
- [[loss-of-proteostasis]] — tau aggregation is a direct manifestation of proteostatic failure in aging neurons

## Limitations and knowledge gaps

- #gap/needs-human-replication — LAMP-2A age-decline magnitude in human brain (most data from rodent liver/brain; human neuron-specific data limited)
- #gap/contradictory-evidence — oligomers vs fibrils as primary toxic tau species; evidence exists for both; may be disease-stage and cell-type-dependent
- #gap/no-mechanism — how tau spreads trans-synaptically in vivo at the molecular level; seeding established, but receptor(s) mediating uptake not fully characterized
- #gap/long-term-unknown — BIIB080 (MAPT ASO) clinical outcome data; all active tau immunotherapy long-term safety profiles
- #gap/contradictory-evidence — role of tau in non-neuronal cells (astrocytes, oligodendrocytes in 4R tauopathies) poorly understood
- #gap/unsourced — tau nuclear function; specific claims require primary citation

## Footnotes

[^hutton1998]: [[studies/hutton-1998-mapt-ftdp17]] · n=N/A (genetic study, multiple families) · observational (genetic) · model: human FTDP-17 pedigrees · DOI:10.1038/31508 · archive: local PDF available · Nature 393:702-705 · cited by ~3,484

[^goedert1989]: doi:10.1093/emboj/8.2.393 · in-vitro (tau cDNA cloning + isoform expression) · model: human fetal brain cDNA library · EMBO J 8:393-399 · not in archive #gap/no-fulltext-access

[^lee2001]: [[studies/lee-2001-neurodegenerative-tauopathies]] · review · model: tauopathies (human + model organisms) · DOI:10.1146/annurev.neuro.24.1.1121 · archive: metadata confirmed; not downloaded (not OA) · Annu Rev Neurosci 24:1121-1159 · cited by ~2,339

[^mukrasch2009]: doi:10.1371/journal.pbio.0070034 · in-vitro (NMR structural characterization of full-length tau 441 aa) · model: recombinant human 2N4R tau · PLoS Biol 7:e34 · not in archive #gap/no-fulltext-access

[^cuervo2004]: ⚠️ DOI WRONG — doi:10.1038/nn1387 resolves to "Coactivation and timing-dependent integration of synaptic potentiation and depression" (Nat Neurosci 8:187-193, 2005), a completely unrelated paper (confirmed via Crossref + a local paper archive 2026-05-04). The tau/CMA/LAMP-2A claim attributed here is mechanistically plausible but lacks a verified primary-source DOI. The correct citation for tau/CMA is likely from the Cuervo lab but the specific paper (described as "Nat Neurosci 7:1355-1360") could not be identified in Crossref searches. #gap/no-fulltext-access — replace with correct DOI before relying on this claim.
