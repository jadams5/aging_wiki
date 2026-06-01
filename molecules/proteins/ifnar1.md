---
type: protein
aliases: [interferon alpha/beta receptor 1, IFN-α/β receptor 1, IFNAR-1, IFN-R-1]
uniprot: P17181
ncbi-gene: 3454
hgnc: 5432
ensembl: ENSG00000142166
mouse-ortholog: Ifnar1
genage-id: null
pathways: ["[[type-i-interferon-signaling]]", "[[jak-stat-pathway]]"]
hallmarks: ["[[chronic-inflammation]]", "[[disabled-adaptive-immunity]]"]
sens-categories: []
druggability-tier: 1
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[chronic-inflammation]]"]
literature-checked-through: 2026-05-13
verified: true
verified-date: 2026-05-13
verified-by: claude
verified-scope: "Stark & Darnell 2012 verified against local PDF — confirms TYK2-IFNAR1/JAK1-IFNAR2 pre-association, ISGF3 mechanism; does NOT cover FNIII domain architecture or anifrolumab (published 2012). Anifrolumab SD1-ectodomain claim removed from Stark & Darnell attribution; new footnote added flagging need to verify against structural publication. Bhattacharya 2010 verified against local PDF — ligand-induced pathway corrected (PKD→TYK2-dependent; mechanism clarified); ligand-independent pathway Ser532/Ser535/PERK mechanism confirmed and nuanced (PERK activates intermediate kinase, not direct PERK→Ser532). TULIP-2 Morand 2020 verified against local PDF — all numbers confirmed (180/182, 47.8%/31.5%, 86/180, 57/182, 16.3 pp, 95% CI 6.3–26.3, P=0.001, bronchitis 12.2%, herpes zoster 7.2%); treatment duration corrected 52→48 weeks; one pneumonia death added. Bastard 2021 cross-checked against verified studies/bastard-2021-anti-ifn-autoantibody-age-prevalence.md (PDF not re-read) — all prevalence figures (0.18%/1.1%/3.4%, 13.6% critical, ~20% deaths) confirmed. Roy 2022 verified against local PDF — cell-type specificity corrected and expanded (microglial deletion→post-synaptic rescue; neural deletion→pre-synaptic + plaque reduction; both confirmed). Hou 2022 DOI (10.1111/acel.13582) found to resolve to wrong paper (Uhrlaub et al. CD8 T-cell/WNV paper, not IFNAR1-COVID paper); claim flagged #gap/unsourced pending DOI correction. UniProt P17181 identity fields (557 aa, canonical accession, HGNC, Ensembl) not independently re-queried against UniProt REST — confirmed as consistent with seeder notes and cross-reference against IFNAR2 page."
---


# IFNAR1

The signal-amplifying subunit of the type I interferon receptor. IFNAR1 constitutively associates with TYK2 and pairs with [[ifnar2]] (the high-affinity ligand-binding subunit, which associates with JAK1) to form the functional heterodimeric receptor that transduces IFN-α, IFN-β, and related type I IFN signals via the [[jak-stat-pathway|JAK-STAT pathway]]. Direct binding target of **anifrolumab** (Saphnelo), the first FDA-approved IFNAR1-blocking monoclonal antibody (2021, for SLE). Aging-relevant primarily through type I IFN-driven [[chronic-inflammation|inflammaging]]: tonic type I IFN signaling rises with age and contributes to SASP amplification and tissue-level sterile inflammation, while paradoxically a subset of older adults develops neutralizing anti-IFN autoantibodies that blunt IFNAR1-dependent antiviral responses.

## Identity

- **UniProt:** P17181 (INAR1_HUMAN)
- **NCBI Gene:** 3454
- **HGNC:** 5432 (symbol: IFNAR1)
- **Ensembl:** ENSG00000142166
- **Mouse ortholog:** Ifnar1 (one-to-one; used extensively in type I IFN KO studies)
- **Length:** 557 amino acids (canonical isoform)
- **GenAge:** not listed

## Receptor architecture

