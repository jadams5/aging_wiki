---
type: protein
aliases: [FN3K, fructosamine-3-kinase, fructosamine 3-kinase, KIAA0001]
uniprot: Q9H479
ncbi-gene: 64122
hgnc: HGNC:24822
ensembl: ENSG00000167363
mouse-ortholog: Fn3k
pathways: ["[[advanced-glycation-end-products]]"]
hallmarks: []
sens-categories: []
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
literature-checked-through: 2026-05-20
verified: true
verified-date: 2026-05-20
verified-by: claude
verified-scope: "Delpierre 2000, Szwergold 2001, Veiga-da-Cunha 2006, Collard 2003 — cross-checked via PubMed abstracts (PDFs pending download); quantitative figures in body match abstract-level data. Sanghvi 2019 — cross-checked via PMC6693658 full text: corrected MAFK → MAFG; added specific glycated residues (K462, K472, K487, R499, K543, K554, R569) and quantitative glycation levels (~29% glycated, 40-50% peptide cleavage decline, >50% NRF2 destabilization). De Bruyne 2021 — corrected 'isolated aged human lenses' → multi-species model (equine/porcine/murine/human); abstract verified. Delpierre 2000/Szwergold 2001/Veiga-da-Cunha 2006 full PDFs not read — quantitative claims in body consistent with PubMed abstract data. Canonical-DB identity fields (UniProt Q9H479, NCBI Gene 64122, HGNC:24822, Ensembl ENSG00000167363) not independently re-verified against databases. 2026-05-20 extensions verified against full PDFs: (1) De Decker 2023 combination-therapy section — corrected glycating agent from 'glyceraldehyde dimer' (seeder error) to 'glycolaldehyde dimer' (paper explicitly uses 'glycolaldehyde (GA)' in Methods §4.5); added statistical significance (p<0.0001 for enzymatic arms); confirmed AF wavelengths 370/390–700 nm; elasticity values 3.205±0.0733→3.622±0.114 mm confirmed. (2) Matlack 2025 allosteric section — corrected residue numbering to specify both ancFN3KRP numbering (Q179H/M187L/Y253F/Y269F/H293N) and HsFN3K equivalents (H171Q/M179L/F244Y/F260Y/N284H); clarified that F244Y alone is insufficient in HsFN3K; hub specified as F244 (phenylalanine) connecting via F283/Q176 to five substrate-binding residues; PREPRINT status maintained."
---


# FN3K (Fructosamine-3-kinase)

Fructosamine-3-kinase is the only well-characterized mammalian enzyme that catalyzes direct deglycation of early-Maillard Amadori products on intracellular proteins. It represents **Tier 2** of the natural AGE-defense hierarchy (upstream dicarbonyl detoxification by [[glo1]] is Tier 1; enzymatic Amadori-product reversal is Tier 2; no enzyme exists for Tier 3 mature-crosslink cleavage). FN3K's substrate scope is restricted to early-stage fructosyl-lysine on small intracellular proteins — it has **no known activity** on mature AGE crosslinks (glucosepane, pentosidine) or long-lived ECM collagens. See [[advanced-glycation-end-products]] § "Three-tier natural defense framework."

## Identity

- **UniProt:** Q9H479 (FN3K_HUMAN)
- **NCBI Gene:** 64122
- **HGNC:** HGNC:24822
- **Ensembl:** ENSG00000167363
- **Mouse ortholog:** Fn3k (89% sequence identity to human FN3K; one-to-one ortholog [^delpierre2000])
- **Size:** 309 amino acids (canonical isoform); ~35 kDa monomer

## Discovery and characterization

FN3K was first identified, cloned, and heterologously expressed by Delpierre, Rider, Collard, and Van Schaftingen et al. 2000 [^delpierre2000]. The team purified an ATP-dependent 35-kDa protein from human erythrocytes that phosphorylates fructosamine moieties; the enzyme was then cloned from both human and mouse sources (89% sequence identity). The phosphate was mapped to carbon-3 of the 1-deoxyfructose (fructosamine) moiety, establishing the enzyme's name.

