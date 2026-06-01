---
type: protein
aliases: [MLH1, hMLH1, COCA2, MutL homolog 1, "Lynch syndrome gene 2"]
uniprot: P40692
ncbi-gene: 4292
hgnc: 7127
mouse-ortholog: Mlh1
ensembl: ENSG00000076242
genage-id: 243
druggability-tier: 4
gtex-aging-correlation: null   # #gap/not-checked
mr-causal-evidence: not-tested
key-domains: [GHKL-ATPase, disordered-linker, C-terminal-dimerization]
key-ptms: []   # #gap/unsourced — documented PTMs are sparse in curated literature
pathways: ["[[mismatch-repair]]"]
hallmarks: ["[[genomic-instability]]"]
known-interactors: ["[[pms2]]", "[[pms1]]", "[[mlh3]]", "[[msh2]]", "[[exo1]]", "[[pcna]]"]
caused-by: []
causes: []
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Bronner 1994 (cloning), Lipkin 2002 (MutLγ meiosis), Herman 1998 (methylation incidence), and Hitchins 2007 (constitutional epimutation) all verified against primary source PDFs. Le 2015 cross-checked against already-verified [[mismatch-repair]] page (no PDF re-read). Baker 1996 closed-access — MLH1-null mouse claims tagged #gap/no-fulltext-access. UniProt P40692 verified via REST (756 aa confirmed). GenAge 243 and Open Targets ENSG00000076242 tier 4 confirmed via API. Domain residue boundaries (ATPase 1–335, linker 336–490, dimerization 491–756) are approximate and drawn from structural literature not independently re-verified against a primary crystallography source."
---


# MLH1 (MutL homolog 1)

The **scaffold subunit of the MutL heterodimers** in human [[mismatch-repair]] (MMR). MLH1 is the obligate shared partner of all three MutL complexes — primarily MutLα (MLH1 + PMS2), which introduces the strand-discriminating nick during MMR, and secondarily MutLγ (MLH1 + MLH3), which governs meiotic crossover. **MLH1 is the most frequently mutated gene in Lynch syndrome** (~50% of families) and its promoter hypermethylation is the dominant cause of sporadic MSI-H colorectal cancer. MLH1 loss drives microsatellite instability, elevated mutagenesis, and — paradoxically — high immunotherapy responsiveness.

## Identity

- **UniProt:** P40692 (MLH1_HUMAN)
- **NCBI Gene:** 4292
- **HGNC symbol:** MLH1
- **Ensembl:** ENSG00000076242
- **Mouse ortholog:** Mlh1 (one-to-one; high sequence conservation)
- **GenAge ID:** 243
- **Length:** 756 amino acids (canonical isoform)
- **Aliases:** hMLH1, COCA2, MutL homolog 1

## Domain architecture

MLH1 belongs to the GHKL ATPase superfamily (named for Gyrase B, Hsp90, Histidine kinase, MutL — a shared Bergerat ATP-binding fold). Three structural regions:

| Region | Residues (approx.) | Function |
|---|---|---|
| N-terminal ATPase domain | 1–335 | ATP binding and hydrolysis; conformational switch licensing MutLα endonuclease |
| Linker / disordered | 336–490 | Contains nuclear localization signal (aa 471–474); EXO1 interaction region (aa 410–650) |
| C-terminal dimerization domain | 491–756 | Heterodimerization with PMS2, PMS1, or MLH3 |

MLH1 itself has no endonuclease activity — the nicking activity that creates the strand-discrimination signal during MMR resides in the **PMS2 subunit** of MutLα. MLH1 serves as the scaffolding partner that licenses the active complex. Bronner et al. 1994 cloned hMLH1 (756 aa; 41% identity to yeast MLH1) and localized it to chromosome **3p21.3-23** by FISH, coinciding with the chromosome 3-linked HNPCC locus; germline missense mutations were identified in two chromosome 3-linked HNPCC families [^bronner1994].

## Three heterodimeric complexes

