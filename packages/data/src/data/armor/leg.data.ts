import { Armor } from "../@types/Armor.types";

const legsList: Array<Omit<Armor, "group" | "id" | "type">> = [
  {
    name: "Rag Pants",
    level: 1,
    set: "rag",
    stats: {
      protection: 1,
      durability: 200,
      weight: 2,
    },
    effects: {},
    station: {
      workbench: 1,
    },
    materials: {
      "leather scraps": 5,
    },
  },
  {
    name: "Rag Pants",
    level: 2,
    set: "rag",
    stats: {
      protection: 2,
      durability: 250,
      weight: 2,
    },
    effects: {},
    station: {
      workbench: 2,
    },
    materials: {
      "leather scraps": 10,
    },
  },
  {
    name: "Leather Pants",
    level: 1,
    set: "leather",
    stats: {
      protection: 2,
      durability: 400,
      weight: 5,
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
    name: "Leather Pants",
    level: 2,
    set: "leather",
    stats: {
      protection: 4,
      durability: 450,
      weight: 5,
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
    name: "Leather Pants",
    level: 3,
    set: "leather",
    stats: {
      protection: 6,
      durability: 500,
      weight: 5,
    },
    effects: {},
    station: {
      workbench: 4,
    },
    materials: {
      "deer hide": 24,
      "bone fragments": 10,
    },
  },
  {
    name: "Leather Pants",
    level: 4,
    set: "leather",
    stats: {
      protection: 8,
      durability: 550,
      weight: 5,
    },
    effects: {},
    station: {
      workbench: 5,
    },
    materials: {
      "deer hide": 42,
      "bone fragments": 25,
    },
  },
  {
    name: "Troll Leather Pants",
    level: 1,
    set: "troll",
    stats: {
      protection: 6,
      durability: 500,
      weight: 5,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 3,
    },
    materials: {
      "troll leather": 5,
    },
  },
  {
    name: "Troll Leather Pants",
    level: 2,
    set: "troll",
    stats: {
      protection: 8,
      durability: 700,
      weight: 5,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 4,
    },
    materials: {
      "troll leather": 7,
    },
  },
  {
    name: "Troll Leather Pants",
    level: 3,
    set: "troll",
    stats: {
      protection: 10,
      durability: 900,
      weight: 5,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 5,
    },
    materials: {
      "troll leather": 11,
    },
  },
  {
    name: "Troll Leather Pants",
    level: 4,
    set: "troll",
    stats: {
      protection: 12,
      durability: 1100,
      weight: 5,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 6,
    },
    materials: {
      "troll leather": 17,
    },
  },
  {
    name: "Bronze Plate Leggings",
    level: 1,
    set: "bronze",
    stats: {
      protection: 8,
      durability: 1000,
      weight: 10,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 1,
    },
    materials: {
      bronze: 5,
      "deer hide": 2,
    },
  },
  {
    name: "Bronze Plate Leggings",
    level: 2,
    set: "bronze",
    stats: {
      protection: 10,
      durability: 700,
      weight: 10,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 2,
    },
    materials: {
      bronze: 8,
      "deer hide": 2,
    },
  },
  {
    name: "Bronze Plate Leggings",
    level: 3,
    set: "bronze",
    stats: {
      protection: 12,
      durability: 900,
      weight: 10,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      bronze: 14,
      "deer hide": 2,
    },
  },
  {
    name: "Bronze Plate Leggings",
    level: 4,
    set: "bronze",
    stats: {
      protection: 14,
      durability: 1100,
      weight: 10,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      bronze: 23,
      "deer hide": 2,
    },
  },
  {
    name: "Iron Greaves",
    level: 1,
    set: "iron",
    stats: {
      protection: 14,
      durability: 1200,
      weight: 15,
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
    name: "Iron Greaves",
    level: 2,
    set: "iron",
    stats: {
      protection: 16,
      durability: 1400,
      weight: 15,
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
    name: "Iron Greaves",
    level: 3,
    set: "iron",
    stats: {
      protection: 18,
      durability: 1600,
      weight: 15,
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
    name: "Iron Greaves",
    level: 4,
    set: "iron",
    stats: {
      protection: 20,
      durability: 1800,
      weight: 15,
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
    name: "Wolf Armor Legs",
    level: 1,
    set: "wolf",
    stats: {
      protection: 20,
      durability: 1000,
      weight: 15,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 2,
    },
    materials: {
      silver: 20,
      "wolf pelt": 5,
      "wolf fang": 4,
    },
  },
  {
    name: "Wolf Armor Legs",
    level: 2,
    set: "wolf",
    stats: {
      protection: 22,
      durability: 1200,
      weight: 15,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      silver: 25,
      "wolf pelt": 7,
      "wolf fang": 5,
    },
  },
  {
    name: "Wolf Armor Legs",
    level: 3,
    set: "wolf",
    stats: {
      protection: 24,
      durability: 1400,
      weight: 15,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      silver: 35,
      "wolf pelt": 11,
      "wolf fang": 7,
    },
  },
  {
    name: "Wolf Armor Legs",
    level: 4,
    set: "wolf",
    stats: {
      protection: 26,
      durability: 1600,
      weight: 15,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 5,
    },
    materials: {
      silver: 50,
      "wolf pelt": 17,
      "wolf fang": 10,
    },
  },
  {
    name: "Padded Greaves",
    level: 1,
    set: "padded",
    stats: {
      protection: 26,
      durability: 1000,
      weight: 10,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 2,
    },
    materials: {
      iron: 10,
      "linen thread": 20,
    },
  },
  {
    name: "Padded Greaves",
    level: 2,
    set: "padded",
    stats: {
      protection: 28,
      durability: 1200,
      weight: 10,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      iron: 13,
      "linen thread": 20,
    },
  },
  {
    name: "Padded Greaves",
    level: 3,
    set: "padded",
    stats: {
      protection: 30,
      durability: 1400,
      weight: 10,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 4,
    },
    materials: {
      iron: 19,
      "linen thread": 20,
    },
  },
  {
    name: "Padded Greaves",
    level: 4,
    set: "padded",
    stats: {
      protection: 32,
      durability: 1600,
      weight: 10,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 5,
    },
    materials: {
      iron: 28,
      "linen thread": 20,
    },
  },
  {
    name: "Root Leggings",
    level: 1,
    set: "root",
    stats: {
      protection: 8,
      durability: 800,
      weight: 10,
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
      "deer hide": 2,
    },
  },
  {
    name: "Root Leggings",
    level: 2,
    set: "root",
    stats: {
      protection: 10,
      durability: 900,
      weight: 10,
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
      "deer hide": 2,
    },
  },
  {
    name: "Root Leggings",
    level: 3,
    set: "root",
    stats: {
      protection: 12,
      durability: 1000,
      weight: 10,
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
      "deer hide": 2,
    },
  },
  {
    name: "Root Leggings",
    level: 4,
    set: "root",
    stats: {
      protection: 14,
      durability: 1100,
      weight: 10,
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
      "deer hide": 2,
    },
  },
  {
    name: "Loincloth of the Bear",
    level: 1,
    set: "bear",
    stats: {
      protection: 7,
      durability: 1000,
      weight: 5,
    },
    effects: {
    },
    station: {
      workbench: 2,
    },
    materials: {
      "bear hide": 5,
      blueberries: 4,
    },
  },
  {
    name: "Loincloth of the Bear",
    level: 2,
    set: "bear",
    stats: {
      protection: 9,
      durability: 1200,
      weight: 5,
    },
    effects: {
    },
    station: {
      workbench: 3,
    },
    materials: {
      "bear hide": 7,
      blueberries: 5,
    },
  },
  {
    name: "Loincloth of the Bear",
    level: 3,
    set: "bear",
    stats: {
      protection: 11,
      durability: 1400,
      weight: 5,
    },
    effects: {
    },
    station: {
      workbench: 4,
    },
    materials: {
      "bear hide": 9,
      blueberries: 6,
    },
  },
  {
    name: "Loincloth of the Bear",
    level: 4,
    set: "bear",
    stats: {
      protection: 13,
      durability: 1600,
      weight: 5,
    },
    effects: {
    },
    station: {
      workbench: 5,
    },
    materials: {
      "bear hide": 11,
      blueberries: 7,
    },
  },
  {
    name: "Fenris Leggings",
    level: 1,
    set: "fenris",
    stats: {
      protection: 10,
      durability: 1000,
      weight: 10,
    },
    effects: {
      movementSpeed: "3%",
    },
    station: {
      workbench: 2,
    },
    materials: {
      "leather scraps": 10,
      "wolf pelt": 5,
      "fenris hair": 20,
    },
  },
  {
    name: "Fenris Leggings",
    level: 2,
    set: "fenris",
    stats: {
      protection: 12,
      durability: 1200,
      weight: 10,
    },
    effects: {
      movementSpeed: "3%",
    },
    station: {
      workbench: 3,
    },
    materials: {
      "leather scraps": 14,
      "wolf pelt": 8,
      "fenris hair": 25,
    },
  },
  {
    name: "Fenris Leggings",
    level: 3,
    set: "fenris",
    stats: {
      protection: 14,
      durability: 1400,
      weight: 10,
    },
    effects: {
      movementSpeed: "3%",
    },
    station: {
      workbench: 4,
    },
    materials: {
      "leather scraps": 18,
      "wolf pelt": 11,
      "fenris hair": 30,
    },
  },
  {
    name: "Fenris Leggings",
    level: 4,
    set: "fenris",
    stats: {
      protection: 16,
      durability: 1600,
      weight: 10,
    },
    effects: {
      movementSpeed: "3%",
    },
    station: {
      workbench: 5,
    },
    materials: {
      "leather scraps": 22,
      "wolf pelt": 14,
      "fenris hair": 35,
    },
  },
  {
    name: "Carapace Greaves",
    level: 1,
    set: "carapace",
    stats: {
      protection: 32,
      durability: 1000,
      weight: 10,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 1,
    },
    materials: {
      "refined eitr": 4,
      iron: 5,
      carapace: 20,
      "scale hide": 3,
    },
  },
  {
    name: "Carapace Greaves",
    level: 2,
    set: "carapace",
    stats: {
      protection: 34,
      durability: 1200,
      weight: 10,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 2,
    },
    materials: {
      "refined eitr": 6,
      iron: 5,
      carapace: 30,
      "scale hide": 4,
    },
  },
  {
    name: "Carapace Greaves",
    level: 3,
    set: "carapace",
    stats: {
      protection: 36,
      durability: 1400,
      weight: 10,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 3,
    },
    materials: {
      "refined eitr": 8,
      iron: 5,
      carapace: 40,
      "scale hide": 5,
    },
  },
  {
    name: "Carapace Greaves",
    level: 4,
    set: "carapace",
    stats: {
      protection: 38,
      durability: 1600,
      weight: 10,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "refined eitr": 10,
      iron: 5,
      carapace: 50,
      "scale hide": 6,
    },
  },
  {
    name: "Eitr-weave Trousers",
    level: 1,
    set: "eitr",
    stats: {
      protection: 16,
      durability: 500,
      weight: 5,
      "eitr regen": 0.4,
    },
    effects: {
      movementSpeed: "-2%",
    },
    station: {
      "galdr table": 1,
    },
    materials: {
      "refined eitr": 20,
      "scale hide": 5,
      "linen thread": 20,
    },
  },
  {
    name: "Eitr-weave Trousers",
    level: 2,
    set: "eitr",
    stats: {
      protection: 18,
      durability: 700,
      weight: 5,
      "eitr regen": 0.4,
    },
    effects: {
      movementSpeed: "-2%",
    },
    station: {
      "galdr table": 2,
    },
    materials: {
      "refined eitr": 22,
      "scale hide": 7,
      "linen thread": 22,
    },
  },
  {
    name: "Eitr-weave Trousers",
    level: 3,
    set: "eitr",
    stats: {
      protection: 20,
      durability: 900,
      weight: 5,
      "eitr regen": 0.4,
    },
    effects: {
      movementSpeed: "-2%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      "refined eitr": 24,
      "scale hide": 9,
      "linen thread": 24,
    },
  },
  {
    name: "Eitr-weave Trousers",
    level: 4,
    set: "eitr",
    stats: {
      protection: 22,
      durability: 1100,
      weight: 5,
      "eitr regen": 0.4,
    },
    effects: {
      movementSpeed: "-2%",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "refined eitr": 26,
      "scale hide": 11,
      "linen thread": 26,
    },
  },
  {
    name: "Flametal Greaves",
    level: 1,
    set: "flametal",
    stats: {
      protection: 38,
      durability: 1000,
      weight: 10,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 3,
    },
    materials: {
      "charred bone": 5,
      "asksvin hide": 3,
      flametal: 20,
    },
  },
  {
    name: "Flametal Greaves",
    level: 2,
    set: "flametal",
    stats: {
      protection: 40,
      durability: 1200,
      weight: 10,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "charred bone": 5,
      "asksvin hide": 4,
      flametal: 30,
    },
  },
  {
    name: "Flametal Greaves",
    level: 3,
    set: "flametal",
    stats: {
      protection: 42,
      durability: 1400,
      weight: 10,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "charred bone": 5,
      "asksvin hide": 5,
      flametal: 40,
    },
  },
  {
    name: "Flametal Greaves",
    level: 4,
    set: "flametal",
    stats: {
      protection: 44,
      durability: 1600,
      weight: 10,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "charred bone": 5,
      "asksvin hide": 6,
      flametal: 50,
    },
  },
  {
    name: "Trousers of Ask",
    level: 1,
    set: "ash",
    stats: {
      protection: 28,
      durability: 1000,
      weight: 10,
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
    name: "Trousers of Ask",
    level: 2,
    set: "ash",
    stats: {
      protection: 30,
      durability: 1200,
      weight: 10,
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
    name: "Trousers of Ask",
    level: 3,
    set: "ash",
    stats: {
      protection: 32,
      durability: 1400,
      weight: 10,
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
    name: "Trousers of Ask",
    level: 4,
    set: "ash",
    stats: {
      protection: 34,
      durability: 1600,
      weight: 10,
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
    name: "Trousers of Embla",
    level: 1,
    set: "mage",
    stats: {
      protection: 19,
      durability: 1000,
      weight: 5,
      "eitr regen": 0.5,
    },
    effects: {
      movementSpeed: "-2%",
    },
    station: {
      "galdr table": 2,
    },
    materials: {
      "refined eitr": 20,
      "asksvin hide": 10,
      "linen thread": 20,
    },
  },
  {
    name: "Trousers of Embla",
    level: 2,
    set: "mage",
    stats: {
      protection: 21,
      durability: 1200,
      weight: 5,
      "eitr regen": 0.5,
    },
    effects: {
      movementSpeed: "-2%",
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      "refined eitr": 25,
      "asksvin hide": 10,
      "linen thread": 30,
    },
  },
  {
    name: "Trousers of Embla",
    level: 3,
    set: "mage",
    stats: {
      protection: 23,
      durability: 1400,
      weight: 5,
      "eitr regen": 0.5,
    },
    effects: {
      movementSpeed: "-2%",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "refined eitr": 30,
      "asksvin hide": 10,
      "linen thread": 40,
    },
  },
  {
    name: "Trousers of Embla",
    level: 4,
    set: "mage",
    stats: {
      protection: 25,
      durability: 1600,
      weight: 5,
      "eitr regen": 0.5,
    },
    effects: {
      movementSpeed: "-2%",
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "refined eitr": 35,
      "asksvin hide": 10,
      "linen thread": 50,
    },
  },
  {
    name: "Vilebone Drapes",
    level: 1,
    set: "bear",
    stats: {
      protection: 18,
      durability: 1000,
      weight: 5,
    },
    effects: {
    },
    station: {
      forge: 2,
    },
    materials: {
      "vile ribcage": 1,
      "bear hide": 10,
      "linen thread": 4,
    },
  },
  {
    name: "Vilebone Drapes",
    level: 2,
    set: "bear",
    stats: {
      protection: 20,
      durability: 1200,
      weight: 5,
    },
    effects: {
    },
    station: {
      forge: 3,
    },
    materials: {
      "vile ribcage": 2,
      "bear hide": 15,
      "linen thread": 5,
    },
  },
  {
    name: "Vilebone Drapes",
    level: 3,
    set: "bear",
    stats: {
      protection: 22,
      durability: 1400,
      weight: 5,
    },
    effects: {
    },
    station: {
      forge: 4,
    },
    materials: {
      "vile ribcage": 3,
      "bear hide": 20,
      "linen thread": 6,
    },
  },
  {
    name: "Vilebone Drapes",
    level: 4,
    set: "bear",
    stats: {
      protection: 24,
      durability: 1600,
      weight: 5,
    },
    effects: {
    },
    station: {
      forge: 5,
    },
    materials: {
      "vile ribcage": 4,
      "bear hide": 25,
      "linen thread": 7,
    },
  },
];

export const legs: Array<Omit<Armor, "id">> = legsList.map((armor) => ({
  ...armor,
  group: "armor",
  type: "legs",
}));
