---
type: tissue
aliases: [corium, derma, cutis vera, true skin]
parent-system: integumentary-system
key-cell-types:
  - "[[dermal-fibroblasts]]"
  - "[[microvascular-endothelial-cells]]"
  - "[[pericytes]]"
  - "[[mast-cells]]"
  - "[[tissue-resident-macrophages]]"
  - "[[dermal-dendritic-cells]]"
key-aging-phenotypes:
  - "[[skin-aging]]"
related-hallmarks:
  - "[[cellular-senescence]]"
  - "[[chronic-inflammation]]"
  - "[[loss-of-proteostasis]]"
  - "[[epigenetic-alterations]]"
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "All six primary sources verified against PDF: Fisher 2009 (Am J Pathol), Fisher 1996 (Nature), Demaria 2014 (Dev Cell), Velarde 2012 (Aging), Fisher/Voorhees 2023 (J Cell Commun Signal), Shin 2019 (Int J Mol Sci). Corrections applied: (1) collagen I dry-weight proportion corrected from ~70% to ~60–68% per Shin 2019; (2) collagen III proportion corrected from ~10–15% to ~6–9% dry weight; (3) HA intrinsic-aging claim corrected — HA quantity unchanged in intrinsic aging per Shin 2019; HABP decline is the functional change; (4) versican intrinsic-aging upregulation claim corrected to 'uncertain/contradictory evidence'; (5) ~1%/yr collagen loss figure tagged #gap/unsourced — not in any verified source; (6) Fisher 2009 self-amplifying loop clarified as MMP-1-centred (MMP-3/9 are secondary processors, not co-drivers of the loop). Canonical-database identity fields not applicable to this tissue page."
literature-checked-through: null
---


# Dermis

The dermis is the connective-tissue layer of skin situated between the avascular [[epidermis]] above and the subcutaneous fat (hypodermis) below. Approximately 1–4 mm thick depending on body site (thickest on the back; thinnest on the eyelid), it accounts for the great majority of skin's mechanical properties and provides the structural scaffold into which the epidermis is anchored. The dermis is an ECM-dominated tissue: collagen fibers comprise approximately 75% of dermal dry weight, of which collagen I accounts for 80–90% of total collagen (i.e., collagen I represents approximately 60–68% of dermal dry weight) [^shin2019]. The remainder is composed of collagen III, elastin, fibrillin microfibrils, hyaluronic acid, and a family of small leucine-rich proteoglycans (decorin, biglycan, versican). This matrix is produced, maintained, and remodelled principally by resident **[[dermal-fibroblasts]]**. A microvasculature, sensory nerve endings, and a small resident immune compartment (mast cells, macrophages, dendritic cells) complete the dermal ecosystem.

Age-associated changes in the dermis — collagen fragmentation, fibroblast senescence, elastin dysregulation, AGE accumulation, and microvascular rarefaction — are the proximate histological substrate of most clinical [[skin-aging]] phenotypes (wrinkles, inelasticity, skin thinning). Full mechanistic detail for these changes lives on [[skin-aging]]; this page provides the tissue anatomy and cross-references that anchor it.

---

## Papillary vs reticular dermis

| Layer | Location | Architecture | Cell density | Aging-relevant note |
|---|---|---|---|---|
| **Papillary dermis** | Superficial; immediately beneath the epidermis | Loose connective tissue; finer, randomly-oriented collagen I + III fibrils; rich capillary loops (Meissner corpuscles nearby); rete ridges interdigitate with epidermal rete pegs | Higher; closer spacing of fibroblasts | **Rete ridge flattening** — the undulating epidermal-dermal junction progressively flattens with age, reducing mechanical adhesion and nutrient/O₂ exchange area; solar elastosis deposits accumulate here in photoaged skin |
| **Reticular dermis** | Deeper; merges gradually into hypodermis | Dense irregular connective tissue; thick, interwoven collagen I bundles + more abundant elastic fibres; Pacinian corpuscles; pilosebaceous units and eccrine glands root here | Lower; fibroblasts more widely spaced | **Collagen bundle fragmentation** — MMP-1 (collagenase-1) initiates fragmentation of thick collagen bundles; MMP-3 and MMP-9 act as secondary processors of the MMP-1 cleavage products. The self-amplifying cycle demonstrated in Fisher 2009 is specifically MMP-1-centred: fragmented collagen → ↓ fibroblast mechanical tension → ↑ ROS → ↑ AP-1/c-Jun → ↑ MMP-1 → further fragmentation [^fisher2009] |

---

## Extracellular matrix composition

