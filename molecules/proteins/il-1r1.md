---
type: protein
aliases: [IL1R1, CD121a, IL-1 receptor type 1, IL-1R type I, p80, IL1RA, IL1RT1]
uniprot: P14778
ncbi-gene: 3554
hgnc: 5993
ensembl: ENSG00000115594
mouse-ortholog: Il1r1
genage-id: null
key-domains: [immunoglobulin-like-C2-x3, transmembrane, TIR-domain]
key-ptms: [Tyr496-phosphorylation, N-glycosylation-x6]
pathways: ["[[il-1-signaling]]", "[[nf-kb]]", "[[ras-mapk]]"]
hallmarks: ["[[chronic-inflammation]]"]
sens-categories: []
known-interactors: ["[[il-1b]]", "[[il-1a]]", "[[il-1ra]]", "[[myd88]]", "[[irak1]]", "[[irak4]]", "[[traf6]]"]
druggability-tier: 1
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Ridker 2017 CANTOS (10.1056/NEJMoa1707914), Greenfeder 1995 IL-1RAcP (10.1074/jbc.270.23.13757), and Wesche 1997 MyD88 (10.1016/s1074-7613(00)80402-1) verified against full PDFs. Sims 1988 (not_oa), Boraschi & Tagliabue 2013 (not_oa), and Dinarello 2009 (not_oa) not independently verified — claims attributed to these sources are structurally sound but flagged for future verification if fulltext access is obtained. Canonical database identity fields (UniProt P14778, NCBI Gene 3554, HGNC 5993, Ensembl ENSG00000115594) not independently re-checked against databases in this pass."
---

# IL-1R1 (IL1R1)

The primary signal-transducing receptor for [[il-1b|IL-1β]] and [[il-1a|IL-1α]]. IL-1R1 is a single-pass type I membrane protein that, upon ligand binding, recruits the co-receptor IL-1RAcP (encoded by *IL1RAP*) to form the functional ternary signalling complex. This complex then recruits MyD88, triggering the IRAK1/4 → TRAF6 → NF-κB / MAPK cascade — the canonical signalling pathway for both interleukins, their shared endogenous antagonist [[il-1ra|IL-1Ra]], and a convergence point for therapeutic IL-1 axis blockade (anakinra, rilonacept).

## Identity

- **UniProt:** P14778 (IL1R1_HUMAN) — Swiss-Prot (manually curated); accessed 2026-05-06
- **NCBI Gene:** 3554 (symbol: IL1R1; synonyms IL1R, IL1RA, IL1RT1)
- **HGNC:** 5993
- **Ensembl:** ENSG00000115594
- **Mouse ortholog:** Il1r1 (one-to-one)
- **Gene locus:** 2q12.1
- **Common names:** CD121a; p80 (from its ~80 kDa apparent MW); IL-1R type I

### Naming note

"IL-1RA" and "IL1RA" appear as NCBI Gene synonyms for *IL1R1* (the receptor) — not to be confused with *IL1RN*, the gene encoding IL-1Ra (IL-1 receptor antagonist). The file `il-1r1.md` is the canonical page for the signalling receptor; `[[il-1ra]]` covers the antagonist ligand.

## Structure and domains

IL-1R1 is a 569-amino acid (human) type I single-pass transmembrane glycoprotein [^sims1988][^boraschi2013]:

| Region | Residues (approx.) | Structure |
|---|---|---|
| Extracellular | 1–336 | Three tandem immunoglobulin-like C2-type domains (D1–D3) |
| Transmembrane | 337–356 | Single helix |
| Intracellular | 357–569 | TIR domain (Toll/IL-1 receptor homology domain); NADase activity reported |

The three extracellular Ig-like domains (D1–D3) form the ligand-binding scaffold; D1–D2 make primary contact with IL-1 ligands, while D3 is critical for IL-1RAcP co-receptor recruitment [^boraschi2013]. Six N-linked glycosylation sites account for the discrepancy between the ~47 kDa predicted MW and the ~80 kDa apparent MW on SDS-PAGE.

**Key PTMs:**
- **Tyr496 phosphorylation** — creates a binding site for the p85 subunit of PI3-kinase, linking IL-1R1 to the PI3K–Akt pathway [^boraschi2013]
- **N-glycosylation at six asparagines** — required for proper folding and surface expression (UniProt P14778)

**Soluble form:** Proteolytic ectodomain shedding releases a soluble IL-1R1 (sIL-1R1; ~50–55 kDa) that retains ligand-binding capacity and may act as a decoy receptor in some contexts. Circulating sIL-1R1 levels are measureable in serum. #gap/needs-replication — the physiological role of sIL-1R1 vs the dedicated decoy receptor IL-1R2 in modulating extracellular IL-1 tone is incompletely defined.

