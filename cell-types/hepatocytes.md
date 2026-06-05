---
type: cell-type
aliases: [hepatic parenchymal cells, hepatic epithelial cells]
cell-ontology-id: CL:0000182
tissue-of-origin: ["[[liver]]"]
key-markers-mouse: [Alb+, Hnf4a+, Cyp3a11+, Cyp2e1+, Ttr+ (transthyretin), Ass1+ (arginase cycle)]
key-markers-human: [ALB+, HNF4A+, CYP3A4+, CYP2E1+, TTR+, ASGR1+ (asialoglycoprotein receptor), APOE+]
lineage-output: []
self-renewal: limited
aging-relevant: yes
affected-hallmarks:
 - "[[cellular-senescence]]"
 - "[[mitochondrial-dysfunction]]"
 - "[[loss-of-proteostasis]]"
 - "[[epigenetic-alterations]]"
 - "[[deregulated-nutrient-sensing]]"
 - "[[genomic-instability]]"
 - "[[disabled-macroautophagy]]"
key-aging-phenotypes:
 - "[[masld]]"
 - "[[liver-fibrosis]]"
 - "[[hepatocellular-carcinoma]]"
typical-niche: "hepatic sinusoids; hepatocytes are arrayed in plates (one to two cells thick) between fenestrated sinusoidal endothelium and the bile canalicular network; position along the porto-central axis determines metabolic identity (zonation)"
niche-signaling:
 - "[[wnt-beta-catenin]]"
 - "[[insulin-igf1]]"
 - "[[mtor]]"
single-cell-aging-signature: "Nikopoulou et al. 2023 (Nature Aging): spatial transcriptomics + scATAC-seq + scRNA-seq in male C57BL/6 mice (young vs aged). Periportal hepatocytes show diminished mitochondrial gene expression; pericentral hepatocytes accumulate lipid droplets and upregulate lipogenic programs. Epigenome changes in a zonation-dependent manner. Yang et al. 2024 (Protein Cell): primate snRNA-seq shows SREBP2 hyperactivation per-hepatocyte across all zones (zone 3 most pronounced)."
verified: true
verified-date: 2026-06-05
verified-by: claude
verified-scope: "Yin 2024 (full PDF, J Hepatol 81:289-302): polyploidy ~35–40% 4n figure is read from Fig 1B — no exact prose percentage stated; range is visually consistent; mouse strain C57BL/6J, young=3 months, old=24 months confirmed. Buffering mechanism (non-random allele selection, haploinsufficiency experiments) confirmed. Bird 2018 (full PDF, Sci Transl Med 10:eaan1230): 87% TGFβ1 reduction confirmed as from partial ΔMdm2Hep model with liposomal clodronate macrophage ablation (NOT acetaminophen/CCl₄ models) — corrected misattribution in body. TGFβR1 blockade in acetaminophen/CCl₄ models confirmed as separate result. Enkhbold 2015 strain corrected to Balb/c (confirmed via PubMed abstract). Adekunbi 2024: DOI corrected from tentative 10.1007/s11357-024-01110-w to confirmed 10.1007/s11357-024-01155-7 (PMID 38607532, Geroscience 46(5):4443-4459); body claim about age-related decline corrected — paper compares cell types in aged baboons, does NOT report age-related bioenergetic decline (age effects deferred to future studies). Nikopoulou 2023, Sinha 2025, Choi 2023: cross-checked against PubMed abstracts (full PDFs not available locally) — key claims confirmed. Yang 2024 cross-checked against verified study page (yang-2023-primate-liver-aging-snrna-srebp2.md, metadata confirmed). literature-checked-through: 2026-06-05 (type:cell-type, R25 recency search not required per schema)."
literature-checked-through: 2026-06-05
---

# Hepatocytes

**Hepatocytes** are the parenchymal epithelial cells of the liver, comprising ~60–65% of all liver cells and accounting for roughly 80% of liver volume [^huntcogger2019]. They are the metabolic workhorses of the organism: performing gluconeogenesis and glycogen synthesis, lipogenesis, bile acid and cholesterol synthesis, xenobiotic detoxification (CYP450 phase I/II), acute-phase protein secretion, coagulation-factor production, and — critically for systemic aging biology — the synthesis of circulating IGF-1 [^sjogren1999]. Hepatocytes are also the primary target of LNP-delivered nucleic acid therapeutics, making them the lead cell type for mRNA-based [[processes/partial-reprogramming]] interventions.

