import { Weapon } from "../@types/Weapon.types";

const swordsList: Array<Omit<Weapon, "group" | "id" | "type">> = [
  {
    name: "Bronze Sword",
    level: 1,
    set: "bronze",
    stats: {
      slash: 35,
      knockback: 40,
      backstab: "3x",
      "parry force": 20,
      durability: 200,
      weight: 0.8,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 1,
    },
    materials: {
      wood: 2,
      bronze: 8,
      "leather scraps": 2,
    },
  },
  {
    name: "Bronze Sword",
    level: 2,
    set: "bronze",
    stats: {
      slash: 41,
      knockback: 40,
      backstab: "3x",
      "parry force": 25,
      durability: 250,
      weight: 0.8,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 2,
    },
    materials: {
      wood: 3,
      bronze: 12,
      "leather scraps": 3,
    },
  },
  {
    name: "Bronze Sword",
    level: 3,
    set: "bronze",
    stats: {
      slash: 47,
      knockback: 40,
      backstab: "3x",
      "parry force": 30,
      durability: 300,
      weight: 0.8,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      wood: 5,
      bronze: 20,
      "leather scraps": 5,
    },
  },
  {
    name: "Bronze Sword",
    level: 4,
    set: "bronze",
    stats: {
      slash: 53,
      knockback: 40,
      backstab: "3x",
      "parry force": 35,
      durability: 350,
      weight: 0.8,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      wood: 8,
      bronze: 32,
      "leather scraps": 8,
    },
  },
  {
    name: "Iron Sword",
    level: 1,
    set: "iron",
    stats: {
      slash: 55,
      knockback: 50,
      backstab: "2x",
      "parry force": 20,
      durability: 200,
      weight: 0.8,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 2,
    },
    materials: {
      wood: 2,
      iron: 20,
      "leather scraps": 3,
    },
  },
  {
    name: "Iron Sword",
    level: 2,
    set: "iron",
    stats: {
      slash: 61,
      knockback: 50,
      backstab: "2x",
      "parry force": 25,
      durability: 250,
      weight: 0.8,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      wood: 3,
      iron: 30,
      "leather scraps": 5,
    },
  },
  {
    name: "Iron Sword",
    level: 3,
    set: "iron",
    stats: {
      slash: 67,
      knockback: 50,
      backstab: "2x",
      "parry force": 30,
      durability: 300,
      weight: 0.8,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      wood: 5,
      iron: 50,
      "leather scraps": 9,
    },
  },
  {
    name: "Iron Sword",
    level: 4,
    set: "iron",
    stats: {
      slash: 73,
      knockback: 50,
      backstab: "2x",
      "parry force": 35,
      durability: 350,
      weight: 0.8,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 5,
    },
    materials: {
      wood: 8,
      iron: 80,
      "leather scraps": 15,
    },
  },
  {
    name: "Silver Sword",
    level: 1,
    set: "silver",
    stats: {
      slash: 75,
      spirit: 30,
      knockback: 40,
      backstab: "3x",
      "parry force": 20,
      durability: 200,
      weight: 1,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      wood: 2,
      silver: 40,
      "leather scraps": 3,
      iron: 5,
    },
  },
  {
    name: "Silver Sword",
    level: 2,
    set: "silver",
    stats: {
      slash: 81,
      spirit: 35,
      knockback: 40,
      backstab: "3x",
      "parry force": 25,
      durability: 250,
      weight: 1,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      wood: 3,
      silver: 60,
      "leather scraps": 1,
      iron: 8,
    },
  },
  {
    name: "Silver Sword",
    level: 3,
    set: "silver",
    stats: {
      slash: 87,
      spirit: 40,
      knockback: 40,
      backstab: "3x",
      "parry force": 30,
      durability: 300,
      weight: 1,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 5,
    },
    materials: {
      wood: 5,
      silver: 100,
      "leather scraps": 3,
      iron: 14,
    },
  },
  {
    name: "Silver Sword",
    level: 4,
    set: "silver",
    stats: {
      slash: 93,
      spirit: 45,
      knockback: 40,
      backstab: "3x",
      "parry force": 35,
      durability: 350,
      weight: 1,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 6,
    },
    materials: {
      wood: 8,
      silver: 160,
      "leather scraps": 6,
      iron: 23,
    },
  },
  {
    name: "Blackmetal Sword",
    level: 1,
    set: "black metal",
    stats: {
      slash: 95,
      knockback: 40,
      backstab: "3x",
      "parry force": 20,
      durability: 200,
      weight: 0.8,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      "fine wood": 2,
      "black metal": 20,
      "linen thread": 5,
    },
  },
  {
    name: "Blackmetal Sword",
    level: 2,
    set: "black metal",
    stats: {
      slash: 101,
      knockback: 40,
      backstab: "3x",
      "parry force": 25,
      durability: 250,
      weight: 0.8,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 5,
    },
    materials: {
      "fine wood": 2,
      "black metal": 30,
      "linen thread": 10,
    },
  },
  {
    name: "Blackmetal Sword",
    level: 3,
    set: "black metal",
    stats: {
      slash: 107,
      knockback: 40,
      backstab: "3x",
      "parry force": 30,
      durability: 300,
      weight: 0.8,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 6,
    },
    materials: {
      "fine wood": 2,
      "black metal": 50,
      "linen thread": 20,
    },
  },
  {
    name: "Blackmetal Sword",
    level: 4,
    set: "black metal",
    stats: {
      slash: 113,
      knockback: 40,
      backstab: "3x",
      "parry force": 35,
      durability: 350,
      weight: 0.8,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 7,
    },
    materials: {
      "fine wood": 2,
      "black metal": 80,
      "linen thread": 35,
    },
  },
  {
    name: "Mistwalker",
    level: 1,
    set: "eitr",
    stats: {
      slash: 75,
      frost: 40,
      spirit: 0,
      knockback: 40,
      backstab: "3x",
      durability: 200,
      weight: 0.8,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 1,
    },
    materials: {
      "fine wood": 3,
      iron: 15,
      "refined eitr": 10,
      wisp: 3,
    },
  },
  {
    name: "Mistwalker",
    level: 2,
    set: "eitr",
    stats: {
      slash: 75,
      frost: 46,
      spirit: 5,
      knockback: 40,
      backstab: "3x",
      durability: 250,
      weight: 0.8,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 2,
    },
    materials: {
      "fine wood": 3,
      iron: 25,
      "refined eitr": 15,
      wisp: 4,
    },
  },
  {
    name: "Mistwalker",
    level: 3,
    set: "eitr",
    stats: {
      slash: 75,
      frost: 52,
      spirit: 10,
      knockback: 40,
      backstab: "3x",
      durability: 300,
      weight: 0.8,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 3,
    },
    materials: {
      "fine wood": 3,
      iron: 45,
      "refined eitr": 25,
      wisp: 6,
    },
  },
  // {
  //   name: "Mistwalker",
  //   level: 4,
  //   set: "eitr",
  //   stats: {
  //     slash: 75,
  //     frost: 58,
  //     spirit: 15,
  //     knockback: 40,
  //     backstab: "3x",
  //     durability: 350,
  //     weight: 0.8,
  //   },
  //   effects: {
  //     movementSpeed: "-5%",
  //   },
  //   station: {
  //     "black forge": 4,
  //   },
  //   materials: {
  //     "fine wood": 3,
  //     iron: 75,
  //     "refined eitr": 40,
  //     wisp: 9,
  //   },
  // },
  {
    name: "Krom",
    level: 1,
    set: "iron",
    stats: {
      slash: 150,
      knockback: 55,
      backstab: "3x",
      durability: 200,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 1,
    },
    materials: {
      iron: 30,
      bronze: 20,
      "scale hide": 5,
    },
  },
  {
    name: "Krom",
    level: 2,
    set: "iron",
    stats: {
      slash: 156,
      knockback: 55,
      backstab: "3x",
      durability: 250,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 2,
    },
    materials: {
      iron: 45,
      bronze: 30,
      "scale hide": 10,
    },
  },
  {
    name: "Krom",
    level: 3,
    set: "iron",
    stats: {
      slash: 162,
      knockback: 55,
      backstab: "3x",
      durability: 300,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 3,
    },
    materials: {
      iron: 75,
      bronze: 50,
      "scale hide": 20,
    },
  },
  // {
  //   name: "Krom",
  //   level: 4,
  //   set: "iron",
  //   stats: {
  //     slash: 168,
  //     knockback: 55,
  //     backstab: "3x",
  //     durability: 350,
  //     weight: 4,
  //   },
  //   effects: {
  //     movementSpeed: "-5%",
  //   },
  //   station: {
  //     "black forge": 4,
  //   },
  //   materials: {
  //     iron: 120,
  //     bronze: 80,
  //     "scale hide": 35,
  //   },
  // },
];

export const swords: Array<Omit<Weapon, "id">> = swordsList.map((weapon) => ({
  ...weapon,
  group: "weapons",
  type: "sword",
}));
