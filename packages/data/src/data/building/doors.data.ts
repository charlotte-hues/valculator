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
  {
    name: "Darkwood Gate",
    set: "dark wood",
    stats: {
      size: "2x0",
    },
    station: {
      forge: 1,
    },
    materials: {
      wood: 16,
      iron: 4,
      tar: 2,
    },
  },
  {
    name: "Hexagonal Gate",
    set: "dvergr",
    stats: {
      size: "4x4",
    },
    station: {
      "black forge": 1,
    },
    materials: {
      "yggdrasil wood": 8,
      copper: 8,
    },
  },
  {
    name: "Ashwood Door",
    set: "ash",
    stats: {
      size: "2x0",
    },
    station: {
      workbench: 1,
    },
    materials: {
      flametal: 1,
      ashwood: 3,
    },
  },
  {
    name: "Flametal Gate",
    set: "flametal",
    stats: {
      size: "3x0",
    },
    station: {
      forge: 1,
    },
    materials: {
      flametal: 16,
    },
  },
];

export const doors: Array<Omit<Building, "id">> = doorsList.map((building) => ({
  ...building,
  group: "building",
  type: "doors",
}));
