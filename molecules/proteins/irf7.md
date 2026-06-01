---
type: protein
aliases: [interferon regulatory factor 7, IRF-7]
uniprot: Q92985
ncbi-gene: 3665
hgnc: 6122
ensembl: ENSG00000185507
mouse-ortholog: Irf7
genage-id: null
key-domains: [DNA-binding-IRF, signal-response-domain, IRF-association-domain]
key-ptms: [Ser477-phosphorylation, Ser479-phosphorylation, Ser471-phosphorylation, Ser483-phosphorylation, Lys92-acetylation, Lys375-ubiquitination]
pathways: ["[[type-i-interferon-signaling]]"]
hallmarks: ["[[chronic-inflammation]]"]
sens-categories: []
known-interactors: ["[[tbk1]]", "[[ikbke]]", "[[irf3]]", "[[myd88]]", "[[traf6]]", "[[ticam1]]"]
druggability-tier: 4
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[chronic-inflammation]]"]
literature-checked-through: 2026-05-13
verified: true
verified-date: 2026-05-13
verified-by: claude
verified-scope: "Zhang 2020 and Sugihara 2026 and Yang 2025 PDFs verified against primary source. Ciancanelli 2015 abstract verified via PubMed efetch (PDF not downloadable — green OA status but archive failed; key corrections applied). Wu 2025 abstract verified via PubMed efetch (hybrid OA; PDF unavailable). Canonical-DB identity fields (UniProt Q92985, NCBI Gene 3665, HGNC 6122, Ensembl ENSG00000185507) confirmed via REST API at seed time; not re-verified in this pass."
---


# IRF7 (Interferon Regulatory Factor 7)

Master transcriptional regulator of type I interferon responses, with a central role in innate antiviral immunity. IRF7 is constitutively and highly expressed in [[plasmacytoid-dendritic-cells|plasmacytoid dendritic cells (pDCs)]] — the dominant producers of IFN-α — and is itself an interferon-stimulated gene (ISG), enabling a feed-forward amplification loop. In aging, stimulus-evoked pDC IFN-α production declines with physical frailty [^sugihara2026], while simultaneously, general pro-inflammatory cytokine tone increases — an uncoupling pattern that may underlie elevated influenza mortality in the elderly. In aged mice, early type I IFN responses to influenza are blunted but late-phase inflammatory activity is elevated [^wu2025]. The concept that IRF7-mediated IFN amplification is non-redundant for human antiviral defense is established by inborn-error genetics [^ciancanelli2015][^zhang2020].

## Identity

- **UniProt:** Q92985 (IRF7_HUMAN)
- **NCBI Gene:** 3665
- **HGNC:** 6122 · symbol: IRF7
- **Ensembl:** ENSG00000185507
- **Chromosomal location:** 11p15.5
- **Mouse ortholog:** Irf7 (one-to-one; high sequence conservation of the DNA-binding and signal-response domains)
- **Length:** 503 amino acids (canonical isoform)

## Domain architecture

IRF7 is a member of the IRF (interferon regulatory factor) family, characterized by an N-terminal winged-helix DNA-binding domain (DBD) that contacts interferon-stimulated response elements (ISREs) via a conserved tryptophan pentad repeat [^uniprot-q92985].

Key functional regions (approximate residue boundaries):

| Domain | Residues | Function |
|---|---|---|
| DNA-binding domain (DBD) | ~11–126 | Tryptophan pentad; ISRE-contact; recognized as IRF/SMAD-like fold |
| Linker / disordered regions | 69–88, 133–156, 242–277 | Flexible interdomain segments |
| IRF association domain (IAD) / signal-response domain | ~200–450 | Autoinhibitory in resting state; site of C-terminal phosphorylation; mediates homo- and heterodimerization |
| NMI interaction region | 284–456 | Interaction with NMI (N-Myc interactor) |

**Resting-state autoinhibition:** In unstimulated cells, IRF7 adopts a closed conformation in which the IAD occludes the DBD, holding the protein inactive as a cytoplasmic monomer [^uniprot-q92985]. Phosphorylation of multiple C-terminal serines disrupts this autoinhibition, exposing the DBD and dimerization surfaces.

## Activation mechanism: TBK1/IKKε phosphorylation

