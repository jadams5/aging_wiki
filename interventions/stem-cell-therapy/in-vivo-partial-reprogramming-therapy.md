---
type: intervention
aliases: [in-vivo OSK therapy, partial reprogramming therapy, Yamanaka factor therapy, transient reprogramming therapy, epigenetic reprogramming therapy]
mode: stem-cell-therapy
mechanisms: [partial-reprogramming, epigenetic-rejuvenation, transient-pluripotency-factor-expression]
targets: ["[[oct4]]", "[[sox2]]", "[[klf4]]", "[[c-myc]]"]
target-hallmarks: ["[[epigenetic-alterations]]", "[[stem-cell-exhaustion]]", "[[loss-of-proteostasis]]"]
target-pathways: []
human-evidence-level: none
clinical-stage: phase-1
safety-profile: investigational
translation-gap: phase-1-rct-needed
next-experiment: "Phase 2 efficacy readout from Life Biosciences ER-100 (NCT07290244) in optic-nerve-condition Phase 1, expanding the AAV2-OSK intravitreal precedent toward retinal aging indications (dry AMD). Parallel: first-in-human mRNA-LNP-OSK trial in a confined immunologically-privileged compartment (retinal AMD) to validate the transient-by-design modality. Precedent: Lu 2020 retinal OSK in mice."
clinical-trials-active: 1
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Lu 2020, Yang 2023 (Cell), Yang 2023 (Aging), and Lapasset 2011 verified against primary-source PDFs (R23 originals). Browder 2022 and Hou 2013 not locally available (not_oa); footnote claims checked against Crossref metadata and PubMed abstract only — scope limited for those two. 2026-05-08 R34 recency refresh: PubMed/ClinicalTrials.gov v2 cross-checks for Lu 2025 Cell mesenchymal-drift (PMID 40816266), Schoenfeldt 2025 EMBO Mol Med chemical reprogramming + C. elegans lifespan (PMID 40588563), Mitchell 2026 Aging Cell chemical-reprogramming toxicity (PMID 41589348), Picó 2025 Cell Reports comparative reprogrammable strains (PMID 40560729), Haoui 2026 Cell Stem Cell Altos perspective (PMID 41512832), Berdugo-Vega 2026 Neuron engram-cell OSK (PMID 41672073). NCT07290244 (Life Bio ER-100) confirmed RECRUITING; raised clinical-trials-active 0 → 1 reflecting NCT07290244 (was previously listed at clinical-trials-active 0 due to lag — corrected on 2026-05-08)."
---

# In-vivo partial reprogramming therapy

**The intervention:** delivery of Yamanaka reprogramming factors — OCT4, SOX2, KLF4, and optionally c-MYC (OSK or OSKM) — into living somatic tissues via viral vector, mRNA-LNP, or small-molecule mimicry, using pulsed/transient expression schedules to reverse epigenetic age marks **without** inducing pluripotency or erasing cell identity. This page covers the intervention as a clinical-development entity: delivery modalities, industrial pipeline, translation barriers, and trial status.

For the underlying biology (mechanism, experimental evidence, critical caveats, extrapolation table), see [[processes/partial-reprogramming]] (verified). For the narrow AAV-vector-specific view, see [[aav-osk]] (R23b sibling, to be seeded).

---

## The clinical concept

Full Yamanaka reprogramming erases cell identity, creating iPSCs with teratoma potential. **Partial reprogramming** delivers the same factors transiently or cyclically, restoring youthful epigenetic patterns while the cell retains its lineage identity. The core idea is that epigenetic drift — the progressive disorder of methylation and chromatin states — is a **reversible** cause of cellular aging, not merely a correlate (see [[hypotheses/information-theory-of-aging]], verified).

