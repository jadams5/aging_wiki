---
type: pathway
aliases: [IL-1 pathway, interleukin-1 signaling, IL-1 receptor signaling]
kegg: hsa04060
reactome: R-HSA-9020702
wikipathways: null   # #gap/needs-canonical-id — WikiPathways lookup returned 403 during seeding; verify WP ID on next lint pass
key-nodes: ["[[il-1alpha]]", "[[il-1b]]", "[[il-1ra]]", "[[il-1r1]]", "[[il-18]]", "[[myd88]]", "[[irak4]]", "[[traf6]]", "[[nf-kb]]"]
upstream: ["[[nlrp3-inflammasome]]", "[[caspase-1]]"]
downstream: ["[[nf-kb]]", "[[ras-mapk]]", "[[chronic-inflammation]]", "[[sasp]]"]
hallmarks: ["[[chronic-inflammation]]"]
sens-categories: []
druggability-tier: 1
caused-by: ["[[nlrp3-inflammasome]]", "[[cgas-sting]]", "[[dna-damage-response]]"]
causes: ["[[chronic-inflammation]]", "[[sasp]]", "[[nf-kb]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Ridker 2017 (CANTOS, NEJM), Wesche 1997 (MyD88, Immunity), and Greenfeder 1995 (IL-1RAcP, JBC) verified against local PDFs. Dinarello 2011 (Blood review) and Kovtonyuk 2022 (Blood) confirmed via PMC abstract + metadata (full PDF not locally available). Canonical DB ID: Reactome R-HSA-9020702 confirmed as Interleukin-1 signaling via ContentService API; KEGG hsa04060 confirmed via KEGG REST API. WikiPathways ID still unresolved (403 errors). nf-kb.md Reactome ID corrected in same pass."
---

# IL-1 signaling pathway

The **interleukin-1 (IL-1) signaling pathway** is the principal mediator of sterile, innate-immune-driven inflammation in aged tissue. It transmits signals from two potent pro-inflammatory cytokines — [[il-1b|IL-1β]] and [[il-1a|IL-1α]] — through a shared receptor complex (IL-1R1 / IL-1RAcP) into the MyD88 → IRAK4 → TRAF6 → TAK1 → [[nf-kb|NF-κB]] / MAPK cascade. The pathway is tonically opposed by the endogenous antagonist [[il-1ra|IL-1Ra]] and the decoy receptor IL-1R2. Three FDA-approved biologics target this pathway, and the CANTOS trial (Ridker et al. 2017, n=10,061) established that pharmacological IL-1β blockade reduces cardiovascular events in humans, making this the **most-validated therapeutic target within [[chronic-inflammation|inflammaging]]** [^ridker2017].

This page is the *integrating* pathway page for the full IL-1 axis. Cytokine-specific biology lives on the atomic protein pages: [[il-1b]], [[il-1a]], [[il-1ra]], [[il-1r1]], [[il-18]]. Per-compound PK and trial data lives on [[canakinumab]] and the implicit stubs [[anakinra]], [[rilonacept]].

---

## IL-1 family taxonomy

The IL-1 family currently has **11 members** sharing structural homology (beta-trefoil fold) and, for most members, a shared receptor scaffold architecture [^dinarello2018] [^dinarello2011]:

| Cytokine | Gene | Receptor complex | Signal outcome | Notes |
|---|---|---|---|---|
| **IL-1α** | IL1A | IL-1R1 + IL-1RAcP | NF-κB / MAPK | Constitutive; alarmin; SASP apex regulator; also nuclear (intracrine) |
| **IL-1β** | IL1B | IL-1R1 + IL-1RAcP | NF-κB / MAPK | Requires inflammasome processing; primary pathological ligand in inflammaging |
| **IL-1Ra** | IL1RN | IL-1R1 (no IL-1RAcP) | None (pure antagonist) | Endogenous brake; basis of anakinra |
| **IL-18** | IL18 | IL-18R1 + IL-18RAP | NF-κB / AP-1 → IFN-γ | Caspase-1 activated; NK/T-cell IFN-γ inducer |
| **IL-33** | IL33 | ST2 (IL1RL1) + IL-1RAcP | NF-κB / MAPK | Alarmin; chromatin-associated; TH2 bias; senescence relevance emerging |
| IL-36α | IL36A | IL-36R + IL-1RAcP | NF-κB | Skin-dominant; weaker systemic aging role |
| IL-36β | IL36B | IL-36R + IL-1RAcP | NF-κB | Skin-dominant |
| IL-36γ | IL36G | IL-36R + IL-1RAcP | NF-κB | Skin-dominant |
| IL-36Ra | IL36RN | IL-36R (no IL-1RAcP) | None (antagonist) | Decoy for IL-36 axis |
| **IL-37** | IL37 | IL-18Rα (complex) | Anti-inflammatory | Uniquely suppressive; attenuates innate responses |
| IL-38 | IL38 | IL-36R / IL-1RAPL2 | Anti-inflammatory | Relatively uncharacterised |

The **aging-relevant members** (bold) are IL-1α, IL-1β, IL-1Ra, and IL-18 — all of which have verified atomic pages in this wiki. IL-33 has emerging senescence relevance (released from senescent fibroblast nuclei upon lytic death) but is not yet seeded. #gap/needs-canonical-id — IL-33, IL-36 family, and IL-37 pages are implicit stubs.

---

## Receptor architecture

### IL-1R1 — the signalling receptor

[[il-1r1|IL-1R1]] (UniProt P14778; gene *IL1R1*) is the primary signal-transducing receptor. It is a single-pass type I membrane glycoprotein with three extracellular Ig-like C2-type domains (D1–D3) for ligand binding and an intracellular TIR (Toll/IL-1 Receptor homology) domain for adaptor recruitment.

Ligand ranking for IL-1R1 binding affinity: IL-1β ≈ IL-1α >> IL-1Ra. Despite similar receptor affinity, IL-1Ra fails to recruit the co-receptor IL-1RAcP — this is the structural basis of its antagonism [^greenfeder1995].

### IL-1RAcP — the co-receptor

**IL-1RAcP** (IL-1 receptor accessory protein; gene *IL1RAP*; UniProt Q9NPH3) is the obligate co-receptor for IL-1R1 signalling. It is recruited to the IL-1R1·ligand complex and contributes its own TIR domain to form the two-TIR composite surface that recruits MyD88. IL-1RAcP is also the co-receptor for IL-33 (with ST2) and IL-36 signalling — making it a shared scaffold across three IL-1 family sub-axes.

### IL-1R2 — the decoy receptor

**IL-1R2** (gene *IL1R2*; UniProt P27930) is a decoy receptor that binds IL-1β with high affinity but has a truncated cytoplasmic tail incapable of signalling. It functions primarily to sequester IL-1β (and to a lesser degree IL-1α) in the extracellular space, reducing the available pool for IL-1R1 engagement. IL-1R2 is shed from the cell surface as a **soluble decoy receptor (sIL-1R2)**, whose circulating levels increase as part of the regulatory anti-inflammatory response. #gap/needs-replication — quantitative data on how sIL-1R2 changes with age in human plasma are limited to small cross-sectional studies.

### Soluble receptors

Both IL-1R1 and IL-1R2 undergo proteolytic ectodomain shedding. Soluble forms (sIL-1R1; sIL-1R2) retain ligand-binding capacity and contribute to buffering extracellular IL-1 tone, but their relative quantitative contributions in aged tissue are not established [^dinarello2011]. #gap/needs-replication

---

## Signal transduction

The canonical IL-1 transduction cascade proceeds from receptor engagement to NF-κB and MAPK activation through a conserved adaptor chain, confirmed by Reactome pathway R-HSA-9020702 [^wesche1997] [^dinarello2011]:

```
IL-1α or IL-1β
  → binds IL-1R1 (extracellular domains D1–D2)
  → IL-1RAcP recruited (forms ternary signalling complex)
  → cytoplasmic TIR domains of IL-1R1 + IL-1RAcP brought into proximity
  → MyD88 (adaptor; [[myd88]]) recruited via TIR–TIR interaction (C-terminus of MyD88 binds the IL-1R1/IL-1RAcP heterocomplex)
  → MyD88 mediates IRAK recruitment to the receptor complex (IRAK4 and IRAK1/2; [[irak4]])
  → IRAK4 autophosphorylation → phosphorylates IRAK1 and IRAK2
  → IRAK1/2 dissociate from receptor complex
  → TRAF6 (E3 ubiquitin ligase; [[traf6]]) recruited
  → TRAF6 catalyses K63-linked polyubiquitin chains on itself and IRAK1
  → TAK1 (MAP3K7) + TAB1/2 complex activated by K63-ubiquitin scaffold
      ├─ IKK arm: TAK1 → IKKβ (within IKK complex: IKKα/IKKβ/NEMO)
      │     → IκBα phosphorylation (Ser32/Ser36) → proteasomal degradation
      │     → NF-κB (p65/p50) nuclear translocation → pro-inflammatory gene transcription
      └─ MAPK arm: TAK1 → MKK3/6 → p38 MAPK
                         → MKK4/7 → JNK
                         → AP-1 activation; cytokine mRNA stabilisation
```

**Adaptor pages (R28):** [[myd88]], [[irak4]], [[traf6]], and [[tak1]] are now verified atomic protein pages with full mechanistic detail. The signal transduction arrows above are anchored to those atomic pages [^wesche1997].

### PI3K arm

IL-1R1 Tyr496 phosphorylation recruits the p85 regulatory subunit of PI3-kinase → Akt activation, integrating IL-1 signalling with the [[pi3k-akt-pathway]] and [[mtor]] axes [^il1r1page]. This arm is less well-characterised in the aging context; its contribution to inflammaging is likely minor relative to the NF-κB arm.

---

## Negative regulation

Four major regulatory mechanisms oppose IL-1 signal output:

| Mechanism | Effector | Mode | Notes |
|---|---|---|---|
| Competitive antagonism | [[il-1ra\|IL-1Ra]] (IL1RN) | Occupies IL-1R1 without recruiting IL-1RAcP; no signal | Requires ~100–1000× molar excess over IL-1β; basis of anakinra |
| Decoy receptor sequestration | IL-1R2 | High-affinity IL-1β/α binding; no intracellular TIR; no signal | Soluble shed form (sIL-1R2) extends decoy capacity into extracellular space |
| Signalling inhibitor | SIGIRR (TIR8; IL1RL2) | Single Ig-domain protein; recruits IRAK and TRAF6 away from productive signalling | Expressed highly in gut epithelium; loss accelerates colitis |
| Ubiquitin editing | A20 (TNFAIP3) | Removes K63-ubiquitin from TRAF6; dampens downstream kinase activation | Shared with TNF/TLR/NF-κB pathways; age-associated decline in A20 expression proposed |

IL-1Ra is the dominant physiological regulator and the one best-validated therapeutically. See [[il-1ra]] for the full Il1rn biology and anakinra data.

---

## Aging connection

### IL-1β as the central SASP cytokine

[[il-1b|IL-1β]] is the single most-studied cytokine in the [[sasp|senescence-associated secretory phenotype (SASP)]]. Senescent cells constitutively activate the [[nlrp3-inflammasome|NLRP3 inflammasome]] through accumulated cytosolic DNA and mitochondrial ROS, generating continuous caspase-1 activity and IL-1β output [^dinarello2011]. This IL-1β acts on IL-1R1 in neighbouring non-senescent cells, activating NF-κB and propagating the inflammatory state — a paracrine inflammaging mechanism.

IL-1β output from senescent cells is also amplified by IL-1α in an autocrine loop: IL-1α (constitutively expressed on senescent cell surfaces) signals through IL-1R1 → NF-κB → more IL-6, IL-8, MMP production, which further upregulates IL-1β transcription. This IL-1α/IL-1β autocrine-paracrine amplification loop is the proposed molecular engine of SASP maintenance (see [[il-1a]] for the primary evidence).

### Hematopoietic stem cell inflammaging via IL-1

Chronic low-level IL-1 signalling drives myeloid-biased differentiation of [[hematopoietic-stem-cells|HSCs]] in aged bone marrow. Kovtonyuk et al. (2022, Blood) showed that microbiota-derived signals elevate steady-state IL-1α/β in aged mouse bone marrow; IL-1R1-deficient HSCs (or antibiotic-treated mice) maintained balanced lymphoid/myeloid output [^kovtonyuk2022]. This implicates the IL-1 pathway in the clonal myeloid bias that precedes clonal hematopoiesis and CHIP. For the full CHIP/HSC aging context see [[chronic-inflammation]] and the implicit stubs [[hematopoietic-stem-cells]], [[clonal-hematopoiesis]].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — IL-1R1, IL1RAP, MYD88, IRAK1/4, TRAF6 all conserved with high homology |
| Phenotype (inflammaging) conserved in humans? | yes — CANTOS demonstrated the IL-1β limb causally mediates cardiovascular events in humans [^ridker2017] |
| Replicated in humans? | yes (CANTOS, n=10,061); partial (HSC myeloid bias — mechanistic data primarily murine) |

### CANTOS and the aging-context druggability rationale

The CANTOS trial [^ridker2017] randomised 10,061 post-MI patients with hsCRP ≥2 mg/L to canakinumab (50, 150, or 300 mg q3mo SC) vs placebo. The 150 mg arm reduced MACE (HR 0.85, 95% CI 0.74–0.98; P=0.021). No LDL reduction was observed — establishing that the CV benefit is inflammation-mediated, not lipid-mediated. This is the single most powerful human proof-of-concept for the IL-1 pathway as a geroprotective target.

**Druggability-tier rationale (tier 1):** Per CLAUDE.md pathway-schema, the aging-context tier reflects whether a clinical drug exists for an *aging indication engaging this pathway*. Three FDA-approved IL-1 modulators exist (anakinra, canakinumab, rilonacept), and CANTOS constitutes an aging-relevant Phase 3 trial (post-MI patients selected on inflammatory biomarker; outcome is cardiovascular aging, not a rare genetic syndrome). Tier 1 is justified. See [[canakinumab]] for per-arm effect sizes; [[il-1ra]] for anakinra compound data.

---

## Therapeutic landscape

| Agent | Mechanism | Specificity | Approved indication | Aging relevance |
|---|---|---|---|---|
| **Anakinra** (Kineret) | Recombinant IL-1Ra; competitive IL-1R1 antagonist | IL-1R1 — blocks IL-1α and IL-1β equally | RA, CAPS, SJIA, NOMID | T2D (Larsen 2007 NEJM, n=70); HFpEF (D-HART, n=12); short half-life (4–6 h) requires daily SC injection |
| **[[canakinumab]]** (Ilaris) | Anti-IL-1β IgG1κ mAb | IL-1β-specific; does not block IL-1α | CAPS, SJIA, TRAPS, FMF, gout | CANTOS (n=10,061): HR 0.85 at 150 mg; cost/safety barrier to population use [^ridker2017] |
| **Rilonacept** (Arcalyst) | IL-1 Trap (Fc–IL-1R1–IL-1RAcP fusion) | Sequesters IL-1α + IL-1β; similar breadth to anakinra | CAPS, recurrent pericarditis | No large aging-specific trial; long half-life (~7 days) better than anakinra; no CANTOS-equivalent |
| Bermekimab (investigational) | Anti-IL-1α mAb | IL-1α-specific | Phase 2/3 (hidradenitis suppurativa, atopic dermatitis) | Tests the IL-1α → SASP apex hypothesis; no aging RCT yet |
| Isunakinra (investigational) | Anti-IL-1R1 mAb | Blocks IL-1R1 directly | Phase 1–2 (asthma) | Would block all IL-1R1 ligands; not yet aging-focused |

**CANTOS lessons for pathway-level therapeutics:**
1. IL-1β–specific blockade is sufficient to reduce MACE in a high-inflammaging population (hsCRP ≥2 mg/L), but the effect size is modest (HR 0.85) and the benefit is offset by a higher rate of fatal infection (incidence rate ratio ~1.7 vs placebo: 0.31 vs 0.18 events per 100 person-years in pooled canakinumab vs placebo; P=0.02).
2. Broad IL-1 blockade (anakinra) suppresses both IL-1α and IL-1β; this may enhance efficacy in SASP-driven contexts (where IL-1α is the apex regulator) but carries a wider immunosuppression risk.
3. No senolytic intersection trial has combined IL-1 pathway blockade with senescent cell clearance (e.g., fisetin or navitoclax). This is a proposed next experimental step. #gap/needs-human-replication

---

## Cross-references

- [[il-1b]] — primary pathological ligand; NLRP3-processed; CANTOS target
- [[il-1a]] — alarmin; constitutive; SASP apex regulator; nuclear intracrine activity
- [[il-1ra]] — endogenous antagonist; basis of anakinra
- [[il-1r1]] — primary signalling receptor; ligand selectivity; TIR domain
- [[il-18]] — IL-1 family member with distinct receptor and IFN-γ–inducing role
- [[canakinumab]] — anti-IL-1β mAb; CANTOS trial data canonical home
- [[nlrp3-inflammasome]] — upstream source of processed IL-1β; verified pathway page
- [[caspase-1]] — protease that activates pro-IL-1β and pro-IL-18
- [[nf-kb]] — primary downstream transcriptional effector arm
- [[ras-mapk]] — parallel MAPK arm (p38, JNK) downstream of TAK1
- [[sasp]] — major functional output of chronic IL-1 signalling in senescent cells
- [[chronic-inflammation]] — hallmark MOC; IL-1 pathway is a core molecular driver
- [[cellular-senescence]] — SASP-derived IL-1α/β sustains senescent state via IL-1R1 → NF-κB loop

**Adaptor cascade (verified R28):**
- [[myd88]] — universal IL-1R/TLR adaptor; Myddosome 6:4:4 (MyD88:IRAK4:IRAK2)
- [[irak4]] — master serine/threonine kinase; first kinase in the IL-1 signalling cascade
- [[traf6]] — E3 ubiquitin ligase; K63-polyubiquitin scaffold
- [[tak1]] — MAP3K7; proximal to IKK and MAPK arms

**Implicit stubs created by this page:**
- [[il-1racp]] — co-receptor (IL1RAP); not yet seeded
- [[il-1r2]] — decoy receptor; not yet seeded
- [[sigirr]] — negative regulator; not yet seeded
- [[anakinra]] — recombinant IL-1Ra compound page (noted as stub in [[il-1ra]] and [[canakinumab]])
- [[rilonacept]] — IL-1 Trap compound page; noted in [[il-1r1]]
- [[il-33]] — IL-1 family alarmin with senescence relevance; not yet seeded
- [[hematopoietic-stem-cells]] — target of chronic IL-1 in bone marrow aging
- [[clonal-hematopoiesis]] — downstream consequence of IL-1–driven HSC bias

---

## Limitations and gaps

- **WikiPathways ID:** Not retrieved (403 error during seeding). Populate `wikipathways:` on next lint pass using the WikiPathways REST API or browser lookup for "IL-1 signaling human." Tag: #gap/needs-canonical-id
- **KEGG precision:** hsa04060 is the cytokine-cytokine receptor interaction map, not an IL-1-specific intracellular cascade entry. Reactome R-HSA-9020702 is more specific for the transduction cascade and should be the primary reference. If a dedicated KEGG IL-1 signalling pathway entry exists (check KEGG PATHWAY + hsa + search "interleukin-1"), update the `kegg:` field. #gap/needs-canonical-id
- **Reactome ID conflict in [[nf-kb]]:** The nf-kb.md page incorrectly lists `reactome: R-HSA-9020702`; this ID belongs to IL-1 signaling. Correct the nf-kb.md Reactome field on next lint pass (but do not modify other pages in this seeding pass).
- **MyD88/IRAK4/TRAF6/TAK1 (resolved R28-2026-05-07):** All four adaptor protein pages are now seeded and verified. Signal transduction wikilink graph is complete.
- **IL-1α / SASP apex claim:** The claim that IL-1α is the "apex regulator" of the SASP relies on Orjalo et al. 2009 (verified on [[il-1a]]). That verification is recorded on the atomic page; the pathway page inherits the claim by wikilink without repeating the evidence. No additional gap.
- **IL-1R2 aging data:** Quantitative data on age-associated changes in sIL-1R2 levels are sparse; the decoy receptor's contribution to IL-1 buffering in aged tissue is incompletely characterised. #gap/needs-replication
- **Senolytic intersection:** No published trial combining IL-1 pathway blockade with senolytic clearance (navitoclax, fisetin). This remains an important next experiment. #gap/needs-human-replication
- **Hematopoietic aging claim:** Kovtonyuk 2022 (Blood) is a mouse study; the microbiome–IL-1–HSC axis in human aging is inferred but not directly tested. #gap/needs-human-replication
- **IL-33 in senescence:** Emerging evidence that IL-33 is released from senescent cell nuclei on lytic death (alarmin function); no atomic page yet. #gap/needs-replication; [[il-33]] is an implicit stub.

---

## Footnotes

[^ridker2017]: doi:10.1056/NEJMoa1707914 · Ridker PM et al. · NEJM 2017 · rct · n=10,061 (placebo n=3344; 50 mg n=2170; 150 mg n=2284; 300 mg n=2263) · post-MI patients with hsCRP ≥2 mg/L; canakinumab 50/150/300 mg q3mo SC vs placebo; median follow-up 3.7 yr; primary endpoint MACE; 150 mg arm HR 0.85 (95% CI 0.74–0.98; P=0.021); hsCRP −37 pp vs placebo at 48 months (150 mg arm); no LDL change; fatal infection incidence rate ratio ~1.7 (0.31 vs 0.18 events/100 person-years; P=0.02); local PDF:  — canonical CANTOS numerics on [[canakinumab]]

[^wesche1997]: doi:10.1016/s1074-7613(00)80402-1 · Wesche H et al. · Immunity 1997 · in-vitro (co-immunoprecipitation, kinase assay) · identified MyD88 as the TIR-domain adaptor recruited to IL-1R1 upon ligand binding; showed MyD88 recruits IRAK to the receptor complex; ~1104 citations; local PDF available

[^greenfeder1995]: doi:10.1074/jbc.270.23.13757 · Greenfeder SA et al. · J Biol Chem 1995 · in-vitro (molecular cloning, binding studies) · cloned IL-1RAcP as the obligate co-receptor for IL-1R1 signalling; showed IL-1Ra occupies IL-1R1 without recruiting IL-1RAcP; structural basis of antagonism; ~638 citations; local PDF available

[^dinarello2011]: doi:10.1182/blood-2010-07-273417 · Dinarello CA · Blood 2011 · review · comprehensive coverage of IL-1β central role in acute and chronic inflammation; TIR-domain signalling; therapeutic neutralisation; ~2149 citations; OA (bronze); not yet locally downloaded

[^dinarello2018]: doi:10.1111/imr.12621 · Dinarello CA · Immunol Rev 2018 · review · IL-1 family overview including all 11 members, receptor architecture, TIR-domain signalling, and negative regulation; ~1731 citations; OA (green PMC5756628); DOI lookup failed — not locally available

[^kovtonyuk2022]: doi:10.1182/blood.2021011570 · Kovtonyuk LV et al. · Blood 2022 · in-vivo (mouse) · microbiota-derived signals elevate steady-state IL-1α/β in aged bone marrow; IL-1R1 KO HSCs maintain balanced lymphomyeloid output; antibiotic suppression phenocopies; ~135 citations; OA (hybrid); not yet locally downloaded; #gap/needs-human-replication

[^il1r1page]: Cross-reference to [[il-1r1]] atomic page (verified 2026-05-06) for IL-1R1 Tyr496 phosphorylation → PI3K-p85 interaction claim; canonical source is Boraschi & Tagliabue 2013 (doi:10.1016/j.smim.2013.10.023) as cited there
