---
type: sop
aliases: [reading a paper, study extraction]
---

# SOP: extracting evidence from a primary source

When the wiki cites a paper for a non-trivial claim, create a corresponding `studies/` page so the evidence layer is auditable.

## When to create a study page

- Always when the paper is the *sole* source for a claim on the wiki.
- Always when extracting multiple distinct claims (so each footnote can deep-link).
- Optional when the paper is one of many corroborating sources for a well-established fact (a bare DOI footnote is fine).

## File naming

`studies/{first-author-lastname}-{year}-{topic-slug}.md`

Examples:
- `studies/yousefzadeh-2018-fisetin-senolytic.md`
- `studies/lopez-otin-2023-hallmarks-expanding-universe.md`
- `studies/calerie-2017-caloric-restriction-2yr.md` (consortium / acronym OK for multi-author)

## Required frontmatter

```yaml
---
type: study
doi: 10.1016/j.ebiom.2018.09.015
title: "Fisetin is a senotherapeutic that extends health and lifespan"
authors: [Yousefzadeh MJ, Zhu Y, McGowan SJ,...]   # truncate after ~5
year: 2018
journal: EBioMedicine
study-design: in-vivo                                # see allowed values below
organism: mus-musculus                               # or: homo-sapiens, multi
n-subjects: 80                                       # total across groups
intervention: ["[[fisetin]]"]                        # what was tested
hallmarks-tested: ["[[cellular-senescence]]"]
human-evidence: false                                # true if any human arm
peer-reviewed: true
preregistered: false                                 # true if NCT/OSF/EU-CTR registered
key-findings: [senescent-cell-clearance, lifespan-extension]
local-pdf: null
---
```

### Auto-populating frontmatter

Most fields can be pulled from :
- `title`, `year` (`publication_year`), `journal`, `oa_status`, `download_status`/`download_path`

Two fields the archive doesn't currently provide (as of 2026-05-04) — fetch from Crossref:

```bash
DOI="10.1016/j.ebiom.2018.09.015"
curl -s "https://api.crossref.org/works/$DOI" | jq '{
  authors: [.message.author[] | "\(.family) \(.given[0:1])"],
  abstract:.message.abstract
}'
```

Crossref's `abstract` field is JATS-XML — strip tags before pasting. Some publishers don't provide it; fall back to the paper itself.

The remaining fields (`study-design`, `organism`, `n-subjects`, `intervention`, `hallmarks-tested`, `human-evidence`, `preregistered`, `key-findings`) require reading the paper. They are the *whole point* of the study page — don't guess.

`study-design` allowed values: `rct | observational | cohort | case-control | cross-sectional | meta-analysis | systematic-review | in-vivo | in-vitro | in-silico | mendelian-randomization | review`

## What to extract into the page body

Most study pages should have these sections (omit any that don't apply):

```markdown
# {Title}

## TL;DR

One paragraph: what they did, what they found, why it matters for aging.

## Design

- Subjects: species, age, sex, n per group
- Intervention: dose, route, duration, controls
- Endpoints: primary and secondary

## Key results

- Quantitative outcomes with effect sizes and p-values
- Confidence intervals where reported
- Note any failed/null endpoints

## Extrapolation to humans

[Use the rubric from [[_extrapolation-guide]]]

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes/partial/no/unknown |... |
| Phenotype conserved in humans? |... |... |
| Replicated in humans? |... | NCT number if applicable |

## Limitations

- Authors' acknowledged limitations
- Limitations the wiki notes (small n, single lab, conflict of interest, etc.)

## Cited by wiki pages

[Backlinks; auto-populated by Obsidian]
```

## What NOT to do

- Don't paraphrase the abstract verbatim — extract structure (n, design, p-values).
- Don't omit null/negative findings. They're often the most informative part.
- Don't trust press releases, news coverage, or science-blog summaries over the paper itself.
- Don't extrapolate beyond the paper's actual claims (e.g., "this would also work in humans" if the paper didn't test humans).

## Quality flags to surface

If you notice any of the following while reading, add the corresponding tag and consider noting it in the wiki page that cites this study:

- Single lab, never replicated → `#gap/needs-replication`
- Industry-funded with author conflicts → note in "Limitations"
- p-hacking suspected (n < 10 per group, many comparisons, no correction) → flag as low confidence
- Retraction or correction notice → CRITICAL — update the page and notify user
- Preprint not yet peer-reviewed → set `peer-reviewed: false` and qualify claims

## See also

- [[retrieving-papers]] — how to get the PDF
- [[adding-a-claim]] — citation format on entity pages
- [[_extrapolation-guide]] — model-organism translation rubric
