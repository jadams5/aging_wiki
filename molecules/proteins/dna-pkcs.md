---
type: protein
aliases: [DNA-PKcs, DNA-PK catalytic subunit, PRKDC, HYRC, HYRC1]
uniprot: P78527
ncbi-gene: 5591
hgnc: 9413
ensembl: ENSG00000253729
mouse-ortholog: Prkdc
genage-id: null
druggability-tier: 1
caused-by: ["[[dna-damage-response]]", "[[genomic-instability]]"]
causes: ["[[non-homologous-end-joining]]", "[[ampk]]"]
key-domains: [HEAT-repeats, FAT, PI3K-catalytic, FATC]
key-ptms: [Ser2056-autophosphorylation, Thr2609-autophosphorylation, Thr2638-autophosphorylation, Thr2647-autophosphorylation]
pathways: ["[[non-homologous-end-joining]]", "[[dna-damage-response]]", "[[ampk]]"]
hallmarks: ["[[genomic-instability]]", "[[deregulated-nutrient-sensing]]"]
known-interactors: ["[[ku70-ku80]]", "[[atm]]", "[[parp1]]"]
complex-subunits: [P78527, P12956, P13010]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Park 2017 (10.1016/j.cmet.2017.04.008) and Sibanda 2017 (10.1016/bs.mie.2017.04.001) verified against primary source PDFs; Bosma 1983 (10.1038/301527a0) and Davis 2014 (10.1016/j.dnarep.2014.02.020) unverifiable (closed-access, not_oa); canonical-database identity fields (UniProt P78527, NCBI Gene 5591, HGNC 9413) not independently re-verified against databases"
---

# DNA-PKcs (PRKDC)

The catalytic subunit of the DNA-dependent protein kinase (DNA-PK) holoenzyme — a 4,128-amino-acid PIKK-family serine/threonine kinase that serves as the primary molecular sensor and orchestrator of [[non-homologous-end-joining|NHEJ]] at DNA double-strand breaks (DSBs). Beyond its canonical DNA repair role, DNA-PKcs suppresses [[ampk|AMPK]] signaling in aging muscle via HSP90α phosphorylation, coupling accumulating DNA damage to metabolic decline [^park2017].

## Identity

- **UniProt:** P78527 (PRKDC_HUMAN)
- **NCBI Gene:** 5591
- **HGNC symbol:** PRKDC (aliases: HYRC, HYRC1)
- **Ensembl:** ENSG00000253729
- **Mouse ortholog:** Prkdc (high conservation; Scid mouse harbors a nonsense mutation in this gene — see below)
- **Length:** 4,128 amino acids (one of the largest human proteins; MW ~470 kDa)
- **GenAge entry:** not found #gap/no-genage-entry

## PIKK family context

DNA-PKcs belongs to the **PIKK (PI3K-related kinase)** family alongside [[atm|ATM]], ATR, mTOR (see [[mtor]]), SMG1, and TRRAP. All PIKKs share:

- C-terminal **PI3K-catalytic domain** (kinase activity)
- **FAT** and **FATC** flanking domains (regulatory)
- Extended N-terminal **HEAT/HEAT-like repeats** (scaffold for protein-protein interactions)

Despite structural similarity to lipid kinases, PIKKs phosphorylate proteins exclusively. DNA-PKcs is distinguished by its requirement for DNA-end binding (via the Ku70–Ku80 heterodimer) for kinase activation.

## Domain architecture

| Domain | Residues (approx.) | Function |
|---|---|---|
| HEAT repeats (N-lobe) | 1–892 | Scaffold; Ku heterodimer docking |
| Middle HEAT repeats | 893–2,801 | Conformational flexibility at DSB ends |
| FAT domain | 2,906–3,539 | Regulatory; couples DNA-end status to catalytic domain |
| PI3K catalytic domain | 3,722–4,053 | Serine/threonine kinase activity |
| FATC domain | 4,096–4,128 | Required for full kinase activity; terminal integrity sensor |

A 2017 X-ray crystallography study (selenomethionine-labeled DNA-PKcs complexed with KU80ct₁₉₄; 4.3 Å resolution) defined three large structural units: the N-terminal region (HEAT repeats, residues 1–892), the Circular Cradle (HEAT repeats, residues 893–2801), and the C-terminal Head (residues 2802–4128, containing FAT, FRB, kinase, and FATC domains) [^sibanda2017]. #gap/needs-replication — the 4.3 Å resolution leaves side-chain-level detail incomplete; higher-resolution structures at atomic detail are in progress as of 2025.

