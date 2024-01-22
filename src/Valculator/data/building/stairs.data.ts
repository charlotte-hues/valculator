import { Building } from "../@types/Building.types";

const stairsList: Array<Omit<Building, "group" | "id" | "type">> = [
  {
    name: "Stone Stair",
    set: "stone",
    stats: {
      size: "2x2x1",
    },
    station: {
      stonecutter: 0,
    },
    materials: {
      stone: 8,
    },
  },
  {
    name: "Wood Ladder",
    set: "wood",
    stats: {
      size: "1x2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Wood Stair",
    set: "wood",
    stats: {
      size: "2x2x1",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
];

export const stairs: Array<Omit<Building, "id">> = stairsList.map(
  (building) => ({
    ...building,
    group: "building",
    type: "stairs",
  })
);
