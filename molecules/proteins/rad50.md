---
type: protein
aliases: [RAD50, hRAD50]
uniprot: Q92878
ncbi-gene: 10111
hgnc: 9816
ensembl: ENSG00000113522
genage-id: null
pathways: ["[[dna-damage-response]]", "[[homologous-recombination]]", "[[non-homologous-end-joining]]"]
hallmarks: ["[[genomic-instability]]"]
sens-categories: []
complex-subunits: []
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: ["[[dna-double-strand-breaks]]"]
causes: ["[[atm-activation]]", "[[homologous-recombination]]", "[[genomic-instability]]"]
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-05-12 — synthesized from canonical UniProt/NCBI metadata and widely-cited primary literature; FANCI-RAD50 / cGAS axis cited from Chen 2025 abstract only due to closed-access PDF (#gap/no-fulltext-access).

# RAD50

RAD50 is a 1,312-amino-acid ABC-type ATPase of the SMC (Structural Maintenance of Chromosomes) superfamily. It forms one of three constitutive subunits of the **MRN complex** ([[mrn-complex]]: MRE11–RAD50–NBS1), the primary sensor of DNA double-strand breaks (DSBs) in eukaryotic cells. RAD50's defining structural feature — a long antiparallel coiled-coil arm capped by a zinc-hook — enables it to physically bridge the two ends of a broken chromosome, holding them in proximity for repair. It is required for both the initiation of [[homologous-recombination]] and for early DSB sensing upstream of [[non-homologous-end-joining]]. In aging contexts, RAD50 sits at the intersection of three converging biology streams: (1) age-dependent decline of DSB repair efficiency, (2) progeroid-spectrum RAD50-deficiency syndrome (NBSLD), and (3) a newly described pathway in which nuclear cGAS chromatin retention potentiates RAD50 recruitment to damage sites via enhanced FANCI–RAD50 interaction [^chen2025].

**Note on HGNC ID:** UniProt Q92878 lists HGNC:9816 for RAD50. The [[mrn-complex]] page currently records HGNC:9817 — this appears to be a transcription error on that page; HGNC:9816 is the correct identifier per UniProt.

## Identity

- **UniProt:** Q92878 (RAD50_HUMAN) — Swiss-Prot (manually curated entry)
- **NCBI Gene ID:** 10111
- **HGNC:** 9816
- **Ensembl:** ENSG00000113522
- **Length:** 1,312 amino acids (canonical isoform)
- **Mouse ortholog:** Rad50 (one-to-one ortholog; highly conserved; null embryonic-lethal in both species)
- **GenAge:** No entry (confirmed null per HAGR GenAge database; see [[mrn-complex]] verification notes, 2026-05-07)

## Architecture and key domains

RAD50 adopts the canonical SMC-family rod architecture [^hopfner2002]:

- **N-terminal Walker A motif (P-loop)** — ATP binding; ~~positioned at the very N-terminus~~, contributes one half of the bipartite ATPase head
- **C-terminal Walker B motif** — ATP hydrolysis; contributes the other half of the ATPase head when the molecule folds in *trans* back on itself
- **Central coiled-coil domains** — two long antiparallel coiled-coil segments (each ~150–600 Å in length depending on species and structural context) extend away from the globular ATPase head and constitute the "arm" of the rod
- **Zinc-hook (Cys-X-X-Cys, residues ~635–734)** — at the apex of the coiled-coil arm; a conserved CXXC motif coordinates one Zn²⁺ ion with the equivalent motif from a second RAD50 molecule, creating an inter-molecular clamp that can bridge two separate MRN complexes across a DSB [^hopfner2002]
- **ATM-phosphorylation site:** Ser-635 is phosphorylated by ATM in *trans* after DSB-mediated ATM activation, creating a feedback mark on the sensor itself [^lavin2015]

The ATPase head, formed by apposition of the Walker A and Walker B motifs from the same polypeptide (intra-molecular folding), directly contacts the MRE11 dimer, coupling ATP-dependent conformational changes to MRE11 nuclease activity.

## Function

### DSB end-binding and end-tethering

RAD50, as part of MRN, binds free DNA ends rapidly after DSB formation. The ATPase head contributes to sequence-independent DNA-end binding; RAD50 can bind blunt ends, 5' or 3' overhangs, and hairpin structures [^paullgellert1998]. Most distinctively, RAD50 bridges the two broken ends: zinc-hook-mediated RAD50–RAD50 dimerization between two MRN complexes, each bound to one DSB end, can hold the ends in proximity across a gap of up to ~1,200 Å [^hopfner2002]. This tethering function is essential for rejoining the break and explains why RAD50 zinc-hook mutations confer severe radiation sensitivity in yeast (C1G mutant: ~5-fold increased sensitivity at 300 Gy; C2G mutant: ~95-fold increased sensitivity) [^hopfner2002].

### ATP-dependent modulation of MRE11 nuclease activity

RAD50's ATPase cycle regulates MRE11 exonuclease activity: when Mre11 is in complex with Rad50, the 3'→5' exonuclease activity is increased 3- to 4-fold relative to Mre11 alone [^paullgellert1998]. ATP hydrolysis drives conformational cycling between an "open" (DNA-accepting) and "closed" (DNA-engaging) state at the ATPase head, toggling MRE11 between nuclease-active and -inactive configurations. In the full M/R/N complex with NBS1, these ATP-dependent nuclease and unwinding activities are further potentiated, enabling more efficient hairpin cleavage and generation of single-stranded DNA (ssDNA) tails [^paull1999genes].

### ATM activation and signaling

RAD50 is an obligate upstream component of ATM activation. MRN (including RAD50) physically tethers inactive ATM dimers to DSB ends via NBS1's C-terminal FXF/Y–ATM-FATC interaction. ATP-dependent RAD50 conformational changes and MRN-stimulated DNA unwinding contribute to the allosteric transition that dissociates ATM dimers and promotes Ser1981 autophosphorylation — the canonical ATM activation step [^leepaull2005]. This is detailed on the [[atm]] and [[mrn-complex]] pages.

### End resection licensing for HR

In S/G2-phase cells where homology-directed repair is preferred, MRN initiates end resection. The combined MRE11 nuclease activity (stimulated by RAD50 and further amplified by NBS1) generates an initial incision ~15–20 nt internal to the break end, providing an entry point for long-range resection by EXO1 and DNA2/BLM [^paull1999genes]. RAD50's structural role (holding the broken ends together) is required for productive MRE11 endonuclease access to protein-adduct-blocked or chemically-modified ends. Downstream, the ssDNA tails are coated by [[rpa]] → RAD51 loading by [[brca2]] → HR template search.

### HR vs NHEJ pathway choice

RAD50-containing MRN competes with the [[ku70-ku80]] heterodimer at DSB ends. When Ku loads first (favored in G1 phase), DNA ends are shielded from resection and committed to NHEJ. When MRN loads and initiates resection (favored in S/G2), the single-stranded tail substrate is unsuitable for Ku, committing the break to HR. Cell-cycle-phase regulation of CDK activity influences this competition by phosphorylating key resection factors (e.g., CtIP/RBBP8, which cooperates with MRN at the initial incision step).

## In aging

### Declining DSB repair efficiency

HR efficiency declines with age in human primary cells. In a study of 50 eyelid fibroblast lines from donors aged 16–75 years, both NHEJ efficiency/fidelity and HR efficiency decreased with donor age, with RAD51 showing stable protein levels but slow recruitment kinetics to damage sites in aged cells [^li2016]. This was the work of the Mao group (same laboratory that published Chen 2025), suggesting a long-standing research interest in age-associated DDR decline. The specific MRN/RAD50 contribution to this age-associated HR inefficiency was not directly measured in that study — RAD50 protein levels and complex stability in aged human primary cells have not been separately quantified. #gap/needs-replication

The age-related DSB burden (documented by increased γH2AX foci in aged tissues) combined with declining HR efficiency implicates MRN sensing and RAD50-mediated end-tethering as rate-limiting steps in aged tissue repair. Whether RAD50 itself, or downstream HR factors (RAD51, BRCA1/2), are the primary rate-limiting node has not been established. #gap/no-mechanism

### Progeroid overlap: RAD50 deficiency (NBSLD)

Loss-of-function mutations in RAD50 cause **Nijmegen breakage syndrome-like disorder (NBSLD)**, first described by Waltes et al. 2009 [^waltes2009]. The index patient presented with:

- Microcephaly
- Intellectual disability
- Bird-like facies, short stature
- Chromosomal instability
- Radiation hypersensitivity
- Impaired MRN foci formation at DSBs
- Defective ATM activation and downstream signaling
- Radioresistant DNA synthesis and G2-phase accumulation

The cellular phenotype was **rescued by wild-type RAD50 transfection**, definitively attributing the syndrome to RAD50 loss [^waltes2009]. Unlike typical NBS (NBN/NBS1 hypomorphism), the index patient did not develop lymphoid malignancy and had normal immunoglobulin levels through age 23 — indicating distinct clinical consequences for RAD50 vs NBS1 deficiency, though both impair ATM activation. A subsequent cohort confirmed this as a distinctive phenotype [^ragamin2020]; additional patients with compound heterozygous RAD50 variants have since presented with bone marrow failure and B-cell immunodeficiency [^takagi2023].

The NBSLD phenotype — microcephaly, growth failure, chromosomal instability — overlaps the progeroid-spectrum DDR-deficiency syndromes (NBS, ATLD, A-T) and reflects the consequences of impaired DSB sensing in developing tissues with high replicative demand. These syndromes collectively demonstrate that RAD50 loss-of-function phenocopies accelerated genomic instability and tissue deterioration relevant to aging biology.

| Dimension | Status |
|---|---|
| RAD50 function conserved in aging-relevant contexts? | yes — DSB repair, ATM activation, and HR are highly conserved; ortholog phenotypes identical |
| Progeroid phenotype from RAD50 loss in humans? | yes — NBSLD established [^waltes2009][^ragamin2020] |
| Direct measurement of RAD50 activity decline with age? | no — not done in primary human cells #gap/needs-replication |

### EPAS1-driven RAD50 transcription and telomere protection

In bat fibroblasts and human pulmonary endothelial cells, the transcription factor EPAS1 (HIF-2α) upregulates RAD50 transcription alongside the shelterin components TRF1 and TRF2, protecting cells from telomeric-damage-induced senescence during extended culture [^li2023]. This places RAD50 downstream of the hypoxia-inducible factor pathway as part of a telomere-protection gene program. Whether EPAS1-driven RAD50 upregulation is protective against age-associated telomere erosion in human somatic tissues has not been tested. #gap/needs-human-replication

### The FANCI–RAD50 axis and nuclear cGAS chromatin retention (Chen 2025)

A 2025 Science paper from the Mao lab [^chen2025] identified a new regulatory layer on RAD50 function via a study of naked mole-rat (NMR) cGAS. NMR-cGAS carries four amino acid substitutions relative to human/mouse cGAS that prevent its eviction from chromatin by the ubiquitination machinery (TRIM41 and the P97 segregase). This prolonged chromatin retention — beyond the duration of the acute DSB response — enhances the interaction between repair factors FANCI and RAD50, facilitating RAD50 recruitment to damage sites and potentiating HR repair (abstract verbatim: "Prolonged chromatin binding of cGAS enhanced the interaction between repair factors FANCI and RAD50 to facilitate RAD50 recruitment to damage sites, thereby potentiating homologous recombination repair").

Mechanistic implications:

- **FANCI as a RAD50 co-factor:** FANCI is a Fanconi anemia pathway protein classically associated with interstrand crosslink (ICL) repair; its role in modulating RAD50 recruitment to DSBs (rather than ICLs alone) represents a newly described function. Whether this FANCI–RAD50 interaction was previously described in the ICL-repair context or is entirely novel to the Chen 2025 paper is unclear from the abstract. #gap/needs-replication
- **cGAS as a DDR potentiator (not just innate immune sensor):** This extends the known biology of [[cgas-sting]] as a sensor of cytoplasmic DNA into a chromatin-bound DDR-enhancement role. The NMR cGAS four-aa substitutions confer both prolonged chromatin retention and downstream HR potentiation; transferring these substitutions to human cGAS might replicate the effect in human cells (not yet tested). #gap/no-mechanism
- **cGAS-centric aging attenuation:** The paper reports that the same NMR cGAS properties that potentiate HR "contribute to cellular and tissue aging suppression, extending lifespan" (DOI lookup summary). This links enhanced RAD50 recruitment — downstream of prolonged cGAS chromatin retention — to organism-level lifespan extension in a mammalian system. #gap/needs-replication

**Citation limitation:** Chen 2025 is closed-access (oa_status: closed; not_oa) and the local PDF is not available. The above is sourced from the abstract and DOI lookup only. Specific mechanistic details (co-IP data, focus quantification, dose-response) are not independently accessible. #gap/no-fulltext-access

## Pathway membership

- [[dna-damage-response]] — upstream sensor; RAD50/MRN is the first responder to DSBs
- [[homologous-recombination]] — initiates end resection that licenses HR; required for productive RAD51 loading
- [[non-homologous-end-joining]] — MRN participates in early DSB detection upstream of Ku; pathway choice is competitive

## Key interactors

- [[mrn-complex]] — RAD50's obligate complex; structural and functional description of MRE11–RAD50–NBS1 lives there
- [[atm]] — master DDR kinase; MRN (requiring RAD50's end-tethering and NBS1-ATM contact) is required for ATM activation at DSBs [^leepaull2005]
- [[ku70-ku80]] — NHEJ sensor; competes with MRN at DSB ends for pathway commitment
- [[brca2]] — downstream of MRN-initiated resection; loads RAD51 onto ssDNA for HR
- [[rpa]] — coats the 3' ssDNA overhangs produced by MRN-initiated resection
- [[p53]] — phosphorylated at Ser15 by ATM activated downstream of MRN sensing; links DSB signaling to cell-fate decisions
- [[cgas-sting]] — cGAS chromatin retention potentiates FANCI–RAD50 interaction and HR (Chen 2025) [^chen2025]; separately, unrepaired DSB fragments are a cGAS-activating ligand

## Druggability

**Tier 3 — predicted druggable (research stage only; no aging-context clinical drug exists).**

No approved drug targets RAD50 directly. The [[mrn-complex]] page (druggability tier 3) notes that small-molecule MRE11 inhibitors (mirin, PFM series) are research tools. RAD50 structural features — the ATP-binding site, the zinc-hook CXXC motif — are in principle druggable. Zinc-hook disruption (via CXXC-competitive agents) would sever end-tethering, and ATPase-cycle inhibitors could lock RAD50 in a non-productive conformation.

**Aging-context rationale:** As with the MRN complex as a whole, the therapeutic direction for aging biology is the inverse of standard oncology logic. Inhibiting RAD50 would worsen genomic instability — the relevant aging target is maintaining or restoring RAD50 function in aged tissues. Allosteric activators, FANCI–RAD50 interaction promoters, or approaches mimicking NMR-cGAS chromatin retention (Chen 2025) represent speculative but mechanistically grounded strategies. None has entered clinical or late-preclinical development. #gap/no-mechanism

Open Targets Platform API was unavailable during seeding (HTTP 500). Tier 3 assignment based on MRN complex page precedent and absence of clinical-stage compounds in DrugBank/ChEMBL. Recommend re-checking via `api.platform.opentargets.org` on next lint pass.

## Knowledge gaps and limitations

- `#gap/needs-replication` — RAD50 protein levels, complex stability, and end-tethering activity have not been directly quantified in aged primary human cells. The HR efficiency decline with age (Li/Mao 2016 [^li2016]) was not decomposed into MRN vs RAD51 vs BRCA1/2 contributions.
- `#gap/needs-replication` — FANCI–RAD50 interaction as a regulatory node of HR (Chen 2025 [^chen2025]): whether this interaction is the primary HR-rate-limiting step in aged human cells, or whether it is a species-specific enhancement operative in NMR, requires follow-up.
- `#gap/no-fulltext-access` — Chen 2025 (doi:10.1126/science.adp5056) is closed-access (not_oa, no local PDF). Mechanistic details beyond the abstract are not available for verification.
- `#gap/no-mechanism` — Precise role of RAD50's ATP hydrolysis cycle in licensing vs inhibiting MRE11 nuclease activity in *aged* cells has not been studied.
- `#gap/no-mechanism` — Whether EPAS1-driven RAD50 transcription (Li 2023 [^li2023]) contributes to the age-associated decline in HR efficiency has not been tested in aged human tissues.
- `#gap/needs-human-replication` — EPAS1/RAD50 telomere-protection axis studied primarily in bat cells; replicated with human pulmonary endothelial cells in culture only; not tested in aged human tissue.
- `#gap/needs-canonical-id` — Open Targets Platform druggability tier was not retrievable (API error at seeding); tier 3 is inferred from MRN complex page context. Re-verify via Ensembl ID ENSG00000113522 on next lint pass.
- `#gap/unsourced` — MRN complex page records HGNC:9817 for RAD50; UniProt Q92878 confirms HGNC:9816. The discrepancy is noted but correction of the MRN complex page is deferred to the next propagation pass.

## See also

- [[mrn-complex]] — the parent heterotrimer page; architecture, DSB sensing mechanism, disease syndromes, and pharmacology are described in detail there
- [[dna-damage-response]] — pathway MOC for the full DDR signaling network
- [[homologous-recombination]] — pathway page for HR; RAD50-initiated resection is the upstream licensing step
- [[non-homologous-end-joining]] — competing DSB repair pathway
- [[atm]] — verified; master DDR kinase activated downstream of MRN
- [[ku70-ku80]] — NHEJ sensor competing with MRN at break ends
- [[brca2]] — downstream of MRN resection
- [[genomic-instability]] — hallmark that RAD50 function directly protects against
- [[cellular-senescence]] — downstream outcome when MRN-initiated repair fails
- [[cgas-sting]] — innate immune sensor; chromatin-bound cGAS potentiates FANCI–RAD50 interaction (Chen 2025)

## Footnotes

[^hopfner2002]: doi:10.1038/nature00922 · Hopfner KP et al. · *Nature* 2002 · in-vitro (crystal structure + yeast genetics) · model: Pyrococcus RAD50 zinc-hook crystal structure (2.2 Å) + human/Pyrococcus EM + yeast C1G/C2G mutants · locally available (see [[mrn-complex]] footnotes)

[^paullgellert1998]: doi:10.1016/s1097-2765(00)80097-0 · Paull TT, Gellert M · *Molecular Cell* 1998 · in-vitro (biochemical reconstitution) · model: purified human MRE11 + RAD50 (baculovirus-expressed) · locally available (see [[mrn-complex]] footnotes)

[^paull1999genes]: doi:10.1101/gad.13.10.1276 · Paull TT, Gellert M · *Genes & Development* 1999 · in-vitro (biochemical reconstitution) · model: purified human MRE11/RAD50/NBS1 triple complex · locally available (see [[mrn-complex]] footnotes)

[^leepaull2005]: doi:10.1126/science.1108297 · Lee JH, Paull TT · *Science* 2005 · in-vitro (reconstituted human proteins) · model: recombinant human MRN + ATM · PMID: 15790808 · #gap/no-fulltext-access (not_oa, no PMC deposit; cross-checked via [[atm]] and [[mrn-complex]])

[^lavin2015]: doi:10.3390/biom5042877 · Lavin MF et al. · *Biomolecules* 2015 · review · model: human DDR (ATM-dependent phosphorylation of MRN subunits) · locally available (see [[mrn-complex]] footnotes)

[^waltes2009]: doi:10.1016/j.ajhg.2009.04.010 · Waltes R, Kalb R, Gatei M, Kijas AW, Stumm M, Sobeck A, Wieland B, Varon R, Lerenthal Y, Lavin MF, Schindler D, Dörk T · *Am J Hum Genet* 2009 · n=1 (proband; compound heterozygous RAD50 mutations) · case-report + cell biology · model: patient fibroblasts + wild-type RAD50 rescue · PMID: 19409520 · citation percentile: 100% (256 citations) · not locally downloaded (status: pending, bronze OA)

[^ragamin2020]: doi:10.1002/ajmg.a.61570 · Ragamin A et al. · *Am J Med Genet A* 2020 · n=1 + literature review · case-report · model: RAD50-deficient patient cells · PMID: 32212377 · not locally downloaded (status: pending, hybrid OA)

[^takagi2023]: doi:10.1007/s10875-023-01591-8 · Takagi M et al. · *J Clin Immunol* 2023 · n=1 · case-report · model: compound heterozygous RAD50 patient (p.Arg83His + p.Glu485Ter) · PMID: 37794136

[^bousset2024]: doi:10.1172/JCI178528 · Bousset K et al. · *J Clin Invest* 2024 · in-vitro + patient cells · model: deep intronic RAD50 variant; aberrant splicing mechanism · PMID: 39666384 · gold OA (status: pending download)

[^li2016]: doi:10.1038/cdd.2016.65 · Li Z, Zhang W, Chen Y, Guo W, Zhang J, Tang H, Xu Z, Zhang H, Tao Y, Wang F, Jiang Y, Sun FL, Mao Z · *Cell Death Differ* 2016 · observational · n=50 human fibroblast lines (donors aged 16–75 yr) · model: human primary fibroblasts, age-stratified · PMID: 27391797 · citation percentile: 100% · not locally downloaded (status: pending)

[^li2023]: doi:10.24272/j.issn.2095-8137.2022.531 · Li KQ et al. · *Zoological Research* 2023 · in-vitro (bat fibroblasts + human pulmonary endothelial cells) · model: EPAS1 knockdown/overexpression; bleomycin-induced telomere damage · PMID: 37070589 · diamond OA (status: pending download)

[^chen2025]: [[studies/chen-2025-nmr-cgas-hr-repair]] · *Science* 2025 · doi:10.1126/science.adp5056 · PMID: 41066557 · in-vivo + cell biology · model: naked mole-rat cGAS variants in NMR and human cells · #gap/no-fulltext-access (closed-access; not_oa; abstract-only citation) · citation count: 17; FWCI: 44.04 (100th percentile impact)
