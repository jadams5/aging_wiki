---
type: protein
aliases: [FOXO1, FKHR, FOXO1A, forkhead in rhabdomyosarcoma, FKH1]
uniprot: Q12778
ncbi-gene: 2308
hgnc: 3819
mouse-ortholog: Foxo1
ensembl: ENSG00000150907
druggability-tier: 3  # SM:Structure with Ligand only (Open Targets, FOXO1)
caused-by: []
causes: []
key-domains: [forkhead-DNA-binding, AKT-phosphorylation-sites, nuclear-export-sequence, transactivation]
key-ptms: [Thr24-phosphorylation, Ser256-phosphorylation, Ser319-phosphorylation, Lys245-acetylation]
pathways: ["[[insulin-igf1]]", "[[pi3k-akt-pathway]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
sens-categories: []
known-interactors: ["[[akt]]", "[[sirt1]]", "[[14-3-3]]", "[[insr]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Primary-source PDFs verified for Hosaka 2004, Brunet 1999, Nakae 1999, Nakae 2002, Matsumoto 2007; Galili 1993 closed-access (path (stale local path) not accessible in this environment) — PAX3-FKHR discovery claim consistent with archive title and widely corroborated; canonical-DB identity fields (UniProt Q12778, NCBI Gene 2308, HGNC 3819) not independently re-verified against live databases"
---

# FOXO1 (Forkhead Box Protein O1)

FOXO1 is a Forkhead-family transcription factor and the principal downstream effector of insulin/[[akt|AKT]] signaling in liver, β-cells, and skeletal muscle. When [[insulin-igf1|insulin]] is low (fasting), FOXO1 resides in the nucleus and drives gluconeogenic gene expression. When insulin is high, [[akt|AKT]]-mediated phosphorylation at three conserved sites sequesters FOXO1 in the cytoplasm, suppressing hepatic glucose output. This nucleus/cytoplasm shuttle is the canonical "fasting metabolic switch." FOXO1 is less directly tied to organismal longevity than its paralog [[foxo3]], but is central to the [[deregulated-nutrient-sensing]] hallmark via its command over hepatic glucose homeostasis in aging and insulin resistance.

## Identity

- **UniProt:** Q12778 (FOXO1_HUMAN; reviewed Swiss-Prot)
- **NCBI Gene:** 2308
- **HGNC symbol:** FOXO1 (previously FKHR — Forkhead In Rhabdomyosarcoma)
- **Mouse ortholog:** Foxo1 (one-to-one ortholog)
- **Length:** 655 amino acids (canonical human isoform)
- **Historical alias:** FKHR derived from the chromosomal translocation in alveolar rhabdomyosarcoma that first identified the locus [^galili1993]

## Domain organization

| Region | Residues (approx.) | Function |
|---|---|---|
| N-terminal regulatory domain | 1–158 | Contains AKT phospho-site Thr24; 14-3-3 docking |
| Forkhead (winged-helix) DNA-binding domain | 159–235 | Sequence-specific DNA binding to TGTTTAC motif; contains Ser256 |
| Nuclear export sequence (NES) | ~250–269 | CRM1-dependent cytoplasmic export after phosphorylation |
| C-terminal transactivation domain | ~456–655 | Contains Ser319 AKT site; transcriptional activation; target of SIRT1 deacetylation at Lys245 |

Domain positions are approximate; verify against current UniProt feature annotations for exact residue numbers. #gap/unsourced — precise residue boundaries should be cross-checked against UniProt Q12778 feature table.

## AKT phosphorylation and cytoplasmic sequestration

AKT phosphorylates FOXO1 at three conserved serine/threonine residues [^brunet1999][^nakae1999]:

| Site | Kinase | Consequence |
|---|---|---|
| Thr24 | AKT1/PKB | 14-3-3 protein binding; one of two required docking sites |
| Ser256 | AKT1/PKB | 14-3-3 protein binding; second required docking site; overlaps NLS basic domain, disrupting nuclear import |
| Ser319 | AKT1/PKB | Promotes cytoplasmic retention via nuclear export; does NOT contribute to 14-3-3 binding (analogous to FOXO3 Ser315, which binds 14-3-3 at wild-type levels when mutated alone) |

**14-3-3 binding requires phospho-Thr24 AND phospho-Ser256:** by analogy with the directly demonstrated FOXO3 (FKHRL1) result in Brunet 1999 (where T32A+S253A double mutant abolishes 14-3-3 binding, S315A does not affect it), Thr24+Ser256 are the 14-3-3 docking sites in FOXO1; Ser319 drives a distinct nuclear-export mechanism [^brunet1999]. For FOXO1 directly, Nakae 1999 establishes Ser256 (rat Ser253) as the primary insulin-responsive phosphorylation site and gatekeeper for PI3K-dependent nuclear exclusion [^nakae1999]. Dephosphorylation by [[pp2a]] (protein phosphatase 2A) or conditions of low insulin/PI3K activity (e.g., fasting, PTEN re-expression) allow nuclear re-import [^nakae1999].

These three sites are conserved across FOXO paralogs: analogous to FOXO3 Thr32/Ser253/Ser315, FOXO4 Thr28/Ser193/Ser258.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | yes — insulin acutely suppresses hepatic glucose output via this mechanism in humans; AKT→FOXO1 arm confirmed in human hepatocytes |

## SIRT1 deacetylation — activation in fasting

Under fasting or oxidative stress conditions, [[sirt1|SIRT1]] deacetylates FOXO1 at Lys245 and Lys248 (within the forkhead domain), increasing FOXO1 transcriptional activity toward stress-resistance and metabolic targets. This provides a second, AKT-independent activation axis: caloric restriction → elevated NAD+ → SIRT1 active → FOXO1 deacetylated → target gene induction #gap/needs-replication (mechanism well-supported in cell lines; physiological flux less precisely quantified in vivo).

## Transcriptional targets

Nuclear FOXO1 drives a broad transcriptional program. Key targets organized by context:

### Hepatic gluconeogenesis (dominant aging-relevant context)

| Gene | Product | Function |
|---|---|---|
| *G6PC* | Glucose-6-phosphatase (catalytic) | Terminal step of gluconeogenesis and glycogenolysis |
| *PCK1* | PEPCK-C (cytoplasmic) | Rate-limiting gluconeogenic enzyme; oxaloacetate → PEP |
| *IGFBP1* | IGF-binding protein 1 | Sequesters circulating IGF-1 |

Liver-specific Foxo1 deletion (α1-antitrypsin-Cre × Foxo1^flox/flox, mixed C57BL/6 background) produces a 40% reduction in blood glucose at birth and 30% reduction in adult mice after 48 hr fast [^matsumoto2007]. Under hyperinsulinemic euglycemic clamp, hepatic glucose production is reduced >50% and both glycogenolysis and gluconeogenesis are each decreased ~50% [^matsumoto2007]. Fasting-induced G6pc and Pck1 expression are blunted 2- to 4-fold. Pgc1α cannot induce gluconeogenesis in Foxo1-deficient hepatocytes. These data establish FOXO1 as a non-redundant driver of both cAMP (glucagon-stimulated) and insulin-suppressed hepatic glucose production [^matsumoto2007]. #gap/needs-human-replication — mechanistic significance confirmed in mouse; human hepatic FOXO1 contribution to T2D pathophysiology is inferred from this and indirect pharmacology.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes — elevated hepatic glucose output in T2D patients consistent |
| Replicated in humans? | in-progress — hepatic FOXO1 activity inferred but not directly measured in vivo in humans |

### Pancreatic β-cell context

FOXO1 activity in β-cells promotes compensatory β-cell mass expansion under insulin-resistant conditions by sustaining *Pdx1* expression [^nakae2002]. Constitutively active Foxo1^S253A targeted to β-cells suppresses Pdx1, reduces islet mass, and causes early-onset diabetes; conversely, Foxo1 haploinsufficiency rescues β-cell failure in Irs2-/- mice by increasing Pdx1 [^nakae2002]. Note: Foxa2 regulates hepatic *Slc2a2* (Glut2) expression, NOT the G6PC/PCK1 gluconeogenic axis — Foxo1 and Foxa2 are parallel hepatic regulators of different target genes per Nakae 2002. Loss of FOXO1 in β-cells leads to impaired compensation and diabetes. This contrasts with the liver, where FOXO1 activity worsens glucose control. #gap/contradictory-evidence — FOXO1 is metabolically beneficial in β-cells but detrimental in liver; context-specific outputs.

### Skeletal muscle atrophy

FOXO1 (and [[foxo3]]) is implicated in driving muscle atrophy by transactivating the ubiquitin ligases *FBXO32* (Atrogin-1/MAFbx) and *TRIM63* (MuRF1), which mediate myofibrillar protein degradation. This FOXO1 arm is inhibited downstream of [[akt]] activation by [[insulin-igf1|IGF-1]]/insulin — connecting nutrient sensing to [[sarcopenia]]. #gap/unsourced — the Atrogin-1/MuRF1 claim was attributed to [^nakae2002] in the original draft but Nakae 2002 (Nat Genet) does not contain these targets; the FOXO-Atrogin-1/MuRF1 connection derives from Sandri et al. 2004 (Cell) and Stitt et al. 2004 (Mol Cell) — citation needs correction before this claim is load-bearing. #gap/needs-replication — direct FOXO1 ChIP evidence for Atrogin-1/MuRF1 promoter binding in human muscle is limited; most data from rodent models or C2C12 cells.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial — muscle atrophy and [[sarcopenia]] are conserved; degree of FOXO1 contribution vs FOXO3 in human muscle unclear |
| Replicated in humans? | no — human FOXO1-specific muscle atrophy evidence remains indirect |

### Cell cycle and stress responses

- **p27/CDKN1B** — FOXO1 activates *CDKN1B* → G1 cell-cycle arrest (shared mechanism with FOXO3)
- **BIM (BCL2L11)** — apoptosis initiator; less prominent for FOXO1 than FOXO3 in most contexts
- **Catalase, MnSOD** — antioxidant gene targets (stress resistance; SIRT1-dependent enhancement)

## Discovery

FOXO1 was originally identified as the chromosomal breakpoint gene in the PAX3-FOXO1 fusion oncogene characteristic of alveolar rhabdomyosarcoma (ARMS), a pediatric soft-tissue sarcoma [^galili1993]. The translocation t(2;13)(q35;q14) fuses the N-terminal DNA-binding domain of *PAX3* to the C-terminal transactivation domain of *FOXO1* (then called FKHR), creating a constitutively active transcriptional activator. The "FKHR" name derives from this history. Its role in insulin signaling was established by Nakae et al. 1999 [^nakae1999] (insulin-stimulated phosphorylation of FKHR/FOXO1 on Ser253/rat = Ser256/human, in SV40-transformed mouse hepatocytes) and Brunet et al. 1999 [^brunet1999] (AKT phosphorylation → 14-3-3 cytoplasmic sequestration → survival signaling — this paper characterizes FKHRL1/FOXO3a in CCL39 fibroblasts and neurons; FOXO1 sites are analogous by sequence homology).

## Knockout phenotype

Foxo1-null mice (*Foxo1−/−*) die by embryonic day 10.5 from a defect in vascular remodeling (angiogenesis) [^hosaka2004]. Hearts are still beating at E9.5 but embryos do not survive beyond E10.5. The primary defect is in embryonic **angiogenesis** (remodeling of the primary vascular plexus), not vasculogenesis — PECAM-1 staining at E9.5 shows primitive vasculature can form but fails to remodel; dorsal aorta, intersomitic vessels, and head vasculature are disorganized. Foxo1 is highly expressed in developing vascular endothelium (lacZ-based lineage tracing in Foxo1+/- embryos shows expression in dorsal aorta, posterior cardinal vein, intersomitic vessels, and extraembryonic vitelline/umbilical vessels). This embryonic lethality makes Foxo1 the most developmentally essential of the three somatic FOXO paralogs (Foxo3a- and Foxo4-null mice are viable and fertile) [^hosaka2004]. Conditional liver-specific Foxo1 deletion is viable, hyperinsulinemic at baseline, and shows blunted fasting hyperglycemia [^matsumoto2007]. β-cell-specific Foxo1 deletion leads to impaired β-cell compensatory expansion under insulin-resistant conditions [^nakae2002].

## Role in aging and insulin resistance

### The chronic FOXO1 activation problem in aging

In aged individuals with [[deregulated-nutrient-sensing|insulin resistance]], hepatic FOXO1 is chronically active (inadequately suppressed by insulin signaling) despite hyperinsulinemia — a key paradox of T2D. AKT signaling becomes blunted, FOXO1 nuclear localization is incompletely suppressed, and G6PC/PCK1 transcription continues inappropriately, sustaining fasting hyperglycemia. This FOXO1-driven hepatic glucose overproduction is a central pathophysiological feature of type-2 diabetes in aging [^matsumoto2007].

### Contrast with FOXO3 in longevity

Unlike [[foxo3]], whose gain-of-function (nuclear) variants in GWAS studies associate with exceptional human longevity, FOXO1 has no well-replicated longevity-associated human variant. FOXO3 is the dominant FOXO in hematopoietic and neuronal aging contexts; FOXO1 dominates hepatic and β-cell glucose metabolism. The paralog distinction matters: interventions that globally activate FOXO (e.g., PTEN overexpression, PI3K inhibition) affect both, with metabolic trade-offs. #gap/needs-human-replication — direct human longevity genetics for FOXO1 are not established.

### FOXO1 as a therapeutic target in T2D

Selective FOXO1 inhibition in liver has been proposed as a T2D therapeutic strategy (suppress hepatic glucose output). Small-molecule FOXO1 inhibitors (e.g., AS1842856) reduce fasting glucose in rodent models. No FOXO1-targeting drug has advanced to Phase 2 clinical trials as of 2026. #gap/long-term-unknown — safety of chronic FOXO1 inhibition (β-cell compensation impairment, immune function, atrophy risk) is unresolved.

## Pathway membership

- [[insulin-igf1]] — canonical downstream effector (INSR → IRS1/2 → PI3K → AKT → FOXO1)
- [[pi3k-akt-pathway]] — direct AKT substrate; FOXO1 phospho-status reports on pathway activity
- [[gluconeogenesis]] — transcriptional master regulator in hepatocytes (stub)
- [[muscle-atrophy-pathway]] — Atrogin-1/MuRF1 axis (stub)

## Key interactors

- [[akt]] — primary kinase; Thr24/Ser256/Ser319 phosphorylation → cytoplasmic sequestration
- [[insr]] — upstream receptor; insulin signal propagates to FOXO1 via IRS1/2 → PI3K → PDK1 → AKT
- [[sirt1]] — deacetylates Lys245/Lys248; activates FOXO1 target genes in fasting/CR
- [[14-3-3]] — cytoplasmic anchor protein; binds phospho-Thr24 AND phospho-Ser256 (both required; by analogy with demonstrated FOXO3 Thr32+Ser253 requirement in Brunet 1999) → retains FOXO1 in cytoplasm; Ser319 phosphorylation does not contribute to 14-3-3 binding
- [[pp2a]] — phosphatase; dephosphorylates FOXO1 → nuclear re-import
- [[pax3]] — fusion partner in alveolar rhabdomyosarcoma PAX3-FOXO1 oncogene (cancer context only)

## Limitations and gaps

- `#gap/needs-human-replication` — Most hepatic gluconeogenesis mechanism data from mouse; direct human hepatic FOXO1 ChIP or nuclear localization measurements are limited.
- `#gap/needs-human-replication` — Muscle atrophy via FOXO1 well-established in rodent; human FOXO1-specific (vs FOXO3-specific) contribution to sarcopenia not resolved.
- `#gap/needs-replication` — SIRT1-mediated FOXO1 deacetylation flux in vivo quantitatively unconstrained; most data from overexpression systems.
- `#gap/long-term-unknown` — Consequences of chronic pharmacological FOXO1 inhibition (β-cell and immune effects) not characterized in aging-relevant long-term models.
- `#gap/unsourced` — Precise forkhead domain residue boundaries (Ser256 within vs. adjacent to domain) need cross-check against UniProt Q12778 feature table.
- The Foxo1-/- embryonic lethal citation gap is now resolved: Hosaka T et al. 2004 (PNAS 10.1073/pnas.0400093101) confirmed as the primary source; see [^hosaka2004].
- `#gap/unsourced` — Muscle atrophy via Atrogin-1/MuRF1 claim needs recitation: correct primary sources are Sandri et al. 2004 (Cell 117:399) and Stitt et al. 2004 (Mol Cell 14:395), not Nakae 2002.
- The distinction between FOXO1 vs FOXO3 vs FOXO4 target-gene specificity in overlapping tissues (especially muscle) is incompletely resolved in the primary literature.

## Footnotes

[^galili1993]: doi:10.1038/ng1193-230 · Galili N et al. 1993 · in-vivo (human tumor genetics) · Nature Genetics · Fusion of PAX3 to FKHR forkhead domain in alveolar rhabdomyosarcoma (t(2;13)(q35;q14)); first identification of the FKHR/FOXO1 locus · closed-access paper; PDF path in archive ((stale local path) not accessible in this environment; claim consistent with archive title and widely corroborated

[^brunet1999]: doi:10.1016/s0092-8674(00)80595-4 · Brunet A et al. 1999 · in-vitro (CCL39 fibroblasts, 293T cells, cerebellar granule neurons) · Cell 96:857-868 · AKT phosphorylates FKHRL1 (FOXO3a, NOT FOXO1) at Thr32/Ser253/Ser315; 14-3-3 binding requires phospho-Thr32 AND phospho-Ser253 (T32A+S253A double mutant abolishes 14-3-3 binding; S315A alone does not reduce it); Ser315 drives a distinct nuclear-export/mobility-shift mechanism independent of 14-3-3; seminal mechanistic paper establishing AKT-FOXO paradigm — sites transposed to FOXO1 analogs (Thr24/Ser256/Ser319) by sequence homology · local PDF available

[^nakae1999]: doi:10.1074/jbc.274.23.15982 · Nakae J et al. 1999 · in-vitro (SV40-transformed mouse hepatocytes) · JBC 274:15982-15985 · Insulin stimulates phosphorylation of FKHR/FOXO1 directly in hepatocytes via PI3K/wortmannin-sensitive pathway; Ser253 (rat numbering; = Ser256 human) is the primary gatekeeper site — S253A abolishes insulin-induced phosphorylation; T24A and S316A (rat; = Ser319 human) reduce phosphorylation ~30% but do not abolish it; all three single mutants inhibit the insulin-induced mobility shift · local PDF available

[^nakae2002]: doi:10.1038/ng890 · Nakae J et al. 2002 · in-vivo (Insr+/- Foxo1+/- double heterozygotes; Foxo1^S253A gain-of-function transgenics in liver and β-cells) · Nature Genetics 32:245-253 · Foxo1 haploinsufficiency rescues insulin resistance and reduces G6pc (~75% lower) and Pck1 expression in Insr+/- mice; constitutively active Foxo1^S253A in β-cells suppresses Pdx1 → impaired compensatory β-cell expansion → diabetes; Foxa2 is shown to regulate Slc2a2 (Glut2), NOT G6pc/Pck1 (those are Foxo1 targets); Atrogin-1/MuRF1 are NOT mentioned in this paper · n=8-15/group · local PDF available

[^matsumoto2007]: doi:10.1016/j.cmet.2007.08.006 · Matsumoto M et al. 2007 · in-vivo (liver-specific Foxo1 KO: α1-antitrypsin-Cre × Foxo1^flox/flox, mixed background) · Cell Metabolism 6:208-216 · Liver-specific Foxo1 deletion produces 40% blood glucose reduction at birth and 30% reduction after 48 hr fast in adults; hepatic glucose production reduced >50% under clamp; glycogenolysis and gluconeogenesis each reduced ~50%; fasting G6pc and Pck1 mRNA blunted 2- to 4-fold; Pgc1α cannot induce gluconeogenesis in Foxo1-deficient hepatocytes; Foxo1 required for both cAMP (glucagon) and insulin-regulated HGP — establishes FOXO1 as non-redundant shared regulator of both hormonal axes · n=6-13/group · local PDF available

[^hosaka2004]: doi:10.1073/pnas.0400093101 · Hosaka T et al. 2004 · in-vivo (Foxo1-/- mice, C57BL/6 background) · PNAS 101:2975-2980 · Foxo1-null embryos die by E10.5; hearts beating at E9.5 but none survive beyond E10.5; primary defect is embryonic angiogenesis (remodeling of primary vascular plexus), not vasculogenesis — PECAM-1 staining shows primitive vessels form at E9.5 but fail to remodel; dorsal aorta thin/disorganized, intersomitic vessels irregular, head vasculature lacks proper internal carotid artery branching; lacZ lineage tracing confirms Foxo1 expression in vascular endothelium; Foxo3a- and Foxo4-null mice viable and fertile; ref 18 in paper = Nakae 2002 (Nat Genet), which first reported Foxo1-/- lethality · local PDF available
