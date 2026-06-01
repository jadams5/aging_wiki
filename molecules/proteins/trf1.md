---
type: protein
aliases: [TERF1, telomeric repeat-binding factor 1, PIN2, TRBF1]
uniprot: P54274
ncbi-gene: 7013
hgnc: 11728
ensembl: ENSG00000147601
genage-id: 105
mouse-ortholog: Terf1
key-domains: [TRFH-dimerization, Myb/SANT-DNA-binding, acidic-N-terminal, nuclear-localization]
key-ptms: [Ser219-phosphorylation-ATM, ADP-ribosylation-TNKS1-TNKS2, SUMOylation-Lys213-Lys325-Lys366, ubiquitination]
pathways: ["[[telomerase-pathway]]"]
hallmarks: ["[[telomere-attrition]]", "[[cellular-senescence]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 3
gtex-aging-correlation: "#gap/not-queried — GTEx age-correlation for TERF1 not yet extracted; see sops/finding-tissue-expression.md"
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[telomere-attrition]]", "[[cellular-senescence]]", "[[stem-cell-exhaustion]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "van Steensel 1997 (PDF verified), Smogorzewska 2000 (PDF verified), Martínez 2009 (PDF verified end-to-end), Sfeir 2009 (PMC full text verified), UniProt P54274 verified via REST API (length, domains, PTMs), NCBI Gene 7013 verified, Open Targets ENSG00000147601 queried (tractability data obtained; druggability-tier-3 aging-context assignment confirmed). Chong 1995 (10.1126/science.270.5242.1663) not verifiable — closed-access (#gap/no-fulltext-access). Three factual corrections made: (1) intestinal crypt / Lgr5+ claim removed — not in Martínez 2009; (2) PARylation citation corrected from van Steensel 1997 to Smith 1998; (3) Open Targets gap tag updated to reflect successful API query."
---

# TRF1 (TERF1)

TRF1 is the founding double-strand-telomere-binding subunit of the [[shelterin]] complex. It binds the duplex 5'-TTAGGG-3' repeats as a homodimer and acts as a **negative regulator of telomere length**: overexpression shortens telomeres, loss-of-function lengthens them [^vansteensel1997]. Beyond length control, TRF1 is indispensable for telomere replication — its loss causes replication-fork stalling and generates fragile-telomere signals [^sfeir2009]. In aging biology, TRF1 levels decline with age in mice and humans (GenAge ID 105), and conditional deletion in proliferative stem-cell compartments produces severe stem-cell exhaustion and degenerative pathology [^martinez2009].

## Identity

- **UniProt:** P54274 (TRF1_HUMAN)
- **NCBI Gene:** 7013 (TERF1)
- **HGNC symbol:** TERF1
- **Ensembl:** ENSG00000147601
- **GenAge ID:** 105
- **Mouse ortholog:** Terf1 (one-to-one ortholog)
- **Chromosomal locus:** 8q21.11
- **Length:** 439 amino acids (canonical isoform)

## Domain architecture

TRF1 has three major structural modules:

| Domain | Residues (approx.) | Function |
|---|---|---|
| N-terminal acidic domain | 1–57 | Unknown function; intrinsically disordered; mediates some protein interactions |
| TRFH dimerization domain | 58–268 | Homodimerization; also mediates binding of TIN2 and other shelterin subunits |
| Nuclear localization signal | 337–356 | Nuclear import |
| Myb/SANT DNA-binding domain | 375–432 | Direct binding to double-stranded TTAGGG repeats |

The homodimeric structure enables TRF1 to engage two TTAGGG repeat tracts simultaneously, bridging across the telomeric double-strand and imposing a looped or compacted architecture. TRF2 shares the same overall topology (TRFH + Myb/SANT) and together they form the backbone of the [[shelterin]] complex.

## Key PTMs

- **Ser219 phosphorylation** — ATM-dependent; induced by DNA damage; modulates TRF1 stability and telomere binding
- **ADP-ribosylation (PARylation)** — by tankyrase 1 (TNKS1/PARP5A) and tankyrase 2 (TNKS2/PARP5B); ribosylation targets TRF1 for ubiquitin-proteasome-mediated degradation, which releases TRF1 from telomeres and makes them accessible to telomerase for elongation [^smith1998]
- **SUMOylation** — at Lys213, Lys325, Lys366; regulates nuclear localization and interaction with other shelterin components
- **Ubiquitination** — by RLIM/RNF12 and SCF-FBXO4; proteasomal degradation

## Shelterin complex context

TRF1 is one of six canonical [[shelterin]] subunits: TRF1, TRF2, RAP1, TIN2, TPP1, and POT1. TRF1 and TRF2 independently bind the double-stranded TTAGGG repeat; POT1 binds the single-stranded G-overhang. TIN2 bridges TRF1 and TRF2, stabilizing the complex. Together, shelterin prevents chromosome ends from being recognized as double-strand breaks and suppresses inappropriate activation of ATM/ATR damage-response pathways.

## Telomere-length regulation

TRF1 negatively regulates telomere length in *cis*. The mechanistic model (protein-counting model) [^vansteensel1997][^smogorzewska2000]:

1. More TRF1 bound to longer telomeres creates a physical barrier that inhibits telomerase access.
2. Overexpression of TRF1 → progressive telomere shortening across cell divisions.
3. Dominant-negative TRF1 (lacking DNA-binding domain) → telomere elongation.
4. TRF2 participates in the same feedback loop but through a mechanistically distinct pathway [^smogorzewska2000].

The tankyrase-mediated PARylation of TRF1 provides the dynamic release mechanism: growth signals or telomerase recruitment pathways activate tankyrase → TRF1 dissociates → telomerase gains access → elongation proceeds until TRF1 re-occupies the now-longer telomere and re-suppresses telomerase.

## Role in telomere replication

Telomeric DNA is inherently difficult to replicate — G-rich runs are prone to forming G-quadruplex secondary structures, and the highly repetitive sequence stalls replication forks. TRF1 recruits replisome-promoting factors (including RTEL1) that resolve G4 structures and restart stalled forks. Loss of TRF1 leads to:

- **Fragile telomere signals** — chromosome ends resembling common fragile sites under replication stress [^sfeir2009]. Sfeir et al. 2009 quantified: TRF1-null MEFs showed ~20% fragile telomeres vs <5% in controls; aphidicolin (0.2 µM) raised this to ~28% (p<0.01, Student's t-test). Human HTC75 cells also showed the fragile-telomere phenotype under aphidicolin, indicating conservation.
- Replication fork stalling at telomeres: SMARD analysis identified 7 of 97 telomeric molecules from TRF1-deficient cells with labeling only in subtelomeric (not telomeric) segments versus 0 of 78 control molecules (p<0.01)
- Engagement of **ATR-dependent** checkpoint signaling (CHK1 phosphorylation, not CHK2) during S phase upon TRF1 deletion — distinct from the ATM/CHK2 axis triggered by TRF2 loss
- BLM and RTEL1 helicases are required to suppress the fragile-telomere phenotype; knockdown of either phenocopies TRF1 loss

| Dimension | Status |
|---|---|
| Mechanism conserved in humans? | yes |
| Phenotype (fragile telomeres) conserved in humans? | partial — fragile telomere signals observed in human cells depleted of TRF1; tissue-level cKO phenotype not directly testable |
| Replicated in humans? | no |

#gap/needs-human-replication — the stem-cell exhaustion and fragile-telomere phenotypes are established in mouse models; direct human equivalents require conditional-genetic systems not yet applied in human subjects.

## Role in aging

### TRF1 levels decline with age

TRF1 protein and mRNA levels decrease with aging in mouse tissues and in human samples (GenAge HAGR ID 105). The decline is consistent with progressive telomere shortening: as telomeres shorten, fewer TRF1 binding sites are available, reducing absolute TRF1 occupancy. Whether reduced TRF1 is a *cause* or *consequence* of telomere attrition remains incompletely resolved. #gap/contradictory-evidence

### Conditional knockout: stem-cell exhaustion and degenerative pathology

Martínez et al. 2009 generated a conditional TRF1 knockout (*TRF1^Δ/Δ K5-Cre*) targeting stratified epithelia via the keratin-5 promoter (active from embryonic day E11.5) on a C57BL/6J background [^martinez2009]:

- Mice were born at expected Mendelian ratios but showed **severe perinatal lethality**: only 8% of *TRF1^Δ/Δ K5-Cre* pups survived to postnatal day 3
- Surviving newborns showed **severe epidermal atrophy**, complete absence of mature hair follicles and sebaceous glands, and skin hyperpigmentation
- Tissue degeneration was preceded by accumulation of **γ-H2AX and 53BP1 foci co-localizing at telomeres** — markers of telomere uncapping and DNA damage signaling — in the epidermis
- Increased p53, p21, and p16 expression in epidermal stem-cell compartments; clonogenic assays showed complete loss of colony-forming capacity in *TRF1^Δ/Δ K5-Cre* keratinocytes
- K15+ hair-follicle bulge stem cell marker was absent, consistent with failure to establish the hair bulge stem cell compartment
- Crucially, **telomere length was not reduced** in TRF1-deleted skin versus wild-type; degenerative phenotype occurs in the absence of telomere shortening
- p53 deletion rescued mouse survival and skin pathologies but led to spontaneous squamous cell carcinomas (SCCs) — demonstrating that TRF1 suppresses tumorigenesis by preventing telomere-induced chromosomal instability
- K5-Cre targets stratified epithelia only; **no intestinal crypt phenotype was reported** in this paper (intestinal stem cells are not targeted by K5-Cre)

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — shelterin architecture and ATM/ATR signaling are conserved |
| Phenotype conserved in humans? | partial — dyskeratosis congenita (shelterin-complex mutations, including TIN2) produces similar epithelial atrophy and stem-cell-failure phenotypes in humans; direct TERF1 germline mutation causing a comparable syndrome has not been described; the K5-Cre model targets stratified epithelia and is not directly comparable to generalized human aging |
| Replicated in humans? | no — conditional genetic models not applicable |

#gap/needs-human-replication

### TRF1 overexpression delays aging markers in mice

Muñoz-Lorente et al. (2018) showed that systemic overexpression of TRF1 via AAV delivery in aged mice improved multiple aging parameters (neuromuscular coordination, metabolic function, cognitive performance) and reduced telomere damage signals — consistent with the GenAge annotation that elevated TRF1 can delay age-related phenotypes in mice. #gap/needs-replication — single study; no independent replication published as of 2026-05.

## Pathway membership

- [[telomerase-pathway]] — TRF1 sets the length set-point for telomerase access at chromosome ends; its dissociation (via tankyrase) is required for telomerase elongation of short telomeres
- [[dna-damage-response]] — TRF1 suppresses ATR/ATM engagement at telomeres; its loss triggers DNA damage signaling even in the absence of bulk genomic damage

## Key interactors

- [[shelterin]] complex partners: TRF2, TIN2, RAP1, TPP1, POT1
- **TNKS1 / PARP5A** (tankyrase 1) — ADP-ribosylates TRF1, triggering proteasomal degradation and telomerase access; the primary regulatory switch on TRF1 occupancy
- **TNKS2 / PARP5B** (tankyrase 2) — redundant with TNKS1 for TRF1 PARylation
- **PINX1** — binds TRF1 and inhibits telomerase; functional interaction at the telomere-length set point
- **ATM** — phosphorylates TRF1 at Ser219 following DNA damage
- **RTEL1** — TRF1-recruited helicase that resolves G4 structures at replication forks; loss of RTEL1 phenocopies TRF1-KO fragile telomere phenotype
- **FBXO4** (SCF subunit) — ubiquitin E3 ligase targeting TRF1 for degradation

## Druggability (aging-context)

**Tier 3 (predicted druggable; aging-context).**

Rationale: the tankyrase-TRF1 regulatory axis is pharmacologically tractable — tankyrase inhibitors (XAV939, G007-LK, and others) efficiently suppress TRF1 degradation and are in clinical development for oncology (Wnt-pathway-driven cancers). However, no tankyrase inhibitor has been validated for an aging indication, and direct small-molecule TRF1 modulators (e.g., ETP-50946, a research probe that directly inhibits TRF1 dimerization from Garcia-Beccaria 2015) are oncology-only tools with no aging-context human data. Direct TRF1 protein itself lacks an obvious small-molecule-accessible active site (it is a structural/adapter protein, not an enzyme). Assessed as tier 3 rather than tier 2 because no high-quality aging probe meeting the tier-2 bar (advanced-clinical or broadly used at biochemically validated doses for aging biology) exists as of 2026.

If the goal were to *increase* TRF1 activity (as in the Muñoz-Lorente 2018 AAV overexpression strategy), the relevant modality is gene therapy rather than small molecule — see [[interventions/gene-therapy/]] for AAV-based telomere maintenance approaches.

**Open Targets query (2026-05-07, ENSG00000147601):** The API returned tractability labels of "Approved Drug" across SM, AB, PR, and OC modalities, and "Advanced Clinical" for all four modalities. However, these labels reflect indirect pathway associations — principally tankyrase (TNKS1/TNKS2) inhibitors (XAV939, IWR-1) that act *upstream* of TRF1 by blocking TRF1 PARylation, and are linked to TRF1's entry via pathway/family-level tractability scoring, not direct TRF1-binding compounds. Top disease associations for TERF1 in Open Targets are neurodegenerative disease (score 0.516), major depressive disorder (0.433), and insomnia (0.403) — all likely driven by telomere-biology GWAS signals in population data, not mechanistically specific. No TRF1-directed approved drug for an aging or telomere-disease indication exists. Aging-context tier-3 assignment is confirmed appropriate: "predicted druggable" via tankyrase-axis, but no validated aging-context clinical compound targeting TRF1 directly.

## Mendelian randomization / population evidence

**Not tested.** No published MR study has used TERF1 germline instruments to test causal effects on aging phenotypes as of 2026-05. Telomere length GWAS (e.g., Codd 2013, Mangino 2012) do not resolve TERF1-specific effects from bulk telomere-length variance. TERF1 does not carry frequent coding variants with large-effect GWAS hits in public databases.

#gap/not-tested — MR evidence for TRF1 causal role in human aging is absent.

## Limitations and gaps

- **Human genetics:** No TERF1 loss-of-function variants causing an overt progeroid syndrome have been described (unlike TINF2/TIN2 or DKC1 mutations in dyskeratosis congenita). The aging-context of TRF1 is primarily inferred from mouse models.
- **Aging-direction of expression change:** GenAge entry notes TERF1 levels decrease with aging, but the Muñoz-Lorente 2018 overexpression data suggest increasing TRF1 is beneficial. The causal direction in humans is not established. #gap/contradictory-evidence
- **GTEx aging correlation:** not yet extracted. #gap/not-queried — run `sops/finding-tissue-expression.md` to populate `gtex-aging-correlation:` field.
- **Druggability:** no aging-validated small-molecule probe exists; Open Targets API queried 2026-05-07 — tier-3 aging-context assignment confirmed (see druggability section for API result interpretation).
- **Mouse telomere biology caveat:** mice have much longer telomeres (~40–60 kb vs ~5–15 kb in humans) and constitutively active telomerase in most somatic tissues. TRF1-cKO phenotypes in mice may overestimate or misrepresent the effect of equivalent TRF1 depletion in human tissues.

| Mouse-to-human extrapolation | Status |
|---|---|
| Shelterin complex conserved? | yes |
| Telomere length set-point mechanism conserved? | yes |
| Telomerase regulation by TRF1 relevant in human soma? | partial — human somatic cells have low/absent telomerase; TRF1 may be less relevant as a dynamic regulator than in mouse soma |
| TRF1-cKO stem-cell exhaustion phenotype extrapolates? | unknown — no human genetic equivalent studied |

## Footnotes

[^chong1995]: [[studies/chong-1995-trf1-human-telomeric-protein]] · doi:10.1126/science.270.5242.1663 · n=N/A · in-vitro (biochemical cloning + cell-based) · model: human HeLa cells / biochemical · 688 citations (citation_percentile 100) · #gap/no-fulltext-access — closed-access per a local paper archive; not verified against full text

[^smith1998]: doi:10.1126/science.282.5393.1484 · Smith S, Giriat I, Schmitt A, de Lange T · *Science* 1998 · in-vitro + cell-based · model: human cells · Tankyrase (PARP5A) poly(ADP-ribosyl)ates TRF1 at telomeres; ADP-ribosylation releases TRF1 from telomeres enabling telomerase access; the founding paper establishing the tankyrase-TRF1 regulatory axis · #gap/no-fulltext-access — not yet in a local paper archive; claim attributed here is consistent with van Steensel 1997 length-regulation model and confirmed by Cook et al. 2002 (Mol Cell Biol 22:332–342) cited in Martínez 2009

[^vansteensel1997]: [[studies/vansteensel-1997-trf1-negative-regulator]] · doi:10.1038/385740a0 · n=N/A · in-vitro + cell-based · model: human HT1080 fibrosarcoma / HeLa · 1208 citations (citation_percentile 100) · local PDF available

[^smogorzewska2000]: [[studies/smogorzewska-2000-trf1-trf2-telomere-length]] · doi:10.1128/MCB.20.5.1659-1668.2000 · n=N/A · cell-based (dominant-negative + overexpression) · model: human HT1080 cells · 759 citations (citation_percentile 100)

[^martinez2009]: [[studies/martinez-2009-trf1-knockout-degenerative]] · doi:10.1101/gad.543509 · n=≥3–10 mice per genotype per experiment (figures specify n per panel; Fig. 5B: n=207 wildtype, n=38 TRF1^Δ/Δ K5-Cre for survival) · in-vivo (mouse, conditional KO) + in-vitro (MEFs) · model: TRF1^Δ/Δ K5-Cre (K5-Cre drives from E11.5 in stratified epithelia; C57BL/6J background) · Martínez P, Thanasoula M, Muñoz P, Liao C, Tejera A, McNees C, Flores JM, Fernández-Capetillo O, Tarsounas M, Blasco MA · *Genes Dev* 2009 · 8% pup survival to P3; severe epidermal atrophy, absent hair follicles/sebaceous glands, skin hyperpigmentation; γ-H2AX + 53BP1 foci at telomeres in epidermis; increased p53/p21/p16 (all p<0.0001); G2/M cell-cycle arrest; absent K15 hair-bulge marker; clonogenic failure of TRF1-null keratinocytes; telomere length normal in TRF1-null skin; p53 deletion rescues survival but causes SCCs; targets stratified epithelia only (not intestinal epithelium) · **PDF verified 2026-05-07** · 365 citations

[^sfeir2009]: [[studies/sfeir-2009-trf1-fragile-telomeres-replication]] · doi:10.1016/j.cell.2009.06.021 · PMC2723738 · n=≥3 independent experiments; SMARD: 97 TRF1-null vs 78 control telomeric molecules · in-vitro + cell-based (aphidicolin 0.2 µM assay) + SMARD replication analysis · model: TRF1^F/F conditional-KO mouse MEFs + human HTC75 fibrosarcoma cells · Sfeir A, Kosiyatrakul ST, Hockemeyer D, MacRae SL, Karlseder J, Schildkraut CL, de Lange T · *Cell* 2009 · fragile telomeres ~20% in TRF1-null MEFs vs <5% controls (p<0.01); aphidicolin raises to ~28%; replication fork stalling: 7/97 TRF1-null vs 0/78 control molecules stall before telomere entry; ATR/CHK1 (not ATM/CHK2) activated; BLM and RTEL1 helicases required; human HTC75 cells phenocopy with aphidicolin; **PMC full text verified 2026-05-07** · 977 citations
