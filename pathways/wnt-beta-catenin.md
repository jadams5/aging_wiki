---
type: pathway
aliases: [Wnt pathway, Wnt/β-catenin pathway, canonical Wnt signaling, Wnt signaling, beta-catenin pathway, Wnt signaling pathway, non-canonical Wnt, wnt-signaling]
kegg: hsa04310
kegg-secondary: [R-HSA-195721]   # top-level "Signaling by WNT" parent for Dataview filters
reactome: R-HSA-201681
wikipathways: WP428
key-nodes:
  - "[[wnt3a]]"
  - "[[wnt5a]]"
  - "[[wnt7b]]"
  - "[[frizzled]]"
  - "[[lrp5-lrp6]]"
  - "[[dvl]]"
  - "[[gsk3b]]"
  - "[[axin]]"
  - "[[apc]]"
  - "[[ctnnb1]]"
  - "[[tcf-lef]]"
  - "[[cyclin-d1]]"
  - "[[sost]]"
  - "[[dkk1]]"
upstream:
  - "[[wnt-ligands]]"
  - "[[r-spondins]]"
downstream:
  - "[[cell-proliferation]]"
  - "[[stem-cell-self-renewal]]"
  - "[[epithelial-mesenchymal-transition]]"
  - "[[runx2]]"
  - "[[vascular-calcification]]"
hallmarks:
  - "[[stem-cell-exhaustion]]"
  - "[[cellular-senescence]]"
  - "[[altered-intercellular-communication]]"
sens-categories: []
druggability-tier: 1
caused-by: []
causes:
  - "[[stem-cell-exhaustion]]"
  - "[[fibrosis]]"
  - "[[vascular-calcification]]"
literature-checked-through: 2026-05-23
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "R20 lightweight sweep (2026-05-05): Brack 2007, Liu 2007, Florian 2013, Clevers 2006, Logan & Nusse 2004 cross-checked via DOI lookup. 2026-05-23 MERGE PASS (verified by claude): Yun 2023 (PDF), Kocełak 2024 [khalid2024] (PDF), Chen/Zhu 2024 [chen2024osteoblast] (PDF) fully read and cross-checked; corrections applied — see log.md. [^oglcnac2024] Xu 2024: not_oa, abstract-level only (#gap/no-fulltext-access). [^romosozumab2026] Nuzzo 2026: DOI not in archive, abstract-level claim confirmed via Crossref. [^fwci-sclerostin2026] Yeon 2026: DOI not in archive, author/title confirmed via Crossref, full-text unverifiable."
---

# Wnt/β-catenin signaling pathway

The Wnt/β-catenin pathway is a conserved developmental and tissue-homeostasis signaling cascade that controls stem cell self-renewal, cell fate, and proliferation from embryogenesis through adult tissue maintenance. In aging, an age-associated shift in Wnt signaling tone — elevated in some stem cell compartments, dysregulated in others — drives stem cell exhaustion, fibrosis, and premature senescence. It is one of the best-characterized examples of a pathway whose activity is acutely required for tissue regeneration but whose chronic age-related elevation paradoxically accelerates aging phenotypes.

> **Naming note:** This page covers the *pathway*. Individual key components (GSK3β, APC, β-catenin/CTNNB1) will reside on protein pages when seeded; the canonical `[[wnt-beta-catenin]]` wikilink resolves here.

## Identity

| Field | Value |
|---|---|
| KEGG | hsa04310 (Wnt signaling pathway) |
| Reactome | R-HSA-201681 (TCF dependent signaling in response to WNT) |
| WikiPathways | WP428 (Wnt signaling pathway) |
| Druggability tier | 1 — PORCN inhibitors (LGK-974/WNT-974) in Phase I/II clinical trials |

## Canonical Wnt/β-catenin branch (canonical)

The canonical arm controls β-catenin stability and nuclear transcription. Its logic is a default-OFF switch: in the absence of Wnt ligand, a cytoplasmic **destruction complex** (APC + Axin + GSK3β + CK1α) phosphorylates β-catenin (CTNNB1) at N-terminal Ser/Thr residues (CK1α at Ser45, then GSK3β at Thr41/Ser37/Ser33). Phosphorylated β-catenin is recognized by the E3 ligase adaptor β-TrCP, ubiquitinated, and degraded by the proteasome [^clevers2006].

