---
type: sop
aliases: [wiki lint, health check, maintenance]
---

# SOP: lint pass — periodic wiki health check

A lint pass surfaces structural problems (orphan pages, broken links, missing frontmatter) and content problems (unsourced claims, contradictions, stale claims). Run periodically and whenever the user asks.

Append findings to `log.md` under a `## [YYYY-MM-DD] lint` heading.

## Step 1 — Structural lint

### Orphan pages (zero inbound wikilinks)

**Updated R34 (2026-05-08):** the check now matches both `[[basename]]` and `[[<dir>/basename]]` forms, so `studies/cuervo-2000-cma-aging.md` is correctly recognized as inbound when other pages link `[[studies/cuervo-2000-cma-aging]]`. Previously the path-prefixed form was treated as a broken link, false-flagging study pages as orphans.

```bash
cd ~/dev/aging_wiki
# Pages that are never linked from anywhere else
for f in $(find. -name "*.md" ! -path "./.obsidian/*" ! -name "README.md"); do
  basename="${f##*/}"; basename="${basename%.md}"
  rel="${f#./}"; rel="${rel%.md}"   # e.g. "studies/cuervo-2000-cma-aging"
  # Match `[[basename]]` OR `[[full/relative/path]]` (with optional |alias)
  if ! grep -rqE "\[\[(${basename}|${rel})(\|[^]]*)?(#[^]]*)?\]\]" --include="*.md" --exclude-dir=.obsidian. 2>/dev/null; then
    # Also check frontmatter aliases via the alias-aware Python script in the broken-link block
    echo "ORPHAN: $f"
  fi
done
```

For each orphan: either link it from a relevant MOC, or retire it.

**Caveat:** this bash version still doesn't read frontmatter `aliases:`, so a page that is referenced only by an alias (e.g., something is referenced as `[[inflammaging]]` and resolves to `chronic-inflammation.md` via that alias) gets false-flagged as orphan. For an alias-aware orphan check, run the Python broken-link script below in inverse mode (compute the slug→file map, then for every file check whether ANY slug pointing to it appears in any wiki document).

### Broken wikilinks (target file doesn't exist)

**Alias-aware version (R34, 2026-05-08).** Builds a filename ∪ alias map first, then checks every `[[link]]` against it. Resolves false positives that previously required a manual allowlist (R26e). Also resolves `studies/<basename>` form (a `[[studies/foo]]` link is satisfied by `studies/foo.md` even if no other path exists).

```bash
cd ~/dev/aging_wiki
python3 - <<'PY'
import os, re, sys, yaml

WIKI = "."
EXCLUDE_DIRS = {".obsidian", "sops"}
EXCLUDE_FILES = {"CLAUDE.md", "ROADMAP.md", "README.md"}

# Step 1: build {slug → filepath} map from filenames AND frontmatter aliases
slug_to_file = {}

def slugify(s):
    return s.strip.lower.replace(" ", "-")

for root, dirs, files in os.walk(WIKI):
    dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
    for fn in files:
        if not fn.endswith(".md") or fn in EXCLUDE_FILES:
            continue
        fp = os.path.join(root, fn)
        rel = os.path.relpath(fp, WIKI)
        basename = fn[:-3]  # strip.md
        # Register canonical filename
        slug_to_file.setdefault(basename.lower, rel)
        # Register path-prefixed form (e.g., "studies/foo")
        rel_no_ext = rel[:-3] if rel.endswith(".md") else rel
        slug_to_file.setdefault(rel_no_ext.lower, rel)
        # Parse frontmatter aliases
        try:
            with open(fp, encoding="utf-8") as f:
                text = f.read
            if text.startswith("---"):
                end = text.find("\n---", 3)
                if end != -1:
                    fm = yaml.safe_load(text[3:end])
                    if isinstance(fm, dict):
                        aliases = fm.get("aliases") or []
                        if isinstance(aliases, list):
                            for a in aliases:
                                if isinstance(a, str):
                                    slug_to_file.setdefault(slugify(a), rel)
        except Exception as e:
            print(f"WARN: parse failed {rel}: {e}", file=sys.stderr)

# Step 2: scan all wikilinks; flag any that don't resolve
WIKILINK_RE = re.compile(r"\[\[([^\]|#]+?)(?:\|[^\]]*)?(?:#[^\]]*)?\]\]")
broken = {}

for root, dirs, files in os.walk(WIKI):
    dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
    for fn in files:
        if not fn.endswith(".md"):
            continue
        fp = os.path.join(root, fn)
        rel = os.path.relpath(fp, WIKI)
        try:
            with open(fp, encoding="utf-8") as f:
                text = f.read
        except Exception:
            continue
        for m in WIKILINK_RE.finditer(text):
            target = m.group(1).strip
            key = target.lower
            # Try direct match, basename match, and path-without-ext match
            if key in slug_to_file:
                continue
            base = key.rsplit("/", 1)[-1]
            if base in slug_to_file:
                continue
            broken.setdefault(target, []).append(rel)

for target, sources in sorted(broken.items):
    print(f"BROKEN LINK: [[{target}]]  (from {len(sources)} pages)")
PY
```

