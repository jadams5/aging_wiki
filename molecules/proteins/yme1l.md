---
type: protein
aliases: [YME1L, i-AAA protease, IAP-AAA, MEG4, FTSH1, YME1-like 1 ATPase, ATP-dependent zinc metalloprotease YME1L1]
uniprot: Q96TA2
ncbi-gene: 10730
hgnc: 12843
ensembl: ENSG00000136758
genage-id: null
mouse-ortholog: Yme1l
key-domains: [AAA-ATPase, peptidase-M41, transmembrane-anchor]
key-ptms: [MPP-processing, OMA1-dependent-degradation]
pathways: ["[[mitochondrial-dynamics-pathway]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[loss-of-proteostasis]]"]
sens-categories: []
known-interactors: ["[[oma1]]", "[[opa1]]", "[[timm17a]]", "[[prohibitin]]"]
druggability-tier: 4
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: ["[[mitochondrial-dysfunction]]"]
causes: ["[[opa1]]", "[[mitophagy]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Stiburek 2012 (MBC) and Hartmann 2016 (eLife) verified against primary source PDFs. Wai 2015 (Science), Anand 2014 (JCB), MacVicar 2016 (JCS), and Leonhard 1996 (EMBO J) are closed-access (not_oa); claims attributed to them are flagged accordingly. Elancheliyan 2024 (Cell Reports) download failed despite gold OA status; TIMM17A/prohibitin claims remain unverified against primary PDF — recommend retry. Canonical-DB identity fields verified against UniProt REST + NCBI Gene + HGNC REST (HGNC corrected 17175→12843)."
---


# YME1L1

The **i-AAA protease** (intermembrane-space-facing AAA+ ATPase) of the mitochondrial inner membrane. YME1L1 performs constitutive, housekeeping cleavage of long-form OPA1 (L-OPA1) to generate short-form S-OPA1, thereby setting the steady-state balance between fusion-competent and fusion-incompetent OPA1 isoforms. Together with the stress-activated protease [[oma1]], YME1L1 constitutes a two-protease rheostat that gates mitochondrial network dynamics and, when imbalanced, drives the mitochondrial fragmentation seen in [[heart-failure]] and aging tissues.

## Identity

- **UniProt:** Q96TA2 (YMEL1_HUMAN)
- **NCBI Gene:** 10730
- **HGNC symbol:** YME1L1
- **Ensembl:** ENSG00000136758
- **Mouse ortholog:** Yme1l (one-to-one; functional conservation demonstrated)
- **Length:** 773 amino acids (canonical isoform)
- **Aliases:** YME1L, i-AAA protease, IAP-AAA, MEG4, FTSH1, presenilin-associated metalloprotease (PAMP), YME1-like 1 ATPase

**Naming note.** This page uses the bare token `[[yme1l]]` (without the trailing "1") consistent with the OPA1 page's `known-interactors:` list. The gene name is formally YME1L1 (Human Genome Nomenclature Committee); the page filename `yme1l.md` is a deliberate short form. Both `YME1L` and `YME1L1` are listed in `aliases:`.

## Structure and topology

YME1L1 is a single-pass transmembrane protein with its catalytic domain protruding into the **mitochondrial intermembrane space (IMS)**. This "i" orientation (IMS-facing) distinguishes it from the m-AAA protease (matrix-facing; AFG3L2/SPG7 subunits), which together with YME1L1 constitutes the dual-surface mitochondrial AAA protease system [^leonhard1996].

Key structural features:
- **N-terminal AAA+ ATPase domain** — hexamerizes into a ring that uses ATP hydrolysis to unfold substrates and translocate them into the catalytic chamber
- **C-terminal peptidase M41 domain** — zinc metalloprotease active site (Zn²⁺-coordinating HExxH motif); faces the IMS
- **Single transmembrane helix** (residues 296–316) — IMM anchor; orients catalytic domain toward IMS
- **Mitochondrial targeting sequence** — cleaved co-translationally by the mitochondrial processing peptidase (MPP) upon import

The foundational topology was established for the yeast homolog Yme1p, whose catalytic sites were shown to face opposite membrane surfaces to the m-AAA system [^leonhard1996]. The mammalian enzyme retains this IMS orientation.

## Function

### Constitutive OPA1 cleavage (S2 site)

Under basal, unstressed conditions YME1L1 is the primary protease responsible for converting L-OPA1 to S-OPA1 by cleaving at the **S2 site** [^anand2014]. This constitutive cleavage generates the short OPA1 (S-OPA1) isoforms required for the correct steady-state balance of L-OPA1:S-OPA1. Loss of YME1L1 leads to accumulation of unprocessed L-OPA1 (bands a and b) and loss of constitutively-generated S-OPA1 isoform d [^stiburek2012].

**Note on S1/S2 nomenclature.** Per Anand 2014 and confirmed by the Hartmann 2016 schematic (Fig 3C): YME1L1 processes OPA1 at site **S2**; OMA1 processes OPA1 at site **S1**. This is the reverse of the initial seeder assignment. Claims in any downstream page citing "YME1L1 cleaves S1" should be corrected to S2 #gap/needs-replication — the Anand 2014 source defining S1/S2 is closed-access and the site numbering should be confirmed against the primary PDF when access becomes available.

Critically, YME1L1 activity is **constitutive** — it operates under normal nutrient and redox conditions without requiring stress activation. This is the mechanistic opposite of [[oma1]], which is quiescent under basal conditions and activated specifically by membrane depolarization, oxidative stress, or mtDNA damage.

### The OMA1/YME1L1 switch

The two-protease system constitutes a stress-responsive switch over OPA1 isoform balance [^anand2014]:

| Condition | YME1L1 activity | OMA1 activity | OPA1 outcome | Network state |
|---|---|---|---|---|
| Basal (normal) | Active | Low | L-OPA1 + S-OPA1 (mixed) | Fusion-competent |
| Mild stress | Suppressed | Low | L-OPA1 dominant | — |
| Acute stress (depol, ROS) | Low | Activated | S-OPA1 only (complete cleavage at S1) | Fragmented |
| Chronic/aging | Reduced | Elevated | S-OPA1 dominant | Fragmented, fusion-deficient |

Under stress, OMA1 becomes hyperactive and **cleaves OPA1 at the S1 site** driving complete conversion to S-OPA1 and mitochondrial fragmentation. YME1L1 itself is also degraded under stress conditions — Rainbolt et al. 2016 demonstrated reciprocal degradation of YME1L and OMA1 adapts mitochondrial proteolytic activity during stress [^anand2014]. This means YME1L1 is both a substrate regulator and subject to stress-coupled turnover.

#gap/needs-replication — The kinetics of YME1L1 degradation by OMA1 under defined stress conditions have been shown in cell culture; in vivo temporal dynamics in aging tissues are not fully characterized.

### Additional substrates: TIMM17A and mitochondrial proteostasis

Beyond OPA1, YME1L1 controls the abundance of **TIMM17A** (a core subunit of the TIM23 import translocase). Prohibitin complexes protect TIMM17A from YME1L1-mediated degradation; disruption of this protective interaction leads to TIM23 instability and impaired mitochondrial protein import [^elancheliyan2024]. This positions YME1L1 as a **master regulator of inner membrane proteostasis** with functions extending beyond fusion dynamics:

- **Protein import capacity** — through TIMM17A turnover
- **Respiratory chain assembly** — YME1L1 loss causes excessive accumulation of non-assembled respiratory chain subunits Ndufb6, Cox4, and ND1 in the inner membrane; rotenone-sensitive (complex I-specific) respiration is diminished ~60% (CI/CII ratio), while complex IV activity is unaffected [^stiburek2012]
- **Apoptotic resistance** — YME1L1-depleted cells show impaired apoptotic resistance: increased PARP cleavage following staurosporine or H₂O₂ treatment compared to controls [^stiburek2012]

**PRELID1 as YME1L1 substrate.** Hartmann 2016 (Fig 3B) shows PRELID1 accumulates in primary fibroblasts from the p.R149W patient, and in Yme1l1-KO MEFs — citing Potting et al. 2013 (doi:10.1016/j.cmet.2013.07.008) as the primary source establishing that PRELID1 is constitutively degraded by YME1L1. This removes the #gap/unsourced tag for the YME1L1–PRELID1 relationship. The claim that PRELID1 degradation relates specifically to *cardiolipin* remodeling (as opposed to phosphatidic acid transport, which is what Potting 2013 established) remains to be confirmed from the Potting 2013 full text — PRELID1/TRIAP1 complexes transport phosphatidic acid (PA) in the IMS; PA is a cardiolipin precursor. The specific cardiolipin framing should be updated when Potting 2013 is verified.

## Role in aging

### Cardiac aging and heart failure

The most direct evidence for YME1L1 in aging-relevant disease comes from cardiomyocyte-specific knockout in mice. Wai et al. 2015 (*Science*) demonstrated that ablation of YME1L1 in cardiomyocytes causes **dilated cardiomyopathy** recapitulating heart failure: loss of YME1L1 → unrestrained OMA1 hyperactivation → complete L-OPA1 → S-OPA1 conversion → mitochondrial fragmentation → loss of cristae integrity → OXPHOS failure → cardiac dysfunction [^wai2015]. This is a gain-of-function-by-loss phenotype: the pathology is caused not directly by the absence of YME1L1 but by the consequent OMA1 hyperactivity and loss of L-OPA1.

Reciprocally, Wai et al. 2015 showed that **concurrent deletion of both OMA1 and YME1L1** rescued the cardiomyopathy, confirming OMA1 hyperactivity as the proximate driver rather than loss of a direct YME1L1 function [^wai2015].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | OPA1 S2 (YME1L1) and S1 (OMA1) cleavage sites, YME1L1 and OMA1 orthologs present; identical topology |
| Phenotype conserved in humans? | partial | Homozygous loss-of-function mutations in humans cause neurological disease (optic atrophy, leukoencephalopathy) — see below; cardiac-specific aging context not directly tested |
| Replicated in humans? | no | Mouse cardiomyocyte-specific knockout finding; no human equivalent genetic model |

#gap/needs-human-replication — The mouse cardiac-specific YME1L1 KO → cardiomyopathy axis has not been directly validated in human cardiac aging.

### Human loss-of-function mutations (OPA11)

A homozygous YME1L1 missense mutation (c.616C>T, **p.R149W**; NP_055078), located in the mitochondrial targeting sequence (MTS), was identified as the cause of a novel infantile-onset mitochondriopathy in a consanguineous Saudi Arabian family [^hartmann2016]. Four affected children (patients II.5, II.8, II.9, II.11) present with intellectual disability, motor developmental delay, expressive speech delay, optic nerve atrophy, hearing impairment, and leukoencephalopathy. The mutation abolishes MPP recognition, preventing cleavage of the YME1L1 precursor to its mature form, which is then rapidly auto-degraded [^hartmann2016].

Patient fibroblasts show mitochondrial network fragmentation consistent with impaired OPA1 processing (reduced S-OPA1 isoform d), and accumulation of the YME1L1 substrate PRELID1 [^hartmann2016]. YME1L1^R149W^ is a hypomorphic allele retaining partial proteolytic activity (explaining why homozygous patients survive while complete Yme1l1 KO is embryonic lethal in mice).

The R149W mutation also demonstrates the importance of MPP processing for YME1L1 function — it does not impair i-AAA complex assembly (~2 MDa) but prevents generation of the mature 63-kDa form [^hartmann2016].

This human Mendelian disease validates the mammalian YME1L1–OPA1 axis in vivo, but the neurological tissue specificity of the human disease (versus cardiac in the mouse model) reflects differential dependence on mitochondrial fusion by tissue type. #gap/needs-replication — Only one family (4 affected children) has been reported; the full phenotype spectrum may be broader.

### Aging-associated expression changes

YME1L1 expression and activity decline has been implicated in the mitochondrial fragmentation phenotype of aged cardiac and skeletal muscle. However, direct quantitative GTEx or proteomics citations for age-stratified YME1L1 abundance are not confirmed in this seeding pass. `gtex-aging-correlation: null` pending a dedicated `sops/finding-tissue-expression.md` pass.

#gap/needs-replication — Transcriptomic evidence for age-dependent YME1L1 downregulation in human tissues requires targeted GTEX/CellxGene Census follow-up.

## Pathway membership

- [[mitochondrial-dynamics-pathway]] — core OPA1 processing node; counterbalances [[oma1]]
- [[mitophagy]] — mitochondrial fragmentation induced by YME1L1 loss is a prerequisite for Parkin/PINK1-dependent mitophagy in at least some contexts

## Key interactors

- **[[oma1]]** — the counterbalancing stress-activated protease; co-regulates OPA1 isoform balance; degrades YME1L1 under stress
- **[[opa1]]** — primary substrate; S2 cleavage converts L-OPA1 → S-OPA1 (S2 = constitutive YME1L1 site; S1 = stress-induced OMA1 site)
- **[[timm17a]]** — regulated substrate; YME1L1 turnover of TIMM17A modulates TIM23 import complex composition [^elancheliyan2024]
- **[[prohibitin]]** — protects TIMM17A from YME1L1 degradation; negative regulator of YME1L1 substrate access [^elancheliyan2024]

## Disease associations

| Disease | OMIM/Context | Mechanism | Evidence |
|---|---|---|---|
| Mitochondriopathy with optic atrophy (OPA11) | Recessive; 1 family reported | p.R149W disrupts MPP processing → auto-degradation of YME1L1 precursor → impaired OPA1 S2 cleavage → network fragmentation | Human genetic [^hartmann2016] |
| Dilated cardiomyopathy (mouse model) | Cardiomyocyte-specific KO | OMA1 hyperactivation → loss of L-OPA1 → OXPHOS failure | Mouse in vivo [^wai2015] — closed-access, not independently verified against PDF |
| Age-related cardiac dysfunction | Mechanistic hypothesis | OMA1/YME1L1 imbalance → chronic fragmentation | Extrapolated from [^wai2015]; not directly tested in aging context |

## Druggability

- **Druggability tier: 4** (undruggable by current small-molecule standards)
- No clinically validated inhibitors or activators exist
- The AAA+ ATPase fold presents challenges similar to other AAA proteases (large, symmetric ring; no obvious small-molecule binding pocket outside the active site)
- Open Targets query failed (400 error) during this seeding pass; tier assigned based on established AAA protease druggability literature consensus #gap/needs-canonical-id for Open Targets druggability tier confirmation

**Indirect pharmacological leverage:**
- OMA1 inhibition as a surrogate — protecting YME1L1 from stress-induced degradation could restore OPA1 balance; no clinical OMA1 inhibitor exists
- [[mitophagy]] inducers that rely on fragmentation (CCCP, antimycin A) exploit downstream consequences but do not modulate YME1L1 directly

## Limitations and gaps

| Gap | Tag |
|---|---|
| Human cardiac aging evidence for OMA1/YME1L1 imbalance axis | #gap/needs-human-replication |
| GTEx/AgingAtlas age-stratified expression data | #gap/needs-replication |
| PRELID1 degradation by YME1L1: primary source is Potting 2013 (doi:10.1016/j.cmet.2013.07.008); not independently verified against PDF | #gap/no-fulltext-access |
| Open Targets druggability tier not confirmed (API error) | #gap/needs-canonical-id |
| Mendelian randomization not attempted for YME1L1 variants vs aging outcomes | `mr-causal-evidence: not-tested` |
| Only 4 affected children from one family reported for OPA11; phenotype spectrum likely broader | #gap/needs-replication |

## Footnotes

[^leonhard1996]: doi:10.1002/j.1460-2075.1996.tb00796.x · Leonhard K et al. · *EMBO J* 1996 · in-vitro / biochemical · model: yeast mitochondria · foundational characterization of dual-surface AAA protease system; Yme1p (i-AAA, IMS-facing) and Yta10/Yta12 (m-AAA, matrix-facing) shown to degrade inner membrane substrates from opposite sides

[^anand2014]: doi:10.1083/jcb.201308006 · Anand R et al. · *J Cell Biol* 2014 · in-vitro + in-vivo · model: HEK293 cells + MEFs · 755 citations (100th percentile) · defines S2 (YME1L1) and S1 (OMA1) cleavage sites on OPA1; demonstrates stress-coupled changes in YME1L1 activity; landmark mechanistic paper for the two-protease switch — closed-access, S1/S2 numbering confirmed via Hartmann 2016 (Fig 3C schematic) which cites Anand 2014 as primary definition paper #gap/no-fulltext-access

[^wai2015]: doi:10.1126/science.aad0116 · Wai T et al. · *Science* 2015 · in-vivo · model: cardiomyocyte-specific YME1L1 KO mouse · 528 citations (100th percentile) · YME1L1 ablation → OMA1 hyperactivation → loss of L-OPA1 → mitochondrial fragmentation → dilated cardiomyopathy; rescued by concurrent OMA1 deletion — closed-access (not_oa); claims not independently verified against primary PDF #gap/no-fulltext-access

[^stiburek2012]: doi:10.1091/mbc.e11-08-0674 · Stiburek L et al. · *Mol Biol Cell* 2012 · in-vitro · model: human HEK293 cells with stable shRNA knockdown · 173 citations · YME1L stable knockdown causes excessive accumulation of non-assembled Ndufb6, Cox4, ND1; complex I-specific (rotenone-sensitive) respiration diminished ~60% (CI/CII ratio); complex IV activity unaffected; impaired cristae morphogenesis; impaired apoptotic resistance (increased PARP cleavage with staurosporine/H₂O₂); note: paper's focus is respiratory chain assembly and cristae morphology, not OPA1 processing

[^macvicar2016]: doi:10.1242/jcs.159186 · MacVicar T & Langer T · *J Cell Sci* 2016 · review · 425 citations (100th percentile) · comprehensive review of OPA1 processing mechanisms, YME1L1 vs OMA1 substrate specificity, and disease context — closed-access (not_oa) #gap/no-fulltext-access

[^hartmann2016]: doi:10.7554/elife.16078 · Hartmann B, Wai T et al. · *eLife* 2016 · human genetic + in-vitro · model: patient primary fibroblasts (homozygous p.R149W YME1L1; c.616C>T; one consanguineous Saudi Arabian family; 4 affected children: II.5, II.8, II.9, II.11) + Yme1l1-KO MEFs + HEK293T · 118 citations · homozygous YME1L1 p.R149W disrupts MPP cleavage site (arginine 149 in MTS) → precursor auto-degradation → impaired OPA1 S2 cleavage → network fragmentation → infantile-onset mitochondriopathy with optic atrophy (OPA11); PRELID1 accumulates in patient fibroblasts (demonstrating loss of YME1L1 proteolytic activity); validates YME1L1–OPA1 axis in human disease; R149W is hypomorphic (retains partial activity)

[^elancheliyan2024]: doi:10.1016/j.celrep.2024.115038 · Elancheliyan P et al. · *Cell Reports* 2024 · in-vitro · model: human cell lines · OCIAD1 + prohibitin complex protects TIMM17A from YME1L1 degradation; demonstrates YME1L1 control of TIM23 translocase composition beyond OPA1 processing — gold OA but PDF download failed twice (Elsevier redirect blocks archive); claims not verified against primary PDF #gap/no-fulltext-access
