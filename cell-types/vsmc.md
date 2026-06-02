---
type: cell-type
aliases: [VSMCs, vascular smooth muscle cells, arterial smooth muscle cells, aortic smooth muscle cells, vascular-smooth-muscle-cells]
cell-ontology-id: CL:0000359   # "vascular associated smooth muscle cell" — verified via OLS lookup 2026-05-23; covers all mural smooth muscle cells of blood vessels; for artery-specific work CL:0002590 ("smooth muscle cell of artery") is more precise but has lower cross-study representation in ontology-driven atlases — CL:0000359 retained as primary
tissue-of-origin: ["[[arteries]]"]
key-markers-mouse: [Acta2+ (αSMA), Tagln+ (SM22-α), Myh11+ (smooth muscle MHC), Cnn1+ (calponin), Smtn+ (smoothelin)]
key-markers-human: [ACTA2+ (αSMA), TAGLN+ (SM22-α), MYH11+ (smooth muscle MHC), CNN1+ (calponin), SMTN+ (smoothelin)]
self-renewal: limited
aging-relevant: yes
affected-hallmarks: ["[[cellular-senescence]]", "[[chronic-inflammation]]", "[[mitochondrial-dysfunction]]"]
key-aging-phenotypes: ["[[arterial-stiffening]]", "[[atherosclerosis]]", "[[vascular-calcification]]"]
typical-niche: "tunica media of arteries; laminated between elastic laminae of internal and external elastic membranes; surrounded by collagen/elastin ECM; communicates with endothelium via paracrine signaling across the internal elastic lamina"
niche-signaling: ["[[tgf-beta]]", "[[bmp-2]]", "[[wnt-beta-catenin]]"]
single-cell-aging-signature: "Human aortic scRNA-seq identifies at least 2 VSMC sub-states: contractile (MYH11-hi/TAGLN-hi) and synthetic/modulated (COL1A1-hi/FN1-hi/PDGFRB-hi); aged aortas show expansion of synthetic-state cells and emergence of an osteogenic sub-state (RUNX2+/ALPL+); p16/CDKN2A upregulation marks senescent VSMCs; data from Lao et al. 2019 ATVB (bulk + scRNA phenotyping) and Murtada et al. 2023 (scRNA in progeria). See body for caveats. #gap/needs-replication — large aging-specific human aortic scRNA dataset at cellular resolution is lacking"
literature-checked-through: 2026-05-23
verified: true
verified-date: 2026-05-23
verified-by: claude
verified-scope: "Clayton 2023 verified via PMC10530538 full text (n, PWV, EDD, p-values, dose, strain all confirmed with corrections); Liang 2024 verified against local PDF (SMAD1/5 corrected from SMAD1/5/8; BMP2-sourcing confirmed); Venkatasubramanian 2025 verified via PMC12327803 (PWV values and mouse model corrected — doxorubicin-treated young adult mice, not aged mice); Sá Ferreira 2026 DOI confirmed (10.1016/j.biomaterials.2026.124117) with in-vivo component noted; Weng 2026 DOI confirmed (10.3389/fendo.2026.1839111); Lao 2019 and Murtada 2023 — bronze/green OA, not locally verified; canonical-DB identity fields (CL ID, markers) not re-checked against OLS/CellMarker — CL:0000359 accepted per seeder OLS note; CNN1 confirmed as VSMC-specific calponin isoform per Liang 2024 and primary VSMC literature"
---

# Vascular Smooth Muscle Cells (VSMCs)

The dominant cell type of the arterial tunica media, constituting ~60–70% of cells in large elastic arteries such as the aorta. VSMCs are mesenchymal-derived mural cells that regulate vascular tone, maintain structural integrity, and respond to hemodynamic and biochemical cues through a range of phenotypic states. They are the central cellular substrate of [[vascular-calcification]] (via osteogenic transdifferentiation), [[arterial-stiffening]] (via phenotype switching from contractile to synthetic state and subsequent ECM remodeling), and contribute critically to [[atherosclerosis]] via intimal migration and fibrous cap formation. In aging, VSMC senescence accumulates in the aortic media, amplifying all three pathologies through both cell-autonomous dysfunction and SASP-driven paracrine damage.

## Identity and developmental origins

VSMCs are derived from the mesenchyme, but the specific embryonic origin differs dramatically by vessel location — a heterogeneity with functional consequences in disease:

| Vessel segment | Developmental origin |
|---|---|
| Thoracic aorta, carotid arteries, head/neck vessels | Neural crest cells (ectomesenchyme) |
| Abdominal aorta, lower-body arteries | Lateral plate mesoderm |
| Coronary arteries (adventitial) | Epicardial-derived mesenchyme (EPDCs) |
| Pulmonary vasculature | Secondary heart field mesoderm |

This developmental heterogeneity means that VSMCs at different aortic segments respond differently to the same signaling cues and show distinct disease susceptibility patterns. Thoracic aortic aneurysms (associated with Marfan syndrome, TGF-β dysregulation) preferentially affect the neural-crest-derived segment; abdominal aortic aneurysms (associated with elastin fragmentation and inflammation) preferentially affect the lateral-plate-derived segment. #gap/needs-replication — systematic characterization of developmental-origin-specific aging responses in humans is limited.

## Phenotypic states

Unlike most differentiated cell types, VSMCs are not terminally differentiated — they retain substantial plasticity and can transition between distinct functional states. This phenotypic switching is the load-bearing mechanism connecting VSMC biology to aging pathology [^lao2019].

### Contractile (normal mature) state

The normal quiescent adult VSMC. Characterized by:
- High expression of contractile apparatus proteins: αSMA (ACTA2), smooth muscle myosin heavy chain (MYH11), SM22-α (TAGLN), calponin (CNN1), smoothelin (SMTN)
- Low proliferative activity; minimal collagen/matrix secretion
- Primary function: regulate vascular tone through actin-myosin-based contraction in response to vasoconstrictors (angiotensin II, endothelin-1, norepinephrine) and vasodilators (nitric oxide, prostacyclin)

### Synthetic (dedifferentiated) state

Occurs in response to vascular injury, atherosclerotic stimuli, and systemic inflammation:
- Downregulation of contractile markers (MYH11 loss is most sensitive)
- Upregulation of collagen synthesis (COL1A1, COL3A1), fibronectin (FN1), PDGFR-β signaling, osteopontin (SPP1)
- Increased proliferation (Ki67+) and migration capacity (MMP-2/MMP-9 upregulation)
- Role: lesion formation, fibrous cap synthesis in atherosclerosis, response to mechanical injury
- In atherosclerosis: synthetic-state VSMCs migrate from media to intima, contributing to fibrous cap formation (protective) and foam-cell formation via lipid uptake (pathologic)

### Osteogenic (pathologic calcification) state

The pathologically important switch, directly driving [[vascular-calcification]]:
- RUNX2 induction (the master osteogenic transcription factor — see [[runx2]])
- Alkaline phosphatase (ALPL) upregulation — drives local mineral nucleation
- Osteocalcin (BGLAP) and osteopontin ([[osteopontin]] / SPP1) production
- Matrix vesicle shedding — membrane-bound vesicles loaded with calcium and phosphate that seed hydroxyapatite crystallization
- Loss of calcification inhibitors, particularly downregulation of [[matrix-gla-protein]] (MGP) and fetuin-A uptake
- The net effect is that VSMCs acquire a functional bone-cell-like program while embedded in the arterial wall, mineralizing the ECM and stiffening the vessel

## Triggers of osteogenic transdifferentiation

The switch to osteogenic state is driven by multiple converging signals [^liang2024]:

**Hyperphosphatemia:** Inorganic phosphate enters VSMCs via type III sodium-phosphate cotransporters (PiT-1/SLC20A1 and PiT-2/SLC20A2). Elevated intracellular phosphate directly induces RUNX2 expression and promotes calcium-phosphate crystal nucleation in matrix vesicles. This is the dominant driver in chronic kidney disease-associated vascular calcification. #gap/needs-human-replication — direct demonstration of PiT-mediated RUNX2 induction in primary human VSMCs is limited to in-vitro models.

**BMP-2 / BMP-4 signaling:** Bone morphogenetic protein 2 ([[bmp-2]]) — produced by endothelial cells and macrophages in atherosclerotic lesions — signals through BMPR1A/BMPR2 → SMAD1/5 → direct transcriptional activation of RUNX2 and ALPL. BMP-2 is a paracrine driver of osteogenic transdifferentiation from the inflammatory milieu. Inflammatory cytokines (TNF-α, IL-1β, IL-6) potentiate osteogenic switching; high phosphate load can itself induce local inflammation in VSMCs producing TNF-α, IL-1β, IL-6, and BMP-2 [^liang2024].

