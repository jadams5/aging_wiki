---
type: intervention
aliases: [AAV-OSK, AAV-OSKM, AAV9-OSK, doxycycline-inducible OSK, AAV-OCT4-SOX2-KLF4]
mode: gene-therapy
mechanisms: [partial-reprogramming, transient-pluripotency-factor-expression]
targets: ["[[oct4]]", "[[sox2]]", "[[klf4]]"]
target-hallmarks: ["[[epigenetic-alterations]]", "[[stem-cell-exhaustion]]"]
target-pathways: []
human-evidence-level: none
clinical-stage: preclinical
safety-profile: investigational
translation-gap: preclinical-only
next-experiment: "First-in-human AAV-OSK (ER-100) dose-escalation in dry AMD / open-angle glaucoma with methylation-clock readouts at retinal biopsy; n=15–30 (Phase 1 NCT07290244 by Life Biosciences is underway as of 2026-05-06 with n=18 in optic conditions; dry-AMD arm still preclinical)."
clinical-trials-active: 1
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Lu 2020, Ocampo 2016, and Yang 2023 primary-source PDFs read end-to-end and cross-checked (R23 originals). Browder 2022 is not_oa (no local PDF) — quantitative n values and transcriptomic claims not independently verified; body notes this. Macip 2024 PDF download failed (hybrid OA, status: failed) — +109% lifespan claim and human-keratinocyte claim unverified against full text; body notes this. Canonical-database identity fields not applicable (intervention page, no UniProt/PubChem). 2026-05-08 R34 recency refresh: PubMed abstracts cross-checked for Liu 2026 Exp Mol Med (osteoarthritis AAV-OSK; PMID 41786976), Berdugo-Vega 2026 Neuron (engram-cell OSK; PMID 41672073), Pernomian 2025 Circ Res (endothelial OSK; PMID 40899274), Picó 2025 Cell Reports (comparative reprogrammable strains; PMID 40560729). NCT07290244 status reconfirmed via ClinicalTrials.gov v2 API."
---


# AAV-OSK gene therapy

AAV-mediated delivery of OCT4, SOX2, and KLF4 (OSK) — the three Yamanaka transcription factors minus c-Myc — to induce transient partial reprogramming in aged somatic cells in vivo. Expression is controlled by a doxycycline-inducible Tet-on cassette, allowing the experimenter to terminate OSK activity before cells undergo full dedifferentiation. The foundational result (Lu 2020) demonstrated epigenetic age reversal and functional vision restoration in aged and glaucomatous mice using AAV2 intravitreal delivery [^lu2020]. Systemic delivery in aged mice via AAV9 IV (Browder 2022) showed broad multi-tissue epigenetic changes without full reprogramming [^browder2022]. **All anti-aging evidence is preclinical (Mus musculus).** As of 2026-05-06, one Phase 1 trial (NCT07290244, Life Biosciences ER-100) is recruiting for safety in optic nerve conditions.

For the underlying biology — what epigenetic reprogramming is, how OSK restores the epigenetic landscape, and the information-theory framework — see [[partial-reprogramming]]. For the broader clinical-development pipeline across all partial-reprogramming modalities (mRNA, small-molecule, AAV), see [[in-vivo-partial-reprogramming-therapy]]. This page covers **AAV-vector-specific implementation**: serotype choice, cassette architecture, expression-control tradeoffs, and AAV-specific translation barriers.

---

## Vector context

AAV biology is covered in depth on [[aav-tert]]; key facts relevant to OSK delivery are summarized here without duplication.

Adeno-associated viruses are ~25 nm non-enveloped ssDNA parvoviruses. As gene-therapy vectors they are predominantly **non-integrating** (episomal), reducing insertional mutagenesis risk. Episomal genomes persist stably in post-mitotic tissues (neurons, retinal ganglion cells, cardiomyocytes) but are diluted by division in proliferating cells. The standard packaging limit is ~4.7 kb; the OSK coding sequence for all three factors requires a split-vector or high-capacity approach, which is discussed in cassette design below.

**Key difference from AAV-TERT:** AAV-TERT encodes a single catalytic subunit (~3.4 kb) that is constitutively expressed; its safety rests on episomal dilution in dividing cells. AAV-OSK must encode three large transcription factors whose combined expression, if sustained, will fully dedifferentiate cells and cause teratoma. The Tet-on inducible system is not optional — it is a **safety-critical design element**.

