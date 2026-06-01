---
type: protein
aliases: [XRCC1_HUMAN, X-ray repair cross-complementing protein 1]
uniprot: P18887
ncbi-gene: 7515
hgnc: 12828
ensembl: ENSG00000073050
genage-id: null   # not listed in GenAge Human as of 2026-05-07; #gap/needs-canonical-id
mouse-ortholog: Xrcc1
key-domains: [NTD, BRCT1, BRCT2]
key-ptms: [phosphorylation-CK2, phosphorylation-CDK5]
pathways: ["[[base-excision-repair]]", "[[dna-damage-response]]"]
hallmarks: ["[[genomic-instability]]"]
sens-categories: []
known-interactors: ["[[parp1]]", "[[polb]]", "[[lig3]]", "[[ape1]]", "[[tdp1]]"]
druggability-tier: 4   # no XRCC1-direct drug exists; PARP inhibitors target upstream sensor PARP1, not XRCC1 itself; no aging-validated XRCC1 modulator in clinical development
gtex-aging-correlation: null   # not populated; #gap/needs-tissue-expression-data
mr-causal-evidence: not-tested   # no MR study for XRCC1 variants vs aging outcomes identified
caused-by: []
causes: []
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Caldecott 2008 (PDF verified) and Masson 1998 (PDF verified) and Hoch 2017 (PDF verified) claims cross-checked against primary sources. Thompson 1990, Caldecott 1995, and Tebbs 2003 are closed-access (not_oa); claims from those papers retained with #gap/no-fulltext-access. UniProt P18887 sequence length and BRCT domain boundaries confirmed via REST API. Open Targets druggability re-queried (tier 4 confirmed). Domain-binding mechanism corrected per Masson 1998."
---

# XRCC1 (X-ray repair cross-complementing group 1)

XRCC1 is the central **scaffold protein** of the [[base-excision-repair]] (BER) short-patch sub-pathway and single-strand break repair (SSBR). It has no enzymatic activity of its own; instead, it orchestrates the sequential assembly of repair complexes at strand-break sites by binding directly to [[parp1]] (via protein–protein contact with auto-poly(ADP-ribosyl)ated PARP1) [^masson1998], [[polb]] (gap-filling), [[lig3]] (ligation), [[ape1]] (AP endonuclease), and [[tdp1]] (Top1-cleavage complex resolution) [^caldecott2008]. Loss-of-function XRCC1 mutations in humans cause the progressive childhood-onset neurodegeneration SCAR26 (spinocerebellar ataxia, autosomal recessive 26; OMIM 616027), establishing that SSBR capacity is essential for long-term neuronal survival [^hoch2017].

## Identity

- **UniProt:** P18887 (XRCC1_HUMAN)
- **NCBI Gene:** 7515
- **HGNC symbol:** XRCC1
- **Ensembl:** ENSG00000073050
- **Mouse ortholog:** Xrcc1 (one-to-one; embryonic lethal when nulled)
- **Length:** 633 amino acids (canonical isoform)
- **GenAge:** not listed as of 2026-05-07 #gap/needs-canonical-id

## Domain architecture

XRCC1 is intrinsically disordered except for three structured domains:

| Domain | Residues (approx.) | Key binding partner(s) |
|---|---|---|
| NTD (N-terminal domain) | 1–183 (approx.; Polβ-binding core: 84–183 per Masson 1998) | [[polb]] (Polβ); binds the 8-kDa N-terminal subdomain of Polβ [^masson1998] |
| BRCT1 (BRCT domain 1) | 315–403 (UniProt); functional interaction maps to 301–402 | [[parp1]] — direct protein–protein contact with auto-poly(ADP-ribosyl)ated PARP1; interaction is preferential for oligo(ADP-ribosyl)ated PARP1 over unmodified PARP1 [^masson1998] [^caldecott2008] |
| BRCT2 (BRCT domain 2) | 538–629 | [[lig3]] (DNA ligase IIIα BRCT) — forms obligate heterodimer [^caldecott1995] |

The two linker regions flanking BRCT1 are heavily phosphorylated by CK2 and CDK5, modulating interaction affinity with PARP1 and other partners [^caldecott2008].

## Mechanism: BER scaffold assembly

XRCC1 functions as the molecular "platform" that converts sequential enzymatic steps into a coordinated repair complex at the SSB site:

1. **Break sensing.** [[parp1]] detects the strand break within seconds, synthesizes poly(ADP-ribose) (PAR) chains on itself and surrounding histones. XRCC1 BRCT1 is recruited to the damage site via direct protein–protein interaction with auto-poly(ADP-ribosyl)ated PARP1; the interaction is preferential for the oligo(ADP-ribosyl)ated form of PARP1 (not direct PAR-chain reading) [^masson1998] [^caldecott2008].
2. **PARP1 negative regulation.** Once bound, XRCC1 suppresses further PARP1 enzymatic activity — preventing excessive NAD+ consumption — and contributes to PARP1 release from the repaired strand [^masson1998].
3. **Gap-filling coordination.** XRCC1 NTD positions [[polb]] (DNA polymerase β) at the 1-nucleotide gap generated after APE1-mediated AP-site cleavage. Polβ fills the gap and removes the 5'-deoxyribose phosphate (5'-dRP) blocking terminus.
4. **Ligation.** XRCC1 BRCT2 stabilizes DNA ligase IIIα ([[lig3]]) as an obligate complex throughout cellular life — LIG3 protein stability is entirely XRCC1-dependent in human cells [^caldecott1995].
5. **TDP1 recruitment.** XRCC1 also binds [[tdp1]] (tyrosyl-DNA phosphodiesterase 1), routing the resolution of Top1-cleavage complexes (stalled Top1 trapped on DNA) through the SSBR machinery.

This scaffold function is distinct from long-patch BER (2–10 nt resynthesis), which instead relies on Polδ/ε, PCNA, and LIG1 and is XRCC1-independent [^caldecott2008].

## Discovery

XRCC1 was cloned in 1990 from a human cDNA library by functional complementation of the ionizing-radiation-hypersensitive Chinese hamster ovary (CHO) mutant cell line EM9 [^thompson1990]. EM9 cells are ~10× more sensitive to ionizing radiation and simple alkylating agents than the parental AA8 line, and display elevated levels of sister chromatid exchanges (SCEs). Complementation with the XRCC1 cDNA restored normal radiation resistance and reduced SCEs to near-wild-type levels, establishing XRCC1 as the first mammalian gene cloned on the basis of DNA strand-break repair phenotype.

## Role in aging

### SSBR capacity and post-mitotic neuron survival

Post-mitotic neurons lack replicative DNA repair backup routes (no S-phase-coupled repair, minimal HR). They depend almost entirely on SSBR to maintain genomic integrity against the continuous ROS-generated oxidative load in a high-metabolic-rate tissue. XRCC1 is indispensable for this:

- **XRCC1 null is embryonic lethal in mice** — homozygous Xrcc1-/- embryos die before E7.5, demonstrating that SSBR capacity is essential for embryonic proliferation [^tebbs2003]. This early lethality required transgenic rescue to study XRCC1 function in adult tissues.
- **XRCC1 hypomorphic mice** (transgene-rescued knockouts expressing <10% of normal XRCC1) are viable and fertile, with near-normal sensitivity to alkylating agents, indicating residual SSBR capacity is highly efficient [^tebbs2003]. Accelerated-aging phenotypes at the organismal level have not been formally demonstrated in these hypomorphs to date. #gap/needs-replication

### SCAR26 — the human disease connection

Biallelic loss-of-function mutations in XRCC1 cause progressive cerebellar ataxia with oculomotor apraxia and peripheral neuropathy — designated **SCAR26** (spinocerebellar ataxia, autosomal recessive 26; OMIM 616027) [^hoch2017]. The Hoch et al. 2017 Nature paper identified the mechanism in human patient cells (compound heterozygous c.1293G>C / c.1393C>T) and a conditional Xrcc1 brain-knockout mouse model: XRCC1 mutations cause **PARP1 hyperactivation** — without XRCC1 to negatively regulate PARP1, persistent unrepaired SSBs result in constitutive PARP1 activation and pathological elevation of poly(ADP-ribose). The authors propose this causes neuronal death via NAD+ depletion and bioenergetic failure (citing excess ADP-ribose synthesis as neurotoxic; refs 15–16 in the paper). Supporting evidence: genetic deletion of Parp1 rescued both the elevated ADP-ribose levels and the loss of cerebellar interneurons in Xrcc1^Nes-Cre mice ~4-fold (interneuron density restored toward wild-type), and improved rotarod performance >30-fold (mean retention time ~30 sec vs. a few seconds in Xrcc1^Nes-Cre mice) [^hoch2017]. LIG3α protein levels were reduced by >80% in patient cells, consistent with XRCC1-dependent LIG3 stability.

