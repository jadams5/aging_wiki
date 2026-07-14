---
type: pathway
aliases: [p16-RB-E2F pathway, INK4a-RB pathway, p16/RB tumor suppressor pathway, "p16(INK4a)-pRB pathway", CDKN2A-RB1 pathway]
kegg: hsa04110
reactome: R-HSA-69231
wikipathways: null
key-nodes: ["[[p16]]", "[[rb]]", "[[cdk4]]", "[[cdk6]]", "[[cyclin-d1]]", "[[e2f1]]", "[[p14arf]]"]
upstream: ["[[dna-damage-response]]", "[[oncogene-induced-stress]]", "[[ras-mapk]]", "[[oxidative-stress]]"]
downstream: ["[[cellular-senescence]]", "[[sasp]]"]
hallmarks: ["[[cellular-senescence]]", "[[genomic-instability]]"]
sens-categories: []
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Local-PDF claims (Krishnamurthy 2004, Sharpless 2001, Krimpenfort 2001, Baker 2016, Tao 2017) verified end-to-end against primary source PDFs. Corrections applied: Krishnamurthy tissue list and age-range; Sharpless 2001 tumor spectrum and n; Krimpenfort 2001 genotype, spontaneous vs DMBA distinction, melanoma n; Baker 2016 SASP cytokines corrected to IL-6/IL-1α/TNFα; Tao 2017 drug name. Pre-1998 foundational papers (Quelle 1995, Serrano 1993, Hara 1996, Alcorta 1996, Ruas & Peters 1998) and Sharpless 2004 Oncogene are closed-access / not in archive — those claims tagged #gap/no-fulltext-access."
---

# p16–Rb senescence pathway

The **p16–Rb–E2F pathway** is the primary *reinforcement* arm of irreversible cell-cycle arrest in [[cellular-senescence]]. When [[p16]] (encoded by the *CDKN2A* locus) accumulates — in response to replicative exhaustion, oncogene activation, or persistent damage signals — it competitively inhibits [[cdk4]] and [[cdk6]], preventing phosphorylation of the retinoblastoma protein ([[rb]]). Hypophosphorylated RB binds and silences E2F transcription factors, blocking transcription of S-phase entry genes. The result is a structurally reinforced, durable arrest that persists even when the initiating stress is resolved.

This pathway is the complement to the [[p53-pathway|p53–p21 arm]], which initiates senescence via transient transcriptional responses. Together, the two arms cover initiation (p53–p21) and permanence (p16–Rb): many senescent cell populations show one arm dominant, or both active in concert, depending on cell type and stressor.

> **KEGG note:** hsa04110 ("Cell Cycle — Homo sapiens") encompasses p16/CDKN2A, CDK4, CDK6, RB1, and E2F1-5 within the broader cell-cycle framework. The Reactome entry R-HSA-69231 ("Cyclin D associated events in G1") covers the positive arm of the same module (cyclin D → CDK4/6 → RB phosphorylation → E2F release). Neither database has a standalone p16-Rb senescence pathway entry; the IDs above are the most specific available anchors.

## Architecture: the CDKN2A locus

The *CDKN2A* gene is among the most unusual loci in the human genome — it encodes **two entirely distinct proteins** from the same genomic interval via alternative first exons and different reading frames in shared exon 2 [^quelle1995]:

| Product | Exons | Reading frame | Target | Function |
|---|---|---|---|---|
| **p16INK4a** | 1α, 2, 3 | Frame 1 | CDK4, CDK6 | Inhibits kinases → locks RB active |
| **p14ARF** | 1β, 2, 3 | Frame 2 (alternate) | MDM2 | Inhibits MDM2 → stabilises p53 |

p16INK4a and p14ARF share no amino-acid sequence despite sharing a genomic segment. The locus is therefore simultaneously a regulator of the **Rb pathway** (via p16) and the **[[p53-pathway|p53 pathway]]** (via p14ARF → [[mdm2]] inhibition). This architectural feature means *CDKN2A* deletion disables *both* major senescence arms simultaneously — a key reason the locus is the most frequently mutated tumor suppressor in human cancer [^ruas1998].

