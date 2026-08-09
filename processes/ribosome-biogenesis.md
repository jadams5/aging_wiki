---
type: process
aliases: [ribosomal biogenesis, ribosome production, rRNA biogenesis]
key-proteins: ["RRN3/TIF-IA", "UBTF", "FBL"]
pathways: ["[[mtor]]"]
hallmarks: ["[[loss-of-proteostasis]]", "[[deregulated-nutrient-sensing]]"]
selective-variants: []
druggability-tier: 1
caused-by: ["[[mtor]]", "[[c-myc]]"]
causes: ["[[protein-synthesis]]"]
literature-checked-through: 2026-08-09
verified: true
verified-date: 2026-08-09
verified-by: claude
verified-scope: "Human cytosolic rRNA-transcription, processing and assembly topology checked against Reactome R-HSA-73762 and R-HSA-72312; mTOR–TIF-IA regulation checked against Mayer 2004 full text; Li 2025 reproductive claims and assay denominators taken from the fully verified study extraction. Aging-context tier, intervention boundary and PubMed/Europe PMC recency/supersession were checked through 2026-08-09."
---

# Ribosome biogenesis

Ribosome biogenesis produces the ribosomal subunits required for [[protein-synthesis]]. For human cytosolic ribosomes, RNA polymerase I transcribes the 47S precursor that is processed into 18S, 5.8S and 28S rRNAs; 5S rRNA is produced separately. rRNA modification and assembly with ribosomal proteins generate precursor 40S and 60S subunits in the nucleolus/nucleus, followed by export and late cytoplasmic maturation [^reactome-rrna]. Mitochondrial ribosome biogenesis uses distinct rRNAs and proteins and should not be inferred from cytosolic 18S/28S measurements.

Direct machinery includes RRN3/TIF-IA and UBTF at RNA-polymerase-I transcription and snoRNP-associated processing factors such as fibrillarin (FBL). [[mtor]] and [[c-myc]] are upstream growth regulators rather than ribosomal structural components; [[4ebp1]] primarily controls translation initiation and is not a core ribosome-biogenesis factor. In a primary mammalian study, rapamycin-sensitive mTOR signaling regulated Pol-I initiation through TIF-IA [^mayer2004].

## Reproductive-aging evidence

Li et al. reported age-associated enrichment of cytosolic and mitochondrial ribosomal transcripts in human oocytes and cumulus cells, increased 18S/28S rRNA and altered nucleolar morphology in cumulus cells, alongside higher nascent-protein labeling and mTOR activity. Several ribosomal-gene loci showed lower promoter methylation or H3K9me3 in very small omics subsets [^li2025]. See [[studies/li-2025-ribosome-age-related-infertility]].

Increased ribosomal transcripts, rRNA abundance and nucleolar area are compatible with increased biogenesis, but none alone establishes the number, composition or fidelity of functional ribosomes. The evidence is reproductive-tissue-specific and does not establish increased ribosome biogenesis as a universal direction of aging. The age-associated transition near 34 years was data-derived and is not a validated biological threshold. Oocyte methylomes used two pooled libraries per age group; cumulus-cell methylomes used two younger and four nominally older donors; CUT&Tag used two donors per age group.

## Intervention interpretation

Rapamycin reduced translation, mTOR target phosphorylation and selected senescence/aggregate readouts in cultured human cumulus cells and during mouse oocyte maturation. Because [[rapamycin]] also changes autophagy, metabolism and stress responses, these experiments do not isolate ribosome biogenesis as the causal mediator. #gap/no-mechanism

## Druggability

The process is **aging-context tier 1 indirectly** through clinical mTOR inhibitors: rapamycin engages an upstream regulator and has human aging-relevant trial exposure, including the Li IVF study. The tier does not imply a process-selective drug or that global ribosome shutdown is safe. Rapamycin also changes autophagy, metabolism and stress responses, so its effects cannot identify ribosome biogenesis as the sole mediator.

## Footnotes

[^reactome-rrna]: Reactome R-HSA-73762, RNA polymerase I promoter opening, and R-HSA-72312, rRNA processing (Homo sapiens), reviewed canonical pathways, current through 2026-08-09
[^mayer2004]: doi:10.1101/gad.285504 · Mayer C et al. · *Genes Dev* 2004;18:423–434 · primary mammalian-cell study linking rapamycin-sensitive mTOR signaling to RNA-polymerase-I initiation through TIF-IA
[^li2025]: [[studies/li-2025-ribosome-age-related-infertility]] · doi:10.1016/j.xcrm.2025.102424 · Li J et al. · *Cell Reports Medicine* 2025;6:102424 · human oocyte/cumulus multi-omics, culture perturbations, mouse oocyte maturation and a small human sirolimus IVF trial
