---
type: cell-type
aliases: [muscle fibers, skeletal muscle fibers, myocytes (mature), striated muscle cells]
cell-ontology-id: CL:0008002   # "skeletal muscle fiber" — confirmed via OLS/EBI ontology lookup 2026-06-15
tissue-of-origin: ["[[skeletal-muscle]]"]
key-markers-mouse: [desmin+, dystrophin+, MYH7+ (type I), Myh2+ (type IIa), Myh1+ (type IIx), Myh4+ (type IIb), sarcomeric-alpha-actinin+, titin+]
key-markers-human: [desmin+, dystrophin+, MYH7+ (type I), MYH2+ (type IIa), MYH1+ (type IIx), MYH4+ (type IIb — minimal in adult human), sarcomeric-alpha-actinin+]
self-renewal: no
aging-relevant: yes
affected-hallmarks:
  - "[[loss-of-proteostasis]]"
  - "[[mitochondrial-dysfunction]]"
  - "[[disabled-macroautophagy]]"
  - "[[deregulated-nutrient-sensing]]"
  - "[[chronic-inflammation]]"
  - "[[altered-intercellular-communication]]"
key-aging-phenotypes: ["[[sarcopenia]]", "[[frailty]]"]
typical-niche: "Enclosed within basal lamina (external lamina); each fiber flanked by resident [[satellite-cells]] lodged between sarcolemma and basal lamina; niche signals include IGF-1, myostatin/GDF8, PGE2, motor-axon-derived acetylcholine, and systemic cytokines"
niche-signaling: ["[[insulin-igf1]]", "[[mtor]]", "[[ampk]]", "[[tgf-beta]]"]
single-cell-aging-signature: null   # scRNA-seq signatures in post-mitotic myofibers are limited (nuclei per fiber impair standard protocols); snRNA-seq aging data not yet integrated; #gap/needs-singlecell-data
verified: true
verified-date: 2026-06-15
verified-by: claude
verified-scope: "Bodine 2001 (Science), Sandri 2004 (Cell), Masiero 2009 (Cell Metab), Piasecki 2016 (Biogerontology), Bodine & Baehr 2014 (AJP-Endo) verified against primary PDFs. Nilwik 2013 (Exp Gerontol) verified against PubMed abstract (closed-access, full PDF unavailable). Oldfors 2004 (Acta Myol) verified against PubMed metadata only — DOI in original footnote was invalid (404); paper title/scope confirmed; closed-access. CL:0008002 confirmed via EBI OLS. Kimoloi 2022, Oexner 2020, Coletti 2022, Bakooshli 2023, De Bandt 2016 not independently re-verified against full PDFs in this pass."
literature-checked-through: 2026-06-15
---


# Myofibers (Skeletal Muscle Fibers)

Skeletal muscle fibers — myofibers — are the terminally-differentiated, post-mitotic, multinucleated contractile cells that constitute the bulk of skeletal muscle mass. They are formed embryonically and postnatally by the fusion of proliferating myoblasts into syncytia containing hundreds to thousands of peripherally-positioned myonuclei within a shared cytoplasm (sarcoplasm). Because myofibers cannot divide, repair of damaged fibers depends entirely on the resident stem cell population, [[satellite-cells]], which fuse with existing fibers or with each other to form new myotubes. In aging, myofibers are the primary structural substrate of [[sarcopenia]]: they atrophy, lose mitochondrial competence, accumulate proteolytic damage, and are progressively denervated — collectively driving the decline in muscle mass, strength, and power that characterizes normal human aging.

This page is the canonical atomic home for myofiber biology. Tissue-level organization, satellite cell biology, and intervention evidence tables are on [[skeletal-muscle]]; the sarcopenic phenotype is on [[sarcopenia]].

---

## Identity and structure

