---
type: protein
aliases: [PMAIP1, phorbol-12-myristate-13-acetate-induced protein 1, APR, ATL-derived PMA-responsive protein, Protein Noxa]
uniprot: Q13794
ncbi-gene: 5366
hgnc: 9108
mouse-ortholog: Pmaip1
ensembl: ENSG00000141682
druggability-tier: 4
caused-by: []
causes: []
key-domains: [BH3 motif, mitochondrial targeting region]
key-ptms: []
pathways: ["[[apoptosis-pathway]]", "[[p53-pathway]]", "[[bcl-2-family-signaling]]"]
hallmarks: ["[[genomic-instability]]", "[[cellular-senescence]]"]
known-interactors: ["[[mcl-1]]", "[[p53]]", "[[bak]]", "[[puma]]"]
sens-categories: ["[[apoptosenes]]"]
genage-id: null
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Oda 2000 and Shibue 2003 verified against primary source PDFs; Chen 2005 verified against primary source PDF. Villunger 2003 (not_oa) and Shahbandi 2020 (download failed) not verifiable from PDF — claims tagged #gap/no-fulltext-access. Hijikata 1990 pre-DOI paper unresolvable. UniProt Q13794 identity fields (accession, length, BH3 residues, mitochondrial targeting) not independently re-verified against live UniProt — recommend cross-check on next lint pass."
---

# NOXA (PMAIP1)

NOXA is a 54-amino-acid BH3-only member of the Bcl-2 family — the smallest in its class — and the **selective endogenous antagonist of MCL-1 and A1 (BFL-1)**. Unlike PUMA, which binds all five canonical anti-apoptotic Bcl-2 family proteins, NOXA has a narrow binding profile: high affinity for MCL-1 and A1, and negligible affinity for BCL-2, BCL-xL, or BCL-w. This selectivity makes NOXA a dedicated derepressor of the MCL-1/BAK axis rather than a broad-spectrum killer. Transcriptionally activated by [[p53]] in response to DNA damage, NOXA complements [[puma]] to cover the full anti-apoptotic spectrum after genotoxic stress: PUMA neutralizes BCL-2/BCL-xL/BCL-w, while NOXA specifically displaces BAK from MCL-1 protection.

**Naming note:** The gene is officially *PMAIP1* (Phorbol-12-Myristate-13-Acetate-Induced Protein 1), reflecting the original cloning context in adult T-cell leukemia (ATL) cells. The protein and mouse gene are widely referred to as "Noxa" (Latin: damage/harm). This page uses NOXA per UniProt convention (NOXA_HUMAN, Q13794).

---

## Identity

| Field | Value |
|---|---|
| UniProt | Q13794 (NOXA_HUMAN) |
| NCBI Gene | 5366 |
| HGNC ID | 9108 |
| Chromosomal location | 18q21.32 |
| Length | 54 amino acids (canonical isoform; 2 isoforms via alternative splicing) |
| MW | ~6.0 kDa |
| Mouse ortholog | Pmaip1 / Noxa (one-to-one; function conserved) — **important**: murine Noxa is 103 aa with TWO BH3 motifs (A: ~residues 27–35; B: ~78–86); human NOXA is 54 aa with ONE BH3 motif (residues 29–37), lacking the exon encoding murine BH3-A [^oda2000] |
| GenAge entry | Not confirmed — PMAIP1/NOXA appears primarily in cancer biology; aging relevance is mechanistic via p53/MCL-1 axis #gap/needs-canonical-id |

---

## Functional domains

NOXA is one of the structurally simplest BH3-only proteins: a very short ~54 amino acid sequence with minimal structural complexity outside the core BH3 helix.

