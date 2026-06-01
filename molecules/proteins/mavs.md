---
type: protein
aliases: [IPS-1, VISA, Cardif, IFIH1-adaptor, mitochondrial antiviral-signaling protein]
uniprot: Q7Z434
ncbi-gene: 57506
hgnc: HGNC:29233
ensembl: ENSG00000088888
mouse-ortholog: Mavs
genage-id: null
pathways: ["[[type-i-interferon-signaling]]", "[[rig-i-mavs-pathway]]", "[[nf-kb]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[chronic-inflammation]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 3
gtex-aging-correlation: null   # not yet populated; #gap/needs-gtex-lookup
mr-causal-evidence: not-tested
caused-by: ["[[mitochondrial-dysfunction]]"]
causes: ["[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-13
verified-by: claude
verified-scope: "Seth 2005, Meylan 2005, Hou 2011, Dhir 2018, Xu 2005 verified against local PDFs (Xu 2005 PDF downloaded 2026-05-13, path confirmed); Zhang 2026 verified via PubMed efetch (DOI 10.1038/s41422-026-01224-w + PMID 41692872 + PMC13092635 confirmed, Vol 36(5):322-339, abstract cross-checked — all claims on this page consistent with abstract); Victorelli 2025 added from companion rig-i-mavs-pathway.md (PDF not locally verified on this page; PMID 41398033 confirmed); Wang 2025, Dixit 2010, Liu 2015, Rai 2021 not re-read against PDFs (not available locally) — structural/mechanistic claims from these sources are plausible but not PDF-verified"
literature-checked-through: 2026-05-13
---

# MAVS (Mitochondrial Antiviral-Signaling Protein)

**TL;DR.** MAVS is an outer mitochondrial membrane (OMM)-tethered adaptor protein and the central signal integrator downstream of cytosolic RNA sensors RIG-I and MDA5. Discovered simultaneously in 2005 by four independent groups under different names (MAVS, IPS-1, VISA, Cardif), it polymerizes into a prion-like signalosome on the OMM upon activation, driving type-I interferon and NF-κB transcription. In aging, MAVS occupies a key mechanistic position as the **bridge from [[mitochondrial-dysfunction]] to [[chronic-inflammation]]**: aged and damaged mitochondria leak mitochondrial double-stranded RNA (mt-dsRNA) and mtDNA into the cytosol, activating RIG-I/MDA5 → MAVS → IFN signaling. This pathway is distinct from but complementary to the [[cgas]]-[[sting]] mtDNA arm, and both converge on the innate-immune amplification loop that underlies [[inflammaging]].

## Identity

| Field | Value |
|---|---|
| UniProt | Q7Z434 (MAVS_HUMAN; Swiss-Prot reviewed) |
| NCBI Gene | 57506 |
| HGNC | HGNC:29233 |
| Ensembl | ENSG00000088888 |
| Chromosome | 20p13 |
| Protein length | 540 aa (canonical isoform) |
| Mouse ortholog | Mavs (one-to-one ortholog) |

**Naming history.** MAVS was discovered simultaneously in 2005 by four groups and published independently under four different names:
- **MAVS** (Mitochondrial Antiviral-Signaling protein) — Seth et al., Cell [^seth2005]
- **IPS-1** (Interferon-β Promoter Stimulator-1) — Kawai et al., Nature Immunology [^kawai2005]
- **Cardif** (CARD adaptor inducing IFN-β) — Meylan et al., Nature [^meylan2005]
- **VISA** (Virus-Induced Signaling Adaptor) — Xu et al., Molecular Cell 2005 [^xu2005]

The HGNC-approved symbol is MAVS. All four names persist in the older literature.

## Structure and subcellular localization

MAVS has a distinctive **C-terminal transmembrane (TM) anchor** (residues 514–535) that tethers it to the outer mitochondrial membrane (OMM), with the bulk of the protein facing the cytoplasm [^seth2005]. This OMM localization is essential for function: deletion of the TM domain abrogates signaling [^seth2005]. A secondary pool of MAVS localizes to peroxisomal membranes and establishes an early, transient antiviral response preceding the sustained mitochondrial arm [^dixit2010].

Key structural features:
- **N-terminal CARD domain** (residues 10–77) — mediates CARD-CARD homotypic interaction with the CARD domains of RIG-I and MDA5 [^seth2005]
- **Proline-rich region** — less well characterized; mediates some TRAF interactions
- **pLxIS motif** (positions 439–442) — serves as the IRF3-docking site for TBK1-phosphorylated recruitment [^liu2015]
- **TM domain** (residues 514–535) — OMM anchor; loss of TM domain converts MAVS to a dominant-negative

## Activation mechanism: prion-like polymerization

The discovery of MAVS' oligomerization mechanism resolved a long-standing puzzle about signal amplification in innate immunity. Hou et al. 2011 demonstrated that activated RIG-I (or MDA5) transfers a conformational template onto the MAVS CARD domain, triggering its **prion-like polymerization into amyloid fibrils on the OMM** [^hou2011]. This MAVS signalosome is biochemically similar to prion aggregates: it propagates its activated conformation, is SDS-resistant, and can seed polymerization of soluble MAVS in a cell-free system [^hou2011].

Key mechanistic points:
- **Upstream sensor activation:** Cytosolic dsRNA or 5'-ppp-RNA (viral replication intermediates, or mt-dsRNA in aging) activates RIG-I helicase → CARDs exposed → K63-polyubiquitinated RIG-I CARD engages MAVS CARD
- **Polymerization:** MAVS transitions from inactive monomers/oligomers to ordered amyloid-like filaments. This is a switch-like, essentially irreversible commitment to signaling [^hou2011]
- **Signalosome assembly:** Filamentous MAVS recruits TRAF3, TRAF6, TRAF2 → activates TBK1/IKKε → phosphorylation of IRF3/IRF7 → dimerization → nuclear translocation → type-I IFN gene transcription [^seth2005][^kawai2005]
- **NF-κB arm:** TRAF6 activation → IKK complex → IκB phosphorylation → NF-κB → pro-inflammatory cytokines (TNF-α, IL-6, IL-12)

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | yes — MAVS loss-of-function mutations cause severe immunodeficiency; MAVS activation documented in human SLE and other autoimmune contexts |

## Post-translational regulation

MAVS activity is tightly controlled by multiple PTMs and proteolytic events:
- **Phosphorylation by TBK1** at Ser-442 (within the pLxIS motif) — creates an IRF3-docking site; positive-feedback amplification [^liu2015]
- **K48-linked polyubiquitination** → proteasomal degradation (negative regulation)
- **K63-linked polyubiquitination** → scaffold for signalosome assembly (positive regulation)
- **Palmitoylation** — stabilizes OMM insertion
- **Caspase-8 / PCBP2 cleavage** — negative regulation; viral proteases (HCV NS3/4A) cleave MAVS from the OMM as an immune-evasion mechanism
- **PINK1-mediated clearance** of prion-like MAVS aggregates — PINK1 was identified as a negative regulator that dismantles persistent MAVS signalosome on depolarized mitochondria, coupling mitophagy to innate-immune termination [^rai2021] #gap/needs-replication

## Aging-context: mt-dsRNA leakage → MAVS → type-I IFN

This is the core aging-relevant story for this page. The pathway connects mitochondrial damage (a primary hallmark) to sterile type-I IFN inflammation.

### Mechanism: mitochondrial dsRNA as an endogenous MAVS ligand

The mitochondrial genome encodes both strands of multiple transcription units and normally generates long double-stranded RNAs as processing intermediates. Under normal conditions, the mitochondrial RNA degradosome — comprising the helicase **SUV3** and the exoribonuclease **PNPT1 (PNPase)** — degrades these dsRNA species before they can leak to the cytosol [^dhir2018]. Critically, it is specifically **PNPase loss** (not SUV3 loss) that permits cytosolic leakage: SUV3-restricted mt-dsRNA remains mitochondrially confined and non-immunogenic [^dhir2018].

Dhir et al. 2018 demonstrated in *Nature* that:
- PNPT1 loss-of-function → accumulation of mt-dsRNA → cytosolic leakage → MDA5 (not RIG-I) activation → MAVS signaling → type-I IFN response (~90-fold induction of IFN-β mRNA by qRT-PCR) [^dhir2018]
- This is a non-viral, endogenous MAVS-activation route operating through a mitochondrial-genome-derived ligand
- Human patients with bi-allelic hypomorphic PNPT1 mutations develop a sterile **type-I interferonopathy** (not formally Aicardi-Goutières syndrome, but a related class) — confirming pathological relevance [^dhir2018]

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — PNPT1 mutations cause human interferonopathy |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | yes (Dhir 2018; Aicardi-Goutières syndrome patients) |

### Aging-associated mt-dsRNA accumulation

Zhang et al. 2026 (*Cell Research*, PMID 41692872) demonstrated directly that mt-dsRNA accumulation drives aging-associated cognitive decline in mice:
- Aged mouse cortex shows elevated mt-dsRNA levels relative to young animals
- Overexpression of **SEC61A1** (which modulates ER-mitochondria contact sites affecting mitochondrial RNA synthesis) triggers mt-dsRNA accumulation → MAVS activation → neuroinflammation → cognitive impairment without motor deficit
- Genetic knockdown of MAVS in aged mouse cortex **alleviates cognitive decline** — directly implicating MAVS as a causal intermediate, not merely a correlate [^zhang2026]
- Alzheimer's disease patient brain tissue shows elevated mt-dsRNA levels consistent with the mechanism

This study constitutes the most direct evidence that MAVS mediates an aging-relevant, non-viral mt-dsRNA inflammatory axis in vivo. #gap/needs-replication — independent replication in additional cohorts and model systems needed.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — human AD brain shows same mt-dsRNA signal |
| Phenotype conserved in humans? | partial — mouse cognitive rescue; human causal link not yet established |
| Replicated in humans? | no — no intervention study; Zhang 2026 is a single paper |

### Parallel pathway: cGAS-STING (mtDNA arm)

MAVS-mediated (RNA-sensing) and [[cgas]]/[[sting]]-mediated (DNA-sensing) innate immune activation are **parallel, complementary routes** from mitochondrial damage to type-I IFN. Key distinctions:

| Feature | MAVS arm | cGAS-STING arm |
|---|---|---|
| Ligand | mt-dsRNA (+ viral dsRNA) | mtDNA, cytosolic dsDNA |
| Primary sensor | MDA5 (mt-dsRNA), RIG-I | cGAS |
| Adaptor | MAVS (OMM) | STING (ER) |
| Second messenger | None (direct CARD interaction) | cGAMP (diffusible) |
| Key suppressor | PNPT1 (mt-dsRNA degradation) | TREX1 (cytosolic DNA degradation) |
| Age-related evidence | Zhang 2026 (cognitive decline); Dhir 2018 (PNPT1-loss) | Numerous SASP/senescence papers |

Cross-talk: cGAMP can reach neighboring cells and activate STING there; MAVS filaments and STING have been reported to form complexes on mitochondria-associated ER membranes (MAMs) in some contexts. The relative contribution of each arm to steady-state aged-tissue type-I IFN tone remains unresolved. #gap/contradictory-evidence

## MAVS in cellular senescence

**Victorelli et al. 2025 (*Nature Communications*)** demonstrated that cytosolic mtRNA accumulates in senescent cells and activates RIG-I and MDA5, which drive **MAVS aggregation → SASP induction** [^victorelli2025]. BAX/BAK channels regulate mtRNA cytosolic leakage; their genetic deletion reduces SASP in human and mouse senescent cells and in a mouse model of metabolic dysfunction-associated steatohepatitis (MASH). This establishes mt-dsRNA → RIG-I/MDA5 → MAVS as a **direct driver of the innate immune component of SASP** in normal senescence biology — distinct from the cGAS-STING arm, though both converge on TBK1/IRF3 and are co-activated in senescent cells. Full mechanistic detail is on [[rig-i-mavs-pathway]]; integrated aging-context view with 3-lab convergence (Victorelli 2025 + López-Polo 2024 + Zhang 2026) and intervention landscape on [[mitochondrial-rna-leakage]]. #gap/needs-replication updated: the 3-lab convergence across MASH + cognitive aging contexts (as of 2026-05-13) substantially de-risks the single-paper concern; remaining gaps are human in-vivo evidence and tissue-context dominance.

A 2025 study in the context of renal carcinoma demonstrated an additional, distinct link: **MAVS loss in tumor cells paradoxically induces cellular senescence** and promotes immunogenic SASP (CCL3-rich), which in turn recruits CD8+ T cells [^wang2025]. The proposed mechanism involves the MAVS-CMTM6 axis maintaining mitochondrial integrity; MAVS disruption → mitochondrial dysfunction → ROS → senescence markers + SASP. This finding is in an oncology context and may not translate directly to normal aging physiology — but it suggests MAVS activity **suppresses** senescence-associated mitochondrial dysfunction in non-cancer cells, and MAVS loss could accelerate an immunogenic senescent phenotype. #gap/contradictory-evidence — the direction of MAVS's net effect on SASP (pro-inflammatory via IFN vs pro-senescence via mitochondrial failure) requires tissue-context-specific resolution.

## Pathway membership

- [[type-i-interferon-signaling]] — MAVS is the obligate OMM hub that converts RNA-sensor activation to IRF3/IRF7-driven IFN gene induction
- [[rig-i-mavs-pathway]] — the canonical antiviral RNA-sensing axis (RIG-I + MDA5 → MAVS → TBK1 → IRF3/7)
- [[nf-kb]] — MAVS-dependent TRAF6 activation runs in parallel with the IRF arm

## Key interactors

- **RIG-I (DDX58)** — upstream CARD-CARD interaction; activated by 5'-ppp ssRNA / short dsRNA
- **MDA5 (IFIH1)** — upstream CARD-CARD interaction; activated by long dsRNA, including mt-dsRNA [^dhir2018]
- **TRAF3** — scaffold for TBK1/IKKε assembly → IRF3 axis
- **TRAF6** — scaffold for IKK complex → NF-κB axis
- **TBK1** — serine/threonine kinase that phosphorylates IRF3/IRF7 and MAVS-Ser442
- **IRF3 / IRF7** — transcription factors activated by TBK1 phosphorylation; drive IFN-β and IFN-α transcription
- **PNPT1 / SUV3** — mitochondrial RNA degradosome components (PNPase exoribonuclease + SUV3 helicase); PNPT1 specifically suppresses mt-dsRNA cytosolic leakage upstream of MAVS; SUV3 restricts mt-dsRNA within mitochondria but its loss does not trigger cytosolic release [^dhir2018]
- **SEC61A1** — ER-mitochondria contact-site regulator; modulates mitochondrial DNA and RNA synthesis, thereby controlling mt-dsRNA generation [^zhang2026]
- [[cgas]] / [[sting]] — parallel innate-sensing arm (mtDNA vs mt-dsRNA); cross-talk on MAMs documented #gap/no-mechanism

## Druggability note

**Druggability tier 3** (aging context: predicted druggable; no clinical-stage inhibitor for an aging indication).

MAVS is pharmacologically challenging: the CARD domain is disordered in the monomeric form and assembles into an amyloid-like surface upon activation, making small-molecule targeting difficult. No clinical-stage MAVS-directed agent exists. Druggable angles:

- **Indirect: PNPT1/SUV3 degradosome upregulation** — restoring mt-dsRNA clearance upstream of MAVS could suppress sterile type-I IFN without abrogating antiviral immunity. PNPase-mediated cytosolic export is the rate-limiting step; SUV3 alone is insufficient. No clinical tool compound known. #gap/no-mechanism
- **Indirect: MDA5 / RIG-I antagonism** — blocking the upstream sensors selectively for the mt-dsRNA ligand vs viral RNA would require ligand-discrimination strategies not yet demonstrated
- **Indirect: TBK1 inhibition** — amlexanox (TBK1/IKKε inhibitor) is approved for aphthous ulcers; MRT-92278 is a selective TBK1 inhibitor in early trials; downstream of MAVS and shared with cGAS-STING arm
- **PINK1-mediated MAVS clearance** — PINK1 activation (kinetin, other PINK1 modulators in [[parkinsons-disease]] trials) may accelerate prion-MAVS dismantling on depolarized mitochondria

None of these approaches specifically targets the MAVS-mt-dsRNA-aging axis in humans. The mechanistic target is novel enough that rational drug design against it is premature.

## Limitations and knowledge gaps

- `#gap/needs-gtex-lookup` — GTEx tissue-by-age expression correlation for MAVS has not been populated
- `#gap/needs-human-replication` — Zhang 2026 mt-dsRNA/MAVS cognitive-decline story is in mouse; human causal evidence is correlative (AD brain mt-dsRNA signal only)
- `#gap/needs-replication` — Zhang 2026 is a single paper; independent replication of the MAVS-knockdown cognitive-rescue experiment is needed
- `#gap/contradictory-evidence` — the directional relationship between MAVS activity, SASP induction, and cellular senescence differs across contexts (antiviral IFN vs oncology senescence context); tissue-context-specific resolution needed
- `#gap/no-mechanism` — the relative contribution of the MAVS (dsRNA) vs cGAS-STING (DNA) arm to steady-state type-I IFN tone in normal aged human tissue is unquantified
- `#gap/no-mechanism` — PNPT1 and SUV3 expression in aged tissue vs young tissue has not been systematically characterized in human GTEx data (to our knowledge)
- `#gap/long-term-unknown` — chronic low-level MAVS activation vs acute burst activation may have distinct downstream effects; kinetics in aging not characterized
- MAVS is not currently in GenAge (genage-id: null); its aging-relevance is principally through the mt-dsRNA pathway rather than direct lifespan-modifying genetics; GenAge inclusion criteria would require direct lifespan effect

## Footnotes

[^seth2005]: doi:10.1016/j.cell.2005.08.012 · Seth RB, Sun L, Ea CK, Chen ZJ · *Cell* 2005 · Vol 122(5):669–682 · in-vitro + in-vivo · n=N/A (cell-based + MEF KO) · discovery paper for MAVS name; TM domain (residues 514–535) OMM localization essential for signaling; CARD domain required; NF-κB + IRF3 + IRF7 activation shown; local PDF:  (local PDF)

[^kawai2005]: doi:10.1038/ni1243 · Kawai T et al. · *Nature Immunology* 2005 · in-vitro · discovery paper for IPS-1 name; RIG-I + MDA5 upstream activation established; local PDF: not_oa

[^meylan2005]: doi:10.1038/nature04193 · Meylan E et al. · *Nature* 2005 · in-vitro + in-vivo (HCV model) · discovery paper for Cardif name; HCV NS3/4A protease cleaves MAVS from OMM (viral immune evasion); local PDF:  (local PDF)

[^xu2005]: doi:10.1016/j.molcel.2005.08.014 · Xu LG, Wang YY, Han KJ, Li LY, Zhai Z, Shu HB · *Molecular Cell* 2005 · Vol 19(6):727–740 · PMID 16153868 · in-vitro · discovery paper for VISA name; CARD-domain RIG-I interaction; NF-κB and IRF3 activation shown; local PDF:  (local PDF)

[^hou2011]: doi:10.1016/j.cell.2011.06.041 · Hou F et al. · *Cell* 2011 · n=N/A · in-vitro (cell-free reconstitution + structural EM) · prion-like MAVS polymerization demonstrated; SDS-resistant fibril formation; cell-free signalosome propagation; local PDF:  (local PDF)

[^dhir2018]: doi:10.1038/s41586-018-0363-0 · Dhir A et al. · *Nature* 2018 · Vol 560(7717):238–242 · n=N/A (HeLa cells + patient fibroblasts from 4 PNPT1 bi-allelic mutation patients) · mt-dsRNA degradosome (SUV3 helicase + PNPase exoribonuclease); PNPase loss (not SUV3 loss) allows cytosolic leakage; ~90-fold IFN-β mRNA induction on PNPase depletion; MDA5→MAVS as primary sensor axis (RIG-I minor, TLR3 none); sterile type-I interferonopathy in PNPT1 patients; local PDF:  (local PDF)

[^dixit2010]: doi:10.1126/science.1192915 · Dixit E et al. · *Science* 2010 · in-vitro · peroxisomal MAVS pool; sequential peroxisomal (early IFN-λ) then mitochondrial (sustained IFN-β) antiviral responses

[^liu2015]: doi:10.1016/j.immuni.2015.08.019 · Liu S et al. · *Immunity* 2015 · in-vitro · pLxIS motif in MAVS; TBK1 phosphorylation of Ser-442 creates IRF3-docking site; mechanistic detail of TBK1-IRF3 recruitment

[^zhang2026]: doi:10.1038/s41422-026-01224-w · Zhang L et al. · *Cell Research* 2026 · Vol 36(5):322–339 · PMID 41692872 · PMC13092635 (OA release 2027-05-01; not yet OA) · in-vivo (aged mice + AD patient brain tissue + 5xFAD mice) · SEC61A1 → mt-dsRNA → MAVS → neuroinflammation → cognitive decline without motor deficit; Sec61a1 or Mavs knockdown alleviates cognitive decline in naturally aging WT mice; **local PDF: not yet in archive — DOI not indexed in a local paper archive (2026-05-13); check PMC from 2027-05-01**

[^rai2021]: doi:10.1165/rcmb.2021-0055ed · Rai P et al. · *Am J Respir Cell Mol Biol* 2021 · editorial/commentary · PINK1 clears prion-like MAVS aggregates on depolarized mitochondria; coupling mitophagy to innate-immune termination; n=N/A

[^victorelli2025]: doi:10.1038/s41467-025-66159-z · Victorelli S, Eppard M, Martini H et al. · *Nature Communications* 2025 · PMID 41398033 · in-vitro + in-vivo (human/mouse senescent cells; mouse MASH model) · cytosolic mtRNA accumulates in senescent cells → RIG-I + MDA5 activation → MAVS aggregation → SASP induction; BAX/BAK regulate mtRNA leakage; BAX/BAK deletion reduces SASP in vitro and in vivo; establishes mt-dsRNA→MAVS as a SASP driver in normal senescence · #gap/needs-replication (single paper, 2025)

[^wang2025]: doi:10.1136/jitc-2025-011477 · Wang H et al. · *Journal for Immunotherapy of Cancer* 2025 · in-vivo + in-vitro (renal carcinoma) · MAVS-CMTM6 axis; MAVS loss → mitochondrial dysfunction → ROS → senescence + CCL3-SASP → CD8+ T-cell recruitment; oncology context — aging applicability uncertain
