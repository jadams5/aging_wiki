---
type: protein
aliases: [proliferating cell nuclear antigen, DNA sliding clamp, PCNA_HUMAN]
uniprot: P12004
ncbi-gene: 5111
hgnc: 8729
ensembl: ENSG00000132646
genage-id: null
mouse-ortholog: Pcna
key-domains: [PCNA-N-domain, PCNA-C-domain, inter-domain-connecting-loop, PIP-box-binding-surface]
key-ptms: [K164-monoubiquitination, K164-K63-polyubiquitination, K164-sumoylation, K254-sumoylation, K14-acetylation, K77-acetylation, K80-acetylation, K248-acetylation, Y211-phosphorylation]
pathways: ["[[base-excision-repair]]", "[[nucleotide-excision-repair]]", "[[mismatch-repair]]", "[[dna-damage-response]]", "[[homologous-recombination]]"]
hallmarks: ["[[genomic-instability]]"]
sens-categories: []
known-interactors: ["[[p21]]", "[[parp1]]", "[[atm]]"]
druggability-tier: 4
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Pilzecker 2017, Rall-Scharpf 2025, Shah 2024, and Choe 2017 verified against primary-source PDFs. UniProt P12004 identity fields (accession, gene IDs, length, PTMs, ATLD2 variant) verified via REST API. Krishna 1994, Hoege 2002, Mailand 2013 are not_oa — claims from those sources tagged accordingly. Open Targets returned no tractability data for ENSG00000132646 (consistent with tier 4)."
---

# PCNA (Proliferating Cell Nuclear Antigen)

The master processivity clamp of eukaryotic DNA replication — a homotrimeric ring that encircles duplex DNA at the replication fork and serves as the central protein-recruitment platform for DNA replication, DNA repair, and damage-tolerance. PCNA is the convergence point of multiple genome-integrity pathways; its post-translational modification state (particularly at K164) is the primary molecular switch controlling the cellular response to replication-blocking DNA lesions. Relevant to aging via its role in suppressing somatic mutation accumulation and maintaining stem cell genomic integrity.

## Identity

- **UniProt:** P12004 (PCNA_HUMAN)
- **NCBI Gene:** 5111
- **HGNC symbol:** PCNA
- **Ensembl:** ENSG00000132646
- **Mouse ortholog:** Pcna (one-to-one ortholog; highly conserved including K164)
- **Length:** 261 amino acids (canonical isoform); homotrimer is the functional unit
- **GenAge:** Not listed as a candidate aging gene #gap/needs-canonical-id — no GenAge entry found; PCNA's aging relevance is via pathway membership rather than direct lifespan effect in a single-organism KO experiment

## Structure

PCNA forms a closed **homotrimeric ring** with pseudo-six-fold symmetry, encircling dsDNA through its central ~35 Å channel [^krishna1994]. The ring topology — confirmed by the 2.3 Å crystal structure — mimics the prokaryotic β-clamp processivity factor, demonstrating deep mechanistic conservation across domains of life.

Each 261-aa monomer folds into two topologically similar globular domains (N-domain and C-domain) connected by the **inter-domain connecting loop (IDCL)**, which protrudes from the face of the ring and constitutes the principal binding hub for PIP-box-containing partner proteins [^mailand2013]. Three monomers associate head-to-tail to close the ring, burying the monomer-monomer interfaces extensively.

**Key structural features:**

| Feature | Description |
|---|---|
| Ring inner diameter | ~35 Å — accommodates B-form dsDNA |
| PIP-box binding groove | On C-face of each monomer; principal interaction surface |
| IDCL | Residues ~119-133; flexible loop projecting from ring face |
| K164 | On the IDCL; site of monoubiquitination, K63-polyubiquitination, and SUMO modification |
| K254 | Secondary SUMO site; S-phase sumoylation |
| Y211 | EGFR phosphorylation site; stabilizes chromatin-associated PCNA |

## Loading onto DNA

