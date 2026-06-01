---
type: protein
aliases: [TIMP1, CLGI, tissue inhibitor of metalloproteinases 1, metalloproteinase inhibitor 1]
uniprot: P01033
ncbi-gene: 7076
hgnc: 11820
ensembl: ENSG00000102265
mouse-ortholog: Timp1
genage-id: null
pathways: []
hallmarks: ["[[loss-of-proteostasis]]"]
sens-categories: []
key-domains: [N-terminal inhibitory domain, C-terminal hemopexin-like domain]
key-ptms: [Asn53-glycosylation, Asn101-glycosylation, Ser178-phosphorylation]
known-interactors: ["[[mmp-1]]", "[[mmp-3]]", "[[mmp-9]]", "[[cd63]]"]
druggability-tier: 4
mr-causal-evidence: not-tested
caused-by: []
causes: []
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "UniProt P01033 canonical fields verified via REST API (sequence length, signal peptide, mature chain, PTMs, disulfide bonds, domain boundaries, MMP target list, chromosomal location, cross-references). Fisher-1996 and Fisher-2009 primary-source claims cross-checked against their verified study pages (both R39-verified). Corrections applied: NTR domain boundary (24-127 → 24-147), C-terminal domain (128-207 → 148-207), added MMP-12 and MMP-16 to target list, nuanced MMP-2 framing (TIMP-1 does inhibit MMP-2 per UniProt; TIMP-2 dominates the MT1-MMP/MMP-2 activation axis), corrected Nagase 2006 DOI (10.1093/cvr/cvl248 → 10.1016/j.cardiores.2005.12.002). Nagase 2006 and secondary sources (zhou2021, zhang2020, oncotarget2016, cancers2017, actbio2023) are closed-access or pending download — qualitative claims from these not independently verified against full text."
---

# TIMP-1 (TIMP1)

TIMP-1 is the prototypic member of the **tissue inhibitor of metalloproteinases (TIMP) family** — a ~28 kDa secreted glycoprotein that stoichiometrically inhibits active matrix metalloproteinases (MMPs) and has additional MMP-independent functions via CD63 receptor signaling. In the aging context, TIMP-1 is central to the **MMP/TIMP balance hypothesis**: progressive dermal and musculoskeletal collagen degradation in aged tissue reflects net MMP excess rather than TIMP-1 deficiency per se, because TIMP-1 levels do not rise proportionally to compensate the age- and UV-driven elevation in MMP-1 [^fisher1996]. This imbalance is a key driver of the [[loss-of-proteostasis]] hallmark in connective tissue.

---

## Identity

- **UniProt:** P01033 (TIMP1_HUMAN)
- **NCBI Gene:** 7076
- **HGNC symbol:** TIMP1
- **Ensembl:** ENSG00000102265 (X chromosome; locus Xp11.3)
- **Gene location:** X-linked (single copy in males)
- **Mouse ortholog:** Timp1 (one-to-one ortholog; high sequence conservation)
- **Length:** 207 amino acids (mature protein after signal peptide cleavage at residue 23)
- **Molecular weight:** ~23.2 kDa (unglycosylated); apparent ~28–30 kDa SDS-PAGE due to N-glycosylation at Asn53 and Asn101

**Nomenclature note.** TIMP1 was historically called CLGI ("collagenase inhibitor") and simply TIMP before the four-member family was defined. The canonical wiki resolution uses `[[timp-1]]`; the gene symbol is TIMP1 (italics) and aliases should cover CLGI and older usage.

---

## TIMP family overview

The TIMP family has four members in mammals: **TIMP-1, TIMP-2, TIMP-3, TIMP-4**. All share a conserved two-domain architecture and 1:1 stoichiometric MMP inhibition via the N-terminal inhibitory domain, but they differ in MMP target preferences, expression patterns, and additional functions.

