#!/usr/bin/env node
// e2e-playwright.mjs — REAL-BROWSER smoke + interaction test of viz/aging-simulator.html.
// Complements model/test.mjs (engine math) by exercising the rendered app in Chromium:
// catches render/wiring bugs the Node Proxy-stub harness can't (FIXED-MISTAKE #4 class).
//
// Playwright is NOT a repo dependency (the engine stays dep-free). To run, make `playwright`
// resolvable and point CHROME_PATH at a system Chrome (avoids downloading a browser):
//   1. install Playwright somewhere ESM can resolve it (e.g. a scratch dir with a
//      `node_modules` symlink to a `playwright` install, then run this file from there), OR
//      `npm i -D playwright` in a throwaway dir.
//   2. CHROME_PATH=/usr/bin/google-chrome-stable node model/e2e-playwright.mjs [htmlPathOrUrl]
//      (omit CHROME_PATH to use Playwright's own browser after `npx playwright install chromium`)
// Exits 0 if all browser checks pass, 1 otherwise. Optional argv[2] overrides the HTML path.

import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
// HTML path: argv[2] (a file:// URL or absolute path) if given, else the repo-relative file.
const arg = process.argv[2];
const FILE = arg
  ? (arg.startsWith("file://") ? arg : "file://" + resolve(arg))
  : "file://" + resolve(HERE, "..", "viz", "aging-simulator.html");

const results = [];
const check = (name, cond, detail = "") => results.push({ name, pass: !!cond, detail });

// Use a system Chrome via CHROME_PATH if set (avoids downloading Playwright's browser).
const launchOpts = process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {};
const browser = await chromium.launch(launchOpts);
const page = await browser.newPage();
const consoleErrors = [], pageErrors = [];
page.on("console", (m) => { if (m.type() === "error") consoleErrors.push(m.text()); });
page.on("pageerror", (e) => pageErrors.push(e.message));
page.on("dialog", (d) => d.accept());   // auto-accept the import "replace the timeline?" confirm()

await page.goto(FILE);
await page.waitForFunction(() => {
  const el = document.getElementById("leVal");
  return el && el.textContent && el.textContent.trim() !== "" && el.textContent !== "—";
}, { timeout: 15000 });

// #leVal is the survival-CONDITIONED headline at the current age (default 40) — used for relative Δ checks.
// #leCond is the cohort-from-age-20 figure (engine-anchored, age-independent) — used for absolute baselines,
// matching model/test.mjs (77.46 / 82.12).
const le = async () => parseFloat((await page.locator("#leVal").textContent()).replace(/[^\d.]/g, ""));
const cohortLE = async () => parseFloat(await page.locator("#leCond").textContent());   // "77.46 yrs cohort …" → 77.46
const settle = () => page.waitForTimeout(120);
const tab = async (name) => { await page.locator(`#modTabSeg button[data-tab="${name}"]`).click(); await settle(); };
// M7: the timeline is the sole editing surface. Drive scenarios by setting state.timeline.events directly
// (the same path the UI's "+ Add"/editor build) and re-rendering through the real app, then read LE.
const setTimeline = async (events) => {
  await page.evaluate((evs) => {
    state.timeline.events = evs.map((e, i) => ({ id: "e2e-" + i, ...e }));
    historySelectedId = null;
    renderAll();
  }, events);
  await settle();
};
const clearTimeline = () => setTimeline([]);

// 1. clean load
check("no console errors on load", consoleErrors.length === 0, consoleErrors.slice(0, 2).join(" | "));
check("no uncaught page errors on load", pageErrors.length === 0, pageErrors.slice(0, 2).join(" | "));

// 2. baseline LE — assert the cohort-from-20 figure (engine-anchored); capture the conditioned headline for Δ-checks
const leBase = await le();
const cohortM = await cohortLE();
check("baseline male cohort LE ≈ 77.5", Math.abs(cohortM - 77.5) < 0.3, "got " + cohortM);

// 3. all three SVG panels rendered with children (graph + merged timeline + cause-of-death)
for (const id of ["graphSvg", "timelineSvg", "codSvg"]) {
  const n = await page.locator(`#${id} > *`).count();
  check(`#${id} rendered (${n} children)`, n > 0);
}

