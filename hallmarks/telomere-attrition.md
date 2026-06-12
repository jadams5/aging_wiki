---
type: hallmark
aliases: [telomere shortening, replicative senescence trigger, telomere erosion]
category: primary
mechanistic-tier: proximal
intervention-tractability: low
caused-by: []
causes: ["[[cellular-senescence]]", "[[stem-cell-exhaustion]]", "[[genomic-instability]]"]
introduced: 2013
sens-correspondence: ["[[sens-damage-categories|OncoSENS]]"]
key-pathways: ["[[telomerase-pathway]]", "[[dna-damage-response]]", "[[p53-pathway]]"]
key-phenotypes: ["[[cellular-senescence]]", "[[stem-cell-exhaustion]]"]
verified: true
verified-date: 2026-06-12
verified-by: claude
verified-scope: "Prowse & Greider 1995, Celli & de Lange 2005, and Bernardes de Jesus 2012 verified against full-text PDFs. Harley 1990, Cawthon 2003 not_oa — claims tagged #gap/no-fulltext-access; top-line numerics consistent with published abstracts. de Lange 2005 Genes Dev review (shelterin structural description) still pending download — shelterin subunit list not independently verified from that source. Three corrections applied on 2026-05-04: (1) Celli & de Lange 2005 model corrected from 'human cells' to 'mouse embryo fibroblasts (MEFs; mixed 129/BL6 background)'; (2) Prowse 1995 strain list corrected — tissue-specific telomerase assays used BALB/c and M. spretus, not C57BL/6 (C57BL/6 noted only for long TRF lengths); (3) Bernardes de Jesus 2012 n per group filled from PDF (previously marked 'not confirmed'). 2026-06-12 targeted re-check: adjudicated telomere-attrition ↔ genomic-instability causal direction. Verdict: dominant direction is TA → GI (uncapping → NHEJ fusions → BFB cycles; supported by Celli & de Lange 2005, PDF-verified, and body cross-talk table). No solid primary-source GI → TA mechanism at the hallmark level: oxidative-damage → telomere shortening is correctly attributed to ROS/mitochondrial biology (not the GI hallmark per se); DDR-deficiency-impaired telomere processing (WRN/BLM) is a real molecular nuance but does not constitute a clean hallmark-level causal edge. Correction: moved [[genomic-instability]] from caused-by: to causes: and cleared caused-by: to []. Reciprocal page (genomic-instability.md) retains caused-by: [[telomere-attrition]] (correct); body text contradiction in that page also corrected separately."
---


# Telomere attrition

Progressive, division-dependent shortening of telomeric DNA caps in somatic cells — one of the four **Primary** hallmarks of aging (López-Otín et al. 2013, retained in the 2023 expanded framework) [^lopezOtin2013]. When the shortest telomere in a cell drops below a critical threshold, it is sensed as a double-strand break, activating the [[dna-damage-response]] and driving the cell into [[cellular-senescence|replicative senescence]] or [[apoptosis]]. In proliferating stem-cell compartments the result is progressive [[stem-cell-exhaustion]].

---

## Definition (per López-Otín 2013)

Telomeres are repetitive hexanucleotide sequences (TTAGGG in vertebrates) at chromosome ends, bound by the protective **shelterin** complex. They shorten by ~50–150 bp per division in somatic cells because DNA polymerase cannot fully replicate the 5' lagging-strand end (the **end-replication problem**). Additional shortening is contributed by oxidative damage to telomeric guanine triplets. When the shortest telomere in a cell falls below ~4 kb (approximate threshold; exact value is cell-type-dependent and debated) #gap/dose-response-unclear, uncapping occurs: TRF2 is lost from the t-loop, the end is exposed as ssDNA, and ATM/ATR kinases initiate DDR signaling [^deLange2005].

The cell responds with:
- **Transient DDR + repair attempt** — if damage is minor and repaired, proliferation resumes
- **Permanent cell-cycle arrest (senescence)** — via ATM → CHK2 → [[p53-pathway]] → p21 axis; reinforced by p16/Rb; see [[cellular-senescence]]
- **Apoptosis** — via sustained p53 → PUMA/BAX axis; see [[apoptosis-pathway]]

---

## Core mechanisms

### 1. End-replication problem

