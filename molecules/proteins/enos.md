---
type: protein
aliases: [endothelial NOS, eNOS, NOS3, NOS-III, constitutive NOS, ecNOS]
uniprot: P29474
ncbi-gene: 4846
hgnc: 7876
ensembl: ENSG00000164867
mouse-ortholog: Nos3
genage-id: null
pathways:
  - "[[no-cgmp-pkg-pathway]]"
  - "[[pi3k-akt-pathway]]"
  - "[[ampk]]"
  - "[[melanocortin-system]]"
hallmarks:
  - "[[altered-intercellular-communication]]"
  - "[[mitochondrial-dysfunction]]"
sens-categories: []
druggability-tier: 2
gtex-aging-correlation: "eNOS expression declines with age in aortic tissue; significant negative correlation with age in GTEx vascular samples. Quantitative Spearman ρ not independently confirmed — #gap/needs-gtex-quantitative-rho"
mr-causal-evidence: partial
caused-by:
  - "[[pi3k-akt-pathway]]"
  - "[[ampk]]"
causes:
  - "[[no-cgmp-pkg-pathway]]"
  - "[[mitochondrial-dysfunction]]"
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Förstermann & Sessa 2011, Förstermann & Li 2010, Laufs 1998, Kim 2009, and Rinne 2013 verified against local PDFs. Closed-access sources (Dimmeler 1999, Nisoli 2005, Lamas 1992, Smith 2003) could not be verified — claims from those papers are tagged #gap/no-fulltext-access below. Canonical-DB identity fields (UniProt P29474, NCBI 4846, HGNC 7876, Ensembl ENSG00000164867) not independently re-queried against databases on this pass."
---

> ⚠️ Partially verified 2026-05-09. Claims sourced from Förstermann & Sessa 2011, Förstermann & Li 2010, Laufs 1998, Kim 2009, and Rinne 2013 have been cross-checked against PDFs and corrected. Claims sourced from closed-access papers (Dimmeler 1999 — Ser1177 mechanism; Nisoli 2005 — CR/eNOS/mtDNA; Lamas 1992 — cloning; Smith 2003 — aged-rat Ser1177 data) could not be verified against full text and are tagged `#gap/no-fulltext-access`.

# eNOS (NOS3)

The canonical vascular endothelial source of nitric oxide (NO). eNOS produces NO from L-arginine + O₂ + NADPH, driving smooth muscle relaxation, inhibiting platelet aggregation, and suppressing vascular inflammation. Its activity is exquisitely tuned by Ca²⁺/calmodulin, competing phosphorylation events at Ser1177 (activating) and Thr495 (inhibitory), and cofactor availability — particularly BH4. Aging is marked by progressive eNOS dysfunction: uncoupling from NO to superoxide production, reduced Ser1177 phosphorylation, and rising levels of the endogenous inhibitor ADMA together drive endothelial dysfunction, arterial stiffness, and hypertension.

## Identity

- **UniProt:** P29474 (NOS3_HUMAN)
- **NCBI Gene:** 4846
- **HGNC symbol:** NOS3; HGNC ID 7876
- **Ensembl:** ENSG00000164867
- **EC number:** 1.14.13.39 (nitric-oxide synthase, NADPH-dependent)
- **Length:** 1,203 amino acids (canonical isoform)
- **Mouse ortholog:** Nos3 (one-to-one ortholog)
- **Naming note:** The pathway page for the downstream NO→cGMP→PKG axis is the implicit stub [[no-cgmp-pkg-pathway]]; the protein page here covers the synthase itself.

## Isoform context

eNOS is one of three NOS isoforms in mammals:

| Isoform | Gene | Regulation | Principal source |
|---|---|---|---|
| nNOS (NOS1) | *NOS1* | Ca²⁺/CaM-constitutive | Neurons, skeletal muscle |
| iNOS (NOS2) | *NOS2* | Transcriptionally induced (cytokines, LPS) | Macrophages, hepatocytes |
| **eNOS (NOS3)** | *NOS3* | **Ca²⁺/CaM-constitutive; PTM-gated** | **Endothelial cells; low-level: platelets, cardiomyocytes** |

