import { WorkStation } from "../@types/Workstation.types";

const baseList: Array<Omit<WorkStation, "group" | "id" | "type">> = [
  {
    name: "Artisan Table",
    set: "structures",
    nearby: "workbench",
    materials: {
      "dragon tear": 2,
      wood: 10,
    },
  },
  {
    name: "Stonecutter",
    set: "structures",
    nearby: "workbench",
    materials: {
      wood: 10,
      iron: 2,
      stone: 4,
    },
  },
];

export const base: Array<Omit<WorkStation, "id">> = baseList.map(
  (building) => ({
    ...building,
    group: "crafting",
    type: "base",
  })
);