---

## Cassette design

### Doxycycline-inducible Tet-on architecture

The Lu 2020 design [^lu2020] uses a **reverse tetracycline transactivator (rtTA)** constitutively expressed from one AAV vector paired with a second AAV encoding OSK under a TRE3G (Tet-responsive element) promoter. In the absence of doxycycline, OSK expression is negligible. Doxycycline administration activates rtTA→TRE3G→OSK transcription; Lu 2020 used 1 mg/mL dox in drinking water for systemic AAV9 delivery and 2 mg/mL for intravitreal AAV2 delivery. Removal of doxycycline silences expression within 24–72 hours.

**Note on system architecture in Lu 2020:** The optic nerve crush experiments used a **Tet-Off** AAV2 system (Tet-Off AAV2s carrying OSK as a polycistron; doxycycline suppresses expression in this configuration). Subsequent experiments in aged mice and the glaucoma model used a **Tet-On** AAV2 system (doxycycline activates expression). Both Tet-Off and Tet-On AAV2 systems were employed in different experimental arms of the same paper [^lu2020]; the systemic safety experiments used Tet-On AAV9.

This pulse-control allows:
1. **Terminating expression** before full dedifferentiation: OSK activation for 3–4 weeks appears sufficient to shift DNA methylation patterns toward a younger state without erasure of cell-identity genes [^lu2020]
2. **Cycling**: multiple dox-on / dox-off cycles have been applied in aged mice (Ocampo 2016 OSKM fast-cycling protocol; 2-day-on / 5-day-off) [^ocampo2016]
3. **Tunable dosing** across different tissues: expression level depends on rtTA concentration (determined by the initial AAV dose) and dox concentration — but this is coarse, not fine-grained

**Limitation:** AAV expression is set at the time of administration. Post-injection, the maximum OSK output is fixed by transduction efficiency. The experimenter can only gate expression on/off via doxycycline — there is no dose-response titration of OSK protein level after the initial administration. See §Translation barriers.

### OSK vs OSKM: the c-Myc tradeoff

The original Yamanaka iPSC protocol used all four factors (OSKM). Most in-vivo aging applications use **OSK only**, omitting c-Myc, for two reasons:

1. **c-Myc (MYC) is a potent proto-oncogene.** Constitutive or near-constitutive MYC expression drives cell-cycle entry and is an initiating event in many cancers. In short-lived mice this risk is partially masked by short observation windows; in humans it is not acceptable. Ocampo 2016 did use OSKM in the fast-cycling protocol [^ocampo2016], and observed teratoma formation in the liver, kidney, and pancreas when mice carried **two copies** of the OSKM polycistron cassette after 8 weeks of cyclic dox (and rapid weight loss and death within 4 days under continuous dox) — a cautionary result that argues directly for OSK-only designs in human translation.
2. **OSK is sufficient for epigenetic rejuvenation.** Lu 2020 showed that OSK without c-Myc restores youthful methylation patterns and functional vision recovery in mice [^lu2020]; the mechanistic contribution of c-Myc appears to be primarily accelerating reprogramming kinetics, not qualitatively changing the epigenetic reset.

---

## Serotype and delivery routes

| Serotype | Route | Target tissue | Key study |
|---|---|---|---|
| AAV2 | Intravitreal injection | Retinal ganglion cells | Lu 2020 [^lu2020] |
| AAV9 | Intravenous (systemic) | Multi-tissue (liver, muscle, heart, brain) | Browder 2022 [^browder2022] |
| AAV-PHP.eB | Intrathecal / IV (research only) | CNS-specific; not clinical-grade | Preclinical only; no aging study cited |

**AAV2 intravitreal (Lu 2020):** AAV2 has well-established retinal tropism; intravitreal injection produces high transduction efficiency in retinal ganglion cells (RGCs) with minimal systemic spread. This anatomical containment limits both efficacy (retina only) and off-target oncogenic risk. Lu 2020 demonstrated OSK-driven restoration of youthful DNA methylation in RGCs, axon regeneration after optic nerve crush, and recovery of visual acuity in aged mice (3- and 11-month-old mice in the vision experiment; 12-month-old mice in the transcriptomic and RGC-survival follow-up analyses) [^lu2020]. This route is the basis for the Life Biosciences ER-100 Phase 1 trial targeting open-angle glaucoma and NAION.

