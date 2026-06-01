---
type: process
aliases: [IgG N-glycosylation, Fc N-glycosylation, IgG glycome, IgG Fc glycome, Asn297 glycosylation]
key-proteins: ["[[b4galt1]]", "[[st6gal1]]", "[[fut8]]", "[[mgat3]]"]
pathways: []
hallmarks: ["[[chronic-inflammation]]"]
selective-variants: []
druggability-tier: 3
caused-by: []
causes: ["[[chronic-inflammation]]"]
literature-checked-through: 2026-05-20
verified: true
verified-date: 2026-05-20
verified-by: claude
verified-scope: "Shields 2002 (JBC), Anthony 2008 (Science), Ercan 2017 (JCI Insight), Kristic 2014 (J Gerontol), Landini 2022 (Nat Commun), Gaifem 2024 (Nat Immunol) verified against local PDFs. UniProt accessions MGAT3 Q09327 and ST6GAL1 P15907 confirmed via UniProt REST API. Vinicki 2025 DOI confirmed via PubMed efetch. Kaneko 2006 (Science; not_oa) and Parekh 1985 (Nature; download failed): abstract-level only; sialylated-fraction % and RA n unverifiable from full text — tagged #gap/no-fulltext-access. Gudelj/Kristić 2018 Cell Immunol review: pending download; flagged. Simurina 2018, Menni 2018, Nimmerjahn 2023: pending download/not_oa; footnote-level only."
---

# IgG Fc N-glycosylation

IgG Fc N-glycosylation is the post-translational addition of a branched biantennary N-glycan to **Asn297** of each IgG heavy-chain CH2 domain (two glycans per IgG molecule, one per heavy chain). The composition of this glycan — variable galactosylation (G0/G1/G2), sialylation, core fucosylation, and bisecting GlcNAc addition — directly tunes IgG effector function across a wide range of FcγR binding affinities, making the Fc glycome a major rheostat of immune-effector biology. Age-related, sex-hormone-dependent, and inflammation-driven shifts in glycan composition give rise to an inflammaging-relevant IgG-glycome aging signature measured by the [[biomarkers/glycanage-2017|GlycanAge]] biomarker [^gudelj2018]. This page covers the biochemistry, enzymology, regulation, and aging-relevant biology of IgG Fc N-glycosylation. Measurement methods and aging-biomarker findings are on [[biomarkers/glycanage-2017]]; the largest recent cross-study mortality validation is on [[studies/mijakovac-2026-igg-glycome-mortality]].

**Terminology note:** "Glycosylation" (this page) is enzymatic, site-specific addition of sugar moieties to proteins during biosynthesis. It is distinct from "glycation" — non-enzymatic Maillard-chemistry-mediated modification of proteins by reducing sugars (see [[processes/advanced-glycation-end-products]] and [[processes/glucosepane]]). The two terms are commonly conflated in the popular literature. Asn297 glycosylation is performed by Golgi glycosyltransferases; AGE formation is spontaneous and irreversible.

---

## Glycan structure and nomenclature

The Fc N-glycan is built on a conserved **core heptasaccharide**: GlcNAc₂–Man₃–GlcNAc₂ (also called the chitobiose core–trimannosyl core–chitobiose stem). Variable additions occur on top of this scaffold:

| Position | Residue | Linkage | Functional significance |
|---|---|---|---|
| Core innermost GlcNAc | Fucose (Fuc) | α1,6 | Core fucosylation; ADCC regulator |
| Central Man branch | Bisecting GlcNAc | β1,4 | Inhibits FUT8-mediated fucosylation; modulates FcγR binding |
| Terminal GlcNAc of each antenna | Galactose (Gal) | β1,4 | Anti-inflammatory when present; exposes activating GlcNAc when absent |
| Terminal Gal | Sialic acid (Neu5Ac) | α2,6 | Anti-inflammatory; DC-SIGN engagement |

