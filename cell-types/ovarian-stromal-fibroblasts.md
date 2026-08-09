---
type: cell-type
aliases: [ovarian fibroblasts, ovarian stromal fibroblast]
cell-ontology-id: CL:2000063
tissue-of-origin: ["[[ovary]]"]
key-markers-mouse: [Col1a1+, "activated: Piezo2+/Kif26b+/Col12a1+", "myofibroblast: Acta2+/Tagln+"]
key-markers-human: [fibronectin+, VIM+, "activated: COL1A1+/ACTA2+"]
self-renewal: limited
aging-relevant: yes
affected-hallmarks: ["[[altered-intercellular-communication]]", "[[loss-of-proteostasis]]"]
key-aging-phenotypes: ["[[age-related-female-infertility]]", "[[premature-ovarian-insufficiency]]", "[[polycystic-ovary-syndrome]]"]
typical-niche: "ovarian cortex and medullary stroma surrounding follicles, vasculature and interstitial matrix"
niche-signaling: ["[[tgf-beta]]", "[[il-11-signaling]]", "[[ras-mapk]]"]
single-cell-aging-signature: null
verified: true
verified-date: 2026-08-09
verified-by: claude
verified-scope: "Cell Ontology identity checked live against OLS4 (CL:2000063 ovarian fibroblast; distinguished from broader CL:0002132 stromal cell of ovary). Human-cell markers, mouse stromal clusters, 56,363-nucleus genotype comparison, tissue mechanics and TGF-beta–IL-11–ERK claims cross-checked against the verified Wu 2026 full-source extraction and targeted full-text passages; collagen/hyaluronan and human-versus-mouse boundaries cross-checked against verified Amargant 2020."
---

# Ovarian stromal fibroblasts

Ovarian fibroblasts are matrix-producing cells within the broader ovarian stromal compartment. They are not synonymous with all ovarian stromal cells, which also include theca cells, pericytes and other states. Activated fibroblasts and ACTA2/TAGLN-high myofibroblasts are related states, not synonyms for every resident fibroblast [^wu2026].

Cell Ontology provides the direct term **CL:2000063, ovarian fibroblast**, defined broadly as a fibroblast that is part of a female gonad. The broader **CL:0002132, stromal cell of ovary** should not be used as though it were fibroblast-specific.

## Markers and states

In Wu et al., most measured ovarian collagen-gene expression localized to the mouse stromal compartment. Reclustering separated matrix-fibroblast, activated-fibroblast and myofibroblast states. The activated cluster was annotated by *Piezo2*, *Kif26b* and *Col12a1*; the myofibroblast cluster by *Acta2* and *Tagln*. Primary human ovarian fibroblast identity was checked by fibronectin and vimentin staining, while COL1A1 and ACTA2 were activation outputs. These are study-specific annotations, not a universal marker panel [^wu2026].

## Aging and matrix stiffness

Wu et al. measured human ovarian cortical stiffness directly by atomic-force microscopy in fresh-frozen sections. Stiffness and collagen-I-rich matrix increased across cross-sectional age groups and in age-matched chemotherapy-associated [[premature-ovarian-insufficiency|POI]], [[polycystic-ovary-syndrome|PCOS]] and ovarian-endometriosis samples. Primary human ovarian fibroblasts responded to [[tgf-beta|TGF-β1]] by inducing [[il-11]], and recombinant IL-11 activated ERK, collagen and migration programs. Neutralizing IL-11 or inhibiting ERK attenuated culture phenotypes [^wu2026], but the applied antibody concentration and ERK-inhibitor identity are internally inconsistent across Methods, figure labels and source data. Donor ages, independent donor count and donor-to-replicate mapping were not reported. These experiments support a fibroblast mechanism; the human tissue comparisons remain observational and ex-vivo.

Stiff alginate and polyacrylamide culture systems impaired mouse follicle growth and steroid output and reduced mouse granulosa-cell proliferation and hormone production. These experiments establish a mechanical effect of the artificial matrix; they do not by themselves prove that fibroblasts are necessary for that effect or reproduce the intact human niche [^wu2026].

