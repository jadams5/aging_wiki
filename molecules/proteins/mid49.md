---
type: protein
aliases: [MIEF2, SMCR7, mitochondrial dynamics protein 49, mitochondrial elongation factor 2, Smith-Magenis syndrome chromosomal region candidate gene 7 protein]
uniprot: Q96C03
ncbi-gene: 125170
hgnc: 17920
ensembl: ENSG00000177427
genage-id: null
mouse-ortholog: Mief2
key-domains: [N-terminal-transmembrane-anchor, Mab-21-domain, MAB21L-cGLR-domain]
key-ptms: []
pathways: ["[[mitochondrial-dynamics-pathway]]"]
hallmarks: ["[[mitochondrial-dysfunction]]"]
sens-categories: []
complex-subunits: []
known-interactors: ["[[drp1]]", "[[mid51]]", "[[mff]]", "[[fis1]]"]
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Palmer 2011, Zhao 2011, Loson 2013, Palmer 2013 primary-source PDFs verified; Osellame 2016 and Atkins 2016 are closed-access (not_oa) — claims attributed to those two sources not independently verified against full text. Canonical-DB fields (UniProt Q96C03, NCBI Gene 125170, HGNC 17920, Ensembl ENSG00000177427) confirmed via live UniProt REST API 2026-05-06. COXPD49 description corrected to match UniProt DI-05914. Druggability tier set to 3 from Open Targets API (ENSG00000177427). Topology corrected: MID49 is N-terminally anchored, not tail-anchored."
---

# MID49 (MIEF2)

An N-terminally anchored outer mitochondrial membrane (OMM) protein that recruits [[drp1]] to pre-fission sites, forming part of the four-receptor system that controls mitochondrial fission topology in mammalian cells. MID49 and its close paralog [[mid51]] (MIEF1) were identified simultaneously in 2011 as a second class of DRP1 receptors, distinct from [[mff]] and [[fis1]] [^palmer2011][^zhao2011]. The naming history is complicated: the Palmer group called them MiD49/MiD51 ("mitochondrial dynamics proteins of 49/51 kDa") while the Zhao/Lendahl group called the same proteins MIEF2/MIEF1 ("mitochondrial elongation factors"). HGNC now uses MIEF2 as the official symbol; MID49 is retained in aliases throughout this wiki for readability.

> **Naming note:** MIEF2 / MID49 / SMCR7 are three names for the same protein (UniProt Q96C03). "SMCR7" refers to its chromosomal location in the Smith-Magenis syndrome deletion region on chromosome 17p11.2 and does not reflect its mitochondrial function. All three are listed as aliases. No `pathways/mid49.md` exists — the relevant pathway page is [[mitochondrial-dynamics-pathway]].

## Identity

| Feature | Value |
|---|---|
| UniProt | Q96C03 (MID49_HUMAN) — Swiss-Prot (manually reviewed) |
| NCBI Gene | 125170 |
| HGNC symbol | MIEF2 |
| Ensembl | ENSG00000177427 |
| Canonical length | 454 amino acids |
| Molecular weight | ~49 kDa (basis of the "MiD49" name) |
| Mouse ortholog | Mief2 (one-to-one) |
| GenAge (human) | not listed |
| Chromosomal location | 17p11.2 (within the Smith-Magenis syndrome critical region) |

**Identity notes (R25):** The NCBI Gene ID in the seeding brief (51024 and 117177) was incorrect. The correct ID is **125170**, confirmed from the live UniProt REST API (Q96C03 entry, accessed 2026-05-06). The Ensembl ID in the brief (ENSG00000108829) was also incorrect; the verified ID is ENSG00000177427. HGNC 17920 was correct. #gap/needs-replication of canonical-DB identity fields at next lint pass.

## Domain architecture

MID49 is an **N-terminally anchored** single-pass OMM protein (not tail-anchored; the TM helix is near the N-terminus, not the C-terminus):

