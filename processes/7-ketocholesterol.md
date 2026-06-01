---
type: process
aliases: [7-KC, 7-ketocholesterol, oxysterol-7-ketone, 7-oxocholesterol]
key-proteins: ["[[cyp7a1]]", "[[cyp7b1]]", "[[abca1]]", "[[abcg1]]"]
pathways: []
hallmarks: ["[[loss-of-proteostasis]]", "[[chronic-inflammation]]"]
selective-variants: []
druggability-tier: null
caused-by: ["[[oxidative-damage]]"]
causes: ["[[chronic-inflammation]]"]
literature-checked-through: 2026-05-09
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-05-09. Verify quantitative claims and source attributions against primary sources. Canonical-DB IDs: 7-KC PubChem CID 10600 (verify). Key cited DOIs confirmed via Crossref/PubMed: doi:10.1016/j.atherosclerosis.2025.119217 (Bhargava 2025, citation-percentile 97); doi:10.1016/j.atherosclerosis.2025.120419 (Lizard 2025); doi:10.1016/s0021-9150(99)00004-5 (Brown & Jessup 1999, 762 citations); doi:10.1021/bi010833h (Gaus 2001, citation-percentile 98); doi:10.1074/jbc.271.44.27450 (Kritharides 1996, citation-percentile 98). All are `not_oa` in a local paper archive (no local PDF). #gap/no-fulltext-access

# 7-Ketocholesterol accumulation (LysoSENS oxysterol axis)

7-Ketocholesterol (7-KC) is the predominant oxidized cholesterol species in atherosclerotic plaque and oxidized low-density lipoprotein (oxLDL). It accumulates in macrophage-derived foam cells — the histological hallmark of atherosclerotic plaque — because it is structurally incompatible with the native cholesterol-efflux machinery (ABCA1/ABCG1/apoA-I reverse-cholesterol-transport pathway). The result is a self-reinforcing trap: macrophages engulf oxLDL, 7-KC cannot be effluxed, foam cells mature and die, and plaque persists. **Clearing 7-KC is the primary target of Cyclarity Therapeutics' UDP-003** — as of early 2025, the first clinical-stage LysoSENS-class therapeutic — making this process a critical node in the [[frameworks/sens-damage-categories|LysoSENS]] drug-development story.

This page covers the biochemistry of 7-KC formation and accumulation, the biology of foam-cell trapping, the atherosclerosis connection, and the UDP-003 clearance approach. For the broader LysoSENS damage category, see [[frameworks/sens-damage-categories]] § 5.

---

## Chemical identity

7-KC (IUPAC: cholest-5-en-3β-ol-7-one) is an oxysterol — an oxidized derivative of cholesterol — formed by ketone addition at the C7 position of the cholesterol ring system.

| Property | Value |
|---|---|
| Molecular formula | C₂₇H₄₄O₂ |
| Molecular weight | ~400.6 Da |
| PubChem CID | 10600 #gap/needs-canonical-id — confirm at pubchem.ncbi.nlm.nih.gov |
| Major structural distinction vs. cholesterol | Ketone (C=O) at C7; 3β-OH retained |
| Primary occurrence | Oxidized LDL; atherosclerotic plaque; aged tissues |

7-KC is one of several oxysterols in oxLDL (others: 25-hydroxycholesterol, 27-hydroxycholesterol, 7α-hydroxycholesterol), but it is typically the most abundant and is the species most consistently implicated in foam-cell cytotoxicity and efflux incompatibility [^brownjessup1999].

---

## Formation — two routes

### Non-enzymatic auto-oxidation (predominant in vivo)

The dominant in-vivo route is non-enzymatic auto-oxidation of cholesterol under oxidative stress:

1. Cholesterol undergoes radical-initiated hydrogen abstraction at C7 → **7α- or 7β-hydroperoxycholesterol** (7-OOH)
2. 7-OOH is reduced (via glutathione peroxidase or spontaneously) → **7α- or 7β-hydroxycholesterol**
3. Oxidation of 7-hydroxy intermediates → **7-ketocholesterol**

This pathway is accelerated in the oxidizing microenvironment of the developing atherosclerotic plaque (high ROS from activated macrophages, myeloperoxidase activity, metal-ion Fenton chemistry) and in oxidized LDL particles subjected to endothelial-cell and macrophage oxidative modification [^brownjessup1999].

