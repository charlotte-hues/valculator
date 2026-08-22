#!/usr/bin/env node
/**
 * Fail when a PR changes published output without a matching changeset.
 *
 * @valculator/data, @valculator/context, and @valculator/images are private and
 * bundled into @valculator/interface, so those source changes require an
 * interface changeset. @valculator/theme is public and also bundled into
 * interface, so theme source changes require both packages.
 */

import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const INTERFACE = "@valculator/interface";
const THEME = "@valculator/theme";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CHANGESET_DIR = join(ROOT, ".changeset");
const RELEASE_PR_BRANCH = "changeset-release/main";

const IGNORED_PATH_PREFIXES = [
  ".github/",
  ".changeset/",
  ".yarn/",
  "scripts/",
  "packages/cdk/",
];

const IGNORED_PATH_SUBSTRINGS = [
  "/preview/",
  "/__tests__/",
  "/__mocks__/",
  "/test/",
  "/tests/",
];

const IGNORED_BASENAMES = new Set([
  ".eslintrc.cjs",
  ".eslintrc.js",
  ".gitignore",
  "index.html",
  "license",
  "license.md",
  "readme.md",
  "changelog.md",
  "validate.ts",
]);

const IGNORED_EXTENSIONS = new Set([".md", ".gif", ".png", ".jpg", ".jpeg", ".webp", ".svg"]);

const PACKAGE_OWNERS = [
  { prefix: "packages/theme/", packages: [THEME, INTERFACE] },
  { prefix: "packages/interface/", packages: [INTERFACE] },
  { prefix: "packages/data/", packages: [INTERFACE] },
  { prefix: "packages/context/", packages: [INTERFACE] },
  { prefix: "packages/images/", packages: [INTERFACE] },
];

export function shouldIgnorePath(file) {
  const normalized = file.replaceAll("\\", "/");
  if (IGNORED_PATH_PREFIXES.some((prefix) => normalized === prefix.slice(0, -1) || normalized.startsWith(prefix))) {
    return true;
  }
  if (IGNORED_PATH_SUBSTRINGS.some((part) => normalized.includes(part))) {
    return true;
  }
  const basename = normalized.split("/").pop()?.toLowerCase() ?? "";
  if (IGNORED_BASENAMES.has(basename)) {
    return true;
  }
  if (/\.(test|spec)\.[^.]+$/.test(basename)) {
    return true;
  }
  const dot = basename.lastIndexOf(".");
  if (dot !== -1 && IGNORED_EXTENSIONS.has(basename.slice(dot))) {
    return true;
  }
  return false;
}

export function publishedPackagesForFiles(files) {
  const packages = new Set();
  const reasons = new Map();

  for (const file of files) {
    const normalized = file.replaceAll("\\", "/");
    if (shouldIgnorePath(normalized)) {
      continue;
    }
    for (const owner of PACKAGE_OWNERS) {
      if (normalized.startsWith(owner.prefix)) {
        for (const pkg of owner.packages) {
          packages.add(pkg);
          if (!reasons.has(pkg)) {
            reasons.set(pkg, []);
          }
          reasons.get(pkg).push(normalized);
        }
        break;
      }
    }
  }

  return { packages, reasons };
}

export function packagesFromChangesetMarkdown(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    return [];
  }
  const packages = [];
  for (const line of match[1].split(/\r?\n/)) {
    const bump = line.match(/^["']([^"']+)["']\s*:\s*(major|minor|patch)\s*$/);
    if (bump) {
      packages.push(bump[1]);
    }
  }
  return packages;
}

export function packagesListedInChangesets(changesetDir = CHANGESET_DIR) {
  const listed = new Set();
  if (!existsSync(changesetDir)) {
    return listed;
  }
  for (const name of readdirSync(changesetDir)) {
    if (!name.endsWith(".md") || name.toLowerCase() === "readme.md") {
      continue;
    }
    const markdown = readFileSync(join(changesetDir, name), "utf8");
    for (const pkg of packagesFromChangesetMarkdown(markdown)) {
      listed.add(pkg);
    }
  }
  return listed;
}

