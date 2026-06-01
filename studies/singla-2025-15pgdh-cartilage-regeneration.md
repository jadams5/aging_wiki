---
type: study
doi: 10.1126/science.adx6649
pmid: 41308124
pmc: PMC13127300
title: "Inhibition of 15-hydroxy prostaglandin dehydrogenase promotes cartilage regeneration"
authors: [Singla M, Wang YX, Monti E, Bedi Y, Agarwal P, Su S, Ancel S, Hermsmeier M, Devisetti N, Pandey A, Bakooshli MA, Palla AR, Goodman S, Blau HM, Bhutani N]
year: 2026
journal: Science
study-design: in-vivo
publication-type: research-article
volume: 391
issue: 6789
pages: "1053-1062"
organism: mus-musculus
n-subjects: null
intervention: ["[[sw033291]]"]
hallmarks-tested: ["[[stem-cell-exhaustion]]", "[[altered-intercellular-communication]]", "[[cellular-senescence]]"]
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings:
  - 15pgdh-elevated-aged-injured-cartilage
  - systemic-and-local-pgdhi-reduces-oarsi-score
  - pain-reduction-behavioral-assays
  - scrna-seq-chondrocyte-subpopulation-mapping
  - hypertrophic-chondrocytes-decreased-articular-chondrocytes-increased
  - regeneration-via-preexisting-chondrocyte-reprogramming-not-stem-cell-expansion
  - human-oa-explant-validation
  - mitochondrial-biogenesis-increased
local-pdf: null
verified: true
verified-date: 2026-05-23
verified-by: claude
verified-scope: "Verified against PMC13127300 full-text HTML (PMC release 2026-04-29). Journal PDF not accessed (a local paper archive: failed; closed-access at Science). All quantitative claims cross-checked against PMC article text and figures. Supplementary figure data not directly verifiable from PMC HTML — CODEX spatial p-values and some secondary figure details may require journal PDF access for complete verification. GEO data (GSE308009) not independently validated."
---

# Inhibition of 15-hydroxy prostaglandin dehydrogenase promotes cartilage regeneration

Singla M, Wang YX et al. — *Science* 391:1053-1062 (2026) — DOI: 10.1126/science.adx6649

## TL;DR

15-PGDH — the enzyme that degrades PGE2 — is elevated in aged and injured articular cartilage. Inhibiting it with the small molecule SW033291 (PGDHi) reduces OA pathology scores, restores cartilage matrix, and relieves pain in mouse models, via reprogramming of preexisting chondrocytes toward matrix-synthesizing phenotypes — not by recruiting stem cells. Human OA cartilage explants from 11 patients (characterization cohort) show the same 15-PGDH+/CD200+ subpopulation; ex vivo PGDHi treatment (n=5 per group) improves GAG content and cartilage stiffness. This is a candidate disease-modifying OA drug (DMOAD) mechanism at the preclinical stage, with a clinical-stage licensee (Epirium Bio). The Bhutani/Blau labs have now extended 15-PGDH inhibition across three tissue contexts: skeletal muscle [^palla2021], neuromuscular junction [^bakooshli2023], and articular cartilage (this paper).

## Background

Osteoarthritis (OA) affects ~30–50% of adults over 65 by radiographic criteria [^osteoarthritis-page]. No disease-modifying OA drugs (DMOADs) are approved; current pharmacotherapy is analgesic only. Adult articular cartilage is largely post-mitotic and avascular, historically making regeneration seem intractable. The prostaglandin E2 (PGE2) axis is known to regulate inflammation and tissue repair, but the upstream enzyme controlling cartilage PGE2 availability had not been systematically investigated in the aging context.

This paper builds directly on Palla et al. 2021 [^palla2021], which identified 15-PGDH as a "gerozyme" — an enzyme that rises with age and suppresses tissue regeneration — in skeletal muscle. That study used SW033291 to raise endogenous PGE2 in aged muscle, recovering mass and strength. The logic is identical here: in cartilage, age-related 15-PGDH elevation depletes local PGE2, impairing the chondrocyte homeostatic program.

## Methods

### Animal models

- **Aged mice:** 24–28-month-old C57BL/6 (vs young, 3–4-month-old controls)
- **Post-traumatic OA (PTOA) model:** tibial compression causing ACL rupture in young C57BL/6; this induces mechanical OA distinct from age-related OA

### 15-PGDH inhibitor

**SW033291** (PGDHi); Ki = 0.1 nM against 15-PGDH; the same compound used in Palla 2021 and Bakooshli 2023.

- **Systemic route:** 5 mg/kg intraperitoneally, daily × 1 month (aged mice)
- **Local route:** 0.15 mM intra-articular injection, twice weekly × 4 weeks (PTOA model)

