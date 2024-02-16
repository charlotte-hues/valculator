import { Weapon } from "../@types/Weapon.types";

const polearmsList: Array<Omit<Weapon, "group" | "id" | "type">> = [
  {
    name: "Bronze Atgeir",
    level: 1,
    set: "bronze",
    stats: {
      pierce: 45,
      knockback: 30,
      backstab: "3x",
      "parry force": 40,
      durability: 125,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      forge: 1,
    },
    materials: {
      wood: 10,
      bronze: 8,
      "leather scraps": 2,
    },
  },
  {
    name: "Bronze Atgeir",
    level: 2,
    set: "bronze",
    stats: {
      pierce: 51,
      knockback: 30,
      backstab: "3x",
      "parry force": 45,
      durability: 175,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      forge: 2,
    },
    materials: {
      wood: 10,
      bronze: 12,
      "leather scraps": 2,
    },
  },
  {
    name: "Bronze Atgeir",
    level: 3,
    set: "bronze",
    stats: {
      pierce: 57,
      knockback: 30,
      backstab: "3x",
      "parry force": 50,
      durability: 225,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      forge: 3,
    },
    materials: {
      wood: 10,
      bronze: 20,
      "leather scraps": 2,
    },
  },
  {
    name: "Bronze Atgeir",
    level: 4,
    set: "bronze",
    stats: {
      pierce: 63,
      knockback: 30,
      backstab: "3x",
      "parry force": 55,
      durability: 275,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      forge: 4,
    },
    materials: {
      wood: 10,
      bronze: 32,
      "leather scraps": 2,
    },
  },
  {
    name: "Iron Atgeir",
    level: 1,
    set: "iron",
    stats: {
      pierce: 65,
      knockback: 30,
      backstab: "3x",
      "parry force": 40,
      durability: 175,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      forge: 2,
    },
    materials: {
      wood: 10,
      iron: 30,
      "leather scraps": 2,
    },
  },
  {
    name: "Iron Atgeir",
    level: 2,
    set: "iron",
    stats: {
      pierce: 71,
      knockback: 30,
      backstab: "3x",
      "parry force": 45,
      durability: 225,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      forge: 3,
    },
    materials: {
      wood: 10,
      iron: 45,
      "leather scraps": 3,
    },
  },
  {
    name: "Iron Atgeir",
    level: 3,
    set: "iron",
    stats: {
      pierce: 77,
      knockback: 30,
      backstab: "3x",
      "parry force": 50,
      durability: 275,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      forge: 4,
    },
    materials: {
      wood: 10,
      iron: 75,
      "leather scraps": 5,
    },
  },
  {
    name: "Iron Atgeir",
    level: 4,
    set: "iron",
    stats: {
      pierce: 78,
      knockback: 30,
      backstab: "3x",
      "parry force": 55,
      durability: 325,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      forge: 5,
    },
    materials: {
      wood: 10,
      iron: 120,
      "leather scraps": 8,
    },
  },
  {
    name: "Blackmetal Atgeir",
    level: 1,
    set: "black metal",
    stats: {
      pierce: 105,
      knockback: 30,
      backstab: "3x",
      "parry force": 40,
      durability: 175,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      forge: 4,
    },
    materials: {
      "fine wood": 10,
      "black metal": 30,
      "linen thread": 5,
    },
  },
  {
    name: "Blackmetal Atgeir",
    level: 2,
    set: "black metal",
    stats: {
      pierce: 111,
      knockback: 30,
      backstab: "3x",
      "parry force": 45,
      durability: 225,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      forge: 5,
    },
    materials: {
      "fine wood": 10,
      "black metal": 45,
      "linen thread": 10,
    },
  },
  {
    name: "Blackmetal Atgeir",
    level: 3,
    set: "black metal",
    stats: {
      pierce: 117,
      knockback: 30,
      backstab: "3x",
      "parry force": 50,
      durability: 275,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      forge: 6,
    },
    materials: {
      "fine wood": 10,
      "black metal": 75,
      "linen thread": 20,
    },
  },
  {
    name: "Blackmetal Atgeir",
    level: 4,
    set: "black metal",
    stats: {
      pierce: 123,
      knockback: 30,
      backstab: "3x",
      "parry force": 55,
      durability: 325,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      forge: 7,
    },
    materials: {
      "fine wood": 10,
      "black metal": 120,
      "linen thread": 35,
    },
  },
  {
    name: "Himminafl",
    level: 1,
    set: "silver",
    stats: {
      pierce: 85,
      lightning: 40,
      knockback: 30,
      backstab: "3x",
      stagger: 125,
      durability: 175,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 1,
    },
    materials: {
      "yggdrasil wood": 10,
      "refined eitr": 1,
      silver: 5,
      mandible: 2,
    },
  },
];

export const polearms: Array<Omit<Weapon, "id">> = polearmsList.map(
  (weapon) => ({
    ...weapon,
    group: "weapons",
    type: "polearms",
  })
);
