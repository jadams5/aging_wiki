#!/usr/bin/env node
// build-params.mjs — extract the canonical MODEL json block from
// frameworks/causal-graph-parameters.md and write model/params.json.
//
// The .md file remains the single source of truth; this script is the
// build step that materializes the machine-readable params.json the
// engine + tests consume. Run: `node model/build-params.mjs`.

import { readFileSync, renameSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { validateGraph } from "./validate-graph.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const MD_PATH = resolve(HERE, "..", "frameworks", "causal-graph-parameters.md");
const OUT_PATH = resolve(HERE, "params.json");

// Extract the FIRST ```json … ``` fenced block under the
// "## Canonical model JSON" heading (it is the only json fence in the file).
export function extractModelJson(mdText) {
  const lines = mdText.split("\n");
  let inFence = false;
  const buf = [];
  for (const line of lines) {
    if (!inFence) {
      if (line.trim() === "```json") { inFence = true; }
      continue;
    }
    if (line.trim() === "```") break; // end of first json fence
    buf.push(line);
  }
  if (buf.length === 0) throw new Error("No ```json block found in " + MD_PATH);
  return JSON.parse(buf.join("\n"));
}

function main() {
  const md = readFileSync(MD_PATH, "utf8");
  const model = extractModelJson(md);
  // Sanity: v0.5, 24 nodes (23 + residual-aging Op-B 2026-06-15), 38 edges.
  const v = model.meta?.version;
  const nNodes = model.nodes?.length;
  const nEdges = model.edges?.length;
  if (v !== "v0.5") console.warn(`WARN: expected version v0.5, got ${v}`);
  if (nNodes !== 24) console.warn(`WARN: expected 24 nodes, got ${nNodes}`);
  // MODEL.edges is the unified graph (coupling|mediator|cause|augment|frailty). The
  // hallmark-coupling subgraph should hold 38 edges; total grows with the B-layer.
  const nCoupling = (model.edges || []).filter((e) => e.kind === "coupling").length;
  if (nCoupling !== 38) console.warn(`WARN: expected 38 coupling edges, got ${nCoupling} (total ${nEdges})`);

  // Structural gate: validate BEFORE touching the last-known-good generated artifact.
  // Unknown endpoints, invalid cause-targets, non-finite coefficients, colliding frailty
  // targets, malformed forms, and bad stubs must fail without poisoning params.json.
  const { errors, warnings } = validateGraph(model);
  for (const w of warnings) console.warn("validate-graph WARN: " + w);
  if (errors.length) {
    for (const e of errors) console.error("validate-graph ERROR: " + e);
    throw new Error(`build-params: ${errors.length} graph-validation error(s) — params.json left unchanged; fix the model source.`);
  }

  // Atomic publish: write a sibling temporary file, then rename it over params.json.
  // Readers therefore see either the prior valid model or the complete new valid model.
  const tmpPath = OUT_PATH + ".tmp";
  writeFileSync(tmpPath, JSON.stringify(model, null, 2) + "\n", "utf8");
  renameSync(tmpPath, OUT_PATH);
  process.stdout.write(
    `Wrote ${OUT_PATH}\n  version=${v}  nodes=${nNodes}  edges=${nEdges}\n`
  );
}

if (import.meta.url === `file://${process.argv[1]}`) main();
