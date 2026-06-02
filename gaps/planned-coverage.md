---
type: index
aliases: [planned coverage, coverage roadmap, seeding queue, proactive coverage intent]
---

# Planned coverage

Proactive coverage intent — topics the wiki *intends* to cover that the reactive discovery mechanisms don't surface on their own. This page replaces the former `ROADMAP.md` (retired 2026-06-02; see [[schema-history]] R50), which had decayed into ~80% closed-campaign archive (now living only in `log/`) plus a forward-queue that duplicated what the lint mechanisms already track.

## How seeding priority actually works now

Three mechanisms drive what gets seeded; **this page is only for the gap none of them catches**:

1. **Priority ranking → inbound-count discovery** ([[lint-pass]] § Step 3). For any "what should we seed next?" question, rank referenced-but-unseeded entities by distinct inbound `[[link]]` count. This is canonical — static checklists decay (the R27 "UPR listed as 5, actually 23" lesson).
2. **Reactive discovery → ad-hoc + distributed `#stub`.** New studies and user questions surface pages as they arise; and pages mark their own missing neighbours inline with `#stub` / implicit-stub wikilinks (e.g. the organ-system MOCs each list their planned pages). The **missing-page lint** aggregates these — it is the de-facto distributed roadmap, living where it's relevant.
3. **Proactive intent → this page.** Topics that *nothing links to yet* (zero inbound signal) so (1) can't rank them and (2) won't surface them, but that we know belong in the wiki. Keep this list short and curated; when an item acquires inbound links, it graduates to the inbound-count queue and should be removed here.

---

## Proactive coverage intent (low/zero inbound signal)

### Telomere maintenance machinery
- `[[telomere]]` — telomere DNA structure / T-loop biology / measurement methods (distinct from [[telomere-attrition]] hallmark and the telomerase machinery)
- `[[tcab1]]` / `[[wrap53]]` — Cajal-body targeting subunit of telomerase
- `[[topoisomerase]]` — DNA topology (also a fisetin off-target)

### Endocrine / signaling protein clusters (skin + neuro + metabolic)
- **Melanocortin completion:** PCSK1, PCSK2, CPE, PAM (POMC processing); AGRP, ASIP, MC2R
- **Neurotrophin signaling:** NGF, NTRK1/2/3, NGFR
- **cAMP signaling:** ADCY family, PRKACA, RAPGEF3, GNAS, CREB1, CRTC1, PDE4
- **Specialized pro-resolving mediators (SPM):** GPR32, ChemR23, LGR6, ALOX15, ALOX5, ALOX12, PTGS2
- **Melanogenesis enzymes:** MITF, TYR, TYRP1, DCT

### Pathways
- HGF-MET signaling · HPA axis · NO-cGMP-PKG · GH-JAK-STAT · arachidonic-acid pathway · omega-3 metabolism · phospholipase-A2

### Proteostasis cluster (surfaced at R27/R28 close)
- HSP90 paralogs: HSP90AB1 (constitutive cytosolic), GRP94/HSP90B1 (ER), TRAP1 (mitochondrial)
- UPR effectors: IRE1α/ERN1, XBP1, GRP78/HSPA5, CHOP/DDIT3 — plus an IRE1α cell-nonautonomous-longevity hypothesis-page candidate (Taylor/Dillin 2013; `treatment-mode: conceptual-frame`)
- TAK1-binding cluster: TAB1, TAB2, TAB3; IRAK1/IRAK2 (lower priority — IRAK4 is the master kinase)

### Phenotypes / processes
- Laron syndrome (referenced from GHR)

### Tyshkovskiy 2026 long-tail (seed only if inbound count rises)
- Universal-clock genes each with one-sentence support in the paper: `Ddost`, `Gpx1`, `Nmrk1`, `Fmo3`, `Vcam1`
- Predecessor transcriptomic clocks as biomarker pages if needed: Peters 2015 blood clock, RNAAgeCalc, Buckley 2023 brain clock (noted as `#gap` on [[biomarkers/transcriptomic-clock-tage]])

---

## Deferred propagation backlog

Targeted corrections deferred from prior verifier sweeps; not blocking new seeding. Each is a single edit, best done when the related cluster is next touched.

- [[metformin]] — Martin-Montalvo χ² values; Cabreiro 2013 dose-specific numbers + live-bacteria requirement
- [[rapamycin]] — Mannick 2018/2021 trial-identity disambiguation
- [[stem-cell-exhaustion]] MOC — Sim 2002 demyelination model fix; MSC therapy CRATUS quantitatives
- [[chronic-inflammation]] MOC — Carroll 2015 directionality; BHB-NLRP3 K⁺-efflux mechanism
- [[notch-pathway]] — verify Kalamakis 2019 attribution if cited

---

## See also

- [[gaps/README]] — the `#gap/*` tag tracker (research gaps, distinct from coverage gaps)
- [[lint-pass]] — inbound-count discovery (§ Step 3) is the canonical seeding-priority source
- [[log]] — closed-campaign history (formerly the bulk of ROADMAP.md)
