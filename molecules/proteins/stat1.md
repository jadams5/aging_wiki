---
type: protein
aliases: [signal transducer and activator of transcription 1, STAT1-alpha, STAT1-beta, p91, p84]
uniprot: P42224
ncbi-gene: 6772
hgnc: 11362
ensembl: ENSG00000115415
mouse-ortholog: Stat1
druggability-tier: 3
genage-id: null
pathways: ["[[jak-stat-pathway]]", "[[type-i-interferon-signaling]]"]
hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]"]
sens-categories: []
known-interactors: ["[[jak1]]", "[[jak2]]", "[[tyk2]]", "[[stat2]]", "[[irf9]]", "[[irf3]]"]
caused-by: ["[[jak-stat-pathway]]", "[[type-i-interferon-signaling]]"]
causes: ["[[chronic-inflammation]]", "[[cellular-senescence]]"]
gtex-aging-correlation: null
mr-causal-evidence: not-tested
verified: true
verified-date: 2026-05-13
verified-by: claude
verified-scope: "Au-Yeung 2013, Gonzalo 2023, Hu 2021, Li 2023 PDFs read and cross-checked. Shaw 2013 (NRI) and Rentschler 2026 (GeroScience) are not_oa / download-failed — claims citing these tagged #gap/no-fulltext-access. Pang 2011 and Tierney 2014 gap tags resolved: Pang 2011 exists but has no STAT1 content; Tierney 2014 (Nature Medicine, not Cell Stem Cell) is about STAT3 not STAT1. Domain architecture residue numbers approximate (consistent with Hu 2021 structural schematic). Canonical identity fields (UniProt P42224, NCBI Gene 6772, HGNC 11362, Ensembl ENSG00000115415) not independently re-verified against databases."
literature-checked-through: 2026-05-13
---

# STAT1

STAT1 is a latent cytoplasmic transcription factor and the principal signal transducer for type I interferons (IFN-alpha/beta) and type II interferon (IFN-gamma). It is activated by JAK-mediated phosphorylation at Tyr701, enabling dimerization and nuclear translocation. STAT1 drives two divergent transcriptional programs — the GAF homodimer (IFN-gamma / GAS elements) and the ISGF3 heterotrimer with STAT2 and IRF9 (IFN-alpha/beta / ISREs) — that together govern antiviral immunity, inflammatory gene expression, and growth arrest. In aging, STAT1 is a major convergence node: chronic interferon-tone drives sustained STAT1 activation across tissues, contributing to senescence induction and SASP amplification [^au-yeung2013] [^hu2021]. Evidence for direct roles in satellite-cell dysfunction and HSC aging specifically via STAT1 (as opposed to the broader JAK-STAT axis and IFN signaling) remains correlative and incompletely separated from other STAT family members. #gap/needs-replication

## Identity

- **UniProt:** P42224 (STAT1_HUMAN)
- **NCBI Gene:** 6772
- **HGNC symbol:** STAT1 (HGNC:11362)
- **Ensembl:** ENSG00000115415
- **Mouse ortholog:** Stat1 (high conservation; IFN-signaling function fully conserved)
- **Length:** 750 amino acids (isoform alpha, p91); 712 aa (isoform beta, p84 — lacks C-terminal transactivation domain)

## Domain architecture

STAT1 has six canonical structural domains:

| Domain | Residues (approx.) | Function |
|---|---|---|
| N-terminal domain (ND) | 1–122 | Cooperative DNA binding; dimer-of-dimers assembly at tandem GAS sites |
| Coiled-coil domain (CCD) | 136–317 | Nuclear export; anti-viral effector interactions; ISGF3 assembly |
| DNA-binding domain (DBD) | 320–480 | Sequence-specific recognition of GAS (TTCNNNGAA) or ISRE elements |
| Linker domain | 480–575 | Couples DBD to SH2 domain; conformational flexibility |
| SH2 domain | 575–670 | pTyr701 recognition; receptor docking; homo/heterodimerization |
| Transactivation domain (TAD) | 715–750 | Transcriptional co-activator recruitment; absent in p84/beta isoform |

The **p84 (beta) isoform**, lacking the TAD, can act as a dominant-negative for some (not all) STAT1 target genes — its relative abundance may modulate IFN-response amplitude. Additionally, unphosphorylated STAT1 (U-STAT1, which accumulates during prolonged IFN treatment) has been shown to regulate ISG transcription through distinct mechanisms [^au-yeung2013].

