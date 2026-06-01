# studies/

One page per primary source from which we've extracted claims. Pages are referenced by wikilinks from the footnotes on entity pages.

See [[extracting-evidence]] for the full SOP — what to extract, what frontmatter to use, and how to structure the page.

## Naming convention

`{first-author-lastname}-{year}-{topic-slug}.md`

Examples:
- `yousefzadeh-2018-fisetin-senolytic.md`
- `lopez-otin-2023-hallmarks-expanding-universe.md`
- `calerie-2017-caloric-restriction-2yr.md` (consortium / acronym OK for multi-author papers)

## When to create a study page vs use a bare DOI footnote

- **Create a study page** when this paper is the sole or primary source for a wiki claim, OR when extracting multiple claims from it.
- **Bare DOI footnote** when citing one of many corroborating sources for an established fact.

See [[adding-a-claim]] for the citation conventions.

## Quick index

```dataview
TABLE year, organism, n-subjects, study-design, human-evidence
FROM "studies"
WHERE type = "study"
SORT year DESC
```

## High-impact reviews

```dataview
TABLE year, journal
FROM "studies"
WHERE type = "study" AND study-design = "review"
SORT year DESC
```

## Human RCTs (highest evidence weight)

```dataview
TABLE year, n-subjects, intervention
FROM "studies"
WHERE type = "study" AND study-design = "rct" AND human-evidence = true
SORT year DESC
```
