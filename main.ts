// router-confesses: a home Wi-Fi router's one-line excuse for dying at a movie's climax.
// Writes the line to /output/entry.txt and prints it to stdout. Deterministic: no
// randomness, no network, no environment input — the same line on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "After six years blinking behind the couch, unnoticed and unthanked, I decided tonight I would be the plot twist.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
