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
      "deer hide": 42,
      "bone fragments": 30,
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
      "troll leather": 5,
      "bone fragments": 3,
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
      "troll leather": 7,
      "bone fragments": 4,
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
      "troll leather": 11,
      "bone fragments": 6,
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
      "troll leather": 17,
      "bone fragments": 9,
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
      bronze: 23,
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
      iron: 50,
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
      silver: 50,
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
      "linen thread": 15,
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
      "linen thread": 15,
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
      iron: 40,
      "linen thread": 15,
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
      "leather scraps": 2,
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
      "leather scraps": 2,
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
      "leather scraps": 2,
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
      root: 22,
      "ancient bark": 40,
      "leather scraps": 2,
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
      "bear hide": 9,
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
      "bear hide": 11,
    },
  },
  {
    name: "Fenris Hood",
    level: 1,
    set: "wolf",
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
    set: "wolf",
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
    set: "wolf",
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
      "wolf pelt": 10,
      "fenris hair": 30,
      "cultist trophy": 1,
    },
  },
  {
    name: "Fenris Hood",
    level: 4,
    set: "wolf",
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
      "wolf pelt": 14,
      "fenris hair": 35,
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
      "refined eitr": 8,
      carapace: 32,
      "scale hide": 5,
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
      "refined eitr": 10,
      carapace: 40,
      "scale hide": 6,
      mandible: 2,
    },
  },
  {
    name: "Eitr-weave Hood",
    level: 1,
    set: "mage",
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
      "linen thread": 15,
    },
  },
  {
    name: "Eitr-weave Hood",
    level: 2,
    set: "mage",
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
      "refined eitr": 16,
      iron: 3,
      "linen thread": 17,
    },
  },
  {
    name: "Eitr-weave Hood",
    level: 3,
    set: "mage",
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
      "refined eitr": 17,
      iron: 4,
      "linen thread": 19,
    },
  },
  {
    name: "Eitr-weave Hood",
    level: 4,
    set: "mage",
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
      "refined eitr": 18,
      iron: 5,
      "linen thread": 21,
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
      "refined eitr": 8,
      "charred bone": 2,
      "asksvin hide": 5,
      flametal: 32,
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
      "refined eitr": 10,
      "charred bone": 2,
      "asksvin hide": 6,
      flametal: 40,
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
      "asksvin hide": 20,
      "lox pelt": 8,
      "linen thread": 35,
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
      "asksvin hide": 25,
      "lox pelt": 10,
      "linen thread": 45,
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
      "refined eitr": 25,
      "asksvin hide": 2,
      "linen thread": 32,
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
      "refined eitr": 30,
      "asksvin hide": 2,
      "linen thread": 40,
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
      "bear hide": 9,
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
      "bear hide": 11,
      "vile trophy": 1,
    },
  },
  {
    name: "Midsummer Crown",
    level: 1,
    set: "other",
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
      "deer hide": 4,
      "bear hide": 1,
      bronze: 3,
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
      "deer hide": 5,
      "bear hide": 1,
      bronze: 4,
      "amber pearl": 1,
    },
  },
];

export const helmets: Array<Omit<Armor, "id">> = helmetsList.map((armor) => ({
  ...armor,
  group: "armor",
  type: "helmet",
}));