A defining feature of hepatocytes is **physiological polyploidy**: unlike most mammalian somatic cells, hepatocytes are normally tetraploid (4n) or higher-ploid. This polyploidy is not pathological; recent evidence indicates it serves as a genomic buffering mechanism against age-related transcriptional dysregulation [^yin2024]. Hepatocytes also occupy a nuanced position with respect to `self-renewal:`: they are not classically stem cells, but they are the principal proliferative cell during liver regeneration — functioning essentially as their own stem cells under physiological injury conditions, with dedicated progenitor backup only in severe injury.

---

## Identity

| Field | Value |
|---|---|
| Cell Ontology ID | CL:0000182 |
| Lineage | Endoderm-derived hepatoblast → hepatocyte |
| Ploidy | Mix of diploid (2n), tetraploid (4n), and octaploid (8n); ~35–40% 4n in young adult mouse (C57BL/6J, 3 months; estimated from Fig. 1B — no exact prose value stated); 8n fraction enriched in old mice (24 months); higher-ploid fraction increases with aging [^yin2024] |
| Size | ~20–30 µm diameter; polyhedral |
| Fraction of liver | ~80% of liver volume; ~60–65% of cell number |
| Mitochondria | ~1,000–2,000 per cell; among the highest mitochondrial content of any hepatic cell type; supports high-flux oxidative metabolism |

### Key markers

| Marker | Species | Functional notes |
|---|---|---|
| ALB (albumin) | Human + mouse | Most abundant hepatocyte secretory protein; clinical surrogate for synthetic function |
| HNF4A (hepatocyte nuclear factor 4-alpha) | Human + mouse | Master transcriptional regulator of hepatocyte identity; required for maintenance of hepatocyte gene expression; loss triggers epithelial-mesenchymal transition [^hnf4a] |
| CYP3A4 / Cyp3a11 | Human / mouse | Dominant CYP450; metabolizes ~50% of all drugs; zone-3 pericentral concentration |
| CYP2E1 / Cyp2e1 | Human + mouse | Metabolizes ethanol and acetaminophen; pericentral localization; key in hepatotoxicity |
| TTR (transthyretin) | Human + mouse | Hepatocyte-secreted transport protein for thyroid hormone and retinol |
| ASGR1 (asialoglycoprotein receptor 1) | Human | Hepatocyte-specific lectin receptor; drives LNP hepatotropism via ApoE-ASGR1 interaction |
| APOE | Human | Secreted apolipoprotein; enables lipoprotein remnant clearance |

---

## Tissue context and niche

Hepatocytes are organized in radial plates around the central vein, abutting hepatic sinusoids on their basolateral surface (the space of Dissé) and the bile canalicular network at their apical surface. The niche is highly non-uniform along the **porto-central axis**, creating three metabolic zones:

| Zone | Location | Metabolic specialization | Aging vulnerability |
|---|---|---|---|
| Zone 1 (periportal) | Adjacent to portal triads | Gluconeogenesis, β-oxidation, ureagenesis; first contact with portal-nutrient blood | Mitochondrial dysfunction more prominent with age [^nikopoulou2023]; best-preserved metabolic function overall |
| Zone 2 (mid-zonal) | Intermediate | Mixed metabolic functions | Intermediate aging changes |
| Zone 3 (pericentral) | Adjacent to central vein | Glycolysis, lipogenesis, CYP450 detoxification; receives oxygen-depleted/nutrient-depleted blood | Greatest vulnerability to lipid accumulation and SREBP hyperactivation [^yang2024]; lipid droplet accumulation in aging [^nikopoulou2023] |

This spatial heterogeneity in aging trajectory is directly evidenced by integrated spatial transcriptomics + single-cell epigenomics: periportal hepatocytes primarily show mitochondrial gene expression decline while pericentral hepatocytes predominantly accumulate lipids [^nikopoulou2023]. The zonation pattern also disrupts with aging — a 2025 human and mouse study demonstrated that aging disrupts the sharp periportal/pericentral transcriptional boundaries, with hepatocytes losing zone-specific identity [^sinha2025]. #gap/needs-replication for the Sinha 2025 zonation-disruption finding; the paper is recent and not yet independently replicated.