| Complex | Partner | Primary role |
|---|---|---|
| **MutLα** | [[pms2]] | Dominant MMR endonuclease; strand-specific nicking → EXO1 entry |
| **MutLβ** | [[pms1]] | Function uncertain; minimal contribution to MMR #gap/no-mechanism |
| **MutLγ** | [[mlh3]] | Meiotic crossover; MLH1 loading onto meiotic chromosomes requires MLH3 [^lipkin2002]; **not required for somatic MMR** (Lipkin 2002 explicitly found <1% MSI in Mlh3-null fibroblasts — Mlh3 knockout does not impair mismatch repair) #gap/no-mechanism — backup MMR role sometimes attributed to MutLγ in other sources but contradicted by Lipkin 2002 |

After [[msh2]]-containing MutSα/MutSβ recognizes a mismatch, MutLα is recruited to form a ternary complex. The PCNA/RFC replication-fork landmark directs MutLα to incise the nascent strand 5' of the mismatch, creating the entry point for [[exo1]]-driven excision. Full MMR mechanism is documented on the [[mismatch-repair]] pathway page.

## Role in aging

### Genomic instability

MLH1 deficiency — whether germline, somatic, or epigenetic — allows mismatch accumulation, driving microsatellite instability and elevated mutation rates. This directly contributes to the [[genomic-instability]] hallmark of aging:

- **Somatic MLH1 attrition in aged tissues** — Circumstantial evidence suggests MMR capacity declines in aged normal tissues, with implications for age-associated mutagenesis. #gap/unsourced — no quantitative, replicated study of MLH1 protein levels across human aging cohorts has been confirmed; tag for verification.
- **Clonal evolution** — Age-associated accumulation of MMR-deficient clones (below the threshold of frank malignancy) may degrade tissue function. Whether this is specifically MLH1-mediated in non-tumour tissues is not established.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (MSI, genomic instability) conserved? | yes |
| Age-associated decline replicated in humans? | no — #gap/unsourced, #gap/needs-human-replication |

### MLH1-null mouse model

Baker et al. 1996 demonstrated that *Mlh1*-null mice are viable but display:
- **Intestinal adenocarcinoma and lymphoma** — shortened lifespan from malignancy
- **Male and female infertility** — MutLγ (MLH1 + MLH3) is essential for meiotic crossover; *Mlh1*-null spermatocytes and oocytes show asynapsis and aneuploidy
- **Elevated somatic mutation rates** — consistent with MMR loss [^baker1996]

#gap/needs-human-replication — The lifespan shortening in MLH1-null mice reflects cancer incidence, not a primary aging phenotype. No direct "MLH1 activity declines with age → accelerated aging" evidence exists equivalent to p53's antagonistic-pleiotropy model.

## Lynch syndrome — the germline context

Lynch syndrome (HNPCC) is caused by germline loss-of-function mutations in MLH1, MSH2, MSH6, or PMS2. **MLH1 mutations account for ~50% of Lynch families** — the most common single cause. Note: Bronner 1994 cloned MLH1 and demonstrated mutations in chromosome 3-linked HNPCC families; the ~50% proportion figure derives from later epidemiologic reviews (see [[mismatch-repair]] Lynch syndrome table, sourced from Lynch 2009). #gap/needs-replication — proportion estimates vary by cohort and ascertainment method.

| Gene | Proportion of Lynch families |
|---|---|
| MLH1 | ~50% |
| MSH2 | ~40% |
| MSH6 | ~7–10% |
| PMS2 | ~5% |

Lifetime colorectal cancer risk in MLH1 carriers: ~40–80%. Endometrial cancer risk in female carriers: ~40–60%. Clinically, MLH1/MSH2 carriers have the highest penetrance among Lynch genes. Molecular diagnosis relies on MSI PCR panel (Bethesda panel) and/or IHC for MLH1 protein loss in tumor tissue.

## Sporadic MSI-H — somatic MLH1 promoter hypermethylation

