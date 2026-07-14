---
type: compound
aliases: [nonanedioic acid, AzA, Finacea, Azelex]
pubchem-cid: 2266
chembl-id: CHEMBL1238
drugbank-id: DB00548
inchikey: BDJRBEYXGGNYIS-UHFFFAOYSA-N
molecular-formula: C9H16O4
molecular-weight-da: 188.22
administration-route: topical
biologic: false
mechanisms: [anti-inflammatory, antioxidant, tyrosinase-inhibition]
targets: ["[[camp]]", "[[ll-37]]"]
hallmarks: ["[[chronic-inflammation]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Randomized placebo-controlled skin-biopsy study (n≥40 rosacea patients aged ≥50) measuring KLK5 protein, p16+ dermal fibroblast density, and SASP cytokine output (IL-6, CXCL1, MMP-1) before/after 12-week topical azelaic acid 15% to determine whether anti-cathelicidin activity extends to suppression of senescent-cell SASP burden in aged rosacea skin."
clinical-trials-active: 2
literature-checked-through: 2026-06-27
verified: true
verified-date: 2026-06-27
verified-by: claude
verified-scope: "Coda 2013 verified against PMC full text (PMC3910251); van Zuuren 2019 verified against full-text PDF; Yamasaki 2007 verified against full-text PDF; Gao 2025 and King 2023 verified to abstract level (full PDFs pending download); Fitton & Goa 1991 not re-verified (no full-text access; PMID confirmed, claims consistent with secondary literature); DrugBank DB00548 confirmed via PubChem CID 2266 cross-reference; identity fields (PubChem CID 2266, ChEMBL CHEMBL1238, InChIKey, MW, formula) confirmed against live databases"
---

# Azelaic acid

A C9 saturated dicarboxylic acid found in small amounts in wheat, rye, and barley; also produced topically by the skin commensal *Malassezia furfur* as a by-product of oleic acid oxidation. Its dominant clinical application is **topical anti-rosacea therapy**: FDA-approved as a 15% gel (Finacea) for papulopustular rosacea, and as a 20% cream (Azelex) for acne. Its rosacea mechanism operates primarily through suppression of the KLK5/cathelicidin innate-immune axis rather than through direct antimicrobial activity. It is additionally used for post-inflammatory hyperpigmentation (PIH) and melasma via selective tyrosinase inhibition in hyperactive melanocytes, and it scavenges reactive oxygen species as a secondary anti-inflammatory mechanism. This page is scoped to the **non-microbial mechanisms** — anti-inflammatory (KLK5/cathelicidin suppression), antioxidant (ROS scavenging), and depigmenting (tyrosinase inhibition) — relevant to rosacea and photoaging in the aging-wiki framing.

## Identity

- **PubChem CID:** 2266 (confirmed: nonanedioic acid, C9H16O4)
- **ChEMBL:** CHEMBL1238 (FDA approved; Azelex 1995, Finacea 2002)
- **DrugBank:** DB00548 (confirmed via PubChem CID 2266 cross-reference registry; ChEMBL entry also cross-references this compound)
- **InChIKey:** BDJRBEYXGGNYIS-UHFFFAOYSA-N
- **Molecular formula:** C9H16O4 · **MW:** 188.22 g/mol
- **Class:** saturated aliphatic dicarboxylic acid (C9)
- **Natural sources:** small amounts in cereal grains; produced by *Malassezia*-mediated β-oxidation of unsaturated fatty acids on skin surface
- **FDA approvals:** 20% cream (Azelex) for mild-to-moderate acne; 15% gel (Finacea) and 15% foam (Finacea) for papulopustular rosacea

## Mechanisms of action

Azelaic acid is mechanistically distinct from retinoids, antibiotics, and antioxidant vitamins. It exerts anti-inflammatory, antioxidant, and anti-melanogenic effects via three parallel mechanisms.

### 1. Anti-inflammatory: KLK5/cathelicidin axis suppression (rosacea mechanism)

The dominant mechanism underlying the FDA-approved rosacea indication is suppression of the KLK5–cathelicidin inflammatory cascade in the stratum corneum:

1. **KLK5 inhibition** — azelaic acid reduces kallikrein-5 (KLK5/SCTE) expression and enzymatic activity in rosacea-affected skin. KLK5 is the primary serine protease responsible for cleaving the cathelicidin precursor hCAP-18 into pro-inflammatory LL-37 and aberrant cathelicidin fragments. Elevated KLK5 is the proximal trigger of the innate immune dysregulation characterising rosacea [^yamasaki2007].
2. **Cathelicidin LL-37 reduction** — by limiting KLK5 activity, azelaic acid reduces the abundance of mature LL-37 and the abnormal cathelicidin cleavage products (FA-29 and others) unique to rosacea lesional skin.
3. **Downstream cytokine attenuation** — reduced LL-37 → less TLR2 activation on keratinocytes → lower NF-κB-driven output of IL-1β, IL-8, CXCL1, and VEGF → attenuated inflammatory infiltration and vascular dilation.
4. **Serine protease activity overall** — in a 16-week multicenter, prospective, open-label study (n=60 enrolled, 49 analyzed), azelaic acid 15% gel reduced CAMP (cathelicidin) mRNA and KLK5 mRNA in rosacea patient skin. Serine protease activity (SPA) was significantly reduced in patients with high baseline SPA only (n=21/49; r²=0.79, P=0.0008) — not in patients with low baseline SPA (n=28/49; P=0.53). KLK5 protein inhibition was separately confirmed in vitro in cultured keratinocytes, and Klk5 mRNA was significantly reduced in mouse skin [^coda2013]. This is the pivotal mechanistic study linking AzA treatment to the KLK5/cathelicidin axis.

The underlying biology of the KLK5 → hCAP-18 → LL-37 → TLR2 axis is documented on [[camp]] (the cathelicidin precursor) and [[rosacea]] (§ innate immune dysregulation). KLK5 does not yet have a dedicated protein page — it is an implicit stub. #gap/stub

**This anti-inflammatory mechanism is entirely distinct from azelaic acid's bacteriostatic activity against *Cutibacterium acnes* (the acne mechanism) — see § Keratinization and acne use below.** Anti-rosacea efficacy is observed in a context where *C. acnes* colonization is not elevated; the KLK5/cathelicidin axis operates independently of antimicrobial activity.

**Mechanism conservation table (rosacea axis):**

| Dimension | Status |
|---|---|
| KLK5/cathelicidin axis established in human rosacea? | yes — Yamasaki 2007 biopsy + mouse model; Coda 2013 treatment correlation [^yamasaki2007][^coda2013] |
| Azelaic acid reduces KLK5 and LL-37 in human rosacea skin? | yes — Coda 2013 16-week multicenter open-label study: CAMP mRNA and KLK5 mRNA reduced in rosacea patients; SPA significantly reduced in high-baseline-SPA subset (n=21/49) [^coda2013] |
| Independent validation of the axis as pharmacological target? | partial — ivermectin also inhibits KLK5 and CAMP independently [^demenonville2017] |

### 2. Antioxidant: ROS scavenging

Azelaic acid scavenges reactive oxygen species — including hydroxyl radicals and superoxide — produced by activated neutrophils and by UV irradiation in the skin. ROS scavenging is a secondary anti-rosacea mechanism: UV → ROS → CAMP promoter activation → excess LL-37 production; quenching ROS reduces this trigger signal. The dicarboxylic acid backbone is the proposed pharmacophore for radical quenching, though the precise radical chemistry is less well-characterised than for dedicated antioxidants such as [[ascorbic-acid]] [^fitton1991]. #gap/no-mechanism (the relative in-vivo contribution of ROS scavenging vs. KLK5 inhibition to the overall anti-rosacea effect has not been formally dissected)

### 3. Tyrosinase inhibition — depigmenting mechanism

Azelaic acid is a **competitive inhibitor of tyrosinase** (EC 1.14.18.1), the rate-limiting enzyme of the melanogenesis pathway (tyrosine → L-DOPA → dopaquinone → eumelanin/pheomelanin). Its key feature is **selectivity for hyperactive or abnormally proliferating melanocytes**, as in melasma lesions and post-inflammatory hyperpigmentation, while having minimal effect on normally active melanocytes in surrounding skin [^fitton1991]. At therapeutic topical concentrations, azelaic acid inhibits tyrosinase preferentially in cells with elevated tyrosinase expression, reducing melanin synthesis in dysregulated melanocytes without broad depigmentation of healthy skin.

This mechanism is distinct from the dopaquinone-reduction mechanism of [[ascorbic-acid]] and the PAR-2-mediated melanin-transfer inhibition of [[niacinamide]] — all three operate at different steps of the melanogenesis pathway and are mechanistically complementary:

| Melanogenesis step | Agent | Mechanism |
|---|---|---|
| Tyrosinase activity (rate-limiting) | Azelaic acid, kojic acid, arbutin | Competitive enzyme inhibition — upstream |
| Dopaquinone → L-DOPA recycling | [[ascorbic-acid]] | Reduction of melanin intermediates — upstream |
| Melanosome transfer to keratinocytes | [[niacinamide]] | PAR-2 antagonism — post-synthesis |

King et al. 2023 (systematic review, 43 RCTs across conditions) confirmed favourable azelaic acid efficacy in melasma across multiple RCT comparators [^king2023].

Melanin pathway effects do not map to a López-Otín hallmark. The aging-relevant downstream phenotype is [[skin-aging]] (solar lentigines, dyspigmentation from cumulative photodamage).

### 4. Keratinization normalization and acne (distinct mechanism)

At the 20% concentration (Azelex), azelaic acid normalises abnormal follicular keratinization (reducing comedone formation) and exerts bacteriostatic activity against *C. acnes* by impairing its mitochondrial oxidoreductase chain. **This antibacterial/anti-comedonal mechanism is the dominant pharmacology for the acne indication and is distinct from the anti-rosacea KLK5/cathelicidin mechanism.** The two indications have separate pharmacological bases. Keratinization normalisation is not discussed further here as the page is scoped to the rosacea and aging-relevant mechanisms.

## Clinical evidence

### Rosacea

The rosacea evidence base for azelaic acid is among the strongest for any topical agent, with GRADE high-certainty evidence:

**van Zuuren et al. 2019** (Cochrane-style systematic review with GRADE; 152 studies, 20,944 participants): azelaic acid received **GRADE high-certainty** evidence for reducing inflammatory lesion count in papulopustular rosacea compared to vehicle control [^vanzuuren2019]. This is the highest GRADE assignment in the van Zuuren 2019 review for any rosacea topical (shared with ivermectin for its primary papulopustular endpoint and brimonidine for erythema).

**King et al. 2023** (systematic review; 43 RCTs across acne, rosacea, and melasma — no eligible skin aging RCTs were identified; 20 rosacea studies): meta-analyses demonstrated that azelaic acid significantly improved erythema severity, inflammatory lesion counts, overall improvement, and treatment success vs vehicle at 12 weeks; azelaic acid was more effective than metronidazole 0.75% for erythema severity, overall improvement, and inflammatory lesion counts [^king2023].

**Gao & Xiang 2025** (systematic review and meta-analysis; 21 RCTs; six topical rosacea agents evaluated by network meta-analysis): ivermectin was ranked most effective, followed by azelaic acid ranked above metronidazole; all agents demonstrated good tolerability with manageable adverse events [^gao2025]. Azelaic acid remains a valid option in the post-ivermectin era for patients where ivermectin is unavailable, not tolerated, or when concurrent PIH/melasma favours a depigmenting agent.

**Active trials (ClinicalTrials.gov, 2026-06-27):** 2 trials currently RECRUITING or ACTIVE_NOT_RECRUITING — one in breast cancer patients undergoing radiation (radiation-induced skin effects; n=33 estimated; NCT06966388) and one for Central Centrifugal Cicatricial Alopecia (CCCA; n=18 actual; NCT05416333). Neither is a rosacea or aging-specific trial.

### Melasma and post-inflammatory hyperpigmentation

Azelaic acid 20% cream has been compared to hydroquinone (4% in older RCTs; 2% in King 2023) and kojic acid in multiple trials and is generally equivalent or superior in efficacy with a better tolerability profile — lower risk of ochronosis and rebound hyperpigmentation than hydroquinone. King 2023 (7 melasma studies) found AA 20% significantly better than hydroquinone 2% for global improvement and better than vehicle for both severity and global improvement [^king2023]. Note: whether the advantage over HQ 4% (the European/historical standard) is comparable has not been resolved in a single well-powered head-to-head trial. #gap/needs-replication

## Aging relevance

Azelaic acid's most direct aging relevance is as a **rosacea treatment in the context of aged skin**, where two pathologies converge:

1. **Cathelicidin dysregulation amplified by UV damage and cellular senescence.** Cumulative photodamage drives progressive dysregulation of the dermal innate immune tone: UV → ROS → cathelicidin promoter activation and KLK5 induction → chronically elevated LL-37. Senescent dermal fibroblasts and endothelial cells (SASP: IL-1β, IL-6, VEGF — see [[chronic-inflammation]] and [[cellular-senescence]]) may lower the threshold for mast cell degranulation and amplify rosacea severity in older adults. Azelaic acid's KLK5 suppression addresses the proximal cathelicidin driver upstream. Whether its anti-inflammatory activity also modulates SASP output from senescent cells in aged rosacea skin is **entirely untested** — this is the key mechanistic gap for its aging-wiki framing. #gap/no-mechanism

2. **Solar lentigines and dyspigmentation.** Tyrosinase inhibition in hyperactive melanocytes is directly applicable to age-associated dyspigmentation from cumulative photodamage. Topical azelaic acid complements [[ascorbic-acid]] (melanin-precursor reduction) and [[niacinamide]] (melanin transfer inhibition) in combinatorial depigmenting protocols for age spots and solar lentigines. Photoprotection remains foundational to prevent recurrence regardless of which agent is used.

See [[rosacea]] § aging relevance for the full argument connecting cumulative UV, cellular senescence, and rosacea severity in the aged dermis.

## Hallmark mapping

| Hallmark | Mechanism of contribution |
|---|---|
| [[chronic-inflammation]] | Primary target: KLK5/cathelicidin axis suppression reduces NF-κB-driven sterile inflammation in rosacea; antioxidant ROS quenching reduces UV-triggered cathelicidin induction; GRADE high-certainty clinical evidence for papulopustular rosacea |

Tyrosinase inhibition and depigmenting activity map to [[skin-aging]] (aging-associated phenotype) rather than to a López-Otín cellular-damage hallmark.

## Pharmacokinetics (topical)

- **Systemic absorption:** limited — <4% of applied dose penetrates intact skin at therapeutic concentrations; predominantly locally active in the stratum corneum and epidermis; clinical plasma levels negligible.
- **Vehicle matters:** the 15% gel (Finacea) vs 20% cream (Azelex) differ in follicular penetration kinetics; gel vehicle formulated for enhanced follicular delivery relevant to papulopustular phenotype.
- **Metabolism:** primarily beta-oxidation and omega-oxidation to shorter dicarboxylic acids (suberic C8, adipic C6, succinic C4 acids); minor renal excretion of unchanged drug at topical doses.
- **Half-life:** not clinically relevant for a twice-daily topical — systemic exposure is too low for meaningful PK characterisation [^fitton1991].
- **Local concentration in the stratum corneum at therapeutic doses** has not been directly measured; #gap/dose-response-unclear for the in-situ pharmacokinetics at the KLK5-active compartment.

## Limitations and gaps

1. **Mechanism dissection incomplete.** The relative contribution of KLK5 inhibition vs. ROS scavenging vs. direct NF-κB suppression to clinical anti-rosacea efficacy has not been formally dissected. Coda 2013 established KLK5/cathelicidin reduction as a correlate of treatment but did not demonstrate which pharmacological property of azelaic acid drives KLK5 inhibition at the molecular level. #gap/no-mechanism

2. **Senescent-cell SASP interaction untested.** Whether azelaic acid's anti-inflammatory activity affects SASP output from senescent dermal fibroblasts or endothelial cells in aged rosacea skin is unknown. This is the most impactful mechanistic gap for the aging-wiki framing. #gap/no-mechanism

3. **No aging-specific RCT.** All pivotal rosacea and melasma RCTs enrolled predominantly 30–60-year-olds. No trial has separately reported efficacy, tolerability, or mechanistic readout in patients aged ≥65. Treatment response in aged skin with reduced barrier function and higher SASP burden may differ. #gap/long-term-unknown

4. **Ivermectin now ranked superior in head-to-head data.** The Gao 2025 meta-analysis and prior data position ivermectin 1% cream as more effective than azelaic acid for papulopustular rosacea, consistent with ivermectin's dual mechanism (anti-Demodex + anti-KLK5/cathelicidin). Azelaic acid is not obsolete — it adds depigmenting activity useful when PIH coexists and avoids topical anti-parasitic exposure — but the current evidence hierarchy places it second-line to ivermectin for the pure papulopustular phenotype. #gap/contradictory-evidence — the relative weighting should be re-evaluated as additional head-to-head RCT data accumulate post-2025.

5. **DrugBank record confirmed.** DrugBank ID DB00548 is confirmed: PubChem CID 2266 cross-reference registry returns DB00548 as a RegistryID for azelaic acid (direct DrugBank.com was inaccessible during seeding, but PubChem cross-reference is authoritative).

6. **Tyrosinase inhibition primary study not cited.** The primary experimental evidence for azelaic acid's selective antiproliferative effect on hyperactive melanocytes (Nazzaro-Porro and colleagues, 1970s–1980s) is documented in the Fitton & Goa 1991 review [^fitton1991] but the individual primary experimental studies were not verified during seeding (older literature, limited DOI availability). #gap/needs-replication — cite primary Nazzaro-Porro papers when tyrosinase mechanism claims are verified.

## Cross-references

- [[rosacea]] — primary phenotype page; cathelicidin/KLK5 mechanistic axis, therapeutic landscape, and GRADE evidence summary
- [[camp]] — cathelicidin precursor (hCAP-18) protein; target of azelaic acid's KLK5-mediated mechanism; rosacea overactivation vs. aging-skin insufficiency polarity documented there
- [[ll-37]] — the active LL-37 cathelicidin peptide whose generation from hCAP-18 is attenuated by azelaic acid
- [[erythema]] — vascular redness phenotype; azelaic acid addresses the inflammatory but not the structural-vascular (telangiectatic) component
- [[skin-aging]] — downstream phenotype for tyrosinase-inhibition/depigmenting use; solar lentigines, melasma, dyspigmentation
- [[chronic-inflammation]] — primary aging hallmark; rosacea and cathelicidin biology sit here
- [[niacinamide]] — complementary topical depigmenting agent (PAR-2-mediated melanin transfer inhibition vs. tyrosinase synthesis inhibition)
- [[ascorbic-acid]] — complementary antioxidant and melanin-precursor-reduction mechanism
- [[skin-microbiome-aging-shifts]] — Demodex and *Malassezia* microbiome context; azelaic acid referenced there for rosacea

## Footnotes

[^coda2013]: doi:10.1016/j.jaad.2013.05.019 · PMID 23871720 · PMC3910251 · Coda AB, Hata T, Miller J, Audish D, Kotol P, Two A, Shafiq F, Yamasaki K, Harper JC, Del Rosso JQ, Gallo RL · *J Am Acad Dermatol* 2013;69(4):570–577 · multicenter, prospective, open-label · n=60 enrolled/55 completed/49 analyzed (6 outliers excluded) · 16-week AzA 15% gel; three-component study: (a) in-vitro human keratinocytes — KLK5 protein inhibited at 10^-8 mol/L; (b) mouse skin (9-day topical) — Klk5 mRNA significantly reduced (P=0.019); (c) human rosacea patients — CAMP mRNA decreased (Friedman ANOVA, significant by week 4); KLK5 mRNA decreased; SPA significantly reduced in high-baseline-SPA patients only (n=21, r²=0.79, P=0.0008); no significant SPA reduction in low-baseline patients (n=28, P=0.53) · provides mechanistic rationale for the FDA-approved rosacea indication · limitation: study size insufficient to predict clinical efficacy from innate-immune response · 127 citations

[^vanzuuren2019]: doi:10.1111/bjd.17590 · PMID 30585305 · van Zuuren EJ, Fedorowicz Z, Tan J, van der Linden MMD, Arents BWM, Carter B, Charland L · *British Journal of Dermatology* 2019;181(1):65–79 · Cochrane systematic review update with GRADE · 152 studies, 20,944 participants (mean age 48.6 yr; 85% female); phenotype-based review; azelaic acid GRADE **high certainty** for papulopustular rosacea: participant-assessed improvement RR 1.40 (95% CI 1.28–1.53; I²=0%; NNTB 6; 6 studies); lesion count MD −3.00 (95% CI −4.13 to −1.86; I²=9%); erythema slightly reduced (physician-assessed, high certainty); azelaic acid vs. metronidazole: contradictory data across 3 studies, moderate certainty, slight non-significant advantage for azelaic acid

[^gao2025]: doi:10.1016/j.ad.2024.12.026 · PMID 40246142 · Gao X, Xiang W · *Actas Dermosifiliogr* 2025;116(8):863–875 · meta-analysis · 21 RCTs; network meta-analysis of 6 topical rosacea drugs; ivermectin ranked most effective; azelaic acid > metronidazole; all agents well-tolerated · **abstract-only verification** (DOI confirmed by Crossref + esummary)

[^king2023]: doi:10.1111/jocd.15923 · PMID 37550898 · King S, Campbell J, Rowe R, Daly ML, Moncrieff G, Maybury C · *J Cosmet Dermatol* 2023;22(10):2650–2662 · systematic review · 43 RCTs across acne, rosacea, and melasma (skin aging searched; no eligible RCTs found); 20 rosacea RCTs included; AzA significantly superior to metronidazole 0.75% for erythema severity, overall improvement, and inflammatory lesion counts; AA 20% significantly better than hydroquinone 2% for global improvement in melasma (7 melasma studies) · **abstract-verified** (full PDF not yet downloaded)

[^fitton1991]: PMID 1712709 · Fitton A, Goa KL · *Drugs* 1991;41(5):780–798 · review · comprehensive pharmacological review; documents selective antiproliferative and cytotoxic effect on hyperactive melanocytes (mitochondrial oxidoreductase inhibition + DNA synthesis inhibition at abnormal melanocytes); tyrosinase inhibition mechanism; antioxidant ROS scavenging; covers acne and hyperpigmentary indications · no confirmed DOI identified for this review in PubMed metadata; PMID confirmed via esummary · #gap/no-fulltext-access

[^yamasaki2007]: doi:10.1038/nm1616 · PMID 17676051 · Yamasaki K, Di Nardo A, Bardan A, Murakami M, Ohtake T, Coda A, Dorschner RA, Bonnart C, Descargues P, Hovnanian A, Morhenn VB, Gallo RL · *Nature Medicine* 2007;13(8):975–980 · in-vivo + in-vitro · model: human rosacea biopsies + mouse injection model · KLK5 and LL-37 overproduction established as rosacea pathogenesis mechanism; provides the foundational biology for the KLK5/cathelicidin axis that azelaic acid targets · cited here for axis biology; see [[rosacea]] for full footnote

[^demenonville2017]: doi:10.1007/s13555-017-0167-6 · PMID 28243927 · de Ménonville ST et al. · *Dermatol Ther (Heidelb)* 2017;7(2):249–262 · in-vitro + ex-vivo · topical ivermectin independently inhibits CAMP, KLK5, CXCL1, and TNF-α in keratinocytes; cited here to confirm that KLK5/cathelicidin is a pharmacologically tractable axis via more than one agent