Szwergold, Howell, and Beisswenger 2001 independently purified human FN3K to homogeneity, confirmed it as a 35-kDa monomer active across multiple mammalian tissues (erythrocytes, brain, kidney, liver, skeletal muscle), and provided direct evidence for its role in reversing nonenzymatic glycation via conversion of fructoselysine residues to labile phosphorylated products [^szwergold2001]. Their conclusion — "a deglycation system mediated by FN3K may be an important factor in protecting cells from the deleterious effects of nonenzymatic glycation" — remains the consensus framing.

## Catalytic mechanism

FN3K is an ATP-dependent kinase (not a hydrolase or oxidase). The catalytic cycle proceeds in three steps:

1. **Phosphorylation:** FN3K phosphorylates the C3-hydroxyl of the fructosamine moiety on a fructosyl-lysine residue using one equivalent of ATP → ADP.
2. **Spontaneous decomposition:** The resulting **fructosamine-3-phosphate** is chemically unstable under physiological conditions. It undergoes beta-elimination to release the modified protein's free ε-amino group (native lysine restored), plus **3-deoxyglucosone** (3-DG) and inorganic phosphate (Pi).
3. **Net outcome:** The Amadori adduct is removed and the lysine residue is regenerated.

**Critical trade-off:** The released 3-deoxyglucosone is itself a highly reactive α-dicarbonyl and an AGE precursor (forms imidazolones, pyrralines, and other adducts). It must be detoxified downstream by aldo-keto reductases (AKR1B1, AKR1B3) and/or [[advanced-glycation-end-products|other dicarbonyl-detoxification pathways]]. A pharmacological strategy to boost FN3K activity without adequate downstream 3-DG clearance would risk substituting Amadori-product accumulation with 3-DG-product accumulation — a key pharmacological caveat [^delpierre2000].

## Substrate scope and limitations

**Substrates:** fructosyl-ε-lysine (Amadori product on lysine side chain); in vitro also phosphorylates free fructosyl-lysine and fructosamine-containing small peptides. Also phosphorylates psicosamines and ribulosamines (the latter substrates overlap with FN3K-RP, see below) [^delpierre2000] [^szwergold2001].

**Non-substrates (critical limitations):**
- Mature AGEs: CML, CEL, MG-H1, glucosepane, pentosidine — FN3K has NO activity on any characterized mature glycation adduct.
- Long-lived ECM proteins: collagen type I, elastin, laminin — FN3K preferentially acts on small intracellular proteins (erythrocyte hemoglobin, lens crystallins); access to triple-helical collagen in the extracellular matrix is structurally and topographically blocked.
- Fructosyl-α-amino groups (Schiff bases) — FN3K acts on Amadori (fructosyl-lysine/ε-amine) products, not on early Schiff-base intermediates.

**Intracellular specificity:** FN3K is predominantly an intracellular enzyme. The dominant AGE crosslinks that accumulate in aging ECM — glucosepane and pentosidine on collagen — are inaccessible to FN3K. This is the fundamental limitation that positions FN3K as a *supplementary* but not sufficient defense against aging-associated ECM glycation.

## FN3K knockout mice — in-vivo validation

Veiga da-Cunha et al. 2006 generated FN3K-knockout mice and quantified glycation burden across tissues [^veigadacunha2006]. Key findings:
- Hemoglobin-bound fructosamines were **~2.5× higher** in FN3K-KO vs controls.
- Protein glycation elevated 1.8–2.2-fold in erythrocytes and 1.2–1.8-fold in other tissues (kidney, brain, liver).
- Free fructose-ε-lysine in tissues was **5–13× higher** in KO mice (fed state), confirming FN3K is the primary enzyme metabolizing endogenous food-derived and endogenously generated fructosamine.
- **KO mice appeared phenotypically normal** under normoglycemia — elevated intracellular glycation did not produce overt pathology.
- Interpretation: FN3K is the primary deglycation enzyme for intracellular proteins, but its loss under normoglycemia is compensated or tolerated. Accelerated pathology would likely emerge under hyperglycemic stress or with aging-associated rising glucose flux.

