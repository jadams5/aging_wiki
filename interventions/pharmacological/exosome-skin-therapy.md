---
type: intervention
aliases: [exosomes, extracellular vesicles, EV therapy, exosome facials, MSC exosomes, plant exosomes, adipose-derived exosomes, exosome serum]
mode: pharmacological
mechanisms: ["paracrine-cargo-delivery", "extracellular-matrix-remodeling", "anti-inflammatory"]
targets: ["[[dermal-fibroblasts]]", "[[col1a1]]", "[[col3a1]]"]
target-hallmarks: ["[[loss-of-proteostasis]]", "[[altered-intercellular-communication]]", "[[cellular-senescence]]"]
target-pathways: ["[[tgf-beta]]"]
human-evidence-level: limited
clinical-stage: preclinical
safety-profile: unknown
translation-gap: translation-blocked-safety
next-experiment: "Single-centre, double-blind, split-face RCT (n≥40 subjects aged 45–70, Glogau II–III photoaging) of intradermal injection of well-characterised MSC-derived EVs (MISEV2023-compliant: NTA sizing, tetraspanin Western, cryo-EM imaging, and miRNA cargo profiling per lot) versus saline-injection sham, with co-primary endpoints of (a) validated blinded photonumeric wrinkle score (WSRS) at 3 months and (b) dermis-depth punch biopsy collagen I immunohistochemistry at 3 months, in a GMP-grade facility with lot-to-lot batch-release QC — isolating EV-specific from needle-wound effects and establishing a reproducible manufacturing standard required for any regulatory submission."
clinical-trials-active: 1
literature-checked-through: 2026-06-09
verified: true
verified-date: 2026-06-09
verified-by: claude
verified-scope: "Primary mechanism papers (Cui 2025, Zhang 2025) verified against full PDFs; Stack 2026 meta-analysis verified against PubMed abstract + Crossref metadata (full text closed-access); Jafarzadeh 2025 systematic review verified against full PDF; MISEV2023 and MISEV2018 verified against Crossref metadata and MISEV2023 full PDF (first 3 pages); Huang 2026 and Fu 2026 DOIs resolved from PMIDs against PubMed; clinical-trials-active corrected to 1 (NCT07281690 COMPLETED, NCT06221787 RECRUITING); FDA 2019 alert existence confirmed via secondary citation (Shen 2026) — direct FDA URL permanently unresolvable (all fda.gov paths return 404; #gap/needs-fulltext retained); canonical-DB identity fields (PubChem, ChEMBL) not checked (not applicable to this intervention type)"
---


# Exosome / Extracellular Vesicle Skin Therapy

**TL;DR.** Exosomes and other extracellular vesicles (EVs) derived from mesenchymal stem cells (MSCs), adipose tissue, platelet-rich plasma, hair follicles, or plant material are being marketed for skin rejuvenation as topical post-procedure serums and injectable adjuncts. The underlying paracrine biology is real — MSC-derived EVs carry biologically active miRNA, growth factors, and signalling proteins that demonstrably activate [[dermal-fibroblasts]] in vitro and in photoaging animal models, upregulating collagen I/III and suppressing MMP-1 activity. However, **no exosome product is FDA-approved for any skin or aesthetic indication.** The FDA has issued explicit consumer and clinical-provider alerts about the risks of unapproved exosome products. The clinical evidence base consists almost entirely of small, uncontrolled, or industry-linked studies using heterogeneous preparations that rarely meet the ISEV MISEV2023 characterisation standards. **Bottom line: a mechanistically plausible but clinically unproven, unregulated, and potentially unsafe aesthetic category where the molecular biology is 5–10 years ahead of the clinical evidence and regulatory framework.**

