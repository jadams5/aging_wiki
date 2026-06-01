---
type: protein
aliases: [c-KIT, CD117, SCFR, stem cell factor receptor, proto-oncogene c-Kit, KIT_HUMAN]
uniprot: P10721
ncbi-gene: 3815
hgnc: 6342
ensembl: ENSG00000157404
genage-id: null
mouse-ortholog: Kit
pathways: ["[[scf-kit-signaling]]", "[[pi3k-akt-pathway]]", "[[ras-mapk-pathway]]", "[[jak-stat-pathway]]"]
hallmarks: ["[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]"]
sens-categories: []
known-interactors: ["[[kitlg]]", "[[grb2]]", "[[pi3k]]", "[[stat1]]"]
druggability-tier: 2
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "UniProt P10721 structural claims verified against UniProt REST API (2026-05-19): signal peptide corrected 21 aa → 25 aa (SIGNAL 1..25); all domain boundaries confirmed. Hirota 1998 PDF verified (local): 94% figure corrected — refers to KIT expression (46/49 GISTs), not mutation rate; mutation sequencing was 5/6 GISTs in exon 11 JMD. Hattori 2004 cross-checked against verified study page (hattori-2004-scf-solar-lentigo verified:true); all KIT null-result claims confirmed. Gao 2024 (Science adp2065) and Mohri 2025 (Nat Cell Biol s41556-025-01769-9): PMC download failed persistently; Hachiya 2009: not_oa. These three sources unverifiable from full text — claims from each left with existing gap tags. Druggability-tier frontmatter corrected 1 → 2 (aging-context convention per CLAUDE.md R26/R27; body already correctly stated aging-context = 2). Dong 2025 phantom reference resolved: no such paper exists in PubMed; Mohri 2025 (PMID 41053225) is the confirmed correct citation for McSC seno-differentiation."
---


# KIT (c-KIT / CD117)

KIT is a type-III receptor tyrosine kinase (RTK) and the canonical receptor for stem cell factor (SCF, encoded by [[kitlg]]). It gates survival, proliferation, and differentiation of several long-lived progenitor and pigment cell populations — including [[hematopoietic-stem-cells]], [[melanocytes]], [[melanocyte-stem-cells]], mast cells, and interstitial cells of Cajal. In aging biology, KIT is relevant primarily as the receptor-side node of the keratinocyte → melanocyte paracrine axis that drives focal hyperpigmentation ([[skin-aging]]), and as a required surface marker for HSC maintenance and bone-marrow niche retention. Critically, in solar lentigo lesions the KIT receptor is **not** upregulated — the pathogenic signal is ligand-side (SCF/KITLG up 3.9-fold in keratinocytes), ruling out receptor sensitisation as the mechanism [^hattori2004].

**Druggability note.** Multiple FDA-approved KIT inhibitors exist (imatinib, sunitinib, avapritinib, ripretinib); all indications are oncological (GIST, mastocytosis, CML). No aging-indication-validated KIT modulator exists, so the aging-context tier per CLAUDE.md R26/R27 = **2** (high-quality clinical drug exists, not aging-validated). The max-druggability tier (for any indication) = 1.

## Identity

| Field | Value |
|---|---|
| UniProt | P10721 (KIT_HUMAN) |
| NCBI Gene | 3815 |
| HGNC symbol | KIT |
| Ensembl | ENSG00000157404 |
| Chromosome | 4q12 |
| Mouse ortholog | Kit (W locus, "Dominant white spotting") |
| Protein length | 976 aa (precursor, including 25-aa signal peptide; mature chain 26–976) |
| Molecular weight | ~145 kDa (mature glycoprotein; core ~110 kDa) |
| Protein class | Type-III RTK; CSF-1/PDGF receptor subfamily |
| Paralogs (human) | PDGFRA, PDGFRB, CSF1R, FLT3 |

## Structure

KIT is a single-pass type-I transmembrane glycoprotein with the canonical RTK Class III domain architecture [^uniprot-p10721]:

