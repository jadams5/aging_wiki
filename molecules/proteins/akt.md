---
type: protein
aliases: [PKB, protein kinase B, PKBα, AKT1, AKT serine/threonine kinase 1]
uniprot: P31749
ncbi-gene: 207
hgnc: 391
mouse-ortholog: Akt1
ensembl: ENSG00000142208
key-domains: [PH-domain, kinase-domain, hydrophobic-motif]
key-ptms: [Thr308-phosphorylation, Ser473-phosphorylation]
pathways: ["[[pi3k-akt-pathway]]", "[[insulin-igf1]]", "[[mtor]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[cellular-senescence]]", "[[loss-of-proteostasis]]"]
sens-categories: []
genage-id: null
druggability-tier: 1
caused-by: []
causes: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Brunet 1999 (10.1016/S0092-8674(00)80595-4) and Hertweck 2004 (10.1016/s1534-5807(04)00095-4) verified against local PDFs end-to-end. Datta 1997 (10.1016/s0092-8674(00)80405-5) confirmed against local PDF (BAD Ser136 claim correct). Sarbassov 2005 not-oa; Ser473/rictor claim cross-confirmed via verified rictor.md. Coffer 1991, Bellacosa 1991, Alessi 1996 all not-oa/no-DOI; founding identity and PDK1-Thr308 claims unverifiable against full text. Canonical-DB identity fields (UniProt P31749, P31751, Q9Y243; NCBI Gene 207; HGNC 391) not independently re-verified against databases."
---

# AKT (Protein Kinase B / PKB)

AKT — also called Protein Kinase B (PKB) — is a serine/threonine kinase and the central effector of [[pi3k-akt-pathway|PI3K signaling]]. It integrates growth-factor and insulin inputs to drive cell survival, proliferation, glucose uptake, and protein synthesis. In the aging context, AKT sits at the convergence of [[insulin-igf1]] / [[mtor]] / [[ampk]] signaling: hyper-activation is associated with cancer and metabolic disease, while partial genetic reduction of AKT activity (particularly in invertebrate models) extends lifespan via de-repression of [[foxo]] transcription factors.

## Identity

- **UniProt:** P31749 (AKT1_HUMAN) — canonical isoform; 480 amino acids
- **NCBI Gene:** 207 (AKT1); HGNC: 391
- **Gene symbol:** AKT1 (HGNC); aliases PKB, PKBα, RAC-PK-alpha
- **Mouse ortholog:** Akt1 (one-to-one; ~98% sequence identity at protein level)
- **Paralog note:** `[[akt]]` is the canonical AKT1 page. AKT2 and AKT3 are handled as separate entries when seeded; see Paralogs section below.

## Paralogs — three mammalian AKT isoforms

Mammals express three closely related AKT paralogs with distinct tissue distributions:

| Isoform | Gene | UniProt | Length (aa) | Expression pattern | Aging/metabolic relevance |
|---|---|---|---|---|---|
| AKT1 (PKBα) | AKT1 | P31749 | 480 | Ubiquitous | Survival/proliferation; role in [[cellular-senescence]] via p21/[[mdm2]] |
| AKT2 (PKBβ) | AKT2 | P31751 | 481 | High in liver, skeletal muscle, adipose | Primary isoform for insulin-stimulated [[glut4]] translocation / glucose homeostasis |
| AKT3 (PKBγ) | AKT3 | Q9Y243 | 479 | Highest in brain; testis | Neural growth; limited metabolic role |

All three share the same domain architecture and dual-phosphorylation activation mechanism (Thr308 equivalent + Ser473 equivalent). Substrate specificity is largely overlapping; isoform differences arise mainly from tissue distribution and subcellular localization.

## Domain organization

AKT1 has three principal regions:

| Domain | Residues (approx.) | Function |
|---|---|---|
| PH domain (Pleckstrin Homology) | 1–110 | Binds PIP3 (phosphatidylinositol-3,4,5-trisphosphate) at the plasma membrane; required for membrane recruitment and activation |
| Kinase domain | ~150–408 | Catalytic; contains activation-loop Thr308 |
| C-terminal regulatory / hydrophobic motif | ~409–480 | Contains Ser473 in the hydrophobic motif; phosphorylation of Ser473 by mTORC2 stabilizes the active conformation |

## Activation mechanism — two-step phosphorylation

AKT activation requires sequential events at the plasma membrane [^alessi1996] [^sarbassov2005]:

1. **PI3K generates PIP3.** Growth-factor receptor activation (e.g., insulin/IGF-1 → IRS-1/2 → p85/p110 PI3K) converts PIP2 to PIP3 at the inner plasma membrane leaflet. PTEN is the principal PIP3 phosphatase and opposes this step (see [[pi3k-akt-pathway]]).

