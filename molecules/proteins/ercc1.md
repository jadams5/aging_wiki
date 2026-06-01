---
type: protein
aliases: [ERCC-1, excision repair cross-complementation group 1, DNA excision repair protein ERCC-1]
uniprot: P07992
ncbi-gene: 2067
hgnc: 3433
ensembl: ENSG00000012061
mouse-ortholog: Ercc1
genage-id: 13870
key-domains: [HhH2-dimerization, DNA-binding-central, nuclear-localization-signal, disordered-N-terminal]
key-ptms: []
pathways: ["[[nucleotide-excision-repair]]", "[[interstrand-crosslink-repair]]", "[[dna-damage-response]]"]
hallmarks: ["[[genomic-instability]]"]
sens-categories: []
complex-subunits: [Q92889]
known-interactors: ["[[xpf]]", "[[xpa]]", "[[rpa]]", "[[pcna]]"]
druggability-tier: 3
caused-by: ["[[genomic-instability]]"]
causes: ["[[cellular-senescence]]", "[[stem-cell-exhaustion]]", "[[chronic-inflammation]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Niedernhofer 2006, Vermeij 2016, Weeda 1997, and Jaspers 2007 verified against primary-source PDFs; McWhir 1993 DOI confirmed via Crossref (not OA, PDF not in archive); Gregg 2011 and Deng 2017 not independently verified (both closed-access, not_oa per archive); canonical-database identity fields (UniProt, NCBI Gene, HGNC, Ensembl) not re-verified against databases"
---


# ERCC1

ERCC1 (Excision Repair Cross-Complementation group 1) is the non-catalytic scaffold subunit of the **ERCC1-XPF heterodimeric endonuclease**, the enzyme responsible for the **5' incision in nucleotide excision repair (NER)**. Loss of ERCC1-XPF activity in mice produces the most severe accelerated-aging phenotype known from a single DNA repair defect: Ercc1-/- knockouts die by ~4 weeks with progeroid features spanning multiple organ systems (Niedernhofer 2006), and a dietary restriction experiment in the Ercc1^Δ/− compound heterozygote (Vermeij 2016) established some of the strongest epistatic evidence linking cumulative DNA damage to nutrient-sensing pathways.

## Identity

- **UniProt:** P07992 (ERCC1_HUMAN)
- **NCBI Gene:** 2067
- **HGNC:** 3433 / symbol ERCC1
- **Ensembl:** ENSG00000012061
- **Mouse ortholog:** Ercc1 (one-to-one; progeroid mouse models use this gene)
- **Length:** 297 amino acids (canonical isoform)
- **Complex partner:** XPF (ERCC4, UniProt Q92889) — obligate heterodimer; neither subunit is stable without the other

## ERCC1-XPF complex

ERCC1 and XPF form a tightly associated obligate heterodimer. ERCC1 provides the **HhH2 (helix-hairpin-helix) domain** (residues 220–297) that mediates dimerization with XPF's C-terminal nuclease/HhH2 region. Structural studies show the two HhH2 domains interlock to create the interface; disrupting this interface destabilizes both proteins [^gregg2011].

XPF is the catalytic subunit — it carries the GDxxS nuclease motif that executes the 5' incision. ERCC1 is non-catalytic but required for:
1. Stability and nuclear import of XPF
2. DNA damage recognition (the ERCC1 N-terminus and central domain interact with XPA and RPA, positioning the heterodimer at the bubble junction)
3. Substrate specificity (the heterodimer is structure-specific, not sequence-specific)

The heterodimer's **central DNA-binding region of ERCC1** (residues 134–156) contacts the damaged strand just 5' of the lesion-containing bubble, orienting XPF's catalytic site for the incision ~20 nt 5' of the lesion [^gregg2011].

## NER mechanism — role of ERCC1-XPF

[[nucleotide-excision-repair]] removes bulky helix-distorting lesions (UV photoproducts, platinum adducts, some oxidative lesions). The ERCC1-XPF heterodimer executes **one of two dual incisions** that excise the ~27–29 nt damage-containing oligonucleotide:

1. **5' incision (ERCC1-XPF)** — ~20–22 nt 5' of the lesion
2. **3' incision (XPG)** — ~6–8 nt 3' of the lesion

The incisions are coordinated; ERCC1-XPF acts first in GG-NER and after XPG binding in TC-NER. After excision, the gap is filled by Pol delta/epsilon + PCNA, ligated by LIG1 [^gregg2011].

Beyond NER, ERCC1-XPF also participates in:
- **Interstrand crosslink repair (ICL)** — unhooks the crosslink; operates with the Fanconi Anemia pathway
- **Microhomology-mediated end joining (MMEJ)** — alternative DSB repair via ERCC1-XPF-mediated flap trimming #gap/needs-replication

## Role in aging

### The Ercc1-/- progeroid mouse — Niedernhofer 2006

The central result on ERCC1 and aging comes from Niedernhofer et al. 2006, which characterized the **Ercc1-/- knockout mouse** as an accelerated-aging model. (Note: the paper also describes the human XFE progeroid patient as its primary motivating case; the Ercc1-/- mouse serves as the mechanistic model.) The earlier Ercc1*292 truncation/hypomorphic allele was characterized separately by Weeda 1997 [^weeda1997]; the compound heterozygote Ercc1^Δ/− model used in lifespan rescue experiments belongs to Vermeij 2016 [^vermeij2016] [^niedernhofer2006].

The Ercc1-/- mouse:
- Growth arrests dramatically in the second week, typically dying by four weeks of age (n=27 lifespan cohort; vs. wild-type lifespan ~2 years) [^niedernhofer2006]
- Exhibits **progeroid features across multiple organ systems**: liver dysfunction (elevated p53, polyploidy, hepatocyte senescence), dystonia and progressive ataxia (neurodegeneration), sarcopenia, bone marrow abnormalities, kyphosis, renal insufficiency, and increased reactive oxygen species
- Shows **suppression of the somatotropic axis**: significantly lower circulating IGF-1 (P<0.001 vs littermate controls), hypoinsulinemia (P<0.03), and reduced blood glucose (P<0.001) — a metabolic profile resembling caloric restriction
- XPF-ERCC1 levels were undetectable in Ercc1-/- mouse tissue; NER capacity severely impaired in primary cells

The authors proposed that **endogenous DNA damage** (particularly cytotoxic interstrand crosslinks), not exogenous insults, drives the progeroid phenotype and activates an IGF-1/insulin-mediated survival response, making this model relevant to normal aging rather than an artifact of UV exposure [^niedernhofer2006].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | NER is highly conserved; human ERCC1-XPF has essentially identical biochemistry |
| Phenotype conserved in humans? | partial | XFE progeroid syndrome (ERCC1 mutations in humans) shows accelerated aging; details below |
| Replicated in humans? | partial | XFE provides human genetic support; Ercc1-/- specific phenotypic details not directly testable in humans |

#gap/needs-human-replication — The specific claim that endogenous DNA damage suppresses the somatotropic axis in the same way in normal human aging has not been directly demonstrated.

### Vermeij 2016 — dietary restriction rescues the Ercc1^Δ/− mouse

Vermeij et al. 2016 subjected **Ercc1^Δ/− mice** (compound heterozygotes: one delta/truncation allele, one null allele; F1 C57BL6J/FVB background; natural lifespan 4–6 months) to 30% dietary restriction (DR), initiated at week 7 with 10% food reduction, reaching 30% DR from week 9 onward. Key findings [^vermeij2016]:
- **~200–250% extension of median remaining lifespan**: males from 10 to 35 weeks (250% extension; p<0.0001); females from 13 to 39 weeks (200% extension; p<0.0001). A replication cohort in a second facility showed 180% extension (p<0.0001)
- Dramatic improvement across multiple healthspan metrics: DR animals retained ~50% more neurons in the neocortex vs ad-libitum controls; locomotor function fully preserved well beyond the lifespan of ad-libitum mice; improvements in liver histology, bone morphometry, vascular function, and immune parameters
- Reduced γH2AX foci (DNA damage marker) in Purkinje cell nuclei of DR mice, indicating DR attenuates accumulation of genomic damage rather than merely compensating for downstream consequences
- Transcriptomic analysis of Ercc1^Δ/− liver at 11 weeks: ~2/3 of DR-induced differentially expressed genes are shared with wild-type DR; 684 of 688 common DEGs change in the same direction — establishing that the DR response in the progeroid mutant closely resembles normal DR
- DR also extended lifespan of Xpg-/- mice (~18 weeks to ~22–25 weeks; p=0.0042), extending the observation beyond Ercc1

#gap/needs-replication (single laboratory; replication in independent Ercc1^Δ/− colony provided but not by an independent group)

The authors concluded that **DNA damage causally drives activation of a DR-like survival response** (suppression of GH/IGF-1 and mTOR signaling), and that exogenous DR reinforces this response to drastically extend health and lifespan [^vermeij2016].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | partial | CR modulates IGF-1/mTOR in humans; DNA-damage → nutrient sensing link untested in humans |
| Phenotype conserved in humans? | unknown | No equivalent human experiment is possible |
| Replicated in humans? | no | Mouse model only |

#gap/needs-human-replication — The CR rescue is entirely from the Ercc1^Δ/− model; whether reducing DNA damage load in human aging mimics this effect is unknown. See [[caloric-restriction]] for human CR evidence.

### ERCC1 expression declines with age

Deng et al. 2017 measured ERCC1 mRNA in peripheral blood mononuclear cells (PBMCs) from 147 donors and found a significant age-dependent decline (r = −0.578; p < 0.001), paralleled by an even steeper decline in XPF (r = −0.844) [^deng2017]. Protein levels in plasma did not show age-related differences in that study. Equivalent tissue-level declines in NER capacity with age have been observed in earlier studies #gap/unsourced (tissue-level data needs dedicated citations).

The implication is that **NER capacity diminishes with normal aging in humans**, creating a positive feedback: less repair → more cumulative damage → accelerated functional decline. This would position ERCC1-XPF downregulation as a driver — not merely a correlate — of the [[genomic-instability]] hallmark.

#gap/no-mechanism — The mechanism driving age-related decline of ERCC1/XPF expression is unknown; candidates include promoter hypermethylation, altered transcription-factor activity, or post-transcriptional regulation.

## Disease — XFE progeroid syndrome

**XFE progeroid syndrome** (OMIM #610651) is a rare human disorder caused by compound heterozygous or homozygous mutations in ERCC1 (or ERCC4/XPF). The first documented patient was reported by Jaspers et al. 2007: patient 165TOR, born after 37-week pregnancy, presenting with cerebro-oculo-facio-skeletal (COFS) syndrome — microcephaly, bilateral microphthalmia, blepharophimosis, micragnathia, arthrogryposis with rocker-bottom feet, bilateral congenital hip dislocation, growth failure, and profound psychomotor retardation; died at 14 months from respiratory failure. Two compound heterozygous ERCC1 mutations were identified: Q158X (maternal; functional null — truncates before the XPF-binding domain) and F231L (paternal; missense in the XPF-binding domain). NER was moderately defective: UDS (GG-NER) at 15% of normal; RNA synthesis recovery (TC-NER) at 13% of normal — not the "20–30% residual activity" reported in some summaries [^jaspers2007].

Subsequent cases have shown a phenotypic spectrum from severe COFS-like presentations to milder progeroid features, depending on the residual ERCC1-XPF activity. Common to all cases: **accelerated tissue aging in multiple organs**, confirming the mouse model's translational relevance.

**Cockayne syndrome** (CS) — caused by CSA or CSB mutations affecting TC-NER — shares features with XFE (neurodegeneration, cachexia, progeroid appearance) but is caused by loss of a distinct NER sub-pathway. ERCC1 itself is not mutated in classic CS, but the phenotypic overlap supports the broader model that **NER failure drives progeroid aging** [^gregg2011].

## Pathway membership

- [[nucleotide-excision-repair]] — 5' incision endonuclease subunit (obligate heterodimer with XPF)
- [[interstrand-crosslink-repair]] — crosslink unhooking step; cooperates with Fanconi Anemia pathway
- [[dna-damage-response]] — downstream effector of damage-sensing; converges on [[p53]] and [[p21]] induction

## Key interactors

- [[xpf]] (ERCC4) — obligate catalytic partner; forms stable heterodimer with ERCC1
- [[xpa]] — positions ERCC1-XPF at the 5' boundary of the open bubble during NER
- [[rpa]] — coats the undamaged strand; contributes to ERCC1 recruitment
- [[pcna]] — gap-filling DNA synthesis after dual incision; interacts with ERCC1
- [[p53]] — activated by persistent DNA damage when ERCC1-XPF is deficient; upstream of SASP

## Druggability and therapeutic relevance

ERCC1 is a **non-catalytic scaffold protein** — it has no enzymatic active site to target with a small molecule. Its primary druggable surface is the **XPF-binding HhH2 interface**, a protein-protein interaction (PPI). Open Targets classifies ERCC1 as a tier 3 target (predicted druggable via PPI; no clinical-stage drug) #gap/needs-canonical-id — druggability tier requires confirmation from Open Targets API (ENSG00000012061) on next lint pass.

**Cancer-relevant context:** ERCC1 expression level in tumor tissue predicts response to platinum-based chemotherapy (cisplatin, oxaliplatin). High ERCC1 → efficient repair of platinum adducts → resistance. This has driven interest in ERCC1 inhibition as a chemosensitization strategy — but small-molecule ERCC1-XPF PPI inhibitors remain early-stage. See [[xpf]] for compound-level details. #gap/needs-canonical-id (no compound page exists yet for ERCC1-XPF inhibitors).

**Aging-relevant therapeutic hypothesis:** Restoring ERCC1-XPF activity in aged tissues (via gene therapy or small-molecule stabilization of the heterodimer) could slow accumulation of endogenous DNA damage. Currently speculative; no pre-clinical aging data. #gap/no-mechanism and #gap/needs-human-replication.

## Limitations and gaps

- `#gap/needs-human-replication` — The progeroid and CR-rescue evidence is entirely mouse; human XFE cases are too rare and heterogeneous for quantitative extrapolation.
- `#gap/needs-replication` — The Vermeij 2016 DR rescue (200–250% median lifespan extension in Ercc1^Δ/− mice) has been replicated only within the same study group (different facility); independent replication by another laboratory has not been published.
- `#gap/no-mechanism` — Why ERCC1/XPF expression declines with age in human PBMCs is unknown.
- `#gap/unsourced` — Tissue-level NER capacity decline with age in non-PBMC human tissues needs dedicated citations; only the Deng 2017 PBMC study has been cited here.
- `#gap/needs-canonical-id` — Druggability tier from Open Targets not confirmed via API (page rendered without data). Verify against ENSG00000012061 entry.
- McWhir 1993 DOI confirmed as 10.1038/ng1193-217 via Crossref (title: "Mice with DNA repair gene (ERCC-1) deficiency have elevated levels of p53, liver nuclear abnormalities and die before weaning"); paper is not OA and not in the archive.

## Footnotes

[^niedernhofer2006]: doi:10.1038/nature05456 · Niedernhofer LJ et al. · *Nature* 2006 · in-vivo · n=27 (Ercc1-/- lifespan cohort) · model: Ercc1-/- knockout mouse (F1 hybrid background); characterizes XFE patient and Ercc1-/- mouse as mechanistic model; somatotropic axis suppression · PDF locally available; verified

[^vermeij2016]: doi:10.1038/nature19329 · Vermeij WP et al. · *Nature* 2016 · in-vivo (dietary restriction intervention) · model: Ercc1^Δ/− compound heterozygote (F1 C57BL6J/FVB); natural lifespan 4–6 months; DR initiated at week 7 (10%) escalating to 30% by week 9; median lifespan extended 200% (females) to 250% (males); p<0.0001 · PDF locally available; verified

[^mcwhir1993]: doi:10.1038/ng1193-217 · McWhir J et al. · *Nature Genetics* 1993 · in-vivo · n=not stated · model: Ercc1-/- mouse; liver nuclear abnormalities, die before weaning · DOI confirmed via Crossref; not OA; not in archive

[^weeda1997]: doi:10.1016/s0960-9822(06)00190-4 · Weeda G et al. · *Current Biology* 1997 · in-vivo · model: Ercc1*292 (7-aa C-terminal truncation, ~15% transcript of WT) and Ercc1-/- knockout; C57BL/6/129 hybrid background; maximal ages 78 days (*292) and 38 days (knockout); UDS in *292 cells 4% of WT · PDF locally available; verified

[^jaspers2007]: doi:10.1086/512486 · Jaspers NG et al. · *Am J Hum Genet* 2007 · case-report · n=1 (patient 165TOR) · model: human compound heterozygote ERCC1 (Q158X + F231L); COFS syndrome; UDS 15% normal, TC-NER 13% normal; died at 14 months · PDF locally available; verified

[^gregg2011]: doi:10.1016/j.dnarep.2011.04.026 · Gregg SQ, Robinson AR, Niedernhofer LJ · *DNA Repair* 2011 · review · model: ERCC1-XPF biochemistry + mouse/human phenotype synthesis · not OA; not downloaded

[^deng2017]: doi:10.1016/j.jflm.2017.05.005 · Deng XD et al. · *J Forensic Leg Med* 2017 · observational · n=147 donors · model: human PBMCs; ERCC1 mRNA r = −0.578 with age · not OA; not downloaded
