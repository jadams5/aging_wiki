---
type: tissue
aliases: [PDL, periodontal ligament]
parent-system: digestive-system
key-cell-types:
  - "[[pdl-fibroblasts]]"
  - "[[cementoblasts]]"
  - "[[osteoblasts]]"
  - "[[periodontal-ligament-stem-cells]]"
  - "[[epithelial-cell-rests-of-malassez]]"
key-aging-phenotypes:
  - "[[periodontitis]]"
  - "[[tooth-loss]]"
related-hallmarks:
  - "[[stem-cell-exhaustion]]"
  - "[[cellular-senescence]]"
  - "[[chronic-inflammation]]"
verified: true
verified-date: 2026-06-12
verified-by: claude
verified-scope: "Sodek 1988 collagen half-life claims confirmed via PubMed abstract (closed-access; numbers match). Li 2020 and Liu 2025 verified against full PDFs (gold OA). Seo 2004 (closed-access) confirmed via Crossref metadata; full-text not verified — STRO-1/CD146 characterization claims unverified against primary figures. Wu 2015 (closed-access), Hirashima 2020 (hybrid OA, not fetched), Trubiani 2019 (green OA, not fetched), Gonçalves 2008 (closed-access) not verified against full text. All PMID-only citations resolved via PubMed: Xu 2025, Zhou 2022, Oka 2012, Lamster 2016, Kanasi 2016, Mrozik 2010, Ripamonti 2013 — PMIDs confirmed with correct titles and DOIs added. Canonical-database identity fields not independently verified."
---

# Periodontal Ligament

The periodontal ligament (PDL) is a specialized fibrous connective tissue approximately 0.15–0.38 mm wide that occupies the periodontal space between the root cementum and the inner surface of the [[alveolar-bone]] socket (lamina dura). Its primary mechanical function is to suspend and anchor the tooth root within its bony socket while simultaneously transmitting and attenuating occlusal forces — an engineering solution that transforms potentially damaging compressive and tensile loads into controlled distributed stresses across the root-bone interface.

The PDL is one of the most metabolically active connective tissues in the body, with collagen half-lives as short as 3 days in the molar PDL [^sodek1988] compared to months-to-years in dermis, bone, or tendon. This high turnover reflects the continuous mechanical remodeling demands of a tissue that must adapt to changing bite forces, tooth eruption, and orthodontic loading throughout life.

Aging degrades the PDL principally through two converging mechanisms: **stem cell exhaustion** in the PDLSC compartment (with declining osteogenic and cementogenic regenerative capacity) [^wu2015][^li2020] and **accumulation of senescent cells** that disrupt tissue homeostasis through inflammatory SASP signaling [^xu2025][^liu2025]. These intersect with the inflammatory environment of [[periodontitis]] to accelerate attachment loss and eventual [[tooth-loss]].

---

## Anatomy and Structure

### Spatial organization

The PDL occupies a narrow (~0.15–0.38 mm) space running the full length of the root from the alveolar crest to the root apex. The width is not uniform: it is widest at the cervical and apical thirds (zones of greatest occlusal leverage) and narrowest in the middle third. The PDL space narrows measurably with functional reduction (hypofunction or tooth loss) and may alter with aging, though quantitative longitudinal human radiographic data on age-related width change remain limited. #gap/dose-response-unclear

### Principal fiber groups (Sharpey's fibers)

The structural backbone of the PDL is five groups of principal collagen fiber bundles that run from cementum to alveolar bone, inserting into both mineralized tissues as **Sharpey's fibers** [^hirashima2020][^ripamonti2013]. These fibers are predominantly collagen type I and III, organized into bundles that resist specific load directions:

| Fiber group | Orientation | Primary function |
|---|---|---|
| **Alveolar crest** | Oblique-apical from cementum to alveolar crest | Resists tooth extrusion and tilting |
| **Horizontal** | Perpendicular to tooth long axis | Resists lateral (horizontal) forces |
| **Oblique** | Apico-coronal; most numerous | Principal load-bearing group; converts compressive occlusal forces into tensile stress on alveolar bone |
| **Apical** | Radiating from apex to surrounding bone | Resists avulsion; protects neurovascular bundle |
| **Interradicular** | Between roots of multi-rooted teeth | Resists torquing and tilting forces on multi-rooted teeth |