---

## Self-renewal and regenerative capacity

The `self-renewal: limited` designation reflects the unique biology of hepatocyte regeneration. Hepatocytes are **not** conventionally self-renewing stem cells under homeostasis — mitosis is rare in the resting adult liver (~0.01–0.04% hepatocyte Ki67+ in steady state). However, under regenerative challenge, hepatocytes themselves are the primary proliferating cell:

- Following 70% partial hepatectomy in young adult mice, liver mass is fully restored within ~7 days, driven almost entirely by the remaining hepatocytes entering the cell cycle (G0 → G1 → S phase), not by progenitor activation.
- Hepatic progenitor cells ([[hepatic-progenitor-cells]]) are activated mainly in severe injury when hepatocyte replication is pharmacologically or physically blocked.

This mode — where the parenchymal cell is its own primary regenerative unit — distinguishes the liver from most tissues (contrast with [[satellite-cells]] in muscle or [[hematopoietic-stem-cells]] in bone marrow, where dedicated resident stem cells supply new parenchymal cells).

**Aging impairs this regenerative capacity significantly:**

- In a 70% partial hepatectomy model comparing young (4-week) and old (40-week) male Balb/c mice, aged animals showed significantly lower liver weight/body weight ratio at 48 h and 72 h post-hepatectomy, reduced expression of hepatocyte growth factor, cMet, cyclin D1, cyclin A2, and PCNA, and higher LC3 and caspase-3 levels (increased autophagy and apoptosis relative to proliferation) [^enkhbold2015].
- Mitochondrial NAD⁺ content (controlled by the inner-membrane transporter SLC25A51) is rate-limiting for regeneration; this pathway declines with age and is a potential target for NAD⁺ precursor supplementation [^mukherjee2025].

| Dimension | Status |
|---|---|
| Regeneration capacity conserved in humans? | partial — human transplant/partial hepatectomy data show slower recovery in older donors/recipients; direct mechanistic data from human tissue are limited |
| Replicated in humans? | no — most mechanistic data are rodent; human in-vivo regeneration kinetics lack matched-age mechanistic studies |

---

## Physiological polyploidy — a buffer against aging

Most mammalian hepatocytes are **polyploid** — a normal, tissue-specific phenomenon arising from cell division without cytokinesis (endomitosis) and from cell fusion. In young adult C57BL/6J mice (3 months), approximately 35–40% of hepatocyte nuclei are 4n (tetraploid), estimated from immunofluorescent ploidy imaging (Fig. 1B of Yin et al. — no exact prose percentage stated in text); with aging (24 months), the proportion of 8n nuclei increases further while steatosis accumulates [^yin2024].

Yin et al. 2024 showed in a landmark J Hepatology study that this polyploidization is not merely a byproduct of aging but a **compensatory protective mechanism**:

- Haploinsufficiency of key liver transcription factors (HNF4A, CEBPA, or CTCF) in young mice triggered early tetraploid enrichment and dramatically **suppressed** age-related steatosis, suggesting tetraploid hepatocytes resist metabolic decline.
- During aging, tetraploid hepatocyte nuclei undergo **non-random allelic segregation** — preferentially retaining wild-type alleles and discarding mutant ones — partially compensating for somatic mutation accumulation.
- Tetraploid nuclei maintain more robust transcriptional regulatory networks than their diploid counterparts.

This "polyploidy buffer" model reframes hepatic polyploidization from a passive aging marker to an active genome-maintenance mechanism. It may explain why the liver tolerates extensive somatic mutation accumulation without proportional loss of function.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | unknown — direct polyploidy-buffering studies are mouse-only |
| Phenotype conserved in humans? | partial — human hepatocytes are known to be polyploid; protective allele-selection mechanism not directly tested in human liver aging |
| Replicated in humans? | no — all buffering data are from C57BL/6J mice #gap/needs-human-replication |

---

## Aging phenotypes

### Cellular senescence

Hepatocyte senescence accumulates with both chronological age and repeated injury (steatohepatitis, viral hepatitis, toxin exposure). Senescent hepatocytes express canonical markers (p16INK4a, p21CIP1, SA-β-galactosidase, γH2AX foci) and secrete a hepatocyte-specific SASP that includes IL-6, IL-8, PAI-1, and TGF-β. Downstream consequences:

