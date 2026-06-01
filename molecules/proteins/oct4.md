---
type: protein
aliases: [POU5F1, OCT3, OCT-4, NF-A3, OTF3, OCT3/4]
uniprot: Q01860
ncbi-gene: 5460
hgnc: 9221
mouse-ortholog: Pou5f1
ensembl: ENSG00000204531
druggability-tier: 4
caused-by: []
causes: []
key-domains: [POU-specific, POU-homeodomain, N-terminal-transactivation, C-terminal-transactivation]
key-ptms: [Ser111-phosphorylation, Thr235-phosphorylation, Lys123-sumoylation, WWP2-mediated-ubiquitination]
pathways: ["[[pluripotency-network]]", "[[oct4-sox2-nanog]]"]
hallmarks: ["[[epigenetic-alterations]]"]
known-interactors: ["[[sox2]]", "[[nanog]]", "[[klf4]]", "[[esrrb]]", "[[tet1]]", "[[tet2]]"]
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Nichols 1998, Niwa 2000, and Takahashi 2006 primary-source PDFs verified end-to-end; Ocampo 2016, Lu 2020, and Yang 2023 spot-checked for oct4.md-specific claims (full verification in partial-reprogramming.md). UniProt Q01860 PTM annotations checked via REST API: Lys123-sumoylation confirmed; ubiquitination confirmed as WWP2-mediated Lys-63-linked but specific residue not annotated as K123 in UniProt PTM table — frontmatter updated accordingly. Canonical-database identity fields (ncbi-gene, hgnc, ensembl) not independently re-verified against their source databases."
---

# OCT4 (POU5F1)

OCT4 is a POU-family homeodomain transcription factor and master regulator of embryonic pluripotency. In the context of aging biology, it is most relevant as the "O" component of the OSKM and OSK Yamanaka factor cocktails used in [[partial-reprogramming]] experiments — the central proposed intervention of [[hypotheses/information-theory-of-aging]]. OCT4 binds the octamer DNA motif (5'-ATTTGCAT-3') and, in concert with [[sox2]] and [[nanog]], maintains the pluripotency transcriptional network in embryonic stem cells (ESCs) and induced pluripotent stem cells (iPSCs). It is silenced upon differentiation and its reactivation — even transiently — can reverse epigenetic aging marks in somatic cells in vivo.

---

## Identity

| Field | Value |
|---|---|
| UniProt | Q01860 (PO5F1_HUMAN) |
| NCBI Gene | 5460 |
| HGNC symbol | POU5F1 |
| Ensembl | ENSG00000204531 |
| Mouse ortholog | Pou5f1 (one-to-one; expression and function conserved) |
| Length | 360 amino acids (canonical isoform) |
| Chromosomal location | 6p21.33 (within the MHC class III region) |

**Naming note:** The gene is officially HGNC-designated *POU5F1*. "OCT4" is the most common alias in the reprogramming literature; "OCT3" and "OCT3/4" are older synonyms from independent cloning. This page uses OCT4 as the display name per wiki convention (matches its use in OSK/OSKM literature).

**Disambiguation:** No `pathways/oct4.md` exists; the relevant network-level page is `[[oct4-sox2-nanog]]` (planned stub). This protein page is the canonical `[[oct4]]` resolution.

---

## Domain structure

OCT4 is a bipartite DNA-binding protein. Its two structured domains together comprise the ~160-residue POU domain:

- **POU-specific domain (POU-S, residues ~138–212):** A winged-helix domain. Contacts the 5' half of the octamer motif (ATTT). Also mediates interactions with SOX2 and other co-factors at composite elements.
- **POU homeodomain (POU-HD, residues ~230–289):** A three-helix homeodomain. Contacts the 3' half of the octamer motif (GCAT) and contributes to cooperative DNA binding.
- **N-terminal transactivation domain (TAD-A):** Intrinsically disordered; recruits transcriptional co-activators. Contains a 9aaTAD transactivation motif (residues ~4–12).
- **C-terminal transactivation domain (TAD-B):** Less characterized; contributes to target gene activation in a context-dependent manner.

The linker between POU-S and POU-HD allows domain reorientation depending on the DNA-binding partner and target sequence, giving OCT4 flexibility to adopt different co-factor interfaces (e.g., the OCT4-SOX2 composite element conformation differs from the OCT4 octamer-only conformation).