// 4. sex toggle → female baseline (cohort figure)
await page.locator('#sexSeg button[data-sex="female"]').click();
await settle();
const cohortF = await cohortLE();
check("sex→female cohort LE ≈ 82.1", Math.abs(cohortF - 82.1) < 0.4, "got " + cohortF);
await page.locator('#sexSeg button[data-sex="male"]').click();
await settle();

// 5. M7 STRUCTURAL: the retired surfaces are gone; the new graph→timeline jump button exists.
check("M7: Lifestyle/Labs tab removed", (await page.locator('#modTabSeg button[data-tab="blayer"]').count()) === 0);
check("M7: only graph + timeline tabs remain", (await page.locator('#modTabSeg button').count()) === 2);
check("M7: coupling slider removed", (await page.locator("#coupleSlider").count()) === 0);
check("M7: lifestyle slider removed", (await page.locator("#lifestyleSlider").count()) === 0);
check("M7: graph freeze sliders removed", (await page.locator("#startSlider").count()) === 0 && (await page.locator("#effSlider").count()) === 0);
check("M7: graph→timeline jump button present", (await page.locator("#addFreezeToTimeline").count()) === 1);

// 6. BMI biomarker anchor (timeline) moves LE the right way
await setTimeline([{ channel: "biomarker:BMI", age: 40, value: 22 }]);
const leLean = await le();
check("BMI=22 anchor (timeline) raises LE", leLean > leBase + 0.2, `${leLean} vs ${leBase}`);
await setTimeline([{ channel: "biomarker:BMI", age: 40, value: 35 }]);
const leObese = await le();
check("BMI=35 anchor (timeline) lowers LE", leObese < leBase - 0.2, `${leObese} vs ${leBase}`);
await clearTimeline();

// 7. resting-HR biomarker (timeline) — WIRED to mortality via stiffness (B3/A4): fit HR raises LE, high lowers.
await setTimeline([{ channel: "biomarker:restingHR", age: 40, value: 40 }]);
const leHRlow = await le();
check("resting HR=40 (fit) raises LE (HR→stiffness→CVD)", leHRlow > leBase + 0.2, `${leHRlow} vs ${leBase}`);
await setTimeline([{ channel: "biomarker:restingHR", age: 40, value: 95 }]);
const leHRhigh = await le();
check("resting HR=95 lowers LE", leHRhigh < leBase - 0.1, `${leHRhigh} vs ${leBase}`);
await clearTimeline();

// 8. smoking status (timeline exposure) — current smoker drops LE substantially
await setTimeline([{ channel: "input:smokingStatus", age: 20, value: "current" }]);
const leSmoke = await le();
check("current smoker (timeline) lowers LE (>1 yr)", leBase - leSmoke > 1, `Δ=${(leSmoke - leBase).toFixed(2)}`);
await clearTimeline();

// 9. HbA1c biomarker anchor high (diabetic) lowers LE
await setTimeline([{ channel: "biomarker:HbA1c", age: 40, value: 8 }]);
const leDiab = await le();
check("HbA1c=8 (diabetic) lowers LE", leDiab < leBase - 0.2, `${leDiab} vs ${leBase}`);
await clearTimeline();

// 10. physical-activity exposure (timeline) up (fitness) raises LE
await setTimeline([{ channel: "input:physicalActivity", age: 20, value: 450 }]);
const leAct = await le();
check("physical activity ↑ (timeline) raises LE", leAct > leBase + 0.05, `${leAct} vs ${leBase}`);
await clearTimeline();

// 10b. sleep exposure (U-shape) — both short and long sleep lower LE
await setTimeline([{ channel: "input:sleep", age: 20, value: 5 }]);
const leSleep5 = await le();
check("sleep 5h (short) lowers LE", leSleep5 < leBase - 0.5, `${leSleep5} vs ${leBase}`);
await setTimeline([{ channel: "input:sleep", age: 20, value: 10 }]);
const leSleep10 = await le();
check("sleep 10h (long) lowers LE (U-shape)", leSleep10 < leBase - 0.5, `${leSleep10} vs ${leBase}`);
await clearTimeline();