For each broken link: either create the stub page or fix the link. Output sorted alphabetically; pipe through `sort -k4 -rn` (count column) to prioritize.

**Notes (R34):**
- Path-prefixed wikilinks like `[[studies/cuervo-2000-cma-aging]]` resolve when `studies/cuervo-2000-cma-aging.md` exists — the bare-filename + path-prefix forms are both registered.
- Display-aliased wikilinks like `[[lamp2|LAMP-2A]]` parse cleanly (the regex strips the `|alias` suffix before lookup).
- Section-anchored wikilinks like `[[mtor#mTORC1 vs mTORC2]]` parse cleanly (the regex strips `#anchor`).
- Aliases are slugified (lowercased + spaces→hyphens) before matching, mirroring Obsidian's behavior. Mixed-case alias entries like `LAMP-2A` resolve correctly.
- Frontmatter parsing uses PyYAML — install with `pip install pyyaml` if missing.

### Missing or invalid frontmatter

For each page, check `type` is present and that the type-specific required fields exist (per `CLAUDE.md`).

Quick check:
```bash
# Pages without a type field
for f in $(find. -name "*.md" ! -path "./.obsidian/*" ! -name "README.md"); do
  if ! head -20 "$f" | grep -qE "^type:"; then
    echo "NO TYPE: $f"
  fi
done
```

### R14 schema coverage (synthesis-MOC enablers)

R14 added optional frontmatter fields that are required for R15 (causality graph) and R16 (intervention matrix) Dataview queries. Check each type for completeness:

```bash
# type: protein — must have druggability-tier (or null + #gap/no-opentargets-entry)
for f in $(grep -rl "^type: protein$" --include="*.md" --exclude-dir=.obsidian.); do
  if ! grep -qE "^druggability-tier:" "$f"; then
    echo "MISSING druggability-tier: $f"
  fi
done

# type: hallmark — must have mechanistic-tier + intervention-tractability
for f in $(grep -rl "^type: hallmark$" --include="*.md" --exclude-dir=.obsidian.); do
  if ! grep -qE "^mechanistic-tier:" "$f"; then
    echo "MISSING mechanistic-tier: $f"
  fi
  if ! grep -qE "^intervention-tractability:" "$f"; then
    echo "MISSING intervention-tractability: $f"
  fi
done

# type: compound and type: intervention — must have translation-gap + next-experiment
for f in $(grep -rlE "^type: (compound|intervention)$" --include="*.md" --exclude-dir=.obsidian.); do
  if ! grep -qE "^translation-gap:" "$f"; then
    echo "MISSING translation-gap: $f"
  fi
  if ! grep -qE "^next-experiment:" "$f"; then
    echo "MISSING next-experiment: $f"
  fi
done

# type: hallmark, protein, pathway, process — must have caused-by + causes (placeholders for R15)
for f in $(grep -rlE "^type: (hallmark|protein|pathway|process)$" --include="*.md" --exclude-dir=.obsidian.); do
  if ! grep -qE "^caused-by:" "$f"; then
    echo "MISSING caused-by: $f"
  fi
  if ! grep -qE "^causes:" "$f"; then
    echo "MISSING causes: $f"
  fi
done
```

