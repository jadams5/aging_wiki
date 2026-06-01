---
type: pathway
aliases: [PI3K/AKT, PI3K-AKT, PI3K–AKT, phosphoinositide 3-kinase AKT, PI3K/AKT/mTOR, PKB pathway]
kegg: hsa04151
reactome: R-HSA-1257604
wikipathways: WP4172
key-nodes: ["[[pi3k]]", "[[pten]]", "[[akt]]", "[[pdk1]]", "[[tsc1-tsc2]]", "[[foxo3]]", "[[mdm2]]", "[[gsk3b]]", "[[bad]]"]
upstream: ["[[insulin-igf1]]", "[[growth-factor-receptors]]"]
downstream: ["[[mtor]]", "[[autophagy]]", "[[cellular-senescence]]", "[[apoptosis-pathway]]", "[[p53-pathway]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[cellular-senescence]]", "[[genomic-instability]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Holzenberger 2003, Willcox 2008, Engelman 2006 verified against local PDFs; Manning & Toker 2017 verified against local PDF (downloaded during this pass). Vasan & Cantley 2022 partially verified via PMC abstract/full text (green OA, PMC11215755) — hyperglycemia framing and cancer-targeting claims confirmed; full PDF not locally cached. WikiPathways WP4172 confirmed as PI3K-Akt signaling (Homo sapiens). Canonical database IDs (KEGG hsa04151, Reactome R-HSA-1257604) not independently re-checked against databases."
---


# PI3K–AKT signaling pathway

The **PI3K–AKT pathway** is the central survival, growth, and metabolism-control axis downstream of insulin, IGF-1, and most other growth-factor receptors. It acts as the primary transducer from receptor tyrosine kinase (RTK) activation to downstream control of protein synthesis ([[mtor]]), apoptosis ([[apoptosis-pathway]]), cell-cycle progression, and transcription. In the context of aging, the pathway is most significant as the molecular link between **insulin/IGF-1 signaling** and [[mtor|mTORC1 activation]], and as the kinase that **phosphorylates and inactivates FOXO transcription factors** — the loss of whose activity appears to shorten lifespan in multiple organisms and is implicated in some of the most-replicated human longevity associations [^willcox2008].

> **Naming note:** This page covers the *PI3K–AKT signaling pathway* as a whole. Individual kinase protein pages (`[[pi3k]]`, `[[akt]]`, `[[pdk1]]`) are implicit stubs — these wikilinks point to as-yet-unseeded protein pages.

## Pathway structure

### Class IA PI3K: the lipid kinase generating PIP3

Class IA PI3Ks are heterodimers of a **catalytic subunit** (p110α/PIK3CA, p110β/PIK3CB, or p110δ/PIK3CD) and a **regulatory subunit** (p85α/PIK3R1 or p85β/PIK3R2). Upon RTK activation, the regulatory subunit binds phosphotyrosine residues on the receptor or scaffolding proteins, relieving its autoinhibitory effect on p110. Active PI3K phosphorylates **PIP2 (PI-4,5-P₂) → PIP3 (PI-3,4,5-P₃)** at the inner leaflet of the plasma membrane [^engelman2006].

Isoform relevance to aging-related research:
- **p110α (PIK3CA)** — ubiquitous; most-mutated PI3K isoform in cancer (~30% of solid tumors)
- **p110β (PIK3CB)** — ubiquitous; primary effector downstream of GPCRs and PTEN-null contexts
- **p110δ (PIK3CD)** — enriched in immune cells and preadipocytes; the SCAP (Survival/Anti-apoptotic pathway) node operative in preadipocyte senolysis (see [[quercetin]] and [[interventions/pharmacological/senolytics]] for the D+Q mechanism detail — the PI3Kδ node is verified per the Zhu et al. preadipocyte data cited there)

**PTEN** — a lipid phosphatase that directly reverses the PI3K reaction (PIP3 → PIP2) — is the principal negative regulator of this pathway. PTEN is among the most-commonly lost tumor suppressors in human cancer. #gap/needs-canonical-id for a dedicated `[[pten]]` protein page.

### AKT recruitment and dual phosphorylation

PIP3 accumulation at the plasma membrane recruits **AKT (PKB, three isoforms: AKT1/2/3)** via its pleckstrin-homology (PH) domain. Full AKT activation requires two phosphorylation events [^manning2017]:

| Site | Kinase | Effect |
|---|---|---|
| **Thr308** (activation loop) | [[pdk1]] (PDPK1) | Partial activation; required for catalytic activity |
| **Ser473** (hydrophobic motif) | [[mtor|mTORC2]] (via [[rictor]]) | Full activation; required for FOXO phosphorylation |

Both sites must be phosphorylated for full substrate activity. Acutely, mTORC2 provides the Ser473 phosphorylation; this is why chronic rapamycin (which partially inhibits mTORC2) reduces Ser473-pAKT and accounts for rapamycin's metabolic side effects [^manning2017].

### AKT substrates and their aging-relevance

Activated AKT is a serine/threonine kinase with >100 described substrates. The aging-relevant subset:

| Substrate | AKT effect | Downstream consequence | Aging relevance |
|---|---|---|---|
| [[tsc1-tsc2]] (TSC2, Thr1462) | Inhibitory phosphorylation | TSC1/2 GAP activity ↓ → Rheb-GTP↑ → [[mtor|mTORC1]] ON | Anabolic drive; mTORC1-mediated suppression of [[autophagy]] |
| **FOXO1/FOXO3/FOXO4** | Inhibitory phosphorylation (3 sites) | FOXO nuclear exclusion → 14-3-3 retention in cytoplasm | Blocks pro-longevity / stress-resistance transcription program |
| **GSK3β** (Ser9) | Inhibitory phosphorylation | GSK3β OFF → glycogen synthesis ↑, reduced tau phosphorylation | Metabolic and neuroprotective |
| **BAD** (Ser136) | Inhibitory phosphorylation | BAD sequestered by 14-3-3 → BCL-2/[[bcl-xl]] freed → apoptosis ↓ | Pro-survival; relevant to senescent cell persistence |
| [[mdm2]] (Ser166/Ser186) | Activating phosphorylation | MDM2 nuclear entry → ubiquitylation of [[p53]] → p53 degraded | Reduces p53-mediated apoptosis and senescence entry |
| **PRAS40** | Inhibitory phosphorylation | Releases PRAS40 from mTORC1 → mTORC1 substrate access ↑ | Reinforces mTOR activation |

## Role in aging and longevity

### Convergence with insulin/IGF-1 signaling (IIS)

The PI3K–AKT pathway *is* the molecular execution layer of [[insulin-igf1|IIS]]. All known long-lived IIS-pathway mutant organisms reduce flux through PI3K–AKT [^engelman2006]:

| Organism | Genetic perturbation | Lifespan effect |
|---|---|---|
| *C. elegans* | `daf-2` (IGF1R ortholog) LOF | +100–200% (daf-16/FOXO required) |
| *Mus musculus* | Igf1r +/− heterozygous (129/Sv) | +26% mean lifespan overall (P<0.02, Cox); +33% females (P<0.001); +15.9% males (NS) [^holzenberger2003] |
| *Mus musculus* | GH receptor knockout (Laron) | ~25–55% lifespan extension (range across studies) #gap/needs-replication |
| Human GWAS | FOXO3A GG genotype | OR ~2.75 vs TT (Japanese-American centenarian cohort) [^willcox2008] |

The mechanistic interpretation is that reduced IIS → reduced PI3K–AKT activity → FOXO transcription factors *not* excluded from the nucleus → pro-longevity gene expression (antioxidant defense, autophagy, DNA repair, proteostasis genes) is upregulated.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (longevity via IIS reduction) conserved in humans? | partial — GWAS associations exist but intervention data absent |
| Replicated in humans? | no (IIS reduction as intervention); FOXO3 GWAS replicated in multiple cohorts |

### FOXO transcription factors: the pro-longevity effectors suppressed by AKT

FOXO3 (and its orthologs DAF-16 in worms, dFOXO in flies) is the best-understood pro-longevity transcription factor regulated by PI3K–AKT. When AKT is active, FOXO3 is phosphorylated at three conserved sites — Thr32, Ser253, and Ser315 (N- to C-terminal order) [^manning2017]. **Site-function distinction (per Brunet 1999 verified):** only phospho-Thr32 + phospho-Ser253 create the 14-3-3 binding motif (T32A+S253A double mutant abolishes 14-3-3 binding); **Ser315 phosphorylation drives CRM1-mediated nuclear export, not 14-3-3 docking.** Together these effect cytoplasmic sequestration. When AKT is low (energy stress, caloric restriction, reduced IIS), FOXO3 re-enters the nucleus and activates:

- Superoxide dismutase (*SOD2*, *SOD3*) — antioxidant defense
- Catalase — H₂O₂ clearance
- GADD45 — DNA repair
- *LC3* / *BNIP3* — autophagy genes

The **FOXO3A rs2802292 GG genotype** was associated with OR ~2.75 for longevity (age 95+) versus TT in a case-control study of Japanese-American men [^willcox2008]. This is among the most-replicated human longevity genetic associations globally; replication has been reported in European, Chinese, and Italian centenarian cohorts. #gap/needs-replication — precise OR estimates vary by cohort and genotyping strategy.

### PI3K–AKT hyperactivation and aging: pro-aging anabolic drive

While complete PI3K-AKT loss extends lifespan via FOXO, **chronically elevated PI3K-AKT activity** (as occurs in aging fat tissue, metabolic syndrome, and cancer) accelerates aging-associated pathology through:

1. **mTORC1 hyperactivation** — sustained AKT→TSC2 inhibition → mTORC1 permanently ON → [[autophagy]] suppressed → protein aggregate and damaged organelle accumulation → [[deregulated-nutrient-sensing]] hallmark.
2. **MDM2-mediated p53 suppression** — AKT→MDM2 axis promotes p53 degradation, reducing apoptotic clearance of damaged cells and potentially facilitating pre-neoplastic cell survival.
3. **Senescent cell persistence** — BAD phosphorylation + BCL-XL liberation protects senescent cells from apoptosis, contributing to SASP and chronic inflammation ([[cellular-senescence]]).
4. **Oncogenesis** — PI3K–AKT is hyperactivated in ~30–50% of human cancers; somatic gain-of-function mutations in *PIK3CA* and loss-of-function mutations in *PTEN* are among the most common cancer driver events [^vasan2022].

### The FOXO3 paradox: context-dependence in aging vs cancer

A key tension: the *same* AKT→FOXO suppression that accelerates aging in normal tissue enables cancer cell survival. Full PI3K-AKT blockade in aging contexts would restore FOXO-mediated longevity gene expression but might also inappropriately trigger apoptosis in normal tissue. The aging research field therefore focuses on **partial or context-specific** pathway modulation rather than complete inhibition [^vasan2022]. #gap/dose-response-unclear — optimal degree of pathway reduction for geroprotection without cancer risk is not established in humans.

## Negative regulation and feedback

- **PTEN** — dephosphorylates PIP3 → PIP2; acts as a tumor suppressor and longevity-permissive gene [^engelman2006]. Loss of heterozygosity of PTEN increases with age in some tissues. #gap/needs-replication
- **SHIP1/2** — phosphatases converting PIP3 → PI(3,4)P₂; parallel negative regulators
- **AKT → S6K1 → IRS-1 (Ser312/Ser616)** — mTORC1/S6K1 feedback phosphorylates insulin receptor substrate-1, reducing IRS-1 binding to PI3K; this negative feedback contributes to insulin resistance in metabolic syndrome
- **mTORC1 → GRB10** — an additional negative feedback arm on RTK–PI3K coupling
- **PP2A, PHLPP1/2** — phosphatases that directly dephosphorylate AKT Thr308 and Ser473 respectively

## Pharmacological targeting

### Cancer (high-dose inhibition)

| Drug class | Example agents | Target | Clinical status |
|---|---|---|---|
| PI3K inhibitors (pan) | Copanlisib, buparlisib | All class I PI3K | FDA-approved (hematologic cancers); severe hyperglycemia limits solid tumor use |
| PI3Kα-selective | Alpelisib | p110α | FDA-approved (PIK3CA-mutant breast cancer) |
| PI3Kδ-selective | Idelalisib, umbralisib | p110δ | FDA-approved (CLL, follicular lymphoma) |
| AKT inhibitors | Capivasertib, ipatasertib | Pan-AKT | Phase 2–3; capivasertib FDA-approved 2023 (breast cancer) |
| Dual PI3K/mTOR | Gedatolisib | PI3K + mTOR (catalytic) | Phase 3 (ongoing) |

**Hyperglycemia caveat:** PI3K/AKT inhibition disrupts insulin signaling in liver and muscle → acute hyperglycemia. This is a major safety concern at anti-cancer doses and renders full-dose PI3K inhibitors inappropriate for aging applications [^vasan2022].

### Aging research (partial modulation strategy)

No PI3K–AKT inhibitor is currently in clinical trials specifically for aging (as of 2026). The aging-relevant pharmacological approach is **indirect**: compounds that reduce upstream IIS (e.g., [[metformin]] via AMPK activation reducing hepatic insulin output) or that activate competing longevity pathways (sirtuins, AMPK). The [[interventions/pharmacological/senolytics|senolytic]] use of quercetin targets PI3Kδ selectively in preadipocytes — an example of isoform-selective engagement avoiding systemic AKT inhibition.

#gap/long-term-unknown — Whether partial, isoform-selective, or intermittent PI3K-AKT inhibition can extend healthspan in humans without metabolic or immune toxicity is an open question. No interventional human trial with aging healthspan as a primary endpoint has been completed.

## Cross-pathway connections

- **[[mtor]]** — direct downstream of AKT via TSC2 phosphorylation; mTORC2 is a direct AKT Ser473 kinase, creating bidirectional coupling
- **[[ampk]]** — antagonizes PI3K-AKT indirectly: AMPK activates TSC2 and inhibits Raptor, reducing mTORC1 even when AKT is active; also, insulin resistance (downstream of PI3K–S6K1 feedback) is countered by AMPK-activating interventions
- **[[p53-pathway]]** — AKT→MDM2 promotes p53 degradation; conversely, p53 can suppress PI3K-AKT by inducing PTEN transcription and PTEN-regulatory lncRNAs
- **[[sirtuin]]** — SIRT1 can deacetylate FOXO3, modifying its transcriptional targets independently of AKT-mediated nuclear exclusion; creates a parallel longevity axis partially independent of IIS
- **[[dna-damage-response]]** — DNA damage activates ATM, which can phosphorylate and stabilize PTEN, suppressing PI3K signaling as part of the DNA damage response

## Limitations and gaps

- **#gap/needs-human-replication** — All lifespan-extension evidence from PI3K-AKT pathway reduction is from model organisms (worms, flies, mice). Human FOXO3 GWAS associations are observational and confounded by LD structure.
- **#gap/dose-response-unclear** — Optimal level of PI3K–AKT attenuation for geroprotection is unknown; too little → no benefit; too much → insulin resistance, immune impairment, apoptosis dysregulation.
- **#gap/contradictory-evidence** — PI3K-AKT inhibition can both promote (via FOXO target genes) and reduce (via MDM2-p53 suppression removal) tumor suppression, making the net oncogenicity risk of partial inhibition for aging unclear.
- **#gap/needs-canonical-id** — Dedicated protein pages for `[[pten]]`, `[[akt]]`, `[[pdk1]]`, `[[foxo3]]`, `[[gsk3b]]`, `[[bad]]`, `[[pi3k]]` have not been seeded yet. These are implicit stubs.
- **Long-term PI3K delta isoform role** — PI3Kδ's role outside immune and preadipocyte contexts in aging is understudied. #gap/long-term-unknown

## Footnotes

[^manning2017]: doi:10.1016/j.cell.2017.04.001 · [[studies/manning-toker-2017-akt-signaling]] · review · model: human (cellular and biochemical) · Manning BD, Toker A · Cell 2017; 169(3):381–405 · 3,500+ citations; comprehensive network-level AKT review; confirms dual AKT phosphorylation (PDK1/Thr308 + mTORC2/Ser473) and three conserved FOXO3A AKT-phosphorylation sites (Thr32, Ser253, Ser315) · archive: locally downloaded

[^engelman2006]: doi:10.1038/nrg1879 · [[studies/engelman-luo-cantley-2006-pi3k-review]] · review · model: multi-organism (yeast, worm, fly, mouse, human) · Engelman JA, Luo J, Cantley LC · Nature Reviews Genetics 2006 · 3,271 citations · archive: locally downloaded

[^holzenberger2003]: doi:10.1038/nature01298 · [[studies/holzenberger-2002-igf1r-lifespan]] · in-vivo · n=65 (cohort 1: 20 Igf1r+/- + 17 WT females; 12 Igf1r+/- + 16 WT males) plus cohorts 2 and 3 for metabolic/oxidative studies · model: Mus musculus (129/Sv background, Igf1r +/−) · Holzenberger M et al. · Nature 2003 (published online Dec 2002, print 9 Jan 2003) · Igf1r+/- mice lived 26% longer overall (P<0.02, Cox); females +33% (756±46 vs 568±49 days, P<0.001 t-test); males +15.9% (679±80 vs 585±69 days, NS) · archive: locally downloaded

[^willcox2008]: doi:10.1073/pnas.0801030105 · [[studies/willcox-2008-foxo3-longevity]] · nested case-control · n=615 total (213 cases survived to ≥95y, mean attained age 97.9y; 402 controls died before age 81, mean attained age 78.5y) · model: Japanese-American men (Honolulu Heart Program / HAAS cohort, Oahu) · Willcox BJ et al. · PNAS 2008 · FOXO3A rs2802292 GG vs TT: OR=2.75 (95% CI 1.51–5.02, P=0.0007); TG vs TT: OR=1.91 (95% CI 1.34–2.72, P=0.0003); overall genotype frequency difference P=0.00009 (Pearson exact chi-sq), Bonferroni-corrected P=0.00135 · archive: locally downloaded

[^vasan2022]: doi:10.1038/s41571-022-00633-1 · [[studies/vasan-cantley-2022-pi3k-cancer]] · review · model: human (clinical + preclinical) · Vasan N, Cantley LC · Nature Reviews Clinical Oncology 2022 · 164 citations · covers PI3K inhibitor toxicity (hyperglycemia — alpelisib causes grade ≥3 hyperglycemia in ~37% of patients via on-target insulin-signaling inhibition), feedback mechanisms, and clinical trial lessons · claims verified via PMC11215755 (green OA); full PDF not locally cached
