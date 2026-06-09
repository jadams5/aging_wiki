---
type: intervention
aliases: [skin boosters, injectable skin boosters, skinboosters, mesotherapy (partial), dermal biostimulation]
mode: pharmacological
mechanisms: ["extracellular-matrix-remodeling", "collagen-synthesis-stimulation", "dermal-biostimulation", "adenosine-A2A-receptor-agonism"]
targets: ["[[col1a1]]", "[[col3a1]]", "[[eln]]", "[[dermal-fibroblasts]]", "[[hyaluronic-acid]]"]
target-hallmarks: ["[[loss-of-proteostasis]]", "[[altered-intercellular-communication]]"]
target-pathways: []
human-evidence-level: limited
clinical-stage: implemented
safety-profile: well-established
translation-gap: phase-3-rct-needed
next-experiment: "Sham-controlled (saline-injection sham), evaluator-blinded RCT of intradermal non-crosslinked HA booster vs. PDRN booster vs. sham in 30 adults aged 50–70 with Glogau II–III photoaging, with dermis-depth biopsy collagen I/III immunohistochemistry + validated blinded wrinkle scoring (WSRS) as co-primary endpoints at 3 and 6 months — isolating active-ingredient benefit from needle-wounding and placebo effects that currently confound the practice-based literature."
clinical-trials-active: null
literature-checked-through: 2026-06-09
verified: true
verified-date: 2026-06-09
verified-by: claude
verified-scope: "Rho 2024 anchor (DOI 10.1055/a-2366-3436) verified against full PDF (PMC11560330 OA). Byun 2025 (DOI 10.3390/ijms26178720) mechanism chain verified against PubMed abstract (OA full text unavailable at verification time — MDPI returned 403; abstract confirms A2AR/cAMP/PKA/CREB/PCK1/M2/SMAD/STAT3 chain and in-vivo mouse collagen/elasticity outcomes). Kerscher 2021 (DOI 10.1097/GOX.0000000000003973) n=159, 2:1 design, P=0.0013, 9-month durability confirmed via PubMed abstract. Retraction DOIs verified via Crossref. Non-OA primaries Jäger 2012 and Savoia 2013 (cited via Rho synthesis only) not independently read; n=50 attribution corrected to Savoia clinical study (distinct from Jäger in-vitro). CD73→adenosine step tagged #gap/no-mechanism (not in Byun 2025). Classification table corrected: Rho organises into five primary categories; exosomes labelled as emerging/not in primary scheme."
---

# Injectable Skin Boosters

**TL;DR.** Injectable skin boosters are a heterogeneous class of intradermally or subdermally delivered products designed to address aging-related deficits in dermal hydration, elasticity, and neocollagenesis. The term is not regulatory-standardized: it encompasses non-crosslinked and lightly crosslinked [[hyaluronic-acid]] formulations, polynucleotides/PDRN, biodegradable synthetic polymer biostimulators (PLLA, PCL, PDO, CaHA), polycomponent mesotherapy cocktails (amino acids, vitamins, coenzymes + HA), and emerging biologics (exosomes). The mechanisms are real and histologically plausible — hydration restoration, direct fibroblast stimulation, and polymer-scaffold-driven neocollagenesis all address documented deficits in the aged [[dermis]]. The evidence base, however, is dominated by small, uncontrolled, or non-blinded Korean and European practice-based studies; large sham-controlled RCTs are essentially absent, and regulatory clearance outside Korea/CE-marked products is limited. **Bottom line: a mechanistically coherent, widely practiced, and apparently safe class whose effect sizes for aging endpoints remain poorly quantified relative to needle-wound or expectation effects.** #gap/needs-replication

**Schema decision:** This page uses `mode: pharmacological` consistent with the CLAUDE.md precedent established by [[dermatologic-resurfacing]] and [[chemical-peels]]: the delivery is procedural (intradermal injection), but the *mechanism* that differentiates this class from simple saline injection or microneedling is the injected bioactive agent. The procedural delivery is shared with fillers and botulinum toxin; the agent class is what defines "skin booster" biology.

---

## Classification scheme