---

## Function: pluripotency master regulator

OCT4 was identified as the founding POU-class transcription factor essential for formation of pluripotent cells in the mammalian embryo [^nichols1998]. Oct4-null mouse embryos implant normally but fail to establish the inner cell mass (ICM); the ICM cells revert to trophectoderm, demonstrating that OCT4 is strictly required for ICM identity and pluripotency.

### Dosage sensitivity

Crucially, OCT4 function is highly dosage-sensitive [^niwa2000]:

- **Optimal (100% of normal ESC level)** — maintains self-renewal and pluripotency
- **>50% reduction (i.e., <50% of normal)** — triggers differentiation into trophectoderm
- **>50% increase above normal (i.e., >1.5× normal)** — triggers differentiation into primitive endoderm and mesoderm

A less-than-twofold window separates self-renewal from two distinct differentiation fates: the upward and downward differentiation thresholds are each set at approximately 50% above or below the normal diploid expression level [^niwa2000]. Experimental induction (via doxycycline-regulated transgene in ZHTc6 cells) achieved at most a 50% increase above biallelic ES cell levels — and this was sufficient to induce differentiation in most cells. This dosage sensitivity is mechanistically important for partial reprogramming: sub-pluripotency levels of OCT4 expression in somatic cells may influence the epigenome without triggering full de-differentiation.

### The OCT4-SOX2-NANOG core network

OCT4 operates at the top of a transcriptional network with [[sox2]] and [[nanog]] as its primary co-regulators. The three factors form a positive-feedback circuit:

- OCT4 and SOX2 co-occupy a large fraction (~50–90%) of their genomic targets; many targets require composite OCT4-SOX2 elements for binding
- OCT4 and SOX2 co-activate the *Nanog* promoter; NANOG reciprocally sustains *Oct4* and *Sox2* expression
- All three factors bind and activate each other's promoters, creating a self-reinforcing regulatory hub #gap/unsourced — full cross-regulatory network quantification needs a primary ChIP-Seq citation

OCT4 also recruits the NuRD, Polycomb (PRC1/2), and COMPASS chromatin-remodeling complexes to its target loci, placing it at the interface of transcriptional activation and repressive chromatin organization.

---

## Role in cellular reprogramming

### Full reprogramming (iPSC generation)

Takahashi and Yamanaka demonstrated that co-expression of OCT4, SOX2, KLF4, and c-MYC (OSKM) in mouse embryonic fibroblasts (MEFs) and adult tail-tip fibroblasts (TTFs) is sufficient to generate iPSCs that are similar to ESCs in morphology, epigenetic state, and developmental potential — though the paper explicitly notes they are "similar, but not identical" to ES cells [^takahashi2006]. Notably, the Oct3/4 promoter remained partially methylated in iPS cells (unlike Nanog and Fbx15 promoters). OCT4 removal from the four-factor pool abolished colony formation entirely; Nanog was dispensable. The paper does not test replacement of OCT4 by other POU-family members — that analysis derives from subsequent work not cited here #gap/unsourced. The OSKM-mediated reprogramming substantially remodels the differentiated cell's epigenetic identity, with the four transgene protein levels downregulated toward endogenous ES cell levels upon establishment of the iPS state.

### Partial reprogramming (OSK without c-MYC)

The therapeutic insight of partial reprogramming is that OCT4-driven epigenetic resetting need not proceed all the way to pluripotency to confer benefit. Delivering OSK (OCT4 + SOX2 + KLF4, without c-MYC) via AAV in vivo to differentiated somatic cells in aged mice restores youthful DNA methylation patterns and improves tissue function without loss of cell identity — if the duration of expression is controlled [^lu2020]. The Sinclair group demonstrated this first in retinal ganglion cells (RGCs), where AAV2-OSK delivery reversed vision loss in aged mice, promoted axon regeneration after optic nerve crush, and required TET1 and TET2 DNA demethylases (TET3 was not required).

OCT4's specific contribution within OSK is not fully resolved, but its role is thought to be:

1. Opening closed chromatin at "youthful" target loci via pioneer-factor activity
2. Recruiting TET demethylases for active demethylation at age-hypermethylated sites
3. Re-establishing SOX2-OCT4 composite element occupancy at pluripotency-associated regulatory regions (sub-threshold, not reaching full iPSC state)

