---
type: protein
aliases: [PALB2, FANCN, FA-N, Partner and Localizer of BRCA2]
uniprot: Q86YC2
ncbi-gene: 79728
hgnc: 26144
ensembl: ENSG00000083093
genage-id: null
pathways:
  - "[[pathways/homologous-recombination]]"
  - "[[pathways/dna-damage-response]]"
  - "[[pathways/fanconi-anemia-pathway]]"
hallmarks:
  - "[[hallmarks/genomic-instability]]"
sens-categories: []
druggability-tier: 3
caused-by: []
causes:
  - "[[hallmarks/genomic-instability]]"
gtex-aging-correlation: null
mr-causal-evidence: partial
verified: true
verified-date: 2026-05-13
verified-by: claude
verified-scope: "Reid 2007 and Xia 2006 and Antoniou 2014 primary PDFs read end-to-end; Rantakari 2010 and Rossi 2007 verified via PubMed abstract (PDFs failed to download); Daza-Martin 2019 verified via PubMed abstract (PDF still downloading at verification time); Tung 2020 not verifiable (not_oa, no local PDF). Structural domain coordinates cross-checked against UniProt Q86YC2 REST API. Identity fields (NCBI Gene, HGNC, Ensembl, UniProt) confirmed via respective APIs. mr-causal-evidence updated from not-tested to partial: GWAS Catalog shows germline hits in PALB2 region (rs45569335, p<3e-10) but no MR study has been published leveraging these instruments for aging-relevant outcomes."
---

# PALB2 (Partner and Localizer of BRCA2)

PALB2 is a nuclear scaffold protein that physically bridges [[brca1]] and [[brca2]] to enable homologous recombination (HR)-mediated repair of DNA double-strand breaks (DSBs). It is the essential molecular coupler of the BRCA1–PALB2–BRCA2–RAD51 repair axis: without PALB2, BRCA2 cannot localize to chromatin damage sites and HR collapses. Monoallelic germline mutations confer breast, pancreatic, and ovarian cancer susceptibility at penetrance broadly comparable to BRCA2; biallelic loss causes Fanconi anemia subgroup N (FA-N), a rare pediatric bone marrow failure and cancer predisposition syndrome. In the aging context, PALB2 is a critical node of HR-pathway competence — a capacity that declines with age in hematopoietic stem cells and other regenerative compartments.

## Identity

| Field | Value |
|---|---|
| UniProt | Q86YC2 (PALB2_HUMAN; Swiss-Prot reviewed) |
| NCBI Gene | 79728 |
| HGNC | 26144 |
| Ensembl | ENSG00000083093 |
| Gene symbol | PALB2 (synonym: FANCN) |
| Chromosomal location | 16p12.2 |
| Canonical sequence length | 1,186 amino acids |
| Mouse ortholog | Palb2 |
| GenAge entry | Not listed (null) #gap/needs-canonical-id |

UniProt entry last updated January 28, 2026. Evidence level: protein.

## Structure and functional domains

PALB2 is organized around three mechanistically distinct regions:

**N-terminal coiled-coil / oligomerization domain (CC: residues 9–41; oligomerization region: residues 1–160)**
The coiled-coil proper spans residues 9–41 (UniProt Q86YC2); the broader N-terminal region (1–160) is required for oligomerization and focal concentration at DNA damage sites. This region also carries the BRCA1-interaction interface (residues 1–319). PALB2 self-associates through this domain when not engaged by BRCA1; BRCA1 binding displaces the self-association and opens the complex for HR-scaffold assembly. RAD51 also contacts this region (residues 1–200), enabling a direct BRCA1-independent contribution to RAD51 loading.

**Chromatin-association motif (ChAM; residues 395–446)**
A short domain that enables direct nucleosome binding, contributing to PALB2's chromatin recruitment independent of its protein interactions. Loss of ChAM function impairs PALB2 localization to damaged chromatin.

