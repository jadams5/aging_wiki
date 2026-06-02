---
type: protein
aliases: [SF3B1, SAP155, SF3b155, "splicing factor 3b subunit 1", "spliceosome-associated protein 155"]
uniprot: O75533
ncbi-gene: 23451
hgnc: 10768
ensembl: ENSG00000115524
genage-id: null
mouse-ortholog: Sf3b1
pathways: []
hallmarks: ["[[genomic-instability]]", "[[loss-of-proteostasis]]"]
sens-categories: []
known-interactors: ["[[sf3b3]]", "[[phf5a]]", "[[u2-snrna]]", "[[dnmt3a]]", "[[tet2]]", "[[asxl1]]"]
druggability-tier: 2
gtex-aging-correlation: null
mr-causal-evidence: not-applicable-somatic
caused-by: []
causes: []
literature-checked-through: 2026-05-26
verified: true
verified-date: 2026-05-26
verified-by: claude
verified-scope: "Papaemmanuil 2011 (primary PDF verified), Obeng 2016 (primary PDF verified), Jaiswal 2014 (primary PDF verified), Genovese 2014 (primary PDF verified), Uddin 2024 (primary PDF verified) — all quantitative claims corrected against source text. Gumuser 2023 claims verified against PMC10249057 full text (PDF not locally downloaded). Yoshida 2011 green-OA PDF failed download; quantitative claims cross-checked against PubMed abstract only — full-text verification of Yoshida 2011 pending. Canonical identity fields (UniProt O75533 length 1304aa, NCBI Gene 23451, HGNC 10768, Ensembl ENSG00000115524, mouse ortholog Sf3b1 NCBI Gene 81898) confirmed against live API 2026-05-26."
---


# SF3B1

SF3B1 (splicing factor 3b subunit 1, also called SAP155 or SF3b155) is the largest and most clinically significant subunit of the SF3b complex within the [[U2 snRNP]] spliceosome. It directly contacts the pre-mRNA branch-point sequence to specify 3' splice-site selection during intron excision. Somatic mutations in SF3B1 cause aberrant splice-site usage, generating mis-spliced transcripts that drive myeloid malignancy. SF3B1 is a recurrent driver of [[clonal-hematopoiesis]] (CHIP), most strongly associated with **MDS with ring sideroblasts (MDS-RS)** — where SF3B1 mutations define a favorable-prognosis diagnostic entity. It is the sixth most commonly mutated CHIP driver gene in population cohorts (behind DNMT3A, TET2, ASXL1, TP53, and JAK2 in Jaiswal 2014), with mutations arising almost exclusively in individuals aged >70. For the broader age-related spliceosome biology that contextualizes SF3B1, see the [[splicing-dysregulation]] process page.

## Identity

- **UniProt:** O75533 (SF3B1_HUMAN) — Swiss-Prot reviewed entry; confirmed 2026-05-26
- **NCBI Gene:** 23451
- **HGNC:** 10768
- **Ensembl:** ENSG00000115524
- **Mouse ortholog:** Sf3b1 (NCBI Gene 81898; one-to-one ortholog; essential gene — conditional KO models used)
- **Length:** 1,304 amino acids
- **Chromosome:** 2q33.1 (27 exons)
- **GenAge-human:** not listed — SF3B1 does not meet GenAge's longevity/aging-gene inclusion criteria as a stand-alone entry; its aging relevance arises through CHIP/somatic-mutation biology. #gap/needs-canonical-id (GenAge)
- **Synonyms:** SAP155 (spliceosome-associated protein 155), SF3b155, PRPF10, Hsh155

**Naming note:** No `pathways/sf3b1.md` exists; the pathway-level context is covered by the spliceosome assembly process and `[[somatic-mutation-accumulation]]`. The protein page carries all SF3B1-specific mechanistic claims.

**`mr-causal-evidence: not-applicable-somatic`** — SF3B1's aging relevance is driven by somatic loss-of-function mutations (CHIP/MDS); germline variation does not capture somatic aging trajectories. Standard Mendelian randomization is methodologically inapplicable in this context [^genovese2014][^jaiswal2014].

## Domain architecture

| Domain | Residues (approx.) | Function |
|---|---|---|
| U2AF homology region | ~190–342 | Protein–protein interaction module; contacts U2AF65 and other spliceosomal factors |
| HEAT repeats (22 total) | ~529–1201 | Rod-like helical repeats forming a curved scaffold; key contacts with pre-mRNA branch-point region and PHF5A |
| N-terminal region | 1–190 | Disordered; interacts with SF3B3 |
| C-terminal extension | 1202–1304 | Regulatory; phosphorylation cluster |

