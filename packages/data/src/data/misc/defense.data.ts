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
  {
    name: "Ballista",
    set: "structures",
    station: {
      workbench: 1,
    },
    materials: {
      "black metal": 20,
      "mechanical spring": 3,
    },
  },
  {
    name: "Trap",
    set: "structures",
    station: {
      workbench: 1,
    },
    materials: {
      "black metal": 5,
      "bronze nails": 10,
      "mechanical spring": 1,
    },
  },
];

export const defense: Array<Omit<Misc, "id">> = defenseList.map((building) => ({
  ...building,
  group: "misc",
  type: "defense",
}));
