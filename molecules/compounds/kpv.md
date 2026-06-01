---
type: compound
aliases: [Lys-Pro-Val, lysine-proline-valine, α-MSH(11-13), KPV tripeptide, H-Lys-Pro-Val-OH]
pubchem-cid: 125672
chembl-id: null
drugbank-id: null
biologic: true
who-inn: null
molecular-formula: C16H30N4O4
molecular-weight-da: 342.43
mechanisms: [nf-kb-inhibition, mapk-inhibition, anti-inflammatory]
targets: ["[[nf-kb]]", "[[ras-mapk]]"]
hallmarks: ["[[chronic-inflammation]]"]
clinical-stage: preclinical
human-evidence-level: preclinical-only
translation-gap: preclinical-only
next-experiment: "Phase 1 oral nanoparticle KPV trial in active mild-moderate ulcerative colitis: PepT1 uptake confirmed as entry mechanism; primary endpoint mucosal NF-κB activity by biopsy immunohistochemistry at 4 weeks."
clinical-trials-active: 0
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Dalmasso 2008 (PDF) and Laroui 2010 (PDF) verified end-to-end; Kannengiesser 2008 verified against PubMed abstract only (closed-access, no full-text); Catania 2000 verified against PubMed abstract (not_oa); PubChem CID 125672 identity fields re-confirmed via REST API"
---

# KPV (Lys-Pro-Val)

KPV is a synthetic C-terminal tripeptide fragment (Lys-Pro-Val) derived from [[alpha-msh|alpha-melanocyte-stimulating hormone]] (α-MSH, residues 11–13). At nanomolar concentrations, KPV inhibits NF-κB and MAP kinase inflammatory signalling in intestinal epithelial cells without requiring melanocortin receptor engagement, making it one of the most potent small anti-inflammatory peptides characterized in experimental colitis models. Preclinical efficacy in DSS and TNBS colitis is well-replicated; oral bioavailability is poor for the free peptide but nanoparticle encapsulation dramatically improves mucosal delivery. No human clinical trials have been registered or completed as of 2026-05-09. KPV had become popular among functional-medicine practitioners for gut inflammation before regulatory review of compounded peptides (FDA 503A/503B actions, 2024).

## Identity

| Property | Value |
|---|---|
| Sequence | H-Lys-Pro-Val-OH |
| Derivation | α-MSH residues 11–13 (C-terminus) |
| PubChem CID | 125672 |
| ChEMBL ID | null — not confirmed; gap noted below |
| Molecular formula | C16H30N4O4 |
| Molecular weight | 342.43 Da |
| Stereochemistry | All-L amino acids (natural configuration) |
| PepT1 substrate | Yes — transported into intestinal epithelial cells via the oligopeptide transporter SLC15A1/PepT1 [^dalmasso2008] |

#gap/needs-canonical-id — ChEMBL ID could not be confirmed via API lookup (short peptide search returned a structurally unrelated compound). Recommend manual search at ebi.ac.uk/chembl using InChI.

## Mechanism of action

### NF-κB and MAPK inhibition (primary, receptor-independent)

KPV inhibits NF-κB activation indirectly — by delaying IκBα degradation and accelerating IκBα recovery to baseline — and suppresses MAP kinase phosphorylation of ERK1/2, JNK, and p38 in intestinal epithelial cells at nanomolar concentrations (10 nmol/L in vitro) [^dalmasso2008]. These effects reduce IL-8 mRNA and protein in vitro; in vivo cytokine reduction (IL-6, IL-12, IFN-γ, IL-1β) is documented in the DSS model. Critically, the anti-inflammatory activity of KPV in colitis mouse models persists in MC1R-deficient animals, demonstrating that it is **at least partially independent of melanocortin-1 receptor signalling** [^kannengiesser2008]. This distinguishes KPV from full-length α-MSH, which acts predominantly via MC1R/MC3R cAMP-PKA pathways.

Note: KPV does not raise intracellular cAMP in IECs (confirmed by ELISA in Dalmasso 2008), and α-MSH at equivalent concentrations does not replicate KPV's IκBα kinetics, consistent with non-MCR-mediated action in IECs.

