---
type: study
doi: 10.1016/j.cell.2022.12.027
pmid: 36638792
pmc: PMC10166133
title: "Loss of epigenetic information as a cause of mammalian aging"
authors: [Yang JH, Hayano M, Griffin PT, Amorim JA, Bonkowski MS, Apostolides JK, Salfati EL, Blanchette M, Munding EM, Bhakta M, et al.]
year: 2023
journal: Cell
volume: 186
issue: 2
pages: 305-326.e27
study-design: in-vivo
organism: mus-musculus
n-subjects: null   # multi-cohort study; per-arm n not extracted to frontmatter (see figure legends in primary PDF); typical n=5–20 per arm across >20 experimental groups
intervention: ["[[aav-osk]]", "[[partial-reprogramming]]"]
hallmarks-tested: ["[[epigenetic-alterations]]", "[[genomic-instability]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [ice-mouse-model, epigenetic-information-loss-as-causal-driver, dna-damage-drives-methylation-drift-without-mutation, dname-clock-acceleration-50pct, osk-reverses-dname-age-57pct, no-permanent-genomic-mutation-confirmed-by-wgs]
local-pdf: null
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: null
---

# Loss of epigenetic information as a cause of mammalian aging

**Yang JH, Hayano M, Griffin PT et al. (Sinclair DA, senior author) · *Cell* 186(2):305–326.e27 · 2023 · DOI: 10.1016/j.cell.2022.12.027**

*Citation impact (as of 2026-05-04): 560 citations · FWCI = 108 · citation_percentile = 100*

## TL;DR

Introduces the **ICE (Inducible Changes to the Epigenome) mouse model** to test whether epigenetic disruption — independent of DNA sequence mutation — is sufficient to drive aging phenotypes. A tamoxifen-inducible, rare-cutting I-PpoI endonuclease generates transient double-strand breaks (DSBs) at 20 sites in the mouse genome (19 non-coding); break sites are efficiently repaired with no permanent sequence mutations. ICE mice develop accelerated epigenetic aging (~50% faster clock advance, p < 0.0001) plus a comprehensive aging phenotype: reduced body weight and fat mass, impaired cognition, reduced muscle mass and endurance, and altered respiratory exchange ratio. A **3-factor OSK reprogramming cocktail** (OCT4/SOX2/KLF4) delivered via AAV partially reversed the ICE-associated epigenetic aging, restoring DNAme age by up to 57% across four independent external mouse methylation clocks and rescuing histological and transcriptomic aging signatures. **This is the most direct experimental demonstration to date that loss of epigenetic information is a causal driver of aging, not merely a biomarker.** All experiments are in mouse; no human or primate data are reported.

---

## Background and rationale

The paper is the primary experimental foundation for [[hypotheses/information-theory-of-aging]] (verified). Prior work established that:

1. Epigenetic clocks (DNA methylation patterns at specific CpG sites) track biological age with high fidelity across tissues and species — see [[studies/horvath-2013-epigenetic-clock]].
2. In-vivo partial reprogramming via OSK can restore youthful methylation patterns and functional capacity in retinal ganglion cells — see [[studies/lu-2020-osk-vision-restoration]].
3. Cyclic OSKM expression ameliorates aging hallmarks in progeria mice — see [[studies/ocampo-2016-partial-reprogramming]].

The missing piece: whether epigenetic disruption *causes* aging or whether it is merely a consequence of other damage processes (ROS, replication errors, metabolic dysfunction). Prior interventions could not exclude the possibility that OSK worked by correcting downstream readouts while the upstream causative damage continued. The ICE system was designed specifically to resolve this ambiguity.

---

## The ICE mouse model

### System design

- **Transgene:** A loxP-STOP-loxP cassette upstream of ER^T2^-HA-I-PpoI-IRES-eGFP (integrated at the Rosa26 locus in C57BL/6J ES cells), combined with a whole-body Cre-ER^T2^ (ubiquitin promoter). In the presence of tamoxifen, Cre-ER^T2^ excises the STOP cassette, enabling nuclear I-PpoI expression; expression ceases upon tamoxifen clearance.
- **Cut sites:** I-PpoI recognizes the sequence CTCTCTTAA▼GGTAGC, which occurs at **20 targets** in the mouse genome, **19 of which are non-coding** (including ribosomal DNA spacers and non-genic loci); none occur in mitochondrial DNA. Critically, none occur in protein-coding sequences.
- **Induction protocol:** Tamoxifen gavage (360 mg/kg modified AIN-93G diet) in young adult mice (4–6 months of age) for **3 weeks**; I-PpoI is transiently expressed, generates DSBs, and then expression ceases as tamoxifen clears. STOP cassette removal was confirmed across tissues (muscle 67%, liver 71%, hippocampus 61%, cortex 72%).
- **Repair and mutation confirmation:** Whole-genome sequencing (WGS) of ICE mice confirmed that the cut sites were efficiently repaired with no detectable accumulation of permanent sequence mutations. This is the key control: any aging-accelerating phenotype must be due to epigenetic disruption from the repair process itself, not from mutagenic sequence damage.

### Proposed mechanism

DSB repair requires recruitment of chromatin-remodeling factors — including SIRT1, SIRT6, HDAC1, and PARP1 — away from their normal genomic positions to damage sites. With each repair event, these factors redistribute, leaving their home loci with altered histone modification landscapes. Over thousands of repair events (either via ICE pulses or via natural aging), this redistribution erodes the regulatory information encoded in the histone modification pattern, progressively degrading cell-type-specific gene expression programs. This is the "Relocalization of Chromatin Modifiers" (RCM) hypothesis underlying the Information Theory of Aging: the epigenome is a retrievable information store, and each DSB-repair cycle degrades signal fidelity like re-reading a scratched optical disc.

---

## Key experimental arms and findings

### Arm 1 — Epigenetic clock acceleration in ICE mice

ICE mice were assessed for DNA methylation age using **two mouse DNAme clocks trained in this study** (muscle clock: 2,048 CpGs; blood clock: 743 CpGs; both validated by RRBS). These are distinct from the four external clocks used in the reversal arm. Relative to age-matched littermate controls:

- ICE mice exhibited **~50% faster** epigenetic clock advance (p < 0.0001) — validated in both muscle and blood cohorts #gap/needs-replication
- Clock acceleration was observed in both muscle and blood, not confined to a single organ system
- The primary readout in the clock-acceleration arm is **DNAme clocks** (RRBS-based). Transcriptomic (RNA-seq) readout is used in the RGC arm (Arm 3 below) and in muscle gene-expression analysis; both readouts are used in the paper but serve different arms

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — DSB-repair-driven chromatin redistribution is conserved; I-PpoI cut sites are mouse-specific; human equivalent would differ |
| Phenotype conserved in humans? | unknown — no human ICE experiment; natural aging DSBs are assumed to drive similar redistribution but untested |
| Replicated in humans? | no |

### Arm 2 — Aging phenotype in ICE mice

At primary assessment endpoints (body weight/fat mass/RER/FI at 10–12 months post-treatment, animals ~14–16 months old; muscle mass data specifically at **16 months of age**; kidney/skin histology at 10 months post-treatment):

- Reduced body weight and fat mass (independent of food intake; confirmed by EchoMRI)
- Altered respiratory exchange ratio (RER) during the day, indicating metabolic dysfunction
- Impaired cognition: ICE mice showed ~40% contextual recall (vs ~75% for young mice) in fear-conditioning; Barnes maze recall ~half that of Cre controls, similar to 24-month-old WT mice
- Frailty Index (FI) of ICE mice at 10 and 12 months post-treatment resembled 24-month-old WT mice (p=0.0006 and p<0.0001)
- Reduced muscle mass, exercise endurance, and grip strength at 16 months; 6-fold fewer COX-positive myofibers at 10 months post-treatment
- Histological changes across multiple tissues: kidney (fewer healthy glomeruli, EMT in podocytes), skin (subepidermal thinning, hair greying, loss of KIT/CD117+ melanocyte stem cells), bone (loss of cortical thickness and trabecular density), cardiac (thinner LV posterior walls)

The phenotype closely paralleled that of normally aged mice at equivalent biological (rather than chronological) ages, supporting the clock-acceleration readout as functionally meaningful.

### Arm 3 — OSK reprogramming reverses ICE aging

**Reprogramming cocktail used:** Yang 2023 uses **OSK (3-factor: OCT4, SOX2, KLF4)** — the same 3-factor cocktail as Lu 2020 — delivered via AAV to ICE-aged mice. The paper does NOT use OSKMNL or any 6-factor cocktail; "OSK-mediated rejuvenation" is the language used in the summary and throughout the results. This is distinct from:
- OSKM (4-factor; Ocampo 2016; includes c-Myc)
- OSKMNL (6-factor; NOT used in this paper)

**CRITICAL NOTE:** Earlier versions of this wiki page incorrectly attributed OSKMNL (6-factor) to Yang 2023. The paper exclusively uses OSK (3-factor) for both in-vitro and in-vivo rejuvenation arms. Do not use OSKMNL when describing Yang 2023's reprogramming arm.

**Results of OSK reprogramming in ICE mice:**

- DNAme age reversed by **up to 57%** across **four independent external mouse methylation clocks** (Meer et al. 2018; Petkovich et al. 2017; Stubbs et al. 2017; Thompson et al. 2018) — reported in Figure 7G
- H3K9me3 (kidney) and H3K36me2 (muscle) histone modification distributions restored to levels resembling negative (Cre) controls after **~5 weeks** of AAV-delivered OSK
- RGC (retinal ganglion cell) mRNA expression levels returned toward a more youthful pattern (p < 0.0001) in ICE mice treated with OSK; 86% of nervous system developmental genes restored
- No frank dedifferentiation or teratoma formation reported within the observation window; OSK did not induce expression of the pluripotency gene Nanog

---

## ICE model: what it proves and what it does not

### What it proves

1. **Epigenetic disruption alone — without genomic sequence mutation — is sufficient to drive an aging phenotype** in mice. The WGS negative for mutations is the essential control.
2. **The aging-driving epigenetic disruption is reversible**: OSK-mediated reprogramming partially restores the epigenetic landscape and reverses aging-associated functional deficits.
3. **DSB repair is a plausible mechanism** for natural epigenetic aging: the redistribution of chromatin regulators during repair is a quantitatively tractable, testable model for how DSBs in normal aging erode the epigenome.

### What it does not prove

1. **That the ICE induction is equivalent in magnitude to natural aging.** The tamoxifen-induced pulse delivers DSBs acutely at a controlled dose; natural aging accumulates DSBs stochastically over decades. The two processes may differ in kind, not just quantity.
2. **That DSB-driven epigenetic drift is the dominant cause of aging** relative to other hallmarks ([[loss-of-proteostasis]], [[mitochondrial-dysfunction]], [[cellular-senescence]], etc.). ICE demonstrates sufficiency; it does not establish primacy.
3. **That results extrapolate to humans.** The I-PpoI sites are mouse-specific; the mouse methylation clocks are mouse-trained; the physiology of ICE-driven aging in a 4–6-month-old mouse corresponds to a specific portion of murine life history that may not translate directly to human timescales.
4. **That the reprogramming results in ICE mice predict outcomes in naturally aged mice.** ICE aging is compressed and may differ epigenetically from slow, stochastic natural aging drift. The Yang 2023 results are an important mechanistic proof-of-concept, not a clinical blueprint.

---

## Relationship to other Sinclair-lab studies

| Study | Model | Reprogramming factors | Primary endpoint | Relationship to Yang 2023 |
|---|---|---|---|---|
| Ocampo 2016 [^ocampo2016] | LAKI progeria + 12-mo WT C57BL/6J | OSKM (cyclic 2d-on/5d-off) | Lifespan (progeria); tissue histology (WT) | Independent (Belmonte group); progeria model vs ICE model; OSKM (4-factor) vs OSK (3-factor) |
| Lu 2020 [^lu2020] | C57BL/6J aged + injury/glaucoma | OSK (3-factor; no c-Myc) | Retinal ganglion cell function, visual acuity | Same lab; OSK delivery to RGCs preceded ICE system; TET1/TET2 dependence established |
| Yang 2023 (this page) | C57BL/6J ICE + WT comparison | OSK (3-factor; same as Lu 2020) | Methylation clock reversal, aging phenotype reversal | Full causal demonstration; ICE model; OSK sufficient for ICE-aged context |

The three studies collectively establish: (1) epigenetic reprogramming can restore youthful states in aged somatic cells (Ocampo, Lu); (2) epigenetic disruption alone causes aging and is reversible by reprogramming (Yang). They are mechanistically sequential, though all are from labs with Sinclair connections or the Sinclair lab itself.

---

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | partial | DSB-repair chromatin redistribution is conserved; SIRT1/HDAC1 function is conserved; I-PpoI cut sites are mouse-specific; human equivalent sites unknown |
| Phenotype conserved in humans? | unknown | No human ICE experiment; natural-aging DSB accumulation assumed to drive similar redistribution but not directly tested |
| Replicated in humans? | no | All experiments are in Mus musculus; no marmoset or other primate data in this paper |

#gap/needs-human-replication — all mechanistic evidence is mouse-only  
#gap/needs-replication — dominant single-lab provenance (Sinclair group, Harvard); ICE model has not been independently replicated as of 2026-05-04

---

## Significance and wiki role

This paper is the **primary experimental anchor** for:

- [[hypotheses/information-theory-of-aging]] (verified) — cited as the most direct test of the causal hypothesis; the ICE system was explicitly designed to test whether epigenetic disruption without mutation drives aging
- [[partial-reprogramming]] (verified) — the OSK arm is covered in the Yang 2023 section; establishes OSK sufficiency for ICE-aged cell rejuvenation
- [[aav-osk]] (verified) — the mechanistic companion providing the causal context for why OSK-based therapies make sense
- [[epigenetic-alterations]] (hallmark page, stub) — the paper defines the mechanistic basis for why this hallmark is causally implicated, not merely correlative
- [[genomic-instability]] (hallmark page) — ICE dissects the interface between DSB-driven genomic stress and epigenetic aging; positions the two hallmarks as mechanistically coupled

---

## Limitations and gaps

**Study-level:**
- ICE induction is acute and high-dose; natural aging DSB accumulation is slow and stochastic. Magnitude equivalence is an assumption, not a demonstrated fact.
- All experiments in a single mouse strain (C57BL/6J), a laboratory background with known tumor-susceptibility and specific immune quirks.
- The OSK reprogramming arm is performed in the context of ICE-accelerated aging; efficacy in naturally aged mice or human cells needs separate demonstration.
- Individual cohort n values (per experimental arm) were not extracted to this page; figure legends in the primary PDF contain per-arm n. Overall design involves dozens of arms with n=5–20 per group. #gap/unsourced

**Translation:**
- No primate data; no human data; no human cell-type validation of OSK in this model.
- Long-term safety of in-vivo OSK in whole-body AAV delivery over extended observation windows is uncharacterized.
- Clock divergence between transcriptomic and DNAme readouts, and between mouse and human clocks, makes translational benchmarking uncertain.

#gap/needs-human-replication  
#gap/needs-replication  
#gap/long-term-unknown

---

## Cross-references

| Page | Relationship |
|---|---|
| [[hypotheses/information-theory-of-aging]] (verified) | Theoretical framework; this paper is primary causal evidence |
| [[partial-reprogramming]] (verified) | Process page; Yang 2023 OSK arm described in detail |
| [[aav-osk]] (verified) | Gene-therapy implementation page; Yang 2023 as mechanistic companion to Lu 2020 |
| [[epigenetic-alterations]] | Hallmark directly tested; ICE causally demonstrates its role |
| [[genomic-instability]] | Co-implicated hallmark; DSBs are the trigger for epigenetic drift in ICE |
| [[studies/lu-2020-osk-vision-restoration]] | Predecessor study (same lab); OSK RGC delivery; TET1/TET2 dependence |
| [[studies/ocampo-2016-partial-reprogramming]] | Parallel partial-reprogramming study (different lab/model/cocktail) |
| [[studies/horvath-2013-epigenetic-clock]] | Foundational clock paper; Yang 2023 uses mouse equivalents of Horvath's approach |
| [[oct4]] | Core reprogramming factor (OSK component) |
| [[sox2]] | Core reprogramming factor (OSK component) |
| [[klf4]] | Core reprogramming factor (OSK component) |
| [[c-myc]] | NOT included in OSK (Yang 2023 and Lu 2020 both use 3-factor OSK, excluding c-Myc); c-Myc is included only in OSKM (Ocampo 2016) |
| [[mus-musculus]] | Primary model organism; all experiments conducted in C57BL/6J mice |
| [[sirtuin]] | SIRT1 and SIRT6 redistribution during DSB repair is a proposed mediator of ICE-driven epigenetic aging (along with HDAC1 and PARP1) |

---

## Footnotes

[^lu2020]: [[studies/lu-2020-osk-vision-restoration]] · in-vivo (AAV2 intravitreal; Tet-Off and Tet-On systems in different arms) · model: C57BL/6J aged mice (vision arm: 3- and 11-month-old; glaucoma + transcriptomic arms: 12-month-old; systemic safety arm: 5- and 21-month-old) · doi:10.1038/s41586-020-2975-4 · local PDF available · OSK 3-factor (no c-Myc); TET1/TET2 required for OSK benefits; predecessor to Yang 2023 ICE system

[^ocampo2016]: [[studies/ocampo-2016-partial-reprogramming]] · in-vivo (cyclic dox-inducible OSKM; 2d-on/5d-off) · model: LAKI HGPS progeria mice + 12-month-old WT C57BL/6J · doi:10.1016/j.cell.2016.11.052 · local PDF available · OSKM (4-factor including c-Myc); independent Belmonte group; progeria model; lifespan extension in progeria; functional improvement in WT aging contexts; teratomas with 2-copy OSKM + cyclic protocol

[^yang2023]: [[studies/yang-2023-epigenetic-information-loss]] · in-vivo (ICE system: I-PpoI inducible DSBs; no sequence mutations by WGS; multi-tissue) · model: C57BL/6J (DSBs induced at 4–6 months for 3 weeks; primary endpoints at ~10 months post-treatment, ~14–16 months old) · doi:10.1016/j.cell.2022.12.027 · local PDF available · ICE mice: ~50% faster epigenetic clock (p < 0.0001); OSK (3-factor) reversed DNAme age up to 57% across four independent mouse methylation clocks (Meer, Petkovich, Stubbs, Thompson)
