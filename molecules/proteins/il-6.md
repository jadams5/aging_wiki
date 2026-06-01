---
type: protein
aliases: [interleukin-6, IL6, BSF-2, B-cell stimulatory factor-2, IFN-β2, IFNB2, HSF, hepatocyte stimulating factor, CDF, HIFU]
uniprot: P05231
ncbi-gene: 3569
hgnc: 6018
ensembl: ENSG00000136244
genage-id: 144
pathways: ["[[jak-stat-pathway]]", "[[nf-kb]]"]
hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]", "[[cellular-senescence]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 1
gtex-aging-correlation: "IL-6 is predominantly secreted under inflammatory conditions; basal mRNA is low in GTEx tissues and does not show a monotonic aging signature in bulk RNA-seq. Protein-level aging data (plasma proteomics) is more informative — see [[../../biomarkers/il-6-biomarker]]. #gap/needs-gtex-aging-correlation"
mr-causal-evidence: yes
caused-by: ["[[cellular-senescence]]", "[[nf-kb]]"]
causes: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Swerdlow 2012 (Lancet, local PDF), Rose-John 2012 (IJBS, local PDF), Heink 2017 (Nat Immunol, local PDF) verified against full text. Schreiber 2021 (Gastroenterology): hybrid OA, full PDF inaccessible — headline figures (44% response, 19% remission, n=16) confirmed against PubMed abstract only; tag #gap/needs-full-pdf-verification. Franceschi 2000: closed-access (not_oa), unverifiable. Pedersen 2007: not_oa, unverifiable. Canonical-database identity fields (UniProt P05231 confirmed via REST API; NCBI Gene 3569, HGNC 6018, Ensembl ENSG00000136244, GenAge 144) not independently re-verified beyond UniProt accession check."
literature-checked-through: 2026-05-09
---

# IL-6 (Interleukin-6)

A pleiotropic secreted cytokine that occupies a central node in the biology of aging: acutely beneficial (tissue repair, exercise-induced metabolic signaling), chronically harmful when basally elevated as part of [[sasp|SASP]] and [[chronic-inflammation|inflammaging]]. Druggability-tier 1 via FDA-approved receptor-blocking antibodies in clinical use. The **IL-6 paradox** — acute anti-inflammatory myokine vs. chronic pro-inflammatory driver — is one of the clearest illustrations of context-dependence in aging biology.

## Identity

- **UniProt:** P05231 (IL6_HUMAN), manually curated Swiss-Prot entry
- **NCBI Gene:** 3569 · HGNC symbol: IL6 · HGNC ID: 6018
- **Ensembl:** ENSG00000136244
- **GenAge (HAGR) entry:** 144 — classified "indirect or inconclusive" for human longevity; IL-6 polymorphisms correlate with cardiovascular disease risk but not with human longevity in population studies
- **Chromosomal location:** 7p15.3
- **Protein length:** 212 aa (pre-pro-protein); signal peptide aa 1–29; mature secreted form aa 30–212 (~20 kDa; heavily glycosylated, apparent MW 22–27 kDa)
- **Mouse ortholog:** Il6 (one-to-one; high functional conservation)

## Structure

IL-6 belongs to the **IL-6 family of cytokines** (also called gp130 cytokines), all sharing a four-helix-bundle topology. The family includes IL-6, IL-11, IL-27, LIF, OSM, CNTF, CT-1, and CLC. Common feature: signaling through the shared receptor subunit **gp130** (encoded by IL6ST).

Key structural features:
- **Four α-helical bundle** (helix A–D) — defines the IL-6 superfamily fold
- **Site I, II, III binding surfaces** — mediate sequential receptor assembly (IL-6R binding at site I; gp130 recruitment at sites II/III)
- **Disulfide bonds:** Cys72–Cys78 and Cys101–Cys111 — required for structural integrity
- **Glycosylation:** N-linked (Asn73) + O-linked — accounts for variability in apparent molecular weight and modulates receptor affinity and half-life

## Signaling modes

IL-6 can engage cells via three structurally and functionally distinct signaling modes. The distinction between classical and trans-signaling is clinically actionable — selective trans-signaling inhibition is a therapeutic strategy (olamkicept) [^rosejohn2012] [^schreiber2021].

### 1. Classical signaling (membrane IL-6R)

**Cells capable:** hepatocytes, leukocytes, and a small number of cell types that express membrane-bound IL-6R (IL6RA, CD126)

**Assembly sequence:**
1. IL-6 binds membrane IL-6R (IL6RA)
2. IL-6:IL6RA complex recruits two gp130 (IL6ST) subunits → hexameric complex
3. JAK1/JAK2 (associated with gp130) trans-phosphorylate → STAT3 activation
4. Downstream: STAT3 → acute-phase proteins; PI3K→AKT; MAPK/ERK

**Biological character:** Predominantly **tissue-protective, regenerative, anti-inflammatory.** Mediates acute-phase response in liver (fibrinogen, CRP, hepcidin, serum amyloid A); supports hepatocyte proliferation after partial hepatectomy; promotes differentiation of B cells into antibody-secreting plasma cells; protective neurotropic effects in neural tissue.

### 2. Trans-signaling (soluble IL-6R)

**Cells capable:** essentially all cells, because gp130 is ubiquitously expressed

**Assembly sequence:**
1. Soluble IL-6R (sIL-6R) — shed from the membrane surface of neutrophils, monocytes, and hepatocytes primarily by **ADAM17** metalloprotease cleavage (ADAM10 plays a secondary role in apoptosis-induced shedding; ADAM17 is the dominant sheddase in inflammatory contexts) — circulates in plasma at approximately **75 ng/mL** in healthy adults; the endogenous soluble decoy sgp130 circulates at ~250–400 ng/mL [^rosejohn2012]
2. IL-6 binds sIL-6R in the circulation
3. The IL-6:sIL-6R complex engages gp130 on any cell (even those lacking membrane IL-6R)
4. Same intracellular signaling cascade as classical (JAK/STAT3/MAPK/PI3K)

**Biological character:** Predominantly **pro-inflammatory.** Responsible for most of IL-6's pathological effects: endothelial activation, chemoattractant production, T-cell survival, inhibition of regulatory T-cell differentiation, and promotion of pathogenic effector T-cell populations [^rosejohn2012]. The rise of sIL-6R with age amplifies trans-signaling capacity independently of IL-6 concentration changes.

**Selective blockade:** Soluble gp130 (sgp130) is the endogenous trans-signaling inhibitor — it binds IL-6:sIL-6R complexes but not membrane IL-6R complexes. The engineered Fc-fusion **olamkicept** (sgp130Fc) selectively inhibits trans-signaling; in a Phase 2a IBD trial, 44% clinical response rate [^schreiber2021]. This mechanism spares classical signaling's regenerative and hepatoprotective functions — a potentially important advantage over non-selective anti-IL-6R blockade for aging indications.

### 3. Trans-presentation (newest mode)

**Description:** Membrane IL-6Rα expressed on **CD11b+Sirpα+CD103⁻SiglecH⁻ dendritic cells** (the cDC2 subset) presents IL-6 to gp130 on adjacent T cells via direct cell-cell contact during cognate antigen presentation (termed "IL-6 cluster signaling" by Heink et al.). IL-6 is loaded intracellularly onto IL-6Rα within DCs before transport to the membrane interface; unlike trans-signaling, anti-IL-6 antibodies fail to block this mode [^heink2017].

**Biological relevance:** Required for priming pathogenic TH17 cells; distinct from the ambient IL-6 that suppresses regulatory T-cell differentiation. May be relevant to autoimmune-inflammatory amplification in aging tissues but direct aging-context evidence is limited. #gap/needs-human-replication

## Downstream signaling

Following gp130 activation (all three signaling modes):

| Branch | Key mediators | Outcomes |
|---|---|---|
| JAK/STAT3 | JAK1, JAK2, STAT3 | Acute-phase proteins; gene-expression programs; cell survival |
| MAPK/ERK | RAS → RAF → MEK → ERK | Cell proliferation, differentiation |
| PI3K/AKT | PI3K → AKT → mTOR | Metabolic effects, cell survival, protein synthesis |

Negative regulators: **SOCS1/SOCS3** (JAK inhibitors induced by STAT3 as negative feedback), **SHP2** (tyrosine phosphatase), sgp130 (endogenous trans-signaling decoy).

## Expression sources in aging

- **Macrophages / monocytes:** primary producers in systemic inflammation; classical NLRP3 inflammasome-IL-1β axis induces IL-6 via NF-κB
- **Senescent cells (SASP):** a major source of basally elevated IL-6 in aged tissues — [[sasp|SASP]]-derived IL-6 drives paracrine senescence spread and tissue dysfunction [^franceschi2000]
- **Adipose tissue:** adipocytes and adipose-resident macrophages; fat mass increases with age and proportionally increases adipose IL-6 output
- **Fibroblasts and endothelial cells:** respond to and amplify inflammatory signals
- **Skeletal muscle (acute exercise only):** IL-6 is the canonical exercise-induced **myokine** — released from contracting muscle fibers via glycogen-depletion signaling, peaking 5–10× above baseline during endurance exercise and returning to baseline within hours [^pedersen2007]. This acute myokine IL-6 is mechanistically distinct from basally elevated IL-6: it drives fatty-acid oxidation, glucose uptake, and anti-inflammatory IL-1Ra / IL-10 production — net anti-inflammatory.

## IL-6 and aging: the inflammaging axis

Chronic low-grade elevation of IL-6 is among the most consistently replicated biomarkers of aging across population cohorts [^franceschi2000]. Serum IL-6 rises approximately **2–4-fold** from early adulthood to age 80 in healthy individuals, and predicts all-cause mortality, disability, and frailty independently of chronological age. See [[../../biomarkers/il-6-biomarker]] for clinical-interpretation context.

**Mechanistic contributions to age-related pathology:**

- **SASP amplification** — senescent cells secrete IL-6, which can induce paracrine senescence in neighboring cells via gp130 signaling; self-amplifying loop
- **Muscle wasting (sarcopenia)** — trans-signaling-mediated inhibition of satellite cell activation and IGF-1 signaling; IL-6 knockout mice show enhanced regeneration post-injury
- **Immunosenescence** — chronic IL-6 trans-signaling shifts T-cell differentiation away from naive/regulatory toward effector/exhausted phenotypes
- **Metabolic dysregulation** — sustained IL-6 trans-signaling drives insulin resistance in adipose and liver; distinct from acute-exercise myokine effect
- **Vascular disease** — IL-6 trans-signaling promotes endothelial activation, VCAM-1 upregulation, and atherosclerotic plaque destabilization

### Mendelian randomization evidence

The IL-6R MR Collaboration (2012, *Lancet*) used the *IL6R* **rs7529229** SNP as the lead analytic instrument — a tagging SNP in strong LD (r²=0.92) with the functional non-synonymous variant **rs8192284 (p.Asp358Ala, also annotated as rs2228145)**. The Asp358Ala substitution increases proteolytic shedding of membrane IL-6R by ADAM17, raising circulating sIL-6R and paradoxically attenuating downstream IL-6 inflammatory signaling. Across 40 studies including up to 133,449 individuals for biomarker analyses, and 34 studies with 25,458 CHD cases / 100,740 controls for the primary endpoint, each additional minor allele was associated with **OR 0.95 (95% CI 0.93–0.97), p=1.53×10⁻⁵** for fatal or non-fatal CHD — a modest per-allele risk reduction consistent with lifelong partial moderation of IL-6R signaling [^swerdlow2012]. This MR evidence supports a causal role of the IL-6/IL-6R axis in coronary heart disease and validates IL-6R as a cardiovascular drug target.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | gp130/JAK/STAT3 highly conserved; human MR evidence available |
| Phenotype conserved in humans? | yes | IL-6 elevation predicts mortality and frailty in multiple human cohorts |
| Replicated in humans? | yes (cardiovascular) / partial (aging per se) | Strong for CVD via MR; aging-specific RCT data limited |

## The IL-6 paradox: context is everything

The same cytokine is:

- **Pro-aging (chronic basal elevation):** SASP component, senescence amplifier, insulin-resistance driver, muscle-catabolism promoter, immune-function disruptor
- **Anti-aging (acute exercise-induced):** promotes fat oxidation, insulin sensitivity, anti-inflammatory cytokine induction (IL-1Ra, IL-10), liver glucose metabolism, and exercise-adaptation

Mechanistically, the paradox partially resolves by signaling mode: acute muscle-derived IL-6 operates mainly via **classical signaling** on hepatocytes (IL-6R+) and muscles; chronic basal IL-6 accumulates sIL-6R and operates via **trans-signaling** on all tissues. Amplitude and duration also matter — transient high-amplitude spikes (exercise) vs. continuous low-amplitude elevation (SASP/inflammaging).

Therapeutic implication: **global IL-6 blockade** (tocilizumab/siltuximab) abolishes both the harmful chronic and the beneficial acute signals; **selective trans-signaling inhibition** (olamkicept) may spare the protective classical arm. Relevant for aging-indication drug development.

## Pharmacology

### FDA-approved agents targeting IL-6 axis

| Agent | Target | Indication | Year approved |
|---|---|---|---|
| Tocilizumab (Actemra) | IL-6R (anti-IL-6Rα mAb) | RA, GCA, CRS, COVID-19 | 2010 (RA) / 2022 (COVID-19) |
| Siltuximab (Sylvant) | IL-6 (anti-IL-6 mAb) | Multicentric Castleman disease | 2014 |
| Sarilumab (Kevzara) | IL-6R (anti-IL-6Rα mAb) | RA | 2017 |
| Satralizumab (Enspryng) | IL-6R | Neuromyelitis optica spectrum disorder | 2020 |

**Aging-context tier-1 rationale:** Multiple FDA-approved agents block the IL-6/IL-6R/gp130 axis. Tocilizumab is being investigated in aging contexts: geroscience-hypothesis trials targeting inflammaging (e.g., Taming Aging with Metformin (TAME) comparators, frailty pilot studies). Tier-1 designates that a clinical drug exists and is being explored in aging-relevant contexts, not that an aging-indication FDA approval exists.

### Investigational aging-context agents

- **Olamkicept (sgp130Fc):** selective IL-6 trans-signaling inhibitor; Phase 2a IBD trial (Schreiber 2021: 44% clinical response) [^schreiber2021]; potential advantage for aging use due to sparing of classical signaling's regenerative functions. No aging-indication trial yet. #gap/needs-human-replication
- **Anti-IL-6 senolytic combinations:** not directly IL-6-targeted but senolytics (navitoclax, dasatinib + quercetin) reduce SASP-derived IL-6 as a downstream effect

## Cross-links

- **Biomarker page:** [[../../biomarkers/il-6-biomarker]] — clinical-interpretation context, aging cohort data, assay considerations
- **Process pages:** [[../../processes/sasp]] — IL-6 as a central SASP component
- **Pathway pages:** [[../../pathways/jak-stat-pathway]] — downstream JAK1/2/STAT3 signaling; [[../../pathways/nf-kb]] — upstream transcriptional induction of IL-6 in senescent cells and macrophages
- **Hallmark pages:** [[../../hallmarks/chronic-inflammation]] · [[../../hallmarks/altered-intercellular-communication]] · [[../../hallmarks/cellular-senescence]]

## Limitations and gaps

- **GTEx aging correlation absent:** IL-6 is primarily regulated post-transcriptionally and at secretion level; bulk RNA-seq aging correlation is uninformative for this cytokine. Protein-level aging data is the relevant measure; see [[../../biomarkers/il-6-biomarker]]. #gap/needs-gtex-aging-correlation
- **Trans-presentation in aging:** Heink 2017 established the trans-presentation mode in TH17 priming, but its quantitative contribution to aging-specific inflammation relative to classical and trans-signaling modes is unknown. #gap/no-mechanism
- **Selective trans-signaling inhibition in aging:** No aging-indication trial of olamkicept or any selective trans-signaling inhibitor exists. The mechanistic rationale is strong; human evidence gap remains. #gap/needs-human-replication
- **Causal direction of SASP-IL-6 loop:** Whether IL-6 drives senescence accumulation (→ amplifies SASP) or only reflects it remains contested; interventional data (senolytics lowering IL-6) supports bidirectionality but causality requires further dissection. #gap/contradictory-evidence
- **Dose-response for beneficial vs. harmful effects:** Threshold between acute-beneficial and chronic-harmful IL-6 signaling not quantitatively defined in humans. #gap/dose-response-unclear

## Footnotes

[^franceschi2000]: doi:10.1111/j.1749-6632.2000.tb06651.x · Franceschi C et al. · *Ann NY Acad Sci* 2000 · review · introduced the "inflamm-aging" concept linking chronic basal IL-6 elevation to age-related disease; >5000 citations; not locally downloaded
[^rosejohn2012]: doi:10.7150/ijbs.4989 · Rose-John S · *Int J Biol Sci* 2012 · review · defines classical vs. trans-signaling distinction; sIL-6R steady-state plasma ~75 ng/mL; sgp130 ~250–400 ng/mL; ADAM17 primary sheddase; 970+ citations; locally downloaded PDF — verified against full text
[^heink2017]: doi:10.1038/ni.3632 · Heink S, Korn T et al. · *Nat Immunol* 2017 Jan;18(1):74–85 · in-vivo (mouse) + in-vitro · establishes "IL-6 cluster signaling" / trans-presentation mode by CD11b+Sirpα+CD103⁻SiglecH⁻ DCs (cDC2 subset) using DC membrane-bound IL-6Rα to trans-present IL-6 to gp130 on adjacent T cells; required for pathogenic TH17 priming in EAE model; anti-IL-6 antibodies fail to block cluster signaling; locally downloaded PDF — verified against full text
[^swerdlow2012]: doi:10.1016/S0140-6736(12)60110-X · IL-6R MR Collaboration (Swerdlow D et al.) · *Lancet* 2012 · Mendelian randomization · 40 studies, up to 133,449 individuals for biomarker analyses; CHD endpoint: 25,458 cases, 100,740 controls across 34 studies; lead instrument rs7529229 (LD r²=0.92 with functional rs8192284/rs2228145 p.Asp358Ala); per-allele OR 0.95 (95% CI 0.93–0.97), p=1.53×10⁻⁵ for CHD; locally available PDF — verified against full text
[^pedersen2007]: doi:10.1016/j.tips.2007.02.002 · Pedersen BK, Fischer CP · *Trends Pharmacol Sci* 2007 · review · exercise-induced IL-6 as anti-inflammatory myokine; not locally downloaded (status: not_oa)
[^schreiber2021]: doi:10.1053/j.gastro.2021.02.062 · Schreiber S et al. · *Gastroenterology* 2021 · Phase 2a open-label prospective trial (FUTURE) · olamkicept (sgp130Fc) in active IBD; n=16; 44% clinical response, 19% remission; confirmed STAT3 phosphorylation reduction; hybrid OA — full PDF not accessible via PMC (download failed); 44%/19% figures confirmed against PubMed abstract #gap/needs-full-pdf-verification
