---
type: protein
aliases: [ATR kinase, ATR_HUMAN, "Ataxia Telangiectasia and Rad3-Related", FRAP-related protein 1]
uniprot: Q13535
ncbi-gene: 545
hgnc: 882
ensembl: ENSG00000175054
genage-id: 231
mouse-ortholog: Atr
key-domains: [HEAT-repeats, FAT, PI3K-like-kinase, FATC]
key-ptms: [Thr1989-autophosphorylation, Ser428-phosphorylation, Ser435-phosphorylation]
pathways: ["[[dna-damage-response]]"]
hallmarks: ["[[genomic-instability]]"]
sens-categories: []
known-interactors: ["[[atrip]]", "[[chk1]]", "[[rpa]]", "[[topbp1]]", "[[p53]]", "[[brca1]]"]
druggability-tier: 2
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[genomic-instability]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Murga 2009 (10.1038/ng.420) and Ruzankina 2007 (10.1016/j.stem.2007.03.002) verified against local PDFs. UniProt Q13535 (length 2,644 aa, Swiss-Prot reviewed) and Open Targets ENSG00000175054 (druggability tier 2: Advanced Clinical SM only, no Approved Drug) confirmed via REST API. GenAge entry 231 for ATR confirmed via HAGR web. Zou & Elledge 2003 (closed-access) cross-checked from verified [[rpa]] page per R32b SOP. Cimprich 1996 (closed-access, not_oa) unverifiable — tagged #gap/no-fulltext-access. Nam & Cortez 2011 (review): PMC XML accessed; archive PDF download failed — quantitative activation fold-change claims from primary biochemical studies summarized therein not independently verified. Saldivar 2017 (review): download failed — claims attributed to this review not verified against full text. Matsuoka 2007 (closed-access): substrate counts unverifiable against full text."
---


# ATR (Ataxia Telangiectasia and Rad3-Related kinase)

The master sensor kinase for **replication stress** — a 2,644-amino-acid serine/threonine kinase of the PIKK (PI3K-like kinase) superfamily that is recruited to RPA-coated single-stranded DNA and orchestrates the checkpoint response to stalled replication forks, resected DSBs, NER intermediates, and other single-stranded lesions. Where its PIKK sibling [[atm]] responds primarily to double-strand breaks, ATR responds to the ssDNA that is the common intermediate of diverse genotoxic insults. ATR is essential: germline null mice are embryonic-lethal, and hypomorphic ATR mutations in humans cause **Seckel syndrome** — a severe primordial dwarfism with microcephaly, growth retardation, and features of accelerated aging. Conditional ATR deletion in adult mice drives stem cell loss and an accelerated-aging phenotype, directly linking ATR-mediated replication-stress signaling to the [[genomic-instability]] hallmark.

## Identity

- **UniProt:** Q13535 (ATR_HUMAN) — Swiss-Prot (manually curated)
- **NCBI Gene:** 545
- **HGNC symbol:** ATR (HGNC: 882)
- **Ensembl:** ENSG00000175054
- **Mouse ortholog:** Atr (one-to-one ortholog; Atr-null mice die in early embryogenesis)
- **Length:** 2,644 amino acids (~301 kDa)
- **GenAge entry:** 231 (human aging gene; selected based on evidence linking ATR to age-related phenotypes in mouse models)
- **Chromosome:** 3q22-q24

**Naming note:** ATR takes its file name per the wiki's DDR-kinase convention — the pathway is part of `[[dna-damage-response]]` (no separate ATR-pathway page exists). See [[atm]] for the parallel convention for the DSB-sensing PIKK.

## Key functional domains

ATR's domain architecture is conserved across PIKK family members ([[atm]], DNA-PKcs, mTOR, SMG1):

- **N-terminal HEAT repeats** — large tandem solenoid scaffold mediating protein-protein interactions; the ATR-ATRIP interaction and TOPBP1 activation surfaces map to the N-terminal and central HEAT-repeat regions (domain annotation in UniProt Q13535 is partial — specific HEAT-repeat ranges listed as exemplary residues 799–835 and 1329–1365; full extent inferred from FAT domain start) #gap/needs-canonical-id
- **FAT domain** (residues 1640–2185) — Found in FRAP, ATM, TRRAP; wraps back around the kinase domain and is required for full activation; conformational changes here couple ATRIP binding to kinase activation
- **PI3K/PI4K catalytic (kinase) domain** (residues 2296–2604) — serine/threonine kinase recognizing the consensus [S/T]-Q motif; structurally similar to lipid PI3-kinases but acts exclusively on protein substrates
- **FATC domain** (residues 2612–2644) — ~30-residue C-terminal domain common to all PIKKs; required for kinase activity