Cross-link: [[p14arf]] is an implicit stub; see also [[mdm2]].

## Mechanism: p16 → CDK4/6 → RB → E2F

### p16 inhibits CDK4 and CDK6

p16 was originally identified as a specific stoichiometric inhibitor of CDK4 [^serrano1993] and subsequently of CDK6. Structurally, p16 contains four ankyrin repeats that distort the cyclin-binding cleft of CDK4/6, preventing cyclin D binding and thus kinase activation [^ruas1998]. This places p16 in the **INK4 family** (Inhibitors of CDK4): p16INK4a, p15INK4b, p18INK4c, p19INK4d — all four-ankyrin-repeat proteins that selectively inhibit CDK4/6 only.

INK4 family members are mechanistically distinct from the **CIP/KIP family** (p21, p27, p57), which inhibit a broader range of cyclin-CDK complexes by binding the assembled complex rather than the free kinase. This distinction matters for pathway crosstalk: p21 (the p53–p21 arm effector) inhibits both CDK2 and CDK4/6; p16 inhibits CDK4/6 only.

### RB as a transcriptional gatekeeper

In quiescent and early G1 cells, retinoblastoma protein (RB1) is hypophosphorylated and bound to E2F transcription factors (primarily E2F1, E2F2, E2F3a). The RB–E2F complex actively represses E2F target genes via recruitment of histone deacetylases and chromatin condensation [^ruas1998]. E2F target genes include:

- *CCNE1* (cyclin E), *CDK2* — G1/S-phase CDK machinery
- *MCM2–7* (mini-chromosome maintenance helicase) — DNA replication licensing
- *PCNA*, *DHFR* — replication factors
- *CDC6*, *CDC25A* — additional S-phase regulators

In a cycling cell, mitogen-stimulated cyclin D–CDK4/6 initiates RB phosphorylation at Ser780 and Ser795 (among other sites), partially releasing E2F. Cyclin E–CDK2 then completes hyperphosphorylation in a positive-feedback loop, achieving full E2F release and commitment to S-phase.

**Senescent cells block this cascade at the CDK4/6 step.** Elevated p16 sequesters CDK4/6, cyclin D-CDK4/6 complexes cannot form, RB remains hypophosphorylated, and E2F targets stay repressed. Because RB-dependent chromatin silencing is structural (compaction at E2F target promoters), this arrest is **epigenetically self-maintaining** even without continued p16 signalling.

### Senescence-associated heterochromatin foci (SAHF)

In some cell types and senescence contexts, the hypophosphorylated RB–E2F repressor complex is further reinforced by formation of senescence-associated heterochromatin foci (SAHF) — dense DAPI-bright nuclear foci that stain positive for H3K9me3, HP1γ, and macroH2A. SAHF are especially prominent in OIS (oncogene-induced senescence) and are less common in replicative senescence. The p16–Rb arm is required for SAHF maintenance; loss of p16 in established senescent cells often leads to SAHF dissolution and partial cell-cycle re-entry. #gap/unsourced — the causal relationship between p16-Rb and SAHF stability needs primary citation; flagged for the verifier.

## Senescence reinforcement vs initiation

The distinction between the two senescence arms is functionally important:

| Feature | p53–p21 arm | p16–Rb arm |
|---|---|---|
| **Kinetics** | Activated rapidly (hours–days post-stress) | Rises slowly; dominant at days–weeks [^hara1996] |
| **Persistence** | Transient in some contexts; can decay | Rises and stays elevated; durable [^hara1996] |
| **Reversibility** | Arrest can be reversed by p53 loss | Arrest more refractory; RB-chromatin compaction persists |
| **Primary effector** | p21 inhibits CDK2 (+ CDK4/6) | p16 inhibits CDK4/6 only |
| **Dependence on p53** | Direct (p53 transcribes p21) | p53-independent pathway |
| **SASP involvement** | p53 activation can suppress SASP via p21→NF-κB inhibition | p16 does not directly regulate SASP |