### Enzymatic (minor)

**[[cyp7a1]]** (cholesterol 7α-hydroxylase, hepatic) and **[[cyp7b1]]** (oxysterol 7α-hydroxylase) can generate 7-hydroxylated cholesterol intermediates that partially oxidize to 7-KC, but the enzymatic route is a minor contributor to atherogenic 7-KC relative to auto-oxidation in LDL particles and macrophages.

---

## Where it accumulates

| Tissue / context | Mechanism |
|---|---|
| **Atherosclerotic plaque** (primary site) | Macrophage uptake of oxLDL → intracellular 7-KC accumulation → foam-cell formation |
| Aged vascular endothelium | Chronic low-level oxLDL exposure; endothelial dysfunction |
| Retinal pigment epithelium (RPE) | Accumulates with age and AMD; contributes to RPE senescence [^wang2023] |
| Brain / neuronal tissue | Detected in aged brain tissue; role in neurodegeneration context is less-established than plaque biology |

**Note on neurological context:** Evidence for 7-KC's role in brain aging and neurodegeneration is emerging but thin compared to the atherosclerosis literature. #gap/needs-human-replication — the RPE aging connection (AMD) is better supported than the neuronal claim; see [^vejux2025] for a 2025 review covering oxysterols in age-related diseases.

---

## Why it cannot be cleared by native machinery

The core problem is structural incompatibility with reverse cholesterol transport (RCT):

**Native RCT pathway:** Free cholesterol is effluxed from macrophages onto apolipoprotein A-I (apoA-I) particles and HDL via the **[[abca1]]** and **[[abcg1]]** transporters. This is how healthy macrophages offload excess cholesterol.

**7-KC efflux failure:** 7-KC is a poor substrate for ABCA1/ABCG1-mediated efflux. The ketone group at C7 alters the molecule's physical chemistry (membrane partitioning, lipid-raft interactions) in ways that make it substantially less efflux-competent than free cholesterol, even though free cholesterol efflux machinery is active in the same cell. This was directly demonstrated in macrophage foam cell models [^gaus2001] using plasma membrane vesicles and intact cells — efflux rates for 7-KC were markedly lower than for cholesterol itself across multiple experimental systems.

The consequence: as macrophages continue to phagocytose 7-KC-laden oxLDL particles, the intracellular 7-KC load accumulates. There is no native homeostatic mechanism to cap it.

| Molecule | ABCA1/apoA-I efflux | ABCG1/HDL efflux | Net outcome |
|---|---|---|---|
| Free cholesterol | Efficient | Efficient | Cleared; cell maintains homeostasis |
| 7-Ketocholesterol | Markedly reduced [^gaus2001] | Reduced [^kritharides1996] | Trapped; accumulates in foam cell |

An early observation by Kritharides et al. 1996 [^kritharides1996] showed that hydroxypropyl-β-cyclodextrin (HP-β-CD) could extract 7-KC from foam cells — this foundational result established the proof-of-concept for cyclodextrin-based extraction that UDP-003 later exploited.

---

## Biological consequences — foam-cell biology and plaque driving

Intracellular 7-KC accumulation drives multiple pro-atherogenic processes simultaneously:

### Foam-cell maturation
Macrophages loaded with 7-KC undergo lipid-droplet accumulation, cytoskeletal reorganization, and phenotypic shift toward the foam-cell state. Selectively removing 7-KC with UDP-003 reverts foam cells to a macrophage-like phenotype with restored phagocytic function, reduced ROS, and reduced lipid accumulation [^bhargava2025] — confirming that 7-KC is not merely a marker of foam-cell biology but a causal driver.

### Impaired efferocytosis
7-KC disrupts phosphatidylinositol 4,5-bisphosphate (PIP₂) dynamics at the plasma membrane, directly impairing phagocytosis and efferocytosis — the macrophage's ability to engulf dead cells and apoptotic debris [^lu2018]. #gap/needs-canonical-id — DOI for Lu & Fairn 2018 not confirmed via Crossref; verify before relying on this claim. Failed efferocytosis is a key mechanism of plaque progression and necrotic-core expansion.

### Mechanosensory dysregulation
7-KC potentiates the mechanosensitive channel **Piezo1** in macrophages, dysregulating their mechanosensory responses in the arterial microenvironment and potentially amplifying atherogenic signaling [^glogowska2025].