## Activation mechanism

ATR does not exist as an inactive dimer like [[atm]]; rather, it is constitutively bound to its obligate co-factor **ATRIP** (ATR-interacting protein), forming the stable ATR-ATRIP heterodimer. Activation is driven by localization to and conformational activation at sites of ssDNA [^zou2003] [^namcortez2011]:

1. **ssDNA generation** — replication-fork uncoupling (helicase advances while polymerase stalls), nucleolytic resection at DSBs, NER dual-incision intermediates, and other lesions generate single-stranded DNA tracts.
2. **RPA coating** — [[rpa]] coats the ssDNA, creating the **RPA·ssDNA platform**. This is the primary signal recognized by ATRIP.
3. **ATR-ATRIP recruitment** — the ATRIP N-terminal Q-rich domain makes direct contact with the RPA70 (RPA1) DBD-F domain. ATRIP carries ATR to the RPA·ssDNA platform, localizing ATR kinase to the lesion site [^zou2003].
4. **9-1-1 clamp loading** — the RAD9-RAD1-HUS1 (9-1-1) heterotrimer is independently loaded at the 5' recessed junction of ssDNA-dsDNA by the RAD17-RFC clamp loader complex. The 9-1-1 clamp creates a second input for ATR activation by recruiting **TOPBP1** [^namcortez2011].
5. **TOPBP1 activation** — TOPBP1 (Topoisomerase II Binding Protein 1) binds RAD9 (of 9-1-1) and then directly contacts ATR via its ATR-activation domain (AAD). This interaction allosterically stimulates ATR kinase activity in biochemical reconstitution assays; the ">10-fold" figure cited in the review literature originates from primary biochemical studies (Kumagai et al., Mordes et al.) summarized in [^namcortez2011] — the magnitude is not independently verifiable from the Nam & Cortez review alone #gap/needs-primary-source. **Thr1989 autophosphorylation** on ATR marks full kinase activation and promotes sustained TOPBP1 engagement [^namcortez2011].
6. **ETAA1 — an independent activator** — ETAA1 (Ewing tumor-associated antigen 1) also contains an ATR-activating domain and contacts RPA directly; it can activate ATR independently of TOPBP1 during unperturbed S-phase and in response to certain stressors [^saldivar2017].

Activated ATR-ATRIP then phosphorylates hundreds of substrates carrying the [S/T]-Q motif, most critically **CHK1** at Ser317 and Ser345, propagating the checkpoint signal throughout the nucleus [^matsuoka2007].

## Key substrates

ATR phosphorylates >700 proteins at [S/T]-Q sites [^matsuoka2007]. The most aging- and checkpoint-relevant substrates:

| Substrate | Site(s) | Immediate consequence | Downstream outcome |
|---|---|---|---|
| CHK1 | Ser317, Ser345 | CHK1 activation; CDC25A/B/C inhibition | S-phase + G2/M checkpoint enforcement; origin firing suppression |
| [[p53]] | Ser15 (shared with ATM) | Disrupts MDM2 binding; stabilizes p53 | Cell-cycle arrest, senescence, apoptosis |
| RPA32 (RPA2) | Ser33 | RPA hyperphosphorylation | Fork stabilization; marks replication stress |
| H2AX | Ser139 (→ γH2AX) | Histone mark; MDC1 scaffold | Repair complex assembly (shared with ATM/DNA-PKcs) |
| [[brca1]] | Ser1423 | BRCA1 activation | HR pathway engagement; PALB2-BRCA2 recruitment |
| FANCI/FANCD2 | Multiple sites | FANCD2 monoubiquitination-facilitating phosphorylation | Fanconi-anemia pathway activation; interstrand crosslink repair |
| MCM2-7 helicase | Multiple sites (MCM2 Ser108; MCM4 Ser3) | Helicase slowing; dormant-origin suppression | Fork stabilization; preservation of RPA pool |

The CHK1 Ser317/Ser345 phosphorylation is the critical effector event: CHK1 inhibits CDC25A/B/C phosphatases, sustaining CDK phosphorylation/inhibition and preventing premature entry into mitosis and unscheduled origin firing [^namcortez2011].