// 11. statin treatment (timeline) raises LE (lowers LDL→CVD)
await setTimeline([{ channel: "treatment:statin", age: 40, value: 1 }]);
const leStatin = await le();
check("statin treatment (timeline) raises LE", leStatin > leBase + 0.05, `${leStatin} vs ${leBase}`);
await clearTimeline();

// 12. M7 NEW: lifestyle / extrinsic-risk as a timeline exposure — ×3 lowers LE, back to ×1 restores it.
await setTimeline([{ channel: "lifestyle:extrinsic", age: 20, value: 3 }]);
const leRisk = await le();
check("lifestyle ×3 extrinsic (timeline) lowers LE", leRisk < leBase - 0.5, `${leRisk} vs ${leBase}`);
await clearTimeline();

// 12b. FORWARD-PLANNING FIX: an LDL lab anchor reflects history; a forward exposure change (saturated fat →
// LDL, at/after now=40) must still move LE — NOT be re-absorbed by the anchor. Before the fix these were equal.
const ldlAnchored = (sat) => [{ channel: "biomarker:LDL", age: 40, value: 160 }, { channel: "input:dietSatFat", age: 40, value: sat }];
await setTimeline(ldlAnchored(10)); const leSat10 = await le();
await setTimeline(ldlAnchored(3));  const leSat3 = await le();
check("forward exposure change moves LE despite an LDL lab anchor (sat-fat fix)", leSat3 > leSat10 + 0.1, `Δ=${(leSat3 - leSat10).toFixed(3)} (10→${leSat10}, 3→${leSat3})`);
await clearTimeline();

// 12c. The OTHER half of the split: a lab draw at age<now must still reproduce EXACTLY under the stripped
// historical regime, while an at-now plan still moves forward LE. History (diet=10@30, LDL@35=150) + plan@40.
const histPlan = (planSat) => [
  { channel: "input:dietSatFat", age: 30, value: 10 },          // historical diet
  { channel: "biomarker:LDL", age: 35, value: 150 },            // historical lab, age 35 < now(40)
  { channel: "input:dietSatFat", age: 40, value: planSat }      // plan from now
];
await setTimeline(histPlan(3));
const ldl35 = await page.evaluate(() => window._lastSim.medValues.LDL[35 - 20]);
check("history draw at age<now still reproduces under the split (LDL@35 ≈ 150)", Math.abs(ldl35 - 150) < 0.5, "got " + ldl35);
const lePlan3 = await le();
await setTimeline(histPlan(10));
const lePlan10 = await le();
check("at-now plan still moves LE with a prior historical lab", lePlan3 > lePlan10 + 0.05, `Δ=${(lePlan3 - lePlan10).toFixed(3)}`);
await clearTimeline();

// 13. senolytic freeze via the timeline → LE rises ~0.65 (the B3+A4 stiffness vertical)
await setTimeline([{ channel: "intervention:cellular-senescence", startAge: 40, endAge: null, efficacy: 1 }]);
const leSeno = await le();
check("senolytic (cellular-senescence freeze, timeline) raises LE ≈0.65",
  leSeno - leBase > 0.4 && leSeno - leBase < 0.95, `Δ=${(leSeno - leBase).toFixed(2)}`);
await clearTimeline();

// 13b. M7: exercise the REAL add-bar + editor UI (not just state injection) — add a lifestyle:extrinsic
// exposure via #historyAddBar (type→channel→"+ Add"), then raise it to ×3 via the #historyEditor value field,
// and confirm LE drops. Covers buildHistoryAddBar → addHistEventToChannel → commitEditorField end-to-end.
await tab("timeline");
await page.selectOption("#historyAddBar select >> nth=0", "exposure");
await settle();
await page.selectOption("#historyAddBar select >> nth=1", "lifestyle:extrinsic");
await page.locator("#historyAddBar button").click();   // "+ Add at now" (defaults the multiplier to ×1.0)
await settle();
check("add-bar created a lifestyle:extrinsic event",
  await page.evaluate(() => (state.timeline.events || []).some(e => e.channel === "lifestyle:extrinsic")));
