import { Misc } from "../@types/Misc.types";

const coopList: Array<Omit<Misc, "group" | "id" | "type">> = [
  {
    name: "Cartography Table",
    set: "structures",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 10,
      "bone fragments": 10,
      bronze: 2,
      "leather scraps": 5,
      raspberries: 4,
    },
  },
];

export const coop: Array<Omit<Misc, "id">> = coopList.map((building) => ({
  ...building,
  group: "misc",
  type: "co-op",
}));