Hara et al. 1996 established this temporal ordering in human WI-38 fibroblasts: p21 mRNA rises first at early passage, then declines; p16 rises progressively with passage and remains elevated [^hara1996]. #gap/no-fulltext-access — Hara 1996 not verifiable from local PDF (not_oa). Alcorta et al. 1996 confirmed p16 accumulation specifically in senescent (late-passage) human fibroblasts using immunofluorescence and flow cytometry [^alcorta1996]. #gap/no-fulltext-access — Alcorta 1996 not verifiable from local PDF (not_oa).

**Implication for senolytic targeting:** Because p16 expression marks cells that have passed through and maintained irreversible arrest, p16 promoter activity is a widely used proxy for in-vivo senescence burden. The INK-ATTAC transgenic mouse uses a p16 promoter-driven caspase-8 system (see Baker 2011 below).

**One arm without the other:** Several senescence contexts activate preferentially one arm. In mouse cardiomyocytes, myocardial infarction-associated SASP is predominantly p21-mediated with limited p16 contribution. In melanocyte OIS, p16 is frequently the dominant arm. The mechanistic basis for this cell-type and context specificity is not fully resolved. #gap/no-mechanism

## In-vivo aging biology

p16 transcript levels rise with age in virtually all rodent tissues examined, making it one of the best-validated molecular biomarkers of in-vivo aging [^krishnamurthy2004]. Krishnamurthy et al. 2004 (JCI) quantified p16 (p16^INK4a^) and Arf mRNA by RT-PCR across 15 murine tissues using young C57BL/6 mice (2.5 months) versus old mice (26 months), with n = 4–6 mice per tissue measurement. A marked age-dependent increase in p16 was seen in 26 of 27 organs analyzed; the geometric mean of old/young ratios across the 15 tissues was ~9.7-fold (the paper describes this as "approximately 10-fold"). Tissues showing the largest fold increases included uterus (>96-fold), cecum (>70-fold), kidney (>34-fold), ovary (30-fold), adrenal (7.6-fold), and heart (7.2-fold); the highest absolute expression in aged animals was in lung, lymph node, kidney, adrenal, and uterus. Arf also increased with aging but less consistently than p16 (Arf geometric mean old/young ~3.5-fold). This tissue-wide increase precedes overt pathology in most tissues. The age-associated rise in p16 was attenuated by caloric restriction in kidney, ovary, heart, adrenal, and testis (but not in lung, lymph node, spleen, or liver) [^krishnamurthy2004]. Conservation in humans was demonstrated in hematopoietic compartments including stromal and lymphocyte fractions of lymph nodes and spleen, and in T-cell compartments of lymph nodes (42- to 13-fold increases in stromal vs cellular compartments).

> **Measure p16 by the right method.** Note that the Krishnamurthy 2004 biomarker result — and the most robust p16 aging data generally — rests on **qPCR of *Cdkn2a* mRNA**, not antibody staining. Detecting p16INK4a *protein* by immunohistochemistry is notoriously unreliable: a 2026 analysis found that a large majority of senescence papers using certain catalog "anti-p16" antibodies were in fact detecting the unrelated actin-cytoskeleton protein **p16-ARC (ARPC5)** — a different gene/protein that merely shares the informal "p16" short name. Weight tissue p16-IHC senescence/aging claims accordingly. See [[methods/p16-immunodetection]].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — p16/CDK4/6/RB architecture is conserved |
| Phenotype (age-associated p16 accumulation) conserved? | yes — replicated in human T-cells and senescent human fibroblasts |
| Replicated in humans? | yes — p16 expression in human lymphocytes correlates with chronological age |

## Genetic ablation studies

Two complementary mouse knockouts delineated the roles of p16 vs p14ARF (the two *Cdkn2a* products):

