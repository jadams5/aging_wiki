# SenNet senescence-biomarker resource — snapshot

Provenance note for [`sennet-biomarkers.csv`](sennet-biomarkers.csv) (this folder).

- **What it is:** the curated SenNet **senescence-biomarker table** — 703 entries × 11 columns: `Biomarker`, `Preferred Term`, `HGNC_ID`, `Biomolecule` (mRNA/protein/…), `Tissue`, `Cell`, `Context` (aging / disease / obesity / menopause / …), `Organism` (human/mouse), `Senescence Hallmark` (DDR, SASP/Inflammation, cell-cycle arrest, …), `Citation` (PMID), `Experimental Evidence` (assay). Covers the 14 tissues of the SenNet detection consensus, including a **"Circulating markers"** (blood) category.
- **Source:** the interactive SenNet biomarker resource at `https://docs.sennetconsortium.org/biomarkers/`, which renders a public Google Sheet. **Snapshot taken 2026-06-13** via the sheet's CSV export. It is a **living document** — re-pull from the source for updates; this file is a point-in-time copy for offline reference.
- **Underpins:** Suryadevara et al. 2024, *Nature Reviews Molecular Cell Biology* 25(12):1001–1023, **"SenNet recommendations for detecting senescent cells in different tissues"** (doi:10.1038/s41580-024-00738-8; PMID 38831121) → [[studies/suryadevara-2024-sennet-detection-recommendations]].
- **Use / discipline:** each row is **literature-curated by SenNet with a PMID** in the `Citation` column — treat those PMIDs as the primary sources (cite the PMID, not this snapshot, for any specific marker claim). This CSV is a **discovery/reference index** (e.g. "which markers are reported for kidney senescence, in which organism, by what assay"), not itself a verified wiki source. No independent verification performed on the rows.
- **Why kept:** raw reference data with no DOI of its own → lives in `sources/` per the wiki schema (supplementary data). Useful for biomarker-discovery queries and as the empirical backing for the no-universal-marker / tissue-specific-multi-marker theme on [[cellular-senescence]].

**Related:** [[studies/suryadevara-2024-sennet-detection-recommendations]] · [[studies/suryadevara-2026-senotypes]] · [[studies/anerillas-2026-sencat]] · [[cellular-senescence]]
