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
literature-checked-through: 2026-05-20
verified: true
verified-date: 2026-05-20
verified-by: claude
verified-scope: "Delanghe 2024 (PMID:38732004): key quantitative claims confirmed via two independent PubMed abstract queries — p=0.001 autofluorescence reduction; 45±21% drusen reduction; substrate scope fructosyl-Lys/CML/CEL/imidazolone; agmatine released; glucosepane/pentosidine not tested (confirmed absent from abstract). n-values per experiment and full mechanistic details not confirmed (full PDF not read). Hirokawa 2003: substrate classification corrected from 'free amino acid-specific vs peptide-permissive' to 'alpha-glycated (Class A) vs epsilon-glycated (Class B)' per abstract. Jeong 2002: added 5-intron structure and veA requirement from abstract. All three Hirokawa/Jeong papers verified at abstract level only (#gap/no-fulltext-access). Full PDFs pending download. 2026-05-20 extension verified against full PDF: De Decker 2023 (doi:10.3390/ijms24108981) — corrected glycating agent from 'glyceraldehyde' to 'glycolaldehyde dimer' in the caveats text (paper uses 'glycolaldehyde (GA)' throughout; 'glyceraldehyde' was a seeder error); added statistical significance (p<0.0001) and AF wavelengths (370/390–700 nm) to footnote."
---


# Microbial Amadori Deglycation (Amadoriase / FAOX / FAOD)

Amadoriase — also called fructosyl-amino-acid oxidase (FAOX), fructosyl amino oxidase (FAOD), or fructosyl peptide oxidase (FPOX) — is a class of **FAD-dependent flavoenzymes** found in soil fungi and bacteria that catalyze oxidative cleavage of fructosyl-amino-acid bonds (Amadori products). The reaction releases glucosone + the free amino acid + H₂O₂. These enzymes have been used commercially in **HbA1c diagnostics** for decades and represent, alongside mammalian [[fn3k]], the only known enzymatic routes for deglycation — defined here as reversal of early-Maillard Amadori products.

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

## Verhoekx 2024 / Delanghe 2024 — expanded substrate scope in AMD

Delanghe et al. 2024 (*Int J Mol Sci*) is the highest-impact recent paper in this area and substantially expands the known substrate scope of FAOD [^delanghe2024]. The key findings from the abstract (full PDF verification pending):

**Model systems:** (a) glycolaldehyde-glycated porcine retinas (ex vivo); (b) human AMD retinal sections (ex vivo).

**Significant endpoints (as reported in abstract):**
- AGE autofluorescence reduced by FAOD treatment in glycolaldehyde-treated porcine retinas (p = 0.001).
- Drusen surface area reduced to 45 ± 21% of control in human AMD retinal sections following FAOD treatment.

**Substrate scope finding:** Mass spectrometry revealed FAOD cleaves a broader substrate panel than previously established, including **fructosyl-lysine, CML (carboxymethyllysine), CEL (carboxyethyllysine), and imidazolone** — adducts beyond simple Amadori products. This is the first report of a natural enzyme acting on CML and CEL in tissue.

**Agmatine release:** The authors observed release of agmatine (4-aminobutyl-guanidine) during FAOD treatment, suggesting guanidino-bond cleavage in addition to N-glycoside hydrolysis — a mechanistically unexpected finding.

**Absence of glucosepane/pentosidine data:** The paper did not report FAOD activity against glucosepane or pentosidine. **CML and CEL are monovalent lysine/arginine modifications — NOT bifunctional crosslinks.** The mature crosslinks (glucosepane, pentosidine) remain without any known natural enzyme capable of cleavage as of 2026-05-20.

**Interpretation for the field:** The Delanghe 2024 result is significant because it establishes that a natural enzyme can act on at least some mature (non-Amadori) AGE adducts. However, it does not close the glucosepane/pentosidine gap — the adducts it acts on are non-crosslinking single-site modifications. The clinical translation of FAOD for AMD is speculative but represents the first ex-vivo human-tissue evidence for enzymatic AGE reduction in a disease-relevant context.

