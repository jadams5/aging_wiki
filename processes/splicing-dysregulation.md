---
type: process
aliases: [alternative-splicing, spliceosome dysfunction, splicing factor decline, pre-mRNA splicing aging, spliceosomal aging]
key-proteins: ["[[sf3b1]]", "[[srsf1]]", "[[srsf2]]", "[[u2af1]]", "[[lmna]]"]
pathways: ["[[dna-damage-response]]", "[[insulin-igf1]]"]
hallmarks: ["[[genomic-instability]]", "[[loss-of-proteostasis]]", "[[epigenetic-alterations]]"]
selective-variants: ["[[intron-retention]]", "[[cryptic-splice-site-activation]]"]
druggability-tier: null
caused-by: ["[[genomic-instability]]", "[[epigenetic-alterations]]", "[[chronic-inflammation]]"]
causes: ["[[loss-of-proteostasis]]", "[[cellular-senescence]]"]
literature-checked-through: 2026-06-02
verified: true
verified-date: 2026-06-02
verified-by: claude
verified-scope: "Scaffidi & Misteli 2006 verified against PMC full text (PMC1855250); Holly et al. 2013 verified against PMC full text (PMC5863542); Latorre et al. 2017 verified against full PDF (gold OA, downloaded); Pabis et al. 2024 verified against full PDF (gold OA, downloaded); Hayman & Simons 2026 verified against PubMed abstract + Crossref (full text not downloadable); Scaffidi & Misteli 2005, Latorre 2019, Adusumalli 2019, Yao 2020, Baralle 2023, Okada 2021, Bhadra 2020, Deschenes 2017, Angarola 2021 not independently re-verified against PDFs — footnote metadata sourced from Crossref/PubMed and seeder extraction"
---

# Splicing Dysregulation

The progressive, age-associated deterioration of pre-mRNA splicing fidelity and regulation. As organisms age, the expression of core spliceosomal components declines, intron retention accumulates across the transcriptome, aberrant and cryptic splice-site usage increases, and functionally significant isoform shifts occur — most notably the lamin A → progerin mis-splicing that links the molecular mechanism of Hutchinson-Gilford progeria syndrome to normal cellular aging. This process is **not a formally adopted López-Otín hallmark** (it does not appear in the 2013 original nine or the 2023 expanded twelve), but is an increasingly prominent candidate for hallmark-adjacent status: multiple reviews now propose it as a mechanistically distinct contributor to aging biology, with splice factor expression changes observed in both model organisms and human cohorts [^bhadra2020][^deschenes2017][^angarola2021].

This page is the canonical home for age-related splicing biology. [[sf3b1]]-specific CHIP/MDS biology lives on its protein page; cross-reference only from here.

---

## The splicing reaction — brief primer

Pre-mRNA splicing is executed by the **spliceosome**, a dynamic ribonucleoprotein complex assembled de novo on each intron from five small nuclear ribonucleoprotein particles (snRNPs): U1, U2, U4, U5, and U6. Assembly proceeds in ordered steps:

| Step | Key complex | Function |
|---|---|---|
| E-complex (early) | U1 snRNP + SR proteins | U1 snRNA base-pairs with the 5' splice site; SR proteins stabilize assembly |
| A-complex | U2 snRNP | U2 snRNA base-pairs with the branch-point sequence (BPS), ~20–50 nt upstream of the 3' splice site; SF3b complex within U2 snRNP contacts branch-point adenosine |
| B-complex | Tri-snRNP (U4/U6·U5) | U4/U6 duplex joins; spliceosome activated after Prp28/SNRNP200 unwind U1–5'ss |
| Bact → C-complex | Catalytic activation | U4 displaced; U6 snRNA forms catalytic active site; first transesterification (lariat formation) |
| Second step | C → P-complex | Second transesterification; exon ligation; intron lariat released and debranched |

**The SF3b complex** (which includes the key aging-relevant protein [[sf3b1]]) sits at the center of U2 snRNP and contacts the branch-point adenosine to position it for catalysis. Mutations or expression changes in SF3b components directly alter 3' splice-site selection — the canonical mechanism in MDS-RS pathology (see [[sf3b1]]) and, in milder form, in normal aging-associated mis-splicing.

**Splice-site selection** involves competition between the spliceosomal machinery and regulatory proteins:
- **SR proteins** (serine/arginine-rich; encoded by *SRSF* genes): generally enhance exon inclusion by binding exonic splicing enhancers (ESEs) and recruiting U1/U2 snRNPs
- **hnRNP proteins** (heterogeneous nuclear ribonucleoproteins): generally repress inclusion by binding exonic/intronic silencers or competing with SR proteins
- **Balance between SR and hnRNP activities** is the primary determinant of alternative exon usage; age-related shifts in this balance drive many of the isoform changes documented below

