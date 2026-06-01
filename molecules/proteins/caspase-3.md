---
type: protein
aliases: [CASP3, apopain, CPP32, Yama, SCA-1, caspase-3]
uniprot: P42574
ncbi-gene: 836
hgnc: 1504
mouse-ortholog: Casp3
ensembl: ENSG00000164305
druggability-tier: 1
caused-by: []
causes: []
key-domains: [prodomain, large-subunit-p17, small-subunit-p12, QACRG-active-site]
key-ptms: [Ser26-phosphorylation, Cys163-S-nitrosylation]
pathways: ["[[apoptosis-pathway]]"]
hallmarks: ["[[cellular-senescence]]", "[[chronic-inflammation]]"]
sens-categories: []
known-interactors: ["[[apaf-1]]", "[[caspase-9]]", "[[caspase-8]]", "[[xiap]]", "[[smac-diablo]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Nicholson 1995 (10.1038/376037a0) and Liu 1997 (10.1016/s0092-8674(00)80197-x) and Walsh 2008 (10.1073/pnas.0707715105) verified against local PDFs. Fernandes-Alnemri 1994 and Tewari 1995 failed download (old Elsevier, not_oa-equivalent). Enari 1998 and Kuida 1996 confirmed not_oa — claims from those sources remain tagged #gap/no-fulltext-access. UniProt/NCBI identity fields not independently re-verified against canonical databases."
---


# Caspase-3 (CASP3)

The canonical **executioner caspase** and primary effector protease of programmed cell death. Once activated by initiator caspases (caspase-9 from the intrinsic pathway; caspase-8 from the extrinsic pathway), caspase-3 cleaves >100 cellular substrates to execute the apoptotic program: DNA fragmentation, membrane blebbing, organelle dismantling, and cytoskeletal collapse. Central to the aging field because apoptosis resistance in senescent cells — and conversely, non-apoptotic caspase-3 activity in proliferating and differentiating cells — complicate simple "more apoptosis = slower aging" framings.

## Identity

- **UniProt:** P42574 (CASP3_HUMAN; Swiss-Prot, manually reviewed)
- **NCBI Gene:** 836
- **HGNC:** 1504 (symbol: CASP3)
- **Ensembl:** ENSG00000164305
- **Mouse ortholog:** Casp3 (one-to-one; ~81% sequence identity)
- **Canonical length:** 277 aa (pro-form)
- **Historical synonyms:** CPP32 (Fernandes-Alnemri 1994) [^fernandes1994]; apopain (Nicholson 1995) [^nicholson1995]; Yama (Tewari 1995) [^tewari1995]; SCA-1 (separate cDNA clone)

## Structure and zymogen processing

Caspase-3 is synthesized as an inactive zymogen, procaspase-3 (~32 kDa, 277 aa). The pro-form consists of:

| Region | Residues | Notes |
|---|---|---|
| N-terminal prodomain | 1–28 | Two propeptide segments (1–9 and 10–28); short compared with initiator caspases |
| Large subunit (p17) | 29–175 | Contains QACRG active-site motif; Cys163 catalytic residue |
| Small subunit (p12) | 176–277 | His121 completes the catalytic dyad |

Activation requires proteolytic cleavage at **Asp175** (the large/small subunit junction) and removal of the prodomain. The mature enzyme is an **obligate heterotetramer** composed of two large (p17) and two small (p12) subunits arranged in a (p17–p12)₂ structure. The active sites are located at the two p17/p12 interfaces [^nicholson1995].

### Active site

The caspase fold presents an **acyl-enzyme mechanism** using a catalytic dyad:
- **Cys163** — nucleophilic cysteine; the QACRG pentapeptide motif surrounding it is conserved across all caspases
- **His121** — general base; positioned by the small subunit

S-nitrosylation of **Cys163** (producing S-nitrosocysteine) inhibits caspase-3 activity; this PTM has been proposed as an anti-apoptotic regulatory mechanism in some cell types (#gap/no-mechanism for physiological relevance of S-nitrosylation in aging contexts).

### Substrate specificity

Caspase-3 requires Asp at P1 (the residue immediately N-terminal to the scissile bond) and strongly prefers a hydrophobic or acidic residue at P4. The canonical tetrapeptide recognition motif is:

**DEVD** (Asp–Glu–Val–Asp) — embedded in the PARP-1 cleavage site

More broadly: **DEXD** with Asp at P1 and P4; contrast with caspase-7 (also DEVD-preferring) and caspase-8/9 (IETD/LEHD). Walsh et al. 2008 demonstrated that caspase-3 and caspase-7 — despite near-identical substrate consensus sequences — cleave substantially different subsets of cellular proteins using immunodepletion and 2D-gel analysis in human Jurkat cell-free extracts: of 20 substrates examined, 12 were preferentially cleaved by caspase-3, while only 1 (cochaperone p23) was more susceptible to caspase-7, implying structural determinants beyond the tetrapeptide [^walsh2008].

## Activation pathways

### Intrinsic (mitochondrial) pathway

[[cytochrome-c]] released from the mitochondrial intermembrane space via [[bax]]/[[bak]]-dependent MOMP binds [[apaf-1]] → triggers apoptosome assembly (heptameric APAF-1 wheel) → recruits and autoactivates **caspase-9** → activated caspase-9 cleaves procaspase-3 at Asp175 → executioner caspase-3 is released and amplifies the apoptotic signal.

### Extrinsic (death receptor) pathway

FasL/TRAIL/TNF → death receptor DISC assembly → **caspase-8** autoactivation → caspase-8 cleaves procaspase-3 directly (type I cells: sufficient for apoptosis) or cleaves [[bid]] to form tBID → tBID activates [[bax]]/[[bak]] → MOMP → intrinsic pathway amplification (type II cells) → caspase-9 → caspase-3.

### Other activating proteases

- **Caspase-10** — death-receptor pathway initiator; can cleave procaspase-3 in parallel with caspase-8
- **Granzyme B** — cytotoxic T-lymphocyte/NK cell serine protease; cleaves at IETD sites and can directly activate procaspase-3, bypassing upstream caspases

## Key apoptotic substrates

Once active, caspase-3 cleaves >100 substrates to execute cell death. The highest-confidence canonical substrates:

| Substrate | Cleavage site | Consequence |
|---|---|---|
| PARP-1 | DEVD↓G between Asp216 and Gly217 | Inactivates DNA repair; generates 89/24 kDa fragments (marker of apoptosis) [^nicholson1995] |
| ICAD (DFF45) | DETD (aa 117) and DAVD (aa 224) | Releases CAD/DFF40 nuclease → internucleosomal DNA fragmentation [^liu1997] [^enari1998] |
| Lamin A/B | — | Nuclear envelope disassembly; nuclear collapse |
| ROCK1 | — | Constitutive kinase activity → membrane blebbing |
| Gelsolin | — | Actin filament severing; cytoskeletal collapse |
| Procaspase-6, -7 | — | Caspase cascade amplification |
| PKCδ | — | Activated truncated kinase amplifies apoptosis |

### DFF/CAD — the DNA fragmentation effector

Liu et al. 1997 identified the **DNA Fragmentation Factor (DFF)** as a heterodimer of a **45 kDa** and a **40 kDa** subunit purified from HeLa cell S-100 cytosol [^liu1997]. Caspase-3 cleaves the 45 kDa subunit (DFF-45) at two sites — **DETD (aa 117) and DAVD (aa 224)** — generating 30 kDa and 11 kDa fragments; this releases the active 40 kDa nuclease (DFF-40), which executes internucleosomal DNA cleavage — the ~180 bp ladder seen on apoptotic gel electrophoresis. The cDNA cloning of DFF-40 was incomplete at the time of publication. Enari et al. 1998 independently characterized the same system, naming the components CAD (caspase-activated DNase) and ICAD (inhibitor of CAD); the DFF45/DFF40 and ICAD/CAD nomenclatures refer to the same proteins [^enari1998].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | DFF45/DFF40 heterodimer conserved; C. elegans CPS-6 is functional homolog |
| Phenotype conserved in humans? | yes | DNA laddering observed in human apoptosis |
| Replicated in humans? | yes | Fundamental cell biology, not model-organism-specific |

## Regulation

### XIAP — the primary endogenous inhibitor

**XIAP** (X-linked inhibitor of apoptosis) inhibits the mature (processed) caspase-3 heterotetramer via its **BIR2 domain**, which sterically occludes the active site. XIAP also inhibits caspase-7 (BIR2) and caspase-9 (BIR3). This is a direct stoichiometric interaction (7 independent experimental observations; IntAct EBI-524064/EBI-517127). #gap/unsourced for quantitative Ki values against caspase-3 in vivo context.

**SMAC/DIABLO** (released from mitochondria during MOMP) antagonizes XIAP by competing for the BIR2/BIR3 binding grooves via its IAP-binding tetrapeptide motif (AVPI), thereby de-repressing caspase-3 and caspase-9.

### HSP90 / CHIP

Procaspase-3 is a client of HSP90; inhibition of HSP90 promotes procaspase-3 degradation via the E3 ligase CHIP. This constitutes a second anti-apoptotic checkpoint in some cancer cell lines. #gap/needs-replication for relevance in normal aging tissues.

### Phosphorylation

Ser26 phosphorylation (UniProt annotated) has been proposed to modulate activity, but the physiological kinase and functional consequence are not well characterized. #gap/no-mechanism

## Knockout phenotype

**Kuida et al. 1996** generated *Casp3*-null mice on the C57BL/6 background [^kuida1996]:
- ~50% perinatal lethality
- Surviving mice showed **brain malformation** — supernumerary cells, ectopic masses in the cortex and striatum, reflecting impaired developmental apoptosis
- Brain weight ~30–40% greater than controls due to excess cells
- No gross abnormalities outside the CNS
- The phenotype is notably **strain-dependent**: on mixed or other backgrounds, *Casp3*-null mice survive normally and are fertile, with more subtle phenotypes

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Human CASP3 fully functional; identical executioner role |
| Phenotype conserved in humans? | partial | Humans with caspase-3 loss-of-function not well-characterized; single-gene CNS malformation parallels exist |
| Replicated in humans? | no | No germline CASP3 KO humans characterized #gap/needs-human-replication |

## Discovery

Three independent groups converged on caspase-3 in 1994–1995:

1. **Fernandes-Alnemri et al. 1994** cloned CPP32 from human Jurkat cells as a novel ICE/CED-3 homolog; showed it is activated during apoptosis [^fernandes1994].
2. **Nicholson et al. 1995** identified apopain as the ICE/CED-3 protease required for mammalian apoptosis, using biochemical purification from apoptotic **THP-1** human monocytic leukemia cells; showed it cleaves PARP between Asp216 and Gly217; showed potent inhibition by Ac-DEVD-CHO (K_i < 1 nM) and pan-caspase inhibitor zVAD-fmk [^nicholson1995].
3. **Tewari et al. 1995** independently cloned CPP32β (Yama); demonstrated PARP cleavage and CrmA inhibition, linking the protease to known apoptosis regulators [^tewari1995].

The convergence of three independent molecular identifications with prior biochemical activity (the ~32 kDa PARP-cleaving protease in apoptotic cells) established caspase-3 as the canonical executioner caspase.

## Role in aging and senescence

### Apoptosis resistance of senescent cells

Senescent cells ([[ cellular-senescence]]) are characteristically **apoptosis-resistant** despite elevated pro-apoptotic signaling. This is explained primarily by upregulation of anti-apoptotic [[bcl-xl]], [[bcl-2]], and [[mcl-1]] upstream of caspase-3, which suppress [[bax]]/[[bak]] activation and prevent [[cytochrome-c]] release. Caspase-3 itself is not generally upregulated in senescent cells — the block is upstream at the MOMP level. The selective killing of senescent cells by senolytics (e.g., navitoclax, ABT-263) ultimately depends on de-suppressing [[bax]]/[[bak]] → MOMP → caspase-9 → caspase-3 → apoptotic execution.

### Non-apoptotic caspase-3 functions

At sub-apoptotic activation levels, caspase-3 has documented non-apoptotic functions:
- **Cell proliferation** — partial caspase-3 activation may promote mitogenic signaling in some contexts
- **Differentiation** — muscle differentiation, platelet biogenesis, and lens fiber maturation have caspase-3 roles
- **Synaptic plasticity** — LTD in neurons involves local, limited caspase-3 activity without cell death

The mechanisms preventing sub-apoptotic caspase-3 activity from triggering full apoptotic commitment are incompletely understood. #gap/no-mechanism

### The "caspase-3 paradox" in cancer and aging

High caspase-3 expression has been reported in some tumors without commensurate apoptosis, possibly reflecting either substrate mis-targeting or concurrent caspase-3 non-apoptotic roles in proliferation. This "paradox" is relevant to aging biology because the relationship between apoptotic competence and tissue homeostasis is not monotonic — insufficient apoptosis favors senescent cell accumulation; excessive apoptosis depletes stem cell pools. The net effect on aging rate likely depends on tissue, life stage, and stress context. #gap/no-mechanism #gap/needs-replication

## Pathway membership

- [[apoptosis-pathway]] — canonical executioner; final common pathway
- [[apoptosis]] (process page, when created) — execution phase
- Upstream: [[caspase-9]] (intrinsic), [[caspase-8]] (extrinsic), [[apaf-1]], [[cytochrome-c]]
- Downstream activation: [[caspase-6]], [[caspase-7]]
- Inhibition: [[xiap]], [[smac-diablo]]

## Key interactors

- [[apaf-1]] — apoptosome scaffold that activates caspase-9, which then activates caspase-3
- [[caspase-9]] — initiator (intrinsic pathway); direct activator of procaspase-3
- [[caspase-8]] — initiator (extrinsic pathway); direct activator of procaspase-3 in type I cells
- [[xiap]] — BIR2-domain inhibitor of processed caspase-3
- [[smac-diablo]] — XIAP antagonist; de-represses caspase-3
- [[bid]] — tBID links extrinsic to intrinsic pathway upstream of caspase-3

## Pharmacology

No clinically approved caspase-3 inhibitors or activators exist specifically for aging. Research tools:
- **zVAD-fmk** — irreversible pan-caspase inhibitor; standard in vitro probe; not clinically useful
- **zDEVD-fmk** — caspase-3/-7 selective inhibitor; research use
- **DEVD-AFC / DEVD-AMC** — fluorogenic substrates for measuring caspase-3 activity; K_m (Ac-DEVD-AMC) = 9.7 ± 1.0 μM for purified CPP32/apopain [^nicholson1995]
- Senolytics (navitoclax, dasatinib+quercetin) target upstream BCL-2 family proteins, ultimately causing caspase-3 activation in senescent cells as a *desired* downstream consequence — caspase-3 is the effector, not the therapeutic target

## Limitations and gaps

- #gap/needs-human-replication — *Casp3*-null developmental phenotype (Kuida 1996) is in mouse; human CASP3 loss-of-function not characterized clinically
- #gap/no-mechanism — sub-apoptotic caspase-3 activation thresholds and the signals that prevent commitment to full apoptosis are incompletely understood
- #gap/no-mechanism — S-nitrosylation of Cys163 as a physiological aging-context regulator needs characterization
- #gap/no-mechanism — Ser26 phosphorylation: kinase and functional consequence unknown
- #gap/needs-replication — "caspase-3 paradox" in tumors: whether non-apoptotic caspase-3 activity has a causal role in tumorigenesis vs aging accumulation needs systematic investigation
- #gap/unsourced — quantitative Ki values for XIAP BIR2 inhibition of active caspase-3 in cellular context
- Caspase-3 vs caspase-7 redundancy in apoptotic execution in vivo: Walsh 2008 shows distinct substrate sets in cell-free systems (caspase-3 more promiscuous; 12/20 substrates preferentially cleaved by casp-3 vs 1/20 by casp-7) but physiological consequences of each in aging contexts are not delineated [^walsh2008] #gap/needs-replication

---

## Footnotes

[^fernandes1994]: doi:10.1016/s0021-9258(18)47344-9 · Fernandes-Alnemri, Litwack, Alnemri · J Biol Chem 1994 · in-vitro (Jurkat cell lysates) · model: human Jurkat cells · CPP32 original cloning; ICE/CED-3 homology; activation during apoptosis. Archive: pending download.

[^nicholson1995]: doi:10.1038/376037a0 · Nicholson et al. · Nature 1995 · in-vitro / biochemical purification · model: THP-1 human monocytic leukemia cells · Identifies apopain (= CPP32) as the ICE/CED-3 protease required for mammalian apoptosis; purified from THP-1 cytosol as two subunits (M_r 17K and 12K); cleaves PARP between Asp216–Gly217; K_m (Ac-DEVD-AMC) = 9.7 ± 1.0 μM; K_i (Ac-DEVD-CHO) < 1 nM. Archive: **local PDF verified**.

[^tewari1995]: doi:10.1016/0092-8674(95)90541-3 · Tewari et al. · Cell 1995 · in-vitro · model: human cells · Yama/CPP32β; PARP cleavage; CrmA inhibition. Archive: pending download. **Note: the DOI 10.1016/0092-8674(95)90426-3 given in the seeding brief is a BUG-2 mismatch — that DOI resolves to a retinotectal projection paper (Mek4/ELF-1). Correct DOI confirmed via PubMed PMID 7774019.**

[^liu1997]: doi:10.1016/s0092-8674(00)80197-x · Liu, Zou, Slaughter, Wang · Cell 89:175–184, April 18, 1997 · in-vitro · model: HeLa cell S-100 cytosol; hamster liver nuclei (fragmentation assay) · DFF purified as 45 kDa + 40 kDa heterodimer from HeLa S-100; caspase-3 cleaves DFF-45 at DETD (aa 117) and DAVD (aa 224) (not DEVD); releases active DFF-40 nuclease; DFF-40 cDNA cloning incomplete at time of publication. Year confirmed as 1997 against PDF. Archive: **local PDF verified**.

[^enari1998]: doi:10.1038/34112 · Enari et al. · Nature 1998 · in-vitro · model: FL5.12 murine cells + cell-free systems · CAD/ICAD nuclease cascade; independent identification of same system as Liu 1997; ICAD cloning. Archive: not_oa (no local copy). #gap/no-fulltext-access

[^kuida1996]: doi:10.1038/384368a0 · Kuida et al. · Nature 1996 · in-vivo (mouse, targeted KO) · model: C57BL/6 *Casp3*-null mice · ~50% perinatal lethality; brain malformation with excess supernumerary cells; strain-dependent phenotype. Archive: not_oa (no local copy). #gap/no-fulltext-access

[^walsh2008]: doi:10.1073/pnas.0707715105 · Walsh, Cullen, Sheridan, Lüthi, Gerner, Martin · PNAS 105:12815–12819, September 2, 2008 · in-vitro/biochemical · model: human Jurkat cell-free extracts + recombinant purified human caspase-3 and caspase-7 · Method: immunodepletion of endogenous caspases + 2D-gel analysis + immunoblotting (not SILAC) · Of 20 substrates examined, 12 were preferentially cleaved by caspase-3 vs only 1 (cochaperone p23) by caspase-7; caspase-3 is the principal apoptosis-associated effector caspase. Archive: **local PDF verified** (downloaded 2026-05-04). **Note: DOI 10.1073/pnas.0805089105 in seeding brief was BUG-2 mismatch (plant fatty acid dehydratase paper); correct DOI confirmed via PMID 18723680.**
