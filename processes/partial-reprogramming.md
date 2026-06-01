---
type: process
aliases: [transient OSK reprogramming, partial Yamanaka reprogramming, epigenetic rejuvenation, transient OSKM expression, cyclic reprogramming]
key-proteins: ["[[oct4]]", "[[sox2]]", "[[klf4]]", "[[c-myc]]"]
pathways: null
hallmarks: ["[[epigenetic-alterations]]"]
selective-variants: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Ocampo 2016, Lu 2020, Yang 2023 primary-source PDFs verified end-to-end; Schooling 2025 PDF available but not re-read (MR methods/n confirmed on prior pass via information-theory-of-aging page); Takahashi 2006 not verified (pending download)"
---

# Partial Reprogramming

Transient, sub-threshold expression of Yamanaka transcription factors (OCT4, SOX2, KLF4 ± c-MYC = "OSKM"; or OSK without c-Myc) to restore youthful epigenetic states in differentiated somatic cells **without** inducing pluripotency or loss of cell identity. It is the central proposed intervention of [[hypotheses/information-theory-of-aging]] (verified) and the most direct experimental test of whether [[epigenetic-alterations]] can be reversed rather than merely slowed.

**All current evidence is preclinical (mouse models).** No human study has been completed as of 2026-05-04. The strongest mechanistic claims originate predominantly from the Sinclair laboratory and have not yet been independently replicated at the same systemic level. See the Caveats section below.

---

## Background: from full reprogramming to partial reprogramming

In 2006, Takahashi and Yamanaka demonstrated that ectopic expression of four transcription factors — OCT4, SOX2, KLF4, and c-MYC (OSKM) — in mouse fibroblasts generates induced pluripotent stem cells (iPSCs) by erasing cell-type identity and resetting the epigenome to an embryonic state [^takahashi2006]. This full reprogramming discards the differentiated cell identity along with its epigenetic aging marks; the resulting iPSCs are no longer neurons, hepatocytes, or muscle cells.

**Partial reprogramming** exploits the same transcription factors at sub-dedifferentiation doses or via pulsed/cyclic delivery, aiming to restore youthful epigenetic patterns while the cell retains its differentiated identity. The key distinction:

| | Full reprogramming | Partial reprogramming |
|---|---|---|
| Duration of TF expression | Sustained (days–weeks) | Brief / cyclic (hours–days on; days off) |
| Cell identity | Lost (pluripotent iPSC) | Retained (differentiated) |
| Epigenetic age | Reset to embryonic | Reversed toward youthful (partial) |
| Teratoma risk | High (iPSC-derived) | Reduced; depends on dose and duration |
| c-Myc inclusion | Yes (original OSKM) | Debated; Sinclair group uses OSK only |

The mechanistic rationale: differentiated cells retain an intact DNA sequence (the "digital" information) but accumulate epigenetic drift over time (the "analog" information degrades). If the drift is the problem, correcting it without touching the sequence could, in principle, reverse functional aging without the hazards of full pluripotency. See [[hypotheses/information-theory-of-aging]] (verified) for the full theoretical framework.

---

## Two main experimental strategies

### 1. Cyclic OSKM — Ocampo 2016 (Belmonte group, Salk Institute)

Ocampo et al. used a doxycycline-inducible OSKM transgene system in two mouse contexts [^ocampo2016]:

- **LAKI progeria model** (G609G knockin in *Lmna*, a model of Hutchinson-Gilford Progeria Syndrome): cyclic OSKM expression (2 days on / 5 days off) extended lifespan and ameliorated cellular and physiological aging hallmarks.
- **12-month-old wild-type C57BL/6J mice**: showed improved recovery from metabolic disease (streptozotocin-induced beta-cell ablation; glucose tolerance improved at 2 weeks post-injury) and from muscle injury (cardiotoxin injection to tibialis anterior). Lifespan extension in wild-type aged mice was not demonstrated in this study.

