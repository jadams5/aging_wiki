---
type: protein
aliases: [Dickkopf-1, Dkk-1, DKK-1, hDkk-1]
uniprot: O94907
ncbi-gene: 22943
hgnc: HGNC:2891
ensembl: ENSG00000107984
genage-id: null
mouse-ortholog: Dkk1
druggability-tier: 2
pathways: ["[[wnt-beta-catenin]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[chronic-inflammation]]"]
caused-by: []
causes: ["[[osteoporosis]]"]
mr-causal-evidence: partial
gtex-aging-correlation: null
literature-checked-through: 2026-05-23
verified: true
verified-date: 2026-05-23
verified-by: claude
verified-scope: "Purro 2014 (review), Mace 2022, Fang 2025, Gau 2022 (review) verified against local PDFs. Bayod 2015 and Carrillo 2021 not_oa — tagged #gap/no-fulltext-access. Canonical DB identity fields (UniProt O94907, NCBI Gene 22943, HGNC 2891, Ensembl ENSG00000107984) confirmed via live UniProt REST + HGNC REST APIs. DKN-01 trial count resolved directly against ClinicalTrials.gov v2 API (2 active trials as of 2026-05-23). Key corrections: (1) Purro 2014 re-attributed as review — primary source for DKK1-AD data is Purro et al. 2012 J Neurosci; (2) Fang 2025 mechanism corrected — paper studies WNT5A-ROR2-JNK non-canonical pathway; DKK1 is a parallel toxic stimulus, not the intermediary in Aβ→JNK; (3) Mace 2022 model precision added — 5/6 nephrectomized Wistar rats, UMR-106 osteoblast-like cell line; (4) DKN-01 active trial count set to 2; (5) sost/lrp5-lrp6 gap tags removed (pages now exist)."
---

# DKK1 (Dickkopf-1)

A small secreted [[wnt-beta-catenin|Wnt]] antagonist that suppresses canonical Wnt signaling by triggering internalization of the co-receptor complex LRP5/6. DKK1 is elevated in several aging-relevant contexts — Alzheimer's disease, chronic kidney disease, and multiple myeloma bone disease — making it a therapeutic target distinct from, but mechanistically parallel to, its sibling antagonist [[sost|sclerostin]]. Anti-DKK1 antibodies (BHQ880, DKN-01) are in clinical development, though no aging-indication approval exists.

## Identity

- **UniProt:** O94907 (DKK1_HUMAN), Swiss-Prot reviewed
- **NCBI Gene:** 22943
- **HGNC:** HGNC:2891 (symbol DKK1)
- **Ensembl:** ENSG00000107984
- **Chromosomal location:** 10q21.1
- **Mouse ortholog:** Dkk1 (one-to-one ortholog; highly conserved across vertebrates)
- **Length:** 266 amino acids (canonical); signal peptide (aa 1–31) cleaved post-translationally
- **Molecular weight:** ~29 kDa (mature form ~24 kDa after signal cleavage)
- **GenAge:** not listed (DKK1 is not a curated GenAge aging gene; aging relevance is disease-context driven)

## Domain structure

DKK1 contains two cysteine-rich domains (CRDs) stabilized by multiple disulfide bonds:

- **CRD1 (DKK-N domain, aa 85–138)** — conserved in all DKK family members; weakly interacts with LRP6 E3/E4 domains but is not the primary binding site for LRP5/6 antagonism
- **CRD2 (Colipase-fold / C-terminal domain, aa 189–263)** — the functional Wnt-inhibitory domain; binds the LRP5/6 E1/E2 propeller domains directly with high affinity; also the binding interface for Kremen1/2 co-receptors

The two CRDs are separated by a flexible linker. The C-terminal CRD2 alone is sufficient for Wnt pathway inhibition.

## Mechanism — LRP5/6 antagonism via Kremen-mediated internalization

DKK1 inhibits canonical Wnt signaling through a stepwise internalization mechanism that is mechanistically distinct from [[sost|sclerostin]]:

1. DKK1 (secreted) binds the LRP5/6 E1/E2 extracellular propeller domains via CRD2 with nanomolar affinity
2. Bound DKK1 recruits Kremen1 or Kremen2 (KREMEN1/2) transmembrane proteins to form a ternary DKK1–LRP5/6–Kremen complex
3. The ternary complex is endocytosed and routed for lysosomal degradation, reducing cell-surface LRP5/6
4. With LRP5/6 absent, Wnt-mediated Frizzled–LRP5/6 co-receptor assembly cannot occur → Axin–APC–GSK3β destruction complex remains active → β-catenin is phosphorylated, ubiquitinated, and degraded
5. Net: suppressed TCF/LEF-mediated target gene transcription

