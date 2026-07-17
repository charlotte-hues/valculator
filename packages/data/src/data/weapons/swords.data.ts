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
      "leather scraps": 4,
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
      "leather scraps": 6,
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
      "leather scraps": 9,
      iron: 23,
    },
  },
  {
    name: "Black Metal Sword",
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
    name: "Black Metal Sword",
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
    name: "Black Metal Sword",
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
    name: "Black Metal Sword",
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
      "black forge": 1,
    },
    materials: {
      iron: 15,
      wisp: 3,
      "fine wood": 3,
      "refined eitr": 10,
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
      "parry force": 25,
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
      iron: 25,
      wisp: 4,
      "fine wood": 3,
      "refined eitr": 15,
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
      "parry force": 30,
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
      iron: 35,
      wisp: 5,
      "fine wood": 3,
      "refined eitr": 20,
    },
  },
  {
    name: "Mistwalker",
    level: 4,
    set: "eitr",
    stats: {
      slash: 75,
      frost: 58,
      spirit: 15,
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
      "black forge": 4,
    },
    materials: {
      iron: 45,
      wisp: 6,
      "fine wood": 3,
      "refined eitr": 25,
    },
  },
  {
    name: "Krom",
    level: 1,
    set: "iron",
    stats: {
      slash: 150,
      knockback: 55,
      backstab: "3x",
      "parry force": 50,
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
      "scale hide": 5,
      bronze: 20,
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
      "parry force": 60,
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
      "scale hide": 10,
      bronze: 30,
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
      "parry force": 70,
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
      iron: 60,
      "scale hide": 15,
      bronze: 40,
    },
  },
  {
    name: "Krom",
    level: 4,
    set: "iron",
    stats: {
      slash: 168,
      knockback: 55,
      backstab: "3x",
      "parry force": 80,
      durability: 350,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      iron: 75,
      "scale hide": 20,
      bronze: 50,
    },
  },
  {
    name: "Nidhögg",
    level: 1,
    set: "flametal",
    stats: {
      slash: 135,
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
      "black forge": 3,
    },
    materials: {
      "asksvin hide": 2,
      "charred bone": 3,
      flametal: 12,
    },
  },
  {
    name: "Nidhögg",
    level: 2,
    set: "flametal",
    stats: {
      slash: 141,
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
      "black forge": 4,
    },
    materials: {
      "asksvin hide": 4,
      "charred bone": 3,
      flametal: 22,
    },
  },
  {
    name: "Nidhögg",
    level: 3,
    set: "flametal",
    stats: {
      slash: 147,
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
      "black forge": 5,
    },
    materials: {
      "asksvin hide": 8,
      "charred bone": 3,
      flametal: 42,
    },
  },
  {
    name: "Nidhögg",
    level: 4,
    set: "flametal",
    stats: {
      slash: 153,
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
      "black forge": 5,
    },
    materials: {
      "asksvin hide": 14,
      "charred bone": 3,
      flametal: 72,
    },
  },
  {
    name: "Nidhögg the Bleeding",
    level: 1,
    set: "flametal",
    stats: {
      slash: 135,
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
      "black forge": 4,
    },
    materials: {
      bloodstone: 1,
      "asksvin hide": 2,
      "charred bone": 3,
      flametal: 18,
    },
  },
  {
    name: "Nidhögg the Bleeding",
    level: 2,
    set: "flametal",
    stats: {
      slash: 141,
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
      "black forge": 5,
    },
    materials: {
      bloodstone: 2,
      "asksvin hide": 2,
      "charred bone": 3,
      flametal: 24,
    },
  },
  {
    name: "Nidhögg the Bleeding",
    level: 3,
    set: "flametal",
    stats: {
      slash: 147,
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
      "black forge": 5,
    },
    materials: {
      bloodstone: 4,
      "asksvin hide": 2,
      "charred bone": 3,
      flametal: 36,
    },
  },
  {
    name: "Nidhögg the Bleeding",
    level: 4,
    set: "flametal",
    stats: {
      slash: 153,
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
      "black forge": 5,
    },
    materials: {
      bloodstone: 7,
      "asksvin hide": 2,
      "charred bone": 3,
      flametal: 54,
    },
  },
  {
    name: "Nidhögg the Thundering",
    level: 1,
    set: "flametal",
    stats: {
      slash: 135,
      lightning: 10,
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
      "black forge": 4,
    },
    materials: {
      "asksvin hide": 2,
      "charred bone": 3,
      flametal: 18,
      iolite: 1,
    },
  },
  {
    name: "Nidhögg the Thundering",
    level: 2,
    set: "flametal",
    stats: {
      slash: 140,
      lightning: 10,
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
      "black forge": 5,
    },
    materials: {
      "asksvin hide": 2,
      "charred bone": 3,
      flametal: 24,
      iolite: 2,
    },
  },
  {
    name: "Nidhögg the Thundering",
    level: 3,
    set: "flametal",
    stats: {
      slash: 145,
      lightning: 10,
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
      "black forge": 5,
    },
    materials: {
      "asksvin hide": 2,
      "charred bone": 3,
      flametal: 36,
      iolite: 4,
    },
  },
  {
    name: "Nidhögg the Thundering",
    level: 4,
    set: "flametal",
    stats: {
      slash: 150,
      lightning: 10,
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
      "black forge": 5,
    },
    materials: {
      "asksvin hide": 2,
      "charred bone": 3,
      flametal: 54,
      iolite: 7,
    },
  },
  {
    name: "Nidhögg the Primal",
    level: 1,
    set: "flametal",
    stats: {
      slash: 135,
      poison: 10,
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
      "black forge": 4,
    },
    materials: {
      jade: 1,
      "asksvin hide": 2,
      "charred bone": 3,
      flametal: 18,
    },
  },
  {
    name: "Nidhögg the Primal",
    level: 2,
    set: "flametal",
    stats: {
      slash: 140,
      poison: 10,
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
      "black forge": 5,
    },
    materials: {
      jade: 2,
      "asksvin hide": 2,
      "charred bone": 3,
      flametal: 24,
    },
  },
  {
    name: "Nidhögg the Primal",
    level: 3,
    set: "flametal",
    stats: {
      slash: 145,
      poison: 10,
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
      "black forge": 5,
    },
    materials: {
      jade: 4,
      "asksvin hide": 2,
      "charred bone": 3,
      flametal: 36,
    },
  },
  {
    name: "Nidhögg the Primal",
    level: 4,
    set: "flametal",
    stats: {
      slash: 150,
      poison: 10,
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
      "black forge": 5,
    },
    materials: {
      jade: 7,
      "asksvin hide": 2,
      "charred bone": 3,
      flametal: 54,
    },
  },
  {
    name: "Slayer",
    level: 1,
    set: "flametal",
    stats: {
      slash: 170,
      knockback: 50,
      backstab: "3x",
      "parry force": 50,
      durability: 200,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 3,
    },
    materials: {
      "morgen sinew": 3,
      "asksvin hide": 5,
      flametal: 30,
    },
  },
  {
    name: "Slayer",
    level: 2,
    set: "flametal",
    stats: {
      slash: 176,
      knockback: 50,
      backstab: "3x",
      "parry force": 60,
      durability: 250,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "morgen sinew": 6,
      "asksvin hide": 10,
      flametal: 45,
    },
  },
  {
    name: "Slayer",
    level: 3,
    set: "flametal",
    stats: {
      slash: 182,
      knockback: 50,
      backstab: "3x",
      "parry force": 70,
      durability: 300,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "morgen sinew": 12,
      "asksvin hide": 20,
      flametal: 75,
    },
  },
  {
    name: "Slayer",
    level: 4,
    set: "flametal",
    stats: {
      slash: 188,
      knockback: 50,
      backstab: "3x",
      "parry force": 80,
      durability: 350,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "morgen sinew": 21,
      "asksvin hide": 35,
      flametal: 120,
    },
  },
  {
    name: "Brutal Slayer",
    level: 1,
    set: "flametal",
    stats: {
      slash: 170,
      knockback: 50,
      backstab: "3x",
      "parry force": 50,
      durability: 200,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "morgen sinew": 3,
      "asksvin hide": 5,
      flametal: 45,
      bloodstone: 1,
    },
  },
  {
    name: "Brutal Slayer",
    level: 2,
    set: "flametal",
    stats: {
      slash: 176,
      knockback: 50,
      backstab: "3x",
      "parry force": 60,
      durability: 250,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "morgen sinew": 3,
      "asksvin hide": 5,
      flametal: 60,
      bloodstone: 2,
    },
  },
  {
    name: "Brutal Slayer",
    level: 3,
    set: "flametal",
    stats: {
      slash: 182,
      knockback: 50,
      backstab: "3x",
      "parry force": 70,
      durability: 300,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "morgen sinew": 3,
      "asksvin hide": 5,
      flametal: 90,
      bloodstone: 4,
    },
  },
  {
    name: "Brutal Slayer",
    level: 4,
    set: "flametal",
    stats: {
      slash: 188,
      knockback: 50,
      backstab: "3x",
      "parry force": 80,
      durability: 350,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "morgen sinew": 3,
      "asksvin hide": 5,
      flametal: 135,
      bloodstone: 7,
    },
  },
  {
    name: "Scourging Slayer",
    level: 1,
    set: "flametal",
    stats: {
      slash: 170,
      lightning: 10,
      knockback: 50,
      backstab: "3x",
      "parry force": 50,
      durability: 200,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "morgen sinew": 3,
      "asksvin hide": 5,
      flametal: 45,
      iolite: 1,
    },
  },
  {
    name: "Scourging Slayer",
    level: 2,
    set: "flametal",
    stats: {
      slash: 175,
      lightning: 10,
      knockback: 50,
      backstab: "3x",
      "parry force": 60,
      durability: 250,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "morgen sinew": 3,
      "asksvin hide": 5,
      flametal: 60,
      iolite: 2,
    },
  },
  {
    name: "Scourging Slayer",
    level: 3,
    set: "flametal",
    stats: {
      slash: 180,
      lightning: 10,
      knockback: 50,
      backstab: "3x",
      "parry force": 70,
      durability: 300,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "morgen sinew": 3,
      "asksvin hide": 5,
      flametal: 90,
      iolite: 4,
    },
  },
  {
    name: "Scourging Slayer",
    level: 4,
    set: "flametal",
    stats: {
      slash: 185,
      lightning: 10,
      knockback: 50,
      backstab: "3x",
      "parry force": 80,
      durability: 350,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "morgen sinew": 3,
      "asksvin hide": 5,
      flametal: 135,
      iolite: 7,
    },
  },
  {
    name: "Primal Slayer",
    level: 1,
    set: "flametal",
    stats: {
      slash: 170,
      poison: 10,
      knockback: 50,
      backstab: "3x",
      "parry force": 50,
      durability: 200,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "morgen sinew": 3,
      "asksvin hide": 5,
      flametal: 45,
      jade: 1,
    },
  },
  {
    name: "Primal Slayer",
    level: 2,
    set: "flametal",
    stats: {
      slash: 175,
      poison: 10,
      knockback: 50,
      backstab: "3x",
      "parry force": 60,
      durability: 250,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "morgen sinew": 3,
      "asksvin hide": 5,
      flametal: 60,
      jade: 2,
    },
  },
  {
    name: "Primal Slayer",
    level: 3,
    set: "flametal",
    stats: {
      slash: 180,
      poison: 10,
      knockback: 50,
      backstab: "3x",
      "parry force": 70,
      durability: 300,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "morgen sinew": 3,
      "asksvin hide": 5,
      flametal: 90,
      jade: 4,
    },
  },
  {
    name: "Primal Slayer",
    level: 4,
    set: "flametal",
    stats: {
      slash: 185,
      poison: 10,
      knockback: 50,
      backstab: "3x",
      "parry force": 80,
      durability: 350,
      weight: 4,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "morgen sinew": 3,
      "asksvin hide": 5,
      flametal: 135,
      jade: 7,
    },
  },
  {
    name: "Dyrnwyn",
    level: 1,
    set: "flametal",
    stats: {
      slash: 145,
      fire: 10,
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
      "black forge": 4,
    },
    materials: {
      bloodstone: 1,
      "dyrnwyn tip fragment": 1,
      "dyrnwyn blade fragment": 1,
      flametal: 20,
      "dyrnwyn hilt fragment": 1,
    },
  },
  {
    name: "Dyrnwyn",
    level: 2,
    set: "flametal",
    stats: {
      slash: 151,
      fire: 10,
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
      "black forge": 5,
    },
    materials: {
      bloodstone: 2,
      "dyrnwyn tip fragment": 1,
      "dyrnwyn blade fragment": 1,
      flametal: 30,
      "dyrnwyn hilt fragment": 1,
    },
  },
  {
    name: "Dyrnwyn",
    level: 3,
    set: "flametal",
    stats: {
      slash: 157,
      fire: 10,
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
      "black forge": 5,
    },
    materials: {
      bloodstone: 4,
      "dyrnwyn tip fragment": 1,
      "dyrnwyn blade fragment": 1,
      flametal: 50,
      "dyrnwyn hilt fragment": 1,
    },
  },
  {
    name: "Dyrnwyn",
    level: 4,
    set: "flametal",
    stats: {
      slash: 163,
      fire: 10,
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
      "black forge": 5,
    },
    materials: {
      bloodstone: 7,
      "dyrnwyn tip fragment": 1,
      "dyrnwyn blade fragment": 1,
      flametal: 80,
      "dyrnwyn hilt fragment": 1,
    },
  },
  {
    name: "Wooden Sword",
    level: 1,
    set: "wood",
    stats: {
      slash: 1,
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
      workbench: 1,
    },
    materials: {
      "fine wood": 3,
      "core wood": 2,
      wood: 5,
    },
  },
  {
    name: "Wooden Sword",
    level: 2,
    set: "wood",
    stats: {
      slash: 2,
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
      workbench: 2,
    },
    materials: {
      "fine wood": 13,
      "core wood": 4,
      wood: 6,
    },
  },
  {
    name: "Wooden Sword",
    level: 3,
    set: "wood",
    stats: {
      slash: 3,
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
      workbench: 3,
    },
    materials: {
      "fine wood": 23,
      "core wood": 6,
      wood: 7,
    },
  },
  {
    name: "Wooden Sword",
    level: 4,
    set: "wood",
    stats: {
      slash: 4,
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
      workbench: 4,
    },
    materials: {
      "fine wood": 33,
      "core wood": 8,
      wood: 8,
    },
  },
  {
    name: "Wooden Greatsword",
    level: 1,
    set: "wood",
    stats: {
      slash: 1,
      knockback: 55,
      backstab: "3x",
      "parry force": 50,
      durability: 200,
      weight: 4,
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
    name: "Wooden Greatsword",
    level: 2,
    set: "wood",
    stats: {
      slash: 2,
      knockback: 55,
      backstab: "3x",
      "parry force": 60,
      durability: 250,
      weight: 4,
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
    name: "Wooden Greatsword",
    level: 3,
    set: "wood",
    stats: {
      slash: 3,
      knockback: 55,
      backstab: "3x",
      "parry force": 70,
      durability: 300,
      weight: 4,
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
    name: "Wooden Greatsword",
    level: 4,
    set: "wood",
    stats: {
      slash: 4,
      knockback: 55,
      backstab: "3x",
      "parry force": 80,
      durability: 350,
      weight: 4,
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

export const swords: Array<Omit<Weapon, "id">> = swordsList.map((weapon) => ({
  ...weapon,
  group: "weapons",
  type: "sword",
}));