The therapeutic implication: if you can pulse the reprogramming signal, you may be able to "rewind" the epigenetic clock in aged tissues without the safety liabilities of full reprogramming. As of 2026-05-08, **all direct rejuvenation evidence remains preclinical (mouse models for OSK gene therapy; *C. elegans* lifespan extension for chemical reprogramming)**. The first regulated human Phase 1 trial is **NCT07290244** (Life Biosciences ER-100, AAV2-OSK intravitreal in optic-nerve conditions; n=18, RECRUITING since March 2026 [^er100-nct]) — safety-focused with no epigenetic-age efficacy endpoint. No partial-reprogramming trial in any aging-as-indication context has yet been initiated.

---

## Delivery modalities

The modality choice is the central clinical-development question. Each trades off duration of expression, safety, tissue targeting, and manufacturing complexity differently.

### AAV-OSK (current preclinical standard)

Adeno-associated virus (AAV) carrying a polycistronic OSK cassette. The academic gold standard for in-vivo partial reprogramming experiments.

**Lu 2020 (Nature)** — The landmark proof-of-concept: AAV2-mediated OSK delivery to mouse retinal ganglion cells (RGCs) restored axon regeneration after optic nerve crush and reversed vision loss in a glaucoma model. DNA methylation age was restored toward a youthful signature in RGCs [^lu2020]. This study established: (1) tissue-restricted AAV delivery is feasible for OSK; (2) TET1/TET2 demethylases are required (TET3 is not); (3) the retina is a tractable initial target for human translation. #gap/needs-human-replication

**Browder 2022 (Nature Aging)** — Systemic AAV-OSKM in normally aged (25-month) C57BL/6J mice: showed reduced expression of aging-associated gene sets and some markers of tissue aging after 7 months of cyclic expression; did not report lifespan extension as a primary endpoint [^browder2022]. This is the broadest systemic in-vivo test of partial reprogramming in a normally aged (non-progeria) mouse. #gap/needs-replication

AAV liabilities in humans: immunogenicity against the capsid; one-time dosing due to immune memory (re-dosing is blocked); manufacturing scale; tissue-specific serotype matching; no AAV-delivered gene-editing is currently approved for systemic aging indications. For AAV-specific technical considerations, see [[aav-osk]].

### mRNA-LNP-OSK (emerging; transient by design)

Lipid nanoparticle-encapsulated mRNA encoding OSK. Key advantages over AAV:
- **No genome integration** — mRNA does not incorporate into the nucleus; no insertional-mutagenesis risk.
- **Inherently transient** — mRNA half-life in cells is hours to days; multi-factor expression terminates automatically after each dose.
- **Re-dosable** — no lasting immune memory of the delivery vehicle comparable to AAV; multiple doses feasible in principle.
- **Manufacturing precedent** — LNP platform de-risked by COVID-19 mRNA vaccines; manufacturing infrastructure exists.

Liabilities: current LNP formulations traffic predominantly to the liver after systemic dosing; retinal or CNS targeting requires local delivery or modified LNP chemistry. OSK protein half-life post-translation is short; whether sufficient TF dose reaches the nucleus to drive epigenetic changes at clinically meaningful scale has not been demonstrated in aged mammals in published data as of 2026-05-06. #gap/needs-replication

### 2025–2026 field expansion (R34 recency batch)

The 2025–2026 partial-reprogramming literature consolidates several mechanistic advances and provides the first cautionary lifespan/toxicity data in mammals for chemical approaches:

- **Mesenchymal drift as a unifying transcriptomic target (Lu 2025, *Cell*; Altos Labs).** Across 40+ human tissues and 20 diseases, age- and disease-associated upregulation of mesenchymal-fate gene expression ("mesenchymal drift," MD) correlates with mortality and disease progression; OSK partial reprogramming reduces MD prior to dedifferentiation [^lu2025md]. First Altos Labs first-author publication on canonical partial-reprogramming biology.
- **Chemical reprogramming extends *C. elegans* lifespan (Schoenfeldt 2025, *EMBO Molecular Medicine*; Ocampo lab + EPITERNA).** A two-chemical optimized cocktail derived from chemical-induced partial reprogramming improved genomic-instability and epigenetic-alteration markers in aged human cells, ameliorated senescence and oxidative stress, and **extended *C. elegans* lifespan and healthspan in vivo** [^schoenfeldt2025]. This is the first invertebrate lifespan extension via chemical partial reprogramming. EPITERNA is an Ocampo-affiliated commercial spinout.
- **But chemical reprogramming has dose-dependent mammalian toxicity (Mitchell 2026, *Aging Cell*; Gladyshev lab, Harvard).** In genetically-diverse UM-HET3 mice, low-dose chemical-reprogramming-cocktail osmotic-pump infusion **had no transcriptomic-age effect on kidney or liver and only modest OXPHOS expression changes**; high-dose caused drastic body-weight loss requiring euthanasia, hepatic lipid-droplet accumulation, and mitochondrial stress [^mitchell2026chem]. Supersedes the optimistic Yang 2023 *Aging* in-vitro chemical-reprogramming result with an in-vivo mammalian negative finding. **The simple in-vivo translatability of in-vitro chemical reprogramming is now in doubt.** #gap/contradictory-evidence
- **Engram-cell OSK rejuvenates cognition (Berdugo-Vega 2026, *Neuron*; Gräff lab, EPFL).** Cell-type-specific OSK delivery to memory-trace neurons in aged + AD-model mice restored learning and memory to young-mouse levels [^berdugovega2026]. Shifts the field's translation question from "tissue dosing" toward "cell-type-specific dosing" — bypassing the mass-distribution problem.
- **Improved comparative reprogrammable mouse-strain tools (Picó 2025, *Cell Reports*; Ocampo lab).** Continuous OSKM expression remains lethal across strains; cyclic short-term and organ-avoidance variants partially mitigate the body-weight-loss/premature-death liabilities; new strains released as community resources [^pico2025]. Tooling progress, not new biological claims.
- **Altos Labs publishes on ex-vivo organ rejuvenation (Haoui 2026, *Cell Stem Cell*).** First Altos Labs perspective piece outlining a near-term clinical strategy: combining partial reprogramming with ex-vivo machine-perfusion organ-preservation platforms to rejuvenate suboptimal donor organs before transplant [^haoui2026]. Decouples partial-reprogramming clinical translation from systemic in-vivo dosing — applies it to organs in isolation. May be the first commercially deliverable partial-reprogramming product class.
- **Local AAV-OSK in osteoarthritis (Liu 2026, *Experimental & Molecular Medicine*).** Intra-articular AAV-OSK delivery preserved chondrocyte vitality, reduced subchondral bone thickening, promoted cartilage hyalinization in OA mice; TET2-dependent [^liu2026osk]. Adds OA to the validated AAV-OSK indication list.

### Small-molecule / chemical reprogramming

Transcription-factor-free induction of a reprogramming-like epigenetic state using chemical cocktails. Yang et al. 2023 (*Aging*) identified six chemical cocktails (including inhibitors of GSK-3α/β [CHIR-99021], TGF-β [E-616452/RepSox], and epigenetic modifiers including the HDAC inhibitor valproic acid) that partially reverse transcriptomic aging signatures in human senescent fibroblasts in vitro [^yang2023aging]. The primary readout was transcriptomic age (clocks trained on RNA-seq), not DNA methylation-based epigenetic age. No MEK inhibitor is present in these cocktails. #gap/needs-human-replication #gap/needs-replication

Earlier precedent: Hou et al. 2013 (*Science*) generated induced pluripotent-like cells from mouse somatic cells using small molecules only — validating that pluripotency induction does not require protein TFs, in principle [^hou2013]. #gap/needs-human-replication

Chemical approaches are early-stage. The "partial" vs "full" reprogramming distinction is harder to control with small molecules than with transient mRNA. No in-vivo aged-animal data for chemical partial reprogramming has been published in a high-impact venue as of 2026-05-06.

---

## Industrial pipeline (as of 2026-05-08)