## DNA-PK holoenzyme and NHEJ mechanism

DNA-PKcs does not bind DSB ends directly. Instead, the **Ku70–Ku80 heterodimer** ([[ku70-ku80]]) threads onto DNA ends with high affinity, then recruits DNA-PKcs to form the **DNA-PK holoenzyme**. This three-component assembly (Ku70 + Ku80 + DNA-PKcs) is essential for [[non-homologous-end-joining|NHEJ]] [^davis2014].

Activation cascade:

1. DSB generated (ionizing radiation, replication stress, programmed breaks in V(D)J recombination)
2. Ku70–Ku80 binds blunt or 1–4 nt overhang DNA ends within seconds
3. DNA-PKcs recruited; Ku–DNA-PKcs contact allosterically activates kinase activity (~10-fold stimulation)
4. DNA-PKcs **autophosphorylates** at the ABCDE cluster (Thr2609, Thr2638, Thr2647) and the PQR cluster (Ser2056) — autophosphorylation regulates DNA-end access and end-processing fidelity
5. **Artemis** (DCLRE1C) is phosphorylated and activated → endonuclease trims 3' overhangs and opens hairpins (critical for V(D)J coding joints)
6. **XRCC4–LIG4–XLF** complex ligates the processed ends; XRCC4 is phosphorylated by DNA-PKcs to regulate the ligation step
7. DNA-PKcs dissociates following ligation; autophosphorylation may trigger this release

NHEJ is the dominant DSB repair pathway in G1 phase and is the **only** pathway capable of repairing the programmed DSBs introduced during V(D)J recombination in developing lymphocytes.

## V(D)J recombination and the SCID mouse

The requirement for NHEJ in V(D)J recombination is illustrated starkly by the **Scid (severe combined immunodeficiency) mouse**, first described by Bosma et al. in 1983 [^bosma1983]. Scid mice carry a nonsense mutation in the *Prkdc* gene (a premature stop codon near the C-terminus, removing the kinase domain). Consequences:

- **Complete absence of mature B and T lymphocytes** — V(D)J recombination fails at the coding joint step; antigen-receptor gene rearrangements are not completed
- Lymphoid progenitors are present but arrested before productive rearrangement
- Scid mice are essentially immunologically naive — they cannot generate adaptive immune responses

**Human equivalents:** Loss-of-function variants in *PRKDC* cause **Immunodeficiency 26 (IMD26)**, a rare form of SCID with combined T- and B-cell deficiency plus neurological abnormalities (DNA-PKcs has non-immune roles in neurons).

**Practical use:** Because Scid mice lack adaptive immunity, they accept human xenografts and are a cornerstone model for human tumor biology, human hematopoietic engraftment studies, and CAR-T cell preclinical testing. The SCID–Hu and NSG (NOD-SCID-IL2Rg-null) models are refinements.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | NHEJ, V(D)J, and DNA-PKcs kinase function are conserved |
| Phenotype conserved in humans? | yes | PRKDC loss-of-function causes human SCID (IMD26) |
| Replicated in humans? | yes | Multiple IMD26 kindreds; also replicated by chemical inhibition studies in human cell lines |

## Metabolic and aging-relevant role

Beyond NHEJ, an unexpected aging-relevant function of DNA-PKcs was identified by Park et al. (2017) [^park2017]: **DNA-PKcs suppresses AMPK activity** through a non-canonical, cytoplasmic signaling axis.

**Mechanism:**
1. DSB load in skeletal muscle increases with aging (oxidative damage, replication stress in satellite cells, persistent inflammation)
2. Elevated DNA-PKcs activity phosphorylates **HSP90α** at Thr-5 and Thr-7
3. Phospho-HSP90α loses its chaperoning support for **LKB1** (STK11) — the upstream kinase that activates [[ampk|AMPK]]
4. AMPK activity falls → reduced mitochondrial biogenesis, impaired fatty acid oxidation, decreased exercise capacity
5. Net metabolic consequence: weight gain, mitochondrial dysfunction, reduced physical fitness

**Evidence (mouse):**

