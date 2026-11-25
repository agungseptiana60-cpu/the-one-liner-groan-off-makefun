// Entry program for the make.fun bounty "The One-Liner Groan-Off"
// (u-alfasurya91-the-one-liner-groan-off-5a1febd5).
//
// The whole entry is a single original dad joke, one line, at most
// 140 characters. The grader runs this program and reads the line it
// writes to entry.txt inside the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for the /output mount:
//   MAKEFUN_OUTPUT_DIR=out node main.ts
//
// First draft of the line: a dad renames the home Wi-Fi after himself,
// so asking for the password turns into a compliment he has to hear
// from every guest. The setup is the rename, the punchline is the
// compliment nobody can avoid saying.
//
// Revision: the draft said "say Dad is hot", which reads like a polite
// report. "Admit Dad's hot" is tighter and funnier, because admitting
// it sounds like a confession, and dropping the comma after the quoted
// network name keeps the whole line moving in one breath. The quoted
// 'Dad's Hotspot' also makes it clear the name is the joke itself,
// not just a description of it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line itself: the rename is the setup, and the forced confession
// ("admit Dad's hot") is the punchline that lands in the same breath.
export const ENTRY_LINE =
  "I renamed our Wi-Fi 'Dad's Hotspot' so now every guest has to admit Dad's hot before they can get online.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_LINE + "\n", "utf8");

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