- **BH3 motif (residues ~29–37)** — the sole structured interaction domain; essential for pro-apoptotic activity and MCL-1/A1 binding. The BH3 helix sequence of NOXA deviates at positions that are critical for BCL-2/BCL-xL binding, explaining its selectivity for MCL-1/A1 over the rest of the family [^chen2005].
- **Mitochondrial targeting region (~residues 41–50)** — a C-terminal sequence required for localization to the mitochondrial outer membrane; this positions NOXA at the site where MCL-1 sequesters BAK [UniProt Q13794].
- **No other BH domains** — NOXA lacks BH1, BH2, and BH4; it cannot form heterodimers in the classic multi-domain fashion and cannot directly permeabilize membranes. It acts exclusively as a BH3-only sensitizer.

Unlike many BH3-only proteins, NOXA is intrinsically short-lived at the protein level — it is constitutively targeted for rapid proteasomal degradation via ubiquitination, making its steady-state abundance acutely dependent on ongoing transcription and on proteasome activity. #gap/unsourced — rapid proteasomal turnover of NOXA protein is widely documented in the literature but is not described in Oda 2000; primary citation for constitutive NOXA ubiquitination and half-life quantification needed (see also half-life gap in Limitations table below).

---

## MCL-1/A1 binding selectivity: the key mechanistic distinction

### The BH3-only binding spectrum

The affinity profile of BH3-only proteins across the anti-apoptotic Bcl-2 family members is not uniform. Chen et al. 2005 established a comprehensive fluorescence polarization affinity panel for BH3 peptides against each anti-apoptotic target, revealing the complementary selectivity framework that explains how p53-induced BH3-only proteins together cover the full spectrum [^chen2005]:

| BH3-only protein | BCL-2 | BCL-xL | BCL-w | MCL-1 | A1 (BFL-1) | Role |
|---|---|---|---|---|---|---|
| **NOXA** | Low (>100 μM) | Low (>100 μM) | Low (>100 μM) | **High (24 nM)** | **High (180 nM)** | Selective sensitizer (MCL-1/A1 axis) |
| BAD | High (16 nM) | High (5.3 nM) | Moderate (30 nM) | Low (>100 μM) | Low (15 μM) | Selective sensitizer (BCL-2/xL axis) |
| PUMA | High (3.3 nM) | High (6.3 nM) | High (5.1 nM) | **High (5.0 nM)** | High (5.7 nM) | Broad sensitizer (all five targets equally) |
| BIM | High (Kd 4.5 nM) | High (Kd 0.8 nM) | High (Kd 1.6 nM) | **High (Kd 0.2 nM)** | High (Kd 0.5 nM) | Broad sensitizer + direct activator |
| BID | Moderate (6,800 nM) | Moderate (82 nM) | Moderate (40 nM) | Moderate (2,100 nM) | High (9.3 nM) | Direct activator; A1-preferring profile |

IC50 values (nM) from Chen 2005 Fig 3A (biosensor competition assay); BIM Kd values from Fig 1C (direct biosensor binding). Note: Oda 2000 showed murine Noxa co-immunoprecipitates with overexpressed BCL-xL and BCL-2 in HeLa cells — this is reconciled by Chen 2005's quantitative data showing BCL-2/xL IC50 >100 μM (very low affinity detectable only at high concentrations in overexpression systems).

This complementarity explains why NOXA + PUMA together phenocopy a pan-family sensitizer: NOXA derepresses the MCL-1/BAK axis; PUMA derepresses the BCL-2/BCL-xL/BCL-w axes. After p53 activation, both are transcribed simultaneously [^oda2000][^villunger2003], providing coordinated coverage.

### Functional consequence of MCL-1 selectivity

NOXA's narrow selectivity means it operates specifically on the **MCL-1/BAK checkpoint** at the mitochondrial outer membrane:

1. In normal cells, MCL-1 sequesters BAK in an inactive complex. BAK cannot oligomerize or permeabilize the membrane.
2. Upon p53 activation (or other stresses), NOXA is rapidly induced and its BH3 helix engages the MCL-1 BH3-binding groove.
3. This displaces BAK from MCL-1 sequestration, freeing BAK to oligomerize → mitochondrial outer membrane permeabilization (MOMP).
4. NOXA does **not** displace BAX from BCL-xL or BCL-2. In cells with strong BCL-xL/BCL-2-dependent survival signaling, NOXA alone may be insufficient for apoptosis — PUMA or BIM is needed to complete the spectrum [^chen2005].