**Wnt-ON state:**

1. Wnt ligands (secreted glycolipoproteins; 19 members in humans) bind the seven-pass transmembrane Frizzled receptors (FZD1–10) and the co-receptors LRP5/6 simultaneously.
2. The LRP5/6 cytoplasmic tail is phosphorylated, creating a docking site for Axin.
3. Dishevelled (DVL) is recruited to FZD, oligomerizes, and sequesters Axin away from the destruction complex.
4. Destruction complex activity is inhibited; β-catenin accumulates in the cytoplasm.
5. Cytoplasmic β-catenin translocates to the nucleus, where it displaces the transcriptional repressor Groucho/TLE from TCF/LEF transcription factors and acts as a coactivator [^clevers2006].
6. TCF/LEF target genes are transcribed, including **cyclin-D1** (cell cycle entry), **c-MYC** (growth), **AXIN2** (negative feedback), and **LGR5** (intestinal/hair follicle stem cell marker) [^logannusse2004].

| Component | Role | Notes |
|---|---|---|
| Frizzled (FZD1–10) | Seven-pass TM receptor | 10 family members; ligand specificity partially redundant |
| LRP5 / LRP6 | Co-receptor | LDLR-related; required for canonical signal; targeted by DKK1/Sclerostin antagonists |
| DVL (1/2/3) | Signal relay; destruction complex inhibitor | Scaffolding protein; activates both canonical and non-canonical |
| CK1α | Priming kinase (Ser45) in destruction complex | First phosphorylation; required for GSK3β recognition |
| [[gsk3b]] (GSK3β) | β-catenin phosphorylation (Thr41/Ser37/Ser33) | Key hub; also phosphorylates Axin, activates proteasomal degradation |
| Axin | Scaffold of destruction complex | Rate-limiting; target of tankyrase poly-ADP-ribosylation (degradation) |
| [[apc]] | Scaffold; promotes GSK3β access to β-catenin | Tumor suppressor; bi-allelic LoF → familial adenomatous polyposis |
| [[ctnnb1]] (β-catenin) | Signal transducer + transcriptional coactivator | Dual role: adhesion (E-cadherin junctions) + nuclear signaling |
| TCF/LEF | Nuclear effectors | Repressors (Groucho-bound) in OFF state; activators (β-catenin-bound) in ON state |

## Non-canonical Wnt branches (brief)

Non-canonical Wnt signals are β-catenin-independent and mediated by the same FZD receptors but via different co-receptors and effectors. Two major branches:

- **Planar cell polarity (PCP) pathway:** Wnt/FZD → DVL → Rho GTPases (RhoA, Rac1) + JNK → cytoskeletal remodeling, cell polarity. Required for oriented cell division and tissue morphogenesis. **Relevance to aging:** Wnt5a (a non-canonical ligand) rises with age and redirects HSCs from canonical to non-canonical signaling, driving loss of polarity (see Aging biology section below) [^florian2013].
- **Wnt/Ca²⁺ pathway:** Wnt/FZD → G-proteins → PLCβ → IP₃ + DAG → Ca²⁺ release → CaMKII / NFAT. Modulates cell adhesion and can antagonize canonical signaling. Less-characterized in aging contexts. #gap/unsourced

## Aging biology

### Satellite cells: Wnt/Notch balance shifts with age toward fibrosis

In young muscle, regeneration after injury is governed by a balance of [[notch-pathway]] (promoting satellite cell proliferation/self-renewal) and Wnt (promoting myogenic differentiation). Brack et al. 2007 used heterochronic transplantation to show that exposure of satellite cells to aged systemic environment (old serum, old niche) shifts the Wnt/Notch balance: canonical Wnt signaling becomes elevated, promoting conversion of satellite cells toward a fibrogenic fate rather than myogenic differentiation [^brack2007]. This was demonstrated using:

- Aged serum transplanted into young satellite cells → increased Wnt reporter activity + increased fibronectin deposition.
- Young serum on aged satellite cells → partial rescue of myogenic differentiation.
- Wnt pathway agonism in young muscle → recapitulated aged fibrosis phenotype.

