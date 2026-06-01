---
type: protein
aliases: [MSH2, HNPCC, HNPCC1, FCC1, hMSH2, MutS homolog 2]
uniprot: P43246
ncbi-gene: 4436
hgnc: 7325
ensembl: ENSG00000095002
genage-id: null
mouse-ortholog: Msh2
pathways: ["[[mismatch-repair]]"]
hallmarks: ["[[genomic-instability]]"]
sens-categories: []
known-interactors: ["[[msh6]]", "[[msh3]]", "[[mlh1]]", "[[pms2]]", "[[pcna]]", "[[exo1]]", "[[atm]]"]
druggability-tier: 4
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Lamers 2000 (35037523) domain architecture verified against full PDF — 6-domain scheme corrected (core+lever, clamp, ATPase, HTH boundaries and dimerization interface); domain residue numbers confirmed as E. coli MutS by homology, caveat added. UniProt P43246 sequence length (934 aa) and PTMs confirmed via REST API. EXO1 interaction region (601-671) confirmed via UniProt. Le 2015 and Le 2017 claims cross-checked against verified [[mismatch-repair]] page (no re-read of PDFs per SOP). Lynch 2009 gene proportions cross-checked against verified [[mismatch-repair]] page — pending-verification caveat retained. Fishel 1993 (not_oa) unverifiable — tagged #gap/no-fulltext-access. de Wind 1995 download failed (bronze OA but no URL resolved) — unverifiable, tagged #gap/no-fulltext-access. GenAge null confirmed via API (no results). Open Targets druggability tier 4 confirmed (no approved drug targeting MSH2 directly; SM tractability is pocket/ligand only, no clinical drug)."
---


# MSH2 (MutS homolog 2)

The obligate scaffolding subunit of the **mismatch repair (MMR)** recognition machinery. MSH2 heterodimerizes with either MSH6 (forming **MutSα**) or MSH3 (forming **MutSβ**) to recognize and initiate correction of replication errors — base–base mismatches and insertion/deletion loops (IDLs). Germline loss-of-function mutations in MSH2 are the second most common cause of **Lynch syndrome** (hereditary non-polyposis colorectal cancer; HNPCC), accounting for approximately 40% of cases. Somatic MSH2 inactivation or MMR deficiency (dMMR) produces the **microsatellite-instability-high (MSI-H)** phenotype, which dramatically sensitizes tumors to **PD-1 checkpoint blockade**. In the aging context, MMR capacity decline in normal tissues is proposed as a contributor to age-associated [[genomic-instability]], though direct quantitative evidence in human aging cohorts remains sparse.

## Identity

- **UniProt:** P43246 (MSH2_HUMAN)
- **NCBI Gene:** 4436
- **HGNC symbol:** MSH2
- **Ensembl:** ENSG00000095002
- **Mouse ortholog:** Msh2 (highly conserved; near-identical function)
- **Length:** 934 amino acids (canonical isoform)
- **GenAge (human):** not listed #gap/needs-canonical-id — MSH2 is aging-relevant via genomic instability but does not appear in the GenAge human curated set; yeast ortholog entry exists (model organisms database)

## Key functional domains

The domain architecture of MutS/MSH2 was resolved by the 2.2 Å crystal structure of *E. coli* MutS bound to a G·T mismatch [^lamers2000]. **Important caveat: Lamers 2000 is an E. coli MutS homodimer structure; inferences about human MSH2 domain boundaries are by sequence-structural homology mapping, not direct measurement of the human protein.** Residue numbers below are E. coli MutS numbering (as assigned in Figure 2 of Lamers 2000) and are approximate guides for human MSH2 by homology:

- **Mismatch-binding domain** ("the thumbs"; E. coli residues 2–115) — a six-stranded mixed β-sheet with three α-helices. In the human heterodimers (MSH2/MSH6 and MSH2/MSH3), mismatch discrimination is dependent on the partner subunit (MSH3 or MSH6), **not on MSH2**. Human MSH2 has lost many of the DNA-contacting residues present in E. coli MutS, including the side chains that hydrogen bond to the DNA. MSH2's MBD contacts the DNA backbone but does not contribute specific mismatch contacts; specificity is conferred by the partner subunit (MSH6 Phe-loop for base mismatches; MSH3 for IDLs) [^lamers2000].
- **Connector domain** (E. coli residues 116–266) — a mostly parallel β-sheet surrounded by four α-helices; fold resembles the Holliday junction resolvase RuvC. Together with the core domain, it forms the "palm," sharing a large hydrophilic interface (~1,574 Å²). Transmits conformational changes between the MBD and the core/ATPase regions.
- **Core domain and lever helices** (E. coli residues 267–443 and 504–567) — forms a helical bundle. Two α-helices extend from within the core domain as **lever helices** that embrace but do not touch the DNA; these are structural elements of the core domain, not an independent domain. The core and connector together form the structural "palm."
- **Clamp domain** ("the fingertips"; E. coli residues 444–503) — a four-stranded antiparallel β-sheet inserted at the top of the lever helices. Both monomers' clamp domains contact the DNA backbone in a sequence-independent manner over ~13 bp, presenting a positively charged surface to the phosphate backbone. Also contributes to the dimerization interface (sharing 451 Å² contact surface) [^lamers2000].
- **ATPase domain** ("the wrist"; E. coli residues 568–765) — contains the Walker A motif (P-loop); most similar structurally to the ATPase domain of the ABC transporter histidine permease. Drives mismatch-verification and sliding-clamp transitions via ATP hydrolysis. The nucleotide-binding sites are buried in the dimer interface; in the crystal structure ADP is present only in the mismatch-binding monomer, indicating the two ATPase sites are non-equivalent [^lamers2000].
- **HTH domain** (E. coli residues 766–800) — a helix–turn–helix element at the C-terminus involved in dimer contacts (together with the ATPase domain, forms the extensive dimerization interface burying ~2,922 Å²).

**Heterodimerization interface:** The two MutS monomers interact through **two regions**: (1) the clamp domains and (2) the C-terminal ATPase + HTH domains. The dimerization interface in the ATPase/HTH region is extensive (burying ~2,922 Å²) [^lamers2000].

## Function

MSH2 is the obligate shared subunit of two functionally distinct MutS heterodimers [^fishel1993]:

| Heterodimer | Partner | Substrates |
|---|---|---|
| **MutSα** | [[msh6]] | Single-base mismatches; 1–2 nt IDLs |
| **MutSβ** | [[msh3]] | Larger IDLs (2–10 nt) |

Upon mismatch binding, the MSH2-containing heterodimer undergoes an **ATP-dependent conformational switch** that converts it from a mismatch-recognition clamp to a sliding clamp that diffuses along the DNA duplex, recruiting downstream repair effectors at a distance from the original mismatch site [^lamers2000]. The paper proposes that mismatch binding may be retained during the search for a strand-discrimination signal, with the clamp domain threading DNA while the mismatch-binding domain remains tethered. The sliding clamp recruits **MutLα** ([[mlh1]] + [[pms2]]), PCNA, and RFC, which coordinate strand discrimination, EXO1-mediated excision, and Polδ-mediated resynthesis. Full mechanistic detail is on the [[mismatch-repair]] pathway page.

**Key PTMs (UniProt P43246):**
- N6-acetyllysine at K555, K567, K845, K847, K871, K892
- Phosphoserine at S921
- SUMO2 cross-link at K430
- Ubiquitylation at K845, K847, K871, K892 (implicated in protein stability and proteasomal targeting)

## Role in aging

### Genomic instability hallmark

