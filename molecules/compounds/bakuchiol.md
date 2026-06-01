---
type: compound
aliases: ["(+)-bakuchiol", "4-[(1E,3S)-3-ethenyl-3,7-dimethylocta-1,6-dienyl]phenol", babchi extract, meroterpene retinol alternative]
pubchem-cid: 5468522
chembl-id: CHEMBL262344
drugbank-id: null
cas-number: 10309-37-2
inchikey: LFYJSSARVMHQJB-QIXNEVBVSA-N
molecular-formula: C18H24O
molecular-weight-da: 256.4
biologic: false
mechanisms: [antioxidant, extracellular-matrix-remodeling, anti-inflammatory]
targets: ["[[dermal-fibroblasts]]"]
hallmarks: ["[[loss-of-proteostasis]]", "[[genomic-instability]]", "[[chronic-inflammation]]"]
clinical-stage: supplement
human-evidence-level: limited
translation-gap: phase-3-rct-needed
next-experiment: "Adequately powered (n≥200) 24-week placebo-controlled RCT of bakuchiol 0.5% monotherapy vs tretinoin 0.025% in photoaged skin with skin biopsy endpoints (MMP-1 protein, procollagen type I mRNA, p16+ dermal fibroblast count) to confirm mechanism and determine whether functional retinoid-pathway engagement occurs independently of the vehicle/tolerability advantage."
clinical-trials-active: 0
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "PubChem CID 5468522 + InChIKey + molecular formula verified against PubChem REST API. ChEMBL corrected from CHEMBL2364604 (buparlisib HCl — wrong compound) to CHEMBL262344 (bakuchiol). CAS 10309-37-2 confirmed from PubChem synonyms list and added. Dhaliwal 2019 (doi:10.1111/bjd.16918, PMID 29947134): abstract + Crossref metadata verified — n=44, bakuchiol 0.5% b.i.d. vs retinol 0.5% q.d. × 12 wk, non-inferiority on wrinkle/pigmentation, superior tolerability — all consistent with wiki. Na Takuathung 2026 (doi:10.1111/srt.70310): full PDF verified — n=80 (40/40), all quantitative values (MDs, CIs, p-values) confirmed correct. Fanning 2024 PMID 38564402 confirmed; author order corrected in footnote. Chaudhuri 2014 (not_oa) and Puyana 2022 (not_oa) not PDF-verified; claims flagged as abstract-level. ClinicalTrials.gov 0 active trials confirmed. Supersession search: no meta-analysis or large RCT (n>100) on monotherapy bakuchiol superseding Dhaliwal 2019 identified through 2026-05-19."
---

# Bakuchiol

A naturally-occurring meroterpenoid phenol extracted from the seeds and leaves of *Psoralea corylifolia* (babchi; kustumburu), a plant long used in Ayurvedic and traditional Chinese medicine. Widely marketed as a "natural retinol alternative" for topical skin aging — a framing supported by clinical non-inferiority data (Dhaliwal 2019) and gene-expression studies (Chaudhuri 2014), but one that obscures an important distinction: bakuchiol is **not a structural retinoid**, does not contain a vitamin A backbone, and its molecular mechanism is incompletely characterized. #gap/no-mechanism

---

## Identity

| Field | Value |
|---|---|
| **PubChem CID** | 5468522 |
| **InChIKey** | LFYJSSARVMHQJB-QIXNEVBVSA-N |
| **Molecular formula** | C18H24O |
| **Molecular weight** | 256.4 Da |
| **Canonical SMILES** | CC(=CCC[C@@](C)(C=C)/C=C/C1=CC=C(C=C1)O)C |
| **CAS** | 10309-37-2 |
| **ChEMBL** | CHEMBL262344 |
| **DrugBank** | Not listed (cosmetic/botanical; no pharmaceutical monograph) |
| **Source plant** | *Psoralea corylifolia* (Fabaceae); seeds (primary commercial source) |
| **Chemical class** | Meroterpenoid — mixed phenolic + isoprenoid biosynthesis |

---

## Structure and chemistry

Bakuchiol is a **meroterpenoid**: a compound assembled from two biosynthetic pathways, yielding a para-hydroxyphenyl (phenolic) ring attached to an eight-carbon isoprenoid side chain. The phenolic hydroxyl group and the E-configured double bond are key pharmacophoric features. The molecule is:

- **Photostable** — unlike retinol (oxidizes under UV/visible light) and retinaldehyde, bakuchiol does not degrade on skin exposure to sunlight. This is a practical formulation advantage.
- **Oxygen-stable** — less prone to air oxidation than retinol, which is inactivated by prolonged atmospheric exposure.
- **Heat-stable** — compatible with broader formulation temperature ranges than retinol.
- **Lipophilic** — partitions into the stratum corneum and dermis; logP estimated ~4.5 (exact value not confirmed in PubChem; #gap/dose-response-unclear for percutaneous penetration data).

**What bakuchiol is NOT:** It bears no structural resemblance to vitamin A (all-trans retinol), retinaldehyde, retinoic acid (tretinoin), or synthetic retinoids (tazarotene, adapalene). Retinoids are diterpenoids with a specific polyene chain, beta-ionone ring, and polar terminal group that confers RAR/RXR nuclear receptor binding. Bakuchiol shares none of these features. The "retinol alternative" label is a functional/marketing claim based on outcome similarity, not chemical class membership.

---

## Mechanism of action

### Functional retinoid overlap — poorly characterized

Gene expression profiling in full-thickness skin substitutes (EpiDerm FT) showed that bakuchiol and retinol **both upregulate collagen types I, III, and IV, and aquaporin-3 in human dermal fibroblasts**, and that both compounds "regulated gene expression through retinoic acid receptor-dependent and independent pathways" [^chaudhuri2014]. Downstream consequences overlapping with the retinoid action profile include:

- Stimulation of collagen synthesis (types I and III — the structural collagens degraded in photoaging)
- Suppression of matrix metalloproteinases (MMP-1, MMP-3, MMP-9 — the enzymes responsible for collagen fragmentation in UV-exposed dermis)
- Improvement in epidermal cell turnover

Despite this transcriptomic overlap, **no direct RAR binding by bakuchiol has been demonstrated in validated receptor-binding assays**. The mechanistic route to gene-expression overlap is not established. Proposed but unconfirmed routes include:

1. Indirect RAR pathway activation via upstream signaling (e.g., ROS-mediated MAPK suppression → reduced c-Jun/c-Fos → reduced AP-1 → reduced MMP transcription)
2. Direct engagement of alternative nuclear receptors (PPARγ, AhR — speculative, no binding data)
3. Antioxidant quenching of ROS-driven MMP induction, mimicking the protective portion of retinoid action without RAR engagement

#gap/no-mechanism — Until dedicated receptor-binding studies or pathway-knockout cell models are published, the precise upstream mechanism remains unknown. The Chaudhuri 2014 "RAR-dependent and independent" claim is from a gene-expression study, not a receptor-binding experiment, and should not be interpreted as confirming RAR agonism.

### Anti-inflammatory and antioxidant activity

Bakuchiol is a direct free-radical scavenger via the phenolic hydroxyl group. In vitro studies show inhibition of lipid peroxidation, suppression of TNF-α and IL-1β production in lipopolysaccharide-stimulated macrophages, and inhibition of NF-κB activation. These activities likely contribute to its tolerability advantage over tretinoin (which provokes retinoid dermatitis through transcription-driven barrier disruption and inflammatory recruitment), but they are not sufficient to account for the collagen-synthesis endpoints [^puyana2022].

---

## Psoralea corylifolia — whole-plant extract vs. purified bakuchiol

This distinction is critical for safety and regulatory claims.

*Psoralea corylifolia* seeds contain bakuchiol **plus psoralens** (primarily psoralen, isopsoralen, and bavachinin — furanocoumarins). Psoralens are:

- **Photosensitizers**: they intercalate DNA and form covalent adducts under UV-A exposure (PUVA mechanism), dramatically increasing sunburn and phototoxic dermatitis risk.
- **Potential teratogens/mutagens**: psoralen DNA adducts are mutagenic in vitro; PUVA therapy (oral psoralen + UV-A) is teratogenic in animal models and carries a warning against use in pregnancy.
- **Phototoxic even at low levels**: topical psoralen exposure followed by sunlight causes severe erythema and blistering.

**Purified bakuchiol** is separated from psoralens during extraction. Commercial cosmetic-grade bakuchiol (e.g., Sytenol A from Sytheon) is specified to contain <0.001% psoralen content. Safety claims for bakuchiol must be made for the purified compound, not for whole-plant *P. corylifolia* extract.

#gap/needs-replication — No long-term safety data specifically for purified bakuchiol in pregnancy exists in adequately powered studies. One contact dermatitis case associated with a bakuchiol-containing formulation has been documented in the systematic review literature [^puyana2022]. Given the single-case report, the allergenicity risk appears low but cannot be dismissed.

---

## Clinical evidence

### Dhaliwal 2019 — head-to-head RCT vs. retinol (anchor study)

The pivotal clinical study to date [^dhaliwal2019]:

- **Design:** Prospective, randomized, double-blind, split-face (within-subject control)
- **n = 44** (randomized allocation to side)
- **Interventions:** Bakuchiol 0.5% cream twice daily vs. retinol 0.5% cream once daily
- **Duration:** 12 weeks
- **Outcomes:** High-resolution facial photography assessed at weeks 0, 4, 8, 12 by blinded dermatologist; patient-reported tolerability
- **Key results:**
  - Both bakuchiol and retinol **significantly decreased wrinkle surface area** and improved hyperpigmentation at 12 weeks — no statistically significant difference between groups on primary efficacy endpoints
  - Retinol group reported significantly **greater skin scaling and stinging** — the tolerability advantage for bakuchiol was the most robustly demonstrated finding
  - Interpretation: bakuchiol 0.5% b.i.d. is **non-inferior to retinol 0.5% q.d. on wrinkle and pigmentation endpoints at 12 weeks in photoaged skin**, with superior tolerability

**Critical caveats for extrapolation:**
- Split-face design controls within-subject variation but prevents independent group-level inference on absolute effect sizes; blinding fidelity is uncertain given that skin irritation was visibly different between sides.
- Comparator was retinol (precursor; requires enzymatic conversion to retinoic acid), not tretinoin (active retinoic acid). Tretinoin is the gold-standard pharmacological retinoid for photoaging. Non-inferiority to retinol does not imply non-inferiority to tretinoin.
- n=44 provides limited power for secondary endpoints; the trial was designed as a pilot.
- No biopsy endpoints; no MMP or collagen quantification. The mechanism of efficacy cannot be inferred from clinical photography alone.

### Chaudhuri 2014 — mechanistic in vitro + small clinical study

[^chaudhuri2014] reported comparable gene expression profiles for bakuchiol and retinol in EpiDerm FT skin substitutes, with collagen I, III, and IV upregulation and MMP suppression confirmed by ELISA in human dermal fibroblast cultures. A small 12-week clinical study using a finished bakuchiol formulation (precise concentration not reported in abstract) showed improvements in wrinkles, pigmentation, elasticity, and photodamage.

**Limitations:** The clinical component lacked a retinol comparator arm and did not specify sample size or statistical analysis in available abstract-level data. The gene expression study used artificial skin substitutes, not intact human skin. #gap/needs-replication

### Draelos 2020 — sensitive skin tolerability study

[^draelos2020] conducted a clinical evaluation of a bakuchiol-containing anti-aging moisturizer in n=subjects with sensitive skin (n not specified in available data), finding favorable tolerability and improvement in perceived skin aging. Formulation context limits comparison across studies (combination product with additional actives).

### Na Takuathung 2026 — RCT of genistein + bakuchiol + vitamins combination

[^natakuathung2026] randomized 80 men aged 45–65 to a GEN+ combination product (genistein + bakuchiol + vitamins) vs. placebo twice-daily for 12 weeks. Active group showed statistically significant improvements in cheek lightening (MD = 0.55; p = 0.04), skin color consistency (MD = −0.56; p = 0.03), and forehead spot count (MD = −0.60; p = 0.03), but no significant effect on wrinkle score, melanin index, or erythema. Adverse events were mild and self-resolving.

**Caveat:** Multi-ingredient formulation; impossible to attribute effects to bakuchiol specifically vs. genistein or vitamin co-ingredients.

### Systematic reviews (2022–2024)

- **Puyana 2022** [^puyana2022]: 30-article systematic review of bakuchiol dermatology literature (7 clinical trials, 16 preclinical studies, 3 commentaries, 2 reviews, 1 adverse event report). Concluded bakuchiol is a retinol alternative with anti-aging, antibacterial, and anti-inflammatory properties. Single contact dermatitis case documented. Authors note additional studies are warranted.
- **Fanning 2024** [^fanning2024]: 15-trial systematic review of topical bakuchiol for skin disorders. Critical finding: 12 of 15 trials **lacked blinding or control groups**; 10 used combination formulations; 4 did not specify bakuchiol concentration. Concluded the existing trial base has high risk of bias and does not permit meta-analysis. The Dhaliwal 2019 RCT is identified as the highest-quality study.
- **Lau 2024** [^lau2024]: Broader anti-aging cosmeceuticals systematic review in *Archives of Dermatological Research* (FWCI 18.99 — very high-impact for the field); bakuchiol covered as part of the retinoid-alternative class; consistent with above.

### Summary of human evidence quality

| Study | Design | n | Intervention | Duration | Quality | Key finding |
|---|---|---|---|---|---|---|
| Dhaliwal 2019 [^dhaliwal2019] | RCT, split-face, blinded | 44 | BAK 0.5% b.i.d. vs retinol 0.5% q.d. | 12 wk | Moderate | Non-inferior wrinkle/pigmentation; better tolerated |
| Chaudhuri 2014 [^chaudhuri2014] | In vitro + open-label clinical | NR | Finished bakuchiol product | 12 wk | Low | Collagen↑ MMP↓ in vitro; clinical improvement without irritation |
| Na Takuathung 2026 [^natakuathung2026] | RCT, parallel, blinded | 80 | GEN+ (bakuchiol + genistein + vitamins) | 12 wk | Moderate | Pigmentation + skin tone improvement; no wrinkle effect; combination confound |
| Draelos 2020 [^draelos2020] | Open-label clinical | NR | Bakuchiol moisturizer | NR | Low | Tolerability + perceived aging benefit |

Human evidence is classified **limited**: one moderate-quality RCT (Dhaliwal 2019) showing non-inferiority to a mid-tier comparator (retinol, not tretinoin), supported by consistent but methodologically weak smaller studies and two 2024 systematic reviews confirming benefit but calling out trial-quality deficiencies.

---

## Effects on aging hallmarks

| Hallmark | Effect | Mechanism (proposed) | Evidence |
|---|---|---|---|
| [[loss-of-proteostasis]] | Promotes collagen I/III synthesis; suppresses MMP-1/3/9-mediated ECM degradation | Unknown; transcriptomic overlap with retinoids in dermal fibroblasts | [^chaudhuri2014] in vitro; [^dhaliwal2019] clinical |
| [[genomic-instability]] | May reduce UV-driven MMP amplification of DNA-damage-response signal in dermis | Antioxidant ROS quenching; speculative | [^chaudhuri2014] indirect evidence only |
| [[chronic-inflammation]] | Reduces TNF-α, IL-1β, NF-κB in vitro | Direct phenolic antioxidant + upstream ROS quenching | [^puyana2022] review; in vitro primary studies |

---

## Pharmacokinetics and penetration

Percutaneous absorption data for bakuchiol are limited. As a lipophilic compound (MW 256.4, phenolic) it is expected to penetrate the stratum corneum; dermal delivery of the compound to fibroblasts is assumed by the clinical data showing effects consistent with dermal remodeling. However:

- No published human pharmacokinetic study for topical bakuchiol (plasma levels, penetration depth, metabolic fate in skin) has been identified as of 2026-05-19. #gap/dose-response-unclear
- No oral human PK data (bakuchiol is not used orally in the cosmetic context, though *P. corylifolia* whole-plant preparations are used orally in traditional medicine).
- Optimal topical concentration range has not been established via dose-finding studies; 0.5% (the Dhaliwal 2019 concentration) is the most cited but is not supported by a formal dose-response trial.

---

## Cosmetic formulation and positioning

Bakuchiol is available OTC as a topical cosmetic ingredient. Common formulation contexts:

- **Monotherapy serums and creams** at 0.5–1% bakuchiol concentration
- **Combination formulations** — commonly paired with niacinamide, vitamin C (ascorbic acid), hyaluronic acid, peptides; the combination confound is the dominant limitation in non-Dhaliwal clinical studies
- **"Retinoid-free" or "retinol alternative" positioning** — marketed primarily to users with sensitive skin, those new to retinoid regimens, pregnant or breastfeeding individuals (though pregnancy safety of purified bakuchiol specifically has not been demonstrated in adequately powered studies — see safety section above), and users who have experienced retinoid dermatitis

**Comparative positioning within retinoid-family compounds:**

| Compound | Class | RAR binding | Photostability | Tolerability | FDA-approved (aging) |
|---|---|---|---|---|---|
| [[tretinoin]] | Retinoid (retinoic acid) | Direct agonist | Poor | Low (dermatitis common) | Yes (Renova) |
| [[retinol]] | Retinoid precursor | Indirect (requires conversion) | Poor | Moderate | No |
| [[retinaldehyde]] | Retinoid precursor | Indirect (one step from retinoic acid) | Poor | Moderate | No |
| [[adapalene]] | Synthetic retinoid | Direct (RAR-β, RAR-γ selective) | High | Moderate | No (OTC acne) |
| [[tazarotene]] | Synthetic retinoid | Direct (RAR-β, RAR-γ) | High | Low | Yes (acne, psoriasis) |
| **Bakuchiol** | Meroterpenoid (non-retinoid) | Not established | High | High | No |

---

## Limitations and gaps

1. **Mechanism unknown.** The transcriptomic overlap with retinoids is documented but the upstream receptor or pathway driving it is uncharacterized. Until a direct receptor-binding study resolves this, bakuchiol's classification as a "functional retinoid analog" is descriptive, not mechanistic. #gap/no-mechanism
2. **No large-scale RCT.** The Dhaliwal 2019 RCT (n=44) is the only blinded comparator-controlled trial. The 2024 Fanning systematic review found that 12/15 trials lacked a control group. A phase 3-equivalent adequately powered trial (n≥200) has not been conducted. #gap/needs-replication
3. **Comparator gap.** Dhaliwal 2019 compared bakuchiol to retinol, not tretinoin. Non-inferiority to retinol does not establish non-inferiority or equivalence to the pharmacologically active retinoic acid form.
4. **Biopsy endpoints absent.** No published clinical trial includes skin biopsy endpoints (MMP protein levels, procollagen mRNA, histological collagen density) to mechanistically confirm the clinical photography findings.
5. **Percutaneous PK undetermined.** No published data on skin penetration depth, systemic absorption, or metabolic fate. #gap/dose-response-unclear
6. **Pregnancy data.** The popular perception that bakuchiol is pregnancy-safe (because it is "not a retinoid") is reasonable given structural dissimilarity, but this claim has not been tested in reproductive-toxicity studies specific to purified bakuchiol. Whole-plant *P. corylifolia* extracts should not be used in pregnancy due to psoralen content.
7. **Combination product confound.** Most clinical studies outside Dhaliwal 2019 use multi-ingredient formulations, making bakuchiol-specific attribution impossible. #gap/needs-replication
8. **CAS number.** Confirmed as 10309-37-2 per PubChem CID 5468522 synonyms list (verified 2026-05-19). CAS 52662-39-2 appears in some supplier catalogs but does not correspond to PubChem CID 5468522; treat with caution. CAS 10309-37-2 is the canonical registry number for (+)-(S)-bakuchiol.

---

## Classification

- **SENS strategy:** Not directly mapped — bakuchiol does not address a canonical SENS damage category. Indirect ECM proteostasis support is closest to OncoSENS prevention (UV-driven genomic instability) or extracellular junk, but the SENS fit is loose.
- **Hallmark targets:** [[loss-of-proteostasis]] (primary — ECM collagen proteostasis), [[genomic-instability]] (secondary — UV-MMP axis), [[chronic-inflammation]] (secondary — anti-inflammatory activity)
- **Clinical category:** OTC cosmetic ingredient; supplement-tier evidence

---

## Footnotes

[^dhaliwal2019]: doi:10.1111/bjd.16918 · PMID 29947134 · Dhaliwal S, Rybak I, Ellis SR, Notay M, Trivedi M, Burney W, Vaughn AR, Nguyen M, Reiter P, Bosanac S, Yan H, Foolad N, Sivamani RK · *Br J Dermatol* 2019;180(2):289-296 · n=44 · rct (split-face, double-blind, prospective) · model: adult photoaged human skin · bakuchiol 0.5% b.i.d. vs retinol 0.5% q.d. × 12 weeks · both reduced wrinkle surface area and hyperpigmentation significantly; no between-group difference on primary efficacy; retinol significantly higher scaling and stinging · archive: bronze OA; local PDF download failed (Wiley paywall blocks PMC mirror).

[^chaudhuri2014]: doi:10.1111/ics.12117 · Chaudhuri RK, Bojanowski K · *Int J Cosmet Sci* 2014;36(3):221-230 · in-vitro (EpiDerm FT skin substitutes + human dermal fibroblasts) + open-label clinical (n NR) · model: human dermal fibroblast cell culture; full-thickness skin substitute · gene expression profiling showing collagen I/III/IV upregulation and MMP downregulation by bakuchiol; RAR-dependent and independent pathways; 12-week clinical improvement without retinoid side-effect profile · archive: closed-access; local PDF not available (not_oa).

[^puyana2022]: doi:10.1111/jocd.15420 · Puyana C, Henao J, Córdoba A, Tsoukas M · *J Cosmet Dermatol* 2022;21(11):5117-5129 · systematic-review · 30 articles (7 clinical trials, 16 preclinical, 3 commentaries, 2 reviews, 1 adverse event report) · bakuchiol benefits comparable to topical retinoids for photoaging, acne, PIH; one contact dermatitis case documented; authors recommend further study · archive: closed-access; local PDF not available.

[^fanning2024]: doi:10.36849/JDD.7763 · PMID 38564402 · Fanning JE, McGee SA, Ibrahim OI · *J Drugs Dermatol* 2024;23(3) · systematic-review · 15 human clinical trials · 12/15 lacked blinding/control; 10 used combination formulations; high risk of bias across trial base; no meta-analysis feasible; Dhaliwal 2019 identified as highest-quality study · archive: closed-access; local PDF not available.

[^lau2024]: doi:10.1007/s00403-024-02908-2 · PMID 38758222 · Lau M, Mineroff Gollogly J, Wang JY, Jagdeo J · *Arch Dermatol Res* 2024 · systematic-review · 32 clinical studies (20 RCTs, 12 open-label), n=1,236 patients total; bakuchiol received Grade C recommendation; "favorable safety profiles" noted · FWCI 18.99 (99th citation percentile) · archive: closed-access; local PDF not available.

[^draelos2020]: doi:10.36849/JDD.2020.5522 · Draelos ZD, Levy S et al. · *J Drugs Dermatol* 2020 · open-label clinical evaluation · sensitive skin population; bakuchiol anti-aging moisturizer; favorable tolerability and perceived anti-aging benefit reported · archive: closed-access; local PDF not available.

[^natakuathung2026]: doi:10.1111/srt.70310 · Na Takuathung M, Yaja K, Aisara J, Klinjan P, Anek P, Inpan R, Kantasa T, Chitphan J, Yeerong K, Teekachunhatean S, Koonrungsesomboon N · *Skin Res Technol* 2026;32:e70310 · n=80 men age 45-65 (GEN+: n=40; PLA: n=40; ITT=80, PP=71) · rct (parallel, double-blind, placebo-controlled) · GEN+ product (4% genistein + bakuchiol + Vitamins C/E/B3 + ceramides) twice daily × 12 weeks · cheek lightening (MD=0.55, 95%CI: 0.03–1.08, p=0.04), color consistency (MD=−0.56, 95%CI: −1.06 to −0.06, p=0.03), forehead spot count (MD=−0.60, 95%CI: −1.15 to −0.06, p=0.03) improved; no significant between-group effect on melanin index, erythema, elasticity, hydration, TEWL, or most wrinkle parameters; combination product — bakuchiol contribution cannot be isolated · archive: open access via PMC; PDF verified locally.
