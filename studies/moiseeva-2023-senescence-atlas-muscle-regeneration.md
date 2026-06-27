---
type: study
doi: 10.1038/s41586-022-05535-x
pmid: 36544018
pmc: PMC9812788
title: "Senescence atlas reveals an aged-like inflamed niche that blunts muscle regeneration"
authors: [Moiseeva V, Cisneros A, Sica V, Deryagin O, Lai Y, Jung S, Andrés E, An J, Segalés J, Ortet L, Lukesova V, Volpe G, Benguria A, Dopazo A, Benitah SA, Urano Y, del Sol A, Esteban MA, Ohkawa Y, Serrano AL, Perdiguero E, Muñoz-Cánoves P]
year: 2023
journal: Nature
volume: 613
issue: 7942
pages: 169-178
study-design: in-vivo
publication-type: research-article
organism: multi   # primary: mus-musculus; also homo-sapiens (human muscle biopsy confirmation)
n-subjects: null   # mixed; mouse: variable n per group (3–11 mice per condition, see body); scRNA-seq atlas 21,449 cells; human biopsies: n=5 samples, female, mean age 81±7.5 yr
intervention: []   # observational atlas + mechanistic interventions (senescent-cell transplant, CD36 neutralization, genetic senolytic)
hallmarks-tested: ["[[cellular-senescence]]", "[[chronic-inflammation]]"]
human-evidence: true   # senescent cells confirmed in human skeletal muscle biopsies
peer-reviewed: true
preregistered: false
key-findings: [senescent-cell-niche-in-muscle-regeneration, inflammation-fibrosis-universal-hallmarks, aged-like-inflamed-niche, satellite-cell-arrest, cd36-neutralization-accelerates-regeneration, senescent-cell-transplant-delays-regeneration, human-muscle-senescent-cell-accumulation]
local-pdf: null
literature-checked-through: 2026-06-26
verified: true
verified-date: 2026-06-26
verified-by: claude
verified-scope: "Full PDF read (PMC9812788 CC BY OA). All key quantitative claims cross-checked against figures, methods, and discussion. Author Correction (doi:10.1038/s41586-023-05765-7) reviewed — purely a name-hyphenation fix, no scientific content affected. Corrections applied: CD36 terminology (fatty acid translocase → scavenger receptor per paper's own language); human biopsy n and demographics filled; SPiDER enrichment specificity added; cell-type order-of-abundance added; SASP component range (78–363) added; CD36 neutralization mechanism clarified (reduces SASP not cell number); senescent cell transplant n added; WT vs reporter strain distinction added."
---

**Author Correction:** doi:10.1038/s41586-023-05765-7 (published 2023-02-06, *Nature* 614:E45). The correction fixed only the hyphenation of co-author Salvador Aznar Benitah's name (wrongly rendered "Aznar-Benitah" in the original). No scientific data, figures, results, or claims were altered. This page's content is unaffected.

# Senescence atlas reveals an aged-like inflamed niche that blunts muscle regeneration

## TL;DR

Moiseeva et al. 2023 constructed the first single-cell atlas of senescent cells in damaged skeletal muscle, isolating distinct senescent cell populations from young and old mice using a novel senescent-cell enrichment sorting protocol to overcome the scarcity of these cells in tissue. The study demonstrates that senescent cells are **not incidental bystanders but active, integral components of the muscle regenerative niche** — and that they repress regeneration at all life stages. Two universal transcriptional hallmarks of these muscle-resident senescent cells emerge regardless of cell type, regeneration stage, or host age: **inflammation** and **fibrosis**. Together these create an aged-like inflamed niche that recapitulates features of [[inflammaging]] and arrests [[satellite-cells]] proliferation. Reducing senescent-cell burden (genetically or pharmacologically) or specifically neutralizing their inflammatory output via CD36 blockade accelerates muscle regeneration in both young and old animals. Transplanting senescent cells into young muscle is sufficient to delay regeneration. The study also confirms senescent cell accumulation in human skeletal muscle, providing a translational anchor for the mouse findings. This paper is a mechanistic cornerstone linking [[hallmarks/cellular-senescence]] to [[sarcopenia]]-related regenerative decline.

