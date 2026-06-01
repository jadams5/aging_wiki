---
type: framework
aliases: [intervention matrix, hallmark intervention map, "interventions by hallmark"]
sources: []
covers: [interventions, hallmarks, translation-gap, clinical-stage]
---

# Interventions by hallmark — matrix

This is the wiki's primary deliverable for the query: **"What interventions target [hallmark], and what stage is each at?"**

This page is a **navigational overlay / synthesis MOC** — all quantitative claims and mechanistic details live on atomic compound, intervention, and hallmark pages. This page links, ranks, and contextualises; it does not duplicate primary facts.

---

## Self-monitoring watchdog blocks

These three Dataview blocks surface drift whenever this page is opened. They should be reviewed at every seeding batch and lint pass.

### Watchdog 1 — Intervention count per hallmark (flag zeros)

```dataview
TABLE WITHOUT ID rows.file.link AS "Interventions", length(rows) AS "Count"
FROM "molecules/compounds" OR "interventions"
FLATTEN hallmarks AS h
GROUP BY h
SORT length(rows) ASC
```

> If any hallmark shows zero linked interventions, it must be flagged as a gap. As of R16, the following hallmarks have no compound or intervention page pointing to them: [[genomic-instability]], [[telomere-attrition]], [[epigenetic-alterations]] (partial — caloric restriction + NMN/NR point here), [[stem-cell-exhaustion]] (partial), [[altered-intercellular-communication]] (no compound page directly linked), [[dysbiosis]] (urolithin-a linked; no dedicated modulator page). See gaps section at bottom of this page.

### Watchdog 2 — Stale clinical-stage entries

```dataview
TABLE WITHOUT ID file.link AS Compound, clinical-stage AS Stage, verified-date AS "Verified", translation-gap AS "Gap"
FROM "molecules/compounds" OR "interventions"
WHERE contains(["phase-2","phase-3","phase-2-trials","phase-4","fda-approved"], string(clinical-stage))
  AND (date(verified-date) < date(today) - dur(180 days) OR !verified-date)
SORT verified-date ASC
```

> Clinical-stage data decays quickly. Any row returning here should trigger a ClinicalTrials.gov re-check per `sops/finding-aging-specific.md`.

### Watchdog 3 — R14 fields missing

```dataview
LIST FROM "molecules/compounds" OR "interventions"
WHERE !translation-gap OR !next-experiment
```

> Should return empty after R14 close (2026-05-05). Any result here means a compound or intervention page is incomplete and will not render correctly in the matrix below.

---

## How to read the matrix

- **Rows** = 12 hallmarks of aging (López-Otín 2023 framework).
- **Per-hallmark Dataview block** pulls all compound/intervention pages that link to that hallmark via `hallmarks:` or `target-hallmarks:` frontmatter.
- **Columns**: Compound | Mechanisms | Stage | Evidence level | Translation gap | Next experiment.
- **Mechanistic-tier** and **intervention-tractability** are hallmark-level properties from the hallmark MOC frontmatter.
- The class-level synthesis commentary after each block is original synthesis, not duplicating atomic-page claims.

> **Note on field asymmetry:** `type: compound` pages use `hallmarks:` for hallmark linkage; `type: intervention` pages use `target-hallmarks:`. Until field normalisation, the per-hallmark Dataview blocks below use separate WHERE clauses joined by OR to capture both. This is a known schema inconsistency flagged for a future cleanup pass.

---

## Cellular senescence

*Mechanistic tier: intermediate | Intervention tractability: high*

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap", next-experiment AS "Next experiment"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[cellular-senescence]])
  OR contains(target-hallmarks, [[cellular-senescence]])
SORT clinical-stage DESC
```

**Class-level synthesis:** This is the best-resourced hallmark for pharmacological intervention. Senolytics (dasatinib+quercetin, fisetin, navitoclax, A1331852, quercetin) and senomorphics (rapamycin, canakinumab via SASP suppression) converge here. The D+Q combination has the strongest human proof-of-target-engagement (Hickson 2019, n=9: −35% p16 mRNA in human tissue). However, no senolytic has yet reached a hard-endpoint Phase 3 RCT. The BCL-xL-selective PROTAC class (DT2216, PZ15227) is the highest-priority preclinical advance — it would resolve the navitoclax thrombocytopenia blocker. Translation gap: `phase-3-rct-needed` dominates. See [[interventions/pharmacological/senolytics]], [[cellular-senescence]].

---

## Chronic inflammation (inflammaging)

*Mechanistic tier: integrative | Intervention tractability: high*

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap", next-experiment AS "Next experiment"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[chronic-inflammation]])
  OR contains(target-hallmarks, [[chronic-inflammation]])
SORT clinical-stage DESC
```

