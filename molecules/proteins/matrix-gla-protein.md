---
type: protein
aliases: [MGP, MGLAP, matrix GLA protein, GIG36, NTI]
uniprot: P08493
ncbi-gene: 4256
hgnc: 7060
ensembl: ENSG00000111341
genage-id: null
pathways: ["[[vascular-calcification]]", "[[vitamin-k-cycle]]"]
hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
sens-categories: []
mouse-ortholog: Mgp
druggability-tier: 3
gtex-aging-correlation: "Highest expression in artery (tibial, aorta, coronary) and liver; arterial wall expression declines with reduced vit K status; GTEx aging-correlation not quantified from v2 API (field populated from literature summary) #gap/needs-gtex-aging-correlation"
mr-causal-evidence: partial
caused-by: ["[[vitamin-k-cycle]]"]
causes: ["[[vascular-calcification]]"]
literature-checked-through: 2026-05-23
verified: true
verified-date: 2026-05-23
verified-by: claude
verified-scope: "Luo 1997 (10.1038/386078a0) verified against local PDF: phenotype description corrected and expanded (arterial territory, cartilage sites, fractures; n not specified per group). de Vries 2025 (10.3390/nu17050815) verified against local PDF: population corrected to 78 pre/peri + 87 post-menopausal (not post-menopausal only); post-hoc analysis framing added; dose corrected to 180 µg/day; primary efficacy metric corrected to Young's modulus; BP result correctly attributed to post-menopausal high-SI subgroup only (n=26); industry-funding COI added. Naiyarakseree 2023 (10.3390/nu15112422) verified against local PDF: cfPWV numbers confirmed and expanded; diabetic-subgroup n added; pre-specified subgroup confirmed. Berlot 2025 not verified (archive pending). Beulens 2009 not verified (not_oa). Cranenburg 2008 not verified (not_oa). Schurgers 2013 not verified (pending). Canonical IDs (UniProt P08493, HGNC 7060, NCBI Gene 4256) confirmed against live APIs."
---


# Matrix Gla Protein (MGP)

MGP is the primary local anti-calcification factor in the arterial wall and cartilage. It is a small (103 aa, ~12 kDa) secreted protein whose anti-calcification activity depends entirely on two vitamin K-dependent post-translational modifications: gamma-carboxylation of five glutamate residues and phosphorylation of three serine residues. Uncarboxylated MGP (ucMGP) is biologically inert; the circulating dephosphorylated-uncarboxylated form (dp-ucMGP) is an inverse biomarker of vitamin K status and an independent predictor of cardiovascular risk. Loss-of-function in mice or humans causes fatal arterial calcification, making MGP the mechanistic linchpin between vitamin K sufficiency and [[vascular-calcification]] suppression.

## Identity

| Field | Value |
|---|---|
| UniProt | P08493 (MGP_HUMAN) |
| NCBI Gene | 4256 |
| HGNC | 7060 |
| Ensembl | ENSG00000111341 |
| Gene symbol | MGP (synonyms: MGLAP, GIG36, NTI) |
| Mouse ortholog | Mgp |
| Length | 103 aa (precursor); ~84 aa mature after signal-peptide cleavage (aa 1–19) |
| Molecular weight | ~12.4 kDa (precursor); functional form is further processed |

## Structure and post-translational modification

The mature protein has two required modifications applied in the secretory pathway:

1. **Gamma-carboxylation** — vitamin K-dependent gamma-glutamyl carboxylase ([[ggcx]]) converts five glutamate residues (Glu-21, Glu-56, Glu-60, Glu-67, Glu-71 in the precursor numbering) to gamma-carboxyglutamate (Gla). Each Gla residue gains a second carboxyl group, enabling bidentate calcium coordination that underlies crystal binding [^luo1997].
2. **Serine phosphorylation** — three serine residues (Ser-22, Ser-25, Ser-28) are phosphorylated by a Golgi-resident kinase; phosphorylation promotes secretion and extracellular matrix retention.
3. **Disulfide bond** — Cys-73–Cys-79; required for proper folding.

A C-terminal propeptide is removed after secretion. The vitamin K epoxide reductase complex ([[vkor]]) regenerates reduced vitamin K after GGCX uses it; warfarin inhibits VKOR, blocking both hepatic clotting-factor carboxylation and extrahepatic MGP carboxylation.

**Circulating forms assayed clinically:**

| Form | Carboxylation | Phosphorylation | Status |
|---|---|---|---|
| cMGP (fully carboxylated, phosphorylated) | yes | yes | Active; tissue-retained; rarely circulates |
| ucMGP | no | yes/no | Inactive; elevated in vit K insufficiency |
| dp-ucMGP | no | no | Primary clinical biomarker; inversely tracks vit K status |
| dp-cMGP | yes | no | Used as reference in some assays |

