import { Misc } from "../@types/Misc.types";

const teleportList: Array<Omit<Misc, "group" | "id" | "type">> = [
  {
    name: "Portal",
    set: "structures",
    station: {
      workbench: 1,
    },
    materials: {
      "greydwarf eye": 10,
      "fine wood": 20,
      "surtling core": 2,
    },
  },
];

export const teleport: Array<Omit<Misc, "id">> = teleportList.map(
  (building) => ({
    ...building,
    group: "misc",
    type: "teleport",
  })
);
