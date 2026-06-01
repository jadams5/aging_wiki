---
type: pathway
aliases: [Janus kinase / signal transducer and activator of transcription, JAK/STAT, JAK-STAT signaling]
kegg: hsa04630
reactome: R-HSA-6785807
wikipathways: null
key-nodes: ["[[jak1]]", "[[jak2]]", "[[jak3]]", "[[tyk2]]", "[[stat1]]", "[[stat3]]", "[[stat5]]"]
upstream: ["cytokine receptors (IFN, IL-6 family, GH, EPO, prolactin, leptin)", "[[growth-hormone]]", "[[insulin-igf1]]"]
downstream: ["[[chronic-inflammation]]", "[[immunosenescence]]"]
hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Xu 2015 (PNAS), James 2005 (Nature), and Levy 2002 (NRM) verified against local PDFs. KEGG/Reactome IDs verified against DOI lookup. Darnell 1994 (closed-access) and Ridker 2017 unverified against PDF — retained with existing gap markers. WikiPathways null retained (gap tag present)."
---


# JAK-STAT signaling pathway

The **Janus kinase / Signal Transducer and Activator of Transcription (JAK-STAT)** pathway is the primary intracellular relay used by ~60 cytokines and growth factors to transmit extracellular signals directly from the plasma membrane to the nucleus. It is distinguished from second-messenger cascades by its speed and directness: receptor activation → STAT transcription factor activation occurs within minutes, without diffusible intermediates. In aging, JAK-STAT is a central driver of [[chronic-inflammation]] via the IL-6/STAT3 axis, a mediator of [[immunosenescence]] via STAT5-dependent lymphocyte homeostasis, and a pharmacologically tractable target via FDA-approved JAK inhibitors now under investigation as senomorphics.

> **Naming note:** This page covers the JAK-STAT *pathway* as a whole. Individual kinase and transcription factor protein pages (e.g., `molecules/proteins/jak1.md`) will be seeded separately and will wikilink back here.

## Architecture: 4 JAKs, 7 STATs

The pathway has two protein families:

### Janus kinases (JAKs)

Four mammalian JAKs, each constitutively associated with specific cytokine receptor cytoplasmic domains:

| JAK | Key receptor partners | Primary STAT outputs |
|---|---|---|
| **JAK1** | IFN receptors, IL-6 family (gp130), IL-2/4/7 | STAT1, STAT3, STAT5 |
| **JAK2** | GH receptor, EPO receptor, IL-12, IFN-γ | STAT1, STAT3, STAT5B |
| **JAK3** | Common γ-chain receptors (IL-2, IL-4, IL-7, IL-9, IL-15, IL-21) | STAT5 |
| **TYK2** | IFN-α/β receptors, IL-12, IL-23 | STAT1, STAT2, STAT3 |

JAKs have a catalytic kinase domain (JH1) and a pseudokinase domain (JH2) that modulates JH1 activity. In basal state, the JH2 domain suppresses JAK activity; ligand-induced receptor dimerization relieves this autoinhibition [^levy2002].

### Signal transducers and activators of transcription (STATs)

Seven mammalian STATs (STAT1, STAT2, STAT3, STAT4, STAT5A, STAT5B, STAT6). Each contains an SH2 domain (for phosphotyrosine docking) and a C-terminal transactivation domain. STATs are latent in cytoplasm until activated.

## Canonical signaling mechanism

The pathway operates as a four-step activation cascade [^darnell1994]:

1. **Cytokine binding** — ligand binds its cognate receptor, inducing receptor dimerization or conformational change.
2. **JAK trans-phosphorylation** — receptor-associated JAKs are brought into proximity and trans-phosphorylate activation-loop tyrosines on each other (e.g., JAK1 at Y1034/1035; JAK2 at Y1007/1008), fully activating their kinase domains.
3. **Receptor phosphorylation and STAT recruitment** — activated JAKs phosphorylate specific tyrosine residues on the receptor cytoplasmic tail, creating docking sites for STAT SH2 domains.
4. **STAT phosphorylation, dimerization, and nuclear translocation** — docked STATs are phosphorylated by JAKs at a conserved C-terminal tyrosine (e.g., STAT3 Tyr705, STAT1 Tyr701, STAT5 Tyr694/699). Phospho-STATs dimerize via reciprocal SH2–phosphotyrosine contacts, translocate to the nucleus, and bind specific DNA elements — **GAS** (gamma-activated sequence, consensus TTCNNNGAA) or **ISRE** (IFN-stimulated response element) — to drive gene transcription [^levy2002].