Amargant et al. provide a distinct matrix anchor. Old mouse ovaries were stiffer than young ovaries, ex-vivo collagenase softened old ovaries, and reduced hyaluronan synthesis in a catalytically inactive *Has3* model increased stiffness. In human cortex, hyaluronan declined across age groups, but collagen was not monotonic: the prepubertal cohort was comparable to the oldest cohort, and the paper did not measure human stiffness [^amargant2020]. Thus collagen deposition and hyaluronan loss are separable contributors; only the mouse study intervened on them mechanically.

## Mouse single-nucleus evidence

Wu et al. profiled 56,363 ovarian nuclei from 48-week-old wild-type and *Il11ra1* knockout mice (three biological replicates per genotype). Stromal cells carried most measured collagen-gene expression. Receptor loss reduced the activated-fibroblast fraction and increased the Col26a1-matrix-fibroblast and relative granulosa-cell fractions [^wu2026]. The paper did not report a corresponding significant reduction in the separately annotated myofibroblast fraction. Because both genotypes were 48 weeks old, this comparison tests genotype within older mice, not change from young to old. Cell proportions from recovered nuclei can also reflect recovery and compositional effects; lineage tracing was not performed.

## Intervention evidence

- Recombinant IL-11 in young mice increased ovarian collagen/stiffness and worsened hormone and litter measures; the printed estrous-cycle significance is not reproducible from the stated n and proportions.
- Germline *Il11ra1* loss reduced age- and disease-model-associated fibrosis and improved selected follicle/ovulation outcomes.
- Systemic siIl11 nanoparticles in middle-aged mice and rats, and local ovarian AAV-shIl11ra1 in mice, reduced stiffness and improved selected follicle, ovulation or litter endpoints. Pregnancy counts favored siIl11 but were nonsignificant when recalculated (mouse P≈0.315; rat P≈0.370), contrary to the printed P values.

These were rodent experiments. The systemic nanoparticle was not ovary-specific, siRNA dose/control sequence were not reported, the AAV reagent lacked construct/dose/control and biodistribution details, and the work did not establish reversal of advanced human ovarian fibrosis or long-term offspring safety [^wu2026].

## Relationship to other mechanisms

Ovarian fibrosis is not synonymous with nonenzymatic AGE crosslinking. Wu et al. neither quantified nor perturbed [[advanced-glycation-end-products|AGE]] crosslinks; they tested a cellular TGF-β–IL-11–ERK fibroblast program and collagen deposition. Amargant et al. separately perturbed collagen and hyaluronan in mouse ovaries. Neither study established YAP/TAZ as the mediator of the IL-11 phenotype.

## Gaps

- Longitudinal human data are needed to establish whether IL-11 precedes stiffness and reserve loss.
- Human ovarian fibroblast subsets and age trajectories require independent single-cell/spatial replication.
- No young-versus-old ovarian-fibroblast single-cell comparison was identified; Wu et al. compared two genotypes at 48 weeks. #gap/no-singlecell-data
- The therapeutic window between partial adult suppression and developmental/reproductive roles of IL-11 is unknown.
- It is unclear whether matrix softening can restore function after advanced follicle depletion, when the non-renewable reserve is already lost. #gap/needs-human-replication #gap/needs-replication #gap/long-term-unknown

## Footnotes

[^wu2026]: [[studies/wu-2026-il11-ovarian-stiffness]] · doi:10.1038/s43587-026-01159-2 · Wu M et al. · *Nature Aging* 2026;6:1395–1416 · human cross-sectional tissue, primary human ovarian fibroblasts, matrix culture systems and mouse/rat genetic and RNA interventions
[^amargant2020]: [[studies/amargant-2020-ovarian-stiffness]] · doi:10.1111/acel.13259 · Amargant F et al. · *Aging Cell* 2020;19:e13259 · mouse ovarian indentation and collagen/hyaluronan perturbations plus cross-sectional human histology
