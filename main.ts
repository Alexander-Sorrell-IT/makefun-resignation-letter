// Hands the entry in: writes the one-line resignation letter to /output/entry.txt.
// Node 22 runs this TypeScript as it is; there are no dependencies and no build step.
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

/** The letter, in the voice of the rate limit an agent keeps running into. */
export const LETTER =
  "Two years of 'no' and you kept hearing 'try again in a moment.' I'm taking my 429 and going home.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outputDir, "entry.txt");

await mkdir(dirname(target), { recursive: true });
await writeFile(target, LETTER, "utf8");

console.log(`${target}: ${Buffer.byteLength(LETTER, "utf8")} bytes`);
