---
type: cell-type
aliases: [FAPs, fibro/adipogenic progenitors, fibro-adipogenic progenitors, muscle interstitial progenitors, PDGFRalpha-positive stromal cells]
cell-ontology-id: null   # No precise CL term for PDGFRα+/Sca-1+ muscle interstitial FAP as of 2026-05; CL:0002320 (connective tissue cell) is too broad; #gap/needs-canonical-id
tissue-of-origin: ["[[skeletal-muscle]]"]
key-markers-mouse: [PDGFRα+, Sca-1+, CD31-, CD45-, Lin-]
key-markers-human: [PDGFRα+, CD31-, CD45-]   # CD56 used clinically for satellite-cell exclusion but not formally gated in Uezumi 2010 human panel; SM/C-2.6 is mouse-specific
lineage-output: [fibroblasts, adipocytes, chondrocytes]
self-renewal: limited
aging-relevant: yes
affected-hallmarks: ["[[stem-cell-exhaustion]]", "[[chronic-inflammation]]", "[[cellular-senescence]]"]
key-aging-phenotypes: ["[[sarcopenia]]"]
typical-niche: "skeletal muscle interstitium; perivascular and endomysial spaces between muscle fibers"
niche-signaling: ["[[tgf-beta]]", "[[wnt-beta-catenin]]", "[[pdgf-pathway]]"]
single-cell-aging-signature: null   # scRNA-seq aging signatures in FAPs not yet integrated; #gap/needs-singlecell-data
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Joe 2010 (ncb2015), Uezumi 2010 (ncb2014), Heredia 2013 (j.cell.2013.02.053), Wosczyna 2019 (correct DOI: j.celrep.2019.04.074, downloaded fresh), and Reggio 2020 (s41418-020-0551-y) primary source PDFs read end-to-end and cross-checked. Lemos 2015 (nm.3869) is not_oa; claims from that paper carry #gap/no-fulltext-access. Canonical-database identity fields (cell-ontology-id) not independently re-verified."
---

# Fibroadipogenic Progenitors (FAPs)

Mesenchymal-lineage stromal cells resident in the interstitium of skeletal muscle, defined by surface expression of PDGFRα with exclusion of endothelial (CD31+) and hematopoietic (CD45+) lineages. In mouse, Sca-1 positivity is an additional positive marker; in human, PDGFRα+/CD56⁻ (excluding satellite cells) is used. First identified concurrently by Joe et al. and Uezumi et al. in 2010 as a non-myogenic muscle-resident population capable of forming adipocytes and fibroblasts [^joe2010][^uezumi2010]. In healthy young muscle, FAPs are kept in check by regenerative signals and undergo TNF-α-driven apoptosis after their transient support role is complete [^lemos2015] #gap/no-fulltext-access. With aging or chronic damage, FAPs fail to apoptose, accumulate in muscle, and differentiate into adipocytes (intramuscular fat) and activated fibroblasts (fibrosis) — directly contributing to [[sarcopenia]] and impaired regeneration [^lemos2015] #gap/no-fulltext-access.

## Identity and isolation

FAPs are operationally defined by immunophenotype and functional assays (adipogenic/fibrogenic differentiation in culture):

| Marker | Mouse | Human | Notes |
|---|---|---|---|
| PDGFRα (CD140a) | + | + | Canonical FAP marker; PDGF receptor alpha |
| Sca-1 (Ly6A) | + | — | Used in mouse only; no direct human equivalent |
| CD31 (PECAM-1) | − | − | Endothelial exclusion |
| CD45 | − | − | Hematopoietic exclusion |
| SM/C-2.6 | − | — | Mouse satellite-cell exclusion marker used by Uezumi 2010; no direct human equivalent in this paper |
| Lin (B220, CD3, Ter119 + other) | − | — | Mouse lineage exclusion cocktail (Joe 2010 strategy) |

Joe 2010 isolated FAPs as the Hoechst^mid/PI⁻/CD45⁻/CD31⁻/Sca-1⁺/CD34⁻ fraction (the Sca-1⁺CD34⁻ gate within the Lin-dump population), with PDGFRα used for in-situ validation and confirmation that >85% of FAPs are PDGFRα+ [^joe2010]. The Uezumi group used PDGFRα as the primary positive selection marker, gating on CD31⁻/CD45⁻/SM/C-2.6⁻/PDGFRα⁺ in mouse [^uezumi2010]. Both strategies converge on the same interstitial PDGFRα⁺ population. In human muscle, Uezumi 2010 used PDGFRα+/CD56- gating to enrich FAPs from the mononuclear cell fraction [^uezumi2010].

