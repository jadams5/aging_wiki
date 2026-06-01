---
type: sop
---

# Writing hypothesis pages

This SOP covers `type: hypothesis` pages — the synthesis layer that ties wiki evidence to testable claims about aging biology. These pages are how the wiki helps with **troubleshooting human aging**: when a finding lands, which hypothesis does it update?

## Core principle: synthesis MOC, not duplicate truth

Hypothesis pages are **synthesis MOCs over atomic facts** — they aggregate, weigh, and judge evidence that lives elsewhere on the wiki. They do NOT re-state primary findings.

**Concretely:**
- Each evidence claim is a one-sentence summary + wikilink to the verified atomic page
- Source of truth remains the study / protein / intervention / phenotype page
- If the atomic page gets updated, the hypothesis page can become stale — flag in lint pass
- If a claim has no verified atomic page to point to, tag `#gap/unsourced` and surface

**Anti-pattern:** restating a primary finding's n, p-value, mechanism on the hypothesis page. That duplicates and decays. Instead: "Igf1r+/- mice extend lifespan ~26% combined sexes — see [[insulin-igf1]] verified." One sentence, one wikilink.

## Two treatment modes

Different hypotheses warrant different formats. Choose at seeding time and document the choice in the frontmatter.

### Mode A: evidence-aggregating

Use when the hypothesis makes **specific testable predictions** and the wiki contains evidence directly bearing on them.

Examples: free-radical-theory-of-aging, hyperfunction-theory, information-theory-of-aging, hypotheses/negligible-senescence.

These pages function as **active research dashboards** — they should evolve as evidence accumulates.

### Mode B: conceptual frame

Use when the hypothesis is a **way of thinking about aging** that organizes broader phenomena rather than making sharp testable predictions.

Examples: disposable-soma-theory, antagonistic-pleiotropy.

These pages are lighter — they explain the framework and point to where specific predictions get tested elsewhere.

## Structure: Mode A (evidence-aggregating)

```markdown
---
type: hypothesis
aliases: [...]
proposed-by: [Author Name]
proposed-year: YYYY
status: active | contested | superseded | confirmed | falsified
treatment-mode: evidence-aggregating
key-evidence-for: ["[[studies/...]]", "[[interventions/...]]"]
key-evidence-against: ["[[studies/...]]"]
related-hallmarks: ["[[hallmark-name]]"]
verified: false
---

> ⚠️ Auto-extracted [date] — not yet verified. Synthesis pages can become stale as atomic pages update; flag for lint pass review.

# Hypothesis name

## The claim

[1-2 sentences stating exactly what the hypothesis asserts. Be precise — vague hypotheses can't be tested.]

## Status: [active | contested | superseded | confirmed | falsified]

[1-2 sentences on the current standing and why. Cite the most decisive evidence.]

## Key predictions

The hypothesis predicts:

1. [Prediction A — should be falsifiable]
2. [Prediction B]
3. [Prediction C]

## Evidence supporting

- **[Specific finding]** — see [[verified-atomic-page]]. (1 sentence summarizing what's in the atomic page; link does the rest.)
- **[Another finding]** — see [[other-verified-page]].

## Evidence against

- **[Contradictory finding]** — see [[verified-page]]. The atomic page documents the n, p-value, methodology.
- **[Failed-prediction trial]** — see [[intervention-page]] (verified-partial — null result).

## What would update this hypothesis

[Forward-looking section. What experiments / findings / cohort studies would shift the status? This is what makes the page useful for someone troubleshooting human aging — they know what to look for.]

## Related hypotheses

- [[other-hypothesis]] — adjacent / competing / complementary

## Related hallmarks

- [[hallmark-name]] — direct mechanistic link

## Related interventions

- [[intervention-page]] — directly tests prediction X

## Related model organism findings

[Where worm/fly/mouse studies sit in the evidence table — distinguish from human evidence.]

## Notes / open questions

[Synthesis-level commentary. Acknowledge contested data, methodological caveats. This is the "judgment" content; everything else is pointers.]
```

## Structure: Mode B (conceptual frame)

```markdown
---
type: hypothesis
aliases: [...]
proposed-by: [Author Name]
proposed-year: YYYY
status: active-frame | superseded-frame  # frames don't get falsified the same way
treatment-mode: conceptual-frame
related-hallmarks: ["[[hallmark-name]]"]
verified: false
---

> ⚠️ Auto-extracted [date] — not yet verified.

# Framework name

## The frame

[1-2 sentences: how does this framework organize aging biology?]

## What it explains well

- [Phenomena that fit cleanly into this framework]

## What it doesn't easily address

- [Phenomena where the framework strains or fails]

## Where specific predictions get tested

[Pointer to evidence-aggregating hypothesis pages or intervention/protein pages where derived testable claims live.]

## Related frameworks / hypotheses

- [[other-framework]]

## Notes / why this frame matters

[Brief synthesis commentary.]
```

## Discipline rules

1. **Every claim must either wikilink to a verified atomic page or carry `#gap/unsourced`.** No restating primary findings without pointer.
2. **Status assignment is a judgment call** — document the reasoning briefly in the body. "Falsified" should mean specific predictions failed in well-powered trials, not just "out of fashion."
3. **Differentiate evidence types:**
   - Direct test of prediction (highest weight)
   - Indirect support (lower weight)
   - Mechanism consistent (lowest weight — many hypotheses are consistent with the same mechanism)
4. **Flag immature hypotheses honestly.** If most evidence is preclinical, say so. If a hypothesis is exciting but young (e.g., information theory + Yamanaka reprogramming), don't oversell.
5. **Distinguish "has been falsified" from "predictions never tested."** A hypothesis with no derived testable claims is not "active" — it's underspecified. Note this if relevant.
6. **Update on atomic-page changes.** When a protein/intervention/study page gets a verifier correction, hypothesis pages that cite it may need a refresh. Surface in lint pass.
7. **Never write "Recent studies show..."** — link to the specific verified page or omit the claim.

## Common failure modes to avoid

- **Synthesis-without-citation creep** — gradual addition of unsourced commentary. Each paragraph should either link to verified pages or be flagged.
- **Stale evidence lists** — atomic-page corrections don't propagate. Mitigation: lint pass should diff hypothesis pages against changed atomic pages.
- **False symmetry** — listing equal "for" and "against" evidence when the actual standing is asymmetric. The status field forces honesty here.
- **Rebranding ineligibility as alive** — when a hypothesis can't be tested in humans, that's not the same as it being "active." Note "untested in humans" explicitly.

## Lint pass checks specific to hypothesis pages

- Every wikilink in `key-evidence-for` / `key-evidence-against` should resolve to an existing page
- Every linked page should have `verified: true` (or `verified-partial` with note)
- The `status` field should match the body discussion
- `#gap/unsourced` claims should be tracked in `gaps/README.md`

## See also

- `sops/extracting-evidence.md` — how to record findings on atomic pages (the substrate for hypothesis pages)
- `sops/adding-a-claim.md` — citation conventions
- `sops/lint-pass.md` — periodic health check
- CLAUDE.md `type: hypothesis` schema definition