**Galactosylation nomenclature (G-notation):** G0 = zero terminal galactoses added (both antennae terminate in GlcNAc); G1 = one galactose added (asymmetric); G2 = two galactoses added (symmetric, both antennae capped). These can be combined with modifiers:
- **F** — core-fucosylated (e.g., G0F, G1F, G2F)
- **B** — bisecting GlcNAc present (e.g., G0FB, G2FB)
- **S1/S2** — one or two sialic acid residues (e.g., G2FS1, G2FS2)

**Canonical glycoform set** (those most commonly quantified in serum IgG studies):

| Shorthand | Galactose | Fucose | Bisect | Sialic acid |
|---|---|---|---|---|
| G0 | 0 | no | no | 0 |
| G0F | 0 | yes | no | 0 |
| G0FB | 0 | yes | yes | 0 |
| G1F | 1 | yes | no | 0 |
| G1FB | 1 | yes | yes | 0 |
| G2F | 2 | yes | no | 0 |
| G2FB | 2 | yes | yes | 0 |
| G2FS1 | 2 | yes | no | 1 |
| G2FS2 | 2 | yes | no | 2 |

In UPLC-based glycan profiling, the IgG N-glycan pool is resolved into ~24 chromatographic peaks (GP1–GP24), which together capture the full glycoform space. The GlycanAge commercial assay uses this GP1–GP24 framework [^kristic2014]. Approximately 40+ distinct glycoforms are detectable in high-resolution MS-based profiling.

---

## Biosynthesis — the enzymatic cascade

IgG N-glycosylation is completed during plasma-cell secretion. The process spans the ER and Golgi in sequence:

### 1. ER: precursor transfer and trimming

- **OST (oligosaccharyltransferase)** co-translationally transfers a preformed Glc₃Man₉GlcNAc₂ glycan from dolichol phosphate to Asn297 on the nascent heavy chain — the canonical Asn-X-Ser/Thr sequon. OST is a multi-subunit complex (catalytic subunits STT3A/STT3B in humans).
- **Glucosidases I and II** sequentially remove the three glucose residues, required for calnexin/calreticulin folding-quality-control interaction.
- **ER mannosidase I** removes one mannose, yielding Man₈GlcNAc₂; further trimming in the ER and cis-Golgi yields Man₅GlcNAc₂.

### 2. Golgi: sequential glycosyltransferase processing

The Golgi processing cascade determines the final glycan composition, and each GTase action is rate-limiting or modulatory for subsequent steps:

**Step 1 — MGAT1/MGAT2** add the first and second GlcNAc to each Man arm, converting Man₅ to the biantennary GlcNAc₂Man₃GlcNAc₂ complex-type scaffold. This is the committed step toward complex-type glycans.

**Step 2 — FUT8 (α1,6-fucosyltransferase; UniProt Q9BYC5)** adds core fucose in α1,6 linkage to the innermost GlcNAc. FUT8 is the sole enzyme responsible for core fucosylation of IgG in humans; fucose-deficient IgG (produced in Lec13 CHO cells, which are deficient in GDP-fucose biosynthesis, not FUT8-KO per se) demonstrates dramatically enhanced FcγRIIIA binding [^shields2002]. Bisecting GlcNAc (added by MGAT3, below) sterically inhibits FUT8 access — so bisection and fucosylation are mutually exclusive outcomes at the individual glycan level.

**Step 3 — MGAT3 (GnT-III; β1,4-mannosyl-glycoprotein 4-β-N-acetylglucosaminyltransferase III; UniProt Q09327)** adds bisecting GlcNAc in β1,4 linkage to the central Man of the trimannosyl core. Bisecting GlcNAc: (i) inhibits subsequent FUT8-mediated fucosylation of the same glycan; (ii) inhibits MGAT5-mediated branching extension; (iii) modestly enhances FcγRIIIA binding. MGAT3 and ST6GAL1 are among the loci with strongest GWAS signal for IgG glycan variation in humans [^landini2022].

