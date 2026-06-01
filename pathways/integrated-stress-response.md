---
type: pathway
aliases: [ISR, eIF2alpha kinase pathway, eIF2α stress response, integrated stress response pathway]
kegg: hsa04141
reactome: R-HSA-381119
wikipathways: null
key-nodes: ["[[eif2alpha]]", "[[perk]]", "[[gcn2]]", "[[hri]]", "[[pkr]]", "[[atf4]]", "[[chop]]", "[[gadd34]]"]
upstream: ["[[unfolded-protein-response]]", "[[amino-acid-sensing]]", "[[mitochondrial-dysfunction]]", "[[innate-immune-signaling]]"]
downstream: ["[[loss-of-proteostasis]]", "[[protein-synthesis]]", "[[atf4-transcription]]"]
hallmarks: ["[[loss-of-proteostasis]]"]
sens-categories: []
druggability-tier: 2
caused-by: ["[[loss-of-proteostasis]]", "[[mitochondrial-dysfunction]]"]
causes: ["[[loss-of-proteostasis]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "R20 lightweight verifier sweep — all 5 cited DOIs cross-checked via DOI lookup (Harding 2003, Sidrauski 2013, Costa-Mattioli 2020, Krukowski 2020, Halliday 2017) — titles match cited author/year/topic. Sidrauski 2013 has local PDF. Quantitative claims (3-day ISRIB rescue, 4-week durability) referenced via Krukowski 2020 wikilink; primary-PDF verification not performed (#gap/no-fulltext-access on Krukowski 2020)."
---

# Integrated Stress Response (ISR)

The **Integrated Stress Response** is a conserved eukaryotic signaling program in which four distinct stress-sensing kinases converge on a single phosphorylation event — phospho-eIF2α at Ser51 — to coordinate a global reduction in cap-dependent protein translation while selectively upregulating a stress-responsive transcriptional program through the master transcription factor [[atf4]]. The pathway is adaptive in acute stress but becomes maladaptive under chronic activation, contributing to neurodegeneration, metabolic dysfunction, and age-related cognitive decline.

> **Database note:** The canonical Reactome entry R-HSA-381119 covers the full *Unfolded Protein Response (UPR)*, of which the PERK arm is the ISR-relevant component. The ISR spans all four eIF2α kinases and is broader than the UPR. KEGG hsa04141 ("Protein processing in ER") also partially overlaps. No single database entry maps 1:1 to the ISR as defined here; this page uses the PERK-arm Reactome entry as the closest canonical anchor.

## The four stress-sensing kinases

All four kinases phosphorylate eIF2α at the same residue (Ser51) but are activated by distinct upstream signals:

| Kinase | Gene | Primary stress signal | Key tissue context |
|---|---|---|---|
| **PERK** | EIF2AK3 | ER unfolded protein accumulation | ER-abundant secretory cells; pancreatic β-cells |
| **GCN2** | EIF2AK4 | Uncharged tRNA accumulation (amino acid starvation) | Ubiquitous; liver, neurons |
| **HRI** | EIF2AK1 | Heme deficiency; mitochondrial stress (via OMA1→DELE1 axis) | Erythroid precursors; stress-responsive in most cells |
| **PKR** | EIF2AK2 | Viral double-stranded RNA; interferon signaling | Ubiquitous; innate immune sentinel |

The kinases share no sequence similarity in their regulatory domains — their convergence on eIF2α is an example of pathway convergence by phospho-site co-option [^costa-mattioli2020].

## Core mechanism: phospho-eIF2α → ATF4 translation

Phosphorylation of eIF2α-Ser51 by any of the four kinases impairs guanine nucleotide exchange factor eIF2B, reducing the availability of the eIF2-GTP-Met-tRNAi ternary complex required for translation initiation [^harding2003]:

1. **Global translation suppression** — the scarcity of ternary complex stalls most mRNAs at the ribosomal scanning step, broadly reducing protein synthesis. This is protective in acute stress (less folding burden on the ER; less energy expenditure).

2. **Selective ATF4 translation (uORF-mediated)** — the ATF4 mRNA contains inhibitory upstream open reading frames (uORFs) that are normally translated preferentially, preventing the ribosome from reaching the ATF4 ORF. When ternary complex is scarce, the inhibitory uORFs are skipped, and the ribosome re-initiates specifically at the ATF4 ORF [^harding2003]. This counter-intuitive mechanism converts eIF2α phosphorylation — a general translation brake — into a selective induction signal for ATF4.

3. **ATF4 transcriptional program** — [[atf4]] (a bZIP transcription factor) drives expression of:
   - Amino acid biosynthesis and transport genes (ASNS, SLC7A11)
   - Antioxidant response genes
   - [[chop]] (DDIT3) — a pro-apoptotic transcription factor induced under sustained ISR; drives cell death when stress is irreversible
   - [[gadd34]] (PPP1R15A) — a regulatory subunit of the PP1 phosphatase complex that dephosphorylates eIF2α-Ser51, constituting a **negative feedback loop** that terminates the ISR once stress is resolved [^harding2003]

4. **ISR termination** — GADD34-PP1 restores eIF2α to the unphosphorylated state, allowing resumption of normal translation. A constitutive paralogue, CReP/PPP1R15B, maintains baseline eIF2α dephosphorylation under non-stressed conditions.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | partial (genetic disease evidence; pharmacology in progress) |

## Aging biology

### Chronic ISR activation in the aging brain

Acute ISR activation is adaptive; chronic, low-level ISR activation in aged tissues appears to be maladaptive. Costa-Mattioli and Walter (2020) framed chronic ISR as a driver of age-related cognitive decline: sustained eIF2α phosphorylation in aged neurons depresses translation of synaptic-plasticity-relevant mRNAs, impairing long-term potentiation and memory consolidation [^costa-mattioli2020]. This mechanism may contribute to the translational deficit observed in aged hippocampal neurons independently of overt proteinopathy.

**Not established in humans at the mechanistic level** #gap/needs-human-replication — the chronic-ISR-aging-brain connection rests primarily on mouse studies.

### ISRIB: pharmacological bypass of eIF2α phosphorylation

**ISRIB** (Integrated Stress Response InhiBitor) is a small molecule discovered by Sidrauski et al. (2013) that stabilizes the eIF2B decameric complex, making it resistant to inhibition by phospho-eIF2α [^sidrauski2013]. The result is that translation proceeds despite elevated eIF2α-Ser51 phosphorylation — ISRIB "uncouples" the ISR's translational arm from the upstream kinase signal.

Key properties of ISRIB:
- Orally bioavailable; crosses the blood-brain barrier
- Does not prevent eIF2α phosphorylation; acts downstream
- Restores general translation without eliminating ATF4 induction (the uORF mechanism is partially bypassed at high ISRIB doses — the relationship is not binary)

**Cognitive rescue in aged mice:** Krukowski et al. (2020) showed that a 3-day ISRIB treatment in aged (18-month) C57BL/6 mice reversed age-related deficits in hippocampus-dependent spatial memory (Morris water maze) and object-location memory, with effects persisting at least 4 weeks post-treatment [^krukowski2020]. The persistence suggests ISRIB may reset a chronically elevated ISR state rather than merely transiently suppressing it. #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | unknown (cognition rescue not yet tested) |
| Replicated in humans? | no (clinical trials in disease populations only; no aging-cognition trial) |

### HRI arm: mitochondrial stress-to-ISR relay

A distinct arm connects mitochondrial stress to the ISR via HRI: mitochondrial stress activates the inner-membrane protease OMA1, which cleaves the intermembrane space protein DELE1; cleaved DELE1 translocates to the cytoplasm where it directly activates [[hri]] (EIF2AK1) [^costa-mattioli2020]. This OMA1→DELE1→HRI→eIF2α axis constitutes a retrograde mitochondria-to-cytoplasm stress signal, linking [[mitochondrial-dysfunction]] to global translational reprogramming. The axis was characterized in 2020 simultaneously by two groups (Guo et al. *Nature* and Fessler et al. *Nature*). #gap/needs-replication — the aging relevance of this axis (vs. acute mitochondrial stress) has not been directly tested.

## Disease genetics

Two human Mendelian diseases directly implicate ISR components:

| Disease | Gene(s) affected | Mutation type | ISR effect |
|---|---|---|---|
| Wolcott-Rallison syndrome | EIF2AK3 (PERK) | Loss-of-function | Loss of UPR/ISR in pancreatic β-cells → irreversible ER stress → neonatal diabetes + skeletal dysplasia |
| Vanishing white matter disease (VWM/CACH) | EIF2B subunits (EIF2B1–5) | Loss-of-function | Impaired eIF2α dephosphorylation cycling → constitutive translational depression in oligodendrocytes |

VWM is mechanistically informative: mutations in eIF2B — which acts downstream of all four eIF2α kinases — cause white-matter degeneration, directly demonstrating that dysregulated ISR output (not the upstream kinase signal) drives pathology in the CNS [^costa-mattioli2020].

## Therapeutic landscape

### ISRIB and successors

**DNL343** (Denali Therapeutics) is the clinical-stage ISRIB-class eIF2B activator. Trials completed as of 2025:

| Trial | NCT | Phase | Condition | n | Status |
|---|---|---|---|---|---|
| HEALEY ALS Regimen G | NCT05842941 | Phase 2/3 | ALS | 249 | Completed |
| Phase 1b safety/PK | NCT05006352 | Phase 1b | ALS | — | Completed |
| Phase 1 healthy volunteers | NCT04581772 | Phase 1 | Healthy | — | Completed |

#gap/long-term-unknown — Phase 2/3 HEALEY results have not been publicly reported as of 2025. The aging-cognition indication has not entered clinical trials.

### Trazodone as an ISR modulator

Halliday et al. (2017) showed that **trazodone** (an approved antidepressant/sleep aid) and **dibenzoylmethane (DBM)** activate eIF2α dephosphorylation in a GADD34-PP1-dependent manner, preventing neurodegeneration in prion-diseased and tauopathy mice without the anorexia and body-weight loss seen with the direct ISR inhibitor GSK2606414 [^halliday2017]. The mechanism is distinct from ISRIB (trazodone acts on the GADD34 feedback arm, not on eIF2B directly), but the translational rescue outcome is similar. The relevance to aging — as opposed to acute proteinopathy — is not established. #gap/no-mechanism for the exact molecular target of trazodone within the GADD34-PP1 complex. #gap/needs-human-replication for the neuroprotection endpoint in human aging.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial (trazodone is used in humans; neuroprotection endpoint untested) |
| Replicated in humans? | no |

### Upstream kinase-selective inhibitors

- **PERK inhibitors** (GSK2606414, AMG PERK 44): block the UPR-PERK arm; tested in pancreatic cancer and neurodegeneration models. Chronic use causes pancreatic toxicity (Wolcott-Rallison-like effect) in rodents, limiting systemic dosing.
- **GCN2 inhibitors**: explored in amino-acid-restricted tumor microenvironment contexts; aging relevance unclear.
- **PKR inhibitors**: primarily of interest in antiviral and neuroinflammation contexts.

## Intersections with other aging pathways

- **[[mtor]]**: mTORC1 activation suppresses autophagy and promotes translation. The ISR opposes cap-dependent translation while mTOR promotes it — the two pathways act in opposition at the translational level, but can be co-activated under certain stresses (amino acid starvation activates GCN2/ISR while simultaneously suppressing mTOR via Sestrin2/GATOR1). Epistasis between mTOR inhibition and ISR activation in aging has not been formally tested in vivo. #gap/unsourced
- **[[unfolded-protein-response]]**: PERK is one of three UPR sensors (alongside IRE1α and ATF6); the UPR-PERK arm feeds directly into the ISR. The ISR is therefore a downstream effector of ER stress as well as three other stress inputs — it is broader than the UPR. Cross-link: [[unfolded-protein-response]] is an implicit stub in this wiki.
- **[[mitochondrial-dysfunction]]**: HRI arm provides retrograde signaling from damaged mitochondria to the translational machinery; connects this pathway to the [[mitochondrial-dysfunction]] hallmark.
- **[[loss-of-proteostasis]]**: Chronic ISR suppresses protein synthesis globally, potentially impairing synthesis of stress-response and repair proteins; simultaneously, ATF4 induces proteostasis factors. Net effect on proteostasis depends on context and duration. The hallmark connection is bidirectional.

## Limitations and gaps

- **Chronic vs. acute ISR in aging** — the distinction is conceptually important but poorly operationalized: there is no validated biomarker of "chronic ISR" suitable for use in human aging cohorts. Phospho-eIF2α can be measured in tissue biopsies but degrades rapidly ex vivo. #gap/no-mechanism for how to measure ISR tone clinically.
- **Four-kinase contributions in aging** — most aging-relevant ISR data implicates GCN2 (amino acid scarcity in aged organisms) and PERK (ER stress in aged proteome). HRI and PKR contributions to aging are less characterized. #gap/needs-replication
- **ISRIB in humans** — no human data for cognitive aging rescue. The DNL343 ALS trials provide PK/safety data in a disease population; translating dose and duration to a cognitively-healthy aging population is speculative. #gap/needs-human-replication
- **ISR vs. proteostasis directionality** — whether chronic ISR is a *driver* or a *consequence* of aged proteostasis dysfunction is not resolved. The OMA1→DELE1→HRI axis suggests stresses can drive ISR from outside the ER, but whether the ISR subsequently worsens proteostasis or compensates for it remains unclear. #gap/no-mechanism
- **Trazodone mechanism** — exact binding site and molecular target of trazodone in the GADD34-PP1 complex is not established; ISRIB-like translation rescue may be coincidental to its primary (monoamine receptor) pharmacology. #gap/no-mechanism

## Footnotes

[^harding2003]: doi:10.1016/s1097-2765(03)00105-9 · Harding HP et al. · *Molecular Cell* 2003 · n=not applicable (biochemical + cell-based) · in-vitro · model: MEF cells + in-vitro translation systems · defines ISR convergence on eIF2α-Ser51; establishes uORF-dependent ATF4 translation mechanism; introduces GADD34 negative-feedback loop · cited_by ~3255; impact_score 0.87 · PDF not locally downloaded (bronze OA)

[^sidrauski2013]: doi:10.7554/eLife.00498 · Sidrauski C et al. · *eLife* 2013 · in-vitro + in-vivo · model: yeast + mouse (fear-conditioning behavioral assays) · ISRIB discovery; pharmacological brake-release of eIF2α phosphorylation; enhances memory in normal mice · cited_by 717; impact_score 0.81 · PDF locally available:  (local PDF)

[^costa-mattioli2020]: doi:10.1126/science.aat5314 · Costa-Mattioli M & Walter P · *Science* 2020 · review · model: multiple (cell, mouse, human genetics) · comprehensive ISR mechanism review; chronic ISR in aged brain; OMA1→DELE1→HRI axis; VWM and Wolcott-Rallison disease genetics · cited_by 1450; impact_score 0.88; FWCI 93.4 (99th percentile) · PDF not locally downloaded (green OA via PMC8997189)

[^krukowski2020]: doi:10.7554/eLife.62048 · Krukowski K et al. · *eLife* 2020 · in-vivo · model: aged C57BL/6 mice (18 months) · 3-day ISRIB treatment; reversal of age-related hippocampal memory deficits; Morris water maze + object-location memory; effects persist 4 weeks post-treatment · cited_by 164; impact_score 0.72 · PDF not locally downloaded (gold OA)

[^halliday2017]: doi:10.1093/brain/awx074 · Halliday M et al. · *Brain* 2017 · in-vivo · model: prion-diseased mice (ME7) + tauopathy mice (rTg4510) · trazodone and DBM rescue neurodegeneration via GADD34-PP1-dependent eIF2α dephosphorylation; avoids anorexia side-effect of direct PERK inhibitor · cited_by 285; impact_score 0.84 · PDF not locally downloaded (bronze OA)