## Pathway membership

- **[[dna-damage-response]]** — ATR is the apical kinase of the replication-stress/ssDNA branch; [[atm]] handles the DSB-sensing branch. The two pathways extensively crosstalk (DSB resection generates ssDNA that activates ATR; ATR phosphorylates substrates shared with ATM).
- [[cell-cycle-checkpoint]] — via CHK1 at S-phase and G2/M; direct phosphorylation of CDC25A to prevent re-replication
- [[homologous-recombination]] — ATR phosphorylates BRCA1, FANCD2, and fork-protection factors; required for stalled-fork stabilization and restart
- [[cellular-senescence]] — prolonged ATR signaling at irreparable forks or in cells with defective fork restart contributes to permanent arrest and SASP induction (overlap with [[atm]] DDR→senescence axis)

## Role in aging

### ATR hypomorphism: Seckel syndrome as an accelerated-aging model

Biallelic hypomorphic ATR mutations (not null — null is lethal) cause **Seckel syndrome type 1** (OMIM 210600), characterized by [^murga2009]:

- **Severe microcephalic primordial dwarfism** — head circumference and body weight markedly reduced at birth; growth retardation severe throughout life
- **Craniofacial dysmorphia** — "bird-headed" facies; micrognathia; low-set ears
- **Intellectual disability** — variable
- **No cancer predisposition or immunodeficiency** (distinguishing Seckel from AT and Fanconi anemia)

A mouse model carrying a humanized hypomorphic *Atr* allele (the Seckel mutation, A2101G; resulting in exon-skipping and ~10% of normal ATR protein) recapitulates the human syndrome and, critically, exhibits **premature aging features** [^murga2009]:

- Embryonic and perinatal replicative stress markers elevated (γH2AX+ foci, pan-nuclear γH2AX in ATR^S/S MEFs; pCHK1+ foci)
- Premature onset of aging pathologies compared to wild-type littermates: progressive hair graying, kyphosis, osteoporosis, accumulation of fat in bone marrow, decreased density of hair follicles, thinner epidermis; **pancytopenia** (decreased red blood cells, white blood cells, and platelets) [^murga2009]
- Reduced bone marrow HSC-compartment cellularity, with HSC fraction resembling aged mice
- Reduced lifespan: ATR-Seckel mice died in **less than half a year** (Figure 3a: Kaplan-Meyer, n=20 Atr^+/+ vs. n=27 ATR^S/S; median survival approximately 20 weeks); authors' language: "Seckel mice died in less than half a year, showing cachexia and several phenotypes associated with aging" [^murga2009]

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | ATR gene, PIKK structure, and RPA·ssDNA activation are conserved across vertebrates |
| Phenotype (progeroid) in humans? | partial | Human Seckel patients show growth/developmental features, not classical progeroid aging; mouse ATR-Seckel model more directly shows aging pathologies |
| Mechanism (replication stress → aging) in humans? | yes (genetics) | ATR hypomorphism = Seckel syndrome in humans; conditional ATR loss = aging in mice [^ruzankina2007] |

### Conditional ATR deletion in adult mice: stem cell exhaustion and aging phenotype

Ruzankina et al. 2007 showed that **postnatal, tissue-specific ATR deletion** produces severe age-related tissue failure [^ruzankina2007]:

- Tamoxifen-induced *Cre*-mediated deletion of *Atr* in adult ATR^flox/−·Cre-ERT2+ mice (treated at 2–3 months of age) rapidly depleted constitutively-proliferating cell compartments: ~80% of intestinal villus epithelium lost within 1 week (but recovering by 1 month via residual ATR-expressing escapee cells); thymus, bone marrow (HSC and progenitor compartments), testes (spermatogonial stem cells), and hair follicle bulge stem cells progressively depleted [^ruzankina2007]
- Mice developed **age-related tissue phenotypes** within 3–4 months of tamoxifen treatment: pervasive hair graying (n=43), alopecia, kyphosis, weight loss (~20% lower body weight by 1 year), osteoporosis (18% decrease in cortical bone cross-sectional area, 46–76% reduction in trabecular bone volume), thymic involution, fibrosis of heart and kidney, and loss of spermatogenesis — collectively resembling a multi-system accelerated aging phenotype [^ruzankina2007]
- **Pancytopenia** (decreased LSK hematopoietic progenitor frequency) and premature thymic involution were prominent hematopoietic features consistent with stem cell exhaustion [^ruzankina2007]
- The pattern was consistent with **ATR being required for maintenance of proliferating stem and progenitor compartments** — without ATR to resolve replication stress, replicating progenitors fail to sustain tissue-maintenance pools [^ruzankina2007]
- Quiescent cells (neurons, as assessed by brain ATR^Δ/− cell retention and behavioral assays) were not affected, establishing that ATR is an S-phase essentiality, not a global survival factor [^ruzankina2007]

