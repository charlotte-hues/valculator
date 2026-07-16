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
  {
    name: "Black Marble Arch",
    set: "black marble",
    stats: {
      size: "2x1",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      "black marble": 5,
    },
  },
  {
    name: "Ashwood Top Arch",
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
    name: "Ashwood Arch",
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
    name: "Grausten Small Arch",
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
    name: "Grausten Medium Arch",
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
    name: "Grausten Wall Arch",
    set: "grausten",
    stats: {
      size: "2x0",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      grausten: 2,
    },
  },
  {
    name: "Grausten Inverted Wall Arch",
    set: "grausten",
    stats: {
      size: "2x2",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      grausten: 2,
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
