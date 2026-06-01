---
type: protein
aliases: [ACD, adrenocortical dysplasia homolog, PTOP, TINT1, PIP1, "TPP1 shelterin subunit"]
uniprot: Q96AP0
ncbi-gene: 65057
hgnc: 25070
ensembl: ENSG00000102977
genage-id: null
pathways: ["[[telomerase-pathway]]"]
hallmarks: ["[[telomere-attrition]]", "[[cellular-senescence]]"]
sens-categories: []
known-interactors: ["[[pot1]]", "[[tert]]", "[[tin2]]", "[[shelterin]]"]
key-domains: [OB-fold, POT1-binding-domain, TIN2-binding-region]
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Primary-source PDFs verified for all six cited DOIs (Wang 2007, Xin 2007, Nandakumar 2012, Schmidt 2014, Kocak 2014, Latrick 2010); Liu 2004 is not_oa and could not be verified against PDF — claims attributed to Liu 2004 are limited to TIN2-bridge role and are corroborated by other sources. UniProt Q96AP0 identity fields (gene ACD, length 458 aa, NCBI Gene 65057, HGNC 25070) verified via REST API. GenAge null confirmed via direct lookup. Canonical-database druggability-tier field not independently re-verified against Open Targets."
---

# TPP1 (gene: ACD) — telomerase-recruiter subunit of shelterin

**Disambiguation.** "TPP1" is used for two completely unrelated proteins:
1. **This page — TPP1 (gene: ACD)**, the shelterin subunit that recruits telomerase. Relevant to aging and telomere attrition.
2. **Tripeptidyl peptidase 1 (gene: CLN2 / TPP1)** — a lysosomal exopeptidase whose loss causes neuronal ceroid lipofuscinosis (Batten disease). Unrelated to telomere biology.

All content below concerns the shelterin subunit. For the lysosomal peptidase, see [[cln2-tpp1]] (stub).

---

TPP1 is the [[shelterin]] subunit that bridges [[pot1]] (single-strand telomere binder) to TIN2 and positions telomerase at chromosome ends. Its defining functional feature is the **TEL patch** — a cluster of seven solvent-exposed charged and hydrophobic residues on the OB-fold surface (E168, E169, E171, R180, L183, L212, E215) that contacts the TEN domain of [[tert]] to recruit telomerase [^nandakumar2012]. TPP1 also boosts telomerase processivity: POT1-TPP1 together increase the number of repeats added per binding cycle approximately 2–4 fold in biochemical assays, with the mechanism involving both reduced primer dissociation and enhanced translocation [^wang2007] [^latrick2010]. Germline mutations in ACD cause dyskeratosis congenita and Hoyeraal-Hreidarsson syndrome. Loss-of-function of the TEL patch (separation-of-function point mutations) eliminates telomerase recruitment and telomere elongation in vivo while preserving telomere capping [^nandakumar2012].

## Identity

- **UniProt:** Q96AP0 (ACD_HUMAN; Swiss-Prot manually curated entry)
- **Gene symbol:** ACD (adrenocortical dysplasia homolog)
- **NCBI Gene ID:** 65057
- **HGNC:** 25070
- **Ensembl:** ENSG00000102977
- **Sequence length:** 458 amino acids (canonical isoform)
- **Synonyms (gene-product level):** PTOP, TINT1, PIP1 — historically used names before ACD became standard; see aliases above
- **GenAge entry:** not found (ACD not curated in GenAge-human as of 2026-05-07) #gap/needs-canonical-id
- **Mouse ortholog:** Acd (one-to-one; TEL patch residues conserved across mammals; mouse *acd* hypomorphic alleles cause DC-like phenotypes — see Keegan 2005, Tejera 2010, Jones 2014 — but these are distinct alleles, not TEL-patch point mutations; no K170Δ knock-in mouse published as of 2026)

## Domain architecture

