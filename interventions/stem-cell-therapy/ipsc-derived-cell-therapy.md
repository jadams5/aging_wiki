---
type: intervention
aliases: [iPSC therapy, iPSC-derived cell therapy, iPSC-derivative grafting, autologous iPSC therapy, allogeneic iPSC-derived cell therapy]
mode: stem-cell-therapy
mechanisms: [cell-replacement, tissue-regeneration]
targets: []
target-hallmarks: ["[[stem-cell-exhaustion]]"]
target-pathways: []
human-evidence-level: limited
clinical-stage: phase-1
safety-profile: investigational
translation-gap: phase-3-rct-needed
next-experiment: "For iPSC-DA (Parkinson's): Phase 3 multicenter RCT vs sham surgery with UPDRS primary endpoint + DAT-SPECT graft survival + 5-year tumorigenicity surveillance. For iPSC-RPE: Phase 3 RCT vs sham injection with BCVA + fundus autofluorescence lesion-area co-endpoints."
clinical-trials-active: 4
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Takahashi 2006, Lapasset 2011, Mandai 2017, and Doi/Sawamoto 2025 verified against primary source PDFs. Takahashi 2007 (closed-access, status: failed) and Yu 2007 (not_oa) verified via abstract only — both foundational iPSC papers whose core claims (human iPSC induction, OSKM factors, OSNL alternative) are well-established and not disputed. Reichman 2025 NEJM (not_oa) not verifiable against full PDF — claims tagged accordingly. R34 recency pass (2026-05-08): added Tabar 2025 Nature (NCT04802733 BlueRock bemdaneprocel Phase 1 results) — abstract-verified only via PubMed (PMID 40240592, doi:10.1038/s41586-025-08845-y); full PDF not accessed; n's, dose levels, MDS-UPDRS effect sizes, and ¹⁸F-DOPA PET findings extracted from abstract. The 'BlueRock results not yet published' wording in the prior body was superseded; verifier should confirm against full PDF when available."
---

# iPSC-derived cell therapy

The therapeutic use of differentiated cells generated from induced pluripotent stem cells ([[induced-pluripotent-stem-cells]]) — somatic cells reprogrammed to pluripotency by defined transcription factors and then re-differentiated into a target cell type for transplantation. iPSC technology was established in mouse cells by Takahashi and Yamanaka in 2006 [^takahashi2006] and in human cells by two independent groups in 2007 [^takahashi2007][^yu2007]. It offers a theoretically unlimited, patient-matched (autologous) or donor-banked (allogeneic) source of any cell type in the body. **Clinical evidence is limited and indication-specific** — the most advanced program (iPSC-derived retinal pigment epithelium for AMD) has multi-year follow-up in a handful of patients; iPSC-derived dopaminergic neurons for Parkinson's disease have reached Phase 1/2; β-cell and cardiomyocyte programs are early Phase 1 or preclinical.

---

## Background: iPSC technology and its therapeutic logic

Shinya Yamanaka's 2006 discovery that four transcription factors — [[oct4]], [[sox2]], [[klf4]], and [[c-myc]] (the "OSKM" factors) — are sufficient to revert mouse fibroblasts to a pluripotent state [^takahashi2006] opened the possibility of generating patient-specific pluripotent cells without embryo use. Within 12 months, the approach was replicated in human adult fibroblasts [^takahashi2007], and Thomson's group simultaneously demonstrated human iPSC induction with an alternative factor set (OCT4, SOX2, NANOG, LIN28) [^yu2007].

The therapeutic logic is:

1. **Autologous**: harvest somatic cells (skin fibroblasts, blood) from the patient, reprogram to iPSCs, differentiate to the needed cell type, and transplant back — bypassing immune rejection without immunosuppression.
2. **Allogeneic bank**: generate iPSC lines from HLA-homozygous "super-donors" covering a high fraction of the population, maintain a differentiated-cell bank, and infuse with minimal immunosuppression. This is scalable where autologous manufacture is not.

