import { Building } from "../@types/Building.types";

const polesList: Array<Omit<Building, "group" | "id" | "type">> = [
  {
    name: "Wood Pole 1m",
    set: "wood",
    stats: {
      size: "1x1",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 1,
    },
  },
  {
    name: "Wood Pole 2m",
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
    name: "Log Pole 2m",
    set: "core wood",
    stats: {
      size: "2x1",
    },
    station: {
      workbench: 1,
    },
    materials: {
      "core wood": 1,
    },
  },
  {
    name: "Log Pole 4m",
    set: "core wood",
    stats: {
      size: "4x1",
    },
    station: {
      workbench: 1,
    },
    materials: {
      "core wood": 2,
    },
  },
  {
    name: "Darkwood Pole 2m",
    set: "dark wood",
    stats: {
      size: "2x1",
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
    name: "Wood Iron Pole",
    set: "iron",
    stats: {
      size: "1x2x1",
    },
    station: {
      forge: 1,
    },
    materials: {
      wood: 2,
      iron: 1,
    },
  },
];

export const poles: Array<Omit<Building, "id">> = polesList.map((building) => ({
  ...building,
  group: "building",
  type: "poles",
}));
