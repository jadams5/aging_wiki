---
type: sop
aliases: [ClinicalTrials.gov, clinical trials, trial counts, NCT, trial status]
---

# SOP: integrating clinical trial data from ClinicalTrials.gov

Use this SOP to populate `clinical-trials-active:` counts on compound and intervention pages, to write "Clinical trials" sections, and to link out to specific NCT studies. All data comes from the ClinicalTrials.gov v2 API (launched 2023, replacing the deprecated v1/classic API).

---

## When to use this SOP

- Filling the `clinical-trials-active:` frontmatter field on `type: compound` or `type: intervention` pages.
- Checking whether a preclinical compound has entered human trials.
- Writing or updating the "Clinical evidence" / "Clinical trials" section on any compound, intervention, or protein page.
- Periodic refresh (lint pass recommends every ~6 months) to catch new trial registrations.

---

## ClinicalTrials.gov v2 API

**Base URL:** `https://clinicaltrials.gov/api/v2/`
**Format:** JSON (default) or CSV
**Authentication:** None required for read access.
**Documentation:** `https://clinicaltrials.gov/data-api/api`

The v2 API replaces the deprecated classic API (`/api/query/full_studies`). Always use v2.

---

## Endpoint: search studies

```
GET https://clinicaltrials.gov/api/v2/studies
```

**Key query parameters:**

| Parameter | Description | Example |
|---|---|---|
| `query.cond` | Condition/disease keyword | `aging` |
| `query.intr` | Intervention keyword | `rapamycin` |
| `query.term` | Full-text search | `mTOR+inhibitor` |
| `filter.overallStatus` | Status filter | `RECRUITING,ACTIVE_NOT_RECRUITING` |
| `filter.phase` | Phase filter | `PHASE2,PHASE3` |
| `filter.studyType` | Study type | `INTERVENTIONAL` |
| `pageSize` | Results per page (max 1000) | `50` |
| `nextPageToken` | Pagination | from prior response |
| `format` | Response format | `json` |

**Status values:**
- `RECRUITING` — actively enrolling
- `ACTIVE_NOT_RECRUITING` — enrolled; data collection ongoing
- `COMPLETED` — finished
- `TERMINATED` — stopped early
- `WITHDRAWN` — registered but never started
- `ENROLLING_BY_INVITATION` — restricted enrollment

**"Active" definition for `clinical-trials-active:`:** Count only `RECRUITING` + `ACTIVE_NOT_RECRUITING` trials. Do not count `COMPLETED`, `TERMINATED`, or `WITHDRAWN`.

---

## Example queries

### Count active trials for a compound

```bash
curl -s "https://clinicaltrials.gov/api/v2/studies?query.intr=rapamycin&filter.overallStatus=RECRUITING,ACTIVE_NOT_RECRUITING&pageSize=1&format=json" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('totalCount', 'no totalCount field'))"
```

Note: the v2 API does not return a `totalCount` field in the standard response — pagination is via `nextPageToken`. To count results, iterate pages or use a larger `pageSize` and count the `studies` array.

**Practical approach for a quick count:**

```bash
# Fetch up to 200 results (typical for a single compound) and count
curl -s "https://clinicaltrials.gov/api/v2/studies?query.intr=rapamycin&filter.overallStatus=RECRUITING,ACTIVE_NOT_RECRUITING&pageSize=200&format=json" | python3 -c "import sys,json; d=json.load(sys.stdin); print(len(d.get('studies', [])))"
```

### Get structured data for the first 3 active trials

```bash
curl -s "https://clinicaltrials.gov/api/v2/studies?query.intr=rapamycin&filter.overallStatus=RECRUITING,ACTIVE_NOT_RECRUITING&pageSize=3&format=json"
```

The confirmed response structure (validated 2026-05-05):

```json
{
  "studies": [
    {
      "protocolSection": {
        "identificationModule": {
          "nctId": "NCT05949658",
          "briefTitle": "Rapalog Pharmacology (RAP PAC) Study",
          "officialTitle": "Safer mTOR Inhibition for Human Geroprotection"
        },
        "statusModule": {
          "overallStatus": "RECRUITING",
          "startDateStruct": {"date": "2024-05-15"},
          "primaryCompletionDateStruct": {"date": "2027-03"}
        },
        "designModule": {
          "studyType": "INTERVENTIONAL",
          "phases": ["PHASE1"],
          "enrollmentInfo": {"count": 72}
        },
        "eligibilityModule": {
          "minimumAge": "55 Years",
          "maximumAge": "89 Years"
        }
      }
    }
  ],
  "nextPageToken": "..."
}
```

### Search by condition + intervention (aging-specific)

