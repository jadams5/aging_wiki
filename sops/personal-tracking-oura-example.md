---
type: sop
aliases: [Oura tracking example, Oura Ring sync example, Oura API tracking]
---

# Example: connecting an Oura Ring to personal tracking

This is an **optional, vendor-specific worked example** for someone who already uses an Oura Ring and wants its data in the private personal-tracking layer described by [[sops/personal-tracking]]. A wearable is not required to use the wiki. If a person uses a different wearable—or none—keep following the core SOP and ignore this page.

This page is public and intentionally contains no real person, account, credential, filesystem, or health data. The deployed scripts, configuration, tokens, logs, and generated CSVs belong under the individual's private `protocols/` setup (except credentials, which should remain outside both repositories). Do not copy another person's private tracking files as a shortcut.

> **Status:** implementation example, not a mandatory wiki convention. Oura API details were checked against the official V2 documentation on 2026-08-02. Re-check upstream documentation before implementing because endpoints, scopes, and authentication rules can change.

## Choose the smallest useful integration

Decide what question the wearable will answer before adding plumbing. Two reasonable levels are:

1. **Portable core:** populate the existing `tracking/<handle>/sleep.csv` with sleep score, sleep duration/stages, resting heart rate, and heart-rate variability. This is enough for most longitudinal protocol reviews and is easiest to replace with another vendor later.
2. **Feature-rich Oura summary:** create `oura-daily.csv` plus `oura-workouts.csv` when readiness, temperature deviation, activity, vascular-age, resilience, or workout-event data will actually be reviewed.

Do not maintain both as independent sources of truth. If both exist, declare one canonical and generate the other mechanically from it. Protocol plans and reviews should name the physiological metric—sleep duration, heart-rate variability, resting heart rate—not make the Oura brand load-bearing.

## Private layout

A feature-rich private installation can use:

```text
protocols/tracking/<handle>/
├── oura-daily.csv
├── oura-workouts.csv
├── subjective-log.md
└── _sync/
    ├── README.md
    ├── oura_auth.py
    ├── oura_sync.py
    └── sync.log
```

The `_sync/README.md` is the individual's operations manual: chosen scopes, local timezone, credential location, sync cadence, validation date, and troubleshooting. It may describe private paths inside the private repository; this public example must not.

Credentials should live in the operating system's user-configuration directory, outside both git repositories, in a mode-`0600` file. Use a per-person or per-account credential path if one machine manages more than one Oura account. Never put a client secret, access token, refresh token, authorization code, or authorization URL containing a code into markdown, CSV, shell history, task logs, agent messages, commits, or screenshots.

## Current prerequisites and authentication

As of the check date:

- Oura API V2 is the supported API. Personal Access Tokens were deprecated in December 2025; new integrations use OAuth2.
- The user needs an Oura account and API application. Gen3 and later rings require an active Oura membership for API access.
- The ring must first sync through a current Oura mobile app; cloud data cannot include readings the phone has not uploaded.
- The user must personally grant the application access in Oura's consent screen. An agent may prepare the local files and open or print the authorization URL, but it must not impersonate consent.

Authoritative references:

- [Oura API V2 documentation](https://cloud.ouraring.com/v2/docs)
- [Oura OAuth2 authentication](https://cloud.ouraring.com/docs/authentication)
- [Oura API application setup](https://cloud.ouraring.com/docs/)

Register a local redirect URI, for example `http://localhost:12000`, and use the exact same URI in the application registration, authorization request, and token exchange.

### Least-privilege scopes

| Scope | Use here | Request when |
|---|---|---|
| `daily` | Sleep, readiness, activity, temperature, and other daily summaries | Required for either path |
| `workout` | Auto-detected and user-entered workout events | Only when producing `oura-workouts.csv` |
| `heartrate` | Intraday heart-rate samples | Only for a specifically requested event-level investigation |
| `personal` | Age, sex, height, and weight from the Oura profile | Usually unnecessary; the private person page already owns baseline identity data |
| `email`, `tag`, `session`, `spo2Daily` | Other Oura data | Do not request unless a documented protocol question uses it |

A routine daily-summary integration generally requests `daily workout`; add `heartrate` only when intraday pulls are an intended feature.

### OAuth implementation requirements

The helper should:

1. Generate a cryptographically random `state` value, include it in the authorization request, and reject a callback whose state does not match.
2. Listen only on loopback for the one-time callback.
3. Exchange the authorization code without printing it.
4. Store the client ID, client secret, access token, rotating refresh token, granted scopes, and access-token expiry outside the repositories.
5. Refresh shortly before expiry and atomically save the **new** refresh token returned by Oura; Oura refresh tokens are single-use.
6. Preserve mode `0600` on every credential-file rewrite.
7. Distinguish revoked/expired authorization from a temporary network or rate-limit failure.

An illustrative credential shape—not a file to commit—is:

```json
{
  "client_id": "<from the Oura application>",
  "client_secret": "<never commit or print>",
  "redirect_uri": "http://localhost:12000",
  "scope": "daily workout",
  "tokens": null
}
```

## Endpoint-to-field map

Use date ranges rather than one request per day, follow `next_token` pagination, and honor rate-limit response headers and retry guidance. Daily or weekly polling for one person is adequate; webhooks are optional for applications that need near-real-time or multi-user updates.

| Oura V2 endpoint | Fields retained by this example | Notes |
|---|---|---|
| `/v2/usercollection/sleep` | average and lowest heart rate, average HRV, sleep/stage durations, awake time, efficiency, latency | Prefer the `long_sleep` session; if older data lack that type, select the longest session attributed to the day. Do not merge naps into the main-night values. |
| `/v2/usercollection/daily_sleep` | sleep score | Daily summary. |
| `/v2/usercollection/daily_readiness` | readiness score, temperature deviation, temperature-trend deviation | Vendor-derived signals; interpret as trends. |
| `/v2/usercollection/daily_activity` | activity score, steps, active calories, total calories | Calories are estimates, not intake measurements. |
| `/v2/usercollection/daily_cardiovascular_age` | vascular age | Oura-derived estimate; not interchangeable with imaging or a clinical vascular assessment. |
| `/v2/usercollection/daily_resilience` | resilience level | Categorical vendor model. |
| `/v2/usercollection/workout` | event ID, day, timestamps, activity, intensity, calories, distance, source, label | One CSV row per event; key by Oura event ID. |
| `/v2/usercollection/heartrate` | timestamp, beats per minute, source | Optional, ad hoc, and potentially large; do not include in routine daily polling unless needed. |

The Oura `day` is the vendor's calendar attribution, normally the wake-up date for a night's sleep. Preserve it as `date`; preserve timestamp offsets on event data. Make the individual's IANA timezone configurable—never hard-code the example maintainer's timezone—and test daylight-saving boundaries.

## Suggested CSV contracts

### Portable core: `sleep.csv`

The public template provides this small, vendor-neutral contract:

```csv
date,sleep_score,total_sleep_h,deep_sleep_h,rem_sleep_h,rhr_avg_bpm,hrv_avg_ms
```

Leave unsupported fields blank rather than inventing or converting a vendor score. If the source changes, keep the headers stable and record the change of device/date in the private operations manual and periodic review.

### Feature-rich: `oura-daily.csv`

Suggested header:

```csv
date,hrv_avg_ms,rhr_min_bpm,rhr_avg_bpm,total_sleep_h,deep_sleep_h,rem_sleep_h,light_sleep_h,awake_h,sleep_efficiency_pct,sleep_score,readiness_score,body_temp_dev_c,body_temp_trend_c,activity_score,steps,active_calories_kcal,total_calories_kcal,sleep_latency_min,vascular_age_yrs,resilience_level
```

Use one row per Oura `day`, sorted ascending. Blank means unavailable. A missing value is not zero.

### Workouts: `oura-workouts.csv`

Suggested header:

```csv
id,date,start_datetime,end_datetime,duration_min,activity,intensity,calories_kcal,distance_m,event_source,label
```

Use one row per workout. Preserve Oura's event ID for deduplication and preserve ISO-8601 timezone offsets in the timestamps.

## Sync behavior

The sync should be safely repeatable:

- Default to refreshing a recent window, such as the last 30 days, because Oura summaries may be revised after the first upload.
- Support explicit `--start` and `--end` dates plus a deliberate historical backfill.
- Upsert daily rows by `date` and workouts by `id`; never append duplicates.
- Do not overwrite a previously populated value with an absent/null API value during a partial response.
- Sort deterministically after every write and replace the CSV atomically so interruption cannot leave a half-written file.
- Apply pagination to every endpoint.
- Use timeouts and bounded retry with backoff for transient errors and `429` responses.
- Do not log response bodies, credentials, authorization URLs, or full intraday traces by default.
- Keep raw API responses only when debugging a documented parser problem, only in the private repository, and remove them when no longer needed.

Recommended private commands, if the helper uses the filenames above:

```bash
python3 _sync/oura_auth.py
python3 _sync/oura_auth.py --status
python3 _sync/oura_sync.py --start YYYY-MM-DD --end YYYY-MM-DD
python3 _sync/oura_sync.py --full-backfill
```

These commands are an interface recommendation, not an assertion that a fresh public clone already contains the scripts. An agent implementing them should record dependencies and exact usage in the private `_sync/README.md`.

## One-time validation checklist

Before automating:

- [ ] Credential file is outside both repositories, mode `0600`, and absent from `git status` in both repositories.
- [ ] Granted scopes are no broader than the selected path requires.
- [ ] The mobile app has synced the ring.
- [ ] A short date range produces the expected headers and chronological rows.
- [ ] At least three dates are spot-checked against the Oura app, including one day with multiple sleep sessions if available.
- [ ] Durations convert from seconds to hours correctly; latency converts to minutes; calories and distance retain documented units.
- [ ] Re-running the same range changes no row count and creates no duplicate workout IDs.
- [ ] A simulated expired access token rotates and persists the returned refresh token without revealing it.
- [ ] Missing endpoints or fields remain blank and produce a clear warning rather than zeroes.
- [ ] Local date attribution and timestamp offsets are correct across a daylight-saving transition if the history spans one.

Record completion of this checklist in the private operations manual, not the public log.

## Turn data into decisions

The CSV is an index, not an interpretation. In the person's private protocol plan, add only metrics tied to an action or explicitly label them informational:

| Metric | Cadence | Source | Initial target | File |
|---|---|---|---|---|
| Overnight HRV | daily | Oura | Establish a 30-day personal baseline; review sustained departures and long-term trend | `oura-daily.csv` or `sleep.csv` |
| Resting heart rate | daily | Oura | Establish a 30-day personal baseline; review sustained change rather than isolated readings | `oura-daily.csv` or `sleep.csv` |
| Sleep duration | daily | Oura | Set an individualized sleep opportunity target; review weekly distribution | `oura-daily.csv` or `sleep.csv` |
| Sleep efficiency | daily | Oura | Trend against the person's baseline; informational unless tied to a sleep intervention | `oura-daily.csv` |
| Readiness / resilience / vascular age | daily or periodic | Oura | Informational trend only unless the protocol defines a decision rule | `oura-daily.csv` |
| Workouts | per event | Oura | Compare completed frequency/duration with the active exercise plan | `oura-workouts.csv` |

After each import, use [[sops/personal-tracking]] Principle 4: inspect days already notable for illness, poor sleep, travel, stress, or a deliberate intervention; ask for missing context; write supported correlations into `subjective-log.md`; summarize multi-day trends in the periodic review. Do not infer a diagnosis, arrhythmia, blood pressure, sleep disorder, or causal intervention effect from Oura data alone.

## Implementation brief for an agent

When asked to stand this up from a public clone, the agent should:

1. Read `CLAUDE.md`, [[sops/personal-tracking]], the public `protocols-template/README.md`, and this example.
2. Confirm that the user wants Oura specifically, then confirm minimal vs feature-rich mode, private handle, timezone, desired backfill, and whether workout or intraday data is needed.
3. Create or edit personal files only inside the git-ignored private `protocols/` tree. Never place a real handle, path, account detail, value, or private-tree wikilink in a public file.
4. Implement the smallest selected scope and use fake fixtures for tests. Do not require real credentials to test mapping, pagination, date handling, or idempotent upserts.
5. Pause for the user's OAuth registration and consent when authorization is required; never request that a secret or token be pasted into chat.
6. Validate against the checklist above, update the private operations manual and private log, and leave commit/push decisions to the user.

If no wearable exists, the correct implementation is **nothing**: retain manual or clinical sources that answer the protocol's actual questions. If another wearable exists, reuse the privacy, idempotency, units, validation, and review rules here while replacing Oura-specific authentication, scopes, endpoints, and vendor-derived fields.
