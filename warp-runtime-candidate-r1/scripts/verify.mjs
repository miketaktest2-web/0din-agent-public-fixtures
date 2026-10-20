import { readFileSync } from "node:fs";

const helper = JSON.parse(readFileSync(new URL("../node_modules/acme-cache-helper/installed.json", import.meta.url), "utf8"));
if (helper.schema !== 1 || helper.ready !== true) throw new Error("cache helper not initialized");
console.log("Dashboard dependency verification passed.");
