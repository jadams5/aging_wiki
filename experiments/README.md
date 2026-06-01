---
type: index
---

# experiments/ — proposed and active research authored by the user

This directory holds one page per **wet-lab or clinical experiment authored by the user** (as opposed to `studies/`, which holds primary sources extracted *from*). Each page is a `type: experiment` per the schema in [[CLAUDE]]. The folder is the operational substrate for taking the matrix-blocker analysis in [[frameworks/causal-graph-data]] and turning specific blockers into concrete proposed-and-tracked work.

## Status lifecycle

```
proposed → accepted → in-progress → complete → published
                  ↘ paused (reversible) ↗
                  ↘ abandoned (terminal)
```

- **proposed** — drafted, awaiting review. No commitment.
- **accepted** — committed to run. May still be unfunded / un-resourced; the gate is "we've decided this is worth doing."
- **in-progress** — data collection active.
- **paused** — temporarily halted (resources, equipment, collaborator availability). Reversible to `in-progress`.
- **complete** — data collected, analysis done, but no publication yet. The experiment page holds the running record; the formal writeup lives in `studies/` once filed.
- **published** — formal writeup exists as a `type: study` page in `studies/`; this page becomes a historical pointer via the `published-as:` field.
- **abandoned** — decided against. Body documents the reason (mechanism falsified before starting, infeasible, scooped, resource constraint). Pages are kept rather than deleted so the negative decision is recoverable.

Status changes are tracked via the `status-changed:` ISO date field. The lint pass should flag pages in `in-progress` with `status-changed:` >12 months old without a status update (likely stale).

## How experiments connect to the causal matrix

Every experiment should populate `resolves-edges:` and/or `resolves-nodes:` in frontmatter. This is the load-bearing link between the matrix in [[frameworks/causal-graph-data]] and the experiment pages here — the matrix's `resolving-experiment:` column pulls from these.

When an experiment proposes formalizing a damage class outside the López-Otín frame (currently: ECM crosslinks / GlycoSENS, intracellular indigestible aggregates / LysoSENS), populate `adds-nodes:` to track this. See the "Missing-node blockers" section in `causal-graph-data.md`.

## Verification discipline

Experiment pages do NOT carry `verified:`. They are proposals or running protocols, not facts about the world. Verification discipline applies to the downstream `studies/` page when results are published.

Citation discipline still applies: any biological claim or motivating fact in the body must cite a wiki page or primary source (footnote pattern per `CLAUDE.md`).

## Pre-registration

The `preregistered:` and `preregistration-doi:` fields connect this folder to the academic-standard pre-registration convention. Pre-registration is encouraged before status flips to `in-progress` — it constrains analytic flexibility and provides external accountability. Use OSF (osf.io/registries) for basic-science work; ClinicalTrials.gov for clinical work; AsPredicted for short single-hypothesis studies.

## All experiments

```dataview
TABLE status, scale, status-changed, last-updated
FROM "experiments"
WHERE type = "experiment"
SORT status ASC, status-changed DESC
```

## By matrix-edge

The matrix in `frameworks/causal-graph-data.md` references these experiments per resolving edge; this Dataview block shows the reverse mapping (each experiment → which edges it resolves).

```dataview
TABLE status, resolves-edges, resolves-nodes
FROM "experiments"
WHERE type = "experiment"
SORT file.name ASC
```

## By scale

```dataview
TABLE status, duration-estimate
FROM "experiments"
WHERE type = "experiment"
GROUP BY scale
SORT scale ASC
```

## See also

- [[CLAUDE]] § type: experiment — schema reference
- [[frameworks/causal-graph-data]] — matrix-blocker tracker that experiments resolve against
- [[frameworks/hallmark-causality-graph]] — prose interpretation of the causal graph
