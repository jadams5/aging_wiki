---
type: protein
aliases: [mitofusins, MFN1, MFN2, mitofusin-1, mitofusin-2, MFN family]
uniprot: O95140
ncbi-gene: 9927
hgnc: 16877
ensembl: ENSG00000116688   # MFN2 (matches top-level uniprot:O95140 / ncbi-gene:9927 / hgnc:16877); MFN1 = ENSG00000171109
mouse-ortholog: Mfn2 (MFN2); Mfn1 (MFN1)
druggability-tier: 3
caused-by: []
causes: []
key-domains: [GTPase, HR1-coiled-coil, transmembrane-TM1, transmembrane-TM2, HR2-coiled-coil]
key-ptms: [K192-ubiquitination-Parkin, K416-ubiquitination-Parkin, Ser442-phosphorylation-PINK1]
pathways: ["[[mitophagy]]", "[[pink1-parkin-pathway]]", "[[mitochondrial-dynamics]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[disabled-macroautophagy]]"]
sens-categories: []
known-interactors: ["[[parkin]]", "[[pink1]]", "[[drp1]]", "[[opa1]]", "[[miro1]]"]
complex-subunits: ["Q8IWA4 (MFN1)", "O95140 (MFN2)"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Primary-source PDFs verified for de Brito 2008, Tanaka 2010, Sebastián 2012, Chen 2003, and Gegg 2010. Züchner 2004 PDF inaccessible (DOI lookup (stale local path) does not exist on this machine; paper is bronze OA — recommend re-download); qualitative CMT2A claims cross-checked via PubMed abstract and citations in other verified papers. Karbowski 2002 (added 2026-05-06 R26e per R25 close drafting-gap carryover) — quantitatives transcribed verbatim from the verified [[mitochondrial-dynamics]] page rather than re-verified independently here; full PDF at  WD/a local paper archive/data/papers/.../10.1083_jcb.200209124.pdf is available for re-verification on demand. UniProt/HGNC/NCBI identity fields not independently re-verified against live databases."
---

# Mitofusins (MFN1 / MFN2)

> **Naming note:** This page covers both mitofusin paralogs as a family. The wikilinks `[[mfn1]]` and `[[mfn2]]` both resolve here via aliases. If individual protein pages are seeded later, this family page should be renamed to `mitofusin-family.md` and individual pages cross-linked. The disambiguation follows the precedent established for [[foxo-transcription-factors]].

The mitofusins are **large dynamin-family GTPases** anchored in the outer mitochondrial membrane (OMM) that mediate **OMM fusion** — the first of two sequential membrane-merger events (OMM fusion by MFN1/MFN2; inner-membrane fusion by [[opa1]]) that join two mitochondria into one. Their net activity, balanced against the fission GTPase [[drp1]], determines whether the mitochondrial network is elongated and interconnected (fusion-dominant) or fragmented and punctate (fission-dominant). Both paralogs are canonical [[parkin]] substrates: upon mitochondrial membrane-potential collapse, PINK1-activated Parkin polyubiquitinates MFN1 and MFN2 for proteasomal degradation, arresting OMM fusion and isolating the damaged organelle for mitophagy. MFN2 has an additional, fusion-independent role: it physically tethers the endoplasmic reticulum (ER) to mitochondria at ER-mitochondria contact sites (MAMs), regulating calcium transfer and lipid exchange. MFN2 is also the causative gene for **Charcot-Marie-Tooth type 2A (CMT2A)**, the most common axonal peripheral neuropathy.

## Identity

| Feature | MFN1 | MFN2 |
|---|---|---|
| UniProt | Q8IWA4 (MFN1_HUMAN) | O95140 (MFN2_HUMAN) |
| NCBI Gene | 55669 | 9927 |
| HGNC | 18656 | 16877 |
| Length | 741 aa | 757 aa |
| MW | ~84 kDa | ~86 kDa |
| Mouse ortholog | Mfn1 | Mfn2 |
| GenAge (human) | not listed | not listed |
| Disease | none (KO lethal) | CMT2A (Züchner 2004) [^zuchner2004]; ER-mito tethering defects in metabolic disease |

Both MFN1 and MFN2 are **Swiss-Prot (manually reviewed)** UniProt entries. Sequence similarity between mouse Mfn1 and Mfn2 is 81% at the protein level [^chen2003]; human paralogs are similarly close. Both are broadly expressed across human tissues, with MFN2 particularly abundant in heart, skeletal muscle, and brain.

## Domain architecture

The mitofusins are topologically unusual: a single polypeptide chain with **two transmembrane (TM) helices** in the central region, creating a hairpin topology where both the N-terminus and C-terminus face the cytosol, while a short loop is exposed in the intermembrane space (IMS) [^detmer2007]:

```
[N]—GTPase domain—HR1 coiled-coil—[TM1]—IMS loop—[TM2]—HR2 coiled-coil—[C]
  (cytosolic)                        (OMM)                  (cytosolic)
```

| Domain | Residues (MFN2, approx.) | Function |
|---|---|---|
| **GTPase domain** | ~1–340 | GTP binding and hydrolysis; dynamin-family GED (GTPase Effector Domain) C-terminal portion re-contacts this domain to allosterically regulate GTP hydrolysis |
| **HR1 coiled-coil** | ~355–443 | Heptad-repeat 1; folds back against GTPase; conformational change upon GTP hydrolysis drives membrane approximation |
| **TM1 / TM2** | ~514–537 / ~573–596 | Hydrophobic hairpin anchoring both in the OMM; the short loop between TM1 and TM2 faces the IMS |
| **HR2 coiled-coil** | ~650–740 | Heptad-repeat 2; mediates antiparallel trans-dimerization with HR2 on the opposing OMM; critical for tethering two mitochondria before GTP-driven merger |

## Outer-membrane fusion mechanism

OMM fusion proceeds through a **trans-SNARE-like tethering-then-merger** sequence [^detmer2007][^chen2003]:

1. **Trans-dimerization (tethering).** HR2 coiled-coils on opposing OMMs form antiparallel dimers in trans, bringing the two mitochondria into close apposition (~10–20 nm). Both MFN1 homodimers and MFN1–MFN2 heterodimers can execute this step, providing partial redundancy.
2. **GTP hydrolysis drives conformational change.** GDP·Pi release triggers a conformational switch that approximates the two OMMs to fusogenic distance (<5 nm).
3. **OMM merger.** The two outer membranes fuse, producing a continuous OMM. Inner-membrane fusion (by [[opa1]]) follows in a separable kinetic step; both steps are required for complete mitochondrial content mixing.

**MFN1 vs MFN2 in fusion:** MFN1 has ~5-fold higher GTPase activity than MFN2 in vitro and drives OMM fusion more efficiently in isolation. MFN2 contributes to fusion but is less catalytically active; its additional role at ER-mito contact sites may constrain its availability for fusion per se. Heterotypic MFN1–MFN2 trans-dimers form in vivo and are sufficient for fusion, explaining partial redundancy [^chen2003]. #gap/needs-replication — The relative stoichiometric contributions of MFN1 homodimers vs MFN1/MFN2 heterodimers in vivo are not quantified.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — MFN1 and MFN2 are the human genes; mechanism established in human cell lines |
| Phenotype conserved in humans? | yes — CMT2A mutations in MFN2 cause the human fusion-defect neuropathy |
| Replicated in humans? | yes (disease genetics); limited in aging context |

## MFN2-specific role: ER–mitochondria tethering

MFN2 performs a second, fusion-independent function: it acts as a **physical tether at ER-mitochondria contact sites (MAMs)** [^debrito2008]. MFN2 on the ER surface forms homo- or heterotypic trans-complexes with MFN2 or MFN1 on the OMM — demonstrated by crosslinking and co-IP of ER-targeted (MFN2^IYFT) with mitochondrially-targeted (MFN2^ActA or MFN1) constructs [^debrito2008]. This tethering holds the two organelles in close apposition and is required for efficient:

- **Ca²⁺ micro-domain transfer** from ER to mitochondria — Mfn2-null MEFs show significantly reduced peak mitochondrial Ca²⁺ uptake and reduced Ca²⁺ uptake rate following InsP₃-coupled agonist stimulation (n=5, P<0.001 for both, Fig 5g,h) [^debrito2008]
- **Insulin signaling scaffolding** — ER-mito contacts are disrupted in MFN2-knockout hepatocytes and skeletal muscle, impairing insulin signaling; Mfn2-null mice develop insulin resistance and glucose intolerance [^sebastian2012]
- **Phospholipid transfer** between the organelles is facilitated by MAM contacts, though this function was not directly demonstrated in de Brito 2008 #gap/unsourced

MFN1 is not detected on the ER membrane and re-expression of MFN1 in Mfn2-null MEFs corrects mitochondrial morphology but does not correct ER morphology or ER-mito tethering, making the ER-tethering role strictly MFN2-specific [^debrito2008]. De Brito 2008 provides partial separation-of-function evidence: ER-targeted MFN2 (MFN2^IYFT) rescues ER morphology and ER-mito tethering in Mfn2-null cells but not mitochondrial morphology; conversely, OMM-targeted MFN2 (MFN2^ActA) restores mitochondrial shape but not ER defects [^debrito2008]. Whether the two functions can be fully separated by point mutation (without organelle-targeting domain swaps) remains less characterized. #gap/needs-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — MFN2 present on both OMM and ER in human cells |
| Phenotype conserved in humans? | partial — ER-mito coupling defects implicated in human T2D; CMT2A mutations disrupt ER function in neurons |
| Replicated in humans? | no — direct ER-mito tethering defects not demonstrated in human longevity contexts #gap/needs-human-replication |

## Parkin substrate role (CRITICAL — verified on [[parkin]])

MFN1 and MFN2 are among the **first identified Parkin OMM substrates** and are functionally the most important for mitophagy execution [^gegg2010][^tanaka2010]:

**Sequence of events:**

1. Mitochondrial membrane potential (ΔΨm) collapses (depolarization from damage, ROS overload, etc.).
2. [[pink1]] stabilizes on the OMM surface, phosphorylates ubiquitin (Ser65) and Parkin's UbL domain (Ser65), sequentially activating Parkin.
3. Active Parkin ubiquitinates MFN1 and MFN2 with polyubiquitin chains that target them for proteasomal degradation (chain linkage type consistent with K48, but not directly characterized in these papers — see Chain topology note below).
4. The AAA-ATPase **p97/VCP** extracts ubiquitinated MFN1/MFN2 from the OMM before proteasomal delivery — a key step because transmembrane proteins cannot thread directly into the 26S proteasome [^tanaka2010].
5. MFN1/MFN2 levels drop on the damaged mitochondrion → **outer-membrane fusion arrest** — the damaged organelle can no longer re-fuse with the healthy network.
6. With fusion blocked, the isolated damaged mitochondrion is packaged into an autophagosome via cargo receptors [[optn]] and [[ndp52]] that bind Parkin-generated ubiquitin chains, and delivered to the lysosome for degradation.

Tanaka et al. 2010 established that MFN degradation is mechanistically required for mitophagy by two lines of evidence [^tanaka2010]: (1) expression of dominant-negative p97^QQ, which blocks MFN extraction from the OMM, strongly inhibits Parkin-induced mitochondrial elimination (~80% of YFP-Parkin cells lost all mitochondria in controls vs <10% with p97^QQ, n≥50); (2) co-treatment with the proteasome inhibitor MG132 similarly blocks mitochondrial elimination. This establishes MFN extraction and degradation as a required checkpoint, not a correlate, of the PINK1/Parkin mitophagy pathway.

Gegg et al. 2010 established the PINK1 dependency: MFN1/MFN2 ubiquitination by Parkin requires prior PINK1 activity, demonstrated by siRNA knockdown of PINK1 significantly reducing CCCP-induced MFN1/MFN2 ubiquitination in SH-SY5Y cells [^gegg2010]. #gap/needs-replication — Gegg 2010 used siRNA knockdown, not patient-derived PINK1 mutations; whether specific PD-associated PINK1 missense mutations abolish MFN ubiquitination was not tested in this paper.

**Chain topology:** Tanaka et al. 2010 establish that MFN1/MFN2 are degraded via the UPS (proteasome + p97/VCP), consistent with K48-linked chain topology, but the paper does not directly characterize the chain linkage type [^tanaka2010]. The contrast with K63-linked chains on VDAC1 (which recruit autophagy receptors) is noted in the broader literature but was not demonstrated in Tanaka 2010 specifically. #gap/needs-replication — explicit chain-linkage typing of Parkin-generated ubiquitin on MFN1/MFN2 in vivo is not reported in this paper.

## Knockout and loss-of-function phenotypes

Single and combined knockouts reveal the extent of mitofusin redundancy and essentiality [^chen2003][^detmer2007]:

| Genotype | Phenotype |
|---|---|
| *Mfn1*−/− (mouse) | Embryonic lethal (~E11.5–E12.5); live mutants present at E10.5 but 86% resorbed by E12.5; severe mitochondrial fragmentation in MEFs [^chen2003] |
| *Mfn2*−/− (mouse) | Embryonic lethal (~E10.5–E11.5); 29% resorbing by E10.5, 87% resorbed by E11.5; trophoblast giant cell defects; placental insufficiency [^chen2003] |
| *Mfn1/Mfn2* double KO | Lethality earlier than either single KO; complete loss of mitochondrial interconnection in surviving cells |
| Cardiac *Mfn1/2* cKO | Dilated cardiomyopathy; massive mitochondrial fragmentation; progressive cardiac failure [^detmer2007] |
| Neuronal *Mfn2* cKO | Progressive neurodegeneration; Purkinje cell loss; locomotor deficits; CMT2A-like axonal degeneration |
| Skeletal muscle *Mfn2* cKO (mef2C-Cre) | Insulin resistance; reduced oxidative capacity; ER stress; JNK activation; IRS1 Ser307 phosphorylation; glucose intolerance on HFD [^sebastian2012] |

The embryonic lethality of both single knockouts demonstrates that **MFN1 and MFN2 are not fully redundant** despite their shared OMM fusion function — each has context-specific requirements (e.g., MFN2's tethering role), and neither alone is sufficient for normal development [^chen2003].

## Charcot-Marie-Tooth type 2A (CMT2A)

Züchner et al. 2004 identified **heterozygous missense mutations in MFN2** as the cause of **CMT2A**, the most common axonal Charcot-Marie-Tooth hereditary neuropathy [^zuchner2004]. Key features:

- CMT2A mutations cluster in the **GTPase domain** and **HR2 coiled-coil** of MFN2, disrupting GTP hydrolysis or trans-dimerization
- Patients present with progressive distal limb weakness and wasting, reduced nerve conduction velocity, and degeneration of long peripheral axons
- The extreme vulnerability of peripheral axons to MFN2 loss likely reflects their dependence on long-range mitochondrial transport — fragmented mitochondria cannot reach distal axon tips efficiently
- CMT2A mutations impair both the OMM fusion function and, where tested, the ER-tethering function of MFN2; separation of these activities has not been fully achieved genetically

This human genetic disease provides direct evidence that MFN2-mediated fusion/tethering is **non-redundant for axonal integrity**, and that MFN1 cannot fully compensate in the peripheral nervous system.

## MFN2 at apoptotic fission sites

Beyond its homeostatic fusion role, **MFN2 redistributes to mitochondrial fission sites during apoptosis** — co-localizing there with [[drp1]] and the BCL-2 effector BAX immediately upstream of mitochondrial outer-membrane permeabilization (MOMP). Karbowski et al. 2002 showed by live-cell CFP/YFP imaging in Cos-7 cells that **92% ± 10.5% of MFN2-YFP clusters (n=847) co-localized with CFP-BAX clusters** in apoptotic cells, and conversely 68% ± 10% of BAX clusters (n=1,238) overlapped MFN2 puncta; endogenous BAX/MFN2 co-IF was confirmed in primary human myocytes and fibroblasts [^karbowski2002]. Dominant-negative DRP1-K38A traps BAX-associated fission intermediates without preventing BAX OMM translocation, indicating that the fission machinery and MOMP machinery are **spatially coupled and ordered**: BAX recruitment defines the site, fission then proceeds. The implication for MFN2 is that, during apoptosis, MFN2 is locally repurposed from a fusion factor to a structural component of the apoptotic fission/MOMP platform — an activity distinct from its parkin-substrate, ER-tether, or homeostatic-fusion roles. Cross-link: this finding is the mitochondrial half of the broader [[apoptosis-pathway]] / [[bcl-2-family-signaling]] story; the integrated dynamics narrative is on [[mitochondrial-dynamics]] (verified 2026-05-05) and the BAX/BAK side is on [[bax]] / [[bak]].

## Aging relevance

### Fusion/fission balance shifts toward fission in aged tissues

Multiple lines of evidence indicate that aged tissues exhibit **net mitochondrial fragmentation** relative to young, consistent with a shift in the fusion/fission balance toward fission (see [[mitochondrial-dysfunction]]) [^detmer2007]:

- Aged skeletal muscle shows increased mitochondrial punctation and reduced network interconnectivity #gap/needs-replication — human aging studies use fixed-tissue electron microscopy and may miss dynamic network behavior
- MFN2 mRNA and protein expression is reduced in skeletal muscle of type 2 diabetic patients and in aged muscle — a metabolic-aging convergence [^sebastian2012]
- Reduced MFN2 expression impairs mitophagy flux and promotes accumulation of damaged mitochondria — consistent with the mitochondrial quality control failure model of aging

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial — MFN2 reduction in diabetic muscle confirmed; aging-specific human data limited |
| Replicated in humans? | no — direct causal test not performed #gap/needs-human-replication |

### Impaired ER-mitochondria tethering in metabolic aging

MFN2 loss in skeletal muscle (cKO mouse model) produces a metabolic syndrome resembling age-related insulin resistance: reduced mitochondrial oxidative capacity, impaired glucose uptake, and disrupted ER-mito Ca²⁺ microdomains [^sebastian2012]. This is relevant to the observation that insulin resistance worsens with aging, partly as a result of progressive mitochondrial dysfunction in muscle.

### Mitochondrial fragmentation limits quality control efficiency

When mitofusin levels decline — whether via Parkin ubiquitination during mitophagy or via age-related transcriptional downregulation — individual mitochondria become isolated. Fusion normally allows content mixing between organelles, "diluting" damaged components (oxidized proteins, mutant mtDNA). Loss of this mixing forces reliance on mitophagy as the sole quality control mechanism. In aged tissue, both fusion capacity (reduced MFN) and mitophagy flux (reduced PINK1/Parkin activity) may simultaneously decline, creating a compounding deficit. #gap/no-mechanism — direct evidence that age-associated MFN decline quantitatively impairs content mixing in vivo is lacking.

## Pathway membership

- [[mitophagy]] — MFN1/MFN2 degradation is a required checkpoint for mitophagy execution; their Parkin-mediated loss is upstream of autophagosome recruitment
- [[pink1-parkin-pathway]] — MFN1/MFN2 are the primary fusion-relevant substrates of Parkin in this pathway
- [[mitochondrial-dynamics]] — with [[drp1]] (fission) and [[opa1]] (IMM fusion), constitute the core fusion-fission machinery
- [[mitochondrial-dysfunction]] — the hallmark that encompasses fusion/fission imbalance in aging

## Key interactors

- [[parkin]] — E3 ubiquitin ligase; ubiquitinates MFN1/MFN2 on depolarized OMMs with K48-linked chains; requires prior PINK1 activation [^gegg2010][^tanaka2010]
- [[pink1]] — upstream kinase; phosphorylates ubiquitin and Parkin to enable MFN ubiquitination; phosphorylates MFN2 Ser378/Ser379 directly (the functional significance of direct MFN2 phosphorylation by PINK1 is not fully established) #gap/needs-replication
- [[drp1]] — opposing fission GTPase; the MFN/DRP1 ratio governs network morphology; DRP1 inhibition causes elongation; MFN loss causes fragmentation
- [[opa1]] — inner-membrane fusion GTPase; works in sequence with MFN1/MFN2 for complete mitochondrial fusion; OPA1 loss does not prevent OMM fusion but prevents content mixing
- [[miro1]] — mitochondrial Rho GTPase; Parkin substrate; links mitochondria to microtubule motors; parallel Parkin substrate alongside MFN1/MFN2

## Pharmacology and intervention relevance

No approved drugs directly target MFN1/MFN2. Investigational strategies:

- **MFN agonists (small molecule):** A 2019 screen (Franco et al., *Nat Chem Biol* 2016) identified cell-permeant peptidomimetics that selectively activate MFN2 GTPase activity in fragmented neurons, promoting fusion, restoring axon transport, and rescuing CMT2A-like phenotypes in mice — providing proof-of-concept that MFN2 activation is pharmacologically feasible. #gap/needs-replication — peptide pharmacokinetics not suitable for systemic use; small-molecule equivalent not yet advanced to clinical stage.
- **PINK1/Parkin pathway modulation:** Compounds that augment PINK1 activity (to promote MFN degradation on damaged mitochondria) or inhibit the pathway (to preserve MFN and extend mitochondrial networks) are both under preclinical investigation for Parkinson's disease; the optimal direction depends on context.
- **NAD⁺ precursors (NMN/NR):** Have been reported to restore mitochondrial network morphology in aged skeletal muscle in mice, partly via SIRT1-dependent MFN2 transcriptional upregulation — a potential indirect MFN2-enhancing intervention. #gap/needs-replication — mechanism and magnitude not established in humans.

## Limitations and gaps

- **#gap/needs-human-replication** — Direct quantification of MFN1/MFN2 protein levels and fusion rates in aged vs young human tissues (beyond muscle in T2D) is limited. Most aging-related fragmentation data are from rodent models or correlational human transcriptomics.
- **#gap/needs-replication** — Whether MFN2 ER-tethering and OMM fusion functions can be separated by point mutation in vivo is not established; existing CMT2A mutations often disrupt both.
- **#gap/no-mechanism** — The precise conformational mechanism by which HR2 trans-dimers drive OMM merger at the bilayer level is not resolved; no MFN crystal structure captures the pre-fusion or post-fusion state in the membrane context.
- **#gap/needs-replication** — Direct PINK1 phosphorylation sites on MFN2 (Ser378/Ser379) and their functional significance beyond Parkin-mediated ubiquitination are not fully characterized.
- **#gap/long-term-unknown** — Whether restoring MFN2 levels in aged muscle (by NAD⁺ supplementation, gene therapy, or other means) improves metabolic outcomes or lifespan in aged mammals has not been tested in long-term controlled studies.
- MFN1 and MFN2 are **absent from GenAge-human** — neither appears as an aging gene in the HAGR database as of 2026-05-04. This likely reflects that they are classified as development/disease genes rather than canonical longevity modifiers, despite their clear mechanistic involvement in mitochondrial quality control.

## Footnotes

[^karbowski2002]: doi:10.1083/jcb.200209124 · [[studies/karbowski-2002-bax-drp1-apoptosis]] · in-vitro (live CFP/YFP imaging + immunofluorescence; Cos-7 + HeLa cell lines; endogenous protein co-IF confirmed in primary human myocytes and fibroblasts) · model: mammalian cell lines + primary human cells · key quantitatives: 92% ± 10.5% of MFN2-YFP clusters (n=847) co-localized with CFP-BAX clusters in apoptotic Cos-7 cells; 68% ± 10% of BAX clusters (n=1,238) co-localized with MFN2 clusters; DRP1-K38A traps BAX-associated fission intermediates without preventing BAX OMM translocation · **verified against PDF on [[mitochondrial-dynamics]] 2026-05-05** — quantitatives recopied here verbatim, no independent re-verification on this page · 838 citations; bronze OA · added to mitofusins.md 2026-05-06 R26e per R25 close drafting-gap carryover

[^chen2003]: doi:10.1083/jcb.200211046 · n=N/A · in-vivo (mouse, global KO) · model: Mfn1−/−, Mfn2−/−, and double-KO mouse embryos + MEFs; Mfn1 KO: normal viability to E10.5, 20% resorbed by E11.5, 86% resorbed by E12.5; Mfn2 KO: 29% resorbing at E10.5, 87% resorbed by E11.5 with trophoblast giant cell defects and placental insufficiency; demonstrated by live-cell fluorescence and PEG fusion assay that Mfn1/Mfn2 loss severely reduces mitochondrial fusion (57% of fused Mfn1-mutant and 69% of fused Mfn2-mutant cells showed predominantly unfused mitochondria vs 0% WT); Mfn1 and Mfn2 are 81% similar to each other; heterotypic trans-dimer formation confirmed by co-IP · 2,505 citations (archive confirmed; OA bronze; **local PDF downloaded 2026-05-04** at )

[^zuchner2004]: doi:10.1038/ng1341 · n=unverified (PDF inaccessible — DOI lookup `(stale local path)` does not exist on this machine; paper is bronze OA, recommend re-download) · observational (human genetics) · model: CMT2A patient cohort from multiple international families; identified heterozygous missense mutations in MFN2 as cause of CMT2A by linkage mapping + direct sequencing; mutations cluster in the GTPase domain and HR2; exact patient n, mutation count, and family count not verified against full text #gap/no-fulltext-access · 1,537 citations (Nat Genet 2004 36:449–451; PMID 15064763)

[^debrito2008]: doi:10.1038/nature07534 · n=n=8 (FRAP), n=4–20 (morphometric/contact analyses) · in-vitro + in-vivo (mouse MEFs, HeLa, mouse liver fractions) · mechanism · model: Mfn2-null MEFs, MFN2 siRNA HeLa, in-vitro ER-mito co-sedimentation assay; demonstrated MFN2 tethers ER to mitochondria; Mfn2-null cells show ~40% reduction in ER-mito Manders' colocalization coefficient (confocal + electron tomography); Ca²⁺ uptake into Mfn2-null mitochondria after InsP₃-mediated ER Ca²⁺ release is significantly impaired (peak [Ca²⁺]m and Ca²⁺ uptake rate both reduced, n=5, P<0.001 for both, Fig 5g,h; ~40% reduction in Manders' ER-mito colocalization in Mfn2-null); ER-targeted MFN2^IYFT rescues tethering but not mitochondrial morphology; OMM-targeted MFN2^ActA rescues mitochondrial shape but not ER morphology (separation-of-function); MFN2 on ER surface confirmed biochemically; MFN1 not detected on ER and cannot rescue ER defect · 2,331 citations (archive confirmed; **local PDF available** at )

[^gegg2010]: doi:10.1093/hmg/ddq419 · n=N/A · in-vitro (SH-SY5Y human dopaminergic neuroblastoma) · mechanism · model: CCCP-induced depolarization + Parkin overexpression or knockdown; demonstrated MFN1 and MFN2 are ubiquitinated upon CCCP treatment within 3h; ubiquitination requires PINK1 (siRNA knockdown of PINK1 significantly reduces MFN1/MFN2 ubiquitination); PINK1 siRNA combinations both reduce ubiquitination; MFN1 shows multiple ubiquitin-adduct species including di-ubiquitinated forms · 889 citations (archive confirmed; OA bronze; PDF downloaded 2026-05-04)

[^tanaka2010]: doi:10.1083/jcb.201007013 · n=N/A · in-vitro (SH-SY5Y, HeLa, MEFs) · mechanism · model: CCCP treatment + Parkin expression; showed that p97/VCP accumulates on depolarized mitochondria and dominant-negative p97^QQ blocks both MFN degradation and Parkin-induced mitochondrial elimination; proteasome inhibition (MG132) blocks MFN degradation; UPS-dependent mechanism consistent with proteasomal (K48-linked) chain type but chain topology not directly characterized in this paper; Drp1 inhibition also prevents mitophagy, establishing that fission precedes engulfment · 1,323 citations (archive confirmed; **local PDF available** at )

[^detmer2007]: doi:10.1038/nrm2275 · review · model: review of fusion-fission field (primarily mouse and cell-culture data through 2007); comprehensive coverage of MFN1/MFN2 domain architecture, GTPase mechanism, cooperativity, and tissue-specific KO phenotypes including cardiac and neuronal conditional KOs · 1,336 citations (archive confirmed; not OA — not_oa status; no local PDF)

[^sebastian2012]: doi:10.1073/pnas.1108220109 · n=8–20 per group (GTT/ITT), n=5 (clamp studies) · in-vivo + observational · model: two cKO models — liver-specific (Alb-Cre, "L-KO") and skeletal-muscle-enriched (mef2C-Cre, "muscle KO"); liver L-KO shows glucose intolerance and enhanced hepatic gluconeogenesis; muscle KO shows impaired glucose tolerance on HFD and insulin resistance; Mfn2-deficient muscle shows mitochondrial dysfunction, increased H₂O₂, ER stress (CHOP/pIRE1/peIF2α), and JNK activation leading to IRS1 Ser307 phosphorylation; MFN2 expression reduced in obese/T2D patients (refs 13,14); ER stress rescued by TUDCA or NAC · 643 citations (archive confirmed; **local PDF available** at )