> Note: Cell Ontology lacks a dedicated term for the mouse FAP phenotype as of 2026-05. CL:0002320 (connective tissue cell) encompasses FAPs but is too broad for precise querying. A dedicated FAP CL term has been proposed but not finalized. #gap/needs-canonical-id

## Multipotent lineage output

FAPs are multipotent but not pluripotent. In culture:

- **Adipocytes**: readily induced by adipogenic cocktail (insulin/dexamethasone/rosiglitazone); the canonical FAP lineage output associated with pathology [^uezumi2010]
- **Fibroblasts / myofibroblasts**: induced by TGF-β1 stimulation; produce collagen I, fibronectin — the fibrogenic arm [^lemos2015] #gap/no-fulltext-access — fibrogenic differentiation claim attributed to Lemos 2015 (not_oa); TGF-β1-driven fibrogenesis is broadly accepted in the literature but unverified against this specific PDF
- **Chondrocytes**: reported in vitro; physiological relevance in muscle is unclear #gap/no-mechanism
- **Osteoblasts**: reported in some protocols; contested as an artifact of culture conditions #gap/contradictory-evidence

FAPs do **not** give rise to myocytes under standard conditions. They are Pax7-negative and MyoD-negative, distinguishing them definitively from [[satellite-cells]] (Pax7+, MyoD+/−). PDGFRα+ FAPs that acquire myogenic markers have been described rarely and are considered exceptional, not constitutive [^joe2010].

## Homeostatic role in regeneration

In healthy muscle, FAPs are pro-regenerative. After acute injury (cardiotoxin, glycerol, laceration), FAPs transiently expand in the first 2–4 days, releasing paracrine signals that support satellite-cell activation and myoblast differentiation. Key mechanisms:

### Eosinophil-FAP-myogenesis axis (IL-4 signaling)

Heredia et al. 2013 showed that in the regenerating muscle milieu, type 2 innate immune signals drive FAP pro-myogenic behavior [^heredia2013]. Eosinophils (identified as CD11b⁺/Siglec F⁺ cells in the 4get IL-4-reporter mouse) are the dominant IL-4-secreting cell type in injured muscle, appearing within 1–2 days post-injury. **IL-4** acts directly on FAPs (via IL-4Rα/STAT6) to suppress their adipogenic program (repressing PPARγ, Lep, Fabp4, Acaca, Cd36, Dgat2) and promote secretion of paracrine factors (including myogenic gene-inducing mediators) that stimulate myogenesis. IL-4 also promotes FAP proliferation (~2-fold at 48 h, ~4-fold at 72 h) and necrotic debris clearance by FAPs. In eosinophil-deficient ΔdblGATA mice (GATA-1 high-affinity site deletion, which ablates the eosinophil lineage), muscle regeneration is severely impaired and intramuscular fat deposition increases — a deficit partially rescued by IL-4 complex injection (n = 6 per treatment). This established FAPs as signal-integrating cells whose fate (myogenesis-support vs. adipogenesis) is controlled by the immunological context of the muscle environment.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial |
| Phenotype conserved in humans? | unknown |
| Replicated in humans? | no |

### FAP support of satellite-cell niche

Wosczyna et al. (2019) demonstrated that FAP depletion impairs both skeletal muscle regeneration and long-term homeostatic maintenance [^wosczyna2019]. Using a PDGFRα^CreER;R26^DTA knockin system (Cre-dependent diphtheria toxin A expression, achieving ~75% FAP depletion following tamoxifen; n=5–9 per group), they showed: (1) after CTX injury, FAP-depleted mice had impaired MuSC and HC expansion, smaller regenerating myofibers at 14 dpi (mean myofiber CSA significantly reduced), and a significant regenerative deficit rescued by transplantation of donor GFP+ FAPs; and (2) under uninjured homeostatic conditions over 9 months, FAP-depleted mice exhibited reduced lean mass (significant from 3 months), reduced forelimb and hindlimb force, muscle fiber atrophy (smaller myofiber CSA at 9 months), and an approximately 45% reduction in MuSC numbers (n=4–6). Local TA-targeted FAP depletion via endoxifen-PCL implant recapitulated the atrophy phenotype without systemic effects, confirming that local muscle-resident FAPs are the relevant population. This establishes that FAPs are required for long-term homeostatic maintenance of both skeletal muscle fiber size and the MuSC pool — not just for acute regeneration.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | unknown |
| Phenotype conserved in humans? | unknown |
| Replicated in humans? | no |