1. **Regenerative impairment** — senescent hepatocytes do not re-enter the cell cycle, reducing the proliferative pool after partial hepatectomy.
2. **Paracrine senescence spread** — SASP-derived TGF-β drives adjacent uninjured hepatocytes into senescence (paracrine senescence). In a partial ΔMdm2Hep genetic mouse model (hepatocyte-specific Mdm2 deletion), macrophage ablation with liposomal clodronate reduced hepatic TGFβ1 expression by 87%, identifying macrophage-derived TGFβ1 as the principal driver of paracrine senescence spread. In the acetaminophen and CCl₄ injury models, TGFβR1 blockade restored regeneration and improved survival even beyond the standard treatment window [^bird2018].
3. **Stellate cell activation** — SASP-TGF-β activates hepatic stellate cells into myofibroblasts, driving collagen deposition and fibrosis.
4. **Immune surveillance failure** — senescent hepatocytes are normally cleared by NK cells and cytotoxic T lymphocytes (see [[processes/senescence-immune-surveillance]]); age-related immunosenescence reduces clearance efficiency, allowing senescent cells to accumulate.

KAT7-driven senescence: a genome-wide CRISPR screen identified KAT7 as a driver of hepatocyte senescence via H3K14 acetylation and p15/CDKN2B induction. AAV-mediated Kat7 knockdown in aged mice extended median lifespan ~17% and reduced liver senescence markers [^wang2021kat7]. This result is from a single lab and awaits independent replication. #gap/needs-replication

### Mitochondrial dysfunction

Hepatocytes depend on high-flux oxidative phosphorylation to power their metabolic load. Aging-associated mitochondrial changes include:

- Reduced OXPHOS complex I and IV activity
- Impaired mitophagy — accumulated damaged mitochondria divert fatty acids into triglyceride storage, contributing to steatosis
- Reduced mitochondrial NAD⁺ content (via SLC25A51 decline), limiting β-oxidation and regenerative capacity [^mukherjee2025]
- Increased mitochondrial ROS, promoting oxidative damage to mtDNA and lipids
- Cross-cell-type comparison in aged baboons (13.3–17.8 years) showed hepatocytes have lower oxygen consumption rate and less resilience to oxidative stress than astrocytes; cardiac and skin fibroblasts showed intermediate resilience — demonstrating cell-type heterogeneity in mitochondrial bioenergetics [^adekunbi2024] #gap/needs-replication — cross-sectional aged-only cohort; age-related longitudinal changes in hepatocyte bioenergetics not reported in this study

| Dimension | Status |
|---|---|
| Mitochondrial dysfunction conserved in humans? | partial — primate data (baboon, cynomolgus monkey) support decline; direct human hepatocyte bioenergetics in matched-age donors limited |
| Pathway conserved in humans? | yes (SLC25A51 and NAD⁺ biology are conserved; no human regeneration-SLC25A51 study yet) |

### Loss of proteostasis — CMA decline

Hepatocytes are high-volume protein secretion factories (albumin, coagulation factors, acute-phase proteins, lipoproteins) and operate the proteostasis system under constitutively high load. A key age-related failure mode is **chaperone-mediated autophagy (CMA) decline**:

- LAMP2A expression falls with aging in rat and mouse liver, reducing CMA flux
- Accumulated NCoR1 (a PPARα co-repressor normally cleared by CMA) inactivates PPARα-driven fatty acid oxidation, directly contributing to age-related steatosis [^choi2023]
- Impaired lipophagy (lipid-droplet selective autophagy) compounds the steatosis burden

See [[processes/chaperone-mediated-autophagy]] for the mechanistic basis of LAMP2A-dependent CMA.

### Epigenetic drift and zonation disruption

Hepatocytes show robust epigenetic aging signals across multiple DNA-methylation clock platforms. Spatially resolved multi-omic profiling reveals that:

- Epigenome changes are **zonation-dependent** — periportal and pericentral hepatocytes follow distinct aging trajectories at the chromatin level [^nikopoulou2023]
- Aging disrupts the sharp transcriptional boundaries between zones — hepatocytes lose zone-specific identity gene expression with age [^sinha2025]
- Loss of hepatocyte-identity CpG methylation (epigenetic drift) impairs maintenance of hepatocyte-specific gene programs
- SREBP-2 hyperactivation is partly epigenetically mediated; per-hepatocyte SREBP2 nuclear activity is elevated across all zones in aged primate liver [^yang2024]

