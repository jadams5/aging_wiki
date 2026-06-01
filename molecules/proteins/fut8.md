---
type: protein
aliases: [alpha-(1,6)-fucosyltransferase, alpha-1,6-fucosyltransferase, alpha1-6FucT, Fucosyltransferase 8, GDP-L-Fuc:N-acetyl-beta-D-glucosaminide alpha1,6-fucosyltransferase]
uniprot: Q9BYC5
ncbi-gene: 2530
hgnc: 4019
ensembl: ENSG00000033170
mouse-ortholog: Fut8
pathways: []
hallmarks: []
sens-categories: []
druggability-tier: 2
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[igg-fc-glycosylation]]"]
literature-checked-through: 2026-05-20
verified: true
verified-date: 2026-05-20
verified-by: claude
verified-scope: "Wang 2005 KO phenotype corrected: 'weeks of birth' → '~70% die within first 3 days of birth' per PDF (PNAS 102:15791); strain background (129SvJ × B6C3F1) added. Shields 2002 EC50 values (0.07–0.24 µg/ml defucosylated vs >10 µg/ml fucosylated) verified against PDF (Table II). Landini 2022 footnote: FUT8/FUT6 correctly noted as shared (not IgG-specific) loci per PDF. Yamane-Ohnuki 2004 (~100-fold ADCC) not verified — not_oa; claim tagged accordingly. Identity fields confirmed via UniProt REST API."
---

# FUT8 (alpha-1,6-fucosyltransferase)

FUT8 is the **sole human core α1,6-fucosyltransferase**, adding GDP-fucose in α1,6 linkage to the innermost GlcNAc of N-glycans. Approximately 90–95% of serum IgG carries core fucose. The small defucosylated fraction (~5–10%) has **dramatically enhanced binding to FcγRIIIA (CD16)** — up to 50-fold tighter (see [[igg-fc-glycosylation]]) — making FUT8 the primary engineering lever for next-generation therapeutic antibodies. For aging biology, FUT8 is less central than [[b4galt1]] or [[st6gal1]]: core fucosylation does not show the strong age-associated trajectory of galactosylation or sialylation, and the aging relevance is modest. FUT8's principal importance here is as the biochemical competitor of [[mgat3]]-mediated bisecting GlcNAc addition.

## Identity

- **UniProt:** Q9BYC5 (FUT8_HUMAN) — confirmed via UniProt REST API 2026-05-20
- **NCBI Gene:** 2530
- **HGNC:** 4019
- **Ensembl:** ENSG00000033170
- **Mouse ortholog:** Fut8
- **Length:** 575 amino acids (canonical isoform; longest of the FUT family)
- **EC number:** 2.4.1.68

## Enzymology

FUT8 is a type II single-pass transmembrane glycoprotein resident in the Golgi apparatus (trans cisternae). It catalyzes:

```
GDP-Fuc + GlcNAc(β1,4-GlcNAc-Asn) → Fuc(α1,6)-GlcNAc(β1,4-GlcNAc-Asn) + GDP
```

The acceptor is the core GlcNAc directly linked to Asn; the sugar transferred (L-fucose from GDP-Fuc) is added in α1,6 linkage. This is the **core fucosylation** reaction — distinguishable from antennary or Lewis-type fucosylation by other FUT enzymes.

**Structural constraint — mutual exclusion with bisecting GlcNAc:**
MGAT3-mediated addition of bisecting GlcNAc to the central mannose creates a steric block that **prevents FUT8 from accessing its substrate**. As a consequence, individual IgG Fc glycoforms are either core-fucosylated or bisected, but not both [^shields2002]. This mutual exclusion is the mechanistic basis for the inverse relationship between G0F/G1F/G2F and G0FB/G1FB/G2FB glycoform pairs observed in IgG glycome profiling.