**Class-level synthesis:** This hallmark has the highest-quality human evidence of any inflammaging-targeted class — CANTOS (canakinumab, n=10,061, Phase 3 RCT) demonstrated MACE reduction via IL-1β blockade. The primary translation gap is cost (`translation-blocked-cost` for canakinumab). The anti-inflammatory convergence of multiple compound classes here (metformin, egcg, quercetin, taurine, rapamycin, urolithin-a, senolytics, senomorphics, caloric restriction) reflects the integrative nature of inflammaging: upstream damage signals from multiple hallmarks funnel into this node. See [[chronic-inflammation]], [[interventions/pharmacological/senomorphics]].

---

## Deregulated nutrient sensing

*Mechanistic tier: intermediate | Intervention tractability: high*

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap", next-experiment AS "Next experiment"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[deregulated-nutrient-sensing]])
  OR contains(target-hallmarks, [[deregulated-nutrient-sensing]])
SORT clinical-stage DESC
```

**Class-level synthesis:** The densest intervention cluster in the wiki. Four distinct drug classes converge — mTOR inhibitors (rapamycin), AMPK activators (metformin), NAD precursors (NMN, NR), and dietary restriction (caloric-restriction). Rapamycin has ITP-validated mouse lifespan extension; metformin's TAME trial (~2028) is the landmark human test. NAD+ precursors reliably raise blood NAD+ but have been null on aging endpoints in Phase 2 RCTs to date. Caloric restriction is the only intervention with DunedinPACE clock-slowing evidence in humans (CALERIE, n=197). See [[deregulated-nutrient-sensing]].

---

## Disabled macroautophagy

*Mechanistic tier: intermediate | Intervention tractability: high*

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap", next-experiment AS "Next experiment"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[disabled-macroautophagy]])
  OR contains(target-hallmarks, [[disabled-macroautophagy]])
SORT clinical-stage DESC
```

**Class-level synthesis:** Multiple interventions induce autophagy by distinct routes: mTOR inhibition (rapamycin), AMPK activation (metformin, egcg), polyamine EP300 inhibition (spermidine), and direct mitophagy induction (urolithin-a). Epistatic evidence from model organisms shows autophagy is a required downstream effector for CR, rapamycin, and IIS-reduction longevity — the strongest mechanistic convergence in the wiki. Human evidence is weakest here: urolithin-a's ATLAS RCT missed its primary endpoint; spermidine has only observational human data. See [[disabled-macroautophagy]].

---

## Mitochondrial dysfunction

*Mechanistic tier: intermediate | Intervention tractability: moderate*

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap", next-experiment AS "Next experiment"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[mitochondrial-dysfunction]])
  OR contains(target-hallmarks, [[mitochondrial-dysfunction]])
SORT clinical-stage DESC
```

**Class-level synthesis:** The broadest coverage of any hallmark by compound count (creatine, NMN, NR, urolithin-a, taurine, metformin, egcg, caloric-restriction all link here). Exercise is the most reliable mitochondrial biogenesis intervention in humans but is not yet a seeded compound/intervention page. NAD+ precursors have been disappointing on mitochondrial endpoints in human RCTs (Yoshino 2021: muscle NAD+ unchanged, respirometry unchanged). Urolithin-a's mitophagy mechanism has biomarker support (phospho-Parkin increased at both doses in ATLAS) but hard-endpoint trials pending. Elamipretide (cardiolipin stabiliser) is on the roadmap but unseeded. See [[mitochondrial-dysfunction]].

---

## Epigenetic alterations

*Mechanistic tier: proximal | Intervention tractability: moderate*

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap", next-experiment AS "Next experiment"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[epigenetic-alterations]])
  OR contains(target-hallmarks, [[epigenetic-alterations]])
SORT clinical-stage DESC
```

**Class-level synthesis:** Only three compound/intervention pages currently link to this hallmark (NMN, NR, caloric-restriction). This under-represents the field: partial reprogramming (OSK/OSKM), HDAC inhibitors (butyrate), and SIRT1/6 activators all operate here but lack atomic pages. The DunedinPACE clock-slowing signal for caloric restriction (CALERIE) is the strongest human evidence. Partial reprogramming is the highest-potential frontier with zero clinical-stage representation. Translation gap: `preclinical-only` for the most promising interventions. See [[epigenetic-alterations]], [[hypotheses/information-theory-of-aging]]. #gap/needs-seeding: partial-reprogrammer, HDAC-inhibitor, SIRT6-activator compound pages.