**AAV9 systemic (Browder 2022):** Browder et al. delivered AAV9-encoded OSK (Tet-on) by IV injection to aged (12-month-old) wild-type C57BL/6 mice and measured multi-tissue transcriptomic and methylation changes after four 4-week dox cycles [^browder2022]. They reported partial reversal of age-associated transcriptomic signatures in multiple tissues without frank dedifferentiation. Critically, this study used naturally aged wild-type mice — not a disease or injury model — making it the closest preclinical analog to "aging as the indication." #gap/needs-replication

**AAV9 in very old mice (Macip 2024):** Macip et al. administered Tet-on AAV9-OSK to 124-week-old mice (approximately 2.5 human decades equivalent, elderly by mouse standards) and reported +109% median remaining lifespan vs. controls, with improvements in frailty score [^macip2024]. This result is striking and requires independent replication; the study was published in *Cellular Reprogramming* (lower-tier journal for an effect of this magnitude) and has not yet been replicated in an ITP-style multi-site protocol. #gap/needs-replication

---

## Key preclinical studies

### Lu 2020 — retinal ganglion cells, glaucoma model

Sinclair group (Harvard). AAV2 intravitreal delivery of OSK (using both Tet-Off and Tet-On systems in different experimental arms) to:
- **Aged mice** (3- and 11-month-old in the vision-restoration arm; 12-month-old in transcriptomic follow-up): restored youthful DNA methylation patterns in RGCs; improved visual acuity by OMR and PERG. Restoration of visual acuity was **not** seen in 18-month-old mice (likely due to age-dependent corneal opacity interfering with assessment).
- **Optic nerve crush model**: Tet-Off AAV2-OSK induced axon regeneration post-crush, with axons extending >5 mm into the chiasm after 12–16 weeks of induction; RGC survival doubled in 12-month-old mice vs controls.
- **Glaucoma model** (elevated intraocular pressure via microbead injection): OSK restored axon density to non-glaucomatous levels and partially restored visual acuity; the authors described this as the first demonstration of vision-loss reversal after glaucomatous injury has occurred.
- **Systemic safety experiment** (separate cohort, not the vision animals): young (5-month-old) and aged (**21-month-old**, not 20-month) mice received AAV9-rtTA + TRE-OSK by IV injection; 10–18 months of continuous OSK induction showed no increase in tumor incidence or negative effects on overall health [^lu2020].
- **Young mice** (optic experiments): no deleterious effect from OSK activation — important safety signal at the cell level [^lu2020]

Mechanistically, the authors proposed that OSK restores the epigenetic "backup copy" of youthful gene-expression patterns — consistent with the [[hypotheses/information-theory-of-aging]] framework (Sinclair group). DNA damage was required as a trigger: methylation drift occurred when double-strand breaks were induced, and OSK reversed this drift, supporting a causal role for DNA-damage-driven epigenetic noise. The beneficial effects of OSK required TET1 and TET2 DNA demethylases (knockdown of either abrogated axon regeneration and vision recovery).

### Ocampo 2016 — systemic OSKM fast-cycling, progeria and aged mice

Belmonte group (Salk). Used a different approach: constitutive OSKM (all four factors) under a fast-cycling doxycycline protocol (2 days on / 5 days off) in two contexts [^ocampo2016]:
- **Hutchinson–Gilford progeria mice** (LMNA G609G mutation, "LAKI 4F" mice carrying the 4F cassette): dramatic increase in median and maximal lifespan; improved histology in skin, spleen, kidney, stomach, and aorta (necropsy at 14 weeks)
- **Naturally aged wild-type 4F mice** (12-month-old mice carrying the 4F cassette but not previously induced): reduced molecular aging markers (H3K9me3, H4K20me3, β-galactosidase activity) in liver, spleen, kidney; improved pancreatic regeneration and muscle repair following injury

