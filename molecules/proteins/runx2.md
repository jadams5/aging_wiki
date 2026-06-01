---
type: protein
aliases: [CBFA1, AML3, OSF2, PEBP2A, Runt-related transcription factor 2]
uniprot: Q13950
ncbi-gene: 860
hgnc: 10472
ensembl: ENSG00000124813
genage-id: null
pathways: ["[[bmp-signaling]]", "[[wnt-signaling]]"]
hallmarks: ["[[chronic-inflammation]]", "[[deregulated-nutrient-sensing]]"]
sens-categories: []
mouse-ortholog: Runx2
druggability-tier: 4
mr-causal-evidence: not-tested
gtex-aging-correlation: null
caused-by: ["[[bmp-2]]", "[[hyperphosphatemia]]"]
causes: ["[[vascular-calcification]]"]
literature-checked-through: 2026-05-23
verified: true
verified-date: 2026-05-23
verified-by: claude
verified-scope: "Komori 1997 and Otto 1997 Cell papers verified end-to-end against local PDFs; Katano 2026 and Voicu 2026 verified against local PDFs (downloaded 2026-05-23); Al Akhdar 2026 DOI resolved via PubMed (PMID 41827899); Lu 2026 and Kim 2026 confirmed via PubMed abstract (DOIs cross-checked). PST-region residues corrected against UniProt Q13950 live annotation. Mouse strain descriptors in footnotes corrected against primary sources. Canonical-DB identity fields (UniProt Q13950 length/domains) spot-checked live. VSMC wikilink corrected to [[vsmc]]."
---


# RUNX2 (CBFA1)

RUNX2 (Runt-related transcription factor 2; also CBFA1/AML3) is the master osteogenic transcription factor — required for osteoblast differentiation from [[mesenchymal-stem-cells]] and for bone formation by both intramembranous and endochondral ossification. In aging biology, RUNX2 occupies a paradoxical position: its activity in bone declines with age, contributing to osteoporosis, while its ectopic induction in [[vsmc|vascular smooth muscle cells]] drives the osteogenic phenotype switch underlying [[vascular-calcification]]. This "calcification paradox" — age-related loss of bone mineralization concurrent with arterial mineralization gain — places RUNX2 at the centre of two distinct aging phenotypes. #gap/needs-human-replication (MR evidence absent; see `mr-causal-evidence` field).

## Identity

- **UniProt:** Q13950 (RUNX2_HUMAN) — manually reviewed (Swiss-Prot)
- **NCBI Gene:** 860
- **HGNC:** 10472
- **Ensembl:** ENSG00000124813
- **MIM:** 600211 (gene); 119600 (cleidocranial dysplasia phenotype)
- **Gene symbol synonyms:** CBFA1, AML3, OSF2, PEBP2A, PEBP2αA, OSF-2
- **Mouse ortholog:** Runx2 (one-to-one; high sequence conservation in Runt domain)
- **Length:** 521 amino acids (canonical isoform; see Isoforms below)
- **Chromosome:** 6p21.1

## Domain architecture

RUNX2 has a modular structure encoding DNA binding, nuclear targeting, and transcriptional regulatory functions:

| Domain | Residues (approx.) | Function |
|---|---|---|
| **RUNT domain** | ~101–229 | Sequence-specific DNA binding to OSE2 motif (consensus TGTGGTT); heterodimerises with CBFB (Core-Binding Factor Beta) to increase affinity |
| **N-terminal disordered** | ~18–59 | Regulatory; isoform-divergent region (P1 vs P2 promoter — see below) |
| **NLS (nuclear localisation)** | embedded in Runt | Constitutive nuclear targeting |
| **PST region** (proline-serine-threonine) | ~336–521 | Transcriptional activation; encompasses the entire C-terminal region; MAPK phosphorylation targets S301/S319 activate; PP1/PP2A dephosphorylation represses; KAT6A interaction site at 336–439; VWRPY motif and co-repressor interaction at C-terminus |
| **VWRPY motif** | C-terminal (within PST region) | Groucho/TLE repressor recruitment |

Post-translational regulation is extensive: MAPK (ERK/p38) phosphorylation at S301 and S319 increases transcriptional activity; CDK4 phosphorylation at S472 links cell-cycle status to RUNX2 activity; SMAD1/5/8 (BMP canonical pathway) physically interact with RUNX2 and potentiate target-gene activation.