The study identified elevated circulating Wnt ligands in old serum as a systemic aging signal — one of the first demonstrations that the aged systemic environment actively drives local stem cell dysfunction via Wnt [^brack2007]. **Not yet replicated by independent groups with full heterochronic parabiosis; the specific Wnt ligand(s) driving this remain contested.** #gap/needs-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (Wnt pathway structure conserved) |
| Phenotype conserved in humans? | partial — age-related muscle fibrosis occurs in humans; Wnt as the driver is not established in human muscle |
| Replicated in humans? | no |

### Klotho as Wnt antagonist: premature aging via Wnt hyperactivation

Klotho (KL) acts as a Wnt antagonist by binding Wnt ligands and inhibiting FZD-LRP receptor complex assembly. Liu et al. 2007 showed that in Klotho-deficient mice — which display a progeric syndrome resembling accelerated aging — canonical Wnt signaling is augmented in multiple tissues [^liu2007]. This augmented Wnt activity caused:

- Premature depletion of tissue stem cell pools in skin and intestine.
- Accelerated cellular senescence (p21-positive cells) in Klotho^(-/-^) tissues.
- Forced expression of Wnt3a in wild-type adult skin recapitulated the depletion phenotype.
- Wnt inhibition (using secreted Frizzled-related proteins, sFRPs) partially rescued stem cell numbers in Klotho^(-/-^) mice.

See [[klotho]] (verified-partial, R18) for the full Klotho biology. The Liu 2007 study is closed-access; the Wnt-antagonism attribution is confirmed in the klotho.md verified-scope. #gap/no-fulltext-access — quantitative claims (e.g., fold-change in Wnt reporter activity, % stem cell reduction) not independently verifiable here.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (KL-VS haplotype associates with longevity in humans) |
| Phenotype conserved in humans? | partial — Klotho decline with age is documented in humans; downstream Wnt hyperactivation not directly demonstrated |
| Replicated in humans? | no #gap/needs-human-replication |

### HSCs: canonical-to-non-canonical switch drives polarity loss

Florian et al. 2013 (Nature) reported a mechanistic aging switch in HSCs: aged HSCs show elevated Wnt5a (a non-canonical ligand) that shifts signaling from the canonical (β-catenin-dependent) to non-canonical (PCP) branch, leading to loss of cell polarity [^florian2013]. Key findings:

- Aged Lin^(-^)Sca-1^(+^)c-Kit^(+^) (LSK) HSCs had elevated Wnt5a expression and reduced nuclear β-catenin (canonical output) compared to young HSCs.
- Exogenous Wnt5a treatment of young HSCs induced polarity loss (Cdc42 activity and tubulin distribution asymmetry).
- Wnt5a-mediated polarity loss reduced the capacity for asymmetric self-renewing division.
- Small-molecule Cdc42 inhibitor (CASIN) restored polarity and regenerative function to aged HSCs, and reduced Wnt5a effects.
- Genetic Wnt5a haploinsufficiency in aged mice partially rejuvenated HSC polarity and reconstitution capacity.

This represents a mechanism distinct from the satellite cell story: rather than excess canonical Wnt, it is a **qualitative shift** from canonical to non-canonical that drives HSC aging. See [[hematopoietic-stem-cells]] (verified-partial, R16) for broader HSC aging context. #gap/needs-replication — independent confirmation of the canonical-to-non-canonical switch in human HSCs is lacking.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (Wnt5a and PCP signaling conserved) |
| Phenotype conserved in humans? | partial — aged human HSCs show polarity defects; Wnt5a as the mechanism is not established |
| Replicated in humans? | no |

### SOST/LRP5-6 axis: bone-vascular crosstalk and romosozumab CV signal

The most clinically advanced Wnt intervention targets the SOST/LRP5/6 axis in bone. The osteocyte-secreted sclerostin (SOST) is an LRP5/6 antagonist — mechanical loading suppresses SOST → releases LRP5/6 → canonical Wnt in osteoblasts → bone formation. With disuse and aging, SOST rises, suppressing Wnt-driven bone formation.

