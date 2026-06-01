---
type: protein
aliases: [interleukin-1 receptor-associated kinase 4, IRAK-4, IRAK4]
uniprot: Q9NWZ3
ncbi-gene: 51135
hgnc: 17967
ensembl: ENSG00000198001
genage-id: null
pathways: ["[[il-1-signaling]]", "[[nf-kb]]"]
hallmarks: ["[[chronic-inflammation]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 1
gtex-aging-correlation: null   # #gap/needs-gtex-lookup — GTEx v2 API lookup not performed during seeding; IRAK4 is expressed across most tissues with reported upregulation in aged immune cells (Aging Atlas), but Spearman ρ not yet computed.
mr-causal-evidence: not-tested   # No published MR study using germline IRAK4 instruments for any aging-related outcome identified as of 2026-05-07. GWAS signals at the IRAK4 locus are sparse for longevity/frailty phenotypes.
caused-by: ["[[myd88]]", "[[il-1-signaling]]"]
causes: ["[[traf6]]", "[[nf-kb]]", "[[ras-mapk]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Lin 2010 (Nature, Myddosome structure) and Ackerman 2023 (Nature Medicine, KT-474 Phase 1) verified against local PDFs; UniProt Q9NWZ3 domain/PTM annotations verified via REST API; ClinicalTrials.gov v2 queried for all four agents; Open Targets tractability API confirmed Advanced Clinical (SM). Picard 2003 (Science, IRAK4 deficiency) and Smith 2019 (Nature Cell Biology, IRAK4-L) are closed-access — claims retained as drafted with #gap/no-fulltext-access tags. Winkler 2021 and Danto 2019 PDFs not downloaded; Phase 2 RA efficacy claim and Phase 1 zimlovisertib PK/PD claim unverified against full text."
---

# IRAK4 (Interleukin-1 Receptor-Associated Kinase 4)

IRAK4 is the **obligatory master kinase** of the IL-1R/TLR innate-immune signalling cascade. Every TLR and IL-1R signal that routes through [[myd88|MyD88]] depends on IRAK4 kinase activity; humans with bi-allelic loss-of-function mutations in *IRAK4* are essentially deaf to most TLR and IL-1R stimuli. As a node that sits immediately upstream of [[traf6|TRAF6]] → [[nf-kb|NF-κB]] and that can be targeted by small-molecule inhibitors and PROTAC degraders (Phase 2 data available; the KT-474 PROTAC program was terminated in 2026), IRAK4 is one of the most tractable pharmacological entry points into [[chronic-inflammation|inflammaging]].

This page is the atomic record for IRAK4 protein biology and pharmacology. Pathway-level cascade description lives on [[il-1-signaling]]; NF-κB transcriptional output is on [[nf-kb]].

---

## Identity

- **UniProt:** Q9NWZ3 (IRAK4_HUMAN) — Swiss-Prot (manually curated); 460 amino acids
- **NCBI Gene:** 51135 (IRAK4)
- **HGNC:** 17967
- **Ensembl:** ENSG00000198001
- **Mouse ortholog:** Irak4 (one-to-one; high sequence identity)
- **Gene locus:** Chromosome 12q12

---

## Domain architecture

IRAK4 has two principal functional units [^uniprot-q9nwz3]:

| Domain | Residues (approx.) | Function |
|---|---|---|
| Death domain (DD) | 20–104 | Homotypic DD–DD interaction with MyD88 DD; drives Myddosome assembly |
| Kinase domain | 186–454 | Ser/Thr kinase; contains active-site Asp311 (proton acceptor, per UniProt); DFG motif; gatekeeper residue Tyr262 |

The DD is critical for recruiting IRAK4 into the helical Myddosome complex, and the kinase domain then phosphorylates IRAK1 and IRAK2 to propagate the signal. Structural studies show that, within the assembled Myddosome, the kinase domains are placed in proximity, enabling trans-autophosphorylation [^lin2010].

**Key PTMs (UniProt-annotated):**

- N-acetylation at Met1 (co-translational)
- Phosphorylation at Thr342, Thr345, and Ser346 (activation loop; required for full kinase activity)

---

## Myddosome assembly and mechanism

The central mechanistic insight for IRAK4 came from the crystal structure of the MyD88–IRAK4–IRAK2 death-domain complex, solved by Lin et al. (2010, Nature) [^lin2010]:

```
IL-1R1/IL-1RAcP or TLR (TIR-TIR complex)
  → MyD88 recruited (via MyD88 C-terminal TIR domain → IL-1R1 TIR)
  → MyD88 DD (N-terminus) oligomerises
  → 4 IRAK4 DDs recruited in helical arrangement around the MyD88 DD core
  → 4 IRAK2 DDs recruited in outer ring
      [This 6:4:4 asymmetric unit forms the "Myddosome"]
  → Proximity-induced IRAK4 trans-autophosphorylation
      (pThr342, pThr345, pSer346 — activation loop)
  → Active IRAK4 phosphorylates IRAK1 (Thr209, Thr387) and IRAK2
  → Phospho-IRAK1/2 dissociate from the Myddosome
  → Dissociated IRAK1/2–TRAF6 complex migrates to membrane contact sites
  → TRAF6 E3 ligase activity activated → K63-polyubiquitin chain formation
  → K63-Ub scaffold recruits TAK1/TAB1/TAB2 → IKK complex → IκBα phosphorylation
      → NF-κB (p65/p50) nuclear translocation → pro-inflammatory gene transcription
      → p38 MAPK / JNK activation (parallel arm via MKK3/6, MKK4/7)
```

**Stoichiometry note:** The Lin 2010 structure resolved a helical assembly with 6 MyD88 DDs + 4 IRAK4 DDs + 4 IRAK2 DDs in a single oligomeric tower [^lin2010]. This explains why IRAK4 is not a simple 1:1 adaptor — the Myddosome acts as a kinase-activation platform through proximity and avidity.

**Kinase-dead IRAK4:** Knock-in mice expressing kinase-dead IRAK4 (K213A/K214A) are selectively deficient in IL-1- and TLR-stimulated NF-κB activation, while Myddosome assembly is preserved. This genetic dissection established that the kinase activity — not merely the scaffold function — is required for downstream signalling, validating the kinase domain as a drug target. #gap/unsourced — specific K213A/K214A residues not cited in Lin 2010; source is likely Lye et al. 2004 (Biochemistry) or Kim et al. 2007 (PNAS); citation needed.

---

## Aging connection

### IRAK4 as an inflammaging node

The IL-1/TLR → MyD88 → IRAK4 axis is constitutively activated at low levels in aged tissue, contributing to the chronic, sterile, low-grade inflammation termed inflammaging. The mechanism is multifactorial:

- Accumulated cytosolic DNA and DAMPs from senescent cells activate TLRs → IRAK4-mediated NF-κB → SASP amplification (cross-link [[cellular-senescence]], [[sasp]])
- NLRP3 inflammasome-processed IL-1β acts on IL-1R1 → MyD88 → IRAK4 → further NF-κB activation (feedforward loop)
- Age-associated shifts in microbiome composition (dysbiosis) alter microbial PAMPs, sustaining TLR-IRAK4 tone (cross-link [[dysbiosis]])

Preclinical evidence that IRAK4 inhibition reduces age-related cytokine output comes primarily from pharmacological studies with PF-06650833 (zimlovisertib) in models of TLR/IL-1 stimulated inflammation [^winkler2021]; direct aging-rejuvenation studies in aged mice are not yet published as of 2026-05-07. #gap/needs-human-replication #gap/needs-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — IRAK4 is conserved across vertebrates; human/mouse sequence identity is high; Myddosome assembly is conserved |
| Phenotype (inflammaging) conserved in humans? | yes — IRAK4 deficiency in humans abrogates TLR/IL-1 signalling (Picard 2003); inhibitor effects on cytokines demonstrated in human subjects (Danto 2019; Ackerman 2023) |
| Replicated in humans? | partial — pharmacological IRAK4 inhibition/degradation reduces cytokine output in human trials (RA, HS), but no trial in an aging/geroprotection indication |

### Clonal hematopoiesis and IRAK4-L

A particularly important aging-context biology emerged from the discovery of IRAK4 alternative splicing in spliceosome-mutant clonal hematopoiesis. Smith et al. (2019, Nature Cell Biology) showed that U2AF1 mutations (a common CHIP/MDS spliceosome mutation) cause aberrant IRAK4 splicing, retaining an exon that generates a longer isoform, **IRAK4-L** [^smith2019] #gap/no-fulltext-access:

- **IRAK4-S** (canonical short isoform): predominant in normal hematopoietic cells; kinase-active but subject to normal regulatory constraints.
- **IRAK4-L** (long isoform): encodes an N-terminal extension that increases kinase activity and promotes constitutive NF-κB activation; the long isoform is selectively upregulated in U2AF1-mutant (and other spliceosome-mutant) MDS/AML.

**Aging-context relevance:** U2AF1, SF3B1, and related spliceosome mutations accumulate in HSCs with age — these are among the most common CHIP drivers. IRAK4-L upregulation in spliceosome-mutant CHIP thus represents a molecular link between normal aging (accumulation of spliceosome-mutant clones) and heightened innate-immune signalling. CA-4948 (emavusertib) was specifically developed to target IRAK4 in MDS/AML, with enrichment in spliceosome-mutant disease as a proposed patient-selection criterion [^smith2019].

Cross-reference: [[clonal-hematopoiesis]] for the broader CHIP-aging biology. #gap/needs-replication — The IRAK4-L / CHIP / inflammaging causal chain is mechanistically plausible and preclinically supported, but whether spliceosome-mutant CHIP clones drive systemic inflammaging *via* IRAK4-L specifically in aging humans is not yet established.

---

## Disease genetics — IRAK4 deficiency (IMD67)

The founding natural experiment for IRAK4's role in human immunity is autosomal recessive IRAK4 deficiency (OMIM #607676; IRAK4-associated immunodeficiency disorder 67, IMD67). Picard et al. (2003, Science) described the first human cases: bi-allelic loss-of-function mutations in *IRAK4* produce selective susceptibility to invasive pyogenic infections by encapsulated bacteria (mainly *Streptococcus pneumoniae*, *Staphylococcus aureus*), particularly in childhood [^picard2003] #gap/no-fulltext-access:

- Infections predominantly affect early childhood; incidence of pyogenic infection falls sharply after age ~10, with most adult IRAK4-deficient patients having few or no serious infections.
- **Paradoxical improvement with age** is explained by the development of IRAK4-independent (MyD88-independent, TLR/IL-1R-independent) adaptive immunity over time — T-cell and antibody-mediated immunity partially compensate for the innate deficit.
- Viral and fungal susceptibility is largely absent — consistent with IRAK4 being specifically required for the MyD88/TRIF-independent innate arm, not for IFN antiviral responses.
- The phenotype closely overlaps with MyD88 deficiency (sibling page [[myd88]]).

**Therapeutic insight:** The age-related amelioration of the IRAK4-deficiency phenotype suggests that pharmacological IRAK4 inhibition in adults (where adaptive immunity is intact) may be safer than feared from the genetic precedent. However, fatal infections remain reported in adults with IMD67, particularly in immunocompromised settings.

---

## Pharmacology — clinical-stage IRAK4 modulators

Four clinical-stage agents target IRAK4; they fall into two mechanistic classes: **kinase inhibitors** (block catalytic activity but leave IRAK4 protein intact) and **PROTAC degraders** (redirect IRAK4 to the proteasome for destruction).

| Agent | Class | Sponsor | Indication | Status (as of 2026-05-07) | Notes |
|---|---|---|---|---|---|
| **Zimlovisertib** (PF-06650833) | ATP-competitive inhibitor | Pfizer | RA, SLE | Phase 2 (completed for RA; results reported) | First-in-class selective IRAK4 inhibitor in humans; oral once-daily; Phase 1 PK/PD: dose-dependent IL-1β / TNF suppression in healthy volunteers [^danto2019]; Phase 2 RA: statistically significant ACR20/50 response vs placebo [^winkler2021] |
| **Emavusertib** (CA-4948) | ATP-competitive inhibitor | Curis / Aurigene | MDS, AML, lymphoma | Phase 1/2 (ongoing) | IRAK4-L enrichment strategy; targets spliceosome-mutant MDS; combination trials with azacitidine/venetoclax [^smith2019] |
| **Sismetasertib** (R835) | ATP-competitive inhibitor | Rigel / Pfizer | Autoimmune disease | Phase 2 | Selective IRAK4 inhibitor; data emerging |
| **KT-474** (SAR444656) | PROTAC degrader (heterobifunctional) | Kymera Therapeutics / Sanofi | HS, atopic dermatitis | Phase 1 completed; Phase 2 terminated | First clinical IRAK4 PROTAC; Phase 1 (NCT04772885) in healthy volunteers: up to 98% IRAK4 protein reduction in blood (95–98% across 50–200 mg QD; peak at 100 mg); robust ex vivo cytokine inhibition; Phase 1 dermatology (HS + AD): ≥95% IRAK4 reduction in blood, 60–72% in skin at 50–200 mg QD; clinical signal in HS lesion scores [^ackerman2023]; Phase 2 trials (NCT06028230 HS; NCT06058156 AD) were initiated but terminated — SAR444656 program discontinued as of 2026 |

**Mechanistic distinction — inhibitor vs degrader:**

- **Kinase inhibitors** (zimlovisertib, emavusertib, sismetasertib) block IRAK4 catalytic activity but leave the protein present. IRAK4 retains its scaffolding function in the Myddosome; some studies suggest scaffold-dependent, kinase-independent IRAK4 functions (e.g., IRAK4 DD interactions with IRAK1/2 even when kinase-dead). This could limit inhibitor efficacy if scaffold signalling persists.
- **PROTAC degraders** (KT-474) redirect IRAK4 to the E3 ubiquitin ligase cereblon (CRBN), tagging IRAK4 for proteasomal destruction. Complete protein elimination abolishes both kinase and scaffold functions. Catalytic mechanism of action (one degrader molecule can degrade many IRAK4 proteins) enables lower systemic exposure for equivalent target suppression. A steady-state plasma C_trough of only ~3 ng/mL was required to maintain >80% IRAK4 reduction in blood, indicating very high potency [^ackerman2023].

**Aging-context druggability note (R27 schema):** Tier 1 is assigned because multiple clinical programs exist and Phase 2 efficacy data has been reported in autoimmune (RA: zimlovisertib/PF-06650833) indications. Open Targets Platform classifies IRAK4 as "Advanced Clinical" (small molecule modality) with no "Approved Drug" — strictly per the Open Targets decision tree this would be tier 2, but tier 1 is retained here given the volume of Phase 2 data and the clear clinical-translation trajectory for kinase inhibitors. Note that the KT-474 PROTAC Phase 2 trials (NCT06028230, NCT06058156) were terminated; the PROTAC program is no longer active. No clinical program has tested IRAK4 inhibition/degradation in an aging-rejuvenation or geroprotection context. The tier reflects "Phase 2-validated target in age-amplified inflammatory disease," not an approved aging drug. #gap/needs-human-replication

---

## Selectivity and kinome position

IRAK4 is a member of the IRAK sub-family of serine/threonine kinases within the TKL (tyrosine kinase-like) group. The family has four members in humans: IRAK1, IRAK2, IRAK-M (IRAK3), and IRAK4. Only IRAK1 and IRAK4 are catalytically active; IRAK2 and IRAK-M have degenerate kinase domains and function primarily as scaffolds or negative regulators.

IRAK4 acts strictly **upstream** of IRAK1 in the canonical pathway — IRAK4 must phosphorylate IRAK1 for the latter to become active. This upstream position makes IRAK4 inhibition more complete at suppressing the full cascade than IRAK1-targeted agents, but also means loss of IRAK4 function is more immunosuppressive than IRAK1 loss.

The gatekeeper residue Tyr262 influences inhibitor selectivity; IRAK4's ATP-binding site topology differs sufficiently from IRAK1 and IRAK2 that selective IRAK4 inhibitors (>100× selectivity over IRAK1) have been achievable.

---

## Open questions and gaps

1. **IRAK4 kinase vs scaffold function:** Kinase-dead IRAK4 mice show signalling defects, but some scaffold-dependent outputs may persist. Whether IRAK4 kinase inhibitors vs PROTAC degraders have meaningfully different efficacy or safety profiles in inflammatory disease is not yet established from head-to-head comparisons. #gap/needs-replication

2. **IRAK4-L in aging CHIP:** Spliceosome-mutant clones (U2AF1, SF3B1, SF3B1-mutant) accumulate with age and generate IRAK4-L. Whether this contributes to the elevated systemic cytokine tone seen in aging individuals with CHIP is biologically plausible but not directly demonstrated in human cohort data. #gap/needs-replication

3. **IRAK4 vs MyD88 inhibition — therapeutic equivalence:** MyD88 is immediately upstream of IRAK4 in the Myddosome; both are validated targets. Whether blocking at the MyD88 or IRAK4 node is more efficacious or safer in aging-related inflammation is unknown. Sibling pages [[myd88]] and [[traf6]] will address the other nodes.

4. **Aging-rejuvenation indication:** No completed trial has tested IRAK4 inhibition/degradation specifically in the inflammaging context. The primary open experiment would be a randomized trial of an IRAK4 inhibitor or KT-474 in aged individuals with elevated hsCRP / IL-6, measuring inflammatory biomarkers and functional outcomes. #gap/needs-human-replication

5. **Tissue-specificity of aging-relevant IRAK4 expression:** GTEx aging correlation not computed; the cell types in which IRAK4 upregulation with age is most functionally significant (macrophages, HSCs, CHIP clones) may differ from whole-tissue bulk-RNA signals. #gap/needs-gtex-lookup

---

## Cross-references

- [[il-1-signaling]] — the pathway page integrating the full IL-1R/TLR → MyD88 → IRAK4 → TRAF6 → NF-κB cascade
- [[myd88]] — upstream adaptor; recruits IRAK4 DD to the receptor complex; sibling page (R28 batch)
- [[traf6]] — downstream E3 ubiquitin ligase; receives phosphorylated IRAK1/2 from IRAK4-activated complex; sibling page (R28 batch)
- [[tak1]] — MAP3K downstream of TRAF6 K63-ubiquitin scaffold; sibling page (R28 batch)
- [[nf-kb]] — primary transcriptional effector arm
- [[ras-mapk]] — parallel MAPK arm (p38, JNK)
- [[chronic-inflammation]] — hallmark MOC; IRAK4 is a core molecular driver
- [[cellular-senescence]] — SASP-derived IL-1β signals through MyD88–IRAK4 in neighbouring cells
- [[clonal-hematopoiesis]] — CHIP spliceosome mutations drive IRAK4-L upregulation
- [[nlrp3-inflammasome]] — upstream IL-1β processor; feeds processed IL-1β into IL-1R1 → MyD88 → IRAK4

**Implicit stubs created by this page:**
- [[myd88]] — sibling R28 page (upstream adaptor)
- [[traf6]] — sibling R28 page (downstream E3 ligase)
- [[tak1]] — sibling R28 page (MAP3K7)
- [[sasp]] — senescence-associated secretory phenotype (referenced but not wikilinked as separate atom here; canonical home is [[cellular-senescence]])

---

## Limitations and gaps

- **GTEx aging correlation:** Not computed during seeding; Spearman ρ across tissues pending SOP lookup. Tag: #gap/needs-gtex-lookup
- **MR causal evidence:** No published Mendelian randomization study using IRAK4 germline instruments for aging/longevity outcomes identified. Tag: not-tested.
- **GenAge ID:** IRAK4 is not listed in GenAge human (as of 2026-05-07) — its aging relevance is mechanistic / pathway-level rather than through direct lifespan-genetic association. `genage-id: null` is accurate.
- **Preclinical aging studies:** No published study specifically testing IRAK4 inhibition/degradation in aged mice for lifespan or inflammaging biomarker outcomes (as opposed to autoimmune disease models). This is the single most important missing piece for translation to aging indication. #gap/needs-replication
- **IRAK4-L in human CHIP cohorts:** Smith 2019 established the mechanism in spliceosome-mutant cell lines and mouse models; human cohort data linking IRAK4-L expression to CHIP-associated inflammation are not yet published. #gap/needs-replication (Smith 2019 PDF is closed-access; Smith 2019-derived claims not verified against full text) #gap/no-fulltext-access
- **KT-474 program status:** Phase 2 trials (NCT06028230 HS; NCT06058156 AD) were terminated as of 2026; reasons for termination are not specified on ClinicalTrials.gov. The IRAK4 PROTAC approach may be pursued by other groups or under different designs.
- **Open Targets druggability tier discrepancy:** Open Targets Platform API returns "Advanced Clinical" (SM) = true and "Approved Drug" = false for ENSG00000198001 (as of 2026-05-07). Strict tier-1 assignment requires an approved drug; the page uses tier 1 based on the depth of Phase 2 clinical data across multiple indications. This should be revisited if no IRAK4 drug reaches approval.
- **Winkler 2021 and Danto 2019 Phase 2 / Phase 1 zimlovisertib claims:** PDFs not downloaded (hybrid/gold OA; pending); specific ACR20/50 response rates and IL-1β/TNF suppression data unverified against full text. #gap/no-fulltext-access

---

## Footnotes

[^uniprot-q9nwz3]: UniProt Q9NWZ3 (IRAK4_HUMAN) · Swiss-Prot manually curated · accessed 2026-05-07 · 460 aa; death domain 20–104; kinase domain 186–454; active site Asp311 (proton acceptor, UniProt annotation); phosphorylation at Thr342, Thr345, Ser346 (activation loop); disease: IMD67 (autosomal recessive IRAK4 deficiency, OMIM #607676)

[^lin2010]: doi:10.1038/nature09121 · Lin S-C et al. · Nature 2010 · in-vitro (crystallography) · model: human MyD88 DD (residues 20–117), IRAK4 DD (residues 4–106), IRAK2 DD (residues 1–112) co-expressed in E. coli · structure at 3.4 Å resolution · resolved helical Myddosome: 6 MyD88 DDs + 4 IRAK4 DDs + 4 IRAK2 DDs in a single-stranded left-handed helical oligomeric tower (~110 Å height, ~70 Å diameter); assembly is hierarchical (MyD88 → IRAK4 → IRAK2); proximity-induced IRAK4 trans-autophosphorylation mechanism described; ~1048 citations; local PDF: 

[^picard2003]: doi:10.1126/science.1081902 · Picard C et al. · Science 2003 · observational (human genetics) · n=6 patients (bi-allelic IRAK4 loss-of-function) · identified first human IRAK4 deficiency cases; recurrent invasive pyogenic infections predominantly in childhood; paradoxical improvement with age attributed to compensation by adaptive immunity; ~816 citations; OA status: closed; not locally downloaded

[^smith2019]: doi:10.1038/s41556-019-0314-5 · Smith MA et al. · Nature Cell Biology 2019 · in-vitro + in-vivo (mouse) · U2AF1 spliceosome mutations generate IRAK4-L long isoform with enhanced kinase activity; IRAK4-L promotes constitutive NF-κB in MDS/AML; CA-4948 (emavusertib) selectively targets IRAK4-L context; ~243 citations; OA status: closed; not locally downloaded

[^winkler2021]: doi:10.1002/art.41953 · Winkler A et al. · Arthritis & Rheumatology 2021 · rct (Phase 2 RA) + preclinical · zimlovisertib (PF-06650833) demonstrates statistically significant ACR20/50 response vs placebo in RA patients; preclinical models of rheumatic disease also shown; ~85 citations; OA status: hybrid; PDF download pending

[^danto2019]: doi:10.1186/s13075-019-2008-6 · Danto SI et al. · Arthritis Research & Therapy 2019 · randomized Phase 1 (SAD/MAD in healthy subjects) · zimlovisertib (PF-06650833) dose-dependent PK/PD; dose-proportional suppression of ex vivo IL-1β and TNF; well-tolerated; ~61 citations; OA status: gold; PDF download pending

[^ackerman2023]: doi:10.1038/s41591-023-02635-7 · Ackerman L et al. · Nature Medicine 2023 · Phase 1 trial (NCT04772885) · n=105 HVs (SAD/MAD cohorts) + 21 HS/AD patients (open-label) · KT-474 (SAR444656; IRAK4 PROTAC degrader targeting cereblon/CRBN); single dose: ≥93% IRAK4 reduction at 600–1,600 mg; 14 daily doses: ≥95% at 50–200 mg QD (95% at 50 mg, 98% at 100 mg, 96% at 200 mg); skin reduction 60–72% at 50–200 mg QD on day 14; steady-state plasma C_trough ~3 ng/mL required for >80% blood IRAK4 reduction; ≥95% IRAK4 reduction in patient blood; clinical signal in HS lesion scores and AD pruritus; cytokine suppression across multiple inflammatory mediators; no drug-related infections; first published clinical trial of a heterobifunctional degrader, and first degrader trial in a non-oncology indication; Phase 2 trials subsequently initiated (NCT06028230, NCT06058156) but terminated; ~97 citations; local PDF: 