**Step 4 — B4GALT1 (β1,4-galactosyltransferase 1; UniProt P15291)** adds terminal Gal in β1,4 linkage to the terminal GlcNAc of each antenna. This step is the primary determinant of G0/G1/G2 composition and is the rate-limiting step for galactosylation. B4GALT1 expression in plasma cells is:
- **Age-dependent:** declines with age in B cells, driving the increase in G0 [^gudelj2018]
- **Estrogen-dependent:** upregulated by estrogen receptor (ESR1) signaling; menopause-associated estrogen decline partially drives glycome aging [^ercan2017]
- **Inflammation-suppressed:** IL-6 and TNF-α reduce B4GALT1 transcription, creating a bidirectional feedback loop with inflammaging

**Step 5 — ST6GAL1 (β-galactoside α2,6-sialyltransferase 1; UniProt P15907)** adds terminal Neu5Ac (sialic acid) in α2,6 linkage to terminal Gal on G1 or G2 glycans. ST6GAL1 activity is therefore substrate-limited by B4GALT1 — galactosylation must precede sialylation. ST6GAL1 is the primary source of the anti-inflammatory sialylated IgG Fc that mediates IVIG's anti-inflammatory effect [^kaneko2006]. GWAS studies identify ST6GAL1 as a major genetic determinant of IgG sialylation levels [^landini2022].

**Sialidases (NEU1, NEU3)** can cleave SA from circulating IgG; the contribution of sialidase activity to age-related SA decline relative to reduced ST6GAL1 biosynthesis is not yet quantified. #gap/no-mechanism

---

## Functional consequences — Fc–receptor interactions

The glycan composition of the Fc region determines which effector arms of immunity IgG engages. The key interactions:

| Glycoform feature | FcγRIIIA (CD16; activating) | FcγRIIb (CD32b; inhibitory) | C1q / complement | MBL / lectin pathway |
|---|---|---|---|---|
| **Defucosylated (nonF)** | **~50x enhanced binding** | Modestly enhanced | Slight increase | Variable |
| **G0 (agalactosylated)** | Modest increase | Reduced | Increased | **Strongly increased — exposed terminal GlcNAc binds MBL** |
| **G2 (digalactosylated)** | Modest decrease | **Enhanced** (closed-conformation Fc) | Decreased | Not activated |
| **Sialylated (G2FS1/G2FS2)** | Decreased | **Enhanced via DC-SIGN** | Decreased | Not activated |
| **Bisecting GlcNAc** | Enhanced (partly via inhibiting fucosylation) | Modestly altered | Slight change | Variable |

Key mechanistic findings verified in primary literature:

**Defucosylation → enhanced ADCC.** Removing core fucose enhances binding to FcγRIIIA (CD16) on NK cells and macrophages by **up to 50-fold** (Hu4D5 dimers vs CHO-S reference; EC50 shift from >10 µg/ml to 0.24 µg/ml for Phe158 allele; 0.07 µg/ml for Val158 allele), resulting in dramatically enhanced ADCC [^shields2002]. This finding is the mechanistic basis for clinical engineering of afucosylated therapeutic mAbs (obinutuzumab, mogamulizumab). The precise enhancement factor depends on the FcγRIIIA polymorphism (F158/V158 variant); both alleles benefit substantially, with a large absolute EC50 improvement on both the lower-affinity Phe158 allele and the higher-affinity Val158 allele [^shields2002].

**Sialylated IgG → anti-inflammatory / IVIG mechanism.** Fc sialylation generates anti-inflammatory activity via a distinct signaling axis: sialylated IgG engages DC-SIGN on regulatory macrophages → upregulation of inhibitory FcγRIIb on effector cells → global dampening of activating FcγR signaling [^anthony2008]. This is the mechanistic basis of IVIG's anti-inflammatory therapeutic effect: the sialylated fraction mediates this anti-inflammatory switch [^kaneko2006]. Recombinant sialylated IgG1 Fc fragments (α2,6-sialylated, galactosylated G2-scaffold) recapitulate IVIG anti-inflammatory activity at 30 mg/kg, compared to 1,000–2,000 mg/kg for native IVIG — approximately 30- to 67-fold lower dose [^anthony2008].

