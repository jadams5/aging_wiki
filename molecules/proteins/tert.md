---
type: protein
aliases: [TERT, hTERT, telomerase reverse transcriptase, TP2, TRT, EST2, HEST2, telomerase catalytic subunit]
uniprot: O14746
ncbi-gene: 7015
hgnc: 11730
ensembl: ENSG00000164362
mouse-ortholog: Tert
genage-id: 8
pathways: ["[[telomerase-pathway]]", "[[dna-damage-response]]"]
hallmarks: ["[[telomere-attrition]]", "[[cellular-senescence]]"]
sens-categories: ["[[sens-damage-categories|OncoSENS]]"]
druggability-tier: 1
caused-by: []
causes: ["[[telomere-attrition]]", "[[cellular-senescence]]"]
key-domains: [TEN, TRBD, RT, CTE]
key-ptms: [Ser227-phosphorylation, Ser457-phosphorylation, Tyr707-phosphorylation, ubiquitination]
complex-subunits: ["O14746 (TERT)", "TERC-ncRNA (no UniProt; NCBI Gene 7012)", "O60832 (DKC1)", "Q9NX24 (NHP2)", "Q9NPE3 (NOP10)", "Q9NY12 (GAR1)", "Q8WWQ0 (TCAB1)"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Bodnar 1998 and Bernardes de Jesus 2012 verified against local PDFs — all quantitative claims corrected. Tomás-Loba 2008 downloaded and verified against full PDF — 40.2% lifespan figure, genetic background, and sample sizes confirmed. Lingner 1997 (domain architecture) download failed (infoscience mirror HTML-only; not_oa via PMC) — domain residue ranges and YADD motif description not independently verified from primary source; #gap/no-fulltext-access retained on that claim. Horn 2013 permanently not_oa — C228T/C250T prevalence estimates not verifiable from full text. Canonical-DB identity fields (UniProt O14746, NCBI Gene 7015, HGNC 11730, Ensembl ENSG00000164362) not independently re-checked against live databases. GenAge ID 8 confirmed via genomics.senescence.info live query."
---

> Verified 2026-05-05 against Bodnar 1998, Bernardes de Jesus 2012, and Tomás-Loba 2008 PDFs. Remaining unverified: Lingner 1997 domain-architecture claims (PDF unavailable — infoscience mirror inaccessible; tagged #gap/no-fulltext-access); Horn 2013 C228T/C250T prevalence claims (permanently not_oa). Canonical-DB identity fields (UniProt, NCBI Gene, HGNC, Ensembl) not re-verified against live databases.

# TERT (telomerase reverse transcriptase)

The catalytic engine of telomerase — a reverse transcriptase that synthesizes TTAGGG hexanucleotide repeats onto chromosome ends using [[terc|TERC]] as its RNA template. TERT is epigenetically silenced in most adult somatic cells, confining constitutive telomere-extension activity to the germline, early embryo, and a restricted set of adult stem cells. Its reactivation in ~85% of human cancers and the demonstration that AAV-delivered TERT extends mouse lifespan without increasing cancer make it the central molecular actor in the [[telomere-attrition]] hallmark and the most directly intervention-relevant node in that axis.

---

## Identity

- **UniProt:** O14746 (TERT_HUMAN) — reviewed (Swiss-Prot); evidence at protein level
- **NCBI Gene:** 7015
- **HGNC symbol:** TERT
- **Ensembl:** ENSG00000164362
- **Mouse ortholog:** Tert (Mus musculus; high sequence conservation)
- **GenAge (human):** entry ID 8
- **Length:** 1,132 amino acids (canonical isoform)
- **Chromosomal location:** 5p15.33

---

## Domain architecture

TERT has four principal functional domains arranged N→C [^lingner1997]. #gap/no-fulltext-access — residue ranges and motif descriptions below are from secondary sources; Lingner 1997 PDF not locally available for direct verification.

| Domain | Residues (approx.) | Function |
|---|---|---|
| TEN (telomerase essential N-terminal) | 1–230 | RNA (TERC) binding; anchor-site for DNA primer; species-specific processivity determinant |
| TRBD (telomerase RNA-binding domain) | 325–550 | High-affinity binding to the TERC pseudoknot; positions template for reverse transcription |
| RT (reverse transcriptase) | 605–935 | Catalytic core; contains the canonical YADD polymerase motif; shares structural folds with retroviral RTs but is adapted for short-template repeat synthesis |
| CTE (C-terminal extension) | 936–1,132 | Processivity and repeat-addition; interacts with TPP1 (shelterin subunit) to recruit telomerase to the telomere; also has non-canonical roles in Wnt signaling |

The RT domain's three-finger β-sheet fold is conserved across kingdoms; TERT was identified as a reverse transcriptase by Lingner et al. who characterized the homologue in *Euplotes aediculatus* and showed conservation of RT motifs in the yeast EST2 gene [^lingner1997].

---

## Telomerase holoenzyme complex

TERT does not act alone. The minimal catalytic unit is TERT + TERC (the RNA template); the functional holoenzyme in human cells also requires a stabilizing H/ACA ribonucleoprotein (RNP) scaffold:

| Subunit | Gene | Role |
|---|---|---|
| TERT | *TERT* | Catalytic reverse transcriptase |
| [[terc|TERC]] | *TERC* (ncRNA) | 451 nt RNA template; contains the 3'-AAUCCC-5' template sequence and CR4/CR5 domain that binds TERT CTE |
| [[dkc1|Dyskerin]] | *DKC1* | H/ACA RNP core; pseudouridine synthase; stabilizes TERC; DKC1 mutations → dyskeratosis congenita |
| NHP2 | *NHP2* (Q9NX24) | H/ACA RNP scaffold |
| NOP10 | *NOP10* (Q9NPE3) | H/ACA RNP scaffold |
| GAR1 | *GAR1* (Q9NY12) | H/ACA RNP scaffold |
| TCAB1 | *TCAB1* (WRAP53) | Cajal body targeting; **note**: Vogan 2016 (eLife) showed TCAB1 KO does NOT prevent telomere maintenance in HCT116 or hESCs — Cajal-body localization is not strictly required, contradicting the prior "rate-limiting checkpoint" framing #gap/needs-replication |

The shelterin subunit [[tpp1|TPP1]] (encoded by *ACD*) additionally recruits the assembled holoenzyme to the telomere G-overhang via its TEL patch — a 7-residue surface on the OB fold (E168, E169, E171, R180, L183, L212, E215) that contacts the TERT TEN domain [^nandakumar2012] [^schmidt2014]. The direct charge-swap pair is TERT K78 ↔ TPP1 E215 (Schmidt 2014: E215K TPP1 rescues K78E TERT from 25% → 98% repeat-addition processivity, n=3, p<0.01). Loss-of-function TEL-patch mutations abolish telomere elongation in vivo without disrupting shelterin assembly.

---

## Regulation

### Transcriptional repression in somatic cells

TERT promoter methylation silences expression in nearly all post-embryonic somatic tissues. The promoter contains E-box motifs bound by MYC/MAX heterodimers (activating) and CTCF / mSin3A-HDAC complexes (repressing). The regulatory logic is: germline and early embryo — TERT high; stem-cell compartments — TERT low but detectable; somatic cells — TERT epigenetically silenced. #gap/unsourced — the specific CpG sites governing somatic silencing vs stem-cell partial expression are not catalogued here.

### Cancer: TERT promoter hotspot mutations

Two recurrent gain-of-function point mutations in the TERT core promoter — **C228T** and **C250T** (in a cytosine-rich stretch at −124 and −146 bp relative to the ATG start codon) — create de novo ETS transcription factor binding sites (GGAA motifs), dramatically increasing TERT transcription [^horn2013]. These are among the most common non-coding mutations in cancer:

- Melanoma: C228T/C250T in ~70% of cases [^horn2013]
- Glioblastoma and lower-grade glioma: ~60–80%
- Bladder, liver, thyroid cancers: variable prevalence

This is the principal mechanism by which ~85% of cancers reactivate telomerase. It is distinct from TERT coding-sequence amplification (which occurs in a minority of cancers). #gap/needs-replication — frequency estimates vary by tumor type; comprehensive pan-cancer data needed for a definitive figure.

### Post-translational regulation

TERT subcellular localization is dynamically regulated by phosphorylation:

- **Ser-227 phosphorylation** (by AKT/PKB) → promotes nuclear import and telomerase activity
- **Tyr-707 phosphorylation** (by Src-family kinases) → promotes cytoplasmic export, limiting telomeric access
- **Ser-457 phosphorylation** → marks for ubiquitin-mediated proteasomal degradation

This phosphorylation-dependent trafficking means that PI3K-AKT pathway activity positively regulates telomere maintenance beyond its canonical growth-factor roles. See [[akt]] for the broader PI3K-AKT aging context.

---

## Aging biology

### Telomere extension rescues replicative senescence (Bodnar 1998)

The foundational demonstration that TERT is both necessary and sufficient for telomere maintenance: Bodnar et al. introduced hTERT cDNA into two normal human diploid cell types — RPE retinal pigment epithelial cells (RPE-340) and BJ foreskin fibroblasts — and showed that telomere length was maintained, cells bypassed the Hayflick limit by at least 20 additional population doublings (RPE: ~20 PD beyond hTRT-negative mean; BJ: 36 PD beyond hTRT-negative mean), and cells retained a normal karyotype (46 chromosomes, no abnormalities on G-banding in 2 RPE + 2 BJ clones). No gross phenotypic markers of transformation were observed (no loss of contact inhibition, no growth in low serum) [^bodnar1998]. Note: the paper did not perform nude-mouse tumor formation assays; the absence-of-transformation evidence is morphological/phenotypic only. This established that replicative senescence in human cells is telomere-length-dependent and TERT-reversible. #gap/needs-replication — replicated in other somatic cell types but full scope of cell types where TERT expression alone is sufficient is not documented here.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — TERT/TERC/shelterin axis conserved; this is a human-cell result |
| Phenotype conserved in humans? | yes — replicative senescence bypass demonstrated in human cells directly |
| Replicated in humans? | yes (in vitro human cells) |

### TERT overexpression extends lifespan in cancer-resistant mice (Tomás-Loba 2008)

Tomás-Loba et al. crossed TERT-overexpressing transgenic mice (K5-Tert; referred to as TgTert) onto a cancer-resistant background generated by overexpression of the tumor suppressors p53 (Sp53), p16/Ink4a and p19Arf together (Sp16/SArf) — collectively the "Sp53/Sp16/SArf" background. These triple-tumor-suppressor cancer-resistant mice were then combined with the TgTert transgene to produce Sp53/Sp16/SArf/TgTert mice. In this cancer-resistant context, combined TgTert and Sp53/Sp16/SArf transgenes produced a **40.2% extension of median lifespan** compared to Sp53 controls (p<0.001 Log Rank; n=27 Sp53/Sp16/SArf/TgTert vs n=68 Sp53), with improved organismal fitness markers including skin epithelial integrity, GI barrier function, neuromuscular coordination, and glucose tolerance [^tomasloba2008]. When considering only cancer-free mice (dying of non-cancer causes), the median lifespan benefit was even more evident: 18% and 38% for Sp53/TgTert and Sp53/Sp16/SArf/TgTert respectively vs Sp53 controls. #gap/needs-human-replication — this is a mouse result in an artificially cancer-resistant genetic background.

The study resolved a long-standing conceptual barrier: the reason telomere extension was thought not to extend lifespan in normal animals was the competing cancer risk; by eliminating that risk genetically, the longevity benefit became apparent. This also establishes telomere shortening as a genuine driver (not merely correlate) of murine aging in at least some tissues.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — TERT mechanism identical; but mouse telomeres are far longer (~5–10x) than human at baseline, and the cancer-resistant background (Sp53/Sp16/SArf) has no human equivalent |
| Phenotype conserved in humans? | unknown — no human lifespan data; cancer-risk constraint far more severe in humans |
| Replicated in humans? | no — translation blocked by cancer risk, absence of equivalent tumor-suppressor overexpression strategy, and regulatory barriers |

### AAV-TERT gene therapy extends lifespan in adult and aged mice (Bernardes 2012)

Bernardes de Jesus et al. delivered AAV9-mTert (mouse TERT) by single intravenous injection to C57BL/6 mice at either 1 year or 2 years of age, achieving persistent TERT expression in multiple tissues. Results [^bernardes2012]:

- **1-year-old cohort:** median lifespan extended **+24%** (p<0.05 Log Rank; eGFP control n=12, mTERT n=21, pooled control n=43)
- **2-year-old cohort:** median lifespan extended **+13%** (p<0.05 Log Rank; eGFP control n=14, mTERT n=23, pooled control n=29)
- Improved metabolic phenotypes: reduced fasting insulin, increased femur bone mineral density, improved neuromuscular coordination (Rota-Rod and Tightrope tests)
- Cancer incidence: **not increased** relative to controls (p=0.87)

This is the strongest single result linking telomere maintenance to mammalian lifespan extension via a clinically-translatable delivery modality (AAV). The same study result is cited on [[telomere-attrition]] (verified against local PDF); the numbers are consistent between that page and the primary source.

Important caveats:
- Single lab (Blasco group, CNIO); no multi-site ITP replication
- C57BL/6 mice already have very long telomeres (~40 kb vs ~10 kb human); mechanism of lifespan benefit may differ from human telomere-attrition biology
- n per group is modest; long-term cancer risk at older ages in treated mice not fully resolved

#gap/needs-replication #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — AAV delivery and TERT mechanism conserved |
| Phenotype conserved in humans? | unknown — mouse telomere divergence is the central extrapolation barrier |
| Replicated in humans? | partial — MERCURY-DCM Phase 1 (n=12 DCM, NCT05837143, ACTIVE since 2023) using catalytically-inactive nuclear-retained modTERT (JV001); first regulated human trial. Bioviva 2015 self-experiment (n=1) is not interpretable. |

---

## Disease associations

TERT loss-of-function mutations establish causal relevance of telomere maintenance to human tissue aging:

| Disorder | Mechanism | TERT involvement |
|---|---|---|
| **Dyskeratosis congenita (DKC)** | Telomere maintenance failure → bone marrow failure, mucosal/skin atrophy | Autosomal dominant DKC caused by TERT heterozygous loss-of-function; also TERC, DKC1, TINF2, RTEL1 mutations |
| **Idiopathic pulmonary fibrosis (IPF)** | Short telomeres → repetitive alveolar epithelial senescence → fibrotic remodeling | TERT mutations in ~8% of familial IPF; TERC mutations also implicated; strongest genetic evidence for telomere driver in lung aging |
| **Aplastic anemia** | HSC telomere failure → hematopoietic collapse | TERT/TERC mutations overlap with DKC spectrum; ~5–10% of aplastic anemia |
| **Cancer (gain-of-function)** | TERT promoter C228T/C250T reactivates expression, enabling replicative immortality | Required in ~85% of cancers; see Regulation above |

These monogenic disorders are the most direct human evidence that TERT/telomere maintenance is causally sufficient to produce tissue-aging phenotypes in humans — not merely correlative. See the Diseases of Telomere Biology table on [[telomere-attrition]] for the broader disease landscape.

---

## Therapeutic landscape

### Telomerase inhibition (cancer direction): Imetelstat

**Imetelstat** (GRN163L; Geron Corporation) is a lipid-conjugated oligonucleotide that binds the template region of TERC and competitively inhibits telomerase. It was granted FDA approval in 2024 for **transfusion-dependent anemia in low-to-intermediate-1 risk myelodysplastic syndromes (MDS)**, and is under investigation in myelofibrosis. Mechanism of selectivity: imetelstat preferentially kills cells with short telomeres that are critically dependent on ongoing telomerase activity to survive replicative stress. #gap/needs-replication — the exact patient-selection biomarker for telomere-length-dependent sensitivity is an active clinical-development question.

### Telomerase activation (aging direction): TA-65

**TA-65** (cycloastragenol; a small-molecule purified from *Astragalus membranaceus*) is the most commercially prominent telomerase activator. Claimed mechanism: TERT transcriptional upregulation. Human evidence is limited — small observational pilot studies (n<100) with no randomized controlled trial of sufficient power. See [[molecules/compounds/ta-65]] (implicit stub) for compound-level data. #gap/long-term-unknown #gap/needs-replication

### AAV-TERT gene therapy (aging direction)

The Bernardes 2012 approach is the proof-of-concept for in vivo TERT delivery. Human translation faces three barriers:
1. **Cancer risk**: unlike mice, humans have ~80-year baseline cancer-accumulation risk; TERT reactivation in a pre-malignant clone could be oncogenic
2. **Telomere starting length**: humans enter adulthood with ~10 kb telomeres vs mouse ~40 kb — TERT therapy must work on shorter substrate across more tissue compartments
3. **AAV tissue tropism and dose**: systemic AAV at doses required for multi-tissue coverage carries immunological and dose-limiting toxicity risks

**Telomere recapping with catalytically-inactive modTERT (2023–2026 paradigm shift; engineering around the cancer-permissivity barrier):** The Chang ACY group at Shanghai Jiao Tong + Juvensis Therapeutics has advanced **JV001** (AAV9-modhTERT^Y707F,D868A^), a catalytically-inactive nuclear-retained modTERT variant that "recaps" telomeres without supporting replicative immortality. The MERCURY-DCM Phase 1 trial (NCT05837143) has been ACTIVE_NOT_RECRUITING since 2023 in dilated cardiomyopathy (n=12). Mechanism + supporting preclinical biology: Zhao 2026 *EBioMedicine* and *Cardiovasc Res*; Xie 2026 *Kidney Int*. This is the first regulated human AAV-TERT-class trial. See [[interventions/gene-therapy/aav-tert]] for the full intervention-page detail.

**Bioviva / Liz Parrish (2015):** a self-administered hTERT AAV-based treatment; n=1, no controls, no independent measurement protocol. Not interpretable as evidence for efficacy or safety. #gap/unsourced — published outcome data from Bioviva are not peer-reviewed; cite only as historical context.

---

## Pathway membership and interactors

- [[telomerase-pathway]] (verified R29) — central catalytic component; pathway-level holoenzyme assembly + reaction cycle + ALT alternative
- [[dna-damage-response]] — TERT activity is regulated in response to DNA damage signaling; telomere uncapping activates ATM/ATR which can phosphorylate TERT
- [[p53-pathway]] — p53 transcriptionally represses TERT (feedback: p53 activation suppresses telomerase to reinforce senescence) #gap/unsourced
- [[shelterin]] — [[tpp1|TPP1]] (ACD) recruits telomerase to telomere via TERT CTE; required for productive repeat addition
- [[akt]] — phosphorylates TERT Ser-227, promoting nuclear localization and activity
- [[replicative-senescence]] (verified R29) — the telomere-driven cell-cycle-arrest sub-process downstream of TERT loss

Key interactors: [[terc]] (verified R29; obligate RNA template), [[dkc1]] (verified R29; H/ACA RNP stabilizer), [[shelterin]] (TPP1-mediated recruitment)

---

## Gaps and limitations

- **Human lifespan data are absent.** All longevity-extension evidence is from mice (Tomás-Loba 2008, Bernardes 2012). The species gap in telomere length and somatic telomerase expression is the dominant extrapolation barrier. #gap/needs-human-replication

- **Cancer safety in humans is unresolved.** The Bernardes 2012 mouse result (no increased cancer, p=0.87) is reassuring, but mice have substantially shorter spontaneous-tumor latency than humans, and the cancer-risk landscape in a 70-year-old human with pre-malignant clones is not equivalent. #gap/long-term-unknown

- **TERT non-telomeric functions are incompletely characterized.** TERT has been reported to modulate Wnt/beta-catenin signaling, act as a transcriptional co-factor for NF-kB, and protect mitochondria from oxidative damage — all independently of telomere lengthening. Whether these non-canonical functions contribute to aging phenotypes is unknown. #gap/no-mechanism

- **Stub pages still needed.** [[tcab1]] (WRAP53; Cajal-body targeting subunit) and [[ta-65]] (compound page) remain implicit stubs. R29 close (2026-05-07) seeded [[terc]], [[dkc1]], [[telomerase-pathway]], [[trf1]], [[trf2]], [[pot1]], [[tin2]], [[tpp1]], [[replicative-senescence]], and [[interventions/pharmacological/telomerase-activators]]; [[shelterin]] was already seeded.

- **GenAge-models entries.** The mouse (*Tert*; Entrez ID 21752) and zebrafish entries in GenAge-models are not explored on this page. *Tert*-knockout mice (G3/G4 late generations with critically short telomeres) are the appropriate mouse model for telomere-driven aging. #gap/unsourced — a dedicated model-organism section for Tert−/− mice is not included here.

---

## Cross-references

- [[telomere-attrition]] (verified-partial) — parent hallmark; Bernardes 2012 numbers verified there
- [[hallmarks-of-aging]] — dual-frame MOC
- [[terc]] (verified R29) — obligate RNA template subunit
- [[shelterin]] (verified) — TPP1 recruits telomerase to telomere
- [[dkc1]] (verified R29) — H/ACA RNP dyskerin; DKC1 mutations → dyskeratosis congenita
- [[telomerase-pathway]] (verified R29) — pathway-level context
- [[replicative-senescence]] (verified R29) — telomere-driven cell-cycle-arrest sub-process
- [[interventions/pharmacological/telomerase-activators]] (verified R29) — pharmacological class targeting this entity
- [[cellular-senescence]] — telomere-driven senescence downstream of TERT loss in somatic cells
- [[dna-damage-response]] — activated by uncapped telomeres; feeds back onto TERT regulation
- [[p53-pathway]] — p53 represses TERT; TERT loss → senescence via p53/p21 axis
- [[akt]] — phosphorylates TERT Ser-227; links growth-factor signaling to telomere maintenance
- [[idiopathic-pulmonary-fibrosis]] (implicit stub) — TERT mutations in ~8% of familial IPF
- [[dyskeratosis-congenita]] (implicit stub) — monogenic telomere-maintenance disease

---

## Footnotes

[^lingner1997]: doi:10.1126/science.276.5312.561 · Lingner J, Hughes TR, Shevchenko A, Mann M, Lundblad V, Cech TR · in-vitro · Science 1997 · 276(5312):561–567 · model: Euplotes aediculatus (ciliate) + Saccharomyces cerevisiae (Est2) · purified telomerase; identified TERT catalytic subunit by reverse transcriptase motif conservation; foundational cloning paper · archive: download attempted 2026-05-05 — OA URL (infoscience.epfl.ch) returns HTML, no PDF found; status changed to failed #gap/no-fulltext-access

[^bodnar1998]: doi:10.1126/science.279.5349.349 · Bodnar AG, Ouellette M, Frolkis M, Holt SE, Chiu CP, Morin GB, Harley CB, Shay JW, Lichtsteiner S, Wright WE · in-vitro · Science 1998 · 279(5349):349–352 · model: normal human RPE-340 retinal pigment epithelial cells (transfected at PD37) and BJ foreskin fibroblasts (transfected at PD44–58); hTERT cDNA overexpression via MPSV or SV40 promoter constructs · telomere length maintained and elongated in hTRT+ clones; RPE hTRT+ clones exceeded hTRT- mean lifespan by ~20 PD (P<10^-24 Student's T); BJ hTRT+ clones exceeded BJ maximal lifespan (85–90 PD) by average of 36 PD (P<10^-6); no gross transformation markers (no loss of contact inhibition, no growth in low serum); normal karyotype (46 chromosomes, no abnormalities by G-banding); nude-mouse tumor assay not performed in this study · archive: local PDF available

[^tomasloba2008]: doi:10.1016/j.cell.2008.09.034 · Tomás-Loba A, Flores I, Fernández-Marcos PJ, Cayuela ML, Maraver A, Tejera A, Borráz C, Matheu A, Klatt P, Flores JM, Viña J, Serrano M, Blasco MA · in-vivo · Cell 2008 · 135(4):609–622 · model: Mus musculus 75%:25% C57BL6/DBA background; K5-Tert transgene (TgTert) in cancer-resistant Sp53/Sp16/SArf background (overexpressing p53, p16Ink4a, p19Arf) · 40.2% median lifespan extension (Sp53/Sp16/SArf/TgTert vs Sp53 controls; n=27 vs n=68; p<0.001 Log Rank); improved skin/GI epithelial barrier, neuromuscular coordination, glucose tolerance; cancer resistance prerequisite shown by contrast with standard TgTert mice (which show increased cancer) · archive: local PDF available

[^bernardes2012]: doi:10.1002/emmm.201200245 · Bernardes de Jesus B, Vera E, Schneeberger K, Tejera AM, Ayuso E, Bosch F, Blasco MA · in-vivo · EMBO Mol Med 2012 · 4:691–704 · model: >95% C57BL/6 background mice; AAV9-mTert i.v. at 1 yr (eGFP n=12, mTERT n=21, control n=43) or 2 yr (eGFP n=14, mTERT n=23, control n=29) · +24% median lifespan extension (1-yr cohort, p=0.02 Log Rank); +13% (2-yr cohort, p=0.05 Log Rank); improved insulin sensitivity, BMD, neuromuscular coordination; cancer incidence not increased (p=0.87) · archive: local PDF available (gold OA)

[^nandakumar2012]: doi:10.1038/nature11648 · Nandakumar J, Bell CF, Weidenfeld I, Zaug AJ, Leinwand LA, Cech TR · in-vitro / cell · Nature 2012 · 492(7428):285–289 · model: HeLa cells with TPP1 OB-fold mutations + reconstituted human telomerase · maps the TEL patch — 7 critical residues on the TPP1 OB-fold (E168, E169, E171, R180, L183, L212, E215) — that contact the TERT TEN domain to recruit telomerase and stimulate processivity · archive: local PDF available (verified R29)

[^schmidt2014]: doi:10.7554/eLife.03563 · Schmidt JC, Dalby AB, Cech TR · in-vitro · eLife 2014 · 3:e03563 · model: human TERT + TPP1 charge-swap mutagenesis · identified TERT K78 ↔ TPP1 E215 as the direct electrostatic contact at the TEL-patch / TEN-domain interface; E215K TPP1 rescues K78E TERT from 25% to 98% repeat-addition processivity (n=3, p<0.01) · archive: local PDF available (verified R29)

[^horn2013]: doi:10.1126/science.1230062 · Horn S, Figl A, Rachakonda PS, Fischer C, Sucker A, Gast A, Kadel S, Moll I, Nagore E, Hemminki K, Schadendorf D, Kumar R · in-vitro / genomic · Science 2013 · model: melanoma tumor samples; whole-genome sequencing · identified recurrent C228T and C250T TERT promoter mutations in ~70% of familial and sporadic melanomas; creates de novo ETS binding sites; foundational paper for TERT promoter mutations in cancer · archive: not_oa (no local PDF) #gap/no-fulltext-access