- **N-terminal region in IMS (aa 1–22):** Short segment residing in the mitochondrial intermembrane space (IMS). This segment is N-terminal to the TM helix and is not cytoplasmic [^palmer2011].
- **Transmembrane anchor (aa 23–43):** Single-pass transmembrane helix that inserts into the OMM. The N-terminus (aa 1–22) faces the IMS; the bulk of the protein (aa 44–454) faces the cytoplasm. Confirmed by UniProt Q96C03 topology annotation and by Palmer 2011 proteinase K/sodium carbonate extraction and N-terminal versus C-terminal truncation experiments [^palmer2011].
- **Mab-21 / MAB21L-cGLR domain (aa ~44–454):** A large globular cytoplasmic domain of the Mab-21 superfamily. Structurally related to cyclic GMP-AMP receptors (cGLR), but MID49 does not appear to have nucleotide-sensing activity in the way that [[mid51]] uses ADP as a cofactor. This cytoplasmic domain mediates the direct interaction with DRP1; a direct interaction between a truncated cytoplasmic form of MiD49 (MiD49^ΔN120^) and DRP1 was confirmed by yeast two-hybrid and co-immunoprecipitation [^palmer2011].
- **Disordered/low-complexity region:** Present within the globular domain; may provide regulatory flexibility.

## Function in mitochondrial fission

MID49 acts as a **DRP1 docking receptor** on the OMM. Four mammalian DRP1 receptors are established: MFF, MID49, MID51, and FIS1. Unlike FIS1, whose contribution to DRP1-dependent fission in mammalian cells is disputed, MID49 and MID51 have been clearly demonstrated to mediate DRP1 recruitment [^palmer2011][^loson2013].

**The paradox of bifunctionality.** Both MID49 and MID51 display a paradoxical effect: at physiological expression levels they recruit DRP1 to mitochondria and support fission, but when overexpressed they sequester DRP1 at the OMM without triggering scission, leading to net mitochondrial elongation [^palmer2011]. This suggests that MID49 can tether DRP1 in an assembly-competent but GTPase-inhibited state, and that the ratio of MID49:DRP1 at a given site determines whether scission occurs. The in-vivo relevance of this bifunctionality is not yet established. #gap/no-mechanism

**Independence from MFF.** Palmer et al. 2013 demonstrated that MID49 and MID51 can recruit DRP1 and support fission independently of Mff and Fis1. They showed this by siRNA knockdown of Mff and/or Fis1 in cells also expressing MiD49/MiD51, and by observing fission events in Mfn-DKO MEFs (mitofusin double-knockout MEFs, used because their fragmented mitochondria make fission events readily visible) upon MiD49/MiD51 expression [^palmer2013]. This places MID49 and MID51 in a functionally independent tier from MFF, distinct from the peroxisomal fission machinery (Fis1, Mff target both mitochondria and peroxisomes; MiD49/MiD51 are mitochondria-specific). This redundancy is likely why MID49 single knockdowns produce mild (or context-dependent) phenotypes in many cell lines.

**Cooperative roles in vivo.** Osellame et al. 2016 used CRISPR knockout of individual and combined DRP1 adaptors in mouse embryonic fibroblasts (MEFs) and showed that MFF is the dominant fission adaptor, but that MID49 and MID51 have additive roles, particularly at a subset of ER-contact-site-defined fission events [^osellame2016]. Loss of all four adaptors largely phenocopies DRP1 knockout — a highly elongated, unfissionable network.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (DRP1 adaptor function) conserved in humans? | yes — COXPD49 disease (below) |
| Replicated in humans? | partial — genetic disease establishes necessity; fission biochemistry not directly confirmed in human tissue |

## Disease association: COXPD49

UniProt Q96C03 (DI-05914; MIM 619024; PMID 29361167) associates MID49 loss-of-function with **combined oxidative phosphorylation deficiency 49 (COXPD49)** — an autosomal recessive mitochondrial myopathy characterized by progressive muscle weakness, intermittent muscle pain, exercise intolerance, elevated serum creatine kinase, and deficiencies of multiple respiratory chain enzymes. The disease is consistent with impaired mitochondrial quality control downstream of defective fission: without sufficient fission capacity, damaged mitochondrial segments cannot be isolated for [[mitophagy]], leading to accumulation of dysfunctional mitochondria with respiratory-chain defects. #gap/needs-replication — the clinical genetics of COXPD49 is based on a small number of reported cases; natural history and genotype–phenotype correlations are not well characterized.

