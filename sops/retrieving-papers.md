---
type: sop
aliases: [paper retrieval, DOI resolution]
---

# SOP: retrieving papers

The wiki references every primary source by **DOI** (and PMID/PMC where available). The DOI is the canonical identifier — papers are referenced by DOI, never by a local file path. This SOP covers discovery (finding the right paper) and full-text resolution.

## Discovery — finding papers by topic (use the web)

For term-based citation discovery, query the public literature APIs (via WebFetch or curl):

- **PubMed eutils** — `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=<query>&retmode=json&retmax=20`
- **Semantic Scholar** — `https://api.semanticscholar.org/graph/v1/paper/search?query=<query>&fields=title,authors,year,externalIds,citationCount&limit=10` (returns DOIs + citation counts; useful for high-impact filtering)
- **Crossref** — `https://api.crossref.org/works?query=<query>&rows=10&select=DOI,title,author,issued,is-referenced-by-count`
- **Europe PMC** — `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=<query>&format=json&pageSize=10`

## Metadata for a known DOI

- **Authors** — `curl -s "https://api.crossref.org/works/<DOI>" | jq -r '.message.author[] | "\(.given) \(.family)"'`
- **Abstract** — Crossref's `.message.abstract` (often present), or the publisher landing page.
- **Open-access status / full text** — Europe PMC and the Unpaywall API (`https://api.unpaywall.org/v2/<DOI>?email=<you>`) report OA status and an open PDF URL when one exists.

## Full-text resolution

Reading the full PDF (needed for a verification pass — see [[verifying-extraction]]) requires resolving the DOI to a local file. This is handled by a **private local tooling layer documented in `CLAUDE.local.md`** (git-ignored, not part of this public repo). Nothing in the wiki content depends on a specific tool: on a fresh clone without that layer, substitute your own DOI→PDF resolution (institutional access, Unpaywall, PMC OA, preprint servers).

**When no full text is available** (paywalled, no OA copy):
- Check PMC for an author manuscript: `https://www.ncbi.nlm.nih.gov/pmc/articles/?term=<DOI>`
- Check preprint servers (bioRxiv, arXiv, medRxiv).
- Still record the DOI in the study page frontmatter, cite from the abstract, and tag `#gap/no-fulltext-access`. Keep `verified: false` until the full text can be read.

## When recording a study in the wiki

Always include the DOI (and PMID/PMC if available) in the study page frontmatter, even when the PDF isn't available. See [[extracting-evidence]] for what to extract and [[adding-a-claim]] for citation format.

## See also

- [[extracting-evidence]] — what to record from a paper once you have it
- [[adding-a-claim]] — citation format
- [[finding-aging-specific]] — where to look for aging-specific sources