## Isoforms

Two major isoforms arise from alternative promoters:

- **Type II / P1-driven** — longer N-terminus containing the MASNS sequence (bone-predominant; canonical for osteoblast programs)
- **Type I / P2-driven** — alternative shorter N-terminus (broader expression; includes VSMC, dental, hypertrophic chondrocytes)

The P2/Type I isoform is the one induced in VSMCs during osteogenic transdifferentiation — its broader promoter regulatory landscape includes BMP-responsive elements and inflammatory response elements absent in the bone-specific P1 promoter.

## Tissue expression

- **High / constitutive:** osteoblasts, hypertrophic chondrocytes, dental follicle cells, osteocyte precursors
- **Low / inducible:** VSMCs (induced by BMP-2, hyperphosphatemia, oxidative stress, inflammation, AGEs)
- **Absent or trace:** most soft tissues under homeostatic conditions

RUNX2 expression in VSMCs is normally suppressed by the smooth-muscle master TF SRF/MYOCD axis. Loss of contractile identity (phenotype switching) removes this repression and permits BMP-2 and Pi-mediated induction.

## Function — osteogenic master TF

RUNX2 is the earliest committed osteoblast transcription factor, activated before any other osteoblast-specific gene. It directly transactivates a core set of osteoblast targets via the OSE2 (Osteoblast-Specific Element 2) response element:

- **Osteocalcin (BGLAP)** — bone-matrix γ-carboxylated protein; the most RUNX2-exclusive target; widely used as a RUNX2-activity readout
- **Osteopontin (SPP1)** — RGD-containing ECM glycoprotein; bridges osteoblasts and hydroxyapatite; also expressed in VSMC osteogenic switch → see [[osteopontin]]
- **Bone sialoprotein (IBSP)** — nucleates hydroxyapatite crystal formation
- **Collagen 1A1 (COL1A1)** — structural matrix scaffold
- **Alkaline phosphatase (ALPL)** — hydrolyses inorganic pyrophosphate (PPi), an inhibitor of mineralisation; RUNX2-driven ALPL induction in VSMCs is a key permissive step in calcification

RUNX2 also cross-regulates competing lineage programs at the mesenchymal decision node:

- **SOX9** (chondrogenesis) — mutually antagonistic; SOX9 inhibits RUNX2 and vice versa; the balance determines chondrocyte vs osteoblast fate
- **PPARγ** (adipogenesis) — mutual antagonism; RUNX2 loss biases MSCs toward adipogenesis (observed in aged bone marrow)
- **MYOCD/SRF** (smooth-muscle contractile) — contractile-fate TFs suppress RUNX2; loss of MYOCD during VSMC phenotype switching removes this antagonism

Evidence for RUNX2 as indispensable osteogenic master TF:

- **Homozygous Runx2-null mice** completely lack ossified bone; osteoblasts arrest at immature precursor stage; animals die at birth from respiratory failure due to cartilaginous but not bony rib cage [^komori1997].
- An independently generated Cbfa1-null line reproduced the same phenotype and confirmed heterozygosity recapitulates cleidocranial dysplasia [^otto1997].
- **Human heterozygous RUNX2 loss-of-function** = Cleidocranial Dysplasia (CCD; OMIM 119600) — delayed fontanelle closure, supernumerary teeth, clavicle hypoplasia. Confirms dose-sensitivity in humans.

## Role in vascular calcification

In homeostatic VSMCs, RUNX2 is essentially absent. During pathological osteogenic transdifferentiation, multiple stimuli converge to induce it:

1. **Inorganic phosphate (Pi) — the dominant trigger in CKD/uremia.** Pi enters VSMCs via the sodium-phosphate cotransporters PiT-1 (SLC20A1) and PiT-2 (SLC20A2). Intracellular Pi signals — through incompletely-defined intermediates — to upregulate RUNX2 transcription and activate RUNX2 protein via MAPK phosphorylation.
2. **BMP-2 / BMP-4** — BMPs activate SMAD1/5/8, which bind and co-activate RUNX2 at osteoblast target promoters. Vascular BMP-2 release is augmented by oxidised lipids, inflammation, and mechanical stress. See [[bmp-2]].
3. **Inflammatory cytokines** — TNF-α, IL-6, IL-1β activate NF-κB, which has been shown to transactivate RUNX2 in VSMC contexts; links [[chronic-inflammation]] hallmark to the osteogenic switch.
4. **Advanced glycation end-products (AGEs)** — receptor RAGE → NF-κB → RUNX2 induction; relevant in diabetic vascular calcification.
5. **Oxidised lipids (oxLDL, 7-ketocholesterol)** — activate RUNX2 via ER-stress and ROS-mediated pathways.

