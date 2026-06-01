---
type: protein
aliases: [FANCD2, FA-D2, Fanconi anemia group D2 protein, FA complementation group D2]
uniprot: Q9BXW9
ncbi-gene: 2177
hgnc: 3585
mouse-ortholog: Fancd2
ensembl: ENSG00000144554
genage-id: null
pathways:
  - "[[dna-damage-response]]"
  - "[[homologous-recombination]]"
hallmarks: ["[[genomic-instability]]"]
sens-categories: []
druggability-tier: 4
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes:
  - "[[genomic-instability]]"
verified: true
verified-date: 2026-05-13
verified-by: claude
verified-scope: "All 6 primary-source PDFs read end-to-end: Garcia-Higuera 2001 (Mol Cell), Longerich 2014 (NAR), Alcon 2020 (NSMB), Garaycoechea 2018 (Nature; PMC author manuscript), Rossi 2007 (Nature), Rall-Scharpf 2025 (NAR). Canonical identifiers verified via NCBI esummary (Gene 2177), Ensembl REST (ENSG00000144554), and UniProt REST (Q9BXW9). Garaycoechea 2012 (not_oa) not read — claim tagged #gap/no-fulltext-access. Schlacher 2012 fork-protection citation not verified — gap tag retained. FA-D2 disease prevalence (3-5%) not verified against registry source — gap tag retained."
---

# FANCD2 (Fanconi anemia complementation group D2)

FANCD2 is a 1,451-amino-acid nuclear DNA-repair protein that heterodimerizes with [[fanci]] to form the **ID2 complex** — the central regulatory hub of the [[Fanconi anemia pathway|Fanconi anemia (FA) pathway]]. Monoubiquitination of FANCD2 at Lys-561 activates the ID2 complex, enabling it to clamp onto stalled replication forks at interstrand crosslinks (ICLs) and scaffold the downstream repair machinery. Loss-of-function mutations in FANCD2 cause Fanconi anemia complementation group D2, a segmental progeroid syndrome. The pathway is also relevant to aging through endogenous aldehyde-induced ICL accumulation in hematopoietic stem cells across a normal lifespan.

## Identity

- **UniProt:** Q9BXW9 (FANCD2_HUMAN) — Swiss-Prot (manually reviewed)
- **NCBI Gene:** 2177
- **HGNC:** 3585 (approved symbol: FANCD2; previous symbols: FACD, FANCD)
- **Ensembl:** ENSG00000144554; chromosome 3p25.3, positions 10,026,370–10,101,937 (GRCh38)
- **Mouse ortholog:** Fancd2; one-to-one ortholog
- **Length:** 1,451 amino acids (canonical isoform; UniProt Q9BXW9)
- **OMIM:** MIM 227646 (Fanconi anemia complementation group D2)
- **GenAge:** not listed — FANCD2 is absent from the GenAge Build 21 human gene set; its aging relevance is mediated through the FA pathway rather than a direct longevity-GWAS or experimental-lifespan-extension phenotype #gap/needs-canonical-id

**Naming note.** FANCD2 (HGNC:3585, UniProt Q9BXW9) is distinct from FANCD1, which is an alternative designation for BRCA2 (HGNC:1101). The FA nomenclature allocates complementation group letters to genes whose biallelic mutations cause the FA phenotype; both FANCD1 and FANCD2 map to FA, but they are unrelated proteins with different chromosomal locations and molecular functions.

## Key functional domains and PTMs

FANCD2 adopts a solenoid-fold architecture (analogous to FANCI) that enables it to encircle double-stranded DNA as part of the ID2 heterodimer. Key structural features (UniProt Q9BXW9; Alcon et al. 2020 — note: Alcon 2020 used *Gallus gallus* orthologs; the monoubiquitination site is K563 in chicken, equivalent to human K561; the architecture is highly conserved across vertebrates) [^alcon2020]:

- **N-terminal region (residues 1–291)** — FANCE interaction interface
- **Central region (residues 248–359)** — BRCA2 binding region
- **Disordered linkers** at residues 1–37, 868–906, and 1396–1451