The molecular mechanism beyond IκBα preservation is not fully resolved. KPV does not appear to act as a classical competitive receptor antagonist; the receptor through which it acts in IEC-6 and Caco-2 cells remains unconfirmed. #gap/no-mechanism

### PepT1-mediated intestinal uptake

Uptake of KPV into intestinal epithelial cells occurs via the H+/oligopeptide co-transporter PepT1 (SLC15A1), which is overexpressed in inflamed colonic epithelium [^dalmasso2008]. This uptake mechanism provides both a route for intracellular delivery and a rationale for targeting nanoparticle delivery systems: PepT1 overexpression in inflamed tissue creates selective enrichment of KPV in the pathological zone. Anti-inflammatory effects require intracellular KPV based on the PepT1-dependence observed in Dalmasso 2008.

### Anti-inflammatory cytokine profile

In preclinical colitis models, KPV treatment reduces [^dalmasso2008] [^kannengiesser2008]:
- IL-6, IL-12, IFN-γ, IL-1β mRNA in DSS-colitis colon (Dalmasso 2008); TNF-α, IL-1β, IL-6, IFN-γ mRNA in TNBS-colitis colon (Dalmasso 2008)
- Myeloperoxidase (MPO) activity — a marker of neutrophil infiltration (~50% reduction in DSS model, Dalmasso 2008)
- Mucosal inflammatory-cell infiltrate by histology

This is consistent with the broader α-MSH anti-inflammatory programme characterised by Luger, Brzoska, and co-workers, who showed that α-MSH-derived peptides inhibit NF-κB, reduce adhesion molecule expression, and suppress Th1/Th17-type immune polarisation without producing global immunosuppression in animal models [^luger2007].

### Antimicrobial activity (secondary)

Catania et al. (2000) showed that α-MSH and its C-terminal fragment KPV exhibited inhibitory activity against *Staphylococcus aureus* and *Candida albicans* in an in vitro host-defence study [^catania2000]. The "without suppressing the immune system" characterisation in the literature refers to the anti-inflammatory (not immunosuppressive) phenotype of the peptide — KPV reduces excessive inflammatory signalling but does not ablate innate immune killing capacity. The antimicrobial data are limited to a single report; mechanism (membrane disruption vs receptor-mediated) is not defined. #gap/needs-replication

Note: antimicrobial activity is not catalogued as a mechanism class value in `mechanisms:` frontmatter — no `antimicrobial-peptide` class currently exists in [[frameworks/intervention-classes]]. Activity is documented here in body prose. See return summary for escalation.

## Preclinical colitis efficacy

| Study | Model | Route | Dose/schedule | n/group | Key outcomes |
|---|---|---|---|---|---|
| Dalmasso 2008 [^dalmasso2008] | DSS (3% in drinking water, 8 days) + TNBS (150 mg/kg intracolonic, assessed 48 h) colitis; female C57BL/6 mice | Oral (drinking water) | 100 µmol/L KPV in drinking water | 10 | Reduced body weight loss, MPO activity (~50% reduction), colonic shortening, and pro-inflammatory cytokine mRNA (IL-6, IL-12, IFN-γ, IL-1β in DSS; TNF-α, IL-1β, IL-6, IFN-γ in TNBS); NF-κB and MAPK (ERK1/2, JNK, p38) inhibition in Caco-2-BBE cells at 10 nmol/L |
| Kannengiesser 2008 [^kannengiesser2008] | DSS colitis + CD45RB^hi transfer colitis (mouse); also MC1Re/e (nonfunctional MC1R) mice in DSS model | Not specified in abstract | Not specified in abstract | Not specified in abstract | Earlier recovery and body weight regain; reduced inflammatory infiltrates and MPO activity; KPV rescued all MC1Re/e mice from death in DSS colitis, confirming MC1R-independent mechanism |
| Laroui 2010 [^laroui2010] | DSS (3%) colitis (mouse, C57BL/6); 7-day daily oral gavage | Oral gavage (150 µL hydrogel/day) | NP-KPV: ~25.2 ng/day delivered to colon; equivalent free KPV effective dose ~200 µg/day (12,000-fold difference) | 8 (MPO/cytokine groups); 12 (FITC localization) | Reduced MPO activity and TNF-α/IL-1β mRNA; histologic colitis improvement; free KPV at equivalent concentration (41 µg/L) had no effect on MPO |

