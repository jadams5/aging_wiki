---
type: protein
aliases: [interferon alpha/beta receptor 2, IFN-α/β receptor 2, IFNAR-2, IFNARB, type I interferon receptor subunit 2, sIFNAR2 (soluble isoform)]
uniprot: P48551
ncbi-gene: 3455
hgnc: 5433
ensembl: ENSG00000159110
mouse-ortholog: Ifnar2
genage-id: null
pathways: ["[[type-i-interferon-signaling]]", "[[jak-stat-pathway]]"]
hallmarks: ["[[chronic-inflammation]]"]
sens-categories: []
druggability-tier: 1
gtex-aging-correlation: null   # #gap/not-populated; GTEx aging-correlation data not yet extracted for IFNAR2
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[chronic-inflammation]]", "[[cellular-senescence]]", "[[sasp]]"]
key-domains: [extracellular-FN-III-D1, extracellular-FN-III-D2, transmembrane-helix, JAK1-binding-intracellular-tail]
key-ptms: [Tyr337-phosphorylation, Tyr512-phosphorylation, N-glycosylation-Asn58-Asn87-Asn116-Asn188-Asn192]
known-interactors: ["[[jak1]]", "[[stat1]]", "[[stat2]]", "[[usp18]]", "[[irf9]]", "[[ifnar1]]"]
literature-checked-through: 2026-05-13
verified: true
verified-date: 2026-05-13
verified-by: claude
verified-scope: "Bastard 2021 cross-checked against verified studies/bastard-2021-anti-ifn-autoantibody-age-prevalence.md (PDF not re-read; canonical study page is verified). Stark & Darnell 2012 JAK1/TYK2 receptor-subunit assignments verified against local PDF (confirmed: JAK1→IFNAR2, TYK2→IFNAR1). TULIP-2 Morand 2020 verified against local PDF (p-value corrected P<0.001→P=0.001; CI and raw counts added; dosing interval clarified to every 4 weeks; bronchitis rate added). Active-trial count corrected 4→20 via live ClinicalTrials.gov v2 API query 2026-05-13. Zuo 2025 not_oa (closed-access): claims tagged #gap/no-fulltext-access; abstract-only sourcing flagged in body and footnote. Kalunian 2023, Órpez-Zafra 2017, Fricke-Galindo 2022, Bonafe 2020 not independently re-verified (PDFs pending download; archive status: hybrid/green/gold/green OA; qualitative claims preserved as seeded). Pestka 1997 DOI confirmed absent from PubMed (PMID-only citation correct; journal/title confirmed via efetch). UniProt P48551 identity fields not independently re-queried — confirmed via seeder banner note."
---

# IFNAR2 (interferon alpha/beta receptor subunit 2)

The **high-affinity signal-transducing subunit** of the heterodimeric type I interferon receptor. IFNAR2 binds IFN-α and IFN-β with high affinity (K_D ~10–100 pM for IFN-α2; IFNAR1 binds with ~1000× lower affinity alone) and constitutively associates with [[jak1]]. When type I IFN ligand induces pairing with IFNAR1 (the TYK2-associated low-affinity subunit), the activated IFNAR1/IFNAR2 heterodimer initiates JAK-STAT signaling that drives expression of several hundred interferon-stimulated genes (ISGs). A soluble circulating isoform (sIFNAR2) lacking the transmembrane domain acts as a natural decoy receptor. Aging-context relevance: IFNAR2 is the gatekeeper of all type I IFN downstream signaling; its chronic tonic activation by self-derived nucleic acids (leaked mtDNA, LINE-1 cDNA, cytosolic chromatin) drives [[chronic-inflammation|inflammaging]], while paradoxically ~4–6% of individuals aged >70 years harbor neutralizing autoantibodies against IFN-α/ω that functionally antagonize IFNAR2-mediated signaling at the ligand level.

## Identity

- **UniProt:** P48551 (INAR2_HUMAN); Swiss-Prot curated entry
- **NCBI Gene:** 3455
- **HGNC:** 5433 (symbol IFNAR2; synonyms IFNABR, IFNARB)
- **Ensembl:** ENSG00000159110
- **Chromosomal location:** 21q22.11 (same locus cluster as IFNAR1, IL10RB, and IFNGR2 — type I/II cytokine receptor gene cluster)
- **Mouse ortholog:** *Ifnar2* (Mus musculus; one-to-one ortholog; close functional conservation across mammals)
- **Protein length:** 515 amino acids (canonical long isoform, IFNAR2c)