## Structure and domains

eNOS is a homodimeric flavohemoprotein. Each 135 kDa monomer contains:

- **N-terminal oxygenase domain** — binds heme, BH4, and L-arginine; site of NO synthesis
- **Calmodulin-binding domain** — Ca²⁺/CaM binding triggers interdomain electron transfer required for catalysis
- **C-terminal reductase domain** — contains FAD and FMN; accepts electrons from NADPH and passes them to the oxygenase domain

**Cofactors** (all required for coupled NO production) [^forstermann2011]:
- Heme b (iron-porphyrin)
- FAD (1 per monomer)
- FMN (1 per monomer)
- (6R)-L-erythro-5,6,7,8-tetrahydrobiopterin (BH4) — stabilizes the dimer and is essential for coupled NO production; during catalysis BH4 is oxidized to a BH3 radical intermediate, which can be recycled back to BH4 or further degraded to BH2 (dihydrobiopterin) under oxidative stress [^forstermann2011]

**Myristoylation + palmitoylation** at the N-terminus anchor eNOS to caveolae in the plasma membrane, where it is held in a partially inhibited state by caveolin-1 interaction and activated by shear stress and receptor signaling [^forstermann2011].

## Regulation: the phospho-switch

Two opposing phosphorylation sites gate eNOS activity [^dimmeler1999]:

| Site | Modifying kinase(s) | Effect |
|---|---|---|
| **Ser1177** (activating) | AKT, AMPK, PKA, CaMKII | Increases Vmax; reduces Ca²⁺ requirement |
| **Thr495** (inhibitory) | PKC | Blocks CaM binding; prevents activation |
| Ser114 | CDK5 | Reduces activity (partial inhibition) |
| Ser633, Ser638 | PKA | Modest activation in some contexts |

**The aging context:** Ser1177 phosphorylation by [[akt]] is the dominant activating signal in quiescent endothelium. Aged vasculature shows ~50% reduction in Akt-dependent eNOS phosphorylation at Ser1177, associated with reduced PI3K→Akt signaling downstream of insulin and shear stress receptors [^smith2003]. #gap/no-fulltext-access — Smith 2003 (doi:10.1042/bst0311447) is closed-access; the ~50% figure and Fischer 344 rat model details could not be verified against the full text.

## Upstream activators

- **[[pi3k-akt-pathway]]** — canonical Ser1177 kinase in response to insulin, VEGF, shear stress, and estrogen
- **[[ampk]]** — phosphorylates Ser1177 under energy stress (caloric restriction, exercise, metformin, AICAR)
- **[[melanocortin-system]] / MC1R** — alpha-MSH → MC1R → eNOS expression (transcriptional + post-translational) + Ser1177 phosphorylation in human endothelial cells (HUVEC and EA.hy926) and mouse aorta [^rinne2013]; the specific intracellular signal transducer downstream of MC1R is not resolved in Rinne 2013 — cAMP/PKA is the canonical MC1R pathway but is not directly demonstrated in that paper; #gap/no-mechanism for the MC1R→Ser1177 intracellular intermediary
- **Shear stress (hemodynamic)** — activates through PI3K/Akt and Ca²⁺ influx
- **Estrogen** — via ERα → PI3K → Akt → Ser1177; explains sex-differential vascular aging patterns

## Downstream effectors

eNOS-derived NO acts principally via **soluble guanylyl cyclase (sGC)** → cGMP → **PKG** → smooth muscle relaxation. See stub [[no-cgmp-pkg-pathway]] for full pathway.

Secondary targets:
- **S-nitrosylation** — protein S-nitrosylation of cysteine thiols (including ryanodine receptors, mitochondrial ETC components)
- **Platelet inhibition** — NO suppresses GPIIb/IIIa activation and degranulation
- **Anti-inflammatory signaling** — NO inhibits NF-κB nuclear translocation, reducing VCAM-1/ICAM-1 expression