| Company | Founders / backing | Modality | Disclosed focus | Status |
|---|---|---|---|---|
| **Life Biosciences** | David Sinclair (co-founder) | AAV2-OSK intravitreal (ER-100) | Optic neuropathies (OAG, NAION); dry AMD as next indication | **Phase 1 RECRUITING** — NCT07290244 [^er100-nct], opened March 2026, n=18, single-dose safety/tolerability [^lu2025md] |
| **Altos Labs** | Eric Verdin (CEO), Richard Klausner; Bezos Expeditions, SoftBank; Shinya Yamanaka on scientific advisory board | Undisclosed (AAV + mRNA + ex-vivo organ perfusion under investigation) | Multi-tissue partial reprogramming; ex-vivo organ rejuvenation (Haoui 2026 perspective) | Preclinical; no IND disclosed as of 2026-05-08; first author-publication output 2025–2026 [^lu2025md][^haoui2026] |
| **NewLimit** | Brian Armstrong (Coinbase), Blake Byers, Jacob Kimmel (CEO) | Proprietary multi-TF combinations (AI/genomics-driven factor discovery), mRNA delivery; not classical OSK | **Liver** as lead program (company-reported age-reversal in aged human hepatocytes; targets post-injury healing, dietary-damage protection, alcohol-recovery); T-cell/immune, metabolic, vascular programs behind it | Preclinical; $435M Series C (Founders Fund-led) June 2026, ~$3.1B valuation; first-in-human planned [^newlimit2026] |
| **Retro Biosciences** | Joe Betts-LaCroix; OpenAI-adjacent backing (Altman) | Undisclosed (partial reprogramming + plasma protein targets) | Longevity platform | Preclinical |
| **EPITERNA SA** | Alejandro Ocampo, Kevin Perez | Chemical reprogramming (small-molecule cocktails) | Lifespan/healthspan extension via chemical partial reprogramming | Preclinical; *C. elegans* in-vivo lifespan extension published 2025 [^schoenfeldt2025] but mammalian in-vivo toxicity issues identified by independent group (Mitchell 2026) [^mitchell2026chem] |

#gap/unsourced — company pipeline details come from publicly available press releases and investor communications, not peer-reviewed publications. Pipeline contents and focus areas change; this table reflects best-available public information as of 2026-05-06 and should be refreshed each lint pass.

---

## Translation barriers

| Barrier | Detail |
|---|---|
| **Cancer risk (OSKM)** | c-MYC is a proto-oncogene; sustained or inadvertently high expression drives tumorigenesis. OSK (without c-Myc) preferred for clinical development. Even OSK: OCT4 and SOX2 have oncogenic co-activity in certain cellular contexts. Long-term tumor surveillance data in aged animals are absent. |
| **Tissue-specific dosing window** | The therapeutic window between "sufficient epigenetic rejuvenation" and "partial/full dedifferentiation" is tissue-specific and not characterized in any human tissue. Post-mitotic cells (neurons, cardiomyocytes) may have tighter windows than cycling cells. |
| **Which biomarker readout** | Epigenetic clocks diverge in their response to interventions (see [[biomarkers/dunedinpace-2022]], [[biomarkers/grimage-2019]], [[biomarkers/horvath-clock-2013]]). The field has not converged on which clock should serve as a primary endpoint in a partial-reprogramming trial; the most intervention-responsive (DunedinPACE) is also the youngest and least validated for this context. |
| **Regulatory novelty** | In-vivo partial reprogramming has no regulatory precedent. It is not a gene therapy in the traditional sense (no therapeutic gene insert), not a small molecule, and not a cell therapy — it falls into a regulatory gray zone. FDA classification will affect manufacturing and trial design requirements. |
| **Delivery to aged tissues** | Aged tissues show reduced AAV transduction efficiency; LNP targeting beyond liver is unproven at scale; small-molecule penetration to specific aged-cell subtypes requires tissue distribution validation. |
| **Replication gap** | The foundational OSK experiments originate from a single laboratory (Sinclair group). Independent systemic replication at scale has not been published as of 2026-05-06. This is the primary epistemic caveat for the entire field. See [[processes/partial-reprogramming]] § Critical caveats. |

