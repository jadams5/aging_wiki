---
type: protein
aliases: [IRF-3, Interferon Regulatory Factor 3]
uniprot: Q14653
ncbi-gene: 3661
hgnc: 6118
ensembl: ENSG00000126456
genage-id: null
pathways: ["[[cgas-sting]]", "[[jak-stat-pathway]]", "[[nf-kb]]"]
hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]"]
sens-categories: []
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: ["[[tbk1]]", "[[sting]]", "[[cgas]]", "[[mitochondrial-dysfunction]]", "[[cellular-senescence]]"]
causes: ["[[chronic-inflammation]]", "type-I IFN transcriptional response", "interferon-stimulated gene (ISG) induction"]
verified: true
verified-date: 2026-05-13
verified-by: claude
verified-scope: "West 2015, Glück 2017, Yang 2017, Essers 2009, Lin 1999, Gulen 2023 PDFs read end-to-end; canonical-DB identity fields (UniProt Q14653, HGNC:6118, NCBI Gene 3661, Ensembl ENSG00000126456) verified via UniProt REST API. Servant 2001 not_oa (failed download); Hopfner 2020 path resolution failed (path mismatch on disk); Sharma 2003 and Fitzgerald 2003 not_oa — these sources are cited for the TBK1-as-IRF3-kinase claim and IKKε claim; claim correctness independently confirmed by West 2015 (TBK1-IRF3 axis demonstrated) and Hopfner 2020 abstract-level (review). Decout 2021 downloaded but not read cover-to-cover; used as supporting review citation only. Recency search: skipped per CLAUDE.md (type:protein pages exempt from R25 recency-search requirement)."
---


# IRF3 (Interferon Regulatory Factor 3)

**IRF3** is the constitutively expressed, cytoplasmic transcription factor that executes the **type I interferon (IFN-I) arm** of innate immune signaling. Inactive as a cytoplasmic monomer, IRF3 is phosphorylated by [[tbk1]] (and IKKε) on a C-terminal serine/threonine cluster, homodimerizes, translocates to the nucleus, and binds **IFN-regulatory element (IRF-E / ISRE)** motifs in target gene promoters — driving transcription of **IFN-β** (IFNB1) and hundreds of interferon-stimulated genes (ISGs). It is the terminal transcriptional effector of the **[[cgas-sting]]** pathway (as well as the RIG-I/MDA5–MAVS and TLR3/TRIF axes), downstream of [[sting]] and [[tbk1]], and is functionally distinct from the parallel [[nf-kb]] arm of cGAS-STING that drives pro-inflammatory cytokine production. In aging, chronic low-level IRF3 activation by self-derived cytosolic DNA — leaked mitochondrial DNA, senescent-cell cytosolic chromatin fragments — contributes to the **type I IFN inflammatory signature** observed in aged tissues and amplifies the SASP of senescent cells.

## Identity

- **UniProt:** Q14653 (IRF3_HUMAN) — Swiss-Prot manually curated; reviewed entry
- **NCBI Gene:** 3661
- **HGNC:** 6118; official gene symbol **IRF3**
- **Ensembl:** ENSG00000126456
- **OMIM:** 603734
- **Gene locus:** 19q13.33 (chromosome 19)
- **Protein length:** 427 amino acids (canonical isoform, UniProt Q14653 confirmed)
- **GenAge:** not listed — IRF3 is not a curated GenAge/HAGR aging gene; aging relevance is mechanistic (inflammaging effector) rather than direct longevity-gene evidence #gap/needs-canonical-id (GenAge entry absent; tag for future periodic re-check)
- **Mouse ortholog:** Irf3 (Mus musculus); phosphorylation sites Ser388/Ser390 correspond to human Ser385/Ser386; functional conservation well established

## Protein structure

IRF3 contains three canonical structural regions and a C-terminal regulatory domain characteristic of the IRF family:

| Domain | Residues (approx.) | Function |
|---|---|---|
| DNA-binding domain (DBD) | 5–111 | IRF tryptophan pentad repeat (W-x-x-x-x-W motif); sequence-specific binding to ISRE elements |
| Disordered linker | 91–136 | Flexible; connects DBD to IAD |
| Nuclear export signal (NES) | 139–149 | Constitutive cytoplasmic retention in resting cells |
| IRF-association domain (IAD) | ~190–390 | Mediates latent autoinhibition and, upon activation, homodimerization; also contains HERC5 interaction region (200–360) |
| C-terminal regulatory domain | ~380–427 | Serine/threonine cluster; primary phosphorylation target of TBK1/IKKε; conformational switch |

