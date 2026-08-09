---
type: cell-type
aliases: [cumulus cell, cumulus granulosa cells, cumulus granulosa, cumulus oophorus cells]
cell-ontology-id: CL:0000711
tissue-of-origin: ["[[ovary]]"]
key-markers-mouse: ["Slc38a3+ (cumulus-enriched)", "Amh+ (cumulus-enriched)", "Has2+/Ptx3+/Ptgs2+/Tnfaip6+ (periovulatory expansion state)"]
key-markers-human: ["AMH+ (cumulus-enriched in stimulated follicles)", "HTRA1+", "PNCK+", "RYR2+"]
self-renewal: no
aging-relevant: yes
affected-hallmarks: ["[[loss-of-proteostasis]]", "[[mitochondrial-dysfunction]]", "[[altered-intercellular-communication]]", "[[epigenetic-alterations]]"]
key-aging-phenotypes: ["[[age-related-female-infertility]]"]
typical-niche: "cumulus oophorus and corona radiata directly surrounding the oocyte in an antral follicle"
niche-signaling: ["[[tgf-beta]]", "[[bmp-signaling]]"]
single-cell-aging-signature: "No donor-level cumulus-specific single-cell aging signature is established. Intact-ovary atlases resolve granulosa subtypes but not the periovulatory cumulus population; Li 2025 analyzed 30 cumulus profiles from 15 stimulated-IVF donors."
literature-checked-through: 2026-08-09
verified: true
verified-date: 2026-08-09
verified-by: claude
verified-scope: "Cell Ontology CL:0000711 checked in the 2026-06-08 release; mouse lineage/state markers and mural distinction checked against Diaz 2007; human stimulated-follicle compartment markers checked against Burnik Papler 2015 full text and its three-cohort meta-analysis; Li 2025 claims and denominators taken from the fully verified study extraction; human ovarian single-cell/spatial literature and supersession checked through 2026-08-09."
---

# Cumulus cells

Cumulus cells are the specialized [[granulosa-cells|granulosa-cell]] population immediately surrounding the [[oocytes|oocyte]] in an antral follicle. They form the cumulus oophorus and innermost corona radiata and participate in bidirectional oocyte–somatic communication through paracrine signaling and gap-junction-bearing transzonal projections [^diaz2007] [^papler2015]. Cell Ontology identifies this cell type as **CL:0000711** [^cl0711].

## Identity, markers and mural distinction

Mouse experiments distinguish cell identity from periovulatory state. *Slc38a3* and *Amh* are enriched in cumulus relative to mural granulosa cells, whereas *Has2*, *Ptx3*, *Ptgs2* and *Tnfaip6* are induced during EGF/LH-driven cumulus expansion; the latter are useful expansion-state readouts, not constitutive lineage markers [^diaz2007].

In stimulated human preovulatory follicles, cumulus and mural/floating granulosa transcriptomes separate clearly. A primary study and three-dataset meta-analysis found cumulus enrichment of *AMH*, *HTRA1*, *PNCK* and *RYR2*; HTRA1, PNCK and RYR2 differences were confirmed by qPCR in an independent sample set [^papler2015]. These are compartment-enrichment markers in hCG-stimulated IVF material, not universal markers across every follicular stage.

Mural granulosa cells line the follicle wall and are the more steroidogenic and LH-responsive compartment near ovulation. Cumulus identity is specified by proximity to the oocyte, opposing follicular signaling gradients and oocyte-derived GDF9/BMP15-family signals; cumulus cells specialize in oocyte support and extracellular-matrix expansion [^diaz2007]. The populations share lineage but are transcriptionally and functionally distinct, so mural-cell aging data should not be assigned to cumulus cells without compartment-resolved evidence.

## Reproductive-aging evidence

Li et al. analyzed cumulus-cell samples from stimulated IVF/ICSI cycles and reported age-associated enrichment of cytosolic and mitochondrial ribosome programs together with lower lysosomal, proteasomal, metabolic and oxidative-stress programs [^li2025]. Older-donor cells also showed higher 18S/28S rRNA, greater total nucleolar area and nascent-protein labeling, higher mTOR activity, lower LysoTracker signal and more Proteostat-positive aggregates.

These findings are specific to selected, hormonally stimulated IVF material. Two transcriptomic samples were obtained from each of 15 donors, while several imaging panels counted hundreds of cells from only three to six donors per group. Methylome and H3K9me3 CUT&Tag subsets were smaller still. The data-derived transition near age 34 is not a validated clinical cutoff.

Human intact-ovary single-nucleus/spatial atlases published through 2026 resolve granulosa-cell subtypes but do not isolate a donor-level periovulatory cumulus aging trajectory [^zhang2026]. They therefore do not independently replicate Li's cumulus-specific ribosome/clearance signature.

## Intervention evidence

Short exposure to [[rapamycin]] or cycloheximide reduced translation and selected senescence/aggregate-associated readouts in cultured human cumulus cells. During **ex-vivo** maturation of aged mouse cumulus–oocyte complexes, 0.5 μM rapamycin reduced pS6 and oxidative/spindle abnormalities and increased maturation [^li2025]. Neither experiment establishes that systemic mTOR inhibition rejuvenates an intact ovary.

In the same paper's small human trial, brief oral sirolimus before retrieval did not significantly increase mature-oocyte yield. Embryo counts and a secondary, post-randomization pregnancy analysis favored treatment, but randomized live-birth benefit and reproductive safety were not established. See [[studies/li-2025-ribosome-age-related-infertility]].

## Gaps

- Human cumulus aging needs donor-level replication across stimulation protocols and independent centers.
- Flux assays must separate increased synthesis from impaired clearance and measure translational fidelity.
- Cumulus-specific causal perturbation is needed to distinguish nurse-cell effects from direct oocyte and systemic drug effects.
- Whether short ex-vivo normalization predicts euploidy, live birth or offspring safety remains unknown. #gap/needs-replication #gap/needs-human-replication #gap/no-mechanism #gap/long-term-unknown

## Footnotes

[^cl0711]: Cell Ontology, CL:0000711 (cumulus cell), release 2026-06-08 · canonical ontology record, not an experimental marker source
[^diaz2007]: doi:10.1242/jcs.000968 · Diaz FJ et al. · *J Cell Sci* 2007;120:1330–1340 · primary mouse follicle/culture study distinguishing cumulus from mural granulosa lineage and expansion-state genes
[^papler2015]: doi:10.1371/journal.pone.0136473 · Burnik Papler T et al. · *PLoS One* 2015;10:e0136473 · primary human IVF study (37 women) plus meta-analysis of three human cumulus-versus-granulosa transcriptome datasets; independent qPCR validation
[^li2025]: [[studies/li-2025-ribosome-age-related-infertility]] · doi:10.1016/j.xcrm.2025.102424 · Li J et al. · *Cell Reports Medicine* 2025;6:102424 · human oocyte/cumulus multi-omics and culture, ex-vivo mouse maturation and a randomized IVF sirolimus study
[^zhang2026]: doi:10.1111/acel.70288 · Zhang M et al. · *Aging Cell* 2026;25:e70288 · primary single-nucleus and spatial transcriptomic atlas of 12 human ovaries, with granulosa subtypes but no isolated periovulatory cumulus aging population