**Oncogenicity signal:** Continuous dox (OSKM on) caused rapid weight loss and death within 4 days in 4F mice. Cyclic induction in mice carrying **two copies** of the OSKM polycistron cassette caused cell proliferation and teratoma in liver, kidney, and pancreas after 8 weeks. The single-copy cyclic protocol (2 days on / 5 days off) was safe in short-term experiments with no dysplasia, cancer, or pluripotency markers in any organ. This directly motivated the shift to OSK (omitting c-Myc) and to single-copy cassette designs in subsequent work. The "2-day on / 5-day off" framing is now a benchmark for pulsed partial reprogramming in mice but has not been validated in any longer-lived organism. #gap/needs-human-replication

### Browder 2022 — systemic AAV9-OSK in naturally aged WT mice

Belmonte group (Salk). Most clinically relevant preclinical study for the "aging as indication" framing. Key details [^browder2022]:
- Naturally aged C57BL/6 mice; n details not confirmed here — verifier to cross-check
- Systemic IV AAV9 delivery of Tet-on OSK
- Four 4-week doxycycline cycles
- Outcome: reversal of age-associated gene-expression changes in kidney, muscle, and brain; no tumor signal in the observation window
- Epigenetic (methylation) changes were tissue-specific and directionally toward younger patterns

**Limitations of Browder 2022:** Closed-access; PDF not available in archive. Observation window is limited to the duration of the experiment — long-term cancer risk is not characterized. #gap/long-term-unknown

### 2025–2026 expansion — tissue-specific AAV-OSK applications (R34 recency batch)

The 2025–2026 literature has expanded AAV-OSK from systemic and retinal applications into specific aged-disease contexts, broadening the proof-of-concept beyond the Lu/Browder/Ocampo canon. None of these are aging-as-indication studies — they target specific age-associated pathologies — but they materially strengthen the partial-reprogramming-via-AAV evidence base:

- **Osteoarthritis (Liu 2026, *Experimental & Molecular Medicine*).** Intra-articular AAV-OSK delivery in OA mouse models preserved chondrocyte vitality, reduced subchondral bone thickening, and promoted cartilage hyalinization without inducing stemness markers in chondrocytes. TET2 was identified as the pivotal demethylase mediating OSK-driven cartilage regeneration — paralleling the TET1/TET2 dependence in Lu 2020 retina [^liu2026osk]. Local delivery in a closed joint compartment is a translationally tractable route.
- **Cognitive rejuvenation via engram-cell OSK (Berdugo-Vega 2026, *Neuron*).** Targeted OSK gene therapy delivered to memory-trace (engram) neurons in aged and Alzheimer's-model mice reversed senescence- and disease-related transcriptional patterns, restored synaptic plasticity gene expression, suppressed AD-typical neuronal hyperexcitability, and recovered learning/memory to young-animal levels [^berdugovega2026]. First demonstration that cell-type-specific (rather than tissue-wide) OSK delivery to a defined neural population can produce behavioral cognitive rejuvenation. Engram-cell targeting bypasses the systemic dosing problem.
- **Endothelial OSK lowers blood pressure (Pernomian 2025, *Circulation Research*).** Single-shot lentiviral OSK under the Cdh5 endothelial-specific promoter (BPH/2J hypertensive mouse strain) reduced blood pressure, attenuated endothelial-to-mesenchymal transition (EndMT), restored eNOS/NO and reduced ROS in human aortic ECs from hypertensive patients in vitro [^pernomian2025]. Demonstrates that **lineage-restricted OSK delivery** (Cdh5-promoter EC-specific) is sufficient for systemic phenotypic effects.
- **Mesenchymal drift as a unifying target (Lu 2025, *Cell* — Altos Labs).** Across 40+ human tissues and 20 diseases, age- and disease-associated upregulation of mesenchymal-fate genes ("mesenchymal drift," MD) correlates with mortality risk; OSK partial reprogramming reduces MD prior to dedifferentiation, providing a mechanistic frame for what partial reprogramming is doing at the transcriptomic level beyond DNAm clock reversal [^lu2025md]. First Altos Labs first-author publication on the canonical partial-reprogramming biology.
- **Comparative reprogrammable strains (Picó 2025, *Cell Reports*).** Systematic comparison of multiple reprogrammable mouse strains identified that **continuous OSKM expression remains lethal** but tissue-restricted (organ-avoidance) cassettes mitigate the body-weight loss and premature death observed with prior 4F constructs — providing improved tools for the field [^pico2025]. Important safety-tooling result, though not a new biological claim.
- **Organ-specific dedifferentiation review (Jo 2025, *Aging Cell*).** Synthesis of organ-by-organ in-vivo reprogramming data; flags that dedifferentiation/teratoma risk and therapeutic windows are tissue-specific (retina, skeletal muscle, heart, liver, brain, intestine differ) [^jo2025]. Supports the case that AAV-OSK trials must be tissue-targeted from the outset.