#gap/needs-replication — Delanghe 2024 (PMID:38732004) key quantitative claims (p=0.001 autofluorescence reduction; 45±21% drusen surface area reduction; substrate scope fructosyl-Lys/CML/CEL/imidazolone; agmatine release; glucosepane/pentosidine not tested) confirmed via two independent PubMed abstract queries. Sample sizes (n values) for individual experiments not reported in abstract. Full PDF not read; n values and additional methodological details remain to be confirmed. Single-study; no independent replication of the expanded substrate scope.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Not applicable (microbial enzyme; human relevance is therapeutic, not endogenous) |
| Phenotype conserved in humans? | Not applicable |
| Replicated in humans? | No — ex-vivo tissue sections only (Delanghe 2024); no in-vivo human data |

## Commercial use and clinical-diagnostics engineering

FAOD has been commercially deployed in HbA1c assays for >20 years. Engineered variants with altered substrate specificity — particularly expanded peptide-substrate acceptance for fructosyl-Val-His on intact hemoglobin after restricted protease pre-treatment — have been developed by multiple groups [^hirokawa2003] [^hirokawa2004]. This engineering precedent is relevant to therapeutic deployment: FAOD is a tractable enzyme for directed evolution to broaden or narrow substrate scope, modify oxidative by-product handling, or reduce immunogenicity.

## Combination therapy with FN3K — De Decker 2023

De Decker et al. 2023 (*Int J Mol Sci*; PMID 37240327) demonstrated that **combining FAOD with the mammalian deglycating enzyme FN3K achieved ~43% autofluorescence reduction in glycolaldehyde-damaged human skin specimens** — outperforming FAOD monotherapy (33%), FN3K monotherapy (31%), and the positive control aminoguanidine (28%) [^dedecker2023faod]. This is the **first published combination-therapy precedent** for FAOD and FN3K acting synergistically in human tissue.

The additive effect is mechanistically consistent: FAOD operates preferentially on extracellular and surface-accessible glycated amino groups (including CML and CEL per Delanghe 2024), while FN3K acts on intracellular fructosyl-lysine substrates in the tissue. Because the two enzymes attack non-overlapping substrate pools via different mechanisms (oxidation vs. phosphorylation), combined application covers a broader fraction of total skin glycation burden without competition.

**Caveats:** The study used an acute glycolaldehyde dimer-induction model (25 mM, 3 h) in young skin (not chronic, physiologically glycated aged skin); combined FAOD + FN3K generates additive by-products (H₂O₂ + 3-deoxyglucosone); cytotoxicity of co-delivered by-products was not assessed. See [[studies/de-decker-2023-fn3k-faod-skin-combination]] for full design and findings.

[^dedecker2023faod]: [[studies/de-decker-2023-fn3k-faod-skin-combination]] · n=19 skin specimens (healthy breast skin, mean age 26 ± 9 years) · in-vitro (ex-vivo glycolaldehyde dimer model; 25 mM, 3 h, 37°C) · model: human breast skin specimens · FAOD alone −33% AF (p<0.0001); FN3K+FAOD −43% AF (p<0.0001); FN3K alone −31% (p<0.0001); aminoguanidine −28% (p<0.001) · AF: excitation 370 nm / emission 390–700 nm · full PDF verified 2026-05-20 (doi:10.3390/ijms24108981)

## Therapeutic limitations

1. **H₂O₂ release:** The catalytic mechanism releases H₂O₂ as a stoichiometric by-product. At therapeutic concentrations, H₂O₂ is cytotoxic and pro-inflammatory. Mitigation strategies include co-delivery of catalase (H₂O₂ → H₂O + ½O₂); engineered FAOD–catalase fusion proteins are a proposed solution. This co-delivery requirement adds complexity and potential immunogenicity.
2. **Immunogenicity:** Fungal/bacterial proteins are antigenic in mammals. Repeated systemic dosing of a fungal enzyme would likely elicit antibody responses that neutralize activity and/or cause hypersensitivity reactions. Humanization or PEGylation would be required.
3. **Tissue penetration:** Protein therapeutics have limited penetration into compacted ECM-rich tissues (arterial adventitia, dermis). Intravitreal injection (for AMD) partially bypasses this — the vitreous and subretinal space are more accessible. Systemic collagen deglycation would require delivery to dense ECM environments.
4. **Substrate scope still excludes crosslinks:** Even after Delanghe 2024, the major structural problem in aging ECM — glucosepane-crosslinked collagen fibrils — appears to be outside the substrate range of all known FAOX/FAOD variants.
5. **Cofactor stability:** FAD cofactor is susceptible to inactivation by oxidative conditions, which are elevated in AGE-rich tissues. Engineered FAOD variants with improved cofactor stability would be required.

