---
type: study
doi: 10.1126/scitranslmed.adg1485
pmid: 37820010
pmc: PMC10763629
title: "Regeneration of neuromuscular synapses after acute and chronic denervation by inhibiting the gerozyme 15-prostaglandin dehydrogenase"
authors: [Bakooshli MA, Wang YX, Monti E, Su S, Kraft P, Nalbandian M, Alexandrova L, Wheeler JR, Vogel H, Blau HM]
year: 2023
journal: Science Translational Medicine
study-design: in-vivo
publication-type: research-article
volume: 15
issue: 717
pages: "eadg1485"
organism: mus-musculus
n-subjects: null   # multiple cohorts: young male C57BL/6 (2–4 mo) for SNT/SNC experiments; aged male C57BL/6 (24–26 mo) for chronic denervation / aging experiments; human biopsy series n=10 patients with neurogenic myopathies. Per-group n reported in figure legends (biological replicates)
intervention: ["[[sw033291]]"]
hallmarks-tested: ["[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings:
  - sciatic-nerve-transection-upregulates-15-PGDH-in-denervated-muscle
  - pgdhi-promotes-motor-axon-regeneration-and-nmj-formation-after-acute-nerve-crush
  - pgdhi-increases-motor-neuron-viability-in-aged-chronically-denervated-mice
  - pgdhi-restores-nmj-morphology-and-functional-strength-in-aged-mice
  - pre-synaptic-and-post-synaptic-recovery-synergize-with-palla-2021-muscle-effects
  - 15-pgdh-aggregates-mark-target-fibers-in-human-neurogenic-myopathies
local-pdf: null
verified: true
verified-date: 2026-05-23
verified-by: claude
verified-scope: "All quantitative claims verified against primary source PDF (full 18-page manuscript + methods). Background-citation DOIs for Deschenes 2010 and Gonzalez-Freire 2014 corrected — both seeder DOIs were wrong (see footnote corrections). Supplementary-figure data (figs S1–S8) not individually verified; main-text claims confirmed."
---

# Regeneration of neuromuscular synapses after acute and chronic denervation by inhibiting the gerozyme 15-prostaglandin dehydrogenase

## TL;DR

Bakooshli et al. (2023) extend the 15-PGDH gerozyme story established by Palla et al. (2021) from muscle-fiber rejuvenation to **neuromuscular junction (NMJ) regeneration**. The paper shows that skeletal muscle 15-PGDH — an enzyme that degrades the pro-regenerative prostaglandin PGE2 — is strongly upregulated not just by aging but also acutely by **sciatic nerve transection** (denervation). Pharmacological inhibition of 15-PGDH (PGDHi, using the SW033291 compound class) in mice: (1) promotes regrowth of motor axons and formation of new NMJs after acute nerve crush; (2) rescues motor neuron viability, NMJ morphology, and functional muscle force in aged mice with chronic aging-related denervation. The pre-synaptic (neuronal) recovery synergizes with the post-synaptic (muscle fiber) recovery previously shown by Palla 2021, yielding a marked combined gain in aged-muscle strength. A translational signal: 15-PGDH protein aggregates co-localize with **target fibers** — the histopathologic hallmarks of human neurogenic myopathies — suggesting gerozyme dysregulation may be part of human disease etiology, not just a mouse aging phenomenon.

**Aging context.** NMJ degeneration is a primary driver of age-related [[sarcopenia]], but no clinical intervention currently regenerates lost NMJs. This paper positions 15-PGDH inhibition as a candidate for both acute (trauma, surgical denervation) and chronic (aging, ALS, post-polio) NMJ restoration.

---

## Background

Neuromuscular junctions degenerate with aging in both mice and humans: pre-synaptic motor axon terminals retract, acetylcholine receptor (AChR) clusters at the post-synaptic endplate become fragmented ("pretzel-like" to "simple" morphology), and the ratio of innervated to denervated fibers declines [^deschenes2010]. In aged EDL muscles, **20.2 ± 2.9% of myofibers are denervated** (assessed by absence of neurofilament and SV2 staining at postsynaptic AChRs), compared with **4.4 ± 1.5% in young EDL muscles** (data reported within Bakooshli 2023, consistent with prior reports cited therein). This progressive denervation is considered a major proximate cause of the sarcopenic loss of force-generating capacity in aged [[skeletal-muscle]], distinct from muscle-fiber atrophy itself [^gonzalez-freire2014]. #gap/needs-human-replication — the quantitative contribution of NMJ loss vs. fiber atrophy to human sarcopenia is not cleanly separated in any clinical trial.

15-Prostaglandin dehydrogenase (**15-PGDH**; gene *HPGD*) degrades PGE2 and PGF2α, the prostaglandins that drive muscle satellite-cell proliferation, Schwann-cell survival, and motor-neuron trophic support. Its discovery as a "gerozyme" — an enzyme whose aging-associated upregulation impairs tissue regeneration — was established by Palla et al. 2021 in the context of muscle-fiber regeneration [^palla2021]. The Bakooshli 2023 paper asks whether the same gerozyme logic extends to the *neural* side of the neuromuscular unit.

---

## Methods

### Acute denervation model (sciatic nerve crush)

Male C57BL/6 mice (2–4 months old, from Jackson Laboratory) underwent **sciatic nerve crush (SNC)** as a model of acute nerve injury with regeneration potential (crush, unlike transection, preserves the endoneurial tubes as a scaffold for axon regrowth). Spontaneous recovery without treatment occurs over ~50 days. PGDHi (SW033291; **5 mg/kg i.p. once daily**, starting day of injury, for 14 days) or vehicle (10% ethanol, 5% Cremophor EL, 85% D5W) was administered following crush. Primary outcome: plantar flexion peak tetanic force (millinewton) measured by percutaneous electrical stimulation of the tibial nerve at 3, 7, and 14 days post-injury (dpi). Secondary outcomes: histological NMJ morphology by **bungarotoxin (BTX) + neurofilament/SV2 co-staining** in EDL whole-mount preparations; motor axon counts in sciatic nerve cross-sections by immunofluorescence for NF and ChAT (neural-network-quantified); innervation percentage of NMJs.

### Chronic denervation model (sciatic nerve transection + aged mice)

Male C57BL/6 mice (2–4 months old) underwent **unilateral sciatic nerve transection (SNT)** — removing 5 mm of sciatic nerve of one leg (non-regenerating model) while the contralateral leg served as control — to characterize 15-PGDH upregulation dynamics (assessment at 14 days post-SNT). Separately, aged male C57BL/6 mice (**24 to 26 months old**, obtained from the NIA aged rodent colony) with chronic denervation from aging received SW033291 (**5 mg/kg i.p. once daily for 1 month**) or vehicle. Mice were randomized by body weight to treatment groups. Outcomes: NMJ morphology (BTX/NF/SV2 co-staining in EDL whole mounts), plantar flexion tetanic force (in vivo), motor neuron viability (cleaved caspase-3+ and ChAT+ cells in lumbar spinal cord sections), and CREB phosphorylation in ChAT+ motor neurons.

### PGE2 quantification

**LC-MS/MS mass spectrometry** (Xevo TQ-XS mass spectrometer, Waters; Vincent Coates Foundation Mass Spectrometry Laboratory, Stanford) of muscle lysates to directly measure the PGE2 breakdown product **PGEM (13,14-dihydro-15-keto-PGE2)** as a proxy for 15-PGDH enzymatic activity in control vs. denervated conditions. 15-PGDH enzyme-specific activity was also measured directly from protein lysates of GA muscles. This distinguishes on-target PGE2 restoration from off-target effects.

### Human tissue analysis

**Immunofluorescence and histological analysis** for 15-PGDH protein, autophagy marker LC3A, and mitochondrial marker PDHA in human skeletal muscle biopsy specimens (**n=10 patients** with neurogenic myopathies, encompassing axonal neuropathies, myositis, and motor neuron disease). Classic NADH staining was performed to identify target fibers (central bullseye of NADH-reduced staining, indicating mitochondrial absence). Serial sections allowed co-localization of 15-PGDH aggregates with NADH-defined target fibers. Healthy muscle biopsies served as negative controls.

---

## Key findings

### 1. Denervation induces 15-PGDH upregulation in muscle

Sciatic nerve transection (SNT) in young mice produced a **marked increase in 15-PGDH abundance and activity** in the denervated TA and GA muscle at 14 days post-injury [^bakooshli2023]. Quantification: **~20-fold increase in *Hpgd* mRNA** (from published RNA-seq time-course data, ref 20 in paper) and **fourfold increase in protein abundance** by Western blot in denervated vs. contralateral control GA muscles. Enzymatic activity increased proportionally. CODEX multiplex proteomics confirmed the protein localization to denervated myofibers (not Schwann cells or endothelial cells). The *Hpgd* mRNA increase was early and persistent: marked at 3 days post-SNT, reaching **~10-fold at day 14** and **~20-fold at day 90** vs. contralateral controls — distinguishing it from transient atrogene/myostatin expression. A **2.5-fold increase in *Hpgd* mRNA** was also observed in the SMA mouse model (SMNA7), establishing that motor neuron disease drives the same gerozyme induction. This is mechanistically significant: any cause of muscle denervation — acute trauma, surgical nerve damage, progressive motor neuron disease — engages the PGE2-degrading arm that limits regeneration. #gap/needs-replication — single-lab finding; independent quantification of 15-PGDH induction magnitude across denervation models is needed.

### 2. PGDHi accelerates motor axon regeneration and NMJ formation after acute crush

Following sciatic nerve crush (SNC), SW033291-treated mice showed accelerated regrowth of motor axons and more rapid formation of mature NMJ morphology compared to vehicle controls [^bakooshli2023]. Key quantitative outcomes at 14 dpi:

- **Force recovery**: **37.2 ± 4.9% increase** in plantar flexion peak tetanic force in PGDHi-treated vs. vehicle-treated mice (measured by in vivo tibial nerve stimulation). Note: no significant difference between groups at 3 or 7 dpi — the divergence emerged in the regenerative phase (days 7–14).
- **Specific force**: **32.2 ± 4.1% increase** in PGDHi vs. vehicle (exceeding the 6.1 ± 1.7% increase in muscle mass alone, confirming enhanced innervation rather than hypertrophy as the driver).
- **Motor axon counts**: Sciatic nerves of PGDHi mice contained **797 ± 69.3** ChAT+NF+ motor axons vs. **415.2 ± 52.5** in vehicle mice (1.9-fold more); uninjured nerves contained 1045.1 ± 55 motor axons. PGDHi specificity was confirmed: other axon types were unaffected.
- **NMJ innervation**: **97.4 ± 2.1%** of EDL NMJs innervated in PGDHi mice vs. **84.5 ± 2.2%** in vehicle mice at 14 dpi.

**Not yet replicated in humans.** #gap/needs-human-replication

### 3. PGDHi restores motor neuron viability and NMJ morphology in aged mice

In aged mice (24–26 months old) with chronic denervation-type NMJ degradation, SW033291 (5 mg/kg i.p. daily for 1 month) reduced NMJ structural abnormalities and increased motor neuron viability compared to vehicle [^bakooshli2023]. Key quantitative outcomes:

- **Baseline NMJ pathology in aged vehicle mice**: denervation 21.6 ± 2.3%; axonal swelling 19.6 ± 1.4%; postsynaptic AChR fragmentation 28.9 ± 2.8%. PGDHi reduced all three.
- **NMJ morphology**: PGDHi restored AChR cluster morphology toward the complex "pretzel" pattern found in young EDL muscles, and reduced endolysosomal BTX+ AChR vesicles at NMJs.
- **Motor neuron viability**: Aged mice had **11.6 ± 2.5%** cleaved caspase-3+ ChAT+ apoptotic motor neurons in lumbar ventral horn. PGDHi reduced this to **4.2 ± 0.6%** (compared to 0% in young mice).
- **CREB phosphorylation (mechanism)**: After SNC, PGDHi increased nuclear p-CREB in ChAT+ motor neurons to **37 ± 2%** vs. **22 ± 3%** in vehicle. Direct intramuscular injection of non-degradable dmPGE2 into aged GA muscles elicited p-CREB in **75 ± 4%** of lumbar ChAT+ neurons vs. **30 ± 4%** in PBS controls — confirming muscle-derived PGE2 acts retrogradely on motor neurons via EP4→cAMP→CREB signaling.

The mechanistic pathway identified is: PGDHi → elevated PGE2 → EP4 receptor (highly expressed in cholinergic neurons) → cAMP → CREB phosphorylation → axon regeneration and anti-apoptotic signaling in motor neurons. The relative contribution of Schwann cells has not been dissected. #gap/no-mechanism

### 4. Functional force recovery in aged muscle

Aged mice (24–26 months old) treated with PGDHi showed increased muscle mass and plantar flexion force compared to vehicle-treated aged controls (Fig. 6F and G in paper) [^bakooshli2023]. Specific force values are reported in figures; the paper's discussion frames the PGDHi-mediated pre-synaptic (neuronal/axonal) recovery as **synergizing** with the post-synaptic (muscle-fiber) rescue demonstrated in Palla 2021 [^palla2021]. The abstract states directly: "These presynaptic changes synergized with previously reported muscle tissue remodeling to result in a marked increase in the strength of aged muscles." This is the paper's own framing, not an interpolation. #gap/needs-replication

### 5. 15-PGDH aggregates in human neurogenic myopathy target fibers

In human muscle biopsy specimens (**n=10 patients** with neurogenic myopathies encompassing axonal neuropathies, myositis, and motor neuron disease), **15-PGDH protein aggregates composed the central bullseye "target" region** of target fibers — the NADH-staining-negative, mitochondria-depleted foci that are the histopathological hallmark of denervation and reinnervation in neurogenic disease [^bakooshli2023]. Key details:

- **9 of 10 biopsies**: 15-PGDH aggregates composed at least part of the target fiber bullseye. The one exception was a biopsy from a patient with drug toxicity-induced neuropathy in which NADH staining patterns were complex and targets could not be confidently distinguished.
- **LC3A co-localization**: LC3A (autophagosome marker) co-localized with 15-PGDH in the target region; PDHA (mitochondrial marker) was excluded from these regions — consistent with the snRNA-seq data from denervated mouse muscle showing DN myonuclei upregulate *Hpgd* and autophagy genes simultaneously.
- **Target fiber diseases**: associated with SMA type 3, ALS, nerve root compression (lumbar radiculopathy), neurogenic amyloidosis, and axonal neuropathies — a broader disease spectrum than post-polio syndrome alone.
- **Controls**: 15-PGDH aggregates were absent in muscle biopsies from healthy patients.

This is the most translationally important finding: it establishes the same gerozyme mechanism in human neurogenic disease, and that PGE2 deficiency in target fibers may impair the natural reinnervation response.

**Extrapolation table — human neurogenic myopathy findings:**

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | 15-PGDH / PGE2 / EP receptors are conserved |
| Phenotype conserved in humans? | partial | Target-fiber 15-PGDH co-localization shown in human biopsies; interventional response not tested in humans |
| Replicated in humans? | no | Human data is cross-sectional correlative IHC only; no interventional human data |

---

## Mechanism

The proposed mechanism is an extension of the Palla 2021 gerozyme model to the neural compartment:

1. **Denervation or aging** → upregulates 15-PGDH in **denervated myofibers** (snRNA-seq confirms myofibers as the main source — specifically a new "DN myonuclei" population that reprograms to express *Hpgd* alongside autophagy and stress genes; tenocytes also express *Hpgd* irrespective of innervation; Schwann cells were not identified as a major source in this study).
2. **Elevated 15-PGDH** → accelerated PGE2 → PGEM (13,14-dihydro-15-keto-PGE2) conversion → **local PGE2 deficiency** in the muscle-nerve interface (confirmed by LC-MS/MS measurement of PGEM and direct enzyme-specific activity assay in GA muscle lysates).
3. **PGE2 deficiency** → reduced activation of **EP4 receptor** (highly expressed in spinal cord cholinergic neurons per single-cell transcriptomic atlas) → impaired cAMP→CREB signaling in motor neurons → reduced axon regeneration and increased apoptosis.
4. **PGDHi (SW033291, 5 mg/kg i.p.)** → blocks 15-PGDH enzymatic activity → PGE2 restored → EP4→cAMP→CREB activation in motor neuron soma → axon sprouting and anti-apoptotic survival signaling. Post-synaptic effect: PGDHi also reduces MuRF1 (muscle RING-finger protein 1) levels and AChR endolysosomal degradation, stabilizing the post-synaptic apparatus.

The mechanistic data in this paper establishes **motor neurons** (CREB phosphorylation) as the primary neural target; the role of Schwann cells was not directly tested. The dual pre-synaptic (motor neuron axon regeneration/survival) and post-synaptic (AChR stability + muscle fiber health from Palla 2021) substrate means a single small-molecule may address both sides of the NMJ simultaneously.

**Open question:** The relative contributions of Schwann cells, motor neuron soma, and post-synaptic muscle to the observed recovery are not fully disentangled. PGDHi is delivered systemically (i.p.), so CNS-vs-PNS partitioning cannot be ruled out. Conditional *Hpgd* or EP4 knockout in specific cell types would clarify the mechanism hierarchy. #gap/no-mechanism

---

## Translational signal: human neurogenic myopathies

The histological finding linking 15-PGDH aggregation to human target fibers is the paper's strongest translational evidence. **Target fibers** (also termed "targetoid" fibers) are a well-established pathological diagnosis associated with denervation and signs of reinnervation, observed in a range of motor nerve injuries including **axonal neuropathies, nerve root compression (lumbar radiculopathy), neurogenic amyloidosis, myositis, ALS, and SMA** — not limited to post-polio syndrome (which is not mentioned by the paper as a specific diagnosis). Target fibers are characterized histochemically by the central bullseye of NADH-reduced staining (absence of mitochondria). If 15-PGDH accumulation impairs the natural reinnervation response in human disease — not merely in mice — then PGDHi would have a therapeutic rationale in:

- **Acute traumatic/surgical nerve injury** (peripheral nerve repair context)
- **Aging-related NMJ decline** contributing to sarcopenia
- **ALS / motor neuron diseases** (adjunct to slow denervation progression)
- **Post-polio syndrome / PPMA**

The IP estate for 15-PGDH inhibition is held jointly by Stanford and licensed to **Myoforte Therapeutics** (subsequently to **Epirium Bio** as of approximately 2025). SW033291 is a research compound; the clinical development candidate may differ.

---

## Conflicts of interest

Bakooshli MA, Wang YX, and Blau HM are inventors on patent application 63/257,264 ("A method to restore neuromuscular junction morphology") assigned to Stanford University. Blau HM is also a named inventor on patent applications 62/860,180 ("Targeting PGE2 degrading enzyme to ameliorate muscle wasting and augment strength") and 62/883,025 ("Rejuvenation of aged tissues by inhibition of the PGE2 degrading enzyme"). The 15-PGDH IP estate was licensed to Myoforte Therapeutics at the time of publication. These conflicts should be weighted when evaluating the positive framing of the data.

---

## Limitations and gaps

- **Mouse-primary evidence**: All functional and mechanistic claims derive from rodent models (sciatic nerve transection and crush in C57BL/6 mice). Human data is limited to cross-sectional IHC of biopsy specimens — no interventional human data. #gap/needs-human-replication
- **n values not confirmed**: Subject numbers per group require extraction from the PDF methods section (frontmatter field left null pending verification). #gap/needs-verification
- **Long-term safety not characterized**: Systemic PGDHi elevates PGE2 in multiple tissues. PGE2 has pleiotropic effects including modulation of cancer surveillance (PGE2 is immunosuppressive and tumorigenic at high levels). Long-term safety profile in aged subjects is not characterized. #gap/long-term-unknown
- **SW033291 dose-response**: The dose and schedule of SW033291 used in this study may not be translatable directly to human dosing. The compound class requires further pharmacokinetic optimization. #gap/dose-response-unclear
- **Cell-type mechanistic dissection**: Whether PGE2 acts primarily on Schwann cells, motor axons, or post-synaptic muscle to restore NMJ is not determined. Conditional genetic approaches have not been published. #gap/no-mechanism
- **Conflict-of-interest risk**: Strong patent incentives exist for positive framing; independent replication by groups without IP stakes is essential before clinical translation claims are made.
- **Single-lab**: To date, the 15-PGDH gerozyme story (Palla 2021 + this paper) comes primarily from the Blau laboratory at Stanford. Independent replication is needed. #gap/needs-replication

---

## Cross-references

- [[sw033291]] (implicit stub — compound page not yet seeded; see also: `molecules/compounds/`) — the small-molecule 15-PGDH inhibitor used in this study
- [[15-pgdh]] — the gerozyme target (gene *HPGD*; UniProt P15428 in humans)
- [[sarcopenia]] — the phenotype this intervention addresses; NMJ loss is a proximate driver
- [[skeletal-muscle]] — tissue page for muscle biology
- [[stem-cell-exhaustion]] — satellite cell deficits in aged muscle; context for post-synaptic recovery
- [[altered-intercellular-communication]] — Schwann cell / motor neuron / muscle crosstalk is the communication axis disrupted by denervation
- [[studies/palla-2021-15pgdh-muscle-rejuvenation]] (implicit stub — study page not yet seeded; doi:10.1126/science.abc8059) — the prior Blau lab paper establishing 15-PGDH as a gerozyme in muscle-fiber regeneration; this paper is a direct extension

---

## Footnotes

[^bakooshli2023]: [[studies/bakooshli-2023-15pgdh-nmj-regeneration]] · multiple cohorts: young male C57BL/6 (2–4 mo, SNC/SNT experiments); aged male C57BL/6 (24–26 mo, NIA colony, aging experiments); human biopsy series n=10 patients with neurogenic myopathies (IHC) · in-vivo + human correlative IHC · model: male C57BL/6 mice (sciatic nerve crush 14 dpi, nerve transection 14 days, aged chronic denervation 1-month PGDHi) · journal: *Science Translational Medicine* 15(717):eadg1485 · doi:10.1126/scitranslmed.adg1485 · PMID: 37820010 · PMC10763629 · citation percentile: 100th (fwci 5.76 per a local paper archive)

[^palla2021]: doi:10.1126/science.abc8059 · Palla AR et al. · *Science* 2021 (published online 2020) · n=TBD · in-vivo · model: aged C57BL/6 mice · Established 15-PGDH as a gerozyme that limits muscle satellite-cell function and muscle regeneration in aging; PGDHi rejuvenated aged muscle mass and strength; foundational paper that Bakooshli 2023 extends to the neural (NMJ) compartment · PDF not locally available (download failed in a local paper archive)

[^deschenes2010]: doi:10.1016/j.exger.2010.03.007 · Deschenes MR, Roby MA, Eason MK, Harris MB · *Experimental Gerontology* 45(5):389–93 (2010) · PMID: 20226849 · observational · model: aged rodents · NMJ remodeling precedes sarcopenia-related myofiber alterations — **corrected DOI**: seeder had cited `10.1152/japplphysiol.00773.2010` (invalid; returns HTTP 404). Confirmed correct DOI via PubMed search (PMID 20226849).

[^gonzalez-freire2014]: doi:10.3389/fnagi.2014.00208 · Gonzalez-Freire M, de Cabo R, Studenski SA, Ferrucci L · *Frontiers in Aging Neuroscience* 6:208 (2014) · PMID: 25157231 · PMCID: PMC4127816 · review · "The Neuromuscular Junction: Aging at the Crossroad between Nerves and Muscle" — **corrected DOI and journal**: seeder had cited `10.1093/gerona/glu072` which resolves to an unrelated paper on co-trimoxazole and sulfonylurea hypoglycemia (Tan et al., *Journals of Gerontology* 2014). Confirmed correct DOI via PubMed (PMID 25157231).
