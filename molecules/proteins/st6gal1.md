---
type: protein
aliases: [SIAT1, ST6Gal I, ST6GalI, beta-galactoside alpha-2,6-sialyltransferase 1, alpha-2,6-ST 1, CMP-N-acetylneuraminate-beta-galactosamide-alpha-2,6-sialyltransferase 1]
uniprot: P15907
ncbi-gene: 6480
hgnc: 10860
ensembl: ENSG00000073849
mouse-ortholog: St6gal1
pathways: []
hallmarks: ["[[chronic-inflammation]]"]
sens-categories: []
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: partial
caused-by: []
causes: ["[[igg-fc-glycosylation]]"]
literature-checked-through: 2026-05-20
verified: true
verified-date: 2026-05-20
verified-by: claude
verified-scope: "EC number corrected from erroneous 2.4.99.1 to current IUBMB 2.4.3.1 (ExPASy ENZYME confirms 2.4.99.1 is 'Transferred entry: 2.4.3.1'). Anthony 2008 (30 mg/kg, DC-SIGN/FcγRIIb mechanism, α2,6-linkage specificity) verified against PDF. Werner 2024 (B-cell-intrinsic sialylation via BM chimeric model) verified against PDF. Landini 2022 (n=2,020; ST6GAL1 as IgG-specific GWAS locus) verified against PDF. Identity fields (UniProt P15907, NCBI Gene 6480, HGNC 10860, Ensembl ENSG00000073849) confirmed via UniProt REST API. Collins 2002 (CD22 masking KO phenotype) not verified — download failed (0 candidate URLs); claim tagged #gap/no-fulltext-access. Kaneko 2006 (~5% sialylation claim) not verified — not_oa."
---

# ST6GAL1 (beta-galactoside alpha-2,6-sialyltransferase 1)

ST6GAL1 is the enzyme responsible for adding **α2,6-linked sialic acid (Neu5Ac)** to terminal galactose residues on N-glycans. In the IgG Fc N-glycosylation cascade, it is the final enzymatic step, adding sialic acid to galactosylated (G1 or G2) glycoforms to produce the sialylated species (G1S, G2S, G2FS1, G2FS2) that are the **dominant anti-inflammatory glycoforms** of IgG. Sialylated IgG Fc is the mechanistic basis of the anti-inflammatory action of intravenous immunoglobulin (IVIG) [^anthony2008][^kaneko2006]. ST6GAL1 and [[mgat3]] carry the two strongest GWAS signals for IgG glycan variation in humans [^landini2022].

## Identity

- **UniProt:** P15907 (SIAT1_HUMAN) — confirmed via UniProt REST API 2026-05-20
- **NCBI Gene:** 6480
- **HGNC:** 10860
- **Ensembl:** ENSG00000073849
- **Mouse ortholog:** St6gal1
- **Length:** 406 amino acids (canonical isoform)
- **EC number:** 2.4.3.1 (current IUBMB/ExPASy designation; formerly catalogued as EC 2.4.99.1 — ExPASy ENZYME database now lists 2.4.99.1 as a "Transferred entry: 2.4.3.1" following a ~2018 sialyltransferase class renumbering. UniProt P15907 correctly reflects 2.4.3.1.)

## Enzymology

ST6GAL1 is a type II single-pass transmembrane glycoprotein localized primarily to the Golgi apparatus (trans cisternae), with a **soluble form (sST6GAL1)** released into the circulation by BACE1 (β-site APP-cleaving enzyme 1) proteolytic cleavage of the stem region. The enzymatic reaction is:

```
CMP-Neu5Ac + terminal-Gal-GlcNAc-Asn → Neu5Ac(α2,6)-Gal-GlcNAc-Asn + CMP
```

