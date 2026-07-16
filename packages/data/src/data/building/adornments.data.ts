import { Building } from "../@types/Building.types";

const adornmentsList: Array<Omit<Building, "group" | "id" | "type">> = [
  {
    name: "Raven Adornment",
    set: "wood",
    stats: {
      size: "3x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 10,
      tar: 1,
    },
  },
  {
    name: "Dragon Adornment",
    set: "wood",
    stats: {
      size: "3x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 10,
    },
  },
  {
    name: "Wolf Adornment",
    set: "wood",
    stats: {
      size: "3x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 10,
      tar: 1,
    },
  },
  {
    name: "Dragon Adornment (Wood)",
    set: "wood",
    stats: {
      size: "4x1",
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 10,
    },
  },
  {
    name: "Black Marble Cornice",
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
    name: "Black Marble Cornice, Corner",
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
    name: "Black Marble Quarter Spire",
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
];

export const adornments: Array<Omit<Building, "id">> = adornmentsList.map(
  (building) => ({
    ...building,
    group: "building",
    type: "adornments",
  })
);