#gap/needs-replication — The FN3K-KO phenotype was characterized in a single study. Long-term aging phenotypes and response to hyperglycemic challenge in FN3K-KO mice have not been published.

## Role in NRF2 regulation — cancer-aging connection

Sanghvi et al. 2019 (*Cell*) demonstrated that FN3K deglycation of NRF2 (the master antioxidant transcription factor, encoded by *NFE2L2*) is required for NRF2's oncogenic activity in hepatocellular carcinoma [^sanghvi2019]. In FN3K-deficient cells ~29% of NRF2 is glycated (phenylboronic acid affinity assay); targeted proteomics showed 40–50% reductions in cleavage efficiency for glycated NRF2 peptides spanning residues K462–K487 and R569.

Mechanistically: NRF2 undergoes fructosamine glycation on multiple C-terminal lysine and arginine residues (K462, K472, K487, R499, K543, K554, R569); the N-terminal ETGE and DLG motifs (KEAP1-interaction sites) also show predicted glycation susceptibility. Glycation impairs binding to **MAFG** (the small MAF co-activator; co-IP shows MAFG interaction is "largely abolished upon FN3K knockdown"). In KEAP1-wild-type cells glycated NRF2 is also destabilized (>50% reduction). FN3K deglycates these residues, restoring native NRF2 conformation and full transcriptional and oncogenic activity. The cancer model used was MYC + Keap1-inactivation-driven HCC in C57BL/6/NOD/SCID mice.

This establishes FN3K as a **regulatory deglycation enzyme** beyond its housekeeping function — glycation state of NRF2 and potentially other transcription factors is dynamically controlled by FN3K, with implications for stress responses in aging. The cancer/aging overlap is bidirectional: FN3K inhibition (reducing NRF2-driven antioxidant capacity) could suppress cancer but might increase oxidative damage in aging tissues.

## Therapeutic interest — FN3K activators and AGE-related cataracts

**HbA1c reduction independent of glycemic control:** FN3K activity determines the rate at which glycated hemoglobin is deglycated in erythrocytes. Pharmacological activators of FN3K would reduce HbA1c by accelerating deglycation without altering blood glucose — a mechanistically novel approach to HbA1c normalization. Research-grade activators exist but no clinically validated compound has been developed [^delpierre2000] [^szwergold2001].

**Age-related cataracts:** De Bruyne et al. 2021 (IJMS) demonstrated that FN3K treatment of isolated lens tissue induces time-dependent decreases in AGE-related autofluorescence and macroscopic color restoration [^debruyne2021]. Models used included equine lenses (clear vs. yellowish-brown controls; extension rate >2× that of saline), porcine lens fragments, murine intravitreal injection (reduced AF in vivo; no systemic immune response), and human lens suspensions (dose- and time-dependent AF decrease). Crossover topical treatment in intact human eyes also showed AF decrease with FN3K vs no change with saline. This is the broadest multi-species ex-vivo/in-vivo demonstration of FN3K's potential as a direct therapeutic enzyme. Relevance is limited by the intracellular nature of lens crystallins — the treated tissue is an unusual case where the target substrate (crystallin) is long-lived but intracellular, and where intraocular delivery (avascular lens) bypasses systemic bioavailability constraints.

## FN3K-RP (FN3K-related protein)

A mammalian paralog with 65% sequence identity to FN3K was characterized by Collard et al. 2003 [^collard2003]. Unlike FN3K, FN3K-RP **does not phosphorylate fructoselysine**; instead it acts as a ketosamine-3-kinase with substrate specificity for psicosamines (psicoselysine) and ribulosamines — less abundant non-Maillard sugar-protein adducts. FN3K-RP is complementary to FN3K in covering a broader range of non-Maillard sugar-protein adducts. Brief stub; a dedicated page may be warranted when additional functional data emerge.