---

## Relationship to the information theory of aging

In-vivo partial reprogramming is the **primary proposed therapeutic intervention** of [[hypotheses/information-theory-of-aging]] (verified). That hypothesis holds that aging is caused by the progressive loss of the epigenome's ability to read the genome correctly — analogous to accumulated noise in an analog recording — and that the cell retains a "backup copy" of youthful epigenetic programs accessible via OSK-driven demethylation.

The therapeutic implication follows directly: if the backup is intact and accessible, periodic epigenetic "resets" could, in principle, prevent or reverse age-associated functional decline. Yang 2023 (Cell) is the strongest current evidence that the causal direction runs from epigenetic disruption → accelerated aging and that OSK can reverse it, at least in the ICE artificial-induction mouse model [^yang2023cell].

**The full iPSC reprogramming background:** Lapasset et al. 2011 (*Genes & Development*) showed that full iPSC reprogramming of senescent and centenarian human cells erased all detectable markers of cellular aging — elongating telomeres, restoring youthful gene expression, correcting mitochondrial function [^lapasset2011]. Importantly, this required a six-factor cocktail (OCT4, SOX2, KLF4, c-MYC, NANOG, LIN28 — abbreviated OSKMNL), not the standard four-factor OSKM; the standard four factors failed to efficiently reprogram senescent cells. This is the historical foundation: full reprogramming "resets" aging, but destroys cell identity. Partial reprogramming attempts to harvest only the epigenetic reset component. #gap/needs-replication — erasing aging markers in vitro does not imply clinically useful in-vivo rejuvenation.

**Transcriptomic-clock evidence (2026).** Tyshkovskiy et al. 2026 applied multi-species [[transcriptomic-clock-tage|transcriptomic clocks]] to reprogramming data and found that **iPSC reprogramming reduced both chronological and mortality tAge** (i.e., molecular rejuvenation), with the **strongest rejuvenation signal in the epithelial-to-mesenchymal-transition (EMT/MET) module clock**, consistent with the dedifferentiation and mesenchymal-to-epithelial transition that drives early reprogramming [^tyshkovskiy2026]. This gives reprogramming a quantitative, pathway-resolved rejuvenation readout, and — importantly — the same study showed reprogramming's rejuvenation signature **overlaps those of caloric restriction and embryonic "ground zero" rejuvenation** (shared down-regulation of `Cdkn1a`, `Ccl5`, `S100a9`, `Lgals3`), tying partial reprogramming to a common cross-intervention rejuvenation axis. Notably, transcriptomic tAge moved under reprogramming whereas DNA-methylation age did *not* respond to some damage perturbations (γ-irradiation, hTERT) — so transcriptomic and epigenetic clocks capture complementary aspects of the reset.

---

## Extrapolation table (preclinical → human)

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | partial | OCT4/SOX2/KLF4 are human TFs; TET demethylase mechanism conserved; but specific aging-relevant CpG loci differ between mouse and human epigenetic clocks |
| Phenotype conserved in humans? | unknown | No human somatic-cell partial reprogramming data published as of 2026-05-06 |
| Replicated in humans? | no | All direct partial reprogramming experiments in mouse models only |

---

## Limitations and gaps

#gap/needs-human-replication — No human partial reprogramming study has been published or initiated.

#gap/needs-replication — Core OSK/OSKM in-vivo rejuvenation claims are from a single laboratory (Sinclair group at Harvard); Ocampo 2016 (Belmonte group) is independent support but uses a different system (OSKM, progeria model). Systemic independent replication is lacking.

#gap/long-term-unknown — No completed study has demonstrated that cyclic OSK/OSKM extends maximum lifespan in normally aged mice from a standard laboratory strain (as distinct from progeria models).

#gap/dose-response-unclear — The therapeutic window between epigenetic rejuvenation and partial dedifferentiation has not been systematically characterized in aged animals, let alone humans. Tissue-specific dosing parameters are unknown.

