#!/usr/bin/env python3
"""
quartz-config-patch.py — apply this wiki's settings to a stock Quartz v5
`quartz.config.yaml` during the Pages build.

Quartz v5 configures the site (and its plugins) through a single YAML file.
Rather than vendor a full copy (which would drift from upstream's default
plugin list), the deploy workflow copies Quartz's shipped default and runs
this script to overlay only what we change:

  - configuration.pageTitle / baseUrl
  - configuration.ignorePatterns += protocols, protocols-template (defence in
    depth; the rsync into content/ already excludes the private tree)
  - the graph plugin's options: showTags:false (drops the per-tag nodes that
    bloat every local graph — pages carry many #gap/* tags) plus
    faster-settling forces. NOTE: this only trims the heavy settle phase; the
    graph's idle CPU is inherent to Quartz's render loop (same in v4 and v5)
    and has no config fix. See memory: project_quartz_pages_publishing.

Usage:
    python3 scripts/quartz-config-patch.py <path-to-quartz.config.yaml> <baseUrl>
"""

import sys

import yaml

PAGE_TITLE = "🧬 Aging Wiki"
GRAPH_SOURCE = "github:quartz-community/graph"
PRIVATE_EXCLUDES = ("protocols", "protocols-template")

LOCAL_GRAPH = {
    "depth": 1, "scale": 1.2, "repelForce": 0.3, "centerForce": 0.5,
    "linkDistance": 25, "fontSize": 0.55, "showTags": False,
}
GLOBAL_GRAPH = {"repelForce": 0.4, "centerForce": 0.3, "showTags": False}


def main():
    if len(sys.argv) != 3:
        sys.exit("usage: quartz-config-patch.py <config.yaml> <baseUrl>")
    path, base_url = sys.argv[1], sys.argv[2]

    with open(path) as fh:
        cfg = yaml.safe_load(fh)

    conf = cfg.setdefault("configuration", {})
    conf["pageTitle"] = PAGE_TITLE
    conf["baseUrl"] = base_url
    ignore = conf.setdefault("ignorePatterns", [])
    for excl in PRIVATE_EXCLUDES:
        if excl not in ignore:
            ignore.append(excl)

    graph_found = False
    for plugin in cfg.get("plugins", []):
        if plugin.get("source") == GRAPH_SOURCE:
            opts = plugin.setdefault("options", {})
            opts["localGraph"] = LOCAL_GRAPH
            opts["globalGraph"] = GLOBAL_GRAPH
            graph_found = True
    if not graph_found:
        print(f"warning: graph plugin ({GRAPH_SOURCE}) not found — skipped", file=sys.stderr)

    with open(path, "w") as fh:
        yaml.safe_dump(cfg, fh, sort_keys=False, allow_unicode=True, default_flow_style=False)

    print(f"patched {path}: pageTitle, baseUrl={base_url}, graph options, ignorePatterns")


if __name__ == "__main__":
    main()
