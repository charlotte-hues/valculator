import { Building } from "../@types/Building.types";

const beamsList: Array<Omit<Building, "group" | "id" | "type">> = [
  {
    name: "Wood Beam 1m",
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
    name: "Wood Beam 26°",
    set: "wood",
    stats: {
      size: "1x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Wood Beam 2m",
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
    name: "Wood Beam 45°",
    set: "wood",
    stats: {
      size: "1x2",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Wood Iron Beam",
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
  {
    name: "Log Beam 2m",
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
    name: "Log Beam 4m",
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
];

export const beams: Array<Omit<Building, "id">> = beamsList.map((building) => ({
  ...building,
  group: "building",
  type: "beams",
}));