## Phosphosite specificity and activation logic

**Tyr701 (canonical activation):** phosphorylated by JAK1, JAK2, or TYK2 depending on receptor context. Required for:
- Homodimerization (GAF complex; IFN-gamma response)
- ISGF3 heterotrimer assembly with STAT2+IRF9 (IFN-alpha/beta response)
- Nuclear translocation and DNA binding at GAS / ISRE elements

Without pTyr701, STAT1 resides in the cytoplasm as a latent monomer.

**Ser727 (transcriptional co-activation):** phosphorylated by CAMK2, p38/MAPK14, CDK8, and other kinases. Does not drive dimerization but enhances transactivation ~2-fold for a subset of STAT1 target genes [^au-yeung2013]. CDK8-mediated pSer727 is particularly relevant in the senescence context (CDK8 is an IFN-gamma-inducible kinase).

**Ser708 (negative modulator):** phosphorylated by IKKe in response to IFN-beta; IKKe phosphorylation of Ser708 inhibits AAF/GAF formation and affects the ISGF3-dependent vs. GAF-dependent target gene balance [^au-yeung2013].

**Lys525 methylation:** monomethylation by SET9 is required upstream of Tyr701 phosphorylation and nuclear translocation; represents an epigenetic gate on STAT1 activation.

**Deactivation:** PTPN2 (TC-PTP) is the primary nuclear phosphatase that dephosphorylates pTyr701, terminating signaling. PIAS1 (SUMO E3 ligase) inhibits STAT1 DNA binding. Age-related loss of PTPN2 activity could sustain STAT1 activation — this mechanism has not been formally tested. #gap/needs-human-replication

## Divergent transcriptional programs

### GAF homodimer (IFN-gamma / GAS program)

Two pTyr701-STAT1 monomers dimerize symmetrically through reciprocal SH2-pTyr contacts, forming the **gamma-activated factor (GAF)**, which binds GAS (gamma-activated sequence) elements with the consensus TTCNNNGAA.

Key GAF target genes: *CIITA* (MHC-II expression), *CXCL9*, *CXCL10*, *IRF1*, *CDKN1A* (p21), and inflammatory effectors. In the aging context, sustained IFN-gamma from activated macrophages and effector T cells drives chronic GAF activity, which directly transactivates CDKN2A (p16Ink4a) and CDKN1A (p21) — both core effectors of the growth-arrest arm of senescence [^rentschler2026].

### ISGF3 heterotrimer (IFN-alpha/beta / ISRE program)

IFN-alpha/beta engagement of IFNAR1/2 activates TYK2 + JAK1, phosphorylating STAT1 (pTyr701) and STAT2 (pTyr690). The pSTAT1:pSTAT2 heterodimer recruits IRF9 to form **ISGF3** (IFN-stimulated gene factor 3), which recognizes ISRE elements (GAAAN(N)GAAA consensus) and drives expression of hundreds of interferon-stimulated genes (ISGs): *MX1*, *OAS1-3*, *ISG15*, *IFIT1-3*, *RSAD2*, etc.

The tonic IFN-alpha/beta tone that characterizes inflammaging chronically activates the ISGF3 program [^shaw2013]. This constitutive ISG induction has been termed an "interferon signature" and is measurable in blood transcriptomics from aged humans.

## Role in aging

### Chronic activation as a senescence driver

STAT1 is not an oncogene and was historically viewed as a tumor suppressor. In aging, the critical insight is that its sustained activation — rather than acute activation — drives pathological outcomes [^rentschler2026].

Two convergent signals increase STAT1 activity with age:
1. **Elevated IFN-alpha/beta tone** — from cGAS-STING activation by cytoplasmic dsDNA (mitochondrial DNA leakage, retrotransposon reactivation, nuclear envelope breakdown in senescent cells) #gap/unsourced — the relative contributions of mtDNA vs retrotransposon-derived dsRNA to chronic IFN tone in aged human tissues are unresolved.
2. **Elevated IFN-gamma** — from activated macrophages and senescent T cell populations within inflammaging microenvironments.

