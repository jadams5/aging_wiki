---
type: compound
aliases: [vitamin C, L-ascorbic acid, ascorbate, L(+)-ascorbic acid, cevitamic acid]
pubchem-cid: 54670067
inchikey: CIWBSHSKHKDKBQ-JLAZNSOCSA-N
chembl-id: CHEMBL196
drugbank-id: DB00126
cas-number: 50-81-7
molecular-formula: C6H8O6
molecular-weight-da: 176.12
biologic: false
mechanisms:
  - antioxidant
  - prolyl-hydroxylase-cofactor
  - collagen-synthesis-stimulation
  - melanin-inhibition
  - melanin-precursor-reduction
  - tet-enzyme-cofactor
targets: ["[[col1a1]]", "[[col3a1]]", "[[lox]]", "[[tet2]]"]
hallmarks: ["[[loss-of-proteostasis]]", "[[genomic-instability]]", "[[epigenetic-alterations]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Powered RCT (n≥150) comparing topical 15–20% L-ascorbic acid (pH 2.5–3.5) vs vehicle for 6 months in mild-to-moderate photoaging with primary endpoint of skin biopsy collagen-I density (Masson trichrome + immunohistochemistry) and secondary endpoints of p16 expression (senescent fibroblast burden) and validated clinical photoaging score."
clinical-trials-active: 1
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Canonical-DB identity fields verified (PubChem CID 54670067, InChIKey CIWBSHSKHKDKBQ-JLAZNSOCSA-N, ChEMBL CHEMBL196, CAS 50-81-7 all confirmed via REST APIs; CHEMBL196 confirmed canonical over CHEMBL40274 cross-reference). Murad 1981 PMID corrected from 6268471 to 6265920 and DOI added. Paddayatty 2004 n corrected from 7 to 17; Paddayatty 2004 oral dose and fold-difference claims corrected. R43 label corrected to R42 in intervention-classes.md. Primary study claims (Humbert 2003 n, Nusgens 2001 n, Pinnell 2001 formulation data, Kawahori 2020, Correia 2023, Žmitek 2024, Zi 2026) are abstract-only verified; PDF verification blocked for most (not_oa or download pending). Lin 2005 PDF verified 2026-05-19 (anchor study page seeded + verified via wiki-verifier; caspase-7 added, PMID 16185284 confirmed). Systemic pharmacokinetics section corrections noted in body."
---


# Ascorbic Acid (Vitamin C)

L-Ascorbic acid is a water-soluble six-carbon lactone, universally known as vitamin C, and the biologically active L-isomer (the D-isomer has no meaningful biological activity). It is an **essential micronutrient** in humans — one of only ~4 vitamin-C-auxotrophic mammalian lineages, owing to loss of the GULO (L-gulonolactone oxidase) gene ~25 million years ago in the primate ancestor. As a compound with aging relevance, ascorbic acid occupies two distinct pharmacological niches: (1) a **topical anti-photoaging agent** with strong clinical evidence for collagen synthesis stimulation and depigmentation in skin; and (2) an **obligate enzymatic cofactor** for a family of Fe²⁺-dependent dioxygenases with wide-ranging roles in collagen biosynthesis, HIF-1α regulation, and epigenetic DNA demethylation via TET enzymes.

## Identity

| Field | Value |
|---|---|
| PubChem CID | 54670067 (L-ascorbic acid specifically; CID 5785 is D-ascorbic acid — distinct compound) |
| InChIKey | CIWBSHSKHKDKBQ-JLAZNSOCSA-N |
| ChEMBL ID | CHEMBL196 (preferred name: "ASCORBIC ACID"; confirms L-isomer) |
| DrugBank ID | DB00126 |
| CAS | 50-81-7 |
| Molecular formula | C6H8O6 (MW 176.12 Da) |
| Class | Water-soluble lactone vitamin; reducing agent |

**Note on CID disambiguation:** CID 54670067 is the stereochemically precise L-enantiomer entry. The PubChem parent CID 5785 represents D-ascorbic acid. The ChEMBL cross-reference from PubChem shows CHEMBL40274 (a PubChem-curated linkage); however, the ChEMBL preferred-name entry for "ASCORBIC ACID" with C6H8O6 and L-isomer synonyms is CHEMBL196, confirmed independently via ChEMBL API. Use CHEMBL196 as the canonical ChEMBL ID.

## Formulation and stability

**This is critical for topical use.** L-Ascorbic acid is highly unstable in neutral or alkaline aqueous solution — it oxidises to L-dehydroascorbic acid, which is colourless and inactive [^pinnell2001]. Commercial topical formulations must address this:

- **Effective pH:** L-ascorbic acid must be formulated at pH ≤ 3.5 to penetrate the stratum corneum and to resist oxidation [^pinnell2001].
- **Optimal concentration:** 20% L-ascorbic acid produces maximal skin tissue saturation; tissue half-life after application is approximately 4 days (3 consecutive daily applications achieve saturation) [^pinnell2001].
- **Derivatives** (sodium ascorbyl phosphate, magnesium ascorbyl phosphate, ascorbyl glucoside, tetrahexyldecyl ascorbate): more stable in formulation but require enzymatic conversion to L-ascorbic acid after skin penetration. Pinnell 2001 found that magnesium ascorbyl phosphate and ascorbyl-6-palmitate **did not** raise skin L-ascorbic acid levels above vehicle, suggesting incomplete or inconsistent conversion in vivo at the doses tested [^pinnell2001]. #gap/needs-replication — more recent formulation data for some derivatives (tetrahexyldecyl ascorbate, sodium ascorbyl phosphate) suggest improved skin-level outcomes in some formulations; head-to-head comparisons remain limited.
- **Oxidation indicator:** yellowing/browning of a product indicates significant oxidation; oxidised product should be discarded.

## Mechanism of action

### Collagen biosynthesis cofactor

The most firmly established aging-relevant mechanism. Prolyl-4-hydroxylase (P4H; encoded by P4HA1, P4HA2, P4HA3) and lysyl hydroxylase (PLOD1, PLOD2, PLOD3) are Fe²⁺/α-ketoglutarate-dependent dioxygenases resident in the ER. They hydroxylate proline and lysine residues in procollagen chains — hydroxylation is required for triple-helix stability (4-hydroxyproline provides H-bonds critical to the Tm of collagen), for glycosylation, and for crosslink formation (hydroxylysine is the substrate for lysyl oxidase-dependent crosslinks — see [[lox]]). After each catalytic cycle, the active-site Fe²⁺ is oxidised to Fe³⁺ and must be re-reduced by ascorbate; without ascorbate, the enzyme is trapped in the inactive Fe³⁺ state [^murad1981].

Topical ascorbic acid application to photoaged human skin increases [[col1a1|collagen-I]] and [[col3a1|collagen-III]] mRNA expression, upregulates their processing enzymes (procollagen C-proteinase, lysyl oxidase), and increases tissue inhibitor of metalloproteinase 1 (TIMP-1), reducing MMP-mediated collagen degradation [^nusgens2001]. The stimulatory effect was most pronounced in participants with lower dietary vitamin C intake, suggesting a dose–response relationship between local substrate availability and collagen synthesis output.

Cross-links: see [[col1a1]], [[col3a1]], [[lox]] for the downstream biochemistry of crosslinking.

### Aqueous-phase antioxidant

Ascorbic acid is one of the most potent aqueous-phase free-radical scavengers in biology. It donates electrons to reactive oxygen species (superoxide, hydroxyl radical, peroxynitrite) and to the oxidised forms of lipid-soluble antioxidants. Most importantly, it **regenerates α-tocopherol** (vitamin E) from the tocopheroxyl radical formed after tocopherol quenches lipid peroxyl radicals — the vitamin C–vitamin E regeneration cycle is the primary mechanism by which ascorbate protects membrane lipids [^lin2005]. This synergy is why the C+E+ferulic acid formulation doubles topical photoprotection (see below).

In skin, ascorbate serves as the primary antioxidant in the aqueous compartment of the epidermis and dermis, scavenging UV-induced ROS before they can cause DNA strand breaks or oxidise lipid membranes [^lin2005].

### Melanin inhibition

Tyrosinase catalyses the rate-limiting step of melanogenesis (tyrosine → L-DOPA → dopaquinone). Ascorbate reduces dopaquinone back to L-DOPA, interrupting the polymerisation cascade that generates eumelanin, without directly inhibiting tyrosinase enzyme binding [^correia2023]. This mechanism is distinct from competitive tyrosinase inhibitors (kojic acid, arbutin). The net effect is reduced melanin density in epidermal keratinocytes, producing depigmentation of solar lentigines, melasma patches, and post-inflammatory hyperpigmentation. Clinical evidence: see § Evidence — topical.

### TET enzyme cofactor (epigenetic remodelling — emerging)

TET1, TET2, and TET3 are also Fe²⁺/α-KG-dependent dioxygenases. They catalyse oxidation of 5-methylcytosine (5mC) → 5-hydroxymethylcytosine (5hmC) → further oxidation products, initiating the DNA demethylation cascade. Ascorbate is required to maintain the catalytic Fe²⁺ active site, analogous to its role in prolyl hydroxylases [^kawahori2020].

In a mouse model of ascorbate auxotrophy (GULO-knockout), suckling pups showed hepatic DNA hypermethylation; high-dose ascorbate supplementation to lactating mothers restored normal 5hmC levels [^kawahori2020]. The implication for adult aging is that sub-optimal ascorbate status could contribute to epigenetic drift via impaired TET activity — conceptually linking ascorbate status to [[epigenetic-alterations]]. This is also relevant to [[tet2]]: TET2 is a somatic tumor suppressor lost in [[clonal-hematopoiesis]] (CHIP); ascorbate-dependent TET2 activity in haematopoietic stem cells may modulate CHIP progression risk (Agathocleous 2017 — not directly cited here; flag for future verification). #gap/needs-replication — adult-somatic evidence for aging-specific TET–ascorbate effects is sparse; the Kawahori 2020 evidence is developmental (suckling period) rather than aging-specific.

## Clinical evidence — topical

### Systematic reviews (2019–2026 recency search)

**Correia & Magina 2023 (systematic review, 7 RCTs, n=139 total)** [^correia2023]: Topical vitamin C effective for treating "uneven, wrinkled skin" and has depigmenting properties. All included RCTs showed positive directional effects. Long-term use required for durable results. Study quality limitations: most trials combined vitamin C with other ingredients; isolated vitamin-C-only effect could not be definitively separated in all trials. FWCI 18.65 (citation_percentile 100%), indicating very high impact in the subfield.

**Sanabria et al. 2023 (systematic review, 7 studies 2015–2022)** [^sanabria2023]: Confirmed clinical wrinkle improvement with topical vitamin C; all included studies combined vitamin C with other ingredients, limiting isolated-mechanism conclusions. Authors call for additional high-quality prospective comparative studies.

### Key individual trials and mechanistic studies

**Humbert et al. 2003 (RCT, n unconfirmed from abstract, 6 months, 5% L-ascorbic acid cream)** [^humbert2003]: Double-blind randomised split-body design in photoaged skin (vitamin C cream on one side, excipient on the other side of the low-neck and arms — not split-face). Vitamin-C side showed significant improvement in "global score" of photodamage; skin microrelief density increased; deep furrows reduced. Biopsy evidence of elastic tissue repair. This is the landmark human RCT establishing clinical and histological efficacy of topical 5% L-ascorbic acid over 6 months. Limitation: 5% may be below the formulation optimum identified by Pinnell 2001 (20%).

**Nusgens et al. 2001 (randomised, n=13 biopsy donors, topical vitamin C)** [^nusgens2001]: First study to show that topical vitamin C increases COL1A1 and COL3A1 mRNA in human dermis in vivo, along with upregulation of processing enzymes and TIMP-1. Mechanistically confirmed the prolyl-hydroxylase-cofactor pathway in human skin tissue. Effect was dose-dependent on baseline dietary ascorbate status.

**Lin et al. 2005 (ex vivo pig skin + in vivo human, combination formulation)** [^lin2005]: Ferulic acid (0.5%) added to a 15% L-ascorbic acid + 1% α-tocopherol solution (pH 3.2) **doubled photoprotection** from 4-fold to ~8-fold (measured by erythema and sunburn cell formation). Ferulic acid stabilises the combination solution against oxidation (visible colour stability) and synergistically enhances the antioxidant effect. This is the biochemical basis for C+E+Ferulic formulations (the commercial SkinCeuticals C E Ferulic archetype). See [[tretinoin]] and [[retinol]] for complementary collagen-stimulation mechanisms with different receptor biology.

**Zi et al. 2026 (RCT, topical 10% vitamin C serum, 12 weeks)** [^zi2026]: In-vivo skin measurements showed significant reductions in advanced glycation end-products (AGEs −17.65%), protein carbonylation fluorescence intensity (−49.22%), IL-1α content (−58.73%), and improved antioxidant capacity and skin tone. Novel finding: topical vitamin C reduces *surface AGEs* and *protein carbonylation* in addition to established collagen/pigmentation endpoints, expanding the mechanism profile.

**Žmitek et al. 2024 (RCT, 3-arm placebo-controlled, n=87 total [29 placebo, 28 collagen+vitamin C+HA, 30 collagen+vitamin C], 16 weeks, oral collagen 5 g/day + vitamin C 80 mg/day ± hyaluronic acid 30 mg/day; women aged 40–65)** [^zmitek2024]: Oral supplementation with a collagen–vitamin C combination improved dermis density, skin texture, and wrinkle severity versus placebo. Neither arm significantly improved elasticity or hydration. Adding hyaluronic acid provided no additional skin benefit over collagen supplementation alone. Interpretation: the collagen peptide is likely the active agent; vitamin C's role is as a cofactor enabling optimal collagen utilisation.

### Penetration note

Topical vitamin C does not increase systemic plasma ascorbate at concentrations used in cosmetic formulations [^paddayatty2004]. The route of action is local to the dermis/epidermis. This is pharmacologically desirable — it allows high local concentrations without systemic vitamin C loading.

## Clinical evidence — systemic

Oral vitamin C does **not** reliably elevate skin ascorbate above the plateau seen at normal dietary intake. The intestinal SVCT1 transporter saturates; at the maximum tolerated oral dose (3 g every 4 hours), pharmacokinetic modelling predicts a peak plasma concentration of ~220 μmol/L [^paddayatty2004]. This pharmacokinetic ceiling means that oral vitamin C is useful for preventing/correcting deficiency but does not produce the supraphysiological local skin concentrations achievable with topical application.

**IV vitamin C pharmacokinetics:** Intravenous administration bypasses intestinal saturation. A 50 g IV dose is predicted to achieve peak plasma concentrations of ~13,400 μmol/L versus ~220 μmol/L for the maximum tolerated oral regimen — approximately 60-fold higher [^paddayatty2004]. IV vitamin C at high doses (10–75 g infusion) has been studied as an adjunct in cancer therapy (three-case report by Padayatty 2006 [^padayatty2006] showed unexpectedly prolonged survival in advanced cancer) — the proposed mechanism at pharmacological IV concentrations is pro-oxidant via H₂O₂ generation in the tumour microenvironment, not antioxidant. This is a qualitatively different pharmacology from supplement-range oral or topical vitamin C. Cancer-context IV use is out of scope for the aging wiki.

**Scurvy** — the reference deficiency state — demonstrates the essential role of ascorbate in collagen synthesis: scorbutic connective tissue lesions (gum deterioration, perifollicular haemorrhage, poor wound healing) reverse completely with repletion, confirming the cofactor mechanism in humans.

**Epigenetic aging — Mendelian randomisation:** Keshawarz et al. 2023 (PMID 37233989) found that dietary and supplemental vitamin C intake was associated with altered DNA methylation patterns in an observational / MR analysis framework. Huang et al. 2025 (PMID 41261720, meta-analysis) found causal effects of dietary antioxidants including vitamin C on epigenetic age. Both studies support the TET-enzyme-cofactor hypothesis but neither is a classical causal-mediation RCT. #gap/needs-replication — population-level MR instruments for vitamin C intake are noisy; causal-epigenome claims require mechanistic replication.

## Cross-mechanism combinations

| Combination partner | Rationale | Evidence quality |
|---|---|---|
| α-Tocopherol (vitamin E) | Ascorbate regenerates tocopheroxyl radical; synergistic photoprotection [^lin2005] | Strong (mechanistic + ex vivo) |
| Ferulic acid | Stabilises both vitamin C and E against oxidation; further doubles photoprotection [^lin2005] | Strong (ex vivo; basis for C+E+Ferulic commercial formulations) |
| [[tretinoin]] / [[retinol]] / [[retinaldehyde]] | Different primary mechanism (RAR agonism → AP-1 transrepression → MMP suppression); additive collagen benefit in multiple trials | Moderate (RCT data for retinoids; combination RCT data limited) |
| [[niacinamide]] (vitamin B3) | Different melanogenesis step (inhibits melanosome transfer from melanocytes to keratinocytes; does not inhibit dopaquinone reduction). Compatible formulation (the historical incompatibility claim — that the two form a coloured complex — has been largely debunked at current commercial concentration ranges; Davis 2010+). | Moderate; clinical combination studies ongoing |

## Tolerability and safety

**Topical:**
- Low pH (2.5–3.5) formulations cause mild transient stinging, especially at 20%. Most subjects tolerate well after adaptation.
- Rare contact dermatitis; conduct patch testing in reactive skin.
- Oxidised product (yellow/brown) can cause temporary skin yellowing; not a safety concern but indicates degradation.
- Well-tolerated: no systemic adverse effects from topical absorption at cosmetic doses.

**Systemic (oral):**
- Very safe at supplement doses (100–500 mg/day).
- At high oral doses (>2 g/day): gastrointestinal distress (osmotic diarrhoea) in some individuals.
- High-dose oral or IV: oxalate nephrolithiasis risk in susceptible individuals (glucose-6-phosphate dehydrogenase deficiency is a contraindication to IV high-dose vitamin C — haemolysis risk).
- No upper tolerable intake level exceeds 2 g/day (FNB/IOM) for most adults.

## Aging-relevance scoring

| Evidence dimension | Status |
|---|---|
| Pathway conserved in humans? | Yes — collagen prolyl hydroxylases and TET enzymes are human enzymes; cofactor requirement is universal |
| Phenotype (collagen synthesis, depigmentation) conserved in humans? | Yes — photoaging reversal and depigmentation RCTs in humans |
| Replicated in humans? | Yes (topical collagen/depigmentation endpoints); partial (systemic epigenetic endpoints) |
| Lifespan extension (model organisms)? | Not established — DrugAge: vitamin C not a validated lifespan-extending compound |

## Limitations and gaps

- **Formulation matters more than dose:** The gap between "topical vitamin C" (the concept) and "a specific L-ascorbic acid formulation at pH 2.5–3.5, 15–20%, in a compatible vehicle" is large. Clinical evidence is predominantly from specific formulations; consumer product quality varies widely. #gap/dose-response-unclear
- **Isolated vitamin C RCT data is limited:** Most positive topical RCTs use combination products (C+E+ferulic acid, or C+other active). Attributing benefit specifically to ascorbic acid vs co-ingredients is difficult. [^correia2023] [^sanabria2023]
- **Effect size vs retinoids:** Clinical effect sizes for wrinkle reduction and collagen stimulation from topical vitamin C appear smaller than for retinoids [[tretinoin]] in head-to-head comparisons, though tolerability is superior. #gap/needs-replication — head-to-head equivalence trials are few.
- **No systemic anti-aging evidence at supplement doses:** Oral vitamin C at supplementable concentrations does not elevate skin ascorbate above normal dietary saturation. Claims of systemic anti-aging from oral supplementation in replete individuals lack an established mechanistic pathway.
- **TET-cofactor aging relevance is speculative in adults:** The Kawahori 2020 TET evidence is developmental; adult-somatic evidence for epigenetic aging mediation by ascorbate status is associational. #gap/needs-replication
- **Topical clinical trials database is thin for aging-specific endpoints:** Only 1 active ClinicalTrials.gov trial for ascorbic acid + aging as of 2026-05-19 (NCT07376148 — fractional CO2 laser + ascorbic acid in Mexico, n small). No large aging-first RCT registered. #gap/needs-human-replication for aging-specific endpoints beyond photoaging cosmetics.

## Classification

- **SENS strategy:** Not directly mapped (collagen-ECM support falls outside the 7 SENS damage categories)
- **Hallmark targets:** [[loss-of-proteostasis]] (collagen biosynthesis cofactor), [[genomic-instability]] (ROS scavenging, TET-mediated DNA demethylation), [[epigenetic-alterations]] (TET cofactor — emerging)
- **Clinical category:** dietary supplement (oral); FDA-approved parenteral nutrition additive (IV); cosmetic ingredient (topical); not an FDA-approved drug for aging or photoaging indications

## Footnotes

[^pinnell2001]: doi:10.1046/j.1524-4725.2001.00264.x · Pinnell SR, Yang H, Omar M, Monteiro-Riviere N, DeBuys HV, Walker LC, Wang Y, Levine M · *Dermatologic Surgery* 2001 · in-vitro / ex-vivo · model: pig skin + human skin specimens · percutaneous absorption study establishing pH <3.5 requirement, 20% optimal concentration, 4-day tissue half-life, and failure of derivative forms to raise skin ascorbate levels · n not specified (topographic biopsy) · in archive (download_status: not_oa; cited_by_count: 208; citation_percentile: 100%)

[^nusgens2001]: doi:10.1046/j.0022-202x.2001.01362.x · Nusgens BV, Humbert P, Rougier A, Colige AC, Haftek M, Lambert CA, Richard A, Creidi P, Lapière CM · *Journal of Investigative Dermatology* 2001 · in-vivo (human dermis biopsy) · n=13 (biopsy specimens from study participants; number implies multiple donors) · randomised; p values reported per mRNA level change · model: photoaged human skin, topical vitamin C applied · COL1A1 + COL3A1 mRNA increases, TIMP-1 upregulation · in archive (download_status: pending; bronze OA; cited_by_count: 250; citation_percentile: 100%) — **abstract-only verification 2026-05-19**

[^humbert2003]: doi:10.1034/j.1600-0625.2003.00008.x · Humbert PG, Haftek M, Creidi P, Lapière C, Nusgens B, Richard A, Schmitt D, Rougier A, Zahouani H · *Experimental Dermatology* 2003 · rct · n=not confirmed from abstract · double-blind randomised split-body design (low-neck and arms; not split-face) · 6 months · 5% L-ascorbic acid cream vs excipient · significant improvement in global photodamage score (dermatologist + self-assessment); microrelief density increase; deep furrows decrease; ultrastructural evidence of elastic tissue repair · in archive (download_status: pending; green OA; cited_by_count: 243; citation_percentile: 100%) — **abstract-only verification 2026-05-19; n=20 stated in seeder brief is not confirmed from abstract**

[^lin2005]: doi:10.1111/j.0022-202X.2005.23768.x · PMID 16185284 · Lin FH, Lin JY, Gupta RD, Tournas JA, Burch JA, Selim MA, Monteiro-Riviere NA, Grichnik JM, Zielinski J, Pinnell SR · *J Invest Dermatol* 2005 Oct;125(4):826-32 · porcine skin model (weanling white Yorkshire pigs); n=6/group erythema + sunburn cell assays, n=3 Western blot caspase assays · ferulic acid 0.5% stabilises 15% L-ascorbic acid + 1% α-tocopherol formulation AND doubles photoprotective potency (4-fold → ~8-fold by erythema and sunburn-cell endpoints); paper explicitly states stabilisation mechanism is unknown; reduced caspase-3 AND caspase-7 activation, reduced thymine dimers · in archive (citation_percentile=100; 340 citations; fwci 13.6) — **PDF verified 2026-05-19**

[^paddayatty2004]: doi:10.7326/0003-4819-140-7-200404060-00010 · Padayatty SJ, Sun H, Wang Y, Riordan HD, Hewitt SM, Katz A, Wesley RA, Levine M · *Annals of Internal Medicine* 2004 · pharmacokinetics study · n=17 (healthy hospitalized volunteers) · oral vitamin C plasma concentrations tightly controlled by saturable transporter; maximum tolerated oral dose 3 g every 4 hours → predicted peak plasma 220 μmol/L; IV 50 g dose predicted ~13,400 μmol/L (~60× higher); concentrations measured across dose range 0.015–1.25 g oral and IV · in archive (download_status: not_oa; cited_by_count: 948; citation_percentile: 100%) — **verified against PubMed abstract; full-text not_oa**

[^padayatty2006]: doi:10.1503/cmaj.050346 · Padayatty SJ, Riordan HD, Hewitt SM, Katz A, Hoffer LJ, Levine M · *CMAJ* 2006 · observational (case report series) · n=3 (advanced cancer patients) · IV vitamin C at high doses (15–65 g infusion) produced plasma 25× higher than max oral dose; long-term survival reported · in archive (download_status: pending; gold OA; cited_by_count: 251) — **abstract-only verification 2026-05-19**; *cancer-context only; out of scope for anti-aging applications*

[^correia2023]: doi:10.1111/jocd.15748 · Correia G, Magina S · *Journal of Cosmetic Dermatology* 2023 · systematic-review · n=139 (pooled, 7 RCTs) · topical vitamin C effective for photoaging and melasma/dyspigmentation; all 7 RCTs directionally positive; study quality varies; most trials used combinations · in archive (download_status: pending; hybrid OA; cited_by_count: 37; FWCI: 18.65; citation_percentile: 100%) — **abstract-only verification 2026-05-19**

[^sanabria2023]: doi:10.36849/JDD.7332 · Sanabria B, Berger LE, Mohd H, Benoit L, Truong TM, Michniak-Kohn BB, Rao BK · *Journal of Drugs in Dermatology* 2023 · systematic-review · 7 studies (2015–2022) · all included studies used topical vitamin C in combination with other ingredients; isolated vitamin-C contribution not definitively separated; clinical wrinkle improvement reported across all studies · in archive (download_status: not_oa; cited_by_count: 2) — **cannot verify without full-text access** #gap/no-fulltext-access

[^zmitek2024]: doi:10.3390/nu16121908 · Žmitek K, Žmitek J, Hristov H, Rogl Butina M, Keršmanc P, Pogačnik T · *Nutrients* 2024 · rct · 3-arm placebo-controlled double-blind · n=87 total (29 placebo, 28 CPHA, 30 CP; women 40–65 yr) · 16 weeks · oral collagen 5 g/day + vitamin C 80 mg/day ± hyaluronic acid 30 mg/day · improved dermis density, texture, wrinkle severity; no significant effect on elasticity or hydration; adding HA did not augment skin benefit · in archive (download_status: pending; gold OA via PMC11206740; cited_by_count: 6; FWCI: 7.12; citation_percentile: 100%) — **n confirmed from PubMed abstract 2026-05-19; full PDF not yet read**

[^zi2026]: doi:10.1111/jocd.70888 · Zi Y, Liu J, Liu Q, Pan Y, Jiang X · *Journal of Cosmetic Dermatology* 2026 · rct · 12 weeks · 10% topical vitamin C serum · AGEs −17.65%, protein carbonylation fluorescence −49.22%, IL-1α −58.73%, improved antioxidant capacity and skin tone · **not in a local paper archive** (NOT_IN_ARCHIVE) — cite with low confidence; claims are abstract-only; full verification blocked #gap/no-fulltext-access

[^kawahori2020]: doi:10.1038/s41598-020-77962-7 · Kawahori K, Kondo Y, Yuan X, Kawasaki Y, Hanzawa N, Tsujimoto K, Wada F, Kohda T, Ishigami A, Yamada T, Ogawa Y, Hashimoto K · *Scientific Reports* 2020 · in-vivo · model: GULO-knockout mice (ascorbate auxotrophic, mirroring human GULO loss) · suckling-period ascorbate deficiency causes hepatic DNA hypermethylation (reduced 5hmC); maternal high-dose ascorbate supplementation restores normal demethylation pattern · evidence that ascorbate is an in-vivo cofactor for TET enzymes in hepatic tissue during development · in archive (download_status: pending; gold OA; cited_by_count: 19) — **abstract-only verification 2026-05-19**

[^murad1981]: doi:10.1073/pnas.78.5.2879 · Murad S, Grove D, Lindberg KA, Reynolds G, Sivarajah A, Pinnell SR · *Proc Natl Acad Sci USA* 1981 · PMID 6265920 · PMCID PMC319462 · in-vitro (human skin fibroblasts) · n not specified (cell culture) · ascorbate causes ~8-fold increase in collagen synthesis; lysyl hydroxylase activity increases 3-fold with ascorbate; prolyl hydroxylase activity decreases — results suggest collagen synthesis, post-translational hydroxylations, and hydroxylase activities are independently regulated by ascorbate · note: this paper's primary finding is collagen synthesis stimulation beyond cofactor effects; the biochemical basis of Fe²⁺→Fe³⁺ trapping on prolyl hydroxylase activity is referenced therein but the cofactor-trapping mechanism itself is developed in contemporaneous literature (Myllyharju 2003 Biochem J review is a reliable secondary source for the mechanism) · in archive (download_status: pending; green OA via PMC; PDF download failed HTTP 500 on initial attempt)
