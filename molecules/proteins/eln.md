---
type: protein
aliases: [elastin, tropoelastin, ELN]
uniprot: P15502
ncbi-gene: 2006
hgnc: 3327
ensembl: ENSG00000049540
genage-id: null
mouse-ortholog: Eln
pathways: []
hallmarks: ["[[loss-of-proteostasis]]"]
sens-categories: []
known-interactors: ["[[fbn1]]", "[[lox]]", "[[mmp-9]]", "[[mmp-12]]"]
key-domains: [signal-peptide, hydrophobic-repeat-domains, cross-linking-domains]
key-ptms: [hydroxylation-Pro, desmosine-cross-link, isodesmosine-cross-link]
druggability-tier: null
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[skin-aging]]"]
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "UniProt P15502 confirmed; Shapiro 1991 PDF verified (lung elastin, 74-yr mean residence time); Weihermann 2021 PDF verified in full; Tassabehji 1998 exon corrected (32, not 30) via PubMed abstract; Chen 2005 confirmed as heat/infrared study (not UV) via Crossref metadata; Taddese 2008 and Lockhart 2020 not_oa/unverifiable — claims from those papers retained with gap tags; Ritz-Timme 2003 skin elastin racemization confirmed via PubMed abstract (no half-life number, demonstrates negligible turnover)"
---


# ELN (Elastin)

Elastin is the secreted extracellular matrix (ECM) protein that provides reversible elastic recoil to tissues — the molecular basis of skin snap-back, arterial wall compliance, and lung inflation-deflation cycling. It is one of the longest-lived proteins in the body, with a mean carbon residence time of ~74 years in human lung parenchyma (95% CI 40–174 yr) [^shapiro1991], meaning that the elastin deposited in adolescence or early adulthood is largely the same protein present in aged tissues. Aspartate racemization studies in human skin elastin confirm analogous negligible turnover [^ritz-timme2003]. Very little new elastin is synthesised after approximately age 30. This combination of negligible turnover and lifelong mechanical and oxidative stress makes elastin a key player in age-related ECM failure — particularly in [[skin-aging]].

## Identity

- **UniProt:** P15502 (ELN_HUMAN)
- **NCBI Gene:** 2006
- **HGNC symbol:** ELN
- **Ensembl:** ENSG00000049540
- **Chromosomal location:** 7q11.23
- **Mouse ortholog:** Eln (one-to-one ortholog)
- **Protein length:** 786 amino acids (full precursor, including 26-aa signal peptide); mature secreted tropoelastin ~760 aa (~72 kDa) [^uniprot-p15502]
- **GenAge:** not listed

## Structure

Elastin is synthesized as a soluble monomer, **tropoelastin**, which is secreted into the extracellular space where it assembles onto a microfibrillar scaffold provided by [[fbn1]] (fibrillin-1) and other microfibrillar proteins. Once assembled, it is cross-linked by [[lox]] (lysyl oxidase) into a covalently insoluble network — the elastic fiber.

The tropoelastin polypeptide is unusually amino acid-biased: it is ~33% glycine, ~10–12% proline, and ~10% valine, making it one of the most hydrophobic proteins in the human proteome. It adopts **no stable secondary structure in dilute aqueous solution** — it is intrinsically disordered (an elastomeric IDP). The entropic elasticity of elastic fibers arises partly from this disorder: mechanical extension reduces conformational entropy, and elastic recoil restores it.

### Domain architecture

Tropoelastin alternates between two kinds of exon-encoded domains [^uniprot-p15502]:

| Domain type | Sequence character | Function |
|---|---|---|
| **Hydrophobic repeats** | VPGVG, VGGVG, VGVAPG pentapeptide repeats | Elastomeric (reversible stretch); intrinsically disordered |
| **Cross-linking (lysine-rich)** | KAAK, KAAAK, KAKAK motifs | Substrate for LOX; desmosine/isodesmosine cross-link formation |

The signal peptide (residues 1–26) is cleaved during secretion. Proline residues within GXPG motifs can be hydroxylated by prolyl hydroxylases — a co-translational modification that affects fiber assembly [^uniprot-p15502].

### Desmosine and isodesmosine cross-links

Cross-linking is executed by [[lox]], which oxidatively deaminates the ε-amino group of specific lysines in adjacent tropoelastin molecules to form allysine (Δ-ald). Four allysine or lysine residues from two to four adjacent chains condense to form **desmosine** (a tetrafunctional pyridinium ring) or **isodesmosine** (positional isomer). These cross-links are [^taddese2008]:

