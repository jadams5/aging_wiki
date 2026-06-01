---
type: protein
aliases: [NAMPT, nicotinamide phosphoribosyltransferase, PBEF, PBEF1, visfatin, pre-B-cell colony enhancing factor]
uniprot: P43490
ncbi-gene: 10135
hgnc: 30092
ensembl: ENSG00000105835
mouse-ortholog: Nampt
druggability-tier: 2
caused-by: []
causes: []
key-domains: [NAPRTase-domain, homodimerization-interface, substrate-binding-site]
key-ptms: [N-acetylmethionine-Met1, phosphoTyr188, phosphoSer472, O-glycosylation]
pathways: ["[[sirtuin]]", "[[ampk]]", "[[nad-salvage]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[mitochondrial-dysfunction]]"]
known-interactors: ["[[sirt1]]", "[[sirt3]]", "[[parp1]]", "[[cd38]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Yoshida 2019 (eNAMPT/EV lifespan data) and Yoshino 2018 review (NAD+ decline figures) verified against primary source PDFs. Revollo 2004, Rongvaux 2002/2008, Khaidizar 2017, Fukuhara 2005 retraction, and Imai & Guarente 2014 not verified against PDFs (still pending download); claims from these sources preserved as written."
---

# NAMPT (Nicotinamide Phosphoribosyltransferase)

NAMPT catalyzes the rate-limiting step of mammalian NAD+ salvage — converting nicotinamide (NAM) and 5-phosphoribosyl-1-pyrophosphate (PRPP) to nicotinamide mononucleotide (NMN) — and is a critical choke-point for the NAD+ supply that powers [[sirt1]], [[sirt3]], and the PARP family. NAD+ levels decline substantially with age across multiple tissues through multiple converging mechanisms (magnitude varies by tissue: ~30–90%; see Aging relevance section); NAMPT activity decline with age is a key contributor. NAMPT is the same protein as "PBEF" (pre-B-cell colony enhancing factor) and "visfatin" — the visfatin insulin-mimetic claim was **retracted** (see below).

## Identity

- **UniProt:** P43490 (NAMPT_HUMAN)
- **NCBI Gene:** 10135
- **HGNC symbol:** NAMPT (formerly PBEF1)
- **Mouse ortholog:** Nampt (one-to-one; high conservation)
- **Length:** 491 amino acids (canonical isoform; obligate homodimer)
- **Fold:** TIM-barrel (aldolase superfamily); Pfam: PF04095 (NAPRTase domain)

## Structure and forms

NAMPT functions exclusively as an **obligate homodimer** — monomers are catalytically inactive. Two principal forms exist, sharing identical primary sequence but differing in localization and apparent function:

| Form | Location | Role |
|---|---|---|
| iNAMPT (intracellular) | Cytoplasm + nucleus (granular pattern) | NAD+ biosynthesis — rate-limiting step of salvage pathway |
| eNAMPT (extracellular) | Secreted; in blood circulation it is carried **exclusively within extracellular vesicles (EVs)** in both mice and humans — not detectable free in plasma | Cytokine/adipokine functions; enzymatically active in vitro; EV-mediated delivery to target tissues (hypothalamus, hippocampus, pancreas, retina) established in mice |

The secretion mechanism of eNAMPT is non-canonical (no signal peptide); SIRT1-dependent de-acetylation of iNAMPT at lysine 53 predisposes the protein to secretion in adipocytes. Critically, Yoshida et al. 2019 demonstrated that eNAMPT in blood circulation is almost exclusively contained within EVs in both mice and humans — not free in plasma. EV-contained eNAMPT levels decline significantly with age in both mice and humans [^yoshida2019].

## Function: NAD+ salvage

NAMPT catalyzes step 1 of the two-step NAD+ salvage pathway:

```
Nicotinamide (NAM) + PRPP  →[NAMPT]→  NMN  →[NMNAT1/2/3]→  NAD+
```

This salvage pathway is the dominant route for NAD+ biosynthesis in most mammalian cells. The substrate NAM is continuously released by NAD+-consuming enzymes: [[sirt1]] and other sirtuins (deacetylation), PARPs (ADP-ribosylation), and [[cd38]] (cyclic ADP-ribose synthesis). Without NAMPT-mediated recycling, cellular NAD+ would be rapidly depleted [^revollo2004].

NAMPT's rate-limiting status was established biochemically: Revollo et al. 2004 showed that Nampt overexpression elevates intracellular NAD+ and potentiates Sir2alpha activity in mammalian cells, while knockdown reduces NAD+ and silences sirtuin-dependent transcriptional programs [^revollo2004]. NMN downstream of NAMPT is then adenylated by NMNAT isoforms (NMNAT1 nuclear; NMNAT2 cytoplasm; NMNAT3 mitochondria) to regenerate NAD+.

The [[ampk]] pathway cross-regulates NAMPT: energy stress (high AMP/ATP ratio) activates AMPK → phosphorylates and may enhance NAMPT-dependent NAD+ production, creating a feed-forward link to sirtuin activation [^yoshino2018review].

## Circadian regulation

NAMPT expression is under direct circadian clock control: the CLOCK/BMAL1 heterodimer binds E-boxes in the Nampt promoter to drive rhythmic transcription. This creates a feedback oscillator:

**CLOCK/BMAL1 → NAMPT → NAD+ → SIRT1 deacetylates BMAL1 → modulates clock amplitude**

Disruption of this loop (e.g., shift work, aging-associated circadian dampening) is hypothesized to accelerate NAD+ decline. #gap/needs-human-replication — causal evidence for circadian NAMPT disruption as an aging driver is mouse-only.

## Tissue distribution

NAMPT is ubiquitously expressed, with highest levels in:
- Brown and white adipose tissue (source of circulating eNAMPT)
- Liver
- Activated lymphocytes (lymphocyte maturation requires NAMPT-dependent NAD+ [^rongvaux2008])
- Skeletal muscle and brain (relevant to age-related decline)

## Aging relevance

### NAD+ decline with age

NAD+ levels decline substantially with age across multiple tissues in rodents and humans — the magnitude varies widely by tissue and age (~30–90%; Yoshino 2018 review Table 3: e.g., skeletal muscle ~30–40% at 22 months rising to ~40–45% at 30 months, liver ~85–90% at 25–31 months, brain ~63–66% at 12 months and ~90% at age 70 vs 20 by regression) [^yoshino2018review]. A "~50%" figure is a rough cross-tissue average that understates variability. Three mechanisms converge:

1. **NAMPT activity decline** — transcriptional and post-translational suppression of iNAMPT with age #gap/needs-replication (tissue-specific; magnitude varies)
2. **CD38 hyperactivity** — CD38 is a major NAD+-consuming enzyme; its expression rises with age and inflammatory signaling; CD38 KO mice have higher NAD+ at old age
3. **PARP hyperactivity** — accumulating DNA damage in aged cells drives chronic PARP activation, consuming NAD+

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | NAD+ salvage biochemistry conserved; NAMPT is the rate-limiting enzyme in humans as in mice |
| Phenotype conserved in humans? | partial | NAD+ decline with age documented in human blood and muscle; tissue-specific NAMPT decline less directly characterized |
| Replicated in humans? | in-progress | NAD+ precursor trials (NMN, NR) ongoing in humans; NAMPT-specific interventional data sparse |

### eNAMPT as a systemic aging signal

Plasma EV-eNAMPT levels decline with age in both mice (significantly from 6 to 18 months, by ~33% in females and ~74% in males; p<0.05 by two-way repeated-measures ANOVA) and humans (linearly across ages 37–80; R²=0.6212, p=0.0014) [^yoshida2019]. Yoshida et al. 2019 conducted two complementary experiments:

1. **Genetic model (ANKI mice):** Adipose-tissue-specific *Nampt* knockin (ANKI) female mice maintained higher circulating EV-eNAMPT levels during aging. ANKI female mice (n=40) showed statistically significant extension of median lifespan vs controls (n=39): median 786 days vs 693 days (13.4% extension; Gehan-Breslow-Wilcoxon test, χ²=6.043, df=1, p=0.014). ANKI male mice showed no significant lifespan extension (p=0.56, n=39/group). ANKI female mice also showed significantly enhanced wheel-running activity at 18 months comparable to 6-month-old wild-type mice.

2. **Pharmacological model (EV injection):** Supplementing EV-eNAMPT purified from young (4–12-month-old) mice into 26-month-old female C57BL/6J mice (injected i.p. once per week) significantly extended lifespan (n=11–12/group): median 926 days (EV-injected) vs 840 days (vehicle); 10.2% extension; Gehan-Breslow-Wilcoxon test, χ²=11.10, df=1, p=0.0009. EV injection also significantly enhanced wheel-running activity in 20-month-old female mice.

The EV-mediated delivery mechanism resolves the long-standing question of how extracellular NAMPT raises intracellular NAD+: EV-contained eNAMPT is internalized into target cells (demonstrated in primary hypothalamic neurons) where it enhances NAD+/NMN biosynthesis intracellularly. Free recombinant NAMPT protein is NOT internalized; EV encapsulation is required. Primary target tissues in aged mice include the hypothalamus, hippocampus, pancreas, and retina — tissues that have relatively low iNAMPT and rely on EV-eNAMPT for NAD+ supply. Note: the sex difference (females respond, males less so) is consistent across ANKI, BRASTO, and Nampt+/- models and remains mechanistically unexplained.

#gap/needs-human-replication — lifespan and healthspan effects are mouse-only (C57BL/6J); human circulating eNAMPT decline is documented but intervention data in humans absent.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | partial | Circulating EV-eNAMPT documented in humans; linear age-associated decline confirmed in humans (ages 37–80); EV internalization mechanism assumed but not tested in human tissues |
| Phenotype conserved in humans? | partial | EV-eNAMPT level decline with age documented in human plasma; lifespan/healthspan effects not testable |
| Replicated in humans? | no | Mouse-only intervention data (Yoshida 2019); human trials absent |

#gap/needs-human-replication #gap/needs-replication (single study, lifespan claim)

### NAMPT → SIRT1 axis in cellular senescence

NAMPT overexpression delays senescence in mouse fibroblasts by raising NAD+, activating SIRT1, and upregulating antioxidant gene expression (SOD2, catalase) [^khaidizar2017]. Conversely, NAMPT inhibition (FK866) accelerates senescence markers. This positions NAMPT as a proximate regulator of [[sirt1]]-dependent stress resilience, upstream of the SASP-associated secretory phenotype. #gap/needs-human-replication — fibroblast data; human cellular aging relevance requires clinical confirmation.

## The visfatin controversy and retraction

Early reports renamed eNAMPT "visfatin" based on the claim that it functioned as an insulin-mimetic adipokine by binding and activating the insulin receptor (IR):

- **Fukuhara et al. 2005 (Science 307:426)** reported that visfatin (= NAMPT) bound the IR at a site distinct from insulin, stimulated IR auto-phosphorylation, and lowered blood glucose in mice. The paper generated enormous interest as a potential novel adipokine [^fukuhara2005].
- **Retraction (Science 2007, 318:565):** The authors retracted the paper after being "unable to reproduce the central observations" regarding insulin receptor binding and signaling. The retraction notice states that the findings on which the visfatin-as-insulin-mimetic model rested could not be confirmed internally or by other groups. The enzymatic (NAD biosynthetic) identity of the protein was not questioned — only the insulin-receptor-binding claim was retracted.
- **Current status:** "Visfatin" as an insulin-mimetic is a retracted claim and should not be cited as established. "eNAMPT" as a circulating adipose-derived cytokine with still-unclear paracrine/endocrine functions remains an active (if contested) research area.

## Connection to NAD+ precursor supplementation

Both [[nmn]] and [[nr]] (nicotinamide riboside) are NAD+ precursors that bypass NAMPT:

- NMN feeds directly into the salvage pathway **downstream** of NAMPT (NMNAT converts NMN → NAD+), bypassing the rate-limiting step
- NR is converted to NMN by NRK1/NRK2 kinases, also bypassing NAMPT

This bypass rationale is the mechanistic basis for NMN/NR supplementation strategies in aging: if NAMPT is the bottleneck, adding downstream intermediates may restore NAD+ even when NAMPT activity is impaired. See [[nmn]] and [[nr]] pages for clinical trial status and dose-response data.

## Pharmacology

### NAMPT inhibitors (cancer applications)

NAD+ depletion is selectively lethal to many cancer cells due to their high NAD+ demand. Three NAMPT inhibitors have been investigated clinically:

| Compound | Mechanism | Status |
|---|---|---|
| FK866 (APO866) | Competitive inhibitor of NAMPT; ~1 nM IC50 | Phase 1/2 trials (hematologic malignancies); dose-limited by thrombocytopenia and GI toxicity |
| GMX1778 (CHS828) | Non-nucleoside NAMPT inhibitor | Phase 1; limited single-agent activity |
| INCB084550 | Next-generation; improved selectivity | Preclinical; #gap/unsourced — confirm status |

Toxicity of NAMPT inhibitors in normal tissues (especially platelets, lymphocytes) limits therapeutic window. Niacin co-administration can rescue normal cells while sparing tumor cells (tumor cells lack Naprt1 for niacin salvage — the NAMPT Achilles' heel concept). #gap/dose-response-unclear for the niacin rescue strategy in clinical settings.

### NAMPT activators / recombinant eNAMPT

No approved NAMPT activators exist. Preclinical approaches include:
- **EV-contained eNAMPT supplementation** — the Yoshida 2019 strategy [^yoshida2019]; purified eNAMPT-containing EVs from young mice extended lifespan in aged mice when injected i.p. once weekly. Critically, free recombinant eNAMPT protein is NOT internalized by target cells and did not enhance intracellular NAD+ — EV encapsulation is required. Preclinical only.
- **Small-molecule activators** — in early discovery; no clinical data
- **P7C3 compounds** — aminopropyl carbazoles reported to increase NAMPT activity in neuronal models; #gap/unsourced — independent replication needed

**Druggability — tier-2 (re-rated 2026-05-08).** NAMPT inhibitors (FK866 / APO866, GMX1778) reached Phase 1/2 for hematologic malignancies and were dose-limited by thrombocytopenia and GI toxicity; no NAMPT-targeted drug is FDA-approved for any indication, and no NAMPT activator has reached clinical development. The earlier tier-1 designation reflected NAMPT's rate-limiting position in the NAD+ salvage pathway upstream of the [[sirtuin]] family + adjacent NAD+-precursor clinical activity (NMN, NR — both bypass NAMPT), but the strict Open Targets criterion (`Approved Drug = true` for an aging indication) does not apply, and adjacent-precursor activity does not justify tier-1 for NAMPT itself. Tier-2 ("high-quality probe") accurately reflects the current state.

## Pathway membership

- [[sirtuin]] — NAMPT is the essential upstream supplier of NAD+ for all sirtuin isoforms; sirtuin activity is NAD+-limited under physiological aging conditions
- [[ampk]] — reciprocal regulation; AMPK activation can boost NAMPT; NAMPT-derived NAD+ activates SIRT1 which deacetylates and activates LKB1 upstream of AMPK
- [[nad-salvage]] — the pathway of which NAMPT catalyzes the rate-limiting step #gap/stub — [[nad-salvage]] pathway page does not yet exist

## Key interactors

- [[sirt1]] — primary downstream effector; NAD+-dependent deacetylase; SIRT1 product NAM feeds back as NAMPT substrate
- [[sirt3]] — mitochondrial sirtuin; NAD+ supply is shared; mitochondrial NAD+ pool is partly supplied by NMNAT3 from NAMPT-derived NMN
- PARP1 / [[parp1]] — major NAD+ consumer; hyperactivation competes with sirtuins for NAD+; PARP inhibition in aged mice raises NAD+ and partially phenocopies NAMPT overexpression #gap/stub — [[parp1]] page not yet seeded
- [[cd38]] — NADase; expression increases with age and inflammation; the "CD38-NAMPT tug-of-war" is a key axis determining net NAD+ availability in aged tissues #gap/stub — [[cd38]] page not yet seeded

## Limitations and gaps

- **iNAMPT vs eNAMPT quantification in aging:** most human aging studies measure NAMPT mRNA or total protein in blood; intracellular vs secreted contribution to age-related NAD+ decline is not cleanly separated. #gap/needs-replication
- **Tissue-specific decline:** NAMPT decline with age is documented in some tissues (liver, muscle, hypothalamus) but not uniformly across all tissues; conflating "NAD+ declines with age" with "NAMPT declines with age" is an oversimplification. #gap/contradictory-evidence
- **eNAMPT mechanism:** Yoshida 2019 established that EV-contained eNAMPT is internalized into primary hypothalamic neurons and enhances intracellular NAD+/NMN biosynthesis; free eNAMPT protein is not internalized. However, the precise receptor or membrane fusion mechanism mediating EV uptake into specific target cells (hypothalamus, pancreas, retina) remains to be elucidated. #gap/no-mechanism (tissue-targeting specificity mechanism unknown)
- **Human clinical data:** most aging-relevant NAMPT data is from mouse models. Human trials targeting NAMPT directly (vs downstream NMN/NR supplementation) are absent. #gap/needs-human-replication
- **Long-term safety of NAMPT manipulation:** NAMPT overexpression increases cancer risk hypothetically (via elevated NAD+ supporting proliferation); this concern has not been formally tested in long-term mouse studies. #gap/long-term-unknown

## Footnotes

[^revollo2004]: doi:10.1074/jbc.M408388200 · Revollo, Grimm, Imai 2004 · in-vitro + mammalian cell overexpression/knockdown · model: HEK293 and other mammalian cell lines · confirmed NAMPT as rate-limiting; Sir2alpha activity tracks NAD+ levels; archive status: pending (hybrid OA)

[^yoshino2018review]: doi:10.1016/j.cmet.2017.11.002 · Yoshino J, Baur JA, Imai SI 2018 · review · Cell Metabolism 27:513–528 · NAD+ intermediates (NMN and NR) biology and therapeutic potential; NAD+ decline with age is tissue-specific and wide-ranging (~30–90% depending on tissue and age; see Table 3); ~50% is a rough aggregate across studies · archive status: downloaded

[^yoshida2019]: doi:10.1016/j.cmet.2019.05.015 · Yoshida M, Satoh A, Lin JB, Mills KF, Sasaki Y, Rensing N, Wong M, Apte RS, Imai S 2019 · in-vivo (mouse; C57BL/6J; two models: ANKI adipose-specific Nampt knockin + EV injection; human plasma cross-sectional) · Cell Metabolism 30:329–342 · key findings: (1) eNAMPT in blood circulation is exclusively EV-contained in mice and humans; (2) ANKI female mice: median lifespan 786 vs 693 days, 13.4% extension, p=0.014, n=40/39; ANKI males: no effect, p=0.56; (3) EV injection in 26-month-old female mice: median lifespan 926 vs 840 days, 10.2% extension, p=0.0009, n=11–12; (4) human plasma eNAMPT declines linearly with age 37–80 years (R²=0.6212, p=0.0014, n=13) · model: aged C57BL/6J mice; NIA aging colony · archive status: downloaded

[^rongvaux2002]: doi:10.1002/1521-4141(200211)32:11<3225::AID-IMMU3225>3.0.CO;2-L · Rongvaux et al. 2002 · in-vitro + bacterial complementation · Eur J Immunol · PBEF identified as NAD biosynthetic enzyme (NAmPRTase); catalytic activity confirmed by complementation of NAD-deficient E. coli · archive status: pending (OA status not confirmed)

[^rongvaux2008]: doi:10.4049/jimmunol.181.7.4685 · Rongvaux, Leo et al. 2008 · in-vivo (mouse Nampt conditional KO) · J Immunol · NAMPT required for T and B lymphocyte maturation; cells with higher NAMPT resist genotoxic stress · archive status: pending

[^fukuhara2005]: doi:10.1126/science.1097243 · Fukuhara et al. 2005 · **RETRACTED October 2007** (Science 318:565) · original claim: visfatin binds insulin receptor and is insulin-mimetic; retraction: authors unable to reproduce central observations on IR binding; enzymatic identity as NAMPT not questioned · archive status: not_oa

[^khaidizar2017]: doi:10.1111/gtc.12542 · Khaidizar, Bessho et al. 2017 · in-vitro (mouse fibroblasts, NAMPT overexpression) · Genes Cells · NAMPT overexpression raises NAD+, activates SIRT1, upregulates antioxidant genes (SOD2, catalase), delays cellular senescence · archive status: pending

[^imaiguarente2014]: doi:10.1016/j.tcb.2014.04.002 · Imai, Guarente 2014 · review · Trends Cell Biol · NAD+ decline in aging and disease; NAMPT–SIRT1 axis; therapeutic potential of NAD+ restoration · archive status: pending
