---
type: sop
aliases: [youtube scrape, video transcript scrape, scraping video references]
---

# SOP: scraping a YouTube transcript + reference list

Science-communication videos (e.g. research-summary channels) often list their primary
sources in the description and contain extractable claims in the spoken transcript. This SOP
captures **how to pull both**, so a video can be mined for leads — but the video itself is
**never a citable source**. It is a *discovery* tool: every claim that lands in the wiki must
be traced back to the primary paper and cited per [[adding-a-claim]].

> **Discipline reminder.** A YouTube video — including a doctor-presenter channel — is a
> tertiary, often promotional source. Treat the transcript and description strictly as a
> **lead list**: a set of DOIs/PMIDs to resolve and a set of claims to *check against those
> papers*. Do not cite the video, the channel, or the presenter for any biological claim.
> Affiliate/supplement segments are marketing — discount accordingly.

## Step 1 — get the page and pull the description + caption-track metadata

The watch page is JavaScript-rendered, so a markdown-converting fetcher returns only the
shell (title, nav, footer). Fetch the **raw HTML** instead — the description and caption-track
URLs are embedded in JSON inside it.

```bash
curl -sL "https://www.youtube.com/watch?v=<VIDEO_ID>" \
  -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" \
  -H "Accept-Language: en-US,en;q=0.9" -o video.html
```

Extract the description (it carries the timestamp outline + the reference link list) from the
`"shortDescription"` JSON field:

```python
import re
html = open("video.html", encoding="utf-8").read()
m = re.search(r'"shortDescription":"(.*?)","isCrawlable"', html, re.S)
desc = m.group(1).encode().decode("unicode_escape", errors="replace")
print(desc)
# Pull the reference links specifically:
print("\n".join(re.findall(r'https?://(?:pubmed|pmc|www|doi|[a-z]+)\.\S+', desc)))
```

The description's link block is the reference list. PubMed/PMC/DOI/publisher URLs map to
papers; the rest (sign-up, supplement store, social) are promotional and ignored.

## Step 2 — get the transcript

**Do not** try to fetch the `api/timedtext` caption URL embedded in the page directly. Those
URLs are signed and IP/token-bound (YouTube now gates auto-generated captions behind a
proof-of-origin token), so a second request returns an empty body. Third-party transcript
sites are mostly Cloudflare-challenged or render client-side and are unreliable.

The robust path is `yt-dlp` (it solves the player JS challenge and the token gating):

```bash
yt-dlp --skip-download --write-auto-sub --write-sub --sub-lang en \
  --sub-format vtt -o "sub.%(ext)s" "https://www.youtube.com/watch?v=<VIDEO_ID>"
```

Collapse the VTT to plain prose (strip cues, inline timing tags, and the rolling-line
duplication of auto-captions):

```python
import re
out, prev = [], None
for ln in open("sub.en.vtt", encoding="utf-8").read().splitlines():
    if "-->" in ln or not ln.strip() or ln.startswith(("WEBVTT", "Kind:", "Language:")):
        continue
    ln = re.sub(r"<[^>]+>", "", ln).strip()
    if ln and ln != prev:
        out.append(ln); prev = ln
text = re.sub(r"\s+", " ", " ".join(out)).strip()
open("transcript.txt", "w").write(text)
```

Caveat the result: auto-captions are unpunctuated speech with occasional homophone errors —
fine for identifying claims, never quoted verbatim as fact.

## Step 3 — resolve the references, then ingest

1. **Resolve every description link to a DOI/PMID** and pull real metadata
   (title/year/journal/design) via [[retrieving-papers]] — do **not** trust the presenter's
   characterization of what a paper found.
2. **Map transcript claims → specific papers.** The description is a flat link dump; the
   video rarely says which link backs which claim. Match by topic, and flag any claim with no
   supporting paper as `#unsourced` rather than citing the video.
3. **Ingest via the normal pipeline** (seeder/verifier → atomic page → propagate). New claims
   carry standard citation footnotes with quality signals; new sources get `studies/` pages
   when they will be cited more than once or carry a contested finding.
4. **Cross-check against the presenter's framing.** Summary videos compress and editorialize;
   verify effect sizes and especially the *direction* of effects against the abstract/PDF
   (see [[../CLAUDE|verification discipline]] and the abstract-sign-inversion caution).

## See also

- [[retrieving-papers]] — DOI/PMID resolution + metadata
- [[adding-a-claim]] — citation format and gap markers
- [[extracting-evidence]] — what to record from each resolved paper