---

## What "splicing dysregulation" means in aging

Four overlapping phenomena are documented:

### 1. Splicing factor expression decline

**38% of splicing regulatory factors** (27 of 71 tested) show statistically significant age-related expression changes in peripheral blood mononuclear cells in the InCHIANTI cohort (n=695; age range 30–104); a second replication in the San Antonio Family Heart Study (SAFHS, n=1,238) found 29% (15/55 overlapping transcripts) significantly age-associated [^holly2013]. The cross-cohort average approximates one-third, but the primary InCHIANTI result is 38%. Factors that decline with age include several SR protein family members and select hnRNPs; some hnRNPs show compensatory up-regulation. The direction is not uniform across tissues — brain shows different patterns from blood — but the consistent theme is that the stoichiometric balance among spliceosomal components shifts.

In replicative senescence in primary human fibroblasts (three cell strains: NHDF, MRC5, HF043), coordinated downregulation of a broad panel of splicing regulators has been documented — including **SRSF1**, **SRSF2**, **SRSF3**, **SRSF6**, **SRSF7**, **HNRNPA1**, **HNRNPA2B1**, **HNRNPD**, **HNRNPK**, and others (20 factors total in the reported panel); this pattern is partially reversed by resveratrol and five novel resveratrol analogues (compounds 1–6 in the paper; structural stilbene derivatives, not named supplements) at 5 µM, in a manner that correlates with reduction of senescence markers including SA-β-galactosidase, CD248/CDKN2A transcript levels, and re-entry into cell cycle [^latorre2017] [^latorre2019]. Whether the splicing-factor change is causal or a byproduct of senescence is not fully resolved — but the Hayman et al. 2026 *GeroScience* experiment in *Drosophila* provides direct genetic evidence: **knockdown of *Rbp1*** (the fly orthologue of SRSF1) **extends lifespan**, suggesting that SRSF1 activity level is causally tied to the aging program rather than being a bystander [^hayman2026]. #gap/needs-human-replication

### 2. Intron retention accumulation

Intron retention (IR) — the failure to remove an intron from the mature mRNA — increases progressively with aging. Adusumalli et al. 2019 (*Aging Cell*) demonstrated that IR accumulates as a post-transcriptional signature of aging in *Drosophila*, mouse, and human brain, and further increases in Alzheimer's disease, correlating with disrupted mRNA processing and protein homeostasis pathways [^adusumalli2019]. Yao et al. 2020 (*Aging Cell*) showed that IR is widespread during cellular senescence and is driven partly by downregulation of **U2AF1** (U2 snRNP auxiliary factor 1, which recognizes the polypyrimidine tract upstream of the 3' splice site); IR negatively correlated with expression of the retained genes, suggesting that IR-mediated gene silencing contributes to the senescent transcriptome [^yao2020].

Pabis et al. 2024 (*eLife*) further showed that IR and transcriptional readthrough increase concertedly during aging and senescence in human fibroblasts (143 skin fibroblast donors aged 0–96; Fleischer dataset), and that this combination drives apparent transposon de-repression — a phenomenon often attributed to heterochromatin loss but here explained largely by splicing/transcription fidelity loss [^pabis2024]. **Importantly, these effects were more pronounced in human samples than in mice**: intron retention showed only a trend in aged mouse liver (p=0.14) and readthrough was unchanged (p=0.22), so extrapolation to murine aging is not supported by this paper. #gap/needs-replication

### 3. Cryptic splice-site activation and isoform shifts

Beyond bulk IR, aging involves the activation of normally-suppressed cryptic splice sites. The prototypical example is **LMNA/lamin A mis-splicing** (below). More broadly, cryptic exon inclusion and alternative 3' splice-site usage shift the expressed proteome toward isoforms that are less functional, dominant-negative, or pro-senescent.

Genes with documented aging-associated alternative splicing in human tissues include: **SIRT1** (a shorter isoform lacking full deacetylase activity accumulates), **IGF-1** (isoform shifts alter autocrine vs systemic signaling), **p53/TP53** (isoforms with altered transcriptional activity), and **VEGF** (isoforms modulating angiogenic vs anti-angiogenic balance) [^deschenes2017]. The functional consequences of individual isoform shifts are confirmed in some cases but remain correlative in others.