Myofibers are **multinucleated syncytia** (each fiber may contain hundreds of myonuclei in long fibers), enveloped by the sarcolemma (plasma membrane) and an outer basal lamina. The sarcoplasm is packed with parallel myofibrils organized into sarcomeres — repeating contractile units delineated by Z-discs, consisting of interdigitated thick filaments (myosin) and thin filaments (actin, troponin, tropomyosin). Key structural proteins:

| Protein | Gene | Role |
|---|---|---|
| Myosin heavy chain (MyHC) | MYH7 / MYH2 / MYH1 / MYH4 | Principal force generator; isoform determines fiber type |
| Desmin | DES | Intermediate filament; links Z-discs laterally and to sarcolemma |
| Dystrophin | DMD | Connects cytoskeleton to extracellular matrix via DGC; structural integrity |
| Alpha-actinin (sarcomeric) | ACTN2 / ACTN3 | Z-disc cross-linker; anchors thin filaments |
| Titin | TTN | Elastic protein spanning Z-disc to M-line; myosin scaffold |

Myofibers are post-mitotic: **they do not undergo mitotic division**. Myonuclei are long-lived and can exchange mRNA across the syncytium via the myoplasmic reticulum, allowing regional specification of gene expression along fiber length (e.g., differences in NMJ-adjacent vs. central myonuclear domains).

---

## Fiber types and human myosin-heavy-chain isoform mapping

Human skeletal muscle contains three principal MyHC isoforms in adult limb muscles, encoding distinct contractile and metabolic phenotypes [^oldfors2004]:

| Fiber type | MyHC isoform | Gene | Metabolic profile | Fatigue resistance | Force / power |
|---|---|---|---|---|---|
| Type I (slow-twitch) | MyHC-I (slow) | **MYH7** | Oxidative; high mitochondrial density; high myoglobin | High | Low–moderate |
| Type IIa (fast oxidative) | MyHC-IIa | **MYH2** | Oxidative-glycolytic; intermediate | Moderate | Moderate–high |
| Type IIx (fast glycolytic) | MyHC-IIx | **MYH1** | Glycolytic; low mitochondrial density | Low | High |
| Type IIb (very fast) | MyHC-IIb | **MYH4** | Pure glycolytic | Very low | Very high |

**Key human-specific note:** Type IIb fibers (MYH4) are essentially absent in adult human limb muscles under normal physiological conditions, in contrast to rodents (where MYH4 predominates in fast hindlimb muscles). The "2B" fibers described in older human histochemical literature likely correspond to 2X fibers at the protein level; adult human limb muscle contains no more than trace MYH4 protein. The primary fast-fiber type in adult human muscle is Type IIa/IIx (MYH2/MYH1). #gap/needs-replication — the cited Oldfors 2004 reference is primarily a myopathy paper, not a dedicated fiber-type atlas; the MYH4/2B absence in humans is widely accepted in myology literature but the primary citation here is indirect. A Schiaffino & Reggiani review or a dedicated human proteomics study (e.g. Murgia et al. single-fiber proteomics) would be the preferred canonical reference.

In practice, many human fibers co-express two MyHC isoforms (I+IIa, IIa+IIx) — these "hybrid" fibers are more prevalent in muscle undergoing remodeling (training, detraining, aging) and represent transitional states along the fiber-type continuum.

---

## Aging biology

### Preferential Type II fiber atrophy

The most consistent and best-documented myofiber change with human aging is preferential atrophy of **Type II (fast-twitch) fibers**. Nilwik et al. (2013), in a cross-sectional biopsy study of 25 young (23±1 yr) and 26 elderly (71±1 yr) men, found that **Type II fiber cross-sectional area (CSA) was 29% smaller** in elderly men (P<0.001), and that this difference in Type II fiber size fully explained the reduction in quadriceps CSA between age groups (68±2 vs 80±2 cm²) [^nilwik2013]. Type I fiber size showed a non-significant trend toward smaller size in the elderly (P=0.052). After 6 months of resistance training, elderly participants increased Type II fiber CSA by 24±8% (P<0.01), accounting for the entire increase in quadriceps muscle CSA — establishing Type II fiber atrophy as the primary structural correlate of sarcopenic muscle loss.