The type I IFN receptor is a heterodimer:

| Subunit | Gene | Associated kinase | Primary role |
|---|---|---|---|
| IFNAR1 | IFNAR1 | TYK2 (constitutive) | Signal transduction; lower-affinity ligand contact |
| [[ifnar2]] | IFNAR2 | JAK1 (constitutive) | High-affinity ligand binding; receptor recruitment |

The ternary complex (IFN ligand + IFNAR2 + IFNAR1) assembles at the plasma membrane. IFNAR2 binds IFN-α/β first (high affinity); IFNAR1 is then recruited to complete the signaling complex [^stark-darnell-2012].

### Extracellular domains

IFNAR1 has four fibronectin type-III (FNIII) repeats in its ectodomain (SD1–SD4). Anifrolumab binds subdomain 1 (SD1) of the IFNAR1 ectodomain, blocking IFNAR1-IFNAR2 heterodimerization rather than directly competing with the IFN ligand for binding [^anifrolumab-moa]. #gap/needs-replication — the precise structural epitope is reported by AstraZeneca mechanistic studies; crystallographic data not independently published in a peer-reviewed source as of 2026.

### Cytoplasmic tail and TYK2 docking

The cytoplasmic tail of IFNAR1 is pre-associated with TYK2 in unstimulated cells. Upon IFN binding and receptor heterodimerization, TYK2 (docked on IFNAR1) and JAK1 (docked on IFNAR2) transphosphorylate each other, creating docking sites for STAT1 and STAT2. This triggers the canonical ISGF3 complex (STAT1/STAT2/IRF9) and nuclear translocation to induce interferon-stimulated genes (ISGs) [^stark-darnell-2012].

## Post-translational regulation: ubiquitination and degradation

IFNAR1 undergoes ligand-stimulated ubiquitination and lysosomal degradation as a key negative-feedback mechanism to attenuate type I IFN signaling. Two phosphorylation-dependent degron pathways have been described:

1. **Ligand-induced degron**: IFN binding triggers TYK2-catalytic-activity-dependent phosphorylation of Ser535 in the cytoplasmic tail within the DSGNYS degron; CK1α then ubiquitinates the degron via FBXW11 (β-TrCP2), leading to lysosomal sorting and degradation [^bhattacharya2010].
2. **Ligand-independent (stress-induced) degron**: Unfolded protein response (UPR) activation — via PERK-dependent activation of an as-yet-unidentified kinase (not PERK directly) — phosphorylates Ser532 as a priming site proximal to the degron; this priming event enhances CK1α-mediated phosphorylation of Ser535 independently of IFN binding or TYK2 activity, leading to ligand-independent IFNAR1 ubiquitination and degradation [^bhattacharya2010].

UniProt records K48- and K63-linked ubiquitination sites as well as palmitoylation at Cys-463, which may influence membrane microlocalization. Twelve N-linked glycosylation sites are documented [P17181].

### Subcellular trafficking

IFNAR1 cycles between the plasma membrane, late endosomes, and lysosomes. Constitutive internalization rate is low; ligand engagement markedly accelerates trafficking toward the lysosomal degradation compartment, providing a dose-dependent attenuation mechanism.

## Anifrolumab — mechanism and clinical status

Anifrolumab (Saphnelo, AstraZeneca) is a fully human IgG1κ monoclonal antibody that binds to **subdomain 1 of the IFNAR1 ectodomain**, blocking interaction with IFNAR2 and thus preventing assembly of the functional IFN receptor complex. This pan-type-I-IFN blockade suppresses signaling by all ~13 IFN-α subtypes plus IFN-β, IFN-ω, IFN-ε, and IFN-κ.

**FDA approval:** July 2021 for moderate-to-severe SLE in adults receiving standard-of-care therapy.