**Naming note.** IFNAR2 has no separate pathway page; `[[type-i-interferon-signaling]]` is the canonical pathway wikilink. The protein file `ifnar2.md` and any future `ifnar1.md` file are the atomic protein pages.

## Protein structure

### Isoforms

Three isoforms arise from alternative splicing of the same primary transcript [^uniprot-p48551]:

| Isoform | Also called | Length | Localization | Role |
|---|---|---|---|---|
| Isoform 1 (IFNAR2c) | Long form | 515 aa | Cell membrane (single-pass type I) | Canonical signaling subunit; constitutively associates with JAK1 via intracellular tail |
| Isoform 2 (IFNAR2b) | Short form | 249 aa | Cell membrane | Contains ectodomain + short intracellular stub; unable to activate JAK1; dominant-negative function proposed |
| Isoform 3 (IFNAR2a / P40) | Soluble form (sIFNAR2) | 243 aa | Secreted | Ectodomain only; circulates in plasma and urine; functions as decoy receptor |

### Domain topology (canonical long isoform)

- **Signal peptide:** residues 1–26 (cleaved in mature protein)
- **Extracellular domain (ECD):** residues 27–243
  - Sub-domain D1 (FN-III repeat 1): residues 27–130; primary ligand-binding surface; contacts IFN-α/β
  - Sub-domain D2 (FN-III repeat 2): residues 131–243; involved in receptor dimerization with IFNAR1
  - Three disulfide bonds (Cys39–Cys122; Cys85–Cys93; Cys207–Cys227) stabilize the FN-III folds
  - Five N-glycosylation sites: Asn58, Asn87, Asn116, Asn188, Asn192
- **Transmembrane helix:** residues 244–264
- **Intracellular tail:** residues 265–515; constitutively binds JAK1 via the Box1/Box2 JAK-binding motif

## Function — IFN-α/β signal transduction

### High-affinity ligand binding and receptor dimerization

IFNAR2 binds IFN-α2 (and most other IFN-α subtypes) with high affinity as a monomeric receptor, while IFNAR1 alone binds with approximately 1000-fold lower affinity [^stark2012]. The binary IFN-α·IFNAR2 complex then recruits IFNAR1, which stabilizes the ternary signaling-competent heterotrimer. This asymmetric binding architecture (IFNAR2 = primary affinity determinant; IFNAR1 = signal-amplifying co-receptor) explains why IFNAR2 density is the dominant factor controlling cellular IFN sensitivity in dose-response experiments. IFN-β binds both subunits with higher affinity than IFN-α and forms a more stable complex, contributing to IFN-β's greater potency per molecule [^stark2012]. #gap/needs-replication — quantitative K_D values in primary cells under physiological conditions are sparse; most binding kinetics data derive from expressed recombinant ectodomains.

### JAK-STAT cascade activation

Upon ligand-induced heterodimerization [^stark2012]:

1. **Constitutive IFNAR2–JAK1 association** — JAK1 is bound to the intracellular tail of IFNAR2 (long isoform) in the resting state; this association is required for receptor surface stability and IFN-I response competence.
2. **TYK2 is the cognate kinase for IFNAR1** — ligand-induced proximity of the two receptor subunits brings JAK1 (via IFNAR2) and TYK2 (via IFNAR1) into juxtaposition.
3. **Trans-phosphorylation of JAK1 and TYK2** — each kinase phosphorylates the other in a reciprocal activation step.
4. **STAT1 (Tyr701) and STAT2 (Tyr689) phosphorylation** — activated JAK1/TYK2 phosphorylate recruited STAT1 and STAT2.
5. **ISGF3 complex assembly** — p-STAT1/p-STAT2 heterodimer recruits IRF9 (interferon regulatory factor 9) to form the trimeric ISGF3 transcription factor.
6. **Nuclear import and ISG induction** — ISGF3 binds ISRE elements (consensus 5′-AGTTTCNNTTTCC-3′) and drives transcription of interferon-stimulated genes (ISGs), including antiviral effectors (*OAS1*, *MX1*, *IFIT1*), immune-modulatory genes, and feedback regulators.

