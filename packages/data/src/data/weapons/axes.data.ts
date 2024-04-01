import { Weapon } from "../@types/Weapon.types";

const axesList: Array<Omit<Weapon, "group" | "id" | "type">> = [
  {
    name: "Battleaxe",
    level: 1,
    set: "iron",
    stats: {
      slash: 75,
      knockback: 70,
      backstab: "3x",
      "parry force": 70,
      durability: 200,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      forge: 2,
    },
    materials: {
      "ancient bark": 30,
      iron: 35,
      "leather scraps": 4,
    },
  },
  {
    name: "Battleaxe",
    level: 2,
    set: "iron",
    stats: {
      slash: 81,
      knockback: 70,
      backstab: "3x",
      "parry force": 75,
      durability: 250,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      forge: 3,
    },
    materials: {
      "ancient bark": 35,
      iron: 50,
      "leather scraps": 4,
    },
  },
  {
    name: "Battleaxe",
    level: 3,
    set: "iron",
    stats: {
      slash: 87,
      knockback: 70,
      backstab: "3x",
      "parry force": 80,
      durability: 300,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      forge: 4,
    },
    materials: {
      "ancient bark": 45,
      iron: 80,
      "leather scraps": 4,
    },
  },
  {
    name: "Battleaxe",
    level: 4,
    set: "iron",
    stats: {
      slash: 93,
      knockback: 70,
      backstab: "3x",
      "parry force": 85,
      durability: 350,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      forge: 5,
    },
    materials: {
      "ancient bark": 60,
      iron: 125,
      "leather scraps": 4,
    },
  },
  {
    name: "Crystal Battleaxe",
    level: 1,
    set: "crystal",
    stats: {
      slash: 90,
      spirit: 30,
      chop: 50,
      knockback: 140,
      backstab: "3x",
      "parry force": 70,
      durability: 200,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      forge: 3,
    },
    materials: {
      "ancient bark": 40,
      silver: 30,
      crystal: 10,
    },
  },
  {
    name: "Crystal Battleaxe",
    level: 2,
    set: "crystal",
    stats: {
      slash: 96,
      spirit: 30,
      chop: 52.5,
      knockback: 140,
      backstab: "3x",
      "parry force": 70,
      durability: 250,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      forge: 4,
    },
    materials: {
      "ancient bark": 45,
      silver: 45,
      crystal: 10,
    },
  },
  {
    name: "Crystal Battleaxe",
    level: 3,
    set: "crystal",
    stats: {
      slash: 102,
      spirit: 30,
      chop: 55,
      knockback: 140,
      backstab: "3x",
      "parry force": 70,
      durability: 300,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      forge: 5,
    },
    materials: {
      "ancient bark": 55,
      silver: 75,
      crystal: 10,
    },
  },
  {
    name: "Crystal Battleaxe",
    level: 4,
    set: "crystal",
    stats: {
      slash: 108,
      spirit: 30,
      chop: 57.5,
      knockback: 140,
      backstab: "3x",
      "parry force": 70,
      durability: 350,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      forge: 5,
    },
    materials: {
      "ancient bark": 70,
      silver: 120,
      crystal: 10,
    },
  },
  {
    name: "Jotun Bane",
    level: 1,
    set: "elemental",
    stats: {
      slash: 80,
      poison: 40,
      chop: 70,
      backstab: "3x",
      stagger: 80,
      knockback: 50,
      durability: 175,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 1,
    },
    materials: {
      "yggdrasil wood": 5,
      iron: 15,
      bilebag: 3,
      "refined eitr": 10,
    },
  },
  {
    name: "Jotun Bane",
    level: 2,
    set: "elemental",
    stats: {
      slash: 85,
      poison: 40,
      chop: 73,
      backstab: "3x",
      stagger: 80,
      knockback: 50,
      durability: 225,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 2,
    },
    materials: {
      "yggdrasil wood": 5,
      iron: 25,
      bilebag: 4,
      "refined eitr": 11,
    },
  },
  {
    name: "Jotun Bane",
    level: 3,
    set: "elemental",
    stats: {
      slash: 90,
      poison: 40,
      chop: 76,
      backstab: "3x",
      stagger: 80,
      knockback: 50,
      durability: 275,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 3,
    },
    materials: {
      "yggdrasil wood": 5,
      iron: 45,
      bilebag: 6,
      "refined eitr": 13,
    },
  },
  // {
  //   name: "Jotun Bane",
  //   level: 4,
  //   set: "elemental",
  //   stats: {
  //     slash: 95,
  //     poison: 40,
  //     chop: 79,
  //     backstab: "3x",
  //     stagger: 80,
  //     knockback: 50,
  //     durability: 325,
  //     weight: 2,
  //   },
  //   effects: {
  //     movementSpeed: "-5%",
  //   },
  //   station: {
  //     "black forge": 4,
  //   },
  //   materials: {
  //     "yggdrasil wood": 5,
  //     iron: 75,
  //     bilebag: 9,
  //     "refined eitr": 16,
  //   },
  // },
];

export const axes: Array<Omit<Weapon, "id">> = axesList.map((weapon) => ({
  ...weapon,
  group: "weapons",
  type: "axes",
}));