PCNA cannot load itself onto DNA. The **Replication Factor C (RFC)** complex uses ATP hydrolysis to open the PCNA ring and deposit it around the 3' end of a primer-template junction [^choe2017]. This loading mechanism is obligate for all PCNA-dependent synthesis — RFC activity is limiting for replication initiation. After synthesis, RFC can also unload the clamp.

## Function in DNA replication

Once loaded, PCNA tethers the replicative polymerases **Pol δ** (lagging strand) and **Pol ε** (leading strand) via their PIP-box motifs, providing the processivity needed for high-fidelity genomic DNA synthesis [^choe2017]. Without PCNA, Pol δ is distributive and falls off after incorporating ~10 nucleotides; with PCNA, processivity extends to kilobases per binding event.

During Okazaki fragment maturation on the lagging strand, PCNA recruits:

1. **FEN1** — flap endonuclease that removes the 5' RNA primer flap; requires PCNA for optimal activity
2. **Ligase I (LIG1)** — seals the nick between adjacent Okazaki fragments; uses a PCNA-dependent loading mechanism

## Function in DNA repair

PCNA is essential for multiple repair pathways' gap-filling synthesis steps:

**Base excision repair (BER) — long-patch subpathway:** After AP-endonuclease incision, Pol δ/ε-PCNA extends the single-nucleotide repair patch into a 2–10 nt flap, which FEN1 removes; LIG1 then seals. PCNA is recruited to BER sites and co-localizes with BER enzymes at oxidative-damage foci [^mailand2013].

**Nucleotide excision repair (NER):** After dual-incision removes a ~27-30 nt damage-containing oligonucleotide, PCNA is loaded at the resulting single-stranded gap and recruits Pol δ/ε for gap-filling synthesis, followed by LIG1/XRCC1-LIG3 ligation.

**Mismatch repair (MMR):** PCNA physically interacts with **MutSα** (MSH2/MSH6) and **MutLα** (MLH1/PMS2) and provides the strand-discrimination signal in mammalian MMR. PCNA's asymmetric orientation on the DNA acts as a directional cue, directing excision toward the newly-synthesized strand [^mailand2013]. PCNA-K164 monoubiquitination can antagonize MMR by excluding MSH2/MSH6 from certain lesions, channeling them toward [[translesion-synthesis]] instead [^shah2024]. #gap/needs-replication

| Repair pathway | PCNA role |
|---|---|
| BER (long-patch) | Pol δ/ε processivity + FEN1 + LIG1 recruitment |
| NER (gap-fill) | Pol δ/ε processivity + LIG1 recruitment |
| MMR | Strand-discrimination platform; MutSα/MutLα docking |
| HR | Rad51 filament displacement; gap-fill after strand invasion |
| TLS | K164-mUb recruits Y-family polymerases (Pol η, ι, κ, REV1) |

## Post-translational regulation: the K164 switch

The K164 residue on the IDCL is the central regulatory node, first characterized by Hoege et al. 2002 in yeast and conserved in humans [^hoege2002]:

- **K164 monoubiquitination** (by RAD6/RAD18 E2/E3 pair): recruits Y-family translesion synthesis (TLS) polymerases via their ubiquitin-binding domains (UBZ/UBM). TLS polymerases (Pol η, Pol ι, Pol κ, REV1) can bypass damage-blocking lesions at the cost of reduced fidelity.
- **K164 K63-linked polyubiquitination** (by UBC13-MMS2 + HLTF/SHPRH E3s): promotes error-free template-switching (TS) over the damaged strand — a more accurate but structurally demanding damage tolerance pathway.
- **K164 SUMO2 modification** (by UBC9 E2-conjugating enzyme; no E3 ligase required): during normal S phase, recruits Srs2/RTEL1 to suppress unwanted recombination at replication forks. Note: Hoege 2002 originally characterized SUMO-1 modification in *S. cerevisiae*; UniProt P12004 records the human K164 site as SUMO2, not SUMO-1 — the SUMO isoform distinction is species-relevant. #gap/no-fulltext-access for Hoege 2002 (not_oa).
- **K11, K27 ubiquitination** (additional polyubiquitination sites): less well characterized in mammalian cells; relevant in proteotoxic stress.