## Combination therapy with FAOD — De Decker 2023

De Decker et al. 2023 (*Int J Mol Sci*, PMID 37240327) demonstrated that **combining FN3K with the microbial amadoriase FAOD achieved ~43% autofluorescence reduction in glycolaldehyde dimer-damaged human skin specimens** (25 mM glycolaldehyde dimer; 3 h incubation; 19 specimens, mean age 26 ± 9 years), exceeding FN3K alone (31%), FAOD alone (33%), and the positive-control AGE inhibitor aminoguanidine (28%) [^dedecker2023comb]. All three enzymatic arms reached p<0.0001 vs baseline; aminoguanidine p<0.001. This is the first published demonstration that pairing a mammalian phosphorylative deglycation enzyme with a microbial oxidative deglycation enzyme produces additive deglycation in human tissue.

**Rationale for synergy:** FN3K acts on intracellular fructosyl-lysine substrates (residual cellular protein compartments within the tissue), while FAOD preferentially accesses extracellular and surface-accessible glycated amino groups. Because the two enzymes do not compete for the same substrate pool and operate by entirely different mechanisms (phosphorylation vs. FAD-oxidation), combined application covers a broader fraction of the total glycation burden [^dedecker2023comb].

**Clinical translation caveats:** The study used an acute glycolaldehyde dimer-induction model in young breast skin (n=19; mean age 26 ± 9 years), which does not replicate the chronic glucosepane/pentosidine crosslink composition of naturally aged skin. The combination also generates additive reactive by-products (3-DG from FN3K + H₂O₂ from FAOD), and co-delivery of downstream scavenging capacity (catalase for H₂O₂; AKR enzymes for 3-DG) was not tested. FN3K treatment of hypertrophic scar tissue additionally improved mechanical elongation ~13% at standardized load. See [[studies/de-decker-2023-fn3k-faod-skin-combination]] for full design and findings.

[^dedecker2023comb]: [[studies/de-decker-2023-fn3k-faod-skin-combination]] · n=19 skin specimens (healthy breast skin, mean age 26 ± 9 years) + n=1 hypertrophic scar · in-vitro (ex-vivo glycolaldehyde dimer model; 25 mM, 3 h, 37°C) · model: human breast skin specimens · FN3K+FAOD −43% AF (p<0.0001) vs FN3K alone −31% (p<0.0001) vs FAOD alone −33% (p<0.0001) vs aminoguanidine −28% (p<0.001) · AF: excitation 370 nm / emission 390–700 nm broadband · full PDF verified 2026-05-20 (doi:10.3390/ijms24108981)

## Sequence, structure, and evolutionary context — allosteric substrate specificity

FN3K belongs to the **pfkB/ribokinase superfamily** — a structural family of ATP-dependent sugar kinases. The enzyme fold is vertebrate-specific; no convincing bacterial or archaeal FN3K homolog has been identified.

**Contrast with microbial amadoriases:** Fungal and bacterial **FAOX/FAOD** enzymes (amadoriases; see [[microbial-amadori-deglycation]]) accomplish a functionally parallel result — removal of Amadori products — via an entirely different mechanism: FAD-dependent oxidation rather than phosphorylation, releasing glucosone + H₂O₂ instead of 3-deoxyglucosone + Pi. The two enzyme families are evolutionarily unrelated but convergently catalyze the same net transformation.