The dermal ECM is the structural output of [[dermal-fibroblasts]] and its composition determines skin's mechanical and biological properties.

| Component | Approximate proportion | Key functions | Aging change |
|---|---|---|---|
| Collagen I ([[col1a1]] / [[col1a2]] — R40 stubs) | ~60–68% dry weight (collagen fibers = ~75% dry weight; collagen I = 80–90% of total collagen) [^shin2019] | Tensile strength; primary scaffold | Fragmentation (MMP-driven); ~1% net loss per year of adulthood #gap/unsourced — this figure is widely cited (Varani 2006 is the usual primary source; not derived from sources verified here); collagen I:III ratio shifts toward III [^fisher2009] |
| Collagen III ([[col3a1]] — R40 stub) | ~6–9% dry weight (8–12% of total collagen × ~75% dry weight) [^shin2019] | Fine fibres; flexibility; wound response collagen | Relatively preserved relative to I; increased I:III ratio shift implies qualitative mechanical change |
| Elastin ([[eln]] — R40 stub) | ~2–4% dry weight | Recoil and resilience; allows skin to snap back after deformation | Progressive loss in intrinsic aging; paradoxical abnormal accumulation (solar elastosis) in photoaged dermis |
| Fibrillin-1 microfibrils ([[fbn1]] — R40 stub) | Minor; scaffolds elastin assembly | Template for elastic fibre assembly; mechanosensing | Fibrillin-1 microfibril network disrupted in photoaged dermis; contributes to elastin dysregulation |
| [[hyaluronic-acid]] (HA) | Major glycosaminoglycan | Hydration (binds ~1000× its weight in water); space-filling; cell signalling via CD44/RHAMM | **Intrinsic aging:** HA content itself is not significantly different between young and old skin; HA-binding proteins (HABPs) are reduced, impairing HA-mediated signalling [^shin2019]. **Photoaging:** HA is increased, particularly in solar elastosis regions (abnormal accumulation rather than functional HA) [^shin2019]. The common clinical claim of "HA loss with age" refers to functional HABP decline, not net HA quantity in intrinsically aged skin #gap/unsourced — primary quantitative data on HABP decline in human dermis needed |
| Decorin | Small leucine-rich proteoglycan | Collagen fibril diameter regulation; TGF-β sequestration | Altered in aged and photoaged dermis; relevant to fibrosis regulation #gap/unsourced |
| Versican | Large proteoglycán; chondroitin sulfate-bearing | Pericellular matrix; cell adhesion/migration | Status uncertain in intrinsic aging (Shin 2019 records "Not changed?" for intrinsic aging; versican is increased in photoaged solar elastosis regions) [^shin2019] #gap/contradictory-evidence — earlier reports claimed upregulation; Shin 2019 review finds ambiguous evidence |
| Dermatan sulfate proteoglycans | Structural glycosaminoglycans | Collagen fibril assembly; growth factor sequestration | Compositional shift with age #gap/unsourced |

---

## Resident cell populations

### [[dermal-fibroblasts]] (primary ECM producers; R38 stub)

The dominant mesenchymal resident. Synthesise and remodel all major ECM components (collagen I, III, elastin, fibronectin, HA). In aging:
- Accumulate replicative and UV-induced premature senescence (p16^INK4a+)
- Shift from net ECM synthesis toward net degradation (↑ MMP-1, MMP-3, MMP-9; ↓ TGF-β/Smad3-driven collagen I transcription)
- Secrete a SASP that drives local chronic inflammation (IL-6, IL-8, CXCL1, MMPs) — see [[sasp]]

Detailed cell biology lives on [[dermal-fibroblasts]] (R38 stub); mechanistic citations flow through [[skin-aging]].

### Microvascular endothelial cells (no dedicated page)

Line the capillary loops of the papillary dermis and the deeper arteriolar/venular plexuses of the reticular dermis. The microvasculature mediates nutrient and O₂ delivery, thermoregulation, immune cell trafficking, and inflammatory responses. Microvascular rarefaction (vessel dropout) in aged dermis contributes to impaired thermoregulation, reduced wound healing, and the pale fragile appearance of aged skin. Senescent endothelial cells also contribute to SASP in the dermal milieu [^demaria2014].

### Pericytes (no dedicated page)

Mural cells ensheathing capillaries; regulate microvascular tone and barrier properties. Contribute to tissue fibrosis when dysregulated in aged skin. No dedicated wiki page.

### Mast cells (no dedicated page)