**GDP-fucose substrate supply:**
FUT8 requires GDP-fucose as the activated sugar donor. GDP-fucose biosynthesis occurs via two pathways: (i) the de novo pathway from GDP-mannose; (ii) the salvage pathway from free fucose. Disruption of GDP-fucose biosynthesis (as in Lec13 CHO cells) also produces afucosylated IgG, providing an alternative engineering route to FUT8 knockout [^shields2002].

## Position in the IgG Fc glycosylation cascade

FUT8 acts at an early branch point in the [[igg-fc-glycosylation|Golgi processing cascade]], competing with MGAT3:

| Step | Enzyme | Product |
|---|---|---|
| 1–2 | MGAT1, MGAT2 | Biantennary complex-type scaffold |
| **3a** | **[[fut8]]** | **Core fucosylation → G0F scaffold** |
| **3b** | **[[mgat3]]** | **Bisecting GlcNAc → blocks FUT8 (mutually exclusive)** |
| 4 | [[b4galt1]] | Galactosylation |
| 5 | [[st6gal1]] | Sialylation |

## Aging relevance — modest

Core fucosylation of IgG is relatively **stable with age** compared to galactosylation and sialylation. The dominant age-associated glycome changes (G0 rise, G2 fall, sialylation loss) are driven by [[b4galt1]] and [[st6gal1]] decline, not FUT8. Some studies have noted a slight increase in defucosylation with age, but this is small compared to the galactosylation signal and not consistently replicated [^gudelj2018][^ruhaak2010]. FUT8 has no direct connection to estrogen signaling or the inflammaging feedback loop (which primarily operates through B4GALT1/ST6GAL1). For these reasons, FUT8 has an empty `hallmarks:` list and no link to [[chronic-inflammation]].

The GWAS literature (Wahl 2018, Landini 2022) does identify FUT8 as a locus for IgG fucosylation variation [^wahl2018][^landini2022], confirming its role in genetic control of IgG fucosylation — but this is a distinct biological question from aging trajectories.

## Therapeutic antibody engineering — the central FUT8 application

FUT8's primary clinical relevance is as the engineering target for **afucosylated (defucosylated) therapeutic monoclonal antibodies**. Core fucose on IgG sterically hinders FcγRIIIA binding; removing it yields dramatically enhanced ADCC via NK cells and macrophages [^shields2002].

**Yamane-Ohnuki et al. 2004** established the FUT8 KO CHO cell line platform (POTELLIGENT):
- Both FUT8 alleles were disrupted in CHO/DG44 cells
- Anti-CD20 IgG1 produced in these cells showed **~100-fold** enhanced ADCC vs the reference drug Rituxan (rituximab)
- Antigen binding and CDC (complement-dependent cytotoxicity) were unchanged [^yamane2004]

This work became the basis for commercially deployed defucosylated therapeutic antibodies:

| Drug | Target | Indication | Approval |
|---|---|---|---|
| Obinutuzumab (Gazyva) | CD20 | CLL, follicular lymphoma | FDA 2013 |
| Mogamulizumab (Poteligeo) | CCR4 | CTCL, ATLL | FDA 2018 (Japan 2012) |

Additional defucosylated antibodies are in clinical development. Multiple CHO-cell engineering platforms (POTELLIGENT; GlymaxX) enable commercial production.

**ADCC enhancement magnitude** varies by the FcγRIIIA polymorphism (Phe158 vs Val158 allele): both alleles benefit substantially, with the lower-affinity Phe158 allele showing a larger relative improvement [^shields2002]. The ~50-fold enhancement figure (from Shields 2002, Hu4D5 antibody assay) and the ~100-fold figure (from Yamane-Ohnuki 2004, anti-CD20 ADCC) reflect different antibodies and assay conditions — both are confirmed in their respective publications.

## Knockout phenotype (mouse)