The choice between TLS (mutagenic, fast) and TS (accurate, slow) represents a fundamental fidelity-vs-fitness trade-off; dysregulation of this switch in aged cells could contribute to elevated somatic mutation rates. #gap/needs-human-replication

## Role in aging

### PCNA and somatic mutation accumulation

The fidelity of PCNA-dependent damage tolerance is directly relevant to somatic mutation accumulation in aging tissues. `Pcna^K164R/K164R` mice (C57BL/6J background) are defective in both TLS and TS and show strongly accelerated aging-associated phenotypes in the hematopoietic compartment [^pilzecker2017]. The paper does **not** directly quantify base-substitution mutation rates in tissues; rather, it demonstrates functional and cellular evidence of replication-stress-induced genomic instability (increased γH2AX, hypersensitivity to cisplatin cross-linking). The inference that reduced error-free TS forces more mutagenic TLS is mechanistically well-grounded but not directly measured in this study. #gap/needs-human-replication

### PCNA in hematopoietic stem cell maintenance

Pilzecker et al. 2017 demonstrated that `Pcna^K164R/K164R` C57BL/6J knock-in mice (which cannot perform K164-dependent TLS or template switching) exhibit marked defects in HSC and progenitor cellularity with features of accelerated hematopoietic aging [^pilzecker2017]. Key quantitative findings in 2-month-old mice (femur counts, merged from two experiments, n=6/genotype):

- LSK population reduced 2.1-fold (41×10³ WT vs 19×10³ cells/femur mutant)
- LT-HSC reduced 1.4-fold; ST-HSC reduced 5.3-fold; MPP4 reduced 4.4-fold
- MPP2 (myeloid/erythroid-biased) selectively **increased** 2.1-fold — reflecting myeloid skew consistent with stressed hematopoiesis
- CMP decreased 2.5-fold; GMP decreased 1.9-fold; MEP decreased 4-fold; CLP decreased 2.4-fold

In competitive bone marrow transplantation (1×10⁶ Ly5.2 WT or mutant BM cells transplanted 1:1 with Ly5.1 WT into irradiated Ly5.1 recipients, n=2 independent experiments), Pcna^K164R/K164R HSCs contributed <5% at 5 weeks post-transplant (vs ~50-60% for WT), demonstrating a severe intrinsic reconstitution defect. Non-competitive transplants confirmed a 2.5-fold reduction in reconstitution efficiency.

The phenotype progressed with age: at 9-10 months, fold-changes in subset reductions were further enhanced. The mice also showed extreme sensitivity to low-dose cisplatin (0.8 mg/kg i.v.) — a dose 7.5-fold below the tolerable dose for C57BL/6J mice — with near-depletion of LSK, HSPC, LT-HSC, and ST-HSC. The paper specifically frames this as **accelerated aging** of the hematopoietic compartment rather than simple HSC exhaustion, driven by increased endogenous replication stress requiring DDT. This links PCNA-mediated damage tolerance directly to [[stem-cell-exhaustion]].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | K164, RAD6/RAD18, and TLS/TS pathways are conserved in humans; human K164R functional equivalents exist |
| Phenotype conserved in humans? | partial | Rall-Scharpf 2025 shows reduced poly-Ub PCNA in older human PBL women, suggesting age-associated DDT remodeling; ATLD2 (S228I hypomorph) shows progeroid features in humans |
| Replicated in humans? | no | K164R HSC phenotype is mouse-only (C57BL/6J); no human equivalent genetic model; human data are indirect (PBL DDT remodeling, ATLD2 case series) |

### PCNA and replication stress in aged tissues

A 2025 study in cycling peripheral blood lymphocytes (PBL) from 199 donors (young female n=44 mean age 23.0y, young male n=41 mean 22.4y, old female n=60 mean 74.3y, old male n=54 mean 74.1y) found sex-specific remodeling of PCNA ubiquitination and DDR pathway use with aging [^rall2025]:

- In **older women**: poly-Ub PCNA levels were significantly reduced (western blot; female n=17 young, n=15 old; p<0.05) while mono-Ub PCNA was unchanged. This was accompanied by reduced FANCD2 protein levels (~50% decrease in older vs younger women, p<0.01) and FANCD2 foci, indicating reduced FA pathway activity. Older women's PBL showed increased sensitivity to TLS-polymerase inhibitors: IC50 for POLη inhibitor PNR-7-02 decreased 4.5-fold (young: 30.43 µM; old: 6.718 µM; p<0.0001), consistent with increased TLS dependence. Fork spreading assays showed a trend toward longer IdU tracks (p=0.0847) without increased fork stalling — interpreted as nonclassical replication stress.
- In **older men**: no significant change in PCNA ubiquitination or FANCD2. Instead, PARP1 transcriptional upregulation (RNA-seq) and strongly increased sensitivity to PARP inhibitor IQD (IC50 dropped 3.3-fold: young <60y: 78.9 µM vs old >60y: 23.8 µM; p<0.0001). Women showed no significant PARP inhibitor sensitivity difference with age.

The study also examined HSPC from a subset of donors (young male age 23y, old male 52y, young female 19y, old female 60y); HSPC from older females showed elevated γH2AX signals, consistent with Pilzecker 2017 mouse data.

#gap/needs-replication — single study; sex differences in PCNA ubiquitination and PARP dependence require independent validation in additional cohorts and tissue types beyond PBL.

### PCNA as a proliferation marker

Clinically, PCNA (recognized by the PC10 monoclonal antibody) is a canonical immunohistochemical proliferation marker in pathology. Reduced PCNA staining in aged tissues reflects reduced proliferative capacity, consistent with replicative senescence and stem cell pool depletion. However, PCNA levels also change in post-mitotic cells in response to DNA damage (recruited to repair foci), so reduced PCNA in aged post-mitotic tissues may indicate altered repair capacity rather than just proliferation decline. #gap/no-mechanism

### ATLD2: hypomorphic PCNA mutations

The S228I variant in PCNA causes **Ataxia-Telangiectasia-Like Disorder 2 (ATLD2)** — a rare autosomal-recessive syndrome featuring UV-sensitivity, neurological defects (ataxia, sensorineural hearing loss, developmental delay), short stature, telangiectasia, and photosensitivity consistent with defective NER/MMR [UniProt P12004; disease annotation]. UniProt documents S228I as "a hypomorphic mutation affecting DNA repair in response to UV; results in significantly decreased interaction with FEN1, LIG1 and ERCC5." The A252V variant sometimes cited in the secondary literature is **not recorded in UniProt P12004** as an ATLD2-associated variant — claims about A252V should be verified against the primary ATLD2 clinical literature before use. #gap/needs-replication — ATLD2 clinical description based on very small case series.

## Pathway membership

- [[base-excision-repair]] — long-patch subpathway gap-fill synthesis; FEN1 + LIG1 recruitment
- [[nucleotide-excision-repair]] — post-incision gap-filling synthesis
- [[mismatch-repair]] — strand-discrimination platform; MutSα/MutLα docking
- [[dna-damage-response]] — sensor-effector scaffold at stalled/collapsed replication forks
- [[homologous-recombination]] — gap-fill after Rad51-mediated strand invasion
- [[translesion-synthesis]] — K164-mUb-dependent Y-family polymerase recruitment (implicit stub — no pathway page yet)

## Key interactors