### 4. Global transcriptome complexity changes

At the broadest level, the ratio of alternative-to-canonical splice-site usage increases with age, consistent with a shift from high-fidelity toward noisy splicing. Whether this reflects a deterministic program or stochastic erosion of the spliceosomal quality-control machinery is an open debate — Baralle and Romano 2023 review both possibilities and note that distinguishing driver from passenger changes requires genetic or pharmacological intervention experiments [^baralle2023].

---

## The LMNA/progerin example — the canonical aging mis-splicing event

The best-characterized aging mis-splicing event is activation of a **cryptic 5' splice site** within exon 11 of the *LMNA* gene, producing a truncated lamin A isoform called **progerin** (also called LA∆50). This 50-amino-acid internal deletion removes a proteolytic cleavage site required for post-translational processing of prelamin A into mature lamin A, trapping the protein in a permanently farnesylated, membrane-anchored form.

**In Hutchinson-Gilford Progeria Syndrome (HGPS):** A common heterozygous de novo point mutation (c.1824C>T; p.Gly608Gly) in *LMNA* exon 11 enhances use of this cryptic splice site, producing progerin constitutively in all tissues. Cells from HGPS patients show nuclear blebbing, loss of heterochromatin, telomere shortening, and DNA damage response activation — nuclear phenotypes that closely resemble those of normally aged cells [^scaffidi2005].

**In normal aging:** Scaffidi and Misteli 2006 (*Science*, 1,185 citations) demonstrated that the same cryptic splice site is sporadically activated in **healthy aging cells** at low but detectable levels [^scaffidi2006]. Key findings:
- Progerin accumulates in late-passage normal human fibroblasts and in dermal fibroblasts from elderly donors
- Nuclear abnormalities (blebbing, loss of peripheral heterochromatin) in normally aged cells are mechanistically similar to HGPS nuclear defects
- Antisense oligonucleotides that block the cryptic splice site in HGPS fibroblasts also reverse age-related nuclear abnormalities in normal aged cells
- Implication: the HGPS cryptic splice site is not a disease-specific event but a normally-suppressed splice site that undergoes stochastic de-repression during aging

| Dimension | Status |
|---|---|
| Pathway conserved in model organisms? | Partial — lamin A (true A-type lamin) is absent in *C. elegans* and *Drosophila*; rodents express lamin A and recapitulate progerin overexpression phenotypes in transgenic models |
| Phenotype conserved in humans? | Yes — progerin protein detected in normal human dermal fibroblasts and skin sections from donors aged >40 [^scaffidi2006] |
| Replicated in humans? | Yes — nuclear abnormalities in aging detected independently by multiple groups; specific causal role of progerin in normal aging (vs correlation) remains under study |

**Connection to nuclear lamina biology:** The nuclear lamina (lamin A/B/C meshwork) organizes heterochromatin and tethers repressive chromatin domains to the nuclear periphery. Progerin displaces these contacts, releasing heterochromatin from lamina anchorage — a mechanism shared with some epigenetic-alteration models of aging (loss of H3K27me3 at lamina-associated domains; heterochromatin redistribution). This mechanistically links splicing dysregulation to the [[epigenetic-alterations]] hallmark.

---

## Mechanisms and drivers of age-related splicing decline

### 1. Transcriptional co-regulation disruption

Splicing occurs largely co-transcriptionally — the spliceosome assembles on nascent pre-mRNA as RNA Pol II elongates. The **kinetic coupling model** holds that Pol II elongation rate influences splice-site selection: slower elongation favors inclusion of weak-signal exons by giving the spliceosome more time to recognize them. Age-related changes in chromatin compaction, RNA Pol II processivity, and elongation rate therefore alter splicing outcomes independently of any change in splicing factor concentration.

### 2. Epigenetic disruption of splicing regulatory elements

Histone modifications influence co-transcriptional splicing. H3K36me3 (marking active gene bodies) recruits splicing factors to exons; H3K27me3 (repressive) correlates with exon skipping. The global loss of H3K27me3 and heterochromatin compaction documented with aging (see [[epigenetic-alterations]]) disrupts these splicing-regulatory chromatin cues. This is a mechanistic link between the epigenetic-alterations hallmark and splicing dysregulation.

### 3. Splicing factor phosphorylation state changes

SR protein activity is regulated by phosphorylation: hyperphosphorylation by SRPK1/CLK kinases promotes nuclear retention and spliceosome recruitment; dephosphorylation allows SR proteins to associate with export machinery. Age-associated changes in ERK, AKT, and mTOR signaling alter SRPK1/CLK activity and thereby the phosphorylation state of SR proteins, shifting their localization and activity [^latorre2019].

