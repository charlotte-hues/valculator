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
  {
    name: "Black Marble Plinth",
    set: "black marble",
    stats: {
      size: "2x2",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      "black marble": 5,
    },
  },
  {
    name: "Black Marble Plinth, Corner",
    set: "black marble",
    stats: {
      size: "2x2",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      "black marble": 6,
    },
  },
  {
    name: "Black Marble Floor",
    set: "black marble",
    stats: {
      size: "2x2",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      "black marble": 4,
    },
  },
  {
    name: "Black Marble Floor, Triangle",
    set: "black marble",
    stats: {
      size: "2x1",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      "black marble": 3,
    },
  },
  {
    name: "Ashwood Floor 2x2",
    set: "ash",
    stats: {
      size: "2x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      ashwood: 4,
    },
  },
  {
    name: "Ashwood Floor 1x1",
    set: "ash",
    stats: {
      size: "1x1",
    },
    station: {
      workbench: 1,
    },
    materials: {
      ashwood: 2,
    },
  },
  {
    name: "Ashwood Decorative Floor",
    set: "ash",
    stats: {
      size: "2x0",
    },
    station: {
      workbench: 1,
    },
    materials: {
      ashwood: 4,
    },
  },
  {
    name: "Grausten Floor 1x1",
    set: "grausten",
    stats: {
      size: "1x1",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      grausten: 2,
    },
  },
  {
    name: "Grausten Floor 2x2",
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
    name: "Grausten Floor 4x4",
    set: "grausten",
    stats: {
      size: "4x4",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      grausten: 8,
    },
  },
];

export const floor: Array<Omit<Building, "id">> = floorList.map((building) => ({
  ...building,
  group: "building",
  type: "floor",
}));