- **Romosozumab** — anti-sclerostin monoclonal antibody; FDA-approved 2019 for postmenopausal osteoporosis at high fracture risk. Dual anabolic (bone formation ↑) and anti-resorptive (bone resorption ↓) effect. Phase 3 ARCH trial (n=4,093, postmenopausal women with osteoporosis and fragility fracture; 12 months romosozumab → open-label alendronate in both groups) showed superior fracture reduction vs. alendronate (48% lower vertebral fracture risk at 24 months; 27% lower clinical fracture risk) but also a **cardiovascular safety signal** — higher frequency of serious cardiovascular adverse events in the romosozumab group vs. alendronate (2.5% vs. 1.9%) during the 12-month blinded phase [^khalid2024]. The CV signal may relate to vascular Wnt effects: SOST is also expressed in VSMCs and arteries; blocking it could paradoxically augment vascular calcification in susceptible patients. Notably, a separate large trial (FRAME) did not find increased cardiovascular risk vs. placebo, making the ARCH signal possibly comparator-related (alendronate may be cardioprotective). Cross-link: [[vascular-calcification]], [[arterial-stiffening]]. #gap/contradictory-evidence
- **LRP5 gain-of-function mutations** → high-bone-mass syndrome; **LRP5 loss-of-function** → osteoporosis-pseudoglioma syndrome (blinding from vitreoretinal Wnt deficiency). Romosozumab response correlates with LRP5/LRP6 variant status [^romosozumab2026].
- **Osteoblast signaling review (Zhu, Chen et al. 2024)** — comprehensive synthesis of Wnt, BMP, TGF-β, Hedgehog, PTH, FGF, Notch, Hippo, and Piezo1/2 signaling axes in osteoblast differentiation and bone homeostasis; PDF verified locally [^chen2024osteoblast].

### VSMC osteogenic switch: Wnt in vascular calcification

In pathologic vascular calcification, VSMCs undergo an osteogenic phenotype switch driven partly by Wnt/β-catenin activation:

- Wnt → β-catenin nuclear translocation → [[runx2]] induction → osteocalcin, osteopontin (SPP1), alkaline phosphatase expression in VSMCs
- **O-GlcNAcylation of β-catenin** promotes Wnt activity in calcifying VSMCs (Xu 2024 FASEB) [^oglcnac2024]
- Elevated SOST in some CKD patients may paradoxically protect against vascular calcification by inhibiting Wnt/RUNX2; this creates a clinical tension with romosozumab use in CKD/CVD-risk patients [^khalid2024]
- Hypoxia-driven SOST regulation in atherosclerotic plaques is an emerging mechanism [^fwci-sclerostin2026]

See [[vascular-calcification]] for the full process page and [[runx2]] for RUNX2 protein-level detail. The Klotho-Wnt-VSMC axis is bidirectional: declining Klotho with age = chronic Wnt over-activation, and VSMCs in Klotho-deficient mice show accelerated osteogenic transdifferentiation (cross-link [[klotho]]).

### Intestinal stem cells: senescent-cell-driven Wnt niche perturbation

Yun et al. 2023 (Nature Communications) showed that senescent cells perturb the ISC niche via non-canonical Wnt signaling — specifically, the N-terminal extracellular domain of Ptk7, secreted as a SASP factor by senescent fibroblasts, binds FZD7 on ISCs and activates Wnt/Ca²⁺ non-canonical signaling, triggering cytosolic Ca²⁺ oscillations and nuclear translocation of YAP that disrupts ISC differentiation [^yum2023]. This is a mechanistically distinct aging-relevant Wnt finding from the satellite cell (Brack 2007) and HSC (Florian 2013) stories: rather than systemic-environment-driven canonical excess or canonical→non-canonical switch, it is **senescent-cell-paracrine non-canonical activation via a secreted SASP factor (sPtk7)** that perturbs the niche. #gap/needs-human-replication — mouse intestinal organoids and conditioned-medium experiments; human ISC translation pending.

## Disease associations

### Colorectal cancer and familial adenomatous polyposis

**APC** (adenomatous polyposis coli) is a tumor suppressor and key destruction complex scaffold. Biallelic loss-of-function APC mutations are the causative lesion in **familial adenomatous polyposis (FAP)**, an autosomal dominant syndrome causing hundreds to thousands of colorectal polyps and near-certain colorectal cancer by the fourth decade. Somatic APC mutations or other Wnt pathway activating mutations (CTNNB1 gain-of-function, AXIN1/2 LoF, RNF43 LoF) are found in approximately **80% of sporadic colorectal carcinomas**, making Wnt the most frequently mutated pathway in CRC [^logannusse2004]. Loss of APC releases the destruction complex brake constitutively, mimicking permanent Wnt-ON signaling.