See [[partial-reprogramming]] (verified) for the full mechanistic model, study-by-study evidence, and critical caveats.

---

## Aging relevance

OCT4 has no direct role in normal somatic aging — it is not expressed in adult differentiated tissues. Its aging relevance is entirely through its use as a reprogramming tool.

### OSK/OSKM as epigenetic rejuvenation vectors

All three major partial reprogramming studies use OCT4 as an essential component:

- **Ocampo 2016 (Belmonte group):** Cyclic doxycycline-inducible OSKM (2 days on / 5 days off) extended lifespan in LAKI progeria mice and improved tissue regeneration in 12-month-old wild-type mice [^ocampo2016]. OSKM includes c-MYC; the cyclic protocol was designed to avoid teratoma formation.
- **Lu 2020 (Sinclair group):** AAV2-OSK (no c-MYC) delivered to RGCs restored youthful DNA methylation patterns and functional vision in aged mice and in injury/glaucoma models. TET1/TET2 knockdown abrogated OSK benefits [^lu2020].
- **Yang 2023 (Sinclair group):** The ICE mouse model (site-specific DSBs that mimic epigenetic disruption of aging) showed OSK reprogramming reversed ICE-associated epigenetic age advance by up to ~57% across tissues [^yang2023].

In each study, OCT4 is required for epigenetic resetting. No partial reprogramming study has excluded OCT4 and retained efficacy.

### Extrapolation table

| Dimension | Status |
|---|---|
| OCT4 pathway conserved in humans? | yes (human POU5F1 used in human iPSC reprogramming; octamer motif conserved) |
| Partial reprogramming phenotype conserved in humans? | unknown — no human somatic partial reprogramming data exist |
| Replicated in humans? | no — all evidence is preclinical (mouse) |

#gap/needs-human-replication — all partial reprogramming experiments are mouse-only as of 2026-05-04.

---

## Regulation: activation and silencing

### Embryonic and pluripotent contexts (active)

OCT4 is expressed in:
- Oocytes and early embryos (morula, blastocyst ICM, epiblast)
- ESCs and iPSCs maintained in self-renewal conditions
- Germline cells (primordial germ cells, spermatogonia)

Pluripotent state maintenance involves multiple feedforward and feedback circuits involving OCT4-SOX2-NANOG, Wnt signaling, and LIF/STAT3 signaling (in mouse). The *POU5F1* locus is active via accessible chromatin with active histone marks (H3K4me3 at promoter, H3K27ac at enhancers).

### Differentiation (silenced)

Upon lineage commitment, OCT4 is silenced by multiple convergent mechanisms:

1. **CpG methylation** of the POU5F1 promoter and key enhancers — the primary stable silencing mechanism in somatic cells; methylation is inherited mitotically
2. **H3K27me3 deposition** by PRC2 at the locus — an earlier, reversible repressive mark recruited during early differentiation
3. **Loss of OCT4-SOX2 co-occupancy** — as SOX2 expression also declines in most lineages, the composite co-regulatory circuit dissolves
4. **De-repression of OCT4-repressing microRNAs** (e.g., let-7 family in differentiated cells)

The CpG methylation is the rate-limiting barrier to re-activation. AAV-delivered OSK can overcome this barrier transiently via TET-mediated active demethylation — but this is not an indefinite reprogramming; the window of expression must be controlled.

### Re-activation in partial reprogramming

In partial reprogramming protocols, exogenous OCT4 (delivered as mRNA or via AAV) temporarily activates a subset of its target network, recruits TET enzymes, and resets methylation at specific loci — returning cells toward younger methylation patterns without erasing the full lineage methylation program. The precision of this partial resetting (which loci are demethylated; which are protected) is not fully characterized and is an active area of investigation. #gap/no-mechanism — the specificity determinants of partial vs full resetting are unknown

---

## Implications for tumorigenesis

OCT4 is a proto-oncogene when abnormally activated in somatic differentiated cells [^nichols1998_cancer].