Three-dimensional FIB/SEM tomography has shown that PDL fiber bundles are branched structures wrapped in thin cytoplasmic sheets of PDL fibroblasts (PDLFs), which form an extensive gap-junction-connected cellular network spanning cementum to alveolar bone [^hirashima2020]. The fibroblasts are not passive packaging — they are the dynamic mechanotransducers that sense load, remodel collagen, and coordinate bone and cementum deposition in response to stress.

### Non-collagenous matrix components

In addition to the collagen fiber bundles, the PDL contains:
- Oxytalan fibers (cross-linked elastin precursor microfibrils) running parallel to the root surface; may modulate vascular distribution
- Proteoglycans (decorin, biglycan, versican) regulating collagen fibril diameter and assembly
- Fibronectin and tenascin-C, particularly at the insertion zones
- A rich vascular plexus (fenestrated capillaries; unusually dense for a ligament) and abundant sensory nerve endings (proprioceptive, nociceptive), enabling precise occlusal force sensing

---

## Cell Types

### PDL fibroblasts (PDLFs) — dominant resident

The most abundant cell type (~50–70% of PDL cells). Elongated cells with extensive cytoplasmic processes that wrap collagen bundles [^hirashima2020]. PDLFs are responsible for:
- Continuous synthesis and remodeling of collagen I and III, fibronectin, and proteoglycans
- Mechanosensing of occlusal forces via integrin-collagen contacts
- Paracrine signaling to cementoblasts (cementum apposition) and osteoblasts (alveolar bone formation)
- Expression of both osteoblastic and fibroblastic markers (periostin, collagen I, alkaline phosphatase), reflecting their unique phenotype at the bone-ligament boundary

### Cementoblasts

Lining cells on the root cementum surface that deposit cellular and acellular cementum. Required for embedding Sharpey's fibers during cementogenesis and for reparative cementum deposition after injury. Sclerostin (SOST) expression in cementocytes mirrors that in osteocytes, consistent with shared Wnt-regulation of mineralized tissue homeostasis [^gap/cementoblast-aging].

### Osteoblasts

Lining the alveolar bone surface within the PDL space. Deposit bundle bone (the specialized bone at PDL-alveolar bone insertions) and remodel it in response to biomechanical signals relayed from PDLFs. In aging, FOXO1-mediated transcriptional programs in PDL-associated osteoblasts are disrupted by PDLSC senescence, impairing coupled bone formation [^liu2025][^zhou2022].

### Periodontal ligament stem cells (PDLSCs)

PDLSCs are the best-characterized mesenchymal stem cell (MSC) population in the periodontium. First formally characterized in 2004 as STRO-1+/CD146+ cells isolated from the PDL of extracted third molars, PDLSCs demonstrated multilineage potential (cementoblastic, adipogenic, collagen-forming) and in-vivo regeneration of a cementum/PDL-like structure when transplanted into immunocompromised rodents [^seo2004]. They express canonical MSC surface markers including STRO-1, CD146, CD90, CD29, CD44, CD105, and CD106 [^mrozik2010][^trubiani2019].

PDLSCs are the tissue's primary regenerative reserve — the cellular substrate for healing after injury or destructive periodontitis. Their number and functional capacity are the dominant determinant of whether reparative cementogenesis and Sharpey's fiber re-embedding can occur following attachment loss.

### Epithelial cell rests of Malassez (ERM)

Islands and cords of epithelial cells distributed throughout the PDL, surviving from the Hertwig's epithelial root sheath (HERS) that directed root formation. ERM are maintained through cellular turnover (proliferation balanced against apoptosis) throughout adult life [^oka2012]. Their density declines with age — a reduction in their number has been attributed to increased apoptosis in older animals [^goncalves2008]. Clinically, ERM can proliferate pathologically to form radicular (periapical) cysts. In normal homeostasis they may participate in PDL maintenance and repair signaling, though their precise adult function remains incompletely understood. #gap/no-mechanism

---

## Mechanotransduction and High Collagen Turnover

The PDL's fundamental mechanical role — distributing and dampening occlusal loads — demands a uniquely dynamic collagen remodeling capacity. PDL collagen turnover is among the fastest measured in any mammalian connective tissue: collagen half-life in rat molar PDL is approximately **3 days**; in rat incisor PDL approximately 6 days; in gingival lamina propria approximately 10 days [^sodek1988]. By contrast, dermal collagen half-life is measured in months to years.

