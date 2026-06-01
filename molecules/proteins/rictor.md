---
type: protein
aliases: [RICTR, KIAA1999, hAVO3, "rapamycin-insensitive companion of mTOR"]
uniprot: Q6R327
ncbi-gene: 253260
hgnc: 28611
mouse-ortholog: Rictor
ensembl: ENSG00000164327
druggability-tier: 2
caused-by: []
causes: []
key-domains: [ribosome-binding region, HEAT repeats, disordered C-terminal tail]
key-ptms: [Thr1135-phosphorylation, Thr1103-phosphorylation, Ser21-phosphorylation, Ser35-phosphorylation, Lys1092/1095/1116/1119/1125-acetylation]
pathways: ["[[mtor]]", "[[pi3k-akt-pathway]]", "[[insulin-igf1]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[cellular-senescence]]"]
known-interactors: ["[[mtor-kinase]]", "[[mLST8]]", "[[sin1]]", "[[protor-1]]", "[[deptor]]", "[[akt]]", "[[sgk1]]", "[[pkc-alpha]]", "[[raptor]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Sarbassov 2004, Zinzalla 2011, Soukas 2009, Jacinto 2006, and Bentzinger 2008 verified against primary-source PDFs. Lamming 2012 verified against Crossref abstract only (MIT DSpace PDF returned 403; full-text dose/n details unconfirmed). Sarbassov 2005, Jacinto 2004 closed-access (not_oa); claims not independently verifiable against full text. Cybulski 2012 and Mizunuma 2014 verified against Crossref/PubMed abstracts only (PDFs still downloading at time of verification). Canonical-DB identity fields (UniProt Q6R327, NCBI Gene 253260, HGNC 28611) not independently re-verified against databases."
---

# Rictor (RICTR)

Rictor (Rapamycin-Insensitive Companion of mTOR) is the defining scaffold subunit of **mTORC2**, the second major mTOR complex — playing a structural role precisely analogous to [[raptor]]'s role in mTORC1 [^sarbassov2004]. Where Raptor recruits mTORC1 substrates via TOS-motif recognition, Rictor recruits and positions the AGC kinase substrates of mTORC2: **AKT** (at Ser473), **SGK1**, and **PKCα**. The two complexes are mutually exclusive: Rictor and Raptor do not co-assemble in the same mTOR complex. The most functionally important consequence of Rictor's existence is that it confers **acute rapamycin insensitivity** on mTORC2 — the FKBP12-rapamycin mechanism sterically targets the mTOR FRB domain as presented in the Raptor-containing mTORC1 geometry; mTORC2's quaternary structure occludes this access. This insensitivity is the mechanistic reason why standard rapamycin dosing targets mTORC1 preferentially, and why chronic dosing that begins to impair mTORC2 is the source of insulin-resistance side effects [^lamming2012].

---

## Identity

| Field | Value |
|---|---|
| UniProt | Q6R327 (RICTR_HUMAN) |
| NCBI Gene | 253260 |
| HGNC | 28611 |
| Mouse ortholog | Rictor (one-to-one) |
| Length | 1,708 amino acids (192 kDa) |
| GenAge | Not listed — no direct GenAge aging-gene entry; relevance established via tissue-specific KO models and aging side-effect pharmacology |

---

## Functional domains

- **N-terminal HEAT-repeat region** — forms an extended scaffold that contacts mTOR and shapes the mTORC2 quaternary structure. Analogous in geometry to Raptor's HEAT repeats but structurally distinct in sequence, consistent with the two complexes' different substrate specificities.
- **Ribosome-binding region** — mTORC2 directly associates with the ribosome via rictor and/or mSIN1; this interaction is required for mTORC2 activation by growth factors (see Activation, below) [^zinzalla2011]. The precise domain boundaries and residue range within rictor responsible for ribosome contact have not been defined in the primary literature. #gap/needs-replication
- **Disordered C-terminal tail** — heavily phosphorylated (at least 10 phospho-sites identified by mass spectrometry); contains multiple regulatory docking sites, including the key **Thr1135** phosphorylation site targeted by S6K1 (negative feedback loop from mTORC1 to mTORC2) and **Thr1695** targeted by GSK3α/β.

---

## Post-translational modifications

| PTM | Site | Kinase | Consequence |
|---|---|---|---|
| Phosphorylation | Thr1135 | S6K1 (RPS6KB1) | Negative feedback from mTORC1 → reduces mTORC2-mediated AKT Ser473 phosphorylation |
| Phosphorylation | Thr1103 | S6K1 (RPS6KB1) | Negative feedback from mTORC1; additional regulatory site |
| Phosphorylation | Ser1235 | GSK3β | Inhibitory; reduces mTORC2 activity |
| Phosphorylation | Thr1695 | GSK3α/β | Regulatory; modulates complex stability |
| Phosphorylation | Ser21, Ser35 | — (upstream kinase not established) | Regulatory; functional consequence unclear #gap/no-mechanism |
| Acetylation | Lys1092, Lys1095, Lys1116, Lys1119, Lys1125 | — | Glucose-dependent; promotes mTORC2 activity and AKT Ser473 phosphorylation |

The Thr1135 negative feedback loop is mechanistically important: as mTORC1 is activated (e.g., by nutrients), it activates S6K1, which then phosphorylates Rictor Thr1135 and attenuates mTORC2 — creating cross-talk between the two complexes that prevents unconstrained AKT activation.

---

## mTORC2 holocomplex architecture

Rictor assembles with five other subunits to form mTORC2 [^sarbassov2004][^jacinto2006]:

- **mTOR** — catalytic kinase subunit (shared with mTORC1)
- **mLST8** (GβL) — stabilizes the kinase domain; required for full activity (shared with mTORC1)
- **SIN1** (MAPKAP1) — required for complex integrity and substrate specificity; loss of SIN1 abrogates mTORC2 assembly and AKT Ser473 phosphorylation [^jacinto2006]
- **DEPTOR** — endogenous inhibitor (shared with mTORC1)
- **Protor-1/2** (PRR5/PRR5L) — accessory subunits; promote mTORC2 assembly but not strictly required for kinase activity

Rictor is the defining component: complexes containing mTOR + mLST8 without Rictor are neither mTORC2 nor capable of phosphorylating AKT at Ser473.

**mTORC1 vs mTORC2 disambiguation:**

| Feature | mTORC1 | mTORC2 |
|---|---|---|
| Defining scaffold | [[raptor]] | Rictor |
| Acute rapamycin sensitivity | yes (FKBP12-mediated) | no (sterically occluded) |
| Chronic rapamycin (>1–2 weeks) | fully inhibited | partially inhibited in some tissues |
| Amino-acid sensing | yes (Rag GTPases, Sestrin2, CASTOR1) | no |
| Growth factor input | yes (PI3K → Rheb) | yes (PI3K → ribosome association) |
| Key substrates | S6K1, 4E-BP1, ULK1, TFEB | AKT (Ser473), SGK1, PKCα |

---

## Activation mechanism

mTORC2 is activated by growth factors (insulin, IGF-1) via [[pi3k-akt-pathway|PI3K]]-generated PIP3, but through a mechanism distinct from mTORC1's amino-acid-gated lysosomal recruitment. Zinzalla et al. 2011 demonstrated that mTORC2 is **activated by physical association with the ribosome**: growth factor signaling promotes mTORC2–ribosome interaction, and this ribosomal association is required for mTORC2 to phosphorylate AKT at Ser473 [^zinzalla2011]. This places mTORC2 as a sensor of translational capacity (ribosome occupancy) rather than of nutrient availability per se — a mechanistic distinction with implications for how mTORC2 responds to anabolic states. #gap/needs-replication — the ribosomal-activation model is supported by a single influential study; the precise structural basis of ribosome–mTORC2 interaction remains incompletely resolved.

---

## Key substrates and outputs

### AKT Ser473 phosphorylation

The most widely studied Rictor-mTORC2 substrate is **AKT** phosphorylated at **Ser473** (the hydrophobic motif site, distinct from PDK1's Thr308 phosphorylation of the activation loop). Sarbassov et al. 2005 demonstrated that RNA interference against Rictor or mTOR abolished AKT Ser473 phosphorylation in response to insulin, and that immunoprecipitated Rictor-mTOR complex directly phosphorylated AKT Ser473 in vitro [^sarbassov2005]. Full AKT activation requires **both** PDK1 (Thr308) and mTORC2 (Ser473); Ser473 phosphorylation dramatically enhances AKT kinase activity and substrate selectivity. See [[pi3k-akt-pathway]] for the full AKT activation model.

| Dimension | Status | Notes |
|---|---|---|
| Rictor-mTOR → AKT Ser473 mechanism conserved in humans? | yes | Confirmed in multiple human cell lines and in vivo |
| Replicated in humans? | yes | Standard phospho-AKT (Ser473) assays are used clinically in cancer diagnostics |

### SGK1 (Serum/Glucocorticoid Kinase 1)

mTORC2 phosphorylates SGK1 at its hydrophobic motif (Ser422), activating SGK1 and enabling it to regulate ion channels (especially ENaC/sodium reabsorption in kidney), glucose uptake, and cell survival. SGK1 is the primary mTORC2 effector in the kidney and is relevant to fluid homeostasis with aging.

### PKCα (Protein Kinase C alpha)

mTORC2 phosphorylates PKCα at its turn-motif and hydrophobic-motif sites, stabilizing PKCα protein and supporting cytoskeletal remodeling (actin stress fiber formation). This is the function identified in the original Jacinto 2004 study: rapamycin-insensitive actin cytoskeleton regulation requires the Rictor-containing complex [^jacinto2004].

---

## Role in aging

### Rapamycin side effects: the mTORC2 connection

The most direct aging-biology relevance of Rictor is as the mechanistic explanation for rapamycin's metabolic side effects. Lamming et al. 2012 (*Science*) showed that **chronic rapamycin treatment in mice (4 weeks or longer) impairs mTORC2** in metabolic tissues, reducing AKT Ser473 phosphorylation in liver, fat, and muscle — even though acute rapamycin selectively targets mTORC1 [^lamming2012]. The mechanism: free mTOR protein is required to maintain mTORC2 complex integrity; chronic rapamycin (via FKBP12-rapamycin) sequesters free mTOR, eventually depleting the pool available for mTORC2 assembly. This is tissue-dependent and dose-dependent; not all tissues lose mTORC2 at the same rapamycin exposure.

The clinical consequence: chronic rapamycin causes **insulin resistance** (impaired glucose uptake, dyslipidemia) that resembles a type 2 diabetes phenotype. This is mechanistically distinct from rapamycin's longevity-promoting mTORC1 inhibition. Lamming et al. further showed that genetic models of partial mTORC1 inhibition (mTOR and mLST8 heterozygous mice) extended lifespan **without** the metabolic side effects, supporting the hypothesis that the longevity benefit is mTORC1-mediated while the insulin-resistance liability is mTORC2-mediated [^lamming2012]. #gap/needs-replication — this study is single-lab (Sabatini/Baur groups); mechanistic confirmation of mTORC2-specific insulin resistance in an independent system is needed.

| Dimension | Status | Notes |
|---|---|---|
| mTORC2 disruption by chronic rapamycin conserved in humans? | partial | Clinical reports of rapamycin/everolimus-induced hyperglycemia and dyslipidemia are consistent, but direct measurement of mTORC2 loss in human tissue is not available |
| Replicated in humans? | no | #gap/needs-human-replication — mechanistic confirmation in human tissue not established |

**Therapeutic implication:** Next-generation "mTORC1-selective" rapalogs under development aim to spare mTORC2 and thus avoid insulin-resistance side effects. This is a stated design objective in published preclinical literature. #gap/long-term-unknown — no such compound has reached clinical aging indications as of 2026.

### Tissue-specific Rictor knockout phenotypes

**Skeletal muscle — no dystrophy phenotype:**
Bentzinger et al. 2008 examined both Raptor and Rictor KO in skeletal muscle (using HSA-Cre). The muscle-specific Raptor KO developed progressive muscular dystrophy and premature death (~110 days); **the Rictor KO had no detectable phenotype**, with the oldest RImKO mice surviving more than 2 years [^bentzinger2008]. This confirms that mTORC1 (not mTORC2) is the dominant signaling arm for muscle structural maintenance. The paper additionally found that AKT was hyperphosphorylated on both Thr308 and Ser473 in the raptor-KO mice despite mTORC1 loss — and that this Ser473 hyperphosphorylation was still present in double-KO (raptor + rictor) mice — demonstrating that in skeletal muscle in vivo, mTORC2 is **not** required for AKT Ser473 phosphorylation and that an alternative kinase (proposed to be DNA-PK or another PDK2 candidate) can phosphorylate this site. This is an important tissue-specific exception to the general mTORC2 → AKT Ser473 model.

**Liver — glycolysis, lipogenesis, and glucose homeostasis:**
Hagiwara et al. 2012 showed that liver-specific Rictor KO impairs mTORC2-dependent activation of glucokinase (via AKT) and lipogenic transcription (via SREBP1c), resulting in reduced hepatic glycolysis and lipogenesis [^cybulski2012]. This reveals mTORC2's role in the postprandial liver metabolic response. Conversely, chronic rapamycin-induced mTORC2 impairment in liver causes ectopic lipid accumulation (hepatic steatosis) and insulin resistance, consistent with this substrate circuit. #gap/needs-replication — the full metabolic aging phenotype of liver-Rictor-KO mice has not been longitudinally characterized.

| Dimension | Status | Notes |
|---|---|---|
| mTORC2/Rictor in hepatic glucose homeostasis conserved in humans? | partial | AKT Ser473 phosphorylation in liver is routinely measured in human biopsies and NAFLD studies; direct Rictor genetic data in humans not available |
| Replicated in humans? | no | #gap/needs-human-replication |

**C. elegans — lifespan effects:**
Soukas et al. 2009 found that *rict-1* (the C. elegans Rictor ortholog) loss-of-function mutants are **short-lived on standard OP50 diet** (lifespan reduced 24–43% relative to wild type) despite elevated body fat [^soukas2009]. Paradoxically, when transferred to nutrient-rich HB101 bacteria, *rict-1* mutants display dramatically extended lifespan (up to ~74% extension), an effect the authors attribute to decreased consumption of nutrient-rich food — a caloric-restriction-like consequence of altered feeding behavior — rather than a direct pro-longevity effect of RICT-1 loss. The lifespan and reproductive phenotypes of *rict-1* mutants are mediated predominantly through SGK-1 (the *C. elegans* SGK ortholog), with AKT homologs *akt-1* and *akt-2* playing additional roles in fat accumulation. This diet-dependent, context-sensitive picture contrasts with the mammalian setting where mTORC2 loss via chronic rapamycin causes metabolic pathology rather than longevity benefits. Mizunuma et al. 2014 further resolved the complexity: mTORC2-SGK-1 acts in two context-dependent pathways in *C. elegans* with **opposing** effects on longevity — intestinal RICT-1/mTORC2 limits longevity by directing SGK-1 to inhibit the stress-response transcription factor SKN-1/Nrf; separately, neuronal RICT-1/mTORC2 functions in an SGK-1-mediated pathway that increases lifespan at lower temperatures [^mizunuma2014].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | partial | mTORC2 → AKT/SGK1 axis is conserved; worm-specific transcriptional targets (SKN-1/Nrf) differ |
| Phenotype conserved in humans? | unknown | Rictor loss extending lifespan in worms has not been tested in mammals via a clean genetic KO |
| Replicated in humans? | no | #gap/needs-human-replication |

---

## Pathway membership

- [[mtor]] — core structural subunit of mTORC2; Rictor is the canonical mTORC2 marker
- [[pi3k-akt-pathway]] — mTORC2 is the kinase that phosphorylates AKT Ser473, completing full AKT activation downstream of PI3K
- [[insulin-igf1]] — growth factor signaling via PI3K drives mTORC2 ribosomal association and substrate phosphorylation

---

## Key interactors

| Interactor | Interaction type | Functional consequence |
|---|---|---|
| mTOR kinase | direct (complex core) | Catalytic subunit; Rictor presents substrates to mTOR active site |
| SIN1 (MAPKAP1) | direct (complex component) | Required for mTORC2 integrity; loss of SIN1 abrogates AKT Ser473 phosphorylation |
| mLST8 | direct (complex component) | Stabilizes mTOR kinase domain; shared with mTORC1 |
| Protor-1/2 (PRR5/PRR5L) | accessory subunit | Promote complex assembly; dispensable for kinase activity |
| [[deptor]] | inhibitory (within complex) | Endogenous mTOR inhibitor; shared between mTORC1 and mTORC2 |
| [[akt]] | substrate | Ser473 phosphorylation → full AKT activation → cell survival, glucose metabolism |
| SGK1 | substrate | Ser422 phosphorylation → SGK1 activation → ENaC regulation, cell survival |
| PKCα | substrate | Turn-motif + hydrophobic-motif phosphorylation → PKCα stability, actin remodeling |
| [[raptor]] | mutually exclusive | Raptor and Rictor define distinct complexes; do not co-assemble |
| S6K1 | upstream regulator | S6K1 phosphorylates Rictor Thr1135 as an mTORC1 → mTORC2 negative feedback |

---

## Pharmacological context

Rictor has no approved direct inhibitors. mTORC2 is modulated indirectly:

- **Chronic rapamycin / rapalogs** (everolimus, temsirolimus) — at extended exposure, disrupts mTORC2 assembly by sequestering free mTOR. This is the source of insulin-resistance side effects. See [[rapamycin]].
- **ATP-competitive mTOR kinase inhibitors** (Torin1, Torin2, INK128/MLN0128) — inhibit both mTORC1 and mTORC2 directly; stronger mTORC2 inhibition than rapalogs. Not yet approved for aging indications; used in cancer and as research tools.
- **mTORC1-selective inhibitors (preclinical)** — design goal is to spare Rictor-mTORC2 and avoid metabolic toxicity. #gap/long-term-unknown — no compound in this category has completed late-stage clinical testing as of 2026.

The key therapeutic principle: for aging applications, **mTORC2 inhibition is undesirable**. Most evidence for mTOR-pathway longevity benefit is mTORC1-mediated; Rictor/mTORC2 inhibition produces pathological insulin resistance rather than extended healthspan.

---

## Limitations and open questions

| Gap | Tag | Notes |
|---|---|---|
| mTORC2 loss in aged human metabolic tissue | #gap/needs-human-replication | Rictor protein levels and AKT Ser473 phosphorylation with age in human liver, muscle, adipose — not well characterized longitudinally |
| Rictor KO in mammalian aging models | #gap/needs-replication | Inducible adult-onset whole-body or tissue-specific Rictor KO in aged mice has not been reported |
| mTORC1-selective inhibitors sparing mTORC2 | #gap/long-term-unknown | Preclinical concept; no clinical data on whether mTORC1-selective dosing delivers the longevity benefit without mTORC2 side effects |
| Ribosomal activation mechanism structural detail | #gap/needs-replication | Zinzalla 2011 is a single study; the structural basis of mTORC2–ribosome interaction is unresolved |
| Rictor Ser21/Ser35 upstream kinase | #gap/no-mechanism | Phospho-sites identified by MS; upstream kinase and functional consequence not established |
| Rictor not in GenAge | — | RICTOR does not appear in GenAge human or models lists as of 2026-05-04; aging relevance is indirect (mTORC2 pharmacology and C. elegans data) |
| Tissue-specific mTORC2 aging phenotypes | #gap/needs-replication | Adipose-specific Rictor KO metabolic-aging phenotypes not longitudinally reported; brain-specific neurological phenotypes require further characterization |

---

## Footnotes

[^sarbassov2004]: doi:10.1016/j.cub.2004.06.054 · Sarbassov DD, Ali SM, Kim DH, Guertin DA, Latek RR, Erdjument-Bromage H, Tempst P, Sabatini DM · in-vitro · model: HEK293T cells, HeLa cells, DU145 cells; Drosophila S2 cells for conservation · foundational discovery of Rictor (1,708 aa, 192 kDa) as novel mTOR-binding partner defining a rapamycin-insensitive, raptor-independent complex that regulates PKCα phosphorylation and the actin cytoskeleton; FKBP12-rapamycin does not bind the rictor–mTOR complex · 2,638 citations · 100th percentile · locally downloaded

[^sarbassov2005]: doi:10.1126/science.1106148 · Sarbassov DD, Guertin DA, Ali SM, Sabatini DM · in-vitro + in-vivo (mouse) · model: HEK293 cells, mouse tissues · identification of Rictor-mTOR complex as the kinase that phosphorylates AKT Ser473; RNAi knockdown of rictor abolished Ser473 phosphorylation · 6,108 citations · 100th percentile · not locally downloaded (closed access)

[^jacinto2004]: doi:10.1038/ncb1183 · Jacinto E, Loewith R, Schmidt A et al. · in-vitro + in-vivo (cell culture, yeast) · model: mammalian cells and S. cerevisiae · co-discovery of mTORC2 as rapamycin-insensitive complex controlling the actin cytoskeleton; PKCα identified as substrate · 2,087 citations · 100th percentile · not locally downloaded (closed access)

[^jacinto2006]: doi:10.1016/j.cell.2006.08.033 · Jacinto E, Facchinetti V, Liu D, Soto N, Wei S, Jung SY, Huang Q, Qin J, Su B · in-vitro · model: HeLa cells, HEK293T cells, MEFs (sin1−/− E10 embryonic fibroblasts) · SIN1 identified as essential TORC2 subunit; sin1 deletion abolishes Akt Ser473 phosphorylation but preserves Thr308; rictor–mTOR interaction disrupted in SIN1-deficient cells · 1,386 citations · 100th percentile · locally downloaded

[^zinzalla2011]: doi:10.1016/j.cell.2011.02.014 · Zinzalla V, Stracka D, Oppliger W, Hall MN · in-vitro · model: HeLa cells, melanoma lines (NA8, Juso, ME67), colon cancer lines (HT29, HCT116, SW60), S. cerevisiae · mTORC2 physically associates with the ribosome (via rictor and/or mSIN1 binding to 60S subunit), ribosome-bound mTORC2 is active (kinase-competent), insulin/PI3K signaling promotes mTORC2–ribosome interaction; ribosome content but not protein synthesis per se required for mTORC2 activation; interaction conserved from yeast to mammals · 641 citations · 100th percentile · locally downloaded

[^lamming2012]: doi:10.1126/science.1215135 · Lamming DW, Ye L, Katajisto P, Goncalves MD, Saitoh M, Stevens DM, Davis JG, Salmon AB, Richardson A, Ahima RS, Guertin DA, Sabatini DM, Baur JA · in-vivo (mouse) · model: C57BL/6 mice, chronic rapamycin (dose/schedule stated as 14 mg/kg every-other-day in wiki — unconfirmed from full text; MIT DSpace PDF inaccessible) · chronic rapamycin disrupts mTORC2 in metabolic tissues → insulin resistance resembling type 2 diabetes (decreased glucose tolerance, dyslipidemia); mTOR and mLST8 heterozygous genetic models with partial mTORC1 reduction extend lifespan without metabolic side effects, supporting mTORC1 as longevity mediator and mTORC2 as insulin-resistance liability · 1,049 citations · 99th percentile · download failed; green OA (MIT DSpace) returned 403 at time of verification #gap/dose-response-unclear

[^bentzinger2008]: doi:10.1016/j.cmet.2008.10.002 · Bentzinger CF, Romanino K, Cloëtta D et al. · in-vivo (mouse, muscle-specific KO) · model: HSA-Cre × raptor-flox (RAmKO) and HSA-Cre × rictor-flox (RImKO) on mixed background · muscle-specific Raptor KO → progressive dystrophy, premature death ~110d, altered fiber-type composition, metabolic changes; Rictor KO (RImKO) → no overt phenotype throughout life (oldest mice >2 years); double-KO (DmKO) phenocopies RAmKO, confirming mTORC1-specific requirement; importantly, AKT Ser473 is still hyperphosphorylated in RAmKO and DmKO muscles, indicating mTORC2 is not required for AKT Ser473 phosphorylation in skeletal muscle in vivo · n=3–10 per genotype · 562 citations · locally downloaded

[^cybulski2012]: doi:10.1016/j.cmet.2012.03.015 · Hagiwara A, Cornu M, Cybulski N, Polak P, Betz C, Trapani F, Terracciano L, Heim MH, Rüegg MA, Hall MN · in-vivo (mouse, liver-specific KO) · model: Albumin-Cre × Rictor-flox (first-author Hagiwara; commonly cited as Cybulski et al. in older literature due to co-author prominence) · liver-Rictor KO reduces glucokinase activity and SREBP1c-driven lipogenesis via impaired AKT activation, resulting in decreased hepatic glycolysis and lipogenesis · 537 citations · 100th percentile · PDF pending download at time of verification

[^soukas2009]: doi:10.1101/gad.1775409 · Soukas AA, Kane EA, Carr CE, Melo JA, Ruvkun G · in-vivo (C. elegans) · model: rict-1 null mutants (mg450, mg451 alleles) in N2 Bristol background · rict-1 loss shortens lifespan 24–43% on standard OP50 diet; on nutrient-rich HB101, rict-1 mutants paradoxically extend lifespan (~74%) due to decreased food consumption, not direct pro-longevity signaling; elevated body fat on OP50; life-span and reproductive phenotypes mediated predominantly through sgk-1 · 430 citations · n=30 animals/genotype in triplicate · locally downloaded

[^mizunuma2014]: doi:10.1111/acel.12248 · Mizunuma M, Neumann-Haefelin E, Moroz N, Li Y, Blackwell TK · in-vivo (C. elegans) · model: rict-1 mutants with tissue-specific rescue and epistasis experiments · RICT-1/mTORC2 limits longevity by directing SGK-1 to inhibit stress-response transcription factor SKN-1/Nrf in the intestine (bacterial food signals modulate this pathway); separately, neuronal RICT-1/mTORC2 functions in SGK-1-mediated pathway that increases lifespan at lower temperatures; two opposing pathways reconcile conflicting SGK-1 aging data; bacterial microenvironment influences mTORC2 function and aging · PMID: 25040785 · verified against PubMed abstract · PDF still downloading at time of verification #gap/needs-replication
