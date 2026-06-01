---
type: protein
aliases: [SREBP-2, SREBF2, sterol regulatory element-binding protein 2, SREBP2]
uniprot: Q12772
ncbi-gene: 6721
hgnc: 11290
ensembl: ENSG00000198911
genage-id: null
pathways: ["[[mtor]]", "[[ampk]]", "[[insulin-igf1]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[chronic-inflammation]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 2
gtex-aging-correlation: "pan-tissue: weak/null (liver ρ=−0.07, n=262; SM ρ=−0.14, n=818; whole blood ρ=−0.06, n=803; subQ adipose ρ=+0.06; VAT ρ=−0.03); bulk RNA-seq is the wrong instrument — see snRNA-seq evidence from Yang 2024 ([[studies/yang-2023-primate-liver-aging-snrna-srebp2]]) for the per-hepatocyte hyperactivation signal that bulk misses (cell-composition confound). GTEx v10 query 2026-05-21 via attributeSubset=ageBracket."
mr-causal-evidence: not-tested
caused-by: ["[[mtor]]", "[[deregulated-nutrient-sensing]]"]
causes: ["[[ldlr]]", "[[hmgcr]]", "[[pcsk9]]", "[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Brown & Goldstein 1997 Cell PDF read end-to-end; Horton 2002 JCI PDF read end-to-end; Li 2011 Cell Metabolism PDF read end-to-end; Peterson 2011 Cell PDF read end-to-end. Identity fields (UniProt Q12772, NCBI Gene 6721, HGNC 11290, Ensembl ENSG00000198911) confirmed via live API queries. Corrections applied: (1) AMPK phosphorylation site re-attributed from 'Ser-372 on SREBP-2' to 'conserved Ser equivalent to SREBP-1c Ser-372' — Li 2011 characterizes Ser-372 as the SREBP-1c residue; SREBP-2 equivalent residue is not explicitly numbered in that paper; (2) PCSK9 removed from [^horton2002]-attributed target gene table — PCSK9 was not discovered until 2003 and does not appear in Horton 2002; (3) Peterson 2011 mechanism re-worded from 'excluding SREBP from chromatin' to 'decreasing nuclear SREBP protein abundance'; (4) cleavage residue numbers (~Arg-522, ~Leu-484) qualified as approximate and sourced to Duncan 1997 (J Biol Chem 272:12778) rather than Brown & Goldstein 1997 alone. Dubuc 2004 and Jeong 2008 (closed-access and OA respectively) verified via PubMed abstracts. literature-checked-through set to 2026-05-09; no supersession candidates found."
literature-checked-through: 2026-05-09
---

# SREBP-2 (SREBF2)

SREBP-2 (Sterol Regulatory Element-Binding Protein 2) is the master transcriptional regulator of hepatic cholesterol homeostasis. It controls expression of the LDL receptor ([[ldlr]]), the full cholesterol biosynthesis gene program ([[hmgcr]] and >20 downstream enzymes), and — paradoxically — [[pcsk9]], the protein that degrades the LDL receptor. The SCAP–INSIG–SREBP-2 sterol-sensing axis is the molecular mechanism by which dietary saturated fat suppresses hepatic LDLR expression and thereby raises plasma LDL/ApoB.

## Identity

- **UniProt:** Q12772 (SRBP2_HUMAN), reviewed Swiss-Prot entry
- **Gene:** SREBF2 (Sterol Regulatory Element Binding Transcription Factor 2)
- **NCBI Gene ID:** 6721
- **HGNC:** 11290
- **Ensembl:** ENSG00000198911
- **Length:** 1,141 amino acids (precursor); processed nuclear form ~520 aa
- **Mouse ortholog:** Srebf2 (one-to-one ortholog; mechanism conserved in all mammalian species studied)

## SREBP family context

Three SREBP isoforms exist in humans, encoded by two genes [^horton2002]:

| Isoform | Gene | Primary target program | Key activator |
|---------|------|------------------------|---------------|
| SREBP-1a | SREBF1 (long promoter) | Both cholesterol and fatty acid synthesis | Broad transcriptional activator |
| SREBP-1c | SREBF1 (short promoter) | Fatty acid and triglyceride synthesis | Insulin, LXR |
| SREBP-2 | SREBF2 | Cholesterol synthesis and uptake | Sterol depletion |

SREBP-2 is the cholesterol-specific isoform and the primary regulator of [[ldlr]] expression. SREBP-1c is the lipogenic isoform predominantly induced by insulin via the [[insulin-igf1]] pathway and by liver X receptor (LXR) agonists. All three isoforms share the same proteolytic activation mechanism, but differ in target-gene selectivity based on their transcriptional activation domain composition.

## Domain architecture

The 1,141-aa precursor contains three functional regions [^brownGoldstein1997] [^horton2002]:

- **N-terminal transcriptional activation domain + bHLH-LZ domain (residues ~1–480):** Contains an acidic transcriptional activation domain (residues 1–50) and a basic helix-loop-helix leucine zipper (bHLH-LZ, bHLH at ~330–380, LZ at ~380–401) that mediates DNA binding to sterol regulatory elements (SRE-1 motif: 5'-ATCACCCCAC-3') and E-boxes, and homo/heterodimerization. This N-terminal fragment is the **active nuclear transcription factor** released by proteolytic cleavage.
- **Two transmembrane spans (~480–580):** Anchor the precursor in the ER membrane in a hairpin loop topology. S2P (MBTPS2) cleaves within the first transmembrane span at approximately Leu-484 (based on tryptic peptide mapping from HeLa nuclear extracts; Duncan et al. 1997, J Biol Chem 272:12778). The luminal loop between the two TM spans is the site of S1P (MBTPS1) cleavage between a Leu-Ser bond in the sequence RSVL↓S, corresponding to approximately Leu-522 in human SREBP-2 (Duncan et al. 1997); the adjacent positively-charged residue at P4 (equivalent to Arg) is required for S1P recognition [^brownGoldstein1997].
- **C-terminal regulatory domain (residues ~580–1,141):** Interacts with SCAP (SREBP cleavage-activating protein) via a MELADL hexapeptide motif; this interaction is essential for trafficking of the SCAP–SREBP-2 complex from ER to Golgi. INSIG proteins compete with SCAP for binding in this region when cholesterol is abundant.

Key PTMs (UniProt Q12772): phosphorylation at Ser-855 and Ser-1098 (regulatory); ubiquitination of the nuclear form (promoting degradation); SUMOylation at Lys-464 (modulates transcriptional activity); proteolytic cleavage by MBTPS1 (Leu-Ser bond, ~Leu-522 in lumenal loop), MBTPS2 (~Leu-484 within first TM span), and caspase-3/7.

## The SCAP–INSIG–S1P/S2P sterol-sensing mechanism

This is the central regulatory axis. It operates as a cholesterol-sensing rheostat in the ER membrane [^brownGoldstein1997] [^brownGoldstein2018].

**Step-by-step:**

1. **Ground state (cholesterol replete):** Inactive SREBP-2 precursor sits in the ER membrane bound to SCAP (SREBP cleavage-activating protein, encoded by *SCAP*). When the ER membrane free-cholesterol concentration is high (>5 mol% of total ER lipid), SCAP undergoes a conformational change that exposes its MELADL hexapeptide motif. INSIG-1 or INSIG-2 (ER-resident proteins) then bind this motif, physically retaining the SCAP–SREBP-2 complex in the ER.
2. **Activation trigger (cholesterol depleted):** When cellular free cholesterol falls — through statin inhibition of HMGCR, low dietary cholesterol intake, or increased PUFA-driven β-oxidation diverting acetyl-CoA away from synthesis — SCAP's sterol-sensing domain loses its cholesterol ligand, INSIG dissociates, and the SCAP–SREBP-2 complex is loaded into COPII vesicles for anterograde transport to the Golgi.
3. **S1P cleavage (Golgi):** Site-1 Protease (MBTPS1, a membrane-anchored serine protease) cleaves SREBP-2 in the luminal loop at a Leu-Ser bond (sequence RSVL↓S; cleavage requires a positively charged residue — Arg or Lys — at the P4 position) [^brownGoldstein1997]. This releases the C-terminal regulatory domain still bound to SCAP, leaving the N-terminal bHLH-LZ domain tethered to a single transmembrane span.
4. **S2P cleavage (Golgi):** Site-2 Protease (MBTPS2, a zinc metalloprotease) then cleaves within the first transmembrane span (approximately Leu-484 based on fragment sizing; the exact bond is within a DRSR-preceded tetrapeptide), releasing the soluble N-terminal bHLH-LZ fragment (~480 aa).
5. **Nuclear translocation:** The released fragment translocates to the nucleus, dimerizes, and binds SRE-1 elements in target gene promoters to activate transcription [^brownGoldstein1999].

This two-protease sequential mechanism (first established by Brown & Goldstein 1997) is required; S2P cannot cleave unless S1P has acted first. The sterol signal is sensed in the ER; the proteolytic machinery is in the Golgi; the output is transcriptional.

## Target genes

SREBP-2 binds SRE-1 elements to directly activate [^horton2002]:

**Cholesterol uptake:**
- **LDLR** — the LDL receptor; primary determinant of plasma LDL/ApoB clearance rate #gap/needs-replication (individual contribution of SREBP-2 vs other TFs at LDLR promoter is well-established but complex)
- **PCSK9** — (see feedback paradox below; established as SREBP-2 target by Dubuc 2004 and Jeong 2008 — not in Horton 2002, which predates PCSK9 discovery [^jeong2008] [^dubuc2004])

**Cholesterol biosynthesis (full mevalonate pathway):**
- **HMGCR** — HMG-CoA reductase (rate-limiting enzyme; statin target)
- **HMGCS1** — HMG-CoA synthase 1
- **MVK** — mevalonate kinase
- **PMVK** — phosphomevalonate kinase
- **MVD** — mevalonate diphosphate decarboxylase
- **FDPS** — farnesyl diphosphate synthase
- **FDFT1** — squalene synthase
- **SQLE** — squalene epoxidase
- **LSS** — lanosterol synthase
- **DHCR24** — 24-dehydrocholesterol reductase
- **DHCR7** — 7-dehydrocholesterol reductase

**The PCSK9 feedback paradox:** SREBP-2 activates PCSK9 transcription via an SRE in the PCSK9 promoter [^jeong2008] [^dubuc2004]. PCSK9 then promotes lysosomal degradation of the LDL receptor. This creates a **built-in negative feedback brake** on LDLR upregulation: as SREBP-2 is activated, it simultaneously induces PCSK9, which partially offsets the LDLR induction. Statins exploit this pathway (they activate SREBP-2 → ↑LDLR) but also co-induce PCSK9, which limits the statin-induced LDLR response. PCSK9 inhibitors bypass this brake by stabilizing LDLR post-translationally [^dubuc2004]. See [[pcsk9]].

## Dietary fat regulation — the dietary fat → LDL/ApoB mechanism

This is the molecular basis for the dietary saturated fat → LDL/ApoB → CVD relationship [^mensink2003].

**Saturated fat (palmitate) raises plasma LDL/ApoB via SREBP-2 suppression:**

1. Dietary saturated fatty acids (especially palmitic acid, C16:0, and stearic acid, C18:0) are converted in the liver to saturated cholesterol esters and modulate the free-cholesterol pool in the ER membrane.
2. Elevated hepatocyte free cholesterol → INSIG-mediated SCAP retention in ER → ↓ SCAP–SREBP-2 trafficking to Golgi → ↓ MBTPS1/MBTPS2 cleavage → ↓ nuclear SREBP-2 → ↓ LDLR transcription.
3. ↓ Surface LDLR → ↓ hepatic LDL clearance → ↑ plasma LDL-cholesterol and ↑ ApoB.

The Mensink 2003 meta-analysis of 60 metabolic-ward feeding trials is the human evidence base confirming that saturated fat raises LDL and total:HDL ratio relative to unsaturated fat and carbohydrate [^mensink2003].

**PUFA opposes saturated fat via depletion of the ER free-cholesterol pool:**

Polyunsaturated fatty acids (linoleic acid n-6; alpha-linolenic acid n-3; EPA/DHA) are preferentially oxidized in mitochondria and peroxisomes, diverting acetyl-CoA away from de novo cholesterol synthesis, and may also directly influence ER membrane cholesterol composition. Net effect: ↓ ER free-cholesterol → INSIG releases SCAP → ↑ SREBP-2 cleavage → ↑ LDLR → ↑ LDL clearance → ↓ plasma LDL/ApoB. This mechanism provides a partial mechanistic explanation for the LDL-lowering effect of replacing saturated with unsaturated fat.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes — plasma LDL changes with dietary fat composition are well-documented in humans |
| Replicated in humans? | yes — metabolic-ward RCTs (Mensink 2003 meta-analysis of 60 trials) |

## Pharmacological exploitation of the SREBP-2 axis

Three drug classes work through or around SREBP-2 [^horton2002] [^dubuc2004]:

**1. Statins — exploit SREBP-2 feedback**
Statins inhibit HMGCR → deplete hepatic free-cholesterol pool → activate SCAP–SREBP-2 trafficking → ↑ nuclear SREBP-2 → ↑ LDLR transcription (~2–3 fold) → ↑ hepatic LDL uptake. The LDL-lowering effect of statins is **primarily mediated through LDLR upregulation**, not through the modest direct reduction in de novo cholesterol synthesis [^horton2002]. The co-induction of PCSK9 partially limits this response.

**2. PCSK9 inhibitors — bypass the SREBP-2/PCSK9 brake**
Monoclonal antibodies (evolocumab, alirocumab) prevent PCSK9 from binding the LDLR in endosomes, allowing receptor recycling back to the hepatocyte surface. PCSK9i action is entirely post-translational and independent of SREBP-2 activation state. This is why PCSK9i + statins are additive: statins upregulate LDLR transcription (SREBP-2-dependent); PCSK9i stabilize the resulting protein (SREBP-2-independent). See [[pcsk9]].

**3. Bempedoic acid — acts upstream of SREBP-2**
Bempedoic acid inhibits ATP-citrate lyase (ACLY) → reduces cytosolic acetyl-CoA → reduces de novo cholesterol/fatty acid synthesis → depletes hepatic cholesterol pool → activates SREBP-2 → ↑ LDLR [^masana2021]. The mechanism is analogous to statins but targets a step upstream of HMGCR. Notably, bempedoic acid requires hepatic activation (by ACSL1) and does not inhibit ACLY in skeletal muscle, explaining its lower myopathy risk compared to statins.

**Druggability rationale (tier 2):** No FDA-approved drug directly targets SREBP-2 itself (no clinical SREBP-2 inhibitor or activator exists). However, the axis is highly druggable *indirectly*: statins (FDA-approved, widespread), bempedoic acid (FDA-approved 2020), and PCSK9i (FDA-approved) all modulate the physiological output (LDLR expression and LDL clearance) by engaging upstream or downstream steps. Research-stage direct SREBP inhibitors include betulin (natural triterpenoid, preclinical only) and fatostatin (blocks SCAP–SREBP-2 interaction, preclinical only) — neither has entered clinical trials.

## Cross-talk with aging-relevant pathways

### mTORC1 promotes SREBP-2 maturation

mTORC1 (mechanistic target of rapamycin complex 1 — see [[mtor]]) phosphorylates lipin-1 to retain it in the cytoplasm. When lipin-1 is dephosphorylated and enters the nucleus (mTORC1 OFF state), it suppresses SREBP transcriptional activity and reduces nuclear SREBP protein abundance. mTORC1 inactivates lipin-1 nuclear entry → relieves lipin-1-mediated SREBP suppression → ↑ SREBP-2 nuclear activity [^peterson2011]. The molecular mechanism by which nuclear lipin-1 reduces nuclear SREBP protein is not fully characterized in Peterson 2011 (no direct lipin-1–SREBP-2 physical interaction was detected), but the catalytic phosphatase activity of lipin-1 and its effect on nuclear lamina structure are implicated. Rapamycin treatment therefore reduces SREBP-2 target gene expression and cholesterol synthesis in a lipin-1-dependent manner. This explains, in part, why rapamycin-treated animals show reduced plasma cholesterol and why the mTOR pathway is considered pro-anabolic for sterol metabolism. The mTOR-SREBP-2 link connects [[deregulated-nutrient-sensing]] directly to age-related dyslipidemia.

**Aging implication:** Age-associated mTORC1 hyperactivation (documented in liver among other tissues) is expected to maintain inappropriately elevated SREBP-2 activity even when cellular cholesterol is sufficient — potentially contributing to excess cholesterol synthesis and PCSK9 induction in aged hepatocytes. **Yang 2024 (cynomolgus monkey single-nucleus liver atlas, *Protein & Cell*) provides direct empirical support for this prediction** [^yang2024]: SREBP signaling is hyperactivated in aged primate hepatocytes across all three liver zonations, and forced SREBP2 activation in human primary hepatocytes is *sufficient* to recapitulate aging phenotypes (impaired detoxification, accelerated cellular senescence). The Yang finding promotes the mTORC1-driven hyperactivation prediction from a mechanistic inference to an empirically-anchored claim — although mTORC1 *dependency* per se is not yet directly tested in aged primate liver. Critically, this **reverses the field-shorthand "reduced SREBP-2 processing efficiency"** that had been used to explain age-related hepatic LDLR decline (e.g., on [[lipoprotein-metabolism]]); the mechanism is more accurately framed as SREBP-2 *hyperactivation* with the co-induced [[pcsk9|PCSK9]] feedback brake dominating over LDLR transcriptional drive (see [[ldlr]] § Aging relevance).

### AMPK opposes SREBP-2 via direct phosphorylation

AMPK directly phosphorylates both SREBP-1c and SREBP-2, inhibiting their cleavage and suppressing nuclear translocation — reducing LDLR and HMGCR transcription [^li2011]. For SREBP-1c, the characterized AMPK phosphorylation site is **Ser-372** (required for AMPK-dependent inhibition of proteolytic processing; mutation S372A abolishes AMPK-mediated suppression). SREBP-2 is also a direct AMPK substrate (shown by in vitro kinase assay with recombinant AMPK and GST-SREBP-2) but the equivalent conserved site on SREBP-2 is not explicitly numbered in Li 2011; it is likely the conserved serine in the equivalent N-terminal position given the shared substrate motif [^li2011]. This places SREBP-2 downstream of the cellular energy sensor [[ampk]] (activated by ↑AMP:ATP ratio, metformin, caloric restriction). AMPK activation thus reduces both cholesterol biosynthesis and LDLR expression; the net metabolic effect is a shift away from anabolic lipid synthesis under energy stress.

Importantly, AMPK activation also inhibits HMGCR (the statin target) via direct phosphorylation of a distinct site — so AMPK suppresses cholesterol synthesis via *two* mechanisms simultaneously: (1) SREBP-2 phosphorylation → ↓ LDLR/HMGCR transcription; (2) HMGCR direct phosphorylation → ↓ enzymatic activity.

### Insulin/LXR and SREBP-1c cross-talk

Insulin (via [[insulin-igf1]] → PI3K/AKT → SREBP-1c promoter activation via LXR) primarily drives SREBP-1c-mediated fatty acid synthesis, not SREBP-2. However, high-insulin states (as in insulin resistance/obesity) indirectly promote SREBP-2 activity by: (1) mTORC1 hyperactivation → lipin-1 suppression (above); (2) increased hepatic lipid accumulation → ER stress → SCAP–INSIG regulatory perturbation. #gap/no-mechanism — the specific ER-stress–INSIG connection is incompletely characterized.

## Aging relevance

SREBP-2 occupies a central node in the [[deregulated-nutrient-sensing]] hallmark. The current best-supported model (post Yang 2024 single-nucleus primate liver atlas, [[studies/yang-2023-primate-liver-aging-snrna-srebp2]]) is:

1. **SREBP-2 hyperactivation per hepatocyte with age** — Yang 2024 snRNA-seq of cynomolgus liver across three zonations shows hyperactivated SREBP signaling as a defining feature of the aged hepatocyte transcriptome; forced SREBP2 activation in human primary hepatocytes is sufficient to recapitulate aging phenotypes (impaired detoxification, accelerated senescence) [^yang2024]. This is consistent with the mTORC1 → lipin-1 → SREBP-2 axis ([[mtor]]; Peterson 2011) operating in aged liver, though the mTORC1 *dependency* has not been directly tested in primate-aged tissue (e.g., via rapamycin arm) — see Limitations below.
2. **PCSK9-feedback dominance over LDLR transcriptional drive** — because [[pcsk9]] is co-induced by SREBP-2 (Dubuc 2004, Jeong 2008; SRE in the PCSK9 promoter), SREBP-2 hyperactivation drives *both* LDLR and PCSK9 transcripts up. The protein-level outcome depends on which arm dominates. Plasma PCSK9 protein has been reported to rise with age (Cui 2010 Chinese cohort n=479; Lakoski 2009 Dallas Heart Study n=3138 — pre-2015 anchors; no 2019+ replication in age-stratified healthy cohorts), and the empirically-observed phenotype is net LDLR surface-density decline → reduced plasma LDL clearance → cumulative LDL exposure rises (the Ference 2024 LDL-years framework on [[apob]]).
3. **Bulk vs single-cell discordance — methodological caveat.** GTEx v10 bulk RNA-seq of human liver shows SREBF2 transcript with weak negative trend (Spearman ρ ≈ −0.07, n=262 donors aged 20–79; this wiki, 2026-05-21 query). The discordance with Yang's snRNA-seq hyperactivation is consistent with the canonical cell-composition confound: aged liver has reduced hepatocyte fraction (more immune infiltrate, stellate-cell activation, fibrosis), so per-hepatocyte increases can be diluted out of bulk-tissue measurements. Single-nucleus data is the right instrument for this question; bulk RNA-seq is the wrong instrument.

The pathway also intersects [[chronic-inflammation]]: NLRP3 inflammasome activation (upstream of IL-1β release, a driver of [[chronic-inflammation]]) has been reported to be promoted by SREBP-2 in macrophages within atherosclerotic lesions — distinct from the hepatic LDLR-regulation role [^li2013]. Yang 2024 also reports upregulation of chronic-inflammation–related genes alongside SREBP signaling in aged hepatocytes, suggesting the inflammation–SREBP-2 link may be bidirectional in aging.

The pathway also intersects [[chronic-inflammation]]: NLRP3 inflammasome activation (upstream of IL-1β release, a driver of [[chronic-inflammation]]) has been reported to be promoted by SREBP-2 in macrophages within atherosclerotic lesions — distinct from the hepatic LDLR-regulation role [^li2013]. Whether this represents an aging-amplifying loop is speculative.

## Limitations and gaps

- ✅ **`gtex-aging-correlation:` populated 2026-05-21** — direct GTEx v10 API query (`attributeSubset=ageBracket` parameter on `/expression/geneExpression`) returned per-age-bracket arrays for SREBF2 across multiple tissues. Hepatic SREBF2 ρ = −0.07 (n=262, not significant); pan-tissue weak/null pattern. **The bulk-tissue signal does not match the single-nucleus signal from Yang 2024 (per-hepatocyte SREBP signaling hyperactivated)** — cell-composition confound favors the snRNA result as the true per-hepatocyte direction. See `sops/finding-tissue-expression.md` (updated 2026-05-21) for the `attributeSubset=ageBracket` workflow.
- ⚠️ **Partially resolved (Yang 2024)** — direct demonstration that age-associated SREBP-2 hyperactivation occurs in primate liver is now published (Yang et al. 2024, [[studies/yang-2023-primate-liver-aging-snrna-srebp2]]). What remains untested: (a) mTORC1 *dependency* of the SREBP-2 hyperactivation phenotype in aged primate liver (no rapamycin arm); (b) replication in aged *human* liver biopsies/autopsy — Yang's human work is in primary hepatocytes with forced SREBP2 activation, not aged human tissue.
- `#gap/no-mechanism` — The specific mechanism by which ER stress perturbs INSIG function and thereby dysregulates SREBP-2 in the context of hepatic steatosis is incompletely characterized.
- `#gap/needs-human-replication` — AMPK-mediated direct phosphorylation of SREBP-2 (and SREBP-1c Ser-372) was demonstrated in diet-induced insulin-resistant *LDLR*-deficient mice and in HepG2 cells; the equivalent in vivo human liver data is limited.
- `#gap/not-populated` — `mr-causal-evidence: not-tested` reflects that SREBF2 is not a standard Mendelian randomization instrument target: most MR work for LDL/ApoB uses genome-wide polygenic instruments or LDLR/PCSK9 variants rather than SREBF2 variants. GWAS hits at the SREBF2 locus may exist; an instrument-availability check against the GWAS Catalog has not been done for this page. Populate per `sops/finding-population-evidence.md`.
- `#gap/needs-canonical-id` — GenAge status of SREBF2 was not confirmed via direct API query; a manual lookup at genomics.senescence.info/genes is needed. If listed, populate `genage-id:`.

## Cross-references

- [[ldlr]] — primary SREBP-2 target gene; expression driven by SREBP-2 cleavage
- [[hmgcr]] — rate-limiting cholesterol synthesis enzyme; SREBP-2 transcriptional target and statin target
- [[pcsk9]] — co-induced by SREBP-2; degrades LDLR; feedback brake on LDLR upregulation
- [[apob]] — the LDL particle protein; plasma ApoB is the downstream readout of LDLR-mediated clearance
- [[atherosclerosis]] — disease consequence of impaired LDLR-mediated LDL clearance
- [[mtor]] — mTORC1 phosphorylates lipin-1 to promote SREBP-2 activity
- [[ampk]] — directly phosphorylates SREBP-2 (and SREBP-1c at Ser-372) to suppress cleavage and nuclear translocation
- [[deregulated-nutrient-sensing]] — hallmark in which the mTOR–SREBP-2 axis is embedded
- [[chronic-inflammation]] — downstream consequence; SREBP-2 → PCSK9 excess → ↑ LDL → atherosclerotic plaque → IL-1β/inflammasome
- [[insulin-igf1]] — insulin activates SREBP-1c via LXR; cross-talk with SREBP-2 under insulin resistance
- [[familial-hypercholesterolemia]] — when LDLR is genetically defective, the SREBP-2 → LDLR feedback can't compensate; statins still partially work via residual LDLR upregulation
- [[lipoprotein-metabolism]] — integrated pathway view; SREBP-2 sets the LDLR ceiling for the endogenous-clearance arm

## Footnotes

[^brownGoldstein1997]: doi:10.1016/s0092-8674(00)80213-5 · Brown MS, Goldstein JL · *Cell* 1997 · review · n=not-applicable · model: human cell lines + in-vivo mouse · landmark review establishing the SCAP-mediated proteolytic activation mechanism of SREBPs; local PDF confirmed in archive

[^horton2002]: doi:10.1172/JCI15593 · Horton JD, Goldstein JL, Brown MS · *J Clin Invest* 2002 · review · n=not-applicable · model: human + mouse · comprehensive review of SREBP isoform biology, target genes, and pharmacological implications; 4301 citations; archive status: pending download

[^brownGoldstein2018]: doi:10.1146/annurev-biochem-062917-011852 · Brown MS, Radhakrishnan A, Goldstein JL · *Annu Rev Biochem* 2018 · review · n=not-applicable · definitive retrospective on SCAP's central role in sterol sensing including the MELADL hexapeptide mechanism; 457 citations; archive status: pending download

[^brownGoldstein1999]: doi:10.1073/pnas.96.20.11041 · Brown MS, Goldstein JL · *PNAS* 1999 · review · n=not-applicable · mechanistic overview of the two-protease S1P/S2P pathway; 1317 citations; archive status: not_oa

[^li2011]: doi:10.1016/j.cmet.2011.03.009 · Li Y, Xu S, Mihaylova MM et al. · *Cell Metabolism* 2011 · in-vivo (diet-induced insulin-resistant mice) + in-vitro · AMPK phosphorylates SREBP at Ser-372; inhibits nuclear translocation; reduces hepatic lipogenesis and atherosclerosis; 1692 citations; archive status: pending download

[^mensink2003]: doi:10.1093/ajcn/77.5.1146 · Mensink RP, Zock PL, Kester AD, Katan MB · *Am J Clin Nutr* 2003 · meta-analysis of 60 controlled trials · n=~1000+ subjects across trials · quantifies effects of individual dietary fatty acids and carbohydrates on serum lipids and apolipoproteins; 2767 citations; archive status: pending download

[^jeong2008]: doi:10.1194/jlr.M700443-JLR200 · Jeong HJ, Lee HS, Kim KS et al. · *J Lipid Res* 2008 · in-vitro (HepG2, mouse hepatocytes) · sterol-dependent regulation of PCSK9 promoter via SRE requires SREBP-2; 345 citations; archive status: pending download

[^dubuc2004]: doi:10.1161/01.ATV.0000134621.14315.43 · Dubuc G, Chamberland A, Wassef H et al. · *Arterioscler Thromb Vasc Biol* 2004 · in-vitro + human pharmacology · statins upregulate PCSK9 via SREBP-2-mediated SRE activation; foundational paper establishing the PCSK9–statin paradox; 598 citations; archive status: not_oa

[^peterson2011]: doi:10.1016/j.cell.2011.06.034 · Peterson TR, Sengupta SS, Harris TE et al. · *Cell* 2011 · in-vitro + mouse · mTORC1 phosphorylates and excludes lipin-1 from nucleus, relieving SREBP suppression; rapamycin reverses this; 1170 citations; archive status: pending download

[^masana2021]: doi:10.1016/j.arteri.2021.02.012 · Masana Marín L, Plana Gil N · *Clin Investig Arterioscler* 2021 · review · bempedoic acid mechanism: ACLY inhibition → ↓ acetyl-CoA → ↓ cholesterol synthesis → SREBP-2 activation → ↑ LDLR; archive status: pending download

[^li2013]: doi:10.1371/journal.pone.0067532 · Li Y, Xu S, Jiang B et al. · *PLoS One* 2013 · in-vivo (atherosclerotic diabetic pigs) · SREBP and NLRP3 inflammasome co-activation in atherosclerotic lesions; archive status: not confirmed in archive

[^yang2024]: [[studies/yang-2023-primate-liver-aging-snrna-srebp2]] · doi:10.1093/procel/pwad039 · PMID 37378670 · PMC10833472 · Yang S, Liu C,... Liu GH (Aging Biomarker Consortium) · *Protein & Cell* 2024;15(2):98-120 · in-vivo single-nucleus RNA-seq (cynomolgus monkey liver, multi-age cohort) + in-vitro mechanistic validation (human primary hepatocytes with forced SREBP2 activation) · **SREBP signaling hyperactivated as a hallmark of the aged primate liver across all three hepatocyte zonations; forced SREBP2 activation in human primary hepatocytes is sufficient to recapitulate aging phenotypes (impaired detoxification + accelerated cellular senescence)** · Gold OA via OUP/PMC · ⚠️ abstract-verified 2026-05-21; full PDF read pending — study page is `verified: false`