> **Schema decision:** `mode: pharmacological` per CLAUDE.md precedent — the biologically active agent (EV cargo) is what differentiates this from simple microneedling or topical moisturiser; delivery is procedural but not the mechanistic differentiator. `clinical-stage: preclinical` reflects rigorous evidence rather than commercial availability (the category is widely sold — the wiki's tier reflects the quality of controlled clinical evidence, not market penetration). See injectable-skin-boosters.md for the parent umbrella context.

---

## FDA regulatory status — critical framing

**No exosome product has received FDA approval or clearance for skin rejuvenation, photoaging, or any aesthetic indication.** The FDA has classified most cell- and tissue-derived exosome products as **biological drugs** requiring Biologics License Applications (BLAs) under 21 CFR 1271 or drug approval under 21 CFR Part 312. Products marketed without these approvals are being sold illegally.

The FDA has issued multiple enforcement actions and safety alerts directed at unapproved exosome products:

- In **August 2019**, the FDA issued a safety communication warning healthcare providers and patients about unapproved exosome products marketed for regenerative medicine uses, citing serious adverse events including one patient death and six patient illness reports temporally associated with exosome product administration. The alert noted that these products had not been demonstrated to be safe or effective and that patients lacked information needed to make informed decisions [^fda2019].
- The FDA distinguished between investigational use under an IND (permitted) and commercial marketing as finished biologics without a BLA (prohibited). Most aesthetic-market exosome products fall into the prohibited category.
- As of 2026, no exosome product has reached a BLA filing for any skin/aesthetic indication. The regulatory pathway for allogeneic cell-derived EVs remains under active guidance development.

**Market vs. regulatory reality:** Despite this regulatory status, dozens of exosome serum products (Exo|E, ASCE+, Exosomes by Benev, RegenLab ExoPRP, and many others) are commercially sold in medical aesthetics in the United States, South Korea, and Europe. The category has been absorbed into "regenerative aesthetics" marketing without regulatory approval. The wiki reflects the rigorous regulatory classification, not the market status.

| Dimension | Status |
|---|---|
| FDA-approved for skin/aesthetic use? | **No** — no BLA filed; no approved product exists |
| Sold commercially? | Yes — illegally in the US under FDA's classification of most preparations as unapproved biologics |
| Adverse events reported? | Yes — FDA 2019 alert documented hospitalizations and death temporally associated with EV products |
| Regulatory pathway? | BLA (biologic drug); pathway for allogeneic cell-derived EVs not yet fully defined |

---

## EV biology — source types and cargo (brief; do not duplicate with any future EV-biology page)

A basic-biology extracellular vesicle page does not yet exist in this wiki. This section provides the minimum context for interpreting the intervention literature; it should be linked to from any future `processes/extracellular-vesicles.md` page when seeded.

### Source categories and mechanistic basis

| Source | Abbreviation | Proposed mechanism | Regulatory/quality note |
|---|---|---|---|
| Mesenchymal stem cells — bone marrow, Wharton's jelly (umbilical cord), adipose | BM-MSC, UC-MSC, AD-MSC | Paracrine cargo: miRNA (miR-29b-3p, miR-125b-5p, and others), TGF-β1/Smad pathway ligands, growth factors (FGF, VEGF, PDGF) → ↑collagen I/III, ↓MMP-1, ↓oxidative stress in irradiated fibroblasts [^yan2023] [^cui2025] | Best-characterised source; requires MISEV-compliant characterisation per lot |
| Adipose-derived (fat-derived, "nanofat" fractions) | AD-EV / nanofat | Similar MSC-paracrine cargo; adipose SVF is heterogeneous — product includes stromal vascular fraction cells + EVs + free proteins | Source heterogeneity is high; GMP adipose-EV preparation is feasible but not standard |
| Platelet-derived (platelet-rich plasma derived EVs) | PRP-EV | Platelet alpha-granule cargo: PDGF, TGF-β, EGF, FGF; some EV-specific loading, but most biological activity in PRP may reflect soluble proteins, not vesicle cargo per se | Low characterisation standard in most aesthetic applications; "PRP exosome" marketing often conflates the two |
| Plant-derived (rose stem cell, grape, broccoli) | Plant-EV | Nanoparticle structures encapsulating plant metabolites, miRNAs (cross-kingdom small RNAs); exosome-like; direct mechanistic homology to mammalian-EV signalling pathways is not established | No ISEV standards for plant EVs; characterisation is highly variable; cross-kingdom miRNA transfer to human cells is a contested experimental model |
| Recombinant / engineered EVs | EVM (EV-mimetics) | Engineered MSC-EV-mimetics loaded with cargo (e.g., kaempferol, HYAL2-targeting siRNA); higher reproducibility; not commercially available | Research stage; closest to regulatory-standard product design |

### MISEV2023 characterisation standards

The International Society for Extracellular Vesicles (ISEV) MISEV2023 guidelines define the minimum characterisation requirements for any EV study to be interpretable [^misev2023] (updated from MISEV2018 [^misev2018]):

1. **Particle sizing and concentration:** nanoparticle tracking analysis (NTA) or tunable resistive pulse sensing — size distribution (peak diameter), particles/mL per mg protein
2. **EV markers — positive:** at least one tetraspanin (CD9, CD63, CD81), one cytosolic protein (TSG101, HSP70), one membrane-associated protein
3. **EV markers — negative:** absence of contaminating non-EV material (e.g., Argonaute-2 for protein aggregates, ER/Golgi proteins for dead-cell contamination)
4. **Morphology:** electron microscopy (cryo-EM preferred; transmission EM acceptable)
5. **Functional characterisation:** optional but increasingly expected; miRNA/protein cargo profiling

**The majority of aesthetic-exosome clinical studies do not report all MISEV2023 or even MISEV2018 parameters.** This is the central methodological gap: without lot-to-lot characterisation, pooled clinical data across "exosome" products is uninterpretable — different products may deliver entirely different cargoes or no active cargo at all (protein aggregates instead of vesicles). #gap/needs-mechanism

---

## Mechanism — preclinical evidence

### MSC-EV activation of dermal fibroblasts and collagen response

The best-characterised mechanism involves MSC-derived EV cargo (principally miRNA) modulating UV-irradiated and senescent fibroblast behaviour:

**Hair follicle MSC-derived exosomes (miR-125b-5p/TGF-β1/Smad axis)** — Cui et al. 2025 [^cui2025]: in vitro (primary human dermal fibroblasts, UVB irradiation model) and in vivo (nude mouse, UVB photoaging model). HFMSC-derived exosomes:
- ↑ collagen type I and III mRNA and protein in UV-irradiated fibroblasts (statistically marked, P<0.05)
- ↓ MMP-1 mRNA and protein expression (P<0.05)
- Mechanistic axis: exosomal miR-125b-5p binds the TGF-β1 3'-UTR (validated by luciferase reporter assay) and modulates TGF-β1 signalling. The net in-cell effect is **upregulation** of TGF-β1/p-Smad2/p-Smad3 and downstream collagen I/III in UVB-irradiated fibroblasts — miR-125b-5p appears to normalise dysregulated TGF-β1 signalling rather than simply suppress it. RNA-seq of treated mouse skin confirmed enrichment of TGF-β1/Smad pathway genes.
- Mice (nude mouse, 8-week UVB alternate-day irradiation at 150 mJ/cm²): subcutaneous HFMSC-Exo injection improved wrinkle scores (WSRS; P<0.001), increased dermal thickness and collagen volume fraction (P<0.01) vs UVB-only controls; topical daub was ineffective (consistent with poor skin penetration without barrier disruption)

**Bone marrow MSC-derived exosome miR-29b-3p** — Yan et al. 2023 [^yan2023]: in vitro human dermal fibroblasts, UV irradiation model. BMSC-derived exosomes inhibited collagen I degradation and MMP-2 production; miR-29b-3p targets MMP-2 directly (validated by luciferase reporter assay). This is a clean mechanistic chain: exosome delivers miR-29b-3p → ↓MMP-2 → reduced collagen degradation.

**3D-cultured AD-MSC exosomes (circ_0011129)** — Zhang et al. 2025 [^zhang2025]: in vitro human dermal fibroblasts, chronic UVA irradiation model (5 J/cm²/day × 7 days). 3D-culture-derived adipose exosomes loaded with circ_0011129 (3D-circ-Exo) restored **collagen I and elastin** expression and reduced senescence markers (SA-β-gal, p53, p21, p16; all P<0.01 vs UVA control). The active cargo is circular RNA circ_0011129, which acts as a miRNA sponge de-repressing collagen/elastin pathway mRNAs. 3D-circ-Exo significantly outperformed plain 3D-Exo (P<0.01), demonstrating synergy between 3D culture and circ_0011129 loading.

| Dimension | Status |
|---|---|
| Pathway (MSC-EV → fibroblast collagen ↑ / MMP ↓) conserved in humans? | partial — demonstrated in primary human dermal fibroblasts in vitro; never confirmed in human skin biopsy in a controlled RCT |
| Collagen response demonstrated in aged/photoaged human skin in vivo? | No — animal models (nude mouse for Cui 2025; in vitro only for Yan 2023 and Zhang 2025); no human biopsy controlled comparison #gap/needs-human-replication |
| Replicated across independent labs? | Yes for the in-vitro miRNA → collagen / MMP direction; specific miRNA cargo and magnitude of effect vary by source preparation |

### Anti-inflammatory and anti-senescence cargo

MSC-EVs carry cargo that suppresses inflammation and senescent-cell SASP:
- Downregulate TNF-α, IL-6, MMP-9 production in UV-stressed keratinocytes and fibroblasts
- Reduce ROS accumulation and DNA damage markers (γ-H2AX) in irradiated cells
- These effects mirror the broader paracrine immunomodulatory mechanism attributed to [[mesenchymal-stem-cell-therapy]] but delivered without cell engraftment requirements

This is a plausible secondary mechanism complementary to direct collagen stimulation — reducing the senescent-fibroblast SASP burden should reduce MMP-driven collagen fragmentation. However, no biopsy evidence from a controlled human study confirms this in skin. #gap/needs-human-replication

---

## Clinical evidence — what exists and why it is weak

### The meta-analysis (Stack et al. 2026)

The highest-level clinical synthesis available is a **systematic review and meta-analysis of 39 human clinical trials** by Stack et al. 2026 [^stack2026] (Aesthetic Surgery Journal):

- 26 studies on skin outcomes; 13 on hair outcomes
- Pooled facial wrinkle reduction: **20.2% (95% CI 15.3–25.2%; p<0.001)**
- Other skin outcomes improved 14.7–23.4% (pigmentation, elasticity, texture, erythema)
- Authors explicitly note: "heterogeneity and nonstandardized protocols limit generalizability"

**Critical appraisal of the Stack 2026 pooling:**
This meta-analysis pools studies that almost certainly used different preparations (different source cells, different isolation protocols, no MISEV characterisation in most), different delivery methods (topical post-laser, topical post-microneedling, injectable), and different outcome measures on heterogeneous populations. The 20.2% wrinkle reduction figure **cannot be taken as an effect size for "exosomes"** — it is the average improvement across heterogeneous studies with heterogeneous products in uncontrolled designs. The absence of a sham/vehicle-controlled arm in most constituent studies means the needle-wound effect, regression to the mean, and placebo are not separated from any active-EV contribution. The authors' own caveat about nonstandardized protocols is the load-bearing limitation. #gap/needs-replication

### The Jafarzadeh 2025 systematic review

Jafarzadeh et al. 2025 [^jafarzadeh2025] reviewed 19 studies (624 patients; Stem Cell Research & Therapy):
- Skin elasticity: 27.07% increase (p<0.05)
- Wrinkle reduction: >10% (p<0.05)
- Hydration enhancement: >20% (p<0.05)

**Critical scope note (verified against full PDF):** Only 4 of 19 studies (21%) investigated EVs/exosomes; the remaining 15 studies (79%) investigated **conditioned media (CM)** — the cell-secreted medium, not purified vesicles. This review is therefore primarily a conditioned-media efficacy review, not an exosome efficacy review. The improvement figures above cannot be attributed to EV cargo specifically. Same pooling limitations apply. No sham-controlled RCTs are included.

### The Estupinan 2025 split-face trial

Estupinan B et al. 2025 [^estupinan2025] (Journal of Cosmetic Dermatology) ran an investigator-blinded, split-face non-inferiority trial comparing adipose-derived exosomes versus PRP post-radiofrequency microneedling. Both sides showed comparable improvement in wrinkling, dyschromia, erythema, texture, and overall appearance, with histological confirmation of increased collagen I and glycosaminoglycans. This is the highest-quality aesthetic exosome clinical study located — but:
- It is a **non-inferiority trial against PRP** (itself not sham-controlled)
- The background radiofrequency microneedling treatment confounds both arms
- Without a microneedling-only arm, neither PRP nor exosomes can be distinguished from the device effect
- Sample size not specified; likely small (typical for split-face designs)

### The Huang 2026 split-face study

Huang et al. 2026 [^huang2026] (Aesthetic Surgery Journal, doi:10.1093/asj/sjaf253, PMID 41800727) applied rose stem cell-derived exosomes (RSCEs) post-radiofrequency needling in a prospective split-face study, n=6, Fitzpatrick III–IV, 6-month follow-up: significantly greater wrinkle reduction at 1 and 3 months on the RSCE side (both P=0.03), with faster early improvement; however, texture and pore responses varied by phenotype (collagen-deficient skin benefited from RSCEs; sebaceous-dominant skin responded better to needling alone). n=6 is statistically insufficient for any conclusion. #gap/needs-replication

### Summary of clinical evidence quality

| Study level | Evidence available | Verdict |
|---|---|---|
| Sham-controlled (vehicle-only injection) RCT | None found | **Critical gap** |
| Active comparator (vs. PRP or standard care) with blinding | Estupinan 2025 — split-face, RF-microneedling background | Exists but confounded |
| Systematic review / meta-analysis | Stack 2026 (n=39 studies), Jafarzadeh 2025 (n=19) | Exist; pooling is not interpretable for effect size; consistent signal of improvement but no control arm |
| Human biopsy confirming mechanism | Estupinan 2025 collagen I IHC (post-RF confound) | Exists; not clean mechanistic confirmation |
| Biological-age endpoint | None | Absent |

#gap/needs-replication across all entries above.

---

## Source-type distinctions: what to trust more vs less

The mechanistic and clinical evidence is not uniformly distributed across source types:

| Source | Mechanistic evidence | Clinical evidence | MISEV compliance typical? |
|---|---|---|---|
| UC-MSC / BM-MSC / HFMSC exosomes | Strong in vitro; mouse in vivo [^cui2025] [^yan2023] | Sparse and confounded | Rarely in aesthetic papers; better in academic studies |
| AD-MSC / adipose exosomes | Moderate in vitro + mouse [^zhang2025]; split-face clinical [^estupinan2025] | Split-face vs PRP; no sham | Variable |
| PRP-derived EVs | Overlaps with PRP mechanism; EV-specific contribution unclear | Extensive PRP literature (itself poorly sham-controlled) | Typically not vesicle-isolated |
| Plant-derived (rose stem cell, etc.) | Cross-kingdom miRNA transfer contested; nanoparticle biology unclear | Split-face n=6 [^huang2026]; observational only | Rarely; plant-EV standards not established |
| Recombinant / engineered EV-mimetics | Strongest mechanistic control [^fu2026] | Preclinical only | High (research grade) |

**Plant-derived exosome products deserve particular scrutiny.** "Rose stem cell exosome" and equivalent products exploit the naming ambiguity between plant-derived nanoparticles and bona fide mammalian EVs. The mechanistic basis for cross-kingdom paracrine activity (plant miRNA acting on human fibroblasts) is not established in controlled human-relevant models, and the preparations are the most likely to have no characterised active cargo. This is a key area where the aesthetic marketing substantially outruns the biology. #gap/no-mechanism

---

## Administration routes and the microneedling confound

### Delivery methods

1. **Topical post-procedure serums** — the most common consumer/clinic application. EVs (or products claimed to contain EVs) are applied topically immediately after microneedling, laser, or RF treatment, when barrier disruption transiently increases percutaneous penetration. This is the dominant format in the unregulated consumer market.

2. **Injected adjuncts (intradermal)** — direct intradermal injection of EV preparations, analogous to PN/PDRN or HA boosters. The higher-quality clinical studies use this route (Estupinan 2025). This is the route that FDA classifies as a biologic drug requiring a BLA.

3. **Topical monotherapy** — rare in clinical literature; penetration of intact skin barrier by nanoparticles of EV size (50–200 nm) is thought to be minimal without barrier disruption, though some penetration through hair follicle ostia is plausible.

### The microneedling confound

This is the same structural confound described on the [[injectable-skin-boosters]] parent page and the [[microneedling]] page: essentially all aesthetic exosome clinical studies co-apply EVs after microneedling, laser, or RF treatment. The separate contribution of the EV agent from the device-induced wounding response cannot be distinguished without:
- A device-without-EV arm (controls for wounding)
- A sham-injection arm for injectable studies (controls for needle wound + placebo)

The exosome literature inherits the microneedling evidence problem in its entirety, and adds the additional layer of preparation heterogeneity. Sham-controlled injection design is the minimum requirement for any interpretable clinical trial. The [[microneedling]] page provides the mechanistic basis for why needle-wound alone generates substantial collagen-synthesis signal.

---

## Safety — known and unknown

### Known adverse events

The FDA's 2019 safety alert [^fda2019] reported:
- At least one patient death temporally associated with an unapproved exosome product
- Multiple patient hospitalizations, including reports of fever and infection
- Products were administered intravenously or via other injection routes; some reports may reflect non-aesthetic (systemic regenerative medicine) use

For **aesthetic / topical / intradermal** use specifically:
- The published clinical literature does not report serious adverse events (Jafarzadeh 2025 noted "no serious adverse effects" across 19 studies, 624 patients)
- Common expected reactions: erythema, swelling at injection sites, mild inflammation
- Granulomatous reactions to poorly characterised particulate preparations are theoretically possible but not yet reported in peer-reviewed aesthetic literature
- Infection risk from non-sterile preparations is real; the unregulated market has no mandatory sterility testing

### Unknown risks

- **Allogeneic immunogenicity.** MSC-derived EVs carry donor surface proteins including HLA antigens. The immunogenicity of repeated intradermal injection of allogeneic EVs in aging skin has not been systematically studied. MSC cells themselves have low but non-zero immunogenicity; their EVs likely carry similar risks with additional unknown factors.
- **Oncogenic risk.** EVs carry oncogenic miRNAs and growth factors. MSC-EVs are pro-angiogenic; in the context of pre-existing subclinical melanocytic or keratinocytic dysplasia (common in photoaged skin), repeated pro-proliferative EV exposure is a theoretical risk that has not been studied. This is not a demonstrated harm but a gap that precludes strong safety assurance. #gap/long-term-unknown
- **Lot-to-lot variability → safety unpredictability.** Without mandatory GMP manufacturing and lot-release testing, the content of commercially sold EV products varies in ways that affect both efficacy and safety. A "safe" lot does not guarantee a safe next lot from the same supplier.

---

## Relationship to existing wiki pages

- **[[injectable-skin-boosters]]** — parent umbrella page for this category; the exosome sub-section there cross-links here. Classification rationale and delivery context live on that page.
- **[[microneedling]]** — the needle-wound confounder in virtually all aesthetic exosome studies. The [[microneedling]] page already notes exosomes as a confounding co-agent in the rejuvenation literature.
- **[[dermal-fibroblasts]]** — the primary target cell type; MSC-EV activation of DFs is the central proposed mechanism.
- **[[skin-aging]]** — the phenotype being treated; full mechanism-by-hallmark treatment there; this page does not duplicate that content.
- **[[mesenchymal-stem-cells]]** — the source cell type for the best-characterised EV preparations. The EV-secretome mechanism described here is distinct from cell-engraftment therapy on [[mesenchymal-stem-cell-therapy]] but derives from the same paracrine-signalling-dominant (Caplan 2017 "Medicinal Signaling Cells") paradigm.
- **[[mesenchymal-stem-cell-therapy]]** — the parent cell-therapy page; exosome therapy is sometimes positioned as a cell-free surrogate for MSC transplantation.
- **[[altered-intercellular-communication]]** — the hallmark most directly engaged by EV-mediated paracrine cargo delivery.
- **[[loss-of-proteostasis]]** — the downstream ECM hallmark targeted via fibroblast collagen induction.
- **[[cellular-senescence]]** — the anti-senescence cargo effects reduce fibroblast SASP indirectly.
- **[[tgf-beta]]** — the TGF-β1/Smad axis is the primary pro-collagen pathway activated (and complexly modulated) by MSC-EV miRNA cargo.
- **[[wound-healing]]** — the controlled-wounding context within which most aesthetic EV applications are used.

---

## R25 recency search summary

**Searches conducted 2026-06-09.** PubMed queries:

1. `exosome extracellular vesicle skin photoaging aging rejuvenation AND (meta-analysis OR randomized controlled trial OR systematic review)` 2019–2026 → 5 high-priority hits; 2 integrated as primary evidence (Stack 2026 meta-analysis PMID 41800726; Jafarzadeh 2025 systematic review PMID 41013717)
2. `exosome OR extracellular vesicle AND skin AND (photoaging OR rejuvenation OR aging)` 2024–2026 → 204 hits; top 10 reviewed (efetch); narratively useful: Shen 2026 review PMID 42202165 (confirmed no FDA approval, regulatory gap framing)
3. `MSC exosome dermal fibroblast collagen photoaging` all dates → 2 hits: Matsuoka 2024 (PMID 39452604; in vitro, UV/glycation/H2O2 model) and Lv 2022 (PMID 35182986; narrative review)
4. `exosome skin photoaging UV collagen fibroblast` 2020–2026 → 10 hits; 4 integrated: Hajialiasgary 2024 (PMID 38217034, review), Cui 2025 (PMID 39807308, mechanistic anchor), Yan 2023 (PMID 35950642, miR-29b-3p), Zhang 2025 (PMID 40969329, circ_0011129)
5. ClinicalTrials.gov v2 query `exosome AND (aesthetic OR cosmetic OR skin rejuvenation)` → verified at verification pass: NCT07281690 (laser + UC-MSC exosome serum) is COMPLETED (not active); NCT06221787 (melasma laser + microneedles + hUCMSC-Exos) is RECRUITING. clinical-trials-active corrected to 1. NCT06697080 (UC-MSC exosome for androgenetic alopecia, ACTIVE_NOT_RECRUITING) was identified but excluded as hair, not skin/photoaging indication.

**Key recent finding:** Stack 2026 is the first meta-analysis of aesthetic exosome clinical trials (39 studies; Aesthetic Surgery Journal). Its existence suggests the field is accumulating a clinical literature base, but the meta-analysis explicitly acknowledges nonstandardized protocols as a core limitation. This is consistent with rather than contradictory to the preclinical-stage framing used here. No recent source contradicts the regulatory gap or MISEV-characterisation gap positions. The Cui 2025 miR-125b-5p/TGF-β1/Smad mechanistic paper (PMID 39807308) is the best new mechanistic addition to what was known before 2024.

---

## Limitations and gaps

- **No sham-controlled (vehicle injection) RCT.** Every clinical study confounds EV agent effect with needle wound, device, and/or placebo. This is the dominant gap. #gap/needs-replication
- **MISEV characterisation is routinely omitted in aesthetic studies.** Without NTA sizing, tetraspanin Westerns, and cryo-EM, published "exosome" products cannot be confirmed to contain vesicles rather than protein aggregates or cell debris. #gap/needs-mechanism
- **Lot-to-lot batch variability.** Biological preparations from donor cells vary in cargo composition. No mandatory release testing exists for marketed aesthetic EV products. #gap/needs-mechanism
- **Plant-derived EV mechanistic basis is unestablished for human skin targets.** Cross-kingdom miRNA activity in human fibroblasts is not confirmed in controlled experiments. #gap/no-mechanism
- **Oncogenic risk from pro-growth/pro-angiogenic cargo is theoretical but unstudied.** Required for any long-term safety assessment. #gap/long-term-unknown
- **No human biopsy proof-of-mechanism under controlled conditions.** Estupinan 2025 histology exists but is confounded by RF-microneedling background. #gap/needs-human-replication
- **FDA regulatory pathway remains undefined.** Until a BLA is approved or a regulatory framework for allogeneic EV products is finalised, all marketed aesthetic EV products occupy a legally and scientifically uncertain space. #gap/needs-replication
- **Allogeneic immunogenicity is unstudied.** Repeated intradermal injection of donor-cell-derived EV preparations carrying foreign HLA antigens — the safety implications are unknown in the aging skin context. #gap/long-term-unknown
- **`clinical-trials-active: 1`** reflects ClinicalTrials.gov v2 query for aesthetic/skin-focused exosome studies as of 2026-06-09 (NCT06221787 RECRUITING; NCT07281690 is COMPLETED and excluded). Re-query at the 6-month cadence per [[sops/integrating-clinical-trials]].

---

## Cross-references

- [[injectable-skin-boosters]] — umbrella parent page; classification rationale
- [[microneedling]] — procedural context; needle-wound confound
- [[skin-aging]] — target phenotype; mechanism-by-hallmark treatment
- [[dermal-fibroblasts]] — primary target cell type
- [[mesenchymal-stem-cells]] — source cell biology
- [[mesenchymal-stem-cell-therapy]] — cell-therapy sibling page
- [[wound-healing]] — co-delivery context
- [[tgf-beta]] — mechanistic pathway axis
- [[col1a1]] / [[col3a1]] — neocollagenesis markers
- [[loss-of-proteostasis]] — primary ECM hallmark
- [[altered-intercellular-communication]] — EV-paracrine communication hallmark
- [[cellular-senescence]] — anti-SASP cargo effects
- [[studies/rho-2024-injectable-skin-boosters]] — parent-category synthesis anchor

---

## Footnotes

[^fda2019]: US FDA Safety Communication, August 26, 2019 — "FDA warns about use of exosome products" (fda.gov/vaccines-blood-biologics; URL has been reorganised and all known URL variants return HTTP 404 as of 2026-06-09 verification pass; the FDA archive at fda.gov/about-fda/about-website/fdagov-archive does not surface a working link). Reports at least one patient death and multiple adverse events (fever, hospitalisation) temporally associated with unapproved exosome product administration in a regenerative-medicine context; affirms no exosome product is FDA-approved; notes legal framework under 21 CFR 1271 and the drug/biologic distinction. **Existence confirmed via secondary citation** — Shen 2026 (*Skin Therapy Letter*, PMID 42202165) describes current FDA status as no-approval, consistent with the 2019 alert framing; regulatory claims on this page are also consistent with independently verified FDA BLA/21 CFR framework. #gap/needs-fulltext — direct FDA URL permanently unresolvable at this time; primary claims (no approval, adverse events reported) are conservatively framed and multi-source confirmed.

[^stack2026]: doi:10.1093/asj/sjaf178 · PMID 41800726 · Stack ER, Spongberg C, Braud SC, Stanton WN, Elway M · *Aesthetic Surgery Journal* 2026;46(Supplement_1):S13 · systematic review + meta-analysis · 39 human clinical trials (26 skin, 13 hair outcomes); search conducted February 2, 2025 · facial wrinkle reduction 20.2% (95% CI 15.3–25.2%; p<0.001); skin elasticity, pigmentation, erythema, texture, and overall appearance improved 14.7–23.4%; hair density +23.6% (95% CI 18.1–29.0%), hair thickness +18.0% (95% CI 11.1–24.9%); 9 ongoing trials identified · **Limitations:** heterogeneity and nonstandardized protocols limit generalizability; no sham-controlled trials in the pool; pooling across non-MISEV-characterised preparations limits interpretation of effect magnitude; Cochrane ROB2 applied to RCT subset. Weight: hypothesis-generating; do not treat 20.2% as an established effect size for any specific EV product. Full text closed-access (OUP, Level of Evidence: 3); verified against PubMed abstract + Crossref metadata.

[^jafarzadeh2025]: doi:10.1186/s13287-025-04592-z · PMID 41013717 · Jafarzadeh A, Hoseini SS, Behrangi E, Roohaninasab M, Goodarzi A · *Stem Cell Research & Therapy* 2025;16:513 · systematic review (PRISMA) · 19 studies, 624 patients (526 female, 21 male, 77 undefined); search to September 19, 2024 · **Scope note: 79% of included studies investigated conditioned media (CM), not EVs/exosomes; only 21% (4 studies) investigated EVs directly** · skin elasticity ↑27.07% (p<0.05); wrinkle reduction >10% (p<0.05); hydration ↑>20% (p<0.05); no serious adverse events reported (transient erythema only) · Iran University of Medical Sciences ethics approval; no conflicts declared · **Limitations:** majority CM not EV; no sham controls; heterogeneous protocols; ROB2: 5 studies (26.3%) low risk, 11 (57.9%) some concerns, 3 (15.8%) high risk. #gap/needs-replication

[^estupinan2025]: doi:10.1111/jocd.70208 · PMID 40414798 · Estupinan B, Ly K, Goldberg DJ · *Journal of Cosmetic Dermatology* 2025;24(5) · investigator-blinded split-face non-inferiority trial · adipose MSC-derived exosomes vs PRP, both post-radiofrequency microneedling · comparable improvement wrinkling, dyschromia, erythema, texture, overall appearance; histological ↑collagen I and glycosaminoglycans confirmed on biopsy · **Limitations:** split-face design; RF-microneedling background confounds both arms; no microneedling-alone arm; sample size not specified (likely small). #gap/needs-replication

[^huang2026]: doi:10.1093/asj/sjaf253 · PMID 41800727 · Huang PP, Chih PL, OuYang SY · *Aesthetic Surgery Journal* 2026;46 · prospective split-face study · n=6, Fitzpatrick III–IV, 6-month follow-up · rose stem cell-derived exosomes (RSCEs) applied post-radiofrequency needling vs needling alone; standardized photography and Vectra Sculptor analyses · significantly greater wrinkle reduction at 1 and 3 months on RSCE side (both P=0.03), faster early improvement, sustained remodeling at 6 months; collagen-deficient skin benefited more from RSCEs; sebaceous-dominant skin responded better to needling alone; pore differences nonsignificant overall · **n=6: statistically insufficient for any conclusion.** #gap/needs-replication

[^cui2025]: doi:10.34133/bmr.0121 · PMID 39807308 · Cui H, Fu LQ, Teng Y et al. · *Biomaterials Research* 2025;29:Article 0121 · in vitro + in vivo (5-week-old female nude mice, n≥5/group) · hair follicle MSC-derived exosomes (HFMSC-Exos); UVB photoaging model (in vitro: 20 mJ/cm²; in vivo: 150 mJ/cm² alternate-day × 8 weeks) · miR-125b-5p in HFMSC-Exos binds TGF-β1 3'-UTR (luciferase reporter validated); net cellular effect: ↑TGF-β1/p-Smad2/p-Smad3 signalling + ↑collagen I/III mRNA and protein + ↓MMP-1 in UVB-irradiated HDFs (P<0.05); mice (subcutaneous injection): improved WSRS wrinkle scores (P<0.001), ↑dermal thickness and collagen volume fraction (P<0.01); topical daub ineffective. RNA-seq confirmed TGF-β1/Smad pathway enrichment in treated mouse skin. model: nude mouse + primary human dermal fibroblasts; no human biopsy controlled trial #gap/needs-human-replication

[^yan2023]: doi:10.1111/phpp.12827 · PMID 35950642 · Yan T, Huang L, Yan Y et al. · *Photodermatology, Photoimmunology & Photomedicine* 2023 · in vitro · model: primary human dermal fibroblasts, UV irradiation · BMSC exosomes inhibited collagen I degradation + ↓MMP-2 production; miR-29b-3p targets MMP-2 (luciferase reporter validation); pathway: exosome → miR-29b-3p → ↓MMP-2 → ↓collagen degradation · clean mechanistic chain; in vitro only #gap/needs-human-replication

[^zhang2025]: doi:10.3389/fgene.2025.1627472 · PMID 40969329 · Zhang Y, Zhou F, Nie G et al. · *Frontiers in Genetics* 2025;16:1627472 · in vitro · model: human dermal fibroblasts (from foreskin of boys aged 5–10), chronic UVA irradiation (5 J/cm²/day × 7 days) · 3D-cultured hADSC-derived exosomes loaded with circ_0011129 (3D-circ-Exo) vs plain 3D exosomes; active cargo: circular RNA circ_0011129 (validated by RNase R digestion, Sanger sequencing) acting as miRNA sponge · ↑collagen I + **elastin** expression (p<0.01 vs UVA control), ↓SA-β-gal-positive cells (p<0.05), ↓p53/p21/p16 protein expression (p<0.01); 3D-circ-Exo > 3D-Exo in magnitude (p<0.01) · in vitro only; no in vivo confirmation #gap/needs-human-replication

[^fu2026]: doi:10.1186/s12964-026-02940-x · PMID 42192427 · Fu N, Zhang H, Shi X et al. · *Cell Communication and Signaling* 2026 · in vitro + in vivo (UVB-induced photoaging mouse model) · kaempferol (Kae)-loaded MSC-EV-mimetics (MSC-EVM@Kae) delivered via microneedle array · **Central mechanism: ADAM10 suppression** restoring MMP/TIMP homeostasis; also ↓ROS accumulation, ↓DNA damage, ↓cellular senescence in UVB-irradiated fibroblasts and keratinocytes; improved wrinkle severity + collagen deposition + epidermal barrier integrity in photoaged mice · strongest characterisation standard of any study reviewed (high-efficiency EV-mimetic production overcomes yield limitation of natural EVs); preclinical only #gap/needs-human-replication

[^misev2023]: doi:10.1002/jev2.12404 · PMID 38326288 · Welsh JA, Goberdhan DCI, O'Driscoll L, Buzas EI et al. (ISEV; >1000 co-authors) · *Journal of Extracellular Vesicles* 2024;13:e12404 · Minimal information for studies of extracellular vesicles (MISEV2023): From basic to advanced approaches · defines the minimum characterisation standards for EV research including NTA sizing, tetraspanin/cytosolic/negative marker requirements, cryo-EM morphology, and cargo characterisation; updates MISEV2014 and MISEV2018; also adds advanced guidance on EV nomenclature, in vivo studies, and therapeutic EV applications · the field's canonical methodological reference for what "characterised exosome" means

[^misev2018]: doi:10.1080/20013078.2018.1535750 · PMID 30637094 · Théry C, Witwer K, Aikawa E et al. (ISEV) · *Journal of Extracellular Vesicles* 2018;7(1):1535750 · Minimal information for studies of extracellular vesicles 2018 (MISEV2018): a position statement of the International Society for Extracellular Vesicles and update of the MISEV2014 guidelines · predecessor to MISEV2023; provides the characterisation standards against which 2018–2023 papers should be evaluated