## eNOS uncoupling — the vascular aging mechanism

Under normal conditions eNOS is "coupled": electrons flow NADPH → FAD/FMN → heme → O₂ to generate NO. When BH4 is deficient or oxidized, eNOS becomes "uncoupled" and the electrons instead reduce O₂ directly to superoxide (O₂•⁻) rather than NO [^forstermann2011, ^forstermann_li2010].

**Consequences of uncoupling:**
1. Loss of NO bioavailability → endothelial dysfunction
2. Superoxide reacts with any remaining NO → peroxynitrite (ONOO⁻) → further BH4 oxidation → self-amplifying vicious cycle
3. Peroxynitrite further oxidizes BH4 → BH3 radical → BH2, amplifying the uncoupled state [^forstermann2011] #gap/needs-replication — peroxynitrite-mediated Tyr657 nitrosylation of eNOS has been proposed but is not demonstrated in Förstermann 2011; remove if unsourced
4. Superoxide contributes to [[mitochondrial-dysfunction]] via increased mitochondrial oxidative stress

**Primary causes of uncoupling in aging:**
- Oxidative BH4 → BH2 conversion by reactive oxygen species (age-associated increase in ROS)
- Reduced GCH1 (GTP cyclohydrolase I) expression — the rate-limiting enzyme in de novo BH4 synthesis
- L-arginine depletion by elevated arginase activity (arginase II upregulated in aged endothelium)
- ADMA accumulation (see below)

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | eNOS is identical mechanistically in human and mouse vasculature |
| Phenotype conserved in humans? | yes | Endothelial dysfunction + reduced NO bioavailability confirmed in aged humans by flow-mediated dilation studies |
| Replicated in humans? | yes | FMD declines linearly with age; ADMA rises; multiple pharmacological interventions restore eNOS-dependent vasodilation in humans |

## ADMA — endogenous eNOS inhibitor that rises with age

Asymmetric dimethylarginine (ADMA) is a methylated arginine derivative generated by protein arginine methyltransferases (PRMTs) and released by proteolysis. ADMA competes with L-arginine for the eNOS active site and promotes eNOS uncoupling [^forstermann2011].

**Aging relevance:**
- Plasma ADMA rises with age, chronic kidney disease, diabetes, and cardiovascular risk factors
- Elevated ADMA is an independent predictor of cardiovascular events and all-cause mortality in epidemiological cohorts
- ADMA is degraded by dimethylarginine dimethylaminohydrolase (DDAH); DDAH activity declines in oxidative environments, creating a feed-forward loop

#gap/needs-replication — ADMA causal role in human vascular aging independent of CKD requires stronger MR evidence.

## Aging context: eNOS and vascular aging

eNOS-derived NO is the principal brake on vascular aging, acting through four converging mechanisms:

1. **Vasodilation** — prevents hypertension and arterial stiffness; these increase cardiac afterload and accelerate left ventricular hypertrophy
2. **Anti-senescence** — NO suppresses p21 and p16 induction in smooth muscle cells; eNOS-null mice develop accelerated smooth muscle senescence
3. **Mitochondrial biogenesis** — eNOS-derived NO activates cGMP/PKG → PGC-1α → mtDNA replication; caloric restriction induces eNOS expression, and this is required for the CR-associated mitochondrial biogenesis phenotype [^nisoli2005]
4. **Anti-inflammatory** — blocks VCAM-1, ICAM-1, MCP-1; inhibits NF-κB; reduces monocyte adhesion

**Caloric restriction and eNOS.** The Nisoli 2005 *Science* paper demonstrated that eNOS is required for CR-induced mitochondrial biogenesis: *Nos3*-null mice fail to show the mtDNA copy number increase and mitochondrial biogenesis normally induced by 30% CR. This places eNOS upstream of [[pgc-1alpha]] in the CR longevity response [^nisoli2005]. #gap/no-fulltext-access — Nisoli 2005 (doi:10.1126/science.1117728) is closed-access; specific quantitative details (CR %, mtDNA copy number fold-change, n per group) could not be verified.

