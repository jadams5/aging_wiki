# sources/

Raw source media that is **not** in `~/dev/a local paper archive/`. The a local paper archive is the canonical store for primary papers (PDFs, indexed by DOI). Don't duplicate here.

## What goes here

| Subfolder | Contents | Examples |
|---|---|---|
| `images/` | Extracted figures, diagrams (with provenance) | A figure copied from a paper for inline reference; a self-drawn pathway diagram |
| `data/` | Supplementary datasets, dose-response CSVs | Raw data from a paper's supplementary tables; CSV of compiled dose-effect points |
| `videos/` | Recorded lectures, conference talks, interviews | A YouTube lecture by Aubrey de Grey; a SENS conference talk |
| `pdfs/` | PDFs **only** when not retrievable via a local paper archive | Old papers without DOI; institutional preprints; theses |

## Provenance is mandatory

Every file in `sources/` must have a sibling `.meta.md` file recording origin:

```yaml
---
type: source
filename: figure-3-yousefzadeh-2018.png
origin-doi: 10.1016/j.ebiom.2018.09.015
origin-figure: "Fig. 3"
origin-url: https://doi.org/10.1016/j.ebiom.2018.09.015
license: "publisher (CC-BY)"
extracted-by: claude
extracted-on: 2026-05-04
---

Brief description of what this is and why it was extracted.
```

For videos, also record:
- Original platform + URL
- Speaker(s)
- Date recorded
- Whether full or excerpt

## What does NOT go here

- PDFs of papers that the a local paper archive already has → reference by DOI instead
- Anything that can be regenerated from canonical databases (UniProt entries, KEGG diagrams via API, etc.)
- Anything you don't have re-distribution rights for that would be redistributed by Obsidian sync
