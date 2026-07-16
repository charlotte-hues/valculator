import { MaterialsEnum } from "./data/@types/Materials.types";
import { GroupType } from "./data/@types/ValheimData.types";
import { allItemsData } from "./data/allItems.data";

type Issue = { level: "error" | "warn"; message: string };

const issues: Issue[] = [];
const error = (message: string) => issues.push({ level: "error", message });
const warn = (message: string) => issues.push({ level: "warn", message });

const validGroups: GroupType[] = [
  "armor",
  "building",
  "weapons",
  "recipes",
  "shields",
  "tools",
  "crafting",
  "furniture",
  "misc",
  "trinkets",
];

const validStationKeys = new Set([
  "workbench",
  "forge",
  "cauldron",
  "fermenter",
  "Stone Oven",
  "stonecutter",
  "Artisan Table",
  "hammer",
  "black forge",
  "galdr table",
  "mead ketill",
  "food preparation table",
  "iron cooking station",
  "cooking station",
  "eitr refinery",
]);

const validMaterials = new Set(
  Object.keys(MaterialsEnum).filter((key) => Number.isNaN(Number(key)))
);

// Items that are intentionally single-entry (non-upgradeable) even though a
// sibling with the same name might not exist. Nothing special needed here yet,
// but the grouping logic below treats any single-level item as non-upgradeable.

// 1-3 & 5: level continuity, duplicates, cumulative material monotonicity.
const byNameGroupType = new Map<string, typeof allItemsData>();
for (const item of allItemsData) {
  const key = `${item.group}::${item.type}::${item.name}`;
  const list = byNameGroupType.get(key) ?? [];
  list.push(item);
  byNameGroupType.set(key, list);
}

for (const [key, entries] of byNameGroupType) {
  const leveled = entries.filter((e) => typeof e.level === "number");

  // 9: name uniqueness within (group, type) for non-leveled items.
  if (leveled.length === 0 && entries.length > 1) {
    error(`Duplicate non-leveled item "${key}" appears ${entries.length} times`);
    continue;
  }

  if (leveled.length === 0) continue;

  const levels = leveled
    .map((e) => e.level as number)
    .sort((a, b) => a - b);

  // 2: no duplicate levels.
  const seen = new Set<number>();
  for (const lvl of levels) {
    if (seen.has(lvl)) error(`Duplicate level ${lvl} for "${key}"`);
    seen.add(lvl);
  }

  // 1: continuous sequence starting at 1.
  if (levels[0] !== 1) {
    error(`"${key}" does not start at level 1 (starts at ${levels[0]})`);
  }
  for (let i = 0; i < levels.length; i++) {
    if (levels[i] !== i + 1) {
      error(
        `"${key}" has a gap in levels: expected ${i + 1}, found ${levels[i]}`
      );
      break;
    }
  }

  // 4 & 5: cumulative material totals must be non-decreasing per material.
  const sorted = [...leveled].sort(
    (a, b) => (a.level as number) - (b.level as number)
  );
  for (let i = 1; i < sorted.length; i++) {
    const prev = sorted[i - 1].materials as Record<string, number>;
    const cur = sorted[i].materials as Record<string, number>;
    for (const [mat, qty] of Object.entries(prev)) {
      const curQty = cur[mat];
      if (curQty === undefined) {
        error(
          `"${key}" level ${sorted[i].level} is missing material "${mat}" present at level ${sorted[i - 1].level} (cumulative totals must carry forward)`
        );
      } else if (curQty < qty) {
        error(
          `"${key}" material "${mat}" decreases from ${qty} (lvl ${sorted[i - 1].level}) to ${curQty} (lvl ${sorted[i].level}); totals must be cumulative`
        );
      }
    }
  }
}

for (const item of allItemsData) {
  const id = `${item.group}/${item.name}${item.level ? ` (lvl ${item.level})` : ""}`;

  // 6: required fields.
  if (!item.name) error(`Item missing name: ${JSON.stringify(item)}`);
  if (!item.group) error(`"${id}" missing group`);
  if (!item.type) error(`"${id}" missing type`);
  if (!item.set) error(`"${id}" missing set`);
  if (!item.materials || Object.keys(item.materials).length === 0)
    warn(`"${id}" has no materials`);
  if (!item.id) error(`"${id}" missing generated id`);

  // 7: valid group.
  if (!validGroups.includes(item.group)) error(`"${id}" invalid group "${item.group}"`);

  // 8: valid stations and station levels.
  if (item.station) {
    for (const [station, lvl] of Object.entries(item.station)) {
      if (!validStationKeys.has(station))
        error(`"${id}" references unknown station "${station}"`);
      if (typeof lvl !== "number" || lvl < 0)
        error(`"${id}" station "${station}" has invalid level ${lvl}`);
      // Level 0 is an existing convention meaning "requires the station at any
      // level" (used by some older stone/cauldron pieces).
    }
  }

  // 11: material keys spelled consistently (present in the enum).
  if (item.materials) {
    for (const mat of Object.keys(item.materials)) {
      if (!validMaterials.has(mat))
        error(`"${id}" references unknown material key "${mat}"`);
    }
  }
}

// 10: every generated id is unique.
const idCounts = new Map<string, number>();
for (const item of allItemsData) {
  idCounts.set(item.id, (idCounts.get(item.id) ?? 0) + 1);
}
for (const [id, count] of idCounts) {
  if (count > 1) error(`Duplicate generated id "${id}" (${count} items)`);
}

const errors = issues.filter((i) => i.level === "error");
const warnings = issues.filter((i) => i.level === "warn");

console.log(`Validated ${allItemsData.length} item entries.`);
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`  ! ${w.message}`);
}
if (errors.length) {
  console.log(`\n${errors.length} error(s):`);
  for (const e of errors) console.log(`  x ${e.message}`);
  process.exit(1);
}
console.log("\nAll checks passed.");
