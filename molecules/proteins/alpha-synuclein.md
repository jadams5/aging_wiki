---
type: protein
aliases: [SNCA, NACP, non-amyloid-beta component precursor, synuclein alpha, alpha-synuclein]
uniprot: P37840
ncbi-gene: 6622
hgnc: 11138
mouse-ortholog: Snca
ensembl: ENSG00000145335
druggability-tier: 2
caused-by: []
causes: []
key-domains: [N-terminal-amphipathic-helix, NAC-region, C-terminal-acidic-tail]
key-ptms: [Ser129-phosphorylation, Tyr125-phosphorylation, Lys-ubiquitination, N-terminal-acetylation]
pathways: ["[[chaperone-mediated-autophagy]]"]
hallmarks: ["[[loss-of-proteostasis]]", "[[disabled-macroautophagy]]"]
known-interactors: ["[[hsc70]]", "[[lamp-2a]]", "[[parkin]]", "[[pink1]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "All four primary source PDFs closed-access (not_oa or download failed); verification performed against PubMed abstracts, MeSH metadata (efetch XML for Cuervo 2004), Crossref bibliographic records, UniProt REST API (P37840), and HGNC REST API. Two factual corrections made: (1) MEF2D attribution moved from Cuervo 2004 to Yang 2009 (PMID 19119233) — confirmed by MeSH exclusion of MEF2D in Cuervo 2004; (2) SH-SY5Y cell line in Cuervo 2004 footnote corrected to PC12 cells — confirmed by MeSH D016716. Full-text quantitative claims (kinetics, rates, specific residue-level binding data) cannot be verified without PDF access. Singleton 2003 onset age (~35 yr) and Spillantini 1997 Lewy neurite / DLB claims not independently verifiable from available open-access content."
---

# α-Synuclein (SNCA)

A 140-amino-acid intrinsically disordered protein highly expressed at CNS presynaptic terminals. Best known as the principal protein component of **Lewy bodies** and **Lewy neurites** — the intraneuronal inclusions that define [[parkinsons-disease]] and related synucleinopathies [^spillantini1997]. Under physiological conditions α-synuclein assists synaptic vesicle recycling and neurotransmitter release; pathologically it converts to β-sheet-rich amyloid fibrils that resist clearance by [[chaperone-mediated-autophagy]] and macroautophagy, making it a central node in the [[loss-of-proteostasis]] hallmark of brain aging.

## Identity

- **UniProt:** P37840 (SYUA_HUMAN)
- **NCBI Gene:** 6622
- **HGNC symbol:** SNCA
- **Mouse ortholog:** Snca (high sequence conservation; widely used in transgenic PD models)
- **Length:** 140 amino acids (canonical human isoform)
- **Intrinsic disorder:** Monomeric α-synuclein is largely unstructured in solution; adopts defined secondary structure only upon lipid-membrane binding or aggregation
- **Historical alias:** NACP (non-amyloid-beta component precursor) — named before its role in PD was established

## Domain organization

α-Synuclein is divided into three functionally distinct regions:

| Region | Residues | Properties | Function |
|---|---|---|---|
| N-terminal amphipathic helix | 1–60 | Contains 7 imperfect KTKEGV repeats; adopts α-helical structure on lipid membranes | Lipid binding; membrane curvature sensing; vesicle association |
| NAC (non-amyloid component) | 61–95 | Highly hydrophobic; aggregation-prone; forms β-sheet core of amyloid fibrils | Essential for fibril nucleation and elongation; deletion of NAC prevents fibril formation |
| C-terminal acidic tail | 96–140 | Intrinsically disordered; rich in acidic residues; contains Ser129 (major phosphorylation site) | Calcium binding; interaction with chaperones; modulates aggregation rate |

The NAC region is the critical aggregation nucleus: deletion of residues 71–82 within NAC abolishes fibril formation in vitro. #gap/needs-replication (deletion studies conducted primarily in vitro; intracellular aggregation propensity of NAC-deletion mutants is less characterized).

## Native function

α-Synuclein is enriched at presynaptic terminals and associates with the cytoplasmic face of synaptic vesicles. Current understanding of its physiological role:

- **SNARE complex assembly** — promotes assembly of the SNARE complex (particularly VAMP2/synaptobrevin), facilitating vesicle priming and fusion during neurotransmitter release #gap/unsourced (specific mechanism debated; primary citation for SNARE chaperone function needed)
- **Vesicle trafficking and pool maintenance** — modulates the reserve pool of synaptic vesicles; α-synuclein null mice show subtle deficits in dopamine release kinetics but are otherwise viable and fertile
- **Lipid membrane binding** — the amphipathic N-terminal helix inserts into curved membranes; this interaction modulates membrane curvature and may assist vesicle budding

**Native oligomerization state — contested:** An influential proposal holds that native α-synuclein exists as a helically folded tetramer resistant to aggregation (Bartels et al. 2011; Bhardwaj et al. 2018), with pathological aggregation requiring prior tetramer-to-monomer conversion. The counter-view holds that native α-synuclein is intrinsically disordered monomer that aggregates directly. The debate remains unresolved. #gap/contradictory-evidence — the tetramer hypothesis has not achieved consensus; most mechanistic aggregation studies use purified recombinant monomer.

## Pathological aggregation

The transition from functional monomer to cytotoxic aggregates proceeds through several stages:

```
Monomer (disordered) → Oligomers (soluble; β-sheet-rich; TOXIC) → Protofibrils → Fibrils → Lewy bodies / Lewy neurites
```

Key mechanistic features:

1. **Toxic species — oligomers, not mature fibrils**: Current evidence favors soluble oligomeric intermediates — not mature amyloid fibrils — as the primary toxic species. Oligomers permeabilize membranes, impair mitochondrial function, and disrupt vesicle trafficking. Mature fibrils may sequester toxic oligomers, making their net effect ambiguous. #gap/contradictory-evidence — whether fibrils are neutral, protective, or also toxic is unresolved.

2. **NAC-driven β-sheet conversion**: Aggregation is nucleated by the NAC region adopting cross-β-sheet geometry. The rate is accelerated by: elevated protein concentration (as in SNCA duplications/triplications), metal ions (Cu²⁺, Fe³⁺), pesticides (rotenone, paraquat), lipid membranes, and seeding by pre-formed fibrils.

3. **Lewy bodies as cellular sinks**: Mature Lewy bodies contain hyperphosphorylated (pSer129), ubiquitinated α-synuclein fibrils embedded in a matrix of hundreds of other proteins including chaperones, proteasomal subunits, and lipid droplet components. Their formation may represent a cellular attempt to sequester toxic oligomers [^spillantini1997].

4. **Clearance resistance**: Fibrils and large oligomers cannot enter the [[chaperone-mediated-autophagy]] translocation complex (too large to thread through LAMP-2A channel). They must be cleared by macroautophagy ([[autophagy]]) or the [[ubiquitin-proteasome-system]], both of which decline with age.

## Genetics — SNCA as a PD-causative gene

### Missense mutations (autosomal dominant)

The first causal PD gene was identified in 1997: Polymeropoulos et al. found that the A53T missense mutation in *SNCA* segregated with autosomal dominant PD in Italian and Greek kindreds [^polymeropoulos1997]. Subsequent mutations identified:

| Mutation | Discovery | Clinical notes |
|---|---|---|
| A53T (Ala53Thr) | Polymeropoulos 1997 [^polymeropoulos1997] | First PD-causative mutation identified; accelerates fibril formation in vitro |
| A30P (Ala30Pro) | Krüger 1998 | Reduces membrane binding; impairs CMA substrate recognition |
| E46K (Glu46Lys) | Zarranz 2004 | Associated with Lewy body dementia phenotype; promotes membrane binding |
| H50Q (His50Gln) | Appel-Cresswell 2013 | Accelerates aggregation; rare |
| G51D (Gly51Asp) | Lesage 2013 | Severe early-onset; attenuates membrane binding and aggregation |

All missense mutations accelerate some aspect of the aggregation pathway or impair CMA/autophagy-mediated clearance.

### Gene duplications and triplications (dose-dependent disease)

A critical genetic insight came with the demonstration that **simple copy-number increases in wild-type SNCA are sufficient to cause PD** — and that dose correlates with severity:

- **SNCA triplication** — causes familial PD with unusually early onset (~35 years) and rapid progression including dementia; triplication identified in the Spellman-Muenter kindred [^singleton2003]
- **SNCA duplication** — causes PD with later onset and slower progression than triplication; same SNCA protein, more of it

This dose-response relationship established that **α-synuclein accumulation per se** — not a mutant protein — is sufficient to cause neurodegeneration, strongly implicating proteostatic failure as central rather than gain-of-toxic-function from a specific mutation [^singleton2003].

| Dimension | Status |
|---|---|
| Pathway conserved across mammals? | yes — SNCA is conserved in vertebrates |
| Gene-dose → severity relationship in humans? | yes — duplication vs triplication families directly compared [^singleton2003] |
| Animal model recapitulation? | partial — SNCA-A53T transgenic mice develop motor dysfunction and inclusions but not overt dopaminergic neurodegeneration matching human PD |

## α-Synuclein and chaperone-mediated autophagy

Wild-type α-synuclein is a canonical substrate of [[chaperone-mediated-autophagy]] (CMA) via a KFERQ-like motif recognized by cytosolic HSC70. Mutant forms (A53T, A30P) interact aberrantly with the LAMP-2A receptor:

- **Normal (WT) turnover**: HSC70 recognizes the KFERQ-like motif in WT α-synuclein → substrate is targeted to LAMP-2A at the lysosomal membrane → translocated into the lysosomal lumen → degraded by cathepsins. CMA accounts for a substantial fraction of α-synuclein turnover under basal conditions.

- **Mutant α-synuclein blocks CMA (uptake-blocker mechanism)**: A53T and A30P α-synuclein bind LAMP-2A at the lysosomal surface but cannot be translocated — they occupy the receptor without entering the lumen. This receptor blockade inhibits CMA of all other substrates [^cuervo2004]. One such collaterally impaired substrate is MEF2D (a neuronal survival transcription factor), whose CMA-dependent degradation is disrupted by both WT and mutant α-synuclein, increasing neuronal vulnerability [^yang2009].

- **LAMP-2A decline amplifies the problem**: LAMP-2A protein levels fall with age at the lysosomal membrane (see [[chaperone-mediated-autophagy]] for mechanism). The combination of rising α-synuclein burden (from impaired clearance) and declining LAMP-2A (from aging) creates a reinforcing proteostatic bottleneck specific to post-mitotic neurons.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — KFERQ motif and LAMP-2A translocation machinery are conserved |
| LAMP-2A uptake-blocker mechanism in humans? | partial — established in cell models (Wistar rat lysosomes, PC12 cells, primary neurons; Cuervo 2004); human PD-brain data are correlative (reduced LAMP-2A and HSC70 in PD substantia nigra postmortem) |
| Replicated independently? | partial — Cuervo 2004 [^cuervo2004] is the primary mechanistic study; substantive independent replication in cell/animal models followed |

#gap/needs-human-replication — The causal chain from mutant α-syn → LAMP-2A blockade → neurodegeneration has not been established prospectively in human subjects.

## Prion-like propagation (Braak hypothesis)

A central unresolved question in PD biology is whether α-synuclein pathology spreads through the brain in a prion-like manner — with misfolded α-synuclein acting as a template to convert native protein in connected neurons. Evidence for and against:

**For propagation:**
- Lewy pathology in PD follows a largely stereotyped caudal-to-rostral staging pattern (Braak staging, stages 1–6) consistent with trans-neuronal spread
- α-Synuclein fibrils injected into rodent striatum initiate propagating Lewy-like pathology across connected regions
- Postmortem analysis of patients who received fetal dopaminergic neuron grafts showed Lewy bodies in grafted cells ~10–16 years post-transplant (Kordower et al. 2008; Li et al. 2008) — suggesting host-to-graft transmission #gap/unsourced (Kordower/Li 2008 not yet cited on this wiki; stub candidate)

**Against / complicating:**
- Not all PD brains follow Braak staging; ~6–8% show SNc pathology without lower brainstem involvement (Braak "skippers")
- It is unclear whether spread is trans-neuronal or via extracellular seeding of oligomers/exosomes
- The clinical αSyn-SAA biomarker confirms synucleinopathy but cannot track staging in living patients

#gap/contradictory-evidence — the prion-like spreading mechanism is the dominant framework but not mechanistically proven in humans.

## Therapeutic angles

No disease-modifying therapy targeting α-synuclein has demonstrated efficacy in a well-powered Phase 3 trial as of 2026. Current investigational approaches:

**Druggability — tier-2 (re-rated 2026-05-08).** No α-synuclein-targeted drug is FDA-approved for any indication; the most advanced candidates (prasinezumab PRX002, cinpanemab BIIB054 — both anti-α-synuclein passive immunotherapies) failed Phase 2 primary endpoints in Parkinson's disease. The earlier tier-1 assignment reflected the depth of clinical-stage activity targeting α-synuclein in PD (multiple Phase 1–2 immunotherapies, ASO programs, anti-aggregation small molecules), but the strict Open Targets criterion (`Approved Drug = true` for an aging indication) does not apply, and after the Phase 2 immunotherapy failures the tier-1 designation was no longer defensible. Tier-2 ("high-quality probe") accurately reflects the current state: well-characterized clinical-stage programs without an approved or efficacious agent. The protein remains a central node in [[loss-of-proteostasis]] / [[disabled-macroautophagy]] in brain aging.

| Approach | Mechanism | Status |
|---|---|---|
| Prasinezumab (PRX002/RG7935) | Anti-α-syn passive immunotherapy; targets aggregated forms | Phase 2 — post-hoc signal in fast progressors; overall primary endpoint not met #gap/long-term-unknown |
| Cinpanemab (BIIB054) | Anti-fibrillar α-syn monoclonal | Phase 2 — failed primary endpoint (SPARK trial 2023) |
| Anti-aggregation small molecules | Various (anle138b, NPT200-11) | Preclinical to Phase 1 #gap/dose-response-unclear |
| LAMP-2A / CMA restoration | Increase CMA receptor to clear substrate | Preclinical only (see [[chaperone-mediated-autophagy]] for QX77/CA77.1) #gap/needs-human-replication |
| Gene silencing (ASO/siRNA) | Reduce SNCA expression to lower substrate burden | Phase 1/2 (BIIB101 ASO; SNCA-targeting); readout pending #gap/long-term-unknown |

## Limitations and gaps

- **Toxic species identity**: Whether oligomers, protofibrils, or both are the primary toxic species is unresolved. Most intervention studies target fibrils (immunotherapy) but toxicity may reside upstream. #gap/contradictory-evidence
- **Native tetramer debate**: If the tetramer hypothesis is correct, therapies should stabilize the tetramer rather than prevent fibril formation — a distinct mechanistic target. This debate is unresolved. #gap/contradictory-evidence
- **Human CMA causal chain**: The LAMP-2A uptake-blocker mechanism [^cuervo2004] and MEF2D collateral impairment [^yang2009] are established in cell models; direct evidence in human PD brain is correlative. #gap/needs-human-replication
- **Propagation mechanism**: Cell-to-cell spread is demonstrated in model systems but the mechanism (exosomes, tunneling nanotubes, trans-synaptic fibril transfer) and its quantitative contribution to human disease progression remain unknown. #gap/no-mechanism
- **Braak staging exceptions**: ~8% of PD brains do not follow the predicted Braak sequence; the staging does not capture all PD subtypes. #gap/contradictory-evidence
- **Immunotherapy failures**: Two Phase 2 trials targeting aggregated α-synuclein failed their primary endpoints. Whether the target hypothesis, the timing of intervention, the choice of epitope, or patient selection explains this is unknown. #gap/no-mechanism
- **SNCA missense mutations — rarity**: Most missense mutations (A30P, E46K, H50Q, G51D) are extremely rare; functional inferences about aggregation propensity rely primarily on in vitro biophysics, not patient cohort data. #gap/needs-human-replication

## Cross-references

- [[parkinsons-disease]] — primary disease context; SNCA A53T verified-cited; Lewy body neuropathology; gene-dose severity from triplication/duplication
- [[chaperone-mediated-autophagy]] — canonical CMA substrate; A53T/A30P act as LAMP-2A uptake blockers impairing CMA of all substrates (Cuervo 2004); MEF2D collateral impairment by α-synuclein (Yang 2009); rate-limiting LAMP-2A decline with age
- [[loss-of-proteostasis]] — hallmark; α-synuclein aggregation as a central example
- [[disabled-macroautophagy]] — macroautophagy also required for fibril/oligomer clearance; both pathways decline with age
- [[neurodegeneration]] — parent category
- [[hsc70]] — cytosolic chaperone recognizing KFERQ-like motif on α-synuclein for CMA targeting (stub)
- [[lamp-2a]] — lysosomal membrane receptor blocked by A53T/A30P α-synuclein (stub)
- [[pink1]] — AR-PD gene; PINK1/Parkin pathway intersects with mitophagy in same dopaminergic neurons
- [[parkin]] — AR-PD gene; ubiquitinates α-synuclein (controversial) and mitochondrial substrates
- [[ubiquitin-proteasome-system]] — alternative clearance pathway for monomeric α-synuclein; impaired by aggregates (stub)
- [[lrrk2]] — AD-PD gene; LRRK2 kinase phosphorylates Rab GTPases regulating vesicle trafficking; interacts with α-syn pathology (stub)
- [[braak-staging]] — caudal-to-rostral staging of Lewy pathology (stub)

## Footnotes

[^polymeropoulos1997]: [[studies/polymeropoulos-1997-snca-a53t]] · doi:10.1126/science.276.5321.2045 · Polymeropoulos MH et al. · genetic linkage + sequencing · Science 1997;276(5321):2045–2047 · A53T missense in SNCA segregating with AD-PD in Italian and Greek kindreds; first identification of a PD-causative gene · n=small kindreds · in-vivo · model: human familial PD · archive: not_oa, no local PDF · 8,128 citations · #gap/no-fulltext-access

[^spillantini1997]: [[studies/spillantini-1997-alpha-synuclein-lewy-bodies]] · doi:10.1038/42166 · Spillantini MG et al. · immunohistochemistry · Nature 1997;388(6645):839–840 · α-synuclein is the principal protein component of Lewy bodies and Lewy neurites in PD and DLB; demonstrated by specific α-synuclein antibody immunostaining in postmortem human brain · model: human postmortem brain (PD and DLB) · archive: bronze OA, download failed · 8,162 citations · #gap/no-fulltext-access

[^singleton2003]: [[studies/singleton-2003-snca-triplication]] · doi:10.1126/science.1090278 · Singleton AB et al. · copy-number analysis + sequencing · Science 2003;302(5646):841 · Triplication of the SNCA locus in the Spellman-Muenter kindred causes autosomal dominant PD with early onset (~35 years) and rapid progression including dementia; 2× copy number → more severe disease than duplication, establishing a gene-dose–disease-severity relationship for WT α-synuclein · model: human genetics · archive: not_oa, no local PDF · 4,334 citations · #gap/no-fulltext-access

[^cuervo2004]: [[studies/cuervo-2004-alpha-syn-impairs-cma]] · doi:10.1126/science.1101738 · Cuervo AM, Stefanis L, Fredenburg R, Lansbury PT, Sulzer D · Science 2004;305(5688):1292–1295 · Mutant α-synuclein (A53T and A30P) binds the CMA receptor at the lysosomal surface but is not translocated, acting as an uptake blocker that inhibits CMA of all other substrates; WT α-synuclein is a normal CMA substrate · in-vitro + cell culture · model: isolated Wistar rat liver lysosomes; primary cultured neurons; PC12 cells; mice · archive: not_oa, no local PDF · 1,966 citations · #gap/no-fulltext-access

[^yang2009]: [[studies/yang-2009-mef2d-cma]] · doi:10.1126/science.1166088 · Yang Q, She H, Gearing M, Colla E, Lee M, Shacka JJ, Mao Z · Science 2009;323(5910):124–127 · MEF2D, a neuronal survival transcription factor, is continuously degraded via CMA through HSC70 binding; both WT and PD-associated mutant α-synuclein disrupt MEF2D–HSC70 interaction, causing cytoplasmic MEF2D accumulation and neuronal death; elevated MEF2D observed in α-synuclein transgenic mice and postmortem PD brains · cell culture + in-vivo · model: primary neurons; PD patient postmortem brain · archive: not_oa · #gap/no-fulltext-access