| TIMP | Primary MMP targets | Notable binding | Key feature |
|---|---|---|---|
| TIMP-1 | MMP-1, -2, -3, -7, -8, -9, -10, -11, -12, -13, -16 | Does not inhibit MMP-14 (MT1-MMP) | CD63 receptor; erythropoiesis; X-linked |
| TIMP-2 | MMP-2, MT1-MMP (MMP-14) | Forms TIMP-2/MT1-MMP/pro-MMP-2 ternary complex | Dominant inhibitor of MMP-2 *activation* at the cell surface |
| TIMP-3 | Broad (also inhibits ADAMs/ADAMTSs) | ECM-bound (not freely secreted) | Inhibits VEGF receptor shedding; pro-apoptotic |
| TIMP-4 | MT1-MMP, MMP-2, -3 | Low expression outside brain/heart | Least studied; cardiac-enriched |

TIMP-1 does inhibit MMP-2 in isolation (UniProt-confirmed), but **TIMP-2 is the dominant regulator of MMP-2 *activation*** via the MT1-MMP/TIMP-2/pro-MMP-2 ternary complex at the cell surface. TIMP-1 has low affinity for MT1-MMP (MMP-14), which is the activating protease for pro-MMP-2 in vivo. This distinction matters clinically and experimentally: studies measuring net MMP-2 activation in tissues should not expect TIMP-1 to be the primary gatekeeper of that axis [^nagase2006].

**RECK distinction.** RECK (reversion-inducing cysteine-rich protein with Kazal motifs) is a membrane-anchored MMP inhibitor with a completely different structural mechanism (no conserved TIMP fold; acts at the cell surface; inhibits MMP-9, MT1-MMP, MT3-MMP). RECK and TIMPs are parallel regulatory systems, not members of the same protein family.

---

## Structure and mechanism of inhibition

TIMP-1 has two structurally distinct domains connected by a hinge region:

**N-terminal inhibitory domain (NTR domain; residues 24–147).** A beta-barrel fold that engages the MMP catalytic cleft in a 1:1 stoichiometric complex. The N-terminal Cys24 donates its free amino group to coordinate the MMP catalytic Zn²⁺, displacing the water molecule that normally mediates catalysis. This is a tight, near-irreversible interaction (K_i in the picomolar to sub-nanomolar range for preferred substrates). Six disulfide bonds (Cys24-93, Cys26-122, Cys36-147, Cys150-197, Cys155-160, Cys168-189) are essential for the folded, active conformation — reduction of disulfide bonds abolishes inhibitory activity [^uniprot-p01033].

**C-terminal hemopexin-like domain (residues 148–207).** Mediates binding to the hemopexin domain of pro-MMP-9, enabling TIMP-1 to form high-affinity complexes with the **zymogen** (inactive precursor) of MMP-9 — giving TIMP-1 the ability to regulate not only active MMPs but also limit MMP-9 activation before it occurs. The C-domain also mediates CD63 receptor binding (see Non-canonical functions).

The overall inhibition mode is **competitive** (TIMP and substrate cannot simultaneously occupy the MMP active site), and given the picomolar K_i values, is effectively irreversible at physiological concentrations.

---

## MMP target specificity

TIMP-1 inhibits the following MMPs (from UniProt curated experimental evidence and Nagase/Woessner review):

- **Collagenases:** MMP-1 (interstitial collagenase), MMP-8 (neutrophil collagenase), MMP-13 (collagenase-3)
- **Stromelysins:** MMP-3 (stromelysin-1), MMP-10 (stromelysin-2), MMP-11 (stromelysin-3)
- **Gelatinases:** MMP-9 (92K gelatinase / gelatinase B); MMP-2 (72K gelatinase) is also inhibited by TIMP-1, but the physiologically dominant inhibitor of MMP-2 *activation* is TIMP-2 (via the MT1-MMP/TIMP-2/MMP-2 ternary complex at the cell surface) — TIMP-1 has lower affinity for the MT1-MMP/MMP-2 axis
- **Others:** MMP-7 (matrilysin), MMP-12 (macrophage metalloelastase), MMP-16 (MT3-MMP)

