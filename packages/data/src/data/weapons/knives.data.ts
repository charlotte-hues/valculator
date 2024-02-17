import { Weapon } from "../@types/Weapon.types";

const knivesList: Array<Omit<Weapon, "group" | "id" | "type">> = [
  {
    name: "Flint Knife",
    level: 1,
    set: "flint",
    stats: {
      pierce: 6,
      slash: 6,
      knockback: 10,
      backstab: "10x",
      "parry force": 10,
      durability: 100,
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      wood: 2,
      flint: 4,
      "leather scraps": 2,
    },
  },
  {
    name: "Flint Knife",
    level: 2,
    set: "flint",
    stats: {
      pierce: 7,
      slash: 7,
      knockback: 10,
      backstab: "10x",
      "parry force": 15,
      durability: 150,
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 2,
    },
    materials: {
      wood: 2,
      flint: 6,
      "leather scraps": 2,
    },
  },
  {
    name: "Flint Knife",
    level: 3,
    set: "flint",
    stats: {
      pierce: 8,
      slash: 8,
      knockback: 10,
      backstab: "10x",
      "parry force": 20,
      durability: 200,
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 3,
    },
    materials: {
      wood: 2,
      flint: 10,
      "leather scraps": 2,
    },
  },
  {
    name: "Flint Knife",
    level: 4,
    set: "flint",
    stats: {
      pierce: 9,
      slash: 9,
      knockback: 10,
      backstab: "10x",
      "parry force": 25,
      durability: 250,
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 4,
    },
    materials: {
      wood: 2,
      flint: 16,
      "leather scraps": 2,
    },
  },
  {
    name: "Copper Knife",
    level: 1,
    set: "copper",
    stats: {
      pierce: 9,
      slash: 9,
      knockback: 10,
      backstab: "10x",
      "parry force": 10,
      durability: 100,
      weight: 0.3,
    },
    effects: {},
    station: {
      forge: 1,
    },
    materials: {
      wood: 2,
      copper: 8,
    },
  },
  {
    name: "Copper Knife",
    level: 2,
    set: "copper",
    stats: {
      pierce: 10,
      slash: 10,
      knockback: 10,
      backstab: "10x",
      "parry force": 15,
      durability: 150,
      weight: 0.3,
    },
    effects: {},
    station: {
      forge: 2,
    },
    materials: {
      wood: 2,
      copper: 12,
      "greydwarf eye": 8,
    },
  },
  {
    name: "Copper Knife",
    level: 3,
    set: "copper",
    stats: {
      pierce: 11,
      slash: 11,
      knockback: 10,
      backstab: "10x",
      "parry force": 20,
      durability: 200,
      weight: 0.3,
    },
    effects: {},
    station: {
      forge: 3,
    },
    materials: {
      wood: 2,
      copper: 20,
      "greydwarf eye": 34,
    },
  },
  {
    name: "Copper Knife",
    level: 4,
    set: "copper",
    stats: {
      pierce: 12,
      slash: 12,
      knockback: 10,
      backstab: "10x",
      "parry force": 25,
      durability: 250,
      weight: 0.3,
    },
    effects: {},
    station: {
      forge: 4,
    },
    materials: {
      wood: 2,
      copper: 32,
      "greydwarf eye": 58,
    },
  },
  {
    name: "Abyssal Razor",
    level: 1,
    set: "abyssal",
    stats: {
      pierce: 12,
      slash: 12,
      knockback: 10,
      backstab: "10x",
      "parry force": 10,
      durability: 100,
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 2,
    },
    materials: {
      "fine wood": 4,
      chitin: 20,
      "leather scraps": 2,
    },
  },
  {
    name: "Abyssal Razor",
    level: 2,
    set: "abyssal",
    stats: {
      pierce: 13,
      slash: 13,
      knockback: 10,
      backstab: "10x",
      "parry force": 15,
      durability: 150,
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 3,
    },
    materials: {
      "fine wood": 4,
      chitin: 30,
      "leather scraps": 2,
    },
  },
  {
    name: "Abyssal Razor",
    level: 3,
    set: "abyssal",
    stats: {
      pierce: 14,
      slash: 14,
      knockback: 10,
      backstab: "10x",
      "parry force": 20,
      durability: 200,
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 4,
    },
    materials: {
      "fine wood": 4,
      chitin: 50,
      "leather scraps": 2,
    },
  },
  {
    name: "Abyssal Razor",
    level: 4,
    set: "abyssal",
    stats: {
      pierce: 15,
      slash: 15,
      knockback: 10,
      backstab: "10x",
      "parry force": 25,
      durability: 250,
      weight: 0.3,
    },
    effects: {},
    station: {
      workbench: 5,
    },
    materials: {
      "fine wood": 4,
      chitin: 80,
      "leather scraps": 2,
    },
  },
  {
    name: "Silver Knife",
    level: 1,
    set: "silver",
    stats: {
      pierce: 25,
      slash: 25,
      spirit: 12,
      knockback: 10,
      backstab: "6x",
      durability: 100,
      weight: 0.3,
    },
    effects: {},
    station: {
      forge: 3,
    },
    materials: {
      wood: 2,
      silver: 10,
      "leather scraps": 3,
      iron: 2,
    },
  },
  {
    name: "Silver Knife",
    level: 2,
    set: "silver",
    stats: {
      pierce: 26,
      slash: 26,
      spirit: 12,
      knockback: 10,
      backstab: "6x",
      durability: 150,
      weight: 0.3,
    },
    effects: {},
    station: {
      forge: 4,
    },
    materials: {
      wood: 3,
      silver: 15,
      "leather scraps": 4,
      iron: 3,
    },
  },
  {
    name: "Silver Knife",
    level: 3,
    set: "silver",
    stats: {
      pierce: 27,
      slash: 27,
      spirit: 12,
      knockback: 10,
      backstab: "6x",
      durability: 200,
      weight: 0.3,
    },
    effects: {},
    station: {
      forge: 5,
    },
    materials: {
      wood: 5,
      silver: 25,
      "leather scraps": 6,
      iron: 5,
    },
  },
  {
    name: "Silver Knife",
    level: 4,
    set: "silver",
    stats: {
      pierce: 28,
      slash: 28,
      spirit: 12,
      knockback: 10,
      backstab: "6x",
      durability: 250,
      weight: 0.3,
    },
    effects: {},
    station: {
      forge: 6,
    },
    materials: {
      wood: 8,
      silver: 40,
      "leather scraps": 9,
      iron: 8,
    },
  },
  {
    name: "Blackmetal Knife",
    level: 1,
    set: "black metal",
    stats: {
      pierce: 18,
      slash: 18,
      knockback: 10,
      backstab: "10x",
      "parry force": 10,
      durability: 100,
      weight: 0.3,
    },
    effects: {},
    station: {
      forge: 4,
    },
    materials: {
      "fine wood": 4,
      "black metal": 10,
      "linen thread": 5,
    },
  },
  {
    name: "Blackmetal Knife",
    level: 2,
    set: "black metal",
    stats: {
      pierce: 19,
      slash: 19,
      knockback: 10,
      backstab: "10x",
      "parry force": 15,
      durability: 150,
      weight: 0.3,
    },
    effects: {},
    station: {
      forge: 5,
    },
    materials: {
      "fine wood": 4,
      "black metal": 14,
      "linen thread": 10,
    },
  },
  {
    name: "Blackmetal Knife",
    level: 3,
    set: "black metal",
    stats: {
      pierce: 20,
      slash: 20,
      knockback: 10,
      backstab: "10x",
      "parry force": 20,
      durability: 200,
      weight: 0.3,
    },
    effects: {},
    station: {
      forge: 6,
    },
    materials: {
      "fine wood": 4,
      "black metal": 22,
      "linen thread": 20,
    },
  },
  {
    name: "Blackmetal Knife",
    level: 4,
    set: "black metal",
    stats: {
      pierce: 21,
      slash: 21,
      knockback: 10,
      backstab: "10x",
      "parry force": 25,
      durability: 250,
      weight: 0.3,
    },
    effects: {},
    station: {
      forge: 7,
    },
    materials: {
      "fine wood": 4,
      "black metal": 34,
      "linen thread": 35,
    },
  },
];

export const knives: Array<Omit<Weapon, "id">> = knivesList.map((weapon) => ({
  ...weapon,
  group: "weapons",
  type: "knives",
}));