For each missing field: trigger an R14-style frontmatter-population pass. These are pure-frontmatter edits — no body content changes.

### R22 schema coverage (external-dataset enablers)

R22 added optional fields populated via external-database SOPs. These are not strictly required (population is intervention-by-intervention), but lint should surface coverage gaps periodically:

```bash
# Optional but tracked: gtex-aging-correlation on type:protein
proteins_total=$(grep -rl "^type: protein$" --include="*.md" --exclude-dir=.obsidian. | wc -l)
proteins_with_gtex=$(grep -rlE "^gtex-aging-correlation: [^[:space:]]" --include="*.md" --exclude-dir=.obsidian. | wc -l)
echo "GTEx aging-correlation coverage: $proteins_with_gtex / $proteins_total proteins"

# Optional but tracked: clinical-trials-active on type:compound + type:intervention
compounds_total=$(grep -rlE "^type: (compound|intervention)$" --include="*.md" --exclude-dir=.obsidian. | wc -l)
compounds_with_ct=$(grep -rlE "^clinical-trials-active: [0-9]" --include="*.md" --exclude-dir=.obsidian. | wc -l)
echo "ClinicalTrials.gov coverage: $compounds_with_ct / $compounds_total compounds+interventions"

# Stale clinical-trials-active values: any compound with clinical-stage in [phase-2/3/4] + verified-date > 180 days old should re-query
# (handled by intervention-matrix watchdog block; see frameworks/interventions-by-hallmark.md)
```

R22 SOPs (`sops/finding-population-evidence.md`, `sops/finding-tissue-expression.md`, `sops/finding-druggability.md`, `sops/integrating-clinical-trials.md`, `sops/finding-singlecell-aging.md`) provide the population workflow for each field.

### Intervention matrix coverage (R16)

This section enforces the R16 intervention matrix. Run after every seeding batch that adds type:compound or type:intervention pages.

**Check 1 — R14 fields present on all compound/intervention pages**

```bash
# Every type: compound and type: intervention page must have translation-gap + next-experiment
for f in $(grep -rlE "^type: (compound|intervention)$" --include="*.md" --exclude-dir=.obsidian.); do
  if ! grep -qE "^translation-gap:" "$f"; then
    echo "MISSING translation-gap: $f"
  fi
  if ! grep -qE "^next-experiment:" "$f"; then
    echo "MISSING next-experiment: $f"
  fi
done
```

**Check 2 — Every compound must link to ≥1 hallmark**

```bash
# type: compound pages use hallmarks:; type: intervention pages use target-hallmarks:
for f in $(grep -rl "^type: compound$" --include="*.md" --exclude-dir=.obsidian.); do
  if ! grep -qE "^hallmarks:.*\[\[" "$f"; then
    echo "EMPTY hallmarks: $f"
  fi
done
for f in $(grep -rl "^type: intervention$" --include="*.md" --exclude-dir=.obsidian.); do
  if ! grep -qE "^target-hallmarks:.*\[\[" "$f"; then
    echo "EMPTY target-hallmarks: $f"
  fi
done
```

**Check 3 — Mechanism class coverage**

Every `mechanisms:` value on a compound/intervention page must match a class defined in `frameworks/intervention-classes.md`. Run this check manually by:
1. Extracting all unique `mechanisms:` values:
   ```bash
   grep -h "^mechanisms:"   \
     | sed 's/mechanisms: *//' | tr -d '[]"' | tr ',' '\n' | sed 's/^ *//;s/ *$//' | sort -u
   ```
2. Comparing against the class list in `frameworks/intervention-classes.md` § Class inventory.
3. Flagging any value not covered as `#gap/class-normalisation-needed`.

Known outstanding discrepancies as of R16: see `frameworks/intervention-classes.md` § Discrepancies and cleanup flags.

**Check 4 — Hallmark coverage gaps**

