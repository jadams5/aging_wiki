---
type: hallmark
aliases: [autophagy decline, autophagy failure with aging, macroautophagy impairment]
category: primary
mechanistic-tier: intermediate
intervention-tractability: high
caused-by: ["[[deregulated-nutrient-sensing]]"]
causes: ["[[loss-of-proteostasis]]", "[[mitochondrial-dysfunction]]", "[[chronic-inflammation]]"]
introduced: 2023
sens-correspondence: ["[[sens-damage-categories|LysoSENS]]"]
key-pathways: ["[[autophagy]]", "[[mitophagy]]", "[[pink1-parkin-pathway]]"]
key-phenotypes: ["[[neurodegeneration]]", "[[heart-failure]]", "[[sarcopenia]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Synthesis-MOC verification: all quantitative claims cross-checked against verified atomic pages (atg5, atg13, atg101, atg12, atg7, lc3, p62, beclin-1, ulk1, tfeb, spermidine, rapamycin, caloric-restriction, urolithin-a, autophagy, mitophagy, lipophagy, xenophagy, chaperone-mediated-autophagy). Four footnote DOIs corrected (Komatsu 2006, Pyo 2013, Fernandez 2018, Liang 1999). ULK1 AMPK site corrected Ser555→Ser556. Status labels updated to reflect all Round-6 pages now fully verified. López-Otín 2023 framing (Primary hallmark, split from Loss of Proteostasis) retained — not verified against the primary López-Otín 2023 paper; recommend cross-check on next lint pass."
---

# Disabled macroautophagy

Age-associated decline in macroautophagy — the cellular bulk-degradation pathway by which damaged organelles, protein aggregates, and long-lived proteins are sequestered into double-membraned autophagosomes and delivered to the lysosome for degradation. **Recognized as a separate Primary hallmark in the 2023 expansion** of the hallmarks framework (López-Otín et al. 2023), having previously been subsumed under [[loss-of-proteostasis]] in the 2013 edition. The elevation of this hallmark to standalone status reflects a convergence of genetic, pharmacological, and epidemiological evidence establishing macroautophagy decline as a central, upstream driver of age-related cellular dysfunction across virtually all tissues and organisms studied. This hallmark is the wiki's **best-evidenced cluster**, with 26 verified atomic pages seeded in Round 6 (2026-05-04) and verified by the wiki-verifier agent (2026-05-04).

## Why macroautophagy was split from loss-of-proteostasis

The 2013 hallmarks treated autophagy as one arm of proteostasis, alongside the [[ubiquitin-proteasome-system]] and molecular chaperones. The 2023 revision elevated macroautophagy to its own hallmark on these grounds:

1. **Distinct molecular identity.** Macroautophagy has dedicated, specific machinery — the ULK1 initiation complex, VPS34/Beclin-1 nucleation complex, two independent ATG conjugation cascades, and LC3 lipidation — that is mechanistically separate from the ubiquitin-proteasome system and from [[chaperone-mediated-autophagy]] (CMA).
2. **Organelle-level scope.** Macroautophagy is the primary mechanism for clearing damaged organelles (via selective variants), which the proteasome and CMA cannot handle. Impaired mitophagy, for instance, is not interchangeable with impaired proteasomal function.
3. **Cross-hallmark pleiotropy.** Macroautophagy decline contributes mechanistically to at least five other hallmarks: [[mitochondrial-dysfunction]] (via failing mitophagy), [[loss-of-proteostasis]] (aggregate accumulation), [[cellular-senescence]] (autophagy clears senescence-relevant components), [[stem-cell-exhaustion]] (HSC autophagy required for self-renewal), and [[chronic-inflammation]] (autophagy limits SASP). Treating it as a sub-aspect of proteostasis understated its reach.
4. **Therapeutic tractability.** Multiple lifespan-extending interventions work *partly or primarily* through autophagy induction — [[rapamycin]], [[spermidine]], [[caloric-restriction]] — making it a first-class intervention target.

## Core machinery (all verified atomic pages)

Autophagosome formation proceeds through five stages, each driven by a distinct protein set. All machinery pages below are verified.

| Stage | Complex / Proteins | Atomic page |
|---|---|---|
| **Initiation** | ULK1 + ATG13 + FIP200 + ATG101 kinase complex | [[ulk1]] (verified), [[atg13]] (verified), [[atg101]] (verified) |
| **Nucleation** | VPS34 + Beclin-1 + VPS15 + ATG14L → PI3P at phagophore | [[beclin-1]] (verified) |
| **Elongation — E3-like** | ATG12–ATG5–ATG16L1 conjugation system | [[atg5]] (verified), [[atg7]] (verified), [[atg12]] (verified) |
| **Elongation — LC3** | LC3–PE lipidation via ATG7→ATG3 | [[lc3]] (verified) |
| **Flux readout** | p62/SQSTM1 (cargo receptor + inverse flux reporter) | [[p62]] (verified) |
| **Master transcription** | TFEB → CLEAR network (lysosomal biogenesis + autophagy genes) | [[tfeb]] (verified) |

Key regulatory inputs at initiation: mTORC1 phosphorylates and inhibits ULK1 (Ser757 in mouse; Ser758 in human) and ATG13 (Ser258); [[ampk]] phosphorylates and activates ULK1 (Ser317, Ser556 — human numbering per UniProt O75385). AMPK also suppresses mTORC1 via Raptor phosphorylation (Ser792), creating a mutually antagonistic switch — see [[ampk]] (verified) and [[mtor]] (verified) for mechanistic detail.

TFEB activity declines with age: under nutrient-replete conditions, mTORC1 phosphorylates TFEB at Ser142 and Ser211, retaining it in the cytoplasm. In aged tissues, chronic mTOR over-activation suppresses TFEB nuclear localization, reducing lysosomal biogenesis and autophagy gene expression — see [[tfeb]] (verified) for full detail. #gap/needs-human-replication — most TFEB aging-decline evidence is from rodent and C. elegans models.

## Selective autophagy variants (all verified, Round 6)

Macroautophagy can be targeted to specific cargo via dedicated receptor proteins:

| Variant | Cargo | Key receptor proteins | Atomic page |
|---|---|---|---|
| [[mitophagy]] | Damaged / depolarized mitochondria | PINK1 → Parkin → NDP52/OPTN/p62; BNIP3/NIX; FUNDC1 (hypoxia); BCL2L13 | [[mitophagy]] (verified) |
| [[lipophagy]] | Lipid droplets | ATGL-related; LC3 interaction | [[lipophagy]] (verified) |
| [[chaperone-mediated-autophagy]] | KFERQ-motif soluble proteins | HSPA8 + LAMP-2A (lysosomal receptor) | [[chaperone-mediated-autophagy]] (verified) |
| [[xenophagy]] | Intracellular pathogens | NDP52, OPTN, p62 | [[xenophagy]] (verified) |

Selective autophagy variants have their own receptor proteins, each with LIR (LC3-Interacting Region) motifs that dock directly onto LC3 on the inner autophagosome membrane. The principal mitophagy receptors are [[ndp52]] (primary, per Lazarou 2015 — see [[ndp52]] verified) and [[optn]] (TBK1-dependent, Ser177 phosphorylation — see [[optn]] verified), with [[bnip3]] and [[nix]] providing a Parkin-independent, receptor-mediated pathway relevant to hypoxic and developmental mitophagy — see [[bnip3]] (verified) and [[nix]] (verified). [[fundc1]] is the primary hypoxia-induced mitophagy receptor — see [[fundc1]] (verified). [[bcl2l13]] (the mammalian Atg32 ortholog) mediates Parkin-independent mitophagy downstream of AMPKα2 phosphorylation (Ser272) with cardioprotective relevance — see [[bcl2l13]] (verified).

## Genetic proof: autophagy is required for aging and longevity

These genetic experiments provide the most direct evidence linking macroautophagy to aging:

**Loss-of-function — autophagy deficiency accelerates aging-like phenotypes:**

- Conditional neural Atg5 KO (Nestin-Cre) → progressive motor deficits + ubiquitin-positive inclusion bodies + neurodegeneration, recapitulating human neurodegenerative disease — see [[atg5]] (verified) [^hara2006].
- Conditional neural Atg7 KO (Nestin-Cre) → identical neurodegeneration phenotype, confirming ATG5 and ATG7 are non-redundant — see [[atg7]] (verified) [^komatsu2006].
- Beclin-1 haploinsufficiency (Becn1+/−) → reduced autophagy, increased tumor incidence in mice [^liang1999]. #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial (neurodegeneration yes; ATG5/ATG7 KO — human germline lethal) |
| Replicated in humans? | no (genetic KO not feasible; Parkinson-disease PINK1/PARK2 mutations are partial proxy) |

**Gain-of-function — autophagy restoration extends lifespan:**

- **ATG5 overexpression (systemic transgenic, Pyo 2013):** ~17.2% lifespan extension in mice (χ²=17.32, p<0.001, n=65 WT + 70 Atg5 Tg) — see [[atg5]] (verified) [^pyo2013]. #gap/needs-human-replication
- **Beclin-1 F121A knock-in (Fernández 2018):** A point mutation disrupting the BCL-2/Beclin-1 interaction to constitutively de-repress autophagy extends median lifespan ~12% in male and female mice — see [[beclin-1]] (verified) [^fernandez2018]. #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | unknown (no equivalent human genetic data) |
| Replicated in humans? | no |

**Epistasis — autophagy is required for other longevity pathways:**

Autophagy gene knockouts (bec-1, atg-7, atg-18 in C. elegans; Atg5-RNAi in Drosophila) **abolish the lifespan extension** conferred by caloric restriction, mTOR inhibition, IIS reduction, and sirtuin activation in worms and flies — see [[autophagy]] (verified) for the epistasis evidence aggregated from Hansen 2018 [^hansen2018]. This makes autophagy a downstream convergence point for multiple longevity pathways, not merely one of several proteostatic arms. The [[hyperfunction-theory]] (verified) frames this as mTORC1 hyperactivity driving both anabolic overload and autophagy suppression simultaneously.

## Age-associated autophagy decline: mechanisms

Autophagic flux declines progressively with age across tissues in multiple organisms. Mechanistic contributors (aggregated from [[autophagy]] verified + [[tfeb]] verified + [[mtor]] verified):

1. **Reduced ATG protein expression.** Transcript and protein levels of ATG5, ATG7, BECN1, and LC3 decline in aged tissues across multiple species. Evidence is predominantly in rodent models; human data from peripheral blood cells and post-mortem brain tissue. #gap/needs-human-replication
2. **Lysosomal dysfunction.** Accumulation of [[lipofuscin]] (oxidized, cross-linked protein-lipid aggregates) reduces lysosomal hydrolase activity and inhibits autophagosome–lysosome fusion. #gap/no-mechanism — the precise molecular mechanism of lipofuscin-induced lysosomal inhibition remains unclear.
3. **Chronic mTOR over-activation.** Consistent with the [[hyperfunction-theory]] (verified), aged tissues maintain elevated mTORC1 activity even during nutritional stress, constitutively suppressing ULK1 and TFEB — see [[mtor]] (verified).
4. **TFEB nuclear exclusion.** Age-associated TFEB hypo-activity reduces CLEAR network transcription, diminishing lysosomal biogenesis and autophagy gene expression — see [[tfeb]] (verified).
5. **p62/SQSTM1 accumulation.** p62 accumulates in aged tissues as a marker of impaired autophagic flux and contributes to ubiquitin-positive inclusion body formation — see [[p62]] (verified).
6. **Autophagosome–lysosome fusion failure.** Impaired SNARE machinery and membrane lipid changes in aged lysosomes reduce fusion efficiency, producing a "traffic jam" of autophagosomes that cannot complete degradation. #gap/unsourced — this claim needs primary citations; mechanism is inferred from indirect evidence.

## Cross-hallmark contributions

Macroautophagy decline is unusual among hallmarks in that it mechanistically contributes to multiple other hallmarks:

| Downstream hallmark | Autophagy link |
|---|---|
| [[mitochondrial-dysfunction]] | Failing [[mitophagy]] allows damaged, ROS-generating mitochondria to accumulate — see [[mitophagy]] (verified) |
| [[loss-of-proteostasis]] | Bulk autophagy and aggrephagy are required to clear protein aggregates that overwhelm the proteasome |
| [[cellular-senescence]] | Autophagy degrades p21 and components of the SASP machinery; impaired autophagy stabilizes senescent phenotype — #gap/unsourced — needs dedicated primary citations |
| [[stem-cell-exhaustion]] | HSC self-renewal requires autophagy for mitochondrial quality control; quiescent HSCs with impaired autophagy display metabolic stress and differentiation bias — #gap/needs-human-replication |
| [[chronic-inflammation]] | Autophagy limits SASP secretion and clears DAMP-generating debris; impairment amplifies [[nf-kb]]-driven inflammation |
| [[deregulated-nutrient-sensing]] | mTORC1 over-activation both *causes* nutrient-sensing deregulation and *suppresses* autophagy; the two hallmarks are tightly entangled at the mTORC1 hub |

## Deregulated nutrient-sensing entanglement

The mTORC1 axis forms the dominant mechanistic bridge between the [[deregulated-nutrient-sensing]] hallmark and this one:

- mTORC1 active (nutrient excess / IIS over-signaling) → ULK1 inhibited → autophagy suppressed
- mTORC1 active → TFEB Ser211 phosphorylated → cytoplasmic retention → CLEAR network silenced
- AMPK active (energy stress) → ULK1 activated + mTORC1 suppressed → autophagy induced

This means rapamycin and caloric restriction act on both hallmarks simultaneously — see [[mtor]] (verified) for the mTOR mechanistic detail and [[ampk]] (verified) for the AMPK/ULK1 activation mechanism.

## Therapeutic landscape

| Intervention | Mechanism of autophagy induction | Lifespan / healthspan evidence | Atomic page |
|---|---|---|---|
| [[rapamycin]] | mTORC1 inhibition → ULK1 disinhibition | NIA ITP-validated mouse lifespan extension (multiple labs, both sexes) | [[rapamycin]] (verified) |
| [[spermidine]] | EP300 acetyltransferase inhibition → autophagy gene de-repression | Mouse lifespan extension (Eisenberg 2016); observational human mortality association (Kiechl 2018 n=829, HR=0.74) | [[spermidine]] (verified) |
| [[caloric-restriction]] | mTOR ↓ + AMPK ↑ → autophagy-inducing signal | Autophagy required for CR longevity benefit (genetic epistasis in worms/flies) | [[caloric-restriction]] (verified) |
| [[urolithin-a]] | Mitophagy inducer (postbiotic); ATLAS RCT (Singh 2022, n=88) — primary endpoint (peak power) NS vs placebo; aerobic endurance dose-dependent at 1000 mg | Phase 2 RCT human data (limited) | [[urolithin-a]] (verified) |
| Exercise | Acute AMPK activation + LC3 lipidation in skeletal muscle; LC3 lipidation confirmed in human muscle biopsies | Observational; mechanism confirmed in humans | — |
| Trehalose | Proposed to induce autophagy via TFEB; preclinical only | Rodent neurodegeneration models | — #gap/unsourced — trehalose-TFEB mechanism pending citation |

**Autophagy as an epistasis target for multiple longevity interventions** — the strongest mechanistic claim is that autophagy is a *required downstream effector* for several different longevity pathways; abolishing it genetically blocks the longevity benefit of CR, rapamycin, and IIS reduction in invertebrates. Whether this epistasis holds in mammals is under investigation. #gap/needs-human-replication

## Targeted interventions

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[disabled-macroautophagy]])
  OR contains(target-hallmarks, [[disabled-macroautophagy]])