2. **PH domain binds PIP3.** The PH domain of cytosolic, inactive AKT binds PIP3 with high affinity, recruiting AKT to the membrane and inducing a conformational change that partially exposes the activation loop.

3. **PDK1 phosphorylates Thr308.** 3-phosphoinositide-dependent protein kinase-1 (PDK1), itself recruited to membranes via its own PH domain, phosphorylates AKT at Thr308 in the kinase activation loop [^alessi1996]. This is required but not sufficient for full activation.

4. **mTORC2 phosphorylates Ser473.** The mTOR-containing complex mTORC2 (containing [[rictor]]) phosphorylates AKT at Ser473 in the hydrophobic motif [^sarbassov2005]. Full, dual-phosphorylated AKT shows substantially higher kinase activity toward some substrates (e.g., FoxO family members) than Thr308-only phospho-AKT. Sarbassov et al. 2005 demonstrated this by RNA-interference depletion of rictor, which selectively abolished Ser473 phosphorylation while leaving Thr308 intact.

5. **Cytosolic AKT dissociates** and phosphorylates substrates throughout the cell.

**Deactivation:** PP2A and PHLPP phosphatases dephosphorylate Thr308 and Ser473 respectively to return AKT to the basal state.

## Consensus substrate motif

AKT preferentially phosphorylates serine or threonine residues in the motif **R-X-R-X-X-S/T-Φ** (where Φ is a hydrophobic residue), also written as the Basophilic Optimal Motif. The Arg residues at −3 and −5 are critical for recognition.

## Key substrates and downstream effects

| Substrate | AKT site | Consequence | Aging/pathway link |
|---|---|---|---|
| [[bad]] | Ser136 | 14-3-3 sequestration → BCL-2/BCL-xL freed → survival | Verified on [[bad]] (Datta 1997) [^datta1997] |
| [[mdm2]] | Ser166 / Ser186 | Nuclear translocation → [[p53]] ubiquitination → p53 degradation | Reduces p53-driven arrest and senescence [^pi3k-akt-verified] |
| TSC2 (in [[tsc1-tsc2]]) | Thr1462 | Inhibits TSC1/2 GAP activity → Rheb-GTP maintained → [[mtor|mTORC1]] active | Direct link to nutrient sensing / anabolic program |
| FoxO1/3/4 (FOXO transcription factors) | Thr32/Ser253 (direct Akt sites on FoxO3a/FKHRL1); Ser315 phosphorylated in cells but not directly by Akt in vitro (indirect, via Akt-activated kinase) | Nuclear export → [[foxo]]-target genes repressed (including longevity genes, antioxidants, cell-cycle arrest genes); 14-3-3 binding mediated by pThr32 and pSer253, not pSer315 | Core mechanism of IIS longevity extension [^brunet1999] |
| GSK3β | Ser9 | Inhibitory phosphorylation → GSK3β inactivated → glycogen synthesis promoted; also reduces tau hyperphosphorylation | Metabolic and neurodegeneration relevance |
| [[caspase-9]] | Ser196 | Inhibitory → apoptosis suppressed | Verified on [[caspase-9]] (Cardone 1998; not_oa) |
| AS160 / TBC1D4 | Thr642 | Inactivates RAB-GAP → RAB10 active → [[glut4]] vesicle fusion → glucose uptake | Insulin signaling; AKT2-dominant in muscle/fat |
| eNOS | Ser1177 | Activates eNOS → NO production → vascular function | Cardiovascular aging relevance |

## AKT and the FoxO/longevity axis

The best-characterized longevity-relevant function of AKT is phosphorylation and nuclear exclusion of FoxO (FOXO in vertebrates; DAF-16 in *C. elegans*) transcription factors [^brunet1999]:

- Active AKT directly phosphorylates FoxO3a (FKHRL1) at Thr32 and Ser253; these two sites create 14-3-3 binding motifs that retain FoxO in the cytoplasm. Ser315 is also phosphorylated in cells (contributing to the SDS-PAGE mobility shift) but is not directly phosphorylated by Akt in vitro and does not contribute to 14-3-3 binding [^brunet1999].
- FoxO exclusion suppresses transcription of stress-resistance and longevity genes (antioxidants, proteostasis factors, cell-cycle inhibitors).
- Conversely, reduced IIS signaling (from low insulin/IGF-1 signaling) allows nuclear DAF-16/FoxO accumulation and lifespan extension. In *C. elegans*, this effect is driven predominantly by SGK-1 loss rather than akt-1/akt-2 reduction per se (see C. elegans lifespan evidence below).