Upon viral sensing (via TLR7, TLR9, RIG-I, MDA5, cGAS-STING depending on cell type), the kinases TBK1 and IKKε (IKBKE) phosphorylate IRF7 at multiple C-terminal serine residues [^uniprot-q92985]. The primary activating sites confirmed by UniProt are:

- **Ser-477** — phosphorylated by TBK1 and IKKε
- **Ser-479** — phosphorylated by TBK1 and IKKε

Additional contributing sites include Ser-471, Ser-472, Ser-475, Ser-483, Ser-484, and Ser-487. Phosphorylation at the Ser-477/479 cluster appears to be the minimal requirement for conformational opening and nuclear import [^uniprot-q92985].

After phosphorylation, IRF7 forms homodimers (IRF7:IRF7) or heterodimers with [[irf3]] (IRF7:IRF3), translocates to the nucleus, and drives transcription of *IFNA* genes (multiple subtypes) and, to a lesser extent, *IFNB1* [^ciancanelli2015].

**IRF7 vs IRF3 specificity:** IRF3 is the primary driver of *IFNB1* (IFN-β) transcription in most cell types and is ubiquitously expressed. IRF7, by contrast, preferentially drives transcription of multiple *IFNA* gene subtypes and is required for robust IFN-α production. This division of labor is most evident in pDCs (see below) and in secondary/amplified IFN responses [^ciancanelli2015].

## Inhibitory PTMs

- **Lys-92 acetylation** (by KAT2A/GCN5 and KAT2B/PCAF) — inhibits DNA-binding.
- **Lys-444/446 sumoylation** (by TRIM28/KAP1) — inhibits transactivation.
- **Lys-375 K63-ubiquitination** (by NEURL3) — promotes activation (atypical ubiquitin linkage; activates rather than degrades).

These PTM layers allow fine-tuned signal integration, balancing antiviral amplification against inflammatory runaway.

## pDC-specific constitutive expression

In virtually all somatic cell types, IRF7 protein is present at low basal levels and is induced only after initial type I IFN signaling. [[plasmacytoid-dendritic-cells|Plasmacytoid dendritic cells (pDCs)]] are the principal exception: they maintain constitutively high IRF7 protein, attributable to tonic IRF activity from their differentiation program [^ciancanelli2015]. This pre-loaded state enables pDCs to produce massive amounts of IFN-α within hours of TLR7 or TLR9 engagement — up to 1000-fold more IFN-α per cell than other immune cell types. #gap/needs-replication — the precise fold-excess figure depends heavily on stimulus and cell isolation protocol.

## Feed-forward amplification loop

IRF7 is itself an interferon-stimulated gene (ISG): its promoter contains ISRE elements occupied by ISGF3 (STAT1:STAT2:IRF9 complex) following initial type I IFN signaling. Accordingly, once early IFN-β (IRF3-driven) or initial pDC-derived IFN-α engages the [[type-i-interferon-signaling]] pathway in autocrine/paracrine fashion, IRF7 expression is upregulated in neighboring cells, enabling them to mount a secondary wave of IFN-α production [^ciancanelli2015].

This architecture explains why **IRF7 deficiency specifically impairs the amplified IFN response** rather than completely abolishing it: the initial, IRF3-driven IFN-β pulse is partially preserved; it is the exponential amplification that fails.

## Aging context

### pDC-driven tonic IFN-α and inflammaging

In older individuals, a paradoxical dual dysregulation emerges:

1. **Impaired stimulus-evoked pDC IFN-α production correlates with frailty:** Cross-sectional data in Japanese elderly (n=141, ages 65+, excluding those with chronic diseases) show that the proportion of IFN-α-producing pDCs (IFN-α+pDC, measured after H1N1 stimulation) *decreases* with progression to physical frailty: median IFN-α+pDC 3.45% (IQR 1.19–6.06) in robust vs 1.85% (IQR 0.78–2.25) in frail participants. Logistic regression (model 2, adjusted for age, sex, influenza vaccination, influenza history, cold frequency, and allergies) found an OR of 0.212 (95% CI 0.051–0.895, p=0.04) for high IFN-α+pDC levels in the frail vs robust group [^sugihara2026]. The direction is unambiguously a *decline* in pDC IFN-α secretory function with frailty — not an excess. #gap/needs-replication (cross-sectional; no longitudinal data; frail group n=13 is small)

