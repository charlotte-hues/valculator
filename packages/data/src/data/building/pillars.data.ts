import { Building } from "../@types/Building.types";

const pillarsList: Array<Omit<Building, "group" | "id" | "type">> = [
  {
    name: "Stone Pillar",
    set: "stone",
    stats: {
      size: "1x1x2",
    },
    station: {
      stonecutter: 0,
    },
    materials: {
      stone: 5,
    },
  },
  {
    name: "Black Marble Column, Small",
    set: "black marble",
    stats: {
      size: "1x1",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      "black marble": 2,
    },
  },
  {
    name: "Black Marble Column, Wide",
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
    name: "Grausten Small Pillar",
    set: "grausten",
    stats: {
      size: "0x0",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      grausten: 1,
    },
  },
  {
    name: "Grausten Medium Pillar",
    set: "grausten",
    stats: {
      size: "1x1",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      grausten: 3,
    },
  },
  {
    name: "Grausten Tapered Pillar",
    set: "grausten",
    stats: {
      size: "1x1",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      grausten: 5,
    },
  },
  {
    name: "Flametal Pillar",
    set: "flametal",
    stats: {
      size: "0x0",
    },
    station: {
      "black forge": 1,
    },
    materials: {
      flametal: 2,
    },
  },
  {
    name: "Grausten Tapered Pillar (Inverted)",
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

export const pillars: Array<Omit<Building, "id">> = pillarsList.map(
  (building) => ({
    ...building,
    group: "building",
    type: "pillars",
  })
);
