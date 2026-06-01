---
type: protein
aliases: [POT1, hPot1, Protection of telomeres 1]
uniprot: Q9NUX5
ncbi-gene: 25913
hgnc: 17284
ensembl: ENSG00000128513
genage-id: null
mouse-ortholog: Pot1a / Pot1b (two paralogs; see body)
pathways: ["[[telomerase-pathway]]"]
hallmarks: ["[[telomere-attrition]]", "[[cellular-senescence]]", "[[genomic-instability]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 4
gtex-aging-correlation: null
mr-causal-evidence: partial
caused-by: ["[[shelterin]]", "[[tpp1]]"]
causes: ["[[telomere-attrition]]", "[[cellular-senescence]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Hockemeyer 2006 Cell (PDF) and Wang 2007 Nature (PDF) verified end-to-end; Robles-Espinoza 2014 Nat Genet (PDF) verified; Ramsay 2013 Nat Genet confirmed via Crossref (CLL paper, correct DOI), PDF download failed (status: failed) — body claims for Ramsay 2013 checked only against abstract/title; Baumann 2001 Science not_oa (closed-access) — OB-fold discovery claims unverified against full text, tagged #gap/no-fulltext-access; UniProt Q9NUX5 length (634 aa) confirmed via REST API; NCBI Gene 25913 confirmed; Open Targets tier-4 confirmed (no SM/AB/PR approved drugs); GenAge absence confirmed (not in human_genes CSV). Four corrections applied: (1) domain residue table overhauled to match Wang 2007 Fig 1a and Hockemeyer 2006 Fig 1A; (2) TEL-patch claim decoupled from Wang 2007 (term not in that paper — post-2007 literature); (3) Pot1b null phenotype corrected from 'shortened G-overhangs' to 'elongated G-overhangs' (7–11x increase per Hockemeyer 2006 Fig 6C); (4) Pot1a 'massive chromosomal instability' label qualified — the widespread TIF phenotype (70–80% γH2AX) is the DKO phenotype; Pot1a single KO shows ATR-suppression loss with partial phenotype."
---


# POT1 (Protection of Telomeres 1)

The single-stranded telomeric DNA binding subunit of the [[shelterin]] complex. POT1 caps the 3' G-overhang at chromosome ends, preventing inappropriate activation of the ATR-mediated DNA damage response (DDR) at telomeres. Its dual role — physical end-protection and telomerase regulation — places it at the center of the [[telomere-attrition]] hallmark. Loss-of-function mutations are causal in multiple familial cancer syndromes and constitute a recognized class of telomeropathy.

## Identity

- **UniProt:** Q9NUX5 (POT1_HUMAN) — reviewed (Swiss-Prot)
- **NCBI Gene:** 25913
- **HGNC symbol:** POT1
- **Ensembl:** ENSG00000128513
- **Length:** 634 amino acids (canonical isoform)
- **Mouse ortholog:** Two paralogs — *Pot1a* and *Pot1b* — arose from a rodent-lineage gene duplication. Human POT1 performs both functions (see Mouse section below).

## Domain architecture

POT1 has a bipartite domain structure [^baumann2001] [^wang2007]:

| Domain | Residues | Function |
|---|---|---|
| N-terminal ssDNA-binding domain (POT1-N: OB1 + OB2) | ~1–300 | Binds the single-stranded 3' G-overhang (TTAGGG repeats); OB1 (~1–132) makes the primary ssDNA contact; OB2 (~132–299) extends cooperative binding |
| C-terminal TPP1-interaction domain (POT1-C) | ~300–634 | Mediates heterodimerization with [[tpp1]]; required for shelterin assembly and telomerase processivity stimulation |

The domain boundary at ~residue 300 is from Wang et al. 2007 (Nature, Fig. 1a). Hockemeyer et al. 2006 (Cell, Fig. 1A) separately annotates the Telomere/TPP1-binding region as beginning at residue ~415 within the broader POT1-C module. The precise internal sub-domain boundaries within POT1-C are not fully resolved at the level of these two primary sources; finer annotation (OB3 sub-fold, HJRL-like sub-domain) comes from Lei et al. 2004 (*Nat Struct Mol Biol* 11:1223) which is not a primary source cited here. #gap/needs-replication — sub-domain residue ranges within POT1-C should be verified against Lei 2004.

The two N-terminal OB folds together bind the single-stranded 3' G-overhang with high affinity and sequence specificity. The C-terminal domain recruits [[tpp1]] to form the POT1–TPP1 heterodimer, the functional unit for both telomere capping and telomerase regulation [^wang2007].

## Key functions

### 1. End-capping and ATR suppression

The 3' single-stranded G-overhang at chromosome termini is chemically identical to a resected DNA end or stalled replication fork — signals that would normally trigger ATR-ATRIP kinase activation and checkpoint arrest. POT1 binding occludes RPA from the G-overhang, preventing RPA-ATRIP recruitment and thereby suppressing ATR signaling at telomeres [^hockemeyer2006]. Consistent with this:

- Conditional deletion of Pot1a (but not Pot1b) in MEFs causes TIF formation in ~30% of cells, demonstrating that Pot1a is the primary ATR-suppression subunit [^hockemeyer2006].
- This ATR-suppression function is distinct from the TRF2-mediated ATM suppression that protects double-stranded telomeric DNA.

#gap/no-fulltext-access — the original RPA-displacement mechanism for ATR suppression at telomeres is best sourced to Baumann & Cech 2001 [^baumann2001] for POT1 discovery and ssDNA-binding characterization, but the specific ATR-RPA connection was established in subsequent literature (Hockemeyer et al. 2005, *EMBO J*; not cited here). Baumann 2001 is closed-access; the ssDNA binding claim is attributed to it per seeder but has not been verified against the full text.

### 2. Telomerase processivity via TPP1 interaction

Paradoxically, POT1-bound telomeres are still accessible to telomerase. The POT1–[[tpp1]] heterodimer promotes telomerase processivity — the ability of telomerase to add multiple TTAGGG repeats per binding event without dissociation [^wang2007]. Wang et al. 2007 showed a ~4-fold increase in processivity (R₁/₂ from 0.78 to 3.3 repeats) and ~3-fold increase in total activity when the POT1–TPP1 complex is present, using a reconstituted human telomerase system. The TPP1 OB fold (residues 90–250) is structurally homologous to the β-subunit of the *Oxytricha nova* TEBP, suggesting TPP1 is the evolutionary β-subunit of the POT1–TPP1 end-capping complex [^wang2007]. POT1 anchors the heterodimer on ssDNA while TPP1 makes the telomerase-stimulating contacts. The term "TEL patch" (specific surface residues on the TPP1 OB fold that contact TERT) comes from post-2007 literature (Nandakumar et al. 2012 *Science*) and is not introduced in Wang 2007. #gap/needs-replication — the mechanistic detail of which TPP1 residues contact TERT requires citation of the Nandakumar 2012 source.

### 3. Telomere length regulation

POT1 participates in a length-set-point feedback loop within shelterin: longer telomeres recruit more shelterin (and thus more POT1), which reduces telomerase access; shorter telomeres have less POT1, increasing telomerase activity. Loss-of-function POT1 mutations disrupt this feedback, causing paradoxically **elongated** telomeres in carriers — a diagnostic feature distinguishing POT1-related telomeropathies from the short-telomere syndromes caused by TERT/TERC loss [^robles2014].

## Shelterin integration

POT1 is recruited to telomeres exclusively via [[tpp1]] (also known as ACD). The POT1–TPP1 dimer connects to the rest of [[shelterin]] through the TIN2 bridging protein, which links TPP1 to TRF1 and TRF2. POT1 has no direct contact with double-stranded telomeric DNA or with TRF1/TRF2/RAP1. The shelterin wiring:

```
TRF1 ─── TIN2 ─── TRF2
            |
           TPP1 ─── POT1 (on ssDNA G-overhang)
            |
           RAP1 ── TRF2
```

#gap/needs-replication — The precise stoichiometry of POT1 per telomere end in primary human cells remains to be definitively quantified.

## Mouse paralogs

Mice have two POT1 paralogs arising from a rodent-specific gene duplication event [^hockemeyer2006]:

| Paralog | Primary function | Null phenotype |
|---|---|---|
| Pot1a | ATR suppression; essential end-capping | Embryonic lethal (POT1a^8GEO/8GEO^ blastocysts fail to develop, die ~E6.5; conditional deletion in MEFs causes TIF formation in ~30% of cells); partial phenotype distinct from DKO |
| Pot1b | 3'-overhang processing; maintains overhang length | Viable and fertile; **elongated** G-overhangs (7–11x increase in overhang signal in liver, kidney, spleen relative to Pot1b+/+ [^hockemeyer2006]); progressive telomere dysfunction; premature aging phenotype |

**Extrapolation note:**

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial — human POT1 integrates both Pot1a + Pot1b functions; loss-of-function in humans causes cancer predisposition, not embryonic lethality |
| Replicated in humans? | yes (germline mutation cohorts) |

The mouse paralog split is a key divergence: mouse genetics cleanly separates ATR-suppression/end-capping (Pot1a) vs. 3'-overhang processing (Pot1b) functions that are merged in human POT1. Human POT1 functionally complements Pot1b deficiency in MEF rescue experiments (Hockemeyer 2006, Fig. 6D). Mouse results should be interpreted with this in mind; #gap/needs-human-replication applies to mechanistic distinctions derived from Pot1a vs Pot1b-specific experiments.

## Role in aging and disease

### Telomeropathy family membership

POT1 loss-of-function is now classified in the **telomeropathy** spectrum alongside germline TERT and TERC mutations. The unifying feature is abnormal telomere length regulation, though POT1 telomeropathies characteristically produce **long** telomeres (via disrupted length-regulation feedback) while TERT/TERC mutations produce **short** telomeres.

### Cancer predisposition syndromes

POT1 loss-of-function mutations (predominantly OB-fold missense variants that impair ssDNA binding) cause several familial cancer syndromes:

- **Familial melanoma** — germline POT1 OB-fold variants identified in melanoma families negative for CDKN2A/CDK4 mutations [^robles2014]. Penetrance is incomplete; variants in OB1 and OB2 are enriched. Mechanistically: loss of G-overhang binding → ATR activation → genomic instability → melanocyte transformation.
- **Familial CLL (chronic lymphocytic leukemia)** — somatic POT1 mutations identified by whole-genome sequencing of CLL tumors; disrupted shelterin capping leads to telomeric fusions and oncogenic chromosomal rearrangements [^ramsay2013].
- **Cardiac angiosarcoma, glioma** — additional POT1 germline variants reported in familial aggregations (individual case series; #gap/needs-replication).

The oncology mechanism: POT1 loss → ATR hyperactivation at telomeres → telomeric fusions + BFB cycles → genomic instability contributing to transformation. The long-telomere phenotype may also contribute by allowing cells to escape replicative senescence, expanding the window for accumulating additional oncogenic mutations.

### Somatic mutation in aging

Somatic POT1 mutations are detected in tumor sequencing; whether they accumulate in normal aging tissues at biologically significant frequencies (as CHIP mutations do for DNMT3A/TET2) is not established. #gap/needs-replication

### Druggability

POT1 is classified as **tier 4** (effectively undruggable) in aging context. No clinical drug targets POT1 directly. Structural features:

- The OB-fold ssDNA binding is a shallow groove — historically difficult for small-molecule inhibition
- Loss-of-function is the disease-relevant mutation class; an inhibitor would recapitulate pathology, not treat it
- Gain-of-function stabilization is theoretically of interest for telomere maintenance but has no validated scaffold

Research interest is largely structural/mechanistic; small-molecule screens have not produced clinical candidates as of 2026. #gap/unsourced — no systematic druggability screen publication confirmed.

## Pathway membership

- [[telomerase-pathway]] — POT1–TPP1 directly contacts and recruits telomerase; regulates processivity
- [[shelterin]] — core subunit via TPP1; essential for complex assembly at G-overhang

## Key interactors

- [[tpp1]] (ACD) — obligate heterodimer partner; recruits POT1 to telomeres and mediates telomerase contact
- [[shelterin]] — the larger six-subunit complex (TRF1, TRF2, RAP1, TIN2, TPP1, POT1)
- ATRIP / ATR — suppressed by POT1; activated when POT1 is lost

## Aging-relevant cross-references

- [[telomere-attrition]] — primary hallmark affected by POT1 dysfunction
- [[cellular-senescence]] — downstream of ATR activation + telomeric DDR when POT1 is lost
- [[genomic-instability]] — via telomeric fusions and BFB cycles in POT1-deficient cells

## Limitations and gaps

- `genage-id: null` — POT1 does not appear in the GenAge curated human aging gene database as of 2026-05-07; the gene's aging relevance is established via telomeropathy genetics and mouse models rather than a direct longevity GWAS signal. #gap/needs-canonical-id — check GenAge periodically for inclusion.
- `gtex-aging-correlation: null` — GTEx tissue-by-age correlation not yet pulled; populate per `sops/finding-tissue-expression.md`. #gap/unsourced
- `mr-causal-evidence: partial` — no published Mendelian randomization study using POT1 variants as instruments for aging outcomes found, but GWAS instruments exist (telomere length GWAS hits include the POT1 region), qualifying as `partial` per schema (instrument available, MR study pending).
- Lim et al. 2013 (*Genes Dev*) cited in the seeder brief could not be confirmed to a specific DOI during seeding — not cited here. The Wang et al. 2007 *Nature* paper (DOI confirmed) covers the POT1–TPP1 processivity mechanism.
- Cardiac angiosarcoma and glioma POT1 association is from small case series; systematic DOI not confirmed; flagged #gap/needs-replication.

## Footnotes

[^baumann2001]: doi:10.1126/science.1060036 · Baumann P, Cech TR · *Science* 2001 · in-vitro + yeast genetics · model: *S. pombe* + human cell extracts · POT1 discovery; OB-fold ssDNA binding characterization · cited_by ~1022 · #gap/no-fulltext-access — paper is closed-access (not_oa per a local paper archive); OB-fold binding characterization claims attributed to this source have not been verified against full text
[^hockemeyer2006]: doi:10.1016/j.cell.2006.04.044 · Hockemeyer D et al. · *Cell* 2006 · in-vivo (mouse) · n=multiple litters per genotype · model: Pot1a and Pot1b conditional KO mice · functional separation of ATR-suppression (Pot1a) vs overhang-processing (Pot1b) · local PDF available
[^wang2007]: doi:10.1038/nature05454 · Wang F et al. · *Nature* 2007 · in-vitro biochemistry · model: human telomerase + recombinant POT1-TPP1 · POT1-TPP1 heterodimer is a telomerase processivity factor; ~4-fold increase in processivity (R₁/₂ 0.78→3.3 repeats); TPP1 OB fold is structural homolog of O. nova TEBPβ; "TEL patch" terminology not in this paper (post-2007) · local PDF available
[^robles2014]: doi:10.1038/ng.2947 · Robles-Espinoza CD et al. · *Nature Genetics* 2014 · observational (familial melanoma cohort) · n=184 patients from 105 pedigrees CDKN2A/CDK4-negative; POT1 variants in 4/105 families (p=0.016 vs 520-exome control dataset) · POT1 OB-fold germline variants predispose to familial melanoma; all three missense variants (Tyr89Cys, Gln94Glu, Arg273Leu) are in OB1/OB2; associated with elongated telomeres (P<0.0002 within pedigree UF20) · local PDF available
[^ramsay2013]: doi:10.1038/ng.2584 · Ramsay AJ et al. · *Nature Genetics* 2013 · in-vivo + genomic (CLL whole-genome sequencing) · n=CLL tumor cohort · somatic POT1 mutations cause telomere dysfunction and chromosomal instability in CLL · PDF download failed (status: failed after two attempts) — claims verified only against abstract/title via Crossref; #gap/no-fulltext-access