**C-terminal WD40 β-propeller (residues 854–1186)**
Seven WD40 repeats form a canonical β-propeller that mediates BRCA2 binding, RAD51C binding, and interaction with the translesion polymerase POLH (residues 775–1186). This domain is the anchor for the downstream HR effector complex.

**Post-translational modifications**
Eight phosphorylation sites confirmed: Ser172, Ser190, Ser285, Ser376, Ser387, Ser454, Ser660, Ser781. Functional significance of individual sites is incompletely characterized. #gap/no-mechanism for most individual phosphorylation events.

## Function: HR scaffold

PALB2 is the obligate linker of the two master HR proteins:

1. BRCA1 (via N-terminal CC domain) recruits PALB2 to the DSB site in S/G2 phase
2. PALB2 (via C-terminal WD40) recruits BRCA2 to chromatin
3. BRCA2 loads RAD51 onto RPA-coated resected ssDNA, initiating strand invasion and template-directed repair

This BRCA1–PALB2–BRCA2 axis was established by Xia et al. (2006), who demonstrated that depletion of PALB2 abolished BRCA2 nuclear-foci formation at damage sites and phenocopied BRCA2 loss for HR sensitivity [^xia2006]. Without PALB2, BRCA2 is physically excluded from damaged chromatin — the scaffold function is not redundant.

PALB2 also participates in HR outside the strict BRCA1-dependent pathway: its direct RAD51 contact (N-terminal, residues 1–200; UniProt Q86YC2) and chromatin-binding (ChAM) provide BRCA1-independent HR contributions. #gap/needs-replication — the specific contribution of PALB2's BRCA1-independent RAD51 interaction to HR efficiency in cells has not been quantified in Xia 2006 (which focuses on BRCA2 chromatin localization); it is inferred from structural and biochemical data.

## Function: replication fork context

PALB2's role in protecting stalled replication forks from nucleolytic degradation is mechanistically distinct from its HR scaffold role and remains an area of active investigation. Daza-Martin et al. (2019) showed that the canonical BRCA1–PALB2 interaction is **not** required for fork protection — instead, the BRCA1–BARD1 complex (not the BRCA1–PALB2 interface) is the relevant fork-protective unit [^dazamartin2019]. #gap/contradictory-evidence — earlier models inferred PALB2-dependent fork protection from PALB2 knockdown effects on fork stability, but the 2019 Nature paper dissects the molecular requirement more precisely.

## Discovery

Xia et al. (2006) identified PALB2 as a BRCA2 interactor by co-immunoprecipitation and named it "Partner and Localizer of BRCA2" [^xia2006]. The same year (published online December 2006, print February 2007), Reid et al. showed that biallelic PALB2 mutations in 7 unrelated families caused a Fanconi anemia-like syndrome with cellular hypersensitivity to mitomycin C, establishing PALB2 as the Fanconi anemia complementation group N (FANCN) gene [^reid2007]. The canonical FA genetic naming (FANCN = PALB2) is therefore distinct from FANCD1 (= BRCA2) and FANCJ (= BRIP1).

## Disease: monoallelic germline mutations

### Breast cancer susceptibility

Monoallelic loss-of-function mutations in PALB2 are established high-to-moderate penetrance breast cancer susceptibility alleles. The canonical penetrance estimate from Antoniou et al. (2014), analyzing 362 female PALB2 mutation carriers from 154 families: cumulative breast cancer risk by age 70 was **33% (95% CI 25–44%) with no affected first-degree relatives**, rising to **58% (95% CI 50–66%) with two or more affected first-degree relatives diagnosed at age 50 or younger** [^antoniou2014]. By age 50, absolute risk was 14% (95% CI 9–20%). The mean cumulative risk across all carriers (without family history adjustment) was 35% (95% CI 26–46%) by age 70.

Relative risk vs. population background was ~8–9x in women under 40, declining to ~5x by age 60+ — demonstrating highest relative risk in early-onset context, mirroring BRCA1/2 biology [^antoniou2014].