Key post-translational modifications:

- **Monoubiquitination at Lys-561** — the critical activating mark. Deposited by the FA core complex (E3 ligase: FANCL; E2 ligases: UBE2T or UBE2W) during S-phase and in response to ICL-inducing genotoxic stress. Monoubiquitination at K561 is required for chromatin loading, nuclear focus formation, and downstream repair-factor recruitment [^garcia-higuera2001][^alcon2020].
- **ATM-dependent phosphorylation** at Ser-222, Ser-1401, and Ser-1404 — modify FANCD2 in response to ionizing radiation and DNA double-strand breaks; contribute to checkpoint signaling (UniProt Q9BXW9 PTM table; individual primary source for ATM site assignment not confirmed in Garcia-Higuera 2001, which predates the site mapping literature)
- Additional phosphorylation sites: Ser-8, Ser-592, Ser-594, Ser-717, Ser-1257, Ser-1412, Ser-1423, Thr-1426, Ser-1435 (UniProt Q9BXW9 PTM annotation) #gap/needs-verification — individual-site functional assignments (particularly ATR vs ATM attribution) require primary-source cross-check against site-mapping studies

## Function: the Fanconi anemia core pathway and ICL repair

The FA pathway resolves DNA interstrand crosslinks — covalent lesions that link both strands of the double helix and block replication fork progression. The pathway involves 23 FA proteins organized in three sequential tiers:

### Tier 1 — FA core complex (sensor and E3 ligase)

The upstream FA core complex (FANCA, FANCB, FANCC, FANCE, FANCF, FANCG, FANCL, FANCM, FAAP24, FAAP100, FAAP20) recognizes the stalled fork and monoubiquitinates the ID2 complex. FANCL is the catalytic E3 ubiquitin ligase; it works with UBE2T (E2 enzyme) to transfer a single ubiquitin to Lys-561 of FANCD2 and Lys-523 of [[fanci]] simultaneously [^longerich2014]. The two monoubiquitination events are cooperative and partially interdependent: DNA strongly stimulates FANCD2 monoubiquitination within the ID2 complex, while FANCD2 ubiquitination is largely independent of FANCI ubiquitination in the reconstituted in-vitro system [^longerich2014].

### Tier 2 — ID2 complex (central effector hub)

FANCD2 and [[fanci]] form the constitutive **ID2 heterodimer**. Upon monoubiquitination of FANCD2 (the predominant and rate-limiting ubiquitination event), cryo-EM structural data from the *Gallus gallus* ortholog show the ID2 complex undergoes a conformational shift from an open, inactive form to a closed "clamp" that encircles dsDNA (~15–20 bp channel), with ubiquitin acting as a covalent molecular pin locking the clamp at the back of the hinge interface [^alcon2020]. FANCI monoubiquitination is inefficient with native FA core complex in vitro and is not essential for DNA crosslink repair [^alcon2020]. This monoubiquitinated ID2 clamp localizes to chromatin at the stalled replication fork and recruits downstream nucleases and repair factors.

A key insight from Garcia-Higuera et al. (2001) — the founding paper for FANCD2 monoubiquitination — is that the activated (monoubiquitinated, long-form) FANCD2 colocalizes with BRCA1 at ionizing radiation-induced nuclear foci and in synaptonemal complexes of meiotic chromosomes, linking the FA pathway to the broader BRCA-mediated genome-maintenance network [^garcia-higuera2001]. Importantly, this paper showed that monoubiquitination and nuclear focus formation require an intact FA core complex (FANCA, FANCC, FANCG, FANCF), confirming FANCD2 acts downstream of the FA complex.

### Tier 3 — downstream nucleases and HR factors

Monoubiquitinated ID2 scaffolds:

- **SLX4 / FANCP** — platform for three endonucleases (SLX1, MUS81-EME1, XPF-ERCC1); coordinates dual incisions flanking the ICL (unhooking)
- **FAN1 nuclease** — additional ICL-unhooking endonuclease
- **ERCC1-XPF** — canonical NER nuclease repurposed for ICL unhooking
- **BRCA2 / FANCD1** — loads RAD51 onto resected ssDNA for homologous recombination
- **PALB2 / FANCN** — bridges BRCA1 and BRCA2 at the ICL break
- **RAD51** — performs strand invasion on the intact sister-chromatid template

The FA pathway thus integrates ICL unhooking (nucleotide excision repair-like chemistry), translesion synthesis (to fill in the gap), and homologous recombination (to restore the broken strand) in a precisely sequenced cascade.

**Termination.** After repair is complete, USP1–UAF1 removes the K561 monoubiquitin mark from FANCD2 (and K523 from FANCI), returning the ID2 complex to its inactive open state. This deubiquitination step is required to license subsequent rounds of repair. Note: Longerich 2014 demonstrates the ubiquitination mechanism in vitro; the USP1–UAF1 deubiquitination cycling is established by earlier literature cited therein [^longerich2014].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | All 23 FA proteins are human genes; canonical pathway |
| Phenotype conserved in humans? | yes | Biallelic mutations cause Fanconi anemia in humans |
| Replicated in humans? | yes | FA is the direct human loss-of-function disease |

## Function: replication fork protection

Beyond ICL repair, FANCD2 has a mechanistically distinct role in **protecting nascent DNA at stalled replication forks from nuclease degradation**. At hydroxyurea- or aphidicolin-stalled forks, FANCD2 (and FANCI) shield the nascent strand from MRE11 and DNA2 nuclease-mediated degradation, preserving fork integrity for resumption of replication. This function overlaps with the BRCA1/BRCA2 fork-protection mechanism and is independent of ICL recognition. #gap/needs-verification — the fork protection function was described in subsequent biochemical studies (Schlacher et al. 2012 *Cell*, doi:10.1016/j.cell.2012.05.003 — not yet archived) that should be cited here; Garcia-Higuera 2001 does not address fork protection and has been removed as the citation for this claim.

## Disease: Fanconi anemia complementation group D2

Biallelic loss-of-function mutations in FANCD2 cause **Fanconi anemia (FA) subgroup D2** (OMIM 227646). FANCD2-deficient FA (FA-D2) accounts for approximately 3–5% of all FA cases #gap/needs-verification — prevalence estimates vary by registry; cite Mehta & Ebens GeneReviews or IFAR data on primary-source verification.

**Clinical features (shared across FA subgroups):**

- **Bone marrow failure** — progressive pancytopenia; median onset ~7 years of age; the primary cause of morbidity and early death in FA
- **Congenital malformations** — radial-ray limb defects, short stature, café-au-lait spots, renal anomalies, cardiac defects; present in ~75% of patients
- **Cancer predisposition** — markedly elevated risk of acute myeloid leukemia (AML) and head and neck squamous cell carcinoma (HNSCC); solid tumors arise at younger ages than in the general population
- **Cellular hypersensitivity** — FA cells show chromosomal breakage and hypersensitivity to DNA interstrand crosslinking agents (diepoxybutane [DEB] and mitomycin C [MMC]); the DEB/MMC chromosomal breakage test is the canonical diagnostic assay for FA

**Treatment.** Hematopoietic stem cell transplant (HSCT) is the only curative treatment for bone marrow failure in FA. No small-molecule FANCD2-targeted therapy exists. Androgen therapy (oxymetholone, danazol) provides transient improvement in blood counts but is not curative.

## Aging relevance

### Fanconi anemia as a segmental progeroid syndrome

FA recapitulates selected features of accelerated aging — progressive bone marrow failure, cancer predisposition, and genomic instability — in specific tissues, without reproducing the full aging phenotype. This progeroid overlap reflects the dependence of long-lived stem cell populations (particularly HSCs) on continuous FA-pathway activity for genome maintenance across decades.