Critically, NOXA **promotes MCL-1 proteasomal degradation** beyond simple competitive displacement — the NOXA–MCL-1 complex is itself targeted for ubiquitin-mediated degradation, amplifying MCL-1 depletion [UniProt Q13794]. This feedforward degradation is unique among BH3-only proteins and explains why NOXA can reduce MCL-1 abundance, not merely occupy its groove. #gap/unsourced — the NOXA-driven MCL-1 co-degradation mechanism is not described in Oda 2000; primary citation required (Oda 2000 does not discuss proteasomal turnover of either NOXA or MCL-1).

---

## Transcriptional regulation by p53

NOXA is a canonical p53 transcriptional target. The murine *Noxa* promoter contains a p53-response element (p53RE) located at −155 to −174 relative to the transcription start site; p53 binds this RE following DNA damage and drives rapid Noxa mRNA induction [^oda2000]. The human *PMAIP1* promoter also contains one p53RE (confirmed by Oda 2000 via reporter assay and antisense knockdown in Saos2 cells), though its precise coordinates in the human gene are not stated in Oda 2000 #gap/needs-primary-citation-for-human-p53RE-coordinates. Key features of the regulatory context:

**Stimuli that induce NOXA via p53:**
- DNA double-strand breaks (ionizing radiation, alkylating chemotherapy)
- Replication stress (UV light, hydroxyurea)
- Oncogenic signaling (ARF-mediated p53 stabilization)
- Hypoxia (partial; p53-stabilization-dependent component)

**p53-independent NOXA induction:**
- Proteasome inhibitors (bortezomib, MG-132) — ubiquitin-proteasome system stress induces NOXA through a mechanism partly independent of p53. #gap/unsourced — this is not described in Oda 2000; primary citation for p53-independent proteasome-stress-driven NOXA induction required.
- ER stress / unfolded protein response — NOXA can be upregulated via ATF3/ATF4 transcription factors under UPR conditions #gap/unsourced.
- HIF-1α — hypoxia-inducible component may exist independently of p53 #gap/unsourced.

### Rapid proteasomal turnover

