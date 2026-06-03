#!/usr/bin/env python3
"""
check-frontmatter.py — validate YAML frontmatter across the wiki.

Catches the class of malformed-frontmatter bugs that Obsidian's lenient parser
tolerates but a strict YAML parser (and the Quartz site build) rejects — e.g.
a missing closing `---` delimiter, or flow-sequence values containing
unquoted `[ ]` brackets ("missed comma between flow collection entries").

Two failure modes are reported:
  NO-CLOSE  — file opens with `---` but has no closing `---` (frontmatter runs
              into the body; the YAML parser then chokes on the first
              colon-bearing prose line).
  YAML-ERR  — the frontmatter block does not parse as YAML.

Run from the repo root:
    python3 scripts/check-frontmatter.py
Exit status is non-zero if any problem is found (suitable for a pre-commit /
pre-push gate).

Note on parsers: the public site build uses js-yaml; this script uses PyYAML.
The two agree on the common structural errors above. If PyYAML is unavailable,
the NO-CLOSE check still runs (it needs no YAML parser).
"""

import os
import subprocess
import sys

try:
    import yaml  # PyYAML
    HAVE_YAML = True
except ImportError:
    HAVE_YAML = False

# Directories never published / not research content.
SKIP_DIRS = {
    ".git", ".github", ".obsidian", ".claude", ".agents", ".codex",
    "protocols", "protocols-template", "node_modules",
}


def tracked_markdown():
    """Prefer git-tracked files; fall back to a filesystem walk."""
    try:
        out = subprocess.check_output(
            ["git", "ls-files", "*.md"], text=True, stderr=subprocess.DEVNULL
        )
        files = [f for f in out.splitlines() if f]
        if files:
            return files
    except (subprocess.CalledProcessError, FileNotFoundError):
        pass
    walked = []
    for root, dirs, names in os.walk("."):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        for n in names:
            if n.endswith(".md"):
                walked.append(os.path.join(root, n).lstrip("./"))
    return walked


def main():
    problems = []
    checked = 0
    for path in tracked_markdown():
        if any(part in SKIP_DIRS for part in path.split(os.sep)):
            continue
        try:
            with open(path, encoding="utf-8") as fh:
                text = fh.read()
        except (OSError, UnicodeDecodeError) as exc:
            problems.append((path, f"READ-ERR: {exc}"))
            continue
        if not text.startswith("---"):
            continue  # no frontmatter block — nothing to validate
        end = text.find("\n---", 3)
        if end == -1:
            problems.append((path, "NO-CLOSE: missing closing '---' delimiter"))
            continue
        checked += 1
        if not HAVE_YAML:
            continue
        block = text[3:end]
        try:
            yaml.safe_load(block)
        except yaml.YAMLError as exc:
            reason = getattr(exc, "problem", None) or str(exc).splitlines()[0]
            problems.append((path, f"YAML-ERR: {reason}"))

    for path, msg in sorted(problems):
        print(f"{msg}  ::  {path}")
    note = "" if HAVE_YAML else "  (PyYAML missing — only NO-CLOSE checked)"
    print(f"\nchecked {checked} frontmatter block(s), {len(problems)} problem(s){note}")
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