This mechanism connects directly to the broader aging biology of [[parp1]]: chronic mild PARP1 hyperactivation (driven by age-associated accumulation of SSBs) similarly depletes NAD+ and suppresses [[sirt1]] activity — a plausible partial analogy to the SCAR26 disease mechanism at lower severity. SCAR26 can thus be read as a severe version of a process that may operate at low amplitude during normal aging.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | SSBR / BER is universally conserved; XRCC1 ortholog present in all vertebrates |
| Phenotype conserved in humans? | yes | SCAR26 is a human disease caused by XRCC1 loss-of-function |
| Replicated in humans? | yes (disease) | SCAR26 independently replicated in multiple kindreds |

#gap/needs-human-replication — the specific hypothesis that partial XRCC1 reduction contributes to normal human aging (as opposed to catastrophic loss causing SCAR26) has not been tested.

### Common XRCC1 SNP variants

The Arg399Gln variant (rs25487, BRCT1 domain) is the most-studied common SNP. Large meta-analyses associate it with modestly elevated cancer risk across multiple tumor types [^gap-snp-note]. Functional impact on BER or aging biomarkers has not been mechanistically characterized. #gap/no-mechanism

## Pathway membership

- [[base-excision-repair]] — core scaffold of short-patch BER and SSBR; see BER pathway page for enzymatic context
- [[dna-damage-response]] — recruited to SSBs via PARP1-PAR axis; acts upstream of DSB escalation

## Key interactors

| Partner | Domain on XRCC1 | Function |
|---|---|---|
| [[parp1]] | BRCT1 | Recruited by PAR chains; XRCC1 suppresses PARP1 hyperactivation |
| [[polb]] | NTD | Gap-filling DNA synthesis (short-patch) |
| [[lig3]] | BRCT2 | Obligate heterodimer; LIG3 stability requires XRCC1 |
| [[ape1]] | linker/NTD | AP endonuclease; hands off 5'-dRP for Polβ removal |
| [[tdp1]] | (direct; domain unclear) | Top1-cleavage complex resolution |

Note: [[polb]], [[lig3]], [[ape1]], and [[tdp1]] do not yet have dedicated wiki pages — these are implicit stubs.

## Pharmacology and druggability

**Druggability tier: 4** (no XRCC1-direct drug). XRCC1 has no enzymatic active site to target. Current indirect pharmacological leverage on the XRCC1 pathway:

- **PARP inhibitors** (olaparib, niraparib, rucaparib) — act on PARP1 upstream; in oncology they exploit synthetic lethality with BRCA deficiency. Not validated for aging-context SSBR enhancement; PARP1 inhibition would reduce SSB signaling but does not address the downstream repair scaffold function of XRCC1.
- **No XRCC1-stabilizing or XRCC1-activating compound** is in clinical development.

If XRCC1 expression or stability could be enhanced in aged tissues (where SSB burden increases), this could in principle maintain SSBR capacity and reduce PARP1 hyperactivation. Currently purely hypothetical. #gap/no-mechanism #gap/needs-human-replication

## Limitations and gaps

- `#gap/needs-canonical-id` — XRCC1 is not listed in the GenAge Human database; aging-gene classification is based on model-organism and disease data rather than a curated aging-gene registry.
- `#gap/needs-tissue-expression-data` — GTEx aging-correlation for XRCC1 has not been pulled; tissue-level age-related expression changes are not documented on this page.
- `#gap/needs-replication` — The claim that XRCC1 hypomorphic mice show accelerated aging phenotypes (as stated in some review literature) was not supported by the primary Tebbs 2003 paper, which found near-normal development and alkylation sensitivity. A specific aging-phenotype follow-up study has not been identified.
- `#gap/no-mechanism` — The relationship between common XRCC1 SNPs (Arg399Gln) and cancer risk or aging biomarkers lacks mechanistic characterization at the SSBR/PARP1 axis level.
- `#gap/needs-human-replication` — Whether partial XRCC1 reduction (rather than catastrophic loss) contributes to normal aging trajectories has not been tested in human genetic or epidemiological studies.
- `#gap/no-fulltext-access` — Thompson 1990 (doi:10.1128/mcb.10.12.6160-6171.1990), Caldecott 1995 (doi:10.1093/nar/23.23.4836), and Tebbs 2003 (doi:10.1016/j.dnarep.2003.08.007) are closed-access (not_oa per a local paper archive) with no local PDF. Claims attributed to Thompson 1990 and Caldecott 1995 are reproduced from abstract-level information and the locally-verified Caldecott 2008 review, which cites and summarizes them. Tebbs 2003 claims (Xrcc1 null lethality; hypomorph viability) are corroborated by independent confirmation in Hoch 2017 (p.3, citing ref 8) and Masson 1998 (ref 49 citing a 1996 Tebbs Environ Mol Mutagen paper) — but the full Tebbs 2003 paper itself remains unverified. The seeder's correction that the hypomorphic mouse does NOT show accelerated aging is appropriately flagged #gap/needs-replication.

