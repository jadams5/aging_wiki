---
type: protein
aliases: [GnT-III, GlcNAc-T III, N-acetylglucosaminyltransferase III, GGNT3, beta-1,4-mannosyl-glycoprotein 4-beta-N-acetylglucosaminyltransferase]
uniprot: Q09327
ncbi-gene: 4248
hgnc: 7046
ensembl: ENSG00000128268
mouse-ortholog: Mgat3
pathways: []
hallmarks: []
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
verified-scope: "HGNC ID corrected from seeder-brief's 7044 to 7046 (UniProt REST API confirmed). Ruhaak 2010 (n=1,967; decreased bisecting GlcNAc glycoforms associated with longevity in <60yo; bisecting GlcNAc INCREASES with age in galactosylated glycoforms) verified against PDF. Landini 2022 (n=2,020; MGAT3 and ST6GAL1 as IgG-specific GWAS loci; FUT8/FUT6 shared) verified against PDF. Shields 2002 (mutual exclusion/ADCC context) verified against PDF. Stanley 2002 (KO mild phenotype + DEN liver tumor retardation) not verified — not_oa; claim tagged accordingly. Identity fields confirmed via UniProt REST API."
---

# MGAT3 (N-acetylglucosaminyltransferase III, GnT-III)

MGAT3 catalyzes the addition of a **bisecting N-acetylglucosamine (GlcNAc)** — a single GlcNAc residue in β1,4 linkage to the central mannose of biantennary N-glycans. The bisecting GlcNAc is a **branching modifier, not a new antenna**: it does not extend a chain but instead sterically inhibits subsequent glycan modifications, most importantly [[fut8]]-mediated core fucosylation and [[mgat3|MGAT5]]-mediated triantennary branching. Among the four core IgG Fc glycosyltransferases, MGAT3 carries one of the two strongest GWAS signals for IgG glycan variation (alongside [[st6gal1]]) and bisecting GlcNAc rises modestly with age — but it is the **least aging-prominent** of the four because the functional consequences of bisecting GlcNAc addition are smaller and less consistent than the galactosylation and sialylation shifts.

**HGNC correction:** The seeder brief listed HGNC 7044; the verified value from UniProt REST API is **HGNC 7046**. Frontmatter has been corrected.

## Identity

- **UniProt:** Q09327 (MGAT3_HUMAN) — confirmed via UniProt REST API 2026-05-20
- **NCBI Gene:** 4248
- **HGNC:** 7046 (verified; brief listed 7044 — corrected)
- **Ensembl:** ENSG00000128268
- **Mouse ortholog:** Mgat3
- **Length:** 533 amino acids (canonical isoform)
- **EC number:** 2.4.1.144

## Enzymology

MGAT3 is a type II single-pass transmembrane glycoprotein localized to the Golgi apparatus (trans cisternae), colocalizing with [[st6gal1]] and [[b4galt1]] in cis-Golgi regions. It catalyzes:

```
UDP-GlcNAc + GlcNAc₂Man₃GlcNAc₂-Asn → 
  bisecting-GlcNAc(β1,4)-Man(GlcNAc₂Man₃GlcNAc₂)-Asn + UDP
```

The bisecting GlcNAc is added specifically to the **β-mannose** of the trimannosyl core — the central mannose — in β1,4 linkage. Key features:

**Steric consequences of the bisecting GlcNAc:**
1. **Inhibits FUT8-mediated core fucosylation.** The bisecting GlcNAc occupies a position that clashes with FUT8's catalytic mechanism, rendering the same glycan inaccessible for core fucosylation. Therefore bisected and fucosylated glycoforms are mutually exclusive at the individual-glycan level (see [[igg-fc-glycosylation]] structural table).
2. **Inhibits MGAT5-mediated branching.** MGAT5 would add a β1,6-GlcNAc to the α1,6-linked Man arm, creating a triantennary (three-antenna) glycan; bisecting GlcNAc sterically prevents this. The MGAT3 vs MGAT5 competition thus determines whether IgG N-glycans become bisected biantennary or multi-antennary branched — with major consequences for lectin binding (galectins, selectins) and cell adhesion.
3. **Alters Fc conformation slightly**, modestly enhancing FcγRIIIA binding (independent of the fucosylation competition effect).

The UniProt annotation notes that MGAT3 "alters not only the composition, but also the conformation of the N-glycan."

## Position in the IgG Fc glycosylation cascade

MGAT3 acts in parallel with (and competitively with) [[fut8]] at Step 3 of the [[igg-fc-glycosylation|Golgi processing cascade]]:

| Step | Enzyme | Product |
|---|---|---|
| 1–2 | MGAT1, MGAT2 | Biantennary complex-type scaffold |
| **3a** | **[[fut8]]** | **Core fucosylation → G0F scaffold (blocks bisecting GlcNAc)** |
| **3b** | **[[mgat3]]** | **Bisecting GlcNAc → blocks FUT8 (mutually exclusive)** |
| 4 | [[b4galt1]] | Galactosylation |
| 5 | [[st6gal1]] | Sialylation |

The balance between Steps 3a and 3b determines the bisected (G0B, G0FB, G1FB, G2FB) vs fully fucosylated fraction of IgG.

## Aging context

Bisecting GlcNAc abundance in serum IgG **rises modestly with age** in population studies [^ruhaak2010][^gudelj2018]. The Leiden Longevity Study (n=1,967) found that **decreased** levels of bisecting GlcNAc-containing agalactosylated glycoforms were associated with longevity features in participants under 60, with the association weaker in those over 60 [^ruhaak2010]. The biological interpretation is complex: bisecting GlcNAc partly inhibits core fucosylation (→ slight ADCC enhancement) but also alters Fc conformation and lectin-pathway interactions. The net effect on the pro-inflammatory IgG phenotype is smaller and less directionally clear than the G0 rise or sialylation loss.

MGAT3 is not regulated by estrogen and does not show the same inflammation-driven feedback loop as B4GALT1 and ST6GAL1. The `hallmarks:` field is therefore left empty — bisecting GlcNAc changes are an aging-associated glycome feature but not a primary inflammaging driver.

## GWAS — the strongest IgG-specific signal

Despite its modest functional importance in aging biology, MGAT3 carries one of the **two strongest GWAS signals** for IgG glycan composition (alongside [[st6gal1]]) in both the Wahl 2018 and Landini 2022 studies [^wahl2018][^landini2022]. Specifically, Landini 2022 demonstrates that MGAT3 (and ST6GAL1) are IgG-specific loci — they associate with IgG glycan variation but not transferrin glycan variation — confirming that substrate-specific genetic regulatory programs operate in the B cell / plasma cell secretory pathway for IgG [^landini2022].

The mr-causal-evidence field is `partial`: GWAS instruments at MGAT3 exist, but a dedicated Mendelian randomization study testing bisecting GlcNAc → aging/inflammatory outcomes via MGAT3 instruments has not been published as of 2026-05-20. #gap/needs-replication

## Functional consequences of bisecting GlcNAc on effector function

The FcγRIIIA binding enhancement from bisecting GlcNAc is mechanistically linked to its inhibition of core fucosylation: glycans that cannot be fucosylated (because bisecting GlcNAc blocks FUT8) have a higher proportion of the afucosylated form, which binds FcγRIIIA more tightly [^shields2002]. This was one basis for the early MGAT3-overexpression approach to engineering enhanced-ADCC antibodies — a strategy now largely superseded by FUT8 KO cell lines (see [[fut8]]). Stanley 2002 demonstrated MGAT3 overexpression enhances IgG effector functions in cell-based models [^stanley2002].

## Cancer biology — anti-metastatic context

MGAT3 has been studied extensively in cancer biology outside the IgG context. Bisecting GlcNAc inhibits MGAT5-mediated polylactosamino branching, which is associated with cancer-cell adhesion and metastasis (selectin-mediated extravasation). Multiple studies have found MGAT3 overexpression suppresses metastatic potential in cancer cell lines, consistent with its competitive inhibition of pro-metastatic MGAT5-branched glycan epitopes. Stanley 2002 in mice documented that MGAT3 overexpression **retards liver tumor progression** in chemically-induced models, while MGAT3 knockout did not show this protection [^stanley2002]. This is an important biological context — MGAT3 is simultaneously (i) a modest pro-inflammatory modifier of IgG Fc (via bisecting GlcNAc → slight FcγRIII enhancement in the aging context) and (ii) an anti-metastatic modifier in cancer contexts (via MGAT5 competition). These are not contradictory — they reflect different substrates and pathways. Brief mention only; this page focuses on the IgG-glycome-aging context.

## Knockout phenotype (mouse)

Mgat3 KO mice (Stanley 2002; examining both KO and overexpression in C57BL6 background) are:
- **Viable and fertile** — no gross developmental phenotype
- Show **retarded progression** of diethylnitrosamine (DEN)-induced liver tumors — suggesting MGAT3's bisecting GlcNAc addition normally supports (or is neutral on) liver tumor progression and its loss is partially protective [^stanley2002]
- No immune phenotype specifically reported for the KO in this study

The mild KO phenotype (compare to the severe FUT8 and B4GALT1 KOs) reflects bisecting GlcNAc's role as a modifier of glycan composition rather than an essential core structural element.