| Dimension | Status | Notes |
|---|---|---|
| Stem-cell-exhaustion mechanism demonstrated? | yes (mouse) | Ruzankina 2007 [^ruzankina2007]; PDF verified 2026-05-07 |
| Demonstrated in primary human aged cells? | no | #gap/needs-human-replication |
| Does normal aging involve progressive ATR insufficiency? | unknown | #gap/no-mechanism |

### ATR and aged HSCs: replication stress accumulation

Aged hematopoietic stem cells (HSCs) accumulate markers of replication stress (elevated γH2AX, RPA32 hyperphosphorylation, increased CHK1 activation) relative to young HSCs — a signature consistent with ATR-pathway engagement under elevated replicative stress. The mechanistic interpretation is that aged HSCs accumulate more stalled forks (from oncogene activation, reactive oxygen species, telomere erosion, and epigenetic dysregulation) and rely increasingly on ATR signaling to prevent replication catastrophe. Whether ATR activity per se changes with HSC aging (rather than the upstream load of replication stress increasing) is not established from primary sources catalogued here. #gap/no-mechanism #gap/needs-human-replication

### The ATR-CHK1 axis and origin firing suppression: relevance to the aging genome

ATR-CHK1 signaling normally suppresses dormant-origin firing during S-phase and replication stress. This origin-firing suppression serves two functions relevant to aging biology:

1. **Prevents replication catastrophe** — preserves the nuclear [[rpa]] pool by limiting the number of concurrent replication forks (see [[rpa]] § RPA exhaustion model [^toledo2013])
2. **Suppresses mutagenesis at fragile sites** — common fragile sites (CFS) and early-replicating fragile sites (ERFS) are the major contributors to copy-number variation and chromosomal rearrangements in cancer; ATR is specifically required for CFS stability [^saldivar2017]

An age-associated decline in ATR-pathway efficiency would be expected to increase unscheduled origin firing, elevate CFS instability, and accelerate the replication-stress component of the [[genomic-instability]] hallmark. This is a mechanistically coherent but not yet directly tested hypothesis. #gap/no-mechanism #gap/needs-human-replication

## Comparison with ATM (DDR-kinase parallelism)

| Feature | ATR | [[atm]] |
|---|---|---|
| Primary activating lesion | ssDNA (stalled forks, resected DSBs, NER gaps) | Double-strand breaks |
| Obligate co-factor | ATRIP | MRN complex (NBS1 bridge) |
| Activating allosteric factor | TOPBP1, ETAA1 | TIP60/KAT5 acetylation of Lys3016 |
| Key effector kinase | CHK1 | CHK2 |
| Null lethality | Embryonic-lethal | Viable (AT syndrome) |
| Human hypomorphic disease | Seckel syndrome 1 | Ataxia-telangiectasia |
| Dominant aging feature (mouse) | Stem cell exhaustion (Ruzankina 2007) | SASP-driven inflammation (Rodier 2009) |
| [S/T]-Q substrate overlap | >400 shared substrates with ATM [^matsuoka2007] | >400 shared substrates with ATR |

Both kinases are members of the same PIKK family; both phosphorylate p53 Ser15, H2AX Ser139, and BRCA1. Discrimination between the two signals occurs largely through their co-factors (ATRIP vs MRN) and the cellular context (replication stress vs frank DSBs). In aging, both pathways likely operate in parallel on the same aging cell, with relative contributions varying by cell type and the type of accumulated damage.

## Pharmacology

### ATR inhibitors in oncology

ATR inhibitors (ATRi) are a major emerging class of DNA-damage-response (DDR)-targeted cancer therapies, exploiting the principle of synthetic lethality with replication-stress-inducing insults or DDR gene deficiencies [^saldivar2017].

