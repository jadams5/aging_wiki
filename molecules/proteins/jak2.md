---
type: protein
aliases: [Janus kinase 2, JAK-2, "tyrosine-protein kinase JAK2"]
uniprot: O60674
ncbi-gene: 3717
hgnc: 6192
ensembl: ENSG00000096968
genage-id: null  # not found in GenAge-human on live lookup 2026-05-26
mouse-ortholog: Jak2
pathways: ["[[jak-stat-pathway]]"]
hallmarks: ["[[chronic-inflammation]]", "[[genomic-instability]]", "[[altered-intercellular-communication]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 1
gtex-aging-correlation: null   # not yet populated; run sops/finding-tissue-expression.md on next verifier pass
mr-causal-evidence: not-applicable-somatic
caused-by: []
causes: ["[[chronic-inflammation]]", "[[stem-cell-exhaustion]]"]
literature-checked-through: 2026-05-26
verified: true
verified-date: 2026-05-26
verified-by: claude
verified-scope: "James 2005 (Nature), Kralovics 2005 (NEJM), Levine 2005 (Cancer Cell), and Jaiswal 2017 (NEJM) verified against local PDFs. Baxter 2005 (Lancet, doi:10.1016/S0140-6736(05)71142-9) confirmed via PubMed efetch (PMID 15781101) but closed-access (not_oa); footnote added from metadata, cannot verify body claims against full text. Jaiswal 2014 not re-read (cross-checked against verified study page on phenotypes/clonal-hematopoiesis). Xu 2015 frailty data not re-read (cross-checked against jak1 page which carries that study). Canonical-DB identity fields (UniProt O60674, NCBI Gene 3717, HGNC 6192) confirmed in seeder pass; Ensembl ENSG00000096968 confirmed via Ensembl REST 2026-05-26."
---

# JAK2 (Janus kinase 2)

JAK2 is a non-receptor tyrosine kinase of the Janus kinase family with two biologically distinct aging-relevant roles. In its canonical role, JAK2 transduces cytokine and growth-factor signals — including erythropoietin (EPO), thrombopoietin (TPO), growth hormone (GH), IFN-γ, and the IL-6 family — to STAT transcription factors, making it a central node in [[jak-stat-pathway]]-mediated [[chronic-inflammation]] and somatropause biology. In its disease role, the gain-of-function somatic point mutation **JAK2 V617F** (Val→Phe at residue 617 in the JH2 pseudokinase domain) is the defining molecular driver of myeloproliferative neoplasms (MPNs) and one of the highest-cardiovascular-risk clonal hematopoiesis (CHIP) mutations, conferring an OR of ~12 for early-onset myocardial infarction [^jaiswal2017]. These two stories are mechanistically linked but clinically distinct: the canonical kinase function drives inflammaging via SASP-cytokine amplification, while V617F drives cardiovascular risk via constitutive clonal myeloid expansion.

> **Naming note:** This page is `[[jak2]]` — the protein. The pathway page is `[[jak-stat-pathway]]`. No `pathways/jak2.md` exists; this page resolves all `[[jak2]]` wikilinks unambiguously. The JAK2 V617F somatic mutation story belongs here; the broader CHIP landscape lives on [[phenotypes/clonal-hematopoiesis]] (canonical) and [[biomarkers/chip-clonal-hematopoiesis-biomarker]] (measurement).

## Identity

- **UniProt:** O60674 (JAK2_HUMAN); Swiss-Prot (manually curated), confirmed 2026-05-26
- **NCBI Gene ID:** 3717
- **HGNC:** 6192
- **Ensembl:** ENSG00000096968 (confirmed via Ensembl REST API 2026-05-26)
- **Protein length:** 1,132 amino acids (canonical isoform a; NP_004963.1)
- **Chromosome:** 9p24.1 (NC_000009.12; coordinates 4,984,390–5,129,948)
- **Mouse ortholog:** Jak2 (one-to-one; high sequence conservation; functionally tractable KO models available)
- **Gene family:** JAK family — JAK1, JAK2, JAK3, TYK2; all non-receptor tyrosine kinases; JH1 (kinase) + JH2 (pseudokinase) architecture conserved across family

## Domain architecture

JAK2 contains four structurally recognizable domains arranged N→C, identical in topology to JAK1:

| Domain | Residues (approx.) | Function |
|---|---|---|
| **FERM** | ~35–410 | Receptor binding; tethers JAK2 to cytoplasmic tails of cytokine receptor subunits (GHR, EPOR, IFNGR2, gp130, TPOR) via the FERM F3 lobe |
| **SH2-like** | ~430–540 | Phosphotyrosine-docking module; contributes to receptor interaction and intramolecular regulation |
| **Pseudokinase (JH2)** | ~570–840 | Regulatory domain; lacks catalytic activity but suppresses JH1 in the basal state; **V617F occurs in this domain** — phenylalanine at position 617 disrupts autoinhibitory contacts, locking JH2 in a conformation that partially relieves JH1 suppression and confers constitutive kinase activity; the mutation is encoded in exon 14 (current canonical numbering per Levine 2005 and Kralovics 2005; James 2005 used "exon 12" under a different convention) |
| **Kinase (JH1)** | ~850–1130 | Catalytic domain; activation-loop autophosphorylation at Y1007/Y1008 is required for full kinase activity; the primary site of pharmacological inhibition by ruxolitinib, fedratinib, and pacritinib |

The V617F mutation maps to the JH2 pseudokinase domain (exon 14). It introduces a bulkier phenylalanine at the interface between JH2 and the N-lobe of JH1, disrupting a regulatory hydrogen-bond network that normally keeps the kinase in an autoinhibited ground state. The result is ligand-independent constitutive JAK2 activity and STAT5 phosphorylation [^james2005][^kralovics2005][^levine2005].

## Receptor association map

JAK2 is constitutively pre-associated with specific receptor subunits:

| Cytokine/ligand | JAK2 partner receptor | Co-JAK | Primary STATs | Aging relevance |
|---|---|---|---|---|
| IFN-γ | IFNGR2 | JAK1 (on IFNGR1) | STAT1 homodimer | Elevated in senescent SASP; MHC-I upregulation; drives adaptive immune senescence |
| IL-6 family (IL-6, IL-11, OSM, LIF) | gp130 / IL6ST | JAK1 (also on gp130) | STAT3 | IL-6/gp130/JAK1-JAK2/STAT3 axis is the dominant inflammaging cytokine circuit |
| Growth hormone (GH) | GHR | JAK2 homodimerizes | STAT5B | GH/IGF-1 axis; GH receptor signaling drives STAT5B → IGF-1 expression; declines with somatropause; JAK2 inhibition reduces GH bioactivity |
| EPO (erythropoietin) | EPOR | JAK2 homodimerizes | STAT5 | Erythropoiesis; JAK2 inhibition causes anemia — the key on-target side effect |
| Thrombopoietin (TPO) | TPOR (MPL) | JAK2 homodimerizes | STAT5 | Megakaryocyte/platelet production; V617F on TPOR/JAK2 drives essential thrombocythemia |
| IL-12, IL-23 | IL12RB1, IL23R | TYK2 co-JAK | STAT4 | Th1/Th17 immune axis; JAK2 component |

A notable consequence of the receptor-association map: **JAK2 is the obligate signal relay for EPO/EPOR**. This means that any pan-JAK or JAK1/2 inhibitor will suppress erythropoiesis at therapeutic doses — the anemia risk that drove development of JAK1-selective inhibitors (see [[jak1]]). This is mechanistically distinct from the SASP-relevant JAK1-dominated cytokine circuits (IFN-α/β via IFNAR, IL-7 via γc), where JAK2 plays only a supporting role.

## Canonical activation

JAK2 follows the pan-JAK activation mechanism described on [[jak-stat-pathway]]:

1. Cytokine (EPO, GH, IFN-γ, etc.) binds extracellular receptor domains → receptor homodimerization or heterodimerization.
2. Pre-associated JAK2 molecules (or JAK2 + co-JAK) are brought into proximity → trans-phosphorylate each other's JH1 activation loops (JAK2 at Y1007/Y1008).
3. Activated JAK2 phosphorylates receptor cytoplasmic tail tyrosines → docking sites for STAT SH2 domains.
4. Recruited STATs phosphorylated by JAK2 → dimerize → nuclear translocation → transcriptional activation.

**Negative regulators:** SOCS proteins (SOCS1, SOCS3) are JAK2-induced feedback inhibitors that bind the JH1 domain and target the receptor complex for ubiquitin-mediated degradation. SOCS1 binds JAK2 directly at the activation loop. In aged cells, defective SOCS feedback is one mechanism for tonically elevated JAK2 signaling.

## Role in aging

### Inflammaging via IL-6/gp130/STAT3

The dominant SASP cytokine IL-6 signals through gp130/JAK1-JAK2/STAT3. Though JAK1 is the primary transducing kinase for IL-6/gp130 signaling (see [[jak1]]), JAK2 participates as the co-JAK on gp130 in some contexts, particularly in hepatocytes (acute-phase protein synthesis) and adipocytes (metabolic regulation). The net consequence is that JAK2-targeting inhibitors (ruxolitinib, fedratinib, baricitinib) suppress IL-6/STAT3 signaling alongside their more direct JAK1-mediated effects, contributing to the senomorphic activity observed with pan-JAK inhibitors in aged mice [^xu2015].

**IFN-γ/JAK2/STAT1 axis.** IFN-γ signals exclusively via JAK1/JAK2 → STAT1 homodimer. In aged tissues, persistent IFN-γ production by chronically activated T cells and NK cells produces tonic STAT1 signaling that upregulates MHC-I, drives an anti-proliferative and pro-apoptotic transcriptional state, and amplifies the senescent cell SASP. JAK2 is therefore relevant to interferogenic inflammaging downstream of STAT1 activation, distinct from the type I IFN/JAK1/TYK2 axis.

### Somatropause: GH/JAK2/STAT5B axis

The age-associated decline in GH secretion — somatropause — reduces GH-receptor/JAK2/STAT5B signaling, leading to decreased hepatic IGF-1 production and downstream effects on lean mass, bone density, and metabolic rate. This is the molecular underpinning of the GH/IGF-1 axis change in [[altered-intercellular-communication]]. The relationship is bidirectional: JAK2 mediates GH's anabolic signaling, but paradoxically, GH/IGF-1 signaling also limits longevity in model organisms (GH receptor knockout mice are long-lived). The aging-relevant question is therefore not whether JAK2 promotes or inhibits aging, but *which* of its upstream cytokine inputs dominates in a given tissue context. #gap/no-mechanism — the net balance of GH/JAK2 (pro-longevity via anabolism) vs IL-6/JAK2/STAT3 (pro-aging via SASP) has not been systematically dissected in aged human tissues.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — JAK2 sequence, receptor pairing, and STAT activation conserved |
| Phenotype conserved in humans? | partial — SASP/JAK2 biology characterized in human cell culture; frailty endpoints mouse-only |
| Replicated in humans? | no — mouse model only for frailty/SASP reduction; clinical JAK inhibitors reduce inflammatory markers in autoimmune disease but aging-specific RCT data absent |

### JAK2 V617F — CHIP, MPN, and cardiovascular aging

The somatic gain-of-function mutation V617F (c.1849G>T, p.Val617Phe, exon 14 by current canonical numbering — James 2005 used "exon 12" under a different convention; Levine 2005 and Kralovics 2005 both use "exon 14," which is the standard in current literature) is found in:
- **~65–74%** of polycythemia vera (PV) patients with V617F specifically [^kralovics2005][^levine2005] (Kralovics: 65% / 83 of 128 PV; Levine: 74% / ~121 of 164 PV). The ">95% of PV" figure cited in some secondary sources reflects the broader category of JAK2 exon 14 *and* exon 12 mutations combined, or larger subsequent surveys; the 2005 discovery papers themselves report 65–74% V617F-positive among PV patients.
- **~23–35%** of essential thrombocythemia (ET) patients (Kralovics: 23% / 21 of 93 ET; Levine: ~35% / 37 of 115 ET) [^kralovics2005][^levine2005]
- **~35–57%** of primary/idiopathic myelofibrosis (MF) patients (Kralovics: 57% / 13 of 23 IMF; Levine: ~35% / 16 of 46 MMM) [^kralovics2005][^levine2005]

It was simultaneously identified in four landmark 2005 publications, three of which are in the local archive; the fourth (Baxter 2005 Lancet) is confirmed via PubMed metadata but closed-access [^james2005][^kralovics2005][^levine2005][^baxter2005]. The mutation confers ligand-independent constitutive JAK2 kinase activity, driving uncontrolled myeloid cell proliferation.

**In aging populations without MPN:** JAK2 V617F is the fourth-most-common CHIP driver. In Jaiswal 2014 (n=17,182 WES), JAK2 V617F variants were detected in 31/746 mutation-positive individuals (~4% of CHIP-positive persons) [^jaiswal2014]. Although rarer than DNMT3A (~54%) or TET2 (~10%), JAK2 V617F CHIP carries a **disproportionately high cardiovascular risk**: the OR for early-onset MI in V617F carriers was **~12.1** (95% CI reported on [[biomarkers/chip-clonal-hematopoiesis-biomarker]]) in the large case-control analysis from Jaiswal 2017 [^jaiswal2017].

**Mechanism of V617F cardiovascular risk.** Unlike TET2-CHIP (where the primary effector is macrophage NLRP3/IL-1β hyperactivation), JAK2 V617F clones produce constitutively activated myeloid cells with elevated STAT3 and STAT5 signaling, driving:
- Excess production of myeloid precursors with hyperactivated integrin signaling and coagulation-pathway upregulation → prothrombotic phenotype
- Enhanced neutrophil and platelet activation, contributing to arterial thrombosis
- Elevated circulating inflammatory cytokines from V617F granulocytes and monocytes

This mechanism is distinct from TET2 and DNMT3A CHIP mechanisms, explaining why the IL-1β blockade benefit observed in TET2-CHIP (CANTOS/Svensson 2022; see [[tet2]]) may not apply directly to JAK2 V617F CHIP. #gap/no-mechanism — the specific intracellular signaling cascade linking V617F-driven JAK2 hyperactivation in monocytes to cardiovascular plaque formation and thrombosis has not been mapped with the same mechanistic resolution as TET2-NLRP3.

**Clonal expansion kinetics.** JAK2 V617F clones expand faster than DNMT3A or TET2 clones on average, which explains their higher per-clone cardiovascular risk despite lower prevalence [^jaiswal2017]. The faster expansion rate is a direct consequence of constitutive JAK2-driven proliferation of the HSC carrying V617F.

For the full CHIP epidemiology, VAF threshold conventions, and population-level cardiovascular risk HR data, see [[phenotypes/clonal-hematopoiesis]] (canonical) — cross-reference only from this page.

> **Supersession candidate (2025):** Wang S et al., *European Heart Journal* 2025 (doi:10.1093/eurheartj/ehaf114; PMID 40053703) performed a case-control analysis (n=2,451: 728 plaque erosion, 919 plaque rupture, 804 controls) and found JAK2 V617F (VAF ≥1%) associated with **OR 16.2 (95% CI 4.6–57.1; p<0.0001)** for plaque erosion-type MI, but **no significant association with plaque rupture** (OR 1.68; p=0.495). Mechanistically, neutrophils from V617F carriers showed enhanced activation, adhesion, migration, and granule secretion. This disaggregates the Jaiswal 2017 overall-MI OR=12.1 by mechanism subtype, and suggests the V617F cardiovascular risk is erosion-dominant and neutrophil-mediated rather than a general atherosclerosis/plaque-rupture mechanism. This does not contradict the Jaiswal 2017 finding but substantially refines it. Cross-referenced from [[phenotypes/clonal-hematopoiesis]] § cardiovascular evidence (propagated 2026-05-26).

**`mr-causal-evidence: not-applicable-somatic`:** The aging-relevant variation in JAK2 is the somatic V617F mutation, not germline polymorphisms. Germline MR instruments cannot capture somatic mutation burden or clonal dynamics. The causal relationship between JAK2 V617F clonal expansion and cardiovascular disease has been established through observational epidemiology (Jaiswal 2014 [^jaiswal2014], Jaiswal 2017 [^jaiswal2017]) and mouse BM transplant experiments (Fuster 2017, cited on [[tet2]] and [[phenotypes/clonal-hematopoiesis]]), not MR. Note: JAK2 does have germline GWAS associations for blood-count traits (platelet count, red cell parameters) and the **JAK2 46/1 haplotype** (rs10974944) predisposes to acquiring V617F somatically — but this germline predisposition to mutation acquisition is distinct from the cardiovascular mechanism, which is mediated by the somatic clone.

## Pharmacology — JAK inhibitors engaging JAK2

**Druggability-tier 1 rationale:** Multiple FDA-approved drugs engage JAK2 directly (ruxolitinib: JAK1/2; fedratinib: JAK2/FLT3; pacritinib: JAK2/FLT3). These are approved for MPN/myelofibrosis indications, not aging. Tier 1 reflects: approved drugs exist that directly engage JAK2, and JAK2-inhibition-relevant mechanisms (SASP suppression, IL-6/STAT3 blockade, IFN-γ/STAT1 blockade) are aging-biology-relevant. This is analogous to how [[jak1]] earns tier-1 via the same pharmacological precedent despite no aging-specific approval. The JAK2-specific concern relative to JAK1 is EPO/EPOR-mediated anemia and thrombopoiesis suppression (see below).

### Approved JAK inhibitors with significant JAK2 activity

| Drug | JAK selectivity | FDA approval | Aging-relevant? |
|---|---|---|---|
| **Ruxolitinib** (Jakafi) | JAK1/JAK2 | Myelofibrosis, PV, steroid-refractory aGVHD | Yes — Xu 2015 PNAS frailty data (see [[jak1]]); the frailty effect is attributed jointly to JAK1 and JAK2 inhibition [^xu2015] |
| **Fedratinib** (Inrebic) | JAK2 > JAK1; also FLT3 | Myelofibrosis | Less inflammaging-relevant; primary indication is MPN/V617F suppression |
| **Pacritinib** (Vonjo) | JAK2/FLT3 > JAK1 | Myelofibrosis (cytopenic patients) | Designed to spare JAK1; lower anemia risk; less SASP-relevant |
| **Baricitinib** (Olumiant) | JAK1/JAK2 | RA, AD, COVID-19 | Yes — IL-6/STAT3 and IFN-γ/STAT1 suppression relevant to inflammaging |

### On-target safety constraint: EPO/JAK2 anemia

All agents with significant JAK2 activity suppress erythropoiesis via EPOR/JAK2/STAT5 pathway inhibition. Anemia is the most common grade ≥3 adverse event with ruxolitinib (~45% in MF trials) and is dose-limiting in older, potentially anemic patients. For aging applications, this constrains the therapeutic window: the anti-inflammaging dose (which must reduce SASP/IL-6/STAT3 signaling) may overlap with the anemia-producing dose. JAK1-selective agents (upadacitinib, filgotinib) avoid this constraint by sparing JAK2/EPOR; see [[jak1]].

**V617F MPN treatment:** For patients with JAK2 V617F MPNs, ruxolitinib suppresses the V617F-driven clone and reduces spleen size and constitutional symptoms. Whether chronic ruxolitinib in V617F-CHIP carriers (without MPN) would reduce cardiovascular risk is not known — no trial has tested this indication. #gap/needs-human-replication

### Interferon-α and V617F clone suppression

Pegylated IFN-α (ropeginterferon alfa-2b; Besremi) is FDA-approved for PV and acts via a different mechanism: it specifically targets V617F-mutant HSCs for preferential apoptosis (IFN signaling appears to be more cytotoxic to JAK2-hyperactivated HSCs than to wild-type HSCs). This represents an orthogonal pharmacological approach to suppressing JAK2 V617F clones that does not require kinase inhibition. Its relevance to age-related CHIP (below the MPN threshold) has not been evaluated.

## Cross-references

- [[jak-stat-pathway]] — overarching JAK/STAT pathway; JAK2 is the primary EPO/GH/IFN-γ transducing kinase
- [[jak1]] — closely related family member; the dominant SASP-cytokine (IFN-α/β, IL-6, IL-7) relay; comparative selectivity context
- [[stat1]] — primary downstream STAT for IFN-γ/JAK2 signaling
- [[phenotypes/clonal-hematopoiesis]] — canonical home for CHIP epidemiology, V617F cardiovascular risk data, CANTOS subgroup analysis
- [[biomarkers/chip-clonal-hematopoiesis-biomarker]] — NGS panel; V617F detection and OR=12.1 MI data
- [[dnmt3a]] — most-common CHIP driver; DNA methyltransferase
- [[tet2]] — second-most-common CHIP driver; TET-family demethylase; TET2-CHIP mechanistic contrast (NLRP3/IL-1β vs JAK2/STAT3/thrombosis)
- [[asxl1]] — third-most-common CHIP driver; Polycomb-associated
- [[chronic-inflammation]] — hallmark downstream of tonically elevated JAK2-mediated SASP/IFN-γ signaling
- [[genomic-instability]] — V617F somatic mutation is a genome-instability product; CHIP is a downstream consequence
- [[altered-intercellular-communication]] — GH/JAK2/STAT5B axis contributes to somatropause (declining IGF-1 production with age)
- [[growth-hormone]] — upstream ligand for GHR/JAK2/STAT5B; somatropause axis
- [[hematopoietic-stem-cells]] — the cellular compartment in which V617F clonal expansion occurs
- [[nlrp3-inflammasome]] — downstream of TET2-LoF macrophage hyperactivation; contrast with JAK2 V617F thrombotic mechanism

## Limitations and knowledge gaps

- **Ensembl ID confirmed.** ENSG00000096968 confirmed via Ensembl REST API on 2026-05-26.
- **GTEx aging correlation not populated.** Run `sops/finding-tissue-expression.md` on next verifier pass to populate `gtex-aging-correlation:` for key JAK2-expressing tissues (blood/immune cells, liver, adipose). #gap/needs-canonical-id
- **No aging-specific RCT for JAK2.** No completed powered RCT has assessed a JAK1/2 or JAK2-selective inhibitor for aging, frailty, or physical function in otherwise-healthy older adults. The Xu 2015 frailty evidence is from aged mice. #gap/needs-human-replication
- **Dose-response for geroprotection is unknown.** Mouse studies used doses calibrated to autoimmune disease; the dose required for anti-inflammaging benefit vs. anemia-producing dose with ruxolitinib is not established in humans. #gap/dose-response-unclear
- **V617F CHIP cardiovascular mechanism vs. TET2.** The specific intracellular signaling cascade linking V617F-driven JAK2 hyperactivation to arterial thrombosis and plaque progression has less mechanistic resolution than the TET2-NLRP3-IL-1β pathway; a mouse BM-transplant model analogous to Fuster 2017 (for TET2) has not been as thoroughly published for JAK2 V617F-CHIP. #gap/no-mechanism
- **Whether V617F CHIP treatment reduces cardiovascular risk.** It is unknown whether suppressing JAK2 V617F clones with ruxolitinib or IFN-α in CHIP carriers (below MPN diagnostic threshold) reduces MI or stroke risk. The clinical trial design for this question has not been completed. #gap/needs-human-replication
- **Baxter 2005 Lancet citation.** Confirmed: doi:10.1016/S0140-6736(05)71142-9 · PMID 15781101 · Lancet 2005;365(9464):1054-1061. Added as [^baxter2005]. Paper is closed-access (not_oa); body claims not verifiable against full text. #gap/no-fulltext-access
- **Mouse-human SASP divergence.** As with JAK1, the dominant JAK2-signaled SASP cytokines and the relative contribution of JAK2 vs JAK1 to inflammaging differ by tissue and species. #gap/needs-human-replication

## Footnotes

[^baxter2005]: doi:10.1016/S0140-6736(05)71142-9 · Baxter EJ, Scott LM, Campbell PJ et al. · Lancet 2005;365(9464):1054-1061 · PMID 15781101 · discovery: acquired JAK2 V617F mutation in human myeloproliferative disorders (fourth concurrent 2005 discovery paper); 3,418 citations (citation_percentile: 100%) · archive status: **closed-access (not_oa)** — body claims not verifiable against full text; citation confirmed via PubMed efetch 2026-05-26 · #gap/no-fulltext-access

[^james2005]: doi:10.1038/nature03546 · James C, Ugo V, Le Couédic JP et al. · Nature 2005;434:1144-1148 · PMID 15793561 · discovery: unique clonal JAK2 V617F mutation causes constitutive kinase activation and polycythaemia vera; n=45 PV patients (exon sequencing; 40/45 V617F-positive = 89%) + 2 PV patients (initial exon 12 screening) + cell-line functional data; paper labels the mutated codon as "exon 12" under a different numbering convention — canonical literature (Levine 2005, Kralovics 2005) designates this as exon 14 · observational + in-vitro · model: human patients + murine Ba/F3, BaF/3-EpoR, FDCP-EpoR cells · archive status: **locally available** —  (local PDF); 3,499 citations (citation_percentile: 100%)

[^kralovics2005]: doi:10.1056/NEJMoa051113 · Kralovics R, Passamonti F, Buser AS et al. · NEJM 2005;352:1779-1790 · discovery: gain-of-function JAK2 V617F mutation in myeloproliferative disorders; n=244 MPN patients (128 PV, 93 ET, 23 IMF) + 71 healthy controls; V617F in 65% PV, 23% ET, 57% IMF · observational + in-vitro (BaF3 proliferation assays) · model: human patients + murine BaF3 cells · archive status: **locally available** —  (local PDF); 3,422 citations (citation_percentile: 100%)

[^levine2005]: doi:10.1016/j.ccr.2005.03.023 · Levine RL, Wadleigh M, Cools J et al. · Cancer Cell 2005;7(4):387-397 · discovery: activating JAK2 V617F mutation in PV, ET, and myeloid metaplasia with myelofibrosis (MMM); n=345 enrolled (327 sufficient DNA): 164 PV, 115 ET, 46 MMM; V617F in ~74% PV (121/164), ~35% ET (37/115 evaluable), ~35% MMM (16/46); demonstrated V617F confers cytokine-independent growth in Ba/F3-EpoR and FDCP-EpoR cells and constitutive STAT5 phosphorylation · observational + in-vitro · model: human patients + murine Ba/F3 and FDCP-EpoR cells · archive status: **locally available** —  (local PDF); 2,966 citations (citation_percentile: 100%)

[^jaiswal2017]: [[studies/jaiswal-2017-chip-cvd-risk]] · doi:10.1056/NEJMoa1701719 · Jaiswal S, Natarajan P, Silver AJ, Gibson CJ, Bick AG et al. · NEJM 2017;377:111-121 · n=4,726 CHD cases + 3,529 controls (4 case-control studies) + 3 prospective cohorts · case-control + prospective cohort analysis · CHIP associated with HR=1.9 (95% CI 1.4–2.7; P<0.001) incident CHD; JAK2 V617F OR=12.1 in early-onset MI analysis · model: human · archive status: **locally available** —  (local PDF); 2,448 citations (citation_percentile: 100%)

[^jaiswal2014]: [[studies/jaiswal-2014-chip-adverse-outcomes]] · doi:10.1056/NEJMoa1408617 · Jaiswal S, Fontanillas P, Flannick J, Manning A et al. · NEJM 2014;371:2488-2498 · n=17,182 WES · observational · JAK2 V617F in 31/746 mutation-positive individuals (~4%); CHIP HR=1.4 all-cause mortality, HR=2.0 CHD · model: human · archive status: verified on [[phenotypes/clonal-hematopoiesis]]

[^xu2015]: [[studies/xu-2015-jak-inhibitor-sasp-frailty]] · doi:10.1073/pnas.1515386112 · Xu M, Tchkonia T, Ding H et al. · PNAS 2015;112(51):E7128-E7136 · n=8–9/group (ruxolitinib/INCB18424 vs vehicle) · in-vivo · p<0.05 (rearing, ambulation, grip strength, RotaRod speed vs vehicle) · model: 24-month-old C57BL/6 male mice, 10 wk treatment; local PDF available · JAK1/2 inhibition; not JAK2-only, but provides the primary preclinical frailty evidence for JAK1/2 inhibitor class