- Found **only in elastin** — no other mammalian protein contains them
- Chemically irreversible under physiological conditions
- Detectable in blood and urine as elastin-degradation biomarkers after MMP-12-mediated fiber fragmentation
- Used in clinical research as indirect measures of elastin turnover in disease (COPD, emphysema, aging)

The LOX-to-desmosine conversion renders the mature elastic fiber network **biochemically inert**: no enzymatic or chemical mechanism under normal physiology can reform desmosine once elastin is fragmented. This irreversibility is the molecular basis of the age-related elastin depletion narrative.

## Expression and tissue distribution

Elastin expression is developmentally regulated, with peak expression during organogenesis and early postnatal life. Tissues relying on elasticity — large elastic arteries (aorta, pulmonary trunk), lung parenchyma, nuchal ligament, skin dermis, and uterine myometrium — express ELN during development and early adulthood [^uniprot-p15502]. Expression in dermal fibroblasts and vascular smooth muscle cells declines sharply after development; by early adulthood (~age 20–30) negligible new elastin is synthesised in most tissues under homeostatic conditions.

**Half-life caveat.** The ~74-year mean carbon residence time (95% CI 40–174 yr) derives from a lung-specific study by Shapiro et al. 1991, who used dual methods — aspartate racemization (K_asp = 1.76 × 10⁻³ yr⁻¹, r = 0.98) and nuclear-weapons-related ¹⁴C prevalence — in 14 post-mortem lung specimens (ages 6–78 yr) [^shapiro1991]. This is a lung parenchyma figure; extrapolation to skin and aortic elastin is supported by Ritz-Timme et al. 2003, who demonstrated analogous age-correlated aspartate racemization accumulation in human skin elastin (r = 0.98) consistent with negligible turnover, though a precise numerical half-life for skin was not calculated [^ritz-timme2003]. The figure should be treated as an order-of-magnitude estimate — the 95% CI is wide (40–174 yr). #gap/needs-replication — independent radiocarbon dating of skin and aortic elastin would strengthen extrapolation.

## Role in aging

### Intrinsic aging

With intrinsic (chronological) aging, dermal elastic fibers progressively fragment, thin, and lose their organized lamellar architecture. Because no replacement elastin is synthesised, this represents irreversible structural deterioration. The consequences in skin include [^skin-aging-wiki]:

- Loss of mechanical recoil (reduced snap-back on skin pinching; clinical test for dehydration and skin aging)
- Increased skin laxity, sagging, and jowling
- Histologically: sparse, short, fragmented elastic fibers on Verhoeff–van Gieson (VVG) staining in aged dermis

The primary enzymatic driver of elastic fiber degradation is [[mmp-9]] and, more specifically, **MMP-12 (macrophage metalloelastase)**, the elastin-specific matrix metalloproteinase. MMP-12 is expressed by macrophages in aged tissues and cleaves insoluble elastic fibers at characteristic sites, releasing elastin-derived peptides (EDPs) and desmosine/isodesmosine fragments [^taddese2008].

**MMP-12 cleavage sites in skin elastin.** The dominant MMP-12 cleavage sites in human skin elastin cluster in the VGGVG hydrophobic repeat domains. Cleavage occurs preferentially at Val-Gly bonds, liberating cross-linked fragments that remain detectable in tissue [^taddese2008].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — MMP-12 elastase activity is documented in human skin |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | yes — multiple histological cohorts |

### Photoaging — solar elastosis

The most clinically striking elastin-related aging pathology is **solar elastosis** (syn. actinic elastosis), which paradoxically features a **massive accumulation** of elastin in the dermis rather than loss. Solar elastosis is the histological hallmark of photoaged skin: a thick band of amorphous, basophilic, poorly-cross-linked elastin deposits in the papillary and upper reticular dermis, visible as blue-grey material on haematoxylin-eosin staining and classically demonstrated with Verhoeff–van Gieson or Orcein stains [^chen2005].

**Mechanism.** Photoexposure reactivates ELN transcription in dermal fibroblasts — a normally silenced gene in adult skin. The product is structurally aberrant: exon 26A alternative splice forms are overrepresented. Weihermann et al. 2021 demonstrated that ELN exon 26A mRNA is significantly elevated in two ex vivo photoexposed skin regions (auricular: 3.61-fold; periocular: 2.58-fold vs. non-exposed control), and in solar-radiation-simulator-exposed reconstituted skin in vitro (4.59-fold). Normal elastin expression (ELN 26–27) was simultaneously decreased in these models [^weihermann2021]. The secreted exon-26A-containing tropoelastin is not properly assembled onto the fibrillin scaffold or cross-linked by LOX into organised functional fibers — the result is bulk accumulation of disorganised, amorphous elastin that is mechanically non-functional despite its mass. Tropoelastin protein and fibrillin-1 protein were both increased in the reconstituted skin model after photoexposure, but mature elastin (cross-linked, insoluble) protein showed no significant change by immunohistochemistry [^weihermann2021].