**Important caveats for this study:**
- The LAKI progeria model has a genetic defect in *Lmna* (nuclear lamina protein); it is not a natural aging model. Results may not generalize to the full complexity of normal aging.
- This is the Belmonte group at Salk, **not** the Sinclair lab — it represents independent-ish support for the approach, though the two groups use different systems.
- OSKM includes c-Myc, which is a proto-oncogene. The cyclic dosing protocol was designed to avoid teratoma formation, and no teratomas were reported in the cyclic protocol; however, extended or misregulated expression carries tumor risk.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial (OSKM are human transcription factors; progeria model has caveats) |
| Phenotype conserved in humans? | unknown |
| Replicated in humans? | no |

#gap/needs-human-replication #gap/needs-replication — progeria-model; distinct from normal aging; not replicated by other labs at the same level.

---

### 2. OSK without c-Myc — Lu 2020 and Yang 2023 (Sinclair group, Harvard)

The Sinclair laboratory has pioneered the use of OSK (omitting c-Myc to reduce oncogenic risk) delivered via adeno-associated virus (AAV).

**Lu 2020 (Nature) — retinal ganglion cell vision restoration [^lu2020]:**

AAV2-mediated delivery of polycistronic OSK to retinal ganglion cells (RGCs) in aged mice and in two injury/disease models (optic nerve crush; glaucoma model) produced:
- Axon regeneration after optic nerve crush in young and aged mice
- Reversal of vision loss in a glaucoma mouse model
- Restoration of youthful DNA methylation patterns in RGCs
- The benefits required **TET1 and TET2 DNA demethylases**; knockdown of either abrogated axon regeneration and RGC survival. **TET3 was not required.** This is a mechanistically important constraint: the OSK mechanism of action involves active demethylation at specific loci, not passive drift correction.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial (RGC biology overlaps with human glaucoma; TET enzyme conservation is high across mammals) |
| Phenotype conserved in humans? | unknown (no human data) |
| Replicated in humans? | no |

#gap/needs-human-replication #gap/needs-replication — mouse-only; single-lab; confined to RGCs; no independent replication of the systemic claim.

**Yang 2023 (Cell) — ICE system; systemic epigenetic reversal [^yang2023]:**

The Yang 2023 paper introduced the ICE (Inducible Changes to the Epigenome) system — a site-specific double-strand break (DSB) induction tool (I-PpoI restriction enzyme expressed under ER^T2 control) that mimics the epigenetic disruption of natural aging **without permanent DNA sequence damage**. Key findings in ICE mice (C57BL6/J background; DSBs induced at age 4–6 months; primary phenotypic endpoints assessed ~10 months post-treatment, with animals ~14–16 months old at assessment):

- ICE mice showed accelerated epigenetic aging clock (~50% faster advance, p<0.0001), accompanied by age-related transcriptomic, cellular, and physiological changes
- OSK reprogramming reversed ICE-associated epigenetic age advance by up to ~57%
- The system provides the strongest available evidence for the **causal** direction of the information-theory hypothesis: induction of epigenetic disruption accelerates aging; restoration via OSK reverses it

This is a landmark study. However: the ICE model is itself an artificial induction system. It does not prove that the same mechanism operates identically during natural aging at equivalent magnitude.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial (ICE mechanism proposed as universal; not yet validated in human tissue) |
| Phenotype conserved in humans? | unknown |
| Replicated in humans? | no; limited independent mouse replication as of 2026-05-04 |

#gap/needs-human-replication #gap/needs-replication — single-lab; functional claims from the ICE artificial-induction system; independent systemic replication pending.

---

## Proposed mechanism

The molecular mechanism by which OSK/OSKM reverses epigenetic aging is not fully characterized, but the current evidence supports the following model:

1. **TF binding at youthful loci**: OSK transcription factors bind promoters and enhancers associated with the youthful transcriptional state, competing with age-accumulated repressive complexes.
2. **TET demethylase recruitment**: OSK recruits TET1 and TET2 DNA demethylases to loci that have drifted toward hypermethylation with age; TET-mediated active demethylation restores younger CpG patterns. This step is required (Lu 2020 TET1/TET2 knockdown abrogated OSK benefits; TET3 not required) [^lu2020].
3. **Histone modification remodeling**: OSK-driven chromatin state changes include restoration of youthful H3K9me3 and H3K27me3 distributions; the specific histone-modifying enzymes recruited remain under characterization.
4. **Transcriptomic reset**: restored methylation → restored gene expression programs → improved cellular function (demonstrated in RGCs: axon regeneration, electrophysiological function restored).

What the mechanism is **not** claimed to be: repair of DNA sequence mutations, clearance of misfolded proteins, or any of the other hallmarks of aging processes. Partial reprogramming is specifically an epigenetic intervention; it does not directly address [[genomic-instability]], [[loss-of-proteostasis]], [[cellular-senescence]], or [[mitochondrial-dysfunction]]. Whether secondary benefits in those dimensions follow from epigenetic restoration is an open question.

---

## Critical caveats — Mode A discipline

These caveats are load-bearing. Do not soften or elide them during editing. They come from the verified [[hypotheses/information-theory-of-aging]] page and from the primary sources themselves.

### Single-lab dominance

The OSK-specific partial reprogramming claims (Lu 2020 RGC vision restoration; Yang 2023 ICE system reversal; the broader "information theory" framing) originate from the **Sinclair laboratory at Harvard**. The Ocampo 2016 OSKM cyclic study (Belmonte group, Salk) is independent but used a different system (full OSKM, progeria model) and does not independently replicate the specific OSK claims. Independent replication of the systemic OSK-in-vivo rejuvenation claim at the same level is not available as of 2026-05-04. This is the appropriate epistemic caveat for any single-lab claim of this magnitude; it does not mean the findings are wrong. #gap/needs-replication

### Preclinical only — mouse models throughout

All direct partial reprogramming experiments have been conducted in mouse models. No equivalent human somatic cell partial reprogramming study has been published. The model-organism translation challenge is particularly acute here: epigenetic clock architecture differs between species; the specific CpG sites in Horvath-type clocks are human-optimized; and the safety and efficacy of AAV-mediated TF delivery to human tissues is unknown. #gap/needs-human-replication

### No long-term lifespan data in normally aged mice

The Ocampo 2016 study showed lifespan extension in progeria mice, not normally aged mice. Yang 2023 and Lu 2020 demonstrated functional improvements and clock reversal without reporting long-term lifespan data in normally aged animals. **No completed study has demonstrated that cyclic OSK or OSKM expression extends maximum lifespan in normally aged mice from a standard laboratory strain.** Short-term functional improvement is not equivalent to lifespan extension. #gap/long-term-unknown

### Teratoma and de-differentiation risk

Full OSKM reprogramming induces pluripotency and teratoma formation if sustained. Partial reprogramming avoids this by using cyclic delivery or omitting c-Myc, but the safety window is narrow and tissue-specific. The Ocampo 2016 cyclic 2d-on / 5d-off protocol reported no teratomas — but **only in single-copy 4F mice**; mice carrying two copies of both the OSKM cassette and rtTA cassette under the same cyclic protocol *did* develop teratomas at ~8 weeks (Ocampo 2016 Fig. 3E,F). Continuous-doxycycline single-copy 4F mice died within ~4 days from dedifferentiation-induced organ failure, before teratoma formation could be assessed. **Gene copy number — not dosing schedule alone — is a key safety determinant.** Other caveats:
- Long-term safety in normally aged animals is uncharacterized
- Dose-response between "epigenetic rejuvenation" and "full reprogramming / tumor" may vary by tissue type, cell cycle status, and animal age
- No human safety data exists

#gap/long-term-unknown

### Schooling 2025 — MR null result for epigenetic clock causality (preliminary)

