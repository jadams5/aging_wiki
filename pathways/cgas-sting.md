---
type: pathway
aliases: [cGAS-STING, cyclic GMP-AMP synthase – stimulator of interferon genes, DNA-sensing pathway, innate DNA-sensing pathway]
kegg: hsa04623
reactome: R-HSA-1834949
wikipathways: null
key-nodes: ["[[cgas]]", "[[sting]]", "[[tbk1]]", "[[irf3]]", "[[nf-kb]]"]
upstream: ["cytosolic dsDNA (microbial)", "[[mitochondrial-dysfunction]]", "[[cellular-senescence]]"]
downstream: ["[[chronic-inflammation]]", "[[cellular-senescence]]"]
hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]"]
sens-categories: []
druggability-tier: null
caused-by: ["[[mitochondrial-dysfunction]]", "[[cellular-senescence]]", "cytosolic dsDNA (microbial/viral)"]
causes: ["[[chronic-inflammation]]", "[[cellular-senescence]]", "HR-suppression (nuclear arm — WT mammalian cGAS at chromatin)", "HR-potentiation (nuclear arm — NMR-divergent cGAS; [[studies/chen-2025-nmr-cgas-hr-repair]])"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Sun 2013, Ishikawa 2008, Glück 2017, Yang 2017 verified against primary source PDFs. Wu 2013 (2'3'-cGAMP linkage) remains closed-access (not_oa) — biochemical details for that paper unverified. WikiPathways ID not independently confirmed. Chen 2025 nuclear/HR arm section added 2026-05-12 from abstract only (#gap/no-fulltext-access); cGAS-canonical-cytosolic-arm content is unchanged. De Cecco 2019 LINE-1 DOI resolved 2026-05-12."
---

# cGAS-STING innate DNA-sensing pathway

The **cGAS-STING pathway** is a cytosolic innate immune sensing circuit that detects double-stranded DNA (dsDNA) in the cytoplasm — normally a danger signal indicating microbial invasion, mitochondrial damage, or genomic instability — and converts that signal into a type I interferon (IFN-I) and pro-inflammatory cytokine response. In the context of aging, chronic low-level activation of cGAS-STING by self-derived DNA (leaked mitochondrial DNA, cytosolic chromatin fragments from senescent cells, reverse-transcribed retrotransposon cDNA) drives [[chronic-inflammation|inflammaging]] and amplifies the [[cellular-senescence|senescent cell secretory phenotype (SASP)]].

**Dual-role note:** In addition to its canonical cytosolic sensing function, nuclear-localized cGAS has a distinct chromatin-associated role: in WT mammalian cells it suppresses [[homologous-recombination]] (HR) repair at double-strand breaks (Liu et al. 2018 [^liu2018]), while in the naked mole-rat ([[heterocephalus-glaber]]) a four–amino acid divergence converts nuclear cGAS from an HR suppressor into an HR potentiator — a mechanism linked to the NMR's extended healthspan (Chen et al. 2025 [^chen2025]). See the dedicated section below.

> **Naming note:** This page is the canonical `[[cgas-sting]]` target and covers the pathway. Individual protein pages: `[[cgas]]` (seeded), `[[sting]]` (seeded), `[[tbk1]]` (verified-partial), `[[trim41]]` (seeded), `[[vcp]]` (seeded). `[[irf3]]` and `[[nf-kb]]` are existing pages.

## Discovery

The molecular components of this pathway were identified between 2008 and 2013:

- **STING** (Stimulator of Interferon Genes; also TMEM173/MITA/MPYS) — identified as an ER-resident adaptor required for innate immune signaling to cytosolic DNA [^ishikawa2008]. The paper showed STING-knockout cells failed to mount IFN-I responses to intracellular pathogens.
- **cGAMP** — 2'3'-cyclic GMP-AMP — identified as the endogenous second messenger linking cytosolic DNA sensing to STING activation [^wu2013]. #gap/no-fulltext-access — Wu 2013 is closed-access; DOI lookup status: not_oa.
- **cGAS** (cyclic GMP-AMP synthase) — identified as the cytosolic dsDNA sensor that catalyzes cGAMP synthesis [^sun2013]. The paper demonstrated cGAS binds dsDNA directly and that cGAMP activates STING downstream.

## Pathway architecture

### Signal input: cytosolic dsDNA

cGAS surveys the cytoplasm for dsDNA. Under homeostatic conditions, cytosolic dsDNA is absent. Danger signals include:

| Source | Context |
|---|---|
| Microbial DNA (viral, bacterial) | Infection |
| Mitochondrial DNA (mtDNA) leak | Mitochondrial damage, MOMP, [[mitochondrial-dysfunction]] |
| Cytosolic chromatin fragments (CCFs) | DNA damage, senescent cells |
| Micronuclei rupture | Chromosome mis-segregation, replication stress |
| LINE-1 reverse-transcribed cDNA | Retrotransposon reactivation in aging |

cGAS does not discriminate between self and non-self dsDNA — its specificity is strictly subcellular: dsDNA in the cytoplasm is the trigger regardless of origin [^sun2013].

### Step 1: cGAS — cytosolic DNA sensor and cGAMP synthase

**[[cgas]]** is a nucleotidyltransferase that binds dsDNA cooperatively, requiring a minimum of ~20 bp for activation. dsDNA binding triggers a conformational change that repositions the active site to catalyze the cyclization of ATP and GTP into **2'3'-cGAMP** (cyclic GMP-AMP with a non-canonical 2'–5' and 3'–5' phosphodiester linkage) [^wu2013].

Key biochemical features:
- cGAS binds DNA in a sequence-independent but length-dependent manner (longer dsDNA = stronger activation)
- The catalytic product 2'3'-cGAMP has higher STING affinity than the bacterial cyclic dinucleotides (c-di-GMP, c-di-AMP) that originally led to STING's discovery
- cGAS is constitutively expressed in many cell types; in nondividing (non-proliferating) cells cGAS is predominantly cytoplasmic; in proliferating cells it can enter the nucleus and associate with chromatin during mitosis [^yang2017] — activity is therefore gated by subcellular localization but the directionality is cytoplasm-to-nucleus during division, not constitutive nuclear exclusion

### Step 2: STING — ER-resident second messenger receptor

**[[sting]]** is a five-pass transmembrane protein resident on the endoplasmic reticulum (ER) [^ishikawa2008]. The cytosolic C-terminal domain contains the cGAMP-binding site (CDN-binding domain, CBD). cGAMP binding drives STING dimerization and conformational change that enables downstream kinase recruitment [^ishikawa2008].

After ligand binding, STING undergoes regulated trafficking (details from post-2008 structural and cell biological studies; not established in Ishikawa 2008):

1. **ER → ERGIC** (ER-Golgi intermediate compartment) — STING palmitoylation and translocation; this is the site of TBK1 recruitment #gap/unsourced — cite Shang 2019 / Ergun 2019 for ERGIC trafficking details
2. **ERGIC → Golgi** — STING phosphorylation by TBK1 at Ser366 (human; Ser365 in mouse) creates a docking site for IRF3 #gap/unsourced — TBK1 Ser366 phosphorylation site established post-2008; cite relevant structural paper
3. **Post-Golgi → lysosomes** — STING is degraded to terminate signaling; palmitoylation cycling controls duration #gap/unsourced

### Step 3: TBK1 — the signal amplifier kinase

**[[tbk1]]** (verified-partial page) is recruited to the STING signaling complex at the ERGIC. TBK1 phosphorylates two downstream transcription factors:

- **IRF3** (Ser396 in human) — [[irf3]] dimerizes, translocates to nucleus → transcribes *IFNB1* (IFN-β) and other IFN-stimulated genes (ISGs)
- **Indirect NF-κB activation** — TBK1 promotes IκB degradation, enabling **[[nf-kb]]** p65/p50 heterodimer nuclear translocation → pro-inflammatory cytokines (IL-6, TNF-α, IL-1β, CXCL10)

The two arms produce distinct outputs: the IRF3 arm drives IFN-I (antiviral); the NF-κB arm drives inflammatory cytokines (relevant to SASP and inflammaging).

### Output: type I interferon + inflammatory cytokines

| Output | Arm | Key genes |
|---|---|---|
| Type I interferons | IRF3 | *IFNB1*, *IFNA* family |
| Pro-inflammatory cytokines | NF-κB | *IL6*, *TNF*, *CXCL10*, *IL1B* |
| Interferon-stimulated genes | IRF3/STAT1 (secondary) | *MX1*, *OAS1*, *ISG15* |

## Aging relevance

### cGAS-STING as a driver of inflammaging

Chronic activation of cGAS-STING by self-DNA accumulating with age is a mechanistic bridge between the [[mitochondrial-dysfunction]] and [[chronic-inflammation]] hallmarks. Yang et al. 2017 demonstrated that cGAS is required for cellular senescence: cGAS−/− MEFs (C57BL/6) and cGAS−/− BJ human fibroblasts show blunted senescence-associated gene expression (IL6, IL8, IL1β, MMP12) and reduced SA-β-Gal activity in response to etoposide, irradiation (3 Gy X-ray), and spontaneous immortalization [^yang2017]. The paper does NOT demonstrate cGAS-STING activation in naturally aged tissues — senescence is studied in cell-damage models only. Low cGAS expression in human lung adenocarcinoma patients correlates with poor survival (Kaplan-Meier, log-rank p=5e-05, HR=1.82 [1.4–2.5], n=451 low vs n=222 high).

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — cGAS and STING are expressed and functional in human cells |
| Aging activation in humans? | partial — indirect evidence from plasma IFN-I signatures; direct tissue cGAS-STING activation data limited |
| Causal in human inflammaging? | unknown — genetic studies in progress; no interventional human data |

### cGAS-STING in senescent cell SASP

Cytosolic chromatin fragments (CCFs) accumulate in senescent cells, arising from nuclear envelope breakdown, micronuclei rupture, and lamin B1 loss. Glück et al. 2017 showed that cGAS senses CCFs arising from lamin B1 degradation in senescent cells, activating cGAS-STING → SASP cytokines (IL-6, TNF-α, Cxcl10/CXCL10) and type I IFN signaling [^gluck2017]. Diverse senescence triggers were tested: oxidative stress (40% O₂), irradiation (12 Gy), oncogene signaling (HRasV12), and palbociclib (CDK4 inhibitor). In vivo confirmation used mouse irradiation and NrasG12V oncogene-induced senescence (liver). This creates a feed-forward loop: DNA damage → senescence → lamin B1 loss → CCF leakage → cGAS-STING → SASP → paracrine senescence in neighboring cells.

| Dimension | Status |
|---|---|
| Demonstrated in human senescent cells? | yes — WI-38 human lung fibroblasts (Glück 2017); IMR90 is from Dou et al. 2017, a separate companion paper |
| In vivo confirmation in aged animals? | partial — mouse aging models; human in vivo data limited |
| Replicated in humans in vivo? | no #gap/needs-human-replication |

### mtDNA leak as upstream trigger

Damaged or dysfunctional mitochondria — especially those undergoing mitochondrial outer membrane permeabilization (MOMP) without full apoptotic commitment — release mtDNA into the cytosol. Because mtDNA is a circular dsDNA molecule with bacterial-type sequence features, it is an efficient cGAS activator. This mechanistically links the [[mitochondrial-dysfunction]] hallmark to innate immune activation. #gap/unsourced — direct in-vivo demonstration of mtDNA-driven cGAS-STING in human aged tissue is not yet cited here; see [[mitochondrial-dysfunction]] for the broader mechanistic context.

### Retrotransposon cDNA

LINE-1 (L1) retrotransposons are derepressed with aging due to epigenetic changes ([[epigenetic-alterations]] hallmark). LINE-1 elements reverse-transcribe their own RNA into cytosolic cDNA, which can activate cGAS. De Cecco et al. 2019 demonstrated in senescent human cells and in naturally aged mouse tissues that LINE-1 derepression drives IFN-I signaling, and that reverse-transcriptase inhibitors (NRTIs — lamivudine, stavudine) suppress this IFN signature and extend mouse healthspan [^dececco2019]. This creates a mechanistic link between the [[epigenetic-alterations]] hallmark and innate immune activation. #gap/needs-replication — full human aging in-vivo LINE-1-driven cGAS-STING data beyond cell and mouse models remain limited as of 2026.

## Nuclear cGAS: dual-role at chromatin — HR suppression (WT) and HR potentiation (NMR)

> **Source discipline note:** Liu 2018 is closed-access (#gap/no-fulltext-access). Chen 2025 is closed-access (#gap/no-fulltext-access). All claims in this section are sourced from the abstract of Chen 2025 and from training-knowledge summary of Liu 2018's abstract/conclusion; neither has been verified against the full PDF. Per-claim gap tags are applied.

Beyond its cytosolic sensing function, a nuclear pool of cGAS associates with chromatin and exerts a biologically distinct — and aging-relevant — effect on [[homologous-recombination]] (HR) DNA repair at double-strand breaks (DSBs).

### The WT mammalian nuclear arm: HR suppression

Liu et al. 2018 established that nuclear cGAS in human and mouse cells physically suppresses HR repair, promoting genomic instability and tumorigenesis [^liu2018] #gap/no-fulltext-access. The proposed mechanism is that chromatin-bound cGAS obstructs the assembly of HR repair complexes at DSB sites. Because HR is the high-fidelity repair mode for DSBs (operating in S/G2 phase), cGAS-mediated HR suppression biases repair toward more error-prone pathways (NHEJ, MMEJ), which accumulates mutations over time and could accelerate the [[genomic-instability]] hallmark.

### The NMR divergent arm: HR potentiation via four amino acid changes

Chen et al. 2025 (*Science*, doi:10.1126/science.adp5056) extended this framework using the naked mole-rat ([[heterocephalus-glaber]]) as a natural comparative-biology experiment [^chen2025] #gap/no-fulltext-access. Key claims (abstract-derived):

- **NMR cGAS lacks the HR-suppressive function** of its human and mouse orthologs. The functional divergence maps to **four amino acid substitutions** that arose during NMR evolution.
- The four-AA changes **weaken [[trim41]]-mediated ubiquitination** of NMR cGAS. Because ubiquitination normally triggers chromatin eviction by the segregase **[[vcp|P97/VCP]]**, impaired ubiquitination → impaired P97 engagement → **prolonged chromatin retention** of NMR cGAS at DSBs.
- Prolonged chromatin retention of NMR cGAS **enhances interaction between FANCI and RAD50**, facilitating RAD50 (MRN complex) recruitment to damage sites and **potentiating HR repair**.
- The four amino acids that mediate chromatin eviction in human/mouse cGAS are the same residues that determine cGAS's function in **antagonizing cellular and tissue aging**, and their NMR configuration is associated with **lifespan extension** in the experimental system.
- The authors propose that manipulating this axis — converting cGAS from an HR suppressor to an HR potentiator — constitutes a mechanism for lifespan extension. #gap/no-mechanism — translational route (TRIM41 inhibition, P97-cGAS disruption, gene editing) is not specified in the abstract.

### Evolutionary framing

The Liu 2018 → Chen 2025 axis establishes nuclear cGAS as a **bimodal regulator of genome stability** whose direction of effect (HR suppression vs. HR facilitation) is evolutionarily tunable via a small number of amino acid changes. In the WT mammalian configuration, nuclear cGAS is a net negative regulator of high-fidelity repair — a possible evolutionary trade-off between innate immune sensing efficiency and genome maintenance. The NMR, which has evolved extreme longevity (>30 years) and near-absence of spontaneous cancer, has modified this trade-off to favor HR potentiation. This adds a second well-characterized molecular mechanism to the NMR longevity portfolio alongside HMM-hyaluronan synthesis and alternative ARF/p16 co-expression.

| Dimension | Status |
|---|---|
| Nuclear cGAS → HR suppression demonstrated in humans? | yes — Liu 2018; #gap/no-fulltext-access |
| NMR four-AA divergence → HR potentiation replicated in human cells? | not reported — NMR-comparison data only as of Chen 2025 abstract #gap/needs-human-replication |
| Translational route defined? | no #gap/no-mechanism |

## Therapeutic angles

### STING inhibitors (preclinical)

Small molecules that block STING activation are under preclinical investigation as anti-inflammaging agents:

- **H-151** — covalent palmitoylation-blocking STING inhibitor; blocks STING trafficking; used widely as a tool compound
- **C-178** — nitrofuran-based covalent STING inhibitor

Neither has entered clinical trials for aging indications. #gap/long-term-unknown — long-term STING inhibition may impair antimicrobial immunity; safety profile in aged hosts unknown.

### STING agonists for cancer immunotherapy

The opposite therapeutic direction: STING agonists (ADU-S100/MIW815, diABZI, MSA-2) are being developed to boost anti-tumor immunity. These are not aging-relevant interventions per se, but their clinical development has produced mechanistic data on STING biology.

**Next-generation dual-PRR lipid-nanoparticle adjuvants.** Mono-agonist systemic STING-agonist trials (ADU-S100 etc.) have largely been disappointing in efficacy. Kane et al. (2025) reported a lipid-based NP platform co-encapsulating cdGMP (STING agonist, hydrophilic) and MPLA (TLR4 agonist, hydrophobic) on the same ~30–60 nm PEGylated particle at a 2.5:1 cdGMP/MPLA mole ratio [^kane2025-superadjuvant]. The dual-PAMP NPs drove >4-fold higher IFN-α/β in mouse macrophages, primary mouse splenic DCs, and primary human DCs (3 donors) vs single-agonist or empty controls. The synergy required IRF3, IRF5, and IRF7. Lymph-node-targeted drainage was >3-fold enhanced post-boost; co-delivered multivalent B16F10 peptide vaccination produced 100% (10/10) tumor-free outcomes at day 48 with 80% (8/10) systemic-rechallenge rejection, and whole-lysate vaccination produced 69%/88%/75% rejection across B16F10 (melanoma), Panc02 (PDAC), and 4T1 (TNBC) models, respectively, with 100% systemic-rechallenge rejection in all three. IFNAR antibody blockade abolished tumor protection, confirming type I IFN through IFNAR as the essential effector axis. Preclinical young-mouse data only; no aged-host or human data. #gap/needs-human-replication. The conceptual shift is from systemic mono-agonist STING-agonist small-molecule trials to lymph-node-targeted, multi-PAMP NP-formulated platforms. See [[studies/kane-2025-super-adjuvant-nanoparticles]] for the full extracted study record and [[interventions/pharmacological/nanoparticle-immunoadjuvants]] for the class page covering this modality, prior-art (Atukorale 2019, Pradhan 2021, Nakamura 2021, Baljon 2024), and the **Chibaya 2024 cancer-aging bridge** combining the same NP platform with therapy-induced senescence (trametinib MEK + palbociclib CDK4/6) to remodel immune-cold PDAC.

### cGAS inhibitors (preclinical)

Small-molecule cGAS catalytic inhibitors (e.g., RU.521, CU-76) have been described and show efficacy in mouse autoimmune and neurodegeneration models. Application to aging not yet demonstrated. #gap/needs-human-replication

## Cross-talk with other pathways

- **[[nlrp3-inflammasome]]** — cGAS-STING and NLRP3 are parallel innate immune arms both driving inflammaging; STING activation can prime NLRP3 via NF-κB-dependent transcription of NLRP3 and IL-1β precursors. Synergistic rather than redundant in aging contexts.
- **[[nf-kb]]** — the canonical downstream inflammatory arm; NF-κB is also activated by other damage signals (reactive oxygen species, cytokines). cGAS-STING is one of several NF-κB inducers in aged cells.
- **[[tbk1]]** — shared kinase with mitophagy receptor signaling (OPTN/NDP52 phosphorylation in [[pink1-parkin-pathway]]). TBK1 sits at an intersection of mitophagy and innate immune activation.
- **[[mitochondrial-dysfunction]]** — upstream: mtDNA leak activates cGAS; downstream: IFN-I signaling impairs mitochondrial function via ISG-mediated metabolic reprogramming.
- **[[dna-damage-response]]** — genomic instability generates the micronuclei and CCFs that are cGAS substrates; cGAS-STING in turn amplifies the senescent secretome.

## Limitations and gaps

- **KEGG ID confirmed**: cGAS-STING is catalogued as hsa04623 (Cytosolic DNA-sensing pathway) in KEGG and as R-HSA-1834949 in Reactome.
- **WikiPathways entry not confirmed**: no WP ID has been identified. #gap/needs-canonical-id
- **Wu 2013 closed-access**: cGAMP second-messenger paper (2'3' non-canonical linkage) is not_oa in archive. Biochemical details in this page (specifically the non-canonical 2'–5' and 3'–5' phosphodiester linkage of 2'3'-cGAMP) derive from training knowledge and from Glück 2017's description; verify against primary source. #gap/no-fulltext-access
- **STING trafficking citations**: the ERGIC-stage TBK1 recruitment, TBK1 Ser366 phosphorylation as IRF3 docking site, and palmitoylation cycling details are from post-2008 structural papers (not Ishikawa 2008). These should be cited to Shang et al. 2019 (Nature), Ergun et al. 2019, and related work. #gap/unsourced
- **Aged tissue data absent**: Yang 2017 (the primary cGAS-senescence paper cited here) does NOT demonstrate cGAS-STING activation in naturally aged tissues — this claim was an overstatement and has been corrected. Actual in vivo aging tissue data from this pathway comes from separate work (Dou et al. 2017, Wehbe et al.). #gap/needs-human-replication
- **Human in vivo aging data**: most evidence from cell lines or mouse models. Direct demonstration of cGAS-STING activation in human aged tissues at the protein level is limited. #gap/needs-human-replication
- **Interventional data**: no cGAS or STING inhibitor has been tested in a human aging trial as of 2026. #gap/long-term-unknown
- **LINE-1 / retrotransposon arm**: mechanism is plausible and supported in mouse; human aging data preliminary. #gap/needs-replication

## Footnotes

[^liu2018]: [[studies/liu-2018-nuclear-cgas-hr-suppression]] · n=NR · in-vitro+in-vivo · doi:10.1038/s41586-018-0629-6 · PMID:30356214 · Liu H et al. · *Nature* 2018 · model: human cell lines + mouse xenograft · archive: not_oa (closed-access) · "Nuclear cGAS suppresses DNA repair and promotes tumorigenesis" · established that nuclear cGAS in human and mouse cells inhibits homologous recombination repair, promoting tumorigenesis; key prior art contextualizing the NMR four-AA divergence as a functional inversion of this suppressive role · **#gap/no-fulltext-access**
[^chen2025]: [[studies/chen-2025-nmr-cgas-hr-repair]] · doi:10.1126/science.adp5056 · PMID:41066557 · in-vitro+in-vivo · "A cGAS-mediated mechanism in naked mole-rats potentiates DNA repair and delays aging" · Chen Y et al. · *Science* 2025 · archive: not_oa (closed-access) · all claims sourced from abstract only · **#gap/no-fulltext-access**
[^dececco2019]: doi:10.1038/s41586-018-0784-9 · PMID:30728521 · in-vitro + in-vivo · "L1 drives IFN in senescent cells and promotes age-associated inflammation" · De Cecco M et al. · *Nature* 566:73–78 · 2019 · demonstrated LINE-1 derepression drives IFN-I signaling in senescent human cells and naturally aged mouse tissues; NRTI treatment (lamivudine, stavudine) suppresses IFN signature and extends mouse healthspan · model: senescent human cells + aged mice · archive status: not confirmed
[^sun2013]: doi:10.1126/science.1232458 · in-vitro · discovery of cGAS (mouse E330016A19 / human C6orf150) as cytosolic DNA sensor and cGAMP synthase; cGAS activates IRF3 and induces IFNβ in a STING-dependent manner; catalytic residues G198/S199 required; cGAMP product confirmed by mass spectrometry; cGAS predominantly cytoplasmic in THP1 cells · model: L929 + HEK293T-STING + Raw264.7 + THP1 + BMDM cells; biochemical reconstitution with purified protein · archive: downloaded (OA green) · Sun L et al., Science 2013; published online 20 December 2012 (DOI issued 2012; print 2013)
[^ishikawa2008]: doi:10.1038/nature07317 · in-vitro + in-vivo · STING identified as ER adaptor (five transmembrane regions) required for IFN-I response to cytosolic DNA and intracellular pathogens; primary in vivo demonstration: Sting−/− MEFs (C57BL/6) are highly susceptible to VSV-GFP infection and fail to produce IFN-β; HSV-1 also tested; STING KO does not affect TLR-dependent poly I:C or LPS responses · model: Sting−/− mouse (C57BL/6) + MEFs + macrophages · archive: downloaded · Ishikawa H & Barber GN, Nature 2008
[^wu2013]: doi:10.1126/science.1229963 · in-vitro + biochemical · 2'3'-cGAMP identified as endogenous STING ligand produced in response to cytosolic DNA; non-canonical phosphodiester linkage established · model: L929 cells + biochemical fractionation · archive: not_oa (closed-access; claims unverified against primary source) · Wu J et al., Science 2013 · #gap/no-fulltext-access
[^yang2017]: doi:10.1073/pnas.1705499114 · in-vitro · cGAS required for senescence-associated gene expression (IL6, IL8, IL1β, MMP12) and SA-β-Gal in MEFs and BJ human fibroblasts; senescence induced by spontaneous immortalization, etoposide (3–20 μM), and irradiation (3 Gy X-ray); cGAS enters nucleus during mitosis in proliferating cells; low cGAS expression correlates with poor lung adenocarcinoma survival (log-rank p=5e-05, HR=1.82 [1.4–2.5]); no aged tissue experiments · model: cGas−/− MEFs (C57BL/6) + cGas−/− BJ human foreskin fibroblasts (TALEN-generated) + B16F10 melanoma cells · archive: downloaded (bronze OA) · Yang H et al., PNAS 2017
[^gluck2017]: doi:10.1038/ncb3586 · in-vitro + in-vivo · CCFs (from lamin B1 loss) in senescent cells activate cGAS → STING → SASP factors (IL-6, TNF-α, Cxcl10) and type I IFNs; cGAS/STING KO blunts SASP and paracrine senescence; diverse triggers tested (oxidative stress 40% O₂, irradiation 12 Gy, HRasV12, palbociclib); in vivo: mouse irradiation + NrasG12V liver model · model: cGAS KO MEFs (C57BL/6) + WI-38 human lung fibroblasts; NOT IMR90 (IMR90 is from Dou et al. 2017) · archive: downloaded (OA green) · Glück S et al., Nat Cell Biol 2017
[^kane2025-superadjuvant]: [[studies/kane-2025-super-adjuvant-nanoparticles]] · doi:10.1016/j.xcrm.2025.102415 · PMID:41072409 · PMC:PMC12629812 · in-vitro+in-vivo · "Super-adjuvant nanoparticles for platform cancer vaccination" · Kane GI et al. · *Cell Reports Medicine* 6(10):102415 · 2025 · n=3–4 biological replicates in vitro; 5–13 mice per group in vivo; 3 human DC donors · randomized prime/boost vaccination + orthotopic tumor challenge · p<0.0001 for primary CD8⁺ T cell and tumor-rejection comparisons · model: RAW 264.7 + iBMDMs (Irf3/Irf5/Irf7 KO) + primary mouse splenic CD11c⁺ DCs + primary human DCs (3 donors); in vivo C57BL/6 (B16F10, Panc02) + BALB/c (4T1) · archive: downloaded (gold OA via PMC) · lipid NP co-encapsulating cdGMP (STING agonist, 45 µM) + MPLA (TLR4 agonist, 20 µM) at 2.5:1 mole ratio drives synergistic IFN-α/β; multivalent-peptide B16F10 vaccination 100% (10/10) tumor-free at day 48; lysate vaccination 69% B16F10 / 88% Panc02 / 75% 4T1 rejection; IFNAR blockade abolishes efficacy.
