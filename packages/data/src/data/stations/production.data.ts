import { WorkStation } from "../@types/Workstation.types";

const productionList: Array<Omit<WorkStation, "group" | "id" | "type">> = [
  {
    name: "Charcoal Kiln",
    set: "structures",
    nearby: "workbench",
    materials: {
      stone: 20,
      "surtling core": 5,
    },
  },
  {
    name: "Fermenter",
    set: "structures",
    nearby: "workbench",
    materials: {
      "fine wood": 30,
      bronze: 5,
      resin: 10,
    },
  },
  {
    name: "Beehive",
    set: "structures",
    nearby: "workbench",
    materials: {
      wood: 10,
      "queen bee": 1,
    },
  },
  {
    name: "Smelter",
    set: "structures",
    nearby: "workbench",
    materials: {
      stone: 20,
      "surtling core": 5,
    },
  },
  {
    name: "Blast Furnace",
    set: "structures",
    nearby: "Artisan Table",
    materials: {
      stone: 20,
      "surtling core": 5,
      iron: 10,
      "fine wood": 20,
    },
  },
  {
    name: "Windmill",
    set: "structures",
    nearby: "Artisan Table",
    materials: {
      stone: 20,
      wood: 30,
      "iron nails": 30,
    },
  },
  {
    name: "Spinning Wheel",
    set: "structures",
    nearby: "Artisan Table",
    materials: {
      "fine wood": 20,
      "iron nails": 10,
      "leather scraps": 5,
    },
  },
  {
    name: "Obliterator",
    set: "structures",
    nearby: "forge",
    materials: {
      iron: 8,
      copper: 4,
      "thunder stone": 1,
    },
  },
];

export const production: Array<Omit<WorkStation, "id">> = productionList.map(
  (building) => ({
    ...building,
    group: "crafting",
    type: "production",
  })
);
