---
type: protein
aliases: [MYH, MUTYH, MutY homolog, adenine DNA glycosylase, hMYH, MUTYH_HUMAN]
uniprot: Q9UIF7
ncbi-gene: 4595
hgnc: 7527
ensembl: ENSG00000132781
genage-id: null
mouse-ortholog: Mutyh
pathways: ["[[base-excision-repair]]", "[[dna-damage-response]]"]
hallmarks: ["[[genomic-instability]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
key-domains: [HhH-GPD glycosylase, iron-sulfur-cluster-loop, NUDIX-like, PIP-box]
known-interactors: ["[[ogg1]]", "[[pcna]]", "[[apc]]"]
druggability-tier: 4
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[genomic-instability]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Al-Tassan 2002 (local PDF), Slupska 1996 (local PDF), Slupska 1999 (local PDF), Grasso 2015 (local PDF) verified against primary sources. Banda 2017 verified via PMC5457711 full text. Cheadle 2007 and Sheng 2012 are closed-access (not_oa) — claims from these sources tagged #gap/no-fulltext-access. UniProt Q9UIF7 identity fields (546 aa, D131, D233) confirmed via REST API. NCBI Gene 4595 confirmed. Open Targets ENSG00000132781 entry confirmed (has entry — #gap/no-opentargets-entry removed). GenAge null confirmed. Druggability tier 4 (aging-context) retained."
---


# MUTYH (MutY DNA glycosylase)

MUTYH is a DNA repair enzyme and anti-mutator glycosylase that excises misincorporated **adenine** from A:8-oxoguanine (8-oxoG) mispairs — preventing the G:C → T:A transversion signature that accumulates with oxidative stress and aging. Deficiency causes MUTYH-associated polyposis (MAP), an autosomal recessive colorectal cancer syndrome driven by oxidative mutagenesis.

## Identity

- **UniProt:** Q9UIF7 (MUTYH_HUMAN)
- **NCBI Gene:** 4595
- **HGNC symbol:** MUTYH (alias: MYH)
- **Ensembl:** ENSG00000132781
- **Mouse ortholog:** Mutyh (one-to-one ortholog)
- **Length:** 546 amino acids (UniProt canonical isoform; note — alternative isoforms exist; see Limitations)
- **Subcellular location:** Nucleus and mitochondrion

## The GO / MUTYH system: mechanism of action

8-Oxoguanine (8-oxoG) is the most abundant oxidative DNA base lesion, generated continuously by reactive oxygen species (ROS). It accumulates especially at replication forks and in post-mitotic tissues with aging. The problem with 8-oxoG is that it is mutagenic: during replication, 8-oxoG preferentially mispairs with adenine (A) rather than cytosine (C), because 8-oxoG adopts a *syn* conformation that mimics thymine in the Hoogsteen face [^banda2017].

Without repair, the A:8-oxoG mispair propagates as:

```
Round 1 replication: G:C  → A:8-oxoG mispair
Round 2 replication: A:8-oxoG → A:T (transversion complete)
Net result:          G:C → T:A transversion
```

The **GO system** (named after the E. coli MutG/MutM and MutY pathway) prevents this via two complementary glycosylases:

1. **OGG1** (MutM homolog) — removes 8-oxoG from 8-oxoG:C pairs (the "correct" pairing) before mismatch occurs. Prevents the initial lesion from being a template.
2. **MUTYH** (MutY homolog) — acts *after* misincorporation. It excises the incorrectly incorporated **A** from the A:8-oxoG mispair, generating an abasic site. APE1 then nicks the strand, and subsequent BER restores the 8-oxoG:C pair. OGG1 then removes the 8-oxoG, completing restoration to G:C.

Together, OGG1 and MUTYH constitute a two-enzyme defense against the G:C → T:A transversion. MUTYH's role is **post-replicative anti-mutator**: it acts on the new strand to protect the template [^slupska1996].

## Domain architecture

MUTYH is a modular protein organized into three functional regions [^banda2017]:

| Domain | Residues (approx) | Function |
|---|---|---|
| HhH-GPD glycosylase domain | ~1–295 | Adenine excision; contains the iron-sulfur cluster loop (FCL) and helix-hairpin-helix (HhH) motif for DNA binding |
| Iron-sulfur cluster loop (FCL) | within glycosylase domain | [4Fe-4S] cluster; structural; positions the enzyme on DNA |
| Linker | ~295–350 | Connects glycosylase to NUDIX-like domain |
| NUDIX-like domain | ~350–546 | Binds PCNA via PIP box; targets MUTYH to the replication fork |

**Active site (UniProt Q9UIF7, canonical 546 aa isoform):** Asp-131 is the catalytic proton donor/acceptor in adenine excision; Asp-233 stabilizes the transition state. These are confirmed against UniProt Q9UIF7 REST API. Banda 2017 uses the shorter 535 aa isoform α-3 (UniProt Q9UIF7-3) and reports the equivalent residues as Glu-120 and Asp-222 — a consistent 11-aa offset from the canonical isoform numbering. The seeder-brief values D138/E37 are not found in either source and should not be propagated.

**PIP box:** A PCNA-interacting protein (PIP) motif in the C-terminal NUDIX-like domain recruits MUTYH to replication forks, enabling it to scan newly synthesized DNA for A:8-oxoG mispairs in real time [^banda2017].

## Expression and subcellular localization

MUTYH localizes to both the **nucleus** and **mitochondria**, reflecting dual protection against nuclear genomic 8-oxoG and mitochondrial DNA (mtDNA) oxidative mutagenesis. MtDNA is particularly vulnerable to 8-oxoG lesions because it lacks histones and is proximal to the electron transport chain — a major ROS source [^slupska1999].

## Role in aging

### 8-oxoG burden accumulates with age

Banda 2017 reports that 8-oxoG occurs within the human genome "approximately once per million guanine residues" [^banda2017]. The oft-cited figure of ~10^4–10^5 8-oxoG lesions per cell per day circulates in the BER review literature but is **not sourced from Banda 2017** — the paper does not state a per-cell-per-day rate. #gap/unsourced — the 10^4–10^5/cell/day figure requires a primary citation; do not attribute to Banda 2017. MUTYH (with OGG1) is one of the primary buffers against 8-oxoG-derived G:C → T:A transversions. Age-associated decline in BER activity — including reduced OGG1 and MUTYH expression in some tissues — is proposed to contribute to the mutational burden observed in aged cells [^banda2017]. #gap/needs-human-replication — direct evidence for age-dependent MUTYH downregulation in human tissues is limited.

### MUTYH-associated polyposis (MAP): evidence that MUTYH loss drives mutagenesis

MAP is the clearest human phenotype demonstrating MUTYH's anti-mutator role. Al-Tassan et al. (2002) identified biallelic MUTYH mutations (Tyr165Cys + Gly382Asp compound heterozygotes) in three siblings with multiple colorectal adenomas [^altassan2002]. Key features of MAP:

- **Inheritance:** Autosomal recessive — distinguishes MAP from familial adenomatous polyposis (FAP; autosomal dominant *APC* mutation)
- **Mutational signature:** Characteristic G:C → T:A transversions in *APC* — Al-Tassan 2002 identified 15/18 somatic APC mutations as G:C→T:A transversions across 11 tumors from family N, a significantly higher proportion than in sporadic CRC or FAP tumors (15/18 vs 49/503 sporadic, P=2.77×10⁻¹²; and vs 15/308 FAP, P=7.69×10⁻¹²) [^altassan2002]. *KRAS* codon 12 transversions are also a known MAP feature but are not established by Al-Tassan 2002 — cite subsequent MAP cohort literature for that claim.
- **Polyp burden:** Typically 10–100 adenomas (oligopolyposis); lower burden than classic FAP
- **Penetrance:** ~90% lifetime colorectal cancer risk in biallelic carriers; heterozygous carriers have ~1.5–2× elevated risk vs general population
- **Prevalence:** ~1–2% of colorectal cancer cases; MUTYH is the second most common cause of inherited polyposis after *APC* [^cheadle2007] #gap/no-fulltext-access — Cheadle 2007 is closed-access; prevalence figure not independently verified

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | MUTYH is the direct human homolog of E. coli MutY; GO system conserved |
| Phenotype conserved in humans? | yes | MAP is a defined human disease with characteristic mutational signature |
| Replicated in humans? | yes | Al-Tassan 2002 confirmed in multiple subsequent cohort studies |

### Mouse KO evidence

Grasso et al. (2015) used a two-stage AOM/DSS inflammation-dependent carcinogenesis protocol in Mutyh⁻/⁻ mice (n=20/genotype for the AOM/DSS arm). Key findings: (1) Mutyh⁻/⁻ mice showed significantly lower survival than wild-type under combined AOM/DSS treatment (35% vs 70%, p=0.011 by Log-rank test); (2) AOM/DSS-induced colonic adenomas were more numerous and more frequently tubulo-villous in Mutyh⁻/⁻ mice; (3) 3/7 Mutyh⁻/⁻ mice developed adenocarcinomas vs 0/14 wild-type [^grasso2015]. Note: Grasso 2015 demonstrates increased adenoma number, severity, and immunological inflammation response in the Mutyh KO — it does not independently demonstrate the G:C→T:A transversion mutational signature in mouse tumors (that evidence comes from earlier KO studies). The G:C→T:A signature in Mutyh⁻/⁻ intestinal tumors is established by other groups; #gap/needs-replication for this specific attribution.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in mouse? | yes | Mutyh KO mice develop increased colonic adenomas and adenocarcinomas under AOM/DSS protocol; the broader literature establishes G:C→T:A transversion signature in Mutyh⁻/⁻ intestinal tumors [^grasso2015] |
| Phenotype conserved in humans? | yes | MAP (human) mirrors the mouse KO tumor phenotype |
| Replicated in humans? | yes | Multiple human cohorts confirm MAP genetics |

### Neurodegeneration: MUTYH as driver vs. suppressor

A counterintuitive aging-relevant finding: in the 8-oxoG-accumulation context of neurodegeneration (Parkinson's disease, Alzheimer's disease mouse models), MUTYH activity can be **neurotoxic** rather than neuroprotective. Sheng et al. (2012) showed that MUTYH-mediated BER of A:8-oxoG in post-mitotic neurons generates strand breaks and activates PARP1, leading to cell death — and that MUTYH deficiency was *neuroprotective* in this context [^sheng2012] #gap/no-fulltext-access. This is the "futile repair" or "BER-mediated neurodegeneration" hypothesis: in non-dividing cells where the mutational consequence is irrelevant, MUTYH excision of A creates cytotoxic intermediates. #gap/contradictory-evidence — MUTYH is anti-mutator/anti-cancer in dividing cells but potentially pro-degenerative in post-mitotic neurons. Note: Sheng 2012 (JCI) is closed-access and could not be verified against the full PDF in this pass.

## Pharmacology and druggability

**Druggability tier: 4 (aging-context)** — No MUTYH-directed small molecule drug or probe exists. MUTYH is not a conventional drug target; the therapeutic rationale would require either:
- Gene therapy to restore MUTYH in MAP patients (experimental; no human trial)
- MUTYH inhibition in neurons (proposed for neurodegeneration; no validated probe)

The dominant clinical management of MAP is colonoscopic surveillance and prophylactic colectomy for biallelic carriers.

MUTYH (ENSG00000132781) has an entry in Open Targets Platform with 445 associated disease entries and tractability annotations including "Approved Drug" (SM, AB, PR modalities) and "Structure with Ligand" (SM). However, the "Approved Drug" tractability labels reflect drugs associated with MUTYH-related diseases (colorectal cancer) at the disease-association level — not MUTYH-directed small molecules. No MUTYH-directed drug or validated aging probe exists. Druggability tier 4 (aging-context) is confirmed.

## Pathway membership

- [[base-excision-repair]] — MUTYH is a core BER glycosylase in the GO sub-pathway
- [[dna-damage-response]] — upstream of BER execution; recruited by PCNA at stalled or post-replicative forks

## Key interactors

- [[ogg1]] — functional partner in the GO system; removes 8-oxoG after MUTYH removes A
- [[pcna]] — binds MUTYH's PIP box; localizes MUTYH to replication forks
- [[apc]] — frequent mutational target of A:8-oxoG transversions in MAP tumors

## Variant landscape

Pathogenic biallelic MUTYH variants are concentrated in the glycosylase domain:
- **Tyr165Cys** — impairs adenine excision; most common in Northern European populations
- **Gly382Asp** — within the NUDIX-like domain; also common in European carriers
- Together, Tyr165Cys and Gly382Asp account for ~70–80% of pathogenic MAP alleles in European-ancestry populations [^cheadle2007] #gap/no-fulltext-access
- >200 additional variants reported; pathogenicity varies; many are VUS (variants of uncertain significance)

## Limitations and gaps

- **Protein length — resolved:** Seeder brief specified 521 aa (wrong). UniProt Q9UIF7 canonical isoform = 546 aa (confirmed). Slupska 1996 reported 535 aa for the originally cloned isoform (α-3, UniProt Q9UIF7-3). Both numbers are correct for their respective isoforms; the canonical isoform is 546 aa.
- **Active site residue numbering — resolved:** UniProt canonical (546 aa) gives D131/D233; Banda 2017 uses the 535 aa α-3 isoform and gives E120/D222 — consistent 11-aa offset. The seeder-brief values D138/E37 are not found in any source and were incorrect.
- **GenAge entry — confirmed null:** MUTYH is not listed in GenAge human gene database (direct lookup confirmed). `genage-id: null` is correct.
- **Open Targets — corrected:** MUTYH DOES have an Open Targets entry (ENSG00000132781, 445 disease associations). The #gap/no-opentargets-entry tag has been removed. Druggability tier 4 (aging-context) is retained — no MUTYH-directed drug or aging-validated probe exists.
- **8-oxoG lesion frequency per cell per day:** The ~10^4–10^5/cell/day figure was attributed to Banda 2017 but that paper does not state a per-day rate. Banda 2017 reports "once per million guanine residues." The per-day figure needs a primary citation (Lindahl 1993 and Fraga 1990 are common sources in the literature). #gap/unsourced
- **KRAS codon 12 in MAP:** The wiki originally cited Al-Tassan 2002 for KRAS codon 12 transversions — Al-Tassan 2002 does not mention KRAS. KRAS mutations in MAP require citation from subsequent MAP characterization literature. #gap/unsourced for KRAS claim.
- **GTEx aging correlation:** Not populated — requires `sops/finding-tissue-expression.md` workflow against GTEx v2 API. #gap/unsourced
- **MR causal evidence:** Marked `not-tested`. MUTYH is a recessive cancer predisposition gene; no formal Mendelian randomization study linking MUTYH germline variation to an aging endpoint has been identified. #gap/needs-replication
- **Age-dependent expression changes:** Evidence that MUTYH activity declines with age in human tissues is claimed in some reviews but not systematically established by primary sources in this verification pass. #gap/needs-human-replication
- **Neurodegeneration role (Sheng 2012):** Sheng 2012 (JCI) is closed-access (not_oa per a local paper archive) — claims about MUTYH pro-degenerative role and PARP1 hyperactivation could not be verified against the full PDF. #gap/no-fulltext-access. The mechanistic claim is plausible and consistent with BER intermediate biology but should be treated as unverified.
- **Cheadle 2007 (MAP genetics):** Closed-access (not_oa per a local paper archive). Claims about 70–80% of MAP alleles being Tyr165Cys/Gly382Asp in European-ancestry populations and ~1% CRC prevalence cannot be verified against the full PDF. #gap/no-fulltext-access.
- **No aging-specific druggability:** Druggability tier 4 is confirmed; no active drug discovery programs against MUTYH for aging indications identified.

## Footnotes

[^altassan2002]: doi:10.1038/ng828 · Al-Tassan N et al. · *Nature Genetics* 2002 · n=3 (index pedigree) + colorectal cancer cohort · observational (family/mutation study) · model: human; established biallelic MUTYH (Tyr165Cys + Gly382Asp) as cause of MAP with G:C→T:A transversion signature in *APC* · locally available (archive PDF)

[^slupska1996]: doi:10.1128/jb.178.13.3885-3892.1996 · Slupska MM et al. · *Journal of Bacteriology* 1996 · in-vitro (cloning + sequencing) · model: human gene; cloned and characterized hMYH as the human MutY homolog; 535-aa protein (note: UniProt now lists 546 aa for the canonical isoform — likely reflects updated isoform resolution) · OA via PMC232650

[^slupska1999]: doi:10.1128/jb.181.19.6210-6213.1999 · Slupska MM et al. · *Journal of Bacteriology* 1999 · in-vitro (functional complementation) · model: E. coli mutY mutant + human hMYH; demonstrated hMYH complements mutY and removes A from A:8-hydroxydeoxyguanine mispairs

[^banda2017]: doi:10.1016/j.freeradbiomed.2017.01.008 · Banda DM, Nuñez NN, Burnside MA, Bradshaw KM, David SS · *Free Radical Biology and Medicine* 2017 · review · PMC5457711 · model: human MUTYH; mechanism review covering domain architecture, metal cofactors (zinc linchpin, iron-sulfur cluster), MAP variants, and BER coordination; residue positions reported for the 535 aa isoform α-3 (UniProt Q9UIF7-3); catalytic residues E120 and D222 in that isoform (= D131 and D233 in canonical 546 aa isoform); does NOT provide a per-cell-per-day 8-oxoG lesion frequency (reports "once per million guanine residues" as genome frequency)

[^cheadle2007]: doi:10.1016/j.dnarep.2006.11.001 · Cheadle JP, Sampson JR · *DNA Repair* 2007 · review · model: human; MAP genetics, genotype-phenotype correlations, and clinical testing implications · **CLOSED-ACCESS — not verified against full PDF** #gap/no-fulltext-access

[^grasso2015]: doi:10.18632/oncotarget.4284 · Grasso F et al. · *Oncotarget* 2015 · in-vivo (mouse, Mutyh⁻/⁻ on AOM + DSS protocol) · n=20/genotype (AOM/DSS arm) · model: Mutyh-/- C57BL/6 mouse; AOM/DSS-induced colonic adenomas more numerous and more frequently tubulo-villous in KO vs WT; 3/7 Mutyh⁻/⁻ developed adenocarcinomas vs 0/14 WT; KO survival 35% vs WT 70% under AOM/DSS (p=0.011, Log-rank); elevated basal GM-CSF and IFNγ in colon of untreated KO mice

[^sheng2012]: doi:10.1172/jci65053 · Sheng Z et al. · *Journal of Clinical Investigation* 2012 · in-vivo + in-vitro · model: mouse neurodegeneration models + cultured neurons; MUTYH-mediated BER of A:8-oxoG in post-mitotic neurons activates PARP1 and is neurotoxic; MUTYH deficiency is neuroprotective in 8-oxoG-accumulation contexts · **CLOSED-ACCESS — not verified against full PDF** #gap/no-fulltext-access