## Design

### Primary experimental system

- **Organism:** C57BL/6 wild-type (WT) mice and p16-3MR reporter mice (C57BL/6 background; express *Renilla* luciferase + RFP + thymidine kinase under the *Cdkn2a*/p16^INK4a^ promoter); young (3–6 months) and aged (≥28 months geriatric) cohorts. Dystrophic mdx/p16-3MR crosses on DBA/2 background used for chronic-damage experiments. Human muscle biopsy samples (vastus lateralis, EU/FP7 Myoage Consortium biobank) for translational confirmation: n = 5 samples; female patients aged 69, 82, 80, 89, 85 years; mean age 81 ± 7.5 years.
- **Injury model:** Cardiotoxin (CTX; 10 μM, Latoxan LS102) intramuscular injection into tibialis anterior (TA) muscle — standard sterile acute regeneration model
- **Senescent-cell isolation:** SPiDER-β-gal FACS-based senescent-cell enrichment sorting protocol (SPiDER; similar to C12FDG fluorescent probe) achieving 93.6% enrichment in senescent cells (Extended Data Fig. 1g) — key methodological innovation enabling downstream single-cell transcriptomics
- **Genomics:** scRNA-seq (10x Chromium Single Cell 3′ GEM, targeting 5,000 cells per dataset, two biological replicates per dataset; MGI DNBSEQ-T7 sequencer; average read depth 15,551 per cell) yielding a complete 21,449-cell transcriptomic atlas from SPiDER+ and SPiDER− fractions at 3 d.p.i. in young mice

### Mechanistic intervention arms (mouse)

1. **Senescent-cell reduction** — genetic clearance via ganciclovir (GCV; 25 mg/kg i.p. daily for 4–7 days) in p16-3MR mice; pharmacological clearance via dasatinib (5 mg/kg oral/gavage) + quercetin (50 mg/kg oral/gavage; D+Q) in WT mice; both administered starting at 3 d.p.i.
2. **CD36 neutralization** — anti-CD36 antibody (10 μg in young mice, 20 μg in old mice; i.p.; starting at 3 d.p.i. for 4 days). Critically, CD36 blockade did NOT reduce the number of senescent cells (Fig. 6d) — it reduced several SASP proteins (Ccl2, Ccl3, Il10, Cd40, Mmp3) without cell elimination, establishing a SASP-targeting ("senomorphic") mechanism distinct from senolysis.
3. **Senescent-cell transplantation** — FACS-isolated SPiDER+ cells (10,000 cells per TA; 5,000 per TA when cell types transplanted individually) Dil-labelled and injected into pre-injured young TA muscles 2 days after CTX; n = 4 mice per group

### Endpoints

- Muscle regeneration kinetics (primary)
- Satellite cell proliferation
- Inflammatory and fibrotic gene signatures in the niche (scRNA-seq)
- Transcriptional hallmarks of isolated senescent cell populations

## Key results

### Senescent cells as active niche components

Senescent cells are **integral components of the skeletal-muscle regenerative niche** that actively repress regeneration. This holds at all stages of regeneration and in both young and old animals — senescent cells are not simply an artifact of aging but a functional (if maladaptive) element of the regenerative program itself.

### Single-cell atlas: three senescent cell types and two universal hallmarks