## Cytokine-specific pathway routing

The pathway achieves specificity through combinatorial JAK–receptor and STAT–promoter pairing:

| Cytokine / ligand | JAKs engaged | Primary STAT | Key outputs |
|---|---|---|---|
| **IL-6 family** (IL-6, IL-11, OSM, LIF, CNTF) | JAK1 + JAK2 or TYK2 (via gp130) | STAT3 | Acute-phase response, inflammation, anti-apoptotic genes |
| **IFN-γ** | JAK1 + JAK2 | STAT1 | Antiviral response, MHC-II induction |
| **IFN-α/β** | JAK1 + TYK2 | STAT1 + STAT2 (ISGF3 complex) | ISG transcription, antiviral defense |
| **Growth hormone** | JAK2 | STAT5B | IGF-1 transcription in liver (cross-link: [[growth-hormone]]) |
| **EPO** | JAK2 | STAT5 | Erythropoiesis, RBC survival |
| **IL-2, IL-4, IL-7** | JAK1 + JAK3 | STAT5 | Lymphocyte proliferation, survival |
| **IL-12, IL-23** | JAK2 + TYK2 | STAT4 | Th1 differentiation, NK cell activation |

The GH → JAK2 → STAT5B → IGF-1 axis is verified on the [[growth-hormone]] page (verified-partial) as a canonical example of JAK-STAT transducing a growth/metabolic signal rather than an immune one.

## Negative regulation

Three principal feedback mechanisms limit JAK-STAT duration:

1. **SOCS proteins** (Suppressors of Cytokine Signaling, 8 members) — STAT-target genes, forming a classical negative-feedback loop. SOCS proteins bind phosphorylated JAKs or receptors via their SH2 domains, block substrate recruitment, and target JAKs for ubiquitin-mediated degradation via their SOCS box. SOCS3 is the principal brake on IL-6/STAT3 signaling; SOCS1 on IFN-γ/STAT1 [^levy2002].
2. **SHP1/SHP2 phosphatases** — directly dephosphorylate JAKs and STATs, terminating signal.
3. **PIAS proteins** (Protein Inhibitors of Activated STATs) — inhibit STAT DNA binding via sumoylation or direct occlusion of DNA-binding domains.

In aging, SOCS3 expression may decline in some tissues, contributing to chronic low-level STAT3 activation; this is an active area of investigation. #gap/needs-replication

## Aging relevance

JAK-STAT intersects the aging biology in three mechanistically distinct arms:

### 1. IL-6/STAT3 axis and inflammaging

Circulating IL-6 rises steadily with age — a well-replicated human epidemiological finding — contributing to the sterile chronic inflammation state termed "inflammaging." IL-6 signals via gp130-associated JAK1/JAK2 → STAT3 → pro-inflammatory gene programs. Critically, senescent cells produce IL-6 as a core SASP component, creating an autocrine/paracrine feed-forward loop: SASP IL-6 activates JAK/STAT3 in neighboring cells, reinforcing SASP in a non-cell-autonomous manner and propagating the senescent phenotype to healthy tissue. This loop is one rationale for senomorphic JAK inhibition (see Therapeutic landscape below).

The CANTOS trial demonstrated that neutralizing IL-1β (another SASP cytokine upstream of IL-6) reduced cardiovascular events, supporting the causal role of the IL-6 inflammatory axis in aging-related disease [^ridker2017]. CANTOS did not directly target JAK-STAT but validates the broader cytokine-inflammation pathway in human aging disease. #gap/needs-replication — CANTOS is not an aging lifespan trial; extrapolation to broader geroprotection requires caution.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (inflammaging) conserved in humans? | yes |
| Replicated in humans? | yes (epidemiological); causal intervention (JAKi) in progress |

### 2. SASP and the JAK inhibitor senomorphic finding

Xu et al. 2015 showed that three JAK inhibitors — JAK inhibitor 1 (pan-JAK), ruxolitinib, and momelotinib — suppress SASP factor secretion from human primary pre-adipocyte and HUVEC senescent cells in vitro AND improve multiple physical function endpoints (grip strength, hanging endurance, ambulation, rearing, RotaRod coordination) in naturally aged 24-month C57BL/6 male mice (n=8/group for CLAMS activity endpoints; n=9/group for mechanical function endpoints; ruxolitinib 60 mg/kg/day in food for 10 weeks) [^xu2015]. This is the primary experimental basis for classifying JAK inhibitors as senomorphics (see [[interventions/pharmacological/senomorphics]]), verified on that page.