Chronic STAT1 activation induces senescence via two routes:
- **Direct transcriptional activation** of *CDKN2A* (p16Ink4a) and *CDKN1A* (p21) — both canonical senescence effectors
- **SASP amplification** — STAT1 and NF-kB co-operate to drive the secretory phenotype; their gene regulatory signatures are not fully separable [^rentschler2026]

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | IFN-JAK-STAT1 axis highly conserved; Tyr701 phosphorylation mechanism identical |
| Phenotype conserved in humans? | yes | Gain-of-function STAT1 mutations cause CMC (chronic mucocutaneous candidiasis) + autoimmunity in humans — directly demonstrates hyperactive STAT1 drives immune dysregulation |
| Replicated in humans? | partial | ISG/interferon signatures measured in aged human blood (epidemiological); causal directionality not established by MR |

### STAT1 in HSC aging

Aged hematopoietic stem cells exhibit a characteristic transcriptional bias toward myeloid output and away from lymphoid output [^li2023]. An inflammatory/interferon transcriptional signature — including elevated STAT1 target gene expression — is a consistent feature of aged murine and human HSCs. Chronic IFN-gamma exposure has been observed to stimulate HSC proliferation during infections, while conflicting evidence shows it can hinder HSC regeneration by restricting self-renewal [^li2023]. #gap/needs-replication — the specific role of STAT1 vs other STAT family members (STAT3, STAT5) in HSC aging has not been cleanly separated; a single STAT1-specific intervention study in aged HSCs has not been published; most evidence is correlative or uses pan-interferon or JAK inhibitor approaches.

**Note on Pang 2011:** The Pang WW et al. 2011 paper (PMID 22123971; doi:10.1073/pnas.1116110108) in *PNAS* describes myeloid bias in aged human HSCs but does NOT discuss STAT1 or interferon signaling — it focuses on cell-cycle and lineage-specification gene expression changes. It is not an appropriate citation for STAT1-mediated HSC aging and has been removed from this claim.

### STAT1 in muscle satellite cell aging

Aged skeletal muscle shows impaired regeneration associated with elevated inflammatory cytokine tone. JAK-STAT signaling has been implicated in satellite cell dysfunction; however, the primary published evidence for JAK-STAT effects on aged satellite cells identifies **STAT3** (not STAT1) as the key effector — activated by IL-6 [^tierney2014]. IFN-gamma/STAT1 activation in satellite cells has been proposed but lacks dedicated primary-source support distinguishing it from the broader JAK-STAT axis. #gap/needs-replication #gap/needs-human-replication

**Note on Tierney 2014:** The Tierney et al. 2014 paper (PMID 25194572; doi:10.1038/nm.3656) in *Nature Medicine* (not *Cell Stem Cell*) demonstrates **STAT3** — activated by IL-6 — controls satellite cell expansion; STAT3 inhibition rescues aged satellite cell function. This paper does not study STAT1. Claims about "STAT1 in satellite cell aging" originally attributed to a "Tierney 2014 Cell Stem Cell" paper represent a conflation of STAT1 with STAT3; the STAT3/satellite-cell finding is correctly attributed to Tierney 2014 *Nature Medicine*.

### STAT1 in the T-cell inflammaging program

Age-associated T cell subsets (particularly exhausted/senescent effector CD8+ T cells) maintain high-level IFN-gamma production, creating an autocrine/paracrine STAT1 activation loop. STAT1 in turn drives expression of exhaustion markers and the senescence-associated CD28-CD57+ phenotype. This creates a feed-forward circuit: senescent T cells secrete IFN-gamma → STAT1 activation in neighboring cells → paracrine senescence propagation → more IFN-gamma. #gap/no-mechanism for how the circuit is initiated and whether it can be reversed.

### STAT1 in progeria as an aging model

In Hutchinson-Gilford Progeria Syndrome (HGPS), where Lamin A processing is disrupted, STAT1 and STAT1-target ISG expression is constitutively elevated, contributing to the accelerated-aging phenotype. The Gonzalo lab demonstrated that baricitinib (a JAK1/JAK2 inhibitor) significantly inhibits STAT1 activation in progerin-expressing HDFs, and that Stat1 haploinsufficiency (not full KO — complete Stat1 loss was detrimental) extends lifespan of LmnaG609G/G609G progeria mice by 15% on chow diet [^gonzalo2023]. Calcitriol (active vitamin D3) was also tested and extended median survival by 22% in these mice. This positions STAT1 as mechanistically upstream of multiple aging hallmarks in the progeria model, not merely a correlate.

## Pharmacology

