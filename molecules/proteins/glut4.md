---
type: protein
aliases: [SLC2A4, glucose transporter type 4, insulin-responsive glucose transporter, IRAP vesicle transporter]
uniprot: P14672
ncbi-gene: 6517
hgnc: 11009
mouse-ortholog: Slc2a4
ensembl: ENSG00000181856
druggability-tier: 3  # SM:Structure with Ligand only (Open Targets, SLC2A4)
caused-by: []
causes: []
key-domains: [N-terminal cytoplasmic tail, 12-transmembrane helices, exofacial loop, C-terminal cytoplasmic tail]
key-ptms: [Ser488-phosphorylation, ubiquitination-K245, acetylation]
pathways: ["[[insulin-igf1]]", "[[pi3k-akt-pathway]]", "[[ampk]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
sens-categories: []
known-interactors: ["[[akt]]", "[[as160]]", "[[insr]]", "[[irs-1]]"]
genage-id: null
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Katz 1995 (10.1038/377151a0) KO phenotype claims verified against full PDF — corrections applied (see log). Sano 2003 (10.1074/jbc.C300063200) download failed (hybrid OA, no candidate URLs); AS160 Thr642 claim unverified from source. James 1989 (10.1038/338083a0) is not_oa; structural/cloning claims unverified from source. Klip 2014 (10.1152/ajpcell.00069.2014) is not_oa; translocation cascade and aging/T2D claims unverified from source. UniProt P14672 identity fields (509 aa, 12-TM) not independently re-verified against database."
---


# GLUT4 (SLC2A4)

GLUT4 is the insulin-regulated facilitative glucose transporter responsible for the majority of insulin-stimulated glucose uptake into skeletal muscle and adipose tissue. Under basal conditions ~95% of cellular GLUT4 resides in intracellular GLUT4-storage vesicles (GSVs); insulin signaling through [[insr]] → [[irs-1]] → [[pi3k-akt-pathway]] → [[akt]] → [[as160]] drives GSV exocytosis, inserting GLUT4 into the plasma membrane and acutely amplifying glucose import ~10-fold. Impairment of this translocation cycle is the proximate cellular defect in insulin resistance and [[type-2-diabetes]], and GLUT4 levels and trafficking decline measurably with aging in skeletal muscle.

## Identity

| Field | Value |
|---|---|
| UniProt | P14672 (GTR4_HUMAN; Swiss-Prot, manually reviewed) |
| NCBI Gene | 6517 |
| HGNC | 11009 |
| Ensembl | ENSG00000181856 |
| Mouse ortholog | Slc2a4 (Mus musculus) |
| Protein length | 509 amino acids (canonical isoform) |
| Molecular weight | ~55 kDa (apparent ~46 kDa on SDS-PAGE due to anomalous migration) |
| Superfamily | Major Facilitator Superfamily (MFS); SLC2A/GLUT subfamily |
| Chromosome (human) | 17p13.1 |

## Structure and domains

GLUT4 is a 12-transmembrane-helix MFS transporter arranged as two bundles of 6 helices separated by a large intracellular loop [^james1989]. Key structural features:

- **N-terminal cytoplasmic tail** — dileucine motif (LL) mediates intracellular retention and endocytic recycling; critical for basal intracellular sequestration
- **Transmembrane helices TM1–12** — form the glucose-transport channel; alternating-access mechanism with outward-facing and inward-facing conformations
- **Large exofacial loop (EC2, TM5–TM6)** — target of GLUT4-specific antibodies used to track plasma-membrane insertion in real time
- **C-terminal cytoplasmic tail** — contains the Phe5-containing FQQI (residues 499–502) motif essential for GSV targeting; also harbors Ser488 phosphorylation site

The transporter operates as a monomer facilitating passive, bidirectional glucose flux down its concentration gradient. Under physiological conditions the gradient is inward (blood glucose > cytoplasm), so net glucose entry occurs.

## Tissue distribution and GLUT isoform context

GLUT4 expression is restricted to insulin-sensitive tissues:

| Tissue | Expression level | Notes |
|---|---|---|
| Skeletal muscle | High (predominant) | ~80% of insulin-stimulated glucose disposal in humans |
| Cardiac muscle | High | Required for normal cardiac metabolic flexibility |
| Adipose tissue (white + brown) | High | Major depot for postprandial glucose buffering |
| Brain (selective neurons) | Low–moderate | Insulin-independent role in hippocampal glucose sensing |

Contrast with other GLUT isoforms:

- **GLUT1** (SLC2A1) — ubiquitous basal transporter; red blood cells, blood-brain barrier
- **GLUT2** (SLC2A2) — liver hepatocytes and pancreatic beta cells; high-capacity, low-affinity glucose sensor
- **GLUT3** (SLC2A3) — neurons; high affinity (Km ~1.5 mM); expression not regulated by insulin
- **GLUT5** (SLC2A5) — fructose transporter; intestinal brush border and kidney

## Function: insulin-stimulated translocation cascade

Under basal (fasting) conditions, GLUT4 is actively retained in intracellular GSVs by the GDP-loaded Rab GTPase cycle and tethering complexes. Insulin signaling rapidly reverses this retention [^klip2014]:

1. **Receptor activation** — Insulin binds [[insr]] ectodomain → conformational change → autophosphorylation of cytoplasmic kinase domain → recruitment and phosphorylation of [[irs-1]] and IRS-2 on multiple Tyr residues
2. **PI3K → PIP3** — IRS-1 pTyr motifs recruit the p85 regulatory subunit of [[pi3k]]; p110 catalytic subunit generates PIP3 from PIP2 at the inner leaflet of the plasma membrane
3. **AKT activation** — PIP3 recruits [[akt]] via its PH domain → PDK1 phosphorylates Thr308; mTORC2 phosphorylates Ser473 → full AKT activation (see [[akt]] page)
4. **AS160/TBC1D4 phosphorylation** — Activated [[akt]] phosphorylates [[as160]] (TBC1D4) at multiple sites including Thr642 [^sano2003] #gap/no-fulltext-access. AS160 is a Rab-GAP (GTPase-activating protein) that normally maintains Rab proteins in their GDP-bound inactive state
5. **Rab GTPase activation** — Phospho-AS160 has suppressed GAP activity → Rab8A, Rab10, and Rab14 accumulate in their GTP-bound active form → these Rabs recruit motor proteins and tethering factors enabling GSV mobilization
6. **GSV trafficking and fusion** — Activated Rab proteins couple GSVs to motor proteins (myosin Va/b) and cortical actin; GSVs dock at the plasma membrane via SNARE complexes (VAMP2/SNAP23/Syntaxin4); membrane fusion inserts GLUT4 into the plasma membrane
7. **Glucose uptake** — Plasma membrane GLUT4 density rises ~5–10-fold within 5–15 minutes of insulin stimulation → glucose uptake increases correspondingly

There is a parallel pathway: **exercise/muscle contraction** activates [[ampk]] (via AMP:ATP ratio rise) → AMPK independently phosphorylates TBC1D1 (a related Rab-GAP) → Rab8A/Rab10 activation → GLUT4 translocation by a route that is largely insulin-independent [^klip2014]. This exercise-stimulated pathway is clinically important: insulin-resistant muscle retains normal or near-normal contraction-stimulated GLUT4 translocation.

## Discovery

GLUT4 was independently cloned in 1989:

- **James, Strube & Mueckler 1989** — isolated a cDNA from rat adipose tissue and muscle encoding a 509-aa facilitative glucose transporter with insulin-responsive expression; demonstrated this differed from the ubiquitous GLUT1 [^james1989]
- Multiple additional groups cloned the same sequence from adipocytes (Birnbaum 1989) and muscle (Charron 1989) in the same period, establishing it as a distinct insulin-responsive isoform

## Knockout and overexpression phenotypes

| Model | Phenotype | Reference |
|---|---|---|
| *Glut4*-null (whole-body, mouse) | Viable; severe cardiac hypertrophy (heart:body ratio 2.3–2.5× age-matched controls); growth retardation; **severely diminished adipose tissue deposits** (females: no dissectable ovarian fat pad); **sexually dimorphic glucose phenotype** — females clear glucose normally (fasted and fed blood glucose not significantly elevated), males show moderately reduced fasting glycaemia and increased fed glycaemia, but **overt diabetes does not develop** in either sex; fed insulin levels ~5–6× control (hyperinsulinemia drives compensation); **decreased longevity**, attributed to cardiac hypertrophy; compensatory GLUT2 upregulation in liver (1.7-fold) and GLUT1 upregulation in heart (1.5-fold) but not in skeletal muscle | [^katz1995] |
| Muscle-specific *Glut4* KO (mouse) | Marked insulin resistance (skeletal muscle); systemic glucose intolerance; hepatic insulin resistance secondary to muscle defect | #gap/needs-replication |
| Adipose-specific *Glut4* KO (mouse) | Whole-body insulin resistance disproportionate to adipose-specific loss, suggesting adipokine/signal-relay mechanism | #gap/needs-replication |
| GLUT4 muscle overexpression (transgenic) | Enhanced glucose uptake; protection from diet-induced insulin resistance | #gap/needs-human-replication |

The whole-body *Glut4*-null phenotype is notably dominated by cardiac and growth effects, whereas the metabolic defect is less severe than expected — likely because GLUT2 overexpression in the liver (1.7-fold) and marked fed hyperinsulinemia (~5–6× control) drive compensatory glucose disposal by non-GLUT4-dependent routes. GLUT1 is upregulated in the heart (1.5-fold) but neither GLUT1 nor GLUT2 is upregulated in skeletal muscle in *Glut4*-null animals [^katz1995].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | INSR→IRS→PI3K→AKT→AS160→Rab→GLUT4 axis is identical in humans; AS160 pThr642 confirmed in human tissue |
| Phenotype conserved in humans? | yes | Insulin resistance in type 2 diabetes involves GLUT4 translocation defect in human muscle; confirmed by muscle biopsy studies |
| Replicated in humans? | yes (for T2D defect) | Reduced GLUT4 membrane translocation documented in muscle biopsies from T2D patients and insulin-resistant subjects |

## Aging relevance

### Reduced GLUT4 expression and translocation in aged muscle

Skeletal muscle GLUT4 protein content and insulin-stimulated translocation efficiency both decline with aging in humans and rodents [^klip2014]. Contributing mechanisms include:

- **Reduced GLUT4 gene expression** — aging muscle shows lower *SLC2A4* mRNA, partly attributable to reduced PPAR-γ coactivator activity and epigenetic changes at the GLUT4 promoter #gap/needs-replication
- **Impaired AKT → AS160 phosphorylation** — aged muscle shows reduced insulin-stimulated AKT Thr308 and AS160 Thr642 phosphorylation, reflecting upstream IRS-1 and PI3K impairment (see [[insulin-igf1]], [[akt]] pages)
- **Actin cytoskeleton remodeling defects** — GSV trafficking requires dynamic cortical actin reorganization; aged muscle myocytes show impaired insulin-stimulated F-actin remodeling #gap/no-mechanism

These changes contribute to the well-characterized age-associated decline in glucose disposal rate measured by glucose clamp techniques.

### Type 2 diabetes connection

GLUT4 translocation failure is the proximate cellular defect responsible for impaired insulin-stimulated glucose disposal in [[type-2-diabetes]] [^klip2014]. In T2D skeletal muscle:

- Total cellular GLUT4 protein is modestly reduced (~20–40%)
- More importantly, the insulin-stimulated translocation *efficiency* is severely impaired — GLUT4 fails to translocate to the plasma membrane in proportion to the insulin signal
- Downstream of this failure, glucose disposal is impaired even when insulin secretion is adequate

### Exercise as GLUT4 enhancement therapy

Aerobic and resistance exercise acutely and chronically increase GLUT4 in skeletal muscle — the most potent and reliable non-pharmacological intervention:

- **Acute exercise** stimulates GLUT4 translocation via AMPK (contraction-stimulated, insulin-independent pathway) — effective even in insulin-resistant muscle
- **Chronic training** increases total cellular GLUT4 protein expression (via transcriptional upregulation, partly through PGC-1α) — this is one mechanism by which exercise reverses insulin resistance

#gap/dose-response-unclear — optimal exercise modality (aerobic vs resistance vs combined), frequency, and intensity for maximal GLUT4 restoration in aged muscle remain incompletely defined.

## Pathway membership

- [[insulin-igf1]] — GLUT4 is the primary effector for insulin-stimulated glucose uptake
- [[pi3k-akt-pathway]] — AKT-AS160 axis is the proximal driver of translocation
- [[ampk]] — contraction-stimulated, insulin-independent GLUT4 translocation route

## Key interactors

| Interactor | Role | Evidence type |
|---|---|---|
| [[akt]] | Phosphorylates AS160 → enables GSV release | In vitro + in vivo; Thr642 phosphorylation confirmed |
| [[as160]] | Rab-GAP; substrate of AKT; phospho-AS160 releases Rab10/Rab14 from GDP-locked state | [^sano2003] #gap/no-fulltext-access |
| [[insr]] | Upstream receptor; initiates insulin signaling cascade | Established |
| [[irs-1]] | Adaptor; IRS-1 pTyr recruits PI3K p85 | Established |
| VAMP2 | v-SNARE on GSVs; drives GSV-plasma membrane fusion | Established (not yet a wiki page) |

## Pharmacological modulation

| Agent | Mechanism | GLUT4 Effect | Evidence level |
|---|---|---|---|
| Insulin | Direct (activates INSR→AKT→AS160) | Acute translocation | Established |
| Metformin | AMPK activation (complex I inhibition → AMP:ATP rise) | Increased GLUT4 translocation (AMPK route) | Strong (T2D clinical use) |
| Thiazolidinediones (PPAR-γ agonists) | PPAR-γ transcriptional upregulation of *SLC2A4* | Increased GLUT4 protein expression | Strong (clinical); #gap/long-term-unknown for aging |
| GLP-1 receptor agonists (e.g., semaglutide) | Indirectly — weight loss + improved insulin sensitivity upstream | Improved translocation (secondary) | Strong (clinical T2D) |
| Exercise | AMPK + PGC-1α (translocation + transcription) | Acute translocation + chronic protein upregulation | Strong (human biopsy data) |
| Rapamycin / mTOR inhibition | Complex (mTORC2 contributes to AKT Ser473; mTORC1 affects IRS-1 feedback) | Ambiguous; can impair insulin signaling acutely | Contested #gap/contradictory-evidence |

## Limitations and gaps

- **GLUT4 expression decline with aging: magnitude unclear** — published fold-changes vary across studies; sex, training history, and biopsy technique all confound; systematic meta-analysis needed. #gap/needs-replication
- **Tissue-specific KO phenotypes in mouse** — muscle- and adipose-specific GLUT4 KO phenotypes are established in mouse but direct human genetic equivalents (rare loss-of-function SLC2A4 variants) are not well characterized. #gap/needs-human-replication
- **GSV subpopulation heterogeneity** — evidence suggests multiple biochemically distinct GLUT4-containing vesicle pools with different insulin sensitivities; functional significance in aging not clear. #gap/no-mechanism
- **Brain GLUT4 role** — neuronal GLUT4 in hippocampus may contribute to cognitive insulin sensitivity; aging-related changes unstudied. #gap/needs-replication
- **Non-glucose substrates** — GLUT4 also transports galactose and dehydroascorbic acid; physiological relevance in aging contexts unexplored. #gap/unsourced

## Cross-references

- [[insr]] — upstream receptor; INSR-AKT-AS160 axis described there (verified-partial)
- [[insulin]] — ligand; verified-partial
- [[insulin-igf1]] — pathway page covering the full IIS axis; verified-partial
- [[akt]] — kinase substrate (phosphorylates AS160); detailed AKT biochemistry there (verified)
- [[as160]] — direct substrate of AKT in this pathway; key Rab-GAP controlling GSV release
- [[type-2-diabetes]] — GLUT4 translocation defect is the proximate mechanism; verified-partial
- [[skeletal-muscle]] — primary tissue for GLUT4-dependent glucose disposal
- [[adipose-tissue]] — second major GLUT4 tissue (page planned)
- [[ampk]] — contraction-stimulated parallel route to GLUT4 translocation
- [[deregulated-nutrient-sensing]] — hallmark page; GLUT4 insufficiency is a downstream manifestation

## Footnotes

[^james1989]: doi:10.1038/338083a0 · James DE, Strube M, Mueckler M · n=N/A · in-vitro + expression cloning · model: rat adipose/muscle cDNA library · 907 citations; 100th percentile impact; archive: not_oa (closed access) #gap/no-fulltext-access

[^sano2003]: doi:10.1074/jbc.C300063200 · Sano H et al. · n=N/A · in-vitro (biochemistry + cell biology) · model: 3T3-L1 adipocytes + in vitro kinase assay · 952 citations; 100th percentile impact; archive: failed (hybrid OA — no candidate URLs resolved; #gap/no-fulltext-access)

[^katz1995]: doi:10.1038/377151a0 · Katz EB et al. · n=N/A · in-vivo (mouse transgenic, whole-body KO) · model: *Glut4*-null Mus musculus · 472 citations; 100th percentile impact; **local PDF available** at 

[^klip2014]: doi:10.1152/ajpcell.00069.2014 · Klip A, Sun Y, Chiu TT, Foley KP · review · model: review of mammalian GLUT4 trafficking literature · 162 citations; 100th percentile impact; archive: not_oa (closed access) #gap/no-fulltext-access
