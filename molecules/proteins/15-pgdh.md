---
type: protein
aliases: [HPGD, 15-hydroxyprostaglandin dehydrogenase, 15-PGDH, prostaglandin dehydrogenase, SDR36C1, PGDH1, gerozyme]
uniprot: P15428
ncbi-gene: 3248
hgnc: HGNC:5154
ensembl: ENSG00000164120
mouse-ortholog: Hpgd
genage-id: null
pathways: ["[[prostaglandin-metabolism]]", "[[arachidonic-acid-pathway]]", "[[spm-pathway]]"]
hallmarks: ["[[altered-intercellular-communication]]", "[[stem-cell-exhaustion]]", "[[chronic-inflammation]]", "[[mitochondrial-dysfunction]]"]
sens-categories: []
druggability-tier: 2
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[stem-cell-exhaustion]]", "[[sarcopenia]]"]
literature-checked-through: 2026-05-23
verified: true
verified-date: 2026-05-23
verified-by: claude
verified-scope: "Palla 2021 claims cross-checked against verified study page (studies/palla-2021-15pgdh-muscle-rejuvenation.md; verified 2026-05-23 against PMC7938328). Bakooshli 2023 claims cross-checked against verified study page (studies/bakooshli-2023-15pgdh-nmj-regeneration.md; verified 2026-05-23 against local PDF). Singla 2025/2026 claims cross-checked against verified study page (studies/singla-2025-15pgdh-cartilage-regeneration.md; verified 2026-05-23 against PMC13127300). Canonical IDs (UniProt P15428, NCBI Gene 3248, HGNC:5154, ENSG00000164120, mouse ortholog Hpgd NCBI Gene 15446) re-confirmed via UniProt REST API and NCBI eutils 2026-05-23. Isoform count corrected (7→5) and RefSeq canonical corrected (NM_000860.6→NM_000860.5) per UniProt. Human tissue evidence method corrected (IHC→microarray) for Palla 2021 human data. Chaudhary 2025 second-author attribution corrected. druggability-tier downgraded 1→2 (no active clinical trial registered; compound identity proprietary; SW033291 meets tier-2 high-quality-probe criteria). Zhang 2015, Myung 2006, Huang 2008, Chaudhary 2025, Zhang 2025, Shu 2025 DOIs sanity-checked via Crossref/PubMed — all confirmed correct. Zhang 2015 PMID added (26068857). Ahmad 2024 (PMID 38904907) confirmed as biocomputational screening paper (Molecular Diversity 2024). Blau-Porpiglia 2026 review confirmed (Ann Rev Pharmacol Toxicol 66:7-26). R25 supersession check skipped per CLAUDE.md (type: protein, optional cadence)."
---

# 15-PGDH (HPGD)

The canonical **gerozyme** — an NAD+-dependent oxidoreductase that degrades prostaglandin E2 (PGE2) and other eicosanoids to inactive keto-metabolites. 15-PGDH protein levels rise with age in skeletal muscle, neuromuscular junctions, and articular cartilage; this accumulation suppresses local PGE2 to below-physiologic levels, blunting regenerative signaling. Small-molecule 15-PGDH inhibitors (collectively abbreviated **PGDHi**) restore tissue-PGE2 and produce multi-tissue rejuvenation phenotypes in aged mice — the first enzymatic "gerozyme" target with demonstrated cross-tissue efficacy. Epirium Bio (formerly Myoforte Therapeutics) holds IP around PGDHi for aging/muscle indications but no human PGDHi trials are registered as of 2026-05-23 (druggability tier 2 — high-quality probe; see Limitations and gaps).

## Identity

| Field | Value |
|---|---|
| UniProt | P15428 (15PGD_HUMAN) |
| NCBI Gene | 3248 |
| HGNC | HGNC:5154 |
| Ensembl | ENSG00000164120 |
| Chromosomal locus | 4q34.1 (10 exons) |
| Mouse ortholog | Hpgd (NCBI Gene 15446) |
| GenAge | Not curated (HPGD not in GenAge-human as of 2026-05-23) |
| Protein length | 266 amino acids |
| Isoforms | 5 isoforms (alternative splicing; NM_000860.5 / ENST00000296522.11 = canonical isoform 1 per UniProt MANE-Select) |

