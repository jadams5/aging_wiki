---
type: protein
aliases: [IL1RN, IRAP, ICIL-1RA, IL-1 receptor antagonist, interleukin-1 receptor antagonist protein, sIL-1Ra, icIL-1Ra]
uniprot: P18510
ncbi-gene: 3557
hgnc: 6000
ensembl: ENSG00000136689
genage-id: null
mouse-ortholog: Il1rn
druggability-tier: 1
key-domains: [beta-trefoil, signal-peptide-isoform1]
key-ptms: [N-glycosylation-Asn109, disulfide-Cys91-Cys141]
pathways: ["[[il-1-signaling]]"]
hallmarks: ["[[chronic-inflammation]]"]
sens-categories: []
known-interactors: ["[[il-1r1]]", "[[il-1b]]", "[[il-1a]]"]
gtex-aging-correlation: null   # #gap/not-queried; populate per sops/finding-tissue-expression.md
mr-causal-evidence: partial    # IL1RN variants are strong GWAS hits for multiple inflammatory traits; full MR instrument verification pending — see Limitations
caused-by: ["[[il-1b]]", "[[il-1a]]", "[[nf-kb]]"]
causes: ["[[il-1-signaling]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Larsen 2007 (NEJM) and Horai 2000 (J Exp Med) verified against full PDFs; Van Tassell 2014 verified at abstract/metadata level only (full PDF unavailable — DOI lookup failed); canonical IDs (UniProt P18510, NCBI Gene 3557, HGNC 6000, Ensembl ENSG00000136689) confirmed against HGNC REST API; closed-access sources (Eisenberg 1990, Hannum 1990, Arend 1998, Bresnihan 1998) not verified — not_oa in archive"
---

# IL-1Ra (IL1RN)

The endogenous brake on IL-1 signalling. IL-1Ra (gene: *IL1RN*) is the only known protein that binds [[il-1r1|IL-1R1]] with high affinity — comparable to [[il-1b|IL-1β]] and [[il-1a|IL-1α]] — yet fails to recruit the co-receptor IL-1RAcP, leaving the receptor signal-incompetent. It is therefore a pure competitive antagonist with no agonist activity. A large molar excess of IL-1Ra is required to block IL-1 responses in vivo (estimated ≥100-fold over IL-1β at receptor level), because IL-1 can trigger responses at receptor occupancies as low as 1–5%. Recombinant IL-1Ra (**anakinra**, Kineret®) was the first approved biologic for rheumatoid arthritis (FDA 2001) and has subsequently generated human data for T2D, acute post-MI inflammation, and [[chronic-inflammation|inflammaging]]-driven heart failure.

## Identity

- **UniProt:** P18510 (IL1RA_HUMAN) — Swiss-Prot (manually curated); accessed 2026-05-06
- **NCBI Gene:** 3557 (symbol: IL1RN)
- **HGNC:** 6000
- **Ensembl:** ENSG00000136689
- **Mouse ortholog:** Il1rn (one-to-one; BALB/cA *Il1rn-/-* mice develop spontaneous arthritis)
- **Precursor length (isoform 1 / sIL-1Ra):** 177 amino acids; signal peptide residues 1–25; mature secreted form 26–177

### Isoforms

IL1RN encodes four isoforms through alternative splicing and alternative transcriptional start sites [^arend1998]:

| Isoform | Short name | Localisation | Key distinction |
|---|---|---|---|
| Isoform 1 | sIL-1Ra | Secreted | Classical signal peptide (residues 1–25); the pharmacological form; basis of anakinra |
| Isoform 2 | icIL-1Ra1 | Intracellular | N-terminal extension replaces signal peptide; cytoplasmic |
| Isoform 3 | icIL-1Ra2 | Intracellular | Shorter N-terminus; predominantly in epithelial cells |
| Isoform 4 | icIL-1Ra3 | Intracellular | Shortest isoform; nuclear localisation reported |

The functional significance of the intracellular isoforms remains incompletely characterised. They lack a signal peptide and cannot be secreted conventionally; proposed intracellular roles include modulation of cytoskeletal signalling and transcription factor activity #gap/no-mechanism.

## Structure and receptor binding

IL-1Ra adopts the same **beta-trefoil** fold shared by IL-1α and IL-1β, enabling it to dock in the same ligand-binding cleft of IL-1R1 [^eisenberg1990][^hannum1990]. The critical distinction is that IL-1Ra binds IL-1R1 without inducing the conformational change necessary to recruit the accessory co-receptor IL-1RAcP — the two-chain complex required for [[myd88|MyD88]]-anchored intracellular signalling. No signal is therefore transmitted even at full receptor occupancy.

Two post-translational modifications on sIL-1Ra are relevant to function [UniProt P18510]:
- **N-glycosylation at Asn109** — present on the secreted glycoprotein (26 kDa glycosylated vs 17 kDa unglycosylated); commercial anakinra is a non-glycosylated E. coli-expressed product
- **Disulfide bond Cys91–Cys141** — required for structural integrity

### Molar ratio requirement

In cell-culture models, achieving 50% inhibition of IL-1 responses requires approximately a 100–1000-fold molar excess of IL-1Ra over IL-1β [^arend1998]. This reflects the fact that downstream signalling is triggered at only 1–5% IL-1R1 occupancy by IL-1. The in vivo pharmacodynamic implication is that circulating IL-1Ra must substantially exceed circulating IL-1 to provide full blockade — a consideration for anakinra dosing at 100 mg s.c. daily.

## Cloning (dual concurrent discovery, 1990)

IL-1Ra was cloned simultaneously and independently by two groups in 1990, both publishing in *Nature* on the same day:

- **Eisenberg et al.** (Synergen/Amgen group): Sequenced cDNA from a human monocyte cDNA library; demonstrated that the encoded protein blocked IL-1 binding to IL-1R and had no agonist activity [^eisenberg1990].
- **Hannum et al.** (same Amgen team): Characterised the protein purified from the urine of febrile patients; identified it as the previously described "urinary IL-1 inhibitor"; confirmed IL-1R1 binding without signal transduction [^hannum1990].

The protein had been functionally detected in conditioned medium from LPS-stimulated monocytes and in urine of patients with monocytic leukaemia in the mid-1980s, but molecular characterisation awaited these 1990 reports.

## The IL-1 / IL-1Ra balance in aging

### Inflammaging context

[[il-1b|IL-1β]] and [[il-1a|IL-1α]] are canonical drivers of [[chronic-inflammation|inflammaging]] — the chronic low-grade sterile inflammation that accumulates with age. IL-1Ra is co-induced as part of the same inflammatory response, functioning as a homeostatic counter-regulatory signal. In health, the balance favours anti-inflammatory resolution; in chronic aging-associated inflammation, this balance is disrupted [^arend1998].

Key observations (not yet formally graded by MR; see Limitations):
- Serum IL-1Ra rises with age in community-dwelling adults, in parallel with other acute-phase proteins #gap/needs-replication (single-cohort data; specific citation needed — populate on next pass).
- The **IL-1Ra/IL-1β ratio** — not the absolute level of either alone — is proposed as a more informative index of net IL-1 signalling tone. A declining ratio would indicate shift toward pro-inflammatory signalling #gap/no-mechanism (causal direction not established).
- NLRP3 [[nlrp3-inflammasome|inflammasome]] hyperactivation in aged macrophages amplifies IL-1β output, potentially outpacing the compensatory rise in IL-1Ra.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — IL1RN, IL1R1 fully conserved |
| Phenotype (IL-1Ra dysregulation in aging) conserved in humans? | partial — cross-sectional human data exist but MR-causal link not established |
| Replicated in humans? | partial — clinical trials with anakinra provide indirect evidence of IL-1 excess in aging-associated diseases |

### IL-1Ra deficiency and autoimmunity

The clearest evidence that endogenous IL-1Ra is physiologically essential comes from the *Il1rn-/-* knockout mouse:

Horai et al. (2000, *J Exp Med*) showed that BALB/cA *Il1rn-/-* mice spontaneously develop chronic inflammatory polyarthropathy resembling rheumatoid arthritis, with arthritis detectable as early as 5 weeks of age, >80% incidence before 8 weeks, and 100% penetrance by 13 weeks [^horai2000]. Histology showed marked synovial and periarticular inflammation with articular erosion caused by granulation tissue invasion (pannus formation), elevated IL-1β, IL-6, and TNF-α mRNA in joints, and development of autoantibodies (anti-IgG, anti-type-II-collagen, anti-dsDNA). The disease is strain-dependent: C57BL/6 background mice did not develop arthritis (0/56 at 16 weeks); the 129 × C57BL/6J F1 hybrid also remained disease-free. This loss-of-function phenotype establishes that basal IL-1Ra production is not redundant — without it, IL-1 signalling is chronically derepressed, leading to joint destruction.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial — human IL1RN mutations cause DIRA (Deficiency of IL-1Ra), a neonatal autoinflammatory disease with sterile multifocal osteomyelitis; spectrum distinct from RA but confirms essential role of endogenous IL-1Ra |
| Replicated in humans? | yes (DIRA: loss-of-function → autoinflammation; anakinra treatment rescues) |

## Pharmacology — anakinra

**Anakinra** (brand: Kineret®) is recombinant methionyl human IL-1Ra produced in *E. coli* — the non-glycosylated 17 kDa form of sIL-1Ra with an N-terminal Met addition. For full compound-level data (PK, dosing, trial details), see [[anakinra]].

Brief summary relevant to aging biology:

| Property | Value |
|---|---|
| Route | Subcutaneous injection |
| Approved dose | 100 mg/day |
| Half-life | ~4–6 hours |
| FDA approvals | RA (2001), NOMID/CAPS, SJIA, Still's disease |
| Target | IL-1R1 (blocks IL-1α and IL-1β equally) |

The short half-life (~4–6 h) distinguishes anakinra from longer-lived IL-1 modulators: [[canakinumab]] (anti-IL-1β mAb; ~28-day half-life) and rilonacept (IL-1 trap; ~7-day half-life). For sustained blockade in chronic aging-related conditions, once-daily anakinra requires consistent adherence; missed doses create partial coverage windows.

### Anakinra in type 2 diabetes

Larsen et al. (2007, *NEJM*, n=70 randomised [34 anakinra / 35 placebo; 67 completed], 13-week double-blind RCT) randomised T2D patients to anakinra 100 mg/day s.c. or placebo. Anakinra reduced HbA1c by 0.46 percentage points vs placebo (95% CI 0.01–0.90; P=0.03), improved C-peptide secretion (P=0.05), reduced proinsulin-to-insulin ratio (P=0.005), and reduced IL-6 (P<0.001) and CRP (P=0.002) [^larsen2007]. This is mechanistically relevant to inflammaging: pancreatic β-cell NLRP3 activation by palmitate and glucose generates IL-1β that drives β-cell dysfunction in T2D, and anakinra interrupts this loop. The trial established proof-of-concept for IL-1 blockade in a metabolic-aging-related disease but was underpowered for long-term glycaemic outcomes. #gap/needs-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes — T2D is a human disease |
| Replicated in humans? | limited — one trial, n=70, 13 weeks; larger replication needed |

### Anakinra in heart failure with preserved ejection fraction (HFpEF)

Van Tassell et al. (2014, *Am J Cardiol*, D-HART pilot; n=12, crossover RCT) showed that anakinra improved peak VO₂ by +1.2 mL/kg/min (p=0.009) and reduced plasma CRP by 74% (p=0.006) in HFpEF patients with elevated inflammatory markers [^vantassell2014]. HFpEF is disproportionately prevalent in older adults and is mechanistically linked to [[chronic-inflammation|chronic low-grade inflammation]] driving myocardial fibrosis and diastolic dysfunction. This pilot supports the hypothesis that IL-1–driven inflammation contributes to HFpEF pathogenesis. #gap/needs-replication (n=12 crossover; powered for VO₂, not outcomes)

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes — HFpEF is a human phenotype |
| Replicated in humans? | in-progress — D-HART2 and larger trials pending |

### RA phase 3 trial (Bresnihan 1998)

Bresnihan et al. (1998, *Arthritis Rheum*, n=472, 24-week RCT) demonstrated that anakinra 150 mg/day reduced ACR20 response vs placebo (43% vs 27%, p<0.001) and significantly slowed radiographic joint damage progression [^bresnihan1998]. This established anakinra as an effective IL-1 blocker in human inflammatory disease before the aging-specific trials, and provided the pivotal data package for FDA approval.

## Pathway membership and cross-references

- [[il-1-signaling]] — IL-1Ra is the canonical negative regulator of this pathway; see pathway page for receptor complex details
- [[nlrp3-inflammasome]] — upstream activator of IL-1β; IL-1Ra is co-induced to counter the output
- [[nf-kb]] — NF-κB drives IL1RN transcription as part of the anti-inflammatory feedback response
- [[chronic-inflammation]] — hallmark context; IL-1Ra/IL-1 ratio is a component of the inflammatory tone index
- [[il-1b]] — primary ligand antagonised; see that page for CANTOS/canakinumab data
- [[il-1a]] — secondary ligand antagonised; both blocked equally by IL-1Ra/anakinra
- [[il-1r1]] — the receptor IL-1Ra occupies without activating
- [[anakinra]] — recombinant therapeutic form (verified R27)
- [[canakinumab]] — IL-1β-specific comparator class; longer half-life; CANTOS data at that page

**Resolved 2026-05-07 (R27 propagation):** Two stubs from the prior list are now seeded and verified — [[il-1-signaling]] (pathway) and [[anakinra]] (compound). Co-seeded siblings [[il-1a]] and [[il-1r1]] previously verified. The IL-1 family page-cluster is now schematically complete at the pathway + receptor + agonist + antagonist + drug-form level.

## Limitations and gaps

- **MR-causal evidence — `partial`:** IL1RN variants (notably the VNTR polymorphism in intron 2, IL1RA*2 allele) are GWAS hits for multiple inflammatory traits and associated with altered IL-1Ra production, but a formal two-sample MR establishing causal direction (IL-1Ra → aging phenotype) has not been published as of the knowledge cutoff. The `mr-causal-evidence: partial` reflects the variant association data without confirmed MR instrument analysis. Populate via `sops/finding-population-evidence.md` on next pass. #gap/needs-replication
- **GTEx aging correlation:** Not queried. Populate `gtex-aging-correlation:` per `sops/finding-tissue-expression.md`. #gap/not-queried
- **GenAge ID:** IL1RN does not appear to have a dedicated GenAge entry. The `genage-id: null` reflects this; confirm on next pass at `genomics.senescence.info/genes`. #gap/needs-canonical-id (if entry exists)
- **Serum IL-1Ra and aging — citation needed:** The claim that serum IL-1Ra rises with age in community-dwelling adults requires a specific primary citation (likely a population-based study such as InCHIANTI or NHANES; check on next pass). Currently #gap/unsourced for the age-trend claim.
- **IL-1Ra/IL-1β ratio as aging biomarker:** Proposed but not formally validated as a biomarker. Create a `biomarkers/il1ra-il1b-ratio.md` stub if this becomes a tracking priority. #gap/no-mechanism
- **Intracellular isoform function:** The biology of icIL-1Ra1/2/3 inside cells (cytoplasmic, nuclear) is incompletely characterised; whether they contribute to aging biology is unknown. #gap/no-mechanism
- **Verified sources (this pass):** Larsen 2007 (NEJM) and Horai 2000 (J Exp Med) verified against full PDFs via a local paper archive.
- **Partially verified:** Van Tassell 2014 (Am J Cardiol) — abstract/metadata confirmed via Europe PMC and Crossref; peak VO₂ and CRP figures consistent with abstract, but full-text download failed (`failed` status in a local paper archive). CRP p-value (p=0.006) not independently confirmed from primary PDF. #gap/no-fulltext-access (Van Tassell 2014 only)
- **Closed-access sources (not verified this pass):** Eisenberg 1990 (Nature), Hannum 1990 (Nature), Arend 1998 (Annu Rev Immunol), Bresnihan 1998 (Arthritis Rheum) — all have `not_oa` status in a local paper archive. Claims sourced to these are consistent with well-established consensus biology but have not been verified line-by-line against full text. #gap/no-fulltext-access

---

## Footnotes

[^eisenberg1990]: doi:10.1038/343341a0 · Eisenberg SP et al. · Nature 1990 · in-vitro (cDNA cloning, human monocyte library) · primary cDNA cloning and functional characterisation of human IL-1Ra; demonstrated competitive IL-1R1 binding without signal transduction; 824 citations per Crossref

[^hannum1990]: doi:10.1038/343336a0 · Hannum CH et al. · Nature 1990 · in-vitro (protein purification from urine of febrile patients) · concurrent independent cloning; identified urinary IL-1 inhibitor as IL-1Ra; confirmed IL-1R1 binding; 840 citations per Crossref

[^arend1998]: doi:10.1146/annurev.immunol.16.1.27 · Arend WP, Malyak M, Guthridge CJ, Gabay C · Annu Rev Immunol 1998 · review · comprehensive review of IL-1Ra biology, isoforms, molar-ratio requirement, and in-vivo roles; 828 citations per Crossref

[^horai2000]: doi:10.1084/jem.191.2.313 · Horai R et al. · J Exp Med 2000 · in-vivo (gene-targeted mouse, BALB/cA Il1rn-/-) · spontaneous chronic inflammatory polyarthropathy; arthritis detectable from 5 wk, >80% incidence before 8 wk, 100% by 13 wk; synovial/periarticular inflammation, articular erosion, pannus formation, elevated IL-1β/IL-6/TNF-α mRNA in joints, autoantibodies (anti-IgG, anti-type-II-collagen, anti-dsDNA); strain-dependent (C57BL/6: 0/56 at 16 wk); establishes physiological necessity of endogenous IL-1Ra

[^bresnihan1998]: doi:10.1002/1529-0131(199812)41:12<2196::AID-ART15>3.0.CO;2-2 · Bresnihan B et al. · Arthritis Rheum 1998 · rct · n=472 · 24-week phase 3; anakinra 150 mg/day vs placebo in RA; ACR20 43% vs 27% (p<0.001); slowed radiographic progression; pivotal trial for FDA approval

[^larsen2007]: doi:10.1056/NEJMoa065213 · Larsen CM et al. · NEJM 2007 · rct · n=70 randomised (34 anakinra / 35 placebo; 67 completed) · 13-week double-blind parallel-group; anakinra 100 mg/day s.c. vs placebo in T2D (HbA1c >7.5%); primary endpoint: HbA1c −0.46 pp vs placebo (95% CI 0.01–0.90; P=0.03); C-peptide AUC improved (P=0.05); proinsulin/insulin ratio reduced (P=0.005); IL-6 P<0.001; CRP P=0.002; no effect on insulin sensitivity (M value P=0.58); model: human T2D patients

[^vantassell2014]: doi:10.1016/j.amjcard.2013.08.047 · Van Tassell BW et al. · Am J Cardiol 2014 · rct · n=12 · double-blind crossover (14-day treatment periods); D-HART pilot; anakinra 100 mg/day vs placebo in HFpEF with elevated inflammatory markers; peak VO₂ +1.2 mL/kg/min (p=0.009); CRP −74% (p=0.006 — p-value from seeder, not independently verified against full PDF; full text unavailable in archive [download failed]); model: human HFpEF