### Negative regulation: USP18

A critical negative-feedback node is **USP18** (ubiquitin-specific protease 18), which binds the intracellular tail of IFNAR2 and displaces JAK1 — preventing sustained STAT phosphorylation and attenuating the IFN-I response [^uniprot-p48551]. USP18 is itself an ISG (induced by IFN-I signaling), creating a delayed-negative-feedback loop that limits chronic signaling. Loss-of-function mutations in USP18 cause severe autoinflammatory disease in humans, underscoring that unrestrained IFNAR2-JAK1 signaling is intrinsically pathogenic.

## Soluble IFNAR2 (sIFNAR2): natural IFN-I antagonist

The secreted P40 isoform (sIFNAR2, also IFNAR2a) is detectable in human plasma and urine [^pestka1997]. As the ectodomain alone — without transmembrane or intracellular components — sIFNAR2 can bind IFN-α and IFN-β and sequester them in the extracellular space, preventing engagement of membrane-bound IFNAR1/IFNAR2 heteroreceptor. This decoy-receptor mechanism is analogous to soluble TNF receptor or IL-1Ra in attenuating inflammatory cytokine signaling.

Clinical correlate: In multiple sclerosis patients untreated with interferon therapy, serum sIFNAR2 levels are significantly lower than in healthy controls. IFN-β therapy increases sIFNAR2 levels substantially within one year; other MS therapies do not [^orpez2017]. In severe COVID-19, **higher sIFNAR2 levels in plasma correlated with survival** relative to non-survivors (Fricke-Galindo 2022) [^fricke2022], suggesting that greater decoy-receptor expression may buffer against excessive systemic IFN-I signaling in the context of acute viral infection. #gap/no-mechanism — the directionality of sIFNAR2 as protective vs. IFN-I–dampening (which could impair antiviral defense) is context-dependent and not fully characterized in aging.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | JAK1/TYK2/STAT1/STAT2 assignments identical in human and mouse; high sequence conservation |
| Phenotype conserved in humans? | yes | IFNAR2-null mice are susceptible to viral infection; human IFNAR2-deficiency (immunodeficiency-45) causes similar vulnerability |
| Replicated in humans? | yes (mechanistic) | Core JAK-STAT signaling mechanism well established; sIFNAR2 physiology needs further human characterization |

## Role in aging

### IFNAR2 as gatekeeper of inflammaging

[[chronic-inflammation|Inflammaging]] — the chronic low-grade sterile inflammation of aging — is mechanistically driven in part by tonically elevated type I IFN production. Upstream inducers include:

- **cGAS-STING activation** by leaked mitochondrial DNA, cytosolic chromatin from senescent cells, and nuclear lamina-disruption fragments (see [[cgas-sting]] and [[sting]])
- **Retroelement reactivation** — LINE-1 and endogenous retrovirus (ERV) elements that become transcriptionally de-repressed in aged epigenomes generate cytosolic cDNA sensed by [[cgas]]
- **Persistent DNA damage** (unrepaired DSBs in senescent cells) activates the [[dna-damage-response]] → IRF3/IRF7 → IFN production

IFNAR2 is the obligate transducer of all of these upstream IFN-I signals: without IFNAR2, no ISG induction occurs regardless of how much IFN-I is produced. Therefore, IFNAR2-level modulation (whether by anifrolumab, sIFNAR2 decoy expression, or USP18 induction) is among the most proximal pharmacological handles on the inflammaging phenotype [^bonafe2020]. #gap/needs-human-replication — direct demonstration that reducing IFNAR2 signaling amplitude reduces inflammaging biomarkers in aged humans is lacking; evidence is primarily mechanistic and from autoimmune-indication trials.

### STAT1 modifications impair IFNAR2 interaction with aging

