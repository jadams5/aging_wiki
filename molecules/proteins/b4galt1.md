---
type: protein
aliases: [GGTB2, beta-1,4-galactosyltransferase 1, B4Gal-T1, b4Gal-T1, beta4Gal-T1, GT-I, N-acetyllactosamine synthase, UDP-Gal:beta-GlcNAc beta-1,4-galactosyltransferase 1]
uniprot: P15291
ncbi-gene: 2683
hgnc: 924
ensembl: ENSG00000086062
mouse-ortholog: B4galt1
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
verified-scope: "Landini 2022 attribution corrected: body text and footnote incorrectly stated B4GALT1 is an IgG-specific locus per Landini 2022 — PDF confirms ST6GAL1 and MGAT3 are the IgG-specific highlights; FUT8/FUT6 are shared; B4GALT1 is an established replicated locus (Wahl 2018) but not Landini 2022's primary finding. Ercan 2017 (estrogen regulation, n=713 + 4 interventional studies) verified against PDF. Identity fields (UniProt P15291, NCBI Gene 2683, HGNC 924, Ensembl ENSG00000086062) confirmed via UniProt REST API. Du 2020 (phytoestrogens) not verified — not_oa; claim tagged #gap/no-fulltext-access. B4GALT1 KO primary paper (Asano ~1997) not locatable via PubMed; KO phenotype sourced from review (Gudelj 2018, download failed); claim tagged #gap/needs-replication."
---

# B4GALT1 (beta-1,4-galactosyltransferase 1)

B4GALT1 is the principal β1,4-galactosyltransferase responsible for adding terminal galactose residues to N-acetylglucosamine-terminating N-glycans in the trans-Golgi. Within the [[igg-fc-glycosylation|IgG Fc N-glycosylation]] cascade, it is **rate-limiting for the galactosylation step** — determining the distribution of the G0/G1/G2 glycoforms that constitute the dominant aging signal in the IgG glycome. Its expression in B cells declines with age and is upregulated by estrogen, making it the molecular switch underlying the sex-hormone-dependent glycome aging trajectory quantified by [[biomarkers/glycanage-2017|GlycanAge]].

## Identity

- **UniProt:** P15291 (B4GT1_HUMAN) — confirmed via UniProt REST API 2026-05-20
- **NCBI Gene:** 2683
- **HGNC:** 924
- **Ensembl:** ENSG00000086062
- **Mouse ortholog:** B4galt1
- **Length:** 398 amino acids (canonical isoform)
- **EC numbers:** 2.4.1.22, 2.4.1.38, 2.4.1.90, 2.4.1.275 (multiple substrates; 2.4.1.38 = beta-N-acetylglucosaminide beta-1,4-galactosyltransferase, the IgG-relevant activity)

## Enzymology

B4GALT1 is a type II single-pass transmembrane glycoprotein localized primarily to the Golgi stack membrane (trans cisternae), with smaller pools on the plasma membrane and in secreted form in body fluids. It catalyzes the reaction:

```
UDP-Gal + terminal-GlcNAc-Asn → terminal-Gal(β1,4)-GlcNAc-Asn + UDP
```

The catalytic domain is C-terminal; the N-terminal stem region anchors it in the Golgi membrane and contributes to oligomerization. **In mammary gland**, B4GALT1 forms a complex with α-lactalbumin (alpha-LA) to create **lactose synthase**, which produces lactose (Gal + Glc) rather than chain elongation on glycoproteins. This is an evolutionarily distinct, lactation-specific use of the same catalytic core and is unrelated to the IgG Fc glycosylation function. The IgG-relevant pool is the Golgi-resident, non-α-lactalbumin-associated form operating in B cells and plasma cells.

B4GALT1 is the first of a seven-member B4GALT family (B4GALT1–7); it has the broadest substrate specificity, acting on glycoprotein N-glycans, glycolipid O-glycans, and free oligosaccharides. B4GALT2–7 have narrower specificities and are not the primary IgG Fc galactosylating enzymes in plasma cells.

## Position in the IgG Fc glycosylation cascade

In the [[igg-fc-glycosylation|Golgi processing cascade]] for IgG, B4GALT1 acts as **Step 4** (after MGAT1/2 scaffold assembly, FUT8-mediated core fucosylation, and MGAT3-mediated bisecting GlcNAc addition):

| Step | Enzyme | Product |
|---|---|---|
| 1–2 | MGAT1, MGAT2 | Biantennary complex-type scaffold |
| 3 | [[fut8]] / [[mgat3]] | Core fucosylation or bisecting GlcNAc |
| **4** | **B4GALT1** | **G0 → G1/G2 (galactosylation)** |
| 5 | [[st6gal1]] | G1/G2 → G1S/G2S (sialylation) |

B4GALT1 activity is required before ST6GAL1 can add sialic acid — sialylation is substrate-limited by galactosylation.

## Aging-relevant regulation

This is the mechanistically central section for B4GALT1's aging relevance.

### Age-dependent expression decline in B cells