Once induced, RUNX2 drives the same downstream program as in osteoblasts — ALPL, SPP1, BGLAP, IBSP — but in an arterial context, producing hydroxyapatite deposition in the medial layer (medial arterial calcification, MAC) or within atherosclerotic plaques (intimal calcification). ALPL-driven Pi disposal from PPi removes the key mineralisation brake.

Evidence for RUNX2's causal role in VSMC calcification:

- VSMC-specific Runx2 knockdown or knockout blunts calcification in high-phosphate and uremic-diet mouse models; the osteogenic program is aborted.
- Recent dynamic gene-expression profiling of carotid plaque stages showed that RUNX2 and SPP1 are among the highest-induced genes in early-to-mid calcification stages, with expression declining once calcification is fully established — suggesting RUNX2 drives initiation rather than propagation [^katano2026].
- TMAO-driven endothelial-to-mesenchymal transition promotes VSMC osteogenic differentiation through RUNX2 induction, linking gut microbiome → systemic TMAO → RUNX2 → [[vascular-calcification]] [^alakhdar2026]. #gap/needs-replication (single study; n not large)
- Salidroside (a natural phenylethanol glycoside) attenuates VSMC osteoblastic differentiation and arterial calcification via AMPK/AKT → RUNX2 suppression, establishing RUNX2 as a tractable effector target [^lu2026].

Cross-link: [[vascular-calcification]] — the process page documents the full VSMC phenotype-switch mechanism with RUNX2 as the central TF.

## The calcification paradox in aging

With age, two opposing RUNX2-related trends coexist:

| Compartment | Direction | Consequence |
|---|---|---|
| Osteoblast RUNX2 activity | Decreases | Reduced bone formation → osteoporosis / bone loss |
| VSMC RUNX2 expression | Increases | Ectopic mineralisation → vascular calcification |

Contributing factors to the divergence:

- **Bone:** Age-associated decline in BMP signalling tone within the marrow niche, increased adipogenic pressure (PPARγ competition), accumulation of senescent osteoprogenitors producing SASP-driven RUNX2 suppression. ZNF462, a novel chromatin-remodelling co-activator, physically associates with RUNX2 and its expression falls with age in bone — providing a potential molecular explanation for declining RUNX2-driven bone formation [^kim2026].
- **Vasculature:** Lifetime accumulation of Pi, AGEs, oxidised lipids, and inflammatory signals progressively erodes MYOCD-mediated RUNX2 repression in VSMCs; the balance tips toward osteogenic induction in the seventh and eighth decades.

This paradox is clinically important: interventions to boost osteoblast RUNX2 for osteoporosis must not inadvertently promote VSMC osteogenic switching, and vice versa. Tissue-targeted delivery is therefore an active research priority.

## Pharmacological context and druggability

RUNX2 is a transcription factor without a well-defined small-molecule binding pocket accessible by conventional drug design — historically classified as "undruggable" in the conventional sense.

**Aging-context tier-4 rationale:** No clinical drug exists that directly targets RUNX2 for any indication, and no high-quality chemical probe exists specifically for aging contexts. Indirect modulation is achieved via upstream BMP inhibitors (anti-BMP-2 antibody; being tested in heterotopic ossification contexts), phosphate binders (CKD setting), and SMAD inhibitors (pre-clinical). shRNA silencing of RUNX2 (via dual-targeting lipid-polymer nanocarriers co-delivering shRunx2 and shSmad3) has been demonstrated in aortic valve calcification murine models [^voicu2026], but this remains preclinical. Note: the Voicu 2026 study targets both RUNX2 and SMAD3 simultaneously; RUNX2-only silencing efficacy is not independently quantified in that model. Open Targets lists RUNX2 without an approved drug bucket. Tier 4 reflects the transcription-factor druggability ceiling; upgrade to tier 3 if an allosteric Runt-domain small molecule reaches clinical-probe stage.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (osteogenic program highly conserved) |
| Phenotype conserved in humans? | yes (CCD from haploinsufficiency; vascular calcification in CKD and aging) |
| Replicated in humans? | partial (genetic + observational; no human RCT targeting RUNX2 directly) |