#gap/needs-human-replication — Whether eNOS induction is mechanistically required for CR-associated metabolic benefits in humans is unknown; the Nisoli result is mouse-only.

## Pathway membership

- [[no-cgmp-pkg-pathway]] — direct downstream effector axis (stub)
- [[pi3k-akt-pathway]] — major upstream activating kinase (AKT1/AKT2 → Ser1177)
- [[ampk]] — secondary activating kinase; energy-sensing convergence point
- [[melanocortin-system]] — MC1R → PKA → Ser1177 arm in endothelial cells

## Key interactors

- **[[akt]]** — phosphorylates Ser1177; primary coupling between growth-factor/shear-stress inputs and NO production
- **Caveolin-1** — holds eNOS in inactive state in caveolae; Ca²⁺/CaM disrupts this interaction
- **[[pgc-1alpha]]** — downstream of eNOS/cGMP/PKG in mitochondrial biogenesis
- **HSP90** (see [[hsp90]]) — chaperone that stabilizes active eNOS and facilitates Akt-eNOS interaction
- **AMPK** (see [[ampk]]) — phosphorylates Ser1177 in response to energy stress, exercise, and metformin

## Pharmacology and druggability

**Druggability tier 2 (aging-context rationale):** Multiple drug classes modulate eNOS, but none is FDA-approved specifically for an aging-vascular indication. The tier reflects high-quality chemical probes with substantial human cardiovascular data, without a dedicated aging-rejuvenation approval:

| Mechanism | Examples | eNOS effect | Clinical status |
|---|---|---|---|
| Statins (HMG-CoA reductase inhibitors) | atorvastatin, rosuvastatin | ↑ eNOS mRNA ~3.6–3.8-fold via mRNA stabilization (Rho GTPase geranylgeranylation inhibition); also ↑ Ser1177 phosphorylation via PI3K/Akt (secondary mechanism per reviews) [^laufs1998][^forstermann_li2010] | FDA-approved (cardiovascular) |
| ACE inhibitors / ARBs | ramipril, losartan | Reduce ADMA; reduce ROS-mediated BH4 oxidation | FDA-approved (cardiovascular) |
| PDE5 inhibitors | sildenafil, tadalafil | Prolong cGMP downstream; bypass eNOS; sensitize NO-cGMP axis | FDA-approved (PAH, ED) |
| BH4 supplementation / sapropterin | sapropterin (Kuvan) | Restores eNOS coupling; reduces uncoupling superoxide | FDA-approved (PKU); vascular use investigational |
| L-arginine supplementation | L-arginine | Competes with ADMA; substrate delivery | Supplement; variable efficacy |

**Statin-eNOS pleiotropic axis:** Statins upregulate eNOS expression ~2–3-fold (simvastatin 1 μmol/L: 3.8-fold mRNA induction; lovastatin 10 μmol/L: 3.6-fold), independent of LDL lowering [^laufs1998]. Laufs 1998 showed this occurs primarily via a **posttranscriptional mechanism**: inhibition of Rho GTPase geranylgeranylation stabilizes eNOS mRNA (half-life extended ~1.6-fold by simvastatin 0.1 μmol/L), without affecting eNOS gene transcription. Separately, the Förstermann & Li 2010 review notes that statins can also activate the PI3K/Akt pathway (via reduced Rho geranylgeranylation) to increase Ser1177 phosphorylation; this is a distinct mechanism from the mRNA-stabilization effect shown in Laufs 1998 [^forstermann_li2010]. This is a key pleiotropic mechanism underlying cardiovascular benefits beyond cholesterol reduction.

**[[bpc-157]] connection (R36):** BPC-157 has been claimed to activate the eNOS-NO axis in rodent models, contributing to its vascular and wound-healing effects. Mechanistic details on [[bpc-157]]; no human RCT evidence for the eNOS claim as of seeding date.

## Genetic variation