The HEAT-repeat domain is the structural core of branch-point recognition. Hotspot cancer mutations cluster in HEAT repeats 5–8 (K700E, K666N/T/E, R625H/C, H662D/Q, E622D, Y623C) and alter the geometry of the branch-point binding pocket, shifting 3' splice-site selection toward cryptic, upstream AG dinucleotides [^papaemmanuil2011][^yoshida2011].

## Canonical function — U2 snRNP branch-point recognition

SF3B1 is a core structural component of the **SF3b complex** (with SF3B2, SF3B3, SF3B4, SF3B5, PHF5A, and SF3B6), which is an integral part of the 17S U2 snRNP particle. The U2 snRNP recognizes the pre-mRNA branch-point adenosine in a sequence-context-dependent manner during early spliceosome assembly (A-complex formation). SF3B1's HEAT repeats form a molecular cradle that:

1. Contacts the pre-mRNA in the ~20-nt region upstream of the branch-point adenosine (the "branch-point-binding region")
2. Positions the branch-point adenosine for nucleophilic attack in the first transesterification step
3. Acts as a docking platform for PHF5A and SF3B3, forming the structural core of the branch-point recognition complex

**Consequence of hotspot mutation:** SF3B1 mutations shift the branch-point-binding geometry so that an alternative, cryptic 3' splice site is selected — typically 10–30 nt upstream of the canonical AG. This generates short intron-retention or altered-exon-inclusion transcripts that are frequently degraded by nonsense-mediated mRNA decay (NMD) or translated into truncated, dominant-negative, or gain-of-function proteins. The net effect is **partial loss of function of affected transcripts** plus aberrant gain-of-function for the disease-driving mis-spliced products [^yoshida2011].

**Key mis-spliced target in MDS-RS:** ABCB7 (ABC transporter involved in mitochondrial iron-sulfur cluster export) is aberrantly spliced by mutant SF3B1, producing a truncated, non-functional ABCB7 transcript. This is the leading mechanistic hypothesis for ring sideroblast formation — iron accumulates in erythroblast mitochondria because ABCB7-mediated iron export is impaired [^papaemmanuil2011]. #gap/needs-replication — the ABCB7 → ring sideroblast causal chain is well-supported by expression data but formal genetic rescue in a primary patient model has not been published.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — SF3B1 splicing mechanism characterized directly in human cells |
| Phenotype conserved in humans? | yes — MDS-RS phenotype is defined by SF3B1 mutation in humans |
| Replicated in humans? | yes (MDS-RS diagnostic criterion); in-progress (CHIP cardiovascular consequences) |

## SF3B1 as a CHIP driver

SF3B1 belongs to the **splicing-factor CHIP driver** subgroup (alongside SRSF2 and U2AF1). In the [[clonal-hematopoiesis]] landscape:

- In Jaiswal 2014 (n=17,182 WES across 22 cohorts), SF3B1 had 27 mutations — the 6th most common CHIP driver, behind DNMT3A (403), TET2 (72), ASXL1 (62), TP53 (33), and JAK2 (31) [^jaiswal2014]. For the full driver landscape and cohort data, see [[clonal-hematopoiesis]] (canonical home; cross-reference only from this page).

- **Age-restriction pattern:** McKerrell et al. 2015 (*Cell Reports*) found that SF3B1 and SRSF2 mutations were detected only in individuals aged >70, in contrast to DNMT3A mutations which appear at younger ages [^mckerrell2015]. This suggests a later-life selective pressure or slower competitive expansion for spliceosome-factor mutations.

- **Faster clonal growth:** Uddin et al. 2024 (*Nature Communications*; n=4,187 longitudinal) found that splicing-factor mutations including SF3B1 showed significantly faster clonal expansion rates compared to DNMT3A mutations, consistent with stronger fitness effects per mutation event, despite appearing later in life [^uddin2024]. This finding is based on the locally available PDF.

