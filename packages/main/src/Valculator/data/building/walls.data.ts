import { Building } from "../@types/Building.types";

const wallsList: Array<Omit<Building, "group" | "id" | "type">> = [
  {
    name: "Stone Wall 1x1",
    set: "stone",
    stats: {
      size: "1x1",
    },
    station: {
      stonecutter: 0,
    },
    materials: {
      stone: 3,
    },
  },
  {
    name: "Stone Wall 2x1",
    set: "stone",
    stats: {
      size: "2x1",
    },
    station: {
      stonecutter: 0,
    },
    materials: {
      stone: 4,
    },
  },
  {
    name: "Stone Wall 4x2",
    set: "stone",
    stats: {
      size: "4x2",
    },
    station: {
      stonecutter: 0,
    },
    materials: {
      stone: 6,
    },
  },

  {
    name: "Wood Shutter",
    set: "bronze",
    stats: {
      size: "1x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 4,
      "bronze nails": 2,
    },
  },
  {
    name: "Wood Wall",
    set: "wood",
    stats: {
      size: "2x2x0.3",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Wood Wall Half",
    set: "wood",
    stats: {
      size: "2x1x0.3",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 1,
    },
  },
  {
    name: "Wood Wall 26°",
    set: "wood",
    stats: {
      size: "2x1",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Wood Wall 45°",
    set: "wood",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Crystal Wall",
    set: "crystal",
    stats: {
      size: "1x1x5",
    },
    station: {
      workbench: 1,
    },
    materials: {
      crystal: 2,
    },
  },
  {
    name: "Cage Wall 1x1",
    set: "iron",
    stats: {
      size: "1x1",
    },
    station: {
      forge: 1,
    },
    materials: {
      iron: 1,
    },
  },
  {
    name: "Cage Wall 2x2",
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
  {
    name: "Carved Darkwood Divider",
    set: "dark wood",
    stats: {
      size: "2x1",
    },
    station: {
      forge: 1,
    },
    materials: {
      "fine wood": 2,
      tar: 1,
    },
  },
];

export const walls: Array<Omit<Building, "id">> = wallsList.map((building) => ({
  ...building,
  group: "building",
  type: "walls",
}));