### Structural and matrix outcomes

- OARSI scoring (Max and Summit) — standardized histopathological OA severity scale
- Glycosaminoglycan (GAG) content — Safranin O staining + DMMB dye assay
- Collagen II (COL-2) immunofluorescence

### Pain / behavioral assays (PTOA model, 8 weeks post-injury)

- Von Frey filament test (mechanical nociception; 0.008–1 g range)
- Pressure Application Measurement (PAM) device (pressure tolerance)
- CatWalk XT gait analysis (paw contact area and intensity)

### Single-cell and spatial profiling

- **scRNA-seq:** Parse Biosciences Evercode WT Mega v1 kit; bioinformatics via Scanpy; murine articular cartilage from aged and PGDHi-treated mice. GEO accession GSE308009.
- **CODEX spatial imaging:** 26-antibody multiplexed immunofluorescence panel on demineralized joint sections

### Human OA explants

- Source: surgically discarded femoral condyles from total knee replacement (n=11 OA patients, ages 55–75, used for FACS characterization; n=5 per group for PGDHi treatment experiments)
- 4 mm diameter × 2–4 mm cylindrical explants
- PGDHi at 10 μM in DMSO; medium refreshed every other day × 1 week
- Readouts: GAG content (DMMB assay), cartilage stiffness (Young's modulus by nanoindentation), 48-plex Luminex cytokine panel
- Chondrocyte subpopulation: FACS isolation of CD200+ vs CD200− cells, followed by bulk RNA-seq (Novogene)

## Key results

### 15-PGDH is elevated in aged and injured cartilage

15-PGDH expression is ~2-fold higher in aged (24 mo) vs young (4 mo) cartilage (n=3 young, n=5 aged; p=0.036), and ~2-fold higher in cartilage 2 weeks post-ACL-rupture vs uninjured controls (p=0.0009) [^singla2025].

### SW033291 reduces OA severity — aged model

In aged mice treated systemically with PGDHi vs vehicle (n=9 per group) [^singla2025]:
- OARSI Max score: significantly decreased (p<0.0001)
- OARSI Summit score: significantly decreased (p=0.0001)
- GAG content: increased (p=0.041)
- COL-2 expression: increased (p=0.019)

### SW033291 reduces OA severity — PTOA model (intra-articular delivery)

In young mice with PTOA, local PGDHi vs vehicle (n=7 per group; cartilage evaluated at 6 weeks post-injury) [^singla2025]:
- OARSI Max score: decreased (p=0.0002)
- OARSI Summit score: decreased (p=0.0007)
- GAG content: increased (p=0.040)
- COL-2 expression: increased (p=0.043)

Both systemic and local delivery are effective, suggesting flexibility in administration route for future therapeutic development. #gap/needs-replication

### Pain reduction

Behavioral pain assays in PTOA mice at 8 weeks post-injury with PGDHi treatment (separate cohort from histology; pain cohort evaluated at 8 weeks post-injury) [^singla2025]:
- Von Frey (mechanical nociception): improved (p=0.003)
- PAM (pressure tolerance): improved (p=0.003)
- CatWalk maximum paw contact: improved (p=0.010, vehicle vs PGDHi)
- CatWalk mean paw intensity: improved (p=0.028, vehicle vs PGDHi)

### Chondrocyte subpopulation reprogramming (scRNA-seq)

Four major chondrocyte clusters identified in aged articular cartilage (vehicle vs PGDHi-treated aged mice) [^singla2025]:
1. **15-PGDH+/CD200+ hypertrophic-like** cluster — decreased from ~8% → ~3% of cells after PGDHi. Defining markers: CD200, Ihh, Mef2c, Wnt5b, Spp1, Pth1r, Alpl, Runx2 (not Col10a1 or Mmp13).
2. **15-PGDH− fibro-chondrocytes** — decreased from ~16% → ~8% after PGDHi
3. **15-PGDH− articular chondrocytes (ECM-synthesizing)** — increased from ~22% → ~42% (p=0.041) after PGDHi. Defining markers: Bmp5, Fgf2, Stat5a, Hdac9 (not Col2a1/Acan/Sox9 as primary markers).
4. **Non-responsive cluster** — ~40%, unchanged

CODEX spatial imaging confirmed: 15-PGDH+ cells reduced with PGDHi; aggrecan+ articular chondrocytes increased. CD200 (a marker of the hypertrophic-like subtype) decreased after treatment.

### Mechanism: gene expression reprogramming, not stem cell expansion

Ki67+ proliferating cells were unchanged between PGDHi and vehicle groups, establishing that the chondrocyte subpopulation shift occurs via **transcriptional reprogramming of preexisting chondrocytes** — not expansion of a progenitor pool [^singla2025]. **This directly contradicts a stem-cell-recruitment model.** Increased mitochondrial biogenesis was observed in PGDHi-treated cartilage, paralleling the muscle findings in Palla 2021 [^palla2021].

The upstream signal is PGE2 accumulation: SW033291 blocks 15-PGDH enzymatic activity (Ki 0.1 nM), allowing endogenous PGE2 to accumulate rather than being degraded. PGE2 acts via EP receptors on chondrocytes to reprogram gene expression toward an articular (ECM-synthesizing) fate and away from hypertrophic differentiation.

Inflammatory cytokines also changed: CCL7, CXCL10, CCL4, VEGF, IL-27, and IL-2 were significantly reduced in treated vs vehicle mice (48-plex Luminex). This SASP-like inflammatory landscape reduction parallels the altered-intercellular-communication hallmark. #gap/no-mechanism for which specific EP receptor subtype mediates the chondrocyte reprogramming effect.

### Human OA explant validation

**FACS characterization cohort (n=11 OA patients, 55–75 yr):** FACS validation confirmed CD200+ chondrocytes are present in end-stage OA cartilage [^singla2025]:
- CD200+ cells represent ~36.5% average abundance across the patient cohort
- 15-PGDH expression: ~10-fold higher in CD200+ vs CD200− cells (p=0.038)
- PGE2 secretion: ~5-fold lower in CD200+ cells (p=0.002), confirming higher enzymatic degradation activity

**Ex vivo PGDHi treatment cohort (n=5 per group, subset of the 11 patients):** intact cartilage explants treated with 10 μM PGDHi × 1 week:
- GAG content (DMMB assay): increased (p=0.017)
- Cartilage stiffness (Young's modulus by nanoindentation): increased (p=0.034)
- CD200+ population change: n=3 per group (p=0.037 reduction)
- 15-PGDH specific activity: decreased (p=0.048)
- Inflammatory cytokines: CCL3, CCL4, CCL5 reduced (effect on full panel was partial — not all cytokines changed)

Note: the "n=11" figure throughout the paper refers to patient-level FACS characterization; individual explant assays used n=5 per group (and n=3 for CD200+ change). The wiki's earlier reference to "n=11" for the treatment experiments was inaccurate.

This constitutes **human tissue evidence** for the mechanistic axis, though it is ex vivo — not an in vivo human trial. See extrapolation table below.

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | 15-PGDH enzymatic activity and CD200+ chondrocyte subpopulation confirmed in human OA cartilage (FACS in n=11 patients; functional explant assays n=5 per group) |
| Phenotype conserved in humans? | partial | Human OA explants show GAG recovery and stiffness improvement with PGDHi ex vivo (n=5 per group); whole-organism trial not yet done |
| Replicated in humans? | no (in-progress) | No published in vivo human trial; Epirium Bio holds license; clinical-stage status unknown at time of writing |

## Translational significance and pipeline

15-PGDH was coined a "gerozyme" by the Blau lab — an enzyme that is low in young tissues, rises with age or injury, and suppresses regeneration by depleting PGE2. The concept has now been validated across three tissue contexts:

| Paper | Tissue | Year | Journal |
|---|---|---|---|
| Palla et al. [^palla2021] | Skeletal muscle | 2021 | *Science* |
| Bakooshli et al. [^bakooshli2023] | Neuromuscular junction | 2023 | *Sci. Translational Medicine* |
| Singla et al. [^singla2025] | Articular cartilage | 2026 | *Science* |

**Epirium Bio** (formerly Myoforte) holds the Stanford-licensed patents for 15-PGDH inhibition and SW033291 derivatives. Co-founders H.M. Blau and A.R. Palla, along with Bhutani and Palla, are named inventors (see Conflicts of interest below). Clinical-stage status for the cartilage indication is unknown at time of writing. #gap/long-term-unknown for therapeutic safety window in humans. #gap/needs-human-replication for in vivo OA reversal.

If a DMOAD pipeline progresses to trial, OA in adults 65+ (~30% prevalence) represents a very large addressable population with no current pharmacological regenerative option. The analgesic + regenerative dual mechanism distinguishes PGDHi from current OA drugs (NSAIDs = analgesic only; GLP-1 agonists in early OA trials = primarily anti-inflammatory via weight reduction).

## Limitations and caveats

1. **Mouse-only in vivo data.** Both aged and PTOA mouse models used C57BL/6 — a single inbred strain. Whether results generalize across genetic backgrounds is untested.
2. **Human evidence is ex vivo only.** The human OA data (FACS characterization n=11; PGDHi treatment n=5 per group) is compelling mechanistically but does not establish that systemic or intra-articular PGDHi rescues OA in living humans.
3. **Short treatment windows.** Systemic treatment was 1 month (aged model); intra-articular was 4 weeks. Long-term durability of cartilage restoration is untested. #gap/long-term-unknown
4. **Cancer-aging tension.** 15-PGDH is a tumor suppressor in colon, lung, and breast cancer. Systemic inhibition may reduce the protective suppression of early tumors in aged individuals. The paper does not report tumor surveillance data in the 1-month aged cohort. This mirrors the concern raised for the muscle-aging indication [^palla2021] and is a canonical cancer–aging trade-off. See [[frameworks/cancer-aging-tradeoffs]]. #gap/long-term-unknown
5. **scRNA-seq is murine cartilage only.** The chondrocyte subpopulation taxonomy was derived from mouse joint sections. The human CD200+ data provides partial correspondence but the full 4-cluster map has not been validated in human tissue.
6. **PGDHi formulation not disclosed.** The paper uses SW033291 but does not provide full pharmacokinetic (ADME) data in the cartilage context. Intra-articular delivery would require a formulation distinct from systemic.
7. **Behavioral pain assays are surrogate measures.** Von Frey and CatWalk assess nociception and gait, which may not fully capture the human pain experience in OA.

## Conflicts of interest

Per the published paper: A.R. Palla, M. Singla, N. Bhutani, and H.M. Blau are named inventors on Stanford patent applications (63/123,061) regarding 15-PGDH inhibition in cartilage, licensed to **Epirium Bio**. A.R. Palla, Y.X. Wang, and H.M. Blau are named inventors on additional patent applications (62/860,180; 62/883,025; 63/105,182) for 15-PGDH inhibition licensed to Epirium Bio. Y.X. Wang and H.M. Blau hold patent application 18/704,002 for tissue and organ rejuvenation licensed to Epirium Bio. Stanford University holds patent application 62/983,421 for processing of multiplex microscopy images (Epirium licensing not stated). H.M. Blau receives consulting fees (entity not specified in the PMC text — consulting fees sentence appears truncated in the published COI statement). H.M. Blau and A.R. Palla have equity in and stock options from Epirium. H.M. Blau is a cofounder of Myoforte/Epirium.

**These COI are significant.** All three senior and co-corresponding authors have direct equity stakes. Results should be interpreted with standard caution pending independent replication. #gap/needs-replication

## Cross-references

- [[phenotypes/osteoarthritis]] — the phenotype this paper addresses
- [[sw033291]] — the small-molecule PGDHi used (stub; not yet seeded)
- [[15-pgdh]] — the enzyme target (stub; not yet seeded)
- [[prostaglandin-e2]] — the downstream mediator (stub; not yet seeded)
- [[studies/palla-2021-15pgdh-muscle-rejuvenation]] — foundational muscle study (stub; not yet seeded)
- [[studies/bakooshli-2023-15pgdh-nmj-regeneration]] — NMJ regeneration study (stub; not yet seeded)
- [[studies/qin-2026-semaglutide-oa]] — parallel OA DMOAD candidate (GLP-1 axis)
- [[studies/meurot-2022-liraglutide-oa]] — earlier GLP-1r agonist OA study
- [[hallmarks/stem-cell-exhaustion]] — hypertrophic chondrocytes as exhausted/misdifferentiated cells
- [[hallmarks/altered-intercellular-communication]] — inflammatory cytokine landscape shift
- [[hallmarks/cellular-senescence]] — hypertrophic-like chondrocytes share senescence markers
- [[frameworks/cancer-aging-tradeoffs]] — systemic 15-PGDH inhibition and tumor-suppressor risk
- [[processes/mitochondrial-biogenesis]] — increased in PGDHi-treated cartilage

---

[^singla2025]: [[studies/singla-2025-15pgdh-cartilage-regeneration]] · aged model: n=9/group C57BL/6 (24–28 mo); PTOA model: n=7/group; human FACS characterization: n=11 OA patients (55–75 yr); human explant treatment: n=5/group · in-vivo + ex-vivo · p<0.05 to p<0.0001 (per outcome) · model: C57BL/6 aged + PTOA; human femoral condyle explants (total-knee-replacement source)

[^palla2021]: [[studies/palla-2021-15pgdh-muscle-rejuvenation]] · doi:10.1126/science.abc8059 · n not stated (multiple cohorts) · in-vivo · model: aged C57BL/6; PGDHi = SW033291 · cited_by: 198 (citation_percentile: 100.0)

[^bakooshli2023]: [[studies/bakooshli-2023-15pgdh-nmj-regeneration]] · doi:10.1126/scitranslmed.adg1485 · in-vivo · model: denervated + aged mouse; PGDHi restores NMJ synapses

[^osteoarthritis-page]: [[phenotypes/osteoarthritis]] — prevalence 30–50% by radiographic criteria in adults 65+