- Middle-aged mice treated with DNA-PKcs inhibitor **NU7441** (delivered **orally in HFD food pellets**; specific mg/kg dose not stated in Park 2017 — the previous "40 mg/kg/day oral gavage" wording was fabricated and was corrected R32c via the DNA-PKcs-inhibitors verifier) for up to 12 weeks showed preserved AMPK activity, improved mitochondrial function, and were protected from weight gain on a high-fat diet [^park2017]
- Genetic reduction of DNA-PKcs activity via two independent models also protected against metabolic decline: **SCID mice** (B6.CB17-Prkdc^scid/SzJ; leaky nonsense mutation) had higher p-AMPK and more mitochondria in middle-aged skeletal muscle; **muscle-specific conditional DNA-PKcs knockout (MDPKO)** mice showed increased p-AMPK and p-ACC at 17 months vs. controls [^park2017]
- The effect was cell-autonomous and observed in both mouse (C2C12) myotubes and human primary myotubes in culture

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | HSP90α, LKB1, and AMPK are highly conserved; DNA-PKcs kinase domain 85%+ conserved |
| Phenotype conserved in humans? | partial | Human myotube data in culture; no in-vivo human aging trial yet |
| Replicated in humans? | no | Park 2017 is single-study; no independent replication in aged humans #gap/needs-human-replication |

#gap/needs-replication — The DNA-PKcs → HSP90α → LKB1 → AMPK axis requires independent replication in a separate lab/model system.

## Aging relevance summary

DNA-PKcs connects to aging biology via two distinct mechanisms:

1. **Accumulation of unrepaired DSBs** — NHEJ fidelity and capacity decline with age in post-mitotic tissues; persistent DSBs activate chronic DDR signaling that can drive [[sasp|SASP]] and senescence (via [[atm|ATM]]-mediated p53/p21 induction). DNA-PKcs is essential for efficient DSB resolution; impaired NHEJ amplifies the unrepaired-DSB burden. #gap/no-mechanism — The age-specific mechanism of NHEJ decline in post-mitotic tissues (transcriptional downregulation of NHEJ components vs. post-translational modifications) is not fully resolved.
2. **Metabolic suppression of AMPK** — DNA-PKcs activity rises in aging skeletal muscle, actively suppressing AMPK; this is a non-genomic aging driver that could be pharmacologically targeted independently of DNA repair.

These two mechanisms are not mutually exclusive: accumulating DSBs (mechanism 1) amplify DNA-PKcs activity, which suppresses AMPK (mechanism 2), creating a potential feed-forward loop.

## Therapeutic angle — DNA-PK inhibitors

DNA-PKcs is a **druggability tier 1** target (clinical-stage kinase inhibitors exist). The therapeutic rationale has historically been oncological (radiosensitization) but is being explored for metabolic-aging indications.

**Clinical inhibitors:**

| Compound | Class | Mechanism | Stage | Primary indication |
|---|---|---|---|---|
| Peposertib (M3814) | ATP-competitive | Blocks DNA-PKcs catalytic domain | Phase 1/2 | Solid tumors (radiosensitization) |
| AZD7648 | ATP-competitive | Selective DNA-PKcs inhibitor | Phase 1 | Hematologic malignancies + solid tumors |

**Peposertib phase 1 data (oncology):**
- Phase Ib in locally advanced rectal cancer (combined with chemoradiation): acceptable safety, dose-dependent target engagement [^romesser2024]
- Phase 1 in head and neck tumors (combined with radiation ± cisplatin): established RP2D [^samuels2024]

**Aging/metabolic angle:** Park et al. (2017) used **NU7441** (a selective ATP-competitive DNA-PKcs inhibitor, structurally distinct from peposertib) delivered **orally in HFD food pellets** (specific mg/kg dose not stated in the publication; the previous "40 mg/kg/day oral gavage" framing was fabricated and was corrected R32c) for up to 12 weeks to rescue AMPK activity and metabolic fitness in middle-aged mice. The paper's primary in-vivo readout in mice was phospho-HSP90α (Thr5/7) and downstream metabolic markers; direct p-DNA-PKcs measurement was not feasible in mice (the antibody did not cross-react with mouse DNA-PKcs). The widely-quoted "~3-fold elevation in aged muscle" is **from rhesus macaques specifically** (n=5/group, 15 yr vs 1 yr, Mann-Whitney p<0.01) — not from the mouse cohort. Whether peposertib or AZD7648 recapitulate this effect at non-genotoxic doses is untested. #gap/long-term-unknown — Chronic partial DNA-PKcs inhibition could impair NHEJ capacity and increase genomic instability; risk-benefit in a non-oncology setting is entirely uncharacterized.

**Aging clinical trials:** No registered clinical trials for DNA-PKcs inhibition as an aging or metabolic intervention as of 2026-05-05. #gap/needs-human-replication

