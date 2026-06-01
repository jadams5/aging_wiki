---
type: protein
aliases: [Kruppel-like factor 4, GKLF, EZF, gut-enriched Kruppel-like factor, epithelial zinc finger]
uniprot: O43474
ncbi-gene: 9314
hgnc: 6348
ensembl: ENSG00000136826
mouse-ortholog: Klf4
druggability-tier: 4
caused-by: []
causes: []
key-domains: [C2H2-zinc-finger-x3, transactivation-9aaTAD, repression-domain]
key-ptms: [Ser254-phosphorylation, Glu411-polyglutamylation, Lys32-ubiquitination]
pathways: ["[[tgf-beta-pathway]]", "[[wnt-pathway]]"]
hallmarks: ["[[epigenetic-alterations]]", "[[cellular-senescence]]"]
known-interactors: ["[[oct4]]", "[[sox2]]", "[[c-myc]]", "[[ctbp1]]", "[[mbd3]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Shields 1996, Takahashi 2006, Soufi 2015, Lu 2020, Yang 2023 verified against primary-source PDFs. Katz 2002 (not_oa) and Segre 1999 (not_oa) unverifiable; claims from those sources tagged. Xie 2017 and Li 2014 not verified (pending/not_oa). UniProt O43474 identity fields confirmed via REST API. GenAge absence confirmed via genomics.senescence.info search. Canonical-database identity fields (PubChem, ChEMBL, NCBI Gene) not independently re-verified beyond what archive/UniProt supplied."
---

# KLF4 (Krüppel-like factor 4)

KLF4 is a zinc-finger transcription factor that acts as both a transcriptional activator and repressor, governing epithelial differentiation in the gut and skin. It is one of the four **Yamanaka pluripotency factors** (the "K" in OSKM and OSK) whose transient expression drives somatic cell reprogramming and, in partial-reprogramming protocols, epigenetic rejuvenation without loss of cell identity. KLF4 exhibits a notable **context-dependent dual role in cancer**: it functions as a tumor suppressor in gastrointestinal epithelia (frequently silenced by promoter hypermethylation in colorectal and gastric cancers) but acts as an oncogene in other cancer types (squamous cell carcinoma, pancreatic adenocarcinoma).

---

## Identity

- **UniProt:** O43474 (KLF4_HUMAN) — confirmed via UniProt REST API 2026-05-05
- **NCBI Gene:** 9314
- **HGNC:** 6348 (symbol: KLF4)
- **Mouse ortholog:** Klf4 (one-to-one ortholog; high sequence conservation in zinc-finger DBD)
- **Length:** 513 amino acids (canonical isoform)
- **Chromosomal location:** 9q31.2

**Naming note:** KLF4 is also known as GKLF (gut-enriched Krüppel-like factor, the name given at cloning [^shields1996]) and EZF (epithelial zinc finger). HGNC-approved symbol KLF4 is used on this page; GKLF and EZF are in `aliases`.

---

## Structural domains

KLF4 contains three canonical **C2H2-type zinc fingers** at the C-terminus (residues 430–454, 460–484, and 490–512 in the canonical human sequence per UniProt O43474), which mediate sequence-specific binding to GC-rich and CACCC elements in target gene promoters. The three-zinc-finger arrangement and its role in DNA sequence recognition were characterized at cloning of the mouse ortholog GKLF [^shields1996]. The zinc-finger region is the most conserved domain across KLF family members and across species.

The N-terminus carries:
- A **9aaTAD transactivation motif** (residues ~101–109): mediates recruitment of transcriptional co-activators.
- A **repression domain**: recruits co-repressors including CTBP1 and components of the NuRD complex (via MBD3 interaction), enabling KLF4 to silence target genes. The balance between transactivation and repression is context-dependent and regulated by post-translational modifications.

**Key PTMs (UniProt O43474):**

| Site | Modification | Functional significance |
|---|---|---|
| Ser254 | Phosphorylation | Modulates transcriptional activity; kinase(s) not fully characterized |
| Glu411 | Polyglutamylation (TTLL1/TTLL4) | Reversible; CCP1/CCP6 remove modification; function unclear |
| Lys32 | Ubiquitination → proteasomal degradation | SCF(BTRC) and FBXO32 E3 complexes target KLF4 for turnover |

The stability of KLF4 protein is tightly controlled; rapid ubiquitin-proteasome turnover restricts KLF4 to specific cellular contexts where upstream signals suppress degradation.

---

## Function

### Epithelial differentiation — gut

KLF4 is highly expressed in differentiated intestinal epithelial cells (the name GKLF reflects this enrichment). Knockout of *Klf4* in mice causes a ~90% reduction in goblet cell numbers in the colon and loss of normal goblet cell morphology, with absent expression of the mucin marker Muc2. The authors concluded that *Klf4* is required for terminal differentiation of goblet cells in the colon — the first in-vivo evidence for KLF4 as a differentiation factor [^katz2002].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (KLF4 expressed in human colon epithelium; GC-rich motif binding conserved) |
| Phenotype conserved in humans? | partial (KLF4 silencing in human colorectal cancer correlates with loss of differentiated phenotype) |
| Replicated in humans? | no direct genetic knockout; human cancer data supports the direction |

#gap/needs-human-replication — direct human genetic evidence for KLF4 gut-differentiation function is absent; inferential from cancer correlations.

### Epithelial differentiation — skin barrier

*Klf4*-null mice die shortly after birth due to failure to establish a functional epidermal permeability barrier. Despite grossly normal epidermal architecture, the cornified envelope — the terminal differentiation product that forms the physical barrier — is defective. This indicates KLF4 governs late-stage keratinocyte differentiation independently of upstream structural assembly [^segre1999].

The skin and gut phenotypes together establish KLF4 as a **master regulator of terminal epithelial differentiation** across tissue types. #gap/needs-replication — independent knockout models in skin with mechanistic dissection are limited.

### Cell-cycle arrest

KLF4 (as mouse GKLF) was cloned from a cDNA library of growth-arrested NIH 3T3 fibroblasts. GKLF mRNA is highest in quiescent cells and nearly undetectable in exponentially proliferating cells; constitutive expression of GKLF inhibits DNA synthesis [^shields1996]. KLF4 represses genes driving cell cycle entry (including *Cyclin D1* and *Cyclin B1*) and upregulates the CDK inhibitor *p21* (CDKN1A). This growth-arrest activity is mechanistically connected to its epithelial differentiation function: differentiated intestinal cells are non-proliferating, and KLF4 enforces both states coordinately.

### TGFβ-pathway regulation

KLF4 interacts with the TGFβ signaling axis: TGFβ-mediated growth arrest in some epithelial cell contexts is partially KLF4-dependent, and KLF4 can regulate SMAD target gene promoters. #gap/unsourced — the specific mechanistic papers for TGFβ/KLF4 cooperation have not been cross-checked against primary sources on this page. A citation from primary studies (not reviews) is needed.

---

## Role in reprogramming

### The OSKM discovery

In 2006, Takahashi and Yamanaka showed that introducing four transcription factors — OCT4, SOX2, KLF4, and c-MYC (OSKM) — into mouse fibroblasts generates induced pluripotent stem cells (iPSCs) by erasing cell-type identity and restoring an embryonic-like epigenetic state [^takahashi2006]. KLF4 is the "K" in the OSKM acronym; its inclusion alongside OCT4 and SOX2 is essential for reprogramming efficiency. The human iPSC field followed within months (Thomson group used OCT4, SOX2, NANOG, LIN28 instead of KLF4/c-MYC, confirming that KLF4 is one but not the only route to pluripotency).

### Pioneer-factor activity on closed chromatin

A critical property of KLF4 relevant to reprogramming is its **pioneer-factor capacity**: it can bind partial DNA motifs displayed on nucleosome surfaces rather than requiring pre-opened chromatin. Soufi et al. showed that OCT4, SOX2, KLF4, and c-MYC bind partial consensus sequences on nucleosomes, enabling them to initiate access to closed heterochromatin regions during the earliest hours of reprogramming [^soufi2015]. KLF4's zinc-finger domain interacts with the GC-motif half-site exposed on the nucleosome dyad, and cooperates with OCT4 at composite OCT4-KLF4 motifs on these nucleosomal surfaces. This pioneer activity is distinct from how most transcription factors work (which require pre-existing open chromatin) and is mechanistically essential for overcoming the epigenetic barrier of differentiated cell identity.

| Dimension | Status |
|---|---|
| Pioneer-factor mechanism conserved in humans? | yes (Soufi 2015 was performed in human BJ fibroblasts) |
| Nucleosome-binding biochemistry characterized? | yes (EMSA, DNase footprinting, ChIP-seq, and structural modeling in Soufi 2015; no crystal structure reported) |
| Replicated independently? | partial — multiple labs have confirmed KLF4 OSKM chromatin binding; specific partial-motif mechanism from Soufi 2015 not independently replicated at same resolution |

### Partial reprogramming and aging

In **partial reprogramming** protocols designed to reverse epigenetic aging without inducing pluripotency, KLF4 is retained in most systems:

- **OSKM cyclic** (Ocampo 2016, Belmonte group): cyclic 2d-on/5d-off OSKM expression in progeria mice extended lifespan and ameliorated aging hallmarks; KLF4 included as one of the four factors. See [[processes/partial-reprogramming]] (verified) for full detail.
- **OSK without c-MYC** (Lu 2020, Yang 2023, Sinclair group): the Sinclair laboratory's preferred partial-reprogramming system drops c-MYC (to reduce oncogenic risk) but retains KLF4 as one of the three factors alongside OCT4 and SOX2. AAV2 polycistronic delivery of OSK to retinal ganglion cells reversed epigenetic aging markers and restored visual acuity in 11-month-old mice and in a glaucoma model [^lu2020]; the ICE model demonstrated that OSK can reverse up to 57% of artificially accelerated epigenetic aging (across four mouse DNAm clocks) [^yang2023].

The retention of KLF4 in the OSK subset (rather than, say, OS without K) reflects its distinct pioneer chromatin-binding activity: OCT4 and SOX2 alone bind open chromatin more readily, but KLF4 extends access to repressed or aged chromatin domains. The TET1/TET2 DNA demethylase dependence of the OSK mechanism (Lu 2020) is consistent with KLF4 pioneering access to hypermethylated loci that have drifted with age, allowing TET-mediated demethylation to restore youthful CpG patterns.

See [[processes/partial-reprogramming]] (verified) and [[hypotheses/information-theory-of-aging]] (verified) for the full experimental and theoretical context. The aging-relevance claims for KLF4 specifically are indirect — no study has examined what happens to KLF4 expression or activity with age in somatic tissues, nor whether KLF4 is the rate-limiting factor in OSK reprogramming efficiency. #gap/needs-replication #gap/unsourced — KLF4-specific contribution within OSK has not been dissected in the aging context.

---

## Aging relevance

KLF4's connections to aging biology are primarily **indirect via its role as a reprogramming factor** rather than direct evidence for KLF4 activity changing with age in somatic tissues:

1. **Epigenetic rejuvenation via OSK**: KLF4 is constitutively required in the OSK partial-reprogramming formulas that reverse epigenetic aging in mouse models: AAV2-OSK restored vision in aged mice (Lu 2020 [^lu2020]); OSK reversed ICE-accelerated DNAm age by up to 57% (Yang 2023 [^yang2023]). This makes KLF4 directly load-bearing for the [[hypotheses/information-theory-of-aging]] (verified) intervention strategy.

2. **Stem-cell maintenance**: KLF4 is required for maintenance of ground-state pluripotency in embryonic stem cells (ESCs), where it cooperates with OCT4 and NANOG to reinforce the pluripotency network. While KLF4 is not normally expressed in adult somatic stem cells, its activity in reprogramming models is relevant to understanding how aged stem cell pools might be rejuvenated.

3. **Senescence context**: KLF4 has been reported to be upregulated during some forms of cellular senescence, possibly contributing to the SASP (senescence-associated secretory phenotype) via NF-κB pathway modulation. This is contested and requires more targeted evidence. #gap/contradictory-evidence #gap/unsourced — a direct primary-source citation for KLF4 upregulation in senescence is needed.

4. **Epigenetic silencing increases with age?**: KLF4 promoter hypermethylation is observed in multiple cancer types. Whether age-related drift in CpG methylation contributes to KLF4 silencing in normal somatic tissues (analogous to its cancer-associated silencing) is unknown. #gap/no-mechanism #gap/unsourced

---

## Regulation

KLF4 protein levels are controlled at multiple levels:

- **Transcriptional**: KLF4 is induced by growth arrest, confluency, and differentiation signals; repressed by mitogenic signals and Wnt/β-catenin activation in some contexts.
- **Post-translational**: SCF(BTRC) and FBXO32 E3 ubiquitin ligase complexes ubiquitinate Lys32, targeting KLF4 for proteasomal degradation. This restricts KLF4 accumulation during active cell proliferation.
- **Epigenetic**: KLF4 promoter CpG methylation silences expression in many cancer cell lines and in some normal tissues; DNMT1 overexpression silences KLF4 transcriptionally in pancreatic cancer cells [^xie2017].
- **MicroRNA**: miR-21, miR-143, and miR-145 have been reported to target KLF4 3' UTR in various cell types, linking KLF4 levels to miRNA networks involved in stem-cell and cancer biology. #gap/unsourced — miRNA regulation citations not cross-checked against primary sources.

---

## Disease associations

### Tumor suppressor function — gastrointestinal cancers

KLF4 acts as a **tumor suppressor in colorectal and gastric cancers**. Promoter hypermethylation silences KLF4 expression in a substantial fraction of primary colorectal cancers, and KLF4 loss correlates with more advanced tumor stage and worse prognosis. Epigenetic inactivation by DNMT1-mediated promoter methylation has been demonstrated in pancreatic cancer, where it promotes dedifferentiation toward a more stem-like state [^xie2017]. A similar mechanism operates in urothelial cancer, where KLF4 hypermethylation associates with tumor progression and early recurrence [^li2014].

The tumor-suppressor activity is mechanistically linked to KLF4's cell-cycle arrest function (p21 induction, cyclin repression) and its enforcement of differentiation: loss of KLF4 allows cells to re-enter the cell cycle and escape epithelial identity.

### Oncogenic function — squamous and other cancers

In contrast to gastrointestinal contexts, KLF4 can act as an **oncogene** in squamous cell carcinomas and some breast cancers, where it promotes cell survival and inhibits apoptosis. The mechanistic basis for this context-dependence is not fully characterized but likely involves differential co-factor availability, promoter selectivity, and interplay with the Wnt and TGFβ pathways. #gap/no-mechanism — the molecular switch determining whether KLF4 acts as tumor suppressor vs. oncogene in a given cell type is not resolved.

---

## Key interactors

| Interactor | Interaction type | Functional context |
|---|---|---|
| [[oct4]] (OCT4/POU5F1) | Physical; cooperative DNA binding at composite OCT4-KLF motifs | Reprogramming pioneer activity; pluripotency network |
| [[sox2]] | Physical; co-occupancy of reprogramming target loci | Reprogramming; pluripotency |
| [[c-myc]] | Fourth OSKM factor; non-direct interaction | Reprogramming efficiency; excluded from safer OSK protocols |
| CTBP1 | Recruits co-repressor complex | KLF4 transcriptional repression function |
| MBD3 | NuRD complex component | Repression; DNA methylation reading |
| SCF(BTRC) / FBXO32 | E3 ubiquitin ligases | Proteasomal degradation of KLF4 |

---

## Cross-references

| Entity | Relationship |
|---|---|
| [[processes/partial-reprogramming]] (verified) | KLF4 is one of three factors in OSK and all four in OSKM; central to the intervention's chromatin-opening mechanism |
| [[hypotheses/information-theory-of-aging]] (verified) | OSK (including KLF4) is the proposed intervention to restore epigenetic information; Lu 2020 and Yang 2023 verified there |
| [[oct4]] (planned stub) | OCT4 is KLF4's primary binding partner at composite motifs during reprogramming |
| [[sox2]] (planned stub) | SOX2 cooperates with OCT4 and KLF4 at reprogramming loci |
| [[c-myc]] (planned stub) | Fourth OSKM factor; excluded from OSK protocols due to oncogenic risk |
| [[epigenetic-alterations]] | The hallmark KLF4 targets in OSK-mediated partial reprogramming; DNA methylation drift at KLF4-bound loci |
| [[cellular-senescence]] | KLF4 reportedly upregulated in some senescent cells; contested; requires primary citation |
| [[tgf-beta-pathway]] (stub) | KLF4 integrates TGFβ-mediated growth-arrest signals in epithelial cells |
| [[wnt-pathway]] (stub) | Wnt/β-catenin represses KLF4 in some contexts, creating a proliferation/differentiation toggle |

---

## Limitations and gaps

#gap/unsourced — KLF4's specific contribution to OSK aging-reversal (separate from OCT4/SOX2 contributions) has not been mechanistically dissected in an aging context; KLF4-specific claims here are inferential from reprogramming biology.

#gap/unsourced — TGFβ pathway regulation by KLF4 section needs primary-source citations, not reviews.

#gap/unsourced — KLF4 upregulation in cellular senescence claim needs a primary citation with n, p, and model specified.

#gap/unsourced — microRNA regulation of KLF4 claims need primary-source citations.

#gap/no-mechanism — the molecular basis for KLF4's context-dependent tumor-suppressor vs. oncogene activity is unresolved; no clean mechanistic model exists.

#gap/needs-human-replication — all direct evidence for KLF4's role in epigenetic rejuvenation (via OSK) comes from mouse models; no human partial-reprogramming data exists.

#gap/needs-replication — KLF4 pioneer-factor partial-motif mechanism (Soufi 2015 Cell) has not been independently replicated at the same structural resolution.

GenAge status confirmed 2026-05-05: KLF4 returns no results in the GenAge human database search (genomics.senescence.info). The `genage-id` frontmatter field is correctly omitted; KLF4 is not a GenAge-listed aging gene.

---

## Footnotes

[^shields1996]: doi:10.1074/jbc.271.33.20009 · in-vitro (cloning + expression analysis) · n=N/A · model: NIH 3T3 mouse fibroblasts (functional assays); mouse colon tissue (expression) · Shields JM, Christy RJ, Yang VW · J Biol Chem 1996 · 649 citations; citation_percentile=100 · cloned mouse GKLF as growth-arrest-induced zinc-finger TF from NIH 3T3 cDNA library; identified 3 C2H2 zinc fingers (mouse protein 483 aa, 53 kDa); GKLF mRNA enriched in colon, distal SI, testis; constitutive GKLF expression inhibits DNA synthesis in COS-1 cells · archive: downloaded (hybrid OA)

[^katz2002]: doi:10.1242/dev.129.11.2619 · in-vivo (conditional knockout, mouse) · n=N/A (tissue histology, semi-quantitative) · model: Klf4−/− Mus musculus · Katz JP et al., Development 2002 · 577 citations; citation_percentile=100 · ~90% reduction in colon goblet cells; absent Muc2 expression; first in-vivo evidence for Klf4 as terminal-differentiation factor · archive: not_oa (no local PDF)

[^segre1999]: doi:10.1038/11926 · in-vivo (knockout, mouse) · n=N/A · model: Klf4−/− Mus musculus (neonatal lethal) · Segre JA, Bauer C, Fuchs E · Nature Genetics 1999 · 774 citations; citation_percentile=100 · Klf4-null mice die shortly after birth due to defective epidermal permeability barrier; cornified envelope failure without gross structural epidermal defect · archive: not_oa (no local PDF)

[^takahashi2006]: doi:10.1016/j.cell.2006.07.024 · in-vitro (fibroblast reprogramming) · n=N/A (colony formation) · model: Mus musculus embryonic and adult fibroblasts (MEFs + tail-tip fibroblasts; Fbx15βgeo/βgeo background) · Takahashi K, Yamanaka S · Cell 2006 · 26,108 citations; citation_percentile=100; FWCI=265 · OCT4+SOX2+KLF4+c-MYC sufficient to induce iPSC formation; founding OSKM paper; Nanog dispensable · archive: downloaded (bronze OA)

[^soufi2015]: doi:10.1016/j.cell.2015.03.017 · in-vitro (ChIP-seq, MNase-seq, EMSA, DNase footprinting, structural modeling) · n=N/A (genomic) · model: human BJ fibroblasts (OSKM reprogramming, 48h); HEK293 cells · Soufi A, Fernandez Garcia M, Jaroszewicz A, Osman N, Pellegrini M, Zaret KS · Cell 161:555–568, 2015 · 794 citations; citation_percentile=100; FWCI=31.8 · OCT4/SOX2/KLF4 (not c-Myc) bind partial motifs on nucleosome surfaces; 65% of KLF4 in-vivo targets enriched for nucleosomes; KLF4 targets hexameric partial motif (lacking last 3 nt of canonical 9-mer) at nucleosome-enriched sites; KLF4 binding site close to nucleosome dyad axis; no crystal structure reported — structural analysis based on existing PDB structures and modeling · archive: downloaded (bronze OA)

[^lu2020]: [[studies/lu-2020-osk-vision-restoration]] · in-vivo (AAV2-OSK intravitreal delivery to retinal ganglion cells) · model: C57BL6/J Mus musculus (optic nerve crush model; vision restoration experiments in 3- and 11-month-old mice; systemic safety tested in 5- and 20-month-old mice) · doi:10.1038/s41586-020-2975-4 · local PDF available · 771 citations; citation_percentile=100; FWCI=113 · OSK (KLF4 included; c-Myc excluded) restored youthful DNA methylation, RGC transcriptome, and visual acuity; TET1/TET2 required; polycistronic AAV2 required (monocistronic delivery ineffective); Sinclair group

[^yang2023]: [[studies/yang-2023-epigenetic-information-loss]] · in-vivo (ICE mouse model + OSK reversal) · model: C57BL6/J (ICE DSB-induction system; 4–6 months old at I-PpoI induction; primary phenotypic endpoints assessed ~10 months post-treatment, animals ~14–16 months old) · doi:10.1016/j.cell.2022.12.027 · local PDF available · 560 citations; citation_percentile=100; FWCI=108 · OSK reversed ICE-accelerated DNAme age by up to 57% (across four mouse epigenetic clocks); KLF4 included in OSK formula; Sinclair group

[^xie2017]: doi:10.1158/1078-0432.CCR-17-0387 · in-vitro + in-vivo (pancreatic cancer cells; xenograft) · model: human pancreatic cancer cell lines (SW1990, PANC-1) + nude mouse xenografts · Xie VK et al., Clin Cancer Res 2017 · 53 citations · DNMT1 overexpression silences KLF4 via promoter hypermethylation → dedifferentiation; DIM/miR-152 axis restores KLF4 · archive: pending download

[^li2014]: doi:10.1016/j.juro.2013.08.087 · observational (tissue microarray + patient cohort) · n=155 patients (nonmuscle invasive bladder cancer) · model: human urothelial tissue · Li H et al., J Urology 2014 · 50 citations · KLF4 promoter hypermethylation in urothelial cancer; decreased expression correlated with recurrence · archive: not_oa (no local PDF)