**Wnt/β-catenin activation:** Wnt3a and Wnt7b (produced by macrophages and endothelium in atherosclerotic plaques) activate canonical Wnt signaling in VSMCs → β-catenin accumulation → TCF/LEF transcription → RUNX2 induction. Wnt signaling and BMP-2 signaling synergize to amplify osteogenic switching.

**Oxidative stress:** Reactive oxygen species suppress MGP γ-carboxylation (which requires vitamin K–dependent carboxylase), reducing MGP's ability to chelate calcium and inhibit BMP-2. Mitochondrial dysfunction in aged VSMCs (see Aging phenotypes below) amplifies oxidative stress and thereby accelerates osteogenic susceptibility.

**Senescence:** Senescent VSMCs are significantly more susceptible to osteogenic transdifferentiation than proliferating cells, and SASP cytokines from senescent VSMCs drive transdifferentiation in neighboring cells via paracrine signaling [^ferreira2026].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (phosphate, BMP-2, Wnt, RUNX2 all confirmed in human VSMCs in vitro) |
| Phenotype conserved in humans? | yes (osteogenic transdifferentiation documented in human calcified arteries histologically) |
| Replicated in humans? | partial (in-vitro primary human VSMCs; mechanistic in-vivo causation established in CKD/uremic mouse models; genetic/randomization evidence sparse) |

## Aging phenotypes

### Senescence accumulation

VSMC senescence is one of the best-characterized cell-type-specific senescence accumulations in the aging cardiovascular system. In the aortic media:
- p16^Ink4a (CDKN2A) and p21^Cip1 (CDKN1A) expression increase with age, driven by accumulated DNA damage (double-strand breaks, telomere attrition), oxidative stress, and SASP paracrine loops from neighboring senescent endothelial cells
- Senescent VSMCs secrete a [[sasp]] profile rich in IL-6, IL-8, MMP-3, and MMP-9 — amplifying inflammation and degrading the elastic ECM that maintains arterial compliance
- ABT-263 (navitoclax) administration in aged C57BL/6N mice (n=14-16/group, 27 months old) reduced aortic pulse wave velocity from 446±9 to 356±11 cm/s (p<0.0001), directly demonstrating that senescent-cell burden drives age-related aortic stiffness [^clayton2023]. A related study confirmed senolytics also prevent doxorubicin-chemotherapy-induced aortic stiffening in young adult mice via the same mechanism [^venkatasubramanian2025].

#gap/needs-human-replication — Clayton 2023 (aged mice) and Venkatasubramanian 2025 (doxorubicin-treated young adult mice) are both mouse studies; no powered human trial of senolytics for arterial stiffness has reported.

### Mitochondrial dysfunction

Aged VSMCs show declining oxidative phosphorylation capacity, increased mitochondrial reactive oxygen species (mtROS), and mtDNA damage — a pattern consistent with the [[mitochondrial-dysfunction]] hallmark. Elevated mtROS suppresses NO bioavailability (oxidizing NO to peroxynitrite), impairs Nrf2-mediated antioxidant defense, and drives the osteogenic switch via the oxidative-MGP mechanism above. Mitochondrial dysfunction is both a cause and consequence of VSMC senescence (via the SASP amplification loop).

### Phenotypic drift toward synthetic and osteogenic states

Independent of senescence, aged VSMCs show progressive downregulation of contractile markers (MYH11 expression falls with age in human aorta) and increased baseline synthetic-state gene expression. This shifts the phenotypic equilibrium such that less additional stimulation is required to trigger osteogenic transdifferentiation — explaining why vascular calcification prevalence increases steeply with age even in the absence of traditional risk factors.

### ECM remodeling and elastin fragmentation

VSMCs in aged arteries produce collagen at the expense of elastin, progressively stiffening the wall. Senescent VSMCs show elevated collagenase (MMP-3, MMP-9) activity that further degrades remaining elastin. Elastin fragments paradoxically activate VSMCs toward the synthetic state (via elastin receptor), creating a feed-forward stiffening loop. This is the primary cellular mechanism of age-related large-artery stiffness independent of calcification.

## Self-renewal and turnover

