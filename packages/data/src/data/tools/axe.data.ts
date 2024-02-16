import { Tool } from "../@types/Tools.types";

const axeList: Array<Omit<Tool, "group" | "id" | "type">> = [
  {
    name: "Stone Axe",
    level: 1,
    set: "stone",
    stats: {
      chop: 20,
      slash: 15,
      knockback: 50,
      "parry force": 20,
      durability: 100,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 5,
      stone: 4,
    },
  },
  {
    name: "Stone Axe",
    level: 2,
    set: "stone",
    stats: {
      chop: 23,
      slash: 20,
      knockback: 50,
      "parry force": 25,
      durability: 130,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 2,
    },
    materials: {
      wood: 5,
      stone: 6,
    },
  },
  {
    name: "Stone Axe",
    level: 3,
    set: "stone",
    stats: {
      chop: 26,
      slash: 25,
      knockback: 50,
      "parry force": 30,
      durability: 160,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 3,
    },
    materials: {
      wood: 5,
      stone: 10,
    },
  },
  {
    name: "Stone Axe",
    level: 4,
    set: "stone",
    stats: {
      chop: 29,
      slash: 30,
      knockback: 50,
      "parry force": 35,
      durability: 190,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 4,
    },
    materials: {
      wood: 5,
      stone: 16,
    },
  },
  {
    name: "Flint Axe",
    level: 1,
    set: "flint",
    stats: {
      chop: 30,
      slash: 20,
      knockback: 50,
      "parry force": 20,
      durability: 100,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 4,
      flint: 6,
    },
  },
  {
    name: "Flint Axe",
    level: 2,
    set: "flint",
    stats: {
      chop: 33,
      slash: 25,
      knockback: 50,
      "parry force": 25,
      durability: 130,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 2,
    },
    materials: {
      wood: 4,
      flint: 9,
      "leather scraps": 2,
    },
  },
  {
    name: "Flint Axe",
    level: 3,
    set: "flint",
    stats: {
      chop: 36,
      slash: 30,
      knockback: 50,
      "parry force": 30,
      durability: 160,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 3,
    },
    materials: {
      wood: 4,
      flint: 15,
      "leather scraps": 6,
    },
  },
  {
    name: "Flint Axe",
    level: 4,
    set: "flint",
    stats: {
      chop: 39,
      slash: 35,
      knockback: 50,
      "parry force": 35,
      durability: 190,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 4,
    },
    materials: {
      wood: 4,
      flint: 24,
      "leather scraps": 12,
    },
  },
  {
    name: "Bronze Axe",
    level: 1,
    set: "bronze",
    stats: {
      chop: 40,
      slash: 35,
      knockback: 50,
      "parry force": 20,
      durability: 125,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 1,
    },
    materials: {
      wood: 4,
      bronze: 8,
      "leather scraps": 2,
    },
  },
  {
    name: "Bronze Axe",
    level: 2,
    set: "bronze",
    stats: {
      chop: 43,
      slash: 40,
      knockback: 50,
      "parry force": 25,
      durability: 175,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 2,
    },
    materials: {
      wood: 4,
      bronze: 12,
      "leather scraps": 3,
    },
  },
  {
    name: "Bronze Axe",
    level: 3,
    set: "bronze",
    stats: {
      chop: 46,
      slash: 45,
      knockback: 50,
      "parry force": 30,
      durability: 225,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      wood: 4,
      bronze: 20,
      "leather scraps": 5,
    },
  },
  {
    name: "Bronze Axe",
    level: 4,
    set: "bronze",
    stats: {
      chop: 49,
      slash: 50,
      knockback: 50,
      "parry force": 35,
      durability: 275,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      wood: 4,
      bronze: 32,
      "leather scraps": 8,
    },
  },
  {
    name: "Iron Axe",
    level: 1,
    set: "iron",
    stats: {
      chop: 50,
      slash: 55,
      knockback: 50,
      "parry force": 20,
      durability: 175,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 2,
    },
    materials: {
      wood: 4,
      iron: 20,
      "leather scraps": 2,
    },
  },
  {
    name: "Iron Axe",
    level: 2,
    set: "iron",
    stats: {
      chop: 53,
      slash: 60,
      knockback: 50,
      "parry force": 25,
      durability: 225,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      wood: 4,
      iron: 30,
      "leather scraps": 3,
    },
  },
  {
    name: "Iron Axe",
    level: 3,
    set: "iron",
    stats: {
      chop: 56,
      slash: 65,
      knockback: 50,
      "parry force": 30,
      durability: 275,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      wood: 4,
      iron: 50,
      "leather scraps": 5,
    },
  },
  {
    name: "Iron Axe",
    level: 4,
    set: "iron",
    stats: {
      chop: 59,
      slash: 70,
      knockback: 50,
      "parry force": 35,
      durability: 325,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 5,
    },
    materials: {
      wood: 4,
      iron: 80,
      "leather scraps": 8,
    },
  },
  {
    name: "Blackmetal Axe",
    level: 1,
    set: "black metal",
    stats: {
      chop: 60,
      slash: 95,
      knockback: 60,
      durability: 175,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      "fine wood": 6,
      "black metal": 20,
      "linen thread": 5,
    },
  },
  {
    name: "Blackmetal Axe",
    level: 2,
    set: "black metal",
    stats: {
      chop: 63,
      slash: 100,
      knockback: 60,
      durability: 225,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 5,
    },
    materials: {
      "fine wood": 6,
      "black metal": 30,
      "linen thread": 10,
    },
  },
  {
    name: "Blackmetal Axe",
    level: 3,
    set: "black metal",
    stats: {
      chop: 66,
      slash: 105,
      knockback: 60,
      durability: 275,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 6,
    },
    materials: {
      "fine wood": 6,
      "black metal": 50,
      "linen thread": 20,
    },
  },
  {
    name: "Blackmetal Axe",
    level: 4,
    set: "black metal",
    stats: {
      chop: 69,
      slash: 110,
      knockback: 60,
      durability: 325,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 7,
    },
    materials: {
      "fine wood": 6,
      "black metal": 80,
      "linen thread": 35,
    },
  },
];

export const axe: Array<Omit<Tool, "id">> = axeList.map((building) => ({
  ...building,
  group: "tools",
  type: "axe",
}));
