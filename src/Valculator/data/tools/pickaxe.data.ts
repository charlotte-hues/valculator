import { Tool } from "../@types/Tools.types";

const pickaxeList: Array<Omit<Tool, "group" | "id" | "type">> = [
  {
    name: "Antler Pickaxe",
    set: "other",
    stats: {
      pickaxe: 18,
      pierce: 18,
      knockback: 50,
      "parry force": 20,
      durability: 100,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 10,
      "hard antler": 1,
    },
  },
  {
    name: "Bronze Pickaxe",
    level: 1,
    set: "bronze",
    stats: {
      pickaxe: 25,
      pierce: 25,
      knockback: 50,
      "parry force": 20,
      durability: 120,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 1,
    },
    materials: {
      "core wood": 3,
      bronze: 10,
    },
  },
  {
    name: "Bronze Pickaxe",
    level: 2,
    set: "bronze",
    stats: {
      pickaxe: 30,
      pierce: 30,
      knockback: 50,
      "parry force": 25,
      durability: 170,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 2,
    },
    materials: {
      "core wood": 4,
      bronze: 15,
    },
  },
  {
    name: "Bronze Pickaxe",
    level: 3,
    set: "bronze",
    stats: {
      pickaxe: 35,
      pierce: 35,
      knockback: 50,
      "parry force": 30,
      durability: 220,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      "core wood": 6,
      bronze: 25,
    },
  },
  {
    name: "Bronze Pickaxe",
    level: 4,
    set: "bronze",
    stats: {
      pickaxe: 40,
      pierce: 40,
      knockback: 50,
      "parry force": 35,
      durability: 270,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      "core wood": 9,
      bronze: 40,
    },
  },
  {
    name: "Iron Pickaxe",
    level: 1,
    set: "iron",
    stats: {
      pickaxe: 33,
      pierce: 33,
      knockback: 50,
      "parry force": 20,
      durability: 150,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 2,
    },
    materials: {
      "core wood": 3,
      iron: 20,
    },
  },
  {
    name: "Iron Pickaxe",
    level: 2,
    set: "iron",
    stats: {
      pickaxe: 38,
      pierce: 38,
      knockback: 50,
      "parry force": 25,
      durability: 200,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      "core wood": 4,
      iron: 30,
    },
  },
  {
    name: "Iron Pickaxe",
    level: 3,
    set: "iron",
    stats: {
      pickaxe: 43,
      pierce: 43,
      knockback: 50,
      "parry force": 30,
      durability: 250,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      "core wood": 6,
      iron: 50,
    },
  },
  {
    name: "Iron Pickaxe",
    level: 4,
    set: "iron",
    stats: {
      pickaxe: 48,
      pierce: 48,
      knockback: 50,
      "parry force": 35,
      durability: 300,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 5,
    },
    materials: {
      "core wood": 9,
      iron: 80,
    },
  },
];

export const pickaxe: Array<Omit<Tool, "id">> = pickaxeList.map((building) => ({
  ...building,
  group: "tools",
  type: "pickaxe",
}));