- **Cardiovascular consequences of spliceosome-CHIP:** Gumuser et al. 2023 (*JACC*; n=13,129 UK Biobank participants aged 40–70, median follow-up 10.8 years) reported that large spliceosome-gene CHIP (SF3B1/SRSF2/U2AF1 combined, VAF ≥10%) was associated with HR 3.02 (95% CI 1.95–4.70, P<0.001) for the composite outcome of ASCVD events or all-cause mortality — stronger than large TET2-CHIP (HR 1.89) or large DNMT3A-CHIP (HR 1.24, ns) in the same cohort [^gumuser2023]. Claims verified against PMC-accessible full text (PMC10249057).

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — CHIP biology characterized in human cohorts |
| Phenotype conserved in humans? | yes — observational data; cardiovascular hazard ratio under study |
| Replicated in humans? | yes (CHIP prevalence + age-restriction); in-progress (cardiovascular endpoint) |

## Disease associations

### MDS with ring sideroblasts (MDS-RS) — defining mutation

Papaemmanuil et al. 2011 (*NEJM*) identified SF3B1 as the most commonly mutated gene in MDS-RS by whole-genome and exome sequencing of 354 MDS patients. Key findings:

- SF3B1 mutated in **~65% of MDS-RS patients** vs ~10% of MDS patients without ring sideroblasts
- Mutations are overwhelmingly heterozygous missense, affecting the HEAT-repeat domain
- K700E is the single most common hotspot (~55%, 95% CI 45–64%, of SF3B1-mutant cases in MDS)
- SF3B1 mutation correlates with **favorable prognosis** — fewer cytopenias, longer event-free survival, lower risk of progression to AML vs SF3B1-wild-type MDS [^papaemmanuil2011]

The favorable prognosis of SF3B1-mutant MDS is well-established enough that the **2022 WHO Classification of Haematolymphoid Tumours** defines "MDS with SF3B1 mutation" as a distinct diagnostic entity (MDS-SF3B1), requiring ≥5% ring sideroblasts OR SF3B1 hotspot mutation + low blast percentage. #gap/unsourced — 2022 WHO classification criterion stated from general knowledge; primary WHO reference not cited here.

Yoshida et al. 2011 (*Nature*) extended this finding by whole-exome sequencing of 29 MDS patients and identified mutually exclusive mutations across splicing-factor genes (SF3B1, SRSF2, U2AF35/U2AF1, ZRSR2), demonstrating that spliceosome dysfunction is a primary driver pathway in MDS [^yoshida2011].

Malcovati et al. 2014 (*Blood*; n=308 myeloid neoplasm patients) established that SF3B1 mutation defines a distinct disease entity independent of morphologic classification, with SF3B1 comutation with TET2/SRSF2 predicting more aggressive disease variants [^malcovati2014].

### Other malignancies

SF3B1 hotspot mutations (R625, K700) occur at lower frequency in:
- Uveal melanoma (~18%; distinct from the MDS K700E hotspot — R625 predominates in melanoma)
- Chronic lymphocytic leukemia (CLL; ~5–15%; associated with adverse prognosis in contrast to the favorable MDS-RS context) [^huang2025]
- Oral cancer, breast cancer, pancreatic adenocarcinoma — at low frequency

The divergent prognostic implications (favorable in MDS-RS, adverse in CLL) likely reflect cell-type-specific effects of aberrant splicing on the transcriptome. This is an active area of mechanistic investigation. #gap/no-mechanism

## Splicing dysregulation and aging

SF3B1's relevance to aging biology extends beyond CHIP. Global splicing fidelity declines with age in multiple tissues — a phenotype captured by the [[loss-of-proteostasis]] hallmark (via accumulation of aberrant protein isoforms from mis-spliced transcripts). Whether somatic SF3B1 mutations in hematopoietic stem cells amplify or reflect a broader age-related splicing dysfunction is an open question.

See [[splicing-dysregulation]] for the broader age-related spliceosome biology that contextualizes SF3B1. The connection between age-related global spliceosome regulation and the SF3B1-mutant CHIP phenotype is mechanistically unresolved. #gap/no-mechanism

## Mouse genetics

| Model | Phenotype | Reference |
|---|---|---|
| *Sf3b1*-K700E conditional knock-in (heterozygous, Mx1-Cre; hematopoietic-specific) | Progressive macrocytic anemia (onset 4–8 weeks post plpC); terminal erythroid maturation block; erythroid dysplasia; LT-HSC expansion; aberrant 3' splice-site selection in myeloid progenitors (alternative 3' ss = 66% of events); Tet2 loss cooperates to cause earlier and more severe phenotype. **Ring sideroblasts not observed** in bone marrow (contrast to human MDS-RS) — ABCB7 cryptic splice site is not conserved in mice. Spliceosome modulator E7107/E7017 selectively kills Sf3b1-K700E-expressing cells [^obeng2016] | [^obeng2016] |
| Constitutive *Sf3b1* homozygous KO | Lethal at early embryogenesis — SF3B1 is essential for pre-mRNA splicing [^obeng2016] | [^obeng2016] |

