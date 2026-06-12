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

// required fields per form (absent ⇒ NaN at runtime). Only forms that appear on edges.
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

export function validateGraph(MODEL) {
  const errors = [], warnings = [];
  const nodes = new Set(MODEL.nodes.map((n) => n.id));
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
      else if (ik === "driver") { if (!states.has(dst) && !nodes.has(dst)) errors.push(`${at}: stub driver-target unknown: ${dst}`); else if (!states.has(dst)) warnings.push(`${at}: stub driver-target "${dst}" is a node, not yet a state node — populating requires migrating it to rate-integrated (∫rate·dt) form first (the de-age-pegging step)`); }
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
        break;
      case "mediator": {
        src = e.from; dst = e.to;
        if (!anySource(e.from)) errors.push(`${at}: mediator from unknown: ${e.from}`);
        if (!mediators.has(e.to)) errors.push(`${at}: mediator to not a mediator: ${e.to}`);
        const req = MED_FORM_REQ[e.form];
        if (!req) warnings.push(`${at}: unrecognized mediator form: ${e.form}`);
        else req.forEach((f) => { if (!has(e, f)) errors.push(`${at}: mediator form ${e.form} missing ${f}`); });
        break;
      }
      case "cause": {
        src = e.from || e.input; dst = e.to;
        if (!anySource(src)) errors.push(`${at}: cause source unknown: ${src}`);
        if (!CAUSE_TARGETS.has(e.to)) errors.push(`${at}: cause target invalid: ${e.to}`);
        const req = CAUSE_FORM_REQ[e.form];
        if (!req) warnings.push(`${at}: unrecognized cause form: ${e.form}`);
        else req.forEach((f) => { if (!has(e, f)) errors.push(`${at}: cause form ${e.form} missing ${f}`); });
        break;
      }
      case "augment":
        src = e.fromState; dst = e.mediator;
        if (!states.has(e.fromState)) errors.push(`${at}: augment fromState not a state node: ${e.fromState}`);
        if (!mediators.has(e.mediator)) errors.push(`${at}: augment mediator unknown: ${e.mediator}`);
        if (!has(e, "coeff")) errors.push(`${at}: augment missing coeff`);
        break;
      case "frailty":
        src = e.from; dst = e.to;
        if (!nodes.has(e.from)) errors.push(`${at}: frailty from unknown: ${e.from}`);
        if (!CAUSE_TARGETS.has(e.to)) errors.push(`${at}: frailty target invalid: ${e.to}`);
        if (!has(e, "beta")) errors.push(`${at}: frailty missing beta`);
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