These epigenetic changes are the theoretical target of partial reprogramming approaches (see below).

---

## Partial reprogramming — hepatocytes as the lead target

### Why hepatocytes are the preferred initial target cell type

Among all cell types targeted by in-vivo partial reprogramming approaches, hepatocytes have emerged as the nearest-term lead target for several reinforcing reasons:

1. **LNP hepatotropism.** Systemically administered lipid nanoparticles naturally accumulate in the liver via ApoE–ASGR1 interaction. The same mRNA-LNP platform proven in 100+ million COVID-19 vaccine recipients can deliver OSK factors to hepatocytes without organ-specific engineering.
2. **ASGR1-mediated active uptake.** ASGR1 on the hepatocyte surface actively internalizes ApoE-opsonized LNPs from the sinusoidal space, providing a selective delivery advantage over non-hepatic cells.
3. **Well-validated functional endpoints.** Liver regeneration after hepatectomy or chemical injury provides quantitative readouts (liver mass restoration, ALT/AST normalization, albumin secretion, CYP3A4 activity) useful as surrogate efficacy endpoints.
4. **Disease-relevant entry point.** MASLD and liver fibrosis are mechanistically linked to epigenetic aging, clinically prevalent, and represent regulatory-tractable first-in-human disease indications.

### Preclinical evidence

Zhang et al. 2026 demonstrated that hepatocyte-specific delivery of OSK mRNA via a three-component ionizable LNP (H4T3_F6) reduced liver fibrosis in a mouse model: transient reprogramming shifted hepatocytes from a fibrotic to a progenitor-like state and reduced extracellular matrix deposition [^zhang2026osk]. This is among the first published demonstrations of mRNA-LNP-OSK in a liver disease model. #gap/needs-replication — single lab, single fibrosis model, very recent (0 independent citations as of 2026-06-05).

For the full context of the in-vivo partial reprogramming intervention pipeline, see [[processes/partial-reprogramming]] and [[in-vivo-partial-reprogramming-therapy]].

### Safety caution

In original OSKM gain-of-function mouse systems, sustained factor expression in the liver caused hepatocyte dysplasia and hepatocellular tumors. Transient pulsed expression shows a more favorable safety profile in published data, but the therapeutic window — sufficient epigenetic rejuvenation without oncogenic risk — has not been characterized in aged human liver. The liver's role as the primary site of HCC development makes this safety question especially important. #gap/long-term-unknown

---

## Pathways intersecting hepatocyte aging

| Pathway | Role in hepatocyte aging |
|---|---|
| [[mtor]] | mTORC1 hyperactivation promotes SREBP-2 nuclear entry (via lipin-1 retention); suppresses autophagy/mitophagy; target for rapamycin in hepatic aging models |
| [[ampk]] | Declines with age; counter-regulatory; normally phosphorylates/inactivates HMGCR, FASN, SREBP-1c; metformin acts partly via hepatic AMPK |
| [[insulin-igf1]] | GH/IGF-1 axis declines (hepatocytes produce ~75% of circulating IGF-1); hepatic insulin resistance produces selective insulin resistance paradox (gluconeogenesis unchecked via FOXO1 persistence; lipogenesis continues via SREBP-1c) |
| [[wnt-beta-catenin]] | Governs zone-3 pericentral identity and CYP450 concentration; disrupted in aging; regulates ASGR1 expression |
| [[cgas-sting]] | Activated by cytoplasmic DNA from damaged/senescent hepatocytes; drives type-I interferon and NF-κB SASP amplification |
| [[autophagy]] | Macroautophagy and CMA are both impaired in aged hepatocytes; declines directly cause steatosis (lipophagy failure) and proteotoxicity |

---

## Therapeutic relevance