**C. elegans lifespan evidence.** Hertweck et al. (2004) showed that **SGK-1** — not AKT-1 or AKT-2 — is the critical kinase in the worm AKT/PKB complex for control of life span and stress response [^hertweck2004]. Loss of *sgk-1* alone extended mean adult lifespan by ~63% at 25°C (wild-type 14.7±0.3d; *sgk-1* 24.0±0.4d; p<0.0001; n=147). By contrast, loss of *akt-1* alone had no significant effect on longevity (p=0.1642; n=100), and loss of *akt-2* alone was also non-significant (p=0.3717; n=101). The *akt-1; akt-2* double mutant showed only a weak ~19% extension (p=0.0005; n=132). SGK-1 forms a trimeric complex with AKT-1 and AKT-2 that is phosphorylated by PDK-1; all three kinases can phosphorylate DAF-16 directly. The paper also identifies a second branch of DAF-2 signaling to DAF-16 that is independent of AKT-1/AKT-2/SGK-1. #gap/needs-human-replication

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | IIS → AKT → FoxO axis conserved from worm to human; FOXO3 SNP associated with human longevity |
| Phenotype conserved in humans? | partial | FOXO3 Thr32 homologous phospho-site confirmed; direct lifespan genetics in humans not testable |
| Replicated in humans? | in-progress | FOXO3A GG genotype associated with longevity (Willcox 2008 n=615, OR 2.75 — verified on [[pi3k-akt-pathway]]); mechanistic link to AKT activity not directly measured in humans |

## AKT and senescence

AKT activity intersects with [[cellular-senescence]] through two opposing routes:

1. **Anti-senescent (survival):** AKT phosphorylates MDM2 → p53 degradation → reduced p53-driven senescence induction. AKT also phosphorylates [[caspase-9]] Ser196 (inhibitory), and [[bad]] Ser136, broadly suppressing apoptotic/senescent programs.

2. **Pro-senescent (via mTORC1):** Sustained AKT → TSC2 inhibition → mTORC1 activation → S6K1 / 4E-BP1 phosphorylation → enhanced protein synthesis and SASP amplification. mTORC1-driven SASP reinforcement is a recognized mechanism in OIS (oncogene-induced senescence) contexts (see [[mtor]], [[s6k1]], [[sasp]]). #gap/needs-replication for the specific AKT→mTOR→SASP causal chain in human senescent cells.

## Cancer context

AKT is one of the most frequently activated oncoproteins in human cancer. Mechanisms include:

- **PIK3CA gain-of-function mutations** (upstream PI3K activation) — in ~30–50% of some cancer types (breast, endometrial, colorectal) per Vasan & Cantley 2022 (verified on [[pi3k-akt-pathway]]).
- **PTEN loss-of-function** (opposing phosphatase deleted) — common in glioblastoma, prostate, endometrial cancers.
- **AKT1 E17K hotspot mutation** — constitutively localizes AKT to the membrane independent of PIP3; found in breast, colorectal cancers.
- **AKT1/2/3 amplification** — rarer; reported in gastric, ovarian.

The cancer frequency of PI3K/AKT pathway alterations underscores its centrality to cell survival, but also highlights the challenge of targeting AKT in aging (where partial suppression is desired, not abolition). #gap/contradictory-evidence — optimal level of AKT activity for longevity without cancer promotion is not established.

## Pharmacology

Three classes of AKT inhibitors have reached clinical development:

| Compound | Class | Selectivity | Clinical status (as of 2026) |
|---|---|---|---|
| MK-2206 | Allosteric | Pan-AKT | Phase II (multiple cancers); not advanced |
| Ipatasertib (GDC-0068) | ATP-competitive | Pan-AKT | Phase III (PAKT-B prostate, breast) |
| Capivasertib (AZD5363) | ATP-competitive | Pan-AKT | FDA-approved 2023 (+ fulvestrant for HR+/HER2− breast cancer with PIK3CA/AKT1/PTEN alteration) |

Note: Capivasertib received FDA approval in November 2023 for HR+/HER2− advanced breast cancer in patients with specific PI3K/AKT/PTEN pathway alterations, making it the first approved AKT inhibitor. #gap/long-term-unknown — long-term metabolic and aging-related safety of AKT inhibitors in humans (insulin resistance is a known on-target side effect).

**Aging-relevant pharmacology note.** No clinical program currently targets AKT for longevity or geroprotection. Partial loss-of-function approaches (worm/mouse genetics) cannot be straightforwardly translated to pharmacological AKT inhibition, which produces pan-AKT suppression, metabolic disruption (insulin resistance), and immune effects.

## Pathway membership and cross-references

- [[pi3k-akt-pathway]] — canonical node; AKT is the central effector
- [[insulin-igf1]] — upstream signaling cascade
- [[mtor]] — downstream; AKT → TSC2 → Rheb → mTORC1
- [[ampk]] — opposing nutrient sensor; AMPK → TSC2 (Thr1271/Ser1387) also inhibits mTORC1; AKT and AMPK act antagonistically on several shared substrates
- [[foxo]] — key downstream transcription factor family (stub)
- [[dna-damage-response]] — indirect: AKT phosphorylates MDM2 to suppress p53 under basal conditions; DDR disrupts AKT signaling in some contexts

