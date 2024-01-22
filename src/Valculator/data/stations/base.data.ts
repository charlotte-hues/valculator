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
  {
    name: "Hammer",
    set: "wood",
    level: 1,
    materials: {
      wood: 3,
      stone: 2,
    },
  },
  {
    name: "Hammer",
    set: "wood",
    level: 2,
    materials: {
      wood: 4,
      stone: 3,
    },
  },
  {
    name: "Hammer",
    set: "wood",
    level: 3,
    materials: {
      wood: 6,
      stone: 5,
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