Rossi et al. (2007) demonstrated that wild-type HSCs accumulate DNA damage (measured by gamma-H2AX foci) with age, and that this damage — not HSC depletion per se — underlies age-related loss of HSC reconstitution and self-renewal capacity [^rossi2007]. Mouse models with defined DNA-repair deficiencies in NER (XPD-TTD, Ercc1-/-), NHEJ (Ku80-/-), and telomere maintenance (mTR-/-) phenocopy this age-related functional decline at accelerated tempo, establishing that deficits in DNA repair pathways are a direct cause of HSC aging, not a correlate [^rossi2007]. **Note:** Rossi 2007 did not study FA pathway mutants; the relevance to FANCD2 is by pathway analogy — FANCD2 and the FA pathway represent an additional DNA-repair axis whose age-dependent attrition would be predicted to cause similar HSC functional decline. #gap/needs-human-replication — Rossi 2007 used mouse models; direct equivalents in human HSC aging require further study.

### Endogenous aldehyde-induced ICL damage and the FA pathway across the lifespan

ICLs are not exclusively exogenous (chemotherapy-induced) lesions. Endogenous aldehydes — principally formaldehyde (from one-carbon metabolism), acetaldehyde (from alcohol catabolism), and lipid-derived aldehydes (from peroxidation) — form ICLs constitutively as metabolic byproducts. The FA pathway must therefore operate continuously throughout life to repair this ongoing genotoxic burden.

Two landmark Garaycoechea / Patel laboratory papers established the pathological significance of endogenous aldehydes in the FA context:

- **Garaycoechea et al. 2012** (*Nature*) — HSCs deficient in the aldehyde-metabolizing enzyme ALDH2 (in combination with FA-pathway loss via *Fanca* knockout) showed catastrophic genotoxic attrition, demonstrating that endogenous aldehyde generation is the dominant ICL source in HSCs and that the FA pathway is the primary defense [^garaycoechea2012]. Note: the 2012 paper (not_oa locally) used *Aldh2-/-; Fanca-/-* mice, not *Fancd2-/-* — the FANCD2-specific double-KO model is from the 2018 paper. #gap/no-fulltext-access — Garaycoechea 2012 is closed-access; the Fanca genotype is from the 2018 paper's citation of the 2012 work; cross-check against 2012 primary source when accessible.
- **Garaycoechea et al. 2018** (*Nature*) — expanded this to alcohol exposure: ethanol metabolism through ALDH2 produces acetaldehyde, which forms ICLs and mutates HSCs; Fancd2/Aldh2 double-KO mice showed dramatically accelerated bone marrow failure, providing a mechanistic link between alcohol consumption, aldehyde accumulation, and HSC genomic instability [^garaycoechea2018].

These findings imply that partial or age-related attrition of FA-pathway efficiency in wild-type individuals — through somatic mutations, epigenetic silencing, or protein-level decline — would progressively reduce ICL-repair capacity and accelerate genomic instability in HSCs and other long-lived cells. This is an active area of investigation. #gap/no-mechanism — the mechanism by which FA-pathway efficiency declines in normal aging (as opposed to FA disease) is not established.

### Sex-specific aging of the FA pathway

A 2025 study in cycling peripheral blood lymphocytes (PBL) from human donors of different age and sex (young female n=44, mean age 23.0 yr; young male n=41, mean 22.4 yr; old female n=60, mean 74.3 yr; old male n=54, mean 74.1 yr) found that FA pathway activity declines specifically in older women, while older men upregulate FA core complex components and PARP-dependent repair [^rall2025]. Specifically, FANCD2 protein levels were decreased ~50% in PBL from older women but not men (Fig. 5D), and FANCD2 nuclear foci formation was strongly reduced in older women but not men (Fig. 5F). At the transcriptional level, men upregulated multiple FA core complex genes with age (FANCA, FANCL, FANCC, PARP1, RECQL4, SAMHD1, FANCC, SMC5, EME2 all upregulated in the AgeMale comparison). Older women show a shift toward translesion synthesis (TLS) as an alternative ICL-bypass route — evidenced by increased mono-Ub PCNA signal, elevated POLη foci, and significantly lower IC50 to POLη inhibitor (4.5-fold) and POLι inhibitor (2.9-fold) in old versus young women — a less faithful mechanism that may increase mutagenesis. The study also found these results replicated at lower magnitude in hematopoietic stem and progenitor cells (HSPC), where female CB-derived HSPC showed higher FANCD2 signal than older female HSPC. This sex-specific divergence in FA-pathway aging has potential implications for sex differences in age-related cancer risk and replication stress. #gap/needs-replication — single study; PBL and HSPC in vitro; mechanism and broader tissue generalizability are unknown.