## Relationship to aging

MID49 is **not directly listed in GenAge** as an aging gene, and aging-specific studies of MID49 are sparse compared to those on DRP1 itself, [[opa1]], or [[pgc-1alpha]]. Its relevance to aging biology is best understood in the context of the fission–fusion balance:

- **Mitochondrial quality control.** The fission step catalyzed by DRP1 (and licensed by MID49/MID51/MFF) is required for the isolation of damaged mitochondrial segments that are then cleared by [[mitophagy]]. With aging, mitochondrial networks in skeletal muscle and neurons tend to shift toward either excessive fragmentation (indicative of stress/fission overactivation) or pathological elongation (indicative of failed mitophagy clearance). Both directions are associated with reduced mitochondrial quality and bioenergetic decline [^atkins2016].
- **Receptor redundancy as a buffer.** The functional redundancy between MID49, MID51, and MFF may buffer age-related changes in any single adaptor's expression level. If MID49 expression declines with age (not yet directly tested in human tissue #gap/needs-human-replication), MFF and MID51 could partially compensate, masking the phenotypic consequence of age-related MID49 loss. This makes MID49 harder to study as an isolated aging variable.
- **Heart and skeletal muscle enrichment.** UniProt records highest MID49 expression in heart and skeletal muscle — two tissues with high mitochondrial content and prominent age-related pathology (cardiac dysfunction, [[sarcopenia]]). Whether MID49 expression levels correlate with mitochondrial quality metrics in aged heart or muscle is an open question. #gap/needs-human-replication

## Pathway membership

- [[mitochondrial-dynamics-pathway]] — DRP1 recruitment arm; upstream of fission execution
- [[mitophagy]] — indirectly via fission prerequisite; DRP1-dependent mitochondrial fragmentation precedes PINK1/Parkin-mediated selective autophagy
- [[pink1-parkin-pathway]] — MID49-mediated DRP1 assembly contributes to mitochondrial fragmentation that can expose OMM PINK1 substrates; indirect connection

## Key interactors

- [[drp1]] (DNM1L) — primary binding partner; direct interaction confirmed by yeast two-hybrid and co-immunoprecipitation in Palmer 2011 [^palmer2011]; 5 independent experimental datasets in UniProt (AP-MS, co-IP). MID49's cytoplasmic Mab-21 domain mediates DRP1 binding (truncated MiD49^ΔN120^ retains interaction; residues 121–463 sufficient by Y2H [^palmer2011]). The precise DRP1 domain contacted has not been resolved at structural resolution in these papers. DRP1 is the effector; MID49 is the OMM docking scaffold.
- [[mid51]] (MIEF1) — close structural paralog; the two proteins colocalize at OMM fission sites and have overlapping but not identical DRP1-recruitment properties. MID51 uniquely uses ADP as a cofactor to regulate DRP1 inhibition; MID49 lacks this nucleotide-sensing mechanism.
- [[mff]] — functionally redundant DRP1 adaptor; operates at the same OMM sites but via different structural contact and can function independently of MID49/MID51. MFF knockdown is more penetrant than MID49 knockdown in most tested cell lines.
- [[fis1]] — fourth DRP1 receptor; its contribution to DRP1-dependent fission in mammals is controversial; may mediate mitophagy-coupled fission independently of MID49.

## Limitations and gaps

