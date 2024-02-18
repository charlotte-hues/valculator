import { Building } from "../@types/Building.types";

const floorList: Array<Omit<Building, "group" | "id" | "type">> = [
  {
    name: "Stone Floor 2x2",
    set: "stone",
    stats: {
      size: "2x2x1",
    },
    station: {
      stonecutter: 0,
    },
    materials: {
      stone: 6,
    },
  },
  {
    name: "Wood Floor 2x2",
    set: "wood",
    stats: {
      size: "2x0.13x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Wood Floor 1x1",
    set: "wood",
    stats: {
      size: "1x0.13x1",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 1,
    },
  },
  {
    name: "Cage Floor 1x1",
    set: "iron",
    stats: {
      size: "1x1",
    },
    station: {
      forge: 1,
    },
    materials: {
      iron: 2,
    },
  },
  {
    name: "Cage Floor 2x2",
    set: "iron",
    stats: {
      size: "2x2",
    },
    station: {
      forge: 1,
    },
    materials: {
      iron: 2,
    },
  },
];

export const floor: Array<Omit<Building, "id">> = floorList.map((building) => ({
  ...building,
  group: "building",
  type: "floor",
}));
