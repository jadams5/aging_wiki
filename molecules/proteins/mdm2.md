---
type: protein
aliases: [MDM2, Mouse double minute 2 homolog, HDM2, E3 ubiquitin-protein ligase Mdm2]
uniprot: Q00987
ncbi-gene: 4193
hgnc: 6973
mouse-ortholog: Mdm2
ensembl: ENSG00000135679
druggability-tier: 1
caused-by: []
causes: []
key-domains: [SWIB-MDM2, RanBP2-type-zinc-finger, RING-type-zinc-finger]
key-ptms: [Ser166-phosphorylation, Ser386-phosphorylation, Ser395-phosphorylation, autoubiquitination]
pathways: ["[[p53-pathway]]", "[[dna-damage-response]]", "[[ubiquitin-proteasome-system]]"]
hallmarks: ["[[genomic-instability]]", "[[cellular-senescence]]"]
known-interactors: ["[[p53]]", "[[atm]]", "[[mdm4]]", "[[usp7]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Haupt 1997, Kubbutat 1997, Lev Bar-Or 2000, and Mendrysa 2006 claims verified against primary source PDFs; Vassilev 2004 (closed-access, not_oa) and Oliner 1992 (download failed, green OA) verified against DOI lookup and Crossref only — DLT and cancer-amplification claims from these sources remain unverified against full text; UniProt Q00987 ATM phosphorylation sites spot-checked via REST API"
---

# MDM2

The primary negative regulator of [[p53]]: an E3 ubiquitin ligase that targets p53 for proteasomal degradation and is itself a p53 transcriptional target, forming one of the best-characterized negative feedback loops in mammalian cell biology. MDM2 is oncogenically amplified in ~7% of human cancers (especially sarcomas) and is the target of a class of small-molecule drugs (nutlins, idasanutlin) that aim to reactivate p53 in wild-type–p53 tumors.

## Identity

- **UniProt:** Q00987 (MDM2_HUMAN)
- **NCBI Gene:** 4193
- **HGNC symbol:** MDM2
- **Ensembl:** ENSG00000135679
- **Mouse ortholog:** Mdm2 (one-to-one ortholog; human gene formerly called HDM2)
- **Length:** 491 amino acids (canonical isoform; 11 alternative isoforms documented, several lacking the p53-binding domain — observed in late-stage cancers)

## Key functional domains

- **SWIB/MDM2 domain (residues 26–109)** — the p53-binding pocket; contacts the N-terminal transactivation domain of p53. Target of all clinical MDM2 inhibitors (nutlins, AMG-232).
- **RanBP2-type zinc finger (residues 299–328)** — mediates interaction with ribosomal proteins (RPL5, RPL11, RPS7); ribosomal stress via these interactions can inhibit MDM2 activity and stabilize p53.
- **RING-type zinc finger (residues 438–479)** — E3 ubiquitin ligase catalytic domain; required for autoubiquitination and heterodimerization with [[mdm4]] (MDMX). MDM4 lacks intrinsic E3 activity but potentiates MDM2 via RING-RING heterodimerization.

## Function

MDM2 holds p53 at low levels in unstressed cells through two complementary mechanisms: (1) direct binding via the SWIB domain blocks p53's transactivation domain, preventing transcription of p53 target genes; (2) the RING domain ubiquitinates p53, targeting it for [[ubiquitin-proteasome-system|proteasomal degradation]] [^haupt1997][^kubbutat1997]. MDM2 also ubiquitinates a range of other substrates (RB1, DAXX, IGF1R, SNAI1, ARRB1).

Beyond p53, MDM2 promotes survival signaling: AKT phosphorylates MDM2 at Ser166, enhancing its nuclear localization and p53-suppressing activity — linking PI3K/AKT growth signals to p53 restraint.

## The MDM2–p53 negative feedback loop

The defining feature of MDM2 biology is the **mutual regulation between MDM2 and p53**:

1. p53 transcriptionally activates *MDM2* (the MDM2 gene contains two p53 response elements in its first intron).
2. MDM2 protein binds and ubiquitinates p53, driving its degradation.
3. Result: a self-limiting oscillatory system in which p53 rises transiently in response to stress, induces MDM2, and is then cleared.

Experimental evidence from irradiated mouse NIH 3T3 and human MCF-7 cells shows that this loop generates oscillations of p53 and Mdm2 protein levels with a periodicity of ~3 hours following DNA damage (p53 peaks first, Mdm2 peaks ~1 h later). The number and character of oscillatory pulses, not amplitude, is proposed to encode signal strength [^levbaror2000]. #gap/needs-replication — the functional significance of oscillatory vs. sustained p53 dynamics for cell-fate decisions remains incompletely resolved.

## Stress disrupts the loop: ATM-mediated phosphorylation

Upon DNA double-strand breaks (DSBs), [[atm]] (Ataxia-telangiectasia mutated kinase) phosphorylates both MDM2 and p53:

- **MDM2**: ATM phosphorylates Ser-386, Ser-395, Ser-407, Thr-419, Ser-425, and Ser-429 (per UniProt Q00987). These phosphorylations reduce MDM2–p53 binding affinity and inhibit MDM2 E3 activity. (Note: Ser-240, Ser-242, Ser-246, Ser-260, and Ser-262 are also phosphorylated on MDM2 but are not listed as ATM substrates in UniProt — their responsible kinases remain less clearly assigned.)
- **p53**: ATM phosphorylates Ser15, directly blocking MDM2 binding.

Net effect: MDM2 can no longer efficiently suppress p53, leading to p53 accumulation within minutes of DSB induction. This is the canonical DNA damage → p53 stabilization mechanism.

## Role in aging

MDM2 is central to the **antagonistic pleiotropy** of p53 activity in aging (see [[p53]] for the full antagonistic-pleiotropy evidence):

- **Too much MDM2** → insufficient p53 activity → failed tumor suppression → cancer. MDM2 amplification (~7% of cancers) is mechanistically equivalent to TP53 loss-of-function for tumor suppression purposes.
- **Too little MDM2** → elevated p53 activity → excess apoptosis in sensitive tissues (intestine, hematopoietic system) and lymphopenia — but in the hypomorphic mouse model at ~30% Mdm2 expression, this does not translate to accelerated organismal aging or reduced lifespan [^mendrysa2006].

**Mouse genetic evidence:**

Mice with a hypomorphic *Mdm2* allele (mdm2puro/7-12; ~30% of wild-type Mdm2 expression, constitutively elevated p53) are **tumor-resistant but do NOT age prematurely** [^mendrysa2006]. Mean lifespan was 110 wk for hypomorphs vs. 106 wk for wild-type (log-rank p=0.61; n=28 hypomorphs, n=12 wild-type; C57Bl/6 × 129EvSv F1 hybrids). No significant differences were found in body weight loss, dermal thickness, subcutaneous fat, or bone thickness attributable to accelerated aging. These mice do show lymphopenia and elevated intestinal apoptosis (p53-mediated), but these are distinct from aging phenotypes. This study directly refutes the hypothesis that Mdm2 inhibition sufficient to suppress tumors causes accelerated aging. #gap/needs-human-replication

The MDM2–p53 axis may also modulate aging via **stem cell maintenance**: excessive p53-driven apoptosis of stem cells (held in check partly by MDM2) depletes regenerative capacity in tissues with high turnover.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | MDM2–p53 loop is structurally and functionally conserved; human gene (HDM2) is direct ortholog |
| Phenotype conserved in humans? | partial | MDM2 amplification causes human cancer; hypomorphic mouse model shows normal aging (not accelerated), so no accelerated-aging model to extrapolate |
| Replicated in humans? | no | No human equivalent of Mdm2 hypomorph aging model; observational data only |

#gap/needs-human-replication — Direct evidence that *reduced* MDM2 activity accelerates aging in humans is absent.

## Cancer relevance

MDM2 was first identified in 1992 through its amplification in soft-tissue sarcomas [^oliner1992]. MDM2 amplification is found in:

- ~30% of soft-tissue sarcomas (especially dedifferentiated liposarcoma, where MDM2 amplification is near-universal and diagnostically significant)
- ~15% of osteosarcomas
- Lower frequencies in gliomas, ovarian carcinomas, and bladder carcinomas

Amplification is nearly always found in tumors that retain wild-type TP53 — the two events are mutually exclusive because both achieve p53 functional inactivation.

A common single-nucleotide polymorphism in the MDM2 promoter (SNP309, T→G) increases SP1 transcription factor binding, elevates MDM2 expression ~3-fold, and is associated with earlier tumor onset in Li-Fraumeni syndrome carriers. #gap/needs-replication

## Pathway membership

- [[p53-pathway]] — the MDM2–p53 feedback axis is the central regulatory node
- [[dna-damage-response]] — ATM activates both p53 and disrupts MDM2 activity
- [[ubiquitin-proteasome-system]] — MDM2 is the E3 ligase that routes p53 (and other substrates) to the 26S proteasome
- [[cellular-senescence]] — downstream consequence of unrestrained p53 accumulation when MDM2 is insufficient
- [[apoptosis-pathway]] — downstream consequence of sustained p53 activity

## Key interactors

- [[p53]] — primary substrate; the central MDM2–p53 negative feedback loop
- [[atm]] — kinase that phosphorylates MDM2 to disrupt p53 binding under genotoxic stress
- **MDM4 (MDMX)** — heterodimers with MDM2 via RING-RING interaction; potentiates MDM2 E3 activity toward p53; itself lacks E3 activity. MDM4 is also a p53 inhibitor (via direct binding) but not subject to proteasomal targeting by MDM2 under basal conditions.
- **USP7 (HAUSP)** — deubiquitinase that stabilizes both MDM2 and p53 (paradoxically — net effect on p53 levels depends on relative affinity and cellular context). USP2 is also a MDM2 deubiquitinase.
- **RPL5, RPL11, RPS7** — ribosomal proteins that bind MDM2 upon ribosomal stress, blocking MDM2 E3 activity toward p53 and transmitting nucleolar stress signals to p53.
- **ARF (p14ARF / p19Arf)** — sequesters MDM2 in the nucleolus under oncogenic stress, preventing p53 ubiquitination independently of ATM.

## Pharmacology

### MDM2 inhibitors — nutlin class and descendants

The SWIB/MDM2 pocket that binds the p53 transactivation domain is druggable: nutlin-3 (cis-imidazoline scaffold) was the first small molecule shown to occupy this pocket and disrupt the MDM2–p53 interaction in cells [^vassilev2004]. In tumor xenograft models with wild-type TP53, nutlin-3 treatment caused cell-cycle arrest, apoptosis, and tumor regression — with minimal effect on TP53-mutant controls, establishing on-target selectivity.

Clinical-stage descendants:
- **RG7112 (the first clinical nutlin analogue)** — phase I completed; dose-limiting toxicity was myelosuppression and thrombocytopenia.
- **Idasanutlin (RG7388)** — more potent, more selective nutlin; in combination with cytarabine for AML (phase III, MIRROS trial). Results were mixed — no improvement in overall survival in the primary endpoint, though subgroup analyses active.
- **AMG-232 (navtemadlin)** — piperidinone scaffold; clinical trials ongoing in MDM2-amplified solid tumors including liposarcoma.

**Dose-limiting toxicity:** On-target thrombocytopenia (p53-driven apoptosis of megakaryocytes) is the consistent DLT class across all MDM2 inhibitors tested clinically. #gap/dose-response-unclear — optimal dosing strategy to dissociate anti-tumor efficacy from platelet toxicity is an active area.

**Combination strategies:** MDM2 inhibitors are being combined with CDK4/6 inhibitors (for liposarcoma, which co-amplifies CDK4 with MDM2) and with venetoclax (BCL-2 inhibitor) in AML. Rationale: p53 reactivation by MDM2i sensitizes cells to apoptosis, which is further amplified by BCL-2 blockade.

**Selectivity requirement:** MDM2 inhibitors are only active in tumors retaining wild-type TP53 — standard of care is now to confirm TP53 status before enrollment.

**Aging-context tier-1 rationale.** MDM2 inhibitors (idasanutlin, AMG-232/navtemadlin, RG7112) are clinical-stage (Phase 1–3) for cancer indications including AML, liposarcoma, and solid tumors — none is FDA-approved for any indication, and no MDM2 inhibitor has been tested in an aging-rejuvenation context. The aging-context tier-1 designation reflects MDM2's role as the central regulator of [[p53]] (the antagonistic-pleiotropy aging node) and the mechanism's pharmacological tractability via the SWIB-pocket nutlin scaffold. Strict Open Targets `Approved Drug = true` for an aging indication does not apply.

## Limitations and gaps

- **Mendrysa 2006 hypomorph model scope** — the aging-normal finding holds for the mdm2puro/7-12 allele (~30% Mdm2) on a C57Bl/6 × 129EvSv F1 background; it does not address complete Mdm2 loss or other strain backgrounds. The contested earlier p53 gain-of-function aging papers (Tyner 2002, Maier 2004) used different genetic tools and remain mechanistically distinct. #gap/needs-replication
- **Cancer amplification frequency** — the ~7% pan-cancer figure and tissue-specific frequencies (sarcomas, osteosarcomas) cited on this page derive from older surveys; the TCGA pan-cancer atlas has more recent genome-wide data that should be used to update these numbers. #gap/unsourced
- **Vassilev 2004 DLT detail** — the nutlin-3 original paper is closed-access (`not_oa`); the DLT (thrombocytopenia) claim for clinical-stage descendants is consistent with published clinical trial reports but the specific DLT attributions should be verified against individual trial publications. #gap/needs-replication
- **Human aging data absent** — all aging-relevant data is mouse genetic. No human population studies link MDM2 germline variation to aging phenotypes with strong power. #gap/needs-human-replication
- **MDM4 vs MDM2 disambiguation** — this page covers MDM2 only; MDM4 (MDMX) has closely related biology and warrants its own page.
- **Alternative isoforms** — 11 isoforms characterized (per UniProt Q00987); cancer-specific splice variants lacking the p53-binding domain are poorly characterized at the functional level. #gap/no-mechanism

## Footnotes

[^haupt1997]: doi:10.1038/387296a0 · Haupt et al. 1997 · in-vitro + in-vivo · model: human cancer cell lines + mouse; cited_by >4400 · PDF in a local paper archive
[^kubbutat1997]: doi:10.1038/387299a0 · Kubbutat et al. 1997 · in-vitro · model: human cell lines; cited_by >3300 · PDF in a local paper archive
[^oliner1992]: doi:10.1038/358080a0 · Oliner et al. 1992 · observational · model: human sarcoma tissue specimens; cited_by >1900 · first report of MDM2 amplification
[^vassilev2004]: doi:10.1126/science.1092472 · Vassilev et al. 2004 · in-vitro + in-vivo (xenograft) · model: human tumor cell lines + nude mice; cited_by >4600 · original nutlin-3 discovery
[^levbaror2000]: doi:10.1073/pnas.210171597 · Lev Bar-Or et al. 2000 · PNAS · in-silico + in-vitro · model: mathematical model + NIH 3T3 mouse fibroblasts + MCF-7 human breast cancer cells · irradiation: 5 Gy IR · oscillation period: ~3 h in NIH 3T3, ~6–7 h second peak in MCF-7 · PDF in a local paper archive
[^mendrysa2006]: doi:10.1101/gad.1378506 · Mendrysa et al. 2006 · Genes & Development · in-vivo · model: Mdm2 hypomorphic mice (mdm2puro/7-12; C57Bl/6 × 129EvSv F1) · n=28 hypomorphs + n=12 wild-type · p=0.61 (lifespan log-rank) · finding: tumor suppression without premature aging · PDF in a local paper archive