This pattern is mechanistically linked to the preferential denervation of fast motor neurons with aging (see Neuromuscular junction section below), as well as to the inherent vulnerability of fast, glycolytic fibers to proteolytic pathways activated under anabolic insufficiency.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes (cross-sectional biopsy and imaging data; Nilwik 2013 and others) |
| Replicated in humans? | yes (multiple cross-sectional studies; longitudinal data more limited) |

### Ubiquitin-proteasome system (UPS) / atrogene axis

The primary molecular executor of myofiber protein degradation in aging and atrophy is the ubiquitin-proteasome system (UPS), regulated via the **atrogene axis**. Under anabolic insufficiency (reduced insulin-like growth factor 1 / IGF-1 signaling, reduced amino acid supply, or elevated inflammatory cytokines), the phosphoinositide 3-kinase (PI3K) / AKT kinase pathway is insufficiently activated, permitting nuclear translocation of **FOXO transcription factors** (primarily FOXO1 and FOXO3a).

FOXO3a directly binds the promoter of **atrogin-1** (also called MAFbx; gene: *FBXO32*) and drives its transcription, inducing myofiber atrophy [^sandri2004]. Bodine et al. (2001) identified both **atrogin-1 (MAFbx/FBXO32)** and **MuRF1 (Muscle RING Finger 1; gene: *TRIM63*)** as muscle-specific E3 ubiquitin ligases whose expression is strongly upregulated across multiple atrophy models — transcript profiling in rat across denervation, immobilization, and hindlimb suspension, plus dexamethasone and IL-1 treatment — with mouse KO experiments demonstrating that MAFbx−/− mice showed ~56% and MuRF1−/− mice ~36% sparing of muscle mass after 14-day denervation vs wild-type [^bodine2001]. MuRF1 targets structural myofibrillar proteins including myosin heavy chain isoforms for ubiquitin-mediated proteasomal degradation, directly reducing sarcomere protein content.

In aging human muscle, atrogin-1 and MuRF1 expression increases with age and correlates with reduced muscle mass [^bodine2014]. The upstream driver is the intersection of reduced IGF-1/AKT signaling (anabolic resistance — see below) and elevated pro-inflammatory cytokines. #gap/unsourced — the precise fold-induction of atrogin-1 and MuRF1 in biopsy samples from aged vs. young humans across multiple studies needs quantitative reconciliation against primary sources; see [[skeletal-muscle]] § Limitations and gaps.

Inflammatory signals independently activate this axis: tumor necrosis factor alpha (TNF-α) and interleukin-6 (IL-6) from senescent cells ([[cellular-senescence]] SASP) and from systemic inflammaging activate nuclear factor kappa B (NF-κB) → suppress AKT → derepress FOXO → induce atrogin-1/MuRF1, creating a direct cytokine-to-catabolism pathway in myofibers. #gap/unsourced — NF-κB → FOXO → atrogin induction in aged human muscle specifically needs primary citation separate from acute inflammation models.

### Anabolic resistance and mTORC1 blunting

Aged myofibers display **anabolic resistance**: the mTORC1 signaling response per unit amino acid stimulus is blunted relative to young muscle [^debandt2016]. The threshold amount of leucine required to maximally stimulate muscle protein synthesis (MPS) is higher in older adults than in young adults. Practical consequence: the protein recommended dietary allowance (RDA) of 0.8 g/kg/day is insufficient to maintain positive protein balance in older adults; current consensus ranges from 1.0–1.6 g/kg/day depending on activity level, with leucine content per meal (≥2.5–3 g) being the key mTORC1 trigger.