### 4. Somatic mutation in splicing factors (CHIP)

In hematopoietic tissues, somatic clonal mutations in **SF3B1**, **SRSF2**, and **U2AF1** drive aberrant splicing in CHIP and myeloid malignancy (see [[sf3b1]] and [[somatic-mutation-accumulation]]). This is a parallel, cell-intrinsic mechanism of splicing deterioration in the aging hematopoietic compartment — distinct from the quantitative splicing-factor expression changes seen in non-malignant aging tissues. Age-restricted to >70 in population cohorts for splicing-factor CHIP genes (McKerrell et al. 2015, *Cell Reports*; see [[sf3b1]] for citation).

### 5. R-loop accumulation

R-loops (RNA:DNA hybrids formed during transcription) compete with splicing factor binding to nascent pre-mRNA and can stall Pol II, altering co-transcriptional splicing timing. R-loops accumulate with age as part of the [[genomic-instability]] landscape (failure to clear R-loops contributes to DNA strand breaks). This creates a bidirectional link: genomic instability drives R-loop accumulation → splicing errors → loss of proteostasis.

---

## Hallmark relationships

Splicing dysregulation is not a free-standing hallmark in the López-Otín 2013/2023 framework. It is best understood as a **cross-cutting process** that contributes to and amplifies at least three adopted hallmarks:

| Hallmark | Direction | Mechanism |
|---|---|---|
| **[[genomic-instability]]** | Bidirectional | LMNA mis-splicing → nuclear lamina disruption → heterochromatin loss → DNA repair factor access impaired; R-loop accumulation from transcription errors → DSB formation. Genomic instability also promotes splicing errors via Pol II stalling at DNA damage sites |
| **[[loss-of-proteostasis]]** | Downstream | Aberrant splice isoforms produce misfolded, truncated, or dominant-negative proteins; IR-containing transcripts are often unstable or mistranslated; global shift toward noisy isoform usage expands the aberrant proteome |
| **[[epigenetic-alterations]]** | Bidirectional | H3K36me3/H3K27me3 disruption alters co-transcriptional splice-site recognition; progerin-driven heterochromatin loss is a reciprocal mechanism by which splicing errors feed back onto the epigenome |
| **[[cellular-senescence]]** | Downstream / amplifying | Splicing factor downregulation is a feature of the senescent state; IR accumulation shapes the senescent transcriptome; conversely, senescent cells propagate the splicing-dysregulation signature paracrinally via SASP effects on adjacent cells |

**Formal hallmark status:** Splicing dysregulation does not appear in the López-Otín 12. Several authors have proposed it as a candidate additional hallmark (e.g., Bhadra et al. 2020 designate it a "hallmark of aging"; Baralle & Romano 2023 discuss it as a potential driver). It satisfies the general criteria (accumulates with age, causes phenotypes, intervention reduces it), but has not been formally adopted. This wiki treats it as a **hallmark-adjacent process** — deeply intertwined with established hallmarks but without independent formal status.

---

## Splicing-factor changes in senescence — the Latorre/Harries work

The research group of Lorna Harries (University of Exeter) established several foundational empirical points about splicing factor expression in aging and senescence:

- **Holly et al. 2013** (*Mechanisms of Ageing and Development*): In human PBMC, 38% of splicing factor genes (27/71 tested) showed significant age-associated expression changes in the InCHIANTI cohort (n=695; age 30–104); a second independent replication in SAFHS (n=1,238) found 29% (15/55). Nine genes replicated across both cohorts: SRSF1, SRSF6, LSM5, LSM2, SRSF14, SF3B1, HNRNPAB, HNRNPD, HNRNPH3. ATM knockdown (60% siRNA reduction) upregulated eight splicing regulatory factors, identifying ATM activity as a candidate inhibitor of splicing factor expression during aging [^holly2013].