## Limitations and gaps

- `#gap/needs-human-replication` — In *C. elegans*, lifespan extension via IIS reduction is mediated primarily by SGK-1 loss (not akt-1/akt-2 reduction per se); dAkt reduction in *Drosophila* is the cleaner AKT-specific invertebrate longevity observation, but no human genetic equivalent exists. FOXO3 longevity SNP is the closest human data.
- `#gap/needs-canonical-id` — AKT2 and AKT3 UniProt IDs (P31751, Q9Y243) are noted in the paralogs table but not independently checked against UniProt for this page.
- `#gap/dose-response-unclear` — Relationship between degree of AKT suppression and aging benefit vs metabolic harm in mammals is poorly characterized; mouse Akt1+/− heterozygotes do not show consistent lifespan extension across strains.
- `#gap/no-mechanism` — How AKT isoform-specific subcellular localization translates into differential substrate phosphorylation in aged vs young cells is not established.
- `#gap/unsourced` — AKT1 E17K hotspot prevalence in cancer; eNOS Ser1177 and GSK3β Ser9 phosphorylation claims need primary-source footnotes.

## Footnotes

[^coffer1991]: doi:10.1111/j.1432-1033.1991.tb16305.x · Coffer & Woodgett 1991 · EJBC · in-vitro cloning · model: cDNA expression · first description of PKB as a novel serine kinase related to PKA/PKC families; archive: not_oa
[^bellacosa1991]: doi:10.1126/science.254.5029.274 · Bellacosa et al. 1991 · Science · in-vitro oncogene · model: retroviral AKT oncogene; parallel independent AKT identification; archive: not_oa
[^alessi1996]: PMID:8978681 · Alessi et al. 1996 · EMBO J 15:6541 · in-vitro + in-vivo · model: rat adipocytes + Sf9 cells · mechanism of PKB activation by insulin/IGF-1; PDK1 phosphorylation of Thr308 established; no CrossRef DOI available (pre-DOI EMBO era)
[^sarbassov2005]: doi:10.1126/science.1106148 · Sarbassov et al. 2005 · Science · in-vitro (siRNA, HEK293) · mTORC2/rictor phosphorylates AKT Ser473; verified on [[rictor]]; archive: not_oa
[^datta1997]: doi:10.1016/s0092-8674(00)80405-5 · Datta et al. 1997 · Cell · n=multiple cell lines · in-vitro · p<0.01 · model: Balb/c 3T3 + HEK293 + COS-7 · AKT phosphorylates BAD Ser136 → 14-3-3 sequestration → survival; verified on [[bad]]; archive: downloaded
[^brunet1999]: doi:10.1016/S0092-8674(00)80595-4 · Brunet et al. 1999 · Cell 96:857–868 · in-vitro + transfection · p<0.01 (ANOVA) · model: 293T cells, CCL39 fibroblasts, primary cerebellar granule neurons, Jurkat T cells · Akt directly phosphorylates FKHRL1 (FoxO3a) at Thr32 and Ser253 (confirmed by phospho-specific antibodies and in vitro kinase assay); Ser315 is phosphorylated in cells but not directly by Akt in vitro (indirect, via Akt-activated kinase); pThr32 and pSer253 (not pSer315) create 14-3-3 binding motifs; phosphorylated FKHRL1 is retained in cytoplasm away from Fas ligand gene promoter; survival factor withdrawal → FKHRL1 dephosphorylation, nuclear translocation, Fas ligand induction, apoptosis · archive: downloaded
[^hertweck2004]: doi:10.1016/s1534-5807(04)00095-4 · Hertweck, Göbel & Baumeister 2004 · Dev Cell 6:577–588 · n=100–147 per strain · in-vivo · p<0.0001 (sgk-1 vs WT) · model: C. elegans N2 background · SGK-1 is the critical kinase in the AKT-1/AKT-2/SGK-1 trimeric PDK-1 complex for life span and stress resistance; sgk-1 loss alone extends mean lifespan ~63% (14.7→24.0d at 25°C); akt-1 or akt-2 loss alone does NOT significantly extend lifespan; all three kinases phosphorylate DAF-16 directly; a second DAF-2 branch independent of AKT-1/AKT-2/SGK-1 also signals to DAF-16 · archive: downloaded
[^pi3k-akt-verified]: See [[pi3k-akt-pathway]] (verified-partial) — MDM2 Ser166/Ser186 phosphorylation by AKT noted there; primary source verification of this specific claim pending