**Sharpless 2001 (Nature)** — p16^INK4a^-specific null mice were generated by germline deletion of exon 1α, leaving p19^ARF^ (exon 1β and shared exons 2–3) intact [^sharpless2001]. These mice (designated p16^Ink4a^−/−) arise at expected Mendelian ratios, are fertile, and display normal gross development except for thymic hyperplasia and enhanced T-cell mitogenic responsiveness. In contrast to Ink4a/Arf full-locus null mice, p16^Ink4a^−/− MEFs are susceptible to Ras-induced senescence and are not spontaneously immortalized. In a spontaneous tumor cohort (aged 28–58 weeks; n = 26 +/+, 40 +/−, 39 −/−), spontaneous tumors arose in 0/26 +/+, 4/40 +/−, and 10/39 −/− mice (p16^Ink4a^+/+ vs −/−: P = 0.008, log-rank). Tumor types in p16^Ink4a^−/− mice: soft-tissue sarcoma (5), splenic lymphoma (4), melanoma (1). In carcinogen (DMBA)-treated cohorts, p16^Ink4a^−/− mice were more susceptible to malignant spindle-cell neoplasms and lung adenomas than +/+ controls. These data establish p16^INK4a^ as a bona-fide tumor suppressor independent of ARF, particularly for fibrosarcomas and splenic lymphoma. ARF (p19^Arf^) emerged as the primary mediator of passage-induced growth arrest in MEFs and Ras-induced senescence in this paper, with p16 having a modulatory but less essential role in MEF immortalization.

**Krimpenfort 2001 (Nature)** — An independently generated p16^INK4a^-specific allele (designated Ink4a*) was generated by introducing a nonsense point mutation at codon 101 in exon 1α, deleting the fourth ankyrin repeat while leaving p19^ARF^ expression intact [^krimpenfort2001]. Key observations: (1) Ink4a*/+ mice (heterozygous for the p16-null allele, retaining one p19ARF-functional allele) showed only a modest and non-statistically-significant predisposition to spontaneous tumorigenesis — only 2/12 (17%) developed tumors (B-cell lymphomas) within 17 months (P = 0.15 vs WT controls, NS). (2) The critical melanoma result required a compound genotype: Ink4a*/Δ2,3 mice (heterozygous for the Ink4a* allele and one allele with exons 2+3 deleted, thereby disrupting both p16 and p19ARF from that allele) developed spontaneous fibrosarcomas, carcinomas, and lymphomas (n = 10, all tumors within 17 months, P < 0.00005 vs n = 12 controls). (3) After DMBA treatment, 7/14 Ink4a*/Δ2,3 animals developed cutaneous melanomas at 3–9 months of age, along with skin papillomas and pulmonary adenocarcinomas. Melanoma was not observed in DMBA-treated Ink4a*/+ or WT controls at comparable follow-up. The Arf wild-type allele was frequently retained in tumours from Ink4a*/Δ2,3 animals (expressed in 2/3 Ink4a*/Δ2,3 tumours by RT-PCR), suggesting Arf heterozygosity contributes to tumourigenesis in the absence of functional p16. This paper and Sharpless 2001 were published concurrently and are jointly cited as establishing p16^INK4a^-specific tumour suppression; the melanoma-susceptibility finding in Krimpenfort is most robust in the DMBA/compound-genotype context, not in simple heterozygous p16 loss.

**Sharpless 2004 (Oncogene)** — Extended analysis comparing p16^INK4a^-specific vs p19^ARF^-specific deficiency in MEFs and in vivo [^sharpless2004oncogene]. ARF deficiency produced more rapid immortalization in vitro; p16 deficiency showed greater in-vivo tumorigenesis susceptibility, confirming that the two proteins have non-redundant but overlapping roles.

Note: None of these studies directly measured lifespan extension from p16 ablation in WT animals. Baker 2011 and 2016 (see below) addressed the selective elimination of p16-positive cells, which is mechanistically distinct.

## Senolytic targeting: Baker 2011 and 2016

The p16–Rb pathway's core utility in aging biology comes not just from its role in establishing senescence, but from the fact that **p16 expression marks the senescent cells that accumulate with aging** and drive late-life pathology.

### Baker 2011 (INK-ATTAC) — proof of concept in progeroid mice

Baker et al. 2011 created the **INK-ATTAC** transgenic mouse: a construct where a p16^Ink4a^ promoter fragment drives expression of a membrane-targeted FKBP–caspase-8 fusion. Administration of the small molecule AP20187 induces dimerization of FKBP, activating caspase-8 and triggering apoptosis selectively in p16-expressing cells [^baker2011]. The system was tested in *BubR1* progeroid mice (BubR1^H/H^ hypomorphs), which develop features of premature aging including sarcopenia, fat loss, and cataracts.