MSH2 is a direct protector against [[genomic-instability]]. MMR efficiency declines with age in mammalian tissues (circumstantial; see gaps below), and loss of MSH2 function in even one allele reduces repair capacity in heterozygous Lynch syndrome carriers — a human experiment-of-nature demonstrating haploinsufficiency for some repair substrates. The accumulation of replication errors that MMR would normally correct is mechanistically consistent with the mutational signatures seen in aged normal tissues.

### Msh2-/- mouse

MSH2 knockout mice develop **lymphomas and gastrointestinal tumors** and have markedly shortened lifespans relative to wild-type controls [^dewind1995]. The MSI-H phenotype is recapitulated in all tumor types. This establishes MSH2 as a longevity-determining gene in mice; the relevant question for aging biology is whether partial MMR attrition (below the threshold of frank cancer) degrades cellular homeostasis in aged normal tissues.

#gap/needs-human-replication — Direct evidence that MMR decline accelerates *non-cancer* aging phenotypes in humans is lacking. The mouse KO data reflects complete loss, not the partial attrition proposed for aged normal tissues.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | MMR is deeply conserved; MSH2 sequence/function near-identical mouse/human |
| Phenotype (MSI-H, cancer) conserved in humans? | yes | Lynch syndrome is a human phenocopy of Msh2-/- mouse cancer phenotype |
| MMR decline with age in normal tissues | partial | Circumstantial; no high-quality age-stratified quantitative study confirmed for this page |

### Lynch syndrome (germline MSH2 LOF)

Germline heterozygous loss-of-function mutations in MSH2 cause **Lynch syndrome type 1** — the most common hereditary CRC syndrome. MSH2 mutations account for approximately 40% of Lynch syndrome kindreds (MLH1 ~50%; MSH6 ~7–10%; PMS2 ~5%) [^lynch2009-via-mmr]. Lifetime CRC risk in MSH2 carriers is approximately 40–80%, with substantial endometrial cancer risk in female carriers (40–60%). MSH2 mutations are also enriched in Lynch-associated **urinary tract cancers** relative to MLH1 mutations.

MSH2 mutations span the full gene: missense, nonsense, frameshift, splice-site, and large deletion/rearrangement classes are all represented. MSH2 also underlies **Muir-Torre syndrome** (a Lynch variant with sebaceous gland tumors + internal malignancies).

**Autosomal recessive MMR deficiency (Constitutional MMR Deficiency, CMMRD):** biallelic MMR mutations — homozygous or compound heterozygous loss across MLH1, MSH2, MSH6, or PMS2 — cause a severe pediatric cancer syndrome (formerly mismatch repair cancer syndrome, MMRCS) with brain tumors, leukemias, and Lynch-type GI cancers in childhood. MSH2 biallelic loss is one of the four causing genes.

### MSI-H as a predictive biomarker for immunotherapy

MMR deficiency (dMMR) causes a dramatically elevated somatic mutation burden from unfixed replication errors. This mutational load generates abundant **frameshift-derived neoantigens** that are visible to the adaptive immune system; however, tumors upregulate PD-L1 to escape immune clearance. **PD-1 checkpoint blockade** removes this brake, enabling T-cell-mediated tumor killing.

Le et al. 2015 (NEJM) demonstrated, in the first prospective pan-tumor test of this hypothesis, that dMMR colorectal cancers achieved objective response rates of ~40% (vs 0% in MMR-proficient CRC) and immune-related PFS of 78% at 20 weeks (vs 11%) following pembrolizumab treatment [^le2015]. Le et al. 2017 (Science) extended this finding across 12 tumor types in 86 patients (53% ORR), leading to **FDA tissue-agnostic approval** of pembrolizumab for any previously-treated dMMR/MSI-H solid tumor in 2017 [^le2017] — the first tumor-agnostic approval in oncology history.

MSH2 protein loss on IHC (loss of nuclear staining) is one of the four standard markers used to detect dMMR in clinical tumor specimens (alongside MLH1, PMS2, MSH6). An MSH2-absent pattern on IHC implies concurrent MSH6 loss, because MSH6 requires MSH2 for nuclear localization and stability.

