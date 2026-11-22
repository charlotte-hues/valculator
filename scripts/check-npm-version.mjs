import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const pkg = JSON.parse(
  readFileSync(new URL("../packages/interface/package.json", import.meta.url)),
);
const spec = `${pkg.name}@${pkg.version}`;

let published = "";
try {
  published = execFileSync("npm", ["view", spec, "version"], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
} catch (error) {
  const stderr = `${error.stderr?.toString() ?? ""}\n${error.message}`;
  if (stderr.includes("E404") || stderr.includes("404")) {
    console.log(`${spec} is not on npm yet.`);
    process.exit(0);
  }
  console.error(stderr);
  process.exit(1);
}

if (published === pkg.version) {
  console.error(
    `${spec} is already on npm. Bump the version in packages/interface/package.json before releasing.`,
  );
  process.exit(1);
}

console.log(`${spec} is not on npm yet.`);