2. **Elevated pro-inflammatory cytokines with frailty:** Separately from pDC IFN-α, frail participants in the same cohort tended to have higher serum IL-1β, IL-6, TNF-α, and MIG concentrations compared to robust participants [^sugihara2026]. This pro-inflammatory cytokine pattern reflects general inflammaging but is distinct from pDC-IFN-α function.

3. **Impaired early type I IFN responses in aged mice:** In old (70-week) vs young (12-week) C57BL/6J mice infected intranasally with influenza A PR8, aged mice showed significantly lower type I IFN expression in the lung at 3 days post-infection (dpi), alongside higher viral loads [^wu2025]. By contrast, type III IFN was *elevated* in aged mice at 3 dpi and correlated with higher viral load. At 7 dpi, scRNA-seq revealed *elevated* expression of *Irf7*, *Ddx58*, *Il6*, and *Tnf* across macrophages, monocytes, NK cells, dendritic cells, and granulocytes in old mice, suggesting late-phase sustained inflammatory activation rather than simple loss of IRF7. The early IFN deficit appears to be a timing/kinetics defect rather than a loss of IRF7 protein. #gap/no-mechanism — the molecular basis for early type I IFN impairment is not established in this study.

| Aging effect | Direction | Notes |
|---|---|---|
| Stimulus-evoked pDC IFN-α (H1N1-stimulated) | decreased with frailty | OR 0.212 (95% CI 0.051–0.895) for high IFN-α+pDC in frail vs robust [^sugihara2026]; n=13 frail, n=76 robust |
| Pro-inflammatory serum cytokines (IL-1β, IL-6, TNF-α, MIG) | increased with frailty | [^sugihara2026]; general inflammaging signal |
| Early type I IFN lung expression (3 dpi, mouse) | decreased | Aged 70-wk vs young 12-wk C57BL/6J; higher viral load in old mice [^wu2025] |
| Late Irf7 mRNA in lung immune cells (7 dpi, mouse) | increased | scRNA-seq; sustained late-phase inflammation [^wu2025] |
| IRF7 protein level in aged human pDCs | unclear | Not directly measured in either cited study #gap/needs-replication |

**Physical frailty correlation:** A 2026 cross-sectional study in Japanese elderly (Sugihara et al., *Immunity & Ageing*, n=141, mean age 79.5±5.3 years, excluding those with chronic diseases) found that stimulus-evoked IFN-α production by pDCs *declines* with physical frailty progression [^sugihara2026]. The causal direction (whether frailty drives pDC dysfunction or vice versa) is not established, and the small frail group (n=13) warrants cautious interpretation. #gap/no-mechanism

### IRF7 loss-of-function and infection mortality: inborn-error lessons

Casanova and colleagues established in 2015 that compound-heterozygous null mutations in *IRF7* cause **life-threatening influenza pneumonitis** in an otherwise healthy child with no other immune defect [^ciancanelli2015]. The index patient had markedly impaired type I and III IFN amplification; the patient's leukocytes and pDCs produced very little type I and III IFN in response to influenza virus, while dermal fibroblasts and iPSC-derived pulmonary epithelial cells produced reduced amounts of type I IFN and showed increased viral replication. The paper established compound-heterozygous (not homozygous) inheritance in this single index case.

This inborn-error model is directly relevant to aging in two ways:

- **As a phenocopy of aged innate immunity:** The IRF7-deficient patient's impaired IFN amplification mirrors — mechanistically — the age-associated decline in pDC IFN-α responses, even though the underlying cause is genetic rather than epigenetic/degenerative.
- **As a human proof-of-concept for the IFN-amplification bottleneck:** Elevated influenza mortality in the elderly (~90% of seasonal influenza deaths occur in people ≥65) is not fully explained by adaptive immunity — the innate IFN response kinetics are a substantial contributor [^wu2025].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | IRF7-TBK1-IFN-α axis is conserved; mouse *Irf7* knockout phenocopies human IRF7 deficiency |
| Phenotype conserved in humans? | yes | Human loss-of-function established [^ciancanelli2015] |
| Replicated in humans? | yes (genetics) | Multiple Casanova-lab patients; COVID-19 loss-of-function data also confirms [^zhang2020] |