The molecular basis is an upstream defect in the AKT → TSC1/2 → RHEB → mTORC1 cascade combined with reduced mTORC1 lysosomal recruitment via the Ragulator complex, likely secondary to both reduced IGF-1 and altered amino acid transporter expression. This is distinct from the FOXO axis above — the two represent the parallel "suppress anabolism" and "activate catabolism" arms of myofiber proteostasis collapse in aging.

Full pathway detail: [[mtor]] and [[insulin-igf1]].

### Mitochondrial decline and COX-deficient ragged-red fibers

Aged myofibers accumulate **mitochondrial DNA (mtDNA) deletions** that expand clonally within individual fiber segments over decades, creating mosaic patches of segments with severely impaired respiratory chain activity. Histochemically, these appear as **cytochrome c oxidase (COX)-deficient segments** in modified Gomori trichrome staining — the classic "ragged-red fibers" (RRF) appearance reflecting mitochondrial proliferation in response to bioenergetic failure.

Kimoloi et al. (2022) demonstrated in a mouse model that mtDNA alterations in myofibers alone are insufficient to cause sarcopenia without concomitant effects on muscle stem cells — the COX-deficient fibers activate compensatory regeneration that, if the stem cell pool carries mtDNA deletions, leads to progressive fiber atrophy [^kimoloi2022]. Type IIB fibers show preferential vulnerability to mtDNA-deletion-induced respiratory chain defects [^oexner2020], consistent with their higher aerobic demand per unit mitochondrial density and their preferential atrophy in aging.

Overall mitochondrial content, cristae density, and maximal oxidative phosphorylation capacity decline in aged human skeletal muscle, paralleling the [[mitochondrial-dysfunction]] hallmark. Impaired [[mitophagy]] (see next section) prevents clearance of dysfunctional mitochondria.

| Dimension | Status |
|---|---|
| Pathway (mtDNA deletion accumulation) conserved in humans? | yes |
| COX-deficient fiber patches in aged human muscle? | yes (histopathologically documented in multiple studies) |
| Causal link to sarcopenia via stem cell interaction? | partial — mechanistic model in mice; human longitudinal causal data limited |

### Autophagy and mitophagy dysregulation

Constitutive autophagy is essential for myofiber homeostasis. Masiero et al. (2009) showed that muscle-specific conditional deletion of *Atg7* (the E1-like enzyme required for autophagosome formation) in mice — using a myosin light chain 1 fast (MLC1f) promoter-driven Cre — caused **profound muscle atrophy (~40% CSA reduction), age-dependent loss of specific force, accumulation of abnormal mitochondria, distended sarcoplasmic reticulum, and disorganized sarcomeres** [^masiero2009]. This established that autophagy flux is not merely a stress response in muscle but is continuously required to clear dysfunctional organelles and protein aggregates.

In aging myofibers, autophagy is dysregulated in a context-dependent manner:
- **Insufficient basal autophagy flux** — allows damaged mitochondria, oxidized proteins, and aggregated sarcomeric proteins to accumulate, driving the [[disabled-macroautophagy]] hallmark.
- **Impaired selective mitophagy** — dysfunctional mitochondria evade PINK1/Parkin-mediated mitophagy labeling; their persistence amplifies reactive oxygen species (ROS) production and contributes to the COX-deficient fiber phenotype.

| Dimension | Status |
|---|---|
| Atg7 KO myopathy pathway conserved in humans? | partial (ATG7 LOF mutations → myopathy in humans; mechanism presumed conserved) |
| Impaired autophagy flux in aged human muscle? | partial — indirect biomarker evidence; direct flux measurements limited |
| Replicated in humans? | no (Atg7 cKO is a mouse model) #gap/needs-human-replication |

### Neuromuscular junction denervation