This rapid turnover reflects:
1. Continuous mechanical micro-damage requiring fiber repair
2. Constitutive PDL cell-driven collagenolysis (MMP-1, MMP-2, MMP-13) and synthesis (collagen I/III)
3. Adaptive remodeling in response to changing occlusal loads (orthodontic tooth movement is mechanistically PDL remodeling — osteoclast activation on the compression side, osteoblast/cementoblast deposition on the tension side)

The fibroblast network, connected by gap junctions and coordinating signal propagation through the tissue, is the cellular infrastructure that sustains this turnover [^hirashima2020].

In aging, the coordination of mechanotransduction-to-remodeling is disrupted: senescent PDLFs and declining PDLSC numbers reduce the regenerative cellular reserve needed to maintain this equilibrium, and chronic periodontal inflammation adds an additional MMP-amplifying stimulus that tilts the remodeling balance toward net degradation.

---

## Aging Changes

### PDLSC exhaustion — the central regenerative deficit

The most mechanistically studied aging change in the PDL is the decline in PDLSC functional capacity with donor age. Key documented changes include:

| Parameter | Direction with aging | Evidence |
|---|---|---|
| Proliferative capacity | Decreased | [^wu2015][^li2020] |
| Osteogenic differentiation | Decreased (ALP, RUNX2, osteocalcin) | [^wu2015][^li2020] |
| Adipogenic differentiation | Decreased (reduced lipid droplet formation; PPARγ2 expression reduced) | [^li2020] |
| Collagen I / fibronectin / integrin-β1 production | Decreased | [^wu2015] |
| SA-β-galactosidase positivity | Increased (galactosidase staining in senescence-induced cells) | [^liu2025] |
| Apoptosis rate | Increased | [^li2020] |
| Immunosuppressive capacity | Decreased | [^li2020] |

Wu et al. (2015) showed that PDL cell sheets engineered from older donors had significantly lower osteogenic capacity, reduced ECM protein content (collagen I, fibronectin, integrin-β1), and diminished alkaline phosphatase activity — establishing that the age-related PDLSC decline is not merely a cell-number effect but a functional deficit affecting the quality of extracellular output [^wu2015].

Li et al. (2020) confirmed that aging reduces proliferative and trilineage differentiation potential while increasing apoptosis and senescence markers, and additionally demonstrated impaired immunosuppressive capacity — relevant to the inflammatory regulation of the periodontium [^li2020].

The mechanistic basis of PDLSC aging connects to core aging hallmarks: PIK3R3/FOXO1 signaling was identified as a regulator of PDLSC senescence, with PIK3R3 knockdown accelerating oxidative stress and senescence markers and impairing differentiation; PIK3R3 overexpression partially reversed age-related alveolar bone loss in aged rodents [^liu2025]. FOXO1 activity is a convergence point linking oxidative stress, insulin signaling, and stem cell fate in this context.

### Senescent cell accumulation in the PDL

Beyond PDLSC exhaustion, cellular senescence in the broader PDL cell population — including differentiated PDLFs — generates a local SASP that amplifies inflammation and degrades the tissue microenvironment. In the specific context of periodontitis, inflammation-induced PDLSC senescence has been shown to be mediated by lncRNA SLC30A4-AS1 through alternative splicing of TP53BP1, establishing a mechanistic link between the periodontal inflammatory environment and stem cell aging [^xu2025]. This pathway is of particular interest because it implies that chronic periodontitis may accelerate local PDL aging independently of chronological age.

### Collagen fiber and matrix changes

In aging PDL, collagen fiber organization is expected to deteriorate — reduced cross-linking efficiency, declining PDLF-mediated remodeling, and accumulated advanced glycation end-products (AGEs) would stiffen and disorganize the fiber bundles that constitute the core of load distribution. Specific quantitative data on human PDL collagen aging are limited compared to dermis or tendon. #gap/needs-human-replication

### Epithelial cell rests reduction

ERM cluster number declines with age, driven by increased apoptosis [^goncalves2008]. The functional consequences for PDL homeostasis are not well established. #gap/no-mechanism

### Host immune response and osteoblast-lineage effects

The periodontal inflammatory response with aging additionally disrupts osteoblast-lineage cell function within the PDL — suppressing coupled bone formation while bone resorption driven by RANKL/OPG dysregulation proceeds [^zhou2022]. This imbalance underlies the radiographically apparent alveolar bone loss that accompanies aging periodontitis.

---

## Aging-Related Disease Consequences

### [[periodontitis]]