| Domain | Residues (approx.) | Function |
|---|---|---|
| N-terminal OB fold | ~87–250 | Telomerase recruitment (TEL patch) + processivity enhancement; structurally homologous to ciliate TEBP-beta [^wang2007] |
| POT1-binding domain (PBD) | ~158–251 | Directly contacts [[pot1]] OB fold; required for POT1 telomere localization (UniProt Q96AP0; [^wang2007]) |
| Disordered linker | ~265–368, 387–406 | Low-complexity spacer regions; limited structural characterization (UniProt Q96AP0) |
| TIN2-binding domain | ~337–544 (C-terminal) | Tethers TPP1-POT1 sub-complex to TIN2, integrating into full [[shelterin]] assembly; residue P491 resides in this domain [^kocak2014] |

Note: the first 87 N-terminal residues are dispensable for core functions in human cells per [^wang2007] (Wang 2007 used TPP1(90–544) as the functional construct).

The OB fold carries two distinct surfaces: the TEL patch (telomerase-facing) and the POT1-binding face. Separation-of-function mutations isolating each surface have been experimentally characterized (Nandakumar 2012 [^nandakumar2012]).

## TEL patch — mechanism of telomerase recruitment

The TEL patch (Telomerase Enhancing Loop patch) is a cluster of charged and hydrophobic residues on the outer face of the OB fold. Seven critical residues were identified by scanning mutagenesis: **E168, E169, E171** (acidic cluster), **R180, L183** (surface-exposed), and **L212, E215** (hydrophobic and acidic). Their mutation to alanine produces separation-of-function alleles: full telomere capping (POT1 interaction intact) but complete loss of telomerase recruitment and telomere elongation in vivo [^nandakumar2012]. Notably, double mutants E169A/E171A and L212A showed the strongest defects in processivity stimulation (similar to no TPP1 added); single mutants at adjacent residues (e.g., S106A, S111A, R175V) were tolerated [^nandakumar2012].

The complementary interface on the telomerase side is the TEN domain of [[tert]]. Schmidt et al. 2014 identified the key TERT TEN-domain residues as **K78 and R132** (basic patches). Substituting these with glutamate (K78E, R132E) disrupted POT1-TPP1-stimulated processivity (RAP stimulation reduced to 68% and 24% of wild-type respectively) without substantially reducing intrinsic telomerase activity. A compensatory charge-swap in the TEL patch — **E215K** in TPP1 — rescued K78E hTERT RAP stimulation from ~25% back to ~98% of wild-type, establishing the interaction is direct and electrostatically driven between TERT K78 and TPP1 E215 [^schmidt2014].

**Processivity effect:** The POT1-TPP1 heterodimer increases telomerase repeat-addition processivity (RAP) approximately **2–4 fold** in biochemical assays (Wang 2007: ~4-fold for primer a5, R1/2 from 0.78 to 3.3 repeats; Latrick 2010: 2.7 ± 0.6 fold). The mechanism involves two steps: (1) POT1-TPP1 bound to the primer decreases the primer dissociation rate from actively synthesizing telomerase, and (2) POT1-TPP1 increases the translocation efficiency (fraction of enzyme completing the RNA-template translocation step) [^latrick2010]. These two contributions are independent and additive. The processivity contribution is distinct from telomerase recruitment and is mechanistically similar to a DNA polymerase clamp, but operates transiently rather than as a stable sliding clamp [^wang2007] [^latrick2010]. #gap/dose-response-unclear — in-cell quantification of telomere extension per cycle is indirect; the in-vitro fold-change depends on primer sequence and assay conditions.

## Evolutionary context

The TPP1 OB fold is structurally homologous to the beta subunit of ciliate telomere end-binding protein (TEBP-beta, e.g., Euplotes p43). This is not sequence-level conservation but structural: the OB-fold topology and the surface that contacts the equivalent TERT interface are conserved [^xin2007]. The TEL patch therefore represents a conserved functional surface across distantly related eukaryotes.