## Tissue expression

Highest constitutive expression in vascular smooth muscle cells (VSMCs) of artery wall, chondrocytes, and kidney proximal tubule cells. Lower levels in liver, lung, and skin. The vascular compartment is the clinically critical site: VSMCs secrete MGP constitutively as a paracrine defense against mineralization of the extracellular matrix [^cranenburg2008]. Hepatic vitamin K utilization (clotting factors) competes with peripheral tissues for available reduced vitamin K — a partitioning that explains why MK-7 (long half-life, peripheral tissue bioavailability) outperforms vitamin K1 (phylloquinone, hepatic-preferential) for MGP carboxylation.

## Anti-calcification mechanism

1. **Crystal nucleation blockade** — fully carboxylated MGP (cMGP) binds nascent calcium-phosphate (hydroxyapatite) crystals via Gla-mediated calcium chelation, arresting crystal growth in the extracellular matrix.
2. **BMP-2 sequestration** — cMGP binds bone morphogenetic protein 2 (BMP-2), preventing it from driving osteogenic transdifferentiation of VSMCs. This is mechanistically distinct from crystal binding; both are Gla-dependent. #gap/unsourced — direct MGP–BMP-2 physical binding mechanism lacks a dedicated primary citation on this page; canonical sources are Bostrom 2001 and Zebboudj 2002 (cell-culture demonstration that MGP binds BMP-2 and inhibits its osteogenic signaling); flagged here per BMP-2 verifier 2026-05-23 propagation; should add primary footnote on next verification pass.
3. **Failure mode** — when vitamin K is insufficient, ucMGP accumulates. ucMGP cannot coordinate calcium or bind BMP-2; osteogenic signaling proceeds and calcium-phosphate nucleates. Warfarin-treated patients show accelerated arterial calcification via this pathway [^schurgers2013].

## Loss-of-function phenotypes

**Mouse (Mgp-/-):** Die within two months from massive arterial calcification affecting all elastic and muscular arteries (aorta and its branches, carotid, coronary, axillary, intercostal, coeliac, renal, iliac — but not arterioles, capillaries, or veins) and growth-plate/tracheal/manubrium cartilage calcification. Calcification of growth-plate cartilage leads to disorganised chondrocyte columns, short stature, osteopenia, and fractures. Phenotype is the most severe spontaneous arterial calcification observed in a vertebrate model [^luo1997].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | GGCX, VKOR, Gla-domain structure fully conserved |
| Phenotype conserved in humans? | yes | Keutel syndrome mirrors Mgp-/- calcification |
| Replicated in humans? | yes (rare disease) | Keutel syndrome (OMIM 245150): autosomal recessive MGP LOF; peripheral arterial calcification, cartilage calcification, hearing loss |

**Human (Keutel syndrome):** Biallelic MGP loss-of-function mutations cause peripheral arterial calcification, abnormal cartilage ossification, midfacial hypoplasia, and sensorineural hearing loss. Consistent with the mouse model; confirms MGP is non-redundant in humans.

## Vitamin K axis — the actionable pharmacology

MGP is not itself a drug target in the conventional sense. The intervention is upstream: ensuring the vitamin K substrate pool is sufficient for GGCX to carboxylate MGP.

| Form | Half-life | Hepatic uptake | Peripheral (arterial) delivery | Source |
|---|---|---|---|---|
| Vitamin K1 (phylloquinone) | ~1 hour | Preferential | Limited | Leafy greens |
| MK-4 (menaquinone-4) | ~1–2 hours | Moderate | Moderate | Animal products, some fortification |
| MK-7 (menaquinone-7) | ~3 days | Lower | Higher | Natto (fermented soybeans), supplements |

MK-7's extended half-life enables sustained tissue carboxylation, including arterial VSMC MGP. This pharmacokinetic difference underlies the MK-7 positioning on [[vascular-calcification]] pages.

**Warfarin antagonism.** VKOR inhibition by warfarin suppresses GGCX activity in all tissues. Clinical studies show warfarin users accumulate dp-ucMGP ~2-fold faster and have measurably higher coronary calcification scores than matched non-users — consistent with the mechanistic model [^schurgers2013].

**Druggability tier 3 rationale.** MGP itself has no clinical drug. The therapeutic approach is vitamin K supplementation or warfarin avoidance — an upstream substrate intervention, not direct MGP targeting. Tier 3 (predicted druggable) is assigned because small-molecule GGCX activators or VKOR substrate analogues could in principle be developed; none is in clinical use for aging/calcification. See [[vascular-calcification]] for the full intervention landscape.

## Aging relevance

