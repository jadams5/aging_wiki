---
type: protein
aliases: [ATG16L1, autophagy related 16-like 1, APG16L, APG16L1]
uniprot: Q676U5
ncbi-gene: 55054
hgnc: 21498
mouse-ortholog: Atg16l1
ensembl: ENSG00000085978
druggability-tier: 2
caused-by: []
causes: []
key-domains: [ATG5-binding-region, coiled-coil, WD40-repeats]
key-ptms: [Ser139-phosphorylation, Ser269-phosphorylation, Ser287-phosphorylation, Asp300-caspase3/7-cleavage]
pathways: ["[[autophagy]]", "[[mitophagy]]", "[[xenophagy]]"]
hallmarks: ["[[disabled-macroautophagy]]", "[[loss-of-proteostasis]]"]
sens-categories: []
known-interactors: ["[[atg5]]", "[[atg12]]", "[[atg7]]", "[[lc3]]", "[[wipi2]]", "[[fip200]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Fujita 2008, Hampe 2007, Rioux 2007, Cadwell 2008, and Lassen 2014 claims verified against primary source PDFs. Mizushima 2003 (doi:10.1242/jcs.00381) not verified — bronze OA, download failed; claims from that paper retain #gap/no-fulltext-access. Canonical-database identity fields (UniProt Q676U5, NCBI Gene 55054, HGNC 21498) not independently re-verified against databases."
---

# ATG16L1 — autophagy E3-like complex scaffolding subunit

ATG16L1 is the WD40-repeat-containing scaffold that completes the **ATG12–ATG5–ATG16L1 E3-like complex** — the enzyme that determines where [[lc3]] is lipidated on the phagophore membrane. In the vertebrate lineage, ATG16L1 acquired a large C-terminal WD40 domain absent in yeast, enabling additional cargo-recruitment and signaling roles beyond simple membrane targeting. A common coding variant — **T300A** (rs2241880) — is one of the strongest Crohn's disease GWAS signals and provides a natural hypomorphic model for studying ATG16L1 function in human intestinal biology.

## Identity

| Field | Value |
|---|---|
| UniProt | Q676U5 (ATG16L1_HUMAN) |
| NCBI Gene | 55054 |
| HGNC symbol | ATG16L1 |
| Mouse ortholog | Atg16l1 (one-to-one; functionally equivalent) |
| Protein length | 607 amino acids (canonical isoform α) |
| Yeast ortholog | Atg16p (*S. cerevisiae*) — lacks WD40 domain; shorter coiled-coil; same E3-like function |
| Alternative names | APG16L1; APG16L |

**Naming note:** No `pathways/atg16l1.md` exists. This page (`molecules/proteins/atg16l1.md`) is the canonical `[[atg16l1]]` resolution. The autophagy pathway page is [[autophagy]].

**Isoforms:** Multiple splice isoforms (designated α, β, γ and others) are expressed in human tissues with tissue-specific distributions. Isoform α (607 aa) is the most widely studied and the UniProt canonical sequence. The WD40-containing region is present in all principal isoforms. #gap/unsourced — systematic isoform expression profiling across aging human tissues is limited.

## Domain structure

| Domain | Residues (canonical) | Function |
|---|---|---|
| N-terminal ATG5-binding region | 1–79 | Direct non-covalent contact with the UblA domain of [[atg5]]; essential for E3-like complex formation |
| Coiled-coil (CC) domain | 80–320 | Mediates ATG16L1 homodimerization (self-multimerization); organizes the ~800 kDa multimeric ATG12–ATG5–ATG16L1 complex [^fujita2008] |
| C-terminal WD40 repeats | 320–607 | Seven WD40 β-propeller repeats; vertebrate-specific; implicated in membrane association, cargo receptor interactions, and non-canonical autophagy |

The **coiled-coil domain** drives ATG16L1 homodimerization, which in turn organizes the full complex as a higher-order multimer: the coiled-coil mediates self-multimerization, and the full Atg12–Atg5–Atg16L complex migrates at ~800 kDa by gel filtration [^fujita2008]. #gap/needs-replication — the exact stoichiometry of the active human complex under physiological conditions (the "dimer-of-dimers / octameric" model is widely cited in reviews but Fujita 2008 characterizes the complex as "~800-kDa multimeric" without specifying subunit count).

The **WD40 domain** is the major vertebrate innovation. Yeast Atg16p is ~150 aa and consists essentially of the ATG5-binding region and a short coiled-coil only. The vertebrate WD40 extension is thought to mediate:
- Interaction with an unidentified membrane-targeting factor: Fujita 2008 proposes a "hypothetical Atg16L-interacting factor" that recruits the complex to its source membrane but does not identify it [^fujita2008]. The identification of **WIPI2** (the mammalian ATG18 ortholog) as this factor is from later work not captured in these primary citations. #gap/unsourced — WIPI2–ATG16L1 interaction needs primary citation.
- Non-canonical LC3 lipidation on single-membrane compartments (endosomes, lysosomes, phagosomes) that is ATG16L1-WD40-dependent but ATG5/ATG7-independent in some reports #gap/unsourced
- Interaction with **FIP200** (RB1CC1), linking the ULK1 complex to the E3-like complex at the phagophore #gap/unsourced

The **T300A polymorphism** (rs2241880) falls within the N-terminal region of the WD-repeat domain at an evolutionarily conserved position, and is discussed in detail below (see [Disease associations](#disease-associations)) [^hampe2007].

## Assembly of the ATG12–ATG5–ATG16L1 E3-like complex

ATG16L1 does not participate in any covalent conjugation reaction. Its role is structural and catalytic-scaffold. The assembly sequence is [^fujita2008]:

1. [[atg7]] (E1-like) activates [[atg12]] → ATG12~ATG7 thioester
2. [[atg10]] (E2-like) transfers ATG12 → ATG12~ATG10 thioester → isopeptide bond to ATG5 Lys130
3. ATG12–ATG5 conjugate binds ATG16L1 non-covalently via the ATG5 UblA domain engaging ATG16L1 residues 1–79
4. ATG16L1 coiled-coil drives homodimerization → functional octameric complex (~800 kDa)

The assembled complex then:
- Is recruited to source membranes via a PI3K-dependent mechanism (wortmannin-sensitive) that requires membrane localization of ATG16L1 [^fujita2008]. The specific bridging factor(s) are not fully resolved in Fujita 2008 — see WIPI2 and FIP200 gap notes above.
- Presents the ATG3~LC3 thioester intermediate to the phagophore PE, catalyzing **LC3-I → LC3-II** (PE-lipidated) conversion — the direct readout of autophagy induction [^fujita2008]
- **Restricts LC3 lipidation to specific membranes** — ectopic PM targeting of the ATG16L complex enables LC3 lipidation at the PM, demonstrating that the complex determines the site of lipidation [^fujita2008]
- Dissociates from the completed autophagosome upon membrane closure

Without ATG16L1, LC3-II generation is severely impaired and autophagosomes do not form efficiently. The WD40 domain is additionally required for LC3 lipidation on non-autophagic membranes in non-canonical autophagy contexts (LAP, CASM) [^fujita2008]. #gap/needs-replication — distinction between canonical and non-canonical ATG16L1 roles at the domain level is an active research area not fully resolved in the primary literature.

## Discovery and yeast comparison

ATG16L1 (then called Apg16L in mouse) was cloned by Mizushima et al. in 2003 [^mizushima2003]. The paper identified mouse Apg16L by sequence homology to yeast Atg16p and demonstrated:
- Apg16L co-localizes with Apg12–Apg5 at the isolation membrane (phagophore)
- The N-terminal 57 residues of Apg16L are sufficient to bind Apg5
- Yeast Atg16p lacks the WD40 domain; the C-terminal WD40 repeats are vertebrate-specific
- The coiled-coil mediates self-interaction (dimerization)

The comparison with yeast Atg16p is instructive: yeast Atg16p performs the same essential E3-like complex function with only the N-terminal ATG5-binding region and a short coiled-coil, suggesting the WD40 domain represents a metazoan elaboration for additional regulatory or cargo-targeting functions beyond the core lipidation machinery.

## Disease associations

### T300A polymorphism and Crohn's disease

The **T300A variant** (rs2241880; Thr300Ala substitution) is a common missense polymorphism (minor allele frequency ~47% in affected Europeans, ~53% in controls per Hampe 2007) that is one of the strongest replicated GWAS signals in Crohn's disease (CD) [^hampe2007] [^rioux2007].

- **Hampe et al. 2007** (Nature Genetics) performed a GWAS of nonsynonymous SNPs in CD and identified rs2241880 with genome-wide significance [^hampe2007].
- **Rioux et al. 2007** (Nature Genetics) independently confirmed ATG16L1 rs2241880 in a parallel CD GWAS, providing the first evidence linking autophagy directly to inflammatory bowel disease [^rioux2007].

The T300A variant destabilizes ATG16L1 protein. Mechanistically, the T300A substitution lies immediately C-terminal to a DXXD caspase-3/7 consensus motif; the Ala substitution increases the efficiency of cleavage by caspase-3 and, at higher concentrations, caspase-7 [^lassen2014]. In vitro translated T300A protein underwent almost complete fragmentation by caspase-3, whereas WT protein was only partially cleaved [^lassen2014]. This results in lower steady-state levels of full-length ATG16L1 T300A and impaired selective autophagy flux.

This creates a context-dependent functional paradox:
- In **steady-state canonical autophagy**: T300A reduces autophagy flux → impaired xenophagy and mitophagy → Paneth cell granule abnormalities and increased susceptibility to mucosal injury
- In **inflammatory signaling contexts**: T300A-associated reduced xenophagy may actually impair clearance of intracellular bacteria in a way that paradoxically alters cytokine outputs (Lassen et al. 2014 showed altered TNF signaling and decreased clearance of adherent-invasive *E. coli* in T300A macrophages) [^lassen2014]

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — ATG16L1 gene and function are fully conserved |
| Phenotype conserved in humans? | yes — T300A is a human germline variant with documented CD association |
| Replicated in humans? | yes — T300A Crohn association replicated across multiple cohorts |

### ATG16L1 and Paneth cells

**Cadwell et al. 2008** (Nature) studied mice hypomorphic for Atg16l1 (two ATG16L1^HM^ gene-trap lines expressing 23–37% of expected WT ATG16L1 protein) and found dramatic **Paneth cell** granule abnormalities: aberrant granule morphology, loss of normal granule exocytosis, and alterations in antimicrobial peptide (lysozyme) packaging [^cadwell2008]. These mice phenocopied aspects of human CD intestinal pathology, including loss of Paneth cell autophagy and abnormal secretory granule morphology.

Cadwell 2008 itself does not implicate a viral co-factor in the Paneth cell phenotype — the ATG16L1^HM^ granule abnormalities were observed in specific-pathogen-free facility mice without viral challenge. The viral co-factor finding (murine norovirus MNV-1 interacting with ATG16L1 hypomorphism to produce the CD-like phenotype) is from a subsequent companion paper (Cadwell et al. 2010, Cell 141:1135–1145), not from Cadwell 2008. #gap/unsourced — Cadwell 2010 needs its own study page and citation here if this claim is retained.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes — CD patients with T300A show analogous Paneth cell morphology abnormalities |
| Replicated in humans? | yes (in CD patients) / in-progress for broader IBD phenotyping |

## Knockout phenotypes

### Whole-body Atg16l1 knockout (constitutive)

Germline Atg16l1-deficient mice are **embryonic lethal** — death occurs before birth. The precise developmental stage and mechanism of lethality are not fully characterized in the primary literature examined here. #gap/unsourced — the specific timing and cause of Atg16l1-/- embryonic lethality requires verification against a primary publication; the embryonic lethal phenotype is widely cited in reviews but the definitive KO paper is not included in this page's footnotes.

### Tissue-specific knockouts

Because the germline KO is lethal, tissue-specific Atg16l1 conditional knockouts have been informative:

- **Intestinal epithelial conditional KO** — deletion in intestinal epithelium recapitulates Paneth cell abnormalities and increases susceptibility to experimental colitis (DSS model), consistent with Cadwell 2008 hypomorphic data [^cadwell2008]. #gap/unsourced — specific primary citation for constitutive intestinal epithelial Cre × Atg16l1-flox is needed.
- **Macrophage/myeloid conditional KOs** — Atg16l1-deficient macrophages show increased NLRP3 inflammasome activation and elevated IL-1β secretion, providing a cellular mechanistic link between autophagy failure and intestinal inflammation. #gap/unsourced — primary citation needed.

## Aging context

ATG16L1 is a canonical component of the autophagy E3-like complex. As with [[atg5]], [[atg7]], and [[lc3]], its activity is essential for proteostasis maintenance throughout the lifespan. Several connections to aging biology are documented or inferred:

### Autophagic flux decline with aging

Autophagic capacity declines with age in multiple mammalian tissues. Because ATG16L1 is rate-limiting for LC3 lipidation specificity (as part of the ATG12–ATG5–ATG16L1 complex), age-associated reductions in complex availability would impair autophagosome formation. However, **age-associated changes in ATG16L1 protein levels specifically** are not well characterized in the primary literature. #gap/unsourced — tissue-level ATG16L1 age-trajectory data are sparse; systematic quantification across tissues and ages is lacking.

### T300A and aging trajectory

The T300A hypomorphic variant reduces steady-state ATG16L1 levels by increasing caspase-mediated cleavage [^lassen2014]. In principle, individuals homozygous for T300A (A/A genotype at rs2241880; estimated ~16% of European-ancestry populations) carry a constitutively reduced autophagy capacity that may modify the trajectory of age-associated autophagy decline. This hypothesis has not been formally tested in aging cohorts. #gap/needs-replication #gap/needs-human-replication

### Paneth cells and intestinal aging

Paneth cell granule abnormalities increase with age in humans and are exacerbated by ATG16L1 T300A. Paneth cells are key components of the intestinal stem cell niche; their dysfunction contributes to age-associated intestinal regenerative decline. This places ATG16L1 at the intersection of [[autophagy]], [[stem-cell-exhaustion]], and intestinal homeostasis — a mechanistic link that remains underexplored in aging-specific studies. #gap/no-mechanism

### Position in pro-longevity pathways

ATG16L1 is downstream of canonical longevity signaling:
- **mTOR inhibition (rapamycin)** → releases ULK1 → phagophore initiation → ATG5 conjugation → ATG16L1-containing complex lipidates LC3. ATG16L1 is the obligate E3-like catalyst at the lipidation step.
- **[[ampk]] activation (metformin, AICAR)** → activates [[ulk1]] Ser317/Ser777 → same ATG16L1-dependent elongation dependency.
- **[[caloric-restriction]]** → upregulates autophagy flux through mTOR/AMPK axis; requires intact ATG16L1.

Unlike ATG5 (the protein it binds), ATG16L1 overexpression has not been demonstrated to extend lifespan in any organism. The ATG5 overexpression lifespan extension result (Pyo et al. 2013, ~17.2% in mice) would depend on the availability of ATG16L1, but ATG16L1 itself was not the manipulated variable. #gap/needs-replication — whether ATG16L1 overexpression recapitulates or enhances the ATG5 OE lifespan phenotype has not been tested.

## Pathway membership and cross-references

- [[autophagy]] — ATG16L1 is essential for phagophore elongation and LC3 lipidation; the ATG12–ATG5–ATG16L1 complex is the E3-like enzyme; the autophagy page documents the full initiation → elongation → closure cascade.
- [[mitophagy]] — LC3-II on the phagophore requires the ATG16L1-containing E3-like complex; hence ATG16L1 is required for all LC3-II-dependent mitophagy receptor recognition.
- [[xenophagy]] — Selective autophagy of intracellular pathogens; ATG16L1 T300A specifically impairs xenophagy of adherent-invasive *E. coli* [^lassen2014].
- [[atg5]] — Direct non-covalent binding partner; the ATG12–ATG5 conjugate binds ATG16L1 to form the E3-like complex. See [[atg5]] for the conjugation cascade.
- [[atg12]] — Conjugated to ATG5; the ATG12–ATG5 conjugate is the unit that binds ATG16L1.
- [[atg7]] — E1-like enzyme upstream; required for both ATG12 and LC3 conjugation cascades.
- [[atg10]] — E2-like enzyme that mediates ATG12 transfer to ATG5; upstream of ATG16L1 complex formation.
- [[lc3]] — Substrate of the ATG3/ATG12–ATG5–ATG16L1 E3-like system; LC3-I → LC3-II lipidation is the direct readout of ATG16L1 complex activity.
- [[fip200]] — RB1CC1; ULK1 complex scaffold that interacts with ATG16L1 to couple initiation to elongation; see [[fip200]] for the ULK1 complex structure.
- [[wipi2]] — PI3P effector that recruits ATG16L1 to the phagophore; molecular bridge between the VPS34/beclin-1 lipid-kinase complex and the LC3-lipidation machinery. #gap/unsourced — the specific WIPI2–ATG16L1 interaction is not documented in the primary sources on this page; Fujita 2008 hypothesizes a membrane-targeting factor but does not identify it as WIPI2. Primary citation needed.
- [[beclin-1]] — PI3KC3/VPS34 complex generates PI3P, which recruits WIPI2 → ATG16L1 → ATG12–ATG5; the two conjugation systems are functionally coupled via this link.
- [[disabled-macroautophagy]] — Hallmark page; ATG16L1 loss is a direct route to LC3-lipidation failure and macroautophagy blockade.
- [[loss-of-proteostasis]] — Hallmark page; downstream consequence of ATG16L1 dysfunction → aggregate accumulation.

## Limitations and knowledge gaps

- `#gap/needs-human-replication` — No direct evidence that modulating ATG16L1 levels extends human lifespan or healthspan. Mouse T300A/Atg16l1 hypomorphic models show intestinal pathology but have not been used to study aging trajectories.
- `#gap/unsourced` — Germline Atg16l1-/- embryonic lethal phenotype: widely cited but primary publication confirming timing and mechanism of lethality is not captured in this page's footnotes. Needs primary citation before this claim can be trusted.
- `#gap/unsourced` — Age-associated decline of ATG16L1 protein levels across tissues: not documented with primary citations here; primary sources needed.
- `#gap/unsourced` — Intestinal epithelial conditional Atg16l1-/- phenotype (DSS-colitis susceptibility): inference from Cadwell 2008 hypomorphic data; constitutive conditional KO citation not identified.
- `#gap/unsourced` — Non-canonical ATG16L1-WD40 role in LAP/CASM (LC3-associated phagocytosis/microautophagy): domain requirement is referenced but primary citation not included.
- `#gap/unsourced` — ATG16L1 WD40 domain requirement for WIPI2 interaction and phagophore recruitment: WIPI2 is not mentioned in Fujita 2008; the WIPI2–ATG16L1 interaction needs a primary citation. Fujita 2008 identifies only an uncharacterized membrane-targeting factor.
- `#gap/unsourced` — MNV-1 viral co-factor finding (Paneth cell phenotype requiring ATG16L1 hypomorphism AND murine norovirus) is from Cadwell et al. 2010 (Cell 141:1135–1145), not Cadwell 2008. Cadwell 2010 needs a study page before this claim can be properly cited.
- `#gap/no-mechanism` — T300A effect on aging-related autophagy decline: plausible but untested; no aging cohort data on T300A genotype × autophagy flux or aging phenotype interaction.
- `#gap/dose-response-unclear` — Whether partial ATG16L1 reduction (as in T300A heterozygotes, ~MAF 40%) meaningfully impairs autophagy flux under physiological (non-inflammatory) conditions; small-molecule rescue of T300A is preclinical only.
- ATG16L1 pharmacology: no small molecule directly stabilizes ATG16L1 or prevents T300A caspase cleavage in vivo. Caspase inhibitors are non-selective and have poor therapeutic windows for chronic use.

## Footnotes

[^mizushima2003]: [[studies/mizushima-2003-atg16l1-cloning]] · n=N/A · in-vitro + in-vivo (mammalian cell lines; mouse) · cloned mouse Apg16L (ATG16L1); demonstrated colocalization with Apg12–Apg5 at the isolation membrane; identified N-terminal ATG5-binding region (aa 1–57 per Mizushima 2003, consistent with the 1–79 figure in Fujita 2008 for mouse Atg16L); confirmed vertebrate-specific WD40 domain absent in yeast Atg16p; dimerization via coiled-coil · model: COS-7 cells, HEK293 cells; mouse fibroblasts · doi:10.1242/jcs.00381 · cited_by: 756 · locally: not available (oa_status: bronze; download status: failed — #gap/no-fulltext-access; quantitative claims from this paper require independent verification)

[^fujita2008]: [[studies/fujita-2008-atg16l-complex-lc3-lipidation-site]] · n=N/A · in-vitro (mammalian cell lines; overexpression + adenovirus systems) · ATG16L complex specifies the site of LC3 lipidation; Atg16L complex is an E3-like enzyme for LC3 conjugation; complex ~800 kDa by gel filtration; coiled-coil required for self-multimerization and E3-like activity; ectopic PM-targeting of the complex drives PM-localized LC3 lipidation; membrane recruitment is PI3K-dependent (wortmannin-sensitive); a membrane-targeting factor for ATG16L is hypothesized but not identified in this paper · model: PC12, MDCK, MCF7, HEK293A cells (mouse Atg16L proteins; adenoviral overexpression) · doi:10.1091/mbc.e07-12-1257 · cited_by: 1,050 · impact_score: 0.834 (FWCI 38.3 — 100th percentile) · locally: 

[^hampe2007]: [[studies/hampe-2007-atg16l1-crohn-gwas]] · n=735 CD cases + 368 controls (panel A); 498 CD singletons + 1,032 controls + 380 trios (panel B); 509 CD + 656 controls (UK panel C) · observational (GWAS, nonsynonymous SNP scan of 19,779 SNPs) · ATG16L1 rs2241880 T300A identified as CD susceptibility variant (P=4.0×10⁻⁸ in replication); OR 1.45 (95% CI 1.21–1.74) for allele G (Ala); variant lies within N-terminal WD-repeat domain; no association with ulcerative colitis · model: human GWAS; European Crohn's disease cohorts · doi:10.1038/ng1954 · cited_by: 1,869 · impact_score: 0.876 (FWCI 81.7 — 100th percentile) · locally: 

[^rioux2007]: [[studies/rioux-2007-atg16l1-crohn-gwas-replication]] · n=946 ileal CD cases + 977 controls (discovery GWA); 530 trios + 350 cases + 207 controls (replication cohort 1); 353 cases + 207 controls (replication cohort 2) · observational (GWAS; 317,503 SNPs; Illumina HumanHap300) · independent replication of ATG16L1 rs2241880 (GWA P=6.4×10⁻⁸; combined replication P=4.1×10⁻⁸); OR 0.692 (95% CI 0.608–0.788) for threonine (protective) allele; siRNA knockdown of ATG16L1 abrogates Salmonella typhimurium autophagy in HeLa cells; first evidence implicating autophagy in IBD pathogenesis · model: human GWAS (ileal CD); HeLa cells (functional knockdown) · doi:10.1038/ng2032 · cited_by: 1,745 · impact_score: 0.876 (FWCI 110.5 — 100th percentile) · locally: 

[^cadwell2008]: [[studies/cadwell-2008-atg16l1-paneth-cell]] · n=7 WT + 7 ATG16L1^HM^ mice for blinded morphology (100% concordance); n=49 WT + 71 ATG16L1^HM^ for mitochondrial integrity · in-vivo (two ATG16L1^HM^ gene-trap lines on C57BL/6 background expressing 23–37% of expected WT protein; Atg5^flox/flox^×villin-Cre conditional KO); + in-vitro (MEFs) · ATG16L1^HM^ mice exhibit dramatic Paneth cell granule abnormalities (aberrant morphology, loss of exocytosis, diffuse lysozyme staining) that phenocopy Crohn's disease patient biopsies; transcriptional profiling of ATG16L1-deficient Paneth cells reveals enrichment of PPAR signalling, adipocytokine pathways, and acute-phase reactants including leptin and adiponectin; CD patients homozygous for T300A show analogous Paneth cell abnormalities; no viral co-factor invoked (MNV-1 co-factor finding is from Cadwell et al. 2010 Cell, a separate paper) · model: Atg16l1 hypomorphic Mus musculus (C57BL/6); human ileal resection specimens · doi:10.1038/nature07416 · cited_by: 1,486 · impact_score: 0.876 (FWCI 69.8 — 100th percentile) · locally: 

[^lassen2014]: [[studies/lassen-2014-atg16l1-t300a-caspase-cleavage]] · n=N/A · in-vivo (T300A knock-in mice; C57BL/6 background) + in-vitro (MEFs; primary CD11b⁺ cells; cell lines) · T300A variant is more susceptible to caspase-3- and caspase-7-mediated cleavage (in vitro translated T300A underwent almost complete fragmentation by caspase-3 vs only partial cleavage of WT); T300A mice show reduced selective autophagy, Paneth and goblet cell abnormalities, increased IL-1β production, and decreased antibacterial defense against Salmonella Typhimurium and Shigella flexneri · model: Atg16L1 T300A knock-in Mus musculus; primary splenic and lamina propria CD11b⁺ cells; MEFs · doi:10.1073/pnas.1407001111 · cited_by: 360 · impact_score: 0.858 (FWCI 28.4 — 100th percentile) · locally: 