#gap/needs-replication — Per-tumor-type dMMR response data from Le 2017 includes small subgroups (n=1–12 for some tumor types); confirmation in powered, tumor-specific trials is ongoing.

## Pathway membership

- [[mismatch-repair]] — the canonical mechanistic home; MSH2 is a core initiating component of all MutS-mediated MMR
- [[dna-damage-response]] — MSH2-mediated recognition feeds into ATR/ATM-p53 signaling under persistent mismatch load
- [[genomic-instability]] — MMR deficiency is a primary driver of this aging hallmark

## Key interactors

- [[msh6]] — obligate MutSα partner; confers single-base mismatch specificity
- [[msh3]] — obligate MutSβ partner; confers IDL specificity for larger loops
- [[mlh1]] — MutLα subunit recruited by MSH2-containing complexes to form ternary surveillance complex; MLH1 is the partner whose promoter methylation drives sporadic MSI-H CRC
- [[pms2]] — MutLα catalytic endonuclease subunit; PMS2 instability is a consequence of MLH1 loss
- [[pcna]] — physically interacts with MSH3 and MSH6; links mismatch recognition to the replication fork for strand discrimination
- [[exo1]] — EXO1 C-terminus interacts directly with MSH2 (residues 601–671, UniProt); EXO1 mediates excision of the mismatch-containing nascent strand
- [[atm]] — activated downstream of persistent MMR-associated ssDNA intermediates; links MMR signaling to the broader DDR and cell-cycle checkpoint network

## Druggability

**Tier 4 — no direct MSH2-targeting clinical drug.** The clinical utility of MSH2/dMMR status is as a **predictive biomarker**, not a drug target. PD-1 blockade drugs (pembrolizumab, nivolumab) that are used in dMMR tumors act on PD-1/PD-L1, not on MSH2 directly. There is no clinical agent that specifically restores MSH2 function in MMR-deficient tumors or in aged tissues. Small-molecule MSH2 inhibitors have been explored as chemosensitizers (blocking the futile-cycle apoptosis mechanism that kills MMR-proficient cells after alkylating agents), but none has entered clinical development.

For the aging context specifically: no intervention is known to maintain or restore MSH2 expression/activity in aged normal tissues. #gap/needs-human-replication #gap/no-mechanism

## Limitations and gaps

- **Age-related MSH2 expression decline in normal human tissues** — Claimed in the broader MMR literature but no high-quality, age-stratified quantitative study (protein-level, multiple tissues, sufficient N) has been verified for this page. The [[mismatch-repair]] pathway page tags this claim `#gap/unsourced`. Do not assert without citation. #gap/unsourced
- **GenAge human entry absent** — MSH2 does not appear in the GenAge human curated gene set as of 2026-05-07; model-organism entry exists for yeast. Whether this reflects a curation gap or a deliberate exclusion (HNPCC = cancer predisposition, not classic aging phenotype) is unclear. #gap/needs-canonical-id
- **GTEx aging correlation** — No published quantitative analysis of MSH2 expression vs age across GTEx tissues was identified during seeding. `gtex-aging-correlation: null`. #gap/needs-replication
- **Mendelian randomization** — No MR study using MSH2 germline variants as instruments for an aging phenotype was identified. `mr-causal-evidence: not-tested`. Lynch syndrome variants are common instruments for cancer MR studies but not for aging-rate outcomes.
- **MutSβ IDL size range** — The upper bound of IDLs recognized by MutSβ (MSH2+MSH3) is cited as "2–10 nt" in the brief; Jiricny 2006 (verified on [[mismatch-repair]] page) does not state a precise upper bound and notes the boundary is substrate-dependent. #gap/needs-replication
- **EXO1-independent excision pathway** — A back-up excision route independent of EXO1 exists but is not fully characterized; not directly attributable to MSH2. #gap/no-mechanism

