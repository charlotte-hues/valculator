import { Weapon } from "../@types/Weapon.types";
import { arrows } from "./arrows.data";
import { axes } from "./axes.data";
import { bolts } from "./bolts.data";
import { bows } from "./bows.data";
import { clubs } from "./clubs.data";
import { crossbows } from "./crossbows.data";
import { fists } from "./fists.data";
import { knives } from "./knives.data";
import { magic } from "./magic.data";
import { polearms } from "./polearms.data";
import { spears } from "./spears.data";
import { swords } from "./swords.data";
import { throwables } from "./throwables.data";

const weaponsList: Array<Omit<Weapon, "group" | "id">> = [
  ...arrows,
  ...axes,
  ...bolts,
  ...bows,
  ...clubs,
  ...crossbows,
  ...fists,
  ...knives,
  ...magic,
  ...polearms,
  ...spears,
  ...swords,
  ...throwables,
];

export const weaponsData: Array<Weapon> = weaponsList.map((item) => ({
  ...item,
  group: "weapons",
  id: `${item.name}${item?.level ?? 0}}`,
}));
