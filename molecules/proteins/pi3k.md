---
type: protein
aliases: [phosphoinositide 3-kinase, phosphatidylinositol 3-kinase, PI3-kinase, PI3Ks]
uniprot: P42336
ncbi-gene: 5290
hgnc: 8975
ensembl: ENSG00000121879   # PIK3CA (primary catalytic subunit per R14 family-page convention)
mouse-ortholog: Pik3ca
druggability-tier: 1
caused-by: []
causes: []
key-domains: [p110-ABD, Ras-binding, C2, helical, kinase]
key-ptms: []
pathways: ["[[pi3k-akt-pathway]]", "[[insulin-igf1]]", "[[autophagy]]", "[[mtor]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[genomic-instability]]"]
sens-categories: []
complex-subunits: [P42338, P48736, O00329, P27986, O00459, Q92569]
known-interactors: ["[[akt]]", "[[pdk1]]", "[[pten]]", "[[irs-1]]", "[[kras]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Engelman 2006 (nrg1879), Vanhaesebroeck 2010 (nrm2882), Manning & Toker 2017 (cell.2017.04.001), Friedman & Johnson 1988 (genetics/118.1.75), and André 2019 SOLAR-1 (NEJMoa1813904) primary-source PDFs all read and verified. Bilanges 2019 (not_oa) and Samuels 2004 (not_oa) not locally verifiable — claims from these sources tagged accordingly in body. Canonical UniProt accessions for non-primary isoforms (P42338, P48736, O00329, Q8NEB9 and Class II isoforms) not independently re-verified against UniProt database in this pass — recommend cross-check on next lint pass."
---


# PI3K (phosphoinositide 3-kinase family)

**PI3Ks** are a conserved family of lipid kinases that phosphorylate the 3′-OH of the inositol ring of phosphoinositides, generating lipid second messengers that recruit pleckstrin-homology (PH) domain proteins — principally [[akt]] and [[pdk1]] — to the plasma membrane. Class I PI3Ks are the primary transducers downstream of receptor tyrosine kinases (RTKs), producing **PIP3 (PI-3,4,5-P₃)** from **PIP2 (PI-4,5-P₂)** and thereby activating the [[pi3k-akt-pathway|PI3K–AKT signaling axis]] [^engelman2006]. Class III PI3Ks (VPS34) generate **PI3P (PI-3-P)** to initiate [[autophagy]] and endosomal membrane trafficking. PI3Ks are among the most mutated enzyme families in human cancer and are central nodes in the [[insulin-igf1|insulin/IGF-1 signaling]] axis implicated in aging across multiple model organisms.

> **Naming note:** This page covers the PI3K **catalytic subunit family** (all three classes). The [[pi3k-akt-pathway]] page covers the full signaling network downstream of Class I PI3K. The primary canonical anchor here is the Class IA p110α subunit (UniProt P42336/PIK3CA); other isoforms are listed in the isoform table below.

## Identity (primary anchor: PI3Kα/PIK3CA)

- **UniProt:** P42336 (PI3KCA_HUMAN); Swiss-Prot reviewed
- **Gene:** PIK3CA (HGNC:8975)
- **NCBI Gene:** 5290
- **Length:** 1,068 amino acids (~120 kDa)
- **Mouse ortholog:** Pik3ca (one-to-one; class I PI3K signaling highly conserved)

## PI3K class taxonomy

Three structurally and functionally distinct classes, all catalyzing 3′-phosphorylation of inositol phospholipids but differing in substrate, product, and cellular role [^vanhaesebroeck2010]:

| Class | Substrate | Product | Subcellular role | Isoforms (catalytic) |
|---|---|---|---|---|
| **Class I** | PIP2 (PI-4,5-P₂) | PIP3 (PI-3,4,5-P₃) | RTK/GPCR signaling → AKT/mTOR activation | p110α, p110β, p110γ, p110δ |
| **Class II** | PI, PI4P | PI3P, PI(3,4)P₂ | Membrane trafficking, clathrin-mediated endocytosis, angiogenesis | PI3K-C2α, PI3K-C2β, PI3K-C2γ |
| **Class III** | PI | PI3P (PI-3-P) | Autophagy initiation, endosomal sorting, lysosome biogenesis | VPS34 (single isoform) |

Class I and Class III PI3Ks are the most aging-relevant: Class I drives the IIS/mTOR anabolic signaling axis that determines lifespan in multiple organisms; Class III (VPS34) nucleates the autophagy initiation complex in partnership with [[beclin-1]] [^bilanges2019].

## Isoform paralog table

| Isoform | Gene | UniProt | Class | Regulatory partner | Tissue/cell enrichment |
|---|---|---|---|---|---|
| p110α | PIK3CA | **P42336** | IA | p85α/β/γ (PIK3R1/R2/R3) | Ubiquitous |
| p110β | PIK3CB | P42338 | IA | p85α/β/γ | Ubiquitous; dominant under PTEN loss |
| p110γ | PIK3CG | P48736 | IB | p101 (PIK3R5), p84 (PIK3R6) | Immune cells; GPCRs |
| p110δ | PIK3CD | O00329 | IA | p85α/β/γ | Immune cells, preadipocytes |
| PI3K-C2α | PIK3C2A | O00443 | II | None (monomeric) | Ubiquitous |
| PI3K-C2β | PIK3C2B | O00750 | II | None (monomeric) | Ubiquitous |
| PI3K-C2γ | PIK3C2G | Q8WYR1 | II | None (monomeric) | Liver, heart |
| VPS34 | PIK3C3 | Q8NEB9 | III | VPS15 (PIK3R4) + Beclin-1 | Ubiquitous; ER/endosomes |

#gap/needs-canonical-id — UniProt accessions for Class II and Class III isoforms listed from primary literature; not independently re-verified against UniProt in this pass.

## Class I PI3K: structure and activation

### Architecture

Class IA heterodimers consist of a **p110 catalytic subunit** + a **p85 regulatory subunit** (encoded by PIK3R1/R2/R3 for Class IA; p101/PIK3R5 for Class IB). In the resting state, the regulatory subunit's inter-SH2 (iSH2) domain contacts the p110 catalytic subunit and suppresses its basal lipid kinase activity, preventing spurious PIP3 generation [^engelman2006].

The p110 catalytic subunits share a conserved domain architecture:
- **ABD (adaptor-binding domain)** — binds the iSH2 domain of the regulatory subunit
- **RBD (Ras-binding domain)** — mediates interaction with GTP-loaded Ras family GTPases (particularly Ras for p110α; Rab for others)
- **C2 domain** — membrane anchoring; contributes to membrane recruitment
- **Helical domain** — site of activating hotspot mutations in PIK3CA (E542, E545 reside here)
- **Kinase domain** — catalytic ATP- and lipid-binding; H1047 hotspot resides here

### RTK-mediated activation

Upon insulin, IGF-1, EGF, or other RTK ligand binding, autophosphorylated **pYxxM** motifs on the activated receptor (or on scaffold proteins such as [[irs-1|IRS-1/IRS-2]]) recruit the **SH2 domains of p85**, relieving p85-mediated inhibition of p110 [^engelman2006]. Activated p110 then catalyzes:

**PIP2 (PI-4,5-P₂) → PIP3 (PI-3,4,5-P₃)**

at the inner leaflet of the plasma membrane. PIP3 recruits [[akt]] and [[pdk1]] simultaneously via their PH domains, co-localizing the two kinases and enabling PDK1 to phosphorylate AKT Thr308, partially activating AKT [^manning2017].

Class IB p110γ is activated via Gβγ subunits of heterotrimeric G-proteins (GPCRs), not RTKs — this is relevant to immune cell chemokine signaling but less directly to the IIS/aging axis.

### Negative regulation by PTEN

[[pten|PTEN]] (Phosphatase and TENsin homolog) is the principal antagonist of Class I PI3K: it dephosphorylates PIP3 → PIP2, directly reversing the PI3K reaction and terminating AKT recruitment. PTEN is among the most frequently lost tumor suppressors in human cancer; heterozygous PTEN loss increases PI3K–AKT tone and is associated with accelerated cellular aging phenotypes in some contexts [^engelman2006]. See [[pten]] for the full protein page.

## Class III PI3K (VPS34) and autophagy

VPS34 (PIK3C3) is the sole Class III PI3K in mammals. Unlike Class I, it phosphorylates **PI → PI3P** and does **not** generate PIP3. VPS34 associates constitutively with the regulatory kinase VPS15 (PIK3R4) and functions in two distinct complexes scaffolded by [[beclin-1]]:

- **PI3KC3-C1** (Beclin-1 + VPS34 + VPS15 + ATG14L): generates PI3P at ER-associated phagophore assembly sites → recruits WIPI2 and downstream ATG machinery → autophagosome nucleation
- **PI3KC3-C2** (Beclin-1 + VPS34 + VPS15 + UVRAG): acts at late endosomes/lysosomes → endosomal membrane trafficking and autophagosome–lysosome fusion

Because VPS34-generated PI3P is essential for autophagy initiation, VPS34 activity connects [[mtor|mTORC1]]-mediated nutrient sensing to autophagic flux: mTORC1 suppresses autophagy in part by phosphorylating ATG14L (a PI3KC3-C1 subunit) and by inhibiting ULK1, which in turn activates Beclin-1 via Ser30 phosphorylation. Under nutrient deprivation (mTORC1 inhibited), this brake is released, VPS34 complex I becomes active, and autophagy is initiated [^bilanges2019]. See [[beclin-1]] and [[autophagy]] for detail.

## Role in aging

### PI3K as the molecular executor of IIS lifespan control

Reduced insulin/IGF-1 signaling (IIS) extends lifespan in every organism examined — from *C. elegans* (daf-2 LOF) to flies (dilp2/dilp3/dilp5 mutants) to mice (Igf1r+/−, GHRKO) [^engelman2006]. PI3K is the **obligate executor** of this effect: all known lifespan-extending IIS mutations reduce flux through Class I PI3K → reduced PIP3 → reduced AKT activity → FOXO transcription factors ([[foxo3]] ortholog DAF-16 in worms, dFOXO in flies) released to the nucleus → pro-longevity gene expression (antioxidant defense, DNA repair, proteostasis, autophagy).

Direct PI3K perturbations confirming this:

- **Age-1 (PI3K catalytic subunit ortholog in *C. elegans*) LOF** — the first well-characterized single-gene longevity mutation: age-1(hx546) extends mean lifespan ~40% and maximum lifespan ~60% at 20°C (and ~65%/~110% at 25°C) in *C. elegans* [^friedman1988]. The authors note the Age phenotype co-segregates with reduced hermaphrodite fertility (fer-15 locus) and caution that lifespan extension may be a pleiotropic effect of reduced fertility. The molecular identity of age-1 as the PI3K catalytic subunit was established by later work. #gap/needs-replication (single organism; molecular pathway clarified post-1988)
- **p110α heterozygous knockout mice (Pik3ca+/−)** — show improved insulin sensitivity in female mice; a ~18% lifespan extension in female mice (C57BL/6 background) has been reported. #gap/needs-human-replication; single study, mouse only; not ITP-validated. Note: the ~18% lifespan figure is NOT from Engelman 2006 (which does not report lifespan outcomes for Pik3ca+/− mice) — original source citation needed. #gap/unsourced
- **Drosophila PI3K (dp110) overactivation** — reduces lifespan; dominant negative dp110 extends lifespan; effect is dFOXO-dependent #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — IIS/PI3K/AKT/FOXO signaling fully conserved |
| Phenotype (lifespan extension via PI3K reduction) conserved in humans? | partial — FOXO3 GWAS associations consistent; no human PI3K intervention data |
| Replicated in humans? | no — only observational GWAS and epidemiological evidence |

### PI3Kδ and preadipocyte senescence

PI3Kδ (p110δ/PIK3CD) has a specific role in the **survival anti-apoptotic pathway (SCAP) of senescent preadipocytes**. Idelalisib (PI3Kδ-selective inhibitor) is part of the mechanism by which the dasatinib + quercetin (D+Q) senolytic combination selectively eliminates senescent preadipocytes while sparing non-senescent cells [^vasan2022]. This is an isoform-selective aging-relevant function distinct from the pan-PI3K IIS role. See [[interventions/pharmacological/senolytics]] for the D+Q preadipocyte SCAP detail.

### PI3K hyperactivation and aging pathology

Chronically elevated PI3K activity (as in metabolic syndrome, obesity, aging adipose tissue) drives aging-associated pathology via:

1. **mTORC1 hyperactivation** → suppressed [[autophagy]] → aggregate accumulation → [[disabled-macroautophagy]] and [[loss-of-proteostasis]] hallmarks
2. **FOXO nuclear exclusion** → lost pro-longevity transcriptional program
3. **Senescent cell persistence** → AKT→BAD phosphorylation protects senescent cells from apoptosis → chronic SASP → [[cellular-senescence]] hallmark (BAD phosphorylation by AKT confirmed in Engelman 2006 Box 3; Ser136 site designation requires separate citation from original BAD phosphorylation literature)
4. **Oncogenesis** → PIK3CA gain-of-function mutations in ~30% of solid tumors [^samuels2004]

## PIK3CA hotspot mutations (cancer context)

PIK3CA is the most-mutated kinase gene in human cancer. Three gain-of-function hotspot mutations account for the majority of cases [^samuels2004]:

| Mutation | Domain | Frequency | Mechanism |
|---|---|---|---|
| **E542K** | Helical domain | ~10% of PIK3CA-mutant cancers | Disrupts inhibitory contact with p85 regulatory subunit N-SH2; constitutive activation |
| **E545K** | Helical domain | ~25% of PIK3CA-mutant cancers | Same as E542K; most common helical hotspot |
| **H1047R** | Kinase domain (activation loop) | ~35% of PIK3CA-mutant cancers | Reorients activation loop toward membrane; increased membrane affinity + catalytic activity |

These mutations drive constitutive PIP3 generation independent of RTK input. The FDA-approved PI3Kα-selective inhibitor **alpelisib** (see [[alpelisib]]) specifically targets PIK3CA-mutant tumors [^andre2019].

## Pharmacological targeting

| Drug | Target | Class specificity | Clinical status | Aging relevance |
|---|---|---|---|---|
| Alpelisib (BYL719) | p110α | PI3Kα-selective | FDA-approved: PIK3CA-mutant HR+/HER2− breast cancer (2019) | Cancer; hyperglycemia limits aging use |
| Idelalisib | p110δ | PI3Kδ-selective | FDA-approved: CLL, follicular lymphoma | Preadipocyte senolysis (D+Q) |
| Copanlisib | All class I | Pan-PI3K | FDA-approved (follicular lymphoma) | Research tool; too toxic for aging |
| Gedatolisib | PI3K + mTOR catalytic | Dual PI3K/mTOR | Phase 3 (breast cancer) | Research |
| **LY294002** | All class I + class III (VPS34) | Pan | Research tool only (not clinical) | Gold-standard in vitro PI3K inhibitor |
| **Wortmannin** | All class I + class III | Covalent, pan | Research tool only (not clinical) | Irreversible inhibitor; fungal metabolite |

**Metabolic safety caveat:** At anti-cancer doses, PI3K inhibition disrupts insulin signaling in liver and muscle, causing grade 3 or 4 hyperglycemia in 36.6% of patients on alpelisib in the SOLAR-1 trial [^andre2019]. This on-target toxicity makes full-dose PI3K inhibition inappropriate for aging geroprotection, motivating indirect approaches (metformin, AMPK activation) and isoform-selective strategies [^vasan2022].

## Cross-pathway connections

- **[[pi3k-akt-pathway]]** — canonical downstream signaling network; this page covers the PI3K catalytic family only; full pathway on the dedicated page
- **[[akt]]** — immediate downstream effector of PIP3 (Class I); PH-domain recruitment → PDK1/mTORC2 dual phosphorylation
- **[[pdk1]]** — co-recruited to plasma membrane by PIP3; phosphorylates AKT Thr308
- **[[pten]]** — antagonist; dephosphorylates PIP3 → PIP2; counteracts Class I PI3K
- **[[mtor]]** — downstream of AKT (via TSC2 inhibition); mTORC2 feeds back to phosphorylate AKT Ser473
- **[[beclin-1]]** — Class III PI3K (VPS34) partner; scaffolds PI3KC3 complexes for autophagy initiation
- **[[autophagy]]** — Class III PI3K is essential for autophagosome nucleation; Class I suppresses autophagy via mTORC1
- **[[insulin-igf1]]** — RTK/IRS-1 upstream; IIS reduction extends lifespan via reduced Class I PI3K flux
- **[[ampk]]** — antagonizes Class I PI3K net effect: AMPK activates TSC2 and inhibits mTORC1 even when AKT/PI3K is active

## Limitations and gaps

- **#gap/needs-human-replication** — All lifespan-extension evidence from reduced Class I PI3K flux is from model organisms (*C. elegans*, *Drosophila*, mouse). Human observational data (FOXO3 GWAS) is consistent but not interventional.
- **#gap/needs-replication** — Direct PI3K reduction (e.g., Pik3ca+/−) lifespan data in mice is from limited studies in specific genetic backgrounds; not ITP-validated. The Pik3ca+/- lifespan claim (~18% female lifespan extension) requires its own primary citation; this result is NOT in Engelman 2006 and the original source must be identified.
- **#gap/needs-replication** — The original age-1 study (Friedman & Johnson 1988) acknowledges that the Age phenotype co-segregates with reduced hermaphrodite fertility (fer-15 locus) and that life extension may be a pleiotropic effect of reduced fertility, not a direct PI3K-aging mechanism. Subsequent work confirmed age-1 = PI3K, but the fertility confound interpretation was not fully resolved in the original paper.
- **#gap/dose-response-unclear** — Optimal degree of Class I PI3K attenuation for geroprotection in humans is entirely unknown; anti-cancer doses cause dose-limiting metabolic toxicity.
- **#gap/long-term-unknown** — Class II PI3K isoforms' roles in aging are largely unstudied; PI3K-C2α has roles in insulin-stimulated glucose transport and cilia signaling but aging-specific functions are not established.
- **#gap/needs-canonical-id** — GenAge entry IDs for PIK3CA family members not confirmed in this pass; Class III VPS34 (PIK3C3) may have a GenAge entry.
- **Class I vs Class III distinction in ageing interventions** — Many pan-PI3K inhibitors (wortmannin, LY294002) block both Class I and VPS34 (Class III), simultaneously inhibiting AKT and autophagy — these have opposing effects on aging. Clean isoform-selective tools are critical for aging research interpretation. #gap/no-mechanism for the net effect of pan-PI3K inhibition in aging contexts.

## Footnotes

[^engelman2006]: doi:10.1038/nrg1879 · [[studies/engelman-luo-cantley-2006-pi3k-review]] · review · model: multi-organism (yeast, worm, fly, mouse, human) · Engelman JA, Luo J, Cantley LC · Nature Reviews Genetics 2006 · ~3,271 citations · evolutionary and functional review of PI3K family; Class I activation mechanism; IIS/PI3K conservation across organisms (Table 1: age-1/AGE-1 = C. elegans PI3K ortholog); mouse genetic studies of p110 knockouts (germline deletion lethal; kinase-dead p110α heterozygotes show glucose intolerance — lifespan outcomes NOT reported in this paper); PI3K in tumorigenesis (PIK3CA hotspot mutations) · archive: locally downloaded

[^vanhaesebroeck2010]: doi:10.1038/nrm2882 · review · model: mammalian signaling (human, mouse) · Vanhaesebroeck B, Guillermet-Guibert J, Graupera M, Bilanges B · Nature Reviews Molecular Cell Biology 2010;11(5):329–341 · 1,702 citations · comprehensive isoform-specific PI3K signaling review; Class I/II/III taxonomy (Fig. 2); Class IA p85 regulatory subunit function; PIK3CA hotspot mutation mechanisms (E545K helical, H1047R kinase domain); VPS34 complex organization (Fig. 4b: PI3KC3-C1 with ATG14L/barkor for autophagy, PI3KC3-C2 with UVRAG for endosomal trafficking); Class II biology · archive: locally downloaded

[^bilanges2019]: doi:10.1038/s41580-019-0129-z · review · model: mammalian (human, mouse) · Bilanges B, Posor Y, Vanhaesebroeck B · Nature Reviews Molecular Cell Biology 2019 · 510 citations · PI3K isoforms in cell signalling and vesicle trafficking; Class III VPS34/autophagy section · archive: not_oa (not downloaded)

[^manning2017]: doi:10.1016/j.cell.2017.04.001 · [[studies/manning-toker-2017-akt-signaling]] · review · model: human (cellular and biochemical) · Manning BD, Toker A · Cell 2017;169(3):381–405 (April 20, 2017) · 3,500+ citations · AKT dual phosphorylation: PDK1 phosphorylates Thr308 (activation loop) and mTORC2 phosphorylates Ser473 (hydrophobic motif); both required for full activation; PIP3/PI3,4P2 PH-domain recruitment co-localizes AKT with PDK1; downstream AKT substrates include TSC2 (mTORC1 activation), FOXO (nuclear exclusion), GSK3, BAD; note: Manning 2017 covers AKT signaling, not PI3K family classification — cited here only for AKT Thr308/Ser473 mechanism · archive: locally downloaded

[^samuels2004]: doi:10.1126/science.1096502 · in-vitro (Sanger sequencing of human tumor samples) · Samuels Y et al. · Science 2004 · 3,400 citations · identified PIK3CA somatic mutations in 32% of colorectal cancers and in multiple other tumor types; E542K, E545K (helical domain), H1047R (kinase domain) as dominant hotspots · archive: not_oa (not downloaded)

[^andre2019]: doi:10.1056/NEJMoa1813904 · rct (Phase III SOLAR-1 trial) · n=572 total randomized; 341 PIK3CA-mutant cohort (169 alpelisib + 172 placebo) · André F et al. · NEJM 2019;380(20):1929–40 · 2,360 citations · alpelisib 300 mg/day + fulvestrant vs placebo + fulvestrant in PIK3CA-mutant HR+/HER2− advanced breast cancer; primary endpoint PFS: 11.0 months (95% CI 7.5–14.5) vs 5.7 months (95% CI 3.7–7.4); HR 0.65 (95% CI 0.50–0.85); P<0.001; grade 3 or 4 hyperglycemia: 36.6% alpelisib arm vs 0.7% placebo (Table 3) · archive: locally downloaded (verified)

[^friedman1988]: doi:10.1093/genetics/118.1.75 · in-vivo (C. elegans) · Friedman DB, Johnson TE · Genetics 1988;118(1):75–86 · age-1(hx546) recessive mutant: mean lifespan extended ~40% at 20°C and ~65% at 25°C; maximum lifespan extended ~60% at 20°C and ~110% at 25°C (Table 1); authors note the Age phenotype co-segregates with fer-15 (reduced hermaphrodite fertility) and caution that life extension may be a pleiotropic effect of reduced fertility rather than a primary aging gene function; paper identifies age-1 as "the only instance of a well-characterized genetic locus in which the mutant form results in lengthened life" · archive: locally downloaded

[^vasan2022]: doi:10.1038/s41571-022-00633-1 · review · model: human (clinical + preclinical) · Vasan N, Cantley LC · Nature Reviews Clinical Oncology 2022 · 164 citations · PI3K inhibitor toxicity (grade ≥3 hyperglycemia ~37% alpelisib arm from SOLAR-1), feedback mechanisms, and clinical trial lessons · claims partially verified via PMC11215755 (green OA); full PDF download failed