**Contrast with sclerostin (SOST):** sclerostin binds LRP5/6 at the same E1/E2 propellers but via a different binding loop and does NOT recruit Kremen; its inhibition is steric/competitive and does not cause receptor internalization. DKK1-mediated LRP5/6 loss is therefore more durable per molecule than sclerostin-mediated steric blockade. See [[sost]] for the parallel comparison.

## Tissue expression

Broadly expressed across adult tissues including bone (osteoblasts, osteocytes), brain (neurons, astrocytes), kidney, liver, and intestine. During embryogenesis DKK1 is a head-organizer signal (Xenopus anterior patterning). In adults the most aging-relevant expression is in:

- **Bone** — osteoblast-derived DKK1 provides negative-feedback on Wnt-driven bone formation
- **Brain** — neuronal DKK1 rises in Alzheimer's disease brain and CSF
- **Kidney** — DKK1 elevated in CKD, contributing to the bone-vascular dysregulation axis

## Aging-relevant biology

### Alzheimer's disease

DKK1 is elevated in post-mortem brain samples and cerebrospinal fluid from AD patients relative to age-matched controls, and in transgenic AD animal models [^purro2014]. In hippocampal neurons, Wnt signaling maintains dendritic spine density and synaptic protein clustering; DKK1 suppression of this signal causes synapse retraction. Key findings:

- Amyloid-β increases the expression of DKK1 in neurons; DKK1 in turn causes rapid synaptic disassembly by blocking canonical Wnt/LRP6 signaling at synapses [^purro2014]. Separately, Aβ also activates the non-canonical WNT5A-ROR2-JNK pathway, which independently reduces synapse formation; DKK1 acts as a parallel toxic stimulus that potentiates this effect — with DKK1 blockade and JNK blockade each partially rescuing synaptogenesis [^fang2025]
- DKK1-neutralizing antibodies protect hippocampal synapses from Aβ toxicity in rodent models [^purro2014]
- In SAMP8 accelerated-aging mice, DKK1 protein levels rise with age alongside reduced β-catenin activation and progressive neuronal loss [^bayod2015]

Preclinical anti-DKK1 antibody studies are promising but no human data exist. #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — LRP5/6 and Kremen highly conserved |
| Phenotype (synaptic loss) conserved? | partial — AD brain DKK1 elevation is human, but causal directionality unproven in humans |
| Replicated in humans? | no — only observational; no anti-DKK1 trial in AD |

### Chronic kidney disease / mineral-bone disorder

DKK1 and sclerostin are both elevated in CKD, contributing to renal osteodystrophy and vascular calcification [^carrillo2021]. In an in-vitro co-culture experiment, calcified aortic tissue from 5/6-nephrectomized Wistar rats secreted DKK1 (median 119 [78–551] pg/mL at 24 h; 353 [110–686] pg/mL at 48 h; not detected from normal aorta) and sclerostin into the culture media; co-incubation of this conditioned media with UMR-106 osteoblast-like cells completely abolished calcium crystal formation (Alizarin red staining; p<0.001 vs normal aorta co-culture), and upregulated the mineralization inhibitors osteopontin and ANKH [^mace2022]. These findings support a direct vascular-to-bone crosstalk hypothesis in CKD-mineral and bone disorder (CKD-MBD), though the in-vivo causal contribution of DKK1 specifically (versus co-secreted sclerostin and activin A) remains to be disentangled. #gap/needs-human-replication for the directionality of the DKK1 contribution specifically.

### Multiple myeloma bone disease

Multiple myeloma cells secrete high levels of DKK1, which suppresses osteoblast differentiation via Wnt inhibition and drives the lytic bone lesions characteristic of MM [^gau2022]. The anti-DKK1 monoclonal antibody **BHQ880** (Novartis) entered clinical trials for MM-related bone disease; phase 1/2 data showed increased bone formation markers. Trial activity for MM-bone indication appears to have stalled (no recent phase 3 completion); ongoing as of 2022–2023 literature. #gap/needs-current-trial-status

### Age-related serum trajectory

