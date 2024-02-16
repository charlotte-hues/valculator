import { Weapon } from "../@types/Weapon.types";

const bowsList: Array<Omit<Weapon, "group" | "id" | "type">> = [
  {
    name: "Crude Bow",
    level: 1,
    set: "wood",
    stats: {
      pierce: 22,
      backstab: "3x",
      durability: 50,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 10,
      "leather scraps": 8,
    },
  },
  {
    name: "Crude Bow",
    level: 2,
    set: "wood",
    stats: {
      pierce: 25,
      backstab: "3x",
      durability: 100,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 2,
    },
    materials: {
      wood: 15,
      "leather scraps": 12,
      "deer hide": 1,
    },
  },
  {
    name: "Crude Bow",
    level: 3,
    set: "wood",
    stats: {
      pierce: 28,
      backstab: "3x",
      durability: 150,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 3,
    },
    materials: {
      wood: 25,
      "leather scraps": 20,
      "deer hide": 3,
    },
  },
  {
    name: "Crude Bow",
    level: 4,
    set: "wood",
    stats: {
      pierce: 31,
      backstab: "3x",
      durability: 200,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 4,
    },
    materials: {
      wood: 40,
      "leather scraps": 32,
      "deer hide": 6,
    },
  },
  {
    name: "Finewood Bow",
    level: 1,
    set: "wood",
    stats: {
      pierce: 32,
      knockback: 5,
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
      "fine wood": 10,
      "core wood": 10,
      "deer hide": 2,
    },
  },
  {
    name: "Finewood Bow",
    level: 2,
    set: "wood",
    stats: {
      pierce: 35,
      knockback: 5,
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
      "fine wood": 15,
      "core wood": 15,
      "deer hide": 4,
    },
  },
  {
    name: "Finewood Bow",
    level: 3,
    set: "wood",
    stats: {
      pierce: 38,
      knockback: 5,
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
      "fine wood": 25,
      "core wood": 25,
      "deer hide": 8,
    },
  },
  {
    name: "Finewood Bow",
    level: 4,
    set: "wood",
    stats: {
      pierce: 41,
      knockback: 5,
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
      "fine wood": 40,
      "core wood": 40,
      "deer hide": 14,
    },
  },
  {
    name: "Huntsman Bow",
    level: 1,
    set: "iron",
    stats: {
      pierce: 42,
      knockback: 10,
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
      "fine wood": 10,
      iron: 20,
      feathers: 10,
      "deer hide": 2,
    },
  },
  {
    name: "Huntsman Bow",
    level: 2,
    set: "iron",
    stats: {
      pierce: 45,
      knockback: 10,
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
      "fine wood": 15,
      iron: 30,
      feathers: 15,
      "deer hide": 4,
    },
  },
  {
    name: "Huntsman Bow",
    level: 3,
    set: "iron",
    stats: {
      pierce: 48,
      knockback: 10,
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
      "fine wood": 25,
      iron: 50,
      feathers: 25,
      "deer hide": 8,
    },
  },
  {
    name: "Huntsman Bow",
    level: 4,
    set: "iron",
    stats: {
      pierce: 51,
      knockback: 10,
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
      "fine wood": 40,
      iron: 80,
      feathers: 40,
      "deer hide": 14,
    },
  },
  {
    name: "Draugr Fang",
    level: 1,
    set: "silver",
    stats: {
      pierce: 47,
      poison: 5,
      knockback: 20,
      backstab: "3x",
      durability: 100,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 2,
    },
    materials: {
      "ancient bark": 10,
      silver: 20,
      "deer hide": 2,
      guck: 10,
    },
  },
  {
    name: "Draugr Fang",
    level: 2,
    set: "silver",
    stats: {
      pierce: 50,
      poison: 10,
      knockback: 20,
      backstab: "3x",
      durability: 150,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      "ancient bark": 15,
      silver: 30,
      "deer hide": 4,
      guck: 12,
    },
  },
  {
    name: "Draugr Fang",
    level: 3,
    set: "silver",
    stats: {
      pierce: 53,
      poison: 15,
      knockback: 20,
      backstab: "3x",
      durability: 200,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      "ancient bark": 25,
      silver: 50,
      "deer hide": 8,
      guck: 16,
    },
  },
  {
    name: "Draugr Fang",
    level: 4,
    set: "silver",
    stats: {
      pierce: 56,
      poison: 20,
      knockback: 20,
      backstab: "3x",
      durability: 250,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 5,
    },
    materials: {
      "ancient bark": 40,
      silver: 80,
      "deer hide": 14,
      guck: 20,
    },
  },
];

export const bows: Array<Omit<Weapon, "id">> = bowsList.map((weapon) => ({
  ...weapon,
  group: "weapons",
  type: "bows",
}));