- [[p21]] (CDKN1A) — most extensively documented PCNA-PIP interaction partner; p21 competitively inhibits PCNA interaction with replicative polymerases, enforcing cell-cycle arrest downstream of [[p53]]. p21 also has a role in BER coordination via PCNA binding.
- [[parp1]] — PARP1 is recruited to single-strand breaks; interacts with PCNA at BER foci; PARP-PCNA signaling coordinates repair with replication.
- [[atm]] — ATM phosphorylation cascade feeds into PCNA modification events (PCNA ubiquitination is triggered downstream of ATM/ATR via RPA coating of ssDNA at stalled forks).
- FEN1 — PIP-box interaction on PCNA C-face; required for Okazaki fragment maturation and long-patch BER (no protein page yet — implicit stub)
- RFC complex — PCNA loader/unloader; RFC1 is the large subunit (no protein page yet — implicit stub)
- Pol δ (POLD1) — primary lagging-strand replicative polymerase; PIP-box dependent PCNA interaction (no protein page yet — implicit stub)
- RAD18 — E3 ubiquitin ligase; monoubiquitinates K164 with RAD6/UBE2A upon replication-fork stalling (no protein page yet — implicit stub)
- Pol η (POLH) — TLS polymerase; recruited to K164-mUb PCNA via UBZ domain; catalyzes error-free bypass of cyclobutane pyrimidine dimers (no protein page yet — implicit stub)

## Pharmacology

**Druggability tier: 4 (aging context)** — no clinical drug engages PCNA for an aging indication. PCNA is heavily studied in oncology as a target (high proliferative index correlates with PCNA expression), but no PCNA-targeting drug is FDA-approved for any indication.

- **AOH1996** — small molecule that disrupts PCNA-partner interactions by binding a PCNA surface groove near the IDCL; shows potent anti-proliferative activity in cancer cell lines and tumor xenografts; being evaluated in early-phase oncology trials (no aging indication). #gap/needs-replication — no aging-specific data.
- **T2-AA (T2-amino alcohol)** — peptide mimetic that blocks PIP-box interactions with PCNA; purely research-stage probe with no clinical development. Useful for dissecting PCNA-partner interactions in cell-biology studies but not a therapeutic candidate.
- **PROTAC approaches** — multiple academic groups have described PCNA-targeting PROTACs with anti-cancer activity; none in aging-context development.

The absence of any PCNA modulator in clinical use for aging reflects PCNA's essentiality — complete loss is lethal, and partial inhibition risks suppressing all PCNA-dependent repair simultaneously.

## Aging interventions that interact with PCNA-dependent pathways

- [[dna-damage-response]] pathway modulators indirectly affect PCNA recruitment and modification
- [[senolytics]] eliminate cells with persistent PCNA repair foci (sites of irreparable DNA damage)
- [[caloric-restriction]] — reduces replication stress in some proliferating compartments, reducing the burden on PCNA-mediated damage tolerance; mechanism not fully characterized #gap/no-mechanism

## Limitations and gaps