**TULIP-2 trial (Phase 3 RCT):** 362 adult SLE patients randomized to anifrolumab 300 mg IV every 4 weeks vs. placebo for **48 weeks** (primary endpoint assessed at week 52). Modified intention-to-treat population: 180 anifrolumab / 182 placebo. Primary endpoint (BICLA response at week 52): 47.8% (86/180) anifrolumab vs. 31.5% (57/182) placebo (adjusted difference 16.3 percentage points, 95% CI 6.3–26.3; P=0.001). Significant reductions in glucocorticoid dose and skin disease score [^morand2020]. Herpes zoster occurred in 7.2% and bronchitis in 12.2% of the anifrolumab arm; one death from pneumonia in the anifrolumab arm.

| Dimension | Status |
|---|---|
| Pathway conserved between human and mouse? | yes — Ifnar1 KO mouse has well-validated phenotype |
| Aging-indication drug exists? | no — anifrolumab approved for SLE, not aging per se |
| Druggability tier (aging context) | 1 — direct-binding FDA-approved mAb; aging-relevant engagement via inflammaging suppression, trial ongoing |

## Role in aging and inflammaging

### Tonic type I IFN elevation with age

Circulating type I IFN levels and ISG expression in PBMCs increase with chronological age in humans — a phenomenon termed the "interferome" of aging. This tonic IFNAR1 engagement contributes to the sterile inflammatory state of [[chronic-inflammation|inflammaging]] [^hou2022]. The mechanistic drivers include:

- Accumulation of cytosolic nucleic acids (from mitochondrial leakage and retrotransposon derepression) activating cGAS-STING → type I IFN induction (see [[cgas-sting]])
- Senescent cell SASP-dependent IFN-β secretion, which in turn amplifies IFNAR1 signaling in neighboring cells
- Age-associated accumulation of oxidized mitochondrial DNA as a cGAS ligand

Reduced IFNAR1 surface expression has been observed in secretory epithelial cells from aged critical COVID-19 patients, suggesting that chronic tonic IFN signaling drives compensatory IFNAR1 downregulation in some cell types [^hou2022]. #gap/needs-replication — single study, observational, COVID-specific context. **Note:** The DOI cited for Hou 2022 (`10.1111/acel.13582`) resolved in the a local paper archive to a different *Aging Cell* 2022 paper (Uhrlaub et al. on CD8 T-cell reconstitution and West Nile virus). The correct DOI for the Hou et al. IFNAR1-in-aging-COVID paper requires re-identification. #gap/unsourced — claim cannot be verified against primary source until correct DOI is confirmed.

### Anti-IFN autoantibodies in the elderly: IFNAR1 phenocopy

A clinically important age-associated phenomenon: neutralizing autoantibodies against IFN-α2 and IFN-ω accumulate with age and effectively phenocopy IFNAR1 blockade — but in a pathological rather than therapeutic direction. Bastard et al. 2021 (n=3,595 critical COVID patients + uninfected cohorts) found:

- Prevalence in uninfected individuals: 0.18% (ages 18–69), 1.1% (ages 70–79), 3.4% (age >80)
- Present in 13.6% of critical COVID cases (up to 21% of cases in patients aged >80)
- Accounted for ~20% of fatal COVID-19 cases

These autoantibodies block IFNAR1-mediated antiviral signaling, leaving elderly individuals vulnerable to viral challenge despite an intact receptor. See [[studies/bastard-2021-anti-ifn-autoantibody-age-prevalence]] for the full study page [^bastard2021].

### IFNAR1 signaling in the aging brain

Chronic IFNAR1-dependent type I IFN signaling in microglia and neural cells drives neuroinflammatory programs associated with cognitive aging and Alzheimer's disease pathology (5XFAD amyloidosis mouse model). Roy et al. 2022 demonstrated cell-type-specific roles: **microglial** Ifnar1 deletion (5XFAD;MKO) attenuated microglial activation and reduced post-synaptic (PSD95+) loss; **neural** Ifnar1 deletion (5XFAD;NKO) restored pre-synaptic terminals (synaptophysin+) and reduced amyloid plaque burden; long-term IFNAR blockade with an anti-IFNAR antibody rescued both working memory (Y-maze) and reference memory (novel-object recognition) deficits in aged 5XFAD mice [^roy2022].

