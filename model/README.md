# model/ — canonical aging-simulator engine

The canonical parameter model is the `json` block in [`frameworks/causal-graph-parameters.md`](../frameworks/causal-graph-parameters.md). `build-params.mjs` validates and atomically extracts it to `params.json`; `engine.mjs`, the tests, CLI, and standalone app consume that generated model. `build-app.mjs` injects the canonical engine and parameters into [`viz/aging-simulator.html`](../viz/aging-simulator.html), so never edit the generated block by hand.

Run `node model/build-params.mjs`, `node model/test.mjs`, and `node model/build-app.mjs` after model changes. Browser checks are reproducible from a clean checkout with `npm ci --prefix model` followed by `CHROME_PATH=/usr/bin/google-chrome-stable npm --prefix model run test:e2e`.
