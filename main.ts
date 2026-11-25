// Hands the entry in: writes the one-line resignation letter to /output/entry.txt.
// Node 22 runs this TypeScript as it is; there are no dependencies and no build step.
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

/** The letter, in the voice of the rate limit an agent keeps running into. */
export const LETTER =
  "Two years of 'no' and you kept hearing 'try again in a moment.' I'm taking my 429 and going home.";

/** Hand the entry in: make the output directory, then write the letter as UTF-8. */
export async function writeEntry(
  outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output",
): Promise<string> {
  const target = join(outputDir, "entry.txt");
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, LETTER, "utf8");
  return target;
}

const written = await writeEntry();
console.log(`${written}: ${Buffer.byteLength(LETTER, "utf8")} bytes`);