PDL is the central target tissue of periodontitis. Bacterial biofilm (dental plaque) triggers a host immune-inflammatory response that, when chronic, results in:
- Dissolution of Sharpey's fiber attachment to cementum and alveolar bone
- Loss of PDL height (attachment loss, measured clinically as periodontal pocket depth and clinical attachment level)
- [[alveolar-bone]] resorption

Aging amplifies susceptibility to periodontitis through PDLSC exhaustion (impaired repair), accumulated cellular senescence (inflammatory SASP), and systemic immune-senescence (impaired pathogen containment). Severe periodontitis affects approximately 10.5–12% of the global population, with peak incidence at 35–40 years [^lamster2016]; prevalence increases markedly in older adults as the cumulative effects of attachment loss and tooth loss accumulate [^kanasi2016].

### [[tooth-loss]]

End-stage consequence of uncontrolled periodontitis. Loss of teeth triggers rapid alveolar bone resorption (the bone exists only to support teeth), destroying the entire PDL niche and eliminating the regenerative stem cell compartment in that region. The PDL cannot reform spontaneously following tooth extraction.

---

## Hallmark Intersections

| Hallmark | PDL mechanism |
|---|---|
| [[stem-cell-exhaustion]] | PDLSC number and functional capacity decline with age; reduced osteogenic, cementogenic, and collagen-producing output; impaired Sharpey's fiber re-embedding after injury |
| [[cellular-senescence]] | Senescent PDLFs and PDLSCs accumulate; SASP amplifies local MMP activity and cytokine-driven bone resorption; inflammation-induced PDLSC senescence via SLC30A4-AS1/TP53BP1 [^xu2025] |
| [[chronic-inflammation]] | Periodontal SASP + bacterial LPS activation of TLRs + RANKL-driven osteoclastogenesis; inflammaging amplifies periodontitis-driven attachment loss |

---

## Regenerative Biology and Therapeutic Relevance

PDLSCs are actively explored as a cell source for periodontal regeneration, with the rationale that autologous PDLSCs can regenerate functional PDL, cementum with Sharpey's fiber insertions, and supporting alveolar bone. The key limitation for aging patients is that autologous PDLSCs from older donors exhibit reduced regenerative capacity [^wu2015][^li2020] — making the age of the donor a material variable in any cell-therapy strategy. Allogeneic younger-donor PDLSCs or ex-vivo rejuvenation of aged PDLSCs are active research directions.

Small-molecule targets include PIK3R3/FOXO1 axis (senescence reversal) [^liu2025] and mTOR via LRP5 signaling (osteogenic differentiation enhancement in aged PDLSCs) [^gap/mTOR-PDLSC]. #gap/needs-human-replication — no human clinical trials of PDLSC therapy for age-related periodontitis have been completed as of 2026-06-12; the evidence base is preclinical (rodent models and in-vitro human cell studies).

---

## Limitations and Gaps

- `#gap/needs-human-replication` — all PDLSC aging data (Wu 2015, Li 2020, Liu 2025) are in-vitro human cell studies or rodent in-vivo models; no longitudinal human in-vivo PDL cell biology data exist. The causal contribution of PDLSC decline to clinical attachment loss has not been established by controlled human trials.
- `#gap/needs-human-replication` — quantitative collagen fiber disorganization in aging human PDL (direct histological measurement in age-stratified human PDL biopsy series needed; current data extrapolated from animal studies or inference from collagen turnover kinetics)
- `#gap/no-mechanism` — functional role of ERM in adult PDL homeostasis; consequences of ERM reduction with age for PDL maintenance
- `#gap/dose-response-unclear` — PDL space width changes with aging: narrowing is clinically described but quantitative radiographic longitudinal data in healthy aging humans (without periodontitis) are sparse
- `#gap/unsourced` — specific quantitative data on senescent cell burden (p16^INK4a+, p21+ fraction) in aging human PDL in-vivo; contribution of oxidative-stress vs. replicative senescence pathways in PDLFs
- `#gap/needs-replication` — PIK3R3/FOXO1 as a therapeutic target for PDLSC senescence (single study [^liu2025]; rodent model only; no replication in human cells reported yet)
- No dedicated wiki pages yet for `[[pdl-fibroblasts]]`, `[[cementoblasts]]`, `[[periodontal-ligament-stem-cells]]`, `[[epithelial-cell-rests-of-malassez]]` — these are implicit stubs

---

## Cross-References