A 2025 study found that aging promotes β-hydroxybutyrylation of STAT1 at lysine 592 (Kbhb-STAT1), which specifically impairs STAT1's interaction with the IFNAR2 intracellular domain, dampening downstream ISG induction in response to IFN-I stimulation [^zuo2025]. This represents an aging-specific post-translational mechanism that functionally decouples IFNAR2 from STAT1, weakening the antiviral IFN-I response in aged tissues even when surface receptor levels are unchanged. O-GlcNAcylation of STAT1 competes with Kbhb modification and preserves receptor–STAT1 coupling; fructose-mediated enhancement of O-GlcNAc on STAT1 partially restored antiviral competence in aged mice [^zuo2025]. #gap/needs-replication — single study; human evidence absent. #gap/no-fulltext-access — Zuo 2025 full text is closed-access (not_oa per a local paper archive); claims sourced from abstract only.

### Bastard 2021: anti-IFN-α/ω autoantibodies as a natural IFNAR2-pathway antagonist

The most striking aging-context finding for IFNAR2 comes not from genetics or pharmacology but from a large population-level study of spontaneously occurring autoantibodies. Bastard et al. (2021) demonstrated that neutralizing autoantibodies against IFN-α2 and/or IFN-ω are present in **~0.18% of individuals aged 18–69 years** but rise to **~1.1% at 70–79 years** and **~3.4% at >80 years** (high-concentration assay; 10 ng/mL; n=34,159 uninfected general-population individuals). By a more sensitive lower-concentration assay (~100 pg/mL, closer to physiological IFN concentrations), overall prevalence in those >80 years reaches **~6.3%** [^bastard2021].

These autoantibodies function as pre-formed soluble IFNAR pathway antagonists: by binding and neutralizing secreted IFN-α/ω in the extracellular space, they prevent IFNAR2 engagement before ligand-receptor contact can occur. The result is a functional IFN-I signaling deficiency in otherwise immunocompetent elderly individuals — invisible to standard clinical immune workups. The same 2021 study showed that these autoantibodies account for approximately **20% of COVID-19 deaths** (18.5% of 1,124 deceased patients at the sensitive assay; 13.3% at the stringent assay) [^bastard2021]. Autoantibodies predated SARS-CoV-2 infection in six individuals with pre-pandemic samples available.

**Mechanistic paradox of aging.** Two opposing states coexist in the aged type I IFN system:

1. **Chronic tonic IFN-I production** (from cGAS-STING, mtDNA leakage, LINE-1 reactivation) → drives inflammaging via IFNAR2 → STAT1/2 → ISG induction
2. **Autoantibody-mediated extracellular IFN-α/ω neutralization** (affects ~4–6% of >70-year-olds) → impairs antiviral IFNAR2 signaling at the ligand-availability level despite normal receptor expression

These two states may overlap in the same individual. The functional consequence of combined chronic intracellular IFN-I signaling with extracellular IFN-I neutralization is not known. #gap/no-mechanism

See [[studies/bastard-2021-anti-ifn-autoantibody-age-prevalence]] for full methodological details and verified quantitative figures.

## Pharmacology

### Anifrolumab (IFNAR1-targeting mAb; FDA-approved 2021)

**Anifrolumab** (Saphnelo; AstraZeneca) is a fully human IgG1κ monoclonal antibody that **binds IFNAR1** (not IFNAR2 directly) and blocks the assembly of the functional IFN-α/β receptor heterodimer [^morand2020]. By occupying IFNAR1 and preventing its association with the IFN-α/β·IFNAR2 binary complex, anifrolumab effectively antagonizes signaling through both receptor subunits — including IFNAR2-dependent JAK1 activation and downstream STAT phosphorylation.

**IFNAR1 vs IFNAR2 targeting distinction.** Anifrolumab does not bind IFNAR2. However, because IFNAR2 requires IFNAR1 as a co-receptor for signaling (the heterodimer is the functional unit), anifrolumab achieves downstream functional antagonism of IFNAR2-JAK1 signaling by disrupting complex formation. A therapeutic antibody targeting IFNAR2 directly would have the same functional consequence but different binding epitope. No IFNAR2-specific clinical-stage antibody is currently FDA-approved.