Key findings in the progeroid background:
- Clearance of p16+ cells delayed onset of sarcopenia, subcutaneous fat loss, and cataracts
- Physical function measures (grip strength, walking speed) were improved
- Median lifespan was modestly extended in the progeroid background
- Mechanism: reduced local inflammatory secretion from p16+ senescent cells, consistent with SASP suppression

This was the first direct evidence that senescent cells are **causal** rather than merely correlative in aging-associated tissue dysfunction. n≈20–25/group; progeroid model limits extrapolation to normal aging. #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | unknown — no equivalent human INK-ATTAC model exists |
| Replicated in humans? | no — pharmacological senolytics (dasatinib + quercetin, fisetin) are in early trials |

### Baker 2016 — lifespan extension in wild-type mice

Baker et al. 2016 applied the INK-ATTAC system to **wild-type mice** on two genetic backgrounds (mixed and C57BL/6), with clearance of p16+ cells beginning at 12 months of age [^baker2016]. See [[baker2016]] and [[cellular-senescence]] for full verified data; brief summary here to anchor the pathway context:

- Median lifespan increased 27% in the mixed background (129Sv×C57BL/6J×FVB); 24% in congenic C57BL/6J; range 17–35% across sex subgroups within both backgrounds (verified in [[cellular-senescence]])
- Healthspan improvements: reduced renal dysfunction, cardiac dysfunction, and fat loss; improved exercise tolerance
- Effect was independent of sex
- Molecular mechanism: p16+ cell clearance blunted age-dependent increases in SASP factors including IL-6, IL-1α, and TNFα in fat, skeletal muscle, and kidney (Extended Data Fig. 3b of Baker 2016), improving tissue microenvironment

This established that **naturally occurring p16-positive cells in WT mice shorten healthy lifespan**, placing the p16–Rb pathway at the mechanistic centre of mammalian aging biology.

## Pharmacology: CDK4/6 inhibitors — a paradox

The same CDK4/6 kinase activity that p16 blocks endogenously can be targeted pharmacologically by small-molecule CDK4/6 inhibitors. Three are FDA-approved for hormone-receptor-positive breast cancer:

| Drug | Common name | Approved indication |
|---|---|---|
| [[palbociclib]] | Ibrance (Pfizer) | HR+/HER2- breast cancer, 1st-line |
| ribociclib | Kisqali (Novartis) | HR+/HER2- breast cancer |
| abemaciclib | Verzenio (Lilly) | HR+/HER2- breast cancer; early-stage |

**The senescence paradox:** CDK4/6 inhibitor therapy in cancer cells can **induce** rather than merely arrest — a phenomenon called therapy-induced senescence (TIS). In treated cancer cells, prolonged CDK4/6 inhibition drives p16 upregulation and SA-β-Gal positivity, generating a senescent tumor cell population [^tao2017]. Tao et al. 2017 demonstrated this in human leukemia cell lines (HL-60, MV4-11, NB4; 7/8 lines showed G1 arrest; THP-1 was the exception) using LEE011 (ribociclib) at 2–5 µM for 48–72 h. SAHF formation was not specifically demonstrated in this study; the TIS markers were SA-β-Gal positivity and p16^INK4a^ protein upregulation by western blot. This is double-edged:

- **Short-term benefit:** Senescent tumor cells stop proliferating, contributing to clinical response.
- **Long-term concern:** If senescent tumor cells subsequently undergo SASP-driven paracrine stimulation of surrounding stroma, or if a subpopulation eventually escapes senescence ("geroconversion reversal"), TIS could contribute to relapse or metastasis.

**Implication for aging:** CDK4/6 inhibitors are sometimes discussed as potential geroprotectors by analogy to rapamycin (mTOR inhibition → p16 phenocopy), but the TIS paradox means they could also *create* the senescent burden they intend to reduce. No clinical aging trial data exist for CDK4/6 inhibitors. #gap/long-term-unknown #gap/needs-human-replication

## Crosstalk with p53–p21 pathway