| Extrapolation dimension | Status |
|---|---|
| Pathway conserved across populations? | yes — confirmed across European, North American, and limited Asian cohorts |
| Family-history effect replicated? | yes — stratified analysis in Antoniou 2014 |
| Men included? | partial — male breast cancer association documented but penetrance not estimated in Antoniou 2014 |

### Pancreatic and ovarian cancer

PALB2 germline mutations confer ~3–5-fold elevated pancreatic ductal adenocarcinoma risk (UniProt disease annotation PNCA3). Ovarian cancer risk is elevated above population baseline but substantially lower than for BRCA1/2. NCCN guidelines (approximately 2023 update) added PALB2 to genetic-testing panels and to eligibility criteria for PARP inhibitor therapy in advanced breast cancer [^tung2020].

## Disease: biallelic loss — Fanconi anemia subgroup N (FA-N)

Biallelic PALB2 mutation causes FA-N, a severe Fanconi anemia phenotype [^reid2007]. Key features:

- Bone marrow failure (pancytopenia) in childhood
- Congenital abnormalities (skeletal, renal)
- Markedly elevated pediatric cancer risk, including medulloblastoma and Wilms tumor
- Cellular hypersensitivity to DNA crosslinking agents (mitomycin C confirmed in Reid 2007; cisplatin sensitivity is characteristic of FA broadly but not specifically demonstrated in FA-N by Reid et al.) — MMC sensitivity is the diagnostic test
- Progeria-like features: bone marrow failure and growth retardation as segmental aging phenotype

FA-N fits within the broader FA genetic complementation framework: the FA core complex ubiquitinates FANCD2 and FANCI (ID2 complex), which in turn recruit downstream HR factors including PALB2 (FANCN) and BRCA2 (FANCD1) to resolve crosslink-induced DSBs. Loss of any FA gene blocks this cascade at or upstream of the ID2 monoubiquitination checkpoint. See [[pathways/fanconi-anemia-pathway]] for pathway-level context.

## Aging relevance

### HR-pathway decline in aging hematopoietic stem cells

Aging hematopoietic stem cells (HSCs) accumulate DNA damage progressively, as demonstrated by Rossi et al. (2007): quiescent HSCs attenuate DNA damage checkpoints and permit lesion accumulation, which becomes functionally deleterious when these cells are activated for regeneration [^rossi2007]. PALB2 is a rate-limiting node in the HR pathway that would be expected to contribute to this repair-capacity decline, though no direct HSC-specific PALB2 aging study has been published as of 2026-05-13. #gap/needs-human-replication

### Mouse knockout phenotype

Homozygous Palb2 knockout in mice is embryonic lethal by E9.5, with defective mesoderm differentiation after gastrulation [^rantakari2010]. This parallels Brca1 and Brca2 knockouts and underscores PALB2's essential developmental role in HR-dependent genome maintenance. Heterozygous Palb2+/− mice develop normally through at least 8 months with no tumor predisposition over that short observation window [^rantakari2010]. Conditional tissue-specific knockouts have not been systematically published for the aging context. #gap/needs-human-replication

### FA-N as segmental progeria

FA-N patients present with hallmarks that overlap with segmental aging syndromes: bone marrow failure, reduced regenerative capacity, and elevated cancer risk — the same triad seen in Werner syndrome, Cockayne syndrome, and other DNA-repair-deficiency progerias. This positions PALB2 within the broader principle that HR competence is a longevity determinant.

### Connection to HR-longevity biology

Comparative aging biology implicates enhanced HR as a longevity mechanism: long-lived species (naked mole rats, bowhead whales) show elevated DNA repair capacity relative to shorter-lived rodents. See [[pathways/homologous-recombination]] for the general framework. PALB2 as the BRCA1–BRCA2 bridge is one of the mechanistically tractable nodes in this pathway. No direct intervention targeting PALB2 expression for longevity has been tested.

## Pathway membership and interactors