Approximately **~13–15% of sporadic CRCs are MSI-H** (Herman 1998 reports ~13%; Hitchins 2007 cites ~15%), but the majority arise via **somatic CpG island methylation of the MLH1 promoter** rather than germline mutation [^herman1998]. Herman 1998 found hMLH1 promoter hypermethylation in **11 of 13 (84%) MSI+ sporadic CRC** primary tumors, compared with only 2 of 21 MSI- tumors (Fisher's exact p<0.0001). This epigenetic silencing:

- Is strongly associated with the **CpG island methylator phenotype (CIMP)** and BRAF V600E — a molecularly distinct pathway from Lynch-associated CRC
- Accounts for nearly all sporadic dMMR CRC
- Does **not** confer heritable Lynch syndrome risk to family members (somatic, not germline)
- Shares the same immunotherapy sensitivity profile as germline dMMR tumors (see below)

Functional consequence: demethylating agents (5-aza-2'-deoxycytidine; 5-azacytidine) restore MLH1 expression **and functional MMR capacity** in methylated cell lines (RKO, SW48, AN3CA), confirming that silencing is epigenetically maintained and causally responsible for the MMR defect [^herman1998]. Restoration of MMR activity was demonstrated using in vitro mismatch-repair assays, formally excluding functionally important coding-region mutations as the primary cause in these lines.

## Constitutional MLH1 epimutation — germline epigenetic silencing

A rare but important subset: **constitutional (germline) MLH1 promoter hypermethylation** causes a Lynch-like phenotype without any coding sequence mutation. Hitchins et al. 2007 screened 24 patients with early-onset colorectal/endometrial cancer lacking germline MLH1/MSH2 sequence mutations, identifying two unrelated probands (Patient A, Patient B) with constitutional MLH1 promoter hypermethylation of one allele in somatic cells from all three embryonic germ layers. In Patient A's family, the epimutation was transmitted from mother to son (1 of 4 sons; family member II6-A), with monoallelic silencing in somatic tissues but complete erasure in his spermatozoa (42% methylation in peripheral blood leukocytes; 0% in sperm) [^hitchins2007]. Three other siblings inherited the maternal haplotype but not the epimutation — consistent with meiotically reversible transmission. Allele-specific and tissue-specific methylation patterns were confirmed by bisulfite allelic sequencing.

Key features distinguishing constitutional epimutation from classical Lynch:
- Epimutation may be reversible (erased in gametes in some cases) — variable transmission
- Normal sequencing will miss the diagnosis; methylation-specific assays required
- Clinical surveillance recommendations mirror classical Lynch syndrome

#gap/needs-replication — Constitutional MLH1 epimutation is rare; the Hitchins 2007 cohort was small, and inheritance patterns (reversible vs. stable transmission) are not fully resolved.

## Immunotherapy angle — dMMR as a predictive biomarker

MLH1 loss — whether germline or somatic — produces MSI-H/dMMR tumors with a dramatically elevated neoantigen burden, making them highly responsive to PD-1 checkpoint blockade. This is the most clinically impactful consequence of MLH1 deficiency:

Le et al. 2015 (NEJM) demonstrated that dMMR tumors responded to pembrolizumab with ~40% ORR vs 0% in pMMR colorectal cancer (immune-related PFS 78% vs 11% at 20 weeks) [^le2015]. The 2017 FDA tissue-agnostic approval of pembrolizumab for any dMMR/MSI-H solid tumor — the first tumor-agnostic oncology drug approval — was the clinical culmination of this insight. See [[mismatch-repair]] for the full trial summary including André et al. 2020 (KEYNOTE-177).

**Druggability-tier note:** MLH1 is tier 4 (no MLH1-specific drug; immunotherapy targets PD-1/PD-L1, not MLH1 itself). MLH1 loss functions as a **predictive biomarker for dMMR-targeted immunotherapy**, not as a drug target. The [[mismatch-repair]] pathway page carries druggability-tier 1 to reflect pembrolizumab's clinical use in this context; the discrepancy is intentional — the pathway-level druggability reflects the indirect pharmacological handle (PD-1 blockade), not direct MLH1 modulation.

## Pathway membership

- [[mismatch-repair]] — core scaffold of all three MutL complexes; rate-limiting for mismatch correction
- [[dna-damage-response]] — MLH1-dependent MMR signaling activates ATR → p53 under sustained mismatch load
- [[genomic-instability]] — hallmark consequence of MLH1 deficiency

## Key interactors

- [[pms2]] — endonuclease partner in MutLα; PMS2 carries the DQHA(X)2E(X)4E active-site motif required for strand nicking
- [[pms1]] — MutLβ partner; function poorly defined
- [[mlh3]] — MutLγ partner; meiotic crossover; secondary MMR backup
- [[msh2]] — upstream MutSα/MutSβ recognizer; recruits MutLα to mismatch sites
- [[exo1]] — interacts with MLH1 linker (aa 410–650); excision nuclease
- [[pcna]] — strand-discrimination landmark directing MutLα nicking to the nascent strand
- [[p53]] — downstream effector of sustained MLH1-dependent DDR signaling

## Limitations and gaps

- **Age-associated MLH1 decline in normal human tissues** — No confirmed, quantitative primary study documenting MLH1 protein or expression changes across human aging cohorts. Claims in this area remain `#gap/unsourced`. #gap/unsourced
- **MutLβ function** — The MLH1 + PMS1 complex has no clearly established function in MMR or other DNA transactions. #gap/no-mechanism
- **GTEx aging correlation** — Not retrieved; would require sops/finding-tissue-expression.md workflow. #gap/not-checked
- **Mendelian randomization** — No MR study has been identified linking germline MLH1 variation to aging-related outcomes (separate from cancer-risk GWAS). Tagged `not-tested` in frontmatter.
- **Constitutional epimutation genetics** — Transmission fidelity and penetrance of MLH1 epimutations are incompletely characterized; based on small case series. #gap/needs-replication
- **Canonical ID verification** — UniProt P40692 confirmed via REST (MLH1_HUMAN, 756 aa, Homo sapiens). Open Targets ENSG00000076242 confirmed tier 4 (no approved drug, no advanced clinical SM/AB/PR). NCBI Gene 4292 and HGNC 7127 not independently re-verified against their respective databases; recommend cross-check on next lint pass.
- **Domain residue boundaries** — The table entries (ATPase 1–335, linker 336–490, dimerization 491–756) are approximate, drawn from structural biology literature not independently verified against a primary crystallography source. UniProt annotates disordered regions at 355–378 and 400–491; EXO1 interaction at 410–650. Domain boundary numbers should be treated as approximate.

## Cross-references

- [[mismatch-repair]] — full pathway mechanism; Lynch syndrome cancer risks; immunotherapy data
- [[msh2]] — upstream MutSα recognition scaffold; see also for cross-claim consistency on Lynch proportions and Le 2015 citation
- [[pms2]] — catalytic endonuclease partner in MutLα
- [[mlh3]] — meiotic MutLγ partner
- [[genomic-instability]] — hallmark driven by MMR deficiency
- [[dna-damage-response]] — broader DDR network; ATR/p53 activation downstream of MMR
- [[p53]] — apoptotic/senescent effector of sustained MMR damage signaling
- [[exo1]] — excision nuclease directed by MLH1-dependent nicking

## Footnotes

[^bronner1994]: doi:10.1038/368258a0 · Bronner CE, Baker SM, Morrison PT, Warren G, Smith LG, Lescoe MK, Kane M, Earabino C, Lipford J, Lindblom A, Tannergård P, Bollag RJ, Godwin AR, Ward DC, Nordenskjöld M, Fishel R, Kolodner R, Liskay RM · *Nature* 1994, 368:258–261 · in-vitro + human genetics · n=2 chromosome 3-linked HNPCC families · model: human; cloned hMLH1 cDNA encoding 756 aa open reading frame (41% identity to yeast MLH1); FISH localization to chromosome 3p21.3-23; germline C→T missense mutation (Ser→Phe at aa 44 in conserved MutL region) in family 2 affected individuals; does NOT claim ~50% Lynch proportion (that figure is from epidemiologic reviews) · 2062 citations · locally available:  (local PDF)

[^herman1998]: doi:10.1073/pnas.95.12.6870 · Herman JG, Umar A, Polyak K, Graff JR, Ahuja N, Issa JP, Markowitz S, Willson JKV, Hamilton SR, Kinzler KW, Kane MF, Kolodner RD, Vogelstein B, Kunkel TA, Baylin SB · *PNAS* 1998, 95:6870–6875 · in-vitro + observational · n=13 MSI+ sporadic CRC primary tumors (+ 21 MSI-, 37 CRC cell lines) · model: human; 11/13 (84%) MSI+ sporadic CRC primary tumors showed hMLH1 promoter hypermethylation (vs 2/21 MSI-, p<0.0001); 0/34 sporadic CRC showed hMSH2 methylation; demethylation with 5-aza-2'-deoxycytidine restored MLH1 protein and functional MMR in RKO, SW48, AN3CA cell lines; Kane MF is 11th author (note: a separate Kane MF 1997 Cancer Res paper [ref 18 in this article] first described MLH1 methylation in 4 primary CRCs) · 1861 citations · locally available:  (local PDF)

[^hitchins2007]: doi:10.1056/NEJMoa064522 · Hitchins MP, Wong JJL, Suthers G, Suter CM, Martin DIK, Hawkins NJ, Ward RL · *New England Journal of Medicine* 2007, 356:697–705 · observational (family pedigree + molecular characterisation) · n=24 screened patients → 2 probands (Patient A, Patient B) + 9 first-degree relatives · model: human; constitutional hemiallelic MLH1 promoter hypermethylation confirmed in all somatic tissues from 3 germ layers in both probands; transmission from mother (Patient A) to 1 of 4 sons (family member II6-A) confirmed with 42% MLH1 methylation in peripheral blood vs 0% in spermatozoa; 3 siblings inherited haplotype without epimutation (meiotically reversible); no evidence of in-cis sequence defects driving the epimutation · 402 citations · locally available:  (local PDF)

[^lipkin2002]: doi:10.1038/ng931 · Lipkin SM, Moens PB, Wang V et al. · *Nature Genetics* 2002, 31:385–390 · in-vivo (mouse KO) · n=N/A · model: Mlh3-null mouse; viable but sterile (male and female); spermatocytes progress to metaphase then undergo apoptosis; oocytes fail to complete meiosis I (only 7% of Mlh3-null oocytes progress to 2-cell stage); Mlh3 required for Mlh1 loading onto meiotic chromosomes; <1% MSI in Mlh3-null fibroblasts — Mlh3 is NOT required for somatic MMR; rescue by human MLH3 BAC transgene confirmed specificity; 380 citations · locally available:  (local PDF)

[^baker1996]: doi:10.1038/ng0796-336 · Baker SM, Plug AW, Prolla TA, Bronner CE et al. · *Nature Genetics* 1996, 13:336–342 · in-vivo (mouse KO) · n=N/A · model: Mlh1-null mouse; intestinal adenocarcinoma + lymphoma + meiotic failure + infertility; 825 citations · download status: not_oa (no local PDF) #gap/no-fulltext-access

[^le2015]: doi:10.1056/NEJMoa1500596 · Le DT, Uram JN, Wang H et al. · *New England Journal of Medicine* 2015, 372:2509–2520 · phase 2 · n=41 (11 dMMR-CRC, 21 pMMR-CRC, 9 dMMR non-CRC) · ORR ~40% dMMR-CRC vs 0% pMMR-CRC; immune-related PFS 78% vs 11% at 20 weeks · model: human · locally available:  (local PDF)