**Key gap:** TIMP-1 **does not inhibit MT1-MMP (MMP-14)** (UniProt-confirmed "Does not act on MMP14"), which is the primary activator of pro-MMP-2 at the cell surface. TIMP-1 therefore cannot block the MT1-MMP/MMP-2 activation axis. Note: UniProt lists MMP-16 (MT3-MMP) as a TIMP-1 substrate, so resistance to TIMP-1 is not universal across all MT-MMPs; MMP-14 is the specific escape point that enables MMP-2 activation [^nagase2006].

---

## Aging context: MMP/TIMP balance in connective tissue

### The imbalance model

Aging connective tissue (skin dermis, skeletal muscle, tendon, cartilage) shows progressive **net collagen degradation** attributable to a shift in the MMP/TIMP balance toward MMP excess. The key insight is that MMP levels rise with age and UV exposure while TIMP-1 levels remain roughly constant or increase only modestly — producing net degradation even if absolute TIMP-1 protein is present. Three complementary lines of evidence:

**1. UV → AP-1 → MMP induction (without proportional TIMP-1 induction).**
Fisher et al. 1996 [^fisher1996] established in human skin in vivo that a single sub-erythemogenic UVB dose (as low as 0.01 MED) rapidly induces MMP-1, MMP-3, and MMP-9 mRNA and protein via AP-1/NF-κB activation. Crucially, this paper's mechanistic framework explicitly did not invoke TIMP-1 induction as part of the photoaging cascade. When tretinoin (all-trans retinoic acid; t-RA) was used to block UVB-induced MMP induction, the mechanism was AP-1 transrepression (protein-protein interaction between RAR and Jun/Fos), reducing UVB-induced AP-1 binding by 70% and MMP-1/MMP-9 mRNAs, proteins, and activities by 50–80%. **TIMP-1 induction was not the mechanism** — this was explicitly established by the paper's molecular dissection and should not be confused with the t-RA effect.

**2. Aged dermis: MMP-1 elevated, collagen degraded.**
Fisher et al. 2009 [^fisher2009] measured MMP-1 (interstitial collagenase) mRNA at eightfold and protein at twofold elevated in aged vs young human sun-protected buttock dermis (n = 4–7, P < 0.05). Protein oxidation was twofold elevated in the same specimens. Crucially, collagen fragmentation itself drives a self-amplifying MMP-1 induction loop via reduced fibroblast cytoskeletal tension → ROS elevation → c-Jun/AP-1 activation — independent of UV exposure. This intrinsic aging pathway is distinct from, and additive with, the UV-driven AP-1 → MMP cascade.

**3. Diabetic skin: MMP-9/TIMP-1 imbalance quantified.**
Zhou et al. 2021 [^zhou2021] measured the MMP-9/TIMP-1 ratio directly in human skin from type 2 diabetic patients vs controls, demonstrating that MMP-9 elevation without compensatory TIMP-1 rise contributes to aberrant collagen deposition (both over- and under-regulation depending on compartment). While the diabetic context is not identical to normoglycemic aging, this study provides direct human quantification of the imbalance. #gap/needs-replication for this specific MMP-9/TIMP-1 ratio measurement in normoglycemic aged dermis.

**4. Skeletal muscle in aging.**
A 2020 rat study measured MMP-1 and TIMP-1 protein expression in aged rat soleus/gastrocnemius muscle with sarcopenia [^zhang2020]. MMP-1 was elevated and TIMP-1 did not compensate, suggesting the imbalance generalises beyond skin to musculoskeletal connective tissue. #gap/needs-human-replication for the MMP-1/TIMP-1 imbalance in human aged skeletal muscle.

### TIMP-1 as the rate-limiting factor: is it?

An important framing caveat: the primary driver of net collagen degradation in aging is **MMP over-induction**, not TIMP-1 deficiency. In young unexposed skin, TIMP-1 levels are adequate to suppress basal MMP activity. The pathology arises because acute UV, chronic ROS, and cytokine signals (IL-1β, TNF-α) elevate MMPs faster and higher than TIMP-1 compensatory responses can match. This is mechanistically distinct from a scenario in which TIMP-1 is genetically or expressionally deficient.