| Strategy | Hepatocyte mechanism | Evidence level |
|---|---|---|
| mRNA-LNP OSK reprogramming | Transient factor delivery via ASGR1/ApoE pathway; transient epigenetic rejuvenation | Preclinical (fibrosis model); no human data [^zhang2026osk] |
| KAT7 knockdown (AAV) | Reduces hepatocyte senescence via H3K14/p15 axis; lifespan extension in mice | Preclinical; single lab [^wang2021kat7]; #gap/needs-replication |
| Senolytics (Dasatinib + Quercetin, Navitoclax) | Clear senescent hepatocytes; reduce SASP-driven stellate cell activation and fibrosis | Preclinical (aged mouse liver); no liver-specific human senolytic RCT as of 2026-06-05 |
| NAD⁺ precursors (NMN/NR) | Restore hepatocyte mitochondrial NAD⁺ → improve β-oxidation and regenerative capacity [^mukherjee2025] | Preclinical mechanistic; human hepatic NAD⁺ repletion trial data limited |
| CMA activators (e.g., AR7) | Restore LAMP2A → degrade NCoR1 → rescue PPARα-driven fatty acid oxidation [^choi2023] | Preclinical only |
| Metformin / AMPK activation | Hepatic AMPK activation restrains gluconeogenesis and lipogenesis; modest MASLD benefit | Moderate human evidence (observational + small RCTs); TAME trial ongoing |

---

## Limitations and gaps

| Gap | Tag | Notes |
|---|---|---|
| Polyploidy buffering mechanism in humans | #gap/needs-human-replication | All allele-selection / buffering data are C57BL/6J mouse; direct human hepatocyte polyploidy-aging studies pending |
| Quantitative human hepatocyte senescent burden | #gap/unsourced | No large matched-age human liver dataset quantifying p16+ or SA-β-gal+ hepatocyte fraction across ages equivalent to rodent studies |
| Zonation disruption in human aging | #gap/needs-replication | Sinha 2025 report is very recent; independent replication in a second human cohort is pending |
| Hepatocyte-specific SASP composition in humans | #gap/needs-human-replication | SASP profile characterized in mouse; human primary hepatocyte SASP in aging not independently mapped |
| SLC25A51/NAD⁺ in human liver regeneration | #gap/needs-human-replication | Mukherjee 2025 mechanistic data are mouse-only; human NAD⁺ repletion effects on hepatic regeneration not yet demonstrated |
| OSK reprogramming safety window in aged human liver | #gap/long-term-unknown | Therapeutic window (rejuvenation vs oncogenesis) undefined in human aged hepatocytes |
| KAT7 lifespan extension — independent replication | #gap/needs-replication | Wang 2021 single-lab result; no independent replicated report as of 2026-06-05 |
| HNF4A expression decline with aging | #gap/unsourced | HNF4A is established as a hepatocyte identity master regulator; quantitative data on HNF4A protein/expression decline with age in human liver needs primary citation |
| Marker stubs | #stub | [[masld]], [[liver-fibrosis]], [[hepatocellular-carcinoma]], [[hepatic-progenitor-cells]], [[hepatic-stellate-cells]], [[kupffer-cells]], [[liver-sinusoidal-endothelial-cells]] are seeding targets |

---

## Cross-references

- [[liver]] — parent tissue page; full organ-level aging mechanisms (LSEC pseudocapillarization, IGF-1 axis, MASLD/fibrosis, drug clearance)
- [[cellular-senescence]] — hallmark MOC; paracrine senescence spread in liver is a key hepatocyte mechanism
- [[mitochondrial-dysfunction]] — hallmark MOC; mitochondrial NAD⁺ limitation, OXPHOS decline, lipid accumulation
- [[loss-of-proteostasis]] — hallmark MOC; CMA decline via LAMP2A reduction
- [[disabled-macroautophagy]] — hallmark MOC; lipophagy failure contributing to steatosis
- [[epigenetic-alterations]] — hallmark MOC; strong clock signal in hepatic tissue; OSK reprogramming theoretical basis
- [[deregulated-nutrient-sensing]] — hallmark MOC; mTOR/AMPK/SREBP-2 axis in hepatocytes
- [[genomic-instability]] — hallmark MOC; polyploidy as buffering mechanism; somatic mutation accumulation; HCC risk
- [[processes/partial-reprogramming]] — biological mechanism; hepatocyte is the lead target cell type for OSK-LNP
- [[in-vivo-partial-reprogramming-therapy]] — clinical development context; LNP delivery pipeline
- [[processes/chaperone-mediated-autophagy]] — LAMP2A-mediated CMA; declines in aged hepatocytes
- [[processes/autophagy]] — macroautophagy and lipophagy decline in aged liver
- [[processes/senescence-immune-surveillance]] — NK/CTL clearance of senescent hepatocytes; impaired in immunosenescence
- [[processes/sasp]] — SASP composition from senescent hepatocytes; paracrine fibrosis-driving signals
- [[mtor]] — mTORC1 hyperactivation; SREBP-2/lipin-1 axis; autophagy suppression
- [[ampk]] — counter-regulatory; declines with age; metformin target
- [[wnt-beta-catenin]] — zone-3 identity; ASGR1 expression
- [[insulin-igf1]] — hepatocytes synthesize ~75% of circulating IGF-1; selective insulin resistance
- [[masld]] — primary aging phenotype; steatosis driven by CMA failure, AMPK decline, SASP-lipogenesis
- [[liver-fibrosis]] — SASP-TGF-β activation of hepatic stellate cells
- [[hepatocellular-carcinoma]] — genomic instability + immune surveillance failure; polyploidy role contested
- [[hepatic-stellate-cells]] — activated by hepatocyte SASP; drive fibrosis
- [[kupffer-cells]] — hepatic macrophages; paracrine TGF-β for senescence spread; inflammaging
- [[liver-sinusoidal-endothelial-cells]] — pseudocapillarization reduces hepatocyte-blood exchange