Key specificities:
- **Linkage specificity:** α2,6 — not α2,3. Humans (unlike mice) do not produce α2,3-linked sialic acid on IgG Fc N-glycans. All sialic acid on human serum IgG Fc is α2,6-linked, produced exclusively by ST6GAL1.
- **Substrate dependency:** ST6GAL1 activity is substrate-limited by prior B4GALT1-mediated galactosylation. Agalactosylated glycoforms (G0, G0F) cannot be sialylated. This means that age-related decline in [[b4galt1]] activity indirectly suppresses sialylation even if ST6GAL1 activity is maintained.
- **ST6GAL1 vs ST6GAL2:** ST6GAL2 is a closely related paralog (74% catalytic domain sequence identity) with different tissue distribution (predominantly expressed in brain/neural tissues); ST6GAL2 does not contribute substantially to IgG Fc sialylation in B cells.

The soluble serum form (sST6GAL1, released by BACE1 cleavage) has been detected in plasma and proposed as a biomarker of systemic inflammation / liver function, though its activity on extracellular substrates is debated [^dallolio2018]. The IgG Fc sialylation occurs **intracellularly within B cells**, as demonstrated by bone marrow chimeric experiments showing that B-cell-specific ST6Gal1 deletion abrogates IgG sialylation, confirming that circulating sialidases or extracellular ST6GAL1 do not contribute meaningfully [^werner2024].

## Position in the IgG Fc glycosylation cascade

ST6GAL1 is the **final step** (Step 5) in the [[igg-fc-glycosylation|Golgi processing cascade]] for IgG:

| Step | Enzyme | Product |
|---|---|---|
| 1–2 | MGAT1, MGAT2 | Biantennary complex-type scaffold |
| 3 | [[fut8]] / [[mgat3]] | Core fucosylation or bisecting GlcNAc |
| 4 | [[b4galt1]] | G0 → G1/G2 (galactosylation) |
| **5** | **ST6GAL1** | **G1/G2 → G1S/G2S (sialylation)** |

## Aging-relevant biology

### Sialylated IgG as the anti-inflammatory glycoform

