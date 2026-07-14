#!/usr/bin/env node
// validate-graph.mjs — structural validator for the unified causal graph (MODEL.edges).
// Catches the failure classes that baseline-LE tests miss (and that the edge-auditor /
// graph-node-seeder could introduce):
//   • unknown endpoints (a from/to not in any registry) — silently filtered by the viz /
//     ignored by some engine paths, so build + LE tests pass while the edge is meaningless;
//   • invalid cause-targets (a cause/frailty `to` outside the cause-key set);
//   • DUPLICATE/colliding frailty targets — betaByCause keys by `to`, so a second LIVE
//     frailty edge to a cause silently OVERWRITES the first (baseline LE unaffected; the
//     frailty multiplier only bites under deviation/intervention, so LE alone hides it);
//   • duplicate live edges;
//   • malformed cause/mediator forms (missing required fields → NaN at runtime — e.g. a
//     mediatorThresholdRamp without slope/threshold/cap);
//   • malformed structural stubs (bad intendedKind, unresolvable endpoint, missing anchor).
// Run standalone (exits 1 on errors) or `import { validateGraph }`.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

// cause-key registry mirrors engine.mjs CAUSE_KEYS (+ the synthetic "allcause" target).
const CAUSE_KEYS = ["extrinsic", "cardiovascular", "cancer", "neurodegeneration", "infection", "diabetes", "copd", "ckd", "liver", "falls", "residual"];
const CAUSE_TARGETS = new Set([...CAUSE_KEYS, "allcause"]);
const INTENDED_KINDS = new Set(["coupling", "mediator", "cause", "augment", "frailty", "driver"]);
const EVIDENCE = new Set(["strong", "moderate", "weak", "disputed"]);

// Required fields per form. Presence alone is not enough: a string-valued beta passes
// JavaScript multiplication but poisons the hazard with NaN, so numeric fields are checked
// separately below. Only forms that appear on live edges are listed here.
const CAUSE_FORM_REQ = {
  mediatorLogLinear: ["med", "beta"],
  mediatorThresholdRamp: ["med", "slope", "threshold", "cap"],
  bmiThresholdRatio: ["med", "beta"],
  directLogLinear: ["input", "beta"],
  directHinge: ["input", "slope", "knee"],
  smokingCategorical: ["input", "rr"],
  activityFitness: ["input", "metMap", "betaPerMet"],
  uShape: ["input", "nadir", "beta"],
  ushaped: ["input", "nadir", "beta"],
  bmiJcurve: ["med", "betaUpper", "betaLower"], // upper/lower brackets default; med + both betas read
  nodeLogLinear: ["beta"],                      // node-source cause edge: source node in `from`, exp(β·(B−T))
};
const MED_FORM_REQ = {
  linear: ["coeff"], mediatorLinear: ["coeff"], fiberSaturating: ["coeff"],
  exerciseScaled: ["coeff"], exerciseHbA1c: ["coeff"], sodiumConvex: ["coeff"],
  alcoholThreshold: ["coeff"], weightDynamic: ["coeff"], absShift: ["coeff"],
};

const has = (e, f) => e[f] !== undefined && e[f] !== null;
const finite = (v) => typeof v === "number" && Number.isFinite(v);
const finiteMap = (v, keys) => !!v && typeof v === "object" && !Array.isArray(v)
  && keys.every((k) => finite(v[k]));
const finitePair = (v) => Array.isArray(v) && v.length === 2 && v.every(finite);

function requireFinite(errors, at, e, fields) {
  for (const f of fields) if (has(e, f) && !finite(e[f])) errors.push(`${at}: ${f} must be a finite number, got ${JSON.stringify(e[f])}`);
}