All data are preclinical mouse or rat models. No completed human clinical trials as of 2026-05-09. #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Yes — NF-κB and MAPK are canonical human inflammatory pathways; PepT1 is expressed in human intestinal epithelium |
| Phenotype (anti-inflammatory colitis effect) conserved in humans? | Unknown — not tested in vivo in humans |
| Replicated in humans? | No — no completed human trial |

## Oral nanoparticle delivery

Free KPV peptide is subject to rapid intestinal proteolysis and poor mucosal penetration at oral doses. Laroui et al. (2010) demonstrated that encapsulation in alginate-chitosan-coated PLA (polylactic acid) nanoparticles (~366 nm diameter by PCS) targeted to the colon achieved equivalent colitis efficacy at doses 12,000-fold lower than free peptide oral administration in DSS-colitis mice [^laroui2010]. The effective free KPV dose in drinking water was ~200 µg/day; the NP formulation delivered ~25.2 ng/day to the colonic lumen via daily gavage. Subsequent groups have developed hydrogel systems (TNBS-rat models, PMIDs 35245681, 34547895) and liposomal formulations for topical mucosal delivery. These delivery-platform studies consistently show:

- Colonic accumulation is enhanced by PepT1 overexpression in inflamed tissue
- KPV retains anti-inflammatory bioactivity after encapsulation
- Local mucosal barrier repair (epithelial junction proteins, mucin production) is improved alongside cytokine suppression

The Merlin/Sitaraman group (Emory University) pioneered the nanoparticle delivery platform and is the dominant group in this literature [^dalmasso2008] [^laroui2010].

## Functional-medicine use and regulatory status

KPV was widely used by compounding pharmacies in the USA (typically 500 µg–2 mg capsules, sometimes as peptide injections) for off-label treatment of gut inflammation and IBD-related symptoms in the 2018–2024 period. This use preceded any clinical trial establishing efficacy or safety in humans.

**Regulatory context:** In 2023–2024, the FDA's Pharmacy Compounding Advisory Committee (PCAC) reviewed a list of peptides under the 503A/503B category. KPV, along with many other research peptides (BPC-157, TB-500, etc.), was placed on the FDA's list of bulk substances that may not be used in compounding under 503A, effectively prohibiting most compounding-pharmacy access in the USA as of 2024. The regulatory basis was absence of clinical evidence, not demonstrated harm. Status in other jurisdictions varies. #gap/needs-replication

## Aging relevance

KPV does not have a direct entry in GenAge or DrugAge as of 2026-05-09 (no lifespan-extension data in any model organism). Its aging relevance is indirect:

1. **Inflammaging:** [[chronic-inflammation]] is a core driver of most aging hallmarks via cytokine-mediated tissue damage (see [[chronic-inflammation]]). KPV's potent NF-κB/MAPK inhibition at nanomolar concentrations positions it as a mechanistically interesting anti-inflammaging agent if oral bioavailability can be resolved.
2. **Intestinal barrier aging:** Gut barrier function and mucosal immunity decline with age, contributing to low-grade endotoxemia and systemic inflammation. KPV's demonstrated mucosal healing and barrier-restoration effects in colitis models may have relevance to gut-aging processes, but this is speculative. #gap/unsourced

## Knowledge gaps and limitations

| Gap | Tag | Status |
|---|---|---|
| No human clinical trial | #gap/needs-human-replication | 0 active ClinicalTrials.gov registrations as of 2026-05-09 |
| KPV molecular receptor unknown | #gap/no-mechanism | MC1R independence confirmed; target receptor not identified |
| Dose-response in humans unknown | #gap/dose-response-unclear | All dosing from preclinical models; allometric scaling not validated |
| Antimicrobial mechanism undefined | #gap/needs-replication | Single in vitro study; no in vivo antimicrobial trial |
| ChEMBL ID unconfirmed | #gap/needs-canonical-id | Automated lookup failed; manual cross-check recommended |
| Long-term safety | #gap/long-term-unknown | No chronic-exposure study in any species |
| Aging-specific effects | #gap/needs-replication | No GenAge/DrugAge entry; no aged-animal colitis model using KPV |