## Ligand selectivity

IL-1R1 binds three canonical IL-1 family cytokines with fundamentally different outcomes [^dinarello2009]:

| Ligand | Gene | Outcome | Notes |
|---|---|---|---|
| [[il-1b\|IL-1β]] | IL1B | Full agonist — recruits IL-1RAcP, activates signalling | Primary pathological ligand in inflammaging |
| [[il-1a\|IL-1α]] | IL1A | Full agonist — recruits IL-1RAcP, activates signalling | Alarmin; released by necrotic cells and senescent SASP |
| [[il-1ra\|IL-1Ra]] | IL1RN | Competitive antagonist — binds IL-1R1 **without** recruiting IL-1RAcP; blocks both IL-1α and IL-1β | Basis for anakinra (recombinant IL-1Ra) therapeutics |

The critical distinction: IL-1Ra binds IL-1R1 but, unlike IL-1α and IL-1β, fails to recruit IL-1RAcP to the complex — cross-linking experiments show no anti-IL-1RAcP-immunoprecipitable species when IL-1Ra is used as ligand [^greenfeder1995]. This failure to engage the accessory protein explains the absence of agonist signalling. Later structural work identified the "beta-bulge" loop of IL-1β (sequence QGEESN) as the structural element required for IL-1RAcP recruitment, and showed that inserting this loop into IL-1Ra partially converts it to an agonist — but this structural attribution is from post-1995 crystallographic studies, not Greenfeder et al. #gap/needs-citation — primary source for beta-bulge/QGEESN swap experiment needed.

## Signalling cascade

Upon IL-1α or IL-1β binding, IL-1R1 undergoes a conformational change that recruits the co-receptor **IL-1RAcP** (IL-1 receptor accessory protein; encoded by *IL1RAP*), forming the ternary signalling complex [^greenfeder1995]. This brings the two cytoplasmic TIR domains into proximity for adaptor recruitment.

**Canonical [[myd88|MyD88]]–[[nf-kb|NF-κB]] arm:**

```
IL-1α/β → IL-1R1 + IL-1RAcP (ternary complex)
  → MyD88 recruitment via TIR–TIR interaction [^wesche1997]
  → IRAK4 auto-phosphorylation + IRAK1 activation     ([[irak4]])
  → TRAF6 (E3 ubiquitin ligase) K63-ubiquitin chain formation     ([[traf6]])
  → TAK1 (MAP3K7) + TAK1-binding proteins (TAB1/2/3)     ([[tak1]])
  → IKK complex (IKKα/β/γ) → IκBα phosphorylation/degradation
  → NF-κB nuclear translocation → IL-6, TNF, COX-2, iNOS, MMP transcription
```

**MAPK arm (parallel):**

```
TAK1 → MKK3/6 → p38 MAPK     ([[tak1]])
TAK1 → MKK4/7 → JNK
→ AP-1 transcription, cytokine mRNA stabilisation
```

**PI3K arm:**

```
Tyr496-phospho-IL-1R1 → PI3K-p85 recruitment → Akt activation [^boraschi2013]
→ cell survival, mTOR pathway integration
```

This converges with [[nf-kb|NF-κB pathway]] and [[ras-mapk|MAPK pathway]] pages; the IL-1R1-specific proximal events (TIR–TIR, MyD88 recruitment) are described here as the canonical home.

## Aging and inflammaging context

IL-1R1 is the primary effector receptor through which the two dominant IL-1 family alarmins of aged tissue drive [[chronic-inflammation|inflammaging]]:

- **IL-1β from NLRP3 inflammasome activation** — aged macrophages and monocytes show chronically elevated NLRP3 priming (constitutive NF-κB activation from accumulated DAMPs), resulting in exaggerated IL-1β output to weak stimuli. This output acts on IL-1R1 in stromal, endothelial, and immune cells to amplify the inflammatory milieu.
- **IL-1α from the SASP** — [[cellular-senescence|Senescent cells]] constitutively produce IL-1α as an alarmin component of the senescence-associated secretory phenotype (SASP). IL-1α signals in autocrine and paracrine fashion through IL-1R1 to sustain NF-κB activation and maintain the SASP amplification loop.
- **IL-1R1 → NF-κB → more SASP** — IL-1R1 signalling in senescent cells is itself NF-κB–activating, creating a positive feedback: SASP-derived IL-1α/β → IL-1R1 → NF-κB → more IL-6, IL-8, MMP secretion [^ridker2017]. For the cardiovascular output of this axis, see [[canakinumab]] and [[chronic-inflammation]].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — IL1R1, IL1RAP, MYD88, IRAK1/4, TRAF6 all conserved with high homology |
| Phenotype (inflammaging) conserved in humans? | yes — CANTOS demonstrates the IL-1 axis causally mediates cardiovascular events in humans |
| Replicated in humans? | yes (CANTOS cardiovascular endpoint); partial (SASP-IL-1α loop in human senescence — mechanistic data largely in vitro) |