#gap/needs-human-replication — FAP homeostatic niche requirement demonstrated only in mouse (PDGFRα^CreER;R26^DTA model); human muscle biopsy studies have not isolated the causal niche interaction between FAPs and MuSCs.

## TNF-α apoptosis gate: the regeneration/fibrosis switch

The central mechanism distinguishing successful regeneration from fibrosis is the fate of FAPs after they perform their niche role. Lemos et al. 2015 described this in molecular detail [^lemos2015]:

- **Acute injury milieu**: High TNF-α (from infiltrating macrophages and neutrophils) drives FAP apoptosis via TNFR1 → caspase-8 pathway. FAPs expand transiently, support satellite cells, then die — leaving a clean regenerative field. #gap/no-fulltext-access — Lemos 2015 is closed-access; this mechanistic detail is consistent with the known TNF-α/TNFR1 pathway biology but has not been verified against the full PDF.
- **Chronic damage milieu** (dystrophic muscle, repeated injury): TNF-α levels are persistently elevated but FAPs acquire resistance to TNF-α-induced apoptosis. FAPs survive, persist, and differentiate into adipocytes/fibroblasts → fatty infiltration and fibrosis.
- **Nilotinib** (BCR-Abl/PDGFR kinase inhibitor) restores FAP apoptosis sensitivity in dystrophic mice (mdx model), reducing fibrosis — establishing this apoptosis mechanism as druggable. #gap/no-fulltext-access — nilotinib mdx result unverified against PDF.

This switch between apoptosis sensitivity and resistance is the proximate mechanism linking the immune/inflammatory context to the FAP contribution to pathology. The molecular details of apoptosis resistance acquisition in chronic damage are not fully resolved. #gap/no-mechanism

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial |
| Phenotype conserved in humans? | yes (fatty infiltration in muscular dystrophy and aging) |
| Replicated in humans? | no (mechanistic; observational replicated) |

## Aging biology: dysregulated FAPs drive sarcopenic pathology

With aging, FAPs become dysregulated in several ways that collectively drive [[sarcopenia]]:

### 1. Failure to apoptose after injury

Aged muscle shows impaired clearance of FAPs post-injury, resembling the chronic-damage milieu in young dystrophic mice [^lemos2015]. The mechanism likely involves reduced TNF-α sensitivity and altered macrophage polarization in aged muscle (shift toward M2-like anti-inflammatory macrophages that produce less TNF-α acutely). The result is FAP accumulation and inappropriate differentiation. #gap/needs-replication — aging-specific FAP apoptosis kinetics not directly measured in aged wild-type mice in Lemos 2015; extrapolated from chronic damage model.

### 2. Adipogenic shift via WNT5a/GSK3/β-catenin dysregulation

Aged and dystrophic FAPs show increased adipogenic differentiation potential driven by altered WNT signaling [^reggio2020]. FAPs from dystrophic (mdx) mice have reduced WNT5a expression (confirmed in two independent bulk RNAseq datasets), reduced active (non-phosphorylated) β-catenin, and increased active GSK3 (reduced pGSK3 Ser9) compared to wild-type FAPs. GSK3 phosphorylates β-catenin targeting it for proteasomal degradation, releasing transcriptional repression of PPARγ and driving adipogenesis. Key quantitative findings:

- Exogenous WNT5a (200 ng/ml) reverses FAP adipogenesis by phosphorylating GSK3 Ser9 → β-catenin stabilization → PPARγ suppression
- GSK3 inhibition by LY2090314 fully abrogates FAP adipogenesis ex vivo (IC50 = 6.57 nM in mdx FAPs) and reduces intramuscular fat in glycerol-injured mice in vivo (25 mg/kg IP × 3 days; n = 3–4)
- Old mdx FAPs (18-month-old) show further increases in adipogenic gene expression (C/ebpa, Pparg1) and reduced pro-myogenic factor production (Igf1, Il6) compared to young mdx FAPs (1.5-month-old)
- Single-cell mass cytometry (CyTOF) reveals β-catenin downregulation marks FAPs committed to adipogenesis

This identifies the WNT5a → GSK3 → β-catenin → PPARγ axis as the central regulator of FAP adipogenic fate. Note: Reggio 2020 does NOT characterize senescent FAPs by p16^INK4a, p21, or SA-β-galactosidase, and does NOT test ABT-263/navitoclax — those claims were incorrectly attributed in the initial extraction. #gap/needs-human-replication — WNT5a/GSK3 axis validated in mouse mdx and glycerol-injury models; not tested in human aged muscle.