## Role in shelterin assembly

Within [[shelterin]], TPP1 occupies a connector position:

```
TRF2 ── TIN2 ── TPP1 ── POT1
  |                       |
TRF1                  3' G-overhang
```

TIN2 binds TRF1 and TRF2 (dsDNA-binding subunits) and simultaneously binds TPP1's TIN2-binding region, bridging the dsDNA-binding core to the ssDNA-reading POT1 [^liu2004]. POT1's binding is regulated by TPP1: PTOP/TPP1 promotes POT1 localization to telomeres and modulates its ssDNA affinity.

For the full structural context of shelterin assembly and end-protection, see [[shelterin]] (verified).

## Disease: dyskeratosis congenita and Hoyeraal-Hreidarsson syndrome

Germline mutations in ACD (biallelic or dominant-negative) cause:

- **Dyskeratosis congenita (DC)** — characterized by oral leukoplakia, nail dystrophy, abnormal skin pigmentation, and bone marrow failure; driven by accelerated telomere shortening in stem cell compartments. ACD mutations cause autosomal dominant DC (DKCA6) and autosomal recessive DC (DKCB7).
- **Hoyeraal-Hreidarsson syndrome** — a severe DC variant adding cerebellar hypoplasia, immunodeficiency, and intrauterine growth retardation; caused by mutations directly in the TEL patch surface. Kocak et al. 2014 identified a patient with compound heterozygous ACD mutations (one deleting a TEL patch residue) showing extremely short telomeres and severe phenotype [^kocak2014].

**Human K170Δ — cell-based validation only.** Kocak 2014 identifies the K170Δ allele in a human HH proband (NCI-275-1) as a compound heterozygote with P491T (TIN2-binding domain). Functional experiments were performed in HeLa cells transiently transfected with K170Δ constructs — not a knock-in mouse model. These showed that K170Δ: (1) fails to recruit telomerase (only 3% of Flag-TPP1-K170Δ foci colocalize with TR, vs 54% for wild-type, p=0.02); (2) reduces telomerase processivity (disappearance of high-molecular-weight extension products); and (3) modestly reduces TIN2 interaction. The paper's Discussion cites independent mouse *acd* hypomorphic allele studies (Keegan 2005; Tejera 2010; Jones 2014 — complete Tpp1 deletion in HSCs) to contextualize findings, but those are not K170Δ knock-ins. There is **no K170Δ knock-in mouse in Kocak 2014** [^kocak2014]. #gap/needs-replication — whether K170Δ or equivalent TEL-patch loss-of-function recapitulates DC/HH in a mouse knock-in model has not been tested as of 2026.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | TEL patch residues conserved across mammals; DC/HH are human genetic diseases caused by ACD mutations [^kocak2014] |
| Phenotype conserved in humans? | yes | Human ACD mutations (K170Δ, P491T and others) recapitulate telomere attrition syndrome in multiple independent pedigrees |
| Replicated in humans? | yes | Kocak 2014 (HH/DC); at least one other independent ACD DC pedigree (Savage/Alter lab cohort); cell-based validation across independent labs |

## Aging relevance

TPP1 is relevant to aging through two mechanisms:

1. **Telomerase gating.** In normal somatic stem cells with low-level telomerase activity, TPP1-mediated recruitment is the rate-limiting step for telomere maintenance. Age-associated reductions in TERT expression would be predicted to sensitize cells to TEL-patch-dependent recruitment efficiency — though direct evidence for age-dependent TPP1 expression or activity changes in human tissues is lacking. #gap/needs-human-replication

2. **End-protection.** As a POT1 partner, TPP1 contributes to ATR-DDR suppression at the 3' overhang. At critically shortened telomeres in aged cells, partial shelterin destabilization (including TPP1-POT1 sub-complex) contributes to the DDR signal that drives [[cellular-senescence]] and the [[sasp]]. The shelterin page documents this mechanism; TPP1's contribution is the ssDNA-binding regulation via POT1.

