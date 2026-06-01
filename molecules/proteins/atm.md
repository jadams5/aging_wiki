---
type: protein
aliases: [ATM kinase, ATM_HUMAN, "Ataxia-Telangiectasia Mutated", A-T mutated]
uniprot: Q13315
ncbi-gene: 472
hgnc: 795
mouse-ortholog: Atm
ensembl: ENSG00000149311
druggability-tier: 2
caused-by: []
causes: []
key-domains: [HEAT-repeats, FAT, PI3K-like-kinase, FATC]
key-ptms: [Ser1981-autophosphorylation, Ser367-autophosphorylation, Ser1893-autophosphorylation, Lys3016-acetylation]
pathways: ["[[dna-damage-response]]", "[[p53-pathway]]", "[[cell-cycle-checkpoint]]"]
hallmarks: ["[[genomic-instability]]", "[[cellular-senescence]]"]
known-interactors: ["[[p53]]", "[[mdm2]]", "[[brca1]]", "[[nbs1]]", "[[chk2]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Bakkenist 2003 (10.1038/nature01368) and Rodier 2009 (10.1038/ncb1909) verified against local PDFs. Shiloh 2013 (10.1038/nrm3546), Savitsky 1995 (10.1126/science.7792600), and Matsuoka 2007 (10.1126/science.1140321) are closed-access (not_oa); verified by Crossref abstract/metadata only — quantitative claims sourced solely to these three papers remain unconfirmed against full text. Domain ranges cross-checked against UniProt Q13315 REST API (FAT, kinase, FATC confirmed; HEAT repeats not annotated by UniProt — wiki range inferred from FAT domain start)."
---


# ATM (Ataxia-Telangiectasia Mutated kinase)

The master sensor kinase for DNA double-strand breaks (DSBs) — a 3,056-amino-acid serine/threonine kinase of the PIKK (PI3K-like kinase) superfamily that phosphorylates >700 substrates to coordinate the entire DNA damage response (DDR). Biallelic loss-of-function mutations cause **ataxia-telangiectasia (AT)**, a progeroid syndrome with cerebellar degeneration, immunodeficiency, radiosensitivity, cancer predisposition, and multiple accelerated-aging features. ATM is a direct mechanistic bridge between [[genomic-instability]] accumulation and [[cellular-senescence]] induction via the SASP.

## Identity

- **UniProt:** Q13315 (ATM_HUMAN) — Swiss-Prot (manually curated)
- **NCBI Gene:** 472
- **HGNC symbol:** ATM (HGNC: 795)
- **Ensembl:** ENSG00000149311
- **Mouse ortholog:** Atm (one-to-one ortholog; functionally conserved)
- **Length:** 3,056 amino acids (~370 kDa)
- **Chromosome:** 11q22.3

## Key functional domains

ATM's domain architecture is conserved across PIKK family members (mTOR, ATR, DNA-PKcs, TRRAP):

- **N-terminal HEAT repeats** (residues ~1–1939) — ~40 tandem HEAT (Huntingtin, Elongation factor 3, PR65/A, TOR) repeats forming a large curved solenoid scaffold that mediates protein-protein interactions, particularly with the MRN complex (MRE11-RAD50-NBS1)
- **FAT domain** (residues 1940–2566) — Found in FRAP, ATM, TRRAP; wraps back around the kinase domain and is required for full activation
- **PI3K/PI4K catalytic (kinase) domain** (residues 2686–2998) — Serine/threonine kinase; recognizes the consensus [S/T]-Q motif on substrates; structurally similar to lipid PI3-kinases but acts exclusively on protein substrates
- **FATC domain** (residues 3024–3056) — ~30-residue C-terminal domain common to all PIKKs; required for kinase activity; acetylation of Lys3016 by TIP60/KAT5 within this region is a prerequisite for full ATM activation

## Activation mechanism

Under non-stressed conditions, ATM exists as an **inactive dimer or higher-order multimer** in the nucleus; the Ser1981-containing region (in the FAT domain) interacts with the kinase domain of the opposing monomer, keeping it inactive [^bakkenist2003].

Upon DSB induction, activation proceeds in two coordinated steps:

1. **MRN complex recruitment** — MRE11-RAD50-NBS1 (MRN) binds DSB ends and directly contacts ATM's HEAT repeat scaffold via NBS1's C-terminus, tethering ATM to the break site.
2. **Autophosphorylation and dimer dissociation** — ATM undergoes *intermolecular* autophosphorylation at **Ser1981** (within the FAT domain), which is sufficient and required for dimer dissociation into catalytically active monomers [^bakkenist2003]. Additional autophosphorylation at Ser367 and Ser1893 follows. TIP60/KAT5 acetylation of Lys3016 also contributes to full activation by stabilizing the active conformation.

Active monomeric ATM then spreads along the chromatin flanking the break (anchored partly via γH2AX-MDC1 scaffolding) and phosphorylates hundreds of substrates bearing the [S/T]-Q consensus. Dephosphorylation at Ser1981 by phosphatases (including PP2A family members) terminates the DDR signal during late-stage repair.

A cytoplasmic pool of ATM also exists — it responds to oxidative stress (ROS) and translocates to peroxisomes via PEX5, suggesting DDR-independent functions [^shiloh2013].

## Key substrates

ATM phosphorylates >700 proteins at [S/T]-Q sites [^matsuoka2007]. The aging-relevant major substrates:

| Substrate | Site | Immediate consequence | Downstream outcome |
|---|---|---|---|
| [[p53]] | Ser15 | Disrupts MDM2 binding; stabilizes p53 | Cell cycle arrest, senescence, apoptosis |
| [[mdm2]] | Ser395 | Disrupts MDM2–p53 interaction independently | Reinforces p53 stabilization |
| CHK2 | Thr68 | CHK2 autophosphorylation and activation | G1/S and G2/M checkpoint enforcement |
| H2AX | Ser139 (→ γH2AX) | Histone mark; MDC1 scaffold recruitment | DSB repair complex assembly |
| BRCA1 | Ser1387, Ser1524 | BRCA1 activation | HR pathway engagement |
| NBS1 | Ser343 | NBS1 modification; amplifies MRN signal | Sustained ATM retention at DSBs |
| SMC1 | Ser957, Ser966 | SMC1 (cohesin) modification | S-phase checkpoint, sister chromatid cohesion |

The p53 Ser15 phosphorylation is particularly relevant to aging: it stabilizes p53 and licenses it to induce [[cellular-senescence|senescence]] programs and, via transcriptional activation of SASP-driving genes, contribute to chronic tissue inflammation [^rodier2009].

## Pathway membership

- **[[dna-damage-response]]** — ATM is the apical kinase of the DSB-response branch; ATR handles single-stranded breaks / replication stress
- **[[p53-pathway]]** — ATM→p53(Ser15) + ATM→MDM2(Ser395) are the canonical DDR→p53 activation routes
- [[cell-cycle-checkpoint]] — via CHK2 (G1/S and G2/M) and directly via CDC25A/B/C phosphorylation
- [[cellular-senescence]] — persistent ATM signaling (unable to be resolved by repair) converts transient arrest into permanent senescence and SASP induction

## Role in aging

### Ataxia-telangiectasia: a progeroid syndrome

Biallelic loss-of-function ATM mutations (autosomal recessive; ~1/100,000 births) cause AT, a multi-system progeroid syndrome [^savitsky1995]:

- **Cerebellar ataxia** — progressive Purkinje cell degeneration; onset in infancy; wheelchair-bound by adolescence
- **Telangiectasias** — conjunctival and facial vascular dilation
- **Immunodeficiency** — thymic hypoplasia, low IgA/IgE; recurrent respiratory infections
- **Radiosensitivity** — >1000-fold increased sensitivity to ionizing radiation
- **Cancer predisposition** — ~30% develop malignancies (predominantly lymphomas/leukemias)
- **Accelerated aging features** — premature graying, endocrine abnormalities, insulin resistance, accelerated telomere shortening
- **Lifespan:** median survival ~25 years (primarily from cancer and respiratory infection) — figure cited from Shiloh & Ziv 2013 review (closed-access; not verified against full text) #gap/no-fulltext-access

The progeroid features of AT — occurring in the absence of ATM-mediated DSB repair — directly illustrate how **unresolved genomic instability drives systemic aging**.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | ATM gene, PIKK structure, and [S/T]-Q phosphorylation are conserved across vertebrates; Atm-knockout mice phenocopy AT |
| Phenotype (progeroid) in humans? | yes | Human AT patients are the disease model; not extrapolation |
| Mechanism (DSB → aging) in humans? | yes (genetics) | Biallelic ATM loss = AT; heterozygotes show intermediate phenotypes |

### AT heterozygotes and population-level aging risk

ATM heterozygotes (~1% of the general population) have a ~2–4-fold elevated breast cancer risk — the best-established intermediate phenotype [^shiloh2013]. (Prevalence and risk figures cited from Shiloh & Ziv 2013 review; full PDF closed-access.) #gap/no-fulltext-access Epidemiological signals of accelerated aging in ATM carriers exist but are weaker and inconsistent. #gap/needs-replication

### Progressive ATM activity decline with age

ATM signaling efficiency appears to decline with aging in multiple tissues, contributing to impaired DSB repair and the accumulation of [[genomic-instability]] observed in aged cells. The mechanism is not fully established — candidate explanations include reduced ATM expression, chromatin remodeling reducing accessibility, and altered MRN complex dynamics. #gap/no-mechanism #gap/needs-human-replication

### ATM is required for the inflammatory subset of SASP: the DDR→senescence→inflammation axis

A critical aging-biology function of ATM is its requirement for the major inflammatory components of the **senescence-associated secretory phenotype (SASP)** — specifically the pro-inflammatory cytokines IL-6 and IL-8, but not all SASP factors [^rodier2009]. Key findings:

- ATM depletion (shRNA) in genotoxin-induced senescent cells suppresses a **subset** of SASP factors — IL-6 secretion is reduced ~50-fold and IL-8 ~10-fold — without reversing cell-cycle arrest; nine other SASP factors are ATM-independent [^rodier2009] #gap/needs-replication
- This positions ATM upstream of NF-κB activation in the chronic DDR→SASP axis
- Implication for aging: tissue-resident senescent cells accumulating with age require sustained ATM activity to maintain their pro-inflammatory secretome, making ATM a potential indirect driver of **inflammaging** and paracrine senescence propagation

| Dimension | Status | Notes |
|---|---|---|
| DDR→SASP mechanism in humans? | partial | SASP observed in human senescent cells; ATM requirement shown in culture; in-vivo human validation lacking |
| Replicated? | partial | Multiple labs confirmed SASP-DDR coupling; ATM-specific requirement needs more replication |
| Relevant to in-vivo aging? | unknown | #gap/needs-human-replication |

## Pharmacology

### ATM inhibitors (research tools and oncology investigationals)

| Compound | Class | Status | Notes |
|---|---|---|---|
| KU-55933 | ATP-competitive small molecule | Research tool | First selective ATM inhibitor; poor in-vivo pharmacokinetics |
| KU-60019 | Improved KU-55933 analog | Research tool | Better CNS penetration; used in radiosensitization studies |
| AZD0156 | Clinical-stage ATM inhibitor | Phase I (oncology) | AstraZeneca; combined with olaparib or irinotecan in HR-deficient tumors |
| M3541 | Clinical-stage ATM inhibitor | Phase I (oncology) | Merck KGaA; radiosensitizer |

**Aging relevance of ATM inhibitors:** In the aging context, ATM inhibition is primarily studied as a tool to dissect the DDR→SASP axis, not as a therapeutic strategy. Inhibiting ATM in aged organisms would be expected to worsen genomic instability and accelerate AT-like pathology. There is no aging-relevant ATM-activating clinical drug. #gap/unsourced — the therapeutic hypothesis of partial ATM modulation in aging remains speculative.

**Note:** The conceptual target for aging intervention may be *downstream* of ATM (e.g., SASP mediators such as NF-κB, or senolytic clearance of SASP-secreting cells) rather than ATM itself.

## Limitations and extrapolation gaps

| Gap | Tag | Notes |
|---|---|---|
| In-vivo human data on ATM activity decline with age | #gap/needs-human-replication | Most evidence is from cell culture or AT patient tissue |
| ATM-specific requirement for inflammatory SASP in vivo | #gap/needs-replication | Rodier 2009 showed ATM depletion reduces IL-6 ~50-fold and IL-8 ~10-fold in culture (HCA2 fibroblasts); nine of 16 surveyed SASP factors were ATM-independent; in-vivo genetic confirmation in animals or humans lacking |
| AT heterozygote aging phenotypes | #gap/needs-replication | Epidemiological data conflicting |
| ATM function in aging beyond DDR | #gap/no-mechanism | Cytoplasmic/peroxisomal ATM roles in ROS sensing are poorly characterized in aging context |
| Therapeutic window for ATM modulation in aging | #gap/unsourced | No preclinical aging-extension data |

## Footnotes

[^bakkenist2003]: doi:10.1038/nature01368 · Bakkenist & Kastan 2003 · in-vitro + in-vivo · model: human cells (IR-treated) · discovery of Ser1981 autophosphorylation and dimer→monomer activation mechanism · n=3394 citations (Nature)

[^shiloh2013]: doi:10.1038/nrm3546 · Shiloh & Ziv 2013 · review · "The ATM protein kinase: regulating the cellular response to genotoxic stress, and more" · Nat Rev Mol Cell Biol · comprehensive review of ATM biology and AT · PDF not available (not_oa per a local paper archive); quantitative claims (lifespan ~25 y, heterozygote prevalence ~1%, breast cancer risk ~2–4-fold) not verified against full text #gap/no-fulltext-access

[^savitsky1995]: doi:10.1126/science.7792600 · Savitsky et al. 1995 · discovery paper · "A Single Ataxia Telangiectasia Gene with a Product Similar to PI-3 Kinase" · Science · original cloning of ATM gene; identified on chromosome 11q22-23 (modern annotation: 11q22.3) · PDF not available (not_oa per a local paper archive); verified via Crossref abstract #gap/no-fulltext-access

[^rodier2009]: doi:10.1038/ncb1909 · Rodier et al. 2009 · in-vitro · model: human HCA2 foreskin fibroblasts (primary); WI-38 fibroblasts (secondary) · "Persistent DNA damage signalling triggers senescence-associated inflammatory cytokine secretion" · Nat Cell Biol · ATM depletion (80–90%) reduced IL-6 ~50-fold and IL-8 ~10-fold in senescent cells; ATM required for a subset of SASP factors (major inflammatory cytokines) but not all 16 factors surveyed; DDR-independent senescence (p16^INK4a) does not trigger the cytokine response

[^matsuoka2007]: doi:10.1126/science.1140321 · Matsuoka et al. 2007 · in-vitro + phosphoproteomics · model: human cells (IR-treated) · "ATM and ATR Substrate Analysis Reveals Extensive Protein Networks Responsive to DNA Damage" · Science · identified >900 regulated phosphorylation sites across >700 ATM/ATR substrate proteins (abstract-confirmed via Crossref) · PDF not available (not_oa per a local paper archive); individual substrate sites (p53 Ser15, MDM2 Ser395, CHK2 Thr68, H2AX Ser139) not verified against full text #gap/no-fulltext-access
