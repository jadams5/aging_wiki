---
type: protein
aliases: [BMP2, BMP-2A, bone morphogenetic protein 2]
uniprot: P12643
ncbi-gene: 650
hgnc: HGNC:1069
ensembl: ENSG00000125845
genage-id: null
pathways: ["[[bmp-signaling]]", "[[tgf-beta]]"]
hallmarks: ["[[chronic-inflammation]]", "[[deregulated-nutrient-sensing]]"]
sens-categories: []
mouse-ortholog: Bmp2
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: ["[[chronic-inflammation]]", "[[hyperphosphatemia]]"]
causes: ["[[vascular-calcification]]"]
literature-checked-through: 2026-05-23
verified: true
verified-date: 2026-05-23
verified-by: claude
verified-scope: "Liang 2024 (PeerJ, doi:10.7717/peerj.18063) read end-to-end against all mechanistic claims — 6 corrections applied (see log.md). Hao 2023 (JAHA) read pp.1-8; IL-29/JAK2/STAT3/BMP2 claim confirmed. Zhu 2024 (Cell Commun Signal) read pp.1-4; nesfatin-1 mechanism corrected from 'receptor signaling potentiation' to SYTL4 E3-ligase/BMP-2 stabilization. Wu 2023 (Open Medicine) read pp.1-4; ENPP1/PPi/BMP-2 claim confirmed and quantified. Yang 2026 (Atherosclerosis Plus) closed-access, not verifiable — G9A-BMP2 claim tagged #gap/no-fulltext-access. Canonical-DB identity fields (UniProt P12643, HGNC:1069, NCBI Gene 650, Ensembl ENSG00000125845) confirmed via live REST APIs. Propeptide cleavage enzyme corrected (furin-family → PCSK5). Disulfide bond count corrected (4 intramolecular → 3 intramolecular + 1 interchain). TAK1 attribution to Liang 2024 corrected (TAK1 not in that paper)."
---

# BMP-2 (BMP2)

BMP-2 (bone morphogenetic protein 2) is a secreted TGF-beta superfamily ligand with dual roles in aging biology: it drives physiologic osteoblast differentiation during skeletal development and repair, and — critically for cardiovascular aging — it acts as the central osteogenic inducer in pathological vascular smooth muscle cell (VSMC) transdifferentiation during [[vascular-calcification]]. The immediately downstream target of BMP-2 osteogenic signaling is [[runx2]], whose induction is both necessary and sufficient for the VSMC-to-osteoblast-like phenotypic switch. BMP-2 is also the active agent in rhBMP-2 (dibotermin alfa, Infuse Bone Graft), FDA-approved for spinal fusion and tibial fracture repair — a therapeutic context where more signaling is desired, the opposite of the aging-vascular calcification context.

## Identity

- **UniProt:** P12643 (BMP2_HUMAN)
- **NCBI Gene ID:** 650
- **HGNC:** HGNC:1069
- **Ensembl:** ENSG00000125845
- **Gene symbol:** BMP2 (synonym: BMP2A)
- **Mouse ortholog:** Bmp2 (MGI sentence-case; strong conservation)
- **Length:** 396 aa (precursor); signal peptide residues 1–23; propeptide residues 24–282; mature protein residues 283–396 (~13 kDa per chain; bioactive disulfide-linked homodimer ~26 kDa)
- **GenAge:** Not listed as a curated aging gene (BMP2 is not in GenAge Build 21) #gap/needs-canonical-id

## Structure and post-translational processing

BMP-2 is synthesized as a 396-aa precursor. The signal peptide is cleaved co-translationally; the large N-terminal prodomain (residues 24–282, ~259 aa) is excised by PCSK5 (proprotein convertase subtilisin/kexin type 5) to yield the mature C-terminal domain (residues 283–396, 114 aa). The mature domain harbors the canonical cystine-knot motif characteristic of TGF-beta superfamily members: three intramolecular disulfide bonds plus one interchain bond that locks the homodimer (per UniProt P12643). Five N-linked glycosylation sites on the precursor (Asn-135, Asn-163, Asn-164, Asn-200, Asn-338) and phosphorylation at Ser-87 have been reported, but the functional significance of most PTMs in the aging-relevant context is not established. #gap/unsourced

The mature homodimer is the secreted, receptor-competent form. Bioactivity depends critically on the dimeric structure — monomeric preparations are inactive.

## Receptor signaling

### Canonical SMAD arm