These results sharpen the field's trajectory: the locus of activity has shifted from "does OSK rejuvenate?" (answered yes in mice across tissues) toward "which tissue, which cell type, which delivery vehicle, and which expression schedule" — i.e., translation engineering rather than basic mechanism. Cancer-risk and dose-response questions remain open.

### Yang 2023 — epigenetic information loss as causal mechanism

Sinclair group (Harvard). Not an AAV-OSK intervention study per se, but the mechanistic companion to Lu 2020 [^yang2023]:
- Used ICE (Inducible Changes to the Epigenome) mice: inducible DSBs via tamoxifen-activated I-PpoI endonuclease, without causing sequence mutations (confirmed by whole-genome sequencing)
- ICE mice were treated at **4–6 months old** for 3 weeks; phenotypic assessments were conducted at **10 months post-treatment** (animals ~14–16 months of age at key measurements; muscle mass data specifically at 16 months of age)
- Demonstrated that DNA damage → methylation drift → aging phenotypes (reduced body weight, fat mass, respiratory exchange ratio, reduced motion, impaired cognition, reduced muscle mass and endurance), causally and in the absence of mutations
- OSK (delivered by AAV) reversed DNAm age in ICE mice by **up to 57%** based on four independent mouse methylation clocks; also restored H3K9me3 and H3K36me2 markers in kidney and muscle to levels resembling unaffected controls after 5 weeks of AAV-delivered OSK
- OSK expression in RGCs of ICE mice returned mRNA levels to a more youthful pattern (p < 0.0001)
- **No primate/marmoset experiments** are reported in this paper; any such claim is unsourced. #gap/unsourced

This study provides the mechanistic foundation for why OSK works: it is not merely a coincidental effect but a restoration of epigenetic information that was disrupted by DNA-damage-driven noise, consistent with the Information Theory of Aging. Cross-link: [[hypotheses/information-theory-of-aging]].

---

## Extrapolation table

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | OCT4/SOX2/KLF4 are human transcription factors; Tet-on systems function in human cells; Lu 2020 demonstrated OSK reverses DNAm age in differentiated human neurons in vitro |
| Phenotype conserved in humans? | partial | Lu 2020 shows OSK promotes axon regeneration in human SH-SY5Y-derived neurons (Tet2-dependent); full-organism human analog not tested; primate in-vivo data absent |
| Replicated in humans? | no | Phase 1 NCT07290244 (optic nerve) is safety-focused; no human epigenetic-age readout yet |

---

## Translation barriers specific to AAV-OSK

### 1. Expression is not finely tunable post-administration

Unlike small-molecule dosing (which can be titrated and stopped), AAV delivery sets expression capacity at a single point in time. The only control lever post-injection is doxycycline (on/off). If the initial viral dose is too high — producing supraphysiological OSK upon dox induction — there is no clinical mechanism to reduce expression. This is a **fundamental asymmetry**: overdosing is irreversible in a way that small-molecule overdosing typically is not. Dose-finding in animal models does not cleanly predict safe transduction levels in individual humans due to variability in AAV tropism, immune status, and target-tissue volume. #gap/dose-response-unclear

### 2. Pre-existing AAV immunity in adults