- **Germ cell tumors:** OCT4 protein is a highly specific marker for germ cell tumors (seminomas, embryonal carcinomas, teratomas) in humans. It is expressed in essentially all gonadal and extragonadal germ cell tumors that retain some pluripotency, and its detection via immunohistochemistry is a clinical diagnostic tool.
- **Teratoma risk from reprogramming:** Full OSKM expression in somatic cells in vivo produces teratomas if prolonged. The partial reprogramming strategy (cyclic protocols; OSK without c-MYC) is explicitly designed to minimize this risk; the Ocampo 2016 cyclic 2d-on/5d-off protocol reported no teratomas in treated animals.
- **Pseudogenes with cancer association:** POU5F1 pseudogenes on chromosomes 8 and 10 are transcribed in cancer tissues but not in normal adult tissues; their role in carcinogenesis regulation is not established. #gap/no-mechanism

The tumorigenesis implication for aging intervention is acute: any OCT4-based therapy must carefully titrate expression duration, cell type, and tissue context. A narrow dosage window separates beneficial epigenetic rejuvenation from dangerous de-differentiation or oncogenic transformation. This is the primary safety concern for human clinical translation of partial reprogramming strategies.

**No approved human therapy uses OCT4.** All clinical applications of iPSC technology to date derive iPSCs in culture for transplantation; in vivo OCT4 delivery to somatic tissues remains preclinical. #gap/long-term-unknown

---

## Key interactors

| Interactor | Nature of interaction | Functional relevance |
|---|---|---|
| [[sox2]] | Direct protein-protein; forms obligate heterodimer on composite OCT4-SOX2 elements | Core pluripotency network co-regulator; required for OSK partial reprogramming |
| [[nanog]] | Transcriptional target of OCT4+SOX2; co-occupies pluripotency targets | Completes the pluripotency triad; maintained by OCT4 |
| [[klf4]] | Co-expressed in iPSC reprogramming; co-occupies many OCT4 targets | Fourth canonical OSK factor; contributes to chromatin accessibility |
| [[esrrb]] | Transcriptional target of OCT4; reciprocally sustains OCT4 in 2i/LIF conditions | Naïve pluripotency stabilizer |
| [[tet1]] / [[tet2]] | Recruited by OCT4-SOX2 to target loci | Required for active demethylation in OSK partial reprogramming (Lu 2020) |
| [[c-myc]] | Co-expressed in OSKM but NOT in OSK | Proto-oncogene; excluded from safer OSK protocols to reduce teratoma risk |

---

## Pathway membership

- [[oct4-sox2-nanog]] — the core pluripotency transcriptional network (planned stub; no pathway page exists yet)
- [[pluripotency-network]] — broader pluripotency signaling including Wnt, LIF, PI3K axes (planned stub)
- [[dna-methylation-maintenance]] — through TET1/TET2 recruitment in partial reprogramming contexts (planned stub)

**Note:** OCT4 does not have canonical membership in the standard aging-pathway pages (mTOR, AMPK, sirtuin, etc.) under physiological conditions. Its aging relevance is exclusively through its use as an exogenous epigenetic reprogramming factor.

---

## Limitations and gaps

#gap/needs-human-replication — all experimental evidence for OCT4-mediated epigenetic rejuvenation is from mouse models; no human somatic partial reprogramming data exist as of 2026-05-04

#gap/no-mechanism — the specificity determinants that allow OSK to partially reset methylation without complete de-differentiation are not characterized; how OCT4 "chooses" which loci to target in a somatic cell vs an ESC is unknown

#gap/long-term-unknown — long-term safety of in vivo OCT4 re-expression in somatic tissues (teratoma risk, transformation risk, immune response to TF-expressing cells) is not established in any model; no human data

#gap/dose-response-unclear — the dosage window between "epigenetic rejuvenation" and "full reprogramming / teratoma" is tissue-specific and not quantitatively characterized in any tissue

#gap/needs-replication — dominant single-lab provenance (Sinclair group, Harvard) for OSK-specific partial reprogramming claims; independent replication needed

---

## Cross-references

| Entity | Relationship |
|---|---|
| [[partial-reprogramming]] (verified) | Central process page; OCT4 is the "O" in OSK/OSKM; full mechanistic account and caveats |
| [[hypotheses/information-theory-of-aging]] (verified) | Theoretical framework; OCT4-based OSK is the proposed therapeutic intervention |
| [[sox2]] | Core partner in OSK triad and OCT4-SOX2-NANOG pluripotency network |
| [[klf4]] | Core partner in OSK triad |
| [[c-myc]] | Included in OSKM but excluded from safer OSK protocols |
| [[nanog]] | Downstream transcriptional target; co-regulator of pluripotency with OCT4 |
| [[epigenetic-alterations]] | The hallmark OCT4 partially reverses via OSK reprogramming |
| [[tet1]] / [[tet2]] | Mechanistic effectors required for OSK-mediated demethylation (Lu 2020) |
| [[mus-musculus]] | All in vivo partial reprogramming experiments conducted in mouse |

