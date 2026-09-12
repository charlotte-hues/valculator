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
      bronze: 36,
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
      iron: 135,
      "leather scraps": 9,
    },
  },
  {
    name: "Black Metal Atgeir",
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
    name: "Black Metal Atgeir",
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
    name: "Black Metal Atgeir",
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
    name: "Black Metal Atgeir",
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
      "black metal": 135,
      "linen thread": 40,
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
      "refined eitr": 15,
      silver: 5,
      mandible: 2,
    },
  },
  {
    name: "Himminafl",
    level: 2,
    set: "silver",
    stats: {
      pierce: 85,
      lightning: 46,
      knockback: 30,
      backstab: "3x",
      stagger: 131,
      durability: 225,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 2,
    },
    materials: {
      "yggdrasil wood": 10,
      "refined eitr": 30,
      silver: 10,
      mandible: 4,
    },
  },
  {
    name: "Himminafl",
    level: 3,
    set: "silver",
    stats: {
      pierce: 85,
      lightning: 52,
      knockback: 30,
      backstab: "3x",
      stagger: 137,
      durability: 275,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 3,
    },
    materials: {
      "yggdrasil wood": 10,
      "refined eitr": 60,
      silver: 20,
      mandible: 8,
    },
  },
  {
    name: "Himminafl",
    level: 4,
    set: "silver",
    stats: {
      pierce: 85,
      lightning: 58,
      knockback: 30,
      backstab: "3x",
      stagger: 143,
      durability: 325,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "yggdrasil wood": 10,
      "refined eitr": 120,
      silver: 40,
      mandible: 16,
    },
  },
  {
    name: "Wooden Atgeir",
    level: 1,
    set: "wood",
    stats: {
      pierce: 1,
      knockback: 40,
      backstab: "3x",
      "parry force": 40,
      durability: 175,
      weight: 2.5,
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
    name: "Wooden Atgeir",
    level: 2,
    set: "wood",
    stats: {
      pierce: 2,
      knockback: 40,
      backstab: "3x",
      "parry force": 45,
      durability: 225,
      weight: 2.5,
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
    name: "Wooden Atgeir",
    level: 3,
    set: "wood",
    stats: {
      pierce: 3,
      knockback: 40,
      backstab: "3x",
      "parry force": 50,
      durability: 275,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 3,
    },
    materials: {
      "fine wood": 33,
      "core wood": 8,
      wood: 8,
    },
  },
  {
    name: "Wooden Atgeir",
    level: 4,
    set: "wood",
    stats: {
      pierce: 4,
      knockback: 40,
      backstab: "3x",
      "parry force": 55,
      durability: 325,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 4,
    },
    materials: {
      "fine wood": 73,
      "core wood": 16,
      wood: 12,
    },
  },
  {
    name: "Frostfire Atgeir",
    level: 1,
    set: "bloodgold",
    stats: {
      pierce: 148,
      fire: 12,
      frost: 88,
      knockback: 30,
      backstab: "3x",
      "parry force": 40,
      durability: 400,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord atgeir": 1,
      bloodgold: 20,
      "frostfire essence": 1,
    },
  },
  {
    name: "Frostfire Atgeir",
    level: 2,
    set: "bloodgold",
    stats: {
      pierce: 158,
      fire: 15,
      frost: 91,
      knockback: 30,
      backstab: "3x",
      "parry force": 40,
      durability: 450,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord atgeir": 1,
      bloodgold: 30,
      "frostfire essence": 2,
    },
  },
  {
    name: "Frostfire Atgeir",
    level: 3,
    set: "bloodgold",
    stats: {
      pierce: 168,
      fire: 18,
      frost: 94,
      knockback: 30,
      backstab: "3x",
      "parry force": 40,
      durability: 500,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord atgeir": 1,
      bloodgold: 50,
      "frostfire essence": 4,
    },
  },
  {
    name: "Frostfire Atgeir",
    level: 4,
    set: "bloodgold",
    stats: {
      pierce: 178,
      fire: 21,
      frost: 97,
      knockback: 30,
      backstab: "3x",
      "parry force": 40,
      durability: 550,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord atgeir": 1,
      bloodgold: 90,
      "frostfire essence": 8,
    },
  },
  {
    name: "Nord Atgeir",
    level: 1,
    set: "bloodgold",
    stats: {
      pierce: 182,
      knockback: 30,
      backstab: "3x",
      "parry force": 40,
      durability: 400,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      bloodgold: 20,
      "mould: nord atgeir": 1,
      timberwood: 10,
    },
  },
  {
    name: "Nord Atgeir",
    level: 2,
    set: "bloodgold",
    stats: {
      pierce: 192,
      knockback: 30,
      backstab: "3x",
      "parry force": 40,
      durability: 450,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      bloodgold: 30,
      "mould: nord atgeir": 1,
      timberwood: 15,
    },
  },
  {
    name: "Nord Atgeir",
    level: 3,
    set: "bloodgold",
    stats: {
      pierce: 202,
      knockback: 30,
      backstab: "3x",
      "parry force": 40,
      durability: 500,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      bloodgold: 50,
      "mould: nord atgeir": 1,
      timberwood: 25,
    },
  },
  {
    name: "Nord Atgeir",
    level: 4,
    set: "bloodgold",
    stats: {
      pierce: 212,
      knockback: 30,
      backstab: "3x",
      "parry force": 40,
      durability: 550,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      bloodgold: 90,
      "mould: nord atgeir": 1,
      timberwood: 45,
    },
  },
  {
    name: "Thunderblood Atgeir",
    level: 1,
    set: "bloodgold",
    stats: {
      pierce: 192,
      lightning: 45,
      knockback: 30,
      backstab: "3x",
      "parry force": 40,
      durability: 400,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord atgeir": 1,
      bloodgold: 20,
      "thunderblood essence": 1,
    },
  },
  {
    name: "Thunderblood Atgeir",
    level: 2,
    set: "bloodgold",
    stats: {
      pierce: 202,
      lightning: 50,
      knockback: 30,
      backstab: "3x",
      "parry force": 40,
      durability: 450,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord atgeir": 1,
      bloodgold: 30,
      "thunderblood essence": 2,
    },
  },
  {
    name: "Thunderblood Atgeir",
    level: 3,
    set: "bloodgold",
    stats: {
      pierce: 212,
      lightning: 55,
      knockback: 30,
      backstab: "3x",
      "parry force": 40,
      durability: 500,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord atgeir": 1,
      bloodgold: 50,
      "thunderblood essence": 4,
    },
  },
  {
    name: "Thunderblood Atgeir",
    level: 4,
    set: "bloodgold",
    stats: {
      pierce: 222,
      lightning: 60,
      knockback: 30,
      backstab: "3x",
      "parry force": 40,
      durability: 550,
      weight: 2.5,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "nord atgeir": 1,
      bloodgold: 90,
      "thunderblood essence": 8,
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