B4GALT1 expression and activity in B lymphocytes and plasma cells decline with age. The downstream consequence — rising G0 (agalactosylated IgG) and falling G2 (digalactosylated IgG) — is the dominant age-associated IgG glycome shift observed across large population cohorts (n > 5,000) [^gudelj2018]. Because serum IgG reflects the cumulative biosynthetic output of the B cell / plasma cell pool, B4GALT1 activity integrates across that pool; a specific cell-intrinsic activity measurement is not routinely feasible in peripheral blood (see Limitations).

### Estrogen → ESR1 → B4GALT1 axis

Estrogen is the primary positive regulator of B4GALT1 transcription in B cells. The evidence is pharmacological-intervention based [^ercan2017]:

- Menopause increases G0F (agalactosylated IgG); conjugated estrogen and raloxifene treatment in postmenopausal women reduces G0F.
- Leuprolide (GnRH agonist causing estrogen suppression) in premenopausal women increases G0F; adding back estradiol reverses this.
- In men, goserelin + anastrozole (blocking both testosterone and its aromatization to estradiol) increases G0F; testosterone replacement (without anastrozole) maintains normal G0F through its estradiol-aromatization product.

This establishes estrogens as **in vivo positive regulators of IgG galactosylation** in both sexes, and ESR1 (estrogen receptor alpha) as the presumed transcriptional activator of B4GALT1 in B cells. The specific ESR1 binding site / estrogen-response element in the B4GALT1 promoter has not been mapped in a dedicated mechanistic study (no published ChIP-seq or EMSA for ESR1 on the B4GALT1 promoter as of 2026-05-20). #gap/no-mechanism

