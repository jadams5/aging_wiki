---
type: protein
aliases: [PARP-1, poly(ADP-ribose) polymerase 1, PPOL, ADPRT, pADPRT-1]
uniprot: P09874
ncbi-gene: 142
hgnc: 270
ensembl: ENSG00000143799
genage-id: 60
mouse-ortholog: Parp1
key-domains: [Zn-finger-1, Zn-finger-2, BRCT, WGR, PARP-catalytic-ART]
key-ptms: [auto-PARylation-Glu/Asp/Ser, phosphorylation-PRKDC, sumoylation-SUMO1/2, caspase3-cleavage]
pathways: ["[[base-excision-repair]]", "[[dna-damage-response]]", "[[nad-metabolism]]", "[[homologous-recombination]]"]
hallmarks: ["[[genomic-instability]]", "[[deregulated-nutrient-sensing]]", "[[disabled-macroautophagy]]"]
sens-categories: []
known-interactors: ["[[xrcc1]]", "[[sirt1]]", "[[nampt]]", "[[brca1]]", "[[hpf1]]"]
druggability-tier: 1
caused-by: ["[[dna-damage-response]]", "[[genomic-instability]]"]
causes: ["[[nad-depletion]]", "[[sirt1]]", "[[sirt3]]"]
complex-subunits: []
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Bryant 2005, Farmer 2005, Fong 2009, and Mouchiroud 2013 primary-source PDFs verified. Bürkle 2005 (doi:10.1016/j.biocel.2004.10.006) is closed-access (not_oa); r≈0.8 and P<0.01 cross-species correlation claims unverifiable against full text — retained with #gap/no-fulltext-access. Canonical-database identity fields (UniProt P09874, NCBI Gene 142, HGNC 270, GenAge 60) not independently re-checked against source databases."
---


# PARP1 (Poly [ADP-ribose] polymerase 1)

PARP1 is the founding and dominant member of the PARP enzyme family. It is a nuclear NAD+-consuming enzyme activated by DNA strand breaks; it synthesizes poly(ADP-ribose) (PAR) chains on target proteins to orchestrate the DNA damage response. Its aging relevance is dual: (1) as a high-fidelity genome guardian, PARP1 activity positively correlates with species lifespan across mammals; (2) under conditions of chronic DNA damage, hyperactivated PARP1 depletes cellular NAD+, suppressing SIRT1 and SIRT3, linking genomic stress directly to deregulated nutrient sensing and metabolic decline.

## Identity

- **UniProt:** P09874 (PARP1_HUMAN)
- **NCBI Gene:** 142
- **HGNC symbol:** PARP1 (HGNC:270)
- **Ensembl:** ENSG00000143799
- **GenAge ID:** 60
- **Mouse ortholog:** Parp1 (one-to-one)
- **Length:** 1,014 amino acids (canonical isoform)

## Domain architecture

PARP1's modular structure couples DNA damage sensing to catalytic activity:

| Domain | Residues (approx.) | Function |
|---|---|---|
| Zn-finger 1 (ZF1) | 1–97 | Binds single-strand DNA breaks |
| Zn-finger 2 (ZF2) | 106–209 | Binds double-strand DNA breaks |
| Zn-binding PADR1 | 224–356 | Structural; supports ZF3 / inter-domain communication |
| BRCT domain | 387–484 | DNA-binding; mediates intrastrand transfer |
| WGR domain | 524–633 | Nucleosome bridging; allosteric relay to catalytic domain |
| PARP alpha-helical | 662–787 | Autoinhibitory fold; unwinds on activation |
| Catalytic (ART) domain | 788–1014 | Transfers ADP-ribose from NAD+ onto substrate |

Activation requires simultaneous engagement of the ZF1/ZF2 DNA-sensing domains and allosteric communication through WGR to relieve autoinhibition — a conformational mechanism that ensures tight coupling of DNA damage to catalytic output.

## PARylation chemistry and NAD+ consumption

PARP1 cleaves NAD+ at the nicotinamide-ribose bond, covalently attaches the first ADP-ribose unit onto acidic (Glu, Asp) or hydroxyl (Ser, with HPF1 as co-factor) residues on target proteins, and then extends the chain into branched PAR polymers up to ~200 units in length. Key substrates include histone H1, H2A, H2B, and PARP1 itself (auto-PARylation). The PAR signal:

1. **Recruits repair factors** — [[xrcc1]] BRCT1 makes direct protein-protein contact with auto-poly(ADP-ribosyl)ated PARP1, preferential for the auto-PARylated form (Masson 1998 — verified R32a on `[[xrcc1]]` page); the original "BRCT1 reads PAR chains as a polymer-binding module" framing is an oversimplification. The MRN complex accumulation at PAR-modified break sites is documented separately and is not the load-bearing XRCC1-recruitment mechanism.
2. **Relaxes chromatin** — PARylation of histones reduces their affinity for DNA, transiently opening the break site.
3. **Auto-PARylation terminates signaling** — electrostatic repulsion of the heavily charged PAR chains dissociates PARP1 from DNA, freeing the break for downstream repair machinery.

**Stoichiometric NAD+ cost.** Each PAR chain consumes multiple NAD+ molecules. Under mild, transient damage, the local NAD+ pool recovers rapidly via NAMPT-driven salvage ([[nampt]]). Under chronic or severe damage, PARP1 hyperactivation becomes a net drain: cellular NAD+ falls, reducing substrate availability for the NAD+-dependent deacetylases SIRT1 and SIRT3 [^mouchiroud2013].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes (NAD+ decline with age is documented in human blood and muscle) |
| Replicated in humans? | partial (NAD+ depletion documented; causal attribution to PARP1 hyperactivation specifically is in-progress) |

## Aging relevance

### 1. Cross-species correlation: PARP1 activity and lifespan

Bürkle and colleagues measured poly(ADP-ribosyl)ation capacity in permeabilised mononuclear blood cells from 13 mammalian species spanning a ~30-fold lifespan range [^burkle2005]. PARP1 activity positively correlated with species maximum lifespan (r ≈ 0.8, P < 0.01). Long-lived species (human, naked mole rat) showed substantially higher PARylation capacity than short-lived species (mouse, rat), even when normalized for body mass. #gap/needs-replication — this correlation has not been replicated in an independent multi-species dataset; causal direction is not established from correlational data alone.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes (human cells show highest PARylation capacity in the Bürkle dataset) |
| Replicated in humans? | no (single-lab cross-species study; causal directionality untested) |

### 2. NAD+ depletion and sirtuin inhibition

PARP1 and [[sirt1]] compete for the same NAD+ pool. In aged tissues, DNA damage burden increases (a consequence of accumulating [[genomic-instability]]), driving chronic low-level PARP1 activation. Mouchiroud et al. demonstrated in *C. elegans* that mutation or RNAi knockdown of *pme-1* (the worm PARP-1 homolog, which is the dominant worm PARP activity) extended lifespan by ~20–29%, and that pharmacological PARP inhibition (AZD2281 or ABT-888) extended lifespan by ~15–23% via the worm sirtuin *sir-2.1* [^mouchiroud2013]. These effects required *sir-2.1* and involved induction of the mitochondrial unfolded protein response (UPR^mt) and FOXO transcription factor DAF-16. Conversely, supplementation with NAD+ precursors (NR or NAM, not NMN) mimicked PARP inhibition by restoring NAD+ and activating *sir-2.1*, extending worm lifespan. In mammalian hepatocytes, both PARP inhibition and NR treatment induced mitochondrial biogenesis in a SIRT1-dependent manner. **Not yet replicated in humans.** #gap/needs-human-replication

### 3. PARP1 as SASP amplifier

Senescent cells sustain elevated DNA damage signaling (the DNA segments with chromatin alterations in senescence, or DNA-SCARS) that constitutively activates PARP1. This maintains a low-level PAR signal that, via NF-κB — whose activation is partly PAR-dependent — amplifies [[sasp|SASP]] cytokine production. PARP inhibition reduces NF-κB-driven SASP in some senescence models. #gap/no-mechanism — the precise PAR → NF-κB node in senescent cells is not fully resolved; flagged as #gap/unsourced pending a primary source citation.

## BRCA synthetic lethality and PARP inhibitor pharmacology

The synthetic lethal relationship between PARP1 inhibition and BRCA1/2 deficiency was established in two simultaneous 2005 Nature papers:

- **Bryant et al.** showed that BRCA2-deficient tumour cells are exquisitely sensitive (~1000-fold) to PARP inhibitors in vitro and in xenograft models, because BER-dependent SSB repair can no longer be backed up by homologous recombination [^bryant2005].
- **Farmer et al.** independently demonstrated the same lethality in BRCA1/2-deficient cells and proposed a mechanistic model in which PARP trapping at stalled replication forks generates DSBs that only HR-proficient cells can resolve [^farmer2005].

### Olaparib clinical development

Fong et al. 2009 (NEJM) reported the first-in-human phase I trial of olaparib (AZD2281) in 60 patients with advanced solid tumours (not all BRCA mutation carriers; 22 were confirmed carriers of BRCA1 or BRCA2 and 1 had a strong family history but declined testing; the remainder were wild-type or unknown BRCA status) [^fong2009]. Of the 19 evaluable BRCA mutation carriers with ovarian, breast, or prostate cancer:

- 9/19 (47%) had a partial or complete radiologic response by RECIST (objective response rate)
- 12/19 (63%) had clinical benefit (radiologic or tumor-marker response, or stable disease ≥4 months)
- In ovarian cancer specifically: 8 of 15 BRCA1- or BRCA2-mutated ovarian cancer patients had a partial or complete radiologic response by RECIST
- In breast cancer: 3 BRCA2-mutated breast cancer patients enrolled; 1 had a complete remission (>60 weeks) and 1 had stable disease
- The maximum tolerated dose was established as 400 mg twice daily (maximum administered dose 600 mg twice daily)
- Confirmed the synthetic-lethal concept in humans; no objective antitumor responses were observed in patients without known BRCA mutations

Olaparib (Lynparza, AstraZeneca) received FDA approval in December 2014 for BRCA-mutated advanced ovarian cancer; subsequently expanded to BRCA-mutated breast (2018), pancreatic (2019), and prostate (2020) cancers. Three additional PARP inhibitors are FDA-approved: rucaparib, niraparib, talazoparib. These are **not** aging interventions; they are listed here because the druggability-tier-1 status is driven by cancer approvals, and because PARP inhibitor pharmacology is directly relevant to any experimental NAD+ rescue strategy in aging.

## NAD+ restoration as an aging intervention angle

PARP1 hyperactivation in aged tissues is a mechanistic node connecting [[genomic-instability]] (accumulating DNA damage) to [[deregulated-nutrient-sensing]] (NAD+ depletion → SIRT1 suppression). Two intervention strategies address this:

1. **NAD+ precursor supplementation** — NMN or NR bypass PARP1 to replenish NAD+ directly; see [[nampt]] for the salvage pathway context.
2. **PARP inhibition in aging** — using subtherapeutic PARP inhibitor doses to reduce chronic NAD+ drain. Preclinical evidence in aged mice shows partial NAD+ restoration and improved mitochondrial function. #gap/needs-human-replication — no randomized human trial of PARP inhibition for NAD+ restoration in non-cancer aging populations has been completed as of 2026-05-05.

## Key interactors

| Interactor | Role | Evidence type |
|---|---|---|
| [[xrcc1]] | Recruited to repair sites via PAR binding | experimental (biochemical) |
| [[nampt]] | Rate-limiting NAD+ biosynthesis; upstream of PARP1 substrate availability | genetic/pharmacological |
| [[sirt1]] | Competes for NAD+; suppressed by PARP1 hyperactivation | genetic/pharmacological |
| [[sirt3]] | Mitochondrial NAD+-dependent deacetylase; indirectly suppressed | genetic |
| [[brca1]] | HR pathway; BRCA1-deficient cells synthetically lethal with PARP inhibition | genetic |
| HPF1 | Co-factor redirecting PARylation from Glu/Asp to Ser residues | structural/biochemical |

## Pathway membership

- [[base-excision-repair]] — primary BER scaffold; early response to SSBs (R19 batch)
- [[dna-damage-response]] — integrates with ATM/ATR signaling at DSBs
- [[homologous-recombination]] — synthetically lethal relationship; HR backs up stalled forks that PARP traps (R19 batch)
- [[nad-metabolism]] — major NAD+ consumer under damage conditions

## Limitations and gaps

