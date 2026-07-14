---
type: process
aliases: [amadoriase, FAOX, FAOD, fructosyl-amino-acid oxidase, fructosamine oxidase, fructosyl peptide oxidase, FPOX]
key-proteins: []
pathways: []
hallmarks: []
selective-variants: []
druggability-tier: 3
caused-by: []
causes: []
literature-checked-through: 2026-07-14
verified: true
verified-date: 2026-07-14
verified-by: claude
verified-scope: "Delanghe 2024 (PMCID:PMC11083825): full text read 2026-07-14; retinal autofluorescence/drusen endpoints confirmed, but mature-adduct substrate claims downgraded because UHPLC-HRMS used free amino-acid/sugar mixtures rather than intact peptides/proteins. Trabosh 2026 main PDF + supplement read end-to-end 2026-07-14; engineered glycine-oxidase-derived CMLase treated as a distinct mature-adduct repair route. Hirokawa 2003: substrate classification corrected from 'free amino acid-specific vs peptide-permissive' to 'alpha-glycated (Class A) vs epsilon-glycated (Class B)' per abstract. Jeong 2002: added 5-intron structure and veA requirement from abstract. All three Hirokawa/Jeong papers verified at abstract level only (#gap/no-fulltext-access). 2026-05-20 extension verified against full PDF: De Decker 2023 (doi:10.3390/ijms24108981) — corrected glycating agent from 'glyceraldehyde' to 'glycolaldehyde dimer'; added statistical significance and AF wavelengths."
---


# Microbial Amadori Deglycation (Amadoriase / FAOX / FAOD)

Amadoriase — also called fructosyl-amino-acid oxidase (FAOX), fructosyl amino oxidase (FAOD), or fructosyl peptide oxidase (FPOX) — is a class of **FAD-dependent flavoenzymes** found in soil fungi and bacteria that catalyze oxidative cleavage of fructosyl-amino-acid bonds (Amadori products). The reaction releases glucosone + the free amino acid + H₂O₂. These enzymes have been used commercially in **HbA1c diagnostics** for decades and, alongside mammalian [[fn3k]], are the canonical enzymatic routes for reversing early-Maillard Amadori products. Engineered [[cmlase]] now supplies a distinct route for repair of the mature monovalent AGE adduct CML.

Unlike [[fn3k]] (phosphorylative, intracellular, vertebrate), FAOX/FAOD enzymes are oxidative, extracellular-compatible (secreted or surface-associated in soil organisms), and have substrate scope that may extend beyond simple fructosyl-lysine to include some mature (non-crosslink) AGE adducts, per Delanghe et al. 2024 (see below). They constitute **Tier 2** of the natural AGE-defense framework alongside FN3K — see [[advanced-glycation-end-products]] § "Three-tier natural defense framework."

## Discovery and microbial source organisms

Amadoriase activity was first described in soil-dwelling microorganisms that subsist on glycated proteins as nitrogen and carbon sources. Characterized source organisms include:
- *Aspergillus fumigatus*, *Aspergillus nidulans* — early cloning and characterization; the *A. nidulans faoA* gene (441 amino acids; inducible by fructosyl-propylamine and fructosyl-lysine) was characterized by Jeong et al. 2002 [^jeong2002].
- *Eupenicillium terrenum* — fructosyl peptide oxidase with high specificity toward α-glycated molecules including fructosyl-Val-His (the HbA1c diagnostic substrate) [^hirokawa2004].
- *Penicillium janthinellum*, *Coniochaeta* — additional sources with varying specificity profiles [^hirokawa2003].
- Various *Corynebacterium* and *Bacillus* strains harbor amadoriase-like activities.

Two functional subclasses were recognized early [^hirokawa2003]:
1. **α-glycated preferring (Class A)** — high specificity toward α-glycated molecules; act on N-terminal fructosyl-amino groups (e.g., fructosyl-Val-His, the HbA1c diagnostic substrate).
2. **ε-glycated preferring (Class B)** — preferentially oxidize ε-glycated molecules; act on fructosyl-lysine side-chain adducts.