- **Extracellular region (residues 26–524):** Five immunoglobulin-like C2-type domains (D1–D5): Ig-like 1 (27–112), Ig-like 2 (121–205), Ig-like 3 (212–308), Ig-like 4 (317–410), Ig-like 5 (413–507). D1–D3 constitute the primary SCF-binding interface; D4–D5 receptor homodimer contact mediates ligand-induced dimerisation.
- **Transmembrane helix (525–545):** Single-pass anchor.
- **Juxtamembrane domain (JMD, 546–588):** Auto-inhibitory in basal state; gain-of-function mutations here (exon 11, e.g., V559D, W557_K558del) are the most common GIST mutations [^hirota1998].
- **Split kinase domain (589–937):** Bipartite — TK1 (catalytic) / kinase insert domain (KID) / TK2 (substrate binding). The KID is a ~100 aa insertion absent from other RTK classes that recruits regulatory effectors.
- **C-terminal tail (938–976):** Regulatory phosphorylation sites.

### Key phosphorylation sites

Autophosphorylation on ligand binding [^uniprot-p10721]:

| Residue | Domain | Role |
|---|---|---|
| Tyr-568, Tyr-570 | Juxtamembrane | Recruits SRC-family kinases (LYN, FYN); activates RAS/MAPK |
| Tyr-703 | KID | Recruits GRB2 → SOS → RAS cascade |
| Tyr-721 | KID | Recruits PI3K p85 regulatory subunit → AKT survival |
| Tyr-823 | Activation loop, TK2 | Catalytic activation (analogous to PDGFR Tyr-857) |
| Tyr-936 | KID | Recruits GRB7; auxiliary signalling |

Inhibitory phosphorylation by PKC at Ser-741, Ser-746, Ser-821, Ser-959 attenuates kinase activity (feedback regulation by PKC isoforms activated downstream of PLC-γ) [^uniprot-p10721].

## Signalling

SCF (membrane-bound or soluble) → KIT extracellular domain D1–D3 binding → D4-mediated receptor homodimerisation → trans-autophosphorylation → recruitment of SH2-domain effectors:

1. **PI3K–AKT axis** (Tyr-721 → p85 subunit): cell survival, anti-apoptotic; required for HSC maintenance and mast cell survival.
2. **RAS–RAF–MAPK axis** (Tyr-568/570 + Tyr-703 → SRC + GRB2/SOS → RAS): proliferation and differentiation; activates MITF in melanocytes driving melanogenesis [^hachiya2009].
3. **JAK–STAT axis** (Tyr-568/570 → JAK2 → STAT1/3/5): transcriptional activation; relevant in HSC and mast cell contexts.
4. **PLC-γ axis** (Tyr-721 also recruits PLC-γ1): DAG + IP3 → PKC activation + Ca²⁺ release; negative feedback via PKC-mediated Ser phosphorylation of KIT.
5. **SHP-1/SHP-2 (PTPN6/PTPN11) phosphatase recruitment**: negative regulation and signal duration control.

Membrane-bound SCF (31 kDa isoform, encoded by alternatively spliced KITLG exon 6) acts via **juxtacrine contact** — signalling only occurs when a SCF-expressing cell is directly apposed to a KIT-expressing cell. The soluble isoform (18 kDa) can signal in trans. The Hattori 2004 solar lentigo study established that in aged/UV-damaged skin the membrane-bound isoform predominates and the soluble isoform is undetectable in epidermal preparations [^hattori2004].

## Expression and cell-type distribution

KIT expression is relatively restricted; canonical high-expression populations:

- **Haematopoietic stem cells (HSCs):** KIT (CD117) is a core component of the LSK (Lin⁻Sca-1⁺c-Kit⁺) immunophenotype used to isolate mouse HSCs; human HSCs are CD34⁺CD117⁺. KIT signalling is required for HSC maintenance and bone marrow niche retention — see [[hematopoietic-stem-cells]].
- **Mast cells:** KIT signalling is the primary survival/differentiation signal for mast cell precursors and mature mast cells throughout life.
- **Melanocytes and melanocyte stem cells (McSCs):** KIT is expressed on differentiated [[melanocytes]] and on the McSC pool in the hair follicle bulge. SCF–KIT signalling drives melanogenic activation (MITF target gene upregulation, tyrosinase expression) and McSC maintenance [^hachiya2009]. See [[melanocyte-stem-cells]].
- **Primordial germ cells:** KIT is essential for PGC migration to the gonadal ridge during development; loss-of-function causes sterility in the Kit^W series.
- **Interstitial cells of Cajal (ICC):** CD117 is the canonical ICC marker used diagnostically to distinguish ICC-derived GISTs from other mesenchymal tumours [^hirota1998].

## Aging context

