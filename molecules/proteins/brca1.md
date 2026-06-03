---
type: protein
aliases: [BRCA1, breast cancer type 1 susceptibility protein, RNF53, BROVCA1]
uniprot: P38398
ncbi-gene: 672
hgnc: 1100
ensembl: ENSG00000012048
genage-id: 61
mouse-ortholog: Brca1
key-domains: [RING, BRCT, coiled-coil, NLS]
key-ptms: [Ser1387-phosphorylation, Ser1524-phosphorylation, Lys6-polyubiquitination, SUMO2-conjugation]
pathways: ["[[dna-damage-response]]", "[[homologous-recombination]]", "[[cell-cycle-checkpoints]]", "[[fanconi-anemia-pathway]]"]
hallmarks: ["[[genomic-instability]]", "[[stem-cell-exhaustion]]", "[[cellular-senescence]]"]
sens-categories: []
complex-subunits: ["Q99728"]   # BARD1 UniProt; BRCA1 obligate heterodimer
druggability-tier: 3           # Open Targets ENSG00000012048: no approved SM/AB drug targeting BRCA1 directly; "Druggable Family" (SM) + Small Molecule Binder (PR) = tier 3 (predicted druggable); PARP inhibitors exploit BRCA1-deficiency synthetically, not direct BRCA1 inhibitors
caused-by: ["[[dna-double-strand-breaks]]", "[[oxidative-stress]]", "[[replication-stress]]"]
causes: ["[[homologous-recombination]]", "[[g2-m-checkpoint-arrest]]", "[[brca1-a-complex-assembly]]"]
is-noncoding-rna: false
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Bryant 2005 (10.1038/nature03443) and Farmer 2005 (10.1038/nature03445) primary source PDFs verified in full. Foulkes 2014 NEJM (stated DOI 10.1056/NEJMra1306063) confirmed non-existent: returns 404 at doi.org, absent from Crossref, PubMed, Europe PMC, and Semantic Scholar — DOI is fabricated or mis-transcribed; lifetime cancer risk figures remain unverified and tagged #gap/no-fulltext-access. Canonical-database identity fields (UniProt P38398, NCBI Gene 672, HGNC 1100) not independently re-verified against databases on this pass."
---


# BRCA1