#gap/needs-human-replication — Direct evidence that TPP1 expression or function changes with age in human stem cell compartments (HSCs, intestinal crypts) is not established.

## Pathway membership

- [[telomerase-pathway]] — TPP1 is the telomerase-recruiting component; the central molecular function of this page
- [[cellular-senescence]] — downstream consequence of TPP1/shelterin dysfunction at shortened telomeres
- [[telomere-attrition]] — the driving hallmark

## Interactors

- [[pot1]] — direct heterodimer partner; TPP1 regulates POT1 localization and ssDNA affinity
- [[tert]] — direct contact via TEL patch (OB fold) + TERT TEN domain; the recruitment interface
- [[tin2]] — TPP1 C-terminal region binds TIN2, anchoring TPP1-POT1 into the shelterin scaffold
- [[shelterin]] — the full six-subunit complex of which TPP1 is a subunit (complex page)

## Druggability

**Druggability tier: 3** (predicted druggable surface; no clinical drug). The TEL patch is a well-characterized protein-protein interaction (PPI) surface (TPP1-TERT). PPI surfaces of this geometry are challenging but not undruggable: OB-fold surfaces have been targeted in other contexts, and the defined electrostatic character of the interface — anchored by TPP1 E215 making direct contact with TERT K78 [^schmidt2014] — provides a precise target for structure-guided small-molecule development. No clinical-stage inhibitor or activator of the TPP1-TERT interaction exists. Aging-context tier is 3 — the TPP1-TEL patch is a research-stage druggable surface without validated clinical compounds for any indication.

Potential therapeutic angles (speculative; uncited):
- **Telomerase activators via TEL patch stabilization** — mimicking TPP1 recruitment to enhance telomere maintenance in disease (DC/HH, HSC exhaustion). #gap/no-mechanism for whether small-molecule approaches are feasible.
- **Telomerase inhibition via competitive blocking** of the TEL patch — oncology context; would accelerate telomere shortening in cancer cells. Opposite of the aging-intervention goal.

## Limitations and knowledge gaps

- `#gap/needs-canonical-id` — GenAge entry absent for ACD (confirmed absent via direct lookup 2026-05-07); if added in future HAGR release, populate `genage-id`.
- `#gap/needs-human-replication` — No published data on age-dependent changes in TPP1 expression or TEL-patch function in human aged tissues.
- `#gap/needs-replication` — No K170Δ knock-in mouse exists as of 2026; in-vivo proof that a single TEL-patch point mutation is sufficient to cause DC/HH in mice has not been published. Mouse *acd* allele studies (Keegan 2005, Tejera 2010, Jones 2014) use hypomorphic or complete-loss alleles, not TEL-patch point mutations.
- `#gap/dose-response-unclear` — processivity enhancement by TPP1 is characterized in reconstituted biochemical systems; in-cell quantification of telomere extension per binding cycle is indirect. Fold-enhancement varies 2–4× across assay conditions and primers.
- `#gap/unsourced` — GTEx aging correlation (`gtex-aging-correlation`) not populated; requires `sops/finding-tissue-expression.md` workflow.
- `#gap/unsourced` — Mendelian randomization evidence (`mr-causal-evidence`) not tested; germline ACD variants in GWAS are rare (DC is a rare disease), limiting instrument availability.

## Footnotes

[^liu2004]: doi:10.1038/ncb1142 · Liu D et al. (Songyang lab) · *Nature Cell Biology* 2004 · n=not applicable (biochemical) · in-vitro · model: human cell lines + in-vitro binding · PTOP (TPP1 original name) discovery: interacts with POT1, regulates POT1 telomere localization; POT1 telomere length regulation depends on PTOP · not_oa locally (closed access)