### CANTOS cross-reference

The CANTOS trial (Ridker et al. 2017, NEJM; n=10,061) tested canakinumab (anti-IL-1β mAb) rather than direct IL-1R1 blockade, but the trial result constitutes the strongest human evidence that IL-1 signalling through IL-1R1 is causally relevant to age-associated cardiovascular events [^ridker2017]. For per-arm effect sizes (HR, p-values, infection adverse events), see [[canakinumab]] — that page is the canonical home for CANTOS numerics.

## Therapeutic landscape

| Agent | Mechanism | Specificity | Status |
|---|---|---|---|
| Anakinra | Recombinant IL-1Ra | Blocks IL-1R1 (both IL-1α and IL-1β blocked) | FDA-approved (RA, CAPS, SJIA, NOMID) |
| Rilonacept | IL-1 Trap (Fc–IL-1R1–IL-1RAcP fusion protein) | Sequesters IL-1α + IL-1β | FDA-approved (CAPS, recurrent pericarditis) |
| [[canakinumab]] | Anti-IL-1β mAb (IgG1κ) | IL-1β-specific; upstream of IL-1R1 | FDA-approved (CAPS, SJIA, gout); CANTOS phase 3 |
| Anti-IL-1R1 mAbs (isunakinra; investigational) | Block IL-1R1 directly | IL-1α + IL-1β blocked (like anakinra) | Phase 1–2 (asthma, atopic dermatitis) |

**Anakinra vs rilonacept on IL-1R1:** Both block IL-1R1 engagement by both ligands. Anakinra is the recombinant IL-1Ra that competes directly for the IL-1R1 binding groove; rilonacept is a circulating decoy that captures free IL-1α and IL-1β before they reach cell-surface IL-1R1.

For compound-level PK, dosing, and aging-context trial data, see [[canakinumab]] (verified R12) and the implicit stubs [[anakinra]], [[rilonacept]].

## Mouse genetics

- **Il1r1-deficient mice** — viable; resistant to LPS-induced fever; reduced mortality in septic shock models; arthritis severity substantially reduced in collagen-induced arthritis (CIA) and K/BxN serum-transfer models. The resistance to both exogenous IL-1 and endogenous inflammasome-driven IL-1 effects closely mirrors the pharmacology of IL-1Ra (anakinra) in humans. #gap/unsourced — precise citation for the original Il1r1-/- characterisation (likely Labow et al. 1997 or Horai et al. 1998) needs confirmation.
- **Aged Il1r1-/- mice** — reduced age-related neuroinflammation and preserved cognitive function in some models, consistent with the NLRP3→IL-1β→IL-1R1 inflammaging loop. #gap/needs-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes — anakinra reduces inflammation in human diseases mirroring the mouse CIA model |
| Replicated in humans? | yes (pharmacological; anakinra FDA-approved) |

## Pathway membership and cross-references

- [[il-1-signaling]] — primary pathway page for the full IL-1 axis (verified R27): full ligand+receptor+MyD88-IRAK-NF-κB cascade integration; IL-1R1 is the receptor anchor for the agonist-driven branch
- [[nf-kb]] — major downstream effector arm
- [[ras-mapk]] — parallel MAPK arm (p38, JNK)
- [[nlrp3-inflammasome]] — upstream of IL-1β production that drives IL-1R1 signalling
- [[chronic-inflammation]] — hallmark context; IL-1R1 is the principal transducer of IL-1-driven inflammaging
- [[cellular-senescence]] — SASP-derived IL-1α signals via IL-1R1 to maintain senescent cell NF-κB activation
- [[caspase-1]] — processes pro-IL-1β that activates IL-1R1
- [[il-1b]] — primary agonist ligand (verified R13/R25)
- [[il-1a]] — co-equal agonist, dominant alarmin in SASP (co-seeded sibling, R25 Tier B)
- [[il-1ra]] — endogenous antagonist; mechanism basis for anakinra (co-seeded sibling, R25 Tier B)
- [[canakinumab]] — anti-IL-1β mAb; indirectly blocks IL-1R1 activation (verified R12)
- [[pyroptosis]] — terminal outcome when GSDMD pores exceed threshold during IL-1β secretion

## Limitations and gaps