A critical aging-biology feature: **iPSC reprogramming erases multiple hallmarks of cellular aging**. Lapasset et al. (2011) showed, using a six-factor cocktail (OSKM + NANOG + LIN28), that iPSC lines derived from senescent and centenarian human fibroblasts had telomere lengths, gene expression profiles, oxidative-stress markers, and mitochondrial membrane potential indistinguishable from human embryonic stem cells — effectively reversing the cellular aging phenotype [^lapasset2011]. Note: Lapasset 2011 measures telomere length (TRF analysis), transcriptome clustering, and mitochondrial function; it does not measure the Horvath DNA-methylation clock (published 2013). Whether iPSC reprogramming resets the DNA-methylation clock is separately supported by Horvath 2013 and subsequent work. This means iPSC-derivatives transplanted into an aging recipient carry a rejuvenated cellular phenotype regardless of donor age, making them conceptually distinct from simple somatic-cell transfer. See [[partial-reprogramming]] for the non-integrating rejuvenation approach that exploits reprogramming factors without full dedifferentiation.

---

## Indication landscape

### 1. iPSC-derived retinal pigment epithelium (RPE) for age-related macular degeneration (AMD)

AMD is a leading cause of blindness in people over 60, driven partly by loss of the RPE monolayer that supports photoreceptors. [[age-related-macular-degeneration]] (implicit stub)

The first-in-human iPSC cell therapy of any kind was an autologous iPSC-RPE sheet transplanted into the subretinal space of a patient with neovascular AMD at the RIKEN Center for Developmental Biology, Kobe, Japan (Takahashi/Mandai group). Mandai et al. (2017) reported that in the single autologous-iPSC case, the iPSC-RPE sheet engrafted, best-corrected visual acuity was maintained at approximately 0.1 (20/200 on Snellen) at 1 year with no serious complications and no abnormal proliferation, and follow-up extended to 25 months without adverse events; cystoid macular edema was present but judged to reflect ongoing disease rather than graft rejection [^mandai2017]. A second patient with allogeneic iPSC-RPE was not transplanted when three DNA copy-number deletions (CNVs) were detected in the donor iPSC-derived RPE cells — notably no cancer-driver SNVs were found, and the iPSC-derived cells passed tumorigenicity tests, but the CNVs raised concerns about gene-expression effects — illustrating the chromosomal-aberration risk during iPSC culture and expansion. #gap/needs-replication

Subsequent allogeneic programs include Lineage Cell Therapeutics (OpRegen; subretinal injection in geographic atrophy from dry AMD; NCT04339764, recruiting), and several Japanese academic programs under PMDA's conditional approval pathway. As of 2026-05, at least 4 iPSC-RPE trials are active globally.

| Extrapolation dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — RPE cell biology is directly human-relevant |
| Phenotype conserved in humans? | yes — AMD is a human indication; no animal model needed for proof-of-concept |
| Replicated in humans? | in-progress — n=1 autologous (Mandai 2017); multiple allogeneic sites recruiting |

### 2. iPSC-derived dopaminergic (DA) neurons for Parkinson's disease

Parkinson's disease involves progressive loss of substantia nigra DA neurons. Fetal-tissue transplants (1980s–90s) demonstrated conceptual proof for cell replacement but were ethically constrained and inconsistent. iPSC-DA programs systematize this into a defined, scalable product.

Takahashi's group at Kyoto University began the first regulated iPSC-DA trial in 2018 (UMIN000033564; also registered as jRCT2090220384). Sawamoto, Doi et al. (2025) reported Phase 1/2 results in Nature: 7 patients (ages 50–69) received **bilateral** putaminal injections of allogeneic iPSC-DA progenitors (low-dose n=3: 2.1–2.6×10⁶ cells/hemisphere; high-dose n=4: 5.3–5.5×10⁶ cells/hemisphere); 1 patient was subsequently excluded from efficacy analysis (unilateral surgery only). At 24 months in the efficacy set (n=6), grafts were confirmed viable by **¹⁸F-DOPA PET** (mean putaminal influx rate constant K_i increased by 44.7%); no tumour-like overgrowth was detected; no 5-HT⁺ serotonergic cells were detected (key risk in fetal-tissue transplants). MDS-UPDRS part III OFF scores improved in 4 of 6 efficacy-set patients, with an average change of −9.5 points (−20.4%); 5 of 6 improved on ON scores (average −4.3 points, −35.7%). Tacrolimus immunosuppression was administered throughout and discontinued at 15 months [^doi2025]. Full efficacy assessment awaits a controlled Phase 3. #gap/needs-replication