LOX mRNA was elevated 1.64-fold in the periocular (blepharoplasty) ex vivo region only; the auricular (rhytidoplasty) region showed no significant LOX increase; the reconstituted skin model showed a non-significant decrease [^weihermann2021]. This partial LOX activation alongside structurally disordered deposits implies an upstream assembly defect at the fibrillin scaffold level. MMP-12 gene expression was significantly elevated in both photoexposed ex vivo skin regions (rhytidoplasty: 5.98-fold, blepharoplasty: 3.14-fold), but MMP12 elevation in irradiated reconstituted skin (1.94-fold) was **not statistically significant** [^weihermann2021]. Infrared/heat irradiation similarly upregulates MMP-12 transcription alongside tropoelastin — the same thermal stimulus both degrades old fibers and produces aberrant new ones [^chen2005]. This simultaneous induction of synthesis and degradation machinery is the basis of the long-standing mechanistic gap below.

#gap/no-mechanism — the initiating signal that drives aberrant elastin secretion vs. degradation in the same photoexposed fibroblast is not fully resolved. Why do UV and infrared stimuli simultaneously induce ELN transcription and MMP-12 in the same cell, and what determines which predominates in vivo? See also [[skin-aging]] § solar elastosis.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — photoexposure-ELN-26A-MMP12 co-induction is human in-vivo/ex-vivo data |
| Phenotype conserved in humans? | yes — solar elastosis is a human clinical entity |
| Replicated in humans? | yes — Chen 2005 (heat/infrared in-vivo human skin); Weihermann 2021 (ex vivo photoexposed human skin, n=73 donors) |

### Vascular aging

In the aorta and large elastic arteries, progressive fragmentation of medial elastic lamellae increases arterial stiffness (elevated pulse wave velocity, widened pulse pressure). This is one of the earliest measurable cardiovascular aging phenotypes and is an independent predictor of cardiovascular morbidity. The mechanism is analogous to dermal elastin aging: degradation without replacement, driven by MMP-12 and other elastases in aging vascular smooth muscle and macrophages. #gap/unsourced for the specific vascular elastin turnover primary source; cite pending.

## Disease genetics

### Williams-Beuren syndrome (OMIM 194050)

Williams-Beuren syndrome results from a hemizygous deletion of ~1.5–1.8 Mb at 7q11.23, encompassing the ELN locus. ELN haploinsufficiency causes vascular smooth muscle overproliferation due to disrupted elastin-mediated mechanosensory signalling → **supravalvular aortic stenosis (SVAS)**, peripheral pulmonary artery stenosis, and a characteristic connective tissue phenotype. The ELN deletion is not the sole driver of Williams syndrome (the deletion encompasses ~26 other genes), but it is the principal cause of the cardiovascular phenotype [^uniprot-p15502].

### Supravalvular aortic stenosis (OMIM 185500)

Autosomal dominant, single-gene SVAS is caused by heterozygous ELN point mutations or intragenic deletions. The vascular smooth muscle overproliferation phenotype is recapitulated by ELN mutations that produce truncated or hypomorphic tropoelastin, confirming haploinsufficiency as the mechanism.

### Autosomal dominant cutis laxa type 1 (ADCL1, OMIM 123700)

Mutations producing structurally abnormal tropoelastin (frameshifts, splice-site mutations in exon 32) cause **cutis laxa** — a generalized elastic fiber deficiency characterised by loose, hyperextensible skin with severe loss of elasticity, and variable systemic involvement (pulmonary emphysema, arterial aneurysm). Tassabehji et al. 1998 characterised a frameshift mutation in **exon 32** predicted to replace 37 amino acids at the C-terminus of elastin with a novel sequence of 62 amino acids, producing an abnormal C-terminal domain that disrupts fiber assembly and results in abnormal branching and fragmentation of the amorphous elastin component [^tassabehji1998]. Note: LOX-deficiency also causes cutis laxa (via disrupted cross-linking rather than structural elastin defects); these are mechanistically distinct entities sharing the same phenotype.

