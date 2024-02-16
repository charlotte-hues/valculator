import { Weapon } from "../@types/Weapon.types";

const spearsList: Array<Omit<Weapon, "group" | "id" | "type">> = [
  {
    name: "Flint Spear",
    level: 1,
    set: "flint",
    stats: {
      pierce: 20,
      knockback: 20,
      backstab: "3x",
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
      flint: 10,
      "leather scraps": 2,
    },
  },
  {
    name: "Flint Spear",
    level: 2,
    set: "flint",
    stats: {
      pierce: 26,
      knockback: 20,
      backstab: "3x",
      durability: 150,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 2,
    },
    materials: {
      wood: 8,
      flint: 15,
      "leather scraps": 3,
    },
  },
  {
    name: "Flint Spear",
    level: 3,
    set: "flint",
    stats: {
      pierce: 32,
      knockback: 20,
      backstab: "3x",
      durability: 200,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 3,
    },
    materials: {
      wood: 14,
      flint: 25,
      "leather scraps": 5,
    },
  },
  {
    name: "Flint Spear",
    level: 4,
    set: "flint",
    stats: {
      pierce: 38,
      knockback: 20,
      backstab: "3x",
      durability: 250,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 4,
    },
    materials: {
      wood: 23,
      flint: 40,
      "leather scraps": 8,
    },
  },
  {
    name: "Bronze Spear",
    level: 1,
    set: "bronze",
    stats: {
      pierce: 35,
      knockback: 20,
      backstab: "3x",
      durability: 100,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 1,
    },
    materials: {
      wood: 5,
      bronze: 6,
      "deer hide": 2,
    },
  },
  {
    name: "Bronze Spear",
    level: 2,
    set: "bronze",
    stats: {
      pierce: 41,
      knockback: 20,
      backstab: "3x",
      durability: 150,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 2,
    },
    materials: {
      wood: 8,
      bronze: 10,
      "deer hide": 3,
    },
  },
  {
    name: "Bronze Spear",
    level: 3,
    set: "bronze",
    stats: {
      pierce: 47,
      knockback: 20,
      backstab: "3x",
      durability: 200,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      wood: 14,
      bronze: 18,
      "deer hide": 5,
    },
  },
  {
    name: "Bronze Spear",
    level: 4,
    set: "bronze",
    stats: {
      pierce: 53,
      knockback: 20,
      backstab: "3x",
      durability: 250,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      wood: 23,
      bronze: 30,
      "deer hide": 8,
    },
  },
  {
    name: "Ancient Bark Spear",
    level: 1,
    set: "iron",
    stats: {
      pierce: 55,
      knockback: 20,
      backstab: "3x",
      durability: 100,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      "troll hide": 4,
      iron: 10,
      "ancient bark": 10,
    },
  },
  {
    name: "Ancient Bark Spear",
    level: 2,
    set: "iron",
    stats: {
      pierce: 61,
      knockback: 20,
      backstab: "3x",
      durability: 150,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      "troll hide": 5,
      iron: 15,
      "ancient bark": 15,
    },
  },
  {
    name: "Ancient Bark Spear",
    level: 3,
    set: "iron",
    stats: {
      pierce: 67,
      knockback: 20,
      backstab: "3x",
      durability: 200,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 5,
    },
    materials: {
      "troll hide": 7,
      iron: 25,
      "ancient bark": 25,
    },
  },
  {
    name: "Ancient Bark Spear",
    level: 4,
    set: "iron",
    stats: {
      pierce: 73,
      knockback: 20,
      backstab: "3x",
      durability: 250,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 6,
    },
    materials: {
      "troll hide": 10,
      iron: 40,
      "ancient bark": 40,
    },
  },
  {
    name: "Fang Spear",
    level: 1,
    set: "wolf",
    stats: {
      pierce: 70,
      knockback: 20,
      backstab: "3x",
      durability: 100,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      "ancient bark": 10,
      "wolf fang": 4,
      "leather scraps": 2,
      silver: 2,
    },
  },
  {
    name: "Fang Spear",
    level: 2,
    set: "wolf",
    stats: {
      pierce: 76,
      knockback: 20,
      backstab: "3x",
      durability: 150,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      "ancient bark": 15,
      "wolf fang": 6,
      "leather scraps": 3,
      silver: 3,
    },
  },
  {
    name: "Fang Spear",
    level: 3,
    set: "wolf",
    stats: {
      pierce: 82,
      knockback: 20,
      backstab: "3x",
      durability: 200,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 5,
    },
    materials: {
      "ancient bark": 25,
      "wolf fang": 10,
      "leather scraps": 5,
      silver: 4,
    },
  },
  {
    name: "Fang Spear",
    level: 4,
    set: "wolf",
    stats: {
      pierce: 88,
      knockback: 20,
      backstab: "3x",
      durability: 250,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 6,
    },
    materials: {
      "ancient bark": 40,
      "wolf fang": 16,
      "leather scraps": 8,
      silver: 7,
    },
  },
  {
    name: "Abyssal Harpoon",
    set: "abyssal",
    level: 1,
    stats: {
      pierce: 10,
      knockback: 20,
      backstab: "1x",
      durability: 50,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 2,
    },
    materials: {
      "fine wood": 8,
      chitin: 30,
      "leather scraps": 3,
    },
  },
];

export const spears: Array<Omit<Weapon, "id">> = spearsList.map((weapon) => ({
  ...weapon,
  group: "weapons",
  type: "spear",
}));