Age-related loss of motor neurons and fragmentation of the **neuromuscular junction (NMJ)** is a major, often underappreciated, driver of myofiber atrophy. By approximately age 70, healthy older adults show approximately **40% fewer functional motor units** compared to young adults, with surviving motor units increasing in size (~50%) and complexity through collateral reinnervation of orphaned fibers [^piasecki2016]. Individual Type II fibers are preferentially denervated — consistent with the preferential loss of fast motor neurons with aging [^coletti2022]. Chronically denervated fibers undergo neurogenic atrophy via both UPS/atrogene activation and impaired anabolic signaling.

The prostaglandin-degrading gerozyme **[[15-pgdh]]** (gene: *HPGD*) rises in aged muscle and rises further after denervation, depleting local prostaglandin E2 (PGE2). Pharmacological inhibition of 15-PGDH with [[sw033291]] restored NMJ density, motor-axon regeneration, and contractile force in both acute crush-injury and chronically-denervated aged mice, with 15-PGDH aggregates marking "target fibers" in human neurogenic myopathies [^bakooshli2023]. This positions 15-PGDH as a gerozyme acting across both myofiber atrophy (via PGE2-EP4 → ↑mitochondrial biogenesis, ↑autophagy flux, ↓TGF-β, ↓UPS; see [[studies/palla-2021-15pgdh-muscle-rejuvenation]]) and the pre-synaptic NMJ. **Not yet in clinical trials as of 2026-06-15.** #gap/needs-human-replication

Full denervation mechanism and molecular detail: [[skeletal-muscle]] § Neuromuscular junction degeneration; see also [[studies/bakooshli-2023-15pgdh-nmj-regeneration]] and [[studies/palla-2021-15pgdh-muscle-rejuvenation]].

---

## Hallmark connections

| Hallmark | Myofiber mechanism |
|---|---|
| [[loss-of-proteostasis]] | Atrogin-1/MuRF1 UPS axis degrades myosin; protein aggregates accumulate; sarcomere disorganization |
| [[mitochondrial-dysfunction]] | mtDNA deletions → COX-deficient fiber segments; impaired mitophagy; reduced oxidative capacity |
| [[disabled-macroautophagy]] | Atg7 KO phenotype: atrophy + organelle accumulation; impaired autophagy flux with age |
| [[deregulated-nutrient-sensing]] | Anabolic resistance: blunted mTORC1 per amino acid stimulus; IGF-1/AKT pathway insufficiency |
| [[chronic-inflammation]] | Inflammaging cytokines (IL-6, TNF-α) activate NF-κB → suppress AKT → derepress FOXO → induce atrogin-1/MuRF1 |
| [[altered-intercellular-communication]] | Denervation (motor neuron-myofiber signaling disrupted); systemic milieu drives anabolic resistance; 15-PGDH/PGE2 axis |

---

## Aging-protective interventions (summary)

Full ranked evidence table is on [[skeletal-muscle]]; listed here for navigational completeness with myofiber-specific mechanism:

- **Resistance training** — activates mTORC1, stimulates myofibrillar protein synthesis, induces Type II fiber hypertrophy specifically; reverses atrogin-1/MuRF1 induction; most evidence-supported intervention.
- **Adequate protein intake (≥1.2 g/kg/day in older adults; leucine-rich sources preferred)** — overcomes anabolic resistance threshold; whey protein and leucine supplementation transiently restore mTORC1 response.
- **15-PGDH inhibition (preclinical; [[sw033291]])** — restores PGE2-EP4 → mitochondrial biogenesis + autophagy + reduced UPS; also restores NMJ. Preclinical only; cancer-aging tradeoff caveat (15-PGDH is a colon tumor suppressor; see [[frameworks/cancer-aging-tradeoffs]]). #gap/needs-human-replication
- **Senolytics ([[fisetin]], dasatinib + quercetin)** — remove p16+ senescent satellite cells and SASP producers from the myofiber niche, reducing inflammaging-driven catabolism. Preclinical evidence only for sarcopenia endpoint. #gap/needs-human-replication

---

## Limitations and gaps