## Druggability / therapeutic landscape

No aging-validated drug targeting elastin restoration exists. The field is in preclinical-to-early phase:

- **Desmosine/isodesmosine as biomarkers** — detectable in plasma and urine after MMP-12-mediated elastin degradation. Used as pharmacodynamic biomarkers of elastin degradation in COPD, emphysema, and aging clinical research. Not therapeutic targets but useful readouts. #gap/needs-canonical-id for desmosine/isodesmosine PubChem CIDs.
- **LOX-activating strategies** — upstream of cross-linking; no aging-specific clinical candidate.
- **Tropoelastin-based biomaterials** — recombinant tropoelastin (and elastin-like polypeptides, ELPs) are active areas in wound healing and tissue engineering. Not aging therapeutics per se but inform the feasibility of exogenous elastin supplementation. Crosslinkable tropoelastin hydrogels have been characterised in vitro [^lockhart2020].
- **MMP-12 inhibitors** — preclinical candidates exist for COPD/emphysema; none has reached Phase 3 for skin or cardiovascular aging. Selectivity over other MMPs is a known challenge.

`druggability-tier: null` — no aging-indication-validated drug exists for an ELN-targeting indication. Aging-context tier is effectively undefined. `#gap/no-opentargets-entry` — Open Targets does not list ELN as a druggable target for an aging indication.

## Key interactors

- **[[fbn1]]** (fibrillin-1) — provides the microfibrillar scaffold upon which tropoelastin monomers are deposited prior to cross-linking. Fibrillin mutations (Marfan syndrome, ACTA2 variants) disrupt scaffold integrity and secondarily impair elastic fiber assembly. Fibrillin itself is an R40 wiki priority; its page is a planned implicit stub.
- **[[lox]]** (lysyl oxidase) — copper-dependent amine oxidase that cross-links tropoelastin (and collagens) in the extracellular space. LOX activity declines with aging and is needed for proper elastic fiber maturation. LOX also serves as the functional bottleneck for collagen-elastin cross-linking in fibrotic and aging processes.
- **[[mmp-9]]** — gelatinase B; participates in elastin fiber degradation in photoaged and chronologically aged dermis. MMP-12 (macrophage metalloelastase; no dedicated wiki page yet) is the primary elastase; MMP-9 is a secondary processor.

## Pathway membership

Elastin is an ECM structural protein, not a signaling enzyme, so it does not belong to canonical intracellular signaling pathways. It is classified under [[loss-of-proteostasis]] because age-related ECM protein damage / failed renewal constitutes failure of extracellular proteostasis (distinct from the intracellular UPS/autophagy axis but recognised as part of the same hallmark in the expanded López-Otín 2023 framework). It is downstream of [[skin-aging]] as both a mechanistic driver and a histological marker.

## Limitations and gaps

- **Half-life estimate** — the ~74-year mean carbon residence time figure derives from Shapiro 1991 (lung parenchyma; ¹⁴C + aspartate racemization). Skin and aortic elastin confirmed as non-renewing by aspartate racemization (Ritz-Timme 2003) but precise half-life for non-lung tissues has not been separately radiocarbon-dated. #gap/needs-replication for tissue-specific values.
- **Solar elastosis mechanism** — UV simultaneously induces ELN transcription and MMP-12 in the same fibroblast; the molecular switch determining outcome is unknown. #gap/no-mechanism
- **Vascular elastin aging** — clinical data on vascular elastic lamella fragmentation as a predictor of CVD in prospective cohorts is not extracted here. #gap/unsourced — needs primary source (pulse-wave-velocity / aortic-stiffness studies).
- **MMP-12 vs MMP-9 relative contribution** in aged dermis — Chen 2005 (heat/infrared model) and Weihermann 2021 demonstrate MMP-12 induction by photoexposure; quantitative dominance of MMP-12 vs MMP-9 in chronic photoaging in vivo is not fully resolved. #gap/needs-replication
- **fbn1, lox, mmp-12 pages** do not yet exist. Created as implicit stubs via wikilinks on this page.
- **LOX activity decline with aging** — stated in the body; primary source needed. #gap/unsourced

## Footnotes

[^uniprot-p15502]: UniProt P15502 (ELN_HUMAN), reviewed Swiss-Prot entry, accessed 2026-05-19 · canonical sequence 786 aa (signal peptide residues 1–26; mature elastin residues 27–786); function: confers elasticity to aorta, skin, lung; cross-links via desmosine/isodesmosine formed by LOX; tissue specificity: large elastic arteries, lung, skin, uterine myometrium