Note: the classification from Hirokawa 2003 is α- vs ε-glycation specificity, not "free amino acid-specific vs peptide-permissive" as previously stated. Both classes can be relevant for diagnostic applications; Class A enzymes are the ones used in HbA1c measurement.

## Catalytic mechanism

Amadoriase is a **FAD-dependent oxidase** (not a kinase like FN3K). The reaction is fundamentally oxidative:

**Fructosyl-R-NH₂ + O₂ + H₂O → glucosone + R-NH₂ + H₂O₂**

Where R-NH₂ is the free amino acid (e.g., lysine, valine) or the N-terminus of a glycated peptide. The FAD cofactor accepts electrons from the substrate, then transfers them to O₂, producing H₂O₂.

**Mechanistic difference from FN3K:** FN3K is phosphorylative (ATP + fructosamine → ADP + fructosamine-3-P → 3-DG + free amine + Pi). FAOX/FAOD is oxidative (O₂ → glucosone + H₂O₂). Neither releases the same by-products:
- FN3K by-product: 3-deoxyglucosone (another reactive α-dicarbonyl; requires further detoxification by [[glo1]] pathway metabolons or AKR enzymes).
- FAOX/FAOD by-product: glucosone (less reactive than 3-DG) + **H₂O₂** (cytotoxic; the primary concern for therapeutic deployment).

## Classical substrate scope — diagnostic applications

For the HbA1c assay, the key substrate is **fructosyl-valine** (N-terminal Val of the β-chain, after incubation of blood with a protease to release the dipeptide fructosyl-Val-His). The FAOD enzyme in point-of-care HbA1c analyzers (Tosoh, Roche, and others) cleaves this substrate, and the resulting H₂O₂ is detected colorimetrically via peroxidase + chromogen. This is a mature commercial application with decades of clinical use [^hirokawa2004].

**Substrate scope — classical view:**
- Fructosyl-lysine ✓ (ε-glycated, Class B enzymes)
- Fructosyl-valine ✓ (α-N-terminal glycated — the HbA1c diagnostic substrate; Class A enzymes, particularly *Eupenicillium terrenum* FPOX)
- Fructosyl-phenylalanine ✓ (varies by enzyme subtype)
- Protein-bound fructosyl-lysine: accessible after prior protease treatment for most enzymes; Class A enzymes act on α-N-terminal substrates without protease pre-treatment
- Mature AGEs (CML, CEL, imidazolone, glucosepane, pentosidine): historically considered NOT substrates — but see Delanghe 2024 below.

## Delanghe 2024 — suggestive expanded substrate scope in AMD

Delanghe et al. 2024 (*Int J Mol Sci*) tested FAOD in glycated retinal material and in simple amino-acid/sugar reaction mixtures.[^delanghe2024]

**Model systems:** (a) glycolaldehyde-glycated porcine retinas (ex vivo); (b) human AMD retinal sections (ex vivo).

**Significant endpoints (as reported in abstract):**
- AGE autofluorescence reduced by FAOD treatment in glycolaldehyde-treated porcine retinas (p = 0.001).
- Drusen surface area reduced to 45 ± 21% of control in human AMD retinal sections following FAOD treatment.

**Substrate-scope signal:** In a separate experiment, the authors incubated free lysine or arginine with glucose or fructose for one week, treated the mixtures with FAOD or FN3K, and used untargeted UHPLC-HRMS. Features assigned to **fructosyl-lysine, CML, CEL, and imidazolone** disappeared more strongly after FAOD. This is evidence that FAOD perturbs those assigned small-molecule products, but it is not a direct demonstration of CML removal from an intact peptide or protein, native-lysine restoration, or CML-specific retinal repair.