---

## Footnotes

[^huntcogger2019]: doi:10.1016/j.csbj.2019.07.021 · Hunt NJ, Kang SWS, Lockwood GP, Le Couteur DG, Cogger VC · "Hallmarks of Aging in the Liver" · Comput Struct Biotechnol J 17:1151-1161 · 2019 · review; sourced from [[liver]] verified page

[^sjogren1999]: doi:10.1073/pnas.96.12.7088 · Sjögren K, Liu JL, Blad K et al. · "Liver-derived insulin-like growth factor I (IGF-I) is the principal source of IGF-I in blood but is not required for postnatal body growth in mice" · Proc Natl Acad Sci USA 96(12):7088-7092 · 1999 · in-vivo · model: liver-specific IGF-1 knockout mouse · key finding: liver produces ~75% of circulating IGF-I· OA (PMC22065); sourced from [[liver]] verified page

[^yin2024]: doi:10.1016/j.jhep.2024.03.043 · Yin K, Büttner M, Deligiannis IK, Strzelecki M, Zhang L, Talavera-López C, Theis F, Odom DT, Martinez-Jimenez CP · "Polyploidisation pleiotropically buffers ageing in hepatocytes" · J Hepatol 81(2):289-302 · 2024 · in-vivo · model: wild-type C57BL/6J mice (young 3 months, old 24 months) + haploinsufficient strains (Hnf4a+/0, Cebpa+/0, Ctcf+/0)

[^nikopoulou2023]: doi:10.1038/s43587-023-00513-y · Nikopoulou C, Kleinenkuhnen N, Parekh S et al. · "Spatial and single-cell profiling of the metabolome, transcriptome and epigenome of the aging mouse liver" · Nature Aging 3(11):1430-1445 · 2023 · in-vivo · model: male C57BL/6 mice (young vs old); spatial transcriptomics + scATAC-seq + scRNA-seq + lipidomics · key finding: periportal hepatocytes show mitochondrial decline; pericentral hepatocytes accumulate lipid droplets; epigenome changes are zonation-dependent

[^yang2024]: doi:10.1093/procel/pwad039 · Yang S, Liu C, Jiang M et al. · "A single-nucleus transcriptomic atlas of primate liver aging uncovers the pro-senescence role of SREBP2 in hepatocytes" · Protein Cell 15(2):98-120 · 2024 · in-vivo (snRNA-seq) + in-vitro · model: Macaca fascicularis (cynomolgus monkey), multiple age groups · key finding: SREBP2 hyperactivated per-hepatocyte in aged liver; zone-3 most pronounced · sourced from [[liver]] verified page