---

## Loss of proteostasis

*Mechanistic tier: intermediate | Intervention tractability: moderate*

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap", next-experiment AS "Next experiment"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[loss-of-proteostasis]])
  OR contains(target-hallmarks, [[loss-of-proteostasis]])
SORT clinical-stage DESC
```

**Class-level synthesis:** Only one compound currently links here (egcg, via autophagy and proteasome enhancement). Spermidine and rapamycin operate strongly here (autophagy-mediated proteostasis) but are tagged to [[disabled-macroautophagy]] rather than this hallmark — a tagging gap. Chaperone enhancers (HSP-inducing drugs, CMA activators CA77.1/AR.7), proteostasis-specific targets, and LAMP-2A stabilisers are on the roadmap but unseeded. This hallmark has the largest compound-page gap relative to therapeutic relevance. #gap/needs-seeding: chaperone-enhancer compound pages; review whether spermidine + rapamycin should cross-link here.

---

## Stem cell exhaustion

*Mechanistic tier: integrative | Intervention tractability: low*

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap", next-experiment AS "Next experiment"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[stem-cell-exhaustion]])
  OR contains(target-hallmarks, [[stem-cell-exhaustion]])
SORT clinical-stage DESC
```

**Class-level synthesis:** Only creatine (via satellite-cell activation) currently links here. This under-represents the real intervention landscape: heterochronic plasma strategies, senolytics (clearing senescent niche cells), rapamycin (HSC function preservation), and caloric restriction all have preclinical evidence but are not tagged to this hallmark in their frontmatter. Stem cell transplantation and gene therapy approaches are not yet seeded. `low` tractability reflects the absence of any clinically validated approach to restore stem cell function in aged humans. #gap/needs-tagging: rapamycin, senolytics, caloric-restriction should add [[stem-cell-exhaustion]] to their hallmarks/target-hallmarks fields.

---

## Altered intercellular communication

*Mechanistic tier: integrative | Intervention tractability: moderate*

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap", next-experiment AS "Next experiment"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[altered-intercellular-communication]])
  OR contains(target-hallmarks, [[altered-intercellular-communication]])
SORT clinical-stage DESC
```

**Class-level synthesis:** Zero compound/intervention pages currently link to this hallmark — the largest gap in the matrix. The hallmark page cites heterochronic plasma strategies, senolytics (via SASP reduction), and anti-inflammatory compounds as relevant, but none are tagged here in their frontmatter. Canakinumab, senolytics, and senomorphics all act on the intercellular communication axis but are tagged only to [[chronic-inflammation]] and [[cellular-senescence]]. Resolution: a propagation pass should add [[altered-intercellular-communication]] to target-hallmarks/hallmarks for canakinumab, senolytics, senomorphics, and potentially rapamycin. #gap/needs-tagging: see propagation candidates below.

---

## Dysbiosis

*Mechanistic tier: integrative | Intervention tractability: moderate*

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap", next-experiment AS "Next experiment"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[dysbiosis]])
  OR contains(target-hallmarks, [[dysbiosis]])
SORT clinical-stage DESC
```

**Class-level synthesis:** Metformin (via gut-microbiome-modulation) currently links to this hallmark via frontmatter, and the dietary intervention class pages — [[interventions/dietary/prebiotics]], [[interventions/dietary/probiotics]] (ad-hoc seed 2026-05-22), [[interventions/dietary/postbiotics]], [[interventions/dietary/fmt]] — are all tagged with `target-hallmarks: [[dysbiosis]]`. Urolithin-a has a strong mechanistic link (postbiotic produced by gut bacteria, microbiome-mediated mechanism) but is not tagged here. #gap/needs-tagging: urolithin-a should add [[dysbiosis]] to hallmarks.

---

## Genomic instability

*Mechanistic tier: proximal | Intervention tractability: low*

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap", next-experiment AS "Next experiment"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[genomic-instability]])
  OR contains(target-hallmarks, [[genomic-instability]])