**Agmatine release:** The authors observed release of agmatine (4-aminobutyl-guanidine) during FAOD treatment, suggesting guanidino-bond cleavage in addition to N-glycoside hydrolysis — a mechanistically unexpected finding.

**Absence of glucosepane/pentosidine data:** The paper did not report FAOD activity against glucosepane or pentosidine. **CML and CEL are monovalent modifications — not bifunctional crosslinks.** The mature crosslinks remain without a demonstrated enzymatic cleavage route as of 2026-07-14.

**Interpretation for the field:** The retinal results support ex-vivo reduction of bulk glycation-associated optical/pathology readouts, while the mixture experiment motivates targeted mechanistic replication. It should not be cited as established protein-bound CML deglycation or as independent replication of CMLase. The clinical translation of FAOD for AMD remains speculative.

#gap/needs-replication — Targeted isotope-dilution MS with authentic standards, intact CML peptides/proteins, product accounting, and native-lysine recovery is needed to validate the Delanghe substrate assignments and reaction mechanism.

## Engineered CMLase — mature-adduct repair, not classical amadoriase

Trabosh et al. 2026 engineered [[cmlase|CMLase (CrGO-897)]] from a *Calidithermus roseus* glycine oxidase rather than from the classical FAOX/FAOD family.[^trabosh2026] The enzyme directly converts protein-bound CML back to lysine and produced concordant H₂O₂/glyoxylate signals. Proteomics showed lower CML at 30/33 mapped CML-BSA sites; hydrolysis/LC-MS/MS showed 45% lower endogenous CML in a single 64-year-old human lens, with corroborating single-donor aorta and skin immunohistochemistry.

This is the more direct mature-adduct result: it uses intact modified proteins, maps site-specific repair, demonstrates restored lysine, and extends to naturally accumulated human-tissue CML. It does not show that native FAOD enzymes share this activity, and it does not cleave a crosslink. The mechanistic taxonomy is therefore `age-adduct-deglycation`, distinct from both classical Amadori reversal and `age-crosslink-cleavage`.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Not applicable (microbial enzyme; human relevance is therapeutic, not endogenous) |
| Phenotype conserved in humans? | Not applicable |
| Replicated in humans? | No — ex-vivo tissue sections only (Delanghe 2024); no in-vivo human data |

## Commercial use and clinical-diagnostics engineering

FAOD has been commercially deployed in HbA1c assays for >20 years. Engineered variants with altered substrate specificity — particularly expanded peptide-substrate acceptance for fructosyl-Val-His on intact hemoglobin after restricted protease pre-treatment — have been developed by multiple groups [^hirokawa2003] [^hirokawa2004]. This engineering precedent is relevant to therapeutic deployment: FAOD is a tractable enzyme for directed evolution to broaden or narrow substrate scope, modify oxidative by-product handling, or reduce immunogenicity.

## Combination therapy with FN3K — De Decker 2023

De Decker et al. 2023 (*Int J Mol Sci*; PMID 37240327) demonstrated that **combining FAOD with the mammalian deglycating enzyme FN3K achieved ~43% autofluorescence reduction in glycolaldehyde-damaged human skin specimens** — outperforming FAOD monotherapy (33%), FN3K monotherapy (31%), and the positive control aminoguanidine (28%) [^dedecker2023faod]. This is the **first published combination-therapy precedent** for FAOD and FN3K acting synergistically in human tissue.

The additive optical effect is compatible with FAOD and FN3K acting on different accessible glycated species through oxidation versus phosphorylation, but the study did not chemically resolve those substrate pools. In particular, the result cannot be assigned to protein-bound CML/CEL removal on the basis of the Delanghe mixture experiment. Combined application covered a larger fraction of the autofluorescent signal, not a demonstrated set of non-overlapping molecular targets.

**Caveats:** The study used an acute glycolaldehyde dimer-induction model (25 mM, 3 h) in young skin (not chronic, physiologically glycated aged skin); combined FAOD + FN3K generates additive by-products (H₂O₂ + 3-deoxyglucosone); cytotoxicity of co-delivered by-products was not assessed. See [[studies/de-decker-2023-fn3k-faod-skin-combination]] for full design and findings.