Fut8-deficient mice (Wang et al. 2005, *PNAS*) exhibit:
- **Severe growth retardation and early postnatal death** — approximately 70% of knockout pups die within the first 3 days of birth; surviving pups show severe growth retardation [^wang2005]
- **Emphysema-like lung pathology** — alveolar structural abnormality resembling emphysema
- Elevated matrix metalloproteinases (MMP-12, MMP-13) and reduced elastin in lung
- Impaired TGF-β1 receptor signaling (reduced Smad2 phosphorylation) — exogenous TGF-β1 partially rescues the lung phenotype, demonstrating that core fucosylation of TGF-β receptors is required for their normal signaling [^wang2005]

**Strain background:** Wang 2005 used 129SvJ ES cells crossed with B6C3F1 blastocysts (C57BL/6 × C3H F1 hybrid background); the phenotypic severity may differ in a congenic pure C57BL/6 background.

**Implication for therapeutic FUT8 inhibition:** The Fut8 KO phenotype demonstrates that **systemic FUT8 inhibition is toxic** in mice — multiple glycoprotein substrates (TGF-β receptors, EGFR, integrins, E-cadherin) require core fucosylation for normal function. This renders chronic systemic FUT8 inhibition an unacceptable therapeutic strategy for aging or anti-inflammatory indications. Clinical strategies therefore focus exclusively on **cell-line engineering** (FUT8-KO CHO cells for mAb production), not in vivo FUT8 inhibition.

Additionally, **congenital FUT8 deficiency in humans** (CDGF1 — congenital disorder of glycosylation with defective fucosylation 1) causes severe clinical phenotype: poor growth, hypotonia, skeletal anomalies, developmental delay, and intellectual disability, consistent with the mouse KO data.

## Pharmacological inhibitors

Research-stage FUT8 inhibitors include:
- **2-fluorofucose (2-F-Fuc)** — a GDP-fucose analog that is incorporated into glycans, preventing subsequent FUT8 substrate recognition; used experimentally to produce defucosylated IgG in cell culture; not approved or in clinical trials for systemic use [^huang2021]
- Competitive GDP-fucose analogs under development; no clinical-stage agent as of 2026-05-20

Druggability tier is set to **2** (high-quality research probe; clinical cell-line engineering for mAb production is well-established; no systemic FUT8 inhibitor in clinical development for aging or inflammatory indication).

## Substrate breadth beyond IgG

FUT8 fucosylates many N-glycoprotein substrates: TGF-β receptors, EGF receptor, integrins, E-cadherin, fibronectin receptors, B7H3 (an immune checkpoint ligand on cancer cells [^huang2021]). The broad substrate scope makes systemic FUT8 inhibition biologically complex and clinically hazardous, as noted above.

## Limitations and gaps

- Core fucosylation is not a primary aging-relevant IgG glycome signal; FUT8 has minimal relevance to the GlycanAge clock.
- FUT8 global inhibition is toxic per KO phenotype; no systemic FUT8 inhibitor is in development for aging-context indications.
- The mechanism by which FUT8 and MGAT3 compete for the same glycan substrate (mutual exclusion) is established structurally but the in vivo determinants of the FUT8 vs MGAT3 balance in B cells across age have not been characterized. #gap/needs-replication
- No GWAS or Mendelian randomization study has tested whether FUT8-locus variants predict aging outcomes (independent of IgG fucosylation patterns). mr-causal-evidence is therefore `not-tested`.

## See also

- [[igg-fc-glycosylation]] — full IgG Fc N-glycosylation cascade; defucosylation mechanism; obinutuzumab/mogamulizumab clinical context
- [[mgat3]] — bisecting GlcNAc transferase; sterically competes with FUT8 at the same glycan position
- [[b4galt1]] — galactosyltransferase; acts downstream; primary aging-relevant enzyme
- [[st6gal1]] — sialyltransferase; acts downstream; anti-inflammatory glycoform producer
- [[biomarkers/glycanage-2017]] — GlycanAge biomarker; driven primarily by galactosylation, not fucosylation

---

## Footnotes