1. **dp-ucMGP rises with age** — vit K intake and tissue status decline with aging; circulating dp-ucMGP increases in older adults, indicating a growing functional MGP deficit in vascular tissue. #gap/needs-longitudinal-aging-trajectory — no large longitudinal age-stratified dp-ucMGP study identified.

2. **dp-ucMGP and cardiovascular outcomes** — in a prospective cohort of 2,663 MESA participants, elevated dp-ucMGP (≥520 pmol/L) in adults aged 45–53 was associated with HR 3.05 for all CVD events and HR 2.73 for all-cause mortality vs lower dp-ucMGP [^berlot2025]. Notably, the association was not significant in older (>65) adults — possibly reflecting survivor bias or different calcification biology by age. #gap/contradictory-evidence between age strata; requires mechanistic clarification.

3. **MK-7 reduces dp-ucMGP** — in a post-hoc analysis of a 12-month RCT (NCT02404519) of 165 women with low vitamin K status (78 pre/peri-menopausal + 87 post-menopausal; MK-7 180 µg/day n=82 vs placebo n=83), MK-7 significantly attenuated vascular stiffness progression in the post-menopausal subgroup (Young's modulus: +9.4% ± 67.1 MK-7 vs +49.1% ± 77.4 placebo, adjusted p=0.035), with concurrent dp-ucMGP reduction in both menopausal groups (pre/peri p=0.009; post p<0.001). No significant overall effect on carotid-femoral PWV was observed. Post-menopausal women with a high baseline stiffness index (SI >9.83, n=26 MK-7) additionally showed a −3.0% ± 9.0 reduction in brachial blood pressure (p=0.007) — a post-hoc subgroup result [^devries2025].

4. **MK-7 in end-stage renal disease** — in a 24-week multicenter RCT of 96 hemodialysis patients (50 MK-7 375 µg/day vs 46 standard care), no significant difference in cfPWV overall (MK-7 −6.0% [−19.6, 2.3] vs control −6.7% [−18.8, 7.8], p=0.24 ITT), but significant improvement in the pre-specified diabetic subgroup (MK-7 −10.0% [−15.9, −0.8] vs control +3.8% [−5.8, 11.6], p=0.008; n=16 MK-7 / n=14 control) [^naiyarakseree2023]. CKD/ESRD is an extreme vitamin K-depletion context; generalizability to non-CKD adults is uncertain.

5. **Dietary menaquinone and coronary calcification** — in the PROSPECT cohort, high menaquinone (but not phylloquinone) intake was associated with reduced coronary artery calcification scores [^beulens2009]. Consistent with MK-7 tissue-delivery pharmacology.

## Relation to FGF23 and Klotho

MGP operates as a local inhibitor of arterial wall calcification; it does not regulate systemic phosphate homeostasis. The [[fgf23]]/[[klotho]] axis is a distinct anti-calcification system operating via phosphaturia and FGF23-mediated signaling. Both fail in CKD, synergistically driving vascular calcification. The mechanistic relationship is additive rather than directly coupled:

- FGF23↑ + Klotho↓ → hyperphosphatemia → calcium-phosphate precipitation in vasculature
- VitK↓ → ucMGP↑ → failure to inhibit crystal nucleation and BMP-2

These two axes constitute the two major pharmacological targets in the MK-7 / klotho-replacement literature.

## Pathway membership

- [[vascular-calcification]] — MGP is the canonical process-level inhibitor; loss-of-function drives the phenotype
- [[vitamin-k-cycle]] — MGP is the primary extrahepatic substrate of GGCX (see [[ggcx]], [[vkorc1|VKOR]])

## Key interactors

- [[ggcx]] (gamma-glutamyl carboxylase) — carboxylates MGP; requires vitamin K hydroquinone as cofactor
- [[vkorc1|VKOR]] (vitamin K epoxide reductase) — regenerates reduced vitamin K; target of warfarin
- BMP-2 ([[bmp-2]]) — bound and neutralized by cMGP, preventing osteogenic VSMC transdifferentiation
- [[klotho]] — parallel anti-calcification system; both are suppressed in CKD

## Related pages

- [[vascular-calcification]] — process page; MGP is the mechanistic anchor
- [[fgf23]] — co-regulator of vascular calcification risk via phosphate homeostasis
- [[klotho]] — parallel anti-calcification factor; FGF23 co-receptor; expression declines with age
- [[chronic-inflammation]] — VSMC phenotypic switching and calcification are inflammation-coupled
- [[arterial-stiffening]] — downstream phenotype of calcification
- [[atherosclerosis]] — partially overlapping phenotype; plaque calcification involves MGP insufficiency
- [[heart]], [[myocardium]] — target tissues for valvular and coronary calcification
- [[vitamin-d]] — calcitriol upregulates MGP/osteocalcin transcription (the substrate K2 then carboxylates)
- [[hypotheses/d3-k2-calcium-partitioning]] — combined D3+K2 calcium-partitioning hypothesis where MGP carboxylation is the central node
- [[vitamin-k]] — substrate page

## Limitations and gaps

- #gap/needs-gtex-aging-correlation — GTEx v2 API age-stratified expression for MGP not retrieved; field populated from literature summary only.
- #gap/needs-longitudinal-aging-trajectory — no large longitudinal dataset charting dp-ucMGP across the full adult age range was identified.
- #gap/contradictory-evidence — MESA cohort shows dp-ucMGP → CVD risk in midlife (45–53) but not in older adults; mechanism unclear (survivor bias? age-modulated biology?).
- #gap/needs-human-replication — RCT evidence for MK-7 reducing hard CV outcomes (MI, CV death) in non-CKD adults does not yet exist; available evidence is biomarker-level (dp-ucMGP reduction) or arterial stiffness surrogate.
- All key-interactor cross-reference pages now seeded (BMP-2, vitamin-k, GGCX, VKORC1).
- `genage-id: null` — HGNC query ("Entry not found") indicates MGP is not currently in GenAge human aging gene database; this is structurally reasonable given MGP is not a longevity gene per se but an anti-calcification effector.

## Footnotes

[^luo1997]: doi:10.1038/386078a0 · Luo G et al. · *Nature* 1997;386:78–81 · n=not specified per group (homozygous KO mice + WT/het littermates) · in-vivo (mouse, Mgp-/- C57BL/6J × 129 F1 background, male chimaeras mated to C57BL/6J females) · fatal arterial calcification within two months; all elastic and muscular arteries affected (but not arterioles, capillaries, veins); growth-plate, tracheal, manubrium cartilage calcification causing short stature, osteopenia, fractures; mineral identified as apatite by electron diffraction; no atherosclerotic plaques or fatty streaks in affected arteries · model: Mgp-/- knockout mouse · local PDF available

[^cranenburg2008]: doi:10.1159/000124863 · Cranenburg ECM et al. · *J Vasc Res* 2008;45(5):427–436 · observational (human cohorts: hemodialysis, aortic stenosis, healthy controls) · ucMGP significantly lower in calcification-prone patients vs healthy controls · ELISA assay development paper · not OA locally

[^schurgers2013]: doi:10.1038/ki.2013.26 · Schurgers LJ · *Kidney Int* 2013 · narrative review · warfarin antagonism of MGP carboxylation mechanism; MK-7 vs K1 tissue distribution · CKD focus but mechanism generalizes

[^berlot2025]: doi:10.1161/JAHA.124.036459 · Berlot AA et al. · *J Am Heart Assoc* 2025 · n=2,663 (MESA prospective cohort) · observational · elevated dp-ucMGP HR 3.05 (all CVD), HR 2.73 (all-cause mortality) in ages 45–53; no significant association ages >65 · archive: pending download

[^devries2025]: doi:10.3390/nu17050815 · de Vries F et al. (Schurgers LJ last author) · *Nutrients* 2025 · n=165 women total (78 pre/peri-menopausal + 87 post-menopausal; 82 MK-7 180 µg/day / 83 placebo) · post-hoc analysis of 12-month double-blind RCT (NCT02404519; parent trial: 243 men+women) · Young's modulus MK-7 +9.4% vs placebo +49.1%, p=0.035 in post-menopausal subgroup; dp-ucMGP significantly reduced in both menopausal groups; −3.0% brachial BP p=0.007 in post-menopausal HIGH-SI subgroup only (n=26 MK-7) · COI: Bittner, Gåserød, Jeanne, Machuron are employees of Gnosis by Lesaffre / Lesaffre International (study funder); de Vries, Schurgers received research funding from funder · local PDF available

[^naiyarakseree2023]: doi:10.3390/nu15112422 · Naiyarakseree N et al. · *Nutrients* 2023 · n=96 randomized (50 MK-7 375 µg/day, 46 standard care; 4 Bangkok HD centers; open-label multicenter RCT) · primary outcome cfPWV % change at 24 wk: MK-7 −6.0% (−19.6, 2.3) vs control −6.7% (−18.8, 7.8), p=0.24 · pre-specified diabetic subgroup: MK-7 −10.0% (−15.9, −0.8) vs control +3.8% (−5.8, 11.6), p=0.008 (n=16/14) · CKD-specific context · local PDF available

[^beulens2009]: doi:10.1016/j.atherosclerosis.2008.07.010 · Beulens JWJ et al. · *Atherosclerosis* 2009 · n=564 (PROSPECT cohort, postmenopausal women) · observational (dietary assessment + CT coronary calcification scores) · high menaquinone intake associated with reduced coronary calcification; phylloquinone not significant · not OA locally
