---
type: protein
aliases: [YAP1, TAZ, WWTR1, Yes-associated protein, WW domain-containing transcription regulator 1]
uniprot: P46937
ncbi-gene: 10413
hgnc: HGNC:16262
ensembl: ENSG00000137693
complex-subunits: [P46937, Q9GZV5]
pathways: ["[[hippo-yap-taz]]"]
hallmarks: ["[[stem-cell-exhaustion]]", "[[cellular-senescence]]"]
sens-categories: []
druggability-tier: 1
caused-by: ["[[lats1]]", "[[lats2]]", "[[mst1]]", "[[mst2]]"]
causes: ["[[tead-transcription]]", "[[cellular-senescence]]", "[[stem-cell-exhaustion]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "R20 lightweight verifier sweep — all 8 cited DOIs cross-checked via DOI lookup (Sudol 1995, Zhao 2007, Zhang 2008, Dupont 2011, Liu-Chittenden 2012, Stearns-Reider 2017, Setiawan 2021, Kim 2024) — titles match cited author/year/topic. No PDFs locally available — primary-PDF verification not performed. Broken wikilink [[tgf-beta-pathway]] → [[tgf-beta]] corrected during sweep. UniProt IDs (P46937 YAP1, Q9GZV5 TAZ) not re-checked against UniProt API."
---

# YAP/TAZ (YAP1 / WWTR1)

YAP (Yes-associated protein 1) and TAZ (Transcriptional co-activator with PDZ-binding motif; gene: WWTR1) are paralogous transcriptional co-activators that function as the primary downstream effectors of the [[hippo-yap-taz]] signaling pathway. They relay mechanical and biochemical signals from the cell surface to gene expression programs governing proliferation, differentiation, organ size, and tissue homeostasis. In the context of aging, dysregulated YAP/TAZ activity — driven largely by age-associated stiffening of the extracellular matrix — is emerging as a key mechano-aging integrator affecting [[stem-cell-exhaustion]] and [[cellular-senescence]].

## Paralog identity

| Feature | YAP1 | TAZ (WWTR1) |
|---|---|---|
| UniProt | P46937 | Q9GZV5 |
| NCBI Gene | 10413 | 25937 |
| HGNC | HGNC:16262 | HGNC:24042 |
| Length (canonical) | 504 aa | 400 aa |
| Isoforms | 9 | ~5 |
| Sequence identity to each other | ~50% overall | ~50% overall |
| Mouse ortholog | Yap1 | Wwtr1 |

YAP and TAZ share a common domain architecture but differ in WW-domain copy number, isoform diversity, and some downstream target preferences. They are often co-expressed and can partly substitute for each other, but have non-redundant functions — especially in development, where single knockouts produce distinct phenotypes [^sudol1995].

## Domain architecture

### YAP1 (504 aa)

- **TEAD-binding domain / coiled-coil 1** (residues ~86–100) — direct contact interface with TEAD1–4 transcription factors; primary transactivation partnership
- **WW domain 1** (residues 171–204) — binds PPxY motifs in partner proteins (e.g., LATS1/2, AMOT family, RUNX proteins)
- **WW domain 2** (residues 230–263) — second PPxY-binding module; some isoforms lack this domain
- **Coiled-coil / transactivation domain** (residues ~298–359) — recruits transcriptional machinery
- **C-terminal transactivation domain** (residues 291–504) — broader transactivation activity
- **PDZ-binding motif** (C-terminal) — mediates apical junction localization

### TAZ/WWTR1 (400 aa)

- **WW domain** (residues ~124–157) — single WW domain (vs. two in YAP); binds PPxY motifs
- **Coiled-coil** (residues ~225–259) — interacts with SMAD2/3 for TGF-β co-activation
- **TEAD-binding domain** — broadly conserved with YAP
- **PDZ-binding motif** (residues 394–400) — anchors TAZ at tight junctions; retains TAZ cytoplasmically under some conditions

## Regulation: LATS-mediated phosphorylation and cytoplasmic sequestration

The canonical OFF switch for both paralogs is phosphorylation by the Hippo pathway kinases LATS1 and LATS2 (Large Tumor Suppressor kinases) [^zhao2007].

**YAP:** LATS1/2 phosphorylate YAP at five residues (Ser61, Ser109, **Ser127**, Ser164, Ser397). Phospho-Ser127 is the primary 14-3-3 docking site: 14-3-3 binding sequesters YAP in the cytoplasm, blocking nuclear entry. Additional phosphorylation (Ser381/Ser397) primes YAP for ubiquitination by the E3 ligase β-TrCP and subsequent proteasomal degradation [^zhao2007].

**TAZ:** LATS1/2 phosphorylate TAZ at Ser89 (primary 14-3-3 site), Ser62, Ser105, and Ser311. Phospho-Ser89 drives 14-3-3 binding and cytoplasmic retention; further phosphorylation by CK1 primes TAZ for β-TrCP-dependent degradation, mirroring the YAP pathway.

**Upstream kinase cascade:**
- MST1/2 (Hippo) → LATS1/2 activation (via MOB1 co-activator)
- Cell density signals, apical junction complexes (Crumbs, Kibra), and G-protein-coupled receptor ligands all feed into MST1/2 activation

**Active (nuclear) state:** When LATS1/2 kinase activity is low (e.g., low cell density, mechanical stretch, stiff substrates), YAP/TAZ accumulate in the nucleus, bind TEAD1–4 transcription factors, and drive expression of proliferative and anti-apoptotic target genes including CTGF, CYR61, ANKRD1, and AMOTL2 [^zhang2008].

## Mechanosensing: the central non-Hippo regulatory mode

Dupont et al. 2011 (Nature, ~5,500 citations) demonstrated that YAP/TAZ nuclear localization is potently regulated by extracellular matrix stiffness and F-actin cytoskeletal tension, **independently of the canonical Hippo kinase cascade** [^dupont2011]. Key findings:

- **Stiff substrates** (>40 kPa, mimicking fibrotic or aged tissue) → F-actin stress fiber assembly → Rho GTPase / ROCK pathway activation → YAP/TAZ nuclear localization and target-gene activation
- **Soft substrates** (<1 kPa, mimicking normal soft tissue) → diffuse cortical actin → YAP/TAZ cytoplasmic sequestration
- Cell spreading and geometry (geometric confinement, micropillar arrays) control YAP/TAZ independently of soluble growth factors
- Actin depolymerization (cytochalasin D, latrunculin B) rapidly drives YAP/TAZ nuclear export

This mechanosensing function places YAP/TAZ at the intersection of biomechanics and transcription. YAP/TAZ thus integrate two orthogonal signals: biochemical cell-density/Hippo input and biophysical ECM-stiffness input.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — MST/LATS/YAP-TEAD core highly conserved across vertebrates |
| Phenotype conserved in humans? | yes — YAP activation documented in human fibrotic and aging tissues |
| Replicated in humans? | partial — mechanosensing in human cell culture well-replicated; in vivo human aging data limited |

## Aging biology

### Age-related ECM stiffening drives chronic YAP/TAZ activation

Normal aging produces progressive increases in tissue stiffness across multiple organs — liver, lung, skeletal muscle, vasculature, dermis — driven by collagen crosslinking (lysyl oxidase activity), advanced glycation end-products, and reduced matrix remodeling. Because YAP/TAZ nuclear localization is stiffness-dependent, aged tissues provide a chronic pro-YAP/TAZ nuclear signal, decoupled from the canonical Hippo proliferative context.

Stearns-Reider et al. 2017 (*Aging Cell*) demonstrated directly that aged skeletal muscle ECM stiffening increases YAP/TAZ nuclear localization in muscle-associated fibroblasts, driving expression of fibrogenic genes and aberrant ECM deposition. Crucially, aged ECM shifted muscle stem cells (satellite cells) from myogenic to fibrogenic differentiation programs — an effect that was recapitulated by placing young satellite cells on stiff substrates, and reversed by softening the aged matrix with collagenase treatment [^stearns2017]. #gap/needs-replication — a single study; replication in other muscle groups and species needed.

### YAP/TAZ in skin aging

Reduced YAP/TAZ activity is associated with epidermal and dermal aging in human skin. Kim et al. 2024 reviewed evidence that age-related decline in YAP/TAZ impairs epidermal stem cell self-renewal, reduces keratinocyte proliferative capacity, and compromises ECM homeostasis in the dermis [^kim2024]. The directionality of dysregulation is therefore tissue-context-dependent: fibroblasts in aged stiff tissues show elevated YAP/TAZ (pro-fibrotic), while epithelial stem cells may show reduced YAP/TAZ activity (pro-atrophic). #gap/contradictory-evidence — tissue-specific directionality of YAP/TAZ dysregulation in aging is not yet unified into a coherent mechanistic model.

### Muscle satellite cells

YAP/TAZ regulate muscle satellite cell (MuSC) fate decisions in both physiological and aging contexts [^setiawan2021]. Active YAP promotes MuSC expansion; Hippo-driven YAP inhibition is required for differentiation. Age-associated changes in niche stiffness bias this balance toward fibrogenic fates or quiescence failure (see [[stem-cell-exhaustion]]).

### YAP/TAZ as mechano-aging integrators

The working model: aging-associated ECM stiffening constitutively activates YAP/TAZ in fibroblasts and stromal cells → chronic CTGF/CYR61 expression → further ECM deposition and crosslinking → positive-feedback loop driving tissue fibrosis. Simultaneously, epithelial and parenchymal stem cells may lose appropriate YAP/TAZ responsiveness due to disrupted mechanosignaling environments. The net result is dysregulated tissue homeostasis, impaired regeneration, and contributions to [[cellular-senescence]] via chronic growth-factor signaling. #gap/no-mechanism — the precise molecular link between aged-ECM-driven YAP/TAZ activity and entry into SASP-producing senescence is not established.

## TEAD interaction and transcriptional output

YAP/TAZ are transcriptional co-activators, not DNA-binding proteins: they require TEAD1–4 (TEA domain family) transcription factors for most of their transcriptional output. Zhang et al. 2008 demonstrated that TEAD mediates YAP-dependent gene induction and cell growth control; YAP mutants unable to bind TEAD lack growth-promoting activity [^zhang2008]. The YAP-TEAD interface is a hydrophobic cleft on the TEAD Ω-loop structure — a key druggable surface.

Key YAP/TAZ-TEAD target genes with aging relevance:
- **CTGF (CCN2)** — pro-fibrotic; drives ECM deposition
- **CYR61 (CCN1)** — ECM-associated growth factor; promotes senescent-cell phenotypes in some contexts
- **ANKRD1** — mechanoresponsive; cardiac stress marker
- **AMOTL2** — junction scaffold; part of a negative-feedback module

## Pharmacology

### Verteporfin (VP)

Liu-Chittenden et al. 2012 identified verteporfin as a first-in-class small-molecule inhibitor that disrupts the YAP-TEAD protein-protein interaction [^liuchittenden2012]. Verteporfin (a porphyrin already FDA-approved for photodynamic therapy of macular degeneration) was found to bind YAP directly, blocking its interaction with TEAD and suppressing YAP-dependent transcription and oncogenic growth in mesothelioma and liver cancer models.

**Caveats:**
- Verteporfin has significant off-target activities (autophagy inhibition, ROS generation in light conditions), complicating interpretation of YAP-specific effects
- It is not a selective YAP-TEAD inhibitor suitable for systemic anti-aging use in its current form
- #gap/dose-response-unclear — no established dose-response relationship for YAP-specific inhibition vs. cytotoxic off-target effects in non-cancer contexts

### VT3989 (TEAD palmitoylation inhibitor)

VT3989 (Vivace Therapeutics) is a next-generation covalent TEAD inhibitor targeting the TEAD palmitoylation pocket (an allosteric site on TEAD that is required for YAP/TAZ co-activator binding). It is currently in Phase I/II clinical trials for mesothelioma and other solid tumors (NCT04665206; status: recruiting as of 2025). Unlike verteporfin, VT3989 is designed for selectivity and oral systemic delivery. Aging-specific applications are not yet under clinical investigation. #gap/long-term-unknown — no long-term safety or efficacy data in aging contexts.

## Pathway membership and cross-links

- [[hippo-yap-taz]] — the canonical pathway page for full cascade (MST1/2 → LATS1/2 → YAP/TAZ → TEAD)
- [[cellular-senescence]] — YAP/TAZ chronic activation may promote SASP and fibroblast senescence
- [[stem-cell-exhaustion]] — YAP/TAZ mechano-dysregulation impairs satellite cell and epidermal stem cell function
- [[tgf-beta]] — TAZ co-activates SMAD2/3 in TGF-β signaling; relevant to fibrosis and aging
- [[ecm-remodeling]] — downstream CTGF/CYR61 target genes mediate ECM effects #stub
- [[rho-rock-pathway]] — non-Hippo mechanosensing input to YAP/TAZ nuclear localization #stub
- [[sarcopenia]] — age-related muscle loss; YAP/TAZ dysregulation in satellite cells is a contributing mechanism

## Key interactors

- **LATS1/LATS2** — primary negative regulators; phosphorylate YAP Ser127 / TAZ Ser89
- **MST1/MST2** — upstream Hippo kinases activating LATS
- **MOB1** — LATS co-activator
- **TEAD1–4** — DNA-binding transcription factor partners; required for most YAP/TAZ target gene activation
- **14-3-3 proteins** — cytoplasmic anchors after LATS phosphorylation
- **β-TrCP** — E3 ligase; ubiquitinates phospho-YAP/TAZ for proteasomal degradation
- **AMOT/AMOTL1/AMOTL2** — scaffolds that sequester YAP/TAZ at tight junctions; part of Hippo pathway
- **RUNX family** — binds YAP WW domains; relevant to osteoblast/chondrocyte differentiation

## Limitations and gaps

- #gap/needs-human-replication — most mechanosensing and aging-stiffness data are from mouse models or human cell culture. Whether systemic ECM stiffening in aged humans produces the magnitude of YAP/TAZ dysregulation seen in mouse muscle is not established.
- #gap/contradictory-evidence — the directionality of YAP/TAZ change in aged tissues is context-dependent (elevated in fibroblasts/fibrotic contexts; reduced in epithelial stem cells). A unified aging model for YAP/TAZ activity is lacking.
- #gap/no-mechanism — mechanistic linkage from ECM-stiffness-driven YAP/TAZ activation to SASP induction and senescence entry is not fully established.
- #gap/dose-response-unclear — for verteporfin specifically: YAP-inhibitory dose vs cytotoxic dose window in non-cancer settings is not characterized.
- #gap/needs-canonical-id — NCBI Gene ID for TAZ/WWTR1 not included in frontmatter `ncbi-gene:` field (YAP1 primary gene shown; TAZ NCBI Gene ID is 25937 but frontmatter is per YAP1 per schema convention for paralog-pair pages). See `complex-subunits:` for Q9GZV5 (TAZ UniProt).
- The genage-id for YAP1 or WWTR1 was not identified during seeding; check HAGR/GenAge database. #gap/unsourced

## Footnotes

[^sudol1995]: doi:10.1074/jbc.270.24.14733 · Sudol M et al. · *J Biol Chem* 1995 · in-vitro/biochemical · characterization of mammalian YAP gene and definition of the WW domain module · not in local archive (status: pending)

[^zhao2007]: doi:10.1101/gad.1602907 · Zhao B et al. · *Genes Dev* 2007 · in-vitro + in-vivo · n=multiple cell lines · established LATS1/2 phosphorylation of YAP Ser127 as the primary Hippo effector step; linked to contact inhibition · 3075 citations · not in local archive (status: pending)

[^zhang2008]: doi:10.1101/gad.1664408 · Zhang H et al. · *Genes Dev* 2008 · in-vitro · YAP-TEAD binding is required for YAP-dependent growth control; TEAD loss-of-function blocks YAP oncogenic activity · 2461 citations · not in local archive (status: pending)

[^dupont2011]: doi:10.1038/nature10137 · Dupont S et al. · *Nature* 2011 · in-vitro (hydrogel substrates + cell culture) · demonstrated YAP/TAZ nuclear localization is controlled by ECM stiffness and F-actin tension independently of canonical Hippo kinases · 5544 citations · not in local archive (status: pending)

[^liuchittenden2012]: doi:10.1101/gad.192856.112 · Liu-Chittenden Y et al. · *Genes Dev* 2012 · in-vitro + in-vivo (mouse xenograft) · verteporfin disrupts YAP-TEAD interaction; suppresses YAP-dependent oncogenic activity · 1441 citations · not in local archive (status: pending)

[^stearns2017]: doi:10.1111/acel.12578 · Stearns-Reider KM et al. · *Aging Cell* 2017 · in-vitro + ex-vivo · n=young vs aged mouse muscle ECM · aged ECM stiffening increases YAP/TAZ nuclear localization in fibroblasts; redirects satellite cells to fibrogenic fate; reversed by matrix softening · 227 citations · not in local archive (status: pending)

[^setiawan2021]: doi:10.1007/s13105-021-00787-z · Setiawan I et al. · *J Physiol Biochem* 2021 · review · YAP/TAZ roles in myoblast proliferation, differentiation, and age-related muscle atrophy · 20 citations · closed access #gap/no-fulltext-access

[^kim2024]: doi:10.5021/ad.23.156 · Kim JY et al. · *Ann Dermatol* 2024 · review · age-related decline of YAP/TAZ activity in human skin epidermal and dermal aging; stem cell maintenance and ECM homeostasis · 12 citations · not in local archive (status: pending)