The **DNA-binding domain** uses a helix-turn-helix motif with a conserved tryptophan repeat (five W residues, ~11 residues apart) that contacts the major groove of ISRE DNA sequences. The **IAD** mediates both the autoinhibitory intramolecular interaction in resting IRF3 and the activating homodimerization interface after phosphorylation — a single conformational switch controlled by the C-terminal phosphorylation state. Lin 1999 localized the **transactivation domain** to aa 134–394, with the N-terminal boundary between aa 134 and 151 and the C-terminal boundary between aa 357 and 394; two autoinhibitory domains are located at C-terminal aa 380–427 and the internal region aa 98–240 [^lin1999].

## Post-translational modifications

The following PTMs are annotated in UniProt Q14653 (accessed 2026-05-13):

**Key activating phosphorylation sites (C-terminal regulatory domain):**

| Site | Modification | Notes |
|---|---|---|
| Ser-385 | Phosphorylation | Regulatory site; Lin 1999 showed S385/S386 substitution with Asp does *not* activate transcription — these residues regulate the adjacent Ser-Thr cluster (aa 396–405) rather than serving as direct TBK1 substrates; later structural work positions Ser-386 as key conformational switch |
| Ser-386 | Pyrophosphorylation (and mono-phosphorylation) | Key conformational switch; TBK1-dependent phosphorylation confirmed (UniProt: "by TBK1"); pyrophosphorylation also reported; S385/S386 regulatory role described in Lin 1999 |
| Ser-396 | Phosphorylation | TBK1 and IKKε substrate (UniProt: "by IKKE and TBK1"); part of the inducible phosphoacceptor cluster (aa 396–405) identified as primary activation locus in Lin 1999; required for full IRF3 transactivation activity |
| Ser-398 | Phosphorylation | Part of the serine cluster (aa 396–405); contributes to conformational change |
| Thr-404 | Phosphorylation | Cluster residue |
| Ser-427 | Phosphorylation | Cluster residue (UniProt-annotated; also denoted Ser-405 in some mouse-aligned numbering — use human Q14653 numbering throughout) |

**Other phosphorylation sites annotated by UniProt:**
Thr-3, Ser-14, Thr-75, Ser-97, Ser-123, Ser-175 (microbial infection context — by viral kinase, pathogen evasion), Thr-180, Ser-188, Thr-237, Thr-244, Thr-253.

**Non-phosphorylation PTMs:**
- Lys-366: acetylation (turnover regulation)
- Lys-193, Lys-360, Lys-366: ubiquitination (proteasomal degradation)
- Multiple sites: ISGylation (antiviral IFN feedback loop)
- Asn-85: deamidation (viral evasion mechanism — HCMV UL37x1 targets this site)

**Mouse vs human numbering note.** The human sites (Ser-385/Ser-386) correspond to mouse Irf3 Ser-388/Ser-390. This two-residue offset is a common source of confusion in the literature; whenever cross-species claims are made, verify the species-specific numbering. Note that Lin 1999 uses human IRF3 numbering throughout (427 aa canonical isoform) [^lin1999].

## Function: type I IFN transcriptional effector

IRF3 is constitutively expressed in most cell types and maintained at low basal activity by intramolecular autoinhibition — the IAD is held in a closed conformation that occludes the dimerization interface and the DNA-binding surface [^lin1999].

**Activation cascade:**

1. Upstream innate sensor (cGAS, RIG-I, TLR3) detects pathogen-associated or damage-associated DNA/RNA
2. Adaptor protein (STING, MAVS, or TRIF) recruits and activates [[tbk1]] and/or IKKε
3. TBK1/IKKε phosphorylate the IRF3 C-terminal serine/threonine cluster; the primary inducible phosphoacceptor sites are in the Ser-396/Ser-398/Thr-404 cluster (aa 396–405 per Lin 1999); Ser-386 serves as a key conformational switch; Ser-385/Ser-386 play regulatory roles modulating the cluster [^lin1999] [^sharma2003] [^fitzgerald2003]
4. Phosphorylation disrupts autoinhibition → conformational change → IAD exposed → IRF3 homodimerizes
5. Homodimer translocates to nucleus (overcoming the NES)
6. Dimer binds ISRE motifs (consensus: GAAA(C/T)NGAAACT) in promoters of IFNB1 and ISGs
7. Recruits co-activators CBP/p300 (HATs) → chromatin remodeling → transcription

