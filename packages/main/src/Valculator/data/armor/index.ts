import { Armor } from "../@types/Armor.types";
import { cape } from "./capes.data";
import { chest } from "./chest.data";
import { helmets } from "./helmets.data";
import { legs } from "./leg.data";

const armorList: Array<Omit<Armor, "group" | "id">> = [
  ...cape,
  ...chest,
  ...helmets,
  ...legs,
];

export const armorData: Array<Omit<Armor, "id">> = armorList.map((item) => ({
  ...item,
  group: "armor",
}));