Open `frameworks/interventions-by-hallmark.md` and review Watchdog 1 block. Any hallmark with zero linked interventions must be either:
- (a) Confirmed as a true therapeutic-landscape gap (no intervention exists; document in matrix gaps section), or
- (b) Resolved via a propagation pass tagging existing compounds/interventions.

Known zero-coverage hallmarks as of R16: [[genomic-instability]], [[telomere-attrition]], [[altered-intercellular-communication]] (tagging gap), see matrix page for details.

**Check 5 — Stale clinical-stage entries**

Review Watchdog 2 block on `frameworks/interventions-by-hallmark.md`. Any compound/intervention with `clinical-stage:` in [phase-2, phase-3, phase-4, fda-approved] and `verified-date:` more than 180 days old should be re-checked against ClinicalTrials.gov per `sops/finding-aging-specific.md`.

### UniProt canonical-DB drift sweep (R34, 2026-05-08)

Periodically check that frontmatter `uniprot:`, `hgnc:`, `ncbi-gene:`, and `ensembl:` fields on `type: protein` pages still match the live UniProt REST record. UniProt accessions are extremely stable (deletions are rare and announced), but HGNC numeric IDs, NCBI Gene IDs, and the gene→Ensembl mapping all do drift over time. Running this against the wiki's ~177 protein pages takes ~3 minutes (with a 0.5s rate-limit pause).

```python
# Save as scripts/uniprot-drift.py and invoke `python3 scripts/uniprot-drift.py`
import os, re, json, urllib.request, time, sys

WIKI = "

def get_field(text, field):
    m = re.search(rf"^{field}:\s*(.*?)(\s*#.*)?$", text, re.MULTILINE)
    return m.group(1).strip.strip('"').strip("'") if m else None

def fetch_uniprot(acc):
    url = f"https://rest.uniprot.org/uniprotkb/{acc}?format=json"
    req = urllib.request.Request(url, headers={"User-Agent": "aging_wiki-lint/1.0"})
    with urllib.request.urlopen(req, timeout=15) as resp:
        return json.load(resp)

def first_ensg(xrefs):
    """Pick the first ENSG (gene-level) reference. UniProt returns Ensembl as
    a flat list of transcript-keyed entries; the gene-level ID is in the
    `properties` array under `GeneId`. Most pages cite ENSG, not ENST."""
    for x in xrefs:
        if x["database"] != "Ensembl":
            continue
        for p in x.get("properties", []):
            if p.get("key") == "GeneId":
                return p.get("value", "").split(".")[0]  # strip version
    return None

issues = []
for fn in sorted(os.listdir(WIKI)):
    if not fn.endswith(".md"): continue
    fp = os.path.join(WIKI, fn)
    with open(fp, encoding="utf-8") as f:
        text = f.read
    end = text.find("\n---", 3)
    if end == -1: continue
    fm = text[3:end]
    up = get_field(fm, "uniprot")
    if not up: continue
    hgnc = get_field(fm, "hgnc")
    gene = get_field(fm, "ncbi-gene")
    ens = get_field(fm, "ensembl")
    try:
        d = fetch_uniprot(up)
        time.sleep(0.5)
    except Exception as e:
        print(f"FETCH_ERROR {fn}: {e}", file=sys.stderr); continue
    api_acc = d.get("primaryAccession")
    xrefs = d.get("uniProtKBCrossReferences", [])
    api_hgnc = next((x["id"].replace("HGNC:","") for x in xrefs if x["database"]=="HGNC"), None)
    api_gene = next((x["id"] for x in xrefs if x["database"]=="GeneID"), None)
    api_ens = first_ensg(xrefs)
    page_issues = []
    if up != api_acc:
        page_issues.append(f"uniprot {up}->{api_acc}")
    if hgnc and api_hgnc and hgnc.replace("HGNC:","") != api_hgnc:
        page_issues.append(f"hgnc {hgnc}->{api_hgnc}")
    if gene and api_gene and gene != api_gene:
        page_issues.append(f"ncbi-gene {gene}->{api_gene}")
    if ens and api_ens and ens.split(".")[0] != api_ens:
        page_issues.append(f"ensembl {ens}->{api_ens}")
    if page_issues:
        issues.append((fn, page_issues))

print(f"=== UniProt drift sweep — {len(issues)} pages with drift ===")
for fn, page_issues in issues:
    print(f"  {fn}: {'; '.join(page_issues)}")
```

