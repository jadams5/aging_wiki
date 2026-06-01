---
type: protein
aliases: [RPTOR, Raptor, "regulatory-associated protein of mTOR", KIAA1303]
uniprot: Q8N122
ncbi-gene: 57521
hgnc: 30287
mouse-ortholog: Rptor
ensembl: ENSG00000141564
druggability-tier: 1
caused-by: []
causes: []
key-domains: [HEAT-repeat cluster, RNC domain, WD40 repeats]
key-ptms: [Ser722-phosphorylation, Ser792-phosphorylation, Ser863-phosphorylation, Thr700-O-GlcNAcylation, Lys1097-acetylation]
pathways: ["[[mtor]]", "[[ampk]]", "[[insulin-igf1]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[disabled-macroautophagy]]", "[[cellular-senescence]]"]
known-interactors: ["[[mtor-kinase]]", "[[s6k1]]", "[[4ebp1]]", "[[ulk1]]", "[[tfeb]]", "[[ampk]]", "[[pras40]]", "[[mLST8]]", "[[deptor]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Primary-source PDFs verified for all 8 cited DOIs (Kim 2002, Gwinn 2008, Schalm 2003, Nojima 2003, Bentzinger 2008, Polak 2008, Coffman 2014 read in full; Liu & Sabatini 2020 verified via PMC full text). Canonical-DB identity fields (UniProt Q8N122, NCBI Gene 57521, HGNC 30287, Ensembl ENSG00000141564) not independently re-verified against databases — recommend cross-check on next lint pass."
---

# Raptor (RPTOR)

Raptor (Regulatory-Associated Protein of mTOR) is the defining scaffold subunit of [[mtor|mTORC1]], the growth- and nutrient-sensing kinase complex. Its presence — as opposed to RICTOR, which defines mTORC2 — is what makes mTORC1 distinct. Raptor performs two coupled jobs: anchoring mTOR to the lysosomal surface under nutrient-replete conditions, and recruiting substrates ([[s6k1]], [[4ebp1]], [[ulk1]], [[tfeb]]) to the mTOR kinase via recognition of their **TOR signaling (TOS) motifs**. Because virtually every aging-relevant output of mTOR (autophagy suppression, protein synthesis, cellular senescence, lysosomal biogenesis) is gated through Raptor-mediated substrate selection, Raptor is the proximate effector of nutrient-sensing in the context of aging biology.

---

## Identity

| Field | Value |
|---|---|
| UniProt | Q8N122 (RPTOR_HUMAN) |
| NCBI Gene | 57521 |
| HGNC | 30287 |
| Ensembl | ENSG00000141564 |
| Mouse ortholog | Rptor (one-to-one) |
| Length | 1,335 amino acids (~150 kDa) |
| GenAge | Not listed — RPTOR has no direct GenAge entry; aging relevance is established via tissue-specific KO models |

---

## Functional domains

- **N-terminal HEAT-repeat cluster** — forms an extended, elongated structure that contacts mTOR and shapes the geometry of the mTORC1 complex. Mutations in this region disrupt mTORC1 assembly.
- **Raptor N-terminal conserved (RNC) domain** (residues ~89–180) — the primary substrate-docking surface. Binds the TOS motif on substrates and is required for mTOR-mediated phosphorylation of S6K1 and 4E-BP1 [^schalm2003][^nojima2003]. Cross-linking/MS analysis places this domain at the 4E-BP1 interaction interface [^coffman2014].
- **C-terminal WD40 repeat domain** (7 WD repeats, residues ~1020–1335) — beta-propeller fold; contributes to overall scaffolding and complex stability. The WD40 domain family is commonly used for protein-protein interaction platforms.

---

## Post-translational modifications

| PTM | Site | Kinase | Consequence |
|---|---|---|---|
| Phosphorylation | Ser722, Ser792 | AMPK | Creates 14-3-3 binding sites; reduces substrate-presenting capacity → mTORC1 inhibition [^gwinn2008] |
| Phosphorylation | Ser863 | mTOR / MAPK8 / NLK | Regulatory hub; modulates mTORC1 activity |
| Phosphorylation | Ser877 | TBK1 | Negative regulation of mTORC1 |
| O-GlcNAcylation | Thr700 | OGT | Glucose-sensing input; promotes mTORC1 activity |
| Acetylation | Lys1097 | — | Enhances mTORC1 activity |

---

## mTORC1 holocomplex architecture

Raptor binds three other core subunits to form mTORC1 [^kim2002]:

- **mTOR** — catalytic kinase subunit (FRAP/RAFT1/RAPT1)
- **mLST8** (GβL) — stabilizes the kinase domain; required for full activity
- **DEPTOR** — endogenous inhibitor; displaced upon complex activation
- **PRAS40** — additional inhibitory subunit; phosphorylated and released upon insulin stimulation

The complex dimerizes to form a megaDalton "lozenge"-shaped particle (cryo-EM and crystallographic characterization per Liu & Sabatini 2020), with dimerization along the mTOR HEAT repeats and the mTOR–Raptor interface. Raptor occupies a peripheral position that simultaneously bridges the mTOR FAT domain and the substrate access surface.

**mTORC1 vs mTORC2 disambiguation:** mTORC2 uses [[rictor]] (not Raptor) as its defining scaffold and is insensitive to rapamycin in the short term. Raptor is strictly mTORC1-specific; all rapamycin effects on autophagy, S6K1, and 4E-BP1 are mediated through the Raptor-containing complex.

---

## Substrate recruitment: the TOS motif

Raptor is a **substrate-recruiting scaffold**, not a passive structural element. It recognizes a short linear motif — the **TOR signaling (TOS) motif** (canonical sequence: **F-x-x-x-L**, sometimes written FxLW for the S6K1 version) — present on the canonical mTORC1 substrates [^schalm2003][^nojima2003]:

| Substrate | TOS motif location | Outcome when phosphorylated by mTOR |
|---|---|---|
| [[s6k1]] (p70-S6K) | N-terminal | S235/S236 phosphorylation → ribosome biogenesis, cap-dependent translation |
| [[4ebp1]] | C-terminal (FEMDI motif, ~residues 114–118) | T37/T46/S65/T70 phosphorylation → release of eIF4E → cap-dependent translation |
| [[ulk1]] | C-terminal (non-canonical) | S757 phosphorylation (human; S758 mouse) → inhibition of autophagy initiation |
| [[tfeb]] | — | S142/S211 phosphorylation → cytoplasmic retention → lysosomal biogenesis suppressed |

Without TOS-motif contact through Raptor, mTOR does not efficiently phosphorylate any of these substrates. This is why Raptor deletion is functionally equivalent to mTOR kinase inactivation for the mTORC1 substrate set, and why tissue-specific Raptor KO experiments are the cleanest way to dissect mTORC1 function in vivo.

---

## Lysosomal recruitment and amino acid sensing

mTORC1 must be localized to the lysosomal membrane to be activated by Rheb GTPase. This recruitment is Raptor-dependent: Raptor directly interacts with Rag GTPase heterodimers (RagA/B–RagC/D) and the Ragulator complex on the lysosomal surface [^liusabatini2020]. Amino acid sufficiency is sensed by upstream sensors:

- **Sestrin2** — senses leucine; in the absence of leucine, Sestrin2 inhibits GATOR2, preventing RagA/B activation
- **CASTOR1** — senses arginine; similarly gates GATOR2
- **SAMTOR** — senses SAM (methionine metabolite)

When amino acids are present, Rag GTPases are loaded with GTP and recruit the Raptor-containing mTORC1 complex to the lysosome, where Rheb (activated by growth factor signaling via TSC1/2) can stimulate mTOR kinase activity.

| Dimension | Status | Notes |
|---|---|---|
| Lysosomal recruitment mechanism conserved in humans? | yes | Rag GTPases, Ragulator, and GATOR1/2 architecture confirmed in human cells |
| Amino acid sensing via Sestrin2/CASTOR1 conserved? | yes | Both confirmed in human cell lines and patient-derived material |
| Replicated in humans? | yes | Core mechanism well-established; Raptor-dependent lysosomal localization confirmed in human cell biology |

---

## Role in aging

### Why Raptor is central to aging biology

Raptor is the bottleneck through which all mTORC1 substrate phosphorylation is channeled. The two best-validated aging interventions that target nutrient-sensing — **rapamycin** and **caloric restriction** — both act by reducing Raptor-mediated substrate delivery (rapamycin by partial occlusion of substrate entry into the mTOR kinase active site via FKBP12-rapamycin binding the FRB domain; CR by reducing Rag-GTPase-mediated lysosomal recruitment). Every mTOR-aging story is, mechanistically, a Raptor story [^liusabatini2020].

### Tissue-specific knockout phenotypes

Raptor is embryonic lethal when deleted systemically — mTORC1 is essential for development. Tissue-specific KOs reveal the tissue-level trade-offs:

**Skeletal muscle-specific Raptor KO (Bentzinger et al. 2008):**

Mice with Raptor ablated specifically in skeletal muscle (using HSA-Cre — human skeletal actin promoter, active from the earliest stages of myotube formation) developed a progressive muscular dystrophy with reduced muscle fiber size, loss of oxidative capacity (reduced PGC1α, PPARγ, COX IV), and loss and mislocalization of intermyofibrillar mitochondria [^bentzinger2008]. Rictor KO in the same tissue had no detectable phenotype, confirming the effect is mTORC1-specific. This establishes that basal mTORC1 signaling through Raptor is required to maintain skeletal muscle structure — a finding with direct relevance to [[sarcopenia]] (where mTORC1 hyper-activation in aged muscle is paradoxically associated with anabolic resistance). #gap/needs-replication — the HSA-Cre model ablates Raptor from the earliest stages of muscle development (not adult-onset); conditional adult-onset ablation studies would better model the aging context.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | mTORC1/Raptor axis in muscle is conserved |
| Phenotype conserved in humans? | partial | Human Raptor-null muscle has not been studied; anabolic resistance in aged human muscle is well-documented but causal role of Raptor specifically is not established |
| Replicated in humans? | no | #gap/needs-human-replication |

**Adipose-specific Raptor KO (Polak et al. 2008):**

Adipose-tissue-specific Raptor deletion produced lean mice with improved insulin sensitivity, reduced adipocyte hypertrophy, and enhanced mitochondrial uncoupling (elevated UCP1 in white adipose) [^polak2008]. This metabolic improvement is consistent with the known effect of rapamycin on reducing adipogenesis, and suggests that Raptor-mediated mTORC1 in fat tissue drives the metabolic deterioration associated with obesity-linked aging. #gap/needs-replication — single study; long-term metabolic aging phenotypes in adipose-Raptor-KO mice not reported.

### AMPK phosphorylation: the metabolic checkpoint

AMPK inhibits mTORC1 through two parallel mechanisms, one of which is direct phosphorylation of Raptor. Gwinn et al. 2008 showed that AMPK phosphorylates Raptor at **Ser722 and Ser792** in response to energy stress (elevated AMP:ATP ratio) [^gwinn2008]. This phosphorylation creates 14-3-3 protein binding sites on Raptor, and 14-3-3 binding sterically reduces the substrate-recruiting capacity of Raptor. The functional result: mTORC1 substrate phosphorylation (S6K1, 4E-BP1, ULK1) falls within minutes of AMPK activation, without requiring degradation of mTOR or Raptor themselves. This reversible, PTM-based inhibition is how AMPK acutely enforces a metabolic checkpoint — blocking anabolic growth while energy is limiting.

Aging relevance: AMPK activity declines with age in multiple tissues. Reduced AMPK → less Ser722/Ser792 phosphorylation of Raptor → chronically elevated mTORC1 substrate presentation → suppressed autophagy and elevated protein synthesis in the context of declining proteostasis. The AMPK–Raptor axis is thus a molecular pivot linking energetic decline with [[deregulated-nutrient-sensing]] and [[disabled-macroautophagy]].

### Rapamycin mechanism at Raptor

Rapamycin acts through FKBP12: FKBP12-rapamycin binds the FRB domain of mTOR and, together with PRAS40, partially occludes substrate entry into the mTOR kinase active site [^liusabatini2020]. This is why rapamycin preferentially inhibits mTORC1 (where Raptor presents substrates) but has limited short-term effect on mTORC2 (where RICTOR, not Raptor, is the scaffold). Long-term rapamycin exposure can disrupt mTORC2 assembly indirectly by sequestering free mTOR, but this is secondary. See [[rapamycin]] for the full pharmacology and lifespan-extension evidence.

---

## Pathway membership

- [[mtor]] — core structural and functional component of mTORC1; Raptor is the canonical mTORC1 marker
- [[ampk]] — downstream target: AMPK phosphorylates Raptor Ser722/Ser792 to inhibit mTORC1
- [[autophagy]] — Raptor-mTORC1 phosphorylates ULK1 (Ser757) to suppress autophagy initiation; dephosphorylation upon starvation is the canonical on-switch for autophagy
- [[insulin-igf1]] — insulin signaling via PI3K-Akt-TSC1/2-Rheb converges on Raptor-containing mTORC1 at the lysosome

---

## Key interactors

| Interactor | Interaction type | Functional consequence |
|---|---|---|
| mTOR kinase | direct (complex component) | Core kinase; Raptor presents substrates to mTOR catalytic site |
| [[s6k1]] | substrate docking via TOS motif | S6K1 phosphorylation → ribosome biogenesis, translation |
| [[4ebp1]] | substrate docking via TOS motif | 4E-BP1 hyperphosphorylation → eIF4E release → cap-dependent translation |
| [[ulk1]] | substrate docking (non-canonical TOS) | ULK1 Ser757 phosphorylation → autophagy inhibition |
| [[tfeb]] | substrate docking | TFEB cytoplasmic retention → lysosomal biogenesis suppressed |
| [[ampk]] | upstream kinase | Ser722/Ser792 phosphorylation → 14-3-3 binding → reduced substrate recruitment |
| PRAS40 | inhibitory subunit within mTORC1 | Competes with substrates for Raptor binding; released upon insulin stimulation |
| Rag GTPases | lysosomal recruitment | Raptor binds RagA/B-RagC/D → mTORC1 tethered to lysosome when amino acids are sensed |
| [[mLST8]] | complex stabilizer | Required for mTOR kinase domain integrity |
| [[deptor]] | endogenous inhibitor | Binds and inhibits mTOR; displaced upon activation |

---

## Pharmacological modulation

Raptor has no approved direct inhibitors. mTORC1 is modulated pharmacologically through:

- **Rapamycin and rapalogs** (everolimus, temsirolimus) — allosteric; block substrate access to mTOR within the Raptor complex. See [[rapamycin]].
- **ATP-competitive mTOR kinase inhibitors** (Torin1, Torin2, INK128/MLN0128) — inhibit both mTORC1 and mTORC2; more complete mTORC1 substrate inhibition (including rapamycin-insensitive phosphorylation of 4E-BP1 Thr37/46) than rapalogs. Not yet approved for aging indications.
- **Indirect via AMPK activators** (metformin, AICAR, exercise): elevated AMPK → Raptor Ser722/Ser792 phosphorylation → mTORC1 inhibition. This is a physiological route and the mechanistic basis of metformin's proposed anti-aging effects. See [[ampk]].

---

## Aging interventions that modulate Raptor function

- [[rapamycin]] — most direct pharmacological intervention; FKBP12-rapamycin binds the mTOR FRB domain and partially occludes substrate entry into the kinase active site. Extends lifespan in multiple mammalian studies.
- [[caloric-restriction]] — reduces amino acid input → Rag GTPase activity → mTORC1 lysosomal recruitment; net effect is reduced Raptor-mediated substrate phosphorylation
- [[exercise]] — activates AMPK → Raptor Ser722/Ser792 phosphorylation → transient mTORC1 inhibition during exercise, followed by a post-exercise anabolic window
- [[metformin]] — complex I inhibition → elevated AMP:ATP → AMPK activation → Raptor phosphorylation; mTORC1 inhibition is a major proposed longevity mechanism. See [[tame-trial]].

---

## Limitations and open questions

| Gap | Tag | Notes |
|---|---|---|
| Adult-onset conditional Raptor KO in aging models | #gap/needs-replication | Most tissue-specific KOs use developmental promoters; need inducible adult-onset models to mimic therapeutic intervention |
| Human tissue-level Raptor activity data with age | #gap/needs-human-replication | Raptor phosphorylation status in aged human tissues not well-characterized across tissue types |
| TFEB regulation via Raptor in aged cells | #gap/needs-replication | TFEB is a key Raptor substrate for lysosomal biogenesis; its dysregulation in aging is understudied at the Raptor level specifically |
| Raptor Ser863 phosphorylation in aging | #gap/unsourced | Ser863 (mTOR/MAPK8 site) is a regulatory hub but its age-dependent dynamics are not established |
| Raptor not in GenAge | — | RPTOR does not appear in GenAge as of 2026-05-04; no direct longevity-gene entry. Aging relevance is inferred from mTOR pathway genetics and tissue-KO phenotypes |
| ULK1 TOS-motif stoichiometry | #gap/needs-replication | ULK1 uses a non-canonical TOS motif; the quantitative affinity of Raptor for ULK1 vs S6K1/4E-BP1 and implications for autophagy threshold are not well characterized |

---

## Footnotes

[^kim2002]: doi:10.1016/s0092-8674(02)00808-5 · Kim DH, Sarbassov DD, Ali SM et al. · in-vitro + in-vivo (yeast/mammalian) · n=N/A · model: HEK293 cells, Drosophila · foundational Raptor discovery; 2,952 citations · locally downloaded

[^gwinn2008]: [[studies/gwinn-2008-ampk-raptor-checkpoint]] · doi:10.1016/j.molcel.2008.03.003 · Gwinn DM, Shackelford DB, Egan DF et al. · in-vitro + in-vivo (mouse) · n=N/A · model: MEFs, TSC2-null cells, mouse liver · 3,704 citations; 100th citation percentile · locally downloaded

[^schalm2003]: doi:10.1016/s0960-9822(03)00329-4 · Schalm SS, Fingar DC, Sabatini DM, Blenis J · in-vitro (mutagenesis, co-immunoprecipitation) · model: HEK293, U2OS cells · TOS motif requirement for Raptor-mediated 4E-BP1 phosphorylation; 4E-BP1 TOS motif at C-terminus (FEMDI, F114A mutant) · 501 citations · locally downloaded

[^nojima2003]: doi:10.1074/jbc.c200665200 · Nojima H, Tokunaga C et al. · in-vitro · model: HEK293 · Raptor N-terminal region (RNC + HEAT repeats) binds TOS motifs of S6K1 (N-terminal) and 4E-BP1 (C-terminal, F114A-sensitive) · 667 citations · locally downloaded

[^bentzinger2008]: doi:10.1016/j.cmet.2008.10.002 · Bentzinger CF, Romanino K, Cloëtta D et al. · in-vivo (mouse, muscle-specific KO) · model: HSA-Cre × Rptor-flox · progressive muscular dystrophy phenotype; rictor KO had no phenotype; none survived past ~190 days · 630 citations · locally downloaded

[^polak2008]: doi:10.1016/j.cmet.2008.09.003 · Polak P, Cybulski N, Feige JN et al. · in-vivo (mouse, adipose-specific KO) · model: aP2-Cre × Rptor-flox C57BL/6 (4–5 backcrosses) · lean phenotype (18% lighter on chow; 70% less WAT on HFD), improved insulin sensitivity, 25-fold UCP1 upregulation in WAT driving elevated energy expenditure · 483 citations · locally downloaded

[^coffman2014]: doi:10.1074/jbc.M113.482067 · Coffman K, Yang B, Lu J et al. · in-vitro (chemical cross-linking + MS) · model: purified mTORC1 components · RNC domain (residues 89–180) identified as primary 4E-BP1 contact site · 2014

[^liusabatini2020]: doi:10.1038/s41580-019-0199-y · Liu GY, Sabatini DM · review (Nat Rev Mol Cell Biol 2020) · n=N/A · model: review of mammalian + yeast data · 2,577 citations · OA via PMC (PMC7102936); download failed locally
