import { Tool } from "../@types/Tools.types";

const miscList: Array<Omit<Tool, "group" | "id" | "type">> = [
  {
    name: "Hoe",
    level: 1,
    set: "wood",
    stats: {
      durability: 200,
      weight: 2,
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 5,
      stone: 2,
    },
  },
  {
    name: "Hoe",
    level: 2,
    set: "wood",
    stats: {
      durability: 400,
      weight: 2,
    },
    station: {
      workbench: 2,
    },
    materials: {
      wood: 6,
      stone: 3,
    },
  },
  {
    name: "Hoe",
    level: 3,
    set: "wood",
    stats: {
      durability: 600,
      weight: 2,
    },
    station: {
      workbench: 3,
    },
    materials: {
      wood: 8,
      stone: 5,
    },
  },
  {
    name: "Cultivator",
    level: 1,
    set: "bronze",
    stats: {
      durability: 200,
      weight: 2,
    },
    station: {
      forge: 1,
    },
    materials: {
      "core wood": 5,
      bronze: 5,
    },
  },
  {
    name: "Cultivator",
    level: 2,
    set: "bronze",
    stats: {
      durability: 400,
      weight: 2,
    },
    station: {
      forge: 2,
    },
    materials: {
      "core wood": 6,
      bronze: 6,
    },
  },
  {
    name: "Cultivator",
    level: 3,
    set: "bronze",
    stats: {
      durability: 600,
      weight: 2,
    },
    station: {
      forge: 3,
    },
    materials: {
      "core wood": 8,
      bronze: 8,
    },
  },
  {
    name: "Hammer",
    level: 1,
    set: "wood",
    stats: {
      durability: 100,
      weight: 2,
    },
    materials: {
      wood: 3,
      stone: 2,
    },
  },
  {
    name: "Hammer",
    level: 2,
    set: "wood",
    stats: {
      durability: 200,
      weight: 2,
    },
    station: {
      workbench: 2,
    },
    materials: {
      wood: 4,
      stone: 3,
    },
  },
  {
    name: "Hammer",
    level: 3,
    set: "wood",
    stats: {
      durability: 300,
      weight: 2,
    },
    station: {
      workbench: 3,
    },
    materials: {
      wood: 6,
      stone: 5,
    },
  },
  {
    name: "Dvergr Lantern",
    level: 1,
    set: "bronze",
    stats: {
      durability: 0,
      weight: 2,
    },
    station: {
      "black forge": 1,
    },
    materials: {
      bronze: 5,
      "surtling core": 1,
      crystal: 1,
    },
  },
  {
    name: "Tankard",
    set: "wood",
    stats: {
      durability: 0,
      weight: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 5,
      resin: 2,
    },
  },
  {
    name: "Horn of Celebration",
    set: "iron",
    stats: {
      durability: 0,
      weight: 1,
    },
    station: {
      workbench: 1,
    },
    materials: {
      bronze: 2,
      "troll hide": 2,
      iron: 2,
    },
  },
  {
    name: "Butcher Knife",
    set: "wood",
    stats: {
      durability: 200,
      weight: 0.3,
    },
    station: {
      forge: 1,
    },
    materials: {
      wood: 3,
      tin: 4,
    },
  },
];

export const misc: Array<Omit<Tool, "id">> = miscList.map((building) => ({
  ...building,
  group: "tools",
  type: "misc",
}));