DKK1 circulating levels show age-associated increases in some cross-sectional studies. Unlike sclerostin (strongly osteocyte-restricted), DKK1 rises are less uniform and contextually driven (inflammatory disease, malignancy, CKD). A large RCT-quality longitudinal dataset on DKK1 trajectory in healthy aging does not yet exist. #gap/needs-human-replication

## Therapeutic development (anti-DKK1 antibodies)

- **BHQ880** (Novartis; formerly MOR1404) — fully human anti-DKK1 IgG4; phase 1/2 evaluated in multiple myeloma bone disease. Demonstrated increases in P1NP (bone formation marker) and N-MID osteocalcin; clinical program status uncertain post-2022.
- **DKN-01** (Leap Therapeutics) — anti-DKK1 IgG4; currently 2 active (ACTIVE_NOT_RECRUITING) trials as of 2026-05-23 (ClinicalTrials.gov v2 API): NCT04166721 (phase 1/2, gastric/esophageal cancer, Royal Marsden NHS) and NCT05761951 (phase 2, endometrial cancer, MD Anderson); uses DKK1 as an immune-evasion target, not bone disease. Phase 1 trials in multiple myeloma (NCT01457417, NCT01711671) and biliary cancer (NCT02375880) are completed. No aging-indication program [^canella2026].

**Aging-context druggability rationale (tier 2):** Clinical-stage probes (BHQ880, DKN-01) exist with mechanistic evidence for aging-relevant indications (bone, brain), but no FDA-approved therapy exists for an aging indication that engages DKK1. Bone-specific romosozumab (anti-SOST) has a regulatory pathway that anti-DKK1 could follow for osteoporosis, but no phase 3 trial has completed.

## Family context

The Dickkopf family includes DKK1, DKK2, DKK3, and DKK4. DKK1 and DKK2 both antagonize LRP5/6; DKK3 does not bind LRP5/6 directly (it modulates TGFR/Kremen interactions) — see the recent Science Advances study showing DKK3 suppresses Aβ clearance via LRP1, a distinct mechanism [^yang2025]. DKK4 is a weak Wnt inhibitor. DKK1 is the most studied in aging contexts.

## Pathway membership and interactors

- **Canonical pathway:** [[wnt-beta-catenin]] — DKK1 is the primary secreted antagonist of LRP5/6 co-receptor activity
- **Co-receptors:** Kremen1/Kremen2 (KREMEN1/2) — required for DKK1-mediated LRP5/6 internalization
- **Mechanistic parallel:** [[sost]] — shares the LRP5/6 target but uses steric rather than internalization mechanism
- **Upstream interaction:** [[klotho]] — some evidence that FGF23/Klotho signaling modulates DKK1 in the CKD context; contested; see [[klotho]] for evidence
- **Downstream effects on bone:** [[bone]] (remodeling suppression); [[osteoporosis]] (via Wnt inhibition-driven osteoblast suppression)
- **Downstream effects in brain:** [[alzheimers-disease]] (synaptic Wnt loss contribution)
- **Inflammation context:** [[chronic-inflammation]] — inflammatory cytokines (TNFα, IL-6) can upregulate DKK1; DKK1 suppression of Wnt in immune cells also affects macrophage polarization (bidirectional)

## Gaps and limitations

- #gap/needs-human-replication — anti-DKK1 strategy in AD has no human trial data; mouse models have poor translational record for synaptic rescue (see [[alzheimers-disease]] for extrapolation caveats)
- #gap/needs-human-replication — DKK1's causal role in CKD-driven vascular calcification is mechanistically plausible but not established by RCT or MR in humans
- #gap/needs-current-trial-status — BHQ880 clinical program status post-2022 is unclear; no completed phase 3
- #gap/dose-response-unclear — circulating DKK1 levels in aging: no established reference range for "aging-relevant" elevation vs noise
- #gap/needs-page — `[[osteoblasts]]` page does not yet exist; DKK1's most mechanistically documented target cell
- `[[lrp5-lrp6]]` page exists (seeded 2026-05-23; unverified)
- `[[sost]]` page exists (seeded 2026-05-23; unverified)

## Footnotes

[^purro2014]: doi:10.1093/jmcb/mjt049 · Purro SA, Galli S, Salinas PC · *J Mol Cell Biol* 2014 · **review** (not a primary research paper) · Reviews the role of Wnt signaling in synaptic maintenance and AD. Primary data for DKK1 elevation in AD brain and DKK1-neutralizing antibody synapse rescue comes from: Purro SA et al. *J Neurosci* 2012, 32:3492–3498 (rat hippocampal neuron culture + mouse brain slice model); and Caricasole et al. *J Neurosci* 2004, 24:6021–6027 (human AD post-mortem brain samples + transgenic mouse models). The review reports that Aβ increases DKK1 expression and that anti-DKK1 antibody blockade suppresses Aβ-mediated synaptotoxicity. · archive: downloaded (PMC4344549)

