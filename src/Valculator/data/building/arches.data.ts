import { Building } from "../@types/Building.types";

const archesList: Array<Omit<Building, "group" | "id" | "type">> = [
  {
    name: "Stone Arch",
    set: "stone",
    stats: {
      size: "1x1x2",
    },
    station: {
      stonecutter: 0,
    },
    materials: {
      stone: 4,
    },
  },
  {
    name: "Darkwood Arch",
    set: "dark wood",
    stats: {
      size: "4x1",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
      tar: 1,
    },
  },
];

export const arches: Array<Omit<Building, "id">> = archesList.map(
  (building) => ({
    ...building,
    group: "building",
    type: "arches",
  })
);