[^shields2002]: doi:10.1074/jbc.m202069200 · in-vitro (Lec13 CHO cells + primary IgG binding/ADCC assays) · Shields RL, Lai J, Keck R et al., Presta LG · *J Biol Chem* 277:26733–26740 (2002) · fucose-deficient IgG1 binds FcγRIIIA up to 50-fold more tightly (EC50 0.07–0.24 µg/ml vs >10 µg/ml); ~50-fold ADCC enhancement in NK cell assays; FUT8 / GDP-fucose as mechanistic basis; bisecting GlcNAc (MGAT3) and core fucosylation mutual exclusion context · archive: downloaded

[^yamane2004]: doi:10.1002/bit.20151 · PMID 15352059 · in-vitro/biotech (FUT8 KO CHO cell development) · Yamane-Ohnuki N, Kinoshita S, Inoue-Urakubo M et al., Satoh M · *Biotechnol Bioeng* 87:614–622 (2004) · FUT8 KO CHO cells produce completely defucosylated antibodies; anti-CD20 IgG1 shows ~100-fold enhanced ADCC vs Rituxan; POTELLIGENT platform basis · archive: not_oa

[^wang2005]: doi:10.1073/pnas.0507375102 · PMID 16236725 · in-vivo (Fut8 KO mouse; 129SvJ × B6C3F1 background) · Wang X et al., Taniguchi N · *Proc Natl Acad Sci USA* 102:15791–15796 (2005) · ~70% of Fut8-/- pups die within the first 3 days of birth; survivors show severe growth retardation + emphysema-like lung changes; TGF-β1 receptor signaling impaired (reduced Smad2 phosphorylation); MMP-12/13 elevated; exogenous TGF-β1 partially rescues lung phenotype; core fucosylation required for TGF-β receptor function · archive: downloaded

[^wahl2018]: doi:10.3389/fimmu.2018.00277 · PMID 29535710 · GWAS (~1,800 subjects) · Wahl A, van den Akker E, Klaric L et al., Gieger C · *Front Immunol* 9:277 (2018) · replicated GWAS signals for IgG glycan variation at FUT8, ST6GAL1, B4GALT1, MGAT3 · archive: status pending

[^landini2022]: doi:10.1038/s41467-022-29189-5 · PMID 35332118 · GWAS (n=2,020) · Landini A, Trbojević-Akmačić I, Wilson JF, Klarić L et al. · *Nat Commun* 2022 · FUT8 and FUT6 are shared IgG-and-transferrin glycan GWAS loci; B4GALT1, ST6GAL1, MGAT3 are IgG-specific · archive: downloaded

[^gudelj2018]: doi:10.1016/j.cellimm.2018.07.009 · PMID 30107893 · review · Gudelj I, Lauc G, Pezer M · *Cell Immunol* 2018 · IgG glycome in aging; core fucosylation relatively age-stable context · archive: download failed #gap/no-fulltext-access

[^ruhaak2010]: doi:10.1371/journal.pone.0012566 · PMID 20830288 · observational (n=1,967; Leiden Longevity Study — 1,287 offspring + 680 partners of nonagenarian sibling pairs) · Ruhaak LR, Uh HW, Beekman M et al. · *PLoS One* 5:e12566 (2010) · decreased bisecting GlcNAc IgG glycoforms associated with longevity in under-60 participants; galactosylation decreases with age; age-related bisecting GlcNAc increase in galactosylated glycoforms; core fucosylation age-trajectory context · archive: downloaded

[^huang2021]: doi:10.1038/s41467-021-22618-x · PMID 33976130 · in-vitro/in-vivo (triple-negative breast cancer models) · Huang Y, Deng R et al. · *Nat Commun* 12:2672 (2021) · FUT8 fucosylates B7H3 (immune checkpoint ligand); FUT8 knockdown + 2-fluorofucose inhibitor studied; 2-F-Fuc + anti-PDL1 combinatorial activity; cancer-biology context, not aging context · archive: pending
