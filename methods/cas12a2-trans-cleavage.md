---
type: method
aliases: [Cas12a2, SuCas12a2, transcript-activated chromatin shredding, RNA-triggered chromatin shredding, trans-cleavage, collateral cleavage, RNA-guided cell ablation, type V CRISPR collateral nuclease]
abbreviation: null
category: gene-editing
year-introduced: 2023
canonical-reference: "doi:10.1038/s41586-022-05559-3"
current-protocols-citation: null
related-methods:
  - "[[methods/in-vivo-base-editing]]"
  - "[[methods/single-cell-rna-seq]]"
typical-use-cases:
  - "Killing a cell on the basis of an intracellular RNA signature (a mutant transcript, an oncogene above an abundance threshold, an indel-junction sequence, or a viral transcript) rather than a surface marker or a small-molecule dependency"
  - "Selectively eliminating cells carrying an 'undruggable' mutation (e.g. mutant *TP53*) whose protein lacks a drug-binding pocket"
  - "Multiplexed transcript sensing — Cas12a2 can process its own CRISPR array, enabling several guides from one construct"
  - "(Hypothetical, untested) transcriptome-addressed clearance of a defined cell state such as senescence — see [[transcript-activated-cell-ablation]]"
key-limitations:
  - "Activation triggers *non-specific* (collateral/trans) nuclease activity within the cell — the entire safety margin rests on trigger-transcript selectivity, not on cleavage specificity"
  - "Slower at mammalian free Mg²⁺ (~0.1–1 mM) than the 10 mM used in bacterial biochemistry — sufficient to kill, but kinetics differ from in-vitro assays"
  - "Killing scales with target-transcript abundance, so a low-abundance trigger may fall below the lethal threshold (a feature for oncogene-thresholding, a bug for rare/low transcripts)"
  - "Delivery-limited in vivo: LNP cargo reached only ~7–18% of tumour cells, required repeat dosing, and did not clear established advanced tumour burden"
  - "The killing effector IS a genome-wide DNA-damage event (chromatin shredding → double-strand breaks → mitotic catastrophe); innate-immune/inflammatory activation and bystander effects are intrinsic, not incidental"
  - "Single guide–target mismatches can blunt activity — useful for single-nucleotide-variant discrimination but a robustness liability for on-target killing"
evidence-weight-implication: "Weight a Cas12a2 cell-killing claim by (1) whether selectivity was shown against a true negative control that shares everything except the trigger transcript (e.g. an isogenic wild-type line, or a control mutation identical at the targeted position) — co-culture/competition readouts are stronger than monoculture growth curves; (2) whether selectivity was decoupled from transcript abundance (does the on-target line express *more* trigger transcript than the spared line, or less?); (3) delivery realism — in-vitro nucleofection/transfection of RNP greatly overstates what LNP delivery achieves in vivo; (4) whether endogenous (not over-expressed transgene) trigger transcripts were targeted. Mechanistic in-vitro trans-cleavage gels establish capability, not therapeutic selectivity."
literature-checked-through: 2026-06-13
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-06-13. The mammalian/therapeutic claims attributed to [^zeng2026] have been verified against the bioRxiv preprint full text (DOI 10.64898/2026.05.08.723607, verified 2026-06-13); see [[studies/zeng-2026-cas12a2-chromatin-shredding]] for the verified study page. The foundational bacterial-mechanism claims (Dmytrenko 2023; Scholz 2026) are sourced from metadata/abstracts only — **not** verified against full text. This page remains `verified: false` pending full-text access to Dmytrenko 2023 and Scholz 2026. #gap/no-fulltext-access

# Cas12a2 trans-cleavage (transcript-activated chromatin shredding)

**Cas12a2** is an RNA-guided nuclease from a bacterial CRISPR abortive-infection system. Unlike a precision editor, its defining property is **collateral (*trans*) cleavage**: once its guide RNA recognises a complementary **target RNA**, Cas12a2 becomes a *non-specific* nuclease that degrades single-stranded RNA, single-stranded DNA, and double-stranded DNA indiscriminately [^dmytrenko2023]. In bacteria this is a suicide defence — a phage transcript activates Cas12a2, which destroys the cell's nucleic acids to abort the infection and protect the colony.