### FANCD2 in the ID2 complex and broader DSB repair context

The Chen 2025 *Science* study — while focused on the sister protein [[fanci]] — identifies a broader role for the ID2 complex beyond canonical ICL repair. The FANCI–RAD50 interaction at general DSBs (enhanced by chromatin-retained cGAS) implicates the FA pathway in a wider genome-surveillance context. Whether FANCD2 is co-recruited in this cGAS-enhanced DSB response requires direct investigation; the abstract of Chen 2025 reports the interaction for FANCI, not FANCD2 specifically. #gap/needs-verification

## Pathway membership

- [[dna-damage-response]] — ATR/ATM → FA core complex → ID2 monoubiquitination arm
- [[homologous-recombination]] — ID2 complex scaffolds BRCA2/PALB2/RAD51 at ICLs
- Fanconi anemia pathway (no dedicated wiki page yet; closest node is [[dna-damage-response]]) #stub

## Key interactors

| Partner | Interaction type | Notes |
|---|---|---|
| [[fanci]] | Constitutive heterodimer (ID2 complex) | Mutual stabilization; co-monoubiquitinated by FA core complex; K523 on FANCI, K561 on FANCD2 |
| FANCL | FA core complex E3 ligase | Catalyzes K561 monoubiquitination of FANCD2 with UBE2T |
| USP1–UAF1 | Deubiquitinase | Removes K561 monoubiquitin mark; terminates repair signal |
| [[mrn-complex]] | Indirect (at ICL-induced DSBs) | MRN (MRE11-[[rad50]]-NBS1) senses ICL-induced DSBs; acts upstream of ATM activation |
| [[atm]] | Kinase | Phosphorylates FANCD2 Ser-222, Ser-1401, and Ser-1404 after DSBs (UniProt Q9BXW9 PTM annotation) |
| [[atr]] | Kinase | Phosphorylates FANCD2 at multiple sites at stalled forks |
| [[brca2]] / FANCD1 | Downstream HR factor | Scaffolded by monoubiquitinated ID2; delivers RAD51 |
| [[brca1]] | Interaction at nuclear foci | Monoubiquitinated FANCD2 colocalizes with BRCA1 at DNA damage sites [^garcia-higuera2001] |
| RAD51 | HR effector | Downstream of BRCA2; performs strand invasion |

## Druggability and interventions

**Druggability tier: 4** (predicted druggable; no clinical-stage probe or aging-validated modulator exists). FANCD2 itself has no approved drug, investigational drug, or clinical-stage compound targeting it for any indication. The Fanconi anemia field has focused on HSCT (curative for bone marrow failure), gene therapy approaches, and ALDH2/alcohol-avoidance as protective measures.

**Aging-context:** No pharmacological intervention targeting FANCD2 directly for aging exists. The FA pathway is a chemosensitization target in cancer: FA-deficient tumors are hypersensitive to ICL-inducing agents (cisplatin, mitomycin C, melphalan), and PARP inhibitors are synthetic-lethal in FA-deficient cells (FA-pathway deficiency + PARP inhibitor = catastrophic replication failure). These are oncology applications, not aging applications. #gap/long-term-unknown — whether boosting FA-pathway activity in aging cells (e.g., via small-molecule activation of FANCL E3 ligase activity or aldehyde detoxification) could slow ICL-driven genomic instability in aging is unexplored.

**Potential aging strategy (speculative):** Aldehyde detoxification (via ADH/ALDH enzyme boosting) is a conceptually tractable approach to reducing endogenous ICL substrate, which would reduce the demand on the FA pathway in aging stem cells. This is an inference from the Garaycoechea 2012/2018 papers and is not a validated intervention. #gap/no-mechanism

