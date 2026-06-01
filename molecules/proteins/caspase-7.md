---
type: protein
aliases: [CASP7, ICE-LAP3, MCH3, CMH-1, LICE2, apoptotic protease Mch-3]
uniprot: P55210
ncbi-gene: 840
hgnc: 1508
mouse-ortholog: Casp7
ensembl: ENSG00000165806
druggability-tier: 1
caused-by: []
causes: []
key-domains: [prodomain, large-subunit-p20, small-subunit-p11, QACRG-active-site, exosite]
key-ptms: []
pathways: ["[[apoptosis-pathway]]"]
hallmarks: ["[[cellular-senescence]]"]
sens-categories: []
known-interactors: ["[[caspase-9]]", "[[caspase-8]]", "[[xiap]]", "[[apaf-1]]", "[[smac-diablo]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Walsh 2008 and Riedl 2001 verified against local PDFs; Lippke 1996 and Munday 1995 verified against local PDFs; Lakhani 2006 verified via PMC web access (local PDF download failed twice — green OA); UniProt P55210 identity fields (303 aa, Cys186, His144, Asp198/Asp206) confirmed via UniProt REST API. Canonical-database accession numbers (NCBI Gene 840, HGNC 1508, Ensembl ENSG00000165806) not independently re-verified against their respective databases."
---

# Caspase-7 (CASP7)

The second executioner caspase, paralogous to [[caspase-3]] and sharing its DEVD-preferring active site yet cleaving a substantially distinct substrate repertoire in vivo. Caspase-7 is activated by the same initiator caspases — [[caspase-9]] (intrinsic pathway via the apoptosome) and [[caspase-8]] (extrinsic pathway) — and contributes to apoptotic execution particularly in the mitochondrial pathway. Its biological role is largely redundant with caspase-3 for most death stimuli; a specialized non-redundant role under ER stress has been proposed but the primary source for that claim requires verification (#gap/unsourced). Its unique exosite determines a specialized subset of protein interactions beyond the catalytic cleft.

## Identity

- **UniProt:** P55210 (CASP7_HUMAN; Swiss-Prot, manually reviewed)
- **NCBI Gene:** 840
- **HGNC:** 1508 (symbol: CASP7)
- **Ensembl:** ENSG00000165806
- **Mouse ortholog:** Casp7 (one-to-one)
- **Canonical length:** 303 amino acids (procaspase-7 zymogen)
- **Historical synonyms:** ICE-LAP3 (Munday 1995) [^munday1995]; Mch3 (Fernandes-Alnemri 1995, independent clone); CMH-1 (Lippke 1996) [^lippke1996]; LICE2

## Structure and zymogen processing

Caspase-7 is synthesized as inactive procaspase-7 (~35 kDa, 303 aa). The pro-form is organized as:

| Region | Residues | Notes |
|---|---|---|
| N-terminal prodomain | 1–23 | Short compared with initiator caspases; includes propeptide segment cleaved at Asp23/Asp24 |
| Large subunit (p20) | 24–198 | Contains QACRG active-site motif; Cys186 catalytic nucleophile |
| Large/small subunit junction | Asp198 / Asp206 | Two cleavage sites generate the mature large and small subunits |
| Small subunit (p11) | 207–303 | Completes the catalytic dyad |

Activation proceeds via proteolytic cleavage at **Asp198** and **Asp206** (the large/small subunit junction), removing the prodomain. The mature enzyme is an **obligate heterotetramer** composed of two large (p20) and two small (p11) subunits in a (p20–p11)₂ arrangement — the same topology as caspase-3 [^lippke1996].

### Active site

The QACRG pentapeptide motif is conserved across all caspases. In caspase-7:

- **Cys186** — primary catalytic nucleophile; the Cys equivalent of Cys163 in caspase-3
- **His144** — general base; completes the catalytic dyad with Cys186
- **Arg187 and Tyr223** — implicated in allosteric regulation at the dimer interface

An exosite region (residues ~38–41, a polybasic segment N-terminal of the large subunit) mediates RNA-binding and bridging interactions with some substrate proteins; this structural feature is absent in caspase-3 and contributes to the divergent substrate repertoire [^walsh2008].

### Substrate specificity

Like caspase-3, caspase-7 strongly prefers Asp at P1 and P4, with the canonical recognition motif:

**DEVD** (Asp–Glu–Val–Asp)

The two executioner caspases therefore share the same consensus tetrapeptide but cleave substantially different cellular protein populations. Walsh et al. 2008 demonstrated this using immunodepletion of endogenous caspases in human Jurkat cell-free extracts combined with 2D-gel and immunoblot analysis: of 20 substrates examined, 12 were preferentially cleaved by caspase-3, whereas only 1 — the cochaperone **p23 (PTGES3)** — was preferentially cleaved by caspase-7 [^walsh2008]. This disparity implies that structural determinants outside the tetrapeptide — notably the exosite and loop conformations (L1–L4) — govern substrate discrimination in cellular context.

UniProt P55210 annotates confirmed substrates including **PARP-1**, **PTGES3/p23**, and **YY1** (the transcription factor). PARP-1 cleavage (at DEVD, same site as caspase-3) generates the 89/24 kDa fragments used as a universal apoptosis marker — both executioner caspases contribute to this cleavage in intact cells.

## Activation pathways

### Intrinsic (mitochondrial) pathway

[[cytochrome-c]] released via [[bax]]/[[bak]]-dependent MOMP binds [[apaf-1]] → heptameric apoptosome formation → [[caspase-9]] autoactivation → caspase-9 cleaves procaspase-7 at Asp198/Asp206. Caspase-7 is a primary substrate of the apoptosome-bound caspase-9; both executioner caspases are simultaneously activated in this pathway [^lakhani2006].

### Extrinsic (death receptor) pathway

FasL/TRAIL/TNF → DISC assembly → [[caspase-8]] autoactivation → caspase-8 cleaves procaspase-7 directly (type I cells) or proceeds via [[bid]] tBID → MOMP → caspase-9 → caspase-7 amplification (type II cells).

## Regulation

### XIAP inhibition

**XIAP** inhibits caspase-7 via its **BIR2 domain**, the same domain that inhibits caspase-3. The BIR2 domain sterically occludes the active site cleft of the processed (activated) caspase-7 heterotetramer; the crystal structure of XIAP BIR2 with caspase-3 established the molecular contacts and the mechanism is structurally conserved for caspase-7 [^riedl2001]. Kinetic measurements by Riedl et al. 2001 give Ki values of **9.7 pM** for caspase-3 and **100 pM** for caspase-7 (Table 2 of Riedl 2001) [^riedl2001] — approximately 10-fold difference, with caspase-3 the more tightly inhibited of the two executioners at the biochemical level. (Note: Deveraux et al. 1997 reported earlier estimates in the nM range using a different assay format; the Riedl 2001 crystal-structure kinetics are the more precise values.)

**SMAC/DIABLO**, released from the mitochondrial intermembrane space during MOMP, antagonizes XIAP BIR2/BIR3 via its AVPI tetrapeptide motif, de-repressing both caspase-7 and caspase-9.

## Knockout phenotype

**Casp7-null mice** (Lakhani et al. 2006, Science) are **viable and fertile** with normal appearance, organ morphology, and lymphoid development. They were backcrossed six generations onto C57BL/6 from 129/SvJ ES cells [^lakhani2006]. Casp7-null cells showed only a slight survival advantage in embryonic fibroblasts; apoptosis in activated T cells, thymocytes, B cells, and hepatocytes was normal.

Note: ER stress resistance (thapsigargin, tunicamycin) and Fas-mediated apoptosis resistance in thymocytes attributed to Casp7-null were **not demonstrated in Lakhani 2006**; those claims require a separate citation. #gap/unsourced

The most informative experiment is the **Casp3/Casp7 double knockout (DKO)**:

- DKO mice were present at normal Mendelian ratios through embryonic day 20 (E20) but **died rapidly after birth** (postnatal lethality); the cardiac phenotype — **atrial dilation and ventricular noncompaction** — was observed in E20 embryos [^lakhani2006]
- DKO cells from multiple lineages (fibroblasts) were broadly resistant to apoptotic stimuli (UV, staurosporine, FasL, TNFα) that spare either single KO; mitochondrial membrane potential was preserved and AIF nuclear translocation was absent
- Brain development was **normal** on the C57BL/6 background in DKO mice (brain malformation is a phenotype of *Casp3*-null on the 129/SvJ background, per Kuida et al. 1996 — not replicated in DKO on C57BL/6)
- This demonstrates that caspase-7 and caspase-3 are **functionally redundant executioners** that jointly execute the apoptotic program; neither alone is essential for most developmental apoptosis, but together they are indispensable [^lakhani2006]

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | CASP7 conserved; same apoptosome activation mechanism |
| Phenotype conserved in humans? | partial | Human germline CASP7 loss-of-function not characterized; mouse DKO is the primary reference |
| Replicated in humans? | no | No germline CASP7 or CASP3/CASP7 DKO humans characterized #gap/needs-human-replication |

## Discovery

Two independent groups identified caspase-7 in 1995–1996, converging on the same ICE/CED-3 family member:

1. **Munday et al. 1995** — cloned ICErelII (caspase-6) and ICErelIII (caspase-7) from a human THP-1 pro-monocytic leukemia cDNA library; showed pro-apoptotic activity when the truncated (pro-domain-deleted) forms were transfected into HeLa cells and fibroblasts; ICErelIII corresponds to caspase-7 [^munday1995].
2. **Lippke et al. 1996** — independently cloned CMH-1 (CPP32/Mch2 homolog 1) from a human spleen poly(A)+ cDNA library; demonstrated PARP cleavage and apoptosis induction; 52% amino acid identity to CPP32 [^lippke1996].

A third simultaneous clone, "Mch3" (Fernandes-Alnemri 1995), was reported in the same period; all three name the same protein. The unified nomenclature "caspase-7" was adopted by the caspase nomenclature committee in 1996.

## Role in aging and senescence

### Executioner redundancy with caspase-3

In the aging context, caspase-7 functions primarily as a **redundant backup executioner** to [[caspase-3]]. The major apoptosis-related aging phenotypes — senescent cell accumulation, stem cell pool depletion, tissue homeostasis disruption — are primarily attributed to caspase-3 activity (or its suppression), with caspase-7 playing a supporting role. The Walsh 2008 substrate data reinforce this: caspase-3 is considerably more promiscuous (12/20 substrates preferentially cleaved vs 1/20 for caspase-7), suggesting caspase-3 drives more of the apoptotic execution program quantitatively [^walsh2008].

#gap/needs-replication — The aging-context relative contribution of caspase-7 vs caspase-3 has not been directly studied in aged animals or human aged tissues.

### ER-stress-induced apoptosis

A non-redundant role for caspase-7 in **ER-stress-induced apoptosis** has been proposed (where its loss delays cell death more than caspase-3 loss in some settings), but this claim is **not supported by Lakhani 2006** — that paper does not include ER stress experiments. The source of this claim requires verification. #gap/unsourced ER stress accumulates with aging (part of the [[loss-of-proteostasis]] hallmark), and the relative contribution of caspase-7 to ER-stress-mediated cell death in aged tissues is a potentially relevant but unexplored area. #gap/needs-replication #gap/no-mechanism

### Apoptosis resistance in senescent cells

Like caspase-3, caspase-7 is not generally upregulated in senescent cells. The apoptosis block in senescence operates upstream (BCL-2 family suppression of MOMP), leaving both executioner caspases inactive. Senolytics (navitoclax, dasatinib+quercetin) that de-suppress [[bax]]/[[bak]] → MOMP activate both caspase-9 → caspase-3 and caspase-9 → caspase-7 as downstream effectors.

### SMPD1 activation and membrane repair

UniProt P55210 (reviewed annotation, 2024) notes that caspase-7 activates **sphingomyelin phosphodiesterase 1 (SMPD1)** after plasma membrane damage, contributing to membrane repair responses — a non-apoptotic function distinct from caspase-3. The aging relevance of this function is unexplored. #gap/no-mechanism #gap/unsourced

## Pathway membership

- [[apoptosis-pathway]] — executioner; final common pathway alongside caspase-3
- Upstream activators: [[caspase-9]] (intrinsic), [[caspase-8]] (extrinsic), [[apaf-1]], [[cytochrome-c]]
- Inhibition: [[xiap]] (BIR2 domain), antagonized by [[smac-diablo]]
- Cross-reference: [[caspase-3]] — paralogous executioner; DKO phenotype described on Lakhani 2006

## Key interactors

- [[caspase-9]] — primary activating protease (apoptosome pathway); cleaves procaspase-7 at Asp198/Asp206
- [[caspase-8]] — extrinsic pathway activator
- [[apaf-1]] — apoptosome scaffold; recruits caspase-9 that activates caspase-7
- [[xiap]] — BIR2-domain inhibitor; Ki ~100 pM for caspase-7 vs ~9.7 pM for caspase-3 (Riedl 2001; caspase-3 is ~10x more tightly inhibited)
- [[smac-diablo]] — XIAP antagonist; de-represses caspase-7 (and caspase-9) during MOMP
- [[bid]] — tBID links extrinsic to intrinsic pathway upstream of caspase-7

## Pharmacology

No caspase-7-selective clinical agents exist. The same research tools used for caspase-3 cross-inhibit caspase-7:

- **zDEVD-fmk** — irreversible caspase-3/-7 selective inhibitor; standard research probe; not clinically useful
- **zVAD-fmk** — pan-caspase irreversible inhibitor; blocks caspase-7 among all caspases
- **DEVD-AFC / DEVD-AMC** — fluorogenic substrates; measure combined caspase-3 + caspase-7 activity in most cell-based assays (the two are not distinguished by these substrates)

Caspase-7 is not a direct clinical target for aging or senolytic applications. Senolytic agents (navitoclax, A-1331852) activate caspase-7 indirectly as a downstream consequence of MOMP induction.

## Limitations and gaps

- #gap/needs-human-replication — *Casp7*-null and *Casp3/Casp7* DKO phenotypes are mouse-only; human CASP7 germline loss-of-function is uncharacterized
- #gap/needs-replication — Relative contribution of caspase-7 vs caspase-3 to apoptotic execution in aged mammalian tissues has not been directly investigated
- #gap/unsourced — Caspase-7 ER-stress specificity: the claim that Casp7-null cells resist ER-stress-induced apoptosis (thapsigargin, tunicamycin) is not documented in Lakhani 2006; source needed before mechanism can be examined
- #gap/no-mechanism — SMPD1 activation by caspase-7 in membrane repair: the cleavage site, substrate, and physiological consequences in aged tissues are unexplored
- #gap/unsourced — Developmental expression differences between caspase-3 and caspase-7 that might explain their non-redundant contributions
- #gap/needs-replication — Whether the Walsh 2008 cell-free substrate data (1/20 substrates preferentially caspase-7) accurately reflects in vivo substrate utilization in intact cells or tissues during physiological apoptosis

---

## Footnotes

[^lippke1996]: doi:10.1074/jbc.271.4.1825 · Lippke et al. · J Biol Chem 271:1825–1828, January 1996 · in-vitro (human spleen poly(A)+ cDNA library; E. coli and COS cell expression) · model: human · CMH-1 cloning; CPP32/Mch2 homolog (52% aa identity to CPP32); 303 aa; PARP cleavage and apoptosis induction demonstrated. Archive: local PDF available.

[^munday1995]: doi:10.1074/jbc.270.26.15870 · Munday et al. · J Biol Chem 270:15870–15876, June 1995 · in-vitro (monocytic cDNA library; HeLa/fibroblast overexpression) · model: human THP-1 pro-monocytic leukemia cells (cDNA source) / HeLa and fibroblast cells (transfection) · ICErelII (caspase-6) and ICErelIII (caspase-7) cloning; pro-apoptotic activity on overexpression. Archive: local PDF available.

[^walsh2008]: doi:10.1073/pnas.0707715105 · Walsh, Cullen, Sheridan, Lüthi, Gerner, Martin · PNAS 105:12815–12819, September 2008 · in-vitro/biochemical · model: human Jurkat cell-free extracts + recombinant purified human caspase-3 and caspase-7 · Method: immunodepletion + 2D-gel + immunoblot (not SILAC) · Of 20 substrates, 12 preferentially cleaved by caspase-3, 1 (cochaperone p23/PTGES3) by caspase-7; caspase-3 is the dominant executioner in this system. Archive: **local PDF available** (downloaded; path confirmed via ).

[^lakhani2006]: doi:10.1126/science.1115035 · Lakhani et al. · Science 311:847–851, February 2006 · in-vivo (mouse, targeted KO) · model: 129/SvJ-derived ES cells backcrossed 6 generations onto C57BL/6 · *Casp7*-null: viable, fertile, normal lymphoid development and apoptotic responses; *Casp3/Casp7* DKO: postnatal lethality (present at Mendelian ratios through E20, died rapidly after birth); cardiac phenotype (atrial dilation, ventricular noncompaction); normal brain development; broad apoptosis resistance (UV, staurosporine, FasL, TNFα) in MEFs. Archive: download failed (green OA via PMC; verified via PMC web access).

[^riedl2001]: doi:10.1016/s0092-8674(01)00274-4 · Riedl et al. · Cell 104:791–800, March 2001 · in-vitro (crystallography + biochemical) · model: recombinant human caspase-3 + XIAP BIR2 crystal structure · BIR2 active-site occlusion mechanism; structural basis for executioner caspase inhibition by IAPs; applies to both caspase-3 and caspase-7 by homology. Archive: **local PDF available** (downloaded; path confirmed via ). Previously verified on [[xiap]].