**Transcript-activated chromatin shredding** is the repurposing of this property to kill a chosen *eukaryotic* cell: deliver Cas12a2 + a guide RNA against a transcript that marks the unwanted cell, and in any cell expressing that transcript the activated enzyme **shreds chromatin**, causing a genome-wide DNA-damage response, mitotic catastrophe, and death [^scholz2026] [^zeng2026]. The trigger transcript is the targeting signal; the killing itself is deliberately non-specific *within* the doomed cell.

This page covers the technique. For the primary cancer paper see [[studies/zeng-2026-cas12a2-chromatin-shredding]]; for the therapeutic-modality framing (and the aging/senolytic relevance) see [[transcript-activated-cell-ablation]]. Contrast with [[methods/in-vivo-base-editing]], the *precision* end of the CRISPR-method spectrum (a single intended base change, no DSB) — Cas12a2 is the opposite design point (maximal, non-specific damage, gated by an RNA sensor).

---

## Principle

A standard DNA-targeting CRISPR nuclease (Cas9, Cas12a) cuts one DNA locus the guide specifies. **Cas12a2 is an RNA *sensor* coupled to a non-specific nuclease:**

1. **Sensing.** The guide RNA base-pairs with a complementary **target RNA** (e.g. a messenger RNA). Activation additionally requires an **adenine-rich protospacer-flanking site (PFS)** near the target (functionally analogous to the PAM of DNA-targeting CRISPR) — this is the recognition handle that single-nucleotide-variant targeting exploits [^dmytrenko2023] [^zeng2026].
2. **Conformational switch.** Target-RNA binding opens the nuclease active site into a *trans*-active state.
3. **Collateral shredding.** The activated enzyme degrades nearby nucleic acids non-specifically — ssRNA, ssDNA, and dsDNA — including, in a eukaryotic nucleus, **chromatinised genomic DNA**. It preferentially cuts the accessible internucleosomal **linker** DNA (producing a nucleosome-laddered digestion pattern in vitro) [^zeng2026].
4. **Cell death.** Genome-wide double-strand breaks trigger a DNA-damage response (γH2AX, phospho-KAP1 S824), G2 arrest, and **mitotic catastrophe** — enlarged/fragmented nuclei and loss of proliferation, progressing to propidium-iodide⁺/Annexin-V⁺ death [^zeng2026].

### Why this is a different design point from base editing
[[methods/in-vivo-base-editing]] is engineered to *minimise* collateral damage (no double-strand break, a ~4–8 nt window, a single intended transition). Cas12a2 is engineered around the opposite: the payload IS catastrophic, genome-wide DNA damage, and all of the precision lives in the **RNA-sensing trigger**, not in the cut. The therapeutic question therefore inverts: for base editing you ask "how clean is the edit?"; for Cas12a2 you ask "how exclusive is the trigger transcript to the cells you want dead?"

---

## Workflow (mammalian transcript-activated killing, after Zeng 2026)

1. **Pick a trigger transcript** present in the target cells and absent (or below the killing threshold) in bystanders. Demonstrated classes: a point-mutant mRNA (mutant *TP53*), an indel-junction mRNA (*EGFR* exon-19 deletion), an over-expressed oncogene above an abundance threshold (*CCNE1*, *MYC*), or any cell-specific/viral transcript.
2. **Design the guide RNA** complementary to the target, positioned so an adenine-rich PFS is present. For single-nucleotide-variant selectivity, place the guide so the mutation either *creates* the activating PFS (e.g. the R248Q G→A "mutA" PFS) or sits in the guide–target duplex where a single mismatch to wild-type abolishes activation.
3. **Deliver Cas12a2 + guide.** Demonstrated routes: purified ribonucleoprotein by nucleofection (research); stable expression (engineered lines); and — for therapy — **co-delivered Cas12a2 mRNA + guide RNA in lipid nanoparticles (LNPs)**, including tissue-tropic SORT LNPs for lung.
4. **Sensing → activation → killing** proceeds only in cells expressing the trigger transcript with its PFS.
5. **Read-out:** loss of proliferation, DNA-damage markers (γH2AX, phospho-KAP1), nuclear fragmentation/mitotic catastrophe, cell-death stains; in vivo, tumour burden by bioluminescence / surface area; in competition, an isogenic mutant-vs-wild-type ratio shift.

