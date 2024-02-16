import { Building } from "../@types/Building.types";

const doorsList: Array<Omit<Building, "group" | "id" | "type">> = [
  {
    name: "Wood Door",
    set: "wood",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 4,
    },
  },
  {
    name: "Wood Gate",
    set: "wood",
    stats: {
      size: "3x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 12,
    },
  },
  {
    name: "Iron Gate",
    set: "iron",
    stats: {
      size: "2x3",
    },
    station: {
      forge: 1,
    },
    materials: {
      iron: 4,
    },
  },
];

export const doors: Array<Omit<Building, "id">> = doorsList.map((building) => ({
  ...building,
  group: "building",
  type: "doors",
}));