BlueRock Therapeutics (a Bayer subsidiary) reported the parallel Phase 1 of **bemdaneprocel** (allogeneic hES-derived dopaminergic progenitors; NCT04802733) in *Nature* in 2025 [^tabar2025]. Twelve patients with PD received bilateral putaminal grafting (low-dose 0.9×10⁶ cells/n=5; high-dose 2.7×10⁶ cells/n=7) with one year of immunosuppression. The trial met its primary safety/tolerability objective with no cell-product-related adverse events; at 18 months, ¹⁸F-DOPA PET showed increased putaminal uptake indicating graft survival; MDS-UPDRS Part III OFF improved by an average 23 points in the high-dose cohort; no graft-induced dyskinesias were observed. Note: this is hES-derived (not iPSC-derived) — bemdaneprocel uses human embryonic stem cells as the starting material rather than reprogrammed iPSCs. Two parallel Phase 1/2 programs use iPSC-derived progenitors: Takahashi/Kyoto (Doi 2025, allogeneic iPSC-DA) and Sumitomo Pharma's CT1-DAP001 (allogeneic iPSC-DA, Phase 1/2 in Japan, NCT06482268). The Tabar 2025 result is included on this page because it is the most direct comparator and validates the broader pluripotent-stem-cell-DA-progenitor approach. #gap/needs-replication — Phase 3 bemdaneprocel pivotal trial pending.

| Extrapolation dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — dopamine synthesis pathway (TH, AADC) conserved |
| Phenotype conserved in humans? | yes — clinical trial is directly in human PD patients |
| Replicated in humans? | in-progress — single-center Kyoto Phase 1/2 reported; BlueRock multicenter ongoing |

### 3. iPSC-derived β cells for type 1 diabetes

T1D results from autoimmune destruction of pancreatic β cells; restoration of a functional insulin-secreting cell mass is the conceptual goal. Vertex Pharmaceuticals' VX-880 uses fully differentiated stem cell-derived islet cells (SC-islets) transplanted into the hepatic portal vein with standard immunosuppression. Reichman et al. (2025) reported in NEJM that VX-880 recipients achieved glucose-dependent insulin secretion and some achieved insulin independence, with acceptable safety signals at up to 2 years follow-up [^reichman2025]. #gap/needs-replication #gap/long-term-unknown

Vertex also runs VX-264, which encapsulates SC-islets in a device to avoid systemic immunosuppression — addressing the autoimmune recurrence problem. This is preclinical/Phase 1 as of 2026-05.

The prior ViaCyte/CRISPR collaboration demonstrated feasibility of encapsulated implantation; the cells were partially functional.

| Extrapolation dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — insulin secretion and glucose sensing are human-relevant |
| Phenotype conserved in humans? | yes — T1D is a human indication |
| Replicated in humans? | limited — Reichman 2025 NEJM (multi-center, n not specified in this summary; Phase 1/2) |

### 4. iPSC-derived cardiomyocytes for heart failure

Cardiomyocyte loss after myocardial infarction contributes to heart failure — a leading cause of mortality in aging populations. Heartseed (Japan) and Novo Nordisk (HEAL-CHF program) are developing iPSC-cardiomyocyte injection therapies. Heartseed's HS-001 has entered Phase 1 in Japan. Results are preliminary with no peer-reviewed efficacy publication as of 2026-05. #gap/long-term-unknown #gap/needs-replication

---

## Aging-biology relevance

