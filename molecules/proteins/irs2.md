---
type: protein
aliases: [IRS-2, insulin receptor substrate 2, IRS2, "insulin receptor substrate-2"]
uniprot: Q9Y4H2
ncbi-gene: 8660
hgnc: 6126
mouse-ortholog: Irs2
ensembl: ENSG00000185950
druggability-tier: 4  # no SM tractability features (Open Targets, IRS2)
caused-by: []
causes: []
genage-id: null
key-domains: [PH-domain, PTB-domain, YxxM-motifs]
key-ptms: [Tyr-671-phosphorylation, Tyr-734-phosphorylation, Tyr-814-phosphorylation, Thr-347-phosphorylation-inhibitory, Ser-484-phosphorylation-inhibitory, Ser-488-phosphorylation-inhibitory]
pathways: ["[[insulin-igf1]]", "[[pi3k-akt-pathway]]", "[[mtor]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
known-interactors: ["[[insr]]", "[[igf1r]]", "[[pi3k]]", "[[s6k1]]", "[[akt]]", "[[grb2]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Sun 1995 (local PDF) and Boucher 2014 (local PDF) verified against primary sources. Withers 1998 (not_oa) and Taguchi 2007 (not_oa, not in PMC) remain unverifiable — quantitative claims from those sources retain #gap/no-fulltext-access tags. Kubota 2000 download failed (HTTP 403, bronze OA). Canonical-DB identity fields (UniProt Q9Y4H2, NCBI Gene 8660, HGNC 6126, Ensembl) not independently re-verified against live databases."
---

# IRS-2 (Insulin Receptor Substrate 2)

The IRS-1 paralog dominant in liver, pancreatic beta-cells, and brain — tissues where IRS-2 is the primary intracellular scaffold coupling activated [[insr|insulin receptor]] and [[igf1r|IGF-1 receptor]] to downstream [[pi3k-akt-pathway|PI3K–AKT]] signaling. Disruption of Irs2 in mice produces a frank type 2 diabetes phenotype (hepatic insulin resistance + beta-cell failure) [^withers1998], establishing a non-redundant tissue role distinct from its paralog [[irs-1]]. IRS-2 carries the most striking aging-biology paradox in the insulin/IGF-1 signaling (IIS) field: while peripheral Irs2 loss causes fatal diabetes, **brain-specific Irs2 knockout extends mouse lifespan ~18% in females** [^taguchi2007] — placing IRS-2 at the center of the debate over where and how reduced IIS promotes longevity.

## Identity

- **UniProt:** Q9Y4H2 (IRS2_HUMAN) — Swiss-Prot curated
- **NCBI Gene:** 8660
- **HGNC symbol:** IRS2
- **Ensembl:** ENSG00000185950
- **Mouse ortholog:** Irs2 (one-to-one ortholog; functionally conserved)
- **Length:** 1,338 amino acids (canonical human isoform; longer than IRS-1 at 1,242 aa)
- **GenAge:** no confirmed entry ID — #gap/needs-canonical-id (IRS2 is aging-relevant via Taguchi 2007 brain-specific KO lifespan extension; GenAge models entry ID not confirmed at seeding — verify at next lint pass)

**IRS-family context:** IRS-2 is the second of four insulin receptor substrate proteins. Unlike [[irs-1]] (dominant in skeletal muscle and adipose), IRS-2 is dominant in liver, pancreatic beta-cells, and brain. Sun 1995 established IRS-2 as a bona fide IRS-1 paralog expressed in haematopoietic cells, skeletal muscle, lung, brain, liver, kidney, heart, and spleen [^sun1995]. IRS-3 is a rodent-only paralog (the human IRS-3 gene is a pseudogene); IRS-4 mRNA is present in skeletal muscle, liver, heart, brain, and kidney [^boucher2014]. All family members share the N-terminal PH + PTB module but diverge in C-terminal docking-motif composition and tissue distribution.

## Domain organization

IRS-2 shares the same three-region architecture as IRS-1 but has quantitatively distinct domain properties — particularly at the N-terminal end — that contribute to its different tissue behavior.

1. **PH domain** — N-terminal pleckstrin-homology domain; binds membrane phosphoinositides (PI-3,4,5-P3 and PI-4,5-P2) to anchor IRS-2 near the activated receptor complex. The IRS-2 PH domain (designated IH-1^PH in Sun 1995) has been shown to interact directly with the intracellular juxtamembrane region of the insulin receptor independently of ligand stimulation [^sun1995]. This direct receptor interaction is absent from the IRS-1 PH domain, making the IRS-2 PH domain functionally distinct despite structural homology. The IRS-2-specific region within the PH domain responsible for this interaction was later termed the KRLB (kinase regulatory loop binding) motif in subsequent work (Sawka-Verhelle et al. 1996/1997 — not cited here; #gap/needs-canonical-id).

2. **PTB domain** — phosphotyrosine-binding domain; binds the NPxY motif of activated, autophosphorylated [[insr]] and [[igf1r]] juxtamembrane regions. Receptor tyrosine kinase activation is required for high-affinity PTB engagement. The PTB domain mechanism is conserved with IRS-1.

3. **C-terminal docking region** — largely unstructured; contains multiple tyrosine-phosphorylation motifs including YXXM sites (consensus for p85 SH2-domain binding, the PI3K entry point) and other phosphotyrosine docking sites for GRB2 and additional SH2-domain partners. Sun 1995 identifies approximately 20 common or unique tyrosine-phosphorylation motifs across IRS-1 and IRS-2 in relatively similar positions, and specifically identifies 8 YXXM motifs on IRS-2 that may bind p85 [^sun1995]. Six tyrosine positions are well conserved with IRS-1 (positions 649, 671, 911, 969, 1,242, 1,303 in mouse IRS-2); Figure 4a in Sun 1995 also maps Tyr-734 and Tyr-814 as phosphorylation sites in murine IRS-2. #gap/needs-canonical-id (mouse site numbers; human IRS-2 YXXM site numbering not independently confirmed from UniProt Q9Y4H2 PTM annotations — mouse vs human numbering may differ).

## Activation mechanism

Insulin or IGF-1 binding to [[insr]] or [[igf1r]] triggers receptor autophosphorylation within the intracellular kinase activation loop. Activated receptor tyrosine kinase then trans-phosphorylates IRS-2 on multiple **tyrosine residues** within the C-terminal docking region.

Phosphorylated YxxM motifs recruit the SH2 domain of the **p85 regulatory subunit** of Class IA PI3K → p85/p110 PI3K complex is brought to the plasma membrane → PI3K phosphorylates PIP2 → PIP3 → AKT and PDK1 co-recruitment → AKT activation [^boucher2014]. This canonical IIS → [[pi3k-akt-pathway]] coupling step is shared with IRS-1, but the magnitude and duration of PI3K engagement differ by tissue and paralog context.

In **liver**, IRS-2-driven AKT activation suppresses gluconeogenic gene expression via phosphorylation and nuclear exclusion of [[foxo1|FOXO1]] (reducing transcription of G6pc and Pck1) and promotes glycogen synthesis via GSK3beta inhibition — the hepatic insulin response to feeding.

In **pancreatic beta-cells**, IRS-2 signaling supports beta-cell mass maintenance and survival. IRS-2 activates AKT-mediated suppression of FOXO1 nuclear localization; nuclear FOXO1 suppresses PDX1 (the beta-cell identity transcription factor), so sustained IRS-2/AKT signaling maintains PDX1 expression and beta-cell identity [^kubota2000].

In **brain/hypothalamus**, IRS-2 is the dominant IRS paralog in neurons relevant to energy homeostasis, glucose sensing, and potentially aging. The consequences of neuronal IIS attenuation are distinct from peripheral tissues — the brain paradox is discussed in the aging section below.

## Tissue distribution: IRS-1 vs IRS-2

| Tissue | Dominant IRS paralog | Irs-/- phenotype (mouse) |
|---|---|---|
| Skeletal muscle | IRS-1 | Profound insulin resistance (Irs1-/-); see [[irs-1]] |
| Adipose tissue | IRS-1 | Insulin resistance; see [[irs-1]] |
| Liver | IRS-2 | Irs2-/- → hepatic insulin resistance + elevated gluconeogenesis |
| Pancreatic beta-cells | IRS-2 | Irs2-/- → beta-cell mass ~50% reduction + failure to compensate |
| Brain/hypothalamus | IRS-2 (dominant) | Brain-specific KO → paradoxical lifespan extension (Taguchi 2007) |
| Bone marrow | IRS-2 (notable) | Hematopoietic IIS context; less studied for aging |

Disruption of Irs2 in mice combined liver insulin resistance and beta-cell failure to produce frank type 2 diabetes, in contrast to Irs1-/- mice (mild growth retardation, compensatory beta-cell hyperplasia, no overt diabetes) [^withers1998]. This demonstrates the two paralogs are not functionally interchangeable at the organismal level.

## Negative-feedback regulation

IRS-2 is subject to the same class of inhibitory serine/threonine phosphorylation as IRS-1, mediated by the mTORC1/S6K1 negative-feedback loop:

1. Insulin/IGF-1 → IRS-2 tyrosine phosphorylation → PI3K–AKT → mTORC1 → [[s6k1|S6K1]] activation
2. Activated S6K1 phosphorylates IRS-2 on inhibitory serine residues
3. Phospho-Ser IRS-2 is targeted for ubiquitylation and proteasomal degradation
4. IRS-2 loss attenuates PI3K/AKT signaling → reduced mTOR/S6K1 activity (feedback termination)

In the context of chronic overnutrition, obesity, or aging — where basal mTORC1/S6K1 activity is elevated — this feedback loop constitutively degrades IRS-2 (and IRS-1), contributing to hepatic and beta-cell insulin resistance [^boucher2014]. Boucher 2014 Fig 3 identifies **Thr-347, Ser-484, and Ser-488** as the inhibitory phosphorylation sites on IRS-2 (targeted by JNK and GSK3, among other Ser/Thr kinases). The analogous mechanism in IRS-1 is characterized at Ser-307 (murine) / multiple additional sites (Ser-24, Ser-270, Ser-318, Ser-612, Ser-632, Ser-789, Ser-1101 per Boucher 2014 Fig 3); see [[irs-1]]. #gap/needs-canonical-id (Thr-347/Ser-484/Ser-488 are mouse IRS-2 positions per Boucher 2014 Fig 3 labeling; human numbering equivalents not independently confirmed from primary biochemistry papers)

**Inflammatory serine phosphorylation:** JNK, IKKbeta, and GSK3, activated by cytokines, saturated fatty acids, mitochondrial dysfunction, and ER stress, also phosphorylate inhibitory residues on IRS-2 (and IRS-1) [^boucher2014]. This connects the chronic low-grade inflammation of aging ([[chronic-inflammation|inflammaging]]) to beta-cell and hepatic insulin resistance through the shared IRS serine/threonine phosphorylation mechanism.

## Whole-body Irs2-/- knockout phenotype

**Withers 1998 (Nature, n=~150 mice across genotypes):** Irs2-null mice develop progressive type 2 diabetes [^withers1998]:

- Peripheral insulin resistance (as in Irs1-/- mice)
- Approximately 50% reduction in pancreatic beta-cell mass — critically, unlike Irs1-/- mice, Irs2-/- mice fail to mount compensatory beta-cell hyperplasia
- Severe hyperglycemia progressing to fatal ketoacidosis; most Irs2-/- mice die by ~10 weeks of age under standard diet
- Establishes IRS-2 as essential for beta-cell survival and mass maintenance, not merely insulin signal transduction

**Kubota 2000 (Diabetes, follow-up beta-cell characterization):** Detailed analysis of the Irs2-/- beta-cell phenotype confirmed the lack of compensatory beta-cell growth and linked IRS-2 loss specifically to impaired beta-cell replication and increased beta-cell apoptosis [^kubota2000].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | IRS-2 is expressed in human liver, beta-cells, brain; analogous signaling axes |
| Phenotype conserved in humans? | partial | Loss-of-function IRS2 variants associate with type 2 diabetes risk in human GWAS; no full KO human equivalent |
| Replicated in humans? | in-progress | IRS2 SNPs (e.g., Gly1057Asp) show T2D association; mechanistic replication of full KO impossible |

#gap/needs-human-replication — The specific quantitative beta-cell mass reduction and diabetes progression from Withers 1998 reflects full gene disruption; human partial-LOF variant data cannot be directly compared.

## Aging context: the brain IRS-2 longevity paradox

### Taguchi 2007: brain-specific Irs2 KO extends lifespan

The most consequential aging-biology finding for IRS-2 is a **paradox**: reduced IIS in the brain specifically extends lifespan even though peripheral Irs2 loss causes fatal diabetes.

**Taguchi 2007 (Science, doi:10.1126/science.1142179, 518 citations):** Mice with brain-specific deletion of Irs2 (using a Nestin-Cre driver to restrict deletion to neurons) showed [^taguchi2007]:

- **~18% lifespan extension in females** (median lifespan extended; exact values from closed-access paper — #gap/no-fulltext-access — verify against PDF)
- Lifespan extension despite **obesity** and **peripheral hyperinsulinemia** — the mice ate more, were heavier, and had elevated circulating insulin, yet lived longer
- Reduced IIS specifically in neurons, with compensatory peripheral hyperinsulinemia as neurons normally participate in central glucose sensing and peripheral insulin feedback
- The effect was **female-dominant** (smaller or absent effect in males) — sex-specificity is a recurrent theme in mammalian IIS longevity studies (cf. Holzenberger 2003 Igf1r+/-, Selman 2008 Irs1-/-)

**The paradox explained:** The lifespan extension from reduced neuronal IIS is thought to reflect the same conserved longevity program seen in C. elegans daf-2 mutants ([[daf-2]]) and Drosophila InR mutants: reducing IIS in neurons → reduced AKT activity → reduced FOXO phosphorylation → nuclear [[foxo3|FOXO]] transcription factor activity → upregulation of stress resistance, proteostasis, and longevity gene programs. In mammals, the brain appears to be the critical tissue where this longevity-promoting IIS reduction operates, while peripheral IIS (especially hepatic and beta-cell) is required to prevent diabetes. The two functions cannot be simultaneously reduced by a systemic intervention without causing metabolic disease.

This finding is a major paradigm for the concept that **tissue-specific modulation of IIS** — rather than systemic pathway reduction — is required to translate invertebrate longevity observations to mammalian interventions. #gap/needs-human-replication

### Relationship to Holzenberger 2003 Igf1r+/- longevity

The brain IRS-2 finding parallels **Holzenberger 2003** (Igf1r+/- mice, 129/Sv background, +26% combined-sex lifespan with +33% females and +15.9% males NS [see [[igf1r]]]). In that model, heterozygous IGF-1 receptor reduction across all tissues provides partial IIS reduction without full peripheral metabolic compromise. The Taguchi 2007 result narrows the site of action further, implicating the brain as sufficient for the longevity benefit even when peripheral IIS remains intact (or is actually elevated compensatorily).

| Study | Genetic model | Lifespan change | Key caveat |
|---|---|---|---|
| Holzenberger 2003 | Igf1r+/- (all tissues, 129/Sv) | +26% combined; +33% females | not_oa; strain 129/Sv |
| Taguchi 2007 | Brain-specific Irs2-/- (Nestin-Cre) | ~+18% females | not_oa; males effect unclear; obese/hyperinsulinemic periphery |
| Selman 2008 | Irs1-/- (all tissues) | Female extension | not_oa; FASEB J; see [[irs-1]] |

### Age-related IRS-2 dysfunction in peripheral tissues

With aging, chronic mTORC1/S6K1 hyperactivation (driven by excess nutrient intake and accumulating adiposity) progressively degrades IRS-2 in liver and beta-cells via inhibitory serine phosphorylation and ubiquitylation. In liver, this contributes to age-associated hepatic insulin resistance — blunted suppression of gluconeogenesis after meals, contributing to fasting hyperglycemia [^boucher2014]. In beta-cells, progressive IRS-2 loss reduces beta-cell mass maintenance capacity and shifts the balance toward apoptosis, potentially contributing to the decline in beta-cell functional reserve with aging. #gap/no-mechanism (direct measurements of IRS-2 protein level trajectory with age in human liver or beta-cells are not available from cited sources)

## Pathway membership

- [[insulin-igf1]] — primary scaffold coupling INSR/IGF1R to PI3K–AKT; dominant paralog in liver, beta-cells, brain
- [[pi3k-akt-pathway]] — IRS-2 phospho-YxxM motifs recruit p85/PI3K; the entry point to PI3K signaling in IRS-2-dominant tissues
- [[mtor]] — IRS-2 → PI3K → AKT → TSC1/2 → mTORC1; also receives negative feedback from mTORC1/S6K1 (inhibitory serine phosphorylation)

## Key interactors

- [[insr]] — primary activating upstream kinase; juxtamembrane NPxY phosphorylation recognized by IRS-2 PTB domain
- [[igf1r]] — activating upstream kinase; shared signaling mechanism
- [[pi3k]] — p85 SH2 domain binds phospho-YxxM motifs on IRS-2; canonical downstream PI3K effector
- [[s6k1]] — negative-feedback kinase; phosphorylates inhibitory serines on IRS-2; mTORC1/S6K1 → IRS-2 serine phosphorylation is the insulin resistance mechanism in liver and beta-cells
- [[akt]] — activated downstream of PI3K; downstream of IRS-2 but does not directly phosphorylate IRS-2; AKT → TSC2/PRAS40 → mTORC1 → S6K1 determines the feedback loop
- [[grb2]] — adaptor recruited to IRS-2 phosphotyrosines → RAS/MAPK mitogenic branch
- [[foxo1]] — nuclear transcription factor downstream of IRS-2/AKT axis in liver (gluconeogenesis suppression) and beta-cells (PDX1 regulation); FOXO1 nuclear exclusion is a primary readout of IRS-2 signal activity

## Limitations and gaps

- **Brain IRS-2 lifespan quantitative details** not confirmed from primary PDF; Taguchi 2007 (Science) is closed-access (not_oa). Exact median lifespan values, sex-breakdown statistics, and n per group require full-text verification. #gap/no-fulltext-access
- **Male lifespan effect of brain-specific Irs2 KO** is unclear from the abstract. Whether males show a smaller effect or no effect is not confirmed here. #gap/needs-replication
- **IRS-2 inhibitory phosphorylation sites** — Boucher 2014 Fig 3 identifies Thr-347, Ser-484, Ser-488 as murine IRS-2 inhibitory sites (JNK/GSK3-targeted). Human numbering equivalents are not confirmed from the primary biochemistry literature. IRS-1 Ser-307 (mouse) / Ser-312 (human) equivalent on IRS-2 is not established. #gap/needs-canonical-id
- **Human aging IRS-2 protein levels** — no quantitative trajectory of IRS-2 protein in aged human liver or beta-cells from cited primary sources. #gap/no-mechanism
- **Human longevity association** — IRS2 Gly1057Asp polymorphism is associated with type 2 diabetes risk, but no robust human longevity GWAS signal has been confirmed at this locus. #gap/needs-human-replication
- **Brain IRS-2 mechanism** — the molecular pathway by which reduced neuronal IRS-2 promotes longevity (FOXO? stress resistance programs? mTOR attenuation?) is inferred from invertebrate IIS biology; direct causal mechanistic experiments in mice are limited. #gap/no-mechanism
- **IRS-2 vs IRS-1 in beta-cell aging** — both are expressed in beta-cells but the relative contribution of each to age-related beta-cell decline is unresolved. #gap/needs-replication
- **GenAge entry** — no confirmed GenAge models ID for Irs2; the Taguchi 2007 brain-specific KO is a compelling candidate for inclusion. Verify at next lint pass. #gap/needs-canonical-id

## Footnotes

[^sun1995]: doi:10.1038/377173a0 · in-vitro + in-vivo (biochemical cloning + domain characterization) · model: rat/mouse IRS-2 cDNA cloning + 32D myeloid cells + Fao hepatoma cells (Sun XJ et al. 1995, Nature 377:173–177) · archive status: downloaded · key findings: IRS-2 cloned as IRS-1 paralog (mouse ORF = 3,963 nt = 1,321 aa; ~145 kDa); IH-1^PH domain of IRS-2 interacts directly with insulin receptor juxtamembrane region (distinct from IRS-1); ~20 common/unique Tyr-phosphorylation motifs shared across IRS-1/IRS-2; 8 YXXM motifs on IRS-2 capable of p85 binding; 6 Tyr sites conserved with IRS-1 (positions 649, 671, 911, 969, 1242, 1303 in mouse IRS-2); IRS-2 expressed broadly (skeletal muscle, lung, brain, liver, kidney, heart, spleen)
[^withers1998]: doi:10.1038/36116 · in-vivo (Irs2-/- mouse genetic KO) · model: Irs2-null Mus musculus · archive status: not_oa (1,770 citations, 100th percentile FWCI; same paper cited on [[irs-1]]) · key finding: Irs2 disruption → type 2 diabetes via combined liver insulin resistance + ~50% beta-cell mass reduction + failure of compensatory hyperplasia; progressive hyperglycemia fatal by ~10 weeks; establishes IRS-2/IRS-1 non-redundancy
[^kubota2000]: doi:10.2337/diabetes.49.11.1880 · in-vivo (Irs2-/- mouse histology + physiology) · model: Irs2-null Mus musculus · archive status: bronze OA (524 citations; download attempted 2026-05-04, failed HTTP 403 on diabetesjournals.org; #gap/no-fulltext-access) · key finding: detailed beta-cell mass characterization in Irs2-/- mice; impaired beta-cell replication + elevated apoptosis; links IRS-2 to beta-cell survival mechanism — quantitative claims (beta-cell mass reduction %, apoptosis rates) unverified from full PDF
[^taguchi2007]: doi:10.1126/science.1142179 · in-vivo (brain-specific Irs2-/- mouse, Nestin-Cre) · model: neuron-specific Irs2-null Mus musculus · archive status: not_oa (518 citations, 100th percentile FWCI; #gap/no-fulltext-access) · key finding: brain IRS-2 KO extends female lifespan ~18% despite peripheral obesity + hyperinsulinemia; paradoxical IIS longevity locus; paradigm-shifting for tissue-specificity of IIS longevity programs · previously cited on [[pathways/insulin-igf1]] verified page
[^boucher2014]: doi:10.1101/cshperspect.a009191 · review · model: review of mammalian insulin/IGF-1 receptor signaling in normal and insulin-resistant states · archive status: downloaded (local PDF confirmed; 1,402 citations) · authors: Boucher J, Kleinridders A, Kahn CR · Cold Spring Harb Perspect Biol 2014;6:a009191 · scope: covers IR/IGF-1R signaling, PI3K-AKT axis, IRS paralog tissue roles, and mechanisms of insulin resistance including serine phosphorylation; previously cited on [[irs-1]] verified page