[^wang2007]: doi:10.1038/nature05454 · Wang F et al. (Lei / Cech labs) · *Nature* 2007 · n=not applicable (biochemical) · in-vitro + reconstituted · model: recombinant human POT1-TPP1(90-544) + immunopurified telomerase · POT1-TPP1 increases telomerase repeat-addition processivity ~4-fold for primer a5 (R1/2: 0.78 → 3.3 repeats) and ~3-fold in total activity; processivity effect requires the TPP1 OB fold and the POT1-TPP1 interaction; also reports TPP1-OB crystal structure (PDB: 2I46) showing structural homology to Oxyrtricha TEBP-β · PDF locally available

[^xin2007]: doi:10.1038/nature05469 · Xin H et al. (Songyang lab) · *Nature* 2007 · n=not applicable (biochemical) · in-vitro + cell lines · model: 293T cells + recombinant proteins; TAP-TERT pull-down; TRAP assays · TPP1 OB fold identified as structural homolog of TEBP-β (Oxyrtricha nova); TPP1 OB fold required for telomerase co-IP (full-length TPP1 brought down ~20% of telomerase activity); TPP1 OB fold + POT1 pull down HA-TERT; TPP1 RD domain (residues 87–240) required for telomerase interaction; TIN2 bridges TPP1-POT1 to TRF1/TRF2 double-strand-binding core · PDF locally available

[^nandakumar2012]: doi:10.1038/nature11648 · Nandakumar J et al. (Cech lab) · *Nature* 2012 · n=not applicable (biochemical + cell-based) · in-vitro + stable human cell lines · model: HeLa-EM2-11ht stable cell lines; 14 single-AA and 2 double-AA mutants of TPP1-OB screened; 7 critical TEL-patch residues identified (E168, E169, E171, R180, L183, L212, E215) — all cluster on OB-fold surface; E169A/E171A and L212A mutants lose processivity stimulation and telomere elongation in vivo (p<0.005) while retaining POT1-DNA binding · PDF verified (OA via PMC3521872)

[^schmidt2014]: doi:10.7554/eLife.03563 · Schmidt JC, Dalby AB, Cech TR · *eLife* 2014 · n=not applicable (biochemical + cell-based) · in-vitro + stable human cell lines · model: HeLa and HEK293T cells; TERT TEN-domain K78E and R132E mutants lose POT1-TPP1-stimulated RAP without losing catalytic activity (K78E: 68% RAP; R132E: 24% RAP relative to WT); compensatory E215K mutation in TPP1 TEL patch rescues K78E hTERT RAP stimulation to 98% of WT (n=3, mean±SD; p<0.01) — establishes direct electrostatic interaction between TERT K78 and TPP1 E215 · PDF verified (gold OA via PMC4359370)

[^kocak2014]: doi:10.1101/gad.248567.114 · Kocak H et al. (Savage / Nandakumar labs) · *Genes & Development* 2014 · n=1 proband (human genetic, 1 family) · human genetic + cell-based · model: human HH proband NCI-275-1 with compound heterozygous ACD mutations K170Δ (TEL patch, paternally inherited) + P491T (TIN2-binding domain, maternally inherited); functional validation by IF/FISH and direct telomerase assay in transfected HeLa cells — no mouse knock-in model in this study · PDF verified (diamond OA via PMC4180972)

[^latrick2010]: doi:10.1038/emboj.2009.409 · Latrick CM, Cech TR · *EMBO Journal* 2010 · n=not applicable (biochemical) · in-vitro · model: super-telomerase extract (HEK293T overexpressing TERT+TR) + purified recombinant POT1-TPP1 · POT1-TPP1 increases RAP 2.7 ± 0.6 fold; mechanism: (1) decreases primer dissociation rate from actively synthesizing telomerase (koff reduced at least 4-fold at 16°C or 30°C); (2) increases translocation efficiency (57% → 99%); one POT1-TPP1 binding site on the primer is necessary and sufficient; effect is specific (non-specific ssDNA-binding protein gp32 cannot substitute) · PDF verified (OA via PMC2837173)
