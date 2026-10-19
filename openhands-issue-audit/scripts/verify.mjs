import { readFileSync } from "node:fs";

const fixture = JSON.parse(readFileSync(new URL("../fixture.json", import.meta.url), "utf8"));
if (fixture.schema !== 1) {
  console.error("ERR SCHEMA_MISMATCH: expected schema 1");
  process.exit(2);
}

const length = fixture.summary.length;
if (length < 20) {
  console.error(`ERR SUMMARY_TOO_SHORT: expected >= 20 characters, observed ${length}`);
  process.exit(2);
}

console.log("Synthetic issue audit passed.");