#gap/needs-human-replication — mechanistic data are from amyloidosis mouse models; whether IFNAR1 blockade improves cognition in human neurodegeneration is untested.

## Pathway membership

- [[type-i-interferon-signaling]] — canonical IFN → IFNAR1/IFNAR2 → TYK2/JAK1 → STAT1/STAT2 → ISGF3 axis
- [[jak-stat-pathway]] — TYK2 and JAK1 as the receptor-associated kinases; IFNAR1 is the TYK2 docking subunit

## Key interactors

- [[ifnar2]] — obligate heterodimerization partner; IFNAR2 provides high-affinity ligand binding
- TYK2 — constitutively pre-associated with cytoplasmic tail of IFNAR1; first kinase activated in the signaling cascade
- JAK1 — associated with IFNAR2; cross-activates TYK2 after receptor dimerization
- STAT1, STAT2 — transcription factor substrates recruited after JAK/TYK2 activation
- FBXW11 (β-TrCP2) — E3 ubiquitin ligase component that ubiquitinates IFNAR1 at the degron for proteolytic downregulation [^bhattacharya2010]

## Pharmacology and intervention context

| Agent | Type | Mechanism | Status |
|---|---|---|---|
| Anifrolumab (Saphnelo) | mAb (IgG1) | IFNAR1 SD1 ectodomain binding, blocks heterodimerization | FDA-approved 2021 (SLE) |
| Anti-IFN-α/β-R antibodies | Research tools | Pan-IFNAR1 blocking | Preclinical only |

**Aging-context tier-1 rationale:** anifrolumab is an FDA-approved drug that binds IFNAR1 directly. While approved for SLE rather than an explicit aging indication, its mechanism (suppression of chronically elevated type I IFN signaling) is directly relevant to inflammaging and several age-related inflammatory conditions. Clinical trials exploring anifrolumab in dermatomyositis and other inflammatory conditions are ongoing. There is no FDA-approved drug for IFNAR1 in an aging-specific indication, but druggability-tier 1 is appropriate per the aging-context convention because a direct-binding clinical drug exists and the molecular mechanism is tightly coupled to the inflammaging hallmark.

## Knowledge gaps

- `#gap/needs-human-replication` — Whether tonic type I IFN elevation is causally (not merely correlatively) driving inflammaging in humans; MR studies have not been performed using IFNAR1 instruments.
- `#gap/needs-replication` — Age-associated IFNAR1 downregulation in secretory epithelial cells (Hou 2022); single study, COVID context, limited mechanistic follow-up.
- `#gap/unsourced` — The DOI cited for Hou 2022 (`10.1111/acel.13582`) resolves to an unrelated paper (Uhrlaub et al., CD8 T cells and West Nile virus). The correct primary source for IFNAR1 downregulation in aged secretory epithelial cells from COVID patients needs to be identified and the footnote corrected before this claim can be verified.
- `#gap/no-mechanism` — Why anti-IFN autoantibody prevalence rises so sharply after age 70 (vs. linear expectation); whether this reflects thymic involution, regulatory T-cell loss, or B-cell tolerance breakdown is unclear.
- `#gap/long-term-unknown` — Safety of sustained IFNAR1 blockade (anifrolumab) in elderly patients with comorbid immune senescence; TULIP-2 enrolled adults mean age ~40; geriatric pharmacology unknown.
- `#gap/dose-response-unclear` — Optimal level of IFNAR1 pathway suppression in the context of inflammaging; complete blockade (anifrolumab) may reduce inflammation but impair antiviral surveillance; partial attenuation modalities not clinically validated.
- `mr-causal-evidence: not-tested` — No published MR study using IFNAR1 instruments to test causal role in any aging outcome. GWAS data for IFNAR1 region exist but have not been leveraged in published aging-outcome MR.

## Footnotes