function gitLines(args) {
  try {
    const stdout = execFileSync("git", args, {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    return stdout
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  } catch {
    return [];
  }
}

function changedFiles(base) {
  const files = new Set(gitLines(["diff", "--name-only", `${base}...HEAD`]));
  if (process.env.CI !== "true") {
    for (const file of gitLines(["diff", "--name-only"])) {
      files.add(file);
    }
    for (const file of gitLines(["diff", "--name-only", "--cached"])) {
      files.add(file);
    }
    for (const file of gitLines(["ls-files", "--others", "--exclude-standard"])) {
      files.add(file);
    }
  }
  return [...files];
}

function exampleFor(pkg) {
  if (pkg === INTERFACE) {
    return `---
"${INTERFACE}": patch
---

Describe the user-facing change. Data, context, and images updates should usually be a patch of interface.
`;
  }
  return `---
"${THEME}": patch
"${INTERFACE}": patch
---

Theme is published on its own and bundled into interface, so bump both.
`;
}

export function missingPublishedPackages(affected, listed) {
  return [...affected].filter((pkg) => !listed.has(pkg)).sort();
}

function runSelfTest() {
  const cases = [
    {
      name: "docs and workflows do not require a changeset",
      files: [".github/workflows/ci.yml", "README.md", "packages/data/CHANGELOG.md"],
      expected: [],
    },
    {
      name: "data source requires interface",
      files: ["packages/data/src/data/weapons/fists.data.ts"],
      expected: [INTERFACE],
    },
    {
      name: "data validation script does not require a changeset",
      files: ["packages/data/src/validate.ts"],
      expected: [],
    },
    {
      name: "interface preview does not require a changeset",
      files: ["packages/interface/preview/index.tsx"],
      expected: [],
    },
    {
      name: "theme source requires theme and interface",
      files: ["packages/theme/src/main.ts"],
      expected: [INTERFACE, THEME],
    },
    {
      name: "cdk does not require a changeset",
      files: ["packages/cdk/lib/stack.ts"],
      expected: [],
    },
  ];

  let failed = false;
  for (const testCase of cases) {
    const { packages } = publishedPackagesForFiles(testCase.files);
    const actual = [...packages].sort().join(",");
    const expected = [...testCase.expected].sort().join(",");
    if (actual !== expected) {
      failed = true;
      console.error(`FAIL ${testCase.name}\n  expected: ${expected || "(none)"}\n  actual:   ${actual || "(none)"}`);
    }
  }

  const parsed = packagesFromChangesetMarkdown(
    `---
"${INTERFACE}": patch
---

Fix Fenris crafting materials
`
  );
  if (parsed.join(",") !== INTERFACE) {
    failed = true;
    console.error("FAIL changeset frontmatter parse");
  }

  if (failed) {
    process.exit(1);
  }
  console.log("changeset check self-test passed");
}

function main() {
  if (process.argv.includes("--self-test")) {
    runSelfTest();
    return;
  }

  const headRef = process.env.GITHUB_HEAD_REF ?? "";
  if (headRef === RELEASE_PR_BRANCH) {
    console.log(`Skipping changeset check on ${RELEASE_PR_BRANCH}`);
    return;
  }

  const base = process.env.CHANGESET_CHECK_BASE ?? "origin/main";
  const files = changedFiles(base);
  const { packages, reasons } = publishedPackagesForFiles(files);
  const listed = packagesListedInChangesets();
  const missing = missingPublishedPackages(packages, listed);

  if (missing.length === 0) {
    if (packages.size === 0) {
      console.log("No published-package source changes detected; changeset not required.");
    } else {
      console.log(
        `Changeset covers published packages: ${[...packages].sort().join(", ")}`
      );
    }
    return;
  }

  const lines = [
    "This PR changes published package output but is missing a changeset.",
    "",
    "Private @valculator/data (and context/images) are bundled into @valculator/interface.",
    "Do not publish those private packages; add a changeset for the public package instead.",
    "",
    "Missing:",
  ];
  for (const pkg of missing) {
    lines.push(`  - ${pkg}`);
    for (const file of reasons.get(pkg) ?? []) {
      lines.push(`      ${file}`);
    }
  }
  lines.push("", "Create one with: yarn changeset", "", "Example:");
  for (const pkg of missing) {
    lines.push(exampleFor(pkg));
  }
  console.error(lines.join("\n"));
  process.exit(1);
}

const isDirectRun = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isDirectRun) {
  main();
}
