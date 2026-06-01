---
type: protein
aliases: [INS, insulin precursor, preproinsulin, proinsulin]
uniprot: P01308
ncbi-gene: 3630
hgnc: 6081
mouse-ortholog: Ins1 / Ins2
ensembl: ENSG00000254647
druggability-tier: 3  # SM:Structure with Ligand only (Open Targets, INS) — peptide hormone, insulin itself is the drug; small-molecule druggability of INS protein is structural-only
caused-by: []
causes: []
key-domains: [signal-peptide, B-chain, C-peptide, A-chain]
key-ptms: [disulfide-bonds-A7-B7, disulfide-bonds-A20-B19, disulfide-A6-A11]
pathways: ["[[insulin-igf1]]", "[[pi3k-akt-pathway]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
sens-categories: []
genage-id: null
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Bluher 2003 (FIRKO lifespan), Holzenberger 2003 (IGF1R+/- lifespan), Suh 2008 (centenarian IGF1R variants), and Goeddel 1979 (recombinant insulin expression) verified against local PDFs. Sanger 1955/Ryle 1955 (disulfide bonds): PDF downloaded is journal index only, article text not accessible — disulfide bond positions consistent with Goeddel 1979 references but not independently confirmed from primary source. Steiner 1967 (proinsulin discovery), Taguchi 2007 (brain Irs2 KO), Kenyon 1993 (daf-2), and Banting 1922 all not_oa — those claims unverifiable against full text. Canonical-database identity fields (UniProt P01308, NCBI Gene 3630, HGNC 6081, Ensembl ENSG00000254647) not independently re-verified against databases."
---

# Insulin (INS)

The canonical anabolic peptide hormone. Synthesized exclusively by pancreatic β-cells and secreted in response to rising blood glucose, insulin drives glucose uptake into muscle and adipose tissue, suppresses hepatic glucose output, and promotes energy storage (glycogen synthesis, lipogenesis). Discovered by Banting & Best 1921–1922 — the first hormone used clinically and still one of the most essential drugs in medicine. Its pathway, the [[insulin-igf1|insulin/IGF-1 signaling (IIS) pathway]], is the most phylogenetically conserved longevity regulator in metazoans.

**Aging relevance:** Insulin sits at the intersection of two distinct aging narratives: (1) **reduced IIS extends lifespan** across model organisms (via FOXO/DAF-16 nuclear activation), making insulin the prototype pro-aging ligand for the somatotropic axis; and (2) **chronic hyperinsulinemia** from insulin resistance and type 2 diabetes accelerates multiple hallmarks of aging. The paradox — insulin is life-saving therapeutically but its excessive activity is pro-aging — makes it a paradigmatic example of antagonistic pleiotropy at the systems level.

## Identity

- **UniProt:** P01308 (INS_HUMAN)
- **NCBI Gene:** 3630
- **HGNC symbol:** INS
- **Chromosome:** 11p15.5
- **Mouse orthologs:** Ins1 (chromosome 19) and Ins2 (chromosome 7) — rodents uniquely have two insulin genes; only Ins2 is expressed in the brain
- **Full-length precursor:** 110 amino acids (preproinsulin)
- **Mature hormone:** 51 amino acids total (A-chain 21 aa + B-chain 30 aa)

## Protein structure and processing

Insulin is synthesized as **preproinsulin** (110 aa) and undergoes three sequential processing steps in the β-cell:

### 1. Signal peptide cleavage (co-translational)
The N-terminal 24-residue signal peptide directs the nascent polypeptide to the endoplasmic reticulum lumen and is cleaved co-translationally, generating **proinsulin** (86 aa).

### 2. Oxidative folding in the ER
Within the ER, proinsulin folds and three disulfide bonds form — a prerequisite for subsequent cleavage and biological activity [^sanger1955]:

| Bond | Chains | Residues (mature numbering) | Type |
|---|---|---|---|
| SS1 | A–B interchain | A7–B7 (Cys to Cys) | Interchain |
| SS2 | A–B interchain | A20–B19 (Cys to Cys) | Interchain |
| SS3 | A intrachain | A6–A11 (Cys to Cys) | Intrachain |

### 3. Proinsulin → mature insulin (Golgi / secretory granules)
Within maturing secretory granules, two endoproteases cleave the connecting C-peptide:
- **PC1/3** (proprotein convertase 1/3) cleaves at the B-chain / C-peptide junction (after Arg31-Arg32)
- **PC2** cleaves at the C-peptide / A-chain junction (after Lys64-Arg65)
- **Carboxypeptidase E (CPE)** trims the exposed basic residues

This releases **C-peptide** (31 residues, including flanking dibasic pairs) and **mature insulin** (51 aa: A-chain 21 aa + B-chain 30 aa, linked by SS1 and SS2). C-peptide is co-secreted equimolar with insulin and serves as a clinical proxy for endogenous insulin secretion (it is not degraded by the liver, unlike insulin).

Proinsulin itself has reduced receptor-binding affinity (~5% of mature insulin) [^steiner1967]. The discovery that insulin is synthesized as a larger precursor was foundational to the biology of secretory protein processing.

## Glucose-stimulated secretion mechanism

β-cells of the pancreatic islets of Langerhans sense systemic glucose through a tightly coupled metabolic-electrophysiological cascade:

1. **Glucose entry via GLUT2** (high-Km transporter in β-cells; passive diffusion proportional to blood glucose)
2. **Glycolysis → pyruvate → oxidative phosphorylation** → ATP synthesis
3. **Rising ATP:ADP ratio** → closure of ATP-sensitive potassium channels (K_ATP channels; KCNJ11/Kir6.2 + ABCC8/SUR1 subunits)
4. **Membrane depolarization** → activation of voltage-gated L-type Ca²⁺ channels (Ca_v1.2/Ca_v1.3)
5. **Cytosolic Ca²⁺ rise** → fusion of insulin secretory granules with the plasma membrane → biphasic insulin secretion

**First-phase secretion** (rapid, 0–10 min): fusion of a readily-releasable pool of docked granules. **Second-phase secretion** (sustained, 10–60+ min): mobilization of a reserve pool requiring granule trafficking. Loss of first-phase secretion is an early diagnostic feature of type 2 diabetes and impaired glucose tolerance. Additional secretagogues: amino acids (arginine, leucine), glucagon-like peptide-1 (GLP-1) via cAMP/PKA amplification, glucose-dependent insulinotropic polypeptide (GIP), acetylcholine (parasympathetic nerve endings).

## Receptor binding and downstream signaling

Insulin binds the **insulin receptor (INSR)** — a homodimeric receptor tyrosine kinase — with high affinity [^bluher2003]. The binding affinity for INSR-B (the isoform predominant in metabolic tissues: liver, muscle, fat) is approximately **0.2 nM K_d**. Insulin also binds IGF-1R (the IGF-1 receptor) but with ~100-fold lower affinity than IGF-1, so physiological insulin concentrations do not significantly activate IGF1R.

Upon insulin binding, INSR autophosphorylates tyrosines in its activation loop (Tyr1158/1162/1163 in the β subunit) and recruits **insulin receptor substrate (IRS) proteins** (IRS-1 and IRS-2 are the primary adapters; IRS-1 dominates in muscle and fat, IRS-2 in liver and brain). IRS proteins activate **PI3K** → **PIP3** → **PDK1** → **AKT** → downstream metabolic outputs:

| AKT substrate | Effect |
|---|---|
| **AS160 (TBC1D4)** | Rab-GAP inactivation → GLUT4 vesicle exocytosis → glucose uptake in muscle/fat |
| **GSK3β** (Ser9) | GSK3β inactivation → glycogen synthase dephosphorylation → glycogen synthesis |
| **FoxO1/3/4** | FOXO cytoplasmic sequestration → suppression of gluconeogenic genes (PEPCK, G6Pase) in liver; suppression of longevity transcription program |
| **TSC2** (Thr1462) | TSC1/TSC2 inactivation → mTORC1 activation → protein synthesis, lipogenesis, suppressed autophagy |
| **PDE3B** | Phosphodiesterase activation → cAMP ↓ → PKA ↓ → HSL inactivation → anti-lipolytic effect in adipose |

See [[insr]] for the full receptor-level biology, and [[pi3k-akt-pathway]] for the intracellular cascade.

## Role in aging

### 1. Reduced IIS extends lifespan — the ligand side

Because [[insulin]] is the primary activating ligand for the IIS pathway, reducing insulin signaling (genetically or through dietary interventions) recapitulates the longevity benefits of reduced IIS seen across model organisms. The founding longevity results in [[caenorhabditis-elegans]] (daf-2/DAF-16 axis, Kenyon 1993 [^kenyon1993_ref]) and their extrapolation to mammals depend on this ligand-receptor-FOXO axis.

In **fat-specific insulin receptor knockout (FIRKO) mice** (adipose-specific deletion of *Insr*), Bluher et al. 2003 showed ~18% mean lifespan extension (134 days; from 753 to 887 days) in both sexes on a mixed genetic background [^bluher2003]. FIRKO mice were lean with reduced adiposity (50–70% reduction in fat mass), and the lifespan extension was associated with reduced circulating insulin and improved metabolic parameters. This demonstrates that blunting insulin action specifically in adipose — not just globally reducing all IIS — is sufficient for lifespan extension, implicating adipose insulin signaling as a node for aging regulation.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (IIS reduction → longevity) conserved in humans? | partial — FOXO3 SNPs associated with exceptional longevity (Willcox 2008 — see [[molecules/proteins/foxo3]]); IGF1R function-reducing variants overrepresented in centenarians (Suh 2008 [^suh2008]); direct evidence for reduced IIS being sufficient for longevity not established |
| Replicated in humans? | no — pharmacological reduction of IIS in healthy humans is not feasible; genetic evidence correlational only |

### 2. Chronic hyperinsulinemia as a pro-aging factor

In **insulin resistance** and [[type-2-diabetes]], the feedback failure of normal IIS regulation produces a state of chronic hyperinsulinemia (elevated insulin despite elevated glucose). This is now recognized as a direct driver of several aging hallmarks:

- **mTORC1 hyperactivation** — chronic insulin → AKT → TSC2 inhibition → constitutive mTORC1 activity → suppressed autophagy, elevated lipogenesis, impaired proteostasis. The same pro-aging mTOR signaling that rapamycin attenuates is driven upstream by chronic insulin (see [[mtor]]). #gap/needs-replication
- **Accelerated cellular senescence** — hyperinsulinemia in adipose promotes accumulation of senescent cells through PI3K-AKT-mediated bypass of normal cell-cycle arrest checkpoints. #gap/unsourced
- **Inflammaging amplification** — insulin resistance drives chronic low-grade inflammation via NF-κB, IL-6, TNF-α; the SASP from senescent adipocytes further worsens insulin resistance in a feed-forward loop (see [[nf-kb]], [[sasp]])
- **Impaired FOXO activity** — chronically suppressed FOXO prevents the stress-resistance transcriptional program that underlies IIS-mediated longevity

**The IIS-aging paradox:** Reduced IIS extends lifespan in model organisms, but complete loss of insulin action causes fatal diabetic ketoacidosis. The longevity-beneficial state is partial, tissue-specific reduction in IIS (especially in adipose and brain) — not wholesale elimination. Centenarian IGF-1 data (Suh 2008 [^suh2008]) show **elevated** IGF-1 with reduced receptor signaling efficiency in females (heterozygous *IGF1R* function-reducing variants), suggesting that the protective state in humans involves maintained IGF-1 but attenuated receptor-level transduction — not simply low ligand concentration.

### 3. Brain insulin / IRS-2 signaling

IRS-2 is the dominant adapter in the brain. Taguchi et al. 2007 demonstrated that **brain-specific *Irs2* knockout mice** lived up to ~18% longer despite being overweight and hyperinsulinemic at 22 months [^taguchi2007]. This dissociation — peripheral insulin resistance (overweight, hyperinsulinemic) combined with extended lifespan — underscores that the longevity effect of reduced IIS is mediated primarily through neural circuits and FOXO/stress-resistance programs, not through metabolic normalization per se. The brain IRS-2 axis controls meal-induced hypothalamic oxidative stress, and attenuating it via reduced IRS-2 signaling protects against age-related neuronal dysfunction.

### 4. Distinction from the GH/IGF-1 axis

Insulin and IGF-1 signal through overlapping but distinct receptor systems. Most mammalian longevity models (Ames dwarf, Snell dwarf, GHR knockout) involve the GH → IGF-1 axis, not insulin itself. For the aging wiki's purposes:

- **Insulin → INSR-B** (metabolic tissues: liver, muscle, fat; some brain)
- **IGF-1 → IGF1R** (growth/proliferative tissues, brain; also cross-activates INSR at supraphysiological doses)
- The somatotropic axis (GH → IGF-1 → IGF1R) is the primary longevity axis in mammals; insulin's role is secondary — through its modulation of the shared AKT-FOXO intracellular arm
- Holzenberger 2003 (IGF1R+/- lifespan extension [^holzenberger2003]) is about *IGF1R*, not the insulin receptor — see [[insr]] and [[igf1r]] for the receptor-level distinction

## Pharmacology and therapeutic history

Insulin is one of the most medically important proteins ever characterized. Its therapeutic history spans a century and tracks closely with the history of recombinant DNA biotechnology.

| Milestone | Year | Reference |
|---|---|---|
| Isolation from dog pancreas (bovine/porcine); first human use | 1921–1922 | Banting & Best [^banting1922] |
| Complete amino acid sequence — first protein sequenced (Nobel Prize 1958) | 1955 | Sanger (Biochem J) [^sanger1955] |
| Proinsulin discovered — insulin synthesized as a larger precursor | 1967 | Steiner et al. [^steiner1967] |
| Recombinant human insulin from *E. coli* (chemically synthesized gene) — first recombinant DNA drug | 1979 (published); FDA approved 1982 | Goeddel et al. [^goeddel1979] |
| Rapid-acting analogues (lispro B28Pro→Lys / B29Lys→Pro swap) | 1996 (lispro FDA) | — |
| Long-acting analogues (glargine: A21Gly + B31/B32 Arg additions) | 2000 (glargine FDA) | — |
| Ultra-long analogues (degludec: forms hexamer depots; t₁/₂ ~25h) | 2015 (US FDA) | — |

**Analogue design principles:** Native insulin has a biphasic PK profile poorly matched to meal kinetics. Analogues alter self-association behavior:
- **Rapid-acting** (lispro, aspart, glulisine): disrupts hexamer formation → faster absorption as monomers
- **Long-acting** (glargine, detemir, degludec): extends depot formation → sustained basal delivery, lower peak

**Recombinant production:** The Goeddel 1979 paper used two chemically synthesized ~50-nt genes (one encoding the A-chain, one the B-chain), each expressed separately in *E. coli* as fusion proteins with β-galactosidase, then cleaved and the chains combined with oxidative refolding. This strategy was superseded by proinsulin expression + in-vitro folding and cleavage, which is the basis of all current commercial production [^goeddel1979].

## Disease associations

| Disease | OMIM / mechanism |
|---|---|
| Type 1 diabetes | Autoimmune β-cell destruction → absolute insulin deficiency |
| Type 2 diabetes | Progressive β-cell failure on background of insulin resistance → relative deficiency |
| Permanent neonatal diabetes mellitus 4 (PNDM4) | INS loss-of-function mutations |
| Maturity-onset diabetes of the young 10 (MODY10) | INS missense variants |
| Hyperproinsulinemia | PC1/3 or CPE cleavage defects → proinsulin accumulation |
| Insulinoma | Pancreatic β-cell tumor → unregulated hypersecretion |

## Pathway membership

- [[insulin-igf1]] — insulin is the primary activating ligand (see that page for cross-organism longevity data)
- [[pi3k-akt-pathway]] — IRS→PI3K→AKT cascade downstream of INSR
- [[mtor]] — AKT→TSC2→RHEB→mTORC1 branch; connects insulin to protein synthesis and autophagy suppression

## Key interactors

- [[insr]] — primary receptor; parallel R7b page
- [[igf1r]] — cross-binds at supraphysiological insulin concentrations; ~100× lower affinity
- [[irs1]] / [[irs2]] — adapter proteins that bridge INSR to PI3K; IRS-2 is key in brain
- [[pi3k]] — catalytic p110 activated by IRS-pY → PIP3 generation
- [[akt]] — central effector kinase
- [[foxo-transcription-factors]] — suppressed by AKT phosphorylation; disinhibition is the longevity mechanism
- [[glut4]] — translocated to the plasma membrane downstream of AKT→AS160
- [[pcsk1]] / [[pcsk2]] (PC1/3, PC2) — proinsulin processing proteases in β-cells
- [[glp1r]] — GLP-1 receptor amplifies GSIS via cAMP; target of GLP-1 agonist drugs

## Limitations and gaps

- **FIRKO lifespan data:** the ~18% extension in Bluher 2003 is in a specific genetic background and body-composition context; whether selective fat-INSR attenuation extends human lifespan is unknown. #gap/needs-human-replication
- **Human hyperinsulinemia → accelerated aging:** the mechanistic link is well-supported in cell and animal models, but direct causal evidence in humans (i.e., that lowering insulin per se, independent of glucose normalization, slows aging) is absent. #gap/no-mechanism
- **Brain insulin resistance and neurodegeneration:** impaired brain insulin signaling is increasingly linked to Alzheimer's disease (sometimes called "type 3 diabetes"), but the causal direction and precise mechanisms remain contested. See [[alzheimers-disease]] (planned). #gap/contradictory-evidence
- **Centenarian IGF-1 paradox:** Suh 2008 shows female Ashkenazi Jewish centenarians have elevated IGF-1 but attenuated IGF1R signaling — the protective mutation is in the receptor, not reduced ligand production. This complicates simple "low IGF-1 = longevity" framings. #gap/contradictory-evidence
- **Insulin gene ID disambiguation:** `ENSG00000254647` is the Ensembl gene for INS on chromosome 11; do not confuse with INS-IGF2 read-through transcript (ENSG00000129965). #gap/needs-canonical-id (Ensembl ID not independently cross-verified)
- **GenAge entry:** insulin (INS) does not have a dedicated GenAge entry because it is primarily classified as a ligand rather than a longevity gene per se; the longevity effects are attributed to receptor/adapter nodes (IGF1R, IRS-2, FOXO). The `genage-id: null` in frontmatter reflects this.

## Footnotes

[^steiner1967]: doi:10.1126/science.157.3789.697 · Steiner DF et al. (1967) Science 157:697 · in-vitro (bovine pancreas) · model: isolation of proinsulin from bovine pancreas; 702 citations; archive: not_oa

[^sanger1955]: doi:10.1042/bj0600541 · Ryle AP, Sanger F, Smith LF & Kitai R (1955) Biochem J 60:541 · biochemical characterization · model: bovine insulin · disulfide bond positions and arrangement; archive: downloaded (bronze OA via Portland Press; PDF is journal index volume — article text not confirmed; #gap/no-fulltext-access for body text verification)

[^goeddel1979]: doi:10.1073/pnas.76.1.106 · Goeddel DV et al. (1979) PNAS 76:106 · in-vitro (recombinant *E. coli*) · model: chemically synthesized insulin A- and B-chain genes expressed in bacteria; 850 citations; archive: downloaded (green OA via PMC:PMC382885; local PDF available)

[^banting1922]: doi:10.1152/ajplegacy.1922.62.1.162 · Banting FG & Best CH (1922) Am J Physiol 62:162 · in-vivo · model: depancreatized dog; effect of pancreatic extracts on blood glucose; historical; archive: not_oa

[^holzenberger2003]: doi:10.1038/nature01298 · Holzenberger M et al. (2003) Nature 421:182 · in-vivo (mouse, Igf1r+/-) · n=cohort 1: 32 Igf1r+/- + 33 WT (lifespan); cohort 2: metabolic/blood; cohort 3: growth/oxidative stress · p<0.02 (Cox) · model: 129/Sv background; 26% longer mean lifespan overall; females: +33% (p<0.001); males: +15.9% (NS); archive: downloaded (local PDF available)

[^bluher2003]: doi:10.1126/science.1078223 · Bluher M et al. (2003) Science 299:572 · in-vivo (mouse, fat-specific Insr KO) · n=250 total (two independent founder lines; line 1 n=131, line 2 n=119) · model: mixed genetic background FIRKO mice; mean lifespan +134 days (+18%; 753→887 days); median lifespan +3.5 months (30→33.5 months); maximum lifespan +5 months; lean (50–70% reduced fat mass), normal food intake; reduced circulating insulin; archive: downloaded (local PDF available)

[^taguchi2007]: doi:10.1126/science.1142179 · Taguchi A, Wartschow LM, White MF (2007) Science 317:369 · in-vivo (mouse, brain-specific Irs2 KO) · n=mixed cohorts · model: mixed background; up to ~18% lifespan extension females; overweight, hyperinsulinemic, glucose-intolerant; archive: not_oa #gap/no-fulltext-access

[^suh2008]: doi:10.1073/pnas.0705467105 · Suh Y et al. (2008) PNAS 105:3438 · observational (human cohort) · n=79 female centenarians + 161 controls (Ashkenazi Jewish) · model: centenarian IGF1R variant carriers; heterozygous IGF1R missense (Ala37Thr, Arg407His); elevated IGF-1 levels; reduced AKT phosphorylation in lymphocytes; archive: downloaded (local PDF available)

[^kenyon1993_ref]: doi:10.1038/366461a0 · Kenyon C et al. (1993) Nature 366:461 · in-vivo (C. elegans) · model: daf-2 lf; ~2× lifespan; 3379 citations; archive: not_oa
