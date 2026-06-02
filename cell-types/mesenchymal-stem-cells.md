---
type: cell-type
aliases: [MSCs, mesenchymal stromal cells, multipotent mesenchymal stromal cells, MSC, BM-MSCs, AD-MSCs, UC-MSCs, bmsc, BMSC, BMSCs, bone marrow stromal cells, bone marrow mesenchymal stem cells]
cell-ontology-id: CL:0000134
tissue-of-origin: ["[[bone-marrow]]", "[[adipose-tissue]]", "[[umbilical-cord]]"]
key-markers-mouse: [Sca-1+, CD29+, CD44+, CD90+]
key-markers-human: [CD73+, CD90+, CD105+, CD34-, CD45-, HLA-DR-, CD11b-, CD14-, CD19-, CD79alpha-]
lineage-output: [osteoblasts, chondrocytes, adipocytes]
self-renewal: limited
aging-relevant: yes
affected-hallmarks: ["[[stem-cell-exhaustion]]", "[[cellular-senescence]]"]
key-aging-phenotypes: ["[[sarcopenia]]", "[[osteoporosis]]"]
typical-niche: "Bone marrow perivascular (CXCL12-abundant reticular cells / Nestin+ stromal); adipose stromal vascular fraction; umbilical cord Wharton's jelly"
niche-signaling: ["[[wnt-beta-catenin]]", "[[notch-pathway]]", "[[bmp-signaling]]", "[[tgf-beta]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Dominici 2006 ISCT criteria verified via PubMed abstract + Crossref (not_oa, no full PDF); Sacchetti 2007 verified against full PDF; Mendez-Ferrer 2010 verified against full PDF; Wagner 2008 verified against full PDF; Caplan 2017 verified against full PDF; Sethe 2006 verified via abstract only (download failed — full-text not accessible); Styner/Singh 2016 verified title/author/pages via Crossref (download failed — full-text not accessible); canonical-DB identity fields (cell-ontology-id) not independently re-checked"
---

# Mesenchymal Stem Cells (MSCs)

Adult multipotent progenitors resident in bone marrow and several other tissues, capable of differentiating into osteoblasts, chondrocytes, and adipocytes (tri-lineage potential). In aging biology, MSCs are key intermediaries between bone marrow niche deterioration and downstream phenotypes including [[osteoporosis]] and indirectly [[sarcopenia]]; they also serve as a paracrine signaling reservoir via secreted factors (secretome / extracellular vesicles). Their therapeutic use via infusion is the basis of the sibling page [[mesenchymal-stem-cell-therapy]].

## Definition and nomenclature

The MSC field suffers from a nomenclature problem that predates the aging context.

**Friedenstein 1976** identified fibroblast-like colony-forming cells (CFU-F) in mouse bone marrow that could regenerate osseous tissue on transplantation into diffusion chambers — the first operational definition of what would become MSCs [^friedenstein1976].

**Caplan 1991** coined the term "mesenchymal stem cell," proposing these cells as a common progenitor for all skeletal connective tissues (bone, cartilage, tendon, marrow stroma, adipose) [^caplan1991].

**Dominici et al. 2006** (ISCT position statement) standardized the minimal criteria for human MSCs, now the field's canonical reference with >14,000 citations [^dominici2006]:

1. Plastic-adherence in standard culture
2. Surface marker positivity: CD73+, CD90+, CD105+
3. Surface marker negativity: CD34−, CD45−, HLA-DR−, CD11b−/CD14−, CD19−/CD79alpha−
4. In vitro tri-lineage differentiation: osteogenic, chondrogenic, adipogenic

**Caplan 2017** proposed renaming MSCs as "Medicinal Signaling Cells" to reflect the observation that in-vivo engraftment is negligible and most therapeutic effects are paracrine (secretome-mediated), not structural [^caplan2017]. This reframe has not been universally adopted but is influential in the cell-therapy field. The original "mesenchymal stem cell" label is retained in this wiki as the dominant search term, with the controversy noted.

> Note on "stemness": The Dominici 2006 criteria are permissive — they define stromal progenitors by in-vitro behavior, not in-vivo lineage tracing. Retrospective lineage-tracing work has shown that freshly-isolated primary MSCs are a heterogeneous mix of true committed progenitors, transit-amplifying cells, and more primitive self-renewing cells. The CFU-F assay (colony formation from single cells in limiting dilution) remains the only functional proxy for in-vivo self-renewal.

## Tissue sources and isolation

MSCs can be isolated from multiple adult tissues; the three most therapeutically relevant sources differ substantially in age, expansion potential, and differentiation bias:

| Source | Abbreviation | Isolation method | Notes |
|---|---|---|---|
| Bone marrow | BM-MSC | Density gradient + plastic adherence | Original source; declines in frequency and function with donor age |
| Adipose tissue | AD-MSC | SVF (lipoaspirate digest) + plastic adherence | More accessible; similar markers but distinct transcriptome vs BM-MSC |
| Umbilical cord (Wharton's jelly) | UC-MSC | Enzymatic digest of cord tissue | Neonatal; high expansion capacity; ethically distinct from adult sources |

Mouse MSC isolation is less standardized than human. Mouse MSCs grown under standard human conditions tend to spontaneously transform in late passage; the markers Sca-1+, CD29+, CD44+, CD90+ are commonly used but lack the cross-validated specificity of the Dominici criteria. Species translation of mouse MSC in-vitro findings to human should be interpreted cautiously. #gap/needs-human-replication

## Differentiation potential

### In vitro (tri-lineage)

Standard induction protocols demonstrate:
- **Osteogenic** — dexamethasone + ascorbic acid + beta-glycerophosphate → alkaline phosphatase activity + alizarin red+ mineralized matrix
- **Chondrogenic** — TGF-β3 in pellet culture → type II collagen + proteoglycan deposition
- **Adipogenic** — insulin + dexamethasone + isobutylmethylxanthine → lipid droplet accumulation (Oil Red O+)

These in-vitro conversions are used as the standard verification for the Dominici criteria.

### In vivo (lineage tracing)

In-vivo lineage tracing in mice has yielded a more conservative view of MSC plasticity:
- Bone-marrow MSCs (operationally: Nestin+, LepR+, or CXCL12-abundant reticular / CAR cells) contribute to osteoblasts, adipocytes, and reticular stromal cells in steady-state and after injury.
- Claims of trans-differentiation into cardiomyocytes, neurons, or hepatocytes under non-pathological conditions are not supported by rigorous lineage tracing with cre-reporters; earlier reports likely reflect cell fusion artifacts or in-vitro dedifferentiation. #gap/contradictory-evidence
- Ectoderm/endoderm lineage outputs should be treated as unverified in-vitro phenomena unless a specific lineage-tracing study is cited.

## Niche biology

### Bone marrow perivascular niche

Sacchetti et al. 2007 showed that CD146+ (MCAM+) stromal cells located on the abluminal face of marrow sinusoids are self-renewing osteoprogenitors capable of organizing a complete hematopoietic microenvironment on transplantation — establishing the identity of bone-marrow MSCs as perivascular cells [^sacchetti2007].

Mendez-Ferrer et al. 2010 demonstrated that Nestin+ mesenchymal stem cells occupy a perivascular location and are physically associated with [[hematopoietic-stem-cells]] (HSCs): Nestin+ cells express all factors (CXCL12, SCF, angiopoietin-1, IL-7, VCAM-1) required for HSC maintenance, and in-vivo depletion of Nestin+ cells reduces the immature CD150+CD48− LSK progenitor pool by ~50% (n=6–12 per group; p<0.01 by unpaired two-tailed t-test) [^mendezferrer2010]. Total bone marrow cellularity and Lin−CD48− cell numbers were not affected in the first 2 weeks post-depletion. The paper defines "MSC-like" Nestin+ cells using nestin-GFP reporter mice and FACS.

These perivascular MSCs correspond partially to the CXCL12-abundant reticular (CAR) cell population identified by Sugiyama et al. 2006 (non-Nestin characterization of the same anatomical niche). The HSC-niche role of MSCs creates bidirectional relevance: aged MSCs impair HSC maintenance (see [[hematopoietic-stem-cells]] — niche deterioration section).

### Niche signaling regulation

The following pathways regulate MSC self-renewal, quiescence, and lineage choice within the niche:

| Pathway | Effect on MSCs | Notes |
|---|---|---|
| [[wnt-beta-catenin]] | Promotes osteogenic, inhibits adipogenic | Wnt3a activates beta-catenin; canonical Wnt loss shifts fate toward marrow adiposity |
| [[bmp-signaling]] | BMP2/4/7 promote osteogenesis; BMP antagonists (noggin, sclerostin) modulate balance | Sclerostin (SOST) is a druggable Wnt/BMP brake target |
| [[tgf-beta]] | Context-dependent: low TGF-β promotes osteogenesis; high TGF-β suppresses osteogenesis, promotes fibrosis | TGF-β increases in aged BM |
| [[notch-pathway]] | Jagged-1/Notch signaling promotes MSC self-renewal; Notch loss accelerates adipogenesis | Niche osteoblasts express Jagged-1 |

## Aging-relevant changes

### 1. Replicative senescence in vitro

Wagner et al. 2008 (n=8 bone marrow donors, passages tracked serially for 43–104 days of cultivation) showed that human BM-MSCs undergo a continuous, organized process of replicative senescence: morphological enlargement, surface marker attenuation, loss of adipogenic differentiation potential, increased SA-β-galactosidase positivity, and global gene-expression changes accumulate progressively from the first passage onward [^wagner2008]. Critically, the senescent state is not a cliff edge but a continuous drift beginning from passage 1 — not merely at late passage.

Osteogenic differentiation potential increased in later passages while adipogenic potential decreased, a nuance that complicates simple "loss of differentiation" framing. Wagner 2008 did not characterize the SASP cytokine profile; SASP components (IL-6, IL-8, MMP-3, CXCL1) in senescent MSCs are reported in secondary literature. See [[cellular-senescence]] for the general SASP framework. #gap/needs-replication — the SASP profile of senescent BM-MSCs specifically is not established by Wagner 2008 and requires a primary citation.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | yes — Wagner 2008 is a human primary study |

#gap/needs-replication — Wagner 2008 is a single-center study; independent replication with larger donor n and standardized passage protocols is limited.

### 2. In-vivo MSC aging: abundance vs. function

Whether in-vivo MSC numbers decline with age is contested, unlike the cleaner picture for HSCs. Some studies report preserved or even increased CFU-F frequency in aged rodent bone marrow; others show decreased. This likely reflects:
- Heterogeneity of the MSC pool: some subpopulations expand while others contract with age
- Assay-dependent definitions (adherence-based CFU-F vs. flow-sorted subpopulations)
- Species and inbred-strain differences

The Sethe et al. 2006 review concludes that MSCs are "both subject to and key mediators of organismal aging" and notes that many apparent discrepancies in the literature are attributable to inconsistent MSC isolation methods capturing heterogeneous subpopulations with differing senescence vulnerability [^sethe2006]. The specific claim that functional capacity declines more reliably than absolute cell number is consistent with the review's framing but requires full-text verification (abstract-only access). #gap/contradictory-evidence — specific fold-changes in aged vs. young in-vivo MSC numbers are not reliably established; do not cite a specific number without strain/protocol citation.

### 3. Osteoblast/adipocyte fate skewing

In aged bone marrow, the MSC differentiation balance shifts from osteoblastogenesis toward adipogenesis. This is one of the most consistent aging findings in the MSC field:

- Bone marrow adiposity increases with age across species, measured by histology, MRI, and CT
- In-vivo transplantation experiments show that aged bone marrow microenvironment drives mesenchymal progenitor cells (MPCs) toward adipogenic lineage even when cells originate from young donors, implying a dominant niche-extrinsic component [^singh2016]
- Mechanistically: age-associated decline in canonical Wnt signaling (due to oxidative stress and Wnt inhibitor DKK1 upregulation) and reduced BMP2 availability shift the osteoblast/adipocyte transcription factor balance (RUNX2 down, PPARgamma up)

Downstream consequence: reduced osteoblast output → [[osteoporosis]] (reduced bone mineral density, increased fracture risk); increased marrow adiposity → altered hematopoietic niche → impaired HSC maintenance (see [[hematopoietic-stem-cells]]).

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | yes — human BM imaging studies + ex-vivo MSC cultures from aged donors |

### 4. SASP and pro-inflammatory signaling

Senescent MSCs in aged marrow secrete a SASP that reinforces the pro-inflammatory bone marrow microenvironment ([[chronic-inflammation]]):
- IL-6 and IL-8 from senescent MSCs stimulate myeloid-biased differentiation and HSC mobilization
- MMP-3/MMP-13 degrade extracellular matrix structural supports of the niche
- Senescent MSCs can also impair satellite cell-mediated muscle regeneration via paracrine IL-6 signaling (indirect link to [[sarcopenia]]) #gap/no-mechanism — the exact cross-talk between bone marrow MSC SASP and muscle satellite cells is not characterized in vivo.

## Therapeutic relevance

For the full therapeutic applications section, see [[mesenchymal-stem-cell-therapy]] (R23a sibling page, same batch).

Summary of mechanisms that motivate MSC therapy in aging:
1. **Paracrine immunomodulation** — MSC secretome suppresses T-cell activation, macrophage polarization toward M2; relevant for chronic inflammation reduction
2. **Trophic support** — growth factors (HGF, VEGF, IGF-1) support tissue repair; EVs (exosomes + microvesicles) transfer cargo including miRNAs with anti-senescence effects
3. **Direct differentiation** — engraftment and structural replacement is minimal in most in-vivo studies; not considered the primary therapeutic mechanism for systemic infusion
4. **Niche restoration** — MSC infusion can transiently restore BM niche function, potentially improving HSC maintenance (preclinical; #gap/needs-human-replication)

## Limitations and gaps

- `#gap/needs-human-replication` — Most fate-skewing and niche data are from rodent models; human BM biopsy studies are cross-sectional with small n and heterogeneous MSC isolation protocols.
- `#gap/contradictory-evidence` — In-vivo MSC number changes with age are not consistent across studies; specific quantitative claims require strain- and protocol-matched citations.
- `#gap/needs-replication` — Wagner 2008 replicative senescence findings are widely cited but single-center; larger independent cohorts with standardized passage protocols are lacking.
- `#gap/no-mechanism` — The mechanistic link between bone-marrow MSC SASP and systemic muscle atrophy (sarcopenia pathway) is not established in vivo.
- `#gap/unsourced` — Mouse MSC surface marker panel (Sca-1+, CD29+, CD44+, CD90+) reflects common usage but lacks a single authoritative publication equivalent to the Dominici 2006 human criteria; should be confirmed against primary mouse-MSC characterization papers on next verification pass.
- `#gap/long-term-unknown` — Long-term fate of infused MSCs in aged hosts, including potential for malignant transformation after extensive ex-vivo expansion, is not established in large controlled studies.

## See also

- [[mesenchymal-stem-cell-therapy]] — intervention page; paracrine mechanisms, clinical trial landscape (R23a sibling, implicit stub until seeded)
- [[hematopoietic-stem-cells]] — MSCs constitute part of the HSC perivascular niche; bidirectional aging effects
- [[stem-cell-exhaustion]] — hallmark; MSC depletion of functional capacity contributes
- [[cellular-senescence]] — hallmark; MSC replicative senescence and SASP
- [[bone-marrow]] — niche tissue (implicit stub)
- [[adipose-tissue]] — AD-MSC source tissue (implicit stub)
- [[umbilical-cord]] — UC-MSC source (implicit stub)
- [[osteoporosis]] — downstream phenotype of osteoblast/adipocyte fate skewing (implicit stub)
- [[sarcopenia]] — downstream phenotype; indirect MSC SASP-mediated link
- [[wnt-beta-catenin]], [[bmp-signaling]], [[notch-pathway]], [[tgf-beta]] — niche signaling pathways (all seeded R20)
- [[chronic-inflammation]] — hallmark; MSC SASP contribution

## Footnotes

[^friedenstein1976]: PMID:976387 · Friedenstein AJ et al. · *Exp Hematol* 1976 · 4(5):267-274 · CFU-F discovery in mouse bone marrow; fibroblast precursors in normal and irradiated hematopoietic organs · no DOI in PubMed record (pre-DOI era) · n=multiple mouse cohorts · in-vivo

[^caplan1991]: doi:10.1002/jor.1100090504 · Caplan AI · *J Orthop Res* 1991 · 9(5):641-650 · Coined "mesenchymal stem cell"; proposed common progenitor for skeletal connective tissues · not_oa (archive status) · in-vitro + conceptual · cited >7000 times

[^dominici2006]: doi:10.1080/14653240600855905 · Dominici M et al. (10 authors, ISCT) · *Cytotherapy* 2006 · 8(4):315-317 · ISCT minimal criteria for MSC definition: (1) plastic adherence, (2) CD73+/CD90+/CD105+ and CD45−/CD34−/CD14−/CD11b−/CD79alpha−/CD19−/HLA-DR−, (3) tri-lineage osteoblast/adipocyte/chondroblast differentiation in vitro · not_oa (verified via PubMed abstract + Crossref) · position statement · cited >14,000 times

[^sacchetti2007]: doi:10.1016/j.cell.2007.08.025 · Sacchetti B et al. · *Cell* 2007 · 131(2):324-336 · CD146+ (MCAM+) subendothelial sinusoidal stromal cells are self-renewing osteoprogenitors (all CFU-Fs reside in CD45−CD146+ fraction) that organize HPC niche on transplantation; CD146high/bright distinguishes BMSCs from nonosteogenic stromal strains · local PDF available · n=multiple transplant assays (clonal strains from 2–3 donors; 12/12 transplants) · in-vivo

[^mendezferrer2010]: doi:10.1038/nature09262 · Mendez-Ferrer S et al. · *Nature* 2010 · 466(7308):829-834 · Nestin+ MSCs are essential HSC niche components; selective in-vivo depletion reduces CD150+CD48− LSK progenitor pool by ~50% (total BM cellularity and Lin−CD48− numbers unaffected at 2 weeks) · local PDF available · n=6–12/group · p<0.01 unpaired two-tailed t-test · in-vivo · model: Nestin-cre^ERT2/iDTR reporter mice

[^wagner2008]: doi:10.1371/journal.pone.0002213 · Wagner W et al. · *PLOS ONE* 2008 · 3(5):e2213 · Replicative senescence of human BM-MSCs is continuous and organized; morphological, immunophenotypic, differentiation, mRNA/miRNA changes accumulate from passage 1 onward · local PDF available · n=8 donors · in-vitro · human BM · Note: osteogenic potential increased in later passages while adipogenic decreased; SASP profile not characterized in this paper

[^caplan2017]: doi:10.1002/sctm.17-0051 · Caplan AI · *Stem Cells Transl Med* 2017 · 6(6):1445-1451 · Proposes renaming MSCs "Medicinal Signaling Cells" based on paracrine-dominant therapeutic mechanism and negligible in-vivo engraftment; argues MSCs are pericyte-derived and home to sites of injury/disease to secrete immunomodulatory and trophic bioactive factors · local PDF available · perspectives article · cited >940 times

[^sethe2006]: doi:10.1016/j.arr.2005.10.001 · Sethe S, Scutt A, Stolzing A · *Ageing Res Rev* 2006 · 5(1):91-116 · Comprehensive review of MSC aging; covers morphology, proliferation, senescence markers, telomeres, telomerase; concludes MSCs are "both subject to and key mediators of organismal aging" · download failed (OA URL returned HTTP 202; not accessible) · abstract only verified · review #gap/no-fulltext-access — specific claims about functional-vs-numerical decline pattern require full-text verification

[^singh2016]: doi:10.1016/j.bone.2016.01.014 · Singh L et al. · *Bone* 2016 · 85:29-36 · "Aging alters bone-fat reciprocity by shifting in vivo mesenchymal precursor cell fate towards an adipogenic lineage" · In-vivo transplantation shows aged BM microenvironment drives MPC fate toward adipogenesis; niche-extrinsic mechanism · download failed (not publicly accessible) · in-vivo · model: mouse #gap/no-fulltext-access