A substantial fraction of the adult population carries neutralizing antibodies (NAbs) against common AAV serotypes. NAb seroprevalence against AAV9 in adults is estimated at ~20–50% (figures vary by region and assay; specific citation #gap/unsourced — verifier to identify primary seroprevalence study). NAbs substantially reduce transduction efficiency and can trigger immune responses. Consequences for clinical translation:
- Pre-screening for AAV9 NAbs will likely be required, reducing the eligible population
- Re-dosing is difficult or impossible once NAbs are generated (even a single AAV administration induces a neutralizing response)
- For an aging intervention intended to be applied repeatedly over decades, single-dose AAV delivery may be mechanistically insufficient

### 3. Cancer risk in long-lived organisms

Mouse lifespan (2–3 years) is ~30x shorter than human lifespan. Even the longest mouse study (Macip 2024, 124-week start) [^macip2024] covers a tiny fraction of the latency period over which cancer would emerge in a human given OSK-driven epigenetic perturbation. While OSK-without-c-Myc is safer than OSKM, OCT4 and SOX2 are both expressed in embryonic stem cells and certain cancers; their role in cancer biology is not trivial. The absence of increased tumor incidence in 2–3-year mouse studies provides weak evidence regarding cancer risk over a 30–50-year human post-treatment horizon. #gap/long-term-unknown #gap/needs-human-replication

### 4. Payload size

The Tet-on OSK system requires encoding rtTA (~1.1 kb), TRE3G promoter, and three transcription factors (OCT4 ~1.1 kb, SOX2 ~1.0 kb, KLF4 ~1.4 kb). The combined coding payload exceeds the ~4.7 kb AAV capacity, necessitating a **two-vector system** (one AAV for rtTA driver; one AAV for TRE3G-OSK). This doubles the manufacturing complexity, the immune-stimulation burden, and the probability of incomplete co-transduction of target cells. Cells that receive only the driver but not the responder (or vice versa) will not produce OSK — creating heterogeneous transduction. Newer high-capacity or over-sized AAV approaches are under development but not yet clinical-grade. #gap/unsourced

---

## Industrial activity

- **Life Biosciences (Boston)** — ER-100 is their AAV-OSK product for optic nerve conditions. Phase 1 (NCT07290244) opened March 2026; n=18; primary endpoint: safety and tolerability through dox-activation period. The optic nerve indication mirrors Lu 2020 directly (intravitreal AAV2-OSK; retinal ganglion cells). Life Biosciences is co-founded by David Sinclair (Harvard) who led the Lu 2020 study.
- **Altos Labs (San Diego / Cambridge)** — focused on cellular reprogramming broadly; has not publicly disclosed a specific AAV-OSK clinical program as of 2026-05-06. Uses Shinya Yamanaka and other pioneers. Their approach likely involves mRNA or small-molecule modalities in addition to AAV but public detail is limited. #gap/unsourced
- **NewLimit** — focused on partial reprogramming using epigenome-editing approaches; no public AAV-OSK program disclosed.

See [[in-vivo-partial-reprogramming-therapy]] for the broader pipeline landscape across all modalities.

---

## Gaps and limitations

- **No human efficacy data.** NCT07290244 is a safety Phase 1; epigenetic-age clock reversal in humans has not been demonstrated. #gap/needs-human-replication
- **No non-human primate in-vivo data.** Previously cited marmoset data (attributed to Yang 2023) is not present in that paper; no NHP in-vivo OSK study has been identified. #gap/needs-replication
- **Cancer risk over human-scale timelines uncharacterized.** All mouse studies use short observation windows. #gap/long-term-unknown
- **Browder 2022 not replicated in independent lab.** The systemic-aging claim rests on a single lab result. #gap/needs-replication
- **Macip 2024 median remaining lifespan +109% claim is extraordinary** and published in a lower-tier journal without ITP validation. Treat with caution until replicated. #gap/needs-replication
- **AAV9 seroprevalence data not cited.** Exact seroprevalence estimates (20–50%) are from my training knowledge; primary citation not confirmed. #gap/unsourced
- **Two-vector co-transduction efficiency** in aged human tissues is unknown. Mouse data may not translate. #gap/needs-human-replication
- **Altos Labs program details** are not publicly disclosed; the description above is based on public announcements, not primary sources. #gap/unsourced

---

## Cross-references

- [[partial-reprogramming]] — process page; biology of epigenetic reprogramming, the Yamanaka factors, and how OSK reversal works; Lu 2020 Yang 2023 mechanisms detailed there
- [[in-vivo-partial-reprogramming-therapy]] — broader modality-agnostic pipeline page (R23a sibling); all partial-reprogramming clinical-development context lives there
- [[aav-tert]] (verified) — AAV vector biology reference; serotype tropism and immunogenicity covered in depth
- [[oct4]] (verified-partial) — target protein; master pluripotency factor
- [[sox2]] (verified-partial) — target protein
- [[klf4]] (verified-partial) — target protein
- [[c-myc]] (verified-partial) — omitted from OSK; oncogenic rationale for exclusion
- [[hypotheses/information-theory-of-aging]] (verified) — theoretical framework motivating OSK-based epigenetic restoration
- [[epigenetic-alterations]] — hallmark targeted; epigenetic drift as primary pathology
- [[stem-cell-exhaustion]] — secondary target hallmark
- [[hallmarks-of-aging]] — context MOC

---

## Footnotes

[^lu2020]: doi:10.1038/s41586-020-2975-4 · Lu Y, Brommer B, Tian X et al. (Sinclair lab) · in-vivo · Nature 2020 · 588:124–129 · model: C57BL/6J aged mice (vision arm: 3- and 11-month-old; transcriptomic arm: 12-month-old) and glaucoma model; systemic safety arm: 5-month and 21-month-old mice with AAV9 IV; vision/optic arms: AAV2 intravitreal (Tet-Off for optic nerve crush; Tet-On for aged and glaucoma arms) · restored youthful DNA methylation, axon regeneration, visual acuity recovery in 3- and 11-month-old mice; vision restoration not seen at 18 months (corneal opacity confound); OSK without c-Myc; TET1/TET2 required; DNA damage required as trigger · archive: local PDF available (green OA via PMC)

[^browder2022]: doi:10.1038/s43587-022-00183-2 · Browder KC, Reddy P, Yamamoto M et al. (Belmonte lab) · in-vivo · Nature Aging 2022 · model: naturally aged C57BL/6 mice; AAV9 systemic IV Tet-on OSK; four 4-week dox cycles · multi-tissue reversal of age-associated transcriptomic signatures; no tumor signal in observation window · archive: not_oa (no local PDF); verifier cross-check required for quantitative n values

[^ocampo2016]: doi:10.1016/j.cell.2016.11.052 · Ocampo A, Reddy P, Martinez-Redondo P et al. (Belmonte lab) · in-vivo · Cell 2016 · 167(7):1719–1733 · model: LAKI 4F mice (LMNA G609G progeria, 4F cassette; LAKI -Dox n=20, +Dox n=13; LAKI 4F -Dox n=18, +Dox n=15) and 12-month-old WT 4F mice; Tet-on OSKM fast-cycling (2 days on / 5 days off); continuous dox → death within 4 days; two-copy OSKM cassette + cyclic dox → teratomas after 8 weeks; single-copy fast-cycling safe in short window · extended median and maximal lifespan in progeria; reduced hallmark markers and improved pancreatic/muscle regeneration in 12-month-old WT mice · archive: local PDF available (bronze OA)

[^yang2023]: doi:10.1016/j.cell.2022.12.027 · Yang JH, Hayashi K, Griffin PT et al. (Sinclair lab) · in-vivo + in-vitro · Cell 2023 · 186(2):305–326.e27 · model: ICE mice (C57BL/6J; I-PpoI-inducible DSBs without sequence mutations; treated at 4–6 months, assessed at 10 months post-treatment, i.e., ~14–16 months of age) + mouse embryonic fibroblasts + differentiated neurons in vitro · causal demonstration: faithful DNA damage repair causes epigenetic aging; OSK reverses DNAm age by up to 57% (four mouse clocks) and restores H3K9me3/H3K36me2 in kidney/muscle; no primate or marmoset experiments in this paper · archive: local PDF available (green OA via PMC)

[^macip2024]: doi:10.1089/cell.2023.0072 · Macip C, Hasan R, Hoznek V et al. · in-vivo · Cellular Reprogramming 2024 · 26(1):1–15 · model: 124-week-old C57BL/6 mice; AAV9 Tet-on OSK systemic · +109% median remaining lifespan vs controls; improved frailty score; OSK in human keratinocytes showed epigenetic age reversal · archive: download_status:failed (hybrid OA); PDF not locally available; treat quantitative lifespan claim with caution pending verification · #gap/needs-replication

[^liu2026osk]: doi:10.1038/s12276-026-01662-x · Liu YW, Zou JT, Gong JS et al. (Wang ZX group, Xiangya Hospital + Central South University) · in-vivo + in-vitro · *Experimental & Molecular Medicine* 2026 · 58(3):782–797 · model: OA mouse models (intra-articular AAV-OSK); chondrocyte cultures · AAV-OSK preserved chondrocyte vitality without inducing stemness markers; reduced subchondral bone thickening; promoted hyalinization of fibrocartilage; reduced senescence and DNMT expression; TET2 identified as pivotal mediator · PMID 41786976; PMC13049178 (OA); R34 recency add

[^berdugovega2026]: doi:10.1016/j.neuron.2025.11.028 · Berdugo-Vega G, Sierra C, Astori S et al. (Gräff lab, EPFL) · in-vivo · *Neuron* 2026 · 114(6):1102–1116.e7 · model: aged WT mice + Alzheimer's-model mice; engram-cell-targeted OSK gene therapy · reversed senescence- and AD-related cellular hallmarks in engram neurons; restored synaptic-plasticity epigenetic-transcriptional patterns; counteracted AD neuronal hyperexcitability; recovered learning/memory to young-mouse levels regardless of brain area or behavioral paradigm · first demonstration of cognitive-rejuvenation via cell-type-specific OSK · PMID 41672073 · R34 recency add

[^pernomian2025]: doi:10.1161/CIRCRESAHA.124.324909 · Pernomian L, Waigi EW, Nguyen V et al. (Wenceslau group, USC + Sinclair as collaborator) · in-vivo + in-vitro · *Circulation Research* 2025 · 137(8):1092–1113 · model: BPN/3J + BPH/2J normotensive vs hypertensive mice; lentiviral Cdh5-OSK (EC-specific); human aortic ECs from normotensive vs hypertensive patients · single-shot endothelial-specific OSK reduced BP and resistance-artery hypercontractility, attenuated EndMT and elastin breaks, increased eNOS/NO and reduced ROS in hypertensive human aortic ECs · scRNA-seq: alleviated EC senescence and EndMT · note: lentiviral, not AAV vector (still relevant to OSK clinical concept) · PMID 40899274; PMC12530109 (OA) · R34 recency add

[^lu2025md]: doi:10.1016/j.cell.2025.07.031 · Lu JY, Tu WB, Li R et al. (Izpisua Belmonte group, Altos Labs) · in-vivo + in-silico · *Cell* 2025 · 188(21):5895–5911.e17 · model: gene expression analysis across 40+ human tissues and 20 diseases; OSK reprogramming validation in human and mouse cells · identified pervasive "mesenchymal drift" (MD) — upregulation of mesenchymal-fate TFs across cell types in aging/disease — that correlates with disease progression, mortality, reduced patient survival; OSK partial reprogramming reduces MD before dedifferentiation; suppression of MD TFs is sufficient for epigenetic rejuvenation · provides mechanistic transcriptomic frame for what OSK does beyond DNAm clock reversal · disclosure: all authors Altos Labs employees · PMID 40816266 · R34 recency add — Altos Labs first-author publication

[^pico2025]: doi:10.1016/j.celrep.2025.115879 · Picó S, Vílchez-Acosta A, Agostinho de Sousa J et al. (Ocampo lab, U Lausanne / EPITERNA) · in-vivo · *Cell Reports* 2025 · 44(7):115879 · model: comparative analysis across multiple reprogrammable mouse strains (4F constructs, organ-avoidance variants) · continuous in vivo OSKM expression remains lethal (loss of cell identity, body weight loss, premature death); cyclic short-term OSKM mitigates these effects but systemic rejuvenation in WT mice remains elusive; new strains avoiding OSKM expression in specific organs offer safer in vivo reprogramming tools · PMID 40560729 · R34 recency add

[^jo2025]: doi:10.1111/acel.70268 · Jo BK, Lee SY, Eom HJ, Kim J, Cha HJ (Seoul National + Sookmyung Women's) · review · *Aging Cell* 2025 · 24(11):e70268 · synthesis of in-vivo reprogramming data across retina, skeletal muscle, heart, liver, brain, intestine; mechanistic parallels to injury-induced dedifferentiation; safety: teratoma, organ failure, loss of cell identity discussed alongside cyclic-induction and targeted-delivery mitigations · PMID 41114535; PMC12610414 (OA) · R34 recency add