## Footnotes

[^thompson1990]: doi:10.1128/mcb.10.12.6160-6171.1990 · Thompson LH et al. · *Mol Cell Biol* 1990;10(12):6160–6171 · in-vitro + in-vivo (CHO hamster mutant EM9) · functional cloning of human XRCC1 cDNA by complementation of radiation/alkylation hypersensitivity; n=multiple CHO clones · closed-access, not_oa, no local PDF

[^caldecott1995]: doi:10.1093/nar/23.23.4836 · Caldecott KW, Tucker JD, Stanker LH, Thompson LH · *Nucleic Acids Research* 1995;23(23):4836–4843 · in-vitro · characterization of XRCC1–LIG3 complex; demonstrated LIG3 absence from XRCC1-mutant hamster cells · cited_by 282 (percentile 100) · closed-access, not_oa, no local PDF

[^masson1998]: doi:10.1128/mcb.18.6.3563 · Masson M et al. · *Mol Cell Biol* 1998;18(6):3563–3571 · in-vitro (yeast two-hybrid + mammalian cell GST pull-down + immunofluorescence; Cos-7 and HeLa cells) · XRCC1 interacts with PARP1 via direct protein–protein contact mediated by XRCC1 central region (residues 301–402, containing BRCT1); interaction is with auto-poly(ADP-ribosyl)ated PARP1 and is preferential for the oligo-ADP-ribosylated form; XRCC1 overexpression (residues 170–428 sufficient) suppresses global PARP1 catalytic activity in cell extracts and in vivo; NTD (Polβ-binding) shown as residues 1–84 in domain map; BRCT2 (LIG3-binding region) = 538–633 in domain map · cited_by 897 (percentile 100) · OA via PMC108937; PDF verified 2026-05-07

[^caldecott2008]: doi:10.1038/nrg2380 · Caldecott KW · *Nature Reviews Genetics* 2008;9:619–631 · review · comprehensive SSBR overview: XRCC1 domains, partner binding, SSBR stepwise mechanism, disease connections; confirms XRCC1 BRCT1 interaction with auto-modified PARP1 is preferential (not simple PAR-chain reading); BRCT1-interacting region on PARP1 is primarily domain D (automodification domain); CK2 phosphorylation of XRCC1 linker regions modulates interactions; LIG3α stability ~80% dependent on XRCC1 in nuclear compartment; long-patch BER confirmed XRCC1-independent (uses PCNA/Polδ/LIG1) · cited_by 996 (percentile 100) · local PDF verified 2026-05-07: 

[^hoch2017]: doi:10.1038/nature20790 · Hoch NC et al. (Caldecott KW lab) · *Nature* 2017;541:87–91 · in-vivo + in-vitro (1 human index patient with compound heterozygous XRCC1 mutations + second patient homozygous, plus Xrcc1^Nes-Cre conditional brain-knockout mouse on mixed C57Bl6 × S129 background + human fibroblast/LCL cultures) · biallelic XRCC1 mutations cause progressive cerebellar ataxia (SCAR26/OMIM 616027) via PARP1 hyperactivation; Parp1 deletion rescues cerebellar interneuron loss ~4-fold and rotarod retention >30-fold (~30 sec); LIG3α reduced >80% in patient cells; note: NAD+ depletion is the proposed downstream mediator (supported by prior literature) but direct NAD+ measurement is not reported in this paper — elevated ADP-ribose is the measured proxy · cited_by 262 (percentile 100) · OA via PMC5218588; PDF verified 2026-05-07

[^tebbs2003]: doi:10.1016/j.dnarep.2003.08.007 · Tebbs RS, Thompson LH, Cleaver JE · *DNA Repair* 2003;2:1405–1417 · in-vivo (mouse transgene rescue) · Xrcc1 null is embryonic lethal (<E7.5); <10% hypomorphic expression supports viable, fertile adults with near-normal alkylation sensitivity; LIG3 destabilized in hypomorphs · cited_by 65 (percentile 99) · closed-access, not_oa, no local PDF

[^gap-snp-note]: Arg399Gln (rs25487) meta-analysis data cited by hundreds of cancer-risk papers; no single primary citation given here because the claim is class-level (meta-analytic consensus) rather than single-study. Full citation needed for any quantitative effect-size claim. #gap/unsourced — functional BER impact uncharacterized.