**Clinical evidence (SLE).** The TULIP-2 phase 3 RCT (n=362; 180 anifrolumab 300 mg IV every 4 weeks vs 182 placebo) achieved 47.8% BICLA (British Isles Lupus Assessment Group-based Composite Lupus Assessment) response rate (86/180) vs 31.5% (57/182) for placebo (adjusted difference 16.3 percentage points; 95% CI 6.3–26.3; P=0.001); significant glucocorticoid dose reduction and skin disease improvement [^morand2020]. FDA approved July 2021 for moderate-to-severe systemic lupus erythematosus (SLE). A 3-year blinded extension study (TULIP LTE; n from TULIP extension cohort) showed no new safety signals, sustained glucocorticoid-sparing effects, and comparable serious adverse event rates between anifrolumab and placebo arms [^kalunian2023]. Herpes zoster occurred in 7.2% of treated patients in TULIP-2, consistent with expected IFN-I suppression effects on viral surveillance.

**Active trials.** As of 2026-05-13, ClinicalTrials.gov lists 20 active or recruiting studies with anifrolumab (RECRUITING or ACTIVE_NOT_RECRUITING). These include Phase 3 interventional trials (subcutaneous formulation SLE — NCT04877691; cutaneous lupus — NCT06015737; proliferative lupus nephritis — NCT05138133; subcutaneous SLE — NCT06455449, NCT05835310, NCT07430306), a Phase 2 cardiovascular-risk biomarker study in SLE (NCT05440422), a Phase 4 post-marketing pregnancy registry (NCT06594068), an exploratory Phase 3 systemic sclerosis study (DAISY; NCT05925803), and multiple non-interventional real-world effectiveness registries. No registered trial has an explicit aging or inflammaging primary endpoint.

**Aging-translational candidate status.** Anifrolumab's mechanism — blunting tonic IFNAR-mediated ISG induction — directly targets the molecular driver of type I IFN-driven inflammaging. Off-label use in elderly patients with autoimmune overlap syndromes driven by IFN-I signatures (e.g., dermatomyositis, Aicardi-Goutières-spectrum conditions in elderly) is an emerging investigational area. Dermatomyositis serum activates type I IFN signaling in skeletal muscle via IFNAR1/2; IFNAR1 blockade or JAK1 inhibition with ruxolitinib prevented serum-induced muscle weakness in an ex vivo model (Kaewin et al. 2026, ARD) [^kaewin2026]. However, direct evidence that anifrolumab or equivalent IFNAR-targeting agents reduce inflammaging biomarkers (e.g., ISG score, CRP, IL-6) or improve healthspan endpoints in aging humans is absent. #gap/needs-human-replication

**druggability-tier rationale.** Tier 1 is assigned under the aging-context convention (CLAUDE.md): a clinical drug (anifrolumab) exists that directly engages the IFNAR1/IFNAR2 signaling complex and is FDA-approved. Anifrolumab binds IFNAR1 rather than IFNAR2 directly, but blocks IFNAR2-dependent downstream signaling by heterodimer disruption — making the receptor complex effectively tier-1 pharmacologically addressable. A strict per-subunit reading (anifrolumab targets IFNAR1, not IFNAR2) could argue for tier-2 for IFNAR2 specifically; however, the functional consequence for IFNAR2 signaling is identical whether IFNAR1 or IFNAR2 is targeted, and the complex-level pharmacology is the relevant unit for this receptor pair. This choice is documented here per the aging-context convention.

## Immunodeficiency-45 (loss-of-function context)

Homozygous or compound-heterozygous loss-of-function variants in *IFNAR2* cause **Immunodeficiency-45** (OMIM 614172) — autosomal recessive susceptibility to severe viral infections (particularly herpes viruses, viral encephalitis) with relative protection from autoimmune disease. This Mendelian phenotype confirms that IFNAR2 is non-redundant for antiviral IFN-I signaling in humans and establishes the directionality: reduced IFNAR2 function → more severe viral infections, not simply IFN-I pathway attenuation.

## Pathway membership

- [[type-i-interferon-signaling]] — IFNAR2 is a core node (key-nodes list); the obligate signal-transducing subunit of the IFN-I receptor heterodimer
- [[jak-stat-pathway]] — IFNAR2 → JAK1 → STAT1/STAT2 → ISGF3 is the canonical JAK-STAT1 branch for IFN-I

## Key interactors