At the lagging strand, the terminal RNA primer cannot be replaced by DNA — leaving a 5' gap at each chromosome end after each round of replication. Net result: ~50–150 bp lost per division [^harley1990]. Human fibroblasts in culture reach the Hayflick limit at ~50–60 doublings [^harley1990] — after which telomere-driven DDR locks cells in senescence. #gap/unsourced — the commonly cited "50 bp per division" figure is a mean; actual rates vary substantially by cell type and oxidative environment; a systematic review-level citation is preferred here.

### 2. Oxidative damage to guanine triplets

8-oxo-deoxyguanosine lesions in GGG triplets block telomerase extension even when telomerase is present, and they accelerate 3'-overhang loss. This is the proposed mechanistic link between ROS biology and telomere shortening — see [[hypotheses/free-radical-theory-of-aging]] (verified, status: superseded as primary aging driver). The contribution of oxidative damage to telomere erosion is plausible but the quantitative magnitude in aged human tissue remains unclear. #gap/no-mechanism

### 3. Shelterin complex: telomere protection

The six-subunit **shelterin** complex (TRF1, TRF2, POT1, TIN2, TPP1, Rap1) coats the telomeric repeat DNA and suppresses inappropriate DDR signaling [^deLange2005]:

- [[trf1]] and [[trf2]] bind double-stranded TTAGGG repeats; TRF2 additionally stabilizes the t-loop (the lariat structure that hides the 3' G-overhang)
- [[pot1]] binds the single-stranded 3' G-overhang, suppressing RPA binding and ATR activation
- [[tin2]] and [[tpp1]] form the connector between TRF1/TRF2 and POT1; TPP1 recruits and stimulates telomerase via its TEL patch (7 critical residues: E168, E169, E171, R180, L183, L212, E215)

When telomeres shorten sufficiently, TRF2 and POT1 dissociate, exposing the 3' overhang and triggering ATM/ATR → DDR. Experimental TRF2 deletion in mouse embryo fibroblasts (MEFs) is sufficient to produce widespread DDR signaling (≥4 TIFs in ~50–67% of cells) even before telomere DNA degradation occurs [^celli2005] — demonstrating that shelterin occupancy, not telomere length per se, is the proximal DDR signal. The ATM kinase pathway is activated; NHEJ-mediated end-to-end fusions result. See [[shelterin]] for the complex-level structural view; per-subunit detail is on the individual protein pages.

### 4. Telomerase: reversing attrition

**Telomerase** (catalytic subunit: [[tert|TERT]]; RNA template: [[terc|TERC]]; H/ACA-RNP scaffold: [[dkc1|DKC1]]; recruited via the [[telomerase-pathway]]) extends the 3' G-overhang by reverse-transcribing the TERC template, partially counteracting end-replication loss. The telomere-shortening-driven sub-process is termed [[replicative-senescence]] when the cell-cycle outcome is permanent arrest. In vertebrates, telomerase is constitutively active in:
- Germline cells
- Early embryos
- A subset of adult stem cells (HSCs — see [[hematopoietic-stem-cells]] verified-partial; intestinal crypt cells; epidermal progenitors)

In most somatic cells, TERT expression is epigenetically silenced after development, creating the progressive shortening that drives replicative aging. #gap/unsourced — the exact complement of human adult stem cell populations with detectable telomerase activity is not comprehensively catalogued in the wiki.

---

## Mouse vs. human: a critical divergence

**This is the most important extrapolation caveat for this hallmark.**

Standard laboratory mouse strains have telomeres ~5–10× longer than humans (Mus musculus strains at limit-mobility on TRF gels, >30 kb; commonly cited as ~40–60 kb in subsequent literature #gap/unsourced — specific kb figure not from Prowse 1995; human mean ~10 kb), and retain telomerase activity in several somatic tissues. Prowse & Greider 1995 [^prowsegreider1995] demonstrated, using the TRAP assay on BALB/c *M. musculus* and *M. spretus* tissues (C57BL/6 was noted for long TRF lengths but not used in the primary tissue-specific telomerase assays):

- Telomerase **detected in** testis and liver (both species); kidney and spleen (BALB/c, weaker signal confirmed by TRAP)
- Telomerase **absent from** brain
- Human somatic tissues: no detectable telomerase in >50 samples tested (including liver) by sensitive TRAP assay

This was confirmed in [[mus-musculus]] (verified, full) under the § Telomere biology divergence section.

**Consequence for interpretation:**

| Dimension | Mouse (C57BL/6) | Human |
|---|---|---|
| Mean telomere length | >30 kb (limit-mobility TRF; subsequent literature commonly ~40–60 kb) #gap/unsourced | ~10 kb |
| Somatic telomerase | Partial (liver, kidney, spleen, testis; absent brain) | Absent (repressed after development) |
| Telomere-driven aging | Not a major driver in standard strains | Major driver in high-turnover tissues |
| Appropriate mouse models | CAST/Ei (short telomeres); *Tert*−/− (G3/G4 generations) | — |

Telomere attrition is therefore **not a major aging mechanism in standard C57BL/6 mice**. Mouse studies using telomerase-knockout or wild-derived strains are substantially more informative for this hallmark than inbred-strain studies. This is a well-documented translational pitfall — see [[mus-musculus]] (verified, full) § Telomere biology.

---

## Telomere length as a biomarker

**Canonical biomarker page:** [[biomarkers/telomere-length-leukocyte]] — full performance + MR + intervention-responsiveness assessment. The summary below is a hallmark-level orientation; quantitative claims live on the biomarker page.

Leukocyte telomere length (LTL), measured by qPCR or Southern blot, is the most commonly used telomere biomarker in human population studies. Key findings:

- LTL decreases progressively with chronological age across human cohorts #gap/unsourced — review-level citation preferred
- Cawthon et al. 2003 (Lancet; n=143 individuals >60 years) found that subjects with shorter LTL had 3.18-fold higher mortality from heart disease (95% CI 1.36–7.45) and 8.54-fold higher mortality from infectious disease (95% CI 1.52–47.9) vs long-telomere counterparts [^cawthon2003]. **Caveats:** small sample (n=143); observational; LTL is a surrogate for total telomere burden; does not establish causality.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — telomere-DDR-senescence axis conserved |
| Phenotype conserved in humans? | yes — LTL decline with age confirmed |
| Replicated in humans? | yes — LTL-mortality correlation replicated in multiple cohorts |

LTL is a population-level correlate of biological age, but **mean LTL is a poor predictor of senescence induction in individual cells** — it is the *shortest* telomere per cell, not the mean, that triggers DDR. This distinction matters for interpretation of all LTL-based biomarker studies. #gap/no-mechanism — a clinical-grade assay for shortest-telomere length in individual cells does not currently exist.

The [[telomere]] entity page is an implicit stub — telomere structure, measurement methods, and T-loops should be documented there. #gap/unsourced for the stub.

---

## Diseases of telomere biology

Monogenic telomere-biology disorders establish the causal relevance of telomere maintenance failure in human disease:

| Disorder | Mutated gene(s) | Mechanism | Key features |
|---|---|---|---|
| Dyskeratosis congenita (DKC) | DKC1, TERT, TERC, TINF2, RTEL1, others | Telomere maintenance failure → premature bone marrow failure | Triad: nail dystrophy, oral leukoplakia, skin reticulation; aplastic anemia; increased cancer risk |
| Idiopathic pulmonary fibrosis (IPF) | TERT (enriched, ~8% of familial cases), TERC | Short telomeres → repetitive alveolar epithelial cell senescence → fibrosis | Progressive fibrosis; telomere gene mutations segregate in familial IPF pedigrees #gap/needs-replication |
| Aplastic anemia | TERT, TERC (subset) | HSC telomere failure → hematopoietic collapse | Overlap with DKC spectrum |
| Hutchinson-Gilford progeria (HGPS) | LMNA (progerin splice variant) | Disrupted nuclear lamina → secondary telomere dysfunction | Distinct primary mechanism from telomere biology; telomere shortening is a downstream consequence of nuclear-envelope disruption, not primary driver; included here for contrast |

These disorders demonstrate that telomere maintenance failure is causally sufficient to drive multi-tissue aging phenotypes in humans. They are the strongest human evidence that the hallmark is biologically active — not merely correlational. #gap/unsourced — dedicated study pages for DKC genetics and IPF-TERT studies are not yet seeded.

---

## Therapeutic angle

### Telomerase activation: TA-65

**TA-65** (a cycloastragenol derivative from *Astragalus*) is marketed as a telomerase activator and is the most commercially prominent intervention claiming to target this hallmark. Human data are limited and contested; observational pilot studies are small (n<100) and non-randomized. #gap/long-term-unknown #gap/needs-replication

### AAV-TERT gene therapy (mouse)

Bernardes de Jesus et al. 2012 (*EMBO Mol Med*) delivered AAV9-mTert to 1-year-old (eGFP n=12, mTERT n=21, control n=43) and 2-year-old (eGFP n=14, mTERT n=23, control n=29) >95% C57BL/6 background mice, reporting:
- 24% median lifespan extension in 1-year-old-treated mice (p<0.05 Log Rank vs eGFP controls)
- 13% median lifespan extension in 2-year-old-treated mice (p<0.05 Log Rank vs eGFP controls)
- Improved metabolic markers: reduced fasting insulin (improved insulin sensitivity), increased femur bone mineral density, improved neuromuscular coordination (Rota-Rod and Tightrope tests)
- No increase in cancer incidence relative to controls (p=0.87) [^bernardes2012]

This is the strongest single mouse result demonstrating telomere elongation → lifespan extension. However:
- Single lab (Blasco group); no ITP-level multi-site replication
- Mouse telomere biology diverges significantly from human (above)
- Tumor-risk concern at longer follow-up is unresolved in humans
- Human gene therapy translation requires TERT expression in tissues with ongoing replicative stress — not identical to the mouse experimental setup

#gap/needs-replication #gap/needs-human-replication

| Dimension (AAV-TERT result) | Status |
|---|---|
| Pathway conserved in humans? | yes — TERT extends telomeres via conserved mechanism |
| Phenotype conserved in humans? | unknown — no human gene-therapy lifespan data |
| Replicated in humans? | no |

### The aging-cancer trade-off (OncoSENS correspondence)

Telomere shortening functions as a **tumor-suppressor mechanism**: cells with critically short telomeres enter senescence or apoptosis before accumulating the mutation load required for malignancy. This is the rationale for the hallmark's SENS classification under **OncoSENS** rather than as pure damage.

The trade-off: strategies to restore telomerase and extend telomeres risk permitting pre-malignant clones to escape replicative crisis. This is the central safety concern for telomerase-activation therapies. The Bernardes de Jesus 2012 result (no increased cancer in mice) is reassuring but does not settle the question in longer-lived organisms with higher baseline cancer risk.

**The 2023–2026 modTERT paradigm shift.** A new approach engineers around the cancer-permissivity barrier directly: the Chang ACY group at Shanghai Jiao Tong + Juvensis Therapeutics has developed catalytically-inactive nuclear-retained modTERT variants (JV001 = AAV9-modhTERT^Y707F,D868A^) that bind telomeres and recap shelterin without supporting telomere elongation or replicative immortality. The MERCURY-DCM Phase 1 trial (NCT05837143, n=12, dilated cardiomyopathy) has been ACTIVE since 2023 — the first regulated human AAV-TERT-class trial, made possible by the catalytically-dead design that decouples telomere-protection from replicative-immortality risk. See [[interventions/gene-therapy/aav-tert]] for the full intervention-page detail.

Telomere shortening is therefore not entirely a failure — it is an evolved trade-off between replicative capacity (needed for tissue maintenance) and cancer suppression. Any therapeutic approach must navigate this paradox. See [[hypotheses/antagonistic-pleiotropy]] for the theoretical framework (implicit stub).

---

## Telomere attrition and other hallmarks: cross-talk

Telomere attrition does not operate in isolation. It intersects with:

| Hallmark | Mechanism of cross-talk |
|---|---|
| [[cellular-senescence]] | Telomere-driven DDR is the canonical trigger for replicative senescence; telomere-associated DDR foci (TAFs) are the specific persistent-foci subset that cannot be repaired by HR and sustain the SASP-inducing signal — see [[dna-damage-response]] (verified-partial, Rodier 2009) |
| [[genomic-instability]] | Critically short unprotected telomeres are processed as DSBs; end-to-end chromosomal fusions at dysfunctional telomeres produce breakage-fusion-bridge cycles that amplify genomic instability |
| [[stem-cell-exhaustion]] | Telomere attrition limits the replicative lifespan of stem cells; telomerase is required for HSC self-renewal maintenance across serial transplantations — see [[hematopoietic-stem-cells]] (verified-partial) |
| [[epigenetic-alterations]] | Subtelomeric heterochromatin spreads epigenetic silencing inward as telomeres shorten; telomere position effect (TPE) can silence nearby genes with age |
| [[chronic-inflammation]] | Senescent cells with TAFs secrete the SASP — see [[sasp]] (verified); paracrine spread of telomere-driven senescence may propagate inflammation in aged tissues |
| [[hypotheses/free-radical-theory-of-aging]] | ROS preferentially oxidize GGG triplets in telomeres; oxidative damage contributes to telomere shortening and blocks telomerase extension (verified, status: superseded as primary driver) |

---

## Targeted interventions

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[telomere-attrition]])
  OR contains(target-hallmarks, [[telomere-attrition]])
