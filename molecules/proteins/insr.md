---
type: protein
aliases: [Insulin receptor, IR, CD220, INSR-A, INSR-B, HIR]
uniprot: P06213
ncbi-gene: 3643
hgnc: 6091
mouse-ortholog: Insr
ensembl: ENSG00000171105
druggability-tier: 1  # SM:Advanced Clinical + OC:Approved Drug + High-Quality Pocket + Druggable Family (Open Targets, INSR)
caused-by: []
causes: []
key-domains: [L1-leucine-rich, cysteine-rich, L2-leucine-rich, FN-III-1, FN-III-2, FN-III-3, transmembrane, kinase]
key-ptms: [activation-loop-Tyr-autophosphorylation, Tyr999-substrate-docking]
pathways: ["[[insulin-igf1]]", "[[pi3k-akt-pathway]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
sens-categories: []
known-interactors: ["[[irs1]]", "[[irs2]]", "[[igf1r]]", "[[pi3k]]", "[[akt]]", "[[shc1]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Ullrich 1985, Accili 1996, Brüning 1998, Blüher 2003, Frasca 1999, Nakae 2002 verified against primary source PDFs. Brüning 2000 (NIRKO) and Belfiore 2009 not_oa — claims from those sources not independently verified. Canonical-database identity fields (UniProt accession, NCBI Gene, HGNC, Ensembl) not re-verified against live databases. Activation loop Tyr numbering (#gap/needs-canonical-id) not resolved — requires Ebina 1985 or Hubbard 1994 structural paper."
---


# INSR (Insulin Receptor)

The **insulin receptor** (INSR; CD220) is the obligate entry point for insulin signaling in all metabolically relevant tissues. As a receptor tyrosine kinase of the [[insulin-igf1|IIS pathway]], it couples circulating insulin levels to intracellular PI3K–AKT activation, suppressing [[foxo1]]-driven gluconeogenesis in liver and promoting glucose uptake in muscle and fat. Two splice isoforms (INSR-A and INSR-B) differ by 12 amino acids encoded by exon 11, conferring distinct ligand selectivity and tissue distributions with aging and disease relevance. INSR is centrally implicated in the [[deregulated-nutrient-sensing]] hallmark of aging: chronic hyperinsulinemia in old age, combined with progressive insulin resistance in metabolic tissues, creates a pathological feed-forward loop that contributes to [[sarcopenia]], [[type-2-diabetes]], and cardiovascular risk.

## Identity

- **UniProt:** P06213 (INSR_HUMAN) · reviewed (Swiss-Prot)
- **NCBI Gene:** 3643
- **HGNC symbol:** INSR
- **Ensembl:** ENSG00000171105
- **Mouse ortholog:** Insr (one-to-one; high conservation in kinase domain)
- **Length:** 1,370 amino acids (precursor; signal peptide residues 1–27 cleaved co-translationally) [^ullrich1985]
- **Mature form:** α₂β₂ disulfide-linked heterotetramer; α subunit residues 28–758 (extracellular ligand-binding), β subunit residues 763–1370 (including transmembrane ~918–940 and kinase domain in cytoplasmic tail) [^ullrich1985]

## Splice isoforms: INSR-A vs INSR-B

The canonical pre-mRNA contains 22 exons. Alternative splicing of **exon 11** (36 nucleotides, encoding 12 amino acids at residues 718–729 of the α subunit C-terminus) produces two functionally distinct isoforms [^ullrich1985][^frasca1999]:

| Feature | INSR-A (short; HIR-A) | INSR-B (long; HIR-B) |
|---|---|---|
| Exon 11 | Excluded | Included |
| Insulin EC50 (autophosphorylation) | ~0.8–0.9 nM | ~0.7–1.0 nM |
| IGF-2 EC50 (autophosphorylation) | ~3 nM | >30 nM (very low) |
| IGF-1 affinity | ~10× weaker than insulin | ~20× weaker than insulin |
| Dominant expression | Fetal tissues; hematopoietic cells; certain cancers | Adult metabolic tissues (liver, muscle, adipose) |
| Mitogenic vs metabolic bias | More mitogenic | More metabolic |

INSR-A is the fetal isoform; its ability to bind IGF-2 with relatively high affinity (compared to INSR-B) allows fetal growth signaling before the IGF-1 system is fully operative [^frasca1999]. Re-expression of INSR-A is observed in many human cancers and is believed to confer sensitivity to autocrine/paracrine IGF-2 loops #gap/needs-replication.

In aging, the shift of the INSR-A:INSR-B ratio toward INSR-A in some tissues has been reported but is insufficiently characterized at the mechanistic level #gap/unsourced.

## Domain organization

Signal peptide (1–27) is cleaved; the precursor undergoes proteolytic processing at a furin site between the α and β chains (residues ~759–762), with disulfide bonds linking two αβ units into the mature α₂β₂ heterotetramer. Key extracellular domains:

- **L1 (leucine-rich 1):** primary insulin-binding surface
- **Cysteine-rich (CR) domain:** contributes to insulin contacts
- **L2 (leucine-rich 2)**
- **Fibronectin type-III repeats (FN-III-1, -2, -3):** provide stalk structure; FN-III-2/3 junction contains the α/β cleavage site and ID insert

The β subunit spans the membrane once (~918–940 per Ullrich 1985) and carries:

- **Juxtamembrane domain** — docking surface for IRS proteins and other substrates
- **Kinase domain** — catalytic tyrosine kinase; DFG motif activation loop contains the tri-tyrosine autophosphorylation cluster (exact residue coordinates per precursor numbering require verification against Hubbard 1994 crystal structure) #gap/needs-canonical-id
- **C-terminal tail** — additional regulatory phosphosites

## Activation mechanism

In the basal (unoccupied) state, the kinase domain is maintained in a low-activity conformation with the activation loop "occluding" the substrate-binding cleft [^ullrich1985]. Insulin binding to the extracellular α subunit induces conformational changes transmitted through the single-pass transmembrane β subunit:

1. Trans-autophosphorylation of three tyrosines in the activation loop releases the activation loop, opening the active site. Residue numbers vary by publication and numbering convention (precursor vs. mature β-subunit context); commonly cited as Tyr1158/Tyr1162/Tyr1163 or Tyr1158/Tyr1162 depending on the source. Precise coordinates remain flagged pending verification against structural data (Hubbard 1994 crystal structure, PDB 1IRK). #gap/needs-canonical-id
2. **Tyr999** (juxtamembrane) phosphorylation creates an SH2-binding motif that recruits IRS-1, IRS-2, SHC1, and STAT5B.
3. Phosphorylated IRS-1/2 dock the **PI3K** regulatory subunit (p85/p85β/p55), recruiting the p110 catalytic subunit to the membrane.
4. PI3K generates PIP3, which recruits [[akt]] via its PH domain for activation by [[pdk1]] (Thr308) and mTORC2 (Ser473).

> **Note on Tyr numbering:** The activation loop tri-tyrosine cluster is variously cited as Tyr1158/1162/1163 or Tyr1158/1162 depending on whether the numbering follows the 1,370-aa precursor (Ullrich 1985), the mature α+β-subunit context, or UniProt canonical numbering. This should be resolved against Hubbard 1994 (PDB 1IRK) on next lint pass. #gap/needs-canonical-id

## IRS substrate phosphorylation

Activated INSR phosphorylates IRS-1 and IRS-2 on **YxxM** tyrosine motifs, which serve as high-affinity docking sites for the p85 SH2 domain of PI3K. IRS-1 is dominant in muscle and adipose; IRS-2 is dominant in liver and β-cells. Both converge on PI3K → AKT → FOXO/mTOR.

Negative feedback: [[mtor|mTORC1]]-activated **S6K1** phosphorylates IRS-1 on multiple serine residues (including Ser307, Ser636/Ser639), which desensitizes IRS-1 to receptor-mediated tyrosine phosphorylation. This mTORC1-S6K1 → IRS-1 serine phosphorylation loop is a major contributor to chronic insulin resistance under nutrient-overload conditions. #gap/unsourced — citation needed (Um et al. 2004 Science or Harrington et al. 2004 Nat Cell Biol are primary sources for this mechanism; Nakae 2002 does not address S6K1/mTOR) #gap/needs-replication (specific serine sites and quantitative impact vary across studies)

## INSR/IGF1R hybrid receptors

In tissues that co-express both INSR and [[igf1r]], the two receptor types can combine during disulfide bonding to form **INSR/IGF1R hybrid receptors** — heterodimeric αβ–αβ tetramers consisting of one INSR αβ half and one IGF1R αβ half [^belfiore2009]. Hybrids:

- Bind IGF-1 with high affinity (similar to IGF1R homodimer), but insulin with lower affinity than INSR homodimer
- Are abundant in muscle, fat, brain, and heart — tissues with high co-expression of both receptors
- May contribute to the "IGF-1-like" mitogenic and anabolic effects observed in some insulin-stimulated tissues at physiological concentrations #gap/no-mechanism

The ratio of INSR homodimer : hybrid : IGF1R homodimer changes with age and in insulin-resistant states #gap/unsourced.

## Tissue-specific knockout phenotypes

A series of tissue-specific Cre-mediated knockout studies from the Kahn laboratory defined organ-specific roles:

### Whole-body Insr knockout (Accili 1996)

Homozygous *Insr*-null mice die **within 48–72 hours of birth** from diabetic ketoacidosis (plasma glucose 24–37 mmol/l; urinary acetoacetate 8–16 mmol/l) [^accili1996]. Anatomical and histopathological examination found no major structural abnormalities other than marked fatty degeneration of the liver, indicating that metabolic derangement — not organ malformation — is the cause of death. Heterozygous (*Insr*+/−) mice are viable and show **normal glucose tolerance** on intraperitoneal glucose tolerance testing, though the mixed genetic background (129/Sv × C57Bl6) of the colony complicates detection of subtle insulin resistance. This establishes INSR as essential for postnatal metabolic homeostasis.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes — see Donohue syndrome / Rabson-Mendenhall syndrome (INSR loss-of-function) |
| Replicated in humans? | yes (naturally occurring INSR mutations; see Pharmacology section) |

### Muscle-specific Insr knockout (MIRKO; Brüning 1998)

Deletion of *Insr* selectively in skeletal muscle using Mck-Cre resulted in **>95% reduction** in muscle insulin receptor expression (reduced by 95% in pooled hindlimb muscle; 90–99% in individual muscles including quadriceps, gastrocnemius, gluteus, soleus, EDL, triceps, and pectoralis) [^bruning1998]. Unexpectedly, MIRKO mice maintained **normal fasting blood glucose and glucose tolerance** (tested up to 11 months), but showed markedly elevated serum triglycerides (~70% elevated; p<0.01), elevated serum free fatty acids (~20% elevated; p<0.05), and increased epididymal fat pad mass (~40% increase; p=0.02) — a metabolic syndrome-like phenotype without overt diabetes. This demonstrated that skeletal muscle is not the primary tissue for insulin-regulated glucose disposal under standard conditions, shifting focus to liver and adipose.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial — muscle insulin resistance exists in human T2D, but whether isolated muscle Insr loss phenocopies MIRKO metabolic syndrome is unknown |
| Replicated in humans? | no |

#gap/needs-human-replication

> **Note on aging context:** The user brief states that muscle-specific Insr deletion "reduces age-related skeletal muscle decline." The Brüning 1998 MIRKO paper does not contain aging or lifespan data — it was a metabolic characterization study in young mice. Claims about MIRKO mice and aging phenotypes may derive from later studies not yet captured here. #gap/needs-replication #gap/unsourced — pending citation identification by wiki-verifier.

### Brain-specific Insr knockout (NIRKO; Brüning 2000)

Deletion of *Insr* in neurons and glia using Nestin-Cre produced mice with **diet-sensitive obesity**, elevated triglycerides, and reproductive dysfunction (impaired LH pulsatility), establishing hypothalamic INSR as a key regulator of energy balance and reproduction [^bruning2000]. NIRKO mice also showed mild peripheral insulin resistance. This placed the brain as a central site of insulin action beyond glucose homeostasis.

### Fat-specific Insr knockout (FIRKO; Blüher 2003)

Deletion of *Insr* selectively in adipose tissue using aP2-Cre produced the most striking aging phenotype in the Kahn series: FIRKO mice were **protected against age-related obesity** despite normal food intake, showed preserved insulin sensitivity in old age, and had a **~18% increase in mean lifespan** (~134 additional days; parallel increases in median and maximum lifespan) [^bluher2003]. This was one of the first demonstrations that reducing fat-specific insulin signaling — not caloric restriction — is sufficient to extend lifespan in mice.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial — genetic INSR variants are associated with metabolic phenotypes; no human equivalent of fat-specific Insr deletion |
| Replicated in humans? | no |

#gap/needs-human-replication — The FIRKO lifespan extension has not been independently replicated in a second laboratory or strain background to our knowledge.

## FOXO1-mediated derepression of hepatic gluconeogenesis

In the fasting (low insulin) state, INSR activation is minimal; AKT is inactive; FOXO1 is dephosphorylated and accumulates in the nucleus, where it drives transcription of gluconeogenic genes including *PEPCK* (*PCK1*) and *glucose-6-phosphatase* (*G6PC*). This is the canonical "hepatic glucose production" axis [^nakae2002]:

```
Fasting → low insulin → inactive INSR → inactive AKT →
FOXO1 dephosphorylated → nuclear → PEPCK + G6PC transcription → hepatic glucose output ↑

Fed → insulin → INSR → AKT → FOXO1 Thr32/Ser253/Ser315 phosphorylation →
14-3-3 binding → cytoplasmic sequestration → gluconeogenesis suppressed
```

In hepatic insulin resistance (common in aging and T2D), this suppression is impaired: despite hyperinsulinemia, FOXO1 fails to fully translocate, and hepatic glucose output remains inappropriately elevated — contributing to fasting hyperglycemia.

Nakae et al. 2002 showed in *Insr*+/− *Foxo1*+/− double-heterozygous mice that partial FOXO1 reduction rescued hyperglycemia (glucose reduced ~25%, p<0.005 by ANOVA) and improved β-cell area and function compared to *Insr*+/− single heterozygotes, providing the first direct genetic evidence for FOXO1 as the key hepatic effector of INSR → AKT signaling [^nakae2002]. The rescue was associated with reduced hepatic *G6pc* and *Pck1* mRNA expression. A complementary gain-of-function experiment using liver- and pancreatic-β-cell-targeted constitutively active Foxo1 (Foxo1S253A, TTR promoter) caused frank diabetes by both increasing hepatic glucose production and impairing β-cell compensation via suppression of *Pdx1*.

## INSR in aging

### Insulin resistance as a hallmark feature

Insulin resistance — defined operationally as impaired glucose disposal at a given insulin concentration — accumulates progressively with age across metabolic tissues (muscle, liver, adipose) [^belfiore2009]. Contributing mechanisms include:

- Ectopic lipid accumulation in muscle and liver → DAG/ceramide-mediated IRS-1 serine phosphorylation → reduced INSR→IRS signaling
- [[chronic-inflammation|Chronic low-grade inflammation]] (inflammaging) → TNF-α, IL-1β, and IL-6 activating JNK/IKKβ → IRS-1 inhibitory serine phosphorylation
- [[mitochondrial-dysfunction|Mitochondrial dysfunction]] in aged muscle → impaired oxidative phosphorylation → lipid oversupply
- Accumulation of reactive oxygen species (ROS) → oxidative modifications of IRS-1 and PI3K subunits
- Reduced INSR expression in aged tissue (evidence mixed; #gap/contradictory-evidence)

These defects form positive feedback loops: elevated basal insulin (compensating for resistance) chronically activates the mTORC1-S6K1→IRS serine phosphorylation axis, worsening resistance.

### INSR/IGF-1R signaling and longevity

Reduced IIS — including reduced INSR signaling — extends lifespan in every major model organism tested. The FIRKO mouse result (adipose-specific Insr deletion → +18% lifespan) is a mechanistic demonstration in mammals [^bluher2003]. The broader picture, covered in [[insulin-igf1]], is that partial reduction in IIS (not complete elimination) appears longevity-promoting, likely by shifting cells toward a stress-resistant, FOXO-active, autophagic state.

> **Distinction from Laron syndrome:** Laron syndrome (severe short stature, IGF-1 deficiency) is caused by loss-of-function mutations in the **growth hormone receptor** (GHR), not INSR. Laron patients have been studied for cancer incidence and other aging phenotypes (Guevara-Aguirre et al.) but do not represent INSR dysfunction. Do not conflate with INSR-related syndromes.

## INSR-related disease syndromes

Three rare human syndromes arise from severe INSR loss-of-function mutations (autosomal recessive or compound heterozygous):

| Syndrome | Severity | Key features |
|---|---|---|
| **Donohue syndrome** (leprechaunism) | Severe | Neonatal onset; extreme insulin resistance; intrauterine growth restriction; dysmorphic features; often fatal in infancy |
| **Rabson-Mendenhall syndrome** | Moderate-severe | Childhood onset; acanthosis nigricans; dental/nail abnormalities; longer survival than Donohue |
| **Type A insulin resistance** | Mild | Adolescent females; acanthosis nigricans; hyperandrogenism; preserved fertility; no dysmorphic features |

These syndromes confirm that INSR-mediated signaling is not simply redundant with IGF1R in humans, and that INSR activity is required for normal postnatal metabolic homeostasis — paralleling the Accili 1996 mouse KO.

## Pharmacology and therapeutic context

INSR is the ultimate target of **insulin therapy** in type 1 and type 2 diabetes — not by modulating the receptor per se, but by supplying the ligand. Engineered insulin analogs (lispro, aspart, glargine, degludec) are optimized for PK profiles relative to endogenous insulin but act through INSR.

**Metformin** acts indirectly on insulin sensitivity: its primary mechanism is inhibition of mitochondrial complex I → reduction in cellular ATP/ADP ratio → AMPK activation → hepatic glucose production suppression. INSR downstream signaling is improved, but INSR itself is not a direct metformin target [^nakae2002]. (See [[ampk]] for full metformin mechanism.)

**Insulin-sensitizing thiazolidinediones** (e.g., pioglitazone) act via PPARγ in adipose, improving fatty acid handling and reducing lipid-driven IRS serine phosphorylation. INSR expression may be modestly upregulated. #gap/unsourced

INSR is **not** a current validated target for direct anti-aging pharmacology, though it is a biomarker node in interventions that modulate IIS (caloric restriction, [[rapamycin]], [[metformin]]). Ongoing work in translating FIRKO-like selective adipose IIS reduction to humans is preclinical.

## Pathway membership

- [[insulin-igf1]] — INSR is the upstream receptor node; full pathway context there
- [[pi3k-akt-pathway]] — INSR→IRS1/2→PI3K is the canonical IRS-PI3K link
- [[foxo1]] — primary nuclear transcriptional target of INSR→AKT inhibitory axis in liver
- [[mtor]] — indirect downstream (via AKT→TSC2→RHEB→mTORC1)
- [[ampk]] — antagonistic in liver and muscle; both pathways regulate glucose homeostasis inversely

## Key interactors

- [[irs1]] / [[irs2]] — primary substrates; scaffold for PI3K recruitment
- [[igf1r]] — forms hybrid receptors in co-expressing tissues; shares ~84% kinase domain identity
- [[pi3k]] — p85/p110 heterodimer; recruited via IRS-1 pYxxM motifs
- [[shc1]] — alternative docking partner at Tyr999; routes to MAPK/ERK (mitogenic output)
- [[grb2]] / [[sos]] — via SHC; RAS→MAPK branch of insulin signaling (not shown in main cascade)

## Limitations and knowledge gaps

- **Activation loop Tyr numbering** — precursor length is 1,370 aa (Ullrich 1985), not 1,382. Tyr coordinates in the activation loop (commonly cited as Tyr1158/Tyr1162/Tyr1163 in some literature) need resolution against the Hubbard 1994 crystal structure (PDB 1IRK) and UniProt P06213 canonical positions. The C-terminal phosphosite coordinates (previously listed as Tyr1185/1189/1190) also require re-verification with the corrected precursor length. #gap/needs-canonical-id
- **INSR expression in aged human tissues** — whether INSR protein levels decline with age in muscle, liver, or adipose is inconsistently reported across studies. #gap/contradictory-evidence
- **Muscle INSR deletion + aging phenotype** — claims that MIRKO mice show reduced age-related skeletal muscle decline require a primary citation not identified here. #gap/unsourced
- **INSR-A:INSR-B isoform ratio in aged tissue** — the aging-related shift in splice isoform balance is not well characterized. #gap/unsourced
- **Human replication of FIRKO lifespan result** — adipose-specific insulin receptor reduction as a longevity strategy has no human-equivalent genetic evidence. #gap/needs-human-replication
- **Hybrid receptor aging dynamics** — how INSR/IGF1R hybrid receptor abundance changes with age-related changes in INSR and IGF1R expression is not characterized. #gap/long-term-unknown

## Footnotes

[^ullrich1985]: doi:10.1038/313756a0 · [[studies/ullrich-1985-insulin-receptor-tyrosine-kinase]] · in-vitro (molecular cloning, structural analysis) · model: human liver cDNA library + amino acid sequence; first complete primary structure of human INSR; demonstrated relationship to tyrosine kinase oncogene family · downloaded

[^accili1996]: doi:10.1038/ng0196-106 · [[studies/accili-1996-insr-knockout-neonatal-lethal]] · in-vivo · model: Insr-null mice (129/Sv × C57Bl6 mixed background); homozygotes die 48–72 h post-natally from diabetic ketoacidosis (plasma glucose 24–37 mmol/l; urinary acetoacetate 8–16 mmol/l); marked fatty liver but no major structural organ abnormalities; heterozygotes viable with normal glucose tolerance on IPGTT · downloaded

[^bruning1998]: doi:10.1016/s1097-2765(00)80155-0 · [[studies/bruning-1998-mirko-muscle-insulin-receptor]] · in-vivo · model: muscle-specific Insr knockout (Mck-Cre × Insr-flox; mixed background); >95% reduction in muscle INSR; normal glucose tolerance (up to 11 months) but ~70% elevated triglycerides (p<0.01), ~20% elevated FFAs (p<0.05), ~40% increased epididymal fat pad mass (p=0.02); metabolic syndrome phenotype without diabetes · downloaded

[^bruning2000]: doi:10.1126/science.289.5487.2122 · [[studies/bruning-2000-nirko-brain-insulin-receptor]] · in-vivo · model: neuron/glia-specific Insr knockout (Nestin-Cre × Insr-flox); diet-sensitive obesity, elevated triglycerides, reproductive dysfunction · not_oa

[^bluher2003]: doi:10.1126/science.1078223 · [[studies/bluher-2003-firko-fat-insulin-receptor-longevity]] · in-vivo · model: adipose-specific Insr knockout (aP2-Cre × Insr-flox; both sexes); mean lifespan +~18% (~134 days); protected against age-related obesity; normal food intake · downloaded

[^frasca1999]: doi:10.1128/MCB.19.5.3278 · [[studies/frasca-1999-insr-isoform-a-igf2]] · in-vitro · model: R- mouse fibroblasts (IGF-1R-null) + CHO + NIH 3T3 cells transfected with INSR-A or INSR-B cDNA; INSR-A binds IGF-2 with high affinity (EC50 ~3 nM for autophosphorylation; EC50 ~2.5 nM for binding competition); INSR-B does not (EC50 >30 nM); exon 11 encodes residues 718–729 of α subunit · downloaded

[^nakae2002]: doi:10.1038/ng890 · [[studies/nakae-2002-foxo1-hepatic-gluconeogenesis]] · in-vivo · model: Insr+/- Foxo1+/- double-heterozygous mice (FVB × Bl6 background) + liver/β-cell-targeted constitutively active Foxo1S253A transgenics (TTR promoter); Foxo1 haploinsufficiency rescued hyperglycemia (~25% glucose reduction, p<0.005) and improved β-cell area/function in Insr+/- mice; gain-of-function Foxo1 caused diabetes via hepatic G6pc/Pck1 upregulation and Pdx1 suppression; established FOXO1 as key mediator of INSR→AKT hepatic glucose axis · downloaded

[^belfiore2009]: doi:10.1210/er.2008-0047 · review (Endocrine Reviews; 1012 citations) · comprehensive review of INSR-A/B isoforms, INSR/IGF1R hybrid receptors, and their roles in physiology, cancer, and aging-related insulin resistance · not_oa