[^dedecker2023faod]: [[studies/de-decker-2023-fn3k-faod-skin-combination]] · n=19 skin specimens (healthy breast skin, mean age 26 ± 9 years) · in-vitro (ex-vivo glycolaldehyde dimer model; 25 mM, 3 h, 37°C) · model: human breast skin specimens · FAOD alone −33% AF (p<0.0001); FN3K+FAOD −43% AF (p<0.0001); FN3K alone −31% (p<0.0001); aminoguanidine −28% (p<0.001) · AF: excitation 370 nm / emission 390–700 nm · full PDF verified 2026-05-20 (doi:10.3390/ijms24108981)

## Therapeutic limitations

1. **H₂O₂ release:** The catalytic mechanism releases H₂O₂ as a stoichiometric by-product. At therapeutic concentrations, H₂O₂ is cytotoxic and pro-inflammatory. Mitigation strategies include co-delivery of catalase (H₂O₂ → H₂O + ½O₂); engineered FAOD–catalase fusion proteins are a proposed solution. This co-delivery requirement adds complexity and potential immunogenicity.
2. **Immunogenicity:** Fungal/bacterial proteins are antigenic in mammals. Repeated systemic dosing of a fungal enzyme would likely elicit antibody responses that neutralize activity and/or cause hypersensitivity reactions. Humanization or PEGylation would be required.
3. **Tissue penetration:** Protein therapeutics have limited penetration into compacted ECM-rich tissues (arterial adventitia, dermis). Intravitreal injection (for AMD) partially bypasses this — the vitreous and subretinal space are more accessible. Systemic collagen deglycation would require delivery to dense ECM environments.
4. **Substrate scope still excludes crosslinks:** Even after Delanghe 2024, the major structural problem in aging ECM — glucosepane-crosslinked collagen fibrils — appears to be outside the substrate range of all known FAOX/FAOD variants.
5. **Cofactor stability:** FAD cofactor is susceptible to inactivation by oxidative conditions, which are elevated in AGE-rich tissues. Engineered FAOD variants with improved cofactor stability would be required.

## Relation to Revel Pharmaceuticals / Spiegel-lab functional-metagenomics program

Revel Pharmaceuticals' founding premise was that microbe-derived enzymes could be adapted to repair stable AGE damage. The peer-reviewed CMLase program validates that engineering strategy for a **monovalent mature AGE adduct**, not for glucosepane. Classical FAOX/FAOD remains an Amadori-product enzyme class with suggestive but unconfirmed activity against small-molecule CML/CEL assignments in Delanghe 2024. Neither result closes the glucosepane gap.

CMLase strengthens the broader hypothesis that microbial flavoenzyme scaffolds can be evolved toward stable AGE substrates. It does not constitute a glucosepane-cleaving enzyme. See [[age-crosslink-breakers]] § "Natural enzymatic AGE clearance — three-tier defense framework."

## Limitations and gaps

- **Glucosepane and pentosidine crosslinks remain without any known enzymatic cleavage route.** Tier 3 of the natural defense hierarchy is empty.
- **Delanghe 2024 expanded substrate scope needs targeted replication.** CML/CEL ion disappearance came from untargeted analysis of free amino-acid/sugar mixtures, not intact protein repair; the unexpected agmatine result also requires product-balanced mechanistic follow-up.
- **CMLase needs living-tissue validation.** Single-donor homogenate and thin-section target engagement does not establish delivery, safety, durability, or functional rescue in an intact animal.
- **Therapeutic deployment faces H₂O₂ toxicity, immunogenicity, and ECM penetration barriers** — each representing an engineering challenge without validated solutions as of 2026.
- **No in-vivo animal efficacy data for any therapeutic application of FAOD** have been published. AMD is a promising target (intraocular access; drusen as accessible deposits), but the Delanghe 2024 evidence is ex-vivo sections only.
- **Soil-ecology context:** Soil microbes likely catabolize AGE-containing proteins primarily through broad-specificity proteases fragmenting the protein backbone near crosslinks, not through crosslink-specific enzyme chemistry. The functional diversity of AGE-targeting microbial enzymes may be greater than currently characterized. #gap/no-mechanism for full enzyme diversity.