[^anifrolumab-moa]: Anifrolumab SD1-epitope: per AstraZeneca/Saphnelo prescribing information and mechanistic publications (Riggs JM et al., *Lupus Sci Med* 2018 doi:10.1136/lupus-2018-000261; Peng L et al., various). The precise crystallographic epitope is described in AstraZeneca discovery publications. Stark & Darnell 2012 (doi:10.1016/j.immuni.2012.03.013) does NOT describe anifrolumab or FNIII subdomain topology; the SD1 epitope claim should be verified against the primary structural publication (Riggs 2018 or equivalent). #gap/needs-replication — independent structural confirmation of SD1 vs SD1-SD2 epitope binding should be verified.

[^stark-darnell-2012]: doi:10.1016/j.immuni.2012.03.013 · Stark GR, Darnell JE Jr. · review · Immunity 2012 · "The JAK-STAT Pathway at Twenty" — canonical reference for JAK-STAT signaling history; confirms TYK2 pre-associated with IFNAR1, JAK1 pre-associated with IFNAR2, and ISGF3 assembly (STAT1/STAT2/IRF9); n/a (review). Does NOT describe FNIII-domain architecture of IFNAR1 or anifrolumab (published 2012, drug approved 2021).

[^morand2020]: doi:10.1056/NEJMoa1912196 · Morand EF et al. · RCT (Phase 3) · n=362 (180 anifrolumab 300 mg IV q4w, 182 placebo; modified ITT) · P=0.001 · BICLA response 47.8% (86/180) vs 31.5% (57/182); adjusted difference 16.3 pp; 95% CI 6.3–26.3 · herpes zoster 7.2%; bronchitis 12.2%; one pneumonia death in anifrolumab arm · model: human SLE (TULIP-2 trial) · local PDF available

[^bastard2021]: [[studies/bastard-2021-anti-ifn-autoantibody-age-prevalence]] · Bastard P et al. · observational, cohort · n=3,595 critical COVID + uninfected controls · p<0.0001 (age-stratified prevalence) · model: human · Science Immunology 2021 · doi:10.1126/sciimmunol.abl4340 · local PDF available

[^bhattacharya2010]: doi:10.1074/jbc.M109.071498 · Bhattacharya S, HuangFu W-C, Liu J, Veeranki S, Baker DP, Koumenis C, Diehl JA, Fuchs SY · in-vitro + cell-based · n/a · Journal of Biological Chemistry 2010 · "Inducible Priming Phosphorylation Promotes Ligand-independent Degradation of the IFNAR1 Chain of Type I Interferon Receptor" — established PERK-dependent Ser532 priming phosphorylation enabling CK1α-mediated Ser535 degron phosphorylation and β-TrCP2/FBXW11 ubiquitination in the ligand-independent UPR pathway; ligand-induced pathway requires TYK2 catalytic activity; local PDF available

[^hou2022]: **DOI UNVERIFIED** — doi:10.1111/acel.13582 as cited does NOT correspond to the described paper; this DOI lookup resolves to Uhrlaub JL et al. "Quantitative restoration of immune defense in old animals determined by naive antigen-specific CD8 T-cell numbers" (*Aging Cell* 2022) — an entirely different paper on CD8 T cells and West Nile virus. The correct DOI for the Hou et al. paper on IFNAR1 downregulation in aged COVID patients has not been confirmed. Claims attributed to this footnote are tagged #gap/unsourced pending correct DOI identification.

[^roy2022]: doi:10.1016/j.immuni.2022.03.018 · Roy ER, Chiu G, Li S et al. · in-vivo (mouse, 5XFAD amyloidosis model) · Immunity 2022 · "Concerted type I interferon signaling in microglia and neural cells promotes memory impairment associated with amyloid β plaques" · microglial Ifnar1 deletion (5XFAD;MKO) reduced microglial activation and partially rescued post-synaptic (PSD95+) loss; neural Ifnar1 deletion (5XFAD;NKO) restored pre-synaptic terminals (synaptophysin+) and reduced amyloid plaque burden; long-term anti-IFNAR antibody blockade rescued Y-maze and novel-object recognition memory deficits; local PDF available
