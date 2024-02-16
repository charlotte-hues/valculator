import { Furniture } from "../@types/Furniture.types";

const storageList: Array<Omit<Furniture, "group" | "id" | "type">> = [
  {
    name: "Chest",
    set: "wood",
    stats: {
      storage: 10,
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 10,
    },
  },
  {
    name: "Reinforced Chest",
    set: "iron",
    stats: {
      storage: 24,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 10,
      iron: 2,
    },
  },
  {
    name: "Personal Chest",
    set: "iron",
    stats: {
      storage: 6,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 10,
      iron: 8,
    },
  },
  {
    name: "Blackmetal Chest",
    set: "black metal",
    stats: {
      storage: 32,
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 10,
      tar: 2,
      "black metal": 6,
    },
  },
];

export const storage: Array<Omit<Furniture, "id">> = storageList.map(
  (building) => ({
    ...building,
    group: "furniture",
    type: "storage",
  })
);