```bash
# All active longevity/aging-focused trials
curl -s "https://clinicaltrials.gov/api/v2/studies?query.cond=aging&query.intr=rapamycin&filter.overallStatus=RECRUITING,ACTIVE_NOT_RECRUITING&pageSize=20&format=json"

# Senolytic trials
curl -s "https://clinicaltrials.gov/api/v2/studies?query.term=senolytic&filter.overallStatus=RECRUITING,ACTIVE_NOT_RECRUITING&pageSize=20&format=json"

# Trials targeting a specific gene/pathway via MeSH term
curl -s "https://clinicaltrials.gov/api/v2/studies?query.term=mTOR+inhibitor+aging&filter.studyType=INTERVENTIONAL&pageSize=20&format=json"
```

---

## What to record per trial

For any specific trial cited on a wiki page, record in a table or list:

| Field | Source in API | Example |
|---|---|---|
| NCT ID | `identificationModule.nctId` | NCT05949658 |
| Phase | `designModule.phases` | Phase 1 |
| Status | `statusModule.overallStatus` | Recruiting |
| Title | `identificationModule.briefTitle` | Rapalog PAC Study |
| N | `designModule.enrollmentInfo.count` | 72 |
| Completion | `statusModule.primaryCompletionDateStruct.date` | 2027-03 |
| Sponsor | `sponsorCollaboratorsModule.leadSponsor.name` | UW-Madison |
| Age range | `eligibilityModule.minimumAge/maximumAge` | 55–89 years |
| Primary outcome | `outcomesModule.primaryOutcomes[0].measure` | pharmacokinetics |

---

## Populating `clinical-trials-active:` frontmatter

This R22 schema field on `type: compound` pages is an integer count:

```yaml
clinical-trials-active: 3   # active trials as of 2026-05-05
```

**Procedure:**
1. Query the v2 API with `query.intr=<compound name>` + `filter.overallStatus=RECRUITING,ACTIVE_NOT_RECRUITING`.
2. Also try common synonyms (e.g., for rapamycin: `sirolimus`, `rapamycin`, `eRapa`).
3. Sum the unique NCT IDs across synonym searches (deduplicate).
4. Set the field to the total count.
5. Add a comment in the page body: `<!-- clinical-trials-active: queried YYYY-MM-DD; recheck in ~6 months -->`.

**Zero is a valid value.** If no active trials are found, set `clinical-trials-active: 0` and note the query date.

---

## Writing a "Clinical trials" section

For compound or intervention pages that have trials, add a section:

```markdown
## Clinical trials

As of YYYY-MM-DD, N active interventional trials are registered (ClinicalTrials.gov,
`filter.overallStatus=RECRUITING,ACTIVE_NOT_RECRUITING`, query: `<search term>`).

Selected trials:

| NCT ID | Phase | Title (brief) | N | Status | Estimated completion |
|---|---|---|---|---|---|
| NCT05949658 | Phase 1 | Safer mTOR Inhibition for Human Geroprotection | 72 | Recruiting | 2027-03 |
|... |... |... |... |... |... |

#gap/long-term-unknown — no Phase 3 or Phase 4 trials registered as of query date.
```

For pages where trials exist but have not been searched recently, add:
```
<!-- TODO: re-query ClinicalTrials.gov v2 API; last checked YYYY-MM-DD -->
```

---

## Periodic refresh discipline

The `clinical-trials-active:` field decays over time. The lint pass (`sops/lint-pass.md`) should flag pages where:
- The `<!-- clinical-trials-active: queried... -->` comment is older than 6 months.
- The field value differs from a fresh API query result.

**Lint check rule:** Any compound or intervention page with `clinical-trials-active:` set should have a query-date comment. Missing comments should be flagged as `#gap/trial-count-stale`.

---

## EU Clinical Trials Register (supplementary)

**Endpoint:** `https://www.clinicaltrialsregister.eu/ctr-search/rest/`

Some European trials are registered here but not on ClinicalTrials.gov. For geroprotector trials, this matters — European institutions may register EU-CTA without a corresponding ClinicalTrials.gov record.

```bash
# Search EU registry by keyword
curl "https://www.clinicaltrialsregister.eu/ctr-search/rest/results?query=rapamycin&page=1"
```

Note: EU CTA register also hosts completed results data at the per-trial level.

---

## See also

- [[finding-aging-specific]] — DrugAge and ClinicalTrials.gov for intervention context
- [[finding-compound-data]] — PubChem, DrugBank, ChEMBL for compound identity
- [[finding-druggability]] — Open Targets clinical advance data (complementary trial count source)
- `sops/adding-a-claim.md` — footnote format for clinical claims