Tissue-resident granulated immune cells. Release histamine, tryptase, and cytokines. Elevated mast cell degranulation in photoaged dermis contributes to chronic low-grade inflammation. #gap/unsourced — quantitative mast cell density changes in aged dermis need primary citation.

### Tissue-resident macrophages (no dedicated page)

Derived from circulating monocytes plus yolk-sac-seeded long-lived residents. Perform homeostatic ECM surveillance (efferocytosis, matrix-degrading activity), wound healing (M1 → M2 shift), and clearance of senescent cells. Age-associated defects in macrophage efferocytosis and senescent-cell clearance allow p16+ fibroblasts to persist [^shin2019].

### Dermal dendritic cells (no dedicated page)

Distinct from epidermal Langerhans cells. Dermal DCs (CD11c+, CD1a+) present antigen to T cells and modulate adaptive immune responses in the dermis. Their role in the pro-inflammatory dermal milieu of aged skin is understudied relative to macrophages. #gap/no-mechanism

---

## Aging changes

| Change | Mechanism | Key proteins/processes | Link |
|---|---|---|---|
| **Fibroblast senescence accumulation** | UV-induced DNA damage (SIPS) + replicative exhaustion → p21^CIP1 → p16^INK4a G1 arrest; impaired NK + macrophage clearance in old skin | p16^INK4a, p21^CIP1, [[sasp]] | [[cellular-senescence]]; [[skin-aging]] |
| **Collagen fragmentation** | UV-driven MMP-1 + MMP-3 + MMP-9 induction via AP-1/NF-κB [^fisher1996]; in *aged* (non-UV-exposed) dermis the central effector is **MMP-1 specifically** — ~8-fold mRNA + 2-fold protein elevation, with oxidative stress from fragmented collagen creating a self-amplifying degradation cycle via c-Jun/AP-1 + α2β1 integrin (NOT YAP/TAZ); MMP-3/MMP-9 act as secondary processors of MMP-1 cleavage products in this paper, not as independently demonstrated drivers [^fisher2009] | [[col1a1]], [[col3a1]], MMP-1, MMP-3, MMP-9 | [[skin-aging]] § Dermal changes; [[loss-of-proteostasis]] |
| **Elastin loss + solar elastosis** | Intrinsic: progressive elastin fibril fragmentation + reduced elastic fibre synthesis; Photoaged: UV-activated fibroblasts overproduce abnormal amorphous elastin and fibrillin deposits in papillary/upper reticular dermis (solar elastosis) — distinct from degradation per se [^fisher1996] | [[eln]], [[fbn1]] | [[skin-aging]] § Histology |
| **Reduced LOX cross-linking** | Lysyl oxidase (LOX) activity declines in aged fibroblasts; reduced oxidative cross-linking of collagen and elastin fibres reduces fibril stability; net mechanical effect: increased compliance + reduced resilience | LOX enzyme (no wiki page yet) | #gap/unsourced — LOX activity decline in aged human dermis needs primary-source citation; flag for R39 |
| **AGE accumulation on collagen** | Non-enzymatic glycation of long-lived (>10–15 yr half-life) collagen I/III → AGE adducts (predominant in aged dermis: [[glucosepane]]); cross-links collagen fibrils non-enzymatically, stiffening the matrix and impairing fibroblast mechanosensing | [[advanced-glycation-end-products]], [[glucosepane]] | [[loss-of-proteostasis]] |
| **Microvascular rarefaction** | Age-related vessel dropout in papillary and reticular plexuses; reduced VEGF synthesis by aged fibroblasts; senescent endothelial SASP impairs angiogenesis | VEGF, endothelial cells | Reduced thermoregulation; impaired wound healing; pallor of aged skin #gap/no-mechanism for initiating signal |

---

## Intrinsic vs photoaged dermis

For full treatment see [[skin-aging]] § Intrinsic vs photoaging. The tissue-level distinction is:

| Feature | Intrinsic (chronological) dermis | Photoaged dermis |
|---|---|---|
| Collagen change | Quantitative loss (often cited as ~1%/yr #gap/unsourced — Varani 2006 is the usual primary source; not verified here); reduced I:III ratio; slow fibril attrition | Accelerated fragmentation; MMP-1 strongly upregulated by UV-AP-1 axis [^fisher1996]; qualitative as well as quantitative change |
| Elastin/fibrillin | Gradual, progressive elastic fibre loss; fibres become sparse and fine | Solar elastosis — massive amorphous basophilic deposits in papillary/upper reticular dermis; aberrant synthesis not simple degradation |
| Fibroblast phenotype | Replicative senescence; gradual collagen synthesis decline | Stress-induced premature senescence (SIPS) added to replicative; SASP more acute; higher local MMP activity |
| GAG/HA content | HA quantity not significantly changed; HA-binding proteins (HABPs) decline [^shin2019]; total sulfated GAGs decrease; dermal hydration decline likely reflects HABP reduction, not HA loss per se | HA increased in solar elastosis regions (abnormal accumulation); total sulfated GAGs increased [^shin2019] |
| Gross appearance | Fine wrinkling; skin thinning; pale; easy bruising | Deep furrows + coarse wrinkling; leathery texture; dyspigmentation; sallow colour (solar elastosis) |

---

## Hallmark intersections

| Hallmark | Dermal mechanism |
|---|---|
| [[cellular-senescence]] | p16^INK4a+ dermal fibroblasts (and endothelial cells) accumulate from ~30s onward; both UV-SIPS and replicative route; impaired clearance accelerates accumulation; transient wound-healing senescence is beneficial (PDGF-AA) [^demaria2014] but chronic accumulation is pathological |
| [[chronic-inflammation]] | SASP from senescent fibroblasts (IL-6, IL-8, CXCL1, MMP-1/3/9) creates a self-amplifying pro-inflammatory ECM-degrading state; AGE-RAGE signalling on macrophages adds a second inflammatory input |
| [[loss-of-proteostasis]] | Collagen and elastin homeostasis is the dominant proteostatic challenge in dermis; MMP/TIMP imbalance + reduced synthesis drive net degradation; AGE cross-linking makes long-lived collagen refractory to physiological remodelling |
| [[epigenetic-alterations]] | Skin-specific DNA methylation clocks (Bormann 2016; Qi 2026 epidermis clock) register accelerated aging in both intrinsic and photoaged compartments; bivalent-region CpG hypermethylation correlates with aging in dermis and epidermis; see [[skin-aging]] § Epigenetic alterations |

---

## Limitations and gaps

- `#gap/unsourced` — quantitative HABP (HA-binding protein) decline in aged human dermis (primary source needed; HA quantity itself is not significantly changed in intrinsic aging per Shin 2019); decorin compositional changes with age; mast cell density changes in aged dermis; LOX activity decline in aged human dermis (cited in Shin 2019 review as Cenizo et al., but that primary source not verified here; flag for R39); "~1% per year" collagen loss figure (Varani 2006 is the usual primary citation; not verified in this pass — add if seeding a Varani study page)
- `#gap/no-mechanism` — initiating signal for microvascular rarefaction in aged dermis; relative contribution of SASP vs. AGE-RAGE vs. exogenous exposome signals to chronic dermal inflammation; initiating signal driving LOX downregulation in aged fibroblasts; why photoaged fibroblasts paradoxically overproduce elastin as solar elastosis while also fragmenting existing elastic fibres
- `#gap/needs-human-replication` — specific quantification of senescent vs. non-senescent fibroblast proportions in aged human dermis in vivo (most data from cultured cells or murine models)
- `#gap/needs-replication` — LOX cross-link reduction as a causal driver (vs. correlate) of mechanical stiffness loss in aged dermis; [[glucosepane]] accumulation as a quantitatively important cross-linker at physiological concentrations in human dermis (partial supersession: Li 2025 published the first direct fluorescence imaging of glucosepane in dermis in db/db diabetic vs wild-type *mouse* skin — see [[glucosepane]] § "Tissue imaging tools" — but human dermis aged-vs-young imaging has not been done) #gap/needs-replication #gap/needs-human-replication
- R40 protein stubs needed: [[col1a1]], [[col1a2]], [[col3a1]], [[eln]], [[fbn1]] (listed in this page as future wikilinks; pages do not yet exist)
- `[[dermal-fibroblasts]]` page seeded as R38 stub; needs full cell-type page to carry verified fibroblast biology citations

---

## Cross-references

- [[skin-aging]] (verified) — canonical phenotype hub; all primary mechanistic citations for dermal changes live there; this tissue page links outward
- [[epidermis]] (R38 stub, being seeded in parallel) — sister tissue; epidermal-dermal junction (rete ridges) connects the two
- [[skin]] (R38 stub, being seeded in parallel) — parent tissue page
- [[dermal-fibroblasts]] (R38 stub) — primary cell type; full senescence + SASP biology lives there
- [[sasp]] (existing) — SASP as the mechanistic bridge from fibroblast senescence to dermal inflammation
- [[cellular-senescence]] (existing) — hallmark MOC
- [[chronic-inflammation]] (existing) — hallmark MOC; SASP-driven dermal inflammation
- [[loss-of-proteostasis]] (existing) — hallmark MOC; collagen homeostasis failure
- [[epigenetic-alterations]] (existing) — hallmark MOC; skin clocks
- [[advanced-glycation-end-products]] (existing process page) — AGE formation on dermal collagen
- [[glucosepane]] (existing process page) — dominant AGE cross-link on long-lived collagen I
- [[hyaluronic-acid]] (existing compound page) — GAG component of dermal ECM; reviewed in therapeutic context
- [[col1a1]], [[col1a2]], [[col3a1]], [[eln]], [[fbn1]] (R40 implicit stubs — protein pages not yet created)
- [[hair-greying]] (planned page) — hair follicle bulge in the reticular dermis; McSC biology
- [[fisetin]], [[dasatinib]], [[quercetin]] (existing) — senolytics; skin-relevant senolytic candidates targeting dermal fibroblast senescence

---

## Footnotes

[^fisher2009]: [[studies/fisher-2009-collagen-fragmentation-mmp]] · doi:10.2353/ajpath.2009.080599 · Fisher GJ et al. · in-vivo + in-vitro · Am J Pathol 2009;174(1):101-114 · model: aged human skin biopsies + cultured human dermal fibroblasts on fragmented vs. intact collagen matrices · 444 citations (100th percentile FWCI) · Collagen fragments generated by MMPs induce fibroblast oxidative stress, which further elevates MMP-1 expression and reduces procollagen I synthesis — a self-amplifying degradation cycle; the collagen I:III ratio shifts toward III in aged dermis · archive: bronze OA

[^fisher1996]: [[studies/fisher-1996-photoaging-ap1-mmp]] · doi:10.1038/379335a0 · Fisher GJ et al. · in-vivo · Nature 1996;379:335-339 · n=6–17 per timepoint · p<0.05 · model: adult Caucasian human skin (buttock), in vivo UVB irradiation · 1,395 citations · Sub-erythemogenic UVB (≥0.01 MED) induces AP-1 + NF-κB, upregulating MMP-1/3/9 (not MMP-2); all-trans retinoic acid pretreatment reduces AP-1 binding ~70% and MMP-1/9 activity 50–80% via AP-1 transrepression; explains both UV-driven collagen fragmentation and retinoid mechanism of action

[^demaria2014]: [[studies/demaria-2014-senescent-cells-wound-healing]] · doi:10.1016/j.devcel.2014.11.012 · Demaria M et al. · in-vivo + in-vitro · Dev Cell 2014;31(6):722-733 · n≥4 per group · model: p16-3MR transgenic mouse (6mm punch biopsy) · 1,889 citations · Senescent fibroblasts and endothelial cells transiently appear at wound sites, secreting PDGF-AA (SASP factor) that drives myofibroblast differentiation; GCV elimination of senescent cells delays wound closure; illustrates antagonistic pleiotropy of dermal fibroblast senescence

[^velarde2012]: [[studies/velarde-2012-mitochondria-skin-senescence]] · doi:10.18632/aging.100423 · Velarde MC et al. · in-vivo + in-vitro · Aging 2012;4(1):3-12 · n=6–13 per group · model: Sod2-/- mouse skin + human keratinocytes/fibroblasts (rotenone) · Mitochondrial oxidative damage drives skin cellular senescence (p16^INK4a ~2-fold), epidermal thinning, and stratum corneum thickening; human keratinocytes more sensitive to mtROS-induced senescence than fibroblasts #gap/needs-human-replication

[^fisher2023]: doi:10.1007/s12079-023-00743-0 · Fisher GJ, Wang B, Cui Y et al. · review · J Cell Commun Signal 2023;17(3):523-529 · 63 citations (100th percentile FWCI) · model: human dermal fibroblasts + aged human skin · MMP-driven ECM degradation triggers aged-fibroblast phenotype (altered morphology; ↑ MMP; ↓ collagen synthesis); mechanical force loss reduces TGF-β signalling, feeding forward into further ECM deterioration; review from the Fisher/Voorhees group (Michigan) · archive: green OA (PMC10409944)

[^shin2019]: doi:10.3390/ijms20092126 · Shin JW, Kwon SH, Choi JY et al. · review · Int J Mol Sci 2019;20(9):2126 · 724 citations (100th percentile FWCI) · Comprehensive review of molecular mechanisms of dermal aging: collagen fragmentation, TGF-β/Smad3 decline, elastic fibre dysregulation, GAG changes; therapeutic interventions reviewed · archive: gold OA