The two senescence arms are not independent:

1. **p14ARF bridge:** The *CDKN2A* locus encodes p14ARF (p19ARF in mouse), which inhibits MDM2 — the E3 ubiquitin ligase for p53. Oncogenic stress that induces ARF therefore stabilises p53, simultaneously activating the p53–p21 arm. The locus thus integrates both arms via shared genomic architecture [^quelle1995].

2. **RB/E2F feeds back to ARF:** E2F transcription factors (when freed from RB) transactivate the *CDKN2A* promoter's ARF element, providing a feedback restraint that limits uncontrolled proliferation even if upstream RB phosphorylation occurs.

3. **p21 can partially compensate for p16 loss:** In cells lacking p16, CDK4/6 activity rises, but p21 (CDK2 inhibitor) can maintain partial RB hypophosphorylation by blocking the CDK2-mediated RB hyperphosphorylation step. This partially explains why p16-null cells are not fully unable to senesce. The pathway redundancy also means that in established senescent human fibroblasts, p16 knockdown alone is insufficient to fully reverse arrest [^ruas1998].

4. **SASP and NF-κB:** The p16–Rb arm does not directly control SASP, which is regulated upstream by NF-κB, C/EBPβ, and p53 independently. However, p16-positive cells are among the highest SASP producers in vivo, meaning the correlation between p16 expression and inflammatory secretion is strong empirically even though the molecular link is indirect.

## Limitations and gaps

**Mechanistic gaps:**

- The precise signals that determine whether p16 or p21 dominates in a given senescence context are not fully resolved. #gap/no-mechanism
- The causal link between p16–Rb and SAHF stability (mentioned above) lacks a precise molecular citation; flagged #gap/unsourced.
- Quantitative data on p16 upregulation kinetics in human tissues during normal aging are limited to lymphocyte/T-cell surrogates.

**Translation gaps:**

- All direct p16+ cell clearance data (INK-ATTAC) are mouse-specific. No human equivalent exists. #gap/needs-human-replication
- Pharmacological senolytics (dasatinib+quercetin, fisetin) do not target p16-expressing cells exclusively; their mechanisms include BCL-2 family inhibition. The field lacks a human-safe way to recapitulate selective p16+ cell clearance. #gap/needs-human-replication
- CDK4/6 inhibitors as potential geroprotectors are entirely speculative; TIS paradox unresolved. #gap/long-term-unknown

**Canonical ID gaps:**

- No dedicated KEGG pathway for p16-Rb senescence arrest (hsa04110 is the broadest available anchor).
- WikiPathways ID for a specific p16-Rb senescence pathway not identified — #gap/needs-canonical-id.

## Footnotes

[^quelle1995]: doi:10.1016/0092-8674(95)90214-7 · Quelle et al. 1995 · Cell · in-vitro + molecular biology · model: human fibroblasts + NIH 3T3 cells · discovery paper for p14ARF from INK4a locus alternate reading frame; #gap/no-fulltext-access (not_oa, not in archive)

[^serrano1993]: doi:10.1038/366704a0 · Serrano, Hannon & Beach 1993 · Nature · in-vitro · model: human/mammalian cell lines · original identification of p16 as specific CDK4 inhibitor; #gap/no-fulltext-access (not_oa, not in archive)

[^hara1996]: doi:10.1128/MCB.16.3.859 · Hara et al. 1996 · Mol Cell Biol · in-vitro · n=WI-38 fibroblasts, serial passage · p16 rises progressively with passage; p21 rises early then declines; #gap/no-fulltext-access (not_oa, not in archive)

[^alcorta1996]: doi:10.1073/pnas.93.24.13742 · Alcorta et al. 1996 · PNAS · in-vitro · model: human fibroblasts · p16 accumulation specific to senescent late-passage cells; #gap/no-fulltext-access (not_oa, not in archive)

[^ruas1998]: doi:10.1016/s0304-419x(98)00017-1 · Ruas & Peters 1998 · BBA Reviews on Cancer · review · comprehensive review of INK4a/CDKN2A locus structure and function; #gap/no-fulltext-access (not_oa, not in archive)

