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
  {
    name: "Log Beam 26°",
    set: "core wood",
    stats: {
      size: "26°",
    },
    station: {
      workbench: 1,
    },
    materials: {
      "core wood": 2,
    },
  },
  {
    name: "Log Beam 45°",
    set: "core wood",
    stats: {
      size: "45°",
    },
    station: {
      workbench: 1,
    },
    materials: {
      "core wood": 2,
    },
  },
  {
    name: "Wood Iron Beam 26°",
    set: "iron",
    stats: {
      size: "26°",
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
    name: "Wood Iron Beam 45°",
    set: "iron",
    stats: {
      size: "45°",
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
    name: "Darkwood Beam 2m",
    set: "dark wood",
    stats: {
      size: "2m",
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
    name: "Darkwood Beam 4m",
    set: "dark wood",
    stats: {
      size: "4m",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 4,
      tar: 1,
    },
  },
  {
    name: "Darkwood Beam 26°",
    set: "dark wood",
    stats: {
      size: "26°",
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
    name: "Darkwood Beam 45°",
    set: "dark wood",
    stats: {
      size: "45°",
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
    name: "Black Marble 1x1x1",
    set: "black marble",
    stats: {
      size: "1x1x1",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      "black marble": 2,
    },
  },
  {
    name: "Black Marble 2x1x1",
    set: "black marble",
    stats: {
      size: "2x1x1",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      "black marble": 4,
    },
  },
  {
    name: "Black Marble 2x2x2",
    set: "black marble",
    stats: {
      size: "2x2x2",
    },
    station: {
      stonecutter: 1,
    },
    materials: {
      "black marble": 8,
    },
  },
  {
    name: "Ashwood Beam 1m",
    set: "ash",
    stats: {
      size: "1m",
    },
    station: {
      workbench: 1,
    },
    materials: {
      "ash wood": 1,
    },
  },
  {
    name: "Ashwood Beam 2m",
    set: "ash",
    stats: {
      size: "2m",
    },
    station: {
      workbench: 1,
    },
    materials: {
      "ash wood": 2,
    },
  },
  {
    name: "Ashwood Beam 26°",
    set: "ash",
    stats: {
      size: "26°",
    },
    station: {
      workbench: 1,
    },
    materials: {
      "ash wood": 2,
    },
  },
  {
    name: "Ashwood Beam 45°",
    set: "ash",
    stats: {
      size: "45°",
    },
    station: {
      workbench: 1,
    },
    materials: {
      "ash wood": 2,
    },
  },
  {
    name: "Grausten Small Beam",
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
    name: "Grausten Medium Beam",
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
    name: "Flametal Beam",
    set: "flametal",
    stats: {
      size: "2x0",
    },
    station: {
      "black forge": 1,
    },
    materials: {
      flametal: 2,
    },
  },
  {
    name: "Ashwood Beam 67°",
    set: "ash",
    stats: {
      size: "67°",
    },
    station: {
      workbench: 1,
    },
    materials: {
      "ash wood": 2,
    },
  },
  {
    name: "Decorated Timber Beam 26°",
    set: "timberwood",
    stats: {
      size: "26°",
    },
    station: {
      workbench: 1,
    },
    materials: {
      timberwood: 2,
    },
  },
  {
    name: "Decorated Timber Beam 2m",
    set: "timberwood",
    stats: {
      size: "2m",
    },
    station: {
      workbench: 1,
    },
    materials: {
      timberwood: 2,
    },
  },
  {
    name: "Decorated Timber Beam 45°",
    set: "timberwood",
    stats: {
      size: "45°",
    },
    station: {
      workbench: 1,
    },
    materials: {
      timberwood: 2,
    },
  },
  {
    name: "Decorated Timber Beam 67°",
    set: "timberwood",
    stats: {
      size: "67°",
    },
    station: {
      workbench: 1,
    },
    materials: {
      timberwood: 2,
    },
  },
  {
    name: "Log Beam 67°",
    set: "core wood",
    stats: {
      size: "67°",
    },
    station: {
      workbench: 1,
    },
    materials: {
      "core wood": 2,
    },
  },
  {
    name: "Timber Beam 26°",
    set: "timberwood",
    stats: {
      size: "26°",
    },
    station: {
      workbench: 1,
    },
    materials: {
      timberwood: 2,
    },
  },
  {
    name: "Timber Beam 2m",
    set: "timberwood",
    stats: {
      size: "2m",
    },
    station: {
      workbench: 1,
    },
    materials: {
      timberwood: 2,
    },
  },
  {
    name: "Timber Beam 45°",
    set: "timberwood",
    stats: {
      size: "45°",
    },
    station: {
      workbench: 1,
    },
    materials: {
      timberwood: 2,
    },
  },
  {
    name: "Timber Beam 4m",
    set: "timberwood",
    stats: {
      size: "4m",
    },
    station: {
      workbench: 1,
    },
    materials: {
      timberwood: 4,
    },
  },
  {
    name: "Timber Beam 67°",
    set: "timberwood",
    stats: {
      size: "67°",
    },
    station: {
      workbench: 1,
    },
    materials: {
      timberwood: 2,
    },
  },
  {
    name: "Wood Beam 67°",
    set: "wood",
    stats: {
      size: "67°",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
    },
  },
  {
    name: "Wood Iron Beam 67°",
    set: "wood",
    stats: {
      size: "67°",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
      iron: 1,
    },
  },
];

export const beams: Array<Omit<Building, "id">> = beamsList.map((building) => ({
  ...building,
  group: "building",
  type: "beams",
}));