SORT clinical-stage DESC
```

See [[frameworks/interventions-by-hallmark]] for the full matrix, class-level synthesis, and gaps. Autophagy epistasis makes this hallmark a convergence point for multiple longevity interventions.

---

## Cross-references

### Process pages
- [[autophagy]] (verified) — core macroautophagy mechanism, regulation, methods
- [[mitophagy]] (verified) — selective mitochondrial autophagy
- [[lipophagy]] (verified) — lipid droplet autophagy
- [[chaperone-mediated-autophagy]] (verified) — KFERQ-motif lysosomal degradation
- [[xenophagy]] (verified) — pathogen-selective autophagy

### Protein pages — machinery
- [[ulk1]] (verified) · [[atg13]] (verified) · [[atg101]] (verified) — initiation complex
- [[beclin-1]] (verified) — nucleation scaffold; BCL-2/autophagy switch
- [[atg5]] (verified) · [[atg7]] (verified) · [[atg12]] (verified) — elongation conjugation
- [[lc3]] (verified) — autophagosome membrane marker
- [[tfeb]] (verified) — master transcriptional regulator
- [[p62]] (verified) — cargo receptor + flux reporter

### Protein pages — mitophagy receptors
- [[pink1]] (verified) · [[parkin]] (verified) · [[pink1-parkin-pathway]] (verified) — ubiquitin-driven mitophagy
- [[ndp52]] (verified) · [[optn]] (verified) — secondary mitophagy receptors
- [[bnip3]] (verified) · [[nix]] (verified) — receptor-mediated mitophagy
- [[fundc1]] (verified) — hypoxia-induced mitophagy
- [[bcl2l13]] (verified) — AMPKα2-dependent cardioprotective mitophagy

### Pathway and regulatory pages
- [[mtor]] (verified) — primary autophagy suppressor
- [[ampk]] (verified) — primary autophagy activator
- [[pink1-parkin-pathway]] (verified) — mitophagy signaling cascade

### Related hallmarks
- [[loss-of-proteostasis]] — sister hallmark; shares proteostasis failure endpoint
- [[deregulated-nutrient-sensing]] — mTORC1 entanglement
- [[mitochondrial-dysfunction]] — downstream of impaired mitophagy
- [[cellular-senescence]] — autophagy modulates SASP
- [[stem-cell-exhaustion]] — HSC autophagy dependency
- [[chronic-inflammation]] — autophagy suppresses DAMP-driven inflammation

### Intervention pages
- [[rapamycin]] (verified) · [[spermidine]] (verified) · [[caloric-restriction]] (verified)
- [[urolithin-a]] (verified) — mitophagy-selective

### Hypothesis pages
- [[hyperfunction-theory]] (verified) — mTORC1 hyperfunction is the proximal upstream driver of autophagy suppression in aging

---

## Position in causal hierarchy

This hallmark is classified as **Intermediate response/damage tier** (mechanistic-tier: intermediate / intervention-tractability: high). See [[frameworks/hallmark-causality-graph]] for the full hierarchy and intervention-sequencing argument.

Direct upstream nodes per `caused-by:` frontmatter: [[deregulated-nutrient-sensing]] (mTORC1 → ULK1 inhibition; AMPK decline releases mTOR brakes).
Direct downstream nodes per `causes:` frontmatter: [[loss-of-proteostasis]] (Atg5/Atg7 KO → ubiquitin inclusions + neurodegeneration), [[mitochondrial-dysfunction]] (impaired mitophagy → damaged organelle accumulation), [[chronic-inflammation]] (impaired DAMP clearance → NF-κB activation).
Edge evidence is in [[frameworks/causal-graph-data]].

## Limitations and gaps

- **Most mechanistic evidence is preclinical.** Genetic lifespan-extension experiments (Atg5 Tg, Beclin-1 F121A) are mouse-only. Whether restoring autophagy in humans extends healthspan or lifespan is not yet testable directly. #gap/needs-human-replication
- **Tissue-specific heterogeneity.** Neurons and cardiomyocytes are the most autophagy-dependent post-mitotic cells. Some proliferating cell types may tolerate or benefit from lower autophagy. Cell-type generalizations should be used cautiously.
- **Autophagy flux measurement in humans is difficult.** Most human aging data comes from peripheral blood cells or post-mortem tissue; in-vivo flux in the most-affected organs (brain, heart) is technically inaccessible. #gap/needs-human-replication
- **The optimal autophagy dose is unknown.** Evidence from cancer biology suggests excessive autophagy can be harmful; whether a hormetic U-shaped dose-response exists in aging tissues is unsettled. #gap/dose-response-unclear
- **Senescence-autophagy link is incompletely sourced on this wiki.** The claim that autophagy deficiency stabilizes the senescent phenotype needs dedicated primary citations on the atomic pages. #gap/unsourced
- **Trehalose autophagy mechanism needs a primary citation.** The TFEB-mediated mechanism for trehalose-induced autophagy is widely stated but the primary citation is absent on this wiki. #gap/unsourced
- **TFEB decline with age in humans.** Direct evidence for TFEB nuclear localization decline in human aged tissues is thin; most data from mouse liver and C. elegans. #gap/needs-human-replication

## Footnotes

[^hara2006]: doi:10.1038/nature04724 · in-vivo · model: Nestin-Cre Atg5 conditional KO mice · progressive motor deficit + ubiquitin inclusions + neurodegeneration; cited on [[atg5]] (verified)
[^komatsu2006]: doi:10.1038/nature04723 · in-vivo · model: Nestin-Cre Atg7 conditional KO mice · same neurodegeneration phenotype as Hara 2006, confirming non-redundancy; n=26 mutant / 41 control; all mutants dead within 28 weeks (P<0.01); cited on [[atg7]] (verified)
[^pyo2013]: doi:10.1038/ncomms3300 · in-vivo · model: C57BL/6 pCAGGS-Atg5 ubiquitous transgenic mice · n=65 WT + 70 Tg · log-rank χ²=17.32 p<0.001 · ~17.2% median lifespan extension; cited on [[atg5]] (verified)
[^fernandez2018]: doi:10.1038/s41586-018-0162-7 · in-vivo · model: Beclin-1 F121A knock-in mice (pure C57BL/6J, >12 backcross generations) · n=68 WT + 102 KI (combined); p<0.0001 log-rank · WT median 26 mo vs KI median 29 mo (~12% extension, both sexes); cited on [[beclin-1]] (verified)
[^liang1999]: doi:10.1038/45257 · in-vivo · model: Becn1+/− mice · increased tumorigenesis; cited on [[beclin-1]] (verified — this specific claim is not_oa per [[beclin-1]] verified scope; qualitative claim retained)
[^hansen2018]: doi:10.1038/s41580-018-0033-y · review · multi-organism · autophagy epistasis evidence aggregated; cited on [[autophagy]] (verified)
