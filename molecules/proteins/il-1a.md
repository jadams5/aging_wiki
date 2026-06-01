---
type: protein
aliases: [IL1A, IL-1 alpha, hematopoietin-1, IL-1F1, "interleukin-1 alpha"]
uniprot: P01583
ncbi-gene: 3552
hgnc: 5991
ensembl: ENSG00000115008
mouse-ortholog: Il1a
genage-id: null   # GenAge search for IL1A returned no entry; #gap/needs-canonical-id (GenAge)
key-domains: [IL-1-family-beta-trefoil, NLS-Lys82-86, propeptide-1-112, mature-chain-113-271]
key-ptms: [Lys82-acetylation, Lys82-myristoylation, Ser87-phosphorylation, CAPN1-cleavage-Asp112]
pathways: ["[[il-1-signaling]]", "[[nf-kb]]", "[[sasp]]"]
hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]"]
sens-categories: []
known-interactors: ["[[il-1r1]]", "[[il-1r2]]", "[[il-1ra]]", "[[s100a13]]", "[[tmed10]]"]
druggability-tier: 1   # bermekimab (anti-IL-1α mAb, XBiotech/Janssen) in clinical development; anakinra (IL-1Ra) blocks IL-1R1 broadly; rilonacept traps both IL-1α + IL-1β
gtex-aging-correlation: null   # not yet populated; #gap/needs-gtex-data
mr-causal-evidence: not-tested
caused-by: ["[[cellular-senescence]]", "[[nlrp3-inflammasome]]", "[[dna-damage-response]]"]
causes: ["[[sasp]]", "[[nf-kb]]", "[[chronic-inflammation]]", "[[il-1-signaling]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Orjalo 2009, Werman 2004, Buryskova 2004, Horai 1998 verified against primary-source PDFs. Rider 2011 (10.4049/jimmunol.1102048) and Dinarello 2017 (10.1111/imr.12621) unverifiable — archive status failed; tagged #gap/no-fulltext-access. March 1985 unverifiable — closed access. Canonical identity fields (UniProt P01583, NCBI Gene 3552, HGNC 5991, Ensembl ENSG00000115008, NLS 82-86, propeptide 1-112, mature chain 113-271) confirmed against UniProt REST. Druggability-tier:1 confirmed via Open Targets (AB Advanced Clinical = True for bermekimab)."
---

# IL-1α (IL1A)

The alarmin-cytokine duality of [[chronic-inflammation|inflammaging]]. IL-1α is the constitutively expressed, dual-compartment member of the IL-1 family: its precursor form is biologically active as a nuclear chromatin-binding transcription regulator, and its released form signals through [[il-1r1|IL-1R1]] identically to [[il-1b|IL-1β]]. Critically for aging, senescent cells maintain surface-bound and secreted IL-1α as the **upstream master regulator** of the full [[sasp|SASP]] cytokine network — IL-1α blockade abrogates downstream IL-6 and IL-8 induction. This places IL-1α at the apex of senescent-cell paracrine signalling, distinct from and parallel to the NLRP3-driven IL-1β axis.

## Identity

- **UniProt:** P01583 (IL1A_HUMAN) — Swiss-Prot (manually curated)
- **NCBI Gene:** 3552 (symbol: IL1A; synonym IL1F1)
- **HGNC:** 5991
- **Ensembl:** ENSG00000115008
- **Mouse ortholog:** Il1a (one-to-one)
- **Gene locus:** 2q14.1 (co-localised with IL1B on chromosome 2)
- **Precursor length:** 271 amino acids (pro-IL-1α; ~31 kDa)
- **Mature form:** residues 113–271, cleaved by calpain-1 (CAPN1) at Asp112; ~18 kDa

### Naming note

File `il-1a.md` is canonical for the cytokine. No `pathways/il-1a.md` exists; the relevant pathway page is [[il-1-signaling]]. Aliases cover common spellings found across inbound links; [[il-1b]] is the sibling page for IL-1β. Note: `il-1a` here is the protein; no naming conflict with a pathway page exists because the pathway is titled `[[il-1-signaling]]` per the IL-1 receptor pathway convention.

## Processing, structure, and the dual-activity model

### Structural class

IL-1α adopts the **beta-trefoil fold** common to the IL-1 family — twelve beta-strands arranged in a trefoil pattern — enabling IL-1R1 binding with affinity similar to IL-1β [^dinarello2017]. Unlike IL-1β, **both the precursor form (pro-IL-1α, 31 kDa) and the mature form (~18 kDa) are biologically active** — no caspase-1-dependent cleavage step is required for receptor signalling.

### Nuclear compartment — intracrine activity

Pro-IL-1α contains a **nuclear localisation signal (NLS) at residues 82–86** (UniProt P01583; the KVLKKRR motif in the N-terminal propiece) that directs the uncleaved precursor to the nucleus upon inflammatory stimuli (LPS, IL-1, TNF) [^werman2004]. Once nuclear:

- Pro-IL-1α activates transcription in an IL-1R-independent (intracrine) manner, driving NF-κB- and AP-1-regulated genes; in a GAL4-reporter system the pIL-1α chimera activated transcription 90-fold, while the mature form (mIL-1α) was without activity [^werman2004].
- The nuclear precursor physically interacts with histone acetyltransferase complexes — specifically p300, PCAF, Gcn5, and the adaptor Ada3 (components of the SAGA/PCAF transcriptional activation complex) — integrating non-destructively into the p300-PCAF complex to enhance transcriptional output [^buryskova2004]. The paper does not demonstrate direct chromatin remodelling at specific inflammatory-gene loci; the evidence is for functional cooperation with the p300-PCAF complex via reporter and co-IP assays.
- Post-translational modifications regulate nuclear residency: Lys82 acetylation and myristoylation modulate NLS function, while Ser87 phosphorylation is linked to nuclear retention (UniProt P01583, accessed 2026-05-06).

This intracrine activity means cells constitutively expressing pro-IL-1α have an autonomous pro-inflammatory transcriptional state that does **not** require paracrine cytokine secretion — a key mechanistic difference from IL-1β.

### Cytoplasmic and membrane compartments — alarmin activity

Unlike IL-1β, which is entirely cytoplasmic until secreted, IL-1α can be anchored to the **plasma membrane inner leaflet** (via N-myristoylation at Lys82/Lys83) or the **outer leaflet surface** (membrane-bound form), where it can engage IL-1R1 on neighbouring cells in a juxtacrine manner [^orjalo2009].

**Release mechanism — alarmin:** When cells die by necrosis (unregulated membrane rupture), IL-1α is rapidly released into the extracellular milieu as a danger-associated molecular pattern (DAMP/alarmin), initiating sterile inflammation without prior caspase-1 activation [^rider2011]. This is the primary route of IL-1α release in tissue injury; it requires no inflammasome priming step.

**Release from senescent cells:** Senescent cells maintain both surface-bound and secreted IL-1α as a constitutive feature of the SASP (see § Role in aging below).

### Canonical secretion

A minor secretion route via TMED10 (p24δ1) has been identified (UniProt P01583), and S100A13 has been implicated in the unconventional secretion pathway under stress conditions. Classical ER-Golgi secretion does not occur (no signal peptide), consistent with all IL-1 family members.

### Comparison with IL-1β

| Property | IL-1α | IL-1β |
|---|---|---|
| Signal peptide | absent | absent |
| Constitutive expression | yes (nuclear + cytoplasmic) | low baseline; inducible |
| Precursor active? | yes (full-length pro-IL-1α) | no (requires caspase-1 cleavage) |
| Mature form generated by | CAPN1 (calpain-1) at Asp112 | caspase-1/ICE at Asp116 |
| Release as alarmin | yes (necrosis → immediate release) | no (requires NLRP3 activation) |
| Requires inflammasome | no | yes (canonical) |
| Nuclear function | yes (intracrine transcription factor) | no |
| Surface-bound form | yes | no |
| SASP role | upstream master regulator | downstream effector |

## Receptor system

Both IL-1α and IL-1β bind [[il-1r1|IL-1R1]] (paired with the IL-1RAcP co-receptor) to activate the canonical downstream axis: [[myd88|MyD88]] → IRAK1/[[irak4|IRAK4]] → [[traf6|TRAF6]] → [[tak1|TAK1]] → IKK → **[[nf-kb|NF-κB]]** nuclear translocation + **JNK** and **p38 MAPK** → transcription of pro-inflammatory genes (IL-6, IL-8, TNF, COX-2, matrix metalloproteinases) [^dinarello2017].

IL-1α also binds the decoy receptor [[il-1r2|IL-1R2]] (IL1R2), which sequesters the cytokine without intracellular signalling — a regulatory buffer for IL-1α activity (UniProt P01583).

[[il-1ra|IL-1Ra]] (encoded by IL1RN; see [[anakinra]]) competitively antagonises both IL-1α and IL-1β at IL-1R1.

## Role in aging

### IL-1α as the upstream regulator of the SASP

Orjalo et al. (2009) established the most aging-critical finding for this protein: in bleomycin-induced, replicatively senescent, oncogenic RAS^V12-induced, and NaB-induced senescent HCA2 human foreskin fibroblasts, **IL-1α acts as the upstream master regulator of the senescence-associated IL-6/IL-8 cytokine network** [^orjalo2009]. Specifically:

- Senescent cells display IL-1α on their surface: 79% of senescent vs 20% of presenescent HCA2 cells scored surface-IL-1α-positive by FACS.
- Blocking IL-1α signalling with a neutralising antibody (0.6 μg/ml) or rIL-1Ra (240 ng/ml) markedly abrogates IL-6 and IL-8 production from senescent cells; IL-1β antibody (0.8 μg/ml) had no effect, establishing IL-1α — not IL-1β — as the upstream driver.
- IL-1α depletion reduced NF-κB (p65) and C/EBPβ DNA-binding activity in senescent cells; both transcription factors are required targets of the IL-1R1→IRAK1→NF-κB/C/EBPβ axis for IL-6/IL-8 expression.
- IRAK1 depletion (>90% by shRNA) prevented the elevated IL-6 secretion 7 days post-bleomycin, confirming IL-1R1-IRAK1 signalling is the transducing mechanism.
- The surface IL-1α → IL-1R1 autocrine/juxtacrine loop → NF-κB + C/EBPβ → IL-6/IL-8 axis constitutes a positive-feedback loop that sustains the SASP chronically after initial senescence induction.

This places IL-1α at the **apex of SASP signalling** in a way that IL-1β (caspase-1-cleavage-dependent, NLRP3-driven) is not. IL-1α requires no inflammasome for its SASP-driving activity.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — IL-1α/IL-1R1/NF-κB axis fully conserved; SASP documented in human cell culture |
| Phenotype (SASP induction) conserved in humans? | yes — Orjalo 2009 used human fibroblasts; confirmed in human senescence models |
| Replicated in aging humans in vivo? | partial — circulating IL-1α rises with age and senescent burden; no interventional RCT blocking IL-1α in human aging specifically #gap/needs-human-replication |

### Inflammaging and age-related disease

IL-1α contributes to [[chronic-inflammation|inflammaging]] through multiple routes:

1. **Senescent-cell tonic release** — accumulating senescent cells constitute an expanding source of surface/secreted IL-1α with age, continuously driving downstream SASP components (IL-6, IL-8, MMP-3) that impair tissue homeostasis.
2. **Necrosis/cell turnover** — age-associated increases in cell death rates (tissue atrophy, DNA damage, mitochondrial dysfunction) increase necrotic IL-1α release from dying cells as a DAMPs signal.
3. **Chronic tissue remodelling** — IL-1α drives matrix metalloproteinase expression and stromal activation, contributing to the fibrotic and pro-tumorigenic microenvironment associated with aged tissues.

#gap/needs-human-replication — The specific contribution of IL-1α (vs IL-1β, IL-6, TNF) to aging-driven chronic sterile inflammation in humans has not been dissected in prospective interventional studies.

### Mouse genetics

Horai et al. (1998) generated IL-1α-/-, IL-1β-/-, IL-1α/β double-KO, and IL-1ra-/- mice and demonstrated that IL-1α is **not** required for turpentine-induced fever (body temperature rose in IL-1α-/- mice similarly to wild-type controls), whereas IL-1β-/- mice failed to develop fever after turpentine injection [^horai1998]. The same paper showed that glucocorticoid (corticosterone) induction 8 h after turpentine was suppressed in IL-1β-/- but not IL-1α-/- mice. This distinguishes the two IL-1 family members: IL-1α is dispensable for systemic febrile and HPA-axis responses while IL-1β is required. The paper also found mutual induction between IL-1α and IL-1β: IL-1α mRNA was suppressed >30-fold in IL-1β-/- brain, and IL-1β mRNA was reduced ~50% in IL-1α-/- macrophages. Note: this paper does not report contact hypersensitivity results; that phenotype was attributed to IL-1α in other studies not contained in this paper. #gap/needs-replication (contact hypersensitivity claim needs separate citation)

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — IL-1α biology broadly conserved across mammals |
| Phenotype conserved in humans? | partial — Horai 1998 mouse KO shows IL-1α dispensable for fever and glucocorticoid responses in controlled turpentine model; human IL-1α biology inferred from in vitro and SASP data |
| Replicated in humans? | no — no IL-1α-specific genetic human data comparable to IL-1β/CANTOS; contact hypersensitivity phenotype attributed to IL-1α in other studies requires separate citation #gap/needs-human-replication |

## Therapeutic landscape

### Bermekimab (anti-IL-1α mAb)

Bermekimab is a fully human IgG1 anti-IL-1α monoclonal antibody (XBiotech / Janssen) that specifically targets IL-1α without blocking IL-1β. It therefore represents the first therapeutic tool to dissect the IL-1α–specific contribution to disease from the broader IL-1 axis [^dinarello2017]. Clinical development as of 2026 has focused on:

- **Atopic dermatitis** — Phase 2b/3 trials (bermekimab in moderate-to-severe AD)
- **Hidradenitis suppurativa** — Phase 2 data
- **Solid tumours** — investigational (IL-1α as tumour microenvironment driver)

No aging-specific clinical trial (senescent cell burden, inflammaging) has been completed for bermekimab as of 2026. This is the primary translational gap for IL-1α in aging biology. #gap/needs-human-replication

### Agents that block IL-1α and IL-1β non-selectively

| Agent | Mechanism | Status |
|---|---|---|
| [[anakinra]] | Recombinant IL-1Ra; blocks IL-1R1 | FDA-approved (RA, CAPS, SJIA) |
| Rilonacept | IL-1 Trap (Fc–IL-1R1–IL-1RAcP) | FDA-approved (CAPS); blocks IL-1α + IL-1β |
| [[canakinumab]] | Anti-IL-1β mAb | FDA-approved; IL-1β-specific; does **not** block IL-1α |

Anakinra and rilonacept suppress the full IL-1R1 axis (both ligands); thus their beneficial effects in aging-related conditions (e.g. T2D, HFpEF trials with anakinra) may be partially mediated by IL-1α blockade, not exclusively IL-1β.

## Pathway membership and cross-references

- [[il-1-signaling]] — canonical pathway page for the IL-1α/β → IL-1R1 axis
- [[sasp]] — senescence-associated secretory phenotype; IL-1α is the apex regulator
- [[nf-kb]] — both upstream (intracrine nuclear activity) and downstream (post-receptor signalling)
- [[cellular-senescence]] — hallmark context; IL-1α is a constitutive senescent-cell SASP driver
- [[chronic-inflammation]] — hallmark context; IL-1α contributes to tonic inflammaging
- [[nlrp3-inflammasome]] — parallel arm: NLRP3-driven IL-1β does not require IL-1α; but IL-1α can prime NLRP3 transcription via NF-κB
- [[caspase-1]] — cleaves IL-1β but **not** IL-1α; this mechanistic distinction is definitional
- [[il-1b]] — sibling cytokine; see the comparison table in § Processing above and the full treatment in the IL-1β page
- [[il-1r1]] — shared signalling receptor (with IL-1β and IL-1Ra)
- [[il-1ra]] — endogenous receptor antagonist; anakinra is its recombinant form
- [[nf-kb]] — key downstream transcription factor; also upstream via intracrine nuclear activity
- [[dna-damage-response]] — upstream activator: genotoxic stress induces IL-1α expression and nuclear accumulation

## Limitations and gaps

- **Circulating IL-1α as biomarker:** Serum IL-1α is often undetectable in healthy humans (short half-life, cell-associated). Age-associated changes are documented in tissue senescence models but not robustly in population-level plasma studies. #gap/contradictory-evidence
- **GTEx aging correlation:** Not populated; see `sops/finding-tissue-expression.md` for protocol. #gap/needs-gtex-data
- **Mendelian randomisation:** No MR study specifically for IL1A variants and aging or longevity outcomes has been identified. `mr-causal-evidence: not-tested`. #gap/needs-replication
- **GenAge entry:** Search for IL1A in GenAge returned no entry. IL-1α is not in the current HAGR curated aging gene set despite its SASP role; `genage-id: null`. #gap/needs-canonical-id
- **Bermekimab clinical stage for aging:** No completed RCT targeting IL-1α specifically in aging contexts (senescent burden, functional decline). This is the decisive translational gap. #gap/needs-human-replication
- **Werman 2004 DOI correction:** The brief provided DOI `10.1073/pnas.0308686100` — this DOI returned "not found" in the archive. The correct DOI for the Werman 2004 PNAS paper ("The precursor form of IL-1α is an intracrine proinflammatory activator of transcription") is `10.1073/pnas.0308705101`. The brief DOI appears to have a typographic error in the last two digits. Verified against DOI lookup.
- **Rider 2011 and Dinarello 2017 — unverifiable:** Both papers failed DOI lookup (publisher paywall for Rider; no OA URL found for Dinarello). Claims attributed to these papers (alarmin release from necrotic cells for Rider; receptor biology and therapeutic overview for Dinarello) are unverified against full text. Tagged #gap/no-fulltext-access. The alarmin/necrosis release mechanism for IL-1α is biologically well-established but the specific Rider 2011 claims about timing and cell recruitment in sterile inflammation remain unconfirmed from the primary source.

---

## Footnotes

[^march1985]: doi:10.1038/315641a0 · March CJ et al. · Nature 1985 · in-vitro (molecular cloning) · cloned and expressed two distinct human IL-1 cDNAs (IL-1α and IL-1β); established that IL-1α and IL-1β are products of separate genes with related but distinct sequences; n/a · archive: not_oa (closed access)

[^werman2004]: doi:10.1073/pnas.0308705101 · Werman A et al. · PNAS 2004 · in-vitro (transfection, reporter assays, multiple cell lines including NIH/3T3, COS-7, MS1, Raw264.7) · demonstrated that pIL-1α precursor translocates to nucleus upon inflammatory stimulus (LPS, IL-1, TNF) and activates transcription from a heterologous GAL4 promoter 90-fold; the propiece (ppIL-1α) also activated >50-fold; the mature form (mIL-1α) was without activity in this system; pIL-1α activates NF-κB and AP-1 in an IL-1R-independent (intracrine) manner; NLS-deletion mutant result is from Buryskova 2004 (^buryskova2004), not this paper · archive: verified (green OA)

[^buryskova2004]: doi:10.1074/jbc.M306342200 · Buryskova M et al. · J Biol Chem 2004 · in-vitro (co-immunoprecipitation, GAL4-reporter transactivation assays, yeast two-hybrid, HEK293 and yeast) · nuclear IL-1α N-terminal propiece (IL-1NTP) physically interacts with histone acetyltransferases p300, PCAF, and Gcn5, and with adaptor protein Ada3 (SAGA/PCAF complex components); IL-1NTP integrates non-destructively into the p300-PCAF complex; transactivation requires an intact SAGA complex and cooperation with p300 (not CBP specifically); N- and C-terminal acidic helices of IL-1NTP mediate the interaction; NLS-deletion mutant (VVATN) retains association with p300 and Ada3 but loses transactivation potency · archive: verified (OA)

[^orjalo2009]: doi:10.1073/pnas.0905299106 · Orjalo AV et al. · PNAS 2009 · in-vitro (HCA2 primary human foreskin fibroblasts; bleomycin-induced, replicative, oncogenic RAS^V12, and NaB-induced senescence models) · 79% of senescent cells vs 20% of presenescent cells surface-labeled for IL-1α by FACS; neutralising anti-IL-1α Ab (0.6 μg/ml) or rIL-1Ra (240 ng/ml) abrogated IL-6 and IL-8 secretion; IL-1β Ab had no effect on IL-6/IL-8; IRAK1 depletion (>90% by shRNA) prevented IL-6 secretion; IL-1α depletion reduced NF-κB (p65) and C/EBPβ DNA binding; IL-1α is the surface-bound upstream master regulator of the senescence-associated IL-6/IL-8 autocrine loop, acting through IL-1R1/IRAK1/NF-κB · archive: verified (green OA)

[^rider2011]: doi:10.4049/jimmunol.1102048 · Rider P et al. · J Immunol 2011 · in-vivo (mouse, sterile peritonitis model) · IL-1α and IL-1β recruit distinct myeloid cell populations and drive different phases of sterile inflammation; IL-1α is the early-phase alarmin released in sterile injury · archive: failed (download failed; publisher paywall) — #gap/no-fulltext-access; claims derived from this paper are unverified against full text

[^dinarello2017]: doi:10.1111/imr.12621 · Dinarello CA · Immunol Rev 2017 · review · comprehensive overview of the IL-1 family (11 ligands, 10 receptors); covers IL-1α dual function (intracrine + extracellular), receptor biology, processing, and therapeutic implications · archive: failed (download failed; no OA URL found) — #gap/no-fulltext-access; claims attributed to this review are unverified against full text

[^horai1998]: doi:10.1084/jem.187.9.1463 · Horai R et al. · J Exp Med 1998 · in-vivo (gene-targeted mouse, Il1a-/-, Il1b-/-, Il1a/b-/-, Il1rn-/- lines; C57BL/6 × DBA/2 F1 background) · IL-1α-/- mice: viable, fertile, normal fever after turpentine; IL-1β-/- mice: fever abrogated; IL-1β (not IL-1α) required for turpentine-induced fever and glucocorticoid secretion; mutual induction: IL-1α mRNA >30-fold suppressed in IL-1β-/- brain; paper does NOT report contact hypersensitivity phenotype · archive: verified (open access via PMC)