| Compound | Class | Status | Notes |
|---|---|---|---|
| Berzosertib (M6620 / VX-970) | ATP-competitive small molecule | Phase 2 (oncology) | Vertex/EMD Serono; most clinically advanced ATRi; multiple solid tumor trials in combination with chemotherapy or olaparib |
| Ceralasertib (AZD6738) | ATP-competitive small molecule | Phase 1/2 (oncology) | AstraZeneca; combined with olaparib or durvalumab; ATM-deficient tumor enrichment strategy |
| Elimusertib (BAY1895344) | ATP-competitive small molecule | Phase 1 (oncology) | Bayer; oral; single-agent activity in DDR-deficient cancers |
| Camonsertib (RP-3500) | ATP-competitive small molecule | Phase 1/2 (oncology) | Repare Therapeutics; combined with synthetic-lethality patient selection (BRCA1/2, ATM-mutated) |

**Aging-relevance of ATR inhibitors:** ATRi are in active oncology development but **not aging-validated**. In the aging context:
- ATR inhibition in aged organisms with elevated baseline replication stress would be expected to exacerbate replication catastrophe (via [[rpa]] pool depletion) and worsen stem cell exhaustion — the opposite of a pro-longevity effect.
- There is no current preclinical aging-extension program using ATRi.
- Any therapeutic angle on ATR in aging would more likely involve **maintaining or restoring ATR signaling capacity** (e.g., in aged stem cells with elevated replication stress) rather than pharmacological inhibition.

Druggability tier 2 reflects that high-quality clinical-stage probes exist (above), but **no aging-indication-validated drug exists** and the therapeutic direction (activation vs. inhibition) for aging is unclear. #gap/unsourced — therapeutic benefit of ATR modulation in aging contexts remains purely speculative.

## Limitations and extrapolation gaps

| Gap | Tag | Notes |
|---|---|---|
| In-vivo human data on ATR activity/expression change with age | #gap/needs-human-replication | Evidence is from mouse conditional KO and ATR-Seckel model |
| ATR-pathway insufficiency in normal human aging (vs. synthetic ATR loss) | #gap/no-mechanism | Normal aging may involve more replication stress (upstream) rather than reduced ATR capacity |
| ATR requirement for inflammatory SASP in vivo | #gap/needs-replication | ATM-SASP link (Rodier 2009) is established; ATR-specific SASP contribution is inferred by pathway logic, not directly demonstrated |
| Therapeutic window for ATR modulation in aging | #gap/unsourced | No preclinical aging-extension data; direction of intervention (activation vs. inhibition) unclear |
| MR-causal evidence | not-tested | No Mendelian randomization study has used ATR instruments to test causal aging relevance; GWAS longevity hits at this locus not described |
| ETAA1-dependent ATR activation in aging | #gap/no-mechanism | ETAA1-ATR activation pathway is less characterized and not studied in aging context |
| ATR in post-mitotic aging | #gap/needs-replication | ATR's role in quiescent/post-mitotic cells (neurons, cardiomyocytes) in aging is not established |

## See also

- [[atm]] — the DSB-sensing PIKK sibling; complementary and partially redundant DDR signaling; compare activation mechanisms and aging phenotypes
- [[dna-damage-response]] — the overarching DDR pathway containing both ATR and ATM branches
- [[rpa]] — obligate upstream partner; RPA·ssDNA is the primary ATR-activation signal [^zou2003]; see also RPA exhaustion model
- [[chk1]] — primary effector kinase of ATR; mediates S-phase and G2/M checkpoint enforcement (stub page)
- [[atrip]] — obligate ATR co-factor; recruits ATR to RPA·ssDNA (stub page)
- [[topbp1]] — allosteric ATR activator; bridges 9-1-1 clamp and ATR kinase domain (stub page)
- [[genomic-instability]] — hallmark that ATR loss drives through replication catastrophe and stem cell exhaustion
- [[cellular-senescence]] — downstream consequence of prolonged ATR signaling at irreparable replication forks
- [[stem-cell-exhaustion]] — hallmark; Ruzankina 2007 mechanistically links ATR to HSC and progenitor maintenance
- [[homologous-recombination]] — ATR phosphorylates multiple HR factors; required for stalled-fork restart
- [[p53]] — key shared substrate of ATR and ATM; Ser15 phosphorylation couples replication stress to cell-fate decisions

## Footnotes