---

## Output format

- **Selective-killing readout** — growth/viability of trigger⁺ vs trigger⁻ cells; strongest as an **isogenic co-culture ratio** (the spared population outgrows the targeted one only with the on-target guide).
- **In-vitro *trans*-cleavage gel** — target-RNA-dependent degradation of labelled collateral substrate (capability, not selectivity).
- **DNA-damage / death markers** — γH2AX, phospho-KAP1 S824; FUCCI cell-cycle (G2 arrest); PI/Annexin-V.
- **Abundance–lethality relationship** — killing vs transcripts/cell (single-molecule FISH), defining the targeting window.
- **In-vivo efficacy + delivery efficiency** — tumour-burden change, plus the fraction of target cells actually transfected (a reporter such as Cre→tdTomato).

---

## Key parameters

| Parameter | Value / behaviour (Zeng 2026 context) | Effect |
|---|---|---|
| Effector | *Sulfuricurvum* SuCas12a2 (NLS-tagged for nuclei) | RNA-guided collateral nuclease; the killing enzyme |
| Trigger | Complementary target RNA + adenine-rich PFS | Gates activation; the selectivity handle |
| Collateral substrates | ssRNA, ssDNA, dsDNA (incl. chromatin) | Genome-wide damage; preferential linker-DNA cleavage |
| Selectivity levers | SNV-created PFS · indel junction · abundance threshold | Three demonstrated ways to make the trigger cancer-exclusive |
| Mg²⁺ dependence | active down to 0.1 mM (slower); killing Mg²⁺-independent 0.1–10 mM | Functions at mammalian free Mg²⁺ |
| Abundance threshold | killing rises with transcripts/cell (~50 vs ~560 *CCNE1* discriminable) | Enables high-vs-low expression targeting; limits low-abundance triggers |
| Delivery | RNP nucleofection (research) · mRNA+gRNA LNP (therapy); ~7–18% in-vivo tumour uptake | In-vivo delivery is the limiting variable |
| Multiplexing | self-processes CRISPR array | Several triggers from one construct |

---

## Validation and QC

- **Isogenic negative control sharing everything but the trigger.** The decisive controls in Zeng 2026 are RPE1 wild-type vs RPE1 p53^R248Q (same background), and the p53^R175H line that is identical to wild-type *at* the targeted position — both spared by the R248Q guide.
- **Decouple selectivity from abundance.** Selectivity was shown to track the mutation, not expression, because the spared R175H line expressed *more* *TP53* transcript than the killed R248Q line.
- **Endogenous-locus confirmation.** Beyond over-expression transgenes, endogenous mutant transcripts (PC9: endogenous p53^R248Q + *EGFR* E746_A750del) were targeted.
- **Damage-mechanism confirmation.** γH2AX + phospho-KAP1 + FUCCI G2 arrest + nuclear fragmentation confirm death proceeds through the expected chromatin-damage/mitotic-catastrophe route.
- **Delivery accounting.** A Cre→tdTomato reporter quantified the (modest) in-vivo transfected fraction — the appropriate honesty check on an in-vivo efficacy claim.

---

## Limitations and failure modes

1. **Selectivity is only as good as the trigger transcript.** The cut is non-specific by design; if any bystander expresses the trigger above threshold, it dies too. There is no second specificity checkpoint. #gap/long-term-unknown
2. **Genome-wide DNA damage is the mechanism, not a side effect.** Sub-lethal activation could in principle leave survivors with mutagenic damage; the long-term consequence of partial shredding is uncharacterised. #gap/no-mechanism
3. **Delivery dominates in-vivo efficacy.** ~7–18% tumour-cell uptake, repeat dosing required, and failure to clear established advanced tumour burden (only delayed metastasis) — reaching dispersed cells (e.g. senescent cells across many tissues) is harder than a tumour mass.
4. **Abundance threshold cuts both ways.** Low-abundance trigger transcripts may never reach the lethal dose.
5. **Mismatch sensitivity.** Single guide–target mismatches can blunt killing — exploited for variant discrimination, but a robustness risk for the intended on-target cells.
6. **Innate-immune activation.** Both the DNA-damage payload and the LNP carrier engage innate-immune/inflammatory sensing; this is intrinsic to the modality.

