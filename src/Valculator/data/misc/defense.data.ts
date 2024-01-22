import { Misc } from "../@types/Misc.types";

const defenseList: Array<Omit<Misc, "group" | "id" | "type">> = [
  {
    name: "Ward",
    set: "structures",
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 5,
      "greydwarf eye": 5,
      "surtling core": 1,
    },
  },
];

export const defense: Array<Omit<Misc, "id">> = defenseList.map((building) => ({
  ...building,
  group: "misc",
  type: "defense",
}));