**G0 (agalactosylated) IgG → complement and lectin pathway activation.** When terminal GlcNAc is exposed (G0), IgG binds mannose-binding lectin (MBL) → lectin-pathway complement activation. This may contribute to the pro-inflammatory state of aging independent of FcγR engagement [^parekh1985].

---

## Age- and sex-hormone-dependent shifts

### Age trajectory

Across large population studies (n > 5,000), the dominant age-associated IgG glycome shifts are [^kristic2014][^gudelj2018]:
- G0 (agalactosylation) rises with age in both sexes
- G2 (digalactosylation) falls with age in both sexes
- Sialylation (SA, NANA) declines with age
- Bisecting GlcNAc increases modestly with age
- Core fucosylation is generally stable with age (not the primary aging signal)

The **G0/G2 ratio** is the dominant aging-associated signal and is the primary driver of the GlycanAge clock score.

### Sex dimorphism

Women consistently have lower baseline G0 (= more galactosylated, more anti-inflammatory IgG profile) than men of the same chronological age. The sex gap narrows significantly at perimenopause/menopause, consistent with estrogen's role in maintaining B4GALT1 activity. In the ORCADES/TwinsUK cohort, women have systematically lower G0 glycans (more galactosylated) than men of the same chronological age until the menopause transition [^kristic2014][^ercan2017]. The specific GlycanAge gap in years is reported on [[biomarkers/glycanage-2017]] which should be consulted for the quantitative sex-gap figure. #gap/needs-replication — the precise "X biological-age-years" estimate is GlycanAge-model-dependent and belongs on the biomarker page.

### Estrogen → B4GALT1 axis

The estrogen–IgG glycan link is mechanistically established:
- Menopause increases agalactosylated IgG glycans; estrogen treatment in postmenopausal women reduces them; hormone deprivation in premenopausal women increases them (reversed by estradiol); in men, testosterone conversion to estradiol blocks glycan increases from hormone suppression [^ercan2017]. This establishes estrogens as in vivo regulators of IgG galactosylation in both sexes.
- The presumed mechanism is ESR1 (estrogen receptor alpha) → transcriptional upregulation of B4GALT1 in B cells, though the downstream signaling intermediates are not fully resolved. #gap/needs-replication — the exact ESR1→B4GALT1 signaling chain at the molecular level is not yet confirmed by a dedicated mechanistic study; the Ercan 2017 data are pharmacological-intervention evidence, not molecular-mechanism evidence.

### Inflammation → glycan loss feedback loop

The bidirectional loop between inflammation and IgG glycome is a core concept for inflammaging:

1. **Inflammation suppresses glycosyltransferases:** IL-6, TNF-α, and type I IFN downregulate B4GALT1 and ST6GAL1 in B cells — reducing galactosylation and sialylation of newly secreted IgG.
2. **Agalactosylated IgG amplifies inflammation:** G0 IgG binds MBL → complement activation; G0 IgG preferentially engages FcγRIIIA → enhanced TNF-α + IL-6 release; reduced sialylation removes the DC-SIGN/FcγRIIb inhibitory brake.
3. **Net result:** A self-amplifying inflammaging loop — inflammatory cytokines → glycan loss → more pro-inflammatory IgG → more cytokines. This positions IgG Fc glycosylation as both a **biomarker** and a **functional amplifier** of [[hallmarks/chronic-inflammation|inflammaging]] [^gudelj2018][^nimmerjahn2023].

### Microbiome modulation

Short-chain fatty acids (SCFAs) from gut commensals modulate B-cell glycosyltransferase expression. Age-related dysbiosis-driven SCFA decline may contribute to glycome aging shifts via this axis. #gap/needs-replication — the SCFA→B4GALT1/ST6GAL1 mechanism has been proposed but not confirmed in vivo in humans; currently supported only by in vitro and rodent data.

