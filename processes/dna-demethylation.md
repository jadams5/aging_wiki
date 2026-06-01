---
type: process
aliases: [active DNA demethylation, TET-mediated demethylation, 5mC oxidation, epigenetic erasure]
key-proteins: ["[[tet1]]", "[[tet2]]", "[[tet3]]", "[[tdg]]"]
pathways: ["[[base-excision-repair]]"]
hallmarks: ["[[epigenetic-alterations]]"]
selective-variants: []
druggability-tier: 3
caused-by: []
causes: ["[[epigenetic-alterations]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Tahiliani 2009 verified via PMC full-text XML (PMC2715015; PDF download failed): TET1 chemistry (2OG + Fe(II) dioxygenase), ES cell 5hmC data confirmed. Globisch 2010 verified against full PDF: 5hmC tissue distribution corrected to 0.3–0.7% of dG (CNS), 0.15–0.17% (medium tissues), 0.03–0.06% (low tissues) — all expressed as % of dG, not % of all cytosines. Jaiswal 2014 verified against primary PDF (also cross-checked against previously verified clonal-hematopoiesis and hematopoietic-stem-cells pages): overall CHIP prevalence corrected to 5.6% at 60–69y / 9.5% at 70–79y / 11.7% at 80–89y / 18.4% at ≥90y; prior text had TET2-specific framing and wrong numbers. Lu 2020 cross-checked against verified study page (studies/lu-2020-osk-vision-restoration, verified R31): Extended Data Fig. references corrected (TET mechanism = Fig. 6e–f, not Fig. 7; TDG = Fig. 7a–d). Ito 2011 (10.1126/science.1210597) and He 2011 (10.1126/science.1210944): closed-access, not_oa — 5fC/5caC chemistry and TDG mechanism claims tagged #gap/no-fulltext-access but chemistry is canonical/uncontested. Kohli & Zhang 2013 (10.1038/nature12750): download failed despite PMC listing — review-sourced claims unverified against full text."
---


# DNA Demethylation

The enzymatic and replication-coupled processes that remove 5-methylcytosine (5mC) from genomic DNA, restoring unmodified cytosine (C). **Active demethylation** is executed by the TET family dioxygenases ([[tet1]], [[tet2]], [[tet3]]) through stepwise oxidation of 5mC, followed by base-excision repair; **passive demethylation** occurs when DNMT1 maintenance fails during DNA replication. In the context of aging, active demethylation — particularly TET2-dependent — is central to [[clonal-hematopoiesis]], and TET1/TET2-mediated demethylation is mechanistically required for the epigenetic rejuvenation achieved by OSK partial reprogramming.

This page covers the **removal** side of DNA methylation dynamics. The establishment and maintenance of 5mC marks are covered on the companion page [[dna-methylation]]. The broader hallmark context lives at [[epigenetic-alterations]].

---

## Active demethylation — the TET-TDG-BER axis

### Step 1: TET-catalyzed iterative oxidation of 5mC

TET enzymes (TET1, TET2, TET3) are Fe(II)- and α-ketoglutarate (α-KG)-dependent dioxygenases that catalyze the sequential oxidation of 5mC in three steps [^tahiliani2009] [^ito2011]:

```
5mC  + α-KG + O₂  →  5hmC + succinate + CO₂    (step 1)
5hmC + α-KG + O₂  →  5fC  + succinate + CO₂    (step 2)
5fC  + α-KG + O₂  →  5caC + succinate + CO₂    (step 3)
```

- **5hmC (5-hydroxymethylcytosine):** Discovered by Tahiliani 2009 as the TET1 product [^tahiliani2009]. Not merely a transient intermediate — 5hmC is an abundant, stable epigenetic mark with its own readers, particularly enriched in neurons. Globisch et al. 2010 quantified 5hmC across mouse tissues using isotope-labeled HPLC-MS and found CNS tissues carry the highest levels at **0.3%–0.7% of dG** (cerebral cortex, brainstem, spinal cord, cerebellum), while non-CNS tissues such as kidney, muscle, and lung are in the 0.15%–0.17% of dG range, and liver/spleen are lowest at 0.03%–0.06% of dG [^globisch2010]. Its age-related distribution is tissue-specific. #gap/needs-replication — these values were measured in 12-week-old C57BL/6N mice; age-matched comparisons are absent from Globisch 2010.
- **5fC (5-formylcytosine) and 5caC (5-carboxylcytosine):** Discovered by Ito et al. 2011 [^ito2011]. Present at much lower abundance than 5hmC in most tissues. These oxidized forms serve as the direct substrates for TDG excision. #gap/no-fulltext-access — Ito 2011 is closed-access (not_oa); quantitative details of 5fC/5caC abundance could not be verified against the primary PDF.

The reaction requires **Fe(II)** as a cofactor (susceptible to oxidative inactivation) and **α-KG** as a co-substrate. Vitamin C (ascorbate) maintains Fe²⁺ in its reduced form and stimulates TET activity as an allosteric cofactor, explaining vitamin C's ability to enhance global 5hmC levels in cell culture. Mutant IDH1/IDH2 (producing 2-hydroxyglutarate, a competitive inhibitor of α-KG-dependent dioxygenases) suppresses TET activity and phenocopies TET loss-of-function at the epigenome level — see [[tet2]] for the IDH/TET2 mutual-exclusivity axis in myeloid malignancy.

### Step 2: TDG excises 5fC and 5caC

Thymine-DNA glycosylase (**TDG**) recognizes and excises 5fC and 5caC from a CpG context, generating an abasic (AP) site. TDG does **not** excise 5hmC — it is specific to the more oxidized forms. This TDG step was established by He et al. 2011 in parallel with Ito et al. 2011 [^he2011] [^kohli2013]. #gap/no-fulltext-access — He 2011 is closed-access (not_oa) and Kohli & Zhang 2013 PDF download failed; TDG substrate-specificity claims are canonical and uncontested but not individually verified against these source PDFs.

TDG is an implicit stub in this wiki — see `[[tdg]]` (no protein page yet; see limitations section). #gap/needs-canonical-id

### Step 3: BER restores unmodified cytosine

The AP site generated by TDG is processed by the [[base-excision-repair]] (BER) pathway: AP endonuclease (APE1) cleaves the phosphodiester backbone, and DNA polymerase β fills in an unmodified cytosine. The net result is:

```
5mC  →  (TET oxidation × 2–3 cycles)  →  5fC/5caC  →  (TDG excision)  →  AP site  →  (BER)  →  C
```

The complete cycle is sometimes written as the **TET-TDG-BER axis** [^kohli2013].

---

## Passive demethylation

Separate from active enzymatic removal, **passive demethylation** occurs when the maintenance methyltransferase DNMT1 fails to re-methylate hemimethylated CpG sites immediately after replication. Each cell division that lacks DNMT1-mediated maintenance dilutes 5mC content by ~50%. This is:

- The dominant mode in **early embryogenesis** (paternal genome demethylation in the zygote is partly passive; maternal genome largely protected by STELLA/DPPA3)
- Relevant in **rapid-cycling progenitor populations** under conditions that impair DNMT1 activity (e.g., replication stress, oxidative damage to DNMT1)
- NOT the dominant aging-relevant mechanism in post-mitotic or slow-cycling tissues — active TET-mediated demethylation drives most site-specific demethylation events in adult somatic cells

---

## TET family — paralogue comparison

| Feature | TET1 | TET2 | TET3 |
|---|---|---|---|
| UniProt | Q8NFU7 | Q6N021 | O43151 |
| CXXC zinc-finger (CpG-binding) | Yes | No (lost; IDAX encodes separately) | Yes (partial) |
| Primary tissue abundance | ES cells, brain | Hematopoietic stem cells, ubiquitous | Oocytes, brain, retina |
| CHIP driver? | No | Yes (#2 most common) | No |
| Required for OSK rejuvenation? | Yes | Yes | No |
| Aging-context role | Neural memory/epigenetic homeostasis | HSC maintenance; loss drives CHIP + inflammation | Retinal function; maternal imprinting |

See individual protein pages — [[tet1]], [[tet2]], [[tet3]] — for full mechanistic and aging details.

---

## Role in aging

### TET2 decline in aged HSCs — the CHIP connection

TET2 expression and activity decline in aged hematopoietic stem cells (HSCs), and somatic loss-of-function mutations in TET2 accumulate with age. TET2 mutations are the **second most common CHIP driver** (after DNMT3A). Jaiswal et al. 2014 sequenced 17,182 individuals and found that detectable somatic mutations across all CHIP driver genes (DNMT3A, TET2, ASXL1, and others) were present in **5.6%** of those aged 60–69, **9.5%** at 70–79, **11.7%** at 80–89, and **18.4%** at ≥90 years [^jaiswal2014]. TET2 was the second most frequently mutated gene (72 variants, after DNMT3A's 403 variants) in this cohort. These figures reflect overall CHIP prevalence (all driver mutations), not TET2-specific prevalence alone. This somatic-mutation mechanism is distinct from the passive age-related TET2 expression decline — both converge on impaired 5hmC/5mC cycling in HSCs.

Consequences of TET2 loss in HSCs:
- Clonal expansion of the TET2-mutant clone (see [[clonal-hematopoiesis]])
- Pro-inflammatory SASP-like output from TET2-mutant macrophages (IL-6, IL-8 upregulation)
- Accelerated cardiovascular risk independent of malignant transformation
- Hypermethylation at enhancers normally controlled by TET2

See [[tet2]] and [[clonal-hematopoiesis]] for the mechanistic cascade. The somatic-mutation context means standard germline Mendelian randomization cannot capture this aging-relevant TET2 variation (the relevant variant is acquired, not inherited — see [[tet2]] `mr-causal-evidence: not-applicable-somatic`).

### 5hmC — aging in the brain

5hmC is abundant and relatively stable in neurons. Globisch et al. 2010 measured **0.3%–0.7% of dG** in CNS tissues (cerebral cortex, brainstem, cerebellum, spinal cord) of adult mice, substantially higher than peripheral tissues (0.03%–0.17% of dG) [^globisch2010]. Note: these values are expressed as % of dG (the guanine reference base used in HPLC-MS quantification), not % of all cytosines. **5hmC levels in the brain are maintained at relatively high levels in adult neurons**, distinguishing brain from rapidly dividing tissues where passive dilution would clear 5hmC. Whether 5hmC changes are causal to or consequential of neuronal aging is unresolved. #gap/no-mechanism

### Active demethylation is required for epigenetic rejuvenation (OSK partial reprogramming)

The most direct evidence that active demethylation is aging-relevant comes from Lu et al. 2020 (verified, [[studies/lu-2020-osk-vision-restoration]]): OSK partial reprogramming reverses the epigenetic age of mouse retinal ganglion cells (RGCs) and restores vision in aging and glaucoma models. **TET1 and TET2 knockdown each independently abolished the OSK rejuvenation effect; TET3 knockdown did not** (TET3 KD P = 0.089, not significant; Extended Data Fig. 6e–f of Lu 2020) [^lu2020]. TDG knockdown also completely abolished the effect (Extended Data Fig. 7 of Lu 2020), confirming the full TET-TDG-BER axis is required — not just the oxidation steps [^lu2020].

This establishes that the [[hypotheses/information-theory-of-aging|information-theory-of-aging]]'s epigenetic reset mechanism operates specifically through active demethylation at targeted loci, not through wholesale passive dilution.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Yes (TET enzymes and TDG are conserved; 5hmC present in human brain) |
| Phenotype conserved in humans? | Partial (CHIP/TET2 is human-documented; OSK rejuvenation is mouse-only so far) |
| Replicated in humans (OSK)? | No — in-progress (#gap/needs-human-replication) |

---

## Regulation of TET activity

| Regulator | Effect | Mechanism |
|---|---|---|
| α-KG (2-oxoglutarate) | Activating (co-substrate) | Required for dioxygenase reaction; low α-KG (IDH mutations, metabolic stress) suppresses TET |
| 2-HG (2-hydroxyglutarate) | Inhibiting | Competitive inhibitor at α-KG binding site; produced by mutant IDH1/IDH2 |
| Vitamin C (ascorbate) | Activating | Maintains Fe²⁺ in reduced state; allosteric stimulation of TET catalytic rate |
| Fe²⁺ oxidation / ROS | Inhibiting | Oxidative stress converts Fe²⁺ → Fe³⁺ in the active site, inactivating TET |
| IDAX/CXXC4 (for TET2) | Targeting | Recruits TET2 to CpG islands (TET2 lacks its own CXXC domain) |
| NANOG / OCT4 (in stem cells) | Activating | Transcriptional induction of Tet1/Tet2 during reprogramming |

---

## Druggability

Druggability-tier: **3** (aging context). No TET-activating drug has reached clinical use for aging. Approaches under investigation:

- **α-KG supplementation** — cell-permeable α-KG esters (e.g., dimethyl-α-KG) can boost TET activity in cell culture and some in-vivo models. No aging clinical trial as of 2026-05-07. #gap/needs-human-replication
- **Vitamin C** — acts as TET cofactor; shown to increase 5hmC and aid reprogramming efficiency in vitro. At physiological concentrations the effect on TET activity in aged tissue is small; megadose effects unproven.
- **IDH1/IDH2 inhibitors** (ivosidenib, enasidenib) — reduce 2-HG production in IDH-mutant cancers, partially restoring TET activity. Aging application is IDH-mutation-independent, so not directly applicable to typical CHIP.
- **BER inhibitors** (PARP inhibitors) — block downstream BER and would be expected to impair active demethylation. These are anti-cancer agents and would be counterproductive for aging-context demethylation rescue. #gap/dose-response-unclear

---

## Limitations and gaps

- **TDG protein page missing** — [[tdg]] is an implicit stub. TDG's role in OSK rejuvenation is verified from Lu 2020 Extended Data Fig. 7, but the protein's full aging biology is undocumented in this wiki. Priority stub to seed. #gap/needs-canonical-id
- **BER pathway page missing** — [[base-excision-repair]] is an implicit stub. The BER step in demethylation is covered here; BER's broader role in DNA damage repair during aging (single-strand break accumulation, OGG1, PARP1) is out of scope for this page. #gap/stub
- **5hmC aging changes are incompletely characterized** — most data come from bulk tissue; single-cell 5hmC mapping with age is nascent. Whether region-specific 5hmC changes are causal vs. epiphenomenal is unresolved. #gap/no-mechanism
- **OSK human evidence is absent** — the TET/TDG requirement for epigenetic rejuvenation is established in mouse RGCs only. Human trials of partial reprogramming are in very early stages (see [[partial-reprogramming]] for trial status). #gap/needs-human-replication
- **Passive vs. active demethylation quantitative balance** — the relative contribution of passive dilution vs. active TET-mediated demethylation to the progressive loss of CpG methylation observed in aged tissues is not precisely quantified for most tissue types. #gap/no-mechanism

---

## Related pages

- [[dna-methylation]] — establishment and maintenance of 5mC; companion process page
- [[tet1]], [[tet2]], [[tet3]] — individual TET enzyme pages (all verified)
- [[tdg]] — thymine DNA glycosylase; implicit stub
- [[base-excision-repair]] — downstream repair pathway; implicit stub
- [[clonal-hematopoiesis]] — aging phenotype driven by TET2 loss-of-function CHIP mutations
- [[partial-reprogramming]] — process that requires TET1/TET2 for epigenetic rejuvenation
- [[epigenetic-alterations]] — hallmark MOC
- [[hypotheses/information-theory-of-aging]] — theoretical frame for why active demethylation matters for rejuvenation
- [[dnmt3a]] — frequent co-mutant with TET2 in CHIP; establishes the 5mC marks that TET enzymes oxidize

---

## Footnotes

[^tahiliani2009]: doi:10.1126/science.1170116 · Tahiliani M et al. · *Science* 2009 · n=N/A · in-vitro (HEK293 cells + purified recombinant TET1-CD in insect cells) + in-vivo (mouse ES cells) · foundational discovery: TET1 is a 2-oxoglutarate (2OG = α-KG)- and Fe(II)-dependent dioxygenase that converts 5mC → 5hmC; absolute requirement for Fe(II) and 2OG demonstrated in purified enzyme assay; 5hmC observed in mouse ES cells and abolished by TET1 RNAi knockdown; no tissue distribution data in this paper · OA via PMC2715015; PDF download failed (archive status: failed); verified from PMC full-text XML via eutils
[^ito2011]: doi:10.1126/science.1210597 · Ito S et al. · *Science* 2011 · in-vitro · foundational: TET proteins convert 5mC → 5fC and 5caC (steps 2–3 of the oxidation cascade); not_oa (closed-access) — cannot verify quantitative details against primary PDF #gap/no-fulltext-access
[^he2011]: doi:10.1126/science.1210944 · He YF et al. · *Science* 2011 · in-vitro · parallel discovery of 5caC formation and TDG-mediated excision; not_oa (closed-access) — cannot verify against primary PDF #gap/no-fulltext-access
[^globisch2010]: doi:10.1371/journal.pone.0015367 · Globisch D et al. · *PLoS ONE* 2010 · in-vivo (12-week-old C57BL/6N mice; n ≥ 2/tissue) · isotope-labeled HPLC-MS quantification of 5hmC and 5mC as % of dG across mouse tissues · CNS tissues highest: 0.3%–0.7% of dG (cerebral cortex, brainstem, spinal cord, cerebellum); medium tissues (kidney, nasal epithelium, bladder, heart, skeletal muscle, lung): 0.15%–0.17% of dG; low tissues (liver, spleen, endocrine glands): 0.03%–0.06% of dG; fC and caC undetectable by this method (below detection threshold of 7×10⁻⁵%); OA · local PDF verified
[^kohli2013]: doi:10.1038/nature12750 · Kohli RM & Zhang Y · *Nature* 2013 · review · comprehensive mechanistic review of TET-TDG-BER axis; OA listed via PMC4046508 but PDF download failed — review-sourced claims unverified against full text #gap/no-fulltext-access
[^jaiswal2014]: doi:10.1056/NEJMoa1408617 · Jaiswal S et al. · *NEJM* 2014 · observational · n=17,182 (whole-exome sequencing of peripheral blood; 22 cohorts) · age-related CHIP (all driver genes — DNMT3A, TET2, ASXL1, others): 5.6% at 60–69y, 9.5% at 70–79y, 11.7% at 80–89y, 18.4% at ≥90y; TET2 was second most frequently mutated gene (72 variants of 805 total); adverse outcomes: HR=1.4 all-cause mortality, HR=2.0 coronary heart disease, HR=2.6 ischemic stroke, HR=11.1 hematologic malignancy; local PDF verified
[^lu2020]: doi:10.1038/s41586-020-2975-4 · Lu Y et al. (Sinclair DA) · *Nature* 2020 · in-vivo · model: C57BL/6J mouse RGCs · OSK partial reprogramming requires TET1 + TET2 (not TET3, P=0.089 ns) for epigenetic rejuvenation (Extended Data Fig. 6e–f) and TDG for the full demethylation cycle (Extended Data Fig. 7a–d); TET2 cKO via Cre also abolishes benefit; n=4 eyes per condition in mechanism arm; verified [[studies/lu-2020-osk-vision-restoration]]; local PDF available