## Footnotes

[^dalmasso2008]: doi:10.1053/j.gastro.2007.10.026 · Dalmasso G, Charrier-Hisamuddin L, Nguyen HTT, Yan Y, Sitaraman S, Merlin D · *Gastroenterology* 2008;134(1):166-178 · in-vitro (Caco-2-BBE, HT29-Cl.19A, Jurkat) + in-vivo (female C57BL/6 DSS 3% + TNBS 150 mg/kg colitis) · n=10/group (in vivo) · dose: 100 µmol/L KPV in drinking water (in vivo); 10 nmol/L (in vitro) · KPV at 10 nmol/L delays IκBα degradation and suppresses ERK1/2, JNK, and p38 phosphorylation; PepT1 (Km ~160 µmol/L) mediates uptake and is required for anti-inflammatory effect; oral KPV reduces DSS- and TNBS-induced colitis severity, MPO activity, and pro-inflammatory cytokine mRNA · cited 120 times (archive confirmed; PDF verified)

[^kannengiesser2008]: doi:10.1002/ibd.20334 · PMID:18092346 · Kannengiesser K, Maaser C, Heidemann J, Luegering A, Ross M, Brzoska T, Bohm M, Luger TA, Domschke W, Kucharzik T · *Inflammatory Bowel Diseases* 2008;14(3):324-331 · in-vivo (DSS colitis + CD45RB^hi transfer colitis, mouse; also MC1Re/e nonfunctional-MC1R mice in DSS model) · effects persist in MC1Re/e mice, confirming MC1R-independent mechanism; KPV rescued all MC1Re/e animals from death in DSS colitis · reduced inflammatory infiltrate + MPO activity; earlier body weight recovery · cited 53 times · #gap/no-fulltext-access — closed-access; verified against PubMed abstract (PMID:18092346) only

[^laroui2010]: doi:10.1053/j.gastro.2009.11.003 · Laroui H, Dalmasso G, Nguyen HTT, Yan Y, Sitaraman SV, Merlin D · *Gastroenterology* 2010;138(3):843-853 · in-vivo (DSS colitis, C57BL/6 mouse; 7-day daily oral gavage 150 µL hydrogel) · n=8 (MPO/cytokine); n=12 (FITC localization) · PLA (~366 nm) nanoparticles encapsulated in alginate-chitosan hydrogel (7/3 wt/wt); effective colonic dose via NP ~25.2 ng/day vs ~200 µg/day free KPV in drinking water — 12,000-fold dose reduction confirmed; free KPV at equivalent concentration (41 µg/L) had no effect on MPO or cytokines · cited 241 times (archive confirmed; PDF verified)

[^luger2007]: doi:10.1136/ard.2007.079780 · Luger TA, Brzoska T · *Ann Rheum Dis* 2007;66 Suppl 3:iii52-55 · review · α-MSH-derived peptides as anti-inflammatory / immunomodulating class; NF-κB suppression, adhesion molecule reduction, cytokine modulation; anti-inflammatory without global immunosuppression in animal models · cited 58 times · not independently PDF-verified in this pass

[^catania2000]: doi:10.1111/j.1749-6632.2000.tb05387.x · PMID:11268348 · Catania A, Cutuli M, Garofalo L, Carlin A, Airaghi L, Barcellini W, Lipton JM · *Ann N Y Acad Sci* 2000;917:227-231 · in-vitro antimicrobial assay (conference proceedings) · α-MSH and its C-terminal fragment KPV showed inhibitory influences against *Staphylococcus aureus* and *Candida albicans*; also reduces NF-κB activation and HIV replication in monocytes · cited 41 times · #gap/no-fulltext-access — not_oa; verified against PubMed abstract (PMID:11268348) only. Note: more detailed antimicrobial mechanism data (cAMP elevation in pathogens; no reduction of neutrophil killing capacity) is in the companion paper Cutuli M et al. 2000 (*J Leukoc Biol* 67:233-239, PMID:10670585)