- **Latorre et al. 2017** (*BMC Cell Biology*): Senescent human primary fibroblasts (three strains: NHDF, MRC5, HF043) show coordinated downregulation of a broad panel of SR proteins (SRSF1–3, SRSF6–7, SRSF18) and hnRNPs (HNRNPA0, HNRNPA1, HNRNPA2B1, HNRNPD, HNRNPH3, HNRNPK, HNRNPM, HNRNPUL2); resveratrol and five novel stilbene-based analogues (compounds 1–6; 5 µM, 24 h) partially restored splicing factor expression and reversed senescence markers (SA-β-Gal reduced from ~75% to ~25%, CD248/CDKN2A suppressed, Ki67 proliferation index increased). This was among the first evidence that pharmacological manipulation of splicing factor levels could alter the senescence phenotype [^latorre2017]. Note: the compounds tested are novel synthetic resveralogues — **not** named clinical agents (quercetin, fisetin) or a compound called "H3BS-10000." #gap/needs-replication — results from a single in vitro model; fibroblast-specific; compound concentrations (5 µM) have not been achieved in human plasma with oral dosing.

- **Latorre et al. 2019** (*FASEB Journal*): FOXO1 and ETV6 transcription factors were identified as novel upstream regulators of splicing factor expression in senescence, with ERK and AKT pathways mediating the link between senescence signaling and spliceosomal gene expression [^latorre2019].

These studies establish that splicing factor decline is a coherent, reproducible, and pharmacologically modifiable feature of cellular senescence — not just a passive observation.

---

## Model-organism evidence

| Organism | Finding | Reference |
|---|---|---|
| *Drosophila melanogaster* | *Rbp1* (SRSF1 orthologue) knockdown extends lifespan in adult flies regardless of when induced; positions spliceosome as a lifespan regulator [^hayman2026] | Hayman & Simons 2026, *GeroScience* |
| *Drosophila* | Intron retention accumulates with age and correlates with cognitive aging phenotypes; treatment restores IR toward young-fly levels [^adusumalli2019] | Adusumalli et al. 2019, *Aging Cell* |
| *Mus musculus* | IR increases in aged mouse brain and correlates with neurodegeneration markers; U2AF1 decline partially explains IR increase [^yao2020] | Yao et al. 2020, *Aging Cell* |
| *Mus musculus* | Klotho-deficient mice show IR as a pre-symptomatic aging marker in liver; IR reversed by herbal treatment alongside metabolic restoration [^okada2021] | Okada et al. 2021, *Gene* |
| *Mus musculus* | In aged mouse liver, transposon expression elevated (p<0.0001) but IR showed only a non-significant trend (p=0.14) and readthrough unchanged (p=0.22) — the human aging IR/readthrough signal does not robustly replicate in murine liver [^pabis2024] | Pabis et al. 2024, *eLife* |
| *Homo sapiens* (cell culture) | Normal aged dermal fibroblasts accumulate progerin; antisense oligonucleotide correction of the LMNA cryptic splice site reverses nuclear abnormalities [^scaffidi2006] | Scaffidi & Misteli 2006, *Science* |
| *Homo sapiens* (cohort) | ~One-third of splicing factors show age-associated expression changes in human blood [^holly2013] | Holly et al. 2013, *Mechanisms Ageing Dev* |

**Extrapolation notes:** Fly and mouse IR findings are consistent with human data, but quantitative magnitudes and affected transcript sets are tissue- and species-specific. The progerin/LMNA story is human-specific (flies and worms lack the lamin A isoform; progerin accumulation has not been detected in rodents under normal aging). The Hayman 2026 Drosophila SRSF1 lifespan result, while compelling as a causal demonstration, awaits mammalian and human validation. #gap/needs-human-replication

---

## Therapeutic angle — splice modulators

Several classes of splicing modulators exist, though none are currently developed for aging indications:

### SF3B1-targeting compounds (H3B-8800, E7107)

These compounds bind the SF3b complex at the SF3B1 HEAT-repeat domain and preferentially kill cells with pre-existing spliceosomal mutations (MDS/CMML/AML context). Phase I data for H3B-8800 in SF3B1-mutant MDS showed marginal efficacy and notable atrial fibrillation. Full context on [[sf3b1]] page. **Aging-context relevance: nil** — designed to exploit spliceosomal dependency in cancer, not to correct age-related splicing errors in wild-type cells.

### SMN2 splicing correctors (risdiplam, branaplam)

Risdiplam (FDA-approved 2020 for spinal muscular atrophy) and branaplam promote inclusion of SMN2 exon 7, restoring functional SMN protein. These are highly splice-site-specific molecules. They demonstrate that pharmacological correction of aberrant splicing in non-malignant disease is clinically feasible, establishing proof-of-concept for the broader class. Neither is being developed for aging.

### Antisense oligonucleotides (ASOs)

