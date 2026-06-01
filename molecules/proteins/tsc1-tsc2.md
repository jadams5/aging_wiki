---
type: protein
aliases: [TSC complex, TSC1/TSC2, hamartin/tuberin, Rhebulator complex, tuberous sclerosis complex proteins]
uniprot: P49815
uniprot-tsc1: Q92574
uniprot-tbc1d7: Q9P0N9
ncbi-gene: 7249
ncbi-gene-tsc1: 7248
hgnc: 12363
hgnc-tsc1: 12362
mouse-ortholog: Tsc2 (TSC2); Tsc1 (TSC1)
ensembl: ENSG00000103197
druggability-tier: 4
caused-by: []
causes: []
key-domains: [Rap-GAP, coiled-coil, TBC-domain]
key-ptms: [TSC2-Ser939-AKT, TSC2-Thr1462-AKT, TSC2-Ser1387-AMPK, TSC2-Thr1271-AMPK, TSC1-Ser487-phospho]
pathways: ["[[mtor]]", "[[ampk]]", "[[insulin-igf1]]", "[[pi3k-akt-pathway]]", "[[dna-damage-response]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[disabled-macroautophagy]]"]
known-interactors: ["[[rheb]]", "[[raptor]]", "[[mtor]]", "[[akt]]", "[[ampk]]", "[[redd1]]", "[[gsk3]]"]
complex-subunits: ["[[tsc1]]", "[[tsc2]]", "[[tbc1d7]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "All six primary sources verified against PDFs. Inoki 2002 (ncb839): AKT sites Ser939/Thr1462 confirmed; 14-3-3 mechanism confirmed. Inoki 2003 (s0092-8674): AMPK sites are T1227/S1345 in rat TSC2 = Thr1271/Ser1387 in human — body text using human numbering is correct per Dibble 2012 pTSC2(S1387) antibody; footnote updated to clarify rat-vs-human numbering. Dibble 2012: TBC1D7 as third core subunit confirmed; 2:2:1 stoichiometry claim not supported — paper reports 1:1 TSC1:TSC2 in TBC1D7 IPs; corrected to heterotrimeric complex with 1:1 TSC1:TSC2 core. Tee 2002: TSC1+TSC2 suppress mTOR-mediated S6K1/4E-BP1 phosphorylation confirmed. Inoki 2003 rheb (gad.1110003): Rheb as direct TSC2 GAP substrate confirmed; rat TSC2 used. Manning 2002: S939/T1462 as primary PI3K/Akt-dependent phosphorylation sites on human tuberin confirmed. GSK3β and RSK1 sites remain #gap/unsourced — not in any of the six verified sources."
---

# TSC1–TSC2 complex (Hamartin–Tuberin)

The **TSC1–TSC2–TBC1D7 heterotrimer** is the master upstream negative regulator of [[mtor|mTORC1]]. Its catalytic subunit, TSC2 (tuberin), functions as a GTPase-activating protein (GAP) for the small GTPase **Rheb**: TSC2 accelerates Rheb's intrinsic GTPase activity, driving Rheb from the GTP-bound (mTORC1-activating) state to the GDP-bound (inactive) state. The complex integrates signals from growth factors ([[insulin-igf1]]/[[pi3k-akt-pathway]]), energy status ([[ampk]]), hypoxia (REDD1), DNA damage, and amino-acid availability, and gates mTORC1 accordingly. Loss-of-function mutations in TSC1 or TSC2 cause **Tuberous Sclerosis Complex** disease — a natural experiment in chronic mTORC1 overactivation that produces benign tumors (hamartomas) across brain, kidney, heart, and skin.

> **Naming note:** This page is the canonical `[[tsc1-tsc2]]` resolution for the heterotrimer. Individual protein pages for TSC1, TSC2, and TBC1D7 can be seeded separately when warranted; wikilinks on both pages should cross-reference each other. The TSC complex is sometimes called the "Rhebulator complex."

## Identity

| Subunit | Common name | UniProt | NCBI Gene | HGNC | MW |
|---|---|---|---|---|---|
| TSC1 | Hamartin | Q92574 | 7248 | 12362 | ~130 kDa (1,164 aa) |
| TSC2 | Tuberin | P49815 | 7249 | 12363 | ~200 kDa (1,807 aa) |
| TBC1D7 | — | Q9P0N9 | 23232 | — | ~34 kDa (293 aa) |

Mouse orthologs: *Tsc1*, *Tsc2* (one-to-one; sequence highly conserved across vertebrates).

## Complex architecture and subunit roles

The TSC complex assembles as a **heterotrimer** with a 1:1 core of TSC1 and TSC2, with TBC1D7 as the third subunit. Label-free quantitative LC-MS/MS of TBC1D7 immunoprecipitates yielded a near 1:1 ratio of TSC1 to TSC2 [^dibble2012]; the overall stoichiometric ratio of TBC1D7 relative to the TSC1–TSC2 core has not been precisely determined in the paper.

- **TSC2 (tuberin)** — catalytic subunit. The C-terminal Rap-GAP domain (residues 1531–1758) stimulates Rheb GTPase activity, converting Rheb-GTP → Rheb-GDP. Critical catalytic residues include Asn1643 and Arg1681; loss-of-function patient mutations at these sites abolish GAP activity without disrupting complex assembly.
- **TSC1 (hamartin)** — structural/stabilizing subunit. TSC1 binds TSC2 via the TSC2 N-terminal region (aa 1–400) and TSC1's C-terminal coiled-coil domain. It prevents proteasomal degradation of TSC2 and recruits TBC1D7 to the complex. TSC1 also acts as a co-chaperone for HSP90, independently of mTOR regulation.
- **TBC1D7** — third core subunit, identified in 2012 [^dibble2012]. Contains a TBC/Rab-GAP domain but the central region of TBC1D7's TBC domain lacks two of three conserved motifs required for canonical Rab-GAP activity, and no Rab-GAP activity toward Rheb is established. Binds TSC1 (can associate with TSC1 even in the absence of TSC2, though the specific domain interface within TSC1 is not defined in this paper); loss of TBC1D7 destabilizes the TSC1–TSC2 interaction and partially derepresses mTORC1. #gap/needs-replication — TBC1D7's precise binding domain on TSC1 and any independent functional outputs remain to be characterized.

## Mechanism: TSC → Rheb → mTORC1

The essential logic:

1. **TSC complex active** → TSC2 GAP domain converts Rheb-GTP to Rheb-GDP → Rheb-GDP cannot activate mTORC1 → **mTORC1 OFF**
2. **TSC complex inhibited or absent** → Rheb-GTP accumulates at the lysosomal membrane → Rheb-GTP allosterically activates the mTOR kinase within mTORC1 → **mTORC1 ON**

Rheb was established as the direct TSC2 GAP substrate in 2003 [^inoki2003rheb]. Prior to this, the TSC complex was known to suppress mTOR signaling [^tee2002] but the intermediate (Rheb) was unresolved.

### Lysosomal localization is context-dependent

Under nutrient stress, the TSC complex recruits to the **lysosomal membrane** in a Rheb-dependent fashion to efficiently inactivate Rheb. Under nutrient-replete conditions, the complex redistributes to the cytosol, and Rheb remains GTP-loaded on the lysosome, where it can activate mTORC1 assembled on the same membrane. #gap/unsourced — this localization model is established in post-2012 literature (Demetriades et al. 2014; Menon et al. 2014) and not directly demonstrated in the six primary sources cited on this page; Dibble 2012 observes partial TSC2 co-localization with LAMP2 (~50%) under serum starvation but does not fully characterize the dynamic redistribution model.

## Upstream regulatory inputs (phosphorylation of TSC2)

TSC2 is a phosphorylation-regulated switch. Multiple kinases phosphorylate distinct TSC2 sites with opposing functional consequences:

### Growth factor / insulin signaling: AKT inhibits TSC2

Downstream of [[insulin-igf1]] → [[pi3k-akt-pathway]] → **AKT** phosphorylates TSC2 at **Ser939** and **Thr1462** (and additionally Ser981) [^inoki2002][^manning2002]:

- Phospho-TSC2 (Ser939/Thr1462) is sequestered away from TSC1 by 14-3-3 proteins — the TSC1–TSC2 complex is disrupted and TSC2 GAP activity is reduced.
- Result: Rheb-GTP accumulates → mTORC1 activates → protein synthesis, cell growth, and anabolic programs proceed.
- This is the principal mechanism by which insulin and IGF-1 activate mTORC1 in growth-responsive tissues.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | AKT, TSC2, Rheb, mTORC1 are all present with conserved phospho-sites |
| Phenotype conserved in humans? | yes | Insulin resistance involves impaired TSC2-mediated mTORC1 gate |
| Replicated in humans? | yes | Phospho-TSC2 detected in human tissue in response to insulin; TSC mutations drive human disease |

### Energy stress: AMPK activates TSC2

Under low energy (high AMP/ATP ratio), **AMPK** phosphorylates TSC2 at **Thr1271** and **Ser1387** (human TSC2 numbering; the original Inoki 2003 paper used rat TSC2 and reports the equivalent sites as T1227 and S1345 — the human positions are confirmed by Dibble 2012 via a pTSC2-S1387 phospho-specific antibody) [^inoki2003energy][^dibble2012]:

- These phosphorylations enhance TSC2 GAP activity (mechanism not fully resolved at atomic level — likely involves conformational stabilization of the active GAP domain). #gap/no-mechanism
- Result: Rheb-GDP accumulates → mTORC1 is suppressed → anabolic programs halt; autophagy is de-repressed.
- This is the **indirect** AMPK→mTORC1 arm. A **direct** arm exists in parallel: AMPK also phosphorylates Raptor (Ser722/Ser792) independently of TSC2 (see [[ampk]] §mTORC1 inhibition for full treatment). The two arms create redundancy.

### Other regulatory kinases

| Kinase | TSC2 site | Effect | Context |
|---|---|---|---|
| GSK3β | Ser1337 / Ser1341 | Activates TSC2 (enhances GAP activity) | Low Wnt signaling; energy stress |
| REDD1-PP2A | Thr1462 (dephosphorylation) | Reactivates TSC2 GAP activity | Hypoxia; glucocorticoids |
| RSK1 (S6K-mediated feedback) | Ser1798 | Inhibits TSC2 (negative feedback loop) | mTORC1 ON state → feedback |
| p53-induced REDD1 | Thr1462 | Reactivates TSC2 | DNA damage |

#gap/unsourced — The GSK3β sites and RSK1/Ser1798 assignments above are well-cited in review literature but individual primary citations for each have not been verified on this page. Verify at next lint pass.

## Role in aging biology

### Convergence point for longevity-relevant signals

The TSC complex is a key integration hub for the major nutrient/growth/stress signaling pathways most consistently linked to aging:

- **IIS (Insulin/IGF-1 signaling)** — canonical longevity-regulating pathway across species; inhibition of IIS (and therefore TSC2 AKT-arm) → mTORC1 inhibition → lifespan extension in worms, flies, and mice
- **AMPK** — activity tends to decline with age in metabolic tissues; its activating input to TSC2 (and hence mTORC1 suppression) partially underlies the longevity benefits of caloric restriction and exercise
- **mTORC1** — the direct downstream target of TSC2; mTORC1 inhibition by rapamycin extends lifespan in multiple species including mice (see [[mtor]] for full treatment)

The TSC complex is therefore positioned as a **molecular node** where the aging-relevant inputs (nutrient excess → AKT↑, energy stress → AMPK↑, hypoxia → REDD1↑, DNA damage → p53→REDD1↑) converge to produce a graded mTORC1 output. In aged organisms, the shift toward constitutive mTORC1 activation can be conceptualized partly as a weakening of TSC complex inhibitory tone. #gap/unsourced — direct quantification of TSC complex activity in aged vs young human tissue is lacking.

### TSC2 polymorphisms and human longevity

TSC2 is **not in GenAge-human** (no entry found as of 2026-05-04) and has no established association with centenarian longevity in GWAS or candidate-gene studies. This contrasts with pathway members upstream (e.g., IGF1R, FOXO3) and downstream (mTOR itself). The lack of a longevity signal may reflect:

- TSC2 loss → constitutive mTORC1 activation → disease (tuberous sclerosis), not longevity. Gain-of-function for TSC2 (i.e., constitutive mTORC1 suppression) is not a tested allele in human populations.
- TSC2 is a haploinsufficient tumor suppressor; strong TSC2 hypermorphs may be negatively selected.

#gap/needs-human-replication — No human cohort data directly tests whether TSC2 variant-level differences in mTORC1 gating associate with lifespan.

### Tuberous Sclerosis Complex disease as a mTORC1 overactivation model

**Tuberous Sclerosis Complex (TSC) disease** is an autosomal dominant multi-system hamartoma syndrome caused by heterozygous loss-of-function mutations in *TSC1* or *TSC2*, with second-hit somatic loss in affected cells [^tee2002]. Key features:

- Benign tumors (hamartomas) in brain (cortical tubers, subependymal giant-cell astrocytomas), kidney (angiomyolipomas), heart (rhabdomyomas), skin (angiofibromas), and lung (LAM in women)
- Epilepsy (from cortical tubers), intellectual disability, autism spectrum disorder
- mTORC1 is constitutively active in TSC-null cells within otherwise heterozygous background
- **Rapamycin and rapalogs (everolimus)** are FDA-approved for TSC-related SEGA, AML, and LAM — confirming that mTORC1 drives the pathology and is clinically actionable
- TSC disease provides a human demonstration that **chronic mTORC1 overactivation** drives a pathological proliferative/growth phenotype — consistent with mTOR's role as a driver of aging-related cellular dysfunction when chronically elevated

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | TSC/Rheb/mTORC1 axis identical |
| Phenotype conserved in humans? | yes | TSC disease is a direct human model of TSC1/2 loss |
| Replicated in humans? | yes (disease model) | Rapamycin efficacy in TSC confirms causal mTORC1 role |

## Pathway membership

- [[mtor]] — TSC complex is the principal upstream negative regulator of mTORC1
- [[ampk]] — AMPK phosphorylates and activates TSC2 (indirect arm of mTOR inhibition)
- [[insulin-igf1]] — AKT phosphorylates and inhibits TSC2 downstream of insulin/IGF-1
- [[pi3k-akt-pathway]] — TSC2 is a canonical AKT substrate; epistasis confirmed in genetic experiments
- [[dna-damage-response]] — DNA damage signals reach mTORC1 partly via p53 → REDD1 → TSC2 reactivation

## Key interactors

- **[[rheb]]** — direct GAP substrate of TSC2; the molecular bridge between TSC complex activity and mTORC1 [^inoki2003rheb]
- **[[akt]]** — inhibits TSC2 via Ser939/Thr1462 phosphorylation in response to growth factors [^inoki2002][^manning2002]
- **[[ampk]]** — activates TSC2 via Thr1271/Ser1387 phosphorylation under energy stress [^inoki2003energy]
- **[[raptor]]** — parallel AMPK substrate; both TSC2 arm and Raptor arm suppress mTORC1 redundantly
- REDD1 (DDIT4) — hypoxia/glucocorticoid-inducible TSC2 activator (mechanism: disrupts 14-3-3:TSC2 interaction, freeing TSC2 to reassociate with TSC1)
- HSP90 — TSC1 acts as co-chaperone; TSC1 loss destabilizes certain kinase clients independent of mTOR regulation

## Pharmacology and intervention relevance

**Rapamycin / rapalogs (everolimus, sirolimus):**

The TSC complex feeds into mTOR, making TSC-pathway modulation equivalent in outcome to mTOR inhibition. Rapamycin acts downstream of TSC, allosterically inhibiting mTORC1 regardless of TSC status. In TSC disease (where TSC2 function is lost), rapamycin compensates by directly inhibiting mTORC1. In aging biology, rapamycin extends lifespan in mice (see [[mtor]]); this is mechanistically consistent with restoring the TSC-complex-mediated mTORC1 brake that may weaken with age.

**Metformin (indirect via AMPK):**

[[metformin]] activates AMPK, which in turn phosphorylates TSC2 at Thr1271/Ser1387, activating the GAP function and suppressing mTORC1. The TSC2 arm is one of metformin's indirect paths to mTORC1 inhibition (alongside the direct Raptor arm via AMPK).

**No TSC2-targeted drugs in clinical use** for aging or longevity. TSC2 lacks an obvious small-molecule binding pocket for activation (it is a GAP, not a kinase). Therapeutic approaches act either upstream (AMPK activators) or downstream (mTOR inhibitors).

## Limitations and gaps

- **#gap/no-mechanism** — The molecular basis by which AMPK-phospho-TSC2 (Thr1271/Ser1387) enhances GAP activity is not resolved at atomic level. No crystal structure shows the active conformation change.
- **#gap/needs-human-replication** — Direct measurement of TSC complex activity (as distinct from inferred mTORC1 activity) in aged vs young human tissue is lacking. Age-associated "mTORC1 hyperactivation" is generally inferred rather than attributed to TSC complex dysfunction specifically.
- **#gap/unsourced** — GSK3β and RSK1 phosphorylation site assignments on TSC2 are standard review literature claims; primary citations not verified on this page.
- **#gap/needs-replication** — TBC1D7's functional contribution to complex GAP activity (beyond structural stabilization of TSC1–TSC2 interaction) remains incompletely characterized.
- TSC2 is absent from GenAge-human and from major human longevity GWAS — the upstream pathway (IIS, mTOR) has stronger human longevity evidence than TSC2 itself.

## Footnotes

[^dibble2012]: doi:10.1016/j.molcel.2012.06.009 · n=N/A · in-vitro (biochemical + cell culture, HEK293, MEF, HeLa, mouse tissues) · mechanism · model: human and mouse cell lines + mouse tissues; identified TBC1D7 as third core subunit via co-IP and LC-MS/MS; LC-MS/MS yielded near 1:1 TSC1:TSC2 stoichiometry in TBC1D7 IPs; TBC1D7 knockdown partially destabilizes TSC1–TSC2 interaction and derepresses mTORC1; also confirmed Akt-mediated pTSC2(S939/T1462) and AMPK-mediated pTSC2(S1387) in the complex context · 603 citations (archive confirmed; OA bronze)

[^inoki2003rheb]: doi:10.1101/gad.1110003 · n=N/A · in-vitro + in-vivo (mammalian cells) · mechanism · model: HEK293 cells; established Rheb as direct TSC2 GAP substrate via in vitro GTPase assays; TSC1/TSC2 complex stimulates Rheb GTP hydrolysis ~30-fold; Rheb-GTP stimulates S6K and 4E-BP1 phosphorylation via mTOR; TSC2 alone (without TSC1) has GAP activity toward Rheb, while TSC1 alone does not; RhebL64 (constitutively active) bypasses TSC inhibition; dominant-negative mTOR blocks Rheb-induced S6K activation; Rheb increases mTOR Ser2448 phosphorylation without affecting Akt · 1,890 citations (archive confirmed; OA diamond)

[^tee2002]: doi:10.1073/pnas.202476899 · n=N/A · in-vitro (cell culture) · mechanism · model: HEK293E + U20S cells; established TSC1+TSC2 (hamartin+tuberin) cooperatively suppress mTOR-mediated S6K1 and 4E-BP1 phosphorylation; TSC2 patient-derived K599M mutant defective in 4E-BP1 repression; effects blocked by rapamycin-resistant S6K1 mutants, implicating mTOR as the TSC target · 825 citations (archive confirmed; OA green)

[^inoki2002]: doi:10.1038/ncb839 · n=N/A · in-vitro (cell culture, IP-kinase assays, 2D phosphopeptide mapping) · mechanism · model: HEK293 cells; AKT directly phosphorylates rat TSC2 at Ser939, Ser1086/Ser1088, Ser1378, and Thr1422 (= human Ser939/Thr1462 as primary sites; also Ser981/Ser993 in TSC2-long isoform); phospho-TSC2 destabilizes TSC2 (promotes ubiquitin-mediated degradation) and disrupts TSC1:TSC2 interaction; phosphomimetic TSC2 mutant is less active in inhibiting S6K; TSC1–TSC2 complex inhibits mTOR-mediated S6K Thr389 and 4E-BP1 phosphorylation · 3,019 citations (archive confirmed; local PDF available)

[^manning2002]: doi:10.1016/s1097-2765(02)00568-3 · n=N/A · in-vitro (cell culture, Scansite bioinformatics + biochemical validation) · mechanism · model: NIH-3T3, HEK293, U20S cells; independently identified human tuberin/TSC2 Ser939 and Thr1462 as the primary PI3K/Akt-dependent phosphorylation sites by Scansite prediction + alanine/phosphomimetic mutagenesis; tuberin S939A/T1462A double mutant blocks growth factor-induced S6K1 activation; Thr1462 constitutively phosphorylated in PTEN-null cells · 1,545 citations (archive confirmed)

[^inoki2003energy]: doi:10.1016/s0092-8674(03)00929-2 · n=N/A · in-vitro + in-vivo (mouse/rat) · mechanism · model: HEK293 + TSC2-null MEFs + LEF epithelial cells; AMPK phosphorylates rat TSC2 at T1227 and S1345 (= human Thr1271 and Ser1387) to activate GAP function and suppress mTOR; T1227A/S1345A double mutant (TSC2-3A) fails to suppress S6K under energy depletion; TSC2-null cells fail to suppress mTOR under energy stress · 3,837 citations (archive confirmed)
