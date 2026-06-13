---
type: protein
aliases: [ATP6V1B2, V-type proton ATPase subunit B2, "vacuolar H+-ATPase B2 subunit", V1B2, csV1B2]
uniprot: P21281
ncbi-gene: 526
hgnc: 854
ensembl: null
genage-id: null
pathways: []
hallmarks: ["[[cellular-senescence]]"]
sens-categories: ["[[apoptosenes]]"]
complex-subunits: []
is-noncoding-rna: false
mouse-ortholog: Atp6v1b2
druggability-tier: null
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
literature-checked-through: null
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

#stub

> ⚠️ Auto-extracted by Claude on 2026-06-13. Stub seeded on basis of two inbound references from [[cellular-senescence]] and [[interventions/pharmacological/senolytics]]. Canonical IDs (UniProt P21281, NCBI Gene 526, HGNC 854) confirmed via UniProt REST API in this seeding run. Other fields require a full protein seeding pass. #gap/needs-canonical-id (ensembl, genage-id, druggability-tier not yet looked up).

# ATP6V1B2 (V-type proton ATPase subunit B2)

**V-type proton ATPase subunit B, brain isoform** (gene symbol ATP6V1B2; UniProt P21281; NCBI Gene 526). A catalytic subunit of the vacuolar-type H+-ATPase (v-ATPase) proton pump complex, which drives lysosomal acidification, endosomal trafficking, and intracellular pH homeostasis. Normally regarded as a lysosomal/endosomal membrane component.

## Relevance to cellular senescence

A 2025 Weizmann Institute (Krizhanovsky lab) preprint identifies **cell-surface ATP6V1B2 (csV1B2)** as a marker of a functionally distinct subset of senescent cells [^freizus2025]. In response to DNA damage-induced senescence, a subset of senescent cells upregulates ATP6V1B2 on the cell surface — a localization that is atypical for this normally intracellular proton-pump subunit.

The csV1B2-positive subset is characterized by:
- Altered lysosomal activity and intracellular pH (consistent with perturbed v-ATPase proton-pumping)
- A transcriptional signature associated with DNA repair and **resistance to apoptosis**
- Presence in aging lungs and fibrotic lungs in vivo (mouse and/or human — full-tissue composition not confirmed from abstract)
- Correlation with **resistance to ABT-737-induced apoptosis** in culture — ABT-737 is the tool-compound analog of navitoclax (BCL-2/BCL-xL/BCL-w pan-inhibitor) used in the BH3-mimetic senolytic class

This makes csV1B2 a candidate **biomarker of senolytic resistance** within the navitoclax/ABT-263 drug class and a potential marker of a persistent, apoptosis-refractory senescent population. See [[interventions/pharmacological/senolytics]] for the BH3-mimetic class context and [[cellular-senescence]] § *Senescent-cell heterogeneity and the senotype concept* for the senotype framework.

> **Abstract-only:** The mechanism by which csV1B2 confers apoptosis resistance is not established from the abstract. Causal evidence and mechanistic pathway details require full-text verification. #gap/no-mechanism #gap/preprint-not-peer-reviewed #gap/needs-replication

## Complex context

ATP6V1B2 is the B2 catalytic subunit of the V1 sector of the v-ATPase complex. The V1 sector (cytoplasmic) contains the ATP-hydrolysis machinery; it couples to the V0 sector (membrane) to drive proton translocation. A full protein seeding pass should enumerate the other V1 subunits and map the complex architecture. #gap/needs-canonical-id

## Cross-references

- [[cellular-senescence]] — hallmark page; csV1B2 as a senescence heterogeneity marker
- [[interventions/pharmacological/senolytics]] — BH3-mimetic senolytic class; csV1B2 as resistance biomarker
- [[studies/freizus-2025-atp6v1b2-persistent-senescence]] — primary source (preprint)
- [[sasp]] — lysosomal changes in senescent cells; pH dysregulation context

## Footnotes

[^freizus2025]: [[studies/freizus-2025-atp6v1b2-persistent-senescence]] · Freizus N et al. (Krizhanovsky lab, Weizmann Institute) · preprint (bioRxiv) · doi:10.1101/2025.11.30.691415 · 2025-12-01 · in-vitro (human + mouse senescent cells) + in-vivo (aging + fibrotic lungs) · abstract-only; not peer-reviewed · identifies csV1B2 as marker of apoptosis-resistant persistent senescent subset; ABT-737 resistance correlation #gap/preprint-not-peer-reviewed