Schooling 2025 used Mendelian randomization to test whether genetically-predicted acceleration of four epigenetic clocks causally shortens lifespan in human cohorts (UK Biobank; n up to ~415,000 fathers / ~412,000 mothers) [^schooling2025]. Results were null across all four clocks and both sexes. This challenges the interpretation that epigenetic clock acceleration is causally on the path from molecular damage to mortality — it is consistent with clock acceleration being a biomarker rather than a driver of aging. Caveat: Schooling 2025 is a 2025 paper with 0 citations as of 2026-05-04; treat as preliminary. It does not directly test partial reprogramming as an intervention; it tests whether epigenetic age acceleration is causal. #gap/needs-replication

---

## Therapeutic translation challenges

Practical barriers to human translation, beyond the scientific caveats above:

| Challenge | Detail |
|---|---|
| **Delivery** | AAV2 was used for retinal delivery (a small, immunologically privileged compartment). Systemic AAV delivery to aged humans faces immunogenicity, manufacturing, and tissue-targeting challenges. mRNA-based delivery is being explored as an alternative. |
| **Dosing window** | The gap between "epigenetic rejuvenation" and "full dedifferentiation + teratoma" is tissue-specific and not characterized in humans. |
| **Cell-identity loss risk** | Any strategy that drives cells toward pluripotency risks erasing specialized function. Tissues with post-mitotic cells (neurons, cardiomyocytes) may be more sensitive. |
| **Multigene delivery** | OSK is three transcription factors; co-expression requires polycistronic constructs or separate vectors; stoichiometry matters for the outcome. |
| **Immune response to TFs** | Oct4, Sox2, Klf4 are not normally expressed in adult somatic cells; immune recognition of TF-expressing cells is possible, particularly with AAV capsid immune responses. |
| **Which clock / what outcome** | Clock divergence (DunedinPACE vs GrimAge vs PhenoAge) means it is unclear which epigenetic readout accurately captures the aging biology being reversed — and which clinical outcome to target in a trial. |

---

## Industry landscape

Several companies are pursuing partial reprogramming strategies commercially; none has published human clinical data as of 2026-05-04:

- **Altos Labs** (backed by Yuri Milner / Jeff Bezos) — broad reprogramming platform; attracted multiple Yamanaka-field researchers
- **NewLimit** (co-founded by Brian Armstrong) — focused on epigenetic reprogramming with emphasis on cell-specific delivery
- **Retro Biosciences** (backed by Sam Altman) — partial reprogramming + other longevity approaches
- **Life Biosciences** — founded in part by David Sinclair; pursuing OSK clinical translation
- **Turn Biotechnologies** — mRNA-based transient TF delivery

No Phase 1 trial results for partial reprogramming in any indication have been published. #gap/long-term-unknown #gap/needs-human-replication

See [[in-vivo-partial-reprogramming-therapy]] (R23a) for the clinical-development-bridge intervention page covering AAV-OSK, mRNA-LNP-OSK, and chemical reprogramming modalities, with a fuller industrial pipeline table and translation-barrier analysis. The narrower [[aav-osk]] page (R23b) covers the gene-therapy-modality view of the same biology.

---

## Relationship to the information theory of aging

Partial reprogramming is the **central proposed intervention** of [[hypotheses/information-theory-of-aging]] (verified). The hypothesis proposes that aging is primarily driven by progressive loss of epigenetic information (not DNA sequence mutations), and that because the genetic "digital" layer is preserved, the lost "analog" epigenetic information can be restored via OSK/OSKM. Partial reprogramming experiments (Lu 2020, Yang 2023, Ocampo 2016) are the primary direct tests of this hypothesis.

The Schooling 2025 MR null result challenges the causal chain but does not directly falsify partial reprogramming as an intervention — it challenges whether epigenetic clock acceleration *per se* is causal, which is a related but distinct question. See [[hypotheses/information-theory-of-aging]] (verified) § Evidence against for the full interpretation.

### Transcriptomic-clock readout (Tyshkovskiy 2026)