iPSC-derived cell therapy addresses [[stem-cell-exhaustion]] obliquely: it does not restore the patient's own stem cell pool but substitutes functional differentiated cells lost to aging pathology. The strongest aging connection is through the **cellular rejuvenation** of the graft. Lapasset et al. (2011) demonstrated that reprogramming senescent and centenarian fibroblasts with a six-factor cocktail (OSKM + NANOG + LIN28) resets telomere length, gene expression, mitochondrial membrane potential, and oxidative-stress markers to an embryonic-stem-cell-like state [^lapasset2011], meaning an iPSC-derivative from a 70-year-old donor behaves like a young cell — potentially superior to direct somatic-cell transplantation, where donor-age effects can persist. DNA-methylation clock erasure (Horvath clock) during reprogramming is separately documented in the literature but is not what Lapasset 2011 measured.

Cross-reference:

- [[partial-reprogramming]] — exploits the same OSKM axis to reset epigenetic age in situ without full dedifferentiation; a conceptual complement (rejuvenate cells in place vs replace cells entirely)
- [[induced-pluripotent-stem-cells]] — molecular biology of reprogramming; OSKM mechanisms; epigenetic clock reset details
- [[cellular-senescence]] — the iPSC-derivative side-steps senescence burden that accrues in aging somatic cells
- [[hallmarks-of-aging]] — stem-cell-exhaustion and epigenetic-alterations hallmarks are most directly addressed

---

## Risks and translation hurdles

### Tumorigenicity

Incompletely differentiated iPSCs or proliferating progenitors in a graft can form teratomas. This risk is managed by rigorous differentiation protocols, negative-selection steps, and post-implant surveillance imaging. No tumour-like overgrowth was detected by MRI or ¹⁸F-FLT PET in the Kyoto Phase 1/2 cohort over 24 months (n=7 safety analysis set) [^doi2025], but sample sizes are small and the 2-year observation period is insufficient to detect slowly arising tumours. Post-mortem histological confirmation of graft integrity is not yet available. #gap/long-term-unknown

### Chromosomal abnormalities during expansion

iPSC culture selects for cells with growth advantages; passage-dependent chromosomal aberrations (CNV deletions and duplications) are documented. In Mandai 2017, the allogeneic case was halted due to three CNV deletions detected in the donor iPSC-derived RPE cells (no cancer-driver SNVs were found) [^mandai2017]. Recurrent culture-adaptation changes at specific loci (e.g., chromosome 17p, 12p) have been documented across iPSC lines in the broader literature. Routine karyotyping and CNV sequencing before clinical use are now standard but add to manufacturing complexity.

### Differentiation heterogeneity

Even optimized protocols generate heterogeneous populations. Contaminating off-target cell types may be inert, immunogenic, or — in rare cases — oncogenic. Single-cell RNA-seq QC of final products is increasingly deployed. #gap/no-mechanism for long-term fate of non-target cells in graft

### Immune rejection (allogeneic)

HLA mismatch drives rejection. Allogeneic programs use either (a) HLA-homozygous donor banks matching the patient at critical loci, (b) hypo-immunogenic universal donor iPSC lines (edited to remove HLA class I/II; add CD47 "don't-eat-me" signal), or (c) conventional immunosuppression. Outcome data on long-term graft survival under these strategies is limited. #gap/long-term-unknown

### Autoimmune recurrence (T1D)

Even a successful β-cell graft will eventually be destroyed by the same autoimmune mechanism that caused T1D — requiring either encapsulation (VX-264 strategy) or systemic immune tolerance induction. This is a mechanistic gap not present in the RPE or DA-neuron indications. #gap/no-mechanism

---

## Sibling intervention pages

- [[hematopoietic-stem-cell-transplantation]] — HSC transplantation; the original stem-cell therapy; shares manufacturing/engraftment concepts
- [[mesenchymal-stem-cell-therapy]] — MSC infusions; paracrine trophic mechanism vs iPSC cell-replacement
- [[in-vivo-partial-reprogramming-therapy]] — in vivo OSKM delivery; related but distinct from ex vivo iPSC generation
- [[aav-tert]] — gene therapy approach targeting a different aging mechanism; contrasted in the gene-therapy section of the wiki

---

## Limitations and gaps