## Cross-references

- [[mismatch-repair]] — pathway page (verified 2026-05-05); mechanistic details live there
- [[msh6]] — MutSα partner (implicit stub)
- [[msh3]] — MutSβ partner (implicit stub)
- [[mlh1]] — MutLα subunit; R32c batch candidate
- [[pms2]] — MutLα endonuclease (implicit stub)
- [[pcna]] — replication-fork linker
- [[exo1]] — excision exonuclease (implicit stub)
- [[atm]] — DDR kinase activated downstream of MMR signaling
- [[genomic-instability]] — hallmark page
- [[dna-damage-response]] — broader DDR network
- [[p53]] — downstream apoptotic effector of sustained MMR-damage signaling

## Footnotes

[^fishel1993]: doi:10.1016/0092-8674(93)90546-3 · Fishel R, Lescoe MK, Rao MRS, Copeland NG, Jenkins NA, Garber J, Kane M, Kolodner R · *Cell* 1993, 75:1027–1038 · in-vitro + human genetics · model: human · 2880 citations · cloning of human MSH2 and identification of germline mutations in HNPCC kindreds; first demonstration that MSH2 is the human mutS homolog linked to Lynch syndrome · download status: not_oa #gap/no-fulltext-access — closed-access; cannot verify against full PDF

[^dewind1995]: doi:10.1016/0092-8674(95)90319-4 · de Wind N, Dekker M, Berns A, Radman M, te Riele H · *Cell* 1995, 82:321–330 · in-vivo · model: Msh2-/- knockout mouse · 791 citations · Msh2-null mice show MMR deficiency, methylation tolerance, elevated recombination, and accelerated tumorigenesis (lymphoma + GI); shortened lifespan · download status: failed (bronze OA declared but no URL resolved in a local paper DOI lookup attempt 2026-05-07) #gap/no-fulltext-access — cannot verify against full PDF

[^lamers2000]: doi:10.1038/35037523 · Lamers MH, Perrakis A, Enzlin JH, Winterwerp HHK, de Wind N, Sixma TK · *Nature* 2000, 407:711–717 · in-vitro (crystal structure) · model: MutS–DNA complex · 632 citations · first crystal structure of a MutS homolog bound to a G·T mismatch; resolves domain architecture and mismatch-recognition mechanism · locally available:  (local PDF)

[^le2015]: doi:10.1056/NEJMoa1500596 · Le DT, Uram JN, Wang H et al. · *New England Journal of Medicine* 2015, 372:2509–2520 · phase 2 · n=41 (11 dMMR-CRC, 21 pMMR-CRC, 9 dMMR non-CRC) · ORR ~40% (dMMR-CRC) vs 0% (pMMR-CRC); immune-related PFS rate at 20 weeks 78% vs 11%; p<0.001 · model: human · 9194 citations · first prospective demonstration that dMMR predicts PD-1 blockade response pan-tumor · locally available:  (local PDF)

[^le2017]: doi:10.1126/science.aan6733 · Le DT, Durham JN, Smith KN et al. · *Science* 2017, 357:409–413 · phase 2 · n=86 (12 tumor types, all dMMR) · ~53% ORR across solid tumors; led to 2017 FDA tissue-agnostic approval · model: human · 6405 citations · download status: not_oa (closed access) #gap/no-fulltext-access

[^lynch2009-via-mmr]: Gene proportion data (MLH1 ~50%, MSH2 ~40%, MSH6 ~7–10%, PMS2 ~5%) cited from the [[mismatch-repair]] pathway page footnote [^lynch2009] — doi:10.1111/j.1399-0004.2009.01230.x · Lynch HT et al. · *Clinical Genetics* 2009, 76:1–18 · review · model: human · download status: pending. These proportions should be verified against the source PDF before treating them as precisely established.