SORT clinical-stage DESC
```

No compound or intervention page currently links here. TA-65 (cycloastragenol telomerase activator) and AAV-TERT gene therapy are the primary intervention candidates but lack seeded pages. Intervention tractability: `low`. See [[frameworks/interventions-by-hallmark]] § Telomere attrition for seeding priorities.

---

## Limitations and open questions

- **Critical vs. mean telomere length**: The biologically relevant variable is the *shortest* telomere per cell. Population-level LTL studies measure mean telomere length in a mixed leukocyte population — a double imprecision (mean, not shortest; mixed cell types). Clinical tools to measure the critically short telomeres are lacking. #gap/no-mechanism

- **Mouse models are poor surrogates**: Standard C57BL/6 mice with long telomeres and partial somatic telomerase expression do not model human telomere-driven aging. Most published telomere-biology experiments use these strains unless explicitly noted. All claims derived from standard mouse strains carry a major extrapolation caveat. #gap/needs-human-replication

- **Causal weight in human aging**: Telomere shortening is well-established as a hallmark correlate, but the fraction of human tissue aging attributable to telomere-driven senescence vs other senescence triggers (oncogene-induced, stress-induced, radiation-induced) is not quantified. #gap/no-mechanism

- **Telomere-extending therapy and cancer**: Long-term cancer risk of telomerase activation in humans is unknown. The mouse AAV-TERT result does not resolve this, given the substantially different baseline cancer-risk landscape in mice vs humans. #gap/long-term-unknown

- **Stub pages needed**: [[telomere]] (telomere DNA structure / measurement methods / T-loop biology — distinct from telomerase machinery). All other shelterin and telomerase atoms now seeded (R29 close 2026-05-07): [[shelterin]], [[telomerase-pathway]], [[tert]], [[terc]], [[trf1]], [[trf2]], [[pot1]], [[tin2]], [[tpp1]], [[dkc1]], [[replicative-senescence]], [[interventions/pharmacological/telomerase-activators]].

---

## Cross-references

- [[hallmarks-of-aging]] — parent MOC
- [[dna-damage-response]] (verified-partial) — DDR pathway activated by uncapped telomeres
- [[p53-pathway]] (verified-partial) — downstream transcriptional executor of telomere-DDR
- [[cellular-senescence]] (stub) — primary cell fate outcome of telomere attrition
- [[hematopoietic-stem-cells]] (verified-partial) — telomere maintenance required for HSC self-renewal
- [[mus-musculus]] (verified, full) — documents the telomere divergence from human biology; Prowse 1995 verified
- [[homo-sapiens]] (verified-partial) — human telomere shortening phenotypes
- [[sasp]] (verified) — cytokine output of telomere-driven senescent cells
- [[hypotheses/free-radical-theory-of-aging]] (verified) — ROS contribution to telomeric oxidative damage
- [[genomic-instability]] — downstream consequence; chromosomal instability from dysfunctional telomeres (uncapping → end-to-end fusion → BFB cycles)
- [[stem-cell-exhaustion]] — downstream consequence of telomere-limited replicative capacity
- [[studies/lopez-otin-2013-hallmarks-of-aging]] — foundational definition paper

---

## Position in causal hierarchy

This hallmark is classified as **Proximal damage class** (mechanistic-tier: proximal / intervention-tractability: low). See [[frameworks/hallmark-causality-graph]] for the full hierarchy and intervention-sequencing argument.

Direct upstream nodes per `caused-by:` frontmatter: none. Telomere attrition is a primary damage class driven by the end-replication problem and oxidative damage to telomeric guanine triplets; the latter is attributed to upstream ROS/mitochondrial biology (not the genomic-instability hallmark per se). DDR-deficiency can impair telomere processing (WRN/BLM helicase-dependent G-quadruplex resolution at telomeric lagging strand), but this is a molecular nuance rather than a clean hallmark-level upstream edge.
Direct downstream nodes per `causes:` frontmatter: [[cellular-senescence]], [[stem-cell-exhaustion]], [[genomic-instability]] (uncapping → ATM activation → NHEJ end-to-end fusions → breakage-fusion-bridge cycles; Celli & de Lange 2005, PDF-verified).
Edge evidence is in [[frameworks/causal-graph-data]].

---

## Footnotes

[^lopezOtin2013]: doi:10.1016/j.cell.2013.05.039 · López-Otín C, Blasco MA, Partridge L, Serrano M, Kroemer G · review · Cell 2013 · 153(6):1194–1217 · model: conceptual framework · telomere attrition defined as one of 9 primary hallmarks · local PDF available

[^harley1990]: doi:10.1038/345458a0 · Harley CB, Futcher AB, Greider CW · in-vitro · Nature 1990 · 345:458–460 · model: human fibroblasts (serial passage) · demonstrates progressive telomere shortening with cell division; foundational quantitative basis for end-replication problem as cause of replicative senescence · local: not_oa #gap/no-fulltext-access — key quantitative claims (~50–150 bp/division, ~50 doublings) need PDF verification

[^deLange2005]: doi:10.1101/gad.1346005 · de Lange T · review · Genes Dev 2005 · 19(18):2100–2110 · model: human/mammalian · identifies shelterin as 6-protein complex (TRF1, TRF2, POT1, TIN2, TPP1, Rap1) protecting telomeres from DDR; definitive structural description · local: pending

[^celli2005]: doi:10.1038/ncb1275 · Celli GB, de Lange T · in-vitro · Nat Cell Biol 2005 · 7(7):712–718 · model: mouse embryo fibroblasts (MEFs; mixed 129/BL6 background); conditional deletion of *Trf2* via Cre recombinase; TRF2 loss → ATM kinase activation and chromosome-end fusions (NHEJ-dependent) without requiring 3' overhang degradation; TIFs observed in ~50–67% of TRF2-null cells; demonstrates shelterin occupancy, not telomere length, is the proximal DDR signal · local PDF available (verified)

[^prowsegreider1995]: doi:10.1073/pnas.92.11.4818 · Prowse KR, Greider CW · in-vivo · PNAS 1995 · 92:4818–4822 · model: M. musculus (BALB/c), M. spretus; multiple adult tissues + human somatic tissues · TRAP assay; telomerase detected in testis and liver (both species), kidney and spleen (BALB/c); absent from brain (both species); all M. musculus strains have TRFs at limit-mobility (>30 kb); no detectable telomerase in >50 human somatic tissue samples by TRAP · local PDF available (verified)

[^cawthon2003]: doi:10.1016/S0140-6736(03)12384-7 · Cawthon RM, Smith KR, O'Brien E, Sivatchenko A, Kerber RA · observational · Lancet 2003 · n=143 individuals >60 years · Southern blot LTL; shorter LTL associated with 3.18× higher heart-disease mortality (95% CI 1.36–7.45) and 8.54× higher infectious-disease mortality (95% CI 1.52–47.9) · local: not_oa #gap/no-fulltext-access — associations confirmed via published abstract (PMID 12573379); n and CIs confirmed; full HRs/adjustment details not verified against PDF

[^bernardes2012]: doi:10.1002/emmm.201200245 · Bernardes de Jesus B, Vera E, Schneeberger K, Tejera AM, Ayuso E, Bosch F, Blasco MA · in-vivo · EMBO Mol Med 2012 · 4:691–704 · model: >95% C57BL/6 background mice, AAV9-mTert i.v. at 1 yr (eGFP n=12, mTERT n=21, control n=43) or 2 yr (eGFP n=14, mTERT n=23, control n=29) · 24% median lifespan extension (1-yr cohort, p=0.02 Log Rank), 13% (2-yr cohort, p=0.05 Log Rank); improved insulin sensitivity, BMD, neuromuscular coordination; cancer incidence not increased (p=0.87) · local PDF available (verified)