### COVID-19 connection

Zhang et al. (2020, *Science*, n=659 critically ill COVID-19 pneumonia vs 534 asymptomatic/mild controls) found that deleterious variants in TLR3- and IRF7-dependent type I IFN pathway genes are enriched in patients with life-threatening COVID-19 [^zhang2020]. IRF7 was specifically listed among the eight genes with deleterious variants; 8 patients carried IRF7 variants (including both autosomal-recessive and autosomal-dominant forms), ages 37–69. In total, at least 3.5% of critically ill patients carried known or new deleterious variants at the 8 identified loci. pDCs from an AR IRF7-deficient patient produced no detectable type I or III IFNs upon SARS-CoV-2 infection in vitro. This confirmed the generalizable principle: IRF7-mediated IFN amplification is non-redundant for defense against multiple severe respiratory viruses, not just influenza.

### Tissue-specific and epigenetic aspects

A 2025 bioinformatics + immunohistochemistry study in *Journal of Orthopaedic Surgery and Research* (n=15 young patients aged <45 years vs n=15 aging patients aged ≥45 years with meniscus injury) identified IRF7 and SPHK1 as the two most downregulated inflammation-related genes in aging meniscal tissue, validated at both the transcriptomic level (RNA-seq training dataset, GSE191157 testing dataset) and protein level (IHC, p<0.0001 for IRF7 IOD) [^yang2025]. Machine-learning models (SVM ROC-AUC=0.73; ANN ROC-AUC=0.79) suggest these two genes have diagnostic utility for aging meniscus injury. The orthopaedic context is narrow and the sample size is small; the study does not establish causal direction of IRF7 silencing in inflammaging, nor is it clear whether findings generalize beyond meniscal tissue. Weight accordingly. #gap/needs-replication

## Pathway membership

- [[type-i-interferon-signaling]] — central node; IRF7 is the primary *IFNA* transactivator and a positive feedback element of the entire pathway
- [[innate-immune-signaling]] — downstream of TLR7, TLR9, RIG-I/MDA5, cGAS-STING (cell-type dependent)
- [[jak-stat-signaling]] — indirect participant; ISG status means JAK-STAT signaling induces IRF7 expression

## Key interactors

- [[tbk1]] — primary activating kinase; phosphorylates Ser477/479
- [[ikbke]] — co-activating kinase with TBK1; also phosphorylates Ser477/479
- [[irf3]] — heterodimerization partner; IRF3:IRF7 heterodimers are critical for amplified *IFNB1* responses
- [[myd88]] — adaptor for TLR7/9 → IRF7 in pDCs (TLR9-MyD88-IRF7 is the primary pDC viral-sensing axis)
- [[traf6]] — downstream of MyD88; bridges to TBK1 activation
- [[ticam1]] (TRIF) / TICAM2 — adaptor proteins for TLR3/4 → TBK1 in non-pDC cell types

## Druggability (aging context)

`druggability-tier: 4` — IRF7 is a transcription factor; no approved direct IRF7 modulator exists and TF active sites are generally undruggable. Upstream kinases TBK1 and IKKε are the tractable pharmacological nodes:

- **TBK1 inhibitors** (amlexanox, BX795, MRT67307, compound II) are investigational tools; none approved. In an aging context, systemic TBK1 inhibition would suppress antiviral IFN responses — a significant safety liability.
- **IRF7 enhancement** (to compensate for age-related decline) has no approved approach; conceptually, upstream innate immune priming (adjuvants, pattern-recognition receptor agonists) could activate the pathway.

The aging-intervention question is directionally complex: stimulus-evoked pDC IFN-α declines with frailty (calling for IRF7 enhancement or pDC functional restoration), while simultaneously general pro-inflammatory cytokine levels increase (calling for anti-inflammatory strategies). Interventions targeting IRF7 directly would risk modulating both arms simultaneously. Upstream innate immune priming (adjuvants, TLR agonists) could restore stimulus-evoked IFN-α responses without requiring direct IRF7 targeting. Intervention design requires cell-type-specific and stimulus-context-specific strategies. #gap/no-mechanism

## Related pages