- **All programs are Phase 1/2 or earlier.** No iPSC-derived therapy for any aging-relevant indication has completed Phase 3 with a powered efficacy endpoint. #gap/needs-replication
- **Long-term tumorigenicity data are absent.** Observation periods (1–2 years) are insufficient to detect slowly arising tumors. #gap/long-term-unknown
- **Manufacturing scalability.** Autologous manufacture (Mandai 2017 design) is operationally and cost-prohibitive at scale; allogeneic banks solve scalability but introduce immune management complexity. #gap/unsourced — cost-modeling citations not identified.
- **No whole-organism lifespan data.** Unlike rapamycin or caloric restriction, iPSC-derived cell therapy has not been tested for lifespan extension in any model organism. Relevance to aging per se (rather than specific age-related diseases) is conceptual. #gap/needs-human-replication
- **Cellular rejuvenation of iPSC-derivatives is established in vitro** (Lapasset 2011 [^lapasset2011]: telomere length, transcriptome, mitochondrial function reset) but whether the transplanted graft retains "young" cellular behavior at 5–10 years in vivo is not known. DNA-methylation clock erasure is separately supported but not derived from Lapasset 2011. #gap/long-term-unknown

---

## Cross-references

- [[induced-pluripotent-stem-cells]] (will be seeded same batch) — atomic iPSC biology; OSKM mechanism; reprogramming efficiency
- [[partial-reprogramming]] (process; exists verified-partial) — in situ epigenetic rejuvenation without full pluripotency
- [[oct4]], [[sox2]], [[klf4]], [[c-myc]] — Yamanaka factors; all seeded (verified-partial per R-series)
- [[stem-cell-exhaustion]] — target hallmark
- [[cellular-senescence]] — relevant hallmark; iPSC-derivatives bypass donor senescence burden
- [[parkinsons-disease]] (phenotype; exists) — primary DA-neuron indication
- [[age-related-macular-degeneration]] (implicit stub) — primary RPE indication
- [[type-1-diabetes]] (implicit stub) — primary β-cell indication; note [[type-2-diabetes]] exists but is a different entity
- [[heart-failure]] (phenotype; exists) — cardiomyocyte indication context
- [[hematopoietic-stem-cell-transplantation]] (implicit stub) — sibling intervention
- [[mesenchymal-stem-cell-therapy]] (implicit stub) — sibling intervention
- [[in-vivo-partial-reprogramming-therapy]] (implicit stub) — related gene therapy approach
- [[hallmarks-of-aging]], [[sens-damage-categories]] — framework overlays

---

## Footnotes

[^takahashi2006]: doi:10.1016/j.cell.2006.07.024 · Takahashi K, Yamanaka S · in-vitro · Cell 2006 · 126(4):663–676 · model: mouse fibroblasts · OCT4/SOX2/KLF4/c-MYC retroviral transduction reprograms mouse embryonic and adult fibroblasts to iPSCs; iPSCs form teratomas and chimeras · archive: local PDF available (bronze OA) · citation percentile: 100th (26,108 citations)

[^takahashi2007]: doi:10.1016/j.cell.2007.11.019 · Takahashi K, Tanabe K, Ohnuki M, Narita M, Ichisaka T, Tomoda K, Yamanaka S · in-vitro · Cell 2007 · 131(5):861–872 · model: human adult fibroblasts · same four factors (OSKM) reprogram human somatic cells to iPSCs with human ESC-like properties · archive: not_oa · citation percentile: 100th (19,855 citations)

[^yu2007]: doi:10.1126/science.1151526 · Yu J, Vodyanik MA, Smuga-Otto K, Antosiewicz-Bourget J, Frane JL, Tian S, Nie J, Jonsdottir GA, Ruotti V, Stewart R, Slukvin II, Thomson JA · in-vitro · Science 2007 · 318(5858):1917–1920 · model: human somatic cells · OCT4/SOX2/NANOG/LIN28 as alternative factor set; demonstrates iPSC induction independent of c-MYC · archive: not_oa · citation percentile: 100th (10,177 citations)