## Druggability

**Druggability-tier: 2 (aging-context)**

**Rationale:** H3B-8800 is a first-in-class oral small molecule that binds the SF3B complex (at the SF3B1 HEAT-repeat domain) and modulates spliceosome activity. It preferentially induces death of SF3B1-mutant cells over wild-type cells (therapeutic window based on spliceosomal dependency). However:

1. H3B-8800 is investigational in **oncology (MDS/CMML/AML)** — there is no aging indication, no geroprotector use case, and no evidence of benefit in non-malignant contexts.
2. Phase I dose-escalation (Steensma et al. 2021, *Leukemia*; n=84 patients) showed no complete/partial responses by standard criteria; 15% of transfusion-dependent MDS patients achieved transfusion-free intervals >56 days; adverse events (diarrhea, nausea, atrial fibrillation) limited dose escalation [^steensma2021].
3. Phase I dose-expansion in lower-risk MDS-SF3B1 (Foran et al. 2025, *Leukemia Research*; n=43) found limited efficacy at current doses and notable atrial fibrillation (19–29% incidence), with the authors recommending alternative dosing schedules [^foran2025]. #gap/no-fulltext-access — Foran 2025 is closed-access; claims from abstract only.

There is no tier-1 aging-context druggability (no approved drug for an aging-relevant SF3B1 indication). Tier 2 reflects the existence of a high-quality clinical-stage probe in related disease. The aging-context clinical stage is **oncology-investigational only**.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — spliceosome activity characterized in human cells |
| Phenotype (MDS-RS) conserved in humans? | yes — human disease definition |
| Replicated in humans? | yes (MDS-RS diagnostic entity); H3B-8800 trial results show limited efficacy |

## Cross-references

- [[clonal-hematopoiesis]] — canonical home for CHIP epidemiology and driver-gene comparison table; SF3B1 is the 6th most common driver (Jaiswal 2014); cross-reference only from this page
- [[biomarkers/chip-clonal-hematopoiesis-biomarker]] — expanded CHIP sequencing panels include SF3B1/SRSF2/U2AF1 as splicing-factor genes; cross-reference only
- [[dnmt3a]] — most-common CHIP driver; epigenetic methyltransferase
- [[tet2]] — second-most-common CHIP driver; DNA demethylase; cross-reference only
- [[asxl1]] — third-most-common CHIP driver; Polycomb-associated
- [[processes/somatic-mutation-accumulation]] — broader somatic-mutation-accumulation context for CHIP biology
- [[genomic-instability]] — hallmark page; SF3B1 mutations are somatic genomic events
- [[loss-of-proteostasis]] — hallmark page; aberrant splicing generates mis-folded/truncated proteins
- [[stem-cell-exhaustion]] — CHIP is both a product of HSC aging and a modifier of HSC fitness
- [[chronic-inflammation]] — spliceosome-CHIP cardiovascular signal (Gumuser 2023) implies inflammatory consequences analogous to TET2/DNMT3A
- [[hematopoietic-stem-cells]] — SF3B1 mutations arise and expand in the HSC compartment
- [[nlrp3-inflammasome]] — potential downstream effector; mechanism in SF3B1-CHIP context uncharacterized #gap/no-mechanism
- [[u2-snrna]] — the SF3b complex is integral to U2 snRNP; implicit stub
- [[phf5a]] — SF3B1 HEAT-repeat binding partner; implicit stub

The [[splicing-dysregulation]] process page is the canonical home for the broader age-related spliceosome biology that contextualizes SF3B1.

## Limitations and gaps