## Aging-relevant cross-links

- [[vascular-calcification]] — process; RUNX2 is the load-bearing TF for the VSMC phenotype switch
- [[bmp-2]] — upstream activator; BMP-2 → SMAD1/5/8 → RUNX2 co-activation
- [[osteopontin]] — direct downstream target of RUNX2 transcription; bridges osteogenic and calcification biology
- [[matrix-gla-protein]] — functional antagonist; MGP is a mineralisation inhibitor whose expression is partly RUNX2-independent but whose loss amplifies RUNX2-driven calcification #gap/needs-page
- [[fgf23]] — bone-mineral axis; FGF23 regulates Pi homeostasis upstream of the VSMC phosphate-sensing mechanism; serum Pi is RUNX2's dominant trigger in CKD
- [[klotho]] — FGF23 co-receptor; Klotho deficiency → hyperphosphatemia → RUNX2-driven vascular calcification
- [[chronic-inflammation]] — hallmark; TNF-α/IL-6/NF-κB drives RUNX2 induction in VSMCs
- [[deregulated-nutrient-sensing]] — hallmark; hyperphosphatemia is a nutrient-sensing derangement amplified in CKD and aging
- [[osteoblasts]] — cell-type; RUNX2 is the master differentiation TF #gap/needs-page
- [[osteocytes]] — terminal differentiation product of RUNX2-driven osteoblast lineage
- [[mesenchymal-stem-cells]] — upstream progenitor; RUNX2 commits MSCs to osteoblast lineage
- [[arterial-stiffening]] — downstream phenotype; medial calcification is a major determinant of arterial stiffness
- [[osteoporosis]] — downstream phenotype; reduced RUNX2 activity in aged bone #gap/needs-page
- [[bone]] — tissue; dominant site of RUNX2 function #gap/needs-page

## Gaps and open questions

- `#gap/needs-human-replication` — MR instruments for RUNX2 have not been developed; causal role in human vascular calcification inferred from CKD observational data and murine models but not MR-validated.
- `#gap/dose-response-unclear` — the quantitative RUNX2 expression threshold in VSMCs required to initiate vs sustain calcification is not established; relevant for therapeutic window.
- `#gap/no-mechanism` — how intracellular Pi signals to RUNX2 transcription in VSMCs (between PiT-1/PiT-2 uptake and RUNX2 induction) remains incompletely defined.
- `#gap/needs-page` — osteoblast cell-type page, bone tissue page, and osteoporosis phenotype page are referenced but not yet seeded. (BMP-2 protein page, osteopontin protein page, and osteocyte cell-type page now seeded as of 2026-05-23.)
- `#gap/long-term-unknown` — whether pharmacological RUNX2 suppression in VSMCs causes clinically significant bone-loss adverse effects has not been tested in any long-term study.

## Footnotes

[^komori1997]: [[studies/komori-1997-cbfa1-null-bone]] · doi:10.1016/s0092-8674(00)80258-5 · n= (homozygous Cbfa1-null mice; all die just after birth; embryos confirmed at d18.5 by Mendelian frequency) · in-vivo (mouse, targeted knockout) · model: 129-derived E14 ES cells backcrossed onto C57BL/6 background · finding: complete absence of bone ossification; osteoblasts arrested at immature precursor stage expressing only ALP weakly but not Osteopontin or Osteocalcin; cartilage development near-normal but final chondrocyte differentiation also impaired; death from respiratory failure owing to cartilaginous non-ossified rib cage · local PDF verified 2026-05-23

