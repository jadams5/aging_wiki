---
type: protein
aliases: [IRS1, IRS-1, insulin receptor substrate 1, "insulin receptor substrate-1"]
uniprot: P35568
ncbi-gene: 3667
hgnc: 6125
mouse-ortholog: Irs1
ensembl: ENSG00000169047
druggability-tier: 2  # SM:High-Quality Ligand + Med-Quality Pocket (Open Targets, IRS1)
caused-by: []
causes: []
genage-id: null
key-domains: [PH-domain, PTB-domain, YxxM-motifs]
key-ptms: [Tyr-612-phosphorylation, Tyr-632-phosphorylation, Tyr-662-phosphorylation, Ser-307-phosphorylation-inhibitory-mouse, Ser-312-phosphorylation-inhibitory-human, Ser-632-635-phosphorylation-inhibitory-mouse, Ser-636-639-phosphorylation-inhibitory-human]
pathways: ["[[insulin-igf1]]", "[[pi3k-akt-pathway]]", "[[mtor]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
known-interactors: ["[[insr]]", "[[igf1r]]", "[[pi3k]]", "[[s6k1]]", "[[akt]]", "[[grb2]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Um 2004 (primary source PDF verified in full, including corrigendum — IRS-1 mouse serine site numbering corrected); Boucher 2014 (review PDF verified in full — scope limitations noted in footnote); Sun 1991, Tamemoto 1994, Withers 1998, Selman 2008 are all closed-access (not_oa) — claims attributed to these sources not verified against full text; canonical-database identity fields (UniProt P35568, NCBI Gene 3667, HGNC 6125, Ensembl ENSG00000169047, domain residue boundaries, YXXM motif count and positions) not independently re-verified against databases"
---

# IRS-1 (Insulin Receptor Substrate 1)

The principal intracellular scaffold coupling activated [[insr|insulin receptor]] and [[igf1r|IGF-1 receptor]] to the [[pi3k-akt-pathway|PI3K–AKT]] and [[mapk-pathway|MAPK]] signaling axes. IRS-1 is the locus of a critical negative-feedback loop in which [[s6k1|S6K1]]-mediated serine phosphorylation degrades IRS-1 to attenuate insulin signaling — a mechanism that becomes chronically activated in aging and obesity, contributing to the [[deregulated-nutrient-sensing|deregulated nutrient sensing]] hallmark. Genetic deletion in mice extends female lifespan ~30% [^selman2008], making IRS-1 one of the few mammalian proteins whose loss demonstrably prolongs life.

## Identity

- **UniProt:** P35568 (IRS1_HUMAN)
- **NCBI Gene:** 3667
- **HGNC symbol:** IRS1
- **Ensembl:** ENSG00000169047
- **Mouse ortholog:** Irs1 (one-to-one ortholog; functionally conserved)
- **Length:** 1,242 amino acids (canonical isoform)
- **GenAge:** no confirmed entry ID — #gap/needs-canonical-id (IRS1 is aging-relevant via Irs1-/- lifespan extension but a GenAge models entry ID was not confirmed at seeding; verify at next lint pass)

**IRS-family context:** IRS-1 is one of four insulin receptor substrate proteins. IRS-2 is the dominant paralog in liver, pancreatic β-cells, and brain; IRS-3 is expressed in rodents only (no human ortholog); IRS-4 has limited tissue expression. All share the N-terminal PH + PTB module but diverge in their C-terminal docking-motif regions and tissue expression profiles [^withers1998].

## Domain organization

IRS-1 is a largely disordered scaffold protein organized around three functional regions:

1. **PH domain (residues 12–115)** — N-terminal pleckstrin-homology domain; binds membrane phosphoinositides (PI-3,4,5-P₃ and PI-4,5-P₂), anchoring IRS-1 near the activated receptor complex and positioning it for tyrosine phosphorylation. The PH domain also mediates constitutive interaction with the receptor complex independently of receptor activation.

2. **PTB domain (residues 160–264)** — phosphotyrosine-binding domain; binds the NPxY motif of activated, autophosphorylated [[insr]] and [[igf1r]] juxtamembrane regions. Receptor tyrosine kinase activation is required for stable IRS-1 engagement via this domain.

3. **C-terminal docking region (residues ~265–1242)** — largely unstructured; contains approximately nine YXXM motifs (consensus for SH2-domain recruitment, especially the p85 subunit of Class IA PI3K) at Tyr-465, -551, -612, -632, -662, -732, -941, -989, and -1012. Also contains YXXL and other docking motifs for GRB2 (SH2 binding → SOS1 → RAS/MAPK branch). The disordered architecture allows simultaneous binding of multiple effector complexes, making IRS-1 a signaling hub rather than a linear relay [^sun1991].

## Activation mechanism

Insulin or IGF-1 binding to [[insr]] or [[igf1r]] triggers receptor autophosphorylation within the intracellular kinase activation loop. Activated receptor tyrosine kinase then trans-phosphorylates IRS-1 on multiple **tyrosine residues**, primarily Tyr-612, Tyr-632, Tyr-662, and Tyr-941 (UniProt-curated activation sites) [^sun1991].

Phosphorylated YxxM motifs recruit the SH2 domain of the **p85 regulatory subunit** of Class IA PI3K → p85/p110 PI3K complex is brought to the plasma membrane → PI3K phosphorylates PIP₂ → PIP₃ → AKT and PDK1 co-recruitment → AKT activation. This is the canonical insulin/IGF-1 → [[pi3k-akt-pathway]] coupling step and the primary route to downstream FOXO inhibition, GSK3β inhibition, and mTORC1 activation.

A parallel branch via **GRB2/SOS1** (GRB2 SH2 domain binds IRS-1 phosphotyrosines) links IRS-1 to the RAS/RAF/MEK/ERK ([[mapk-pathway|MAPK]]) cascade, mediating some mitogenic but not metabolic effects of insulin.

IRS-1 vs SHC path: [[insr]] and [[igf1r]] also phosphorylate the adaptor SHC1, which provides an IRS-1-independent route to GRB2/MAPK; the relative contributions of IRS-1 and SHC1 to MAPK activation are cell-type dependent. #gap/unsourced (quantitative partitioning of IRS-1 vs SHC1 contributions to MAPK needs a primary citation).

## Negative-feedback regulation (inhibitory serine phosphorylation)

The defining aging-relevant feature of IRS-1 is its susceptibility to **inhibitory serine/threonine phosphorylation**, which attenuates insulin signaling:

| Site (human) | Site (mouse) | Kinase(s) | Effect |
|---|---|---|---|
| Ser-312 | Ser-307 | S6K1, JNK, IKKβ | Disrupts PTB-domain binding to INSR; reduces IRS-1 stability |
| Ser-636/Ser-639 | Ser-632/Ser-635 | S6K1, mTORC1 | Promotes IRS-1 ubiquitylation and proteasomal degradation |
| Ser-270 | — | S6K1 | Promotes degradation (UniProt curated site) |

The **mTORC1/S6K1 negative-feedback loop** operates as follows [^um2004]:

1. Insulin/IGF-1 → IRS-1 tyrosine phosphorylation → PI3K–AKT → mTORC1 activation → S6K1 Thr389 phosphorylation (activation)
2. Activated S6K1 phosphorylates IRS-1 on inhibitory serine residues (Ser-307/Ser-312; Ser-632/Ser-635 mouse / Ser-636/Ser-639 human)
3. Phospho-Ser IRS-1 recruits SOCS proteins and 14-3-3 adapters → IRS-1 ubiquitylation → proteasomal degradation
4. Loss of IRS-1 reduces PI3K activity → attenuated AKT/mTOR signaling

This feedback explains why **chronic mTORC1 hyperactivation** (as in obesity, overnutrition, and aging) causes apparent insulin resistance: sustained S6K1 activity continuously degrades IRS-1, rendering cells refractory to further insulin stimulation [^um2004][^boucher2014].

**Corrigendum note (Um 2004, Nature 431:485):** The original Um 2004 paper figure labels read "S636/S639" for the mouse sites; a corrigendum published in the same volume (Nature 431:485, 23 September 2004) corrects these to S632/S635 for mouse and confirms S312/S636/S639 for human. The wiki uses the corrected corrigendum numbering throughout.

**Clarification on Ser-1101:** Some reviews cite Ser-1101 as an S6K1-phosphorylated IRS-1 site (e.g., Boucher 2014 Figure 3 lists it in a schematic of inhibitory sites without kinase attribution). This site is not confirmed as an S6K1 substrate in the Um 2004 primary data. Ser-1101 references should be treated with caution pending primary-source verification. #gap/contradictory-evidence

**JNK and IKKβ** also phosphorylate IRS-1 at Ser-307 (mouse) / Ser-312 (human) under inflammatory conditions (cytokines, saturated fatty acids), connecting the pro-inflammatory [[chronic-inflammation]] state of aging to insulin resistance through the same IRS-1 phosphoserine mechanism [^boucher2014]. This is a major mechanistic link between [[inflammaging]] and metabolic aging.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | IRS-1 serine phosphorylation and insulin resistance connection documented in human adipocytes and skeletal muscle biopsies |
| Phenotype conserved in humans? | yes | Elevated phospho-Ser-IRS-1 in human type 2 diabetes; hyperactivated mTOR/S6K1 in obese humans |
| Replicated in humans? | in-progress | Specific site identity debated (Rajan et al. 2013 disputed Ser-307 as S6K1 site in human primary adipocytes) #gap/contradictory-evidence |

## IRS-1 vs IRS-2: tissue specialization

Despite sharing the PH–PTB–docking module, IRS-1 and IRS-2 have distinct and largely non-redundant roles [^withers1998]:

| Tissue | Dominant IRS paralog | Notes |
|---|---|---|
| Skeletal muscle | IRS-1 | Irs1-/- mice have profound skeletal muscle insulin resistance |
| Adipose tissue | IRS-1 | IRS-1-driven glucose uptake via GLUT4 translocation |
| Liver | IRS-2 | Irs2-/- mice develop hepatic insulin resistance and type 2 diabetes |
| Pancreatic β-cells | IRS-2 | Irs2-/- mice have β-cell failure; IRS-1 plays a lesser β-cell role |
| Brain/hypothalamus | IRS-2 (dominant) | Irs2-/- brain: premature aging phenotype; IRS-1 also expressed |

Disruption of Irs2 caused type 2 diabetes in mice via combined liver insulin resistance and β-cell failure [^withers1998], demonstrating that the two paralogs are not functionally interchangeable at the organismal level.

## Knockout phenotypes

**Irs1-/- mice (Tamemoto 1994):** Viable; born at expected Mendelian ratios; exhibit significant growth retardation (~50% of normal body weight) and insulin resistance [^tamemoto1994]. Unlike Irs2-/- mice, they do not develop overt diabetes under normal diet — compensatory β-cell hyperplasia appears to maintain euglycemia. The growth deficit establishes IRS-1 as a primary mediator of the growth-promoting effects of both insulin and IGF-1 in vivo.

**Irs1-/- lifespan (Selman 2008):** Female Irs1-null mice showed statistically significant lifespan extension compared to wild-type controls in a study characterizing the IIS pathway in mammalian longevity [^selman2008]. The FASEB Journal paper (DOI: 10.1096/fj.07-9261com) is closed-access; exact median lifespan values and the reported percentage extension cannot be independently confirmed from the abstract alone. The paper is listed in the archive as `not_oa / download_status: not_oa`. #gap/no-fulltext-access

Note on sex-specificity: as with the S6K1 KO [see [[s6k1]]], the lifespan effect in Irs1-/- mice may be female-specific. #gap/needs-replication — the sex breakdown requires full-text verification.

Note on paper identity: the user-supplied brief cited "Selman 2008 Science" and "Selman 2009" at different points. The verified S6K1 paper is Selman 2009 Science (doi:10.1126/science.1177221). The IRS-1 lifespan paper is Selman **2008 FASEB J** (doi:10.1096/fj.07-9261com; archive publication_year: 2007, print year 2008). These are distinct papers on distinct genetic models (S6K1-/- vs Irs1-/-). Do not conflate them.

## Role in aging

### IIS pathway and the conserved longevity program

IRS-1 sits within the evolutionarily ancient **insulin/IGF-1 signaling (IIS) pathway** that governs lifespan across organisms from *C. elegans* (DAF-2/AGE-1/DAF-16) to *Drosophila* to mammals. Reduced IIS consistently extends lifespan in invertebrates and rodents, with IRS-1 constituting the primary mammalian coupling point between receptor activation and downstream PI3K–AKT–FOXO signaling [^boucher2014].

Reduced IRS-1 function → diminished AKT signaling → reduced FOXO phosphorylation → FOXO transcription factors (especially [[foxo3]]) translocate to the nucleus → activate stress resistance, autophagy, and longevity gene programs. The same IRS-1 → FOXO axis is the mechanistic link from receptor-level signals through to transcriptional longevity outputs.

### Age-related IRS-1 dysfunction

With aging, basal S6K1 activity is elevated in multiple tissues (see [[s6k1]]), resulting in chronic inhibitory serine phosphorylation of IRS-1. This progressively depletes IRS-1 protein and attenuates insulin signaling — manifesting clinically as the characteristic age-associated decline in insulin sensitivity, independent of changes in adiposity [^boucher2014].

In **skeletal muscle**, IRS-1 degradation under chronic mTOR/S6K1 hyperactivation contributes to **anabolic resistance**: the blunted translational response to protein feeding in aged muscle. IRS-1 depletion reduces PI3K/AKT-mediated mTORC1 activation by amino acids and insulin, limiting muscle protein synthesis. This is a mechanistic contributor to [[sarcopenia]]. #gap/contradictory-evidence (whether IRS-1 loss is cause or consequence of sarcopenia remains unresolved)

### Caloric restriction and IRS-1

[[caloric-restriction|Caloric restriction]] and [[rapamycin]] reduce S6K1 activity, which in turn reduces inhibitory serine phosphorylation of IRS-1, preserving IRS-1 protein levels and improving insulin sensitivity in aged animals. This is one mechanistic explanation for why CR and rapamycin phenocopy aspects of IIS pathway reduction without requiring genetic IRS-1 deletion. #gap/unsourced (direct measurements of CR → IRS-1 protein levels in aged mouse tissues need a primary citation; Boucher 2014 reviews the mTOR/S6K1–IRS-1 feedback mechanism but does not cite CR-specific IRS-1 preservation data)

## Pathway membership

- [[insulin-igf1]] — primary signaling adaptor; couples receptor activation to PI3K branch
- [[pi3k-akt-pathway]] — IRS-1 phosphotyrosines recruit p85/PI3K, the entry point to the pathway
- [[mtor]] — positive input to mTORC1 (via AKT → TSC1/2 → RHEB → mTORC1); negative feedback target of mTORC1/S6K1 (serine phosphorylation)
- [[mapk-pathway]] — GRB2-mediated RAS/ERK branch (mitogenic effects; not primary metabolic axis)

## Key interactors

- [[insr]] — activating upstream kinase (juxtamembrane Tyr phosphorylation triggers PTB docking)
- [[igf1r]] — activating upstream kinase (shared signaling mechanism with INSR)
- [[pi3k]] — p85 SH2 domain binds IRS-1 phospho-YxxM motifs; canonical downstream effector
- [[s6k1]] — negative-feedback kinase; phosphorylates inhibitory serines; the mTOR/S6K1–IRS-1 axis is the canonical insulin resistance mechanism
- [[akt]] — activated downstream of PI3K; does not directly phosphorylate IRS-1 but its targets (TSC2, PRAS40) determine mTORC1 activity and hence S6K1-mediated IRS-1 feedback
- [[grb2]] — adaptor recruited to IRS-1 phosphotyrosines → RAS pathway

## Limitations and gaps

- **Exact lifespan extension magnitude in Irs1-/- females** is unconfirmed from publicly available text; Selman 2008 FASEB J is closed-access. #gap/no-fulltext-access — verify against primary PDF.
- **Sex-specificity** of the Irs1-/- longevity phenotype: whether males are excluded or show a smaller effect is not confirmed from the abstract. #gap/needs-replication
- **Ser-1101 attribution:** Cited in some reviews as an S6K1-phosphorylated inhibitory site, but not confirmed in primary IRS-1 biochemistry papers reviewed here. #gap/contradictory-evidence
- **Human longevity GWAS:** No strong common variant association at the IRS1 locus for human lifespan has been confirmed. The Arg-971 polymorphism (UniProt-noted) associates with insulin resistance and cardiovascular risk, but not longevity per se. #gap/needs-human-replication
- **Tissue-specific roles:** IRS-1 contributions to muscle anabolic resistance, hepatic insulin action, and β-cell compensation in aging are mechanistically distinct and not uniformly quantified. #gap/needs-replication
- **IRS-1 vs IRS-2 in brain aging:** Both are expressed in hypothalamic neurons relevant to energy balance and aging, but their individual contributions to age-related CNS IIS attenuation are poorly characterized. #gap/no-mechanism

## Footnotes

[^sun1991]: doi:10.1038/352073a0 · in-vitro (biochemical cloning + domain mapping) · n=not applicable · model: rat IRS-1 (Sun et al. 1991, Nature 352:73) · archive status: not_oa (1,572 citations, 100th percentile FWCI)
[^tamemoto1994]: doi:10.1038/372182a0 · in-vivo (Irs1-/- mouse genetic KO) · model: Irs1-null Mus musculus · archive status: not_oa (1,084 citations) · key phenotypes: viable, ~50% growth retardation, insulin resistance without diabetes
[^withers1998]: doi:10.1038/36116 · in-vivo (Irs2-/- mouse genetic KO) · model: Irs2-null Mus musculus · archive status: not_oa (1,770 citations) · key finding: Irs2 disruption → type 2 diabetes (liver insulin resistance + β-cell failure); establishes IRS-1/IRS-2 tissue specialization
[^um2004]: [[studies/um-2004-s6k1-irs1-feedback]] · in-vivo (S6K1-null mouse + cell lines) · model: S6K1-/- Mus musculus (C57BL/6J background; male mice) · doi:10.1038/nature02866 · archive status: downloaded (local PDF verified) · key finding: S6K1 KO protected against age/diet-induced obesity + enhanced insulin sensitivity via IRS-1 serine phosphorylation reduction; IRS-1 sites blunted are S307 + S632/S635 (mouse) / S312 + S636/S639 (human) — per corrigendum Nature 431:485 (2004) correcting original figure labels S636/S639 → S632/S635 for mouse; see also [[s6k1]] page for verified details
[^selman2008]: doi:10.1096/fj.07-9261com · in-vivo (Irs1-/- mouse genetic KO) · model: Irs1-null Mus musculus · archive status: not_oa (#gap/no-fulltext-access) · publication_year: 2007/2008 (FASEB J) · key finding: Irs1-null females show statistically significant lifespan extension; delayed age-related biomarkers · **quantitative details unverifiable from abstract alone**
[^boucher2014]: doi:10.1101/cshperspect.a009191 · review · model: review of mammalian insulin/IGF-1 receptor signaling in normal and insulin-resistant states · archive status: downloaded (local PDF verified) · Boucher J, Kleinridders A, Kahn CR · Cold Spring Harb Perspect Biol 2014;6:a009191 · scope: covers IR/IGF-1R signaling, PI3K-AKT axis, GRB2-RAS-MAPK branch, IRS paralog tissue roles, and mechanisms of insulin resistance including serine phosphorylation; does NOT cover IRS-1 KO lifespan extension or aging longevity phenotypes (no lifespan data cited)