- **No aging-specific SF3B1 prospective trial.** CHIP-CVD data for spliceosome mutations (Gumuser 2023) is observational; no intervention trial targets SF3B1-CHIP specifically. #gap/needs-replication
- **H3B-8800 limited efficacy.** Both Phase I trials show only marginal clinical benefit; the therapeutic hypothesis for SF3B1-targeted spliceosome modulation in MDS remains unproven at the efficacy level. #gap/needs-replication
- **Ring sideroblast mechanism incompletely resolved.** ABCB7 mis-splicing is the leading hypothesis for ring sideroblast formation but formal genetic rescue in patient material has not been published. #gap/no-mechanism
- **CLL vs MDS-RS prognostic divergence unexplained.** The same K700E-region hotspot confers favorable prognosis in MDS-RS but adverse prognosis in CLL; the cell-type-specific mechanistic basis is not established. #gap/no-mechanism
- **SF3B1-CHIP inflammation mechanism.** Unlike TET2 and DNMT3A, the inflammatory pathway connecting SF3B1-mutant macrophages to cardiovascular outcomes has not been characterized. Whether NLRP3 hyperactivation or other effectors mediate the Gumuser 2023 cardiovascular hazard is unknown. #gap/no-mechanism
- **Mouse KI model vs human MDS-RS.** The *Sf3b1*-K700E conditional knock-in model (Obeng 2016) recapitulates core erythroid features but does NOT produce ring sideroblasts (ABCB7 cryptic splice site not conserved between mouse and human), limiting the model's utility for the full MDS-RS phenotype. #gap/needs-replication — whether other mouse strains or inducible systems can produce ring sideroblasts is under investigation.

## Footnotes

[^papaemmanuil2011]: doi:10.1056/NEJMoa1103283 · Papaemmanuil E, Cazzola M, Boultwood J et al. · *N Engl J Med* 2011;365(15):1384-1395 · whole-genome and exome sequencing of low-grade MDS patients (n=9 discovery WGS/WES) + targeted resequencing of SF3B1 in 2,087 patients with myeloid or other cancers; among 354 MDS patients: 72/354 (20%) had SF3B1 mutations; 53/82 (65%) of MDS patients with ring sideroblasts; K700E accounted for 59/108 variants (55%; 95% CI 45–64%); SF3B1 mutation associated with longer overall survival (P=0.01), leukemia-free survival (P=0.05), event-free survival (P=0.008), and favorable prognosis (HR 0.1; 95% CI 0.0–0.7; P=0.02) after multivariable adjustment · observational (sequencing cohort) · n=354 MDS (2,087 broader myeloid/cancer cohort) · model: human MDS patients · archive: **locally available** —  (local PDF)

[^yoshida2011]: doi:10.1038/nature10496 · Yoshida K, Sanada M, Shiraishi Y et al. · *Nature* 2011;478(7367):64-69 · whole-exome sequencing of 29 MDS discovery specimens; identified splicing-machinery pathway mutations (U2AF35, ZRSR2, SRSF2, SF3B1) in ~45–85% of myeloid neoplasm cases showing features of myelodysplasia; mutations largely mutually exclusive; demonstrate aberrant 3' splice-site recognition (3'-splice-site recognition genes predominantly affected) as the shared molecular consequence · observational (sequencing) · n=29 discovery + validation series · model: human MDS patients · archive: failed download (green OA URL dead; PMID 21909114, no PMC full-text available); quantitative claims cross-checked against PubMed abstract

[^malcovati2014]: doi:10.1182/blood-2014-03-560227 · Malcovati L, Papaemmanuil E, Ambaglio I et al. · *Blood* 2014;124(9):1513-1521 · n=308 myeloid neoplasm patients; SF3B1 mutation defines a distinct nosologic entity independent of morphologic classification; SF3B1+TET2/SRSF2 comutation patterns predict disease subtype and prognosis · observational (cohort sequencing) · model: human · archive: pending download (bronze OA)

[^jaiswal2014]: doi:10.1056/NEJMoa1408617 · Jaiswal S et al. · *N Engl J Med* 2014;371(26):2488-2498 · n=17,182 (22 population cohorts, WES); SF3B1 had 27 mutations — 6th most common CHIP driver (DNMT3A 403, TET2 72, ASXL1 62, TP53 33, JAK2 31, SF3B1 27); CHIP overall associated with HR 1.4 (95% CI 1.1–1.8, P=0.02) for all-cause mortality, HR 11.1 (95% CI 3.9–32.6) for hematologic cancer; coronary heart disease HR 2.0 (95% CI 1.2–3.4), ischemic stroke HR 2.6 (95% CI 1.4–4.8); `mr-causal-evidence: not-applicable-somatic` applies · observational (prospective cohort) · model: human · archive: **locally available** —  (local PDF)