**Direct STAT1 inhibitors** (clinical): None currently approved. STAT1 has been considered less druggable than STAT3 because:
- STAT1 lacks the constitutive activation seen in many tumors (which drives STAT3 inhibitor development)
- STAT1 has tumor-suppressive functions — inhibiting it carries immunosuppression risk
- The flat dimerization interface is difficult to drug (similar challenge to STAT3)
- Fludarabine (a STAT1/STAT3 inhibitor precedent) works in vitro but is a non-specific DNA synthesis inhibitor in clinical use

**Indirect modulation via JAK inhibitors (clinically relevant):**

| Drug | Selectivity | Aging context |
|---|---|---|
| Ruxolitinib | JAK1/JAK2 | Phase 2 aging trials (Mannick 2018 frailty/immune aging); reduces ISG signature |
| Baricitinib | JAK1/JAK2 | Tested in senescence-associated inflammation contexts; COVID-19 approved |
| Tofacitinib | JAK1/JAK3 | Reduces IFN-alpha signature in autoimmunity; aging-specific trials limited |
| Upadacitinib | JAK1-selective | More selective; ongoing evaluation |

JAK inhibitors attenuate STAT1 activation by blocking upstream phosphorylation rather than targeting STAT1 directly. Hu 2021 confirms baricitinib (JAK1/JAK2) and ruxolitinib (JAK1/JAK2) as the most-studied clinically-relevant JAK inhibitors, with ruxolitinib FDA-approved for myelofibrosis, aGVHD, and polycythemia vera [^hu2021]. In the aging context, baricitinib was the primary JAK inhibitor tested in progeria models [^gonzalo2023]. The Mannick-era trials testing rapalogs/mTOR inhibitors (not ruxolitinib) showed improved vaccine responses in older adults; ruxolitinib-specific aging/frailty evidence is more limited. #gap/needs-replication — ruxolitinib's effects specifically on the ISG/STAT1 signature in normal aging have not been rigorously tested in powered clinical trials; aging-indication data are not yet available.

**Druggability-tier 3 rationale.** STAT1 is predicted druggable via the dimerization interface (similar to STAT3 decoy oligonucleotide approaches), but no clinical drug exists for STAT1 directly in any indication. JAK inhibitors modulate STAT1 upstream (tier 1 for JAK1/JAK2 nodes) but are not STAT1-selective. The aging-context tier is 3 (predicted druggable; no aging-validated direct probe).

## Pathway membership

- [[jak-stat-pathway]] — STAT1 is the primary effector; receives signal from JAK1, JAK2, TYK2
- [[type-i-interferon-signaling]] — ISGF3 heterotrimer assembly and ISG induction
- [[dna-damage-response]] — cGAS-STING → IFN-beta → STAT1 links DNA damage sensing to inflammatory output
- [[cellular-senescence]] — STAT1 drives p16/p21 and amplifies SASP

## Key interactors

- [[jak1]], [[jak2]], [[tyk2]] — upstream kinases; phosphorylate Tyr701
- [[stat2]] — heterodimerization partner in ISGF3 (type I IFN responses)
- [[irf9]] — third subunit of ISGF3; provides ISRE specificity
- [[irf3]] — independent IFN-beta inducer; activates the upstream signal that phosphorylates STAT1
- PTPN2 (TC-PTP) — nuclear dephosphorylase; terminates STAT1 signaling (stub — [[ptpn2]] not yet created)
- PIAS1 — SUMO E3 ligase; inhibits STAT1 DNA binding (stub — [[pias1]] not yet created)

## Key genetic variants and disease associations

- **Loss-of-function (IMD31A/B):** Heterozygous or homozygous LoF → susceptibility to mycobacterial infections (BCG disease, non-tuberculous mycobacteria) and viral pathogens. Demonstrates STAT1 is non-redundant for innate antimicrobial immunity.
- **Gain-of-function (IMD31C / STAT1-GoF syndrome):** Heterozygous GoF mutations impair nuclear dephosphorylation (often in the DBD or CCD), sustaining pTyr701 — causing chronic mucocutaneous candidiasis (CMC), autoimmunity, and elevated IFN signature. GoF mutations are a Mendelian experiment-of-nature for chronic STAT1 hyperactivation. The autoimmune and chronic-inflammation phenotypes in GoF carriers parallel the chronic-STAT1-activation model of inflammaging, though the causal chain differs.

## Knowledge gaps and limitations