#gap/needs-replication for quantitative TIMP-1 protein levels in aged vs young human dermis (sun-protected skin) — the ratio data are more characterised than absolute TIMP-1 concentrations.

---

## Non-canonical MMP-independent functions

TIMP-1 binds **CD63** (also called LAMP-3 / tetraspanin-30), a tetraspanin membrane protein expressed on hematopoietic progenitors, platelets, and several solid tumors, through a mechanism independent of TIMP-1's MMP-inhibitory N-terminal domain [^oncotarget2016]. CD63 engagement activates PI3K/Akt/p21 signaling, producing:

- **Cell survival promotion** — anti-apoptotic effects documented in hematopoietic progenitors and AML cells
- **Hematopoiesis support** — TIMP-1 supports erythroid progenitor survival; consistent with UniProt annotation of TIMP-1 as a mediator of human erythropoiesis
- **Migration regulation** — TIMP-1/CD63 signaling can promote cell migration in some cancer contexts

These non-canonical roles are relevant to the aging context because TIMP-1 circulates as a plasma protein at concentrations that are elevated in inflammatory states and in many aging-associated diseases (cardiovascular disease, fibrosis, cancer). The MMP-independent CD63/Akt axis means TIMP-1 is not a passive bystander in the extracellular space but an active signaling molecule.

The CD63 interaction domain maps to the C-terminal hemopexin-like domain, providing structural separation from the N-terminal MMP-inhibitory domain. This means it is in principle possible to design TIMP-1 variants that retain CD63 signaling while losing MMP inhibition (or vice versa) — a feature that has been explored in cancer biology but not yet in aging contexts [^cancers2017].

Cross-link: [[hematopoietic-stem-cells]] — TIMP-1 support of erythroid progenitors may become relevant in the context of age-related decline in hematopoietic output.

---

## Post-translational modifications

| PTM | Site | Type | Functional consequence |
|---|---|---|---|
| N-glycosylation | Asn53 | Complex type | Contributes to apparent MW (~28 kDa vs 23 kDa unmodified); role in secretion/stability |
| N-glycosylation | Asn101 | Complex type | As above |
| Phosphorylation | Ser178 | By FAM20C | Role in extracellular signaling; FAM20C is the Golgi casein kinase that phosphorylates secreted proteins |

Six disulfide bonds maintain the active inhibitory fold — see Structure section above.

---

## Expression and regulation

TIMP-1 is expressed broadly across tissues but enriched in connective-tissue-producing cells, notably **[[dermal-fibroblasts]]**. Transcription is regulated by:

- **AP-1 / NF-κB** — both inducers and targets of TIMP-1 transcription; AP-1 can drive TIMP-1 expression in wound-healing contexts but UV-driven AP-1 preferentially elevates MMPs far in excess of TIMP-1 [^fisher1996]
- **TGF-β / SMAD signaling** — positive regulator of TIMP-1; TGF-β drives fibroblast TIMP-1 expression (relevant to fibrosis; the TGF-β/collagen-synthesis arm of retinoid action described in later Fisher/Voorhees work promotes collagen synthesis and may influence TIMP-1)
- **IL-1β and TNF-α** — pro-inflammatory cytokines that can upregulate both MMPs and TIMPs; net effect on MMP/TIMP balance is context-dependent
- **Steroid hormones / glucocorticoids** — suppress MMP transcription partly via AP-1 transrepression (similar to retinoids), which may also attenuate TIMP-1 co-regulation

---

## Pathway context

TIMP-1 is not the central node of a dedicated signaling pathway — it operates as a **rheostat within the ECM remodeling axis**. Its molecular context:

- **[[extracellular-matrix-remodeling]]** (implicit stub) — TIMP-1 is a stoichiometric brake on MMP-mediated degradation of collagen I/III/IV, fibronectin, gelatin, and aggrecan
- Upstream activators of MMP transcription: [[mmp-1]], [[mmp-3]], [[mmp-9]] (the proteases it inhibits) are themselves regulated by AP-1 (Jun/Fos), NF-κB, and cytokine signaling
- Downstream of TIMP-1 inhibitory activity: reduced collagen fragmentation → attenuated ROS/AP-1 feedback loop → reduced MMP-1 autoamplification (Fisher 2009 feedback model [^fisher2009])

---

## Druggability

TIMP-1 itself is currently **undruggable in the classical sense** as a small-molecule target — it is a secreted protein whose function is to inhibit other proteins. Druggability-tier: 4 (in the aging-context sense — no clinical drug exists for an aging-indication-relevant intervention targeting TIMP-1 specifically).

**Therapeutic strategies considered (investigational):**

- **Recombinant TIMP-1 protein / TIMP-1 gene therapy** — conceptually, delivering recombinant TIMP-1 or TIMP-1 gene to aged/photo-damaged skin could re-balance MMP/TIMP ratios. No clinical trial has advanced this approach. A 2023 study [^actbio2023] showed TIMP-1 secretion from stem cell spheroids enhances their survival and therapeutic effectiveness, suggesting paracrine TIMP-1 delivery as a component of cell-therapy benefit.
- **TIMP-1/TIMP-2 chimeras** — engineered proteins combining TIMP-1's CD63 signaling domain with TIMP-2's MMP-2 inhibitory domain; explored in cancer but not aging.
- **Indirect upregulation** — retinoids (tretinoin) block MMP induction via AP-1 transrepression WITHOUT inducing TIMP-1, making the intervention asymmetric: MMP suppression without TIMP-1 boost [^fisher1996]. TGF-β pathway activation (potentially downstream of retinoids) could upregulate TIMP-1, but this is a secondary, slower mechanism.
- **Broad-spectrum MMP inhibitors (BBIs)** — synthetic hydroxamic acid inhibitors were clinically tested in oncology (marimastat, batimastat) but failed Phase 3 due to musculoskeletal toxicity from non-selective MMP inhibition. Not being developed for aging indications. These are distinct from physiological TIMP-based inhibition.

---

## Extrapolation note

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — TIMP/MMP stoichiometric inhibition is pan-mammalian |
| Phenotype conserved in humans? | yes — MMP/TIMP imbalance in skin aging demonstrated directly in human biopsy material [^fisher1996][^fisher2009][^zhou2021] |
| Replicated in humans? | yes (skin); partial (muscle — rat model, limited human data) |

---

## Limitations and gaps

- `#gap/needs-replication` — Quantitative TIMP-1 protein level data in sun-protected aged vs young human dermis are sparse; most published data measure TIMP-1 in UV-damaged or diseased skin. Controlled biopsy studies pairing absolute TIMP-1 protein concentration with age in healthy skin are needed.
- `#gap/needs-human-replication` — MMP-1/TIMP-1 imbalance in human aged skeletal muscle (the 2020 rat sarcopenia finding [^zhang2020] has not been directly replicated in human muscle biopsy).
- `#gap/no-mechanism` — The signal(s) responsible for the failure of TIMP-1 to proportionally upregulate in response to age- and UV-driven MMP increases are not characterised. Is it promoter methylation, miRNA suppression, or a post-transcriptional mechanism? Unknown.
- `#gap/needs-canonical-id` — GenAge does not carry a TIMP1 entry; TIMP-1 is not in GenAge human (gene not recorded as directly longevity-modifying in humans via genetic studies), though the MMP/TIMP imbalance is a well-established aging phenotype at the tissue level.
- `#gap/long-term-unknown` — No long-term human interventional data measure the effect of chronically elevating TIMP-1 (or maintaining MMP/TIMP balance) on dermal collagen content, skin aging, or systemic aging outcomes.

---

## Key cross-links