**Gene synonyms:** PGDH1, SDR36C1. In the experimental literature the protein is universally called "15-PGDH" and inhibitors "PGDHi"; the gene is always HPGD.

## Biochemistry and catalysis

15-PGDH is a member of the **short-chain dehydrogenase/reductase (SDR)** superfamily. The protein has a single Rossmann-fold NAD(P)-binding domain — the defining feature of the SDR family — and forms homodimers in solution.

**Primary reaction:**

```
Prostaglandin E2 (PGE2) + NAD+  →  15-keto-PGE2 + NADH
```

The enzyme oxidizes the 15β-hydroxyl group on the prostanoid chain. The resulting **15-keto metabolites** are biologically much less potent at EP receptors than the parent prostaglandins, and are rapidly further metabolized to dinor- and tetranor-forms for excretion.

**Substrate breadth:** 15-PGDH accepts a broad eicosanoid/docosanoid substrate range [^uniprot-p15428]:
- Prostaglandins: PGE2 (primary substrate), PGD2, PGF2α, PGA2
- Lipoxins (LXA4, LXB4)
- Resolvins (some, via the 15-hydroxyl)
- Thromboxane B2

This substrate breadth has implications for the [[spm-pathway]]: PGDHi not only raises PGE2 but may simultaneously alter lipoxin/resolvin catabolism, which could shift the balance between pro-inflammatory and pro-resolving eicosanoid tone. This interaction has not been systematically characterized. #gap/no-mechanism

## Aging context — the gerozyme concept

The term **gerozyme** was coined by the Blau laboratory to describe enzymes that accumulate with age and whose activity is pathogenic — the enzymatic analog of gene-expression aging drift [^blau-porpiglia-2026]. Unlike the classical "hallmarks of aging" framing (which emphasizes damage accumulation), the gerozyme concept posits that specific enzymes actively drive age-related decline and are individually pharmacologically reversible.

**Evidence that 15-PGDH rises with age:**