function validateCauseForm(errors, at, e) {
  switch (e.form) {
    case "mediatorLogLinear":
      requireFinite(errors, at, e, ["beta"]);
      if (e.betaAgeMod) {
        requireFinite(errors, at + " betaAgeMod", e.betaAgeMod, ["refAge", "halfPer"]);
        if (finite(e.betaAgeMod.halfPer) && e.betaAgeMod.halfPer <= 0) errors.push(`${at}: betaAgeMod.halfPer must be > 0`);
      }
      break;
    case "mediatorThresholdRamp": requireFinite(errors, at, e, ["slope", "threshold", "cap"]); break;
    case "bmiThresholdRatio": requireFinite(errors, at, e, ["beta"]); break;
    case "directLogLinear": requireFinite(errors, at, e, ["beta"]); break;
    case "directHinge": requireFinite(errors, at, e, ["slope", "knee"]); break;
    case "smokingCategorical":
      if (!finiteMap(e.rr, ["never", "former", "current"])) errors.push(`${at}: rr must contain finite never/former/current values`);
      break;
    case "activityFitness":
      requireFinite(errors, at, e, ["betaPerMet"]);
      if (!Array.isArray(e.metMap) || e.metMap.length < 2 || !e.metMap.every(finitePair)) errors.push(`${at}: metMap must be an array of at least two finite [x,y] pairs`);
      break;
    case "uShape":
    case "ushaped":
      if (!(finite(e.nadir) || finitePair(e.nadir))) errors.push(`${at}: nadir must be a finite number or finite [low,high] pair`);
      if (!(finite(e.beta) || finiteMap(e.beta, ["low", "high"]))) errors.push(`${at}: beta must be finite or contain finite low/high arms`);
      if (has(e, "power") && !finite(e.power)) errors.push(`${at}: power must be a finite number`);
      break;
    case "bmiJcurve": requireFinite(errors, at, e, ["betaUpper", "betaLower"]); break;
    case "nodeLogLinear": requireFinite(errors, at, e, ["beta"]); break;
  }
}

function validateMediatorForm(errors, at, e) {
  // Every currently supported mediator form is coefficient-driven.
  requireFinite(errors, at, e, ["coeff"]);
}