[^mandai2017]: doi:10.1056/NEJMoa1608368 · Mandai M et al. (Takahashi M group, RIKEN) · in-vivo · N Engl J Med 2017 · 376(11):1038–1046 · n=2 (1 autologous transplanted, 1 allogeneic not transplanted) · first-in-human iPSC-RPE subretinal sheet transplantation (1.3×3.0 mm sheet, ~100,000 cells); autologous patient (77-year-old woman, wet AMD): BCVA maintained at ~0.1 (20/200 Snellen) at 1 year and through 25-month follow-up, no serious adverse events, no abnormal proliferation, cystoid macular edema present (judged as ongoing disease); allogeneic case not transplanted due to three CNV deletions detected in donor iPSC-derived RPE (no cancer-driver SNVs found, tumorigenicity tests passed) · archive: downloaded (camoufox; NEJM)

[^lapasset2011]: doi:10.1101/gad.173922.111 · Lapasset L et al. (Lemaitre group) · in-vitro · Genes Dev 2011 · 25(21):2248–2253 · model: human senescent (74-yr-old donor; replicative senescence) and centenarian (92-, 94-, 96-, 101-yr-old) fibroblasts · six-factor cocktail (OSKM + NANOG + LIN28) reprograms senescent and aged cells to iPSCs indistinguishable from hESCs; resets telomere length (TRF analysis), gene expression profiles (microarray clustering), mitochondrial membrane potential (JC-1 FACS), and oxidative-stress markers; redifferentiated fibroblasts show rejuvenated proliferation capacity and transcriptome clustering with young embryonic fibroblasts; does NOT measure Horvath DNA-methylation clock (published 2013) · archive: local PDF available (diamond OA)

[^doi2025]: doi:10.1038/s41586-025-08700-0 · Sawamoto N, Doi D, Nakanishi E, Sawamura M et al. (Takahashi J group, Kyoto University) · in-vivo · Nature 2025 · Phase 1/2 · n=7 (safety); n=6 (efficacy) · model: human Parkinson's disease patients (ages 50–69) · allogeneic iPSC-DA progenitors injected **bilaterally** into putamen (low-dose 2.1–2.6×10⁶/hemisphere n=3; high-dose 5.3–5.5×10⁶/hemisphere n=4); 24-month follow-up: graft survival confirmed by ¹⁸F-DOPA PET (mean putaminal K_i +44.7%), no tumour-like overgrowth by MRI/¹⁸F-FLT PET, MDS-UPDRS part III OFF improved in 4/6 efficacy-set patients (mean −9.5 points, −20.4%), 5/6 improved on ON scores · archive: local PDF available

[^reichman2025]: doi:10.1056/NEJMoa2506549 · Reichman TW et al. (Vertex Pharmaceuticals / multicenter) · in-vivo · N Engl J Med 2025 · Phase 1/2 · VX-880 (SC-islets) infused via hepatic portal vein with immunosuppression; glucose-dependent insulin secretion achieved; some patients reached insulin independence; safety acceptable at up to 2 years · archive: not_oa · #gap/needs-replication

[^tabar2025]: doi:10.1038/s41586-025-08845-y · Tabar V, Sarva H, Lozano AM, Fasano A, Kalia SK, Yu KKH, Brennan C, Ma Y, Peng S, Eidelberg D, Tomishima M, Irion S, Stemple W, Abid N, Lampron A, Studer L, Henchcliffe C · Nature 2025 · 641(8064):978–983 · Phase 1 (NCT04802733) · n=12 (low-dose 0.9×10⁶ cells/hemisphere n=5; high-dose 2.7×10⁶ cells/hemisphere n=7) · model: human Parkinson's disease patients receiving bilateral putaminal grafting of bemdaneprocel (cryopreserved hES cell-derived dopaminergic neuron progenitors); 1-year immunosuppression · primary endpoint safety/tolerability achieved (no cell-product-related AEs); 18-month ¹⁸F-DOPA PET: increased putaminal uptake (graft survival); MDS-UPDRS-III OFF mean improvement 23 points in high-dose cohort; no graft-induced dyskinesias · note: hES-derived (not iPSC-derived) but represents direct pluripotent-stem-cell-DA-progenitor comparator to Doi 2025 Kyoto iPSC trial · archive: not_oa — abstract-verified only (PMID 40240592)
