---
type: pathway
aliases: [TGF-beta signaling, TGFbeta pathway, transforming growth factor beta, TGF-β pathway, TGF-beta/SMAD, TGFB signaling]
kegg: hsa04350
reactome: R-HSA-170834
wikipathways: WP366
key-nodes: ["[[tgfb1]]", "[[tgfb2]]", "[[tgfb3]]", "[[tgfbr2]]", "[[tgfbr1]]", "[[smad2-smad3]]", "[[smad4]]", "[[smad7]]"]
upstream: ["[[ecm-remodeling]]", "[[inflammation]]", "[[reactive-oxygen-species]]"]
downstream: ["[[cell-cycle-arrest]]", "[[emt]]", "[[fibrosis]]", "[[autophagy]]", "[[apoptosis]]"]
hallmarks: ["[[altered-intercellular-communication]]", "[[stem-cell-exhaustion]]"]
sens-categories: []
druggability-tier: 1
caused-by: ["[[chronic-inflammation]]", "[[cellular-senescence]]"]
causes: ["[[stem-cell-exhaustion]]", "[[fibrosis]]", "[[altered-intercellular-communication]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "R20 lightweight verifier sweep — all 6 cited DOIs cross-checked via DOI lookup (Derynck 2003, Conboy 2005, Carlson 2008, Carlson 2009, Yousef 2015, Massagué 2008) — titles match cited author/year/topic. Carlson 2008 (DOI 10.1038/nature07034) added during R20 propagation pass with explicit note that 10.1038/nature06849 is the unrelated Desmurget neuroscience paper. Derynck 2003 and Conboy 2005 have local PDFs."
---

# TGF-β signaling pathway

The **Transforming Growth Factor-beta (TGF-β) pathway** is a pleiotropic cytokine-signaling system that controls cell proliferation, differentiation, apoptosis, and extracellular matrix production across virtually all metazoan tissues. In aging biology, TGF-β occupies a central position as a paracrine suppressor of adult stem cell activity: elevated TGF-β1/3 ligand levels in aged systemic circulation impair satellite cell activation and hippocampal neurogenesis, directly contributing to the [[stem-cell-exhaustion]] hallmark. The pathway also mediates the pro-fibrotic and immunosuppressive arms of the aging secretome, intersecting with [[altered-intercellular-communication]].

> **Naming note:** The pathway page uses the bare wikilink `[[tgf-beta]]`. Individual TGF-β superfamily ligand proteins (TGFB1, TGFB2, TGFB3, [[gdf11]], [[gdf15]], myostatin/GDF8) will be seeded separately under `molecules/proteins/`. The [[bmp-signaling]] pathway (BMP sub-family) is a sibling pathway within the broader TGF-β superfamily and has its own page.

---

## Identity and canonical database entries

| Field | Value |
|---|---|
| KEGG | hsa04350 — "TGF-beta signaling pathway - Homo sapiens" |
| Reactome | R-HSA-170834 — "Signaling by TGF-beta Receptor Complex" |
| WikiPathways | WP366 (human) |
| Superfamily | TGF-β superfamily (~33 human ligands including BMPs, Activins, GDFs, AMH, Nodal) |
| Core ligands covered here | TGF-β1, TGF-β2, TGF-β3 (TGFB1/2/3 genes) |

---

## Canonical (SMAD-dependent) signaling

### Step-by-step mechanism

1. **Ligand secretion and activation.** TGF-β ligands are secreted in a latent form associated with the Latency-Associated Peptide (LAP) and Latent TGF-β Binding Proteins (LTBPs). Extracellular activation (by proteases, integrins, or reactive oxygen species) releases the mature dimer.

2. **Receptor engagement.** The active TGF-β dimer binds the constitutively active Type II receptor kinase (**TβRII**, encoded by *TGFBR2*). TβRII then recruits and transphosphorylates the Type I receptor (**TβRI**, most commonly ALK5, encoded by *TGFBR1*) at the GS domain, activating its kinase [^derynck2003].

3. **R-SMAD phosphorylation.** Activated ALK5 directly phosphorylates the C-terminal SXS motif of the receptor-regulated SMADs **SMAD2** and **SMAD3**, converting them from a monomeric, latent state to an activated form capable of forming heteromeric complexes [^derynck2003].

4. **SMAD complex formation.** Phosphorylated SMAD2/3 associates with the co-SMAD **SMAD4** to form a trimeric complex. This complex translocates to the nucleus.

5. **Transcriptional regulation.** The SMAD2/3:SMAD4 trimer binds SMAD-binding elements (SBEs; 5'-GTCT/AGAC-3') in promoters of target genes, often cooperating with context-dependent transcription factors (AP-1, FoxO, RUNX). Canonical target genes include *CDKN1A* (p21), *SERPINE1* (PAI-1), *CTGF*, and *SNAIL* (in EMT contexts).

### I-SMAD negative feedback

**SMAD7** (an inhibitory SMAD, I-SMAD) is itself a TGF-β target gene, forming a direct negative feedback loop:
- SMAD7 competes with SMAD2/3 for binding to activated TβRI, blocking R-SMAD phosphorylation [^derynck2003].
- SMAD7 recruits the E3 ubiquitin ligases SMURF1/SMURF2 to the receptor complex, triggering receptor ubiquitination and proteasomal degradation.
- SMAD6 (the other I-SMAD) primarily inhibits BMP/SMAD1/5/8 signaling and has a less prominent role in TGF-β/SMAD2/3 regulation.

---

## Non-canonical (SMAD-independent) signaling

TGF-β activates multiple non-SMAD branches, often in a cell-type- and context-dependent manner [^derynck2003]:

| Branch | Key effectors | Functional consequence |
|---|---|---|
| **MAPK/ERK** | RAS → RAF → MEK → ERK | Proliferation, migration; interacts with EMT |
| **JNK/p38 MAPK** | TAK1 (MAP3K7) → MKK4/7 → JNK; TAK1 → MKK3/6 → p38 | Apoptosis, stress response |
| **PI3K/AKT** | PI3K → AKT → mTORC1 | Cell survival, protein synthesis; intersects [[mtor]] and [[pi3k-akt-pathway]] |
| **Rho-ROCK** | Rho GTPases → ROCK → actin remodeling | Cytoskeletal reorganization, EMT |

Non-canonical branches often mediate the pro-oncogenic effects of TGF-β in late-stage tumors (see Cancer section), whereas the canonical SMAD branch drives tumor-suppressive and senescence-inducing effects in early contexts.

---

## Aging biology

TGF-β signaling is emerging as one of the key pathways mediating the paracrine suppression of tissue regeneration by the aged systemic environment. Two primary mechanisms have been identified: (1) elevated circulating TGF-β1 directly suppresses stem cell niches, and (2) SASP-driven TGF-β acts locally to propagate cell-cycle arrest and stem cell dysfunction.

### Heterochronic parabiosis and aged satellite cells

The foundational evidence that the systemic environment — not intrinsic stem cell aging — is the proximate cause of age-related satellite cell dysfunction comes from heterochronic parabiosis experiments: when aged mice share circulation with young partners, aged satellite cell activation is restored [^conboy2005].

**Carlson et al. (2008)** — the foundational mechanistic paper — identified pSMAD3 as the primary elevated species in aged satellite cells and showed that pSMAD3 drives induction of CDK inhibitors (p15, p16, p21, p27) which lock satellite cells in a non-responsive quiescence; Notch signaling normally antagonizes this by restricting pSMAD3 access to CDK inhibitor promoters [^carlson2008]. **Carlson and Conboy (2009)** followed this work to dissect the relative contributions of TGF-β vs Wnt in aged satellite cell niches, and showed that pharmacological inhibition of TGF-β receptor signaling restores satellite cell proliferation in aged muscle [^carlson2009]. Together these establish elevated TGF-β/pSMAD3 as a key driver of the regenerative deficit in aged skeletal muscle, operating through SMAD3-dependent transcription of cell-cycle inhibitor target genes. See [[smad2-smad3]] for the molecular detail of pSMAD3 chromatin access and Notch antagonism.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes (muscle regenerative capacity declines with age in humans) |
| Replicated in humans? | in-progress — no direct pharmacological intervention trial yet in aged human muscle |

#gap/needs-human-replication — TGF-β receptor inhibition has not been tested for muscle regeneration in humans. #gap/needs-replication — The mechanistic sufficiency of pSMAD3 elevation (versus other elevated inhibitory signals in aged niches) is based on single-lab studies.

### TGF-β1 elevation in aged systemic milieu and neurogenesis

Yousef et al. (2015) demonstrated that systemic attenuation of TGF-β signaling using the small-molecule TβRI/II inhibitor SB505124 simultaneously rejuvenated hippocampal neurogenesis and muscle satellite cell function in aged mice, supporting the idea that elevated circulating TGF-β acts broadly across stem cell niches [^yousef2015].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial (neurogenesis declines with age in humans but the degree is debated) |
| Replicated in humans? | no |

#gap/needs-human-replication #gap/contradictory-evidence — The extent of adult hippocampal neurogenesis in humans is itself contested, complicating translation of this finding.

### SASP-TGF-β crosstalk and senescence propagation

Senescent cells (see [[cellular-senescence]] and [[sasp]]) secrete TGF-β1/2/3 as part of the SASP. This creates a paracrine mechanism by which senescent cells suppress the proliferation of neighboring stem and progenitor cells via SMAD2/3 activation, contributing to tissue-level regenerative failure. TGF-β-mediated bystander senescence — where SMAD2/3-activated cells upregulate p21 and arrest — may amplify senescent burden with age. #gap/no-mechanism — the relative contribution of autocrine vs. paracrine TGF-β loops in tissue aging has not been quantified in vivo.

### GDF family members in aging

Several TGF-β superfamily members beyond TGF-β1/2/3 are aging-relevant:

- **[[gdf11]]** (GDF11, BMP-11) — Controversial claim that declining GDF11 in aged blood contributes to aging phenotypes; independent labs have disputed the parabiosis interpretation. See [[gdf11]] for full evidence assessment.
- **Myostatin (GDF8)** — Anti-myogenic; limits skeletal muscle growth. Expression increases relative to muscle mass with aging; myostatin inhibition enhances muscle mass in aged mice. Closely tied to [[sarcopenia]]. #gap/needs-human-replication — myostatin inhibitor trials in aged humans have had mixed results.
- **[[gdf15]]** — Stress-responsive cytokine; elevated in aging and disease contexts; potential biomarker of mitochondrial stress. See [[gdf15]] page.

---

## TGF-β in cancer: dual-edge biology

TGF-β displays a well-characterized context-dependent switch from tumor-suppressive to tumor-promoting activity across cancer progression [^massague2008]:

### Early tumors: tumor suppression

- **Cell-cycle arrest.** SMAD3/4 transcriptional complexes induce *CDKN1A* (p21) and *CDKN2B* (p15^INK4B^), suppressing G1/S transition.
- **Apoptosis induction.** In epithelial cells, TGF-β can induce apoptosis via BIM upregulation and BCL-2 family modulation.
- **Loss of TGF-β responsiveness** is among the most common events in carcinogenesis — *SMAD4* homozygous deletion occurs in ~50% of pancreatic cancers; *TGFBR2* frameshift mutations occur in colorectal cancers with microsatellite instability.

### Late tumors: pro-metastatic

- **Epithelial-to-mesenchymal transition (EMT).** Non-canonical MAPK/Rho branches plus SNAIL/TWIST transcription factors dismantle epithelial junctions and drive invasiveness.
- **Immune evasion.** TGF-β suppresses NK cell cytotoxicity, inhibits CD8+ T cell activation, and promotes regulatory T cell differentiation — creating an immunosuppressive tumor microenvironment.
- **Bone metastasis.** TGF-β released from bone matrix during osteolysis stimulates cancer cell production of PTHrP, creating a "vicious cycle" of bone destruction and tumor growth [^massague2008].

#gap/no-mechanism — the molecular switch that converts TGF-β from tumor-suppressive to pro-metastatic in individual tumors is not fully understood; likely involves loss of SMAD4, upregulation of non-canonical branches, and microenvironment context.

---

## TGF-β in fibrosis

TGF-β1 is the master driver of pathological fibrosis across multiple organ systems:

- **IPF (Idiopathic Pulmonary Fibrosis):** TGF-β1 drives myofibroblast differentiation (via SMAD3/SMA upregulation) and ECM production. TGF-β is a validated central mediator; anti-fibrotic drugs nintedanib and pirfenidone act partly by modulating TGF-β signaling.
- **Renal fibrosis, liver fibrosis (cirrhosis), cardiac fibrosis:** Similar SMAD3-dependent ECM deposition mechanisms are operative.
- **Marfan syndrome:** Mutations in *FBN1* (fibrillin-1) dysregulate sequestration of latent TGF-β in the ECM, causing excess TGF-β activation — responsible for cardiovascular and skeletal manifestations. Losartan (angiotensin II blocker) reduces TGF-β signaling in Marfan mouse models.

The relationship between fibrosis, aging, and TGF-β is bidirectional: age-related increases in TGF-β promote tissue fibrosis, and fibrotic ECM remodeling further restricts stem cell niche function, amplifying [[stem-cell-exhaustion]]. #gap/unsourced — this bidirectional amplification loop has not been directly demonstrated in vivo; tag for follow-up.

---

## Therapeutic angles

### Small-molecule receptor inhibitors (ALK5/TβRI)

| Compound | Target | Stage | Notes |
|---|---|---|---|
| Galunisertib (LY2157299) | ALK5 (TβRI) | Phase 2 (oncology) | Hepatocellular carcinoma, glioblastoma; intermittent dosing schedule to limit cardiac toxicity |
| Vactosertib (TEW-7197, EW-7197) | ALK4/5 | Phase 1/2 (oncology) | Myelodysplastic syndrome, advanced solid tumors |
| SB505124 | ALK4/5/7 | Preclinical only | Research tool used in Yousef 2015 aging study |

### Anti-TGF-β antibodies and traps

| Compound | Mechanism | Stage | Notes |
|---|---|---|---|
| Fresolimumab (GC1008) | Pan-TGF-β neutralizing Ab | Phase 2 (fibrosis, oncology) | IPF trial; skin fibrosis; cancer |
| Bintrafusp alfa (M7824) | Anti-PD-L1 × TGF-β trap bifunctional | Phase 2/3 | Disappointing Phase 3 in NSCLC; PD-L1/TGF-β combination hypothesis not yet validated |

### Aging-focused therapeutic hypothesis

The demonstration that systemic TGF-β attenuation rejuvenates both muscle and neural stem cells in the same aged animal [^yousef2015] raises the possibility of TGF-β inhibition as a multi-tissue rejuvenation strategy. Current blockers available clinically are cancer-focused with cardiac toxicity at continuous doses; an intermittent or niche-targeted dosing strategy would be needed for safe aging application. Open Targets lists TGF-β pathway targets as druggability tier 1 for multiple aging-related diseases. #gap/dose-response-unclear #gap/long-term-unknown

---

## Cross-pathway connections

- **[[notch-pathway]]** — Notch signaling in satellite cells antagonizes TGF-β-mediated quiescence; the Notch/TGF-β balance governs satellite cell activation vs. quiescence. Heterochronic parabiosis restores Notch signaling in aged muscle.
- **[[wnt-beta-catenin]]** — Wnt and TGF-β signaling interact at the level of β-catenin (Wnt) and SMAD3 (TGF-β) co-occupying promoters of target genes; in satellite cells, Carlson and Conboy (2009) showed Wnt and TGF-β have distinct and overlapping roles in the systemic regulation of aged muscle [^carlson2009].
- **[[bmp-signaling]]** — BMP sub-family (SMAD1/5/8 downstream) opposes TGF-β/SMAD2/3 signaling in many contexts (e.g., bone formation); SMAD6 preferentially inhibits BMP signaling.
- **[[mtor]]** — PI3K/AKT/mTOR is a non-canonical downstream branch of TGF-β; TGF-β can activate mTORC1 in some contexts, while mTOR inhibition can dampen pro-fibrotic TGF-β responses.
- **[[pi3k-akt-pathway]]** — Direct non-canonical TGF-β effector; AKT activation downstream of TGF-β promotes cell survival and EMT.
- **[[nf-kb]]** — TGF-β and NF-κB signaling intersect in inflammatory and oncogenic contexts; SMAD7 can activate NF-κB.
- **[[p53-pathway]]** — p53 co-operates with SMAD2/3 to drive apoptosis in response to TGF-β; loss of p53 can shift TGF-β response toward pro-survival.

---

## Limitations and gaps

- **#gap/needs-human-replication** — Satellite cell and neurogenic rejuvenation by TGF-β inhibition shown only in mice. No human pharmacological intervention trial.
- **#gap/dose-response-unclear** — Safe and effective dose for aging applications unknown; existing inhibitors designed for oncology dosing.
- **#gap/long-term-unknown** — Chronic TGF-β inhibition carries fibrosis, auto-immune, and developmental risks; no long-term safety data in healthy aging context.
- **#gap/contradictory-evidence** — GDF11 biology (a TGF-β superfamily member) is contested; see [[gdf11]] for dispute details.
- **#gap/no-mechanism** — Precise molecular mechanism by which SMAD3 hyperactivation is maintained in aged satellite cell niches (vs. ligand-level vs. receptor-level vs. downstream changes) not fully resolved.
- **#gap/needs-replication** — The "dual rejuvenation" (muscle + brain) claim from a single pharmacological study [^yousef2015] requires independent replication.

---

## Footnotes

[^derynck2003]: doi:10.1038/nature02006 · Derynck R & Zhang YE · *Nature* 2003 · review · n=N/A · model: biochemical/structural synthesis of TGF-β SMAD-dependent and SMAD-independent branches · 5,275 citations; locally available

[^conboy2005]: doi:10.1038/nature03260 · Conboy IM, Conboy MJ, Wagers AJ, Girma ER, Weissman IL, Rando TA · *Nature* 2005 · in-vivo · n= ~20 parabiotic pairs (heterochronic and isochronic) · model: C57BL/6 mice; satellite cell activation, liver regeneration, Notch signaling · 2,197 citations; locally available

[^carlson2008]: doi:10.1038/nature07034 · Carlson ME, Hsu M, Conboy IM · *Nature* 2008 · in-vivo + in-vitro · model: aged C57BL/6 muscle satellite cells + human satellite cells · pSMAD3-Notch imbalance drives CDK inhibitor (p15/p16/p21/p27) induction in old satellite cells; ALK5 inhibitor rescues activation in vivo · NOTE: correct DOI is 10.1038/nature07034; the alternate 10.1038/nature06849 is an unrelated neuroscience paper. See also [[smad2-smad3]]

[^carlson2009]: doi:10.1111/j.1474-9726.2009.00517.x · Carlson ME, Conboy MJ, Hsu M, et al. · *Aging Cell* 2009 · in-vivo · model: aged mouse skeletal muscle; satellite cell activation assays; TGF-β/pSMAD3 quantification in aged vs young niches; pharmacological TβR inhibition restores satellite cell proliferation · 227 citations; archive: pending download

[^yousef2015]: doi:10.18632/oncotarget.3851 · Yousef H, Conboy MJ, Morgenthaler A, et al. · *Oncotarget* 2015 · in-vivo · model: aged C57BL/6 mice; SB505124 (ALK4/5/7 inhibitor) systemic treatment; primary endpoints: BrdU+ hippocampal neural precursor cells, satellite cell activation; simultaneous dual-tissue rejuvenation reported · 116 citations; archive: pending download

[^massague2008]: doi:10.1016/j.cell.2008.07.001 · Massagué J · *Cell* 2008 · review · model: synthesis of human cancer genetics and mouse models · dual tumor-suppressor/pro-metastatic biology; SMAD4 loss in pancreatic cancer; immune evasion mechanisms · 3,825 citations; archive: pending download