#gap/unsourced — Industrial pipeline entries sourced from public communications, not peer review. Refresh at each lint pass.

---

## Cross-references

- [[processes/partial-reprogramming]] — canonical page for underlying biology, mechanism, and experimental evidence; do not duplicate here
- [[aav-osk]] — R23b sibling page; AAV-specific delivery modality view (to be seeded)
- [[hypotheses/information-theory-of-aging]] — theoretical framework; partial reprogramming is its primary therapeutic implication
- [[oct4]], [[sox2]], [[klf4]], [[c-myc]] — protein pages for the four Yamanaka factors
- [[epigenetic-alterations]] — primary target hallmark
- [[stem-cell-exhaustion]] — secondary target hallmark
- [[loss-of-proteostasis]] — potential downstream benefit (contested; not directly shown)
- [[biomarkers/horvath-clock-2013]], [[biomarkers/grimage-2019]], [[biomarkers/dunedinpace-2022]] — candidate trial endpoint clocks
- [[interventions/stem-cell-therapy/hematopoietic-stem-cell-transplantation]] — sibling stem-cell-therapy page
- [[interventions/stem-cell-therapy/mesenchymal-stem-cell-therapy]] — sibling stem-cell-therapy page
- [[interventions/stem-cell-therapy/ipsc-derived-cell-therapy]] — sibling stem-cell-therapy page
- [[interventions/gene-therapy/aav-osk]] — alternative classification view of AAV-delivered OSK (gene-therapy framing)

---

## Footnotes

[^lu2020]: doi:10.1038/s41586-020-2975-4 · in-vivo · n= not a single-n study (AAV2-OSK delivery to mouse RGCs across multiple cohorts: aged wild-type, optic nerve crush, glaucoma model) · model: aged C57BL/6J mice; retinal ganglion cells · Lu Y et al., *Nature* 2020 · PDF downloaded locally · restored axon regeneration, vision, and youthful DNA methylation in RGCs; TET1/TET2 demethylase required, TET3 not required #gap/needs-human-replication

[^browder2022]: doi:10.1038/s43587-022-00183-2 · in-vivo · model: aged C57BL/6J mice (25-month baseline; AAV-OSKM, 7 months cyclic expression) · Browder KC et al., *Nature Aging* 2022 · not locally downloaded (not_oa) · reduced aging-associated gene-expression signatures systemically in normally aged mice; lifespan extension not a primary endpoint #gap/needs-replication

[^yang2023cell]: doi:10.1016/j.cell.2022.12.027 · in-vivo + in-vitro · model: C57BL/6J ICE mice (inducible DSB system; OSK delivered via AAV); human cells in vitro · Yang JH, Hayano M et al., *Cell* 2023 · PDF downloaded locally · ICE mice showed ~50% faster epigenetic age advance; OSK reversed up to ~57% of clock advance; provides causal evidence for epigenetic-disruption → accelerated aging direction #gap/needs-replication (ICE is an artificial induction system)

[^yang2023aging]: doi:10.18632/aging.204896 · in-vitro · model: human replicatively senescent fibroblasts (n=3 per condition, p-adj < 0.05) · Yang JH, Petty CA et al., *Aging (Albany NY)* 2023 · PDF downloaded locally · six chemical cocktails (C1–C6, including CHIR-99021 [GSK-3α/β inhibitor], E-616452/RepSox [TGF-β inhibitor], valproic acid [HDAC inhibitor], tranylcypromine, forskolin, and others; no MEK inhibitor) reversed transcriptomic age in human senescent fibroblasts in vitro; primary readout: transcriptomic clock (RNA-seq based); cell identity preserved (no pluripotency markers induced); cocktails C1–C3 most effective, reducing transcriptomic chronological age by >3 years in four days #gap/needs-human-replication #gap/needs-replication

