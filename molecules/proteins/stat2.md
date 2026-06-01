---
type: protein
aliases: [signal transducer and activator of transcription 2, p113]
uniprot: P52630
ncbi-gene: 6773
hgnc: HGNC:11363
ensembl: ENSG00000170581
mouse-ortholog: Stat2
key-domains: [N-terminal domain, coiled-coil domain, DNA-binding domain, linker domain, SH2 domain, transactivation domain]
key-ptms: [Tyr690-phosphorylation, Ser283-phosphorylation, Ser287-phosphorylation, Thr294-phosphorylation, Ser753-phosphorylation, Thr800-phosphorylation]
pathways: ["[[jak-stat-pathway]]", "[[type-i-interferon-signaling]]"]
hallmarks: ["[[chronic-inflammation]]"]
known-interactors: ["[[stat1]]", "[[tyk2]]", "[[irf9]]", "[[irf3]]"]
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
literature-checked-through: 2026-05-13
verified: true
verified-date: 2026-05-13
verified-by: claude
verified-scope: "All six primary sources read end-to-end (PDFs). Corrections applied: (1) IFNAR2 interactor row: 'via STAT2 TAD' corrected to 'via STAT2 CC+DB domains' per Arimoto 2017 Fig. 3. (2) GOF section: 'stabilize active STAT2' claim removed (unsupported); specific R148Q/R148W variants added; Gruber 2020 primary citation added. (3) Takahashi footnote: 'human IMR90 cells' corrected to 'human TIG-3 fibroblasts'. (4) Hambleton footnote: n updated to reflect multi-member pedigree. (5) Footnote archive status lines updated. Canonical-DB identity fields (UniProt accession, NCBI Gene, HGNC, Ensembl) verified against UniProt P52630 flat file."
---

# STAT2

STAT2 (Signal Transducer and Activator of Transcription 2) is the obligate type-I interferon–specific STAT. Unlike [[stat1]], which participates in both type-I (IFN-α/β) and type-II (IFN-γ) responses, STAT2 is selectively recruited to the IFN-α/β receptor complex (IFNAR1/IFNAR2) and has no established role in IFN-γ signaling. Its canonical function is to oligomerize with STAT1 and IRF9 into the ISGF3 heterotrimer, which binds IFN-stimulated response elements (ISREs) in target gene promoters and drives the antiviral transcriptional program. In aging contexts, tonic or dysregulated type-I IFN signaling — mediated partly through ISGF3 — contributes to the sterile inflammatory milieu of [[chronic-inflammation|inflammaging]].

## Identity

- **UniProt:** P52630 (STAT2_HUMAN)
- **NCBI Gene:** 6773
- **HGNC:** HGNC:11363 (symbol: STAT2)
- **Ensembl:** ENSG00000170581
- **Mouse ortholog:** Stat2 (one-to-one ortholog; functionally conserved)
- **Length:** 851 amino acids (canonical isoform)
- **Molecular weight:** ~113 kDa (referred to as "p113" in older literature)

## Domain architecture

STAT2 follows the canonical seven-domain STAT architecture, with notable distinctions from STAT1:

| Domain | Residues (approx.) | Function |
|---|---|---|
| N-terminal domain (NTD) | 1–130 | Cooperativity between tandem STAT dimers; head-to-head stacking |
| Coiled-coil domain (CCD) | 131–320 | Cytoplasmic scaffolding; IRF9 interaction surface |
| DNA-binding domain (DBD) | 321–490 | Contacts DNA within ISGF3; alone has weak sequence preference |
| Linker domain | 491–571 | Structural bridge between DBD and SH2 |
| SH2 domain | 572–667 | Phosphotyrosine recognition; docks onto IFNAR1 pTyr docking site; recruits TYK2 substrate |
| Transactivation domain (TAD) | 720–851 | Longest TAD among STATs; mediates coactivator recruitment; essential for ISG induction |

The STAT2 TAD is substantially longer than the STAT1 TAD and is required for full transcriptional activation of ISGs even when STAT1 TAD is absent — an important functional asymmetry within ISGF3 [^levy-darnell-review].

## Activation mechanism

### Canonical type-I IFN signaling