**Pathway membership:**
- [[pathways/homologous-recombination]] — load-bearing scaffold node (BRCA1–PALB2–BRCA2 axis)
- [[pathways/dna-damage-response]] — responds to ATM/ATR-signaled DSBs
- [[pathways/fanconi-anemia-pathway]] — FANCN designation; downstream of ID2 complex ubiquitination

**Key interactors (UniProt Q86YC2 experimental evidence):**

| Partner | Domain on PALB2 | Function |
|---|---|---|
| BRCA1 | N-terminal (1–319) | Chromatin recruitment; HR initiation |
| BRCA2 | C-terminal WD40 (854–1186) | BRCA2 chromatin localization; RAD51 loading |
| RAD51 | N-terminal (1–200) | Direct RAD51 stabilization |
| RAD51C | C-terminal WD40 | Variant HR (RAD51 paralogs) |
| MRG15 (MORF4L1) | ChAM region | Chromatin recruitment via H3K36me3-modified nucleosomes |
| KEAP1 | — | Oxidative stress regulatory interaction (contested) #gap/contradictory-evidence |
| POLH | C-terminal (775–1186) | Translesion synthesis at stalled forks |
| USP11 | — | Deubiquitylase; may modulate PALB2 stability |
| ERCC5 (XPG) | — | Nucleotide excision repair crosstalk |

## Druggability

### Cancer context (tier 1 indication-bound)

PARP inhibitors exploit synthetic lethality in HR-deficient tumors. Tung et al. (2020) — the TBCRC 048 Phase II trial — demonstrated 82% objective response rate (ORR) in patients with germline PALB2 mutations treated with olaparib monotherapy (n=13 evaluable), with median PFS 13.3 months [^tung2020]. This is the highest ORR reported for any single-gene-defined cohort in that trial, including sBRCA1/2 (50% ORR). Clinical-stage PARP inhibitors with PALB2-relevant evidence include olaparib, talazoparib, niraparib, and rucaparib.

NCCN guidelines now recognize PALB2 alongside BRCA1/2 for PARP inhibitor eligibility in advanced HER2-negative breast cancer.

### Aging-context druggability (tier 3)

No aging-indication intervention targets PALB2 directly. The protein lacks a known small-molecule binding pocket amenable to activation; it functions as a scaffold. Possible indirect approaches (e.g., upregulating PALB2 expression to boost HR in aged HSCs) are speculative and untested. Druggability tier 3 reflects the absence of any aging-validated probe or clinical trial in an aging indication.

**Note:** The tier 1 oncology designation (PARP-inhibitor synthetic-lethality) is indication-bound — it applies to PALB2-deficient tumor cells, not to the aging-biology context in which one would want to enhance PALB2 function, not exploit its loss. Per CLAUDE.md R26/R27 aging-context convention, aging-context tier = 3.

## Limitations and gaps

- `#gap/needs-human-replication` — whether PALB2 expression or activity declines in aging human tissues (especially HSCs and regenerative compartments) has not been directly measured; aging-context data are inferred from model systems and FA-N phenotypes
- `#gap/no-mechanism` — how age-associated changes in chromatin state or PTM landscape affect PALB2 ChAM binding and HR efficiency
- `#gap/needs-human-replication` — conditional tissue-specific Palb2 knockouts in aging contexts (post-developmental) have not been published; Rantakari 2010 only shows heterozygotes are grossly normal to 8 months
- `#gap/contradictory-evidence` — PALB2's role in replication fork protection is mechanistically disputed (Daza-Martin 2019 vs earlier models); the exact extent to which PALB2 (vs BRCA1-BARD1) protects stalled forks requires resolution
- `#gap/needs-canonical-id` — PALB2 does not appear in GenAge (HAGR); if an entry is added in future database updates, `genage-id:` should be populated
- `#gap/needs-gtex-query` — `gtex-aging-correlation:` not populated; GTEx v2 API lookup needed for tissue-by-age expression profile

## Footnotes

