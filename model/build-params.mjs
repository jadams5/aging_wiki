#!/usr/bin/env node
// build-params.mjs — extract the canonical MODEL json block from
// frameworks/causal-graph-parameters.md and write model/params.json.
//
// The .md file remains the single source of truth; this script is the
// build step that materializes the machine-readable params.json the
// engine + tests consume. Run: `node model/build-params.mjs`.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

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
  // Sanity: v0.4, 18 nodes, 38 edges.
  const v = model.meta?.version;
  const nNodes = model.nodes?.length;
  const nEdges = model.edges?.length;
  writeFileSync(OUT_PATH, JSON.stringify(model, null, 2) + "\n", "utf8");
  process.stdout.write(
    `Wrote ${OUT_PATH}\n  version=${v}  nodes=${nNodes}  edges=${nEdges}\n`
  );
  if (v !== "v0.4") console.warn(`WARN: expected version v0.4, got ${v}`);
  if (nNodes !== 18) console.warn(`WARN: expected 18 nodes, got ${nNodes}`);
  if (nEdges !== 38) console.warn(`WARN: expected 38 edges, got ${nEdges}`);
}

if (import.meta.url === `file://${process.argv[1]}`) main();