---

## Footnotes

[^nichols1998]: [[studies/nichols-1998-oct4-pluripotency]] · in-vivo + in-vitro · n=Oct4-null mouse embryos (89 pups from heterozygous intercross matings); Oct4-null ESC cultures · Oct4 knockout abolishes ICM formation; ICM cells divert to trophoblast giant cell fate rather than forming pluripotent ICM; first demonstration of Oct4 as essential for pluripotency · model: Mus musculus (hybrid-inbred 129×CBA and hybrid-outbred 129×MF1 backgrounds) · doi:10.1016/s0092-8674(00)81769-9 · 3,369 citations; citation_percentile=100 · local PDF available

[^niwa2000]: [[studies/niwa-2000-oct4-dosage]] · in-vitro · n=ZHTc6 and ZHBTc4 ES cell clones (Tc-regulated Oct3/4 transgene system, double-targeted Pou5f1+/− background) · threshold for differentiation is set at ±50% of normal diploid expression level: >50% increase above normal (>1.5× normal) → primitive endoderm and mesoderm; ≥50% reduction (<0.5× normal) → trophectoderm commitment; window between fates is less than twofold · maximum experimental induction raised Oct3/4 protein by at most 50% above biallelic ES cell levels — sufficient to trigger differentiation · model: Mus musculus CGR8 ES cells · doi:10.1038/74199 · 3,578 citations; citation_percentile=100 · local PDF available

[^takahashi2006]: [[studies/takahashi-2006-ips-oskm]] · in-vitro · model: Mus musculus MEFs (embryonic fibroblasts from Fbx15βgeo/βgeo mice) and adult tail-tip fibroblasts (TTFs from 7-week-old male or 12-week-old female mice; C57/BL6-129 hybrid background) · OSKM is sufficient to generate iPSCs from fibroblasts; founding iPSC paper; Oct3/4 removal abolishes colony formation entirely; Nanog dispensable; iPS cells are "similar, but not identical" to ES cells per authors — Oct3/4 promoter remained partially methylated in iPS cells · 26,108 citations; citation_percentile=100; FWCI=265 · local PDF available (downloaded 2026-05-05)

[^ocampo2016]: [[studies/ocampo-2016-partial-reprogramming]] · in-vivo (cyclic dox-inducible OSKM) · model: LAKI G609G HGPS knockin mouse + 12-month-old WT C57BL/6J · doi:10.1016/j.cell.2016.11.052 · local PDF available · 903 citations; citation_percentile=100 · cyclic OSKM (2d-on/5d-off); no teratomas reported in cyclic protocol; lifespan extension in progeria model; c-MYC included

[^lu2020]: [[studies/lu-2020-osk-vision-restoration]] · in-vivo (AAV2-OSK intravitreal delivery to RGCs) · model: Mus musculus (5- and 20-month-old; optic nerve crush + glaucoma models) · doi:10.1038/s41586-020-2975-4 · local PDF available · 771 citations; citation_percentile=100; FWCI=113 · TET1/TET2 required for OSK benefit; TET3 not required; c-MYC excluded from OSK protocol

[^yang2023]: [[studies/yang-2023-epigenetic-information-loss]] · in-vivo (ICE system: I-PpoI DSBs; multi-tissue) · model: C57BL6/J (DSBs induced at 4–6 months; assessed to 16 months post-treatment) · doi:10.1016/j.cell.2022.12.027 · local PDF available · 560 citations; citation_percentile=100; FWCI=108 · ICE-accelerated epigenetic aging reversed by OSK by up to ~57% · single-lab (Sinclair group)

[^nichols1998_cancer]: See Nichols 1998 (doi:10.1016/s0092-8674(00)81769-9) for foundational discussion of OCT4 expression pattern; germ cell tumor diagnostic use is widely accepted clinical practice — #gap/unsourced for specific clinical diagnostic study citation; recommend adding a germ cell tumor marker citation on next lint pass.