**Key transcriptional outputs:**
- **IFN-β (IFNB1):** primary IRF3 target; IFN-β is then secreted, binds IFNAR in autocrine/paracrine fashion, and activates the STAT1/STAT2 → IRF9 → ISGF3 complex → drives amplified ISG transcription via the JAK-STAT pathway ([[jak-stat-pathway]])
- **ISGs:** hundreds of interferon-stimulated genes with antiviral effector functions (OAS, IFIT, Mx, ISG15, TRIM proteins)

**IRF3 vs IRF7:** IRF3 is constitutively expressed and initiates the acute IFN-β response. IRF7, the IRF3 paralog, is itself an ISG — it is induced by the initial IFN-β wave and amplifies IFN-α production in the second wave. In sustained/chronic signaling (as in aging and interferonopathies), IRF7 may carry more of the ISG transcriptional load, but IRF3 remains the **initiator** [^hopfner2020].

## Function: signal integration node

IRF3 is the convergence point for four distinct innate immune input pathways, all of which signal through TBK1/IKKε:

| Upstream sensor | Ligand | Adaptor → kinase → IRF3 |
|---|---|---|
| cGAS | Cytosolic dsDNA (microbial, mtDNA, CCFs) | cGAS → 2'3'-cGAMP → [[sting]] → TBK1 → IRF3 |
| RIG-I / MDA5 | Cytosolic dsRNA / ssRNA | RIG-I/MDA5 → MAVS → TBK1 → IRF3 |
| TLR3 | Endosomal dsRNA | TLR3 → TRIF → TBK1 → IRF3 |
| TLR4 | LPS (partial) | TLR4 → TRIF → TBK1 → IRF3 (in addition to dominant TRIF → NF-κB route) |

All four pathways converge on TBK1 phosphorylation of IRF3 C-terminal cluster (Ser-396, Ser-386, Ser-398, Thr-404) as the activating event [^hopfner2020] [^decout2021].

**IRF3 vs NF-κB distinction.** The [[cgas-sting]] pathway activates two parallel transcriptional arms from the STING scaffold:
- **IRF3 arm** — STING palmitoylation → TBK1 → IRF3 → type I IFN and ISG transcription
- **NF-κB arm** — STING → IKK complex → IκB degradation → [[nf-kb]] → pro-inflammatory cytokines (TNF-α, IL-6, IL-1β)

These arms are functionally and temporally separable. Per West 2015, the mtDNA-driven inflammatory response in aged mitochondria signals through the **IRF3 arm**, not primarily the NF-κB arm [^west2015]. Subsequent reviews emphasize that in aging contexts, the IRF3-driven type I IFN signature is the dominant chronic output — NF-κB activation by STING is more prominent in acute/high-dose settings [^hopfner2020].

## Aging relevance

### Type I IFN inflammaging signature