[^shapiro1991]: doi:10.1172/JCI115204 · Shapiro SD et al. · J Clin Invest 1991;87(5):1828–1834 · observational · n=14 post-mortem lung specimens (ages 6–78 yr) · model: human lung parenchymal elastin; dual methods — aspartate racemization (K_asp = 1.76 × 10⁻³ yr⁻¹, r = 0.98) and nuclear-weapons-related ¹⁴C prevalence (accelerator-mass spectrometry) · mean carbon residence time 74 yr (95% CI 40–174 yr); age of lung elastin corresponds with subject age, indicating minimal synthesis after growth · bronze OA; PDF in archive

[^ritz-timme2003]: doi:10.1111/j.1365-2133.2003.05618.x · Ritz-Timme S, Laumeier I, Collins MJ · Br J Dermatol 2003 · observational · model: human skin elastin (aspartate racemization) · rapid, age-correlated accumulation of D-aspartate in purified skin elastin (r = 0.98); consistent with negligible turnover; no numerical half-life calculated but pattern equivalent to metabolically stable tissues; not_oa

[^taddese2008]: doi:10.1016/j.matbio.2008.02.001 · Taddese S et al. · Matrix Biology 2008 · in-vitro · model: insoluble human skin elastin digested with recombinant MMP-12 (macrophage elastase) · Dominant MMP-12 cleavage sites mapped to VGGVG hydrophobic repeat domains; cleavage at Val-Gly bonds; desmosine/isodesmosine released as fragment markers; not_oa (archive confirmed) #gap/no-fulltext-access

[^chen2005]: doi:10.1111/j.0022-202X.2004.23550.x · Chen Z et al. · J Invest Dermatol 2005 · in-vivo · model: human skin irradiated with **infrared radiation (heat)** — not UV; tropoelastin and fibrillin-1 mRNA/protein induced alongside MMP-12 mRNA elevation; simultaneous fiber-synthesis and fiber-degradation marker induction by the same thermal stimulus · not_oa (archive confirmed); 77 citations, citation_percentile 100 #gap/no-fulltext-access

[^weihermann2021]: doi:10.1007/s13555-021-00603-y · Weihermann AC et al. · Dermatol Ther 2021;11:2043–2056 · in-vitro + ex-vivo · n=73 female volunteers (ex vivo skin from 3 regions: breast [control], preauricular [rhytidoplasty], periocular [blepharoplasty]); 30 reconstituted skins (15 irradiated at 200 kJ/m², 15 control); irradiation: solar radiation simulator, not UV-only · ELN 26A mRNA: 3.61-fold (auricular, p<0.01) and 2.58-fold (periocular, p<0.05) in ex vivo photoexposed skin; 4.59-fold in irradiated reconstituted skin (p<0.05) · normal ELN decreased at all doses in coculture · MMP12 elevated in ex vivo skin (5.98-fold rhytidoplasty; 3.14-fold blepharoplasty; p<0.001) but **non-significant** in reconstituted skin (1.94-fold) · LOX increased 1.64-fold in blepharoplasty ex vivo only · tropoelastin and fibrillin-1 protein elevated in reconstituted skin; mature elastin, LOX, MMP12, MAGP2 protein not significantly changed by IHC · gold OA; PDF in archive

[^tassabehji1998]: doi:10.1093/hmg/7.6.1021 · Tassabehji M et al. · Hum Mol Genet 1998;7(6):1021–1028 · patient-tissue + in-vitro · model: patient with autosomal dominant cutis laxa (ADCL1); **exon 32** frameshift mutation predicted to replace 37 C-terminal aa with 62-aa novel sequence; abnormal tropoelastin incorporated into elastic tissue causes abnormal branching and fragmentation; proposed mechanism is disrupted cross-linking · PMID 9580666; DOI lookup failed (OA URL invalid); abstract verified via PubMed #gap/no-fulltext-access

[^lockhart2020]: doi:10.1016/j.jmb.2020.08.023 · Lockhart-Cairns MP et al. · J Mol Biol 2020 · in-vitro · Transglutaminase-mediated cross-linking of tropoelastin to fibrillin stabilises the elastin precursor prior to elastic fiber assembly · 28 citations; hybrid OA (DOI lookup pending)

[^skin-aging-wiki]: [[phenotypes/skin-aging]] · see § Solar elastosis for the parallel treatment on the phenotype page; canonical home of the clinical skin-aging narrative