Independent of DNA methylation, multi-species **transcriptomic clocks** now provide a complementary, pathway-resolved readout of reprogramming-driven rejuvenation. Tyshkovskiy et al. 2026 applied transcriptomic clocks ([[transcriptomic-clock-tage]]) to OSKM-reprogramming datasets and found that **reprogramming reduced both chronological and mortality tAge**, with the **strongest rejuvenation signal in the epithelial-to-mesenchymal-transition (EMT/MET) module clock** — consistent with the mesenchymal-to-epithelial transition that initiates reprogramming [^tyshkovskiy2026]. Two further points reinforce the information-theory framing:

- The reprogramming rejuvenation signature **overlaps those of caloric restriction and embryonic "ground zero" rejuvenation** (shared down-regulation of `Cdkn1a`, `Ccl5`, `S100a9`, `Lgals3`), placing partial reprogramming on a **common cross-intervention rejuvenation axis** rather than a unique pathway.
- Transcriptomic tAge moved under reprogramming whereas **DNA-methylation age did *not* respond to some damage perturbations (γ-irradiation, hTERT)** — so the transcriptome and epigenome capture *complementary* aspects of the reset, an important nuance for the "restore the analog layer" claim: the readable functional state (transcriptome) and the stored mark (methylome) can move independently.

This gives the field a quantitative, module-decomposed rejuvenation metric distinct from epigenetic clocks. See [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] and the parallel treatment on [[in-vivo-partial-reprogramming-therapy]].

---

## Cross-references

| Entity | Relationship |
|---|---|
| [[hypotheses/information-theory-of-aging]] (verified) | Unifying mechanistic hypothesis; epigenetic information loss as causal driver; OSK as proposed reversal strategy |
| [[epigenetic-alterations]] (verified) | The hallmark this process directly targets; DNA methylation drift, histone modification loss, heterochromatin erosion |
| [[homo-sapiens]] (verified-partial) | Horvath 2013 epigenetic clock; human clock biomarker foundation; no human interventional data for partial reprogramming |
| [[oct4]] (planned stub) | OCT4/POU5F1 — core OSK transcription factor; pluripotency master regulator |
| [[sox2]] (planned stub) | SOX2 — core OSK transcription factor |
| [[klf4]] (planned stub) | KLF4 — core OSK transcription factor |
| [[c-myc]] (planned stub) | c-MYC — included in OSKM but excluded from safer OSK protocols; proto-oncogene risk |
| [[cellular-senescence]] | Partial reprogramming may reduce senescent cell burden (mechanistic connection unclear; no direct evidence yet cited); senescent cells may resist reprogramming |
| [[genomic-instability]] | ICE model (Yang 2023): DNA double-strand breaks trigger the epigenetic disruption that partial reprogramming reverses; mechanistic coupling of hallmarks |
| [[sirtuin]] | SIRT1/NAD+ axis implicated in epigenetic maintenance; Sinclair group views SIRT1 redistribution from DSB repair as a key epigenetic erosion mechanism |
| [[caloric-restriction]] | Slows DunedinPACE in CALERIE trial; shares sirtuin/NAD+ mechanistic axis with partial reprogramming strategy |
| [[mus-musculus]] | All direct partial reprogramming experiments conducted in mouse; primary caution for human extrapolation |

---

## Limitations and gaps

#gap/needs-human-replication — all direct experimental evidence is mouse-only; no human partial reprogramming data published as of 2026-05-04  
#gap/needs-replication — dominant single-lab provenance (Sinclair group) for strongest OSK claims; Belmonte OSKM/progeria is independent but uses a different system  
#gap/long-term-unknown — no lifespan extension demonstrated in normally aged mice from OSK alone; no long-term safety data on teratoma/de-differentiation risk  
#gap/dose-response-unclear — the gap between "epigenetic rejuvenation" and "full reprogramming → teratoma" is tissue-specific and poorly characterized  
#gap/contradictory-evidence — Schooling 2025 MR null for epigenetic clock causality challenges the theoretical foundation; preliminary but should be monitored  

---