[^otto1997]: [[studies/otto-1997-cbfa1-osteoblast-ccd]] · doi:10.1016/s0092-8674(00)80259-7 · n= (152 embryos genotyped: 38 WT, 77 het, 37 homozygous; 170 postnatal pups: 57 WT, 113 het, 0 homozygous survivors beyond 10d) · in-vivo (mouse, targeted knockout; independently generated line using GK129/R1.3 ES cells) · model: 129-derived GK129 and R1.3 ES cells injected into C57BL/6 blastocysts; chimeras backcrossed to C57BL/6 · finding: homozygous mice die of respiratory failure shortly after birth; complete absence of osteoblasts and bone; heterozygous mice show hypoplastic clavicles and delayed cranial fontanelle closure, phenocopying human cleidocranial dysplasia (CCD, autosomal dominant); Cbfa1 gene shown deleted in radiation-induced mouse Ccd mutant, establishing Cbfa1 as the CCD causal gene · local PDF verified 2026-05-23

[^katano2026]: doi:10.1159/000550336 · Katano H et al. · *J Vasc Res* 2026;63:156–178 · n= (human carotid endarterectomy specimens: L1-8 mildly calcified, M1-8 moderately calcified, H1-4 severely calcified, VH1-4 very severely calcified; total ~24 plaques) · observational (retrospective cohort, RNA-Seq + RT-PCR) · model: human carotid plaques staged by CT-based calcium score into 4 groups · finding: mildly calcified plaques showed elevated RUNX2 and SPP1/OPN expression; moderately calcified plaques showed transient suppression; severely calcified plaques showed persistent osteogenic and inflammatory expression; very severely calcified plaques showed VSMC-related gene downregulation and ECM stabilization; consistent with RUNX2 driving calcification initiation rather than propagation · local PDF verified 2026-05-23

[^alakhdar2026]: doi:10.3390/cells15050466 · PMID 41827899 · Al Akhdar J, Yangın Yılmaz MN, Baysal K · *Cells* 2026;15(5):466 · in-vitro/in-vivo · model: TMAO-treated endothelial cells → exosome release → VSMC osteogenic reprogramming; mechanism via miR-222/miR-30/β-catenin axis · finding: TMAO-induced EndMT → microvesicle/exosome release → VSMC RUNX2, osteopontin, and ALPL upregulation → calcium accumulation · #gap/needs-replication

[^lu2026]: doi:10.1007/s10735-026-10749-8 · PMID 41758410 · Lu Y, Feng Y · *J Mol Histol* 2026 · in-vitro + in-vivo · model: β-glycerophosphate-treated VSMCs; mouse arterial calcification model · finding: salidroside activates both AMPK and AKT pathways to suppress VSMC osteoblastic differentiation and reduce RUNX2; blocking either pathway with Compound C (AMPK) or LY294002 (AKT) abolishes the anti-calcific effect, confirming AMPK/AKT as the mechanism · #gap/needs-replication (single study)

[^voicu2026]: doi:10.1186/s12967-026-07686-1 · Voicu G et al. · *J Transl Med* 2026;24:157 · in-vivo (mouse, ApoE-deficient diabetic/hyperlipidemic CAVD model) · model: dual-targeted lipid-polymer hybrid nanocarriers (V/Cp-LPP) delivering shRunx2 OR shSmad3 simultaneously targeting VCAM-1 and collagen IV on dysfunctional valve endothelium · finding: V/Cp-LPP/shRunx2 and V/Cp-LPP/shSmad3 both suppressed osteogenic markers (osteopontin, ALPL, osteocalcin) in aortic valve tissue; Runx2 identified as upstream modulator of Smad3 expression; reduced plasma ALP, cholesterol, and triglycerides; hepatic/renal safety maintained · note: RUNX2 and SMAD3 silenced separately (not combined) in main arms; RUNX2-only silencing is independently validated in this design · local PDF verified 2026-05-23

[^kim2026]: doi:10.1111/acel.70476 · PMID 41992429 · Kim JM et al. · *Aging Cell* 2026 · in-vitro + in-vivo (mouse) · model: osteoblast-specific ZNF462 KO mouse; aged mouse bone; primary osteoblast cultures · finding: ZNF462 physically interacts with MOZ and RUNX2 to promote osteoblastic bone formation by increasing RUNX2 activity and H3 histone acetylation at osteoblast gene promoters; ZNF462 expression declines with age via reduced H3K4me3, contributing to impaired bone formation in senile osteoporosis · #gap/needs-replication (single study)
