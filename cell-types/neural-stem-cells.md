---
type: cell-type
aliases: [NSCs, neural progenitor cells, NPCs, adult neural stem cells, aNSCs, B cells (SVZ context only)]
cell-ontology-id: CL:0000047
tissue-of-origin: ["[[brain]]"]
key-markers-mouse: [GFAP+, Sox2+, Nestin+, Glast+ (Slc1a3), CD133+ (Prom1)]
key-markers-human: [GFAP+, SOX2+, NESTIN+, VIMENTIN+, S100B (subset)]
lineage-output: [neurons, astrocytes, oligodendrocytes]
self-renewal: yes
aging-relevant: yes
affected-hallmarks: ["[[stem-cell-exhaustion]]", "[[cellular-senescence]]"]
key-aging-phenotypes: ["[[cognitive-aging]]"]
typical-niche: "SVZ (lateral ventricle wall — pinwheel architecture, contact ependyma + vascular endothelium); SGZ (dentate gyrus granule cell layer); both neurogenic but architecturally distinct"
niche-signaling: ["[[notch-pathway]]", "[[wnt-beta-catenin]]", "[[bmp-signaling]]", "[[tgf-beta]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "All 10 footnote DOIs checked against source PDFs or PubMed records. Doetsch 1999, Maslov 2004, Sorrells 2018, Boldrini 2018, Sanai 2011, and Kalamakis 2019 verified against locally downloaded PDFs. Eriksson 1998 (not_oa; status: failed) and Reynolds 1992 (not_oa) verified against PubMed abstract only — claims are lightly qualified. Spalding 2013 (status: failed) verified against PubMed abstract. Canonical database identity fields not applicable (cell-type page)."
---

# Neural Stem Cells (NSCs)

Multipotent progenitors of the adult mammalian central nervous system, resident in two anatomically distinct neurogenic niches: the **subgranular zone (SGZ)** of the dentate gyrus (hippocampus) and the **subventricular zone (SVZ)** of the lateral ventricle wall. NSCs generate new neurons and glial cells throughout adult life in rodents, and to a debated extent in adult humans. In aging, both niches show decline in NSC proliferative activity and neurogenic output, contributing to [[stem-cell-exhaustion]] at the CNS level. The SGZ niche is directly linked to hippocampal-dependent learning and memory, making NSC aging a candidate mechanism underlying age-related cognitive decline.

---

## Discovery timeline

- **Altman 1965** — First evidence of adult neurogenesis via [³H]-thymidine autoradiography in rat dentate gyrus; dismissed by the prevailing no-new-neurons dogma for decades. #gap/unsourced — Altman JJ Comp Neurol 1965; DOI not confirmed in archive; held as historical context only.
- **Reynolds & Weiss 1992** — Isolation of multipotent neural precursors from adult mouse striatum using the neurosphere assay; established that adult CNS contains self-renewing, multipotent cells [^reynolds1992].
- **Eriksson 1998** — BrdU/NeuN co-labeling of postmortem human hippocampal tissue from cancer patients (n=5) who received BrdU for clinical oncology staging; demonstrated BrdU+/NeuN+ cells in adult human dentate gyrus, interpreted as evidence of adult neurogenesis in humans [^eriksson1998]. Note: very small n; BrdU was administered for clinical purposes so dosing was not optimized for neurogenesis labeling.
- **Doetsch 1999** — Showed SVZ astrocytes (GFAP+ cells, "Type B cells") are the primary neural stem cells in adult mouse brain, resolving the identity of the SVZ NSC [^doetsch1999].
- **Sanai 2011** — Characterized the human SVZ as a "ribbon" of GFAP+ cells; identified a robust chain-migration corridor in human infants (present from birth, depleted between 6–18 months), not present at comparable density in older children or adult brain; also discovered a medial migratory stream (MMS) targeting the ventromedial prefrontal cortex in infants 4–6 months of age [^sanai2011].
- **Spalding 2013** — Applied retrospective ¹⁴C birth-dating to human hippocampal neurons; estimated ~700 new neurons are added per hippocampus per day in adulthood (~1.75% of DG neurons renewed annually), with a modest but non-zero age-related decline [^spalding2013].

---

## Two-niche taxonomy

### SVZ (lateral ventricle wall)

The SVZ niche is organized in a **pinwheel architecture**: Type B cells (GFAP+, Sox2+, quiescent or slowly dividing) contact both the ventricular ependymal layer and the underlying vasculature. The lineage progression is:

**Type B (NSC/GFAP+)** → **Type C (transit-amplifying progenitor, Dlx2+, Ki67+)** → **Type A (neuroblasts, PSA-NCAM+, DCX+)** → rostral migratory stream (RMS) → olfactory bulb interneurons (granule and periglomerular neurons)

- Type B cells divide ~once per month in mouse; represent the slowly cycling "label-retaining" population.
- Type C cells are the most proliferative compartment; divide rapidly and are the principal target of growth factors (EGF, FGF2).
- Type A neuroblasts migrate ~2–5 mm along the RMS to the olfactory bulb in rodents. In humans, this RMS is vestigial in adults [^sanai2011].

### SGZ (dentate gyrus)

The SGZ niche resides in a thin zone between the granule cell layer and the hilus. The lineage:

**RGL cell (radial glia-like / Type-1; GFAP+, Sox2+, Nestin+)** → **Type-2a progenitor (Sox2+, Tbr2-)** → **Type-2b (Tbr2+, DCX+)** → **Immature granule neuron (DCX+, NeuN-)** → **Mature granule neuron (NeuN+, Prox1+)**

- RGL/Type-1 cells are largely quiescent; a small fraction activate and divide asymmetrically, self-renewing one daughter and generating a transit-amplifying clone.
- New dentate granule neurons integrate locally into the hippocampal circuit (CA3 mossy fiber projection) within ~4–6 weeks in rodents; they show enhanced synaptic plasticity during a critical ~4–6 week maturation window compared to older granule neurons.
- Oligodendrogenesis from SGZ NSCs is rare under homeostatic conditions; oligodendrocyte production is more prominent from SVZ NSCs.

---

## Human adult neurogenesis — active controversy

#gap/contradictory-evidence

Two high-impact papers published in the same year reached opposite conclusions:

**Sorrells et al. 2018 (Nature):** Systematic immunohistochemical analysis of human hippocampal tissue (n=59 total samples: 37 postmortem + 22 neurosurgical, spanning fetal to adult; adult subset: n=17 postmortem controls + n=12 surgical epilepsy cases, ages 18–77 years) using multiple markers (Ki67, DCX, PSA-NCAM, Sox2, BLBP, Vimentin). Concluded that DCX+ immature neurons drop sharply during the first year of life and are **undetectable in adults aged 18–77 years**. No proliferating cells with progenitor morphology were found in the adult SGZ. Proposed that DG neurogenesis does not continue — or is extremely rare — in adult humans [^sorrells2018].

**Boldrini et al. 2018 (Cell Stem Cell):** Stereological analysis of human DG (n=28 postmortem donors, ages 14–79 years). Reported that Sox2+ quiescent neural progenitors (QNPs) declined selectively in anterior-mid DG with age, while proliferating intermediate progenitors (Ki-67+ INPs), DCX+ immature granule neurons, NeuN+ mature granule neurons, and DG volume were **stable** across the 65-year age span. Concluded that adult human hippocampal neurogenesis **persists into old age**, though with declining angiogenesis and neuroplasticity in older individuals [^boldrini2018].

**Moreno-Jiménez et al. 2019 (Nature Medicine):** Optimized tissue fixation protocol; immunohistochemistry for DCX, PSA-NCAM, and TBR2 in postmortem DG (n=13 neurologically normal controls + 45 Alzheimer's disease donors, ages 43–97 years). Found thousands of DCX+ cells per mm³ in neurologically healthy adult human DG; neurogenesis was markedly reduced in Alzheimer's disease brains [^moreno-jimenez2019].

**Key methodological crux:** The three studies differ substantially in tissue fixation protocols, postmortem interval (PMI), and antigen retrieval. Sorrells 2018 used relatively long PMI samples without optimized fixation for DCX antigenicity; Moreno-Jiménez 2019 used short PMI (<4 h) and controlled fixation. DCX is labile and sensitive to fixation artifacts. The field has not reached consensus as of 2026. The controversy turns on technical questions (antibody specificity, fixation, PMI control) as much as biological ones.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (NSC machinery conserved) |
| Phenotype conserved in humans? | **contested** — see above |
| Replicated in humans? | contradicted / methodology-dependent |

---

## Aging biology

### SVZ pool decline

Maslov et al. 2004 characterized age-related changes in SVZ NSCs in C57BL/6J male mice (4.5 months vs 26 months). The frequency of cells forming neurospheres (a functional proxy for NSC self-renewal) declines to approximately half the young-adult level in old mice, accompanied by an approximately twofold reduction in SVZ NSC number as measured by the slowly-cycling cell marker Mcm2 [^maslov2004]. Both the NSC compartment (Mcm2+/IdU−) and the proliferative progenitor compartment (Mcm2+/IdU+) decline proportionately, indicating numerical loss rather than a selective activation defect. The rate of division of proliferative progenitors (fraction in S-phase) is unchanged between young and old animals. #gap/needs-human-replication

### Deep quiescence accumulation (Kalamakis 2019)

Single-cell RNA-sequencing of SVZ NSCs across young (2 month), mid-aged (7 month), and old (22 month) C57BL/6 mice revealed that aging is associated with an accumulation of NSCs in a **deep quiescence state**, transcriptionally distinct from physiological shallow quiescence [^kalamakis2019]. Key findings:

- The proportion of activated NSCs and transit-amplifying progenitors declines sharply with age; the quiescent NSC fraction becomes dominant.
- Aged quiescent NSCs show upregulation of quiescence-promoting genes (including factors in the BMP and Notch pathways) and downregulation of cell-cycle entry genes.
- Deep quiescence is not equivalent to senescence — most aged NSCs retain proliferative potential when stimulated ex vivo, though capacity is reduced.
- Niche-derived signals identified as candidate extrinsic drivers of deep quiescence induction: upregulation of the Wnt antagonist **sFRP5** in the aged SVZ niche and elevated niche-derived inflammatory signals (interferon pathway); these were identified by transcriptomic profiling of NSCs and neighboring niche cells. Intervention to neutralize both (anti-sFRP5 and anti-inflammatory) increased activation of old NSCs during homeostasis and following injury.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial (human SVZ NSC scRNA data sparse) |
| Phenotype conserved in humans? | unknown |
| Replicated in humans? | not tested |

### SGZ proliferation decline

Proliferating (Ki67+, BrdU+) cells in the SGZ decrease substantially with age in rodents — multiple studies report ~50–80% reduction in new cell production between young adult and aged mice. The decline begins early and is driven by both reduced NSC activation frequency and reduced survival of newborn neurons. Maslov et al. 2004 documented an approximately twofold reduction in SVZ NSC number between 4.5-month and 26-month-old C57BL/6J mice (confirmed by both Mcm2 in situ marker and double-nucleoside labeling), with neurosphere formation from old animals reduced to approximately half that of young animals [^maslov2004]. #gap/needs-replication — the twofold figure is for SVZ; the SGZ decline magnitude is less precisely characterized and varies by strain and assay.

In aged SGZ, the balance of NSC fates shifts away from neurogenic toward astrogenic differentiation under the influence of elevated BMP signaling, which promotes gliogenesis over neurogenesis (see Niche signaling section below).

### Cellular senescence in NSCs

A subset of aged NSCs accumulate markers of cellular senescence (p21+, p16Ink4a+, SA-β-Gal+) in both SVZ and SGZ, analogous to the geriatric satellite cell senescence documented by Sousa-Victor 2014 in muscle (see [[satellite-cells]]). Senescent NSCs contribute to the SASP-mediated inflammatory microenvironment in the aged neurogenic niche, which suppresses activation of neighboring quiescent NSCs. This creates a feedforward suppression loop connecting [[cellular-senescence]] to [[stem-cell-exhaustion]] in the brain. #gap/needs-replication — mechanistic detail of NSC-specific senescence in vivo is less established than in muscle.

---

## Niche signaling regulation

| Pathway | Effect on NSCs | Aging change |
|---|---|---|
| [[notch-pathway]] | Promotes quiescence; Dll1/Dll4 from ependyma and blood vessels suppress NSC activation | Reduced Delta expression with age → deepened quiescence or loss of quiescence maintenance (paradoxically) |
| [[wnt-beta-catenin]] | Proneurogenic; activates NSC cell-cycle entry and promotes neuronal fate | Reduced Wnt tone in aged SVZ/SGZ; elevated inhibitors (Dkk1, SFRPs) |
| [[bmp-signaling]] | Gliogenic; BMP4/BMP2 promote astrocytic fate over neuronal; Id proteins downstream suppress proneural factors | BMP signaling increases with age → astrogenic bias; Noggin (BMP antagonist) expression declines |
| [[tgf-beta]] | Inhibitory to NSC activation at high concentrations; niche-derived TGF-β1 promotes quiescence | TGF-β1 elevated in aged brain; excess signaling may contribute to NSC inactivation |
| [[gdf11]] | Originally claimed (Katsimpardi 2014, Science) to restore SVZ neurogenesis via systemic rejuvenation; subsequent data disputed whether circulating GDF11 actually increases with age and whether the neurogenesis effect is robust. The claim that GDF11 declines with age and its restoration is neurogenic is contested. [[gdf11]] page has verification context. | #gap/contradictory-evidence |

---

## Therapeutic relevance

### Endogenous NSC activation

Because most aged NSCs retain intrinsic proliferative potential when properly stimulated, pharmacological activation of quiescent NSCs is a therapeutic concept for cognitive aging and neurodegeneration:

- **Notch modulation** — Increasing Delta-like ligand presentation or suppressing Notch to allow exit from deep quiescence; preclinical concept only.
- **BMP antagonism** — Noggin infusion into aged mouse brain increases SGZ proliferation in proof-of-concept studies. #gap/needs-human-replication — no clinical-stage agent.
- **Physical exercise** — Voluntary running is the most reproducible pro-neurogenic stimulus in rodents; increases SGZ proliferation, neuronal survival, and hippocampus-dependent learning in aged mice. Translational evidence in humans is indirect (hippocampal volume preservation, cognitive outcomes) but supportive. #gap/needs-human-replication

### NSC transplantation

Preclinical studies in stroke and Parkinson's disease models have used NSC transplantation to restore circuit function:

- Human fetal-derived NSCs transplanted into rodent stroke models show partial motor recovery; mechanism likely includes neuroprotection and circuit repair rather than direct neuronal replacement.
- Stem Cells Inc. (later Neuralstem) conducted Phase 1/2 trials of NSC transplant for ALS and chronic spinal cord injury; neurogenic replacement was not the primary mechanism claimed. No aging-specific trials as of 2026.
- The limited migratory capacity of transplanted NSCs and low engraftment into circuits remain major barriers. #gap/long-term-unknown

### Senolytics and NSC niche rejuvenation

Clearing senescent cells from the aged neurogenic niche (analogous to niche clearance in muscle) is a theoretical intervention — senescent astrocytes and microglia suppress NSC activation via SASP. See [[senolytics]] and [[cellular-senescence]] for current evidence. No NSC-specific human trial data. #gap/needs-human-replication

---

## Hallmark connections

| Hallmark | Mechanism in NSCs |
|---|---|
| [[stem-cell-exhaustion]] | NSC pool depletion and deep quiescence accumulation reduce neurogenic output with age |
| [[cellular-senescence]] | p16+/p21+ senescent NSCs (geriatric niche) suppress neighboring quiescent NSC activation via SASP |
| [[altered-intercellular-communication]] | Aged systemic milieu (elevated TGF-β, BMP, reduced Wnt) suppresses niche activation; heterochronic plasma factor evidence (including contested GDF11) |
| [[epigenetic-alterations]] | DNA methylation and histone mark changes at neurogenic loci in aged NSCs; reduced chromatin accessibility at proneural gene loci |

---

## Limitations and gaps

- `#gap/contradictory-evidence` — Human adult hippocampal neurogenesis: whether it persists into adulthood is unresolved (Sorrells 2018 vs. Boldrini 2018 vs. Moreno-Jiménez 2019). Technical standardization of tissue fixation and antigen retrieval is required before this can be resolved.
- `#gap/needs-human-replication` — All mechanistic aging data (deep quiescence, BMP signaling increase, Notch decline) are from rodent models. The human SVZ ribbon's NSC functional capacity in aging is uncharacterized at single-cell resolution.
- `#gap/needs-human-replication` — Endogenous NSC activation therapies (Notch, BMP antagonism, exercise) have not been tested in aging-specific human trials.
- `#gap/needs-replication` — Deep quiescence accumulation (Kalamakis 2019) is from a single scRNA study; the specific transcriptional signature requires independent validation.
- `#gap/contradictory-evidence` — GDF11 as a systemic neurogenic factor; original Katsimpardi 2014 claims are disputed; see [[gdf11]] for current evidence state.
- `#gap/no-mechanism` — The molecular trigger that converts physiological shallow quiescence into deep/irreversible quiescence in aged NSCs is not identified.
- `#gap/long-term-unknown` — The long-term fate of accumulating deep-quiescent NSCs is unknown: do they eventually senesce, die, or remain indefinitely quiescent?

---

## See also

- [[stem-cell-exhaustion]] — hallmark page; NSC decline is a CNS-specific example
- [[cellular-senescence]] — p16+/p21+ NSC senescence in geriatric niche
- [[notch-pathway]] — primary quiescence maintenance signal in NSC niche
- [[wnt-beta-catenin]] — proneurogenic activation signal; declines with age
- [[bmp-signaling]] — gliogenic fate switch; elevated in aged neurogenic niche
- [[tgf-beta]] — inhibitory niche signal elevated in aged brain
- [[gdf11]] — heterochronic factor with contested neurogenic role
- [[sox2]] — core NSC identity transcription factor
- [[brain]] — tissue context (implicit stub)
- [[neurons]] — primary lineage output (implicit stub)
- [[astrocytes]] — secondary lineage output; also GFAP+ niche cells (implicit stub)
- [[oligodendrocytes]] — rare lineage output from SGZ; more common from SVZ (implicit stub)
- [[cognitive-aging]] — key downstream phenotype of NSC decline (implicit stub)
- [[induced-pluripotent-stem-cells]] — reprogramming approach; R23a sibling page (implicit stub)
- [[mesenchymal-stem-cells]] — parallel adult stem cell type; R23a sibling page (implicit stub)
- [[satellite-cells]] — muscle stem cells; parallel deep-quiescence/senescence story
- [[hematopoietic-stem-cells]] — blood stem cells; parallel pool-expansion paradox story
- [[microglia]] — CNS immune cells in the neurogenic niche; bidirectional signaling

---

## Footnotes

[^reynolds1992]: [[studies/reynolds-weiss-1992-neurosphere]] · doi:10.1126/science.1553558 · Reynolds BA, Weiss S · in-vitro · Science 1992;255:1707-1710 · first isolation of multipotent, self-renewing neural precursors from adult mouse striatum via neurosphere assay; growth in EGF; cells differentiated into neurons and astrocytes · n=not applicable (cell culture) · model: adult mouse striatum · not_oa — unverifiable against full PDF

[^eriksson1998]: [[studies/eriksson-1998-adult-human-neurogenesis]] · doi:10.1038/3305 · Eriksson PS, Perfilieva E, Björk-Eriksson T et al. · observational (postmortem BrdU+NeuN co-labeling) · Nat Med 1998;4:1313-1317 · BrdU+/NeuN+ and BrdU+/calbindin+ and BrdU+/NSE+ cells detected in adult human DG; BrdU given for clinical oncology staging prior to death · n=5 patients · model: adult human hippocampus · not_oa — verified via PubMed abstract (PMID: 9809557)

[^doetsch1999]: [[studies/doetsch-1999-svz-astrocytes-neural-stem-cells]] · doi:10.1016/s0092-8674(00)80783-7 · Doetsch F, Caillé I, Lim DA, García-Verdugo JM, Alvarez-Buylla A · in-vivo · Cell 1999;97:703-716 · demonstrated that GFAP+ SVZ astrocytes (Type B cells) are the primary neural stem cells in adult mouse brain; antimitotic treatment ablated all dividing cells; regeneration proceeded from GFAP+ cells · n=multiple mouse cohorts · model: adult mouse SVZ

[^sanai2011]: [[studies/sanai-2011-human-svz-ribbon]] · doi:10.1038/nature10487 · Sanai N et al. · observational (immunohistochemistry) · Nature 2011;478:382-386 · human SVZ contains a ribbon of GFAP+ cells; robust chain migration corridor with DCX+ neuroblasts present from birth and depleted between 6–18 months postnatal; adult human SVZ lacks rodent-equivalent RMS; also identified novel medial migratory stream (MMS) targeting prefrontal cortex in infants · n=60 human tissue samples (10 neurosurgical + 50 autopsied, birth to 84 years) · model: human infant and adult brain

[^spalding2013]: [[studies/spalding-2013-human-dg-neurogenesis-c14]] · doi:10.1016/j.cell.2013.05.002 · Spalding KL et al. · observational (retrospective ¹⁴C birth-dating) · Cell 2013;153:1219-1227 · ~700 new neurons added per hippocampus per day; ~1.75% annual renewal of DG neurons in adulthood; modest age-related decline in neurogenesis estimated · n=55 human hippocampal samples (ages 19–92) · model: adult human dentate gyrus · download failed — verified via PubMed abstract only; quantitative figures (700/day, 1.75%, n=55) are widely cited and consistent with Sorrells 2018 citation of this work as reference 11

[^maslov2004]: [[studies/maslov-2004-svz-aging-nsc]] · doi:10.1523/JNEUROSCI.4608-03.2004 · Maslov AY, Barone TA, Plunkett RJ, Pruitt SC · in-vivo + in-vitro · J Neurosci 2004;24:1726-1733 · approximately twofold reduction in SVZ NSC number between 4.5-month and 26-month-old mice by Mcm2 marker in situ; neurosphere-forming frequency from old brains (21 month) reduced to ~51% of young (2 month); NSC and proliferative progenitor compartments decline proportionately · n=C57BL/6J male mice at 4–4.5 months and 26 months (in situ); 2 months and 21 months (neurosphere culture) · model: C57BL/6J mouse SVZ

[^sorrells2018]: [[studies/sorrells-2018-human-dg-neurogenesis-absent]] · doi:10.1038/nature25975 · Sorrells SF et al. · observational (immunohistochemistry) · Nature 2018;555:377-381 · DCX+ immature neurons undetectable in adult human DG (ages 18–77); declined sharply in first year of life; adult subset: n=17 postmortem controls + n=12 surgical epilepsy (ages 18–77); total cohort n=59 (37 postmortem + 22 surgical, fetal to adult) · model: human hippocampus (fetal to adult)

[^boldrini2018]: [[studies/boldrini-2018-human-neurogenesis-persists]] · doi:10.1016/j.stem.2018.03.015 · Boldrini M et al. · observational (stereology) · Cell Stem Cell 2018;22:589-599 · Sox2+ quiescent neural progenitors (QNPs) declined selectively in anterior-mid DG with age; proliferating Ki-67+ intermediate progenitors (INPs), DCX+ immature granule neurons, NeuN+ mature granule neurons, and DG volume stable across the 65-year span; declining angiogenesis and neuroplasticity in older subjects · n=28 postmortem donors (14–79 years, 17 women + 11 men) · model: human dentate gyrus

[^moreno-jimenez2019]: [[studies/moreno-jimenez-2019-human-neurogenesis-ad]] · doi:10.1038/s41591-019-0375-9 · Moreno-Jiménez EP et al. · observational (immunohistochemistry, optimized fixation) · Nat Med 2019;25:554-560 · thousands of DCX+ cells per mm³ detected in neurologically healthy adult human DG up to ninth decade; sharply reduced in Alzheimer's disease; short PMI (<4 h) and controlled fixation key to DCX antigenicity · n=13 neurologically normal controls + 45 AD donors · model: human dentate gyrus · not_oa — verified via PubMed abstract (PMID: 30911133); n and qualitative findings consistent with abstract; full quantitative details (exact cells/mm³, p-values) not independently verified

[^kalamakis2019]: [[studies/kalamakis-2019-aged-svz-deep-quiescence]] · doi:10.1016/j.cell.2019.01.040 · Kalamakis G et al. · in-vivo (scRNA-seq + functional) · Cell 2019;176:1407-1419 · single-cell transcriptomics of SVZ NSCs at 2, 7, 22 months; aging shifts NSC pool toward deep quiescence; activated NSC fraction and transit-amplifying progenitors decline sharply from 2 to 7 months; quiescent NSCs retain proliferative potential ex vivo; sFRP5 (Wnt antagonist) and niche-derived inflammatory signals identified as extrinsic quiescence drivers · n=mice at 2, 7, 22 months; ~3066 single cells (10x Chromium platform: 1696 young + 1370 old) plus 225 cells (Smart-seq2) · model: C57BL/6 mouse SVZ
