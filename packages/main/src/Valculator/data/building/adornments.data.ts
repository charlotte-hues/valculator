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
];

export const adornments: Array<Omit<Building, "id">> = adornmentsList.map(
  (building) => ({
    ...building,
    group: "building",
    type: "adornments",
  })
);