- [[ifnar1]] (implicit stub) — the TYK2-associated low-affinity co-receptor subunit; pairs with IFNAR2 to form the functional heterodimer; anifrolumab's direct binding target
- [[jak1]] — constitutively bound to IFNAR2 intracellular tail; required for signal competence
- [[tyk2]] — constitutively bound to IFNAR1; cross-phosphorylated with JAK1 upon receptor activation
- [[stat1]] — primary downstream STAT recruited; phosphorylated Tyr701
- [[stat2]] (implicit stub) — STAT2 Tyr689 phosphorylation; heterodimerizes with STAT1 in ISGF3
- [[irf9]] — associates with p-STAT1/p-STAT2 to complete ISGF3 trimeric TF
- [[usp18]] — negative regulator; binds IFNAR2 intracellular tail to displace JAK1; limits sustained signaling; USP18 is an ISG (delayed feedback)
- [[cgas]] / [[sting]] — upstream inducers of IFN-I ligand production (not direct IFNAR2 interactors, but key upstream nodes in the aging-dysregulation chain)

## Limitations and gaps

- **sIFNAR2 physiology in aging is poorly characterized.** Whether sIFNAR2 plasma levels change with aging, and whether higher sIFNAR2 is net-protective (buffers inflammaging) or net-deleterious (limits antiviral defense), is not established in aged cohorts. #gap/needs-human-replication
- **STAT1–IFNAR2 uncoupling in aging (Zuo 2025) requires independent replication.** The β-hydroxybutyrylation mechanism is a single study in mice; human confirmation is absent. #gap/needs-replication
- **No aging-indication clinical data for anifrolumab.** All clinical evidence is in autoimmune disease (SLE, dermatomyositis). Whether IFNAR-blockade reduces inflammaging biomarkers or extends healthspan in elderly individuals without diagnosed autoimmune disease is untested. #gap/needs-human-replication
- **IFNAR1 vs IFNAR2 separate protein pages.** The functional unit is the heterodimer; mechanistic claims about subunit-specific contributions are partially inferred. [[ifnar1]] lacks its own protein page as of 2026-05-13.
- **GTEx aging expression data not populated.** `gtex-aging-correlation` field is null; requires SOP `sops/finding-tissue-expression.md` to extract tissue-by-age correlation data. #gap/not-populated
- **Mendelian randomization evidence absent.** No MR instrument has been published for IFNAR2 germline variation; `mr-causal-evidence: not-tested`.

## Cross-references

- [[pathways/type-i-interferon-signaling]] — canonical pathway page; IFNAR2 is listed as a key node; mechanistic details in receptor-signaling section
- [[pathways/jak-stat-pathway]] — downstream signaling relay
- [[hallmarks/chronic-inflammation]] — primary aging-relevant hallmark modulated by IFNAR2
- [[hallmarks/cellular-senescence]] — senescent cells produce IFN-I via cGAS-STING; IFNAR2 mediates ISG induction and paracrine senescence spread
- [[hallmarks/disabled-adaptive-immunity]] — Bastard 2021 anti-IFN autoantibodies represent acquired IFN-I immunodeficiency in the aged; cross-link via IFNAR2 pathway
- [[studies/bastard-2021-anti-ifn-autoantibody-age-prevalence]] — population evidence for anti-IFN-α/ω autoantibody prevalence with aging; verified study page with full quantitative figures
- [[molecules/proteins/ifnar1]] (implicit stub) — IFNAR1 subunit page; anifrolumab's direct target
- [[molecules/proteins/jak1]] — constitutive IFNAR2 intracellular partner
- [[molecules/proteins/stat1]] — primary signaling effector downstream of JAK1
- [[molecules/proteins/usp18]] (implicit stub) — critical feedback suppressor of IFNAR2 signaling
- [[molecules/compounds/anifrolumab]] (implicit stub) — anti-IFNAR1 mAb; FDA-approved for SLE 2021; potential inflammaging modulator

## Footnotes

[^uniprot-p48551]: UniProt P48551 (INAR2_HUMAN), accessed 2026-05-13 via REST endpoint `https://rest.uniprot.org/uniprotkb/P48551` · Swiss-Prot (manually curated) entry; isoforms, domain topology, PTMs, and interaction data confirmed.

[^stark2012]: doi:10.1016/j.immuni.2012.03.013 · Stark GR, Darnell JE Jr · *Immunity* 2012 · n=not applicable · review · model: human; canonical review of JAK-STAT signaling mechanism; IFNAR2–JAK1 and IFNAR1–TYK2 constitutive-association assignments confirmed; IFN-β higher-affinity binding than IFN-α confirmed; ISGF3 assembly mechanism (p-STAT1/p-STAT2/IRF9; ISRE motif); PDF locally available at DOI lookup `10.1016/j.immuni.2012.03.013`