export function validateGraph(MODEL) {
  const errors = [], warnings = [];
  const nodes = new Set(MODEL.nodes.map((n) => n.id));
  // nodes migrated to an emergent ∫rate·dt baseline (carry a `rate` channel) — a `driver` stub
  // into one of these is populate-ready (the de-age-pegging step is done), so it does NOT warn.
  const nodesWithRate = new Set(MODEL.nodes.filter((n) => n.rate).map((n) => n.id));
  const B = MODEL.bLayer || {};
  const inputs = new Set((B.exogenousInputs || []).map((x) => x.id));
  const mediators = new Set((B.mediators || []).map((x) => x.id));
  const states = new Set((B.stateNodes || []).map((x) => x.id));
  const anySource = (id) => nodes.has(id) || inputs.has(id) || mediators.has(id) || states.has(id);

  const edges = MODEL.edges || [];
  const liveKey = new Set();             // kind|src|dst — duplicate-live detection
  const liveFrailtyTarget = new Map();   // to -> from — single-source-per-cause enforcement
  const stubs = [];

  edges.forEach((e, i) => {
    const src0 = e.from || e.fromState || e.input || "?";
    const dst0 = e.to || e.mediator || "?";
    const at = `edge[${i}] ${e.kind || "?"} ${src0}→${dst0}`;
    const isStub = e.kind === "stub" || e.provenance === "stub";

    if (isStub) {
      if (e.kind !== "stub") errors.push(`${at}: provenance:"stub" must use kind:"stub" (so the engine excludes it structurally)`);
      const ik = e.intendedKind;
      if (!INTENDED_KINDS.has(ik)) { errors.push(`${at}: stub intendedKind invalid: ${JSON.stringify(ik)}`); return; }
      if (ik === "frailty") warnings.push(`${at}: frailty stub — engine keys frailty by target (ONE source per cause); the populate pass must resolve multi-source before calibrating (see § frailty).`);
      const src = ik === "augment" ? e.fromState : (e.from || e.input);
      const dst = (ik === "cause" || ik === "frailty") ? e.to : (ik === "augment" ? e.mediator : e.to);
      if (!anySource(src)) errors.push(`${at}: stub source not in any registry: ${src}`);
      if (ik === "cause" || ik === "frailty") { if (!CAUSE_TARGETS.has(dst)) errors.push(`${at}: stub cause-target invalid: ${dst}`); }
      else if (ik === "mediator" || ik === "augment") { if (!mediators.has(dst)) errors.push(`${at}: stub mediator-target unknown: ${dst}`); }
      else if (ik === "driver") { if (!states.has(dst) && !nodes.has(dst)) errors.push(`${at}: stub driver-target unknown: ${dst}`); else if (!states.has(dst) && !nodesWithRate.has(dst)) warnings.push(`${at}: stub driver-target "${dst}" is a node, not yet a state node — populating requires migrating it to rate-integrated (∫rate·dt) form first (the de-age-pegging step)`); }
      else if (ik === "coupling") { if (!nodes.has(dst)) errors.push(`${at}: stub coupling-target unknown: ${dst}`); }
      if (!EVIDENCE.has(e.evidenceStrength)) warnings.push(`${at}: stub missing/invalid evidenceStrength (strong|moderate|weak|disputed)`);
      if (!has(e, "note")) warnings.push(`${at}: stub missing note (the located biology anchor + natural variable + #gap)`);
      stubs.push({ i, key: `${ik}|${src}|${dst}` });
      return;
    }

    // ---- LIVE edge ----
    let src, dst;
    switch (e.kind) {
      case "coupling":
        src = e.from; dst = e.to;
        if (!nodes.has(e.from)) errors.push(`${at}: coupling from unknown: ${e.from}`);
        if (!nodes.has(e.to)) errors.push(`${at}: coupling to unknown: ${e.to}`);
        if (!(e.strength in MODEL.strengthToGain)) errors.push(`${at}: coupling strength invalid: ${e.strength}`);
        else if (!finite(MODEL.strengthToGain[e.strength])) errors.push(`${at}: strengthToGain.${e.strength} must be a finite number`);
        break;
      case "mediator": {
        src = e.from; dst = e.to;
        if (!anySource(e.from)) errors.push(`${at}: mediator from unknown: ${e.from}`);
        if (!mediators.has(e.to)) errors.push(`${at}: mediator to not a mediator: ${e.to}`);
        const req = MED_FORM_REQ[e.form];
        if (!req) errors.push(`${at}: unrecognized mediator form: ${e.form}`);
        else {
          req.forEach((f) => { if (!has(e, f)) errors.push(`${at}: mediator form ${e.form} missing ${f}`); });
          validateMediatorForm(errors, at, e);
        }
        break;
      }
      case "cause": {
        src = e.from || e.input; dst = e.to;
        if (!anySource(src)) errors.push(`${at}: cause source unknown: ${src}`);
        if (!CAUSE_TARGETS.has(e.to)) errors.push(`${at}: cause target invalid: ${e.to}`);
        const req = CAUSE_FORM_REQ[e.form];
        if (!req) errors.push(`${at}: unrecognized cause form: ${e.form}`);
        else {
          req.forEach((f) => { if (!has(e, f)) errors.push(`${at}: cause form ${e.form} missing ${f}`); });
          validateCauseForm(errors, at, e);
        }
        break;
      }
      case "augment":
        src = e.fromState; dst = e.mediator;
        if (!states.has(e.fromState)) errors.push(`${at}: augment fromState not a state node: ${e.fromState}`);
        if (!mediators.has(e.mediator)) errors.push(`${at}: augment mediator unknown: ${e.mediator}`);
        if (!has(e, "coeff")) errors.push(`${at}: augment missing coeff`);
        else if (!(finite(e.coeff) || finiteMap(e.coeff, ["male", "female"]))) errors.push(`${at}: augment coeff must be finite or contain finite male/female values`);
        break;
      case "frailty":
        src = e.from; dst = e.to;
        if (!nodes.has(e.from)) errors.push(`${at}: frailty from unknown: ${e.from}`);
        if (!CAUSE_TARGETS.has(e.to)) errors.push(`${at}: frailty target invalid: ${e.to}`);
        if (!has(e, "beta")) errors.push(`${at}: frailty missing beta`);
        else if (!finite(e.beta)) errors.push(`${at}: frailty beta must be a finite number`);
        if (liveFrailtyTarget.has(e.to)) errors.push(`${at}: DUPLICATE live frailty target ${e.to} (also from ${liveFrailtyTarget.get(e.to)}) — betaByCause keys by target, so the later edge SILENTLY OVERWRITES the earlier. The engine supports ONE frailty source per cause; merge or extend the engine first.`);
        else liveFrailtyTarget.set(e.to, e.from);
        break;
      default:
        errors.push(`${at}: unknown edge kind: ${JSON.stringify(e.kind)}`);
        return;
    }
    const k = `${e.kind}|${src}|${dst}`;
    if (liveKey.has(k)) errors.push(`${at}: duplicate live edge ${k}`);
    else liveKey.add(k);
  });

  // a stub must not sit in a lane a live edge already occupies (it's already populated)
  stubs.forEach(({ i, key }) => {
    const [ik, src, dst] = key.split("|");
    if (liveKey.has(`${ik}|${src}|${dst}`)) warnings.push(`edge[${i}] stub duplicates a LIVE ${ik} edge ${src}→${dst} — remove the stub (already populated)`);
  });

  // Mortality registry validation: a typo here bypasses edge validation and crashes/NaNs
  // in the odds-link loop even when every graph edge is structurally valid.
  for (const [cause, c] of Object.entries((MODEL.mortality && MODEL.mortality.causes) || {})) {
    const at = `mortality.causes.${cause}`;
    if (!nodes.has(c.node)) errors.push(`${at}: node unknown: ${c.node}`);
    if (!finiteMap(c.RmaxPerYear, ["male", "female"])) errors.push(`${at}: RmaxPerYear must contain finite male/female values`);
  }

  // Operator presets are user-facing intervention scenarios. Malformed values otherwise
  // degrade silently to an inert or misleading operator at runtime.
  const presetIds = new Set();
  for (const [i, p] of (B.operatorPresets || []).entries()) {
    const at = `operatorPreset[${i}] ${p.id || "?"}`;
    if (!p.id) errors.push(`${at}: missing id`);
    else if (presetIds.has(p.id)) errors.push(`${at}: duplicate id`);
    else presetIds.add(p.id);
    if (p.kind !== "senolytic-pulse") errors.push(`${at}: unsupported kind ${JSON.stringify(p.kind)}`);
    if (!nodes.has(p.target)) errors.push(`${at}: target node unknown: ${p.target}`);

    const kills = p.killFractionScenarios;
    if (!kills || Object.keys(kills).length === 0) errors.push(`${at}: missing killFractionScenarios`);
    else {
      for (const [name, value] of Object.entries(kills)) {
        if (typeof value !== "number" || !Number.isFinite(value) || value < 0 || value > 1)
          errors.push(`${at}: kill scenario ${name} must be finite in [0,1], got ${value}`);
      }
      if (!(p.defaultKillScenario in kills))
        errors.push(`${at}: defaultKillScenario not found in killFractionScenarios`);
    }

    const rebound = p.reboundHalfLifeScenariosYears;
    if (!rebound || Object.keys(rebound).length === 0) errors.push(`${at}: missing reboundHalfLifeScenariosYears`);
    else {
      for (const [name, value] of Object.entries(rebound)) {
        if (typeof value !== "number" || !Number.isFinite(value) || value <= 0)
          errors.push(`${at}: rebound scenario ${name} must be finite and >0, got ${value}`);
      }
      if (!(p.defaultReboundScenario in rebound))
        errors.push(`${at}: defaultReboundScenario not found in reboundHalfLifeScenariosYears`);
    }
  }

  return { errors, warnings };
}

if (process.argv[1] && process.argv[1].endsWith("validate-graph.mjs")) {
  const HERE = dirname(fileURLToPath(import.meta.url));
  const MODEL = JSON.parse(readFileSync(resolve(HERE, "params.json"), "utf8"));
  const { errors, warnings } = validateGraph(MODEL);
  warnings.forEach((w) => console.warn("WARN  " + w));
  errors.forEach((er) => console.error("ERROR " + er));
  console.log(`\nvalidate-graph: ${errors.length} error(s), ${warnings.length} warning(s)`);
  process.exit(errors.length ? 1 : 0);
}
