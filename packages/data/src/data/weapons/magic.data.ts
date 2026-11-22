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
      "yggdrasil wood": 90,
      "refined eitr": 72,
      "surtling core": 18,
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
      "yggdrasil wood": 90,
      "freeze gland": 18,
      "refined eitr": 72,
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
      "bone fragments": 45,
      "refined eitr": 72,
      "skeleton trophy": 18,
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
      "yggdrasil wood": 90,
      "blood clot": 18,
      "refined eitr": 72,
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
      "ash wood": 10,
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
      "ash wood": 15,
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
      "ash wood": 25,
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
      "celestial feather": 24,
      bloodstone: 8,
      flametal: 18,
      "ash wood": 45,
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
      "ash wood": 5,
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
      "ash wood": 8,
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
      "ash wood": 14,
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
      "proustite powder": 15,
      "charred bone": 50,
      "ash wood": 26,
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
      bloodstone: 8,
      "troll trophy": 8,
      flametal: 24,
      "charred bone": 50,
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
      "ash wood": 15,
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
      "ash wood": 20,
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
      "ash wood": 30,
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
      "celestial feather": 24,
      fiddlehead: 24,
      jade: 8,
      "ash wood": 50,
    },
  },
  {
    name: "Echo Spike",
    level: 1,
    set: "bloodgold",
    stats: {
      backstab: "1x",
      "parry force": 20,
      durability: 400,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      bloodgold: 10,
      nornathread: 4,
      "frostfire essence": 1,
    },
  },
  {
    name: "Echo Spike",
    level: 2,
    set: "bloodgold",
    stats: {
      backstab: "1x",
      "parry force": 20,
      durability: 450,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      bloodgold: 15,
      nornathread: 6,
      "frostfire essence": 2,
    },
  },
  {
    name: "Echo Spike",
    level: 3,
    set: "bloodgold",
    stats: {
      backstab: "1x",
      "parry force": 20,
      durability: 500,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      bloodgold: 25,
      nornathread: 10,
      "frostfire essence": 4,
    },
  },
  {
    name: "Echo Spike",
    level: 4,
    set: "bloodgold",
    stats: {
      backstab: "1x",
      "parry force": 20,
      durability: 550,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      bloodgold: 45,
      nornathread: 18,
      "frostfire essence": 8,
    },
  },
  {
    name: "Lightning Strike",
    level: 1,
    set: "bloodgold",
    stats: {
      lightning: 300,
      knockback: 10,
      backstab: "1x",
      "parry force": 20,
      durability: 400,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      bloodgold: 10,
      nornathread: 5,
      "thunderblood essence": 1,
    },
  },
  {
    name: "Lightning Strike",
    level: 2,
    set: "bloodgold",
    stats: {
      lightning: 320,
      knockback: 10,
      backstab: "1x",
      "parry force": 20,
      durability: 450,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      bloodgold: 15,
      nornathread: 7,
      "thunderblood essence": 2,
    },
  },
  {
    name: "Lightning Strike",
    level: 3,
    set: "bloodgold",
    stats: {
      lightning: 340,
      knockback: 10,
      backstab: "1x",
      "parry force": 20,
      durability: 500,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      bloodgold: 25,
      nornathread: 11,
      "thunderblood essence": 4,
    },
  },
  {
    name: "Lightning Strike",
    level: 4,
    set: "bloodgold",
    stats: {
      lightning: 360,
      knockback: 10,
      backstab: "1x",
      "parry force": 20,
      durability: 550,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      bloodgold: 45,
      nornathread: 19,
      "thunderblood essence": 8,
    },
  },
  {
    name: "Northern Vengeance",
    level: 1,
    set: "bloodgold",
    stats: {
      backstab: "1x",
      "parry force": 20,
      durability: 400,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      ice: 10,
      nornathread: 5,
      "hexen trophy": 1,
    },
  },
  {
    name: "Northern Vengeance",
    level: 2,
    set: "bloodgold",
    stats: {
      backstab: "1x",
      "parry force": 20,
      durability: 450,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      ice: 15,
      nornathread: 7,
      "hexen trophy": 1,
    },
  },
  {
    name: "Northern Vengeance",
    level: 3,
    set: "bloodgold",
    stats: {
      backstab: "1x",
      "parry force": 20,
      durability: 500,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      ice: 25,
      nornathread: 11,
      "hexen trophy": 1,
    },
  },
  {
    name: "Northern Vengeance",
    level: 4,
    set: "bloodgold",
    stats: {
      backstab: "1x",
      "parry force": 20,
      durability: 550,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      ice: 45,
      nornathread: 19,
      "hexen trophy": 1,
    },
  },
  {
    name: "Spirit Caller",
    level: 1,
    set: "bloodgold",
    stats: {
      backstab: "1x",
      "parry force": 20,
      durability: 400,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      "frozen branch": 8,
      nornathread: 5,
      "moose trophy": 1,
    },
  },
  {
    name: "Spirit Caller",
    level: 2,
    set: "bloodgold",
    stats: {
      backstab: "1x",
      "parry force": 20,
      durability: 450,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      "frozen branch": 12,
      nornathread: 7,
      "moose trophy": 1,
    },
  },
  {
    name: "Spirit Caller",
    level: 3,
    set: "bloodgold",
    stats: {
      backstab: "1x",
      "parry force": 20,
      durability: 500,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      "frozen branch": 20,
      nornathread: 11,
      "moose trophy": 1,
    },
  },
  {
    name: "Spirit Caller",
    level: 4,
    set: "bloodgold",
    stats: {
      backstab: "1x",
      "parry force": 20,
      durability: 550,
      weight: 0.3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "frozen branch": 36,
      nornathread: 19,
      "moose trophy": 1,
    },
  },
];

export const magic: Array<Omit<Weapon, "id">> = magicList.map((weapon) => ({
  ...weapon,
  group: "weapons",
  type: "magic",
}));