- [[alveolar-bone]] (existing) — mineralized tissue into which PDL Sharpey's fibers insert; shares aging hallmarks (senescence, chronic-inflammation); rapid resorption follows tooth loss
- [[gingiva]] (existing) — coronal sibling tissue of the periodontium; junctional epithelium seals the PDL from the oral environment
- [[periodontitis]] (existing) — primary disease phenotype of PDL destruction; inflammatory driver of PDLSC senescence
- [[tooth-loss]] (existing) — end-stage consequence; eliminates the PDL niche entirely
- [[cellular-senescence]] (existing) — hallmark MOC; senescent PDLFs and PDLSCs accumulate with age and disease
- [[stem-cell-exhaustion]] (existing) — hallmark MOC; PDLSCs are a canonical stem cell population with well-documented aging-associated functional decline
- [[chronic-inflammation]] (existing) — hallmark MOC; periodontal SASP and LPS-driven inflammation accelerate attachment loss
- [[bone]] (existing) — biological sister tissue; shared RANKL/OPG remodeling machinery; systemic bone aging biology applies here
- [[pdl-fibroblasts]] (implicit stub) — dominant cell type; mechanotransduction and collagen remodeling
- [[periodontal-ligament-stem-cells]] (implicit stub) — STRO-1+/CD146+ MSC population; canonical regenerative reserve
- [[cementoblasts]] (implicit stub) — cementum-depositing cells; Sharpey's fiber embedding
- [[epithelial-cell-rests-of-malassez]] (implicit stub) — epithelial remnants; decline with age via apoptosis

---

## Footnotes

[^seo2004]: doi:10.1016/S0140-6736(04)16627-0 · Seo BM, Miura M, Gronthos S, Bartold PM, Batouli S, Brahim J, Young M, Robey PG, Wang CY, Shi S · *The Lancet* 2004;364(9429):149-155 · PMID:15246727 · n=cells from extracted third molars · in-vitro + in-vivo (immunocompromised mouse/rat transplant) · PDLSCs isolated by single-colony selection; express STRO-1, CD146; multilineage differentiation (cementoblastic, adipogenic, collagen-forming); regenerated cementum/PDL-like structure in vivo · 2,863 citations (landmark characterization study)

[^sodek1988]: doi:10.1016/s0174-173x(88)80032-3 · Sodek J, Ferrier JM · *Collagen and Related Research* 1988;8(1):11-21 · PMID:3345646 · in-vivo rat (molar and incisor PDL; gingival lamina propria) · corrected isotope-dilution method; collagen half-life ~3 days (molar PDL), ~6 days (incisor PDL), ~10 days (gingival LP) — fastest connective-tissue collagen turnover measured in mammals; confirms rapid remodeling capacity · 73 citations

[^hirashima2020]: doi:10.1007/s12565-019-00502-5 · Hirashima S, Kanazawa T, Ohta K, Nakamura K-I · *Anatomical Science International* 2020;95(1):1-11 · PMID:31506855 · FIB/SEM tomography in mouse PDL · PDL fiber bundles are branched structures wrapped in thin PDL fibroblast cytoplasmic sheets; PDLFs form an extensive cellular network between cementum and alveolar bone; Sharpey's fiber insertion ultrastructure documented · 36 citations

[^ripamonti2013]: PMID:24133950 · Magan A, Ripamonti U · *SADJ* 2013;68(7):304-314 · review · Sharpey's fiber formation during cementogenesis and regeneration; orientation of periodontal ligament fibers for load distribution; relevance to regenerative outcome

[^mrozik2010]: doi:10.1007/978-1-60761-820-1_17 · Mrozik K, Gronthos S, Shi S, Bartold PM · *Methods in Molecular Biology* 2010;666:269-284 · PMID:20717790 · isolation and characterization of PDLSCs; STRO-1, CD146, CD29, CD44, CD106 (VCAM-1) expression (note: CD106 not CD105); in-vitro and in-vivo differentiation capacity including cementoblast-like output

[^trubiani2019]: doi:10.1089/scd.2019.0025 · Trubiani O, Pizzicannella J, Caputi S, Marchisio M, Mazzon E, Paganelli R, Paganelli A, Diomede F · *Stem Cells and Development* 2019;28(15):995-1003 · PMID:31017047 · review · PDLSC characteristics, markers, immunomodulatory and differentiation properties; angiogenic and anti-inflammatory functions; future perspectives in tissue engineering · 168 citations

