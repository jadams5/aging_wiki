---
type: protein
aliases: [TNF receptor-associated factor 6, RING finger protein 85, RNF85, interleukin-1 signal transducer]
uniprot: Q9Y4K3
ncbi-gene: 7189
hgnc: 12036
ensembl: ENSG00000175104
genage-id: null
pathways: ["[[il-1-signaling]]", "[[nf-kb]]", "[[ubiquitin-proteasome-system]]"]
hallmarks: ["[[chronic-inflammation]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: ["[[irak4]]", "[[il-1-signaling]]"]
causes: ["[[tak1]]", "[[nf-kb]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "UniProt Q9Y4K3 domain positions and PTMs verified via REST API; NCBI Gene 7189, HGNC 12036, Ensembl ENSG00000175104 verified via APIs; Open Targets tractability verified (API retry successful, tier 3 confirmed); Lomaga 1999 (PMC316636 + local PDF) verified — osteoclast phenotype, signaling defects, survival data; Deng 2000 (local PDF) verified — K63 chain mechanism, Ubc13/Uev1A requirement; Brenke 2018 (PMC6109917 + local PDF) verified — C25-140 mechanism, selectivity, in vivo models; Hinojosa 2014 verified via PMC3989429 — A20 elevation in aged macrophages confirmed. Naito 1999 and FEBS Lett 2004 not accessible (not in PMC; closed access). Das 2021 not downloaded."
---

# TRAF6

**TRAF6** (TNF receptor-associated factor 6; UniProt Q9Y4K3; gene *TRAF6*) is an E3 ubiquitin ligase and adaptor protein that serves as the **convergence hub** for IL-1R/TLR, RANK, CD40, and NGF receptor signaling. Its defining biochemical function — assembly of K63-linked polyubiquitin chains on IRAK1 and itself — converts receptor-proximal phosphorylation events into a non-degradative ubiquitin scaffold that recruits and activates the [[tak1|TAK1]] kinase complex, triggering [[nf-kb|NF-κB]] and MAPK cascades. In the aging context, TRAF6 is the key enzymatic node through which chronic low-grade IL-1 signaling in aged tissue amplifies [[chronic-inflammation|inflammaging]], and through which RANKL-driven TRAF6 activity mediates age-related bone resorption.

TRAF6 is the canonical example of a non-kinase adaptor in the IL-1/TLR cascade and the prototypical RING-type E3 ligase for K63-linked chain synthesis. See [[il-1-signaling]] for the full pathway context (R27, verified).

---

## Identity

- **UniProt:** Q9Y4K3 (TRAF6_HUMAN)
- **NCBI Gene:** 7189
- **HGNC:** 12036 (symbol: *TRAF6*)
- **Ensembl:** ENSG00000175104
- **Length:** 522 amino acids (canonical isoform)
- **Gene synonym:** *RNF85* (RING finger protein 85) — reflects the E3 ligase annotation
- **Mouse ortholog:** *Traf6* (well-conserved; Traf6-/- mouse phenotype is a primary evidence source)

---

## Domain architecture

TRAF6 has a modular architecture organized from N- to C-terminus into four functional units [^uniprot-q9y4k3]:

| Region | Positions (aa) | Function |
|---|---|---|
| RING-type zinc finger | 70–109 | E3 catalytic domain; recruits UBC13 (UBE2N); required for K63-chain assembly |
| TRAF-type zinc finger 1 | 150–202 | Structural; contributes to oligomerization scaffold |
| TRAF-type zinc finger 2 | 203–259 | Structural; zinc-coordinating |
| Coiled-coil | 288–348 | Self-association; TRAF6 trimerization; receptor-complex nucleation |
| MATH domain (TRAF-C) | 350–499 | Receptor recognition; binds PxExxAr/Ac motifs on IRAK1, IRAK2, RANK cytoplasmic tail, CD40, EDAR |

The **RING domain** (aa 70–109) is the catalytic core. It physically contacts the E2-conjugating enzyme UBC13 (UBE2N) via a conserved surface; this interaction is required for K63-linked chain elongation [^febs2004]. TRAF6 can form RING homodimers and heterodimers with TRAF2/TRAF3/TRAF5, potentially broadening its E2 engagement repertoire [^das2021].

The **MATH domain** is the receptor-binding interface. It recognizes a degenerate peptide motif (PxExxAr/Ac) present in cytoplasmic tails of RANK, CD40, and EDAR, as well as in the phosphorylated C-terminal region of IRAK1 following IRAK4-mediated phosphorylation.

**Post-translational modifications:** Auto-ubiquitination at Lys-124 and Lys-319 (K63-linked, auto-catalytic, activated by receptor engagement); sumoylation at Lys-124, Lys-142, Lys-453 (SUMO1; modulates nuclear function) [^uniprot-q9y4k3].

---

## Mechanism: K63-linked ubiquitin chain assembly

TRAF6's central enzymatic function — confirmed by the landmark Deng et al. 2000 Cell study — is the synthesis of **K63-linked polyubiquitin chains** via a heterodimeric E2 complex [^deng2000]:

```
IRAK4 activation → IRAK1/IRAK2 phosphorylation
  → phospho-IRAK1 dissociates from receptor complex
  → IRAK1 PxExxAr motif recruits TRAF6 MATH domain
  → TRAF6 oligomerizes (trimer of dimers) around the IRAK1·receptor scaffold
  → TRAF6 RING domain engages UBC13/UEV1A (UBE2N/UBE2V1) E2 heterodimer
  → K63-linked polyubiquitin chains assembled on TRAF6 (auto) and IRAK1 (trans)
  → unanchored and substrate-anchored K63-chains recruit TAB2/TAB3
      (TAK1-associated proteins with NZF ubiquitin-binding domains)
  → TAB2/TAB3 → TAK1 (MAP3K7) activation
      ├─ IKK arm: TAK1 → IKKβ → IκBα phosphorylation (Ser32/Ser36)
      │             → IκBα proteasomal degradation → NF-κB nuclear translocation
      └─ MAPK arm: TAK1 → MKK3/6 → p38; MKK4/7 → JNK → AP-1
```

**Critical mechanistic distinction:** K63-linked chains are **non-degradative** — they function as protein-scaffolding signals rather than proteasome-targeting signals (which require K48-linked chains). This allows TRAF6 to activate kinase cascades without destroying its substrate. The E2 partner determines chain linkage specificity: UBC13/UEV1A is the K63-specific E2; without this partner, TRAF6 cannot assemble K63 chains and IL-1 NF-κB activation is abolished [^deng2000].

**Negative regulation:** A20 (TNFAIP3) removes K63-ubiquitin chains from TRAF6, acting as the primary ubiquitin-editing brake on this axis (see [[il-1-signaling]] § Negative regulation). A20 expression is itself NF-κB-induced, forming a negative feedback loop. #gap/needs-replication — age-associated decline in A20 expression efficiency in macrophages has been proposed as a mechanism for exaggerated TRAF6 signaling in aged tissue, but direct quantitative data are limited [^hinojosa2014].

---

## Pathway membership and receptor contexts

TRAF6 operates in at least four distinct receptor systems, giving it an unusually broad functional scope:

| Receptor/pathway | Ligand/signal | Downstream output | Aging relevance |
|---|---|---|---|
| **IL-1R1 / TLR** | IL-1α, IL-1β / PAMPs, DAMPs | NF-κB, JNK, p38 | SASP amplification; inflammaging signal relay |
| **RANK** | RANKL (TNFSF11) | NF-κB, JNK, MAPK → NFATc1 | Osteoclast differentiation; age-related bone resorption |
| **CD40** | CD40L (TNFSF5) | NF-κB → B-cell activation, immunoglobulin switching | Immune aging; germinal center dysfunction |
| **EDAR** | EDA-A1 | NF-κB → ectodermal organ development | Developmental; aging relevance minimal |
| **NGF receptor (p75NTR)** | NGF | NF-κB, apoptosis | Neural survival; aging relevance under investigation |

For IL-1/TLR signaling, see [[il-1-signaling]] (verified, R27) for the full cascade diagram. For RANK and osteoclast signaling, the TRAF6 link is described below.

---

## RANK pathway and bone aging

In the RANK → NF-κB axis, TRAF6 plays the identical E3 ligase role it plays downstream of IL-1R: it is recruited to the phosphorylated cytoplasmic tail of RANK via the MATH domain (RANK contains a PxExxAr motif) and assembles K63-linked chains that activate TAK1 → NF-κB → NFATc1 transcription, driving osteoclast differentiation and activation.

**Genetic validation (mouse):** Two independent *Traf6*-/- mouse studies established the bone phenotype:

- **Lomaga et al. 1999** (*Genes & Development*, doi:10.1101/gad.13.8.1015): *Traf6*-/- mice developed **severe osteopetrosis** with radio-opaque long bones, absent tooth eruption, and 20–30% deficits in body mass and length. Crucially, osteoclast numbers (TRAP+ cells/mm²) were **comparable to wild-type** — the osteoclasts were present but non-functional, lacking ruffled borders and attachment zones and withdrawn from the bone surface. Perinatal survival was reduced (only 11% of pups at 2 weeks were homozygous knockouts vs. expected Mendelian 25%); surviving mice died prematurely within weeks. IL-1-induced NF-κB activation was **impaired** and JNK/SAPK activation was **absent** in TRAF6-/- cells; CD40-stimulated B-cell proliferation failed; LPS-stimulated B-cell proliferation was dramatically inhibited and macrophage iNOS induction was impaired. T-cell proliferative responses to anti-CD3ε and concanavalin A were **not significantly different** from wild type [^lomaga1999].
- **Naito et al. 1999** (*Genes to Cells*, doi:10.1046/j.1365-2443.1999.00265.x): Independent Traf6-/- line confirmed osteopetrosis; showed osteoclast precursors cannot differentiate to functional osteoclasts in response to ODF (later identified as RANKL) [^naito1999].

**Aging bone connection:** In aged humans, RANKL:OPG ratio increases in bone marrow, driving excess osteoclast activity → net bone resorption → osteoporosis. TRAF6 is the intracellular mediator of this RANK-to-NF-κB signal. The approved anti-RANKL antibody **denosumab** interrupts this axis upstream of TRAF6 (at the RANKL → RANK receptor level) and is a first-line treatment for postmenopausal osteoporosis. No TRAF6-directed drug has reached clinical development for osteoporosis.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — RANK/TRAF6/NF-κB axis is conserved; human loss-of-function TRAF6 mutations cause ectodermal dysplasia |
| Phenotype (bone resorption) conserved in humans? | yes — RANKL blockade (denosumab) reduces fracture risk in RCTs (postmenopausal women, n>7000) |
| Replicated in humans? | partial — TRAF6 specifically not targeted; RANK/RANKL denosumab data validate the upstream axis |

#gap/needs-human-replication — no clinical trial has directly targeted TRAF6 in the bone-aging context.

---

## Aging connection

### TRAF6 in inflammaging

In aged tissue, constitutively elevated DAMPs (mtDNA, oxidized lipids, AGEs) and SASP-derived IL-1α/IL-1β provide chronic low-grade ligand input to IL-1R1 and TLRs. TRAF6 is the convergence point at which these receptor signals are amplified into NF-κB-driven transcription of pro-inflammatory cytokines (IL-6, IL-8, TNF-α, further IL-1β) [^il1signaling-wiki]. This creates a self-sustaining loop: SASP cytokines → IL-1R1 → TRAF6 → NF-κB → more SASP cytokines.

The TRAF6-ubiquitin axis also integrates with the [[mtor|mTOR]] pathway: TRAF6-mediated K63 ubiquitination of AKT has been reported to regulate AKT membrane recruitment and activation (UniProt Q9Y4K3; interactors include AKT1/2/3) [^uniprot-q9y4k3], creating a crosstalk between the inflammatory and nutrient-sensing axes in aged tissue. #gap/needs-replication — the functional significance of TRAF6–AKT ubiquitination in the aging context has not been directly tested.

### A20 and age-related macrophage dysfunction

A20 (TNFAIP3), the principal deubiquitinase that removes K63-chains from TRAF6, accumulates excessively in aged mouse lung macrophages and impairs NFκB and MAPK activation in response to bacterial challenge [^hinojosa2014]. This is somewhat paradoxical: excess A20 activity blunts pathogen-induced TRAF6 signaling, while insufficient A20 would enhance inflammaging TRAF6 signaling. The net outcome depends on the stimulus context (pathogen vs. sterile DAMP). This context-dependence is an unresolved question in aging immunology. #gap/contradictory-evidence

---

## Pharmacology

No FDA-approved drug directly targets TRAF6. The druggability tier is **3** (aging context: high-quality research probes exist; no clinical-stage drug; upstream or downstream targets are clinically addressed by approved agents).

| Agent | Target | Stage | Notes |
|---|---|---|---|
| **Denosumab** | RANKL (upstream of TRAF6) | FDA-approved | Osteoporosis, bone metastases; validates the RANK→TRAF6 axis in humans but does not inhibit TRAF6 itself |
| **C25-140** | TRAF6–UBC13 protein interaction | Preclinical | First-in-class small-molecule disruptor of TRAF6–Ubc13 (UBE2N) interaction; reduced NF-κB activation and ameliorated psoriasis (IMQ model, ~1.5 mg/kg topical, n=8/group) and RA (CIA model, 6/10/14 mg/kg IP × 14 days) in mouse models [^brenke2018]; not in human trials |
| Peptidomimetic inhibitors | TRAF6 MATH domain (receptor-binding surface) | Research only | Block TRAF6–RANK and TRAF6–CD40 interactions; no published in vivo aging data |

**C25-140 mechanism:** Binds directly to TRAF6 (confirmed by NMR) and disrupts the physical protein–protein contact between the TRAF6 RING domain and the UBC13 (UBE2N) E2-conjugating enzyme, preventing K63-chain assembly without directly blocking TRAF6 adaptor function. C25-140 does not inhibit the Ubc13–Uev1a interaction itself. **Selectivity note:** C25-140 also inhibits cIAP1, another RING-type E3 ligase that generates K63-linked chains; it does not inhibit K48-chain E3 ligases (MDM2, TRIM63, MURF), SUMO ligase RNF4, or HECT E3 ligases (ITCH, E6AP), and does not inhibit E1–E2 reactions for any of 9 tested E2 enzymes. The compound is therefore selective for K63-chain-generating RING E3s rather than being pan-TRAF6-specific. Whether this selectivity profile reduces inflammaging in vivo — and whether it translates to humans — is untested [^brenke2018]. #gap/needs-human-replication

**Druggability-tier rationale (tier 3):** TRAF6 has no approved aging-relevant drug and no active clinical trials for an aging indication. However, the TRAF6–UBC13 interface has been validated as a high-quality preclinical target with C25-140 (JBC 2018, PubMed 29950522, 73 citations), meeting the Open Targets criterion for "high-quality preclinical probe." Upstream agents (denosumab for RANK) and downstream agents (NF-κB pathway) have clinical validation. A TRAF6-specific aging-context drug remains a near-future target, not a current clinical asset.

---

## Key interactors

Per UniProt Q9Y4K3 (experimental evidence channel):

- **UBE2N / UBC13** — E2 K63-specific; required for K63-chain assembly (RING–E2 interface)
- **UBE2V1 / UEV1A** — UBC13 co-factor; non-catalytic; required for K63-chain specificity
- **IRAK1** — substrate; K63-ubiquitinated by TRAF6 after phospho-activation by IRAK4
- **IRAK4** — upstream kinase that phosphorylates IRAK1 → TRAF6 recruitment (see [[irak4]])
- **MAP3K7 / TAK1** — downstream effector kinase; recruited via TAB2/TAB3 K63-ubiquitin recognition (see [[tak1]])
- **IKBKG / NEMO** — IKK complex scaffolding subunit; K63-ubiquitin also recruits NEMO
- **SQSTM1 / p62** — ubiquitin-binding adaptor; links TRAF6-generated K63 chains to autophagy cargo recognition (see [[p62]])
- **MAVS** — mitochondrial antiviral signaling protein; TRAF6 also mediates MAVS-induced NF-κB (antiviral RIG-I/MDA5 pathway)

---

## Open questions and gaps

- **Selectivity of TRAF6 inhibition in aging vs. immunosuppression:** TRAF6 is required for normal IL-1, TLR, CD40, and RANK signaling. A global TRAF6 inhibitor would suppress all these — raising the same infection-risk concern seen with canakinumab in CANTOS (fatal infection rate ~1.7× placebo). Whether a partial or context-specific TRAF6 inhibitor strategy is viable remains unresolved. #gap/no-mechanism
- **TRAF6 redundancy:** TRAF2, TRAF3, and TRAF5 share MATH-domain receptor-binding surfaces and can form heterodimers with TRAF6 [^das2021]. The degree to which these family members compensate for TRAF6 loss in specific aging tissues is not well characterized. #gap/needs-replication
- **K63-ubiquitin chain reading mechanisms in aged cells:** Whether the efficiency of TAB2/TAB3 (K63-chain readers) or K63-chain removal (A20) changes with cell aging is incompletely characterized. #gap/needs-replication
- **Direct TRAF6 inhibition vs. upstream/downstream targeting:** Given that denosumab (upstream) and NF-κB inhibitors (downstream) both have clinical precedent, the therapeutic niche for TRAF6-specific inhibition in aging is not defined. #gap/no-mechanism
- **GTEx-aging correlation:** TRAF6 mRNA expression correlation with chronological age across GTEx tissues has not been queried. Field populated as null. #gap/needs-canonical-id
- **Mendelian randomization:** No published MR study using TRAF6 genetic instruments for aging outcomes identified. Filed as not-tested.

---

## Cross-references

- [[il-1-signaling]] — verified pathway page (R27); TRAF6 is described at position 4 in the adaptor chain
- [[irak4]] — immediate upstream activator (R28 sibling, being seeded in parallel)
- [[myd88]] — upstream adaptor (R28 sibling)
- [[tak1]] — immediate downstream effector recruited by K63-ubiquitin scaffold (R28 sibling)
- [[nf-kb]] — primary downstream transcription factor
- [[chronic-inflammation]] — hallmark MOC; TRAF6 is a core enzymatic driver
- [[p62]] — ubiquitin-binding adaptor that reads TRAF6-generated K63-chains in autophagy context
- [[cellular-senescence]] — SASP amplification via TRAF6/NF-κB loop
- [[sasp]] — TRAF6-mediated NF-κB drives SASP gene transcription
- [[ubiquitin-proteasome-system]] — pathway stub; TRAF6 belongs to the K63-ubiquitin axis (non-degradative branch)
- [[rank-signaling]] — bone-resorption pathway; TRAF6 is the canonical RANK effector (implicit stub)

**Implicit stubs created by this page:**
- [[ubiquitin-proteasome-system]] — not yet confirmed as a seeded pathway page (not found in pathways/ directory during seeding)
- [[rank-signaling]] — RANK → NF-κB bone-resorption pathway; no atomic page yet
- [[myd88]], [[irak4]], [[tak1]] — R28 sibling pages being seeded in parallel

---

## Limitations and gaps

- **Open Targets druggability-tier:** Verified 2026-05-07 via GraphQL API (ENSG00000175104). No approved SM/AB/PR drug, no clinical-stage compound, no high-quality SM pocket registered. PROTAC signals present (UniProt ubiquitination = true; Database ubiquitination = true; half-life data = true). Tier 3 confirmed: C25-140 (Brenke 2018) is a published research probe meeting the tier-3 criterion, though not yet catalogued by Open Targets as a high-quality ligand.
- **GenAge ID:** Not found during seeding; TRAF6 may not have a GenAge entry. #gap/needs-canonical-id
- **GTEx aging correlation:** Not queried; null in frontmatter. Populate per `sops/finding-tissue-expression.md`. #gap/needs-canonical-id
- **Ubiquitin-proteasome-system pathway page:** Listed as "verified, exists" in task brief but not found in pathways/ directory. Wikilink preserved as implicit stub; verify on next lint pass.

---

## Footnotes

[^deng2000]: doi:10.1016/s0092-8674(00)00126-4 · Deng L et al. · Cell 2000 · in-vitro (biochemistry, cell-free IKK activation assay, co-immunoprecipitation, MALDI-TOF peptide fingerprinting) · foundational study establishing that TRAF6 requires a dimeric E2 complex (Ubc13/Uev1A = TRIKA1) to assemble K63-linked polyubiquitin chains for IKK complex activation; Ubc13 Cys-87 active site mutation abolishes IKK activation; Uev1A depletion abolishes TRAF6-mediated IKK activation; K63-chain assembly confirmed by Ub-mutant rescue experiments; 1855 citations; local PDF verified 2026-05-07

[^lomaga1999]: doi:10.1101/gad.13.8.1015 · Lomaga MA et al. · Genes & Development 1999 · in-vivo (mouse, Traf6-/- germline KO; 129J ES cells → C57BL/6 blastocysts) · severe osteopetrosis with radio-opaque long bones and absent tooth eruption; osteoclasts present in normal numbers (TRAP+ cells/mm² comparable to WT) but non-functional (lack ruffled borders, withdrawn from bone surface); 11% pup survival at 2 wk (vs. expected 25% Mendelian); IL-1-induced NF-κB impaired, JNK/SAPK absent; CD40-stimulated B-cell proliferation absent; LPS B-cell proliferation inhibited; macrophage iNOS impaired; T-cell proliferative responses not significantly different from WT; 1266 citations; OA (diamond); PMC316636; local PDF verified 2026-05-07

[^naito1999]: doi:10.1046/j.1365-2443.1999.00265.x · Naito A et al. · Genes to Cells 1999 · in-vivo (mouse, independent Traf6-/- line) · confirms osteopetrosis; osteoclast precursors cannot differentiate to functional osteoclasts in response to RANKL (ODF); B-cell and lymph node organogenesis defects; 634 citations; archive: pending download

[^brenke2018]: doi:10.1074/jbc.RA118.002649 · Brenke JK et al. · J Biol Chem 2018 · in-vitro + in-vivo (mouse IMQ-psoriasis n=8/group; CIA-RA model 6/10/14 mg/kg IP ×14 days) · C25-140 binds TRAF6 directly (NMR confirmed) and disrupts TRAF6–Ubc13 PPI, reducing TRAF6-mediated K63-chain assembly; also inhibits cIAP1 (another K63 RING E3) but not K48-chain E3s, HECT E3s, or E1–E2 reactions; reduced NF-κB activation in MEF, Jurkat, and primary human PBMCs; ameliorated IMQ-psoriasis and CIA-RA in mouse models; 73 citations; PMC6109917; local PDF verified 2026-05-07

[^das2021]: doi:10.1016/j.jmb.2021.166844 · Das A et al. · J Mol Biol 2021 · in-vitro (structural, cryo-EM/X-ray) · structure of TRAF5-TRAF6 RING heterodimer; shows TRAF6 heterodimerizes with TRAF2/TRAF3/TRAF5; coiled-coil linker cooperates with TRAF6 to promote chain assembly; PMID 33539883; archive: not checked

[^febs2004]: doi:10.1016/s0014-5793(04)00505-8 · FEBS Lett 2004 · in-vitro · TRAF6 RING finger domain mediates physical interaction with Ubc13; 3 direct citations; archive: not yet locally available (closed access)

[^uniprot-q9y4k3]: UniProt Q9Y4K3 (TRAF6_HUMAN), accessed 2026-05-07 · manually curated Swiss-Prot entry; domain positions (RING 70-109, MATH 350-499), PTMs (K124/K319 auto-ubiquitination; K124/K142/K453 sumoylation), interactors (UBE2N, UBE2V1, IRAK1, IRAK4, MAP3K7, SQSTM1) from experimental evidence channel

[^hinojosa2014]: doi:10.1016/j.exger.2014.01.007 · Hinojosa CA et al. · Exp Gerontol 2014 · in-vivo (C57BL/6 mice; young 4 mo, mature 12 mo, aged 21 mo; alveolar macrophage) · A20 (TNFAIP3) protein significantly elevated in lungs and alveolar macrophages of aged vs. young mice (P<0.05); elevated A20 blunts NF-κB/MAPK response to S. pneumoniae serotype 4 TIGR4 challenge; dietary fish oil (4%, 2 months) reduced lung A20 and produced ~100-fold reduction in bacterial lung burden at 24 h post-challenge; PMC3989429; local download failed (green OA); verified via PMC full text 2026-05-07 · #gap/needs-human-replication

[^il1signaling-wiki]: Cross-reference to [[il-1-signaling]] (verified 2026-05-07); TRAF6 signal transduction arrows confirmed against Wesche 1997 (doi:10.1016/s1074-7613(00)80402-1) and Dinarello 2011 (doi:10.1182/blood-2010-07-273417) as cited there
