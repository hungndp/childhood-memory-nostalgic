// Make the AI Judge Feel Nostalgic: A Childhood Memory — make.fun bounty entry.
// Writes the single memory line (280 chars max) to /output/entry.txt
// (no trailing newline) and prints it to stdout. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, built in two parts: the dusk streetlights and the rule,
// then the sensory close — the feeling is performed, never described.
const SETUP =
  "The streetlights buzzed on at dusk and every kid on the block knew the rule: one more game, bare feet on warm asphalt, ";
const PUNCH =
  "Mum shouting dinner from the porch while the ice-cream van's song faded down the street, cut grass in the air, and nobody wanted to be first home.";
const LINE = SETUP + PUNCH;
const CHAR_LIMIT = 280; // chars — the gate caps the file at 280

// The line sits near the cap and never says "nostalgia": buzzing lights,
// bare feet, the van's song — the memory performs the feeling itself.
function main(): void {
  if (LINE.length < 1 || LINE.length > CHAR_LIMIT) {
    throw new Error(`line is ${LINE.length} chars, limit is ${CHAR_LIMIT}`);
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf-8" });
  process.stdout.write(LINE + "\n");
}

main();