Rho et al. 2024 [^rho2024] organize injectable skin boosters into five broad categories (natural biopolymers, biodegradable synthetic polymers, other ingredients/polycomponent, and emerging biologics). Each category occupies a different mechanism space in the aged dermis (see [[skin-aging]] and [[dermal-fibroblasts]] for the biological deficits being addressed; detail is not duplicated here). Exosomes are noted by Rho as an emerging category but are not part of their primary classification scheme.

| Category | Representative agents | Primary mechanism | Key hallmark target |
|---|---|---|---|
| **Natural biopolymers — HA** | Non-crosslinked HA (Juvéderm Hydrate, Restylane Vital), lightly crosslinked HA (CPM-HA20G/Belotero Revive) | ECM hydration; water-binding; mild fibroblast tensioning | [[loss-of-proteostasis]] (ECM hydration) |
| **Natural biopolymers — PDRN/polynucleotides** | PDRN (Rejuran/Pharmaresearch, Nithya), PN filler (Plenhyage), HA-PN hybrid (Profhilo Structura) | Adenosine A2AR agonism → macrophage M2 polarization → fibroblast collagen induction | [[loss-of-proteostasis]], [[chronic-inflammation]] |
| **Natural biopolymers — other** | Collagen/atelocollagen (bovine/porcine), PRP (autologous), stromal vascular fraction | Direct ECM substrate; platelet growth factors (PDGF/TGF-β/EGF/FGF) → fibroblast activation | [[loss-of-proteostasis]] |
| **Biodegradable synthetic polymers (biostimulators)** | PLLA (Sculptra; FDA 2009), PCL (Ellanse), PDO microspheres, PDLLA; CaHA (Radiesse) | Polymer scaffold → foreign-body inflammatory resolution → TGF-β/SMAD fibroblast activation → sustained neocollagenesis | [[loss-of-proteostasis]] (neocollagenesis) |
| **Polycomponent / mesotherapy** | NCTF135HA (non-crosslinked HA + vitamins A/C/E + amino acids + minerals + coenzymes + nucleic acids), glycerol+HA (CPM-HA20G) | Multi-substrate provision + direct DF stimulation; AQP3 upregulation (glycerol) | [[loss-of-proteostasis]], [[altered-intercellular-communication]] |
| **Exosomes** (emerging; not in Rho's primary classification) | MSC-derived exosomes (Exosome Rejuran), plant-derived exosomes (ASCE+) | Paracrine cargo (miRNA, growth factors) → fibroblast/keratinocyte activation | [[loss-of-proteostasis]], [[altered-intercellular-communication]] |

---

## Mechanisms by category

### Hyaluronic acid — hydration and ECM restoration

Non-crosslinked and lightly crosslinked HA formulations provide immediate hydration via HA's hygroscopic water-binding capacity (see [[hyaluronic-acid]] § Molecular-weight-dependent biology for the mechanism). Intradermally delivered HA integrates into the papillary dermis, temporarily restoring the hydration reserve and ECM volume lost in aged skin (see [[dermis]] § ECM composition). The glycerol-containing formulation CPM-HA20G adds a humectant effect: glycerol upregulates aquaporin-3 (AQP3) expression in keratinocytes, improving transepidermal water flux at the epidermal level. A multicenter randomized controlled trial (n=159; CPM-HA20G vs. single-dose control; Kerscher 2021 [^kerscher2021]) found statistically significant improvement in skin hydration at Week 16 in subjects with dry/very dry skin (multiple-dose group, P=0.0013), with clinical benefit lasting approximately 9 months post-last-injection. A smaller RCT (n=15; Kleine-Börger 2022 [^kleineborger2022]) confirmed improved biomechanical viscoelastic properties (firmness, density) after 1–3 sessions. #gap/needs-replication — both studies are manufacturer-sponsored and use a single-arm or unblinded comparator design; placebo-controlled blinded data are unavailable.

### Polynucleotides and PDRN — adenosine receptor pathway

Polydeoxyribonucleotides (PDRN) and polynucleotides (PN) are high-molecular-weight DNA fractions derived from salmon/trout sperm, hydrolyzed to fragments of varying size. The canonical mechanism, recently characterized in detail [^byun2025], is:

1. PN/PDRN activates A2A adenosine receptors (A2AR; Gs-coupled) on macrophages — the upstream step by which PN engages A2AR is noted in the literature (Rho [^rho2024] states PDRN "acts as a selective adenosine A2A receptor"); the specific role of ecto-5'-nucleotidase (CD73) in generating free adenosine from PN fragments is a plausible upstream mechanism but is not established by Byun 2025 #gap/no-mechanism
2. A2AR activation → ↑cAMP → PKA → CREB phosphorylation → PCK1 (phosphoenolpyruvate carboxykinase 1) upregulation in senescent macrophages [^byun2025]
3. PCK1-driven metabolic reprogramming promotes M2 macrophage polarization and reduces oxidative stress [^byun2025]
4. M2-conditioned medium activates dermal fibroblasts via SMAD2 and STAT3 phosphorylation pathways → ↑collagen I and III synthesis; reduces NF-κB activity [^byun2025]
5. In aged animal models, PN administration elevated A2AR/AC/PKA/CREB/PCK1 pathway expression, increased M2 macrophage markers, improved collagen density and skin elasticity [^byun2025]

This mechanism is distinct from the HA-hydration mechanism and from the polymer-scaffold mechanism — it operates via a paracrine macrophage-to-fibroblast signalling relay. The A2AR → PCK1 → M2 polarization → SMAD/STAT3 chain is the novel contribution of Byun 2025; PCK1 inhibition reversed all effects, confirming the pivotal role of this metabolic node. An observational study (n=42; Ziade 2026 [^ziade2026]) of PN injections for periorbital rhytides reported statistically significant improvement in FACE-Q patient-reported outcomes through 6 months, with greatest response at 3 months. No control group. #gap/needs-replication

| Dimension | Status |
|---|---|
| A2AR mechanism conserved in humans? | Yes — A2AR/cAMP/PKA/CREB/PCK1 pathway is human-conserved; role of CD73 in PN→adenosine step is plausible but not confirmed by Byun 2025 #gap/no-mechanism |
| Fibroblast collagen response demonstrated in aged human skin? | Not yet in placebo-controlled human study; demonstrated in aged mouse models [^byun2025] |
| Replicated in humans? | Observational only; no blinded sham-controlled RCT #gap/needs-human-replication |

### Biostimulatory polymers — neocollagenesis scaffold

Biodegradable synthetic polymers — PLLA (poly-L-lactic acid), PDLLA, PCL (polycaprolactone), PDO (polydioxanone), and CaHA (calcium hydroxylapatite microspheres) — operate by a fundamentally different mechanism from HA or PDRN. After injection, the polymer particles are recognized as foreign bodies and engulfed by macrophages, triggering a controlled inflammatory-resolution sequence:

- Macrophage-driven TGF-β and FGF secretion activate surrounding dermal fibroblasts
- Activated fibroblasts upregulate collagen I/III via SMAD2/3 phosphorylation
- As the polymer degrades over weeks-to-months, newly synthesized collagen fills the space, producing durable volumetric and structural improvement

This is the `dermal-biostimulation` mechanism class — a sustained polymer-scaffold-driven collagen induction that is the molecular basis for PLLA (Sculptra) FDA clearance for facial lipoatrophy (2009). CaHA (Radiesse) has a dual action: immediate volume fill from the calcium hydroxylapatite gel carrier + biostimulation as the microspheres degrade, releasing Ca²⁺ that independently stimulates fibroblast collagen synthesis. Full biostimulator mechanism, comparative evidence, and safety data live on [[biostimulatory-fillers]] (parallel page seeded concurrently) — the present page provides the umbrella context and cross-links.

### Polycomponent formulations — substrate provision + direct fibroblast stimulation

NCTF135HA (the canonical polycomponent product: 50 mg/mL non-crosslinked HA + 53 components including vitamins A, C, E; amino acids proline/glycine/lysine/leucine; nucleic acids; minerals; coenzymes) is designed to provide the full substrate matrix for fibroblast biosynthetic activity while simultaneously delivering HA for hydration. An in vitro comparison study (Abuyousif 2025, doi:10.3390/polym17050638 [^abuyousif2025]) measured total collagen induction in a 72-hour human fibroblast model; NCTF135HA was one of the comparators, and a PN-HA complex outperformed it. A separate in-vitro study by Jäger et al. [^rho2024] found NCTF135HA supports cell proliferation and increases mRNA expression of type I collagen, MMP-1, and TIMP-1 in fibroblasts over 11 days. A separate clinical comparison (Savoia et al., n=50 women; two HA-based solutions one with idebenone, one with HA+vitamins+amino acids+coenzymes+antioxidants) reported significant improvements in aging skin appearance — this is distinct from the Jäger in-vitro data; the n=50 is a clinical study, not the in-vitro model. #gap/needs-replication — the primary Jäger and Savoia sources are cited via Rho 2024 and not independently read; n=50 sourcing is from Rho's synthesis only.

The amino acid functional cluster (proline, glycine, lysine + low-MW HA) provides direct collagen biosynthesis substrates — these are the hydroxyproline/hydroxylysine-forming amino acids — and some evidence suggests low-MW HA fragments at this size act as chemotactic signals for fibroblast migration to the injection site [^rho2024].

Intradermal botulinum toxin (~20 U/mL, microdroplet injection technique) is included in some polycomponent and standalone protocols. The mechanism here is **not** volumetric or collagen-stimulating: intradermal BTX-A suppresses neurogenic inflammation in the papillary dermis (substance P / CGRP release from cutaneous sensory fibers → local inflammatory cascade), reduces sebaceous gland activity, and may improve skin texture/pore size via adrenergic mechanisms. This is mechanistically distinct from all other booster categories and is the only category without an ECM-direct target. Its use is off-label for skin texture indications (on-label use is for hyperhidrosis and striated muscle spasm).

### Exosomes

MSC-derived exosomes (typically from Wharton's jelly or adipose MSCs) contain a paracrine cargo of growth factors, miRNAs, and signalling proteins that activate dermal fibroblasts and keratinocytes. This category is early-stage: no large RCT exists, regulatory frameworks are unresolved (FDA considers most exosome products as unlicensed biologics), and batch-to-batch variability is high. The wiki's atomic page for this category is [[exosome-skin-therapy]] (seeded in parallel). This page notes the category and cross-links only. #gap/needs-human-replication

---

## Injection technique and delivery

Standard technique for skin boosters (per Rho 2024 [^rho2024]):
- **Needle:** 33–34G, intradermal multipuncture, ~10° tangential approach to the skin surface
- **Depth:** papillary-to-mid dermis for most formulations; deeper placement for biostimulators (mid-to-reticular dermis)
- **Volume:** small deposits (~0.05–0.1 mL per puncture point) distributed across the treatment zone; total volume typically 1–3 mL per session
- **Session spacing:** 2–4 weeks for HA/PN series; longer intervals for biostimulators (PLLA every 4–6 weeks; PCL every 8–12 weeks)
- **Automated delivery:** multineedle stamp devices and needle-free jet injectors (high-pressure microjet pierces dermis without a conventional needle) improve consistency and reduce operator-dependent variability

The wounding from the needle itself overlaps with the mechanism of [[microneedling]] — intradermal punctures trigger a wound-healing cascade independently of any injected agent. This is an **additional confound** in the clinical evidence: studies comparing an active booster to "no treatment" conflate the bioactive agent effect with the needle-wound effect. Sham-controlled studies (saline injection through the same needle protocol) are the only way to isolate agent-specific benefit.

---

## Safety

The overall safety profile of skin boosters is well-established in Korean and European aesthetic practice. Adverse events are mostly mild and transient:

- **Common (expected):** erythema, bruising, transient papules/lumps at injection sites, mild swelling — resolving within days
- **Uncommon:** persistent nodule formation (risk is polymer-dependent — higher for poorly dispersed PLLA and CaHA; lower for HA and PN)
- **Rare/serious:** vascular occlusion (if inadvertently injected intra-arterially — rare but causes tissue necrosis or, for facial injections, visual loss from retrograde embolism to the central retinal artery); infection; granulomatous reactions

The vascular occlusion risk is shared with all facial injectables and depends on technique (aspiration, low injection pressure, appropriate depth) rather than on the agent class. CaHA and PLLA microspheres are **particulate** — they carry higher embolic risk if injected intravascularly than clear solutions (HA, PN). Detailed biostimulator safety (nodule incidence, granuloma management) lives on [[biostimulatory-fillers]].

**Regulatory note:** Most skin booster products are CE-marked (EU) or Korea-MFDS-approved. FDA clearance is limited — Sculptra (PLLA for facial lipoatrophy, 2009) and Radiesse (CaHA for volume correction) are FDA-cleared; most non-crosslinked HA "booster" formulations and PN products are NOT separately FDA-approved as skin boosters (HA fillers have broader FDA clearance, but non-crosslinked biorevitalization preparations exist in a regulatory grey zone in the US). In South Korea, skin boosters are a mainstream, well-codified aesthetic category with established clinical practice guidelines.

---

## Relationship to existing wiki pages

- **[[microneedling]]** — the needle-wounding mechanism overlaps with every injectable booster's delivery: intradermal punctures trigger wound-healing independently of the injected agent. Sham-controlled (saline-injection) booster studies are needed to isolate agent effect from needle effect. Microneedling + booster co-application is a common clinical protocol (particularly microneedling + PN or microneedling + PRP) whose combined evidence cannot distinguish the two contributions.
- **[[dermatologic-resurfacing]]** — device-mediated collagen stimulation (lasers, RF, HIFU); shares the neocollagenesis endpoint but operates via photon/radio-wave/ultrasound injury rather than chemical/biological deposition. Combination with injected boosters in clinical protocols is common.
- **[[retinoids]]** / [[tretinoin]] / [[niacinamide]] — topical counterparts with strong (retinoids) or limited (other actives) human evidence for collagen synthesis in aged skin; mechanistically complementary to injectable boosters (retinoids act intracellularly via RAR/AP-1; boosters act extracellularly via ECM substrate, scaffold, or purinergic receptor signalling)
- **[[hyaluronic-acid]]** — full molecular biology of HA (MW-dependent activity, HMW-HA anti-inflammatory mechanism, HYAL biology, translational gap for systemic aging) lives on the HA compound page; this page covers only the intradermal injection use case
- **[[chemical-peels]]** — acid-mediated controlled wounding shares the controlled-injury-to-neocollagenesis paradigm; distinct from biostimulation (chemical injury is acute and self-limited; polymer scaffold is sustained-release)
- **[[biostimulatory-fillers]]** — the biostimulator sub-category (PLLA, PCL, PDO, CaHA) has its own atomic page with mechanism detail, comparative evidence, and nodule safety
- **[[pdrn]]** — polynucleotide/PDRN compound-level page (seeded in parallel); mechanism detail, dose, and product-specific evidence lives there
- **[[exosome-skin-therapy]]** — exosome injectable category; seeded in parallel

---

## Note on the retracted classification paper

The paper Yi KH et al. "Skin boosters: Definitions and varied classifications." *Skin Research and Technology* 2024;30(3):e13627 (DOI 10.1111/srt.13627) is **RETRACTED** (retraction DOI 10.1111/srt.70297, November 21, 2025).

[^yi2024retracted]: **RETRACTED** — doi:10.1111/srt.13627 · Yi KH, Winayanuwattikun W, Kim SY et al. · *Skin Research and Technology* 2024 Mar;30(3):e13627 · **Retracted November 21 2025** (retraction DOI 10.1111/srt.70297) — reasons: insufficient peer review, uncited/unlicensed images, promotional bias, and factual inaccuracies (product duration claims and Sculptra/PLLA characterization, per Martschin et al. Letter to Editor DOI 10.1111/srt.13827, *Skin Research and Technology* 2024 Jun;30(6):e13827) · **Do NOT cite for any biological or clinical claim. Use Rho 2024 (doi:10.1055/a-2366-3436) as the synthesis anchor instead.**

---

## Recency search — R25 (2019–2026)

**Searches conducted 2026-06-09.** The following queries were run via PubMed eutils:

1. `skin boosters injectable aging` mindate=2020 → 26 hits; top 20 reviewed
2. `skin boosters AND (meta-analysis OR randomized controlled trial OR systematic review)` mindate=2019 → 19 hits, mostly off-topic (vaccine injection/skin test RCTs); on-topic: PMID 35643988 (Kleine-Börger 2022 HA RCT), PMID 40304039 (CPM-HA20G RCT 2025)
3. `polynucleotide PDRN injectable skin aging` mindate=2020 → 3 hits
4. `(polynucleotide OR PDRN) AND skin AND (aging OR rejuvenation OR photoaging)` mindate=2020 → 15 hits; PMID 41689167 (Ziade 2026 observational PN study) integrated
5. `biostimulator injectable skin collagen aging` mindate=2020 → 15 hits; no on-topic RCT/meta-analysis
6. `hyaluronic acid AND (skinbooster OR skin booster OR mesotherapy) AND face AND (aging OR rejuvenation)` mindate=2019 → 24 hits; PMID 40304039, PMID 38913131, PMID 40217752 reviewed

**High-priority (RCT/meta-analysis) triage:**
- Kerscher 2021 (PMID 35070607, CPM-HA20G multicenter RCT n=159) — integrated; confirmed 9-month hydration benefit
- Kleine-Börger 2022 (PMID 35643988, CPM-HA20G RCT n=15) — integrated; confirms viscoelastic property improvement
- Rutnumnoi 2025 (PMID 40304039, CPM-HA20G vs CPM-HA20 split-face RCT n=30) — integrated; CPM-HA20G showed superior pore-reduction vs HA alone

**Materially newer than Rho 2024 (submitted ~mid-2024):**
- **Byun 2025** (PMID 40943641, doi:10.3390/ijms26178720) — most significant addition: mechanistically characterizes the polynucleotide → A2AR → PCK1 → M2 macrophage → SMAD/STAT3 → fibroblast collagen pathway for the first time. This is the best-characterized mechanistic chain for PDRN/PN and was not available at the time Rho 2024 was written. Integrated as a primary mechanism citation.
- **Ziade 2026** (PMID 41689167) — observational PN study n=42 with FACE-Q outcomes; supports clinical improvement signal but no control arm

**No meta-analysis or large RCT (n>100) newer than Rho 2024** was found for any injectable skin booster category. The field remains at the small-study / practice-based evidence tier. No recent source contradicts the Rho 2024 framing. The Byun 2025 mechanistic paper is additive, not contradictory.

---

## Limitations and gaps

- **No sham-controlled RCT for any booster category.** The needle-wound effect confounds every comparative study between booster and "no treatment"; every agent that claims superiority over baseline may be demonstrating combined needle + agent effects. This is the dominant evidence gap for the entire class. #gap/needs-replication
- **Predominantly Korean-practice and small European studies.** The evidence base reflects Korea-MFDS regulatory context; Western-context blinded replication is sparse. #gap/needs-human-replication
- **Product heterogeneity makes class-level evidence claims invalid.** "HA booster" covers a spectrum from 1 mg/mL uncrosslinked to 20 mg/mL lightly crosslinked; "PN booster" covers DNA fragments from 50 bp to >1 MDa. Pooling across products is not valid without product-level standardization.
- **Durability data beyond 6–12 months is largely absent.** Most studies report endpoints at 3–6 months; durable benefit vs. repeat-injection-maintained improvement is not distinguished. #gap/long-term-unknown
- **Exosome category lacks regulatory clarity and controlled evidence.** FDA has not approved any exosome skin product; batch heterogeneity is high; no sham-controlled RCT. #gap/needs-replication
- **Biostimulator (polymer) nodule risk.** Nodule incidence is technique-dependent and product-dependent; detailed safety data lives on [[biostimulatory-fillers]].
- **`clinical-trials-active: null`** — ClinicalTrials.gov query not conducted for this umbrella page; query each sub-category's atomic page for per-product trial counts.

---

## Cross-references

- [[hyaluronic-acid]] — HA compound page (molecular biology, MW-dependent activity, systemic aging relevance)
- [[pdrn]] — polynucleotide/PDRN compound page (mechanism detail, dose, product-specific evidence) [stub; seeded in parallel]
- [[biostimulatory-fillers]] — class page for PLLA/PCL/PDO/CaHA biostimulators [stub; seeded in parallel]
- [[exosome-skin-therapy]] — exosome category page [stub; seeded in parallel]
- [[microneedling]] — procedural collagen-induction; needle-wound confounder
- [[dermatologic-resurfacing]] — device-mediated wounding; comparator modality
- [[chemical-peels]] — acid-mediated controlled wounding; comparator modality
- [[retinoids]] — topical collagen-synthesis class; strongest topical evidence base
- [[skin-aging]] — phenotype page (the target)
- [[dermis]] — tissue anatomy (the structural target of injection)
- [[dermal-fibroblasts]] — the primary cell-type activated by all booster categories
- [[col1a1]] / [[col3a1]] — neocollagenesis markers
- [[eln]] — elastin; secondary ECM target
- [[loss-of-proteostasis]] — primary hallmark targeted
- [[altered-intercellular-communication]] — secondary hallmark (paracrine fibroblast signalling)
- [[studies/rho-2024-injectable-skin-boosters]] — synthesis anchor study page

---

## Footnotes

[^rho2024]: [[studies/rho-2024-injectable-skin-boosters]] · doi:10.1055/a-2366-3436 · PMID 39544509 · PMC11560330 (open access) · narrative review · Rho NK, Kim HS, Kim SY, Lee W · *Archives of Plastic Surgery* 2024;51(6):528–541 · scope: injectable skin boosters for aging skin rejuvenation (classification, mechanisms, delivery, safety)

[^kerscher2021]: doi:10.1097/GOX.0000000000003973 · PMID 35070607 · randomized multicenter clinical study · n=159 (2:1 multiple-dose vs single-dose CPM-HA20G; glycerol+HA formulation) · co-primary endpoint: skin hydration at weeks 4, 8, 16 · significant hydration improvement at week 16 in dry/very dry skin subjects (multiple-dose group P=0.0013); clinical benefit maintained up to ~9 months post-last-injection · *Plastic and Reconstructive Surgery — Global Open* 2021 Dec;9(12):e3973 · Kerscher M, Prager W, Fischer TC, Gauglitz G, Pavicic T, Kühne U, Kravtsov M, Hofmann M, Dersch F, Sattler G · manufacturer-sponsored; no sham/placebo control #gap/needs-replication

[^kleineborger2022]: doi:10.1111/srt.13167 · PMID 35643988 · randomized controlled trial · n=15 (1 vs 3 treatments CPM-HA20G) · biophysical endpoints: biomechanical viscoelastic skin properties (firmness, skin fatigue, density) via Cutometer at baseline and through 36 weeks · statistically significant improvement in skin firmness after 1 or 3 treatments; 3-treatment group additionally improved fatigue and density · *Skin Research and Technology* 2022;28(4):633–642 · Kleine-Börger L, Hofmann M, Kerscher M · small n; no sham control #gap/needs-replication

[^byun2025]: doi:10.3390/ijms26178720 · PMID 40943641 · in vitro + in vivo (mouse) · Byun KA, Park HJ, Oh S, Son KH, Byun K · *International Journal of Molecular Sciences* 2025;26(17):8720 · model: senescent macrophage in vitro + aged mouse skin · polynucleotides → adenosine/cAMP/PCK1 → M2 macrophage polarization → ↓oxidative stress → conditioned media stimulates fibroblast collagen I/III via SMAD/STAT3; PCK1 inhibition reversed effects; in vivo: improved collagen density and elasticity · open access

[^ziade2026]: doi:10.1111/jocd.70736 · PMID 41689167 · prospective observational study · n=42 patients; no control group · PN (polynucleotide) 7.5 mg/mL, 2 mL per session, 2 sessions; FACE-Q questionnaire primary endpoint at baseline/1/3/6 months · significant improvement in lower eyelid and crow's feet ratings across all follow-ups vs baseline (p<0.001); greatest response at 3 months · *Journal of Cosmetic Dermatology* 2026;25(2):e70736 · observational only; no sham arm #gap/needs-replication

[^abuyousif2025]: doi:10.3390/polym17050638 · PMID 40076130 · in vitro + open-label clinical · n=not specified for clinical component · PN-HA complex vs Profhilo, Suisselle Cellbooster Glow, and NCTF135HA · fibroblast total collagen induction model (72h); rheological behavior; antioxidant activity · PN-HA complex outperformed comparators including NCTF135HA in total collagen induction · *Polymers (Basel)* 2025;17(5):638 · in vitro collagen endpoint; clinical component uncontrolled #gap/needs-replication