For each drift case: update the frontmatter; if the UniProt accession itself drifted (rare — usually means a protein was merged or split), re-verify aging-relevant claims that depended on the old accession.

**R34 sample run findings (2026-05-08):**
- 10 high-traffic proteins sampled (p53, sirt1, tert, foxo3, irak4, lamp2, parp1, p21, mtor-kinase, ampk).
- Initial pass surfaced apparent "ensembl drift" on every page — false positive: the script was reading the first transcript-level `ENST` ID instead of the gene-level `ENSG`. The corrected script above handles this via `first_ensg`.
- One real drift caught: `p21.hgnc` was `CDKN1A` (gene symbol) instead of the numeric `1784`. Fixed in-line.
- No accession-level drift caught in the sample. Full 177-protein sweep deferred to a dedicated round (~3 min walltime + verification of any drift cases).

### Stub pages (created but not filled in)

```bash
grep -rl "#stub" --include="*.md" --exclude-dir=.obsidian.
```

Triage: which stubs have become important enough to fill in? Which can be retired?

## Step 2 — Content lint

### Unsourced claims

```bash
grep -rl "#gap/unsourced" --include="*.md" --exclude-dir=.obsidian.
```

For each: hunt down a primary source (use `sops/finding-aging-specific.md` etc.). If the claim cannot be sourced, demote to a hypothesis or remove.

### Contradictions

```bash
grep -rl "#gap/contradictory-evidence" --include="*.md" --exclude-dir=.obsidian.
```

For each: check whether newer evidence has resolved the disagreement. If yes, update both sides. If no, ensure both perspectives are documented.

### Stale claims (newer source supersedes)

This requires judgment. For high-traffic pages (Hallmarks, major pathways, headline interventions), spot-check whether claims still match current consensus by:
1. Searching `archive` for high-impact reviews from the last 2 years on the topic.
2. Comparing claims to the latest review.
3. Updating with annotation: "as of [year]" or "updated [date] per [study]".

### Decayed external URLs

Validate any non-wikilink URLs:
```bash
grep -rohE "https?://[^[:space:]\)]+" --include="*.md" --exclude-dir=.obsidian. | sort -u | while read url; do
  curl -sI -o /dev/null -w "%{http_code} $url\n" --max-time 10 "$url"
done | grep -v "^200\|^301\|^302"
```

For each broken: either find an updated URL, archive the page via `web.archive.org`, or remove.

## Step 3 — Coverage lint

### Concepts mentioned without their own page

Two flavors:

**Implicit stubs** — `[[wikilinks]]` that point to pages that don't exist yet. These are entities the wiki already references but hasn't seeded. Sort by inbound-link count to prioritize:

```bash
cd 
grep -rohE "\[\[[^]|#]+" --include="*.md" \
  --exclude-dir=.obsidian --exclude-dir=sops --exclude=CLAUDE.md. \
  | sed 's/^\[\[//' | sort -u | while IFS= read -r link; do
    if [ -z "$(find. -name "${link##*/}.md" ! -path "./.obsidian/*" -print -quit 2>/dev/null)" ]; then
      count=$(grep -rE "\[\[$(basename "$link")(\|.*)?\]\]|\[\[$link(\|.*)?\]\]" \
        --include="*.md" --exclude-dir=.obsidian. 2>/dev/null | wc -l)
      printf "%2d  %s\n" "$count" "$link"
    fi
  done | sort -rn
```

Update [[ROADMAP]] § "Implicit stub queue" with the output, and prioritize Round-N seeding accordingly.

**Truly missing concepts** — capitalized multi-word phrases referenced in prose but never linked. Look for patterns like "p21Ink4a" mentioned in body text without `[[p21]]` formatting. Manual review; no good automation yet.