1. **Causal vs correlative in human aging:** The ISG/STAT1 signature in aged blood is reproducible but Mendelian randomization evidence linking STAT1 activity directly to aging rate is absent. #gap/needs-human-replication
2. **STAT1 vs STAT3 in HSC aging:** Both are activated by aging-associated cytokines (IFN for STAT1; IL-6/LIF/OSM for STAT3). Their relative contributions to aged HSC transcriptional bias are not cleanly separated. #gap/contradictory-evidence
3. **PTPN2 decline with age:** Whether age-related loss of PTPN2 (a candidate based on its role as the primary STAT1 phosphatase) drives sustained STAT1 activation in tissues has not been formally tested. #gap/no-mechanism
4. **Isoform (p84 vs p91) balance in aging:** Whether the alpha/beta isoform ratio shifts with age and modulates IFN response amplitude is unknown. #gap/unsourced
5. **Direct STAT1 targeting:** No aging-validated direct STAT1 inhibitor probe exists. Progress on STAT3 decoy oligonucleotides (cancer) does not directly translate. #gap/dose-response-unclear

## Footnotes

[^au-yeung2013]: doi:10.4161/jkst.23931 · review (JAK-STAT 2013;2:e23931) · n=NA · Au-Yeung N, Mandhana R, Horvath CM · foundational review of STAT1/STAT2 transcriptional regulation in IFN-JAK-STAT pathway; phosphosite specificity, isoform biology, ISGF3 assembly, co-regulator landscape · locally available
[^hu2021]: doi:10.1038/s41392-021-00791-1 · review (Signal Transduction and Targeted Therapy 2021;6:402) · n=NA · Hu X, Li J, Fu M, Zhao X, Wang W · comprehensive JAK/STAT bench-to-clinic review; STAT1 domain architecture, phosphorylation sites, JAK inhibitor clinical data; aging section covers JAK1/JAK2 activation in SASP/adipose context · locally available
[^shaw2013]: doi:10.1038/nri3547 · review (Nature Reviews Immunology 2013) · n=NA · Shaw AC et al. · age-dependent dysregulation of innate immunity; ISG/interferon-tone accumulation in aged organisms · locally unavailable (not_oa; download failed) #gap/no-fulltext-access — claims citing this source have not been PDF-verified
[^gonzalo2023]: doi:10.59368/agingbio.20230009 · research article (Aging Biology 2023;1:e20230009) · n=6–7 mice/group (in vivo survival arms); n=3–15 (in vitro biological replicates) · Cancado de Faria R, Shashkova EV, Flaveny C, Baldan A, McCommis KS, Gonzalo S · STAT1 drives IFN-like response and aging hallmarks in HGPS; baricitinib (JAK1/JAK2 inhibitor) and calcitriol rescue cellular/organismal phenotypes; Stat1 haploinsufficiency (+/−) extends LmnaG609G/G609G progeria mouse lifespan 15% on chow; complete Stat1 KO detrimental; median survival calcitriol-treated mice 145 days vs 119 days vehicle (22% improvement, log-rank) · locally available
[^rentschler2026]: doi:10.1007/s11357-026-02100-6 · in-vitro (tumor cell senescence) · Rentschler M et al. · cytokine-induced senescence sustained by STAT1- and NF-kB-dependent gene regulatory signatures; STAT1 activation directly drives SASP and growth arrest gene programs · GeroScience 2026 · locally unavailable (download failed — not accessible via OA) #gap/no-fulltext-access — specific quantitative claims citing this source have not been PDF-verified
[^tierney2014]: doi:10.1038/nm.3656 · in-vivo (mouse, aged + dystrophic muscle) · PMID:25194572 · Tierney MT, Aydogdu T, Sala D, Malecova B, Gatto S, Puri PL, Latella L, Sacco A · STAT3 (not STAT1) signaling controls satellite cell expansion and skeletal muscle repair; conditional Stat3 ablation increases satellite cell expansion but impairs differentiation; transient STAT3 inhibition rescues aged and dystrophic muscle regeneration · Nature Medicine 2014;20:1182–1186
[^li2023]: doi:10.1038/s41392-023-01502-8 · review (Signal Transduction and Targeted Therapy 2023;8:239) · n=NA · Li X, Li C, Zhang W, Wang Y, Qian P, Huang H · broad review of inflammaging at molecular/cellular/organ levels; HSC aging section documents IFN-gamma dual role in HSC proliferation and myeloid bias; does not provide STAT1-specific HSC aging data · locally available