**Allosteric basis for substrate specificity (Matlack 2025; preprint):** Matlack et al. 2025 (bioRxiv; PMID 40766467; **not yet peer-reviewed**) used ancestral protein reconstruction (APR) to investigate how FN3K and its paralog KT3K (FN3K-RP; 64% sequence identity) achieve distinct substrate specificities. The key finding: **active-site residues are conserved between FN3K and KT3K and do not determine selectivity**. Instead, specificity is controlled by **five peripheral residues** that are reported in two numbering systems: in ancFN3KRP (gain-of-function) numbering: Q179H/M187L/Y253F/Y269F/H293N; in **human FN3K (HsFN3K) numbering**: H171Q/M179L/**F244Y**/F260Y/N284H. These residues communicate long-range to the substrate-binding pocket via an allosteric network, with **F244 (phenylalanine-244) acting as the central allosteric hub** [^matlack2025allos]. Importantly, F244Y alone in HsFN3K is insufficient to alter specificity — the full five-mutation combination is required. FN3K phosphorylates both fructosamines and ribulosamines; KT3K phosphorylates only ribulosamines. By resurrecting four ancestral kinases (ancFN3KRP pre-duplication, ancKT3K₁, ancKT3K₂, ancFN3K) that differ by only 12 amino acids, the authors confirmed that substrate selectivity diverged through accumulation of these five peripheral mutations.

**Drug-development implication:** ATP-competitive or substrate-mimetic inhibitors will likely be non-selective between FN3K and KT3K (due to active-site conservation), whereas allosteric modulators targeting the peripheral specificity network could achieve enzyme-selective activation or inhibition [^matlack2025allos]. This changes the structure of FN3K activator drug discovery programs — allosteric screen design is now preferable to active-site competitive screen design.

#gap/needs-peer-review — Matlack 2025 allosteric mechanism claims require peer review and independent replication; preprint findings should be treated as provisional.

[^matlack2025allos]: [[studies/matlack-2025-fn3k-allostery]] · n=null (in-vitro enzyme biochemistry; recombinant proteins) · in-vitro · model: human FN3K/KT3K + four ancestral reconstructed kinases (ancFN3KRP, ancKT3K¹, ancKT3K², ancFN3K); luciferase-based kinase assay (Kinase-Glo; glycated lysozyme + DMF fructosamine mimic substrates) + DSF + PSN (webPSN, 3 Å cutoff) · five peripheral residues (not active-site) mediate specificity via allostery: ancFN3KRP→ancFN3K direction Q179H/M187L/Y253F/Y269F/H293N; HsFN3K equivalents H171Q/M179L/F244Y/F260Y/N284H; F244 (HsFN3K) = allosteric hub connecting to 5 of 9 substrate-binding residues via F283/Q176; active-site residues conserved across FN3K + KT3K · **PREPRINT (bioRxiv 2025-07-30); not peer-reviewed** · full PDF verified 2026-05-20 (doi:10.1101/2025.07.30.667714) #gap/needs-peer-review

## Limitations and gaps

- **No mature AGE deglycation by any known mammalian enzyme.** FN3K is the closest existing biology to an AGE-reversal enzyme in mammals and is insufficient for ECM glucosepane/pentosidine. #gap/no-mechanism for human ECM AGE clearance.
- **Whether FN3K activity varies across long-lived species** (naked mole rat, bowhead whale, Greenland shark) is unstudied. If long-lived species have higher FN3K activity — or more effective downstream 3-DG clearance — it would suggest FN3K as an evolution-validated longevity target. #gap/needs-replication.
- **FN3K activator pharmacology is undeveloped.** Research-grade small-molecule activators exist in academic literature but no clinical candidate has been disclosed. druggability-tier: 3 (predicted tractable, no validated probe compound meeting clinical standards).
- **The 3-DG trade-off** is an under-studied safety concern for any FN3K-boosting strategy; downstream 3-DG clearance capacity needs quantification. #gap/no-mechanism for in-vivo safety assessment.

## See also