Approximately 5% of serum IgG is sialylated in healthy adults [^kaneko2006] (note: full-text verification unavailable; abstract-level only #gap/no-fulltext-access). This fraction is functionally disproportionate: it mediates the **anti-inflammatory mechanism of IVIG** [^kaneko2006][^anthony2008]. The mechanistic pathway:

1. Sialylated IgG Fc engages **DC-SIGN** (CD209) on regulatory macrophages / dendritic cells
2. DC-SIGN engagement → upregulates **FcγRIIb** (inhibitory FcγR, CD32b) on effector cells
3. FcγRIIb upregulation → global dampening of FcγRIII-mediated ADCC and cytokine release

Recombinant α2,6-sialylated IgG1 Fc fragments recapitulate IVIG anti-inflammatory activity in mouse models at ~30 mg/kg, compared to 1,000–2,000 mg/kg for native IVIG — a 30- to 67-fold dose reduction [^anthony2008].

### Age-related decline in sialylation

ST6GAL1 activity in B cells declines with age, contributing to the age-associated fall in sialylated IgG fractions observed in large population studies [^gudelj2018]. The loss of sialylated IgG with age removes the DC-SIGN/FcγRIIb anti-inflammatory brake, contributing to the [[hallmarks/chronic-inflammation|inflammaging]] phenotype. This is distinct from (but synergistic with) the B4GALT1-mediated G0 rise: both galactosylation loss and sialylation loss shift the IgG glycome toward a pro-inflammatory profile.

### Inflammation-mediated suppression

Like B4GALT1, ST6GAL1 is downregulated by pro-inflammatory cytokines (IL-6, TNF-α, type I IFNs) in B cells, creating a bidirectional feedback loop [^gudelj2018]. Type I interferons produced by senescent cells may contribute specifically to ST6GAL1 suppression via the SASP — a mechanistic link between [[hallmarks/cellular-senescence|cellular senescence]], the IgG glycome, and inflammaging that remains to be directly tested in vivo. #gap/needs-replication

### Sialylation occurs in B cells pre-secretion

A key mechanistic question was whether serum IgG sialylation reflects enzymatic activity occurring in B cells during secretion, or whether extracellular sialylation/desialylation events (by plasma sialidases or sST6GAL1) reshape the glycome post-secretion. Werner et al. 2024 resolved this using bone marrow chimeric mice with B-cell-specific ST6Gal1 deletion: IgG sialylation is lost when only B cells lack ST6Gal1, demonstrating that sialylation occurs **within B cells before antibody secretion** [^werner2024]. This localizes the therapeutic target to B-cell intrinsic ST6GAL1 expression.

## GWAS and genetic variation

ST6GAL1 is one of the two loci with the strongest GWAS signal for IgG glycan variation (alongside [[mgat3]]) in Landini et al. 2022 (n=2,020; CROATIA KORCULA + VIKING cohorts), as well as in the earlier Wahl et al. 2018 GWAS (n=~1,800; KORA + Rotterdam Study) [^wahl2018][^landini2022]. The ST6GAL1 signal associates primarily with IgG sialylation peaks (not galactosylation or fucosylation). The mr-causal-evidence field is `partial`: GWAS instruments at ST6GAL1 have been described, but a dedicated Mendelian randomization study using ST6GAL1 instruments to test IgG sialylation → aging/inflammatory outcomes has not been published as of 2026-05-20. #gap/needs-replication

## Knockout phenotype (mouse)

ST6GAL1 (ST6Gal-I) knockout mice lack α2,6-linked sialylation on B cell surface glycoproteins. Collins et al. 2002 demonstrated that:
- ST6Gal-I KO B cells have **constitutively unmasked CD22** — the B cell inhibitory coreceptor CD22 (Siglec-2) binds ST6GAL1-generated α2,6-SA on neighboring glycoproteins (*cis* ligands) in normal B cells, keeping CD22 masked. Without ST6GAL1, CD22 is permanently unmasked, dysregulating B cell receptor signaling [^collins2002].
- The KO mice are described as "immunocompromised ligand-deficient," suggesting impaired B cell activation thresholds.

The CD22-masking mechanism is separate from the IgG Fc sialylation story — it reflects ST6GAL1's role in regulating B cell signaling via cell-surface glycan biology, not just antibody glycoform output.

## Soluble serum ST6GAL1 as a circulating marker

Proteolytic shedding of the ST6GAL1 ectodomain (by BACE1) releases a soluble form into the circulation. Serum sST6GAL1 levels have been explored as a marker of liver function and inflammation [^dallolio2018]. Whether sST6GAL1 reflects relevant aging biology (B-cell intrinsic ST6GAL1 decline) or simply constitutive liver shedding is not established. The circulating form is unlikely to contribute to IgG sialylation (Werner 2024 data). #gap/needs-replication

## Therapeutic interest

- **Recombinant sialylated IgG Fc / enriched sialylated IVIG** (rIVIG): The Ravetch group demonstrated that sialylated Fc fragments recapitulate IVIG activity at dramatically lower doses [^anthony2008]. Clinical development for autoimmune indications is ongoing; aging-context use is speculative but biologically motivated.
- **No ST6GAL1-activating small molecule** has reached clinical testing. Enhancing ST6GAL1 expression in B cells (e.g., via NF-κB pathway modulation or epigenetic approaches) is a proposed but unvalidated strategy.

## Substrate breadth beyond IgG Fc

ST6GAL1 sialylates many substrates: IgA, IgM, transferrin, alpha-2-macroglobulin, cell-surface CD45 (modulating CD45 phosphatase activity), integrins, and serum glycoproteins broadly. The IgG Fc context is the most aging-relevant but not the only biologically important substrate.

## Limitations and gaps

- ST6GAL1 enzymatic activity in B cells is not directly measurable in peripheral blood; the IgG glycome sialylation fraction is the practical proxy.
- The molecular mechanism of ST6GAL1 transcriptional suppression by pro-inflammatory cytokines is not characterized at the promoter level. #gap/no-mechanism
- Whether restoring ST6GAL1 expression in aged B cells (via any intervention) is sufficient to reverse the inflammaging glycome phenotype has not been tested in vivo in humans. #gap/needs-replication
- Serum sST6GAL1 as an aging biomarker is unexplored. #gap/needs-replication

## See also

- [[igg-fc-glycosylation]] — full IgG Fc N-glycosylation cascade and aging context
- [[biomarkers/glycanage-2017]] — the GlycanAge clock; sialylation loss is one component
- [[studies/mijakovac-2026-igg-glycome-mortality]] — 20,045-person mortality validation
- [[hallmarks/chronic-inflammation]] — inflammaging context; ST6GAL1 is a molecular mediator
- [[b4galt1]] — galactosyltransferase acting upstream; substrate-limits ST6GAL1
- [[fut8]] — core fucosyltransferase; acts at parallel step
- [[mgat3]] — bisecting GlcNAc transferase; strongest co-GWAS locus with ST6GAL1

---

## Footnotes

[^kaneko2006]: doi:10.1126/science.1129594 · PMID 16888140 · in-vivo (mouse arthritis models) + serum IgG fractionation · Kaneko Y, Nimmerjahn F, Ravetch JV · *Science* 313:670–673 (2006) · Fc sialylation confers anti-inflammatory IgG activity; ~5% sialylated fraction stated in reviews (full-text not available for percentage verification) · archive: not_oa #gap/no-fulltext-access

[^anthony2008]: doi:10.1126/science.1154315 · PMID 18420934 · in-vivo (mouse K/BxN arthritis) + in-vitro · Anthony RM, Nimmerjahn F et al., Ravetch JV · *Science* 320:373 (2008) · α2,6-sialylated IgG1 Fc active at 30 mg/kg vs 1,000–2,000 mg/kg native IVIG; DC-SIGN → FcγRIIb mechanism; α2,6-linkage specificity confirmed · archive: downloaded

[^gudelj2018]: doi:10.1016/j.cellimm.2018.07.009 · PMID 30107893 · review · Gudelj I, Lauc G, Pezer M · *Cell Immunol* 2018 · ST6GAL1 age-decline in B cells; bidirectional inflammation↔glycan loop · archive: download failed #gap/no-fulltext-access

[^wahl2018]: doi:10.3389/fimmu.2018.00277 · PMID 29535710 · GWAS (~1,800 subjects) · Wahl A, van den Akker E, Klaric L et al., Gieger C · *Front Immunol* 9:277 (2018) · replicated GWAS signals at ST6GAL1, B4GALT1, FUT8, MGAT3 for IgG glycan variation · archive: status pending

[^landini2022]: doi:10.1038/s41467-022-29189-5 · PMID 35332118 · GWAS (n=2,020) · Landini A, Trbojević-Akmačić I, Wilson JF, Klarić L et al. · *Nat Commun* 2022 · ST6GAL1 and MGAT3 among strongest IgG-specific GWAS loci; distinct from transferrin glycan loci · archive: downloaded

[^collins2002]: doi:10.1093/glycob/cwf067 · PMID 12213789 · in-vivo (ST6Gal-I KO mice) · Collins BE, Blixt O, DeSieno AR, Bovin N, Marth JD, Paulson JC · *Glycobiology* 12:563–571 (2002) · constitutively unmasked CD22 on ST6Gal-I KO B cells; dysregulated BCR signaling; "immunocompromised ligand-deficient" phenotype · archive: download failed (0 candidate URLs; permanently unverifiable via local archive) #gap/no-fulltext-access

[^werner2024]: doi:10.3389/fimmu.2024.1402000 · PMID 38827747 · in-vivo (bone marrow chimeric mice; B cell-specific ST6Gal1 deletion) · Werner A, Nimmerjahn F et al. · *Front Immunol* 15:1402000 (2024) · IgG sialylation occurs exclusively within B cells before secretion; B cells expressing ST6Gal1 have developmental competitive advantage in mixed chimeras · archive: downloaded

[^dallolio2018]: doi:10.1007/978-981-13-2835-0_17 · review · Dall'Olio F · *Sub-Cell Biochem* 90:505–526 (2018) · plasmatic forms of B4GALT1 and ST6GAL1 as aging-associated markers; review of glycobiology of aging · archive: not_oa
