---
type: sop
aliases: [citation conventions, writing claims]
---

# SOP: adding a claim to the wiki

Every biological claim must be (1) cited or (2) flagged as unsourced. This SOP covers the citation format and gap-marking conventions used everywhere on the wiki.

## The claim → citation pattern

```markdown
Fisetin reduced p16+ senescent cells by ~50% in aged C57BL/6 mice at 100 mg/kg
oral [^yousefzadeh2018]. **Not yet replicated in humans** #gap/needs-human-replication.

[^yousefzadeh2018]: [[studies/yousefzadeh-2018-fisetin-senolytic]] · n=20/group · randomized · p<0.01 · model: aged C57BL/6 mice
```

Three things happen in that paragraph:

1. The claim itself — quantitative, specific, includes route and dose.
2. A footnote with the *evidence quality signal* (n, design, p, organism) so a reader can judge the claim without chasing the link.
3. A `#gap/...` tag flagging that this is not yet human evidence.

## Footnote field order (always)

```
[[studies/...]] · n=N · design · p<X · model: descriptor
```

Allowed `design` values:
- `rct` — randomized controlled trial
- `observational` (also `cohort` or `case-control` if you want specificity)
- `meta-analysis`
- `systematic-review`
- `in-vivo` — non-human animal study
- `in-vitro` — cell culture
- `in-silico` — computational only
- `mendelian-randomization`
- `review` — narrative review (low evidence weight on its own)

Omit `p<X` if not applicable (descriptive studies, meta-analyses with effect sizes, etc.).

## When to use a bare DOI footnote vs a study page

- **Study page + footnote**: when the paper is the sole source for a claim, OR when you're extracting multiple claims from it.
- **Bare DOI footnote**: when the claim is well-established and you're citing one of many corroborating sources. Format:
  ```
  [^smith2020]: doi:10.1038/example · review · in [[archive_search:archive search --doi 10.1038/example]]
  ```

## Gap markers

Tag every claim that needs further evidence:

| Tag | When to use |
|---|---|
| `#gap/needs-human-replication` | Claim from model organism, no human equivalent yet |
| `#gap/needs-replication` | Single-study claim, no independent confirmation |
| `#gap/contradictory-evidence` | Two or more sources disagree (also link both in footnotes) |
| `#gap/no-mechanism` | Effect observed; mechanism unknown or hypothesized |
| `#gap/dose-response-unclear` | Efficacy known, optimal dose not |
| `#gap/long-term-unknown` | Short-term study only |
| `#gap/unsourced` | Claim added without citation; needs source |
| `#stub` | Page exists with frontmatter but no real content |

These flow into `gaps/README.md` via Dataview.

## How to phrase claims

- Be quantitative: "reduced X by 50%" not "significantly reduced X."
- Include relevant covariates: dose, route, duration, organism, age, sex.
- Distinguish observation from mechanism: "X correlates with Y" vs "X causes Y" — the latter requires intervention or genetic evidence.
- Hedge appropriately: "appears to," "in mice," "at supraphysiological doses" when these caveats apply.
- Quote effect sizes with their CIs when reported in the source.
- Flag null results as informative, not failures.

## When sources disagree

Don't pick a side. Document both:

```markdown
Caloric restriction extends lifespan ~30% in C57BL/6 mice [^liang2018], but recent
larger studies in heterogeneous mouse stocks find effects nearer 5–15% [^itp2024],
suggesting prior estimates were inflated by genetic background effects.
#gap/contradictory-evidence

[^liang2018]: [[studies/liang-2018-cr-c57bl6]] · n=80 · randomized · p<0.001 · model: C57BL/6
[^itp2024]: [[studies/itp-2024-cr-heterogeneous-mice]] · n=240/sex · randomized · p<0.05 · model: 4-way het mice
```

## Common mistakes

- **Citing a review as if it were primary evidence.** Reviews aggregate; cite the underlying primary papers when possible.
- **Citing the abstract and missing the actual result in the paper body.**
- **Omitting the organism.** "X reduces inflammation" is different from "X reduces inflammation in aged mice."
- **Quoting a press release / news article.** Always go back to the paper.
- **Inventing a citation that doesn't exist.** If unsure, tag `#gap/unsourced` and surface in the next lint pass.

## See also

- [[extracting-evidence]] — how to read a paper and create a study page
- [[lint-pass]] — how unsourced claims and gaps surface in periodic review
- [[_extrapolation-guide]] — model-organism translation rubric
