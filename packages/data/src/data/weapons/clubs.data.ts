import { Weapon } from "../@types/Weapon.types";

const clubsList: Array<Omit<Weapon, "group" | "id" | "type">> = [
  {
    name: "Club",
    level: 1,
    set: "wood",
    stats: {
      blunt: 12,
      knockback: 25,
      backstab: "3x",
      "parry force": 20,
      durability: 100,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 1,
    },
    materials: {
      wood: 6,
    },
  },
  {
    name: "Club",
    level: 2,
    set: "wood",
    stats: {
      blunt: 18,
      knockback: 25,
      backstab: "3x",
      "parry force": 25,
      durability: 150,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 2,
    },
    materials: {
      wood: 6,
      "bone fragments": 5,
    },
  },
  {
    name: "Club",
    level: 3,
    set: "wood",
    stats: {
      blunt: 24,
      knockback: 25,
      backstab: "3x",
      "parry force": 30,
      durability: 200,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 3,
    },
    materials: {
      wood: 6,
      "bone fragments": 15,
    },
  },
  {
    name: "Club",
    level: 4,
    set: "wood",
    stats: {
      blunt: 30,
      knockback: 25,
      backstab: "3x",
      "parry force": 35,
      durability: 250,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      workbench: 4,
    },
    materials: {
      wood: 6,
      "bone fragments": 30,
    },
  },
  {
    name: "Bronze Mace",
    level: 1,
    set: "bronze",
    stats: {
      blunt: 35,
      knockback: 80,
      backstab: "3x",
      "parry force": 30,
      durability: 200,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 1,
    },
    materials: {
      wood: 4,
      bronze: 8,
      "leather scraps": 3,
    },
  },
  {
    name: "Bronze Mace",
    level: 2,
    set: "bronze",
    stats: {
      blunt: 41,
      knockback: 80,
      backstab: "3x",
      "parry force": 35,
      durability: 250,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 2,
    },
    materials: {
      wood: 4,
      bronze: 12,
      "leather scraps": 3,
    },
  },
  {
    name: "Bronze Mace",
    level: 3,
    set: "bronze",
    stats: {
      blunt: 47,
      knockback: 80,
      backstab: "3x",
      "parry force": 40,
      durability: 300,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      wood: 4,
      bronze: 20,
      "leather scraps": 3,
    },
  },
  {
    name: "Bronze Mace",
    level: 4,
    set: "bronze",
    stats: {
      blunt: 53,
      knockback: 80,
      backstab: "3x",
      "parry force": 45,
      durability: 350,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      wood: 4,
      bronze: 32,
      "leather scraps": 3,
    },
  },
  {
    name: "Iron Mace",
    level: 1,
    set: "iron",
    stats: {
      blunt: 55,
      knockback: 80,
      backstab: "3x",
      "parry force": 30,
      durability: 200,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 2,
    },
    materials: {
      wood: 4,
      iron: 20,
      "leather scraps": 3,
    },
  },
  {
    name: "Iron Mace",
    level: 2,
    set: "iron",
    stats: {
      blunt: 61,
      knockback: 80,
      backstab: "3x",
      "parry force": 35,
      durability: 250,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      wood: 4,
      iron: 30,
      "leather scraps": 3,
    },
  },
  {
    name: "Iron Mace",
    level: 3,
    set: "iron",
    stats: {
      blunt: 67,
      knockback: 80,
      backstab: "3x",
      "parry force": 40,
      durability: 300,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      wood: 4,
      iron: 50,
      "leather scraps": 3,
    },
  },
  {
    name: "Iron Mace",
    level: 4,
    set: "iron",
    stats: {
      blunt: 73,
      knockback: 80,
      backstab: "3x",
      "parry force": 45,
      durability: 350,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 5,
    },
    materials: {
      wood: 4,
      iron: 80,
      "leather scraps": 3,
    },
  },
  {
    name: "Porcupine",
    level: 1,
    set: "needle",
    stats: {
      blunt: 50,
      pierce: 45,
      knockback: 80,
      backstab: "3x",
      "parry force": 30,
      durability: 150,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      "fine wood": 5,
      iron: 20,
      needle: 5,
      "linen thread": 10,
    },
  },
  {
    name: "Porcupine",
    level: 2,
    set: "needle",
    stats: {
      blunt: 50,
      pierce: 51,
      knockback: 80,
      backstab: "3x",
      "parry force": 35,
      durability: 200,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 5,
    },
    materials: {
      "fine wood": 5,
      iron: 22,
      needle: 7,
      "linen thread": 10,
    },
  },
  {
    name: "Porcupine",
    level: 3,
    set: "needle",
    stats: {
      blunt: 50,
      pierce: 57,
      knockback: 80,
      backstab: "3x",
      "parry force": 40,
      durability: 250,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 6,
    },
    materials: {
      "fine wood": 5,
      iron: 26,
      needle: 11,
      "linen thread": 10,
    },
  },
  {
    name: "Porcupine",
    level: 4,
    set: "needle",
    stats: {
      blunt: 50,
      pierce: 63,
      knockback: 80,
      backstab: "3x",
      "parry force": 45,
      durability: 300,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 7,
    },
    materials: {
      "fine wood": 5,
      iron: 32,
      needle: 17,
      "linen thread": 10,
    },
  },
  {
    name: "Frostner",
    level: 1,
    set: "silver",
    stats: {
      blunt: 35,
      frost: 40,
      spirit: 20,
      knockback: 120,
      backstab: "3x",
      "parry force": 30,
      durability: 200,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      "ancient bark": 10,
      silver: 30,
      "ymir flesh": 5,
      "freeze gland": 5,
    },
  },
  {
    name: "Frostner",
    level: 2,
    set: "silver",
    stats: {
      blunt: 35,
      frost: 46,
      spirit: 20,
      knockback: 120,
      backstab: "3x",
      "parry force": 35,
      durability: 250,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      "ancient bark": 10,
      silver: 45,
      "ymir flesh": 5,
      "freeze gland": 5,
    },
  },
  {
    name: "Frostner",
    level: 3,
    set: "silver",
    stats: {
      blunt: 35,
      frost: 52,
      spirit: 20,
      knockback: 120,
      backstab: "3x",
      "parry force": 40,
      durability: 300,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 5,
    },
    materials: {
      "ancient bark": 10,
      silver: 75,
      "ymir flesh": 5,
      "freeze gland": 5,
    },
  },
  {
    name: "Frostner",
    level: 4,
    set: "silver",
    stats: {
      blunt: 35,
      frost: 58,
      spirit: 20,
      knockback: 120,
      backstab: "3x",
      "parry force": 45,
      durability: 350,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 6,
    },
    materials: {
      "ancient bark": 10,
      silver: 120,
      "ymir flesh": 5,
      "freeze gland": 5,
    },
  },
  {
    name: "Stagbreaker",
    level: 1,
    set: "other",
    stats: {
      blunt: 20,
      knockback: 150,
      backstab: "2x",
      "parry force": 50,
      durability: 100,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      workbench: 2,
    },
    materials: {
      "core wood": 20,
      "deer trophy": 5,
      "leather scraps": 2,
    },
  },
  {
    name: "Stagbreaker",
    level: 2,
    set: "other",
    stats: {
      blunt: 26,
      knockback: 150,
      backstab: "2x",
      "parry force": 60,
      durability: 150,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      workbench: 3,
    },
    materials: {
      "core wood": 25,
      "deer trophy": 7,
      "leather scraps": 3,
      "bone fragments": 10,
    },
  },
  {
    name: "Stagbreaker",
    level: 3,
    set: "other",
    stats: {
      blunt: 32,
      knockback: 150,
      backstab: "2x",
      "parry force": 70,
      durability: 200,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      workbench: 4,
    },
    materials: {
      "core wood": 35,
      "deer trophy": 11,
      "leather scraps": 5,
      "bone fragments": 30,
    },
  },
  {
    name: "Stagbreaker",
    level: 4,
    set: "other",
    stats: {
      blunt: 38,
      knockback: 150,
      backstab: "2x",
      "parry force": 80,
      durability: 250,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      workbench: 5,
    },
    materials: {
      "core wood": 50,
      "deer trophy": 17,
      "leather scraps": 8,
      "bone fragments": 60,
    },
  },
  {
    name: "Iron Sledge",
    level: 1,
    set: "iron",
    stats: {
      blunt: 55,
      knockback: 200,
      backstab: "2x",
      "parry force": 50,
      durability: 100,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      forge: 2,
    },
    materials: {
      "ancient bark": 10,
      iron: 30,
      "ymir flesh": 4,
      "draugr trophy": 1,
    },
  },
  {
    name: "Iron Sledge",
    level: 2,
    set: "iron",
    stats: {
      blunt: 61,
      knockback: 200,
      backstab: "2x",
      "parry force": 60,
      durability: 150,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      forge: 3,
    },
    materials: {
      "ancient bark": 12,
      iron: 45,
      "ymir flesh": 6,
      "draugr trophy": 1,
    },
  },
  {
    name: "Iron Sledge",
    level: 3,
    set: "iron",
    stats: {
      blunt: 67,
      knockback: 200,
      backstab: "2x",
      "parry force": 70,
      durability: 200,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      forge: 4,
    },
    materials: {
      "ancient bark": 16,
      iron: 75,
      "ymir flesh": 10,
      "draugr trophy": 1,
    },
  },
  {
    name: "Iron Sledge",
    level: 4,
    set: "iron",
    stats: {
      blunt: 73,
      knockback: 200,
      backstab: "2x",
      "parry force": 80,
      durability: 250,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      forge: 5,
    },
    materials: {
      "ancient bark": 22,
      iron: 120,
      "ymir flesh": 16,
      "draugr trophy": 1,
    },
  },
  {
    name: "Demolisher",
    level: 1,
    set: "iron",
    stats: {
      blunt: 145,
      durability: 100,
      knockback: 210,
      backstab: "2x",
      stagger: 290,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      "black forge": 1,
    },
    materials: {
      "yggdrasil wood": 10,
      iron: 20,
      "refined eitr": 10,
    },
  },
  {
    name: "Demolisher",
    level: 2,
    set: "iron",
    stats: {
      blunt: 151,
      durability: 150,
      knockback: 210,
      backstab: "2x",
      stagger: 310,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      "black forge": 2,
    },
    materials: {
      "yggdrasil wood": 12,
      iron: 35,
      "refined eitr": 12,
    },
  },
  {
    name: "Demolisher",
    level: 3,
    set: "iron",
    stats: {
      blunt: 157,
      durability: 200,
      knockback: 210,
      backstab: "2x",
      stagger: 314,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      "black forge": 3,
    },
    materials: {
      "yggdrasil wood": 16,
      iron: 65,
      "refined eitr": 16,
    },
  },
  {
    name: "Demolisher",
    level: 4,
    set: "iron",
    stats: {
      blunt: 163,
      durability: 250,
      knockback: 210,
      backstab: "2x",
      stagger: 326,
      weight: 4,
    },
    effects: {
      movementSpeed: "-20%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "yggdrasil wood": 20,
      iron: 110,
      "refined eitr": 22,
    },
  },
  {
    name: "Flametal Mace",
    level: 1,
    set: "flametal",
    stats: {
      blunt: 135,
      knockback: 100,
      backstab: "3x",
      "parry force": 20,
      durability: 150,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 3,
    },
    materials: {
      sulfur: 5,
      "asksvin hide": 3,
      flametal: 15,
      "charred bone": 10,
    },
  },
  {
    name: "Flametal Mace",
    level: 2,
    set: "flametal",
    stats: {
      blunt: 141,
      knockback: 100,
      backstab: "3x",
      "parry force": 25,
      durability: 200,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      sulfur: 8,
      "asksvin hide": 5,
      flametal: 23,
      "charred bone": 15,
    },
  },
  {
    name: "Flametal Mace",
    level: 3,
    set: "flametal",
    stats: {
      blunt: 147,
      knockback: 100,
      backstab: "3x",
      "parry force": 30,
      durability: 250,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      sulfur: 11,
      "asksvin hide": 7,
      flametal: 31,
      "charred bone": 20,
    },
  },
  {
    name: "Flametal Mace",
    level: 4,
    set: "flametal",
    stats: {
      blunt: 153,
      knockback: 100,
      backstab: "3x",
      "parry force": 35,
      durability: 300,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      sulfur: 14,
      "asksvin hide": 9,
      flametal: 39,
      "charred bone": 25,
    },
  },
  {
    name: "Bloodgeon",
    level: 1,
    set: "flametal",
    stats: {
      blunt: 135,
      knockback: 100,
      backstab: "3x",
      "parry force": 20,
      durability: 150,
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
      sulfur: 5,
      "asksvin hide": 3,
      flametal: 23,
      "charred bone": 10,
    },
  },
  {
    name: "Bloodgeon",
    level: 2,
    set: "flametal",
    stats: {
      blunt: 141,
      knockback: 100,
      backstab: "3x",
      "parry force": 25,
      durability: 200,
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
      sulfur: 5,
      "asksvin hide": 3,
      flametal: 31,
      "charred bone": 10,
    },
  },
  {
    name: "Bloodgeon",
    level: 3,
    set: "flametal",
    stats: {
      blunt: 147,
      knockback: 100,
      backstab: "3x",
      "parry force": 30,
      durability: 250,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      bloodstone: 3,
      sulfur: 5,
      "asksvin hide": 3,
      flametal: 39,
      "charred bone": 10,
    },
  },
  {
    name: "Bloodgeon",
    level: 4,
    set: "flametal",
    stats: {
      blunt: 153,
      knockback: 100,
      backstab: "3x",
      "parry force": 35,
      durability: 300,
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
      sulfur: 5,
      "asksvin hide": 3,
      flametal: 47,
      "charred bone": 10,
    },
  },
  {
    name: "Storm Star",
    level: 1,
    set: "flametal",
    stats: {
      blunt: 135,
      lightning: 10,
      knockback: 100,
      backstab: "3x",
      "parry force": 20,
      durability: 150,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      sulfur: 5,
      "asksvin hide": 3,
      flametal: 23,
      "charred bone": 10,
      iolite: 1,
    },
  },
  {
    name: "Storm Star",
    level: 2,
    set: "flametal",
    stats: {
      blunt: 140,
      lightning: 10,
      knockback: 100,
      backstab: "3x",
      "parry force": 25,
      durability: 200,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      sulfur: 5,
      "asksvin hide": 3,
      flametal: 31,
      "charred bone": 10,
      iolite: 2,
    },
  },
  {
    name: "Storm Star",
    level: 3,
    set: "flametal",
    stats: {
      blunt: 145,
      lightning: 10,
      knockback: 100,
      backstab: "3x",
      "parry force": 30,
      durability: 250,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      sulfur: 5,
      "asksvin hide": 3,
      flametal: 39,
      "charred bone": 10,
      iolite: 3,
    },
  },
  {
    name: "Storm Star",
    level: 4,
    set: "flametal",
    stats: {
      blunt: 150,
      lightning: 10,
      knockback: 100,
      backstab: "3x",
      "parry force": 35,
      durability: 300,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      sulfur: 5,
      "asksvin hide": 3,
      flametal: 47,
      "charred bone": 10,
      iolite: 4,
    },
  },
  {
    name: "Klossen",
    level: 1,
    set: "flametal",
    stats: {
      blunt: 135,
      poison: 10,
      knockback: 100,
      backstab: "3x",
      "parry force": 20,
      durability: 150,
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
      sulfur: 5,
      "asksvin hide": 3,
      flametal: 23,
      "charred bone": 10,
    },
  },
  {
    name: "Klossen",
    level: 2,
    set: "flametal",
    stats: {
      pierce: 5,
      blunt: 135,
      poison: 10,
      knockback: 100,
      backstab: "3x",
      "parry force": 25,
      durability: 200,
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
      sulfur: 5,
      "asksvin hide": 3,
      flametal: 31,
      "charred bone": 10,
    },
  },
  {
    name: "Klossen",
    level: 3,
    set: "flametal",
    stats: {
      pierce: 10,
      blunt: 135,
      poison: 10,
      knockback: 100,
      backstab: "3x",
      "parry force": 30,
      durability: 250,
      weight: 2,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      jade: 3,
      sulfur: 5,
      "asksvin hide": 3,
      flametal: 39,
      "charred bone": 10,
    },
  },
  {
    name: "Klossen",
    level: 4,
    set: "flametal",
    stats: {
      pierce: 15,
      blunt: 135,
      poison: 10,
      knockback: 100,
      backstab: "3x",
      "parry force": 35,
      durability: 300,
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
      sulfur: 5,
      "asksvin hide": 3,
      flametal: 47,
      "charred bone": 10,
    },
  },
  {
    name: "Wooden Mace",
    level: 1,
    set: "wood",
    stats: {
      blunt: 1,
      knockback: 80,
      backstab: "3x",
      "parry force": 30,
      durability: 200,
      weight: 2,
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
    name: "Wooden Mace",
    level: 2,
    set: "wood",
    stats: {
      blunt: 2,
      knockback: 80,
      backstab: "3x",
      "parry force": 35,
      durability: 250,
      weight: 2,
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
    name: "Wooden Mace",
    level: 3,
    set: "wood",
    stats: {
      blunt: 3,
      knockback: 80,
      backstab: "3x",
      "parry force": 40,
      durability: 300,
      weight: 2,
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
    name: "Wooden Mace",
    level: 4,
    set: "wood",
    stats: {
      blunt: 4,
      knockback: 80,
      backstab: "3x",
      "parry force": 45,
      durability: 350,
      weight: 2,
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
  {
    name: "Wooden Sledge",
    level: 1,
    set: "wood",
    stats: {
      blunt: 1,
      knockback: 210,
      backstab: "2x",
      "parry force": 50,
      durability: 100,
      weight: 4,
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
    name: "Wooden Sledge",
    level: 2,
    set: "wood",
    stats: {
      blunt: 2,
      knockback: 210,
      backstab: "2x",
      "parry force": 60,
      durability: 150,
      weight: 4,
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
    name: "Wooden Sledge",
    level: 3,
    set: "wood",
    stats: {
      blunt: 3,
      knockback: 210,
      backstab: "2x",
      "parry force": 70,
      durability: 200,
      weight: 4,
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
    name: "Wooden Sledge",
    level: 4,
    set: "wood",
    stats: {
      blunt: 4,
      knockback: 210,
      backstab: "2x",
      "parry force": 80,
      durability: 250,
      weight: 4,
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

export const clubs: Array<Omit<Weapon, "id">> = clubsList.map((weapon) => ({
  ...weapon,
  group: "weapons",
  type: "club",
}));