- **Glu298Asp (rs1799983)** — common coding polymorphism; may reduce eNOS activity and associate with coronary spasm susceptibility; extensively studied in cardiovascular GWAS but MR effect sizes are modest [UniProt P29474 note]
- **Intron 4 VNTR (4b/4a)** — linked to reduced eNOS expression; associated with hypertension in multiple cohorts
- **Promoter T-786C (rs2070744)** — reduces eNOS transcription; associated with coronary spasm in Japanese population

**MR causal evidence:** `partial` — GWAS instruments for NOS3 variants exist (especially rs1799983), and Mendelian randomization studies using NOS3 instruments have been attempted for blood pressure and coronary artery disease, but effect sizes are small and most hits are in LD with confounders. Robust MR evidence specifically for the age-related endothelial dysfunction phenotype is lacking. #gap/needs-replication

## Limitations and gaps

- `#gap/needs-gtex-quantitative-rho` — GTEx Spearman ρ for NOS3 expression vs age in aortic tissue not confirmed with actual API query; age-decline statement is from published literature, not direct GTEx query.
- `#gap/no-fulltext-access` — Dimmeler 1999 (doi:10.1038/21224, closed-access): Akt → eNOS Ser1177 phosphorylation mechanism claim not verifiable against full text. Förstermann & Sessa 2011 confirms Akt1 is the only kinase proven to regulate eNOS function in vivo (using Akt1-deficient knock-in mice), which is consistent with the wiki claim, but the specific Dimmeler 1999 quantitative details could not be checked.
- `#gap/no-fulltext-access` — Nisoli 2005 (doi:10.1126/science.1117728, closed-access): CR-eNOS-PGC-1α-mtDNA axis claim unverifiable; specific % CR, mtDNA copy number change, and n per group not confirmed.
- `#gap/no-fulltext-access` — Smith 2003 (doi:10.1042/bst0311447, closed-access): ~50% Ser1177 decline in aged aorta, Fischer 344 rat data unverifiable.
- `#gap/no-fulltext-access` — Lamas 1992 (doi:10.1073/pnas.89.14.6348, closed-access): eNOS cloning claims unverifiable against full text.
- `#gap/no-mechanism` — Intracellular intermediary between MC1R activation and eNOS Ser1177 phosphorylation not established in Rinne 2013; cAMP/PKA is the canonical MC1R pathway but was not directly demonstrated for this endpoint.
- `#gap/needs-human-replication` — Nisoli 2005 CR-eNOS-mitochondrial biogenesis axis is mouse data; no equivalent human interventional study confirmed.
- `#gap/needs-replication` — ADMA causal role in vascular aging (vs confounding by CKD/cardiovascular disease) requires stronger Mendelian randomization evidence.
- `#gap/dose-response-unclear` — BH4 supplementation dose needed to restore eNOS coupling in aged human vasculature is not established from RCT data.
- `#gap/no-mechanism` — How exactly aging reduces GCH1 (BH4 synthesis) expression is not fully characterized; whether this is driven by methylation, SASP, or reduced AMPK/SIRT1 signaling is contested.

## Cross-references

- [[bpc-157]] — R36 eNOS-NO axis claim
- [[alpha-msh]] — R35-Stage2 alpha-MSH → MC1R → eNOS Ser1177 (Rinne 2013)
- [[mc1r]] — receptor mediating alpha-MSH → PKA → eNOS arm
- [[akt]] — primary Ser1177 kinase
- [[ampk]] — secondary Ser1177 kinase; energy-sensing convergence
- [[pgc-1alpha]] — downstream of eNOS/NO/cGMP in mitochondrial biogenesis
- [[pi3k-akt-pathway]] — upstream pathway context
- [[melanocortin-system]] — system-level pathway page
- [[no-cgmp-pkg-pathway]] — downstream effector axis (implicit stub)
- [[altered-intercellular-communication]] — hallmark context (paracrine NO)
- [[mitochondrial-dysfunction]] — hallmark context (uncoupling-driven O₂•⁻)

## Footnotes