A crucial feature distinguishing NOXA from many other BH3-only proteins is its **intrinsically short half-life** even after induction. The NOXA protein is constitutively ubiquitinated and degraded by the 26S proteasome, with reports suggesting a half-life of minutes to a few hours in cycling cells (precise value not available from Oda 2000 or UniProt Q13794; #gap/unsourced — primary pulse-chase citation needed for quantitative half-life). This makes NOXA's net pro-apoptotic activity acutely dependent on the rate of ongoing transcription vs proteasomal clearance, and explains why proteasome inhibitors (which block NOXA degradation simultaneously with increasing its transcription) are especially potent activators of NOXA-dependent apoptosis.

The short half-life also means NOXA accumulation in aged or stressed cells is less a matter of stable protein buildup and more a continuous synthesis-degradation cycle requiring persistent upstream transcriptional drive.

---

## NOXA and p53 in the DNA damage response: complementarity with PUMA

### Division of labor under p53 activation

Villunger et al. 2003 used *Noxa*−/−, *Puma*−/−, and double-knockout (DKO) cells and mice to dissect the relative contributions of the two BH3-only proteins to p53-dependent apoptosis across cell types and stresses [^villunger2003]. **Note: Villunger 2003 is closed-access (not_oa); claims below are unverified against the PDF — abstract-level only #gap/no-fulltext-access:**

- **NOXA** contributed to apoptosis in response to genotoxic stimuli, with cell-type-specific effects.
- **PUMA** had broader and generally greater magnitude of contribution across cell types and stress stimuli.
- **DKO** cells were substantially more resistant than either single KO, confirming additive non-redundant activities [^villunger2003].

**Caution re: lymphoid progenitors:** Shibue 2003 (verified) found that Noxa−/− thymocytes undergo radiation-induced apoptosis as efficiently as WT — indicating NOXA's contribution to p53-dependent apoptosis in thymocytes is minimal. Claims from Villunger 2003 about hematopoietic-specific NOXA contributions should be read against this Shibue 2003 caveat until the full Villunger 2003 PDF is accessible.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | p53 → *PMAIP1* transcription; MCL-1 BH3-binding groove; proteasomal turnover — all conserved |
| Phenotype conserved in humans? | partial | Hematopoietic-cell apoptosis dependence on NOXA shown in mouse models; quantitative human data limited |
| Replicated in humans? | no | No NOXA-targeted intervention in human aging contexts #gap/needs-human-replication |

### In vivo genetic evidence from Noxa KO mice

Shibue et al. 2003 generated and characterized *Noxa*−/− mice and primary cells to establish NOXA's in vivo functions [^shibue2003]:

- *Noxa*−/− MEFs (expressing adenoviral E1A oncoprotein) showed notable resistance to **E1A-dependent apoptosis** induced by adriamycin, etoposide, or X-ray irradiation. Cytochrome c release was reduced ~threefold and caspase 9/3/7 activation was suppressed. Resistance was further increased in Noxa−/−/Bax−/− double-KO MEFs, indicating partially parallel mechanisms [^shibue2003]. Note: the wiki previously said "c-Myc-induced apoptosis" — this was incorrect; Shibue 2003 used adenoviral E1A, not c-Myc.
- *Noxa*−/− mice were significantly resistant to **whole-body X-ray irradiation (10 Gy)-induced gastrointestinal death**: apoptosis of intestinal epithelial stem cells in small intestinal crypts was suppressed ~twofold; mean survival of Noxa−/− mice was 17.5 ± 9.5 d vs 9.1 ± 3.3 d for WT (P<0.01) and 10.7 ± 7.9 d for p53−/− mice (P<0.05 vs Noxa−/−) [^shibue2003].
- *Noxa*−/− mice did **not** spontaneously develop tumors at elevated rates during at least 1 year of observation — consistent with NOXA being a stress-responsive rather than constitutive tumor suppressor [^shibue2003].
- *Noxa*−/− thymocytes: notably, Noxa−/− thymocytes underwent radiation-induced apoptosis **as efficiently as WT thymocytes** — indicating NOXA does not contribute to the p53-dependent apoptosis pathway in thymocytes (which is Bax-independent by a different mechanism) [^shibue2003].
- These in vivo findings established that NOXA is a non-redundant effector of p53-dependent apoptosis in specific tissues (intestinal epithelial stem cells) and oncogenic contexts (E1A-transformed fibroblasts), but is dispensable in thymocytes.

#gap/needs-human-replication — all genetic evidence for NOXA's in vivo apoptotic function is from mouse KO models; equivalent human loss-of-function data are absent.

---

## Role in aging

### p53/NOXA axis in senescence vs apoptosis bifurcation

In the context of aging biology, NOXA sits at the intersection of p53's dual roles as a tumor suppressor and an antagonistic-pleiotropic driver of tissue deterioration. The same p53 activation that drives NOXA-mediated apoptosis is also the core of the [[cellular-senescence|senescence]] induction program. NOXA's role in aged tissues involves several interconnected tensions:

1. **Tumor suppression in early life:** p53 → NOXA activation clears cells with DNA damage and oncogenic mutations, providing cancer protection. This is the canonical function.
2. **Excessive depletion of stem cell pools in later life:** Chronic low-level p53 activation (from accumulated DNA damage, telomere attrition) drives sustained NOXA induction in stem and progenitor cells. In hematopoietic cells specifically, where MCL-1 is the dominant anti-apoptotic guard, NOXA-mediated MCL-1 neutralization can deplete the progenitor pool over time. This parallels the [[puma]] page's discussion of the p53 → BH3-only → stem-cell-exhaustion axis, but specifically implicates the MCL-1/BAK checkpoint rather than the BCL-2/BCL-xL/BAX checkpoint.

The Tyner 2002 hyperactive-p53 mouse model showed accelerated aging with premature tissue exhaustion, consistent with chronic BH3-only (including NOXA) over-activation [^tyner2002]. Quantitative dissection of NOXA's specific contribution (vs PUMA vs BAX vs p21) in that model has not been published. #gap/no-mechanism

### NOXA in the senescent cell anti-apoptotic landscape

A critical open question is whether NOXA contributes to the apoptotic priming of senescent cells — and if so, through the MCL-1 axis specifically.

**What is established:**
- Senescent cells accumulate activated p53 and elevated BH3-only protein expression as part of their DNA-damage response heritage (the DDR that triggered senescence continues to signal within the senescent state).
- Anti-apoptotic Bcl-2 family members are upregulated as SCAPs in senescent cells — the SCAP landscape varies by cell type (see [[bcl-2]], [[bcl-xl]], [[mcl-1]]).

**The NOXA-specific gap:**
The [[mcl-1]] page notes that in senescent tumor cells, MCL-1 is the dominant SCAP (Troiani 2022). If MCL-1 is elevated in a senescent cell population, and if NOXA is simultaneously elevated by chronic p53, then the two should compete — and the net apoptotic outcome depends on their relative levels. Shahbandi et al. 2020 provided indirect evidence: navitoclax (which does not inhibit MCL-1) was insufficient for senolysis in cells with low NOXA expression, implying that NOXA normally facilitates MCL-1 neutralization and low NOXA = MCL-1 protection retained [^shahbandi2020_mcl1]. This nominates NOXA abundance as a **biomarker of MCL-1-axis senolytic sensitivity** in the MCL-1/BAK SCAP.

**IMR90 caveat:**
The IMR90 senescence model (human lung fibroblasts) used extensively in Zhu 2015/2016 senolytic studies showed that triple BCL-2 + BCL-xL + BCL-w knockdown (not MCL-1 knockdown) was required for IMR90 senolysis. This implies MCL-1's contribution to the IMR90 SCAP is limited — and by extension, NOXA's role as an MCL-1 derepressor may be less critical in IMR90 than in hematopoietic or tumor-derived senescent cells. NOXA's role in senescence apoptosis-resistance is therefore **cell-type-dependent and incompletely mapped**. #gap/needs-replication

---

## BH3-binding spectrum complementarity: NOXA + PUMA

This table captures the complementary coverage argument explicitly, cross-referencing [[puma]] and [[mcl-1]]:

| Target | NOXA | PUMA | Combined (NOXA+PUMA) |
|---|---|---|---|
| BCL-2 | Negligible (>100 μM) | High (3.3 nM) | Covered by PUMA |
| BCL-xL | Negligible (>100 μM) | High (6.3 nM) | Covered by PUMA |
| BCL-w | Negligible (>100 μM) | High (5.1 nM) | Covered by PUMA |
| **MCL-1** | **High (24 nM, selective)** | High (5.0 nM) | **Both; NOXA primary at low expression** |
| **A1 (BFL-1)** | **High (180 nM, selective)** | High (5.7 nM) | **Both** |

IC50 values from Chen 2005 Fig 3A. Note: PUMA binds MCL-1 with high affinity (5.0 nM) comparable to its BCL-2/xL/w affinities — PUMA's "moderate" MCL-1 affinity claim in the prior version was incorrect per Chen 2005 [^chen2005].

After p53 activation, simultaneous induction of NOXA + PUMA effectively neutralizes the entire anti-apoptotic Bcl-2 family, leaving no survival escape valve. This explains why p53-driven intrinsic apoptosis is so efficient in cells with intact p53 signaling — it is not a single BH3-only protein but a coordinated two-protein cascade that covers both arms of the anti-apoptotic spectrum [^chen2005][^villunger2003].

**Mechanistic implication for senolytics:** In MCL-1-protected senescent cell populations, NOXA-based strategies (pharmacological NOXA upregulation, or MCL-1 inhibitors that mimic NOXA's function) are the relevant targeting approach. In BCL-xL/BCL-2-protected populations (HUVECs, some fibroblasts), PUMA-axis strategies (navitoclax, venetoclax) are relevant. NOXA-axis targeting remains at the preclinical stage for aging indications.

---

## Discovery and naming

NOXA was originally identified by Hijikata et al. (*Journal of Virology*, 1990) as an immediate-early response gene induced by phorbol-12-myristate-13-acetate (PMA) in adult T-cell leukemia (ATL) cells [Hijikata M et al. J Virol. 1990;64(10):4632–4641 — cited as ref 25 in Oda 2000; pre-DOI-registration era paper; note: the wiki previously listed "Molecular and Cellular Biology" and doi:10.1128/mcb.10.6.2879, which are incorrect per Oda 2000's reference list #gap/no-fulltext-access]. The original cDNA corresponded to the human PMAIP1 gene product (then called APR — ATL-derived PMA-Responsive protein); the term "NOXA" (Latin for "damage" or "harm") was applied later to the murine homolog discovered by Oda et al. 2000. At the time of Hijikata 1990, no apoptotic function was known.

The apoptotic identity of NOXA as a BH3-only p53 transcriptional target was established in 2000 by Oda et al. at the University of Tokyo, who used **mRNA differential display** (not microarray) to compare x-ray-irradiated wild-type vs IRF-1/p53 doubly deficient MEFs, identifying murine Noxa. The study confirmed its pro-apoptotic BH3-domain-dependent function (via point-mutant BH3 domain knockouts) and direct p53-RE-driven transcription (via promoter-luciferase and antisense knockdown) [^oda2000]. This paper established Noxa as a candidate mediator of p53-induced apoptosis — the founding paper for the modern understanding of NOXA's role.

---

## Pathway membership

- [[apoptosis-pathway]] — NOXA is a core BH3-only sensitizer; its induction releases BAK from MCL-1 sequestration at the MOMP commitment point
- [[p53-pathway]] — NOXA is a p53 transcriptional target; p53 binds the *PMAIP1* p53RE in response to DNA damage; part of the p53 → BH3-only → MOMP axis alongside PUMA
- [[bcl-2-family-signaling]] — NOXA defines one arm of the BH3-only selectivity landscape; the NOXA/MCL-1 axis is the MCL-1-specific sub-circuit of the broader family

---

## Key interactors

| Interactor | Interaction type | Functional consequence |
|---|---|---|
| [[p53]] | Transcriptional inducer (p53RE in PMAIP1 promoter) | DNA damage → p53 stabilization → NOXA mRNA induction |
| [[mcl-1]] | BH3-domain binding (high affinity, selective) | Displaces BAK from MCL-1 sequestration; promotes MCL-1 proteasomal degradation |
| A1 (BFL-1) | BH3-domain binding (high affinity, selective) | Derepresses A1-sequestered apoptotic effectors; less studied than MCL-1 axis #gap/unsourced |
| [[bak]] | Indirect (via MCL-1 displacement) | NOXA → MCL-1 release → BAK oligomerization → MOMP |
| [[puma]] | Functional cooperator | PUMA + NOXA together cover the full anti-apoptotic spectrum; complementary selectivities |

---

## Aging interventions that modulate NOXA

- **Proteasome inhibitors (bortezomib, carfilzomib)** — block NOXA degradation, amplifying NOXA-driven MCL-1 neutralization. Relevant as potential senolytic adjuncts in MCL-1-protected senescent populations, but systemic toxicity limits aging use. Preclinical only. #gap/needs-human-replication
- **p53-activating stresses** (genotoxic agents, MDM2 inhibitors) — upregulate NOXA transcription via p53. Not suitable as aging interventions due to off-target mutagenesis and toxicity risk.
- [[interventions/pharmacological/senolytics]] — MCL-1 inhibitors (S63845, AMG-176) pharmacologically mimic NOXA's MCL-1-antagonizing function, effectively substituting for insufficient endogenous NOXA activity in MCL-1-protected senescent cells. See [[mcl-1]] page for drug details.
- [[caloric-restriction]] — modulates p53 activity and senescent cell burden; NOXA-specific modulation not characterized. #gap/no-mechanism

---

## Limitations and open questions

| Gap | Tag | Notes |
|---|---|---|
| NOXA protein levels in aged human tissues | #gap/unsourced | Direct measurement of NOXA in aged vs young human bone marrow, muscle, or gut progenitors not well-documented |
| NOXA's specific contribution in Tyner 2002 accelerated-aging model | #gap/no-mechanism | Relative contribution of NOXA vs PUMA vs p21 vs BAX in p53+/m accelerated tissue exhaustion not resolved |
| NOXA half-life quantification | #gap/unsourced | Precise half-life in cycling human cells needs pulse-chase primary citation; current estimates are ~minutes to low hours but source unspecified |
| NOXA in IMR90 senescent fibroblast SCAP | #gap/needs-replication | MCL-1's role in IMR90 SCAP is limited (vs BCL-2/BCL-xL/BCL-w); whether NOXA-axis derepression contributes to IMR90 senolysis is untested |
| A1 (BFL-1) binding affinity quantification | resolved | Chen 2005 Fig 3A: NoxaBH3 vs A1 IC50 = 180 nM (vs MCL-1 = 24 nM); A1 affinity confirmed as high but ~7.5-fold weaker than MCL-1 |
| p53-independent NOXA induction mechanisms | #gap/needs-replication | Transcription factors driving NOXA under UPR/ER stress and hypoxia need direct primary citations |
| NOXA as biomarker of MCL-1-senolytic sensitivity | #gap/needs-replication | Shahbandi 2020 indirect evidence (unverifiable PDF); direct quantification of NOXA expression vs MCL-1-inhibitor senolytic sensitivity in primary aged tissues absent |
| Hijikata 1990 original cloning paper | #gap/no-fulltext-access | Correct citation: J Virol 64(10):4632–4641 (1990), not MCB as previously stated; pre-DOI-era paper; no DOI in archive; claims from this source unverifiable |

---

## Footnotes

[^oda2000]: [[studies/oda-2000-noxa-p53-apoptosis]] · doi:10.1126/science.288.5468.1053 · Oda E, Ohki R, Murasawa H et al. · 2000 · Science 288(5468):1053–1058 · in-vivo + in-vitro · model: murine MEFs + thymocytes (p53-dependent irradiation); HeLa and Saos2 human cells · key findings: (1) murine Noxa = 103 aa with two BH3 motifs (A: residues ~27–35; B: residues ~78–86); human NOXA/APR = 54 aa with one BH3 motif (residues 29–37); (2) murine Noxa p53RE located at −155 to −174 relative to TSS; human PMAIP1 contains one p53RE (location not precisely stated); (3) Noxa-induced apoptosis suppressed by co-expression of BCL-xL or BCL-2 (ectopic overexpression context); Noxa co-immunoprecipitated with overexpressed BCL-xL and BCL-2 AND MCL-1 (ref 20, unpublished at time) — note this overexpression co-IP does not reflect physiological affinity (see Chen 2005 for quantitative binding data showing BCL-2/xL affinity is >100 μM in vitro); (4) antisense knockdown of Noxa suppressed p53-induced apoptosis in Saos2 and BAF-3 cells · locally downloaded (archive:  (local PDF))

[^chen2005]: doi:10.1016/j.molcel.2004.12.030 · Chen L, Willis SN, Wei A et al. · 2005 · Molecular Cell 17(3):393–403 · in-vitro (biosensor competition assay) + cell-based (co-immunoprecipitation in 293T cells; retroviral MEF killing assays) · model: recombinant truncated prosurvival proteins (BCL-2 ΔC22, BCL-xL ΔC24, BCL-w ΔC29, MCL-1 ΔN151ΔC23, A1 ΔC20); immortalized 3T9 MEFs · key quantitative findings (IC50, nM): NoxaBH3 vs BCL-2 = >100,000; vs BCL-xL = >100,000; vs BCL-w = >100,000; vs MCL-1 = 24; vs A1 = 180. PumaBH3 vs BCL-2 = 3.3; vs BCL-xL = 6.3; vs BCL-w = 5.1; vs MCL-1 = 5.0; vs A1 = 5.7. BadBH3 vs BCL-2 = 16; vs BCL-xL = 5.3; vs BCL-w = 30; vs MCL-1 = >100,000; vs A1 = 15,000. BimBH3 Kd: BCL-2 = 4.5 nM; BCL-xL = 0.8 nM; BCL-w = 1.6 nM; MCL-1 = 0.2 nM; A1 = 0.5 nM · mammalian cell confirmation: full-length mouse Noxa co-IPs only MCL-1, not BCL-2 or BCL-xL, in 293T cells (Fig 4F/G) · locally downloaded (archive:  (local PDF))

[^villunger2003]: doi:10.1126/science.1090072 · Villunger A, Michalak EM, Coultas L et al. · 2003 · Science 299(5605):1695–1700 · in-vivo + in-vitro · model: Noxa−/−, Puma−/−, and DKO mice and primary cells (MEFs, thymocytes, hematopoietic cells) · 1,307 citations · key finding: NOXA and PUMA have additive non-redundant contributions to p53-dependent apoptosis across cell types; DKO cells substantially more resistant than either single KO · archive: not_oa; not locally downloaded #gap/no-fulltext-access

[^shibue2003]: doi:10.1101/gad.1103603 · Shibue T, Takeda K, Oda E et al. · 2003 · Genes & Development 17(18):2233–2238 · in-vivo (mouse) + in-vitro · model: Noxa−/− mice (C57BL/6, backcrossed ≥5×); Noxa−/− MEFs expressing adenoviral E1A; 10 Gy whole-body X-ray irradiation · n=15 WT, 13 Noxa−/−, 10 p53−/− mice in survival experiment · key findings: (1) Noxa−/− E1A-expressing MEFs showed notable resistance to adriamycin-, etoposide-, and X-ray-induced apoptosis; cytochrome c release ~3-fold lower; Noxa−/−/Bax−/− MEFs even more resistant (additive); (2) Noxa−/− MEFs showed ~2.5-fold increase in E1A+Ras colony formation (P<0.01 vs WT); (3) Noxa−/− mice: mean survival after 10 Gy = 17.5 ± 9.5 d vs 9.1 ± 3.3 d WT (P<0.01) and 10.7 ± 7.9 d p53−/− (P<0.05); intestinal crypt ESS apoptosis suppressed ~2-fold; (4) Noxa−/− thymocytes underwent radiation-induced apoptosis as efficiently as WT (NOXA dispensable in thymocytes); (5) no spontaneous tumor development at ≥1 year · locally downloaded (archive:  (local PDF))

[^tyner2002]: [[studies/tyner-2002-p53-mutant-aging]] · doi:10.1038/415045a · n=35 (p53+/m) + 56 (p53+/+) · in-vivo (transgenic mouse) · p<0.0001 survival · model: p53+/m C57BL/6×129/Sv · 1,434 citations · locally downloaded · invoked here as indirect evidence for NOXA's contribution to hyperactive-p53 accelerated aging; specific NOXA quantification not in Tyner 2002

[^shahbandi2020_mcl1]: doi:10.1038/s41418-020-0564-6 · Shahbandi A, Rao SG, Anderson JB et al. · 2020 · Cell Death and Differentiation · in-vitro + in-vivo · model: chemotherapy-induced senescent breast cancer cells · 115 citations · invoked here for NOXA expression as biomarker of navitoclax insufficiency / MCL-1-inhibitor rescue · archive: download failed #gap/no-fulltext-access — claims from this source unverified against PDF; see also [[mcl-1]] footnote for full attribution