scRNA-seq of FACS-enriched senescent cells (21,449-cell atlas at 3 d.p.i.) from damaged muscle identified **three major senescent cell populations** in the regenerating niche, in order of abundance: **myeloid cells (MCs; macrophages/monocytes) ≥ FAPs (fibro-adipogenic progenitors) > SCs (satellite cells/muscle stem cells)**, plus smaller populations of endothelial cells, neutrophils, and antigen-presenting cells (Fig. 1f). These populations vary in their senescence transcriptome by cell type, host age, and regeneration time-point. Despite this heterogeneity, 47 differentially expressed genes were found common to all Sen vs NSen comparisons, and pathway enrichment identified two transcriptional signatures **universal** across all conditions (confirmed in at least 8 out of 12 comparisons; FDR < 0.25):

1. **Inflammation** — complement, coagulation, interferon signalling, cytokine and TNF/NF-κB signalling (Ccl2, Ccl7, Ccl8, Isg15); consistent with a senescence-associated secretory phenotype ([[sasp]])
2. **Fibrosis** — matrix remodelling/ECM glycoproteins, collagen, TGFβ signalling (Col3a1, Col6a2, Timp2)

The number of SASP components per cell type ranged from **78 to 363** depending on condition (Extended Data Fig. 10a), underscoring SASP heterogeneity while conserving the two hallmarks. These twin hallmarks create an aged-like inflamed niche in damaged muscle, recapitulating features of systemic [[inflammaging]] at the local tissue level.

### Aged-like niche arrests satellite-cell proliferation

The senescent-cell-generated inflamed niche **arrests satellite-cell (muscle stem cell) proliferation** and suppresses the normal regenerative response. This mechanism provides a cellular basis for the impaired muscle regeneration seen with aging, even in contexts where satellite cell numbers may be relatively preserved. Critically, because senescent cells create this niche even in young animals, they constitute a baseline regenerative brake that worsens as burden increases with age.

### Reducing senescent-cell burden accelerates regeneration

Clearance of senescent cells — whether by genetic means or pharmacological senolytic intervention — **accelerates muscle regeneration in both young and old mice**. The benefit in young animals is particularly informative: it demonstrates that senescent cells impose a regenerative cost independent of the aging context, not merely a confound of the aged systemic environment.

### CD36 neutralization recapitulates clearance benefit via a senomorphic (SASP-targeting) mechanism

Antibody-mediated neutralization of **CD36** — a scavenger receptor related to lipid metabolism and inflammatory function, upregulated in all three senescent cell types — was sufficient to **accelerate regeneration in both young and old mice** (increased MYH3+ fibre cross-sectional area; improved specific force; reduced Sirius Red fibrosis) without reducing the number of senescent cells (Fig. 6d, 6f, 6g). CD36 blockade instead reduced a subset of SASP proteins encoded by Sen-enriched genes (Ccl2, Ccl3, Il10, Cd40, Mmp3) and whole-muscle secretome inflammatory components (Fig. 6e). Cd36 silencing in sorted senescent cells (siCd36) recapitulated this result: siCd36-treated Sen cells had no negative effect on SC proliferation in Transwell co-culture, whereas scramble-control Sen cells reduced SC proliferation (Fig. 6h, 6i). The authors describe CD36 as acting as a **senomorphic** in vivo — identifying it as a druggable node for modulating the senescent-cell niche through SASP reduction rather than complete cell elimination.

### Senescent-cell transplantation delays regeneration

Transplanting isolated senescent cells into young muscle **delays regeneration**, directly establishing their causal role. This gain-of-function experiment rules out the alternative interpretation that senescent cells merely correlate with impaired regeneration as a consequence (rather than cause) of a dysfunctional environment.

### Senescent cells accumulate in human skeletal muscle

