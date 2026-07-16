import { Weapon } from "../@types/Weapon.types";

const crossbowsList: Array<Omit<Weapon, "group" | "id" | "type">> = [
  {
    name: "Arbalest",
    level: 1,
    set: "iron",
    stats: {
      pierce: 200,
      knockback: 200,
      backstab: "3x",
      durability: 50,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 1,
    },
    materials: {
      root: 4,
      iron: 8,
      wood: 10,
    },
  },
  {
    name: "Arbalest",
    level: 2,
    set: "iron",
    stats: {
      pierce: 203,
      knockback: 200,
      backstab: "3x",
      durability: 100,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 2,
    },
    materials: {
      root: 5,
      iron: 12,
      wood: 15,
    },
  },
  {
    name: "Arbalest",
    level: 3,
    set: "iron",
    stats: {
      pierce: 206,
      knockback: 200,
      backstab: "3x",
      durability: 150,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 3,
    },
    materials: {
      root: 6,
      iron: 16,
      wood: 20,
    },
  },
  {
    name: "Arbalest",
    level: 4,
    set: "iron",
    stats: {
      pierce: 209,
      knockback: 200,
      backstab: "3x",
      durability: 200,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      root: 7,
      iron: 20,
      wood: 25,
    },
  },
  {
    name: "Ripper",
    level: 1,
    set: "flametal",
    stats: {
      pierce: 220,
      knockback: 210,
      backstab: "3x",
      durability: 50,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 3,
    },
    materials: {
      flametal: 8,
      "morgen sinew": 2,
      "bonemaw tooth": 4,
      ashwood: 10,
    },
  },
  {
    name: "Ripper",
    level: 2,
    set: "flametal",
    stats: {
      pierce: 223,
      knockback: 210,
      backstab: "3x",
      durability: 100,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      flametal: 12,
      "morgen sinew": 3,
      "bonemaw tooth": 8,
      ashwood: 15,
    },
  },
  {
    name: "Ripper",
    level: 3,
    set: "flametal",
    stats: {
      pierce: 226,
      knockback: 210,
      backstab: "3x",
      durability: 150,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      flametal: 16,
      "morgen sinew": 4,
      "bonemaw tooth": 12,
      ashwood: 20,
    },
  },
  {
    name: "Ripper",
    level: 4,
    set: "flametal",
    stats: {
      pierce: 229,
      knockback: 210,
      backstab: "3x",
      durability: 200,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      flametal: 20,
      "morgen sinew": 5,
      "bonemaw tooth": 16,
      ashwood: 25,
    },
  },
  {
    name: "Wound Ripper",
    level: 1,
    set: "flametal",
    stats: {
      pierce: 220,
      knockback: 210,
      backstab: "3x",
      durability: 50,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      bloodstone: 1,
      flametal: 16,
      "morgen sinew": 2,
      "bonemaw tooth": 4,
      ashwood: 10,
    },
  },
  {
    name: "Wound Ripper",
    level: 2,
    set: "flametal",
    stats: {
      pierce: 223,
      knockback: 210,
      backstab: "3x",
      durability: 100,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      bloodstone: 2,
      flametal: 24,
      "morgen sinew": 2,
      "bonemaw tooth": 4,
      ashwood: 10,
    },
  },
  {
    name: "Wound Ripper",
    level: 3,
    set: "flametal",
    stats: {
      pierce: 226,
      knockback: 210,
      backstab: "3x",
      durability: 150,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      bloodstone: 3,
      flametal: 32,
      "morgen sinew": 2,
      "bonemaw tooth": 4,
      ashwood: 10,
    },
  },
  {
    name: "Wound Ripper",
    level: 4,
    set: "flametal",
    stats: {
      pierce: 229,
      knockback: 210,
      backstab: "3x",
      durability: 200,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      bloodstone: 4,
      flametal: 40,
      "morgen sinew": 2,
      "bonemaw tooth": 4,
      ashwood: 10,
    },
  },
  {
    name: "Storm Ripper",
    level: 1,
    set: "flametal",
    stats: {
      pierce: 220,
      lightning: 10,
      knockback: 210,
      backstab: "3x",
      durability: 50,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      iolite: 1,
      flametal: 16,
      "morgen sinew": 2,
      "bonemaw tooth": 4,
      ashwood: 10,
    },
  },
  {
    name: "Storm Ripper",
    level: 2,
    set: "flametal",
    stats: {
      pierce: 223,
      lightning: 10,
      knockback: 210,
      backstab: "3x",
      durability: 100,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      iolite: 2,
      flametal: 24,
      "morgen sinew": 2,
      "bonemaw tooth": 4,
      ashwood: 10,
    },
  },
  {
    name: "Storm Ripper",
    level: 3,
    set: "flametal",
    stats: {
      pierce: 226,
      lightning: 10,
      knockback: 210,
      backstab: "3x",
      durability: 150,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      iolite: 3,
      flametal: 32,
      "morgen sinew": 2,
      "bonemaw tooth": 4,
      ashwood: 10,
    },
  },
  {
    name: "Storm Ripper",
    level: 4,
    set: "flametal",
    stats: {
      pierce: 229,
      lightning: 10,
      knockback: 210,
      backstab: "3x",
      durability: 200,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      iolite: 4,
      flametal: 40,
      "morgen sinew": 2,
      "bonemaw tooth": 4,
      ashwood: 10,
    },
  },
  {
    name: "Root Ripper",
    level: 1,
    set: "flametal",
    stats: {
      pierce: 220,
      poison: 10,
      knockback: 210,
      backstab: "3x",
      durability: 50,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      jade: 1,
      flametal: 16,
      "morgen sinew": 2,
      "bonemaw tooth": 4,
      ashwood: 10,
    },
  },
  {
    name: "Root Ripper",
    level: 2,
    set: "flametal",
    stats: {
      pierce: 223,
      poison: 10,
      knockback: 210,
      backstab: "3x",
      durability: 100,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      jade: 2,
      flametal: 24,
      "morgen sinew": 2,
      "bonemaw tooth": 4,
      ashwood: 10,
    },
  },
  {
    name: "Root Ripper",
    level: 3,
    set: "flametal",
    stats: {
      pierce: 226,
      poison: 10,
      knockback: 210,
      backstab: "3x",
      durability: 150,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      jade: 3,
      flametal: 32,
      "morgen sinew": 2,
      "bonemaw tooth": 4,
      ashwood: 10,
    },
  },
  {
    name: "Root Ripper",
    level: 4,
    set: "flametal",
    stats: {
      pierce: 229,
      poison: 10,
      knockback: 210,
      backstab: "3x",
      durability: 200,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      jade: 4,
      flametal: 40,
      "morgen sinew": 2,
      "bonemaw tooth": 4,
      ashwood: 10,
    },
  },
];

export const crossbows: Array<Omit<Weapon, "id">> = crossbowsList.map((weapon) => ({
  ...weapon,
  group: "weapons",
  type: "crossbows",
}));