BRCA1 (breast cancer type 1 susceptibility protein) is a 1,863-amino-acid nuclear E3 ubiquitin ligase and genome-caretaker that functions at the nexus of [[homologous-recombination|homologous recombination]] (HR), cell-cycle checkpoint control, and transcriptional regulation. Loss-of-function mutations confer substantially elevated lifetime cancer risk (precise risk figures in the Cancer Risk section are currently unverified — see #gap/no-fulltext-access note there). In the aging context, BRCA1 protein levels decline with age in breast epithelium and ovarian follicles, linking reduced HR fidelity to age-associated genomic instability and tissue depletion.

## Identity

| Field | Value |
|---|---|
| UniProt | P38398 (BRCA1_HUMAN) — Swiss-Prot (manually curated) |
| NCBI Gene | 672 |
| HGNC | 1100; symbol BRCA1 (alias RNF53) |
| Ensembl | ENSG00000012048 |
| GenAge | Entry 61 — human aging gene (putative); GenAge notes premature aging in BRCA1-hypomorphic/TP53-heterozygous mice and centenarian allele-frequency signals [^genage61] |
| Mouse ortholog | Brca1 (one-to-one; used extensively in HR and aging studies) |
| Length | 1,863 amino acids (canonical isoform) |
| Chromosome | 17q21.31 — first mapped by genetic linkage in 1990 [^hall1990] |
| Molecular weight | ~208 kDa (predicted); runs anomalously on SDS-PAGE |

## Domain architecture

BRCA1 lacks catalytic domains of the canonical kinase/phosphatase family and instead acts as a **scaffold and E3 ligase**:

| Domain | Residues (approx.) | Function |
|---|---|---|
| RING domain | 24–65 | Zn²⁺-coordinating RING-type zinc finger; obligate heterodimer with [[bard1]] (BARD1, Q99728); together catalyze Lys-6-linked polyubiquitin chains on H2A and other substrates |
| Coiled-coil | ~1,391–1,424 | Mediates interaction with PALB2 (partner and localizer of BRCA2); critical for BRCA1-PALB2-BRCA2 HR axis |
| BRCT domain 1 | 1,642–1,736 | Phospho-peptide binding module; recognizes pSer motifs on CtIP, RBBP8, Abraxas, and BACH1/FANCJ |
| BRCT domain 2 | 1,756–1,855 | Tandem BRCT pair with BRCT1; cancer-associated mutations here frequently destabilize the fold |
| NLS (multiple) | scattered | Nuclear import; BRCA1 is predominantly nuclear but shuttles during apoptosis |

The RING domain is non-functional in isolation: BRCA1 requires obligate heterodimer formation with BARD1 for E3 ligase activity [^hashizume2001]. #gap/needs-replication — precise Lys-6-linkage substrate specificity in vivo remains incompletely characterized.

## BRCA1 complexes

BRCA1 assembles into at least three partially-non-overlapping nuclear complexes that mediate distinct DNA repair sub-steps:

| Complex | Key partners | Primary function |
|---|---|---|
| **BRCA1-A** | Abraxas (ABRAXAS1), RAP80 (UIMC1), MERIT40 (NBA1), BRCC36 (KIAA0157), BRE | Recruited to ubiquitinated H2A at DSB flanks via RAP80 UIM domains; scaffolds BRCA1 at damage sites; controls DSB end resection rate |
| **BRCA1-B** | BACH1/FANCJ (BRIP1) | Facilitates replication fork restart and HR; BACH1 is a 5'→3' DNA helicase |
| **BRCA1-C** | CtIP (RBBP8), MRN (MRE11-RAD50-NBN) | Directly promotes 5'→3' end resection, generating ssDNA overhangs that recruit RPA then RAD51 |

Complex membership is regulated by the phosphorylation state of Abraxas/CtIP BRCT-binding motifs; ATM-mediated phosphorylation licenses BRCA1-A and BRCA1-C assembly at DSBs [^wang2007]. #gap/unsourced — quantitative kinetics of complex switching at individual foci are not established in primary sources I have confirmed.

## BRCA1 in homologous recombination

The canonical demonstration that BRCA1 is required for HR came from Moynahan et al. 1999, who showed that mouse embryonic cells carrying a targeted Brca1 deletion repaired I-SceI-induced DSBs by HR at ~10-fold lower efficiency than controls, with no change in NHEJ frequency [^moynahan1999].

Mechanism (broad consensus, details require verification):

1. ATM / ATR phosphorylate BRCA1 at multiple Ser residues within minutes of DSB induction.
2. Phospho-BRCA1 co-localizes with γ-H2AX foci, recruiting the BRCA1-C complex.
3. BRCA1-CtIP-MRN promotes Mre11 nuclease-dependent resection, generating 3' ssDNA overhangs.
4. BRCA1 facilitates RPA displacement by RAD51 via the BRCA1-PALB2-BRCA2-RAD51 filament axis.
5. RAD51-coated ssDNA invades the sister chromatid, enabling high-fidelity repair.

BRCA1 thus acts upstream of RAD51 loading — it is not a recombinase but a licensing and scaffolding factor for HR. Loss of function forces cells into error-prone [[nhej|NHEJ]] or microhomology-mediated end-joining (MMEJ), increasing mutational burden.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — BRCA1 and all core HR partners are highly conserved; human BRCA1 rescues mouse Brca1-null lethality |
| Phenotype conserved in humans? | yes — BRCA1 germline mutation carriers accumulate somatic mutations and chromosomal instability at elevated rates |
| Replicated in humans? | yes — somatic HR deficiency ("BRCAness") confirmed by genomic scar signatures (HRD score) in tumor sequencing |

## PARP inhibitor synthetic lethality

The two simultaneous 2005 Nature papers by Bryant et al. and Farmer et al. established the synthetic lethal relationship between BRCA1/2 deficiency and PARP inhibition — one of the most clinically successful applications of synthetic lethality in oncology [^bryant2005] [^farmer2005].

**Mechanism:** BRCA1/2-deficient cells rely on PARP1-mediated single-strand break (SSB) repair to resolve replication-associated SSBs. PARP inhibitors trap PARP1-DNA complexes at SSBs; when these are encountered by replication forks, SSBs are converted to DSBs. In HR-proficient cells, these replication-associated DSBs are repaired by RAD51-dependent sister chromatid exchange. In BRCA1/2-deficient cells, lacking functional HR, DSBs persist or are misrepaired by error-prone NHEJ/SSA, causing chromosomal instability and cell death [^bryant2005] [^farmer2005]. Note: Bryant 2005 demonstrated this primarily for BRCA2-deficient cells; Farmer 2005 demonstrated it for both BRCA1- and BRCA2-deficient mouse ES cells and proposed BRCA1 sensitivity based on siRNA knockdown in human cells (full BRCA1-deficient ES cell data described as "unpublished" in the 2005 paper).

**Clinical translation:** Four PARP inhibitors (olaparib, rucaparib, niraparib, talazoparib) are FDA-approved for BRCA1/2-mutated cancers (ovarian, breast, pancreatic, prostate — indications vary by drug). This represents a **druggability-tier 1** intervention at the level of the *pathway*, though BRCA1 itself has no approved direct inhibitor.

Note: PARP inhibitors exploit BRCA1 *loss* rather than BRCA1 activity — they are not BRCA1 modulators. Druggability tier 3 in the frontmatter reflects the direct-targeting assessment of BRCA1 protein.

## BRCA1 mutations and cancer risk

BRCA1 is classified as a high-penetrance tumor suppressor following classic two-hit kinetics: germline heterozygous pathogenic variants in BRCA1 confer substantially elevated lifetime cancer risk, with somatic loss-of-heterozygosity (LOH) or promoter methylation completing the "second hit" in tumors [^foulkes2014].

**Approximate lifetime cancer risk estimates for BRCA1 germline pathogenic variant carriers** #gap/no-fulltext-access — stated citation (Foulkes 2014 NEJM, DOI 10.1056/NEJMra1306063) is confirmed invalid: the DOI returns HTTP 404 at doi.org and is absent from Crossref, PubMed, Europe PMC, and Semantic Scholar. The DOI appears to be fabricated or mis-transcribed. Risk figures below are from the seeder extraction and **must not be relied upon** until a valid primary source is identified and verified:

| Cancer | Seeder-reported estimate | Population baseline | Source status |
|---|---|---|---|
| Breast (female) | ~65–72% by age 80 | ~12% | #gap/no-fulltext-access — unverified |
| Ovarian (epithelial) | ~44–46% by age 80 | ~1.3% | #gap/no-fulltext-access — unverified |
| Contralateral breast | ~40–60% (10-year cumulative after first diagnosis) | — | #gap/no-fulltext-access — unverified |

The widely-cited Antoniou et al. 2003 (PMID 12677558, Am J Hum Genet) meta-analysis reported BRCA1 carrier lifetime breast cancer risk of ~65% and ovarian risk of ~39%; Chen & Parmigiani 2007 (PMID 17452630, J Clin Oncol) reported ~57% and ~40% respectively. These are candidate replacement citations pending user decision on which source to use. #gap/needs-canonical-id — a valid DOI and verified primary source are required before relying on any specific percentage.

BRCA1-associated breast cancers are predominantly **triple-negative** (ER−/PR−/HER2−) and high-grade. This is mechanistically linked to BRCA1's role in maintaining estrogen receptor alpha (ESR1) expression and normal luminal differentiation. #gap/no-fulltext-access — this claim was footnoted to the invalid Foulkes DOI; requires a verified replacement citation. #gap/needs-replication — the ESR1 regulation link is additionally based on cell-line and mouse data.

Most pathogenic variants are frameshift or nonsense mutations (loss of protein). Missense variants in the BRCT domains are frequently pathogenic; missense in the RING domain have variable classification (many VUSs remain). #gap/unsourced — precise variant class distribution figures require a ClinVar/LOVD-derived citation.

## Aging relevance

### BRCA1 expression declines with age

BRCA1 transcript and protein levels decrease in aging breast epithelium and in the aging ovary [^oktay2020]. This age-associated decline is proposed to reduce HR fidelity in normal (non-malignant) tissue, contributing to the age-related accumulation of somatic mutations and structural variants that underlies cancer risk and tissue dysfunction.

**Ovarian aging:** Oktay and colleagues demonstrated that BRCA1-mutant women show accelerated [[ovary|ovarian]] aging (lower ovarian reserve, earlier [[menopause]]), consistent with a role for BRCA1-dependent DSB repair in protecting primordial-follicle [[oocytes]] from accumulated oxidative DSBs [^oktay2020] [^oktay2015].

| Dimension | Status |
|---|---|
| BRCA1 age-decline in humans? | yes — transcript and protein data in breast and ovarian tissue [^oktay2020] |
| HR efficiency decline with age? | partial — indirect evidence via somatic mutation accumulation; direct assay data in aged non-malignant human tissue limited |
| Replicated mechanistically in humans? | no — most mechanistic aging data from mouse models |

#gap/needs-human-replication — direct measurement of HR efficiency (e.g., via chromosomal scar signatures) in normal aged human tissue as a function of BRCA1 expression is not established.

### BRCA1 deficiency, stem cell senescence, and genomic instability

BRCA1 loss in mammary stem cells (MaSCs) triggers p16Ink4a-mediated senescence, impairing regenerative capacity [^scott2017]. This is mechanistically relevant to [[stem-cell-exhaustion]]: accumulated HR deficiency → unresolved DSBs → p21/p16 activation → senescence. Conversely, p16 loss rescues BRCA1-deficient MaSC function in mouse models [^scott2017].

This connects BRCA1 to two hallmarks simultaneously: [[genomic-instability]] (upstream driver) and [[stem-cell-exhaustion]] (downstream consequence).

### GenAge status

GenAge entry 61 (human gene database): BRCA1 is listed as a putative human aging gene. Supporting evidence: (1) mice hypomorphic for Brca1 and heterozygous for Trp53 display premature aging signs at ~8 months; (2) centenarian studies suggest differences in BRCA1 allele frequencies vs. controls [^genage61]. Evidence quality is limited — no large prospective human aging cohort has directly tested BRCA1 variant effects on biological age trajectories. #gap/needs-human-replication.

## Key interactors

- [[bard1]] — RING-domain obligate heterodimer; required for E3 ligase activity and nuclear retention
- [[palb2]] — coiled-coil-mediated; bridges BRCA1 to [[brca2]] and RAD51 for HR execution
- [[brca2]] — downstream in the BRCA1-PALB2-BRCA2-RAD51 axis; mediates RAD51 filament assembly
- [[rad51]] — recombinase loaded by BRCA2; HR effector
- [[atm]] / ATR — upstream kinases that phosphorylate and activate BRCA1 post-DSB
- [[abraxas1]] (ABRAXAS1) — BRCA1-A complex scaffold; binds BRCT domain via phospho-Ser motif
- [[rap80]] (UIMC1) — RAP80; recruits BRCA1-A to K63-ubiquitinated H2A at DSBs
- [[ctip]] (RBBP8) — BRCA1-C complex; promotes resection
- [[tp53bp1]] (53BP1) — competes with BRCA1 for DSB end choice (53BP1 favors NHEJ; BRCA1 favors HR); antagonistic interplay is cell-cycle-regulated

## Pathway membership

- [[dna-damage-response]] — ATM/ATR → BRCA1 phosphorylation → HR vs checkpoint
- [[homologous-recombination]] — BRCA1 is the key licensing and scaffolding factor upstream of RAD51
- [[cell-cycle-checkpoints]] — BRCA1 required for G2/M checkpoint after IR (in coordination with [[chek1]] and [[chek2]])
- [[fanconi-anemia-pathway]] — BRCA1 mutations cause Fanconi anemia complementation group S (FANCS)

## Hallmark mapping

| Hallmark | Mechanism |
|---|---|
| [[genomic-instability]] | Loss of HR → increased mutagenesis, chromosomal rearrangements, aneuploidy; accumulates with age as BRCA1 declines |
| [[stem-cell-exhaustion]] | BRCA1-deficient MaSCs undergo p16-mediated senescence, depleting regenerative pool [^scott2017] |
| [[cellular-senescence]] | Unresolved DSBs in BRCA1-deficient cells activate p21/p16 → SASP-secreting senescent cells |

## Limitations and gaps

- #gap/needs-human-replication — HR efficiency in normal aged non-malignant human tissue as a function of BRCA1 expression: no direct assay data in primary literature confirmed here.
- #gap/needs-replication — Precise Lys-6-linked polyubiquitin substrate specificity of the BRCA1-BARD1 E3 ligase in vivo is incompletely characterized.
- #gap/contradictory-evidence — The scope of BRCA1's role in [[nhej]] vs. HR choice is debated; some studies show context-dependent NHEJ involvement.
- #gap/dose-response-unclear — Relationship between degree of BRCA1 expression decline with age and quantitative change in HR efficiency in normal tissue is not established.
- #gap/unsourced — BRCA1 pathogenic variant class distribution figures (frameshift vs. missense vs. nonsense) cited in clinical discussions should be sourced from ClinVar or LOVD.
- DOI 10.1056/NEJMra1306063 (stated as "Foulkes 2014, NEJM"): confirmed non-existent — HTTP 404 at doi.org, absent from Crossref, PubMed, Europe PMC, and Semantic Scholar as of 2026-05-05 verification pass. The DOI is fabricated or mis-transcribed. All claims attributed to this source (lifetime breast/ovarian cancer risk percentages; triple-negative phenotype mechanistic link to ESR1) are currently unsourced. Candidate replacement citations are noted in the `[^foulkes2014]` footnote. #gap/no-fulltext-access #gap/needs-canonical-id

## Footnotes

[^hall1990]: [[studies/hall-1990-brca1-17q21-linkage]] · doi:10.1126/science.2270482 · n=~329 individuals (23 families) · observational (genetic linkage) · LOD score >3 · model: familial early-onset breast cancer pedigrees · archive: in metadata (not_oa; no PDF downloaded)

[^moynahan1999]: [[studies/moynahan-1999-brca1-hr]] · doi:10.1016/s1097-2765(00)80202-6 · n=ES cell lines (in-vitro) · randomized (I-SceI DSB assay) · HR frequency ~10-fold reduced in Brca1-null cells · model: mouse embryonic stem cells · archive: pending download (bronze OA)

[^hashizume2001]: doi:10.1074/jbc.M109884200 · in-vitro (biochemical) · RING heterodimer requirement for E3 activity established · model: purified recombinant human BRCA1-BARD1 · #gap/needs-replication not confirmed in archive

[^wang2007]: doi:10.1016/j.molcel.2007.03.012 · in-vitro + in-vivo (human cell lines) · BRCA1-A complex assembly and RAP80 recruitment to ubiquitinated H2A · model: U2OS and MCF7 cells + mouse xenografts · archive: not confirmed in archive lookup

[^bryant2005]: [[studies/bryant-2005-parp-brca2-synthetic-lethality]] · doi:10.1038/nature03443 · n=cell lines (V79, V-C8 BRCA2-deficient, MCF7, MDA-MB-231, SW480SN.3) + mouse xenografts (40 CD-1 nude mice, 10/group) · in-vitro + in-vivo · BRCA2-deficient cells selectively killed by PARP inhibitors NU1025 and AG14361; BRCA2 deficiency confirmed to be the sensitivity determinant regardless of p53 status · model: CHO-derived V79/V-C8 cells; breast cancer cell lines; xenograft · archive: PDF available at  · cited_by: 5,038

[^farmer2005]: [[studies/farmer-2005-parp-brca-targeting]] · doi:10.1038/nature03445 · n=ES cell lines (BRCA1- and BRCA2-deficient mouse ES cells, isogenic WT controls) + xenografts (BALB/c-nude mice, 2×10⁶ ES cells s.c.; KU0058684 15 mg/kg i.p.) · in-vitro + in-vivo · BRCA1- and BRCA2-deficient ES cells selectively killed by PARP inhibitors KU0058684 (SF50 = 35 nM for BRCA1-KO ES cells vs ~2 µM WT) and KU0058948; tumour growth inhibition in xenografts (P = 0.03 vs vehicle; P = 0.01 vs WT xenograft) · model: mouse embryonic stem cells with homozygous Brca1 or Brca2 deletion · note: cell lines listed as "MDA-MB-436, EUFA423" in earlier wiki version were incorrect — those are not Farmer 2005 cell lines · archive: PDF available at  · cited_by: 6,496

[^foulkes2014]: CITATION INVALID — doi:10.1056/NEJMra1306063 returns HTTP 404 at doi.org; absent from Crossref, PubMed, Europe PMC, and Semantic Scholar as of 2026-05-05. This DOI does not exist. All claims footnoted here (lifetime cancer risk percentages; ESR1/triple-negative breast cancer mechanistic link) are unsourced until a valid replacement citation is identified. #gap/no-fulltext-access #gap/needs-canonical-id — do not cite this footnote for any claim. Candidate replacements: Antoniou et al. 2003 PMID 12677558 (meta-analysis, lifetime risk estimates); Chen & Parmigiani 2007 PMID 17452630 (updated estimates).

[^oktay2020]: [[studies/turan-2020-brca-atm-ovarian-aging]] · doi:10.1093/humupd/dmz043 · review + meta-analysis · BRCA1/2 mutations accelerate ovarian aging (reduced reserve, earlier menopause) · model: human cohort + mechanistic mouse data · archive: pending download (bronze OA) · cited_by: 164

[^oktay2015]: doi:10.1095/biolreprod.115.132290 · review · BRCA mutations, DNA repair deficiency, and ovarian aging · model: human + mouse · archive: pending download (bronze OA) · cited_by: 159

[^scott2017]: doi:10.1080/15384101.2017.1295185 · in-vivo (mouse) + in-vitro · p16 loss rescues functional decline of Brca1-deficient mammary stem cells · model: Brca1-conditional KO mice · archive: pending download (bronze OA) · cited_by: 22 (low; prioritize replication check)

[^genage61]: GenAge human database entry 61 (BRCA1) · https://genomics.senescence.info/genes/entry.php?hgnc=BRCA1 · accessed 2026-05-05 · putative human aging gene; premature aging in Brca1-hypomorphic/Trp53+/− mice; centenarian allele-frequency signals (references 37, 1838, 416 in GenAge)