### Solar lentigo (focal skin hyperpigmentation)

The solar lentigo (age spot, lentigo senilis) lesion provides the best-characterised human context for KIT signalling in aged tissue. Hattori et al. 2004 (n=29 Japanese patients, paired biopsies) compared lesional and perilesional epidermis using microdissected epidermal sheets (dispase-separated, dermis-free) [^hattori2004]:

- Lesional **SCF mRNA: 3.9-fold elevated** in epidermis (p<0.01; RT-PCR, n=7 pairs)
- Lesional **membrane-bound 31 kDa SCF protein: 1.6-fold elevated** (p<0.05; Western blot, n=6 pairs)
- Soluble 18 kDa SCF: **not detected** in lesional or perilesional epidermal preparations
- **c-KIT mRNA: 1.16-fold, NS** — the KIT receptor itself is **not upregulated** in lesional melanocytes

This null result for KIT is load-bearing: it rules out the alternative hypothesis that aged melanocytes become more sensitive (more KIT) to ambient SCF. The signal gain is entirely ligand-side. Secondary citations that describe "KIT upregulation" in solar lentigo are incorrect and should be treated with scepticism unless they cite independent data [^hattori2004]. #gap/contradictory-evidence — the common "KIT upregulation in age spots" claim in reviews is not supported by Hattori 2004 primary data and no replicated direct measurement of lesional KIT protein levels in LS exists as of 2026.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved across human skin types? | partial | Hattori 2004 cohort: Japanese adults only (Fitzpatrick III–IV); LS occurs pan-ethnically but isoform proportions may differ by phototype #gap/needs-replication |
| Replicated independently? | partial | SCF/KIT axis is widely cited; per-isoform WB data and the KIT null result need independent cohort confirmation |
| Functional blocking tested? | no | No anti-KIT neutralisation or KIT-ECD decoy experiment in LS lesions; causality is mechanistically inferred #gap/no-mechanism |

### Hair follicle melanocyte stem cell aging

KIT–SCF signalling is required for McSC maintenance in the hair follicle niche. Hachiya et al. 2009 (human follicle explants + mouse models) demonstrated that blocking KIT with neutralising antibodies suppresses melanogenic marker expression and causes reversible hair depigmentation [^hachiya2009]. #gap/needs-replication (small n; mouse/human mixed evidence base).

In the most current understanding, McSC depletion with age (hair greying) occurs via a senescence-coupled differentiation programme: DNA double-strand breaks in McSCs trigger "seno-differentiation" — KIT-expressing stem cells undergo p21-driven terminal differentiation rather than self-renewing, depleting the pool [^mohri2025]. This places KIT-expressing McSCs at the intersection of [[stem-cell-exhaustion]] and [[cellular-senescence]] hallmarks. Antagonistically, carcinogen-driven activation of arachidonic acid metabolism plus niche-derived SCF signals can prevent this differentiation and instead promote McSC self-renewal and expansion — increasing melanoma risk [^mohri2025]. #gap/needs-human-replication — the Mohri 2025 findings are primarily from mouse + in vitro genotoxic-stress models.

### Hematopoietic stem cell pool regulation and aging

Gao et al. 2024 (*Science*, citation percentile 100th) revealed a novel KIT-dependent mechanism for HSC niche retention: a subset of HSCs acquires macrophage-associated surface markers via **trogocytosis** — direct membrane transfer from bone marrow macrophages to HSCs — and this process is regulated by the C-KIT receptor [^gao2024]. Trogocytosis-acquired macrophage markers cause HSCs to be retained in the niche rather than mobilised. This establishes KIT not just as a proliferation/survival signal but as a niche-anchoring regulatory node.

In aged mice and humans, HSCs expand numerically but become functionally impaired and show myeloid lineage skewing (see [[hematopoietic-stem-cells]]). Whether age-related changes in KIT surface levels or KIT signalling fidelity contribute to these changes is not directly established; the field has focused more on epigenetic drift and intrinsic HSC changes than on KIT. #gap/needs-replication (KIT surface expression on aged human HSCs vs young; trogocytosis rate in aged marrow).

## Mutations and disease associations