### Heavily-cited primary sources without `studies/` companion pages

Verified study pages serve as the canonical extraction record for primary sources — they let downstream `wiki-verifier` invocations cross-check claims against the study page (~3K text tokens) instead of re-reading the PDF (~100–200K image tokens per re-read). For papers cited from 3+ atomic pages, the absence of a study page forces every subsequent verifier to re-read the same PDF.

Find DOIs cited 3+ times via footnote that lack a `studies/<basename>.md` page:

```bash
cd 
# Extract DOIs from footnotes (matches `doi:10.xxxx/yyyy` pattern), count usages, list top
grep -rohE "doi:10\.[0-9]+/[^ ·)\]\"]+" --include="*.md" --exclude-dir=.obsidian --exclude-dir=sops. 2>/dev/null \
  | sed 's/^doi://' | sort | uniq -c | sort -rn | awk '$1 >= 3'
```

For each DOI returned with count ≥3, check whether a corresponding `studies/<basename>.md` page exists. If not, add to the seeding queue — these are the highest-leverage study-page seeds because every re-verification of an atomic page citing them currently re-reads the PDF from scratch.

Manual heuristic when the heading-grep above is noisy: scan recent verifier-pass `log.md` entries for "Sources checked" tables — papers re-listed across multiple verifier passes (e.g., Bodnar 1998, Trifunovic 2004, Conboy 2005) are the duplication-cost candidates.

### Pathways without protein pages for their key nodes

For each `pathways/*.md`, check that every entry in `key-nodes:` resolves to an existing protein page. Create stubs for missing ones.

### Compounds without dose-response data

```dataview
LIST FROM "molecules/compounds"
WHERE !contains(file.tags, "#gap/dose-response-unclear")
  AND !contains(file.text, "Dose-Response")
```

Compound pages without a dose-response section are likely incomplete.

## Step 4 — Verify AI-extracted pages

Pages added by Claude from training knowledge ship with `verified: false` + a ⚠️ banner. The lint pass surfaces them and runs the verification protocol.

```bash
# Find unverified pages, sorted by inbound-link count (highest leverage first).
# Exclusions: documentation files contain example `verified:` syntax that would false-positive.
for f in $(grep -rl "^verified: false" --include="*.md" \
            --exclude-dir=.obsidian --exclude-dir=sops --exclude=CLAUDE.md.); do
  basename="${f##*/}"; basename="${basename%.md}"
  count=$(grep -rE "\[\[$basename(\|.*)?\]\]|\[\[studies/$basename(\|.*)?\]\]" \
    --include="*.md" --exclude-dir=.obsidian. 2>/dev/null | wc -l)
  echo "$count $f"
done | sort -rn
```

For each page on the list, **invoke the `wiki-verifier` subagent** (defined at `.claude/agents/wiki-verifier.md`) with the page path. The subagent reads the source PDF in its own context, cross-checks claims, edits the page, and returns a corrections summary. The main agent then handles downstream propagation. See [[verifying-extraction]] § "Use the wiki-verifier subagent" for invocation details.

Closed-access papers that cannot be verified locally are tagged `#gap/no-fulltext-access` and stay `verified: false` indefinitely (with the banner updated to explain the blocker, not the absence of effort).

## Step 5 — Update the gaps tracker

Open `gaps/README.md` and verify the Dataview queries are still rendering correctly. Add any new gap categories to `CLAUDE.md` if patterns emerge that don't fit existing tags.

## Step 6 — Log it

Append to `log.md`:

```markdown
## [YYYY-MM-DD] lint

- orphans: N (list)
- broken links: N
- missing frontmatter: N
- unsourced claims: N
- contradictions: N (list)
- stale claims updated: N
- decayed URLs: N
- new gap pages created: N

Notable finds:
- [whatever was surprising or important]
```

## Cadence

- **After every major ingest** (5+ new pages): structural lint only
- **Monthly**: full lint pass
- **Quarterly**: stale-claim review against recent literature

## See also

- [[adding-a-claim]] — citation conventions that lint enforces
- [[CLAUDE]] — the schema lint validates against