[^hou2013]: doi:10.1126/science.1239278 · in-vitro · model: mouse somatic cells · Hou P et al., *Science* 2013 · not locally downloaded (not_oa) · pluripotent stem cells induced from mouse fibroblasts using small-molecule cocktail only (no TF overexpression); proof-of-concept that TFs are dispensable for full reprogramming in mouse cells #gap/needs-human-replication

[^lapasset2011]: doi:10.1101/gad.173922.111 · in-vitro · model: senescent (74-year-old donor) and centenarian (92–101-year-old donors) human fibroblasts · Lapasset L et al., *Genes & Development* 2011 · PDF downloaded locally · full iPSC reprogramming with a six-factor cocktail (OCT4, SOX2, KLF4, c-MYC, NANOG, LIN28; OSKMNL) erased all detectable aging markers (telomere length, gene expression, mitochondrial function) in senescent/centenarian cells; standard four-factor OSKM did not efficiently reprogram senescent cells; foundational evidence that the epigenetic aging program is reversible via full pluripotency induction; note: full reprogramming, not partial reprogramming #gap/needs-replication

[^lu2025md]: doi:10.1016/j.cell.2025.07.031 · Lu JY, Tu WB, Li R et al. (Izpisua Belmonte group, Altos Labs) · in-vivo + in-silico · *Cell* 2025 · 188(21):5895–5911.e17 · model: gene expression analysis across 40+ human tissues and 20 diseases; OSK partial reprogramming validation in human and mouse cells · identified pervasive "mesenchymal drift" (MD) — upregulation of mesenchymal-fate TFs across cell types in aging/disease — that correlates with reduced patient survival; OSK reduces MD before dedifferentiation; suppression of MD TFs sufficient for epigenetic rejuvenation · Altos Labs first-author publication · disclosure: all authors Altos Labs employees · PMID 40816266 · R34 recency add

[^schoenfeldt2025]: doi:10.1038/s44321-025-00265-9 · Schoenfeldt L, Paine PT, Picó S et al. (Ocampo lab + EPITERNA, U Lausanne) · in-vivo + in-vitro · *EMBO Molecular Medicine* 2025 · 17(8):2071–2094 · model: aged human cells (chemical-induced partial reprogramming); *C. elegans* in vivo · two-chemical optimized cocktail improved genomic instability + epigenetic alterations in aged human cells, ameliorated cellular senescence + oxidative stress, **extended C. elegans lifespan and healthspan in vivo** · PMID 40588563; PMC12340157 (OA) · disclosure: Perez & Ocampo are EPITERNA co-founders/shareholders · R34 recency add