- `#gap/unsourced` — quantitative fold-induction of atrogin-1 (FBXO32) and MuRF1 (TRIM63) in aged human muscle biopsies vs. young; see [[skeletal-muscle]] § Limitations and gaps for parent tracking of this gap.
- `#gap/unsourced` — NF-κB → FOXO → atrogin induction cascade in aged (vs. acutely inflamed) human muscle: mechanism is extrapolated from in vitro cytokine treatment models; aged human muscle primary citation needed.
- `#gap/needs-replication` — MYH4/Type IIb fiber absence in adult human limb muscle: the cited Oldfors 2004 reference is a myopathy paper, not a dedicated fiber-type atlas; recommend replacing or supplementing with a Schiaffino & Reggiani review or Murgia et al. single-fiber proteomics study as the canonical human isoform citation.
- `#gap/needs-human-replication` — Atg7 muscle-conditional KO myopathy (Masiero 2009; MLC1f-Cre;Atg7^flox/flox mice) is mouse evidence; human ATG7 loss-of-function mutations do cause myopathy but the aging-context flux-suppression claim is not directly established in aged human biopsies.
- `#gap/needs-human-replication` — 15-PGDH / SW033291 / NMJ restoration: all preclinical mouse evidence; no registered human trial as of 2026-06-15.
- `#gap/needs-human-replication` — Senolytics clearing SASP from myofiber niche: no sarcopenia-specific human trial.
- `#gap/needs-singlecell-data` — Single-nucleus RNA-seq aging signature of myofibers not integrated (snRNA-seq required for post-mitotic multinucleated cells; Tabula Muris Senis has limited myofiber snRNA data).
- `#gap/contradictory-evidence` — Autophagy paradox: insufficient basal autophagy causes myopathy (Masiero 2009), yet excessive autophagy flux is also observed in some wasting conditions; the net aging direction in any given muscle bed is context-dependent.
- `#gap/long-term-unknown` — Long-term consequences of 15-PGDH inhibition on colon cancer risk not characterized in aging-specific therapeutic context.

---

## See also

- [[skeletal-muscle]] — parent tissue page; tissue-level anatomy, ranked intervention table, full hallmark-connection summary
- [[satellite-cells]] — the repair apparatus for myofibers; age-related dysfunction upstream of further fiber atrophy
- [[fibroadipogenic-progenitors]] — interstitial niche cells driving myosteatosis and fibrosis in aged muscle
- [[sarcopenia]] — the defining clinical phenotype of myofiber aging
- [[frailty]] — composite syndrome in which myofiber loss is the dominant musculoskeletal driver
- [[mtor]] — mTORC1 anabolic axis; blunted in aged myofibers
- [[ampk]] — energy-sensing kinase; exercise-induced AMPK activation partially bypasses anabolic resistance
- [[insulin-igf1]] — upstream of AKT/FOXO; insufficiency drives atrogene induction
- [[mitochondrial-dysfunction]] — hallmark page; COX-deficient fiber patches are a canonical example
- [[disabled-macroautophagy]] — hallmark page; Atg7 muscle cKO is an exemplar
- [[chronic-inflammation]] — hallmark page; inflammaging cytokines → UPS induction in myofibers
- [[deregulated-nutrient-sensing]] — hallmark page; anabolic resistance and AMPK axis
- [[loss-of-proteostasis]] — hallmark page; atrogin-1/MuRF1 axis and sarcomere protein degradation
- [[altered-intercellular-communication]] — hallmark page; systemic milieu and NMJ denervation
- [[15-pgdh]] — gerozyme elevated in aged and denervated muscle
- [[sw033291]] — canonical 15-PGDH small-molecule inhibitor (research tool)
- [[studies/palla-2021-15pgdh-muscle-rejuvenation]] — 15-PGDH inhibition rejuvenates aged muscle
- [[studies/bakooshli-2023-15pgdh-nmj-regeneration]] — 15-PGDH inhibition restores NMJ

