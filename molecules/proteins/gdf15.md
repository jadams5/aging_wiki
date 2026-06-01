---
type: protein
aliases: [GDF-15, MIC-1, NAG-1, PLAB, growth differentiation factor 15, macrophage inhibitory cytokine 1, NSAID-activated gene 1]
uniprot: Q99988
ncbi-gene: 9518
hgnc: 30142
ensembl: ENSG00000130513
genage-id: 23886
mouse-ortholog: Gdf15
key-domains: [signal-peptide, pro-peptide, mature-TGF-beta-domain, cystine-knot]
key-ptms: [Asn70-glycosylation, Cys203-Cys210-disulfide, Cys273-interchain-disulfide, proteolytic-cleavage-at-Arg194]
pathways: ["[[tgf-beta]]"]
hallmarks: ["[[chronic-inflammation]]", "[[mitochondrial-dysfunction]]", "[[deregulated-nutrient-sensing]]"]
sens-categories: []
known-interactors: ["[[gfral]]", "[[ret]]"]
druggability-tier: 1
caused-by: ["[[mitochondrial-dysfunction]]", "[[integrated-stress-response]]"]
causes: ["[[deregulated-nutrient-sensing]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Bootcov 1997 (PNAS) verified against local PDF; Coll 2020 (Nature) verified against local PDF; Lu 2019 GrimAge (Aging) verified against local PDF; UniProt Q99988 mature-chain annotation confirmed live. Wiklund 2010 not verified (download failed, bronze OA blocked — see footnote #gap/no-fulltext-access). Four 2017 GFRAL papers (Mullican nm.4392, Emmerson nm.4393, Yang nm.4394, Hsu nature24042) not verified (closed-access). Yatsuga 2015 citation (substituted for incorrect suomalainen2011) not verified against full text — DOI confirmed via PubMed."
---

# GDF15

GDF15 (growth differentiation factor 15) is a stress-responsive secreted hormone and the strongest single-protein predictor of all-cause mortality currently known. It is one of seven plasma-protein DNAm surrogates embedded in the [[grimage-2019]] clock, a leading peripheral biomarker of mitochondrial stress, and the critical mediator of [[metformin]]'s weight-lowering (but not glucose-lowering) effects. Its receptor — GFRAL, expressed exclusively in the area postrema and nucleus tractus solitarius of the brainstem — was identified simultaneously by four independent groups in 2017, establishing GDF15 as a hormonally active ligand rather than a locally acting cytokine.

## Identity

- **UniProt:** Q99988 (GDF15_HUMAN); Swiss-Prot curated
- **NCBI Gene:** 9518
- **HGNC:** 30142; approved symbol GDF15
- **Ensembl:** ENSG00000130513
- **Mouse ortholog:** Gdf15 (one-to-one)
- **GenAge-models ID:** 23886 — Gdf15, *Mus musculus*, pro-longevity effect; knockout/overexpression models show +43% mean lifespan (mouse); evidence from single study
- **Chromosomal location:** 19p13.11 (human)

### Multiple-discovery aliases

GDF15 was independently discovered and named multiple times before its identity as a single protein was established:

| Alias | Discovery context | Year |
|---|---|---|
| MIC-1 (macrophage inhibitory cytokine 1) | Macrophage-derived inhibitory cytokine found in myeloid cells | Bootcov 1997 [^bootcov1997] |
| NAG-1 (NSAID-activated gene 1) | Induced by NSAIDs and PPARγ ligands | ~2000 |
| PLAB (placental TGF-β) | High expression in placenta | ~2000 |
| GDF15 | TGF-β superfamily annotation | HGNC current canonical name |

The unified name GDF15 is now standard. The alias MIC-1 persists in much older literature.

## Structure

GDF15 belongs to the TGF-β superfamily but is a **distant outlier** — only ~25% sequence identity to other family members [^bootcov1997]. This divergence is reflected in its unique receptor (GFRAL) and distinct signaling biology.

- **Precursor:** 308 amino acids; contains signal peptide (aa 1–29) and pro-peptide (aa 30–194)
- **Mature chain:** 114 amino acids (aa 195–308), produced by furin-type protease cleavage at Arg194
- **Secreted form:** disulfide-linked homodimer (the bioactive form in plasma)
- **Cystine-knot architecture:** six conserved cysteines form the characteristic TGF-β cystine knot; an additional interchain disulfide (Cys273) links the two monomers
- **PTMs:** N-linked glycosylation at Asn70 (in the pro-peptide)

## Receptor and signaling: GFRAL/RET complex

In 2017, four independent groups simultaneously identified **GFRAL** (GDNF family receptor alpha-like) as the cognate receptor for GDF15 [^mullican2017][^hsu2017][^emmerson2017][^yang2017]. This represented one of the fastest convergent-discovery events in recent receptor biology.

**Critical anatomical constraint:** GFRAL mRNA and protein are expressed almost exclusively in the **area postrema (AP) and nucleus tractus solitarius (NTS)** of the hindbrain — brainstem regions accessible to circulating signals due to the absence of a normal blood-brain barrier [^hsu2017]. GFRAL is essentially absent from peripheral tissues, heart, liver, kidney, adipose, and skeletal muscle. This means GDF15 acts as a **classical endocrine hormone** — synthesized peripherally (liver, kidney, epithelium) and detected centrally.

**Signal transduction:**
1. GDF15 homodimer binds GFRAL extracellular domain
2. GFRAL recruits **RET** (the receptor tyrosine kinase co-receptor used by GDNF-family ligands) [^mullican2017]
3. GFRAL–RET complex signals via RET kinase activity → downstream ERK, AKT, PLC-γ
4. AP/NTS neurons relay the signal via vagal afferents → reduced appetite, nausea, emesis

GFRAL-null and GDF15-null mice are fully insensitive to the body-weight and food-intake effects of exogenous GDF15 [^yang2017][^mullican2017], confirming GFRAL is non-redundant for these responses.

## Function

### Appetite suppression and aversion

GDF15 is, on a per-molecule basis, among the most potent known appetite suppressants. It drives anorexia and nausea through AP/NTS GFRAL signaling, activating circuits overlapping with malaise and emesis pathways. This mechanistic basis explains:

- **Cancer cachexia:** tumor-derived GDF15 suppresses appetite and drives wasting #gap/needs-replication (mechanistic dissection in humans)
- **Pregnancy nausea:** elevated fetal GDF15 (from placenta) is the leading candidate mechanism for hyperemesis gravidarum — variants impairing GDF15 secretion protect against HG
- **Metformin GI intolerance:** intestinal GDF15 induction by metformin may underlie GI side effects at therapeutic doses

### Stress response

GDF15 is induced robustly by:

- Mitochondrial dysfunction and the **mitochondrial unfolded protein response (UPRmt)** — mtDNA-encoded OXPHOS disorders (MELAS, KSS, Pearson syndrome) show dramatically elevated serum GDF15 [^yatsuga2015] #gap/needs-replication
- **Integrated stress response (ISR) / eIF2α-ATF4 axis** — cytosolic and ER stress converge on GDF15 transcription via ATF4 binding sites in the GDF15 promoter
- Inflammation (NF-κB), hypoxia (HIF-1α), oxidative stress, p53 activation, and NSAID/PPAR-γ ligand treatment

The resulting secreted GDF15 circulates as a sentinel signal of systemic stress, detectable in plasma at pg/mL concentrations.

## Mortality biomarker

GDF15 is one of the most robustly validated predictors of all-cause mortality in elderly populations, consistently outperforming conventional clinical risk factors in several large prospective cohort studies.

**Wiklund 2010** — in a Swedish population-based cohort, serum MIC-1/GDF15 was an independent predictor of all-cause mortality across multiple age strata; higher circulating GDF15 associated with substantially increased mortality risk, independent of BMI and comorbidities [^wiklund2010]. #gap/needs-replication — this specific cohort paper needs independent replication across diverse populations, though subsequent cohort evidence broadly consistent.

**GrimAge component:** GDF15 is one of the seven plasma-protein DNAm surrogates incorporated into the [[grimage-2019]] clock [^lu2019], which is currently the strongest single-composite DNA methylation predictor of all-cause mortality. The fact that a DNAm-based proxy of GDF15 is a top mortality predictor reinforces GDF15's biological relevance to mortality across the life course.

**Epidemiology of age-trajectory:** circulating GDF15 increases steeply with chronological age — rising roughly 2–3-fold between ages 40 and 80 in population cross-sections. Whether this rise is mechanistically involved in aging trajectories or is a bystander reflection of accumulating disease burden and mitochondrial dysfunction is **the central open question** in GDF15 aging biology. #gap/no-mechanism

| Dimension | Status |
|---|---|
| GDF15 elevation correlates with mortality in humans? | yes (multiple large cohorts) |
| GDF15 elevation is causally upstream of aging? | unknown; observational only |
| Mendelian randomization evidence? | limited; not well-powered MR instruments yet |

## Metformin connection

Coll et al. 2020 (Nature) demonstrated that [[metformin]] — at therapeutic doses and over relevant timescales — induces GDF15 expression predominantly in **enterocytes of the distal small intestine and colon, and in periglomerular renal tubular cells** [^coll2020]. Expression was assessed by Gdf15 mRNA in a tissue panel and confirmed by in situ hybridisation; the liver, while capable of responding to biguanides in cell-based assays, was not the dominant in vivo source under oral dosing. This finding was established in:

- Gdf15-null mice: insensitive to metformin-induced weight loss on high-fat diet
- Gfral-null mice: same phenotype
- GFRAL antagonist antibody co-treatment: reverses metformin weight loss in obese wild-type mice
- Human CAMERA trial sub-study: plasma GDF15 rises with metformin dose

**Dissociation of mechanisms:** Metformin's glucose-lowering and insulin-sensitizing effects are fully preserved in Gdf15-null mice — GDF15 is therefore necessary for weight-lowering but **GDF15-independent glucose lowering** is confirmed [^coll2020]. This mechanistic dissociation is clinically relevant: therapeutic weight loss from metformin in T2D is partly GDF15-mediated, but the antidiabetic benefit does not require GDF15.

This finding also suggests that at least part of metformin's GI intolerance (nausea, diarrhea) may be GDF15/GFRAL-mediated, a hypothesis still under investigation.

## Mitochondrial stress biomarker

GDF15 is currently the strongest peripheral biomarker of mitochondrial dysfunction available in clinical settings. Serum GDF15 is markedly elevated in:

- Primary mitochondrial disorders caused by mtDNA mutations (MELAS, Pearson, Kearns-Sayre) [^yatsuga2015]
- Patients with mitochondria-toxic drug exposures (nucleoside reverse transcriptase inhibitors)
- States of high mitochondrial stress (critical illness, advanced heart failure, sepsis)

The mechanism is via UPRmt → ATF4 → GDF15 transcription in mitochondrially-stressed cells. GDF15 therefore functions as a **systemic reporter** of intracellular mitochondrial stress — a peripheral signal visible in a blood test. In the context of aging, rising GDF15 with age is consistent with the known accumulation of mitochondrial dysfunction as a [[mitochondrial-dysfunction]] hallmark.

#gap/no-mechanism — whether GDF15 induction in response to mitochondrial stress is adaptive (a protective hormetic signal) or maladaptive (driving cachexia and anorexia as collateral damage) is unresolved.

## Aging trajectory

GDF15 rises with age more consistently than almost any other circulating protein. It is among the most reliably age-upregulated analytes across multiple proteomics aging atlases [^wiklund2010]. #gap/unsourced — a confirmed-DOI proteomics atlas citation showing GDF15 age trajectory should be added on verification pass (Lehallier 2019 proteomics clock or similar is likely). The aging-related rise appears to reflect:

1. Accumulating mitochondrial dysfunction in tissues → UPRmt → GDF15 secretion
2. Increasing burden of low-grade chronic disease
3. Possible direct contribution of the [[chronic-inflammation]] hallmark (NF-κB drives GDF15)

Whether elevated GDF15 in elderly individuals is mechanistically harmful (driving muscle wasting, anorexia, and cachexia via GFRAL signaling) or simply a bystander biomarker is a central unsettled question. The GenAge entry (mouse, +43% lifespan from Gdf15 manipulation) suggests modulating GDF15 levels can influence lifespan, but the directionality (knockout vs overexpression) and biological mechanism in that mouse model require independent confirmation. #gap/needs-replication

## Therapeutic landscape

### Anti-GDF15 antibodies (cancer cachexia)

Blocking GDF15 is a rational strategy for cancer cachexia and anorexia of aging — restoring appetite by interrupting GFRAL signaling. Two antibodies are in advanced development:

- **Ponsegromab (Pfizer):** anti-GDF15 monoclonal antibody; Phase 2 results published in NEJM 2025 (doi:10.1056/nejmc2500502) showing weight gain in cancer cachexia patients with elevated GDF15; Phase 3 optimization underway (2026 modeling papers). #gap/long-term-unknown
- **NGM120 (NGM Bio):** anti-GFRAL monoclonal antibody (targets receptor rather than ligand); Phase 1/2 data reported; less advanced than ponsegromab

Clinical target: patients with cancer cachexia, elevated baseline GDF15, and weight loss — the GDF15-high subgroup may be the most responsive.

### GDF15 agonism (obesity, metabolic disease)

Since GDF15 → GFRAL is among the most potent appetite-suppression circuits identified, GDF15 agonists are being developed as anti-obesity agents. This represents the opposite therapeutic direction from the cachexia application: recombinant GDF15 analogs or GDF15 mimetics that activate GFRAL to reduce body weight.

- Phase 1/2 trials are ongoing with GDF15 analogs for obesity/metabolic disease (multiple sponsors)
- The challenge is GDF15's nausea-inducing effects at high doses; titration strategies and tolerance are under investigation
- Receptor selectivity (GFRAL vs any off-target) appears favorable given GFRAL's narrow brainstem expression

### Aging and sarcopenia

Whether blocking GDF15 in elderly individuals with elevated baseline GDF15 and sarcopenia/anorexia would improve outcomes (muscle mass, physical function, survival) is an active research question. The dual signal — GDF15 as mortality predictor AND GDF15 as driver of anorexia/wasting — makes GDF15 a pharmacologically prioritized target in aging biology. No aging-specific GDF15 trial results have been published as of 2026-05-05. #gap/long-term-unknown #gap/needs-human-replication

## Limitations and gaps

1. **Causal vs. biomarker ambiguity** — GDF15 is robustly elevated with aging and disease, but whether it drives outcomes or is a passive readout is unresolved. MR instruments for GDF15 are not yet well-established. #gap/no-mechanism

2. **GenAge mouse data context** — The +43% lifespan claim (GenAge 23886) requires primary source verification (study design, genetic manipulation type, direction of effect). #gap/needs-replication #gap/needs-canonical-id — exact primary paper citation for the GenAge mouse entry not yet confirmed.

3. **GFRAL antagonism and aging** — Whether restoring appetite in GDF15-high elderly individuals improves clinical outcomes is unknown; trials are in cancer cachexia, not aging per se. #gap/needs-human-replication

4. **Sex differences** — GDF15 dynamics during pregnancy (extremely high, due to placental production) complicate cross-sex comparisons of aging trajectories. Whether female baseline GDF15 aging trajectories differ from male requires careful cohort analysis. #gap/dose-response-unclear

5. **Tissue-of-origin heterogeneity** — Liver, kidney, intestine, placenta, macrophages, and tumors all secrete GDF15; the contribution of each compartment to circulating levels in aging is unclear. #gap/no-mechanism

6. **Druggability tier note** — Tier 1 assigned based on ponsegromab clinical-stage program (anti-GDF15 mAb in Phase 2/3); this reflects the ligand as target. GFRAL is the receptor target for NGM120. Open Targets API was unavailable during seeding; druggability tier should be verified against current Open Targets platform data. #gap/needs-canonical-id

## Cross-references

- [[grimage-2019]] — GDF15 is one of 7 plasma-protein surrogates in GrimAge (verified page); the DNAm-GDF15 surrogate is a top GrimAge component
- [[metformin]] — GDF15 mediates metformin's weight-lowering effect (Coll 2020); verified-partial on metformin.md
- [[mitochondrial-dysfunction]] — GDF15 as peripheral UPRmt reporter hallmark
- [[chronic-inflammation]] — NF-κB induces GDF15; GDF15 rise contributes to chronic inflammation signaling
- [[deregulated-nutrient-sensing]] — GFRAL/RET → appetite suppression; mechanistic link to systemic nutrient sensing
- [[tgf-beta]] — parent superfamily pathway (implicit stub)
- [[gfral]] — cognate receptor; brainstem-restricted (implicit stub)
- [[ret]] — co-receptor required for GFRAL signaling (implicit stub)
- [[integrated-stress-response]] — ATF4-driven GDF15 transcription (implicit stub)
- [[mus-musculus]] — GenAge pro-longevity data in mouse

## Footnotes

[^bootcov1997]: doi:10.1073/pnas.94.21.11514 · Bootcov MR et al. · PNAS 94(21):11514–11519, 1997 · in-vitro + secretion assays · model: U937 myelomonocytic and primary macrophage cell lines · first characterization of MIC-1/GDF15 as TGF-β superfamily member; 308-aa precursor, 15–29% identity to other TGF-β superfamily members (distant outlier); citation count ~1,128 (100th percentile in archive); local PDF available (PMC23523)

[^mullican2017]: doi:10.1038/nm.4392 · Mullican SE et al. · Nature Medicine 23:1150–1157, 2017 · in-vivo + cell-based · model: mice (Gfral-null, WT) + nonhuman primates · established GFRAL as GDF15 receptor; GDF15 promotes weight loss via GFRAL; archive status: closed-access (not_oa) #gap/no-fulltext-access

[^hsu2017]: doi:10.1038/nature24042 · Hsu JY et al. · Nature 550:255–259, 2017 · in-vivo · model: mice + brainstem-restricted receptor expression characterization · GFRAL expression restricted to area postrema + NTS; archive status: closed-access (not_oa) #gap/no-fulltext-access

[^emmerson2017]: doi:10.1038/nm.4393 · Emmerson PJ et al. (Eli Lilly) · Nature Medicine 23:1215–1219, 2017 · in-vivo · model: mice + cell-based binding assays · confirmed GFRAL mediates GDF15 metabolic effects; archive status: closed-access (not_oa) #gap/no-fulltext-access

[^yang2017]: doi:10.1038/nm.4394 · Yang L et al. (Novo Nordisk) · Nature Medicine 23:1158–1166, 2017 · in-vivo · model: Gfral-null mice · GFRAL required for GDF15 anti-obesity effects; archive status: closed-access (not_oa) #gap/no-fulltext-access

[^coll2020]: [[studies/coll-2019-gdf15-metformin]] · doi:10.1038/s41586-019-1911-y · in-vivo + human RCT sub-study · model: Gdf15-null, Gfral-null mice; human CAMERA trial (metformin dose-escalation sub-study) · Nature 578:444–448 (2020); metformin induces intestinal GDF15; GDF15/GFRAL necessary for weight-lowering, not glucose-lowering; local PDF available

[^wiklund2010]: doi:10.1111/j.1474-9726.2010.00629.x · Wiklund FE et al. · Aging Cell 9(6):1057–1064, 2010 · observational (prospective cohort) · model: Swedish population cohorts · MIC-1/GDF15 as independent predictor of all-cause mortality; archive status: download failed (bronze OA URL returned 403; full-text not accessible) #gap/no-fulltext-access — DOI confirmed correct via Crossref; quantitative claims (effect size, HR, cohort n) not verified against full text

[^lu2019]: doi:10.18632/aging.101684 · Lu AT et al. · Aging 2019 · observational (cohort, training + 5 validation cohorts, n=6,935 total) · GrimAge clock; GDF15 is one of 7 plasma-protein DNAm surrogates; composite achieves HR=1.10/yr AgeAccelGrim, meta-P=2.0E-75 · local PDF available (PMC6366976)

[^yatsuga2015]: doi:10.1002/ana.24506 · Yatsuga S et al. · Ann Neurol 78(5):814–823, 2015 · observational · model: 48 patients with mitochondrial disease (MELAS, KSS, Pearson, and other primary mtDNA disorders) vs 146 controls · GDF15 was the most discriminating biomarker for mitochondrial disease; markedly elevated serum GDF15 in MELAS, Kearns-Sayre, Pearson syndrome; archive status: not downloaded — note: the seeder attributed this to a "Suomalainen 2011" paper that does not exist as described; the Suomalainen lab's primary contribution in this area was establishing FGF21 as a biomarker (Lehtonen et al. 2016, Neurology, doi:10.1212/WNL.0000000000003374); the landmark GDF15 paper is Yatsuga/Koga 2015