BMP-2 binds a heterotetrameric receptor complex composed of two type-I receptors (BMPR1A/ALK3 or BMPR1B/ALK6) and two type-II receptors (BMPR2). Type-II receptor constitutively active kinase phosphorylates and activates the type-I receptor; activated type-I receptor phosphorylates the receptor-regulated SMADs (R-SMADs) SMAD1, SMAD5, and SMAD9 (also called SMAD8) at their C-terminal SSXS motif (Ser-463/Ser-465 on SMAD1 and SMAD5 per UniProt). Phospho-SMAD1/5/9 heterodimerizes with the common mediator SMAD4, and the complex translocates to the nucleus where it drives transcription of osteogenic target genes including **RUNX2** (the master osteoblast transcription factor, [[runx2]]), SP7/Osterix, and ALPL (alkaline phosphatase). In the CKD vascular calcification context, the BMP2/Smad1/5/RUNX2 pathway is the primary axis described [^liang2024].

Endogenous inhibitory SMADs (SMAD6, SMAD7) provide negative feedback by competing for receptor occupancy and targeting activated receptors for degradation.

### Non-canonical TAK1/MAPK arm

BMP-2 also activates a non-canonical pathway via TGF-beta-activated kinase 1 ([[tak1]]), which feeds into the p38 MAPK cascade. In the Liang 2024 vascular calcification review, p38-MAPK phosphorylation of RUNX2 is described as a mechanism upregulating RUNX2 transcriptional activity in VSMCs [^liang2024]; however, the paper does not explicitly attribute this to the BMP2→TAK1 arm (TAK1 is not mentioned in that paper). The TAK1→p38 connection to BMP-2 signaling is described in the broader BMP signaling literature. The relative contribution of the canonical SMAD1/5/9 vs non-canonical p38-MAPK arms to VSMC osteogenic transdifferentiation remains incompletely resolved. #gap/no-mechanism #gap/needs-replication

## Bone biology and therapeutic use

In skeletal development, BMP-2 signaling is required for endochondral ossification: mesenchymal stem cell (MSC) commitment to the osteoblast lineage depends on BMP-2-driven RUNX2 induction, which in turn activates the full osteoblast differentiation program. BMP-2 homozygous knockout in mice causes embryonic lethality with severe skeletal defects; heterozygous mice show reduced trabecular bone density [^liang2024].

**rhBMP-2 / dibotermin alfa (Infuse Bone Graft, Medtronic)** is the recombinant human BMP-2 therapeutic. FDA-approved in 2002 for anterior lumbar interbody fusion (ALIF) and 2004 for acute open tibial shaft fractures. It is delivered on an absorbable collagen sponge carrier to provide a local depot. Off-label use in cervical spine surgery has been associated with serious complications (ectopic ossification, airway swelling, dysphagia, neck edema), and a 2011 Yale evidence report raised concerns about a dose-related cancer signal from post-market data — leading to a 2011 FDA Safety Communication. This safety controversy frames the aging-biology context: augmenting systemic BMP-2 signaling to combat osteoporosis or vascular calcification is not the therapeutic direction; inhibiting pathological BMP-2 signaling in VSMCs is.

## BMP-2 in vascular calcification

### Induction in VSMCs

Under normal physiological conditions, VSMC BMP-2 expression is low. Multiple stressors associated with aging and cardiometabolic disease induce VSMC BMP-2 expression via distinct upstream pathways [^liang2024]:

- **Hyperphosphatemia** — elevated extracellular phosphate (Pi, > ~1.4 mM) activates Pit-1/Pit-2 (sodium-phosphate co-transporters), triggering intracellular signaling that upregulates BMP-2 transcription.
- **Oxidative stress** — reactive oxygen species (ROS) activate NF-κB and Nrf2 pathways; NF-κB directly induces BMP-2 promoter activity.
- **Inflammatory cytokines** — TNF-alpha and IL-6 (both SASP components from [[chronic-inflammation]]) upregulate VSMC BMP-2 expression. IL-29 (type III interferon) drives vascular calcification partly via JAK2/STAT3 → BMP-2 induction [^hao2023].
- **Epigenetic mechanisms** — the histone methyltransferase G9A (EHMT2) represses BMP-2 in quiescent VSMCs; G9A loss-of-function in the context of calcified plaques is associated with BMP-2 de-repression [^yang2026]. #gap/needs-replication #gap/no-fulltext-access — Yang 2026 (*Atherosclerosis Plus*, doi:10.1016/j.athplu.2026.02.002) is not OA; not in local archive; claim cannot be verified against full text.

