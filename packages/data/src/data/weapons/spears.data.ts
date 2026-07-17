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
  {
    name: "Carapace Spear",
    level: 1,
    set: "carapace",
    stats: {
      pierce: 115,
      knockback: 20,
      backstab: "3x",
      "parry force": 20,
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
      "yggdrasil wood": 10,
      mandible: 2,
      carapace: 4,
    },
  },
  {
    name: "Carapace Spear",
    level: 2,
    set: "carapace",
    stats: {
      pierce: 121,
      knockback: 20,
      backstab: "3x",
      "parry force": 25,
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
      "yggdrasil wood": 15,
      mandible: 3,
      carapace: 8,
    },
  },
  {
    name: "Carapace Spear",
    level: 3,
    set: "carapace",
    stats: {
      pierce: 127,
      knockback: 20,
      backstab: "3x",
      "parry force": 30,
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
      "yggdrasil wood": 25,
      mandible: 5,
      carapace: 16,
    },
  },
  {
    name: "Carapace Spear",
    level: 4,
    set: "carapace",
    stats: {
      pierce: 133,
      knockback: 20,
      backstab: "3x",
      "parry force": 35,
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
      "yggdrasil wood": 40,
      mandible: 8,
      carapace: 28,
    },
  },
  {
    name: "Splitnir",
    level: 1,
    set: "flametal",
    stats: {
      pierce: 135,
      knockback: 20,
      backstab: "3x",
      "parry force": 20,
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
      "asksvin hide": 2,
      flametal: 6,
      "bonemaw tooth": 3,
      ashwood: 10,
    },
  },
  {
    name: "Splitnir",
    level: 2,
    set: "flametal",
    stats: {
      pierce: 141,
      knockback: 20,
      backstab: "3x",
      "parry force": 25,
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
      "asksvin hide": 3,
      flametal: 12,
      "bonemaw tooth": 6,
      ashwood: 15,
    },
  },
  {
    name: "Splitnir",
    level: 3,
    set: "flametal",
    stats: {
      pierce: 147,
      knockback: 20,
      backstab: "3x",
      "parry force": 30,
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
      "asksvin hide": 5,
      flametal: 24,
      "bonemaw tooth": 12,
      ashwood: 25,
    },
  },
  {
    name: "Splitnir",
    level: 4,
    set: "flametal",
    stats: {
      pierce: 153,
      knockback: 20,
      backstab: "3x",
      "parry force": 35,
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
      "asksvin hide": 8,
      flametal: 42,
      "bonemaw tooth": 21,
      ashwood: 40,
    },
  },
  {
    name: "Splitnir the Bleeding",
    level: 1,
    set: "flametal",
    stats: {
      pierce: 135,
      knockback: 20,
      backstab: "3x",
      "parry force": 20,
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
      flametal: 12,
      "asksvin hide": 2,
      "bonemaw tooth": 3,
      ashwood: 10,
    },
  },
  {
    name: "Splitnir the Bleeding",
    level: 2,
    set: "flametal",
    stats: {
      pierce: 141,
      knockback: 20,
      backstab: "3x",
      "parry force": 25,
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
      flametal: 18,
      "asksvin hide": 2,
      "bonemaw tooth": 3,
      ashwood: 10,
    },
  },
  {
    name: "Splitnir the Bleeding",
    level: 3,
    set: "flametal",
    stats: {
      pierce: 147,
      knockback: 20,
      backstab: "3x",
      "parry force": 30,
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
      flametal: 30,
      "asksvin hide": 2,
      "bonemaw tooth": 3,
      ashwood: 10,
    },
  },
  {
    name: "Splitnir the Bleeding",
    level: 4,
    set: "flametal",
    stats: {
      pierce: 153,
      knockback: 20,
      backstab: "3x",
      "parry force": 35,
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
      bloodstone: 7,
      flametal: 48,
      "asksvin hide": 2,
      "bonemaw tooth": 3,
      ashwood: 10,
    },
  },
  {
    name: "Splitnir the Storming",
    level: 1,
    set: "flametal",
    stats: {
      pierce: 135,
      lightning: 10,
      knockback: 20,
      backstab: "3x",
      "parry force": 20,
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
      iolite: 1,
      flametal: 12,
      "asksvin hide": 2,
      "bonemaw tooth": 3,
      ashwood: 10,
    },
  },
  {
    name: "Splitnir the Storming",
    level: 2,
    set: "flametal",
    stats: {
      pierce: 141,
      lightning: 10,
      knockback: 20,
      backstab: "3x",
      "parry force": 25,
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
      iolite: 2,
      flametal: 18,
      "asksvin hide": 2,
      "bonemaw tooth": 3,
      ashwood: 10,
    },
  },
  {
    name: "Splitnir the Storming",
    level: 3,
    set: "flametal",
    stats: {
      pierce: 147,
      lightning: 10,
      knockback: 20,
      backstab: "3x",
      "parry force": 30,
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
      flametal: 30,
      "asksvin hide": 2,
      "bonemaw tooth": 3,
      ashwood: 10,
    },
  },
  {
    name: "Splitnir the Storming",
    level: 4,
    set: "flametal",
    stats: {
      pierce: 153,
      lightning: 10,
      knockback: 20,
      backstab: "3x",
      "parry force": 35,
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
      iolite: 7,
      flametal: 48,
      "asksvin hide": 2,
      "bonemaw tooth": 3,
      ashwood: 10,
    },
  },
  {
    name: "Splitnir the Primal",
    level: 1,
    set: "flametal",
    stats: {
      pierce: 135,
      poison: 10,
      knockback: 20,
      backstab: "3x",
      "parry force": 20,
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
      jade: 1,
      flametal: 12,
      "asksvin hide": 2,
      "bonemaw tooth": 3,
      ashwood: 10,
    },
  },
  {
    name: "Splitnir the Primal",
    level: 2,
    set: "flametal",
    stats: {
      pierce: 141,
      poison: 10,
      knockback: 20,
      backstab: "3x",
      "parry force": 25,
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
      jade: 2,
      flametal: 18,
      "asksvin hide": 2,
      "bonemaw tooth": 3,
      ashwood: 10,
    },
  },
  {
    name: "Splitnir the Primal",
    level: 3,
    set: "flametal",
    stats: {
      pierce: 147,
      poison: 10,
      knockback: 20,
      backstab: "3x",
      "parry force": 30,
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
      flametal: 30,
      "asksvin hide": 2,
      "bonemaw tooth": 3,
      ashwood: 10,
    },
  },
  {
    name: "Splitnir the Primal",
    level: 4,
    set: "flametal",
    stats: {
      pierce: 153,
      poison: 10,
      knockback: 20,
      backstab: "3x",
      "parry force": 35,
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
      jade: 7,
      flametal: 48,
      "asksvin hide": 2,
      "bonemaw tooth": 3,
      ashwood: 10,
    },
  },
  {
    name: "Wooden Spear",
    level: 1,
    set: "wood",
    stats: {
      pierce: 1,
      knockback: 20,
      backstab: "3x",
      "parry force": 20,
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
      "fine wood": 3,
      "core wood": 2,
      wood: 5,
    },
  },
  {
    name: "Wooden Spear",
    level: 2,
    set: "wood",
    stats: {
      pierce: 2,
      knockback: 20,
      backstab: "3x",
      "parry force": 25,
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
      "fine wood": 13,
      "core wood": 4,
      wood: 6,
    },
  },
  {
    name: "Wooden Spear",
    level: 3,
    set: "wood",
    stats: {
      pierce: 3,
      knockback: 20,
      backstab: "3x",
      "parry force": 30,
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
      "fine wood": 23,
      "core wood": 6,
      wood: 7,
    },
  },
  {
    name: "Wooden Spear",
    level: 4,
    set: "wood",
    stats: {
      pierce: 4,
      knockback: 20,
      backstab: "3x",
      "parry force": 35,
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
      "fine wood": 33,
      "core wood": 8,
      wood: 8,
    },
  },
];

export const spears: Array<Omit<Weapon, "id">> = spearsList.map((weapon) => ({
  ...weapon,
  group: "weapons",
  type: "spear",
}));
