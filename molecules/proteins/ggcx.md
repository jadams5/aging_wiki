---
type: protein
aliases: [gamma-glutamyl carboxylase, vitamin K-dependent gamma-carboxylase, VKGC]
uniprot: P38435
ncbi-gene: 2677
hgnc: 4247
ensembl: ENSG00000115486
genage-id: null
pathways: ["[[vitamin-k-cycle]]"]
hallmarks: ["[[altered-intercellular-communication]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
mouse-ortholog: Ggcx
druggability-tier: 4
gtex-aging-correlation: "#gap/needs-gtex-aging-correlation — not retrieved from GTEx v2 API; GGCX has high baseline expression in liver and kidney; no aging-correlation literature identified"
mr-causal-evidence: not-tested
caused-by: ["[[vitamin-k]]"]
causes: ["[[matrix-gla-protein]]", "[[vascular-calcification]]"]
verified: true
verified-date: 2026-06-02
verified-by: claude
verified-scope: "Primary-source PDFs verified for Tie 2016 (Blood), De Vilder 2017 (IJMS), Berkner & Runge 2022 (IJMS), Wu 2025 (Nat Commun), and Kaesler 2025 (Acta Physiol). Stafford 2005 (J Thromb Haemost) is not_oa — not verified against full text, core vitamin K cycle framing retained with #gap/no-fulltext-access. Watzka 2014 (Thromb Res) is not_oa — not verified against full text, #gap/no-fulltext-access retained. Ghosh 2022 (Hum Mutat) download failed — not verified against full text, #gap/no-fulltext-access retained. Corrections: (1) n corrected from 36 to 47 patients in De Vilder 2017 description; (2) N-glycosylation sites corrected (Asn-570 removed, Asn-627 added per De Vilder 2017); (3) carbamylation targets in Kaesler 2025 corrected to include arginine residues alongside lysine; (4) TM helix count reconciled — 9-helix count (Wu 2025 cryo-EM) cited explicitly and discrepancy with older 5-TMD model noted; (5) unsourced PDB 9BUM identifier removed from body (not confirmed in visible Wu 2025 text); (6) Kaesler 2025 last-author corrected to Vera Jankowski. Canonical IDs (UniProt P38435, NCBI Gene 2677, HGNC 4247, Ensembl ENSG00000115486) independently confirmed via UniProt REST API and HGNC REST API 2026-06-02."
literature-checked-through: null
---

# GGCX (Gamma-Glutamyl Carboxylase)

GGCX is the single enzyme responsible for all vitamin K-dependent gamma-carboxylation in mammals — the post-translational conversion of specific glutamate (Glu) residues to gamma-carboxyglutamate (Gla) on vitamin K-dependent proteins (VKDPs). It is not a longevity gene, and its disruption does not accelerate aging per se. Its aging relevance is mechanistic and indirect: GGCX gates the activation of [[matrix-gla-protein]] (MGP), the primary anti-calcification effector in the arterial wall. Without functional GGCX or sufficient reduced vitamin K substrate, MGP remains uncarboxylated and biologically inert — and arterial calcification proceeds unopposed. This places GGCX at the enzymatic centre of the [[vitamin-k]] → cMGP → [[vascular-calcification]] suppression axis.

## Identity

| Field | Value |
|---|---|
| UniProt | P38435 (VKGC_HUMAN) |
| NCBI Gene | 2677 |
| HGNC | 4247 |
| Ensembl | ENSG00000115486 |
| Gene symbol | GGCX (synonym: GC) |
| Protein name | Vitamin K-dependent gamma-carboxylase |
| Mouse ortholog | Ggcx (NCBI Gene 56316) |
| EC number | 4.1.1.90 |
| Subcellular location | Endoplasmic reticulum membrane; multi-pass transmembrane protein (9 TM helices per cryo-EM [^wu2025]; 5 TMDs per earlier biochemical topology models [^devilder2017]) |
| Length | 758 aa (human precursor) |

IDs confirmed: UniProt P38435 retrieved via UniProt REST API 2026-06-02; NCBI Gene 2677 via NCBI Gene eSearch; HGNC 4247 and Ensembl ENSG00000115486 via HGNC REST API; mouse Ggcx NCBI Gene 56316 via NCBI eSearch.

## Structure and topology

GGCX is an integral membrane protein of the endoplasmic reticulum membrane [^berkner2022]. Cryo-EM structures determined in 2025 resolved nine transmembrane (TM) helices [^wu2025]. Earlier topology models based on biochemical analysis predicted five transmembrane domains [^devilder2017]; the nine-helix model from atomic-resolution cryo-EM supersedes that earlier prediction. The TM helices anchor GGCX in the ER bilayer, placing its catalytic and substrate-recognition domains in the ER lumen where newly synthesised VKDPs are processed. Key structural features:

- **Cytoplasmic N-terminal domain** (residues 2–64) — likely regulatory; binds the propeptide recognition sequence on VKDP precursors
- **Lumenal C-terminal domain** (residues 378–758) — contains the carboxylase catalytic core
- **Disulfide bond** between Cys-99 and Cys-450 — required for structural integrity
- **N-glycosylation sites** at Asn-459, Asn-550, Asn-605, Asn-627 — modify trafficking and stability [^devilder2017]

A 2025 cryo-EM study of the human GGCX enzyme provided atomic-resolution insight into substrate recognition and revealed a **bicarbonate-mediated CO2 capture mechanism** for the carboxylation step — the bicarbonate ion acts as the activated CO2 donor for the carboxylation reaction rather than molecular CO2 directly [^wu2025]. This resolved a long-standing mechanistic debate about the carbon source.

## Catalytic mechanism

GGCX catalyses:

```
L-Glu-[protein] + vitamin K hydroquinone (KH2) + CO2 → Gla-[protein] + vitamin K 2,3-epoxide + H2O
```

The reaction couples Glu carboxylation to oxidation of the vitamin K hydroquinone (KH2) to vitamin K 2,3-epoxide. The oxidation is obligate — GGCX cannot use oxidised vitamin K [^stafford2005]. The epoxide is recycled to KH2 by the vitamin K epoxide reductase complex ([[vkorc1]]), completing the vitamin K cycle. GGCX has an absolute requirement for the propeptide sequence of its substrates: each VKDP precursor contains a ~18-aa propeptide that docks to GGCX and initiates carboxylation of the downstream Gla domain in a processive fashion [^berkner2022].

## Cofactor requirements

| Cofactor | Role | Consequence of deficiency |
|---|---|---|
| Vitamin K hydroquinone (KH2) | Obligatory electron donor; oxidised to K-2,3-epoxide per carboxylation event | All VKDPs remain uncarboxylated; clotting failure + extrahepatic VKDP failure (including MGP) |
| CO2 (via bicarbonate) | Carbon donor for the new carboxyl group on Glu | Reaction halted |
| Phosphatidylcholine / cholesterol | Lipid cofactors; required for full activity in ER membrane context | Partial activity reduction |

GGCX does not catalyse carboxylation of arbitrary glutamates — substrate selectivity is entirely determined by the propeptide docking [^berkner2022]. The therapeutic implications of warfarin flow from this: warfarin inhibits [[vkorc1]], depleting KH2, and thereby blocks all GGCX-catalysed carboxylation globally — coagulation factors (hepatic) and extrahepatic VKDPs (MGP, osteocalcin, Gas6) alike.

## VKDP substrates relevant to aging

GGCX carboxylates all VKDPs; the aging-relevant subset:

| Substrate | Location | Gla-dependent function | Aging relevance |
|---|---|---|---|
| **MGP** ([[matrix-gla-protein]]) | VSMC, chondrocytes, kidney | Crystal nucleation blockade; BMP-2 sequestration | **Central** — ucMGP fails to inhibit arterial calcification; dp-ucMGP is inverse biomarker of vascular vitamin K status |
| Osteocalcin (BGLAP) | Osteoblasts, bone matrix | Mineral binding; disputed endocrine functions (insulin secretion, testosterone) | Moderate — bone mineralisation marker; GGCX-deficiency causes osteocalcin undercarboxylation and bone phenotype |
| Gas6 | Ubiquitously expressed | TAM receptor (Tyro3/Axl/MerTK) ligand; efferocytosis, inflammation resolution, platelet function | Indirect — Gas6/Axl signalling modulates inflammation and cellular survival; undercarboxylation impairs receptor binding |
| Coagulation factors II, VII, IX, X; Protein C, S, Z | Liver | Phospholipid-dependent coagulation | GGCX mutations cause combined clotting factor deficiency; not direct aging mechanism |

For the full anti-calcification mechanism of MGP, see [[matrix-gla-protein]].

## Tissue expression

GGCX is ubiquitously expressed wherever VKDPs are synthesised. Highest constitutive expression in liver (dominant site for coagulation factor carboxylation) and kidney. Critical extrahepatic sites include vascular smooth muscle cells (VSMCs, for MGP), osteoblasts/osteocytes (osteocalcin), and most tissues expressing Gas6 or other VKDPs. #gap/needs-gtex-aging-correlation — age-stratified expression data from GTEx v2 API not retrieved; no literature-level aging correlation identified.

## Loss-of-function: VKCFD type 1 and the GGCX-phenotype spectrum

### VKCFD type 1 (OMIM 277450)

Biallelic GGCX mutations cause **Combined Deficiency of Vitamin K-Dependent Clotting Factors type 1 (VKCFD1)** — a rare autosomal recessive disorder characterised by decreased activity of coagulation factors II, VII, IX, and X with variable severity. Critically, GGCX loss-of-function extends well beyond coagulation:

- **Skeletal phenotype** — reduced osteocalcin carboxylation impairs bone mineralisation, leading to features of Keutel syndrome (peripheral cartilage calcification, short stature, facial anomalies)
- **Skin phenotype** — a subset of GGCX mutations with severe impairment of Gla-rich protein (GRP) carboxylation cause skin laxity consistent with pseudoxanthoma elasticum-like disorder (PXEL-MCFD) [^ghosh2022]
- **Vascular phenotype** — undercarboxylated MGP fails to suppress arterial calcification; some patients have premature arterial calcification

A systematic review of 47 GGCX-mutation patients (28 individual probands) identified a spectrum from pure bleeding to combined skeletal/cardiovascular phenotypes, with genotype-phenotype correlations suggesting that different GGCX domains preferentially process different VKDP substrates [^devilder2017].

### Substrate-selective mutations and mechanistic dissection

The Tie & Stafford 2016 study of the GGCX D153G variant demonstrated that a single mutation can differentially impair carboxylation of coagulation factors versus MGP at physiological vitamin K concentrations, producing both severe cerebral bleeding (clotting factor failure) and features of Keutel syndrome (MGP failure) [^tie2016]. This mutation demonstrates that GGCX's carboxylation efficiency for individual VKDPs is substrate-tunable — clinically relevant for understanding why some GGCX variants cause primarily bleeding versus primarily calcification/skeletal phenotypes.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Single GGCX enzyme catalyses all Gla modifications; EC 4.1.1.90 activity documented across vertebrates |
| Phenotype conserved in humans? | yes | VKCFD1 in humans mirrors Mgp-/- mouse calcification phenotype at the extrahepatic VKDP level |
| Replicated in humans? | yes (rare disease + genetic studies) | VKCFD1 cohort studies confirm combined coagulation + extrahepatic VKDP phenotype |

## GGCX and the uremia/calcification axis

An important interaction relevant to aging-adjacent contexts: in uremic patients, systemic carbamylation (from elevated urea/cyanate) modifies arginine and lysine residues on GGCX, reducing its enzymatic activity — independently of vitamin K substrate availability. Mass spectrometry identified carbamylation primarily at arginine residues (Arg 436, 672/673 and others) and lysine residues (Lys 325, 480) in rodent CKD models and in human carotid plaques. A 2025 study demonstrated that vitamin K2 supplementation can partially restore GGCX activity in this carbamylated state in a CKD model, with reduced vascular calcification as the downstream readout [^kaesler2025]. This raises the possibility that GGCX dysfunction in CKD-associated calcification is mechanistically dual: substrate depletion (low KH2) and enzyme damage (carbamylation). For the non-CKD aging context, this mechanism has not been tested — carbamylation is primarily a uremia-context phenomenon and is not a dominant GGCX modulator in healthy aging. #gap/needs-human-replication

## Druggability assessment

**Tier 4 (undruggable for aging indication).**

No clinical drug engages GGCX for any aging indication. The therapeutic strategy in the vitamin K axis is upstream substrate supplementation (MK-7/K2 to supply KH2 cofactor) or VKOR-upstream warfarin avoidance — neither engages GGCX directly. There is no probe compound for GGCX activitation or selective VKDP-substrate tuning in clinical or late-preclinical use. The 2025 cryo-EM structure of GGCX [^wu2025] opens the possibility of structure-guided allosteric modulators in principle, but no such development programme is in the literature as of 2026-06-02.

Distinguishing GGCX from VKOR: warfarin acts on [[vkorc1]] (the epoxide reductase), not on GGCX itself. Warfarin's anti-calcification concern (and the rationale for warfarin-to-DOAC switching) operates through VKOR → KH2 depletion → GGCX substrate starvation.

**Aging-context tier rationale:** GGCX is the central enzyme, but it is not rate-limiting under normal conditions — vitamin K substrate availability is the typical bottleneck. A specific GGCX activator would only be therapeutically useful if the enzyme itself were the limiting factor (as in VKCFD1 or uremic carbamylation), not the usual case in healthy aging.

## Mendelian randomisation and population genetics

**mr-causal-evidence: not-tested** — no MR study using common GGCX variants as instruments for a relevant aging outcome (cardiovascular disease, calcification, bone density) was identified in the literature. Common GGCX polymorphisms (including the GGCX microsatellite studied for warfarin dosing [PMID 16089544]) have been investigated for pharmacogenomics, not aging outcomes.

## Aging relevance: honest framing

GGCX is not a classic longevity gene. It does not appear in GenAge (`genage-id: null`). Its aging relevance is:

1. **Mechanistic gateway** — GGCX activity is the biochemical bottleneck for converting dietary vitamin K to active carboxylated VKDPs. In conditions of borderline vitamin K insufficiency (common in older adults), GGCX operates with sub-saturating substrate, leading to partial VKDP undercarboxylation. The extrahepatic consequence — rising dp-ucMGP in vascular tissue — is the clinically measurable signal of this insufficiency.
2. **Hallmark linkage via MGP** — the hallmark assignment `[[altered-intercellular-communication]]` is indirect: when MGP is undercarboxylated, vascular smooth muscle cells undergoing calcification release pro-inflammatory signals (BMP-2 signalling, SASP-like mediators) that alter paracrine communication in the vessel wall. This is a downstream consequence of GGCX substrate failure, not a direct GGCX effect on signalling.
3. **Aging-context carbamylation** — the 2025 data suggesting uremia-linked carbamylation can impair GGCX enzymatic activity is a potential aging-accelerating mechanism in CKD, but its relevance to non-uremic aging is not established.

The core actionable recommendation flowing from this axis is not GGCX targeting but adequate vitamin K2 (MK-7) status — documented on [[matrix-gla-protein]] and [[vitamin-k]].

## Pathway membership

- **[[vitamin-k-cycle]]** — GGCX is the carboxylase step of the vitamin K cycle; [[vkorc1]] is the epoxide reductase step.
- **[[vascular-calcification]]** (stub) — GGCX-dependent MGP carboxylation is the mechanistic basis for the anti-calcification arm; no process page exists yet.

## Key interactors

- [[vitamin-k]] (substrate/cofactor) — KH2 is the obligatory reductant-cofactor; substrate availability is the primary rate-limiting factor in most physiological contexts
- [[vkorc1]] ([[vkor]]) — partner enzyme in the vitamin K cycle; regenerates KH2 from K-2,3-epoxide; warfarin target
- [[matrix-gla-protein]] — primary extrahepatic substrate of GGCX relevant to arterial calcification
- [[bmp-2]] — indirectly regulated: cMGP (product of GGCX activity) sequesters BMP-2, preventing osteogenic VSMC transdifferentiation

## Related pages

- [[vitamin-k]] — substrate page; vitamin K cycle mechanism and K1/K2 pharmacokinetics
- [[matrix-gla-protein]] — primary aging-relevant GGCX substrate; carboxylation requirement fully documented there
- [[vkorc1]] — partner enzyme; regenerates reduced vitamin K to sustain GGCX carboxylation
- [[vascular-calcification]] — downstream process; GGCX-dependent MGP carboxylation is the mechanistic anchor
- [[bmp-2]] — BMP-2 sequestration by cMGP
- [[altered-intercellular-communication]] — hallmark page for the downstream paracrine signalling failure

## Limitations and gaps

- #gap/needs-gtex-aging-correlation — GGCX age-stratified expression data not retrieved from GTEx v2 API; field populated from literature summary only.
- #gap/needs-human-replication — GGCX carbamylation as an aging-relevant mechanism (beyond CKD) has no human population evidence.
- `[[vitamin-k-cycle]]` pathway page now exists and is verified (2026-06-02).
- `genage-id: null` — GGCX does not appear in GenAge human aging gene database; structurally expected for an enzyme whose aging relevance is indirect (substrate-gateway, not longevity gene).
- All primary citations below are not in the local archive (not_oa or not yet downloaded); flagged for verifier with #gap/no-fulltext-access.

## Footnotes

[^berkner2022]: doi:10.3390/ijms23105759 · Berkner KL, Runge KW · *Int J Mol Sci* 2022;23(10):5759 · n=not applicable (review) · review · comprehensive description of GGCX structure, catalytic mechanism, propeptide-dependent processivity, and disruption in VKCFD1 and PXEL-MCFD disease · 47 citations at Crossref · #gap/no-fulltext-access (not in local archive)

[^wu2025]: doi:10.1038/s41467-025-65488-3 · Wu K, Wang Z, Yao D et al. (Lan PF last author) · *Nat Commun* 2025;16:10480 · structural biology (cryo-EM; resolution 2.62 Å for GGCX-FIX complex) · cryo-EM structures of human GGCX alone and in complex with VKD proteins, vitamin K, and anisindione; 9 TM helices resolved in TMD; bicarbonate-mediated CO2 capture mechanism described (CO2 bound in hydrophobic pocket near Phe299, stabilised by CO2's aromatic π-stacking interaction; mechanism conserved across bacteria and eukaryotes); bipartite clamp A/B exosite recognises VKD propeptides; allosteric clamp closure upon substrate binding; dipeptide anchoring mechanism for processive Glu carboxylation; anisindione identified as competitive GGCX inhibitor occupying vitamin K–binding pocket · model: recombinant human GGCX (Expi293F cells)

[^stafford2005]: doi:10.1111/j.1538-7836.2005.01419.x · Stafford DW · *J Thromb Haemost* 2005;3(8):1873–1878 · review · canonical description of the vitamin K cycle; GGCX catalytic mechanism; VKOR recycling; stoichiometry of KH2 oxidation per carboxylation event · 328 citations at Crossref · #gap/no-fulltext-access (not in local archive)

[^devilder2017]: doi:10.3390/ijms18020240 · De Vilder EYG, Debacker J, Vanakker OM · *Int J Mol Sci* 2017;18(2):240 · n=47 GGCX-mutation patients (28 individual probands; P1–P47); systematic PubMed review of 19 included papers + personal cohort · systematic review (PRISMA-P) · identified 32 distinct GGCX mutations across 5 phenotypic classes (VKCFD1, PXE-like, PXE/PXE-like overlap, PXE + pigmentary retinopathy); HTTM-domain mutations associated with cardiac and bone phenotypes; genotype-phenotype correlations suggest domain-specific substrate preferences; natural history suggests ageing as determinant of skin and eye symptoms · 49 citations at Crossref

[^tie2016]: doi:10.1182/blood-2015-10-677633 · Tie JK, Carneiro JDA, Jin DY, Martinhago CD, Vermeer C, Stafford DW · *Blood* 2016 · experimental (cell-based carboxylation assays; GGCX D153G variant) · single D153G mutation causes differential impairment of coagulation factor vs MGP carboxylation at physiological KH2 concentrations; confirms substrate-selectivity tuning by GGCX point mutations · model: cell-based GGCX activity assay · #gap/no-fulltext-access (not in local archive)

[^watzka2014]: doi:10.1016/j.thromres.2014.07.004 · Watzka M, Oldenburg J · *Thromb Res* 2014;134(4):856–865 · n=9 VKCFD1 patients (10 GGCX mutations identified) · observational/genetic case series · undercarboxylated MGP, osteocalcin, and periostin identified as responsible for skeletal/cardiovascular defects beyond bleeding; clinical mutation spectrum in VKCFD1 · 44 citations at Crossref · #gap/no-fulltext-access (not in local archive)

[^ghosh2022]: doi:10.1002/humu.24300 · Ghosh S, Watzka M et al. · *Hum Mutat* 2022 · n=20 GGCX variants analysed · experimental/genetic · mutations severely reducing GRP (Gla-rich protein) gamma-carboxylation correlate with skin laxity phenotype in VKCFD1; phenotype distinct from coagulation phenotype · #gap/no-fulltext-access (not in local archive)

[^kaesler2025]: doi:10.1111/apha.70040 · Kaesler N, Kaushik S, Frisch J et al. (Vera Jankowski last author) · *Acta Physiol (Oxf)* 2025;241:e70040 · experimental (two rodent CKD models — adenine nephropathy rat + 5/6 nephrectomy mouse — and human carotid plaques; mass spectrometry; carbamylation assay) · carbamylation of GGCX arginine and lysine residues impairs carboxylase activity in uremic conditions (arginine carbamylation dominant; Arg 436, 672/673 confirmed in multiple CKD models); vitamin K2 supplementation prevents carbamylation and partially restores activity; virtual screening identified chrysin as a potential GGCX binding partner; reduced vascular calcification in VSMCs · n=5–9 rodent groups; n=28 human carotid endarterectomy patients · model: CKD/uremia (not in local archive)