- [[type-i-interferon-signaling]] — pathway context
- [[plasmacytoid-dendritic-cells]] — primary cellular site of IRF7 activity
- [[irf3]] — functional partner; drives IFN-β where IRF7 drives IFN-α
- [[tbk1]] — proximal activating kinase
- [[chronic-inflammation]] — downstream hallmark driven by tonic IFN-α
- [[innate-immunity-aging]] — broader innate immune aging landscape
- [[immunosenescence]] — adaptive immune aging (distinguished from innate)
- [[jak-stat-signaling]] — ISG expression downstream of IFN-α/β receptor

## Limitations and gaps

- `#gap/needs-canonical-id` — GenAge HAGR entry for IRF7 not confirmed; genage-id left null.
- `#gap/needs-replication` — IRF7 protein level in aged human pDCs: neither Sugihara 2026 nor Wu 2025 directly measured IRF7 protein; expression changes are inferred from functional assays and mRNA data.
- `#gap/no-mechanism` — the molecular basis for stimulus-evoked pDC IFN-α decline with aging/frailty is not established; Sugihara 2026 is cross-sectional and cannot distinguish cause from consequence.
- `#gap/needs-human-replication` — aged-mouse IFN response data (Wu 2025, GeroScience, C57BL/6J 70-wk vs 12-wk) has not been directly validated in human elderly cohorts with matched viral challenge protocols.
- `#gap/no-mechanism` — IRF7 epigenetic silencing in meniscus/other tissues: causal direction and generalizability to systemic inflammaging unknown.

## Footnotes

[^uniprot-q92985]: UniProt Q92985 (IRF7_HUMAN), Swiss-Prot/manually reviewed · accessed 2026-05-13 · confirms domain map, PTM sites (Ser477/479 TBK1/IKKε; Lys92 acetylation), subcellular localization, and functional summary
[^ciancanelli2015]: doi:10.1126/science.aaa1578 · PMID 25814066 · Ciancanelli MJ et al. (Casanova lab) · n=1 patient (compound-heterozygous null IRF7 mutations) + in-vitro mechanistic follow-up in leukocytes, pDCs, fibroblasts, iPSC-derived pulmonary epithelial cells · *Science* 2015 · 455 citations · PDF not available via archive (failed download; abstract verified via PubMed efetch)
[^zhang2020]: doi:10.1126/science.abd4570 · PMC7857407 · Zhang Q et al. (Casanova lab + consortium) · n=659 critical COVID-19, 534 asymptomatic/mild controls · genetic association + functional validation · *Science* 2020 · IRF7: 8 patients with deleterious variants (AR and AD forms), ages 37–69; pDCs from AR IRF7-deficient patient produced no detectable type I or III IFN to SARS-CoV-2 in vitro · 2359 citations · PDF verified 2026-05-13
[^sugihara2026]: doi:10.1186/s12979-026-00555-x · Sugihara Y et al. · cross-sectional cohort · *Immunity & Ageing* 2026 · n=141 Japanese elderly (mean age 79.5±5.3 yr, excluding chronic disease); 76 robust, 52 pre-frail, 13 frail (J-CHS criteria); H1N1-stimulated pDC IFN-α+pDC declines with frailty progression; OR 0.212 (95% CI 0.051–0.895) frail vs robust in fully adjusted model · PDF verified 2026-05-13
[^wu2025]: doi:10.1007/s11357-025-01892-3 · PMID 40987991 · Wu W et al. · in-vivo (mouse) · *GeroScience* 2025 · n: young 12-wk vs old 70-wk C57BL/6J mice, influenza A PR8 i.n.; lower lung type I IFN at 3 dpi, higher viral loads in old mice; elevated Irf7 mRNA (scRNA-seq) at 7 dpi in aged lung immune cells; PDF unavailable (hybrid OA; download failed) · abstract verified via PubMed efetch 2026-05-13
[^yang2025]: doi:10.1186/s13018-025-06518-0 · Yang S et al. · bioinformatics + IHC · *J Orthop Surg Res* 2025 · n=15 young (<45 yr) vs 15 aging (≥45 yr) meniscus injury patients; IRF7 and SPHK1 downregulated at transcript and protein level in aging tissue (IHC p<0.0001); SVM ROC-AUC=0.73, ANN ROC-AUC=0.79 · low-tier journal for IFN biology claim; weight accordingly · PDF verified 2026-05-13