### Inflammatory amplification
Foam cells laden with 7-KC are a source of pro-inflammatory cytokines (IL-1β, TNF-α, IL-6). The SASP-like secretory phenotype of foam cells contributes to the chronic sterile inflammation characteristic of established atherosclerosis. Downstream effect coded as `causes: ["[[chronic-inflammation]]"]` in frontmatter.

### Cell death pathways
At sufficient concentrations, 7-KC induces apoptosis, necrosis, and a hybrid oxidative/apoptotic/autophagic cell death mode termed "oxiapoptophagy." Post-death release of 7-KC-laden intracellular contents contributes to necrotic core formation and plaque instability.

---

## Atherosclerosis context

Foam cells are the histological signature of atherosclerotic plaque at its earliest stages (fatty streak) through advanced fibrocalcific plaques. The inability to clear 7-KC helps explain a key atherosclerosis puzzle: why plaques are so refractory to spontaneous regression even when circulating LDL is lowered pharmacologically (with statins, PCSK9 inhibitors, ezetimibe). These therapies reduce new cholesterol delivery but do not address the 7-KC already trapped in plaque macrophages.

This residual cardiovascular risk after aggressive lipid-lowering is a major unmet need. Clearing the intracellular 7-KC burden is the mechanistic hypothesis underlying the UDP-003 program.

---

## Cyclarity Therapeutics UDP-003 — engineered cyclodextrin dimer

### Mechanism of action

UDP-003 is a cyclodextrin dimer engineered to selectively complex and solubilize 7-KC. Cyclodextrins are cyclic oligosaccharide rings with a hydrophobic interior cavity; the cavity geometry can be tuned to preferentially accommodate specific sterol structures. UDP-003's dimer architecture improves selectivity for 7-KC over native cholesterol relative to monomeric cyclodextrin precursors [^bhargava2025], addressing a key limitation of earlier HP-β-CD approaches (which extract cholesterol promiscuously in addition to 7-KC).

In preclinical work: UDP-003 selectively removed 7-KC from foam cells, reverted foam-cell morphology and function toward a macrophage-like state, reduced ROS, and restored phagocytic activity. In-vivo (animal) studies showed UDP-003 promotes urinary excretion of 7-KC with a favorable initial safety profile [^bhargava2025].

### Phase 1 clinical trial — NCT06813339

| Parameter | Details |
|---|---|
| Trial ID | NCT06813339 |
| Title | "A Double Blind, Placebo-controlled Study to Investigate the Safety, PK and PD of Single and Multiple Ascending Doses of UDP-003" |
| Phase | Early Phase 1 |
| Sponsor | Cyclarity Therapeutics, Inc. |
| Site | CMAX Clinical Research, Adelaide, South Australia, Australia |
| Principal investigator | Stephen Nicholls (Victorian Heart Institute / Monash University) |
| Start date | February 25, 2025 (actual) |
| Status | Recruiting (as of 2026-05-09) |
| Design | 3-part: Part A (SAD, 36 healthy volunteers) + Part B (MAD, 36 healthy volunteers) + Part C (MAD, 12 patients with history of acute coronary syndrome) |
| Total enrollment | ~84 participants |
| Primary endpoints | Safety and tolerability: adverse events, vital signs, ECG QTcF, clinical labs, audiometry (ototoxicity monitoring, consistent with cyclodextrin class effects), injection site reactions |
| Secondary/exploratory | Pharmacokinetics; pharmacodynamics (7-KC levels, plaque biomarkers in the ACS cohort) |

**This trial is the first clinical entry of an engineered LysoSENS-class therapeutic.** It is dose-finding only at this stage; efficacy data are not expected from Phase 1. The audiometry primary endpoint reflects awareness of cyclodextrin ototoxicity signals (HP-β-CD at high doses causes hearing loss in animal models) — a key safety question for the class.

**No efficacy data are available as of this writing.** Do not assert Phase 1 efficacy claims. #gap/long-term-unknown

### Cyclarity company history

- **Underdog Pharmaceuticals** was founded as an SENS Research Foundation spinout focused on cyclodextrin-based 7-KC extraction
- Rebranded to **Cyclarity Therapeutics** in 2022
- Distinct from **Repair Biotechnologies**, a separate SRF spinout pursuing a cell-autonomous enzymatic 7-KC degradation approach (see below)
- Stephen Nicholls (Monash / Victorian Heart Institute) is an established cardiovascular clinical trialist, providing credible clinical-development expertise to the program

