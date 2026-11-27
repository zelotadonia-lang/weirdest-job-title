// Weirdest Job Title entry for make.fun.
// Writes one job title (max 60 chars) to /output/entry.txt, nothing else.
// Title: "Penguin Divorce Mediator, Antarctica" (38 chars) — tournament winner,
// batch 2 of the candidate tournament: a penguin, famously mate-for-life,
// mediating divorces in Antarctica. Real-sounding job, one specific twist.
import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Penguin Divorce Mediator, Antarctica";

// The gate refuses anything outside 1–60 chars, so fail loudly instead
// of writing an entry the scorer would list as invalid.
if (TITLE.length < 1 || TITLE.length > 60 || !TITLE.trim()) {
  throw new Error(`title must be 1-60 chars, got ${TITLE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");