SORT clinical-stage DESC
```

**Class-level synthesis:** Zero compound/intervention pages link here. The hallmark page documents senolytics, NAD+ precursors (PARP1 substrate), and caloric restriction as tangential interventions, but none target genomic instability as a primary mechanism. This is a correct reflection of the therapeutic landscape — no intervention yet directly restores DDR fidelity in aged human tissue. `low` tractability is accurate. The most tractable near-term approach (NAD+ precursors → PARP1 substrate replenishment) is speculative. #gap/needs-tagging: NMN and NR have a DDR-support mechanism but are not tagged here; decision pending on whether a mechanism-speculative tag is appropriate.

---

## Telomere attrition

*Mechanistic tier: proximal | Intervention tractability: low*

```dataview
TABLE WITHOUT ID file.link AS Compound, mechanisms AS Mechanism, clinical-stage AS Stage, human-evidence-level AS "Evidence", translation-gap AS "Gap", next-experiment AS "Next experiment"
FROM "molecules/compounds" OR "interventions"
WHERE contains(hallmarks, [[telomere-attrition]])
  OR contains(target-hallmarks, [[telomere-attrition]])
SORT clinical-stage DESC
```

**Class-level synthesis:** Zero compound/intervention pages link here. The hallmark page documents TA-65 (commercially available but contested; observational data only) and AAV-TERT gene therapy (preclinical mouse, 24% median lifespan extension in 1-year-old mice). Neither has a seeded compound page. Gene therapy for TERT delivery is the highest-potential intervention with zero Phase 1 human safety data. `low` tractability is appropriate. #gap/needs-seeding: TA-65 compound page (with strong #gap/needs-replication caveat); AAV-TERT intervention page.

---

## Gaps summary

| Hallmark | Compound pages linked | Tractability | Primary gap |
|---|---|---|---|
| [[cellular-senescence]] | 5+ (high coverage) | high | Phase 3 RCT missing |
| [[chronic-inflammation]] | 5+ (high coverage) | high | Cost/access blocker for strongest agent |
| [[deregulated-nutrient-sensing]] | 5+ (high coverage) | high | Human hard-endpoint missing |
| [[disabled-macroautophagy]] | 4+ (good coverage) | high | Human endpoint missing |
| [[mitochondrial-dysfunction]] | 5+ (broad coverage) | moderate | NAD+ precursor null in humans; exercise unseeded |
| [[epigenetic-alterations]] | 3 (partial) | moderate | Partial reprogramming unseeded |
| [[loss-of-proteostasis]] | 1 (egcg only) | moderate | Multiple compound pages missing |
| [[stem-cell-exhaustion]] | 1 (creatine only) | low | Multiple compounds need re-tagging |
| [[altered-intercellular-communication]] | 0 | moderate | Propagation pass needed: tag senolytics, senomorphics, canakinumab |
| [[dysbiosis]] | 1 (metformin only via gut-microbiome-modulation) | moderate | Urolithin-a re-tagging + FMT seeding needed |
| [[genomic-instability]] | 1 ([[uv-protection]]) | low | UV-protection added R42 — first direct-mechanism intervention (UVB → AP-1/NF-κB → MMP / CPD photoaging axis); coverage gap partially resolved |
| [[telomere-attrition]] | 0 | low | TA-65 and AAV-TERT pages unseeded |

**Priority propagation candidates** (frontmatter changes needed on existing pages, not new pages):
1. [[rapamycin]] — add `[[stem-cell-exhaustion]]` to `hallmarks:`
2. [[senolytics]] — add `[[altered-intercellular-communication]]` and `[[stem-cell-exhaustion]]` to `target-hallmarks:`
3. [[senomorphics]] — add `[[altered-intercellular-communication]]` to `target-hallmarks:`
4. [[canakinumab]] — add `[[altered-intercellular-communication]]` to `hallmarks:`
5. [[urolithin-a]] — add `[[dysbiosis]]` to `hallmarks:`
6. [[caloric-restriction]] — add `[[stem-cell-exhaustion]]` to `target-hallmarks:`

---

## Class-level summary by tractability tier

### Tier 1 — Clinical-stage interventions with human RCT anchor

| Class | Best clinical agent | Strongest human evidence | Hallmarks covered |
|---|---|---|---|
| IL-1β neutralizer | [[canakinumab]] | CANTOS Phase 3 RCT (n=10,061) MACE HR 0.85 | [[chronic-inflammation]] |
| senolytic | [[dasatinib]]+[[quercetin]] | Hickson 2019 proof-of-target (n=9); Justice 2019 functional endpoints (n=14) | [[cellular-senescence]], [[chronic-inflammation]] |
| AMPK activator | [[metformin]] | TAME trial in progress; observational longevity signal | [[deregulated-nutrient-sensing]], [[mitochondrial-dysfunction]] |
| mTOR inhibitor | [[rapamycin]] | NIA ITP mouse lifespan extension (multi-site validated) | [[deregulated-nutrient-sensing]], [[disabled-macroautophagy]] |

### Tier 2 — Phase 2 RCT data, hard endpoint pending

| Class | Best agent | Phase 2 finding | Key gap |
|---|---|---|---|
| mitophagy inducer | [[urolithin-a]] | ATLAS: muscle biomarkers improved; primary endpoint (peak power) NS | `effect-size-too-small` |
| NAD precursor | [[nmn]] / [[nr]] | Blood NAD+ elevated; muscle/functional endpoints null | `effect-size-too-small` / `biomarker-only` |
| senolytic (fisetin) | [[fisetin]] | Phase 2 ongoing; mouse: 50% p16+ cell reduction | `biomarker-only` |

### Tier 3 — Preclinical / supplement stage

| Class | Agent | Strongest evidence | Human gap |
|---|---|---|---|
| BCL-xL-selective PROTAC | DT2216, PZ15227 (no page) | Preclinical mouse: thrombocytopenia-sparing senolysis | No IND filing yet |
| partial reprogrammer | OSK (no page) | Lu 2020 retinal reversal; Yang 2023 systemic ICE | No human data; teratoma risk |
| gene therapy | AAV-TERT (no page) | Bernardes 2012: 24% mouse lifespan extension | No Phase 1 |

---

## Maintenance protocol

### Seeder-agent checklist (R16 update to `.claude/agents/wiki-seeder.md`)

Every new `type: compound` or `type: intervention` page **must**:

1. Set `hallmarks:` (compound) or `target-hallmarks:` (intervention) with at least one entry — verified against the hallmark page frontmatter.
2. Populate R14 fields: `translation-gap:` (categorical) and `next-experiment:` (free-text one-liner).
3. Verify the compound's `mechanisms:` values match at least one class in [[frameworks/intervention-classes]]. If no class fits, add the class to `intervention-classes.md` before shipping.
4. After creating the page, open this matrix page and confirm the new row appears in the correct per-hallmark Dataview block. If it does not appear (due to a Dataview rendering issue or field mismatch), flag in the seeder summary.

### Lint-pass extension (`sops/lint-pass.md` § "Intervention matrix coverage")

The following checks have been added to the R16 lint protocol:

1. **Every `type: compound` and `type: intervention` page must have `translation-gap:` and `next-experiment:` populated.** (Already enforced by R14 lint check; repeated here for emphasis.)
2. **Every `mechanisms:` value on a compound page must match a class on `frameworks/intervention-classes.md`.** Flagged as `#gap/class-normalisation-needed`. After normalisation pass, lint should verify no orphan mechanism values remain.
3. **Every hallmark must have at least one intervention linked** — verified against this matrix's Gaps Summary table. Hallmarks with zero links (genomic-instability, telomere-attrition, altered-intercellular-communication as of R16) must be acknowledged as true therapeutic-landscape gaps (not wiki gaps) or as tagging gaps that need propagation passes.
4. **Watchdog 1 (intervention count per hallmark) must be reviewed** at every seeding batch to catch newly zero-linked hallmarks.
5. **Watchdog 2 (stale clinical-stage entries) must be resolved** within 180 days — trigger ClinicalTrials.gov re-check per `sops/finding-aging-specific.md`.

### Self-monitoring summary

- Watchdog 1 (intervention count) runs on page open — reviews live Dataview state.
- Watchdog 2 (stale clinical-stage) surfaces any compound/intervention entry older than 180 days by verified-date.
- Watchdog 3 (R14 fields missing) surfaces pages needing frontmatter population.
- The Gaps Summary table above is manually maintained but should be updated after each propagation pass or seeding batch.

---

## See also

- [[frameworks/intervention-classes]] — canonical mechanism class taxonomy + cleanup flags
- [[hallmarks-of-aging]] — López-Otín 2023 framework MOC
- [[interventions/pharmacological/senolytics]] — senolytic class page
- [[interventions/pharmacological/senomorphics]] — senomorphic class page
- [[interventions/lifestyle/caloric-restriction]] — caloric restriction page
- `sops/lint-pass.md` — full lint protocol including R16 intervention matrix checks