[^mitchell2026chem]: doi:10.1111/acel.70390 · Mitchell W, de Magalhães CG, Tyshkovskiy A et al. (Gladyshev lab, Brigham & Women's / Harvard) · in-vivo + in-vitro · *Aging Cell* 2026 · 25(2):e70390 · model: aged mouse fibroblasts in vitro; UM-HET3 genetically-diverse middle-aged male mice in vivo · in vitro: chemical reprogramming alters mitochondrial cristae morphology, increases mitochondrial size and fusion. **In vivo via implantable osmotic pump:** low dose well-tolerated but no transcriptomic-age effect on kidney/liver, only modest OXPHOS expression changes; high dose caused drastic body-weight loss requiring euthanasia, hepatic lipid-droplet accumulation, mitochondrial stress · supersedes overoptimistic in-vitro chemical-reprogramming framing; first negative in-vivo mammalian result · PMID 41589348; PMC12835892 (OA) · #gap/contradictory-evidence — directly contradicts EPITERNA C. elegans result [^schoenfeldt2025] in mammalian context · R34 recency add

[^berdugovega2026]: doi:10.1016/j.neuron.2025.11.028 · Berdugo-Vega G, Sierra C, Astori S et al. (Gräff lab, EPFL) · in-vivo · *Neuron* 2026 · 114(6):1102–1116.e7 · model: aged WT + Alzheimer's-model mice; engram-cell-targeted OSK gene therapy · cell-type-specific OSK delivery to memory-trace neurons reversed senescence + AD-related cellular hallmarks, restored synaptic-plasticity epigenetic-transcriptional patterns, counteracted AD neuronal hyperexcitability, recovered learning/memory to young-mouse levels · first cognitive-rejuvenation via cell-type-specific OSK · PMID 41672073 · R34 recency add

[^pico2025]: doi:10.1016/j.celrep.2025.115879 · Picó S, Vílchez-Acosta A, Agostinho de Sousa J et al. (Ocampo lab, U Lausanne / EPITERNA) · in-vivo · *Cell Reports* 2025 · 44(7):115879 · model: comparative reprogrammable mouse strains · continuous in-vivo OSKM expression remains lethal; cyclic short-term and organ-avoidance variants mitigate weight-loss/premature-death liabilities; new strains released as community tools · PMID 40560729 · R34 recency add

[^haoui2026]: doi:10.1016/j.stem.2025.12.011 · Haoui M, Reddy P, Izpisua Belmonte JC (Altos Labs) · perspective · *Cell Stem Cell* 2026 · 33(1):13–28 · proposes near-term clinical strategy: combining partial reprogramming with ex-vivo machine-perfusion donor-organ-rejuvenation platforms; decouples partial-reprogramming clinical translation from systemic in-vivo dosing · disclosure: all authors Altos Labs · PMID 41512832 · R34 recency add — first Altos Labs perspective on commercial deliverable

[^liu2026osk]: doi:10.1038/s12276-026-01662-x · Liu YW, Zou JT, Gong JS et al. (Wang ZX group, Xiangya Hospital + Central South University) · in-vivo + in-vitro · *Experimental & Molecular Medicine* 2026 · 58(3):782–797 · intra-articular AAV-OSK in OA mouse models preserved chondrocyte vitality (no stemness-marker upregulation), reduced subchondral bone thickening, promoted cartilage hyalinization, reduced senescence + DNMT expression; TET2 identified as pivotal mediator · PMID 41786976; PMC13049178 (OA) · R34 recency add

[^newlimit2026]: **Company-reported / non-peer-reviewed** — NewLimit Series C announcement (blog.newlimit.com, "NewLimit raises $435M led by Founders Fund," 2026) + BioSpace coverage (biospace.com, "NewLimit snags $435M after seeing age reversal in human liver cells," 2026). $435M Series C led by Founders Fund (Thrive, Greenoaks, Quiet, Kleiner Perkins, Eli Lilly Ventures, others); ~$3.1B valuation. Founded 2021 by Brian Armstrong, Blake Byers, Jacob Kimmel (CEO). Lead **liver** program reportedly reversed cellular-age signatures in aged human liver cells in vitro, accelerating the timeline to first-in-human trials. **No peer-reviewed publication or registered trial (ClinicalTrials.gov) located as of 2026-06-04**; all figures are investor-communication / press claims, not independently verified data. #gap/unsourced #gap/needs-replication

[^er100-nct]: NCT07290244 · "Evaluating ER-100 for Safety in People With Glaucoma or Non-Arteritic Anterior Ischemic Optic Neuropathy (Optic Nerve Conditions)" · Sponsor: Life Biosciences Inc. · Phase 1 single-dose · n=18 (planned) · status (as of 2026-05-08): RECRUITING · started 2026-03-02; primary completion estimated 2027-05; full completion 2032-03 · indications: open-angle glaucoma + NAION · primary endpoint: safety/tolerability through dox-activation period · ClinicalTrials.gov v2 API verified 2026-05-08

[^tyshkovskiy2026]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · doi:10.1038/s41586-026-10542-3 · *Nature* 2026 · n=11,165 transcriptomes (4 species) incl. OSKM-reprogramming iPSC datasets · multi-species elastic-net/module-specific transcriptomic clocks; mixed-effects/ANOVA, P_adj<0.05 · model: human primary fibroblast → iPSC + multi-tissue · reprogramming reduced chronological + mortality tAge, strongest in EMT/MET module; rejuvenation signature overlaps CR + embryogenesis
