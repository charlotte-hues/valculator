import { Armor } from "../@types/Armor.types";

const capeList: Array<Omit<Armor, "group" | "id" | "type">> = [
  {
    name: "Deer Hide Cape",
    level: 1,
    set: "leather",
    stats: {
      protection: 1,
      durability: 400,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 2,
    },
    materials: {
      "deer hide": 4,
      "bone fragments": 5,
    },
  },
  {
    name: "Deer Hide Cape",
    level: 2,
    set: "leather",
    stats: {
      protection: 2,
      durability: 450,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 3,
    },
    materials: {
      "deer hide": 8,
      "bone fragments": 10,
    },
  },
  {
    name: "Deer Hide Cape",
    level: 3,
    set: "leather",
    stats: {
      protection: 3,
      durability: 500,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 4,
    },
    materials: {
      "deer hide": 16,
      "bone fragments": 20,
    },
  },
  {
    name: "Deer Hide Cape",
    level: 4,
    set: "leather",
    stats: {
      protection: 4,
      durability: 550,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 5,
    },
    materials: {
      "deer hide": 28,
      "bone fragments": 35,
    },
  },
  {
    name: "Troll Hide Cape",
    level: 1,
    set: "troll",
    stats: {
      protection: 1,
      durability: 500,
      weight: 4,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 3,
    },
    materials: {
      "troll leather": 10,
      "bone fragments": 10,
    },
  },
  {
    name: "Troll Hide Cape",
    level: 2,
    set: "troll",
    stats: {
      protection: 2,
      durability: 550,
      weight: 4,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 4,
    },
    materials: {
      "troll leather": 15,
      "bone fragments": 15,
    },
  },
  {
    name: "Troll Hide Cape",
    level: 3,
    set: "troll",
    stats: {
      protection: 3,
      durability: 600,
      weight: 4,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 5,
    },
    materials: {
      "troll leather": 25,
      "bone fragments": 25,
    },
  },
  {
    name: "Troll Hide Cape",
    level: 4,
    set: "troll",
    stats: {
      protection: 4,
      durability: 650,
      weight: 4,
    },
    effects: {
      sneak: "+25%",
    },
    station: {
      workbench: 6,
    },
    materials: {
      "troll leather": 40,
      "bone fragments": 40,
    },
  },

  {
    name: "Wolf Fur Cape",
    level: 1,
    set: "wolf",
    stats: {
      protection: 1,
      durability: 1000,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      workbench: 2,
    },
    materials: {
      silver: 4,
      "wolf pelt": 6,
      "wolf trophy": 1,
    },
  },
  {
    name: "Wolf Fur Cape",
    level: 2,
    set: "wolf",
    stats: {
      protection: 2,
      durability: 1200,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      workbench: 3,
    },
    materials: {
      silver: 6,
      "wolf pelt": 10,
      "wolf trophy": 1,
    },
  },
  {
    name: "Wolf Fur Cape",
    level: 3,
    set: "wolf",
    stats: {
      protection: 3,
      durability: 1400,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      workbench: 4,
    },
    materials: {
      silver: 10,
      "wolf pelt": 18,
      "wolf trophy": 1,
    },
  },
  {
    name: "Wolf Fur Cape",
    level: 4,
    set: "wolf",
    stats: {
      protection: 4,
      durability: 1600,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      workbench: 5,
    },
    materials: {
      silver: 16,
      "wolf pelt": 30,
      "wolf trophy": 1,
    },
  },

  {
    name: "Linen Cape",
    level: 1,
    set: "padded",
    stats: {
      protection: 1,
      durability: 1500,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 2,
    },
    materials: {
      silver: 1,
      "linen thread": 20,
    },
  },
  {
    name: "Linen Cape",
    level: 2,
    set: "padded",
    stats: {
      protection: 2,
      durability: 1550,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 3,
    },
    materials: {
      silver: 1,
      "linen thread": 24,
    },
  },
  {
    name: "Linen Cape",
    level: 3,
    set: "padded",
    stats: {
      protection: 3,
      durability: 1600,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 4,
    },
    materials: {
      silver: 1,
      "linen thread": 32,
    },
  },
  {
    name: "Linen Cape",
    level: 4,
    set: "padded",
    stats: {
      protection: 4,
      durability: 1650,
      weight: 4,
    },
    effects: {},
    station: {
      workbench: 5,
    },
    materials: {
      silver: 1,
      "linen thread": 44,
    },
  },
  {
    name: "Lox Cape",
    level: 1,
    set: "lox",
    stats: {
      protection: 1,
      durability: 1200,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      workbench: 2,
    },
    materials: {
      silver: 2,
      "lox pelt": 6,
    },
  },
  {
    name: "Lox Cape",
    level: 2,
    set: "lox",
    stats: {
      protection: 2,
      durability: 1250,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      workbench: 3,
    },
    materials: {
      silver: 2,
      "lox pelt": 8,
    },
  },
  {
    name: "Lox Cape",
    level: 3,
    set: "lox",
    stats: {
      protection: 3,
      durability: 1300,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      workbench: 4,
    },
    materials: {
      silver: 2,
      "lox pelt": 12,
    },
  },
  {
    name: "Lox Cape",
    level: 4,
    set: "lox",
    stats: {
      protection: 4,
      durability: 1350,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      workbench: 5,
    },
    materials: {
      silver: 2,
      "lox pelt": 18,
    },
  },
  {
    name: "Feather Cape",
    level: 1,
    set: "eitr",
    stats: {
      protection: 1,
      durability: 1200,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      "Galdr Table": 1,
    },
    materials: {
      feathers: 10,
      "scale hide": 5,
      "refined eitr": 20,
    },
  },
  {
    name: "Feather Cape",
    level: 2,
    set: "eitr",
    stats: {
      protection: 2,
      durability: 1250,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      "Galdr Table": 2,
    },
    materials: {
      feathers: 12,
      "scale hide": 10,
      "refined eitr": 23,
    },
  },
  {
    name: "Feather Cape",
    level: 3,
    set: "eitr",
    stats: {
      protection: 3,
      durability: 1300,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      "Galdr Table": 3,
    },
    materials: {
      feathers: 16,
      "scale hide": 20,
      "refined eitr": 29,
    },
  },
  {
    name: "Feather Cape",
    level: 4,
    set: "eitr",
    stats: {
      protection: 4,
      durability: 1350,
      weight: 4,
    },
    effects: {
      additional: "Resistant vs. Frost (negated when Wet)",
    },
    station: {
      "Galdr Table": 4,
    },
    materials: {
      feathers: 22,
      "scale hide": 35,
      "refined eitr": 38,
    },
  },
];

export const cape: Array<Omit<Armor, "id">> = capeList.map((armor) => ({
  ...armor,
  group: "armor",
  type: "cape",
}));
