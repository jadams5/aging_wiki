---
type: protein
aliases: [BBC3, p53-upregulated modulator of apoptosis, BCL2-binding component 3]
uniprot: Q9BXH1
ncbi-gene: 27113
hgnc: 17868
mouse-ortholog: Bbc3
ensembl: ENSG00000105327
druggability-tier: 3
caused-by: []
causes: []
key-domains: [BH3 motif, intrinsically disordered N-terminus, low-complexity region]
key-ptms: [Ser10-phosphorylation]
pathways: ["[[p53-pathway]]", "[[apoptosis-pathway]]", "[[dna-damage-response]]"]
hallmarks: ["[[cellular-senescence]]", "[[stem-cell-exhaustion]]", "[[genomic-instability]]"]
known-interactors: ["[[p53]]", "[[bcl-2]]", "[[bcl-xl]]", "[[mcl-1]]", "[[bax]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Nakano 2001 and Yu 2001 discovery papers verified against primary PDFs; Slug/PUMA 2005 (Wu et al.) verified against primary PDF; Tyner 2002 and Baker 2016 verified against primary PDFs (previously verified study pages cross-checked); Chipuk 2005 closed-access (not_oa) — direct-activator and all-five-BCL-2-members claims unverifiable against full text; UniProt Q9BXH1 identity fields verified via REST API; Ensembl ENSG00000105327 not independently re-verified against Ensembl database"
---


# PUMA (BBC3)

p53-Upregulated Modulator of Apoptosis — a 193-amino-acid BH3-only member of the Bcl-2 family and the most potent inducer of apoptosis among the BH3-only proteins. Transcriptionally activated by [[p53]] in response to DNA damage, hypoxia, and oncogenic stress, PUMA bridges nuclear stress sensing to mitochondrial apoptosis execution by binding and neutralizing all five major anti-apoptotic Bcl-2 family members (BCL-2, BCL-xL, BCL-w, MCL-1, A1). Its "promiscuous" binding profile, combined with a weak direct-activator function on BAX, explains its exceptional potency. Discovered simultaneously in 2001 by Nakano and Vousden [^nakano2001] and by Yu, Zhang, Kinzler, and Vogelstein [^yu2001].

**Naming note:** The gene is officially *BBC3* (BCL2 Binding Component 3); the protein is universally referred to as PUMA in the literature. This page uses PUMA as the primary name, consistent with [[p53-pathway]].

---

## Identity

| Field | Value |
|---|---|
| UniProt | Q9BXH1 (BBC3_HUMAN) |
| NCBI Gene | 27113 |
| HGNC ID | 17868 |
| Chromosomal location | 19q13.32 |
| Length | 193 amino acids |
| MW | ~20.5 kDa |
| Isoforms | 4 (alternative splicing) |
| Mouse ortholog | Bbc3 / Puma (one-to-one) |

---

## Functional domains

- **BH3 motif (residues ~137–151)** — the sole structured interaction domain; intrinsically disordered in isolation but adopts an alpha-helical conformation upon binding the hydrophobic groove of anti-apoptotic Bcl-2 family proteins. The BH3 helix is essential for binding to BCL-2 and BCL-xL (demonstrated by co-IP in discovery papers [^nakano2001][^yu2001]); binding to BCL-w, MCL-1, and A1 attributed to later work [^chipuk2005] #gap/no-fulltext-access.
- **Intrinsically disordered N-terminus (~residues 1–28) and central disordered region (~71–138)** — most of the PUMA protein is unstructured, which is characteristic of BH3-only proteins. The disorder may facilitate binding kinetics and multiple partner engagement.
- **Low-complexity region (71–82)** — function not fully characterized. #gap/no-mechanism

PUMA lacks other BH domains (BH1, BH2, BH4) that characterize multi-domain Bcl-2 family members, consistent with its role as a pure activator/sensitizer rather than a pore-forming executioner.

---

## Post-translational modifications

| PTM | Site | Functional consequence |
|---|---|---|
| Phosphorylation | Ser10 | Annotated in UniProt; functional consequence not fully characterized #gap/no-mechanism |

PUMA is primarily regulated at the transcriptional level rather than by PTM; its short half-life (rapidly degraded in non-stressed cells) also contributes to tight regulation. #gap/needs-replication — mechanisms of PUMA protein turnover (proteasomal vs lysosomal; relevant E3 ligases) need primary citations.

---

## Core mechanism: how PUMA kills cells

PUMA operates via two partially overlapping mechanisms that together explain its exceptional potency [^chipuk2005]:

### 1. Universal anti-apoptotic neutralization (sensitizer function)

PUMA's BH3 helix binds the hydrophobic BH3-binding groove of all five canonical anti-apoptotic Bcl-2 family proteins [^chipuk2005]. Note: the discovery papers (Nakano 2001, Yu 2001) directly demonstrated binding only to BCL-2 and BCL-xL by co-immunoprecipitation; binding to BCL-w, MCL-1, and A1 is attributed to Chipuk 2005 (closed-access; not independently verifiable here) #gap/no-fulltext-access:

| Anti-apoptotic target | Significance |
|---|---|
| [[bcl-2]] | Displaced BIM, BID, tBID from sequestration; allows BAX/BAK activation |
| [[bcl-xl]] | Same; BCL-xL is major survival factor in many cell types |
| BCL-w | Contributes to survival of neurons and certain epithelial cells |
| MCL-1 | Key survival factor in hematopoietic cells; PUMA binding overcomes MCL-1-dependent resistance |
| A1/BFL-1 | Rounds out coverage; no single anti-apoptotic escape route |

By neutralizing all five targets, PUMA leaves no anti-apoptotic "escape valve" for the cell — a critical distinction from more selective BH3-only proteins such as BAD (prefers BCL-2/BCL-xL/BCL-w but not MCL-1 or A1) or NOXA (prefers MCL-1 and A1 only). The combination of these two selective BH3-only proteins essentially phenocopies PUMA's activity, supporting the mechanistic interpretation [^chipuk2005].

### 2. Direct activator vs sensitizer — contested classification #gap/contradictory-evidence

PUMA's status as a direct BAX/BAK activator is **contested** across the literature. Two competing classifications:

- **Direct activator (Chipuk 2005, Vogler 2025):** PUMA can directly engage and conformationally activate BAX in a manner analogous to BIM and BID — the basis for the original framing on this page.
- **Sensitizer/derepressor only (Chipuk 2010 "BCL-2 Family Reunion" review, Mol Cell 37:299–310, doi:10.1016/j.molcel.2010.01.025, Fig 1B):** PUMA's pan-binding profile across all five anti-apoptotic family members is necessary but **not sufficient** to qualify as a direct activator under the Chipuk 2010 framework. Chipuk 2010 explicitly classifies PUMA as a sensitizer/derepressor; only BIM and tBID retain direct activator status. The bcl-2-family-signaling.md verifier (2026-05-04) confirmed this against Chipuk 2010 Fig 1B.

Both readings have substantial support; the field has not converged. This page retains the Chipuk 2005 dual-function framing but flags the tension; downstream pages ([[bcl-2-family-signaling]], [[bak]], [[bim]], [[apoptosis-pathway]]) should refer to this section for the contested classification.

### The downstream execution pathway

PUMA activity converges on [[bax]] (and BAK) activation → mitochondrial outer membrane permeabilization (MOMP) → cytochrome c release → apoptosome formation → caspase-9/caspase-3 cascade → cell death. The PUMA → MOMP axis is the commitment point of intrinsic apoptosis; once MOMP occurs, cell death is essentially irreversible.

---

## Transcriptional regulation by p53

PUMA is among the most robustly p53-induced genes [^nakano2001][^yu2001]. The *BBC3* promoter contains two tandem p53-response elements (p53REs) that bind p53 with high affinity. Induction kinetics are rapid (detectable mRNA within 1–2 h of DNA damage) and robust across cell types.

**Stimuli that induce PUMA via p53:**
- DNA double-strand breaks (ionizing radiation, chemotherapy)
- Replication stress (UV, hydroxyurea)
- Oncogene activation (e.g., Myc, Ras)
- Hypoxia (partial; HIF-1 independent contribution via p53 stabilization)
- Oxidative stress

**p53-independent PUMA induction** also occurs via:
- FOXO3a (nutrient deprivation, PI3K/Akt pathway suppression) #gap/unsourced — FOXO3a-mediated PUMA induction is established in the literature (Sunters et al. 2003 and others) but not from Yu 2001; citation needs to be replaced with appropriate primary source
- ER stress / unfolded protein response (CHOP-dependent pathway)
- Glucocorticoids (lymphocyte-specific; relevant to immune cell apoptosis during stress)

The p53-independence of some induction pathways means PUMA can execute apoptosis even when p53 is mutated or inactivated, relevant to some cancer therapy contexts but less central to normal aging biology.

---

## Role in aging

### Central effector of p53-dependent apoptosis under chronic stress

In normal aging, persistent low-level DNA damage (from telomere erosion, replication stress, ROS) chronically activates [[p53]]. PUMA is a primary transcriptional target through which this chronic p53 activation can drive apoptosis — particularly in rapidly dividing stem and progenitor cell compartments. The aging-relevant question is whether p53 → PUMA signaling eliminates damaged cells appropriately (tumor suppression) or excessively depletes tissue stem cells (stem-cell exhaustion).

### Contribution to accelerated aging in hyperactive-p53 models

The Tyner 2002 "p53+/m" mouse model demonstrated that chronic p53 hyperactivation drives an accelerated-aging phenotype with early loss of tissue regenerative capacity [^tyner2002]. PUMA upregulation is implicated as one effector of this phenotype, though the quantitative contribution of PUMA vs other p53 transcriptional targets ([[p21]], BAX, NOXA) in the p53+/m accelerated-aging phenotype has not been resolved. #gap/no-mechanism

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | p53 → BBC3 transcription; BH3-only mechanism; BCL-2 family binding — all conserved |
| Phenotype conserved in humans? | partial | Excess p53 activity depletes stem cells in mouse models; human stem cell exhaustion involves similar pathways, but direct PUMA measurements in aged human tissues are limited #gap/unsourced |
| Replicated in humans? | no | No PUMA-targeted intervention data in humans #gap/needs-human-replication |

### PUMA in hematopoietic stem cell biology

PUMA mediates p53-dependent apoptosis in hematopoietic progenitor cells. The transcription factor Slug (SNAI2) represses PUMA expression in hematopoietic progenitors, providing protection against ionizing radiation-induced apoptosis [^slugpuma2005]. Loss of this protection (e.g., in aged bone marrow with declining Slug expression, or under chronic DNA damage) could contribute to the reduced self-renewal capacity of aged hematopoietic stem cells. #gap/needs-replication — direct evidence for PUMA as the executioner of aged-HSC depletion (vs other BH3-only proteins) is limited to indirect inference.

### PUMA in the senescent cell / senolytic context

A key insight connecting PUMA to aging biology and senolytics:

1. Senescent cells induced by DNA damage upregulate pro-apoptotic BH3-only proteins, including PUMA — a consequence of chronic p53/p21 activation. #gap/unsourced — primary citation for PUMA protein upregulation specifically in naturally senescent cells needed; Baker 2016 does not address this claim (that paper uses p16Ink4a-driven apoptosis, not PUMA).
2. However, senescent cells simultaneously upregulate anti-apoptotic Bcl-2 family members ([[bcl-xl]], BCL-2, BCL-w) as part of a survival program — these sequester BH3-only proteins in inactive complexes, allowing the senescent cell to persist rather than die. #gap/unsourced — the anti-apoptotic upregulation model in senescent cells is established in the senolytic literature (Zhu et al. 2015; Chang et al. 2016 and related work) but Baker 2016 does not discuss this mechanism; citation [^baker2016] removed from these specific claims.
3. BH3-mimetic compounds (navitoclax/ABT-263; ABT-737; the [[dasatinib]] + [[quercetin]] combination by an indirect mechanism) displace PUMA and other BH3-only proteins from anti-apoptotic sequestration, reactivating the latent apoptotic program and selectively killing senescent cells.

This model explains why senescent cells are paradoxically sensitized to BH3 mimetics despite having a loaded apoptotic machinery — the threshold has already been primed by PUMA/BIM accumulation; only the anti-apoptotic blockade needs to be relieved.

#gap/needs-replication — the direct demonstration that PUMA specifically (vs BIM or BID) is the sequestered effector responsible for senescent-cell apoptotic priming has not been resolved at a protein-level in primary aged tissues.

---

## Pathway membership

- [[p53-pathway]] — PUMA is the primary pro-apoptotic transcriptional target of p53; induced by both the canonical stress-response arm and the senescence arm of p53 signaling
- [[apoptosis-pathway]] — PUMA operates at the MOMP commitment step; upstream of cytochrome c release, downstream of BH3-only protein induction
- [[dna-damage-response]] — ATM/ATR → CHK2/CHK1 → p53 stabilization → PUMA transcription; PUMA is the distal effector linking DNA damage to cell death

---

## Key interactors

| Interactor | Interaction type | Functional consequence |
|---|---|---|
| [[p53]] | transcriptional inducer | Binds BBC3 promoter p53RE; induces PUMA expression under stress |
| [[bcl-2]] | BH3-domain binding (PUMA BH3 → BCL-2 groove) | Displaces BIM/BID from BCL-2 sequestration; enables BAX activation |
| [[bcl-xl]] | BH3-domain binding (high affinity) | Same; particularly important in lymphocytes and neurons |
| MCL-1 | BH3-domain binding (high affinity) | Overcomes MCL-1-mediated apoptotic resistance |
| [[bax]] | direct activator (weak; **contested per Chipuk 2010 Fig 1B**) | Low-level direct BAX conformational activation per Chipuk 2005, independent of BH3-groove binding; reclassified as sensitizer-only by Chipuk 2010 — see "contested classification" section |
| SLUG/SNAI2 | transcriptional repressor of BBC3 | Represses BBC3 in hematopoietic progenitors; loss of repression sensitizes to p53-dependent killing |

---

## Therapeutic implications in aging

- **Anti-senolytic context:** BH3 mimetics act partly by relieving PUMA sequestration in senescent cells, enabling their removal and delaying age-associated pathologies. See [[dasatinib]], [[quercetin]], and [[fisetin]] pages and the [[interventions/pharmacological/senolytics]] category page.
- **Stem cell protection:** Transient PUMA inhibition during periods of acute stress (radiation, chemotherapy) has been explored as a strategy to protect the hematopoietic stem cell pool [^slugpuma2005]. Whether this approach could be applied to protect against age-related stem cell depletion is a conceptual extension not yet tested in aging contexts. #gap/needs-human-replication
- **Cancer risk tradeoff:** PUMA suppression to protect stem cells must be weighed against reduced p53-dependent tumor suppression — the same antagonistic pleiotropy tension that runs through [[p53]]-centered aging biology. No clinical framework for this tradeoff exists. #gap/dose-response-unclear

---

## Discovery

Two independent groups published back-to-back in *Molecular Cell* in 2001:

- **Nakano and Vousden 2001** — used microarray screening of p53-inducible SAOS-2 (p53-null osteosarcoma) and H1299-p53 cells to identify PUMA as a novel BH3-only protein robustly induced by p53 but not by p53 mutants lacking transactivation activity; showed that PUMA-α and PUMA-β overexpression alone is sufficient to induce rapid apoptosis (sub-G1 fraction ~26–28% at 24 hr in H1299 cells; ~82% at 24 hr in SAOS-2 cells); antisense oligonucleotide knockdown of PUMA partially reduced p53-mediated apoptosis, supporting a specific but not exclusive role [^nakano2001]. Note: PUMA genetic knockout data is from later work (Jeffers et al. 2003; Villunger et al. 2003), not from this discovery paper.
- **Yu, Zhang, Hwang, Kinzler, and Vogelstein 2001** — used SAGE (serial analysis of gene expression) of DLD1 colorectal cancer cells with doxycycline-inducible p53 to identify PUMA; showed PUMA is induced >10-fold within 9 hr of p53 activation and is rapidly induced by 5-FU and adriamycin in p53-wild-type HCT116 and SW48 cells but not in p53-null HCT116 cells; demonstrated PUMA co-immunoprecipitates with BCL-2 and BCL-xL (BH3-domain dependent); PUMA overexpression reduced colony formation by >1000-fold across four cancer cell lines regardless of p53 genotype. Originally named the gene JFY-1; agreed with Nakano/Vousden to adopt "PUMA" [^yu2001]. Note: the paper did not test binding to BCL-w, MCL-1, or A1.

Both groups simultaneously defined the protein's identity, p53 dependence, and pro-apoptotic function. The Nakano/Vousden paper introduced the "PUMA" name.

---

## Limitations and open questions

| Gap | Tag | Notes |
|---|---|---|
| PUMA vs other BH3-only proteins in aged tissues | #gap/needs-replication | Whether PUMA specifically (vs BIM or NOXA) drives stem-cell depletion in normal aging is not established |
| Direct quantification in aged human tissues | #gap/unsourced | PUMA protein/mRNA levels in aged human bone marrow, muscle, or gut not well-documented |
| Ser10 phosphorylation functional significance | #gap/no-mechanism | The only known PTM on PUMA; kinase and functional consequence not fully characterized |
| Protein turnover mechanisms | #gap/needs-replication | E3 ubiquitin ligases targeting PUMA for proteasomal degradation not fully defined |
| Quantitative contribution in Tyner 2002 phenotype | #gap/no-mechanism | Relative share of PUMA vs p21, BAX, NOXA in hyperactive-p53 accelerated aging not resolved |
| Therapeutic window for PUMA modulation | #gap/dose-response-unclear | No clinical framework for transient PUMA suppression to protect stem cells vs cancer risk increase |
| Human trial data | #gap/needs-human-replication | All aging-relevant PUMA intervention data is preclinical; no direct PUMA-targeting agents in human trials for aging indications |

---

## Footnotes

[^nakano2001]: [[studies/nakano-2001-puma-p53-proapoptotic]] · doi:10.1016/s1097-2765(01)00214-3 · n=N/A · in-vitro · model: SAOS-2 (p53-null osteosarcoma), H1299-p53 inducible, RKO, MCF-7, U2OS · archive: locally downloaded

[^yu2001]: [[studies/yu-2001-puma-bbc3-colorectal]] · doi:10.1016/s1097-2765(01)00213-1 · n=N/A · in-vitro · model: DLD1 colorectal (p53-inducible via tet-off), HCT116, SW48, SW480, H1299 · SAGE discovery method · archive: locally downloaded

[^chipuk2005]: doi:10.1126/science.1114297 · in-vitro (biochemical + cell-based) · model: cell-free systems; HCT116 colorectal cells · key finding: PUMA displaces direct activators (BIM, BID) from BCL-xL sequestration AND has weak direct BAX activation; explains superior potency vs selective BH3-only proteins · 541 citations · archive: not OA; not locally downloaded #gap/no-fulltext-access

[^tyner2002]: [[studies/tyner-2002-p53-mutant-aging]] · doi:10.1038/415045a · n=35 (p53+/m) + 56 (p53+/+) · in-vivo (transgenic mouse) · p<0.0001 survival · model: p53+/m C57BL/6×129/Sv · 1,434 citations · locally downloaded

[^slugpuma2005]: doi:10.1016/j.cell.2005.09.029 · Wu et al. 2005 · in-vivo (mouse) · n=8–10 per genotype group · model: slug−/− and slug+/− mice (C57BL6.SJL background); 7.0 Gy TBI; slug−/−puma−/− double-KO rescue experiment (n=8–10/group, p<0.0001) · key finding: Slug directly represses puma transcription at intron-1 SBS3 Slug binding site; slug−/− mice radiosensitive due to excess puma-dependent apoptosis in myeloid progenitors; puma loss rescues slug−/− radiosensitivity · archive: locally downloaded

[^baker2016]: doi:10.1038/nature16932 · Baker et al. 2016 · in-vivo (naturally aged INK-ATTAC transgenic mice) · n=multiple cohorts (mixed C57BL/6-129Sv-FVB and congenic C57BL/6) · model: p16Ink4a-promoter-driven FKBP-Casp8 apoptosis induction from 12 months; AP20187 biweekly · median lifespan extended 27% (mixed background) and 24% (C57BL/6) · paper uses p16Ink4a as the senescent-cell driver, not PUMA; does NOT characterize BCL-2-family anti-apoptotic upregulation in senescent cells; citation retained here for lifespan-extension context only · locally downloaded
