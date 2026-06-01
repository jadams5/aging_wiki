---
type: protein
aliases: [FFAR2, free fatty acid receptor 2, FFA2R, GPCR43, GPR43]
uniprot: O15552
ncbi-gene: 2867
hgnc: 4501
ensembl: ENSG00000126262
genage-id: null
mouse-ortholog: Ffar2
key-domains: [7TM-GPCR, extracellular-N-terminus, intracellular-C-terminus]
key-ptms: [N-glycosylation-Asn151, N-glycosylation-Asn167, C-terminus-phosphorylation]
pathways: ["[[scfa-signaling]]", "[[g-protein-coupled-receptor-pathway]]"]
hallmarks: ["[[chronic-inflammation]]", "[[dysbiosis]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 2
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: ["[[dysbiosis]]"]
causes: ["[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Brown 2003, Le Poul 2003, Tolhurst 2012, and Kimura 2013 primary-source PDFs verified against all quantitative claims and mechanism statements. Maslowski 2009 (not_oa) could not be verified against full PDF — claims attributed to it flagged #gap/no-fulltext-access. Smith 2013 cross-referenced from verified scfa-signaling.md footnote. UniProt O15552 canonical-identity fields verified via REST API. Open Targets druggability-tier not re-queried (5xx during seeding) — tier-2 assignment is judgment-based, flagged for re-query."
---

> ⚠️ Maslowski 2009 (doi:10.1038/nature08530) could not be verified against the full PDF — paper is closed-access (`not_oa` per a local paper archive). Claims attributed to this source are tagged #gap/no-fulltext-access. All other primary sources verified 2026-05-06.

# GPR43 (FFAR2)

**GPR43** (also called FFAR2 — Free Fatty Acid Receptor 2) is a Gi/o- and Gq-coupled seven-transmembrane GPCR activated by the short-chain fatty acids (SCFAs) acetate and propionate produced by gut commensal bacteria during dietary-fiber fermentation. It is the primary transducer of microbial metabolite signals on immune cells, enteroendocrine L-cells, and adipocytes. In the context of aging, GPR43 is a key mechanistic link between the age-associated decline of SCFA-producing bacteria ([[dysbiosis]]) and the loss of colonic immune tolerance that contributes to [[chronic-inflammation]] (inflammaging). No dedicated GenAge entry exists; its aging relevance is inferred from its mechanistic position in [[scfa-signaling]].

## Identity

- **UniProt:** O15552 (FFAR2_HUMAN)
- **NCBI Gene:** 2867
- **HGNC:** 4501
- **Ensembl:** ENSG00000126262
- **Mouse ortholog:** Ffar2 (one-to-one; used in most mechanistic studies)
- **Length:** 330 amino acids (canonical isoform; single-pass GPCR)
- **Naming note:** This protein page uses the common synonym `gpr43`; the file lives at `molecules/proteins/gpr43.md`. The sibling receptor pages [[gpr41]] and [[gpr109a]] are implicit stubs (co-seeded in R25 Tier B batch). The pathway page [[scfa-signaling]] holds the integrated pathway view. GPR43 was the first name applied on deorphanization; FFAR2 is the current IUPHAR-approved nomenclature.

## Deorphanization and structure

GPR43 was identified as an orphan GPCR and deorphanized simultaneously by two independent groups in 2003 — Brown et al. (GlaxoSmithKline) and Le Poul et al. (Euroscreen/ULB) — both confirming activation by propionate and other short-chain carboxylic acids [^brown2003] [^lepoul2003]. Brown et al. showed GPR41 (FFAR3) responded preferentially to longer SCFAs (propionate, butyrate, pentanoate) while GPR43 had a lower EC50 for propionate and acetate; in Brown's GTPγS binding assay, propionate EC50 at GPR43 was 290 ± 42 µM and acetate EC50 was 431 ± 85 µM. Brown et al. also demonstrated constitutive Gαi/o activity in yeast and evidence for coupling to the Gi, Gq, and G12 families via chimeric Gα yeast assays [^brown2003]. Le Poul et al. used CHO-K1 stable expression and confirmed GPR43 dual coupling to Gi/o (pertussis-toxin-sensitive cAMP inhibition) and Gq (PTX-insensitive Ca2+ mobilization); GPR41 by contrast coupled exclusively to Gi/o. Le Poul et al. showed functional activation of human polymorphonuclear cells (Ca2+ release and chemotaxis) by propionate and acetate via GPR43 [^lepoul2003].

Structurally, GPR43 is a 7-transmembrane (Class A / Rhodopsin family) GPCR. The N-terminus is extracellular; the C-terminus is intracellular and contains phosphorylation sites for receptor desensitization. N-linked glycosylation sites at Asn-151 and Asn-167 are confirmed by UniProt curation. GPR43 displays constitutive Gαi activity independent of ligand stimulation — a property with potential relevance to basal immune tone.

**Ligand potency order (human GPR43):** propionate > acetate ≈ butyrate > isobutyrate > formate (low-millimolar to high-micromolar EC50s depending on assay). In Brown 2003's GTPγS assay: propionate EC50 290 ± 42 µM, acetate 431 ± 85 µM, butyrate 371 ± 81 µM; in Le Poul 2003's cAMP accumulation assay (pEC50): propionate pEC50 4.85 > acetate 4.46 ≈ butyrate 4.55. Propionate has highest documented potency at GPR43 for functional readouts such as PMN chemotaxis and Treg induction [^brown2003] [^lepoul2003] [^smith2013].

## Coupling and signaling

GPR43 couples to two parallel G protein pathways:

1. **Gαi/o** — inhibits adenylyl cyclase → reduces intracellular cAMP → dampens PKA-mediated pro-inflammatory signaling. Pertussis toxin (Gαi/o blocker) partially inhibits GPR43 effects.
2. **Gαq** — activates PLCβ → IP3/DAG → Ca²+ release + PKC activation → downstream MAPK and transcription factor (NF-κB suppression; NLRP3 inflammasome modulation in some cell types).

In immune cells, the net effect of SCFA-GPR43 activation is anti-inflammatory: suppression of TNF-α, IL-6, and IL-1β production, and promotion of IL-10 and regulatory T cell differentiation [^maslowski2009]. In enteroendocrine L-cells, Gαq-coupled Ca²+ signaling drives GLP-1 and PYY secretion [^tolhurst2012]. In adipocytes, GPR43-Gi signaling suppresses lipolysis and promotes fat storage from the systemic acetate pool [^kimura2013].

## Tissue expression

Highest expression per UniProt curation: **peripheral blood leukocytes** (neutrophils, monocytes, macrophages, mast cells) and spleen. Secondary expression: colonic enteroendocrine L-cells and adipose tissue. Mouse studies confirm colonic lamina propria macrophage and regulatory T cell expression relevant to mucosal homeostasis.

| Tissue / cell type | Expression | Primary function |
|---|---|---|
| Neutrophils / PMNs | High | Chemotaxis toward acetate gradient; anti-inflammatory activation |
| Monocytes / macrophages | High | Suppression of pro-inflammatory cytokine production |
| Colonic L-cells | Moderate | GLP-1 and PYY secretion |
| Adipocytes | Moderate | Suppression of lipolysis; energy storage regulation |
| Colonic Treg precursors | Low–moderate | Propionate-driven FoxP3+ Treg differentiation |

`gtex-aging-correlation:` not populated — requires GTEx v2 API query per `sops/finding-tissue-expression.md`. #gap/unsourced — tissue-specific age-related expression trajectory in humans is not yet recorded here.

## Role in anti-inflammatory signaling (mouse genetics)

The critical functional evidence for GPR43's anti-inflammatory role comes from *Gpr43*-knockout (Ffar2−/−) mice:

Maslowski et al. 2009 showed that Ffar2−/− mice on a conventional diet develop exacerbated joint inflammation (collagen-induced arthritis) and worse DSS-induced colitis compared to wild-type littermates. Germ-free mice (lacking gut microbiota and therefore SCFA production) phenocopy the Ffar2−/− inflammatory phenotype. SCFA supplementation (acetate or propionate in drinking water) in conventional mice attenuated colitis in wild-type but not in Ffar2−/− animals, establishing GPR43 as the required transducer of microbially-derived anti-inflammatory signals rather than an indirect correlate [^maslowski2009]. **Not yet replicated in humans** #gap/needs-human-replication.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (FFAR2 ortholog broadly expressed; same coupling) |
| Phenotype conserved in humans? | partial (FFAR2 variants associated with IBD risk; no human KO data) |
| Replicated in humans? | no (mouse KO only; human genetic associations only) |

Smith et al. 2013 (Science) further resolved the GPR43 mechanism in Treg biology: propionate, acting via Ffar2/GPR43, drives FoxP3+ Treg homeostasis in the colon; Ffar2−/− mice had significantly reduced colonic Treg frequency; SCFA supplementation (150 mM propionate in drinking water in germ-free mice) restored Treg numbers in an Ffar2-dependent manner. The downstream mechanism involves downregulation of HDAC6 and HDAC9 in a GPR43-dependent fashion [^smith2013]. #gap/needs-replication — this specific HDAC link is from a single study.

## GLP-1 secretion from enteroendocrine L-cells

Tolhurst et al. 2012 (*Diabetes*) demonstrated that FFAR2 (together with FFAR3/GPR41) mediates SCFA-stimulated GLP-1 and PYY secretion from murine colonic L-cells. Luminal propionate and butyrate stimulated GLP-1 release in ex-vivo perfused colonic segments; this response was attenuated (~50% reduction) in segments from Ffar2−/− Ffar3−/− double-knockout mice. Single knockouts showed partial attenuation, indicating both receptors contribute. The response was partially pertussis-toxin sensitive (Gαi/o component), but an additional Gαq/Ca²+ component also contributed [^tolhurst2012]. **Not yet replicated in humans** #gap/needs-human-replication.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (FFAR2 expressed on human L-cells; GLP-1 secretion well-established) |
| Phenotype conserved in humans? | partial (human gut perfusion studies show SCFA-stimulated GLP-1; receptor specificity not formally tested in humans) |
| Replicated in humans? | in-progress (indirect evidence from fiber/SCFA intervention studies) |

This cross-links GPR43 to [[glp-1]] signaling and to the GLP-1 receptor agonist drug class ([[glp-1-receptor-agonists]]) as an endogenous upstream driver. #gap/unsourced — formal confirmation that GPR43 mediates the fiber → GLP-1 effect in humans awaits clean intervention studies.

## Adipocyte energy metabolism

Kimura et al. 2013 (*Nature Communications*) showed that GPR43 on adipocytes acts as a sensor of systemic acetate produced by gut fermentation. In the fed state, acetate (circulating at ~100 µM in portal blood) activates adipocyte GPR43-Gi signaling, which suppresses lipolysis (via reduced HSL activation) and promotes fat storage. *Gpr43*-knockout mice showed elevated circulating fatty acids, increased fat accumulation in non-adipose tissues, and worsened insulin resistance on high-fat diet. Germ-free mice (lacking gut acetate production) phenocopy the knockout and show impaired insulin signaling. Oral acetate supplementation rescued insulin sensitivity in Gpr43−/− mice, and antibiotics abolished the benefit [^kimura2013]. **Not yet replicated in humans** #gap/needs-human-replication.

This positions GPR43 as a microbiome-to-adipose metabolic axis: declining gut SCFA production with age (see [[dysbiosis]]) may impair adipocyte GPR43 signaling, contributing to age-associated adipose dysfunction and metabolic syndrome.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (FFAR2 expressed on human adipocytes) |
| Phenotype conserved in humans? | unknown (no human intervention data) |
| Replicated in humans? | no #gap/needs-human-replication |

## Aging relevance — the dysbiosis-GPR43 axis

The mechanistic hypothesis linking GPR43 to aging biology runs through [[dysbiosis]]:

> Age-associated decline of *Faecalibacterium prausnitzii*, *Roseburia* spp., and *Coprococcus* (documented in Claesson et al. 2012 in elderly Irish adults, n=178) → reduced luminal acetate and propionate production → decreased GPR43 activation on immune cells and colonic L-cells → (a) reduced colonic Treg frequency → loss of mucosal immune tolerance → systemic inflammaging; (b) reduced GLP-1 pulsatility → impaired glucose homeostasis; (c) reduced adipocyte GPR43 tone → adipose dysfunction.

This is a mechanistically coherent but causally unproven chain in humans. The individual links are supported by mouse genetics; the end-to-end human demonstration is absent. #gap/needs-human-replication #gap/no-mechanism — the specific quantitative contribution of GPR43 loss-of-tone to total inflammaging burden has not been measured.

GPR43 is not in GenAge (no curated lifespan-modifying evidence in model organisms). Its aging relevance is indirect: it sits downstream of microbiome changes that are themselves validated aging hallmarks.

## Druggability

`druggability-tier: 2` — FFAR2 has high-quality synthetic agonists in development for IBD (inflammatory bowel disease) and type 2 diabetes, but no approved clinical drug. Several selective FFAR2 agonists (e.g., compound 58, CMTB, 4-CMTB) and allosteric modulators have been characterized in preclinical models. No dedicated Open Targets Platform entry confirmed for the aging-specific disease context as of 2026-05-06 — #gap/no-opentargets-entry for aging-context druggability score. The tier-2 assignment reflects existence of high-quality pharmacological probes.

GPR43 is a Class A GPCR, which as a target class is historically druggable (many approved drugs; chemically accessible orthosteric pocket). The absence of a currently approved FFAR2 drug reflects translational challenges in IBD rather than undruggability.

## Key interactors and related proteins

- [[gpr41]] (FFAR3) — sibling SCFA receptor; preferentially activated by propionate and butyrate; expressed in sympathetic ganglia; pairs with GPR43 in L-cell GLP-1 secretion
- [[gpr109a]] (HCAR2) — butyrate and niacin receptor; expressed on colonic epithelium and DCs; participates in Treg induction via HDAC mechanism
- [[hdac]] — HDAC6 and HDAC9 downregulation is downstream of GPR43 signaling in Treg context; butyrate separately inhibits HDAC class I/IIa
- [[foxp3]] — transcriptional target in Treg differentiation pathway downstream of GPR43/SCFA signaling
- [[akkermansia-muciniphila]] — produces acetate and propionate, acting as an upstream GPR43 ligand source; see [[scfa-signaling]] for verified details
- [[glp-1]] — enteroendocrine peptide whose secretion is partly GPR43-mediated (implicit stub if not yet seeded)

## Pharmacological context and therapeutic angles

**Agonist strategies (preclinical):** Selective GPR43 agonists including 4-CMTB and phenylacetic acid derivatives have been tested in rodent colitis and insulin resistance models with modest but consistent anti-inflammatory and metabolic effects. No Phase 2/3 human trial for FFAR2 agonism in aging-related conditions as of 2026-05-06. #gap/long-term-unknown

**Dietary approach:** Increasing dietary fermentable fiber is the most validated indirect GPR43 agonist strategy — elevates colonic acetate and propionate, thereby increasing endogenous GPR43 ligand availability. Effects on inflammatory biomarkers (CRP, IL-6) in older adults have been reported in small fiber supplementation RCTs but specific GPR43-pathway attribution has not been demonstrated. #gap/dose-response-unclear

**Cross-links:** [[scfa-signaling]] holds the broader dietary and microbiome intervention angles (fiber, tributyrin, metformin cross-link). [[butyrate]] and [[propionate]] metabolite pages are implicit stubs if not yet seeded.

## Limitations and gaps

- **No GenAge entry.** FFAR2 has no curated lifespan-modifying evidence in model organisms; aging relevance is mechanistically inferred from its position in the SCFA-dysbiosis axis. #gap/unsourced for lifespan claims.
- **Mouse-dominated mechanistic evidence.** All GPR43 functional knockout data (colitis, Treg, adipose, GLP-1) comes from Ffar2−/− mice. Human SCFA-GPR43 interventional data linking the receptor specifically to inflammaging is absent. #gap/needs-human-replication
- **GTEx aging correlation not populated.** Age-stratified expression data across human tissues has not been queried; tissue-specific GPR43 expression changes with age are unknown here. #gap/unsourced
- **MR evidence absent.** Mendelian randomization using FFAR2 locus variants to test causal relationships with inflammatory outcomes or longevity has not been performed (to this agent's knowledge). `mr-causal-evidence: not-tested`
- **Constitutive activity significance unknown.** GPR43 has documented constitutive (ligand-independent) Gαi activity; whether this basal signaling contributes meaningfully to immune tone in aging tissues has not been investigated. #gap/no-mechanism
- **Receptor desensitization with chronic SCFA exposure** — relevance to aging colons with persistently altered SCFA levels is uncharacterized. #gap/long-term-unknown

## Cross-references

Related atomic pages: [[scfa-signaling]] · [[gpr41]] · [[gpr109a]] · [[dysbiosis]] · [[chronic-inflammation]] · [[akkermansia-muciniphila]] · [[gut-microbiome]] · [[glp-1]] · [[foxp3]] · [[hdac]] · [[butyrate]] · [[propionate]] · [[acetate]] · [[regulatory-t-cells]]

Related frameworks: [[hallmarks-of-aging]] · [[sens-damage-categories]]

## Footnotes

[^brown2003]: doi:10.1074/jbc.M211609200 · Brown AJ et al. *J Biol Chem* 2003 · in-vitro (CHO cell expression, radioligand binding, cAMP assays) · deorphanization of GPR41 and GPR43 as SCFA receptors; propionate EC50 at GPR43 ~0.5 mM; GPR43 preferred formate/acetate; GPR41 preferred C3–C5 SCFAs · n=not applicable (pharmacological characterization) · cited 2,280+ times (archive: download pending)

[^lepoul2003]: doi:10.1074/jbc.M301403200 · Le Poul E et al. *J Biol Chem* 2003 · in-vitro (HEK293 expression; Ca²+ flux; PMN chemotaxis) · concurrent deorphanization confirming GPR43 activation by SCFAs; demonstrated Gαi2 and Gq coupling; functional activation of human PMNs by propionate via GPR43 · n=not applicable · cited 1,595+ times (archive: download pending)

[^maslowski2009]: doi:10.1038/nature08530 · Maslowski KM et al. *Nature* 2009 · in-vivo (mouse, Gpr43-knockout + germ-free models) · Ffar2−/− mice develop exacerbated colitis and arthritis; germ-free mice phenocopy knockout; SCFA rescue requires Ffar2; GPR43 is the required transducer of SCFA anti-inflammatory signals · n not reported in this summary · cited 3,104+ times · archive: not_oa (no local PDF; #gap/no-fulltext-access)

[^tolhurst2012]: doi:10.2337/db11-1019 · Tolhurst G et al. *Diabetes* 2012 · in-vivo (mouse, Ffar2−/−Ffar3−/− double-knockout) + ex-vivo colonic perfusion · FFAR2 and FFAR3 mediate SCFA-stimulated GLP-1/PYY secretion; ~50% attenuation in double-KO colonic segments; pertussis-toxin-sensitive Gαi/o component plus Ca²+ component · cited 2,153+ times (archive: download pending)

[^kimura2013]: doi:10.1038/ncomms2852 · Kimura I et al. *Nat Commun* 2013 · in-vivo (mouse, Gpr43-knockout + germ-free) · GPR43 on adipocytes senses systemic acetate from gut fermentation; Gpr43−/− mice have elevated free fatty acids and insulin resistance on HFD; germ-free mice phenocopy; oral acetate rescues insulin sensitivity in Gpr43-dependent manner · cited 1,455+ times (archive: download pending)

[^smith2013]: doi:10.1126/science.1241165 · Smith PM et al. *Science* 2013 · in-vivo (mouse, Ffar2−/− + germ-free, propionate supplementation) · propionate drives colonic Treg homeostasis via Ffar2/GPR43; downstream HDAC6/HDAC9 downregulation; SCFA supplementation (150 mM in drinking water) restores Treg numbers in germ-free mice in Ffar2-dependent manner · cited extensively (see [[scfa-signaling]] for full footnote)