[^fang2025]: doi:10.1242/jcs.263526 · Fang K et al. · *J Cell Sci* 2025 · in-vitro (SH-SY5Y human neuroblastoma + iPSC-derived cortical neurons with PSEN1^A75V mutation) · The primary pathway studied is WNT5A-ROR2→JNK (non-canonical Wnt/PCP), which reduces synapse formation; Aβ₁₋₄₂ oligomers and DKK1 treatment each upregulate ROR2 (~1.5-fold and ~1.53-fold mRNA respectively) and activate JNK (~3.02- and ~3.04-fold C:N reporter shift) — DKK1 and Aβ are parallel toxic stimuli converging on ROR2-JNK; DKK1 is not the intermediary step in the Aβ→JNK pathway. Blocking ROR2 or JNK partially rescues synaptogenesis from both Aβ and DKK1 treatment. · archive: downloaded

[^bayod2015]: doi:10.1016/j.neurobiolaging.2014.09.017 · Bayod S et al. · *Neurobiol Aging* 2015 · in-vivo (SAMP8 accelerated-aging mouse) · DKK1 protein rises with age in SAMP8 hippocampus alongside reduced β-catenin and neuronal loss · archive: not OA #gap/no-fulltext-access — claims not independently verified against full PDF

[^carrillo2021]: doi:10.1007/s00223-020-00803-2 · Carrillo-López N et al. · *Calcif Tissue Int* 2021 · review · DKK1 and SOST are elevated in CKD; role in bone-vascular Wnt axis dysregulation · archive: not OA #gap/no-fulltext-access — abstract-level only; claims not independently verified

[^mace2022]: doi:10.1002/jbm4.10610 · Mace ML et al. · *JBMR Plus* 2022 · in-vitro vascular-bone co-culture · model: 5/6-nephrectomized male Wistar rats (22 weeks old; n=6 uremic, n=6 normal) aorta rings co-cultured with UMR-106 osteoblast-like cells · DKK1 secretion: not detected in normal aorta; uremic calcified aorta secreted median 119 [78–551] pg/mL at 24h and 353 [110–686] pg/mL at 48h (p<0.001 vs normal aorta at 48h, Mann-Whitney U). Uremic aorta co-incubation completely abolished UMR-106 calcium crystal formation (Alizarin red; p<0.001 vs normal aorta co-culture; experiment repeated 3× with n=24 total wells per group). Also upregulated UMR-106 osteopontin (Spp1 mRNA ~25.5-fold vs control; p<0.001) and ANKH mRNA (~2.95-fold; p<0.005). Sclerostin and activin A were co-secreted; the relative contribution of DKK1 vs these co-factors not individually disambiguated. LiCl (Wnt/β-catenin activator) partially rescued osteopontin upregulation, implicating Wnt pathway suppression in the mineralization inhibition. · archive: downloaded (PMC9009125)

[^gau2022]: doi:10.3390/ijms23063112 · Gau YC et al. · *Int J Mol Sci* 2022 · **review** · MM cells secrete DKK1 (stimulated by IL-6 from the bone marrow microenvironment) → suppresses osteoblast Wnt/β-catenin activity → lytic bone disease; DKK1 is one of multiple osteolytic factors (alongside RANKL, sclerostin, activin A, CCL3, CCL20, annexin II, IL-3, IL-6, IL-17, TNF, BAFF). BHQ880 phase 1/2 MM bone-disease trial summarized. DKN-01 not discussed in this review. · archive: downloaded

[^yang2025]: doi:10.1126/sciadv.adz2099 · Yang R et al. · *Sci Adv* 2025 · in-vitro + in-vivo (transgenic AD mice) · DKK3 (not DKK1) inhibits Aβ clearance via LRP1; compound SJ-300 rescues cognition — distinct from DKK1-LRP5/6 mechanism · archive: pending download

[^canella2026]: doi:10.3390/ijms27093780 · Canella A et al. · *Int J Mol Sci* 2026 · review · DKK1 in tumor immune evasion; DKN-01 (anti-DKK1) oncology pipeline summary · archive: not confirmed in archive (DOI not found)
