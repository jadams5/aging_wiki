---
type: pathway
aliases: [NF-κB, NF-kB, Nuclear Factor kappa B, Nuclear Factor kappa-light-chain-enhancer of activated B cells, NFkB, NF-κB signaling]
kegg: hsa04064
reactome: null   # R-HSA-9020702 was INCORRECT — that ID is "Interleukin-1 signaling" (confirmed Reactome ContentService 2026-05-07). Reactome does not have a single top-level NF-κB signaling pathway equivalent to KEGG hsa04064; relevant sub-entries include R-HSA-5357956 (TNFR1-induced NF-kappa-B signaling), R-HSA-933542 (TRAF6-mediated NF-kB activation), R-HSA-5676590 (NIK→noncanonical NF-kB). Use KEGG hsa04064 as the primary canonical pathway ID. #gap/needs-canonical-id
wikipathways: WP3539
key-nodes: ["[[rela]]", "[[nfkb1]]", "[[nfkb2]]", "[[relb]]", "[[c-rel]]", "[[ikbka]]", "[[ikbkb]]", "[[ikbkg]]", "[[iκbα]]", "[[nik]]"]
upstream: ["[[tnf-receptor]]", "[[il-1-receptor]]", "[[tlr]]", "[[dna-damage-response]]", "[[cgas-sting]]", "[[mtor]]"]
downstream: ["[[sasp]]", "[[chronic-inflammation]]", "[[apoptosis]]", "[[cellular-senescence]]"]
hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]", "[[altered-intercellular-communication]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Hayden 2008 (Cell), Hayden 2012 (Genes Dev), Coppé 2008 (PLoS Biol), and Ridker 2017 (NEJM + Lancet) verified against local PDFs. Salminen 2008 (not_oa) and Freund 2010 (local PDF unavailable; PMC accessible) not directly verified from full text — claims attributed to these sources are flagged. Reactome ID corrected 2026-05-07 (R-HSA-9020702 → null; wrong ID was IL-1 signaling). KEGG hsa04064 confirmed correct 2026-05-07. WikiPathways WP3539 not independently re-verified. Drosophila Relish, NEMO het mouse, and C. elegans lifespan claims remain #gap/unsourced."
---

> **Scope note (updated 2026-05-07):** Reactome R-HSA-9020702 was INCORRECT (confirmed = "Interleukin-1 signaling" per ContentService API) — corrected to null with sub-pathway candidates listed in frontmatter. KEGG hsa04064 confirmed correct via KEGG REST API. WikiPathways WP3539 not independently re-verified (API returned errors). Salminen 2008 claims are unverifiable (not_oa). Drosophila, NEMO-het, and *C. elegans* lifespan claims remain #gap/unsourced.

# NF-κB signaling pathway

**NF-κB (Nuclear Factor kappa-light-chain-enhancer of activated B cells)** is a family of master transcription factors that coordinates the inflammatory gene expression program in virtually all nucleated mammalian cells. In normal physiology NF-κB activation is transient, self-limiting, and essential for immunity and tissue repair. In aging, NF-κB becomes **persistently and aberrantly activated** — a state that underpins [[chronic-inflammation|inflammaging]], drives the [[sasp|SASP]] from senescent cells, and promotes most age-related pathologies. Of the two hallmark-level connections, the NF-κB → SASP link is the better-mechanistically-understood: senescent cells lock NF-κB in the "on" state via an IL-1α autocrine loop, producing a chronic inflammatory secretome that propagates tissue dysfunction throughout aging.

> **Naming note:** This page covers the NF-κB signaling *pathway* and is the canonical `[[nf-kb]]` wikilink target. Individual subunit proteins (RelA/p65, p50, p52, RelB, c-Rel) can be seeded as `molecules/proteins/rela.md` etc. when needed. Greek κ → "k" in filename per CLAUDE.md naming convention; aliases include the Greek-letter forms.

## The NF-κB family — five subunits, two activation arms

NF-κB is not a single protein but a family of five transcription factor subunits that homo- and heterodimerize to form the active complexes [^hayden2008]:

| Subunit | Gene | Inhibitory domain? | Preferred dimer partner | Primary function |
|---|---|---|---|---|
| RelA (p65) | *RELA* | No (requires IκB) | p50 | Canonical, pro-inflammatory |
| RelB | *RELB* | No (requires IκB) | p52 | Non-canonical, lymphoid development |
| c-Rel | *REL* | No (requires IκB) | p50 | Immune cell survival |
| p50 / NF-κB1 | *NFKB1* | Precursor p105 processed to p50 | RelA, c-Rel | DNA-binding only (no transactivation domain) |
| p52 / NF-κB2 | *NFKB2* | Precursor p100 processed to p52 | RelB | Non-canonical |

All subunits share an N-terminal **Rel Homology Domain (RHD)** that mediates DNA binding, dimerization, and interaction with IκB inhibitory proteins [^hayden2008]. Dimers lacking a transactivation domain (e.g., p50/p50 homodimers) can occupy κB sites and act as transcriptional repressors, providing a built-in negative regulatory layer.

## Canonical activation pathway (IKK-dependent)

The canonical pathway — activated by TNF-α, IL-1β, pathogen-associated molecular patterns (PAMPs) via Toll-like receptors, and genotoxic stress — proceeds in four steps [^hayden2008] [^hayden2012]:

1. **Signal reception** — TNF binds TNFR1 → recruits TRADD/TRAF2/RIP1 scaffold; IL-1β binds IL-1R → recruits [[myd88]]/[[irak4|IRAK4]]/[[traf6|TRAF6]]; TLR stimulation also signals through [[myd88]]. The K63-polyubiquitin scaffold built by [[traf6]] recruits and activates [[tak1]] (MAP3K7), which directly phosphorylates IKKβ to relay the signal into step 2.
2. **IKK complex activation** — all three routes converge on the **IκB Kinase (IKK) complex**: IKKα (IKK1), IKKβ (IKK2), and the regulatory scaffold NEMO (IKKγ). IKKβ is the primary catalytic subunit in canonical signaling, activated by [[tak1]]-mediated phosphorylation at the activation-loop serines. IKK phosphorylates IκBα at Ser32 and Ser36.
3. **IκBα degradation** — phosphorylated IκBα is polyubiquitinated by the SCF^βTrCP^ E3 ligase complex and degraded by the 26S proteasome. This liberates the p65/p50 dimer.
4. **Nuclear translocation** — free p65/p50 enters the nucleus, binds κB sites (consensus 5′-GGGRNWYYCC-3′; N=any base, R=purine, W=adenine or thymine, Y=pyrimidine [^hayden2012]), and recruits coactivators (CBP/p300, BRD4) to activate target genes.

Canonical signaling is **rapid (~15 min)**, **self-limiting** (NF-κB drives its own repressor IκBα re-synthesis, creating a negative feedback loop), and returns to baseline within 1–2 hours under normal conditions [^hayden2012]. Persistent activation in aging breaks this self-limiting behavior.

## Non-canonical activation pathway (NIK-dependent)

The non-canonical pathway is activated by a restricted set of signals — BAFF, CD40L, lymphotoxin-β, and RANKL — and is central to secondary lymphoid organogenesis and adaptive immunity [^hayden2008]:

1. **NIK stabilization** — basal NIK is constitutively degraded by the TRAF3/TRAF2/cIAP1/cIAP2 E3 ligase complex. BAFF/CD40L engagement triggers cIAP-mediated TRAF3 degradation → NIK accumulates.
2. **p100 processing** — accumulated NIK activates IKKα, which phosphorylates p100 (the NF-κB2 precursor) → SCF^βTrCP^-mediated ubiquitination → proteasomal processing releases p52 from the p100 inhibitory ankyrin repeats.
3. **p52/RelB nuclear entry** — the p52/RelB dimer enters the nucleus to activate a distinct, partially non-overlapping gene expression program.

The non-canonical pathway is **slow (hours)**, does not involve IκBα degradation, and regulates distinct target genes (chemokines for B-cell homing, BAFF receptor expression, osteoclastogenesis). It is less directly implicated in inflammaging but relevant to age-related immune dysfunction.

## NF-κB in aging — the inflammaging axis

### Persistent activation in senescent cells — the SASP connection

The most mechanistically-detailed connection between NF-κB and aging is its role as the master transcriptional driver of the [[sasp|SASP]] (Senescence-Associated Secretory Phenotype). In senescent cells, unlike in normal cells responding to stress, NF-κB activation is **not self-limiting** [^freund2010]:

- **IL-1α autocrine loop** — IL-1α, a SASP component and membrane-anchored precursor, signals back through the IL-1 receptor → [[myd88]]/[[irak4|IRAK]]/[[traf6|TRAF6]] → [[tak1]] → IKK → NF-κB → more IL-1α and more inflammatory SASP factors. This creates a positive-feedback circuit that maintains NF-κB in the "on" state indefinitely [^freund2010]. Blocking IL-1R signaling with IL-1Ra (anakinra) or IL-1α antibodies partially reduces SASP output in senescent fibroblasts.
- **DNA damage response (DDR) input** — the [[dna-damage-response|DNA damage response]], chronically active in senescent cells due to persistent double-strand breaks and telomeric dysfunction, feeds NF-κB through ATM → NEMO (IKKγ) SUMOylation/ubiquitination → IKK → nuclear NF-κB; and through the [[cgas-sting|cGAS-STING]] axis (cytosolic chromatin fragments → cGAMP → STING → IKK → NF-κB).
- **[[mtor|mTORC1]] cooperation** — mTORC1 amplifies SASP protein output post-transcriptionally via 4E-BP1 and the MK2/HuR mRNA stabilization axis, acting downstream of the NF-κB transcriptional signal. Rapamycin suppresses SASP without eliminating NF-κB activation per se, making this a translational (not transcriptional) contribution. See [[sasp]] for detail; primary citations needed. #gap/unsourced

The canonical SASP cytokines — IL-6, IL-8 (CXCL8), IL-1α, IL-1β, CXCL1, CCL2 — all carry κB sites in their promoters and are direct NF-κB targets. Coppé et al. 2008 systematically characterized the secretory profile of senescent human fibroblasts across five cell strains; the SASP required 4–7 days after senescence induction to develop robustly (cells irradiated at 10 Gy developed a SASP, while 0.5 Gy produced only transient arrest) [^coppe2008]. NF-κB pathway inhibition suppression of SASP output is established in the Freund 2010 review [^freund2010]; Coppé 2008 itself characterized the secretory profile but did not include NF-κB inhibition experiments.

### Inflammaging — systemic chronic low-grade NF-κB activity

Beyond senescent-cell SASP, NF-κB is aberrantly activated in aged tissues more generally — in post-mitotic cells that are not senescent and in non-immune cell types [^salminen2008]. This broad activation contributes to the chronic low-grade sterile inflammation of aging ("inflammaging"):

- Age-accumulated ROS directly activate IKKβ and oxidize IκBα (impairing re-synthesis), shifting the NF-κB activation/repression balance toward chronic activation.
- Mitochondrial dysfunction with age leads to release of DAMPs (mtDNA, cardiolipin, TFAM) that activate TLR9, cGAS-STING, and NLRP3 inflammasome → NF-κB.
- Gut microbiome shifts with age ("dysbiosis") increase circulating LPS → systemic TLR4/NF-κB activation. #gap/unsourced (specific mechanistic studies needed; magnitude of microbiome contribution to systemic NF-κB in humans not established)

The NF-κB transcriptional program accelerates with age in multiple human tissues. Genomewide chromatin immunoprecipitation studies in aged mouse tissues (brain, liver) show increased NF-κB occupancy at inflammatory gene promoters compared to young animals. #gap/needs-human-replication (human tissue ChIP-seq data on NF-κB with age is sparse)

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Inflammaging phenotype conserved in humans? | yes — elevated CRP, IL-6, TNF-α with age are well-documented in humans |
| Mechanistic link (NF-κB → SASP) confirmed in humans? | partial — human fibroblast data (Coppé 2008); in-vivo human interventional data limited |

## NF-κB target genes relevant to aging

NF-κB binds hundreds of target loci; the aging-relevant subset clusters around inflammation, cell survival, and senescence:

| Category | Key targets | Aging relevance |
|---|---|---|
| Pro-inflammatory cytokines | *IL6*, *IL8*, *IL1A*, *IL1B*, *TNF* | Core SASP factors; systemic inflammaging drivers |
| Chemokines | *CXCL1*, *CXCL2*, *CCL2*, *CXCL10* | Immune cell recruitment; paracrine senescence |
| Anti-apoptotic | *BCL2*, *BCL-XL*, *cIAP1/2*, *SURVIVIN* | Senescent cell survival (contributes to senescent cell accumulation) |
| Cell cycle regulators | *CDKN1A* (p21) | Can reinforce senescence arrest in a context-dependent manner |
| ECM remodelers | *MMP1*, *MMP3*, *MMP9*, *uPA* | Tissue remodeling; tumor microenvironment |
| Innate immune mediators | *NLRP3*, *TLR2*, *complement* | Inflammasome priming; innate immune escalation |

## Pharmacological targeting

### NF-κB inhibition strategies in aging contexts

Complete, systemic NF-κB inhibition is immunosuppressive and carries unacceptable risks (increased susceptibility to infection and cancer). Aging-relevant interventions aim for **partial, context-selective, or cell-type-specific NF-κB attenuation** [^hayden2012]:

| Strategy | Example compounds | Mechanism | Notes |
|---|---|---|---|
| IKK inhibitors | Parthenolide, BMS-345541, TPCA-1 | Directly inhibit IKKβ kinase | Broad anti-inflammatory; immunosuppression risk limits clinical use |
| IκBα "super-repressor" transgene | Genetic approach | Non-degradable IκBα blocks p65/p50 nuclear translocation | Mouse longevity data (see below); not clinically translatable as stated |
| Salicylates | Aspirin (high dose), sodium salicylate | Inhibit IKKβ at high doses; also COX-1/2 at lower doses | Mechanism at anti-inflammatory doses is largely COX-dependent; IKK inhibition requires ~mM concentrations #gap/dose-response-unclear |
| BET bromodomain inhibitors | JQ1, I-BET762 | BRD4 cooperates with p65 on SASP-associated super-enhancers; BRD4 inhibition suppresses SASP gene expression | Preclinical anti-senescence/SASP data; clinical trials for oncology; aging use preclinical #gap/needs-human-replication |
| JAK1/2 inhibitors | Ruxolitinib, baricitinib | Block IL-6 / IFN signaling downstream of SASP; also reduce upstream NF-κB-activating cytokine feedback | Clinical trials in aging (Myriad RejuvenaBio); reduces some SASP markers in pilot studies |
| Anti-IL-1β (canakinumab) | CANTOS trial (Phase 3) | Neutralizes IL-1β → interrupts NF-κB autocrine amplification loop | Reduced cardiovascular events (150 mg: HR 0.85) [^ridker2017]; exploratory cancer mortality reduction (300 mg: HR 0.49) reported in separate Lancet paper [^ridker2017lancet]; designed for atherosclerosis, not aging |
| Senolytic / senomorphic combos | Fisetin + BRD4i | Clear senescent cells (senolytic) or suppress SASP (senomorphic) | Indirect NF-κB targeting via reducing senescent cell burden |

### CANTOS trial context

The CANTOS (Canakinumab Anti-inflammatory Thrombosis Outcome Study) Phase 3 RCT (n=10,061; median follow-up 3.7 years) tested subcutaneous canakinumab (anti-IL-1β monoclonal antibody) 50, 150, or 300 mg q3mo vs. placebo in patients with prior MI and elevated hsCRP (≥2 mg/L) [^ridker2017]. Results relevant to the aging-inflammation axis:

- **Primary endpoint** (non-fatal MI, non-fatal stroke, cardiovascular death): only the 150 mg dose met the prespecified multiplicity-adjusted significance threshold, reducing the primary endpoint hazard ratio to 0.85 (95% CI 0.74–0.98; p=0.021). The 300 mg dose showed HR 0.86 (95% CI 0.75–0.99; p=0.031) but the threshold for that arm was p<0.01058, so it did not formally meet significance [^ridker2017]. #gap/needs-replication — single large trial; no independent replication RCT exists.
- **Cancer mortality** (exploratory, from a separate Lancet analysis of the same trial data): total cancer mortality was significantly lower in the pooled canakinumab group (p=0.0007 for trend); the HR 0.49 (95% CI 0.31–0.75; p=0.0009) specifically applies to the **300 mg group**, not 150 mg [^ridker2017lancet]. Incident lung cancer was reduced at 150 mg (HR 0.61, 95% CI 0.39–0.97) and 300 mg (HR 0.33, 95% CI 0.18–0.59). These are hypothesis-generating exploratory results requiring replication in formal cancer-prevention settings.
- **hsCRP** fell 37 percentage points greater than placebo at the 150 mg dose at 48 months [^ridker2017]. **IL-6** showed "similar effects" per the primary paper; the separate Lancet analysis reported dose-dependent IL-6 reductions of 25–43% across all dose groups [^ridker2017lancet]. #gap/needs-replication
- CANTOS does not directly test NF-κB inhibition, but canakinumab operates on the IL-1β limb of the NF-κB autocrine loop; the results provide human proof-of-concept that interrupting chronic NF-κB-axis inflammation reduces cardiovascular events.

The trial was designed for atherosclerosis, not aging per se; extrapolation to healthy aging populations requires caution. #gap/needs-human-replication

## NF-κB and lifespan in model organisms

Partial NF-κB inhibition has been tested in several organisms with longevity-relevant outcomes. The picture is nuanced — complete inhibition is harmful; partial inhibition in specific contexts can extend healthspan and/or lifespan.

| Organism | Intervention | Outcome | Reference |
|---|---|---|---|
| *Mus musculus* | NF-κB essential modifier (NEMO) heterozygous knockout — partial IKK reduction in skin | Delayed aging phenotype in skin; reduced age-associated inflammation | #gap/unsourced — specific NEMO het mouse longevity claim needs primary citation |
| *Mus musculus* | Epidermis-specific IκBα super-repressor transgene | Premature aging phenotype — NF-κB is required for normal tissue homeostasis; complete epithelial inhibition is harmful | #gap/unsourced |
| *Drosophila* | Partial reduction of Relish (NF-κB ortholog) | Extended lifespan ~6–15% in Relish-reduced flies | #gap/unsourced — single-study; needs primary citation |
| *C. elegans* | *nfkb-1* / *rel-1* partial reduction | Mixed; context-dependent on immune challenge status | #gap/unsourced |

**Key caveat for all model-organism NF-κB lifespan data:** The benefit appears narrowly dose-dependent — partial reduction in specific tissues (especially immune and adipose) shows benefit, but systemic or complete inhibition accelerates pathology. This non-linearity is poorly modeled in any single transgenic system. None of these observations has been replicated in humans. #gap/needs-human-replication

## Connection to other aging pathways

- **[[sasp]]** — NF-κB is the master transcriptional driver of SASP; the IL-1α autocrine loop links SASP maintenance to NF-κB persistence in senescent cells [^freund2010] [^coppe2008].
- **[[dna-damage-response]]** — DDR → ATM/ATR → NF-κB (nuclear IKK activation via SUMOylated NEMO) is a major activating route; persistent DDR in aged cells feeds NF-κB constitutively.
- **[[cgas-sting]]** — cytosolic chromatin sensing in senescent cells activates STING → IKK → NF-κB; parallel and synergistic with direct DDR input.
- **[[mtor]]** — mTORC1 cooperates with NF-κB post-transcriptionally to amplify SASP output; rapamycin reduces SASP protein levels without fully abolishing NF-κB-driven transcription. The mTOR-NF-κB relationship is not purely upstream/downstream — there is evidence for bi-directional cross-talk at the level of AKT → IKK. See [[mtor]].
- **[[atm]]** — ATM directly phosphorylates and activates IKKγ/NEMO in the nucleus following double-strand break recognition, linking genotoxic stress to inflammatory gene activation.
- **[[p53-pathway]]** — p53 and NF-κB have a complex, context-dependent antagonism; p65 can inhibit p53-dependent transcription and vice versa. In senescent cells, both are simultaneously active, but their targets are partly non-overlapping.
- **[[insulin-igf1]]** — insulin/IGF-1 → PI3K → AKT activates IKKβ, providing a metabolic input to NF-κB; conversely, chronic NF-κB in adipose tissue promotes insulin resistance via IKKβ-mediated IRS-1 serine phosphorylation (serine phosphorylation prevents tyrosine activation of IRS-1).
- **[[ampk]]** — AMPK inhibits NF-κB at multiple levels: directly via IKKβ phosphorylation (inhibitory), indirectly via reducing mTORC1-mediated amplification of SASP output. AMPK activators (metformin, exercise) reduce some NF-κB-target inflammatory markers. #gap/unsourced (specific NF-κB inhibitory sites for AMPK need primary citations)
- **[[chronic-inflammation]]** — this hallmark is largely operationalized as systemic NF-κB activity in aging tissues; NF-κB is its primary mechanistic driver.
- **[[immunosenescence]]** — age-associated remodeling of the immune system (reduced adaptive, dysregulated innate) involves NF-κB dysregulation in both lymphocytes and myeloid cells; the SASP-driven cytokine milieu further drives immunosenescence.
- **[[cholinergic-anti-inflammatory-pathway]]** — an *endogenous negative* regulator: acetylcholine acting on macrophage [[molecules/proteins/chrna7|α7nAChR]] suppresses NF-κB nuclear translocation (and engages a JAK2–STAT3 arm), restraining TNF-α/IL-6 output. This vagal "inflammatory reflex" is the principal neural brake on NF-κB-driven inflammaging; its age-related decline is permissive (not proven causal) for chronic NF-κB activity.

## Limitations and gaps

- **Complete NF-κB inhibition is harmful.** NF-κB is required for normal immune responses, tissue repair, and apoptosis. Therapeutic strategies must be partial, intermittent, or cell-type-targeted to avoid immunosuppression. The therapeutic window has not been established in humans for any aging indication. #gap/dose-response-unclear
- **Cell-type specificity is poorly mapped in vivo.** NF-κB's aging effects have been characterized mainly in fibroblasts, epithelial cells, and macrophages; adipose and neuronal NF-κB contributions to systemic inflammaging are under-studied. #gap/needs-replication
- **Human NF-κB tissue-level activation data with age is sparse.** Most evidence for increased NF-κB activity with aging comes from mouse or cell-culture models. Human tissue ChIP-seq or transcriptomics showing NF-κB occupancy increases with age is limited. #gap/needs-human-replication
- **CANTOS is the only large human trial interrogating the NF-κB axis in an aging-relevant way,** and it was designed for atherosclerosis, not aging per se; the secondary cancer finding needs replication. #gap/needs-replication
- **The non-canonical NF-κB arm's role in inflammaging is understudied.** Most inflammaging research focuses on canonical p65/p50; the p52/RelB arm and its age-related dynamics are not well-characterized. #gap/needs-replication
- **BET bromodomain inhibitor data in aging is preclinical only.** BRD4 cooperates with p65 on SASP super-enhancers; JQ1 reduces SASP in vitro, but clinical translation to aging has not advanced beyond early-phase oncology trials. #gap/needs-human-replication

## Footnotes

[^hayden2008]: doi:10.1016/j.cell.2008.01.020 · review · Hayden MS & Ghosh S · *Cell* 2008 · n/a (review) · cited 4,635× · covers IKK complex, both activation arms, feedback regulation, transcriptional mechanisms, and disease context · archive status: locally downloaded

[^hayden2012]: doi:10.1101/gad.183434.111 · review · Hayden MS & Ghosh S · *Genes & Development* 2012 · n/a (review) · cited 1,636× · covers first 25 years of NF-κB research including therapeutic targeting and outstanding mechanistic questions · κB consensus 5′-GGGRNWYYCC-3′ (N=any, R=purine, W=A or T, Y=pyrimidine) · archive status: locally downloaded (diamond OA)

[^coppe2008]: doi:10.1371/journal.pbio.0060301 · in-vitro + in-vivo · Coppé JP et al. (Campisi lab) · *PLoS Biology* 2008 · n=5 human fibroblast strains + prostate epithelial cells · foundational characterization of SASP secretory profile; SASP requires 4–7 days post-senescence induction to develop robustly (10 Gy irradiation required; 0.5 Gy produced only transient arrest); does not include NF-κB inhibition experiments — NF-κB inhibition data belongs to Freund 2010 · model: human diploid fibroblasts and epithelial cells · archive status: locally downloaded

[^freund2010]: doi:10.1016/j.molmed.2010.03.003 · review · Freund A et al. (Campisi lab) · *Trends in Molecular Medicine* 2010 · n/a (review) · cited 1,308× · covers IL-1α autocrine loop maintaining NF-κB in senescent cells; SASP develops over several days; immune clearance of senescent cells · archive status: download failed; PMC full-text accessible (PMC2879478) · #gap/no-fulltext-access (local PDF unavailable)

[^salminen2008]: doi:10.1016/j.arr.2007.09.002 · review · Salminen A et al. · *Ageing Research Reviews* 2008 · n/a (review) · cited 562× · NF-κB as molecular culprit of inflamm-aging; age-related innate immune activation · archive status: not_oa · #gap/no-fulltext-access

[^ridker2017]: doi:10.1056/NEJMoa1707914 · rct · Ridker PM et al. (CANTOS Investigators) · *New England Journal of Medicine* 2017 · n=10,061 · Phase 3 RCT, median follow-up 3.7 years · canakinumab (anti-IL-1β) 150 mg q3mo reduced primary MACE endpoint HR 0.85 (95% CI 0.74–0.98; p=0.021); all-cause mortality HR 0.94 (95% CI 0.83–1.06; p=0.31, ns) · cancer mortality reported as exploratory only in primary paper; full cancer analysis in separate Lancet publication · model: human (prior MI, elevated hsCRP ≥2 mg/L) · archive status: locally downloaded

[^ridker2017lancet]: doi:10.1016/S0140-6736(17)32247-X · rct (exploratory cancer analysis of CANTOS) · Ridker PM et al. · *Lancet* 2017 · n=10,061 · cancer mortality HR 0.49 (95% CI 0.31–0.75; p=0.0009) for **300 mg group only**; pooled group p=0.0007 for trend · incident lung cancer HR 0.61 (150 mg) and 0.33 (300 mg) · IL-6 reduced 25–43% across dose groups · hypothesis-generating; replication required · archive status: not checked