Other Wnt-associated cancers include medulloblastoma (CTNNB1 activating mutations, ~15%), hepatocellular carcinoma (CTNNB1), endometrial cancer (CTNNB1), and desmoid tumors (APC/CTNNB1).

### Other aging-associated phenotypes

Wnt pathway dysregulation has been implicated in:

- **Osteoporosis** — LRP5/LRP6 loss-of-function → reduced bone mineral density; gain-of-function → high bone mass syndrome. Sclerostin (SOST gene product) is an LRP5/6 antagonist; anti-sclerostin antibodies (romosozumab) are FDA-approved for osteoporosis.
- **Alzheimer's disease** — Wnt signaling supports synaptic maintenance and neurogenesis; Dickkopf-1 (DKK1) elevation in AD brains may suppress protective Wnt activity. #gap/no-mechanism
- **Muscle fibrosis (sarcopenia)** — via the satellite cell fate-shift mechanism described above (Brack 2007).

## Therapeutic angles

| Class | Compound(s) | Target | Stage | Notes |
|---|---|---|---|---|
| PORCN inhibitors | LGK-974 (WNT-974) | Porcupine (Wnt lipid-acylation enzyme) | Phase I/II (cancer) | Blocks all Wnt ligand secretion; evaluated in breast, pancreatic, RNF43-mutant cancers |
| PORCN inhibitors | ETC-159 | Porcupine | Phase I (cancer) | TNBC, KRAS-mutant cancers |
| Tankyrase inhibitors | XAV939 | Tankyrase 1/2 (TNKS1/2; PARP5a/5b) | Preclinical | Stabilize Axin by preventing poly-ADP-ribosylation/degradation → β-catenin destruction ↑ |
| LRP5/6 antagonists | DKK1 (endogenous), anti-sclerostin Ab (romosozumab) | LRP5/6 co-receptor | FDA-approved (bone only) | Romosozumab approved for osteoporosis; not for aging or cancer |
| β-catenin/TCF inhibitors | Various small molecules | β-catenin:TCF interface | Preclinical | No clinical-grade compound as of 2025; druggability of protein-protein interface challenging |

**GSK3β inhibitors** (lithium, kenpaullone, indirubins, CHIR-99021) stabilize β-catenin by blocking destruction complex phosphorylation — the opposite of anti-cancer Wnt inhibition. Used experimentally to model constitutive Wnt-ON states; not useful for aging interventions targeting Wnt hyperactivation. Their clinical relevance to aging is broader (tau phosphorylation, glycogen synthesis) rather than Wnt-specific. See [[gsk3b]] for detail.

**Aging-intervention relevance:** No Wnt-targeted intervention has been evaluated for aging endpoints in humans. The therapeutic opportunity for aging is theoretically in **Wnt normalization** (not suppression or activation per se): restoring Wnt/Notch balance in satellite cells, or dampening Wnt5a/non-canonical in HSCs. Both are preclinical targets only. #gap/needs-human-replication

## Cross-references

