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
      wood: 45,
      "leather scraps": 36,
      "deer hide": 7,
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
      "fine wood": 45,
      "core wood": 45,
      "deer hide": 16,
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
      "fine wood": 45,
      iron: 90,
      feathers: 45,
      "deer hide": 16,
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
      "ancient bark": 45,
      silver: 90,
      "deer hide": 16,
      guck: 24,
    },
  },
  {
    name: "Spinesnap",
    level: 1,
    set: "eitr",
    stats: {
      pierce: 72,
      spirit: 5,
      knockback: 25,
      backstab: "3x",
      durability: 100,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 1,
    },
    materials: {
      "bone fragments": 40,
      "fine wood": 10,
      "refined eitr": 10,
    },
  },
  {
    name: "Spinesnap",
    level: 2,
    set: "eitr",
    stats: {
      pierce: 76,
      spirit: 10,
      knockback: 25,
      backstab: "3x",
      durability: 150,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 2,
    },
    materials: {
      "bone fragments": 60,
      "fine wood": 15,
      "refined eitr": 10,
    },
  },
  {
    name: "Spinesnap",
    level: 3,
    set: "eitr",
    stats: {
      pierce: 80,
      spirit: 15,
      knockback: 25,
      backstab: "3x",
      durability: 200,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 3,
    },
    materials: {
      "bone fragments": 100,
      "fine wood": 25,
      "refined eitr": 10,
    },
  },
  {
    name: "Spinesnap",
    level: 4,
    set: "eitr",
    stats: {
      pierce: 84,
      spirit: 20,
      knockback: 25,
      backstab: "3x",
      durability: 250,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "bone fragments": 180,
      "fine wood": 45,
      "refined eitr": 10,
    },
  },
  {
    name: "Ash Fang",
    level: 1,
    set: "flametal",
    stats: {
      pierce: 82,
      knockback: 25,
      backstab: "3x",
      durability: 100,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 3,
    },
    materials: {
      flametal: 5,
      "charred bone": 16,
      "bonemaw tooth": 5,
      "ash wood": 10,
    },
  },
  {
    name: "Ash Fang",
    level: 2,
    set: "flametal",
    stats: {
      pierce: 86,
      spirit: 5,
      knockback: 25,
      backstab: "3x",
      durability: 150,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      flametal: 10,
      "charred bone": 26,
      "bonemaw tooth": 10,
      "ash wood": 15,
    },
  },
  {
    name: "Ash Fang",
    level: 3,
    set: "flametal",
    stats: {
      pierce: 90,
      spirit: 10,
      knockback: 25,
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
      "charred bone": 46,
      "bonemaw tooth": 20,
      "ash wood": 25,
    },
  },
  {
    name: "Ash Fang",
    level: 4,
    set: "flametal",
    stats: {
      pierce: 94,
      spirit: 15,
      knockback: 25,
      backstab: "3x",
      durability: 250,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      flametal: 40,
      "charred bone": 86,
      "bonemaw tooth": 40,
      "ash wood": 45,
    },
  },
  {
    name: "Blood Fang",
    level: 1,
    set: "flametal",
    stats: {
      pierce: 82,
      knockback: 25,
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
      bloodstone: 1,
      flametal: 5,
      "ash fang": 1,
    },
  },
  {
    name: "Blood Fang",
    level: 2,
    set: "flametal",
    stats: {
      pierce: 86,
      spirit: 5,
      knockback: 25,
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
      bloodstone: 2,
      flametal: 10,
      "ash fang": 1,
    },
  },
  {
    name: "Blood Fang",
    level: 3,
    set: "flametal",
    stats: {
      pierce: 90,
      spirit: 10,
      knockback: 25,
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
      flametal: 20,
      "ash fang": 1,
    },
  },
  {
    name: "Blood Fang",
    level: 4,
    set: "flametal",
    stats: {
      pierce: 94,
      spirit: 15,
      knockback: 25,
      backstab: "3x",
      durability: 250,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      bloodstone: 8,
      flametal: 40,
      "ash fang": 1,
    },
  },
  {
    name: "Root Fang",
    level: 1,
    set: "flametal",
    stats: {
      pierce: 82,
      lightning: 10,
      knockback: 25,
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
      flametal: 5,
      jade: 1,
      "ash fang": 1,
    },
  },
  {
    name: "Root Fang",
    level: 2,
    set: "flametal",
    stats: {
      pierce: 86,
      lightning: 10,
      spirit: 5,
      knockback: 25,
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
      flametal: 10,
      jade: 2,
      "ash fang": 1,
    },
  },
  {
    name: "Root Fang",
    level: 3,
    set: "flametal",
    stats: {
      pierce: 90,
      lightning: 10,
      spirit: 10,
      knockback: 25,
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
      jade: 4,
      "ash fang": 1,
    },
  },
  {
    name: "Root Fang",
    level: 4,
    set: "flametal",
    stats: {
      pierce: 94,
      lightning: 10,
      spirit: 15,
      knockback: 25,
      backstab: "3x",
      durability: 250,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      flametal: 40,
      jade: 8,
      "ash fang": 1,
    },
  },
  {
    name: "Storm Fang",
    level: 1,
    set: "flametal",
    stats: {
      pierce: 82,
      poison: 10,
      knockback: 25,
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
      flametal: 5,
      iolite: 1,
      "ash fang": 1,
    },
  },
  {
    name: "Storm Fang",
    level: 2,
    set: "flametal",
    stats: {
      pierce: 86,
      poison: 10,
      spirit: 5,
      knockback: 25,
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
      flametal: 10,
      iolite: 2,
      "ash fang": 1,
    },
  },
  {
    name: "Storm Fang",
    level: 3,
    set: "flametal",
    stats: {
      pierce: 90,
      poison: 10,
      spirit: 10,
      knockback: 25,
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
      iolite: 4,
      "ash fang": 1,
    },
  },
  {
    name: "Storm Fang",
    level: 4,
    set: "flametal",
    stats: {
      pierce: 94,
      poison: 10,
      spirit: 15,
      knockback: 25,
      backstab: "3x",
      durability: 250,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      flametal: 40,
      iolite: 8,
      "ash fang": 1,
    },
  },
  {
    name: "Frostfire Bow",
    level: 1,
    set: "bloodgold",
    stats: {
      pierce: 68,
      fire: 12,
      frost: 88,
      spirit: 10,
      knockback: 25,
      backstab: "3x",
      durability: 400,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord bow": 1,
      bloodgold: 20,
      "frostfire essence": 1,
    },
  },
  {
    name: "Frostfire Bow",
    level: 2,
    set: "bloodgold",
    stats: {
      pierce: 76,
      fire: 15,
      frost: 91,
      spirit: 15,
      knockback: 25,
      backstab: "3x",
      durability: 450,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord bow": 1,
      bloodgold: 30,
      "frostfire essence": 2,
    },
  },
  {
    name: "Frostfire Bow",
    level: 3,
    set: "bloodgold",
    stats: {
      pierce: 84,
      fire: 18,
      frost: 94,
      spirit: 20,
      knockback: 25,
      backstab: "3x",
      durability: 500,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord bow": 1,
      bloodgold: 50,
      "frostfire essence": 4,
    },
  },
  {
    name: "Frostfire Bow",
    level: 4,
    set: "bloodgold",
    stats: {
      pierce: 92,
      fire: 21,
      frost: 97,
      spirit: 25,
      knockback: 25,
      backstab: "3x",
      durability: 550,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord bow": 1,
      bloodgold: 90,
      "frostfire essence": 8,
    },
  },
  {
    name: "Frostfire Crossbow",
    level: 1,
    set: "bloodgold",
    stats: {
      pierce: 232,
      chop: 180,
      fire: 12,
      frost: 88,
      knockback: 210,
      backstab: "3x",
      durability: 300,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord crossbow": 1,
      bloodgold: 20,
      "frostfire essence": 1,
    },
  },
  {
    name: "Frostfire Crossbow",
    level: 2,
    set: "bloodgold",
    stats: {
      pierce: 240,
      chop: 185,
      fire: 15,
      frost: 91,
      knockback: 210,
      backstab: "3x",
      durability: 350,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord crossbow": 1,
      bloodgold: 30,
      "frostfire essence": 2,
    },
  },
  {
    name: "Frostfire Crossbow",
    level: 3,
    set: "bloodgold",
    stats: {
      pierce: 248,
      chop: 190,
      fire: 18,
      frost: 94,
      knockback: 210,
      backstab: "3x",
      durability: 400,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord crossbow": 1,
      bloodgold: 50,
      "frostfire essence": 4,
    },
  },
  {
    name: "Frostfire Crossbow",
    level: 4,
    set: "bloodgold",
    stats: {
      pierce: 256,
      chop: 195,
      fire: 21,
      frost: 97,
      knockback: 210,
      backstab: "3x",
      durability: 450,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord crossbow": 1,
      bloodgold: 90,
      "frostfire essence": 8,
    },
  },
  {
    name: "Nord Bow",
    level: 1,
    set: "bloodgold",
    stats: {
      pierce: 100,
      spirit: 10,
      knockback: 25,
      backstab: "3x",
      durability: 400,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      bloodgold: 20,
      "mould: nord bow": 1,
      timberwood: 10,
    },
  },
  {
    name: "Nord Bow",
    level: 2,
    set: "bloodgold",
    stats: {
      pierce: 108,
      spirit: 22,
      knockback: 25,
      backstab: "3x",
      durability: 450,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      bloodgold: 30,
      "mould: nord bow": 1,
      timberwood: 15,
    },
  },
  {
    name: "Nord Bow",
    level: 3,
    set: "bloodgold",
    stats: {
      pierce: 116,
      spirit: 34,
      knockback: 25,
      backstab: "3x",
      durability: 500,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      bloodgold: 50,
      "mould: nord bow": 1,
      timberwood: 25,
    },
  },
  {
    name: "Nord Bow",
    level: 4,
    set: "bloodgold",
    stats: {
      pierce: 124,
      spirit: 46,
      knockback: 25,
      backstab: "3x",
      durability: 550,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      bloodgold: 90,
      "mould: nord bow": 1,
      timberwood: 45,
    },
  },
  {
    name: "Nord Crossbow",
    level: 1,
    set: "bloodgold",
    stats: {
      pierce: 264,
      chop: 180,
      knockback: 210,
      backstab: "3x",
      durability: 300,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      bloodgold: 20,
      "mould: nord crossbow": 1,
      timberwood: 10,
    },
  },
  {
    name: "Nord Crossbow",
    level: 2,
    set: "bloodgold",
    stats: {
      pierce: 272,
      chop: 185,
      knockback: 210,
      backstab: "3x",
      durability: 350,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      bloodgold: 30,
      "mould: nord crossbow": 1,
      timberwood: 15,
    },
  },
  {
    name: "Nord Crossbow",
    level: 3,
    set: "bloodgold",
    stats: {
      pierce: 280,
      chop: 190,
      knockback: 210,
      backstab: "3x",
      durability: 400,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      bloodgold: 50,
      "mould: nord crossbow": 1,
      timberwood: 25,
    },
  },
  {
    name: "Nord Crossbow",
    level: 4,
    set: "bloodgold",
    stats: {
      pierce: 288,
      chop: 195,
      knockback: 210,
      backstab: "3x",
      durability: 450,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      bloodgold: 90,
      "mould: nord crossbow": 1,
      timberwood: 45,
    },
  },
  {
    name: "Thunderblood Bow",
    level: 1,
    set: "bloodgold",
    stats: {
      pierce: 110,
      lightning: 45,
      spirit: 10,
      knockback: 25,
      backstab: "3x",
      durability: 400,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord bow": 1,
      bloodgold: 20,
      "thunderblood essence": 1,
    },
  },
  {
    name: "Thunderblood Bow",
    level: 2,
    set: "bloodgold",
    stats: {
      pierce: 118,
      lightning: 50,
      spirit: 15,
      knockback: 25,
      backstab: "3x",
      durability: 450,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord bow": 1,
      bloodgold: 30,
      "thunderblood essence": 2,
    },
  },
  {
    name: "Thunderblood Bow",
    level: 3,
    set: "bloodgold",
    stats: {
      pierce: 126,
      lightning: 55,
      spirit: 20,
      knockback: 25,
      backstab: "3x",
      durability: 500,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord bow": 1,
      bloodgold: 50,
      "thunderblood essence": 4,
    },
  },
  {
    name: "Thunderblood Bow",
    level: 4,
    set: "bloodgold",
    stats: {
      pierce: 134,
      lightning: 60,
      spirit: 25,
      knockback: 25,
      backstab: "3x",
      durability: 550,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord bow": 1,
      bloodgold: 90,
      "thunderblood essence": 8,
    },
  },
  {
    name: "Thunderblood Crossbow",
    level: 1,
    set: "bloodgold",
    stats: {
      pierce: 274,
      chop: 180,
      lightning: 45,
      knockback: 210,
      backstab: "3x",
      durability: 300,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord crossbow": 1,
      bloodgold: 20,
      "thunderblood essence": 1,
    },
  },
  {
    name: "Thunderblood Crossbow",
    level: 2,
    set: "bloodgold",
    stats: {
      pierce: 282,
      chop: 185,
      lightning: 50,
      knockback: 210,
      backstab: "3x",
      durability: 350,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord crossbow": 1,
      bloodgold: 30,
      "thunderblood essence": 2,
    },
  },
  {
    name: "Thunderblood Crossbow",
    level: 3,
    set: "bloodgold",
    stats: {
      pierce: 290,
      chop: 190,
      lightning: 55,
      knockback: 210,
      backstab: "3x",
      durability: 400,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord crossbow": 1,
      bloodgold: 50,
      "thunderblood essence": 4,
    },
  },
  {
    name: "Thunderblood Crossbow",
    level: 4,
    set: "bloodgold",
    stats: {
      pierce: 298,
      chop: 195,
      lightning: 60,
      knockback: 210,
      backstab: "3x",
      durability: 450,
      weight: 1.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord crossbow": 1,
      bloodgold: 90,
      "thunderblood essence": 8,
    },
  },
];

export const bows: Array<Omit<Weapon, "id">> = bowsList.map((weapon) => ({
  ...weapon,
  group: "weapons",
  type: "bows",
}));