const valInput = page.locator('#historyEditor input[data-k="value"]');
await valInput.fill("3"); await valInput.dispatchEvent("change");
await settle();
const leUIrisk = await le();
check("add-bar+editor: lifestyle ×3 via real UI lowers LE", leUIrisk < leBase - 0.5, `${leUIrisk} vs ${leBase}`);
await clearTimeline();

// 14. M7 NEW: graph→timeline jump button — select a node, click jump, lands on timeline w/ a freeze event.
await tab("graph");
await page.evaluate(() => selectNode("cellular-senescence"));
await settle();
check("jump button enabled for a freeze-able node", !(await page.locator("#addFreezeToTimeline").isDisabled()));
await page.locator("#addFreezeToTimeline").click();
await settle();
check("jump switches to the timeline tab", await page.locator("#modtab-timeline").isVisible());
check("jump adds a node-freeze event on the timeline",
  await page.evaluate(() => (state.timeline.events || []).some(e => e.channel === "intervention:cellular-senescence")));

// 14b. "Load example" — the built-in fictional demo bundle loads via its button (inlined, no network).
await tab("timeline");
await page.locator("#historyImportToggle").click();   // reveal the import panel
await settle();
await page.locator("#historyLoadExample").click();
await settle();
const exEvents = await page.evaluate(() => (state.timeline.events || []).length);
check("Load example populates the timeline (≥8 events)", exEvents >= 8, "events=" + exEvents);
check("Load example sets sex + birthDate from the bundle", await page.evaluate(() => state.sex === "male" && state.timeline.birthDate === "1980-04-12"));
check("Load example: at least one LDL biomarker event imported",
  await page.evaluate(() => (state.timeline.events || []).some(e => e.channel === "biomarker:LDL")));

// 14c. Export current settings → faithful round-trip via "Load file" (events[] passthrough). Build a scenario
// with lifestyle (the channel the friendly schema can't express) + an LDL lab, export, clear, re-import, LE matches.
await clearTimeline();
await setTimeline([{ channel: "lifestyle:extrinsic", age: 20, value: 4 }, { channel: "biomarker:LDL", age: 40, value: 170 }]);
const leBeforeExport = await le();
const exported = await page.evaluate(() => JSON.stringify(exportSettingsBundle()));
check("export bundle carries the lifestyle event", /"lifestyle:extrinsic"/.test(exported), exported.slice(0, 80));
await page.evaluate((b) => { state.timeline.events = []; historySelectedId = null; renderAll(); importHistoryBundle(b); }, exported);
await settle();
const leAfterReimport = await le();
check("export → re-import round-trips LE faithfully", Math.abs(leAfterReimport - leBeforeExport) < 0.02, `${leBeforeExport} → ${leAfterReimport}`);
check("re-imported timeline restores the lifestyle event",
  await page.evaluate(() => (state.timeline.events || []).some(e => e.channel === "lifestyle:extrinsic")));
// "Download JSON" triggers a real download with the expected filename
const [dl] = await Promise.all([ page.waitForEvent("download"), page.locator("#historyExportFile").click() ]);
check("Download JSON triggers a file download named aging-sim-settings.json", dl.suggestedFilename() === "aging-sim-settings.json", dl.suggestedFilename());
await clearTimeline();

// 15. reset returns LE to baseline (clears the timeline)
await page.locator("#resetAll").click().catch(() => {});
await settle();
const leReset = await le();
check("reset returns LE to baseline", Math.abs(leReset - leBase) < 0.05, `${leReset} vs ${leBase}`);

// 16. no console/page errors accumulated across all the interactions
check("no console errors after interactions", consoleErrors.length === 0, consoleErrors.slice(0, 2).join(" | "));
check("no uncaught page errors after interactions", pageErrors.length === 0, pageErrors.slice(0, 2).join(" | "));

await browser.close();

let pass = 0;
for (const r of results) {
  console.log(`${r.pass ? "PASS" : "FAIL"}  ${r.name}${r.detail ? "  [" + r.detail + "]" : ""}`);
  if (r.pass) pass++;
}
console.log(`\n${pass}/${results.length} browser checks passed`);
process.exit(pass === results.length ? 0 : 1);