- [[notch-pathway]] — antagonistic balance with Wnt in satellite cell fate; both pathways shift with systemic aging signals. See R20.
- [[stem-cell-exhaustion]] — hallmark driven partly by Wnt dysregulation across muscle and hematopoietic compartments.
- [[satellite-cells]] — verified-partial (R16); Brack 2007 context lives there.
- [[hematopoietic-stem-cells]] — verified-partial (R16); Florian 2013 canonical→non-canonical switch.
- [[klotho]] — verified-partial (R18); Wnt antagonism via Klotho decline.
- [[gsk3b]] — destruction complex kinase; broader roles in tau, glycogen, and metabolism.
- [[ctnnb1]] — β-catenin protein page (stub when seeded).
- [[apc]] — tumor suppressor and destruction complex scaffold; FAP/CRC genetic driver.
- [[cellular-senescence]] — downstream consequence of aberrant Wnt activation (Klotho^(-/-^) model).
- [[pi3k-akt-pathway]] — parallel growth factor–sensing pathway; limited cross-talk via GSK3β shared substrate.
- [[runx2]] — downstream osteogenic transcription factor; activated by canonical Wnt in osteoblasts (physiological) and in VSMCs (pathological calcification).
- [[bmp-2]] — synergizes with Wnt in osteoblast differentiation; reciprocal regulation in ISC crypt and bone formation.
- [[vascular-calcification]] — Wnt/RUNX2 axis is a primary driver of VSMC osteogenic switch; cross-link sibling of romosozumab CV signal context.
- [[matrix-gla-protein]] — anti-calcification factor; antagonizes BMP-2 downstream of Wnt-induced VSMC switch.
- [[fgf23]] — bone-kidney axis; the FGF23-Klotho axis intersects Wnt antagonism via soluble Klotho.
- [[sost]] — sclerostin gene product; osteocyte-secreted LRP5/6 antagonist; therapeutic target of romosozumab. #gap/needs-page
- [[dkk1]] — Dickkopf-1; LRP5/6 antagonist; elevated in AD, CKD, aging. #gap/needs-page
- [[arterial-stiffening]] — romosozumab CV signal may reflect vascular Wnt effects.
- [[osteocytes]] — primary SOST source; mechanotransduction governs Wnt-bone-formation axis.

## Limitations and gaps

- **No aging-specific human trial data.** All aging-relevant Wnt biology is from mouse models (Brack 2007, Liu 2007) or from mouse HSC aging (Florian 2013). The claim that Wnt dysregulation directly causes human aging phenotypes (rather than correlating with them) is unsupported. #gap/needs-human-replication
- **Wnt5a specificity in HSC aging.** Florian 2013 identified Wnt5a as the driver of the canonical→non-canonical switch in mouse aged HSCs. Whether this is the dominant Wnt ligand change in human HSC aging is not established. #gap/needs-replication
- **Contradictory context-dependence.** Wnt activation is pro-regenerative (intestinal crypt turnover, hair follicle cycling) in some contexts and pro-fibrotic / pro-senescence in others (aged satellite cells, Klotho^(-/-^)). The tissue context, level, and branch (canonical vs non-canonical) all modulate the outcome. A simple "Wnt-high = bad aging" model is an oversimplification. #gap/contradictory-evidence
- **Druggability of Wnt normalization.** PORCN inhibitors block all Wnt secretion; this is far too broad for aging intervention. Tissue-specific Wnt modulation or ligand-selective approaches are theoretically more suitable but lack clinical-grade compounds. #gap/dose-response-unclear
- **β-catenin protein page not yet seeded.** [[ctnnb1]] is an implicit stub; protein-level detail (phosphorylation sites, nuclear import/export, E-cadherin adhesion role) lives there rather than here.
- **APC protein page not yet seeded.** [[apc]] is an implicit stub.
- **Non-canonical Wnt in aging.** The Ca²⁺ branch of non-canonical Wnt signaling has no verified aging-relevant citations here. #gap/unsourced

## Footnotes

[^clevers2006]: doi:10.1016/j.cell.2006.10.018 · Clevers H · *Cell* 2006 · review · n/a · model: review (human + mouse cell lines) · ~5500 citations; canonical mechanistic reference for Wnt/β-catenin pathway architecture. Bronze OA; archive status: pending download.

[^logannusse2004]: doi:10.1146/annurev.cellbio.20.010403.113126 · Logan CY, Nusse R · *Annual Review of Cell and Developmental Biology* 2004 · review · n/a · model: review (Drosophila + vertebrate) · ~5200 citations; covers Wnt pathway across development and disease including CRC APC mutation frequency. Archive status: not downloaded (closed OA).

[^brack2007]: doi:10.1126/science.1144090 · Brack AS, Conboy MJ, Roy S et al. · *Science* 2007 · in-vivo + in-vitro · n not specified in abstract · p<0.05 (reporter assays) · model: C57Bl/6 mice (heterochronic transplantation); satellite cells ex vivo · ~1509 citations. Closed-access; archive status: not downloaded (not_oa). #gap/no-fulltext-access — quantitative claims (fold-change Wnt activity, % fibrogenic conversion) not independently verified here.

