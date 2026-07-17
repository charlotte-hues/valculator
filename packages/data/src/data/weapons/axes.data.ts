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
    name: "Blackmetal Battleaxe",
    level: 1,
    set: "black metal",
    stats: {
      slash: 110,
      chop: 60,
      knockback: 70,
      backstab: "3x",
      "parry force": 70,
      durability: 200,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-15%",
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
    name: "Blackmetal Battleaxe",
    level: 2,
    set: "black metal",
    stats: {
      slash: 116,
      chop: 62.5,
      knockback: 70,
      backstab: "3x",
      "parry force": 75,
      durability: 250,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-15%",
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
    name: "Blackmetal Battleaxe",
    level: 3,
    set: "black metal",
    stats: {
      slash: 122,
      chop: 65,
      knockback: 70,
      backstab: "3x",
      "parry force": 80,
      durability: 300,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-15%",
    },
    station: {
      forge: 6,
    },
    materials: {
      "fine wood": 10,
      "black metal": 60,
      "linen thread": 15,
    },
  },
  {
    name: "Blackmetal Battleaxe",
    level: 4,
    set: "black metal",
    stats: {
      slash: 128,
      chop: 67.5,
      knockback: 70,
      backstab: "3x",
      "parry force": 85,
      durability: 350,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-15%",
    },
    station: {
      forge: 7,
    },
    materials: {
      "fine wood": 10,
      "black metal": 75,
      "linen thread": 20,
    },
  },
  {
    name: "Jotun Bane",
    level: 1,
    set: "other",
    stats: {
      slash: 80,
      chop: 70,
      poison: 40,
      knockback: 60,
      backstab: "3x",
      "parry force": 20,
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
    set: "other",
    stats: {
      slash: 85,
      chop: 73,
      poison: 40,
      knockback: 60,
      backstab: "3x",
      "parry force": 25,
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
    set: "other",
    stats: {
      slash: 90,
      chop: 76,
      poison: 40,
      knockback: 60,
      backstab: "3x",
      "parry force": 30,
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
      iron: 35,
      bilebag: 5,
      "refined eitr": 12,
    },
  },
  {
    name: "Jotun Bane",
    level: 4,
    set: "other",
    stats: {
      slash: 95,
      chop: 79,
      poison: 40,
      knockback: 60,
      backstab: "3x",
      "parry force": 35,
      durability: 325,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "yggdrasil wood": 5,
      iron: 45,
      bilebag: 6,
      "refined eitr": 13,
    },
  },
  {
    name: "Skull Splittur",
    level: 1,
    set: "other",
    stats: {
      slash: 130,
      chop: 70,
      knockback: 70,
      backstab: "3x",
      "parry force": 70,
      durability: 200,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-15%",
    },
    station: {
      "black forge": 1,
    },
    materials: {
      "fine wood": 10,
      "black metal": 30,
      "linen thread": 5,
    },
  },
  {
    name: "Skull Splittur",
    level: 2,
    set: "other",
    stats: {
      slash: 136,
      chop: 72.5,
      knockback: 70,
      backstab: "3x",
      "parry force": 75,
      durability: 250,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-15%",
    },
    station: {
      "black forge": 2,
    },
    materials: {
      "fine wood": 10,
      "black metal": 45,
      "linen thread": 10,
    },
  },
  {
    name: "Skull Splittur",
    level: 3,
    set: "other",
    stats: {
      slash: 142,
      chop: 75,
      knockback: 70,
      backstab: "3x",
      "parry force": 80,
      durability: 300,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-15%",
    },
    station: {
      "black forge": 3,
    },
    materials: {
      "fine wood": 10,
      "black metal": 60,
      "linen thread": 15,
    },
  },
  {
    name: "Skull Splittur",
    level: 4,
    set: "other",
    stats: {
      slash: 148,
      chop: 77.5,
      knockback: 70,
      backstab: "3x",
      "parry force": 85,
      durability: 350,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-15%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "fine wood": 10,
      "black metal": 75,
      "linen thread": 20,
    },
  },
  {
    name: "Berserkir Axes",
    level: 1,
    set: "flametal",
    stats: {
      slash: 140,
      chop: 80,
      knockback: 20,
      backstab: "3x",
      "parry force": 20,
      durability: 175,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 3,
    },
    materials: {
      "asksvin hide": 3,
      "charred bone": 15,
      flametal: 24,
    },
  },
  {
    name: "Berserkir Axes",
    level: 2,
    set: "flametal",
    stats: {
      slash: 145,
      chop: 83,
      knockback: 20,
      backstab: "3x",
      "parry force": 25,
      durability: 225,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "asksvin hide": 4,
      "charred bone": 15,
      flametal: 39,
    },
  },
  {
    name: "Berserkir Axes",
    level: 3,
    set: "flametal",
    stats: {
      slash: 150,
      chop: 86,
      knockback: 20,
      backstab: "3x",
      "parry force": 30,
      durability: 275,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "asksvin hide": 6,
      "charred bone": 15,
      flametal: 69,
    },
  },
  {
    name: "Berserkir Axes",
    level: 4,
    set: "flametal",
    stats: {
      slash: 155,
      chop: 89,
      knockback: 20,
      backstab: "3x",
      "parry force": 35,
      durability: 325,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "asksvin hide": 9,
      "charred bone": 15,
      flametal: 114,
    },
  },
  {
    name: "Bleeding Berserkir Axes",
    level: 1,
    set: "flametal",
    stats: {
      slash: 140,
      chop: 80,
      knockback: 20,
      backstab: "3x",
      "parry force": 20,
      durability: 175,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      bloodstone: 1,
      "asksvin hide": 3,
      "charred bone": 15,
      flametal: 29,
    },
  },
  {
    name: "Bleeding Berserkir Axes",
    level: 2,
    set: "flametal",
    stats: {
      slash: 145,
      chop: 83,
      knockback: 20,
      backstab: "3x",
      "parry force": 25,
      durability: 225,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      bloodstone: 2,
      "asksvin hide": 3,
      "charred bone": 15,
      flametal: 34,
    },
  },
  {
    name: "Bleeding Berserkir Axes",
    level: 3,
    set: "flametal",
    stats: {
      slash: 150,
      chop: 86,
      knockback: 20,
      backstab: "3x",
      "parry force": 30,
      durability: 275,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      bloodstone: 4,
      "asksvin hide": 3,
      "charred bone": 15,
      flametal: 44,
    },
  },
  {
    name: "Bleeding Berserkir Axes",
    level: 4,
    set: "flametal",
    stats: {
      slash: 155,
      chop: 89,
      knockback: 20,
      backstab: "3x",
      "parry force": 35,
      durability: 325,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      bloodstone: 7,
      "asksvin hide": 3,
      "charred bone": 15,
      flametal: 59,
    },
  },
  {
    name: "Thundering Berserkir Axes",
    level: 1,
    set: "flametal",
    stats: {
      slash: 140,
      chop: 80,
      lightning: 10,
      knockback: 20,
      backstab: "3x",
      "parry force": 20,
      durability: 175,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "asksvin hide": 3,
      "charred bone": 15,
      flametal: 29,
      iolite: 1,
    },
  },
  {
    name: "Thundering Berserkir Axes",
    level: 2,
    set: "flametal",
    stats: {
      slash: 145,
      chop: 83,
      lightning: 10,
      knockback: 20,
      backstab: "3x",
      "parry force": 25,
      durability: 225,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "asksvin hide": 3,
      "charred bone": 15,
      flametal: 34,
      iolite: 2,
    },
  },
  {
    name: "Thundering Berserkir Axes",
    level: 3,
    set: "flametal",
    stats: {
      slash: 150,
      chop: 86,
      lightning: 10,
      knockback: 20,
      backstab: "3x",
      "parry force": 30,
      durability: 275,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "asksvin hide": 3,
      "charred bone": 15,
      flametal: 44,
      iolite: 4,
    },
  },
  {
    name: "Thundering Berserkir Axes",
    level: 4,
    set: "flametal",
    stats: {
      slash: 155,
      chop: 89,
      lightning: 10,
      knockback: 20,
      backstab: "3x",
      "parry force": 35,
      durability: 325,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "asksvin hide": 3,
      "charred bone": 15,
      flametal: 59,
      iolite: 7,
    },
  },
  {
    name: "Primal Berserkir Axes",
    level: 1,
    set: "flametal",
    stats: {
      slash: 140,
      chop: 80,
      poison: 10,
      knockback: 20,
      backstab: "3x",
      "parry force": 20,
      durability: 175,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      jade: 1,
      "asksvin hide": 3,
      "charred bone": 15,
      flametal: 29,
    },
  },
  {
    name: "Primal Berserkir Axes",
    level: 2,
    set: "flametal",
    stats: {
      slash: 145,
      chop: 83,
      poison: 10,
      knockback: 20,
      backstab: "3x",
      "parry force": 25,
      durability: 225,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      jade: 2,
      "asksvin hide": 3,
      "charred bone": 15,
      flametal: 34,
    },
  },
  {
    name: "Primal Berserkir Axes",
    level: 3,
    set: "flametal",
    stats: {
      slash: 150,
      chop: 86,
      poison: 10,
      knockback: 20,
      backstab: "3x",
      "parry force": 30,
      durability: 275,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      jade: 4,
      "asksvin hide": 3,
      "charred bone": 15,
      flametal: 44,
    },
  },
  {
    name: "Primal Berserkir Axes",
    level: 4,
    set: "flametal",
    stats: {
      slash: 155,
      chop: 89,
      poison: 10,
      knockback: 20,
      backstab: "3x",
      "parry force": 35,
      durability: 325,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      jade: 7,
      "asksvin hide": 3,
      "charred bone": 15,
      flametal: 59,
    },
  },
  {
    name: "Wooden Battleaxe",
    level: 1,
    set: "wood",
    stats: {
      slash: 1,
      chop: 1,
      knockback: 70,
      backstab: "3x",
      "parry force": 70,
      durability: 200,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-15%",
    },
    station: {
      workbench: 1,
    },
    materials: {
      "fine wood": 3,
      "core wood": 2,
      wood: 5,
    },
  },
  {
    name: "Wooden Battleaxe",
    level: 2,
    set: "wood",
    stats: {
      slash: 2,
      chop: 2,
      knockback: 70,
      backstab: "3x",
      "parry force": 75,
      durability: 250,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-15%",
    },
    station: {
      workbench: 2,
    },
    materials: {
      "fine wood": 13,
      "core wood": 4,
      wood: 6,
    },
  },
  {
    name: "Wooden Battleaxe",
    level: 3,
    set: "wood",
    stats: {
      slash: 3,
      chop: 3,
      knockback: 70,
      backstab: "3x",
      "parry force": 80,
      durability: 300,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-15%",
    },
    station: {
      workbench: 3,
    },
    materials: {
      "fine wood": 23,
      "core wood": 6,
      wood: 7,
    },
  },
  {
    name: "Wooden Battleaxe",
    level: 4,
    set: "wood",
    stats: {
      slash: 4,
      chop: 4,
      knockback: 70,
      backstab: "3x",
      "parry force": 85,
      durability: 350,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-15%",
    },
    station: {
      workbench: 4,
    },
    materials: {
      "fine wood": 33,
      "core wood": 8,
      wood: 8,
    },
  },
];

export const axes: Array<Omit<Weapon, "id">> = axesList.map((weapon) => ({
  ...weapon,
  group: "weapons",
  type: "axes",
}));
