---
type: protein
aliases: [serum/glucocorticoid regulated kinase 1, SGK, SGK-1, serum and glucocorticoid-regulated kinase 1]
uniprot: O00141
ncbi-gene: 6446
hgnc: 10810
mouse-ortholog: Sgk1
ensembl: ENSG00000118515
druggability-tier: 2
caused-by: []
causes: []
key-domains: [N-terminal-regulatory, kinase-domain, AGC-C-terminal, hydrophobic-motif]
key-ptms: [Thr256-phosphorylation, Ser422-phosphorylation, Ser78-phosphorylation]
pathways: ["[[insulin-igf1]]", "[[pi3k-akt-pathway]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
sens-categories: []
genage-id: null
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Hertweck 2004 lifespan claims verified against local PDF — all numerics confirmed (Table 2); Park 1999 phosphorylation-site and substrate-motif claims verified against local PDF (PMC download) — footnote cell-model corrected from CV-1/Xenopus to HEK293/Con8.hd6, Sgktide motif confirmed; Webster 1993, Kobayashi 1999, and Lang 2006 are not_oa — claims citing these three papers not verifiable against full text; canonical-DB identity fields (UniProt O00141, NCBI Gene 6446, HGNC 10810) pulled from UniProt REST API 2026-05-04 but not re-verified in this pass"
---

> Partial verification 2026-05-04 (claude): Hertweck 2004 and Park 1999 verified against local PDFs — all quantitative claims from these two sources confirmed and corrected. Three sources remain unverifiable (closed-access): Webster 1993 (`not_oa` — SGK discovery/glucocorticoid induction), Kobayashi 1999 (`not_oa` — Ser422/mTORC2 activation), Lang 2006 (`not_oa` — half-life ~30 min, ENaC/NEDD4-2/paralog expression profiles). Claims citing those three papers carry `#gap/no-fulltext-access` risk. Canonical-DB IDs not re-verified in this pass.

# SGK1 (Serum and Glucocorticoid-regulated Kinase 1)

SGK1 is an AGC-family serine/threonine kinase activated downstream of PI3K and PDK1/mTORC2. It is closely related to AKT in domain architecture and substrate consensus, and for years was treated as an AKT redundant. The critical reframing: in *C. elegans*, **SGK-1 — not AKT-1 or AKT-2 — is the dominant longevity kinase** in the insulin/IGF-1 signaling (IIS) pathway. Loss of *sgk-1* alone extends mean adult lifespan ~63%, while loss of *akt-1* or *akt-2* alone is not statistically significant [^hertweck2004]. This finding corrects a long-standing narrative that attributed IIS-longevity effects in worms primarily to the AKT orthologs.

In mammals, SGK1 is best characterized as a mineralocorticoid/glucocorticoid target that regulates epithelial sodium transport (via NEDD4-2/ENaC) and is implicated in hypertension, diabetic nephropathy, and metabolic disease — conditions tightly linked to aging.

## Identity

- **UniProt:** O00141 (SGK1_HUMAN)
- **NCBI Gene:** 6446
- **HGNC symbol:** SGK1
- **Mouse ortholog:** Sgk1
- **Length:** 431 amino acids (canonical isoform)
- **Family:** AGC kinase superfamily (same superfamily as AKT, S6K1, PDK1, PKA, PKC)
- **C. elegans ortholog:** SGK-1 (the longevity-relevant ortholog per Hertweck 2004)
- **Discovery:** Webster et al. 1993, cloned as a glucocorticoid-induced gene from rat mammary tumor cells [^webster1993]

## Paralogs — three mammalian SGK isoforms

| Isoform | Gene | UniProt | Length | Expression pattern | Notes |
|---|---|---|---|---|---|
| SGK1 | SGK1 | O00141 | 431 aa | Ubiquitous; highly induced by glucocorticoids, mineralocorticoids, serum, oxidative stress | Primary longevity-relevant isoform; short protein half-life (~30 min) |
| SGK2 | SGK2 | Q9HBY8 | 367 aa | Liver, kidney, pancreas | Constitutively active; not transcriptionally regulated by glucocorticoids |
| SGK3 (SGKL/CISK) | SGK3 | Q96BR1 | 431 aa | Ubiquitous | Contains PX domain; activated at endosomes; regulates hair follicle development |

SGK1 is the isoform most studied in aging contexts and the only one with a clear transcriptional induction program by aging-relevant stressors. #gap/needs-replication — whether SGK2 or SGK3 have independent longevity roles is not established.

## Domain organization

| Domain | Residues (approx.) | Function |
|---|---|---|
| N-terminal regulatory region | 1–97 | Contains a degradation signal (degron); N-terminal mitochondrial targeting sequence (~1–60); regulates protein stability (short half-life ~30 min at steady state) |
| Kinase domain | 98–355 | Catalytic Ser/Thr kinase; contains activation-loop Thr256; PIF-pocket (hydrophobic groove) docked by PDK1 |
| AGC-C-terminal / hydrophobic motif | 356–431 | Contains Ser422 in the canonical AGC hydrophobic motif (FPQFSY-like sequence); phosphorylation by mTORC2 stabilizes the active conformation |

**Key phosphorylation sites (UniProt O00141):**
- **Thr256** — activation-loop; phosphorylated by PDPK1 (PDK1); essential for activity [^park1999]
- **Ser422** — hydrophobic motif; phosphorylated by mTORC2; required for full kinase activity [^kobayashi1999]
- **Ser78** — phosphorylated by MAPK7 (ERK5); role in stress-responsive contexts
- Ser397, Ser401 — additional regulatory phosphosites (UniProt annotation)

Unlike AKT, SGK1 lacks a canonical PH domain and therefore does **not** directly bind PIP3 for membrane recruitment. Its activation is initiated by PI3K-generated PIP3 acting through PDK1, but membrane localization occurs via alternative mechanisms (e.g., protein-protein interactions, N-terminal amphipathic sequences).

## Activation cascade

The SGK1 activation cascade parallels AKT but uses the same upstream PI3K/PDK1/mTORC2 machinery through different substrate-docking contacts [^park1999] [^kobayashi1999]:

```
Growth factor / insulin / IGF-1
         ↓
    PI3K (p110/p85)
         ↓
    PIP3 generated at membrane
         ↓
    PDK1 recruited via PH domain
         ↓
    PDK1 phosphorylates SGK1 Thr256 (activation loop)
         ↓
    mTORC2 (rictor complex) phosphorylates SGK1 Ser422 (hydrophobic motif)
         ↓
    Fully active SGK1 (dual-phosphorylated)
         ↓
    Substrate phosphorylation: FoxO3, NEDD4-2, GSK3β, TSC2, NDRG1...
```

This is functionally parallel to the AKT activation cascade (Thr308/Ser473). Critically, both PDK1 and mTORC2 serve both AKT and SGK1. Inhibitors of PI3K, PDK1, or mTORC2 suppress both kinases simultaneously.

## Consensus substrate motif

SGK1 phosphorylates serine/threonine residues in the motif **R-X-R-X-X-S/T-Φ** — identical to the AKT consensus motif [^park1999]. The basic-residue requirement at positions -2/-3 and -5/-6 relative to the phospho-acceptor was established using synthetic peptide libraries (the optimal peptide "Sgktide" = KKRNRRLSVA). This shared consensus explains extensive substrate overlap between the two kinases. Many "AKT substrates" in the literature may in fact be dually phosphorylated by both AKT and SGK1, or may have been primarily SGK1 substrates in the experimental context used.

## Key substrates and downstream effects

| Substrate | SGK1 site | Consequence | Aging/pathway link |
|---|---|---|---|
| FoxO3a (FKHRL1) / DAF-16 | Thr32 equivalent | Nuclear export → FOXO target genes repressed | Core IIS/longevity axis; *sgk-1* LoF in worms de-represses DAF-16 → lifespan extension [^hertweck2004] |
| NEDD4-2 (NEDD4L) | Ser444 / Ser448 | Inhibitory; prevents NEDD4-2-mediated ubiquitination of ENaC → ENaC retained at apical membrane → Na+ reabsorption elevated | Hypertension / aldosterone-SGK1 axis; ENaC overactivation in aged kidney [^lang2006] |
| GSK3β | Ser9 | Inhibitory phosphorylation → GSK3β inactivated | Shared with AKT; glycogen synthesis, tau biology |
| TSC2 (in [[tsc1-tsc2]]) | Thr1462 equivalent | Inhibits TSC1/2 GAP → mTORC1 active | Shared with AKT; nutrient sensing convergence |
| NDRG1 | Thr346/Thr356/Thr366 | Promotes differentiation; suppresses metastasis | Cancer context; SGK1 overexpression in some carcinomas |
| MDM2 | Ser166 / Ser186 | Nuclear translocation → p53 destabilization | Shared with AKT; reduces p53-driven senescence |

**Note on FoxO phosphorylation:** SGK1 and AKT phosphorylate overlapping FoxO sites. In *C. elegans*, however, the functional data (Hertweck 2004) reveal that SGK-1 is the *dominant* kinase for DAF-16 regulation at the whole-organism lifespan level, even though AKT-1 and AKT-2 are also present in the worm and can phosphorylate DAF-16 in vitro. This suggests a quantitative dominance or context-specific activity of SGK-1 that cannot be inferred from in-vitro substrate assays alone.

## Transcriptional regulation — short half-life + inducibility

SGK1 is unusual among AGC kinases in being **transcriptionally regulated** on a short timescale. Key inducers include:

- **Glucocorticoids** — via glucocorticoid response element in the SGK1 promoter (the original discovery context) [^webster1993]
- **Mineralocorticoids** (aldosterone) — via mineralocorticoid receptor; major driver of renal ENaC trafficking
- **Serum / growth factors** — via IIS/PI3K; transcription upregulated in addition to post-translational activation
- **Oxidative stress, hypoxia, DNA damage** — stress-response induction
- **Hypertonicity / osmotic stress** — osmosensing program

Protein half-life is approximately **30 minutes** under basal conditions, due to ubiquitin-mediated proteasomal degradation involving NEDD4L and SYVN1 (HRD1) as E3 ligases [^lang2006]. This short half-life means SGK1 activity integrates over minutes, not hours — it functions as a rapid-response kinase, unlike the more constitutively active AKT.

#gap/needs-replication — The ~30 min half-life figure comes from biochemical studies in cell lines; in vivo half-life in aged tissues is not established.

## Aging context

### CRITICAL: SGK-1 is the dominant IIS longevity kinase in *C. elegans*

**This is the most aging-relevant finding on this page.** Hertweck et al. (2004) systematically dissected the contributions of *akt-1*, *akt-2*, and *sgk-1* to DAF-2/IIS-pathway longevity in *C. elegans* [^hertweck2004]:

| Genotype | Mean lifespan ± SEM (25°C) | p-value vs WT | n |
|---|---|---|---|
| Wild-type (N2) | 14.7 ± 0.3 days | — | 110 |
| *akt-1(ok525)* single mutant | 15.5 ± 0.4 days (NS) | p=0.1642 | 100 |
| *akt-2(ok393)* single mutant | 14.2 ± 0.3 days (NS) | p=0.3717 | 101 |
| *akt-1; akt-2(ok393)* double mutant | 17.5 ± 0.6 days (~19% extension) | p=0.0005 | 132 |
| **sgk-1(ok538)** single mutant | **24.0 ± 0.4 days (~63% extension)** | **p<0.0001** | **147** |

The *sgk-1* single-mutant lifespan extension is larger than the *akt-1; akt-2* double mutant — meaning SGK-1 alone contributes more to IIS-mediated aging than both AKT kinases combined. The paper also identifies a second DAF-2 signaling branch to DAF-16 that is independent of all three kinases (AKT-1, AKT-2, SGK-1).

**Mechanistic interpretation:** PDK-1 in *C. elegans* forms a trimeric kinase complex with AKT-1, AKT-2, and SGK-1. All three can phosphorylate DAF-16 (the FOXO ortholog) directly in vitro. The differential in-vivo longevity effect suggests SGK-1 has dominant access to DAF-16 in the tissues and developmental stages most important for lifespan determination — likely due to expression levels, subcellular localization, or substrate-docking affinity differences not captured in bulk biochemical assays.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | IIS → PDK1 → SGK1 → FoxO axis is fully conserved; FOXO3 longevity SNP data support the broader IIS-longevity axis in humans |
| Phenotype conserved in humans? | partial | No direct human genetic experiment testing SGK1 LoF on longevity; circumstantial: FOXO3A GG genotype associated with longevity (OR 2.75, Willcox 2008, verified on [[pi3k-akt-pathway]]) |
| Replicated in humans? | no | #gap/needs-human-replication — Human SGK1 LoF variants have not been identified in longevity cohorts |

**Narrative-correction note:** Before Hertweck 2004, the lifespan extension observed in *daf-2* (*C. elegans* insulin/IGF-1 receptor) mutants was widely attributed to AKT-1/AKT-2 as the key downstream kinases. This framing persisted in many reviews. The Hertweck finding repositions SGK-1 as the primary executioner of the IIS longevity signal at the level of DAF-16 phosphorylation. Pages [[akt]], [[insulin-igf1]], and [[pi3k-akt-pathway]] have been updated to reflect this; propagation to [[daf-2]] (when seeded) is required.

### Mammalian aging correlates

In mammals, SGK1 does not have a directly established longevity role equivalent to the worm data. However, several aging-relevant disease connections emerge [^lang2006]:

**Hypertension and aldosterone-SGK1-ENaC axis:**
- Aldosterone stimulates SGK1 transcription in principal cells of the renal collecting duct → SGK1 phosphorylates and inhibits NEDD4-2 → NEDD4-2 cannot ubiquitinate ENaC → ENaC accumulates at the apical membrane → increased Na+ reabsorption → hypertension.
- This axis is chronically activated in aged individuals with elevated aldosterone and correlates with increased cardiovascular risk. SGK1 inhibitors are under investigation as antihypertensive agents.

**Diabetic nephropathy:**
- SGK1 expression is elevated in diabetic kidney. Hyperglycemia and TGF-β both induce SGK1. SGK1 promotes fibronectin and collagen deposition (via NEDD4-2 / TGF-β downstream targets), contributing to glomerulosclerosis. #gap/needs-replication — causal vs associative in human diabetic nephropathy.

**Cancer and metabolic disease:**
- SGK1 is overexpressed in a subset of cancers (breast, endometrial, colorectal) and correlates with poor prognosis, likely via its shared AKT-like pro-survival substrate phosphorylations (FoxO, GSK3β, MDM2, BAD).
- In metabolic syndrome, SGK1 may contribute to insulin resistance by parallel activation of S6K1-type feedback via mTOR.

#gap/no-mechanism — Whether mammalian SGK1 activity level directly correlates with lifespan or biological aging rate (analogous to the worm finding) has not been tested in any model organism with a pharmacological or genetic intervention. The worm-to-mammal extrapolation remains a major gap.

## Comparison with AKT — similarities and divergences

| Feature | AKT | SGK1 |
|---|---|---|
| Membrane recruitment | PH domain → PIP3 direct binding | No PH domain; indirect; protein interactions |
| PDK1 phospho-site | Thr308 | Thr256 |
| mTORC2 phospho-site | Ser473 | Ser422 |
| Substrate consensus | R-X-R-X-X-S/T-Φ | R-X-R-X-X-S/T-Φ (identical) |
| Protein half-life | Hours (relatively stable) | ~30 min (rapidly turned over) |
| Transcriptional induction | Minimal; constitutively expressed | Strong; glucocorticoid/mineralocorticoid/stress-inducible |
| FoxO phosphorylation | Yes (AKT1/2/3 all active) | Yes; dominant in *C. elegans* lifespan context |
| NEDD4-2/ENaC regulation | Weak or absent | Primary kinase for renal ENaC trafficking |
| Longevity genetics (invertebrate) | akt-1 or akt-2 LoF alone not significant in worm | sgk-1 LoF +63% lifespan in worm (p<0.0001) |

## Pharmacology

**SGK1-selective inhibitor: GSK650394**

GSK650394 is a small-molecule ATP-competitive SGK1 inhibitor (IC50 ~62 nM for SGK1; selectivity over AKT ~10-fold) developed by GlaxoSmithKline. It has been used as a tool compound in cell culture to dissect SGK1 vs AKT contributions to substrate phosphorylation. #gap/long-term-unknown — no clinical development for aging or longevity indications; investigated for hypertension and oncology preclinically.

No SGK1-targeted drug is currently FDA-approved or in late-stage human trials for aging-related indications. The renal aldosterone-SGK1-ENaC axis has attracted interest for antihypertensive drug development. #gap/needs-replication — Preclinical SGK1 inhibitor longevity data in mammals does not yet exist.

**Note on pan-PI3K/PDK1/mTORC2 inhibitors:** Because SGK1 and AKT share upstream activation (PI3K → PDK1 + mTORC2), compounds like rapamycin (mTORC1-selective), Torin1 (mTORC1+mTORC2), or PDK1 inhibitors (GSK2334470) suppress both pathways simultaneously. Disentangling their relative contributions to aging effects of these interventions is an active area of investigation.

## Pathway membership and cross-references

- [[insulin-igf1]] — SGK1 is a key downstream effector of IIS; C. elegans longevity axis
- [[pi3k-akt-pathway]] — SGK1 is a parallel PI3K/PDK1/mTORC2 effector alongside AKT
- [[pdk1]] — the upstream activating kinase (Thr256)
- [[mtor]] — mTORC2 phosphorylates Ser422; mTORC1 may be downstream via TSC2/Rheb
- [[akt]] — the closest paralog; shares substrate consensus, upstream activators, and many substrates; see Hertweck 2004 longevity comparison above
- [[foxo3]] — key downstream transcription factor target (nuclear exclusion by SGK1 phosphorylation)
- [[daf-16]] — *C. elegans* FOXO ortholog; direct SGK-1 phosphorylation target per Hertweck 2004
- [[tsc1-tsc2]] — downstream; inhibitory SGK1 phosphorylation of TSC2 activates mTORC1
- [[nf-kb]] — indirect link via proinflammatory gene activation in the mineralocorticoid/aldosterone context

## Limitations and gaps

- `#gap/needs-human-replication` — The dominant longevity role of SGK-1 in *C. elegans* IIS has not been tested in mammals or humans. No SGK1 LoF human longevity cohort data exists.
- `#gap/no-mechanism` — Why SGK-1 is quantitatively dominant over AKT-1/AKT-2 for DAF-16 phosphorylation in *C. elegans* in vivo is mechanistically unresolved — expression levels, subcellular access, or substrate affinity differences are all candidates.
- `#gap/needs-replication` — SGK1-specific contributions to mammalian FoxO3 phosphorylation vs AKT-mediated FoxO3 phosphorylation in aged tissues have not been cleanly dissected.
- `#gap/dose-response-unclear` — GSK650394 efficacy vs SGK1 in vivo (aging or lifespan models) not established.
- `#gap/long-term-unknown` — Long-term SGK1 inhibition effects on mammalian lifespan or healthspan untested.
- `#gap/needs-canonical-id` — GenAge ID for SGK1 was not located during seeding (no confirmed HAGR entry); confirm on next lint pass.
- `#gap/needs-canonical-id` — SGK2 UniProt Q9HBY8 and SGK3 UniProt Q96BR1 not independently re-verified; flagged for next lint pass.

## Footnotes

[^webster1993]: doi:10.1128/mcb.13.4.2031 · Webster MK, Goya L, Ge Y, Maiyar AC, Firestone GL · Mol Cell Biol 13:2031–2040 (1993) · in-vitro + transcriptional analysis · model: rat mammary tumor cells (Con8) + glucocorticoid response · original cloning of SGK as glucocorticoid-induced serine kinase; named for serum + glucocorticoid inducibility · archive: not_oa #gap/no-fulltext-access (citation_percentile 100%; 425 citations)

[^park1999]: doi:10.1093/emboj/18.11.3024 · Park J, Leong ML, Buse P, Maiyar AC, Firestone GL, Hemmings BA · EMBO J 18:3024–3033 (1999) · in-vitro + transfection · model: HEK 293 cells + Con8.hd6 rat mammary tumor cells · established SGK as a target of the PI3K-stimulated signaling pathway; Thr256 identified as PDK1 phosphorylation site required for activation (T256A mutation abolishes kinase activity; PDK1 co-transfection causes 6-fold activation); Ser422 also required for full activation; Sgktide (KKRNRRLSVA) optimal substrate peptide; arginines at −2/−3 and −5/−6 required for substrate recognition · archive: local PDF confirmed (PMC1171384; citation_percentile 100%; 554 citations)

[^kobayashi1999]: doi:10.1042/bj3390319 · Kobayashi T, Cohen P · Biochem J 339:319–328 (1999) · in-vitro + cell studies · model: L6 myotubes + rabbit reticulocyte lysate · PDK1 and "PDK2" (later identified as mTORC2 component) activate SGK via Thr256 and Ser422 respectively; identified the hydrophobic motif requirement · archive: not_oa #gap/no-fulltext-access (citation_percentile 100%; 598 citations)

[^hertweck2004]: doi:10.1016/s1534-5807(04)00095-4 · Hertweck M, Göbel C, Baumeister R · Dev Cell 6:577–588 (2004) · n=110 (WT), 147 (sgk-1), 100 (akt-1), 101 (akt-2), 132 (akt-1;akt-2) · in-vivo · p<0.0001 (sgk-1 vs WT) · model: C. elegans N2 background, 25°C · CRITICAL: SGK-1 is the dominant longevity kinase in the DAF-2/IIS pathway; WT 14.7±0.3 d; sgk-1(ok538) 24.0±0.4 d (+63%, p<0.0001, n=147); akt-1(ok525) 15.5±0.4 d (p=0.1642 NS, n=100); akt-2(ok393) 14.2±0.3 d (p=0.3717 NS, n=101); akt-1;akt-2(ok393) 17.5±0.6 d (~19%, p=0.0005, n=132); PDK-1 forms trimeric complex with all three kinases; second DAF-2 branch to DAF-16 independent of AKT-1/AKT-2/SGK-1 confirmed · archive: local PDF verified 2026-05-04 

[^lang2006]: doi:10.1152/physrev.00050.2005 · Lang F, Böhmer C, Palmada M, Seebohm G, Strutz-Seebohm N, Vallon V · Physiol Rev 86:1151–1178 (2006) · review · model: mammalian epithelial/renal physiology · comprehensive review of SGK isoform (patho)physiology; SGK1-NEDD4-2-ENaC axis; hypertension; diabetic nephropathy; half-life ~30 min; paralog expression profiles · archive: not_oa #gap/no-fulltext-access (citation_percentile 100%; 683 citations)