[^liu2007]: doi:10.1126/science.1143578 · Liu H, Fergusson MM, Castilho RM et al. · *Science* 2007 · in-vivo · n not specified · model: Klotho^(-/-^) mice (accelerated-aging model); wild-type C57Bl/6 controls · ~742 citations. Closed-access; archive status: not downloaded (not_oa). #gap/no-fulltext-access — quantitative claims not independently verified here. Attribution confirmed via [[klotho]] verified-scope (R18 verification pass 2026-05-05).

[^florian2013]: doi:10.1038/nature12631 · Florian MC, Nattamai KJ, Dörr K et al. · *Nature* 2013 · in-vivo + ex-vivo · n not reported in abstract · model: C57Bl/6 mice (young vs old LSK HSCs); transplantation reconstitution assays · ~310 citations. Green OA (PMC4078992); archive status: pending download. #gap/no-fulltext-access — quantitative claims (Cdc42 asymmetry ratios, reconstitution percentages) not independently verified here.

[^yum2023]: doi:10.1038/s41467-022-35487-9 · Yun J, Hansen S, Morris O et al. (Hannoush RN + Jasper H co-corresponding) · *Nature Communications* 2023 · in-vitro (mouse small intestinal organoids from isolated crypts + conditioned medium from X-ray/DOXO-induced senescent MEFs; co-culture with senescent intestinal fibroblasts) · n=3–5 biological replicates per experiment (organoids from individual mice) · 56 citations, FWCI 13.9 · secreted N-terminal Ptk7 (sPtk7), a SASP factor from senescent fibroblasts, binds FZD7 on ISCs, activates Wnt/Ca²⁺ non-canonical signaling, triggers Ca²⁺ oscillations and nuclear YAP translocation, impairing ISC differentiation and crypt morphology · PDF verified 2026-05-23.

[^chen2024osteoblast]: doi:10.1038/s41421-024-00689-6 · Zhu S, Chen W, Masson A, Li YP · *Cell Discovery* 2024 · review · 257 citations, FWCI 123 · comprehensive review of cell signaling (Wnt, BMP, TGF-β, Hedgehog, PTH, FGF, Ephrin, Notch, Hippo, Piezo1/2) and transcriptional regulation (Runx2, Cbfβ, Runx1, Osterix, ATF4, SATB2, TAZ/YAP) of osteoblast lineage commitment, differentiation, bone formation, and homeostasis · PDF verified 2026-05-23.

[^khalid2024]: doi:10.17219/acem/169567 · Kocełak P, Puzianowska-Kuźnicka M, Olszanecka-Glinianowicz M, Chudek J · *Advances in Clinical and Experimental Medicine* 2024;33(5):519–532 · systematic review (PRISMA; 160 studies included from PubMed) · Wnt signaling pathway and sclerostin in atherosclerosis and vascular calcification; ARCH trial CV signal (2.5% vs. 1.9% serious cardiovascular adverse events, romosozumab vs. alendronate) cited from Saag 2017; FRAME trial noted as not finding increased CV risk vs. placebo · PDF verified 2026-05-23.

[^romosozumab2026]: doi:10.1007/s00198-026-07932-8 · Nuzzo M et al. · *Osteoporosis International* 2026 · case series/clinical · romosozumab efficacy in patients with LRP5, LRP6, or WNT1 variants · archive: not found (too recent). Added 2026-05-23 merge pass — abstract-level claim only; full verification pending.

[^oglcnac2024]: doi:10.1096/fj.202401649RR · Xu L, Liu B, Ma H et al. · *FASEB Journal* 2024;38(24) · in-vitro + in-vivo · model: mouse VSMC calcification models (inorganic phosphate-induced) + CKD patient artery tissue · O-GlcNAc transferase (OGT) and global O-GlcNAcylation are upregulated in calcified artery tissue and CKD patients with vascular calcification; OGT promotes VSMC osteogenic transdifferentiation via Wnt/β-catenin signaling · archive status: not_oa — abstract-level verification only. #gap/no-fulltext-access. Added 2026-05-23 merge pass.

[^fwci-sclerostin2026]: doi:10.1007/s11883-025-01377-w · Yeon S, Seto SW, Bhuyan JD, Chang D, Li CG · *Current Atherosclerosis Reports* 2026 · review · sclerostin in vascular calcification: hypoxia-driven regulation and therapeutic modulation by natural products · archive: DOI not found in metadata (too recent). Abstract-level verification via Crossref only. Added 2026-05-23 merge pass.
