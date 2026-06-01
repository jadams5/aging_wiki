---
type: protein
aliases: [HDACs, histone deacetylases, classical HDACs, Zn-dependent HDACs, "Class I/II/IV HDACs", HDAC1-11]
uniprot: Q13547
ncbi-gene: 3065
hgnc: 4852
ensembl: ENSG00000116478
genage-id: null
complex-subunits: [Q13547, Q92769, O15379, P56524, Q9UQL6, Q9UBN7, Q8WUI4, Q9BY41, Q9UKV0, Q969S8, Q96DB2]
pathways: ["[[epigenetic-alterations]]", "[[dna-damage-response]]", "[[cellular-senescence]]"]
hallmarks: ["[[epigenetic-alterations]]"]
sens-categories: []
key-domains: [HDAC catalytic, Zn2+-binding, DAC domain]
key-ptms: [phosphorylation, sumoylation, ubiquitination]
known-interactors: ["[[cbp-p300]]", "[[sirt1]]", "[[p53]]", "[[nf-kb]]", "[[foxo3]]"]
druggability-tier: 2
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[epigenetic-alterations]]", "[[genomic-instability]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Pao 2020 (PDF): HDAC1/OGG1 mechanism, exifone dose/route/duration, behavioral phenotype targets — verified; OGG1 K341 attribution corrected (K341 is from Bhakat 2006 cited therein, not Pao 2020 itself). Seto & Yoshida 2014 (PDF): class taxonomy, complex composition, catalytic mechanism — verified. McIntyre 2019 (PDF): invertebrate lifespan claims — verified; McDonald 2013 drug attribution corrected (vorinostat/SAHA, not sodium butyrate). Choudhary 2009: ~3,600 sites / ~1,750 proteins figures confirmed via PubMed abstract (not_oa; full PDF not read). Yang & Seto 2008: download failed (green OA); class taxonomy confirmed against Seto & Yoshida 2014. Glozak 2005: not_oa; non-histone substrate claims unverified from full text. McDonald 2013: download failed (green OA); drug identity cross-checked against McIntyre 2019 Table 1. UniProt accessions all 11 members: confirmed via REST API (all valid Swiss-Prot human entries). Open Targets Platform HDAC1 (ENSG00000116478): Approved Drug (SM) = true — max-druggability tier 1 confirmed; aging-context tier 2 decision retained per CLAUDE.md R27 convention."
---


# HDAC (Histone Deacetylase Family, Class I/II/IV)

**Histone deacetylases (HDACs)** are a family of eleven Zn2+-dependent enzymes that remove acetyl groups from lysine residues on histone tails and — critically — on ~3,600 non-histone substrates including p53, alpha-tubulin, HSP90, and FOXO transcription factors [^choudhary2009]. They are the catalytic counterparts to histone acetyltransferases (HATs such as [[cbp-p300]]) and are central regulators of chromatin state, gene expression, and cellular stress responses. In aging, the global balance of histone acetylation shifts — the [[epigenetic-alterations]] hallmark — and HDAC activity is implicated in both protective and deleterious roles depending on cellular context and HDAC class.

**Disambiguation:** This page covers the **Zn2+-dependent** HDACs (Class I, IIa, IIb, IV; HDAC1–11). The NAD+-dependent Class III deacetylases — sirtuins (SIRT1–7) — are a structurally and mechanistically distinct family; see [[sirtuin]] (verified).

**Canonical-ID note:** UniProt frontmatter uses HDAC1 (Q13547) as the family representative — the founding and most-studied nuclear member. HDAC3 (O15379) is the most aging-relevant member for cardiac and inflammatory biology. Both are Swiss-Prot (manually curated) entries.

---

## Family overview

Eleven classical HDACs are organized into four classes based on yeast homologs and subcellular distribution [^yang-seto-2008]:

| Class | Members | Primary localization | Key features |
|---|---|---|---|
| **Class I** | HDAC1, 2, 3, 8 | Nuclear (constitutive) | Broad transcriptional repressor activity; form large multi-protein co-repressor complexes |
| **Class IIa** | HDAC4, 5, 7, 9 | Nucleocytoplasmic (signal-regulated shuttle) | Tissue-specific (heart, muscle, brain); shuttle in/out of nucleus in response to CaMKII/PKD signaling; low intrinsic deacetylase activity; require HDAC3 for activity in some complexes |
| **Class IIb** | HDAC6, 10 | Primarily cytoplasmic | HDAC6 has tandem catalytic domains; primary substrates are alpha-tubulin and HSP90 (non-histone); HDAC10 deacetylates polyamines |
| **Class IV** | HDAC11 | Nuclear | Shares features of Class I and II; deacetylates both histones and non-histone substrates; least studied |

UniProt IDs for each family member (for Dataview queries via `complex-subunits:`):

| Member | UniProt | NCBI Gene | HGNC symbol |
|---|---|---|---|
| HDAC1 | Q13547 | 3065 | HDAC1 |
| HDAC2 | Q92769 | 3066 | HDAC2 |
| HDAC3 | O15379 | 8841 | HDAC3 |
| HDAC4 | P56524 | 9759 | HDAC4 |
| HDAC5 | Q9UQL6 | 10014 | HDAC5 |
| HDAC6 | Q9UBN7 | 10013 | HDAC6 |
| HDAC7 | Q8WUI4 | 51564 | HDAC7 |
| HDAC8 | Q9BY41 | 55869 | HDAC8 |
| HDAC9 | Q9UKV0 | 9734 | HDAC9 |
| HDAC10 | Q969S8 | 83933 | HDAC10 |
| HDAC11 | Q96DB2 | 79885 | HDAC11 |

---

## Mechanism of action

All Zn2+-dependent HDACs share a conserved DAC (deacetylase) catalytic domain that coordinates a single Zn2+ ion. The Zn2+ activates a water molecule for nucleophilic attack on the acetyl-lysine carbonyl, releasing acetate and regenerating the free amine on lysine [^seto-yoshida-2014]. The deacetylation reaction is rapid and does not require a cofactor (distinguishing classical HDACs from sirtuins, which require NAD+).

**Histone substrates:** the core lysine residues on H3 and H4 tails — H3K9ac, H3K14ac, H3K27ac, H4K16ac — that are removed by Class I HDACs are marks of active transcription and open chromatin. Removal by HDACs promotes chromatin compaction and transcriptional repression.

**Non-histone substrates:** The Choudhary et al. 2009 quantitative mass-spectrometry survey identified ~3,600 acetylation sites across ~1,750 proteins — the majority non-histone [^choudhary2009]. Key aging-relevant non-histone substrates include:

- **p53** — HDAC1 and SIRT1 deacetylate p53 at K382, promoting MDM2-mediated degradation and modulating senescence/apoptosis fate. See [[p53]].
- **FOXO transcription factors** — HDAC3 deacetylates FOXO3a; acetylation status affects nuclear localization and transcriptional activity of this longevity-linked TF.
- **alpha-tubulin** — HDAC6 (cytoplasmic) deacetylates K40 on alpha-tubulin, regulating microtubule stability and intracellular transport; relevant to neuronal aging and proteostasis.
- **HSP90** — HDAC6 deacetylation promotes HSP90 chaperone activity; hyperacetylation upon HDAC6 inhibition reduces HSP90 client loading.
- **NF-κB p65 (RelA)** — HDAC3 and SIRT1 deacetylate K310, modulating NF-κB transcriptional output in the inflammatory SASP program. See [[nf-kb]] and [[cbp-p300]].

---

## Major co-repressor complexes

Class I HDACs do not act as isolated enzymes — they are obligate components of large multi-subunit co-repressor complexes that determine which genomic loci are silenced [^seto-yoshida-2014]:

| Complex | HDAC subunit(s) | Other key components | Primary function |
|---|---|---|---|
| **Sin3A/B** | HDAC1, HDAC2 | SIN3A/B scaffold, SAP30, RBP1 | Transcriptional repression at promoters; p53 deacetylation |
| **NuRD** (nucleosome remodeling and deacetylase) | HDAC1, HDAC2 | CHD3/4 ATPase, MBD2/3, MTA1/2/3 | Coupled chromatin remodeling + deacetylation; developmental gene silencing |
| **CoREST** | HDAC1, HDAC2 | LSD1 (KDM1A), REST, RCOR1 | Neuronal gene silencing; REST is a key neuronal identity repressor |
| **NCoR/SMRT** | HDAC3 | NCoR1/2, GPS2, TBL1, TBLR1 | Nuclear receptor co-repressor; HDAC3 requires NCoR/SMRT DAD domain for full deacetylase activity |

The Class IIa HDACs (HDAC4, 5, 7, 9) have minimal intrinsic deacetylase activity — in many contexts, they function as scaffolds that recruit HDAC3 (via the NCoR/SMRT complex) to specific promoters. Their nucleocytoplasmic shuttle is controlled by phosphorylation: CaMKII and PKD phosphorylate specific serine residues, creating 14-3-3 binding sites that anchor Class IIa HDACs in the cytoplasm, de-repressing their target genes.

---

## Role in aging

### Aging-associated histone acetylation changes

Global histone acetylation patterns shift with age. H4K16ac — a mark of active transcription and a suppressor of higher-order chromatin compaction — declines in aged tissues. H3K9ac and H3K14ac at active gene promoters also fall, consistent with an overall drift toward chromatin compaction and transcriptional repression of stress-response and metabolic genes. The underlying mechanism involves both HDAC upregulation in certain contexts and loss of counterbalancing HAT activity ([[cbp-p300]] decline has been documented in aged brains) [^mcintyre2019].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — HAT/HDAC balance is conserved; age-associated histone mark changes documented in human and mouse tissues |
| Phenotype conserved in humans? | partial — transcriptional drift is documented; HDAC-specific contribution vs. sirtuin decline vs. methyltransferase changes is not fully resolved |
| Replicated in humans? | no — no aging-endpoint human trial for HDAC-targeted intervention exists; evidence is mechanistic and model-organism |

#gap/needs-human-replication — direct evidence that modulating Zn2+-dependent HDACs improves human aging endpoints is absent.

### HDAC1 in brain aging and DNA repair

HDAC1 interacts with OGG1 (the base excision repair enzyme that clears 8-oxoguanine) to regulate oxidative DNA damage repair in neurons. Pao et al. 2020 showed in aged mice (~17 months) and the 5XFAD Alzheimer model that:
- HDAC1 activity declines in aged neurons
- HDAC1 loss-of-function increases 8-oxoG accumulation at gene promoters via impaired OGG1 AP-lyase activity
- Pharmacological HDAC1 activation with exifone (50 mg/kg/day IP, 4 weeks) restored OGG1 activity and reduced hippocampal 8-oxoG in 17-month C57BL/6J mice; exifone also improved contextual fear conditioning and hippocampal LTP in 8-month-old 5XFAD mice (Fig. 5g–i) [^pao2020]

**Note on OGG1 acetylation site:** the paper demonstrates HDAC1 deacetylates OGG1 to enhance AP-lyase cleavage activity; mass spectrometry identified the specific p300-acetylated lysine residues on OGG1. The K341 site attribution originates from Bhakat et al. 2006 (ref 47 in Pao 2020), not from Pao 2020 itself — the wiki's original K341 claim should be cross-checked against Bhakat 2006 before propagating. #gap/needs-replication

This establishes a specific non-chromatin role for HDAC1 in brain aging: deacetylation of OGG1 is required for efficient base excision repair. See [[ogg1]] (verified).

### HDAC3 in cardiac and inflammatory aging

HDAC3, as the enzymatic core of the NCoR/SMRT complex, is required for maintaining metabolic gene programs in cardiomyocytes. Cardiac-specific HDAC3 loss-of-function in mice produces severe cardiac hypertrophy and metabolic defects (impaired fatty acid oxidation gene expression). HDAC3 is also the principal deacetylase of NF-κB p65 at K310, modulating inflammatory gene transcription; HDAC3 loss in macrophages derepresses inflammatory cytokines relevant to the SASP [^mcintyre2019]. #gap/needs-replication — the aging-context specificity of HDAC3 cardiac effects requires further mechanistic confirmation.

### HDAC6 in neurodegeneration and proteostasis

HDAC6 is the primary cytoplasmic deacetylase and is uniquely structured with two tandem catalytic domains and a C-terminal ubiquitin-binding ZnF-UBP domain. Its aging-relevant activities include:

- **Tubulin deacetylation** — K40 deacetylation of alpha-tubulin destabilizes microtubules; aged neurons show reduced tubulin acetylation, impairing axonal transport and contributing to neurodegeneration
- **Aggresome formation** — HDAC6 links ubiquitinated misfolded proteins to dynein/dynactin for retrograde transport to the aggresome; relevant to [[loss-of-proteostasis]]
- **HSP90 regulation** — HDAC6 inhibition hyperacetylates HSP90, disrupting its client-loading activity

HDAC6 inhibitors (tubastatin A, ricolinostat/ACY-1215) have been explored in preclinical neurodegeneration models. Ricolinostat entered Phase I/II trials in multiple myeloma; neurodegeneration/aging-specific trials have not been completed. #gap/needs-human-replication

### HDAC inhibitors extend lifespan in model organisms

Pharmacological HDAC inhibition extends lifespan in invertebrate model organisms via multiple inhibitor classes. McDonald et al. (Exp Gerontology, 2013) showed that vorinostat (SAHA), a pan-HDAC inhibitor (Class I/II/IV), extended mid- and late-life longevity in Drosophila melanogaster [^mcdonald2013]. Sodium butyrate (Zhao 2005) and phenylbutyrate (Kang et al. 2002) independently also extend fly lifespan and are short-chain fatty acids, not hydroxamic acids. Valproic acid and beta-hydroxybutyrate (Class I-selective HDAC inhibitors) extend lifespan in C. elegans in multiple studies [^mcintyre2019]. The proposed mechanisms include derepression of stress-response, autophagy, and metabolic genes through increased histone acetylation at their promoters.

**Important caveats:**
- Invertebrate lifespan results with pan-HDAC inhibitors have not translated to mammalian aging models at approved doses
- Short-chain fatty acids like butyrate act on multiple targets beyond HDACs (GPR41/43 receptors, mTOR, etc.); HDAC-specificity of the lifespan effect is not established
- Beta-hydroxybutyrate (BHB), elevated during caloric restriction and ketogenic diet, is an endogenous HDAC inhibitor at 1–2 mmol/L — see [[ketogenic-diet]] (verified)

#gap/needs-human-replication #gap/needs-replication — no mammalian lifespan extension by selective HDAC inhibitors has been demonstrated.

---

## Druggability — aging-context assessment

**Frontmatter: `druggability-tier: 2`**

Per CLAUDE.md R26/R27 aging-context convention: the tier reflects whether a clinical drug exists *for an aging indication engaging this family*, not the maximum-druggability of any member.

- **Maximum druggability of the family = tier 1** — five FDA-approved pan-HDAC or HDAC-selective inhibitors exist: vorinostat (SAHA, CTCL), romidepsin (CTCL/PTCL), panobinostat (multiple myeloma), belinostat (PTCL), chidamide (PTCL, China). These are oncology drugs exploiting the hyperacetylation of tumor-suppressor gene promoters in cancer.
- **Aging-context druggability = tier 2** — no FDA-approved drug exists for an aging indication engaging HDACs. HDAC6-selective inhibitors (ricolinostat/ACY-1215, tubastatin A) have entered clinical trials for neurological diseases but have not completed aging trials. Pan-HDAC inhibitors at oncology doses carry significant toxicity risk (cytopenias, GI, thrombocytopenia) that makes them unsuitable for healthy-aging indications.

The aging-context tier-2 rating reflects: high-quality probes and clinical candidates exist (ricolinostat, vorinostat), but no aging-validated drug is approved. The dosing, selectivity, and safety profile required for chronic aging-prevention use has not been established.

---

## Pharmacology summary

| Drug | Selectivity | Status (aging context) | Primary mechanism |
|---|---|---|---|
| Vorinostat (SAHA) | Pan (Class I/II) | FDA-approved oncology; not aging-indicated | Competitive Zn-chelator; hydroxamic acid |
| Romidepsin | Class I-selective (prodrug; thiol-based) | FDA-approved oncology; not aging-indicated | Cyclic depsipeptide; Class I > II |
| Panobinostat | Pan (Class I/II) | FDA-approved oncology; not aging-indicated | Hydroxamic acid |
| Ricolinostat (ACY-1215) | HDAC6-selective | Phase I/II (myeloma, neurodegeneration); no aging trial | HDAC6 > Class I; hydroxamic acid |
| Tubastatin A | HDAC6-selective | Preclinical (neurodegeneration models) | Hydroxamic acid; structural selectivity |
| Sodium butyrate | Pan (Class I/IIa) | Preclinical / food-grade; endogenous metabolite class | Short-chain fatty acid; competitive |
| Valproic acid | Pan (Class I/IIa) | FDA-approved epilepsy; off-label aging research | Short-chain fatty acid derivative |
| Entinostat (MS-275) | Class I-selective | Clinical (oncology + immunotherapy); no aging trial | Benzamide; competitive |

---

## Pathway and hallmark connections

- **[[epigenetic-alterations]]** — direct mechanistic contributor; HDAC activity determines histone acetylation state at age-regulated loci
- **[[dna-damage-response]]** — HDAC1 deacetylates OGG1 to promote base excision repair; HDAC inhibition impairs DNA repair in some contexts
- **[[cellular-senescence]]** — p53 deacetylation by HDAC1/SIRT1 modulates p53 stability and senescence threshold; HDAC3 deacetylation of NF-κB p65 modulates SASP output
- **[[loss-of-proteostasis]]** — HDAC6-driven aggresome formation; HDAC6 inhibition disrupts ubiquitinated-protein clearance
- [[cbp-p300]] — the principal HDAC counterpart (HAT enzyme); CBP/p300 writes acetyl marks that HDACs remove; the HAT/HDAC balance is the core regulatory axis
- [[p53]] — HDAC1 deacetylates K382; cooperative with SIRT1; affects MDM2-mediated p53 degradation
- [[sirtuin]] — NAD+-dependent Class III deacetylases; functionally overlapping substrates (H3K9ac, H4K16ac, p53 K382, NF-κB p65 K310) but mechanistically distinct; both decline with age through different mechanisms (HDAC: complex disassembly / expression changes; sirtuins: NAD+ depletion)
- [[scfa-signaling]] — gut-derived short-chain fatty acids (butyrate, propionate) are endogenous pan-HDAC inhibitors; links microbiome to epigenome
- [[ketogenic-diet]] — beta-hydroxybutyrate (BHB) is an endogenous HDAC I/IIa inhibitor at nutritional ketosis concentrations

---

## Disambiguation: classical HDACs vs. sirtuins

| Feature | Class I/II/IV HDACs (this page) | Class III (Sirtuins; [[sirtuin]]) |
|---|---|---|
| Members | HDAC1–11 | SIRT1–7 |
| Cofactor | Zn2+ (no cofactor consumed) | NAD+ (consumed stoichiometrically) |
| Structural fold | Arginase/deacetylase fold | Rossmann fold |
| Inhibited by | Hydroxamic acids, benzamides, short-chain fatty acids | Splitomicin, EX-527; activated by NAD+ precursors |
| Age-related change | Variable by member/tissue; often upregulated in inflammation | SIRT1/3/6 decline with age as NAD+ falls |
| Primary aging relevance | Epigenetic drift; non-histone deacetylation; complex disassembly | NAD+-sensing; mitochondrial homeostasis; genome stability |

---

## Limitations and gaps

1. **No aging-endpoint human trial data.** All longevity-relevant HDAC inhibitor evidence is from invertebrate models or human oncology. #gap/needs-human-replication
2. **Family-level page limitation.** HDAC1, HDAC3, and HDAC6 have the strongest individual aging literatures. If any accumulates sufficient primary literature (>3 dedicated aging primary studies), a dedicated per-member page should be seeded. #gap/needs-canonical-id is not flagged here — all UniProt IDs are confirmed Swiss-Prot entries.
3. **Class IIa HDAC activity mechanism.** Class IIa HDACs (HDAC4/5/7/9) are often described as catalytically inactive because their active-site tyrosine is replaced with histidine. The requirement for HDAC3 recruitment vs. intrinsic activity is not fully resolved for all members. #gap/contradictory-evidence
4. **HDAC3 cardiac aging data.** The McKinsey-lab cardiac HDAC3 biology is well-established in development; its specific contribution to *aged* heart function (rather than congenital/developmental defects) requires clearer primary source. #gap/needs-replication
5. **Non-histone substrate aging relevance.** The Choudhary 2009 acetylome identified ~3,600 sites, but which of these are HDAC-family-specific (vs. sirtuin-specific) and which change in an aging-relevant manner is largely unresolved. #gap/no-mechanism
6. **Aging-context safety of HDAC inhibitors.** Pan-HDAC inhibitors at oncology doses cause cytopenias and GI toxicity; low-dose or selective use for aging has not been pharmacokinetically characterized. #gap/long-term-unknown

---

## Footnotes

[^seto-yoshida-2014]: doi:10.1101/cshperspect.a018713 · Seto E, Yoshida M · *Cold Spring Harbor Perspectives in Biology* 2014 · review · 1905 citations · foundational HDAC family review covering all 11 class I/II/IV members, mechanism, complex composition, and substrates · archive: downloaded (bronze OA)

[^yang-seto-2008]: doi:10.1038/nrm2346 · Yang XJ, Seto E · *Nature Reviews Molecular Cell Biology* 2008 · review · 1191 citations (FWCI 36.8; 100th percentile) · Rpd3/Hda1 family classification from bacteria to humans; canonical class I/II/IV taxonomy · archive: download failed (green OA)

[^glozak2005]: doi:10.1016/j.gene.2005.09.010 · Glozak MA, Sengupta N, Zhang X, Seto E · *Gene* 2005 · review · 1562 citations (FWCI 23.0; 100th percentile) · acetylation and deacetylation of non-histone proteins; foundational non-histone substrate evidence · archive: not OA

[^choudhary2009]: doi:10.1126/science.1175371 · Choudhary C et al. · *Science* 2009 · in-vitro (MS proteomics; HeLa + Jurkat cells treated with HDAC inhibitors) · 3985 citations (FWCI 115.3; 100th percentile) · quantitative acetylome: identified ~3,600 acetylation sites on ~1,750 proteins; majority non-histone; established scale of HDAC substrate landscape · archive: not OA

[^mcintyre2019]: doi:10.15252/emmm.201809854 · McIntyre RL, Daniels EG, Molenaars M, Houtkooper RH, Janssens GE · *EMBO Molecular Medicine* 2019 · review · 112 citations (FWCI 6.3; 100th percentile) · HDAC inhibitors in aging — covers lifespan extension in C. elegans (valproic acid, BHB via hda RNAi) and Drosophila (sodium butyrate, phenylbutyrate, TSA, vorinostat); preclinical results in neurodegeneration, cardiac, metabolic disease · archive: downloaded (gold OA)

[^pao2020]: doi:10.1038/s41467-020-16361-y · Pao PC et al. · *Nature Communications* 2020 · in-vivo · model: Hdac1 cKO (Nestin-Cre; neurons + astrocytes) + 5XFAD AD model + aged (17-month) C57BL/6J mice · 199 citations · HDAC1 deacetylates OGG1 (on p300-acetylated lysine residues), stimulating AP-lyase activity; HDAC1 loss → elevated 8-oxoG at gene promoters → transcriptional repression; exifone (50 mg/kg/day IP, 4 wk) rescued OGG1 activity in 17-month WT mice and improved contextual fear conditioning + hippocampal LTP in 8-month 5XFAD mice · archive: downloaded (gold OA)

[^mcdonald2013]: doi:10.1016/j.exger.2012.09.006 · McDonald P, Maizi BM, Arking R · *Experimental Gerontology* 2013 · in-vivo · model: Drosophila melanogaster · 35 citations · vorinostat (SAHA) treatment during mid- and late-life extended longevity; mechanism attributed in part to HDAC inhibition and altered histone acetylation state · archive: download failed (green OA); drug identity confirmed via McIntyre 2019 Table 1