### Autocrine/paracrine osteogenic cascade

Once induced, VSMC-secreted BMP-2 acts in autocrine and paracrine fashion on neighboring VSMCs: BMP-2 → BMPR1A/BMPR2 → pSMAD1/5/9 → [[runx2]] induction → full osteoblast-like transcriptional program → matrix vesicle secretion → hydroxyapatite nucleation → extracellular matrix calcification [^liang2024]. Nesfatin-1, an anorexigenic neuropeptide (NUCB2-derived) elevated in calcified VSMCs and aortas, has been shown to enhance this cascade by stabilizing BMP-2 protein via inhibition of the E3 ubiquitin ligase SYTL4 (preventing BMP-2 degradation), which potentiates downstream phosphorylation of SMAD1/5/9 and HDAC4, driving RUNX2 activation and MSX2 upregulation [^zhu2024]. #gap/needs-human-replication

### Matrix Gla protein as the primary endogenous BMP-2 antagonist

[[matrix-gla-protein]] (MGP, UCMA) is a vitamin K-dependent protein that serves as the most potent known endogenous inhibitor of vascular calcification. One of its two established anti-calcification mechanisms is **direct BMP-2 sequestration**: carboxylated MGP physically binds BMP-2, preventing it from engaging its receptors. This is mechanistically distinct from MGP's second function (inhibition of hydroxyapatite crystal nucleation). Vitamin K deficiency, prevalent in aging and CKD, reduces MGP carboxylation efficiency, releasing BMP-2 from inhibition — a mechanistic link between micronutrient status and calcification progression. #gap/unsourced — the direct MGP–BMP-2 sequestration mechanism requires a primary source citation (Liang 2024 mentions MGP in passing but does not detail this mechanism).

Experimental BMP-2 antagonists investigated in preclinical models include:
- **Noggin** — a secreted BMP antagonist that sequesters BMP-2/4/7 extracellularly; reduces VSMC calcification in cell culture and rodent models. No human data.
- **Chordin** — similarly sequesters BMP-2; less studied in vascular context. #gap/needs-human-replication

### ENPP1 and pyrophosphate

ENPP1 (ectonucleotide pyrophosphatase/phosphodiesterase 1) produces inorganic pyrophosphate (PPi), a potent inhibitor of hydroxyapatite formation. In a rat VSMC model using AAV9-mediated ENPP1 overexpression, ENPP1 upregulation significantly reduced calcium and phosphorus content in the aorta, increased PPi levels, and substantially decreased expression of BMP-2, PINP, osteocalcin, and BALP markers of osteoblast-like transformation (p < 0.05) [^wu2023]. The mechanism by which elevated ENPP1/PPi suppresses BMP-2 expression (beyond reduced hydroxyapatite nucleation) has not been established. #gap/no-mechanism

## Aging context: paradox of bone vs vessel

A central paradox in aging biology is that vascular BMP-2 expression increases with age — precisely when bone-forming osteoblast RUNX2 activity declines (contributing to osteoporosis). This "calcification-osteoporosis paradox" means that BMP-2 signaling in aging is compartment-specific: pathologically elevated in VSMCs, functionally insufficient in osteoblast precursors. The compartment-specificity arises partly from local inhibitor availability (MGP is most active in the vascular wall), from the distinct cellular contexts (VSMC vs osteoblast precursor differentiation states), and from systemic hormone changes ([[fgf23]] / PTH axis). The net therapeutic implication is that systemic BMP-2 augmentation (as with rhBMP-2) is contraindicated in aging, as it would worsen vascular calcification even while helping bone. #gap/unsourced — direct evidence for the age-related increase in VSMC BMP-2 expression from human tissue data is limited.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — BMP-SMAD signaling is highly conserved; VSMC osteogenic transdifferentiation documented in human arteries |
| Phenotype conserved in humans? | yes — vascular calcification in humans is well-established; BMP-2 immunohistochemistry in calcified human lesions documented |
| Replicated in humans? | partial — mechanistic evidence is largely from cell culture and rodent models; BMP-2 elevation in calcified human plaques/media is shown in cross-sectional IHC studies, not intervention trials |

## Druggability in aging context — tier 3