## Limitations and knowledge gaps

1. **Aging-specific function not fully established.** FANCD2 aging-relevance derives from the FA-as-segmental-progeria inference and endogenous-aldehyde ICL data, not from a dedicated study of FANCD2 in normal human aging. #gap/needs-human-replication
2. **GTEx aging correlation unknown.** Whether FANCD2 expression or protein levels decline with age in human tissues has not been curated from GTEx. #gap/needs-gtex-query
3. **Mendelian randomization not tested.** FA mutations are recessive and cause disease rather than quantitative variation, making germline MR instrument design impractical. The `mr-causal-evidence: not-tested` designation reflects this.
4. **GenAge absence.** FANCD2 is not listed in GenAge Build 21, consistent with the distinction between "gene whose mutation causes accelerated-aging disease" (FA) and "gene directly shown to extend lifespan in model organisms." If GenAge adds FANCD2 in a future build, update `genage-id:` accordingly.
5. **Schema note — `mouse-ortholog:` field.** This page uses `mouse-ortholog: Fancd2` in frontmatter, which is not part of the canonical `type: protein` schema in CLAUDE.md. The field is informative but non-standard; it should either be promoted to the schema or moved to the page body. Flagged for schema documentation update.
6. **Fanconi anemia pathway page absent.** No `pathways/fanconi-anemia-pathway.md` exists in this wiki. Cross-references use `[[dna-damage-response]]` and `[[homologous-recombination]]` as proxies. The Fanconi anemia pathway merits its own page given the 23-protein cascade. #stub
7. **Fork protection mechanism citation.** The fork protection function of FANCD2 (protecting nascent DNA from MRE11/DNA2 degradation) remains #gap/needs-verification — the primary source is Schlacher et al. 2012 *Cell* (doi:10.1016/j.cell.2012.05.003); the Garcia-Higuera 2001 citation has been removed from this claim as that paper does not address fork protection. Schlacher 2012 is not yet archived; include on the next verification pass.
8. **Alcon 2020 ortholog caveat.** The structural cryo-EM data underlying the ID2 closed-clamp model are from *Gallus gallus* FANCD2/FANCI (K563/K525), not human proteins. The human canonical ubiquitination sites K561/K523 are equivalent but the structural data are not from human proteins. A human cryo-EM structure would be needed to confirm any human-specific conformational differences.
9. **FA-D2 prevalence.** The ~3–5% estimate for FA-D2 among all FA subgroups is from memory and requires confirmation against a registry source (IFAR or GeneReviews). #gap/needs-verification

## Footnotes

[^garcia-higuera2001]: doi:10.1016/s1097-2765(01)00173-3 · Garcia-Higuera I et al. · *Molecular Cell* 2001 · cell-line (lymphoblasts, fibroblasts, HeLa) + biochemical · n=N/A · key results: (1) FANCD2-S (155 kDa) → FANCD2-L (162 kDa) shift is monoubiquitination at K561 confirmed by mass spectrometry; (2) monoubiquitination requires intact FA core complex (FANCA, FANCC, FANCG, FANCF); (3) FANCD2(K561R) mutant abolishes monoubiquitination, focus formation, and MMC resistance complementation; (4) monoubiquitinated FANCD2 colocalizes with BRCA1 at ionizing radiation-induced nuclear foci and in synaptonemal complexes; ATM phosphorylation sites (Ser-222, Ser-1401, Ser-1404) are NOT reported in this paper · cited_by: 1,201 · archive: downloaded