- **No aging-specific studies directly.** MID49 aging biology is entirely inferred from upstream (DRP1/fission) and downstream (mitochondrial quality control, mitophagy) literature. #gap/needs-human-replication
- **Druggability tier 3** (Open Targets Platform, ENSG00000177427, queried 2026-05-06): "Structure with Ligand" (SM) is the only positive tractability flag — no approved drug, no clinical-stage compound, no high-quality ligand or pocket. MID49 is not an active therapeutic target. The prior API 5xx error (seeding session) has resolved; tier set from confirmed query result.
- **MR causal evidence: not tested.** No Mendelian randomization study has evaluated MIEF2 SNPs as instruments for any aging-related disease trait. #gap/needs-human-replication
- **GTEx aging correlation: not populated.** The `gtex-aging-correlation:` field is null pending SOP `sops/finding-tissue-expression.md` extraction pass. Priority: heart and skeletal muscle tissues given UniProt expression pattern.
- **Bifunctionality mechanism unclear.** Why MID49 overexpression inhibits fission despite recruiting DRP1 is not resolved at a structural level. #gap/no-mechanism
- **Mouse knockout not reported.** No constitutive or conditional Mief2 knockout mouse has been published as of the wiki seed date; the in-vivo phenotype of MID49 deficiency in aging contexts is unknown. #gap/needs-human-replication

## Footnotes

[^palmer2011]: doi:10.1038/embor.2011.54 · Palmer CS et al. · EMBO Reports 2011; 12(6):565–573 · in-vitro (COS7, HeLa, MEFs) + overexpression + siRNA knockdown · discovery paper for MiD49/MiD51 as DRP1 recruiters; established N-terminal OMM topology; confirmed direct MiD49–Drp1 interaction by Y2H and co-IP; established bifunctionality paradox (low expression → fission; high expression → elongation via Drp1 sequestration) · PDF locally verified

[^zhao2011]: doi:10.1038/emboj.2011.198 · Zhao J et al. · EMBO J 2011; 30(14):2762–2778 · in-vitro (293T, HeLa, U-343MG, SH-SY5Y) + overexpression + siRNA · concurrent independent identification of MIEF1 (= MiD51/SMCR7L); MIEF1 recruits Drp1 but inhibits its fission activity, driving net fusion at overexpression; knockdown of MIEF1 causes fragmentation; alternate nomenclature MIEF1/MIEF2 originated here; paper focused primarily on MIEF1 (MiD51) · PDF locally verified

[^loson2013]: doi:10.1091/mbc.e12-10-0721 · Losón OC et al. · Mol Biol Cell 2013; 24(5):659–667 · in-vitro (HeLa, MEFs) + null-allele cell lines + siRNA knockdown · Fis1, Mff, MiD49, and MiD51 all mediate Drp1 recruitment; MiD49/MiD51 can support fission in the absence of Fis1 and Mff; Mff plays the predominant role · PDF locally verified

[^palmer2013]: doi:10.1074/jbc.m113.479873 · Palmer CS et al. · J Biol Chem 2013; 288(38):27584–27593 · in-vitro (MEFs including Mfn-DKO MEFs, HeLa, 293T) + siRNA knockdown of Mff/Fis1 · demonstrated MID49/MID51 can recruit Drp1 and support fission independently of Mff and Fis1; MiD49/MiD51 are mitochondria-specific (not found at peroxisomes, unlike Fis1/Mff) · PDF locally verified

[^osellame2016]: doi:10.1242/jcs.185165 · Osellame LD et al. · J Cell Sci 2016 · in-vitro (MEFs, CRISPR knockouts) + live imaging · cooperative and independent adaptor roles; MFF dominant; MID49/MID51 additive, especially at ER-contact fission sites · **NOT VERIFIED AGAINST FULL TEXT** — paper is closed-access (not_oa per a local paper archive). Claims attributed to this paper should not be considered verified. #gap/no-fulltext-access

[^atkins2016]: doi:10.1042/cs20160030 · Atkins K et al. · Clinical Science 2016 · review · DRP1 adaptor biology and human disease implications; covers aging-relevant tissue contexts · **NOT VERIFIED AGAINST FULL TEXT** — paper is closed-access (not_oa per a local paper archive). Claims attributed to this paper should not be considered verified. #gap/no-fulltext-access