- **NAD+ causality in human aging:** The NAD+ depletion-PARP1 axis is mechanistically well-established in rodents; whether PARP1 hyperactivation is a *quantitatively meaningful* driver of human NAD+ decline (vs. declining biosynthesis, e.g., NAMPT reduction with age) remains unresolved. #gap/contradictory-evidence
- **PARP inhibition as geroprotector:** No clinical trial has tested a PARP inhibitor for healthspan or NAD+ restoration in non-cancer aging populations. #gap/needs-human-replication
- **Bürkle cross-species correlation:** Single-lab, non-interventional; confounders (body size, metabolic rate, DNA repair capacity) not fully disentangled. #gap/needs-replication
- **SASP amplification mechanism:** The PAR → NF-κB pathway in chronic senescence is inferred from cell-line data; tissue-level mechanistic validation is incomplete. #gap/no-mechanism
- **Bürkle PDF unavailable locally:** doi:10.1016/j.biocel.2004.10.006 is closed access (not_oa per a local paper archive). Quantitative claims (r≈0.8, P<0.01 for cross-species correlation) cannot be verified against the full text; retained with appropriate uncertainty. #gap/no-fulltext-access

## Footnotes

[^bryant2005]: [[studies/bryant-2005-parp-brca2-synthetic-lethality]] · doi:10.1038/nature03443 · n=cell lines + xenografts (40 CD-1 nude mice for xenograft arm) · in-vitro/in-vivo · model: BRCA2-deficient V-C8 (Chinese hamster) and human breast cancer cell lines (MCF-7, MDA-MB-231 with siRNA); mouse xenograft · p<0.05 (γ-H2AX/RAD51 foci t-test); P<0.01, P<0.001 (clonogenic survival) · downloaded PDF available
[^farmer2005]: [[studies/farmer-2005-parp-brca-synthetic-lethality]] · doi:10.1038/nature03445 · n=cell lines + xenografts (40 nude mice for in vivo arm) · in-vitro/in-vivo · model: BRCA1/2-deficient mouse embryonic stem cells (primary model); BRCA2-deficient CHO cells (>1,000-fold sensitivity in Supplementary); teratoma xenograft in BALB/c-nude mice · P<0.05 (siRNA viability reduction); P=0.03 and P=0.01 (in vivo tumour formation) · downloaded PDF available
[^fong2009]: [[studies/fong-2009-olaparib-brca-phase1]] · doi:10.1056/NEJMoa0900212 · n=60 total (22 confirmed BRCA1/2 carriers; 19 evaluable BRCA carriers with ovarian/breast/prostate) · phase-1 · model: humans (advanced solid tumours; BRCA carriers and non-carriers enrolled) · 9/19 (47%) RECIST objective response rate in BRCA carriers; 12/19 (63%) clinical benefit rate (response + stable disease); MTD 400 mg BID · downloaded PDF available
[^burkle2005]: doi:10.1016/j.biocel.2004.10.006 · review/correlational · model: 13 mammalian species (mononuclear blood cells) · r≈0.8 · no local PDF (closed access) #gap/no-fulltext-access
[^mouchiroud2013]: [[studies/mouchiroud-2013-nad-sirtuin-longevity]] · doi:10.1016/j.cell.2013.06.016 · n=multiple worm cohorts + mouse hepatocyte cell line (AML12) · in-vivo (C. elegans) + in-vitro (mammalian) · model: C. elegans pme-1 mutants (worm PARP-1 homolog) + pharmacological PARP inhibition (AZD2281, ABT-888); NAD+ precursors NR and NAM (not NMN); mouse hepatocytes for SIRT1 dependency · p<0.001 for lifespan extension; lifespan +15–29% · PDF downloaded and verified 2026-05-05
[^masson1998]: doi:10.1128/mcb.18.6.3563 · Masson M, Niedergang C, Schreiber V, Muller S, Menissier-de Murcia J, de Murcia G · *Molecular and Cellular Biology* 1998 · in-vitro · XRCC1-PARP1 direct protein-protein interaction characterized; XRCC1 BRCT1 (residues 301–402) makes direct contact with auto-poly(ADP-ribosyl)ated PARP1; preferential for the auto-PARylated form (the original "BRCT1 reads PAR chains as a polymer-binding module" framing oversimplifies the actual mechanism). DOI corrected R32a (was previously the wrong Mutat Res DOI). PMC108937 OA. Verified during R32a XRCC1-page verification.