## See also

- [[fn3k]] — mammalian phosphorylative deglycation; the Tier 2 partner
- [[glo1]] — Tier 1 defense; dicarbonyl (methylglyoxal) detoxification
- [[methylglyoxal]] — principal dicarbonyl AGE precursor
- [[advanced-glycation-end-products]] — upstream process; three-tier defense framework
- [[glucosepane]] — principal mature ECM crosslink; NOT cleaved by FAOX/FAOD (as of 2026)
- [[pentosidine]] — secondary fluorescent crosslink; NOT reported to be cleaved by FAOX/FAOD
- [[carboxymethyl-lysine]] — CML; monovalent mature AGE adduct
- [[cmlase]] — engineered glycine-oxidase-derived CML repair enzyme
- [[age-crosslink-breakers]] — intervention class; pharmacological context

## Footnotes

[^jeong2002]: doi:10.1007/s00203-002-0463-x · Jeong HY, Song MH, Back JH, Han DM, Wu X, Monnier V, Jahng KY, Chae KS · *Arch Microbiol* 2002;178(5):344–50 · PMID:12375102 · in-vitro · model: *Aspergillus nidulans faoA* gene characterization · gene encodes 441 aa enzyme with 5 introns; single copy gene; inducible by fructosyl amines; *veA* gene required for full induction; enzyme dispensable for normal *A. nidulans* development/growth · abstract-level via PubMed #gap/no-fulltext-access

[^hirokawa2003]: doi:10.1016/j.bbrc.2003.09.169 · Hirokawa K, Gomi K, Kajiyama N · *Biochem Biophys Res Commun* 2003;311(1):104–11 · PMID:14575701 · in-vitro · molecular cloning and expression of novel fructosyl peptide oxidases; two functional subclasses identified (free amino acid-specific vs peptide-permissive); HbA1c measurement application · abstract-level via PubMed #gap/no-fulltext-access

[^hirokawa2004]: doi:10.1016/j.femsle.2004.04.027 · Hirokawa K, Nakamura K, Kajiyama N · *FEMS Microbiol Lett* 2004;235(1):157–62 · PMID:15158276 · in-vitro · *Eupenicillium terrenum* FPOX; high specificity toward α-glycated fructosyl-Val-His; clinical HbA1c measurement application · abstract-level via PubMed #gap/no-fulltext-access

[^delanghe2024]: doi:10.3390/ijms25094779 · Delanghe JR et al. · *Int J Mol Sci* 2024;25(9):4779 · PMID:38732004 · PMCID:PMC11083825 · ex-vivo retina + in-vitro free amino-acid/sugar mixtures · porcine-retina autofluorescence −43 ± 4% (p=0.001); human drusen surface reduced to 45 ± 21% (p<0.005); untargeted UHPLC-HRMS reported disappearance of ions assigned to fructosyl-lysine/CML/CEL/imidazolone after FAOD, without intact-protein repair or direct lysine-restoration evidence · full PMC text verified 2026-07-14

[^trabosh2026]: [[studies/trabosh-2026-cmlase-deglycation]] · doi:10.1038/s41467-026-75141-2 · in-vitro + ex-vivo human tissue · seven human donors across figures, but headline older lens/aorta/skin outcomes each use one donor and technical/spatial subsamples · engineered CMLase restored lysine from protein-bound CML · no treatment-comparison p-values (secondary B-factor correlation p=0.0343); no living-mammalian or functional test · peer-reviewed