VSMCs in normal adult arteries are long-lived and nearly post-mitotic (turnover time estimated at years to decades in humans). They are capable of re-entering the cell cycle on stimulation (injury, PDGF-BB, FGF-2) — hence `self-renewal: limited` rather than `no`. This low-turnover biology means:
- DNA damage accumulates over decades without dilution by cell division
- Senescent VSMCs persist in the media without efficient immune clearance (in contrast to rapidly dividing cell types)
- Pharmacological senolysis (navitoclax, ABT-263) represents an active research strategy because VSMCs do not self-clear (see Therapeutic relevance)

VSMCs are distinct from **pericytes** (mural cells of capillaries and small vessels; CD73+/NG2+/PDGFRβ+ but MYH11−), from which they differ both functionally and embryologically. In injury contexts, VSMCs can acquire a myofibroblast-like state (αSMA+/vimentin+/calponin−), contributing to adventitial fibrosis.

## Single-cell aging evidence

Single-cell RNA-seq studies of human and mouse aorta identify at least two major VSMC sub-populations: a contractile cluster (MYH11-hi, TAGLN-hi, CNN1-hi) and a synthetic/modulated cluster (COL1A1-hi, FN1-hi, PDGFRB-hi). In aged aorta and in disease contexts (atherosclerosis, calcification), proportional representation shifts toward synthetic and, in advanced lesions, osteogenic states (RUNX2+, ALPL+, SPP1+) [^lao2019].

In the progeria context (accelerated vascular aging), single-cell transcriptomics confirmed an osteochondrogenic VSMC sub-state emerges as a consequence of mechanical stress-induced cell death, with surviving VSMCs upregulating RUNX2, SOX9, and COL2A1 [^murtada2023]. This is an extreme-phenotype model, but the transcriptional trajectory parallels normal aging at slower pace.

Tabula Muris Senis does not include aortic media as a primary tissue in its standard atlas (aortic smooth muscle cells are present in the aorta tissue but cell-type annotation depth is limited compared to bone marrow or lung). #gap/needs-replication — a well-powered aging-focused human aortic scRNA atlas with large n at multiple age decades is not yet published.

## Relationship to hallmarks of aging

| Hallmark | Mechanism in VSMCs |
|---|---|
| [[cellular-senescence]] | p16+/p21+ VSMCs accumulate in aortic media; SASP amplifies inflammation and osteogenic signaling; drives arterial stiffening (Clayton 2023) |
| [[chronic-inflammation]] | SASP cytokines (IL-6, IL-8, TNF-α) suppress MGP, activate BMP-2 signaling, and drive osteogenic switch; systemic inflammaging further drives VSMC phenotype drift |
| [[mitochondrial-dysfunction]] | mtROS suppresses NO and Nrf2; promotes osteogenic susceptibility; feeds VSMC senescence loop |
| [[genomic-instability]] | Telomere shortening and oxidative DNA damage drive p16/p21-mediated senescence in low-turnover VSMCs; long-lived cells accumulate unrepairable DSBs |
| [[epigenetic-alterations]] | Methylation drift at contractile gene promoters (MYH11, CNN1) with age; RUNX2 promoter opens; parallels HSC methylation-mediated lineage bias |

## Therapeutic relevance

### Senolytics

Navitoclax (ABT-263, a BCL-2/BCL-xL inhibitor with senolytic activity) is the best-studied senolytic for vascular endpoints. In aged C57BL/6N mice (n=14-16/group; 27 months old; 50 mg/kg/day oral gavage, 1 wk on / 2 wks off / 1 wk on), navitoclax reduced aortic PWV from 446±9 to 356±11 cm/s (p<0.0001) and improved endothelium-dependent dilation (82±3% → 96±1%; p=0.0004) [^clayton2023]. A separate study showed senolytics (ABT-263 and GCV) prevent doxorubicin-chemotherapy-induced aortic stiffening in young adult mice (doxo-ABT263 vs doxo-vehicle post-treatment PWV: 341±7 vs 404±15 cm/s; p<0.0001) [^venkatasubramanian2025]. No aging-indication human trial of navitoclax has reported vascular outcomes as a primary endpoint. Dasatinib + quercetin (D+Q) combinations are in early-phase trials (AFFIRM-LITE, SToMP-AD) but vascular stiffness readouts are secondary. #gap/needs-human-replication

### Anti-calcification strategies