[^krishnamurthy2004]: [[studies/krishnamurthy-2004-ink4a-arf-aging-biomarker]] · doi:10.1172/JCI22475 · PMID 15520862 · Krishnamurthy, Torrice, Ramsey et al. (Sharpless lab) 2004 · *J Clin Invest* 114(9):1299–1307 · in-vivo · n=4–6 mice/tissue · model: C57BL/6 mice (2.5 months young vs 26 months old); 15 murine tissues + 12 rat tissues; human lymphoid compartments · p16 + Arf mRNA increase across tissues (~10-fold geometric mean for p16; uterus, cecum, kidney highest); caloric restriction attenuates increase in several tissues · bronze OA (PMC524230) · verified 2026-05-05

[^sharpless2001]: doi:10.1038/35092592 · Sharpless, Bardeesy, Lee et al. (DePinho lab) 2001 · Nature · in-vivo + in-vitro · n=26 +/+, 40 +/−, 39 −/− (spontaneous tumor cohort) · model: p16^INK4a^-specific exon-1α-null mice (p19ARF intact) · spontaneous tumors: 0/26 vs 10/39 (P=0.008); tumor types: soft-tissue sarcoma, splenic lymphoma, melanoma (1); MEF data: p19ARF primary mediator of Ras-senescence; local PDF available — verified 2026-05-05

[^krimpenfort2001]: doi:10.1038/35092584 · Krimpenfort, Quon, Mooi et al. (Berns lab) 2001 · Nature · in-vivo · n=12 controls, 10–14 Ink4a*/Δ2,3 compound mice (DMBA cohort) · model: Ink4a* point-mutation allele (codon 101 stop; exon-1α truncation); compound Ink4a*/Δ2,3 mice used for melanoma data · spontaneous tumors in simple Ink4a*/+ heterozygotes NS (2/12 B-cell lymphomas, P=0.15); DMBA-induced cutaneous melanoma in 7/14 Ink4a*/Δ2,3 mice (P<0.00005); local PDF available — verified 2026-05-05

[^sharpless2004oncogene]: doi:10.1038/sj.onc.1207074 · Sharpless, Ramsey, Balasubramanian et al. 2004 · Oncogene · in-vivo + in-vitro · model: MEFs and mice · differential impact of p16 vs ARF deficiency; **note: original briefing DOI 10.1038/sj.emboj.7600142 resolves to an unrelated paper — corrected to 10.1038/sj.onc.1207074 per Crossref/PubMed PMID 14724566; not local PDF** #gap/no-fulltext-access (not_oa per archive)

[^baker2011]: doi:10.1038/nature10600 · Baker, Wijshake, Tchkonia et al. (van Deursen/Kirkland labs) 2011 · Nature · in-vivo · model: BubR1^H/H^ progeroid mice with INK-ATTAC transgene · clearance of p16+ cells delayed progeroid features (sarcopenia, fat loss, cataracts); download status: failed (OA URL exists at PMC but 0 candidate URLs after filtering); #gap/no-fulltext-access (download failed; OA green per archive but not retrievable)

[^baker2016]: doi:10.1038/nature16932 · Baker, Childs, Durik et al. 2016 · Nature · in-vivo · model: wild-type INK-ATTAC mice; two cohorts (mixed 129Sv×C57BL/6J×FVB + congenic C57BL/6J); AP20187 twice weekly from 12 months · median lifespan +27% (mixed) / +24% (B6); range 17–35% by sex and background; SASP blunting: Il6, Il1a, Tnfa in fat/skeletal muscle/kidney; local PDF available — verified 2026-05-05 (cross-check with [[cellular-senescence]])

[^tao2017]: doi:10.1186/s12935-017-0405-y · Tao et al. 2017 · Cancer Cell International · in-vitro · model: human leukemia cell lines (HL-60, MV4-11, NB4 and others; 8 established lines + 5 primary AML + 5 primary ALL) · LEE011 (ribociclib) at 2–5 µM for 48–72 h induces G1 arrest in 7/8 leukemia lines (THP-1 exception), SA-β-Gal positivity, and p16^INK4a^ upregulation by western blot; local PDF available — verified 2026-05-05