---

## Footnotes

[^oldfors2004]: PMID 15605950 (no valid CrossRef DOI registered for Acta Myologica 2004 issues) · Oldfors A, Tajsharghi H, Darin N, Lindberg C · "Myopathies associated with myosin heavy chain mutations" · Acta Myologica 2004;23(2):90-96 · review of mutation-associated myopathies · model: human · Contains canonical MYH isoform assignments: Type I fibres = MYH7; type 2A fibres = MYH2; type 2B fibres (histochemical) = MYH1 (IIx at the protein level); MYH4 (true IIb) minimal to absent in adult human limb muscle · Note: this paper's primary focus is congenital myopathies from MYH mutations, not a normal fiber-type atlas; the isoform table is incidental to the main thesis. For the canonical adult human fiber-type isoform table, also see Schiaffino & Reggiani reviews. · #gap/no-fulltext-access — closed-access; metadata and abstract confirmed via PubMed efetch; original DOI string in wiki was invalid (404)

[^nilwik2013]: doi:10.1016/j.exger.2013.02.012 · Nilwik R, Snijders T, Leenders M, Groen BB, van Kranenburg J, Verdijk LB, van Loon LJ · Experimental Gerontology 2013;48(5):492-498 · PMID 23425621 · cross-sectional biopsy study · n=25 young (23±1 yr) + 26 elderly (71±1 yr) men · Type II fiber CSA 29% smaller in elderly (P<0.001); Type I fiber showed a non-significant trend toward smaller size (P=0.052); Type II fiber atrophy fully explained the reduction in quadriceps CSA (68±2 vs 80±2 cm²); 6-month resistance training increased Type II fiber CSA by 24±8% (P<0.01), accounting for 100±3% of the increase in quadriceps CSA · model: human · closed-access, abstract verified via PubMed #gap/no-fulltext-access · citation_percentile 100 (721 citations)

[^sandri2004]: doi:10.1016/s0092-8674(04)00400-3 · Sandri M, Sandri C, Gilbert A, Skurk C, Calabria E, Picard A, Walsh K, Schiaffino S, Lecker SH, Goldberg AL · Cell 2004;117(3):399-412 · PMID 15109499 · in-vivo + in-vitro · model: mouse (C57BL/6) + C2C12 myotubes · FOXO3a directly binds atrogin-1 promoter and induces transcription; IGF-1/AKT activation inhibits FOXO and atrogin-1; blocking FOXO activation prevents starvation-induced atrogin-1 induction and glucocorticoid-induced atrophy · citation_percentile 100 (2905 citations)

[^bodine2001]: doi:10.1126/science.1065874 · Bodine SC, Latres E, Baumhueter S, Lai VK, Nunez L, Clarke BA et al. · Science 2001;294(5547):1704-1708 · PMID 11679633 · in-vivo · model: rat (Sprague Dawley; transcript profiling in 3 atrophy models: denervation, immobilization, hindlimb suspension) + mouse KO validation · transcript profiling identified MAFbx (atrogin-1/FBXO32) and MuRF1 (TRIM63) as the 2 genes upregulated across all atrophy conditions; also upregulated by dexamethasone and IL-1; MAFbx−/− mice showed 56% muscle mass sparing at 14d denervation vs WT; MuRF1−/− showed 36% sparing at 14d; n=5–10 mice/group · citation_percentile 100 (3428 citations)

[^bodine2014]: doi:10.1152/ajpendo.00204.2014 · Bodine SC, Baehr LM · American Journal of Physiology - Endocrinology and Metabolism 2014 · PMID 25096180 · review · atrogin-1/FBXO32 and MuRF1/TRIM63 are established markers and mediators of muscle atrophy across multiple conditions including aging; review of substrate specificity and regulatory evidence