- **Vitamin K2 (MK-7):** Activates MGP γ-carboxylation → restores functional calcification inhibition. The VITACAL trial (NCT02237612) showed MK-7 supplementation reduced dp-ucMGP (a marker of MGP deficiency) and attenuated coronary calcification progression in CKD patients. See [[matrix-gla-protein]].
- **Phosphate binders (CKD):** Reduce hyperphosphatemia-driven PiT-mediated osteogenic switching; standard care in CKD-related vascular calcification.
- **Bisphosphonates / denosumab:** Limit hydroxyapatite crystal growth or reduce RANKL-driven calcification; benefits are disease-context-specific [^weng2026].

### Diet and lifestyle

[[Mediterranean-diet]]-pattern diets reduce systemic inflammation (IL-6, CRP) and improve endothelial NO bioavailability, attenuating two of the three primary drivers of VSMC osteogenic switching. Mechanism: omega-3 FAs reduce NF-κB activity; polyphenols activate Nrf2; both pathways suppress the inflammatory milieu that drives BMP-2 upregulation in the arterial wall.

## Limitations and gaps

- `#gap/needs-replication` — developmental-origin-specific aging responses (neural-crest vs lateral-plate VSMC) have not been characterized systematically in human aging studies; inference is from disease-specific genetic conditions.
- `#gap/needs-human-replication` — navitoclax/senolytic data reversing arterial stiffness is from mouse studies (Clayton 2023: aged mice; Venkatasubramanian 2025: doxorubicin-treated young adult mice as a chemotherapy-induced vascular aging model); no powered human aging trial has been completed.
- `#gap/needs-replication` — single-cell aging atlas data for human aortic VSMCs across multiple age decades is lacking; current scRNA evidence is from small-n or disease-context datasets (progeria, CKD).
- `#gap/no-mechanism` — the upstream molecular signal that determines whether an aging VSMC adopts the senescent-fibrotic vs the senescent-osteogenic fate is not established; both can co-exist in the same aorta.
- `#gap/contradictory-evidence` — the role of osteopontin (SPP1 / [[osteopontin]]) in vascular calcification is dual: it can inhibit hydroxyapatite nucleation (crystal-growth inhibitor function) and promote osteogenic transdifferentiation (as a target gene of RUNX2); net effect is context-dependent.

## See also

- [[vascular-calcification]] — the process page for VSMC osteogenic transdifferentiation at pathway level
- [[arterial-stiffening]] — phenotype page; VSMC senescence and ECM remodeling are the primary cellular contributors
- [[atherosclerosis]] — phenotype page; synthetic-state VSMCs drive fibrous cap and foam-cell formation
- [[runx2]] — master osteogenic transcription factor induced in VSMC transdifferentiation
- [[bmp-2]] — paracrine osteogenic signal from endothelial and inflammatory cells
- [[matrix-gla-protein]] — locally produced VSMC-derived calcification inhibitor; requires vitamin K activation
- [[osteopontin]] — dual-function VSMC secreted protein in calcification contexts
- [[cellular-senescence]] — hallmark driving VSMC p16+ accumulation and SASP
- [[chronic-inflammation]] — hallmark; SASP and systemic inflammaging drive osteogenic switching
- [[mitochondrial-dysfunction]] — hallmark; mtROS amplifies osteogenic susceptibility and senescence
- [[sasp]] — the paracrine secretory program of senescent VSMCs
- [[arteries]] — tissue page
- [[heart]] — downstream target of VSMC-driven arterial stiffness (coronary artery disease, diastolic dysfunction)
- [[myocardium]] — affected by upstream changes in aortic impedance secondary to VSMC-driven stiffness
- [[mediterranean-diet]] — dietary intervention targeting inflammatory VSMC osteogenic triggers

---

## Footnotes

[^lao2019]: doi:10.1161/ATVBAHA.119.312131 · Lao KH, Zeng L, Xu Q · review + scRNA phenotyping · Arteriosclerosis Thrombosis and Vascular Biology 2019;39:1715–1723 · characterized VSMC phenotypic diversity including contractile, synthetic, and osteogenic states; synthesized single-cell transcriptomic evidence for sub-state identity; cited_by_count=260 in a local paper archive · archive status: bronze OA (pending download)

