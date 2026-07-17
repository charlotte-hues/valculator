import { Weapon } from "../@types/Weapon.types";

const magicList: Array<Omit<Weapon, "group" | "id" | "type">> = [
  {
    name: "Staff of Embers",
    level: 1,
    set: "elemental",
    stats: {
      blunt: 40,
      fire: 60,
      knockback: 30,
      backstab: "3x",
      "parry force": 20,
      durability: 200,
      weight: 1,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      "galdr table": 1,
    },
    materials: {
      "yggdrasil wood": 20,
      "refined eitr": 16,
      "surtling core": 4,
    },
  },
  {
    name: "Staff of Embers",
    level: 2,
    set: "elemental",
    stats: {
      blunt: 40,
      fire: 60,
      knockback: 30,
      backstab: "3x",
      "parry force": 25,
      durability: 250,
      weight: 1,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      "galdr table": 2,
    },
    materials: {
      "yggdrasil wood": 30,
      "refined eitr": 24,
      "surtling core": 6,
    },
  },
  {
    name: "Staff of Embers",
    level: 3,
    set: "elemental",
    stats: {
      blunt: 40,
      fire: 60,
      knockback: 30,
      backstab: "3x",
      "parry force": 30,
      durability: 300,
      weight: 1,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      "yggdrasil wood": 50,
      "refined eitr": 40,
      "surtling core": 10,
    },
  },
  {
    name: "Staff of Embers",
    level: 4,
    set: "elemental",
    stats: {
      blunt: 40,
      fire: 60,
      knockback: 30,
      backstab: "3x",
      "parry force": 35,
      durability: 350,
      weight: 1,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "yggdrasil wood": 80,
      "refined eitr": 64,
      "surtling core": 16,
    },
  },
  {
    name: "Staff of Frost",
    level: 1,
    set: "elemental",
    stats: {
      frost: 30,
      knockback: 30,
      backstab: "3x",
      "parry force": 20,
      durability: 200,
      weight: 1,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      "galdr table": 1,
    },
    materials: {
      "yggdrasil wood": 20,
      "freeze gland": 4,
      "refined eitr": 16,
    },
  },
  {
    name: "Staff of Frost",
    level: 2,
    set: "elemental",
    stats: {
      frost: 32,
      knockback: 30,
      backstab: "3x",
      "parry force": 25,
      durability: 250,
      weight: 1,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      "galdr table": 2,
    },
    materials: {
      "yggdrasil wood": 30,
      "freeze gland": 6,
      "refined eitr": 24,
    },
  },
  {
    name: "Staff of Frost",
    level: 3,
    set: "elemental",
    stats: {
      frost: 34,
      knockback: 30,
      backstab: "3x",
      "parry force": 30,
      durability: 300,
      weight: 1,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      "yggdrasil wood": 50,
      "freeze gland": 10,
      "refined eitr": 40,
    },
  },
  {
    name: "Staff of Frost",
    level: 4,
    set: "elemental",
    stats: {
      frost: 36,
      knockback: 30,
      backstab: "3x",
      "parry force": 35,
      durability: 350,
      weight: 1,
    },
    effects: {
      movementSpeed: "-10%",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "yggdrasil wood": 80,
      "freeze gland": 16,
      "refined eitr": 64,
    },
  },
  {
    name: "Dead Raiser",
    level: 1,
    set: "other",
    stats: {
      knockback: 30,
      backstab: "3x",
      "parry force": 20,
      durability: 200,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 1,
    },
    materials: {
      "bone fragments": 10,
      "refined eitr": 16,
      "skeleton trophy": 4,
    },
  },
  {
    name: "Dead Raiser",
    level: 2,
    set: "other",
    stats: {
      knockback: 30,
      backstab: "3x",
      "parry force": 25,
      durability: 250,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 2,
    },
    materials: {
      "bone fragments": 15,
      "refined eitr": 24,
      "skeleton trophy": 6,
    },
  },
  {
    name: "Dead Raiser",
    level: 3,
    set: "other",
    stats: {
      knockback: 30,
      backstab: "3x",
      "parry force": 30,
      durability: 300,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      "bone fragments": 25,
      "refined eitr": 40,
      "skeleton trophy": 10,
    },
  },
  {
    name: "Dead Raiser",
    level: 4,
    set: "other",
    stats: {
      knockback: 30,
      backstab: "3x",
      "parry force": 35,
      durability: 350,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "bone fragments": 40,
      "refined eitr": 64,
      "skeleton trophy": 16,
    },
  },
  {
    name: "Staff of Protection",
    level: 1,
    set: "other",
    stats: {
      knockback: 30,
      backstab: "3x",
      "parry force": 20,
      durability: 200,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 1,
    },
    materials: {
      "yggdrasil wood": 20,
      "blood clot": 4,
      "refined eitr": 16,
    },
  },
  {
    name: "Staff of Protection",
    level: 2,
    set: "other",
    stats: {
      knockback: 30,
      backstab: "3x",
      "parry force": 25,
      durability: 250,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 2,
    },
    materials: {
      "yggdrasil wood": 30,
      "blood clot": 6,
      "refined eitr": 24,
    },
  },
  {
    name: "Staff of Protection",
    level: 3,
    set: "other",
    stats: {
      knockback: 30,
      backstab: "3x",
      "parry force": 30,
      durability: 300,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      "yggdrasil wood": 50,
      "blood clot": 10,
      "refined eitr": 40,
    },
  },
  {
    name: "Staff of Protection",
    level: 4,
    set: "other",
    stats: {
      knockback: 30,
      backstab: "3x",
      "parry force": 35,
      durability: 350,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "yggdrasil wood": 80,
      "blood clot": 16,
      "refined eitr": 64,
    },
  },
  {
    name: "Dundr",
    level: 1,
    set: "flametal",
    stats: {
      lightning: 20,
      knockback: 210,
      "parry force": 20,
      durability: 200,
      weight: 1,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 2,
    },
    materials: {
      "celestial feather": 3,
      bloodstone: 1,
      flametal: 4,
      ashwood: 10,
    },
  },
  {
    name: "Dundr",
    level: 2,
    set: "flametal",
    stats: {
      lightning: 23,
      knockback: 210,
      "parry force": 25,
      durability: 250,
      weight: 1,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      "celestial feather": 6,
      bloodstone: 2,
      flametal: 6,
      ashwood: 15,
    },
  },
  {
    name: "Dundr",
    level: 3,
    set: "flametal",
    stats: {
      lightning: 26,
      knockback: 210,
      "parry force": 30,
      durability: 300,
      weight: 1,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "celestial feather": 12,
      bloodstone: 4,
      flametal: 10,
      ashwood: 25,
    },
  },
  {
    name: "Dundr",
    level: 4,
    set: "flametal",
    stats: {
      lightning: 29,
      knockback: 210,
      "parry force": 35,
      durability: 350,
      weight: 1,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "celestial feather": 21,
      bloodstone: 7,
      flametal: 16,
      ashwood: 40,
    },
  },
  {
    name: "Staff of Fracturing",
    level: 1,
    set: "flametal",
    stats: {
      blunt: 12,
      fire: 12,
      knockback: 100,
      "parry force": 20,
      durability: 200,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 2,
    },
    materials: {
      "proustite powder": 8,
      "charred bone": 15,
      ashwood: 5,
    },
  },
  {
    name: "Staff of Fracturing",
    level: 2,
    set: "flametal",
    stats: {
      blunt: 12,
      fire: 18,
      knockback: 100,
      "parry force": 25,
      durability: 250,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      "proustite powder": 9,
      "charred bone": 20,
      ashwood: 8,
    },
  },
  {
    name: "Staff of Fracturing",
    level: 3,
    set: "flametal",
    stats: {
      blunt: 12,
      fire: 24,
      knockback: 100,
      "parry force": 30,
      durability: 300,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "proustite powder": 11,
      "charred bone": 30,
      ashwood: 14,
    },
  },
  {
    name: "Staff of Fracturing",
    level: 4,
    set: "flametal",
    stats: {
      blunt: 12,
      fire: 30,
      knockback: 100,
      "parry force": 35,
      durability: 350,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "proustite powder": 14,
      "charred bone": 45,
      ashwood: 23,
    },
  },
  {
    name: "Trollstav",
    level: 1,
    set: "flametal",
    stats: {
      knockback: 30,
      backstab: "3x",
      "parry force": 20,
      durability: 200,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 2,
    },
    materials: {
      bloodstone: 1,
      "troll trophy": 1,
      flametal: 3,
      "charred bone": 15,
    },
  },
  {
    name: "Trollstav",
    level: 2,
    set: "flametal",
    stats: {
      knockback: 30,
      backstab: "3x",
      "parry force": 25,
      durability: 250,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      bloodstone: 2,
      "troll trophy": 2,
      flametal: 6,
      "charred bone": 20,
    },
  },
  {
    name: "Trollstav",
    level: 3,
    set: "flametal",
    stats: {
      knockback: 30,
      backstab: "3x",
      "parry force": 30,
      durability: 300,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      bloodstone: 4,
      "troll trophy": 4,
      flametal: 12,
      "charred bone": 30,
    },
  },
  {
    name: "Trollstav",
    level: 4,
    set: "flametal",
    stats: {
      knockback: 30,
      backstab: "3x",
      "parry force": 35,
      durability: 350,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      bloodstone: 7,
      "troll trophy": 7,
      flametal: 21,
      "charred bone": 45,
    },
  },
  {
    name: "Staff of the Wild",
    level: 1,
    set: "flametal",
    stats: {
      blunt: 20,
      poison: 20,
      knockback: 30,
      backstab: "3x",
      "parry force": 20,
      durability: 200,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 2,
    },
    materials: {
      "celestial feather": 3,
      fiddlehead: 10,
      jade: 1,
      ashwood: 15,
    },
  },
  {
    name: "Staff of the Wild",
    level: 2,
    set: "flametal",
    stats: {
      blunt: 20,
      poison: 20,
      knockback: 30,
      backstab: "3x",
      "parry force": 25,
      durability: 250,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      "celestial feather": 6,
      fiddlehead: 12,
      jade: 2,
      ashwood: 20,
    },
  },
  {
    name: "Staff of the Wild",
    level: 3,
    set: "flametal",
    stats: {
      blunt: 20,
      poison: 20,
      knockback: 30,
      backstab: "3x",
      "parry force": 30,
      durability: 300,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "celestial feather": 12,
      fiddlehead: 16,
      jade: 4,
      ashwood: 30,
    },
  },
  {
    name: "Staff of the Wild",
    level: 4,
    set: "flametal",
    stats: {
      blunt: 20,
      poison: 20,
      knockback: 30,
      backstab: "3x",
      "parry force": 35,
      durability: 350,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "celestial feather": 21,
      fiddlehead: 22,
      jade: 7,
      ashwood: 45,
    },
  },
];

export const magic: Array<Omit<Weapon, "id">> = magicList.map((weapon) => ({
  ...weapon,
  group: "weapons",
  type: "magic",
}));