[^sinha2025]: doi:10.1097/hep.0000000000001451 · Sinha S, Ali Q, Zhang T, T-Nguyen DH, Hanna S, Sethiadi J, Hissong E, Schwartz RE · "Aging disrupts hepatocyte zonation homeostasis in mice and humans" · Hepatology 83(5):1143-1157 · 2026 (epub 2025 Jul 4) · in-vivo + human tissue · model: mouse (>24 months vs 2 months) + human liver biopsies (≤25 YO vs >60 YO); spatial transcriptomics + snRNA-seq · key finding: aging disrupts periportal/pericentral transcriptional boundaries; ASS1+/CYP2E1+/GS+ zone expansion and bi-zonal hepatocytes; hepatocytes lose zone-specific identity in both mouse and human

[^bird2018]: doi:10.1126/scitranslmed.aan1230 · Bird TG, Müller M, Boulter L et al. · "TGFβ inhibition restores a regenerative response in acute liver injury by suppressing paracrine senescence" · Sci Transl Med 10(454):eaan1230 · 2018 · in-vivo · model: mouse acetaminophen + CCl₄ liver injury + human liver biopsy/transplant tissue

[^wang2021kat7]: doi:10.1126/scitranslmed.abd2655 · Wang W, Zheng Y, Sun S et al. · "A genome-wide CRISPR-based screen identifies KAT7 as a driver of cellular senescence" · Sci Transl Med 13(599):eabd2655 · 2021 · in-vivo (aged mouse) + in-vitro · key finding: KAT7 knockdown extended median mouse lifespan ~17%; reduced liver senescence markers· #gap/needs-replication · sourced from [[liver]] verified page

[^mukherjee2025]: doi:10.1038/s42255-025-01408-5 · Mukherjee S, Velázquez Aponte RA, Perry CE et al. · "Hepatocyte mitochondrial NAD+ content is limiting for liver regeneration" · Nat Metab 7:2424-2437 · 2025 · in-vivo · model: mouse partial hepatectomy; Slc25a51 haploinsufficiency and hepatocyte-specific AAV-SLC25A51 overexpression; sourced from [[liver]] verified page

[^enkhbold2015]: doi:10.1111/jgh.12930 · Enkhbold C, Morine Y, Utsunomiya T et al. · "Dysfunction of liver regeneration in aged liver after partial hepatectomy" · J Gastroenterol Hepatol 30(7):1217-24 · 2015 · in-vivo · model: young (4-week) vs old (40-week) male Balb/c mice, 70% hepatectomy

[^choi2023]: doi:10.1016/j.molmet.2023.101784 · Choi YJ, Yun SH, Yu J, Mun Y, Lee W, Park CJ, Han BW, Lee BH · "Chaperone-mediated autophagy dysregulation during aging impairs hepatic fatty acid oxidation via accumulation of NCoR1" · Mol Metab 76:101784 · 2023 · in-vivo + in-vitro · model: aged mouse liver + primary hepatocytes · key finding: LAMP2A decline → NCoR1 accumulation → PPARα inactivation → impaired fatty acid oxidation; CMA activator AR7 rescues phenotype

[^adekunbi2024]: doi:10.1007/s11357-024-01155-7 · Adekunbi DA, Huber HF, Li C, Nathanielsz PW, Cox LA, Salmon AB · "Differential mitochondrial bioenergetics and cellular resilience in astrocytes, hepatocytes, and fibroblasts from aging baboons" · GeroScience 46(5):4443-4459 · 2024 · in-vitro · model: primary astrocytes, hepatocytes, and fibroblasts from aged baboons (Papio hamadryas; 13.3–17.8 years) · key finding: cell-type differences in O2 consumption rate and resilience to oxidative, metabolic, and proteostasis stress; hepatocytes less resilient than astrocytes; age-trajectory effects deferred to future studies · #gap/needs-replication — cross-sectional aged-only cohort; no matched young-vs-old age comparison reported

[^hnf4a]: #gap/unsourced — HNF4A as master regulator of hepatocyte identity is well-established in the field (Hayhurst 2001, Gonzalez 2008 referenced broadly); specific primary citation for aging-context HNF4A decline in human liver needs primary source lookup

[^zhang2026osk]: doi:10.1016/j.jconrel.2025.114569 · Zhang C, Bai Y, Yin Q, Li J, Huang K, Qiu M · "Hepatocyte-specific partial cellular reprogramming via selective OSK mRNA lipid nanoparticle attenuates liver fibrosis" · J Control Release 390:114569 · 2026 · in-vivo · model: mouse liver fibrosis model · sourced from [[liver]] verified page; #gap/needs-replication
