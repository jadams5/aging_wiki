---
type: index
aliases: [knowledge gaps, gap tracker]
---

# Knowledge gap tracker

Aggregated view of unresolved questions across the wiki, surfaced via the `#gap/*` tag taxonomy defined in [[CLAUDE]] § Knowledge gap markers.

For BIG open questions (multi-study controversies, foundational unknowns), create a dedicated page in `hypotheses/` or here in `gaps/`.

## How to add a gap

1. **Inline tag on an entity page** (lightweight) — append a `#gap/...` tag next to the relevant claim. Aggregated automatically below.
2. **Dedicated gap page** (heavyweight) — create `gaps/{slug}.md` for multi-study controversies. Frontmatter `type: gap` with sections "Why it matters," "What's known," "What's unknown," "What would resolve it."

---

## Needs human replication

Claims based only on model-organism evidence.

```dataview
LIST FROM #gap/needs-human-replication
SORT file.name
```

## Single-study claims (need replication)

```dataview
LIST FROM #gap/needs-replication
SORT file.name
```

## Contradictory evidence

Multi-source disagreement.

```dataview
LIST FROM #gap/contradictory-evidence
SORT file.name
```

## Effect observed, mechanism unknown

```dataview
LIST FROM #gap/no-mechanism
SORT file.name
```

## Dose-response unclear

```dataview
LIST FROM #gap/dose-response-unclear
SORT file.name
```

## Long-term outcomes unknown

```dataview
LIST FROM #gap/long-term-unknown
SORT file.name
```

## Unsourced claims (priority for next lint pass)

```dataview
LIST FROM #gap/unsourced
SORT file.name
```

## Stub pages

```dataview
LIST FROM #stub
SORT file.name
```

---

## Dedicated gap pages

```dataview
LIST FROM "gaps"
WHERE type = "gap"
SORT file.name
```

## See also

- [[gaps/planned-coverage]] — proactive *coverage* intent (pages we intend to write, zero-inbound); distinct from the `#gap/*` *research*-gap tags tracked above. Replaced the retired `ROADMAP.md` (see [[schema-history]] R50).
- [[lint-pass]] — periodic SOP that surfaces and triages these (§ Step 3 inbound-count discovery is the canonical seeding-priority source)
- [[adding-a-claim]] — when and how to apply gap tags
- [[hypotheses]] — for fully-formed but contested theories (heavier than a gap)