[^debandt2016]: doi:10.3945/jn.116.234518 · De Bandt JP · Journal of Nutrition 2016 · PMID 27934653 · review · anabolic resistance in aged muscle: decreased sensitivity and responsiveness of muscle protein synthesis to amino acids; leucine supplementation partially mitigates via mTORC1 activation; aged muscle shows reduced mTORC1 signaling per unit leucine stimulus

[^masiero2009]: doi:10.1016/j.cmet.2009.10.008 · Masiero E, Agatea L, Mammucari C, Blaauw B, Loro E, Komatsu M, Metzger D, Reggiani C, Schiaffino S, Sandri M · Cell Metabolism 2009;10(6):507-515 · PMID 19945408 · in-vivo · model: mouse — muscle-specific Atg7 conditional KO (MLC1f-Cre;Atg7^flox/flox; myosin light chain 1 fast promoter drives Cre) · Atg7 deletion → profound muscle atrophy (~40% CSA reduction in both sexes), age-dependent decrease in specific force, accumulation of abnormal mitochondria, distended sarcoplasmic reticulum, disorganized sarcomeres; atrogin-1 and MuRF1 transcriptionally upregulated; autophagy inhibition exacerbated muscle loss under denervation and fasting · highly cited (~1242 citations)

[^kimoloi2022]: doi:10.1002/jcsm.13026 · Kimoloi S, Sen A, Guenther S, Braun T, Brügmann T, Sasse P, Wiesner RJ, Pla-Martín D, Baris OR · Journal of Cachexia, Sarcopenia and Muscle 2022;13(4):2132-2145 · PMID 35765148 · in-vivo · model: mouse (K320E^skm — mtDNA instability in myofibers; K320E^msc — in muscle stem cells) · mtDNA deletions in myofibers alone caused COX-deficient fiber patches (up to 17% in gastrocnemius) but preserved muscle mass; stem cell mtDNA alterations caused impaired regeneration and sarcopenia; combined data support a two-hit model #gap/needs-human-replication

[^oexner2020]: doi:10.1167/iovs.61.12.14 · Oexner RR, Pla-Martín D, Paß T et al. · Investigative Ophthalmology & Visual Science 2020;61(12):14 · PMID 33057669 · in-vivo · model: mouse · Type IIB fibers show selective vulnerability to mtDNA deletion-induced respiratory chain defects; COX-deficiency increased from 1.04% at 12 mo to 7.01% at 24 mo · #gap/needs-human-replication — mouse extraocular muscle model; fiber-type selectivity in human limb aging muscle not directly established here

[^piasecki2016]: doi:10.1007/s10522-015-9627-3 · Piasecki M, Ireland A, Jones DA, McPhee JS · Biogerontology 2016;17(3):485-496 · PMID 26667009 · review · model: human (electromyographic motor unit counting studies) · approximately 40% fewer motor units by age ~71 vs young adults; surviving motor units enlarge ~50% via collateral reinnervation; NMJ transmission stability decreases with age · OA (hybrid) · citation_percentile 100 (159 citations)

[^coletti2022]: doi:10.4081/ejtm.2022.10416 · Coletti C, Acosta GF, Keslacy S, Coletti D · European Journal of Translational Myology 2022;32(1):10416 · PMID 35234025 · review · Type II fast fibers preferentially undergo denervation and are reinnervated by slow motor neurons; exercise promotes reinnervation in aging

[^bakooshli2023]: [[studies/bakooshli-2023-15pgdh-nmj-regeneration]] · doi:10.1126/scitranslmed.adg1485 · PMID 37820010 · PMC10763629 · Bakooshli MA et al., Blau HM lab · Science Translational Medicine 2023;15(717):eadg1485 · in-vivo (sciatic crush + chronic denervation + aged mouse) + human IHC · 15-PGDH inhibition → motor-axon regeneration, NMJ restoration, force recovery; 15-PGDH aggregates define "target fibers" in human neurogenic myopathies · AI-extracted from PubMed abstract; PMC PDF not end-to-end verified