[^liang2024]: doi:10.7717/peerj.18063 · Liang X, Li Y, Wang P, Liu H · review · PeerJ 2024;12:e18063 · reviewed hyperphosphatemia, BMP2, and RUNX2 as key regulators of VSMC osteogenic transdifferentiation in CKD; detailed PiT-1/PiT-2-mediated phosphate sensing via ERK1/2 and PI3K/AKT → RUNX2; characterized BMP2-SMAD1/5-RUNX2 transcriptional axis (Smad1/5 mediates BMP2→RUNX2 signaling); high phosphate induces VSMC production of TNF-α, IL-1β, IL-6, and BMP-2; WNT/β-catenin and NF-κB also upregulate RUNX2 under elevated Pi · n=review; model: in-vitro primary human/rat VSMCs + CKD animal models · archive status: gold OA, PDF at  (local PDF)

[^clayton2023]: doi:10.1161/HYPERTENSIONAHA.123.21392 · Clayton ZS, Rossman MJ, Mahoney SA, et al. · in-vivo · Hypertension 2023;80(10):2072–2087 · ABT-263 (navitoclax; 50 mg/kg/day oral gavage; 1 wk on / 2 wks off / 1 wk on) reduced aortic PWV in aged mice from 446±9 to 356±11 cm/s (p<0.0001); endothelium-dependent dilation improved from 82±3% to 96±1% (p=0.0004); p16-3MR GCV arm: PWV 477±10 → 382±7 cm/s (p<0.05); plasma from old mice induced stiffening in young aortas ex vivo · n=14-16/group (ABT-263 arm); n≈15-21/group (p16-3MR arms) · model: aged C57BL/6N mice, 27 months · archive status: green OA via PMC (PMC10530538); cited_by_count=68

[^venkatasubramanian2025]: doi:10.1161/HYPERTENSIONAHA.125.25408 · Venkatasubramanian R, Darrah MA, Mahoney SA, et al. · in-vivo · Hypertension 2025 · ABT-263 (50 mg/kg/day oral gavage; 1 wk on / 2 wks off schedule) prevented doxorubicin-induced aortic stiffness in young adult mice (doxo-veh post-treatment PWV 404±15 vs doxo-ABT263 341±7 cm/s; p<0.0001); GCV in p16-3MR mice similarly prevented stiffening (doxo-veh post 425±6 vs doxo-GCV 348±4 cm/s; p<0.0001); circulating SASP factors from treated mice no longer induced stiffening ex vivo · n=9-27/group (varies by arm) · model: doxorubicin-treated young adult C57BL/6 mice (4-6 months; single 10 mg/kg i.p. injection) — NOT aged mice · archive status: green OA via PMC (PMC12327803)

[^ferreira2026]: doi:10.1016/j.biomaterials.2026.124117 · Sá Ferreira R, Aires HR, Rebelo C, et al. · in-vitro + in-vivo · Biomaterials 2026 Oct;333:124117 · PMID:41967384 · decellularized ECM from senescent VSMCs (S-ECM) induced senescence in human proliferative endothelial cells over 2 weeks; effect partially mediated by TGF-β signaling (TGFβR1 inhibition attenuated senescence); TGFβ1I1 identified as key matrisome mediator; in-vivo confirmation: S-ECM discs implanted in young mice increased senescence markers vs P-ECM controls · note: in-vitro primary model; in-vivo component uses implanted ECM discs (not aging context) · #gap/needs-replication (single study)

[^murtada2023]: doi:10.1007/s10237-023-01722-5 · Murtada SI, Kawamura Y, Cavinato C, et al. · in-vivo + scRNA · Biomechanics and Modeling in Mechanobiology 2023 · identified osteochondrogenic VSMC sub-state emerging after mechanical stress-induced cell death in progeria aorta; bulk and single-cell RNA-seq confirmed RUNX2/SOX9/COL2A1 upregulation in remnant VSMCs · model: progeria mouse model + human progeria tissue · archive status: green OA; download pending · note: progeria is an extreme-aging model; generalization to normal aging requires caution #gap/needs-replication

[^weng2026]: doi:10.3389/fendo.2026.1839111 · Weng S, Ding C, Shi Y, et al. · review · Front Endocrinol (Lausanne) 2026;17:1839111 · PMID:42137359 · PMCID:PMC13167474 · narrative review of osteoporosis therapies and coronary calcification risk; current evidence does not support a reproducible or clinically decisive class effect on coronary-specific outcomes; bisphosphonates and denosumab are biologically relevant to vascular calcification but no reproducible coronary-specific benefit; romosozumab has unresolved cardiovascular safety questions via sclerostin inhibition · archive status: open access via PMC