- `#gap/needs-canonical-id` — No GenAge ID; PCNA has not been characterized as a direct aging gene in the HAGR framework, though its pathway roles are central to [[genomic-instability]].
- `#gap/needs-human-replication` — The PCNA K164R premature-aging HSC phenotype is mouse-only (C57BL/6J). Human evidence is limited to the rare ATLD2 disease (S228I hypomorph, very small case series) plus indirect evidence from Rall-Scharpf 2025 in PBL.
- `#gap/no-mechanism` — The precise mechanism by which PCNA-dependent damage tolerance fidelity declines with age (if it does) in human tissues is unknown. Whether reduced K164-Ub, altered RFC activity, or competition from p21 drives any age-related shift is unclear.
- `#gap/needs-replication` — Sex-specific shifts in PCNA polyubiquitination with aging (Rall-Scharpf 2025; reduced poly-Ub in older women's PBL) require validation in independent cohorts and additional tissue types.
- `#gap/no-fulltext-access` — Krishna 1994, Hoege 2002, and Mailand 2013 are closed-access (not_oa). Structure claims, K164 SUMO isoform characterization in yeast vs humans, and PIP-box hub review claims from these sources could not be verified against full PDFs.
- `druggability-tier: 4` — No aging-context PCNA modulator exists; Open Targets Platform returns no tractability assessments or known drugs for ENSG00000132646. The field is dominated by oncology. Whether partial PCNA modulation could reduce TLS infidelity in aged tissues without impairing replication or repair is entirely untested. #gap/no-mechanism

## Footnotes

[^krishna1994]: doi:10.1016/0092-8674(94)90014-0 · Krishna TS et al. · *Cell* 1994 · 79(7):1233-1243 · in-vitro (X-ray crystallography, *S. cerevisiae* PCNA) · 910 citations · original trimeric ring crystal structure; archive: not_oa

[^hoege2002]: doi:10.1038/nature00991 · Hoege C, Pfander B, Moldovan GL, Pyrowolakis G, Jentsch S · *Nature* 2002 · 419(6903):135-141 · in-vivo (yeast + mammalian cells) · 2181 citations · first demonstration that PCNA is monoubiquitinated (K164), K63-polyubiquitinated, and sumoylated by distinct E2/E3 enzymes; functional consequences for DNA repair pathway choice; archive: not_oa

[^mailand2013]: doi:10.1038/nrm3562 · Mailand N, Gibbs-Seymour I, Bekker-Jensen S · *Nat Rev Mol Cell Biol* 2013 · review · 384 citations · comprehensive review of PCNA-partner interactions and how PTMs regulate them for genome stability; archive: not_oa

[^choe2017]: doi:10.1016/j.molcel.2016.12.020 · Choe KN, Moldovan GL · *Mol Cell* 2017 · 65(3):380-392 · review · PCNA as "principal conductor at the replication fork": mechanistic overview of all known PCNA functions and regulatory inputs; includes comprehensive Table 2 of PTMs (K164 mono-Ub by RAD18/CDT2, K63-polyUb by HLTF/SHPRH, K164 SUMOylation by UBC9, Y211 phosphorylation by EGFR/c-Abl, K164 ISGylation by EFP, K13/K14/K20/K77/K80/K284 acetylation by CBP/p300); archive: downloaded (bronze OA)

[^pilzecker2017]: doi:10.1073/pnas.1706508114 · Pilzecker B, Buoninfante OA, van den Berk PCM, Lancini C, Song JY, Citterio E, Jacobs H · *PNAS* 2017 · 114(33):E6875-E6883 · in-vivo (Pcna^K164R/K164R knock-in mice; C57BL/6J background; n=6/genotype merged from 2 experiments; ages 2 mo and 9-10 mo) · p<0.001 for key LSK/LT-HSC/ST-HSC reductions (t-test) · PCNA K164 modification loss causes 2.1-fold LSK reduction, 5.3-fold ST-HSC reduction, and severe competitive reconstitution defect; myeloid skew toward MPP2; marked cisplatin hypersensitivity at sub-tolerable doses; hematopoietic phenotype progresses with age (9-10 mo) consistent with accelerated aging; archive: downloaded (bronze OA)

[^rall2025]: doi:10.1093/nar/gkaf498 · Rall-Scharpf M, Schlotter D, Koch P et al. (Wiesmuller L, senior) · *Nucleic Acids Research* 2025 · 53:gkaf498 · observational (cross-sectional) · n=199 total PBL donors: young female n=44 (mean 23.0y), young male n=41 (mean 22.4y), old female n=60 (mean 74.3y), old male n=54 (mean 74.1y); HSPC from subset of donors · sex-specific remodeling of PCNA ubiquitination during aging: reduced poly-Ub PCNA in older women (not men); reduced FANCD2 in older women; older women's PBL shift to mutagenic TLS bypass (4.5-fold lower POLη inhibitor IC50); older men show 3.3-fold increased PARP inhibitor sensitivity (p<0.0001); archive: downloaded (gold OA via PMC)

[^shah2024]: doi:10.1093/pnasnexus/pgae242 · Shah R, Aslam MA, Spanjaard A et al. · *PNAS Nexus* 2024 · in-vivo (Pcna^K164R intercross mouse genetics) + ex-vivo (Trp53kd immortalized MEF cell lines) · PCNA-K164-mUb dual role in Fanconi anemia ICL repair: essential for FA-ICL repair (Pcna^K164R/Fancg^-/- double mutant is embryonically lethal); coordinates TLS while excluding MSH2/MSH6 from ICL sites to channel ICL toward canonical FA repair; archive: downloaded (gold OA)