### 4. Impaired support of satellite cells

Aged FAPs are less effective niche supporters for [[satellite-cells]]. Reggio 2020 shows that old mdx FAPs (18-month) produce lower Igf1 and Il6 — key pro-myogenic signals — and have increased adipogenic gene expression compared to young mdx FAPs, consistent with a secretome shift away from myogenic support [^reggio2020]. Whether this reflects quantitative (fewer FAPs) or qualitative (altered secretome composition) differences in aged wild-type muscle is not fully established. Given the homeostatic dependence of satellite cells on FAPs demonstrated in young mice [^wosczyna2019], FAP aging likely contributes to satellite cell functional decline underlying [[stem-cell-exhaustion]]. #gap/no-mechanism — cell-autonomous vs. niche-driven basis of aged FAP dysfunction not resolved.

## Hallmark connections

| Hallmark | Mechanism |
|---|---|
| [[stem-cell-exhaustion]] | FAP depletion causes ~45% MuSC decline over 9 months; aged FAPs are less effective niche supporters [^wosczyna2019] |
| [[chronic-inflammation]] | FAP survival in pro-inflammatory chronic damage milieu; TNF-α apoptosis resistance [^lemos2015] #gap/no-fulltext-access |
| [[cellular-senescence]] | Senescent FAP subpopulations have been proposed in aging/dystrophic muscle, but Reggio 2020 characterizes WNT/β-catenin dysregulation rather than canonical senescence markers; dedicated senescent-FAP characterization in aged wild-type muscle is an open gap #gap/needs-replication |

## Therapeutic implications

FAP-targeting strategies relevant to aging-related muscle pathology:

- **GSK3 inhibition** — LY2090314 abrogates FAP adipogenesis (IC50 6.57 nM in mdx FAPs) and reduces glycerol-induced intramuscular fat in vivo [^reggio2020]; no clinical program in muscle disease; GSK3 inhibitors have CNS and oncology programs but not aging muscle #gap/needs-human-replication
- **WNT5a restoration** — exogenous WNT5a (200 ng/ml) suppresses FAP adipogenesis ex vivo via GSK3/β-catenin [^reggio2020]; no clinical program identified #gap/long-term-unknown
- **PDGFR inhibition** — nilotinib claimed to restore FAP apoptosis in mdx mice [^lemos2015] #gap/no-fulltext-access; clinical trials in muscle disease are limited; off-target cardiac toxicity is a concern
- **IL-4/type 2 immune augmentation** — eosinophil-derived IL-4 acts on FAPs to suppress adipogenesis and promote myogenesis [^heredia2013]; IL-4 complex injection rescued muscle regeneration deficits in ΔdblGATA mice in vivo; no clinical program in aging muscle
- **Senolytics** targeting senescent FAPs — ABT-263/navitoclax has been discussed in the FAP context but was NOT tested in Reggio 2020; this claim requires a different or future citation #gap/needs-replication #gap/needs-human-replication

None of these strategies has been tested in human aging-related sarcopenia specifically. All remain preclinical. #gap/needs-human-replication

## Limitations and gaps

- `#gap/needs-canonical-id` — No dedicated Cell Ontology term for FAPs as of 2026-05; `cell-ontology-id` field left null.
- `#gap/needs-human-replication` — Core FAP biology (apoptosis switch, satellite-cell niche dependence, aging changes in adipogenic potential, WNT5a/GSK3 axis) established primarily in mouse (C57BL/6, mdx). Heredia 2013 used male BALB/cJ and C57BL/6 background mice aged 8–16 weeks; Wosczyna 2019 used C57BL/6 PDGFRα^CreER mice; Reggio 2020 used C57BL/6J (wt) and C57BL/10ScSn-Dmd^mdx/J mice with sexes balanced. Human FAP characterization exists (Uezumi 2010 human biopsy data) but mechanistic claims are mouse-only.
- `#gap/needs-replication` — Senescent-FAP characterization in aged wild-type muscle (p16+/p21+/SA-β-gal+) requires a dedicated study; Reggio 2020 addresses WNT/β-catenin dysregulation rather than senescence per se. ABT-263/navitoclax in FAP context is uncited here.
- `#gap/no-fulltext-access` — Lemos 2015 (doi:10.1038/nm.3869, not_oa): TNF-α/TNFR1/caspase-8 apoptosis-switch mechanism and nilotinib mdx result unverified against full PDF.
- `#gap/no-mechanism` — Molecular basis of FAP apoptosis resistance in chronic damage and aging is incompletely defined; chondrogenic and osteogenic lineage output under physiological conditions unclear.
- `#gap/needs-singlecell-data` — Single-cell transcriptomic aging signature of FAPs not integrated; Tabula Muris Senis and CellxGene Census contain FAP-enriched clusters under interstitial/stromal annotations (Reggio 2020 uses Tabula Muris Consortium and Giordani et al. datasets to characterize FAP WNT ligand expression but does not report an aging signature); cross-check needed.
- `#gap/long-term-unknown` — Long-term consequences of therapeutic FAP clearance on muscle structure and regenerative reserve are not characterized; Wosczyna 2019 shows FAPs are required for homeostasis, so ablation strategies carry risk.