## Relation to Revel Pharmaceuticals / Spiegel-lab functional-metagenomics program

Revel Pharmaceuticals' founding premise was that soil-metagenome-encoded enzymes capable of cleaving **mature glucosepane crosslinks** should exist in organisms that catabolize aged proteins as nutrient sources. FAOX/FAOD is the **known class** in this space — characterized as capable of Amadori-product deglycation and now (per Delanghe 2024) some non-crosslink mature AGE adducts. However, FAOX/FAOD does not close the glucosepane gap.

If FAOD's expanded substrate scope (Delanghe 2024) is confirmed, it strengthens the broader hypothesis that fungal/bacterial flavoenzymes can have unexpectedly broad AGE-substrate scope — supporting the plausibility of Revel's metagenomics approach. But it does not constitute the glucosepane-cleaving enzyme the program sought. See [[age-crosslink-breakers]] § "Natural enzymatic AGE clearance — three-tier defense framework."

## Limitations and gaps

- **Glucosepane and pentosidine crosslinks remain without any known enzymatic cleavage route.** Tier 3 of the natural defense hierarchy is empty.
- **Delanghe 2024 expanded substrate scope needs independent replication.** CML and CEL cleavage by FAOD is a single-laboratory finding; the mechanism of guanidino-bond cleavage (agmatine release) is unexpected and requires mechanistic follow-up.
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
- [[carboxymethyl-lysine]] — CML; reportedly cleaved by FAOD (Delanghe 2024, abstract only)
- [[age-crosslink-breakers]] — intervention class; pharmacological context

## Footnotes

[^jeong2002]: doi:10.1007/s00203-002-0463-x · Jeong HY, Song MH, Back JH, Han DM, Wu X, Monnier V, Jahng KY, Chae KS · *Arch Microbiol* 2002;178(5):344–50 · PMID:12375102 · in-vitro · model: *Aspergillus nidulans faoA* gene characterization · gene encodes 441 aa enzyme with 5 introns; single copy gene; inducible by fructosyl amines; *veA* gene required for full induction; enzyme dispensable for normal *A. nidulans* development/growth · abstract-level via PubMed #gap/no-fulltext-access

[^hirokawa2003]: doi:10.1016/j.bbrc.2003.09.169 · Hirokawa K, Gomi K, Kajiyama N · *Biochem Biophys Res Commun* 2003;311(1):104–11 · PMID:14575701 · in-vitro · molecular cloning and expression of novel fructosyl peptide oxidases; two functional subclasses identified (free amino acid-specific vs peptide-permissive); HbA1c measurement application · abstract-level via PubMed #gap/no-fulltext-access

[^hirokawa2004]: doi:10.1016/j.femsle.2004.04.027 · Hirokawa K, Nakamura K, Kajiyama N · *FEMS Microbiol Lett* 2004;235(1):157–62 · PMID:15158276 · in-vitro · *Eupenicillium terrenum* FPOX; high specificity toward α-glycated fructosyl-Val-His; clinical HbA1c measurement application · abstract-level via PubMed #gap/no-fulltext-access

[^delanghe2024]: doi:10.3390/ijms25094779 · Delanghe JR, Diana Di Mavungu J, Beerens K, Himpe JJ, Bostan N, Speeckaert MM, Vrielinck H, Vral A, Van Den Broeke C, Huizing M, Van Aken E · *Int J Mol Sci* 2024;25(9):4779 · PMID:38732004 · ex-vivo · model: glycolaldehyde-glycated porcine retinas + human AMD retinal sections · AGE autofluorescence reduced (p=0.001 in porcine model); drusen surface area reduced to 45 ± 21% of control in human AMD sections; substrate scope included fructosyl-lysine, CML, CEL, imidazolone (by MS); agmatine released (guanidino-bond cleavage); glucosepane and pentosidine cleavage NOT reported · archive: OA gold (MDPI); download pending (PMID:38732004) · **abstract-only verification; full PDF required for quantitative claim confirmation** #gap/no-fulltext-access
