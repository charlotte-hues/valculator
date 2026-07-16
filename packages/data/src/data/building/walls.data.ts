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
  {
    name: "Wood Wall Quarter",
    set: "wood",
    stats: {
      size: "1x0",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 1,
    },
  },
  {
    name: "Wood Wall 26° (Inverted)",
    set: "wood",
    stats: {
      size: "26°",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Wood Wall 45° (Inverted)",
    set: "wood",
    stats: {
      size: "45°",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Dvergr Wall",
    set: "dvergr",
    stats: {
      size: "2x1",
    },
    station: {
      "black forge": 1,
    },
    materials: {
      "yggdrasil wood": 20,
      copper: 5,
    },
  },
  {
    name: "Dvergr Metal Wall",
    set: "dvergr",
    stats: {
      size: "2x0",
    },
    station: {
      "black forge": 1,
    },
    materials: {
      copper: 8,
    },
  },
  {
    name: "Ashwood Wall",
    set: "ash",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      ashwood: 2,
    },
  },
  {
    name: "Ashwood Half Wall",
    set: "ash",
    stats: {
      size: "1x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      ashwood: 1,
    },
  },
  {
    name: "Ashwood Quarter Wall",
    set: "ash",
    stats: {
      size: "1x1",
    },
    station: {
      workbench: 1,
    },
    materials: {
      ashwood: 1,
    },
  },
  {
    name: "Ashwood Decorative Wall",
    set: "ash",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      ashwood: 2,
    },
  },
  {
    name: "Ashwood Decorative Window",
    set: "ash",
    stats: {
      size: "2x1",
    },
    station: {
      workbench: 1,
    },
    materials: {
      ashwood: 2,
    },
  },
  {
    name: "Ashwood Divider",
    set: "ash",
    stats: {
      size: "1x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      ashwood: 2,
    },
  },
  {
    name: "Grausten Wall 1x2",
    set: "grausten",
    stats: {
      size: "1x2",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      grausten: 4,
    },
  },
  {
    name: "Grausten Wall 2x2",
    set: "grausten",
    stats: {
      size: "2x2",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      grausten: 6,
    },
  },
  {
    name: "Grausten Wall 4x2",
    set: "grausten",
    stats: {
      size: "4x2",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      grausten: 12,
    },
  },
  {
    name: "Grausten Window 2x2",
    set: "grausten",
    stats: {
      size: "2x2",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      grausten: 4,
    },
  },
  {
    name: "Grausten Window 4x2",
    set: "grausten",
    stats: {
      size: "4x2",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      grausten: 10,
    },
  },
];

export const walls: Array<Omit<Building, "id">> = wallsList.map((building) => ({
  ...building,
  group: "building",
  type: "walls",
}));