[^bastard2021]: [[studies/bastard-2021-anti-ifn-autoantibody-age-prevalence]] · Bastard P, Casanova JL et al. · *Science Immunology* 2021 · n=40,016 (34,159 uninfected + 3,595 critical COVID-19 + 623 severe COVID-19 + 1,639 mild/asymptomatic) · observational · model: humans; prevalence of neutralizing anti-IFN-α/ω autoantibodies 0.18% in <70y, 1.1% at 70–79y, 3.4% at >80y (high-concentration assay; n=34,159); ~6.3% at >80y by sensitive assay; ~20% of COVID-19 deaths attributed to these autoantibodies; autoantibodies predate infection; PDF locally available at DOI lookup `10.1126/sciimmunol.abl4340`

[^morand2020]: doi:10.1056/NEJMoa1912196 · Morand EF et al. · *New England Journal of Medicine* 2020 (TULIP-2 trial) · n=362 (180 anifrolumab, 182 placebo; modified ITT) · rct · model: human SLE patients; BICLA response 47.8% (86/180) vs 31.5% (57/182) placebo (adjusted difference 16.3 pp; 95% CI 6.3–26.3; P=0.001); herpes zoster 7.2% treated; bronchitis 12.2% treated; one death from pneumonia in anifrolumab arm; FDA approved July 2021 for SLE; PDF locally available via a local paper archive

[^kalunian2023]: doi:10.1002/art.42392 · Kalunian KC et al. · *Arthritis & Rheumatology* 2022 (published 2023 in print) · rct (3-year extension) · model: human SLE (TULIP extension cohort); no new safety signals; sustained glucocorticoid-sparing effect; comparable SAE rates between arms; archive status pending download

[^orpez2017]: doi:10.1177/1352458516667564 · Órpez-Zafra T et al. · *Multiple Sclerosis Journal* 2017 · n=MS patients + controls · observational · model: humans; sIFNAR2 significantly lower in naïve MS and CIS vs healthy controls; IFN-β therapy increased sIFNAR2 within 1 year; archive status pending download

[^fricke2022]: doi:10.3389/fimmu.2022.949413 · Fricke-Galindo I et al. · *Frontiers in Immunology* 2022 · n=severe COVID-19 cohort · observational · model: humans; higher sIFNAR2 plasma levels in COVID-19 survivors vs non-survivors; archive status pending download

[^pestka1997]: PMID 9208871 · Pestka S · *Seminars in Oncology* 1997 · review · model: human/general; foundational review documenting three IFNAR2 isoforms (IFNAR2a soluble/P40; IFNAR2b short membrane; IFNAR2c long membrane); DOI not confirmed via archive

[^bonafe2020]: doi:10.1016/j.cytogfr.2020.04.005 · Bonafè M, Prattichizzo F et al. · *Cytokine & Growth Factor Reviews* 2020 · review · model: human aging context; proposes that aging-related impaired type I IFN response from chronic inflammation interacts with COVID-19 severity; archive status pending download

[^zuo2025]: doi:10.1038/s41423-025-01266-x · Zuo Y, Wang Q et al. · *Cellular & Molecular Immunology* 2025 · experimental (molecular; aged mouse) · model: aging mice and cell lines; aging-induced STAT1 Kbhb at Lys592 impairs STAT1–IFNAR2 interaction; O-GlcNAc modification on STAT1 competes with Kbhb and preserves receptor–STAT1 coupling; fructose partially restores antiviral IFN-I immunity in aged mice; **NOT VERIFIED** — paper is closed-access (not_oa per a local paper archive); claims sourced from abstract only #gap/no-fulltext-access

[^kaewin2026]: doi:10.1016/j.ard.2026.02.018 · Kaewin S et al. · *Annals of the Rheumatic Diseases* 2026 · experimental (ex vivo) · model: human dermatomyositis serum + muscle tissue; IFNAR1 blockade or JAK1/2 inhibition (ruxolitinib) prevented dermatomyositis-serum-induced muscle weakness; DOI not yet indexed in archive (2026 publication)