The proposed mechanism: senescent cells have chronically elevated JAK/STAT3 activity (driven by autocrine SASP IL-6); JAK inhibition breaks this autocrine loop, reducing phospho-STAT3 (Tyr705) and downstream SASP transcription [^xu2015]. Xu 2015 demonstrated phospho-STAT3 reduction directly (Fig. 4F, 7C/D); NF-κB involvement is inferred from the broader SASP literature and is not directly demonstrated in this paper. Note that this is a senomorphic effect — senescent cells are not cleared, only silenced — distinguishing it from senolytic strategies.

| Dimension | Status |
|---|---|
| Pathway (JAK-SASP loop) conserved in humans? | partial — in vitro human cell data; no aged human tissue in vivo |
| Physical function improvement | only in mice; #gap/needs-human-replication |
| Replicated in humans? | no — clinical senomorphic trials ongoing |

### 3. Immunosenescence and lymphocyte homeostasis

STAT5, activated by JAK1/JAK3 downstream of IL-2, IL-7, and IL-15, is essential for naive T-cell survival, memory T-cell maintenance, and NK cell homeostasis. With age, common γ-chain cytokine signaling fidelity declines in aged lymphocytes, contributing to the contracted naive T-cell compartment and expanded memory/effector T-cell pool characteristic of [[immunosenescence]]. The JAK3/STAT5 arm is thus a mechanistic contributor to the age-related immune decline documented on the [[immunosenescence]] page (verified-partial).

#gap/no-mechanism — The precise molecular basis for reduced γ-chain cytokine signaling efficiency in aged human T cells (whether due to receptor downregulation, JAK3 activity decline, SOCS upregulation, or epigenetic STAT5 target silencing) is not well-resolved.

## Therapeutic landscape

JAK inhibitors (JAKi) are an established drug class, originally developed for myeloproliferative and autoimmune indications. Five FDA-approved small-molecule JAKi are relevant to aging biology:

| Drug | JAK selectivity | Primary FDA indications | Aging-relevant status |
|---|---|---|---|
| **Ruxolitinib** (Jakafi) | JAK1/JAK2 | Myelofibrosis, PV, GVHD, atopic dermatitis | Senomorphic data: Xu 2015 [^xu2015] |
| **Tofacitinib** (Xeljanz) | JAK1/JAK3 (weak JAK2) | RA, PsA, UC | #gap/unsourced for aging-specific studies |
| **Baricitinib** (Olumiant) | JAK1/JAK2 | RA, COVID-19, atopic dermatitis | Used in COVID-19 cytokine storm — JAK-inflammatory link validated |
| **Upadacitinib** (Rinvoq) | JAK1-selective | RA, PsA, AS, atopic dermatitis | JAK1 selectivity may reduce EPO-related side effects |
| **Momelotinib** (Ojjaara) | JAK1/JAK2 | Myelofibrosis with anemia | Senomorphic data: Xu 2015 [^xu2015] |

**Safety caveat:** All approved JAK inhibitors carry FDA black-box warnings for serious infections, major adverse cardiovascular events (MACE), malignancy, thrombosis, and death. These were primarily identified in RA patients (older, immunocompromised, often on background immunosuppression). Risk profile in healthy aging individuals at low senomorphic doses is unknown. #gap/long-term-unknown

Topical ruxolitinib (Opzelura) has a more favorable systemic exposure and may be a model for tissue-targeted senomorphic delivery. #gap/needs-replication — no aging-endpoint clinical data exist for topical JAKi.

## Disease relevance: somatic JAK2 V617F and myeloproliferative neoplasms

A gain-of-function point mutation, **JAK2 V617F** (valine-to-phenylalanine substitution at codon 617), was found in 40/45 (89%; abstract: ">80%") polycythemia vera (PV) patients, 9/21 (~43%) essential thrombocythemia (ET) patients, and 3/7 (~43%) idiopathic myelofibrosis patients in the James 2005 discovery cohort [^james2005]. Higher PV frequencies (>95%) have been reported in larger subsequent series but are not from James 2005 itself. Note: 0/15 controls and 0/35 secondary erythrocytosis patients carried the mutation [^james2005]. The V617F mutation lies in the JH2 pseudokinase domain, disrupting its autoinhibitory function and causing constitutive JAK2 kinase activity without cytokine engagement. This is the canonical oncogenic JAK-STAT gain-of-function mechanism.

