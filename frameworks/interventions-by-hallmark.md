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

> If any hallmark shows zero linked interventions, it must be flagged as a gap. The Dataview result is canonical because hard-coded counts can drift. As of 2026-08-02, [[telomere-attrition]] and [[stem-cell-exhaustion]] both have linked intervention pages; the tASO ingest added a new direct preclinical class to each.

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

**Class-level synthesis:** This hallmark has the highest-quality human evidence of any inflammaging-targeted class — CANTOS (canakinumab, n=10,061, Phase 3 RCT) demonstrated MACE reduction via IL-1β blockade. The primary translation gap is cost (`translation-blocked-cost` for canakinumab). The anti-inflammatory convergence of multiple compound classes here (metformin, egcg, quercetin, taurine, rapamycin, urolithin-a, senolytics, senomorphics, caloric restriction) reflects the integrative nature of inflammaging: upstream damage signals from multiple hallmarks funnel into this node. [[anti-il-11-antibodies]] add a preclinical ligand/receptor-targeted class with late-life mouse healthspan and survival evidence but no human aging trial. See [[chronic-inflammation]], [[interventions/pharmacological/senomorphics]].

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

**Class-level synthesis:** Direct intervention coverage remains sparse. EGCG links through autophagy/proteasome effects, while [[il-11-gene-silencing]] now contributes a preclinical ovarian-matrix example in which limiting collagen deposition changes a long-lived extracellular proteome. Spermidine and rapamycin operate strongly through autophagy but are tagged primarily to [[disabled-macroautophagy]] rather than this hallmark. Chaperone enhancers, proteostasis-specific targets and LAMP-2A stabilisers remain major unseeded gaps. #gap/needs-seeding

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

**Class-level synthesis:** The matrix now links multiple intervention families: heterochronic blood-product approaches, senolytics, mTOR inhibition, caloric restriction, stem-cell replacement, partial reprogramming, telomerase strategies, and [[telomeric-antisense-oligonucleotides]]. The Oppezzo 2026 tASO study is notable because HSPC function improved without increasing LSK abundance or elongating telomeres, but it remains a single preclinical program with only two human donors ex vivo. `low` tractability remains appropriate because no intervention is clinically validated to restore stem-cell function in normal human aging.

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

**Class-level synthesis:** [[anti-il-11-antibodies]] and [[il-11-gene-silencing]] now provide explicit cytokine-ligand/receptor examples on this axis, but their aging evidence remains preclinical. Broader coverage is still incomplete: canakinumab, senolytics and senomorphics act on intercellular inflammatory signaling but are not consistently tagged to this hallmark. #gap/needs-tagging

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

**Class-level synthesis:** Three intervention pages link here: [[telomerase-activators]], [[interventions/gene-therapy/aav-tert]], and [[telomeric-antisense-oligonucleotides]]. They cover telomerase activation, TERT delivery/telomere recapping, and suppression of persistent telomeric DDR without elongation, respectively. AAV-modTERT has reached an early human trial in dilated cardiomyopathy; tASOs remain preclinical and their human evidence is two donors ex vivo. `low` tractability remains appropriate because no approach has demonstrated clinical benefit for normal human aging or resolved long-term cancer/genomic-surveillance risk.

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
| [[stem-cell-exhaustion]] | 10+ intervention classes | low | No validated restoration of aged human stem-cell function; tASO remains preclinical |
| [[altered-intercellular-communication]] | 2 intervention classes | moderate | IL-11 ligand/receptor targeting is preclinical for aging; broader tagging remains incomplete |
| [[dysbiosis]] | 1 (metformin only via gut-microbiome-modulation) | moderate | Urolithin-a re-tagging + FMT seeding needed |
| [[genomic-instability]] | 1 ([[uv-protection]]) | low | UV-protection added R42 — first direct-mechanism intervention (UVB → AP-1/NF-κB → MMP / CPD photoaging axis); coverage gap partially resolved |
| [[telomere-attrition]] | 3 intervention classes | low | Human efficacy and long-term genomic/cancer safety unresolved |

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
3. **Every hallmark should be checked for linked interventions** — use the live Dataview rather than the hard-coded Gaps Summary. Any zero must be classified as a true therapeutic-landscape gap or a tagging/coverage gap. Telomere attrition is no longer zero after seeding telomerase activation, AAV-TERT, and tASO pages.
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
