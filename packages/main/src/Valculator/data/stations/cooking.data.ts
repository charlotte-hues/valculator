import { WorkStation } from "../@types/Workstation.types";

const cookingList: Array<Omit<WorkStation, "group" | "id" | "type">> = [
  {
    name: "Cooking Station",
    set: "structures",
    nearby: "workbench",
    materials: {
      wood: 2,
    },
  },
  {
    name: "Stone Oven",
    set: "structures",
    materials: {
      iron: 15,
      stone: 20,
      "surtling core": 4,
    },
  },
  {
    name: "Cauldron",
    set: "structures",
    level: 1,
    nearby: "workbench",
    materials: {
      tin: 10,
    },
  },

  {
    name: "Cauldron",
    set: "structures",
    level: 2,
    nearby: "workbench",
    materials: {
      tin: 10,
      dandelion: 3,
      carrot: 2,
      mushroom: 5,
      thistle: 3,
      turnip: 3,
    },
  },
  {
    name: "Cauldron",
    set: "structures",
    level: 3,
    nearby: "workbench",
    materials: {
      tin: 10,
      dandelion: 3,
      carrot: 2,
      mushroom: 5,
      thistle: 3,
      turnip: 3,
      "ancient bark": 2,
      "core wood": 4,
      "fine wood": 4,
      silver: 2,
    },
  },
  {
    name: "Cauldron",
    set: "structures",
    level: 4,
    nearby: "workbench",
    materials: {
      tin: 10,
      dandelion: 3,
      carrot: 2,
      mushroom: 5,
      thistle: 3,
      turnip: 3,
      "ancient bark": 2,
      "core wood": 4,
      "fine wood": 14,
      silver: 2,
      "black metal": 5,
      copper: 5,
      iron: 5,
    },
  },
];

export const cooking: Array<Omit<WorkStation, "id">> = cookingList.map(
  (building) => ({
    ...building,
    group: "crafting",
    type: "cooking",
  })
);