| Mutation class | Representative variant | Disease | Mechanism |
|---|---|---|---|
| Loss-of-function (germline) | Multiple coding variants (e.g., Trp553ter) | Piebaldism | Absent KIT signalling → melanoblast migration/survival failure → patches of unpigmented skin and hair |
| Gain-of-function (somatic) — juxtamembrane | V559D, W557_K558del (exon 11) | GIST | Release of JMD auto-inhibition → constitutive kinase activation → ICC-lineage tumour [^hirota1998] |
| Gain-of-function (somatic) — kinase domain | D816V (exon 17) | Systemic mastocytosis; some AML | Activation-loop mutation → constitutive activity; D816V is imatinib-resistant (requires avapritinib/midostaurin) |
| Gain-of-function (somatic) — exon 9 | A502_Y503dup | GIST (sunitinib-sensitive subtype) | Extracellular domain duplication promoting ligand-independent dimerisation |

Piebaldism: KIT loss-of-function leads to white patches (ventral abdomen, forehead streak) due to failure of neural crest melanoblast migration and survival. The W locus in mice (Kit gene) has been the classical pigmentation genetics system since the early 20th century.

## Pharmacology and druggability

KIT is among the most extensively targeted kinases in oncology. All approved drugs are for non-aging indications:

| Drug | Generation | Main indication | KIT mutation sensitivity |
|---|---|---|---|
| Imatinib (Gleevec) | 1st | GIST (exon 11 > exon 9), CML | Exon 11 >exon 9; D816V resistant |
| Sunitinib (Sutent) | 2nd | Imatinib-resistant GIST | Exon 9 + some secondary resistance mutations |
| Regorafenib | 3rd | Multi-resistant GIST | Broad but limited efficacy |
| Ripretinib (Qinlock) | 4th | ≥3rd line GIST | Broad spectrum via switch-control mechanism |
| Avapritinib (Ayvakit) | 4th | D816V+ mastocytosis; exon 18 GIST | D816V-specific; most potent D816V inhibitor |
| Midostaurin | Multikinase | D816V systemic mastocytosis | D816V coverage; less selective than avapritinib |

**Aging-context tier = 2.** No KIT inhibitor is FDA-approved or phase-3-tested for an aging-rejuvenation indication. Repurposing rationale would be speculative: KIT signalling supports stem cell maintenance (inhibition could worsen HSC/McSC exhaustion). Activation, not inhibition, might be more relevant for aging-associated stem cell loss, but no validated KIT agonist exists clinically. #gap/no-mechanism

## Pathway membership

- [[scf-kit-signaling]] — canonical ligand–receptor axis (stub; page not yet seeded)
- [[pi3k-akt-pathway]] — survival branch downstream of Tyr-721
- [[ras-mapk-pathway]] — proliferation/differentiation branch downstream of Tyr-568/703
- [[jak-stat-pathway]] — transcriptional branch; STAT5 in HSCs
- [[melanogenesis]] — melanocyte KIT → MAPK → MITF → tyrosinase axis

## Key interactors

- [[kitlg]] — ligand (SCF, stem cell factor); the cognate ligand page (R40 forward-ref; not yet seeded as of 2026-05-19)
- [[grb2]] — recruited to phospho-Tyr-703 in KID; bridges to RAS/RAF cascade
- [[pi3k]] — p85 subunit recruited to phospho-Tyr-721; survival signalling
- [[stat1]] — activated downstream via JAK2 in mast cells and HSCs
- PTPN6 (SHP-1) / PTPN11 (SHP-2) — phosphatases that limit KIT signal duration; not yet seeded

## Limitations and gaps

- **KIT surface levels on aged human HSCs** are not directly quantified in a well-powered cross-sectional study; the contribution of KIT signalling fidelity to HSC aging vs epigenetic drift remains unresolved. #gap/needs-replication
- **The KIT null result in solar lentigo** (Hattori 2004) needs independent cohort replication with protein-level quantification across multiple ethnic skin phototypes. #gap/needs-replication
- **Aging-context druggability:** no KIT modulator has been studied in a clinical aging trial; the on-target risk (HSC/McSC depletion by inhibitors) makes repurposing of existing KIT inhibitors counterintuitive. #gap/no-mechanism
- **`scf-kit-signaling` pathway page** not yet seeded; the receptor–ligand axis lacks a dedicated pathway-level page. #stub
- **`kitlg` protein page** not yet seeded (R40 forward-ref flagged in [[studies/hattori-2004-scf-solar-lentigo]]). #stub
- **GenAge entry:** KIT is not listed in the GenAge human aging gene database as of 2026-05-19; no formal longevity-gene annotation. #gap/needs-canonical-id — flag for periodic GenAge re-check.
- **GTEx aging correlation** not populated; KIT is expressed in restricted cell types (not well-captured by bulk GTEx tissue data). #gap/needs-canonical-id