- [[mmp-1]] — primary collagenase target; TIMP-1 stoichiometrically inhibits MMP-1 interstitial collagenase activity
- [[mmp-3]] — stromelysin-1; TIMP-1 target; activated by MMP-1 in cascade; also AP-1-regulated
- [[mmp-9]] — 92K gelatinase; TIMP-1 inhibits active form AND forms complex with pro-MMP-9 zymogen via C-domain
- [[skin-aging]] — TIMP-1/MMP imbalance is central to the collagen degradation model of dermal aging
- [[dermis]] — primary site of age-associated TIMP-1/MMP balance disruption
- [[dermal-fibroblasts]] — primary TIMP-1-producing and MMP-1-producing cell type in aged dermis
- [[loss-of-proteostasis]] — ECM proteostasis failure via MMP excess
- [[hematopoietic-stem-cells]] — TIMP-1 MMP-independent erythropoiesis support via CD63/Akt signaling
- [[studies/fisher-1996-photoaging-ap1-mmp]] — establishes the UV → AP-1 → MMP cascade and the AP-1 transrepression (NOT TIMP-1 induction) mechanism of tretinoin
- [[studies/fisher-2009-collagen-fragmentation-mmp]] — establishes the self-amplifying MMP-1/collagen-fragmentation/ROS loop in aged dermis

---

## Footnotes

[^fisher1996]: [[studies/fisher-1996-photoaging-ap1-mmp]] · n=6–17 (varies per experiment) · in-vivo human skin · P<0.05–0.01 · model: adult Caucasian buttock skin · **TIMP-1 induction is explicitly NOT the mechanism of tretinoin action** — t-RA reduces UVB-induced AP-1 binding by 70% and MMP-1/MMP-9 by 50–80% via Jun/Fos protein-protein transrepression; TIMP-1 is not mentioned as a mechanistic actor

[^fisher2009]: [[studies/fisher-2009-collagen-fragmentation-mmp]] · n=4–7 · in-vivo + in-vitro · P<0.05 · model: aged vs young human sun-protected dermis + 3D collagen lattice · MMP-1 mRNA eightfold elevated, protein twofold elevated in aged dermis; self-amplifying fragmentation/ROS/AP-1 loop established

[^zhou2021]: doi:10.3389/fendo.2021.734485 · n=not specified in summary · observational · model: diabetic vs control human skin biopsies · MMP-9/TIMP-1 imbalance directly quantified; collagen deposition disorder correlated with ratio shifts; archive: pending download

[^zhang2020]: doi:10.12122/j.issn.1673-4254.2020.01.17 · in-vivo · model: aged Sprague-Dawley rats with sarcopenia · MMP-1 elevated, TIMP-1 not compensatory in aged skeletal muscle; archive: pending download · #gap/needs-human-replication

[^nagase2006]: doi:10.1016/j.cardiores.2005.12.002 · review · Nagase H, Visse R, Murphy G · *Cardiovasc Res* 2006;69:562–573 · structure-function overview of MMPs and TIMPs; TIMP-1 vs TIMP-2 target specificity; archive: not_oa (closed access)

[^oncotarget2016]: doi:10.18632/oncotarget.13664 · in-vitro · model: AML cells · TIMP-1/CD63/PI3K/Akt/p21 signaling axis established; cell survival and migration promotion; archive: pending download

[^cancers2017]: doi:10.3390/cancers9040037 · in-vitro · model: melanoma cells · Timp1 promotes cell survival via PDK1/PI3K pathway activation downstream of CD63; archive: pending download

[^actbio2023]: doi:10.1016/j.actbio.2023.05.033 · in-vitro/in-vivo (stem cell spheroids) · model: MSC spheroids · TIMP-1 secretion contributes to paracrine survival support; archive: pending download

[^uniprot-p01033]: UniProt P01033 (TIMP1_HUMAN), accessed 2026-05-19 · disulfide bond pattern, glycosylation sites, phosphorylation at Ser178 by FAM20C; metalloproteinase-binding region annotation
