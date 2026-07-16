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
    set: "mage",
    stats: {
      protection: 1,
      durability: 1200,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      "galdr table": 1,
    },
    materials: {
      "refined eitr": 20,
      "scale hide": 5,
      feathers: 10,
    },
  },
  {
    name: "Feather Cape",
    level: 2,
    set: "mage",
    stats: {
      protection: 2,
      durability: 1250,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      "galdr table": 2,
    },
    materials: {
      "refined eitr": 23,
      "scale hide": 10,
      feathers: 12,
    },
  },
  {
    name: "Feather Cape",
    level: 3,
    set: "mage",
    stats: {
      protection: 3,
      durability: 1300,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      "refined eitr": 26,
      "scale hide": 15,
      feathers: 14,
    },
  },
  {
    name: "Feather Cape",
    level: 4,
    set: "mage",
    stats: {
      protection: 4,
      durability: 1350,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "refined eitr": 29,
      "scale hide": 20,
      feathers: 16,
    },
  },
  {
    name: "Asksvin Cloak",
    level: 1,
    set: "ash",
    stats: {
      protection: 1,
      durability: 1500,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      "galdr table": 2,
    },
    materials: {
      "morgen sinew": 2,
      "asksvin hide": 6,
    },
  },
  {
    name: "Asksvin Cloak",
    level: 2,
    set: "ash",
    stats: {
      protection: 2,
      durability: 1550,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      "galdr table": 3,
    },
    materials: {
      "morgen sinew": 2,
      "asksvin hide": 8,
    },
  },
  {
    name: "Asksvin Cloak",
    level: 3,
    set: "ash",
    stats: {
      protection: 3,
      durability: 1600,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "morgen sinew": 2,
      "asksvin hide": 10,
    },
  },
  {
    name: "Asksvin Cloak",
    level: 4,
    set: "ash",
    stats: {
      protection: 4,
      durability: 1650,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      "galdr table": 4,
    },
    materials: {
      "morgen sinew": 2,
      "asksvin hide": 12,
    },
  },
  {
    name: "Ashen Cape",
    level: 1,
    set: "ash",
    stats: {
      protection: 12,
      durability: 1200,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      "black forge": 3,
    },
    materials: {
      "asksvin hide": 6,
      "morgen sinew": 2,
      flametal: 5,
    },
  },
  {
    name: "Ashen Cape",
    level: 2,
    set: "ash",
    stats: {
      protection: 14,
      durability: 1250,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      "black forge": 4,
    },
    materials: {
      "asksvin hide": 8,
      "morgen sinew": 2,
      flametal: 5,
    },
  },
  {
    name: "Ashen Cape",
    level: 3,
    set: "ash",
    stats: {
      protection: 16,
      durability: 1300,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "asksvin hide": 10,
      "morgen sinew": 2,
      flametal: 5,
    },
  },
  {
    name: "Ashen Cape",
    level: 4,
    set: "ash",
    stats: {
      protection: 18,
      durability: 1350,
      weight: 4,
    },
    effects: {
      "frost resistance": true,
    },
    station: {
      "black forge": 5,
    },
    materials: {
      "asksvin hide": 12,
      "morgen sinew": 2,
      flametal: 5,
    },
  },
];

export const cape: Array<Omit<Armor, "id">> = capeList.map((armor) => ({
  ...armor,
  group: "armor",
  type: "cape",
}));
