import { Weapon } from "../@types/Weapon.types";
import { arrows } from "./arrows.data";
import { axes } from "./axes.data";
import { bows } from "./bows.data";
import { clubs } from "./clubs.data";
import { knives } from "./knives.data";
import { polearms } from "./polearms.data";
import { spears } from "./spears.data";
import { swords } from "./swords.data";
import { fists } from "./fists.data";

const weaponsList: Array<Omit<Weapon, "group" | "id">> = [
  ...arrows,
  ...axes,
  ...bows,
  ...clubs,
  ...fists,
  ...knives,
  ...polearms,
  ...spears,
  ...swords,
];

export const weaponsData: Array<Weapon> = weaponsList.map((item) => ({
  ...item,
  group: "weapons",
  id: `${item.name}${item?.level ?? 0}}`,
}));