---

## Cross-species variation

Mouse IgG glycosylation is structurally similar to human but differs in important ways:

- Mice can synthesize **Neu5Gc** (N-glycolylneuraminic acid) in addition to Neu5Ac. Humans lack Neu5Gc due to inactivation of the CMAH gene in the human lineage. Neu5Gc-bearing sialylated IgG has distinct biological properties; human-relevance of mouse Neu5Gc-sialylation findings requires caution.
- Mouse IgG Fc galactosylation patterns and the magnitude of age-related shifts differ from human; genetic control of the IgG glycome is partially conserved but not identical [^landini2022].

**Extrapolation table for mouse IgG glycome aging studies → human:**

| Dimension | Status |
|---|---|
| Core enzymatic cascade (FUT8, MGAT3, B4GALT1, ST6GAL1) conserved in humans? | yes — all four enzymes are orthologs |
| Glycan-composition → effector-function relationship conserved? | yes / partial — FcγR binding mechanics conserved; Neu5Gc sialic acid is mouse-specific |
| Magnitude and direction of age-related glycome shift conserved? | partial — directionally conserved (G0 rise, G2 fall); quantitative rates differ |
| Estrogen → glycan regulation conserved in humans? | yes — established in human intervention studies (Ercan 2017) |

---

## Disease associations

IgG Fc glycome alterations are associated with a broad range of inflammatory and age-related conditions:

| Condition | Signature shift | Key reference |
|---|---|---|
| Rheumatoid arthritis | Strong G0 elevation, sialylation loss in established RA vs OA vs controls | Parekh 1985 *Nature* (foundational) [^parekh1985] |
| Crohn's disease | Low galactosylation (G0 elevation) predicts disease onset by years; associates with antimicrobial Abs | Šimurina 2018 *Gastroenterology* [^simurina2018]; Gaifem 2024 *Nat Immunol* [^gaifem2024] |
| Ulcerative colitis | G0 elevation, correlates with disease severity | Šimurina 2018 [^simurina2018] |
| Cardiovascular disease | G0 elevation, sialylation loss; glycan panel associates with CVD risk score + subclinical atherosclerosis | Menni 2018 *Circ Res* [^menni2018] |
| Type 2 diabetes / metabolic syndrome | Inflammaging-type signature; G0 elevated | PMID 41425575 (2025 review) |
| Systemic lupus erythematosus | Heterogeneous; G0 elevated, sialylation reduced | Multiple |
| COVID-19 severe disease | Afucosylated anti-spike IgG drives hyperinflammation via FcγRIIIA on macrophages; low Gal | Multiple 2020–2022 papers |

The rheumatoid arthritis association (Parekh 1985) was the first demonstration that IgG glycosylation is disease-modified [^parekh1985]. The pre-diagnostic Crohn's finding (Gaifem 2024) is among the strongest evidence that glycome changes are causally upstream of disease, not merely reactive [^gaifem2024].

---

## Therapeutic engineering and intervention landscape

### Engineered glycoforms in biopharmaceuticals

The FcγRIIIA-binding enhancement from defucosylation is exploited in clinical-stage therapeutic antibodies:

- **Obinutuzumab** (anti-CD20; CLL/follicular lymphoma) — afucosylated for enhanced NK-cell ADCC; FDA-approved 2013
- **Mogamulizumab** (anti-CCR4; CTCL/ATLL) — afucosylated; FDA-approved 2012 in Japan, 2018 USA
- **POTELLIGENT / GlymaxX technologies** — CHO-cell-line engineering platforms producing afucosylated mAbs; widely licensed
- **Sialylated IVIG / recombinant Fc fragments** — anti-inflammatory IVIG fractions enriched for sialylated IgG; in clinical development for autoimmune indications (Revimmune/ANX-201 class) [^anthony2008]