## Cross-references

- [[kitlg]] — cognate ligand (SCF / KITLG); not yet seeded
- [[melanocytes]] — KIT-expressing effector cell for skin pigmentation
- [[melanocyte-stem-cells]] — McSC pool maintenance; KIT is a key niche-retention signal
- [[hematopoietic-stem-cells]] — HSC immunophenotype (LSK = Lin⁻Sca-1⁺c-Kit⁺ in mouse); KIT-trogocytosis niche model
- [[skin-aging]] — solar lentigo (SCF/KIT ligand-driven focal hyperpigmentation)
- [[melanogenesis]] — downstream effector process; SCF/KIT → MAPK → MITF → tyrosinase
- [[stem-cell-exhaustion]] — hallmark; McSC depletion and KIT-dependent niche retention in HSCs
- [[altered-intercellular-communication]] — hallmark; keratinocyte → melanocyte paracrine SCF axis exemplifies this hallmark in skin
- [[studies/hattori-2004-scf-solar-lentigo]] — primary anchor study; KIT mRNA unchanged 1.16-fold NS in lentigo

## Footnotes

[^uniprot-p10721]: UniProt P10721 (KIT_HUMAN), accessed 2026-05-19 · review curated (Swiss-Prot) · Homo sapiens · 976 aa precursor

[^hattori2004]: [[studies/hattori-2004-scf-solar-lentigo]] · doi:10.1111/j.0022-202x.2004.22503.x · n=29 (per-assay n=7 RT-PCR, n=6 WB, n=4 GROα PCR, n=10 IHC) · observational, paired within-patient · model: human lentigo senilis biopsies, Japanese adults 35–85 yr · p<0.01 (SCF mRNA 3.9-fold), p<0.05 (membrane-bound SCF 1.6-fold), NS (c-KIT 1.16-fold) · local PDF confirmed in a local paper archive

[^hirota1998]: doi:10.1126/science.279.5350.577 · Hirota S et al. · *Science* 1998 · n=49 GIST tumours + n=6 sequenced for c-kit coding region · observational · **94% (46/49) of GISTs expressed KIT** by IHC; c-kit coding region sequenced from 6 GISTs: 5/6 showed juxtamembrane domain (exon 11) gain-of-function mutations (deletions/substitutions near Lys-550–Val-560); constitutive kinase activation without SCF confirmed in 293T transfection assay; established KIT as driver oncogenic event in GIST · local PDF confirmed in a local paper archive · NOTE: the 94% figure is KIT *expression*, not mutation rate; exon-11 mutation frequency across larger GIST series is ~60–70% per subsequent literature

[^hachiya2009]: doi:10.1002/path.2503 · Hachiya A et al. · *J Pathol* 2009 · in-vitro + in-vivo (human follicle explants + mouse) · anti-KIT neutralising antibody suppressed melanogenic markers and caused reversible depigmentation; membrane-bound SCF expression peaks during anagen · model: human hair follicle explants + mouse · local PDF: not_oa (closed-access); #gap/no-fulltext-access

[^gao2024]: doi:10.1126/science.adp2065 · Gao X et al. · *Science* 2024 · in-vivo (mouse + ex-vivo human BM) · citation percentile 100th · C-KIT receptor mediates trogocytosis-driven acquisition of macrophage surface markers by HSC subset, governing BM niche retention vs mobilisation · model: mouse BM + human BM · local PDF: PMC open access (PMC11533977) but download failed (a local paper archive PMC fetch pipeline issue — 0 candidate URLs after filtering); #gap/no-fulltext-access pending archive fix

[^mohri2025]: doi:10.1038/s41556-025-01769-9 · Mohri Y et al. (PMID 41053225) · *Nat Cell Biol* 2025 · in-vivo (mouse) + in-vitro · citation percentile 100th · DSB-induced seno-differentiation depletes KIT+ McSCs → hair greying; carcinogen-induced arachidonic acid + niche-SCF blocks differentiation → McSC expansion → melanoma risk · model: mouse genotoxic stress + human cell lines · local PDF: not_oa (closed-access); #gap/no-fulltext-access