## Pharmacological modulation

No clinical-grade MGAT3 modulator exists. Research-stage approaches include:
- Competitive UDP-GlcNAc analog inhibitors (not advanced to clinical use)
- Transfection-based MGAT3 overexpression in mAb-producing cell lines for enhanced ADCC (historical strategy; now largely superseded by FUT8 KO)

Druggability tier is set to **3** (research probes; therapeutic cell-line engineering demonstrated; no approved systemic MGAT3 modulator for any indication).

## Limitations and gaps

- The functional significance of the modest bisecting GlcNAc age-increase for IgG Fc effector biology in aging is not well-characterized relative to the galactosylation and sialylation shifts. #gap/needs-replication
- Whether MGAT3 expression in B cells changes with age (and in what direction) has not been measured in dedicated studies; the serum glycome trajectory is inferred from population glycomics, not enzyme activity measurements. #gap/needs-replication
- The molecular determinants of MGAT3 vs FUT8 competition in plasma cells (i.e., what sets the bisected fraction) are not known in vivo. #gap/no-mechanism
- HGNC ID discrepancy (brief listed 7044; verified value 7046) has been corrected in this page.

## See also

- [[igg-fc-glycosylation]] — full IgG Fc N-glycosylation cascade; bisecting GlcNAc ↔ fucosylation mutual exclusion
- [[fut8]] — core fucosyltransferase; directly competed by MGAT3
- [[b4galt1]] — galactosyltransferase; acts downstream; primary aging-relevant enzyme
- [[st6gal1]] — sialyltransferase; acts downstream; strongest co-GWAS locus with MGAT3
- [[biomarkers/glycanage-2017]] — GlycanAge; primarily driven by galactosylation, not bisecting GlcNAc
- [[studies/mijakovac-2026-igg-glycome-mortality]] — mortality validation of IgG glycome biomarker

---

## Footnotes

[^landini2022]: doi:10.1038/s41467-022-29189-5 · PMID 35332118 · GWAS (n=2,020; CROATIA KORCULA n=948 + VIKING n=952) · Landini A, Trbojević-Akmačić I, Wilson JF, Klarić L et al. · *Nat Commun* 2022 · MGAT3 and ST6GAL1 are IgG-specific GWAS loci (strongest signals for IgG glycan variation); FUT8/FUT6 shared with transferrin; distinct genetic architectures for IgG vs transferrin glycome · archive: downloaded

[^wahl2018]: doi:10.3389/fimmu.2018.00277 · PMID 29535710 · GWAS (~1,800 subjects; KORA + RS) · Wahl A, van den Akker E, Klaric L et al., Gieger C · *Front Immunol* 9:277 (2018) · replicated GWAS signals for IgG glycan variation at MGAT3, ST6GAL1, B4GALT1, FUT8; novel RUNX3 locus · archive: status pending

[^stanley2002]: doi:10.1016/s0304-4165(02)00404-x · PMID 12417419 · in-vivo (MGAT3 KO and overexpression mice) · Stanley P · *Biochim Biophys Acta* 1573:363–368 (2002) · bisecting GlcNAc enhances IgG effector functions; MGAT3 KO mice viable + fertile; MGAT3 KO shows retarded DEN-induced liver tumor progression; overexpression enhances IgG ADCC · archive: not_oa #gap/no-fulltext-access

[^ruhaak2010]: doi:10.1371/journal.pone.0012566 · PMID 20830288 · observational (n=1,967; Leiden Longevity Study — 1,287 offspring + 680 partners of nonagenarian sibling pairs) · Ruhaak LR, Uh HW, Beekman M et al. · *PLoS One* 5:e12566 (2010) · decreased bisecting GlcNAc-containing agalactosylated glycoforms associated with familial longevity in participants <60 years; bisecting GlcNAc increases with age in galactosylated glycoforms; galactosylation decreases with age; sex differences documented · archive: downloaded

[^gudelj2018]: doi:10.1016/j.cellimm.2018.07.009 · PMID 30107893 · review · Gudelj I, Lauc G, Pezer M · *Cell Immunol* 2018 · IgG glycome aging review; bisecting GlcNAc modest age-increase context · archive: download failed #gap/no-fulltext-access

[^shields2002]: doi:10.1074/jbc.m202069200 · in-vitro (Lec13 CHO cells + binding/ADCC assays) · Shields RL, Lai J, Keck R et al., Presta LG · *J Biol Chem* 277:26733–26740 (2002) · defucosylation enhances FcγRIIIA binding ~50-fold; mechanistic basis for MGAT3/FUT8 competition context · archive: downloaded