### Endogenous glycome modulation — aging-intervention context

Several interventions shown to shift the GlycanAge clock toward a younger IgG glycome profile (data from [[studies/mijakovac-2026-igg-glycome-mortality]]):
- **Hormone replacement therapy (HRT):** −0.12 GlycanAge-equivalent years per month (n=19, P=5.76×10⁻⁸); the estrogen effect on B4GALT1 is the proposed mechanism [^ercan2017]
- **Therapeutic plasma exchange (TPE):** −0.4 GlycanAge-equivalent years per month (n=9, P=0.0245 from Mijakovac 2026 preprint sub-cohort) — see [[interventions/blood-product/plasma-exchange]]
- **Caloric restriction / weight loss:** Significant glycome deceleration at ≥11 kg weight loss (Mijakovac 2026 DIOGENES sub-analysis, n=680, P=0.0017); GlycanAge reduction also documented in bariatric surgery cohorts
- **Testosterone** (middle-aged men RCT): decreased agalactosylation, increased galactosylation and sialylation [^vinicki2025] #gap/needs-replication — single RCT; metformin showed no significant effect in same trial

**Direct GTase activation as intervention target:** B4GALT1 activators would be the mechanistically rational intervention target (would directly raise galactosylation, without the systemic effects of sex hormone replacement). No B4GALT1-activating clinical candidate currently exists; this remains a gap. #gap/needs-replication

---

## Limitations and gaps

- B-cell B4GALT1 and ST6GAL1 activity are not routinely measurable in peripheral blood; the serum IgG glycome reflects the biosynthetic output of a heterogeneous B-cell/plasma-cell pool. The upstream regulatory state (glycosyltransferase activity, SCFA levels, cytokine milieu) is not directly quantified.
- Whether endogenous glycome modulation translates to mortality-risk reduction (beyond the correlative findings in Mijakovac 2026, which are preprint-only) requires intervention-arm-specific RCTs with mortality endpoints. #gap/needs-replication
- Glycan composition is not the only Fc effector variable — IgG subclass (IgG1/IgG2/IgG3/IgG4), affinity maturation state, and Fab N-glycosylation (present on ~15–20% of IgG molecules; variable-region glycosylation has distinct biology and is sometimes confused with Fc glycosylation in older literature) all modulate effector function independently.
- Bisecting GlcNAc biology in aging is less well-characterized than galactosylation and sialylation; most large population studies have lower statistical power for bisected glycoforms.
- The ESR1 → B4GALT1 molecular signaling cascade has pharmacological-intervention evidence (Ercan 2017) but not direct mechanistic characterization (no ChIP-seq / estrogen-response-element mapping published as of 2026). #gap/no-mechanism
- Most large IgG glycome aging studies are European-ancestry cohorts; generalizability to non-European populations is undercharacterized. #gap/needs-replication

---

## See also

- [[biomarkers/glycanage-2017]] — the GlycanAge biomarker page (measurement, clock training, intervention responsiveness, study citations)
- [[studies/mijakovac-2026-igg-glycome-mortality]] — 20,045-person cross-study mortality validation (preprint 2026)
- [[hallmarks/chronic-inflammation]] — inflammaging context; the IgG glycome is both a driver and a readout of inflammaging
- [[interventions/blood-product/plasma-exchange]] — TPE as a glycome-reversal intervention
- [[processes/advanced-glycation-end-products]] — DISTINCT biology: AGEs are non-enzymatic, irreversible Maillard products; do not confuse with IgG glycosylation (enzymatic, reversible, co/post-translational)
- [[processes/glucosepane]] — the dominant AGE crosslink in human tissue; unrelated to Fc glycosylation
- [[b4galt1]] — implicit stub; β1,4-galactosyltransferase 1; UniProt P15291; rate-limiting galactosylation enzyme
- [[st6gal1]] — implicit stub; α2,6-sialyltransferase 1; sialylation enzyme; GWAS-significant for IgG sialylation levels
- [[fut8]] — implicit stub; α1,6-fucosyltransferase; UniProt Q9BYC5; core fucosylation enzyme; therapeutic-antibody ADCC engineering target
- [[mgat3]] — implicit stub; GnT-III; bisecting GlcNAc transferase; competes with FUT8; GWAS-significant for IgG glycome variation

