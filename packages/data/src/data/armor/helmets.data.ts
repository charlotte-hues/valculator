import { Armor } from "../@types/Armor.types";

const helmetsList: Array<Omit<Armor, "group" | "id" | "type">> = [
  {
    name: "Leather Helmet",
    level: 1,
    set: "leather",
    stats: {
      protection: 2,
      durability: 400,
      weight: 1,
    },
    effects: {},
    station: {
      workbench: 2,
    },
    materials: {
      "deer hide": 6,
    },
  },
  {
    name: "Leather Helmet",
    level: 2,
    set: "leather",
    stats: {
      protection: 4,
      durability: 450,
      weight: 1,
    },
    effects: {},
    station: {
      workbench: 3,
    },
    materials: {
      "deer hide": 12,
      "bone fragments": 5,
    },
  },
  {
    name: "Leather Helmet",
    level: 3,
    set: "leather",
    stats: {
      protection: 6,
      durability: 500,
      weight: 1,
    },
    effects: {},
    station: {
      workbench: 4,
    },
    materials: {
      "deer hide": 24,
      "bone fragments": 15,
    },
  },
  {
    name: "Leather Helmet",
    level: 4,
    set: "leather",
    stats: {
      protection: 8,
      durability: 550,
      weight: 1,
    },
    effects: {},
    station: {
      workbench: 5,
    },
    materials: {
      "deer hide": 48,
      "bone fragments": 35,
    },
  },
  {
    name: "Troll Leather Helmet",
    level: 1,
    set: "troll",
    stats: {
      protection: 6,
      durability: 500,
      weight: 1,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 3,
    },
    materials: {
      "bone fragments": 3,
      "troll hide": 5,
    },
  },
  {
    name: "Troll Leather Helmet",
    level: 2,
    set: "troll",
    stats: {
      protection: 8,
      durability: 700,
      weight: 1,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 4,
    },
    materials: {
      "bone fragments": 4,
      "troll hide": 7,
    },
  },
  {
    name: "Troll Leather Helmet",
    level: 3,
    set: "troll",
    stats: {
      protection: 10,
      durability: 900,
      weight: 1,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 5,
    },
    materials: {
      "bone fragments": 6,
      "troll hide": 11,
    },
  },
  {
    name: "Troll Leather Helmet",
    level: 4,
    set: "troll",
    stats: {
      protection: 12,
      durability: 1100,
      weight: 1,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 6,
    },
    materials: {
      "bone fragments": 10,
      "troll hide": 19,
    },
  },
  {
    name: "Bronze Helmet",
    level: 1,
    set: "bronze",
    stats: {
      protection: 8,
      durability: 1000,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 1,
    },
    materials: {
      bronze: 5,
      "deer hide": 2,
    },
  },
  {
    name: "Bronze Helmet",
    level: 2,
    set: "bronze",
    stats: {
      protection: 10,
      durability: 1200,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 2,
    },
    materials: {
      bronze: 8,
      "deer hide": 2,
    },
  },
  {
    name: "Bronze Helmet",
    level: 3,
    set: "bronze",
    stats: {
      protection: 12,
      durability: 1400,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 3,
    },
    materials: {
      bronze: 14,
      "deer hide": 2,
    },
  },
  {
    name: "Bronze Helmet",
    level: 4,
    set: "bronze",
    stats: {
      protection: 14,
      durability: 1600,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 4,
    },
    materials: {
      bronze: 26,
      "deer hide": 2,
    },
  },

  {
    name: "Iron Helmet",
    level: 1,
    set: "iron",
    stats: {
      protection: 14,
      durability: 1200,
      weight: 3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 2,
    },
    materials: {
      iron: 20,
      "deer hide": 2,
    },
  },
  {
    name: "Iron Helmet",
    level: 2,
    set: "iron",
    stats: {
      protection: 16,
      durability: 1400,
      weight: 3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      iron: 25,
      "deer hide": 2,
    },
  },
  {
    name: "Iron Helmet",
    level: 3,
    set: "iron",
    stats: {
      protection: 18,
      durability: 1600,
      weight: 3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      iron: 35,
      "deer hide": 2,
    },
  },
  {
    name: "Iron Helmet",
    level: 4,
    set: "iron",
    stats: {
      protection: 20,
      durability: 1800,
      weight: 3,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 5,
    },
    materials: {
      iron: 55,
      "deer hide": 2,
    },
  },

  {
    name: "Drake Helmet",
    level: 1,
    set: "wolf",
    stats: {
      protection: 20,
      durability: 1000,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 2,
    },
    materials: {
      silver: 20,
      "wolf pelt": 2,
      "drake trophy": 2,
    },
  },
  {
    name: "Drake Helmet",
    level: 2,
    set: "wolf",
    stats: {
      protection: 22,
      durability: 1200,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 3,
    },
    materials: {
      silver: 25,
      "wolf pelt": 2,
      "drake trophy": 2,
    },
  },
  {
    name: "Drake Helmet",
    level: 3,
    set: "wolf",
    stats: {
      protection: 24,
      durability: 1400,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 4,
    },
    materials: {
      silver: 35,
      "wolf pelt": 2,
      "drake trophy": 2,
    },
  },
  {
    name: "Drake Helmet",
    level: 4,
    set: "wolf",
    stats: {
      protection: 26,
      durability: 1600,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 5,
    },
    materials: {
      silver: 55,
      "wolf pelt": 2,
      "drake trophy": 2,
    },
  },
  {
    name: "Padded Helmet",
    level: 1,
    set: "padded",
    stats: {
      protection: 26,
      durability: 1000,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 1,
    },
    materials: {
      iron: 10,
      "linen thread": 15,
    },
  },
  {
    name: "Padded Helmet",
    level: 2,
    set: "padded",
    stats: {
      protection: 28,
      durability: 1200,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 2,
    },
    materials: {
      iron: 15,
      "linen thread": 25,
    },
  },
  {
    name: "Padded Helmet",
    level: 3,
    set: "padded",
    stats: {
      protection: 30,
      durability: 1400,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 3,
    },
    materials: {
      iron: 25,
      "linen thread": 45,
    },
  },
  {
    name: "Padded Helmet",
    level: 4,
    set: "padded",
    stats: {
      protection: 32,
      durability: 1600,
      weight: 3,
    },
    effects: {},
    station: {
      forge: 4,
    },
    materials: {
      iron: 45,
      "linen thread": 85,
    },
  },
  {
    name: "Root Mask",
    level: 1,
    set: "root",
    stats: {
      protection: 8,
      durability: 800,
      weight: 3,
    },
    effects: {
      additional: "Resistant vs. Pierce",
    },
    station: {
      workbench: 2,
    },
    materials: {
      root: 10,
      "ancient bark": 10,
      "leather scraps": 4,
    },
  },
  {
    name: "Root Mask",
    level: 2,
    set: "root",
    stats: {
      protection: 10,
      durability: 900,
      weight: 3,
    },
    effects: {
      additional: "Resistant vs. Pierce",
    },
    station: {
      workbench: 3,
    },
    materials: {
      root: 12,
      "ancient bark": 15,
      "leather scraps": 4,
    },
  },
  {
    name: "Root Mask",
    level: 3,
    set: "root",
    stats: {
      protection: 12,
      durability: 1000,
      weight: 3,
    },
    effects: {
      additional: "Resistant vs. Pierce",
    },
    station: {
      workbench: 4,
    },
    materials: {
      root: 16,
      "ancient bark": 25,
      "leather scraps": 4,
    },
  },
  {
    name: "Root Mask",
    level: 4,
    set: "root",
    stats: {
      protection: 14,
      durability: 1100,
      weight: 3,
    },
    effects: {
      additional: "Resistant vs. Pierce",
    },
    station: {
      workbench: 5,
    },
    materials: {
      root: 24,
      "ancient bark": 45,
      "leather scraps": 4,
    },
  },
  {
    name: "Headdress of the Bear",
    level: 1,
    set: "bear",
    stats: {
      protection: 7,
      durability: 1000,
      weight: 1,
    },
    effects: {
    },
    station: {
      workbench: 2,
    },
    materials: {
      "bear trophy": 1,
      "bear hide": 5,
    },
  },
  {
    name: "Headdress of the Bear",
    level: 2,
    set: "bear",
    stats: {
      protection: 9,
      durability: 1200,
      weight: 1,
    },
    effects: {
    },
    station: {
      workbench: 3,
    },
    materials: {
      "bear trophy": 1,
      "bear hide": 7,
    },
  },
  {
    name: "Headdress of the Bear",
    level: 3,
    set: "bear",
    stats: {
      protection: 11,
      durability: 1400,
      weight: 1,
    },
    effects: {
    },
    station: {
      workbench: 4,
    },
    materials: {
      "bear trophy": 1,
      "bear hide": 11,
    },
  },
  {
    name: "Headdress of the Bear",
    level: 4,
    set: "bear",
    stats: {
      protection: 13,
      durability: 1600,
      weight: 1,
    },
    effects: {
    },
    station: {
      workbench: 5,
    },
    materials: {
      "bear trophy": 1,
      "bear hide": 19,
    },
  },
  {
    name: "Fenris Hood",
    level: 1,
    set: "fenris",
    stats: {
      protection: 10,
      durability: 1000,
      weight: 3,
    },
    effects: {
      movementSpeed: "3%",
    },
    station: {
      workbench: 2,
    },
    materials: {
      "wolf pelt": 2,
      "fenris hair": 20,
      "cultist trophy": 1,
    },
  },
  {
    name: "Fenris Hood",
    level: 2,
    set: "fenris",
    stats: {
      protection: 12,
      durability: 1200,
      weight: 3,
    },
    effects: {
      movementSpeed: "3%",
    },
    station: {
      workbench: 3,
    },
    materials: {
      "wolf pelt": 6,
      "fenris hair": 25,
      "cultist trophy": 1,
    },
  },
  {
    name: "Fenris Hood",
    level: 3,
    set: "fenris",
    stats: {
      protection: 14,
      durability: 1400,
      weight: 3,
    },
    effects: {
      movementSpeed: "3%",
    },
    station: {
      workbench: 4,
    },
    materials: {
      "wolf pelt": 14,
      "fenris hair": 35,
      "cultist trophy": 1,
    },
  },
  {
    name: "Fenris Hood",
    level: 4,
    set: "fenris",
    stats: {
      protection: 16,
      durability: 1600,
      weight: 3,
    },
    effects: {
      movementSpeed: "3%",
    },
    station: {
      workbench: 5,
    },
    materials: {
      "wolf pelt": 30,
      "fenris hair": 55,
      "cultist trophy": 1,
    },
  },
  {
    name: "Carapace Helmet",
    level: 1,
    set: "carapace",
    stats: {
      protection: 32,
      durability: 1000,
      weight: 3,
    },
    effects: {
    },
    station: {
      "black forge": 1,
    },
    materials: {
      "refined eitr": 4,
      carapace: 16,
      "scale hide": 3,
      mandible: 2,
    },
  },
  {
    name: "Carapace Helmet",
    level: 2,
    set: "carapace",
    stats: {
      protection: 34,
      durability: 1200,
      weight: 3,
    },
    effects: {
    },
    station: {
      "black forge": 2,
    },
    materials: {
      "refined eitr": 6,
      carapace: 24,
      "scale hide": 4,
      mandible: 2,
    },
  },
  {
    name: "Carapace Helmet",
    level: 3,
    set: "carapace",
    stats: {
      protection: 36,
      durability: 1400,
      weight: 3,
    },
    effects: {
    },
    station: {
      "black forge": 3,
    },
    materials: {
      "refined eitr": 10,
      carapace: 40,
      "scale hide": 6,
      mandible: 2,
    },
  },
  {
    name: "Carapace Helmet",
    level: 4,
    set: "carapace",
    stats: {
      protection: 38,
      durability: 1600,
      weight: 3,
    },
    effects: {
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "refined eitr": 18,
      carapace: 72,
      "scale hide": 10,
      mandible: 2,
    },
  },
  {
    name: "Eitr-Weave Hood",
    level: 1,
    set: "eitr",
    stats: {
      protection: 16,
      durability: 500,
      weight: 1,
      "eitr regen": 0.2,
    },
    effects: {
    },
    station: {
      "galdr table": 1,
    },
    materials: {
      "refined eitr": 15,
      iron: 2,
      "linen thread": 16,
    },
  },
  {
    name: "Eitr-Weave Hood",
    level: 2,
    set: "eitr",
    stats: {
      protection: 18,
      durability: 700,
      weight: 1,
      "eitr regen": 0.2,
    },
    effects: {
    },
    station: {
      "galdr table": 2,
    },
    materials: {
      "refined eitr": 20,
      iron: 2,
      "linen thread": 24,
    },
  },
  {
    name: "Eitr-Weave Hood",
    level: 3,
    set: "eitr",
    stats: {
      protection: 20,
      durability: 900,
      weight: 1,
      "eitr regen": 0.2,
    },
    effects: {
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      "refined eitr": 30,
      iron: 2,
      "linen thread": 40,
    },
  },
  {
    name: "Eitr-Weave Hood",
    level: 4,
    set: "eitr",
    stats: {
      protection: 22,
      durability: 1100,
      weight: 1,
      "eitr regen": 0.2,
    },
    effects: {
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "refined eitr": 50,
      iron: 2,
      "linen thread": 72,
    },
  },
  {
    name: "Flametal Helmet",
    level: 1,
    set: "flametal",
    stats: {
      protection: 38,
      durability: 800,
      weight: 1,
    },
    effects: {
    },
    station: {
      "black forge": 3,
    },
    materials: {
      "refined eitr": 4,
      "charred bone": 2,
      "asksvin hide": 3,
      flametal: 16,
    },
  },
  {
    name: "Flametal Helmet",
    level: 2,
    set: "flametal",
    stats: {
      protection: 40,
      durability: 900,
      weight: 1,
    },
    effects: {
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "refined eitr": 6,
      "charred bone": 2,
      "asksvin hide": 4,
      flametal: 24,
    },
  },
  {
    name: "Flametal Helmet",
    level: 3,
    set: "flametal",
    stats: {
      protection: 42,
      durability: 1000,
      weight: 1,
    },
    effects: {
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "refined eitr": 10,
      "charred bone": 2,
      "asksvin hide": 6,
      flametal: 40,
    },
  },
  {
    name: "Flametal Helmet",
    level: 4,
    set: "flametal",
    stats: {
      protection: 44,
      durability: 1100,
      weight: 1,
    },
    effects: {
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "refined eitr": 18,
      "charred bone": 2,
      "asksvin hide": 10,
      flametal: 72,
    },
  },
  {
    name: "Hood of Ask",
    level: 1,
    set: "ash",
    stats: {
      protection: 28,
      durability: 1000,
      weight: 1,
    },
    effects: {
    },
    station: {
      "black forge": 3,
    },
    materials: {
      "asksvin hide": 10,
      "lox pelt": 4,
      "linen thread": 15,
    },
  },
  {
    name: "Hood of Ask",
    level: 2,
    set: "ash",
    stats: {
      protection: 30,
      durability: 1200,
      weight: 1,
    },
    effects: {
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "asksvin hide": 15,
      "lox pelt": 6,
      "linen thread": 25,
    },
  },
  {
    name: "Hood of Ask",
    level: 3,
    set: "ash",
    stats: {
      protection: 32,
      durability: 1400,
      weight: 1,
    },
    effects: {
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "asksvin hide": 25,
      "lox pelt": 10,
      "linen thread": 45,
    },
  },
  {
    name: "Hood of Ask",
    level: 4,
    set: "ash",
    stats: {
      protection: 34,
      durability: 1600,
      weight: 1,
    },
    effects: {
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "asksvin hide": 45,
      "lox pelt": 18,
      "linen thread": 85,
    },
  },
  {
    name: "Hood of Embla",
    level: 1,
    set: "mage",
    stats: {
      protection: 19,
      durability: 1000,
      weight: 1,
      "eitr regen": 0.3,
    },
    effects: {
    },
    station: {
      "galdr table": 2,
    },
    materials: {
      "refined eitr": 15,
      "asksvin hide": 2,
      "linen thread": 16,
    },
  },
  {
    name: "Hood of Embla",
    level: 2,
    set: "mage",
    stats: {
      protection: 21,
      durability: 1200,
      weight: 1,
      "eitr regen": 0.3,
    },
    effects: {
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      "refined eitr": 20,
      "asksvin hide": 2,
      "linen thread": 24,
    },
  },
  {
    name: "Hood of Embla",
    level: 3,
    set: "mage",
    stats: {
      protection: 23,
      durability: 1400,
      weight: 1,
      "eitr regen": 0.3,
    },
    effects: {
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "refined eitr": 30,
      "asksvin hide": 2,
      "linen thread": 40,
    },
  },
  {
    name: "Hood of Embla",
    level: 4,
    set: "mage",
    stats: {
      protection: 25,
      durability: 1600,
      weight: 1,
      "eitr regen": 0.3,
    },
    effects: {
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "refined eitr": 50,
      "asksvin hide": 2,
      "linen thread": 72,
    },
  },
  {
    name: "Vilebone Visage",
    level: 1,
    set: "bear",
    stats: {
      protection: 12,
      durability: 1000,
      weight: 1,
    },
    effects: {
    },
    station: {
      forge: 2,
    },
    materials: {
      "bear hide": 5,
      "vile trophy": 1,
    },
  },
  {
    name: "Vilebone Visage",
    level: 2,
    set: "bear",
    stats: {
      protection: 14,
      durability: 1200,
      weight: 1,
    },
    effects: {
    },
    station: {
      forge: 3,
    },
    materials: {
      "bear hide": 7,
      "vile trophy": 1,
    },
  },
  {
    name: "Vilebone Visage",
    level: 3,
    set: "bear",
    stats: {
      protection: 16,
      durability: 1400,
      weight: 1,
    },
    effects: {
    },
    station: {
      forge: 4,
    },
    materials: {
      "bear hide": 11,
      "vile trophy": 1,
    },
  },
  {
    name: "Vilebone Visage",
    level: 4,
    set: "bear",
    stats: {
      protection: 18,
      durability: 1600,
      weight: 1,
    },
    effects: {
    },
    station: {
      forge: 5,
    },
    materials: {
      "bear hide": 19,
      "vile trophy": 1,
    },
  },
  {
    name: "Midsummer Crown",
    level: 1,
    set: "sesonal",
    stats: {
      protection: 1,
      durability: 0,
      weight: 1,
    },
    effects: {
    },
    station: {
      workbench: 1,
    },
    materials: {
      dandelion: 10,
    },
  },
  {
    name: "Celebratory Cap",
    level: 1,
    set: "other",
    stats: {
      protection: 1,
      durability: 800,
      weight: 3,
    },
    effects: {
    },
    station: {
      workbench: 2,
    },
    materials: {
      "deer hide": 2,
      "bear hide": 1,
      bronze: 1,
      "amber pearl": 1,
    },
  },
  {
    name: "Celebratory Cap",
    level: 2,
    set: "other",
    stats: {
      protection: 3,
      durability: 900,
      weight: 3,
    },
    effects: {
    },
    station: {
      workbench: 3,
    },
    materials: {
      "deer hide": 3,
      "bear hide": 1,
      bronze: 2,
      "amber pearl": 1,
    },
  },
  {
    name: "Celebratory Cap",
    level: 3,
    set: "other",
    stats: {
      protection: 5,
      durability: 1000,
      weight: 3,
    },
    effects: {
    },
    station: {
      workbench: 4,
    },
    materials: {
      "deer hide": 5,
      "bear hide": 1,
      bronze: 4,
      "amber pearl": 1,
    },
  },
  {
    name: "Celebratory Cap",
    level: 4,
    set: "other",
    stats: {
      protection: 7,
      durability: 1100,
      weight: 3,
    },
    effects: {
    },
    station: {
      workbench: 5,
    },
    materials: {
      "deer hide": 9,
      "bear hide": 1,
      bronze: 8,
      "amber pearl": 1,
    },
  },
  {
    name: "Crown of Valheim",
    level: 1,
    set: "other",
    stats: {
      protection: 50,
      durability: 1000,
      weight: 1,
    },
    effects: {
      movementSpeed: "5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      bloodgold: 5,
      "crown jewel": 1,
    },
  },
  {
    name: "Fishing Hat",
    level: 1,
    set: "other",
    stats: {
      protection: 8,
      durability: 1000,
      weight: 3,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      perch: 1,
      pike: 1,
      tuna: 1,
      tetra: 1,
      trollfish: 1,
      "giant herring": 1,
      grouper: 1,
      "coral cod": 1,
      anglerfish: 1,
      "northern salmon": 1,
      magmafish: 1,
      pufferfish: 1,
    },
  },
  {
    name: "Fishing Hat",
    level: 2,
    set: "other",
    stats: {
      protection: 12,
      durability: 1200,
      weight: 3,
    },
    effects: {},
    station: {
      workbench: 2,
    },
    materials: {
      perch: 2,
      pike: 2,
      tuna: 2,
      tetra: 2,
      trollfish: 2,
      "giant herring": 2,
      grouper: 2,
      "coral cod": 2,
      anglerfish: 2,
      "northern salmon": 2,
      magmafish: 2,
      pufferfish: 2,
    },
  },
  {
    name: "Fishing Hat",
    level: 3,
    set: "other",
    stats: {
      protection: 16,
      durability: 1400,
      weight: 3,
    },
    effects: {},
    station: {
      workbench: 3,
    },
    materials: {
      perch: 4,
      pike: 4,
      tuna: 4,
      tetra: 4,
      trollfish: 4,
      "giant herring": 4,
      grouper: 4,
      "coral cod": 4,
      anglerfish: 4,
      "northern salmon": 4,
      magmafish: 4,
      pufferfish: 4,
    },
  },
  {
    name: "Fishing Hat",
    level: 4,
    set: "other",
    stats: {
      protection: 20,
      durability: 1600,
      weight: 3,
    },
    effects: {},
    station: {
      workbench: 4,
    },
    materials: {
      perch: 8,
      pike: 8,
      tuna: 8,
      tetra: 8,
      trollfish: 8,
      "giant herring": 8,
      grouper: 8,
      "coral cod": 8,
      anglerfish: 8,
      "northern salmon": 8,
      magmafish: 8,
      pufferfish: 8,
    },
  },
  {
    name: "Headdress of the Caller",
    level: 1,
    set: "caller",
    stats: {
      protection: 22,
      durability: 1000,
      weight: 1,
    },
    effects: {},
    station: {
      "galdr table": 3,
    },
    materials: {
      "moose sinew": 2,
      "mould: headdress of the caller": 1,
      "moose trophy": 1,
      nornathread: 3,
    },
  },
  {
    name: "Headdress of the Caller",
    level: 2,
    set: "caller",
    stats: {
      protection: 24,
      durability: 1200,
      weight: 1,
    },
    effects: {},
    station: {
      "galdr table": 3,
    },
    materials: {
      "moose sinew": 3,
      "mould: headdress of the caller": 1,
      "moose trophy": 2,
      nornathread: 5,
    },
  },
  {
    name: "Headdress of the Caller",
    level: 3,
    set: "caller",
    stats: {
      protection: 26,
      durability: 1400,
      weight: 1,
    },
    effects: {},
    station: {
      "galdr table": 3,
    },
    materials: {
      "moose sinew": 5,
      "mould: headdress of the caller": 1,
      "moose trophy": 4,
      nornathread: 9,
    },
  },
  {
    name: "Headdress of the Caller",
    level: 4,
    set: "caller",
    stats: {
      protection: 28,
      durability: 1600,
      weight: 1,
    },
    effects: {},
    station: {
      "galdr table": 4,
    },
    materials: {
      "moose sinew": 9,
      "mould: headdress of the caller": 1,
      "moose trophy": 8,
      nornathread: 17,
    },
  },
  {
    name: "Helmet of the Protector",
    level: 1,
    set: "protector",
    stats: {
      protection: 44,
      durability: 1000,
      weight: 1,
    },
    effects: {},
    station: {
      "black forge": 4,
    },
    materials: {
      bloodgold: 20,
      "mould: helmet of the protector": 1,
      "moose hide": 4,
    },
  },
  {
    name: "Helmet of the Protector",
    level: 2,
    set: "protector",
    stats: {
      protection: 46,
      durability: 1200,
      weight: 1,
    },
    effects: {},
    station: {
      "black forge": 4,
    },
    materials: {
      bloodgold: 35,
      "mould: helmet of the protector": 1,
      "moose hide": 7,
    },
  },
  {
    name: "Helmet of the Protector",
    level: 3,
    set: "protector",
    stats: {
      protection: 48,
      durability: 1400,
      weight: 1,
    },
    effects: {},
    station: {
      "black forge": 4,
    },
    materials: {
      bloodgold: 65,
      "mould: helmet of the protector": 1,
      "moose hide": 13,
    },
  },
  {
    name: "Helmet of the Protector",
    level: 4,
    set: "protector",
    stats: {
      protection: 50,
      durability: 1600,
      weight: 1,
    },
    effects: {},
    station: {
      "black forge": 4,
    },
    materials: {
      bloodgold: 125,
      "mould: helmet of the protector": 1,
      "moose hide": 25,
    },
  },
  {
    name: "Hood of Odin",
    level: 1,
    set: "leather",
    stats: {
      protection: 1,
      durability: 300,
      weight: 1,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      "leather scraps": 10,
      coal: 4,
    },
  },
  {
    name: "Hood of Odin",
    level: 2,
    set: "leather",
    stats: {
      protection: 2,
      durability: 400,
      weight: 1,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      "leather scraps": 15,
      coal: 6,
    },
  },
  {
    name: "Hood of Odin",
    level: 3,
    set: "leather",
    stats: {
      protection: 3,
      durability: 500,
      weight: 1,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      "leather scraps": 25,
      coal: 10,
    },
  },
  {
    name: "Hood of Odin",
    level: 4,
    set: "leather",
    stats: {
      protection: 4,
      durability: 600,
      weight: 1,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      "leather scraps": 45,
      coal: 18,
    },
  },
  {
    name: "Hood of the Vanguard",
    level: 1,
    set: "vanguard",
    stats: {
      protection: 34,
      durability: 1000,
      weight: 1,
    },
    effects: {},
    station: {
      "black forge": 4,
    },
    materials: {
      "seal pelt": 5,
      "mould: hood of the vanguard": 1,
      "moose hide": 5,
      "moose sinew": 1,
    },
  },
  {
    name: "Hood of the Vanguard",
    level: 2,
    set: "vanguard",
    stats: {
      protection: 36,
      durability: 1200,
      weight: 1,
    },
    effects: {},
    station: {
      "black forge": 4,
    },
    materials: {
      "seal pelt": 8,
      "mould: hood of the vanguard": 1,
      "moose hide": 8,
      "moose sinew": 2,
    },
  },
  {
    name: "Hood of the Vanguard",
    level: 3,
    set: "vanguard",
    stats: {
      protection: 38,
      durability: 1400,
      weight: 1,
    },
    effects: {},
    station: {
      "black forge": 4,
    },
    materials: {
      "seal pelt": 14,
      "mould: hood of the vanguard": 1,
      "moose hide": 14,
      "moose sinew": 4,
    },
  },
  {
    name: "Hood of the Vanguard",
    level: 4,
    set: "vanguard",
    stats: {
      protection: 40,
      durability: 1600,
      weight: 1,
    },
    effects: {},
    station: {
      "black forge": 4,
    },
    materials: {
      "seal pelt": 26,
      "mould: hood of the vanguard": 1,
      "moose hide": 26,
      "moose sinew": 8,
    },
  },
  {
    name: "Lox Fur Hood",
    level: 1,
    set: "lox",
    stats: {
      protection: 16,
      durability: 500,
      weight: 1,
    },
    effects: {},
    station: {
      workbench: 2,
    },
    materials: {
      "lox pelt": 4,
      "bone fragments": 4,
      "writhan roots": 2,
    },
  },
  {
    name: "Lox Fur Hood",
    level: 2,
    set: "lox",
    stats: {
      protection: 18,
      durability: 700,
      weight: 1,
    },
    effects: {},
    station: {
      workbench: 2,
    },
    materials: {
      "lox pelt": 6,
      "bone fragments": 6,
      "writhan roots": 3,
    },
  },
  {
    name: "Lox Fur Hood",
    level: 3,
    set: "lox",
    stats: {
      protection: 20,
      durability: 900,
      weight: 1,
    },
    effects: {},
    station: {
      workbench: 3,
    },
    materials: {
      "lox pelt": 10,
      "bone fragments": 10,
      "writhan roots": 5,
    },
  },
  {
    name: "Lox Fur Hood",
    level: 4,
    set: "lox",
    stats: {
      protection: 22,
      durability: 1100,
      weight: 1,
    },
    effects: {},
    station: {
      workbench: 4,
    },
    materials: {
      "lox pelt": 18,
      "bone fragments": 18,
      "writhan roots": 9,
    },
  },
  {
    name: "Pointy Hat",
    level: 1,
    set: "leather",
    stats: {
      protection: 1,
      durability: 800,
      weight: 3,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      "deer hide": 3,
      coal: 5,
      bronze: 1,
    },
  },
  {
    name: "Pointy Hat",
    level: 2,
    set: "leather",
    stats: {
      protection: 3,
      durability: 900,
      weight: 3,
    },
    effects: {},
    station: {
      workbench: 2,
    },
    materials: {
      "deer hide": 8,
      coal: 5,
      bronze: 1,
    },
  },
  {
    name: "Pointy Hat",
    level: 3,
    set: "leather",
    stats: {
      protection: 5,
      durability: 1000,
      weight: 3,
    },
    effects: {},
    station: {
      workbench: 3,
    },
    materials: {
      "deer hide": 18,
      coal: 5,
      bronze: 1,
    },
  },
  {
    name: "Pointy Hat",
    level: 4,
    set: "leather",
    stats: {
      protection: 7,
      durability: 1100,
      weight: 3,
    },
    effects: {},
    station: {
      workbench: 4,
    },
    materials: {
      "deer hide": 38,
      coal: 5,
      bronze: 1,
    },
  },
];

export const helmets: Array<Omit<Armor, "id">> = helmetsList.map((armor) => ({
  ...armor,
  group: "armor",
  type: "helmet",
}));