Aged tissues — particularly brain, liver, and kidneys — display a chronic, low-level ISG expression signature consistent with constitutive IRF3 activation. This interferon-associated transcriptomic footprint is a component of the broader [[chronic-inflammation|inflammaging]] phenotype. Gulen et al. 2023 demonstrated causally — using both genetic *Sting−/−* mice and pharmacological STING inhibition (H-151) in aged C57BL/6J mice (19–20 months) — that **chronic STING activation drives aging-related neuroinflammation and neurodegeneration**, including microgliosis, hippocampal neuron loss, and cognitive decline (Morris water maze, fear conditioning) — implicating IRF3 (as STING's downstream effector via TBK1) in brain aging pathology [^gulen2023]. The mechanistic driver in this context is **mtDNA released from disrupted mitochondria in aged microglia** activating cGAS→STING. Note: Gulen 2023 measured pTBK1 as the STING signaling readout; IRF3 knockout was not directly tested in this study.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | TBK1-IRF3 axis is highly conserved; ISRE-binding activity documented in human cells |
| Phenotype conserved in humans? | partial | Type I IFN gene signature elevated in aged human blood (PBMC); human ISG upregulation in aging is documented but causal attribution to IRF3 specifically is not resolved |
| Replicated in humans? | no | No in-vivo human genetic experiments; causal role inferred from mouse Sting−/− + in-vitro human cell work |

#gap/needs-human-replication — Chronic IRF3 activation as a causal driver of human aging phenotypes has not been directly demonstrated.

### Senescence-associated secretory phenotype (SASP)

Senescent cells accumulate cytosolic chromatin fragments (CCFs) and cytoplasmic DNA (from nuclear envelope breakdown, micronuclei rupture, and retrotransposon cDNA). CCFs activate [[cgas]], producing cGAMP → [[sting]] → [[tbk1]] → **IRF3 phosphorylation** → IFN-β and ISG induction. This IRF3-driven IFN component is part of the SASP and is distinct from the IL-6/IL-8 component driven by NF-κB [^gluck2017].

Glück et al. 2017 (*Nat Cell Biol*) showed that cGAS senses cytosolic chromatin fragments (CCFs, arising from lamin B1 degradation) in senescent cells, and that the resulting SASP response requires cGAS-STING signaling [^gluck2017]. Cell models used: cGAS-KO MEFs (Mb21d1−/− mice, C57BL/6 background) and WI-38 human fibroblasts. Senescence was induced by multiple triggers including oxidative stress (40% O2), ionizing radiation (12 Gy), HRasV12 oncogene, and palbociclib — confirming generality. The cGAS-STING pathway drives both ISG induction (Cxcl10/Ifi44) and classical SASP cytokines (IL-6, TNF-α); IRF3 is implicated as the STING→TBK1 downstream transcriptional effector for the ISG/IFN component. Yang et al. 2017 (*PNAS*) demonstrated that cGAS is *essential* for cellular senescence in MEFs and human BJ cells — cGAS knockout suppressed the senescence program (SA-β-Gal activity) and abrogated SASP gene expression (IL6, IL8, IL1β, MMP12) in response to etoposide, irradiation, and spontaneous immortalization [^yang2017]. **Note:** Yang 2017 does not contain aged-tissue in-vivo data; Gulen 2023 is the authoritative source for in-vivo aging causation.

### mtDNA-driven inflammaging

Mitochondrial DNA (mtDNA) that leaks into the cytosol (during mitochondrial stress, membrane permeabilization, or TFAM deficiency) is a potent cGAS ligand. West et al. 2015 demonstrated that **mtDNA stress primes the antiviral innate immune response** via the cGAS-STING-TBK1-**IRF3** axis, establishing IRF3 as the terminal transcriptional effector of mtDNA-driven IFN production [^west2015]. Key quantitative evidence: ISG mRNAs in TFAM-depleted cells were reduced **70–90% in the absence of STING**, confirming cGAS-STING as the predominant driver; siRNA knockdown of either TBK1 or IRF3 robustly blocked ISG expression; enhanced nuclear accumulation of IRF3 was confirmed by immunofluorescence in TFAM-depleted cells. The model used Tfam+/− MEFs (C57BL/6 background) with ~50% mtDNA depletion. The inflammatory signal here flows through **IRF3, not NF-κB** — an important distinction from bacterial-LPS-type inflammation which is NF-κB-dominant.

### Hematopoietic stem cell (HSC) exhaustion by chronic IFN

Chronic IFN-α exposure activates dormant HSCs and drives them into cycling, exhausting the HSC pool over time [^essers2009]. Essers 2009 demonstrated this specifically for **IFN-α** (delivered i.p. as recombinant mIFNα4): IFNAR-STAT1-Sca-1 signaling drives HSC proliferation, and chronic repetitive IFN-α stimulation leads to marked competitive disadvantage of wild-type HSCs in repopulation assays. IFN-α is primarily produced downstream of IRF7 (an ISG itself, amplified by the autocrine IFN loop that IRF3 initiates); thus IRF3's contribution to HSC exhaustion is indirect — IRF3 initiates IFN-β, which triggers JAK-STAT-IRF7 → IFN-α amplification. This is one mechanism by which chronic inflammaging contributes to [[stem-cell-exhaustion]]. #gap/needs-human-replication — causal HSC exhaustion via this axis is established in mice only.

## Pathway membership

- **[[cgas-sting]]** — load-bearing terminal effector; IRF3 is the key-node at the transcriptional output step
- **[[jak-stat-pathway]]** — IFNB1 secreted by IRF3 drives autocrine IFNAR → JAK1/TYK2 → STAT1/STAT2 → ISGF3 feedback loop; IRF3 is upstream trigger, JAK-STAT is the amplification cascade
- **[[nf-kb]]** — parallel arm from the same upstream stimuli; important to distinguish from IRF3; they have distinct promoter targets

## Key interactors

| Interactor | Role | Evidence type |
|---|---|---|
| [[tbk1]] | Activating kinase (primary); phosphorylates Ser-396 cluster (primary inducible sites aa 396–405) and Ser-386 (UniProt-confirmed); Ser-385/Ser-386 are regulatory modulators of the cluster per Lin 1999 | In-vitro kinase assay + genetic KO; West 2015 IRF3 siRNA confirms functional requirement |
| IKKε (IKBKE) | Activating kinase (parallel/redundant with TBK1); can phosphorylate same sites | Biochemical + KO |
| [[sting]] | Upstream scaffold; recruits TBK1 to the Golgi signalosome where IRF3 docking occurs | Co-IP, structural |
| MAVS | Upstream scaffold (RIG-I/MDA5 arm); recruits TBK1 → IRF3 | Genetic |
| CBP / p300 | Nuclear co-activator; recruited by phospho-IRF3 dimer to IFN-β enhanceosome | Co-IP |
| IRF7 | Paralog; forms IRF3-IRF7 heterodimers in some contexts; IRF7 is the primary IFN-α driver | Biochemical |
| HERC5 | ISGylation E3 ligase; ISGylates IRF3 at multiple sites; affects IRF3 turnover and activity | Biochemical |
| PP2A | Phosphatase; dephosphorylates IRF3 → resets the cycle | Biochemical |
| PIN1 | Prolyl isomerase; reported to regulate IRF3 turnover (pro-degradation) | Biochemical |

## Disease associations

**Herpes simplex encephalitis (HSE) susceptibility.** A Q285 loss-of-function variant in human IRF3 impairs TLR3-dependent IRF3 activation and is associated with herpes simplex virus encephalitis susceptibility (OMIM: IIAE7). Demonstrates the non-redundant role of IRF3 in CNS antiviral defense in humans [^unitprot-q14653].

**Interferonopathies.** IRF3 is the terminal effector of multiple interferonopathy circuits (AGS — Aicardi-Goutières syndrome, STING gain-of-function/COPA syndrome, TREX1-deficiency). In these monogenic diseases, chronic IRF3 activation by uncontrolled nucleic acid sensing drives severe systemic type I IFN-driven inflammation. These conditions model — at an accelerated and severe scale — the chronic low-level IRF3 activity proposed to underlie inflammaging.

**Lupus / autoimmunity.** Elevated type I IFN (largely IRF3-downstream) is the dominant biomarker and pathogenic driver of systemic lupus erythematosus (SLE). Gain-of-function variants in cGAS, STING, and TRex1 converge on IRF3 overactivation.

## Druggability and interventions

**No FDA-approved direct IRF3 modulator exists.** Clinical-stage innate immune drugs act primarily on upstream nodes (cGAS, STING, TBK1).

**Aging-context druggability tier: 3** (predicted druggable; no aging-validated probe; no clinical compound targeting IRF3 directly even in oncology or autoimmune indications). Rationale for aging-context tier vs maximum druggability: IRF3 lacks a deep ATP-binding pocket accessible to small molecules, making it inherently harder to drug than kinases upstream. Direct IRF3 modulators remain in early preclinical stages.

**Upstream indirect suppressors** (all suppress IRF3 phosphorylation by targeting the kinase or scaffold):
- **TBK1 inhibitors** — amlexanox (AMP-activated; approved for canker sores; off-target TBK1 inhibition), MRT67307, BX795, GSK8612 (selective, preclinical) — suppress IRF3 phosphorylation at Ser-385/Ser-396; no aging indication #gap/needs-human-replication
- **cGAS inhibitors** — G140 (Lama 2019), G150, TDI-6570 (early-stage discovery compounds) — prevent cGAMP production, blocking cGAS-STING-TBK1-IRF3 axis at the top
- **STING inhibitors** — H-151 (Haag 2018, preclinical mouse), C-178/C-176 (covalent agonists, paradoxically suppressive at high dose — complex pharmacology) — block STING → TBK1 → IRF3 signaling

**STING agonists** (ADU-S100, MK-1454, DMXAA) *activate* IRF3 downstream — these are tested in oncology as tumor-immunotherapy adjuvants, the opposite direction from aging-context suppression.

No STING or cGAS inhibitor is currently FDA-approved or in Phase 3 trials for any aging indication. #gap/long-term-unknown

## Limitations and gaps

- #gap/needs-human-replication — causal role of IRF3-driven type I IFN in human aging phenotypes (vs correlative ISG signature) is not established; Gulen 2023 mouse Sting−/− data is the current best causal evidence
- #gap/needs-mechanism-clarity — IRF3 vs IRF7 division of transcriptional labor in aged tissues; in chronic low-level signaling, IRF7 (an ISG itself) may amplify and dominate ISG output while IRF3 initiates; quantitative partition of the IRF3 vs IRF7 contribution to the aged ISG signature is not resolved
- #gap/needs-gtex-query — GTEx v2 IRF3 age-correlation not pulled; populate per `sops/finding-tissue-expression.md` on next lint pass
- #gap/long-term-unknown — IRF3 selective (vs TBK1 or STING) inhibition in aging-relevant in-vivo models has not been tested
- #gap/needs-replication — IRF3 contribution to SASP (vs NF-κB arm) is based on Glück 2017 and Yang 2017; the relative quantitative contribution has not been formally dissected in aged tissues
- #gap/needs-canonical-id — GenAge entry absent as of 2026-05-13; schedule periodic re-check during lint passes

## Footnotes

[^lin1999]: doi:10.1128/MCB.19.4.2465 · Lin R et al. · *Mol Cell Biol* 1999 · in-vitro (293 cells, COS cells; Sendai virus infection; yeast one-hybrid; EMSA; co-IP) · defined IRF3 as 55-kDa constitutively expressed cytoplasmic protein; localized transactivation domain to aa 134–394; defined two autoinhibitory domains (C-terminal aa 380–427; internal aa 98–240); showed Ser/Thr cluster at aa 396–405 constitutes the inducible phosphoacceptor sites; Ser-385/Ser-386 play *regulatory* roles modulating the adjacent cluster but are not themselves direct activation sites (S385/S386→Asp did not activate transcription); established IRF3 homodimerization upon virus-induced phosphorylation and nuclear translocation with CBP/p300 recruitment · local-pdf: available

[^servant2001]: doi:10.1074/jbc.M007790200 · Servant MJ et al. · *J Biol Chem* 2001 · in-vitro · identified distinct signaling pathways leading to IRF3 phosphorylation; distinguished virus-induced C-terminal phosphorylation from stress-induced mechanisms · local-pdf: pending

[^sharma2003]: doi:10.1126/science.1081315 · Sharma S et al. · *Science* 2003 · n=cell lines · in-vitro + genetic · identified IKK-related kinase pathway (TBK1/IKKε) as the kinase responsible for IRF3 phosphorylation and IFN antiviral response; cited_by: 1657 · local-pdf: not_oa

[^fitzgerald2003]: doi:10.1038/ni921 · Fitzgerald KA et al. · *Nat Immunol* 2003 · in-vitro + genetic · IKKε and TBK1 are essential components of the IRF3 signaling pathway; loss-of-function suppresses virus-induced IFN-β; cited_by: 2659 · local-pdf: not_oa

[^hopfner2020]: doi:10.1038/s41580-020-0244-x · Hopfner KP, Hornung V · *Nat Rev Mol Cell Biol* 2020 · review · comprehensive review of molecular mechanisms and cellular functions of cGAS-STING signaling including TBK1-IRF3 axis and IRF3/IRF7 division of labor; cited_by: 1745 · local-pdf: available

[^decout2021]: doi:10.1038/s41577-021-00524-z · Decout A et al. · *Nat Rev Immunol* 2021 · review · cGAS-STING pathway as therapeutic target; covers IRF3 convergence from multiple innate immune sensing arms; cited_by: 1949 · local-pdf: pending

[^west2015]: doi:10.1038/nature14156 · West AP et al. · *Nature* 2015 · in-vitro (Tfam+/− MEFs and TFD inducible-depletion MEFs, C57BL/6 background; cGas−/− MEFs; Sting−/− MEFs; BMDM) + in-vivo (Tfam+/− mice, LCMV infection model) · mtDNA stress (TFAM heterozygous KO causing ~50% mtDNA depletion) primes antiviral innate immune response; of 45 most overexpressed genes, 39 were ISGs; ISG mRNAs reduced 70–90% in absence of STING; knockdown of TBK1 or IRF3 robustly blocked ISG expression; cGAS-STING signals via TBK1-IRF3/7 axis (IRF3 is the terminal transcriptional effector; NF-κB arm is parallel but not the primary ISG driver in this context); cited_by: 1759 · local-pdf: available

[^gluck2017]: doi:10.1038/ncb3586 · Glück S et al. · *Nat Cell Biol* 2017 · in-vitro (cGAS-KO MEFs from Mb21d1−/− mice, C57BL/6 background; WI-38 human fibroblasts) + in-vivo (mouse irradiation + NrasG12V liver model) · cGAS senses cytosolic chromatin fragments (CCFs from lamin B1 degradation) in senescent cells; senescence triggers tested: oxidative stress (40% O2), ionizing radiation (12 Gy), HRasV12 oncogene activation, palbociclib (CDK4 inhibitor); cGAS-STING pathway drives IFN component of SASP (Cxcl10/ISGs) and classical SASP cytokines (IL-6, TNF-α); IRF3 is implicated as downstream STING→TBK1 effector; cited_by: 1053 · local-pdf: available

[^yang2017]: doi:10.1073/pnas.1705499114 · Yang H et al. · *PNAS* 2017 · in-vitro (cGas−/− MEFs C57BL/6 background; BJ human foreskin fibroblasts-TERT immortalized; cGas−/− BJ cells via TALEN; B16F10 melanoma cells) + in-vivo (cGas−/− mice) · cGAS essential for cellular senescence; cGas−/− MEFs immortalize faster (passages 11–12 vs 15–16 for WT); senescence triggers: spontaneous immortalization (serial passage), etoposide (3 μM and 10 μM MEFs; 10–20 μM BJ), ionizing radiation (3 Gy X-ray); cGAS deletion abrogates SASP gene expression (IL6, IL8, IL1β, MMP12); cGAS-dependent IRF3 activation (described generically via STING→TBK1→IRF3/NF-κB signaling) contributes to senescence program; **does NOT contain aged-tissue in-vivo data** — discussion notes "it would be very interesting to determine whether cGAS plays a role in normal aging"; Gulen 2023 is authoritative for in-vivo aging causation; cited_by: 940 · local-pdf: available

[^gulen2023]: doi:10.1038/s41586-023-06373-1 · Gulen MF et al. · *Nature* 2023 · in-vivo (C57BL/6J aged mice 19–20 months; Sting−/− mice; H-151 pharmacological STING inhibitor 750 nmol i.p. 5 days/week; microglia-specific cGasR241E gain-of-function model; snRNA-seq of 9,505 hippocampal cells) + ex-vivo human adipose tissue · aged mice show elevated ISG and proinflammatory gene signature in kidneys and liver; STING inhibition (H-151) reduces inflammatory cytokines (B2m, Il1b, Il6, Tnf, Cxcl10, Isg15, Ifitm3) in aged mice; aged Sting−/− mice independently confirm findings; in brain: microgliosis reduced, NeuN+ neuron density preserved in CA1, synaptophysin intensity increased; cognitive improvement in Morris water maze and fear conditioning (P=3×10−3 for fear conditioning); pTBK1 (Ser172) elevated in aged brains, reduced by H-151; cGAMP elevated in aged vs young brain (ELISA); mechanistic driver is mtDNA released from disrupted mitochondria in aged microglia activating cGAS→STING; IRF3 implicated as downstream STING→TBK1 effector (pTBK1 measured; IRF3 KO not directly tested); cited_by: 751 · local-pdf: available

[^essers2009]: doi:10.1038/nature07815 · Essers MAG et al. · *Nature* 2009 · in-vivo (C57BL/6 mice, Ifnar−/− and Stat1−/− mice; chimera experiments) · IFN-**α** (recombinant mIFNα4, 10,000 units i.p.) activates dormant LSKCD150+ HSCs via IFNAR-STAT1-Sca-1 signaling; acute IFN-α drives HSC cell-cycle entry; chronic IFN-α (repeated poly(I:C) stimulation via Mx1-Cre model) results in complete loss of functional wild-type HSCs in chimera repopulation assays; Sca-1 upregulation is downstream of STAT1 and required for IFN-α-induced HSC proliferation; cited_by: 1333 · local-pdf: available

[^unitprot-q14653]: UniProt Q14653 (IRF3_HUMAN), Swiss-Prot reviewed entry · accessed 2026-05-13 · disease annotation: IIAE7 (HSE susceptibility, Q285 loss-of-function variant); PTM site list; domain annotations
