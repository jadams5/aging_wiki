---
type: protein
aliases: [BRCA2, breast cancer type 2 susceptibility protein, FACD, FANCD1, BROVCA2]
uniprot: P51587
ncbi-gene: 675
hgnc: 1101
ensembl: ENSG00000139618
genage-id: 79
mouse-ortholog: Brca2
key-domains: [PALB2-binding, BRC-repeats, OB-folds, TR2]
key-ptms: [Ser-3291-CDK-phosphorylation, Ser-755-ATM-phosphorylation, Thr-3387-CHEK1/2-phosphorylation, ubiquitination]
pathways: ["[[homologous-recombination]]", "[[dna-damage-response]]", "[[fanconi-anemia-pathway]]"]
hallmarks: ["[[genomic-instability]]", "[[stem-cell-exhaustion]]", "[[cellular-senescence]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 3
# Aging-context druggability note: BRCA2 protein has no approved direct inhibitor or activator
# (tier 4 by direct-targeting). However, PARP inhibitors (olaparib, talazoparib — FDA-approved
# in oncology) exploit BRCA2 LOF synthetically, placing the BRCA2-deficiency context at tier 1
# for oncology. Aging-context tier is set to 3 (predicted druggable) because: (1) BRCA2 loss
# drives aging-relevant genomic instability, and (2) indirect modulators (PARP inhibitors, RAD51
# stabilizers) could in principle be deployed in aging contexts, but NO aging-indication trial
# currently recruits on BRCA2 status. Tier 3 reflects the gap between oncology-validated
# synthetic lethality and aging-indication validation. See § Druggability section in body.
gtex-aging-correlation: null   # not yet populated; see sops/finding-tissue-expression.md #gap/needs-gtex-data
mr-causal-evidence: not-tested
# MR note: BRCA2 germline variants are strongly disease-associated (HBOC), but MR studies
# framing BRCA2 as a causal aging driver (rather than cancer risk factor) have not been published.
# No aging-GWAS instruments; cancer-risk instruments exist but capture cancer predisposition,
# not the aging-process signal. Tag not-tested per CLAUDE.md R26 threshold.
caused-by: ["[[dna-double-strand-breaks]]", "[[replication-stress]]"]
causes: ["[[homologous-recombination]]", "[[rad51-filament-assembly]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Primary-source PDFs verified for Wooster 1995, Sharan 1997, Pellegrini 2002, Jensen 2010, Bryant 2005. Howlett 2002 and Lord & Ashworth 2016 unverifiable (not_oa). Cancer risk figures (Antoniou 2003, Chen & Parmigiani 2007) not verified — gap-tagged in body. UniProt P51587 identity fields confirmed via REST API. GenAge entry 79 confirmed via web. NCBI Gene 675, HGNC 1101 not independently re-verified against NCBI/HGNC — recommend cross-check on next lint pass."
---

# BRCA2

BRCA2 (breast cancer type 2 susceptibility protein) is a 3,418-amino-acid nuclear genome caretaker that functions as the **primary RAD51 loader** in [[homologous-recombination]] (HR) at DNA double-strand breaks (DSBs). Its central biochemical role is to displace RPA from resected ssDNA overhangs and deposit RAD51 monomers onto the 3' ssDNA tail — the rate-limiting step in HR. Monoallelic germline loss-of-function mutations cause hereditary breast-ovarian cancer (HBOC); biallelic LOF causes Fanconi anemia complementation group D1 (FANCD1). In the aging context, BRCA2 contributes to [[genomic-instability]] via its HR role; HR capacity is hypothesized to decline with age in stem cells, connecting BRCA2 biology to [[stem-cell-exhaustion]] and clonal selection pressure.

**Companion page:** [[brca1]] covers BRCA1, which acts upstream of BRCA2 in the BRCA1–PALB2–BRCA2–RAD51 axis. HR axis mechanistic content not duplicated here.

## Identity

| Field | Value |
|---|---|
| UniProt | P51587 (BRCA2_HUMAN) — Swiss-Prot (manually curated) |
| NCBI Gene | 675 |
| HGNC | 1101; symbol BRCA2 |
| Ensembl | ENSG00000139618 |
| GenAge | Entry 79 — human gene database; listed as aging-relevant; mice deficient for BRCA2 have reduced lifespan (whether via accelerated aging vs. cancer is unresolved) [^genage79] |
| Mouse ortholog | Brca2 (one-to-one); Brca2-null mice are embryonic lethal [^sharan1997] |
| Length | 3,418 amino acids (canonical isoform) — among the largest human proteins |
| Molecular weight | ~384 kDa (predicted) |
| Chromosome | 13q12-q13 (Wooster 1995) — identified by positional cloning in 1995 [^wooster1995]; current cytogenetic annotation refines this to 13q12.3 (UniProt P51587) |
| Aliases | FACD, FANCD1 (Fanconi anemia D1 gene identity); BROVCA2 (OMIM disease symbol) |

## Domain architecture

BRCA2 lacks intrinsic enzymatic activity; it functions as a scaffold and chaperone for RAD51:

| Domain | Residues (approx.) | Function |
|---|---|---|
| PALB2-binding | 1–40 | N-terminal; binds PALB2 coiled-coil domain; required for BRCA1–PALB2–BRCA2 axis assembly at DSBs |
| BRC repeats 1–8 | ~1002–2085 | Eight tandem ~35 aa repeats; each binds one RAD51 monomer non-cooperatively; the BRC repeat mimics the RAD51 oligomerization interface [^pellegrini2002] |
| DNA-binding domain (DBD) | ~2402–3190 | Tower domain + 3 OB-folds + helical domain; binds ssDNA and dsDNA directly; essential for HR |
| TR2 (C-terminal RAD51-binding) | ~3265–3330 | Second RAD51-binding region; stabilizes RAD51-ssDNA filament; phosphorylation of Ser-3291 by CDK1/2 in S/G2 suppresses TR2 activity, cell-cycle-gating HR |
| NLS (multiple) | Scattered | Nuclear localization; BRCA2 also associates with centrosomes |

The BRC-repeat region (8 repeats spanning ~1,000 residues) is functionally distinct from the C-terminal TR2 domain: BRC repeats recruit free RAD51 monomers, while TR2 acts after RAD51 is deposited on ssDNA to prevent premature disassembly of the nucleoprotein filament [^pellegrini2002] [^jensen2010].

## RAD51 loading mechanism

BRCA2 executes the rate-limiting step in HR [^jensen2010]:

1. Following DSB detection, ATM/ATR kinases phosphorylate BRCA1 → BRCA1 recruits PALB2 via its coiled-coil domain.
2. PALB2 recruits BRCA2 to the DSB; BRCA2 localizes to the 3' ssDNA overhang generated by 5'→3' end resection (BRCA1–CtIP–MRN axis; see [[brca1]]).
3. RPA coats the resected ssDNA, preventing secondary structures. BRCA2 directs RAD51 to ssDNA and stimulates nucleoprotein filament formation via BRC repeats; BRCA2 does not directly interact with or displace RPA (no pull-down detected; Jensen 2010), but the net effect is displacement of RPA as RAD51 occupies the ssDNA [^jensen2010].
4. The TR2 domain stabilizes the filament against RAD51 ATPase-driven disassembly.
5. The RAD51–ssDNA filament performs homology search → strand invasion → D-loop → HR completion.

Purified full-length human BRCA2 directly stimulates RAD51-mediated strand exchange in vitro, confirming BRCA2 as a primary mediator rather than an indirect scaffold [^jensen2010].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — BRCA2 and RAD51 are highly conserved; human BRCA2 BRC repeats bind human RAD51 at the same interface as in mouse |
| Phenotype conserved in humans? | yes — BRCA2 germline LOF causes HR deficiency; genomic instability and cancer predisposition demonstrated in human carriers |
| Replicated in humans? | yes — HR deficiency ("BRCAness") quantified via genomic scar signatures (HRD score, large-scale state transitions, telomeric allelic imbalance) in BRCA2-mutant tumors |

## BRCA1–PALB2–BRCA2 axis

BRCA2 operates downstream of BRCA1 in the same HR axis (detailed on [[brca1]]). Key axis relationships not duplicated here; summary:

- **BRCA1** recruits **PALB2** via a coiled-coil / phospho-binding interaction
- **PALB2** recruits **BRCA2** to DSBs; PALB2 loss phenocopies BRCA2 LOF for HR
- **BRCA2** loads **RAD51** — the direct recombinase

BRCA2's N-terminal residues 1–40 are necessary and sufficient for PALB2 binding; cancer-associated missense mutations in this region abrogate PALB2 interaction and impair HR.

## Fanconi anemia (FANCD1)

Biallelic (homozygous or compound heterozygous) germline LOF mutations in BRCA2 cause Fanconi anemia complementation group D1 (FANCD1) [^howlett2002]. FANCD1 presents with:

- Congenital malformations (radial ray defects, VACTERL spectrum)
- Bone marrow failure
- Markedly elevated cancer risk (childhood leukemia, medulloblastoma, Wilms tumor)
- Cellular hypersensitivity to interstrand crosslinks (ICLs) and replication-blocking lesions

The FA pathway and HR are mechanistically linked: FANCD2 ubiquitination (by the FA core complex) recruits BRCA2 to stalled replication forks; BRCA2 then mediates RAD51-dependent fork restart. #gap/needs-replication — quantitative contribution of each domain of BRCA2 to ICL repair vs. canonical DSB HR is incompletely characterized.

## PARP inhibitor synthetic lethality

BRCA2-deficient cells are exquisitely sensitive to PARP inhibition — a synthetic lethal relationship co-discovered in 2005 [^bryant2005]. The mechanism parallels that described for [[brca1]] (see [[brca1]] § PARP inhibitor synthetic lethality for full mechanistic detail):

- PARP inhibitors trap PARP1–DNA complexes at SSBs
- SSBs converted to DSBs at replication forks
- BRCA2-deficient cells lack HR → DSBs persist → cell death

Bryant et al. 2005 specifically demonstrated PARP inhibitor lethality in **BRCA2-deficient** cells (V-C8 CHO line and xenografts), establishing BRCA2 as the primary subject of this synthetic lethal relationship [^bryant2005].

**Clinical translation:** FDA-approved PARP inhibitors (olaparib, talazoparib, rucaparib, niraparib) are indicated for BRCA1/2-mutated cancers (ovarian, breast, pancreatic, prostate — indications vary). These represent druggability tier 1 for the BRCA2-LOF *oncology* context.

**Aging-context druggability:** No aging-indication clinical trial currently recruits on BRCA2 status. The possibility that PARP inhibitors might target BRCA2-deficient senescent cells in aging tissues is speculative and untested. Druggability tier set to 3 (predicted druggable via indirect synthetic-lethal mechanism; no aging-indication validation). See frontmatter comment. #gap/needs-human-replication

## Cancer risk and germline mutations

BRCA2 germline pathogenic variants (predominantly frameshift, nonsense, and large deletions causing LOF) confer substantially elevated lifetime cancer risks via classic two-hit tumor suppressor kinetics. Note: specific percentage estimates require a verified primary source — the candidate citation is Antoniou et al. 2003 (PMID 12677558) or Chen & Parmigiani 2007 (PMID 17452630); risk figures below are approximate community-consensus ranges pending direct verification [^riskgap].

| Cancer | Approximate carrier lifetime risk | Population baseline |
|---|---|---|
| Breast (female) | ~45–69% by age 70–80 | ~12% |
| Ovarian (epithelial) | ~11–17% by age 70 | ~1.3% |
| Pancreatic | ~3–7% lifetime | ~1.5% |
| Prostate | ~15–20% by age 70 (male carriers) | ~15% general |

BRCA2-associated breast cancers are more heterogeneous in ER/PR/HER2 status than BRCA1-associated tumors (which are predominantly triple-negative); BRCA2-associated breast cancer has a higher proportion of ER+ luminal-type tumors. #gap/needs-replication — ER status distribution from large registry studies; primary source not confirmed here.

The natural history differs from BRCA1: BRCA2 carriers have lower ovarian cancer risk than BRCA1 carriers, but higher male breast and pancreatic cancer risk. #gap/unsourced — comparative risk claims need a verified primary source.

[^riskgap]: Cancer risk estimates are approximate community consensus; specific percentages require verification against a primary meta-analysis. Candidate sources: Antoniou et al. 2003 PMID 12677558 (Am J Hum Genet); Chen & Parmigiani 2007 PMID 17452630 (J Clin Oncol). #gap/no-fulltext-access — not yet confirmed in archive.

## Aging relevance

### HR decline with age — hypothesized BRCA2 contribution

A "HR decline with age" hypothesis proposes that HR capacity decreases in aging stem cells, contributing to the somatic mutation accumulation that underlies clonal hematopoiesis and cancer incidence with age. BRCA2 is mechanistically relevant because:

1. BRCA2 protein levels may decline in aging tissues (expression data limited; see #gap below)
2. Replication stress increases with age in stem cells → unresolved DSBs → pressure on the HR machinery
3. Conditional BRCA2 loss in stem cell compartments causes premature replicative senescence and stem cell exhaustion in mouse models

#gap/needs-human-replication — direct measurement of BRCA2 protein levels and HR efficiency in aged non-malignant human tissue has not been established in the primary literature confirmed here.

### Brca2-null mouse lethality and conditional models

Brca2 homozygous knockout mice are embryonic lethal, arresting after E6.5; mutant phenotype (failure of mesoderm formation, absence of amnion/chorion/allantois) was histologically confirmed at E7.5 in 25% of embryos from heterozygous intercrosses (n=45 embryos examined) [^sharan1997]. This precludes studying systemic aging phenotypes from germline Brca2-null. Conditional Brca2 knockouts in specific tissues (mammary gland, hematopoietic system) recapitulate aspects of HR deficiency and genomic instability in adult tissue; aging-specific conditional KO data show:

- Increased DSB burden (γ-H2AX foci) in aged Brca2-hypomorphic cells #gap/needs-replication
- Replication stress markers elevated in stem cells #gap/unsourced — primary source needed

| Dimension | Status |
|---|---|
| Embryonic lethality in Brca2-null mouse? | yes [^sharan1997] — developmental arrest after E6.5; mutant phenotype confirmed at E7.5 (n=45 embryos) |
| Adult aging phenotype from conditional KO? | partial — tissue-specific data; no comprehensive aging study confirmed |
| Translates to human aging? | unknown — indirect via HR-decline hypothesis; no direct human aging data |

### GenAge status

GenAge entry 79: BRCA2 is listed as a putative human aging gene. Supporting evidence: (1) Brca2-deficient mice show reduced lifespan (cancer-driven vs. accelerated aging unresolved); (2) PARP1 deletion partially reverses effects in Brca2-null mice [^genage79]. GenAge notes that "elucidating its role in human ageing will require additional studies." #gap/needs-human-replication

## Key interactors

- [[palb2]] — bridges BRCA1 and BRCA2; required for BRCA2 DSB recruitment
- [[brca1]] — upstream in BRCA1–PALB2–BRCA2–RAD51 axis; HR licensing and scaffolding
- [[rad51]] — recombinase loaded by BRCA2 onto ssDNA; HR effector
- [[rpa]] (RPA1/RPA2/RPA3) — displaced from ssDNA by BRCA2; antagonistic in RAD51 loading step
- [[atm]] — upstream kinase; phosphorylates Ser-755 and other sites on BRCA2 post-DSB
- [[fancd2]] — Fanconi anemia pathway; FANCD2 ubiquitination recruits BRCA2 to stalled forks
- [[sem1]] (DSS1/SHFM1) — binds BRCA2 OB-folds; required for ssDNA binding and nuclear stability of BRCA2
- [[polh]] — DNA polymerase eta; interacts with BRCA2 DBD during replication fork processing

## Pathway membership

- [[homologous-recombination]] — BRCA2 is the direct RAD51 loader; central executing factor
- [[dna-damage-response]] — ATM/ATR → BRCA2 phosphorylation → HR commitment
- [[fanconi-anemia-pathway]] — BRCA2 = FANCD1; acts downstream of FANCD2 ubiquitination at ICLs

## Hallmark mapping

| Hallmark | Mechanism |
|---|---|
| [[genomic-instability]] | BRCA2 LOF → HR deficiency → somatic mutation accumulation, chromosomal rearrangements; hypothesized to increase with BRCA2 decline or replication stress in aging |
| [[stem-cell-exhaustion]] | Proposed: HR decline in aged stem cells (hematopoietic, mammary) forces replicative senescence or apoptosis, depleting regenerative pools; evidence indirect #gap/needs-human-replication |
| [[cellular-senescence]] | Unresolved DSBs in BRCA2-deficient cells activate DDR → p21/p16 → senescence and SASP; demonstrated in conditional KO models #gap/needs-replication |

## Limitations and gaps

- #gap/needs-human-replication — HR efficiency and BRCA2 protein levels in normal aged non-malignant human tissue are not directly measured in primary literature confirmed here.
- #gap/needs-gtex-data — GTEx aging correlation for BRCA2 not yet populated; `gtex-aging-correlation:` field left null.
- #gap/no-fulltext-access — Cancer risk percentages are community-consensus approximations; primary meta-analysis sources (Antoniou 2003, Chen & Parmigiani 2007) not yet confirmed against archive.
- #gap/needs-replication — BRCA2 conditional KO aging phenotypes (γ-H2AX burden, stem cell exhaustion) cited from secondary literature; primary conditional KO aging studies not confirmed here.
- #gap/unsourced — ER status distribution of BRCA2-associated breast cancers vs. BRCA1; quantitative comparison requires a verified registry-cohort primary source.
- #gap/unsourced — Comparative cancer risk claims (BRCA2 vs. BRCA1 ovarian/breast risk) require a verified primary source.
- The "HR decline with aging → BRCA2 contribution" hypothesis is mechanistically plausible but has no dedicated human aging cohort study. A dedicated hypotheses page would be warranted if evidence accumulates.
- Note on seeder brief: brief cited "Yang 2002 Science" for BRC-RAD51 structure; the actual primary source is Pellegrini et al. 2002 *Nature* (doi:10.1038/nature01230), which is the seminal structural paper for BRC repeat–RAD51 interaction from that year. Seeder-brief DOI memory was imprecise per known MEMORY.md caveat. Confirmed correct by verifier.
- Verification note (2026-05-07): Wooster 1995 maps BRCA2 to chromosome 13q12-q13, not 13q12.3; the 13q12.3 cytogenetic band annotation derives from post-1995 mapping refinement (UniProt P51587). Identity table updated to reflect both.
- Verification note (2026-05-07): Jensen 2010 explicitly states BRCA2 does not directly interact with RPA (pull-down negative); "BRCA2 displaces RPA" is the net functional outcome, not a direct biochemical interaction. Step 3 of the RAD51 loading mechanism updated to reflect this.
- Verification note (2026-05-07): Sharan 1997 reports developmental arrest after E6.5 with mutant phenotype confirmed histologically at E7.5 (n=45 embryos). The prior "E7.5–E8.5" range was inaccurate — E8.5 does not appear in Sharan 1997. Corrected throughout.
- Verification note (2026-05-07): Bryant 2005 xenograft groups have variable n (per Table 1: 2–5 mice per treatment arm) not a clean 10/group as previously stated. Footnote corrected.

## Footnotes

[^wooster1995]: [[studies/wooster-1995-brca2-identification]] · doi:10.1038/378789a0 · n=46 breast cancer families screened for mutations; 6 pathogenic germline mutations identified across 6 families (IARC 2932, IARC 3594, CRC B211, CRC B196, Montreal 681, Montreal 440) · observational (genetic linkage + positional cloning + sequencing) · BRCA2 mapped to chromosome 13q12-q13 (centromere–D13S289–3cM–D13S260–1cM–D13S171–2cM–D13S267–telomere); 6 distinct frameshifting/nonsense germline mutations disrupting ORF identified; partial cDNA of 2,329 aa reported (full ORF not yet complete at time of publication) · model: familial breast cancer pedigrees · archive: PDF available at  · cited_by: 3,627

[^sharan1997]: [[studies/sharan-1997-brca2-embryonic-lethal]] · doi:10.1038/386804a0 · n=45 embryos examined at E7.5 (from Brca2 heterozygous intercrosses); 6 litters from brca2^Brdm1/+  intercrosses produced no brca2^Brdm1/brca2^Brdm1 offspring · in-vivo · Brca2−/− embryos arrest after E6.5 (mutant phenotype — failure of mesoderm/amnion/chorion/allantois — confirmed histologically at E7.5); radiation hypersensitivity of blastocysts and Brca2–Rad51 interaction (yeast two-hybrid + mammalian cells) demonstrated · model: Mus musculus (C57BL/6 background embryos + AB2.2 ES cells) · archive: PDF available at  · cited_by: 1,066

[^pellegrini2002]: [[studies/pellegrini-2002-brca2-brc-rad51-structure]] · doi:10.1038/nature01230 · n=structural (X-ray crystallography) · in-vitro / structural · BRC repeat mimics RAD51 oligomerization interface; atomic-resolution structure of BRC4–RAD51 complex · model: purified human proteins · archive: PDF available at  · cited_by: 692

[^jensen2010]: [[studies/jensen-2010-brca2-rad51-recombination]] · doi:10.1038/nature09399 · n=biochemical reconstitution (purified proteins, single-molecule imaging) · in-vitro · purified full-length human BRCA2 directly stimulates RAD51 assembly on ssDNA, displaces RPA, blocks RAD51 ATPase to stabilize filament; confirms BRCA2 as primary RAD51 mediator · model: purified human BRCA2 + RAD51 + RPA + ssDNA substrates · archive: PDF available at  · cited_by: 688

[^howlett2002]: [[studies/howlett-2002-brca2-fanconi-anemia]] · doi:10.1126/science.1073834 · n=Fanconi anemia patient cell lines (biallelic mutation screening) · in-vitro + observational · biallelic BRCA2 mutations identified in FANCD1 patients, establishing BRCA2 = FANCD1 · model: human patient-derived FA cell lines · archive: in metadata (not_oa; no PDF downloaded) · cited_by: 1,136

[^bryant2005]: [[studies/bryant-2005-parp-brca2-synthetic-lethality]] · doi:10.1038/nature03443 · n=cell lines (V79, V-C8 BRCA2-deficient, MCF7, MDA-MB-231) + mouse xenografts (40 CD-1 nude mice implanted: 20 for V-C8, 20 for V-C8+B2; tumour take rates 10/20 and 9/20 respectively; treatment groups variable n per Table 1) · in-vitro + in-vivo · BRCA2-deficient cells selectively killed by PARP inhibitors NU1025 and AG14361; BRCA2 deficiency is the sensitivity determinant regardless of p53 status; 3/5 V-C8 xenografts responded to AG14361 (25 or 50 mg/ml); 0/4 V-C8+B2 xenografts responded · model: CHO-derived V-C8 cells; breast cancer cell lines; xenograft · archive: PDF available at  · cited_by: 5,038

[^lordashworth2016]: doi:10.1038/nrc.2015.21 · Lord CJ, Ashworth A · *Nature Reviews Cancer* 2016 · review · BRCAness: concept, measurement via genomic scars (HRD score, LST, TAI), and clinical implications for PARP inhibitor use beyond BRCA1/2 germline carriers · archive: in metadata (not_oa; no PDF downloaded) · cited_by: 1,187

[^genage79]: GenAge human database entry 79 (BRCA2) · https://genomics.senescence.info/genes/entry.php?hgnc=BRCA2 · accessed 2026-05-07 · putative human aging gene; Brca2-deficient mice have reduced lifespan; PARP1 deletion partial rescue; role in human aging requires additional studies (GenAge explicit caveat)