## Key interactors

- [[ku70-ku80]] — Ku heterodimer; essential for DNA-PKcs recruitment to DSB ends and kinase activation
- [[atm|ATM]] — paralog PIKK; ATM and DNA-PKcs phosphorylate overlapping substrates (H2AX, p53, RPA) but in different contexts (resected vs. blunt/minimally processed ends)
- [[parp1|PARP1]] — alternative sensor for SSBs and some DSBs; PARP1 and DNA-PKcs compete/cooperate at certain break types
- [[mtor|mTOR]] — PIKK family paralog (structural, not functional direct interaction); shared pharmacophore makes selectivity of early-generation PI3K inhibitors relevant

## Limitations and gaps

- #gap/no-genage-entry — PRKDC has no confirmed GenAge entry; aging-lifespan phenotype in model organisms is secondary (NHEJ-mutant worms/flies show accelerated aging but confounded by DNA-repair defects)
- #gap/needs-human-replication — The metabolic AMPK-suppression axis is a single-lab result in mouse + human myotubes; no independent human in-vivo evidence
- #gap/needs-replication — Structural data on DNA-PKcs at atomic resolution remains incomplete; the highest-resolution crystal structure is 4.3 Å (Sibanda 2017), insufficient for side-chain-level mechanistic interpretation; DNA-bound and activated conformations are not yet resolved at high resolution
- #gap/long-term-unknown — Chronic DNA-PKcs inhibition safety profile in aging (non-oncology) contexts is entirely unknown; NHEJ impairment risk is not characterized
- #gap/dose-response-unclear — The optimal degree of DNA-PKcs inhibition to recover AMPK without impairing NHEJ is not defined in any model
- The user-provided DOI for the Park 2017 paper (`10.1016/j.cell.2017.06.011`) resolved to an unrelated SLC16A11 paper — corrected to `10.1016/j.cmet.2017.04.008` (Cell Metabolism) via PubMed PMID 28467930. The user-provided DOI for the Davis 2014 review (`10.1101/cshperspect.a015842`) resolved to an unrelated paper — corrected to `10.1016/j.dnarep.2014.02.020` (DNA Repair). Both corrections confirmed via.

## Footnotes

[^bosma1983]: [[studies/bosma-1983-scid-mouse]] · doi:10.1038/301527a0 · n=not-stated (colony characterization) · in-vivo (mouse, Prkdc-nonsense) · model: C.B-17/lcr-Scid inbred line · cited-by: 2194 · archive: not downloaded (closed access)

[^park2017]: [[studies/park-2017-dna-pk-metabolism-aging]] · doi:10.1016/j.cmet.2017.04.008 · n=3–10/group depending on experiment (n=10/group for HFD weight/glucose studies; n=8/group for treadmill; n=3–6/group for Western blot quantification) · in-vivo + in-vitro · model: male C57BL/6J aged mice (3–25 mo), SCID mice, MDPKO mice, rhesus macaques (1–16 yr), C2C12 myotubes, human primary myotubes · inhibitor: NU7441 · Cell Metabolism 25:1135–1146, 2017 · cited-by: 125 · archive: downloaded (bronze OA)

[^davis2014]: [[studies/davis-2014-dna-pk-nhej-review]] · doi:10.1016/j.dnarep.2014.02.020 · review · DNA Repair 2014 · Davis AJ, Chen BPC, Chen DJ · cited-by: 320 · archive: not downloaded (closed access)

[^sibanda2017]: [[studies/sibanda-2017-dna-pkcs-structure]] · doi:10.1016/bs.mie.2017.04.001 · in-vitro (X-ray crystallography; selenomethionine-labeled; 4.3 Å resolution) · Methods in Enzymology 592:145–157, 2017 · Chirgadze DY, Ascher DB, Blundell TL, Sibanda BL · archive: downloaded (green OA via PMC)

[^romesser2024]: [[studies/romesser-2024-peposertib-rectal-cancer]] · doi:10.1158/1078-0432.CCR-23-1129 · phase-1b clinical trial · n=not extracted · model: locally advanced rectal cancer patients · Clin Cancer Res 2024 · cited-by: 28

[^samuels2024]: [[studies/samuels-2024-peposertib-head-neck]] · doi:10.1016/j.ijrobp.2023.09.024 · phase-1 clinical trial · n=not extracted · model: advanced head and neck tumor patients · Int J Radiat Oncol Biol Phys 2024 · cited-by: 55
