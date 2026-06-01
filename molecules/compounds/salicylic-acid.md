---
type: compound
aliases: [2-hydroxybenzoic acid, o-hydroxybenzoic acid, BHA, beta-hydroxy acid, salicylate, SA]
pubchem-cid: 338
inchikey: YGSDEFSMJLZEOE-UHFFFAOYSA-N
chembl-id: CHEMBL424
drugbank-id: DB00936
cas-number: 69-72-7
biologic: false
molecular-formula: C7H6O3
molecular-weight-da: 138.12
mechanisms: [corneocyte-desquamation, sebaceous-follicle-penetration, anti-inflammatory]
targets: []
hallmarks: ["[[loss-of-proteostasis]]", "[[chronic-inflammation]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Head-to-head RCT of 30% salicylic acid peel vs 50% glycolic acid peel for composite photoaging score (collagen density by ultrasound, melanin index, TEWL) over 4 months; powered at n≥60 per arm; aged skin biopsy subset for collagen-I IHC and AMPK/SREBP1 pathway markers."
clinical-trials-active: null
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Canonical identity fields verified against PubChem REST (CID 338; all fields confirmed). Lu 2019 (AMPK/SREBP1): abstract-only; closed-access (not_oa). Liu 2020 Cochrane: abstract + PMC full text (PMC7193765); body wording corrected to match review's exact language. Ravikumar 2022: abstract confirmed via PubMed efetch (PMID 35309278); framing verified. Zhou 2025 (SSA RCT): abstract-only; closed-access (not_oa). Alvarez 2025 Delphi: abstract-only; closed-access. Intervention-classes.md keratolytic/BHA-exfoliation class confirmed present and correctly attributed. DrugBank DB00936 and ChEMBL CHEMBL424 not independently re-queried — recommend cross-check on next lint pass."
---

# Salicylic acid

The prototypic **beta-hydroxy acid (BHA)** in topical dermatology. A naturally occurring phenolic compound found in willow bark, wintergreen oil, and many plant species; the structural parent of aspirin (acetylsalicylic acid). FDA-approved for acne as an OTC monograph ingredient since 1972 (0.5–2% cosmetic concentrations) and used as a medical-grade chemical peel agent (20–30%). The defining pharmacological property distinguishing salicylic acid from the alpha-hydroxy acid (AHA) class — [[glycolic-acid]] and [[lactic-acid]] — is its **lipid solubility**: a logP of ~2.3 enables preferential partitioning into the sebaceous follicle and stratum corneum lipid lamellae, compartments that water-soluble AHAs cannot reliably penetrate.

**Critical disambiguation:** Salicylic acid is structurally related to aspirin (acetylsalicylic acid) but is a separate clinical agent. Topical salicylic acid exerts local corneolytic and anti-inflammatory effects with low systemic absorption at standard cosmetic doses; aspirin inhibits platelet COX-1 systemically via irreversible acetylation — a mechanism that topical salicylate does not replicate. Do not conflate the two in clinical or mechanistic reasoning.

## Identity

- **PubChem CID:** 338
- **InChIKey:** YGSDEFSMJLZEOE-UHFFFAOYSA-N
- **CAS:** 69-72-7
- **ChEMBL:** CHEMBL424
- **DrugBank:** DB00936
- **Molecular formula:** C₇H₆O₃
- **Molecular weight:** 138.12 Da
- **Canonical SMILES:** `C1=CC=C(C(=C1)C(=O)O)O`
- **IUPAC name:** 2-hydroxybenzoic acid
- **Class:** aromatic beta-hydroxy acid; benzoic acid derivative
- **logP (XLogP3):** 2.3 (lipophilic relative to AHAs; logP(glycolic acid) ≈ −1.1; logP(lactic acid) ≈ −0.6)
- **pKa:** 2.97 (carboxylic acid); the phenolic -OH pKa is ~13.4 (non-ionisable at skin-relevant pH)
- **Topological polar surface area:** 57.5 Å²
- **Hydrogen bond donors / acceptors:** 2 / 3

**Natural sources:** willow bark (*Salix* spp.), wintergreen oil (methyl salicylate → hydrolysed to SA in vivo), many fruits and vegetables at trace concentrations.

## Structure and chemistry

Salicylic acid is **ortho-hydroxybenzoic acid**: an aromatic benzene ring bearing a hydroxyl group (-OH) at the 2-position and a carboxylic acid (-COOH) at the 1-position. The intramolecular hydrogen bond between the ortho -OH and the carboxylate partially stabilises the carboxylate and influences acidity (pKa 2.97, slightly more acidic than benzoic acid pKa 4.2).

The **aromatic ring** is the key structural differentiator from AHAs:
- AHAs (glycolic, lactic, mandelic) are linear or branched aliphatic acids — polar, water-soluble (logP < 0).
- Salicylic acid's benzene ring provides hydrophobicity that allows it to penetrate lipid-rich compartments (sebum, lipid lamellae of the stratum corneum) that AHAs cannot reach.

Activity is **pH-dependent** because only the unionised acid (free -COOH) penetrates lipid membranes efficiently. At formulation pH 3–4, a significant fraction remains unionised (given pKa 2.97); this must be balanced against irritation risk from low pH on the skin surface.

## Mechanism of action

### Corneocyte desquamation

At physiological skin pH, salicylic acid disrupts the intercorneocyte cohesion that normally holds the stratum corneum in place, accelerating shedding of surface corneocyte layers. The precise mechanism of SA-mediated desquamation has not been resolved to the same degree as AHA calcium chelation; proposed mechanisms include direct disruption of corneodesmosomal proteins and modification of intercellular lipid-lamellar organisation. The net result is thinning of the stratum corneum, smoother skin texture, and improved surface appearance — a mechanism shared in general terms with AHAs but operating preferentially in the lipid-rich follicular and lamellar compartments.

### Sebaceous follicle penetration

The lipid solubility of salicylic acid allows preferential partitioning into sebaceous follicles — the sebum-filled hair follicle channels that, when obstructed, form microcomedones (precursors to both acne comedones and dilated pores). This gives salicylic acid a pharmacological advantage over AHAs specifically in:
- **Comedolytic activity** — breaking down comedonal plugs
- **Sebum regulation** — within sebocytes, salicylic acid suppresses lipogenesis by downregulating the AMPK/SREBP1 pathway, reducing sebocyte lipid production [^lu2019]
- **Anti-acne activity** at concentrations not achievable by water-soluble acids in the same compartment

### Anti-inflammatory activity

At cosmeceutical concentrations (0.5–2%), salicylic acid exhibits weak inhibition of cyclooxygenase-1 (COX-1), reducing prostaglandin production locally. This anti-inflammatory activity is mechanistically related to aspirin's COX inhibition but operates at much lower potency and without the irreversible acetylation that accounts for aspirin's anti-platelet effect. The anti-inflammatory contribution is considered secondary to the keratolytic mechanism in standard clinical use, but may contribute to the lower rate of post-inflammatory hyperpigmentation (PIH) seen with salicylic acid peels versus glycolic acid peels in comparative studies.

### Higher-concentration (peel) mechanism

At 20–30% concentrations used in medical-grade chemical peels, salicylic acid penetrates to the papillary dermis, triggering a controlled wound-healing cascade (keratinocyte proliferation, dermal fibroblast activation, procollagen upregulation). The 2025 RCT by Zhou et al. showed that a 4-month SSA (supramolecular salicylic acid, a cyclodextrin-complexed formulation) peel regimen increased collagen density and skin elasticity in photodamaged skin [^zhou2025]. This dermally-directed effect is analogous to, though distinct in mechanism from, the retinoid-mediated collagen induction achieved by [[tretinoin]].

## Clinical indications

### Acne vulgaris

The canonical indication. Salicylic acid has been an FDA OTC monograph acne ingredient since 1972. At 0.5–2% in leave-on formulations (cleansers, toners, spot treatments), it reduces comedone formation via follicular penetration and mild exfoliation. The 2020 Cochrane systematic review found "there may be little or no difference between salicylic acid and tretinoin" for acne outcomes (RR 1.00, 95% CI 0.92–1.09; n=46; outcome: participants' global self-assessment of moderate to excellent improvement), with evidence quality rated "low" for this comparison — indicating insufficient trial quality rather than demonstrated inefficacy [^liu2020]. The sebocyte AMPK/SREBP1 mechanism (Lu 2019) provides molecular support for a direct anti-sebogenic effect independent of surface exfoliation [^lu2019]. #gap/needs-replication — the AMPK/SREBP1 pathway mechanism awaits independent confirmation in human sebocytes in vivo.

### Photoaging and skin aging

Medical-grade salicylic acid peels (20–30%) are used for photoaging reversal — reducing fine lines, solar lentigines, and rough texture — typically as a series of treatments every 2–4 weeks. Clinical evidence:

- **Zhou 2025 RCT** (n=36, double-blind, randomised): 30% SSA applied biweekly + 2% SSA daily for 4 months to photodamaged hands. Primary outcome: significant increase in collagen density and skin elasticity by ultrasound measurement; improved dermal thickness, reduced melanin index, reduced TEWL. Patient satisfaction 98% at endpoint; no adverse events [^zhou2025]. Note: SSA (supramolecular/cyclodextrin-complexed) has enhanced follicular delivery vs. standard SA formulations — the magnitude of collagen benefit may differ for non-complexed SA peels.

- **Delphi consensus 2025** (26 cosmetic dermatologists, JAAD): salicylic acid endorsed for "acne, oily skin" by expert consensus; not specifically listed as a first-line photoaging agent (retinoids and AHAs ranked above SA for photoaging in the consensus) [^alvarez2025]. This is consistent with the limited head-to-head comparison data.

#gap/needs-replication — the Zhou 2025 SSA photoaging RCT (n=36) has not been independently replicated; the SSA formulation is not identical to standard SA peels.

### AHA vs BHA peel comparison for post-acne pigmentation

Ravikumar 2022 head-to-head RCT (n=40, double-blind): 50% glycolic acid (GA) peel vs. 30% salicylic acid (SA) peel for post-acne pigmentation, biweekly x 6 weeks. GA peel showed significantly greater pigmentation reduction than SA peel across all four follow-up time points (45% of GA group vs. 0% of SA group achieved >75% reduction, p<0.0001). Conclusion: for **post-acne hyperpigmentation specifically**, AHA (glycolic acid) outperforms BHA (salicylic acid) [^ravikumar2022]. This is consistent with the mechanistic framing: glycolic acid's epidermal exfoliation reaches the melanin-rich basal layer more efficiently than SA for pigmentary endpoints.

**This represents a discordance with the general clinical framing that "SA is lower-PIH-risk than AHA":** the latter refers to *treatment-induced* PIH after peeling (SA causes less treatment-associated PIH in darker skin types), while the Ravikumar data address *pre-existing* post-acne PIH reduction (where GA's superior exfoliant depth is an advantage). Both observations are internally consistent. #gap/contradictory-evidence is not the appropriate tag; the distinction is indication-specific.

### Other indications

- **Seborrheic dermatitis and scalp conditions** — keratolytic action reduces scaling; used as a shampoo ingredient (1–3%).
- **Plantar warts** — high concentration (17–40%) paint or plaster preparations; direct keratolytic destruction of hyperkeratotic tissue over weeks.
- **Acne scars (atrophic)** — medical peel (20–30%); limited comparative data vs. other peel types.
- **Ichthyosis and psoriasis** — keratolytic adjunct at 2–6%.

## BHA vs AHA — comparative table

| Property | Salicylic acid (BHA) | Glycolic acid (AHA) | Lactic acid (AHA) |
|---|---|---|---|
| logP | ~2.3 (lipophilic) | ~−1.1 (hydrophilic) | ~−0.6 (hydrophilic) |
| Follicle penetration | High | Minimal | Minimal |
| Mechanism | Corneodesmosomes + sebaceous lipogenesis | Calcium chelation → desmosomal disruption | Calcium chelation + humectancy |
| Anti-inflammatory | Yes (weak COX-1) | No | No |
| Best indication | Acne, oily skin, comedonal skin | Photoaging, uneven texture, surface pigment | Dry + aging skin (dual exfoliant + humectant) |
| PIH risk (treatment-induced) | Lower (especially in Fitzpatrick IV–VI) | Higher | Intermediate |
| Humectant co-effect | No | No | Yes (NMF component) |
| OTC concentration | 0.5–2% | 5–10% | 5–10% |
| Medical peel concentration | 20–30% | 30–70% | 30–70% |

See [[glycolic-acid]] and [[lactic-acid]] for dedicated AHA pages.

## Salicylism — systemic toxicity caveat

Salicylate toxicity ("salicylism") — manifesting as tinnitus, high-frequency hearing loss, nausea, GI distress, and at severe levels respiratory alkalosis — can result from systemic absorption of topical salicylic acid when applied to large body surface areas (BSA) at high concentrations. Risk factors:
- Large BSA treatment (>20% BSA), particularly with occlusion (e.g., whole-body application in psoriasis treatment)
- High concentration formulations (>6%)
- Impaired hepatic or renal metabolism
- Children (higher BSA-to-weight ratio; lower hepatic conjugation capacity)
- Concomitant systemic aspirin or NSAID use (additive salicylate load)

At standard cosmeceutical concentrations (0.5–2% applied to face), systemic absorption is negligible and salicylism risk is not clinically meaningful. Medical peel concentrations (20–30%) applied to limited areas also carry very low systemic risk in routine practice. The risk is specific to widespread chronic application of high-concentration formulations.

## Pregnancy considerations

Topical salicylic acid at low concentrations (≤2%) is generally considered acceptable during pregnancy by most dermatology guidelines, based on negligible systemic absorption and absence of documented teratogenicity at cosmetic doses. **High-concentration medical peels (20–30%) are typically avoided during pregnancy** due to: (1) theoretical systemic absorption risk over large surface areas; (2) pharmacological analogy to oral aspirin (Category D in later pregnancy at analgesic doses). Concomitant systemic aspirin or NSAID use during medical peels should be disclosed to the practitioner due to additive salicylate exposure risk.

#gap/long-term-unknown — No dedicated human study has quantified systemic salicylate levels from standard-concentration topical salicylic acid use during pregnancy; the safety recommendation is based on pharmacokinetic reasoning and extrapolation from oral aspirin data.

## Tolerability and safety

**Cosmeceutical concentrations (0.5–2%)**
- Well-tolerated in the majority of skin types
- Common reactions: mild stinging, transient erythema
- Dryness and mild desquamation are expected pharmacological effects
- Lower post-inflammatory hyperpigmentation (PIH) risk than glycolic acid peels — salicylic acid has a recognised safety advantage for Fitzpatrick IV–VI skin types #gap/contradictory-evidence (note: the Ravikumar 2022 RCT showed glycolic acid outperforms SA for pre-existing PIH reduction, but the PIH-safety advantage of SA refers to *treatment-induced* PIH — a different clinical question; see above)
- No known systemic toxicity at these concentrations from standard cosmetic use

**Medical-grade peels (20–30%)**
- Expected: erythema, exfoliation, transient burning sensation during application
- Transient post-peel sensitivity and erythema (1–3 days)
- Frosting at high concentrations (less characteristic than TCA peels but can occur)
- PIH possible, particularly in darker skin types — though less common than with comparable glycolic acid peel concentrations

**Drug interactions**
- Additive systemic salicylate load with aspirin/NSAIDs (clinically relevant only with large-BSA or high-concentration topical use)
- No documented interactions with common topical actives (retinoids, niacinamide, vitamin C) at standard cosmeceutical concentrations

## Effects on aging hallmarks

| Hallmark | Effect | Evidence |
|---|---|---|
| [[loss-of-proteostasis]] | Corneocyte desquamation restores normal stratum corneum turnover kinetics disrupted in aged/photodamaged skin; peel concentrations trigger procollagen upregulation via wound-healing cascade | [^zhou2025] (peel, n=36 RCT) |
| [[chronic-inflammation]] | Weak COX-1 inhibition reduces local prostaglandin production; lower PIH incidence vs AHAs suggests reduced post-treatment inflammatory burden | mechanistic; no direct IL quantification study identified |

## Classification

- **SENS strategy:** No direct SENS category mapping. Closest: ectodermal and proteostatic damage repair (extracellular context).
- **Hallmark target:** [[loss-of-proteostasis]], [[chronic-inflammation]]
- **Intervention class:** keratolytic / BHA exfoliation (see `frameworks/intervention-classes.md`)
- **FDA status:** OTC monograph (acne, 0.5–2%); medical-grade peel (physician use); salicylic acid also has FDA-approved prescription formulations for psoriasis/seborrheic dermatitis

## Relation to aspirin and systemic salicylates

Aspirin (acetylsalicylic acid) is the **acetylated** derivative of salicylic acid; once absorbed, aspirin is rapidly deacetylated to salicylate in plasma. The key mechanistic distinction:
- **Aspirin** irreversibly acetylates COX-1 Ser530 → permanent loss of platelet COX-1 activity for the platelet's lifespan (~7–10 days) → anti-platelet aggregation
- **Salicylic acid** reversibly inhibits COX-1 with weaker potency, without acetylation → no anti-platelet effect at topical doses

Topical salicylic acid shares some anti-inflammatory pharmacology with aspirin via the salicylate backbone but lacks the anti-platelet, anti-pyretic, and anti-inflammatory dosing achievable with systemic aspirin. These are pharmacologically separate agents used for different indications.

For systemic aging-relevant uses of aspirin (anti-inflammatory / ASCVD prevention / proposed senomorphic effect), see the aspirin compound page (not yet seeded — `[[aspirin]]` is an implicit stub). #gap/stub

## Limitations and gaps

- **Mechanism granularity for desquamation:** The molecular target within corneodesmosomes for SA-mediated cohesion disruption has not been as precisely mapped as the AHA calcium-chelation mechanism. #gap/no-mechanism
- **AMPK/SREBP1 sebocyte mechanism:** Lu 2019 is a single in-vitro + animal study (n not stated in abstract). Independent replication in human sebocytes in vivo would strengthen this mechanism. #gap/needs-replication
- **SSA (supramolecular) vs standard SA formulations:** the Zhou 2025 photoaging RCT used cyclodextrin-complexed SSA, which has enhanced follicular delivery. Whether standard SA peels produce equivalent collagen density increases is unknown. #gap/needs-replication
- **Direct head-to-head RCT vs retinoids for photoaging** has not been conducted. The Delphi consensus (Alvarez 2025) places retinoids above SA for photoaging, but this reflects clinical experience rather than controlled trial data. #gap/needs-replication
- **Hallmark quantification:** no study has measured how SA peels alter epigenetic aging clocks (e.g., Horvath methylation clock in skin biopsies) or directly quantified hallmark-level changes in aging skin (p16+ senescent cell burden, mitochondrial function).
- **Long-term safety beyond standard cosmetic use:** well-established. Long-term systemic safety at medical-peel use frequency in healthy aging is not specifically studied, though the clinical record over decades supports safety. #gap/long-term-unknown (formal trial context only)

## Footnotes

[^lu2019]: doi:10.1111/exd.13934 · Lu J, Cong T, Wen X, Li X, Du D, He G, Jiang X · *Exp Dermatol* 2019;28(7):786-791 · in-vitro (SEB-1 sebocytes) + in-vivo (acne mouse model) · n not specified in abstract · study design: mechanistic preclinical · reports SA suppresses sebocyte lipogenesis via AMPK/SREBP1 downregulation, reduces NF-κB inflammatory signalling, and increases apoptosis via death receptor pathway in sebocytes; in-vivo: reduced inflammatory cytokines around acne lesions · **abstract-only verification 2026-05-19 — local PDF not available (closed-access, not_oa in archive)**

[^liu2020]: doi:10.1002/14651858.CD011368.pub2 · Liu H, Yu H, Xia J, Liu L, Liu GJ, Sang H, Peinemann F · *Cochrane Database Syst Rev* 2020;3:CD011368 · meta-analysis / systematic review · covers azelaic acid, salicylic acid, nicotinamide, sulphur, zinc, AHAs for acne · SA vs tretinoin: "there may be little or no difference" (RR 1.00, 95% CI 0.92–1.09; n=46; PGA outcome) with evidence quality rated "low" for this comparison · PMC7193765 (OA via PMC) · **PMC full text verified 2026-05-19**

[^zhou2025]: doi:10.1007/s00266-024-04180-1 · Zhou H, Qiao S, Zhao X, Zeng W · *Aesthetic Plast Surg* 2025;49(1):314-321 · rct · n=36 (photodamaged hands) · double-blind, randomised, placebo-controlled · 30% SSA biweekly + 2% SSA daily × 4 months · primary outcome: collagen density and skin elasticity by ultrasound; significant improvement vs. baseline; 98% patient satisfaction; no adverse events · **abstract-only verification 2026-05-19 — local PDF not available (closed-access, not_oa in archive)** · Note: SSA = supramolecular (cyclodextrin-complexed) SA; results may not fully generalise to standard SA peels

[^ravikumar2022]: PMID 35309278 · Ravikumar B, Indradevi R, Pillai D · *J Clin Aesthet Dermatol* 2022;15(1):48-52 · rct · n=40 (post-acne pigmentation; 20 per arm) · double-blind · 50% glycolic acid vs 30% salicylic acid peel, biweekly × 6 weeks · GA peel significantly superior to SA peel for PIH reduction across all follow-up points (45% vs 0% achieving >75% reduction; p<0.0001) · **abstract-only verification 2026-05-19 — DOI not provided in PubMed record; PMID confirmed**

[^alvarez2025]: doi:10.1016/j.jaad.2025.04.021 · Alvarez GV et al. (26 authors) · *J Am Acad Dermatol* 2025 · consensus/expert panel · Delphi method, 26 cosmetic dermatologists · SA endorsed for "acne, oily skin"; retinoids and AHAs ranked higher than SA for photoaging endpoints · **abstract-only verification 2026-05-19 — local PDF not available (closed-access)**