- **GTEx aging correlation:** Not yet populated. IL1R1 expression changes with age across tissues are not established from GTEx API lookup in this seeding pass. #gap/needs-replication (`gtex-aging-correlation: null`)
- **Mendelian randomisation:** No MR study has been identified that tests IL1R1 expression levels as causal for aging-related outcomes (cardiovascular disease, frailty). `mr-causal-evidence: not-tested` #gap/needs-replication
- **GenAge entry:** IL1R1 is not listed in GenAge-human or GenAge-models as of this seeding pass (no aging gene entry found). Its relevance to inflammaging is indirect — through its role as the receptor for the primary SASP cytokines.
- **Il1r1-/- aging phenotype:** Primary citation for the original Il1r1-/- characterisation needs confirmation; claim is consistent with consensus but flagged `#gap/unsourced`. Aged Il1r1-/- cognitive-protection data needs a specific primary source. #gap/needs-replication
- **Soluble IL-1R1 biology in aging:** The circulating sIL-1R1 pool may buffer IL-1α/β tone in aged tissue, but quantitative data on how sIL-1R1 levels change with age are sparse. #gap/needs-replication
- **IL-1-signaling pathway page:** RESOLVED 2026-05-07 (R27 propagation) — `[[il-1-signaling]]` is now seeded and verified, centralizing the full ligand–receptor–adaptor cascade. IL-1R1's role as described here is the canonical content for the receptor subunit specifically; pathway-level cascade biology lives on `[[il-1-signaling]]`.
- **Task-supplied DOI mismatches (BUG-2):** Two DOIs provided in the seeding task did not match their claimed papers in the archive:
  - `10.1111/imr.12015` — resolves to "Dynamics of NK cell interactions in vivo" (2012), not a Boraschi/Tagliabue IL-1 family review. **Not cited.**
  - `10.1002/eji.201746939` — resolves to "Contact sensitizers trigger human CD1-autoreactive T-cell responses" (2017), not a Dinarello IL-1 family overview. **Not cited.**
  - Replacement references used: Boraschi & Tagliabue 2013 Sem Immunol (doi:10.1016/j.smim.2013.10.023; confirmed) and Dinarello 2009 Annu Rev Immunol (doi:10.1146/annurev.immunol.021908.132612; confirmed).

---

## Footnotes

[^sims1988]: doi:10.1126/science.2969618 · Sims JE et al. · Science 1988 · in-vitro (cDNA expression cloning, COS cell expression) · first molecular cloning of IL-1R1; established it as a member of the immunoglobulin superfamily; ~890 citations

[^greenfeder1995]: doi:10.1074/jbc.270.23.13757 · Greenfeder SA et al. · J Biol Chem 1995 · in-vitro (molecular cloning, binding studies) · cloned IL-1RAcP as the second subunit of the IL-1R1 complex required for signal transduction; showed IL-1Ra occupies the IL-1R1 binding site without recruiting IL-1RAcP; structural basis of antagonism; ~638 citations

[^wesche1997]: doi:10.1016/s1074-7613(00)80402-1 · Wesche H et al. · Immunity 1997 · in-vitro (co-immunoprecipitation, kinase assay) · identified MyD88 as the adaptor recruited to the IL-1R1 TIR domain upon ligand binding; showed MyD88 recruits IRAK to the receptor complex; ~1104 citations

[^boraschi2013]: doi:10.1016/j.smim.2013.10.023 · Boraschi D & Tagliabue A · Semin Immunol 2013 · review · comprehensive coverage of the IL-1 receptor family structure, ligand specificity, and signalling; describes the three Ig-like domain architecture and co-receptor recruitment mechanism; ~236 citations

[^dinarello2009]: doi:10.1146/annurev.immunol.021908.132612 · Dinarello CA · Annu Rev Immunol 2009 · review · immunological and inflammatory functions of the IL-1 family; covers IL-1R1 signalling in depth; most-cited IL-1 family overview (~3388 citations)

[^ridker2017]: doi:10.1056/NEJMoa1707914 · Ridker PM et al. · NEJM 2017 · rct · n=10,061 · phase 3; double-blind; post-MI patients with hsCRP ≥2 mg/L; three doses of canakinumab (50 mg, 150 mg, 300 mg q3m) vs placebo; median follow-up 3.7 years; primary endpoint nonfatal MI/stroke/CV death; 150 mg was the only dose meeting the prespecified significance threshold (HR 0.85, 95% CI 0.74–0.98, P=0.021); no LDL reduction; higher fatal infection rate with canakinumab; all-cause mortality neutral (HR 0.94, P=0.31); human proof-of-concept that IL-1β axis blockade reduces age-associated cardiovascular events independently of lipid lowering; local PDF:  · for per-arm effect sizes see [[canakinumab]]
