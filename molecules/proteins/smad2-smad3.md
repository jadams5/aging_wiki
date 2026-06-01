---
type: protein
aliases: [SMAD2, SMAD3, MADH2, MADH3, MADR2, hSMAD2, hSMAD3, R-SMAD, receptor-regulated SMAD]
uniprot: Q15796
ncbi-gene: 4087
hgnc: HGNC:6768
ensembl: ENSG00000175387
complex-subunits: [Q15796, P84022]
mouse-ortholog: Smad2 / Smad3
genage-id: null
pathways: ["[[tgf-beta]]", "[[bmp-signaling]]"]
hallmarks: ["[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]"]
sens-categories: []
druggability-tier: null
caused-by: ["[[tgf-beta]]"]
causes: ["[[stem-cell-exhaustion]]", "[[cellular-senescence]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "R20 lightweight verifier sweep — all 5 cited DOIs cross-checked via DOI lookup. Carlson 2008 (10.1038/nature07034) confirmed as the correct DOI — title 'Imbalance between pSmad3 and Notch induces CDK inhibitors in old muscle stem cells'; the alternate 10.1038/nature06849 is a Desmurget neuroscience paper (already documented in body). Carlson 2008 PDF locally available. UniProt/NCBI/HGNC identity fields not re-checked against canonical databases — flagged in #gap/needs-canonical-id for SMAD3 IDs."
---

# SMAD2 / SMAD3 (paralog pair)

SMAD2 and SMAD3 are the two receptor-regulated SMADs (R-SMADs) activated downstream of [[tgf-beta|TGF-β]] and activin receptors. They are the primary cytoplasmic transducers of TGF-β superfamily signaling: phosphorylated at the C-terminal SXS motif by type I receptors (ALK4/5/7), they oligomerize with the common-mediator [[smad4]] and translocate to the nucleus as transcriptional regulators. In aging biology, elevated pSMAD3 in aged [[satellite-cells|muscle satellite cells]] suppresses their regenerative capacity and represents one of the best-characterized molecular mechanisms linking the aged systemic environment to impaired tissue repair [^carlson2008].

## Identity

| Field | SMAD2 | SMAD3 |
|---|---|---|
| UniProt | Q15796 | P84022 |
| Gene symbol | SMAD2 | SMAD3 |
| Gene synonyms | MADH2, MADR2 | MADH3 |
| HGNC | HGNC:6768 | HGNC:6769 |
| NCBI Gene | 4087 | 4088 |
| Ensembl | ENSG00000175387 | ENSG00000166949 |
| Length (canonical) | 467 aa | 425 aa |
| Mouse ortholog | Smad2 | Smad3 |
| Class | R-SMAD (TGF-β/activin branch) | R-SMAD (TGF-β/activin branch) |

Both are human paralogs with ~87% sequence identity in the MH2 domain. The key structural divergence is in the MH1 domain (see below).

## Domain architecture

Both proteins share the canonical two-domain SMAD architecture with a disordered linker region [^heldin1997]:

```
[MH1]---[linker]---[MH2]
```

### MH1 domain (N-terminal)

- **SMAD3** — directly binds the SMAD-binding element (SBE; consensus CAGAC) in gene promoters. Contains a conserved beta-hairpin DNA-contact loop.
- **SMAD2** — a unique exon 3 insertion of ~30 amino acids (encoded by exon 3) is inserted into the MH1 domain and blocks the beta-hairpin loop from contacting DNA directly. **SMAD2 therefore cannot bind SBE DNA independently; it requires partner transcription factors for promoter engagement** [^massague2000].
- Both MH1 domains mediate nuclear import and interaction with SARA (SMAD-anchor for receptor activation).

### Linker region

- Intrinsically disordered; contains a PY motif recognized by HECT E3 ubiquitin ligases (SMURF1/2 → targeted degradation).
- Contains CDK8/9 phosphorylation sites that modulate transcriptional activity and SMURF-mediated turnover in a context-dependent manner.

### MH2 domain (C-terminal)

- Mediates receptor interaction, homo/hetero-oligomerization with [[smad4]], and interaction with transcriptional co-activators / co-repressors.
- Contains the C-terminal SXS activation motif: **Ser-Met-Ser** (Ser-465/Ser-467 in SMAD2; Ser-423/Ser-425 in SMAD3). Phosphorylation at both serines is required for activation.
- ~87% identical between SMAD2 and SMAD3.

## Receptor activation and nuclear translocation

The canonical activation cycle [^massague2000] [^heldin1997]:

1. **Ligand binding** — TGF-β1/2/3 (or activins) bind the TGF-β receptor II (TGFBR2) ectodomain and recruit type I receptors (ALK4 for activin, ALK5 for TGF-β, ALK7 for nodal/GDF).
2. **GS domain phosphorylation** — TGFBR2 transphosphorylates ALK5 in its GS (glycine-serine-rich) domain, activating the ALK5 kinase.
3. **R-SMAD phosphorylation** — Active ALK5 directly phosphorylates the SXS motif at the R-SMAD C-terminus, releasing SMAD2/3 from the anchoring protein SARA.
4. **Heterotrimer assembly** — Phosphorylated SMAD2 or SMAD3 binds [[smad4]] (2:1 ratio, one SMAD4 per two R-SMADs). The active nuclear complex is a heterotrimer.
5. **Nuclear import** — The SMAD2/3–SMAD4 complex translocates to the nucleus, primarily via importin-β3 (IPO7 for SMAD2).
6. **Transcriptional regulation** — Nuclear SMAD3 directly contacts SBE sequences; SMAD2 requires partner TFs (FOXH1, FAST/FoxA, RUNX, AP-1 family) for gene-specific targeting. Target gene sets depend on cell type and co-factor availability.
7. **Nuclear export and reset** — Dephosphorylation of SXS by PPM1A (SMAD2) or RANBP3-facilitated nuclear export (SMAD3) recycles the complex to the cytoplasm.

### SMAD2 vs SMAD3: functional non-redundancy

Despite high sequence identity, the two paralogs are not functionally interchangeable in vivo [^massague2000]:

- **SMAD2** — principal mediator of embryonic patterning (mesoderm/endoderm induction, left-right axis). SMAD2-null mice die at gastrulation (E7.5–8.5). Primarily regulates the TGF-β transcriptional response in contexts requiring partner TF co-binding.
- **SMAD3** — more prominent role in postnatal wound healing, fibrosis, immune modulation, and the adult stem-cell niche. SMAD3-null mice are viable, fertile, and develop normally but show impaired TGF-β-mediated growth inhibition and altered immune responses.
- In aged satellite cells, **pSMAD3** (not pSMAD2) is the dominant elevated species, and SMAD3-specific CDK inhibitor targets (p15, p16, p21, p27) are the downstream effectors of the aging phenotype [^carlson2008].

## Aging biology

### Elevated pSMAD3 impairs aged satellite cell regeneration

The defining aging-biology finding for SMAD2/3 is Carlson et al. 2008 (Nature): aged skeletal muscle exhibits elevated TGF-β/pSMAD3 signaling in satellite cells, and this excess pSMAD3 drives upregulation of CDK inhibitors (p15, p16, p21, p27), locking satellite cells in a quiescence from which they fail to properly exit upon injury [^carlson2008].

Key mechanistic details:

- Notch signaling and pSMAD3 normally antagonize each other: active Notch signaling restricts pSMAD3 target-gene access to CDK inhibitor promoters. In aged muscle, reduced Notch activation allows pSMAD3 to unopposed bind these loci.
- ALK5 inhibitor treatment in aged injured muscle restored satellite cell activation and regenerative output in vivo in mice. #gap/needs-human-replication

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | TGF-β/SMAD3 pathway is conserved; human satellite cells express ALK5/SMAD3 |
| Phenotype conserved in humans? | partial | Carlson 2009 (EMBO Mol Med) showed elevated pSMAD3 in 70-year-old human satellite cells |
| Replicated in humans? | in-progress | Human satellite cell data exists [^carlson2009human]; pharmacological intervention not yet tested in humans |

### Elevated systemic TGF-β1 with age amplifies SMAD3 signaling

Serum TGF-β1 levels rise with age in mice, and this elevated systemic TGF-β contributes to pSMAD3 elevation in satellite cells beyond what local muscle TGF-β explains [^carlson2009aging]. Wnt signaling (another systemic age-increase factor) does not appear to contribute additively in this context. #gap/needs-replication — mechanistic framing based primarily on Carlson et al. experiments; independent confirmation needed.

### SMAD3 and satellite cell quiescence maintenance

Beyond the aging context, SMAD3 is required for maintaining satellite cell quiescence in young adult muscle [^massague2000]. #gap/unsourced — a dedicated primary citation for the quiescence-maintenance claim is needed beyond the general Massagué review; see `[[tgf-beta]]` for additional context.

### Paracrine pSMAD3 signaling and the aged niche

The aged systemic milieu (elevated circulating TGF-β1, GDF11 [contested — see `[[gdf11]]` #gap/contradictory-evidence), and possibly myostatin/GDF8 from senescent muscle fibers) constitutes a paracrine input that keeps satellite cells in a pSMAD3-high state. This is part of the broader [[altered-intercellular-communication]] hallmark and overlaps with the concept of "niche aging" driving [[stem-cell-exhaustion]].

## Disease associations

- **Loeys-Dietz syndrome 6 (LDS6)** — caused by heterozygous loss-of-function mutations in SMAD2 (pathogenic variants at UniProt Q15796). Phenotype includes aortic aneurysms/dissection, arterial tortuosity, craniofacial anomalies. Mechanistically: deficient TGF-β signaling in vascular smooth muscle.
- **Loeys-Dietz syndrome 3 (LDS3)** — caused by heterozygous SMAD3 mutations (P84022). Similar vascular phenotype; also associated with early-onset osteoarthritis.
- **Cancer** — In most epithelial tumors, TGF-β is tumor-suppressive early (cytostatic via SMAD3–p15 axis) but switches to tumor-promoting late (via SMAD-independent branches promoting invasion/metastasis). SMAD2/3 LoF mutations occur at low frequency in colorectal and pancreatic cancers; more commonly, the TGF-β pathway is disrupted via [[smad4]] LoF (which aborts all R-SMAD signaling). SMAD2/3 are therefore rarely the rate-limiting lost nodes in cancer.

## Pathway membership and cross-links

- **[[tgf-beta]]** — canonical upstream pathway; R20 Reactome entry R-HSA-170834.
- **[[bmp-signaling]]** — the BMP arm of the TGF-β superfamily uses SMAD1/5/8 (not SMAD2/3) as its R-SMADs, activated by ALK1/2/3/6. SMAD2/3 are not directly activated by BMP ligands. Cross-talk occurs via shared [[smad4]] and co-regulator competition.
- **[[satellite-cells]]** — primary cell type for aging-biology claims on this page.
- **[[smad4]]** — obligate heterotrimer partner; loss of SMAD4 abrogates all SMAD2/3 nuclear signaling.
- **[[sarcopenia]]** — likely downstream consequence of impaired satellite cell regeneration via pSMAD3 excess in aged muscle.

## Key interactors

- **ALK5 (TGFBR1)** — the kinase that directly phosphorylates the SXS motif; the upstream activator.
- **TGFBR2** — ligand-binding receptor that recruits and activates ALK5.
- **[[smad4]]** — obligate nuclear co-factor; forms 2:1 R-SMAD:SMAD4 heterotrimer.
- **SARA (SMAD-anchor for receptor activation; ZFYVE9)** — tethers inactive SMAD2/3 near the receptor at the membrane.
- **SMURF1/SMURF2** — HECT E3 ligases that ubiquitinate the PY motif in the linker → proteasomal degradation (negative feedback).
- **PPM1A** — C-terminal phosphatase that dephosphorylates the SXS motif, resetting the signaling cycle.
- **NOTCH pathway** (via NICD) — antagonizes pSMAD3 chromatin access at CDK inhibitor loci; critically important in the aged satellite cell context [^carlson2008].
- **FOXH1, RUNX2/3, AP-1** — partner TFs that enable SMAD2 (DNA-binding-deficient) to reach specific promoters.

## Limitations and gaps

- #gap/needs-canonical-id — SMAD3 NCBI Gene ID (4088) confirmed from HGNC cross-reference; the brief listed ncbi-gene as 4087 for the pair (SMAD2 only). SMAD3 Ensembl ID (ENSG00000166949) was not independently confirmed via the UniProt API in this session — verify on next pass.
- #gap/needs-human-replication — ALK5 inhibitor rescue of satellite cells demonstrated in aged mice only; no human pharmacological trial data available as of 2026-05-05.
- #gap/needs-replication — The "Notch antagonizes pSMAD3 chromatin access" mechanism (Carlson 2008) is from a single Nature study; independent mechanistic confirmation is limited.
- #gap/unsourced — SMAD3 quiescence-maintenance role in young satellite cells needs a dedicated primary citation (beyond the Massagué 2000 general review).
- #gap/no-mechanism — The switch from SMAD2-dominance in embryogenesis to SMAD3-dominance in adult tissue homeostasis and aging is not mechanistically understood at the chromatin level.
- #gap/contradictory-evidence — GDF11 (a related TGF-β superfamily ligand) was reported to be elevated with age and rejuvenate aged satellite cells; this has been extensively contested. See `[[gdf11]]`.
- **genage-id: null** — Neither SMAD2 nor SMAD3 appears in GenAge-human as of 2026-05-05; relevant models-organism lifespan data not found. Tag if a GenAge entry is later identified.
- **druggability-tier: null** — No Open Targets Platform entry checked; ALK5 (TGFBR1) is the more-druggable upstream node. Set #gap/no-opentargets-entry until checked.

## Footnotes

[^carlson2008]: [[studies/carlson-2008-psmad3-notch-satellite-cells]] · n=not specified (multiple cohorts, young vs aged mice) · in-vivo + in-vitro · model: aged C57BL/6 mice + human satellite cells · doi:10.1038/nature07034 · locally available

[^massague2000]: [[studies/massague-2000-tgfbeta-cells-read-signals]] · review · Nat Rev Mol Cell Biol · doi:10.1038/35043051 · locally available

[^heldin1997]: [[studies/heldin-1997-tgfbeta-smad-signalling]] · review · Nature · doi:10.1038/37284 · 3677 citations; PDF not locally available (closed access)

[^carlson2009human]: [[studies/carlson-2009-human-muscle-stem-cell-aging]] · in-vitro + ex-vivo · model: human satellite cells (20-year-old vs 70-year-old donors) · doi:10.1002/emmm.200900045 · download pending

[^carlson2009aging]: [[studies/carlson-2009-tgfbeta-wnt-satellite-cell-aging]] · in-vivo · model: aged C57BL/6 mice · doi:10.1111/j.1474-9726.2009.00517.x · download pending