Sequence-specific ASOs can block cryptic splice sites (e.g., blocking the LMNA cryptic 5' splice site to suppress progerin production — demonstrated by Scaffidi & Misteli 2005 [^scaffidi2005]). In principle, progerin-blocking ASOs are tractable for progeroid syndromes; their utility in normal aging is less clear given that progerin levels in normally aged cells are orders of magnitude lower than in HGPS. Clinical trials of lonafarnib (a farnesyl transferase inhibitor that partially modifies progerin function) in HGPS children are ongoing and provide indirect evidence for targeting the progerin pathway.

### Resveratrol-related polyphenols

Resveratrol and novel synthetic stilbene analogues (compounds 1–6 from the Latorre 2017 series) partially restore splicing factor expression in senescent fibroblasts in vitro at 5 µM [^latorre2017]. These are novel synthetic resveralogues — not off-the-shelf supplements. The mechanism is not directly spliceosomal — the compounds have broad effects on SIRT1, NF-κB, ERK signaling, and senescence programs; the paper explicitly notes causality cannot be definitively assigned. Whether the splicing-factor rescue is a primary or secondary effect of senescence reversal is not established. #gap/no-mechanism

**Aging-context druggability tier: null.** No clinical drug approved or in clinical trials specifically for an aging-context splicing indication. The existing splice modulators (H3B-8800, risdiplam) are disease-specific and not geroprotective. The in vitro observations with polyphenols and ASOs represent mechanistic proof-of-concept at best. Druggability-tier is assigned null pending a compound entering clinical development for an aging-context splicing target.

---

## Limitations and gaps

- **Causal vs correlative status in most contexts.** The Hayman 2026 *Drosophila* data and the Scaffidi/Misteli 2005-2006 antisense data provide clean causal evidence in specific models, but for the majority of aging-associated splicing changes (IR accumulation, isoform shifts), the causal contribution to aging phenotypes vs secondary reflection is not resolved [^baralle2023]. #gap/no-mechanism
- **Tissue specificity.** Splicing factor expression changes documented in blood PBMCs (Holly 2013) may not represent the most relevant tissues (brain, muscle, heart). Single-cell transcriptomic data on splicing changes in specific aging tissues is still limited. #gap/needs-human-replication
- **Quantitative thresholds.** How much IR accumulation or isoform shift is needed to produce phenotypic consequences? Dose-response relationships between splicing-factor decline and proteostatic burden are not established. #gap/dose-response-unclear
- **LMNA/progerin in normal non-skin aging.** Progerin has been detected mainly in dermal fibroblasts and skin. Its accumulation in other aging tissues (cardiomyocytes, neurons, vascular smooth muscle) at functionally meaningful levels has not been systematically quantified. #gap/needs-human-replication
- **Therapeutic targeting specificity.** Even if splicing errors drive aging-related phenotypes, correcting them pharmacologically requires identifying which isoform shifts to target, since the spliceosome makes ~150,000 splicing decisions per cell cycle across the transcriptome. Blanket spliceosome stimulation could have unpredictable on-target effects. #gap/no-mechanism
- **Formal hallmark status.** Splicing dysregulation is not currently a López-Otín hallmark. Achieving formal adoption requires criteria: accumulation with age (demonstrated); causation of aging phenotypes (demonstrated in model organisms, strong circumstantial evidence in humans); intervention reversing aging phenotypes (early stage). Human interventional evidence is the primary gap.
- **Missing stub pages:** [[srsf1]], [[srsf2]], [[u2af1]], [[lmna]], [[intron-retention]], [[cryptic-splice-site-activation]], [[u2-snrna]] are referenced but have no atomic pages.

---

## See also

- [[sf3b1]] — largest SF3b subunit; canonical CHIP splicing-factor driver; branch-point contacts; H3B-8800 target; MDS-RS defining mutation
- [[somatic-mutation-accumulation]] — broader context for splicing-factor CHIP mutations (SF3B1/SRSF2/U2AF1)
- [[genomic-instability]] — upstream hallmark; R-loop and DSB mechanisms
- [[loss-of-proteostasis]] — downstream hallmark; aberrant isoform burden
- [[epigenetic-alterations]] — bidirectional link via chromatin-splicing coupling and progerin-driven heterochromatin loss
- [[cellular-senescence]] — splicing factor decline as a feature of the senescent state
- [[ubiquitin-proteasome-system]] — parallel proteostatic defense that must compensate for increased aberrant isoform burden
- [[unfolded-protein-response]] — activated by increased aberrant protein load downstream of splicing errors
- [[clonal-hematopoiesis]] — splicing-factor CHIP (SF3B1/SRSF2/U2AF1); age-restricted to >70

---

## Footnotes

[^bhadra2020]: doi:10.1007/s00439-019-02094-6 · PMID:31834493 · Bhadra M, Howell P, Dutta S, Heintz C, Mair WB · *Human Genetics* 2020;139(4):431-453 · review · multi-organism · comprehensive review linking alternative splicing to aging hallmarks; discusses nutrient-sensing pathway splicing changes; proposes splicing dysregulation as a hallmark of aging · green OA (PMC8176884) · fwci 6.29 (citation percentile 100th; cited 203×) · not locally downloaded

[^deschenes2017]: doi:10.1111/acel.12646 · PMID:28703423 · Deschênes M, Chabot B · *Aging Cell* 2017;16(3):431-439 · review · Comprehensive review of alternative splicing in senescence and aging; covers splice variants of p53, IGF-1, SIRT1; mechanisms of splicing factor decline; connections to hallmarks of aging · gold OA · fwci 7.88 (citation percentile 100th; cited 162×) · not locally downloaded

[^angarola2021]: doi:10.1002/wrna.1643 · PMID:33565261 · Angarola BL, Anczukow O · *WIREs RNA* 2021;12(5):e1643 · review · Covers age-associated splicing alterations in healthy and disease aging; spliceosomal gene expression changes; connections to progeroid syndromes; therapeutic opportunities · green OA (PMC8195850) · fwci 5.27 (citation percentile 100th; cited 70×) · not locally downloaded

[^holly2013]: doi:10.1016/j.mad.2013.05.006 · PMID:23747814 · Holly AC, Melzer D, Pilling LC, Fellows AC, Tanaka T, Ferrucci L, Harries LW · *Mechanisms of Ageing and Development* 2013;134(9):356-366 · observational (InCHIANTI cohort n=695 aged 30–104; SAFHS replication n=1,238 aged 15–94; human PBMC) · 27/71 (38%) splicing factors tested showed significant age-associated expression changes in InCHIANTI (FDR q<0.05); 15/55 (29%) replicated in SAFHS; 9 genes replicated in both (SRSF1, SRSF6, LSM5, LSM2, SRSF14, SF3B1, HNRNPAB, HNRNPD, HNRNPH3); ATM expression declined with age (coef −0.01402, q=1.9×10⁻⁵) and 60% siRNA knockdown upregulated 8 splicing regulatory factors · green OA (PMC5863542) · verified against PMC full text · fwci 2.13 (citation percentile 100th; cited 107×)

[^scaffidi2006]: doi:10.1126/science.1127168 · PMID:16645051 · Scaffidi P, Misteli T · *Science* 2006;312(5776):1059-1063 · observational + experimental (normal human dermal fibroblasts from donors aged 3–11 vs 81–96; skin sections) · Demonstrates that the LMNA cryptic splice site activated in HGPS is also sporadically activated in normal aged human cells: progerin RT-PCR ~50-fold lower than in HGPS cells; Tri-Me-K9H3 reduction in 40–90% of cells from older donors (mean 61±23%) vs 20–32% in younger (mean 25±3.8%; P<0.001); phospho-H2AX foci in 43±6% of older nuclei vs 12±3% younger (P<0.001); morpholino ASO (Exo11) targeting the cryptic 5' splice site restored HP1/Tri-Me-K9H3 to young-cell levels (P<0.001) and increased BrdU+ proliferating cells by 30% to match young controls (P<0.05) · green OA (PMC1855250) · verified against PMC full text · fwci 25.22 (citation percentile 100th; cited 1,185×)

[^scaffidi2005]: doi:10.1038/nm1204 · PMID:15750600 · Scaffidi P, Misteli T · *Nature Medicine* 2005;11(4):440-445 · experimental (HGPS fibroblasts) · Establishes the molecular mechanism of progerin-producing cryptic splice event in HGPS; ASO correction restores nuclear morphology and gene expression; proof-of-concept for splice-site-blocking therapeutic approach · not OA; not locally downloaded #gap/no-fulltext-access

[^latorre2017]: doi:10.1186/s12860-017-0147-7 · PMID:29041897 · Latorre E, Birar VC, Sheerin AN, Jeynes JCC, Hooper A, Dawe HR, Melzer D, Cox LS, Faragher RGA, Ostler EL, Harries LW · *BMC Molecular and Cell Biology* 2017;18:31 · in-vitro (primary human fibroblasts: NHDF, MRC5, HF043; replicative senescence) · Resveratrol and 5 novel stilbene analogues (compounds 1–6; 5 µM, 24 h) restore expression of 20 splicing regulatory factors (SRSF1–3, SRSF6–7, SRSF18, HNRNPA0/A1/A2B1/D/H3/K/M/UL2, SF3B1, LSM2, LSM14A, others) in senescent fibroblasts; SA-β-Gal reduced from ~75% to ~25%; Ki67+ fraction increased from ~20% to ~40%; effects independent of SIRT1 activation and SASP; 2-way ANOVA p<0.0005; 3 biological replicates, n>300 cells per SA-β-Gal measurement · gold OA (CC BY 4.0) · verified against full PDF · fwci not recorded

[^latorre2019]: doi:10.1096/fj.201801154R · PMID:30088951 · Latorre E, Avnit-Sagi T, Lovejoy M, Bhatt DL, Walker M, Harries LW · *FASEB Journal* 2019;33(3):3535-3545 · in-vitro (primary human fibroblasts + senescence) · FOXO1 and ETV6 identified as upstream regulators of splicing factor expression during senescence; ERK/AKT pathway mediates link between senescence signaling and spliceosomal gene expression · not locally downloaded

[^adusumalli2019]: doi:10.1111/acel.12928 · PMID:30868713 · Adusumalli S, Ngian ZK, Lin WQ, Benoukraf T, Ong CT · *Aging Cell* 2019;18(2):e12928 · observational (Drosophila, mouse, human brain transcriptomes) · Intron retention accumulates progressively during aging and further increases in Alzheimer's disease; IR signature correlates with mRNA processing and proteostasis pathway changes · gold OA · fwci 5.67 (citation percentile 100th; cited 140×) · not locally downloaded

[^yao2020]: doi:10.1111/acel.13276 · PMID:33274830 · Yao J, Ding D, Li X, Shen T, Fu H, Zhong H, Wei G, Ni T · *Aging Cell* 2020;19(12):e13276 · observational + mechanistic (human cells + mouse) · Widespread IR during cellular senescence driven partly by U2AF1 downregulation; IR inversely correlates with gene expression, contributing to senescent transcriptome; U2AF1 restoration partially rescues · gold OA · fwci 2.54 (citation percentile 100th; cited 41×) · not locally downloaded

[^pabis2024]: doi:10.7554/eLife.87811 · PMID:38567944 · Pabis K, Barardo D, Sirbu O, Selvarajoo K, Gruber J, Kennedy BK · *eLife* 2023;12:RP87811 (VoR published 2024-04-03) · observational + mechanistic · Human skin fibroblasts (n=143 donors aged 0–96, Fleischer dataset) + MDAH041 senescence models (n=3/condition) + 26-month-old mouse liver · IR and readthrough both increase concertedly with human aging (IR: p<0.05; transposon/IR correlation R=0.50, p<0.0001) and senescence; combination model predicts transposon expression better than IR alone (p<0.0001); proposes that splicing/transcription fidelity loss, not heterochromatin loss, explains most age-related apparent transposon de-repression; mouse liver: transposon expression elevated (p<0.0001) but IR trend non-significant (p=0.14) and readthrough unchanged (p=0.22) — human effects do not robustly replicate in mouse liver · gold OA · verified against full PDF · fwci 2.97 (citation percentile 99th; cited 17×)

[^hayman2026]: doi:10.1007/s11357-025-02079-6 · PMID:41514095 · Hayman DJ, Simons MJP · *GeroScience* 2026 · in-vivo (Drosophila melanogaster) · Knockdown of Rbp1 (SRSF1 orthologue) extends fly lifespan regardless of timing; first direct genetic evidence that spliceosome activity level causally regulates lifespan in an animal model · hybrid OA · fwci not yet calculable (very recent; 0 citations at time of seeding) · not locally downloaded · #gap/needs-human-replication

[^baralle2023]: doi:10.3390/cells12242819 · PMID:38132139 · Baralle M, Romano M · *Cells* 2023;12(24):2819 · review · Documents three major categories of age-related splicing change; reviews evidence for driver vs passenger framing; argues that genetic/pharmacological intervention experiments are needed to resolve causality · gold OA · fwci 2.41 (citation percentile 99th; cited 13×) · not locally downloaded

[^okada2021]: doi:10.1016/j.gene.2021.145752 · PMID:34082065 · Okada N, et al. · *Gene* 2021;791:145752 · in-vivo (klotho-deficient mice) · Intron retention accumulates as pre-symptomatic aging marker in liver of klotho mice; herbal treatment partially restored IR to normal levels alongside metabolic improvements · not locally downloaded