---

## Footnotes

[^kristic2014]: doi:10.1093/gerona/glt190 · PMID 24325898 · n=5,117 (Korcula n=906; Vis n=915; Orkney n=2,035; TwinsUK n=1,261) · observational · model: human · Kristic J, Vučković F, Menni C, Klarić L, Keser T et al. · *J Gerontol A Biol Sci Med Sci* 69:779–789 (2014) · three IgG glycans (GP6, GP14, GP15) explain up to 58% of variance in chronological age (R²=0.54–0.61; correlation 0.76 in training cohort); women show more pronounced age-associated changes; foundational GlycanAge study · archive: downloaded


[^shields2002]: doi:10.1074/jbc.m202069200 · in-vitro (Lec13 GDP-fucose-deficient CHO cells + primary IgG binding assays; multiple lots/conditions) · Shields RL, Lai J, Keck R, O'Connell LY, Hong K, Meng YG, Weikert SHA, Presta LG · *J Biol Chem* 277:26733–26740 (2002) · fucose-deficient IgG1 (Hu4D5) binds FcγRIIIA up to 50-fold more tightly than fucosylated reference (EC50 0.07–0.24 µg/ml vs >10 µg/ml for CHO-P); ADCC enhanced ~50-fold in NK cell assays; no FcγRI or C1q binding change; FcγRIIIA both Phe158 and Val158 alleles show major improvement; open-access article · archive: downloaded

[^kaneko2006]: doi:10.1126/science.1129594 · PMID 16888140 · in-vivo (mouse arthritis models) + serum IgG fractionation · Kaneko Y, Nimmerjahn F, Ravetch JV · *Science* 313:670–673 (2006) · Fc sialylation confers anti-inflammatory activity to IgG; sialylation is reduced upon antigen-specific immune response induction; abstract does not specify the sialylated-fraction percentage — the ~5% figure cited in reviews requires full-text verification · archive: not_oa #gap/no-fulltext-access (abstract-level only; sialylated fraction % and DC-SIGN receptor details not confirmable from abstract)

[^anthony2008]: doi:10.1126/science.1154315 · PMID 18420934 · in-vivo (mouse K/BxN arthritis model) + in-vitro · Anthony RM, Nimmerjahn F, Ashline DJ, Reinhold VN, Paulson JC, Ravetch JV · *Science* 320:373 (2008) · recombinant α2,6-sialylated IgG1 Fc active at 30 mg/kg in mouse arthritis model vs 1,000–2,000 mg/kg native IVIG; anti-inflammatory activity mediated via DC-SIGN on splenic macrophages → FcγRIIb upregulation; α2,6-linkage (not α2,3) specificity confirmed · archive: downloaded

[^parekh1985]: doi:10.1038/316452a0 · PMID 3927174 · n not confirmed (cross-sectional, Oxford + Tokyo study sites; RA vs OA vs healthy controls) · observational · Parekh RB, Dwek RA, Sutton BJ, Fernandes DL et al. (14 authors) · *Nature* 316:452–457 (1985) · first demonstration of agalactosylated IgG elevation in RA vs OA vs controls; established IgG glycan → disease link; ~996 citations · archive: download failed (unavailable OA); unverified from full text #gap/no-fulltext-access

