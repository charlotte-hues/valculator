import { WorkStation } from "../@types/Workstation.types";

const benchList: Array<Omit<WorkStation, "group" | "id" | "type">> = [
  {
    name: "workbench",
    set: "structures",
    level: 1,
    materials: {
      wood: 10,
    },
  },
  {
    name: "workbench",
    set: "structures",
    level: 2,
    materials: {
      wood: 20,
      flint: 10,
    },
  },
  {
    name: "workbench",
    set: "structures",
    level: 3,
    materials: {
      wood: 30,
      flint: 25,
      "leather scraps": 20,
      "deer hide": 5,
    },
  },
  {
    name: "workbench",
    set: "structures",
    level: 4,
    materials: {
      wood: 30,
      flint: 25,
      "leather scraps": 20,
      "deer hide": 5,
      "fine wood": 10,
      bronze: 3,
    },
  },
  {
    name: "workbench",
    set: "structures",
    level: 5,
    materials: {
      wood: 30,
      flint: 25,
      "leather scraps": 20,
      "deer hide": 5,
      "fine wood": 20,
      bronze: 3,
      iron: 4,
      obsidian: 4,
    },
  },
  {
    name: "Forge",
    set: "structures",
    level: 1,
    nearby: "workbench",
    materials: {
      stone: 4,
      coal: 4,
      wood: 10,
      copper: 6,
    },
  },
  {
    name: "Forge",
    set: "structures",
    level: 2,
    nearby: "workbench",
    materials: {
      stone: 4,
      coal: 4,
      wood: 10,
      copper: 16,
      "fine wood": 25,
    },
  },
  {
    name: "Forge",
    set: "structures",
    level: 3,
    nearby: "workbench",
    materials: {
      stone: 4,
      coal: 4,
      wood: 15,
      copper: 16,
      "fine wood": 25,
      bronze: 2,
    },
  },
  {
    name: "Forge",
    set: "structures",
    level: 4,
    nearby: "workbench",
    materials: {
      stone: 4,
      coal: 4,
      wood: 20,
      copper: 16,
      "fine wood": 25,
      bronze: 2,
      iron: 20,
    },
  },
  {
    name: "Forge",
    set: "structures",
    level: 5,
    nearby: "workbench",
    materials: {
      stone: 4,
      coal: 4,
      wood: 30,
      copper: 16,
      "fine wood": 25,
      bronze: 2,
      iron: 35,
    },
  },
  {
    name: "Forge",
    set: "structures",
    level: 6,
    nearby: "workbench",
    materials: {
      stone: 4,
      coal: 4,
      wood: 35,
      copper: 16,
      "fine wood": 25,
      bronze: 2,
      iron: 35,
      "deer hide": 5,
      chain: 4,
    },
  },
  {
    name: "Forge",
    set: "structures",
    level: 7,
    nearby: "workbench",
    materials: {
      stone: 4,
      coal: 4,
      wood: 60,
      copper: 16,
      "fine wood": 25,
      bronze: 2,
      iron: 35,
      "deer hide": 5,
      chain: 4,
      "sharpening stone": 1,
    },
  },
  {
    name: "Black Forge",
    set: "structures",
    level: 1,
    materials: {
      "black marble": 10,
      "yggdrasil wood": 10,
      "black core": 5,
    },
  },
  {
    name: "Black Forge",
    set: "structures",
    level: 2,
    materials: {
      "black marble": 14,
      "yggdrasil wood": 10,
      "black core": 5,
      iron: 5,
      copper: 5,
    },
  },
  {
    name: "Black Forge",
    set: "structures",
    level: 3,
    materials: {
      "black marble": 14,
      "yggdrasil wood": 10,
      "black core": 5,
      iron: 10,
      copper: 13,
      "mechanical spring": 2,
    },
  },
];

export const bench: Array<Omit<WorkStation, "id">> = benchList.map(
  (building) => ({
    ...building,
    group: "crafting",
    type: "bench",
  })
);
