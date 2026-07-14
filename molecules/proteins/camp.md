---
type: protein
aliases: [Cathelicidin Antimicrobial Peptide, hCAP-18, LL-37 precursor, CAMP, FALL-39, CAP-18, CAP18]
uniprot: P49913
ncbi-gene: 820
hgnc: 1472
ensembl: ENSG00000164047
genage-id: null
pathways: ["[[lps-tlr4-nfkb]]", "[[nf-kb]]", "[[jak-stat-pathway]]"]
hallmarks: ["[[chronic-inflammation]]", "[[disabled-adaptive-immunity]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 2
gtex-aging-correlation: "GTEx v8: highest in Whole Blood (median 68.9 TPM), Spleen (10.1), Lung (5.2); detectable in multiple barrier and immune tissues. Age-stratified Spearman ρ not available via API — direct GTEx portal query recommended for age-correlation coefficient. #gap/needs-gtex-aging-data"
mr-causal-evidence: not-tested
caused-by: []
causes: []
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Primary-source claims verified via PubMed abstracts (Wang 2004, Gombart 2005, Liu 2006, Dhawan 2015) and PMC full text (Zhang 2019 via PMC7191997); Sørensen 2001 verified against local PDF. UniProt P49913 feature table re-confirmed via REST API — propeptide boundary corrected to 131. GTEx v8 expression data populated via API (median expression; age-stratified correlation not available via API). Open Targets tractability confirmed via GraphQL. Druggability tier 2 confirmed. Gombart 2005, Liu 2006, Dhawan 2015 are closed-access (not_oa); abstract-level verification only for those three sources."
---

# CAMP / hCAP-18 (Cathelicidin Antimicrobial Peptide)

The CAMP gene encodes **hCAP-18** (human cationic antimicrobial protein, 18 kDa) — the sole human cathelicidin. hCAP-18 is a 170-amino-acid precursor stored in neutrophil secondary granules and constitutively expressed in epithelial tissues. Upon neutrophil exocytosis, extracellular cleavage by proteinase 3 releases the 37-amino-acid C-terminal peptide **LL-37**, the biologically active antimicrobial and immunomodulatory effector. CAMP gene expression is potently induced by 1,25(OH)₂D₃ (active vitamin D) through a vitamin D response element (VDRE) in the promoter — a link with major implications for aging because vitamin D sufficiency declines with age. For the therapeutic framing, dosing, and clinical-application evidence for the LL-37 peptide itself, see [[../compounds/ll-37]].

## Identity

- **UniProt:** P49913 (CAMP_HUMAN) — Swiss-Prot (manually reviewed)
- **NCBI Gene:** 820
- **HGNC:** HGNC:1472 (symbol: CAMP)
- **Ensembl:** ENSG00000164047
- **Mouse ortholog:** Cramp (cathelicidin-related antimicrobial peptide; one-to-one functional ortholog, distinct sequence)
- **Aliases:** FALL-39 (named for an early fragment isolation), CAP-18, hCAP-18
- **GenAge:** Not listed in GenAge-Human or GenAge-Models as of 2026-05-09 #gap/needs-canonical-id (CAMP's aging relevance is biologically well-supported but has not accumulated the lifespan-manipulation evidence GenAge requires)

## Gene structure

- **Chromosomal location:** 3p21.31
- **Exon count:** 4 exons
- **Transcript:** Single primary transcript; HGNC gene family: cathelicidins (CTHL subfamily)
- **Human uniqueness:** The CAMP gene is the single human cathelicidin; many other mammals (mouse, rat, rabbit, bovine) express multiple cathelicidins. The human VDRE in the CAMP promoter is primate-specific — mice, rats, and dogs all lack the corresponding element, making non-primate models non-equivalent for vitamin D → cathelicidin induction studies [^gombart2005].

## Protein structure and processing

The hCAP-18 precursor (170 aa, ~19.3 kDa) is organized into three functional segments:

| Segment | Residues | Function |
|---|---|---|
| Signal peptide | 1–30 | Directs secretory pathway |
| Cathelin-like propeptide domain | 31–131 | Inhibits LL-37 activity intracellularly; structural scaffold |
| LL-37 antimicrobial peptide | 134–170 (37 aa) | Active mature peptide released by PR3 cleavage |

**Cleavage:** Proteinase 3 (PRTN3/PR3), stored in azurophil granules, cleaves hCAP-18 extracellularly after neutrophil exocytosis to generate the mature LL-37 peptide [^sorensen2001]. Cathepsin G (CTSG) and neutrophil elastase (ELANE) can generate additional shorter fragments (KR-20, LL-23) with distinct activity spectra. This extracellular processing is unique to human neutrophils; other species use elastase for intracellular or alternative cleavage.

**LL-37 structure:** 37-residue amphipathic alpha-helix upon membrane contact. Minimum active core: residues 150–162 of the precursor (13 aa). Forms oligomeric pores in bacterial membranes causing lysis.

## Tissue expression

hCAP-18 is expressed across innate immune and barrier tissues:

- **Neutrophils** — highest abundance; stored in specific (secondary/gelatinase) granules and released upon degranulation
- **Monocytes / macrophages** — inducible expression; upregulated by vitamin D, TLR ligands
- **Epithelial cells** — skin keratinocytes, airway epithelium (bronchial), intestinal epithelium, urinary tract epithelium; constitutive and inducible expression
- **Eccrine sweat glands** — secreted onto skin surface via sweat, contributing to cutaneous antimicrobial barrier

Expression is constitutively low at most sites and strongly inducible by: 1,25(OH)₂D₃, TLR ligands (LPS, bacterial DNA), cytokines (IL-1β, TNF-α), and wounding/injury.

> GTEx v8 (via API, gencodeId ENSG00000164047.4): CAMP is most highly expressed in Whole Blood (median 68.9 TPM), Spleen (10.1), and Lung (5.2), with lower detectable expression in ~42 additional tissues including skin, colon, kidney, and adipose. Age-stratified Spearman ρ was not computable via the GTEx API — direct Portal query at gtexportal.org recommended to populate a formal age-correlation coefficient. #gap/needs-gtex-aging-data

## Regulation: the vitamin D–cathelicidin axis

The most mechanistically defined regulatory link is vitamin D induction via the CAMP promoter VDRE:

1. **Direct VDR binding:** Wang et al. 2004 demonstrated that 1,25(OH)₂D₃ directly induces antimicrobial peptide gene expression through a VDRE in the promoter, triggering cathelicidin expression in myeloid and epithelial cells [^wang2004].
2. **TLR-initiated pathway:** Liu et al. 2006 (*Science*) showed that TLR1/2 activation on macrophages upregulates VDR and the 25-hydroxyvitamin D hydroxylase CYP27B1, enabling local conversion of 25(OH)D to 1,25(OH)₂D₃ and subsequent CAMP induction — directly linking innate immune activation to cathelicidin production in a vitamin-D-dependent manner [^liu2006]. This pathway is impaired in individuals with low serum 25(OH)D, including African Americans, correlating with impaired antimicrobial immunity.
3. **Primate specificity:** The CAMP VDRE is absent in mice, rats, and dogs (the VDRE resides within a primate-specific SINE element in the CAMP promoter), so non-primate cathelicidin induction by vitamin D is much weaker or absent [^gombart2005]. Human data are not confounded by this mismatch. Specifically, Gombart 2005 found no induction of CAMP in murine cells and showed murine VDR-deficient and wild-type bone marrow have similar CAMP mRNA levels.
4. **Cooperating factors:** C/EBPα cooperates with VDR at the CAMP promoter in lung epithelial cells via SWI/SNF chromatin remodeling [^dhawan2015]. A C/EBP binding site at −627/−619 is adjacent to the VDRE at −615/−600; mutation of the C/EBP site markedly attenuates both C/EBPα-driven and 1,25(OH)₂D₃-driven CAMP transcription.

**Aging implication:** Serum 25(OH)D levels decline with age due to reduced sun exposure, decreased cutaneous synthesis, and impaired renal hydroxylation. This creates a chronic deficit in vitamin D → VDR → CAMP induction capacity in aged individuals, hypothetically contributing to the increased infection susceptibility and impaired wound healing characteristic of aged skin and airways. #gap/needs-human-replication (direct causation from VD deficit → cathelicidin deficiency → increased infection in aging has not been formally established in a human RCT)

## Additional regulatory inputs

- **Butyrate:** Short-chain fatty acids (especially butyrate from gut microbiota) induce CAMP in colonic epithelium via HDAC inhibition; independent of VDR. Suggests gut microbiome dysbiosis in aging (reduced butyrate producers) may also suppress intestinal cathelicidin.
- **Epidermal growth factor signaling:** Induces CAMP in skin keratinocytes.
- **Glucocorticoids:** Suppress CAMP expression; chronic glucocorticoid exposure (elevated cortisol in aged or stressed individuals) reduces cathelicidin levels.
- **Bacterial signals:** Direct TLR ligand sensing upregulates CAMP independent of vitamin D at high bacterial loads.

## Functional roles in innate immunity

hCAP-18 / LL-37 (via proteolytic release) participates in multiple arms of innate defense. Detailed immunomodulatory functions of the mature LL-37 peptide — including TLR signaling modulation, FPR2 chemotaxis, NLRP3 inflammasome modulation, and neutrophil extracellular trap (NET) formation — are documented on [[../compounds/ll-37]]. Key endogenous biology covered here:

- **Neutrophil granule reservoir:** hCAP-18 is preformed and stored, enabling immediate release upon exocytosis — a first-wave response requiring no new transcription
- **Antimicrobial barrier:** Surface secretion via sweat provides constitutive antimicrobial protection at skin and mucosal barriers
- **Autocrine/paracrine signaling:** Keratinocyte-derived cathelicidin modulates adjacent immune cell recruitment via FPR2 (formyl peptide receptor 2) on monocytes
- **Wound healing:** Cathelicidin promotes keratinocyte migration and re-epithelialization; induced at wound edges

## Aging relevance

### Cathelicidin decline in aged skin

Zhang et al. 2019 (*Immunity*) demonstrated that aging progressively depletes the pool of adipogenic dermal fibroblast (dFB) progenitors (THY1hi PDGFRA+ cells) that differentiate into antimicrobial immature adipocytes and produce cathelicidin in response to *S. aureus*, mediated by TGF-β–driven suppression of adipogenesis [^zhang2019]. TGF-β1 serum concentrations increase from adulthood onward in C57BL/6 mice, whereas TGF-β2 is high neonatally and declines. Blocking TGF-β receptor (TGFBR) signaling restored adipogenic and cathelicidin-producing capacity of dFB progenitors and increased resistance of 1-year-old C57BL/6 male mice to *S. aureus* USA300 skin infection. This establishes a specific mechanism — TGF-β1 elevation in aged dermis → loss of adipogenic dFB → CAMP suppression → increased susceptibility to skin infection — operating in parallel to (and independently of) the vitamin D axis.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | CAMP gene is primate-specific; mouse Cramp is functional ortholog |
| Phenotype conserved in humans? | partial | Aged human skin is known to be more susceptible to bacterial infection; cathelicidin decline is plausible but not directly quantified in controlled aging cohorts |
| Replicated in humans? | no | Zhang 2019 was mouse in vivo; no human equivalent #gap/needs-human-replication |

### Connection to inflammaging

Cathelicidin has a dual-edged role in the context of [[chronic-inflammation]]:

- **Insufficient cathelicidin** — impaired pathogen clearance → increased infection → secondary inflammatory cascades → inflammaging amplification
- **Excess LL-37** — released cathelicidin is a DAMP (damage-associated molecular pattern) capable of activating NLRP3 inflammasome and TLR9 via self-DNA complexes; [[rosacea]] and psoriasis involve pathological cathelicidin overactivation driving sterile inflammation (in rosacea, elevated kallikrein-5 abnormally processes cathelicidin into pro-inflammatory LL-37 fragments — the central innate-immune axis of facial [[erythema]]). In aging, the more prevalent concern is *insufficient* cathelicidin rather than excess.

The [[nlrp3-inflammasome]] and [[lps-tlr4-nfkb]] pathway pages carry the downstream inflammatory details.

### Vitamin D deficiency, aging, and cathelicidin

Aging is associated with vitamin D deficiency worldwide. Given the mechanistic link between vitamin D status and CAMP expression [^wang2004][^liu2006], there is a plausible causal pathway:

```
Aging → ↓ cutaneous synthesis + ↓ renal CYP27B1 activity → ↓ 1,25(OH)₂D₃
→ ↓ VDR activation at CAMP promoter → ↓ hCAP-18 expression
→ impaired innate barrier function → ↑ infection susceptibility
```

However, vitamin D supplementation trials in elderly populations have not consistently demonstrated improvements in infection outcomes or cathelicidin levels. The translation from the mechanistic chain to clinically meaningful outcomes remains unresolved. #gap/needs-human-replication #gap/contradictory-evidence

## Pathway connections

- [[lps-tlr4-nfkb]] — TLR1/2 signals (upstream of CAMP induction); NF-κB cooperates with VDR at CAMP promoter
- [[nf-kb]] — transcriptional co-activator of CAMP at some promoter configurations
- [[jak-stat-pathway]] — cytokine signaling (IL-4, IL-13) can suppress CAMP in atopic dermatitis context
- [[tgf-beta]] — TGF-β suppresses CAMP in aged dermis (Zhang 2019); TGF-β pathway page carries further detail
- [[nlrp3-inflammasome]] — LL-37 (the cleaved product) can activate NLRP3; see [[../compounds/ll-37]]

## Druggability assessment

**Tier: 2** (aging-context). High-quality probes and investigational biologics target cathelicidin, but no FDA-approved drug exists for an aging indication engaging CAMP. Rationale:

- LL-37 itself is in clinical development as a topical/inhaled therapeutic (cystic fibrosis airway infections; wound healing) — these are infection/wound indications, not aging
- Vitamin D supplementation indirectly upregulates endogenous CAMP; vitamin D is widely used but not validated specifically for cathelicidin-mediated aging outcomes
- CAMP is not a canonical drug target; modulation is indirect (via VDR agonism, TGF-β inhibition, HDAC inhibition/butyrate)
- Open Targets Platform (confirmed via GraphQL, 2026-05-09): CAMP has positive tractability flags for SM "Structure with Ligand" and antibody-modality accessibility (UniProt loc + GO CC + SigP signals); all "Approved Drug," "Advanced Clinical," and "Phase 1 Clinical" buckets are negative across all modalities (SM, AB, PR, OC). Zero known-drugs entries in the knownDrugs table. This confirms tier-2 (high-quality ligand/structural data; no approved or late-clinical drug)

## Knowledge gaps and limitations

1. **No MR study** — `mr-causal-evidence: not-tested`. No Mendelian randomization study has been published using CAMP genetic variants to test causal effects on aging outcomes. Instruments (GWAS SNPs at 3p21.3) likely exist but have not been leveraged for aging MR. #gap/needs-replication
2. **GTEx median expression populated; age-correlation not yet available** — GTEx v8 median expression confirmed via API (gencodeId ENSG00000164047.4): highest in Whole Blood (68.9 TPM), Spleen (10.1), Lung (5.2). Age-stratified Spearman ρ not computable from the median expression endpoint — Portal query at gtexportal.org needed for the formal age-correlation coefficient. #gap/needs-gtex-aging-data
3. **Human aging cohort data thin** — most cathelicidin aging data comes from mouse models or inference from vitamin D epidemiology; few human studies directly measure cathelicidin levels across age groups. #gap/needs-human-replication
4. **Cathelicidin vs LL-37 distinction in aging** — literature conflates the precursor and mature peptide; it is unclear whether age-related changes primarily affect transcription (hCAP-18 precursor levels) or post-translational processing (PR3 availability, cleavage efficiency). #gap/no-mechanism
5. **GenAge absence** — CAMP is not listed in GenAge-Human; the aging relevance is biologically supported but not yet formalized in that database. Literature checking for any new genage inclusion recommended at next lint pass.

## Cross-references

- [[../compounds/ll-37]] — LL-37 mature peptide; therapeutic framing, clinical evidence, dosing
- [[chronic-inflammation]] — hallmark; cathelicidin connects innate immunity dysregulation to inflammaging
- [[disabled-adaptive-immunity]] — hallmark; cathelicidin decline contributes to impaired innate immune defense in aging
- [[tgf-beta]] — upstream suppressor of cathelicidin in aged dermis (Zhang 2019)
- [[lps-tlr4-nfkb]] — TLR pathway; upstream inducer of CAMP via TLR1/2 → VDR → VDRE axis
- [[nlrp3-inflammasome]] — downstream activator of sterile inflammation by LL-37/self-DNA complexes

## Footnotes

[^wang2004]: doi:10.4049/jimmunol.173.5.2909 · PMID:15322146 · Wang TT et al. · *J Immunol* 2004 · n=not applicable (in-vitro cell culture) · in-vitro · model: human keratinocytes, monocytes, neutrophils, and cell lines · shows 1,25(OH)₂D₃ directly induces CAMP and defensin β2 via consensus VDRE; 1,25(OH)₂D₃ + LPS synergistically induce CAMP in neutrophils; induction also increases antimicrobial activity against *P. aeruginosa*. Verified against PubMed abstract (PMID:15322146); not OA (no PMC PMCID); full-PDF read pending.

[^liu2006]: doi:10.1126/science.1123933 · PMID:16497887 · Liu PT et al. · *Science* 2006 · n=not applicable (in-vitro + human PBMC/macrophages) · in-vitro · model: human macrophages · TLR1/2 activation upregulates VDR and CYP27B1 → local 1,25(OH)₂D₃ production → CAMP induction → intracellular *M. tuberculosis* killing; low serum 25(OH)D in African Americans correlates with impaired cathelicidin mRNA induction. Not OA (status: not_oa in a local paper archive). Verified against PubMed abstract.

[^gombart2005]: doi:10.1096/fj.04-3284com · PMID:15985530 · Gombart AF et al. · *FASEB J* 2005 · n=not applicable (comparative genomics + myeloid cell culture) · in-vitro · model: human myeloid cells (AML lines, bone marrow macrophages, fresh BM cells); comparative genomics across mammals · demonstrates CAMP VDRE resides in a primate-specific SINE in the CAMP promoter; VDRE is absent in mouse, rat, and dog genomes; no CAMP induction in murine cells; murine VDR-deficient and wild-type bone marrow have equivalent CAMP mRNA levels. Not OA (status: not_oa). Verified against PubMed abstract.

[^sorensen2001]: doi:10.1182/blood.v97.12.3951 · Sørensen OE et al. · *Blood* 2001 · n=not applicable (biochemical fractionation + exocytosis experiments) · in-vitro · model: human neutrophils (peripheral blood + skin window exudate) · proteinase 3, solely among the 3 azurophil granule serine proteases (elastase, cathepsin G, proteinase 3), is responsible for extracellular cleavage of hCAP-18 to LL-37 after exocytosis; immunoprecipitation of proteinase 3 from exocytosed material abolishes cleavage; hCAP-18 is stored in specific (secondary) granules; proteinase 3 is from azurophil granules — the two meet extracellularly after exocytosis. Verified against local PDF (a local paper archive).

[^zhang2019]: doi:10.1016/j.immuni.2018.11.003 · Zhang LJ et al. · *Immunity* 2019 · n=C57BL/6 male mice, multiple ages (E14, P1, 3W, 2 months, 1 year) · in-vivo · model: C57BL/6 wildtype male mice (1-year-old as "aged") · THY1hi PDGFRA+ dFB progenitor pool declines postnatally and is nearly absent by 1 year; TGF-β1 serum elevation in adult/aged mice drives this decline; TGFBR inhibition restores adipogenic/antimicrobial function in culture and reduces *S. aureus* USA300 lesion size and CFU in 1-year-old mice. PMC OA (PMC7191997). Verified against PMC full text.

[^dhawan2015]: doi:10.1002/jcp.24729 · PMID:25078430 · Dhawan P et al. · *J Cell Physiol* 2015 · in-vitro · model: human lung epithelial cells · C/EBPα binding site at −627/−619 in CAMP promoter cooperates with VDR at adjacent VDRE (−615/−600); cooperation mediated via SWI/SNF chromatin remodeling (Brahma/Brm ATPase); mutation of C/EBP site markedly attenuates both C/EBPα-driven and 1,25(OH)₂D₃-driven CAMP transcription. Not OA (status: not_oa). Verified against PubMed abstract.