- [[advanced-glycation-end-products]] — upstream process biology; AGE formation and the three-tier defense framework
- [[microbial-amadori-deglycation]] — FAOX/FAOD family; functionally convergent but mechanistically distinct
- [[glo1]] — Tier 1 defense; dicarbonyl detoxification
- [[methylglyoxal]] — principal dicarbonyl AGE precursor; substrate of [[glo1]]
- [[glucosepane]] — dominant mature ECM crosslink; NOT a FN3K substrate
- [[pentosidine]] — secondary fluorescent crosslink; NOT a FN3K substrate
- [[age-crosslink-breakers]] — intervention class page; pharmacological context for AGE clearance

## Footnotes

[^delpierre2000]: doi:10.2337/diabetes.49.10.1627 · Delpierre G, Rider MH, Collard F, Stroobant V, Vanstapel F, Santos H, Van Schaftingen E · *Diabetes* 2000;49(10):1627–34 · PMID:11016445 · in-vitro + heterologous expression · model: human + mouse cDNA; purified enzyme from human erythrocytes · identified and cloned mammalian FN3K; mapped C3 phosphorylation; cloned human + mouse forms (89% identity); proposed deglycation function · archive: OA pending download (PMID:11016445)

[^szwergold2001]: doi:10.2337/diabetes.50.9.2139 · Szwergold BS, Howell S, Beisswenger PJ · *Diabetes* 2001;50(9):2139–47 · PMID:11522682 · in-vitro · model: human tissues; purified enzyme to homogeneity · confirmed 35-kDa monomer; substrate specificity for fructosyl-lysine; evidence for in-vivo activity · archive: OA pending download (PMID:11522682)

[^veigadacunha2006]: doi:10.1042/BJ20060684 · Veiga da-Cunha M, Jacquemin P, Delpierre G, Godfraind C, Théate I, Vertommen D, Clotman F, Lemaigre F, Devuyst O, Van Schaftingen E · *Biochem J* 2006;399(2):257–64 · PMID:16819943 · in-vivo · model: FN3K-knockout mice (normoglycemic) · hemoglobin-bound fructosamines ~2.5× higher in KO; intracellular protein glycation 1.8–2.2× elevated in erythrocytes, 1.2–1.8× in other tissues; free fructose-ε-lysine in tissues 5–13× elevated in KO; KO mice phenotypically normal under normoglycemia · archive: OA bronze; download pending

[^sanghvi2019]: doi:10.1016/j.cell.2019.07.031 · Sanghvi VR, Leibold J, Mina M, et al. · *Cell* 2019;178(4):807–819.e21 · PMID:31398338 · PMC:PMC6693658 · in-vivo (MYC+Keap1-KO HCC in C57BL/6/NOD/SCID mice) + in-vitro · ~29% NRF2 glycated in FN3K-KD cells (phenylboronic acid affinity); 40–50% reduction in peptide cleavage efficiency at K462-K472/K487-R499/R569-R587; MAFG binding abolished by FN3K knockdown; glycated NRF2 destabilized (>50%) in KEAP1-WT context; HCC development requires FN3K in vivo · archive: OA via PMC (PMC6693658); download pending

[^debruyne2021]: doi:10.3390/ijms22083841 · De Bruyne S, van Schie L, Himpe J, et al. · *Int J Mol Sci* 2021;22(8):3841 · PMID:33917258 · ex-vivo + in-vivo · model: equine, porcine, murine (intravitreal injection), and human lens tissue · time-dependent AGE-related AF decreases in all models; macroscopic color restoration and extension rate >2× controls in equine lenses; murine intravitreal injection reduced AF with no systemic immune response; human lens suspensions: dose- and time-dependent AF decrease · archive: OA gold; download pending

[^collard2003]: doi:10.2337/diabetes.52.12.2888 · Collard F, Delpierre G, Stroobant V, Matthijs G, Van Schaftingen E · *Diabetes* 2003;52(12):2888–95 · PMID:14633848 · in-vitro · characterized FN3K-RP as a ketosamine-3-kinase acting on psicosamines/ribulosamines; does NOT phosphorylate fructoselysine · archive: status pending
