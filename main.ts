import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One-line joke about working beside AI coding agents.
// The punchline: the crash it raced to diagnose was its own shipped feature.
const joke =
  "My agent diagnosed the production crash in ninety seconds. It was a feature it shipped that morning.";

// The judge reads /output/entry.txt. The env override is only for local checks;
// at grade time the sandbox provides a writable /output directory.
const out = `${process.env.MAKEFUN_OUTPUT_DIR ?? "/output"}/entry.txt`;
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, joke, "utf8");
