---
type: sop
aliases: [verification, AI extraction verification, flipping verified]
---

# SOP: verifying AI-extracted pages

When Claude writes a page from training knowledge without reading the source PDF, it ships with `verified: false` + a ⚠️ banner (per `CLAUDE.md` § AI-extracted vs human-verified content). This SOP turns those pages into verified ones.

Run this as part of the lint pass (see [[lint-pass]]) or on demand when a specific page becomes load-bearing for a wiki claim.

## Use the wiki-verifier subagent

A project-level subagent at `.claude/agents/wiki-verifier.md` implements this SOP end-to-end with **context isolation** — it reads the PDF in its own context window so the main conversation doesn't blow up loading 30–60k tokens of paper text per verification.

**Invoke from the main conversation:**

```
Use the Agent tool with subagent_type="wiki-verifier" and a prompt like:
"Verify 
```

The subagent reads the page, locates the local PDF via , reads the PDF, cross-checks claims, edits the page, flips the `verified` flag, and returns a corrections summary. The main agent then handles **downstream propagation** — applying the corrections to entity pages that cite the corrected study via footnotes.

**When to use the subagent vs do it inline:**
- **Subagent** for any verification involving reading a full PDF (almost always the right move).
- **Inline** only for trivial frontmatter-only fixes (e.g., flipping `verified-by` from `claude` to `claude+user` after manual review).

The remaining sections of this SOP describe what the subagent (and any human verifier) does step by step.

## Step 1 — Find unverified pages

```bash
cd ~/dev/aging_wiki
# Exclusions: documentation files contain example `verified:` syntax that would false-positive.
grep -rl "^verified: false" --include="*.md" \
  --exclude-dir=.obsidian --exclude-dir=sops --exclude=CLAUDE.md.
```

Sort by:
1. Pages cited by many other pages (highest leverage). Find via:
   ```bash
   for f in $(grep -rl "^verified: false" --include="*.md" \
               --exclude-dir=.obsidian --exclude-dir=sops --exclude=CLAUDE.md.); do
     basename="${f##*/}"; basename="${basename%.md}"
     count=$(grep -rE "\[\[$basename(\|.*)?\]\]|\[\[studies/$basename(\|.*)?\]\]" --include="*.md" --exclude-dir=.obsidian. 2>/dev/null | wc -l)
     echo "$count $f"
   done | sort -rn | head -20
   ```
2. Study pages before entity pages (corrections propagate downstream).

## Step 2 — For each study page, locate the source

```bash
DOI=$(grep "^doi:" "$page" | sed 's/^doi: *//')
PDF=$(DOI lookup "$DOI" 2>/dev/null) || {
  # Closed access or not downloaded
  echo "Cannot verify $page — DOI $DOI not in archive"
  exit 1
}
```

If  fails:
- Check status: 
- If `pending`: trigger download — 
- If `not_oa`: cannot verify locally. Tag the page `#gap/no-fulltext-access` and keep `verified: false` indefinitely. Update the banner to note the blocker.

## Step 3 — Read the PDF and cross-check

For each page with `verified: false`, the verifier must:

1. **Read the source end-to-end** (not just the abstract — read the methods, key result figures, and discussion at minimum).
2. **For each claim on the wiki page**, locate the source statement.
3. **Cross-check quantitatively:**
   - Sample sizes (n per group, total)
   - Effect sizes and CIs
   - p-values
   - Doses, routes, durations
   - Subject characteristics (age, strain, sex)
   - Endpoints and their definitions
4. **Cross-check qualitatively:**
   - Mechanism statements
   - Author conclusions
   - Limitations the wiki claims the authors acknowledge
5. **Note divergences**, both between (a) wiki page and source, and (b) source and the broader literature where the wiki extends beyond what the source claims.

## Step 4 — Update the page

For every numeric or qualitative claim that doesn't match the source:
- Edit the wiki page to match the source exactly.
- If the source itself is wrong (newer evidence supersedes), keep the source's number and add a note: "Subsequent work (X) found Y, but this paper reported Z."

For claims the wiki extends beyond the source (e.g., assertions about humans the source didn't make):
- Move them to a separate "Beyond this paper" section or to a different wiki page that cites the appropriate source.
- Tag with appropriate `#gap/...` markers.

## Step 5 — Flip the flag

Update the frontmatter:
```yaml
verified: true
verified-date: 2026-05-04
verified-by: claude    # or "user" or "claude+user"
```

Remove the ⚠️ banner from the page body.

## Step 6 — Propagate corrections

If the verification pass found errors on a *study page*, every entity page that cites that study via footnote may have inherited the error. Find them:

```bash
basename="${page##*/}"; basename="${basename%.md}"
grep -rl "studies/$basename" --include="*.md" --exclude-dir=.obsidian.
```

For each downstream page: cross-check the claim it inherited; correct if needed. Verify the entity page itself if its `verified: false`.

## Step 7 — Log

Append to `log.md` under a `## [YYYY-MM-DD] verify` heading:

```markdown
## [YYYY-MM-DD] verify

Pages verified: N
- studies/foo (corrections: 2 — reduced n from "~80" to "78"; mechanism qualifier added)
- studies/bar (no corrections)

Pages unverifiable (closed-access):
- studies/baz — tagged #gap/no-fulltext-access

Downstream pages updated:
- compounds/qux — propagated corrected n
```

## What NOT to do

- Don't flip `verified: true` from the abstract alone. Read the methods + key figures.
- Don't flip from a press release, news article, or another wiki source.
- Don't fabricate plausible numbers when the paper doesn't state them. Either find the actual value or remove the claim.
- Don't skip propagation — a corrected study page that doesn't propagate to citing entity pages leaves stale claims live.

### Known AI-extraction failure modes to check for explicitly

These are recurring, high-cost errors that originate during AI seeding and must be caught at verification:

- **Verify outcomes, not just targets.** The seeder reliably identifies a paper's correct topic/target/mechanism but sometimes fabricates the specific experimental *endpoints* (n's, effect sizes, p-values, fracture/event rates). Confirm every quantitative outcome against the figure/table that reports it, not just that the citation is on-topic.
- **Abstract-only verification can invert an effect-size sign.** A value read from an abstract (or a review citing it) can carry the wrong direction — a reduction stated as an increase, or a CI/WMD with flipped sign. Reading the full PDF (methods + the actual figure/table) catches this; an abstract-level pass often does not. When a sign is corrected on an atomic page, **propagate the correction to any synthesis/MOC page** that restated it. (Precedents: escin/horse-chestnut WMD on [[chronic-venous-disease]]; the MK-7 aortic-valve-calcification effect on [[vitamin-k]].)
- **A `verified: true` page can still carry the verifier's own error.** Verification reduces but does not eliminate error. When a later page cross-checks a claim about a paper that was "verified elsewhere," do not treat the prior page as ground truth — adjudicate against the primary PDF, and correct the earlier page if it is wrong (e.g., a stale/incorrect DOI or eligibility detail surviving on an already-verified page).
- **Do not trust canonical identifiers (DOI, ChEMBL, UniProt, CAS, PubChem, ICD, Cell-Ontology) asserted from training memory** — they frequently resolve to an unrelated entity. Confirm every accession against the live database, and every DOI/year/journal against PubMed/Crossref, before flipping `verified`. (See [[schema-history]] R40/R41.)

## See also

- [[CLAUDE]] § AI-extracted vs human-verified content
- [[extracting-evidence]] — for newly-ingested pages
- [[lint-pass]] — verification is part of the periodic lint
