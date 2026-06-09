#!/usr/bin/env node
// cli.mjs — command-line front end for the v0.3 aging-simulator engine.
//
//   node model/cli.mjs le        [--sex male|female] [--lifestyle N]
//   node model/cli.mjs sweep     --node <id> [--sex male|female] [--start 40]
//   node model/cli.mjs validate
//   node model/cli.mjs fit

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { simulate, lifeExpectancy } from "./engine.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const MODEL = JSON.parse(readFileSync(resolve(HERE, "params.json"), "utf8"));

function parseFlags(argv) {
  const f = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith("--")) { f[key] = true; }
      else { f[key] = next; i++; }
    }
  }
  return f;
}

function usage() {
  console.log(`Usage:
  node model/cli.mjs le        [--sex male|female] [--lifestyle N]
  node model/cli.mjs sweep     --node <id> [--sex male|female] [--start 40]
  node model/cli.mjs validate
  node model/cli.mjs fit`);
}

const [cmd, ...rest] = process.argv.slice(2);
const flags = parseFlags(rest);
const sex = flags.sex || "male";

switch (cmd) {
  case "le": {
    const lifestyle = flags.lifestyle !== undefined ? Number(flags.lifestyle) : 1.0;
    const LE = lifeExpectancy(MODEL, { sex, lifestyle });
    console.log(`LE (${sex}, lifestyle=${lifestyle}): ${LE.toFixed(2)}`);
    break;
  }
  case "sweep": {
    const node = flags.node;
    if (!node) { console.error("sweep: --node <id> is required"); process.exit(2); }
    if (!MODEL.nodes.some((n) => n.id === node)) {
      console.error(`sweep: unknown node "${node}"`);
      console.error("  nodes: " + MODEL.nodes.map((n) => n.id).join(", "));
      process.exit(2);
    }
    const start = flags.start !== undefined ? Number(flags.start) : 40;
    const base = lifeExpectancy(MODEL, { sex });
    console.log(`ΔLE sweep — freeze ${node} @${start} (${sex}); baseline LE=${base.toFixed(2)}`);
    console.log("efficacy   LE      ΔLE");
    for (let eff = 0; eff <= 1.0 + 1e-9; eff += 0.1) {
      const LE = lifeExpectancy(MODEL, { sex, interventions: { [node]: { startAge: start, efficacy: eff } } });
      console.log(`${eff.toFixed(1).padStart(8)}  ${LE.toFixed(2).padStart(6)}  ${(LE - base >= 0 ? "+" : "") + (LE - base).toFixed(3)}`);
    }
    break;
  }
  case "validate": {
    const { runTests } = await import("./test.mjs");
    const ok = runTests();
    process.exit(ok ? 0 : 1);
    break;
  }
  case "fit": {
    console.log("fit: not yet implemented (calibration harness — next phase)");
    break;
  }
  default:
    usage();
    process.exit(cmd ? 2 : 0);
}