[^lamas1992]: doi:10.1073/pnas.89.14.6348 · Lamas S et al. · *Proc Natl Acad Sci USA* 1992 · n=N/A · in-vitro (molecular cloning) · model: bovine aortic endothelial cDNA library · first molecular cloning and characterization of eNOS as a distinct constitutive NOS isoform

[^dimmeler1999]: doi:10.1038/21224 · Dimmeler S et al. · *Nature* 1999 · n=N/A · in-vitro + in-vivo (endothelial cells) · model: HUVEC + rat aortic ring · demonstrated Akt phosphorylates eNOS at Ser1177, activating NO production; 2,926 citations

[^forstermann2011]: doi:10.1093/eurheartj/ehr304 · Förstermann U, Sessa WC · *Eur Heart J* 2011 · review · comprehensive treatment of all three NOS isoforms — regulation, cofactors, uncoupling, disease; 3,583 citations

[^forstermann_li2010]: doi:10.1111/j.1476-5381.2010.01196.x · Förstermann U, Li H · *Br J Pharmacol* 2010 · review · n=N/A · therapeutic strategies for restoring eNOS coupling and enhancing expression; 252 citations

[^nisoli2005]: doi:10.1126/science.1117728 · Nisoli E et al. · *Science* 2005 · n=N/A · in-vivo (mouse, *Nos3*-null) · model: WT vs *Nos3*-null C57BL/6 on 30% CR · eNOS required for CR-induced mitochondrial biogenesis (mtDNA copy number, PGC-1α); 900 citations

[^smith2003]: doi:10.1042/bst0311447 · Smith AR et al. · *Biochem Soc Trans* 2003 · in-vivo (rat, aged) · model: young (4 mo) vs aged (24 mo) Fischer 344 rats · ~50% reduction in eNOS Ser1177 phosphorylation in aged aorta; partial restoration by R-α-lipoic acid

[^laufs1998]: doi:10.1161/01.cir.97.12.1129 · Laufs U et al. · *Circulation* 1998 · n=3–4 per condition · in-vitro + in-vivo · model: human saphenous vein endothelial cells (HSVEC; bovine aortic endothelial cells for transfection studies) + rabbit carotid artery (in vivo not primary result) · statins upregulate eNOS mRNA ~3.6–3.8-fold and protein via posttranscriptional mRNA stabilization (Rho GTPase geranylgeranylation inhibition); effect reversed by L-mevalonate; no effect on eNOS gene transcription by nuclear run-on assay; independent of LDL lowering

[^kim2009]: doi:10.1152/japplphysiol.91393.2008 · Kim JH et al. · *J Appl Physiol* 2009 · in-vivo (rat, aged) · model: ~22–24 mo (old) vs ~3 mo (young) male Fischer 344 rats; n=7 per group for most endpoints · primary mechanism: age-associated iNOS upregulation → S-nitrosylation of arginase 1 (SNO-Arg1) → arginase 1 activation → L-arginine depletion → eNOS uncoupling; chronic arginase inhibition with ABH (20 mg/kg/day × 25 days) restored eNOS dimer-to-monomer ratio, reduced O₂•⁻ production, improved endothelial-dependent relaxation (Emax 80.3% vs 64.0% in OC; P<0.05), and reduced pulse wave velocity to young-rat levels; demonstrates iNOS-Arg1-eNOS uncoupling axis rather than simple substrate competition

[^rinne2013]: doi:10.1093/cvr/cvs335 · Rinne P et al. · *Cardiovasc Res* 2013 · in-vivo + in-vitro · model: C57BL/6N mice (10 mo, aged; diet-induced obese); HUVECs and EA.hy926 human endothelial cells · alpha-MSH (NDP-alpha-MSH analog) → MC1R → increased eNOS mRNA expression + Ser1177 phosphorylation in human endothelial cells; improved endothelium-dependent vasorelaxation in mouse aorta; MC1R antagonist MSG606 abolished effects; intracellular intermediary not specified (cAMP/PKA is canonical MC1R pathway but not directly demonstrated)