Senescent cells (SA-β-gal+ and CDKN2A+, double-positive) were confirmed to **accumulate in human skeletal muscle** (Fig. 1d; n = 5 samples per group; female patients aged 69, 82, 80, 89, 85 years; mean 81 ± 7.5 years; vastus lateralis biopsies, EU/FP7 Myoage Consortium biobank). Damaged human muscle additionally contained senescent SCs (PAX7+), FAPs (PDGFRα+), and MCs (CD68+) positive for the DNA-damage response marker 53BP1 (Extended Data Fig. 3k). The human-biopsy confirmation is immunohistochemical (SA-β-gal and CDKN2A); no functional or intervention data in humans is reported in this paper.

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Senescence biology, SASP, and satellite-cell niche broadly conserved across mammals; CD36 expressed in human muscle |
| Phenotype conserved in humans? | partial | Senescent-cell accumulation confirmed in human muscle biopsies (this paper); regenerative impairment with aging is well-established clinically (sarcopenia) but direct causal test in humans pending |
| Replicated in humans? | no | Clearance / CD36-neutralization benefit demonstrated in mouse only; no human RCT on senolytic-mediated muscle regeneration acceleration yet reported |

The human-muscle biopsy confirmation moves this from pure mouse biology to a translational hypothesis, but the intervention experiments (clearance, CD36 blockade, transplant) are entirely mouse-based. #gap/needs-human-replication

## Limitations

- **Injury model scope:** Cardiotoxin (CTX) is a sterile, acute muscle damage model. Authors extended to mild micropuncture injury and chronic mdx dystrophic muscle (Extended Data Fig. 3), finding consistent results, but translational relevance to chronic age-related atrophy (sarcopenia) and eccentric exercise-induced damage in humans remains an extrapolation not directly tested in this paper.
- **Genetic ablation methods:** The study uses distinct senescent-cell ablation methods (GCV in p16-3MR transgenic mice; D+Q pharmacologically), both of which have off-target effects the authors acknowledge as a limitation (Discussion, p.177). The p16-3MR model ablates all p16-expressing cells; p16 marks some non-senescent cells.
- **SPiDER sorting contamination:** A small percentage of non-senescent cells remain in the SPiDER+ fraction (stated enrichment is 93.6%, not 100%), acknowledged in the Discussion.
- **Human data is observational only:** The human-biopsy confirmation (n = 5 samples; female only; mean 81 ± 7.5 years; SA-β-gal + CDKN2A IHC) establishes accumulation but provides no functional, interventional, or causal data in humans. #gap/needs-human-replication
- **CD36 biology:** CD36 has broad biological functions beyond the senescent-cell secretome (lipid uptake, scavenger receptor functions in macrophages/foam cells). The paper demonstrates Cd36-siRNA in Sen cells abrogates the regeneration-suppressive effect in co-culture (Fig. 6i), supporting specificity, but in vivo CD36-antibody effects on non-senescent CD36+ cells (e.g., macrophages) cannot be fully excluded.
- **Single-laboratory study; independent replication pending.** The core findings (senescent-cell niche causality, CD36 senomorphic mechanism) have not yet been independently replicated as of the seeder date. #gap/needs-replication
- **Author Correction (doi:10.1038/s41586-023-05765-7):** Reviewed during verification — corrected only the hyphenation of co-author Salvador Aznar Benitah's name. No scientific content affected.

## Related wiki pages

- [[hallmarks/cellular-senescence]] — canonical hallmark page for senescent-cell biology
- [[processes/sasp]] — senescence-associated secretory phenotype; effector mechanism of the aged-like niche
- [[cell-types/satellite-cells]] — the stem cells whose proliferation is arrested by the senescent niche
- [[tissues/skeletal-muscle]] — tissue context; regenerative biology
- [[interventions/pharmacological/senolytics]] — pharmacological strategy for reducing senescent-cell burden
- [[hallmarks/chronic-inflammation]] — the inflammation dimension of the universal senescent-cell hallmark
- [[phenotypes/sarcopenia]] — downstream phenotype driven by impaired muscle regeneration with aging
- `[[cd36]]` — CD36 as druggable node for inflammatory secretome modulation; **page does not yet exist** #stub
- `[[inflammaging]]` — the aged-like inflamed niche mirrors systemic inflammaging at the tissue level; **page does not yet exist** #stub

## Cited by

[Auto-populated by Obsidian backlinks panel]