**Clinical implication.** The menopause-driven glycome aging shift (women's IgG glycome accelerates at the menopausal transition) and the testosterone/phytoestrogen effects on B4GALT1 expression are consistent across multiple study designs [^ercan2017][^du2020]. Estradiol or phytoestrogen administration is the only validated indirect B4GALT1 activator; no direct B4GALT1 agonist has been developed.

### Inflammation-mediated suppression

Pro-inflammatory cytokines (IL-6, TNF-α) downregulate B4GALT1 transcription in B cells, reducing galactosylation of newly secreted IgG. This creates a **bidirectional inflammaging feedback loop**: inflammation suppresses B4GALT1 → G0 IgG rises → complement and FcγRIII engagement amplifies TNF-α/IL-6 → further B4GALT1 suppression [^gudelj2018]. B4GALT1 is thus both a sensor and an amplifier of the inflammatory state.

### Microbiome SCFA axis

Short-chain fatty acids (SCFAs) from gut commensals may upregulate B4GALT1 expression in B cells, and age-related dysbiosis-driven SCFA decline may contribute to the glycome aging shift via this axis. Currently supported by in vitro and rodent data; not confirmed in humans. #gap/needs-replication

## GWAS and genetic variation

B4GALT1 is one of four glycosyltransferase loci (alongside [[st6gal1]], [[fut8]], and [[mgat3]]) with replicated GWAS signals for IgG glycan composition [^wahl2018][^landini2022]. Wahl et al. 2018 (n=~1,800; KORA + Rotterdam Study) identified B4GALT1 as one of the replicated IgG glycan GWAS loci [^wahl2018]. Landini 2022 (n=2,020; CROATIA-KORCULA n=948 + VIKING n=952) focused on distinguishing IgG-specific loci from loci shared with transferrin glycosylation: in that analysis, ST6GAL1 and MGAT3 emerged as the strongest IgG-specific signals, while FUT8 and FUT6 were shared loci [^landini2022]; B4GALT1 is an established IgG glycan locus replicated across cohorts [^wahl2018] but was not highlighted as uniquely IgG-specific vs transferrin by Landini 2022. The mr-causal-evidence field is set to `partial` because GWAS instruments exist at B4GALT1 but a dedicated Mendelian randomization study testing IgG galactosylation → aging/mortality outcome via B4GALT1 instruments has not been published as of 2026-05-20. #gap/needs-replication

## Therapeutic interest

**B4GALT1 activators** are the mechanistically rational approach to restoring IgG galactosylation (and thereby reducing inflammaging), but no clinical-grade B4GALT1-activating compound exists. The field has developed indirect routes:

- **Estrogen/HRT** — established indirect activator; −0.12 GlycanAge-equivalent years/month in the Mijakovac 2026 sub-cohort (n=19; P=5.76×10⁻⁸) — see [[biomarkers/glycanage-2017]] for quantitative detail.
- **Phytoestrogens** (genistein, daidzein) — upregulate B4galt1 and St6gal1 mRNA in mouse collagen-induced arthritis model, with reduced joint pathology [^du2020]. #gap/needs-human-replication #gap/no-fulltext-access (Du 2020 full text not accessible — claim unverified against primary source)
- **Weight loss / caloric restriction** — significant GlycanAge deceleration at ≥11 kg loss; mechanism uncertain but may include reduced inflammatory suppression of B4GALT1.
- **Direct small-molecule B4GALT1 activators** — open research area; no clinical candidates. #gap/no-mechanism

## Knockout phenotype (mouse)

B4GALT1-null mice exhibit severe growth retardation and die perinatally or in early postnatal life, demonstrating that B4GALT1 is required for viability [^gudelj2018]. The perinatal lethality is attributed to loss of complex-type N-glycan maturation on multiple glycoproteins essential for development; the mammary-gland lactose synthase function is separately lost (dam milk lacks lactose), contributing to neonatal mortality. Note: the specific primary KO publication could not be independently confirmed via PubMed efetch during page seeding (2026-05-20) — the KO phenotype is widely cited in reviews [^gudelj2018] but the original citation (commonly attributed to Asano et al. ~1997) requires independent verification. #gap/needs-replication

## Substrate breadth beyond IgG

B4GALT1 galactosylates many glycoprotein substrates beyond IgG Fc: transferrin, alpha-1-acid glycoprotein (AGP), IgA, IgM, haptoglobin, fibronectin, laminin, and glycolipids. These substrates are not relevant to the IgG Fc glycome aging story but explain why systemic B4GALT1 activation would have pleiotropic effects — an important consideration for any therapeutic strategy.

## Limitations and gaps

- B-cell B4GALT1 enzymatic activity is not measurable in routine peripheral blood; serum IgG glycome is the only widely deployed proxy for B4GALT1 activity output.
- The ESR1 → B4GALT1 transcriptional mechanism is established pharmacologically (Ercan 2017) but not at the molecular-mechanistic level (no promoter mapping, ChIP-seq, or EMSA). #gap/no-mechanism
- The B4GALT1 KO original primary paper requires verification; KO data cited from review. #gap/needs-replication
- No clinical-grade B4GALT1-selective activator exists; this represents a major therapeutic gap if restoring IgG galactosylation is validated as an aging-intervention strategy.
- The SCFA → B4GALT1 axis in humans is unconfirmed. #gap/needs-replication

## See also

- [[igg-fc-glycosylation]] — full enzymatic cascade and aging context
- [[biomarkers/glycanage-2017]] — the IgG glycome biological-age estimator
- [[studies/mijakovac-2026-igg-glycome-mortality]] — 20,045-person mortality validation of GlycanAge
- [[hallmarks/chronic-inflammation]] — inflammaging context; B4GALT1 suppression is a mediator
- [[st6gal1]] — sialyltransferase acting downstream of B4GALT1
- [[fut8]] — core fucosyltransferase; acts at a parallel step
- [[mgat3]] — bisecting GlcNAc transferase; acts at a parallel step

---

## Footnotes

[^gudelj2018]: doi:10.1016/j.cellimm.2018.07.009 · PMID 30107893 · review · Gudelj I, Lauc G, Pezer M · *Cell Immunol* 2018 · comprehensive review of IgG glycome in aging and inflammatory diseases; B4GALT1 age-decline + bidirectional inflammation↔glycan loop; B4GALT1 KO phenotype cited · archive: download failed (status: failed) #gap/no-fulltext-access

[^ercan2017]: doi:10.1172/jci.insight.89703 · PMID 28239652 · observational (n=713 healthy adults) + 4 controlled interventional studies (n=159 subjects total) · Ercan A, Kohrt WM, Cui J, Deane KD et al., Nigrovic PA · *JCI Insight* 2:e89703 (2017) · estrogens are in vivo regulators of IgG galactosylation in both sexes; menopause increases G0F; estradiol + raloxifene reverse this; testosterone prevents G0F rise in men via aromatization · archive: downloaded

[^wahl2018]: doi:10.3389/fimmu.2018.00277 · PMID 29535710 · GWAS (n=~1,800 across KORA + RS cohorts) · Wahl A, van den Akker E, Klaric L et al., Gieger C · *Front Immunol* 9:277 (2018) · replicated GWAS signals for IgG glycan variation at ST6GAL1, B4GALT1, FUT8, MGAT3; novel RUNX3 locus (reduced galactosylation) · archive: status pending

[^landini2022]: doi:10.1038/s41467-022-29189-5 · PMID 35332118 · GWAS (n=2,020; CROATIA-KORCULA n=948 + VIKING n=952) · Landini A, Trbojević-Akmačić I, Wilson JF, Klarić L et al. · *Nat Commun* 2022 · ST6GAL1 and MGAT3 are IgG-specific GWAS loci (not shared with transferrin glycosylation); FUT8/FUT6 are shared loci; paper contextualizes the distinct genetic architectures of IgG vs transferrin glycomes; B4GALT1 replicated as IgG glycan locus across cohorts but not the paper's primary IgG-specific vs shared focus · archive: downloaded

[^du2020]: doi:10.1016/j.intimp.2020.106387 · PMID 32172207 · in-vivo (mouse collagen-induced arthritis) · Du N, Nandakumar KS et al. · *Int Immunopharmacol* 83:106387 (2020) · phytoestrogen treatment (genistein + daidzein) upregulates B4galt1 and St6gal1 mRNA, increases IgG galactosylation, reduces joint pathology via NF-κB suppression · archive: not_oa · #gap/needs-human-replication