1. IFN-α or IFN-β binds the IFNAR1/IFNAR2 heterodimer at the cell surface.
2. [[tyk2]] (constitutively associated with IFNAR1) and JAK1 (associated with IFNAR2) are activated by receptor dimerization and trans-phosphorylation.
3. TYK2 phosphorylates **Tyr690** on STAT2; JAK1 phosphorylates Tyr701 on [[stat1]].
4. Phospho-STAT2 and phospho-STAT1 heterodimerize via reciprocal SH2 domain–pTyr interactions.
5. The STAT1:STAT2 heterodimer recruits **IRF9** (via IRF9's IAD domain contacting the STAT2 coiled-coil domain) → forms the **ISGF3** heterotrimer.
6. ISGF3 translocates to the nucleus and binds ISREs (consensus: TTTCNNTTTC) → drives transcription of hundreds of interferon-stimulated genes (ISGs) including OAS1, MX1, IFIT1/2/3, RSAD2, and ISG15.

STAT2 **does not form homodimers** and does not bind IFN-γ–activated sequence (GAS) elements. The ISGF3 specificity for ISRE (vs GAS) is the biochemical basis for STAT2's type-I IFN restriction [^levy-darnell-review].

### Unphosphorylated ISGF3 (U-ISGF3)

Even in the absence of active IFN signaling, unphosphorylated STAT1, STAT2, and IRF9 form a low-affinity complex called **U-ISGF3**. U-ISGF3 drives constitutive, basal-level expression of a subset of ISGs — predominantly those with high-affinity ISREs — and is distinct from the phospho-ISGF3 transcriptional program in kinetics and target-gene repertoire. In aged and senescent cells, U-ISGF3 contributes to ISG overexpression even without exogenous IFN stimulus (see Aging context below) [^yamagami2018].

## Negative feedback: the STAT2–USP18 axis

STAT2 plays a dual role — it is both a positive effector and a required scaffold for negative feedback. USP18 (a deubiquitylase that removes ISG15 modifications and independently inhibits IFNAR2 signaling) is recruited to IFNAR2 through a constitutive interaction with **STAT2**, not with the receptor itself. This means:

- STAT2 physically bridges USP18 to IFNAR2, dampening subsequent IFN-α signaling.
- This feedback acts specifically on IFN-α but not IFN-β (IFN-β uses a distinct receptor configuration that bypasses USP18 blockade), creating a natural desensitization asymmetry.
- **In STAT2-deficient cells, USP18 cannot localize to IFNAR2**, so the negative-feedback loop is absent — yet signaling is also absent because STAT2 is required for forward signaling. This creates a paradox in STAT2 LOF: abrogated signaling, not hyper-signaling [^arimoto2017].

The STAT2 abundance controls pathway gain: mathematical modeling shows STAT2 levels predict IFN-α amplitude, while USP18 abundance controls desensitization kinetics [^kok2020].

## Loss-of-function: Hambleton 2013

The only well-characterized human STAT2 loss-of-function syndrome was reported by Hambleton et al. (2013): a consanguineous pedigree with a homozygous intronic mutation in *STAT2* that abolished correct splicing, eliminating STAT2 protein [^hambleton2013].

Key clinical features:
- **Index case**: severe vaccine-strain measles pneumonitis following routine MMR immunization (near-fatal).
- **Sibling**: died from an uncharacterized viral infection in infancy.
- **Surviving STAT2-deficient individuals**: otherwise generally healthy with intact adaptive immunity and normal development — suggesting type-I IFN/ISGF3 signaling is **not** essential for defense against most common childhood pathogens, but is critical for live-attenuated vaccine strains.
- Patient fibroblasts showed profoundly permissive viral replication correlated with absent type-I IFN signaling.

This stands in contrast to STAT1 LOF, which causes broader susceptibility to mycobacterial, bacterial, and viral pathogens, reflecting STAT1's participation in both type-I and type-II IFN arms.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes (LOF syndrome documented) |
| Replicated in humans? | yes (LOF); gain-of-function/aging-context not studied |

## Gain-of-function: pseudo-TORCH syndrome 3

STAT2 also features in gain-of-function (GOF) interferonopathies. Homozygous missense mutations at **Arg148** (R148Q or R148W; both in the coiled-coil domain) impair USP18 interaction with STAT2, preventing USP18 from localizing to IFNAR2 and exerting negative feedback — the result is constitutively elevated type-I IFN signaling. This mechanism causes **pseudo-TORCH syndrome 3** (autosomal recessive; also phenocopied by inherited USP18 deficiency), characterized by neonatal-onset multisystemic inflammation, cerebral calcifications, white matter abnormalities, coagulopathy, and elevated ISG signatures, mimicking congenital TORCH infections without an infectious etiology [^uniprot-stat2-gof][^gruber2020]. #gap/needs-replication — only a small number of affected individuals with STAT2 R148Q/R148W have been described; expanded cohort characterization is needed.

## Aging context

STAT2's connection to aging operates through several mechanisms, all mediated by the broader type-I IFN axis rather than STAT2 in isolation:

### 1. Tonic IFN signaling and inflammaging

Aged tissues exhibit chronically elevated basal ISG expression — part of the sterile inflammatory milieu called [[chronic-inflammation|inflammaging]]. This tonic ISG signature is driven in part by:
- **cGAS–STING activation** by cytosolic DNA (micronuclei, cytoplasmic chromatin fragments, mitochondrial DNA leakage) in senescent cells, producing IFN-β [^takahashi2018-sasp].
- Downstream STAT2-dependent ISGF3 target gene induction contributing to the ISG component of the [[sasp|SASP]].

#gap/needs-replication — the relative contribution of STAT2 vs. STAT1 vs. IRF9 to the basal ISG component of SASP has not been systematically dissected in primary human aged cells.

### 2. U-ISGF3 in senescent cells

Yamagami et al. (2018) showed that senescent human fibroblasts display constitutive ISG transcription mediated by **unphosphorylated ISGF3 (U-ISGF3)** independent of measurable IFN production. This U-ISGF3 activity required the presence of STAT2 (and STAT1 + IRF9) but not Tyr690 phosphorylation, suggesting that protein accumulation — not kinase signaling — can sustain a low-level antiviral-like transcriptional state in aging cells [^yamagami2018].

Implication: STAT2 protein levels in senescent cells may be functionally relevant independent of canonical TYK2-mediated phosphorylation — a distinction overlooked in phosphoproteomics studies that key on pTyr690.

### 3. STAT2 as a specificity determinant: ISGF3 vs. STAT1 homodimer (GAF)

Across a broad aging literature, IFN-γ signaling (mediated by STAT1 homodimers / GAF binding GAS elements) has been more prominently studied in aging than type-I IFN signaling. STAT2's selective contribution to the ISGF3/ISRE axis means it distinguishes the antiviral ISG program from the pro-inflammatory IFN-γ arm — a distinction with therapeutic relevance. Blocking IFNAR (as with anifrolumab in lupus) abrogates STAT2 signaling specifically, while leaving IFN-γ/STAT1-GAF intact.

#gap/needs-human-replication — Whether pharmacological suppression of the ISGF3/STAT2 axis (upstream via TYK2 or IFNAR blockade) reduces inflammaging markers or improves aging phenotypes has not been tested in aged human cohorts. TYK2 inhibitors (e.g., deucravacitinib) approved for psoriasis/lupus offer a translatable tool.

## Pathway membership

- [[jak-stat-pathway]] — STAT2 is the type-I IFN–specific node; activated by [[tyk2]] at IFNAR1
- [[type-i-interferon-signaling]] — core effector of the antiviral transcriptional response
- [[cgas-sting]] — upstream source of IFN-β → ISGF3 activation in senescent cells

## Key interactors

| Interactor | Interaction type | Functional consequence |
|---|---|---|
| [[stat1]] | Obligate heterodimer (pTyr-SH2) | Forms ISGF3 with IRF9 |
| [[tyk2]] | Kinase → substrate (Tyr690) | Activates STAT2 upon IFN-α/β stimulation |
| IRF9 | Non-covalent (coiled-coil contact) | Completes ISGF3; provides ISRE-binding specificity |
| IFNAR1 | Docking (via TYK2 scaffold) | Receptor-proximal activation |
| IFNAR2 | Constitutive (via STAT2 CC+DB domains) | Recruits USP18 for negative feedback [^arimoto2017] |
| USP18 | Scaffolding | STAT2 bridges USP18 to IFNAR2; negative-feedback loop |

## Pharmacology and druggability

**Druggability tier: 3** (predicted druggable; no clinical STAT2-direct inhibitor). Upstream modulators exist:

- **TYK2 inhibitors** (deucravacitinib — FDA-approved for psoriasis; selective TYK2 pseudokinase domain) — block Tyr690 phosphorylation, abrogating ISGF3 assembly. Reduce type-I IFN-driven ISG signatures in SLE patients. Not studied in aging.
- **IFNAR blockade** (anifrolumab — FDA-approved for SLE) — abolishes both STAT1 and STAT2 activation at the receptor level. Phenocopies STAT2 LOF for downstream signaling, with the important difference that JAK1/TYK2-independent receptor proximal signaling is also blocked.
- **JAK1 inhibitors** (upadacitinib, filgotinib) — broad JAK inhibition; less STAT2-specific than TYK2i.

**Aging-context tier-3 rationale.** No clinical drug targeting STAT2 directly for an aging indication exists. TYK2 inhibitors engage the pathway clinically but are approved for autoimmune indications only; no aging-rejuvenation trial has engaged STAT2/TYK2 as a primary endpoint. Tier 3 reflects predicted druggability via upstream kinase modulation. #gap/needs-human-replication — testing whether TYK2i reduces tonic ISG burden in aged individuals remains an open experimental question.

## Limitations and gaps

- `#gap/needs-human-replication` — STAT2 aging-specific role is inferred from type-I IFN axis biology; no primary studies have examined STAT2 protein levels or activity specifically in aged human cells vs senescent cells vs old mouse tissue.
- `#gap/no-mechanism` — The driver of U-ISGF3 accumulation in senescent cells (vs simple IFN-responsive activation) is not mechanistically resolved; chromatin accessibility changes at ISREs are hypothesized but untested.
- `#gap/needs-canonical-id` — GenAge ID for STAT2: not found in HAGR/GenAge human aging gene set as of 2026-05-13; STAT2 is not a curated aging gene in the canonical sense. Leave `genage-id` null.
- `#gap/contradictory-evidence` — Whether inflammaging ISG signature is driven primarily by type-I IFN (ISGF3/STAT2-dependent) vs IFN-γ (STAT1-GAF-dependent) vs other cytokines varies by tissue and cohort; current data do not clearly partition the STAT2-specific contribution.
- STAT2 phosphoproteomics in aged tissues: no dedicated aging-context datasets available as of this draft. pTyr690 is rarely captured in standard aging proteomics panels.

## Footnotes

[^hambleton2013]: doi:10.1073/pnas.1220098110 · n=5 homozygous-affected members identified across pedigree (proband + 4 relatives) · observational/case-series · model: human (homozygous STAT2 c.381+5 G>C splice-site LOF, intron 4); in-vitro patient skin fibroblasts · cited-by: 241 · archive: local PDF

[^yamagami2018]: doi:10.1038/s41514-018-0030-6 · in-vitro · model: human NHDFs (normal human dermal fibroblasts) at replicative senescence (passage 23 vs passage 5); Werner syndrome fibroblasts (passage 8) · demonstrated constitutive ISG expression (IFIT3, OASL, ISG15, Mx2, IFI27) via unphosphorylated ISGF3 independent of IFN production; STAT1 and STAT2 knockdown reduced ISG expression and ISRE activity; JAK1 knockdown did not · cited-by: 15 · archive: local PDF

[^arimoto2017]: doi:10.1038/nsmb.3378 · in-vitro / biochemical · model: human fibrosarcoma 2fTGH-derived U-series cells + murine Stat2-/- MEFs + reconstitution assays · STAT2 bridges USP18 to IFNAR2 via coiled-coil (CC) and DNA-binding (DB) domains (not TAD); negative feedback on JAK1 phosphorylation requires STAT2 physical interaction with USP18 · cited-by: 190 · archive: local PDF

[^kok2020]: doi:10.15252/msb.20198955 · in-silico / in-vitro (ODE mathematical model calibrated to 1,918 data points + validation in primary human hepatocytes from 6 patients) · model: Huh7.5 hepatoma cells + HepG2-hNTCP cells + primary human hepatocytes · basal STAT2 abundance predicts patient-specific IFN-α signal amplitude; basal USP18 abundance determines desensitization threshold · cited-by: 53 · archive: local PDF

[^takahashi2018-sasp]: doi:10.1038/s41467-018-03555-8 · in-vitro + in-vivo (mouse) · model: human TIG-3 fetal lung diploid fibroblasts rendered senescent by serial passage or oncogenic HRasV12; in-vivo: hepatic stellate cells in HFD mouse liver · cGAS-STING activation by cytoplasmic DNA (from downregulated DNase2/TREX1) drives IFN-β → SASP; blocking pathway (siSTING/sicGAS) reduces SASP factor expression · cited-by: 339 · archive: local PDF

[^levy-darnell-review]: doi:10.1038/nrm909 · review (Nat Rev Mol Cell Biol) · Levy DE, Darnell JE Jr. · 2002 · conceptual framework for STAT-family domain architecture and ISGF3 specificity; STAT2+STAT6 TADs have ≥10-fold greater stimulatory activity than other STAT TADs · cited-by: 3,151 · archive: local PDF

[^uniprot-stat2-gof]: UniProt P52630 (STAT2_HUMAN), variant annotations for R148Q and R148W — curated database entry confirming PTORCH3 disease association and USP18-interaction-loss mechanism.

[^gruber2020]: doi:10.1084/jem.20192151 · PMID: 32092142 · observational/case-report · Gruber C et al. · J Exp Med 2020 · homozygous STAT2 R148Q causes type I interferonopathy by failing to traffic USP18 to IFNAR2; clinical phenocopy of inherited USP18 deficiency · model: human patient + in-vitro patient cells