[^alcon2020]: doi:10.1038/s41594-020-0380-1 · Alcon P et al. · *Nat Struct Mol Biol* 2020 · cryo-EM structural + biochemical · organism: *Gallus gallus* (chicken) FANCD2/FANCI orthologs (K563/K525 monoubiquitination sites; human equivalents K561/K523) · resolution: ~3.8 Å (ubD2–I), ~4.1 Å (D2–I) · key results: (1) unmodified D2–I has open conformation with buried monoubiquitination sites; (2) monoubiquitinated D2–I (only FANCD2 K563 monoubiquitinated, FANCI K525 not ubiquitinated in vitro) adopts closed clamp enclosing ~15–20 bp dsDNA channel; (3) ubiquitin acts as covalent molecular pin at FANCD2/FANCI interface; (4) isolated FANCD2 forms autoinhibited homodimer; (5) FANCI displaces FANCD2 homodimer to form D2–I heterodimer · cited_by: 119 · archive: downloaded

[^longerich2014]: doi:10.1093/nar/gku198 · Longerich S et al. · *Nucleic Acids Research* 2014 · in-vitro biochemical reconstituted system (purified human proteins) · key results: (1) UBE2T (E2) + FANCL (E3) monoubiquitinates FANCD2 K561 and FANCI K523; (2) purified ID2 complex is poor substrate without DNA; (3) duplex/branched DNA (≥41 bp) strongly stimulates FANCD2 monoubiquitination; chromatinized DNA is less effective than free DNA (2–3× less); (4) FANCD2 monoubiquitination in the ID2 complex is largely independent of FANCI ubiquitination; FANCI ubiquitination is less robust than FANCD2; (5) patient-derived FANCI mutations impairing DNA binding attenuate DNA-stimulated FANCD2 monoubiquitination · cited_by: 83 · archive: downloaded

[^garaycoechea2012]: doi:10.1038/nature11368 · Garaycoechea JI et al. · *Nature* 2012 · in-vivo (mouse KO) · Aldh2-deficient HSCs show catastrophic genotoxic attrition compounded by FA-pathway deficiency; endogenous aldehydes are the dominant ICL source in HSCs · cited_by: 388 · archive: not_oa

[^garaycoechea2018]: doi:10.1038/nature25154 · Garaycoechea JI et al. · *Nature* 2018 · in-vivo (mouse KO + ethanol exposure) · Aldh2-/-Fancd2-/- double-KO mice develop severe HSC attrition and spontaneous bone marrow failure; alcohol exposure exacerbates this; ~60% of double-KO metaphases showed chromosomal aberrations after ethanol; p53 deletion completely rescues HSC survival but not genomic instability; endogenous and alcohol-derived acetaldehdye form DSBs repaired by HR and FA pathway · cited_by: 396 · archive: OA via PMC6047743

[^rossi2007]: doi:10.1038/nature05862 · Rossi DJ et al. · *Nature* 2007 · in-vivo (mouse; aged WT C57BL/6 and DNA-repair-deficient strains) · model: mTR-/- (G3 telomere-deficient), XPD-TTD (NER-deficient), Ku80-/- (NHEJ-deficient) mice; n=8–13 per cohort · gamma-H2AX foci accumulate in aged WT LT-HSCs (82% of old HSCs stained positive for multiple foci); repair-deficient mice show functional HSC decline at accelerated tempo; not FA-pathway models — FANCD2 pathway analogy is by inference · cited_by: 1,082 · archive: completed (PDF available locally)

[^rall2025]: doi:10.1093/nar/gkaf498 · Rall-Scharpf M et al. · *Nucleic Acids Research* 2025 · observational + functional (cycling human PBL + HSPC from healthy donors) · n: young female 44 (mean 23.0 yr), young male 41 (mean 22.4 yr), old female 60 (mean 74.3 yr), old male 54 (mean 74.1 yr) · key results: FANCD2 protein ~50% decreased in old women but not men (western blot, Fig 5D); FANCD2 nuclear foci strongly reduced in old women not men (Fig 5F); old women show elevated mono-Ub PCNA, increased POLη foci, 4.5-fold lower IC50 to POLη inhibitor; old men show upregulation of FANCA/FANCL/FANCC/PARP1/RECQL4 transcripts and 3.3-fold higher PARP inhibitor sensitivity vs young men; PA pathway upregulated transcriptionally in men, downregulated at protein level in women · PMID: 40530696 · archive: completed (PDF available locally)