[^genovese2014]: doi:10.1056/NEJMoa1409405 · Genovese G et al. · *N Engl J Med* 2014;371:2477-87 · n=12,380 WES Swedish population cohort; CHIP prevalence ~1% under 50, ~10% over 65 (not 5.7% — see abstract: "10% of persons older than 65"); hematologic cancer HR 12.9 (95% CI 5.8–28.7); cancer/cardiovascular hazard ratios established · observational (population cohort) · model: human · archive: **locally available** —  (local PDF)

[^mckerrell2015]: doi:10.1016/j.celrep.2015.02.005 · McKerrell T, Park N, Moreno T et al. · *Cell Reports* 2015;10(8):1239-1245 · SF3B1 and SRSF2 mutations detected only in donors aged >70; DNMT3A mutations appear at younger ages; demonstrates age-restriction of spliceosome-gene CHIP · observational (blood sequencing, n=4,219 healthy donors) · model: human · archive: pending download (gold OA)

[^gumuser2023]: doi:10.1016/j.jacc.2023.03.401 · Gumuser ED, Honigberg MC et al. · *J Am Coll Cardiol* 2023 · n=13,129 UK Biobank participants (aged 40–70; median follow-up 10.8 years); large spliceosome-gene CHIP (SF3B1/SRSF2/U2AF1, VAF ≥10%) HR 3.02 (95% CI 1.95–4.70, P<0.001) for composite ASCVD events + all-cause mortality; large TET2-CHIP HR 1.89; large DNMT3A-CHIP HR 1.24 (ns); spliceosome mutations represent a clinically distinct CHIP subset · observational (prospective cohort) · model: human · archive: claims verified against PMC10249057 full text; PDF not locally downloaded

[^uddin2024]: doi:10.1038/s41467-024-52302-9 · Uddin MM, Natarajan P et al. · *Nat Commun* 2024 · n=4,187 longitudinal; SF3B1 and other splicing-factor mutations show faster clonal expansion than DNMT3A mutations; age-specific fitness landscape of CHIP drivers · observational (longitudinal cohort) · model: human · archive: **locally available** —  (local PDF)

[^steensma2021]: doi:10.1038/s41375-021-01328-9 · Steensma DP, Wermke M, Klimek VM et al. · *Leukemia* 2021 · Phase I dose-escalation of H3B-8800 in 84 patients (MDS/CMML/AML); no complete/partial responses; 15% of transfusion-dependent MDS patients achieved RBC-TI >56 days; TMEM14C aberrant splicing biomarker identified; diarrhea/nausea/fatigue primary adverse events · phase-1 rct · model: human (MDS/CMML/AML) · archive: pending download (hybrid OA)

[^foran2025]: doi:10.1016/j.leukres.2025.107735 · Foran JM, Stone RM et al. · *Leukemia Res* 2025 · Phase I dose-expansion of H3B-8800 in 43 lower-risk MDS-SF3B1 patients; 4/43 achieved RBC-TI ≥8 weeks; atrial fibrillation 19–29%; insufficient efficacy at current doses · phase-1 rct · model: human · archive: **#gap/no-fulltext-access** — closed OA; claims from abstract only

[^huang2025]: doi:10.1007/s00277-025-06499-4 · Huang L et al. · *Ann Hematol* 2025 · meta-analysis of 23 studies, n=24,060 CLL patients; SF3B1 mutation predicts poor OS (HR 1.68) and PFS (HR 1.63) in CLL — adverse prognosis context, contrast to favorable prognosis in MDS-RS · meta-analysis · model: human CLL · archive: not checked

[^obeng2016]: doi:10.1016/j.ccell.2016.08.006 · Obeng EA, Chappell RJ, Seiler M et al. · *Cancer Cell* 2016;30(3):404-417 · hematopoietic-specific conditional knock-in mouse model (Mx1-Cre) of Sf3b1-K700E (n=11 Sf3b1+/K700E, n=9 Sf3b1+/+ littermates, monitored 64 weeks); Sf3b1+/K700E mice develop progressive macrocytic anemia, terminal erythroid maturation block, erythroid dysplasia, LT-HSC expansion; aberrant alternative 3' splice-site selection confirmed in both murine myeloid progenitors and SF3B1-mutant human MDS patient samples; ring sideroblasts NOT observed in mouse model (ABCB7 cryptic splice site not conserved in mice); Tet2 loss cooperates additively; spliceosome modulator E7107 selectively kills SF3B1K700E-expressing cells · in-vivo (conditional KI) · model: Mus musculus (C57BL/6J-B6.SJL) · archive: **locally available** —  (local PDF)