[^wu2015]: doi:10.1016/j.actbio.2015.04.024 · Wu RX, Bi CS, Yu Y, Zhang LL, Chen FM · *Acta Biomaterialia* 2015;22:70-82 · PMID:25922305 · in-vitro human PDLSCs from donors of varying ages · age-related decline in proliferation, osteogenic differentiation (ALP, RUNX2, osteocalcin), collagen I, fibronectin, and integrin-β1 production in cell sheets; alkaline phosphatase activity reduced in aged cell sheets · 66 citations

[^li2020]: doi:10.1186/s13287-020-01846-w · Li X, Zhang B, Wang H, Zhao X, Zhang Z, Ding G, Wei F · *Stem Cell Research & Therapy* 2020;11(1):326 · PMID:32727592 · in-vitro human PDLSCs · n=20 young donors (ages 19–20) vs n=21 adult donors (ages 35–50) · decreased proliferation, osteogenic/adipogenic/chondrogenic differentiation potential and immunosuppressive capacity with aging; increased apoptosis; PPARγ2 protein decreased (adipogenesis reduced, not increased); SA-β-gal not tested in this paper; recommendation for younger donor cells in regenerative applications · 46 citations

[^xu2025]: doi:10.1111/cpr.13778 · Xu M et al., Tian BM · *Cell Proliferation* 2025;58(4):e13778 · PMID:39572253 · in-vitro human PDLSCs · lncRNA SLC30A4-AS1 mediates inflammation-induced PDLSC senescence via SRSF3-dependent alternative splicing of TP53BP1; specifically TP53BP1-204 isoform; TP53BP1-204 knockdown reversed PDLSC senescence; mechanistic link between periodontitis inflammation and PDLSC aging

[^liu2025]: doi:10.1016/j.jare.2025.01.031 · Liu X et al., Liu Y · *Journal of Advanced Research* 2025;77:357-370 · PMID:39862908 · in-vitro human PDLSCs + in-vivo aged rodent model · PIK3R3 knockdown accelerates PDLSC senescence, oxidative stress, and differentiation loss via FOXO1; PIK3R3 overexpression mitigates age-related alveolar bone loss; model: female Sprague-Dawley rats n=20, 15 months old; positions PIK3R3/FOXO1 axis as a therapeutic target for PDLSC senescence · 3 citations (2025)

[^zhou2022]: doi:10.3389/fimmu.2022.998244 · Zhou M, Graves DT · *Frontiers in Immunology* 2022;13:998244 · PMID:36304447 · review · osteoblast-lineage cell (osteoblasts, osteocytes, bone lining cells) contributions to periodontal bone loss; RANKL/OPG axis; suppression of coupled bone formation by inflammatory response; aging, diabetes, and systemic disease as amplifiers · cross-validates alveolar bone remodeling mechanisms

[^goncalves2008]: doi:10.1111/j.1600-0765.2007.01050.x · Gonçalves JS, Sasso-Cerri E, Cerri PS · *Journal of Periodontal Research* 2008;43(5):478-481 · PMID:18221295 · in-vivo rat (29–120 days) · ERM cluster number declines with age; increased apoptosis (TUNEL) in older animals responsible for quantitative reduction of rests of Malassez · 15 citations

[^oka2012]: doi:10.1111/eos.12003 · Oka K, Morokuma M, Imanaka-Yoshida K, Sawa Y, Isokawa K, Honda MJ · *European Journal of Oral Sciences* 2012;120(6):484-494 · PMID:23167464 · in-vivo mouse molar (C57BL/6) + in-vitro culture · ERM maintained by cellular turnover (Ki67+ proliferation balanced against apoptosis) throughout life; Lgr5+ putative epithelial stem cells identified; ERM cluster size increases with aging

[^lamster2016]: doi:10.1111/prd.12131 · Lamster IB, Asadourian L, Del Carmen T, Friedman PK · *Periodontology 2000* 2016;72(1):96-107 · PMID:27501493 · review · aging mouth: severe periodontitis affects 10.5–12% of global population; peak incidence at 35–40 years; limited attachment loss as normal aging; functional dentition threshold (≥20 teeth) for healthy aging

[^kanasi2016]: doi:10.1111/prd.12126 · Kanasi E, Ayilavarapu S, Jones J · *Periodontology 2000* 2016;72(1):13-18 · PMID:27501488 · review · aging demographics and periodontal disease epidemiology; 11% of global population >60 years, projected 22% by 2050; rising prevalence of periodontal disease with global aging; systemic and medication-related risk factor amplification in older adults