## Footnotes

[^takahashi2006]: doi:10.1016/j.cell.2006.07.024 · in-vitro · n=mouse embryonic + adult fibroblasts · discovery of iPSC induction by OSKM; foundation of reprogramming biology · model: Mus musculus fibroblasts · 26,108 citations; citation_percentile=100; local PDF: pending download (bronze OA)

[^ocampo2016]: [[studies/ocampo-2016-partial-reprogramming]] · in-vivo (cyclic dox-inducible OSKM) · model: LAKI G609G knockin HGPS mouse + 12-month-old wild-type C57BL/6J · doi:10.1016/j.cell.2016.11.052 · local PDF available · 903 citations; citation_percentile=100; FWCI=34.8 · cyclic 2d-on/5d-off OSKM; lifespan extension in progeria model; functional improvement in WT aging contexts; **c-Myc included; progeria model — not natural aging**

[^lu2020]: [[studies/lu-2020-osk-vision-restoration]] · in-vivo (AAV2 intravitreal, two architectures: Tet-Off for optic-nerve-crush primary arm, Tet-On for post-injury and aging arms) · model: Mus musculus C57BL6/J (optic nerve crush in 1- and 3-month-old; aging vision restoration in **3- and 11-month-old (NOT 12-month)**; 12-month-old appears only in DNAm/transcriptomic Extended Data follow-up, not the primary vision cohort; vision restoration absent at 18 months due to corneal opacity; 5- and 20-month-old were systemic AAV9 safety-test animals only) · doi:10.1038/s41586-020-2975-4 · local PDF available · 771 citations · TET1/TET2 required (knockdown abrogated benefits); TET3 not required; **TDG (BER) also required** (Extended Data Fig. 7); custom 1,226-CpG RGC aging signature + ribosomal DNAm clock used (NOT Horvath multi-tissue clock); polycistronic delivery required (monocistronic ineffective); c-Myc excluded (OSK only); **Sinclair group — single-lab**

[^yang2023]: [[studies/yang-2023-epigenetic-information-loss]] · in-vivo (ICE system: I-PpoI DSB induction; multi-tissue) · model: C57BL6/J (ER^T2-I-PpoI + Cre-ER^T2; DSBs induced at 4–6 months; primary phenotypic endpoints assessed ~10 months post-treatment, with animals ~14–16 months old at assessment) · doi:10.1016/j.cell.2022.12.027 · local PDF available · 560 citations; citation_percentile=100; FWCI=108 · ICE mice: epigenetic aging ~50% faster (p<0.0001); OSK reversed DNAme age by up to 57%; **Sinclair group — single-lab; ICE is artificial induction system**

[^schooling2025]: [[studies/schooling-2025-mr-epigenetic-clock-lifespan]] · mendelian-randomization (two-sample MR; IVW primary + WM + MR-Egger sensitivity) · model: human (UK Biobank + 28-cohort GWAS; 4 epigenetic clocks: GrimAge, PhenoAge, HannumAge, IEAA; parental attained age n≈415k fathers/412k mothers; survival to recruitment n=167k men/194k women) · doi:10.1186/s40246-025-00852-4 · local PDF available · 0 citations as of 2026-05-04 — **treat as preliminary** · null associations across all four clocks and both sexes; challenges causal interpretation of clock acceleration → mortality

[^tyshkovskiy2026]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · doi:10.1038/s41586-026-10542-3 · *Nature* 2026 · n=11,165 transcriptomes (4 species) incl. OSKM-reprogramming iPSC datasets · multi-species elastic-net / module-specific transcriptomic clocks; mixed-effects/ANOVA, P_adj<0.05 · model: human primary fibroblast → iPSC + multi-tissue · reprogramming reduced chronological + mortality tAge, strongest in EMT/MET module; rejuvenation signature overlaps CR + embryogenesis (shared Cdkn1a/Ccl5/S100a9/Lgals3 downregulation); transcriptomic vs DNAm clocks capture complementary reset aspects