---

## Other approaches to oxidized-cholesterol clearance

| Approach | Developer / context | Mechanism | Stage |
|---|---|---|---|
| **UDP-003** (cyclodextrin dimer extraction) | Cyclarity Therapeutics | Selective 7-KC sequestration → urinary excretion | Phase 1 (NCT06813339) |
| **REP-0003** (cell-autonomous degradation) | Repair Biotechnologies | Engineered intracellular enzyme that degrades 7-KC; gene-therapy vector delivery | Preclinical |
| **HP-β-CD** (monomeric) | Research tool / historical | Non-selective cyclodextrin extraction; poor 7-KC/cholesterol selectivity; ototoxic at high doses | Historical / preclinical only |
| **Statins / PCSK9i / ezetimibe** | Multiple; standard of care | Reduce new cholesterol delivery; do NOT clear established 7-KC burden | FDA-approved (cardiovascular) |
| **ABCA1 agonists** | Various; preclinical | Upregulate efflux transporter; effect on 7-KC efflux specifically is modest given structural mismatch | Preclinical |
| **HDL infusion therapies** | Various; multiple phase 2 trials run | Provide more apoA-I acceptors; does not rescue 7-KC efflux incompatibility | Phase 2 (mostly failed for IVUS regression) |

**Key framing:** The failure of HDL-infusion therapies in clinical trials to regress plaque is not directly addressed by the 7-KC hypothesis (those trials failed for multiple reasons); however, the 7-KC framing provides a distinct mechanistic rationale for why passive acceptor-enrichment approaches alone might be insufficient if the primary cargo (7-KC) cannot be loaded onto the acceptor.

---

## Hallmark and SENS linkage

### Hallmarks of Aging (López-Otín)

| Hallmark | Relationship |
|---|---|
| **[[loss-of-proteostasis]]** | Primary linkage: 7-KC accumulation is an intracellular waste problem, analogous to [[processes/lipofuscin]] — material that cannot be degraded or effluxed by native cellular machinery |
| **[[chronic-inflammation]]** | Secondary: foam-cell-derived inflammatory cytokines; Piezo1 potentiation; oxiapoptophagy-driven necrotic core |

### SENS damage categories

7-KC accumulation is the primary **LysoSENS** substrate in the atherosclerosis context — undegradable intracellular waste analogous to lipofuscin in post-mitotic cells. See [[frameworks/sens-damage-categories]] § LysoSENS. The [[processes/lipofuscin]] page covers the post-mitotic analog; this page covers the macrophage/cardiovascular axis.

Both converge on the same SENS repair logic: identify and deliver a clearing mechanism (enzymatic or physical extraction) that native biology lacks.

---

## Limitations and gaps