Clonal hematopoiesis of indeterminate potential (CHIP), in which somatic mutations including JAK2 V617F expand in the aging hematopoietic compartment, is increasingly recognized as an aging-associated phenomenon that elevates cardiovascular and myeloid disease risk. #gap/unsourced — citation needed specifically for JAK2 V617F as a CHIP driver; CHIP literature is fast-moving.

## Crosstalk with other aging pathways

- **[[nf-kb]]** — both NF-κB and JAK/STAT3 are activated by SASP factors; they cooperate in driving SASP transcription and can act in reinforcing loops. Key distinction: NF-κB is the primary SASP transcription factor; STAT3 amplifies and sustains it, particularly through the IL-6 autocrine loop.
- **[[mtor]]** — mTORC1 can phosphorylate STAT3 at Ser727, modulating (in some contexts, enhancing) STAT3 transcriptional activity, independent of JAK-mediated Tyr705 phosphorylation. Cross-talk is context-dependent. #gap/needs-replication
- **[[ampk]]** — AMPK activation (e.g., by metformin or exercise) suppresses STAT3 and reduces IL-6 production in some cell types, providing another mechanistic link between energy sensing and SASP control. #gap/unsourced — specific mechanistic citations needed.
- **[[cgas-sting]]** — cGAS-STING activation in senescent cells drives IRF3-mediated IFN-β production; IFN-β signals via JAK1/TYK2 → STAT1/STAT2, creating a second JAK-STAT activation arm in senescent cells distinct from the IL-6/STAT3 arm.

## Limitations and gaps

- #gap/needs-human-replication — Physical function and SASP-suppressive benefits of JAK inhibition demonstrated in aged mice (Xu 2015); no equivalent human aging interventional trial completed.
- #gap/long-term-unknown — Safety of systemic JAK inhibition at sub-clinical doses in healthy older adults is unstudied; FDA black-box warnings derived from diseased populations.
- #gap/no-mechanism — Mechanistic basis for SOCS3 decline with age in key tissues (if real); and for reduced γ-chain cytokine signaling efficiency in aged T cells.
- #gap/contradictory-evidence — STAT3 can be both pro-inflammatory (IL-6-driven SASP amplification) and anti-inflammatory (IL-10-driven STAT3 activation in regulatory contexts); tissue and ligand context determines outcome.
- #gap/needs-canonical-id — WikiPathways ID for JAK-STAT pathway not confirmed as of 2026-05-04.
- #gap/unsourced — JAK2 V617F as a CHIP driver (CHIP-specific citation needed); tofacitinib in aging studies.

## Footnotes

[^darnell1994]: doi:10.1126/science.8197455 · n/a · review · model: mammalian cell culture and in-vivo systems (foundational JAK-STAT discovery/framework review) · 6,055 citations · 100th percentile · archive: closed; no local PDF

[^levy2002]: doi:10.1038/nrm909 · n/a · review · model: mammalian systems · 3,151 citations · 100th percentile · archive: local PDF available at 

[^xu2015]: doi:10.1073/pnas.1515386112 · in-vivo (mouse) + in-vitro (human cells) · n=8/group (CLAMS activity endpoints); n=9/group (grip strength, hanging, RotaRod) · model: 24-month-old C57BL/6 male mice (NIA colony); drug: ruxolitinib (INCB18424) 60 mg/kg/day orally in food for 10 weeks; human primary preadipocytes + HUVECs (in vitro) · p<0.05 for all reported physical function endpoints (Fig. 8); cell experiment n: n=3–7 per endpoint (see individual figure legends) · archive: local PDF at  · verified on [[interventions/pharmacological/senomorphics]] page (verified: true, 2026-05-04)

[^james2005]: doi:10.1038/nature03546 · observational (human cohort) · n=45 PV patients + 15 controls + 35 secondary erythrocytosis + 21 ET + 7 idiopathic MF (discovery series) · model: human myeloproliferative neoplasm patients; mouse bone-marrow transplant model (n=5/group for haematocrit; p=0.003 V617F vs control, p=0.0002 V617F vs WT JAK2) · archive: local PDF available at 

[^ridker2017]: doi:10.1056/NEJMoa1707914 · rct · n=10,061 · model: humans (prior MI + elevated hsCRP) · primary endpoint: non-fatal MI + non-fatal stroke + CV death; canakinumab (anti-IL-1β) 150 mg q3m HR 0.85 (95% CI 0.74–0.98), p=0.021 · archive: local PDF available at 