- **Skeletal muscle:** 15-PGDH protein levels are significantly elevated in aged C57BL/6 mouse muscle (>24 mo) vs young (2–4 mo); macrophages within aged muscle are the primary cellular source of the elevation [^palla-2021]. The same trend is detectable in human aged muscle by microarray gene expression analysis (Raue 2012 vastus lateralis dataset; aged mean 78 ± 6 yr vs young 25 ± 3 yr) (#gap/needs-human-replication — protein-level confirmation in a large age-matched human biopsy cohort has not been published).
- **Neuromuscular junction:** 15-PGDH protein aggregates co-localize with "target fibers" — NADH-bullseye pathological fibers of chronic neurogenic disease — in n=10 human neurogenic-myopathy biopsies (axonal neuropathies, myositis, motor neuron disease including ALS and SMA, lumbar radiculopathy, neurogenic amyloidosis); 9/10 cases positive [^bakooshli-2023]. Verified 2026-05-23 against full PDF. This argues for a conserved role at the NMJ.
- **Articular cartilage:** HPGD mRNA and protein are elevated in aged and OA-injured murine articular cartilage; scRNA-seq identified a 15-PGDH-high "hypertrophic-like" chondrocyte population that expands with age and OA [^singla-2025].

**Why elevated 15-PGDH is harmful:** PGE2 at physiologic levels signals through the EP4 receptor on muscle satellite cells, chondrocytes, and hematopoietic stem cells to promote mitochondrial biogenesis, autophagy induction, and ECM synthesis. Age-associated 15-PGDH elevation degrades PGE2 below these physiologic signaling thresholds, silencing regenerative programs. PGDHi re-elevates local PGE2 without exceeding physiologic ranges, because the enzyme-saturation kinetics are balanced by ongoing COX-2 synthesis. This distinguishes PGDHi from exogenous PGE2 infusion, which produces supraphysiologic spikes and rapid receptor desensitization.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — SDR family, EP receptor signaling are conserved |
| Phenotype (age-related HPGD elevation) conserved in humans? | partial — NMJ evidence in human myopathies; muscle/cartilage quantification sparse |
| Rejuvenation upon PGDHi replicated in humans? | no — preclinical only as of 2026-05-23 |

#gap/needs-human-replication — Cross-tissue elevation of 15-PGDH with age has not been systematically quantified in age-matched human cohort biopsy series.

## Tissue distribution and cell types

- **Skeletal muscle:** Expressed in myofibers and infiltrating macrophages; macrophage expression predominates in the aged context [^palla-2021].
- **Articular cartilage:** Expressed in chondrocytes; hypertrophic-like chondrocyte subset is the high-15-PGDH population [^singla-2025].
- **Neuromuscular junction / denervated muscle:** Concentrated in target-fiber aggregates [^bakooshli-2023].
- **Colon/gastrointestinal epithelium:** High expression; relevant to tumor-suppressor function (see below).
- **Lung:** Expressed; lost in lung adenocarcinoma.
- **Hematopoietic system:** Expressed in bone marrow; inhibition expands hematopoietic stem and progenitor cell (HSPC) populations [^chaudhary-2025].
- **Heart:** Expressed in cardiomyocytes; elevated with age; inhibition improves cardiac systolic/diastolic function in aged mice [^zhang-2025].

## Mechanistic consequences of PGDHi

### PGE2 → EP4 → mitochondrial and regenerative signaling

Based on Palla 2021, the primary downstream effector is **EP4** (the high-affinity prostanoid receptor with the broadest expression in muscle and cartilage) [^palla-2021]:

- EP4 signals via Gs → cAMP → PKA → CREB axis
- Downstream: ↑mitochondrial biogenesis (PGC-1α stabilization), ↑autophagy (mTORC1 inhibition), ↑protein synthesis (via mTOR-independent routes)
- In muscle: PGDHi reduced TGF-β signaling and ubiquitin-proteasome pathway activity — two canonical drivers of age-related muscle atrophy
- In cartilage: Singla 2025 identified mechanism as "gene-expression reprogramming of preexisting chondrocytes" — specifically converting hypertrophic-like 15-PGDH+ chondrocytes to an ECM-synthesizing articular chondrocyte state [^singla-2025]. This is notable: it argues that the therapeutic effect is transcriptional reprogramming, not progenitor expansion.

**Autophagy link:** PGE2/EP4-mediated mTORC1 attenuation is expected to induce [[disabled-macroautophagy|macroautophagy]], connecting 15-PGDH to [[mitochondrial-dysfunction]] and [[loss-of-proteostasis]] hallmarks. This connection is inferred from pathway logic; a direct mechanistic test in aged tissue has not been published. #gap/no-mechanism

## Cross-tissue rejuvenation phenotypes

| Tissue | Model | Outcome | Citation |
|---|---|---|---|
| Skeletal muscle | Aged C57BL/6 mice, SW033291 gavage or genetic Hpgd depletion | ↑muscle mass, ↑grip strength, ↑exercise performance; ↓atrophy markers | [^palla-2021] |
| Neuromuscular junction | Aged mice + sciatic nerve crush / chronic denervation + SW033291 | NMJ regeneration restored; target-fiber pathology reduced | [^bakooshli-2023] |
| Articular cartilage | Aged/OA-induced mice, SW033291 systemic or local injection | Cartilage regeneration, ↓OA pain, ↑ECM synthesis; scRNA-seq: ↑articular chondrocyte gene expression | [^singla-2025] |
| Rotator cuff muscle | Aged mice + rotator cuff tear, SW033291 | ↑PGE2, ↑mitochondrial function, ↓muscle atrophy | [^shu-2025] |
| Heart | Aged C57BL/6 mice, SW033291 | ↑systolic and diastolic function, ↓oxidative stress, ↓chronic inflammation | [^zhang-2025] |
| Hematopoietic system | Aged mice, SW033291 | ↑HSPC frequency and number, ↑HSC transplantation engraftment | [^chaudhary-2025] |

The breadth of this cross-tissue table is notable: 15-PGDH inhibition produces regenerative phenotypes in mesenchymal, neurological, cardiovascular, and hematopoietic compartments, consistent with PGE2/EP4 being a ubiquitous trophic signaling axis silenced by age-elevated 15-PGDH. All evidence is preclinical (mouse) as of 2026-05-23.

## Tool compound: SW033291

The canonical small-molecule 15-PGDH inhibitor is **SW033291**, first identified by Zhang et al. 2015 [^zhang-2015] in a screen for compounds enhancing hematopoietic stem cell expansion after bone marrow transplantation. SW033291 binds to the NAD+-binding pocket of 15-PGDH and competitively inhibits prostaglandin oxidation. It is selective for 15-PGDH over other SDR family members at 50–500 nM concentrations. SW033291 is an oral compound with demonstrated in-vivo efficacy in mice across all tissue models above; it is not in clinical use. A dedicated compound page is planned: [[sw033291]]. #gap/needs-pk-data — tissue PK and systemic PGE2 dose-response in aged vs young animals not systematically published.

## Clinical translation — Epirium Bio

Epirium Bio Inc. (formerly Myoforte Therapeutics; rebranded after pivoting to 15-PGDH-related programs) holds intellectual property around PGDHi for muscle and aging indications. Their clinical candidate compound identity is proprietary. #gap/proprietary-chemistry

A search of ClinicalTrials.gov (queried 2026-05-23) did not identify any active or recruiting trials with Epirium Bio targeting 15-PGDH or PGDHi for sarcopenia or aging indications. The only completed Epirium trial found was NCT04386304 (Phase 1 epicatechin in Becker muscular dystrophy), a wholly different mechanistic program. **No human PGDHi trials are registered as of 2026-05-23.** This is why the druggability tier is 2 (high-quality probe) rather than 1 — see Limitations and gaps. #gap/long-term-unknown

## Cancer-aging tradeoff: 15-PGDH as tumor suppressor

This is the central tension of 15-PGDH pharmacology. In a pre-aging-biology context, HPGD is a well-characterized **tumor suppressor gene**:

- **Colon cancer:** 15-PGDH knockout mice show a 7.6-fold increase in colon tumors vs wildtype; universal loss of 15-PGDH expression in adenomas from FAP patients [^myung-2006]. The enzyme opposes COX-2 oncogenic activity by degrading the PGE2 that COX-2 produces.
- **Lung cancer:** 15-PGDH is targeted by HNF-3β and is lost in lung adenocarcinoma [^huang-2008].
- **Liver cancer:** Decreased HPGD expression correlates with HCC development via the ENO1/YAP1 axis.
- **Radioresistance:** miR-620 silences HPGD to promote cancer radioresistance.

**The tension:** Systemic 15-PGDH inhibition — the desired therapeutic strategy for aging — would pharmacologically reproduce the tumor-promoting state seen in cancers that have genetically lost HPGD. Whether pharmacological PGDHi carries meaningful cancer-promoting risk depends on (a) reversibility (drug washout restores enzyme), (b) tissue specificity (is the relevant tumor-microenvironment PGE2 affected?), and (c) immune PGE2 effects (elevated PGE2 is immunosuppressive in some tumor contexts). This tradeoff is discussed in [[frameworks/cancer-aging-tradeoffs]].

#gap/contradictory-evidence — The gerozyme/rejuvenation framing (inhibit 15-PGDH → restore PGE2 → regeneration) and the tumor-suppressor framing (inhibit 15-PGDH → raise PGE2 → promote tumor growth, impair immune surveillance) make opposite safety predictions for long-term systemic PGDHi. This is not resolved. Epirium Bio's clinical strategy likely involves intermittent dosing or tissue-targeted delivery to mitigate this risk; without published preclinical cancer-safety data, this remains an open concern.

## Pathway memberships

- [[spm-pathway]] — 15-PGDH catabolizes lipoxins and resolvins in addition to PGE2; PGDHi may simultaneously alter SPM tone; flux competition for arachidonate-derived substrates
- [[arachidonic-acid-pathway]] — PGE2 is an arachidonic acid-derived prostanoid; 15-PGDH is the first committed step of its catabolism
- [[prostaglandin-metabolism]] — primary metabolic pathway membership (stub page needed)
- [[nlrp3-inflammasome]] — PGE2 elevation modulates NLRP3 activation; indirect crosstalk via cAMP/EP4 [^palla-2021]
- [[chronic-inflammation]] — PGE2 is a canonical eicosanoid mediator of inflammation; elevated 15-PGDH restricts it

## Key interactors

- **COX-2 (PTGS2)** — the upstream prostaglandin synthase; 15-PGDH is the functional antagonist of COX-2-derived PGE2. The pair constitutes the main PGE2 rheostat.
- **EP4 receptor (PTGER4)** — primary downstream PGE2 receptor in aged muscle/cartilage; mediates regenerative cAMP signaling
- **NAD+** — cofactor; elevated intracellular NAD+ increases 15-PGDH activity, providing a metabolic connection to [[sirt1]] / NAD+ precursor biology
- **mTORC1** — inhibited downstream of EP4/cAMP; connects to [[deregulated-nutrient-sensing]] and [[disabled-macroautophagy]]

## Recency note (R25 search — 2023–2026)

PubMed search conducted 2026-05-23 using terms "15-PGDH prostaglandin dehydrogenase aging" (mindate 2023, maxdate 2026) returned 8 hits. Key recent literature integrated above:

| PMID | Year | Key finding | Integrated? |
|---|---|---|---|
| 41308124 | 2026 (in-print; online 2025) | Singla 2026: cartilage regeneration via 15-PGDH inhibition | Yes |
| 40971573 | 2026 | Blau & Porpiglia review: gerozyme concept + cross-tissue summary | Yes |
| 40608981 | 2025 | 15-PGDH inhibition enhances hematopoietic regeneration in aged mice | Yes |
| 40479501 | 2025 | PGE2 ameliorates aging-aggravated rotator cuff muscle atrophy via PGDHi | Yes |
| 39952309 | 2025 | SW033291 improves age-related heart failure in mice | Yes |
| 38904907 | 2024 | Ahmad SS et al. — biocomputational screening of natural compounds targeting 15-PGDH for skeletal muscle aging (Molecular Diversity 2024) | Confirmed; not fully integrated (drug-discovery context) |
| 37942226 | 2023 | 15-PGDH downregulation promotes MASH-HCC (cancer context) | Yes — cited in tumor suppressor section |
| 37820010 | 2023 | Bakooshli 2023: NMJ regeneration | Yes |

No meta-analyses or RCTs were found for this target (0 hits in the meta-analysis/RCT filter, 2020–2026) — expected, as the program is preclinical.

## Limitations and gaps

- #gap/needs-human-replication — All cross-tissue rejuvenation phenotypes are in mice. No human PGDHi trial has been published or registered as of 2026-05-23.
- #gap/long-term-unknown — Long-term safety of systemic PGDHi is unknown in any species. Cancer-promoting risk from chronic PGE2 elevation is uncharacterized.
- #gap/contradictory-evidence — Tumor-suppressor framing vs gerozyme framing; see Cancer-aging tradeoff section above.
- #gap/proprietary-chemistry — Epirium Bio clinical candidate structure is not public.
- #gap/needs-pk-data — Tissue PK of SW033291 and systemic PGE2 dose-response in aged animals not systematically published. #gap/dose-response-unclear
- #gap/no-mechanism — Whether PGE2/EP4 mechanistically induces autophagy in aged tissue (expected from cAMP/mTORC1 logic) has not been directly tested with autophagic flux assays.
- #gap/needs-canonical-id — `prostaglandin-metabolism` pathway page does not exist; wikilink is a stub.
- `mr-causal-evidence: not-tested` — No Mendelian randomization instruments for HPGD identified via IEU OpenGWAS; genetic variation at 4q34.1 has not been used as an MR instrument for muscle mass, cartilage health, or other aging phenotypes.
- `druggability-tier: 2` rationale — SW033291 (Zhang 2015) is a high-quality, highly selective tool compound (Ki = 0.1 nM) demonstrating in-vivo efficacy in five tissue contexts (muscle, NMJ, cartilage, heart, hematopoietic). However, no clinical trial for a 15-PGDH inhibitor is registered on ClinicalTrials.gov as of 2026-05-23 (verified via API query). Epirium Bio holds IP and has stated clinical ambitions, but their only registered trial (NCT04386304) is an unrelated epicatechin/Becker MD program; the PGDHi compound identity is proprietary (#gap/proprietary-chemistry). Per CLAUDE.md druggability-tier definitions, tier 1 requires "a clinical drug exists"; without an active IND or registered trial, tier 2 (high-quality probe) is the accurate designation. Upgrade to tier 1 when a registered PGDHi human trial is confirmed.

## Footnotes

[^palla-2021]: [[studies/palla-2021-15pgdh-muscle-rejuvenation]] · doi:10.1126/science.abc8059 · PMID 33303683 · n=aged C57BL/6 mice (multiple cohorts) · in-vivo (mouse, SW033291 gavage + genetic Hpgd KO) · p<0.05 (muscle mass, grip strength) · model: aged C57BL/6 mice; archive: download failed; PMC7938328 (OA)

[^bakooshli-2023]: [[studies/bakooshli-2023-15pgdh-nmj-regeneration]] · doi:10.1126/scitranslmed.adg1485 · PMID 37820010 · PMC10763629 · Bakooshli MA,..., Blau HM (last; Bhutani is NOT an author) · *Sci Transl Med* 15(717):eadg1485 (2023) · in-vivo: male C57BL/6 (2–4 mo young Jackson + 24–26 mo aged NIA); SW033291 5 mg/kg i.p. once daily, 14 d crush / 1 mo aged · *Hpgd* mRNA rises ~20× by d90 post-SNT (10× at d14); protein 4×; primary source is denervated myofibers (snRNA-seq) NOT Schwann cells; mechanism is EP4-cAMP-CREB in motor neurons · plantar flexor force +37.2 ± 4.9% at 14 dpi (crush); motor-axon counts 1.9× higher; aged motor-neuron apoptosis 11.6%→4.2% with PGDHi · n=10 human neurogenic-myopathy biopsies, 9/10 positive for 15-PGDH target-fiber co-localization · local PDF at  · verified 2026-05-23 against full PDF

[^singla-2025]: [[studies/singla-2025-15pgdh-cartilage-regeneration]] · doi:10.1126/science.adx6649 · PMID 41308124 · PMC13127300 · in-vivo (aged n=9 + PTOA n=7 C57BL/6 mice) + ex-vivo human OA cartilage (n=11 FACS / n=5 treatment readouts; total-knee-replacement source, ages 55–75) · scRNA-seq (GEO GSE308009) + multiplexed IF · Singla M, Wang YX,... Blau HM, Bhutani N (last/corresponding) · *Science* 391(6789):1053–1062, in-print 2026-03-05 (online 2025-11-27); journal PDF closed-access; PMC release 2026-04-29 used for verification · verified 2026-05-23

[^blau-porpiglia-2026]: doi:10.1146/annurev-pharmtox-071724-100856 · PMID 40971573 · review (Ann Rev Pharmacol Toxicol) · 2026 · Blau HM & Porpiglia E · "From Cell Reprogramming to Tissue Rejuvenation: Countering Aging by Targeting a Gerozyme" · archive: download pending

[^zhang-2015]: doi:10.1126/science.aaa2340 · PMID 26068857 · in-vivo (mouse, bone marrow transplant) · Zhang Y, Desai A, Yang SY, Bae KB et al. · Science 348(6240) · 2015 · first report of SW033291 as a 15-PGDH inhibitor enhancing hematopoietic regeneration across multiple tissues · archive: download pending

[^myung-2006]: doi:10.1073/pnas.0603235103 · PMID 16880406 · in-vivo (mouse, Hpgd KO + Min model) + human FAP biopsy (IHC) · Myung SJ & Markowitz SD · PNAS 2006 · 7.6-fold ↑ colon tumors in Hpgd KO · archive: download pending

[^huang-2008]: doi:10.1158/0008-5472.CAN-07-6575 · PMID 18593902 · Cancer Research 2008 · Huang G et al. · HPGD is a HNF-3β target and tumor suppressor in lung cancer

[^chaudhary-2025]: doi:10.1093/stmcls/sxaf047 · PMID 40608981 · in-vivo (aged mice, SW033291) · Chaudhary R, Cordova BA, Hong M, Klein BR et al. · Stem Cells 43(10) · 2025 · 15-PGDH inhibition enhances HSPC frequency and transplant engraftment in aged mice · archive: download pending

[^zhang-2025]: doi:10.1016/j.exger.2025.112710 · PMID 39952309 · in-vivo (aged mice, SW033291) · Zhang L, Wang Q, Guan W · Exp Gerontol 2025 · SW033291 improves systolic/diastolic function in aged mice; ↓oxidative stress, ↓chronic inflammation · archive: download pending

[^shu-2025]: doi:10.2106/JBJS.24.00866 · PMID 40479501 · in-vivo (aged mice, rotator cuff tear model, SW033291) · Shu L & Zhang Y et al. · J Bone Joint Surg 2025 · ↑PGE2, ↑mitochondrial function, ↓muscle atrophy

[^uniprot-p15428]: UniProt P15428 (15PGD_HUMAN), accessed 2026-05-23 · manually reviewed (Swiss-Prot) · gene HPGD (syn: PGDH1, SDR36C1) · 266 aa · SDR family