[^xia2006]: doi:10.1016/j.molcel.2006.05.022 · Xia B et al. (Mol Cell 2006) · in-vitro (human cell lines: HeLa, U2OS, WI38, 293T, MCF10A) · n=multiple cell lines · discovery paper identifying PALB2 (FLJ21816) as BRCA2 nuclear binding partner by co-IP; demonstrates BRCA2 localization collapse and HR reduction (~3-fold by DR-GFP assay) on PALB2 siRNA depletion; PALB2 promotes stable BRCA2 association with chromatin (P100/S420 fractions); PALB2 siRNA phenocopies BRCA2 siRNA for MMC sensitivity and intra-S checkpoint; BRCA2 N-terminal residues 10–40 contain the PALB2-binding motif · archive: locally downloaded at 

[^reid2007]: doi:10.1038/ng1947 · Reid S et al. (Nat Genet 2007; published online Dec 2006) · in-vitro + patient cells · n=7 unrelated FA families (7 affected individuals with PALB2 mutations sequenced from 82 FA probands; 4 had direct biallelic confirmation, 3 confirmed via parental samples) · biallelic PALB2 mutations → FA-N; mitomycin C sensitivity; normal FANCD2 monoubiquitination (downstream of FA core complex) · archive: locally downloaded at 

[^antoniou2014]: doi:10.1056/NEJMoa1400382 · Antoniou AC et al. (NEJM 2014) · observational (family cohort, modified segregation analysis) · n=154 families eligible after ascertainment adjustment (175 with ≥1 affected member; 362 female PALB2 mutation carriers analyzed, 229 with breast cancer) · cumulative breast cancer risk by 70: 33% (95% CI 25–44%; no FHx) to 58% (95% CI 50–66%; ≥2 FDRs with BC at age 50); mean across all carriers 35% (26–46%); relative risk 8–9x in women <40, 6–8x at 40–60, ~5x at 60+ vs UK background incidence 1993–1997 · archive: locally downloaded at 

[^rantakari2010]: doi:10.1093/hmg/ddq207 · Rantakari P et al. (Hum Mol Genet 2010) · PMID:20484223 · in-vivo (mouse knockout) · homozygous Palb2 null: embryonic lethal by E9.5 at latest, smaller and developmentally retarded, defective mesoderm differentiation after gastrulation; p21 (CDKN1A) expression increased; blastocysts show growth defect in vitro; heterozygous Palb2+/− mice normal and fertile, no macroscopic tumors through 8 months follow-up · phenotype parallels Brca1 and Brca2 knockouts · archive: PDF download failed (bronze OA); verified via PubMed abstract (PMID:20484223)

[^tung2020]: doi:10.1200/JCO.20.02151 · Tung NM et al., TBCRC 048 (J Clin Oncol 2020) · phase-2 trial · n=13 evaluable gPALB2 patients · olaparib ORR 82% (highest of any cohort in trial); median PFS 13.3 months · archive: not OA; no local PDF

[^dazamartin2019]: doi:10.1038/s41586-019-1363-4 · Daza-Martin M et al. (Nature 2019; "Isomerization of BRCA1-BARD1 promotes replication fork protection") · in-vitro (human cells) · PMID:31270457 · canonical BRCA1–PALB2 interaction NOT required for fork protection; BRCA1–BARD1 complex (regulated by PIN1-mediated conformational change) is required; BRCA1-BARD1 enhances RAD51 at stalled forks; cancer-associated BRCA1-BARD1 variants identified that impair fork protection but retain HR proficiency · archive: download in progress at verification time; verified via PubMed abstract

[^rossi2007]: doi:10.4161/cc.6.19.4759 · Rossi DJ et al. (Cell Cycle 2007) · PMID:17700071 · in-vivo (murine HSCs) + in-vitro · review/perspective · quiescent (G0) HSC status attenuates checkpoint control and DNA damage responses; aged murine HSCs maintain numerical reserves despite genomic damage accrual; functional capacity severely impaired under stress/regeneration conditions; mechanism: quiescence cytoprotects but permits lesion accumulation · archive: PDF download failed; verified via PubMed abstract (PMID:17700071)