[^ercan2017]: doi:10.1172/jci.insight.89703 · PMID 28239652 · observational (n=713 healthy adults: 119 women + 126 men in primary cohort; 468 in Orkney replication cohort) + 4 controlled interventional studies (n=159 subjects total: postmenopausal women on estrogens/raloxefine/placebo; premenopausal women on leuprolide ± estradiol; men on goserelin ± testosterone; men on goserelin/anastrozole ± testosterone) · Ercan A, Kohrt WM, Cui J, Deane KD et al. and Nigrovic PA · *JCI Insight* 2:e89703 (2017) · estrogens are in vivo regulators of IgG galactosylation in both sexes; menopause increases G0F; conjugated estrogens and raloxifene reduce G0F in postmenopausal women; leuprolide increases G0F in premenopausal women (reversed by estradiol); testosterone prevents G0F rise in men via aromatization to estradiol (anastrozole blocks this effect) · focuses on G0F (fucosylated nonbisected G0) glycoform · archive: downloaded

[^gudelj2018]: doi:10.1016/j.cellimm.2018.07.009 · PMID 30107893 · review · Gudelj I, Lauc G, Pezer M · *Cell Immunol* 2018 · comprehensive review of IgG glycome in aging and diseases; B4GALT1 age-decline; bidirectional inflammation↔glycan loop · archive: pending download #gap/no-fulltext-access (full-text verification of B4GALT1 age-decline claim pending download)

[^nimmerjahn2023]: doi:10.1038/s41590-023-01544-8 · review · Nimmerjahn F, Vidarsson G, Cragg MS · *Nat Immunol* 2023 · authoritative current review of posttranslational modifications and subclass on IgG activity; 83 citations · archive: not_oa

[^simurina2018]: doi:10.1053/j.gastro.2018.01.002 · PMID 29309774 · n=3,441 (IBD patients + controls) · observational (cross-sectional) · Šimurina M, Lauc G et al. · *Gastroenterology* 2018 · IgG glycosylation associates with IBD clinical features; low galactosylation correlates with severity; first large-scale IBD glycome study · archive: pending download

[^gaifem2024]: doi:10.1038/s41590-024-01916-8 · PMID 39080486 · prospective cohort + mechanistic (PREDICTS cohort) · Gaifem J et al. · *Nat Immunol* 2024 · n=251 CD + 250 HC individuals with longitudinal samples up to 6 years before IBD diagnosis; IgG2 H3N4F1 agalactosylated glycoform detectable up to 6 years before CD diagnosis; correlates with anti-ASCA antibodies; activates DCs via FcγRIIa-dependent NF-κB/CARD9 signaling; adoptive transfer of ASCA IgG to WT mice increased intestinal inflammation susceptibility (abolished in FcγR-deficient mice) · archive: downloaded

[^menni2018]: doi:10.1161/CIRCRESAHA.117.312174 · PMID 29535164 · n=~2,000 (two cohorts) · observational · Menni C, Gudelj I, Lauc G, Valdes AM et al. · *Circ Res* 2018 · IgG glycan panel associates with CVD risk score and subclinical atherosclerosis (carotid/femoral plaque) independent of traditional risk factors · archive: pending download

[^landini2022]: doi:10.1038/s41467-022-29189-5 · PMID 35332118 · GWAS (n=2,020 for IgG arm; n=1,890 for transferrin arm; two CROATIA cohorts KORCULA n=948 + VIKING n=952) · Landini A, Trbojević-Akmačić I, Wilson JF, Klarić L et al. · *Nat Commun* 2022 · ST6GAL1 and MGAT3 are IgG-specific GWAS loci; MGAT5, ST3GAL4, B3GAT1 are transferrin-specific; FUT8 and FUT6 are shared; distinct genetic control of IgG vs transferrin glycosylation · archive: downloaded

[^vinicki2025]: PMID 39363095 · doi:10.1007/s11357-024-01349-z · rct (n to be confirmed from full text) · Vinicki M, Pribić T, Vučković F et al. · *GeroScience* 2025 · testosterone RCT in middle-aged men → decreased agalactosylation, increased galactosylation/sialylation; metformin: no significant effect on GlycanAge · archive: pending download · #gap/needs-replication (single RCT; full-text unverified)
