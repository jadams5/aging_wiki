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

await page.goto(FILE);
await page.waitForFunction(() => {
  const el = document.getElementById("leVal");
  return el && el.textContent && el.textContent.trim() !== "" && el.textContent !== "—";
}, { timeout: 15000 });

const le = async () => parseFloat((await page.locator("#leVal").textContent()).replace(/[^\d.]/g, ""));
const settle = () => page.waitForTimeout(120);
const setLab = async (med, val) => {
  const f = page.locator(`#lab-${med}`);
  await f.fill(String(val));
  await f.dispatchEvent("change");
  await settle();
};

// 1. clean load
check("no console errors on load", consoleErrors.length === 0, consoleErrors.slice(0, 2).join(" | "));
check("no uncaught page errors on load", pageErrors.length === 0, pageErrors.slice(0, 2).join(" | "));

// 2. baseline LE
const leBase = await le();
check("baseline male LE ≈ 77.5", Math.abs(leBase - 77.5) < 0.3, "got " + leBase);

// 3. all three SVG panels rendered with children (graph + merged timeline + cause-of-death)
for (const id of ["graphSvg", "timelineSvg", "codSvg"]) {
  const n = await page.locator(`#${id} > *`).count();
  check(`#${id} rendered (${n} children)`, n > 0);
}

// 4. sex toggle → female baseline
await page.locator('#sexSeg button[data-sex="female"]').click();
await settle();
const leF = await le();
check("sex→female LE ≈ 82.1", Math.abs(leF - 82.1) < 0.4, "got " + leF);
await page.locator('#sexSeg button[data-sex="male"]').click();
await settle();

// The Labs / Lifestyle controls live behind a tab toggle — activate it for the lab tests.
const tab = async (name) => { await page.locator(`#modTabSeg button[data-tab="${name}"]`).click(); await settle(); };
await tab("blayer");

// 5. BMI lab anchor moves LE the right way (the field added this session)
await setLab("BMI", 22);
const leLean = await le();
check("BMI=22 anchor raises LE", leLean > leBase + 0.2, `${leLean} vs ${leBase}`);
await setLab("BMI", 35);
const leObese = await le();
check("BMI=35 anchor lowers LE", leObese < leBase - 0.2, `${leObese} vs ${leBase}`);

// 6. anchor→slider disable (calorieBalance grays when BMI anchored)
check("BMI anchor disables calorieBalance slider", await page.locator("#in-calorieBalance").isDisabled());
await setLab("BMI", "");
check("clearing BMI re-enables calorieBalance slider", !(await page.locator("#in-calorieBalance").isDisabled()));

// 7. resting-HR field — now WIRED to mortality via stiffness (B3/A4): a low/fit resting HR
// (less elastin fatigue → less stiffness → less CVD) RAISES LE; a high resting HR lowers it.
await setLab("restingHR", 40);
const leHRlow = await le();
check("resting HR=40 (fit) raises LE (HR→stiffness→CVD)", leHRlow > leBase + 0.2, `${leHRlow} vs ${leBase}`);
await setLab("restingHR", 95);
const leHRhigh = await le();
check("resting HR=95 lowers LE", leHRhigh < leBase - 0.1, `${leHRhigh} vs ${leBase}`);
await setLab("restingHR", "");

// 8. calorieBalance infodot tooltip (added this session) appears on hover — still on blayer tab
const info = page.locator("#brow-calorieBalance .infodot");
if (await info.count()) {
  await info.hover();
  await page.waitForTimeout(200);
  const op = await page.locator("#tooltip").evaluate((el) => getComputedStyle(el).opacity).catch(() => "0");
  check("calorieBalance infodot shows tooltip on hover", parseFloat(op) > 0.5, "opacity " + op);
} else {
  check("calorieBalance infodot present", false, "selector found none");
}

// 9. smoking status (segmented control) — current smoker drops LE substantially
await page.locator('#smokeSeg button[data-val="current"]').click();
await settle();
const leSmoke = await le();
check("current smoker lowers LE (>1 yr)", leBase - leSmoke > 1, `Δ=${(leSmoke - leBase).toFixed(2)}`);
await page.locator('#smokeSeg button[data-val="population"]').click();
await settle();

// 10. HbA1c lab anchor high (diabetic) lowers LE
await setLab("HbA1c", 8);
const leDiab = await le();
check("HbA1c=8 (diabetic) lowers LE", leDiab < leBase - 0.2, `${leDiab} vs ${leBase}`);
await setLab("HbA1c", "");

// 11. physical-activity slider up (fitness) raises LE
const act = page.locator("#in-physicalActivity");
await act.fill("450"); await act.dispatchEvent("input");
await settle();
const leAct = await le();
check("physical activity ↑ raises LE", leAct > leBase + 0.05, `${leAct} vs ${leBase}`);
await act.fill("150"); await act.dispatchEvent("input");
await settle();

// 11b. sleep slider (newly wired U-shape input) — both short and long sleep lower LE
const sleep = page.locator("#in-sleep");
await sleep.fill("5"); await sleep.dispatchEvent("input");
await settle();
const leSleep5 = await le();
check("sleep 5h (short) lowers LE", leSleep5 < leBase - 0.5, `${leSleep5} vs ${leBase}`);
await sleep.fill("10"); await sleep.dispatchEvent("input");
await settle();
const leSleep10 = await le();
check("sleep 10h (long) lowers LE (U-shape)", leSleep10 < leBase - 0.5, `${leSleep10} vs ${leBase}`);
await sleep.fill("7"); await sleep.dispatchEvent("input");
await settle();

// 12. statin treatment toggle raises LE (lowers LDL→CVD)
await page.locator("#tx-statin").check();
await settle();
const leStatin = await le();
check("statin treatment raises LE", leStatin > leBase + 0.05, `${leStatin} vs ${leBase}`);
await page.locator("#tx-statin").uncheck();
await settle();

// 13. senolytic intervention via the real UI → LE rises ~0.65 (the B3+A4 stiffness vertical)
await tab("graph");
await page.evaluate(() => selectNode("cellular-senescence"));
await settle();
const start = page.locator("#startSlider");
await start.fill("40"); await start.dispatchEvent("input");
const eff = page.locator("#effSlider");
await eff.fill("100"); await eff.dispatchEvent("input");
await settle();
const leSeno = await le();
check("senolytic (cellular-senescence freeze) raises LE ≈0.65",
  leSeno - leBase > 0.4 && leSeno - leBase < 0.95, `Δ=${(leSeno - leBase).toFixed(2)}`);
await page.locator("#resetAll").click().catch(() => {});
await settle();

// 14. reset returns LE to baseline (clears the senolytic intervention)
const leReset = await le();
check("reset returns LE to baseline", Math.abs(leReset - leBase) < 0.05, `${leReset} vs ${leBase}`);

await browser.close();

let pass = 0;
for (const r of results) {
  console.log(`${r.pass ? "PASS" : "FAIL"}  ${r.name}${r.detail ? "  [" + r.detail + "]" : ""}`);
  if (r.pass) pass++;
}
console.log(`\n${pass}/${results.length} browser checks passed`);
process.exit(pass === results.length ? 0 : 1);
