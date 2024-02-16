import { Armor } from "../@types/Armor.types";

const chestList: Array<Omit<Armor, "group" | "id" | "type">> = [
  {
    name: "Rag Tunic",
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
    name: "Rag Tunic",
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
    name: "Leather Tunic",
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
    name: "Leather Tunic",
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
    name: "Leather Tunic",
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
      "bone fragments": 15,
    },
  },
  {
    name: "Leather Tunic",
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
      "bone fragments": 30,
    },
  },
  {
    name: "Troll Leather Tunic",
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
      "troll leather": 6,
    },
  },
  {
    name: "Troll Leather Tunic",
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
    name: "Troll Leather Tunic",
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
    name: "Troll Leather Tunic",
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
    name: "Bronze Plate Cuirass",
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
    name: "Bronze Plate Cuirass",
    level: 2,
    set: "bronze",
    stats: {
      protection: 10,
      durability: 1200,
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
    name: "Bronze Plate Cuirass",
    level: 3,
    set: "bronze",
    stats: {
      protection: 12,
      durability: 1400,
      weight: 10,
    },
    effects: {
      movementSpeed: "-5%",
    },
    station: {
      forge: 3,
    },
    materials: {
      forge: 3,
      bronze: 14,
      "deer hide": 2,
    },
  },
  {
    name: "Bronze Plate Cuirass",
    level: 4,
    set: "bronze",
    stats: {
      protection: 14,
      durability: 1600,
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
    name: "Iron Scale Mail",
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
    name: "Iron Scale Mail",
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
    name: "Iron Scale Mail",
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
    name: "Iron Scale Mail",
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
    name: "Wolf Armor Chest",
    level: 1,
    set: "wolf",
    stats: {
      protection: 20,
      durability: 1000,
      weight: 15,
    },
    effects: {
      movementSpeed: "-5%",
      "frost resistance": true,
    },
    station: {
      forge: 2,
    },
    materials: {
      silver: 20,
      "wolf pelt": 5,
      chain: 1,
    },
  },
  {
    name: "Wolf Armor Chest",
    level: 2,
    set: "wolf",
    stats: {
      protection: 22,
      durability: 1200,
      weight: 15,
    },
    effects: {
      movementSpeed: "-5%",
      "frost resistance": true,
    },
    station: {
      forge: 3,
    },
    materials: {
      silver: 25,
      "wolf pelt": 7,
      chain: 1,
    },
  },
  {
    name: "Wolf Armor Chest",
    level: 3,
    set: "wolf",
    stats: {
      protection: 24,
      durability: 1400,
      weight: 15,
    },
    effects: {
      movementSpeed: "-5%",
      "frost resistance": true,
    },
    station: {
      forge: 4,
    },
    materials: {
      silver: 35,
      "wolf pelt": 11,
      chain: 1,
    },
  },
  {
    name: "Wolf Armor Chest",
    level: 4,
    set: "wolf",
    stats: {
      protection: 26,
      durability: 1600,
      weight: 15,
    },
    effects: {
      movementSpeed: "-5%",
      "frost resistance": true,
    },
    station: {
      forge: 5,
    },
    materials: {
      silver: 50,
      "wolf pelt": 17,
      chain: 1,
    },
  },
  {
    name: "Padded Cuirass",
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
    name: "Padded Cuirass",
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
    name: "Padded Cuirass",
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
    name: "Padded Cuirass",
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
    name: "Root Harnesk",
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
    name: "Root Harnesk",
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
    name: "Root Harnesk",
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
    name: "Root Harnesk",
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
];

export const chest: Array<Omit<Armor, "id">> = chestList.map((armor) => ({
  ...armor,
  group: "armor",
  type: "chest",
}));