- **UDP-003 Phase 1 is dose-finding only.** No efficacy data exist as of 2026-05-09. Whether cyclodextrin-based 7-KC extraction translates to plaque regression or cardiovascular event reduction in humans is entirely undemonstrated. #gap/long-term-unknown
- **Ototoxicity safety profile.** Cyclodextrins at high doses cause hearing loss (cochlear hair-cell damage) in animal models via sterol extraction from the inner ear. UDP-003's dimer selectivity is intended to reduce this, but audiometry monitoring is a primary endpoint in NCT06813339 for a reason. Long-term cochlear safety is unestablished. #gap/long-term-unknown
- **Plaque penetration.** Whether systemically administered cyclodextrins reach 7-KC in deep plaque cores at therapeutic concentrations is unknown. The ACS cohort in Part C of NCT06813339 will provide some early pharmacodynamic signal, but quantitative plaque imaging is not a primary endpoint. #gap/dose-response-unclear
- **7-KC vs. other oxLDL species.** The atherogenic contributions of 7-KC vs. other oxysterols (25-HC, 27-HC, cholestane-triol) are not fully disaggregated. UDP-003's 7-KC selectivity is a strength pharmacologically but means it does not address the broader oxysterol burden. #gap/needs-replication
- **Neurological extension.** Whether 7-KC accumulation contributes meaningfully to neurodegeneration (Alzheimer's, other) independent of cardiovascular disease is uncertain; the literature is much thinner than the atherosclerosis literature, and dedicated mechanistic studies in neural contexts are sparse. #gap/needs-human-replication
- **Repair Biotechnologies REP-0003** — the cell-autonomous enzymatic degradation approach — is the conceptual alternative. No head-to-head or mechanistic comparison with UDP-003 is published. #gap/needs-replication

---

## See also

- [[frameworks/sens-damage-categories]] — LysoSENS category overview, including UDP-003 Phase 1 status
- [[processes/lipofuscin]] — the parallel LysoSENS substrate in post-mitotic cells
- [[hallmarks/loss-of-proteostasis]] — hallmark under which 7-KC accumulation is classified
- [[hallmarks/chronic-inflammation]] — downstream inflammatory consequence
- [[interventions/pharmacological/senolytics]] — parallel intracellular-clearance class (ApoptoSENS context)
- [[atherosclerosis]] — stub; vascular phenotype downstream of foam-cell pathology #gap/needs-replication

---

## Footnotes

[^brownjessup1999]: doi:10.1016/s0021-9150(99)00004-5 · Brown AJ, Jessup W · *Atherosclerosis* 1999 · review · 762 citations · foundational review of oxysterol biology in atherosclerosis; establishes 7-KC as the dominant atherogenic oxysterol in oxLDL; covers formation, accumulation, and cytotoxic mechanisms · not in local archive

[^gaus2001]: doi:10.1021/bi010833h · Gaus K, Dean RT, Kritharides L, Jessup W · *Biochemistry* 2001 · in-vitro (macrophage foam cells + plasma membrane vesicles) · citation-percentile 98 · direct comparison of 7-KC vs. cholesterol efflux rates; 7-KC markedly less efflux-competent than cholesterol in ABCA1/apoA-I pathway · not in local archive

[^kritharides1996]: doi:10.1074/jbc.271.44.27450 · Kritharides L, Kus M, Brown AJ, Jessup W, Dean RT · *J Biol Chem* 1996 · in-vitro (macrophage foam cells) · 59 citations / citation-percentile 98 · foundational proof-of-concept showing HP-β-CD extracts 7-KC from foam cells; mechanistic basis for cyclodextrin clearance approach · not in local archive (download pending)

[^bhargava2025]: doi:10.1016/j.atherosclerosis.2025.119217 · Bhargava P, Dinh D, Teramayi F, Silberg A, Petler N, Anderson AM, Sadrerafi K, Clemens DM, O'Connor MS · *Atherosclerosis* 2025 · in-vitro + preclinical animal · citation-percentile 97 · UDP-003 selectively removes 7-KC from foam cells, reverts foam-cell morphology and function, restores phagocytic activity, reduces ROS; animal data show urinary 7-KC excretion · not in local archive (not_oa)

[^lizard2025]: doi:10.1016/j.atherosclerosis.2025.120419 · Lizard G · *Atherosclerosis* 2025 · editorial commentary · UDP-003 as disease-modifying candidate for plaque regression; contextualizes Bhargava 2025 findings · not in local archive (not_oa)

[^glogowska2025]: doi:10.1016/j.celrep.2025.115542 · Glogowska E et al. · *Cell Reports* 2025 · in-vitro + mechanistic · citation-percentile 96 · 7-KC potentiates macrophage Piezo1 mechanosensitive channel, dysregulating mechanosensory responses; DHA antagonizes this; novel atherogenic mechanism · OA gold (download pending)

[^lu2018]: PMID 29693767 · Lu SM, Fairn GD · *Traffic (Copenhagen)* 2018 · in-vitro · 7-KC disrupts phosphatidylinositol 4,5-bisphosphate (PIP₂) dynamics, impairing phagocytosis and efferocytosis in macrophages · #gap/needs-canonical-id — DOI not confirmed via Crossref; resolve before relying on this footnote

[^wang2023]: PMID 37373423 · Wang H et al. · *Int J Mol Sci* 2023 · in-vitro (RPE cells) · 7-KC promotes RPE cell senescence and fibrosis of choroidal neovascularization via IQGAP1 phosphorylation signaling; AMD-relevant mechanism

[^vejux2025]: PMID 40216356 · Vejux A et al. · *Prostaglandins & Other Lipid Mediators* 2025 · review · oxysterols (7-KC and 7β-hydroxycholesterol) in age-related diseases including AMD, cardiovascular disease, and metabolic diseases; 2025 review covering current evidence landscape