[^cimprich1996]: doi:10.1073/pnas.93.7.2850 · Cimprich KA, Shin TB, Keith CT, Schreiber SL · *PNAS* 1996;93(7):2850–2855 · in-vitro (cDNA cloning) · model: human cell lines · original cloning of ATR as a candidate human cell-cycle checkpoint kinase; homology to budding-yeast Mec1p and S. pombe Rad3 · 263 citations · PDF not available (closed access, not_oa) #gap/no-fulltext-access

[^zou2003]: doi:10.1126/science.1083430 · Zou L, Elledge SJ · *Science* 2003;300(5625):1542–1548 · in-vitro + in-vivo · model: human cells / biochemical reconstitution · "Sensing DNA Damage Through ATRIP Recognition of RPA-ssDNA Complexes" · 2,628 citations · defines the ATR-ATRIP/RPA·ssDNA activation mechanism; ATRIP Q-rich domain contacts RPA70 DBD-F · PDF not available (closed access, not_oa); cross-checked from verified [[rpa]] page (R32b verified, 2026-05-07) — do not re-read this paper; use RPA-page footnote as primary source for this claim #gap/no-fulltext-access

[^murga2009]: doi:10.1038/ng.420 · Murga M, Bunting S, Montaña MF, Soria R, Mulero F, Cañamero M, Lee Y, McKinnon PJ, Nussenzweig A, Fernandez-Capetillo O · *Nature Genetics* 2009;41(8):891–898 · in-vivo · model: ATR-Seckel humanized hypomorphic mouse (A>G synonymous transition in exon 9 → exon skipping → ~10% normal ATR protein; 129SvEv/C57BL/6 mixed background) · "A mouse model of ATR-Seckel shows embryonic replicative stress and accelerated aging" · 350 citations · local PDF via a local paper archive (DOI 10.1038/ng.420, green OA, verified 2026-05-07) · n=20 (Atr^+/+) and n=27 (ATR^S/S) for lifespan curve (Fig. 3a)

[^ruzankina2007]: doi:10.1016/j.stem.2007.03.002 · Ruzankina Y, Pinzon-Guzman C, Asare A, Ong T, Pontano L, Cotsarelis G, Zediak VP, Velez M, Bhandoola A, Brown EJ · *Cell Stem Cell* 2007;1(1):113–126 · in-vivo · model: conditional *Atr* deletion adult mice (tamoxifen-Cre; ATR^flox/−·Cre-ERT2+; 129SvEv/C57BL/6 mixed) · "Deletion of the Developmentally Essential Gene ATR in Adult Mice Leads to Age-Related Phenotypes and Stem Cell Loss" · 791 citations · local PDF via a local paper archive (downloaded 2026-05-07, bronze OA)

[^namcortez2011]: doi:10.1042/bj20102162 · Nam EA, Cortez D · *Biochemical Journal* 2011;436(2):277–289 · review · model: comprehensive ATR signaling mechanism · "ATR signalling: more than meeting at the fork" · 301 citations · PMC:3678388 (PMC XML verified 2026-05-07 — archive PDF download failed, green OA; quantitative activation values in this review summarize primary biochemical studies not independently verifiable from this citation alone)

[^saldivar2017]: doi:10.1038/nrm.2017.67 · Saldivar JC, Cortez D, Cimprich KA · *Nature Reviews Molecular Cell Biology* 2017;18(10):622–636 · review · "The essential kinase ATR: ensuring faithful duplication of a challenging genome" · 806 citations · green OA (http://doi.org/10.1038/nrm.2017.67); download failed in a local paper archive

[^matsuoka2007]: doi:10.1126/science.1140321 · Matsuoka et al. · *Science* 2007;316(5828):1160–1166 · in-vitro + phosphoproteomics · model: human cells (IR-treated) · "ATM and ATR Substrate Analysis Reveals Extensive Protein Networks Responsive to DNA Damage" · identified >900 regulated phosphorylation sites across >700 ATM/ATR substrate proteins · PDF not available (closed access) #gap/no-fulltext-access

[^toledo2013]: doi:10.1016/j.cell.2013.10.043 · Toledo LI et al. · *Cell* 2013;155(5):1088–1103 · in-vitro · model: U-2-OS, DLD1-ATR-Seckel, BJ primary fibroblasts · RPA exhaustion model; ATR suppresses replication catastrophe by limiting dormant-origin firing · local PDF via a local paper archive