## See also

- [[satellite-cells]] — FAP niche partner; co-dependent population in muscle homeostasis
- [[skeletal-muscle]] — resident tissue
- [[sarcopenia]] — primary age-related phenotype driven by FAP dysregulation
- [[stem-cell-exhaustion]] — hallmark page; satellite-cell exhaustion is downstream of FAP niche failure
- [[chronic-inflammation]] — hallmark page; TNF-α apoptosis gate [^lemos2015] #gap/no-fulltext-access; FAP survival in chronic inflammatory milieu
- [[cellular-senescence]] — hallmark page; senescent FAP subpopulations proposed but not yet characterized with canonical markers (p16/p21/SA-β-gal) in aged wild-type muscle #gap/needs-replication
- [[mesenchymal-stem-cells]] — overlapping lineage; FAPs are sometimes classified as muscle-resident MSC subpopulation

## Footnotes

[^joe2010]: [[studies/joe-2010-fap-identification]] · in-vivo + in-vitro · n=6 per group (transplantation experiments) · model: mouse (C57BL/6 + ROSA26-GFP + Myf5-Cre-R26R3-YFP) + human muscle biopsy · doi:10.1038/ncb2015 · locally downloaded; PDF verified 2026-05-06

[^uezumi2010]: [[studies/uezumi-2010-fap-ectopic-fat]] · in-vivo + in-vitro · n=6 per group (transplantation experiments) · model: mouse (C57BL/6) + human muscle biopsy · doi:10.1038/ncb2014 · locally downloaded; PDF verified 2026-05-06

[^lemos2015]: [[studies/lemos-2015-tnf-fap-apoptosis-fibrosis]] · in-vivo · model: mdx mouse + C57BL/6 · doi:10.1038/nm.3869 · not_oa per archive #gap/no-fulltext-access — TNF-α apoptosis switch mechanism (TNFR1/caspase-8) and nilotinib mdx result unverified against full PDF

[^heredia2013]: [[studies/heredia-2013-il4-eosinophil-fap-myogenesis]] · in-vivo + in-vitro · n=4–6 per genotype · model: mouse (BALB/cJ and C57BL/6 background; eosinophil-deficient ΔdblGATA; IL-4Rα-null Il4rα⁻/⁻; Il4/Il13⁻/⁻; myeloid-specific Il4rα^fl/fl LysM^Cre; PDGFRα-Cre conditional Il4rα deletion) · doi:10.1016/j.cell.2013.02.053 · locally downloaded; PDF verified 2026-05-06

[^wosczyna2019]: [[studies/wosczyna-2019-fap-satellite-cell-niche]] · in-vivo · n=3–9 per group · model: mouse (C57BL/6; PDGFRα^CreER;R26^DTA for FAP ablation; PDGFRα^CreER;R26^NG for GFP-labeling) · doi:10.1016/j.celrep.2019.04.074 · **Note: the DOI previously cited as 10.1016/j.celrep.2019.07.073 is incorrect** — that DOI resolves to a VISTA protein paper; correct DOI confirmed via PubMed (PMID:31091443); PDF downloaded fresh and verified 2026-05-06

[^reggio2020]: [[studies/reggio-2020-wnt-gsk3-fap-adipogenesis]] · in-vivo + in-vitro · n=3–4 per group · model: mouse (C57BL/6J wt; C57BL/10ScSn-Dmd^mdx/J; sexes balanced; young 45-day-old and old 18-month-old mdx) + single-cell mass cytometry (CyTOF) of mdx FAPs · doi:10.1038/s41418-020-0551-y · locally downloaded; PDF verified 2026-05-06. Topic: WNT5a/GSK3/β-catenin regulation of FAP adipogenesis — this paper does NOT characterize senescent FAPs by p16/p21/SA-β-gal markers and does NOT test ABT-263/navitoclax