---

## Evidence-weight implications for this wiki

When a paper reports Cas12a2 (or any collateral-nuclease, incl. Cas13) cell-killing, weight it by:

1. **Control quality.** Isogenic, same-position-control comparisons (and co-culture/competition) ≫ monoculture growth curves.
2. **Abundance decoupling.** Selectivity is only meaningful if it is *not* just the on-target line expressing more trigger transcript.
3. **Endogenous vs over-expressed trigger.** Endogenous-locus targeting ≫ a transfected over-expression transgene.
4. **Delivery realism.** RNP nucleofection / stable expression overstate deliverable efficacy; LNP in-vivo data with an explicit transfected-fraction accounting is the honest tier.
5. **For any *aging* application,** treat the senescence/senolytic use as **hypothesis, not result** — no collateral-nuclease senescence-clearance data exist (see [[transcript-activated-cell-ablation]]).

---

## Related methods

| Method | Relationship | Notes |
|---|---|---|
| [[methods/in-vivo-base-editing]] | Opposite design point | Precision, DSB-free, single-base; Cas12a2 is maximal non-specific damage gated by an RNA sensor. Shared LNP-mRNA delivery chassis |
| Cas13 collateral RNA cleavage | Sibling collateral nuclease | RNA-targeting, RNA-collateral (HEPN domains); also used for target-RNA-triggered cell elimination, but kills via RNA degradation/stress rather than chromatin shredding |
| [[methods/single-cell-rna-seq]] | Trigger discovery | Defines cell-state-specific transcripts that could serve as triggers (e.g. senotype markers) |
| Nuclease knockout (CRISPR-Cas9 DSB) | Contrast | One programmed DNA cut; Cas12a2 makes genome-wide collateral cuts after RNA sensing |

---

## Pages citing this method

- [[studies/zeng-2026-cas12a2-chromatin-shredding]] — primary cancer paper (transcript-activated chromatin shredding)
- [[transcript-activated-cell-ablation]] — the intervention/modality page (programmable cell ablation; aging framing)
- [[senolytics]] — where this would sit as an emerging non-SCAP killing modality
- [[cellular-senescence]] — senotype heterogeneity as both motivation and obstacle for a transcript-addressed killer

---

## Footnotes

[^zeng2026]: [[studies/zeng-2026-cas12a2-chromatin-shredding]] · doi:10.1038/s41586-026-10738-7 (*Nature* 2026; preprint doi:10.64898/2026.05.08.723607) · Zeng J, …, Doudna JA · mammalian transcript-activated chromatin shredding; SuCas12a2 *trans*-cleaves chromatin on RNA recognition; SNV/indel/abundance selectivity; LNP mRNA+gRNA delivery. Verified against CC-BY bioRxiv preprint full text (2026-06-13); *Nature* version paywalled.

[^dmytrenko2023]: doi:10.1038/s41586-022-05559-3 · Dmytrenko O, Neumann GC, Hallmark T, …, Jackson RN, Beisel CL · *Nature* 2023 · 613(7944):588-594 · origin paper — Cas12a2 abortive infection: RNA-triggered, PFS-dependent non-specific destruction of dsDNA/ssDNA/ssRNA, inducing an SOS DNA-damage response. Establishes the trans-cleavage mechanism. Closed-access — cited from metadata. #gap/no-fulltext-access

[^scholz2026]: doi:10.1038/s41586-026-10466-y · Scholz N, Thompson J, Crosby KT, …, Jackson RN, Beisel CL, Liu Y · *Nature* 2026 (6 May 2026) · companion foundational paper — RNA-triggered, sequence-specific killing of *eukaryotic* cells by Cas12a2 via genome-wide DNA shredding (selective elimination by gene expression, incl. virus-infected / mutation-bearing cells). Closed-access — cited from metadata. #gap/no-fulltext-access
