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
  {
    name: "Black Marble Stair",
    set: "black marble",
    stats: {
      size: "2x2",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      "black marble": 8,
    },
  },
  {
    name: "Dvergr Spiral Left Stair",
    set: "dvergr",
    stats: {
      size: "2x2",
    },
    station: {
      "black forge": 1,
    },
    materials: {
      "yggdrasil wood": 7,
      copper: 7,
    },
  },
  {
    name: "Dvergr Spiral Right Stair",
    set: "dvergr",
    stats: {
      size: "2x2",
    },
    station: {
      "black forge": 1,
    },
    materials: {
      "yggdrasil wood": 7,
      copper: 7,
    },
  },
  {
    name: "Ashwood Stair",
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
    name: "Grausten Stairs",
    set: "grausten",
    stats: {
      size: "2x2",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      grausten: 8,
    },
  },
  {
    name: "Grausten Steep Stairs",
    set: "grausten",
    stats: {
      size: "1x2",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      grausten: 5,
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