**Tier 3 rationale (predicted druggable; no aging-validated probe or drug).** BMP-2 is the active agent in rhBMP-2 (FDA-approved) — but for orthopedic indications where *more* BMP-2 signaling is desired. For the aging-calcification context, the therapeutic direction is *inhibition* of VSMC BMP-2 signaling. No BMP-2 inhibitor is FDA-approved or in late-stage clinical trials for vascular calcification. Endogenous inhibitors (MGP, noggin) provide validated mechanistic proof-of-concept. Open Targets Platform does not list BMP2 with an aging-indicated approved drug; tier would be 2 if a well-characterized imaging probe existed for VSMC BMP-2 activity, but this is not established. Tier 3 is assigned conservatively. #gap/needs-canonical-id — Open Targets druggability score for BMP2 not independently verified.

## Cross-references

- [[bmp-signaling]] — canonical receptor-SMAD pathway page; BMP-2 is a key ligand node
- [[tgf-beta]] — superfamily context
- [[runx2]] — direct downstream osteogenic transcription factor (sibling-seeded)
- [[vascular-calcification]] — process page where BMP-2 is listed as a key driver protein
- [[matrix-gla-protein]] — direct endogenous BMP-2 antagonist (sibling-seeded; stub)
- [[osteopontin]] — downstream osteogenic matrix protein induced via RUNX2 (sibling-seeded; stub)
- [[fgf23]] — co-regulator of the bone-mineralization axis; divergent aging trajectories
- [[chronic-inflammation]] — upstream inducer of VSMC BMP-2 expression via TNF-alpha/IL-6/NF-κB
- [[tak1]] — non-canonical BMP-2 signaling arm
- [[klotho]] — systemic BMP signaling modulator in CKD/aging context

## Limitations and gaps

- #gap/needs-human-replication — Most mechanistic data on VSMC BMP-2 induction and autocrine calcification cascade is from in-vitro VSMC culture and rodent models. Prospective human intervention data targeting the BMP-2 arm specifically is absent.
- #gap/needs-replication — The G9A-BMP2 epigenetic axis in plaque calcification is from a single 2026 study; requires independent replication.
- #gap/no-mechanism — Relative contribution of canonical SMAD1/5/9 vs non-canonical p38-MAPK arms to VSMC osteogenic transdifferentiation is not established in human tissue.
- #gap/dose-response-unclear — The threshold VSMC BMP-2 concentration required for irreversible osteogenic commitment is not defined.
- #gap/unsourced — Direct age-stratified BMP-2 expression data from human arterial tissue comparing young vs old vessels requires a dedicated citation.
- #gap/needs-canonical-id — BMP2 is not in GenAge Build 21; Open Targets druggability tier not independently confirmed via live API.

## Footnotes

[^liang2024]: doi:10.7717/peerj.18063 · Liang X et al. · *PeerJ* 2024 · review · model: human/rodent CKD vascular calcification · local PDF:  (local PDF)

[^hao2023]: doi:10.1161/JAHA.122.027222 · Hao N et al. · *J Am Heart Assoc* 2023 · in-vitro + in-vivo (mouse) · model: IL-29 → JAK2/STAT3 → BMP2 axis in VSMC calcification; human calcified carotid IHC (n=6 CAD, 4 CKD, 6 control); rat aortic ring ex vivo; C57BL/6 mice (n=10, vitamin D3 400,000 IU/kg × 14d) · local PDF: via a local paper archive PMC9973608

[^zhu2024]: doi:10.1186/s12964-024-01873-7 · Zhu XX et al. · *Cell Commun Signal* 2024 · in-vitro + in-vivo · model: Nesfatin-1 stabilizes BMP-2 via SYTL4 E3-ligase inhibition → pSMAD1/5/9 + HDAC4 → RUNX2/MSX2; VD3-calcification model in C57BL/6J mice (16 wk, 6 wk treatment); n=102 human CAD coronary calcium CT cohort · local PDF: via a local paper archive PMC11468037

[^yang2026]: doi:10.1016/j.athplu.2026.02.002 · Yang W, Ma, Cui, Jia · *Atherosclerosis Plus* 2026 · in-vitro · model: G9A-BMP2 in calcification-induced unstable plaque · archive: not in local index; closed-access (CC BY-NC-ND, Elsevier tdm-only) · #gap/needs-replication #gap/no-fulltext-access

[^wu2023]: doi:10.1515/med-2023-0861 · Wu X (Xiujuan Wu) et al. · *Open Medicine* 2023 · in-vitro + in-vivo (rat) · model: AAV9-ENPP1 overexpression in rat VSMCs and aorta; β-glycerophosphoric acid calcification model · n=12/group (animal arm) · p<0.05 for calcium/phosphorus content and BMP-2 expression outcomes
