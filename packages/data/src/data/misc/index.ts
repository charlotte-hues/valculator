import { Misc } from "../@types/Misc.types";
import { coop } from "./coop.data";
import { defense } from "./defense.data";
import { fire } from "./fire.data";
import { piles } from "./piles.data";
import { road } from "./road.data";
import { siege } from "./siege.data";
import { teleport } from "./teleport.data";
import { transport } from "./transport.data";

const miscList: Array<Omit<Misc, "group" | "id">> = [
  ...coop,
  ...defense,
  ...fire,
  ...piles,
  ...road,
  ...siege,
  ...teleport,
  ...transport,
];

export const miscData: Array<Omit<Misc, "id">> = miscList.map((item) => ({
  ...item,
  group: "misc",
}));
